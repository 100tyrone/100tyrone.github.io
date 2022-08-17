!function () {
    'use strict';
    let _0x427360 = ![], _0x3afecb = ![];
    function _0x3a96b3(_0x3a586a, _0x3cef9c, _0x276bf3) {
        return (_0x3a96b3 = 'undefined' != typeof Reflect && Reflect['get'] ? Reflect['get'] : function (_0x175fd8, _0x544e2f, _0x2a2935) {
            var _0x50cbb6 = _0x5f269f(_0x175fd8, _0x544e2f);
            if (_0x50cbb6) {
                var _0x56c46e = Object['getOwnProp' + 'ertyDescri' + 'ptor'](_0x50cbb6, _0x544e2f);
                return _0x56c46e['get'] ? _0x56c46e['get']['call'](_0x2a2935) : _0x56c46e['value'];
            }
        })(_0x3a586a, _0x3cef9c, _0x276bf3 || _0x3a586a);
    }
    function _0x5f269f(_0xaae110, _0x58483b) {
        for (; !Object['prototype']['hasOwnProp' + 'erty']['call'](_0xaae110, _0x58483b) && null !== (_0xaae110 = _0x35d7e0(_0xaae110)););
        return _0xaae110;
    }
    function _0x5971e6(_0x54989, _0x12ed54) {
        return !_0x12ed54 || 'object' !== _0x27f7ad(_0x12ed54) && 'function' != typeof _0x12ed54 ? _0x42c9ef(_0x54989) : _0x12ed54;
    }
    function _0x42c9ef(_0x3d62dc) {
        if (void 0x0 === _0x3d62dc)
            throw new ReferenceError('this\x20hasn\x27' + 't\x20been\x20ini' + 'tialised\x20-' + '\x20super()\x20h' + 'asn\x27t\x20been' + '\x20called');
        return _0x3d62dc;
    }
    function _0x35d7e0(_0x618c96) {
        return (_0x35d7e0 = Object['setPrototy' + 'peOf'] ? Object['getPrototy' + 'peOf'] : function (_0xb9d149) {
            return _0xb9d149['__proto__'] || Object['getPrototy' + 'peOf'](_0xb9d149);
        })(_0x618c96);
    }
    function _0x3a441e(_0xcfa907, _0x1a2db2) {
        if ('function' != typeof _0x1a2db2 && null !== _0x1a2db2)
            throw new TypeError('Super\x20expr' + 'ession\x20mus' + 't\x20either\x20b' + 'e\x20null\x20or\x20' + 'a\x20function');
        _0xcfa907['prototype'] = Object['create'](_0x1a2db2 && _0x1a2db2['prototype'], {
            'constructor': {
                'value': _0xcfa907,
                'writable': !0x0,
                'configurable': !0x0
            }
        }), _0x1a2db2 && _0x328036(_0xcfa907, _0x1a2db2);
    }
    function _0x328036(_0x1ad272, _0x52acc7) {
        return (_0x328036 = Object['setPrototy' + 'peOf'] || function (_0x10f660, _0xae1791) {
            return _0x10f660['__proto__'] = _0xae1791, _0x10f660;
        })(_0x1ad272, _0x52acc7);
    }
    function _0x27f7ad(_0x2f5b63) {
        return (_0x27f7ad = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (_0x57cd7b) {
            return typeof _0x57cd7b;
        } : function (_0x3add40) {
            return _0x3add40 && 'function' == typeof Symbol && _0x3add40['constructo' + 'r'] === Symbol && _0x3add40 !== Symbol['prototype'] ? 'symbol' : typeof _0x3add40;
        })(_0x2f5b63);
    }
    function _0x1295b3(_0x5c578f, _0x31560c) {
        if (!(_0x5c578f instanceof _0x31560c))
            throw new TypeError('Cannot\x20cal' + 'l\x20a\x20class\x20' + 'as\x20a\x20funct' + 'ion');
    }
    function _0x5de2ab(_0x4cfc79, _0x394b22) {
        for (var _0x4e91b3 = 0x0; _0x4e91b3 < _0x394b22['length']; _0x4e91b3++) {
            var _0x449158 = _0x394b22[_0x4e91b3];
            _0x449158['enumerable'] = _0x449158['enumerable'] || !0x1, _0x449158['configurab' + 'le'] = !0x0, 'value' in _0x449158 && (_0x449158['writable'] = !0x0), Object['defineProp' + 'erty'](_0x4cfc79, _0x449158['key'], _0x449158);
        }
    }
    function _0x413e7f(_0x133a1c, _0x260d65, _0x5f38ad) {
        return _0x260d65 && _0x5de2ab(_0x133a1c['prototype'], _0x260d65), _0x5f38ad && _0x5de2ab(_0x133a1c, _0x5f38ad), _0x133a1c;
    }
    !function () {
        var _0x83e07c = function () {
            function _0x3ad83f() {
                _0x1295b3(this, _0x3ad83f);
            }
            return _0x413e7f(_0x3ad83f, null, [
                {
                    'key': 'throwNorma' + 'lError',
                    'value': function (_0x43700f) {
                        throw new Error(_0x43700f);
                    }
                },
                {
                    'key': 'throwNot2B' + 'eNull',
                    'value': function (_0xcf7b5b, _0x5f3f12) {
                        null == _0xcf7b5b && this['throwNorma' + 'lError'](''['concat'](_0x5f3f12, '\x20is\x20suppos' + 'ed\x20to\x20be\x20v' + 'alid!!!'));
                    }
                }
            ]), _0x3ad83f;
        }();
        function _0x312bd5(_0xea9c8b, _0x38967f, _0x23dfb8, _0x5c5926) {
            return new (_0x23dfb8 || (_0x23dfb8 = Promise))(function (_0x5753d3, _0x59f36c) {
                function _0x3e3c85(_0x247919) {
                    try {
                        _0x105c26(_0x5c5926['next'](_0x247919));
                    } catch (_0x580315) {
                        _0x59f36c(_0x580315);
                    }
                }
                function _0x1ae5d9(_0x324355) {
                    try {
                        _0x105c26(_0x5c5926['throw'](_0x324355));
                    } catch (_0x401462) {
                        _0x59f36c(_0x401462);
                    }
                }
                function _0x105c26(_0x4cb094) {
                    var _0x32fab3;
                    _0x4cb094['done'] ? _0x5753d3(_0x4cb094['value']) : (_0x32fab3 = _0x4cb094['value'], _0x32fab3 instanceof _0x23dfb8 ? _0x32fab3 : new _0x23dfb8(function (_0x4059e9) {
                        _0x4059e9(_0x32fab3);
                    }))['then'](_0x3e3c85, _0x1ae5d9);
                }
                _0x105c26((_0x5c5926 = _0x5c5926['apply'](_0xea9c8b, _0x38967f || []))['next']());
            });
        }
        Object['create'], Object['create'];
        var _0x4ff468, _0x164459 = function () {
                function _0x1a419c(_0x8cc014) {
                    _0x1295b3(this, _0x1a419c), this['_name'] = _0x8cc014, this['_dispatche' + 'r'] = new Laya['EventDispa' + 'tcher']();
                }
                return _0x413e7f(_0x1a419c, [
                    {
                        'key': 'finish',
                        'value': function () {
                            this['_dispatche' + 'r'] && this['_dispatche' + 'r']['event'](Laya['Event']['COMPLETE']);
                        }
                    },
                    {
                        'key': 'destroy',
                        'value': function () {
                            this['_dispatche' + 'r'] && (this['_dispatche' + 'r']['offAll'](), this['_dispatche' + 'r'] = void 0x0);
                        }
                    },
                    {
                        'key': 'name',
                        'get': function () {
                            return this['_name'];
                        }
                    },
                    {
                        'key': 'dispatcher',
                        'get': function () {
                            return this['_dispatche' + 'r'];
                        }
                    }
                ]), _0x1a419c;
            }(), _0x17edad = function () {
                function _0x162472() {
                    _0x1295b3(this, _0x162472);
                }
                return _0x413e7f(_0x162472, null, [
                    {
                        'key': 'isBetween',
                        'value': function (_0x4ee933, _0x1fd589, _0x104aac) {
                            return arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] && arguments[0x3] ? _0x4ee933 >= Math['min'](_0x1fd589, _0x104aac) && _0x4ee933 <= Math['max'](_0x1fd589, _0x104aac) : _0x4ee933 > Math['min'](_0x1fd589, _0x104aac) && _0x4ee933 < Math['max'](_0x1fd589, _0x104aac);
                        }
                    },
                    {
                        'key': 'minMax',
                        'value': function (_0x5bf157, _0x54050e) {
                            return {
                                'min': Math['min'](_0x5bf157, _0x54050e),
                                'max': Math['max'](_0x5bf157, _0x54050e)
                            };
                        }
                    },
                    {
                        'key': 'calValueBe' + 'tween',
                        'value': function (_0x3f150e, _0x485fe7, _0x205465) {
                            var _0x198069 = this['minMax'](_0x485fe7, _0x205465), _0x38ac03 = _0x198069['min'], _0xd4192d = _0x198069['max'];
                            return Math['max'](Math['min'](_0xd4192d, _0x3f150e), _0x38ac03);
                        }
                    },
                    {
                        'key': 'randomBetw' + 'een',
                        'value': function (_0xc91ef4, _0x32aa9d) {
                            var _0x97bc8d = this['minMax'](_0xc91ef4, _0x32aa9d), _0x261923 = _0x97bc8d['min'], _0x44388d = _0x97bc8d['max'];
                            return _0x261923 + Math['random']() * (_0x44388d - _0x261923);
                        }
                    },
                    {
                        'key': 'calLen',
                        'value': function (_0x13e8d8, _0x31ddd5) {
                            return Math['sqrt'](_0x13e8d8 * _0x13e8d8 + _0x31ddd5 * _0x31ddd5);
                        }
                    },
                    {
                        'key': 'isEqual',
                        'value': function (_0x180fac, _0x1aa1c3) {
                            var _0x8fc200 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 1e-9;
                            return Math['abs'](_0x180fac - _0x1aa1c3) < _0x8fc200;
                        }
                    }
                ]), _0x162472;
            }(), _0x424f9d = function () {
                function _0x3279e7() {
                    _0x1295b3(this, _0x3279e7);
                }
                return _0x413e7f(_0x3279e7, null, [
                    {
                        'key': 'fixWxOpenD' + 'ataViewer',
                        'value': function (_0x3d73db) {
                            var _0x266826 = window['sharedCanv' + 'as'];
                            _0x266826 && _0x3d73db['on'](Laya['Event']['DISPLAY'], void 0x0, function () {
                                _0x266826['width'] = _0x3d73db['width'], _0x266826['height'] = _0x3d73db['height'];
                            });
                        }
                    },
                    {
                        'key': 'addClickLi' + 'stener',
                        'value': function (_0x50acbf, _0x2fe2b1, _0x20e9bc) {
                            _0x50acbf['on'](Laya['Event']['CLICK'], _0x20e9bc, _0x2fe2b1);
                        }
                    },
                    {
                        'key': 'addBtnsCli' + 'ckHandler',
                        'value': function (_0x4641df, _0x1ee65f, _0x44eb4a) {
                            _0x4641df['forEach'](function (_0x20450d) {
                                _0x20450d && _0x20450d['on'](Laya['Event']['CLICK'], _0x44eb4a, _0x1ee65f);
                            });
                        }
                    },
                    {
                        'key': 'removeBtns' + 'ClickHandl' + 'er',
                        'value': function (_0x4b3bc8, _0x3d5dcf, _0x125da6) {
                            _0x4b3bc8['forEach'](function (_0x417f1d) {
                                _0x417f1d && _0x417f1d['off'](Laya['Event']['CLICK'], _0x125da6, _0x3d5dcf);
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadT' + 'exture2D',
                        'value': function (_0xd247bb) {
                            var _0xbbb6e7 = this, _0x2980c4 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
                            return new Promise(function (_0x18ad5f, _0x582ca4) {
                                return _0x312bd5(_0xbbb6e7, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x595690() {
                                    var _0xc5a612;
                                    return regeneratorRuntime['wrap'](function (_0x198ef9) {
                                        for (;;)
                                            switch (_0x198ef9['prev'] = _0x198ef9['next']) {
                                            case 0x0:
                                                _0x2980c4 ? (_0xc5a612 = function _0x2a6f49() {
                                                    console['log']('加载失败', _0xd247bb), Laya['loader']['off'](Laya['Event']['ERROR'], void 0x0, _0x2a6f49), _0x582ca4();
                                                }, Laya['loader']['on'](Laya['Event']['ERROR'], void 0x0, _0xc5a612), Laya['loader']['load'](_0xd247bb, Laya['Handler']['create'](void 0x0, function (_0x1271d8) {
                                                    Laya['loader']['off'](Laya['Event']['ERROR'], void 0x0, _0xc5a612), _0x18ad5f(_0x1271d8);
                                                }), void 0x0, Laya['Loader']['TEXTURE2D'])) : Laya['Texture2D']['load'](_0xd247bb, Laya['Handler']['create'](void 0x0, _0x18ad5f));
                                            case 0x1:
                                            case 'end':
                                                return _0x198ef9['stop']();
                                            }
                                    }, _0x595690, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadM' + 'aterial',
                        'value': function (_0x1585fc) {
                            return new Promise(function (_0xf000e5) {
                                Laya['BaseMateri' + 'al']['load'](_0x1585fc, Laya['Handler']['create'](void 0x0, _0xf000e5));
                            });
                        }
                    },
                    {
                        'key': 'asyncCreat' + 'eRes',
                        'value': function (_0x41ad43, _0x15669a) {
                            return new Promise(function (_0x307f7c) {
                                Laya['loader']['create'](_0x41ad43, Laya['Handler']['create'](void 0x0, _0x307f7c), _0x15669a ? Laya['Handler']['create'](void 0x0, _0x15669a, void 0x0, !0x0) : void 0x0);
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadS' + 'cene3D',
                        'value': function (_0x5f3179) {
                            var _0x5b8ae3 = this;
                            return new Promise(function (_0x598053) {
                                return _0x312bd5(_0x5b8ae3, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x2fa40a() {
                                    return regeneratorRuntime['wrap'](function (_0x19278f) {
                                        for (;;)
                                            switch (_0x19278f['prev'] = _0x19278f['next']) {
                                            case 0x0:
                                                return _0x19278f['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x5f3179);
                                            case 0x2:
                                                _0x598053(Laya['Loader']['getRes'](_0x5f3179));
                                            case 0x3:
                                            case 'end':
                                                return _0x19278f['stop']();
                                            }
                                    }, _0x2fa40a, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadS' + 'prite3D',
                        'value': function (_0x40f030) {
                            var _0x59e8a1 = this;
                            return new Promise(function (_0x16abd5) {
                                return _0x312bd5(_0x59e8a1, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x36bac9() {
                                    var _0x5ec2bd;
                                    return regeneratorRuntime['wrap'](function (_0x5e8cd5) {
                                        for (;;)
                                            switch (_0x5e8cd5['prev'] = _0x5e8cd5['next']) {
                                            case 0x0:
                                                return _0x5e8cd5['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x40f030);
                                            case 0x2:
                                                (_0x5ec2bd = Laya['Sprite3D']['instantiat' + 'e'](Laya['Loader']['getRes'](_0x40f030)))['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x16abd5(_0x5ec2bd);
                                            case 0x5:
                                            case 'end':
                                                return _0x5e8cd5['stop']();
                                            }
                                    }, _0x36bac9, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadP' + 'article',
                        'value': function (_0x2c93a3) {
                            var _0x19cebc = this;
                            return new Promise(function (_0x47237e) {
                                return _0x312bd5(_0x19cebc, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x325567() {
                                    var _0x5517a6;
                                    return regeneratorRuntime['wrap'](function (_0x277dd4) {
                                        for (;;)
                                            switch (_0x277dd4['prev'] = _0x277dd4['next']) {
                                            case 0x0:
                                                return _0x277dd4['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x2c93a3);
                                            case 0x2:
                                                (_0x5517a6 = Laya['ShuriKenPa' + 'rticle3D']['instantiat' + 'e'](Laya['Loader']['getRes'](_0x2c93a3)))['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x47237e(_0x5517a6);
                                            case 0x5:
                                            case 'end':
                                                return _0x277dd4['stop']();
                                            }
                                    }, _0x325567, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'asyncOpenS' + 'cene',
                        'value': function (_0x55b0ae) {
                            var _0x32c596 = this, _0x467169 = !(arguments['length'] > 0x1 && void 0x0 !== arguments[0x1]) || arguments[0x1];
                            return new Promise(function (_0x202f7c) {
                                return _0x312bd5(_0x32c596, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x11a135() {
                                    return regeneratorRuntime['wrap'](function (_0x504871) {
                                        for (;;)
                                            switch (_0x504871['prev'] = _0x504871['next']) {
                                            case 0x0:
                                                return _0x504871['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x55b0ae);
                                            case 0x2:
                                                Laya['Scene']['open'](_0x55b0ae, _0x467169, void 0x0, Laya['Handler']['create'](void 0x0, _0x202f7c));
                                            case 0x3:
                                            case 'end':
                                                return _0x504871['stop']();
                                            }
                                    }, _0x11a135, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadS' + 'cene',
                        'value': function (_0x404192, _0x1749a4, _0x11da8f) {
                            return new Promise(function (_0x1dbef2) {
                                Laya['Scene']['load'](_0x404192, Laya['Handler']['create'](null, function (_0x32236b) {
                                    _0x1749a4 && _0x1749a4['call'](_0x11da8f, 0x1), _0x1dbef2(_0x32236b);
                                }), _0x1749a4 ? Laya['Handler']['create'](_0x11da8f, _0x1749a4, void 0x0, !0x1) : void 0x0);
                            });
                        }
                    },
                    {
                        'key': 'asyncLoadJ' + 'son',
                        'value': function (_0x6d624f) {
                            var _0xae9da5 = this;
                            return new Promise(function (_0x10c700) {
                                return _0x312bd5(_0xae9da5, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0xda5726() {
                                    var _0x545c18;
                                    return regeneratorRuntime['wrap'](function (_0x21e860) {
                                        for (;;)
                                            switch (_0x21e860['prev'] = _0x21e860['next']) {
                                            case 0x0:
                                                return _0x21e860['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x6d624f);
                                            case 0x2:
                                                _0x545c18 = Laya['Loader']['getRes'](_0x6d624f), Array['isArray'](_0x545c18) || (_0x545c18 = _0x545c18 ? [_0x545c18] : []), _0x10c700(_0x545c18);
                                            case 0x5:
                                            case 'end':
                                                return _0x21e860['stop']();
                                            }
                                    }, _0xda5726, this);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'getUrlPara' + 'msObj',
                        'value': function () {
                            var _0x22bfb0, _0x39eb52 = {};
                            return Laya['Browser']['window']['conch'] || (((null === (_0x22bfb0 = Laya['Browser']['window']['location']) || void 0x0 === _0x22bfb0 ? void 0x0 : _0x22bfb0['href']) || '')['split']('?')[0x1] || '')['split']('&')['forEach'](function (_0x286ae4) {
                                if (_0x286ae4 && -0x1 !== _0x286ae4['indexOf']('=')) {
                                    var _0x296d18 = _0x286ae4['split']('=');
                                    _0x39eb52[_0x296d18[0x0]] = _0x296d18[0x1];
                                }
                            }), _0x39eb52;
                        }
                    },
                    {
                        'key': 'asyncLoadR' + 'es',
                        'value': function (_0x8a337b) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x4b69db() {
                                var _0x27a460 = this;
                                return regeneratorRuntime['wrap'](function (_0x5a9b58) {
                                    for (;;)
                                        switch (_0x5a9b58['prev'] = _0x5a9b58['next']) {
                                        case 0x0:
                                            return _0x5a9b58['abrupt']('return', new Promise(function (_0x4308ab) {
                                                return _0x312bd5(_0x27a460, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x1d288f() {
                                                    return regeneratorRuntime['wrap'](function (_0x351e9d) {
                                                        for (;;)
                                                            switch (_0x351e9d['prev'] = _0x351e9d['next']) {
                                                            case 0x0:
                                                                return _0x351e9d['next'] = 0x2, this['asyncCreat' + 'eRes'](_0x8a337b);
                                                            case 0x2:
                                                                _0x4308ab(Laya['loader']['getRes'](_0x8a337b));
                                                            case 0x3:
                                                            case 'end':
                                                                return _0x351e9d['stop']();
                                                            }
                                                    }, _0x1d288f, this);
                                                }));
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x5a9b58['stop']();
                                        }
                                }, _0x4b69db, this);
                            }));
                        }
                    },
                    {
                        'key': 'browerAler' + 't',
                        'value': function (_0x17c6c0) {
                            Laya['Browser']['window']['conch'] || Laya['Browser']['window']['alert'](_0x17c6c0);
                        }
                    },
                    {
                        'key': 'rgb2V3',
                        'value': function (_0x45f6c1) {
                            _0x45f6c1 = _0x45f6c1['replace'](/^#/, '');
                            var _0x5c9e89 = new Laya['Vector3']();
                            return 0x6 === _0x45f6c1['length'] && (_0x5c9e89['x'] = parseInt(_0x45f6c1['substr'](0x0, 0x2), 0x10) / 0x100, _0x5c9e89['y'] = parseInt(_0x45f6c1['substr'](0x0, 0x2), 0x10) / 0x100, _0x5c9e89['z'] = parseInt(_0x45f6c1['substr'](0x0, 0x2), 0x10) / 0x100), _0x5c9e89;
                        }
                    },
                    {
                        'key': 'try2SetTex' + 'ture',
                        'value': function (_0x3445fc, _0x165d33) {
                            var _0x2a6146 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 'none', _0x26bc07 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] && arguments[0x3];
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x198fa7() {
                                var _0x1e4ef7, _0xbbe5d1;
                                return regeneratorRuntime['wrap'](function (_0x5b65a9) {
                                    for (;;)
                                        switch (_0x5b65a9['prev'] = _0x5b65a9['next']) {
                                        case 0x0:
                                            if (_0x3445fc instanceof Laya['MeshSprite' + '3D'] ? _0xbbe5d1 = _0x3445fc['meshRender' + 'er']['material'] : _0x3445fc instanceof Laya['SkinnedMes' + 'hSprite3D'] && (_0xbbe5d1 = _0x3445fc['skinnedMes' + 'hRenderer']['material']), !(_0xbbe5d1 instanceof Laya['UnlitMater' + 'ial'])) {
                                                _0x5b65a9['next'] = 0x6;
                                                break;
                                            }
                                            return _0x5b65a9['next'] = 0x4, this['asyncLoadT' + 'exture2D'](_0x165d33, _0x26bc07);
                                        case 0x4:
                                            _0x1e4ef7 = _0x5b65a9['sent'], _0xbbe5d1['albedoText' + 'ure'] = _0x1e4ef7;
                                        case 0x6:
                                            return 'x' === _0x2a6146 ? _0x3445fc['transform']['localScale' + 'Z'] = _0x3445fc['transform']['localScale' + 'X'] * _0x1e4ef7['height'] / _0x1e4ef7['width'] : 'z' === _0x2a6146 && (_0x3445fc['transform']['localScale' + 'X'] = _0x3445fc['transform']['localScale' + 'Z'] * _0x1e4ef7['width'] / _0x1e4ef7['height']), _0x5b65a9['abrupt']('return', _0x1e4ef7);
                                        case 0x8:
                                        case 'end':
                                            return _0x5b65a9['stop']();
                                        }
                                }, _0x198fa7, this);
                            }));
                        }
                    },
                    {
                        'key': 'getMeshSpr' + 'ite3DChild' + 'Deep',
                        'value': function (_0xa14cd7) {
                            for (var _0x1b4388 = _0xa14cd7['numChildre' + 'n'], _0x1746f5 = 0x0; _0x1746f5 < _0x1b4388; _0x1746f5++) {
                                var _0x5c37a2 = _0xa14cd7['getChildAt'](_0x1746f5);
                                if (_0x5c37a2 instanceof Laya['MeshSprite' + '3D'] || _0x5c37a2 instanceof Laya['SkinnedMes' + 'hSprite3D'])
                                    return _0x5c37a2;
                                var _0x1ae6a7 = this['getMeshSpr' + 'ite3DChild' + 'Deep'](_0x5c37a2);
                                if (_0x1ae6a7)
                                    return _0x1ae6a7;
                            }
                        }
                    },
                    {
                        'key': 'getChildBy' + 'NameDeep',
                        'value': function (_0x94e03b, _0x54a4eb) {
                            var _0x505c92 = _0x94e03b['getChildBy' + 'Name'](_0x54a4eb);
                            if (_0x505c92)
                                return _0x505c92;
                            for (var _0x40277b = _0x94e03b['numChildre' + 'n'], _0x2ac808 = 0x0; _0x2ac808 < _0x40277b; _0x2ac808++) {
                                _0x505c92 = _0x94e03b['getChildAt'](_0x2ac808);
                                var _0x300f14 = this['getChildBy' + 'NameDeep'](_0x505c92, _0x54a4eb);
                                if (_0x300f14)
                                    return _0x300f14;
                            }
                        }
                    },
                    {
                        'key': 'playOrStop' + 'Particle',
                        'value': function (_0x21f52a, _0x4d65ed) {
                            if (_0x21f52a instanceof Laya['ShuriKenPa' + 'rticle3D']) {
                                _0x21f52a['active'] || (console['log']('粒子没有active' + '？'), _0x21f52a['active'] = !0x0);
                                var _0x4eea3b = _0x21f52a['particleSy' + 'stem'];
                                if (_0x4eea3b['isEmitting'] === _0x4d65ed)
                                    return;
                                _0x4d65ed ? _0x4eea3b['play']() : _0x4eea3b['stop']();
                            }
                        }
                    },
                    {
                        'key': 'getFrameDe' + 'lta',
                        'value': function () {
                            var _0x3f2af3 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x1;
                            return Math['min'](0x24, 0x3e8 / _0x3f2af3);
                        }
                    },
                    {
                        'key': 'calFrameVa' + 'lue',
                        'value': function (_0x2b6738) {
                            return _0x2b6738 * this['getFrameDe' + 'lta']() / 0x3e8;
                        }
                    },
                    {
                        'key': 'updateSelf' + 'Props',
                        'value': function (_0x1beb47, _0x5a0459) {
                            var _0x282445 = !(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2], _0x4f0419 = Array['isArray'](_0x5a0459) ? _0x5a0459 : [_0x5a0459], _0x1ba960 = function () {
                                    return _0x4f0419['forEach'](function (_0x4464e8) {
                                        return _0x1beb47[_0x4464e8] = _0x1beb47[_0x4464e8];
                                    });
                                };
                            if (_0x282445)
                                return Laya['Handler']['create'](void 0x0, _0x1ba960, void 0x0, !0x1);
                            _0x1ba960();
                        }
                    },
                    {
                        'key': 'createUlit' + 'Plane',
                        'value': function (_0x25bf42, _0x10e92f, _0x3ef6f6) {
                            var _0x5cd8f9 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 0x1, _0x2710fc = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] && arguments[0x4];
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x327ea9() {
                                var _0x1a3702, _0x3169de;
                                return regeneratorRuntime['wrap'](function (_0x308007) {
                                    for (;;)
                                        switch (_0x308007['prev'] = _0x308007['next']) {
                                        case 0x0:
                                            return _0x1a3702 = new Laya['MeshSprite' + '3D'](Laya['PrimitiveM' + 'esh']['createPlan' + 'e'](_0x25bf42, _0x10e92f)), (_0x3169de = new Laya['UnlitMater' + 'ial']())['renderMode'] = Laya['UnlitMater' + 'ial']['RENDERMODE' + '_TRANSPARE' + 'NT'], _0x3169de['cull'] = Laya['RenderStat' + 'e']['CULL_NONE'], _0x1a3702['meshRender' + 'er']['sharedMate' + 'rial'] = _0x3169de, _0x17edad['isEqual'](_0x5cd8f9, 0x1) || (_0x3169de['albedoColo' + 'r'] = new Laya['Vector4'](0x1, 0x1, 0x1, _0x5cd8f9)), _0x308007['next'] = 0x8, this['try2SetTex' + 'ture'](_0x1a3702, _0x3ef6f6, 'z', _0x2710fc);
                                        case 0x8:
                                            return _0x3169de['albedoText' + 'ure'] = _0x308007['sent'], _0x308007['abrupt']('return', _0x1a3702);
                                        case 0xa:
                                        case 'end':
                                            return _0x308007['stop']();
                                        }
                                }, _0x327ea9, this);
                            }));
                        }
                    },
                    {
                        'key': 'asyncReque' + 'st',
                        'value': function (_0x4bba26, _0x31f1ba) {
                            var _0xd69fb8 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 'post';
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x27bb02() {
                                return regeneratorRuntime['wrap'](function (_0x374d30) {
                                    for (;;)
                                        switch (_0x374d30['prev'] = _0x374d30['next']) {
                                        case 0x0:
                                            return _0x374d30['abrupt']('return', new Promise(function (_0x54d2cb, _0x3cbc57) {
                                                var _0x3eb363 = new Laya['HttpReques' + 't']();
                                                _0x3eb363['once'](Laya['Event']['COMPLETE'], void 0x0, _0x54d2cb), _0x3eb363['once'](Laya['Event']['ERROR'], void 0x0, _0x3cbc57);
                                                if (_0x4bba26['indexOf']('null') > -0x1)
                                                    return _0x3cbc57();
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x374d30['stop']();
                                        }
                                }, _0x27bb02, this);
                            }));
                        }
                    },
                    {
                        'key': 'setVisible' + 'AndAlpha',
                        'value': function (_0x5d93ae, _0x3f4271) {
                            _0x5d93ae['visible'] = _0x3f4271, _0x5d93ae['alpha'] = _0x3f4271 ? 0x1 : 0x0;
                        }
                    },
                    {
                        'key': 'prewarmPar' + 'ticle',
                        'value': function (_0x3336a8) {
                        }
                    }
                ]), _0x3279e7;
            }(), _0x388c8d = new (function () {
                function _0x48b9ce() {
                    _0x1295b3(this, _0x48b9ce), this['_worldClic' + 'kBlockCoun' + 't'] = 0x0;
                }
                return _0x413e7f(_0x48b9ce, [
                    {
                        'key': 'setForceWo' + 'rldCanClic' + 'k',
                        'value': function () {
                            this['_worldClic' + 'kBlockCoun' + 't'] = 0x0, this['_boxModal']['visible'] = !0x1;
                        }
                    },
                    {
                        'key': 'deploy',
                        'value': function () {
                            this['_layerRoot'] || (this['_layerRoot'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['_layerRoot']), this['_layerScen' + 'e'] = this['_layerRoot']['addChild'](new Laya['Sprite']()), this['initWhiteM' + 'ask'](), this['_layerPopu' + 'p'] = this['_layerRoot']['addChild'](new Laya['Sprite']()), this['_layerSpla' + 'sh'] = this['_layerRoot']['addChild'](new Laya['Sprite']()), this['initBoxMod' + 'al'](), _0x77369c['data']['once']('hasGameIni' + 't', this['onGameInit'], this));
                        }
                    },
                    {
                        'key': 'onGameInit',
                        'value': function () {
                            var _0x1a5734 = this;
                            _0x77369c['data']['hasGameIni' + 't'] && this['_boxWhiteM' + 'ask'] && Laya['Tween']['to'](this['_boxWhiteM' + 'ask'], { 'alpha': 0x0 }, 0x1f4, void 0x0, Laya['Handler']['create'](void 0x0, function () {
                                _0x1a5734['_boxWhiteM' + 'ask']['destroy'](), _0x1a5734['_boxWhiteM' + 'ask'] = void 0x0;
                            }));
                        }
                    },
                    {
                        'key': 'initBoxMod' + 'al',
                        'value': function () {
                            var _0xb1787d = this, _0x3f2eef = new Laya['Box']();
                            _0x3f2eef['mouseEnabl' + 'ed'] = !0x0, _0x3f2eef['mouseThrou' + 'gh'] = !0x1, _0x3f2eef['zOrder'] = 0x270f, _0x3f2eef['pos'](-0xa, -0xa, !0x0), _0x3f2eef['size'](0x2710, 0x2710), _0x3f2eef['visible'] = !0x1, _0x3f2eef['on'](Laya['Event']['CLICK'], void 0x0, function () {
                                return console['log'](('世界点击已被禁止，但' + '是锁定次数：')['concat'](_0xb1787d['_worldClic' + 'kBlockCoun' + 't']));
                            }), this['_boxModal'] = _0x3f2eef;
                        }
                    },
                    {
                        'key': 'initWhiteM' + 'ask',
                        'value': function () {
                            var _0x23cf85 = new Laya['Box']();
                            _0x23cf85['mouseEnabl' + 'ed'] = !0x0, _0x23cf85['mouseThrou' + 'gh'] = !0x1, _0x23cf85['pos'](-0xa, -0xa, !0x0), _0x23cf85['size'](0x2710, 0x2710), _0x23cf85['bgColor'] = '#ffffff', this['_boxWhiteM' + 'ask'] = this['layerRoot']['addChild'](_0x23cf85);
                        }
                    },
                    {
                        'key': 'showCustom' + 'View',
                        'value': function (_0x2db2ca) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x35c0fa() {
                                var _0x2710b7;
                                return regeneratorRuntime['wrap'](function (_0x1e3818) {
                                    for (;;)
                                        switch (_0x1e3818['prev'] = _0x1e3818['next']) {
                                        case 0x0:
                                            return _0x1e3818['next'] = 0x2, _0x424f9d['asyncLoadS' + 'cene'](_0x2db2ca);
                                        case 0x2:
                                            return _0x2710b7 = _0x1e3818['sent'], this['_layerPopu' + 'p']['addChild'](_0x2710b7), _0x1e3818['abrupt']('return', _0x2710b7);
                                        case 0x5:
                                        case 'end':
                                            return _0x1e3818['stop']();
                                        }
                                }, _0x35c0fa, this);
                            }));
                        }
                    },
                    {
                        'key': 'isWorldCan' + 'Click',
                        'set': function (_0x4123ee) {
                            var _0x3180db = Math['max'](0x0, this['_worldClic' + 'kBlockCoun' + 't'] + (_0x4123ee ? -0x1 : 0x1));
                            this['_worldClic' + 'kBlockCoun' + 't'] = _0x3180db;
                        },
                        'get': function () {
                            return this['_worldClic' + 'kBlockCoun' + 't'] <= 0x0;
                        }
                    },
                    {
                        'key': 'layerScene',
                        'get': function () {
                            return this['_layerScen' + 'e'];
                        }
                    },
                    {
                        'key': 'layerRoot',
                        'get': function () {
                            return this['_layerRoot'];
                        }
                    },
                    {
                        'key': 'layerPopup',
                        'get': function () {
                            return this['_layerPopu' + 'p'];
                        }
                    },
                    {
                        'key': 'layerSplas' + 'h',
                        'get': function () {
                            return this['_layerSpla' + 'sh'];
                        }
                    }
                ]), _0x48b9ce;
            }())(), _0x5da44a = function () {
                function _0x44ec7c() {
                    _0x1295b3(this, _0x44ec7c);
                }
                return _0x413e7f(_0x44ec7c, [
                    {
                        'key': 'playMusic',
                        'value': function (_0x169d95) {
                            Laya['SoundManag' + 'er']['playMusic'](_0x169d95);
                        }
                    },
                    {
                        'key': 'cookServer' + 'Rsp',
                        'value': function (_0x19e1b6, _0x2d4cf2) {
                            return _0x2d4cf2;
                        }
                    },
                    {
                        'key': 'playSoundE' + 'ffect',
                        'value': function (_0x26c52e, _0x21a809) {
                            Laya['SoundManag' + 'er']['playSound'](_0x26c52e, 0x0);
                        }
                    },
                    {
                        'key': 'stopSound',
                        'value': function (_0x4abc2f) {
                            Laya['SoundManag' + 'er']['stopSound'](_0x4abc2f);
                        }
                    },
                    {
                        'key': 'stopAllSou' + 'nd',
                        'value': function () {
                            Laya['SoundManag' + 'er']['stopAll']();
                        }
                    }
                ]), _0x44ec7c;
            }(), _0x5f41c7 = function () {
                function _0x3f06c4() {
                    _0x1295b3(this, _0x3f06c4);
                }
                return _0x413e7f(_0x3f06c4, null, [
                    {
                        'key': 'compareVer' + 'sion',
                        'value': function (_0x2576a6, _0x2c7a44) {
                            for (var _0x3fd8ce = _0x2576a6['split']('.'), _0x2c3df1 = _0x2c7a44['split']('.'), _0xab294 = Math['max'](_0x3fd8ce['length'], _0x2c3df1['length']), _0x51f1c8 = 0x0; _0x51f1c8 < _0xab294; _0x51f1c8++) {
                                var _0x1b5852 = parseInt(_0x3fd8ce[_0x51f1c8]) || 0x0, _0x2ab66f = parseInt(_0x2c3df1[_0x51f1c8]) || 0x0;
                                if (_0x1b5852 > _0x2ab66f)
                                    return 0x1;
                                if (_0x1b5852 < _0x2ab66f)
                                    return -0x1;
                            }
                            return 0x0;
                        }
                    },
                    {
                        'key': 'truncate',
                        'value': function (_0x4d1d25, _0x5340e4) {
                            var _0x19cb49 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : '...', _0x45c856 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 0x1, _0x8dc0c2 = _0x4d1d25['length'];
                            if (_0x8dc0c2 < _0x5340e4)
                                return _0x4d1d25;
                            var _0x225daf = _0x5340e4 - _0x19cb49['length'];
                            if (0x0 === _0x225daf)
                                return _0x19cb49;
                            _0x225daf < 0x0 && (_0x19cb49 = ''), _0x45c856 = _0x17edad['calValueBe' + 'tween'](_0x45c856, 0x0, 0x1);
                            var _0x49a5d9 = [], _0x26a625 = Math['round'](_0x5340e4 * _0x45c856);
                            return _0x49a5d9['push'](_0x4d1d25['substr'](0x0, _0x26a625)), _0x26a625 = _0x8dc0c2 - (_0x5340e4 - _0x26a625), _0x49a5d9['push'](_0x4d1d25['substr'](_0x26a625)), _0x49a5d9['join'](_0x19cb49);
                        }
                    }
                ]), _0x3f06c4;
            }();
        !function (_0x207a68) {
            _0x207a68['LoadRes'] = 'LoadRes', _0x207a68['Rank'] = 'Rank', _0x207a68['ReqMyInfo'] = 'ReqMyInfo', _0x207a68['WorldRankD' + 'ata'] = 'WorldRankD' + 'ata', _0x207a68['ShowFirstF' + 'riendPlaye' + 'rHead'] = 'ShowFirstF' + 'riendPlaye' + 'rHead', _0x207a68['SubmitScor' + 'e'] = 'SubmitScor' + 'e', _0x207a68['CheckOverP' + 'layer'] = 'CheckOverP' + 'layer', _0x207a68['Reset'] = 'Reset';
        }(_0x4ff468 || (_0x4ff468 = {}));
        var _0x3e974f, _0x4d0c7a = function () {
                function _0x113050() {
                    _0x1295b3(this, _0x113050), this['_dispatche' + 'r'] = new Laya['EventDispa' + 'tcher']();
                }
                return _0x413e7f(_0x113050, [
                    {
                        'key': 'once',
                        'value': function (_0x4b3091, _0x276971, _0x50bc03) {
                            this['_dispatche' + 'r'] && this['_dispatche' + 'r']['once'](_0x4b3091['toString'](), _0x50bc03, _0x276971);
                        }
                    },
                    {
                        'key': 'on',
                        'value': function (_0x142546, _0x1e9454, _0x49f9f1) {
                            var _0x48ff50 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] && arguments[0x3];
                            this['_dispatche' + 'r'] && (this['_dispatche' + 'r']['on'](_0x142546['toString'](), _0x49f9f1, _0x1e9454), _0x48ff50) && _0x1e9454['call'](_0x49f9f1, {
                                'event': _0x142546['toString'](),
                                'value': this[_0x142546]
                            });
                        }
                    },
                    {
                        'key': 'off',
                        'value': function (_0x4e0720, _0xa8200a, _0x4b248c) {
                            var _0x39ab1e = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 'all';
                            this['_dispatche' + 'r'] && this['_dispatche' + 'r']['off'](_0x4e0720['toString'](), _0x4b248c, _0xa8200a, 'once' === _0x39ab1e);
                        }
                    },
                    {
                        'key': 'offAllCall' + 'er',
                        'value': function (_0x50a381) {
                            this['_dispatche' + 'r'] && this['_dispatche' + 'r']['offAllCall' + 'er'](_0x50a381);
                        }
                    },
                    {
                        'key': 'emit',
                        'value': function (_0x2be5fa, _0x14cf8d) {
                            if (this['isValid']) {
                                var _0x56cc50 = _0x2be5fa['toString']();
                                if (this['_dispatche' + 'r']['hasListene' + 'r'](_0x56cc50)) {
                                    var _0x86a401 = {
                                        'event': _0x56cc50,
                                        'value': _0x14cf8d
                                    };
                                    this['_dispatche' + 'r']['event'](_0x86a401['event'], _0x86a401);
                                }
                            }
                        }
                    },
                    {
                        'key': 'hasListene' + 'r',
                        'value': function (_0x22305a) {
                            var _0xf4a11b;
                            return (null === (_0xf4a11b = this['_dispatche' + 'r']) || void 0x0 === _0xf4a11b ? void 0x0 : _0xf4a11b['hasListene' + 'r'](_0x22305a['toString']())) || !0x1;
                        }
                    },
                    {
                        'key': 'destroy',
                        'value': function () {
                            this['_dispatche' + 'r'] && (this['_dispatche' + 'r']['offAll'](), this['_dispatche' + 'r'] = null);
                        }
                    },
                    {
                        'key': 'isValid',
                        'get': function () {
                            return !!this['_dispatche' + 'r'];
                        }
                    }
                ]), _0x113050;
            }(), _0x3791c1 = function () {
                function _0x5afcea() {
                    _0x1295b3(this, _0x5afcea);
                }
                return _0x413e7f(_0x5afcea, null, [
                    {
                        'key': 'uniq',
                        'value': function (_0x221010) {
                            for (var _0x1f64a9 = new Map(), _0x4d34ac = _0x221010['length'], _0x315c64 = 0x0; _0x315c64 < _0x4d34ac; _0x315c64++) {
                                var _0x3798be = _0x221010[_0x315c64];
                                _0x1f64a9['get'](_0x3798be) ? (_0x221010['splice'](_0x315c64, 0x1), _0x315c64--, _0x4d34ac--) : _0x1f64a9['set'](_0x3798be, !0x0);
                            }
                            return _0x221010;
                        }
                    },
                    {
                        'key': 'randomOne',
                        'value': function (_0x2ef3b9, _0x376623) {
                            var _0x4472a7 = _0x2ef3b9['length'];
                            if (_0x4472a7 && (null == _0x376623 || !_0x376623['length'] || (_0x4472a7 = (_0x2ef3b9 = _0x2ef3b9['filter'](function (_0x182a8c) {
                                    return -0x1 !== _0x376623['indexOf'](_0x182a8c);
                                }))['length'])))
                                return _0x2ef3b9[Math['random']() * _0x4472a7 >> 0x0];
                        }
                    },
                    {
                        'key': 'disturb',
                        'value': function (_0x175a8a) {
                            return _0x175a8a['sort'](function () {
                                return Math['random']() - 0.5;
                            }), _0x175a8a;
                        }
                    },
                    {
                        'key': 'createNumb' + 'erArrary',
                        'value': function (_0xcb78c5, _0x1eb17f) {
                            for (var _0x46970e = [], _0x3b067f = _0xcb78c5; _0x3b067f <= _0x1eb17f; _0x3b067f++)
                                _0x46970e['push'](_0x3b067f);
                            return _0x46970e;
                        }
                    },
                    {
                        'key': 'createBezi' + 'erPoints',
                        'value': function (_0x32484e, _0x2d8a3b) {
                            for (var _0x173b5d = [], _0x30d1b6 = 0x0; _0x30d1b6 < _0x2d8a3b; _0x30d1b6++)
                                _0x173b5d['push'](this['multiPoint' + 'Bezier'](_0x32484e, _0x30d1b6 / _0x2d8a3b));
                            return _0x173b5d;
                        }
                    },
                    {
                        'key': 'multiPoint' + 'Bezier',
                        'value': function (_0x278cf4, _0x5bcb98) {
                            for (var _0x22bdb8 = _0x278cf4['length'], _0x585b0a = 0x0, _0x65d361 = 0x0, _0x9f02d = 0x0; _0x9f02d < _0x22bdb8; _0x9f02d++) {
                                var _0x419fe4 = _0x278cf4[_0x9f02d];
                                _0x585b0a += _0x419fe4['x'] * Math['pow'](0x1 - _0x5bcb98, _0x22bdb8 - 0x1 - _0x9f02d) * Math['pow'](_0x5bcb98, _0x9f02d) * this['erxiangshi'](_0x22bdb8 - 0x1, _0x9f02d), _0x65d361 += _0x419fe4['y'] * Math['pow'](0x1 - _0x5bcb98, _0x22bdb8 - 0x1 - _0x9f02d) * Math['pow'](_0x5bcb98, _0x9f02d) * this['erxiangshi'](_0x22bdb8 - 0x1, _0x9f02d);
                            }
                            return {
                                'x': _0x585b0a,
                                'y': _0x65d361
                            };
                        }
                    },
                    {
                        'key': 'erxiangshi',
                        'value': function (_0xc4c28d, _0x24214b) {
                            for (var _0x2998a4 = 0x1, _0x22e9ea = 0x1; _0x24214b > 0x0;)
                                _0x2998a4 *= _0xc4c28d, _0x22e9ea *= _0x24214b, _0xc4c28d--, _0x24214b--;
                            return _0x2998a4 / _0x22e9ea;
                        }
                    },
                    {
                        'key': 'keys',
                        'value': function (_0x3828a3) {
                            var _0x45e444 = [];
                            for (var _0x5ad342 in _0x3828a3)
                                _0x45e444['push'](_0x5ad342);
                            return _0x45e444;
                        }
                    },
                    {
                        'key': 'values',
                        'value': function (_0xff9c71) {
                            var _0x220b5c = [];
                            for (var _0x261a4 in _0xff9c71)
                                Object['prototype']['hasOwnProp' + 'erty']['call'](_0xff9c71, _0x261a4) && _0x220b5c['push'](_0xff9c71[_0x261a4]);
                            return _0x220b5c;
                        }
                    },
                    {
                        'key': 'remove',
                        'value': function (_0x597b32, _0x3e2d6f) {
                            var _0xad9791 = _0x597b32['indexOf'](_0x3e2d6f);
                            return -0x1 !== _0xad9791 && _0x597b32['splice'](_0xad9791, 0x1), _0xad9791;
                        }
                    },
                    {
                        'key': 'getChildre' + 'nByNameSec' + 'tion',
                        'value': function (_0x13de5f, _0x565596) {
                            for (var _0x1014c5 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 0x1, _0x1f9b88 = arguments['length'] > 0x3 ? arguments[0x3] : void 0x0, _0x2573a8 = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] && arguments[0x4], _0x17c43c = [];;) {
                                var _0x554b08 = _0x565596 + _0x1014c5, _0x43afe0 = _0x2573a8 ? _0x13de5f['getChildBy' + 'Name'](_0x554b08) : _0x13de5f[_0x554b08];
                                if (!_0x43afe0)
                                    break;
                                (!_0x1f9b88 || _0x43afe0 instanceof _0x1f9b88) && (_0x17c43c['push'](_0x43afe0), _0x1014c5++);
                            }
                            return _0x17c43c;
                        }
                    }
                ]), _0x5afcea;
            }();
        !function (_0x2dfd5f) {
            _0x2dfd5f['login'] = '/common/te' + 'mporaryLog' + 'in', _0x2dfd5f['getAvatar'] = '/common/ge' + 'tAvatar', _0x2dfd5f['authorizeL' + 'ogin'] = '/common/au' + 'thorizedLo' + 'gin', _0x2dfd5f['recordShar' + 'e'] = '/user/reco' + 'rdShare', _0x2dfd5f['clickWxApp'] = '/common/cl' + 'ickWxapp', _0x2dfd5f['viewVideo'] = '/user/view' + 'Video', _0x2dfd5f['worldRank'] = '/user/worl' + 'dRanking', _0x2dfd5f['pass'] = '/user/pass', _0x2dfd5f['getInitCon' + 'fig'] = '';
        }(_0x3e974f || (_0x3e974f = {}));
        var _0x5efb07 = function () {
            function _0x399553() {
                _0x1295b3(this, _0x399553);
            }
            return _0x413e7f(_0x399553, null, [
                {
                    'key': 'hex_md5',
                    'value': function (_0x573c5f) {
                        return this['binl2hex'](this['core_md5'](this['str2binl'](_0x573c5f), _0x573c5f['length'] * this['chrsz']));
                    }
                },
                {
                    'key': 'b64_md5',
                    'value': function (_0x548ce3) {
                        return this['binl2b64'](this['core_md5'](this['str2binl'](_0x548ce3), _0x548ce3['length'] * this['chrsz']));
                    }
                },
                {
                    'key': 'str_md5',
                    'value': function (_0x5d860c) {
                        return this['binl2str'](this['core_md5'](this['str2binl'](_0x5d860c), _0x5d860c['length'] * this['chrsz']));
                    }
                },
                {
                    'key': 'hex_hmac_m' + 'd5',
                    'value': function (_0x5a7a94, _0x38429c) {
                        return this['binl2hex'](this['core_hmac_' + 'md5'](_0x5a7a94, _0x38429c));
                    }
                },
                {
                    'key': 'b64_hmac_m' + 'd5',
                    'value': function (_0x496a52, _0x39ffde) {
                        return this['binl2b64'](this['core_hmac_' + 'md5'](_0x496a52, _0x39ffde));
                    }
                },
                {
                    'key': 'str_hmac_m' + 'd5',
                    'value': function (_0x3e86d9, _0x5318e8) {
                        return this['binl2str'](this['core_hmac_' + 'md5'](_0x3e86d9, _0x5318e8));
                    }
                },
                {
                    'key': 'md5_vm_tes' + 't',
                    'value': function () {
                        return '900150983c' + 'd24fb0d696' + '3f7d28e17f' + '72' == this['hex_md5']('abc');
                    }
                },
                {
                    'key': 'core_md5',
                    'value': function (_0x49b0eb, _0x16ece5) {
                        _0x49b0eb[_0x16ece5 >> 0x5] |= 0x80 << _0x16ece5 % 0x20, _0x49b0eb[0xe + (_0x16ece5 + 0x40 >>> 0x9 << 0x4)] = _0x16ece5;
                        for (var _0x515d6e = 0x67452301, _0x16e491 = -0x10325477, _0x3645d9 = -0x67452302, _0x25869f = 0x10325476, _0x21f864 = 0x0; _0x21f864 < _0x49b0eb['length']; _0x21f864 += 0x10) {
                            var _0x25c20b = _0x515d6e, _0x35607b = _0x16e491, _0x443420 = _0x3645d9, _0x1a5008 = _0x25869f;
                            _0x515d6e = this['md5_ff'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x0], 0x7, -0x28955b88), _0x25869f = this['md5_ff'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x1], 0xc, -0x173848aa), _0x3645d9 = this['md5_ff'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x2], 0x11, 0x242070db), _0x16e491 = this['md5_ff'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x3], 0x16, -0x3e423112), _0x515d6e = this['md5_ff'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x4], 0x7, -0xa83f051), _0x25869f = this['md5_ff'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x5], 0xc, 0x4787c62a), _0x3645d9 = this['md5_ff'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x6], 0x11, -0x57cfb9ed), _0x16e491 = this['md5_ff'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x7], 0x16, -0x2b96aff), _0x515d6e = this['md5_ff'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x8], 0x7, 0x698098d8), _0x25869f = this['md5_ff'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x9], 0xc, -0x74bb0851), _0x3645d9 = this['md5_ff'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xa], 0x11, -0xa44f), _0x16e491 = this['md5_ff'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xb], 0x16, -0x76a32842), _0x515d6e = this['md5_ff'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0xc], 0x7, 0x6b901122), _0x25869f = this['md5_ff'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xd], 0xc, -0x2678e6d), _0x3645d9 = this['md5_ff'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xe], 0x11, -0x5986bc72), _0x16e491 = this['md5_ff'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xf], 0x16, 0x49b40821), _0x515d6e = this['md5_gg'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x1], 0x5, -0x9e1da9e), _0x25869f = this['md5_gg'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x6], 0x9, -0x3fbf4cc0), _0x3645d9 = this['md5_gg'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xb], 0xe, 0x265e5a51), _0x16e491 = this['md5_gg'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x0], 0x14, -0x16493856), _0x515d6e = this['md5_gg'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x5], 0x5, -0x29d0efa3), _0x25869f = this['md5_gg'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xa], 0x9, 0x2441453), _0x3645d9 = this['md5_gg'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xf], 0xe, -0x275e197f), _0x16e491 = this['md5_gg'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x4], 0x14, -0x182c0438), _0x515d6e = this['md5_gg'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x9], 0x5, 0x21e1cde6), _0x25869f = this['md5_gg'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xe], 0x9, -0x3cc8f82a), _0x3645d9 = this['md5_gg'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x3], 0xe, -0xb2af279), _0x16e491 = this['md5_gg'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x8], 0x14, 0x455a14ed), _0x515d6e = this['md5_gg'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0xd], 0x5, -0x561c16fb), _0x25869f = this['md5_gg'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x2], 0x9, -0x3105c08), _0x3645d9 = this['md5_gg'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x7], 0xe, 0x676f02d9), _0x16e491 = this['md5_gg'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xc], 0x14, -0x72d5b376), _0x515d6e = this['md5_hh'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x5], 0x4, -0x5c6be), _0x25869f = this['md5_hh'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x8], 0xb, -0x788e097f), _0x3645d9 = this['md5_hh'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xb], 0x10, 0x6d9d6122), _0x16e491 = this['md5_hh'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xe], 0x17, -0x21ac7f4), _0x515d6e = this['md5_hh'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x1], 0x4, -0x5b4115bc), _0x25869f = this['md5_hh'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x4], 0xb, 0x4bdecfa9), _0x3645d9 = this['md5_hh'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x7], 0x10, -0x944b4a0), _0x16e491 = this['md5_hh'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xa], 0x17, -0x41404390), _0x515d6e = this['md5_hh'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0xd], 0x4, 0x289b7ec6), _0x25869f = this['md5_hh'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x0], 0xb, -0x155ed806), _0x3645d9 = this['md5_hh'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x3], 0x10, -0x2b10cf7b), _0x16e491 = this['md5_hh'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x6], 0x17, 0x4881d05), _0x515d6e = this['md5_hh'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x9], 0x4, -0x262b2fc7), _0x25869f = this['md5_hh'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xc], 0xb, -0x1924661b), _0x3645d9 = this['md5_hh'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xf], 0x10, 0x1fa27cf8), _0x16e491 = this['md5_hh'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x2], 0x17, -0x3b53a99b), _0x515d6e = this['md5_ii'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x0], 0x6, -0xbd6ddbc), _0x25869f = this['md5_ii'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x7], 0xa, 0x432aff97), _0x3645d9 = this['md5_ii'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xe], 0xf, -0x546bdc59), _0x16e491 = this['md5_ii'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x5], 0x15, -0x36c5fc7), _0x515d6e = this['md5_ii'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0xc], 0x6, 0x655b59c3), _0x25869f = this['md5_ii'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0x3], 0xa, -0x70f3336e), _0x3645d9 = this['md5_ii'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0xa], 0xf, -0x100b83), _0x16e491 = this['md5_ii'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x1], 0x15, -0x7a7ba22f), _0x515d6e = this['md5_ii'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x8], 0x6, 0x6fa87e4f), _0x25869f = this['md5_ii'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xf], 0xa, -0x1d31920), _0x3645d9 = this['md5_ii'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x6], 0xf, -0x5cfebcec), _0x16e491 = this['md5_ii'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0xd], 0x15, 0x4e0811a1), _0x515d6e = this['md5_ii'](_0x515d6e, _0x16e491, _0x3645d9, _0x25869f, _0x49b0eb[_0x21f864 + 0x4], 0x6, -0x8ac817e), _0x25869f = this['md5_ii'](_0x25869f, _0x515d6e, _0x16e491, _0x3645d9, _0x49b0eb[_0x21f864 + 0xb], 0xa, -0x42c50dcb), _0x3645d9 = this['md5_ii'](_0x3645d9, _0x25869f, _0x515d6e, _0x16e491, _0x49b0eb[_0x21f864 + 0x2], 0xf, 0x2ad7d2bb), _0x16e491 = this['md5_ii'](_0x16e491, _0x3645d9, _0x25869f, _0x515d6e, _0x49b0eb[_0x21f864 + 0x9], 0x15, -0x14792c6f), _0x515d6e = this['safe_add'](_0x515d6e, _0x25c20b), _0x16e491 = this['safe_add'](_0x16e491, _0x35607b), _0x3645d9 = this['safe_add'](_0x3645d9, _0x443420), _0x25869f = this['safe_add'](_0x25869f, _0x1a5008);
                        }
                        return Array(_0x515d6e, _0x16e491, _0x3645d9, _0x25869f);
                    }
                },
                {
                    'key': 'md5_cmn',
                    'value': function (_0x1d0e6b, _0x27f1ae, _0x50d41, _0x4b93d1, _0x36cc4e, _0x83e193) {
                        return this['safe_add'](this['bit_rol'](this['safe_add'](this['safe_add'](_0x27f1ae, _0x1d0e6b), this['safe_add'](_0x4b93d1, _0x83e193)), _0x36cc4e), _0x50d41);
                    }
                },
                {
                    'key': 'md5_ff',
                    'value': function (_0x5a5d9b, _0x2f7489, _0x255bd2, _0x54bd0b, _0x20b865, _0x335437, _0x5628f5) {
                        return this['md5_cmn'](_0x2f7489 & _0x255bd2 | ~_0x2f7489 & _0x54bd0b, _0x5a5d9b, _0x2f7489, _0x20b865, _0x335437, _0x5628f5);
                    }
                },
                {
                    'key': 'md5_gg',
                    'value': function (_0x1ea732, _0x3fe995, _0x17cc9d, _0x1a7eb7, _0x5af3d1, _0x271b5a, _0x5400f3) {
                        return this['md5_cmn'](_0x3fe995 & _0x1a7eb7 | _0x17cc9d & ~_0x1a7eb7, _0x1ea732, _0x3fe995, _0x5af3d1, _0x271b5a, _0x5400f3);
                    }
                },
                {
                    'key': 'md5_hh',
                    'value': function (_0xeec1d1, _0x5202c2, _0x13794d, _0x114ded, _0x22dfc4, _0x18a5c6, _0x397f28) {
                        return this['md5_cmn'](_0x5202c2 ^ _0x13794d ^ _0x114ded, _0xeec1d1, _0x5202c2, _0x22dfc4, _0x18a5c6, _0x397f28);
                    }
                },
                {
                    'key': 'md5_ii',
                    'value': function (_0x2dea02, _0xd7cd3f, _0x4c4752, _0x48d6f4, _0x3b554f, _0x1aa1f5, _0x3de3a0) {
                        return this['md5_cmn'](_0x4c4752 ^ (_0xd7cd3f | ~_0x48d6f4), _0x2dea02, _0xd7cd3f, _0x3b554f, _0x1aa1f5, _0x3de3a0);
                    }
                },
                {
                    'key': 'core_hmac_' + 'md5',
                    'value': function (_0x5b121b, _0x3af429) {
                        var _0x231b80 = this['str2binl'](_0x5b121b);
                        _0x231b80['length'] > 0x10 && (_0x231b80 = this['core_md5'](_0x231b80, _0x5b121b['length'] * this['chrsz']));
                        for (var _0x1fe9d3 = Array(0x10), _0x5da8cd = Array(0x10), _0x59f47e = 0x0; _0x59f47e < 0x10; _0x59f47e++)
                            _0x1fe9d3[_0x59f47e] = 0x36363636 ^ _0x231b80[_0x59f47e], _0x5da8cd[_0x59f47e] = 0x5c5c5c5c ^ _0x231b80[_0x59f47e];
                        var _0x24e7a4 = this['core_md5'](_0x1fe9d3['concat'](this['str2binl'](_0x3af429)), 0x200 + _0x3af429['length'] * this['chrsz']);
                        return this['core_md5'](_0x5da8cd['concat'](_0x24e7a4), 0x280);
                    }
                },
                {
                    'key': 'safe_add',
                    'value': function (_0x26254e, _0xff200e) {
                        var _0x455fa9 = (0xffff & _0x26254e) + (0xffff & _0xff200e);
                        return (_0x26254e >> 0x10) + (_0xff200e >> 0x10) + (_0x455fa9 >> 0x10) << 0x10 | 0xffff & _0x455fa9;
                    }
                },
                {
                    'key': 'bit_rol',
                    'value': function (_0x47b939, _0x38055e) {
                        return _0x47b939 << _0x38055e | _0x47b939 >>> 0x20 - _0x38055e;
                    }
                },
                {
                    'key': 'str2binl',
                    'value': function (_0x1af1b6) {
                        for (var _0x36bc04 = Array(), _0x29e814 = (0x1 << this['chrsz']) - 0x1, _0x51a3ff = 0x0; _0x51a3ff < _0x1af1b6['length'] * this['chrsz']; _0x51a3ff += this['chrsz'])
                            _0x36bc04[_0x51a3ff >> 0x5] |= (_0x1af1b6['charCodeAt'](_0x51a3ff / this['chrsz']) & _0x29e814) << _0x51a3ff % 0x20;
                        return _0x36bc04;
                    }
                },
                {
                    'key': 'binl2str',
                    'value': function (_0x17622d) {
                        for (var _0x2268d2 = '', _0x52e189 = (0x1 << this['chrsz']) - 0x1, _0x380498 = 0x0; _0x380498 < 0x20 * _0x17622d['length']; _0x380498 += this['chrsz'])
                            _0x2268d2 += String['fromCharCo' + 'de'](_0x17622d[_0x380498 >> 0x5] >>> _0x380498 % 0x20 & _0x52e189);
                        return _0x2268d2;
                    }
                },
                {
                    'key': 'binl2hex',
                    'value': function (_0x33366b) {
                        for (var _0x5ba1fe = this['hexcase'] ? '0123456789' + 'ABCDEF' : '0123456789' + 'abcdef', _0x4cefc0 = '', _0x14ef58 = 0x0; _0x14ef58 < 0x4 * _0x33366b['length']; _0x14ef58++)
                            _0x4cefc0 += _0x5ba1fe['charAt'](_0x33366b[_0x14ef58 >> 0x2] >> _0x14ef58 % 0x4 * 0x8 + 0x4 & 0xf) + _0x5ba1fe['charAt'](_0x33366b[_0x14ef58 >> 0x2] >> _0x14ef58 % 0x4 * 0x8 & 0xf);
                        return _0x4cefc0;
                    }
                },
                {
                    'key': 'binl2b64',
                    'value': function (_0x4b5b50) {
                        for (var _0x147b99 = '', _0x3b3958 = 0x0; _0x3b3958 < 0x4 * _0x4b5b50['length']; _0x3b3958 += 0x3)
                            for (var _0x412d44 = (_0x4b5b50[_0x3b3958 >> 0x2] >> _0x3b3958 % 0x4 * 0x8 & 0xff) << 0x10 | (_0x4b5b50[_0x3b3958 + 0x1 >> 0x2] >> (_0x3b3958 + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | _0x4b5b50[_0x3b3958 + 0x2 >> 0x2] >> (_0x3b3958 + 0x2) % 0x4 * 0x8 & 0xff, _0x24c8c3 = 0x0; _0x24c8c3 < 0x4; _0x24c8c3++)
                                0x8 * _0x3b3958 + 0x6 * _0x24c8c3 > 0x20 * _0x4b5b50['length'] ? _0x147b99 += this['b64pad'] : _0x147b99 += ('ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz01234567' + '89+/')['charAt'](_0x412d44 >> 0x6 * (0x3 - _0x24c8c3) & 0x3f);
                        return _0x147b99;
                    }
                }
            ]), _0x399553;
        }();
        _0x5efb07['hexcase'] = 0x0, _0x5efb07['b64pad'] = '', _0x5efb07['chrsz'] = 0x8;
        var _0x312c52, _0x1afaae, _0x4ab376 = new (function () {
                function _0x14a01c() {
                    _0x1295b3(this, _0x14a01c);
                }
                return _0x413e7f(_0x14a01c, [
                    {
                        'key': 'request',
                        'value': function (_0x4c4f27, _0x1059f6) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x3541cf() {
                                var _0x5d7ddd, _0x355891, _0xf8c08f, _0x19223b, _0x34c707, _0x43a740;
                                return regeneratorRuntime['wrap'](function (_0x4ddda5) {
                                    for (;;)
                                        switch (_0x4ddda5['prev'] = _0x4ddda5['next']) {
                                        case 0x0:
                                            return _0x1059f6 = _0x1059f6 || {}, _0x355891 = _0x77369c['config']['server'], _0xf8c08f = _0x355891['host']['replace'](/\/+$/, ''), _0x19223b = _0x355891['apiversion']['replace'](/[\/\\]/g, ''), _0x34c707 = _0x4c4f27['replace'](/^\/+/, ''), _0x4ddda5['prev'] = 0x5, _0x43a740 = ''['concat'](_0xf8c08f, '/')['concat'](_0x19223b, '/')['concat'](_0x34c707), _0x4ddda5['next'] = 0x9, _0x424f9d['asyncReque' + 'st'](_0x43a740, this['signParmas'](_0x1059f6), 'post');
                                        case 0x9:
                                            _0x5d7ddd = _0x4ddda5['sent'], _0x5d7ddd = _0x3d6d80['cookServer' + 'Rsp'](_0x4c4f27, _0x5d7ddd), _0x4ddda5['next'] = 0x11;
                                            break;
                                        case 0xd:
                                            _0x4ddda5['prev'] = 0xd, _0x4ddda5['t0'] = _0x4ddda5['catch'](0x5), _0x5d7ddd = {
                                                'code': 0x2766,
                                                'msg': '请求出错，网络不稳定',
                                                'result': void 0x0,
                                                'path': _0x4c4f27['replace'](_0x355891['host'], '')
                                            }, console['log'](('请求出错，网络不稳定' + '：')['concat'](_0x4c4f27, '，')['concat'](_0x4ddda5['t0']));
                                        case 0x11:
                                            return _0x4ddda5['abrupt']('return', _0x5d7ddd);
                                        case 0x12:
                                        case 'end':
                                            return _0x4ddda5['stop']();
                                        }
                                }, _0x3541cf, this, [[
                                        0x5,
                                        0xd
                                    ]]);
                            }));
                        }
                    },
                    {
                        'key': 'signParmas',
                        'value': function (_0x93b0a8) {
                            var _0xbc7b16 = Object['assign']({}, _0x93b0a8);
                            _0xbc7b16['apiKey'] = _0x77369c['config']['server']['apiKey'], _0xbc7b16['timestamp'] = Date['now']() / 0x3e8, _0x77369c['data']['token'] && (_0xbc7b16['token'] = _0x77369c['data']['token']);
                            var _0x1d0240 = _0x3791c1['keys'](_0xbc7b16);
                            _0x1d0240['sort']();
                            var _0x1d37c8 = '';
                            return _0x1d0240['forEach'](function (_0x40cda9) {
                                var _0x2f2441 = void 0x0 === _0xbc7b16[_0x40cda9] ? '' : _0xbc7b16[_0x40cda9];
                                _0x1d37c8 += encodeURIComponent(_0x2f2441);
                            }), _0xbc7b16['apiSign'] = _0x5efb07['hex_hmac_m' + 'd5'](_0x77369c['config']['server']['apiSecret'], _0x1d37c8), _0xbc7b16;
                        }
                    },
                    {
                        'key': 'reqGetAvat' + 'ar',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x319392() {
                                var _0x2abd03;
                                return regeneratorRuntime['wrap'](function (_0x3379d3) {
                                    for (;;)
                                        switch (_0x3379d3['prev'] = _0x3379d3['next']) {
                                        case 0x0:
                                            if (_0x77369c['config']['needSearch' + 'Player']) {
                                                _0x3379d3['next'] = 0x2;
                                                break;
                                            }
                                            return _0x3379d3['abrupt']('return');
                                        case 0x2:
                                            return _0x3379d3['next'] = 0x4, this['request'](_0x3e974f['getAvatar']);
                                        case 0x4:
                                            (_0x2abd03 = _0x3379d3['sent'])['code'] || (_0x77369c['data']['playerName' + 'sPool'] = _0x2abd03['result']['names'] || [], _0x77369c['data']['playerHead' + 'sPool'] = _0x2abd03['result']['avatar']);
                                        case 0x6:
                                        case 'end':
                                            return _0x3379d3['stop']();
                                        }
                                }, _0x319392, this);
                            }));
                        }
                    },
                    {
                        'key': 'reqWorldRa' + 'nk',
                        'value': function () {
                            var _0x553178 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x1;
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x27405a() {
                                var _0x2d23a7, _0xcf3846, _0x218282, _0x5f5ca1;
                                return regeneratorRuntime['wrap'](function (_0x4f3427) {
                                    for (;;)
                                        switch (_0x4f3427['prev'] = _0x4f3427['next']) {
                                        case 0x0:
                                            return _0x4f3427['next'] = 0x2, this['request'](_0x3e974f['worldRank'], { 'page': _0x553178 });
                                        case 0x2:
                                            (_0x2d23a7 = _0x4f3427['sent'])['code'] || (_0xcf3846 = _0x2d23a7['result']['list']['map'](function (_0x498ff9) {
                                                return {
                                                    'avatarUrl': _0x498ff9['avatar'],
                                                    'nickName': _0x498ff9['user_nickn' + 'ame'],
                                                    'score': _0x498ff9['score'],
                                                    'rank': _0x498ff9['rank']
                                                };
                                            }), _0x77369c['data']['worldRanks'] = _0xcf3846, _0x218282 = _0x2d23a7['result']['userInfo'], _0x5f5ca1 = {
                                                'avatarUrl': _0x218282['avatar'],
                                                'nickName': _0x218282['user_nickn' + 'ame'],
                                                'score': _0x218282['score'],
                                                'rank': _0x218282['rank']
                                            }, _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['WorldRankD' + 'ata'], {
                                                'list': _0xcf3846,
                                                'myRank': _0x5f5ca1
                                            }));
                                        case 0x4:
                                        case 'end':
                                            return _0x4f3427['stop']();
                                        }
                                }, _0x27405a, this);
                            }));
                        }
                    },
                    {
                        'key': 'reqUpdateS' + 'core',
                        'value': function (_0x38ddf0) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x38d9d2() {
                                return regeneratorRuntime['wrap'](function (_0x9a22a8) {
                                    for (;;)
                                        switch (_0x9a22a8['prev'] = _0x9a22a8['next']) {
                                        case 0x0:
                                            if (_0x77369c['data']['userInfo'] && !(_0x38ddf0 <= _0x77369c['data']['userInfo']['max_score'])) {
                                                _0x9a22a8['next'] = 0x2;
                                                break;
                                            }
                                            return _0x9a22a8['abrupt']('return');
                                        case 0x2:
                                            return _0x9a22a8['next'] = 0x4, this['request'](_0x3e974f['pass'], {
                                                'score': _0x38ddf0,
                                                'use_time': _0x77369c['data']['useTime']
                                            });
                                        case 0x4:
                                            _0x9a22a8['sent']['code'] || (_0x77369c['data']['userInfo']['max_score'] = _0x38ddf0);
                                        case 0x6:
                                        case 'end':
                                            return _0x9a22a8['stop']();
                                        }
                                }, _0x38d9d2, this);
                            }));
                        }
                    },
                    {
                        'key': 'getInitCon' + 'fig',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x5e4a88() {
                                var _0xa02ef;
                                return regeneratorRuntime['wrap'](function (_0x42c51d) {
                                    for (;;)
                                        switch (_0x42c51d['prev'] = _0x42c51d['next']) {
                                        case 0x0:
                                            return _0x42c51d['next'] = 0x2, this['request'](_0x3e974f['getInitCon' + 'fig']);
                                        case 0x2:
                                            if ((_0xa02ef = _0x42c51d['sent'])['code']) {
                                                _0x42c51d['next'] = 0x7;
                                                break;
                                            }
                                            return _0x42c51d['abrupt']('return', _0xa02ef['result']);
                                        case 0x7:
                                            return _0x42c51d['abrupt']('return');
                                        case 0x8:
                                        case 'end':
                                            return _0x42c51d['stop']();
                                        }
                                }, _0x5e4a88, this);
                            }));
                        }
                    }
                ]), _0x14a01c;
            }())();
        !function (_0x6d773) {
            _0x6d773['BANNER_LOA' + 'DED'] = 'BANNER_LOA' + 'DED';
        }(_0x312c52 || (_0x312c52 = {})), function (_0x53a90f) {
            _0x53a90f[_0x53a90f['Unknown'] = 0x0] = 'Unknown', _0x53a90f[_0x53a90f['Reborn'] = 0x1] = 'Reborn', _0x53a90f[_0x53a90f['Skin'] = 0x2] = 'Skin';
        }(_0x1afaae || (_0x1afaae = {}));
        var _0x1679fd, _0xce637d = new (function (_0x52aefb) {
                function _0x4c92a2() {
                    var _0x2a9d8a;
                    return _0x1295b3(this, _0x4c92a2), (_0x2a9d8a = _0x5971e6(this, _0x35d7e0(_0x4c92a2)['apply'](this, arguments)))['AD_MAX'] = 0x3, _0x2a9d8a['_bannerPoo' + 'l'] = [], _0x2a9d8a['_bannerQue' + 'ue'] = [], _0x2a9d8a['_bannerInd' + 'ex'] = 0x0, _0x2a9d8a['_curShowin' + 'gBanner'] = void 0x0, _0x2a9d8a['_latestLoa' + 'dAdTime'] = 0x0, _0x2a9d8a['_loadAdInt' + 'erval'] = 0x7d0, _0x2a9d8a['_curShowin' + 'gBannerId'] = 0x0, _0x2a9d8a['_curShowin' + 'gBlockId'] = 0x0, _0x2a9d8a['_curShowin' + 'gBoxId'] = 0x0, _0x2a9d8a['_normalBan' + 'nerHegiht'] = 0x0, _0x2a9d8a['_bannerSho' + 'wIndex'] = 0x0, _0x2a9d8a;
                }
                return _0x3a441e(_0x4c92a2, _0x4d0c7a), _0x413e7f(_0x4c92a2, [
                    {
                        'key': 'deploy',
                        'value': function () {
                            Laya['Browser']['onQQMiniGa' + 'me'] && (this['AD_MAX'] = 0x1), this['_normalBan' + 'nerHegiht'] = 0x4d / 0x238 * Laya['Browser']['clientHeig' + 'ht'], _0x3d6d80['isSupportB' + 'annerAd'] && (this['try2LoadBa' + 'nnerAd'](), Laya['timer']['loop'](0x3e8 / 0x3, this, this['try2LoadBa' + 'nnerAd'])), this['createVide' + 'oAd']();
                        }
                    },
                    {
                        'key': 'createVide' + 'oAd',
                        'value': function () {
                            _0x3d6d80['isSupportV' + 'ideoAd'] && _0x3d6d80['createVide' + 'oAd']();
                        }
                    },
                    {
                        'key': 'showVideo',
                        'value': function (_0x1b2929) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x2fe395() {
                                return regeneratorRuntime['wrap'](function (_0x1c0846) {
                                    for (;;)
                                        switch (_0x1c0846['prev'] = _0x1c0846['next']) {
                                        case 0x0:
                                            if (_0x3d6d80['isSupportV' + 'ideoAd']) {
                                                _0x1c0846['next'] = 0x5;
                                                break;
                                            }
                                            return _0x3d6d80['toastMsg']('操作失败：不支持视频' + '广告！'), _0x1c0846['abrupt']('return', -0x3);
                                        case 0x5:
                                            if (!_0x77369c['data']['isWatching' + 'VidoeAd']) {
                                                _0x1c0846['next'] = 0x8;
                                                break;
                                            }
                                            return _0x3d6d80['toastMsg']('操作失败，已有视频在' + '播放！'), _0x1c0846['abrupt']('return', -0x2);
                                        case 0x8:
                                            return _0x1c0846['abrupt']('return', new Promise(function (_0x4ba8ff) {
                                                _0x4ab376['request'](_0x3e974f['viewVideo'], {
                                                    'ad_type': _0x1b2929,
                                                    'type': 0x0
                                                }), _0x77369c['data']['isWatching' + 'VidoeAd'] = !0x0, _0x3d6d80['showVideoA' + 'd'](function (_0x333b51) {
                                                    _0x3d6d80['playBgm'](!0x0), _0x77369c['data']['isWatching' + 'VidoeAd'] = !0x1, _0x333b51 > 0x0 ? _0x4ab376['request'](_0x3e974f['viewVideo'], {
                                                        'ad_type': _0x1b2929,
                                                        'type': 0x1
                                                    }) : 0x0 === _0x333b51 ? _0x3d6d80['toastMsg']('未观看完视频') : -0x1 === _0x333b51 && _0x3d6d80['toastMsg']('暂时没有视频，请稍后' + '再试.'), _0x4ba8ff(_0x333b51);
                                                });
                                            }));
                                        case 0x9:
                                        case 'end':
                                            return _0x1c0846['stop']();
                                        }
                                }, _0x2fe395, this);
                            }));
                        }
                    },
                    {
                        'key': 'try2LoadBa' + 'nnerAd',
                        'value': function () {
                            var _0x4cf543, _0x1bb2f8, _0x9f46fc = this;
                            if (_0x3d6d80['isSupportB' + 'annerAd']) {
                                if (this['_bannerPoo' + 'l']['length'] + this['_bannerQue' + 'ue']['length'] > this['AD_MAX'])
                                    this['_loadAdInt' + 'erval'] = Math['max']((null === (_0x4cf543 = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x4cf543 ? void 0x0 : _0x4cf543['banner_int' + 'erval']) || 0x3e8, 0x1388);
                                else {
                                    if (!(Date['now']() - this['_latestLoa' + 'dAdTime'] < this['_loadAdInt' + 'erval'])) {
                                        var _0x566375 = {
                                            'id': this['_bannerInd' + 'ex']++,
                                            'banner': void 0x0
                                        };
                                        this['_latestLoa' + 'dAdTime'] = Date['now'](), this['_bannerQue' + 'ue']['push'](_0x566375), null === (_0x1bb2f8 = _0x3d6d80['createBann' + 'erAd']()) || void 0x0 === _0x1bb2f8 || _0x1bb2f8['then'](function (_0x46861b) {
                                            _0x3791c1['remove'](_0x9f46fc['_bannerQue' + 'ue'], _0x566375), _0x46861b && (_0x566375['banner'] = _0x46861b, _0x9f46fc['_bannerPoo' + 'l']['push'](_0x566375), _0x9f46fc['emit'](_0x312c52['BANNER_LOA' + 'DED']));
                                        }, function () {
                                            _0x3791c1['remove'](_0x9f46fc['_bannerQue' + 'ue'], _0x566375);
                                        });
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'showBanner',
                        'value': function () {
                            var _0x3135aa, _0x24ee33;
                            return 0x1 === (null === (_0x24ee33 = null === (_0x3135aa = _0x77369c['data']) || void 0x0 === _0x3135aa ? void 0x0 : _0x3135aa['versionCon' + 'fig']) || void 0x0 === _0x24ee33 ? void 0x0 : _0x24ee33['delay']) && Laya['timer']['loop'](0x5dc, this, this['loopSHowBa' + 'nner']), this['loopSHowBa' + 'nner']();
                        }
                    },
                    {
                        'key': 'loopSHowBa' + 'nner',
                        'value': function () {
                            var _0x2c27eb = this['_bannerPoo' + 'l'][this['_bannerSho' + 'wIndex']];
                            return console['log']('showbanner' + 'Loop', _0x2c27eb), _0x2c27eb ? (this['_curShowin' + 'gBanner'] && this['_curShowin' + 'gBanner']['banner']['hide'](), _0x2c27eb['banner']['show'](), this['_curShowin' + 'gBanner'] = _0x2c27eb, this['_curShowin' + 'gBannerId'] = _0x17edad['randomBetw' + 'een'](0x1, 0x989680) >> 0x0, this['_bannerSho' + 'wIndex'] = ++this['_bannerSho' + 'wIndex'] % 0x3, this['_curShowin' + 'gBannerId']) : (this['_bannerSho' + 'wIndex'] = ++this['_bannerSho' + 'wIndex'] % 0x3, (_0x2c27eb = this['_bannerPoo' + 'l'][this['_bannerSho' + 'wIndex']]) ? (this['_curShowin' + 'gBanner'] && this['_curShowin' + 'gBanner']['banner']['hide'](), _0x2c27eb['banner']['show'](), this['_curShowin' + 'gBanner'] = _0x2c27eb, this['_curShowin' + 'gBannerId'] = _0x17edad['randomBetw' + 'een'](0x1, 0x989680) >> 0x0, this['_curShowin' + 'gBannerId']) : 0x0);
                        }
                    },
                    {
                        'key': 'hideBanner',
                        'value': function (_0x31eedd, _0x5a804e) {
                            Laya['timer']['clear'](this, this['loopSHowBa' + 'nner']);
                            for (var _0x53551d = 0x0; _0x53551d < 0x3; _0x53551d++)
                                this['_bannerPoo' + 'l'][_0x53551d] && this['_bannerPoo' + 'l'][_0x53551d]['banner']['hide']();
                            this['_bannerPoo' + 'l']['shift'](), this['try2LoadBa' + 'nnerAd']();
                        }
                    },
                    {
                        'key': 'showBlock',
                        'value': function (_0xf6da5c, _0x46a4dd, _0x5d78aa, _0xe06def) {
                            var _0xbe4801 = Laya['Browser']['clientHeig' + 'ht'] / Laya['stage']['displayHei' + 'ght'];
                            return _0xf6da5c *= _0xbe4801, _0x46a4dd *= _0xbe4801, this['hideBlock'](0x0, !0x0), this['_curShowin' + 'gBlock'] = _0x3d6d80['createBloc' + 'kAd'](_0xf6da5c, _0x46a4dd, _0x5d78aa, _0xe06def), this['_curShowin' + 'gBlock'] ? (this['_curShowin' + 'gBlock']['show'](), this['_curShowin' + 'gBlockId'] = _0x17edad['randomBetw' + 'een'](0x1, 0x186a0) >> 0x0, this['_curShowin' + 'gBlockId']) : 0x0;
                        }
                    },
                    {
                        'key': 'changeBloc' + 'kPos',
                        'value': function (_0x5056ac, _0x5051f4, _0x1f4bc4) {
                            if (_0x5056ac && this['_curShowin' + 'gBlockId'] && _0x5056ac === this['_curShowin' + 'gBlockId']) {
                                var _0xf2f2aa = Laya['Browser']['clientHeig' + 'ht'] / Laya['stage']['displayHei' + 'ght'];
                                _0x5051f4 *= _0xf2f2aa, _0x1f4bc4 *= _0xf2f2aa, this['_curShowin' + 'gBlock']['style']['left'] = _0x5051f4, this['_curShowin' + 'gBlock']['style']['top'] = _0x1f4bc4;
                            }
                        }
                    },
                    {
                        'key': 'hideBlock',
                        'value': function (_0x4155ee, _0x482056) {
                            var _0x40e5de, _0x5f2d98;
                            (_0x482056 || _0x4155ee && this['_curShowin' + 'gBlockId'] === _0x4155ee) && (null === (_0x40e5de = this['_curShowin' + 'gBlock']) || void 0x0 === _0x40e5de || _0x40e5de['hide'](), null === (_0x5f2d98 = this['_curShowin' + 'gBlock']) || void 0x0 === _0x5f2d98 || _0x5f2d98['destroy'](), this['_curShowin' + 'gBlockId'] = void 0x0, this['_curShowin' + 'gBlock'] = void 0x0);
                        }
                    },
                    {
                        'key': 'showBox',
                        'value': function (_0x78643b) {
                            var _0x1693f0 = this;
                            return this['hideBox'](0x0, !0x0), this['_curShowin' + 'gBox'] = _0x3d6d80['createBoxA' + 'd'](function () {
                                _0x1693f0['hideBox'](0x0, !0x0), _0x78643b && _0x78643b();
                            }), this['_curShowin' + 'gBox'] ? (this['_curShowin' + 'gBox']['load']()['then'](function () {
                                var _0x2657f8;
                                return null === (_0x2657f8 = _0x1693f0['_curShowin' + 'gBox']) || void 0x0 === _0x2657f8 ? void 0x0 : _0x2657f8['show']();
                            }), this['_curShowin' + 'gBoxId'] = _0x17edad['randomBetw' + 'een'](0x1, 0x186a0) >> 0x0, this['_curShowin' + 'gBoxId']) : 0x0;
                        }
                    },
                    {
                        'key': 'hideBox',
                        'value': function (_0x1b98ab, _0x2be28c) {
                            var _0x50f021;
                            (_0x2be28c || _0x1b98ab && this['_curShowin' + 'gBoxId'] === _0x1b98ab) && (this['_curShowin' + 'gBoxId'] = void 0x0, null === (_0x50f021 = this['_curShowin' + 'gBox']) || void 0x0 === _0x50f021 || _0x50f021['destroy'](), this['_curShowin' + 'gBox'] = void 0x0);
                        }
                    },
                    {
                        'key': 'normalBann' + 'erHegiht',
                        'set': function (_0x27453f) {
                            this['_normalBan' + 'nerHegiht'] = _0x27453f;
                        },
                        'get': function () {
                            return this['_normalBan' + 'nerHegiht'];
                        }
                    },
                    {
                        'key': 'curShowing' + 'Banner',
                        'get': function () {
                            return this['_curShowin' + 'gBanner'];
                        }
                    },
                    {
                        'key': 'hasBanner',
                        'get': function () {
                            return this['_bannerPoo' + 'l']['length'] > 0x0;
                        }
                    }
                ]), _0x4c92a2;
            }())(), _0x5c9dde = function (_0x575aa4) {
                function _0x322645() {
                    var _0x3e8fc7;
                    return _0x1295b3(this, _0x322645), (_0x3e8fc7 = _0x5971e6(this, _0x35d7e0(_0x322645)['apply'](this, arguments)))['_tencentAp' + 'i'] = wx, _0x3e8fc7['_adIndex'] = 0x0, _0x3e8fc7['_tercentAp' + 'pName'] = '微信', _0x3e8fc7['_preReqAut' + 'horTime'] = 0x0, _0x3e8fc7['_curBgmMus' + 'icUrl'] = '', _0x3e8fc7;
                }
                return _0x3a441e(_0x322645, _0x5da44a), _0x413e7f(_0x322645, [
                    {
                        'key': 'sendJsonDa' + 'taToDataCo' + 'ntext',
                        'value': function (_0x3fe9a9) {
                            Laya['MiniAdpter']['sendJsonDa' + 'taToDataCo' + 'ntext'](_0x3fe9a9);
                        }
                    },
                    {
                        'key': 'sendAtlasT' + 'oOpenDataC' + 'ontext',
                        'value': function (_0x589c3d) {
                            Laya['MiniAdpter']['sendAtlasT' + 'oOpenDataC' + 'ontext'](_0x589c3d);
                        }
                    },
                    {
                        'key': 'submitScor' + 'e',
                        'value': function (_0x57ebfe) {
                            this['postMsg2Op' + 'enData']({
                                'event': _0x4ff468['SubmitScor' + 'e'],
                                'score': _0x57ebfe
                            });
                        }
                    },
                    {
                        'key': 'toastMsg',
                        'value': function (_0x14a458) {
                            var _0x1a0cb5 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x5dc;
                            this['_tencentAp' + 'i']['showToast']({
                                'title': _0x14a458,
                                'icon': 'none',
                                'complete': void 0x0,
                                'fail': void 0x0,
                                'success': void 0x0,
                                'image': void 0x0,
                                'mask': void 0x0,
                                'duration': _0x1a0cb5
                            });
                        }
                    },
                    {
                        'key': 'postMsg2Op' + 'enData',
                        'value': function (_0x3f50fd) {
                            this['_tencentAp' + 'i']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x3f50fd);
                        }
                    },
                    {
                        'key': 'login',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x74b60b() {
                                var _0xf5c75a = this;
                                return regeneratorRuntime['wrap'](function (_0x28f5ea) {
                                    for (;;)
                                        switch (_0x28f5ea['prev'] = _0x28f5ea['next']) {
                                        case 0x0:
                                            return _0x28f5ea['abrupt']('return', new Promise(function (_0x51c827, _0x1634bd) {
                                                _0xf5c75a['_tencentAp' + 'i']['login']({
                                                    'success': function (_0x207c9a) {
                                                        _0x207c9a['code'] ? (console['log']('【'['concat'](_0xf5c75a['_tercentAp' + 'pName'], '】登录成功')), _0x51c827(_0x207c9a)) : _0x1634bd(''['concat'](_0xf5c75a['_tercentAp' + 'pName'], '登录失败，code不' + '存在！'));
                                                    },
                                                    'fail': function () {
                                                        return _0x1634bd(''['concat'](_0xf5c75a['_tercentAp' + 'pName'], '登录失败，接口调用失' + '败！'));
                                                    }
                                                });
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x28f5ea['stop']();
                                        }
                                }, _0x74b60b, this);
                            }));
                        }
                    },
                    {
                        'key': 'authorize',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x4dc5d3() {
                                var _0x1ba39f = this;
                                return regeneratorRuntime['wrap'](function (_0x39d148) {
                                    for (;;)
                                        switch (_0x39d148['prev'] = _0x39d148['next']) {
                                        case 0x0:
                                            return _0x39d148['abrupt']('return', new Promise(function (_0x1552e3) {
                                                var _0xea36d3 = _0x1ba39f['_systemInf' + 'o'], _0xf8fd45 = _0xea36d3['screenWidt' + 'h'], _0x3105cc = _0xea36d3['screenHeig' + 'ht'], _0xf5ad63 = {
                                                        'left': 0x0,
                                                        'top': 0x0,
                                                        'width': _0xf8fd45,
                                                        'height': _0x3105cc,
                                                        'lineHeight': _0x3105cc,
                                                        'backgroundColor': '#00000000',
                                                        'color': '#ffffffff',
                                                        'textAlign': 'center',
                                                        'fontSize': 0x10,
                                                        'borderRadius': 0x4
                                                    }, _0x2b4249 = _0x1ba39f['_tencentAp' + 'i']['createUser' + 'InfoButton']({
                                                        'type': 'text',
                                                        'text': '',
                                                        'style': _0xf5ad63,
                                                        'withCredentials': !0x0
                                                    });
                                                console['log']('【'['concat'](_0x1ba39f['_tercentAp' + 'pName'], '】请求授权登录。')), _0x2b4249['show'](), _0x2b4249['onTap'](function (_0x47db3e) {
                                                    var _0x2adda0 = Date['now']();
                                                    _0x2adda0 - _0x1ba39f['_preReqAut' + 'horTime'] < 0x3e8 || (_0x1ba39f['_preReqAut' + 'horTime'] = _0x2adda0, _0x47db3e['userInfo'] ? (console['log']('【'['concat'](_0x1ba39f['_tercentAp' + 'pName'], '】用户授权登录。')), _0x1552e3(_0x47db3e)) : (console['log']('【'['concat'](_0x1ba39f['_tercentAp' + 'pName'], '】授权取消。')), _0x1552e3(void 0x0)), _0x2b4249['destroy']());
                                                });
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x39d148['stop']();
                                        }
                                }, _0x4dc5d3, this);
                            }));
                        }
                    },
                    {
                        'key': 'shareFrien' + 'd',
                        'value': function (_0x28417b, _0x4053d5) {
                            this['_onShareFr' + 'iend'] = function (_0x50018f) {
                                return _0x4053d5 && _0x4053d5(_0x50018f);
                            }, this['_shareFrie' + 'ndId'] = _0x28417b['share_id'], this['_shareFrie' + 'ndBeginTim' + 'e'] = Date['now']();
                            var _0x180738 = {
                                'title': _0x28417b['share_titl' + 'e'],
                                'imageUrl': _0x28417b['share_img'],
                                'query': 'share_id='['concat'](_0x28417b['share_id'], '&share_typ' + 'e=')['concat'](_0x28417b['share_type'], '&id=')['concat'](_0x77369c['data']['userInfo']['id'])
                            };
                            this['_tencentAp' + 'i']['shareAppMe' + 'ssage'](_0x180738);
                        }
                    },
                    {
                        'key': 'deploy',
                        'value': function (_0x49281c, _0x1547ce, _0x42a334) {
                            this['_systemInf' + 'o'] = this['_tencentAp' + 'i']['getSystemI' + 'nfoSync'](), this['_launchOpt' + 'ions'] = this['_tencentAp' + 'i']['getLaunchO' + 'ptionsSync'](), this['_onShareAp' + 'pMsg'] = _0x42a334, this['_onGameHid' + 'e'] = _0x49281c, this['_onGameSho' + 'w'] = _0x1547ce, this['addWxEvent' + 's']();
                        }
                    },
                    {
                        'key': 'addWxEvent' + 's',
                        'value': function () {
                            this['_tencentAp' + 'i']['onShow'](this['onGameShow']['bind'](this)), this['_tencentAp' + 'i']['onHide'](this['onGameHide']['bind'](this)), this['_tencentAp' + 'i']['onShareApp' + 'Message'](this['onShareApp' + 'Msg']['bind'](this));
                        }
                    },
                    {
                        'key': 'onGameShow',
                        'value': function () {
                            if (this['_onShareFr' + 'iend']) {
                                var _0x541f41 = Date['now']() - this['_shareFrie' + 'ndBeginTim' + 'e'] > 0x9c4;
                                this['_onShareAp' + 'pMsg'] && _0x541f41 && this['_onShareAp' + 'pMsg'](this['_shareFrie' + 'ndId']), this['_onShareFr' + 'iend'](_0x541f41), this['_shareFrie' + 'ndId'] = void 0x0, this['_shareFrie' + 'ndBeginTim' + 'e'] = void 0x0, this['_onShareFr' + 'iend'] = void 0x0;
                            }
                            this['_onGameSho' + 'w'] && this['_onGameSho' + 'w']();
                        }
                    },
                    {
                        'key': 'onGameHide',
                        'value': function () {
                            this['_onGameHid' + 'e'] && this['_onGameHid' + 'e']();
                        }
                    },
                    {
                        'key': 'onShareApp' + 'Msg',
                        'value': function () {
                            if (_0x77369c['data']['token']) {
                                var _0x383a74 = _0x77369c['data']['getShareCo' + 'ntent'](0x1);
                                return this['_onShareAp' + 'pMsg'] && this['_onShareAp' + 'pMsg'](_0x383a74['share_id']), {
                                    'title': _0x383a74['share_titl' + 'e'],
                                    'imageUrl': _0x383a74['share_img'],
                                    'query': 'share_id='['concat'](_0x383a74['share_id'], '&share_typ' + 'e=')['concat'](_0x383a74['share_type'], '&id=')['concat'](_0x77369c['data']['userInfo']['id']),
                                    'success': function () {
                                    },
                                    'fail': function () {
                                    }
                                };
                            }
                        }
                    },
                    {
                        'key': 'getLaunchO' + 'ptions',
                        'value': function () {
                            var _0x4b3e91, _0x2bf8e9, _0x351aac, _0x419798 = this['_launchOpt' + 'ions'], _0x354419 = {};
                            if (!_0x419798)
                                return _0x354419;
                            _0x419798['scene'] && (_0x354419['scene_id'] = _0x419798['scene']), (null === (_0x4b3e91 = _0x419798['referrerIn' + 'fo']) || void 0x0 === _0x4b3e91 ? void 0x0 : _0x4b3e91['appId']) && (_0x354419['appid'] = _0x419798['referrerIn' + 'fo']['appId']);
                            var _0x1a47f7 = _0x419798['query'];
                            return _0x1a47f7 ? (_0x1a47f7['id'] && (_0x354419['share_user' + '_id'] = parseInt(_0x1a47f7['id']) || 0x0), _0x1a47f7['share_id'] && (_0x354419['share_id'] = parseInt(_0x1a47f7['share_id']) || 0x0), _0x1a47f7['channel'] && (_0x354419['channel'] = _0x1a47f7['channel']), _0x1a47f7['wxgamecid'] && (_0x354419['wxgamecid'] = _0x1a47f7['wxgamecid'])) : (null === (_0x351aac = null === (_0x2bf8e9 = _0x419798['referrerIn' + 'fo']) || void 0x0 === _0x2bf8e9 ? void 0x0 : _0x2bf8e9['extraData']) || void 0x0 === _0x351aac ? void 0x0 : _0x351aac['channel']) && (_0x354419['channel'] = _0x419798['referrerIn' + 'fo']['extraData']['channel']), _0x354419;
                        }
                    },
                    {
                        'key': 'vibrate',
                        'value': function (_0x10f001) {
                            var _0x52d430 = {
                                'complete': function () {
                                },
                                'fail': function () {
                                },
                                'success': function () {
                                }
                            };
                            _0x10f001 ? this['_tencentAp' + 'i']['vibrateSho' + 'rt'](_0x52d430) : this['_tencentAp' + 'i']['vibrateLon' + 'g'](_0x52d430);
                        }
                    },
                    {
                        'key': 'loadSubpac' + 'kage',
                        'value': function (_0x2edc2a, _0x469b73) {
                            var _0x5f09eb = this;
                            return new Promise(function (_0x2838a9, _0x53e2bd) {
                                _0x5f09eb['_tencentAp' + 'i']['loadSubpac' + 'kage']({
                                    'name': _0x2edc2a,
                                    'success': function () {
                                        _0x469b73(0x1), _0x2838a9();
                                    },
                                    'fail': function (_0x50aa48) {
                                        _0x53e2bd(_0x50aa48);
                                    }
                                })['onProgress' + 'Update'](function (_0xec2329) {
                                    var _0x1003c3 = Math['min'](0x1, _0xec2329['totalBytes' + 'Written'] / _0xec2329['totalBytes' + 'ExpectedTo' + 'Write']);
                                    _0x469b73(_0x1003c3);
                                });
                            });
                        }
                    },
                    {
                        'key': 'playMusic',
                        'value': function (_0x27c035) {
                            var _0x17365f;
                            _0x27c035 && _0x27c035 !== this['_curBgmMus' + 'icUrl'] && (null === (_0x17365f = this['_bgmMusicC' + 'ontext']) || void 0x0 === _0x17365f || _0x17365f['destroy'](), this['_bgmMusicC' + 'ontext'] = this['_tencentAp' + 'i']['createInne' + 'rAudioCont' + 'ext'](), this['_bgmMusicC' + 'ontext']['src'] = _0x27c035, this['_bgmMusicC' + 'ontext']['loop'] = !0x0, this['_bgmMusicC' + 'ontext']['play'](), this['_curBgmMus' + 'icUrl'] = _0x27c035);
                        }
                    },
                    {
                        'key': 'stopSound',
                        'value': function (_0x303220) {
                            var _0x5a9ad3;
                            _0x303220 && (_0x303220 === this['_curBgmMus' + 'icUrl'] ? (null === (_0x5a9ad3 = this['_bgmMusicC' + 'ontext']) || void 0x0 === _0x5a9ad3 || _0x5a9ad3['destroy'](), this['_bgmMusicC' + 'ontext'] = void 0x0, this['_curBgmMus' + 'icUrl'] = void 0x0) : _0x3a96b3(_0x35d7e0(_0x322645['prototype']), 'stopSound', this)['call'](this, _0x303220));
                        }
                    },
                    {
                        'key': 'getRightUp' + 'FavouriteB' + 'tnPos',
                        'value': function () {
                            if (_0x5f41c7['compareVer' + 'sion'](this['_systemInf' + 'o']['SDKVersion'], '2.1.0') >= 0x0) {
                                var _0x4596f0 = this['_tencentAp' + 'i']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](), _0x4dd736 = _0x4596f0['width'], _0x490fe8 = _0x4596f0['height'], _0x50365e = _0x4596f0['top'], _0x546180 = _0x4596f0['left'];
                                if (_0x4dd736 || _0x490fe8 || _0x50365e || _0x546180) {
                                    var _0x1ab111 = new Laya['Point'](_0x546180, _0x50365e + 0.6 * _0x490fe8), _0x28bf5d = Laya['stage']['displayWid' + 'th'] / Laya['Browser']['clientWidt' + 'h'], _0xb0d20c = Laya['stage']['displayHei' + 'ght'] / Laya['Browser']['clientHeig' + 'ht'];
                                    return _0x1ab111['x'] *= _0x28bf5d, _0x1ab111['y'] *= _0xb0d20c, _0x1ab111;
                                }
                            } else ;
                        }
                    },
                    {
                        'key': 'createBloc' + 'kAd',
                        'value': function (_0x13b421, _0x16ba90, _0x7ec922, _0x2a3b9e) {
                        }
                    },
                    {
                        'key': 'createBoxA' + 'd',
                        'value': function (_0x5704d6) {
                        }
                    },
                    {
                        'key': 'createBann' + 'erAd',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x4115f5() {
                                var _0x4d391d = this;
                                return regeneratorRuntime['wrap'](function (_0x3d509a) {
                                    for (;;)
                                        switch (_0x3d509a['prev'] = _0x3d509a['next']) {
                                        case 0x0:
                                            if (this['isSupportB' + 'annerAd']) {
                                                _0x3d509a['next'] = 0x2;
                                                break;
                                            }
                                            return _0x3d509a['abrupt']('return');
                                        case 0x2:
                                            return _0x3d509a['abrupt']('return', new Promise(function (_0x2718d9) {
                                                var _0x387190 = _0x4d391d['_tencentAp' + 'i']['createBann' + 'erAd']({
                                                    'adUnitId': _0x77369c['config']['ad']['bannerAdID'][_0x4d391d['_adIndex']++ % _0x77369c['config']['ad']['bannerAdID']['length']],
                                                    'style': {
                                                        'left': 0x0,
                                                        'top': 0.86 * _0x4d391d['_systemInf' + 'o']['screenHeig' + 'ht'],
                                                        'width': _0x4d391d['_systemInf' + 'o']['screenWidt' + 'h']
                                                    }
                                                });
                                                _0x387190['onError'](function () {
                                                    _0x2718d9(void 0x0);
                                                }), _0x387190['onLoad'](function () {
                                                    _0x2718d9(_0x387190);
                                                }), _0x387190['onResize'](function (_0x58f54f) {
                                                    if (_0x58f54f)
                                                        _0x387190['style']['realWidth'] = _0x58f54f['width'], _0x387190['style']['realHeight'] = _0x58f54f['height'], _0xce637d['normalBann' + 'erHegiht'] = _0x58f54f['height'], _0x387190['style']['top'] = _0x4d391d['_systemInf' + 'o']['screenHeig' + 'ht'] - _0x58f54f['height'];
                                                    else {
                                                        var _0x4a4523 = _0x387190['style']['realHeight'] + 0.1;
                                                        _0xce637d['normalBann' + 'erHegiht'] || (_0xce637d['normalBann' + 'erHegiht'] = _0x4a4523), _0x387190['style']['top'] = _0x4d391d['_systemInf' + 'o']['screenHeig' + 'ht'] - _0x4a4523;
                                                    }
                                                });
                                            }));
                                        case 0x3:
                                        case 'end':
                                            return _0x3d509a['stop']();
                                        }
                                }, _0x4115f5, this);
                            }));
                        }
                    },
                    {
                        'key': 'createVide' + 'oAd',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x131e7e() {
                                var _0x48cb0e = this;
                                return regeneratorRuntime['wrap'](function (_0x5f4a1e) {
                                    for (;;)
                                        switch (_0x5f4a1e['prev'] = _0x5f4a1e['next']) {
                                        case 0x0:
                                            return _0x5f4a1e['abrupt']('return', new Promise(function (_0xc00deb) {
                                                var _0x17699d;
                                                null === (_0x17699d = _0x48cb0e['_videoAd']) || void 0x0 === _0x17699d || _0x17699d['destroy'](), _0x48cb0e['_videoAd'] = _0x48cb0e['_tencentAp' + 'i']['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x77369c['config']['ad']['videoAdID'] }), (_0x48cb0e['_videoAd']['onLoad'](function _0x5bb011() {
                                                    _0x48cb0e['_videoAd'] && (_0x48cb0e['_videoAd']['offLoad'](_0x5bb011), _0xc00deb(_0x48cb0e['_videoAd']));
                                                }), _0x48cb0e['_videoAd']['onError'](function () {
                                                    var _0x5b21c7;
                                                    console['log']('视频加载失败'), null === (_0x5b21c7 = _0x48cb0e['_videoAd']) || void 0x0 === _0x5b21c7 || _0x5b21c7['destroy'](), _0x48cb0e['_videoAd'] = void 0x0, _0xc00deb(void 0x0);
                                                }), _0x48cb0e['_videoAd']['onClose'](function (_0x55f47a) {
                                                    _0x48cb0e['_onVideoCl' + 'oseCallbac' + 'k'] && _0x48cb0e['_onVideoCl' + 'oseCallbac' + 'k'](_0x55f47a ? _0x55f47a['isEnded'] ? 0x1 : 0x0 : 0x1), _0x48cb0e['_onVideoCl' + 'oseCallbac' + 'k'] = void 0x0, _0x48cb0e['_videoAd']['load']();
                                                }), _0x48cb0e['_videoAd']['load']());
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x5f4a1e['stop']();
                                        }
                                }, _0x131e7e, this);
                            }));
                        }
                    },
                    {
                        'key': 'showVideoA' + 'd',
                        'value': function (_0x1bd335) {
                            var _0x5b4942;
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x66d033() {
                                return regeneratorRuntime['wrap'](function (_0xaf2b32) {
                                    for (;;)
                                        switch (_0xaf2b32['prev'] = _0xaf2b32['next']) {
                                        case 0x0:
                                            return this['_onVideoCl' + 'oseCallbac' + 'k'] = _0x1bd335, _0xaf2b32['prev'] = 0x1, _0xaf2b32['next'] = 0x4, this['_videoAd']['show']();
                                        case 0x4:
                                            _0xaf2b32['next'] = 0xb;
                                            break;
                                        case 0x6:
                                            _0xaf2b32['prev'] = 0x6, _0xaf2b32['t0'] = _0xaf2b32['catch'](0x1), null === (_0x5b4942 = this['_videoAd']) || void 0x0 === _0x5b4942 || _0x5b4942['load'](), this['_onVideoCl' + 'oseCallbac' + 'k'] = void 0x0, _0x1bd335 && _0x1bd335(-0x1);
                                        case 0xb:
                                        case 'end':
                                            return _0xaf2b32['stop']();
                                        }
                                }, _0x66d033, this, [[
                                        0x1,
                                        0x6
                                    ]]);
                            }));
                        }
                    },
                    {
                        'key': 'gotoApp',
                        'value': function (_0x3173d2) {
                            var _0x1168ae = this, _0x257673 = _0x3173d2['app_id'], _0x568087 = _0x3173d2['app_path'];
                            return _0x3173d2['wx_id'], _0x3173d2['ad_id'], new Promise(function (_0x3083b6) {
                                _0x1168ae['_tencentAp' + 'i']['navigateTo' + 'MiniProgra' + 'm']({
                                    'appId': _0x257673,
                                    'path': _0x568087,
                                    'success': function () {
                                        _0x3083b6(!0x0);
                                    },
                                    'complete': function () {
                                    },
                                    'fail': function () {
                                        _0x3083b6(!0x1);
                                    },
                                    'envVersion': void 0x0,
                                    'extraData': void 0x0
                                });
                            });
                        }
                    },
                    {
                        'key': 'isSupportB' + 'lockAd',
                        'get': function () {
                            return !0x1;
                        }
                    },
                    {
                        'key': 'isSupportB' + 'oxAd',
                        'get': function () {
                            return !0x1;
                        }
                    },
                    {
                        'key': 'isSupportB' + 'annerAd',
                        'get': function () {
                            return _0x5f41c7['compareVer' + 'sion'](this['_systemInf' + 'o']['SDKVersion'], '2.6.0') >= 0x0;
                        }
                    },
                    {
                        'key': 'isSupportV' + 'ideoAd',
                        'get': function () {
                            return _0x5f41c7['compareVer' + 'sion'](this['_systemInf' + 'o']['SDKVersion'], '\x202.0.4') >= 0x0;
                        }
                    },
                    {
                        'key': 'statusBarH' + 'eight',
                        'get': function () {
                            var _0x5ead69 = this['_systemInf' + 'o']['statusBarH' + 'eight'];
                            return (_0x5ead69 = _0x5ead69 > 0x14 ? _0x5ead69 : 0x0) * Laya['stage']['displayHei' + 'ght'] / Laya['Browser']['clientHeig' + 'ht'];
                        }
                    }
                ]), _0x322645;
            }(), _0x1f30c5 = function (_0x3de60c) {
                function _0x26834e() {
                    return _0x1295b3(this, _0x26834e), _0x5971e6(this, _0x35d7e0(_0x26834e)['apply'](this, arguments));
                }
                return _0x3a441e(_0x26834e, _0x4d0c7a), _0x413e7f(_0x26834e, [{
                        'key': 'try2Set',
                        'value': function (_0x24e5f2, _0xe9e838) {
                            var _0x57c878 = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] && arguments[0x2];
                            if (this['isValid']) {
                                var _0x23126c = '_'['concat'](_0x24e5f2);
                                (this[_0x23126c] !== _0xe9e838 || _0x57c878) && (this[_0x23126c] = _0xe9e838, this['emit'](_0x24e5f2, _0xe9e838));
                            }
                        }
                    }]), _0x26834e;
            }(), _0x327b99 = function () {
                function _0x40219c() {
                    _0x1295b3(this, _0x40219c);
                }
                return _0x413e7f(_0x40219c, null, [{
                        'key': 'sleep',
                        'value': function (_0x47f4df) {
                            return new Promise(function (_0x474e92) {
                                Laya['timer']['once'](_0x47f4df, void 0x0, _0x474e92);
                            });
                        }
                    }]), _0x40219c;
            }(), _0x284a91 = new (function () {
                function _0x325fca() {
                    _0x1295b3(this, _0x325fca), this['_isDirty'] = !0x1;
                }
                return _0x413e7f(_0x325fca, [
                    {
                        'key': 'deploy',
                        'value': function () {
                            this['_storageKe' + 'y'] = 'Drift-At-W' + 'ill-Data', this['_data'] = Laya['LocalStora' + 'ge']['getJSON'](this['_storageKe' + 'y']) || {}, this['updateData' + 'Model'](), Laya['timer']['loop'](0x3e8 / 0x3, this, this['tick2Flush']);
                        }
                    },
                    {
                        'key': 'updateData' + 'Model',
                        'value': function () {
                            var _0x458d18 = _0x77369c['data'], _0x53ba52 = this['_data'], _0x4048d1 = _0x53ba52['gold'], _0x44c682 = _0x53ba52['ownStoreIt' + 'emIds'], _0x57e674 = _0x53ba52['storeItemI' + 'dInUse'], _0x32d6c8 = _0x53ba52['isMute'], _0x33c317 = _0x53ba52['canVibrate'];
                            _0x458d18['gold'] = _0x4048d1 || 0x0, _0x458d18['storeItemI' + 'dInUse'] = _0x57e674 || NaN, _0x458d18['ownStoreIt' + 'emIds'] = (_0x44c682 || '')['split'](',')['filter'](Boolean), _0x3d6d80['isMute'] = _0x32d6c8 || !0x1, _0x3d6d80['canVibrate'] = null == _0x33c317 || _0x33c317;
                        }
                    },
                    {
                        'key': 'tick2Flush',
                        'value': function () {
                            this['_isDirty'] && (Laya['LocalStora' + 'ge']['setJSON'](this['_storageKe' + 'y'], this['_data']), this['_isDirty'] = !0x1);
                        }
                    },
                    {
                        'key': 'set',
                        'value': function (_0x2ef8d3, _0x4ed7d0) {
                            this['_data'][_0x2ef8d3] !== _0x4ed7d0 && (this['_isDirty'] = !0x0, this['_data'][_0x2ef8d3] = _0x4ed7d0);
                        }
                    },
                    {
                        'key': 'get',
                        'value': function (_0x46a02d) {
                            return this['_data'][_0x46a02d];
                        }
                    }
                ]), _0x325fca;
            }())(), _0x3d6d80 = new (function (_0x8c28f7) {
                function _0x3dd786() {
                    var _0x43e5e2;
                    return _0x1295b3(this, _0x3dd786), (_0x43e5e2 = _0x5971e6(this, _0x35d7e0(_0x3dd786)['apply'](this, arguments)))['_subpackag' + 'eNames'] = [], _0x43e5e2['_subpackag' + 'eProgresse' + 's'] = [], _0x43e5e2['_isMute'] = !0x1, _0x43e5e2['_canVibrat' + 'e'] = !0x0, _0x43e5e2['_doLoadSub' + 'Package'] = function (_0x59488a, _0x36e70c) {
                        return _0x312bd5(_0x42c9ef(_0x43e5e2), void 0x0, void 0x0, regeneratorRuntime['mark'](function _0xf8618e() {
                            var _0x180319, _0xa92990 = this;
                            return regeneratorRuntime['wrap'](function (_0x3696e1) {
                                for (;;)
                                    switch (_0x3696e1['prev'] = _0x3696e1['next']) {
                                    case 0x0:
                                        return _0x3696e1['prev'] = 0x0, _0x180319 = function (_0x4ce1de) {
                                            console['log']('分包'['concat'](_0x59488a, '下载进度：')['concat'](_0x4ce1de)), _0xa92990['_subpackag' + 'eProgresse' + 's'][_0x36e70c] = _0x17edad['calValueBe' + 'tween'](_0x4ce1de, 0x0, 0x1), _0xa92990['onSubPacka' + 'geProgress']();
                                        }, _0x3696e1['next'] = 0x4, this['_platform']['loadSubpac' + 'kage'](_0x59488a, _0x180319);
                                    case 0x4:
                                        _0x3696e1['next'] = 0xb;
                                        break;
                                    case 0x6:
                                        return _0x3696e1['prev'] = 0x6, _0x3696e1['t0'] = _0x3696e1['catch'](0x0), console['log']('分包加载\x20'['concat'](_0x59488a, '\x20失败，正重新加载。' + '失败原因：')['concat'](_0x3696e1['t0'])), _0x3696e1['next'] = 0xb, this['_doLoadSub' + 'Package'](_0x59488a, _0x36e70c);
                                    case 0xb:
                                    case 'end':
                                        return _0x3696e1['stop']();
                                    }
                            }, _0xf8618e, this, [[
                                    0x0,
                                    0x6
                                ]]);
                        }));
                    }, _0x43e5e2['_onGameSho' + 'w'] = function () {
                        _0x77369c['data']['isSleep'] = !0x1, console['log']('app切换到前台'), _0x43e5e2['playBgm'](!0x0);
                    }, _0x43e5e2['_onGameHid' + 'e'] = function () {
                        console['log']('app切换到后台'), _0x77369c['data']['isSleep'] = !0x0;
                    }, _0x43e5e2['_onShareAp' + 'pMsg'] = function (_0x4f5ccf) {
                        _0x4ab376['request'](_0x3e974f['recordShar' + 'e'], { 'share_id': _0x4f5ccf });
                    }, _0x43e5e2;
                }
                return _0x3a441e(_0x3dd786, _0x1f30c5), _0x413e7f(_0x3dd786, [
                    {
                        'key': 'cookServer' + 'Rsp',
                        'value': function (_0x2fd6a3, _0x448020) {
                            return this['_platform'] ? this['_platform']['cookServer' + 'Rsp'](_0x2fd6a3, _0x448020) : _0x448020;
                        }
                    },
                    {
                        'key': 'sendJsonDa' + 'taToDataCo' + 'ntext',
                        'value': function (_0x3efbe4) {
                            var _0x1fd8d3;
                            null === (_0x1fd8d3 = this['_platform']) || void 0x0 === _0x1fd8d3 || _0x1fd8d3['sendJsonDa' + 'taToDataCo' + 'ntext'](_0x3efbe4);
                        }
                    },
                    {
                        'key': 'sendAtlasT' + 'oOpenDataC' + 'ontext',
                        'value': function (_0x15ebc0) {
                            var _0x49309b;
                            null === (_0x49309b = this['_platform']) || void 0x0 === _0x49309b || _0x49309b['sendAtlasT' + 'oOpenDataC' + 'ontext'](_0x15ebc0);
                        }
                    },
                    {
                        'key': 'submitScor' + 'e',
                        'value': function (_0x443daa) {
                            var _0x4e8fa3;
                            !_0x77369c['data']['userInfo'] || _0x443daa <= _0x77369c['data']['userInfo']['max_score'] || null === (_0x4e8fa3 = this['_platform']) || void 0x0 === _0x4e8fa3 || _0x4e8fa3['submitScor' + 'e'](_0x443daa);
                        }
                    },
                    {
                        'key': 'shareFrien' + 'd',
                        'value': function (_0x4f3a05, _0x870a8c) {
                            if (this['_platform']) {
                                if (!_0x77369c['data']['userInfo'])
                                    return this['toastMsg']('分享失败，尚未登录！'), void (_0x870a8c && _0x870a8c(!0x1));
                                var _0x1c96d1 = _0x77369c['data']['shareInfoD' + 'ic'][_0x4f3a05] || [], _0x5c560c = _0x3791c1['randomOne'](_0x1c96d1) || {
                                        'share_title': '',
                                        'share_img': '',
                                        'share_id': 0x1,
                                        'share_type': _0x4f3a05
                                    };
                                this['_platform']['shareFrien' + 'd'](_0x5c560c, _0x870a8c);
                            }
                        }
                    },
                    {
                        'key': 'postMsg2Op' + 'enData',
                        'value': function (_0x1549bd, _0x51e578) {
                            var _0xeab841;
                            null === (_0xeab841 = this['_platform']) || void 0x0 === _0xeab841 || _0xeab841['postMsg2Op' + 'enData'](Object['assign']({ 'event': _0x1549bd }, _0x51e578 || {}));
                        }
                    },
                    {
                        'key': 'vibrate',
                        'value': function (_0x11c005) {
                            this['_platform'] && this['canVibrate'] && this['_platform']['vibrate'](_0x11c005);
                        }
                    },
                    {
                        'key': 'playBgm',
                        'value': function () {
                            if (!window['WebAudioEn' + 'gin'])
                                return;
                            arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0] && this['stopSound'](_0x77369c['config']['sound']['bgm']), this['playMusic'](_0x77369c['config']['sound']['bgm']);
                        }
                    },
                    {
                        'key': 'playMusic',
                        'value': function (_0x41f25c) {
                            if (_0x77369c['hasDeploye' + 'd'] && !this['isMute'] && _0x41f25c) {
                                var _0x2cddc5 = _0x77369c['config']['sound']['bgm'];
                                if (this['_curPlayin' + 'gBgmName'] !== _0x2cddc5) {
                                    this['_curPlayin' + 'gBgmName'] = _0x2cddc5;
                                    var _0x10f7f8 = this['cookSoundU' + 'rlByName'](_0x41f25c);
                                    Laya['SoundManag' + 'er']['playMusic'](_0x10f7f8);
                                }
                            }
                        }
                    },
                    {
                        'key': 'playSoundE' + 'ffect',
                        'value': function (_0x38c5ef) {
                            var _0x52cd9a = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1;
                            if (_0x77369c['hasDeploye' + 'd'] && !this['isMute'] && _0x38c5ef) {
                                var _0xef9528 = this['cookSoundU' + 'rlByName'](_0x38c5ef);
                                Laya['SoundManag' + 'er']['playSound'](_0xef9528, _0x52cd9a == 0x0);
                            }
                        }
                    },
                    {
                        'key': 'stopSound',
                        'value': function (_0x5d7357) {
                            if (_0x77369c['hasDeploye' + 'd'] && _0x5d7357) {
                                var _0x1809a7 = _0x5d7357 === _0x77369c['config']['sound']['bgm'];
                                _0x1809a7 && (this['_curPlayin' + 'gBgmName'] = void 0x0);
                                var _0x273c67 = this['cookSoundU' + 'rlByName'](_0x5d7357);
                                _0x1809a7 ? Laya['SoundManag' + 'er']['stopMusic']() : Laya['SoundManag' + 'er']['stopSound'](_0x273c67);
                            }
                        }
                    },
                    {
                        'key': 'stopAllSou' + 'nd',
                        'value': function () {
                            _0x77369c['hasDeploye' + 'd'] && (this['stopSound'](_0x77369c['config']['sound']['bgm']), Laya['SoundManag' + 'er']['stopAll']());
                        }
                    },
                    {
                        'key': 'cookSoundU' + 'rlByName',
                        'value': function (_0x29984c) {
                            return ''['concat'](_0x77369c['config']['sound']['basePath'], '/')['concat'](_0x29984c, '.mp3');
                        }
                    },
                    {
                        'key': 'toastMsg',
                        'value': function (_0x3d5735) {
                            var _0x348c4c = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x5dc;
                            this['_platform'] ? this['_platform']['toastMsg'](_0x3d5735, _0x348c4c) : console['log']('【飘字消息】'['concat'](_0x3d5735));
                        }
                    },
                    {
                        'key': 'gotoApp',
                        'value': function (_0x3349ac) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x2c6c7f() {
                                var _0x8456fb;
                                return regeneratorRuntime['wrap'](function (_0x24fb0b) {
                                    for (;;)
                                        switch (_0x24fb0b['prev'] = _0x24fb0b['next']) {
                                        case 0x0:
                                            if (!this['_platform'] || !_0x3349ac) {
                                                _0x24fb0b['next'] = 0xb;
                                                break;
                                            }
                                            return _0x24fb0b['next'] = 0x3, this['_platform']['gotoApp'](_0x3349ac);
                                        case 0x3:
                                            if (!_0x24fb0b['sent']) {
                                                _0x24fb0b['next'] = 0x7;
                                                break;
                                            }
                                            _0x24fb0b['t0'] = 0x1, _0x24fb0b['next'] = 0x8;
                                            break;
                                        case 0x7:
                                            _0x24fb0b['t0'] = 0x0;
                                        case 0x8:
                                            return _0x8456fb = _0x24fb0b['t0'], _0x4ab376['request'](_0x3e974f['clickWxApp'], {
                                                'wx_id': _0x3349ac['wx_id'],
                                                'ad_id': _0x3349ac['ad_id'],
                                                'type': _0x8456fb
                                            }), _0x24fb0b['abrupt']('return', _0x8456fb);
                                        case 0xb:
                                            return _0x24fb0b['abrupt']('return', -0x1);
                                        case 0xc:
                                        case 'end':
                                            return _0x24fb0b['stop']();
                                        }
                                }, _0x2c6c7f, this);
                            }));
                        }
                    },
                    {
                        'key': 'getRightUp' + 'FavouriteB' + 'tnPos',
                        'value': function () {
                            var _0xb282a8, _0x40aaaf = (null === (_0xb282a8 = this['_platform']) || void 0x0 === _0xb282a8 ? void 0x0 : _0xb282a8['getRightUp' + 'FavouriteB' + 'tnPos']()) || new Laya['Point']();
                            return _0x40aaaf['x'] || _0x40aaaf['y'] || (_0x40aaaf['x'] = Laya['stage']['displayWid' + 'th'] - 0x64, _0x40aaaf['y'] = 0x64), _0x40aaaf;
                        }
                    },
                    {
                        'key': 'loadSubpac' + 'kages',
                        'value': function (_0x5ba08e, _0x5a4b15) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x23e335() {
                                var _0x1eb278;
                                return regeneratorRuntime['wrap'](function (_0x3d6cea) {
                                    for (;;)
                                        switch (_0x3d6cea['prev'] = _0x3d6cea['next']) {
                                        case 0x0:
                                            if (this['_platform'] && _0x5ba08e && _0x5ba08e['length']) {
                                                _0x3d6cea['next'] = 0x2;
                                                break;
                                            }
                                            return _0x3d6cea['abrupt']('return', console['log']('不用加载分包'));
                                        case 0x2:
                                            if (this['_onSubpack' + 'ageProgres' + 's'] = _0x5a4b15, this['_subpackag' + 'eNames'] = _0x5ba08e, this['_subpackag' + 'eProgresse' + 's'] = _0x5ba08e['map'](function () {
                                                    return 0x0;
                                                }), !_0x77369c['config']['load']['isSubpackL' + 'oadPromise' + 'All']) {
                                                _0x3d6cea['next'] = 0xa;
                                                break;
                                            }
                                            return _0x3d6cea['next'] = 0x8, Promise['all'](this['_subpackag' + 'eNames']['map'](this['_doLoadSub' + 'Package']));
                                        case 0x8:
                                            _0x3d6cea['next'] = 0x11;
                                            break;
                                        case 0xa:
                                            _0x1eb278 = 0x0;
                                        case 0xb:
                                            if (!(_0x1eb278 < this['_subpackag' + 'eNames']['length'])) {
                                                _0x3d6cea['next'] = 0x11;
                                                break;
                                            }
                                            return _0x3d6cea['next'] = 0xe, this['_doLoadSub' + 'Package'](this['_subpackag' + 'eNames'][_0x1eb278], _0x1eb278);
                                        case 0xe:
                                            _0x1eb278++, _0x3d6cea['next'] = 0xb;
                                            break;
                                        case 0x11:
                                        case 'end':
                                            return _0x3d6cea['stop']();
                                        }
                                }, _0x23e335, this);
                            }));
                        }
                    },
                    {
                        'key': 'onSubPacka' + 'geProgress',
                        'value': function () {
                            if (this['_onSubpack' + 'ageProgres' + 's']) {
                                var _0x5c084a = this['_subpackag' + 'eProgresse' + 's']['reduce'](function (_0x3d13d3, _0x4f828d) {
                                    return _0x3d13d3 + _0x4f828d;
                                }) / this['_subpackag' + 'eProgresse' + 's']['length'];
                                this['_onSubpack' + 'ageProgres' + 's'](_0x5c084a);
                            }
                        }
                    },
                    {
                        'key': 'login',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x39c7d8() {
                                var _0xe732de, _0x2e6983, _0xca46d4, _0x1019ea, _0x50c616, _0x538210, _0x4fe5d1, _0x421e9f = this;
                                return regeneratorRuntime['wrap'](function (_0x255e1d) {
                                    for (;;)
                                        switch (_0x255e1d['prev'] = _0x255e1d['next']) {
                                        case 0x0:
                                            if (this['_platform']) {
                                                _0x255e1d['next'] = 0x2;
                                                break;
                                            }
                                            return _0x255e1d['abrupt']('return');
                                        case 0x2:
                                            _0xe732de = 0x3, _0x2e6983 = 0x0, _0xca46d4 = '', _0x50c616 = function () {
                                                return _0x312bd5(_0x421e9f, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x16da63() {
                                                    var _0x4571e4;
                                                    return regeneratorRuntime['wrap'](function (_0x2dce53) {
                                                        for (;;)
                                                            switch (_0x2dce53['prev'] = _0x2dce53['next']) {
                                                            case 0x0:
                                                                return _0x2dce53['prev'] = 0x0, _0x2dce53['next'] = 0x3, this['_platform']['login']();
                                                            case 0x3:
                                                                _0x4571e4 = _0x2dce53['sent'], _0xca46d4 = _0x4571e4['code'], console['log'](('【登录】app登录成' + '功：')['concat'](_0xca46d4)), _0x2dce53['next'] = 0xc;
                                                                break;
                                                            case 0x8:
                                                                return _0x2dce53['prev'] = 0x8, _0x2dce53['t0'] = _0x2dce53['catch'](0x0), _0xca46d4 = '', _0x2dce53['abrupt']('return', _0x2dce53['t0']);
                                                            case 0xc:
                                                                return _0x2dce53['abrupt']('return', '');
                                                            case 0xd:
                                                            case 'end':
                                                                return _0x2dce53['stop']();
                                                            }
                                                    }, _0x16da63, this, [[
                                                            0x0,
                                                            0x8
                                                        ]]);
                                                }));
                                            }, _0x538210 = function () {
                                                return _0x312bd5(_0x421e9f, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x14ed48() {
                                                    var _0x1b1ce5;
                                                    return regeneratorRuntime['wrap'](function (_0x17156b) {
                                                        for (;;)
                                                            switch (_0x17156b['prev'] = _0x17156b['next']) {
                                                            case 0x0:
                                                                return (_0x1b1ce5 = this['_platform']['getLaunchO' + 'ptions']())['code'] = _0xca46d4, _0x1b1ce5['late_versi' + 'on'] = _0x77369c['data']['CUR_VERSIO' + 'N'], _0x17156b['next'] = 0x5, _0x4ab376['request'](_0x3e974f['login'], _0x1b1ce5);
                                                            case 0x5:
                                                                _0x1019ea = _0x17156b['sent'];
                                                            case 0x6:
                                                            case 'end':
                                                                return _0x17156b['stop']();
                                                            }
                                                    }, _0x14ed48, this);
                                                }));
                                            };
                                        case 0x7:
                                            return _0x255e1d['next'] = 0xa, _0x50c616();
                                        case 0xa:
                                            if (_0x4fe5d1 = _0x255e1d['sent'], _0xca46d4) {
                                                _0x255e1d['next'] = 0xf;
                                                break;
                                            }
                                            console['log'](('【登录】app登录失' + '败：')['concat'](_0x4fe5d1, '，')['concat'](_0xca46d4)), _0x255e1d['next'] = 0x14;
                                            break;
                                        case 0xf:
                                            return _0x255e1d['next'] = 0x11, _0x538210();
                                        case 0x11:
                                            if (_0x1019ea['code']) {
                                                _0x255e1d['next'] = 0x13;
                                                break;
                                            }
                                            return _0x255e1d['abrupt']('return', _0x1019ea['result']);
                                        case 0x13:
                                            console['log'](('【登录】后台失败，错' + '误代码：')['concat'](_0x1019ea['code'], '，原因：')['concat'](_0x1019ea['msg']));
                                        case 0x14:
                                            if (!(++_0x2e6983 < _0xe732de)) {
                                                _0x255e1d['next'] = 0x1a;
                                                break;
                                            }
                                            return _0x255e1d['next'] = 0x18, _0x327b99['sleep'](0x3e8);
                                        case 0x18:
                                            _0x255e1d['next'] = 0x1c;
                                            break;
                                        case 0x1a:
                                            return console['log'](('登录失败，已经超过最' + '大重试次数（')['concat'](_0xe732de, '次）。')), _0x255e1d['abrupt']('return');
                                        case 0x1c:
                                            _0x255e1d['next'] = 0x7;
                                            break;
                                        case 0x1e:
                                        case 'end':
                                            return _0x255e1d['stop']();
                                        }
                                }, _0x39c7d8, this);
                            }));
                        }
                    },
                    {
                        'key': 'authorize',
                        'value': function () {
                            var _0x23a5df, _0x531133;
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0xa8e40() {
                                var _0x554e20, _0x254f8c, _0x3bddc0;
                                return regeneratorRuntime['wrap'](function (_0x4e881a) {
                                    for (;;)
                                        switch (_0x4e881a['prev'] = _0x4e881a['next']) {
                                        case 0x0:
                                            if (!(null === (_0x23a5df = _0x77369c['data']['userInfo']) || void 0x0 === _0x23a5df ? void 0x0 : _0x23a5df['avatar'])) {
                                                _0x4e881a['next'] = 0x2;
                                                break;
                                            }
                                            return _0x4e881a['abrupt']('return', !0x0);
                                        case 0x2:
                                            return _0x4e881a['next'] = 0x4, null === (_0x531133 = this['_platform']) || void 0x0 === _0x531133 ? void 0x0 : _0x531133['authorize']();
                                        case 0x4:
                                            if (_0x554e20 = _0x4e881a['sent']) {
                                                _0x4e881a['next'] = 0x8;
                                                break;
                                            }
                                            return _0x77369c['data']['hasRejectA' + 'uthor'] = !0x0, _0x4e881a['abrupt']('return', !0x1);
                                        case 0x8:
                                            return _0x254f8c = {
                                                'encrypted_data': _0x554e20['encryptedD' + 'ata'],
                                                'iv': _0x554e20['iv']
                                            }, _0x4e881a['next'] = 0xb, _0x4ab376['request'](_0x3e974f['authorizeL' + 'ogin'], _0x254f8c);
                                        case 0xb:
                                            if ((_0x3bddc0 = _0x4e881a['sent'])['code']) {
                                                _0x4e881a['next'] = 0x11;
                                                break;
                                            }
                                            return _0x77369c['data']['userInfo'] = _0x3bddc0['result']['userInfo'], _0x4e881a['abrupt']('return', !0x0);
                                        case 0x11:
                                            return _0x4e881a['abrupt']('return', !0x1);
                                        case 0x12:
                                        case 'end':
                                            return _0x4e881a['stop']();
                                        }
                                }, _0xa8e40, this);
                            }));
                        }
                    },
                    {
                        'key': 'deploy',
                        'value': function () {
                            Laya['Browser']['onMiniGame'] && (this['_platform'] = new _0x5c9dde()), this['_platform'] && this['_platform']['deploy'](this['_onGameHid' + 'e'], this['_onGameSho' + 'w'], this['_onShareAp' + 'pMsg']);
                        }
                    },
                    {
                        'key': 'showVideoA' + 'd',
                        'value': function (_0x409f7b) {
                            this['isSupportV' + 'ideoAd'] && (_0x388c8d['isWorldCan' + 'Click'] = !0x1, platform['getInstanc' + 'e']()['showRewrad'](() => {
                                _0x409f7b && _0x409f7b(!![]);
                            })), Laya['timer']['once'](0x3e8, this, () => {
                                _0x388c8d['isWorldCan' + 'Click'] = !0x0;
                            });
                        }
                    },
                    {
                        'key': 'createVide' + 'oAd',
                        'value': function () {
                            this['isSupportV' + 'ideoAd'] && this['_platform']['createVide' + 'oAd']();
                        }
                    },
                    {
                        'key': 'createBann' + 'erAd',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x57b596() {
                                return regeneratorRuntime['wrap'](function (_0x29ff12) {
                                    for (;;)
                                        switch (_0x29ff12['prev'] = _0x29ff12['next']) {
                                        case 0x0:
                                            if (this['isSupportB' + 'annerAd']) {
                                                _0x29ff12['next'] = 0x2;
                                                break;
                                            }
                                            return _0x29ff12['abrupt']('return');
                                        case 0x2:
                                            return _0x29ff12['next'] = 0x4, this['_platform']['createBann' + 'erAd']();
                                        case 0x4:
                                            return _0x29ff12['abrupt']('return', _0x29ff12['sent']);
                                        case 0x5:
                                        case 'end':
                                            return _0x29ff12['stop']();
                                        }
                                }, _0x57b596, this);
                            }));
                        }
                    },
                    {
                        'key': 'createBloc' + 'kAd',
                        'value': function (_0x17742a, _0x194673, _0x2b9bc3, _0x5f29b1) {
                            if (this['isSupportB' + 'lockAd'])
                                return this['_platform']['createBloc' + 'kAd'](_0x17742a, _0x194673, _0x2b9bc3, _0x5f29b1);
                        }
                    },
                    {
                        'key': 'createBoxA' + 'd',
                        'value': function (_0x3e0acb) {
                            var _0x52c46c;
                            if (this['isSupportB' + 'oxAd'])
                                return null === (_0x52c46c = this['_platform']) || void 0x0 === _0x52c46c ? void 0x0 : _0x52c46c['createBoxA' + 'd'](_0x3e0acb);
                        }
                    },
                    {
                        'key': 'getStatusB' + 'arHeight',
                        'value': function () {
                            var _0x552f31;
                            return (null === (_0x552f31 = this['_platform']) || void 0x0 === _0x552f31 ? void 0x0 : _0x552f31['statusBarH' + 'eight']) || 0x0;
                        }
                    },
                    {
                        'key': 'checkScene' + 'Blacklist',
                        'value': function () {
                            var _0x5ea401, _0x5c5c9c;
                            if (this['_platform']) {
                                var _0x128e26 = null === (_0x5c5c9c = null === (_0x5ea401 = _0x77369c['data']) || void 0x0 === _0x5ea401 ? void 0x0 : _0x5ea401['versionCon' + 'fig']) || void 0x0 === _0x5c5c9c ? void 0x0 : _0x5c5c9c['screen_sce' + 'nes'];
                                if (_0x128e26) {
                                    var _0x3cb787 = this['_platform']['getLaunchO' + 'ptions']();
                                    console['log']('checkScene' + 'Blacklist\x20' + 'param:', _0x3cb787), -0x1 != _0x128e26['indexOf'](_0x3cb787['scene_id']) && (_0x77369c['data']['isSceneBla' + 'cklist'] = !0x0);
                                }
                            }
                        }
                    },
                    {
                        'key': 'canVibrate',
                        'get': function () {
                            return this['_canVibrat' + 'e'];
                        },
                        'set': function (_0x29607a) {
                            this['try2Set']('canVibrate', _0x29607a), _0x284a91['set']('canVibrate', _0x29607a);
                        }
                    },
                    {
                        'key': 'isMute',
                        'get': function () {
                            return this['_isMute'];
                        },
                        'set': function (_0x1d3f6b) {
                            var _0x1ffd9e = _0x1d3f6b !== this['isMute'];
                            this['try2Set']('isMute', _0x1d3f6b), _0x284a91['set']('isMute', _0x1d3f6b);
                        }
                    },
                    {
                        'key': 'isIosWXMin' + 'iGame',
                        'get': function () {
                            return Laya['Browser']['onMiniGame'] && Laya['Browser']['onIOS'];
                        }
                    },
                    {
                        'key': 'isQQWXMini' + 'Game',
                        'get': function () {
                            return Laya['Browser']['onMiniGame'] || Laya['Browser']['onQQMiniGa' + 'me'];
                        }
                    },
                    {
                        'key': 'isSupportV' + 'ideoAd',
                        'get': function () {
                            var _0x42c3e5;
                            return !!_0x77369c['config']['ad']['videoAdID'] && (null === (_0x42c3e5 = this['_platform']) || void 0x0 === _0x42c3e5 ? void 0x0 : _0x42c3e5['isSupportV' + 'ideoAd']);
                        }
                    },
                    {
                        'key': 'isSupportB' + 'annerAd',
                        'get': function () {
                            var _0x340bba;
                            return !!_0x77369c['config']['ad']['bannerAdID'] && (null === (_0x340bba = this['_platform']) || void 0x0 === _0x340bba ? void 0x0 : _0x340bba['isSupportB' + 'annerAd']);
                        }
                    },
                    {
                        'key': 'isSupportB' + 'lockAd',
                        'get': function () {
                            var _0x4c533a;
                            return !!_0x77369c['config']['ad']['blockAdID'] && (null === (_0x4c533a = this['_platform']) || void 0x0 === _0x4c533a ? void 0x0 : _0x4c533a['isSupportB' + 'annerAd']);
                        }
                    },
                    {
                        'key': 'isSupportB' + 'oxAd',
                        'get': function () {
                            var _0x434343;
                            return !!_0x77369c['config']['ad']['boxAdID'] && (null === (_0x434343 = this['_platform']) || void 0x0 === _0x434343 ? void 0x0 : _0x434343['isSupportB' + 'oxAd']);
                        }
                    }
                ]), _0x3dd786;
            }())(), _0x366fd2 = function (_0x6c7e82) {
                function _0x45492f() {
                    var _0x1adfd7;
                    return _0x1295b3(this, _0x45492f), (_0x1adfd7 = _0x5971e6(this, _0x35d7e0(_0x45492f)['apply'](this, arguments)))['_scaleX'] = 0x1, _0x1adfd7['_scaleY'] = 0x1, _0x1adfd7['_isPushing' + 'Down'] = !0x1, _0x1adfd7['mouseDownS' + 'cale'] = 1.03, _0x1adfd7['notZoom'] = !0x1, _0x1adfd7;
                }
                return _0x3a441e(_0x45492f, Laya['Script']), _0x413e7f(_0x45492f, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            var _0x5994bc = this['owner'];
                            _0x5994bc = this['owner'], this['_scaleX'] = _0x5994bc['scaleX'], this['_scaleY'] = _0x5994bc['scaleY'], this['_spOwner'] = _0x5994bc;
                        }
                    },
                    {
                        'key': 'onMouseDow' + 'n',
                        'value': function () {
                            this['isPushingD' + 'own'] = !0x0;
                        }
                    },
                    {
                        'key': 'onMouseUp',
                        'value': function () {
                            if (this['_isPushing' + 'Down']) {
                                this['isPushingD' + 'own'] = !0x1;
                                var _0x3f25f5 = this['specifiedC' + 'lickSound'] || _0x77369c['config']['sound']['click'];
                                _0x3d6d80['playSoundE' + 'ffect'](_0x3f25f5);
                            }
                        }
                    },
                    {
                        'key': 'onStageMou' + 'seUp',
                        'value': function () {
                            this['isPushingD' + 'own'] = !0x1;
                        }
                    },
                    {
                        'key': 'isPushingD' + 'own',
                        'get': function () {
                            return this['_isPushing' + 'Down'];
                        },
                        'set': function (_0x4c2c23) {
                            if (this['_isPushing' + 'Down'] !== _0x4c2c23 && (this['_isPushing' + 'Down'] = _0x4c2c23, !this['notZoom'])) {
                                var _0x57134a = this['zoomTarget'] || this['_spOwner'];
                                _0x4c2c23 ? Laya['Tween']['to'](_0x57134a, {
                                    'scaleX': this['_scaleX'] * this['mouseDownS' + 'cale'],
                                    'scaleY': this['_scaleY'] * this['mouseDownS' + 'cale']
                                }, 0x32) : Laya['Tween']['to'](_0x57134a, {
                                    'scaleX': this['_scaleX'],
                                    'scaleY': this['_scaleY']
                                }, 0x32);
                            }
                        }
                    }
                ]), _0x45492f;
            }(), _0x540fbe = function (_0x3527cf) {
                function _0x296d47() {
                    return _0x1295b3(this, _0x296d47), _0x5971e6(this, _0x35d7e0(_0x296d47)['apply'](this, arguments));
                }
                return _0x3a441e(_0x296d47, Laya['View']), _0x413e7f(_0x296d47, [
                    {
                        'key': 'deploy',
                        'value': function (_0x4b9d4d, _0x379c05) {
                            for (var _0x58516a in (this['_model'] = _0x4b9d4d, this['_controlle' + 'r'] = _0x379c05, this)) {
                                var _0x21ba3e = this[_0x58516a];
                                _0x21ba3e instanceof Laya['Node'] && 0x0 === _0x58516a['indexOf']('_btn') && (_0x21ba3e['getCompone' + 'nt'](_0x366fd2) || _0x21ba3e['addCompone' + 'nt'](_0x366fd2), _0x424f9d['addClickLi' + 'stener'](_0x21ba3e, this['onBtnClick'], this));
                            }
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x2c7426) {
                        }
                    },
                    {
                        'key': 'onDeploy',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'onDestroy',
                        'value': function () {
                            this['_model'] && (this['_model']['offAllCall' + 'er'](this), this['_model'] = void 0x0, this['_controlle' + 'r'] = void 0x0);
                        }
                    }
                ]), _0x296d47;
            }(), _0x31fd82 = function (_0x2877ab) {
                function _0x5d11b7() {
                    var _0x5b84a7;
                    return _0x1295b3(this, _0x5d11b7), (_0x5b84a7 = _0x5971e6(this, _0x35d7e0(_0x5d11b7)['apply'](this, arguments)))['_modalOrig' + 'Alpha'] = 0x1, _0x5b84a7['_isShowing'] = !0x1, _0x5b84a7['_viewScale' + 'XOrig'] = 0x1, _0x5b84a7['_viewScale' + 'YOrig'] = 0x1, _0x5b84a7['_isClickMo' + 'dalClose'] = !0x0, _0x5b84a7['_needPopup' + 'Effect'] = !0x0, _0x5b84a7;
                }
                return _0x3a441e(_0x5d11b7, _0x540fbe), _0x413e7f(_0x5d11b7, [
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'onModalCli' + 'ck',
                        'value': function () {
                            this['_isClickMo' + 'dalClose'] && this['onCloseCli' + 'ck']();
                        }
                    },
                    {
                        'key': 'deployPopu' + 'p',
                        'value': function (_0x19cf0e, _0x47e3da, _0x14156a) {
                            this['_needPopup' + 'Effect'] = _0x14156a, this['deploy'](_0x19cf0e, _0x47e3da);
                        }
                    },
                    {
                        'key': 'onDeploy',
                        'value': function () {
                            _0x83e07c['throwNot2B' + 'eNull'](this['_spView'], '_spView'), this['_viewScale' + 'XOrig'] = this['_spView']['scaleX'], this['_viewScale' + 'YOrig'] = this['_spView']['scaleY'], this['_spModal'] && (this['_modalOrig' + 'Alpha'] = this['_spModal']['alpha'], _0x424f9d['addClickLi' + 'stener'](this['_spModal'], this['onModalCli' + 'ck'], this)), this['_btnClose'] && _0x424f9d['addClickLi' + 'stener'](this['_btnClose'], this['onCloseCli' + 'ck'], this), _0x3a96b3(_0x35d7e0(_0x5d11b7['prototype']), 'onDeploy', this)['call'](this);
                        }
                    },
                    {
                        'key': 'clearTween',
                        'value': function () {
                            Laya['Tween']['clearAll'](this['_spModal']), Laya['Tween']['clearAll'](this['_spView']), Laya['timer']['clear'](this, this['checkHideC' + 'omplete']), this['_showTl'] && (this['_showTl']['destroy'](), this['_showTl'] = void 0x0);
                        }
                    },
                    {
                        'key': 'show',
                        'value': function () {
                            if (!this['_isShowing']) {
                                if (_0x388c8d['isWorldCan' + 'Click'] = !0x1, this['_isShowing'] = !0x0, this['clearTween'](), this['_needPopup' + 'Effect']) {
                                    var _0x2c2690 = Laya, _0x1e98af = _0x2c2690['Tween'], _0x316f10 = _0x2c2690['TimeLine'];
                                    this['_spModal'] && (this['_spModal']['alpha'] = 0x0, _0x1e98af['to'](this['_spModal'], { 'alpha': this['_modalOrig' + 'Alpha'] }, 0xc8)), this['_spView']['alpha'] = 0x1, this['_spView']['scaleX'] = this['_viewScale' + 'XOrig'], this['_spView']['scaleY'] = this['_viewScale' + 'YOrig'], _0x388c8d['layerPopup']['addChild'](this);
                                    var _0x38f575 = new _0x316f10();
                                    _0x38f575['to'](this['_spView'], {
                                        'scaleX': 1.1 * this['_viewScale' + 'XOrig'],
                                        'scaleY': 1.1 * this['_viewScale' + 'YOrig']
                                    }, 0x6e)['to'](this['_spView'], {
                                        'scaleX': this['_viewScale' + 'XOrig'],
                                        'scaleY': this['_viewScale' + 'YOrig']
                                    }, 0x6e), _0x38f575['play'](0x0), _0x38f575['on'](Laya['Event']['COMPLETE'], this, this['onShowComp' + 'lete']), this['_showTl'] = _0x38f575;
                                } else
                                    _0x388c8d['layerPopup']['addChild'](this), this['onShowComp' + 'lete']();
                            }
                        }
                    },
                    {
                        'key': 'checkHideC' + 'omplete',
                        'value': function () {
                            this['parent'] && this['onHideComp' + 'lete']();
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                            this['_spModal'] && (this['_spModal']['alpha'] = this['_modalOrig' + 'Alpha']), _0x388c8d['isWorldCan' + 'Click'] = !0x0;
                        }
                    },
                    {
                        'key': 'hide',
                        'value': function () {
                            if (this['_isShowing']) {
                                if (_0x388c8d['isWorldCan' + 'Click'] = !0x1, this['_isShowing'] = !0x1, this['clearTween'](), this['_needPopup' + 'Effect']) {
                                    var _0x18dbb8 = Laya['Tween'];
                                    this['_spModal'] && _0x18dbb8['to'](this['_spModal'], { 'alpha': 0x0 }, 0x96), _0x18dbb8['to'](this['_spView'], {
                                        'scaleX': 0.01,
                                        'scaleY': 0.01,
                                        'alpha': 0x0
                                    }, 0xc8, null, new Laya['Handler'](this, this['onHideComp' + 'lete'])), Laya['timer']['once'](0x3e8, this, this['checkHideC' + 'omplete']);
                                } else
                                    this['onHideComp' + 'lete']();
                            }
                        }
                    },
                    {
                        'key': 'onHideComp' + 'lete',
                        'value': function () {
                            this['clearTween'](), this['removeSelf'](), _0x388c8d['isWorldCan' + 'Click'] = !0x0;
                        }
                    },
                    {
                        'key': 'isShowing',
                        'get': function () {
                            return this['_isShowing'];
                        }
                    }
                ]), _0x5d11b7;
            }(), _0x3e794f = function () {
                function _0x4c5b98(_0x4df085, _0x48d371, _0x4e067e) {
                    var _0x2b55c5 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 0x0, _0x28c83f = arguments['length'] > 0x4 ? arguments[0x4] : void 0x0;
                    _0x1295b3(this, _0x4c5b98), this['_model'] = _0x4df085, this['_controlle' + 'r'] = _0x48d371, this['_sceneUrl'] = _0x4e067e, this['_viewZorde' + 'r'] = _0x2b55c5, this['_specified' + 'Parent'] = _0x28c83f, this['_isShowing'] = !0x1, this['_popupView' + 'sDic'] = {};
                }
                return _0x413e7f(_0x4c5b98, [
                    {
                        'key': 'bindPopUpC' + 'hildView',
                        'value': function (_0x54e909, _0x13b1bc) {
                            var _0x515a18 = this, _0x1c3515 = !(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2], _0x12587c = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 0x0, _0xbe756 = !(arguments['length'] > 0x4 && void 0x0 !== arguments[0x4]) || arguments[0x4];
                            if (!(_0x54e909 in this['_popupView' + 'sDic'])) {
                                var _0xe91ba4 = {
                                        'url': _0x54e909,
                                        'state': 'invalid',
                                        'modelEvent': _0x13b1bc['toString'](),
                                        'needPopupEffect': _0x1c3515,
                                        'zorder': _0x12587c,
                                        'propEqualValue': _0xbe756
                                    }, _0x226003 = function () {
                                        _0x515a18['onModelPro' + 'pertyChang' + 'ed'](_0xe91ba4);
                                    };
                                _0xe91ba4['eventHandl' + 'er'] = _0x226003, this['_model']['on'](_0x13b1bc, _0x226003, null), this['_popupView' + 'sDic'][_0x54e909] = _0xe91ba4;
                            }
                        }
                    },
                    {
                        'key': 'onModelPro' + 'pertyChang' + 'ed',
                        'value': function (_0x3765ce) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x472636() {
                                var _0x5ab17a;
                                return regeneratorRuntime['wrap'](function (_0x5e59fe) {
                                    for (;;)
                                        switch (_0x5e59fe['prev'] = _0x5e59fe['next']) {
                                        case 0x0:
                                            if (!(this['_model'][_0x3765ce['modelEvent']] === _0x3765ce['propEqualV' + 'alue'])) {
                                                _0x5e59fe['next'] = 0xe;
                                                break;
                                            }
                                            if ('valid' !== _0x3765ce['state'] || !_0x3765ce['view']) {
                                                _0x5e59fe['next'] = 0x6;
                                                break;
                                            }
                                            this['try2ShowPo' + 'pup'](_0x3765ce), _0x5e59fe['next'] = 0xc;
                                            break;
                                        case 0x6:
                                            if ('invalid' !== _0x3765ce['state']) {
                                                _0x5e59fe['next'] = 0xc;
                                                break;
                                            }
                                            return _0x3765ce['state'] = 'isLoading', _0x5e59fe['next'] = 0xa, _0x424f9d['asyncLoadS' + 'cene'](_0x3765ce['url']);
                                        case 0xa:
                                            (_0x5ab17a = _0x5e59fe['sent']) instanceof _0x31fd82 ? (_0x5ab17a['deployPopu' + 'p'](this['_model'], this['_controlle' + 'r'], _0x3765ce['needPopupE' + 'ffect']), _0x5ab17a['onDeploy'](), _0x3765ce['view'] = _0x5ab17a, _0x5ab17a['zOrder'] = _0x3765ce['zorder'], _0x3765ce['state'] = 'valid', this['try2ShowPo' + 'pup'](_0x3765ce)) : _0x83e07c['throwNorma' + 'lError'](('弹窗界面必须继承Ab' + 'stractPopu' + 'pView：')['concat'](_0x3765ce['url']));
                                        case 0xc:
                                            _0x5e59fe['next'] = 0xf;
                                            break;
                                        case 0xe:
                                            'valid' === _0x3765ce['state'] && _0x3765ce['view'] && _0x3765ce['view']['hide']();
                                        case 0xf:
                                        case 'end':
                                            return _0x5e59fe['stop']();
                                        }
                                }, _0x472636, this);
                            }));
                        }
                    },
                    {
                        'key': 'try2ShowPo' + 'pup',
                        'value': function (_0x4a0dcd) {
                            'valid' === _0x4a0dcd['state'] && _0x4a0dcd['view'] && this['_model'][_0x4a0dcd['modelEvent']] && _0x4a0dcd['view']['show']();
                        }
                    },
                    {
                        'key': 'deploy',
                        'value': function () {
                            this['bindPopupV' + 'iews']();
                        }
                    },
                    {
                        'key': 'show',
                        'value': function (_0x175d9b) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x5e35eb() {
                                return regeneratorRuntime['wrap'](function (_0x20b4b3) {
                                    for (;;)
                                        switch (_0x20b4b3['prev'] = _0x20b4b3['next']) {
                                        case 0x0:
                                            if (this['isShowing']) {
                                                _0x20b4b3['next'] = 0xb;
                                                break;
                                            }
                                            if (this['_isShowing'] = !0x0, this['_viewAssse' + 't']) {
                                                _0x20b4b3['next'] = 0x8;
                                                break;
                                            }
                                            return _0x20b4b3['next'] = 0x5, _0x424f9d['asyncLoadS' + 'cene'](this['_sceneUrl'], _0x175d9b);
                                        case 0x5:
                                            this['_viewAssse' + 't'] = _0x20b4b3['sent'], this['_viewAssse' + 't']['zOrder'] = this['_viewZorde' + 'r'], this['_viewAssse' + 't'] instanceof _0x540fbe && (this['_viewAssse' + 't']['deploy'](this['_model'], this['_controlle' + 'r']), this['_viewAssse' + 't']['onDeploy']());
                                        case 0x8:
                                            (this['_specified' + 'Parent'] || _0x388c8d['layerScene'])['addChild'](this['_viewAssse' + 't']), this['onShowComp' + 'lete']();
                                        case 0xb:
                                        case 'end':
                                            return _0x20b4b3['stop']();
                                        }
                                }, _0x5e35eb, this);
                            }));
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'hide',
                        'value': function () {
                            this['isShowing'] && this['_viewAssse' + 't'] && (this['_viewAssse' + 't']['removeSelf'](), this['_isShowing'] = !0x1);
                        }
                    },
                    {
                        'key': 'destroy',
                        'value': function () {
                            var _0x533d04, _0x2bdfb0;
                            if (this['_model']) {
                                for (var _0x1076c4 in (this['hide'](), null === (_0x533d04 = this['_viewAssse' + 't']) || void 0x0 === _0x533d04 || _0x533d04['destroy'](!0x0), this['_popupView' + 'sDic']))
                                    null === (_0x2bdfb0 = this['_popupView' + 'sDic'][_0x1076c4]['view']) || void 0x0 === _0x2bdfb0 || _0x2bdfb0['destroy'](!0x0);
                                this['_model']['offAllCall' + 'er'](this), this['_model'] = void 0x0, this['_popupView' + 'sDic'] = void 0x0;
                            }
                        }
                    },
                    {
                        'key': 'isShowing',
                        'get': function () {
                            return this['_isShowing'];
                        }
                    }
                ]), _0x4c5b98;
            }(), _0x457e08 = function (_0x3983d6) {
                function _0x57f554(_0x1cd7fe, _0x413d3d) {
                    return _0x1295b3(this, _0x57f554), _0x5971e6(this, _0x35d7e0(_0x57f554)['call'](this, _0x1cd7fe, _0x413d3d, 'sdk_youlin' + 'g/base/vie' + 'w/YLSplash' + '.json', 0x0, _0x388c8d['layerSplas' + 'h']));
                }
                return _0x3a441e(_0x57f554, _0x3e794f), _0x413e7f(_0x57f554, [{
                        'key': 'bindPopupV' + 'iews',
                        'value': function () {
                        }
                    }]), _0x57f554;
            }(), _0x4f2a2a = function () {
                function _0x4449a1() {
                    _0x1295b3(this, _0x4449a1);
                }
                return _0x413e7f(_0x4449a1, [{
                        'key': 'destroy',
                        'value': function () {
                            this['_model']['offAllCall' + 'er'](this);
                        }
                    }]), _0x4449a1;
            }(), _0x5c32ef = function (_0x9cf5f1) {
                function _0x2ead05(_0x5a39d1) {
                    var _0x132383;
                    return _0x1295b3(this, _0x2ead05), (_0x132383 = _0x5971e6(this, _0x35d7e0(_0x2ead05)['call'](this)))['_model'] = _0x5a39d1, _0x132383;
                }
                return _0x3a441e(_0x2ead05, _0x4f2a2a), _0x413e7f(_0x2ead05, [
                    {
                        'key': 'start',
                        'value': function () {
                            Laya['timer']['frameLoop'](0x1, this, this['onNProgres' + 'sInc']);
                        }
                    },
                    {
                        'key': 'onNProgres' + 'sInc',
                        'value': function () {
                            var _0x153049 = 0x0, _0x1094ad = this['_model']['percent'];
                            _0x153049 = 0x10 * (_0x153049 = _0x1094ad >= 0x0 && _0x1094ad < 0.2 ? 0.1 : _0x1094ad >= 0.2 && _0x1094ad < 0.5 ? 0.04 : _0x1094ad >= 0.5 && _0x1094ad < 0.8 ? 0.02 : _0x1094ad >= 0.8 && _0x1094ad < 0.99 ? 0.005 : 0x0) / 0xc8, this['_model']['percent'] += _0x153049;
                        }
                    },
                    {
                        'key': 'done',
                        'value': function (_0x4e904f) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x5a0c2e() {
                                var _0x48eaf5 = this;
                                return regeneratorRuntime['wrap'](function (_0x4afffc) {
                                    for (;;)
                                        switch (_0x4afffc['prev'] = _0x4afffc['next']) {
                                        case 0x0:
                                            return _0x4afffc['abrupt']('return', new Promise(function (_0x36d429) {
                                                var _0x12aae0 = { 'value': 0x0 };
                                                Laya['timer']['clear'](_0x48eaf5, _0x48eaf5['onNProgres' + 'sInc']), _0x12aae0['value'] = _0x48eaf5['_model']['percent'], Laya['Tween']['to'](_0x12aae0, {
                                                    'value': 0x1,
                                                    'update': new Laya['Handler'](void 0x0, function () {
                                                        return _0x48eaf5['_model']['percent'] = _0x12aae0['value'];
                                                    })
                                                }, _0x4e904f, Laya['Ease']['linearNone'], Laya['Handler']['create'](void 0x0, function () {
                                                    return _0x312bd5(_0x48eaf5, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x4e8f62() {
                                                        return regeneratorRuntime['wrap'](function (_0x29db37) {
                                                            for (;;)
                                                                switch (_0x29db37['prev'] = _0x29db37['next']) {
                                                                case 0x0:
                                                                    return _0x29db37['next'] = 0x2, _0x327b99['sleep'](0x32);
                                                                case 0x2:
                                                                    _0x36d429();
                                                                case 0x4:
                                                                case 'end':
                                                                    return _0x29db37['stop']();
                                                                }
                                                        }, _0x4e8f62, this);
                                                    }));
                                                }));
                                            }));
                                        case 0x1:
                                        case 'end':
                                            return _0x4afffc['stop']();
                                        }
                                }, _0x5a0c2e, this);
                            }));
                        }
                    }
                ]), _0x2ead05;
            }(), _0xf003b6 = function (_0x5e85f3) {
                function _0x1a086f() {
                    var _0x2b14b4;
                    return _0x1295b3(this, _0x1a086f), (_0x2b14b4 = _0x5971e6(this, _0x35d7e0(_0x1a086f)['apply'](this, arguments)))['_percent'] = 0x0, _0x2b14b4;
                }
                return _0x3a441e(_0x1a086f, _0x1f30c5), _0x413e7f(_0x1a086f, [{
                        'key': 'percent',
                        'get': function () {
                            return this['_percent'];
                        },
                        'set': function (_0x461fc4) {
                            this['try2Set']('percent', _0x461fc4);
                        }
                    }]), _0x1a086f;
            }(), _0x53b5d = function () {
                function _0x341f96() {
                    _0x1295b3(this, _0x341f96);
                }
                return _0x413e7f(_0x341f96, [
                    {
                        'key': 'show',
                        'value': function (_0x26f9b9) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x3d5b0c() {
                                return regeneratorRuntime['wrap'](function (_0x3a338d) {
                                    for (;;)
                                        switch (_0x3a338d['prev'] = _0x3a338d['next']) {
                                        case 0x0:
                                            if (this['isShowing']) {
                                                _0x3a338d['next'] = 0x4;
                                                break;
                                            }
                                            return this['_view'] || (this['initMVC'](), this['_view']['deploy']()), _0x3a338d['next'] = 0x4, this['_view']['show'](_0x26f9b9);
                                        case 0x4:
                                        case 'end':
                                            return _0x3a338d['stop']();
                                        }
                                }, _0x3d5b0c, this);
                            }));
                        }
                    },
                    {
                        'key': 'hide',
                        'value': function () {
                            this['isShowing'] && this['_view']['hide']();
                        }
                    },
                    {
                        'key': 'isShowing',
                        'get': function () {
                            return !!this['_view'] && this['_view']['isShowing'];
                        }
                    }
                ]), _0x341f96;
            }(), _0x486868 = new (function (_0x1590aa) {
                function _0xf44581() {
                    return _0x1295b3(this, _0xf44581), _0x5971e6(this, _0x35d7e0(_0xf44581)['apply'](this, arguments));
                }
                return _0x3a441e(_0xf44581, _0x53b5d), _0x413e7f(_0xf44581, [
                    {
                        'key': 'initMVC',
                        'value': function () {
                            this['_model'] = new _0xf003b6(), this['_controlle' + 'r'] = new _0x5c32ef(this['_model']), this['_view'] = new _0x457e08(this['_model'], this['_controlle' + 'r']);
                        }
                    },
                    {
                        'key': 'done',
                        'value': function (_0x1df25d) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x27fe70() {
                                return regeneratorRuntime['wrap'](function (_0x225d13) {
                                    for (;;)
                                        switch (_0x225d13['prev'] = _0x225d13['next']) {
                                        case 0x0:
                                            if (this['isShowing']) {
                                                _0x225d13['next'] = 0x2;
                                                break;
                                            }
                                            return _0x225d13['abrupt']('return');
                                        case 0x2:
                                            return _0x225d13['next'] = 0x4, this['_controlle' + 'r']['done'](_0x1df25d);
                                        case 0x4:
                                        case 'end':
                                            return _0x225d13['stop']();
                                        }
                                }, _0x27fe70, this);
                            }));
                        }
                    },
                    {
                        'key': 'destroy',
                        'value': function () {
                            this['_model'] && (this['_view']['destroy'](), this['_controlle' + 'r']['destroy'](), this['_model']['destroy'](), this['_view'] = void 0x0, this['_controlle' + 'r'] = void 0x0, this['_model'] = void 0x0);
                        }
                    },
                    {
                        'key': 'curPercent',
                        'get': function () {
                            return this['_model'] ? this['_model']['percent'] : 0x0;
                        }
                    }
                ]), _0xf44581;
            }())(), _0x47ffd1 = function (_0x21876f) {
                function _0x55d052() {
                    return _0x1295b3(this, _0x55d052), _0x5971e6(this, _0x35d7e0(_0x55d052)['call'](this, 'ShowSplash' + 'Bean'));
                }
                return _0x3a441e(_0x55d052, _0x164459), _0x413e7f(_0x55d052, [
                    {
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x2a8e05() {
                                return regeneratorRuntime['wrap'](function (_0x51d138) {
                                    for (;;)
                                        switch (_0x51d138['prev'] = _0x51d138['next']) {
                                        case 0x0:
                                            return _0x77369c['data']['splashShow' + 'Time'] = Date['now'](), _0x51d138['next'] = 0x3, _0x486868['show']();
                                        case 0x3:
                                            _0x4ab376['getInitCon' + 'fig']()['then'](this['onGetInitC' + 'onfig']['bind'](this));
                                        case 0x4:
                                        case 'end':
                                            return _0x51d138['stop']();
                                        }
                                }, _0x2a8e05, this);
                            }));
                        }
                    },
                    {
                        'key': 'onGetInitC' + 'onfig',
                        'value': function (_0x275847) {
                            console['log']('ShowSplash' + 'Bean\x20onGet' + 'InitConfig' + '\x20$versionC' + 'onfig:', _0x275847), _0x77369c['data']['versionCon' + 'fig'] = _0x275847, _0x275847 && _0x3d6d80['checkScene' + 'Blacklist'](), this['finish']();
                        }
                    }
                ]), _0x55d052;
            }(), _0x36da81 = function (_0x1737e0) {
                function _0x33e521() {
                    return _0x1295b3(this, _0x33e521), _0x5971e6(this, _0x35d7e0(_0x33e521)['call'](this, 'LoginBean'));
                }
                return _0x3a441e(_0x33e521, _0x164459), _0x413e7f(_0x33e521, [
                    {
                        'key': 'start',
                        'value': function () {
                            _0x3d6d80['login']()['then'](this['onLoginRes' + 'ult']['bind'](this)), this['finish']();
                        }
                    },
                    {
                        'key': 'onLoginRes' + 'ult',
                        'value': function (_0x5b1a33) {
                            if (!_0x5b1a33)
                                return console['log']('登录失败！');
                            console['log']('登录成功，头像：', _0x5b1a33['userInfo']['avatar']), _0x77369c['data']['token'] = _0x5b1a33['token'], 'loading' !== _0x77369c['config']['authorTime'] || _0x5b1a33['userInfo']['avatar'] ? _0x77369c['data']['userInfo'] = _0x5b1a33['userInfo'] : _0x3d6d80['authorize'](), this['cookLoginD' + 'ata'](_0x5b1a33), _0x4ab376['reqGetAvat' + 'ar'](), _0x4ab376['reqWorldRa' + 'nk'](), _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['ReqMyInfo']), (_0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['Rank'], { 'rankKey': 'friend' }), _0x3d6d80['checkScene' + 'Blacklist']());
                        }
                    },
                    {
                        'key': 'cookLoginD' + 'ata',
                        'value': function (_0x3496d3) {
                            var _0xfaf91d, _0x397f25;
                            _0x77369c['data']['versionCon' + 'fig'] = _0x3496d3['versionCon' + 'fig'];
                            var _0xc03e72 = {};
                            null === (_0xfaf91d = _0x3496d3['shareConte' + 'nt']) || void 0x0 === _0xfaf91d || _0xfaf91d['forEach'](function (_0x1bc05e) {
                                var _0x2f8832 = _0xc03e72[_0x1bc05e['share_type']];
                                _0x2f8832 || (_0xc03e72[_0x1bc05e['share_type']] = _0x2f8832 = []), _0x2f8832['push'](_0x1bc05e);
                            }), _0x77369c['data']['shareInfoD' + 'ic'] = _0xc03e72;
                            var _0x504c88 = {};
                            null === (_0x397f25 = _0x3496d3['wxappList']) || void 0x0 === _0x397f25 || _0x397f25['forEach'](function (_0x16eea8) {
                                var _0x28921c = _0x504c88[_0x16eea8['category']];
                                _0x28921c || (_0x504c88[_0x16eea8['category']] = _0x28921c = []), _0x28921c['push'](_0x16eea8);
                            }), _0x77369c['data']['appListDic'] = _0x504c88;
                        }
                    }
                ]), _0x33e521;
            }(), _0x28bf3b = function (_0x1b30be) {
                function _0x1f583c() {
                    return _0x1295b3(this, _0x1f583c), _0x5971e6(this, _0x35d7e0(_0x1f583c)['call'](this, 'LoadSubPac' + 'kagesBean'));
                }
                return _0x3a441e(_0x1f583c, _0x164459), _0x413e7f(_0x1f583c, [{
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x24ca22() {
                                return regeneratorRuntime['wrap'](function (_0x28d305) {
                                    for (;;)
                                        switch (_0x28d305['prev'] = _0x28d305['next']) {
                                        case 0x0:
                                            return _0x28d305['next'] = 0x2, _0x3d6d80['loadSubpac' + 'kages'](_0x77369c['config']['load']['subpackage' + 's'], void 0x0);
                                        case 0x2:
                                            _0x77369c['data']['isAllSubpa' + 'ckagesLoad' + 'ed'] = !0x0, this['finish']();
                                        case 0x4:
                                        case 'end':
                                            return _0x28d305['stop']();
                                        }
                                }, _0x24ca22, this);
                            }));
                        }
                    }]), _0x1f583c;
            }();
        !function (_0x28c299) {
            _0x28c299['Unknown'] = 'Unknown', _0x28c299['VIEW_Main'] = 'sdk_youlin' + 'g/lite/vie' + 'w/YLMain.j' + 'son', _0x28c299['VIEW_Home'] = 'sdk_youlin' + 'g/lite/vie' + 'w/YLHome.j' + 'son', _0x28c299['VIEW_Game'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLGame' + '.json', _0x28c299['VIEW_Store'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLStor' + 'e.json', _0x28c299['POPUP_Favo' + 'rite'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLFavo' + 'rite.json', _0x28c299['POPUP_More' + 'Game'] = 'sdk_youlin' + 'g/lite/vie' + 'w/YLMoreGa' + 'me.json', _0x28c299['POPUP_Rank'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLRank' + '.json', _0x28c299['VIEW_Crazy' + 'Click'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLCraz' + 'yClick.jso' + 'n', _0x28c299['VIEW_BoxCl' + 'ick'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLTrea' + 'sureBox.js' + 'on', _0x28c299['POPUP_Newb' + 'ie'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLNewb' + 'ie.json', _0x28c299['VIEW_Searc' + 'hPlayer'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLSear' + 'chPlayer.j' + 'son', _0x28c299['VIEW_Searc' + 'hVSPlayer'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLSear' + 'chVSPlayer' + '.json', _0x28c299['VIEW_Skin'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLSkin' + '.json', _0x28c299['VIEW_Rebor' + 'n'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLRebo' + 'rn.json', _0x28c299['VIEW_Syste' + 'mAppList'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLSyst' + 'emAppList.' + 'json', _0x28c299['VIEW_Resul' + 't'] = 'sdk_youlin' + 'g/common/v' + 'iew/YLResu' + 'lt.json', _0x28c299['VIEW_BackH' + 'ome'] = 'sdk_youlin' + 'g/lite/vie' + 'w/YLBackHo' + 'me.json', _0x28c299['VIEW_Begin' + 'Game'] = 'sdk_youlin' + 'g/lite/vie' + 'w/YLBeginG' + 'ame.json';
        }(_0x1679fd || (_0x1679fd = {}));
        var _0x2b928a, _0xf9d86a = Object['assign']({}, _0x1679fd), _0x18c0b8 = new _0x4d0c7a();
        !function (_0x593f85) {
            _0x593f85['S2G_INIT_G' + 'AME_READY'] = 'S2G_INIT_G' + 'AME_READY', _0x593f85['G2S_INIT_G' + 'AME_READY_' + 'SUCCESS'] = 'G2S_INIT_G' + 'AME_READY_' + 'SUCCESS', _0x593f85['S2G_BEGIN_' + 'GAME'] = 'S2G_BEGIN_' + 'GAME', _0x593f85['G2S_GAME_F' + 'AIL'] = 'G2S_GAME_F' + 'AIL', _0x593f85['S2G_REBORN' + '_GAME_READ' + 'Y'] = 'S2G_REBORN' + '_GAME_READ' + 'Y', _0x593f85['G2S_REBORN' + '_GAME_READ' + 'Y_SUCCESS'] = 'G2S_REBORN' + '_GAME_READ' + 'Y_SUCCESS', _0x593f85['S2G_RESET_' + 'GAME_READY'] = 'S2G_RESET_' + 'GAME_READY', _0x593f85['G2S_RESET_' + 'GAME_READY' + '_SUCCESS'] = 'G2S_RESET_' + 'GAME_READY' + '_SUCCESS', _0x593f85['S2G_USE_SK' + 'IN'] = 'S2G_USE_SK' + 'IN', _0x593f85['G2S_UPDATE' + '_CUR_SCORE'] = 'G2S_UPDATE' + '_CUR_SCORE', _0x593f85['S2G_PLAYER' + '_SEARCHED'] = 'S2G_PLAYER' + '_SEARCHED', _0x593f85['S2G_ON_CRA' + 'ZY_CLICK'] = 'S2G_ON_CRA' + 'ZY_CLICK', _0x593f85['S2G_STACK_' + 'VIEW_BEFOR' + 'E_EACH'] = 'S2G_STACK_' + 'VIEW_BEFOR' + 'E_EACH', _0x593f85['G2S_STACK_' + 'VIEW_BEFOR' + 'E_EACH_SUC' + 'CESS'] = 'G2S_STACK_' + 'VIEW_BEFOR' + 'E_EACH_SUC' + 'CESS';
        }(_0x2b928a || (_0x2b928a = {}));
        var _0x4c8ff1 = function (_0x50e0d6) {
                function _0x739c54() {
                    var _0x32364a;
                    return _0x1295b3(this, _0x739c54), (_0x32364a = _0x5971e6(this, _0x35d7e0(_0x739c54)['apply'](this, arguments)))['_isNewbieS' + 'howing'] = !0x1, _0x32364a['_isFavorit' + 'eShowing'] = !0x1, _0x32364a['_isMoreGam' + 'eShowing'] = !0x1, _0x32364a['_isVideoUs' + 'eSkin'] = !0x0, _0x32364a['_rebornCou' + 'nt'] = 0x0, _0x32364a['_playerHea' + 'ds'] = [], _0x32364a['_playerNam' + 'es'] = [], _0x32364a['_curSearch' + 'PlayerInde' + 'x'] = NaN, _0x32364a['_rankTabKe' + 'y'] = 'friend', _0x32364a['_isRankSho' + 'wing'] = !0x1, _0x32364a['_isShowing' + 'GamePlayer' + 'Rank'] = !0x1, _0x32364a['_isShowing' + 'GamePlayer' + 'Over'] = !0x1, _0x32364a['_hasGameBe' + 'gan'] = !0x1, _0x32364a['_overWorld' + 'RankCached'] = {}, _0x32364a['_curStackV' + 'iew'] = _0xf9d86a['Unknown'], _0x32364a['_preStackV' + 'iew'] = _0xf9d86a['Unknown'], _0x32364a['_hasCrazyC' + 'lickFinish'] = !0x1, _0x32364a['_boxClickN' + 'umber'] = 0x0, _0x32364a['_percentOn' + 'CrazyClick'] = 0x0, _0x32364a['targetPerc' + 'entOnCrazy' + 'Click'] = 0.8, _0x32364a['_percentOn' + 'BoxClick'] = 0x0, _0x32364a['targetPerc' + 'entOnBoxCl' + 'ick'] = 0.8, _0x32364a['_gameListB' + 'anner'] = !0x1, _0x32364a['_doChangeC' + 'urStackVie' + 'w'] = function (_0x52d357, _0x5d23aa) {
                        _0x32364a['try2Set']('curStackVi' + 'ew', _0x5d23aa), _0x52d357 !== _0x5d23aa && (_0x32364a['_preStackV' + 'iew'] = _0x52d357);
                    }, _0x32364a;
                }
                return _0x3a441e(_0x739c54, _0x1f30c5), _0x413e7f(_0x739c54, [
                    {
                        'key': 'reset',
                        'value': function () {
                            this['_preStackV' + 'iew'] = _0xf9d86a['Unknown'], this['hasCrazyCl' + 'ickFinish'] = !0x1, this['rebornCoun' + 't'] = 0x0, this['percentOnC' + 'razyClick'] = 0x0, this['hasGameBeg' + 'an'] = !0x1, this['isVideoUse' + 'Skin'] = !0x0, this['_overWorld' + 'RankCached'] = {}, this['_curSearch' + 'PlayerInde' + 'x'] = NaN, this['isShowingG' + 'amePlayerR' + 'ank'] = !0x1, this['isShowingG' + 'amePlayerO' + 'ver'] = !0x1;
                        }
                    },
                    {
                        'key': 'setPreview' + 'Skin',
                        'value': function (_0x20d48a) {
                            var _0x5613ab = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
                            this['try2Set']('previewSho' + 'pItem', _0x20d48a, _0x5613ab);
                        }
                    },
                    {
                        'key': 'hasCrazyCl' + 'ickFinish',
                        'get': function () {
                            return this['_hasCrazyC' + 'lickFinish'];
                        },
                        'set': function (_0x34148e) {
                            this['try2Set']('hasCrazyCl' + 'ickFinish', _0x34148e);
                        }
                    },
                    {
                        'key': 'percentOnC' + 'razyClick',
                        'get': function () {
                            return this['_percentOn' + 'CrazyClick'];
                        },
                        'set': function (_0x54aa69) {
                            this['try2Set']('percentOnC' + 'razyClick', _0x54aa69);
                        }
                    },
                    {
                        'key': 'boxClickNu' + 'mber',
                        'get': function () {
                            return this['_boxClickN' + 'umber'];
                        },
                        'set': function (_0xf003d4) {
                            this['try2Set']('boxClickNu' + 'mber', _0xf003d4);
                        }
                    },
                    {
                        'key': 'percentOnB' + 'oxClick',
                        'get': function () {
                            return this['_percentOn' + 'BoxClick'];
                        },
                        'set': function (_0x2b6340) {
                            this['try2Set']('percentOnB' + 'oxClick', _0x2b6340);
                        }
                    },
                    {
                        'key': 'preStackVi' + 'ew',
                        'get': function () {
                            return this['_preStackV' + 'iew'];
                        }
                    },
                    {
                        'key': 'gameListBa' + 'nner',
                        'get': function () {
                            return this['_gameListB' + 'anner'];
                        },
                        'set': function (_0x305b69) {
                            this['try2Set']('gameListBa' + 'nner', _0x305b69, !0x0);
                        }
                    },
                    {
                        'key': 'curStackVi' + 'ew',
                        'get': function () {
                            return this['_curStackV' + 'iew'];
                        },
                        'set': function (_0x4b748b) {
                            var _0x228410 = this, _0x3b7ee9 = this['_curStackV' + 'iew'];
                            if (_0x3b7ee9 !== _0x4b748b) {
                                if (_0x18c0b8['hasListene' + 'r'](_0x2b928a['S2G_STACK_' + 'VIEW_BEFOR' + 'E_EACH'])) {
                                    _0x18c0b8['once'](_0x2b928a['G2S_STACK_' + 'VIEW_BEFOR' + 'E_EACH_SUC' + 'CESS'], function () {
                                        _0x228410['_doChangeC' + 'urStackVie' + 'w'](_0x3b7ee9, _0x4b748b);
                                    }, void 0x0), this['try2Set']('curStackVi' + 'ew', _0xf9d86a['Unknown']);
                                    var _0x2778a8 = {
                                        'from': _0x3b7ee9,
                                        'to': _0x4b748b
                                    };
                                    _0x18c0b8['emit'](_0x2b928a['S2G_STACK_' + 'VIEW_BEFOR' + 'E_EACH'], _0x2778a8);
                                } else
                                    this['_doChangeC' + 'urStackVie' + 'w'](_0x3b7ee9, _0x4b748b);
                            }
                        }
                    },
                    {
                        'key': 'overWorldR' + 'ankCached',
                        'get': function () {
                            return this['_overWorld' + 'RankCached'];
                        },
                        'set': function (_0x424c00) {
                            this['_overWorld' + 'RankCached'] = _0x424c00;
                        }
                    },
                    {
                        'key': 'hasGameBeg' + 'an',
                        'get': function () {
                            return this['_hasGameBe' + 'gan'];
                        },
                        'set': function (_0x461713) {
                            this['try2Set']('hasGameBeg' + 'an', _0x461713);
                        }
                    },
                    {
                        'key': 'storeUnloc' + 'kResult',
                        'get': function () {
                            return this['_storeUnlo' + 'ckResult'];
                        },
                        'set': function (_0xf65228) {
                            this['try2Set']('storeUnloc' + 'kResult', _0xf65228);
                        }
                    },
                    {
                        'key': 'isShowingG' + 'amePlayerO' + 'ver',
                        'get': function () {
                            return this['_isShowing' + 'GamePlayer' + 'Over'];
                        },
                        'set': function (_0x227434) {
                            this['try2Set']('isShowingG' + 'amePlayerO' + 'ver', _0x227434);
                        }
                    },
                    {
                        'key': 'isShowingG' + 'amePlayerR' + 'ank',
                        'get': function () {
                            return this['_isShowing' + 'GamePlayer' + 'Rank'];
                        },
                        'set': function (_0x2bdc44) {
                            this['try2Set']('isShowingG' + 'amePlayerR' + 'ank', _0x2bdc44);
                        }
                    },
                    {
                        'key': 'rankTabKey',
                        'get': function () {
                            return this['_rankTabKe' + 'y'];
                        },
                        'set': function (_0x2d57e4) {
                            this['try2Set']('rankTabKey', _0x2d57e4);
                        }
                    },
                    {
                        'key': 'isRankShow' + 'ing',
                        'get': function () {
                            return this['_isRankSho' + 'wing'];
                        },
                        'set': function (_0x2375df) {
                            this['try2Set']('isRankShow' + 'ing', _0x2375df);
                        }
                    },
                    {
                        'key': 'curSelecte' + 'dInStore',
                        'get': function () {
                            return this['_curSelect' + 'edInStore'];
                        },
                        'set': function (_0x36471d) {
                            this['try2Set']('curSelecte' + 'dInStore', _0x36471d);
                        }
                    },
                    {
                        'key': 'previewSho' + 'pItem',
                        'get': function () {
                            return this['_previewSh' + 'opItem'];
                        }
                    },
                    {
                        'key': 'curSearchP' + 'layerIndex',
                        'get': function () {
                            return this['_curSearch' + 'PlayerInde' + 'x'];
                        },
                        'set': function (_0xf231bd) {
                            this['try2Set']('curSearchP' + 'layerIndex', _0xf231bd);
                        }
                    },
                    {
                        'key': 'playerName' + 's',
                        'get': function () {
                            return this['_playerNam' + 'es'];
                        },
                        'set': function (_0x100d00) {
                            this['try2Set']('playerName' + 's', _0x100d00);
                        }
                    },
                    {
                        'key': 'playerHead' + 's',
                        'get': function () {
                            return this['_playerHea' + 'ds'];
                        },
                        'set': function (_0x3db7a2) {
                            this['try2Set']('playerHead' + 's', _0x3db7a2);
                        }
                    },
                    {
                        'key': 'isVideoUse' + 'Skin',
                        'get': function () {
                            return this['_isVideoUs' + 'eSkin'];
                        },
                        'set': function (_0x50374b) {
                            this['try2Set']('isVideoUse' + 'Skin', _0x50374b);
                        }
                    },
                    {
                        'key': 'isMoreGame' + 'Showing',
                        'get': function () {
                            return this['_isMoreGam' + 'eShowing'];
                        },
                        'set': function (_0x1ca07a) {
                            this['try2Set']('isMoreGame' + 'Showing', _0x1ca07a);
                        }
                    },
                    {
                        'key': 'isFavorite' + 'Showing',
                        'get': function () {
                            return this['_isFavorit' + 'eShowing'];
                        },
                        'set': function (_0x28b839) {
                            this['try2Set']('isFavorite' + 'Showing', _0x28b839);
                        }
                    },
                    {
                        'key': 'rebornCoun' + 't',
                        'get': function () {
                            return this['_rebornCou' + 'nt'];
                        },
                        'set': function (_0x35ed70) {
                            this['try2Set']('rebornCoun' + 't', _0x35ed70);
                        }
                    },
                    {
                        'key': 'isNewbieSh' + 'owing',
                        'get': function () {
                            return this['_isNewbieS' + 'howing'];
                        },
                        'set': function (_0xe13603) {
                            this['try2Set']('isNewbieSh' + 'owing', _0xe13603);
                        }
                    }
                ]), _0x739c54;
            }(), _0x264b8c = function (_0xf571dd) {
                function _0x376a5c(_0x880843) {
                    var _0x2e7dc8;
                    return _0x1295b3(this, _0x376a5c), (_0x2e7dc8 = _0x5971e6(this, _0x35d7e0(_0x376a5c)['call'](this)))['_model'] = _0x880843, _0x2e7dc8['initEvents'](), _0x2e7dc8;
                }
                return _0x3a441e(_0x376a5c, _0x4f2a2a), _0x413e7f(_0x376a5c, [
                    {
                        'key': 'gotoApp',
                        'value': function (_0x3c6889) {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x107be5() {
                                var _0x227046;
                                return regeneratorRuntime['wrap'](function (_0x31b2de) {
                                    for (;;)
                                        switch (_0x31b2de['prev'] = _0x31b2de['next']) {
                                        case 0x0:
                                            if (!_0x3c6889) {
                                                _0x31b2de['next'] = 0x9;
                                                break;
                                            }
                                            return _0x31b2de['next'] = 0x3, _0x3d6d80['gotoApp'](_0x3c6889);
                                        case 0x3:
                                            if (_0x31b2de['sent']) {
                                                _0x31b2de['next'] = 0x9;
                                                break;
                                            }
                                            if (_0x227046 = this['_model']['curStackVi' + 'ew'], _0x77369c['data']['isAllSubpa' + 'ckagesLoad' + 'ed']) {
                                                _0x31b2de['next'] = 0x8;
                                                break;
                                            }
                                            return _0x31b2de['abrupt']('return');
                                        case 0x8:
                                            _0x227046 === _0xf9d86a['VIEW_Home'] ? (this['_model']['isMoreGame' + 'Showing'] = !0x1, this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home']) : _0x227046 === _0xf9d86a['VIEW_Rebor' + 'n'] && this['submitScor' + 'e']();
                                        case 0x9:
                                        case 'end':
                                            return _0x31b2de['stop']();
                                        }
                                }, _0x107be5, this);
                            }));
                        }
                    },
                    {
                        'key': 'fixStoreIt' + 'emInUse',
                        'value': function () {
                            var _0xa1b450 = _0x77369c['data'], _0x4ca588 = _0x77369c['config'], _0x4d3986 = _0xa1b450['storeItemI' + 'dInUse'], _0xf2854a = _0x4ca588['storeItems']['find'](function (_0x248c56) {
                                    return _0x248c56['isDefault'];
                                });
                            if (isNaN(_0x4d3986))
                                _0x4d3986 = null == _0xf2854a ? void 0x0 : _0xf2854a['id'];
                            else {
                                var _0x203117 = _0x4ca588['storeItems']['find'](function (_0x1ca2b5) {
                                    return _0x1ca2b5['id'] === _0x4d3986;
                                });
                                _0x203117 && this['isStoreIte' + 'mBought'](_0x203117) || (_0x4d3986 = null == _0xf2854a ? void 0x0 : _0xf2854a['id']);
                            }
                            _0xa1b450['storeItemI' + 'dInUse'] = _0x4d3986;
                            var _0x334cf3 = _0x4ca588['storeItems']['find'](function (_0x13fff3) {
                                return _0x13fff3['id'] === _0x4d3986;
                            });
                            _0x334cf3 && (_0x18c0b8['emit'](_0x2b928a['S2G_USE_SK' + 'IN'], _0x334cf3), this['_model']['curSelecte' + 'dInStore'] = _0x334cf3);
                        }
                    },
                    {
                        'key': 'closeStore' + 'Try2UseSki' + 'n',
                        'value': function () {
                            this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'];
                            var _0x548d35 = this['_model']['curSelecte' + 'dInStore'];
                            _0x548d35 && this['isStoreIte' + 'mBought'](_0x548d35) && (_0x77369c['data']['storeItemI' + 'dInUse'] = _0x548d35['id'], _0x18c0b8['emit'](_0x2b928a['S2G_USE_SK' + 'IN'], _0x548d35));
                        }
                    },
                    {
                        'key': 'doUnlockSt' + 'oreItem',
                        'value': function (_0x2d55f4) {
                            if (this['isStoreIte' + 'mBought'](_0x2d55f4['item']))
                                return _0x3d6d80['toastMsg']('操作失败，该商品已购' + '买！');
                            if (_0x77369c['data']['gold'] < _0x2d55f4['cost'])
                                return _0x3d6d80['toastMsg']('操作失败，金币不足！');
                            this['_model']['curSelecte' + 'dInStore'] = _0x2d55f4['item'], _0x77369c['data']['gold'] -= _0x2d55f4['cost'];
                            var _0x727b73 = _0x77369c['data']['ownStoreIt' + 'emIds']['concat']();
                            _0x727b73['push'](_0x2d55f4['item']['id']['toString']()), _0x77369c['data']['ownStoreIt' + 'emIds'] = _0x727b73, _0x3d6d80['toastMsg']('恭喜获得新皮肤！');
                        }
                    },
                    {
                        'key': 'randomUnlo' + 'ckStoreIte' + 'm',
                        'value': function () {
                            var _0x50f833 = this['getStoreIt' + 'emsCanBuy']();
                            if (_0x50f833['length'] <= 0x0)
                                _0x3d6d80['toastMsg']('操作失败，没有商品可' + '以购买！');
                            else {
                                var _0x4f0e53 = this['calStoreRa' + 'ndomUnlock' + 'Gold']();
                                _0x4f0e53 > _0x77369c['data']['gold'] ? platform['getInstanc' + 'e']()['prompt']('Coin\x20Neede' + 'd') : this['_model']['storeUnloc' + 'kResult'] = {
                                    'item': _0x3791c1['randomOne'](_0x50f833),
                                    'cost': _0x4f0e53
                                };
                            }
                        }
                    },
                    {
                        'key': 'getStoreIt' + 'emsCanBuy',
                        'value': function () {
                            var _0x26023a = this;
                            return _0x77369c['config']['storeItems']['filter'](function (_0x3b181e) {
                                return !_0x26023a['isStoreIte' + 'mBought'](_0x3b181e);
                            });
                        }
                    },
                    {
                        'key': 'calStoreRa' + 'ndomUnlock' + 'Gold',
                        'value': function () {
                            var _0x9d05cc = this['getStoreIt' + 'emsCanBuy']();
                            return _0x77369c['config']['storeRando' + 'mUnlockGol' + 'd'](_0x9d05cc['length']);
                        }
                    },
                    {
                        'key': 'isStoreIte' + 'mBought',
                        'value': function (_0x45f7ce) {
                            return _0x45f7ce['isDefault'] || -0x1 !== _0x77369c['data']['ownStoreIt' + 'emIds']['indexOf'](_0x45f7ce['id']['toString']());
                        }
                    },
                    {
                        'key': 'try2ShowBe' + 'ginGame',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'watchVideo' + '2GetGold',
                        'value': function () {
                            platform['getInstanc' + 'e']()['showReward'](() => {
                                _0x77369c['data']['gold'] += _0x77369c['config']['storeVideo' + 'UnlockGold'];
                            });
                        }
                    },
                    {
                        'key': 'watchVideo' + '2UseSkin',
                        'value': function () {
                            platform['getInstanc' + 'e']()['showReward'](() => {
                                _0x18c0b8['emit'](_0x2b928a['S2G_USE_SK' + 'IN'], this['_model']['previewSho' + 'pItem']), this['try2ShowSe' + 'archPlayer']();
                            });
                        }
                    },
                    {
                        'key': 'watchVideo' + '2Reborn',
                        'value': function () {
                            platform['getInstanc' + 'e']()['showReward'](() => {
                                this['doReborn']();
                            });
                        }
                    },
                    {
                        'key': 'skipReborn',
                        'value': function (_0x4a456c) {
                            var _0x2f766d = _0x77369c['data'], _0x1eeffd = _0x2f766d['hasWrongCl' + 'ickOnBtnSk' + 'ipReborn'], _0x5398eb = _0x2f766d['versionCon' + 'fig'];
                            !_0x4a456c && (null == _0x5398eb ? void 0x0 : _0x5398eb['skip_video']) && !_0x1eeffd ? (_0x77369c['data']['hasWrongCl' + 'ickOnBtnSk' + 'ipReborn'] = !0x0, this['watchVideo' + '2Reborn'](!0x0)) : this['onGameEnd']();
                        }
                    },
                    {
                        'key': 'onGameEnd',
                        'value': function () {
                            var _0x2af869;
                            _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['Reset']), (null === (_0x2af869 = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x2af869 ? void 0x0 : _0x2af869['page_contr' + 'ol']) ? this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Syste' + 'mAppList'] : this['try2ShowRe' + 'sult']();
                        }
                    },
                    {
                        'key': 'try2ShowRe' + 'sult',
                        'value': function () {
                            this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Resul' + 't'], _0x77369c['data']['isOnGame'] = !0x1;
                        }
                    },
                    {
                        'key': 'doReborn',
                        'value': function () {
                            this['_model']['rebornCoun' + 't']++, _0x18c0b8['emit'](_0x2b928a['S2G_REBORN' + '_GAME_READ' + 'Y']), this['try2ShowNe' + 'wbie']();
                        }
                    },
                    {
                        'key': 'try2Replay',
                        'value': function () {
                            this['_model']['reset'](), this['_model']['curStackVi' + 'ew'] === _0xf9d86a['VIEW_Resul' + 't'] && _0x18c0b8['emit'](_0x2b928a['S2G_RESET_' + 'GAME_READY']), this['try2ShowSk' + 'in'](!0x0);
                        }
                    },
                    {
                        'key': 'try2ShowBa' + 'ckHome',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'try2GotoHo' + 'me',
                        'value': function () {
                            this['_model']['reset'](), this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'];
                        }
                    },
                    {
                        'key': 'onG2SGameF' + 'ail',
                        'value': function () {
                            console['log']('游戏失败\x20onG2S' + 'GameFail'), this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Rebor' + 'n'];
                        }
                    },
                    {
                        'key': 'doGameFail',
                        'value': function () {
                            _0x4ab376['reqGetAvat' + 'ar'](), this['_model']['rebornCoun' + 't'] >= _0x77369c['config']['rebornMax'] ? this['onGameEnd']() : this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Rebor' + 'n'];
                        }
                    },
                    {
                        'key': 'try2ShowSk' + 'in',
                        'value': function (_0x4bbca2) {
                            var _0x924082;
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x2896d6() {
                                var _0xd9d5a8, _0x17db93, _0x59959e = this;
                                return regeneratorRuntime['wrap'](function (_0x340f46) {
                                    for (;;)
                                        switch (_0x340f46['prev'] = _0x340f46['next']) {
                                        case 0x0:
                                            if (_0x77369c['data']['round']++, _0x77369c['data']['hasGameIni' + 't']) {
                                                _0x340f46['next'] = 0x3;
                                                break;
                                            }
                                            return _0x340f46['abrupt']('return', _0x3d6d80['toastMsg']('请耐心等待，游戏正在' + '努力加载中~'));
                                        case 0x3:
                                            var _0x291fec = function () {
                                                    var _0x296406, _0x345114, _0x1e4a03 = _0x59959e['getStoreIt' + 'emsCanBuy'](), _0x5df835 = _0x3791c1['randomOne'](_0x1e4a03);
                                                    _0x5df835 && !_0x77369c['config']['isVerify'] && (null === (_0x345114 = null === (_0x296406 = _0x77369c['data']) || void 0x0 === _0x296406 ? void 0x0 : _0x296406['versionCon' + 'fig']) || void 0x0 === _0x345114 ? void 0x0 : _0x345114['delay']) ? (_0x59959e['_model']['isVideoUse' + 'Skin'] = _0x3d6d80['isSupportV' + 'ideoAd'], _0x59959e['_model']['setPreview' + 'Skin'](_0x5df835), _0x59959e['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Skin']) : _0x59959e['try2ShowSe' + 'archPlayer']();
                                                }, _0x3167e5 = function () {
                                                    var _0x527fd1, _0x4ffdb2;
                                                    _0x77369c['data']['isAfterBox'] = !0x0, 0x1 == (null === (_0x4ffdb2 = null === (_0x527fd1 = _0x77369c['data']) || void 0x0 === _0x527fd1 ? void 0x0 : _0x527fd1['versionCon' + 'fig']) || void 0x0 === _0x4ffdb2 ? void 0x0 : _0x4ffdb2['treasure_b' + 'ox']) ? _0x59959e['try2ShowBo' + 'xClick']() : _0x291fec();
                                                };
                                            _0x340f46['next'] = 0xb;
                                            break;
                                        case 0x8:
                                            _0x3167e5(), _0x340f46['next'] = 0xc;
                                            break;
                                        case 0xb:
                                            _0x3167e5();
                                        case 0xc:
                                        case 'end':
                                            return _0x340f46['stop']();
                                        }
                                }, _0x2896d6, this);
                            }));
                        }
                    },
                    {
                        'key': 'try2ShowSe' + 'archPlayer',
                        'value': function () {
                            this['try2ShowNe' + 'wbie']();
                        }
                    },
                    {
                        'key': 'cookPlayer' + 'Heads',
                        'value': function () {
                            if (_0x77369c['config']['needSearch' + 'Player']) {
                                var _0x215301 = _0x77369c['data']['playerName' + 'sPool']['concat']();
                                _0x3791c1['disturb'](_0x215301), this['_model']['playerName' + 's'] = _0x215301['slice'](0x0, _0x77369c['config']['numSearchP' + 'layer']);
                                var _0x27048e = _0x77369c['data']['playerHead' + 'sPool']['concat']();
                                _0x3791c1['disturb'](_0x27048e), this['_model']['playerHead' + 's'] = _0x27048e['slice'](0x0, _0x77369c['config']['numSearchP' + 'layer']);
                            }
                        }
                    },
                    {
                        'key': 'try2ShowNe' + 'wbie',
                        'value': function () {
                            _0x77369c['config']['noNewbie'] ? this['try2ShowCr' + 'azyClick']() : (this['_model']['curStackVi' + 'ew'] = _0xf9d86a['Unknown'], this['_model']['isNewbieSh' + 'owing'] = !0x0);
                        }
                    },
                    {
                        'key': 'tick2CoolD' + 'ownBoxClic' + 'k',
                        'value': function () {
                            this['_model']['percentOnB' + 'oxClick'] = Math['max'](this['_model']['percentOnB' + 'oxClick'] - 0.01, 0x0);
                        }
                    },
                    {
                        'key': 'boxClick',
                        'value': function () {
                            var _0x274c83 = this;
                            if (this['_model']['curStackVi' + 'ew'] === _0xf9d86a['VIEW_BoxCl' + 'ick']) {
                                this['_model']['percentOnB' + 'oxClick'] = _0x17edad['calValueBe' + 'tween'](this['_model']['percentOnB' + 'oxClick'] + 0.1, 0x0, 0x1);
                                var _0x152a08 = this['_model']['boxClickNu' + 'mber'];
                                this['_model']['boxClickNu' + 'mber'] = _0x152a08 + 0x1;
                                var _0x4feb65, _0x20a0e4, _0x4c5fcb = 0x2 == this['_model']['boxClickNu' + 'mber'], _0x201d95 = 0x6 == this['_model']['boxClickNu' + 'mber'], _0x49fff5 = this['_model']['percentOnB' + 'oxClick'] >= 0.9;
                                if (_0x201d95) {
                                    var _0x42ed4a = _0xce637d['showBanner']();
                                    Laya['timer']['once'](0x7d0, this, function () {
                                        return _0xce637d['hideBanner'](_0x42ed4a);
                                    });
                                } else {
                                    if (_0x4c5fcb)
                                        Laya['timer']['loop'](0x3e8 / 0x3c, this, this['tick2CoolD' + 'ownBoxClic' + 'k']);
                                    else {
                                        if (_0x49fff5) {
                                            if (_0x77369c['data']['gold'] += _0x77369c['config']['BoxUnlockG' + 'old'], Laya['timer']['clear'](this, this['tick2CoolD' + 'ownBoxClic' + 'k']), _0x77369c['data']['isAfterBox'])
                                                _0x4feb65 = _0x274c83['getStoreIt' + 'emsCanBuy'](), (_0x20a0e4 = _0x3791c1['randomOne'](_0x4feb65)) && !_0x77369c['config']['isVerify'] && _0x77369c['data']['versionCon' + 'fig']['delay'] ? (_0x274c83['_model']['isVideoUse' + 'Skin'] = _0x3d6d80['isSupportV' + 'ideoAd'], _0x274c83['_model']['setPreview' + 'Skin'](_0x20a0e4), _0x274c83['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Skin']) : _0x274c83['try2ShowSe' + 'archPlayer']();
                                            else
                                                this['try2GotoHo' + 'me']();
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'try2ShowBo' + 'xClick',
                        'value': function () {
                            this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_BoxCl' + 'ick'], this['_model']['percentOnB' + 'oxClick'] = 0x0, this['_model']['targetPerc' + 'entOnBoxCl' + 'ick'] = 0.8;
                        }
                    },
                    {
                        'key': 'try2ShowCr' + 'azyClick',
                        'value': function () {
                            this['_model']['isNewbieSh' + 'owing'] = !0x1;
                            var _0xeaa34 = _0x77369c['data']['round'], _0x3cf145 = _0x77369c['data']['versionCon' + 'fig'] || {}, _0x4f0348 = _0x3cf145['show_quick' + 'en'], _0x4d0bc6 = _0x3cf145['quicken_nu' + 'm'];
                            !this['_model']['rebornCoun' + 't'] && _0x4f0348 && (!(null == _0x4d0bc6 ? void 0x0 : _0x4d0bc6['length']) || 0x1 === _0x4d0bc6['length'] && 0x0 === _0x4d0bc6[0x0] || -0x1 !== _0x4d0bc6['indexOf'](_0xeaa34)) ? (this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Crazy' + 'Click'], this['_model']['percentOnC' + 'razyClick'] = 0x0, this['_model']['targetPerc' + 'entOnCrazy' + 'Click'] = _0x17edad['randomBetw' + 'een'](0.4, 0.7), Laya['timer']['loop'](0x3e8 / 0x3c, this, this['tick2CoolD' + 'ownCrazyCl' + 'ick'])) : this['try2BeginG' + 'ame']();
                        }
                    },
                    {
                        'key': 'tick2CoolD' + 'ownCrazyCl' + 'ick',
                        'value': function () {
                            this['_model']['percentOnC' + 'razyClick'] = Math['max'](this['_model']['percentOnC' + 'razyClick'] - 0.01, 0x0);
                        }
                    },
                    {
                        'key': 'crazyClick',
                        'value': function () {
                            if (this['_model']['curStackVi' + 'ew'] === _0xf9d86a['VIEW_Crazy' + 'Click']) {
                                this['_model']['percentOnC' + 'razyClick'] = _0x17edad['calValueBe' + 'tween'](this['_model']['percentOnC' + 'razyClick'] + 0.1, 0x0, 0x1);
                                var _0x284906 = this['_model']['percentOnC' + 'razyClick'] >= this['_model']['targetPerc' + 'entOnCrazy' + 'Click'], _0x37f2e8 = {
                                        'isFinish': _0x284906,
                                        'percent': this['_model']['percentOnC' + 'razyClick']
                                    };
                                if (_0x18c0b8['emit'](_0x2b928a['S2G_ON_CRA' + 'ZY_CLICK'], _0x37f2e8), _0x284906 && !this['_model']['hasCrazyCl' + 'ickFinish']) {
                                    this['_model']['hasCrazyCl' + 'ickFinish'] = !0x0;
                                    var _0x868daa = _0xce637d['showBanner']();
                                    Laya['timer']['once'](0x7d0, this, function () {
                                        return _0xce637d['hideBanner'](_0x868daa);
                                    }), Laya['timer']['clear'](this, this['tick2CoolD' + 'ownCrazyCl' + 'ick']), Laya['timer']['once'](0x3e8, this, this['try2BeginG' + 'ame']);
                                }
                            }
                        }
                    },
                    {
                        'key': 'try2BeginG' + 'ame',
                        'value': function () {
                            this['_model']['hasCrazyCl' + 'ickFinish'] = !0x1, this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Game'], _0x18c0b8['emit'](_0x2b928a['S2G_BEGIN_' + 'GAME']), _0x77369c['data']['isOnGame'] = !0x0, this['_model']['hasGameBeg' + 'an'] || (this['_model']['isShowingG' + 'amePlayerR' + 'ank'] = !0x0), this['_model']['hasGameBeg' + 'an'] = !0x0;
                        }
                    },
                    {
                        'key': 'submitScor' + 'e',
                        'value': function () {
                            var _0x4a7a09 = _0x77369c['data']['curScore'];
                            _0x3d6d80['submitScor' + 'e'](_0x4a7a09), _0x4ab376['reqUpdateS' + 'core'](_0x4a7a09);
                            var _0x1058e6 = _0x77369c['config']['score2Gold'](_0x4a7a09);
                            _0x77369c['data']['gold'] += _0x1058e6;
                        }
                    },
                    {
                        'key': 'findCurSel' + 'ectedSkinI' + 'nStore',
                        'value': function () {
                            if (!this['_model']['curSelecte' + 'dInStore']) {
                                var _0x4c3591 = _0x77369c['config']['storeItems']['find'](function (_0x5e44b3) {
                                    return _0x5e44b3['isDefault'];
                                });
                                this['_model']['curSelecte' + 'dInStore'] = _0x4c3591;
                            }
                        }
                    },
                    {
                        'key': 'onG2SCurSc' + 'ore',
                        'value': function (_0x1160e2) {
                            var _0x3bf228 = _0x1160e2['value']['curScore'];
                            if (_0x77369c['data']['curScore'] !== _0x3bf228 && (_0x77369c['data']['curScore'] = _0x3bf228, this['_model']['isShowingG' + 'amePlayerO' + 'ver'])) {
                                var _0x329bfb = this['_model']['overWorldR' + 'ankCached'], _0x4fccdb = [], _0xaa66a3 = _0x77369c['config']['overPlayer' + 'QueueMax'];
                                _0x77369c['data']['worldRanks']['forEach'](function (_0x5488c5) {
                                    _0x5488c5['avatarUrl'] && _0x5488c5['score'] < _0x3bf228 && !_0x329bfb[_0x5488c5['avatarUrl']] && (_0x329bfb[_0x5488c5['avatarUrl']] = !0x0, _0x4fccdb['length'] < 0x1 && _0x4fccdb['push'](_0x5488c5));
                                }), _0x4fccdb['length'] && (_0x4fccdb['reverse'](), _0x4fccdb['forEach'](function (_0x2a1984) {
                                    var _0x216de9 = {
                                        'score': _0x2a1984['score'],
                                        'playerUrl': _0x2a1984['avatarUrl'],
                                        'queueMax': _0xaa66a3
                                    };
                                    _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['CheckOverP' + 'layer'], { 'data': _0x216de9 });
                                }));
                                var _0x2e12c9 = {
                                    'score': _0x3bf228,
                                    'queueMax': _0xaa66a3
                                };
                                _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['CheckOverP' + 'layer'], { 'data': _0x2e12c9 });
                            }
                        }
                    },
                    {
                        'key': 'onG2SGameR' + 'esetReadyS' + 'uccess',
                        'value': function () {
                            this['fixStoreIt' + 'emInUse']();
                        }
                    },
                    {
                        'key': 'initEvents',
                        'value': function () {
                            _0x18c0b8['on'](_0x2b928a['G2S_RESET_' + 'GAME_READY' + '_SUCCESS'], this['onG2SGameR' + 'esetReadyS' + 'uccess'], this), _0x18c0b8['on'](_0x2b928a['G2S_GAME_F' + 'AIL'], this['onG2SGameF' + 'ail'], this), _0x18c0b8['on'](_0x2b928a['G2S_UPDATE' + '_CUR_SCORE'], this['onG2SCurSc' + 'ore'], this);
                        }
                    }
                ]), _0x376a5c;
            }(), _0xf48526 = function (_0x5808d2) {
                function _0x17850f(_0x2bcf90, _0x54f350) {
                    return _0x1295b3(this, _0x17850f), _0x5971e6(this, _0x35d7e0(_0x17850f)['call'](this, _0x2bcf90, _0x54f350, _0xf9d86a['VIEW_Main'], 0x0));
                }
                return _0x3a441e(_0x17850f, _0x3e794f), _0x413e7f(_0x17850f, [{
                        'key': 'bindPopupV' + 'iews',
                        'value': function () {
                            this['bindPopUpC' + 'hildView'](_0xf9d86a['POPUP_Favo' + 'rite'], 'isFavorite' + 'Showing', !0x0), this['bindPopUpC' + 'hildView'](_0xf9d86a['POPUP_More' + 'Game'], 'isMoreGame' + 'Showing', !0x0), this['bindPopUpC' + 'hildView'](_0xf9d86a['POPUP_Rank'], 'isRankShow' + 'ing', !0x0), this['bindPopUpC' + 'hildView'](_0xf9d86a['POPUP_Newb' + 'ie'], 'isNewbieSh' + 'owing', !0x0), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Home'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_Home']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Game'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_Game']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Store'], 'curStackVi' + 'ew', !0x1, 0x1, _0xf9d86a['VIEW_Store']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_BoxCl' + 'ick'], 'curStackVi' + 'ew', !0x1, 0x1, _0xf9d86a['VIEW_BoxCl' + 'ick']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Searc' + 'hPlayer'], 'curStackVi' + 'ew', !0x0, 0x0, _0xf9d86a['VIEW_Searc' + 'hPlayer']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Searc' + 'hVSPlayer'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_Searc' + 'hVSPlayer']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Skin'], 'curStackVi' + 'ew', !0x0, 0x0, _0xf9d86a['VIEW_Skin']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Crazy' + 'Click'], 'curStackVi' + 'ew', !0x1, 0x1, _0xf9d86a['VIEW_Crazy' + 'Click']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Rebor' + 'n'], 'curStackVi' + 'ew', !0x0, 0x0, _0xf9d86a['VIEW_Rebor' + 'n']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Syste' + 'mAppList'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_Syste' + 'mAppList']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Resul' + 't'], 'curStackVi' + 'ew', !0x0, 0x0, _0xf9d86a['VIEW_Resul' + 't']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_BackH' + 'ome'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_BackH' + 'ome']), this['bindPopUpC' + 'hildView'](_0xf9d86a['VIEW_Begin' + 'Game'], 'curStackVi' + 'ew', !0x1, 0x0, _0xf9d86a['VIEW_Begin' + 'Game']);
                        }
                    }]), _0x17850f;
            }(), _0x24e798 = new (function (_0x36a981) {
                function _0x2c3c6() {
                    return _0x1295b3(this, _0x2c3c6), _0x5971e6(this, _0x35d7e0(_0x2c3c6)['apply'](this, arguments));
                }
                return _0x3a441e(_0x2c3c6, _0x53b5d), _0x413e7f(_0x2c3c6, [
                    {
                        'key': 'show',
                        'value': function (_0x39a284) {
                            var _0x572156 = this, _0x4d085f = Object['create'](null, {
                                    'show': {
                                        'get': function () {
                                            return _0x3a96b3(_0x35d7e0(_0x2c3c6['prototype']), 'show', _0x572156);
                                        }
                                    }
                                });
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x461243() {
                                return regeneratorRuntime['wrap'](function (_0xbbf69a) {
                                    for (;;)
                                        switch (_0xbbf69a['prev'] = _0xbbf69a['next']) {
                                        case 0x0:
                                            return _0xbbf69a['next'] = 0x2, _0x4d085f['show']['call'](this, _0x39a284);
                                        case 0x2:
                                            _0x3afecb = !![], this['isShowing'] && _0x427360 && _0x24e798['model']['curStackVi' + 'ew'] != _0xf9d86a['VIEW_Home'] && platform['getInstanc' + 'e']()['cargamesst' + 'artup']('Drift-At-W' + 'ill', () => {
                                                window['yad']['offAll'](Laya['Event']['MOUSE_DOWN']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x2c50c8 => {
                                                    _0x2c50c8['stopPropag' + 'ation'](), platform['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                                                }), window['WebAudioEn' + 'gine']['pause'] = _0x3d6d80['isMute'], _0x3d6d80['playBgm'](!0x0), this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'], _0x486868['destroy']();
                                            });
                                        case 0x3:
                                        case 'end':
                                            return _0xbbf69a['stop']();
                                        }
                                }, _0x461243, this);
                            }));
                        }
                    },
                    {
                        'key': 'initMVC',
                        'value': function () {
                            this['_model'] = new _0x4c8ff1(), this['_controlle' + 'r'] = new _0x264b8c(this['_model']), this['_view'] = new _0xf48526(this['_model'], this['_controlle' + 'r']);
                        }
                    },
                    {
                        'key': 'model',
                        'get': function () {
                            return this['_model'];
                        }
                    },
                    {
                        'key': 'controller',
                        'get': function () {
                            return this['_controlle' + 'r'];
                        }
                    }
                ]), _0x2c3c6;
            }())(), _0x5362b3 = function (_0x2056b1) {
                function _0x2ed7f6() {
                    return _0x1295b3(this, _0x2ed7f6), _0x5971e6(this, _0x35d7e0(_0x2ed7f6)['call'](this, 'ShowMainBe' + 'an'));
                }
                return _0x3a441e(_0x2ed7f6, _0x164459), _0x413e7f(_0x2ed7f6, [{
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x160fa4() {
                                return regeneratorRuntime['wrap'](function (_0x42c803) {
                                    for (;;)
                                        switch (_0x42c803['prev'] = _0x42c803['next']) {
                                        case 0x0:
                                            return _0x42c803['next'] = 0x2, _0x24e798['show']();
                                        case 0x2:
                                            this['finish']();
                                        case 0x3:
                                        case 'end':
                                            return _0x42c803['stop']();
                                        }
                                }, _0x160fa4, this);
                            }));
                        }
                    }]), _0x2ed7f6;
            }(), _0x1e2863 = function () {
                function _0x28c1fd() {
                    _0x1295b3(this, _0x28c1fd);
                }
                return _0x413e7f(_0x28c1fd, null, [
                    {
                        'key': 'toSecondSt' + 'r',
                        'value': function (_0x25f486) {
                            return (_0x25f486 / 0x3e8)['toFixed'](0x2);
                        }
                    },
                    {
                        'key': 'getDateStr' + 'ing',
                        'value': function () {
                            var _0x559e01 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 'yyyy-MM-dd' + '\x20HH:mm:ss', _0x74abfc = arguments['length'] > 0x1 ? arguments[0x1] : void 0x0, _0x6a74bb = {
                                    'M+': (_0x74abfc = _0x74abfc || new Date())['getMonth']() + 0x1,
                                    'd+': _0x74abfc['getDate'](),
                                    'H+': _0x74abfc['getHours'](),
                                    'h+': _0x74abfc['getHours'](),
                                    'm+': _0x74abfc['getMinutes'](),
                                    's+': _0x74abfc['getSeconds'](),
                                    'q+': Math['floor']((_0x74abfc['getMonth']() + 0x3) / 0x3),
                                    'S': _0x74abfc['getMillise' + 'conds']()
                                };
                            for (var _0x5cf85f in (/(y+)/['test'](_0x559e01) && (_0x559e01 = _0x559e01['replace'](RegExp['$1'], (_0x74abfc['getFullYea' + 'r']() + '')['substr'](0x4 - RegExp['$1']['length']))), _0x6a74bb))
                                new RegExp('(' + _0x5cf85f + ')')['test'](_0x559e01) && (_0x559e01 = _0x559e01['replace'](RegExp['$1'], 0x1 === RegExp['$1']['length'] ? _0x6a74bb[_0x5cf85f] : ('00' + _0x6a74bb[_0x5cf85f])['substr'](('' + _0x6a74bb[_0x5cf85f])['length'])));
                            return _0x559e01;
                        }
                    }
                ]), _0x28c1fd;
            }(), _0x5de20d = new (function () {
                function _0x4e7e20() {
                    _0x1295b3(this, _0x4e7e20);
                }
                return _0x413e7f(_0x4e7e20, [{
                        'key': 'deploy',
                        'value': function () {
                        }
                    }]), _0x4e7e20;
            }())(), _0x1858ee = function (_0x25098a) {
                function _0x21cc6f() {
                    return _0x1295b3(this, _0x21cc6f), _0x5971e6(this, _0x35d7e0(_0x21cc6f)['call'](this, 'InitAppBea' + 'n'));
                }
                return _0x3a441e(_0x21cc6f, _0x164459), _0x413e7f(_0x21cc6f, [{
                        'key': 'start',
                        'value': function () {
                            _0x284a91['deploy'](), _0x3d6d80['deploy'](), _0x388c8d['deploy'](), _0xce637d['deploy'](), _0x5de20d['deploy'](), this['finish']();
                        }
                    }]), _0x21cc6f;
            }(), _0x2516a3 = function (_0x327ef0) {
                function _0x4413ab() {
                    var _0x4b0a31;
                    return _0x1295b3(this, _0x4413ab), (_0x4b0a31 = _0x5971e6(this, _0x35d7e0(_0x4413ab)['call'](this, 'LoadResBea' + 'n')))['_curProgre' + 'ss'] = 0x0, _0x4b0a31;
                }
                return _0x3a441e(_0x4413ab, _0x164459), _0x413e7f(_0x4413ab, [{
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x5564e7() {
                                var _0x3ec321, _0xf3d0b0;
                                return regeneratorRuntime['wrap'](function (_0x5c7c1d) {
                                    for (;;)
                                        switch (_0x5c7c1d['prev'] = _0x5c7c1d['next']) {
                                        case 0x0:
                                            if ((_0x3ec321 = _0x77369c['config']['load']['reses2Load']) && _0x3ec321['length']) {
                                                _0x5c7c1d['next'] = 0x5;
                                                break;
                                            }
                                            return console['log']('没有资源需要预加载'), this['finish'](), _0x5c7c1d['abrupt']('return');
                                        case 0x5:
                                            return this['_curProgre' + 'ss'] = _0x486868['curPercent'], _0xf3d0b0 = _0x3ec321['map'](function (_0x12a084) {
                                                return 'string' == typeof _0x12a084 ? _0x12a084 : _0x12a084['url'];
                                            }), _0x5c7c1d['next'] = 0x9, _0x424f9d['asyncCreat' + 'eRes'](_0xf3d0b0);
                                        case 0x9:
                                            _0x3ec321['map'](function (_0x534ab4) {
                                                'string' != typeof _0x534ab4 && _0x534ab4['needLock'] && (Laya['loader']['getRes'](_0x534ab4['url'])['lock'] = !0x0);
                                            }), this['finish']();
                                        case 0xb:
                                        case 'end':
                                            return _0x5c7c1d['stop']();
                                        }
                                }, _0x5564e7, this);
                            }));
                        }
                    }]), _0x4413ab;
            }(), _0x4e51da = function (_0x2569cd) {
                function _0x43d58c() {
                    return _0x1295b3(this, _0x43d58c), _0x5971e6(this, _0x35d7e0(_0x43d58c)['call'](this, 'InitGameBe' + 'an'));
                }
                return _0x3a441e(_0x43d58c, _0x164459), _0x413e7f(_0x43d58c, [
                    {
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x590f69() {
                                var _0x216ed0;
                                return regeneratorRuntime['wrap'](function (_0x4864e2) {
                                    for (;;)
                                        switch (_0x4864e2['prev'] = _0x4864e2['next']) {
                                        case 0x0:
                                            return _0x18c0b8['once'](_0x2b928a['G2S_INIT_G' + 'AME_READY_' + 'SUCCESS'], this['onInitGame' + 'ReadySucce' + 'ss'], this), _0x4864e2['next'] = 0x3, _0x424f9d['asyncLoadS' + 'cene'](_0x77369c['config']['gameSceneU' + 'rl']);
                                        case 0x3:
                                            _0x216ed0 = _0x4864e2['sent'], _0x388c8d['layerScene']['addChildAt'](_0x216ed0, 0x0), _0x18c0b8['emit'](_0x2b928a['S2G_INIT_G' + 'AME_READY']);
                                        case 0x6:
                                        case 'end':
                                            return _0x4864e2['stop']();
                                        }
                                }, _0x590f69, this);
                            }));
                        }
                    },
                    {
                        'key': 'onInitGame' + 'ReadySucce' + 'ss',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x1fa3fc() {
                                return regeneratorRuntime['wrap'](function (_0x2ee8fe) {
                                    for (;;)
                                        switch (_0x2ee8fe['prev'] = _0x2ee8fe['next']) {
                                        case 0x0:
                                            _0x77369c['data']['hasGameIni' + 't'] = !0x0, _0x3d6d80['playBgm'](), this['finish']();
                                        case 0x3:
                                        case 'end':
                                            return _0x2ee8fe['stop']();
                                        }
                                }, _0x1fa3fc, this);
                            }));
                        }
                    }
                ]), _0x43d58c;
            }(), _0x3b208c = function (_0x242ce6) {
                function _0x50d8d7() {
                    var _0x5e0f07;
                    return _0x1295b3(this, _0x50d8d7), (_0x5e0f07 = _0x5971e6(this, _0x35d7e0(_0x50d8d7)['call'](this, 'LoadOpenDa' + 'taResBean')))['_openDataR' + 'ess'] = ['res/atlas/' + 'opendata/p' + 'ic.atlas'], _0x5e0f07;
                }
                return _0x3a441e(_0x50d8d7, _0x164459), _0x413e7f(_0x50d8d7, [
                    {
                        'key': 'start',
                        'value': function () {
                            this['finish']();
                        }
                    },
                    {
                        'key': 'onResesLoa' + 'ded',
                        'value': function () {
                            console['log']('透传资源到开放域'), this['_openDataR' + 'ess']['forEach'](function (_0x33380a) {
                                /\.atlas$/i['test'](_0x33380a) ? _0x3d6d80['sendAtlasT' + 'oOpenDataC' + 'ontext'](_0x33380a) : /\.json$/i['test'](_0x33380a) && _0x3d6d80['sendJsonDa' + 'taToDataCo' + 'ntext'](_0x33380a);
                            }), _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['LoadRes']);
                        }
                    }
                ]), _0x50d8d7;
            }(), _0x568cfc = function (_0x59297f) {
                function _0x351ab0() {
                    return _0x1295b3(this, _0x351ab0), _0x5971e6(this, _0x35d7e0(_0x351ab0)['call'](this, 'CheckStore' + 'ItemInUseB' + 'ean'));
                }
                return _0x3a441e(_0x351ab0, _0x164459), _0x413e7f(_0x351ab0, [{
                        'key': 'start',
                        'value': function () {
                            _0x24e798['controller']['fixStoreIt' + 'emInUse'](), this['finish']();
                        }
                    }]), _0x351ab0;
            }(), _0x560b5c = function (_0x4a763c) {
                function _0x58220e() {
                    return _0x1295b3(this, _0x58220e), _0x5971e6(this, _0x35d7e0(_0x58220e)['call'](this, 'LoadLiteSu' + 'bPackageBe' + 'an'));
                }
                return _0x3a441e(_0x58220e, _0x164459), _0x413e7f(_0x58220e, [{
                        'key': 'start',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x21da4d() {
                                return regeneratorRuntime['wrap'](function (_0x45bbd4) {
                                    for (;;)
                                        switch (_0x45bbd4['prev'] = _0x45bbd4['next']) {
                                        case 0x0:
                                            return _0x45bbd4['next'] = 0x2, _0x3d6d80['loadSubpac' + 'kages']([_0x77369c['config']['load']['liteSubpac' + 'kage']], void 0x0);
                                        case 0x2:
                                            this['finish']();
                                        case 0x3:
                                        case 'end':
                                            return _0x45bbd4['stop']();
                                        }
                                }, _0x21da4d, this);
                            }));
                        }
                    }]), _0x58220e;
            }(), _0x326146 = function (_0x2574d1) {
                function _0x39449d() {
                    return _0x1295b3(this, _0x39449d), _0x5971e6(this, _0x35d7e0(_0x39449d)['call'](this, 'HideSplash' + 'Bean'));
                }
                return _0x3a441e(_0x39449d, _0x164459), _0x413e7f(_0x39449d, [{
                        'key': 'start',
                        'value': function () {
                            _0x486868['done'](0xc8), console['log'](('【闪屏】闪屏显示时长' + '：')['concat'](_0x1e2863['toSecondSt' + 'r'](Date['now']() - _0x77369c['data']['splashShow' + 'Time']))), this['finish']();
                        }
                    }]), _0x39449d;
            }(), _0x54f314 = function () {
                function _0x917d18() {
                    _0x1295b3(this, _0x917d18), this['_beans'] = [], this['_curBeanIn' + 'dex'] = 0x0, this['_beanStart' + 'Time'] = 0x0, this['_beans'] = [
                        _0x1858ee,
                        _0x47ffd1,
                        _0x36da81,
                        _0x560b5c,
                        _0x5362b3,
                        _0x326146,
                        _0x28bf3b,
                        _0x2516a3,
                        _0x3b208c,
                        _0x4e51da,
                        _0x568cfc
                    ];
                }
                return _0x413e7f(_0x917d18, [{
                        'key': 'run',
                        'value': function () {
                            if (this['_beanStart' + 'Time']) {
                                var _0x457091 = this['_beans'][this['_curBeanIn' + 'dex'] - 0x1];
                                console['log']('[BEAN]执行\x20'['concat'](_0x457091['name'], '\x20完成，耗时：')['concat'](_0x1e2863['toSecondSt' + 'r'](Date['now']() - this['_beanStart' + 'Time']), '\x20秒。'));
                            }
                            if (this['_curBeanIn' + 'dex'] < this['_beans']['length']) {
                                this['_beanStart' + 'Time'] = Date['now']();
                                var _0x3f41ee = new (0x0, this['_beans'][this['_curBeanIn' + 'dex']])();
                                _0x3f41ee['dispatcher']['once'](Laya['Event']['COMPLETE'], this, this['run']), this['_curBeanIn' + 'dex']++, console['log'](('[BEAN]正在执行' + 'bean：')['concat'](_0x3f41ee['name'])), _0x3f41ee['start']();
                            } else
                                console['log']('[BEAN]所有be' + 'an全部执行完毕。');
                        }
                    }]), _0x917d18;
            }(), _0x3f5663 = function (_0x47e1b0) {
                function _0x2d30a7() {
                    return _0x1295b3(this, _0x2d30a7), _0x5971e6(this, _0x35d7e0(_0x2d30a7)['apply'](this, arguments));
                }
                return _0x3a441e(_0x2d30a7, _0x540fbe), _0x413e7f(_0x2d30a7, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_spProgres' + 'sBar']['mask'] = this['_spProgres' + 'sBarMask'], this['_spProgres' + 'sBarMask']['removeSelf'](), this['_model']['on']('percent', this['onPercent'], this, !0x0), this['_controlle' + 'r']['start']();
                        }
                    },
                    {
                        'key': 'onPercent',
                        'value': function () {
                            var _0x52830c = _0x17edad['calValueBe' + 'tween'](this['_model']['percent'], 0x0, 0x1), _0x472ddb = this['_spProgres' + 'sBarMask']['graphics'];
                            _0x472ddb['clear'](!0x0), _0x472ddb['drawRect'](0x0, 0x0, this['_spProgres' + 'sBar']['width'] * _0x52830c, 0x1d, '#ffffff', void 0x0, 0x0), this['_txtProgre' + 'ss']['text'] = ''['concat'](0x63 * _0x52830c >> 0x0, '%');
                        }
                    }
                ]), _0x2d30a7;
            }(), _0x45246e = function (_0x18b693) {
                function _0x982070() {
                    var _0x2df9c3;
                    return _0x1295b3(this, _0x982070), (_0x2df9c3 = _0x5971e6(this, _0x35d7e0(_0x982070)['apply'](this, arguments)))['stickMode'] = 'center', _0x2df9c3['offsetX'] = '0', _0x2df9c3['offsetY'] = '0', _0x2df9c3['statusBarO' + 'ffsetY'] = 0x0, _0x2df9c3['_p'] = new Laya['Point'](0x0, 0x0), _0x2df9c3['isPause'] = !0x1, _0x2df9c3;
                }
                return _0x3a441e(_0x982070, Laya['Script']), _0x413e7f(_0x982070, [
                    {
                        'key': 'onWinResiz' + 'e4Repos',
                        'value': function () {
                            if (!this['isPause']) {
                                var _0x1e6965 = this['owner'];
                                if (null == _0x1e6965 ? void 0x0 : _0x1e6965['displayedI' + 'nStage']) {
                                    var _0x48fc29 = _0x1e6965['parent'];
                                    if (_0x48fc29 instanceof Laya['Sprite']) {
                                        var _0x5a31b0 = this['stickMode'], _0x9f7159 = !0x1;
                                        if ('none' !== _0x5a31b0 && (this['calPos'](), this['_p'] = _0x48fc29['globalToLo' + 'cal'](this['_p']), 'v_middle' !== _0x5a31b0 && 'bottom' !== _0x5a31b0 && 'top' !== _0x5a31b0 && (_0x1e6965['x'] = this['_p']['x'] + this['cookOffset' + 'Value'](this['offsetX'], !0x0), _0x9f7159 = !0x0), 'h_center' !== _0x5a31b0 && 'right' !== _0x5a31b0 && (_0x1e6965['y'] = this['_p']['y'] + this['cookOffset' + 'Value'](this['offsetY'], !0x1), _0x9f7159 = !0x0), this['isAdaptSta' + 'tusBar'])) {
                                            var _0x3192b5 = _0x3d6d80['getStatusB' + 'arHeight']();
                                            _0x3192b5 && (_0x3192b5 += this['statusBarO' + 'ffsetY']), _0x1e6965['y'] += _0x3192b5, _0x9f7159 = !0x0;
                                        }
                                        _0x9f7159 && _0x1e6965['event']('Event_RePo' + 's');
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'cookOffset' + 'Value',
                        'value': function (_0x4de865, _0x4480ab) {
                            return -0x1 === _0x4de865['indexOf']('%') ? parseFloat(_0x4de865) || 0x0 : (parseFloat(_0x4de865['replace']('%', '')) || 0x0) / 0x64 * (_0x4480ab ? Laya['stage']['width'] : Laya['stage']['height']);
                        }
                    },
                    {
                        'key': 'calPos',
                        'value': function () {
                            if (this['owner'] instanceof Laya['Sprite']) {
                                var _0x450803 = Laya['stage']['width'], _0x5e9d91 = Laya['stage']['height'];
                                switch (this['stickMode']) {
                                case 'center':
                                    this['_p']['x'] = _0x450803 >> 0x1, this['_p']['y'] = _0x5e9d91 >> 0x1;
                                    break;
                                case 'h_center':
                                    this['_p']['x'] = _0x450803 >> 0x1;
                                    break;
                                case 'v_middle':
                                    this['_p']['y'] = _0x5e9d91 >> 0x1;
                                    break;
                                case 'top':
                                    this['_p']['y'] = 0x0;
                                    break;
                                case 'top_center':
                                    this['_p']['x'] = _0x450803 >> 0x1, this['_p']['y'] = 0x0;
                                    break;
                                case 'bottom':
                                    this['_p']['y'] = _0x5e9d91;
                                    break;
                                case 'bottom_cen' + 'ter':
                                    this['_p']['x'] = _0x450803 >> 0x1, this['_p']['y'] = _0x5e9d91;
                                    break;
                                case 'left_down':
                                    this['_p']['x'] = 0x0, this['_p']['y'] = _0x5e9d91;
                                    break;
                                case 'right':
                                    this['_p']['x'] = _0x450803 >> 0x0;
                                    break;
                                case 'right_midd' + 'le':
                                    this['_p']['x'] = _0x450803, this['_p']['y'] = _0x5e9d91 >> 0x1;
                                    break;
                                case 'right_down':
                                    this['_p']['x'] = _0x450803, this['_p']['y'] = _0x5e9d91;
                                    break;
                                case 'right_up':
                                    this['_p']['x'] = _0x450803, this['_p']['y'] = 0x0;
                                    break;
                                default:
                                    return;
                                }
                            }
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            Laya['stage']['on'](Laya['Event']['RESIZE'], this, this['onWinResiz' + 'e4Repos']), this['owner']['on'](Laya['Event']['DISPLAY'], this, this['onWinResiz' + 'e4Repos']), this['onWinResiz' + 'e4Repos']();
                        }
                    },
                    {
                        'key': 'onStart',
                        'value': function () {
                            this['onWinResiz' + 'e4Repos']();
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            Laya['stage']['off'](Laya['Event']['RESIZE'], this, this['onWinResiz' + 'e4Repos']), this['owner']['off'](Laya['Event']['DISPLAY'], this, this['onWinResiz' + 'e4Repos']);
                        }
                    },
                    {
                        'key': 'onDestroy',
                        'value': function () {
                            this['onDisable']();
                        }
                    }
                ]), _0x982070;
            }(), _0xae8b66 = function (_0x7e620f) {
                function _0x5655fe() {
                    return _0x1295b3(this, _0x5655fe), _0x5971e6(this, _0x35d7e0(_0x5655fe)['apply'](this, arguments));
                }
                return _0x3a441e(_0x5655fe, _0x31fd82), _0x413e7f(_0x5655fe, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_model']['on']('percentOnC' + 'razyClick', this['onPercent'], this), _0x424f9d['addClickLi' + 'stener'](this['_spHandCli' + 'ck'], this['onHandClic' + 'k'], this);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['onPercent']();
                        }
                    },
                    {
                        'key': 'onPercent',
                        'value': function () {
                            this['_spProgres' + 'sPane']['percent'] = this['_model']['percentOnC' + 'razyClick'];
                        }
                    },
                    {
                        'key': 'onHandClic' + 'k',
                        'value': function () {
                            this['_controlle' + 'r']['crazyClick']();
                        }
                    }
                ]), _0x5655fe;
            }(), _0x3d22f1 = function (_0x2f6f24) {
                function _0x2ad4af() {
                    var _0x3dcffe;
                    return _0x1295b3(this, _0x2ad4af), (_0x3dcffe = _0x5971e6(this, _0x35d7e0(_0x2ad4af)['apply'](this, arguments)))['_percent'] = 0x0, _0x3dcffe;
                }
                return _0x3a441e(_0x2ad4af, Laya['Sprite']), _0x413e7f(_0x2ad4af, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_spBar'] = this['getChildBy' + 'Name']('imgBar'), this['_spBarMask'] = this['getChildBy' + 'Name']('spBarMask'), this['_spBar']['mask'] = this['_spBarMask'], this['_spBarMask']['removeSelf'](), this['onPercent']();
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['_spBar']['mask'] = void 0x0, this['_spBar']['mask'] = this['_spBarMask'], this['onPercent']();
                        }
                    },
                    {
                        'key': 'onPercent',
                        'value': function () {
                            var _0x49a00e = _0x17edad['calValueBe' + 'tween'](this['_percent'], 0x0, 0x1), _0x250ca0 = this['_spBarMask'], _0x2c0683 = _0x250ca0['graphics'], _0x310087 = _0x250ca0['width'], _0x5a5593 = _0x250ca0['height'];
                            if (_0x2c0683['clear'](!0x0), _0x49a00e) {
                                var _0x5bb4fb = _0x5a5593 * _0x49a00e;
                                _0x2c0683['drawRect'](0x0, _0x5a5593 - _0x5bb4fb, _0x310087, _0x5bb4fb, '#ffffff', void 0x0, 0x0);
                            }
                        }
                    },
                    {
                        'key': 'percent',
                        'get': function () {
                            return this['_percent'];
                        },
                        'set': function (_0x1233f8) {
                            this['_percent'] !== _0x1233f8 && (this['_percent'] = _0x1233f8, this['onPercent']());
                        }
                    }
                ]), _0x2ad4af;
            }(), _0x952fe6 = function (_0x58ed8b) {
                function _0x4beee4() {
                    var _0x571ad9;
                    return _0x1295b3(this, _0x4beee4), (_0x571ad9 = _0x5971e6(this, _0x35d7e0(_0x4beee4)['apply'](this, arguments)))['_tlMap'] = new Map(), _0x571ad9;
                }
                return _0x3a441e(_0x4beee4, Laya['Sprite']), _0x413e7f(_0x4beee4, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_spCircle1'] = this['getChildBy' + 'Name']('spCircle1'), this['_spCircle2'] = this['getChildBy' + 'Name']('spCircle2'), this['_spCircle3'] = this['getChildBy' + 'Name']('spCircle3'), this['_spHand'] = this['getChildBy' + 'Name']('spHand'), this['_btnClickA' + 'rea'] = this['getChildBy' + 'Name']('btnClickAr' + 'ea'), _0x424f9d['addClickLi' + 'stener'](this['_btnClickA' + 'rea'], this['onClick'], this);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['tweenCircl' + 'e'](this['_spCircle1'], 0x0), this['tweenCircl' + 'e'](this['_spCircle2'], 0x1), this['tweenCircl' + 'e'](this['_spCircle3'], 0x2), this['tweenHand']();
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['resetAnima' + 'tion'](this['_spCircle1']), this['resetAnima' + 'tion'](this['_spCircle2']), this['resetAnima' + 'tion'](this['_spCircle3']), this['resetAnima' + 'tion'](this['_spHand']);
                        }
                    },
                    {
                        'key': 'tweenHand',
                        'value': function () {
                            this['resetAnima' + 'tion'](this['_spHand']), this['_spHand']['scale'](1.1, 1.1);
                            var _0x2824f0 = new Laya['TimeLine']();
                            _0x2824f0['to'](this['_spHand'], {
                                'scaleX': 0x1,
                                'scaleY': 0x1
                            }, 0x190, Laya['Ease']['sineIn']), _0x2824f0['to'](this['_spHand'], {
                                'scaleX': 1.1,
                                'scaleY': 1.1
                            }, 0x190, Laya['Ease']['sineOut']), _0x2824f0['play'](void 0x0, !0x0), this['_tlMap']['set'](this['_spHand'], _0x2824f0);
                        }
                    },
                    {
                        'key': 'tweenCircl' + 'e',
                        'value': function (_0x48b9d5, _0x58f9da) {
                            var _0x37388d = this;
                            this['resetAnima' + 'tion'](_0x48b9d5), _0x48b9d5['scale'](0.01, 0.01);
                            var _0x5e56fe = 0x12c * _0x58f9da;
                            Laya['timer']['once'](_0x5e56fe, _0x48b9d5, function _0x11c721() {
                                _0x48b9d5['scale'](0.01, 0.01), _0x48b9d5['alpha'] = 0x1, Laya['Tween']['to'](_0x48b9d5, {
                                    'alpha': 0x0,
                                    'scaleX': 0x3,
                                    'scaleY': 0x3
                                }, 0x3e8, Laya['Ease']['sineIn'], new Laya['Handler'](_0x37388d, function () {
                                    Laya['timer']['once'](0x12c, _0x48b9d5, _0x11c721);
                                }));
                            });
                        }
                    },
                    {
                        'key': 'resetAnima' + 'tion',
                        'value': function (_0x1f2add) {
                            var _0x5e462f = this['_tlMap']['get'](_0x1f2add);
                            _0x5e462f && (_0x5e462f['destroy'](), this['_tlMap']['delete'](_0x1f2add)), Laya['Tween']['clearAll'](_0x1f2add), Laya['timer']['clearAll'](_0x1f2add);
                        }
                    },
                    {
                        'key': 'onClick',
                        'value': function () {
                            this['event'](Laya['Event']['CLICK']);
                        }
                    }
                ]), _0x4beee4;
            }(), _0x17c80d = function (_0x3ec53f) {
                function _0x589c6a() {
                    return _0x1295b3(this, _0x589c6a), _0x5971e6(this, _0x35d7e0(_0x589c6a)['apply'](this, arguments));
                }
                return _0x3a441e(_0x589c6a, _0x31fd82), _0x413e7f(_0x589c6a, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_txtName1']['text'] = this['_txtName2']['text'] = _0x77369c['config']['gameName'], this['_imgIcon1']['skin'] = this['_imgIcon2']['skin'] = _0x77369c['config']['gameIconUr' + 'l'];
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_model']['isFavorite' + 'Showing'] = !0x1;
                        }
                    }
                ]), _0x589c6a;
            }(), _0x56b327 = function (_0x3e24e0) {
                function _0x20a851() {
                    return _0x1295b3(this, _0x20a851), _0x5971e6(this, _0x35d7e0(_0x20a851)['apply'](this, arguments));
                }
                return _0x3a441e(_0x20a851, _0x31fd82), _0x413e7f(_0x20a851, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            _0x424f9d['fixWxOpenD' + 'ataViewer'](this['_wxOverHea' + 'd']), _0x424f9d['fixWxOpenD' + 'ataViewer'](this['_wxRankHea' + 'd']), this['_model']['on']('isShowingG' + 'amePlayerO' + 'ver', this['onPlayerOv' + 'erShowingC' + 'hanged'], this, !0x0), this['_model']['on']('isShowingG' + 'amePlayerR' + 'ank', this['onPlayerRa' + 'nkShowingC' + 'hanged'], this, !0x0);
                        }
                    },
                    {
                        'key': 'onPlayerOv' + 'erShowingC' + 'hanged',
                        'value': function () {
                            if (this['_model']['isShowingG' + 'amePlayerO' + 'ver']) {
                                var _0x5821ce = {
                                    'score': _0x77369c['data']['curScore'],
                                    'queueMax': _0x77369c['config']['overPlayer' + 'QueueMax']
                                };
                                _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['CheckOverP' + 'layer'], { 'data': _0x5821ce }), this['_wxOverHea' + 'd']['x'] = this['_wxOverHea' + 'd']['x'];
                            }
                        }
                    },
                    {
                        'key': 'onPlayerRa' + 'nkShowingC' + 'hanged',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'onPlayerRa' + 'nkHideComp' + 'lete',
                        'value': function () {
                            this['_model']['isShowingG' + 'amePlayerR' + 'ank'] = !0x1, this['_model']['hasGameBeg' + 'an'] && (this['_model']['isShowingG' + 'amePlayerO' + 'ver'] = !0x0);
                        }
                    },
                    {
                        'key': 'checkAd',
                        'value': function () {
                            var _0x1b7207, _0x3749d3, _0x112385 = this, _0x4d8cbb = _0x77369c['config']['ad']['gameViewAd' + 'Mode'];
                            0x1 !== _0x4d8cbb && (null === (_0x1b7207 = this['_panelAdCe' + 'nter']) || void 0x0 === _0x1b7207 ? void 0x0 : _0x1b7207['parent']) && (this['_panelAdCe' + 'nter']['removeSelf'](), Laya['timer']['once'](0x1f4, void 0x0, function () {
                                _0x112385['_panelAdCe' + 'nter']['destroy'](), _0x112385['_panelAdCe' + 'nter'] = void 0x0;
                            })), 0x2 !== _0x4d8cbb && (null === (_0x3749d3 = this['_panelAdBo' + 'ttom']) || void 0x0 === _0x3749d3 ? void 0x0 : _0x3749d3['parent']) && (this['_panelAdBo' + 'ttom']['removeSelf'](), Laya['timer']['once'](0x1f4, void 0x0, function () {
                                _0x112385['_panelAdBo' + 'ttom']['destroy'](), _0x112385['_panelAdBo' + 'ttom'] = void 0x0;
                            }));
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['checkAd'](), _0x77369c['data']['on']('curScore', this['onCurScore'], this, !0x0);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            _0x77369c['data']['off']('curScore', this['onCurScore'], this);
                        }
                    },
                    {
                        'key': 'onCurScore',
                        'value': function () {
                            this['_fontScore']['value'] = _0x77369c['data']['curScore']['toString']();
                        }
                    }
                ]), _0x20a851;
            }(), _0x1762c5 = function (_0x540f66) {
                function _0x20cfd9(_0x2fac81) {
                    var _0x2fc2b2;
                    return _0x1295b3(this, _0x20cfd9), (_0x2fc2b2 = _0x5971e6(this, _0x35d7e0(_0x20cfd9)['call'](this)))['_gridCateg' + 'ory'] = _0x2fac81, _0x2fc2b2['_grids'] = [], _0x2fc2b2['_curIndex'] = 0x0, _0x2fc2b2['_canShake'] = !0x0, _0x2fc2b2['_updateInt' + 'ervalMs'] = 0x7d0, _0x2fc2b2;
                }
                return _0x3a441e(_0x20cfd9, Laya['Sprite']), _0x413e7f(_0x20cfd9, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['initUI']();
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            _0x77369c['data']['on']('appListDic', this['onAppListD' + 'ic'], this, !0x0), _0x77369c['data']['activeAdNu' + 'm']++;
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            _0x77369c['data']['off']('appListDic', this['onAppListD' + 'ic'], this), Laya['timer']['clear'](this, this['tick2Updat' + 'e']), _0x77369c['data']['activeAdNu' + 'm']--;
                        }
                    },
                    {
                        'key': 'onAppListD' + 'ic',
                        'value': function () {
                            this['updateGrid' + 's'](!0x1), Laya['timer']['clear'](this, this['tick2Updat' + 'e']), Laya['timer']['clear'](this, this['onDelay2Up' + 'date']), Laya['timer']['once'](_0x17edad['randomBetw' + 'een'](0x0, 0x3e8), this, this['onDelay2Up' + 'date']);
                        }
                    },
                    {
                        'key': 'onDelay2Up' + 'date',
                        'value': function () {
                            Laya['timer']['loop'](this['_updateInt' + 'ervalMs'], this, this['tick2Updat' + 'e']);
                        }
                    },
                    {
                        'key': 'tick2Updat' + 'e',
                        'value': function () {
                            this['updateGrid' + 's'](!0x0);
                        }
                    },
                    {
                        'key': 'updateGrid' + 's',
                        'value': function (_0x3701e0) {
                            var _0x4cf3d4 = this;
                            _0x3701e0 = _0x3701e0 && this['_canShake'], this['_applist'] && this['_applist']['length'] || (this['_applist'] = (_0x77369c['data']['appListDic'][this['_gridCateg' + 'ory']] || [])['concat'](), _0x3791c1['disturb'](this['_applist'])), this['_grids']['forEach'](function (_0x153fc8, _0x1a8d94) {
                                var _0x47bb0e = (_0x4cf3d4['_curIndex'] + _0x1a8d94) % _0x4cf3d4['_applist']['length'];
                                _0x153fc8['setData'](_0x4cf3d4['_applist'][_0x47bb0e], _0x3701e0);
                            }), this['_curIndex'] += this['_grids']['length'];
                        }
                    }
                ]), _0x20cfd9;
            }(), _0x3b058e = function (_0x301ed0) {
                function _0x23a610() {
                    var _0x53c06d;
                    return _0x1295b3(this, _0x23a610), (_0x53c06d = _0x5971e6(this, _0x35d7e0(_0x23a610)['call'](this, 0x0)))['_canShake'] = !0x1, _0x53c06d;
                }
                return _0x3a441e(_0x23a610, _0x1762c5), _0x413e7f(_0x23a610, [
                    {
                        'key': 'onAppListD' + 'ic',
                        'value': function () {
                            var _0x539166 = _0x77369c['data']['appListDic'][this['_gridCateg' + 'ory']] || [];
                            this['_imgBg']['visible'] = !!_0x539166['length'], _0x3a96b3(_0x35d7e0(_0x23a610['prototype']), 'onAppListD' + 'ic', this)['call'](this);
                        }
                    },
                    {
                        'key': 'initUI',
                        'value': function () {
                            this['_imgBg'] = this['getChildBy' + 'Name']('imgBg');
                            for (var _0xf85c47 = 0x0;;) {
                                var _0x2c0eeb = this['getChildBy' + 'Name']('ad'['concat'](_0xf85c47));
                                if (!_0x2c0eeb)
                                    break;
                                this['_grids']['push'](_0x2c0eeb), _0xf85c47++;
                            }
                        }
                    }
                ]), _0x23a610;
            }(), _0x4e370b = function (_0x53f6d1) {
                function _0x43d288() {
                    var _0x267b9d;
                    return _0x1295b3(this, _0x43d288), (_0x267b9d = _0x5971e6(this, _0x35d7e0(_0x43d288)['apply'](this, arguments)))['_controlle' + 'r'] = _0x24e798['controller'], _0x267b9d;
                }
                return _0x3a441e(_0x43d288, Laya['Sprite']), _0x413e7f(_0x43d288, [
                    {
                        'key': 'setData',
                        'value': function (_0x67bbae, _0x292087) {
                            var _0x4faaf9;
                            this['_data'] = _0x67bbae;
                            var _0x1ca32f = (null == _0x67bbae ? void 0x0 : _0x67bbae['app_img']) || '';
                            this['_imgAd']['skin'] = _0x1ca32f, this['visible'] = !!_0x1ca32f, null === (_0x4faaf9 = this['_shakeTime' + 'line']) || void 0x0 === _0x4faaf9 || _0x4faaf9['destroy'](), this['_shakeTime' + 'line'] = void 0x0, this['_imgAd']['rotation'] = 0x0, _0x292087 && (this['_shakeTime' + 'line'] = new Laya['TimeLine'](), this['_shakeTime' + 'line']['to'](this['_imgAd'], { 'rotation': 0xf }, 0x32)['to'](this['_imgAd'], { 'rotation': -0xf }, 0x64)['to'](this['_imgAd'], { 'rotation': 0xf }, 0x64)['to'](this['_imgAd'], { 'rotation': 0x0 }, 0x32), this['_shakeTime' + 'line']['play']());
                        }
                    },
                    {
                        'key': 'onADClick',
                        'value': function () {
                            this['_controlle' + 'r']['gotoApp'](this['_data']);
                        }
                    },
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_imgAd'] = this['getChildBy' + 'Name']('imgAd'), _0x424f9d['addClickLi' + 'stener'](this['_imgAd'], this['onADClick'], this);
                        }
                    }
                ]), _0x43d288;
            }(), _0x1a66ee = function (_0x3e216f) {
                function _0x335874() {
                    return _0x1295b3(this, _0x335874), _0x5971e6(this, _0x35d7e0(_0x335874)['call'](this, 0x0));
                }
                return _0x3a441e(_0x335874, _0x1762c5), _0x413e7f(_0x335874, [{
                        'key': 'initUI',
                        'value': function () {
                            var _0x4c2066 = this['getChildBy' + 'Name']('paneLeft'), _0x1408bf = this['getChildBy' + 'Name']('paneRight');
                            this['_grids']['push'](_0x4c2066['getChildBy' + 'Name']('adL1')), this['_grids']['push'](_0x4c2066['getChildBy' + 'Name']('adL2')), this['_grids']['push'](_0x1408bf['getChildBy' + 'Name']('adR1')), this['_grids']['push'](_0x1408bf['getChildBy' + 'Name']('adR2'));
                        }
                    }]), _0x335874;
            }(), _0x30f763 = function (_0x44beb6) {
                function _0xbd2c35() {
                    return _0x1295b3(this, _0xbd2c35), _0x5971e6(this, _0x35d7e0(_0xbd2c35)['apply'](this, arguments));
                }
                return _0x3a441e(_0xbd2c35, _0x31fd82), _0x413e7f(_0xbd2c35, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_spClickOt' + 'her']['visible'] = !0x1, this['_imgMain']['on'](Laya['Event']['LOADED'], this, this['onNewbieMa' + 'inComplete']), this['_imgMain']['skin'] = _0x77369c['config']['newbieImgU' + 'rl'] || '', _0x77369c['config']['newbieAniU' + 'rl'] && Laya['loader']['load'](_0x77369c['config']['newbieAniU' + 'rl'], Laya['Handler']['create'](this, this['onAniCompl' + 'ete'])), _0x77369c['config']['newbieText' + 'Url'] && (this['_spClickOt' + 'her']['visible'] = !0x0, Laya['loader']['load'](_0x77369c['config']['newbieText' + 'Url'], Laya['Handler']['create'](this, this['onTextTure' + 'Complete'])));
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['_ani'] && this['_ani']['play'](0x0, !0x0);
                        }
                    },
                    {
                        'key': 'onAniCompl' + 'ete',
                        'value': function () {
                            this['_ani'] = new Laya['Animation'](), this['_ani']['loadAnimat' + 'ion'](_0x77369c['config']['newbieAniU' + 'rl']), this['_ani']['play'](0x0, !0x0), this['_spView']['addChild'](this['_ani']), console['log']('this.Ani', this['_ani']);
                        }
                    },
                    {
                        'key': 'onTextTure' + 'Complete',
                        'value': function (_0x10f867) {
                            this['_spClickOt' + 'her']['texture'] = _0x10f867;
                        }
                    },
                    {
                        'key': 'onNewbieMa' + 'inComplete',
                        'value': function () {
                            this['_spClickOt' + 'her']['y'] = this['_imgMain']['y'] + 0.5 * this['_imgMain']['height'] + 0x50;
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_controlle' + 'r']['try2ShowCr' + 'azyClick']();
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['_ani'] && this['_ani']['gotoAndSto' + 'p'](0x0);
                        }
                    }
                ]), _0xbd2c35;
            }(), _0x337bb4 = function (_0x17bbdb) {
                function _0x326a0e() {
                    return _0x1295b3(this, _0x326a0e), _0x5971e6(this, _0x35d7e0(_0x326a0e)['apply'](this, arguments));
                }
                return _0x3a441e(_0x326a0e, _0x31fd82), _0x413e7f(_0x326a0e, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            _0x424f9d['fixWxOpenD' + 'ataViewer'](this['_wxODViewe' + 'r']), this['_wxODViewe' + 'rOrginalPo' + 's'] = new Laya['Point'](this['_wxODViewe' + 'r']['x'], this['_wxODViewe' + 'r']['y']), this['_wxODViewe' + 'rParnet'] = this['_wxODViewe' + 'r']['parent'];
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            var _0xbda3dc, _0x14228a = this;
                            'rank' !== _0x77369c['config']['authorTime'] || _0x77369c['data']['hasRejectA' + 'uthor'] || (null === (_0xbda3dc = _0x77369c['data']['userInfo']) || void 0x0 === _0xbda3dc ? void 0x0 : _0xbda3dc['avatar']) || _0x3d6d80['authorize']()['then'](function (_0x465763) {
                                return _0x465763 && _0x14228a['onRanKeyCh' + 'anged']();
                            }), this['_model']['on']('rankTabKey', this['onRanKeyCh' + 'anged'], this, !0x0);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['_model']['off']('rankTabKey', this['onRanKeyCh' + 'anged'], this);
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                            var _0x37cea3 = this['_wxODViewe' + 'rParnet']['localToGlo' + 'bal'](this['_wxODViewe' + 'rOrginalPo' + 's'], !0x0);
                            _0x37cea3 = this['globalToLo' + 'cal'](_0x37cea3, !0x1), this['addChild'](this['_wxODViewe' + 'r']), this['_wxODViewe' + 'r']['x'] = _0x37cea3['x'], this['_wxODViewe' + 'r']['y'] = _0x37cea3['y'], _0x3a96b3(_0x35d7e0(_0x326a0e['prototype']), 'onShowComp' + 'lete', this)['call'](this);
                        }
                    },
                    {
                        'key': 'hide',
                        'value': function () {
                            this['isShowing'] && this['_wxODViewe' + 'r']['parent'] !== this['_wxODViewe' + 'rParnet'] && (this['_wxODViewe' + 'rParnet']['addChild'](this['_wxODViewe' + 'r']), this['_wxODViewe' + 'r']['x'] = this['_wxODViewe' + 'rOrginalPo' + 's']['x'], this['_wxODViewe' + 'r']['y'] = this['_wxODViewe' + 'rOrginalPo' + 's']['y']), _0x3a96b3(_0x35d7e0(_0x326a0e['prototype']), 'hide', this)['call'](this);
                        }
                    },
                    {
                        'key': 'onRanKeyCh' + 'anged',
                        'value': function () {
                            var _0x50bf0d = this['_model']['rankTabKey'];
                            _0x50bf0d && _0x3d6d80['isQQWXMini' + 'Game'] && ('world' === _0x50bf0d && _0x4ab376['reqWorldRa' + 'nk'](), _0x3d6d80['postMsg2Op' + 'enData'](_0x4ff468['Rank'], { 'rankKey': _0x50bf0d }));
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_model']['isRankShow' + 'ing'] = !0x1;
                        }
                    }
                ]), _0x326a0e;
            }(), _0x11a64f = function (_0x1b7f99) {
                function _0x420d84() {
                    var _0x30a072;
                    return _0x1295b3(this, _0x420d84), (_0x30a072 = _0x5971e6(this, _0x35d7e0(_0x420d84)['apply'](this, arguments)))['_isSelecte' + 'd'] = !0x1, _0x30a072;
                }
                return _0x3a441e(_0x420d84, Laya['Script']), _0x413e7f(_0x420d84, [
                    {
                        'key': 'updateSele' + 'ction',
                        'value': function () {
                            this['_imgSelect' + 'ed']['visible'] = this['_isSelecte' + 'd'], this['_imgNormal']['visible'] = !this['_isSelecte' + 'd'];
                        }
                    },
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_imgSelect' + 'ed'] = this['owner']['getChildBy' + 'Name']('imgSelecte' + 'd'), this['_imgNormal'] = this['owner']['getChildBy' + 'Name']('imgNormal'), this['_txtTitle'] = this['owner']['getChildBy' + 'Name']('txtTitle'), this['updateSele' + 'ction']();
                        }
                    },
                    {
                        'key': 'isSelected',
                        'get': function () {
                            return this['_isSelecte' + 'd'];
                        },
                        'set': function (_0xd29392) {
                            this['_isSelecte' + 'd'] !== _0xd29392 && (this['_isSelecte' + 'd'] = _0xd29392, this['updateSele' + 'ction']());
                        }
                    }
                ]), _0x420d84;
            }(), _0x59ff1c = function (_0x2fff6c) {
                function _0x33a036() {
                    var _0x4f359e;
                    return _0x1295b3(this, _0x33a036), (_0x4f359e = _0x5971e6(this, _0x35d7e0(_0x33a036)['apply'](this, arguments)))['_tabComps'] = [], _0x4f359e['_tabs'] = [], _0x4f359e;
                }
                return _0x3a441e(_0x33a036, Laya['Script']), _0x413e7f(_0x33a036, [
                    {
                        'key': 'addTabClic' + 'k',
                        'value': function (_0x4fc250) {
                            this['_onTabClic' + 'k'] = _0x4fc250;
                        }
                    },
                    {
                        'key': 'updateSele' + 'ction',
                        'value': function (_0x4d8964) {
                            this['_tabComps']['forEach'](function (_0x574aed) {
                                return _0x574aed['isSelected'] = _0x4d8964 === _0x574aed['tabKey'];
                            });
                        }
                    },
                    {
                        'key': 'onAwake',
                        'value': function () {
                            for (var _0x40e1c2 = this['tabParent'] || this['owner'], _0x40fda0 = _0x40e1c2['numChildre' + 'n'], _0x3084d4 = 0x0; _0x3084d4 < _0x40fda0; _0x3084d4++) {
                                var _0x1e9fc2 = _0x40e1c2['getChildAt'](_0x3084d4), _0x43deae = _0x1e9fc2['getCompone' + 'nt'](_0x11a64f);
                                _0x43deae && (this['_tabComps']['push'](_0x43deae), this['_tabs']['push'](_0x1e9fc2), _0x424f9d['addClickLi' + 'stener'](_0x1e9fc2, this['onTabClick' + 'Changed'], this));
                            }
                        }
                    },
                    {
                        'key': 'onStart',
                        'value': function () {
                            var _0x2deb9d = this;
                            if (this['updateSele' + 'ction'](this['defaultTab' + 'Key']), this['modelPrope' + 'rty']) {
                                var _0x49452a = this['owner'], _0x15faf1 = _0x49452a['model'] || _0x49452a['_model'];
                                _0x15faf1 instanceof _0x1f30c5 && (this['_parentMod' + 'el'] = _0x15faf1, _0x15faf1['on'](this['modelPrope' + 'rty'], this['onModelTab' + 'KeyChanged'], this, !0x0), this['addTabClic' + 'k'](function (_0x11f09c) {
                                    return _0x15faf1[_0x2deb9d['modelPrope' + 'rty']] = _0x11f09c;
                                }));
                            }
                        }
                    },
                    {
                        'key': 'onModelTab' + 'KeyChanged',
                        'value': function () {
                            this['updateSele' + 'ction'](this['_parentMod' + 'el'][this['modelPrope' + 'rty']]);
                        }
                    },
                    {
                        'key': 'onTabClick' + 'Changed',
                        'value': function (_0x5defc3) {
                            var _0x26ade4 = _0x5defc3['currentTar' + 'get'], _0x1bd69e = this['_tabs']['indexOf'](_0x26ade4);
                            if (-0x1 !== _0x1bd69e) {
                                var _0x3b4a61 = this['_tabComps'][_0x1bd69e];
                                this['_onTabClic' + 'k'] && this['_onTabClic' + 'k'](_0x3b4a61['tabKey']), this['updateSele' + 'ction'](_0x3b4a61['tabKey']);
                            }
                        }
                    },
                    {
                        'key': 'onDestroy',
                        'value': function () {
                            this['_parentMod' + 'el'] && this['_parentMod' + 'el']['off'](this['modelPrope' + 'rty'], this['onModelTab' + 'KeyChanged'], this), this['_tabComps'] = void 0x0, this['_tabs'] = void 0x0, this['_onTabClic' + 'k'] = void 0x0;
                        }
                    }
                ]), _0x33a036;
            }(), _0x4a04ea = function (_0x3ed3e1) {
                function _0x566fa1() {
                    return _0x1295b3(this, _0x566fa1), _0x5971e6(this, _0x35d7e0(_0x566fa1)['apply'](this, arguments));
                }
                return _0x3a441e(_0x566fa1, _0x31fd82), _0x413e7f(_0x566fa1, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_btnVideo']['visible'] = !_0x77369c['config']['isVerify'];
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            Laya['timer']['once'](0x2710, this, this['onTimer2Sk' + 'ip']), platform['getInstanc' + 'e']()['initList'](this['list_showL' + 'ist']);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            Laya['timer']['clear'](this, this['onTimer2Sk' + 'ip']);
                        }
                    },
                    {
                        'key': 'onTimer2Sk' + 'ip',
                        'value': function () {
                            this['_controlle' + 'r']['skipReborn'](!0x0);
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x2041cf) {
                            switch (_0x2041cf['currentTar' + 'get']) {
                            case this['_btnVideo']:
                                Laya['timer']['clear'](this, this['onTimer2Sk' + 'ip']), this['_controlle' + 'r']['watchVideo' + '2Reborn']();
                                break;
                            case this['_btnSkip']:
                                platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                    Laya['timer']['clear'](this, this['onTimer2Sk' + 'ip']), this['_controlle' + 'r']['skipReborn'](!0x1);
                                });
                            }
                        }
                    }
                ]), _0x566fa1;
            }(), _0x234163 = function (_0x3d2d12) {
                function _0x43554d() {
                    var _0x17ca17;
                    return _0x1295b3(this, _0x43554d), (_0x17ca17 = _0x5971e6(this, _0x35d7e0(_0x43554d)['apply'](this, arguments)))['_controlle' + 'r'] = _0x24e798['controller'], _0x17ca17['_model'] = _0x24e798['model'], _0x17ca17['category'] = 0x0, _0x17ca17['rowArea'] = 0x3, _0x17ca17['hangDurati' + 'onMS'] = 0x3e8, _0x17ca17['tweenDurat' + 'ionMSPerRa' + 'w'] = 0xfa0, _0x17ca17['isAutoClic' + 'kOneAppOnS' + 'how'] = !0x1, _0x17ca17['_datas'] = [], _0x17ca17['_bottomIte' + 'mRelatedRo' + 'wIndex'] = 0x0, _0x17ca17['_hasRandom' + 'ClickApp'] = !0x1, _0x17ca17;
                }
                return _0x3a441e(_0x43554d, Laya['Script']), _0x413e7f(_0x43554d, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_ownerList'] = this['owner'], this['_ownerList']['vScrollBar' + 'Skin'] = '', this['_ownerList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updateItem']);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['clearMyTim' + 'ers'](), _0x77369c['data']['on']('appListDic', this['onAppListD' + 'ic'], this, !0x0), _0x77369c['data']['activeAdNu' + 'm']++;
                        }
                    },
                    {
                        'key': 'try2AutoCl' + 'ickOneApp',
                        'value': function () {
                            var _0x4617c2;
                            if (this['isAutoClic' + 'kOneAppOnS' + 'how'] && !this['_hasRandom' + 'ClickApp'] && (null === (_0x4617c2 = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x4617c2 ? void 0x0 : _0x4617c2['comple_der' + 'ive'])) {
                                var _0x1114d6 = this['_ownerList']['dataSource'] || [];
                                _0x1114d6['length'] && (this['_hasRandom' + 'ClickApp'] = !0x0, this['_controlle' + 'r']['gotoApp'](_0x3791c1['randomOne'](_0x1114d6)));
                            }
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            _0x77369c['data']['off']('appListDic', this['onAppListD' + 'ic'], this), this['clearMyTim' + 'ers'](), _0x77369c['data']['activeAdNu' + 'm']--, this['_hasRandom' + 'ClickApp'] = !0x1;
                        }
                    },
                    {
                        'key': 'clearMyTim' + 'ers',
                        'value': function () {
                            Laya['timer']['clear'](this, this['doTween2To' + 'p']), Laya['timer']['clear'](this, this['doTween2Bo' + 'ttom']), Laya['timer']['clear'](this, this['checkAutoS' + 'croll']);
                        }
                    },
                    {
                        'key': 'onMouseDow' + 'n',
                        'value': function () {
                            this['clearMyTim' + 'ers']();
                        }
                    },
                    {
                        'key': 'onStageMou' + 'seUp',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](0x3e8, this, this['checkAutoS' + 'croll']);
                        }
                    },
                    {
                        'key': 'checkAutoS' + 'croll',
                        'value': function () {
                            this['calRow'](this['_ownerList']['startIndex']) >= 0.5 * this['_bottomIte' + 'mRelatedRo' + 'wIndex'] ? this['doTween2To' + 'p']() : this['doTween2Bo' + 'ttom']();
                        }
                    },
                    {
                        'key': 'updateItem',
                        'value': function (_0x424090) {
                            _0x424090['setData'](_0x424090['dataSource'], !0x1);
                        }
                    },
                    {
                        'key': 'onAppListD' + 'ic',
                        'value': function () {
                            var _0x5df321 = _0x77369c['data']['appListDic'][this['category']] || [];
                            this['_datas'] = this['exchange'](_0x5df321), this['_bottomIte' + 'mRelatedRo' + 'wIndex'] = this['calRow'](this['_datas']['length'] - 0x1) - this['rowArea'] + 0x2, this['_ownerList']['dataSource'] = _0x5df321, this['tween2Bott' + 'om'](), this['try2AutoCl' + 'ickOneApp']();
                        }
                    },
                    {
                        'key': 'exchange',
                        'value': function (_0x409079) {
                            if (0x0 == _0x409079['length'])
                                return [];
                            for (var _0x4d58ce = 0x0; _0x4d58ce < _0x409079['length'] / 0x2 - 0x1; ++_0x4d58ce) {
                                var _0x2105e4 = _0x409079[_0x4d58ce], _0xaef9c6 = Math['floor'](_0x17edad['randomBetw' + 'een'](_0x409079['length'] / 0x2 - 0x1, _0x409079['length'] - 0x1));
                                _0x2105e4 = _0x409079[_0x4d58ce], _0x409079[_0x4d58ce] = _0x409079[_0xaef9c6], _0x409079[_0xaef9c6] = _0x2105e4;
                            }
                            for (; !_0x409079[0x0];)
                                _0x409079['shift']();
                            return _0x409079;
                        }
                    },
                    {
                        'key': 'tween2Bott' + 'om',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](this['hangDurati' + 'onMS'], this, this['doTween2Bo' + 'ttom']);
                        }
                    },
                    {
                        'key': 'doTween2Bo' + 'ttom',
                        'value': function () {
                            var _0x9a069a = this['_bottomIte' + 'mRelatedRo' + 'wIndex'] * this['rowArea'];
                            this['_ownerList']['tweenTo'](_0x9a069a, this['calAutoScr' + 'ollDuratio' + 'nMS'](this['_bottomIte' + 'mRelatedRo' + 'wIndex']), new Laya['Handler'](this, this['tween2Top']));
                        }
                    },
                    {
                        'key': 'tween2Top',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](this['hangDurati' + 'onMS'], this, this['doTween2To' + 'p']);
                        }
                    },
                    {
                        'key': 'doTween2To' + 'p',
                        'value': function () {
                            var _0x309779 = this['calRow'](0x0);
                            this['_ownerList']['tweenTo'](0x0, this['calAutoScr' + 'ollDuratio' + 'nMS'](_0x309779), new Laya['Handler'](this, this['tween2Bott' + 'om']));
                        }
                    },
                    {
                        'key': 'calAutoScr' + 'ollDuratio' + 'nMS',
                        'value': function (_0x104559) {
                            var _0x47ddf5 = this['calRow'](this['_ownerList']['startIndex']);
                            return (Math['abs'](_0x47ddf5 - _0x104559) || 0x1) * this['tweenDurat' + 'ionMSPerRa' + 'w'];
                        }
                    },
                    {
                        'key': 'calRow',
                        'value': function (_0x12d7b3) {
                            return _0x12d7b3 / this['_ownerList']['repeatX'] >> 0x0;
                        }
                    },
                    {
                        'key': 'needAutoSc' + 'roll',
                        'get': function () {
                            return this['_datas']['length'] > this['_ownerList']['repeatX'] * this['rowArea'];
                        }
                    }
                ]), _0x43554d;
            }(), _0x332424 = function (_0x3ecad9) {
                function _0x32df3a() {
                    var _0x2442c0;
                    return _0x1295b3(this, _0x32df3a), (_0x2442c0 = _0x5971e6(this, _0x35d7e0(_0x32df3a)['apply'](this, arguments)))['hangMS'] = 0x0, _0x2442c0['coverTarge' + 'tToY'] = NaN, _0x2442c0['needFakeBa' + 'nner'] = !0x1, _0x2442c0['isShare'] = !0x1, _0x2442c0['isDisableW' + 'hileNoDela' + 'y'] = !0x1, _0x2442c0['showDelayM' + 'S'] = -0x1, _0x2442c0['_isTime2Sh' + 'owAd'] = !0x1, _0x2442c0['_isShowing' + 'Banner'] = !0x1, _0x2442c0['_isAdEnabl' + 'e'] = !0x1, _0x2442c0['_curRealBa' + 'nnerId'] = 0x0, _0x2442c0['_corverTar' + 'getOriPos'] = void 0x0, _0x2442c0;
                }
                return _0x3a441e(_0x32df3a, Laya['Script']), _0x413e7f(_0x32df3a, [
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['isAdEnable'] = !0x1;
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['isAdEnable'] = !0x0;
                        }
                    },
                    {
                        'key': 'updateCove' + 'rTarget2Po' + 'sYDirectly',
                        'value': function () {
                            if (this['coverTarge' + 't'] && !isNaN(this['coverTarge' + 'tToY'])) {
                                var _0xacefe9 = this['coverTarge' + 't']['getCompone' + 'nt'](_0x45246e);
                                _0xacefe9 && (_0xacefe9['isPause'] = !0x0), this['coverTarge' + 't']['y'] = this['coverTarge' + 'tToY'];
                            }
                        }
                    },
                    {
                        'key': 'onTime2Sho' + 'w',
                        'value': function () {
                            this['_isTime2Sh' + 'owAd'] = !0x0, this['try2ShowAd']();
                        }
                    },
                    {
                        'key': 'try2ShowAd',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x47090c() {
                                var _0x1f5fb5, _0x29aa7d, _0x1ca60c, _0x1438a1, _0x53a97e, _0x186a59 = this;
                                return regeneratorRuntime['wrap'](function (_0x237241) {
                                    for (;;)
                                        switch (_0x237241['prev'] = _0x237241['next']) {
                                        case 0x0:
                                            if (_0x1f5fb5 = _0x77369c['data']['versionCon' + 'fig'], !this['_isShowing' + 'Banner'] && this['_isTime2Sh' + 'owAd']) {
                                                _0x237241['next'] = 0x3;
                                                break;
                                            }
                                            return _0x237241['abrupt']('return');
                                        case 0x3:
                                            if (this['isEnableWr' + 'ongClick'] || !this['hangMS']) {
                                                _0x237241['next'] = 0x5;
                                                break;
                                            }
                                            return _0x237241['abrupt']('return');
                                        case 0x5:
                                            if (!this['isDisableW' + 'hileNoDela' + 'y'] || 0x1 === (null == _0x1f5fb5 ? void 0x0 : _0x1f5fb5['delay'])) {
                                                _0x237241['next'] = 0x7;
                                                break;
                                            }
                                            return _0x237241['abrupt']('return');
                                        case 0x7:
                                            if (_0xce637d['hasBanner']) {
                                                _0x237241['next'] = 0x14;
                                                break;
                                            }
                                            if (_0xce637d['once'](_0x312c52['BANNER_LOA' + 'DED'], this['try2ShowAd'], this), !this['needFakeBa' + 'nner']) {
                                                _0x237241['next'] = 0x13;
                                                break;
                                            }
                                            if (this['_fakeBanne' + 'r']) {
                                                _0x237241['next'] = 0x11;
                                                break;
                                            }
                                            return _0x237241['next'] = 0xd, _0x424f9d['asyncLoadR' + 'es']('sdk_youlin' + 'g/common/p' + 'refab/YLAD' + 'GameBanner' + '2.prefab');
                                        case 0xd:
                                            _0x29aa7d = _0x237241['sent'], this['_fakeBanne' + 'r'] = _0x29aa7d['create'](), this['_fakeBanne' + 'r']['addCompone' + 'nt'](_0x45246e)['stickMode'] = 'bottom_cen' + 'ter';
                                        case 0x11:
                                            _0x237241['next'] = 0x14;
                                            break;
                                        case 0x13:
                                            return _0x237241['abrupt']('return');
                                        case 0x14:
                                            if (this['hangMS'] > 0x0 && Laya['timer']['once'](this['hangMS'], this, this['onTime2Hid' + 'eAd']), this['_isShowing' + 'Banner'] = !0x0, this['doShowAd'](), !this['coverTarge' + 't'] || this['hangMS'] || this['needUpdate' + 'Target2Pos' + 'YDirectly'] && _0x1f5fb5) {
                                                _0x237241['next'] = 0x28;
                                                break;
                                            }
                                            if (this['_corverTar' + 'getOriPos'] || (this['_corverTar' + 'getOriPos'] = new Laya['Point'](this['coverTarge' + 't']['x'], this['coverTarge' + 't']['y'])), _0x1ca60c = 0x0, !_0xce637d['curShowing' + 'Banner']) {
                                                _0x237241['next'] = 0x1f;
                                                break;
                                            }
                                            _0x1438a1 = _0xce637d['curShowing' + 'Banner']['banner']['style']['realHeight'] || _0xce637d['normalBann' + 'erHegiht'], _0x1ca60c = (0x1 - _0x1438a1 / Laya['Browser']['clientHeig' + 'ht']) * Laya['stage']['displayHei' + 'ght'], _0x237241['next'] = 0x24;
                                            break;
                                        case 0x1f:
                                            if (!this['_fakeBanne' + 'r']) {
                                                _0x237241['next'] = 0x23;
                                                break;
                                            }
                                            _0x1ca60c = Laya['stage']['height'] - this['_fakeBanne' + 'r']['adHeight'], _0x237241['next'] = 0x24;
                                            break;
                                        case 0x23:
                                            return _0x237241['abrupt']('return');
                                        case 0x24:
                                            _0x1ca60c = this['coverTarge' + 't']['parent']['globalToLo' + 'cal'](new Laya['Point'](0x0, _0x1ca60c))['y'], isNaN(this['coverTarge' + 'tToY']) || (_0x1ca60c = Math['min'](_0x1ca60c, this['coverTarge' + 'tToY'])), _0x53a97e = (null == _0x1f5fb5 ? void 0x0 : _0x1f5fb5['move_time']) || 0x3e8, Laya['Tween']['to'](this['coverTarge' + 't'], { 'y': _0x1ca60c }, 0x12c, void 0x0, new Laya['Handler'](this, function () {
                                                var _0x1600fc;
                                                return null === (_0x1600fc = _0x186a59['owner']) || void 0x0 === _0x1600fc ? void 0x0 : _0x1600fc['event']('EVENT_Bann' + 'erCoverTar' + 'getMoveCom' + 'plete');
                                            }), _0x53a97e);
                                        case 0x28:
                                        case 'end':
                                            return _0x237241['stop']();
                                        }
                                }, _0x47090c, this);
                            }));
                        }
                    },
                    {
                        'key': 'doShowAd',
                        'value': function () {
                            _0xce637d['hasBanner'] ? this['_curRealBa' + 'nnerId'] = _0xce637d['showBanner']() : this['_fakeBanne' + 'r'] && this['owner']['addChild'](this['_fakeBanne' + 'r']);
                        }
                    },
                    {
                        'key': 'onTime2Hid' + 'eAd',
                        'value': function () {
                            var _0x31aabe;
                            _0xce637d['hideBanner'](this['_curRealBa' + 'nnerId']), null === (_0x31aabe = this['_fakeBanne' + 'r']) || void 0x0 === _0x31aabe || _0x31aabe['removeSelf'](), this['_isShowing' + 'Banner'] = !0x1, this['_curRealBa' + 'nnerId'] = 0x0;
                        }
                    },
                    {
                        'key': 'isEnableWr' + 'ongClick',
                        'get': function () {
                            var _0xfd4e69 = _0x77369c['data']['versionCon' + 'fig'];
                            return 0x1 === (null == _0xfd4e69 ? void 0x0 : _0xfd4e69['delay']) && (!this['isShare'] || 0x1 === _0xfd4e69['share']);
                        }
                    },
                    {
                        'key': 'needUpdate' + 'Target2Pos' + 'YDirectly',
                        'get': function () {
                            var _0x142d60 = _0x77369c['data']['versionCon' + 'fig'];
                            return !this['isEnableWr' + 'ongClick'] || this['isDisableW' + 'hileNoDela' + 'y'] && 0x1 !== (null == _0x142d60 ? void 0x0 : _0x142d60['delay']);
                        }
                    },
                    {
                        'key': 'isAdEnable',
                        'get': function () {
                            return this['_isAdEnabl' + 'e'];
                        },
                        'set': function (_0x789418) {
                            var _0x4481e6;
                            if (this['_isAdEnabl' + 'e'] !== _0x789418) {
                                if (this['_isAdEnabl' + 'e'] = _0x789418, _0x789418) {
                                    this['needUpdate' + 'Target2Pos' + 'YDirectly'] && this['updateCove' + 'rTarget2Po' + 'sYDirectly']();
                                    var _0x26a5e9 = (null === (_0x4481e6 = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x4481e6 ? void 0x0 : _0x4481e6['latency_ti' + 'me']) || 0x3e8;
                                    this['showDelayM' + 'S'] > 0x0 ? _0x26a5e9 = this['showDelayM' + 'S'] : 0x0 === this['showDelayM' + 'S'] && (_0x26a5e9 = 0xc8), _0x26a5e9 > 0x0 ? Laya['timer']['once'](_0x26a5e9, this, this['onTime2Sho' + 'w']) : this['onTime2Sho' + 'w']();
                                } else
                                    _0xce637d['off'](_0x312c52['BANNER_LOA' + 'DED'], this['try2ShowAd'], this), Laya['timer']['clearAll'](this), this['_isTime2Sh' + 'owAd'] = !0x1, this['_isShowing' + 'Banner'] && this['onTime2Hid' + 'eAd']();
                            }
                        }
                    }
                ]), _0x32df3a;
            }(), _0x4eed45 = function (_0x1bd24e) {
                function _0x336659() {
                    return _0x1295b3(this, _0x336659), _0x5971e6(this, _0x35d7e0(_0x336659)['apply'](this, arguments));
                }
                return _0x3a441e(_0x336659, _0x31fd82), _0x413e7f(_0x336659, [
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x31694a) {
                            switch (_0x31694a['currentTar' + 'get']) {
                            case this['_btnHome']:
                                platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                    _0x18c0b8['emit'](_0x2b928a['S2G_RESET_' + 'GAME_READY']), _0x24e798['model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'];
                                });
                                break;
                            case this['_btnPlay']:
                            case this['_btnPlayVe' + 'rify']:
                                this['_controlle' + 'r']['try2ShowBa' + 'ckHome']();
                                break;
                            case this['_btnFight']:
                                _0x3d6d80['shareFrien' + 'd'](0x2);
                                break;
                            case this['_btnContin' + 'ue']:
                                platform['getInstanc' + 'e']()['showReward'](() => {
                                    this['_controlle' + 'r']['submitScor' + 'e'](), _0x18c0b8['emit'](_0x2b928a['S2G_RESET_' + 'GAME_READY']), _0x24e798['model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'];
                                });
                                break;
                            }
                        }
                    },
                    {
                        'key': 'show',
                        'value': function () {
                            this['isShowing'] || console['log']('YLResultRT' + 'View显示'), _0x3a96b3(_0x35d7e0(_0x336659['prototype']), 'show', this)['call'](this), platform['getInstanc' + 'e']()['initList'](this['list_showL' + 'ist']);
                            let _0x145a5e = Laya['LocalStora' + 'ge']['getItem']('Drift-At-W' + 'ill-MaxSco' + 're') ? JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('Drift-At-W' + 'ill-MaxSco' + 're')) : 0x0;
                            _0x145a5e < _0x77369c['data']['curScore'] && Laya['LocalStora' + 'ge']['setItem']('Drift-At-W' + 'ill-MaxSco' + 're', JSON['stringify'](_0x77369c['data']['curScore']));
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                            console['log']('YLResultRT' + 'View显示完毕'), _0x3a96b3(_0x35d7e0(_0x336659['prototype']), 'onShowComp' + 'lete', this)['call'](this);
                        }
                    },
                    {
                        'key': 'hide',
                        'value': function () {
                            this['isShowing'] && console['log']('YLResultRT' + 'View隐藏'), _0x3a96b3(_0x35d7e0(_0x336659['prototype']), 'hide', this)['call'](this);
                        }
                    },
                    {
                        'key': 'onHideComp' + 'lete',
                        'value': function () {
                            console['log']('YLResultRT' + 'View隐藏完毕'), _0x3a96b3(_0x35d7e0(_0x336659['prototype']), 'onHideComp' + 'lete', this)['call'](this);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            var _0x4c232e = _0x77369c['config']['score2Gold'](_0x77369c['data']['curScore']);
                            this['_fontScore']['value'] = _0x4c232e['toString'](), this['_controlle' + 'r']['submitScor' + 'e'](), _0x3a96b3(_0x35d7e0(_0x336659['prototype']), 'onEnable', this)['call'](this);
                        }
                    }
                ]), _0x336659;
            }(), _0x4a6d21 = function (_0x3c9f59) {
                function _0x1c9c96() {
                    var _0x28d6af;
                    return _0x1295b3(this, _0x1c9c96), (_0x28d6af = _0x5971e6(this, _0x35d7e0(_0x1c9c96)['apply'](this, arguments)))['_goldTxt'] = '', _0x28d6af;
                }
                return _0x3a441e(_0x1c9c96, Laya['Sprite']), _0x413e7f(_0x1c9c96, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_fontClip'] = this['getChildBy' + 'Name']('fontClip');
                        }
                    },
                    {
                        'key': 'goldTxt',
                        'get': function () {
                            return this['_goldTxt'];
                        },
                        'set': function (_0x7a4b6c) {
                            this['_goldTxt'] = _0x7a4b6c, this['_fontClip']['value'] = _0x7a4b6c;
                        }
                    }
                ]), _0x1c9c96;
            }(), _0x24644b = function (_0x3f7b40) {
                function _0xfd9300() {
                    var _0x18eb9a;
                    return _0x1295b3(this, _0xfd9300), (_0x18eb9a = _0x5971e6(this, _0x35d7e0(_0xfd9300)['apply'](this, arguments)))['isHero'] = !0x1, _0x18eb9a;
                }
                return _0x3a441e(_0xfd9300, Laya['Script']), _0x413e7f(_0xfd9300, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_owner'] = this['owner'];
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['isHero'] && _0x77369c['data']['on']('gold', this['onHeroGold'], this, !0x0);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            _0x77369c['data']['off']('gold', this['onHeroGold'], this);
                        }
                    },
                    {
                        'key': 'onHeroGold',
                        'value': function () {
                            this['_owner']['goldTxt'] = _0x77369c['data']['gold']['toString']();
                        }
                    }
                ]), _0xfd9300;
            }(), _0x67ba52 = function (_0x11118e) {
                function _0x420e1c() {
                    return _0x1295b3(this, _0x420e1c), _0x5971e6(this, _0x35d7e0(_0x420e1c)['call'](this, 0x3));
                }
                return _0x3a441e(_0x420e1c, _0x1762c5), _0x413e7f(_0x420e1c, [{
                        'key': 'initUI',
                        'value': function () {
                            for (var _0x38b2f7 = 0x0;;) {
                                var _0x274ad8 = this['getChildBy' + 'Name']('ad'['concat'](_0x38b2f7));
                                if (!_0x274ad8)
                                    break;
                                this['_grids']['push'](_0x274ad8), _0x38b2f7++;
                            }
                        }
                    }]), _0x420e1c;
            }(), _0x44e908 = function (_0x1b2709) {
                function _0x37db4c() {
                    var _0x4a16ca;
                    return _0x1295b3(this, _0x37db4c), (_0x4a16ca = _0x5971e6(this, _0x35d7e0(_0x37db4c)['apply'](this, arguments)))['_isShowing'] = void 0x0, _0x4a16ca;
                }
                return _0x3a441e(_0x37db4c, Laya['Sprite']), _0x413e7f(_0x37db4c, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            var _0xafcf48 = this;
                            this['_aniSpark'] = this['getChildBy' + 'Name']('aniSpark');
                            var _0xd5c722 = this['getChildBy' + 'Name']('spHeadPare' + 'nt');
                            this['_spHead'] = _0xd5c722['getChildBy' + 'Name']('spHead'), this['_aniSpark']['on'](Laya['Event']['COMPLETE'], void 0x0, function () {
                                return _0xafcf48['_aniSpark']['visible'] = !0x1;
                            });
                        }
                    },
                    {
                        'key': 'isShowing',
                        'set': function (_0x17269f) {
                            this['_isShowing'] !== _0x17269f && (this['_isShowing'] = _0x17269f, this['visible'] = _0x17269f, _0x17269f ? (this['_aniSpark']['visible'] = !0x0, this['_aniSpark']['play'](0x0, !0x1)) : this['_aniSpark']['stop']());
                        },
                        'get': function () {
                            return this['_isShowing'];
                        }
                    },
                    {
                        'key': 'headUrl',
                        'get': function () {
                            return this['_headUrl'];
                        },
                        'set': function (_0x1995e2) {
                            this['_headUrl'] = _0x1995e2, _0x1995e2 && this['_spHead']['loadImage'](_0x1995e2);
                        }
                    }
                ]), _0x37db4c;
            }(), _0x33b10e = function (_0x1fca98) {
                function _0x51a73d() {
                    var _0x16555c;
                    return _0x1295b3(this, _0x51a73d), (_0x16555c = _0x5971e6(this, _0x35d7e0(_0x51a73d)['apply'](this, arguments)))['_tweeningP' + 'rogress'] = { 'value': 0x0 }, _0x16555c['_isSearchi' + 'ng'] = !0x1, _0x16555c['_grids'] = [], _0x16555c['DURATION_M' + 'S'] = 0xbb8, _0x16555c['MAX'] = _0x77369c['config']['numSearchP' + 'layer'], _0x16555c;
                }
                return _0x3a441e(_0x51a73d, _0x31fd82), _0x413e7f(_0x51a73d, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_grids'] = _0x3791c1['getChildre' + 'nByNameSec' + 'tion'](this['_spView'], 'head', 0x0, _0x44e908, !0x0);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            var _0x4a0d41 = this;
                            this['reset'](), this['_isSearchi' + 'ng'] = !0x0, this['_grids']['forEach'](function (_0x545388, _0x5f14f4) {
                                _0x545388['headUrl'] = _0x4a0d41['_model']['playerHead' + 's'][_0x5f14f4], _0x545388['isShowing'] = !0x1;
                            }), Laya['Tween']['to'](this['_tweeningP' + 'rogress'], {
                                'value': this['MAX'],
                                'update': Laya['Handler']['create'](this, this['onTweenPro' + 'gress'], void 0x0, !0x1)
                            }, this['DURATION_M' + 'S'], void 0x0, Laya['Handler']['create'](this, this['onSearchCo' + 'mplete']));
                        }
                    },
                    {
                        'key': 'onTweenPro' + 'gress',
                        'value': function () {
                            var _0x158cd2 = this['_tweeningP' + 'rogress']['value'];
                            this['_progress']['value'] = _0x158cd2 / this['MAX'];
                            var _0x2a5c09 = (_0x158cd2 >> 0x0) - 0x1;
                            _0x2a5c09 > 0x0 && _0x2a5c09 >= this['_grids']['length'] || (this['_model']['curSearchP' + 'layerIndex'] = _0x2a5c09 + 0x1, this['_grids']['forEach'](function (_0x16ff25, _0x151219) {
                                var _0x37cece = _0x16ff25['isShowing'], _0x4870a1 = _0x151219 <= _0x2a5c09;
                                if (_0x16ff25['isShowing'] = _0x4870a1, _0x37cece !== _0x4870a1) {
                                    var _0x2c11e5 = {
                                        'index': _0x151219,
                                        'headUrl': _0x16ff25['headUrl']
                                    };
                                    _0x3d6d80['vibrate'](!0x0), _0x18c0b8['emit'](_0x2b928a['S2G_PLAYER' + '_SEARCHED'], _0x2c11e5);
                                }
                            }));
                        }
                    },
                    {
                        'key': 'onSearchCo' + 'mplete',
                        'value': function () {
                            return _0x312bd5(this, void 0x0, void 0x0, regeneratorRuntime['mark'](function _0x339b41() {
                                return regeneratorRuntime['wrap'](function (_0x5191a6) {
                                    for (;;)
                                        switch (_0x5191a6['prev'] = _0x5191a6['next']) {
                                        case 0x0:
                                            return this['_tweeningP' + 'rogress']['value'] = this['MAX'], this['onTweenPro' + 'gress'](), _0x5191a6['next'] = 0x4, _0x327b99['sleep'](0x3e8);
                                        case 0x4:
                                            this['_isSearchi' + 'ng'] = !0x1, this['onCloseCli' + 'ck']();
                                        case 0x6:
                                        case 'end':
                                            return _0x5191a6['stop']();
                                        }
                                }, _0x339b41, this);
                            }));
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['reset']();
                        }
                    },
                    {
                        'key': 'reset',
                        'value': function () {
                            this['_isSearchi' + 'ng'] = !0x1, Laya['Tween']['clearAll'](this['_tweeningP' + 'rogress']), this['_tweeningP' + 'rogress']['value'] = 0x0;
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_isSearchi' + 'ng'] || this['_controlle' + 'r']['try2ShowNe' + 'wbie']();
                        }
                    }
                ]), _0x51a73d;
            }(), _0x144f93 = function (_0x1e41b3) {
                function _0x169cb3() {
                    return _0x1295b3(this, _0x169cb3), _0x5971e6(this, _0x35d7e0(_0x169cb3)['apply'](this, arguments));
                }
                return _0x3a441e(_0x169cb3, _0x31fd82), _0x413e7f(_0x169cb3, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_spLeftPan' + 'e']['setTweenIn' + 'fos'](-0x177, -0x63), this['_spRightPa' + 'ne']['setTweenIn' + 'fos'](0x177, -0x45);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            var _0xe85bd8 = _0x77369c['data']['userInfo'] || {}, _0x6018e6 = _0xe85bd8['user_nickn' + 'ame'], _0x27517c = _0xe85bd8['avatar'];
                            this['_spLeftPan' + 'e']['setPlayerI' + 'nfo'](_0x27517c, _0x6018e6, !0x0);
                            var _0x930c82 = this['_model'], _0x5727d1 = _0x930c82['playerHead' + 's'], _0x57e216 = _0x930c82['playerName' + 's'];
                            this['_spRightPa' + 'ne']['setPlayerI' + 'nfo'](_0x3791c1['randomOne'](_0x5727d1), _0x3791c1['randomOne'](_0x57e216), !0x1), this['tween2Show'](), this['_spLeftPan' + 'e']['tween2Show'](), this['_spRightPa' + 'ne']['tween2Show']();
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['reset']();
                        }
                    },
                    {
                        'key': 'reset',
                        'value': function () {
                            var _0x24ded8;
                            Laya['timer']['clear'](this, this['beginTween' + 'PiPei']), Laya['timer']['clear'](this, this['tween2Hide']), Laya['Tween']['clearAll'](this['_imgDuiZha' + 'n']), Laya['Tween']['clearAll'](this['_spPiPei']), null === (_0x24ded8 = this['_tlPiPeiYo' + 'yo']) || void 0x0 === _0x24ded8 || _0x24ded8['destroy'](), this['_tlPiPeiYo' + 'yo'] = void 0x0, this['_spModal'] && (Laya['Tween']['clearAll'](this['_spModal']), this['_spModal']['alpha'] = this['_modalOrig' + 'Alpha']);
                        }
                    },
                    {
                        'key': 'tween2Show',
                        'value': function () {
                            this['reset'](), this['_imgDuiZha' + 'n']['scale'](0x2, 0x2), this['_imgDuiZha' + 'n']['alpha'] = 0x0, this['_spPiPei']['alpha'] = 0x0, Laya['Tween']['to'](this['_imgDuiZha' + 'n'], {
                                'scaleX': 0x1,
                                'scaleY': 0x1,
                                'alpha': 0x1
                            }, 0x12c, Laya['Ease']['expoIn'], void 0x0, 0xc8), Laya['timer']['once'](0xc8, this, this['beginTween' + 'PiPei']), Laya['timer']['once'](0x7d0, this, this['tween2Hide']);
                        }
                    },
                    {
                        'key': 'tween2Hide',
                        'value': function () {
                            this['reset'](), this['_spPiPei']['alpha'] = 0x1, Laya['Tween']['to'](this['_spModal'], { 'alpha': 0x0 }, 0x1f4, Laya['Ease']['expoOut'], Laya['Handler']['create'](this, this['onAllHideC' + 'omplete'])), Laya['Tween']['to'](this['_spPiPei'], { 'alpha': 0x0 }, 0x12c, Laya['Ease']['expoOut']), Laya['Tween']['to'](this['_imgDuiZha' + 'n'], {
                                'alpha': 0x0,
                                'scale': 0.1
                            }, 0xc8, Laya['Ease']['expoOut']), this['_spLeftPan' + 'e']['tween2Hide'](), this['_spRightPa' + 'ne']['tween2Hide']();
                        }
                    },
                    {
                        'key': 'onAllHideC' + 'omplete',
                        'value': function () {
                            this['_controlle' + 'r']['try2ShowNe' + 'wbie']();
                        }
                    },
                    {
                        'key': 'beginTween' + 'PiPei',
                        'value': function () {
                            var _0x1e0f91 = new Laya['TimeLine']();
                            _0x1e0f91['to'](this['_spPiPei'], { 'alpha': 0x1 }, 0x1f4, Laya['Ease']['sineIn']), _0x1e0f91['to'](this['_spPiPei'], { 'alpha': 0x0 }, 0x1f4, Laya['Ease']['sineOut']), _0x1e0f91['play'](void 0x0, !0x0), this['_tlPiPeiYo' + 'yo'] = _0x1e0f91;
                        }
                    }
                ]), _0x169cb3;
            }(), _0x115036 = function (_0x4d39b2) {
                function _0x5bfd87() {
                    var _0x44cb70;
                    return _0x1295b3(this, _0x5bfd87), (_0x44cb70 = _0x5971e6(this, _0x35d7e0(_0x5bfd87)['apply'](this, arguments)))['_headUrl'] = '', _0x44cb70['_name'] = '', _0x44cb70;
                }
                return _0x3a441e(_0x5bfd87, Laya['Sprite']), _0x413e7f(_0x5bfd87, [
                    {
                        'key': 'setPlayerI' + 'nfo',
                        'value': function (_0x402c43, _0x337bcb, _0x2561e4) {
                            this['_headUrl'] = _0x402c43, this['_name'] = _0x337bcb, this['_isMe'] = _0x2561e4, this['_head']['headUrl'] = _0x402c43, this['_spName']['visible'] = !!_0x337bcb, _0x337bcb && (this['_txtName']['text'] = _0x5f41c7['truncate'](_0x337bcb, 0x7, '..'));
                        }
                    },
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_initPos'] = {
                                'x': this['x'],
                                'y': this['y']
                            }, this['_spPlayer'] = this['getChildBy' + 'Name']('spPlayer'), this['_spName'] = this['_spPlayer']['getChildBy' + 'Name']('spName'), this['_txtName'] = this['_spName']['getChildBy' + 'Name']('txtName'), this['_head'] = this['_spPlayer']['getChildBy' + 'Name']('spHead');
                        }
                    },
                    {
                        'key': 'reset',
                        'value': function () {
                            var _0x34f7e3;
                            Laya['timer']['clear'](this, this['onHit']), null === (_0x34f7e3 = this['_tlAppear']) || void 0x0 === _0x34f7e3 || _0x34f7e3['destroy'](), this['_tlAppear'] = void 0x0, Laya['Tween']['clearAll'](this);
                        }
                    },
                    {
                        'key': 'setTweenIn' + 'fos',
                        'value': function (_0x545f99, _0x3f50b0) {
                            this['_toPos'] = {
                                'x': _0x545f99,
                                'y': _0x3f50b0
                            };
                        }
                    },
                    {
                        'key': 'tween2Hide',
                        'value': function () {
                            this['reset'](), Laya['Tween']['to'](this, { 'x': this['_initPos']['x'] }, 0xc8, Laya['Ease']['expoOut']);
                        }
                    },
                    {
                        'key': 'tween2Show',
                        'value': function () {
                            this['reset'](), this['x'] = this['_initPos']['x'], this['y'] = this['_initPos']['y'];
                            var _0x22a41b = new Laya['TimeLine']();
                            Laya['timer']['once'](0xc8, this, this['onHit']), _0x22a41b['to'](this, { 'x': this['_toPos']['x'] }, 0xc8, Laya['Ease']['expoIn']), _0x22a41b['to'](this, { 'y': this['_toPos']['y'] }, 0x64, void 0x0, 0xc8), _0x22a41b['play']();
                        }
                    },
                    {
                        'key': 'onHit',
                        'value': function () {
                            if (!this['_isMe']) {
                                _0x3d6d80['vibrate'](!0x1);
                                var _0xfbf186 = {
                                    'headUrl': this['_headUrl'],
                                    'index': 0x0,
                                    'name': this['_name']
                                };
                                _0x18c0b8['emit'](_0x2b928a['S2G_PLAYER' + '_SEARCHED'], _0xfbf186);
                            }
                        }
                    }
                ]), _0x5bfd87;
            }(), _0x4cbfb5 = function () {
                function _0x5e6de4() {
                    _0x1295b3(this, _0x5e6de4);
                }
                return _0x413e7f(_0x5e6de4, null, [
                    {
                        'key': 'bindVisibl' + 'e',
                        'value': function (_0x5847e4, _0x15b545, _0x160903) {
                            var _0x2bdcd3 = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] && arguments[0x3], _0x39a25d = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] ? arguments[0x4] : void 0x0, _0x5c6875 = arguments['length'] > 0x5 && void 0x0 !== arguments[0x5] ? arguments[0x5] : void 0x0;
                            _0x5c6875 = _0x5c6875 || _0x5847e4, _0x15b545['on'](_0x160903, function () {
                                var _0x5c47bb = !!_0x15b545[_0x160903];
                                void 0x0 !== _0x39a25d && (_0x5c47bb = _0x15b545[_0x160903] === _0x39a25d), _0x2bdcd3 && (_0x5c47bb = !_0x5c47bb), _0x5847e4['visible'] = _0x5c47bb;
                            }, _0x5c6875, !0x0);
                        }
                    },
                    {
                        'key': 'bindFuncti' + 'onNCall',
                        'value': function (_0x413bd4, _0x28092e, _0x4e2370, _0x12c6f1) {
                            _0x413bd4['on'](_0x28092e, _0x4e2370, _0x12c6f1), _0x4e2370['call'](_0x12c6f1);
                        }
                    }
                ]), _0x5e6de4;
            }(), _0x3e9b13 = function (_0x5ebecd) {
                function _0x326842() {
                    var _0xa5a0b8;
                    return _0x1295b3(this, _0x326842), (_0xa5a0b8 = _0x5971e6(this, _0x35d7e0(_0x326842)['apply'](this, arguments)))['_imgAvatar' + 'OrgPos'] = new Laya['Vector2'](), _0xa5a0b8;
                }
                return _0x3a441e(_0x326842, _0x31fd82), _0x413e7f(_0x326842, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_imgAvatar' + 'OrgPos']['setValue'](this['_imgAvatar']['x'], this['_imgAvatar']['y']), _0x4cbfb5['bindVisibl' + 'e'](this['_spCheckVi' + 'deoUseSkin'], this['_model'], 'isVideoUse' + 'Skin'), _0x4cbfb5['bindVisibl' + 'e'](this['_btnTempUs' + 'e'], this['_model'], 'isVideoUse' + 'Skin'), _0x4cbfb5['bindVisibl' + 'e'](this['_btnTempNo' + 'tUse'], this['_model'], 'isVideoUse' + 'Skin', !0x0), this['_model']['on']('previewSho' + 'pItem', this['onPreviewS' + 'hopItem'], this, !0x0);
                        }
                    },
                    {
                        'key': 'onPreviewS' + 'hopItem',
                        'value': function () {
                            var _0x11404b = this['_model']['previewSho' + 'pItem'];
                            _0x11404b && (this['_imgAvatar']['skin'] = _0x11404b['previewPat' + 'h'], this['_imgAvatar']['x'] = this['_imgAvatar' + 'OrgPos']['x'] + (_0x11404b['iconOffset' + 'X'] || 0x0), this['_imgAvatar']['y'] = this['_imgAvatar' + 'OrgPos']['y'] + (_0x11404b['iconOffset' + 'Y'] || 0x0));
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x32a0c4) {
                            switch (_0x32a0c4['currentTar' + 'get']) {
                            case this['_btnTempUs' + 'e']:
                            case this['_btnVideoU' + 'se']:
                                this['_controlle' + 'r']['watchVideo' + '2UseSkin']();
                                break;
                            case this['_btnTempNo' + 'tUse']:
                                this['_controlle' + 'r']['try2ShowSe' + 'archPlayer']();
                                break;
                            case this['_btnCheckB' + 'oxVideo']:
                                this['_model']['isVideoUse' + 'Skin'] = !this['_model']['isVideoUse' + 'Skin'];
                            }
                        }
                    }
                ]), _0x326842;
            }(), _0xbb72e3 = function (_0x369d14) {
                function _0x4a4fb1() {
                    var _0x20e563;
                    return _0x1295b3(this, _0x4a4fb1), (_0x20e563 = _0x5971e6(this, _0x35d7e0(_0x4a4fb1)['apply'](this, arguments)))['_imgAvatar' + 'OrgPos'] = new Laya['Vector2'](), _0x20e563['_tweenObj'] = { 'value': 0x0 }, _0x20e563;
                }
                return _0x3a441e(_0x4a4fb1, _0x31fd82), _0x413e7f(_0x4a4fb1, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            var _0x559006 = _0x77369c['config'], _0xeff86d = _0x559006['isVerify'], _0x1e7597 = _0x559006['storeItems'], _0x5c1fc5 = _0x559006['storeVideo' + 'UnlockGold'];
                            this['_btnVideoU' + 'se']['visible'] = !_0xeff86d, _0xeff86d && (this['_btnRandom']['x'] = 0x0), this['_imgAvatar' + 'OrgPos']['setValue'](this['_imgAvatar']['x'], this['_imgAvatar']['y']), this['_list']['vScrollBar' + 'Skin'] = '', this['_list']['dataSource'] = _0x1e7597, this['_list']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updateItem']), this['_goldPaneV' + 'ideo']['goldTxt'] = _0x5c1fc5['toString'](), this['_model']['on']('curSelecte' + 'dInStore', this['onSelcted'], this, !0x0), this['_model']['on']('storeUnloc' + 'kResult', this['onStoreUnl' + 'ockResult'], this), _0x77369c['data']['on']('ownStoreIt' + 'emIds', this['onOwnStore' + 'ItemIds'], this, !0x0), Laya['stage']['on'](Laya['Event']['RESIZE'], this, this['calListHei' + 'ght']), this['_imgBg']['once'](Laya['Event']['LOADED'], this, this['onBgLoaded']), this['_controlle' + 'r']['findCurSel' + 'ectedSkinI' + 'nStore'](), this['onBgLoaded'](), this['calListHei' + 'ght']();
                        }
                    },
                    {
                        'key': 'onBgLoaded',
                        'value': function () {
                            this['_imgBg']['height'] > 0x0 && Laya['stage']['displayHei' + 'ght'] > this['_imgBg']['height'] && (this['_imgBg']['height'] = Laya['stage']['displayHei' + 'ght']);
                        }
                    },
                    {
                        'key': 'onOwnStore' + 'ItemIds',
                        'value': function () {
                            var _0x3a691c = this['_controlle' + 'r']['calStoreRa' + 'ndomUnlock' + 'Gold']();
                            _0x3a691c < 0x0 && (_0x3a691c = 0x0), this['_goldPaneR' + 'andom']['goldTxt'] = _0x3a691c['toString']();
                        }
                    },
                    {
                        'key': 'onStoreUnl' + 'ockResult',
                        'value': function () {
                            var _0x435d3d = this, _0x4f171e = this['_model']['storeUnloc' + 'kResult'];
                            if (_0x4f171e) {
                                var _0x2430b0 = this['_controlle' + 'r']['getStoreIt' + 'emsCanBuy'](), _0x2ade56 = _0x2430b0['length'];
                                if (0x1 === _0x2ade56)
                                    this['_controlle' + 'r']['doUnlockSt' + 'oreItem'](_0x4f171e);
                                else {
                                    _0x3791c1['remove'](_0x2430b0, _0x4f171e['item']), _0x3791c1['disturb'](_0x2430b0), _0x2430b0['push'](_0x4f171e['item']), this['_tweenObj']['value'] = 0x0;
                                    var _0x518033 = 0x4;
                                    _0x2ade56 > 0x6 ? _0x518033 = 0x2 : _0x2ade56 > 0x3 && (_0x518033 = 0x3);
                                    for (var _0x3f6e93 = [], _0x13d536 = 0x0; _0x13d536 < _0x518033; _0x13d536++)
                                        _0x3f6e93 = _0x3f6e93['concat'](_0x2430b0);
                                    _0x388c8d['isWorldCan' + 'Click'] = !0x1, Laya['Tween']['to'](this['_tweenObj'], {
                                        'value': 0x64,
                                        'update': new Laya['Handler'](this, function () {
                                            var _0x607996 = Math['ceil'](_0x435d3d['_tweenObj']['value']) / 0x64;
                                            _0x435d3d['_model']['curSelecte' + 'dInStore'] = _0x3f6e93[_0x3f6e93['length'] * _0x607996 >> 0x0];
                                        })
                                    }, 0xbb8, Laya['Ease']['sineInOut'], Laya['Handler']['create'](void 0x0, function () {
                                        _0x388c8d['isWorldCan' + 'Click'] = !0x0, _0x435d3d['_controlle' + 'r']['doUnlockSt' + 'oreItem'](_0x4f171e);
                                    }));
                                }
                            }
                        }
                    },
                    {
                        'key': 'calListHei' + 'ght',
                        'value': function () {
                            var _0x2ff925 = this['_spBottomB' + 'tns']['getCompone' + 'nt'](_0x45246e), _0x448051 = parseInt(_0x2ff925['offsetY']) - 0x84, _0xac4ed8 = this['_list']['globalToLo' + 'cal'](new Laya['Point'](0x0, Laya['stage']['displayHei' + 'ght'] + _0x448051));
                            this['_list']['height'] = _0xac4ed8['y'], this['_listBotto' + 'mDecorator']['y'] = this['_list']['y'] + _0xac4ed8['y'] + 0x4;
                        }
                    },
                    {
                        'key': 'onSelcted',
                        'value': function () {
                            var _0x5c30c1 = this['_model']['curSelecte' + 'dInStore'];
                            _0x5c30c1 && (this['_imgAvatar']['skin'] = _0x5c30c1['previewPat' + 'h'], this['_imgAvatar']['x'] = this['_imgAvatar' + 'OrgPos']['x'] + (_0x5c30c1['iconOffset' + 'X'] || 0x0), this['_imgAvatar']['y'] = this['_imgAvatar' + 'OrgPos']['y'] + (_0x5c30c1['iconOffset' + 'Y'] || 0x0));
                        }
                    },
                    {
                        'key': 'updateItem',
                        'value': function (_0x53fd6b) {
                            _0x53fd6b['data'] = _0x53fd6b['dataSource'];
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x12e1f3) {
                            switch (_0x12e1f3['currentTar' + 'get']) {
                            case this['_btnRandom']:
                                this['_controlle' + 'r']['randomUnlo' + 'ckStoreIte' + 'm']();
                                break;
                            case this['_btnVideoU' + 'se']:
                                this['_controlle' + 'r']['watchVideo' + '2GetGold']();
                            }
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                this['_controlle' + 'r']['closeStore' + 'Try2UseSki' + 'n']();
                            });
                        }
                    }
                ]), _0x4a4fb1;
            }(), _0x464b67 = function (_0x1cd06a) {
                function _0x3db75e() {
                    var _0xfdaf56;
                    return _0x1295b3(this, _0x3db75e), (_0xfdaf56 = _0x5971e6(this, _0x35d7e0(_0x3db75e)['apply'](this, arguments)))['_isSelcete' + 'd'] = !0x1, _0xfdaf56;
                }
                return _0x3a441e(_0x3db75e, Laya['Sprite']), _0x413e7f(_0x3db75e, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_model'] = _0x24e798['model'], this['_controlle' + 'r'] = _0x24e798['controller'];
                            var _0x55b0d6 = this['getChildBy' + 'Name']('spView');
                            this['_spFrameNo' + 'rmal'] = _0x55b0d6['getChildBy' + 'Name']('spFrameNor' + 'mal'), this['_spFrameSe' + 'lected'] = _0x55b0d6['getChildBy' + 'Name']('spFrameSel' + 'ected'), this['_imgIcon'] = _0x55b0d6['getChildBy' + 'Name']('imgIcon'), this['_imgIconOr' + 'gPos'] = new Laya['Point'](this['_imgIcon']['x'], this['_imgIcon']['y']), this['_spLock'] = _0x55b0d6['getChildBy' + 'Name']('spLock'), this['addCompone' + 'nt'](_0x366fd2)['zoomTarget'] = _0x55b0d6, _0x424f9d['setVisible' + 'AndAlpha'](this['_spFrameSe' + 'lected'], !0x1), _0x424f9d['addClickLi' + 'stener'](this, this['onGridClic' + 'k'], this), this['_model']['on']('curSelecte' + 'dInStore', this['onSelected' + 'Changed'], this), _0x77369c['data']['on']('ownStoreIt' + 'emIds', this['onOwnStore' + 'ItemIds'], this);
                        }
                    },
                    {
                        'key': 'onOwnStore' + 'ItemIds',
                        'value': function () {
                            this['_spLock']['visible'] = !!this['data'] && !this['_controlle' + 'r']['isStoreIte' + 'mBought'](this['data']);
                        }
                    },
                    {
                        'key': 'onGridClic' + 'k',
                        'value': function () {
                            this['_model']['curSelecte' + 'dInStore'] = this['_data'];
                        }
                    },
                    {
                        'key': 'onSelected' + 'Changed',
                        'value': function () {
                            var _0x5d4a80 = this, _0x1fac7e = !!this['_data'] && this['_model']['curSelecte' + 'dInStore'] === this['_data'];
                            _0x1fac7e !== this['_isSelcete' + 'd'] && (this['_isSelcete' + 'd'] = _0x1fac7e, this['_spFrameNo' + 'rmal']['visible'] = !0x0, this['_spFrameSe' + 'lected']['visible'] = !0x0, Laya['Tween']['to'](this['_spFrameSe' + 'lected'], { 'alpha': _0x1fac7e ? 0x1 : 0x0 }, 0xc8, void 0x0, Laya['Handler']['create'](void 0x0, function () {
                                _0x5d4a80['_spFrameSe' + 'lected']['visible'] = _0x5d4a80['_isSelcete' + 'd'], _0x5d4a80['_spFrameNo' + 'rmal']['visible'] = !_0x5d4a80['_isSelcete' + 'd'];
                            }), void 0x0, !0x0));
                        }
                    },
                    {
                        'key': 'data',
                        'get': function () {
                            return this['_data'];
                        },
                        'set': function (_0x19336a) {
                            this['_data'] = _0x19336a, _0x19336a && (this['_imgIcon']['skin'] = _0x19336a['previewPat' + 'h'], this['_imgIcon']['x'] = this['_imgIconOr' + 'gPos']['x'] + (_0x19336a['gridOffset' + 'X'] || 0x0), this['_imgIcon']['y'] = this['_imgIconOr' + 'gPos']['y'] + (_0x19336a['gridOffset' + 'Y'] || 0x0), this['onOwnStore' + 'ItemIds']()), this['onSelected' + 'Changed']();
                        }
                    }
                ]), _0x3db75e;
            }(), _0x4e9001 = function (_0xc584a4) {
                function _0x695ca7() {
                    var _0x49dfad;
                    return _0x1295b3(this, _0x695ca7), (_0x49dfad = _0x5971e6(this, _0x35d7e0(_0x695ca7)['apply'](this, arguments)))['_hasRandom' + 'ClickApp'] = !0x1, _0x49dfad['category'] = 0x5, _0x49dfad['_listScrol' + 'lY'] = 0x0, _0x49dfad['tweenDurat' + 'ionMSPerRa' + 'w'] = 0x3e8, _0x49dfad['_datas'] = [], _0x49dfad['_bottomIte' + 'mRelatedRo' + 'wIndex'] = 0x0, _0x49dfad['_hangDurat' + 'ionMS'] = 0x7d0, _0x49dfad['_rowArea'] = 0xa, _0x49dfad;
                }
                return _0x3a441e(_0x695ca7, _0x31fd82), _0x413e7f(_0x695ca7, [
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_controlle' + 'r']['try2ShowRe' + 'sult']();
                        }
                    },
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_btnClose']['getCompone' + 'nt'](_0x366fd2)['notZoom'] = !0x0, this['_list']['vScrollBar' + 'Skin'] = '', this['_listScrol' + 'lBar'] = this['_list']['scrollBar'], this['_list']['dataSource'] = [], this['_list']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updateItem']);
                        }
                    },
                    {
                        'key': 'onResize',
                        'value': function () {
                            var _0x29778f = Laya['stage']['displayHei' + 'ght'] - this['_list']['y'];
                            this['_list']['height'] = _0x29778f, this['_rowArea'] = _0x29778f / 0x94 >> 0x0;
                        }
                    },
                    {
                        'key': 'onAppListD' + 'ic',
                        'value': function () {
                            var _0x54fd8a = _0x77369c['data']['appListDic'][this['category']] || [];
                            _0x54fd8a['forEach'](function (_0x5506e3) {
                                void 0x0 === _0x5506e3['__isStar'] && (_0x5506e3['__isStar'] = Math['random']() > 0.5, _0x5506e3['__pplPlay'] = _0x17edad['randomBetw' + 'een'](0x1388, 0x186a0) >> 0x0);
                            }), this['_list']['dataSource'] = _0x54fd8a, this['_datas'] = _0x54fd8a, this['_bottomIte' + 'mRelatedRo' + 'wIndex'] = this['calRow'](this['_datas']['length'] - 0x1) - this['_rowArea'] + 0x2, this['tween2Bott' + 'om'](), this['try2AutoCl' + 'ickOneApp']();
                        }
                    },
                    {
                        'key': 'onScrollCh' + 'anged',
                        'value': function () {
                            this['_listScrol' + 'lBar'] && !_0x17edad['isEqual'](this['_listScrol' + 'lY'], this['_listScrol' + 'lBar']['value']) && (this['_listScrol' + 'lY'] = this['_listScrol' + 'lBar']['value'], this['_spListHea' + 'der']['y'] = -this['_listScrol' + 'lY']);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            _0x77369c['data']['on']('appListDic', this['onAppListD' + 'ic'], this, !0x0), Laya['stage']['on'](Laya['Event']['RESIZE'], this, this['onResize']), this['_list']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'n']), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']), this['onResize']();
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            _0x77369c['data']['off']('appListDic', this['onAppListD' + 'ic'], this), Laya['stage']['off'](Laya['Event']['RESIZE'], this, this['onResize']), this['_list']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'n']), Laya['stage']['off'](Laya['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']), this['_hasRandom' + 'ClickApp'] = !0x1, this['clearMyTim' + 'ers']();
                        }
                    },
                    {
                        'key': 'onMouseDow' + 'n',
                        'value': function () {
                            this['clearMyTim' + 'ers']();
                        }
                    },
                    {
                        'key': 'onStageMou' + 'seUp',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](0x3e8, this, this['checkAutoS' + 'croll']);
                        }
                    },
                    {
                        'key': 'clearMyTim' + 'ers',
                        'value': function () {
                            Laya['timer']['clear'](this, this['doTween2To' + 'p']), Laya['timer']['clear'](this, this['doTween2Bo' + 'ttom']), Laya['timer']['clear'](this, this['checkAutoS' + 'croll']);
                        }
                    },
                    {
                        'key': 'doTween2Bo' + 'ttom',
                        'value': function () {
                            var _0x1b110e = this['_bottomIte' + 'mRelatedRo' + 'wIndex'];
                            this['_list']['tweenTo'](_0x1b110e, this['calAutoScr' + 'ollDuratio' + 'nMS'](this['_bottomIte' + 'mRelatedRo' + 'wIndex']), new Laya['Handler'](this, this['tween2Top']));
                        }
                    },
                    {
                        'key': 'tween2Bott' + 'om',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](this['_hangDurat' + 'ionMS'], this, this['doTween2Bo' + 'ttom']);
                        }
                    },
                    {
                        'key': 'tween2Top',
                        'value': function () {
                            this['needAutoSc' + 'roll'] && Laya['timer']['once'](this['_hangDurat' + 'ionMS'], this, this['doTween2To' + 'p']);
                        }
                    },
                    {
                        'key': 'doTween2To' + 'p',
                        'value': function () {
                            var _0x4a296b = this['calRow'](0x0);
                            this['_list']['tweenTo'](0x0, this['calAutoScr' + 'ollDuratio' + 'nMS'](_0x4a296b), new Laya['Handler'](this, this['tween2Bott' + 'om']));
                        }
                    },
                    {
                        'key': 'calAutoScr' + 'ollDuratio' + 'nMS',
                        'value': function (_0x460b49) {
                            var _0x545730 = this['calRow'](this['_list']['startIndex']);
                            return (Math['abs'](_0x545730 - _0x460b49) || 0x1) * this['tweenDurat' + 'ionMSPerRa' + 'w'];
                        }
                    },
                    {
                        'key': 'checkAutoS' + 'croll',
                        'value': function () {
                            this['calRow'](this['_list']['startIndex']) >= 0.5 * this['_bottomIte' + 'mRelatedRo' + 'wIndex'] ? this['doTween2To' + 'p']() : this['doTween2Bo' + 'ttom']();
                        }
                    },
                    {
                        'key': 'calRow',
                        'value': function (_0x241274) {
                            return _0x241274 / this['_list']['repeatX'] >> 0x0;
                        }
                    },
                    {
                        'key': 'try2AutoCl' + 'ickOneApp',
                        'value': function () {
                            var _0x55fd13;
                            if (!this['_hasRandom' + 'ClickApp'] && (null === (_0x55fd13 = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x55fd13 ? void 0x0 : _0x55fd13['push_video'])) {
                                var _0x2e43ea = this['_list']['dataSource'] || [];
                                _0x2e43ea['length'] && (this['_hasRandom' + 'ClickApp'] = !0x0, this['_controlle' + 'r']['gotoApp'](_0x3791c1['randomOne'](_0x2e43ea)));
                            }
                        }
                    },
                    {
                        'key': 'updateItem',
                        'value': function (_0x44fe10, _0x558660) {
                            _0x44fe10['data'] = _0x44fe10['dataSource'], _0x44fe10['index'] = _0x558660, _0x44fe10['zOrder'] = this['_datas']['length'] - _0x558660;
                        }
                    },
                    {
                        'key': 'needAutoSc' + 'roll',
                        'get': function () {
                            return this['_datas']['length'] > this['_list']['repeatX'] * this['_rowArea'];
                        }
                    }
                ]), _0x695ca7;
            }(), _0xa5e76b = function (_0x1e6f1c) {
                function _0x4974b() {
                    var _0x235fe4;
                    return _0x1295b3(this, _0x4974b), (_0x235fe4 = _0x5971e6(this, _0x35d7e0(_0x4974b)['apply'](this, arguments)))['_controlle' + 'r'] = _0x24e798['controller'], _0x235fe4['_imgBgs'] = [], _0x235fe4['_index'] = -0x1, _0x235fe4;
                }
                return _0x3a441e(_0x4974b, Laya['Sprite']), _0x413e7f(_0x4974b, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_imgBgs'] = _0x3791c1['getChildre' + 'nByNameSec' + 'tion'](this, 'imgBg', 0x0, void 0x0, !0x0), this['_spStar'] = this['getChildBy' + 'Name']('spStar'), this['_txtName'] = this['getChildBy' + 'Name']('txtName'), this['_txtPpl'] = this['getChildBy' + 'Name']('txtPpl'), this['_imgIcon'] = this['getChildBy' + 'Name']('imgIcon'), _0x424f9d['addClickLi' + 'stener'](this, this['onGridClic' + 'k'], this);
                        }
                    },
                    {
                        'key': 'onGridClic' + 'k',
                        'value': function () {
                            this['_controlle' + 'r']['gotoApp'](this['_data']);
                        }
                    },
                    {
                        'key': 'index',
                        'get': function () {
                            return this['_index'];
                        },
                        'set': function (_0x52a769) {
                            if (this['_index'] !== _0x52a769) {
                                this['_index'] = _0x52a769;
                                var _0x4f0490 = this['_imgBgs']['length'];
                                this['_imgBgs']['forEach'](function (_0xb13d5a, _0xbd7c47) {
                                    return _0xb13d5a['visible'] = _0x52a769 % _0x4f0490 === _0xbd7c47;
                                });
                            }
                        }
                    },
                    {
                        'key': 'data',
                        'get': function () {
                            return this['_data'];
                        },
                        'set': function (_0x23553c) {
                            if (this['_data'] = _0x23553c, _0x23553c) {
                                var _0x411e84 = _0x23553c['__isStar'], _0x16e4b2 = _0x23553c['__pplPlay'], _0x335d9d = _0x23553c['app_name'], _0xabc870 = _0x23553c['app_img'];
                                this['_spStar']['visible'] = _0x411e84, this['_txtName']['text'] = _0x335d9d, this['_txtPpl']['text'] = ''['concat'](_0x16e4b2, '人在玩'), this['_imgIcon']['skin'] = _0xabc870;
                            }
                        }
                    }
                ]), _0x4974b;
            }(), _0x4aee31 = function (_0x2aaa29) {
                function _0x26b828() {
                    return _0x1295b3(this, _0x26b828), _0x5971e6(this, _0x35d7e0(_0x26b828)['apply'](this, arguments));
                }
                return _0x3a441e(_0x26b828, _0x31fd82), _0x413e7f(_0x26b828, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_model']['on']('percentOnB' + 'oxClick', this['onPercent'], this), _0x424f9d['addClickLi' + 'stener'](this['_spHandCli' + 'ck'], this['onHandClic' + 'k'], this);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['onPercent'](), this['_model']['boxClickNu' + 'mber'] = 0x0, Laya['timer']['loop'](0x64, this, this['rotateBG']);
                        }
                    },
                    {
                        'key': 'onPercent',
                        'value': function () {
                            this['_spProgres' + 'sPane']['percent'] = this['_model']['percentOnB' + 'oxClick'];
                        }
                    },
                    {
                        'key': 'rotateBG',
                        'value': function () {
                            this['_boxLIght']['rotation'] += 0x5;
                        }
                    },
                    {
                        'key': 'onHandClic' + 'k',
                        'value': function () {
                            var _0x157699 = this;
                            this['_controlle' + 'r']['boxClick'](), this['_treasureB' + 'ox']['scale'](1.4, 1.4), Laya['timer']['once'](0xc8, this, function () {
                                _0x157699['_treasureB' + 'ox']['scale'](1.2, 1.2);
                            });
                        }
                    }
                ]), _0x26b828;
            }(), _0x366888 = function (_0x34e37a) {
                function _0x535c34() {
                    return _0x1295b3(this, _0x535c34), _0x5971e6(this, _0x35d7e0(_0x535c34)['apply'](this, arguments));
                }
                return _0x3a441e(_0x535c34, _0x31fd82), _0x413e7f(_0x535c34, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_isClickMo' + 'dalClose'] = !0x1;
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['height'] = Laya['stage']['height'], this['width'] = Laya['stage']['width'];
                            var _0x26b912 = _0x77369c['data']['versionCon' + 'fig'];
                            null == _0x26b912 || _0x26b912['control_ms'], (this['_btnRandom' + 'Start']['visible'] = !0x1, this['_btnContin' + 'ue']['visible'] = !0x0);
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                            var _0x21b03a;
                            _0x3a96b3(_0x35d7e0(_0x535c34['prototype']), 'onShowComp' + 'lete', this)['call'](this), (null === (_0x21b03a = _0x77369c['data']) || void 0x0 === _0x21b03a ? void 0x0 : _0x21b03a['versionCon' + 'fig']) && 0x0 == _0x77369c['data']['versionCon' + 'fig']['show_ad'] && (console['log']('是否为黑名单场景值\x20' + '：', _0x77369c['data']['isSceneBla' + 'cklist']), _0x77369c['data']['isSceneBla' + 'cklist'] && (this['onCloseCli' + 'ck'](), _0x388c8d['setForceWo' + 'rldCanClic' + 'k']()));
                        }
                    },
                    {
                        'key': 'switchBtn',
                        'value': function () {
                            this['_btnRandom' + 'Start']['visible'] = !this['_btnRandom' + 'Start']['visible'], this['_btnContin' + 'ue']['visible'] = !this['_btnContin' + 'ue']['visible'];
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            _0x77369c['data']['isOnGame'] ? this['_controlle' + 'r']['doGameFail']() : this['_controlle' + 'r']['try2ShowBe' + 'ginGame']();
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x73c26a) {
                            var _0x1f44a3, _0x390546;
                            switch (_0x73c26a['currentTar' + 'get']) {
                            case this['_btnRandom' + 'Start']:
                                this['try2AutoCl' + 'ickOneApp']();
                                break;
                            case this['_btnContin' + 'ue']:
                                _0x77369c['data']['isOnGame'] ? this['_controlle' + 'r']['doGameFail']() : 0x1 == (null === (_0x390546 = null === (_0x1f44a3 = _0x77369c['data']) || void 0x0 === _0x1f44a3 ? void 0x0 : _0x1f44a3['versionCon' + 'fig']) || void 0x0 === _0x390546 ? void 0x0 : _0x390546['derive_one']) ? this['try2AutoCl' + 'ickOneApp']() : this['_controlle' + 'r']['try2ShowBe' + 'ginGame']();
                            }
                        }
                    },
                    {
                        'key': 'try2AutoCl' + 'ickOneApp',
                        'value': function () {
                            var _0x526826 = this['_list']['dataSource'] || [];
                            _0x526826['length'] && this['_controlle' + 'r']['gotoApp'](_0x3791c1['randomOne'](_0x526826));
                        }
                    }
                ]), _0x535c34;
            }(), _0x2fa64d = function (_0x346fb8) {
                function _0x11945b() {
                    return _0x1295b3(this, _0x11945b), _0x5971e6(this, _0x35d7e0(_0x11945b)['apply'](this, arguments));
                }
                return _0x3a441e(_0x11945b, _0x31fd82), _0x413e7f(_0x11945b, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_isClickMo' + 'dalClose'] = !0x1;
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['height'] = Laya['stage']['height'], this['width'] = Laya['stage']['width'];
                            var _0x28bc37 = _0x77369c['data']['versionCon' + 'fig'];
                            null == _0x28bc37 || _0x28bc37['control_ms'], (this['_btnRandom' + 'Start']['visible'] = !0x1, this['_btnContin' + 'ue']['visible'] = !0x0, this['_isShowban' + 'ner'] = !0x1, this['_model']['on']('gameListBa' + 'nner', this['showDelayB' + 'anner'], this));
                        }
                    },
                    {
                        'key': 'onShowComp' + 'lete',
                        'value': function () {
                            var _0x38c6b1;
                            _0x3a96b3(_0x35d7e0(_0x11945b['prototype']), 'onShowComp' + 'lete', this)['call'](this), (null === (_0x38c6b1 = _0x77369c['data']) || void 0x0 === _0x38c6b1 ? void 0x0 : _0x38c6b1['versionCon' + 'fig']) && 0x0 == _0x77369c['data']['versionCon' + 'fig']['show_ad'] && (console['log']('是否为黑名单场景值\x20' + '：', _0x77369c['data']['isSceneBla' + 'cklist']), _0x77369c['data']['isSceneBla' + 'cklist'] && (this['onCloseCli' + 'ck'](), _0x388c8d['setForceWo' + 'rldCanClic' + 'k']()));
                        }
                    },
                    {
                        'key': 'showDelayB' + 'anner',
                        'value': function () {
                            var _0x4b775e;
                            0x1 != (null === (_0x4b775e = _0x77369c['data']) || void 0x0 === _0x4b775e ? void 0x0 : _0x4b775e['versionCon' + 'fig']['derive_one']) || this['_isShowban' + 'ner'] || (this['_isShowban' + 'ner'] = !0x0, Laya['timer']['once'](0x3e8, this, this['showbanner']));
                        }
                    },
                    {
                        'key': 'showbanner',
                        'value': function () {
                            _0xce637d['showBanner'](), Laya['timer']['once'](0x640, this, this['showbanner']);
                        }
                    },
                    {
                        'key': 'hidebanner',
                        'value': function () {
                            _0xce637d['hideBanner']();
                        }
                    },
                    {
                        'key': 'switchBtn',
                        'value': function () {
                            this['_btnRandom' + 'Start']['visible'] = !this['_btnRandom' + 'Start']['visible'], this['_btnContin' + 'ue']['visible'] = !this['_btnContin' + 'ue']['visible'];
                        }
                    },
                    {
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            Laya['timer']['clear'](this, this['showDelayB' + 'anner']), Laya['timer']['clear'](this, this['hidebanner']), _0xce637d['hideBanner'](), this['_controlle' + 'r']['try2GotoHo' + 'me']();
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x4d77ca) {
                            var _0xf286a7, _0xd65bc2;
                            switch (_0x4d77ca['currentTar' + 'get']) {
                            case this['_btnBegin']:
                                this['_controlle' + 'r']['try2Replay']();
                                break;
                            case this['_btnRandom' + 'Start']:
                                this['try2AutoCl' + 'ickOneApp']();
                                break;
                            case this['_btnContin' + 'ue']:
                                0x1 == (null === (_0xd65bc2 = null === (_0xf286a7 = _0x77369c['data']) || void 0x0 === _0xf286a7 ? void 0x0 : _0xf286a7['versionCon' + 'fig']) || void 0x0 === _0xd65bc2 ? void 0x0 : _0xd65bc2['derive_two']) ? this['try2AutoCl' + 'ickOneApp']() : (_0xce637d['hideBanner'](), this['_controlle' + 'r']['try2GotoHo' + 'me']());
                            }
                        }
                    },
                    {
                        'key': 'try2AutoCl' + 'ickOneApp',
                        'value': function () {
                            var _0x5119fd = this['_list']['dataSource'] || [];
                            _0x5119fd['length'] && this['_controlle' + 'r']['gotoApp'](_0x3791c1['randomOne'](_0x5119fd));
                        }
                    }
                ]), _0x11945b;
            }(), _0x2d1864 = function (_0x38d7a9) {
                function _0x5639c5() {
                    return _0x1295b3(this, _0x5639c5), _0x5971e6(this, _0x35d7e0(_0x5639c5)['apply'](this, arguments));
                }
                return _0x3a441e(_0x5639c5, _0x31fd82), _0x413e7f(_0x5639c5, [
                    {
                        'key': 'onDeploy',
                        'value': function () {
                            this['_imgLogo']['skin'] = _0x77369c['config']['homeLogoUr' + 'l'], console['log']('YLHomeRTVi' + 'ew\x20onDeplo' + 'y\x20', _0x77369c['config']['homeLogoUr' + 'l']), _0x4cbfb5['bindVisibl' + 'e'](this['_spSoundOn'], _0x3d6d80, 'isMute', !0x0, void 0x0, this), _0x4cbfb5['bindVisibl' + 'e'](this['_spSoundOf' + 'f'], _0x3d6d80, 'isMute', !0x1, void 0x0, this), _0x4cbfb5['bindVisibl' + 'e'](this['_spVibrate' + 'On'], _0x3d6d80, 'canVibrate', !0x1, void 0x0, this), _0x4cbfb5['bindVisibl' + 'e'](this['_spVibrate' + 'Off'], _0x3d6d80, 'canVibrate', !0x0, void 0x0, this), _0x3a96b3(_0x35d7e0(_0x5639c5['prototype']), 'onDeploy', this)['call'](this);
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            let _0x5e687a = Laya['LocalStora' + 'ge']['getItem']('Drift-At-W' + 'ill-MaxSco' + 're') ? JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('Drift-At-W' + 'ill-MaxSco' + 're')) : 0x0;
                            this['text_best']['text'] = 'Best:' + _0x5e687a;
                        }
                    },
                    {
                        'key': 'onBtnClick',
                        'value': function (_0x1dd622) {
                            var _0x1fc85b, _0x47754d = [
                                    this['_btnShare'],
                                    this['_btnMore']
                                ];
                            if (!_0x77369c['data']['isAllSubpa' + 'ckagesLoad' + 'ed'] && -0x1 === _0x47754d['indexOf'](_0x1dd622['currentTar' + 'get']))
                                return _0x3d6d80['toastMsg']('请耐心等待，游戏正在' + '努力加载中~');
                            if (_0x77369c['data']['isShowBoxC' + 'lick'] && 0x1 == (null === (_0x1fc85b = _0x77369c['data']['versionCon' + 'fig']) || void 0x0 === _0x1fc85b ? void 0x0 : _0x1fc85b['treasure_b' + 'ox']))
                                return _0x77369c['data']['isShowBoxC' + 'lick'] = !0x1, void this['_controlle' + 'r']['try2ShowBo' + 'xClick']();
                            switch (_0x1dd622['currentTar' + 'get']) {
                            case this['_btnSound']:
                                _0x3d6d80['isMute'] = !_0x3d6d80['isMute'], window['WebAudioEn' + 'gine'] && (window['WebAudioEn' + 'gine']['pause'] = _0x3d6d80['isMute']);
                                break;
                            case this['_btnVibrat' + 'e']:
                                _0x3d6d80['canVibrate'] = !_0x3d6d80['canVibrate'];
                                break;
                            case this['_btnMore']:
                                this['_model']['isMoreGame' + 'Showing'] = !0x0;
                                break;
                            case this['_btnPlay']:
                                platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                    this['_controlle' + 'r']['try2ShowSk' + 'in'](!0x0);
                                });
                                break;
                            case this['_btnRank']:
                                this['_model']['isRankShow' + 'ing'] = !0x0;
                                break;
                            case this['_btnSkin']:
                                this['_model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Store'];
                                break;
                            case this['_btnShare']:
                                _0x3d6d80['shareFrien' + 'd'](0x1);
                                break;
                            case this['_btnCollec' + 't']:
                                this['_model']['isFavorite' + 'Showing'] = !0x0;
                            }
                        }
                    },
                    {
                        'key': 'onDestroy',
                        'value': function () {
                            _0x3d6d80['offAllCall' + 'er'](this);
                        }
                    }
                ]), _0x5639c5;
            }(), _0x278433 = function (_0x5d78e6) {
                function _0x4351b2() {
                    return _0x1295b3(this, _0x4351b2), _0x5971e6(this, _0x35d7e0(_0x4351b2)['apply'](this, arguments));
                }
                return _0x3a441e(_0x4351b2, Laya['Sprite']), _0x413e7f(_0x4351b2, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['_img'] = this['getChildBy' + 'Name']('img');
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['displayedI' + 'nStage'] ? this['onDisplay']() : this['once'](Laya['Event']['DISPLAY'], this, this['onDisplay']);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            this['off'](Laya['Event']['DISPLAY'], this, this['onDisplay']), this['reset']();
                        }
                    },
                    {
                        'key': 'onDisplay',
                        'value': function () {
                            var _0x2ec8ab = this['parent']['globalToLo' + 'cal'](_0x3d6d80['getRightUp' + 'FavouriteB' + 'tnPos']());
                            this['pos'](_0x2ec8ab['x'], _0x2ec8ab['y']), this['reset'](), this['_tl'] = new Laya['TimeLine'](), this['_tl']['to'](this['_img'], { 'x': -0x1e }, 0x190, Laya['Ease']['sineIn'])['to'](this['_img'], { 'x': 0x0 }, 0x190, Laya['Ease']['sineOut']), this['_tl']['play'](void 0x0, !0x0);
                        }
                    },
                    {
                        'key': 'reset',
                        'value': function () {
                            var _0x568291;
                            null === (_0x568291 = this['_tl']) || void 0x0 === _0x568291 || _0x568291['destroy'](), this['_tl'] = void 0x0, this['_img']['pos'](0x0, 0x0);
                        }
                    }
                ]), _0x4351b2;
            }(), _0x5a636f = function (_0x2d9a11) {
                function _0x256c98() {
                    return _0x1295b3(this, _0x256c98), _0x5971e6(this, _0x35d7e0(_0x256c98)['apply'](this, arguments));
                }
                return _0x3a441e(_0x256c98, _0x31fd82), _0x413e7f(_0x256c98, [{
                        'key': 'onCloseCli' + 'ck',
                        'value': function () {
                            this['_model']['isMoreGame' + 'Showing'] = !0x1;
                        }
                    }]), _0x256c98;
            }(), _0x4bb1fb = function (_0x35c6d3) {
                function _0x31b4bf() {
                    var _0x1306e3;
                    return _0x1295b3(this, _0x31b4bf), (_0x1306e3 = _0x5971e6(this, _0x35d7e0(_0x31b4bf)['call'](this, 0x2)))['_canShake'] = !0x1, _0x1306e3['_updateInt' + 'ervalMs'] = 0xbb8, _0x1306e3;
                }
                return _0x3a441e(_0x31b4bf, _0x1762c5), _0x413e7f(_0x31b4bf, [
                    {
                        'key': 'initUI',
                        'value': function () {
                            var _0x37050c = this['getChildBy' + 'Name']('ad');
                            this['_grids']['push'](_0x37050c);
                        }
                    },
                    {
                        'key': 'adHeight',
                        'get': function () {
                            var _0x4b352d;
                            return (null === (_0x4b352d = this['_grids'][0x0]) || void 0x0 === _0x4b352d ? void 0x0 : _0x4b352d['height']) || 0x104;
                        }
                    }
                ]), _0x31b4bf;
            }(), _0x3f5ca6 = function () {
                function _0x326062() {
                    _0x1295b3(this, _0x326062);
                }
                return _0x413e7f(_0x326062, null, [{
                        'key': 'init',
                        'value': function () {
                            var _0x210f56 = Laya['ClassUtils']['regClass'];
                            _0x210f56('youling/sp' + 'lash/view/' + 'runtime/YL' + 'SplashRTVi' + 'ew.ts', _0x3f5663), _0x210f56('youling/co' + 'mmon/compo' + 'nent/Align' + 'Widget.ts', _0x45246e), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLCr' + 'azyClickRT' + 'View.ts', _0xae8b66), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/gadg' + 'ets/YLProg' + 'ressRTPane' + '.ts', _0x3d22f1), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/gadg' + 'ets/YLHand' + 'ClickRTPan' + 'e.ts', _0x952fe6), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLFa' + 'voriteRTVi' + 'ew.ts', _0x17c80d), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLGa' + 'meRTView.t' + 's', _0x56b327), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/ru' + 'ntime/YLAD' + 'GameRTBann' + 'er0.ts', _0x3b058e), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/ru' + 'ntime/YLAD' + 'GameRTGrid' + '.ts', _0x4e370b), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/ru' + 'ntime/YLAD' + 'GameRTSqua' + 're0.ts', _0x1a66ee), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLNe' + 'wbieRTView' + '.ts', _0x30f763), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLRa' + 'nkRTView.t' + 's', _0x337bb4), _0x210f56('youling/co' + 'mmon/compo' + 'nent/YLTab' + 'Group.ts', _0x59ff1c), _0x210f56('youling/co' + 'mmon/compo' + 'nent/YLTab' + '.ts', _0x11a64f), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ZoomB' + 'utton.ts', _0x366fd2), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLRe' + 'bornRTView' + '.ts', _0x4a04ea), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/sc' + 'ript/YLADG' + 'ameList.ts', _0x234163), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/sc' + 'ript/YLADR' + 'ealBanner.' + 'ts', _0x332424), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLRe' + 'sultRTView' + '.ts', _0x4eed45), _0x210f56('youling/co' + 'mmon/compo' + 'nent/runti' + 'me/YLGoldR' + 'TPane.ts', _0x4a6d21), _0x210f56('youling/co' + 'mmon/compo' + 'nent/YLGol' + 'dPane.ts', _0x24644b), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/ru' + 'ntime/YLAD' + 'GameRTSqua' + 're3.ts', _0x67ba52), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSe' + 'archPlayer' + 'RTView.ts', _0x33b10e), _0x210f56('youling/co' + 'mmon/compo' + 'nent/runti' + 'me/YLPlaye' + 'rHeadRTGri' + 'd.ts', _0x44e908), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSe' + 'archVSPlay' + 'erRTView.t' + 's', _0x144f93), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/gadg' + 'ets/YLVSPl' + 'ayerRTPane' + '.ts', _0x115036), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSk' + 'inRTView.t' + 's', _0x3e9b13), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSt' + 'oreRTView.' + 'ts', _0xbb72e3), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSt' + 'oreRTGrid.' + 'ts', _0x464b67), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLSy' + 'stemAppLis' + 'tRTView.ts', _0x4e9001), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/gadg' + 'ets/YLSyst' + 'emAppListR' + 'TItem.ts', _0xa5e76b), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLTr' + 'easureBoxR' + 'TView.ts', _0x4aee31), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLBa' + 'ckHomeRTVi' + 'ew.ts', _0x366888), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLBe' + 'ginGameRTV' + 'iew.ts', _0x2fa64d), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLHo' + 'meRTView.t' + 's', _0x2d1864), _0x210f56('youling/co' + 'mmon/compo' + 'nent/runti' + 'me/YLAddGa' + 'meRTSticke' + 'r.ts', _0x278433), _0x210f56('youling/ma' + 'in/view/ru' + 'ntime/YLMo' + 'reGameRTVi' + 'ew.ts', _0x5a636f), _0x210f56('youling/co' + 'mmon/compo' + 'nent/ad/ru' + 'ntime/YLAD' + 'GameRTBann' + 'er2.ts', _0x4bb1fb);
                        }
                    }]), _0x326062;
            }();
        _0x3f5ca6['width'] = 0x2ee, _0x3f5ca6['height'] = 0x537, _0x3f5ca6['scaleMode'] = 'showall', _0x3f5ca6['screenMode'] = 'none', _0x3f5ca6['alignV'] = 'middle', _0x3f5ca6['alignH'] = 'center', _0x3f5ca6['startScene'] = 'sdk_youlin' + 'g/base/vie' + 'w/YLSplash' + '.scene', _0x3f5ca6['sceneRoot'] = '', _0x3f5ca6['debug'] = !0x1, _0x3f5ca6['stat'] = !0x1, _0x3f5ca6['physicsDeb' + 'ug'] = !0x1, _0x3f5ca6['exportScen' + 'eToJson'] = !0x0, _0x3f5ca6['init']();
        var _0x375f2b, _0x5df10d = function (_0x1ba6c0) {
                function _0x50c0f0() {
                    var _0x177075;
                    return _0x1295b3(this, _0x50c0f0), (_0x177075 = _0x5971e6(this, _0x35d7e0(_0x50c0f0)['apply'](this, arguments)))['_isSleep'] = !0x1, _0x177075['CUR_VERSIO' + 'N'] = '2', _0x177075['_token'] = '', _0x177075['_shareInfo' + 'Dic'] = {}, _0x177075['_appListDi' + 'c'] = {}, _0x177075['_playerHea' + 'dsPool'] = [], _0x177075['_playerNam' + 'esPool'] = [], _0x177075['_gold'] = 0x0, _0x177075['_curScore'] = 0x0, _0x177075['_isWatchin' + 'gVidoeAd'] = !0x1, _0x177075['_worldRank' + 's'] = [], _0x177075['_useTime'] = 0x3e8, _0x177075['_ownStoreI' + 'temIds'] = [], _0x177075['_storeItem' + 'IdInUse'] = NaN, _0x177075['activeAdNu' + 'm'] = 0x0, _0x177075['splashShow' + 'Time'] = 0x0, _0x177075['_isAllSubp' + 'ackagesLoa' + 'ded'] = !0x1, _0x177075['_hasGameIn' + 'it'] = !0x1, _0x177075['_round'] = 0x0, _0x177075['_hasWrongC' + 'lickOnBtnS' + 'kipReborn'] = !0x1, _0x177075['_isOnGame'] = !0x1, _0x177075['_hasReject' + 'Author'] = !0x1, _0x177075['_isShowBox' + 'Click'] = !0x1, _0x177075['_isAfterBo' + 'x'] = !0x1, _0x177075['_isSceneBl' + 'acklist'] = !0x1, _0x177075;
                }
                return _0x3a441e(_0x50c0f0, _0x1f30c5), _0x413e7f(_0x50c0f0, [
                    {
                        'key': 'getShareCo' + 'ntent',
                        'value': function (_0xb40ba1) {
                            var _0x30c778, _0x140122 = this['_shareInfo' + 'Dic'][_0xb40ba1];
                            return (null == _0x140122 ? void 0x0 : _0x140122['length']) && (_0x30c778 = _0x3791c1['randomOne'](_0x140122)), _0x30c778 || (_0x30c778 = {
                                'share_title': '',
                                'share_img': '',
                                'share_id': 0x1,
                                'share_type': _0xb40ba1
                            }), _0x30c778;
                        }
                    },
                    {
                        'key': 'hasRejectA' + 'uthor',
                        'get': function () {
                            return this['_hasReject' + 'Author'];
                        },
                        'set': function (_0x188219) {
                            this['_hasReject' + 'Author'] = _0x188219;
                        }
                    },
                    {
                        'key': 'hasWrongCl' + 'ickOnBtnSk' + 'ipReborn',
                        'get': function () {
                            return this['_hasWrongC' + 'lickOnBtnS' + 'kipReborn'];
                        },
                        'set': function (_0x36f85a) {
                            this['_hasWrongC' + 'lickOnBtnS' + 'kipReborn'] = _0x36f85a;
                        }
                    },
                    {
                        'key': 'round',
                        'get': function () {
                            return this['_round'];
                        },
                        'set': function (_0x35fe9a) {
                            this['try2Set']('round', _0x35fe9a);
                        }
                    },
                    {
                        'key': 'hasGameIni' + 't',
                        'get': function () {
                            return !_0x77369c['hasDeploye' + 'd'] || this['_hasGameIn' + 'it'];
                        },
                        'set': function (_0x4cf851) {
                            this['try2Set']('hasGameIni' + 't', _0x4cf851);
                        }
                    },
                    {
                        'key': 'isOnGame',
                        'get': function () {
                            return this['_isOnGame'];
                        },
                        'set': function (_0x57b3db) {
                            this['try2Set']('isOnGame', _0x57b3db);
                        }
                    },
                    {
                        'key': 'isShowBoxC' + 'lick',
                        'get': function () {
                            return this['_isShowBox' + 'Click'];
                        },
                        'set': function (_0x3f83a5) {
                            this['try2Set']('isShowBoxC' + 'lick', _0x3f83a5);
                        }
                    },
                    {
                        'key': 'isAfterBox',
                        'get': function () {
                            return this['_isAfterBo' + 'x'];
                        },
                        'set': function (_0x4b6493) {
                            this['try2Set']('isAfterBox', _0x4b6493);
                        }
                    },
                    {
                        'key': 'isAllSubpa' + 'ckagesLoad' + 'ed',
                        'get': function () {
                            return !_0x77369c['hasDeploye' + 'd'] || this['_isAllSubp' + 'ackagesLoa' + 'ded'];
                        },
                        'set': function (_0x3de067) {
                            this['try2Set']('isAllSubpa' + 'ckagesLoad' + 'ed', _0x3de067);
                        }
                    },
                    {
                        'key': 'storeItemI' + 'dInUse',
                        'get': function () {
                            return this['_storeItem' + 'IdInUse'];
                        },
                        'set': function (_0x312a16) {
                            this['try2Set']('storeItemI' + 'dInUse', _0x312a16), _0x284a91['set']('storeItemI' + 'dInUse', _0x312a16);
                        }
                    },
                    {
                        'key': 'ownStoreIt' + 'emIds',
                        'get': function () {
                            return this['_ownStoreI' + 'temIds'];
                        },
                        'set': function (_0x481c5c) {
                            _0x481c5c = _0x481c5c || [], _0x3791c1['uniq'](_0x481c5c), this['try2Set']('ownStoreIt' + 'emIds', _0x481c5c), _0x284a91['set']('ownStoreIt' + 'emIds', _0x481c5c['filter'](Boolean)['join'](','));
                        }
                    },
                    {
                        'key': 'useTime',
                        'get': function () {
                            return this['_useTime'];
                        },
                        'set': function (_0x3c0d2e) {
                            this['try2Set']('useTime', _0x3c0d2e);
                        }
                    },
                    {
                        'key': 'worldRanks',
                        'get': function () {
                            return this['_worldRank' + 's'];
                        },
                        'set': function (_0x6a4ab9) {
                            this['try2Set']('worldRanks', _0x6a4ab9);
                        }
                    },
                    {
                        'key': 'isWatching' + 'VidoeAd',
                        'get': function () {
                            return this['_isWatchin' + 'gVidoeAd'];
                        },
                        'set': function (_0x215830) {
                            this['try2Set']('isWatching' + 'VidoeAd', _0x215830);
                        }
                    },
                    {
                        'key': 'curScore',
                        'get': function () {
                            return this['_curScore'];
                        },
                        'set': function (_0x3f9100) {
                            this['try2Set']('curScore', _0x3f9100);
                        }
                    },
                    {
                        'key': 'gold',
                        'get': function () {
                            return this['_gold'];
                        },
                        'set': function (_0x25f7f4) {
                            this['try2Set']('gold', _0x25f7f4), _0x284a91['set']('gold', _0x25f7f4);
                        }
                    },
                    {
                        'key': 'playerHead' + 'sPool',
                        'get': function () {
                            return this['_playerHea' + 'dsPool'];
                        },
                        'set': function (_0x326a5e) {
                            this['try2Set']('playerHead' + 'sPool', _0x326a5e);
                        }
                    },
                    {
                        'key': 'playerName' + 'sPool',
                        'get': function () {
                            return this['_playerNam' + 'esPool'];
                        },
                        'set': function (_0x769a22) {
                            this['try2Set']('playerName' + 'sPool', _0x769a22);
                        }
                    },
                    {
                        'key': 'userInfo',
                        'get': function () {
                            return this['_userInfo'];
                        },
                        'set': function (_0x299b28) {
                            this['try2Set']('userInfo', _0x299b28);
                        }
                    },
                    {
                        'key': 'appListDic',
                        'get': function () {
                            return this['_appListDi' + 'c'];
                        },
                        'set': function (_0x2c036) {
                            this['try2Set']('appListDic', _0x2c036);
                        }
                    },
                    {
                        'key': 'shareInfoD' + 'ic',
                        'get': function () {
                            return this['_shareInfo' + 'Dic'];
                        },
                        'set': function (_0x28579d) {
                            this['try2Set']('shareInfoD' + 'ic', _0x28579d);
                        }
                    },
                    {
                        'key': 'versionCon' + 'fig',
                        'get': function () {
                            return this['_versionCo' + 'nfig'];
                        },
                        'set': function (_0x1aef8c) {
                            _0x1aef8c && (_0x1aef8c['banner_int' + 'erval'] = _0x1aef8c['banner_int' + 'erval'] || 0x3e8, 0x1 !== _0x1aef8c['delay'] && (_0x1aef8c['latency_ti' + 'me'] = 0x0, _0x1aef8c['move_time'] = 0x0)), this['try2Set']('versionCon' + 'fig', _0x1aef8c);
                        }
                    },
                    {
                        'key': 'token',
                        'get': function () {
                            return this['_token'];
                        },
                        'set': function (_0x52887d) {
                            this['try2Set']('token', _0x52887d);
                        }
                    },
                    {
                        'key': 'isSleep',
                        'get': function () {
                            return this['_isSleep'];
                        },
                        'set': function (_0x428730) {
                            this['try2Set']('isSleep', _0x428730);
                        }
                    },
                    {
                        'key': 'isSceneBla' + 'cklist',
                        'get': function () {
                            return this['_isSceneBl' + 'acklist'];
                        },
                        'set': function (_0x4a99d9) {
                            this['try2Set']('isSceneBla' + 'cklist', _0x4a99d9);
                        }
                    }
                ]), _0x50c0f0;
            }(), _0x77369c = new (function () {
                function _0x56ea2f() {
                    var _0x525aef = this;
                    _0x1295b3(this, _0x56ea2f), this['_data'] = new _0x5df10d(), this['_hasDeploy' + 'ed'] = !0x1, this['_defaultSt' + 'oreRandomU' + 'nlockGold'] = function (_0x5e6eb4) {
                        if (_0x525aef['config'] && _0x5e6eb4 > 0x0) {
                            var _0x5009dc = 0x1f4;
                            return isNaN(_0x5009dc) ? 0x98967f : _0x5009dc;
                        }
                        return -0x1;
                    }, this['_defaultSc' + 'ore2Gold'] = function (_0x3cc0e4) {
                        return 0.1 * _0x3cc0e4 >> 0x0;
                    };
                }
                return _0x413e7f(_0x56ea2f, [
                    {
                        'key': 'configurat' + 'e',
                        'value': function (_0x26b131) {
                            var _0x221fe4, _0x2a9326, _0x1396ce, _0x588f86, _0x58a345, _0x54810a;
                            _0x26b131['load']['liteSubpac' + 'kage'] || (_0x26b131['load']['liteSubpac' + 'kage'] = 'sdk_youlin' + 'g_lite'), _0x3791c1['remove'](_0x26b131['load']['subpackage' + 's'], _0x26b131['load']['liteSubpac' + 'kage']), _0x26b131['numSearchP' + 'layer'] = 0x10, _0x26b131['overPlayer' + 'QueueMax'] = null !== (_0x221fe4 = _0x26b131['overPlayer' + 'QueueMax']) && void 0x0 !== _0x221fe4 ? _0x221fe4 : 0x2, _0x26b131['score2Gold'] = _0x26b131['score2Gold'] || this['_defaultSc' + 'ore2Gold'], _0x26b131['storeRando' + 'mUnlockGol' + 'd'] = _0x26b131['storeRando' + 'mUnlockGol' + 'd'] || this['_defaultSt' + 'oreRandomU' + 'nlockGold'], _0x26b131['rebornMax'] = null !== (_0x2a9326 = _0x26b131['rebornMax']) && void 0x0 !== _0x2a9326 ? _0x2a9326 : 0x2, _0x26b131['searchPlay' + 'erMode'] = null !== (_0x1396ce = _0x26b131['searchPlay' + 'erMode']) && void 0x0 !== _0x1396ce ? _0x1396ce : 0x1, _0x26b131['authorTime'] = null !== (_0x588f86 = _0x26b131['authorTime']) && void 0x0 !== _0x588f86 ? _0x588f86 : 'rank', _0x26b131['storeVideo' + 'UnlockGold'] = null !== (_0x58a345 = _0x26b131['storeVideo' + 'UnlockGold']) && void 0x0 !== _0x58a345 ? _0x58a345 : 0x12c, _0x26b131['BoxUnlockG' + 'old'] = null !== (_0x54810a = _0x26b131['BoxUnlockG' + 'old']) && void 0x0 !== _0x54810a ? _0x54810a : 0x64, _0x26b131['server']['apiversion'] = _0x26b131['server']['apiversion'] || 'null', this['_config'] = _0x26b131;
                        }
                    },
                    {
                        'key': 'deploy',
                        'value': function () {
                            this['_config'] ? (this['_hasDeploy' + 'ed'] = !0x0, _0x3f5ca6['physicsDeb' + 'ug'] = !0x1, this['_beanLaunc' + 'her'] = new _0x54f314(), this['_beanLaunc' + 'her']['run']()) : _0x83e07c['throwNorma' + 'lError']('请先执行\x20YLSDK' + '.configura' + 'te\x20进行配置！');
                        }
                    },
                    {
                        'key': 'hasDeploye' + 'd',
                        'get': function () {
                            return this['_hasDeploy' + 'ed'];
                        }
                    },
                    {
                        'key': 'data',
                        'get': function () {
                            return this['_data'];
                        }
                    },
                    {
                        'key': 'config',
                        'get': function () {
                            return this['_config'];
                        }
                    }
                ]), _0x56ea2f;
            }())(), _0x2ec4e8 = Laya['ClassUtils']['regClass'];
        !function (_0x13fb1f) {
            !function (_0x14a8f7) {
                var _0x521324 = function (_0x1befeb) {
                    function _0xa1dd8c() {
                        return _0x1295b3(this, _0xa1dd8c), _0x5971e6(this, _0x35d7e0(_0xa1dd8c)['call'](this));
                    }
                    return _0x3a441e(_0xa1dd8c, Laya['Scene']), _0x413e7f(_0xa1dd8c, [{
                            'key': 'createChil' + 'dren',
                            'value': function () {
                                _0x3a96b3(_0x35d7e0(_0xa1dd8c['prototype']), 'createChil' + 'dren', this)['call'](this), this['loadScene']('test/TestS' + 'cene');
                            }
                        }]), _0xa1dd8c;
                }();
                _0x14a8f7['TestSceneU' + 'I'] = _0x521324, _0x2ec4e8('ui.test.Te' + 'stSceneUI', _0x521324);
            }(_0x13fb1f['test'] || (_0x13fb1f['test'] = {}));
        }(_0x375f2b || (_0x375f2b = {}));
        var _0x44faf8 = function (_0x41f662) {
                function _0x4c6686() {
                    var _0x3d916f;
                    return _0x1295b3(this, _0x4c6686), (_0x3d916f = _0x5971e6(this, _0x35d7e0(_0x4c6686)['call'](this)))['endPos'] = new Laya['Vector3'](), _0x3d916f['endRot'] = new Laya['Vector3'](), _0x3d916f;
                }
                return _0x3a441e(_0x4c6686, Laya['Script3D']), _0x4c6686;
            }(), _0x2f99ac = function _0x48fe91() {
                _0x1295b3(this, _0x48fe91), this['levelMapDa' + 'tas'] = new Array(), this['combinatio' + 'nDatas'] = new Array(), this['allLevel'] = 0x3, this['levelMapNu' + 'mberList'] = new Array(), this['isTestRout' + 'e'] = !0x1, this['testRouteL' + 'ist'] = '1-5-74-54';
            }, _0xa2eca2 = function _0x2e3e81() {
                _0x1295b3(this, _0x2e3e81), this['collideTpy' + 'e'] = 0x1, this['typeName'] = '', this['pos'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['rot'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['scale'] = new Laya['Vector3'](0x1, 0x1, 0x1), this['param'] = [
                    0x0,
                    0x0
                ];
            }, _0xbf3df0 = function _0x5c34f2() {
                _0x1295b3(this, _0x5c34f2), this['dengji'] = 0x0, this['levelMaps'] = new Array();
            }, _0x272a92 = function (_0x999121) {
                function _0x4dd669() {
                    var _0x5592fd;
                    return _0x1295b3(this, _0x4dd669), (_0x5592fd = _0x5971e6(this, _0x35d7e0(_0x4dd669)['apply'](this, arguments)))['defaultStr' + 'ength'] = 0x14, _0x5592fd['isCollided'] = !0x1, _0x5592fd['defaulSpee' + 'd_y'] = 0x1, _0x5592fd;
                }
                return _0x3a441e(_0x4dd669, Laya['Script3D']), _0x413e7f(_0x4dd669, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['transform'] = this['owner']['transform'], this['forwardSpe' + 'ed'] = new Laya['Vector3'](), this['speed_y'] = 0x0;
                        }
                    },
                    {
                        'key': 'onEnable',
                        'value': function () {
                            this['isCollided'] = !0x1;
                        }
                    },
                    {
                        'key': 'BeStrike',
                        'value': function (_0x58e5c0, _0x36f835) {
                            this['isCollided'] || (this['isCollided'] = !0x0, this['forwardSpe' + 'ed'] = _0x58e5c0, this['speed_y'] = this['defaulSpee' + 'd_y'], Laya['timer']['frameLoop'](0x1, this, this['loop']), Laya['timer']['once'](0xbb8, this, this['loopEnd']));
                        }
                    },
                    {
                        'key': 'loop',
                        'value': function () {
                            var _0x36931b = new Laya['Vector3'](this['forwardSpe' + 'ed']['x'], this['forwardSpe' + 'ed']['y'], this['forwardSpe' + 'ed']['z']);
                            Laya['Vector3']['scale'](_0x36931b, 0x12 * Math['random']() - 0x9, _0x36931b), this['transform']['rotate'](_0x36931b, !0x1, !0x1), this['transform']['translate'](this['forwardSpe' + 'ed'], !0x1), this['transform']['translate'](new Laya['Vector3'](0x0, this['speed_y'], 0x0), !0x1), this['speed_y'] -= 0xa * 0x24 / 0x3e8;
                        }
                    },
                    {
                        'key': 'loopEnd',
                        'value': function () {
                            Laya['timer']['clear'](this, this['loop']);
                        }
                    },
                    {
                        'key': 'onDisable',
                        'value': function () {
                            Laya['timer']['clear'](this, this['loop']), Laya['timer']['clear'](this, this['loopEnd']);
                        }
                    }
                ]), _0x4dd669;
            }(), _0x3acbe6 = function () {
                function _0x2d0eaa() {
                    _0x1295b3(this, _0x2d0eaa), this['modelObjs'] = new Array(), this['poolObjs'] = {};
                    for (var _0x2461c1 = Laya['loader']['getRes']('res/LayaSc' + 'ene_Model/' + 'Convention' + 'al/Model.l' + 'h')['getChildBy' + 'Name']('models'), _0x12a3bb = 0x0; _0x12a3bb < _0x2461c1['numChildre' + 'n']; _0x12a3bb++)
                        this['modelObjs']['push'](_0x2461c1['getChildAt'](_0x12a3bb));
                    this['_objPoolNo' + 'de'] = new Laya['Sprite3D']('poolNode');
                }
                return _0x413e7f(_0x2d0eaa, [
                    {
                        'key': 'checkStruc' + 'ture',
                        'value': function (_0x46bc6e) {
                            null == this['poolObjs'][_0x46bc6e] && (this['poolObjs'][_0x46bc6e] = []);
                        }
                    },
                    {
                        'key': 'GetPrefabB' + 'yName',
                        'value': function () {
                            for (var _0xadaf53 = (arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 'ModelType.' + 'muban01')['toString'](), _0x4cad39 = null, _0x5280fd = 0x0; _0x5280fd < this['modelObjs']['length']; _0x5280fd++)
                                if (this['modelObjs'][_0x5280fd]['name'] == _0xadaf53) {
                                    _0x4cad39 = this['modelObjs'][_0x5280fd];
                                    break;
                                }
                            return null == _0x4cad39 ? (console['log']('没有找到模型：', _0xadaf53), null) : _0x4cad39;
                        }
                    },
                    {
                        'key': 'InitObj',
                        'value': function (_0x3ba4b4) {
                            var _0x34d864 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1f4, _0x18947d = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : new Laya['Vector3'](0x0, 0x3e8, -0x3e8), _0x3ff717 = new Laya['Vector3'](_0x3ba4b4['transform']['position']['x'], _0x3ba4b4['transform']['position']['y'], _0x3ba4b4['transform']['position']['z']);
                            _0x3ba4b4['transform']['position'] = _0x18947d, _0x3ba4b4['active'] = !0x0, new Laya['Timer']()['once'](_0x34d864, this, function () {
                                _0x3ba4b4['transform']['position'] = _0x3ff717, _0x3ba4b4['active'] = !0x1;
                            });
                        }
                    },
                    {
                        'key': 'storage',
                        'value': function (_0x27007c) {
                            var _0x44ea2a = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x1;
                            this['checkStruc' + 'ture'](_0x27007c);
                            for (var _0x2667dd = 0x0; _0x2667dd < _0x44ea2a; _0x2667dd++) {
                                var _0x279db6 = Laya['Sprite3D']['instantiat' + 'e'](this['GetPrefabB' + 'yName'](_0x27007c), this['_objPoolNo' + 'de']);
                                this['poolObjs'][_0x27007c]['push'](_0x279db6);
                            }
                        }
                    },
                    {
                        'key': 'GetNewObj',
                        'value': function (_0x3ce80a, _0x4f0be3) {
                            if (!(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2]) {
                                if (this['checkStruc' + 'ture'](_0x3ce80a), 0x0 == this['poolObjs'][_0x3ce80a]['length']) {
                                    var _0x52a6b5 = Laya['Sprite3D']['instantiat' + 'e'](this['GetPrefabB' + 'yName'](_0x3ce80a), _0x4f0be3);
                                    return _0x4f0be3['addChild'](_0x52a6b5), _0x52a6b5;
                                }
                                var _0x35cf43 = this['poolObjs'][_0x3ce80a]['shift']();
                                return _0x35cf43['active'] = !0x0, _0x4f0be3['addChild'](_0x35cf43), _0x35cf43;
                            }
                            var _0x5538d0 = Laya['Sprite3D']['instantiat' + 'e'](this['GetPrefabB' + 'yName'](_0x3ce80a), _0x4f0be3);
                            return _0x4f0be3['addChild'](_0x5538d0), _0x5538d0;
                        }
                    },
                    {
                        'key': 'RecoverObj',
                        'value': function (_0x39dd7f) {
                            return !(arguments['length'] > 0x1 && void 0x0 !== arguments[0x1]) || arguments[0x1] ? (_0x39dd7f['active'] = !0x1, this['checkStruc' + 'ture'](_0x39dd7f['name']), -0x1 == this['poolObjs'][_0x39dd7f['name']]['indexOf'](_0x39dd7f) ? (this['poolObjs'][_0x39dd7f['name']]['push'](_0x39dd7f), this['_objPoolNo' + 'de']['addChild'](_0x39dd7f), !0x0) : (console['log']('已在对象池中：', _0x39dd7f['name'], _0x39dd7f['parent']['name']), !0x1)) : (_0x39dd7f['destroy'](), !0x0);
                        }
                    }
                ], [{
                        'key': 'I',
                        'get': function () {
                            return null == _0x2d0eaa['_instance'] && (_0x2d0eaa['_instance'] = new _0x2d0eaa()), _0x2d0eaa['_instance'];
                        }
                    }]), _0x2d0eaa;
            }(), _0x124b9b = function () {
                function _0x34e58e() {
                    _0x1295b3(this, _0x34e58e), this['_levelMapL' + 'ist'] = new Array(), this['_curHard'] = 0x0, this['_curLevelM' + 'apIndex'] = 0x0, this['maxLevelMa' + 'pShowNumbe' + 'r'] = 0x2, this['levelMapLo' + 'adOffset'] = 0x0, this['carTrapObj' + 'List'] = new Array(), this['toolsObjLi' + 'st'] = new Array(), this['xiaorenObj' + 'List'] = new Array(), this['decorateOb' + 'jList'] = new Array(), this['loadedMapI' + 'dList'] = '', this['testRouteL' + 'ist'] = '1-5-5-9-7', this['testRoutes'] = new Array();
                }
                return _0x413e7f(_0x34e58e, [
                    {
                        'key': 'init',
                        'value': function (_0x5b978b) {
                            this['_mapData'] = Laya['loader']['getRes']('res/Datas/' + 'Datas.json'), this['_mapData']['isTestRout' + 'e'] && (this['testRoutes'] = this['_mapData']['testRouteL' + 'ist']['split']('-'));
                            for (var _0x3b1c40 = 0x0; _0x3b1c40 < this['_mapData']['levelMapDa' + 'tas']['length']; _0x3b1c40++) {
                                this['_mapData']['levelMapDa' + 'tas'][_0x3b1c40]['id'] = _0x3b1c40;
                            }
                            this['allLevelMa' + 'ps'] = new Array();
                            for (var _0x3621dd = 0x0; _0x3621dd < this['_mapData']['levelMapDa' + 'tas']['length']; _0x3621dd++) {
                                for (var _0x18911e = this['_mapData']['levelMapDa' + 'tas'][_0x3621dd], _0x337695 = !0x0, _0x3e6ea1 = 0x0; _0x3e6ea1 < this['allLevelMa' + 'ps']['length']; _0x3e6ea1++) {
                                    var _0x9b1091 = this['allLevelMa' + 'ps'][_0x3e6ea1];
                                    _0x9b1091['dengji'] == _0x18911e['hardLevel'] && (_0x337695 = !0x1, _0x9b1091['levelMaps']['push'](_0x18911e));
                                }
                                if (_0x337695) {
                                    var _0x21eeb1 = new _0xbf3df0();
                                    _0x21eeb1['dengji'] = _0x18911e['hardLevel'], _0x21eeb1['levelMaps']['push'](_0x18911e), this['allLevelMa' + 'ps']['push'](_0x21eeb1);
                                }
                            }
                            this['gameScene'] = _0x5b978b, null == this['_mapRootNo' + 'de'] && (this['_mapRootNo' + 'de'] = new Laya['Sprite3D']('_mapRootNo' + 'de'), this['gameScene']['addChild'](this['_mapRootNo' + 'de'])), this['resetMap']();
                        }
                    },
                    {
                        'key': 'resetMap',
                        'value': function () {
                            for (; this['_levelMapL' + 'ist']['length'] > 0x0;)
                                this['recoveryLe' + 'velMap'](this['_levelMapL' + 'ist']['pop']());
                            this['_levelMapL' + 'ist'] = new Array(), this['loadedMapI' + 'dList'] = '', this['_curLevelM' + 'apIndex'] = 0x0, this['_curHard'] = 0x0;
                            for (var _0x2de8a7 = 0x0; _0x2de8a7 < this['maxLevelMa' + 'pShowNumbe' + 'r']; _0x2de8a7++) {
                                var _0x51b1ee = this['addNewLeve' + 'lMap']();
                                if (_0x3c52f6['I']['playerCont' + 'roller']['changePoin' + 'tCheckList'](0x0, _0x51b1ee['levelMapDa' + 'ta']['bserPointL' + 'ist']), null != _0x3c52f6['I']['NPCList'] && _0x3c52f6['I']['NPCList']['length'] > 0x0) {
                                    for (var _0x42599c = 0x0; _0x42599c < _0x3c52f6['I']['NPCList']['length']; _0x42599c++)
                                        _0x3c52f6['I']['NPCList'][_0x42599c]['changePoin' + 'tCheckList'](0x0, _0x51b1ee['levelMapDa' + 'ta']['bserPointL' + 'ist']);
                                }
                            }
                        }
                    },
                    {
                        'key': 'UpdateLeve' + 'lMapOnMove',
                        'value': function (_0x52baa1) {
                            if (null == this['_levelMapL' + 'ist'] || this['_levelMapL' + 'ist']['length'] <= 0x1)
                                console['log']('地图队列为空或长度为' + '1！！！');
                            else {
                                var _0x697da1 = this['_levelMapL' + 'ist'][0x0]['getCompone' + 'nt'](_0x44faf8)['levelMapDa' + 'ta']['bserPointL' + 'ist']['length'];
                                if (_0x52baa1 > _0x697da1 + 0x4b) {
                                    this['removeLast' + 'LeveMap']();
                                    var _0x320e79 = this['addNewLeve' + 'lMap']();
                                    if (_0x3c52f6['I']['playerCont' + 'roller']['changePoin' + 'tCheckList'](_0x697da1, _0x320e79['levelMapDa' + 'ta']['bserPointL' + 'ist']), null != _0x3c52f6['I']['NPCList'] && _0x3c52f6['I']['NPCList']['length'] > 0x0) {
                                        for (var _0x1120da = 0x0; _0x1120da < _0x3c52f6['I']['NPCList']['length']; _0x1120da++)
                                            _0x3c52f6['I']['NPCList'][_0x1120da]['changePoin' + 'tCheckList'](_0x697da1, _0x320e79['levelMapDa' + 'ta']['bserPointL' + 'ist']);
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'creatReviv' + 'eFloor',
                        'value': function () {
                            var _0x438cc1 = this['_levelMapL' + 'ist'][0x0]['getChildBy' + 'Name']('floorParen' + 't'), _0xf64248 = new _0xa2eca2();
                            return _0xf64248['collideTpy' + 'e'] = 0x0, _0xf64248['typeName'] = 'sd01_mx', _0xf64248['pos'] = new Laya['Vector3'](0x0, 0x0, -0xf), this['CreatAOrna' + 'ment'](_0xf64248, _0x438cc1)['transform']['position']['z'];
                        }
                    },
                    {
                        'key': 'removeLast' + 'LeveMap',
                        'value': function () {
                            var _0x176829 = this['_levelMapL' + 'ist']['shift']();
                            this['recoveryLe' + 'velMap'](_0x176829);
                        }
                    },
                    {
                        'key': 'addNewLeve' + 'lMap',
                        'value': function () {
                            if (this['_mapData']['isTestRout' + 'e']) {
                                var _0x3a1717 = Number(this['testRoutes'][this['_curLevelM' + 'apIndex'] % this['testRoutes']['length']]);
                                return this['CreatDiTuB' + 'yMapData'](this['_mapData']['levelMapDa' + 'tas'][_0x3a1717 - 0x1]);
                            }
                            this['_curHard'] = this['_mapData']['allLevel'] - 0x1;
                            for (var _0x1784f1 = 0x0, _0x3231a1 = 0x0; _0x3231a1 < this['_mapData']['allLevel']; _0x3231a1++)
                                if (_0x1784f1 += this['_mapData']['levelMapNu' + 'mberList'][_0x3231a1], this['_curLevelM' + 'apIndex'] < _0x1784f1) {
                                    this['_curHard'] = _0x3231a1;
                                    break;
                                }
                            return this['CreatDiTuB' + 'yMapData'](this['GetMapByle' + 'vel'](this['_curHard']));
                        }
                    },
                    {
                        'key': 'recoveryLe' + 'velMap',
                        'value': function (_0x3b8df3) {
                            for (var _0x2077fc = 0x0; _0x2077fc < _0x3b8df3['numChildre' + 'n']; _0x2077fc++) {
                                var _0x15d376 = _0x3b8df3['getChildAt'](_0x2077fc);
                                if ('compositeU' + 'nits' == _0x15d376['name']) {
                                    for (var _0x3c8218 = 0x0; _0x3c8218 < _0x15d376['numChildre' + 'n']; _0x3c8218++)
                                        for (var _0x31dd09 = _0x15d376['getChildAt'](_0x3c8218); _0x31dd09['numChildre' + 'n'] > 0x0;)
                                            _0x3acbe6['I']['RecoverObj'](_0x31dd09['getChildAt'](0x0), !0x0);
                                } else {
                                    for (; _0x15d376['numChildre' + 'n'] > 0x0;)
                                        _0x3acbe6['I']['RecoverObj'](_0x15d376['getChildAt'](0x0), !0x0);
                                }
                            }
                            _0x3b8df3['destroy']();
                        }
                    },
                    {
                        'key': 'CreatDiTuB' + 'yMapData',
                        'value': function (_0x44f86d) {
                            var _0x4be3f2 = this['_mapRootNo' + 'de']['addChild'](new Laya['Sprite3D']()), _0x372a70 = _0x4be3f2['addCompone' + 'nt'](_0x44faf8);
                            _0x372a70['levelMapDa' + 'ta'] = JSON['parse'](JSON['stringify'](_0x44f86d));
                            for (var _0x4f7713, _0x2b007a = _0x4be3f2['addChild'](new Laya['Sprite3D']('floorParen' + 't')), _0x3629f6 = _0x4be3f2['addChild'](new Laya['Sprite3D']('compositeU' + 'nits')), _0x41329b = new Laya['Vector3'](), _0x5da0e6 = new Laya['Vector3'](), _0x24240a = 0x0; _0x24240a < _0x44f86d['mapLength']; _0x24240a++) {
                                if (null != _0x4f7713) {
                                    var _0x185002 = _0x4f7713['getChildBy' + 'Name']('endPos');
                                    null != _0x185002 ? (_0x41329b = _0x185002['transform']['position'], _0x5da0e6 = _0x185002['transform']['rotationEu' + 'ler']) : console['error']('该floor没有en' + 'dpos：', _0x4f7713);
                                }
                                var _0x3a7845 = new _0xa2eca2();
                                _0x3a7845['collideTpy' + 'e'] = 0x0, _0x3a7845['typeName'] = _0x44f86d['floorList'][_0x24240a];
                                for (var _0x257261 = this['CreatAOrna' + 'ment'](_0x3a7845, _0x2b007a), _0x1058e0 = 0x0; _0x1058e0 < _0x257261['numChildre' + 'n']; _0x1058e0++) {
                                    var _0x3955d9 = _0x257261['getChildAt'](_0x1058e0);
                                    _0x3955d9['name']['indexOf']('_L') > 0x0 ? _0x3955d9['active'] = _0x44f86d['isLeftMoun' + 'tain'] : _0x3955d9['name']['indexOf']('_R') > 0x0 && (_0x3955d9['active'] = !_0x44f86d['isLeftMoun' + 'tain']);
                                }
                                _0x257261['transform']['localPosit' + 'ion'] = _0x41329b, _0x257261['transform']['localRotat' + 'ionEuler'] = _0x5da0e6, _0x4f7713 = _0x257261;
                            }
                            for (var _0x341bef = 0x0; _0x341bef < _0x44f86d['combinatio' + 'nCases']['length']; _0x341bef++) {
                                var _0x21ee87 = _0x44f86d['combinatio' + 'nCases'][_0x341bef], _0x52cdd0 = this['_mapData']['combinatio' + 'nDatas'][_0x21ee87['combinatio' + 'nDataId']], _0x22568e = _0x3629f6['addChild'](new Laya['Sprite3D']('composite' + _0x341bef['toString']()));
                                _0x22568e['transform']['localPosit' + 'ion'] = new Laya['Vector3'](-_0x21ee87['pos']['x'], _0x21ee87['pos']['y'], _0x21ee87['pos']['z']), _0x22568e['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](_0x21ee87['rot']['x'], -_0x21ee87['rot']['y'], -_0x21ee87['rot']['z']), this['CreatMapCo' + 'mbination'](null, _0x52cdd0['objComList'], null, _0x52cdd0['decorateLi' + 'st'], _0x22568e['transform']);
                            }
                            if (this['CreatMapCo' + 'mbination'](null, _0x44f86d['objList'], null, _0x44f86d['decorateLi' + 'st'], _0x4be3f2['transform']), this['_curLevelM' + 'apIndex']++, this['_levelMapL' + 'ist']['length'] >= 0x1) {
                                var _0x4be6c6 = this['_levelMapL' + 'ist'][this['_levelMapL' + 'ist']['length'] - 0x1]['getCompone' + 'nt'](_0x44faf8);
                                _0x4be3f2['transform']['position'] = _0x4be6c6['endPos'], _0x4be3f2['transform']['rotationEu' + 'ler'] = _0x4be6c6['endRot'];
                            }
                            var _0x46de5a = (_0x4f7713 = _0x2b007a['getChildAt'](_0x44f86d['mapLength'] - 0x1))['getChildBy' + 'Name']('endPos');
                            _0x372a70['endPos'] = _0x46de5a['transform']['position'], _0x372a70['endRot'] = _0x46de5a['transform']['rotationEu' + 'ler'];
                            for (var _0x8681 = 0x0; _0x8681 < _0x372a70['levelMapDa' + 'ta']['bserPointL' + 'ist']['length']; _0x8681++) {
                                var _0x4a46d2 = _0x372a70['levelMapDa' + 'ta']['bserPointL' + 'ist'][_0x8681];
                                Laya['Vector3']['transformQ' + 'uat'](_0x4a46d2, _0x4be3f2['transform']['rotation'], _0x4a46d2), Laya['Vector3']['add'](_0x4a46d2, _0x4be3f2['transform']['position'], _0x4a46d2);
                            }
                            return this['_levelMapL' + 'ist']['push'](_0x4be3f2), this['loadedMapI' + 'dList'] += (_0x44f86d['id'] + 0x1)['toString']() + '-', _0x372a70;
                        }
                    },
                    {
                        'key': 'CreatMapCo' + 'mbination',
                        'value': function (_0x483d05, _0x4bbff4, _0x57a947, _0x2940f1, _0x4ec5d9) {
                            _0x4ec5d9['owner']['addChild'](new Laya['Sprite3D']('roleParent'));
                            var _0x5ec914 = _0x4ec5d9['owner']['addChild'](new Laya['Sprite3D']('trapParent')), _0x517f97 = (_0x4ec5d9['owner']['addChild'](new Laya['Sprite3D']('toolParent')), _0x4ec5d9['owner']['addChild'](new Laya['Sprite3D']('decoratePa' + 'rent')));
                            if (null != _0x4bbff4)
                                for (var _0x23b7ab = 0x0; _0x23b7ab < _0x4bbff4['length']; _0x23b7ab++) {
                                    var _0x4070c4 = _0x4bbff4[_0x23b7ab], _0x4f5d54 = this['CreatAOrna' + 'ment'](_0x4070c4, _0x5ec914);
                                    if (_0x4f5d54['numChildre' + 'n'] > 0x0) {
                                        var _0x3eecfe = _0x4f5d54['getChildAt'](0x0)['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']);
                                        null != _0x3eecfe && (_0x3eecfe['isKinemati' + 'c'] = !0x1);
                                    }
                                }
                            if (null != _0x2940f1)
                                for (var _0x116450 = 0x0; _0x116450 < _0x2940f1['length']; _0x116450++) {
                                    var _0x198f9c = _0x2940f1[_0x116450], _0x39a656 = this['CreatAOrna' + 'ment'](_0x198f9c, _0x517f97);
                                    _0x39a656['getCompone' + 'nt'](_0x272a92) || _0x39a656['addCompone' + 'nt'](_0x272a92);
                                }
                        }
                    },
                    {
                        'key': 'GetMapByle' + 'vel',
                        'value': function (_0x35639) {
                            for (var _0x5cbc46 = 0x0; _0x5cbc46 < this['allLevelMa' + 'ps']['length']; _0x5cbc46++) {
                                var _0x25ac22 = this['allLevelMa' + 'ps'][_0x5cbc46];
                                if (_0x25ac22['dengji'] == _0x35639) {
                                    var _0x235c9c = Math['floor'](Math['random']() * _0x25ac22['levelMaps']['length']), _0x42073a = _0x25ac22['levelMaps']['splice'](_0x235c9c, 0x1)[0x0];
                                    if (null != _0x42073a)
                                        return _0x42073a;
                                    break;
                                }
                            }
                            for (var _0x179d46 = 0x0; _0x179d46 < this['_mapData']['levelMapDa' + 'tas']['length']; _0x179d46++) {
                                var _0x211df9 = this['_mapData']['levelMapDa' + 'tas'][_0x179d46];
                                _0x211df9['hardLevel'] == _0x35639 && this['allLevelMa' + 'ps'][_0x35639]['levelMaps']['push'](_0x211df9);
                            }
                            return this['GetMapByle' + 'vel'](_0x35639);
                        }
                    },
                    {
                        'key': 'CreatAOrna' + 'ment',
                        'value': function (_0x53189f, _0x520869) {
                            var _0x465df7 = !(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2], _0x1507d6 = _0x3acbe6['I']['GetNewObj'](_0x53189f['typeName'], _0x520869, _0x465df7);
                            return _0x1507d6['transform']['localPosit' + 'ion'] = new Laya['Vector3'](-_0x53189f['pos']['x'], _0x53189f['pos']['y'], _0x53189f['pos']['z']), _0x1507d6['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](_0x53189f['rot']['x'], -_0x53189f['rot']['y'], -_0x53189f['rot']['z']), _0x1507d6['transform']['localScale'] = new Laya['Vector3'](_0x53189f['scale']['x'], _0x53189f['scale']['y'], _0x53189f['scale']['z']), _0x1507d6;
                        }
                    }
                ]), _0x34e58e;
            }(), _0x19a218 = function (_0x127f70) {
                function _0x38f443() {
                    return _0x1295b3(this, _0x38f443), _0x5971e6(this, _0x35d7e0(_0x38f443)['apply'](this, arguments));
                }
                return _0x3a441e(_0x38f443, Laya['Script3D']), _0x413e7f(_0x38f443, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['transform'] = this['owner']['transform'];
                        }
                    },
                    {
                        'key': 'onUpdate',
                        'value': function () {
                            this['transform']['rotate'](new Laya['Vector3'](0x0, 0x1, 0x0), !0x0, !0x1);
                        }
                    }
                ]), _0x38f443;
            }(), _0x4629a1 = function () {
                function _0x4f7a32() {
                    _0x1295b3(this, _0x4f7a32);
                }
                return _0x413e7f(_0x4f7a32, null, [
                    {
                        'key': 'getComOnAl' + 'lParent',
                        'value': function (_0x487f4c, _0x3ad865) {
                            if (null == _0x487f4c)
                                return null;
                            var _0x4c3661 = _0x487f4c['getCompone' + 'nt'](_0x3ad865);
                            return null != _0x4c3661 ? _0x4c3661 : _0x4f7a32['getComOnAl' + 'lParent'](_0x487f4c['parent'], _0x3ad865);
                        }
                    },
                    {
                        'key': 'getCompOnP' + 'arent',
                        'value': function (_0x1c4f43, _0x1a7e63) {
                            if (null == _0x1c4f43)
                                return null;
                            var _0x457c3a = _0x1c4f43['getCompone' + 'nt'](_0x1a7e63);
                            return null != _0x457c3a ? _0x457c3a : null != _0x1c4f43['parent'] ? _0x1c4f43['parent']['getCompone' + 'nt'](_0x1a7e63) : null;
                        }
                    },
                    {
                        'key': 'setFog',
                        'value': function (_0x259db3, _0x33f5a1) {
                            var _0x2e3fcf = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : 0x1e, _0xce4e4b = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 0x32;
                            _0x259db3['enableFog'] = !0x0, _0x259db3['fogColor'] = _0x4f7a32['getRGB'](_0x33f5a1), _0x259db3['fogStart'] = _0x2e3fcf, _0x259db3['fogRange'] = _0xce4e4b;
                        }
                    },
                    {
                        'key': 'getRGB',
                        'value': function (_0x4d61bc) {
                            var _0x4c2fa3 = [], _0x232d34 = [], _0x325804 = _0x4d61bc['replace'](/#/, '');
                            if (0x3 == _0x325804['length']) {
                                for (var _0x2f463f = [], _0x2ceba0 = 0x0; _0x2ceba0 < 0x3; _0x2ceba0++)
                                    _0x2f463f['push'](_0x325804['charAt'](_0x2ceba0) + _0x325804['charAt'](_0x2ceba0));
                                _0x325804 = _0x2f463f['join']('');
                            }
                            for (_0x2ceba0 = 0x0; _0x2ceba0 < 0x3; _0x2ceba0++)
                                _0x4c2fa3[_0x2ceba0] = '0x' + _0x325804['substr'](0x2 * _0x2ceba0, 0x2), _0x232d34['push'](parseInt(_0x4c2fa3[_0x2ceba0]));
                            return new Laya['Vector3'](_0x232d34[0x0] / 0xff, _0x232d34[0x1] / 0xff, _0x232d34[0x2] / 0xff);
                        }
                    },
                    {
                        'key': 'IsConvexAn' + 'gle',
                        'value': function (_0x317ea3, _0x16431b) {
                            var _0x81db28 = new Laya['Vector3']();
                            return Laya['Vector3']['cross'](_0x317ea3, _0x16431b, _0x81db28), Laya['Vector3']['dot'](new Laya['Vector3'](0x0, 0x1, 0x0), _0x81db28) >= 0x0;
                        }
                    }
                ]), _0x4f7a32;
            }(), _0x3411df = function (_0x20d31e) {
                function _0x55812d() {
                    var _0x36384b;
                    return _0x1295b3(this, _0x55812d), (_0x36384b = _0x5971e6(this, _0x35d7e0(_0x55812d)['call'](this)))['forwardSpe' + 'ed'] = 0x1, _0x36384b['driftSpeed'] = 0.6, _0x36384b['driftLimit'] = 0x14, _0x36384b['rotSpeedOn' + 'Fly'] = 0x4, _0x36384b['angleLimit'] = 0x4b, _0x36384b['speedUpDur' + 'ation'] = 0xbb8, _0x36384b['speedUpTim' + 'es'] = 1.5, _0x36384b['Unstoppabl' + 'eDuration'] = 0x1388, _0x36384b['isNPC'] = !0x1, _0x36384b['isMove'] = !0x1, _0x36384b['isDrift'] = !0x1, _0x36384b['isFly'] = !0x1, _0x36384b['isPress'] = !0x1, _0x36384b['isLeftDrif' + 't'] = !0x1, _0x36384b['isSuperSpe' + 'ed'] = !0x1, _0x36384b['isUnstoppa' + 'ble'] = !0x1, _0x36384b['isOver'] = !0x1, _0x36384b['hitResult'] = new Laya['HitResult'](), _0x36384b['targetPos'] = new Laya['Vector3'](0x0, 0x0, 0x1), _0x36384b['groundNorm' + 'al'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x36384b['direction'] = new Laya['Vector3'](0x0, 0x0, 0x1), _0x36384b['currentSpe' + 'ed'] = 0x0, _0x36384b['pointCheck' + 'Count'] = 0x5, _0x36384b['_CheckInde' + 'x'] = 0x0, _0x36384b['curSkinInd' + 'ex'] = -0x1, _0x36384b['randTime'] = new Laya['Vector2'](0x7d0, 0x1770), _0x36384b['randAngle'] = 0xf, _0x36384b['curRandTim' + 'e'] = 0x0, _0x36384b['curRandAng' + 'le'] = 0x0, _0x36384b['isColled'] = !0x1, _0x36384b['dir'] = new Laya['Vector3'](), _0x36384b['collTime'] = 0x3e8, _0x36384b['speedY'] = 0x0, _0x36384b['minFlyHeig' + 'ht'] = 0x0, _0x36384b;
                }
                return _0x3a441e(_0x55812d, Laya['Script3D']), _0x413e7f(_0x55812d, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['gameObj'] = this['owner'], this['transform'] = this['gameObj']['transform'], this['rigidBody'] = this['owner']['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']), this['CarRotY'] = this['owner']['getChildBy' + 'Name']('CarRotY')['transform'], this['CarRotX'] = this['CarRotY']['owner']['getChildBy' + 'Name']('CarRotX')['transform'], this['setSkin'](Math['ceil'](0x9 * Math['random']())), this['from'] = this['CarRotX']['owner']['getChildBy' + 'Name']('from')['transform'], this['to'] = this['CarRotX']['owner']['getChildBy' + 'Name']('to')['transform'], this['FX_PY_Spee' + 'd'] = this['CarRotX']['owner']['getChildBy' + 'Name']('FX_PY_Spee' + 'd'), this['FX_PY_Spee' + 'd']['active'] = !0x1, this['FX_PY_Drif' + 't'] = this['CarRotX']['owner']['getChildBy' + 'Name']('FX_PY_Drif' + 't'), this['FX_PY_Drif' + 't']['active'] = !0x1, this['curRoadDir' + 'ect'] = new Laya['Vector3'](0x0, 0x0, 0x1), this['curAngleYS' + 'ection'] = new Laya['Vector2'](-this['angleLimit'], this['angleLimit']), this['curPointCh' + 'eckList'] = new Array(), this['currentSpe' + 'ed'] = 0x0, this['curRandAng' + 'le'] = 0x0, this['curRandTim' + 'e'] = this['randTime']['x'] + Math['random']() * this['randTime']['y'];
                        }
                    },
                    {
                        'key': 'setSkin',
                        'value': function () {
                            var _0x411cd0 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                            if (this['curSkinInd' + 'ex'] != _0x411cd0) {
                                if (this['curSkinInd' + 'ex'] = _0x411cd0, null != this['carAnimato' + 'r']) {
                                    var _0x39eec8 = this['carAnimato' + 'r']['owner']['parent'];
                                    _0x3acbe6['I']['RecoverObj'](_0x39eec8, !0x0);
                                }
                                var _0x49754a = 'pf0' + _0x411cd0['toString']();
                                this['pf'] = _0x3acbe6['I']['GetNewObj'](_0x49754a, this['CarRotX']['owner'], !0x0), this['pf']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](), this['carAnimato' + 'r'] = this['pf']['getChildAt'](0x0)['getCompone' + 'nt'](Laya['Animator']), this['roleAnimat' + 'or'] = this['pf']['getChildAt'](0x1)['getCompone' + 'nt'](Laya['Animator']), this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front');
                            }
                        }
                    },
                    {
                        'key': 'ReSetPlaye' + 'r',
                        'value': function () {
                            var _0x1dfc43 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : new Laya['Vector3'](0x0, 0x0, 0x0), _0x256d79 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x0;
                            Laya['timer']['clear'](this, this['speedUpOve' + 'r']), Laya['timer']['clear'](this, this['moveByFram' + 'e']), this['isColled'] = !0x1, this['curRandAng' + 'le'] = 0x0, this['curRandTim' + 'e'] = this['randTime']['x'] + Math['random']() * this['randTime']['y'], this['isSuperSpe' + 'ed'] = !0x1, this['FX_PY_Spee' + 'd']['active'] = !0x1, this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front'), this['isMove'] = !0x1, this['transform']['localPosit' + 'ion'] = _0x1dfc43, this['localRotY'] = 0x0, this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['localRotX'] = 0x0, this['CarRotX']['localRotat' + 'ionEulerX'] = this['localRotX'], this['_CheckInde' + 'x'] = _0x256d79, this['curPointCh' + 'eckList'] = new Array(), this['isFly'] = !0x1;
                        }
                    },
                    {
                        'key': 'startMove',
                        'value': function () {
                            this['currentSpe' + 'ed'] = this['forwardSpe' + 'ed'], this['isMove'] = !0x0, this['localRotX'] = 0x0, this['localRotY'] = 0x0;
                        }
                    },
                    {
                        'key': 'onUpdate',
                        'value': function () {
                            if (this['isMove'] && !this['isOver']) {
                                if (this['isFly']) {
                                    if (_0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']) && this['hitResult']['collider']['owner']['name']['indexOf']('gangplank_' + 'mx') >= 0x0)
                                        return this['targetPos'] = this['hitResult']['point'], this['groundNorm' + 'al'] = this['hitResult']['normal'], this['direction'] = new Laya['Vector3'](), Laya['Vector3']['subtract'](this['targetPos'], this['transform']['position'], this['direction']), Laya['Vector3']['normalize'](this['direction'], this['direction']), Laya['Vector3']['scale'](this['direction'], this['currentSpe' + 'ed'], this['direction']), void this['transform']['translate'](this['direction'], !0x1);
                                    if (this['transform']['translate'](this['direction'], !0x1), this['transform']['translate'](new Laya['Vector3'](0x0, this['speedY'], 0x0), !0x1), this['speedY'] -= 0.5 * 0x24 / 0x3e8, this['isPress'] && (this['CarRotX']['localRotat' + 'ionEulerX'] += this['rotSpeedOn' + 'Fly']), this['speedY'] < 0x0) {
                                        if (_0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']) && (this['hitResult']['collider']['owner']['name']['indexOf']('lu') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('cao') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('Plane') >= 0x0)) {
                                            var _0x36f31d = this['CarRotX']['localRotat' + 'ionEulerX'] % 0x168;
                                            _0x36f31d < 0x2d || _0x36f31d > 0x13b ? (this['transform']['position'] = this['hitResult']['point'], this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0, this['isFly'] = !0x1) : (this['isMove'] = !0x1, this['isOver'] = !0x0, this['transform']['position'] = this['hitResult']['point'], this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0, this['roleAnimat' + 'or']['play']('falldown'), this['carAnimato' + 'r']['play']('falldown'), Laya['timer']['once'](0x7d0, this, this['onRevive']));
                                        }
                                        this['transform']['position']['y'] < this['minFlyHeig' + 'ht'] && this['fall']();
                                    }
                                } else {
                                    if (this['curRandTim' + 'e'] <= 0x0) {
                                        this['curRandAng' + 'le'] = Math['random']() * this['randAngle'];
                                        var _0x1681e8 = new Laya['Vector3']();
                                        Laya['Vector3']['subtract'](this['transform']['position'], this['curPointCh' + 'eckList'][this['CheckIndex']], _0x1681e8);
                                        var _0x10c94d = this['curRoadDir' + 'ect'];
                                        _0x4629a1['IsConvexAn' + 'gle'](_0x1681e8, _0x10c94d) || (this['curRandAng' + 'le'] = -this['curRandAng' + 'le']), this['curRandTim' + 'e'] = this['randTime']['x'] + Math['random']() * this['randTime']['y'];
                                    } else
                                        this['curRandTim' + 'e'] -= 0x24;
                                    if (this['curRandAng' + 'le'] -= 0.02 * this['curRandAng' + 'le'], Math['abs'](this['curRandAng' + 'le']) < 0x1 && (this['curRandAng' + 'le'] = 0x0), this['CheckIndex'] + 0x1 >= this['curPointCh' + 'eckList']['length'] - 0x1)
                                        return;
                                    for (var _0x20ea02 = 0x0, _0x170050 = Laya['Vector3']['distanceSq' + 'uared'](this['transform']['position'], this['curPointCh' + 'eckList'][this['CheckIndex']]), _0x10544b = 0x0; _0x10544b < this['pointCheck' + 'Count'] && !(this['CheckIndex'] + _0x10544b >= this['curPointCh' + 'eckList']['length']); _0x10544b++) {
                                        var _0x5b5e32 = Laya['Vector3']['distanceSq' + 'uared'](this['transform']['position'], this['curPointCh' + 'eckList'][this['CheckIndex'] + _0x10544b]);
                                        _0x170050 >= _0x5b5e32 && (_0x20ea02 = _0x10544b, _0x170050 = _0x5b5e32);
                                    }
                                    this['CheckIndex'] += _0x20ea02, Laya['Vector3']['subtract'](this['curPointCh' + 'eckList'][this['CheckIndex'] + 0x1], this['curPointCh' + 'eckList'][this['CheckIndex']], this['curRoadDir' + 'ect']), Laya['Vector3']['normalize'](this['curRoadDir' + 'ect'], this['curRoadDir' + 'ect']);
                                    var _0xf2b5b1 = Math['acos'](Laya['Vector3']['dot'](new Laya['Vector3'](0x0, 0x1, 0x0), this['groundNorm' + 'al'])) / Math['PI'] * 0xb4;
                                    this['localRotX'] = this['localRotX'] + 0.05 * (_0xf2b5b1 - this['localRotX']), this['CarRotX']['localRotat' + 'ionEulerX'] = this['localRotX'];
                                    var _0x6f3682 = new Laya['Vector3'](this['curRoadDir' + 'ect']['x'], 0x0, this['curRoadDir' + 'ect']['z']), _0xf70c06 = 0x0;
                                    _0xf70c06 = 0x0 != _0x6f3682['z'] ? Math['atan'](_0x6f3682['x'] / _0x6f3682['z']) / Math['PI'] * 0xb4 : _0x6f3682['x'] > 0x0 ? 0x5a : -0x5a, this['curRoadDir' + 'ect']['z'] < 0x0 && (_0xf70c06 = 0xb4 + _0xf70c06), this['localRotY'] = _0xf70c06 + this['curRandAng' + 'le'], this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), _0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']) ? ((this['hitResult']['collider']['owner']['name']['indexOf']('lu') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('cao') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('Plane') >= 0x0) && (this['targetPos'] = this['hitResult']['point'], this['groundNorm' + 'al'] = this['hitResult']['normal'], this['direction'] = new Laya['Vector3'](), Laya['Vector3']['subtract'](this['targetPos'], this['transform']['position'], this['direction']), Laya['Vector3']['normalize'](this['direction'], this['direction']), Laya['Vector3']['scale'](this['direction'], this['currentSpe' + 'ed'], this['direction'])), this['transform']['translate'](this['direction'], !0x1)) : this['fall'](), this['isDrift'] ? (this['targetSpee' + 'd'] = this['driftSpeed'], this['FX_PY_Drif' + 't']['active'] = !0x0) : (this['targetSpee' + 'd'] = this['forwardSpe' + 'ed'], this['FX_PY_Drif' + 't']['active'] = !0x1), this['isSuperSpe' + 'ed'] && (this['targetSpee' + 'd'] = this['targetSpee' + 'd'] * this['speedUpTim' + 'es']), this['currentSpe' + 'ed'] = 0.02 * (this['targetSpee' + 'd'] - this['currentSpe' + 'ed']) + this['currentSpe' + 'ed'];
                                }
                            }
                        }
                    },
                    {
                        'key': 'onTriggerE' + 'nter',
                        'value': function (_0x199b91) {
                            var _0xe63abe = _0x199b91['owner']['name'], _0x138729 = _0x4629a1['getCompOnP' + 'arent'](_0x199b91['owner'], _0x272a92);
                            if (_0x138729 && !(_0xe63abe['indexOf']('roadblock_' + 'mx') >= 0x0)) {
                                var _0x10450c = Laya['Quaternion']['DEFAULT'];
                                Laya['Quaternion']['createFrom' + 'AxisAngle'](new Laya['Vector3'](0x0, 0x1, 0x0), (Math['random']() - 0.5) * Math['PI'] / 0x3, _0x10450c);
                                var _0x4dec6b = new Laya['Vector3']();
                                return Laya['Vector3']['transformQ' + 'uat'](this['direction'], _0x10450c, _0x4dec6b), void _0x138729['BeStrike'](_0x4dec6b, 0x0);
                            }
                            if (_0xe63abe['indexOf']('gangplank_' + 'mx') >= 0x0)
                                this['flight']();
                            else {
                                if (_0xe63abe['indexOf']('speed_mx') >= 0x0)
                                    this['speedUp']();
                                else {
                                    if (_0xe63abe['indexOf']('car') >= 0x0 || _0xe63abe['indexOf']('wood_mx') >= 0x0 || _0xe63abe['indexOf']('stone') >= 0x0 || _0xe63abe['indexOf']('shan') >= 0x0 || _0xe63abe['indexOf']('roadblock_' + 'mx') >= 0x0 || _0xe63abe['indexOf']('tree_mx') >= 0x0)
                                        this['isUnstoppa' + 'ble'] || this['crash']();
                                    else {
                                        if (_0xe63abe['indexOf']('NPC') >= 0x0 || _0xe63abe['indexOf']('player') >= 0x0) {
                                            var _0x2921eb = new Laya['Vector3']();
                                            Laya['Vector3']['subtract'](this['transform']['position'], _0x199b91['owner']['transform']['position'], _0x2921eb), this['isColled'] || (this['collTime'] = 0x3e8, this['isColled'] = !0x0, this['dir'] = _0x2921eb, Laya['Vector3']['scale'](this['dir'], 0.15, this['dir']), this['iscollisio' + 'ned']());
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'iscollisio' + 'ned',
                        'value': function () {
                            Laya['timer']['frameLoop'](0x1, this, this['moveByFram' + 'e']);
                        }
                    },
                    {
                        'key': 'moveByFram' + 'e',
                        'value': function () {
                            var _0x4926ba = new Laya['Vector3']();
                            if (Laya['Vector3']['scale'](this['dir'], this['collTime'] / 0x3e8, _0x4926ba), this['collTime'] > 0x320) {
                                var _0x3e7b9b = 0x1 - (this['collTime'] - 0x320) / 0xc8, _0x375658 = 0x1 + 0.05 * (0x1 - 0x4 * Math['pow'](_0x3e7b9b - 0.5, 0x2));
                                this['pf']['transform']['localScale'] = new Laya['Vector3'](_0x375658, _0x375658, _0x375658);
                            }
                            this['transform']['translate'](_0x4926ba), this['collTime'] -= 0x24, this['collTime'] <= 0x0 && (Laya['timer']['clear'](this, this['moveByFram' + 'e']), this['isColled'] = !0x1, this['collTime'] = 0x3e8);
                        }
                    },
                    {
                        'key': 'flight',
                        'value': function () {
                            this['CarRotY']['getForward'](this['direction']), Laya['Vector3']['scale'](this['direction'], -this['currentSpe' + 'ed'], this['direction']), this['isDrift'] = !0x1, this['FX_PY_Drif' + 't']['active'] = !0x1, this['CarRotX']['localRotat' + 'ionEulerX'] = -0x1e, this['speedY'] = 0.25, this['isFly'] = !0x0, this['minFlyHeig' + 'ht'] = this['transform']['position']['y'] - 0x28;
                        }
                    },
                    {
                        'key': 'fall',
                        'value': function () {
                            this['isFly'] = !0x0, this['isMove'] = !0x1, this['roleAnimat' + 'or']['crossFade']('falldown02', 0.4), this['carAnimato' + 'r']['crossFade']('falldown02', 0.4), this['FX_PY_Drif' + 't']['active'] = !0x1, Laya['timer']['once'](0x7d0, this, this['onRevive']);
                        }
                    },
                    {
                        'key': 'crash',
                        'value': function () {
                            this['FX_PY_Drif' + 't']['active'] = !0x1, this['roleAnimat' + 'or']['crossFade']('falldown03', 0.4), this['carAnimato' + 'r']['crossFade']('falldown03', 0.4), this['isMove'] = !0x1, Laya['timer']['once'](0x7d0, this, this['onRevive']);
                        }
                    },
                    {
                        'key': 'speedUp',
                        'value': function () {
                            Laya['timer']['clear'](this, this['speedUpOve' + 'r']), this['isSuperSpe' + 'ed'] = !0x0, Laya['timer']['once'](this['speedUpDur' + 'ation'], this, this['speedUpOve' + 'r']), this['targetSpee' + 'd'] = this['targetSpee' + 'd'] * this['speedUpTim' + 'es'], this['currentSpe' + 'ed'] = this['targetSpee' + 'd'], this['FX_PY_Spee' + 'd']['active'] = !0x0;
                        }
                    },
                    {
                        'key': 'speedUpOve' + 'r',
                        'value': function () {
                            this['isSuperSpe' + 'ed'] = !0x1, this['FX_PY_Spee' + 'd']['active'] = !0x1;
                        }
                    },
                    {
                        'key': 'changePoin' + 'tCheckList',
                        'value': function (_0x8c33db, _0x498f1c) {
                            this['curPointCh' + 'eckList']['splice'](0x0, _0x8c33db), this['curPointCh' + 'eckList'] = this['curPointCh' + 'eckList']['concat'](_0x498f1c), this['CheckIndex'] >= _0x8c33db ? this['CheckIndex'] -= _0x8c33db : this['onRevive']();
                        }
                    },
                    {
                        'key': 'onRevive',
                        'value': function () {
                            this['isMove'] = !0x0, this['isDrift'] = !0x1, this['FX_PY_Drif' + 't']['active'] = !0x1, this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0, this['speedY'] = 0x0, this['isFly'] = !0x1, this['isSuperSpe' + 'ed'] = !0x1, this['FX_PY_Spee' + 'd']['active'] = !0x1, this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front'), this['localRotX'] = 0x0, this['localRotY'] = 0x0, this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['CheckIndex'] = _0x3c52f6['I']['playerCont' + 'roller']['CheckIndex'] - Math['ceil'](0xf + 0xf * Math['random']()), this['CheckIndex'] < 0x0 && (this['CheckIndex'] = 0x0), this['transform']['position'] = new Laya['Vector3'](this['curPointCh' + 'eckList'][this['CheckIndex']]['x'] + 0xa * Math['random']() - 0x5, this['curPointCh' + 'eckList'][this['CheckIndex']]['y'], this['curPointCh' + 'eckList'][this['CheckIndex']]['z'] + 0xa * Math['random']() - 0x5), Laya['Vector3']['subtract'](this['curPointCh' + 'eckList'][this['CheckIndex'] + 0x1], this['curPointCh' + 'eckList'][this['CheckIndex']], this['curRoadDir' + 'ect']), Laya['Vector3']['normalize'](this['curRoadDir' + 'ect'], this['curRoadDir' + 'ect']), this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0;
                            var _0x4f0d2d = new Laya['Vector3'](this['curRoadDir' + 'ect']['x'], 0x0, this['curRoadDir' + 'ect']['z']), _0x184064 = 0x0;
                            _0x184064 = 0x0 != _0x4f0d2d['z'] ? Math['atan'](_0x4f0d2d['x'] / _0x4f0d2d['z']) / Math['PI'] * 0xb4 : _0x4f0d2d['x'] > 0x0 ? 0x5a : -0x5a, this['curRoadDir' + 'ect']['z'] < 0x0 && (_0x184064 = 0xb4 + _0x184064), this['localRotY'] = _0x184064, this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0);
                        }
                    },
                    {
                        'key': 'curPointCh' + 'eckList',
                        'get': function () {
                            return this['_curPointC' + 'heckList'];
                        },
                        'set': function (_0x2f8d82) {
                            this['_curPointC' + 'heckList'] = _0x2f8d82;
                        }
                    },
                    {
                        'key': 'CheckIndex',
                        'get': function () {
                            return this['_CheckInde' + 'x'];
                        },
                        'set': function (_0x3355c5) {
                            this['_CheckInde' + 'x'] = _0x3355c5;
                        }
                    }
                ]), _0x55812d;
            }(), _0x274f61 = function (_0x917090) {
                function _0xd73bc9() {
                    var _0x4565d6;
                    return _0x1295b3(this, _0xd73bc9), (_0x4565d6 = _0x5971e6(this, _0x35d7e0(_0xd73bc9)['call'](this)))['forwardSpe' + 'ed'] = 0x1, _0x4565d6['driftSpeed'] = 0.6, _0x4565d6['driftLimit'] = 0x14, _0x4565d6['rotSpeedOn' + 'Fly'] = 0x8, _0x4565d6['angleLimit'] = 0x4b, _0x4565d6['speedUpDur' + 'ation'] = 0xbb8, _0x4565d6['speedUpTim' + 'es'] = 1.5, _0x4565d6['Unstoppabl' + 'eDuration'] = 0x1388, _0x4565d6['allOilGasN' + 'umber'] = 0x8, _0x4565d6['driftSpeed' + 'UpTime'] = 0xbb8, _0x4565d6['pointCheck' + 'Count'] = 0x5, _0x4565d6['isOver'] = !0x1, _0x4565d6['isMove'] = !0x1, _0x4565d6['isDrift'] = !0x1, _0x4565d6['isFly'] = !0x1, _0x4565d6['isPress'] = !0x1, _0x4565d6['isLeftDrif' + 't'] = !0x1, _0x4565d6['isSuperSpe' + 'ed'] = !0x1, _0x4565d6['isUnstoppa' + 'ble'] = !0x1, _0x4565d6['isLoseCont' + 'rol'] = !0x1, _0x4565d6['isDriftSpe' + 'edUp'] = !0x1, _0x4565d6['_CheckInde' + 'x'] = 0x0, _0x4565d6['localRotY'] = 0x0, _0x4565d6['localRotX'] = 0x0, _0x4565d6['hitResult'] = new Laya['HitResult'](), _0x4565d6['targetPos'] = new Laya['Vector3'](0x0, 0x0, 0x1), _0x4565d6['groundNorm' + 'al'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4565d6['direction'] = new Laya['Vector3'](0x0, 0x0, 0x1), _0x4565d6['hitNoThing' + 'Max'] = 0x5, _0x4565d6['curHitNo'] = 0x0, _0x4565d6['posTest'] = new Laya['Vector3'](), _0x4565d6['curSkinInd' + 'ex'] = -0x1, _0x4565d6['playDriftV' + 'oiceTime'] = 0x258, _0x4565d6['isColled'] = !0x1, _0x4565d6['dir'] = new Laya['Vector3'](), _0x4565d6['collTime'] = 0x3e8, _0x4565d6['startPoint'] = new Laya['Point'](), _0x4565d6['diffX'] = 0x0, _0x4565d6['diffY'] = 0x0, _0x4565d6['moveValue'] = new Laya['Vector3'](), _0x4565d6['speedContr' + 'olPara'] = 0.22, _0x4565d6['speedY'] = 0x0, _0x4565d6['minFlyHeig' + 'ht'] = 0x0, _0x4565d6;
                }
                return _0x3a441e(_0xd73bc9, Laya['Script3D']), _0x413e7f(_0xd73bc9, [
                    {
                        'key': 'onAwake',
                        'value': function () {
                            this['gameObj'] = this['owner'], this['transform'] = this['gameObj']['transform'], this['rigidBody'] = this['owner']['getCompone' + 'nt'](Laya['Rigidbody3' + 'D']), this['CameraPos'] = _0x3c52f6['I']['gameScenes']['getChildBy' + 'Name']('CameraPos'), this['CarRotY'] = this['owner']['getChildBy' + 'Name']('CarRotY')['transform'], this['CarRotX'] = this['CarRotY']['owner']['getChildBy' + 'Name']('CarRotX')['transform'], this['setSkin'](), this['Plane'] = this['CarRotX']['owner']['getChildBy' + 'Name']('Plane'), this['Plane']['active'] = !0x0, this['FX_PY_Spee' + 'd'] = this['CarRotX']['owner']['getChildBy' + 'Name']('FX_PY_Spee' + 'd'), this['Wind_Pos'] = this['CameraPos']['getChildBy' + 'Name']('Wind_Pos'), this['FX_PY_Run_' + 'Wind'] = this['Wind_Pos']['getChildBy' + 'Name']('FX_PY_Run_' + 'Wind'), this['FX_PY_Spee' + 'd_Wind'] = this['Wind_Pos']['getChildBy' + 'Name']('FX_PY_Spee' + 'd_Wind'), this['FX_PY_Spee' + 'd']['active'] = !0x1, this['FX_PY_Run_' + 'Wind']['active'] = !0x1, this['FX_PY_Spee' + 'd_Wind']['active'] = !0x1, this['FX_PY_Shie' + 'ld'] = this['CameraPos']['getChildBy' + 'Name']('FX_PY_Shie' + 'ld'), this['FX_PY_Shie' + 'ld']['active'] = !0x1, this['FX_PY_Drif' + 't'] = this['CarRotX']['owner']['getChildBy' + 'Name']('FX_PY_Drif' + 't'), this['FX_PY_Drif' + 't']['active'] = !0x1, this['from'] = this['CameraPos']['getChildBy' + 'Name']('from')['transform'], this['to'] = this['CameraPos']['getChildBy' + 'Name']('to')['transform'], Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpE' + 'vent']), Laya['stage']['on'](Laya['Event']['MOUSE_OUT'], this, this['onMouseUpE' + 'vent']), Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nEvent']), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eEvent']), this['curRoadDir' + 'ect'] = new Laya['Vector3'](), this['curAngleYS' + 'ection'] = new Laya['Vector2'](-this['angleLimit'], this['angleLimit']), this['curPointCh' + 'eckList'] = new Array(), this['curOilValu' + 'e'] = 0x0;
                        }
                    },
                    {
                        'key': 'TestKEY',
                        'value': function (_0x3a65f4) {
                            Laya['Vector3']['add'](this['posTest'], new Laya['Vector3'](0x0, 0x0, 0x64), this['posTest']);
                            var _0x2cf992 = _0x3c52f6['I']['WorldToScr' + 'een'](this['posTest']);
                            console['log']('newPos', _0x2cf992);
                        }
                    },
                    {
                        'key': 'ReSetPlaye' + 'r',
                        'value': function () {
                            var _0x2fd29e = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : new Laya['Vector3'](0x0, 0x0, 0x0);
                            Laya['timer']['clear'](this, this['speedUpOve' + 'r']), Laya['timer']['clear'](this, this['moveByFram' + 'e']), this['isColled'] = !0x1, this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front'), this['isMove'] = !0x1, this['transform']['localPosit' + 'ion'] = _0x2fd29e, this['localRotY'] = 0x0, this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['localRotX'] = 0x0, this['CarRotX']['localRotat' + 'ionEulerX'] = this['localRotX'], this['CameraPos']['transform']['position'] = this['CarRotY']['position'];
                            var _0x26450c = new Laya['Vector3'](0x0, 0x0, 0x0);
                            this['CameraPos']['transform']['localRotat' + 'ionEuler'] = _0x26450c, this['_CheckInde' + 'x'] = 0x0, this['curPointCh' + 'eckList'] = new Array(), this['curOilValu' + 'e'] = 0x0, this['isFly'] = !0x1, this['isLoseCont' + 'rol'] = !0x1, this['FX_PY_Run_' + 'Wind']['active'] = !0x1, this['FX_PY_Spee' + 'd_Wind']['active'] = !0x1, this['Plane']['active'] = !0x0, Laya['stage']['event']('UpDataOil', this['curOilValu' + 'e'] / this['allOilGasN' + 'umber']);
                            var _0x3b2807 = { 'curScore': Math['ceil'](_0x3c52f6['I']['Score']) };
                            _0x18c0b8['emit'](_0x2b928a['G2S_UPDATE' + '_CUR_SCORE'], _0x3b2807), _0x3d6d80['stopSound']('drift');
                        }
                    },
                    {
                        'key': 'setSkin',
                        'value': function () {
                            var _0x4378a1 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                            if (this['curSkinInd' + 'ex'] != _0x4378a1) {
                                if (this['curSkinInd' + 'ex'] = _0x4378a1, null != this['carAnimato' + 'r']) {
                                    var _0x2a6ff2 = this['carAnimato' + 'r']['owner']['parent'];
                                    _0x3acbe6['I']['RecoverObj'](_0x2a6ff2, !0x0);
                                }
                                var _0x568d45 = 'pf0' + _0x4378a1['toString']();
                                this['pf'] = _0x3acbe6['I']['GetNewObj'](_0x568d45, this['CarRotX']['owner'], !0x0), this['carAnimato' + 'r'] = this['pf']['getChildAt'](0x0)['getCompone' + 'nt'](Laya['Animator']), this['roleAnimat' + 'or'] = this['pf']['getChildAt'](0x1)['getCompone' + 'nt'](Laya['Animator']), this['pf']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, -1.251, 0x0), this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front');
                            }
                        }
                    },
                    {
                        'key': 'ReLive',
                        'value': function () {
                            var _0x37a8f0 = this;
                            Laya['stage']['event']('endDrift'), Laya['timer']['clear'](this, this['speedUpOve' + 'r']), Laya['timer']['clear'](this, this['moveByFram' + 'e']), this['isColled'] = !0x1, this['roleAnimat' + 'or']['play']('front'), this['carAnimato' + 'r']['play']('front'), this['CheckIndex'] -= 0xa, this['CheckIndex'] < 0x0 && (this['CheckIndex'] = 0x0), this['transform']['position'] = new Laya['Vector3'](this['curPointCh' + 'eckList'][this['CheckIndex']]['x'], this['curPointCh' + 'eckList'][this['CheckIndex']]['y'], this['curPointCh' + 'eckList'][this['CheckIndex']]['z']), Laya['Vector3']['subtract'](this['curPointCh' + 'eckList'][this['CheckIndex'] + 0x1], this['curPointCh' + 'eckList'][this['CheckIndex']], this['curRoadDir' + 'ect']), Laya['Vector3']['normalize'](this['curRoadDir' + 'ect'], this['curRoadDir' + 'ect']), this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0;
                            var _0x1b64f9 = new Laya['Vector3'](this['curRoadDir' + 'ect']['x'], 0x0, this['curRoadDir' + 'ect']['z']), _0x53dd70 = 0x0;
                            _0x53dd70 = 0x0 != _0x1b64f9['z'] ? Math['atan'](_0x1b64f9['x'] / _0x1b64f9['z']) / Math['PI'] * 0xb4 : _0x1b64f9['x'] > 0x0 ? 0x5a : -0x5a, this['curRoadDir' + 'ect']['z'] < 0x0 && (_0x53dd70 = 0xb4 + _0x53dd70), this['localRotY'] = _0x53dd70, this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['CameraPos']['transform']['position'] = this['CarRotY']['position'], this['CameraPos']['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['isMove'] = !0x0, this['isLoseCont' + 'rol'] = !0x1, this['isFly'] = !0x1, this['Plane']['active'] = !0x0, this['getUnstopp' + 'ableBuff'](), Laya['timer']['once'](0x64, this, function () {
                                _0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](_0x37a8f0['from']['position'], _0x37a8f0['to']['position'], _0x37a8f0['hitResult']) ? (_0x37a8f0['hitResult']['collider']['owner']['name']['indexOf']('lu') >= 0x0 || _0x37a8f0['hitResult']['collider']['owner']['name']['indexOf']('cao') >= 0x0 || _0x37a8f0['hitResult']['collider']['owner']['name']['indexOf']('Plane') >= 0x0) && (_0x37a8f0['transform']['position'] = _0x37a8f0['hitResult']['point'], _0x37a8f0['CameraPos']['transform']['position'] = _0x37a8f0['CarRotY']['position'], _0x3d6d80['playSoundE' + 'ffect']('down', 0x1)) : console['log']('复活检测点失败！');
                            });
                        }
                    },
                    {
                        'key': 'onUpdate',
                        'value': function () {
                            if (this['playDriftV' + 'oiceTime'] >= 0x0 && (this['playDriftV' + 'oiceTime'] -= 0x24), this['isMove']) {
                                if (!this['isLoseCont' + 'rol']) {
                                    this['CameraPos']['transform']['position'] = this['CarRotY']['position'];
                                    var _0x23ca71 = new Laya['Vector3'](0x0, this['CameraPos']['transform']['localRotat' + 'ionEulerY'], 0x0);
                                    Laya['Vector3']['lerp'](_0x23ca71, new Laya['Vector3'](0x0, this['localRotY'], 0x0), 0.02, _0x23ca71), this['CameraPos']['transform']['localRotat' + 'ionEuler'] = _0x23ca71, this['Wind_Pos']['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, 0.05 * (this['localRotY'] - _0x23ca71['y']), 0x0);
                                }
                                if (this['isFly']) {
                                    if (_0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']) && this['hitResult']['collider']['owner']['name']['indexOf']('gangplank_' + 'mx') >= 0x0)
                                        return this['targetPos'] = this['hitResult']['point'], this['groundNorm' + 'al'] = this['hitResult']['normal'], this['direction'] = new Laya['Vector3'](), Laya['Vector3']['subtract'](this['targetPos'], this['transform']['position'], this['direction']), Laya['Vector3']['normalize'](this['direction'], this['direction']), Laya['Vector3']['scale'](this['direction'], this['currentSpe' + 'ed'], this['direction']), void this['transform']['translate'](this['direction'], !0x1);
                                    (this['CameraPos']['transform']['getForward'](this['direction']), Laya['Vector3']['scale'](this['direction'], -this['currentSpe' + 'ed'], this['direction']), this['transform']['translate'](this['direction'], !0x1), this['transform']['translate'](new Laya['Vector3'](0x0, this['speedY'], 0x0), !0x1), this['speedY'] -= 0.45 * 0x24 / 0x3e8, this['speedY'] < 0x0) && (_0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']) && (this['hitResult']['collider']['owner']['name']['indexOf']('lu') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('cao') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('Plane') >= 0x0) && (this['CarRotX']['localRotat' + 'ionEulerX'], (this['transform']['position'] = this['hitResult']['point'], this['CarRotX']['localRotat' + 'ionEulerX'] = 0x0, this['isFly'] = !0x1, this['Plane']['active'] = !0x0, _0x3d6d80['playSoundE' + 'ffect']('run', 0x0), _0x3d6d80['playSoundE' + 'ffect']('down', 0x1))), this['transform']['position']['y'] < this['minFlyHeig' + 'ht'] && (console['log']('玩家陆地点过低，判断' + '坠崖，死亡！'), this['fall']()));
                                } else {
                                    if (_0x3c52f6['I']['gameScenes']['physicsSim' + 'ulation']['raycastFro' + 'mTo'](this['from']['position'], this['to']['position'], this['hitResult']))
                                        (this['hitResult']['collider']['owner']['name']['indexOf']('lu') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('cao') >= 0x0 || this['hitResult']['collider']['owner']['name']['indexOf']('Plane') >= 0x0) && (this['targetPos'] = this['hitResult']['point'], this['groundNorm' + 'al'] = this['hitResult']['normal'], this['direction'] = new Laya['Vector3'](), Laya['Vector3']['subtract'](this['targetPos'], this['transform']['position'], this['direction']), Laya['Vector3']['normalize'](this['direction'], this['direction']), Laya['Vector3']['scale'](this['direction'], this['currentSpe' + 'ed'], this['direction']), this['curHitNo'] = 0x0), this['transform']['translate'](this['direction'], !0x1);
                                    else {
                                        if (this['curHitNo']++, this['transform']['translate'](this['direction'], !0x1), this['curHitNo'] >= this['hitNoThing' + 'Max'])
                                            return this['fall'](), void (this['curHitNo'] = 0x0);
                                    }
                                    var _0x524790 = Math['abs'](this['CameraPos']['transform']['localRotat' + 'ionEuler']['y'] - this['localRotY']);
                                    this['isDrift'] ? (this['isDriftSpe' + 'edUp'] || (this['curOilValu' + 'e'] += 0x24 / 0x3e8, this['curOilValu' + 'e'] > this['allOilGasN' + 'umber'] && (this['curOilValu' + 'e'] = this['allOilGasN' + 'umber'])), this['targetSpee' + 'd'] = this['driftSpeed'], _0x524790 < this['driftLimit'] && (this['isDrift'] = !0x1, _0x3d6d80['stopSound']('drift'), Laya['stage']['event']('endDrift'), this['FX_PY_Drif' + 't']['active'] = !0x1, this['roleAnimat' + 'or']['crossFade']('front', 0.4), this['carAnimato' + 'r']['crossFade']('front', 0.4))) : (this['targetSpee' + 'd'] = this['forwardSpe' + 'ed'], _0x524790 > this['driftLimit'] && (this['isDrift'] = !0x0, this['playDriftV' + 'oiceTime'] <= 0x0 && (_0x3d6d80['stopSound']('drift'), _0x3d6d80['playSoundE' + 'ffect']('drift'), this['playDriftV' + 'oiceTime'] = 0x258), Laya['stage']['event']('startDrift'), this['FX_PY_Drif' + 't']['active'] = !0x0, this['CameraPos']['transform']['localRotat' + 'ionEuler']['y'] - this['localRotY'] < 0x0 ? (this['roleAnimat' + 'or']['crossFade']('drift_l', 0.4), this['carAnimato' + 'r']['crossFade']('drift_l', 0.4)) : (this['roleAnimat' + 'or']['crossFade']('drift_r', 0.4), this['carAnimato' + 'r']['crossFade']('drift_r', 0.4)))), this['isSuperSpe' + 'ed'] && (this['targetSpee' + 'd'] = this['targetSpee' + 'd'] * this['speedUpTim' + 'es']), this['currentSpe' + 'ed'] = 0.02 * (this['targetSpee' + 'd'] - this['currentSpe' + 'ed']) + this['currentSpe' + 'ed'];
                                }
                                this['CheckPoint'](), Laya['stage']['event']('UpDataOil', this['curOilValu' + 'e'] / this['allOilGasN' + 'umber']);
                            }
                        }
                    },
                    {
                        'key': 'CheckPoint',
                        'value': function () {
                            if (this['CheckIndex'] + 0x1 >= this['curPointCh' + 'eckList']['length'] - 0x1)
                                return console['error']('贝塞尔点检测完了！'), void (this['isMove'] = !0x1);
                            for (var _0x138c0d = 0x0, _0xccc76e = Laya['Vector3']['distanceSq' + 'uared'](this['transform']['position'], this['curPointCh' + 'eckList'][this['CheckIndex']]), _0x1399d1 = 0x0; _0x1399d1 < this['pointCheck' + 'Count'] && !(this['CheckIndex'] + _0x1399d1 >= this['curPointCh' + 'eckList']['length']); _0x1399d1++) {
                                var _0x13bcf9 = Laya['Vector3']['distanceSq' + 'uared'](this['transform']['position'], this['curPointCh' + 'eckList'][this['CheckIndex'] + _0x1399d1]);
                                _0xccc76e >= _0x13bcf9 && (_0x138c0d = _0x1399d1, _0xccc76e = _0x13bcf9);
                            }
                            this['CheckIndex'] += _0x138c0d, _0x3c52f6['I']['Score'] += _0x138c0d / 0x5;
                            var _0x35ee19 = { 'curScore': Math['ceil'](_0x3c52f6['I']['Score']) };
                            if (_0x18c0b8['emit'](_0x2b928a['G2S_UPDATE' + '_CUR_SCORE'], _0x35ee19), !this['isFly']) {
                                Laya['Vector3']['subtract'](this['curPointCh' + 'eckList'][this['CheckIndex'] + 0x1], this['curPointCh' + 'eckList'][this['CheckIndex']], this['curRoadDir' + 'ect']), Laya['Vector3']['normalize'](this['curRoadDir' + 'ect'], this['curRoadDir' + 'ect']);
                                var _0x8b9cdf = Math['acos'](Laya['Vector3']['dot'](new Laya['Vector3'](0x0, 0x1, 0x0), this['groundNorm' + 'al'])) / Math['PI'] * 0xb4;
                                this['localRotX'] = this['localRotX'] + 0.05 * (_0x8b9cdf - this['localRotX']), this['CarRotX']['localRotat' + 'ionEulerX'] = this['localRotX'];
                            }
                            _0x3c52f6['I']['mapManage']['UpdateLeve' + 'lMapOnMove'](this['CheckIndex']);
                        }
                    },
                    {
                        'key': 'onTriggerE' + 'nter',
                        'value': function (_0x1eb487) {
                            if (this['isOver'] || this['isOver'] == undefined)
                                return;
                            var _0x42d317 = _0x1eb487['owner']['name'], _0x2fe48c = _0x4629a1['getCompOnP' + 'arent'](_0x1eb487['owner'], _0x272a92);
                            if (_0x2fe48c && !(_0x42d317['indexOf']('roadblock_' + 'mx') >= 0x0)) {
                                var _0x4a517c = Laya['Quaternion']['DEFAULT'];
                                Laya['Quaternion']['createFrom' + 'AxisAngle'](new Laya['Vector3'](0x0, 0x1, 0x0), (Math['random']() - 0.5) * Math['PI'] / 0x3, _0x4a517c);
                                var _0x537e4b = new Laya['Vector3']();
                                return Laya['Vector3']['transformQ' + 'uat'](this['direction'], _0x4a517c, _0x537e4b), _0x2fe48c['BeStrike'](_0x537e4b, 0x0), _0x3d6d80['playSoundE' + 'ffect']('crash_mini', 0x1), void _0x3d6d80['vibrate'](!0x0);
                            }
                            if (_0x42d317['indexOf']('gangplank_' + 'mx') >= 0x0)
                                this['flight']();
                            else {
                                if (_0x42d317['indexOf']('speed_mx') >= 0x0)
                                    this['speedUp'](), _0x3d6d80['vibrate'](!0x0);
                                else {
                                    if (_0x42d317['indexOf']('defend_mx') >= 0x0)
                                        _0x3d6d80['vibrate'](!0x0), _0x3d6d80['playSoundE' + 'ffect']('item', 0x1), this['getUnstopp' + 'ableBuff'](), _0x3acbe6['I']['RecoverObj'](_0x1eb487['owner'], !0x0);
                                    else {
                                        if (_0x42d317['indexOf']('shan') >= 0x0)
                                            this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['CameraPos']['transform']['localRotat' + 'ionEulerY'], 0x0), _0x3d6d80['playSoundE' + 'ffect']('carsh_game' + 'over', 0x1), this['crash']();
                                        else {
                                            if (_0x42d317['indexOf']('car') >= 0x0 || _0x42d317['indexOf']('wood_mx') >= 0x0 || _0x42d317['indexOf']('stone') >= 0x0 || _0x42d317['indexOf']('roadblock_' + 'mx') >= 0x0 || _0x42d317['indexOf']('tree_mx') >= 0x0)
                                                this['isUnstoppa' + 'ble'] || (_0x3d6d80['playSoundE' + 'ffect']('carsh_game' + 'over', 0x1), this['crash']());
                                            else {
                                                if (_0x42d317['indexOf']('NPC') >= 0x0) {
                                                    var _0x581a4f = _0x4629a1['getCompOnP' + 'arent'](_0x1eb487['owner'], _0x3411df);
                                                    if (null == _0x581a4f || 0x0 == _0x581a4f['isMove'])
                                                        return;
                                                    var _0x4ae6da = new Laya['Vector3']();
                                                    Laya['Vector3']['subtract'](this['transform']['position'], _0x1eb487['owner']['transform']['position'], _0x4ae6da), this['isColled'] || (_0x3d6d80['vibrate'](!0x0), this['collTime'] = 0x3e8, this['isColled'] = !0x0, this['dir'] = _0x4ae6da, Laya['Vector3']['scale'](this['dir'], 0.15, this['dir']), this['iscollisio' + 'ned'](), _0x3d6d80['playSoundE' + 'ffect']('carsh_tric' + 'ycle', 0x1));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        'key': 'Pop',
                        'value': function (_0x238293, _0xc573f2, _0x52113d, _0x5eb97d) {
                            return 0x1 - 0x4 * Math['pow'](_0x5eb97d - _0x238293 / 0x2, 0x2);
                        }
                    },
                    {
                        'key': 'iscollisio' + 'ned',
                        'value': function () {
                            Laya['timer']['frameLoop'](0x1, this, this['moveByFram' + 'e']);
                        }
                    },
                    {
                        'key': 'moveByFram' + 'e',
                        'value': function () {
                            var _0x1fe41f = new Laya['Vector3']();
                            if (Laya['Vector3']['scale'](this['dir'], this['collTime'] / 0x3e8, _0x1fe41f), this['collTime'] > 0x320) {
                                var _0x2aec9b = 0x1 - (this['collTime'] - 0x320) / 0xc8, _0x10efbd = 0x1 + 0.05 * (0x1 - 0x4 * Math['pow'](_0x2aec9b - 0.5, 0x2));
                                this['pf']['transform']['localScale'] = new Laya['Vector3'](_0x10efbd, _0x10efbd, _0x10efbd);
                            }
                            this['transform']['translate'](_0x1fe41f), this['collTime'] -= 0x24, this['collTime'] <= 0x0 && (Laya['timer']['clear'](this, this['moveByFram' + 'e']), this['isColled'] = !0x1, this['collTime'] = 0x3e8, this['pf']['transform']['localScale'] = new Laya['Vector3'](0x1, 0x1, 0x1));
                        }
                    },
                    {
                        'key': 'onMouseDow' + 'nEvent',
                        'value': function (_0x55b958) {
                            if (!this['isOver']) {
                                this['moveX'] = !![], (this['isMove'] || Laya['stage']['event']('showGuide', !0x1), this['isMove'] = !0x0, _0x3d6d80['playSoundE' + 'ffect']('run', 0x0), this['FX_PY_Run_' + 'Wind']['active'] = !0x0, this['currentSpe' + 'ed'] = this['forwardSpe' + 'ed'], this['startPoint']['setTo'](_0x55b958['stageX'], _0x55b958['stageY']), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['mouseMove']), this['isPress'] = !0x0);
                                for (var _0xdc51f2 = 0x0; _0xdc51f2 < _0x3c52f6['I']['NPCList']['length']; _0xdc51f2++)
                                    _0x3c52f6['I']['NPCList'][_0xdc51f2]['startMove']();
                            }
                        }
                    },
                    {
                        'key': 'onMouseUpE' + 'vent',
                        'value': function () {
                            this['moveX'] = ![], (this['isPress'] = !0x1, Laya['stage']['off'](Laya['Event']['MOUSE_MOVE'], this, this['mouseMove']), this['curOilValu' + 'e'] / this['allOilGasN' + 'umber'] >= 0x1 && this['isMove'] && !this['isDriftSpe' + 'edUp'] && !this['isFly'] && (this['speedUp'](this['driftSpeed' + 'UpTime']), this['isDriftSpe' + 'edUp'] = !0x0, Laya['stage']['frameLoop'](0x1, this, this['onDriftSpe' + 'edUp'])));
                        }
                    },
                    {
                        'key': 'onDriftSpe' + 'edUp',
                        'value': function () {
                            this['curOilValu' + 'e'] -= 0x24 / this['driftSpeed' + 'UpTime'] * this['allOilGasN' + 'umber'], this['curOilValu' + 'e'] <= 0x0 && (Laya['stage']['clearTimer'](this, this['onDriftSpe' + 'edUp']), this['isDriftSpe' + 'edUp'] = !0x1);
                        }
                    },
                    {
                        'key': 'onMouseMov' + 'eEvent',
                        'value': function () {
                        }
                    },
                    {
                        'key': 'mouseMove',
                        'value': function (_0x1c76a5) {
                            if (!this['isOver'] && this['isMove']) {
                                this['diffX'] = this['startPoint']['x'] - _0x1c76a5['stageX'];
                                var _0x54187d = new Laya['Vector3'](0x0, this['curRoadDir' + 'ect']['y'], this['curRoadDir' + 'ect']['z']), _0x4cb404 = Math['acos'](Laya['Vector3']['dot'](this['curRoadDir' + 'ect'], _0x54187d)) / Math['PI'] * 0xb4;
                                this['curRoadDir' + 'ect']['z'] < 0x0 && (_0x4cb404 = 0xb4 - _0x4cb404), this['curRoadDir' + 'ect']['x'] < 0x0 && (_0x4cb404 = 0x168 - _0x4cb404);
                                for (var _0x4ffdaa = Math['round'](this['localRotY'] / 0x168), _0x36494b = 0x0, _0x57b331 = Math['abs'](0x168 * _0x4ffdaa + _0x4cb404 - this['localRotY']), _0x389d86 = -0x1; _0x389d86 <= 0x1; _0x389d86++) {
                                    var _0x140741 = Math['abs'](0x168 * (_0x4ffdaa + _0x389d86) + _0x4cb404 - this['localRotY']);
                                    _0x140741 < _0x57b331 && (_0x57b331 = _0x140741, _0x36494b = _0x389d86);
                                }
                                _0x4ffdaa += _0x36494b, this['curAngleYS' + 'ection'] = new Laya['Vector2'](_0x4cb404 - this['angleLimit'], _0x4cb404 + this['angleLimit']), this['moveX'] && (this['localRotY'] += this['diffX'] * this['speedContr' + 'olPara']), this['curAngleYS' + 'ection']['x'] + 0x168 * _0x4ffdaa > this['localRotY'] ? this['localRotY'] = this['curAngleYS' + 'ection']['x'] + 0x168 * _0x4ffdaa : this['curAngleYS' + 'ection']['y'] + 0x168 * _0x4ffdaa < this['localRotY'] && (this['localRotY'] = this['curAngleYS' + 'ection']['y'] + 0x168 * _0x4ffdaa), this['CarRotY']['localRotat' + 'ionEuler'] = new Laya['Vector3'](0x0, this['localRotY'], 0x0), this['startPoint']['setTo'](_0x1c76a5['stageX'], _0x1c76a5['stageY']);
                            }
                        }
                    },
                    {
                        'key': 'flight',
                        'value': function () {
                            _0x3d6d80['stopSound']('run'), _0x3d6d80['playSoundE' + 'ffect']('jump', 0x1), this['CarRotY']['getForward'](this['direction']), Laya['Vector3']['scale'](this['direction'], -this['currentSpe' + 'ed'], this['direction']), this['isDrift'] = !0x1, Laya['stage']['event']('endDrift'), _0x3d6d80['stopSound']('drift'), this['FX_PY_Drif' + 't']['active'] = !0x1, this['Plane']['active'] = !0x1, this['roleAnimat' + 'or']['crossFade']('front', 0.4), this['carAnimato' + 'r']['crossFade']('front', 0.4), this['CarRotX']['localRotat' + 'ionEulerX'] = -0x1e, this['speedY'] = 0.3, this['isFly'] = !0x0, this['minFlyHeig' + 'ht'] = this['transform']['position']['y'] - 0x28;
                        }
                    },
                    {
                        'key': 'fall',
                        'value': function () {
                            _0x3d6d80['playSoundE' + 'ffect']('rushout', 0x1), _0x3d6d80['stopSound']('run'), this['isLoseCont' + 'rol'] = !0x0, this['isFly'] = !0x0, this['roleAnimat' + 'or']['crossFade']('falldown02', 0.4), this['carAnimato' + 'r']['crossFade']('falldown02', 0.4), this['isMove'] = !0x1, this['isOver'] = !0x0, this['FX_PY_Run_' + 'Wind']['active'] = !0x1, this['FX_PY_Drif' + 't']['active'] = !0x1, this['Plane']['active'] = !0x1, this['OnDeath']();
                        }
                    },
                    {
                        'key': 'crash',
                        'value': function () {
                            this['FX_PY_Run_' + 'Wind']['active'] = !0x1, this['FX_PY_Drif' + 't']['active'] = !0x1, this['roleAnimat' + 'or']['crossFade']('falldown03', 0.4), this['carAnimato' + 'r']['crossFade']('falldown03', 0.4), this['isMove'] = !0x1, this['isOver'] = !0x0, this['Plane']['active'] = !0x1, this['OnDeath']();
                        }
                    },
                    {
                        'key': 'speedUp',
                        'value': function () {
                            var _0x111399 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : this['speedUpDur' + 'ation'];
                            _0x3d6d80['playSoundE' + 'ffect']('super', 0x1), Laya['timer']['clear'](this, this['speedUpOve' + 'r']), this['isSuperSpe' + 'ed'] = !0x0, Laya['timer']['once'](_0x111399, this, this['speedUpOve' + 'r']), this['targetSpee' + 'd'] = this['targetSpee' + 'd'] * this['speedUpTim' + 'es'], this['currentSpe' + 'ed'] = this['targetSpee' + 'd'], this['FX_PY_Spee' + 'd']['active'] = !0x0, this['FX_PY_Spee' + 'd_Wind']['active'] = !0x0, this['FX_PY_Run_' + 'Wind']['active'] = !0x1;
                        }
                    },
                    {
                        'key': 'speedUpOve' + 'r',
                        'value': function () {
                            _0x3d6d80['stopSound']('super'), this['isSuperSpe' + 'ed'] = !0x1, this['FX_PY_Spee' + 'd']['active'] = !0x1, this['FX_PY_Spee' + 'd_Wind']['active'] = !0x1, this['FX_PY_Run_' + 'Wind']['active'] = !0x0;
                        }
                    },
                    {
                        'key': 'getUnstopp' + 'ableBuff',
                        'value': function () {
                            Laya['timer']['clear'](this, this['Unstoppabl' + 'eBuffOver']), this['isUnstoppa' + 'ble'] = !0x0, Laya['timer']['once'](this['Unstoppabl' + 'eDuration'], this, this['Unstoppabl' + 'eBuffOver']), this['FX_PY_Shie' + 'ld']['active'] = !0x0;
                        }
                    },
                    {
                        'key': 'Unstoppabl' + 'eBuffOver',
                        'value': function () {
                            this['isUnstoppa' + 'ble'] = !0x1, this['FX_PY_Shie' + 'ld']['active'] = !0x1;
                        }
                    },
                    {
                        'key': 'changePoin' + 'tCheckList',
                        'value': function (_0x3ec496, _0x4a15ab) {
                            this['CheckIndex'] >= _0x3ec496 ? (this['curPointCh' + 'eckList']['splice'](0x0, _0x3ec496), this['CheckIndex'] -= _0x3ec496, this['curPointCh' + 'eckList'] = this['curPointCh' + 'eckList']['concat'](_0x4a15ab)) : console['error']('贝塞尔点删除异常！当' + '前点：', this['CheckIndex'], '\x20删除数目：', _0x3ec496);
                        }
                    },
                    {
                        'key': 'OnDeath',
                        'value': function () {
                            _0x3d6d80['vibrate'](!0x1), _0x3d6d80['stopSound']('run'), Laya['stage']['event']('endDrift'), _0x3d6d80['stopSound']('drift'), Laya['timer']['clear'](this, this['speedUpOve' + 'r']), this['Plane']['active'] = !0x1, this['isSuperSpe' + 'ed'] = !0x1, this['FX_PY_Spee' + 'd']['active'] = !0x1, this['FX_PY_Spee' + 'd_Wind']['active'] = !0x1, this['FX_PY_Run_' + 'Wind']['active'] = !0x1, this['isMove'] = !0x1, this['isDrift'] = !0x1, Laya['timer']['once'](0x7d0, this, function () {
                                _0x3c52f6['I']['overGame']();
                            });
                        }
                    },
                    {
                        'key': 'CheckIndex',
                        'get': function () {
                            return this['_CheckInde' + 'x'];
                        },
                        'set': function (_0x427884) {
                            this['_CheckInde' + 'x'] = _0x427884;
                        }
                    }
                ]), _0xd73bc9;
            }(), _0x3c52f6 = function () {
                function _0x3d2878() {
                    _0x1295b3(this, _0x3d2878), this['NPCList'] = new Array(), this['playerInde' + 'x'] = 0x4, this['Score'] = 0x0, this['RankTime'] = 0x258, this['isShowGuig' + 'e'] = !0x0, this['rankDelay'] = 0x0, this['lastChampi' + 'onNumber'] = 0x0, _0x18c0b8['on'](_0x2b928a['S2G_BEGIN_' + 'GAME'], this['StartGame'], this), _0x18c0b8['on'](_0x2b928a['S2G_REBORN' + '_GAME_READ' + 'Y'], this['reLiveGame'], this), _0x18c0b8['on'](_0x2b928a['S2G_RESET_' + 'GAME_READY'], this['reSetingGa' + 'me'], this), _0x18c0b8['on'](_0x2b928a['S2G_USE_SK' + 'IN'], this['setSkin_YL' + 'SDK'], this);
                }
                return _0x413e7f(_0x3d2878, [
                    {
                        'key': 'InitGame',
                        'value': function () {
                            if (Laya['Browser']['onIOS'] ? _0x4629a1['setFog'](this['gameScenes'], '48A1FF', 0x5f, 0x55) : _0x4629a1['setFog'](this['gameScenes'], '48A1FF', 0x64, 0xfa), null == this['playerCont' + 'roller']) {
                                console['log']('gameScenes' + ':', this['gameScenes']), this['playerCont' + 'roller'] = this['gameScenes']['getChildBy' + 'Name']('player')['addCompone' + 'nt'](_0x274f61), this['playerCont' + 'roller']['isOver'] = !0x0;
                                var _0x516638 = this['gameScenes']['getChildBy' + 'Name']('NPC')['addCompone' + 'nt'](_0x3411df);
                                _0x516638['CheckIndex'] = 0x3;
                                var _0x16e663 = this['gameScenes']['getChildBy' + 'Name']('NPC\x20(1)')['addCompone' + 'nt'](_0x3411df);
                                _0x16e663['CheckIndex'] = 0x2;
                                var _0x3dd099 = this['gameScenes']['getChildBy' + 'Name']('NPC\x20(2)')['addCompone' + 'nt'](_0x3411df);
                                _0x3dd099['CheckIndex'] = 0x1, this['NPCList']['push'](_0x516638), this['NPCList']['push'](_0x16e663), this['NPCList']['push'](_0x3dd099), this['camera'] = this['gameScenes']['getChildBy' + 'Name']('CameraPos')['getChildBy' + 'Name']('Main\x20Camer' + 'a'), Laya['Browser']['onIOS'] ? (this['camera']['farPlane'] = 0xaf, this['playerCont' + 'roller']['forwardSpe' + 'ed'] = 1.1, this['playerCont' + 'roller']['driftSpeed'] = 0.75, _0x516638['forwardSpe' + 'ed'] = 1.1, _0x16e663['forwardSpe' + 'ed'] = 1.1, _0x3dd099['forwardSpe' + 'ed'] = 1.1) : this['camera']['farPlane'] = 0x15e, this['crownObj'] = this['gameScenes']['getChildBy' + 'Name']('crown_mx'), this['crownObj']['addCompone' + 'nt'](_0x19a218), this['FX_PY_Crow' + 'n'] = this['crownObj']['getChildAt'](0x1), this['NPCList'][0x0]['CarRotX']['owner']['addChild'](this['crownObj']), this['crownObj']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 4.2, 0x0);
                            }
                            this['mapManage'] = new _0x124b9b(), this['mapManage']['init'](this['gameScenes']);
                            for (var _0x17e2ae = 0x0; _0x17e2ae < this['NPCList']['length']; _0x17e2ae++)
                                this['NPCList'][_0x17e2ae]['isOver'] = !0x0;
                        }
                    },
                    {
                        'key': 'StartGame',
                        'value': function () {
                            this['playerCont' + 'roller']['isOver'] = !0x1;
                            for (var _0x4eb7ad = 0x0; _0x4eb7ad < this['NPCList']['length']; _0x4eb7ad++) {
                                this['NPCList'][_0x4eb7ad]['isOver'] = !0x1;
                            }
                            Laya['timer']['clear'](this, this['onPlayerIn' + 'dexChange']), Laya['timer']['frameLoop'](0x1, this, this['onPlayerIn' + 'dexChange']), this['rankDelay'] = 0x0, this['isShowGuig' + 'e'] && (this['Score'] = 0x0, Laya['stage']['event']('showGuide', !0x0), this['isShowGuig' + 'e'] = !0x1);
                        }
                    },
                    {
                        'key': 'reSetingGa' + 'me',
                        'value': function () {
                            this['isShowGuig' + 'e'] = !0x0, this['Score'] = 0x0, this['playerCont' + 'roller']['ReSetPlaye' + 'r'](new Laya['Vector3'](-0x2, 0x0, 10.7)), this['playerCont' + 'roller']['isOver'] = !0x0, this['NPCList'][0x0]['ReSetPlaye' + 'r'](new Laya['Vector3'](0x2, 0x0, 25.7), 0x3), this['NPCList'][0x0]['isOver'] = !0x0, this['NPCList'][0x1]['ReSetPlaye' + 'r'](new Laya['Vector3'](-0x6, 0x0, 20.7), 0x2), this['NPCList'][0x1]['isOver'] = !0x0, this['NPCList'][0x2]['ReSetPlaye' + 'r'](new Laya['Vector3'](0x6, 0x0, 15.7), 0x1), this['NPCList'][0x2]['isOver'] = !0x0, this['mapManage']['resetMap'](), this['onPlayerIn' + 'dexChange'](), _0x18c0b8['emit'](_0x2b928a['G2S_RESET_' + 'GAME_READY' + '_SUCCESS']);
                        }
                    },
                    {
                        'key': 'overGame',
                        'value': function () {
                            this['playerCont' + 'roller']['isOver'] = !0x0;
                            for (var _0x12033c = 0x0; _0x12033c < this['NPCList']['length']; _0x12033c++) {
                                this['NPCList'][_0x12033c]['isOver'] = !0x0;
                            }
                            _0x18c0b8['emit'](_0x2b928a['G2S_GAME_F' + 'AIL']), Laya['timer']['clear'](this, this['onPlayerIn' + 'dexChange']);
                        }
                    },
                    {
                        'key': 'reLiveGame',
                        'value': function () {
                            this['playerCont' + 'roller']['ReLive'](), this['playerCont' + 'roller']['isOver'] = !0x1, this['playerCont' + 'roller']['isMove'] = !0x1;
                            for (var _0x390b32 = 0x0; _0x390b32 < this['NPCList']['length']; _0x390b32++) {
                                var _0x247aac = this['NPCList'][_0x390b32];
                                _0x247aac['isOver'] = !0x1, _0x247aac['isMove'] = !0x1;
                            }
                            _0x18c0b8['emit'](_0x2b928a['G2S_REBORN' + '_GAME_READ' + 'Y_SUCCESS']), Laya['timer']['clear'](this, this['onPlayerIn' + 'dexChange']), Laya['timer']['frameLoop'](0x1, this, this['onPlayerIn' + 'dexChange']);
                        }
                    },
                    {
                        'key': 'setSkin',
                        'value': function (_0x32481a) {
                            this['playerCont' + 'roller']['setSkin'](_0x32481a);
                        }
                    },
                    {
                        'key': 'setSkin_YL' + 'SDK',
                        'value': function (_0x35118e) {
                            console['log']('设置皮肤：', _0x35118e['value']['id']), this['playerCont' + 'roller']['setSkin'](_0x35118e['value']['id'] - 0x1);
                        }
                    },
                    {
                        'key': 'onPlayerIn' + 'dexChange',
                        'value': function () {
                            for (var _0x569dea = this, _0x439e81 = [], _0x9ccd92 = new Array(0x4), _0x5da7f3 = new Array(0x4), _0x58198b = 0x0; _0x58198b < this['NPCList']['length']; _0x58198b++) {
                                _0x5da7f3[_0x58198b] = this['NPCList'][_0x58198b]['CheckIndex'];
                                var _0x542af0 = new Laya['Vector3']();
                                Laya['Vector3']['add'](this['NPCList'][_0x58198b]['transform']['position'], new Laya['Vector3'](0x0, 3.2, 0x0), _0x542af0), _0x9ccd92[_0x58198b] = this['WorldToScr' + 'een'](_0x542af0);
                            }
                            _0x5da7f3[0x3] = this['playerCont' + 'roller']['CheckIndex'];
                            var _0x55c97f = new Laya['Vector3']();
                            if (Laya['Vector3']['add'](this['playerCont' + 'roller']['transform']['position'], new Laya['Vector3'](0x0, 3.2, 0x0), _0x55c97f), _0x9ccd92[0x3] = this['WorldToScr' + 'een'](_0x55c97f), this['rankDelay'] += 0x24, this['rankDelay'] > this['RankTime']) {
                                this['rankDelay'] = 0x0, _0x439e81 = [
                                    0x1,
                                    0x2,
                                    0x3,
                                    0x4
                                ];
                                for (var _0x3225b4 = 0x0; _0x3225b4 < 0x4; _0x3225b4++)
                                    for (var _0x4b6e40 = 0x0; _0x4b6e40 < 0x4; _0x4b6e40++)
                                        if (_0x5da7f3[_0x3225b4] > _0x5da7f3[_0x4b6e40] && _0x439e81[_0x3225b4] > _0x439e81[_0x4b6e40]) {
                                            var _0x5ea62a = _0x439e81[_0x4b6e40];
                                            _0x439e81[_0x4b6e40] = _0x439e81[_0x3225b4], _0x439e81[_0x3225b4] = _0x5ea62a;
                                        }
                                if (0x1 == _0x439e81[0x3])
                                    0x3 != this['lastChampi' + 'onNumber'] && (this['playerCont' + 'roller']['CarRotX']['owner']['addChild'](this['crownObj']), this['crownObj']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 2.7, 0x0), this['crownObj']['transform']['localScale'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['FX_PY_Crow' + 'n']['active'] = !0x1, Laya['Tween']['to'](this['crownObj']['transform']['localScale'], {
                                        'x': 1.7,
                                        'y': 1.7,
                                        'z': 1.7
                                    }, 0x226, Laya['Ease']['backOut'], new Laya['Handler'](this, function () {
                                        _0x569dea['FX_PY_Crow' + 'n']['active'] = !0x0;
                                    }), 0x0, !0x0)), this['lastChampi' + 'onNumber'] = 0x3;
                                else {
                                    for (var _0x37705d = 0x0; _0x37705d < 0x3; _0x37705d++)
                                        0x1 == _0x439e81[_0x37705d] && (this['lastChampi' + 'onNumber'] != _0x37705d && (this['NPCList'][_0x37705d]['CarRotX']['owner']['addChild'](this['crownObj']), this['crownObj']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 4.2, 0x0), this['crownObj']['transform']['localScale'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['FX_PY_Crow' + 'n']['active'] = !0x1, Laya['Tween']['to'](this['crownObj']['transform']['localScale'], {
                                            'x': 1.7,
                                            'y': 1.7,
                                            'z': 1.7
                                        }, 0x226, Laya['Ease']['backOut'], new Laya['Handler'](this, function () {
                                            _0x569dea['FX_PY_Crow' + 'n']['active'] = !0x0;
                                        }), 0x0, !0x0)), this['lastChampi' + 'onNumber'] = _0x37705d);
                                }
                            }
                            for (var _0x6e5ed6 = 0x0; _0x6e5ed6 < 0x3; _0x6e5ed6++)
                                this['playerCont' + 'roller']['CheckIndex'] > this['NPCList'][_0x6e5ed6]['CheckIndex'] ? this['playerCont' + 'roller']['CheckIndex'] > this['NPCList'][_0x6e5ed6]['CheckIndex'] + 0xf && (this['NPCList'][_0x6e5ed6]['forwardSpe' + 'ed'] = 1.2 * this['playerCont' + 'roller']['forwardSpe' + 'ed']) : this['playerCont' + 'roller']['CheckIndex'] < this['NPCList'][_0x6e5ed6]['CheckIndex'] - 0x1e && (this['NPCList'][_0x6e5ed6]['forwardSpe' + 'ed'] = 0.65 * this['playerCont' + 'roller']['forwardSpe' + 'ed']);
                            Laya['stage']['event']('UpdataRank', [
                                _0x439e81,
                                _0x9ccd92
                            ]);
                        }
                    },
                    {
                        'key': 'WorldToScr' + 'een',
                        'value': function (_0x238ded) {
                            var _0x25d319 = new Laya['Vector4']();
                            this['camera']['viewport']['project'](_0x238ded, this['camera']['projection' + 'ViewMatrix'], _0x25d319);
                            var _0xf55af8 = _0x25d319['x'] / Laya['stage']['clientScal' + 'eX'], _0x3c7c58 = _0x25d319['y'] / Laya['stage']['clientScal' + 'eY'];
                            return _0x25d319['x'] = _0xf55af8, _0x25d319['y'] = _0x3c7c58, new Laya['Vector3'](_0x25d319['x'], _0x25d319['y'], _0x25d319['w']);
                        }
                    }
                ], [{
                        'key': 'I',
                        'get': function () {
                            return null == _0x3d2878['_I'] && (_0x3d2878['_I'] = new _0x3d2878()), _0x3d2878['_I'];
                        },
                        'set': function (_0x27ee5a) {
                            _0x3d2878['_I'] = _0x27ee5a;
                        }
                    }]), _0x3d2878;
            }(), _0x272cd1 = function (_0x471ee3) {
                function _0x9673b5() {
                    var _0x574c44;
                    return _0x1295b3(this, _0x9673b5), (_0x574c44 = _0x5971e6(this, _0x35d7e0(_0x9673b5)['call'](this)))['isShowAddS' + 'core'] = !0x1, _0x574c44['textList'] = new Array(), _0x574c44['isOpenNPC_' + 'Name'] = !0x0, _0x574c44['isShowName'] = !0x1, _0x574c44['scaleValue'] = 0x1, _0x574c44['addScoreVa' + 'lue'] = 0x0, _0x574c44['showAddSco' + 'reTime'] = 0x3e8, _0x574c44['curShowAdd' + 'ScoreTime'] = 0x0, _0x574c44['isInEndDri' + 'ft'] = !0x1, _0x574c44['continueDr' + 'iftTimes'] = 0x0, _0x574c44['LoadRes'](), _0x574c44;
                }
                return _0x3a441e(_0x9673b5, _0x375f2b['test']['TestSceneU' + 'I']), _0x413e7f(_0x9673b5, [
                    {
                        'key': 'LoadRes',
                        'value': function () {
                            var _0x48eb42 = [
                                {
                                    'url': 'res/LayaSc' + 'ene_game/C' + 'onventiona' + 'l/game.ls',
                                    'clas': Laya['Scene'],
                                    'priority': 0x1
                                },
                                {
                                    'url': 'res/LayaSc' + 'ene_Model/' + 'Convention' + 'al/Model.l' + 'h',
                                    'clas': Laya['Sprite3D'],
                                    'priority': 0x2
                                },
                                {
                                    'url': 'res/Datas/' + 'Datas.json',
                                    'clas': _0x2f99ac,
                                    'priority': 0x3
                                }
                            ];
                            Laya['loader']['create'](_0x48eb42, Laya['Handler']['create'](this, this['onLoadFini' + 'sh'], null, !0x1)), Laya['loader']['on'](Laya['Event']['ERROR'], this, function (_0x43c603) {
                                console['error']('load\x203dres' + '\x20error:', _0x43c603);
                            });
                        }
                    },
                    {
                        'key': 'onLoadFini' + 'sh',
                        'value': function (_0x3a2c4d) {
                            var _0x41c480 = Laya['loader']['getRes']('res/LayaSc' + 'ene_game/C' + 'onventiona' + 'l/game.ls');
                            Laya['stage']['addChild'](_0x41c480), Laya['stage']['setChildIn' + 'dex'](_0x41c480, 0x0), this['driftProgr' + 'ess'] = this['getChildBy' + 'Name']('driftProgr' + 'ess'), this['sliderMask'] = this['getChildBy' + 'Name']('slider')['mask'], this['guide'] = this['getChildBy' + 'Name']('guide'), this['guide']['visible'] = !0x1, Laya['stage']['on']('showGuide', this, this['showGuide']), this['UpDataProg' + 'ressBar'](0x0), Laya['stage']['on']('UpDataOil', this, this['UpDataProg' + 'ressBar']), this['addScore'] = this['getChildBy' + 'Name']('addScore'), this['addScore']['visible'] = !0x1, this['fontImge'] = this['addScore']['getChildBy' + 'Name']('fontImge'), this['fontImge']['visible'] = !0x1, Laya['stage']['on']('startDrift', this, this['startDrift']), Laya['stage']['on']('endDrift', this, this['endDrift']);
                            var _0x335262 = this['getChildBy' + 'Name']('nameText1');
                            this['textList']['push'](_0x335262);
                            var _0xad957 = this['getChildBy' + 'Name']('nameText2');
                            this['textList']['push'](_0xad957);
                            var _0x6e65ec = this['getChildBy' + 'Name']('nameText3');
                            this['textList']['push'](_0x6e65ec);
                            var _0x55a735 = this['getChildBy' + 'Name']('nameText4');
                            this['textList']['push'](_0x55a735), this['isOpenNPC_' + 'Name'] && Laya['stage']['on']('UpdataRank', this, this['updataRank']);
                            var _0x2d7060 = [
                                '',
                                '',
                                '',
                                'Player'
                            ];
                            if (null != _0x2d7060 && _0x2d7060['length'] >= 0x4) {
                                this['isShowName'] = !0x0;
                                for (var _0x20e8fd = 0x0; _0x20e8fd < 0x4; _0x20e8fd++)
                                    this['textList'][_0x20e8fd]['text'] = _0x2d7060[_0x20e8fd];
                            }
                            _0x3c52f6['I']['gameScenes'] = _0x41c480, _0x3c52f6['I']['InitGame'](), this['setRankNam' + 'e'](), _0x77369c['data']['on']('playerName' + 'sPool', this['setRankNam' + 'e'], this), _0x18c0b8['emit'](_0x2b928a['G2S_INIT_G' + 'AME_READY_' + 'SUCCESS']), _0x427360 = !![], _0x3afecb && _0x24e798['model']['curStackVi' + 'ew'] != _0xf9d86a['VIEW_Home'] && FKGames['init']({
                                'debug': !![],
                                'appName': '',
                                'gamemonetizeId': 'qhvkt6iifs75jtnmodg9cis2jot9dj4f',
                                'gamedistributionId': '',
                                'complete': () => {
                                    platform['getInstanc' + 'e']()['musicOpen'](), _0x3d6d80['playBgm'](!0x0), _0x24e798['model']['curStackVi' + 'ew'] = _0xf9d86a['VIEW_Home'], _0x486868['destroy'](), console['log']('----------' + '初始化成功!!!--' + '--------');
                                }
                            });
                        }
                    },
                    {
                        'key': 'showGuide',
                        'value': function () {
                            var _0x3f0cd9 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0];
                            this['guide']['visible'] = _0x3f0cd9, null == this['ani2D'] && (this['ani2D'] = new Laya['Animation'](), this['ani2D']['loadAtlas']('res/atlas/' + 'xsyd_eff.a' + 'tlas', Laya['Handler']['create'](this, this['onLoaded'])));
                        }
                    },
                    {
                        'key': 'onLoaded',
                        'value': function () {
                            this['guide']['addChild'](this['ani2D']), this['ani2D']['x'] = 0xcb, this['ani2D']['y'] = 0x41, this['ani2D']['interval'] = 0xc8, this['ani2D']['play'](), console['log']('加载完成！！！');
                        }
                    },
                    {
                        'key': 'setRankNam' + 'e',
                        'value': function () {
                            var _0x53d223 = _0x77369c['data']['playerName' + 'sPool'];
                            if (null != _0x53d223 && _0x53d223['length'] >= 0x4) {
                                this['isShowName'] = !0x0;
                                for (var _0x533dc9 = 0x0; _0x533dc9 < 0x3; _0x533dc9++)
                                    this['textList'][_0x533dc9]['text'] = _0x53d223[_0x533dc9];
                            }
                        }
                    },
                    {
                        'key': 'updataRank',
                        'value': function (_0x1c3fe0, _0x13c971) {
                            if (null != _0x1c3fe0 && _0x1c3fe0['length'] >= 0x4)
                                for (var _0x8075f7 = 0x0; _0x8075f7 < _0x1c3fe0['length']; _0x8075f7++) {
                                    var _0x3f409a = this['textList'][_0x8075f7]['getChildAt'](0x0);
                                    0x1 == _0x1c3fe0[_0x8075f7] ? _0x3f409a['visible'] = !0x1 : (_0x3f409a['visible'] = !0x0, _0x3f409a['skin'] = '02game/' + _0x1c3fe0[_0x8075f7]['toString']() + '.png'), this['isShowName'] && (_0x1c3fe0[_0x8075f7] > _0x1c3fe0[0x3] ? this['textList'][_0x8075f7]['visible'] = !0x1 : this['textList'][_0x8075f7]['visible'] = !0x0);
                                }
                            for (var _0x47f488 = 0x0; _0x47f488 < 0x4; _0x47f488++) {
                                this['textList'][_0x47f488]['pos'](_0x13c971[_0x47f488]['x'], _0x13c971[_0x47f488]['y']);
                                var _0x545c85 = 0x14 / _0x13c971[_0x47f488]['z'] * this['scaleValue'];
                                _0x545c85 > 0x1 ? _0x545c85 = 0x1 : _0x545c85 < 0.2 && (_0x545c85 = 0x0), this['textList'][_0x47f488]['scale'](_0x545c85, _0x545c85);
                            }
                        }
                    },
                    {
                        'key': 'UpDataProg' + 'ressBar',
                        'value': function () {
                            var _0xf3d002 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                            _0xf3d002 > 0x1 ? _0xf3d002 = 0x1 : _0xf3d002 < 0x0 && (_0xf3d002 = 0x0), this['sliderMask']['y'] = this['driftProgr' + 'ess']['height'] * (0x1 - _0xf3d002);
                        }
                    },
                    {
                        'key': 'startDrift',
                        'value': function () {
                            this['isShowAddS' + 'core'] || (this['isInEndDri' + 'ft'] ? this['continueDr' + 'iftTimes'] > 0x3 ? (_0x3c52f6['I']['Score'] += this['addScoreVa' + 'lue'], this['addScoreVa' + 'lue'] = 0x0, this['continueDr' + 'iftTimes'] = 0x0) : this['continueDr' + 'iftTimes']++ : this['continueDr' + 'iftTimes'] = 0x0, 0x0 == this['addScoreVa' + 'lue'] && (this['addScoreVa' + 'lue'] = 0x1), this['addScore']['value'] = '+' + this['addScoreVa' + 'lue']['toString'](), this['isShowAddS' + 'core'] = !0x0, this['fontImge']['skin'] = '02game/fon' + 't_youxiu.p' + 'ng', this['fontImge']['visible'] = !0x1, this['addScore']['skin'] = '02game/num' + '-lv.png', this['addScore']['visible'] = !0x0, Laya['Tween']['to'](this['addScore'], {
                                'scaleX': 1.5,
                                'scaleY': 1.5
                            }, 0xc8, Laya['Ease']['backOut'], null, 0x0, !0x0), Laya['timer']['loop'](0x64, this, this['OnAddScore']));
                        }
                    },
                    {
                        'key': 'endDrift',
                        'value': function () {
                            var _0x10a4c1 = this;
                            this['isShowAddS' + 'core'] = !0x1, this['isInEndDri' + 'ft'] = !0x0, Laya['Tween']['to'](this['addScore'], {
                                'scaleX': 0.2,
                                'scaleY': 0.2
                            }, 0xc8, null, new Laya['Handler'](this, function () {
                                _0x10a4c1['addScore']['visible'] = !0x1, _0x3c52f6['I']['Score'] += _0x10a4c1['addScoreVa' + 'lue'], _0x10a4c1['addScoreVa' + 'lue'] = 0x0, _0x10a4c1['isInEndDri' + 'ft'] = !0x1;
                            }), 0x0, !0x0), Laya['timer']['clear'](this, this['OnAddScore']);
                        }
                    },
                    {
                        'key': 'OnAddScore',
                        'value': function () {
                            this['addScoreVa' + 'lue']++, this['addScore']['value'] = '+' + this['addScoreVa' + 'lue']['toString'](), this['addScoreVa' + 'lue'] > 0x14 ? this['addScoreVa' + 'lue'] > 0x32 ? (this['fontImge']['skin'] = '02game/fon' + 't_chaoji.p' + 'ng', this['fontImge']['visible'] = !0x0, this['addScore']['skin'] = '02game/num' + '-huang.png') : (this['fontImge']['skin'] = '02game/fon' + 't_youxiu.p' + 'ng', this['fontImge']['visible'] = !0x0, this['addScore']['skin'] = '02game/num' + '-lv.png') : this['fontImge']['visible'] = !0x1;
                        }
                    }
                ]), _0x9673b5;
            }(), _0x3fb6a7 = function () {
                function _0x31961f() {
                    _0x1295b3(this, _0x31961f);
                }
                return _0x413e7f(_0x31961f, null, [{
                        'key': 'init',
                        'value': function () {
                            (0x0, Laya['ClassUtils']['regClass'])('script/Gam' + 'eLogic/Gam' + 'eUI.ts', _0x272cd1);
                        }
                    }]), _0x31961f;
            }();
        _0x3fb6a7['width'] = 0x2ee, _0x3fb6a7['height'] = 0x536, _0x3fb6a7['scaleMode'] = 'showall', _0x3fb6a7['screenMode'] = 'none', _0x3fb6a7['alignV'] = 'middle', _0x3fb6a7['alignH'] = 'center', _0x3fb6a7['startScene'] = 'test/TestS' + 'cene.scene', _0x3fb6a7['sceneRoot'] = '', _0x3fb6a7['debug'] = !0x1, _0x3fb6a7['stat'] = !0x1, _0x3fb6a7['physicsDeb' + 'ug'] = !0x1, _0x3fb6a7['exportScen' + 'eToJson'] = !0x0, _0x3fb6a7['init']();
        var _0x24d809 = {
            'isVerify': !0x1,
            'gameName': '',
            'gameSceneUrl': 'test/TestS' + 'cene.json',
            'gameIconUrl': '05collecti' + 'on/icon-sh' + 'oucang.png',
            'homeLogoUrl': '01home/log' + 'o.png',
            'noNewbie': !0x0,
            'needSearchPlayer': !0x0,
            'storeItems': [
                {
                    'id': 0x1,
                    'previewPath': '04skinShop' + '/zj_ui.png',
                    'isDefault': !0x0
                },
                {
                    'id': 0x2,
                    'previewPath': '04skinShop' + '/pf01_ui.p' + 'ng'
                },
                {
                    'id': 0x3,
                    'previewPath': '04skinShop' + '/pf02_ui.p' + 'ng'
                },
                {
                    'id': 0x4,
                    'previewPath': '04skinShop' + '/pf03_ui.p' + 'ng'
                },
                {
                    'id': 0x5,
                    'previewPath': '04skinShop' + '/pf04_ui.p' + 'ng'
                },
                {
                    'id': 0x6,
                    'previewPath': '04skinShop' + '/pf05_ui.p' + 'ng'
                },
                {
                    'id': 0x7,
                    'previewPath': '04skinShop' + '/pf06_ui.p' + 'ng'
                },
                {
                    'id': 0x8,
                    'previewPath': '04skinShop' + '/pf07_ui.p' + 'ng'
                },
                {
                    'id': 0x9,
                    'previewPath': '04skinShop' + '/pf08_ui.p' + 'ng'
                },
                {
                    'id': 0xa,
                    'previewPath': '04skinShop' + '/pf09_ui.p' + 'ng'
                }
            ],
            'sound': {
                'basePath': 'res/sound',
                'click': 'button',
                'bgm': 'bg'
            },
            'load': {
                'subpackages': [
                    'sdk_youlin' + 'g_common',
                    'LayaScene_' + 'game',
                    'LayaScene_' + 'Model',
                    'sound'
                ],
                'reses2Load': [
                    'res/LayaSc' + 'ene_game/C' + 'onventiona' + 'l/game.ls',
                    'res/LayaSc' + 'ene_Model/' + 'Convention' + 'al/Model.l' + 'h',
                    'res/Datas/' + 'Datas.json'
                ]
            },
            'server': {
                'host': '',
                'apiversion': 'null',
                'apiKey': '4puumeg0y5' + 'x158hfic1z' + '8wo5z8fcil' + 'ge',
                'apiSecret': '8ZJixcwYgC' + 'rTNjOiUfpE' + '7AO1h9aLj2' + 'CV'
            },
            'ad': {
                'gameViewAdMode': 0x0,
                'bannerAdID': [
                    'adunit-bb7' + 'a05ec7e064' + '90d',
                    'adunit-ee2' + '3fd1791cb2' + '639',
                    'adunit-c57' + '809a5cd125' + 'c98'
                ],
                'videoAdID': 'adunit-79d' + 'd858303025' + 'ef7'
            }
        };
        new (function () {
            function _0x3d18ba() {
                _0x1295b3(this, _0x3d18ba), window['Laya3D'] ? Laya3D['init'](_0x3fb6a7['width'], _0x3fb6a7['height']) : Laya['init'](_0x3fb6a7['width'], _0x3fb6a7['height'], Laya['WebGL']), Laya['stage']['scaleMode'] = _0x3fb6a7['scaleMode'], Laya['stage']['screenMode'] = _0x3fb6a7['screenMode'], Laya['stage']['alignV'] = _0x3fb6a7['alignV'], Laya['stage']['alignH'] = _0x3fb6a7['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x3fb6a7['exportScen' + 'eToJson'], Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
            }
            return _0x413e7f(_0x3d18ba, [
                {
                    'key': 'onVersionL' + 'oaded',
                    'value': function () {
                        Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
                    }
                },
                {
                    'key': 'onConfigLo' + 'aded',
                    'value': function () {
                        _0x77369c['configurat' + 'e'](_0x24d809), _0x77369c['deploy']();
                    }
                }
            ]), _0x3d18ba;
        }())();
    }();
}();