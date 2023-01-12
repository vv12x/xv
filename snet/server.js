const NETWORK_PATIENCE = 8e3 + 3e3 * Math.random(),
    MM_NETWORK_PATIENCE = 3 * NETWORK_PATIENCE,
    ws = require("ws"),
    url = require("url"),
    doFlags = {
        doGF: !0,
        doYT: !1,
        doNetOnly: !0,
        doPageLoader: !0,
        doOUJS: !0,
        doRemoteCaptcha: false,
        doDual: !1,
        doSC: !0,
        doCreateServer: true,
        doExtFingerprint: !0
    },
    {
        log,
        warn
    } = console,
    {
        floor,
        random,
        ceil
    } = Math,
    pptOptions = {
        headless: !0,
        setDefaultNavigationTimeout: 0,
        setDefaultTimeout: 0,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-web-security"]
    },
    axios = require("axios"),
    fetch = require("node-fetch"),
    channels = ["https://www.youtube.com/@Taskmaster", "https://www.youtube.com/@MrBeast", "https://www.youtube.com/channel/UCAiLfjNXkNv24uhpzUgPa6A", "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA", "https://www.youtube.com/channel/UCUaT_39o1x6qWjz7K2pWcgw", "https://www.youtube.com/channel/UC4-79UOlP48-QNGgCko5p2g", "https://www.youtube.com/@quadecaX8", "https://www.youtube.com/@watcher", "https://www.youtube.com/@Zyenith", "https://www.youtube.com/@RyanGeorge", "https://www.youtube.com/@LegalEagle", "https://www.youtube.com/@jacksfilms", "https://www.youtube.com/@fantano", "https://www.youtube.com/@NerdExplains", "https://www.youtube.com/@HowToBasic", "https://www.youtube.com/channel/UCxjrNGrX188Riipfmvejjsg"];
(() => {
    Array.prototype.repeatExtend = function(e) {
        let t = this,
            o = t;
        for (let s = 0; s < e; s++) o = o.concat(t);
        return o
    }, Array.prototype.random = function() {
        return this[floor(random() * this.length)]
    };
    let e = new Map;
    Array.prototype.randomFlush = function(t) {
        let o = this[floor(random() * this.length)];
        e.has(t) || e.set(t, new Set);
        let s = e.get(t);
        for (; s.has(o);) s.size === this.length && s.clear(), o = this[floor(random() * this.length)];
        return s.add(o), o
    }
})();
let searchTerms = [];

function getRandomInt(e, t) {
    let o = ceil(e);
    return floor(random() * (floor(t) - o + 1)) + o
}
async function createPage(e, t) {
    let o = await e.newPage();
    return await o.setDefaultNavigationTimeout(0), await o.goto(t, {
        waitUntil: ["domcontentloaded"],
        timeout: 0
    }), o
}
async function standardGoto(e, t, o) {
    return console.log("navigating to", t), await e.goto(t, {
        waitUntil: ["domcontentloaded"],
        timeout: 0
    }), console.log("page dom content loaded"), o ? await wait(3e4 + 15e3 * random()) : await standardWaitForNetIdle(e), await wait(5e3 + 1e4 * random()), !0
}
async function standardWaitForNetIdle(e) {
    return await wait(5e3), console.log("waiting for network idle..."), await e.waitForNetworkIdle({
        idleTime: 7500,
        timeout: 0
    }), console.log("network idle..."), !0
}
async function randomWait() {
    return await wait(5e3 + 5e3 * random()), !0
}
async function watchRandomFrontScreenVideo(e) {
    console.log("watching..."), await e.evaluate(() => {
        function e(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        let t = Array.from(document.getElementsByClassName("yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded")).slice(0, 7);
        e(t).setAttribute("id", "__scope")
    }), await randomWait(), await e.click("#__scope"), await standardWaitForNetIdle(e);
    let t = await getMaxTime(e);
    return console.log("maxtime", t), await wait(Math.min(6e4 * getRandomInt(2, 5), t)), !0
}
async function getMaxTime(e) {
    return await e.evaluate(() => {
        let e = {
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Second: 1e3,
                Minute: 6e4,
                Hour: 36e5
            },
            t = Array.from(document.getElementsByClassName("ytp-progress-bar")).pop().ariaValueText,
            o = 0;
        t = t.split(t.includes("of") ? " of " : ", ")[1].split(" ");
        for (let s = 0; s < t.length; s += 2) o += t[s] * e[t[s + 1]];
        return o
    })
}
async function anchorAndView(e) {
    log("goto channel and view video process..."), await standardGoto(e, channels.random()), await e.click("tp-yt-paper-tab.style-scope:nth-child(4)> div:nth-child(1)"), log("clicked video stuff"), await standardWaitForNetIdle(e), log("page network idle x2"), await e.evaluate(() => {
        function e(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        let t = Array.from(document.querySelectorAll("#contents")).filter(e => "style-scope ytd-rich-grid-row" == e.getAttribute("class")).slice(6).map(e => Array.from(e.children)).flat(1).map(e => e.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1]),
            o = e(t);
        return o.setAttribute("id", "__hookedVidToWatch"), t.map(e => e.href)
    }), await wait(getRandomInt(1e3, 5e3)), await e.click("#__hookedVidToWatch"), console.log("woah clicked some videoo"), await wait(15e3);
    let t = await getMaxTime(e),
        o = Math.min(6e4 * getRandomInt(2, 5), t);
    return console.log(`watching vid for ${o}ms, max time: ${t}ms`), await wait(o), !0
}
async function frontScreenActions(e) {
    return log("going to front screen and clicking random video..."), await standardWaitForNetIdle(e), await randomWait(), log("click attempt..."), await e.evaluate(() => {
        function e(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        e(Array.from(document.getElementsByClassName("style-scope ytd-rich-grid-row")).filter(e => "contents" != e.id)).children[0].children[0].children[0].children[0].children[0].setAttribute("id", "gottemezez")
    }), await randomWait(), await e.click("#gottemezez"), await standardWaitForNetIdle(e), await watchRandomFrontScreenVideo(e), !0
}
async function searchAndView(e) {
    log("searching youtube results"), await randomWait(), await e.evaluate(() => {
        let e = Array.from(document.querySelectorAll("#search"));
        document.getElementById("__searchBoxReal") || e.find(e => "INPUT" === e.tagName).setAttribute("id", "__searchBoxReal")
    }), await e.type("#__searchBoxReal", searchTerms.random(), {
        delay: 100 + 50 * random()
    }), await wait(500 + 300 * random()), await e.click("#search-icon-legacy"), console.log("searching..."), await async function t() {
        if (!await e.evaluate(() => Array.from(document.getElementsByTagName("ytd-video-renderer")).length)) return await t()
    }(), await standardWaitForNetIdle(e);
    let t = await e.evaluate(() => {
        let e = {
            seconds: 1e3,
            minutes: 6e4,
            hours: 36e5,
            second: 1e3,
            minute: 6e4,
            hour: 36e5
        };

        function t(e) {
            return e[Math.floor(Math.random() * e.length)]
        }

        function o(t) {
            let o = t.split(", ").map(e => e.split(" ")).flat(1),
                s = 0;
            for (let r = 0; r < o.length; r += 2) s += o[r] * e[o[r + 1]];
            return s
        }
        let s = Array.from(document.getElementsByTagName("ytd-video-renderer")).map(e => e.childNodes[2].childNodes[1].childNodes[1]),
            r = t(s),
            a = r.childNodes[5].childNodes[0].childNodes[2].ariaLabel;
        return r.setAttribute("id", "__hookedVidToClick"), r.scrollIntoView(), o(a)
    });
    await wait(15e3 * Math.random()), await e.click("#__hookedVidToClick");
    let o = Math.min(6e4 * getRandomInt(1, 10), t + 5e3);
    return console.log("watching video for " + o + "ms"), await wait(o), !0
}
searchTerms.push("moomoo.io,moomoo.io hack,moomoo.io defeating hackers,moomooio,moomoo.io mods,moomoo.io insta kill,moomoo.io sandbox,moomoo.io hacks,moomoo.io base,moomoo.io world record,moomoo.io hacker,moomoo.io hack link,moomoo.io high score,moomoo.io trolling,moomoo.io defeating auto healers,moomoo.io raiding bases,moomoo.io update,moomoo.io 2,moomoo.io tutorial,moomoo.io gameplay,moomoo.io new update,moomoo.io instakill,moomoo.io highlights,moomoo.io game".split(",")), searchTerms.push("mrbeast,mr beast,mrbeast team,mrbeast crew,the old mrbeast crew,mrbeast ex employees,mrbeast ex-employees,mrbeast live,mrbeast hindi,mr. beast,mrbeast studio,mrbeast gaming,sunnyv2 mrbeast,mrbeast sunnyv2,mrbeast in hindi,who is mr beast,mr beast hindi,mr beast react,what happened to mrbeast ex employees,mr beast studio,mr beast gaming,mrbeast warehouse,mr beast in hindi,mr beast podcast,mister beast,mrbeast last to leave".split(",")), searchTerms.push("minecraft,minecraft hardcore,hardcore minecraft,minecraft challenge,minecraft but,minecraft mod,minecraft mods,minecraft 100 days,minecraft funny,funny minecraft,minecraft video,minecraft school,100 days minecraft,minecraft animation,w minecraft,minecraft compilation,minecraft pe,monster school minecraft,minecraft monster school,to be continued minecraft,minecraft izle,minecraft story,minecraft movie,minecraft house,minecraft fakir".split(",")), searchTerms.push(["moomoo.io zyenith"].repeatExtend(10)), searchTerms.push(["moomoo.io spyder"].repeatExtend(10)), searchTerms.push("bts,bts v,jin bts,bts news,bts army,v bts,rm bts,bts rm,bts jin,bts sad,sad bts,bts 日本語,bts 韓国語,bts 面白い,cctv bts,suga bts,army bts,bts live,kpop bts,jimin bts,jhope bts,bts funny,bts 日本語字幕,bts update,bts future,bts eating,bts streams,bts 日本語字幕最新,taehyung bts,jungkook bts,bts reaction,bts struggle,bts marriage,bts jungkook,bts 面白い 日本語字幕,bts playlist,bts play game,bts new video,bts news today,bts interview".split(",")), searchTerms = searchTerms.flat(3);
const hookPlaylistPoints = ["eHpl-BjXo58", "-PgyODlV6V8", "S9EkXX0QYDU", "WvcG1OKdHWo", "b6gOcEwtZ8U", "apdtzA0Dzfk", "YiukDwYv2K4", "zK-6UH5R5X8", "bIXqNjtsEf4", "3l253rESkwQ", "u6RVZKcN9zQ", "6ImZdwpdwTA", "0qPB5ANSBKc", "92duH3cqn1M", "b5lKI78fw3s", "zpCCPZfP8LI", "ES7oooakr-c", "2eWyJ8FBvQ8", "O4-B3OFPDfQ", "JFcnGk0_u7o", "AP7d2Ghq6dU", "UizEAwrZAGI", "0FAi5-h8Hj0", "CNqA6IYj17k", "tSiKyCpwnSY", "OrglyeV5xPY", "BXkB-g4eCcs", "Y53CmmpbOJs", "sm5MLz_IrQk", "EuciRU_Ska0", "cCbDCTLyPcE", "Ox7Ng5T7bmc", "TXTaB-dQg-0", "3jSWaWgr_A0", "xT8nvuxCRBE", "3c4Ab9EmRgY", "2kScgeNOpL8", "t22jhowMomc", "HbcDLgkmXLs", "JsKZ41uTegc", "dfU48FRgs0g", "3K9ILewnUko", "QmKwnRiKhDk", "n3nVsWsL6Ik", "noTs52D_MwY", "A0tDR4nTTK0", "9eBwFca-B14", "moasU30H5lA", "_Mb8oQtSBWE", "TNGGOgwPtcM", "-pYA-gjkQ8s", "5d-dB6tZZAo", "8H2AiOV0oEo", "mI7aiKDGdew", "D-IMDYrj354", "gKgFiEgghyg", "mjVwfjJ2njk", "6auDBi-D2HM", "X89-SWNdIEk", "T5Pn4LhIwjM", "wVnKGSjY3i8", "g11NJftxw14", "9zHirkfEKkk", "ZyGS_AMbIa4", "yG6bwB17ZPs", "aytHiLe0s6U", "cGe-Mpw_F1w", "eMK7xV_nxZo", "epJ2MAKa1YQ", "5BNbKKMUhEo", "oxpAvc6tDP8", "jRcc-NIR2RI", "258btO4mFw4", "pXjJAUvSbQA", "63-irfPjh2c", "xbrDZAFf3Qs", "MVHMtRlesUg", "zed05qfHMBI", "nkhkxKUHsYg", "n4cSAqR9H1Q", "gOUPndcj7zI", "n3HBTTDHoX8", "XIgMFHPIXv4", "oQHKMky-_Kc", "zfDgTzZ2nh0", "1PYettRo-DM", "jzuZuwF4904", "2DAgWTlXae8", "keouUYA5hIk", "F7i7wRlGCdc", "uToD2c0CdJc", "Y8DzpdFZZ88", "-rrH657DAao", "QTrEEWtDks4", "TWTSnQDuadY", "a0GUyvgnzgc", "eSReWZQyKdE", "D_5pMqdKSs4", "m0ie8gHS00I", "6WosqMq9ejo", "i0afAOlon_4", "j_fe6PfxW4Y", "GfPzi8SYr0w", "MSgZhNCwffM", "wxyBC_z6bI8", "PkQpV-Fwhsk", "bVD6cWOVhNU", "mjZOpQlHbxM", "k_BXkcdbBOM", "X72oUsFV7q0", "lONsILfq-WY", "Bhe9PyM_s_Q", "Bhe9PyM_s_Q", "h4TBnDkX4yo", "PNBJyHEkfk4", "L3iHS__ufcg", "m7aliUAwm_Y", "FuPVf85zMiw", "gtupAeNTDSM", "yyJ8zkckoB8", "ZDTESiN1eSw", "Fo6x16DkoRo", "IAJqRxhVqOk", "KAgwII8TGjo", "o4tLCshmlbM", "dLj5fIupdAo", "_Xl_-b9P4UQ", "V3NxxpUUfWE", "J3ygeDEMnOw", "HcP_xmdwslc", "M9g0h7px2_M", "b5WfUvcSgrU", "JGHnIshsoCE", "x2gfhCLHd94", "M5Fr8G0ma9o", "3sGeIBfFlCM", "k74y4KOJ2m4", "pTHJB0S8E-U", "KaIrXJLfYPM", "0cisZkywhgQ", "0dVzItbl9Ew", "t0EqnhcSb1s", "MuiXtvo1RYE", "Nj-3KC6knHw", "B19HbETNi58", "yKN_QkroH6s", "U9ExFM1pji0", "sONzDfjKhL4", "n3Kj8zEfewU", "nXLGQ7QeoGY", "OQFQiwiM-PY", "UtPRpKRTtHU", "E56Myp0BzEE", "7DjOp_JM2Zw", "rNFLQFz_G1g", "1r2pKoVAdjM", "gm3eiv6UNDM", "yOiROfjxzXo", "lt2AcxC_apg", "bObEme2BDOE", "6Ut6HbJmW4w", "fUs0TtQQTo0", "_phHS3FAgWQ", "1f8sU4l3dP4", "HwTSLUd53K8", "EpP2ymD_QGA", "TQ69QFqmboI", "wA8BqUka_u0", "bc8Ey-vuR5M", "PZ_uLi7ULl0", "smu5FsnhwF4", "dv1JluwoObc", "nHotP0jbcvA", "iIjYNEmrVvM", "SeP-OZAiPbc", "v52PClvMFtk", "3loLqIPxTS0", "jVu9mOzbSqU", "73SAN1vOrVk", "YLPxp4ntyms", "YWXfelRk3bQ", "CsxlLMb6Ujo", "uafGOfwzpaQ", "XIr8qotHOIE", "EcoPCWC3Uho", "AhOwyT8aIhg", "t-Ox7lI5UHs", "i08qNmssXeQ", "QrJIU09eD-g", "QvNNCQ-8RpE", "k5gjnjDFAZs", "h_NQ3y1ek8U", "evPsJlNLy_4", "qEPTydgwh4s", "LB685ckhufE", "Lj1EcSMGey0", "OE19r7MIMWQ", "u8E3p0Vy-PY", "f4a5OPFQa7k", "XDo7Q7yUEtk", "Vw_9zw0qHIc", "KGT5nbDsI_8", "E008Eql59MQ", "wSOFdefX47A", "2xcv7q3QhRE", "hgfvmcBkc04", "0wP7csnX7k4", "Xo0R8WiRSb4", "8zNp8EOpGd4", "sWYhIJZmoSE", "YdG8U1W-bX0", "QeDsoSNml-c", "xW5q77El0x8", "ZF14issJFEY", "TRglEGLLKXo", "UE0SXc5k1eg", "6VY65D8f3DQ", "Iwxuob4fA8Q", "M4elJHCUIis", "GY9WWhO504k", "eErUSxmLDw8", "ITQfAfzLj3I", "vbDrCL2FuLg", "KyQ_sUgtbKU", "lbEJcipUp8I", "2SqCn2LreNg", "1i-G2TUn410", "s0ru6uK7vi8", "gOxiE5UAADw", "lx1rOOjekc8", "5VYN2zA-Sik", "q9rLWEAzook", "4KSm3IY7Xzg", "fMqRu_ON-DE", "GfvShU6Sy9A", "OHzOmi1b60Y", "D9oTUKT-_nA", "_BrT2PlUiw0", "kuuI4LzKgmI", "78dymyg88rM", "mi0nGt2B-qo", "HaI7BjnwnOc", "xlAEOkIuy7Y", "3VmtckvTXlU", "ed7TWHKDr4E", "2LfTjyVtbfU", "STHlCkloyvE", "-BI_-6YnM6Y", "LSK_G1qCQwM", "4tzqIl6EKVk", "9DshU55EiV8", "mBtaEI_6e8s", "960lvuduwYw", "XWJH-6J5Eeg", "XLS4qmyCAXg", "8cJDYeRiLnk", "cCaIVrltHzw", "8X2fF4pgM0E", "6s8Xm4wylr4", "eFceshvavno", "2h4g7euqR-U", "ujiBqXnn928", "w9F2NST-9js", "w-oc7F5MmyU", "UYrmqL3cODU", "4QB59etj0Io", "MY9MTNgXcNo", "ISBmcKDS5C8", "ogIb7A7tvW0", "-L583IZF6sk", "NbeKQq29ZL0", "SPplDxd74Fs", "MHGV8QmpAzk", "iWzezFWpU7A", "NNCQt1rXXEY", "bcb_ZhJJK8g", "3KoZGQiY6No", "aSaXQH8F1_A", "V5nMOhI62ow", "JvlPjRUdId0", "2gQHuClLCb0", "5e-qDy-uUJE", "oE8vC0QEWUE", "7cQken99yuo", "pmzu080j7rI", "sVy9F4whP6o", "MJrkylk7iEc", "XYjsTxi6oE8", "mKlMouB6tp0", "o2yunZQleyA", "oRryU9F9Lvs", "uzzK-052H0c", "VSvA4rCe-4M", "XURH2u_0fMI", "yfpVL2g_tko", "AuEEjQ8x9ow", "wWkviY8zBrc", "zt_eubHWhxc", "O_7_BGU3u_0", "QFDKBxmOn3Y", "w6gccNWXXvg", "VdNJxbrqdXs", "wbi5DxebvnI", "XEFOREYrJgk", "I2rcRta7WJ0", "OP5KGfXHX_A", "w2MUMbbwlmo", "X3bF0nd6kfw", "WDDAhASf9jw", "fRwcV8gjbcw", "7T63gaRThr0", "zC8AWIwhbfs", "JSkVE0n-eeo", "qiQA5pWWRtU", "QdXCjZtfXuc", "vlBji8TOaxo", "pBx_5CbIcpo", "L1Oy5F6ZMOQ", "P0NjLaBed-E", "DR16C4-keB0", "LGmpIpu9eDw", "rNkX_A4kBAQ", "QztVMjrEk40", "uOM6m6KL5d4", "g-Aju8xrrOE", "DfkDbFk_x98", "Y4NLDaowD6I", "ALSZnqQTuJo", "xUmB6BpZBEw", "SxNOcZ1s858", "-noeCjO416k", "taPJqXBI8VY", "YxqbkMi1Is4", "vnJTyve2r-4", "44lRVYQ38EQ", "QOv1N1X5J-g", "jNjREs7ODTg", "U30ToJo3ddk", "rm7lNIIOQCY", "mGU6sOPlYvc", "6pwxUXdt6TQ", "6MkJRee35aQ", "LVbf7U9WAIc", "gPbhFvEeJ3M", "LWXAxz0MiHA", "L0KQJqfwJJY", "GWr33_u0VKc", "4ud3ZPfWkHs", "dxSrySC4XMc", "iIM2KZC69W0", "8DuJ3BAwMEo", "m3BAhe1wslY", "02U_3pAZxM8", "0e7nidPa97g", "TixW__6Eero", "q46W8MTRTCE", "Jdxp04Je1Ow", "HfP4TO3gfN0", "4dUJaeB0qL8", "xnL-fRJ3RZo", "yJbD0Df45uQ", "-pGw8RkSSBk", "7cy86NjsisM", "jbgqvxtauo4", "N8M00JjSVII", "MfR5q6Td3Rc", "eHwcx94wcps", "olDgVFgAgPo", "eAAd5BmzXzM", "xgTjQ2sGXd4", "ipny6JUbzws", "WOwQ0UxbRj4", "h0PKFed2GBs", "JxdOrgzq7Z8", "-VgpSWWW-8w", "-ix4OizkAns", "d3CRE9y3YVs", "4QZlfXxorJo", "YlDpg8aCs5M", "Qe5WT22-AO8", "b_rjBWmc1iQ", "9yjZpBq1XBE", "hPx-RiBKXtQ", "UMqLDhl8PXw", "DlJEt2KU33I", "BWeqoARup-Q", "2Dx76lD8Scc", "j_nI6G3ZDiE", "zvcUYYN1sxw", "cWRkYo1S3L4", "cWRkYo1S3L4", "bxC_PN3SRvI", "94m93T_5JLM", "RBSHAH4iWU8", "RBSHAH4iWU8", "RBSHAH4iWU8", "bo9fTeXvSiA", "z6LqXiAK-80", "5tbOspjJ5f0", "twQ6kKjtBkY", "Ig17K38Fy0Y", "ZdlrVDwn_a4", "aCT4Lddunxg", "acAvMGQtlnM", "8XkcbdSRdO0", "0e3GPea1Tyg", "zxYjTTXc-J8", "9bqk6ZUsKyA", "plSyrHqUh78", "HkvQywg_uZA", "lADBHDg-JtA", "I2O7blSSzpI", "kd2KEHvK-q8", "CbUjuwhQPKs", "fb7T1v_VHpE", "SpeSpA3e56A", "RQdxHi4_Pvc", "nx2-4l4s4Nw", "tUTCq3iiw_4", "VDa5iGiPgGs", "S-sJp1FfG7Q", "Hm1YFszJWbQ"];
async function keyWatch(e) {
    log("standard keyWatch..."), await standardGoto(e, "https://www.youtube.com/watch?v=" + hookPlaylistPoints.random() + "&list=PL7D9Ps0wVt5cynwDE_CPYb6aBUkYyfi-y", !1), log("clicking..."), await e.click("#button > ytd-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill"), await e.click("#top-level-buttons-computed > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
    let t = setInterval(async () => {
        log("executed cleanup interval, check process..."), await e.evaluate(() => {
            setTimeout(() => {
                document.querySelector(".ytp-large-play-button")?.offsetParent && document.querySelector(".ytp-large-play-button").setAttribute("id", "__lllll")
            }, 3e3 + 1e3 * Math.random())
        })
    }, 7e3);
    await wait(3e5);
    try {
        await e.click("#__lllll")
    } catch (o) {}
    return await wait(6e4 * getRandomInt(4, 25)), clearInterval(t), !0
}
const GlobalActions = [searchAndView, anchorAndView, frontScreenActions, keyWatch],
    wait = e => new Promise(t => setTimeout(t, e));
async function runYTModule(e, t) {
    let o = await createPage(e, "https://www.youtube.com/");
    for (console.log("navigated to youtube..."), await randomWait();;) {
        let s = !1;
        try {
            await standardWaitForNetIdle(o), await GlobalActions.random()(o)
        } catch (r) {
            console.log((s = !0, r)), o.close()
        }
        if (s) break;
        await randomWait()
    }
    return !0
}
const scriptTargets = [{
    url: "https://greasyfork.org/en/scripts/457024-surviv-io-xclient-beta",
    preRef: "https://greasyfork.org/en/scripts/by-site/surviv.io"
}, {
    url: "https://greasyfork.org/en/scripts/404065-%E7%BD%91%E9%A1%B5%E7%B2%BE%E7%81%B5",
    preRef: "https://greasyfork.org/en/scripts/by-site/51cto.com"
}, {
    url: "https://greasyfork.org/en/scripts/22545-anti-bd-redirect",
    preRef: "https://greasyfork.org/zn-CN/scripts/by-site/baidu.com?page=4"
}, {
    url: "https://greasyfork.org/zn-CN/scripts/385044-zhihu-anonymous-users",
    preRef: "https://greasyfork.org/zn-CN/scripts/by-site/zhihu.com"
}, {
    url: "https://greasyfork.org/zn-CN/scripts/30236-zhihu-link-fix",
    preRef: "https://greasyfork.org/zn-CN/scripts/by-site/zhihu.com"
}, {
    url: "https://greasyfork.org/en/scripts/435948-btb",
    preRef: "https://greasyfork.org/en/scripts/by-site/baidu.com"
}, {
    url: "https://greasyfork.org/en/scripts/430335-wb-script",
    preRef: "https://greasyfork.org/en/scripts/by-site/zhihu.com"
}, {
    url: "https://greasyfork.org/en/scripts/430572-beautify-the-baidu-homepage",
    preRef: "https://greasyfork.org/en/scripts/by-site/zhihu.com"
}, {
    url: "https://greasyfork.org/en/scripts/410781-diep-io-anti-afk-timeout",
    preRef: "https://greasyfork.org/en/scripts/by-site/diep.io"
}, {
    url: "https://greasyfork.org/en/scripts/1196-view-youtube-tags",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/21012-youtubeext",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/20798-youtube-hide-volume-control",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/9090-youtube-add-video-id-text-field",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/20710-calm-down-youtube",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/39544-youtube-polymer-disable",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/412698-youtube-auto-skip-ads",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/413965-youtube-like-dislike-video-and-skip-ad-keyboard-shortcuts-fork-from-nerevar009",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/39919-youtube-suggested-video-hider-for-youtube-classic",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/414756-requesthook",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/414876-live-chat-mod-caliber",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/40462-youtube-no-resume",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/40517-youtube-resume",
    preRef: "https://greasyfork.org/en/scripts/by-site/youtube.com?page=9"
}, {
    url: "https://greasyfork.org/en/scripts/415706-moomoo-io-remove-cookie-preferences-tab",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/405955-web-security",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/381682-html5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/429635-always-on-focus",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/30310-removeads",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/455853-%E7%BD%91%E9%A1%B5%E8%AE%BF%E9%97%AE%E5%8A%A0%E9%80%9F%E5%99%A8",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/454941-hcaptcha-captcha-solver-by-nocaptchaai",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/374794-lift-web-restrictions-io-game-mods-moomoo-io-krunker-io-ad-link-bypasser-adblock-more",
    preRef: "https://greasyfork.org/en/scripts/by-site/baidu.com"
}, {
    url: "https://greasyfork.org/en/scripts/374794-lift-web-restrictions-io-game-mods-moomoo-io-krunker-io-ad-link-bypasser-adblock-more",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/374794-lift-web-restrictions-io-game-mods-moomoo-io-krunker-io-ad-link-bypasser-adblock-more",
    preRef: "https://greasyfork.org/en/scripts/by-site/discord.com"
}, {
    url: "https://greasyfork.org/en/scripts/407994-mope-io-auto-dive-auto-boost-see-people-underwater-see-invisible-players-remove-ads",
    preRef: "https://greasyfork.org/en/scripts/by-site/mope.io"
}, {
    url: "https://greasyfork.org/en/scripts/424066-pancake-mod-katana-musket-autoheal-anti-insta-starter-resources-and-more",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/429746-best-moomoo-io-hack-mod-2022-2023",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/405943-moomoo-io-agar-io-surviv-io-slither-io-diep-io-global-name-manager-krunker-coming-soon",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/456855-anti-anti-adblock-v1-all-sites",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/454134-moomoo-io-dune-mod-autoheal-autobreak-fast-and-more",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/424447-xtaming-client-taming-io-hacks",
    preRef: "https://greasyfork.org/en/scripts/by-site/taming.io"
}, {
    url: "https://greasyfork.org/en/scripts/451547-moomoo-io-insane-mod-beta-too-fast-read-description",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/424655-i30cps-utility-mod",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/448601-%E5%8A%9B%E6%89%A3%E9%A2%98%E7%9B%AE%E8%BD%ACmarkdown",
    preRef: "https://greasyfork.org/en/scripts/by-site/leetcode.cn"
}, {
    url: "https://greasyfork.org/en/scripts/445806-moomoo-io-auto-heal",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/434199-moomoo-io-helper-to-become-pro",
    preRef: "https://greasyfork.org/en/scripts/by-site/moomoo.io"
}, {
    url: "https://greasyfork.org/en/scripts/405943-moomoo-io-agar-io-surviv-io-slither-io-diep-io-global-name-manager-krunker-coming-soon",
    preRef: "https://greasyfork.org/en/scripts/by-site/slither.io"
}, {
    url: "https://greasyfork.org/en/scripts/454409-video-downloader-for-tampermonkey",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/452314-adblock-script-for-webview",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/35466-mouseplus",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/456851-omnifocus",
    preRef: "https://greasyfork.org/en/scripts/by-site/*"
}, {
    url: "https://greasyfork.org/en/scripts/430253-arras-io-multibox-script",
    preRef: "https://greasyfork.org/en/scripts/by-site/arras.io"
}, {
    url: "https://greasyfork.org/en/scripts/438879-diep-io-permanent-leader-arrow",
    preRef: "https://greasyfork.org/en/scripts/by-site/diep.io"
}, {
    url: "https://greasyfork.org/en/scripts/430255-warinspace-bots",
    preRef: "https://greasyfork.org/en/scripts/by-site/warin.space"
}, {
    url: "https://greasyfork.org/en/scripts/444523-diep-io-minimap-highlights",
    preRef: "https://greasyfork.org/en/scripts/by-site/diep.io"
}, {
    url: "https://greasyfork.org/en/scripts/456856-optimize-quill-org",
    preRef: "https://greasyfork.org/en/scripts/by-site/quill.org"
}];

function fetchRandomSC() {
    return .5 >= Math.random() ? "https://soundcloud.com/22down/long-day-remix-prod-unnecessary-beats?si=30458c9ce44c4b4eaab8a3eca1b3a58e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" : .2 > Math.random() ? "https://soundcloud.com/22down/whatnot-demo?si=cf08c07128594bf6b3d049e1680b972f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" : "https://soundcloud.com/22down/worried-about-the-truth-ft-rikanbeastly-nikkkq-casualcheater?si=20d1c332655b4ef198a379eac005725b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
}
async function runGFModule(browser, userAction) {
    async function createPage() {
        if (.4 >= Math.random() && doFlags.doSC) {
            let {
                url: scriptRealLink,
                preRef: potentialPreReferrer
            } = scriptTargets.randomFlush(1), context = await browser.createIncognitoBrowserContext(), page = await context.newPage(), stopFlag = 0;
            if (await page.goto(potentialPreReferrer, {
                    timeout: NETWORK_PATIENCE
                }).catch(e => stopFlag++), stopFlag) return await page.close(), await context.close(), createPage();
            let ctx = await page.evaluate("document.documentElement.innerHTML");
            return (log(ctx.slice(0, 50)), ctx.includes("script-description")) ? (log("p1"), await page.goto(scriptRealLink, {
                timeout: NETWORK_PATIENCE
            }).catch(e => stopFlag++), stopFlag) ? (await page.close(), await context.close(), createPage()) : (await new Promise(e => setTimeout(e, 2e3 + floor(1e3 * random()))), log("p2"), log(await page.evaluate(() => {
                var root = "object" == typeof window ? window : {},
                    NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                NODE_JS && (root = global);
                var HEX_CHARS = "0123456789abcdef".split(""),
                    EXTRA = [-2147483648, 8388608, 32768, 128],
                    SHIFT = [24, 16, 8, 0],
                    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                    blocks = [],
                    createOutputMethod = function(e) {
                        return function(t) {
                            return new Sha1(!0).update(t)[e]()
                        }
                    },
                    createMethod = function() {
                        var e = createOutputMethod("hex");
                        NODE_JS && (e = nodeWrap(e)), e.create = function() {
                            return new Sha1
                        }, e.update = function(t) {
                            return e.create().update(t)
                        };
                        for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                            var o = OUTPUT_TYPES[t];
                            e[o] = createOutputMethod(o)
                        }
                        return e
                    },
                    nodeWrap = function(method) {
                        var nodeMethod, crypto = eval("require('crypto')"),
                            Buffer = eval("require('buffer').Buffer");
                        return function(e) {
                            if ("string" == typeof e) return crypto.createHash("sha1").update(e, "utf8").digest("hex");
                            if (e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (void 0 === e.length) return method(e);
                            return crypto.createHash("sha1").update(new Buffer(e)).digest("hex")
                        }
                    };
                class Sha1 {
                    constructor(e) {
                        e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    update(e) {
                        if (!this.finalized) {
                            var t = "string" != typeof e;
                            t && e.constructor === root.ArrayBuffer && (e = new Uint8Array(e));
                            for (var o, s, r = 0, a = e.length || 0, i = this.blocks; r < a;) {
                                if (this.hashed && (this.hashed = !1, i[0] = this.block, i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0), t)
                                    for (s = this.start; r < a && s < 64; ++r) i[s >> 2] |= e[r] << SHIFT[3 & s++];
                                else
                                    for (s = this.start; r < a && s < 64; ++r)(o = e.charCodeAt(r)) < 128 ? i[s >> 2] |= o << SHIFT[3 & s++] : o < 2048 ? (i[s >> 2] |= (192 | o >> 6) << SHIFT[3 & s++], i[s >> 2] |= (128 | 63 & o) << SHIFT[3 & s++]) : o < 55296 || o >= 57344 ? (i[s >> 2] |= (224 | o >> 12) << SHIFT[3 & s++], i[s >> 2] |= (128 | o >> 6 & 63) << SHIFT[3 & s++], i[s >> 2] |= (128 | 63 & o) << SHIFT[3 & s++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++r)), i[s >> 2] |= (240 | o >> 18) << SHIFT[3 & s++], i[s >> 2] |= (128 | o >> 12 & 63) << SHIFT[3 & s++], i[s >> 2] |= (128 | o >> 6 & 63) << SHIFT[3 & s++], i[s >> 2] |= (128 | 63 & o) << SHIFT[3 & s++]);
                                this.lastByteIndex = s, this.bytes += s - this.start, s >= 64 ? (this.block = i[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }
                    finalize() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var e = this.blocks,
                                t = this.lastByteIndex;
                            e[16] = this.block, e[t >> 2] |= EXTRA[3 & t], this.block = e[16], t >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                        }
                    }
                    hash() {
                        var e, t, o, s = this.h0,
                            r = this.h1,
                            a = this.h2,
                            i = this.h3,
                            n = this.h4,
                            c = this.blocks;
                        for (t = 16; t < 80; ++t) o = c[t - 3] ^ c[t - 8] ^ c[t - 14] ^ c[t - 16], c[t] = o << 1 | o >>> 31;
                        for (t = 0; t < 20; t += 5) e = r & a | ~r & i, n = (o = s << 5 | s >>> 27) + e + n + 1518500249 + c[t] << 0, e = s & (r = r << 30 | r >>> 2) | ~s & a, i = (o = n << 5 | n >>> 27) + e + i + 1518500249 + c[t + 1] << 0, e = n & (s = s << 30 | s >>> 2) | ~n & r, a = (o = i << 5 | i >>> 27) + e + a + 1518500249 + c[t + 2] << 0, e = i & (n = n << 30 | n >>> 2) | ~i & s, r = (o = a << 5 | a >>> 27) + e + r + 1518500249 + c[t + 3] << 0, e = a & (i = i << 30 | i >>> 2) | ~a & n, s = (o = r << 5 | r >>> 27) + e + s + 1518500249 + c[t + 4] << 0, a = a << 30 | a >>> 2;
                        for (; t < 40; t += 5) e = r ^ a ^ i, n = (o = s << 5 | s >>> 27) + e + n + 1859775393 + c[t] << 0, e = s ^ (r = r << 30 | r >>> 2) ^ a, i = (o = n << 5 | n >>> 27) + e + i + 1859775393 + c[t + 1] << 0, e = n ^ (s = s << 30 | s >>> 2) ^ r, a = (o = i << 5 | i >>> 27) + e + a + 1859775393 + c[t + 2] << 0, e = i ^ (n = n << 30 | n >>> 2) ^ s, r = (o = a << 5 | a >>> 27) + e + r + 1859775393 + c[t + 3] << 0, e = a ^ (i = i << 30 | i >>> 2) ^ n, s = (o = r << 5 | r >>> 27) + e + s + 1859775393 + c[t + 4] << 0, a = a << 30 | a >>> 2;
                        for (; t < 60; t += 5) e = r & a | r & i | a & i, n = (o = s << 5 | s >>> 27) + e + n - 1894007588 + c[t] << 0, e = s & (r = r << 30 | r >>> 2) | s & a | r & a, i = (o = n << 5 | n >>> 27) + e + i - 1894007588 + c[t + 1] << 0, e = n & (s = s << 30 | s >>> 2) | n & r | s & r, a = (o = i << 5 | i >>> 27) + e + a - 1894007588 + c[t + 2] << 0, e = i & (n = n << 30 | n >>> 2) | i & s | n & s, r = (o = a << 5 | a >>> 27) + e + r - 1894007588 + c[t + 3] << 0, e = a & (i = i << 30 | i >>> 2) | a & n | i & n, s = (o = r << 5 | r >>> 27) + e + s - 1894007588 + c[t + 4] << 0, a = a << 30 | a >>> 2;
                        for (; t < 80; t += 5) e = r ^ a ^ i, n = (o = s << 5 | s >>> 27) + e + n - 899497514 + c[t] << 0, e = s ^ (r = r << 30 | r >>> 2) ^ a, i = (o = n << 5 | n >>> 27) + e + i - 899497514 + c[t + 1] << 0, e = n ^ (s = s << 30 | s >>> 2) ^ r, a = (o = i << 5 | i >>> 27) + e + a - 899497514 + c[t + 2] << 0, e = i ^ (n = n << 30 | n >>> 2) ^ s, r = (o = a << 5 | a >>> 27) + e + r - 899497514 + c[t + 3] << 0, e = a ^ (i = i << 30 | i >>> 2) ^ n, s = (o = r << 5 | r >>> 27) + e + s - 899497514 + c[t + 4] << 0, a = a << 30 | a >>> 2;
                        this.h0 = this.h0 + s << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + a << 0, this.h3 = this.h3 + i << 0, this.h4 = this.h4 + n << 0
                    }
                    hex() {
                        this.finalize();
                        var e = this.h0,
                            t = this.h1,
                            o = this.h2,
                            s = this.h3,
                            r = this.h4;
                        return HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
                    }
                    digest() {
                        this.finalize();
                        var e = this.h0,
                            t = this.h1,
                            o = this.h2,
                            s = this.h3,
                            r = this.h4;
                        return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                    }
                    arrayBuffer() {
                        this.finalize();
                        var e = new ArrayBuffer(20),
                            t = new DataView(e);
                        return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), e
                    }
                }
                Sha1.prototype.toString = Sha1.prototype.hex, Sha1.prototype.array = Sha1.prototype.digest;
                let sha1 = createMethod();
                window.localStorage.setItem("manualOverrideInstallJS", "1");
                let installLink = document.getElementsByClassName("install-link")[0];
                return window.Promise = class _Promise extends window.Promise {
                    constructor(...e) {
                        let t = !1;
                        e[0].toString().includes('getAttribute("data-ping-url') && (e[0] = e => {
                            let o = installLink.getAttribute("data-ping-url");
                            if (o) {
                                let s = sha1(installLink.getAttribute("data-ip-address") + installLink.getAttribute("data-script-id") + installLink.getAttribute("data-ping-key")),
                                    r = new XMLHttpRequest;
                                r.open("POST", o + "&mo=3&ping_key=" + encodeURIComponent(s), !0), r.overrideMimeType("text/plain"), r.onload = () => {}, r.send(), t = !0
                            }
                        }), t || super(...e)
                    }
                }, window.setTimeout(() => {
                    installLink.click()
                }, 1500), Promise.resolve(1)
            })), log("after..."), await new Promise(e => setTimeout(e, NETWORK_PATIENCE)), await page.close(), await context.close(), createPage()) : (await page.close(), await context.close(), createPage())
        } {
            let context = await browser.createIncognitoBrowserContext(),
                page = await context.newPage(),
                stopFlag = 0;
            if (await page.goto(fetchRandomSC(), {
                    timeout: NETWORK_PATIENCE
                }).catch(e => stopFlag++), stopFlag) return await page.close(), await context.close(), createPage();
            try {
                await page.evaluate(() => {
                    let e = document.querySelector("#content > div > div.l-listen-hero > div > div.fullHero__foreground.fullListenHero__foreground.sc-p-4x > div.fullHero__title > div > div > div.soundTitle__playButton.soundTitle__playButtonHero.theme-light > a");
                    e && "Play" === e.textContent && e.click()
                }), await wait(45e3 + getRandomInt(15e3, 3e4))
            } catch (e) {}
            return await page.close(), await context.close(), createPage()
        }
    }
    for (let i = 0; i < 1; i++) createPage()
}
if (doFlags.doCreateServer) {
    let n = require("http").createServer(async function(e, t) {
        let o = url.parse(e.url).pathname;
        t.writeHead(200);
        t.write("v0.2");
    });
    n.listen(process.env.PORT || 8080)
};
const userAgents = ["Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.128 Mobile Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.46", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"],
    miscSites = ["https://discord.com", "https://stratums.io", "https://www.npmjs.com/", "https://github.com", "https://minecraft.net", "https://www.wsj.com/", "https://zbeacon.org", "https://yahoo.com", "https://www.theguardian.com/", "https://baidu.com/", "https://wikipedia.org", "https://pornhub.com"],
    miscSites2 = ["https://medium.com/", "https://medium.com/@syn_52523/ethics-of-advertising-and-ad-blocking-a62bdde987b0", "https://medium.com/@digitalgiraffes/7-awesome-and-free-ai-tools-you-should-know-43a1630ea409", "https://medium.com/@syn_52523/a-commentary-on-the-ai-wave-215d668f827a", "https://medium.com/@melih193/react-developer-roadmap-2022-76ca119188bd", "https://medium.com/entrepreneur-s-handbook/is-your-startup-a-good-fit-for-venture-capital-bc59596df9e4", "https://medium.com/@syn_52523/the-simple-fundamentals-of-c-eed2fbb57929", "https://medium.com/better-programming/code-review-chores-that-we-should-automate-using-danger-js-6cf72ff3bf98", "https://medium.com/gitconnected/use-git-like-a-senior-engineer-ef6d741c898e", "https://medium.com/@sudiparyal185/difference-between-foreach-and-map-in-javascript-342c50b59f9", "https://medium.com/@dan-perry/the-world-that-knew-too-much-e9ca2372ee21", "https://medium.com/bitsrc/advanced-data-structures-and-algorithms-tries-47db931e20e", "https://dashmacintyre.medium.com/a-list-of-stories-donald-trump-paid-to-catch-and-kill-just-leaked-5e29f9f5f687", "https://medium.com/@syn_52523/small-javascript-optimization-tips-1c4cb387a463", "https://medium.com/@michaelcostello.swe/dbspy-4-0-6989c6ea47d8", "https://medium.com/@syn_52523/chatgpt-on-itself-3b1042b968cb", "https://medium.com/@thisisjimkeller/please-stop-including-color-names-in-your-css-classes-f1090f6f2e29", "https://medium.com/@mattcodes06/building-projects-takes-time-18dfa6d6e702", "https://medium.com/@syn_52523/a-rabbit-hole-of-js-hyper-optimization-a618288174b", "https://medium.com/@olopadeadunola/the-chaos-in-our-twenties-8fcefe061ef8", "https://medium.com/@leanfolks/mobile-app-architecture-6848aa1d5764", "https://blog.bitsrc.io/i-asked-chat-gpt-to-build-a-to-do-app-have-we-finally-met-our-replacement-ad347ad74c51", "https://medium.com/@alexey.inkin/never-have-separate-sign-in-routes-7c9a6dd4dc7c", "https://medium.com/@syn_52523/breaking-into-the-market-1b6652b2a05a", "https://medium.com/@syn_52523/javascript-series-the-fundamentals-1a646c357955", "https://medium.com/@syn_52523/javascript-series-oop-and-constructors-10dc5877e985", "https://medium.com/better-programming/legacy-code-potential-gold-mine-of-learning-a59fdcb14804", "https://medium.com/@syn_52523/a-commentary-on-the-ai-wave-ii-7de427c9fd15"];
(async () => {
    log("index.js called");
    let {
        FakeBrowser: e
    } = require("fakebrowser"), t = require("path"), o = t.resolve(__dirname, "./fakeBrowserUserData"), s = new e.Builder().displayUserActionLayer(!1).vanillaLaunchOptions(pptOptions).usePlugins([require("puppeteer-extra-plugin-adblocker")({
        blockTrackers: !0,
        blockTrackersAndAnnoyances: !0
    })]).userDataDir(o), r;
    x: for (;;) try {
        let a = await async function e() {
            let t, o = {
                "User-Agent": userAgents.random(),
                "Accept-Encoding": "none"
            };
            try {
                t = (await axios.get(process.env.DD_URL, {
                    headers: o
                }))?.data
            } catch (s) {}
            if (t) try {
                t = (await axios.get(t, {
                    headers: o
                }))?.data
            } catch (r) {}
            if (!t) return await randomWait(), await e();
            try {
                return "object" == typeof t ? t : "string" == typeof t ? JSON.parse(t) : {}
            } catch (a) {
                if (!t) return await randomWait(), await e()
            }
        }();
        doFlags.doExtFingerprint && s.deviceDescriptor(a), r = await s.launch();
        break x
    } catch (i) {
        warn(i), await randomWait()
    }
    let n = r.userAction;
    log("browser launched");
    let c = r.vanillaBrowser;
    doFlags.doYT && setTimeout(async () => {
        for (;;) await runYTModule(c, n)
    }, 100), doFlags.doGF && setTimeout(async () => {
        await runGFModule(c, n)
    }, 100), doFlags.doNetOnly && setTimeout(async () => {
        let e = axios.create({
            headers: {
                "User-Agent": userAgents.random()
            }
        });
        e.get(miscSites.random(), {
            timeout: 0,
            headers: {
                "User-Agent": userAgents.random(),
                "Accept-Encoding": "none"
            }
        }).catch(e => {}), setInterval(() => {
            e.get(miscSites.random(), {
                timeout: 0,
                headers: {
                    "User-Agent": userAgents.random(),
                    "Accept-Encoding": "none"
                }
            }).catch(e => {})
        }, 7e3 * getRandomInt(1, 5)), doFlags.doPageLoader && async function e() {
            let t = await c.createIncognitoBrowserContext(),
                o = await t.newPage();
            for (;;) {
                let s = 0;
                if (await o.goto(miscSites2.random(), {
                        timeout: NETWORK_PATIENCE
                    }).catch(e => s++), await randomWait(), s) return await o.close(), await t.close(), await e();
                for (let r = 0; r < getRandomInt(1, 5); r++) await o.keyboard.press("ArrowDown"), await randomWait();
                await randomWait(), await wait(6e4)
            }
        }()
    }, 100), doFlags.doRemoteCaptcha && setTimeout(async function e() {
        let t = await c.createIncognitoBrowserContext(),
            o = 0,
            s = await t.newPage();
        if (await s.goto("https://moomoo.io", {
                timeout: MM_NETWORK_PATIENCE
            }).catch(e => o++), o || !(await s.evaluate("document.documentElement.innerHTML")).includes("isMoomooIo")) return await s.close(), await t.close(), e();
        let r;
        if (doFlags.doDual) {
            if (await (r = await t.newPage()).goto("https://moomoo.io", {
                    timeout: MM_NETWORK_PATIENCE
                }).catch(e => o++), o) return await r.close(), await t.close(), e();
            let a = await r.evaluate("document.documentElement.innerHTML");
            if (log(a.slice(0, 50)), !a.includes("isMoomooIo")) return await r.close(), await t.close(), e()
        }
        async function i(e) {
            return await (e && doFlags.doDual ? r : s).evaluate(async () => new Promise(async (e, t) => {
                window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
                    action: "homepage"
                }).then(t => {
                    e(t)
                })
            }))
        }
        let l = new ws("wss://stratums.io/?pwd=" + process.env.pwd);
        async function $(e) {
            try {
                l.send(process.env.PROJECT_DOMAIN + "")
            } catch (t) {}
        }

        function p() {
            (l = new ws("wss://stratums.io/?pwd=" + process.env.pwd)).on("close", p), l.on("error", p), l.on("open", $)
        }
        l.on("close", p), l.on("error", p), l.on("open", $)
    }, 100)
})(), doFlags.doOUJS && (async () => {
    let e = ["https://openuserjs.org/scripts/zyenith/Lift_Web_Restrictions_.io_Game_Mods_(MooMoo.ioKrunker.io..),_Ad_Link_Bypasser,_Adblock,_MORE!", "https://openuserjs.org/scripts/zyenith/MooMoo.io,_Agar.io,_Surviv.io,_Slither.io,_Diep.io,_Global_Name_Manager_[Krunker_Coming_Soon]", "https://openuserjs.org/scripts/zyenith/pancake_mod_Katana_+_Musket_AUTOHEAL_Anti-Insta_starter_resources_and_more!!", "https://openuserjs.org/scripts/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha", "https://openuserjs.org/scripts/MAX30/TopAndDownButtonsEverywhere", "https://openuserjs.org/scripts/reek/Anti-Adblock_Killer_Reek", "https://openuserjs.org/scripts/ParticleCore/YouTube_+", "https://openuserjs.org/scripts/MAX30/bongacamsKillAds", "https://openuserjs.org/scripts/founcs/Limitless_Freedom", "https://openuserjs.org/scripts/aycabta/Twitter_Image_Maximizer", "https://openuserjs.org/scripts/Marti/oujs_-_JsBeautify", "https://openuserjs.org/scripts/AdlerED/%E6%9C%80%E5%BC%BA%E7%9A%84%E8%80%81%E7%89%8C%E8%84%9A%E6%9C%ACCSDNGreener%EF%BC%9ACSDN%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4%E3%80%81%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96", "https://openuserjs.org/scripts/laidbacktempo/EasyVideoDownload", "https://openuserjs.org/scripts/zyenith/Optimize_Quill.org", "https://openuserjs.org/scripts/mscarchilli/Amazon_Smile_Redirect", "https://openuserjs.org/scripts/AltoRetrato/IMDb_My_Movies_enhancer", "https://openuserjs.org/scripts/xthexder/Wide_GitHub", "https://openuserjs.org/scripts/navchandar/Auto_Load_Big_Image", "https://openuserjs.org/scripts/extensionsapp/cinemapress", "https://openuserjs.org/scripts/zyenith/Surviv.io_XClient_(BETA)", "https://openuserjs.org/scripts/Zren/Resize_YT_To_Window_Size", "https://openuserjs.org/scripts/zyenith/Moomoo.io_Remove_Cookie_Preferences_Tab"],
        t = "https://openuserjs.org/";

    function o(e, t = !0) {
        if (e.includes("Firefox")) {
            let o = e.slice(e.indexOf("Firefox") + 7 + 1);
            return o
        }
        let s = e.indexOf("Chrome/") + 7,
            r = e.slice(s),
            a = r.slice(0, r.indexOf(" "));
        return t ? a.slice(0, a.indexOf(".")) : a
    }
    let s = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"];

    function r() {
        let e = s.random();
        return [e, e.includes("Firefox")]
    }
    async function a() {
        let s = e.random(),
            a = s.replace("/scripts/", "/install/") + ".user.js",
            [i, n] = r(),
            c = o(i),
            l = {
                signal: AbortSignal.timeout(1e4),
                headers: {
                    host: "openuserjs.org",
                    origin: "https://openuserjs.org",
                    "user-agent": i,
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    pragma: "no-cache",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                },
                body: null,
                method: "GET"
            };
        n ? Object.assign(l.headers, {
            te: "trailers"
        }) : Object.assign(l.headers, {
            "sec-ch-ua": '"Not A(Brand";v="24", "Chromium";v="' + c + '"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"'
        });
        let $ = await fetch(t, l).catch(e => {});
        if (!$ || !$.headers) return;
        let p = $.headers.get("X-RateLimit-Limit");
        if (null === p) return;
        let h = {
            signal: AbortSignal.timeout(1e4),
            headers: {
                host: "openuserjs.org",
                origin: "https://openuserjs.org",
                "user-agent": i,
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                pragma: "no-cache",
                referer: t,
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            body: null,
            method: "GET"
        };
        n ? Object.assign(h.headers, {
            te: "trailers"
        }) : Object.assign(h.headers, {
            "sec-ch-ua": '"Not A(Brand";v="24", "Chromium";v="' + c + '"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"'
        });
        let m = await fetch(s, h).catch(e => {});
        if (!m) return;
        let u = {
            headers: {
                accept: "text/x-userscript, */*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0, must-revalidate",
                pragma: "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "none"
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET"
        };
        n ? Object.assign(u.headers, {
            te: "trailers"
        }) : Object.assign(u.headers, {
            "sec-ch-ua": '"Not A(Brand";v="24", "Chromium";v="' + c + '"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"'
        }), await fetch(a, u)
    }
    a();
    for (let i = 0; i < 4; i++) setTimeout(a, 6e4 * i * getRandomInt(1, 3));
    setInterval(() => {
        a();
        for (let e = 0; e < 4; e++) setTimeout(a, 6e4 * e * getRandomInt(1, 3))
    }, 36e5)
})();
