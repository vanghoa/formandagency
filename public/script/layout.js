'use strict';

const main = $('main');
const nav_handle = $('#nav_handle');
const nav = $('nav');
const nav_logo = $$('.logo');
const nav_logoouter = $('#logoouter');
const nav_handle_size = parseInt(getprop('--nav_handle_size'));
const nav_sublinks = $$('.sublink');
const nav_trans = $('#ontransitionend');
const nav_modelonclick = $('#modelonclick');
const nav_modelonclick_ = $('#modelonclick_');
const togglelig = $('#togglelig');
togglelig.onclick = togglelig_;
const section = $('section');
const section_style = section.style;
const section_setprop = section_style.setProperty.bind(section_style);
let ascdesarr = $$(':is(.asc, .des)');
nav_modelonclick.onclick = nav_modelonclick_.onclick = () => {
    modeldrop_template(false, () => {
        modeldrop_papa.classList.toggle('dropdown');
        modeldrop_papa.classList.toggle('show');
    });
};
nav_trans.ontransitionend = async function () {
    nav.classList.add('anim');
    await wait(500);
    nav.classList.toggle('help');
};

// fontsz
let nav_fontsz = parseFloat(getComputedStyle(nav).fontSize);
let nav_padding =
    parseFloat(
        getComputedStyle(document.body).getPropertyValue('--nav_padding')
    ) * nav_fontsz;
let nav_unit = nav_fontsz / (20 / 1.4);

let smallcheckdrag = true;

//nav reisze
{
    interact(nav_handle)
        .draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [
                        interact.snappers.grid({
                            x: 25,
                            y: 25,
                        }),
                    ],
                    range: Infinity,
                    relativePoints: [{ x: 0, y: 0 }],
                }),
                interact.modifiers.restrictRect({
                    restriction: main,
                }),
            ],
            inertia: true,
        })
        .on('dragmove', function (event) {
            if (smallcheckdrag) {
                nav_left =
                    event.rect.left > 5.3 * nav_fontsz + nav_padding * 2
                        ? event.rect.left
                        : 0;
            } else {
                nav_left = event.rect.left > 175 ? event.rect.left : 175;
            }
            setprop('--nav_left_max', `${nav_left}px`);
            setprop('--nav_top', `${event.rect.top}px`);
        })
        .on('dragstart', function (e) {
            main.classList.add('iframe_pe_none');
            if (nav.classList.contains('small')) {
                nav.classList.remove('small');
                nav_left = 175;
                setprop('--nav_left_max', `175px`);
                smallcheckdrag = false;
            }
        })
        .on('dragend', function (e) {
            main.classList.remove('iframe_pe_none');
            smallcheckdrag = true;
        });
}

readyToExecute();
