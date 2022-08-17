!function () {
    class _0x2adacd {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x2c6d00, _0x30df04) => {
                try {
                    this['musicAudio'] = new _0x4cc37d(), this['soundAudio'] = new _0x4cc37d(), window['document']['addEventLi' + 'stener']('mousedown', () => {
                        setTimeout(() => {
                            if (this['adShowing']) {
                            } else
                                this['tryToResum' + 'eAudioCont' + 'ext']();
                        }, 0x64);
                    }, !![]), window['document']['addEventLi' + 'stener']('touchstart', () => {
                        setTimeout(() => {
                            if (this['adShowing']) {
                            } else
                                this['tryToResum' + 'eAudioCont' + 'ext']();
                        }, 0x64);
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x2c6d00(!![]);
                } catch (_0x17184d) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x17184d), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x2c6d00(![]);
                }
            });
        }
        ['onVisibili' + 'tychange']() {
            if (this['adShowing'])
                return;
            if (document['visibility' + 'State'] == 'hidden')
                !this['isMuted'] && (this['isVisibili' + 'tyMuted'] = this['muted'] = !![]), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            else
                document['visibility' + 'State'] == 'visible' && (this['isVisibili' + 'tyMuted'] && (this['isVisibili' + 'tyMuted'] = this['muted'] = ![]), Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']());
        }
        ['onDBInstan' + 'ceMuted']() {
        }
        ['tryToResum' + 'eAudioCont' + 'ext']() {
            if (this['adShowing'])
                return;
            if (this['isMuted'])
                return;
            this['musicAudio']['isSuspend']() && !this['bePauseMus' + 'ic'] && (this['musicAudio']['resume'](), this['musicAudio']['_music'] && this['musicAudio']['playMusic'](this['musicAudio']['_music']['url'])), this['soundAudio']['isSuspend']() && !this['bePauseSou' + 'nd'] && this['soundAudio']['resume'](), (!this['musicAudio']['isSuspend']() || !this['soundAudio']['isSuspend']()) && (window['document']['removeEven' + 'tListener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['removeEven' + 'tListener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), clearInterval(this['tryToResum' + 'eIntervalI' + 'd']), this['tryToResum' + 'eIntervalI' + 'd'] = -0x1);
        }
        ['onMusicSta' + 'techange']() {
            this['musicAudio']['isSuspend']() && !this['isMuted'] && !this['bePauseMus' + 'ic'] && this['tryToResum' + 'eIntervalI' + 'd'] === -0x1 && (window['document']['addEventLi' + 'stener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['addEventLi' + 'stener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        ['onSoundSta' + 'techange']() {
            this['soundAudio']['isSuspend']() && !this['isMuted'] && !this['bePauseSou' + 'nd'] && this['tryToResum' + 'eIntervalI' + 'd'] === -0x1 && (window['document']['addEventLi' + 'stener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['addEventLi' + 'stener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        set ['muted'](_0xc72b51) {
            this['isMuted'] = _0xc72b51, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x3352a3) {
            this['pauseSound'] = _0x3352a3, this['pauseMusic'] = _0x3352a3, !_0x3352a3 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x151716) {
            this['bePauseSou' + 'nd'] = _0x151716;
            if (this['bePauseSou' + 'nd'])
                this['soundAudio']['suspend']();
            else {
                if (this['isMuted'])
                    return;
                this['soundAudio']['resume']();
            }
        }
        get ['pauseSound']() {
            return this['bePauseSou' + 'nd'];
        }
        get ['pauseMusic']() {
            return this['bePauseMus' + 'ic'];
        }
        set ['pauseMusic'](_0x59f744) {
            this['bePauseMus' + 'ic'] = _0x59f744;
            if (this['bePauseMus' + 'ic'])
                this['musicAudio']['suspend']();
            else {
                if (this['isMuted'])
                    return;
                this['musicAudio']['resume']();
            }
        }
        ['stopAll']() {
            this['musicAudio']['stopAll'](), this['soundAudio']['stopAll']();
        }
        ['parse'](_0x5b3ec9, _0x19de86, _0x1c6c82) {
            this['soundAudio']['parse'](_0x5b3ec9, _0x19de86);
        }
        ['playMusic'](_0x49446c) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x49446c);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x126475) {
            this['soundAudio']['stop'](_0x126475);
        }
        set ['musicVolum' + 'e'](_0x5e5d7e) {
            this['musicAudio']['musicVolum' + 'e'] = _0x5e5d7e;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x276f7e, _0x5b5700 = ![], _0x2c0157 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x276f7e, _0x5b5700, _0x2c0157);
        }
    }
    class _0x3ab29e {
    }
    class _0x4cc37d {
        constructor() {
            this['volume'] = 0x64, this['_audioInst' + 'ances'] = new Map(), this['_musicVolu' + 'me'] = 0x64, window['AudioConte' + 'xt'] = window['AudioConte' + 'xt'] || window['webkitAudi' + 'oContext'], this['context'] = new AudioContext();
        }
        ['getContext']() {
            return this['context'];
        }
        ['isSuspend']() {
            return this['context']['state'] === 'suspended';
        }
        ['suspend']() {
            return this['context']['suspend']();
        }
        ['resume']() {
            return this['context']['resume']();
        }
        ['stopAllNoL' + 'oop']() {
            const _0x2c6f97 = this['_audioInst' + 'ances']['values']();
            for (const _0x9de5bd of _0x2c6f97) {
                const _0x499782 = _0x9de5bd['instance'];
                if (_0x499782['source']['buffer'] && !_0x499782['source']['loop']) {
                    try {
                        _0x499782['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x23cd65) {
                        _0x499782['source']['disconnect']();
                    }
                    _0x499782['source']['onended'] = function () {
                    }, _0x499782['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x5d88fb = this['_audioInst' + 'ances']['values']();
            for (const _0x165e17 of _0x5d88fb) {
                const _0x1b2d5a = _0x165e17['instance'];
                if (_0x1b2d5a['source']['buffer']) {
                    try {
                        _0x1b2d5a['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x15e7e9) {
                        _0x1b2d5a['source']['disconnect']();
                    }
                    _0x1b2d5a['source']['onended'] = function () {
                    }, _0x1b2d5a['setup']();
                }
            }
        }
        ['stop'](_0x2f8e4c) {
            if (this['_audioInst' + 'ances']['has'](_0x2f8e4c)) {
                const _0xf408ee = this['_audioInst' + 'ances']['get'](_0x2f8e4c);
                this['_stopSound'](_0xf408ee);
            }
        }
        ['_stopSound'](_0x224e19) {
            const _0x4bb775 = _0x224e19['instance'];
            if (_0x4bb775['source']['buffer']) {
                try {
                    _0x4bb775['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x673734) {
                    _0x4bb775['source']['disconnect']();
                }
                _0x4bb775['source']['onended'] = function () {
                }, _0x4bb775['setup']();
            }
        }
        ['playMusic'](_0x37acfb) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x37acfb) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x37acfb), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x37acfb, !![])) : this['downloadAr' + 'rayBuffer'](_0x37acfb, () => {
                this['playMusic'](_0x37acfb);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x555e68) {
            this['_musicVolu' + 'me'] = _0x555e68, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0xb0726e, _0x2524b1 = ![], _0x310293 = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0xb0726e)) {
                const _0x61f1b = this['_audioInst' + 'ances']['get'](_0xb0726e), _0x37feb1 = _0x61f1b['instance'];
                if (_0x310293 && !_0x37feb1['ended'])
                    return;
                this['stop'](_0xb0726e);
                if (_0x61f1b['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x2524b1)
                            return;
                        _0x37feb1['playBuffer'](this['context']['currentTim' + 'e'], _0x61f1b['buffer']), _0x37feb1['source']['loop'] = _0x2524b1;
                    } catch (_0x500cbc) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x500cbc);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0xb0726e, () => {
                    this['play'](_0xb0726e, _0x2524b1);
                });
        }
        ['load'](_0x333dc6, _0x54ca2b) {
            let _0x460ae1 = _0x333dc6['length'], _0x48fa19 = 0x0;
            for (let _0x13f3d9 = 0x0; _0x13f3d9 < _0x333dc6['length']; _0x13f3d9++) {
                const _0x2aa0b4 = _0x333dc6[_0x13f3d9];
                this['downloadAr' + 'rayBuffer'](_0x2aa0b4, () => {
                    _0x48fa19++, _0x48fa19 >= _0x460ae1 && (_0x54ca2b && _0x54ca2b());
                });
            }
        }
        ['setThreeD'](_0x4e1523) {
            if (this['_audioInst' + 'ances']['has'](_0x4e1523)) {
                const _0x4431b4 = this['_audioInst' + 'ances']['get'](_0x4e1523);
                _0x4431b4['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x4714c5 = this['context'];
            const _0x560b93 = {
                'gain': _0x4714c5['createGain'](),
                'panner': _0x4714c5['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x195565, _0x255efb, _0xc24e05) {
                    this['source']['buffer'] = _0x255efb;
                    var _0x422ed2 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x422ed2['setup'](), _0x422ed2['ended'] = !![];
                    }, this['source']['start'](_0x195565, _0xc24e05);
                },
                'setup': function () {
                    this['source'] = _0x4714c5['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x560b93['panner']['rolloffFac' + 'tor'] = 0x0, _0x560b93['gain']['connect'](this['context']['destinatio' + 'n']), _0x560b93['setup'](), _0x560b93;
        }
        ['parse'](_0x125f9c, _0xe6dfaf, _0x28938f) {
            const _0x1366c2 = new _0x3ab29e();
            _0x1366c2['url'] = _0x125f9c, _0x1366c2['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x125f9c, _0x1366c2), this['context']['decodeAudi' + 'oData'](_0xe6dfaf, function (_0x216367) {
                _0x1366c2['buffer'] = _0x216367, _0x28938f && _0x28938f();
            }, function (_0x2db1a9) {
                _0x1366c2['error'] = !![], _0x28938f && _0x28938f(), console['log']('Decode\x20err' + 'or.' + _0x1366c2['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x43185b, _0x47a1) {
            if (this['_audioInst' + 'ances']['has'](_0x43185b)) {
                _0x47a1 && _0x47a1();
                return;
            }
            const _0x18d14c = this;
            var _0x4e489c = new XMLHttpRequest();
            _0x4e489c['open']('GET', _0x43185b, !![]), _0x4e489c['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x4e489c['onload'] = function () {
                if (_0x4e489c['status'] === 0xc8 || _0x4e489c['status'] === 0x0)
                    _0x18d14c['parse'](_0x43185b, _0x4e489c['response'], _0x47a1);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x4e489c['onerror'] = function () {
                _0x47a1 && _0x47a1();
                throw 'no\x20respons' + 'e';
            }, _0x4e489c['ontimeout'] = function () {
                _0x47a1 && _0x47a1();
            }, _0x4e489c['onabort'] = function () {
                _0x47a1 && _0x47a1();
            }, _0x4e489c['send'](null);
        }
    }
    const _0x445735 = window['WebAudioEn' + 'gine'] = new _0x2adacd();
    class _0x46339d {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x46339d()), this['_instance'];
        }
        ['initData']() {
            let _0x1c9ef9 = document['getElement' + 'ById']('layaCanvas');
            _0x1c9ef9 && (_0x1c9ef9['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x1c9ef9['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0xfb3552) {
            let _0x4f2c79 = null;
            try {
                let _0x5df8aa = Laya['LocalStora' + 'ge']['getItem'](_0xfb3552);
                _0x4f2c79 = JSON['parse'](_0x5df8aa);
            } catch (_0x2a0153) {
            }
            return _0x4f2c79;
        }
        ['setStorage' + 'Sync'](_0x30d14a, _0x28941a) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x30d14a, JSON['stringify'](_0x28941a));
        }
        ['navigate'](_0x5bf0fb, _0x59f7e8, _0x2d03f4) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x5bf0fb, this['action_'] = _0x59f7e8, this['to_'] = _0x2d03f4, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                window['document']['getElement' + 'ById']('advertisem' + 'ent') && (window['document']['getElement' + 'ById']('advertisem' + 'ent')['style']['display'] = ''), _0x445735['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                window['document']['getElement' + 'ById']('advertisem' + 'ent') && (window['document']['getElement' + 'ById']('advertisem' + 'ent')['style']['display'] = 'none'), _0x445735['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x598725) {
            FKGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x598725 && _0x598725();
                }
            });
        }
        ['showReward'](_0x1d2078, _0x5185ea, _0x6ff8a) {
            FKGames['showReward']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                },
                'rewarded': () => {
                    _0x1d2078 && _0x1d2078(), _0x6ff8a && _0x6ff8a(), _0x6ff8a = null, _0x1d2078 = null, console['log']('----------' + '激励视频广告----' + '显示成功!!!!--' + '--------');
                },
                'dismiaaed': () => {
                }
            });
        }
        ['initList'](_0x10376) {
        }
        ['prompt'](_0xce4e5b, _0x5eab16) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0xd2c6de = Laya['stage']['designWidt' + 'h'], _0x173a85 = Laya['stage']['designHeig' + 'ht'];
            var _0xd2c9f2 = window['innerWidth'], _0x278c39 = window['innerHeigh' + 't'], _0x690bcd, _0xa62780;
            _0xd2c9f2 / _0x278c39 > _0xd2c6de / _0x173a85 ? (_0x690bcd = _0x278c39, _0xa62780 = _0x690bcd * _0xd2c6de / _0x173a85) : (_0xa62780 = _0xd2c9f2, _0x690bcd = _0xa62780 * _0x173a85 / _0xd2c6de), this['prompt_']['style']['width'] = _0xa62780 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0xce4e5b, _0x5eab16 = isNaN(_0x5eab16) ? 0x7d0 : _0x5eab16, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x28699b = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x28699b + ('s\x20ease-in,' + '\x20opacity\x20') + _0x28699b + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x5eab16);
        }
        ['getForgame' + 's']() {
            let _0x5a9b34 = YYGGames['forgames'] || [], _0x5ba8e9 = _0x5a9b34['slice']();
            for (let _0x58d4dd = 0x0, _0x25cbaf = _0x5ba8e9['length']; _0x58d4dd < _0x25cbaf; _0x58d4dd++) {
                const _0x46d589 = Math['floor'](Math['random']() * (_0x58d4dd + 0x1)), _0x32d52c = _0x5ba8e9[_0x46d589];
                _0x5ba8e9[_0x46d589] = _0x5ba8e9[_0x58d4dd], _0x5ba8e9[_0x58d4dd] = _0x32d52c;
            }
            return _0x5ba8e9;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x6679f5 = new Laya['Image']();
                _0x6679f5['skin'] = 'yad.png', _0x6679f5['zOrder'] = 0x30d40, window['yad'] = _0x6679f5;
            }
            return window['yad'];
        }
        ['musicOpen'](_0x264184, _0x1acce9) {
            !this['needStartU' + 'p'] && (_0x1acce9 && _0x1acce9()), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x59b872) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x59b872);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x53498e, _0x1bfd1d = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x53498e);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3360de) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3360de);
                };
            }), this['initialize' + 'd_'] = !![], this['needStartU' + 'p'] = ![], _0x1acce9 && _0x1acce9();
        }
        ['showBanner'](_0x4920ab) {
            _0x4920ab ? YYGGames['showBanner'](_0x4920ab) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            YYGGames['hideBanner']();
        }
        ['showSplash'](_0x13ccd2) {
            _0x13ccd2 ? YYGGames['showSplash'](_0x13ccd2) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x44dd00, _0x422c04) {
            !this['needStartU' + 'p'] && (_0x422c04 && _0x422c04());
            if (this['initialize' + 'd_'])
                return;
            _0x46339d['getInstanc' + 'e']()['showSplash'](), _0x46339d['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x37ab67) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x37ab67);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x271b56, _0x5255f8 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x271b56);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x4fcc18) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x4fcc18);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x340d70 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x44dd00,
                    'config': _0x340d70,
                    'complete': () => {
                        const _0x31547b = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x31547b) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x180c4f => {
                                _0x180c4f['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x422c04 && _0x422c04();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x4a1cb6, _0x5a6a86) {
            !this['needStartU' + 'p'] && (_0x5a6a86 && _0x5a6a86());
            if (this['initialize' + 'd_'])
                return;
            _0x46339d['getInstanc' + 'e']()['showSplash'](), _0x46339d['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5c0ec0) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5c0ec0);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x599bf8) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x599bf8);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x14222e) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x1d8ee4 => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0x4a1cb6,
                    'config': _0x1d8ee4,
                    'complete': () => {
                        const _0x36bbc2 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x36bbc2) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x3a74fe => {
                                _0x3a74fe['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x5a6a86 && _0x5a6a86();
                    }
                });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x475e86 = {
                'x': 0x0,
                'type': 'Box',
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': 'Box',
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': 'Box(NoVide' + 'o)',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': 'Sprite',
                        'searchKey': 'Sprite,spr' + '_tip,spr_t' + 'ip',
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': 'spr_tip',
                            'presetID': 0x2,
                            'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': 'spr_tip',
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': 'spr_tip',
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': 'Rect',
                                'searchKey': 'Rect',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0x21c,
                                    'fillColor': '#000000'
                                },
                                'nodeParent': 0x4,
                                'label': 'Rect(NoVid' + 'eo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'VIDEO',
                                    'presetID': 0x4,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'No\x20Video\x20A' + 'vailable',
                                    'presetID': 0x5,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'Click\x20anyw' + 'here\x20to\x20cl' + 'ose',
                                    'presetID': 0x6,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x9,
                                'child': []
                            }
                        ]
                    }],
                'animations': [{
                        'nodes': [],
                        'name': 'ani1',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x5e401e extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x46339d['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x5f1fbb = new Laya['Prefab']();
            _0x5f1fbb['json'] = _0x475e86, this['noVideoPer'] = _0x5f1fbb['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x5e401e);
        }
        ['showNoVide' + 'o']() {
            this['noVideoPer'] && Laya['stage']['addChild'](this['noVideoPer']);
        }
        ['closeNoVid' + 'eo']() {
            this['noVideoPer'] && this['noVideoPer']['removeSelf']();
        }
        ['createLoad' + 'ing']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x3163e5 = {
                'x': 0xf,
                'type': 'Box',
                'searchKey': 'Box,box_cl' + 'ickLayer',
                'props': {
                    'var': 'box_clickL' + 'ayer',
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': 'box_clickL' + 'ayer',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': 'Box',
                        'searchKey': 'Box',
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#000000',
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': 'Box',
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': 'Label',
                        'searchKey': 'Label',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': 'middle',
                            'text': 'LOADING\x5cnP' + 'LEASE\x20WAIT' + '…',
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': '#ffffff',
                            'centerY': 0x0,
                            'align': 'center'
                        },
                        'nodeParent': 0x83,
                        'label': 'Label',
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x24d0ad extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x46339d['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x242c95 = new Laya['Prefab']();
            _0x242c95['json'] = _0x3163e5, this['loadingPer'] = _0x242c95['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x24d0ad);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x4c50d4 extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x59b45f = new Laya['List']();
            return _0x59b45f['size'](0x320, 0x258), _0x59b45f['itemRender'] = _0x4c50d4, _0x59b45f;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x1ff499 = new Laya['Box']();
                return _0x1ff499['setSize'] = function () {
                }, _0x1ff499;
            }
            if (!this['_scrollLis' + 't']) {
                let _0x395ef0 = {
                    'x': 0x0,
                    'type': 'List',
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': 'List,scrol' + 'lAdList',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                        'name': 'scrollAdLi' + 'st',
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': 'scrollAdLi' + 'st',
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ListBg',
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': 'di2.png',
                                'sizeGrid': '30,\x2030,\x2030' + ',\x2030',
                                'presetID': 0x2,
                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                'name': 'img_ListBg',
                                'height': 0xbe,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': 'img_ListBg',
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': 'Box',
                            'searchKey': 'Box',
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': 'render',
                                'presetID': 0x3,
                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': 'Box(scroll' + 'List)',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,thum' + 'b',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                        'name': 'thumb',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': 'thumb',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': 'di1.png',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x5,
                                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': 'Image(scro' + 'llList)',
                                            'isDirectory': ![],
                                            'isAniNode': ![],
                                            'hasChild': ![],
                                            'compId': 0x7a,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': 'ani1',
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x3702f6 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['scaleNum'] = [
                            0.83,
                            0.83
                        ], this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        this['img_ListBg'] = this['owner']['getChildBy' + 'Name']('img_ListBg'), this['owner']['visible'] = ![], !this['owner']['renderHand' + 'ler'] && (this['owner']['renderHand' + 'ler'] = new Laya['Handler'](this, this['itemRender' + 'Fun']));
                        if (this['imgArr']['length']) {
                            let _0x595c2d = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x595c2d);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x35ea5a = _0x46339d['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x35ea5a['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x35ea5a)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0xc49e6c, _0x318a9a) {
                        let _0x11feb7 = _0xc49e6c['getChildBy' + 'Name']('thumb');
                        _0xc49e6c['offAll'](), _0x11feb7['offAll'](), _0xc49e6c['on'](Laya['Event']['MOUSE_OVER'], _0xc49e6c, () => {
                            _0xc49e6c['zOrder'] = 0x64;
                        }), _0xc49e6c['on'](Laya['Event']['MOUSE_OUT'], _0xc49e6c, () => {
                            _0xc49e6c['zOrder'] = _0x318a9a;
                        }), _0x11feb7['on'](Laya['Event']['MOUSE_OVER'], _0xc49e6c, () => {
                            _0x11feb7['scale'](1.1, 1.1), this['endAni']();
                        }), _0x11feb7['on'](Laya['Event']['MOUSE_OUT'], _0xc49e6c, () => {
                            _0x11feb7['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x11feb7['on'](Laya['Event']['MOUSE_DOWN'], _0xc49e6c, _0x22eaac => {
                            _0x22eaac['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0xc49e6c['dataSource']['id']);
                        });
                        let _0x35436e = _0x11feb7['mask'];
                        _0xc49e6c['width'] = this['sizeTran'][0x0] + 0x14, _0xc49e6c['height'] = this['sizeTran'][0x1] + 0x14, _0xc49e6c['x'] = (this['sizeTran'][0x0] + 0x14) * _0x318a9a;
                        if (this['sizeTran'][0x2])
                            _0x35436e['width'] = _0x11feb7['width'] = this['sizeTran'][0x0], _0x35436e['height'] = _0x11feb7['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x5e6391 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x11feb7['width'] = 0xc8 / _0x5e6391, _0x11feb7['height'] = 0x96 / _0x5e6391, _0x35436e['width'] = this['sizeTran'][0x0], _0x35436e['height'] = this['sizeTran'][0x1];
                        }
                        _0x35436e['x'] = _0x11feb7['width'] / 0x2, _0x35436e['y'] = _0x11feb7['height'] / 0x2;
                    }
                    ['setSize'](_0x33b125, _0x130d46, _0x4bd945 = ![]) {
                        this['sizeTran'] = [
                            _0x33b125,
                            _0x130d46,
                            _0x4bd945
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x33b125 + 0x14) * 0x4, this['owner']['height'] = _0x130d46 + 0x14, this['img_ListBg']['width'] = (_0x33b125 + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x130d46 + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x457c5b) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x473bd6 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x473bd6);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x16cd1a = new Laya['Prefab']();
                _0x16cd1a['json'] = _0x395ef0, this['_scrollLis' + 't'] = _0x16cd1a['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x3702f6), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x3702f6)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x3702f6));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x31b954 = new Laya['Box']();
                return _0x31b954['setSpaceX'] = _0x31b954['setSize'] = function () {
                }, _0x31b954;
            }
            if (!this['_box_adTwo']) {
                let _0x2fa0dc = {
                    'x': 0x0,
                    'type': 'Box',
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': 'Box,box_ad' + 'Two',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                        'name': 'box_adTwo',
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': 'box_adTwo',
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ad0',
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': 'di1.png',
                                'sizeGrid': '30,30,30,3' + '0',
                                'presetID': 0x2,
                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                'name': 'img_ad0',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': 'img_ad0',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,img_' + 'adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': 'img_adImg',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': 'di1.png',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x4,
                                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': 'Image(box_' + 'adTwo)',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x97,
                                            'child': []
                                        }]
                                }]
                        },
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ad1',
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': 'di1.png',
                                'sizeGrid': '30,30,30,3' + '0',
                                'presetID': 0x5,
                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                'name': 'img_ad1',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': 'img_ad1',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,img_' + 'adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': 'img_adImg',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': 'di1.png',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x7,
                                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': 'Image(box_' + 'adTwo)',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x98,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': 'ani1',
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x3f4e33 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x2f39b9 = _0x46339d['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x2f39b9['length'])
                            return;
                        let _0x5a63f3 = JSON['parse'](JSON['stringify'](_0x2f39b9));
                        if (this['imgArr']['length']) {
                            let _0x26c004 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x26c004);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x5a63f3[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x5a63f3[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x473369 => {
                            _0x473369['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5a63f3[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x531f56 => {
                            _0x531f56['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5a63f3[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x4f60b4) {
                        this['spaceNum'] = _0x4f60b4, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x55b1b2 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x55b1b2);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x1caa8a, _0x143f02, _0x1bdc66 = ![]) {
                        this['sizeTran'] = [
                            _0x1caa8a,
                            _0x143f02,
                            _0x1bdc66
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x1caa8a + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x143f02 + 0x14;
                            if (_0x1bdc66)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x1caa8a, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x143f02;
                            else {
                                let _0x1c963a = 0xc8 / _0x1caa8a < 0x96 / _0x143f02 ? 0xc8 / _0x1caa8a : 0x96 / _0x143f02;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x1c963a, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x1c963a, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x1caa8a, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x143f02;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x11b0e1 = new Laya['Prefab']();
                _0x11b0e1['json'] = _0x2fa0dc, this['_box_adTwo'] = _0x11b0e1['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x3f4e33), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x3f4e33)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x3f4e33)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x3f4e33)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x3f4e33));
            }
            return this['_box_adTwo'];
        }
    }
    _0x46339d['_instance'] = null, window['platform'] = _0x46339d;
    class _0x449527 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, this['_inst'] = this;
        }
        static get ['inst']() {
            return !this['_inst'] && new _0x449527(), this['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x3a763b = new Laya['Box']();
                return _0x3a763b['setSpaceX'] = _0x3a763b['setSize'] = function () {
                }, _0x3a763b;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x4ae500 = new Laya['Image']();
                _0x4ae500['name'] = 'leftAdBg', _0x4ae500['sizeGrid'] = '30,30,30,3' + '0', _0x4ae500['size'](0xdc, 0xaa), _0x4ae500['skin'] = 'di1.png';
                let _0x2a8f77 = new Laya['Image']();
                _0x2a8f77['name'] = 'leftAdMask', _0x2a8f77['size'](0xc8, 0x96), _0x2a8f77['sizeGrid'] = '30,30,30,3' + '0', _0x2a8f77['anchorX'] = _0x2a8f77['anchorY'] = 0.5, _0x2a8f77['skin'] = 'di1.png';
                let _0x16d9cc = new Laya['Image']();
                _0x16d9cc['name'] = 'leftAd', _0x16d9cc['size'](0xc8, 0x96), _0x16d9cc['anchorX'] = _0x16d9cc['anchorY'] = 0.5, _0x16d9cc['skin'] = '', _0x16d9cc['mask'] = _0x2a8f77, _0x4ae500['addChild'](_0x16d9cc), _0x4ae500['pos'](0x0, 0x0), _0x16d9cc['pos'](_0x4ae500['width'] / 0x2, _0x4ae500['height'] / 0x2), _0x2a8f77['pos'](_0x16d9cc['width'] / 0x2, _0x16d9cc['height'] / 0x2);
                let _0x34456b = new Laya['Image']();
                _0x34456b['name'] = 'rightAdBg', _0x34456b['sizeGrid'] = '30,30,30,3' + '0', _0x34456b['size'](0xdc, 0xaa), _0x34456b['skin'] = 'di1.png';
                let _0x3e0454 = new Laya['Image']();
                _0x3e0454['name'] = 'rightAdMas' + 'k', _0x3e0454['size'](0xc8, 0x96), _0x3e0454['sizeGrid'] = '30,30,30,3' + '0', _0x3e0454['anchorX'] = _0x3e0454['anchorY'] = 0.5, _0x3e0454['skin'] = 'di1.png';
                let _0x2f5746 = new Laya['Image']();
                _0x2f5746['name'] = 'rightAd', _0x2f5746['size'](0xc8, 0x96), _0x2f5746['anchorX'] = _0x2f5746['anchorY'] = 0.5, _0x2f5746['skin'] = '', _0x2f5746['mask'] = _0x3e0454, _0x34456b['addChild'](_0x2f5746), _0x34456b['pos'](_0x4ae500['width'], 0x0), _0x2f5746['pos'](_0x34456b['width'] / 0x2, _0x34456b['height'] / 0x2), _0x3e0454['pos'](_0x2f5746['width'] / 0x2, _0x2f5746['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x4ae500['width'] + _0x34456b['width'], this['_box_adTwo' + '0']['addChild'](_0x4ae500), this['_box_adTwo' + '0']['addChild'](_0x34456b), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x518701 = _0x46339d['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x518701['length'])
                    return;
                let _0x251d97 = JSON['parse'](JSON['stringify'](_0x518701));
                _0x16d9cc['offAll'](), _0x2f5746['offAll'](), _0x16d9cc['skin'] = _0x251d97[0x0]['thumb'], _0x2f5746['skin'] = _0x251d97[0x1]['thumb'], _0x16d9cc['on'](Laya['Event']['MOUSE_DOWN'], this, _0x3626f8 => {
                    _0x3626f8['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x251d97[0x0]['id']);
                }), _0x2f5746['on'](Laya['Event']['MOUSE_DOWN'], this, _0xae5e6e => {
                    _0xae5e6e['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x251d97[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x474dc0 = 0xc8, _0x2ff050 = 0x96, _0x1d769b = ![], _0x274a11 = !![]) {
            let _0x9c8fe5 = 0xc8;
            _0x474dc0 / 0xc8 > _0x2ff050 / 0x96 ? _0x9c8fe5 = _0x474dc0 / 0xc8 : _0x9c8fe5 = _0x2ff050 / 0x96;
            let _0x4ab2e2 = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x209c45 = this['getChildBy' + 'Name']('leftAdBg'), _0xfab391 = this['getChildBy' + 'Name']('rightAdBg'), _0x5b015b = _0x209c45['getChildBy' + 'Name']('leftAd'), _0x4412e7 = _0xfab391['getChildBy' + 'Name']('rightAd');
                _0x274a11 && (_0x209c45['size'](0xdc, 0xaa), _0xfab391['size'](0xdc, 0xaa), _0x5b015b['size'](0xc8, 0x96), _0x4412e7['size'](0xc8, 0x96), _0x5b015b['mask']['size'](0xc8, 0x96), _0x4412e7['mask']['size'](0xc8, 0x96), _0x209c45['scale'](0x1, 0x1), _0xfab391['scale'](0x1, 0x1), _0x5b015b['scale'](0x1, 0x1), _0x4412e7['scale'](0x1, 0x1), _0x5b015b['mask']['scale'](0x1, 0x1), _0x4412e7['mask']['scale'](0x1, 0x1));
                let _0x678eaa = 0xc8 * _0x2ff050 / _0x474dc0;
                _0x209c45['size'](_0x4ab2e2 + 0x14, _0x678eaa + 0x14), _0xfab391['size'](_0x4ab2e2 + 0x14, _0x678eaa + 0x14), _0x5b015b['mask']['size'](_0x4ab2e2, _0x678eaa), _0x4412e7['mask']['size'](_0x4ab2e2, _0x678eaa), !_0x1d769b ? (_0x5b015b['size'](_0x4ab2e2, _0x678eaa), _0x4412e7['size'](_0x4ab2e2, _0x678eaa)) : (_0x5b015b['size'](0xc8 * _0x9c8fe5, 0x96 * _0x9c8fe5), _0x4412e7['size'](0xc8 * _0x9c8fe5, 0x96 * _0x9c8fe5)), _0x5b015b['pos'](_0x209c45['width'] / 0x2, _0x209c45['height'] / 0x2), _0x5b015b['mask']['pos'](_0x5b015b['width'] / 0x2, _0x5b015b['height'] / 0x2), _0x4412e7['pos'](_0xfab391['width'] / 0x2, _0xfab391['height'] / 0x2), _0x4412e7['mask']['pos'](_0x4412e7['width'] / 0x2, _0x4412e7['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else
                this['name'] == '_scrollLis' + 't' && (this['sizeArr'] = [
                    _0x474dc0,
                    _0x2ff050,
                    _0x1d769b,
                    _0x274a11
                ]);
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x3e59a8 = new Laya['Box']();
                return _0x3e59a8['setSize'] = function () {
                }, _0x3e59a8;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = 'di2.png', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x50b83c extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = 'di1.png', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x1d365e = new Laya['List']();
                _0x1d365e['hScrollBar' + 'Skin'] = '\x20', _0x1d365e['name'] = 'listAd', _0x1d365e['anchorX'] = _0x1d365e['anchorY'] = 0.5, _0x1d365e['size'](0x370, 0xaa), _0x1d365e['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x1d365e['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x1d365e['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x1d365e['itemRender'] = _0x50b83c, _0x1d365e['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x1d365e), _0x1d365e['pos'](this['_scrollLis' + 't']['width'] / 0x2, this['_scrollLis' + 't']['height'] / 0x2);
                let _0x20fcdb = _0x46339d['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x20fcdb['length'])
                    return;
                let _0x187dc0 = JSON['parse'](JSON['stringify'](_0x20fcdb));
                _0x187dc0 = _0x187dc0['concat'](_0x187dc0['slice'](0x0, 0x4)), _0x1d365e['array'] = _0x187dc0, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x1d365e['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x4f6958, _0xbe2044) {
            let _0x4c13e2 = _0x4f6958['dataSource'], _0x2ac2cb = _0x4f6958['getChildBy' + 'Name']('img'), _0x1e5bd4 = _0x2ac2cb['mask'];
            _0x2ac2cb['skin'] = _0x4c13e2['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x4f6958['size'](0xdc, 0xaa), _0x4f6958['img']['size'](0xc8, 0x96), _0x1e5bd4['size'](0xc8, 0x96), _0x4f6958['scale'](0x1, 0x1), _0x4f6958['scale'](0x1, 0x1), _0x1e5bd4['scale'](0x1, 0x1));
            _0x4f6958['offAll'](), _0x2ac2cb['offAll'](), _0x4f6958['on'](Laya['Event']['MOUSE_OVER'], _0x4f6958, () => {
                _0x4f6958['zOrder'] = 0x64;
            }), _0x4f6958['on'](Laya['Event']['MOUSE_OUT'], _0x4f6958, () => {
                _0x4f6958['zOrder'] = _0xbe2044;
            }), _0x2ac2cb['on'](Laya['Event']['MOUSE_OVER'], _0x4f6958, () => {
                _0x2ac2cb['scale'](_0x2ac2cb['scaleX'] + 0.1, _0x2ac2cb['scaleY'] + 0.1), this['endAni']();
            }), _0x2ac2cb['on'](Laya['Event']['MOUSE_OUT'], _0x4f6958, () => {
                _0x2ac2cb['scale'](_0x2ac2cb['scaleX'] - 0.1, _0x2ac2cb['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x2ac2cb['on'](Laya['Event']['MOUSE_DOWN'], _0x4f6958, _0x5d490f => {
                _0x5d490f['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x4c13e2['id']);
            });
            let _0xcb0783 = 0xc8;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0xcb0783 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0xcb0783 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0xeb2768 = 0xc8, _0x32055b = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            _0x4f6958['size'](_0xeb2768 + 0x14, _0x32055b + 0x14), _0x1e5bd4['size'](_0xeb2768, _0x32055b), !this['_scrollLis' + 't']['sizeArr'][0x2] ? _0x4f6958['img']['size'](_0xeb2768, _0x32055b) : (leftAd['size'](0xc8 * _0xcb0783, 0x96 * _0xcb0783), rightAd['size'](0xc8 * _0xcb0783, 0x96 * _0xcb0783)), _0x2ac2cb['pos'](_0x4f6958['width'] / 0x2, _0x4f6958['height'] / 0x2), _0x1e5bd4['pos'](_0x2ac2cb['width'] / 0x2, _0x2ac2cb['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x3f3616 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x3f3616['scrollBar']['value'] += 0x1, _0x3f3616['scrollBar']['value'] >= _0x3f3616['scrollBar']['max'] && (_0x3f3616['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x1a3ca9) {
            if (_0x1a3ca9['name'] == '_box_adTwo' + '0') {
                let _0x4deb57 = _0x1a3ca9['getChildBy' + 'Name']('leftAdBg'), _0x1e2471 = _0x1a3ca9['getChildBy' + 'Name']('rightAdBg'), _0x289a5d = _0x46339d['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x289a5d['length'])
                    return;
                let _0x6fcdc9 = JSON['parse'](JSON['stringify'](_0x289a5d));
                _0x4deb57['offAll'](), _0x1e2471['offAll'](), _0x4deb57['getChildBy' + 'Name']('leftAd')['skin'] = _0x6fcdc9[0x0]['thumb'], _0x1e2471['getChildBy' + 'Name']('rightAd')['skin'] = _0x6fcdc9[0x1]['thumb'], _0x4deb57['on'](Laya['Event']['MOUSE_DOWN'], _0x1a3ca9, _0x2c2f4e => {
                    _0x2c2f4e['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x6fcdc9[0x0]['id']);
                }), _0x1e2471['on'](Laya['Event']['MOUSE_DOWN'], _0x1a3ca9, _0x14430e => {
                    _0x14430e['stopPropag' + 'ation'](), _0x46339d['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x6fcdc9[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x1fdc4f) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x424d6e = this['getChildBy' + 'Name']('leftAdBg'), _0x31194c = this['getChildBy' + 'Name']('rightAdBg');
                _0x31194c['pos'](_0x424d6e['width'] + _0x1fdc4f, 0x0), this['width'] = _0x424d6e['width'] + _0x31194c['width'] + _0x1fdc4f, this['spaceXNum'] = _0x1fdc4f;
            }
        }
    }
}();