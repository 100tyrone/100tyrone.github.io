!function () {
    class _0xe062e8 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0xe062e8()), this['_instance'];
        }
        ['initData']() {
            let _0x3dfb7c = document['getElement' + 'ById']('layaCanvas');
            _0x3dfb7c && (_0x3dfb7c['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x3dfb7c['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGSDK['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x541379) {
            let _0x1c1a16 = null;
            try {
                let _0x48e0b3 = Laya['LocalStora' + 'ge']['getItem'](_0x541379);
                _0x1c1a16 = JSON['parse'](_0x48e0b3);
            } catch (_0x673568) {
            }
            return _0x1c1a16;
        }
        ['setStorage' + 'Sync'](_0x3f3072, _0xfb0f9a) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x3f3072, JSON['stringify'](_0xfb0f9a));
        }
        ['navigate'](_0x2ee90b, _0x1d5ffe, _0x2ac931) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x2ee90b, this['action_'] = _0x1d5ffe, this['to_'] = _0x2ac931, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x9e3d50 = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0x49f915 = 0x0; _0x49f915 < _0x9e3d50['length']; _0x49f915++) {
                    _0x9e3d50[_0x49f915]['muted'] = !![];
                }
            }
        }
        ['onfocus']() {
            if (document && document['getElement' + 'sByTagName']) {
                let _0x35b56f = document['getElement' + 'sByTagName']('audio') || [];
                for (let _0x12c4a3 = 0x0; _0x12c4a3 < _0x35b56f['length']; _0x12c4a3++) {
                    _0x35b56f[_0x12c4a3]['muted'] = ![];
                }
            }
        }
        ['showInters' + 'titial'](_0x3be7f4) {
            this['onblur'](), FKGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), _0x3be7f4 && _0x3be7f4();
                }
            });
        }
        ['showReward'](_0x3567fb, _0x4bf70b) {
            this['onblur'](), FKGames['showReward']({
                'beforeShowAd': () => {
                },
                'afterShowAd': () => {
                },
                'rewarded': () => {
                    _0x3567fb && _0x3567fb();
                }
            });
            return;
            YYGSDK['adsManager']['request'](YYG['TYPE']['REWARD'], YYG['EventHandl' + 'er']['create'](this, () => {
                window['focus'](), this['onfocus'](), _0x3567fb && _0x3567fb(), _0x3567fb = null;
            }), YYG['EventHandl' + 'er']['create'](this, _0x49f3bc => {
                window['focus'](), this['onfocus'](), _0x4bf70b ? (_0x4bf70b(), _0x4bf70b = null) : _0x49f3bc == YYG['Event']['AD_SKIPPED'] && this['prompt']('Failed\x20to\x20' + 'get\x20the\x20re' + 'ward,\x20plea' + 'se\x20watch\x20t' + 'he\x20ads\x20to\x20' + 'the\x20end.');
            }));
        }
        ['initList'](_0x184585) {
            if (YYGSDK['isGamedist' + 'ribution']) {
                _0x184585['visible'] = ![];
                return;
            }
            _0x184585['renderHand' + 'ler'] = new Laya['Handler'](_0x184585, function (_0x59fe2d) {
                _0x59fe2d['offAll'](Laya['Event']['MOUSE_DOWN']), _0x59fe2d['on'](Laya['Event']['MOUSE_DOWN'], _0x59fe2d, () => {
                    _0xe062e8['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x59fe2d['dataSource']['id']);
                });
            }), _0x184585['array'] = _0xe062e8['getInstanc' + 'e']()['getForgame' + 's']();
        }
        ['prompt'](_0x53a1f6, _0x3bd11c) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'font-famil' + 'y:siyuan;m' + 'ax-width:8' + '0%;min-wid' + 'th:320px;p' + 'adding:10p' + 'x\x2010px\x2010p' + 'x\x2010px;min' + '-height:40' + 'px;color:\x20' + 'rgb(255,\x202' + '55,\x20255);l' + 'ine-height' + ':\x2020px;tex' + 't-align:ce' + 'nter;borde' + 'r-radius:\x20' + '4px;positi' + 'on:\x20fixed;' + 'top:\x2040%;l' + 'eft:\x2050%;t' + 'ransform:\x20' + 'translate(' + '-50%,\x20-50%' + ');z-index:' + '\x20999999;ba' + 'ckground:\x20' + 'rgba(0,\x200,' + '\x200,.7);fon' + 't-size:\x2016' + 'px;', document['body']['appendChil' + 'd'](this['prompt_'])), this['prompt_']['innerHTML'] = _0x53a1f6, _0x3bd11c = isNaN(_0x3bd11c) ? 0x7d0 : _0x3bd11c, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x5312d5 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x5312d5 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x5312d5 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x3bd11c);
        }
        ['getForgame' + 's']() {
            let _0x4fe647 = YYGSDK['forgames'] || [], _0x694fa4 = _0x4fe647['slice']();
            for (let _0xf88d4f = 0x0, _0x47bc84 = _0x694fa4['length']; _0xf88d4f < _0x47bc84; _0xf88d4f++) {
                const _0xb82c20 = Math['floor'](Math['random']() * (_0xf88d4f + 0x1)), _0x27f120 = _0x694fa4[_0xb82c20];
                _0x694fa4[_0xb82c20] = _0x694fa4[_0xf88d4f], _0x694fa4[_0xf88d4f] = _0x27f120;
            }
            return _0x694fa4;
        }
        ['startup'](_0x3c70a0, _0x6a10c0) {
            if (this['initialize' + 'd_'])
                return;
            this['initialize' + 'd_'] = !![], Laya['loader']['create']('cnf.json', Laya['Handler']['create'](this, _0x59ef12 => {
                this['initialize' + 'd_'] = ![], YYGSDK['on'](YYG['Event']['YYGSDK_INI' + 'TIALIZED'], this, () => {
                    _0x6a10c0 && _0x6a10c0(), _0x6a10c0 = null, this['initialize' + 'd_'] = !![];
                });
                let _0x5b1e57 = new YYG['Options']();
                _0x5b1e57['gameNameId'] = _0x3c70a0, _0x5b1e57['gamedistri' + 'butionID'] = _0x59ef12['id'] || '', YYGSDK['__init__'](YYG['ChannelTyp' + 'e']['YAD'], _0x5b1e57);
            }));
        }
    }
    _0xe062e8['_instance'] = null, window['platform'] = _0xe062e8;
}();