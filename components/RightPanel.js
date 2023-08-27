'use client';
import { useEffect } from 'react';

const RightPanel = ({ curatorialText_ = false }) => {
    useEffect(() => {
        curatorialText = curatorialText_;
        if (curatorialText) {
            $('.txt3 .wrapper').lkarr = [
                {
                    s: 766,
                    txt: '[1]',
                    id: 'fn1',
                    href: 'fn1_',
                },
                {
                    s: 1169,
                    txt: '[2]',
                    id: 'fn2',
                    href: 'fn2_',
                },
                {
                    s: 4977,
                    txt: '[3]',
                    id: 'fn3',
                    href: 'fn3_',
                },
                {
                    s: 5070,
                    txt: '[4]',
                    id: 'fn4',
                    href: 'fn4_',
                },
                {
                    s: 5625,
                    txt: '[5]',
                    id: 'fn5',
                    href: 'fn5_',
                },
                {
                    s: 5784,
                    txt: '[6]',
                    id: 'fn6',
                    href: 'fn6_',
                },
                {
                    s: 6137,
                    txt: '[7]',
                    id: 'fn7',
                    href: 'fn7_',
                },
                {
                    s: 7683,
                    txt: '[8]',
                    id: 'fn8',
                    href: 'fn8_',
                },
                {
                    s: 8058,
                    txt: '[9]',
                    id: 'fn9',
                    href: 'fn9_',
                },
                {
                    s: 10267,
                    txt: '[10]',
                    id: 'fn10',
                    href: 'fn10_',
                },
                {
                    s: 11870,
                    txt: '[11]',
                    id: 'fn11',
                    href: 'fn11_',
                },
            ];
            $('.footnote .wrapper').lkarr = [
                {
                    s: 9,
                    txt: '[1]',
                    id: 'fn1_',
                    href: 'fn1',
                },
                {
                    s: 258,
                    txt: '[2]',
                    id: 'fn2_',
                    href: 'fn2',
                },
                {
                    s: 530,
                    txt: '[3]',
                    id: 'fn3_',
                    href: 'fn3',
                },
                {
                    s: 756,
                    txt: '[4]',
                    id: 'fn4_',
                    href: 'fn4',
                },
                {
                    s: 1132,
                    txt: 'https://imperfectnotes.substack.com/p/black-technology',
                },
                {
                    s: 1187,
                    txt: '[5]',
                    id: 'fn5_',
                    href: 'fn5',
                },
                {
                    s: 1378,
                    txt: 'https://www.formandagency.net/',
                },
                {
                    s: 1593 + 9,
                    txt: 'https://form-and-agency.fandom.com/',
                },
                {
                    s: 1628 + 9,
                    txt: '[6]',
                    id: 'fn6_',
                    href: 'fn6',
                },
                {
                    s: 1858 + 9,
                    txt: '[7]',
                    id: 'fn7_',
                    href: 'fn7',
                },
                {
                    s: 2029 + 9,
                    txt: 'https://www.atlasobscura.com/articles/kowloon-walled-city',
                },
                {
                    s: 2086 + 9,
                    txt: '[8]',
                    id: 'fn8_',
                    href: 'fn8',
                },
                {
                    s: 2095 + 9,
                    txt: 'https://form-and-agency.fandom.com/wiki/Model_E:_Nomad_Lexis',
                },
                {
                    s: 2155 + 9,
                    txt: '[9]',
                    id: 'fn9_',
                    href: 'fn9',
                },
                {
                    s: 2350 + 9,
                    txt: 'https://developers.google.com/machine-learning/gan/gan_structure',
                },
                {
                    s: 2414 + 9,
                    txt: '[10]',
                    id: 'fn10_',
                    href: 'fn10',
                },
                {
                    s: 2613 + 9,
                    txt: '[11]',
                    id: 'fn11_',
                    href: 'fn11',
                },
            ];
        }
        setprop('--nav_left_max', `${getRandomDivisibleBy25()}px`);
        debounceRight._();
        return () => {
            curatorialText = false;
        };
    }, []);
    return <></>;
};

export default RightPanel;
