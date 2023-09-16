'use strict';
console.log(
    'Website is designed & developed by Bao Anh Bui - @bao.anh.b on instagram'
);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $create = document.createElement.bind(document);
const $createcomment = document.createComment.bind(document);
// binding method
const root = document.querySelector(':root');
const proproot = getComputedStyle(root);
const getprop = proproot.getPropertyValue.bind(proproot);

// binding method
const rootstyle = root.style;
const setprop = rootstyle.setProperty.bind(rootstyle);
const rightpanel = [];

let ready = 0;
const nav_numth = 5;
let nav_tongtrans = [0, 0];
const nav_links = $$('a.sublink, a.model, #logoouter');
const fonturl = 'font/AsAbove,SoBelow(Beta47)VF.ttf';
let font,
    player,
    modeldrop_papa,
    nav_left = parseInt(getprop('--nav_left_max'));
let posarr = [
    {
        nln: {
            out: {
                asc: [],
                des: [
                    [15, 0],
                    [50, 1],
                ],
            },
            in: {
                asc: [6, 27, 33],
                des: [16, 27, 44, 50],
            },
            tong: 52,
        },
        elem: {},
        text: 'agency',
        ascspan: [],
        desspan: [],
        nln_: {
            out: {
                asc: [[17, 0]],
                des: [
                    [72, 0],
                    [107, 1],
                ],
            },
            in: {
                asc: [16, 29, 35, 44, 53, 63, 84, 90],
                des: [29, 35, 73, 84, 101, 107],
            },
            tong: 109,
        },
    },
    {
        nln: {
            out: {
                asc: [[9, 0]],
                des: [[38, 0]],
            },
            in: {
                asc: [6, 9, 34],
                des: [28, 34, 38],
            },
            tong: 41,
        },
        elem: {},
        text: 'about',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [],
                des: [],
            },
            in: {
                asc: [],
                des: [],
            },
            tong: 0,
        },
    },
    {
        nln: {
            out: {
                asc: [[62, 0]],
                des: [
                    [32, 0],
                    [73, 1],
                    [93, 2],
                ],
            },
            in: {
                asc: [15, 18, 28, 45, 51, 59, 62, 90],
                des: [9, 15, 18, 32, 45, 51, 73, 84, 93],
            },
            tong: 96,
        },
        elem: {},
        text: 'curatorial text',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [[62, 0]],
                des: [
                    [2, 1],
                    [22, 2],
                ],
            },
            in: {
                asc: [19],
                des: [9, 15, 18, 32, 45, 51],
            },
            tong: 64,
        },
    },
    {
        nln: {
            out: {
                asc: [],
                des: [[14, 0]],
            },
            in: {
                asc: [1, 4, 10, 26, 39],
                des: [1, 4, 14, 26, 31, 39, 49, 54],
            },
            tong: 61,
        },
        elem: {},
        text: 'interview',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [],
                des: [],
            },
            in: {
                asc: [],
                des: [],
            },
            tong: 0,
        },
    },
    {
        nln: {
            out: {
                asc: [
                    [54, 0],
                    [57, 1],
                ],
                des: [
                    [15, 0],
                    [30, 1],
                    [42, 2],
                ],
            },
            in: {
                asc: [6, 9, 19, 51, 54, 57, 63],
                des: [9, 15, 19, 30, 42],
            },
            tong: 64,
        },
        elem: {},
        text: 'artist talk',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [],
                des: [[2, 2]],
            },
            in: {
                asc: [11, 14, 17, 23],
                des: [9, 15, 19, 30],
            },
            tong: 33,
        },
    },
    {
        nln: {
            out: {
                asc: [],
                des: [
                    [21, 0],
                    [78, 1],
                    [108, 2],
                    [133, 3],
                ],
            },
            in: {
                asc: [1, 4, 10, 30, 33, 39, 65, 104, 121],
                des: [1, 4, 21, 33, 65, 78, 104, 108, 121, 127, 133],
            },
            tong: 135,
        },
        elem: {},
        text: 'instance repository',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [],
                des: [
                    [14, 1],
                    [44, 2],
                    [69, 3],
                ],
            },
            in: {
                asc: [1, 40, 57],
                des: [1, 4, 21, 33],
            },
            tong: 71,
        },
    },
    {
        nln: {
            out: {
                asc: [
                    [29, 0],
                    [40, 1],
                ],
                des: [],
            },
            in: {
                asc: [1, 10, 29, 40],
                des: [1],
            },
            tong: 49,
        },
        elem: {},
        text: 'models',
        ascspan: [],
        desspan: [],
        ln: {
            out: {
                asc: [],
                des: [],
            },
            in: {
                asc: [],
                des: [],
            },
            tong: 0,
        },
    },
];
// debounceLeft
const debounceLeft = {
    first: true,
    timeout: null,
    _: function () {
        let this_ = this;
        if (this.first) {
            nav.classList.remove('anim', 'small');
            this.first = false;
        }

        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            this_.timeout = null;
            this_.first = true;
            endResizeendDrag();
        }, 300);
    },
};

function endResizeendDrag() {
    nav_trans_var == 0 ? setprop('--nav_translate_var', '0px') : {};
    nav_trans_var = 0;
    if (
        nav_trans.getBoundingClientRect().width <
        0.6 * nav_fontsz + nav_padding * 2
    ) {
        posarr[nav_numth + 1].elem.classList.remove('dropdown', 'show');
        nav.classList.add('small');
        for (let i = 1; i < posarr.length; i++) {
            setprop(`--nav${i}x`, 0);
        }
    } else {
        nav.classList[
            nav_trans.getBoundingClientRect().width <
            12.3 * nav_fontsz + nav_padding * 2
                ? 'add'
                : 'remove'
        ]('medium');
        nav_resize_handle();
        if (posarr[nav_numth + 1].elem.classList.contains('dropdown')) {
            modeldrop_template(true, () => {});
        }
    }
}

// debounceRight
const debounceRight = {
    first: true,
    timeout: null,
    _: function () {
        let this_ = this;
        if (this.first) {
            /*
            let allwrappers = $$('.wrapper');
            allwrappers.forEach((elem) => {
                //elem.classList.add('anim');
                elem.children[1].classList.remove('lig');
            });
            */
            main.classList.remove('lig');
            this.first = false;
        }

        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            this_.timeout = null;
            this_.first = true;
            rightPanel();
        }, 300);
    },
};

// resizeobserverLeft
let prevWidthLeft = 0;
const resizeObserverLeft = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === 'number' && width !== prevWidthLeft) {
            prevWidthLeft = width;
            debounceLeft._();
        }
    }
});

// resizeobserverRight
let prevWidthRight = 0;
const resizeObserverRight = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const width = entry.borderBoxSize?.[0].inlineSize;
        if (typeof width === 'number' && width !== prevWidthRight) {
            prevWidthRight = width;
            debounceRight._();
        }
    }
});

onresize = () => {
    nav_fontsz = parseFloat(getComputedStyle(nav).fontSize);
    nav_padding =
        parseFloat(
            getComputedStyle(document.body).getPropertyValue('--nav_padding')
        ) * nav_fontsz;
    nav_unit = nav_fontsz / (20 / 1.4);
    viewportheight();
};

// data
const list = new (function () {
    this._construct = function (
        letter,
        width,
        ps_up,
        ps_down,
        st_up = false,
        vl_up = 0,
        st_down = false,
        vl_down = 0,
        cap = false,
        ps_up_for_f = []
    ) {
        this[letter] = {
            width: font.charToGlyph(letter).advanceWidth / 70,
            width_: width / 7,
            ps_up, //(o duoi)
            ps_down, //(o tren)
            st_up,
            vl_up,
            st_down,
            vl_down,
            cap,
            ps_up_for_f,
        };
    };

    this.as = function (letter, width, ps_up, ps_down, vl, ps_up_for_f = []) {
        this._construct(
            letter,
            width,
            ps_up,
            ps_down,
            true,
            vl,
            false,
            0,
            false,
            ps_up_for_f
        );
    };

    this.des = function (letter, width, ps_up, ps_down, vl, ps_up_for_f = []) {
        this._construct(
            letter,
            width,
            ps_up,
            ps_down,
            false,
            0,
            true,
            vl,
            false,
            ps_up_for_f
        );
    };

    this.cap = function (
        letter,
        width,
        ps_up = [],
        ps_down = [],
        ps_up_for_f = []
    ) {
        this._construct(
            letter,
            width,
            ps_up,
            ps_down,
            false,
            0,
            false,
            0,
            true,
            ps_up_for_f
        );
    };

    this.lowercase = function (
        letter,
        width,
        ps_up = [],
        ps_down = [],
        ps_up_for_f = []
    ) {
        this._construct(
            letter,
            width,
            ps_up,
            ps_down,
            false,
            0,
            false,
            0,
            false,
            ps_up_for_f
        );
    };

    return this;
})();

fetch(`${window.location.origin}/${fonturl}`)
    .then((res) => res.arrayBuffer())
    .then((data) => {
        font = opentype.parse(data);
        // ascender
        list.as('b', 70, [2], [2], 2, [5]);
        list.as('d', 70, [9], [9], 9, [5]);
        list.as('f', 35, [3], [], 4);
        list.as('h', 63, [2, 8], [2], 2);
        list.as('k', 56, [2, 8], [2], 2);
        list.as('l', 21, [2], [2], 2);
        // descender
        list.des('g', 70, [], [9], 8);
        list.des('j', 21, [], [2], 1);
        list.des('p', 70, [2], [2], 2, [5]);
        list.des('q', 70, [9], [9], 9, [5]);
        list.des('y', 63, [8], [2, 8], 8, [3]);
        list.des('t', 35, [3], [3], 3);
        // lowercase
        list.lowercase('a', 56, [7], [], [3, 4]);
        list.lowercase('c', 56, [], [], [4, 5]);
        list.lowercase('ç', 56);
        list.lowercase('e', 56, [], [], [4]);
        list.lowercase('é', 56, [], [], [4]);
        list.lowercase('ê', 56, [], [], [4]);
        list.lowercase('è', 56, [], [], [4]);
        list.lowercase('i', 21, [2], [2]);
        list.lowercase('m', 84, [2, 11], [2]);
        list.lowercase('n', 63, [2, 8], [2]);
        list.lowercase('ñ', 63, [2, 8], [2]);
        list.lowercase('o', 63, [], [], [4, 5]);
        list.lowercase('r', 42, [2], [2]);
        list.lowercase('s', 49, [], [], [5]);
        list.lowercase('u', 63, [8], [2, 8], [3, 4]);
        list.lowercase('ü', 63, [8], [], [3, 4]);
        list.lowercase('v', 49, [], [1]);
        list.lowercase('w', 84, [], [1, 6]);
        list.lowercase('x', 49, [7], [1]);
        list.lowercase('z', 49);
        // punctuation
        list.lowercase(' ', 49);
        list.lowercase('.', 28);
        list.lowercase(',', 21);
        list.lowercase(';', 28);
        list.lowercase(':', 28);
        list.cap('!', 35, [], [3]);
        list.cap('?', 49, [], [3, 5]);
        list.lowercase('#', 77, [2, 5], [], [8]);
        list.cap('/', 35, [], [5]);
        list.lowercase('-', 56);
        list.lowercase('–', 63);
        list.lowercase('—', 84);
        list.lowercase('_', 63);
        list.lowercase('(', 35);
        list.lowercase(')', 35);
        list.lowercase(']', 35);
        list.lowercase('[', 35);
        list.lowercase('"', 35);
        list.lowercase('“', 35);
        list.lowercase('”', 35);
        list.lowercase("'", 21);
        list.lowercase('’', 21);
        list.lowercase('‘', 21);
        list.lowercase('@', 84);
        list.lowercase('&', 77, [8], []);
        list.lowercase('$', 70, [5], [5]);
        list.lowercase('+', 63);
        list.lowercase('=', 63);
        list.lowercase('>', 63);
        list.lowercase('<', 63);
        list.lowercase('~', 56);
        list.lowercase('^', 42);
        list.lowercase('|', 35, [3], [3]);
        //cap
        list.cap('A', 63, [9], [5]);
        list.cap('B', 63, [2]);
        list.cap('C', 63, [], [], [6, 7]);
        list.cap('D', 77, [2]);
        list.cap('E', 49, [2], []);
        list.cap('F', 49, [2], []);
        list.cap('G', 77, [10], [], [7, 8]);
        list.cap('H', 70, [2, 9], [2, 9]);
        list.cap('I', 21, [2], [2]);
        list.cap('J', 21, [], [2]);
        list.cap('K', 63, [2, 9], [2]);
        list.cap('L', 49, [], [2]);
        list.cap('M', 91, [2, 7, 11], [2]);
        list.cap('N', 77, [2, 10], [2, 10]);
        list.cap('O', 84, [], [], [6, 7]);
        list.cap('P', 63, [2], []);
        list.cap('Q', 84, [7], [], [6]);
        list.cap('R', 63, [2, 9], []);
        list.cap('S', 63, [], [], [4, 5, 6]);
        list.cap('T', 63, [5], []);
        list.cap('U', 77, [], [2, 10], [5, 6]);
        list.cap('V', 56, [], [1]);
        list.cap('W', 105, [], [1, 8]);
        list.cap('X', 63, [9], [1]);
        list.cap('Y', 77, [6], [2, 10]);
        list.cap('Z', 70, [], []);
        // number
        list.lowercase('0', 56, [], [], [4, 5]);
        list.lowercase('1', 21, [2]);
        list.cap('2', 49);
        list.lowercase('3', 42);
        list.lowercase('4', 49);
        list.cap('5', 49);
        list.cap('6', 56, [], [], [4]);
        list.lowercase('7', 49);
        list.cap('8', 63);
        list.lowercase('9', 63);

        for (const i in list) {
            if (list[i].width) {
                if (list[i].width != list[i].width_) {
                    console.log(i, list[i].width, list[i].width_);
                }
            }
        }

        readyToExecute();
    });

function readyToExecute() {
    if (++ready == 2) {
        viewportheight();
        // off for mobile
        if (matchMedia('(max-width: 600px)').matches) {
            togglelig_();
        }
        setprop('--scrollbarw', getScrollbarWidth() + 'px');
        readyToExecute_nav();
        setleading(28, section);
        debounceRight._();
    }
}

function readyToExecute_nav() {
    let count = 0;
    [nav_logo[1], ...nav_sublinks].map((elem) => {
        posarr[count].elem = elem;
        posarr[count].ascspan = [...elem.children[1].querySelectorAll('.asc')];
        posarr[count].desspan = [...elem.children[1].querySelectorAll('.des')];
        count++;
    });
    //console.log(posarr);
    modeldrop_papa = posarr[nav_numth + 1].elem;
    resizeObserverLeft.observe(nav);
    resizeObserverRight.observe(section);
}

async function rightPanel() {
    if (ready >= 2) {
        //console.log('bip');
        //await wait(100);
        $$('.wrapper').forEach((elem) => {
            calculateLigature(elem);
        });
        await wait(200);
        main.classList.add('lig');
    }
}

function nav_resize_handle() {
    let tongtrans = 0;
    let navw = Math.floor(nav_trans.getBoundingClientRect().width / nav_unit);
    let logocheck =
        navw > 200 &&
        posarr[0].nln_.tong < navw &&
        navw > (innerWidth / nav_unit) * (1 / 3);
    nav_logoouter.classList[logocheck ? 'add' : 'remove']('logo2');
    for (let i = 0; i < ascdesarr.length; i++) {
        ascdesarr[i].classList.remove('alt');
    }
    for (let i = 1; i < posarr.length; i++) {
        calcPos(i);
    }
    nav_trans.classList.toggle('trans');

    async function calcPos(index) {
        let prefix = {
            last:
                posarr[index - 1].elem.children[1].clientHeight > nav_fontsz + 2
                    ? 'ln'
                    : 'nln',
            curr:
                posarr[index].elem.children[1].clientHeight > nav_fontsz + 2
                    ? 'ln'
                    : 'nln',
        };
        prefix.last = logocheck && index == 1 ? 'nln_' : prefix.last;
        let objcurrw = posarr[index][prefix.curr].tong;
        //
        let objlast = posarr[index - 1][prefix.last].out.des;
        let objcurr = posarr[index][prefix.curr].in.des;
        let objlast_as = posarr[index - 1][prefix.last].in.asc;
        let objcurr_as = posarr[index][prefix.curr].out.asc;
        //
        let ascORdes = objcurr_as.length > 0 && Math.random() > 0.5;
        let inasc, outasc, indes, outdes, ascpass;
        if (ascORdes) {
            [ascpass, inasc, outasc] = outinasc_(
                objlast_as,
                objcurr_as,
                navw,
                objcurrw,
                tongtrans
            );
            if (!ascpass) {
                [indes, outdes] = outindes();
                ascORdes = false;
            }
        } else {
            [indes, outdes] = outindes();
        }
        //
        let translateby =
            (ascORdes ? inasc - outasc[0] : outdes[0] - indes) + tongtrans;
        //let translateby = outdes[0] + tongtrans - indes;
        //posarr[index].elem.style.transform = `translateX(calc(${translateby} * var(--nav_unit) + var(--nav${index})))`;
        setprop(`--nav${index}x`, translateby);
        if (index == nav_numth + 1) {
            nav_tongtrans = tongtrans;
        }
        tongtrans = translateby;
        // render
        if (ascORdes) {
            posarr[index]['ascspan'][outasc[1]].classList.add('alt');
        } else {
            posarr[index - 1]['desspan'][outdes[1]].classList.add('alt');
        }

        function outindes() {
            let index_end = null,
                index_start = null,
                outdes_i = 0,
                pass = true;
            //end
            while (pass) {
                for (let i = 0; i < objcurr.length; i++) {
                    if (objcurr[i] <= objlast[outdes_i][0] + tongtrans) {
                        index_end = i;
                    } else {
                        break;
                    }
                }

                if (index_end == null) {
                    if (outdes_i < objlast.length - 1) {
                        outdes_i++;
                    } else {
                        index_end = 0;
                        pass = false;
                    }
                } else if (
                    outdes_i < objlast.length - 1 &&
                    objcurr[0] <= objlast[outdes_i + 1][0] + tongtrans &&
                    objlast[outdes_i + 1][0] + tongtrans - objcurr[0] <=
                        navw - objcurrw - 40
                ) {
                    outdes_i++;
                } else {
                    pass = false;
                }
            }
            //start
            for (let i = index_end; i >= 0; i--) {
                if (
                    objlast[outdes_i][0] + tongtrans - objcurr[i] <=
                    navw - objcurrw - 40
                ) {
                    index_start = i;
                } else {
                    break;
                }
            }
            if (index_start == null) {
                index_start = index_end;
            }
            //return
            return [
                objcurr[getRandomInteger(index_start, index_end)],
                objlast[outdes_i],
            ];
        }
    }
}

function outinasc_(
    objlast_as,
    objcurr_as,
    navw,
    objcurrw,
    tongtrans,
    ascchk = true
) {
    let index_end = null,
        index_start = null,
        outas_i = objcurr_as.length - 1,
        pass = true;
    //start
    while (pass) {
        for (let i = objlast_as.length - 1; i >= 0; i--) {
            if (objlast_as[i] + tongtrans >= objcurr_as[outas_i][0]) {
                index_end = i;
            } else {
                break;
            }
        }

        if (index_end == null) {
            if (outas_i > 0) {
                outas_i--;
            } else {
                index_end = objlast_as.length - 1;
                pass = false;
                if (ascchk) {
                    return [false, 0, 0];
                }
            }
        } else if (
            outas_i > 0 &&
            objlast_as[0] + tongtrans >= objcurr_as[outas_i - 1][0] &&
            objlast_as[0] + tongtrans - objcurr_as[outas_i - 1][0] <=
                navw - objcurrw - 40
        ) {
            outas_i--;
        } else {
            pass = false;
        }
    }
    //end
    for (let i = index_end; i < objlast_as.length; i++) {
        if (
            objlast_as[i] + tongtrans - objcurr_as[outas_i][0] <=
            navw - objcurrw - 40
        ) {
            index_start = i;
        } else {
            break;
        }
    }
    if (index_start == null) {
        index_start = index_end;
        if (ascchk) {
            return [false, 0, 0];
        }
    }
    //return
    return [
        true,
        objlast_as[getRandomInteger(index_end, index_start)],
        objcurr_as[outas_i],
    ];
}

async function modeldrop_template(check, callback) {
    if (nav.classList.contains('small')) {
        nav.classList.remove('small');
        nav_left = 175;
        setprop('--nav_left_max', `175px`);
    }
    if (modeldrop_papa.classList.contains('dropdown') == check) {
        for (let i = 14; i <= 19; i++) {
            ascdesarr[i].classList.remove('alt');
        }
        let prefix =
            posarr[nav_numth].elem.children[1].clientHeight > nav_fontsz + 2
                ? 'ln'
                : 'nln';
        let objlast_as = posarr[nav_numth][prefix].in.asc;
        let objcurr_as = posarr[nav_numth + 1].nln.out.asc;
        let [ascpass, inasc, outasc] = outinasc_(
            objlast_as,
            objcurr_as,
            Math.floor(nav_trans.getBoundingClientRect().width / nav_unit),
            posarr[nav_numth + 1].nln.tong + 123,
            nav_tongtrans,
            false
        );
        let translateby = inasc - outasc[0] + nav_tongtrans;
        //posarr[nav_numth + 1].elem.style.transform = `translateX(calc(${translateby} * var(--nav_unit) + var(--nav6)))`;
        setprop(`--nav${nav_numth + 1}x`, translateby);
        posarr[nav_numth + 1]['ascspan'][outasc[1]].classList.add('alt');
    }
    callback();
    await wait(500);
    nav.classList.toggle('help');
}

function calculateLigature(elem) {
    //await wait(200);
    let lkarr = elem.lkarr ? elem.lkarr : [];
    let div = elem.children[1];
    let divx = elem.children[0];

    let parr = divx.children; //
    let up_arr_prev = [];
    let down_arr_span_prev = [];
    let render_arr_arr = [];

    for (let i = 0; i < parr.length; i++) {
        let textNode = parr[i].firstChild;
        if (textNode.nodeType !== 3) {
            throw new Error('Lines can only be extracted from text nodes.');
        }
        textNode.textContent = textNode.textContent.trim().replace(/\s+/g, ' ');
        let textContent = textNode.textContent;
        let range = document.createRange();
        let lines = [];
        let lineCharacters = [];
        let up_arr = [];
        let up_arr_tong = [];

        let down_arr_span = [];
        let down_arr_span_tong = [];
        let down_arr = [];
        let down_arr_tong = [];
        let up_arr_span = [];
        let all_span = [];

        let count = 0;
        let tong = 0;
        let spancount = 0;

        let render_arr = [[]];

        let textconsole = [''];
        let baretxt = '';

        lines.push((lineCharacters = []));
        up_arr_tong.push((up_arr = []));
        down_arr_span_tong.push((down_arr_span = []));
        down_arr_tong.push((down_arr = []));

        render_arr_create();
        //console.log(textconsole);

        render_arr_arr.push(render_arr);
        up_arr_prev = up_arr_tong[up_arr_tong.length - 1];
        down_arr_span_prev = down_arr_span_tong[down_arr_span_tong.length - 1];

        function render_arr_create() {
            //main area
            for (let i = 0; i < textContent.length; i++) {
                range.setStart(textNode, 0);
                range.setEnd(textNode, i + 1);
                //change line
                if (count != range.getClientRects().length - 1) {
                    count++;
                    textconsole[count] = '';
                    tong = 0;
                    lines.push((lineCharacters = []));
                    up_arr_tong.push((up_arr = []));

                    down_arr_span_tong.push((down_arr_span = []));
                    down_arr_tong.push((down_arr = []));

                    render_arr.push([]);
                }
                let check = false;
                let string = textContent[i];
                textconsole[count] += string;
                let char = list[string];
                if (char == undefined) {
                    //console.log(string);
                    baretxt += string;
                    continue;
                }
                let kern = 0;
                let kernr = 0;
                // kern
                if (tong != 0) {
                    kern =
                        font.getKerningValue(
                            font.charToGlyph(textContent[i - 1]),
                            font.charToGlyph(string)
                        ) / 70;
                }
                if (i + 1 < textContent.length) {
                    kernr =
                        font.getKerningValue(
                            font.charToGlyph(string),
                            font.charToGlyph(textContent[i + 1])
                        ) / 70;
                }
                tong += kern;
                // check
                if (char.st_up) {
                    let ua =
                        count > 0
                            ? up_arr_tong[count - 1][tong + char.vl_up - 1]
                            : up_arr_prev[tong + char.vl_up - 1]; // + kern
                    ua = ua == undefined ? { chek: true, for_f: false } : ua;
                    if (ua.chek) {
                        if (ua.for_f) {
                            check = string == 'f';
                        } else {
                            check = true;
                        }
                    }
                }
                if (char.st_down) {
                    check = true;
                }

                // render_arr
                if (check) {
                    let span = $create('span');
                    span.append(string);
                    span.wght = 'alt';
                    if (string == 't') {
                        span.classList.add('letter_t');
                    }
                    if (kern != 0) {
                        span.style.marginLeft = `calc(${kern} * var(--unit))`;
                    }
                    if (kernr != 0) {
                        span.style.marginRight = `calc(${kernr} * var(--unit))`;
                    }
                    if (char.st_down) {
                        let tempvl = tong + char.vl_down - 1;
                        span.classList.add('des');
                        down_arr_span.push({
                            tempvl,
                            count: spancount,
                            nested1: count,
                            nested2:
                                baretxt == ''
                                    ? render_arr[count].length
                                    : render_arr[count].length + 1,
                        });
                    }

                    if (baretxt == '') {
                        render_arr[count].push(span);
                    } else {
                        render_arr[count].push(baretxt, span);
                    }

                    baretxt = '';
                    spancount++;
                } else {
                    baretxt += string;
                }

                // up_arr
                for (let i = 1; i <= char.width; i++) {
                    up_arr.push({
                        chek: false,
                        for_f: false,
                    });
                }

                for (let i = 0; i < char.ps_up.length; i++) {
                    up_arr[tong + char.ps_up[i] - 1].chek = true;
                    up_arr[tong + char.ps_up[i] - 1].for_f = false;
                }

                for (let i = 0; i < char.ps_up_for_f.length; i++) {
                    up_arr[tong + char.ps_up_for_f[i] - 1].chek = true;
                    up_arr[tong + char.ps_up_for_f[i] - 1].for_f = true;
                }
                // down_arr
                for (let i = 1; i <= char.width; i++) {
                    down_arr.push([false, char.cap, string]);
                }
                for (let i = 0; i < char.ps_down.length; i++) {
                    down_arr[tong + char.ps_down[i] - 1] = [
                        true,
                        char.cap,
                        string,
                    ];
                }

                tong += char.width;
                lineCharacters.push(textContent.charAt(i));
            }
            if (baretxt !== '') {
                render_arr[count].push(baretxt);
            }

            //spacing below
            let descenderlength = down_arr_span_tong.length;
            if (i == parr.length - 1) {
                /*
                let span_ = $create('span');
                span_.innerHTML = 'a';
                span_.style.visibility = 'hidden';
                span_.wght = 'lineheightkeep';
                */
                render_arr[count].push($create('br'));
                descenderlength--;
            }

            //descender_prev
            {
                let spans = down_arr_span_prev;
                let arrs = down_arr_tong[0];
                let render_arr = render_arr_arr[render_arr_arr.length - 1];
                for (let a = 0; a < spans.length; a++) {
                    if (arrs[spans[a].tempvl] == undefined) {
                        render_arr[spans[a].nested1][spans[a].nested2].wght =
                            'alt';
                    } else if (arrs[spans[a].tempvl][0]) {
                        render_arr[spans[a].nested1][spans[a].nested2].wght =
                            arrs[spans[a].tempvl][1] ? 'altshort' : 'alt';
                    } else {
                        render_arr[spans[a].nested1][spans[a].nested2] =
                            render_arr[spans[a].nested1][
                                spans[a].nested2
                            ].innerHTML;
                    }
                }
            }
            //descender
            for (let i = 0; i < descenderlength; i++) {
                let spans = down_arr_span_tong[i];
                let arrs = down_arr_tong[i + 1];

                for (let a = 0; a < spans.length; a++) {
                    if (i == down_arr_span_tong.length - 1) {
                        continue;
                    } else if (arrs[spans[a].tempvl] == undefined) {
                        render_arr[spans[a].nested1][spans[a].nested2].wght =
                            'alt';
                    } else if (arrs[spans[a].tempvl][0]) {
                        render_arr[spans[a].nested1][spans[a].nested2].wght =
                            arrs[spans[a].tempvl][1] ? 'altshort' : 'alt';
                        //console.log(arrs[spans[a].tempvl][2]);
                    } else {
                        render_arr[spans[a].nested1][spans[a].nested2] =
                            render_arr[spans[a].nested1][
                                spans[a].nested2
                            ].innerHTML;
                    }
                }
            }
        }
    }

    // fully render //
    let frag = document.createDocumentFragment();
    //
    /*
    {
        let char_count = 0;
        let thearray = [];
        const linklist = [
            `Rafi Abdullah`,
            `Studio Darius Ou`,
            `Amirul Nazree`,
            `Bao Anh Bui`,
        ];
        let buloz = (function flattenNestedArray(array) {
            const _1 = [];
            for (const nestedArray of array) {
                let _2 = [];
                for (const innerArray of nestedArray) {
                    let _3 = [];
                    for (const item of innerArray) {
                        if (typeof item === 'string') {
                            _3.push(...item);
                        } else {
                            _3.push(item.innerHTML);
                        }
                    }
                    _2.push(_3);
                }
                _1.push(_2);
            }
            return _1;
        })(render_arr_arr);

        for (let x = 0; x < buloz.length; x++) {
            for (let i = 0; i < buloz[x].length; i++) {
                for (let k = 0; k < buloz[x][i].length; k++) {
                    linklist.forEach((vl) => {
                        if (buloz[x][i][k] == vl[0]) {
                            if (
                                buloz[x][i].slice(k, k + vl.length).join('') ==
                                vl
                            ) {
                                thearray.push({
                                    start: char_count,
                                    txt: buloz[x][i]
                                        .slice(k, k + vl.length)
                                        .join(''),
                                });
                                return;
                            }
                        }
                    });
                    char_count++;
                }
            }
        }
        console.log(thearray);
    } /**/
    //
    lkarr.length > 0
        ? (render_arr_arr = (function flattenNestedArray(array) {
              const _1 = [];
              for (const nestedArray of array) {
                  let _2 = [];
                  for (const innerArray of nestedArray) {
                      let _3 = [];
                      for (const item of innerArray) {
                          if (typeof item === 'string') {
                              _3.push(...item);
                          } else {
                              _3.push(item);
                          }
                      }
                      _2.push(_3);
                  }
                  _1.push(_2);
              }
              return _1;
          })(render_arr_arr))
        : [];
    let char_count = 0;
    let lkarr_i = 0;
    let lkarr_i_temp = 0;
    let atag;
    let lkarr_t_i = 0;
    for (let x = 0; x < render_arr_arr.length; x++) {
        let p_ = $create('p');
        //spacing above
        if (render_arr_arr[x][0].length == 0 && render_arr_arr[x].length == 1) {
            p_.append($create('br'));
        }
        for (let i = 0; i < render_arr_arr[x].length; i++) {
            let baretxt = '';
            for (let k = 0; k < render_arr_arr[x][i].length; k++) {
                let renderitem = render_arr_arr[x][i][k];
                renderitem.classList?.add(renderitem.wght);
                if (lkarr[lkarr_i]?.s == char_count) {
                    lkarr_t_i = char_count;
                    lkarr_i_temp = lkarr_i;
                    atag = $create('a');
                    if (lkarr[lkarr_i].id == undefined) {
                        atag.href = lkarr[lkarr_i].href
                            ? `${lkarr[lkarr_i].href}`
                            : `${lkarr[lkarr_i].txt}`;
                        atag.target = '_blank';
                    } else {
                        atag.id = lkarr[lkarr_i].id;
                        atag.href = atag.href_ = `#${lkarr[lkarr_i].href}`;
                        atag.onclick = anchorclick;
                    }
                    p_.append(baretxt, atag);
                    baretxt = '';
                    lkarr_i++;
                }
                if (
                    lkarr_t_i >= lkarr[lkarr_i_temp]?.s &&
                    lkarr_t_i <=
                        lkarr[lkarr_i_temp]?.s +
                            lkarr[lkarr_i_temp]?.txt.length -
                            1
                ) {
                    atag.append(renderitem);
                    lkarr_t_i++;
                } else if (typeof renderitem == 'string') {
                    baretxt += renderitem;
                } else {
                    if (baretxt == '') {
                        renderitem.style.marginLeft = '';
                        p_.append(renderitem);
                    } else {
                        p_.append(baretxt, renderitem);
                    }
                    baretxt = '';
                }
                char_count++;
            }
            if (baretxt != '') {
                p_.append(baretxt);
            }
        }
        frag.append(p_);
    }
    div.style.display = 'none';
    div.innerHTML = '';
    div.appendChild(frag);
    div.style.display = '';

    // animation
    /*
    await wait(100);
    div.classList.add('lig');
    */
    //
}

function setleading(vl, elem) {
    const _style = elem.style;
    const _setprop = _style.setProperty.bind(_style);
    let leading = lh(vl);
    _setprop('--lh', leading);
    _setprop('--lig', vl);
    _setprop('--lig_cap', ligcap(leading));
    _setprop('--lig_des', ligdes(leading));
    function lh(x) {
        return (
            0.3 + ((Math.min(88, Math.max(x, 8)) - 8) / (88 - 8)) * (1 - 0.3)
        );
    }
    function ligdes(input) {
        if (input <= 0.3) {
            return 0;
        }
        const [v, o] = [
            [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            [1, 14, 27, 41, 55, 68, 82, 97],
        ];
        const c = Math.max(v[0], Math.min(input, v[v.length - 1]));
        const i = v.findIndex((val) => val >= c);
        return i === -1
            ? o[o.length - 1]
            : o[i - 1] +
                  ((c - v[i - 1]) / (v[i] - v[i - 1])) * (o[i] - o[i - 1]);
    }
    function ligcap(input) {
        if (input <= 0.3) {
            return 0;
        }
        const [v, o] = [
            [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            [2, 13, 24, 35, 47, 57, 69, 80],
        ];
        const c = Math.max(v[0], Math.min(input, v[v.length - 1]));
        const i = v.findIndex((val) => val >= c);
        return i === -1
            ? o[o.length - 1]
            : o[i - 1] +
                  ((c - v[i - 1]) / (v[i] - v[i - 1])) * (o[i] - o[i - 1]);
    }
}

function togglelig_() {
    main.classList.toggle('nolig');
}
function anchorclick(e) {
    const targetElement = document.querySelector(this.href_);
    targetElement.classList.add('flashing');

    setTimeout(() => {
        targetElement.classList.remove('flashing');
    }, 500);
}

const new_nav_left = (() => {
    let lim = 150;
    let x = -25;
    return function () {
        if (nav_left < lim) {
            return 150 - nav_left;
        } else if (nav_left >= innerWidth * 0.4) {
            return -50;
        } else {
            x = -x;
        }
        return x;
    };
})();

function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}
function viewportheight() {
    setprop('--vh', `${innerHeight * 0.01}px`);
}
