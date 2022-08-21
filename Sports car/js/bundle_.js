var __extends = this && this['__extends'] || function () {
    var _0x52a3e6 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x5748b5, _0x28ea20) {
        _0x5748b5['__proto__'] = _0x28ea20;
    } || function (_0x59ebb8, _0x43a3b5) {
        for (var _0x3c29cd in _0x43a3b5)
            _0x43a3b5['hasOwnProp' + 'erty'](_0x3c29cd) && (_0x59ebb8[_0x3c29cd] = _0x43a3b5[_0x3c29cd]);
    };
    return function (_0x101433, _0x5e988b) {
        function _0x110a3d() {
            this['constructo' + 'r'] = _0x101433;
        }
        _0x52a3e6(_0x101433, _0x5e988b), _0x101433['prototype'] = null === _0x5e988b ? Object['create'](_0x5e988b) : (_0x110a3d['prototype'] = _0x5e988b['prototype'], new _0x110a3d());
    };
}();
!function () {
    function _0x254c30(_0x39f372, _0x327e4, _0x4d50b5) {
        function _0x3548bd(_0x5b51b3, _0x37f7a2) {
            if (!_0x327e4[_0x5b51b3]) {
                if (!_0x39f372[_0x5b51b3]) {
                    var _0x44041c = 'function' == typeof require && require;
                    if (!_0x37f7a2 && _0x44041c)
                        return _0x44041c(_0x5b51b3, !0x0);
                    if (_0x45e39f)
                        return _0x45e39f(_0x5b51b3, !0x0);
                    var _0x160020 = new Error('Cannot\x20fin' + 'd\x20module\x20\x27' + _0x5b51b3 + '\x27');
                    throw _0x160020['code'] = 'MODULE_NOT' + '_FOUND', _0x160020;
                }
                var _0x39156b = _0x327e4[_0x5b51b3] = { 'exports': {} };
                _0x39f372[_0x5b51b3][0x0]['call'](_0x39156b['exports'], function (_0x2b82a9) {
                    var _0x277614 = _0x39f372[_0x5b51b3][0x1][_0x2b82a9];
                    return _0x3548bd(_0x277614 || _0x2b82a9);
                }, _0x39156b, _0x39156b['exports'], _0x254c30, _0x39f372, _0x327e4, _0x4d50b5);
            }
            return _0x327e4[_0x5b51b3]['exports'];
        }
        for (var _0x45e39f = 'function' == typeof require && require, _0x48d782 = 0x0; _0x48d782 < _0x4d50b5['length']; _0x48d782++)
            _0x3548bd(_0x4d50b5[_0x48d782]);
        return _0x3548bd;
    }
    return _0x254c30;
}()({
    0x1: [
        function (_0x230b7e, _0x20306b, _0x8c8227) {
            'use strict';
            function _0x40193(_0x486bfd) {
                return new Promise(function (_0x20afd3, _0x2bd247) {
                    wx['login']({
                        'success': function (_0x2e4f32) {
                            _0x20afd3(_0x2e4f32['code']), _0x486bfd(_0x2e4f32['code']);
                        }
                    });
                })['catch'](function (_0x5d4ec9) {
                    console['log'](_0x5d4ec9), reject();
                });
            }
            function _0x2db9ce(_0x5d1f1f, _0x538290, _0x351728) {
                function _0x2b43b3(_0x4dfc46) {
                    return new Promise(function (_0x5a1c61, _0x310cac) {
                        wx['request']({
                            'url': _0x18db38 + ('openHome2.' + 'json'),
                            'data': {
                                'channel': _0x2015c4,
                                'scene': _0x435f7b,
                                'appKey': _0x5d1f1f,
                                'openid': _0x538290,
                                'code': _0x4dfc46,
                                'options': _0x50f1b9
                            },
                            'header': { 'content-type': 'applicatio' + 'n/json' },
                            'success': function (_0x3e4ee4) {
                                if (0x0 == _0x3e4ee4['data']['code']) {
                                    if (_0x538290 || (_0x538290 = _0x3e4ee4['data']['data']['openid'], wx['setStorage' + 'Sync']('count_open' + 'id', _0x538290)), wx['getStorage' + 'Sync']('count_user' + 'Login') && (_0x2e62c4(_0x5d1f1f, _0x2015c4, _0x538290), wx['removeStor' + 'ageSync']('count_user' + 'Login')), wx['getStorage' + 'Sync']('count_user' + 'Role') && (_0x29ec36(_0x5d1f1f, _0x2015c4, _0x538290), wx['removeStor' + 'ageSync']('count_user' + 'Role')), wx['getStorage' + 'Sync']('count_getF' + 'low') && (_0x492853(_0x5d1f1f, _0x2015c4, _0x538290, _0x1c0651, _0x1e4882), wx['removeStor' + 'ageSync']('count_getF' + 'low')), wx['getStorage' + 'Sync']('count_chat' + 'Code') && (_0xa16268(_0x5d1f1f, _0x2015c4, _0x538290, _0x1e4882), wx['removeStor' + 'ageSync']('count_chat' + 'Code')), wx['getStorage' + 'Sync']('count_repo' + 'rtCustomEv' + 'ent') && (_0x2531c3(_0x5d1f1f, _0x538290, _0x2015c4, _0x2973a3, _0x2b3e15), wx['removeStor' + 'ageSync']('count_repo' + 'rtCustomEv' + 'ent')), _0x3e4ee4['data']['data']['isCountOnl' + 'ine']) {
                                        var _0x4d3658 = new Date()['getTime'](), _0x20d9ac = setTimeout(function () {
                                                _0x17fe56(_0x5d1f1f, _0x538290, _0x2015c4, _0x4d3658);
                                            }, 0xea60);
                                        wx['onHide'](function () {
                                            clearTimeout(_0x20d9ac), _0x20d9ac = null, _0x2ebb81 && (clearInterval(_0x2ebb81), _0x2ebb81 = null);
                                        }), wx['onShow'](function () {
                                            _0x4d3658 = new Date()['getTime'](), _0x20d9ac || (_0x20d9ac = setTimeout(function () {
                                                _0x17fe56(_0x5d1f1f, _0x538290, _0x2015c4, _0x4d3658);
                                            }, 0xea60));
                                        });
                                    }
                                    console['log']('上报打开小程序成功'), _0x5a1c61(_0x3e4ee4['data']['data']);
                                } else
                                    console['log']('上报打开小程序错误'), console['log'](_0x3e4ee4), _0x310cac(_0x3e4ee4);
                            }
                        });
                    })['catch'](function (_0x1be571) {
                        console['log']('上报打开小程序错误'), console['log'](_0x1be571), reject(_0x1be571);
                    });
                }
                _0x5d1f1f = _0x5d1f1f || '', wx['setStorage' + 'Sync']('count_appk' + 'ey', _0x5d1f1f), _0x538290 ? wx['setStorage' + 'Sync']('count_open' + 'id', _0x538290) : _0x538290 = wx['getStorage' + 'Sync']('count_open' + 'id') || '', _0x351728 = _0x351728 || {}, _0x351728['query'] = _0x351728['query'] || {};
                var _0x2015c4 = '';
                _0x351728['ch'] ? _0x2015c4 = _0x351728['ch'] : _0x351728['query']['ch'] ? _0x2015c4 = _0x351728['query']['ch'] : _0x351728['query']['scene'] && (_0x2015c4 = decodeURIComponent(_0x351728['query']['scene'])), wx['setStorage' + 'Sync']('count_ch', _0x2015c4);
                var _0x435f7b = _0x351728['scene'] || '1001', _0x50f1b9 = JSON['stringify'](_0x351728) || '';
                _0x538290 ? _0x2b43b3('') : _0x40193(function (_0x3f08e9) {
                    return _0x2b43b3(_0x3f08e9);
                });
            }
            function _0xb69555(_0xffb132) {
                _0xffb132 = _0xffb132 || {};
                var _0x579ba0 = wx['getStorage' + 'Sync']('count_ch') || '', _0x1955da = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x3a9032 = _0xffb132['openid'] || wx['getStorage' + 'Sync']('count_open' + 'id') || '';
                return _0x3a9032 && _0x1955da ? _0x2e62c4(_0x1955da, _0x579ba0, _0x3a9032) : void wx['setStorage' + 'Sync']('count_user' + 'Login', 0x1);
            }
            function _0x4c7a5c(_0x109fb3) {
                _0x109fb3 = _0x109fb3 || {};
                var _0x1affcd = wx['getStorage' + 'Sync']('count_ch') || '', _0xf426b1 = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x6d8a15 = _0x109fb3['openid'] || wx['getStorage' + 'Sync']('count_open' + 'id') || '';
                return _0x6d8a15 && _0xf426b1 ? _0x2e62c4(_0xf426b1, _0x1affcd, _0x6d8a15) : void wx['setStorage' + 'Sync']('count_user' + 'Login', 0x1);
            }
            function _0x2e62c4(_0x46bca6, _0x5b4c51, _0x2141c3) {
                return new Promise(function (_0x1bbc7a, _0x4c5c22) {
                    wx['request']({
                        'url': _0x18db38 + ('login2.jso' + 'n'),
                        'data': {
                            'channel': _0x5b4c51,
                            'appKey': _0x46bca6,
                            'openid': _0x2141c3
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x283b40) {
                            0x0 == _0x283b40['data']['code'] ? (console['log']('上报登录成功'), _0x1bbc7a(_0x283b40['data']['data'])) : (console['log']('上报登录错误'), console['log'](_0x283b40));
                        }
                    });
                })['catch'](function (_0x26fa04) {
                    console['log']('上报登录错误'), console['log'](_0x26fa04);
                });
            }
            function _0x714450(_0x2aeb74) {
                _0x2aeb74 = _0x2aeb74 || {};
                var _0x5cf751 = wx['getStorage' + 'Sync']('count_ch') || '', _0x33b645 = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x3d6e27 = _0x2aeb74['openid'] || wx['getStorage' + 'Sync']('count_open' + 'id') || '';
                _0x3d6e27 && _0x33b645 ? _0x29ec36(_0x33b645, _0x5cf751, _0x3d6e27) : wx['setStorage' + 'Sync']('count_user' + 'Role', 0x1);
            }
            function _0x360e58(_0x2eab43) {
                _0x2eab43 = _0x2eab43 || {};
                var _0x42a856 = wx['getStorage' + 'Sync']('count_ch') || '', _0x14a12c = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x149565 = _0x2eab43['openid'] || wx['getStorage' + 'Sync']('count_open' + 'id') || '';
                _0x149565 && _0x14a12c ? _0x29ec36(_0x14a12c, _0x42a856, _0x149565) : wx['setStorage' + 'Sync']('count_user' + 'Role', 0x1);
            }
            function _0x29ec36(_0x2d9733, _0x3358dc, _0x431bd3) {
                return new Promise(function (_0xc797e, _0x17ed06) {
                    wx['request']({
                        'url': _0x18db38 + ('createRole' + '2.json'),
                        'data': {
                            'channel': _0x3358dc,
                            'appKey': _0x2d9733,
                            'openid': _0x431bd3
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x10fa8a) {
                            0x0 == _0x10fa8a['data']['code'] ? (console['log']('上报创建角色成功'), _0xc797e(_0x10fa8a['data']['data'])) : (console['log']('上报创建角色失败'), console['log'](_0x10fa8a));
                        }
                    });
                })['catch'](function (_0x11baa1) {
                    console['log']('上报创建角色失败'), console['log'](_0x11baa1);
                });
            }
            function _0x8c6b0c(_0x5411c7, _0x13a9a8) {
                _0x5411c7 = _0x5411c7 || {};
                var _0x5410a7 = _0x5411c7['appKey'] || wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x3f8304 = wx['getStorage' + 'Sync']('count_ch') || '', _0x2a4cc2 = wx['getStorage' + 'Sync']('count_open' + 'id') || '', _0x2b084c = _0x5411c7['type'] || 0x1;
                return _0x2a4cc2 && _0x5410a7 ? _0x492853(_0x5410a7, _0x3f8304, _0x2a4cc2, _0x2b084c, _0x13a9a8) : (_0x1c0651 = _0x2b084c, _0x1e4882 = _0x13a9a8, wx['setStorage' + 'Sync']('count_getF' + 'low', 0x1), void 0x0);
            }
            function _0x492853(_0x224c26, _0x4532af, _0x24398d, _0x14994c, _0x4d41da) {
                return new Promise(function (_0x496ea8, _0x3d6651) {
                    wx['request']({
                        'url': _0x18db38 + 'flow.json',
                        'data': {
                            'channel': _0x4532af,
                            'appKey': _0x224c26,
                            'openid': _0x24398d,
                            'type': _0x14994c
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x3ac451) {
                            0x0 == _0x3ac451['data']['code'] ? (console['log']('获取导流信息成功'), _0x496ea8(_0x3ac451['data']['data']), _0x4d41da(_0x3ac451['data']['data'])) : (console['log']('获取导流信息失败'), _0x3d6651(_0x3ac451));
                        }
                    });
                })['catch'](function (_0x4080cd) {
                    console['log']('获取导流信息失败'), console['log'](_0x4080cd);
                });
            }
            function _0x386c76(_0x383195, _0x183031) {
                _0x383195 = _0x383195 || {};
                var _0xf1e134 = wx['getStorage' + 'Sync']('count_ch') || '', _0x29a140 = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x3b8747 = wx['getStorage' + 'Sync']('count_open' + 'id') || '';
                return _0x3b8747 && _0x29a140 ? _0xa16268(_0x29a140, _0xf1e134, _0x3b8747, _0x183031) : (_0x2d8bd6 = _0x183031, void wx['setStorage' + 'Sync']('count_chat' + 'Code', 0x1));
            }
            function _0xa16268(_0x4455da, _0x5b7db9, _0x57c8bb, _0x45c11a) {
                return new Promise(function (_0x51d0a5, _0x2c9541) {
                    wx['request']({
                        'url': _0x18db38 + ('qrCodeImg.' + 'json'),
                        'data': {
                            'channel': _0x5b7db9 || '',
                            'appKey': _0x4455da,
                            'openid': _0x57c8bb
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x19c839) {
                            0x0 == _0x19c839['data']['code'] ? (console['log']('获取进群码成功'), _0x51d0a5(_0x19c839['data']['data']), _0x45c11a(_0x19c839['data']['data'])) : (console['log']('获取进群码失败'), _0x2c9541(_0x19c839));
                        }
                    });
                })['catch'](function (_0x40f37d) {
                    console['log']('获取进群码失败'), console['log'](_0x40f37d), reject(_0x40f37d);
                });
            }
            function _0x166352(_0x2e77c2) {
                _0x2e77c2 = _0x2e77c2 || {};
                var _0x224144 = wx['getStorage' + 'Sync']('count_appk' + 'ey') || '', _0x253e7d = wx['getStorage' + 'Sync']('count_open' + 'id') || '', _0x619ad6 = wx['getStorage' + 'Sync']('count_ch') || '';
                return _0x2973a3 = _0x2e77c2['eventName'] || '', _0x2b3e15 = _0x2e77c2['subEventNa' + 'me'] || '', _0x253e7d && _0x224144 ? _0x2531c3(_0x224144, _0x253e7d, _0x619ad6, _0x2973a3, _0x2b3e15) : void wx['setStorage' + 'Sync']('count_repo' + 'rtCustomEv' + 'ent', 0x1);
            }
            function _0x2531c3(_0x16a79a, _0x50af7f, _0x1ef97b, _0x178633, _0x19ae62) {
                return new Promise(function (_0x133904, _0x516afd) {
                    _0x178633 ? wx['request']({
                        'url': _0x18db38 + 'event.json',
                        'data': {
                            'appKey': _0x16a79a,
                            'openid': _0x50af7f,
                            'channel': _0x1ef97b,
                            'eventName': _0x178633,
                            'subEventName': _0x19ae62
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x4e1466) {
                            0x0 == _0x4e1466['data']['code'] ? (console['log']('上报自定义事件成功'), _0x133904(_0x4e1466['data']['data'])) : (console['log']('上报自定义事件失败'), console['log'](_0x4e1466));
                        }
                    }) : _0x516afd('reportCust' + 'omEvent\x20er' + 'rMsg:\x20参数错误');
                })['catch'](function (_0x6b8e68) {
                    console['log']('上报自定义事件失败'), console['log'](_0x6b8e68);
                });
            }
            function _0x17fe56(_0x4131b6, _0x487313, _0x5a9c79, _0x23aaf4) {
                function _0x3240e7() {
                    wx['request']({
                        'url': _0x18db38 + ('countOnlin' + 'e.json'),
                        'data': {
                            'channel': _0x5a9c79,
                            'appKey': _0x4131b6,
                            'openid': _0x487313,
                            'time': _0x23aaf4
                        },
                        'header': { 'content-type': 'applicatio' + 'n/json' },
                        'success': function (_0x49a268) {
                            0x0 == _0x49a268['data']['code'] ? console['log']('在线统计上报成功') : console['log']('在线统计上报失败');
                        }
                    });
                }
                _0x2ebb81 || (_0x2ebb81 = setInterval(_0x3240e7, 0xea60), _0x3240e7());
            }
            var _0x1e4882, _0x1c0651, _0x2d8bd6, _0x2973a3, _0x2b3e15, _0x18db38 = 'https://st' + 'at.genwowa' + 'nba.com/ap' + 'plet/', _0x2ebb81 = null;
            _0x20306b['exports'] = {
                'init': _0x2db9ce,
                'login': _0xb69555,
                'reportLogin': _0x4c7a5c,
                'createRole': _0x714450,
                'reportCreateRole': _0x360e58,
                'getFlow': _0x8c6b0c,
                'chatCode': _0x386c76,
                'reportCustomEvent': _0x166352
            };
        },
        {}
    ],
    0x2: [
        function (_0x1fcad4, _0x46fc16, _0xe066a) {
            'use strict';
            Object['defineProp' + 'erty'](_0xe066a, '__esModule', { 'value': !0x0 });
            var _0x4fad57;
            !function (_0xbcc0bb) {
                _0xbcc0bb[_0xbcc0bb['audio'] = 0x0] = 'audio', _0xbcc0bb[_0xbcc0bb['event'] = 0x1] = 'event', _0xbcc0bb[_0xbcc0bb['module'] = 0x2] = 'module', _0xbcc0bb[_0xbcc0bb['data'] = 0x3] = 'data', _0xbcc0bb[_0xbcc0bb['scene'] = 0x4] = 'scene', _0xbcc0bb[_0xbcc0bb['ui'] = 0x5] = 'ui', _0xbcc0bb[_0xbcc0bb['debug'] = 0x6] = 'debug', _0xbcc0bb[_0xbcc0bb['pay'] = 0x7] = 'pay', _0xbcc0bb[_0xbcc0bb['share'] = 0x8] = 'share', _0xbcc0bb[_0xbcc0bb['ad'] = 0x9] = 'ad', _0xbcc0bb[_0xbcc0bb['url'] = 0xa] = 'url';
            }(_0x4fad57 = _0xe066a['EGameMgr'] || (_0xe066a['EGameMgr'] = {}));
            var _0x12634a;
            !function (_0x5101f3) {
                _0x5101f3[_0x5101f3['audio'] = -0x1] = 'audio', _0x5101f3[_0x5101f3['event'] = -0x2] = 'event', _0x5101f3[_0x5101f3['module'] = -0x3] = 'module', _0x5101f3[_0x5101f3['data'] = -0x4] = 'data', _0x5101f3[_0x5101f3['scene'] = -0x5] = 'scene', _0x5101f3[_0x5101f3['ui'] = -0x6] = 'ui', _0x5101f3[_0x5101f3['debug'] = -0x7] = 'debug', _0x5101f3[_0x5101f3['pay'] = -0x8] = 'pay', _0x5101f3[_0x5101f3['share'] = -0x9] = 'share', _0x5101f3[_0x5101f3['ad'] = -0xa] = 'ad';
            }(_0x12634a = _0xe066a['ESyslog'] || (_0xe066a['ESyslog'] = {}));
            var _0x48b78c;
            !function (_0x284336) {
                _0x284336[_0x284336['panel'] = 0x0] = 'panel', _0x284336[_0x284336['dialog'] = 0x1] = 'dialog';
            }(_0x48b78c = _0xe066a['EUIMgr'] || (_0xe066a['EUIMgr'] = {}));
            var _0x51a7c4;
            !function (_0xd116f9) {
                _0xd116f9[_0xd116f9['null'] = 0x0] = 'null', _0xd116f9[_0xd116f9['boy'] = 0x1] = 'boy', _0xd116f9[_0xd116f9['girl'] = 0x2] = 'girl';
            }(_0x51a7c4 = _0xe066a['EGender'] || (_0xe066a['EGender'] = {}));
            var _0x4871aa;
            !function (_0x4839c8) {
                _0x4839c8[_0x4839c8['adUnit'] = 0x0] = 'adUnit', _0x4839c8[_0x4839c8['adUnit_1'] = 0x1] = 'adUnit_1', _0x4839c8[_0x4839c8['share'] = 0x2] = 'share', _0x4839c8[_0x4839c8['adToShare'] = 0x3] = 'adToShare';
            }(_0x4871aa = _0xe066a['EPay'] || (_0xe066a['EPay'] = {}));
            var _0x4e56c7;
            !function (_0x599d37) {
                _0x599d37[_0x599d37['succeed'] = 0x0] = 'succeed', _0x599d37[_0x599d37['Failure'] = 0x1] = 'Failure', _0x599d37[_0x599d37['cancel'] = 0x2] = 'cancel';
            }(_0x4e56c7 = _0xe066a['EResult'] || (_0xe066a['EResult'] = {}));
            var _0x4e0c35;
            !function (_0xb08854) {
                _0xb08854[_0xb08854['video'] = 0x0] = 'video', _0xb08854[_0xb08854['banner'] = 0x1] = 'banner', _0xb08854[_0xb08854['grid'] = 0x2] = 'grid', _0xb08854[_0xb08854['Interstiti' + 'al'] = 0x3] = 'Interstiti' + 'al';
            }(_0x4e0c35 = _0xe066a['EAdType'] || (_0xe066a['EAdType'] = {}));
            var _0x22630f;
            !function (_0x5c4b07) {
                _0x5c4b07[_0x5c4b07['null'] = 0x0] = 'null', _0x5c4b07[_0x5c4b07['create'] = 0x1] = 'create', _0x5c4b07[_0x5c4b07['noAd'] = 0x2] = 'noAd';
            }(_0x22630f = _0xe066a['EAdErrCode'] || (_0xe066a['EAdErrCode'] = {}));
            var _0x21b249;
            !function (_0x3a1c35) {
                _0x3a1c35[_0x3a1c35['msec'] = 0x0] = 'msec', _0x3a1c35[_0x3a1c35['sec'] = 0x1] = 'sec', _0x3a1c35[_0x3a1c35['min'] = 0x2] = 'min', _0x3a1c35[_0x3a1c35['hour'] = 0x3] = 'hour', _0x3a1c35[_0x3a1c35['day'] = 0x4] = 'day';
            }(_0x21b249 = _0xe066a['ETimeunit'] || (_0xe066a['ETimeunit'] = {}));
            var _0x3cdd43;
            !function (_0x942773) {
                _0x942773[_0x942773['full'] = 0x0] = 'full', _0x942773[_0x942773['simple'] = 0x1] = 'simple';
            }(_0x3cdd43 = _0xe066a['ETimeshow'] || (_0xe066a['ETimeshow'] = {}));
            var _0x297b18;
            !function (_0x2c7b6e) {
                _0x2c7b6e[_0x2c7b6e['msec'] = 0x0] = 'msec', _0x2c7b6e[_0x2c7b6e['sec'] = 0x1] = 'sec', _0x2c7b6e[_0x2c7b6e['min'] = 0x2] = 'min', _0x2c7b6e[_0x2c7b6e['hour'] = 0x3] = 'hour', _0x2c7b6e[_0x2c7b6e['day'] = 0x4] = 'day', _0x2c7b6e[_0x2c7b6e['mon'] = 0x5] = 'mon', _0x2c7b6e[_0x2c7b6e['year'] = 0x6] = 'year';
            }(_0x297b18 = _0xe066a['EDateunit'] || (_0xe066a['EDateunit'] = {}));
        },
        {}
    ],
    0x3: [
        function (_0x1c862b, _0x5878d1, _0x44742c) {
            'use strict';
            Object['defineProp' + 'erty'](_0x44742c, '__esModule', { 'value': !0x0 });
            var _0x44cc5f = _0x1c862b('./mgr/BPay' + 'Mgr'), _0x30e5a0 = _0x1c862b('./mgr/BSha' + 'reMgr'), _0x433a7a = _0x1c862b('./mgr/BAdM' + 'gr'), _0x3c7cd6 = _0x1c862b('./mgr/BUrl' + 'Mgr'), _0x211b82 = _0x1c862b('../CGame/p' + 'latform/pl' + 'atform_wx'), _0x3bbb46 = _0x1c862b('../config/' + 'Config'), _0x2d3204 = _0x1c862b('../constan' + 't/enums'), _0x1a60f5 = _0x1c862b('../CGame/p' + 'latform/pl' + 'atform_dev'), _0x133d31 = function () {
                    function _0x989832() {
                        this['gameId'] = 0x0, this['gameName'] = '', this['_mgrs'] = [], this['_platform'] = null;
                    }
                    return _0x989832['getGame'] = function () {
                        return _0x989832['bgame'] = _0x989832['bgame'] || new _0x989832();
                    }, _0x989832['getWidth'] = function () {
                        return _0x989832['getGame']()['getWidth']();
                    }, _0x989832['getHeight'] = function () {
                        return _0x989832['getGame']()['getHeight']();
                    }, _0x989832['getGameId'] = function () {
                        return _0x989832['getGame']()['getGameId']();
                    }, _0x989832['getUserInf' + 'oMgr'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getUserInf' + 'oMgr']();
                    }, _0x989832['getStorage'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getStorage']();
                    }, _0x989832['getFeedBac' + 'k'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getFeedBac' + 'k']();
                    }, _0x989832['getAdUnits'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getAdUnits']();
                    }, _0x989832['getAnalyti' + 'cs'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getAnalyti' + 'cs']();
                    }, _0x989832['getShare'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getShare']();
                    }, _0x989832['getRank'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getRank']();
                    }, _0x989832['getTableMg' + 'r'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getTableMg' + 'r']();
                    }, _0x989832['getI18n'] = function () {
                        return _0x989832['getGame']()['getPlatfor' + 'm']()['getI18n']();
                    }, _0x989832['prototype']['init'] = function () {
                        switch (_0x3bbb46['default']['platformTy' + 'pr']) {
                        case _0x2d3204['PlatformTy' + 'pe']['wx']:
                            this['_platform'] = new _0x211b82['default']();
                            break;
                        case _0x2d3204['PlatformTy' + 'pe']['qq']:
                            this['_platform'] = new _0x211b82['default']();
                            break;
                        case _0x2d3204['PlatformTy' + 'pe']['tt']:
                            this['_platform'] = new _0x211b82['default']();
                            break;
                        case _0x2d3204['PlatformTy' + 'pe']['web']:
                            this['_platform'] = new _0x1a60f5['default']();
                        }
                        this['_platform']['initPlatfo' + 'rm'](), this['initGame'](), this['_platform']['initGame'](), this['initResUrl']();
                    }, _0x989832['prototype']['getSound'] = function () {
                        switch (_0x3bbb46['default']['platformTy' + 'pr']) {
                        case _0x2d3204['PlatformTy' + 'pe']['web']:
                            return null;
                        case _0x2d3204['PlatformTy' + 'pe']['wx']:
                            return wx;
                        case _0x2d3204['PlatformTy' + 'pe']['tt']:
                            return wx;
                        }
                        return wx;
                    }, _0x989832['prototype']['initResUrl'] = function () {
                    }, _0x989832['prototype']['initGame'] = function () {
                        this['_addMgr'](_0x44cc5f['default']['getMgr']()), this['_addMgr'](_0x30e5a0['default']['getMgr']()), this['_addMgr'](_0x433a7a['default']['getMgr']()), this['_addMgr'](_0x3c7cd6['default']['getMgr']());
                    }, _0x989832['prototype']['_addMgr'] = function (_0x4235fe) {
                        return this['_mgrs']['push'](_0x4235fe), _0x4235fe;
                    }, _0x989832['prototype']['getMgr'] = function (_0xaf36c3) {
                        var _0x85f263 = this['_mgrs'][_0xaf36c3];
                        return _0x85f263;
                    }, _0x989832['prototype']['onDestroy'] = function () {
                    }, _0x989832['prototype']['getGameNam' + 'e'] = function () {
                        return this['gameName'];
                    }, _0x989832['prototype']['getGameId'] = function () {
                        return this['gameId'];
                    }, _0x989832['prototype']['getWidth'] = function () {
                        return Laya['stage']['width'];
                    }, _0x989832['prototype']['getHeight'] = function () {
                        return Laya['stage']['height'];
                    }, _0x989832['prototype']['getPlatfor' + 'm'] = function () {
                        return this['_platform'];
                    }, _0x989832['bgame'] = null, _0x989832;
                }();
            _0x44742c['default'] = _0x133d31;
        },
        {
            '../CGame/platform/platform_dev': 0x1a,
            '../CGame/platform/platform_wx': 0x1b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            './mgr/BAdMgr': 0x11,
            './mgr/BPayMgr': 0x12,
            './mgr/BShareMgr': 0x13,
            './mgr/BUrlMgr': 0x14
        }
    ],
    0x4: [
        function (_0xf40498, _0x69d620, _0x4f3b82) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4f3b82, '__esModule', { 'value': !0x0 });
            var _0x13dd4f = function () {
                function _0x564290() {
                }
                return _0x564290['prototype']['init'] = function () {
                }, _0x564290['prototype']['setUserId'] = function (_0x20e71c) {
                }, _0x564290['prototype']['setUserPro' + 'perty'] = function (_0xf37825) {
                }, _0x564290['prototype']['logEvent'] = function (_0x2538d3, _0x3229ef) {
                }, _0x564290['prototype']['setScreenN' + 'ame'] = function (_0x4823c6) {
                }, _0x564290;
            }();
            _0x4f3b82['default'] = _0x13dd4f;
        },
        {}
    ],
    0x5: [
        function (_0x293c5e, _0x17faa1, _0x2f9641) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2f9641, '__esModule', { 'value': !0x0 });
            var _0x21c8c5 = _0x293c5e('../BGame'), _0x18b7c7 = function () {
                    function _0x186d03(_0x1289c2) {
                        this['pos'] = new Laya['Vector2'](), this['size'] = new Laya['Size'](0x0, 0x0), this['anchor'] = new Laya['Vector2'](), this['adid'] = '', this['adid'] = _0x1289c2;
                    }
                    return _0x186d03['prototype']['getId'] = function () {
                        return this['adid'];
                    }, _0x186d03['prototype']['getSize'] = function () {
                        return this['size'];
                    }, _0x186d03['prototype']['show'] = function () {
                        _0x21c8c5['default']['getAdUnits']()['showBanner'](this['adid']);
                    }, _0x186d03['prototype']['hide'] = function () {
                        _0x21c8c5['default']['getAdUnits']()['hideBanner'](this['adid']);
                    }, _0x186d03['prototype']['setPositio' + 'n'] = function (_0x4b4cf5) {
                        this['pos'] = _0x4b4cf5, this['_onRePos']();
                    }, _0x186d03['prototype']['getPositio' + 'n'] = function () {
                        return this['pos'];
                    }, _0x186d03['prototype']['setWidth'] = function (_0x10b1f2) {
                        _0x21c8c5['default']['getAdUnits']()['setBannerW' + 'idth'](this['adid'], _0x10b1f2);
                    }, _0x186d03['prototype']['setAnchorX'] = function (_0x4dd9f1) {
                        this['anchor']['x'] = _0x4dd9f1, this['_onRePos']();
                    }, _0x186d03['prototype']['setAnchorY'] = function (_0x208383) {
                        this['anchor']['y'] = _0x208383, this['_onRePos']();
                    }, _0x186d03['prototype']['_onResize'] = function (_0x3ddff0) {
                        this['size'] = _0x3ddff0, this['_onRePos']();
                    }, _0x186d03['prototype']['_onRePos'] = function () {
                        var _0x162bb3 = new Laya['Vector2']();
                        _0x162bb3['x'] = this['pos']['x'] - this['size']['width'] * this['anchor']['x'], _0x162bb3['y'] = this['pos']['y'] - this['size']['height'] * this['anchor']['y'], _0x21c8c5['default']['getAdUnits']()['setBannerP' + 'os'](this['adid'], _0x162bb3);
                    }, _0x186d03;
                }();
            _0x2f9641['default'] = _0x18b7c7;
        },
        { '../BGame': 0x3 }
    ],
    0x6: [
        function (_0x138459, _0x3ea562, _0xf2b78b) {
            'use strict';
            Object['defineProp' + 'erty'](_0xf2b78b, '__esModule', { 'value': !0x0 });
            var _0x10b2bb = _0x138459('../BGame'), _0x5e088c = function () {
                    function _0x5e11d9(_0x518e10) {
                        this['pos'] = new Laya['Vector2'](), this['size'] = new Laya['Size'](0x0, 0x0), this['anchor'] = new Laya['Vector2'](), this['adid'] = '', this['adid'] = _0x518e10;
                    }
                    return _0x5e11d9['prototype']['getId'] = function () {
                        return this['adid'];
                    }, _0x5e11d9['prototype']['show'] = function () {
                        _0x10b2bb['default']['getAdUnits']()['showGridAd'](this['adid']);
                    }, _0x5e11d9['prototype']['hide'] = function () {
                        _0x10b2bb['default']['getAdUnits']()['hideGridAd'](this['adid']);
                    }, _0x5e11d9['prototype']['setPositio' + 'n'] = function (_0x4d3669) {
                        this['pos'] = _0x4d3669, this['_onRePos']();
                    }, _0x5e11d9['prototype']['getPositio' + 'n'] = function () {
                        return this['pos'];
                    }, _0x5e11d9['prototype']['setWidth'] = function (_0x169e78) {
                        _0x10b2bb['default']['getAdUnits']()['setGridAdW' + 'idth'](this['adid'], _0x169e78);
                    }, _0x5e11d9['prototype']['setAnchorX'] = function (_0x461742) {
                        this['anchor']['x'] = _0x461742, this['_onRePos']();
                    }, _0x5e11d9['prototype']['setAnchorY'] = function (_0x5a1223) {
                        this['anchor']['y'] = _0x5a1223, this['_onRePos']();
                    }, _0x5e11d9['prototype']['_onResize'] = function (_0x3c8f97) {
                        this['size'] = _0x3c8f97, this['_onRePos']();
                    }, _0x5e11d9['prototype']['_onRePos'] = function () {
                        var _0x443a1c = new Laya['Vector2']();
                        _0x443a1c['x'] = this['pos']['x'] - this['size']['width'] * this['anchor']['x'], _0x443a1c['y'] = this['pos']['y'] - this['size']['height'] * this['anchor']['y'], _0x10b2bb['default']['getAdUnits']()['setGridAdP' + 'os'](this['adid'], _0x443a1c);
                    }, _0x5e11d9;
                }();
            _0xf2b78b['default'] = _0x5e088c;
        },
        { '../BGame': 0x3 }
    ],
    0x7: [
        function (_0x39026a, _0x2ec381, _0x513f27) {
            'use strict';
            Object['defineProp' + 'erty'](_0x513f27, '__esModule', { 'value': !0x0 });
            var _0x428060 = function () {
                function _0x59e7d9() {
                }
                return _0x59e7d9['prototype']['start'] = function () {
                }, _0x59e7d9;
            }();
            _0x513f27['default'] = _0x428060;
        },
        {}
    ],
    0x8: [
        function (_0x229db7, _0x36953d, _0x5da2e2) {
            'use strict';
            Object['defineProp' + 'erty'](_0x5da2e2, '__esModule', { 'value': !0x0 });
            var _0x24099a = function () {
                function _0x56c7b8() {
                    this['platformId'] = -0x1, this['platformNa' + 'me'] = 'test', this['version'] = '1.0.0', this['appId'] = '', this['isDeBug'] = !0x1, this['userinfo'] = null, this['storage'] = null, this['feedback'] = null, this['adUnits'] = null, this['analystic'] = null, this['share'] = null, this['rank'] = null, this['table'] = null, this['i18n'] = null;
                }
                return _0x56c7b8['prototype']['onLoad'] = function () {
                }, _0x56c7b8['prototype']['onLogin'] = function (_0x53ea93) {
                }, _0x56c7b8['prototype']['getDeBug'] = function () {
                    return this['isDeBug'];
                }, _0x56c7b8['prototype']['initPlatfo' + 'rm'] = function () {
                }, _0x56c7b8['prototype']['initGame'] = function () {
                }, _0x56c7b8['prototype']['setVersion'] = function (_0x3ac33d) {
                    this['version'] = _0x3ac33d;
                }, _0x56c7b8['prototype']['getVersion'] = function () {
                    return this['version'];
                }, _0x56c7b8['prototype']['setName'] = function (_0x430854) {
                    this['platformNa' + 'me'] = _0x430854;
                }, _0x56c7b8['prototype']['getName'] = function () {
                    return this['platformNa' + 'me'];
                }, _0x56c7b8['prototype']['setId'] = function (_0xfb65cb) {
                    this['platformId'] = _0xfb65cb;
                }, _0x56c7b8['prototype']['getId'] = function () {
                    return this['platformId'];
                }, _0x56c7b8['prototype']['setAppId'] = function (_0x22ceda) {
                    this['appId'] = _0x22ceda;
                }, _0x56c7b8['prototype']['getAppId'] = function () {
                    return this['appId'];
                }, _0x56c7b8['prototype']['setUserInf' + 'oMgr'] = function (_0x25f7b0) {
                    this['userinfo'] = _0x25f7b0;
                }, _0x56c7b8['prototype']['getUserInf' + 'oMgr'] = function () {
                    return this['userinfo'];
                }, _0x56c7b8['prototype']['setStorage'] = function (_0x1de273) {
                    this['storage'] = _0x1de273;
                }, _0x56c7b8['prototype']['getStorage'] = function () {
                    return this['storage'];
                }, _0x56c7b8['prototype']['setFeedBac' + 'k'] = function (_0x4e1a53) {
                    this['feedback'] = _0x4e1a53;
                }, _0x56c7b8['prototype']['getFeedBac' + 'k'] = function () {
                    return this['feedback'];
                }, _0x56c7b8['prototype']['setAdUnits'] = function (_0x346955) {
                    this['adUnits'] = _0x346955, this['adUnits'] && this['adUnits']['init']();
                }, _0x56c7b8['prototype']['getAdUnits'] = function () {
                    return this['adUnits'];
                }, _0x56c7b8['prototype']['setAnalyti' + 'cs'] = function (_0x387812) {
                    this['analystic'] = _0x387812, _0x387812['init'](), _0x387812['setUserId'](this['getUserInf' + 'oMgr']()['getUserId']());
                }, _0x56c7b8['prototype']['getAnalyti' + 'cs'] = function () {
                    return this['analystic'];
                }, _0x56c7b8['prototype']['setShare'] = function (_0x433d63) {
                    this['share'] = _0x433d63;
                }, _0x56c7b8['prototype']['getShare'] = function () {
                    return this['share'];
                }, _0x56c7b8['prototype']['setRank'] = function (_0x51ae28) {
                    this['rank'] = _0x51ae28;
                }, _0x56c7b8['prototype']['getRank'] = function () {
                    return this['rank'];
                }, _0x56c7b8['prototype']['setTableMg' + 'r'] = function (_0x3ca727) {
                    this['table'] = _0x3ca727;
                }, _0x56c7b8['prototype']['getTableMg' + 'r'] = function () {
                    return this['table'];
                }, _0x56c7b8['prototype']['setI18n'] = function (_0x3e5bb2) {
                    this['i18n'] = _0x3e5bb2, this['i18n'] && this['i18n']['init']();
                }, _0x56c7b8['prototype']['getI18n'] = function () {
                    return this['i18n'];
                }, _0x56c7b8['prototype']['otherInter' + 'face'] = function (_0x53947d) {
                    for (var _0x1f3a0a = [], _0x305c39 = 0x1; _0x305c39 < arguments['length']; _0x305c39++)
                        _0x1f3a0a[_0x305c39 - 0x1] = arguments[_0x305c39];
                }, _0x56c7b8;
            }();
            _0x5da2e2['default'] = _0x24099a;
        },
        {}
    ],
    0x9: [
        function (_0x16be25, _0x47fd64, _0x1a13f4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1a13f4, '__esModule', { 'value': !0x0 });
            var _0x5cedb4 = function () {
                function _0x4f36a7() {
                    this['name'] = '', this['score'] = 0x0, this['rank'] = 0x0, this['avatarUrl'] = '头像地址', this['data'] = {};
                }
                return _0x4f36a7;
            }();
            _0x1a13f4['default'] = _0x5cedb4;
        },
        {}
    ],
    0xa: [
        function (_0x2a4c52, _0x44bbbb, _0x68aebb) {
            'use strict';
            Object['defineProp' + 'erty'](_0x68aebb, '__esModule', { 'value': !0x0 });
            var _0x131a4a = _0x2a4c52('../BEnum'), _0x4d81f4 = function () {
                    function _0x37290f(_0x33359c) {
                        void 0x0 === _0x33359c && (_0x33359c = _0x131a4a['EResult']['succeed']), this['tag'] = '', this['requestDat' + 'a'] = {}, this['result'] = _0x131a4a['EResult']['succeed'], this['data'] = {}, this['errCode'] = 0x0, this['err'] = '', this['result'] = _0x33359c;
                    }
                    return _0x37290f;
                }();
            _0x68aebb['default'] = _0x4d81f4;
        },
        { '../BEnum': 0x2 }
    ],
    0xb: [
        function (_0x23480b, _0x389a51, _0x954baf) {
            'use strict';
            Object['defineProp' + 'erty'](_0x954baf, '__esModule', { 'value': !0x0 });
            var _0x3491f0 = function () {
                function _0x39eff0() {
                    this['_name'] = '', this['_data'] = {}, this['_rowkeys'] = [], this['_colkeys'] = [];
                }
                return _0x39eff0['prototype']['setData'] = function (_0x3089a9, _0x34dacf) {
                    this['_name'] = _0x3089a9, this['_data'] = _0x34dacf, this['_rowkeys'] = Object['keys'](_0x34dacf), this['_rowkeys']['length'] > 0x0 && _0x34dacf[this['_rowkeys'][0x0]] && (this['_colkeys'] = Object['keys'](_0x34dacf[this['_rowkeys'][0x0]]));
                }, _0x39eff0['prototype']['getTableNa' + 'me'] = function () {
                    return this['_name'];
                }, _0x39eff0['prototype']['getColNum'] = function () {
                    return this['_colkeys']['length'];
                }, _0x39eff0['prototype']['getRowNum'] = function () {
                    return this['_rowkeys']['length'];
                }, _0x39eff0['prototype']['getColKeys'] = function () {
                    return this['_colkeys'];
                }, _0x39eff0['prototype']['getRowKeys'] = function () {
                    return this['_rowkeys'];
                }, _0x39eff0['prototype']['filter'] = function (_0x3b97bc) {
                    for (var _0xe72f07 = new _0x39eff0(), _0x92dc9b = {}, _0x182bfc = 0x0; _0x182bfc < this['_rowkeys']['length']; _0x182bfc++) {
                        var _0x18be05 = this['_data'][this['_rowkeys'][_0x182bfc]];
                        _0x3b97bc(_0x18be05) && (_0x92dc9b[this['_rowkeys'][_0x182bfc]] = _0x18be05);
                    }
                    return _0xe72f07['setData'](this['_name'], _0x92dc9b), _0xe72f07;
                }, _0x39eff0['prototype']['getData'] = function (_0x2ba418, _0x25c4b4) {
                    var _0x380a6f = this['_getrowkey'](_0x2ba418);
                    if (void 0x0 == _0x380a6f)
                        return void 0x0;
                    (null == _0x25c4b4 || void 0x0 == _0x25c4b4) && (_0x25c4b4 = 0x1);
                    var _0xb9f2ef = this['_getcolkey'](_0x25c4b4);
                    return void 0x0 == _0xb9f2ef ? void 0x0 : this['_data'][_0x380a6f] && this['_data'][_0x380a6f][_0xb9f2ef] ? this['_data'][_0x380a6f][_0xb9f2ef] : void 0x0;
                }, _0x39eff0['prototype']['getRowData'] = function (_0x4329a3) {
                    var _0x26cfed = this['_getrowkey'](_0x4329a3);
                    return void 0x0 == _0x26cfed ? void 0x0 : this['_data'][_0x26cfed];
                }, _0x39eff0['prototype']['getColData'] = function (_0x1c0979) {
                    var _0x18c9b4 = this['_getcolkey'](_0x1c0979);
                    if (void 0x0 == _0x18c9b4)
                        return void 0x0;
                    for (var _0x4cd02d = {}, _0x174638 = this['getRowKeys'](), _0x3e7315 = 0x0; _0x3e7315 < _0x174638['length']; _0x3e7315++)
                        _0x4cd02d[_0x174638[_0x3e7315]] = this['getData'](_0x174638[_0x3e7315], _0x18c9b4);
                    return _0x4cd02d;
                }, _0x39eff0['prototype']['colKeyToIn' + 'dex'] = function (_0x238a9d) {
                    for (var _0x58d008 = 0x0; _0x58d008 < this['_colkeys']['length']; _0x58d008++)
                        if (this['_colkeys'][_0x58d008] == _0x238a9d)
                            return _0x58d008;
                    return void 0x0;
                }, _0x39eff0['prototype']['colIndexTo' + 'key'] = function (_0x2c1e1f) {
                    return this['_colkeys'][_0x2c1e1f] ? this['_colkeys'][_0x2c1e1f] : void 0x0;
                }, _0x39eff0['prototype']['rowKeyToIn' + 'dex'] = function (_0x1dbe90) {
                    for (var _0x2c7f43 = 0x0; _0x2c7f43 < this['_rowkeys']['length']; _0x2c7f43++)
                        if (this['_rowkeys'][_0x2c7f43] == _0x1dbe90)
                            return _0x2c7f43;
                    return void 0x0;
                }, _0x39eff0['prototype']['rowIndexTo' + 'key'] = function (_0x20773b) {
                    return this['_rowkeys'][_0x20773b] ? this['_rowkeys'][_0x20773b] : void 0x0;
                }, _0x39eff0['prototype']['_getrowkey'] = function (_0x5b8aa9) {
                    var _0x4e98c0 = '';
                    return _0x4e98c0 = 'string' == typeof _0x5b8aa9 ? _0x5b8aa9 : this['rowIndexTo' + 'key'](_0x5b8aa9);
                }, _0x39eff0['prototype']['_getcolkey'] = function (_0x3b2b6d) {
                    var _0x9ce40 = '';
                    return _0x9ce40 = 'string' == typeof _0x3b2b6d ? _0x3b2b6d : this['colIndexTo' + 'key'](_0x3b2b6d);
                }, _0x39eff0;
            }();
            _0x954baf['default'] = _0x3491f0;
        },
        {}
    ],
    0xc: [
        function (_0x21c9f7, _0x1d9b6b, _0x52f640) {
            'use strict';
            Object['defineProp' + 'erty'](_0x52f640, '__esModule', { 'value': !0x0 });
            var _0x221ac6 = _0x21c9f7('./BResult'), _0x5d3c9f = _0x21c9f7('./BTable'), _0x3b8d5f = _0x21c9f7('../BEnum'), _0x179b44 = _0x21c9f7('../lib/BLo' + 'ader'), _0x721103 = function () {
                    function _0x3cfda1() {
                        this['_tablepath'] = '', this['_Infotable' + 'Name'] = '', this['_tables'] = {};
                    }
                    return _0x3cfda1['prototype']['setTablePa' + 'th'] = function (_0x3d7dd1) {
                        this['_tablepath'] = _0x3d7dd1;
                    }, _0x3cfda1['prototype']['setInfoTab' + 'le'] = function (_0x1f1e57) {
                        this['_Infotable' + 'Name'] = _0x1f1e57;
                    }, _0x3cfda1['prototype']['loadAllTab' + 'le'] = function (_0x477b26) {
                        this['loadTable'](this['_Infotable' + 'Name'], function (_0x4b7774) {
                            if (_0x4b7774['result'] == _0x3b8d5f['EResult']['Failure'])
                                _0x4b7774['err'] = '未设置InfoTab' + 'le', _0x477b26 && _0x477b26(_0x4b7774);
                            else {
                                for (var _0x4faed6 = this['getTable'](this['_Infotable' + 'Name']), _0x32b9b5 = _0x4faed6['getRowKeys'](), _0x390928 = [], _0x3ff3b3 = 0x0; _0x3ff3b3 < _0x32b9b5['length']; _0x3ff3b3++) {
                                    var _0x2a4ff1 = _0x4faed6['getData'](_0x32b9b5[_0x3ff3b3], 'name');
                                    _0x4faed6['getData'](_0x32b9b5[_0x3ff3b3], 'version'), _0x390928['push'](_0x2a4ff1);
                                }
                                this['loadTable'](_0x390928, function (_0x18f32c) {
                                    _0x477b26 && _0x477b26(_0x18f32c);
                                }['bind'](this));
                            }
                        }['bind'](this));
                    }, _0x3cfda1['prototype']['loadTable'] = function (_0x4a9426, _0x30b66c) {
                        var _0x4f53e8 = [];
                        'string' == typeof _0x4a9426 ? _0x4f53e8['push'](_0x4a9426) : _0x4f53e8 = _0x4a9426;
                        for (var _0x5c72a5 = [], _0xb6f53f = [], _0xc382b6 = 0x0, _0x107c13 = function (_0x1c6795) {
                                    _0x179b44['default']['load'](_0x385165['_tablepath'] + _0x4f53e8[_0x1c6795], function (_0x5ac695, _0x17542f) {
                                        var _0x2c9e39 = _0x4f53e8[_0x1c6795];
                                        if (_0x17542f) {
                                            _0xb6f53f['push'](_0x2c9e39);
                                            var _0x588fa2 = new _0x5d3c9f['default']();
                                            _0x588fa2['setData'](_0x2c9e39, _0x17542f['json']), this['_tables'][_0x2c9e39] = _0x588fa2;
                                        } else
                                            _0x5c72a5['push'](_0x2c9e39);
                                        if (_0xc382b6++, _0xc382b6 >= _0x4f53e8['length']) {
                                            var _0x1c7337 = new _0x221ac6['default']();
                                            if (_0x1c7337['result'] = _0x3b8d5f['EResult']['succeed'], _0x5c72a5['length'] > 0x0) {
                                                _0x1c7337['result'] = _0x3b8d5f['EResult']['Failure'];
                                                for (var _0x2941ce = 0x0; _0x2941ce < _0x5c72a5['length']; _0x2941ce++)
                                                    _0x1c7337['err'] += _0x5c72a5[_0x2941ce] + '\x20';
                                            }
                                            _0x1c7337['data'] = _0xb6f53f, _0x30b66c && _0x30b66c(_0x1c7337);
                                        }
                                    }['bind'](_0x385165));
                                }, _0x385165 = this, _0x3a3412 = 0x0; _0x3a3412 < _0x4f53e8['length']; _0x3a3412++)
                            _0x107c13(_0x3a3412);
                    }, _0x3cfda1['prototype']['removeTabl' + 'e'] = function (_0x39e1d9) {
                        delete this['_tables'][_0x39e1d9];
                    }, _0x3cfda1['prototype']['getTable'] = function (_0x34e645) {
                        return this['_tables'][_0x34e645];
                    }, _0x3cfda1;
                }();
            _0x52f640['default'] = _0x721103;
        },
        {
            '../BEnum': 0x2,
            '../lib/BLoader': 0xf,
            './BResult': 0xa,
            './BTable': 0xb
        }
    ],
    0xd: [
        function (_0x3abf35, _0x2e046d, _0x39c022) {
            'use strict';
            Object['defineProp' + 'erty'](_0x39c022, '__esModule', { 'value': !0x0 });
            var _0x189e1e = _0x3abf35('../BEnum'), _0x4e596a = function () {
                    function _0x595008() {
                        this['newuser'] = !0x0, this['id'] = '', this['auth'] = !0x1, this['nickName'] = '', this['avatarUrl'] = '', this['city'] = '', this['gender'] = _0x189e1e['EGender']['null'], this['phonenumbe' + 'r'] = '', this['other'] = {};
                    }
                    return _0x595008;
                }();
            _0x39c022['default'] = _0x4e596a;
        },
        { '../BEnum': 0x2 }
    ],
    0xe: [
        function (_0x928536, _0x149170, _0x13fd3b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x13fd3b, '__esModule', { 'value': !0x0 });
            var _0x50802a = _0x928536('../base/BR' + 'esult'), _0xdca842 = _0x928536('../BEnum'), _0x12a66a = _0x928536('../../mana' + 'ger/HttpMa' + 'nager'), _0x3e6439 = function () {
                    function _0x1a754a() {
                    }
                    return _0x1a754a['get'] = function (_0x37c65c, _0x16e5e2, _0x281ed4) {
                        if ('object' == typeof _0x16e5e2) {
                            var _0x40bc77 = [];
                            for (var _0x5b78b1 in _0x16e5e2)
                                _0x40bc77['push'](encodeURIComponent(_0x5b78b1) + '=' + encodeURIComponent(_0x16e5e2[_0x5b78b1]));
                            _0x37c65c += '?', _0x37c65c += _0x40bc77['join']('&');
                        }
                        var _0x18b284 = new _0x50802a['default']();
                        console['log']('url：', _0x37c65c), _0x12a66a['default']['I']['send']('get', _0x37c65c, Laya['Handler']['create'](this, function (_0x1d1cd1) {
                            console['log']('登录调用成功:' + JSON['stringify'](_0x1d1cd1)), _0x18b284['result'] = _0xdca842['EResult']['succeed'], _0x18b284['data'] = _0x1d1cd1, _0x281ed4 && _0x281ed4(_0x18b284);
                        }), Laya['Handler']['create'](this, function (_0x5af7c6) {
                            console['log']('登录调用失败:' + JSON['stringify'](_0x5af7c6)), _0x18b284['result'] = _0xdca842['EResult']['Failure'], _0x18b284['data'] = _0x5af7c6, _0x281ed4 && _0x281ed4(_0x18b284);
                        }));
                    }, _0x1a754a['post'] = function (_0x2ef1d1, _0x529f6e, _0x1cd84a) {
                        var _0x2f0a44 = new _0x50802a['default']();
                        _0x12a66a['default']['I']['send']('post', _0x2ef1d1, Laya['Handler']['create'](this, function (_0x445914) {
                            console['log']('调用成功:' + JSON['stringify'](_0x445914)), _0x2f0a44['result'] = _0xdca842['EResult']['succeed'], _0x2f0a44['data'] = _0x445914, _0x1cd84a && _0x1cd84a(_0x2f0a44);
                        }), Laya['Handler']['create'](this, function (_0x275d7f) {
                            console['log']('调用失败:' + _0x275d7f), _0x2f0a44['result'] = _0xdca842['EResult']['Failure'], _0x2f0a44['data'] = _0x275d7f, _0x1cd84a && _0x1cd84a(_0x2f0a44);
                        }), null, _0x529f6e);
                    }, _0x1a754a;
                }();
            _0x13fd3b['default'] = _0x3e6439;
        },
        {
            '../../manager/HttpManager': 0x4d,
            '../BEnum': 0x2,
            '../base/BResult': 0xa
        }
    ],
    0xf: [
        function (_0x3d4945, _0x328107, _0x414d47) {
            'use strict';
            Object['defineProp' + 'erty'](_0x414d47, '__esModule', { 'value': !0x0 });
            var _0x58a480 = function () {
                function _0x3bf49d() {
                }
                return _0x3bf49d['load'] = function (_0x28466a, _0x42683b) {
                    Laya['loader']['load'](_0x28466a, Laya['Handler']['create'](this, _0x42683b));
                }, _0x3bf49d;
            }();
            _0x414d47['default'] = _0x58a480;
        },
        {}
    ],
    0x10: [
        function (_0x32bfc7, _0x3d8a40, _0x430820) {
            'use strict';
            Object['defineProp' + 'erty'](_0x430820, '__esModule', { 'value': !0x0 });
            var _0x19726c = function () {
                function _0x203630() {
                }
                return _0x203630['initKeys'] = function () {
                    if (!_0x203630['keys']) {
                        var _0x2cdf7a = window['localStora' + 'ge']['getItem']('localstora' + 'gekeys');
                        _0x203630['findData'](_0x2cdf7a) ? _0x203630['keys'] = JSON['parse'](_0x2cdf7a) : _0x203630['keys'] = {};
                    }
                }, _0x203630['saveData'] = function (_0x4d7c80, _0xf19ec6) {
                    if (_0x203630['initKeys'](), !_0x203630['keys'][_0x4d7c80]) {
                        _0x203630['keys'][_0x4d7c80] = _0x4d7c80;
                        var _0x1b301c = JSON['stringify'](_0x203630['keys']);
                        window['localStora' + 'ge']['setItem']('localstora' + 'gekeys', _0x1b301c);
                    }
                    'boolean' == typeof _0xf19ec6 && (_0xf19ec6 = _0xf19ec6 ? 'true' : 'false'), this['datas']['length'] > 0x0 && this['datas'][this['datas']['length'] - 0x1][0x0] == _0x4d7c80 ? this['datas'][this['datas']['length'] - 0x1][0x1] = _0xf19ec6 : this['datas']['push']([
                        _0x4d7c80,
                        _0xf19ec6
                    ]), _0x203630['threshold'] < 0x0 ? _0x203630['saveAllDat' + 'a']() : _0x203630['_openSaveU' + 'pData']();
                }, _0x203630['readData'] = function (_0x13ac5d, _0x259237) {
                    _0x203630['initKeys']();
                    for (var _0x377e58 = 0x0; _0x377e58 < this['datas']['length']; _0x377e58++)
                        if (this['datas'][_0x377e58][0x0] == _0x13ac5d)
                            return this['datas'][_0x377e58][0x1];
                    var _0x270ad0 = window['localStora' + 'ge']['getItem'](_0x13ac5d);
                    return _0x203630['findData'](_0x270ad0) ? 'boolean' == typeof _0x259237 ? _0x270ad0 = 'true' == _0x270ad0 ? !0x0 : !0x1 : 'number' == typeof _0x259237 && (_0x270ad0 = +_0x270ad0) : _0x270ad0 = _0x259237, _0x270ad0;
                }, _0x203630['removeData'] = function (_0x10a518) {
                    window['localStora' + 'ge']['removeItem'](_0x10a518);
                }, _0x203630['removeAllD' + 'ata'] = function () {
                    window['localStora' + 'ge']['clear']();
                }, _0x203630['findData'] = function (_0x2a3aa8) {
                    return null == _0x2a3aa8 || '' === _0x2a3aa8 || 'undefined' === _0x2a3aa8 ? !0x1 : !0x0;
                }, _0x203630['backupData'] = function (_0x5d5f49) {
                    _0x203630['initKeys']();
                    var _0x34cc82 = Object['keys'](_0x203630['keys']), _0x53a2b0 = JSON['stringify'](_0x203630['keys']);
                    window['localStora' + 'ge']['setItem']('localstora' + 'gekeys_bac' + 'kup' + _0x5d5f49, _0x53a2b0);
                    for (var _0x59d25f = 0x0; _0x59d25f < _0x34cc82['length']; _0x59d25f++) {
                        var _0x1f0bbe = window['localStora' + 'ge']['getItem'](_0x34cc82[_0x59d25f]);
                        window['localStora' + 'ge']['setItem'](_0x34cc82[_0x59d25f] + '_backup' + _0x5d5f49, _0x1f0bbe);
                    }
                    console['log']('备份成功');
                }, _0x203630['recoveryDa' + 'ta'] = function (_0x25ec67) {
                    var _0x32287a = window['localStora' + 'ge']['getItem']('localstora' + 'gekeys_bac' + 'kup' + _0x25ec67);
                    if (_0x203630['findData'](_0x32287a)) {
                        _0x203630['initKeys']();
                        for (var _0x2ee89c = Object['keys'](_0x203630['keys']), _0x573367 = 0x0; _0x573367 < _0x2ee89c['length']; _0x573367++)
                            window['localStora' + 'ge']['removeItem'](_0x2ee89c[_0x573367]);
                        window['localStora' + 'ge']['setItem']('localstora' + 'gekeys', _0x32287a), _0x2ee89c = Object['keys'](JSON['parse'](_0x32287a)), console['log']('开始恢复');
                        for (var _0x573367 = 0x0; _0x573367 < _0x2ee89c['length']; _0x573367++) {
                            var _0x2dddbb = window['localStora' + 'ge']['getItem'](_0x2ee89c[_0x573367] + '_backup' + _0x25ec67);
                            console['log']('恢复', _0x2ee89c[_0x573367], _0x2dddbb), window['localStora' + 'ge']['setItem'](_0x2ee89c[_0x573367], _0x2dddbb);
                        }
                        console['log']('恢复成功');
                    }
                }, _0x203630['saveAllDat' + 'a'] = function () {
                    for (var _0x49cd79 = 0x0; _0x49cd79 < _0x203630['datas']['length']; _0x49cd79++)
                        window['localStora' + 'ge']['setItem'](_0x203630['datas'][_0x49cd79][0x0], _0x203630['datas'][_0x49cd79][0x1]);
                    _0x203630['datas']['splice'](0x0, _0x203630['datas']['length']), _0x203630['isSaveIng'] = !0x1;
                }, _0x203630['_openSaveU' + 'pData'] = function () {
                    _0x203630['isSaveIng'] || (_0x203630['isSaveIng'] = !0x0, window['localStora' + 'ge']['setItem'](_0x203630['datas'][0x0][0x0], _0x203630['datas'][0x0][0x1]), _0x203630['datas']['splice'](0x0, 0x1), setTimeout(function () {
                        _0x203630['isSaveIng'] = !0x1, _0x203630['datas']['length'] > 0x0 && _0x203630['_openSaveU' + 'pData']();
                    }, _0x203630['threshold']));
                }, _0x203630['exportData'] = function (_0x510efd) {
                    _0x203630['initKeys']();
                    for (var _0x5606a6 = {}, _0x453808 = Object['keys'](_0x203630['keys']), _0x1e59a8 = 0x0; _0x1e59a8 < _0x453808['length']; _0x1e59a8++) {
                        var _0x39ad2b = window['localStora' + 'ge']['getItem'](_0x453808[_0x1e59a8]);
                        _0x5606a6[_0x453808[_0x1e59a8]] = _0x39ad2b;
                    }
                    _0x510efd(_0x5606a6);
                }, _0x203630['importData'] = function (_0x18c254) {
                    for (var _0x5424be = Object['keys'](_0x18c254), _0x562258 = {}, _0x3a04fe = 0x0; _0x3a04fe < _0x5424be['length']; _0x3a04fe++)
                        _0x562258[_0x5424be[_0x3a04fe]] = _0x5424be[_0x3a04fe], window['localStora' + 'ge']['setItem'](_0x5424be[_0x3a04fe], _0x18c254[_0x5424be[_0x3a04fe]]);
                    var _0x38a9d7 = JSON['stringify'](_0x562258);
                    window['localStora' + 'ge']['setItem']('localstora' + 'gekeys', _0x38a9d7);
                }, _0x203630['threshold'] = 0x0, _0x203630['datas'] = [], _0x203630['keys'] = null, _0x203630['isSaveIng'] = !0x1, _0x203630;
            }();
            _0x430820['default'] = _0x19726c;
        },
        {}
    ],
    0x11: [
        function (_0x2268dc, _0x35c0d3, _0x428724) {
            'use strict';
            var _0x3b4c09 = this && this['__extends'] || function () {
                var _0x5a3b95 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x585485, _0x3f976b) {
                    _0x585485['__proto__'] = _0x3f976b;
                } || function (_0x82f1d9, _0x5367a2) {
                    for (var _0x196579 in _0x5367a2)
                        _0x5367a2['hasOwnProp' + 'erty'](_0x196579) && (_0x82f1d9[_0x196579] = _0x5367a2[_0x196579]);
                };
                return function (_0x3e05dc, _0x3eaf26) {
                    function _0x5317d8() {
                        this['constructo' + 'r'] = _0x3e05dc;
                    }
                    _0x5a3b95(_0x3e05dc, _0x3eaf26), _0x3e05dc['prototype'] = null === _0x3eaf26 ? Object['create'](_0x3eaf26) : (_0x5317d8['prototype'] = _0x3eaf26['prototype'], new _0x5317d8());
                };
            }();
            Object['defineProp' + 'erty'](_0x428724, '__esModule', { 'value': !0x0 });
            var _0x558e61 = _0x2268dc('../base/BM' + 'gr'), _0x42ad4f = _0x2268dc('../BGame'), _0x37eb4a = _0x2268dc('../BEnum'), _0x5c36e3 = function (_0x3696ea) {
                    function _0x38dd55() {
                        var _0x1fc769 = null !== _0x3696ea && _0x3696ea['apply'](this, arguments) || this;
                        return _0x1fc769['AdCfg'] = [], _0x1fc769;
                    }
                    return _0x3b4c09(_0x38dd55, _0x3696ea), _0x38dd55['getMgr'] = function () {
                        return _0x38dd55['mgr'] = _0x38dd55['mgr'] || new _0x38dd55();
                    }, _0x38dd55['prototype']['onLoad'] = function () {
                        _0x38dd55['mgr'] = this;
                        for (var _0x519df9 = Object['keys'](_0x37eb4a['EAdType']), _0x4a2936 = 0x0; _0x4a2936 < _0x519df9['length']; _0x4a2936++)
                            this['AdCfg']['push']([]);
                    }, _0x38dd55['prototype']['start'] = function () {
                    }, _0x38dd55['prototype']['addAdCfg'] = function (_0x51e2dc, _0x25fff5) {
                        this['AdCfg'][_0x51e2dc]['push'](_0x25fff5);
                    }, _0x38dd55['prototype']['setAdCfg'] = function (_0x17b7a2, _0x3b28cd) {
                        this['AdCfg'][_0x17b7a2] = _0x3b28cd;
                    }, _0x38dd55['prototype']['getAdUnitI' + 'd'] = function (_0x35d316, _0x197bca) {
                        return this['AdCfg'][_0x35d316][_0x197bca];
                    }, _0x38dd55['prototype']['showVideoA' + 'd'] = function (_0x25467a, _0x14fa1e) {
                        var _0x505d41 = this['getAdUnitI' + 'd'](_0x37eb4a['EAdType']['video'], _0x25467a);
                        _0x42ad4f['default']['getAdUnits']()['showVideoA' + 'd'](_0x505d41, function (_0x1851f6) {
                            _0x1851f6['requestDat' + 'a']['adUnitId'] = _0x505d41, _0x14fa1e && _0x14fa1e(_0x1851f6);
                        }['bind'](this));
                    }, _0x38dd55['prototype']['showModal'] = function (_0x76cfd2, _0xe9de4f) {
                        var _0x5a1bd0 = this;
                        wx['showModal']({
                            'title': '提示',
                            'content': '未播放完视频不能获得' + '奖励！',
                            'showCancel': !0x0,
                            'cancelColor': '#910202',
                            'cancelText': '取消',
                            'confirmColor': '#05AA05',
                            'confirmText': '确认',
                            'success': function (_0x3ff737) {
                                _0x3ff737['confirm'] && _0x5a1bd0['showVideoA' + 'd'](_0x76cfd2, _0xe9de4f), _0x3ff737['cancel'];
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        });
                    }, _0x38dd55['prototype']['createBann' + 'er'] = function (_0x5065d3, _0x1594e7, _0x4df23b) {
                    }, _0x38dd55['prototype']['getBanner'] = function (_0x130b87) {
                        return _0x42ad4f['default']['getAdUnits']()['getBanner'](_0x130b87);
                    }, _0x38dd55['prototype']['removeBann' + 'er'] = function (_0x3265b7) {
                        _0x42ad4f['default']['getAdUnits']()['destroyBan' + 'ner'](_0x3265b7);
                    }, _0x38dd55['prototype']['createGrid'] = function (_0x53f064, _0x5e4328, _0x945213, _0x29995c, _0x44c604) {
                        var _0x45e3bc = this['getAdUnitI' + 'd'](_0x37eb4a['EAdType']['grid'], _0x53f064);
                        _0x42ad4f['default']['getAdUnits']()['createGrid' + 'Ad'](_0x45e3bc, _0x5e4328, _0x945213, _0x29995c, _0x44c604);
                    }, _0x38dd55['prototype']['getGrid'] = function (_0x1ceeba) {
                        return _0x42ad4f['default']['getAdUnits']()['getGridAd'](_0x1ceeba);
                    }, _0x38dd55['prototype']['removeGrid'] = function (_0x33f9d4) {
                        _0x42ad4f['default']['getAdUnits']()['destroyGri' + 'dAd'](_0x33f9d4);
                    }, _0x38dd55['prototype']['_createBlo' + 'ckInputEve' + 'nts'] = function () {
                        var _0x3ca55c = new Laya['Node']();
                        return _0x3ca55c;
                    }, _0x38dd55['mgr'] = null, _0x38dd55;
                }(_0x558e61['default']);
            _0x428724['default'] = _0x5c36e3;
        },
        {
            '../BEnum': 0x2,
            '../BGame': 0x3,
            '../base/BMgr': 0x7
        }
    ],
    0x12: [
        function (_0x14b812, _0x3a0874, _0x40cb02) {
            'use strict';
            var _0x1b40d0 = this && this['__extends'] || function () {
                var _0x1edfee = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x2d0ceb, _0x458d5b) {
                    _0x2d0ceb['__proto__'] = _0x458d5b;
                } || function (_0x46e363, _0x48cbbf) {
                    for (var _0x27133f in _0x48cbbf)
                        _0x48cbbf['hasOwnProp' + 'erty'](_0x27133f) && (_0x46e363[_0x27133f] = _0x48cbbf[_0x27133f]);
                };
                return function (_0x53bd9e, _0x1bf9c7) {
                    function _0x1bc8cb() {
                        this['constructo' + 'r'] = _0x53bd9e;
                    }
                    _0x1edfee(_0x53bd9e, _0x1bf9c7), _0x53bd9e['prototype'] = null === _0x1bf9c7 ? Object['create'](_0x1bf9c7) : (_0x1bc8cb['prototype'] = _0x1bf9c7['prototype'], new _0x1bc8cb());
                };
            }();
            Object['defineProp' + 'erty'](_0x40cb02, '__esModule', { 'value': !0x0 });
            var _0x4355eb = _0x14b812('../base/BM' + 'gr'), _0x46617d = _0x14b812('../BEnum'), _0x2b8fb6 = _0x14b812('./BShareMg' + 'r'), _0x34d1d3 = _0x14b812('./BAdMgr'), _0x30ba34 = function (_0x572bd3) {
                    function _0x2aac48() {
                        var _0x4cbd0d = null !== _0x572bd3 && _0x572bd3['apply'](this, arguments) || this;
                        return _0x4cbd0d['payCfg'] = [], _0x4cbd0d;
                    }
                    return _0x1b40d0(_0x2aac48, _0x572bd3), _0x2aac48['getMgr'] = function () {
                        return _0x2aac48['mgr'] = _0x2aac48['mgr'] || new _0x2aac48();
                    }, _0x2aac48['prototype']['onLoad'] = function () {
                        _0x2aac48['mgr'] = this;
                    }, _0x2aac48['prototype']['start'] = function () {
                    }, _0x2aac48['prototype']['addPayCfg'] = function (_0xd6bfc9, _0x3c31b7, _0x736630) {
                        var _0x31f908 = {
                            'type': _0xd6bfc9,
                            'adId': _0x3c31b7,
                            'shareId': _0x736630
                        };
                        this['payCfg']['push'](_0x31f908);
                    }, _0x2aac48['prototype']['setPayCfg'] = function (_0x5baf5f, _0x44e820, _0x4f8cfb, _0x365078) {
                        _0x5baf5f >= this['payCfg']['length'] || (this['payCfg'][_0x5baf5f]['type'] = _0x44e820, this['payCfg'][_0x5baf5f]['adId'] = _0x4f8cfb, this['payCfg'][_0x5baf5f]['shareId'] = _0x365078);
                    }, _0x2aac48['prototype']['pay'] = function (_0x4d3294, _0x5a072e, _0x3c606c) {
                        var _0x490fdd = this['payCfg'][_0x4d3294];
                        switch (_0x490fdd['type']) {
                        case _0x46617d['EPay']['adUnit']:
                            _0x34d1d3['default']['getMgr']()['showVideoA' + 'd'](_0x4d3294, function (_0x45414c) {
                                _0x45414c['tag'] = 'ad', _0x3c606c(_0x45414c);
                            }['bind'](this));
                            break;
                        case _0x46617d['EPay']['adUnit_1']:
                            _0x34d1d3['default']['getMgr']()['showVideoA' + 'd'](_0x4d3294, function (_0x3ffa66) {
                                _0x3ffa66['result'] == _0x46617d['EResult']['Failure'] && (_0x3ffa66['result'] = _0x46617d['EResult']['succeed']), _0x3ffa66['tag'] = 'ad', _0x3c606c(_0x3ffa66);
                            }['bind'](this));
                            break;
                        case _0x46617d['EPay']['adToShare']:
                            _0x34d1d3['default']['getMgr']()['showVideoA' + 'd'](_0x4d3294, function (_0x345426) {
                                _0x345426['result'] == _0x46617d['EResult']['Failure'] ? (this['payCfg'][_0x4d3294]['type'] = _0x46617d['EPay']['share'], this['pay'](_0x4d3294, _0x5a072e, _0x3c606c)) : (_0x345426['tag'] = 'ad', _0x3c606c(_0x345426));
                            }['bind'](this));
                            break;
                        case _0x46617d['EPay']['share']:
                            _0x2b8fb6['default']['getMgr']()['shareApp'](_0x490fdd['shareId'], '', _0x5a072e, function (_0x261944) {
                                _0x261944['tag'] = 'share', _0x3c606c(_0x261944);
                            }['bind'](this));
                        }
                    }, _0x2aac48['prototype']['getPayType'] = function (_0x4e66e7) {
                        return this['payCfg'][_0x4e66e7]['type'];
                    }, _0x2aac48['mgr'] = null, _0x2aac48;
                }(_0x4355eb['default']);
            _0x40cb02['default'] = _0x30ba34;
        },
        {
            '../BEnum': 0x2,
            '../base/BMgr': 0x7,
            './BAdMgr': 0x11,
            './BShareMgr': 0x13
        }
    ],
    0x13: [
        function (_0xfead08, _0x4e5658, _0x315668) {
            'use strict';
            var _0x30abd7 = this && this['__extends'] || function () {
                var _0x1b62c2 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x596c52, _0x4be4c8) {
                    _0x596c52['__proto__'] = _0x4be4c8;
                } || function (_0x39a2c1, _0x3fce87) {
                    for (var _0x378792 in _0x3fce87)
                        _0x3fce87['hasOwnProp' + 'erty'](_0x378792) && (_0x39a2c1[_0x378792] = _0x3fce87[_0x378792]);
                };
                return function (_0x350a26, _0x28bdec) {
                    function _0x54396e() {
                        this['constructo' + 'r'] = _0x350a26;
                    }
                    _0x1b62c2(_0x350a26, _0x28bdec), _0x350a26['prototype'] = null === _0x28bdec ? Object['create'](_0x28bdec) : (_0x54396e['prototype'] = _0x28bdec['prototype'], new _0x54396e());
                };
            }();
            Object['defineProp' + 'erty'](_0x315668, '__esModule', { 'value': !0x0 });
            var _0x281776 = _0xfead08('../BGame'), _0x314063 = _0xfead08('../base/BM' + 'gr'), _0x47c0dc = _0xfead08('../base/BR' + 'esult'), _0x309a45 = _0xfead08('../utils/B' + 'Utlis'), _0x12bb18 = _0xfead08('../../util' + 's/MathUtil'), _0x57e26a = _0xfead08('../../CGam' + 'e/cljdSdk'), _0x100604 = _0xfead08('./BUrlMgr'), _0xc4d650 = _0xfead08('../../conf' + 'ig/CarData' + 'Config'), _0x36568a = _0xfead08('../BEnum'), _0x35db25 = function (_0x1e28a8) {
                    function _0x1967d4() {
                        var _0x46834a = null !== _0x1e28a8 && _0x1e28a8['apply'](this, arguments) || this;
                        return _0x46834a['shareModel'] = [], _0x46834a['sharePoint' + 'Array'] = [], _0x46834a;
                    }
                    return _0x30abd7(_0x1967d4, _0x1e28a8), _0x1967d4['getMgr'] = function () {
                        return _0x1967d4['mgr'] = _0x1967d4['mgr'] || new _0x1967d4();
                    }, _0x1967d4['prototype']['onLoad'] = function () {
                        _0x1967d4['mgr'] = this;
                    }, _0x1967d4['prototype']['start'] = function () {
                    }, _0x1967d4['prototype']['setShareMe' + 'nu'] = function (_0x1755a3) {
                        _0x281776['default']['getShare']()['setShareMe' + 'nu'](function () {
                            var _0x271bf1 = this['_getShareM' + 'odelId'](_0x1755a3), _0x4ea200 = this['shareModel'][_0x271bf1]['title'], _0x3d3cc6 = this['shareModel'][_0x271bf1]['imageUrl'], _0x35e293 = {
                                    'title': _0x4ea200,
                                    'imageUrl': _0x3d3cc6
                                };
                            return _0x35e293;
                        }['bind'](this));
                    }, _0x1967d4['prototype']['shareApp'] = function (_0x204bab, _0x587034, _0x5eb574, _0x1477ec) {
                        var _0x3a01a7 = _0x204bab, _0x3df212 = '', _0xe33942 = '', _0x300a45 = _0x587034;
                        _0x5eb574 || (_0x5eb574 = []);
                        var _0x1d3f0f = this['_getShareM' + 'odelId'](_0x3a01a7);
                        _0x3df212 = this['shareModel'][_0x1d3f0f]['title'], _0xe33942 = this['shareModel'][_0x1d3f0f]['imageUrl'], _0x281776['default']['getShare']()['shareAppMe' + 'ssage'](_0x3df212, _0x309a45['default']['getTextByS' + 'tr'](_0xe33942, _0x5eb574), _0x300a45, _0x1477ec);
                    }, _0x1967d4['prototype']['onShare'] = function (_0x18ef20) {
                        var _0x39f184 = new _0x47c0dc['default'](), _0xb2b224 = _0x12bb18['default']['randomInSe' + 'ction'](0x1, 0x2);
                        _0x57e26a['default']['isCanShare'] ? _0x281776['default']['getShare']()['shareAppMe' + 'ssage'](_0xc4d650['default']['config_sha' + 're'][_0xb2b224 - 0x1]['desc'], _0x100604['default']['getMgr']()['getUrl']('res') + ('/share/sha' + 're_') + _0xb2b224 + '.jpg', 'InvitateID' + '=' + _0x57e26a['default']['inviteCode'], _0x18ef20) : (_0x39f184['result'] = _0x36568a['EResult']['Failure'], _0x18ef20(_0x39f184));
                    }, _0x1967d4['prototype']['addShareMo' + 'del'] = function (_0x2c339f, _0x456cc6) {
                        var _0x4f0f3e = {
                            'title': _0x2c339f,
                            'imageUrl': _0x456cc6
                        };
                        return this['shareModel']['push'](_0x4f0f3e), this['shareModel']['length'] - 0x1;
                    }, _0x1967d4['prototype']['addSharePo' + 'int'] = function (_0x13cf25) {
                        var _0x1624ac = [];
                        return 'number' == typeof _0x13cf25 ? _0x1624ac['push'](_0x13cf25) : _0x1624ac = _0x13cf25, this['sharePoint' + 'Array']['push'](_0x1624ac), this['sharePoint' + 'Array']['length'] - 0x1;
                    }, _0x1967d4['prototype']['_getShareM' + 'odelId'] = function (_0x27a3c4) {
                        var _0x237676 = Math['floor'](Math['random']() * this['sharePoint' + 'Array'][_0x27a3c4]['length']), _0x10e9b7 = this['sharePoint' + 'Array'][_0x27a3c4][_0x237676];
                        return _0x10e9b7;
                    }, _0x1967d4['mgr'] = null, _0x1967d4;
                }(_0x314063['default']);
            _0x315668['default'] = _0x35db25;
        },
        {
            '../../CGame/cljdSdk': 0x19,
            '../../config/CarDataConfig': 0x3b,
            '../../utils/MathUtil': 0x5c,
            '../BEnum': 0x2,
            '../BGame': 0x3,
            '../base/BMgr': 0x7,
            '../base/BResult': 0xa,
            '../utils/BUtlis': 0x16,
            './BUrlMgr': 0x14
        }
    ],
    0x14: [
        function (_0x41aff1, _0x1269aa, _0x5b8fc8) {
            'use strict';
            var _0x488790 = this && this['__extends'] || function () {
                var _0x12c0d4 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x138441, _0x2b4d9d) {
                    _0x138441['__proto__'] = _0x2b4d9d;
                } || function (_0x40becb, _0x57cbfa) {
                    for (var _0x400732 in _0x57cbfa)
                        _0x57cbfa['hasOwnProp' + 'erty'](_0x400732) && (_0x40becb[_0x400732] = _0x57cbfa[_0x400732]);
                };
                return function (_0x251277, _0x11acd5) {
                    function _0x35eb7d() {
                        this['constructo' + 'r'] = _0x251277;
                    }
                    _0x12c0d4(_0x251277, _0x11acd5), _0x251277['prototype'] = null === _0x11acd5 ? Object['create'](_0x11acd5) : (_0x35eb7d['prototype'] = _0x11acd5['prototype'], new _0x35eb7d());
                };
            }();
            Object['defineProp' + 'erty'](_0x5b8fc8, '__esModule', { 'value': !0x0 });
            var _0x46656a = _0x41aff1('../base/BM' + 'gr'), _0xf9fe7e = function (_0x4f301a) {
                    function _0x16bbbd() {
                        var _0x2f3073 = null !== _0x4f301a && _0x4f301a['apply'](this, arguments) || this;
                        return _0x2f3073['defaultKey'] = '', _0x2f3073['urls'] = {}, _0x2f3073;
                    }
                    return _0x488790(_0x16bbbd, _0x4f301a), _0x16bbbd['getMgr'] = function () {
                        return _0x16bbbd['mgr'] = _0x16bbbd['mgr'] || new _0x16bbbd();
                    }, _0x16bbbd['prototype']['onLoad'] = function () {
                        _0x16bbbd['mgr'] = this;
                    }, _0x16bbbd['prototype']['start'] = function () {
                    }, _0x16bbbd['prototype']['getDefUrl'] = function () {
                        return this['getUrl'](this['defaultKey']);
                    }, _0x16bbbd['prototype']['getUrl'] = function (_0x53b862) {
                        return this['urls'][_0x53b862];
                    }, _0x16bbbd['prototype']['addUrl'] = function (_0x4fb249, _0x4ce535) {
                        '' == this['defaultKey'] && this['setDefault' + 'Key'](_0x4fb249), this['urls'][_0x4fb249] = _0x4ce535;
                    }, _0x16bbbd['prototype']['setDefault' + 'Key'] = function (_0x23814c) {
                        this['defaultKey'] = _0x23814c;
                    }, _0x16bbbd['mgr'] = null, _0x16bbbd;
                }(_0x46656a['default']);
            _0x5b8fc8['default'] = _0xf9fe7e;
        },
        { '../base/BMgr': 0x7 }
    ],
    0x15: [
        function (_0x50c91e, _0x3bead4, _0x4c21cf) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4c21cf, '__esModule', { 'value': !0x0 });
            var _0x556a9a = _0x50c91e('../BEnum'), _0x5d450a = function () {
                    function _0x1c9e3e() {
                    }
                    return _0x1c9e3e['getTimeStr'] = function (_0x8f64b2, _0x266d2a, _0x4370d1, _0x44ab39) {
                        void 0x0 === _0x266d2a && (_0x266d2a = _0x556a9a['ETimeshow']['simple']), void 0x0 === _0x4370d1 && (_0x4370d1 = _0x556a9a['ETimeunit']['sec']), void 0x0 === _0x44ab39 && (_0x44ab39 = [
                            ':',
                            ':',
                            ''
                        ]), 0x0 > _0x8f64b2 && (_0x8f64b2 = 0x0);
                        for (var _0x1d218f = [
                                    0x3e8,
                                    0x3c,
                                    0x3c,
                                    0x18
                                ], _0xa18dbb = _0x8f64b2, _0xf8674f = '', _0x825cd6 = 0x0; _0x4370d1 > _0x825cd6; _0x825cd6++)
                            _0xa18dbb /= _0x1d218f[_0x825cd6];
                        for (var _0x825cd6 = 0x0; _0x825cd6 < _0x44ab39['length']; _0x825cd6++) {
                            var _0x188912 = Math['floor'](_0xa18dbb);
                            _0x825cd6 < _0x44ab39['length'] - 0x1 && (_0x188912 = Math['floor'](_0xa18dbb) % _0x1d218f[_0x4370d1 + _0x825cd6]);
                            var _0x4511ad = '' + _0x188912;
                            if (_0x266d2a == _0x556a9a['ETimeshow']['full'] && (_0x4511ad = 0x0 == _0x188912 ? '00' : 0xa > _0x188912 ? '0' + _0x188912 : '' + _0x188912), _0xf8674f = _0x4511ad + _0x44ab39[_0x44ab39['length'] - _0x825cd6 - 0x1] + _0xf8674f, _0xa18dbb /= _0x1d218f[_0x4370d1 + _0x825cd6], _0x266d2a != _0x556a9a['ETimeshow']['full'] && 0x1 > _0xa18dbb)
                                break;
                        }
                        return _0xf8674f;
                    }, _0x1c9e3e['sameDate'] = function (_0x10d94e, _0x2cc6f1, _0x33f1a4) {
                        if (void 0x0 === _0x33f1a4 && (_0x33f1a4 = _0x556a9a['EDateunit']['day']), _0x33f1a4 == _0x556a9a['EDateunit']['msec'])
                            return _0x10d94e == _0x2cc6f1;
                        if (_0x33f1a4 == _0x556a9a['EDateunit']['sec'])
                            return Math['floor'](_0x10d94e / 0x64) == Math['floor'](_0x2cc6f1 / 0x64);
                        var _0xf09564 = new Date();
                        _0xf09564['setTime'](_0x10d94e);
                        var _0x17e430 = new Date();
                        _0x17e430['setTime'](_0x2cc6f1);
                        for (var _0x170954 = [
                                    _0xf09564['getFullYea' + 'r'](),
                                    _0xf09564['getMonth'](),
                                    _0xf09564['getDate']()
                                ], _0x3c8a7e = [
                                    _0x17e430['getFullYea' + 'r'](),
                                    _0x17e430['getMonth'](),
                                    _0x17e430['getDate']()
                                ], _0x304077 = 0x0; _0x304077 < _0x170954['length']; _0x304077++) {
                            if (_0x33f1a4 == _0x556a9a['EDateunit']['year'] - _0x304077)
                                return _0x170954[_0x304077] == _0x3c8a7e[_0x304077];
                            if (_0x170954[_0x304077] != _0x3c8a7e[_0x304077])
                                return !0x1;
                        }
                        return !0x0;
                    }, _0x1c9e3e['getDayByTi' + 'me'] = function (_0x5ef3b9) {
                        var _0x2e4595 = this['getHourByT' + 'ime'](_0x5ef3b9) / 0x18;
                        return _0x2e4595;
                    }, _0x1c9e3e['getHourByT' + 'ime'] = function (_0x13636d) {
                        var _0x1434e9 = this['getMinByTi' + 'me'](_0x13636d) / 0x3c;
                        return _0x1434e9;
                    }, _0x1c9e3e['getMinByTi' + 'me'] = function (_0x237776) {
                        var _0xd61057 = this['getSecondB' + 'yTime'](_0x237776) / 0x3c;
                        return _0xd61057;
                    }, _0x1c9e3e['getSecondB' + 'yTime'] = function (_0x36f273) {
                        var _0x26b2c8 = _0x36f273 / 0x3e8;
                        return _0x26b2c8;
                    }, _0x1c9e3e['getNowDay'] = function () {
                        var _0x39a9f6 = new Date(), _0x5971e0 = _0x39a9f6['getFullYea' + 'r'](), _0x109652 = _0x39a9f6['getMonth'](), _0x56d5ff = _0x39a9f6['getDate']();
                        return _0x5971e0 + '-' + _0x109652 + '-' + _0x56d5ff;
                    }, _0x1c9e3e['getTime3'] = function (_0x174f94) {
                        var _0x589ee0 = {
                            'totalSec': 0x0,
                            'year': '00',
                            'mon': '00',
                            'day': '00',
                            'hour': '00',
                            'min': '00',
                            'sec': '00'
                        };
                        _0x174f94 = 0x0 >= _0x174f94 ? 0x0 : _0x174f94, _0x589ee0['totalSec'] = Math['ceil'](_0x174f94 / 0x3e8);
                        var _0x43db10 = new Date(_0x174f94);
                        return _0x589ee0['year'] = '' + _0x43db10['getFullYea' + 'r'](), _0x589ee0['mon'] = ('0' + (_0x43db10['getMonth']() + 0x1))['slice'](-0x2), _0x589ee0['day'] = ('0' + _0x43db10['getDate']())['slice'](-0x2), _0x589ee0['hour'] = ('0' + _0x43db10['getHours']())['slice'](-0x2), _0x589ee0['min'] = ('0' + _0x43db10['getMinutes']())['slice'](-0x2), _0x589ee0['sec'] = ('0' + _0x43db10['getSeconds']())['slice'](-0x2), _0x589ee0;
                    }, _0x1c9e3e;
                }();
            _0x4c21cf['default'] = _0x5d450a;
        },
        { '../BEnum': 0x2 }
    ],
    0x16: [
        function (_0x5178d6, _0x599c5d, _0x48cff0) {
            'use strict';
            Object['defineProp' + 'erty'](_0x48cff0, '__esModule', { 'value': !0x0 });
            var _0x59d677 = function () {
                function _0xb83fd1() {
                }
                return _0xb83fd1['getGlobalI' + 'D'] = function () {
                    var _0x1cebd2 = Date['now']();
                    return _0xb83fd1['globaltime'] == _0x1cebd2 ? this['globalinde' + 'x']++ : this['globalinde' + 'x'] = 0x0, _0xb83fd1['globaltime'] = _0x1cebd2, _0x1cebd2 + '_' + _0xb83fd1['globalinde' + 'x'];
                }, _0xb83fd1['random'] = function (_0x4a0d07) {
                    var _0x30c2a9 = Math['random']() * _0x4a0d07;
                    return _0x30c2a9;
                }, _0xb83fd1['randomByWe' + 'ight'] = function (_0x4c53d1) {
                    for (var _0xcea0c7 = 0x0, _0x161f7b = 0x0; _0x161f7b < _0x4c53d1['length']; _0x161f7b++)
                        _0xcea0c7 += _0x4c53d1[_0x161f7b];
                    var _0x1f7910 = _0xb83fd1['random'](_0xcea0c7);
                    _0xcea0c7 = 0x0;
                    for (var _0x161f7b = 0x0; _0x161f7b < _0x4c53d1['length']; _0x161f7b++)
                        if (_0xcea0c7 += _0x4c53d1[_0x161f7b], _0xcea0c7 >= _0x1f7910)
                            return _0x161f7b;
                    return 0x0;
                }, _0xb83fd1['getUuid'] = function () {
                    return ('xxxxxxxx-x' + 'xxx-4xxx-y' + 'xxx-xxxxxx' + 'xxxxxx')['replace'](/[xy]/g, function (_0x3ba9fb) {
                        var _0x26f227 = 0x0 | _0xb83fd1['random'](0x10), _0x3592c9 = 'x' == _0x3ba9fb ? _0x26f227 : 0x3 & _0x26f227 | 0x8;
                        return _0x3592c9['toString'](0x10);
                    });
                }, _0xb83fd1['getTextByS' + 'tr'] = function (_0x1a8d07) {
                    for (var _0x42f33c = [], _0x267716 = 0x1; _0x267716 < arguments['length']; _0x267716++)
                        _0x42f33c[_0x267716 - 0x1] = arguments[_0x267716];
                    var _0xb0b90e = _0x1a8d07;
                    if (!_0x42f33c || _0x42f33c['length'] <= 0x0)
                        return _0xb0b90e;
                    var _0x288ac6 = _0xb0b90e['split']('%s');
                    if (_0x288ac6['length'] <= 0x1)
                        return _0xb0b90e;
                    _0xb0b90e = '';
                    for (var _0x34ae54 = 0x0; _0x34ae54 < _0x42f33c['length'] && (_0xb0b90e += _0x288ac6[_0x34ae54] + _0x42f33c[_0x34ae54], !(_0x288ac6['length'] - 0x1 <= _0x34ae54)); _0x34ae54++);
                    for (var _0x34ae54 = _0x42f33c['length']; _0x34ae54 < _0x288ac6['length']; _0x34ae54++)
                        _0xb0b90e += _0x288ac6[_0x34ae54];
                    return _0xb0b90e;
                }, _0xb83fd1['getRandIDs'] = function (_0x39fc64, _0x436b19) {
                    if (void 0x0 === _0x436b19 && (_0x436b19 = 0x1), 0x1 >= _0x436b19)
                        return Math['floor'](_0xb83fd1['random'](_0x39fc64));
                    for (var _0x1080b5 = [], _0x543af0 = [], _0x188bb4 = 0x0; _0x39fc64 > _0x188bb4; _0x188bb4++)
                        _0x1080b5['push'](_0x188bb4);
                    for (var _0x188bb4 = 0x0; _0x436b19 > _0x188bb4; _0x188bb4++) {
                        var _0x13ae79 = Math['floor'](_0xb83fd1['random'](_0x1080b5['length']));
                        if (_0x543af0['push'](_0x1080b5[_0x13ae79]), _0x1080b5['splice'](_0x13ae79, 0x1), _0x1080b5['length'] <= 0x0)
                            break;
                    }
                    return _0x543af0;
                }, _0xb83fd1['beelinePoi' + 'ntByAngle'] = function (_0x126c1b, _0x219680, _0xaeebbe, _0xf7d7b0) {
                    var _0xa2d60f = new Laya['Vector2'](), _0x159899 = 0x0;
                    return 0x5a >= _0xaeebbe ? (_0x159899 = _0xaeebbe * (Math['PI'] / 0xb4), _0xa2d60f['x'] = _0x126c1b + Math['sin'](_0x159899) * _0xf7d7b0, _0x159899 = (0x5a - _0xaeebbe) * (Math['PI'] / 0xb4), _0xa2d60f['y'] = _0x219680 + Math['sin'](_0x159899) * _0xf7d7b0) : 0xb4 >= _0xaeebbe ? (_0x159899 = (0xb4 - _0xaeebbe) * (Math['PI'] / 0xb4), _0xa2d60f['x'] = _0x126c1b + Math['sin'](_0x159899) * _0xf7d7b0, _0x159899 = (_0xaeebbe - 0x5a) * (Math['PI'] / 0xb4), _0xa2d60f['y'] = _0x219680 - Math['sin'](_0x159899) * _0xf7d7b0) : 0x10e >= _0xaeebbe ? (_0x159899 = (_0xaeebbe - 0xb4) * (Math['PI'] / 0xb4), _0xa2d60f['x'] = _0x126c1b - Math['sin'](_0x159899) * _0xf7d7b0, _0x159899 = (0x10e - _0xaeebbe) * (Math['PI'] / 0xb4), _0xa2d60f['y'] = _0x219680 - Math['sin'](_0x159899) * _0xf7d7b0) : (_0x159899 = Math['max'](0x0, 0x168 - _0xaeebbe) * (Math['PI'] / 0xb4), _0xa2d60f['x'] = _0x126c1b - Math['sin'](_0x159899) * _0xf7d7b0, _0x159899 = (_0xaeebbe - 0x10e) * (Math['PI'] / 0xb4), _0xa2d60f['y'] = _0x219680 + Math['sin'](_0x159899) * _0xf7d7b0), _0xa2d60f;
                }, _0xb83fd1['globalinde' + 'x'] = 0x0, _0xb83fd1['globaltime'] = 0x0, _0xb83fd1;
            }();
            _0x48cff0['default'] = _0x59d677;
        },
        {}
    ],
    0x17: [
        function (_0x575d70, _0x5f77a9, _0xd7b86b) {
            'use strict';
            Object['defineProp' + 'erty'](_0xd7b86b, '__esModule', { 'value': !0x0 });
            var _0x181ce6 = _0x575d70('../../BGam' + 'e/base/BRe' + 'sult'), _0xf874ac = _0x575d70('../../BGam' + 'e/BEnum'), _0x365565 = _0x575d70('../../BGam' + 'e/BGame'), _0x183084 = function () {
                    function _0xb5b321() {
                        this['videoAds'] = {}, this['videocallb' + 'ack'] = null, this['bannerAds'] = {}, this['gridAds'] = {};
                    }
                    return _0xb5b321['prototype']['init'] = function () {
                    }, _0xb5b321['prototype']['showVideoA' + 'd'] = function (_0x3aeb31, _0xbde43b) {
                        var _0x1680db = new _0x181ce6['default'](_0xf874ac['EResult']['succeed']);
                        _0xbde43b && _0xbde43b(_0x1680db);
                    }, _0xb5b321['prototype']['createBann' + 'er'] = function (_0x25b9af, _0x362cbd, _0x1f9c69) {
                        var _0x1408a6 = new _0x181ce6['default'](_0xf874ac['EResult']['succeed']);
                        _0x1f9c69 && _0x1f9c69(_0x1408a6);
                    }, _0xb5b321['prototype']['getBanner'] = function (_0x3a902d) {
                        return this['bannerAds'][_0x3a902d]['BAd'];
                    }, _0xb5b321['prototype']['showBanner'] = function (_0x54b1e1) {
                        var _0x8b4a88 = this['bannerAds'][_0x54b1e1]['Ad'];
                        _0x8b4a88['show']();
                    }, _0xb5b321['prototype']['hideBanner'] = function (_0x3a621e) {
                        var _0x151196 = this['bannerAds'][_0x3a621e]['Ad'];
                        _0x151196['hide']();
                    }, _0xb5b321['prototype']['destroyBan' + 'ner'] = function (_0x432db5) {
                        var _0x59bbe0 = this['bannerAds'][_0x432db5]['Ad'];
                        _0x59bbe0['destroy'](), delete this['bannerAds'][_0x432db5];
                    }, _0xb5b321['prototype']['setBannerW' + 'idth'] = function (_0x24f7fe, _0x1566d7) {
                        var _0x3ae9f8 = this['bannerAds'][_0x24f7fe]['Ad'];
                        _0x3ae9f8['style']['width'] = this['_transitio' + 'nX'](_0x1566d7);
                    }, _0xb5b321['prototype']['setBannerP' + 'os'] = function (_0x28e3c0, _0x22a96a) {
                        var _0x1d520f = this['bannerAds'][_0x28e3c0]['Ad'];
                        _0x1d520f['style']['left'] = this['_transitio' + 'nX'](_0x22a96a['x']), _0x1d520f['style']['top'] = this['_transitio' + 'nY'](_0x22a96a['y']);
                    }, _0xb5b321['prototype']['createGrid' + 'Ad'] = function (_0xc15c28, _0x36764a, _0x282d5a, _0x503cac, _0x57ee7b) {
                        var _0x2e9087 = new _0x181ce6['default'](_0xf874ac['EResult']['succeed']);
                        _0x57ee7b && _0x57ee7b(_0x2e9087);
                    }, _0xb5b321['prototype']['getGridAd'] = function (_0x1e8d32) {
                        return this['gridAds'][_0x1e8d32]['BAd'];
                    }, _0xb5b321['prototype']['showGridAd'] = function (_0xe4fc99) {
                        var _0x11477f = this['gridAds'][_0xe4fc99]['Ad'];
                        _0x11477f['show']();
                    }, _0xb5b321['prototype']['hideGridAd'] = function (_0x3e22c7) {
                        var _0x16141c = this['gridAds'][_0x3e22c7]['Ad'];
                        _0x16141c['hide']();
                    }, _0xb5b321['prototype']['destroyGri' + 'dAd'] = function (_0x2805a0) {
                        var _0x58a5aa = this['gridAds'][_0x2805a0]['Ad'];
                        _0x58a5aa['destroy'](), delete this['gridAds'][_0x2805a0];
                    }, _0xb5b321['prototype']['setGridAdP' + 'os'] = function (_0x43d4ef, _0x359846) {
                        var _0x3aa2b8 = this['gridAds'][_0x43d4ef]['Ad'];
                        _0x3aa2b8['style']['left'] = this['_transitio' + 'nX'](_0x359846['x']), _0x3aa2b8['style']['top'] = this['_transitio' + 'nY'](_0x359846['y']);
                    }, _0xb5b321['prototype']['setGridAdW' + 'idth'] = function (_0x282ad2, _0x3c8eb9) {
                        var _0x52d450 = this['gridAds'][_0x282ad2]['Ad'];
                        _0x52d450['style']['width'] = this['_transitio' + 'nX'](_0x3c8eb9);
                    }, _0xb5b321['prototype']['_getSysInf' + 'o'] = function () {
                        return wx['getSystemI' + 'nfoSync']();
                    }, _0xb5b321['prototype']['_getGameSc' + 'aleW'] = function () {
                        var _0x1fc07a = this['_getSysInf' + 'o']();
                        return _0x1fc07a['windowWidt' + 'h'] / _0x365565['default']['getWidth']();
                    }, _0xb5b321['prototype']['_getGameSc' + 'aleH'] = function () {
                        var _0x51dd90 = this['_getSysInf' + 'o']();
                        return _0x51dd90['windowHeig' + 'ht'] / _0x365565['default']['getHeight']();
                    }, _0xb5b321['prototype']['_transitio' + 'nX'] = function (_0x715f06) {
                        return _0x715f06 * this['_getGameSc' + 'aleW']();
                    }, _0xb5b321['prototype']['_transitio' + 'nY'] = function (_0x22b824) {
                        return _0x22b824 * this['_getGameSc' + 'aleH']();
                    }, _0xb5b321;
                }();
            _0xd7b86b['default'] = _0x183084;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/BGame': 0x3,
            '../../BGame/base/BResult': 0xa
        }
    ],
    0x18: [
        function (_0x367c98, _0x4f8746, _0x36582e) {
            'use strict';
            Object['defineProp' + 'erty'](_0x36582e, '__esModule', { 'value': !0x0 });
            var _0x2f0605 = _0x367c98('../../BGam' + 'e/base/BRe' + 'sult'), _0x24b724 = _0x367c98('../../BGam' + 'e/BEnum'), _0xb6e054 = _0x367c98('../../BGam' + 'e/utils/BU' + 'tlis'), _0x1d0ad9 = _0x367c98('../../BGam' + 'e/base/BBa' + 'nner'), _0x55edd6 = _0x367c98('../../BGam' + 'e/BGame'), _0xde5b92 = _0x367c98('../../BGam' + 'e/base/BGr' + 'idAd'), _0x1dbe59 = function () {
                    function _0x63f7fd() {
                        this['intAds'] = {}, this['intCallbac' + 'k'] = null, this['videoAds'] = {}, this['videocallb' + 'ack'] = null, this['bannerAds'] = {}, this['gridAds'] = {};
                    }
                    return _0x63f7fd['prototype']['init'] = function () {
                    }, _0x63f7fd['prototype']['showVideoA' + 'd'] = function (_0x2e7c59, _0x52415e) {
                        this['videocallb' + 'ack'] = _0x52415e;
                        var _0x394144 = function (_0x3c3093) {
                                this['videocallb' + 'ack'] && this['videocallb' + 'ack'](_0x3c3093), this['videocallb' + 'ack'] = null;
                            }['bind'](this), _0x51e27c = this['videoAds'][_0x2e7c59];
                        if (!_0x51e27c) {
                            if (!wx['createRewa' + 'rdedVideoA' + 'd']) {
                                var _0x3ed39e = new _0x2f0605['default'](_0x24b724['EResult']['Failure']);
                                return _0x3ed39e['errCode'] = _0x24b724['EAdErrCode']['create'], _0x3ed39e['err'] = 'create\x20err', void _0x394144(_0x3ed39e);
                            }
                            _0x51e27c = wx['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x2e7c59 }), this['videoAds'][_0x2e7c59] = _0x51e27c, _0x51e27c['onClose'](function (_0x4dda82) {
                                if (_0x4dda82 && _0x4dda82['isEnded'] || void 0x0 === _0x4dda82 || 'undefined' === _0x4dda82) {
                                    console['log']('看完广告发放奖励');
                                    var _0x464224 = new _0x2f0605['default'](_0x24b724['EResult']['succeed']);
                                    _0x394144(_0x464224);
                                } else {
                                    var _0x464224 = new _0x2f0605['default'](_0x24b724['EResult']['cancel']);
                                    _0x394144(_0x464224);
                                }
                            }), _0x51e27c['onError'](function (_0x2eeb5e) {
                                console['log']('广告读取错误', _0x2eeb5e);
                                var _0x1a1491 = new _0x2f0605['default'](_0x24b724['EResult']['Failure']);
                                _0x1a1491['errCode'] = _0x24b724['EAdErrCode']['noAd'], _0x1a1491['err'] = 'no\x20videoAd', _0x394144(_0x1a1491);
                            });
                        }
                        _0x51e27c['offLoad'](), _0x51e27c['load']()['then'](function () {
                            _0x51e27c['show']();
                        });
                    }, _0x63f7fd['prototype']['createBann' + 'er'] = function (_0x2cb07c, _0x59a43e, _0x1b50d7) {
                    }, _0x63f7fd['prototype']['getBanner'] = function (_0x1e1b84) {
                        return this['bannerAds'][_0x1e1b84]['BAd'];
                    }, _0x63f7fd['prototype']['showBanner'] = function (_0x175e67) {
                        var _0x136317 = this['bannerAds'][_0x175e67]['Ad'];
                        _0x136317['show']();
                    }, _0x63f7fd['prototype']['hideBanner'] = function (_0x51fba0) {
                        var _0x4dd312 = this['bannerAds'][_0x51fba0]['Ad'];
                        _0x4dd312['hide']();
                    }, _0x63f7fd['prototype']['destroyBan' + 'ner'] = function (_0x33d528) {
                        var _0x2b1858 = this['bannerAds'][_0x33d528]['Ad'];
                        _0x2b1858['destroy'](), delete this['bannerAds'][_0x33d528];
                    }, _0x63f7fd['prototype']['setBannerW' + 'idth'] = function (_0x14f75c, _0x6fe27) {
                        var _0x2f464e = this['bannerAds'][_0x14f75c]['Ad'];
                        _0x2f464e['style']['width'] = this['_transitio' + 'nX'](_0x6fe27);
                    }, _0x63f7fd['prototype']['setBannerP' + 'os'] = function (_0x37a8a1, _0x2e7707) {
                        var _0x493b83 = this['bannerAds'][_0x37a8a1]['Ad'];
                        _0x493b83['style']['left'] = this['_transitio' + 'nX'](_0x2e7707['x']), _0x493b83['style']['top'] = this['_transitio' + 'nY'](_0x2e7707['y']);
                    }, _0x63f7fd['prototype']['createGrid' + 'Ad'] = function (_0x74f420, _0x5b879b, _0x43fd2d, _0x238c92, _0x4802e5) {
                        var _0x1dc38 = this, _0x15e34f = wx['createGrid' + 'Ad']({
                                'adUnitId': _0x74f420,
                                'adTheme': _0x5b879b,
                                'gridCount': _0x43fd2d,
                                'adIntervals': _0x238c92,
                                'style': {
                                    'left': 0x0,
                                    'top': 0x0,
                                    'width': 0x12c,
                                    'opacity': 0.8
                                }
                            }), _0x29d161 = _0xb6e054['default']['getGlobalI' + 'D'](), _0x1fb20e = new _0xde5b92['default'](_0x29d161);
                        this['gridAds'][_0x29d161] = {
                            'Ad': _0x15e34f,
                            'BAd': _0x1fb20e
                        }, _0x15e34f['onLoad'](function () {
                            var _0x494af1 = new _0x2f0605['default'](_0x24b724['EResult']['succeed']), _0x21d707 = _0x1dc38['gridAds'][_0x29d161]['BAd'];
                            _0x494af1['data'] = _0x21d707, _0x4802e5(_0x494af1);
                        }), _0x15e34f['onError'](function (_0x369255) {
                            var _0x3eea20 = new _0x2f0605['default'](_0x24b724['EResult']['Failure']);
                            _0x3eea20['errCode'] = _0x24b724['EAdErrCode']['noAd'], _0x3eea20['err'] = 'no\x20videoAd', _0x4802e5(_0x3eea20);
                        }), _0x15e34f['onResize'](function (_0x39e393) {
                            var _0x2094d3 = _0x1dc38['gridAds'][_0x29d161]['BAd'], _0x312348 = _0x39e393['width'], _0x4e2bed = _0x39e393['height'];
                            console['log']('onResize', _0x39e393, _0x312348, _0x4e2bed);
                            var _0x114809 = new Laya['Size'](_0x312348 / _0x1dc38['_getGameSc' + 'aleW'](), _0x4e2bed / _0x1dc38['_getGameSc' + 'aleH']());
                            _0x2094d3['_onResize'](_0x114809);
                        });
                    }, _0x63f7fd['prototype']['getGridAd'] = function (_0x8b3935) {
                        return this['gridAds'][_0x8b3935]['BAd'];
                    }, _0x63f7fd['prototype']['showGridAd'] = function (_0x2e85a9) {
                        var _0x349f5a = this['gridAds'][_0x2e85a9]['Ad'];
                        _0x349f5a['show']();
                    }, _0x63f7fd['prototype']['hideGridAd'] = function (_0x4b9541) {
                        var _0xe0ffcb = this['gridAds'][_0x4b9541]['Ad'];
                        _0xe0ffcb['hide']();
                    }, _0x63f7fd['prototype']['destroyGri' + 'dAd'] = function (_0x34f37b) {
                        var _0x3e4549 = this['gridAds'][_0x34f37b]['Ad'];
                        _0x3e4549['destroy'](), delete this['gridAds'][_0x34f37b];
                    }, _0x63f7fd['prototype']['setGridAdP' + 'os'] = function (_0x289a12, _0x4f43a3) {
                        var _0x454945 = this['gridAds'][_0x289a12]['Ad'];
                        _0x454945['style']['left'] = this['_transitio' + 'nX'](_0x4f43a3['x']), _0x454945['style']['top'] = this['_transitio' + 'nY'](_0x4f43a3['y']);
                    }, _0x63f7fd['prototype']['setGridAdW' + 'idth'] = function (_0x52568f, _0x14b553) {
                        var _0x10a214 = this['gridAds'][_0x52568f]['Ad'];
                        _0x10a214['style']['width'] = this['_transitio' + 'nX'](_0x14b553);
                    }, _0x63f7fd['prototype']['_getSysInf' + 'o'] = function () {
                        return wx['getSystemI' + 'nfoSync']();
                    }, _0x63f7fd['prototype']['_getGameSc' + 'aleW'] = function () {
                        var _0x4001a2 = this['_getSysInf' + 'o']();
                        return _0x4001a2['windowWidt' + 'h'] / _0x55edd6['default']['getWidth']();
                    }, _0x63f7fd['prototype']['_getGameSc' + 'aleH'] = function () {
                        var _0x26507a = this['_getSysInf' + 'o']();
                        return _0x26507a['windowHeig' + 'ht'] / _0x55edd6['default']['getHeight']();
                    }, _0x63f7fd['prototype']['_transitio' + 'nX'] = function (_0x55624f) {
                        return _0x55624f * this['_getGameSc' + 'aleW']();
                    }, _0x63f7fd['prototype']['_transitio' + 'nY'] = function (_0x3cccc9) {
                        return _0x3cccc9 * this['_getGameSc' + 'aleH']();
                    }, _0x63f7fd;
                }();
            _0x36582e['default'] = _0x1dbe59;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/BGame': 0x3,
            '../../BGame/base/BBanner': 0x5,
            '../../BGame/base/BGridAd': 0x6,
            '../../BGame/base/BResult': 0xa,
            '../../BGame/utils/BUtlis': 0x16
        }
    ],
    0x19: [
        function (_0x46153f, _0x51f040, _0xe04fb8) {
            'use strict';
            Object['defineProp' + 'erty'](_0xe04fb8, '__esModule', { 'value': !0x0 });
            var _0x2d4293, _0x14333b = _0x46153f('../BGame/b' + 'ase/BResul' + 't'), _0x7b2291 = _0x46153f('../BGame/B' + 'Enum'), _0x510796 = _0x46153f('../BGame/l' + 'ib/BHttpRe' + 'quest');
            !function (_0x22c217) {
                _0x22c217['Login'] = '/game/logi' + 'n', _0x22c217['GameData'] = '/game/data', _0x22c217['KeFuReward'] = '/game/kf', _0x22c217['setUserInf' + 'o'] = '/game/user' + 'info', _0x22c217['uploadScor' + 'e'] = '/game/leve' + 'l1', _0x22c217['getRanks'] = '/game/rank' + '1';
            }(_0x2d4293 = _0xe04fb8['EHttpConst'] || (_0xe04fb8['EHttpConst'] = {}));
            var _0x189133 = function () {
                function _0x24883e() {
                }
                return _0x24883e['login'] = function (_0x2bf08b, _0x519e87, _0x4818ea, _0x39d029, _0x3f02f5, _0x25ed8b, _0x32f291, _0xdb4f5a, _0x4c158c) {
                    _0x24883e['serverUrl'] = _0x2bf08b, _0x24883e['logindata']['ut'] = _0x519e87, _0x24883e['logindata']['appid'] = _0x4818ea, _0x24883e['logindata']['token'] = _0x39d029 ? _0x39d029 : '', _0x24883e['logindata']['inviteCode'] = _0x25ed8b ? _0x25ed8b : '', _0x24883e['logindata']['anonymousC' + 'ode'] = _0x3f02f5 ? _0x3f02f5 : '', _0x24883e['logindata']['version'] = _0x32f291;
                    var _0x3f14bb = this, _0x4d0fb9 = _0x24883e['serverUrl'] + _0x2d4293['Login'];
                    _0x24883e['HttpGet'](_0x4d0fb9, _0x24883e['logindata'], function (_0x142e4c) {
                        _0x142e4c['result'] == _0x7b2291['EResult']['succeed'] ? (_0x3f14bb['gameInfo'] = _0x142e4c['data']['data'], _0x3f14bb['auth'] = _0x142e4c['data']['auth'], _0x3f14bb['uid'] = _0x142e4c['data']['uid'], _0x3f14bb['secret'] = _0x142e4c['data']['secret'], _0x3f14bb['inviteCode'] = _0x142e4c['data']['inviteCode'], _0x3f14bb['isCanShare'] = _0x142e4c['data']['share'], _0x3f14bb['isCanDemo'] = _0x142e4c['data']['demo'], _0x3f14bb['isCanExit'] = _0x142e4c['data']['exit'], _0x3f14bb['isCanVideo'] = _0x142e4c['data']['video'], _0x3f14bb['isNewPlaye' + 'r'] = _0x142e4c['data']['new'], _0x3f14bb['kefuReward'] = _0x142e4c['data']['kefuReward'], _0x3f14bb['isCanBxMis' + 'take'] = _0x142e4c['data']['bxMistake'], _0x3f14bb['blogin'] = !0x0, _0x4c158c && _0x4c158c(_0x142e4c)) : 0x0 != _0xdb4f5a ? (_0xdb4f5a > 0x0 && _0xdb4f5a--, _0x24883e['login'](_0x2bf08b, _0x519e87, _0x4818ea, _0x39d029, _0x3f02f5, _0x25ed8b, _0x32f291, _0xdb4f5a, _0x4c158c)) : _0x4c158c && _0x4c158c(_0x142e4c);
                    }['bind'](this));
                }, _0x24883e['isLogin'] = function () {
                    return _0x24883e['blogin'];
                }, _0x24883e['isAuth'] = function () {
                    return _0x24883e['isLogin'] && _0x24883e['auth'] ? !0x0 : !0x1;
                }, _0x24883e['tryLogin'] = function (_0x2e89eb, _0x1be7f1, _0x183469) {
                    _0x24883e['login'](_0x24883e['serverUrl'], _0x24883e['logindata']['ut'], _0x24883e['logindata']['appid'], _0x2e89eb, _0x24883e['logindata']['anonymousC' + 'ode'], _0x24883e['logindata']['inviteCode'], _0x24883e['logindata']['version'], _0x1be7f1, _0x183469);
                }, _0x24883e['setData'] = function (_0x4ec6fc, _0x558668) {
                    var _0x24d9a4 = this['serverUrl'] + _0x2d4293['GameData'], _0x3c1010 = { 'data': _0x4ec6fc };
                }, _0x24883e['getData'] = function () {
                    return this['gameInfo'];
                }, _0x24883e['serviceAwa' + 'rd'] = function (_0x431f11) {
                    var _0xb5f97a = this['serverUrl'] + _0x2d4293['KeFuReward'], _0x36ef58 = {};
                    _0x24883e['HttpPost'](_0xb5f97a, _0x36ef58, function (_0x3be8dc) {
                        _0x3be8dc['result'] == _0x7b2291['EResult']['succeed'] ? 0x1 == _0x3be8dc['data']['kefuReward'] ? _0x431f11 && _0x431f11(new _0x14333b['default'](_0x7b2291['EResult']['succeed'])) : _0x431f11 && _0x431f11(new _0x14333b['default'](_0x7b2291['EResult']['cancel'])) : _0x431f11 && _0x431f11(new _0x14333b['default'](_0x7b2291['EResult']['Failure']));
                    }['bind'](this));
                }, _0x24883e['setUserInf' + 'o'] = function (_0x5f374d, _0x3a1a4f, _0x226c25) {
                    var _0x136214 = _0x24883e['serverUrl'] + _0x2d4293['setUserInf' + 'o'], _0x7ad90d = {
                            'encryptedData': _0x5f374d,
                            'iv': _0x3a1a4f
                        };
                    _0x24883e['HttpPost'](_0x136214, _0x7ad90d, function (_0xde73a7) {
                        _0xde73a7['result'] == _0x7b2291['EResult']['succeed'] && (this['auth'] = !0x0), _0x226c25 && _0x226c25(_0xde73a7);
                    }['bind'](this));
                }, _0x24883e['uploadScor' + 'e'] = function (_0x2338c5, _0x260825, _0x21c619) {
                    var _0x3a114c = _0x24883e['serverUrl'] + _0x2d4293['uploadScor' + 'e'], _0x465700 = {
                            'level': _0x2338c5,
                            'star': _0x260825
                        };
                }, _0x24883e['getRanks'] = function (_0x12d4be) {
                    var _0x510d4e = _0x24883e['serverUrl'] + _0x2d4293['getRanks'], _0xdf9f61 = {};
                    _0x24883e['HttpPost'](_0x510d4e, _0xdf9f61, function (_0x35ee51) {
                        _0x12d4be && _0x12d4be(_0x35ee51);
                    }['bind'](this));
                }, _0x24883e['HttpGet'] = function (_0x245ea0, _0x122971, _0x1c54c9) {
                    _0x510796['default']['get'](_0x245ea0, _0x122971, function (_0x1d29f7) {
                        _0x1c54c9 && _0x1c54c9(_0x1d29f7);
                    }['bind'](this));
                }, _0x24883e['HttpPost'] = function (_0x436bb2, _0x4eb51f, _0x33c9c6) {
                    _0x4eb51f['uid'] = _0x24883e['uid'], _0x4eb51f['secret'] = _0x24883e['secret'], _0x510796['default']['post'](_0x436bb2, _0x4eb51f, function (_0x3227dc) {
                        _0x33c9c6 && _0x33c9c6(_0x3227dc);
                    }['bind'](this));
                }, _0x24883e['gameInfo'] = {}, _0x24883e['blogin'] = !0x1, _0x24883e['auth'] = !0x1, _0x24883e['uid'] = '', _0x24883e['secret'] = '', _0x24883e['inviteCode'] = '', _0x24883e['kefuReward'] = !0x1, _0x24883e['isNewPlaye' + 'r'] = !0x1, _0x24883e['isCanShare'] = !0x1, _0x24883e['isCanDemo'] = !0x1, _0x24883e['isCanExit'] = !0x1, _0x24883e['isCanVideo'] = !0x1, _0x24883e['isCanBxMis' + 'take'] = !0x1, _0x24883e['serverUrl'] = '', _0x24883e['logindata'] = {}, _0x24883e;
            }();
            _0xe04fb8['default'] = _0x189133;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/base/BResult': 0xa,
            '../BGame/lib/BHttpRequest': 0xe
        }
    ],
    0x1a: [
        function (_0x2659a0, _0x29c21d, _0x5ab7e6) {
            'use strict';
            var _0x19bb60 = this && this['__extends'] || function () {
                var _0x38cde9 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x166418, _0x3e40e4) {
                    _0x166418['__proto__'] = _0x3e40e4;
                } || function (_0x54a7a0, _0x5f36df) {
                    for (var _0x3d1c89 in _0x5f36df)
                        _0x5f36df['hasOwnProp' + 'erty'](_0x3d1c89) && (_0x54a7a0[_0x3d1c89] = _0x5f36df[_0x3d1c89]);
                };
                return function (_0x4fd576, _0x46c1c9) {
                    function _0x25bafd() {
                        this['constructo' + 'r'] = _0x4fd576;
                    }
                    _0x38cde9(_0x4fd576, _0x46c1c9), _0x4fd576['prototype'] = null === _0x46c1c9 ? Object['create'](_0x46c1c9) : (_0x25bafd['prototype'] = _0x46c1c9['prototype'], new _0x25bafd());
                };
            }();
            Object['defineProp' + 'erty'](_0x5ab7e6, '__esModule', { 'value': !0x0 });
            var _0x19fa53 = _0x2659a0('../../BGam' + 'e/base/BPl' + 'atform'), _0x326d69 = _0x2659a0('../../BGam' + 'e/BEnum'), _0x27b2d0 = _0x2659a0('../../BGam' + 'e/mgr/BAdM' + 'gr'), _0x4a441e = _0x2659a0('../../BGam' + 'e/mgr/BUrl' + 'Mgr'), _0x451af8 = _0x2659a0('../userInf' + 'o/userInfo' + '_dev'), _0x36b8b6 = _0x2659a0('../storage' + '/storage_c' + 'ljd'), _0x4506f6 = _0x2659a0('../../conf' + 'ig/Config'), _0x3ae684 = _0x2659a0('../share/s' + 'hare_wab'), _0x54eeef = _0x2659a0('../adUnits' + '/adUnits_d' + 'ev'), _0x47bf94 = function (_0x5ac65f) {
                    function _0xda1881() {
                        var _0x4430f7 = null !== _0x5ac65f && _0x5ac65f['apply'](this, arguments) || this;
                        return _0x4430f7['isInit'] = !0x1, _0x4430f7['isAccredit'] = !0x1, _0x4430f7['userInfo'] = null, _0x4430f7;
                    }
                    return _0x19bb60(_0xda1881, _0x5ac65f), _0xda1881['prototype']['onLoad'] = function () {
                    }, _0xda1881['prototype']['update'] = function (_0x10b9de) {
                    }, _0xda1881['prototype']['initPlatfo' + 'rm'] = function () {
                        this['setId'](0x3), this['setName']('dev'), this['setVersion']('1.0.0'), this['setUserInf' + 'oMgr'](new _0x451af8['default']()), this['setStorage'](new _0x36b8b6['default']()), this['setAppId'](_0x4506f6['default']['appId']), this['setShare'](new _0x3ae684['default']()), this['setAdUnits'](new _0x54eeef['default']());
                    }, _0xda1881['prototype']['initGame'] = function () {
                        _0x4a441e['default']['getMgr']()['addUrl']('server', 'https://ga' + 'me.g.lieqi' + 'cun.cn'), _0x4a441e['default']['getMgr']()['addUrl']('res', 'https://ga' + 'me.g.lieqi' + 'cun.cn/sdq' + 'c'), _0x4a441e['default']['getMgr']()['setDefault' + 'Key']('server'), _0x27b2d0['default']['getMgr']()['setAdCfg'](_0x326d69['EAdType']['video'], ['adunit-b3b' + 'cf156ba8bd' + '45d']), _0x27b2d0['default']['getMgr']()['setAdCfg'](_0x326d69['EAdType']['banner'], ['adunit-5b6' + 'eacc9d4828' + 'bda']), _0x27b2d0['default']['getMgr']()['setAdCfg'](_0x326d69['EAdType']['Interstiti' + 'al'], ['adunit-f3a' + '860dadc3b9' + 'b23']);
                    }, _0xda1881['prototype']['otherInter' + 'face'] = function (_0x478190) {
                        for (var _0x10a4c5 = [], _0x5b34cf = 0x1; _0x5b34cf < arguments['length']; _0x5b34cf++)
                            _0x10a4c5[_0x5b34cf - 0x1] = arguments[_0x5b34cf];
                    }, _0xda1881['prototype']['checkUpdat' + 'e'] = function () {
                    }, _0xda1881;
                }(_0x19fa53['default']);
            _0x5ab7e6['default'] = _0x47bf94;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BPlatform': 0x8,
            '../../BGame/mgr/BAdMgr': 0x11,
            '../../BGame/mgr/BUrlMgr': 0x14,
            '../../config/Config': 0x3c,
            '../adUnits/adUnits_dev': 0x17,
            '../share/share_wab': 0x1d,
            '../storage/storage_cljd': 0x1f,
            '../userInfo/userInfo_dev': 0x20
        }
    ],
    0x1b: [
        function (_0x2c0adf, _0x59d699, _0x3a2a6a) {
            'use strict';
            var _0x5aee50 = this && this['__extends'] || function () {
                var _0x331069 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x31852a, _0x8ca644) {
                    _0x31852a['__proto__'] = _0x8ca644;
                } || function (_0x565863, _0x4fee7b) {
                    for (var _0x42887b in _0x4fee7b)
                        _0x4fee7b['hasOwnProp' + 'erty'](_0x42887b) && (_0x565863[_0x42887b] = _0x4fee7b[_0x42887b]);
                };
                return function (_0x4c17fa, _0x1d2b14) {
                    function _0x3c3152() {
                        this['constructo' + 'r'] = _0x4c17fa;
                    }
                    _0x331069(_0x4c17fa, _0x1d2b14), _0x4c17fa['prototype'] = null === _0x1d2b14 ? Object['create'](_0x1d2b14) : (_0x3c3152['prototype'] = _0x1d2b14['prototype'], new _0x3c3152());
                };
            }();
            Object['defineProp' + 'erty'](_0x3a2a6a, '__esModule', { 'value': !0x0 });
            var _0x2cd12e = _0x2c0adf('../../BGam' + 'e/base/BPl' + 'atform'), _0x5a9080 = _0x2c0adf('../share/s' + 'hare_wx'), _0x42b9bb = _0x2c0adf('../adUnits' + '/adUnits_w' + 'x'), _0x70a756 = _0x2c0adf('../../BGam' + 'e/base/BTa' + 'bleMgr'), _0x4c39c9 = _0x2c0adf('../../BGam' + 'e/base/BAn' + 'alytics'), _0x49ceb9 = _0x2c0adf('../../BGam' + 'e/BEnum'), _0x4d23ad = _0x2c0adf('../rank/ra' + 'nk_cljd'), _0x313eef = _0x2c0adf('../../BGam' + 'e/mgr/BAdM' + 'gr'), _0xafe2a7 = _0x2c0adf('../userInf' + 'o/userInfo' + '_wx'), _0x15d0f2 = _0x2c0adf('../../BGam' + 'e/mgr/BUrl' + 'Mgr'), _0x250e13 = _0x2c0adf('../../cons' + 'tant/enums'), _0xcb672d = _0x2c0adf('../storage' + '/storage_c' + 'ljd'), _0x4a057d = _0x2c0adf('../../conf' + 'ig/Config'), _0x3af726 = function (_0x3d758a) {
                    function _0x5db3b4() {
                        var _0x18ffd8 = null !== _0x3d758a && _0x3d758a['apply'](this, arguments) || this;
                        return _0x18ffd8['isInit'] = !0x1, _0x18ffd8['isAccredit'] = !0x1, _0x18ffd8['userInfo'] = null, _0x18ffd8;
                    }
                    return _0x5aee50(_0x5db3b4, _0x3d758a), _0x5db3b4['prototype']['onLoad'] = function () {
                    }, _0x5db3b4['prototype']['update'] = function (_0x456598) {
                    }, _0x5db3b4['prototype']['initPlatfo' + 'rm'] = function () {
                        this['setId'](_0x250e13['PlatformTy' + 'pe']['wx']), this['setName']('wx'), this['setVersion']('1.0.0'), this['setUserInf' + 'oMgr'](new _0xafe2a7['default']()), this['setStorage'](new _0xcb672d['default']()), this['setTableMg' + 'r'](new _0x70a756['default']()), this['setAppId'](_0x4a057d['default']['appId']), this['setShare'](new _0x5a9080['default']()), this['setAdUnits'](new _0x42b9bb['default']()), this['setAnalyti' + 'cs'](new _0x4c39c9['default']()), this['setRank'](new _0x4d23ad['default']()), this['getTableMg' + 'r']()['setInfoTab' + 'le']('game_const' + 'ant_config'), this['getTableMg' + 'r']()['setTablePa' + 'th']('https://cd' + 'n.fairgame' + '.cn/sdqc/r' + 'es1.0.5/co' + 'nfig.zip'), this['checkUpdat' + 'e']();
                    }, _0x5db3b4['prototype']['initGame'] = function () {
                        _0x15d0f2['default']['getMgr']()['addUrl']('server', 'https://ab' + 'c.genwowan' + 'ba.com'), _0x15d0f2['default']['getMgr']()['addUrl']('res', 'https://cd' + 'n.fairgame' + '.cn/sdqc/r' + 'es1.0.5'), _0x15d0f2['default']['getMgr']()['setDefault' + 'Key']('server'), _0x313eef['default']['getMgr']()['setAdCfg'](_0x49ceb9['EAdType']['video'], ['adunit-b3b' + 'cf156ba8bd' + '45d']), _0x313eef['default']['getMgr']()['setAdCfg'](_0x49ceb9['EAdType']['banner'], ['adunit-5b6' + 'eacc9d4828' + 'bda']), _0x313eef['default']['getMgr']()['setAdCfg'](_0x49ceb9['EAdType']['Interstiti' + 'al'], ['adunit-f3a' + '860dadc3b9' + 'b23']);
                    }, _0x5db3b4['prototype']['otherInter' + 'face'] = function (_0x18ea1a) {
                        for (var _0x31ea92 = [], _0x45d383 = 0x1; _0x45d383 < arguments['length']; _0x45d383++)
                            _0x31ea92[_0x45d383 - 0x1] = arguments[_0x45d383];
                    }, _0x5db3b4['prototype']['checkUpdat' + 'e'] = function () {
                    }, _0x5db3b4['prototype']['checkAccre' + 'dit'] = function (_0x1aaa76) {
                        var _0x597ee0 = this;
                        wx['getSetting']({
                            'success': function (_0x1df66a) {
                                _0x597ee0['isInit'] = !0x0;
                                var _0x159d0d = _0x1df66a['authSettin' + 'g'];
                                _0x159d0d['scope.user' + 'Info'] === !0x0 ? (console['log']('已经授权'), _0x597ee0['isAccredit'] = !0x0, _0x597ee0['getUserInf' + 'o'](null), _0x1aaa76 ? _0x1aaa76(!0x0) : null) : (_0x597ee0['isAuthoriz' + 'e'] = !0x1, console['log']('用户已拒绝授权，再调' + '用相关\x20API\x20或者' + '\x20wx.author' + 'ize\x20会失败，需要' + '引导用户到设置页面打' + '开授权开关'), _0x1aaa76 ? _0x1aaa76(!0x1) : null);
                            }['bind'](this),
                            'fail': function () {
                                _0x1aaa76 ? _0x1aaa76(!0x1) : null;
                            }
                        });
                    }, _0x5db3b4['prototype']['getUserInf' + 'o_WX'] = function (_0x18d7cd) {
                        wx['getUserInf' + 'o']({
                            'lang': 'zh_CN',
                            'success': function (_0x481aa4) {
                                console['log']('获取授权信息成功', _0x481aa4), this['userInfo'] = _0x481aa4['userInfo'], this['userInfo']['encryptedD' + 'ata'] = _0x481aa4['encryptedD' + 'ata'], this['userInfo']['iv'] = _0x481aa4['iv'], _0x18d7cd ? _0x18d7cd(!0x0) : null;
                            },
                            'fail': function () {
                                _0x18d7cd ? _0x18d7cd(!0x1) : null;
                            }
                        });
                    }, _0x5db3b4;
                }(_0x2cd12e['default']);
            _0x3a2a6a['default'] = _0x3af726;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BAnalytics': 0x4,
            '../../BGame/base/BPlatform': 0x8,
            '../../BGame/base/BTableMgr': 0xc,
            '../../BGame/mgr/BAdMgr': 0x11,
            '../../BGame/mgr/BUrlMgr': 0x14,
            '../../config/Config': 0x3c,
            '../../constant/enums': 0x3d,
            '../adUnits/adUnits_wx': 0x18,
            '../rank/rank_cljd': 0x1c,
            '../share/share_wx': 0x1e,
            '../storage/storage_cljd': 0x1f,
            '../userInfo/userInfo_wx': 0x21
        }
    ],
    0x1c: [
        function (_0x1929ea, _0x159fdb, _0x633e4f) {
            'use strict';
            Object['defineProp' + 'erty'](_0x633e4f, '__esModule', { 'value': !0x0 });
            var _0x984cf1 = _0x1929ea('../cljdSdk'), _0x324b7a = _0x1929ea('../../BGam' + 'e/base/BRa' + 'nkInfo'), _0x522095 = _0x1929ea('../../BGam' + 'e/BEnum'), _0x1a1be9 = _0x1929ea('../../BGam' + 'e/BGame'), _0x61d6eb = function () {
                    function _0x11c67d() {
                        this['rankdatas'] = [], this['mydata'] = null, this['rankurl'] = '', this['curScore'] = 0x0;
                    }
                    return _0x11c67d['prototype']['setRankUrl'] = function (_0x3e6196) {
                        this['rankurl'] = _0x3e6196;
                    }, _0x11c67d['prototype']['isUserInfo'] = function () {
                        return _0x984cf1['default']['isLogin']() ? _0x984cf1['default']['isAuth']() : void _0x1a1be9['default']['getUserInf' + 'oMgr']()['login'](function (_0x1a121d) {
                            switch (_0x1a121d['result']) {
                            case _0x522095['EResult']['succeed']:
                                var _0x2e5550 = _0x1a1be9['default']['getGame']()['getPlatfor' + 'm']()['getId'](), _0xc83bb5 = _0x1a1be9['default']['getGame']()['getPlatfor' + 'm']()['getVersion'](), _0x51f0b4 = _0x1a1be9['default']['getGame']()['getPlatfor' + 'm']()['getAppId'](), _0x337fd3 = this['rankurl'];
                                _0x984cf1['default']['login'](_0x337fd3, _0x2e5550, _0x51f0b4, _0x1a121d['data']['code'], _0x1a121d['data']['anonymousC' + 'ode'], _0x1a121d['data']['inviteCode'], _0xc83bb5, 0x5, function (_0x2d92c9) {
                                    return _0x2d92c9['result'] != _0x522095['EResult']['succeed'] ? !0x1 : _0x984cf1['default']['isAuth']();
                                }['bind'](this));
                                break;
                            case _0x522095['EResult']['Failure']:
                                return !0x1;
                            case _0x522095['EResult']['cancel']:
                                return !0x1;
                            }
                        }['bind'](this));
                    }, _0x11c67d['prototype']['setUserInf' + 'o'] = function (_0x5431ce, _0x27864b) {
                        var _0xd98991 = _0x5431ce, _0x43fe90 = (_0xd98991['rawData'] ? _0xd98991['rawData'] : '', _0xd98991['encryptedD' + 'ata'] ? _0xd98991['encryptedD' + 'ata'] : ''), _0x526477 = _0xd98991['iv'] ? _0xd98991['iv'] : '';
                        _0x984cf1['default']['setUserInf' + 'o'](_0x43fe90, _0x526477, _0x27864b);
                    }, _0x11c67d['prototype']['uploadScor' + 'e'] = function (_0x556519, _0x35a500, _0x366525) {
                        this['curScore'] = _0x556519, _0x984cf1['default']['uploadScor' + 'e'](_0x556519, null, _0x366525);
                    }, _0x11c67d['prototype']['getRanks'] = function (_0x349f81, _0x2a181c, _0x3ffffd, _0x370ee8) {
                        this['rankdatas']['length'] > 0x0 ? (this['_returnDat' + 'a'](_0x349f81, _0x2a181c, _0x3ffffd), this['_loadData']()) : this['_loadData'](function () {
                            this['_returnDat' + 'a'](_0x349f81, _0x2a181c, _0x3ffffd);
                        }['bind'](this));
                    }, _0x11c67d['prototype']['getMyRank'] = function (_0x196cb7, _0x5a8e00) {
                        null != this['mydata'] && this['mydata']['score'] == this['curScore'] ? _0x196cb7 && _0x196cb7(this['mydata']) : this['_loadData'](function (_0x4ef87b) {
                            _0x196cb7 && _0x196cb7(this['mydata']);
                        }['bind'](this));
                    }, _0x11c67d['prototype']['_returnDat' + 'a'] = function (_0x3867e2, _0x721064, _0x5ae376) {
                        var _0x52155 = [];
                        if (_0x3867e2 < this['rankdatas']['length']) {
                            for (var _0x416798 = _0x3867e2; _0x3867e2 + _0x721064 > _0x416798 && !(_0x416798 >= this['rankdatas']['length']); _0x416798++)
                                _0x52155['push'](this['rankdatas'][_0x416798]);
                        }
                        _0x5ae376 && _0x5ae376(_0x52155);
                    }, _0x11c67d['prototype']['_loadData'] = function (_0x577d7e) {
                        _0x984cf1['default']['getRanks'](function (_0x31625a) {
                            if (_0x31625a['result'] == _0x522095['EResult']['succeed']) {
                                var _0x4efd3c = _0x31625a['data'];
                                if (_0x4efd3c) {
                                    this['mydata'] || (this['mydata'] = new _0x324b7a['default']()), this['_setRankIn' + 'fo'](this['mydata'], _0x4efd3c['my']), this['curScore'] = this['mydata']['score'];
                                    for (var _0x3cc3a9 = 0x0; _0x3cc3a9 < _0x4efd3c['rank']['length']; _0x3cc3a9++) {
                                        var _0x559f94 = _0x4efd3c['rank'][_0x3cc3a9];
                                        this['rankdatas']['push'](this['_setRankIn' + 'fo'](new _0x324b7a['default'](), _0x559f94));
                                    }
                                }
                            }
                            _0x577d7e && _0x577d7e(_0x31625a);
                        }['bind'](this));
                    }, _0x11c67d['prototype']['_setRankIn' + 'fo'] = function (_0xebe372, _0x23a255) {
                        _0xebe372['rank'] = _0x23a255['rank'] - 0x1, _0xebe372['name'] = _0x23a255['name'], _0xebe372['score'] = _0x23a255['level'], _0xebe372['avatarUrl'] = _0x23a255['avatarUrl'];
                    }, _0x11c67d;
                }();
            _0x633e4f['default'] = _0x61d6eb;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/BGame': 0x3,
            '../../BGame/base/BRankInfo': 0x9,
            '../cljdSdk': 0x19
        }
    ],
    0x1d: [
        function (_0x1d9771, _0x5c62de, _0x1d9193) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1d9193, '__esModule', { 'value': !0x0 });
            var _0x7d3730 = _0x1d9771('../../BGam' + 'e/base/BRe' + 'sult'), _0x3ac0c2 = function () {
                    function _0xd0bf1b() {
                    }
                    return _0xd0bf1b['prototype']['setShareMe' + 'nu'] = function () {
                    }, _0xd0bf1b['prototype']['shareAppMe' + 'ssage'] = function (_0x20ad11, _0x20bf6d, _0x338bce, _0x1038d7) {
                        void 0x0 === _0x20bf6d && (_0x20bf6d = ''), void 0x0 === _0x338bce && (_0x338bce = '');
                        var _0x2e882c = new _0x7d3730['default']();
                        _0x2e882c['tag'] = '在本地', _0x1038d7(_0x2e882c);
                    }, _0xd0bf1b;
                }();
            _0x1d9193['default'] = _0x3ac0c2;
        },
        { '../../BGame/base/BResult': 0xa }
    ],
    0x1e: [
        function (_0x2be9ea, _0x460072, _0x200f78) {
            'use strict';
            Object['defineProp' + 'erty'](_0x200f78, '__esModule', { 'value': !0x0 });
            var _0x380ce5 = _0x2be9ea('../../BGam' + 'e/base/BRe' + 'sult'), _0xd22f6b = _0x2be9ea('../../BGam' + 'e/BEnum'), _0x2c070e = function () {
                    function _0x1965e6() {
                    }
                    return _0x1965e6['prototype']['setShareMe' + 'nu'] = function (_0xfe6490) {
                    }, _0x1965e6['prototype']['shareAppMe' + 'ssage'] = function (_0x4b94fc, _0x4d476d, _0x345c1e, _0x497ade) {
                        void 0x0 === _0x4d476d && (_0x4d476d = ''), void 0x0 === _0x345c1e && (_0x345c1e = '');
                        var _0x3e4653 = new _0x380ce5['default']();
                        wx['shareAppMe' + 'ssage']({
                            'title': _0x4b94fc,
                            'imageUrl': _0x4d476d,
                            'query': _0x345c1e,
                            'success': function (_0x4d6e67) {
                            },
                            'fail': function () {
                            }
                        }), _0x3e4653['result'] = _0xd22f6b['EResult']['succeed'], _0x497ade(_0x3e4653);
                    }, _0x1965e6;
                }();
            _0x200f78['default'] = _0x2c070e;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BResult': 0xa
        }
    ],
    0x1f: [
        function (_0x19c3e3, _0x41d93a, _0xd3fe8e) {
            'use strict';
            Object['defineProp' + 'erty'](_0xd3fe8e, '__esModule', { 'value': !0x0 });
            var _0x38af42 = _0x19c3e3('../../BGam' + 'e/base/BRe' + 'sult'), _0x2c2014 = _0x19c3e3('../cljdSdk'), _0x34a50 = _0x19c3e3('../../BGam' + 'e/BEnum'), _0x4af924 = _0x19c3e3('../../BGam' + 'e/lib/BLoc' + 'alStorage'), _0x45e80a = function () {
                    function _0xd1e7a4() {
                        this['savecallba' + 'ck'] = null;
                    }
                    return _0xd1e7a4['prototype']['readData'] = function (_0x182f75, _0x592689, _0x38354a) {
                        var _0x3f7f7b = new _0x38af42['default'](_0x34a50['EResult']['succeed']), _0x51e225 = _0x2c2014['default']['getData'](), _0x39a4f4 = _0x4af924['default']['readData']('cljddata_v' + 'ersion', 0x0), _0xb84759 = _0x51e225['version'] ? _0x51e225['version'] : 0x0;
                        if (_0xb84759 > _0x39a4f4) {
                            for (var _0x41d862 = Object['keys'](_0x51e225), _0x231d73 = 0x0; _0x231d73 < _0x41d862['length']; _0x231d73++)
                                _0x4af924['default']['saveData'](_0x41d862[_0x231d73], _0x51e225[_0x41d862[_0x231d73]]);
                            _0x4af924['default']['saveData']('cljddata_v' + 'ersion', _0xb84759);
                        }
                        _0x3f7f7b['data'] = _0x4af924['default']['readData'](_0x182f75, _0x592689), _0x38354a && _0x38354a(_0x3f7f7b);
                    }, _0xd1e7a4['prototype']['saveData'] = function (_0x1eea14, _0x4fb817, _0x4e85bd) {
                        var _0x638f82 = Date['now']();
                        _0x4af924['default']['saveData']('cljddata_v' + 'ersion', _0x638f82), _0x4af924['default']['saveData'](_0x1eea14, _0x4fb817);
                        var _0x44000f = _0x2c2014['default']['getData']();
                        _0x44000f['version'] = _0x638f82, _0x44000f[_0x1eea14] = _0x4fb817, _0x2c2014['default']['setData'](_0x44000f, _0x4e85bd), this['savecallba' + 'ck'] && this['savecallba' + 'ck']();
                    }, _0xd1e7a4['prototype']['removeData'] = function (_0x2e7721, _0x327281) {
                        var _0x3cbc48 = Date['now'](), _0xc0a371 = _0x2c2014['default']['getData']();
                        delete _0xc0a371[_0x2e7721], _0xc0a371['version'] = _0x3cbc48, _0x2c2014['default']['setData'](_0xc0a371, _0x327281);
                    }, _0xd1e7a4['prototype']['removeAllD' + 'ata'] = function (_0x53a5c9) {
                        _0x2c2014['default']['setData']({}, _0x53a5c9);
                    }, _0xd1e7a4['prototype']['registerCa' + 'llback'] = function (_0x296369) {
                        this['savecallba' + 'ck'] = _0x296369;
                    }, _0xd1e7a4;
                }();
            _0xd3fe8e['default'] = _0x45e80a;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BResult': 0xa,
            '../../BGame/lib/BLocalStorage': 0x10,
            '../cljdSdk': 0x19
        }
    ],
    0x20: [
        function (_0xe5521b, _0xac2e58, _0x3600c1) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3600c1, '__esModule', { 'value': !0x0 });
            var _0x378759 = _0xe5521b('../../BGam' + 'e/base/BRe' + 'sult'), _0x303e1f = _0xe5521b('../../BGam' + 'e/base/BUs' + 'erInfo'), _0x52aa73 = _0xe5521b('../../BGam' + 'e/BEnum'), _0x566569 = function () {
                    function _0x4f8b19() {
                        this['userid'] = '', this['_userinfo'] = new _0x303e1f['default']();
                    }
                    return _0x4f8b19['prototype']['isNewUser'] = function () {
                        return !0x1;
                    }, _0x4f8b19['prototype']['setUserId'] = function (_0x283474) {
                        this['getUserInf' + 'o']()['id'] = _0x283474;
                    }, _0x4f8b19['prototype']['getUserId'] = function () {
                        return this['getUserInf' + 'o']()['id'];
                    }, _0x4f8b19['prototype']['login'] = function (_0x3e0463) {
                        var _0x308ea0 = new _0x378759['default'](_0x52aa73['EResult']['succeed']);
                        _0x308ea0['data']['code'] = 0x7f337, _0x308ea0['data']['inviteCode'] = 0xfa86f, _0x3e0463 && _0x3e0463(_0x308ea0);
                    }, _0x4f8b19['prototype']['getUserInf' + 'o'] = function () {
                        return this['_userinfo'];
                    }, _0x4f8b19['prototype']['checkAccre' + 'dit'] = function (_0x212ab3) {
                        var _0xdfd419 = new _0x378759['default'](_0x52aa73['EResult']['succeed']);
                        _0x212ab3 && _0x212ab3(_0xdfd419);
                    }, _0x4f8b19['prototype']['isAuth'] = function () {
                        return !0x0;
                    }, _0x4f8b19['prototype']['Accredit'] = function (_0x5b64fe) {
                        var _0x32dc33 = new _0x378759['default'](_0x52aa73['EResult']['succeed']);
                        _0x5b64fe && _0x5b64fe(_0x32dc33);
                    }, _0x4f8b19;
                }();
            _0x3600c1['default'] = _0x566569;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BResult': 0xa,
            '../../BGame/base/BUserInfo': 0xd
        }
    ],
    0x21: [
        function (_0x107418, _0x134325, _0x1a731f) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1a731f, '__esModule', { 'value': !0x0 });
            var _0x4865fd = _0x107418('../../BGam' + 'e/base/BRe' + 'sult'), _0x4f5161 = _0x107418('../../BGam' + 'e/BEnum'), _0x191409 = function () {
                    function _0x14cf8c() {
                    }
                    return _0x14cf8c['prototype']['isNewUser'] = function () {
                        return !0x1;
                    }, _0x14cf8c['prototype']['setUserId'] = function (_0x526893) {
                    }, _0x14cf8c['prototype']['getUserId'] = function () {
                        return '';
                    }, _0x14cf8c['prototype']['login'] = function (_0x444744) {
                        var _0x31b6f5 = new _0x4865fd['default'](), _0x3ec098 = function (_0x5d6e01) {
                                console['log']('wx.login\x20s' + 'uccess', _0x5d6e01), _0x31b6f5['result'] = _0x4f5161['EResult']['succeed'], _0x31b6f5['data'] = _0x5d6e01, _0x444744 && _0x444744(_0x31b6f5);
                            }['bind'](this), _0x17c4aa = function (_0x29ad5d) {
                                console['log']('wx.login\x20f' + 'ail', _0x29ad5d), _0x31b6f5['result'] = _0x4f5161['EResult']['Failure'], _0x31b6f5['err'] = _0x29ad5d, _0x444744 && _0x444744(_0x31b6f5);
                            }['bind'](this), _0x394fb4 = function (_0x3967f9) {
                            }['bind'](this);
                        _0x3ec098 && _0x3ec098(), _0x394fb4 && _0x394fb4();
                    }, _0x14cf8c['prototype']['getUserInf' + 'o'] = function () {
                        return null;
                    }, _0x14cf8c['prototype']['checkAccre' + 'dit'] = function (_0x706175) {
                    }, _0x14cf8c['prototype']['_getUserIn' + 'fo'] = function (_0x41e984) {
                        wx['getUserInf' + 'o']({
                            'lang': 'zh_CN',
                            'success': function (_0x4969ce) {
                                console['log']('获取授权信息成功', _0x4969ce), this['userInfo'] = _0x4969ce['userInfo'], _0x41e984 ? _0x41e984(!0x0) : null;
                            },
                            'fail': function () {
                                _0x41e984 ? _0x41e984(!0x1) : null;
                            }
                        });
                    }, _0x14cf8c['prototype']['isAuth'] = function () {
                        return !0x0;
                    }, _0x14cf8c['prototype']['Accredit'] = function (_0x27655c) {
                    }, _0x14cf8c;
                }();
            _0x1a731f['default'] = _0x191409;
        },
        {
            '../../BGame/BEnum': 0x2,
            '../../BGame/base/BResult': 0xa
        }
    ],
    0x22: [
        function (_0x1557ea, _0x435615, _0x48d6e7) {
            'use strict';
            Object['defineProp' + 'erty'](_0x48d6e7, '__esModule', { 'value': !0x0 });
            var _0x2f29f4 = _0x1557ea('./componen' + 'ts/ToastDi' + 'alog'), _0xe4fb18 = _0x1557ea('./componen' + 'ts/GameSce' + 'ne'), _0x1d5443 = _0x1557ea('./componen' + 'ts/HomeSce' + 'ne'), _0x15acad = _0x1557ea('./componen' + 'ts/LoadCus' + 'tomsScene'), _0x556332 = _0x1557ea('./scripts/' + 'SceneLayou' + 'tScript'), _0x47cc7a = _0x1557ea('./componen' + 'ts/LoginSc' + 'ene'), _0x864c43 = function () {
                    function _0x2adf61() {
                    }
                    return _0x2adf61['init'] = function () {
                        var _0x3a5a6b = Laya['ClassUtils']['regClass'];
                        _0x3a5a6b('components' + '/ToastDial' + 'og.ts', _0x2f29f4['default']), _0x3a5a6b('components' + '/GameScene' + '.ts', _0xe4fb18['default']), _0x3a5a6b('components' + '/HomeScene' + '.ts', _0x1d5443['default']), _0x3a5a6b('components' + '/LoadCusto' + 'msScene.ts', _0x15acad['default']), _0x3a5a6b('scripts/Sc' + 'eneLayoutS' + 'cript.ts', _0x556332['default']), _0x3a5a6b('components' + '/LoginScen' + 'e.ts', _0x47cc7a['default']);
                    }, _0x2adf61['width'] = 0x536, _0x2adf61['height'] = 0x2ee, _0x2adf61['scaleMode'] = 'fixedheigh' + 't', _0x2adf61['screenMode'] = 'horizontal', _0x2adf61['alignV'] = 'middle', _0x2adf61['alignH'] = 'center', _0x2adf61['startScene'] = 'scenes/Log' + 'inScene.sc' + 'ene', _0x2adf61['sceneRoot'] = '', _0x2adf61['debug'] = !0x1, _0x2adf61['stat'] = !0x1, _0x2adf61['physicsDeb' + 'ug'] = !0x1, _0x2adf61['exportScen' + 'eToJson'] = !0x0, _0x2adf61;
                }();
            _0x48d6e7['default'] = _0x864c43, _0x864c43['init']();
        },
        {
            './components/GameScene': 0x2a,
            './components/HomeScene': 0x2d,
            './components/LoadCustomsScene': 0x2e,
            './components/LoginScene': 0x2f,
            './components/ToastDialog': 0x39,
            './scripts/SceneLayoutScript': 0x58
        }
    ],
    0x23: [
        function (_0x26669a, _0x18781f, _0xa7dc) {
            'use strict';
            var _0x471115 = this && this['__awaiter'] || function (_0x428519, _0x2fc9d9, _0x460baf, _0xc9603c) {
                    return new (_0x460baf || (_0x460baf = Promise))(function (_0x294339, _0x48f236) {
                        function _0x1e264e(_0x536fb4) {
                            try {
                                _0x8d8357(_0xc9603c['next'](_0x536fb4));
                            } catch (_0x1c8c8d) {
                                _0x48f236(_0x1c8c8d);
                            }
                        }
                        function _0x3d2bc7(_0x4c8aff) {
                            try {
                                _0x8d8357(_0xc9603c['throw'](_0x4c8aff));
                            } catch (_0x5d0810) {
                                _0x48f236(_0x5d0810);
                            }
                        }
                        function _0x8d8357(_0x5118f7) {
                            _0x5118f7['done'] ? _0x294339(_0x5118f7['value']) : new _0x460baf(function (_0x438756) {
                                _0x438756(_0x5118f7['value']);
                            })['then'](_0x1e264e, _0x3d2bc7);
                        }
                        _0x8d8357((_0xc9603c = _0xc9603c['apply'](_0x428519, _0x2fc9d9 || []))['next']());
                    });
                }, _0x412faf = this && this['__generato' + 'r'] || function (_0x4a3e26, _0x534ec5) {
                    function _0x34333a(_0x1fc0f4) {
                        return function (_0xe34b0b) {
                            return _0x18a4ca([
                                _0x1fc0f4,
                                _0xe34b0b
                            ]);
                        };
                    }
                    function _0x18a4ca(_0x5c1a49) {
                        if (_0x21ec17)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x35c071;)
                            try {
                                if (_0x21ec17 = 0x1, _0x594813 && (_0x5c381a = 0x2 & _0x5c1a49[0x0] ? _0x594813['return'] : _0x5c1a49[0x0] ? _0x594813['throw'] || ((_0x5c381a = _0x594813['return']) && _0x5c381a['call'](_0x594813), 0x0) : _0x594813['next']) && !(_0x5c381a = _0x5c381a['call'](_0x594813, _0x5c1a49[0x1]))['done'])
                                    return _0x5c381a;
                                switch (_0x594813 = 0x0, _0x5c381a && (_0x5c1a49 = [
                                        0x2 & _0x5c1a49[0x0],
                                        _0x5c381a['value']
                                    ]), _0x5c1a49[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x5c381a = _0x5c1a49;
                                    break;
                                case 0x4:
                                    return _0x35c071['label']++, {
                                        'value': _0x5c1a49[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x35c071['label']++, _0x594813 = _0x5c1a49[0x1], _0x5c1a49 = [0x0];
                                    continue;
                                case 0x7:
                                    _0x5c1a49 = _0x35c071['ops']['pop'](), _0x35c071['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x5c381a = _0x35c071['trys'], !(_0x5c381a = _0x5c381a['length'] > 0x0 && _0x5c381a[_0x5c381a['length'] - 0x1]) && (0x6 === _0x5c1a49[0x0] || 0x2 === _0x5c1a49[0x0])) {
                                        _0x35c071 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x5c1a49[0x0] && (!_0x5c381a || _0x5c1a49[0x1] > _0x5c381a[0x0] && _0x5c1a49[0x1] < _0x5c381a[0x3])) {
                                        _0x35c071['label'] = _0x5c1a49[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x5c1a49[0x0] && _0x35c071['label'] < _0x5c381a[0x1]) {
                                        _0x35c071['label'] = _0x5c381a[0x1], _0x5c381a = _0x5c1a49;
                                        break;
                                    }
                                    if (_0x5c381a && _0x35c071['label'] < _0x5c381a[0x2]) {
                                        _0x35c071['label'] = _0x5c381a[0x2], _0x35c071['ops']['push'](_0x5c1a49);
                                        break;
                                    }
                                    _0x5c381a[0x2] && _0x35c071['ops']['pop'](), _0x35c071['trys']['pop']();
                                    continue;
                                }
                                _0x5c1a49 = _0x534ec5['call'](_0x4a3e26, _0x35c071);
                            } catch (_0x1c9f3e) {
                                _0x5c1a49 = [
                                    0x6,
                                    _0x1c9f3e
                                ], _0x594813 = 0x0;
                            } finally {
                                _0x21ec17 = _0x5c381a = 0x0;
                            }
                        if (0x5 & _0x5c1a49[0x0])
                            throw _0x5c1a49[0x1];
                        return {
                            'value': _0x5c1a49[0x0] ? _0x5c1a49[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x21ec17, _0x594813, _0x5c381a, _0x18ab42, _0x35c071 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x5c381a[0x0])
                                    throw _0x5c381a[0x1];
                                return _0x5c381a[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x18ab42 = {
                        'next': _0x34333a(0x0),
                        'throw': _0x34333a(0x1),
                        'return': _0x34333a(0x2)
                    }, 'function' == typeof Symbol && (_0x18ab42[Symbol['iterator']] = function () {
                        return this;
                    }), _0x18ab42;
                };
            Object['defineProp' + 'erty'](_0xa7dc, '__esModule', { 'value': !0x0 });
            var _0x39010d = _0x26669a('./GameConf' + 'ig'), _0x46ad28 = _0x26669a('./manager/' + 'UIManager'), _0x439d16 = _0x26669a('./manager/' + 'PlatformMa' + 'nager'), _0x297bcb = _0x26669a('./config/C' + 'onfig'), _0x482835 = _0x26669a('./constant' + '/enums'), _0x3a3be2 = _0x26669a('./platform' + 's/MiniGame'), _0x46ba36 = _0x26669a('./BGame/BG' + 'ame'), _0x117f74 = _0x26669a('./utils/Da' + 'taUtil'), _0x3286f4 = function () {
                    function _0x136e5a() {
                        UIConfig['closeDialo' + 'gOnSide'] = !0x1, window['Laya3D'] ? Laya3D['init'](_0x39010d['default']['width'], _0x39010d['default']['height']) : Laya['init'](_0x39010d['default']['width'], _0x39010d['default']['height'], Laya['WebGL']), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = 'showall', Laya['Browser']['onMobile'] && (Laya['stage']['screenMode'] = _0x39010d['default']['screenMode']), Laya['stage']['alignH'] = 'center', Laya['stage']['alignV'] = 'middle', (Laya['URL']['exportScen' + 'eToJson'] = _0x39010d['default']['exportScen' + 'eToJson'], (_0x39010d['default']['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x39010d['default']['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x39010d['default']['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'] = !0x0, Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onConfigLo' + 'aded'])));
                    }
                    return _0x136e5a['prototype']['onVersiuon' + 'Loaded'] = function () {
                        Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
                    }, _0x136e5a['prototype']['onConfigLo' + 'aded'] = function () {
                        return _0x471115(this, void 0x0, void 0x0, function () {
                            return _0x412faf(this, function (_0x20ca0f) {
                                switch (_0x3a3be2['MiniGame']['I']['init'](Laya['Browser']['window']['wx']), _0x439d16['default']['init'](), _0x46ba36['default']['getGame'](), _0x46ba36['default']['bgame']['init'](), _0x117f74['default']['initBanner'](), _0x297bcb['default']['platformTy' + 'pr']) {
                                case _0x482835['PlatformTy' + 'pe']['wx']:
                                    _0x297bcb['default']['ut'] = '1';
                                    break;
                                case _0x482835['PlatformTy' + 'pe']['qq']:
                                    _0x297bcb['default']['ut'] = '2';
                                    break;
                                case _0x482835['PlatformTy' + 'pe']['tt']:
                                    _0x297bcb['default']['ut'] = '4';
                                }
                                return _0x46ad28['default']['init'](), _0x46ad28['default']['switchScen' + 'e'](_0x39010d['default']['startScene']), [0x2];
                            });
                        });
                    }, _0x136e5a['prototype']['onHide'] = function () {
                    }, _0x136e5a['prototype']['onShow'] = function () {
                    }, _0x136e5a;
                }();
            new _0x3286f4();
        },
        {
            './BGame/BGame': 0x3,
            './GameConfig': 0x22,
            './config/Config': 0x3c,
            './constant/enums': 0x3d,
            './manager/PlatformManager': 0x4e,
            './manager/UIManager': 0x51,
            './platforms/MiniGame': 0x52,
            './utils/DataUtil': 0x5b
        }
    ],
    0x24: [
        function (_0x1ddf3d, _0xc97641, _0x54273f) {
            'use strict';
            var _0x3d85a0 = this && this['__extends'] || function () {
                    var _0x4a365e = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x2af32f, _0x5d61c6) {
                        _0x2af32f['__proto__'] = _0x5d61c6;
                    } || function (_0x3d9e23, _0x1def30) {
                        for (var _0x31f9b9 in _0x1def30)
                            _0x1def30['hasOwnProp' + 'erty'](_0x31f9b9) && (_0x3d9e23[_0x31f9b9] = _0x1def30[_0x31f9b9]);
                    };
                    return function (_0x576dfd, _0x556330) {
                        function _0xd80b59() {
                            this['constructo' + 'r'] = _0x576dfd;
                        }
                        _0x4a365e(_0x576dfd, _0x556330), _0x576dfd['prototype'] = null === _0x556330 ? Object['create'](_0x556330) : (_0xd80b59['prototype'] = _0x556330['prototype'], new _0xd80b59());
                    };
                }(), _0x5edef2 = this && this['__awaiter'] || function (_0x5f1804, _0xf62cab, _0x3e56cc, _0x41f0e2) {
                    return new (_0x3e56cc || (_0x3e56cc = Promise))(function (_0x26faeb, _0x2ff4b5) {
                        function _0x1ff7f3(_0x1d96d0) {
                            try {
                                _0x11b878(_0x41f0e2['next'](_0x1d96d0));
                            } catch (_0x202087) {
                                _0x2ff4b5(_0x202087);
                            }
                        }
                        function _0x4fe7ff(_0x4d8c06) {
                            try {
                                _0x11b878(_0x41f0e2['throw'](_0x4d8c06));
                            } catch (_0x5e474a) {
                                _0x2ff4b5(_0x5e474a);
                            }
                        }
                        function _0x11b878(_0x4c2716) {
                            _0x4c2716['done'] ? _0x26faeb(_0x4c2716['value']) : new _0x3e56cc(function (_0x527d5f) {
                                _0x527d5f(_0x4c2716['value']);
                            })['then'](_0x1ff7f3, _0x4fe7ff);
                        }
                        _0x11b878((_0x41f0e2 = _0x41f0e2['apply'](_0x5f1804, _0xf62cab || []))['next']());
                    });
                }, _0x13b401 = this && this['__generato' + 'r'] || function (_0x166081, _0x1a9bcf) {
                    function _0x468aef(_0x1eb716) {
                        return function (_0xc1f6c8) {
                            return _0x3ef6fe([
                                _0x1eb716,
                                _0xc1f6c8
                            ]);
                        };
                    }
                    function _0x3ef6fe(_0x3669d2) {
                        if (_0x2af400)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x2eacba;)
                            try {
                                if (_0x2af400 = 0x1, _0x4eb35d && (_0x544ec7 = 0x2 & _0x3669d2[0x0] ? _0x4eb35d['return'] : _0x3669d2[0x0] ? _0x4eb35d['throw'] || ((_0x544ec7 = _0x4eb35d['return']) && _0x544ec7['call'](_0x4eb35d), 0x0) : _0x4eb35d['next']) && !(_0x544ec7 = _0x544ec7['call'](_0x4eb35d, _0x3669d2[0x1]))['done'])
                                    return _0x544ec7;
                                switch (_0x4eb35d = 0x0, _0x544ec7 && (_0x3669d2 = [
                                        0x2 & _0x3669d2[0x0],
                                        _0x544ec7['value']
                                    ]), _0x3669d2[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x544ec7 = _0x3669d2;
                                    break;
                                case 0x4:
                                    return _0x2eacba['label']++, {
                                        'value': _0x3669d2[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x2eacba['label']++, _0x4eb35d = _0x3669d2[0x1], _0x3669d2 = [0x0];
                                    continue;
                                case 0x7:
                                    _0x3669d2 = _0x2eacba['ops']['pop'](), _0x2eacba['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x544ec7 = _0x2eacba['trys'], !(_0x544ec7 = _0x544ec7['length'] > 0x0 && _0x544ec7[_0x544ec7['length'] - 0x1]) && (0x6 === _0x3669d2[0x0] || 0x2 === _0x3669d2[0x0])) {
                                        _0x2eacba = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x3669d2[0x0] && (!_0x544ec7 || _0x3669d2[0x1] > _0x544ec7[0x0] && _0x3669d2[0x1] < _0x544ec7[0x3])) {
                                        _0x2eacba['label'] = _0x3669d2[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x3669d2[0x0] && _0x2eacba['label'] < _0x544ec7[0x1]) {
                                        _0x2eacba['label'] = _0x544ec7[0x1], _0x544ec7 = _0x3669d2;
                                        break;
                                    }
                                    if (_0x544ec7 && _0x2eacba['label'] < _0x544ec7[0x2]) {
                                        _0x2eacba['label'] = _0x544ec7[0x2], _0x2eacba['ops']['push'](_0x3669d2);
                                        break;
                                    }
                                    _0x544ec7[0x2] && _0x2eacba['ops']['pop'](), _0x2eacba['trys']['pop']();
                                    continue;
                                }
                                _0x3669d2 = _0x1a9bcf['call'](_0x166081, _0x2eacba);
                            } catch (_0x493a72) {
                                _0x3669d2 = [
                                    0x6,
                                    _0x493a72
                                ], _0x4eb35d = 0x0;
                            } finally {
                                _0x2af400 = _0x544ec7 = 0x0;
                            }
                        if (0x5 & _0x3669d2[0x0])
                            throw _0x3669d2[0x1];
                        return {
                            'value': _0x3669d2[0x0] ? _0x3669d2[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x2af400, _0x4eb35d, _0x544ec7, _0x921844, _0x2eacba = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x544ec7[0x0])
                                    throw _0x544ec7[0x1];
                                return _0x544ec7[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x921844 = {
                        'next': _0x468aef(0x0),
                        'throw': _0x468aef(0x1),
                        'return': _0x468aef(0x2)
                    }, 'function' == typeof Symbol && (_0x921844[Symbol['iterator']] = function () {
                        return this;
                    }), _0x921844;
                };
            Object['defineProp' + 'erty'](_0x54273f, '__esModule', { 'value': !0x0 });
            var _0x564c25 = _0x1ddf3d('../ui/laya' + 'MaxUI'), _0x1ea77a = _0x1ddf3d('../scripts' + '/SpriteSca' + 'le'), _0x1c4404 = _0x1ddf3d('../manager' + '/UIManager'), _0x3907d2 = _0x1ddf3d('../data/Ro' + 'leInfo'), _0x1b9676 = _0x1ddf3d('./OffLineP' + 'anel'), _0x1acbb3 = _0x1ddf3d('../config/' + 'Config'), _0x22ebd8 = _0x1ddf3d('../constan' + 't/enums'), _0x5231be = _0x1ddf3d('../manager' + '/ExportGam' + 'eManager'), _0x49bb1f = _0x1ddf3d('../item/Ch' + 'aPingItem'), _0x10ab09 = _0x1ddf3d('../manager' + '/EventMana' + 'ger'), _0x3634fd = _0x1ddf3d('../utils/D' + 'ataUtil'), _0x168fd1 = _0x1ddf3d('../utils/M' + 'athUtil'), _0xc6566f = _0x1ddf3d('../utils/U' + 'tils3d'), _0x441993 = _0x1ddf3d('./GameOver' + 'Panel'), _0x2bc391 = function (_0x171ec6) {
                    function _0x5954fd(_0x2eba48, _0x382209) {
                        var _0x507089 = _0x171ec6['call'](this) || this;
                        return _0x507089['chapingTyp' + 'e'] = _0x2eba48, _0x507089['isshowGame' + 'OverPanel'] = _0x382209, _0x507089;
                    }
                    return _0x3d85a0(_0x5954fd, _0x171ec6), _0x5954fd['prototype']['onEnable'] = function () {
                        _0x1c4404['default']['closeDialo' + 'g'](this);
                    }, _0x5954fd['prototype']['onChaPingI' + 'tem'] = function (_0x363ca0, _0x5dad14) {
                        _0x363ca0['setData'](), 0x2 == this['chapingTyp' + 'e'] ? _0x363ca0['export'](_0x1acbb3['default']['exportGame'][_0x22ebd8['ExportId']['guankaChap' + 'ing']]) : _0x363ca0['export'](_0x1acbb3['default']['exportGame'][_0x22ebd8['ExportId']['zhuChaPing']]);
                    }, _0x5954fd['prototype']['scrollerCa' + 'll'] = function () {
                        0x0 == this['m_type'] ? (this['list_chaPi' + 'ng']['scrollBar']['value'] += 0x1, this['list_chaPi' + 'ng']['scrollBar']['value'] >= this['list_chaPi' + 'ng']['scrollBar']['max'] && (this['m_type'] = 0x1)) : 0x1 == this['m_type'] && (this['list_chaPi' + 'ng']['scrollBar']['value'] -= 0x1, this['list_chaPi' + 'ng']['scrollBar']['value'] <= 0x0 && (this['m_type'] = 0x0));
                    }, _0x5954fd['prototype']['onRetuen'] = function () {
                        _0x1c4404['default']['closeDialo' + 'g'](this);
                    }, _0x5954fd['prototype']['onDisable'] = function () {
                        0x2 == this['chapingTyp' + 'e'] ? this['isshowGame' + 'OverPanel'] ? _0x1c4404['default']['showDialog'](new _0x441993['default']()) : void 0x0 : void 0x0, this['btn_return']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onRetuen']);
                    }, _0x5954fd['prototype']['ListMOUSE_' + 'Down'] = function () {
                        this['starPos'] = new Laya['Point'](), this['starPos']['setTo'](Laya['stage']['mouseX'], Laya['stage']['mouseY']);
                    }, _0x5954fd['prototype']['ListMOUSE_' + 'UP'] = function () {
                        this['endPos'] = new Laya['Point'](), this['endPos']['setTo'](Laya['stage']['mouseX'], Laya['stage']['mouseY']);
                        var _0x236940 = _0xc6566f['default']['pointDista' + 'nce'](this['starPos'], this['endPos']);
                        _0x236940 > 0x1e && this['showExport']();
                    }, _0x5954fd['prototype']['showExport'] = function () {
                        var _0x15a933 = _0x168fd1['default']['getRandomA' + 'rr'](0x0, 0x3, 0x1)[0x0], _0x45f583 = this['list_chaPi' + 'ng']['getChildAt'](0x0), _0x4ed1e8 = _0x45f583['getChildAt'](_0x15a933);
                        _0x4ed1e8 && _0x4ed1e8['onTry']();
                    }, _0x5954fd;
                }(_0x564c25['ui']['dialogs']['ChaPingPan' + 'elUI']);
            _0x54273f['default'] = _0x2bc391;
        },
        {
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../data/RoleInfo': 0x3f,
            '../item/ChaPingItem': 0x48,
            '../manager/EventManager': 0x4b,
            '../manager/ExportGameManager': 0x4c,
            '../manager/UIManager': 0x51,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            '../utils/Utils3d': 0x5d,
            './GameOverPanel': 0x29,
            './OffLinePanel': 0x31
        }
    ],
    0x25: [
        function (_0x2166f7, _0x15fba5, _0x5016cc) {
            'use strict';
            var _0x29f754 = this && this['__extends'] || function () {
                var _0xf6e5bc = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x21d6ff, _0x2bd2f1) {
                    _0x21d6ff['__proto__'] = _0x2bd2f1;
                } || function (_0x467161, _0x29ed7c) {
                    for (var _0x15b61d in _0x29ed7c)
                        _0x29ed7c['hasOwnProp' + 'erty'](_0x15b61d) && (_0x467161[_0x15b61d] = _0x29ed7c[_0x15b61d]);
                };
                return function (_0x5a73b6, _0x148259) {
                    function _0xb6089a() {
                        this['constructo' + 'r'] = _0x5a73b6;
                    }
                    _0xf6e5bc(_0x5a73b6, _0x148259), _0x5a73b6['prototype'] = null === _0x148259 ? Object['create'](_0x148259) : (_0xb6089a['prototype'] = _0x148259['prototype'], new _0xb6089a());
                };
            }();
            Object['defineProp' + 'erty'](_0x5016cc, '__esModule', { 'value': !0x0 });
            var _0x585a54 = _0x2166f7('../ui/laya' + 'MaxUI'), _0x48a7d8 = _0x2166f7('../manager' + '/UIManager'), _0x8da33f = _0x2166f7('../scripts' + '/SpriteSca' + 'le'), _0x2f010d = _0x2166f7('../constan' + 't/enums'), _0x1696fb = _0x2166f7('../utils/M' + 'athUtil'), _0xfa649e = _0x2166f7('../config/' + 'CarDataCon' + 'fig'), _0x112a23 = _0x2166f7('../data/Ro' + 'leInfo'), _0x23184b = _0x2166f7('../manager' + '/EventMana' + 'ger'), _0x25ab4b = _0x2166f7('../utils/D' + 'ataUtil'), _0xd1a349 = _0x2166f7('../BGame/m' + 'gr/BAdMgr'), _0x2d4cb5 = _0x2166f7('../BGame/B' + 'Enum'), _0x602366 = _0x2166f7('./GoldLack' + 'Panel'), _0x9217ee = function (_0xbf7025) {
                    function _0x535ecb() {
                        var _0x4a4767 = _0xbf7025['call'](this) || this;
                        return _0x4a4767['oneIsVideo'] = !0x1, _0x4a4767['proValue'] = 0x0, _0x4a4767;
                    }
                    return _0x29f754(_0x535ecb, _0xbf7025), _0x535ecb['prototype']['onEnable'] = function () {
                        var _0x296ae6 = this;
                        this['btn_chest']['addCompone' + 'ntIntance'](new _0x8da33f['default'](null, function () {
                            _0x296ae6['onAddProVa' + 'lue']();
                        }, _0x2f010d['soundType']['tongYong'])), this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x25ab4b['default']['hideBanner'](), this['init']();
                    }, _0x535ecb['prototype']['init'] = function () {
                        this['proValue'] = 0x0, this['ani1']['play'](0x0, !0x0), this['ani2']['play'](0x0, !0x0), this['ani3']['play'](0x0, !0x0);
                        var _0x311463 = _0x1696fb['default']['getRandom'](0x64);
                        _0x311463 > 0x1e ? (this['oneIsVideo'] = !0x1, Laya['timer']['loop'](0xa, this, this['proPlay'])) : this['oneIsVideo'] = !0x0;
                    }, _0x535ecb['prototype']['onAddProVa' + 'lue'] = function () {
                        this['oneIsVideo'] ? this['playVideo']() : this['proValue'] += 0.2;
                    }, _0x535ecb['prototype']['playVideo'] = function () {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            var _0x38ea3f = _0xfa649e['default']['config_lev' + 'el'][_0x112a23['default']['CustomsDat' + 'a']['length'] - 0x1];
                            _0x112a23['default']['addGold'](_0x38ea3f['freegold']), _0x23184b['default']['getInstanc' + 'e']()['emit'](_0x2f010d['GameEvent']['updataGold'], null), _0x23184b['default']['getInstanc' + 'e']()['emit'](_0x2f010d['GameEvent']['goldOverTw' + 'een'], null), _0x48a7d8['default']['closeDialo' + 'g'](this);
                        });
                    }, _0x535ecb['prototype']['proPlay'] = function () {
                        this['proValue'] < 0.8 && this['proValue'] > 0x0 ? this['proValue'] -= 0.003 : this['proValue'] > 0.8 && (_0x25ab4b['default']['showBanner' + 'Ad'](), Laya['timer']['clear'](this, this['proPlay']), _0x48a7d8['default']['closeDialo' + 'g'](this)), this['pro']['value'] = this['proValue'];
                    }, _0x535ecb['prototype']['onDisable'] = function () {
                        this['ani1']['stop'](), this['ani2']['stop'](), this['ani3']['stop'](), Laya['timer']['clear'](this, this['proPlay']), _0x48a7d8['default']['showDialog'](new _0x602366['default']());
                    }, _0x535ecb;
                }(_0x585a54['ui']['dialogs']['ChestDialo' + 'gUI']);
            _0x5016cc['default'] = _0x9217ee;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../config/CarDataConfig': 0x3b,
            '../constant/enums': 0x3d,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './GoldLackPanel': 0x2c
        }
    ],
    0x26: [
        function (_0x4333ed, _0x376aaf, _0x31e0da) {
            'use strict';
            var _0x5cdd84 = this && this['__extends'] || function () {
                var _0x5077b4 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x59b0c8, _0x13449b) {
                    _0x59b0c8['__proto__'] = _0x13449b;
                } || function (_0x3d022f, _0x179561) {
                    for (var _0x23ffe8 in _0x179561)
                        _0x179561['hasOwnProp' + 'erty'](_0x23ffe8) && (_0x3d022f[_0x23ffe8] = _0x179561[_0x23ffe8]);
                };
                return function (_0x35fa9a, _0x2648ab) {
                    function _0x31291e() {
                        this['constructo' + 'r'] = _0x35fa9a;
                    }
                    _0x5077b4(_0x35fa9a, _0x2648ab), _0x35fa9a['prototype'] = null === _0x2648ab ? Object['create'](_0x2648ab) : (_0x31291e['prototype'] = _0x2648ab['prototype'], new _0x31291e());
                };
            }();
            Object['defineProp' + 'erty'](_0x31e0da, '__esModule', { 'value': !0x0 });
            var _0x489599 = _0x4333ed('../ui/laya' + 'MaxUI'), _0x200a03 = _0x4333ed('../scripts' + '/SpriteSca' + 'le'), _0x59043e = _0x4333ed('../constan' + 't/enums'), _0x3fe981 = _0x4333ed('../prefabs' + '/ExportPre' + 'fabs'), _0x24de92 = _0x4333ed('../platfor' + 'ms/MiniGam' + 'e'), _0x58d8bd = _0x4333ed('../utils/D' + 'ataUtil'), _0x448b00 = _0x4333ed('../config/' + 'Config'), _0x28b338 = _0x4333ed('../utils/M' + 'athUtil'), _0x2e330a = _0x4333ed('../CGame/c' + 'ljdSdk'), _0x4c6ccd = _0x4333ed('../manager' + '/EventMana' + 'ger'), _0x8fe8b6 = _0x4333ed('../manager' + '/UIManager'), _0x2520c3 = _0x4333ed('../BGame/m' + 'gr/BAdMgr'), _0x5d70c9 = _0x4333ed('../data/Ro' + 'leInfo'), _0x1d81b0 = _0x4333ed('../config/' + 'CarDataCon' + 'fig'), _0x195c91 = _0x4333ed('./SelectCu' + 'stomsPanel'), _0x42defd = _0x4333ed('../BGame/B' + 'Enum'), _0x58cf81 = _0x4333ed('../constan' + 't/texts'), _0x42c2fe = _0x4333ed('./ChaPingP' + 'anel'), _0x366600 = function (_0x22ca35) {
                    function _0x4e3ac3() {
                        return _0x22ca35['call'](this) || this;
                    }
                    return _0x5cdd84(_0x4e3ac3, _0x22ca35), _0x4e3ac3['prototype']['onEnable'] = function () {
                        var _0x1afb07 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['btn_jump']['addCompone' + 'ntIntance'](new _0x200a03['default'](null, function () {
                            _0x1afb07['onjump']();
                        }, _0x59043e['soundType']['tongYong'])), this['btn_No']['addCompone' + 'ntIntance'](new _0x200a03['default'](null, function () {
                            _0x1afb07['onNo']();
                        }, _0x59043e['soundType']['guanBi'])), this['btn_retuen']['addCompone' + 'ntIntance'](new _0x200a03['default'](null, function () {
                            _0x1afb07['onReturn']();
                        }, _0x59043e['soundType']['guanBi'])), _0x3fe981['default']['addStage'](this['box'], _0x59043e['ExportId']['collder'], !0x1), this['wuDian'](), _0x24de92['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x4e3ac3['prototype']['wuDian'] = function () {
                        if (this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x2e330a['default']['isCanShare'])
                            this['accidentCl' + 'ickMax'] = _0x28b338['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                        }
                    }, _0x4e3ac3['prototype']['showBanner'] = function () {
                        var _0x2cc150 = _0x58d8bd['default']['showBanner' + 'Ad']();
                        if (_0x2cc150) {
                            var _0x3b2706 = Laya['stage']['height'] - _0x2cc150['getSize']()['height'] - _0x448b00['default']['showBanner'];
                            Laya['Tween']['to'](this['btn_No'], { 'y': _0x3b2706 }, 0x64, Laya['Ease']['strongOut'], Laya['Handler']['create'](this, function () {
                            }));
                        } else
                            this['btn_No']['y'] = Laya['stage']['height'] - this['btn_No']['height'] - 0xf0;
                    }, _0x4e3ac3['prototype']['onNo'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? (_0x4c6ccd['default']['getInstanc' + 'e']()['emit'](_0x59043e['GameEvent']['poseStarGa' + 'me'], null), _0x58d8bd['default']['hideBanner'](), _0x8fe8b6['default']['closeDialo' + 'g'](this)) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x4e3ac3['prototype']['onReturn'] = function () {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            _0x8fe8b6['default']['switchScen' + 'e'](_0x448b00['default']['homeScene']), _0x8fe8b6['default']['closeDialo' + 'g'](this), _0x8fe8b6['default']['showDialog'](new _0x42c2fe['default'](0x2, !0x1));
                        });
                    }, _0x4e3ac3['prototype']['onjump'] = function () {
                        var _0x4015da = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x4015da['jumpSuccee' + 'd']();
                        });
                    }, _0x4e3ac3['prototype']['jumpSuccee' + 'd'] = function () {
                        var _0x5a13d7 = _0x5d70c9['default']['CustomsDat' + 'a'][_0x1d81b0['default']['cumtosNum'] - 0x1];
                        _0x5d70c9['default']['setCustoms' + 'Data']({
                            'id': _0x5a13d7['id'],
                            'star_1': _0x5a13d7['star_1'],
                            'star_2': _0x5a13d7['star_2'],
                            'star_3': _0x5a13d7['star_3']
                        }), _0x5a13d7['id'] == _0x5d70c9['default']['CustomsDat' + 'a']['length'] && _0x5d70c9['default']['addCustoms' + 'Data']({
                            'id': _0x5a13d7['id'] + 0x1,
                            'star_1': !0x1,
                            'star_2': !0x1,
                            'star_3': !0x1
                        }), this['onHome']();
                    }, _0x4e3ac3['prototype']['onHome'] = function () {
                        _0x8fe8b6['default']['closeDialo' + 'g'](this), _0x8fe8b6['default']['switchScen' + 'e'](_0x448b00['default']['homeScene']), _0x24de92['MiniGame']['I']['setUserClo' + 'udStorage'](), _0x2e330a['default']['uploadScor' + 'e'](_0x5d70c9['default']['CustomsDat' + 'a']['length'], _0x24de92['MiniGame']['I']['starAll']()), _0x8fe8b6['default']['showDialog'](new _0x195c91['default']());
                    }, _0x4e3ac3['prototype']['onDisable'] = function () {
                    }, _0x4e3ac3;
                }(_0x489599['ui']['dialogs']['CollderPan' + 'elUI']);
            _0x31e0da['default'] = _0x366600;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24,
            './SelectCustomsPanel': 0x35
        }
    ],
    0x27: [
        function (_0x1b5534, _0x7c5431, _0x59f0b9) {
            'use strict';
            var _0x3ee373 = this && this['__extends'] || function () {
                var _0x19c974 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x52e209, _0x38065a) {
                    _0x52e209['__proto__'] = _0x38065a;
                } || function (_0xc3a9c2, _0xcc2047) {
                    for (var _0x50caaf in _0xcc2047)
                        _0xcc2047['hasOwnProp' + 'erty'](_0x50caaf) && (_0xc3a9c2[_0x50caaf] = _0xcc2047[_0x50caaf]);
                };
                return function (_0x267f3a, _0x34c96b) {
                    function _0x323bda() {
                        this['constructo' + 'r'] = _0x267f3a;
                    }
                    _0x19c974(_0x267f3a, _0x34c96b), _0x267f3a['prototype'] = null === _0x34c96b ? Object['create'](_0x34c96b) : (_0x323bda['prototype'] = _0x34c96b['prototype'], new _0x323bda());
                };
            }();
            Object['defineProp' + 'erty'](_0x59f0b9, '__esModule', { 'value': !0x0 });
            var _0x39d41b = _0x1b5534('./../ui/la' + 'yaMaxUI'), _0x58532f = _0x1b5534('../manager' + '/EventMana' + 'ger'), _0x4d3f9e = _0x1b5534('../constan' + 't/enums'), _0xdd93c4 = _0x1b5534('../config/' + 'CarDataCon' + 'fig'), _0x5b353e = _0x1b5534('../manager' + '/SoundMana' + 'ger'), _0x3fe476 = function (_0x13a450) {
                    function _0x445abe(_0x4c11cd) {
                        var _0x4d4cce = _0x13a450['call'](this) || this;
                        return _0x4d4cce['type'] = 0x0, _0x4d4cce['countDownT' + 'ime'] = 0x4, _0x4d4cce['type'] = _0x4c11cd, _0x4d4cce;
                    }
                    return _0x3ee373(_0x445abe, _0x13a450), _0x445abe['addToStage'] = function (_0x1fddc7) {
                        var _0x23b182 = new _0x445abe(_0x1fddc7);
                        _0x23b182['zOrder'] = 0xa, Laya['stage']['addChild'](_0x23b182);
                    }, _0x445abe['prototype']['onAwake'] = function () {
                        this['pivotX'] = this['width'] / 0x2, this['pivotY'] = this['height'] / 0x2, this['x'] = Laya['stage']['width'] / 0x2, this['y'] = Laya['stage']['height'] / 0x2, this['hideAll'](), this['startCount' + 'Down']();
                    }, _0x445abe['prototype']['startCount' + 'Down'] = function () {
                        Laya['timer']['loop'](0x3e8, this, this['onCountDow' + 'n']);
                    }, _0x445abe['prototype']['hideAll'] = function () {
                        this['imgThree']['visible'] = !0x1, this['imgTwo']['visible'] = !0x1, this['imgOne']['visible'] = !0x1, this['imgStart']['visible'] = !0x1;
                    }, _0x445abe['prototype']['tweenImg'] = function (_0x7aaf98) {
                        Laya['Tween']['to'](_0x7aaf98, {
                            'alpha': 0x0,
                            'scaleX': 0.5,
                            'scaleY': 0.5
                        }, 0x3e8);
                    }, _0x445abe['prototype']['tweenImg4'] = function (_0x435e4f) {
                        0x4 != _0xdd93c4['default']['checkpoint' + 'type'] && Laya['Tween']['to'](_0x435e4f, {
                            'alpha': 0x0,
                            'scaleX': 0.5,
                            'scaleY': 0.5
                        }, 0x3e8);
                    }, _0x445abe['prototype']['onCountDow' + 'n'] = function () {
                        --this['countDownT' + 'ime'];
                        if (this['hideAll'](), this['countDownT' + 'ime'] >= 0x0) {
                            if (0x3 == this['countDownT' + 'ime'])
                                _0x5b353e['default']['playEffect'](_0x4d3f9e['SoundName']['DaoJiShi23']), this['imgThree']['visible'] = !0x0, this['tweenImg'](this['imgThree']);
                            else {
                                if (0x2 == this['countDownT' + 'ime'])
                                    _0x5b353e['default']['stopEffect'](_0x4d3f9e['SoundName']['DaoJiShi23']), _0x5b353e['default']['playEffect'](_0x4d3f9e['SoundName']['DaoJiShi23']), this['imgTwo']['visible'] = !0x0, this['tweenImg'](this['imgTwo']);
                                else {
                                    if (0x1 == this['countDownT' + 'ime'])
                                        _0x5b353e['default']['playEffect'](_0x4d3f9e['SoundName']['DaoJiShi1']), this['imgOne']['visible'] = !0x0, this['tweenImg'](this['imgOne']);
                                    else
                                        switch (this['imgStart']['visible'] = !0x0, 0x4 == _0xdd93c4['default']['checkpoint' + 'type'] ? this['imgStart']['skin'] = 'panelUI/ac' + 'tion1.png' : this['imgStart']['skin'] = 'panelUI/ka' + 'ishi.png', this['tweenImg4'](this['imgStart']), this['type']) {
                                        case _0x4d3f9e['CountDownT' + 'ype']['StartGame']:
                                            _0x58532f['default']['getInstanc' + 'e']()['emit'](_0x4d3f9e['GameEvent']['CountDown'], null);
                                            break;
                                        case _0x4d3f9e['CountDownT' + 'ype']['ResumeGame']:
                                            _0x58532f['default']['getInstanc' + 'e']()['emit'](_0x4d3f9e['GameEvent']['poseStarGa' + 'me'], null);
                                            break;
                                        case _0x4d3f9e['CountDownT' + 'ype']['RestartGam' + 'e']:
                                            _0x58532f['default']['getInstanc' + 'e']()['emit'](_0x4d3f9e['GameEvent']['CountDown'], null);
                                        }
                                }
                            }
                        } else
                            this['destroy'](!0x0);
                    }, _0x445abe['prototype']['onDestroy'] = function () {
                        Laya['timer']['clear'](this, this['onCountDow' + 'n']);
                    }, _0x445abe;
                }(_0x39d41b['ui']['prefabs']['daojishiUI']);
            _0x59f0b9['default'] = _0x3fe476;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../constant/enums': 0x3d,
            '../manager/EventManager': 0x4b,
            '../manager/SoundManager': 0x50,
            './../ui/layaMaxUI': 0x5a
        }
    ],
    0x28: [
        function (_0xe090b0, _0x2e3f40, _0x3d9f93) {
            'use strict';
            var _0x3064d7 = this && this['__extends'] || function () {
                    var _0x320354 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x485e06, _0x128cf2) {
                        _0x485e06['__proto__'] = _0x128cf2;
                    } || function (_0x4355cc, _0x5c2185) {
                        for (var _0x134560 in _0x5c2185)
                            _0x5c2185['hasOwnProp' + 'erty'](_0x134560) && (_0x4355cc[_0x134560] = _0x5c2185[_0x134560]);
                    };
                    return function (_0x2f7046, _0x29e8f6) {
                        function _0x28d961() {
                            this['constructo' + 'r'] = _0x2f7046;
                        }
                        _0x320354(_0x2f7046, _0x29e8f6), _0x2f7046['prototype'] = null === _0x29e8f6 ? Object['create'](_0x29e8f6) : (_0x28d961['prototype'] = _0x29e8f6['prototype'], new _0x28d961());
                    };
                }(), _0x52718b = this && this['__awaiter'] || function (_0x5cec7e, _0x1eead6, _0x39c391, _0x4d986d) {
                    return new (_0x39c391 || (_0x39c391 = Promise))(function (_0x313ebd, _0x4c33b4) {
                        function _0x24aa6d(_0x1b9877) {
                            try {
                                _0x471cdf(_0x4d986d['next'](_0x1b9877));
                            } catch (_0x1acce3) {
                                _0x4c33b4(_0x1acce3);
                            }
                        }
                        function _0xe1a40e(_0x2ccf82) {
                            try {
                                _0x471cdf(_0x4d986d['throw'](_0x2ccf82));
                            } catch (_0x2a254f) {
                                _0x4c33b4(_0x2a254f);
                            }
                        }
                        function _0x471cdf(_0x2ca3cb) {
                            _0x2ca3cb['done'] ? _0x313ebd(_0x2ca3cb['value']) : new _0x39c391(function (_0x215d07) {
                                _0x215d07(_0x2ca3cb['value']);
                            })['then'](_0x24aa6d, _0xe1a40e);
                        }
                        _0x471cdf((_0x4d986d = _0x4d986d['apply'](_0x5cec7e, _0x1eead6 || []))['next']());
                    });
                }, _0x3590dc = this && this['__generato' + 'r'] || function (_0x37b6f7, _0x2ffc07) {
                    function _0x2fadcf(_0x229060) {
                        return function (_0xfc1eed) {
                            return _0x2f377a([
                                _0x229060,
                                _0xfc1eed
                            ]);
                        };
                    }
                    function _0x2f377a(_0xbb8432) {
                        if (_0x19b630)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x4e0543;)
                            try {
                                if (_0x19b630 = 0x1, _0x666d84 && (_0xfed821 = 0x2 & _0xbb8432[0x0] ? _0x666d84['return'] : _0xbb8432[0x0] ? _0x666d84['throw'] || ((_0xfed821 = _0x666d84['return']) && _0xfed821['call'](_0x666d84), 0x0) : _0x666d84['next']) && !(_0xfed821 = _0xfed821['call'](_0x666d84, _0xbb8432[0x1]))['done'])
                                    return _0xfed821;
                                switch (_0x666d84 = 0x0, _0xfed821 && (_0xbb8432 = [
                                        0x2 & _0xbb8432[0x0],
                                        _0xfed821['value']
                                    ]), _0xbb8432[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0xfed821 = _0xbb8432;
                                    break;
                                case 0x4:
                                    return _0x4e0543['label']++, {
                                        'value': _0xbb8432[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x4e0543['label']++, _0x666d84 = _0xbb8432[0x1], _0xbb8432 = [0x0];
                                    continue;
                                case 0x7:
                                    _0xbb8432 = _0x4e0543['ops']['pop'](), _0x4e0543['trys']['pop']();
                                    continue;
                                default:
                                    if (_0xfed821 = _0x4e0543['trys'], !(_0xfed821 = _0xfed821['length'] > 0x0 && _0xfed821[_0xfed821['length'] - 0x1]) && (0x6 === _0xbb8432[0x0] || 0x2 === _0xbb8432[0x0])) {
                                        _0x4e0543 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0xbb8432[0x0] && (!_0xfed821 || _0xbb8432[0x1] > _0xfed821[0x0] && _0xbb8432[0x1] < _0xfed821[0x3])) {
                                        _0x4e0543['label'] = _0xbb8432[0x1];
                                        break;
                                    }
                                    if (0x6 === _0xbb8432[0x0] && _0x4e0543['label'] < _0xfed821[0x1]) {
                                        _0x4e0543['label'] = _0xfed821[0x1], _0xfed821 = _0xbb8432;
                                        break;
                                    }
                                    if (_0xfed821 && _0x4e0543['label'] < _0xfed821[0x2]) {
                                        _0x4e0543['label'] = _0xfed821[0x2], _0x4e0543['ops']['push'](_0xbb8432);
                                        break;
                                    }
                                    _0xfed821[0x2] && _0x4e0543['ops']['pop'](), _0x4e0543['trys']['pop']();
                                    continue;
                                }
                                _0xbb8432 = _0x2ffc07['call'](_0x37b6f7, _0x4e0543);
                            } catch (_0x4c65bd) {
                                _0xbb8432 = [
                                    0x6,
                                    _0x4c65bd
                                ], _0x666d84 = 0x0;
                            } finally {
                                _0x19b630 = _0xfed821 = 0x0;
                            }
                        if (0x5 & _0xbb8432[0x0])
                            throw _0xbb8432[0x1];
                        return {
                            'value': _0xbb8432[0x0] ? _0xbb8432[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x19b630, _0x666d84, _0xfed821, _0x25a80b, _0x4e0543 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0xfed821[0x0])
                                    throw _0xfed821[0x1];
                                return _0xfed821[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x25a80b = {
                        'next': _0x2fadcf(0x0),
                        'throw': _0x2fadcf(0x1),
                        'return': _0x2fadcf(0x2)
                    }, 'function' == typeof Symbol && (_0x25a80b[Symbol['iterator']] = function () {
                        return this;
                    }), _0x25a80b;
                };
            Object['defineProp' + 'erty'](_0x3d9f93, '__esModule', { 'value': !0x0 });
            var _0x39fd1b = _0xe090b0('../ui/laya' + 'MaxUI'), _0x1f07f6 = _0xe090b0('../scripts' + '/SpriteSca' + 'le'), _0x5960ee = _0xe090b0('../constan' + 't/enums'), _0x363fee = _0xe090b0('../manager' + '/UIManager'), _0x5d099b = _0xe090b0('../config/' + 'Config'), _0x384a39 = _0xe090b0('../manager' + '/ExportGam' + 'eManager'), _0x516ee1 = _0xe090b0('../utils/M' + 'athUtil'), _0x3687a3 = _0xe090b0('../utils/D' + 'ataUtil'), _0x519fc6 = _0xe090b0('../constan' + 't/texts'), _0x132447 = _0xe090b0('../config/' + 'CarDataCon' + 'fig'), _0x407de5 = _0xe090b0('../item/Ga' + 'meCentreIt' + 'em'), _0x26b6aa = _0xe090b0('./ChaPingP' + 'anel'), _0x20b450 = function (_0xfd71f9) {
                    function _0xe6874d(_0x1583c9) {
                        var _0x50011c = _0xfd71f9['call'](this) || this;
                        return _0x50011c['showType'] = 0x2, _0x50011c['showType'] = _0x1583c9, _0x50011c;
                    }
                    return _0x3064d7(_0xe6874d, _0xfd71f9), _0xe6874d['prototype']['onEnable'] = function () {
                        _0x363fee['default']['closeDialo' + 'g'](this);
                    }, _0xe6874d['prototype']['initList'] = function () {
                        return _0x52718b(this, void 0x0, void 0x0, function () {
                            var _0x273993, _0x214c0b, _0x2751c1, _0x164c40, _0x542182;
                            return _0x3590dc(this, function (_0x22a56e) {
                                switch (_0x22a56e['label']) {
                                case 0x0:
                                    return _0x5d099b['default']['platformTy' + 'pr'] != _0x5960ee['PlatformTy' + 'pe']['wx'] ? [0x2] : (_0x273993 = this, [
                                        0x4,
                                        _0x384a39['default']['Instance']()['getFlow']('游戏中心')
                                    ]);
                                case 0x1:
                                    for (_0x273993['listData'] = _0x22a56e['sent'](), _0x214c0b = [], _0x2751c1 = _0x516ee1['default']['getRandomA' + 'rr'](0x0, this['listData']['applets']['length'] - 0x1, this['listData']['applets']['length']), _0x164c40 = 0x0; _0x164c40 < _0x2751c1['length']; _0x164c40++)
                                        _0x542182 = _0x2751c1[_0x164c40], _0x214c0b['push'](this['listData']['applets'][_0x542182]);
                                    return this['list_gameC' + 'entre']['hScrollBar' + 'Skin'] = '', this['list_gameC' + 'entre']['itemRender'] = _0x407de5['default'], this['list_gameC' + 'entre']['array'] = _0x214c0b, this['list_gameC' + 'entre']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onUpdateIt' + 'em']), this['list_gameC' + 'entre']['refresh'](), this['m_type'] = 0x0, Laya['timer']['frameLoop'](0x1, this, this['scrollerCa' + 'll']), [0x2];
                                }
                            });
                        });
                    }, _0xe6874d['prototype']['onUpdateIt' + 'em'] = function (_0xecacd7, _0x3da12e) {
                        _0xecacd7['setData'](), 0x2 == this['showType'] ? _0xecacd7['export'](_0x5d099b['default']['exportGame'][_0x5960ee['ExportId']['quxiaoCont' + 're']]) : _0xecacd7['export'](_0x5d099b['default']['exportGame'][_0x5960ee['ExportId']['gameOverCo' + 'ntre']]);
                    }, _0xe6874d['prototype']['scrollerCa' + 'll'] = function () {
                        0x0 == this['m_type'] ? (this['list_gameC' + 'entre']['scrollBar']['value'] += 0x1, this['list_gameC' + 'entre']['scrollBar']['value'] >= this['list_gameC' + 'entre']['scrollBar']['max'] && (this['m_type'] = 0x1)) : 0x1 == this['m_type'] && (this['list_gameC' + 'entre']['scrollBar']['value'] -= 0x1, this['list_gameC' + 'entre']['scrollBar']['value'] <= 0x0 && (this['m_type'] = 0x0));
                    }, _0xe6874d['prototype']['onRetuen'] = function () {
                        _0x363fee['default']['closeDialo' + 'g'](this);
                    }, _0xe6874d['prototype']['onDisable'] = function () {
                        0x1 == this['showType'] ? _0x363fee['default']['showDialog'](new _0x26b6aa['default'](0x2, !0x0)) : _0x363fee['default']['showDialog'](new _0x26b6aa['default'](0x2, !0x1));
                    }, _0xe6874d;
                }(_0x39fd1b['ui']['dialogs']['GameCentre' + 'PanelUI']);
            _0x3d9f93['default'] = _0x20b450;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../item/GameCentreItem': 0x4a,
            '../manager/ExportGameManager': 0x4c,
            '../manager/UIManager': 0x51,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24
        }
    ],
    0x29: [
        function (_0x33ebc9, _0x17e944, _0x394b0d) {
            'use strict';
            var _0x494e82 = this && this['__extends'] || function () {
                var _0x513e49 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x5e7fcf, _0x401a0b) {
                    _0x5e7fcf['__proto__'] = _0x401a0b;
                } || function (_0x262e44, _0x1ed13d) {
                    for (var _0x33d00b in _0x1ed13d)
                        _0x1ed13d['hasOwnProp' + 'erty'](_0x33d00b) && (_0x262e44[_0x33d00b] = _0x1ed13d[_0x33d00b]);
                };
                return function (_0x43536f, _0x4f8b93) {
                    function _0x361a0d() {
                        this['constructo' + 'r'] = _0x43536f;
                    }
                    _0x513e49(_0x43536f, _0x4f8b93), _0x43536f['prototype'] = null === _0x4f8b93 ? Object['create'](_0x4f8b93) : (_0x361a0d['prototype'] = _0x4f8b93['prototype'], new _0x361a0d());
                };
            }();
            Object['defineProp' + 'erty'](_0x394b0d, '__esModule', { 'value': !0x0 });
            var _0x1b726a = _0x33ebc9('../ui/laya' + 'MaxUI'), _0x474357 = _0x33ebc9('../config/' + 'CarDataCon' + 'fig'), _0x52572d = _0x33ebc9('../scripts' + '/SpriteSca' + 'le'), _0x29fb28 = _0x33ebc9('../prefabs' + '/ExportPre' + 'fabs'), _0x3ae5d1 = _0x33ebc9('../constan' + 't/enums'), _0x1b155d = _0x33ebc9('../manager' + '/UIManager'), _0x565b18 = _0x33ebc9('../config/' + 'Config'), _0x7cbfbe = _0x33ebc9('../data/Ro' + 'leInfo'), _0x1e0283 = _0x33ebc9('../manager' + '/EventMana' + 'ger'), _0x5d6014 = _0x33ebc9('./SelectCu' + 'stomsPanel'), _0x583f06 = _0x33ebc9('../platfor' + 'ms/MiniGam' + 'e'), _0x253722 = _0x33ebc9('../CGame/c' + 'ljdSdk'), _0x2ff1bd = _0x33ebc9('../constan' + 't/texts'), _0x4d51f4 = _0x33ebc9('./ChaPingP' + 'anel'), _0x3fea43 = _0x33ebc9('../utils/M' + 'athUtil'), _0x266a23 = _0x33ebc9('./LuckyPan' + 'el'), _0x593271 = _0x33ebc9('../utils/D' + 'ataUtil'), _0x1ae600 = _0x33ebc9('../BGame/m' + 'gr/BShareM' + 'gr'), _0x4a340a = _0x33ebc9('../BGame/B' + 'Enum'), _0x391bac = _0x33ebc9('../BGame/m' + 'gr/BAdMgr'), _0x28851e = _0x33ebc9('./ChestDia' + 'log'), _0x133aa9 = function (_0x16d26c) {
                    function _0x166c7f() {
                        var _0x4c164a = _0x16d26c['call'](this) || this;
                        return _0x4c164a['getStarNum'] = 0x0, _0x4c164a['getGoldTim' + 'es'] = 0x1, _0x4c164a['getGoldNum'] = 0x0, _0x4c164a;
                    }
                    return _0x494e82(_0x166c7f, _0x16d26c), _0x166c7f['prototype']['onEnable'] = function () {
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['onBtn'](), this['init']();
                    }, _0x166c7f['prototype']['onBtn'] = function () {
                        var _0x3e6eba = this;
                        switch (this['btn_getGol' + 'd']['addCompone' + 'ntIntance'](new _0x52572d['default'](null, function () {
                                _0x3e6eba['onPass']();
                            }, _0x3ae5d1['soundType']['tongYong'])), this['btn_double']['addCompone' + 'ntIntance'](new _0x52572d['default'](null, function () {
                                _0x3e6eba['palyShowVi' + 'deoAd'](0x1);
                            }, _0x3ae5d1['soundType']['tongYong'])), this['btn_upgrad' + 'eCar']['addCompone' + 'ntIntance'](new _0x52572d['default'](null, function () {
                                _0x3e6eba['onUpgradeC' + 'ar']();
                            }, _0x3ae5d1['soundType']['tongYong'])), this['btn_skipCu' + 'stoms']['addCompone' + 'ntIntance'](new _0x52572d['default'](null, function () {
                                _0x3e6eba['palyShowVi' + 'deoAd'](0x2);
                            }, _0x3ae5d1['soundType']['tongYong'])), _0x1e0283['default']['getInstanc' + 'e']()['on'](_0x3ae5d1['GameEvent']['gameOverDo' + 'uble'], this['getDouble'], this), _0x1e0283['default']['getInstanc' + 'e']()['on'](_0x3ae5d1['GameEvent']['jump'], this['shareWin'], this), this['wuDian'](), _0x583f06['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this), _0x474357['default']['cumtosNum']) {
                        case 0x1:
                            _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['DiyiguanJi' + 'eSuanJiemi' + 'an']);
                            break;
                        case 0x2:
                            _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['erguanJieS' + 'uan']);
                            break;
                        case 0x3:
                            _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['sanguanjie' + 'suan']);
                        }
                    }, _0x166c7f['prototype']['wuDian'] = function () {
                        if (this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x253722['default']['isCanShare'])
                            this['accidentCl' + 'ickMax'] = _0x3fea43['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                        }
                    }, _0x166c7f['prototype']['showBanner'] = function () {
                    }, _0x166c7f['prototype']['offBtn'] = function () {
                        this['btn_getGol' + 'd']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onPass']), this['btn_double']['off'](Laya['Event']['MOUSE_DOWN'], this, this['palyShowVi' + 'deoAd']), this['btn_upgrad' + 'eCar']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onUpgradeC' + 'ar']), this['btn_skipCu' + 'stoms']['off'](Laya['Event']['MOUSE_DOWN'], this, this['palyShowVi' + 'deoAd']);
                    }, _0x166c7f['prototype']['init'] = function () {
                        if (this['getStarNum'] = 0x0, this['getGoldTim' + 'es'] = 0x1, this['getGoldNum'] = 0x0, this['box_defeat' + 'ed']['visible'] = !0x1, this['box_victor' + 'y']['visible'] = !0x1, _0x474357['default']['VictoryAnd' + 'Defeated']) {
                            this['box_victor' + 'y']['visible'] = !0x0, this['btn_getGol' + 'd']['text'] = '>>Claim<<', _0x29fb28['default']['addStage'](this['box_victor' + 'y'], _0x3ae5d1['ExportId']['shengLi'], !0x1), this['img_star_1']['skin'] = 'panelUI/st' + 'ar_2.png', this['img_star_2']['skin'] = 'panelUI/st' + 'ar_2.png', this['img_star_3']['skin'] = 'panelUI/st' + 'ar_2.png';
                            for (var _0x18ddbe = 0x1; 0x3 >= _0x18ddbe; _0x18ddbe++) {
                                var _0x562753 = _0x474357['default']['starIstrue' + '_' + _0x18ddbe];
                                _0x562753 && (this['getStarNum']++, this['img_star_' + this['getStarNum']]['skin'] = 'panelUI/st' + 'ar.png');
                            }
                            0x2 == this['getStarNum'] ? this['getGoldTim' + 'es'] = _0x474357['default']['twostargol' + 'd'] : 0x3 == this['getStarNum'] && (this['getGoldTim' + 'es'] = _0x474357['default']['threestarg' + 'old']), this['getGoldNum'] = Math['floor'](_0x474357['default']['upgold'] * this['getGoldTim' + 'es']), this['lab_getGol' + 'd']['text'] = this['getGoldNum'] + '';
                        } else
                            this['box_defeat' + 'ed']['visible'] = !0x0, this['btn_getGol' + 'd']['text'] = '>>Give\x20Up<' + '<', _0x29fb28['default']['addStage'](this['box_defeat' + 'ed'], _0x3ae5d1['ExportId']['shiBai'], !0x1);
                    }, _0x166c7f['prototype']['palyShowVi' + 'deoAd'] = function (_0x9ae651) {
                        var _0x3735fe = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            0x1 == _0x9ae651 ? _0x3735fe['getDouble'](!0x0) : _0x3735fe['shareWin'](!0x0);
                        });
                    }, _0x166c7f['prototype']['doubleShar' + 'e'] = function () {
                    }, _0x166c7f['prototype']['getDouble'] = function (_0x2c74f1) {
                        void 0x0 === _0x2c74f1 && (_0x2c74f1 = !0x1), _0x2c74f1 ? this['onDouble']() : (_0x474357['default']['showTimer'] - _0x474357['default']['hideTimer']) / 0x3e8 >= _0x474357['default']['share'] ? this['onDouble']() : _0x1b155d['default']['showToast'](_0x2ff1bd['GameText']['ShareFailT' + 'ip']);
                    }, _0x166c7f['prototype']['onDouble'] = function () {
                        _0x7cbfbe['default']['addGold'](this['getGoldNum']), this['jiesuo']();
                    }, _0x166c7f['prototype']['onUpgradeC' + 'ar'] = function () {
                        _0x1b155d['default']['switchScen' + 'e'](_0x565b18['default']['homeScene']), _0x1b155d['default']['closeDialo' + 'g'](this);
                    }, _0x166c7f['prototype']['jumpShare'] = function () {
                    }, _0x166c7f['prototype']['shareWin'] = function (_0x27a2f5) {
                        void 0x0 === _0x27a2f5 && (_0x27a2f5 = !0x1), _0x27a2f5 ? this['onSkipCust' + 'oms']() : (_0x474357['default']['showTimer'] - _0x474357['default']['hideTimer']) / 0x3e8 >= _0x474357['default']['share'] ? this['onSkipCust' + 'oms']() : _0x1b155d['default']['showToast'](_0x2ff1bd['GameText']['ShareFailT' + 'ip']);
                    }, _0x166c7f['prototype']['onSkipCust' + 'oms'] = function () {
                        var _0x4e8a07 = _0x7cbfbe['default']['CustomsDat' + 'a'][_0x474357['default']['cumtosNum'] - 0x1];
                        _0x7cbfbe['default']['CustomsDat' + 'a'][_0x474357['default']['cumtosNum'] - 0x1] = {
                            'id': _0x4e8a07['id'],
                            'star_1': _0x4e8a07['star_1'],
                            'star_2': _0x4e8a07['star_2'],
                            'star_3': _0x4e8a07['star_3']
                        }, _0x7cbfbe['default']['setCustoms' + 'Data']({
                            'id': _0x4e8a07['id'],
                            'star_1': _0x4e8a07['star_1'],
                            'star_2': _0x4e8a07['star_2'],
                            'star_3': _0x4e8a07['star_3']
                        }), _0x4e8a07['id'] == _0x7cbfbe['default']['CustomsDat' + 'a']['length'] && _0x7cbfbe['default']['addCustoms' + 'Data']({
                            'id': _0x4e8a07['id'] + 0x1,
                            'star_1': !0x1,
                            'star_2': !0x1,
                            'star_3': !0x1
                        }), this['jiesuo']();
                    }, _0x166c7f['prototype']['onPass'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? this['jiesuo']() : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x166c7f['prototype']['jiesuo'] = function () {
                        if (_0x474357['default']['VictoryAnd' + 'Defeated']) {
                            _0x7cbfbe['default']['addGold'](this['getGoldNum']);
                            var _0x5dd989 = {
                                    'istrue': _0x474357['default']['VictoryAnd' + 'Defeated'],
                                    'star_1': _0x474357['default']['starIstrue' + '_1'],
                                    'star_2': _0x474357['default']['starIstrue' + '_2'],
                                    'star_3': _0x474357['default']['starIstrue' + '_3'],
                                    'cumtosNum': _0x474357['default']['cumtosNum'],
                                    'chapterNum': _0x474357['default']['chapterNum']
                                }, _0xc36a54 = _0x7cbfbe['default']['CustomsDat' + 'a'][_0x5dd989['cumtosNum'] - 0x1];
                            _0x474357['default']['starIstrue' + '_1'] && (_0xc36a54['star_1'] = !0x0), _0x474357['default']['starIstrue' + '_2'] && (_0xc36a54['star_2'] = !0x0), _0x474357['default']['starIstrue' + '_3'] && (_0xc36a54['star_3'] = !0x0), _0x7cbfbe['default']['setCustoms' + 'Data']({
                                'id': _0xc36a54['id'],
                                'star_1': _0xc36a54['star_1'],
                                'star_2': _0xc36a54['star_2'],
                                'star_3': _0xc36a54['star_3']
                            }), _0xc36a54['id'] == _0x7cbfbe['default']['CustomsDat' + 'a']['length'] && _0x7cbfbe['default']['addCustoms' + 'Data']({
                                'id': _0xc36a54['id'] + 0x1,
                                'star_1': !0x1,
                                'star_2': !0x1,
                                'star_3': !0x1
                            }), _0x1e0283['default']['getInstanc' + 'e']()['emit'](_0x3ae5d1['GameEvent']['updataGold'], null), _0x1e0283['default']['getInstanc' + 'e']()['emit'](_0x3ae5d1['GameEvent']['goldOverTw' + 'een'], null);
                        }
                        _0x1b155d['default']['closeDialo' + 'g'](this), _0x1b155d['default']['switchScen' + 'e'](_0x565b18['default']['homeScene']), _0x583f06['MiniGame']['I']['setUserClo' + 'udStorage'](), _0x253722['default']['uploadScor' + 'e'](_0x7cbfbe['default']['CustomsDat' + 'a']['length'], _0x583f06['MiniGame']['I']['starAll']()), _0x1b155d['default']['showDialog'](new _0x5d6014['default']());
                    }, _0x166c7f['prototype']['onDisable'] = function () {
                        _0x593271['default']['hideBanner']();
                        var _0xf99b7b = _0x593271['default']['contrastUs' + 'erHaveCarI' + 'strue'](), _0x1a98ab = _0x3fea43['default']['getRandom'](0x64);
                        if (_0x253722['default']['isCanBxMis' + 'take'])
                            _0x1b155d['default']['showDialog'](new _0x28851e['default']());
                        else {
                            if (_0x1a98ab <= _0x474357['default']['endlucky'] && _0xf99b7b && _0x7cbfbe['default']['CustomsDat' + 'a']['length'] >= 0x2)
                                _0x1b155d['default']['showDialog'](new _0x266a23['default'](0x2));
                            else {
                                if (_0x253722['default']['isCanDemo']) {
                                    switch (_0x474357['default']['cumtosNum']) {
                                    case 0x1:
                                        _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['DiyiguanFa' + 'nhuiGUanka' + 'JIemian']);
                                        break;
                                    case 0x2:
                                        _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['erguanFanh' + 'uiGUankaji' + 'emian']);
                                        break;
                                    case 0x3:
                                        _0x593271['default']['newDot'](_0x2ff1bd['GetDotText']['sanguanfan' + 'huiguanka']);
                                    }
                                    _0x1b155d['default']['showDialog'](new _0x4d51f4['default'](0x2, !0x1));
                                }
                            }
                        }
                        _0x474357['default']['shareType'] = _0x3ae5d1['shareType']['not'], this['offBtn'](), _0x1e0283['default']['getInstanc' + 'e']()['off'](_0x3ae5d1['GameEvent']['gameOverDo' + 'uble'], this['getDouble'], this), _0x1e0283['default']['getInstanc' + 'e']()['off'](_0x3ae5d1['GameEvent']['jump'], this['shareWin'], this);
                    }, _0x166c7f;
                }(_0x1b726a['ui']['dialogs']['GameOverPa' + 'nelUI']);
            _0x394b0d['default'] = _0x133aa9;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24,
            './ChestDialog': 0x25,
            './LuckyPanel': 0x30,
            './SelectCustomsPanel': 0x35
        }
    ],
    0x2a: [
        function (_0xe130e6, _0x19c3e9, _0x2f9229) {
            'use strict';
            var _0x72e30c = this && this['__extends'] || function () {
                    var _0x30a8a5 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0xc28036, _0x5ed42b) {
                        _0xc28036['__proto__'] = _0x5ed42b;
                    } || function (_0x1e72a5, _0xa342b2) {
                        for (var _0x2da1fc in _0xa342b2)
                            _0xa342b2['hasOwnProp' + 'erty'](_0x2da1fc) && (_0x1e72a5[_0x2da1fc] = _0xa342b2[_0x2da1fc]);
                    };
                    return function (_0x4e1f4f, _0x14eac3) {
                        function _0x47776f() {
                            this['constructo' + 'r'] = _0x4e1f4f;
                        }
                        _0x30a8a5(_0x4e1f4f, _0x14eac3), _0x4e1f4f['prototype'] = null === _0x14eac3 ? Object['create'](_0x14eac3) : (_0x47776f['prototype'] = _0x14eac3['prototype'], new _0x47776f());
                    };
                }(), _0x40f7ae = this && this['__awaiter'] || function (_0x52f2a5, _0x258e29, _0x8117ec, _0xd6ac0e) {
                    return new (_0x8117ec || (_0x8117ec = Promise))(function (_0x4e0597, _0x10def1) {
                        function _0x15cf33(_0xa4193d) {
                            try {
                                _0x2e48de(_0xd6ac0e['next'](_0xa4193d));
                            } catch (_0x42619b) {
                                _0x10def1(_0x42619b);
                            }
                        }
                        function _0x166a0f(_0x13c0ff) {
                            try {
                                _0x2e48de(_0xd6ac0e['throw'](_0x13c0ff));
                            } catch (_0x577a1e) {
                                _0x10def1(_0x577a1e);
                            }
                        }
                        function _0x2e48de(_0x2e6087) {
                            _0x2e6087['done'] ? _0x4e0597(_0x2e6087['value']) : new _0x8117ec(function (_0x27473b) {
                                _0x27473b(_0x2e6087['value']);
                            })['then'](_0x15cf33, _0x166a0f);
                        }
                        _0x2e48de((_0xd6ac0e = _0xd6ac0e['apply'](_0x52f2a5, _0x258e29 || []))['next']());
                    });
                }, _0x532ce3 = this && this['__generato' + 'r'] || function (_0x108bbf, _0x22db94) {
                    function _0x380d0b(_0x273175) {
                        return function (_0x3601cd) {
                            return _0x3a62e1([
                                _0x273175,
                                _0x3601cd
                            ]);
                        };
                    }
                    function _0x3a62e1(_0x11d3fb) {
                        if (_0x3d398e)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x2e08cb;)
                            try {
                                if (_0x3d398e = 0x1, _0x2f9121 && (_0x2096b7 = 0x2 & _0x11d3fb[0x0] ? _0x2f9121['return'] : _0x11d3fb[0x0] ? _0x2f9121['throw'] || ((_0x2096b7 = _0x2f9121['return']) && _0x2096b7['call'](_0x2f9121), 0x0) : _0x2f9121['next']) && !(_0x2096b7 = _0x2096b7['call'](_0x2f9121, _0x11d3fb[0x1]))['done'])
                                    return _0x2096b7;
                                switch (_0x2f9121 = 0x0, _0x2096b7 && (_0x11d3fb = [
                                        0x2 & _0x11d3fb[0x0],
                                        _0x2096b7['value']
                                    ]), _0x11d3fb[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x2096b7 = _0x11d3fb;
                                    break;
                                case 0x4:
                                    return _0x2e08cb['label']++, {
                                        'value': _0x11d3fb[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x2e08cb['label']++, _0x2f9121 = _0x11d3fb[0x1], _0x11d3fb = [0x0];
                                    continue;
                                case 0x7:
                                    _0x11d3fb = _0x2e08cb['ops']['pop'](), _0x2e08cb['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x2096b7 = _0x2e08cb['trys'], !(_0x2096b7 = _0x2096b7['length'] > 0x0 && _0x2096b7[_0x2096b7['length'] - 0x1]) && (0x6 === _0x11d3fb[0x0] || 0x2 === _0x11d3fb[0x0])) {
                                        _0x2e08cb = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x11d3fb[0x0] && (!_0x2096b7 || _0x11d3fb[0x1] > _0x2096b7[0x0] && _0x11d3fb[0x1] < _0x2096b7[0x3])) {
                                        _0x2e08cb['label'] = _0x11d3fb[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x11d3fb[0x0] && _0x2e08cb['label'] < _0x2096b7[0x1]) {
                                        _0x2e08cb['label'] = _0x2096b7[0x1], _0x2096b7 = _0x11d3fb;
                                        break;
                                    }
                                    if (_0x2096b7 && _0x2e08cb['label'] < _0x2096b7[0x2]) {
                                        _0x2e08cb['label'] = _0x2096b7[0x2], _0x2e08cb['ops']['push'](_0x11d3fb);
                                        break;
                                    }
                                    _0x2096b7[0x2] && _0x2e08cb['ops']['pop'](), _0x2e08cb['trys']['pop']();
                                    continue;
                                }
                                _0x11d3fb = _0x22db94['call'](_0x108bbf, _0x2e08cb);
                            } catch (_0x5a9e99) {
                                _0x11d3fb = [
                                    0x6,
                                    _0x5a9e99
                                ], _0x2f9121 = 0x0;
                            } finally {
                                _0x3d398e = _0x2096b7 = 0x0;
                            }
                        if (0x5 & _0x11d3fb[0x0])
                            throw _0x11d3fb[0x1];
                        return {
                            'value': _0x11d3fb[0x0] ? _0x11d3fb[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x3d398e, _0x2f9121, _0x2096b7, _0x535dd8, _0x2e08cb = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x2096b7[0x0])
                                    throw _0x2096b7[0x1];
                                return _0x2096b7[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x535dd8 = {
                        'next': _0x380d0b(0x0),
                        'throw': _0x380d0b(0x1),
                        'return': _0x380d0b(0x2)
                    }, 'function' == typeof Symbol && (_0x535dd8[Symbol['iterator']] = function () {
                        return this;
                    }), _0x535dd8;
                };
            Object['defineProp' + 'erty'](_0x2f9229, '__esModule', { 'value': !0x0 });
            var _0x53171a = _0xe130e6('../ui/laya' + 'MaxUI'), _0x5297eb = _0xe130e6('../game/Ga' + 'meControl'), _0x152025 = _0xe130e6('../config/' + 'Config'), _0x2f2a4f = _0xe130e6('../config/' + 'CarDataCon' + 'fig'), _0x303fbf = _0xe130e6('../constan' + 't/enums'), _0x2e402c = _0xe130e6('./CountDow' + 'nWnd'), _0x2f4ade = _0xe130e6('../manager' + '/EventMana' + 'ger'), _0x54ca52 = _0xe130e6('../manager' + '/UIManager'), _0x3d935c = _0xe130e6('../utils/U' + 'tils3d'), _0x4cf5a5 = _0xe130e6('../scripts' + '/SpriteSca' + 'le'), _0x412a5f = _0xe130e6('./PasePane' + 'l'), _0x59897a = _0xe130e6('../manager' + '/SoundMana' + 'ger'), _0x5c6def = _0xe130e6('../utils/M' + 'athUtil'), _0x4a5b23 = _0xe130e6('./StarNitr' + 'ogenPanel'), _0x60f99 = _0xe130e6('../utils/p' + 'ublicUtil'), _0x4b856a = _0xe130e6('../data/Ro' + 'leInfo'), _0x1c02a6 = _0xe130e6('./GameCent' + 'rePanel'), _0x4764e7 = _0xe130e6('../constan' + 't/texts'), _0x159a58 = _0xe130e6('../utils/D' + 'ataUtil'), _0x221d6f = _0xe130e6('../manager' + '/ResManage' + 'r'), _0x2ac641 = function (_0x4cf4e0) {
                    function _0x5a43b2() {
                        var _0x5dada9 = _0x4cf4e0['call'](this) || this;
                        return _0x5dada9['isDestinat' + 'ion'] = !0x1, _0x5dada9['scoreNum'] = 0x0, _0x5dada9['rivalNum'] = 0x0, _0x5dada9['timerAll'] = 0x0, _0x5dada9['_eliminati' + 'onkeep'] = _0x2f2a4f['default']['eliminatio' + 'nkeep'], _0x5dada9['_eliminati' + 'oninterval'] = _0x2f2a4f['default']['eliminatio' + 'ninterval'], _0x5dada9['outIndex'] = 0x0, _0x5dada9['istrueNewU' + 'ser'] = !0x0, _0x5dada9['isOver_1'] = !0x1, _0x5dada9['isOver_2'] = !0x1, _0x5dada9['isOver_3'] = !0x1, _0x5dada9['isOver_4'] = !0x1, _0x5dada9['isOver_5'] = !0x1, _0x5dada9['oneThree'] = !0x0, _0x5dada9;
                    }
                    return _0x72e30c(_0x5a43b2, _0x4cf4e0), _0x5a43b2['prototype']['onAwake'] = function () {
                        switch (this['scoreNum'] = Laya['stage']['width'] / this['width'], this['size'](Laya['stage']['width'], Laya['stage']['height']), this['onBtn'](), this['loadGameSc' + 'ene'](), this['init'](), this['playAnimat' + 'ion']('sa', 0x4), _0x2f2a4f['default']['cumtosNum']) {
                        case 0x1:
                            _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['JinRuDiYiG' + 'uan']);
                            break;
                        case 0x2:
                            _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['erGuanJinR' + 'u']);
                            break;
                        case 0x3:
                            _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['sanguanjin' + 'ru']);
                        }
                        _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['CountDown'], this['starGame'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['poseStarGa' + 'me'], this['poseStarGa' + 'me'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['isNitrogen'], this['evevt_Nitr' + 'ogen'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['barrierCar'], this['evevt_Barr' + 'ierCar'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['leftAndRig' + 'ht'], this['evevt_IsLe' + 'ftAndRight'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['addNitroge' + 'n'], this['addNitroge' + 'n'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['ExportFail'], this['showChaPin' + 'g'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['CollderSto' + 'p'], this['collderPau' + 'se'], this);
                    }, _0x5a43b2['prototype']['onBtn'] = function () {
                        var _0x5d28f1 = this;
                        Laya['stage']['on'](Laya['Event']['KEY_DOWN'], this, this['ClickShaCh' + 'e2'], [_0x303fbf['ShaChe']['down']]), Laya['stage']['on'](Laya['Event']['KEY_UP'], this, this['ClickShaCh' + 'e2'], [_0x303fbf['ShaChe']['up']]), Laya['stage']['on'](Laya['Event']['KEY_DOWN'], this, this['onExpedite' + '2']), (this['btn_shaChe']['on'](Laya['Event']['MOUSE_DOWN'], this, this['ClickShaCh' + 'e'], [_0x303fbf['ShaChe']['down']]), this['btn_shaChe']['on'](Laya['Event']['MOUSE_UP'], this, this['ClickShaCh' + 'e'], [_0x303fbf['ShaChe']['up']]), this['btn_shaChe']['on'](Laya['Event']['MOUSE_OUT'], this, this['ClickShaCh' + 'e'], [_0x303fbf['ShaChe']['up']]), this['btn_expedi' + 'te']['on'](Laya['Event']['CLICK'], this, this['onExpedite']), this['btn_pase']['addCompone' + 'ntIntance'](new _0x4cf5a5['default'](null, function () {
                            _0x5d28f1['onPase']();
                        }, _0x303fbf['soundType']['tongYong'])), this['btn_sound']['addCompone' + 'ntIntance'](new _0x4cf5a5['default'](null, function () {
                            _0x5d28f1['onSound']();
                        }, _0x303fbf['soundType']['tongYong'])));
                    }, _0x5a43b2['prototype']['offBtn'] = function () {
                        this['btn_shaChe']['off'](Laya['Event']['MOUSE_DOWN'], this, this['ClickShaCh' + 'e']), this['btn_shaChe']['off'](Laya['Event']['MOUSE_UP'], this, this['ClickShaCh' + 'e']), this['btn_shaChe']['off'](Laya['Event']['MOUSE_OUT'], this, this['ClickShaCh' + 'e']), this['btn_expedi' + 'te']['off'](Laya['Event']['MOUSE_OUT'], this, this['onExpedite']), this['btn_pase']['off'](Laya['Event']['MOUSE_OUT'], this, this['onPase']), this['btn_sound']['off'](Laya['Event']['MOUSE_OUT'], this, this['onSound']);
                    }, _0x5a43b2['prototype']['init'] = function () {
                        _0x59897a['default']['initMusic'](0x2), Laya['SoundManag' + 'er']['muted'] ? (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_off.pn' + 'g', _0x59897a['default']['stopMusic']()) : (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_on.png', _0x59897a['default']['playMusic'](0x2)), _0x2f2a4f['default']['isUseDanQi'] = !0x1, this['Box']['visible'] = !0x1, this['isDestinat' + 'ion'] = !0x1, this['timerAll'] = 0x0, this['_startRota' + 'tion'] = -0x5a, this['isFillDanQ' + 'i'] = !0x1, this['isClickDan' + 'Qi'] = !0x1, this['_pie'] = new Laya['Sprite'](), this['img_nit']['visible'] = !0x1, this['lab_nit']['visible'] = !0x1, this['img_crush']['visible'] = !0x1, this['_eliminati' + 'onkeep'] = _0x2f2a4f['default']['eliminatio' + 'nkeep'], this['_eliminati' + 'oninterval'] = _0x2f2a4f['default']['eliminatio' + 'ninterval'], this['outIndex'] = 0x0, Laya['timer']['frameLoop'](0x1, this, this['update']), 0x1 == _0x2f2a4f['default']['checkpoint' + 'type'] ? (this['lab_gameTy' + 'pe']['text'] = 'Time\x20Trial', this['box_taoTai']['visible'] = !0x1, this['box_jjiShi' + 'Sai']['visible'] = !0x0) : (this['lab_gameTy' + 'pe']['text'] = 'Knockout', this['box_jjiShi' + 'Sai']['visible'] = !0x1, this['box_taoTai']['visible'] = !0x0), 0x1 == _0x2f2a4f['default']['cumtosNum'] ? _0x2e402c['default']['addToStage'](_0x303fbf['CountDownT' + 'ype']['StartGame']) : _0x54ca52['default']['showDialog'](new _0x4a5b23['default']());
                    }, _0x5a43b2['prototype']['starGame'] = function () {
                        this['Box']['visible'] = !0x0, _0x2f2a4f['default']['istrueStar' + 'Game'] = !0x0, this['gameContro' + 'l']['isPause'] = !0x1, Laya['timer']['loop'](0x3e8, this, this['timerAdd']), this['_pie']['graphics']['drawPie'](0x36, 0x36, 0x3c, this['_startRota' + 'tion'], 0x10e, '#ff0000'), this['img_mask']['mask'] = this['_pie'], this['gameContro' + 'l']['startGameO' + 'fListenDev' + 'iceMotion'](), Laya['Browser']['onMobile'] ? (this['btn_shaChe']['left'] = NaN, this['btn_shaChe']['right'] = 0x12c, this['new_4']['left'] = NaN, this['new_4']['right'] = 0x136, this['new_4']['bottom'] = 0x28, this['new_5']['right'] = 0x30, this['new_5']['bottom'] = 0x27, this['btnLeft']['visible'] = !![], this['btnRight']['visible'] = !![], (this['btnLeft']['on'](Laya['Event']['MOUSE_DOWN'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyDown'], [{ 'keyCode': Laya['Keyboard']['LEFT'] }]), this['btnLeft']['on'](Laya['Event']['MOUSE_UP'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyUp'], [{ 'keyCode': Laya['Keyboard']['LEFT'] }]), this['btnLeft']['on'](Laya['Event']['MOUSE_OUT'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyUp'], [{ 'keyCode': Laya['Keyboard']['LEFT'] }]), this['btnRight']['on'](Laya['Event']['MOUSE_DOWN'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyDown'], [{ 'keyCode': Laya['Keyboard']['RIGHT'] }]), this['btnRight']['on'](Laya['Event']['MOUSE_UP'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyUp'], [{ 'keyCode': Laya['Keyboard']['RIGHT'] }]), this['btnRight']['on'](Laya['Event']['MOUSE_OUT'], this['gameContro' + 'l'], this['gameContro' + 'l']['dkeyUp'], [{ 'keyCode': Laya['Keyboard']['RIGHT'] }]))) : (this['btnLeft']['visible'] = ![], this['btnRight']['visible'] = ![]), 0x4 == _0x2f2a4f['default']['checkpoint' + 'type'] && (this['rivalNameA' + 'rr'] = _0x5c6def['default']['getRandomA' + 'rr'](0x0, _0x2f2a4f['default']['game_name_' + 'config']['length'] - 0x1, _0x2f2a4f['default']['game_name_' + 'config']['length'] - 0x1), this['rivalNum'] = _0x2f2a4f['default']['RivalCarNu' + 'm']), this['newUserGui' + 'de']();
                    }, _0x5a43b2['prototype']['newUserGui' + 'de'] = function () {
                        for (var _0x34ee14 = 0x1; 0x5 >= _0x34ee14; _0x34ee14++)
                            this['new_' + _0x34ee14]['visible'] = !0x1;
                        this['ani_guide']['visible'] = !0x1, 0x1 == _0x2f2a4f['default']['cumtosNum'] && (this['istrueNewU' + 'ser'] = !0x1, this['btn_expedi' + 'te']['visible'] = !0x1, this['btn_shaChe']['visible'] = !0x1, this['ani1']['play'](0x0, !0x0), Laya['timer']['once'](0xbb8, this, this['twoNew']));
                    }, _0x5a43b2['prototype']['twoNew'] = function () {
                        this['ani1']['stop'](), this['btn_shaChe']['visible'] = !0x0, this['new_1']['visible'] = !0x1, this['new_2']['visible'] = !0x1, this['new_3']['visible'] = !0x1, this['new_4']['visible'] = !0x0, this['ani_guide']['visible'] = !0x0, this['ani_guide']['pos'](this['btn_shaChe']['x'] + this['btn_shaChe']['width'] / 0x2, this['btn_shaChe']['y'] - this['btn_shaChe']['height'] / 0x2), this['ani_guide']['play'](0x0, !0x0), _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['WanChengXi' + 'nShouYinDa' + 'o']);
                    }, _0x5a43b2['prototype']['threeNew'] = function () {
                        this['new_4']['visible'] = !0x1, this['btn_expedi' + 'te']['visible'] = !0x0, this['new_5']['visible'] = !0x0, this['ani_guide']['pos'](this['btn_expedi' + 'te']['x'] + this['btn_expedi' + 'te']['width'] / 0x2, this['btn_expedi' + 'te']['y'] - this['btn_expedi' + 'te']['height'] / 0x2);
                    }, _0x5a43b2['prototype']['fourNew'] = function () {
                        this['new_5']['visible'] = !0x1, this['ani_guide']['stop'](), this['ani_guide']['visible'] = !0x1, this['istrueNewU' + 'ser'] = !0x0;
                    }, _0x5a43b2['prototype']['timerAdd'] = function () {
                        this['timerAll']++, this['lab_timer']['text'] = this['timerAll'] + '\x20S', 0x1 == _0x2f2a4f['default']['checkpoint' + 'type'] && (this['lab_daoJiS' + 'hi']['text'] = _0x5c6def['default']['parseTimeB' + 'ynumber'](_0x2f2a4f['default']['onestarnum'] - this['timerAll']), this['timerAll'] > _0x2f2a4f['default']['onestarnum'] && this['defeated'](0x0)), 0x4 == _0x2f2a4f['default']['checkpoint' + 'type'] && (this['timerAll'] >= this['_eliminati' + 'oninterval'] ? (this['lab_outDes']['text'] = 'No.' + _0x2f2a4f['default']['RivalCarNu' + 'm'] + ('\x20is\x20out,Co' + 'untdown:\x20：') + this['_eliminati' + 'onkeep'] + 's', this['_eliminati' + 'onkeep']--, this['_eliminati' + 'onkeep'] < 0x0 && (this['isOver_' + _0x2f2a4f['default']['RivalCarNu' + 'm']] = !0x0, _0x2f2a4f['default']['RivalCarNu' + 'm'] <= _0x2f2a4f['default']['chaseRanki' + 'ng'] ? _0x2f2a4f['default']['chaseRanki' + 'ng'] <= _0x2f2a4f['default']['onestarnum'] ? this['vicyory']() : this['defeated'](0x3e8) : 0x2 == _0x2f2a4f['default']['RivalCarNu' + 'm'] && this['vicyory'](), this['_eliminati' + 'oninterval'] = _0x2f2a4f['default']['eliminatio' + 'ninterval'] + this['timerAll'], _0x2f2a4f['default']['RivalCarNu' + 'm']--, this['_eliminati' + 'onkeep'] = _0x2f2a4f['default']['eliminatio' + 'nkeep'], this['gameContro' + 'l']['RivalCarAr' + 'r'][this['outIndex']]['isOutStop'] = !0x0, this['outIndex']++, _0x59897a['default']['playEffect'](_0x303fbf['SoundName']['TaiTaoJing' + 'Gao']), this['updataRank' + 'ing']())) : this['lab_outDes']['text'] = '');
                    }, _0x5a43b2['prototype']['loadGameSc' + 'ene'] = function () {
                        return _0x40f7ae(this, void 0x0, void 0x0, function () {
                            var _0x1379f5;
                            return _0x532ce3(this, function (_0x183f98) {
                                return _0x1379f5 = Laya['loader']['getRes'](_0x152025['default']['Res3D']['GameScene']), _0x1379f5 && (this['gameContro' + 'l'] = _0x1379f5['getCompone' + 'nt'](_0x5297eb['default']), this['gameContro' + 'l'] || (this['gameContro' + 'l'] = _0x1379f5['addCompone' + 'nt'](_0x5297eb['default'])), this['gameContro' + 'l']['LoadGameSc' + 'ene'](), _0x1379f5['zOrder'] = -0x1, this['addChild'](_0x1379f5), this['gameContro' + 'l'] && this['gameContro' + 'l']['starGame']()), [0x2];
                            });
                        });
                    }, _0x5a43b2['prototype']['update'] = function () {
                        _0x2f2a4f['default']['istrueStar' + 'Game'] && !this['gameContro' + 'l']['isPause'] && (this['gameContro' + 'l']['updata'](), this['isDestinat' + 'ion'] || (this['updataShow' + 'Data'](), _0x2f2a4f['default']['isCollserB' + 'arrier'] ? (this['btn_shaChe']['visible'] = !0x1, this['btn_expedi' + 'te']['visible'] = !0x1) : (this['AddDanQi'](), this['btn_shaChe']['visible'] = !0x0, this['btn_expedi' + 'te']['visible'] = !0x0), 0x4 == _0x2f2a4f['default']['checkpoint' + 'type'] && this['updataRank' + 'ing']()));
                    }, _0x5a43b2['prototype']['updataRank' + 'ing'] = function () {
                    }, _0x5a43b2['prototype']['updataShow' + 'Data'] = function () {
                        var _0x5ab004 = Math['floor'](this['showSpeed'](_0x2f2a4f['default']['moveSpeed']));
                        if (this['lab_speed']['text'] = _0x5ab004 + '\x20km/h', _0x2f2a4f['default']['isUseDanQi'] ? this['lab_speed']['color'] = '#f4f417' : this['lab_speed']['color'] = '#ffffff', 0x1 == _0x2f2a4f['default']['checkpoint' + 'type'] && !_0x2f2a4f['default']['isCollserB' + 'arrier']) {
                            var _0x4edde4 = _0x3d935c['default']['againstLer' + 'p'](_0x2f2a4f['default']['destinatio' + 'nDis'], 0x0, _0x2f2a4f['default']['updataCarD' + 'estination' + 'Dis']);
                            this['img_user_s' + 'tar']['x'] = _0x3d935c['default']['lerp'](0x0, this['img_user_e' + 'nd']['x'], _0x4edde4), this['lab_distan' + 'ce']['text'] = Math['floor'](_0x2f2a4f['default']['destinatio' + 'nDis'] - _0x2f2a4f['default']['updataCarD' + 'estination' + 'Dis']) + '/' + _0x2f2a4f['default']['destinatio' + 'nDis'], _0x4edde4 >= 0x1 && this['vicyory']();
                        }
                    }, _0x5a43b2['prototype']['showSpeed'] = function (_0xfb30bc) {
                        var _0x499685;
                        return _0x2f2a4f['default']['isUseDanQi'] || this['gameContro' + 'l']['danqiAddSp' + 'eed'] > 0x0 ? (_0x499685 = _0x3d935c['default']['againstLer' + 'p'](_0x2f2a4f['default']['minspeed'], _0x2f2a4f['default']['userMotoSp' + 'eed'] + _0x2f2a4f['default']['motoExpedi' + 'te'], _0xfb30bc), _0x3d935c['default']['lerp'](_0x2f2a4f['default']['reality_in' + 'itialSpeed'], _0x2f2a4f['default']['readonly_s' + 'peed'] + _0x2f2a4f['default']['userMotoDa' + 'ta']['nitrogenma' + 'x'], _0x499685)) : (_0x499685 = _0x3d935c['default']['againstLer' + 'p'](_0x2f2a4f['default']['minspeed'], _0x2f2a4f['default']['userMotoSp' + 'eed'], _0xfb30bc), _0x3d935c['default']['lerp'](_0x2f2a4f['default']['reality_in' + 'itialSpeed'], _0x2f2a4f['default']['readonly_s' + 'peed'], _0x499685));
                    }, _0x5a43b2['prototype']['onExpedite' + '2'] = function (_0x3cf536) {
                        _0x3cf536['keyCode'] === Laya['Keyboard']['C'] && (this['isClickDan' + 'Qi'] || this['_startRota' + 'tion'] < -0x46 || (_0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ShiYongDan' + 'Qi']), this['isClickDan' + 'Qi'] = !0x0, this['gameContro' + 'l']['playExpedi' + 'te'](), this['isFillDanQ' + 'i'] = !0x1, 0x1 == _0x2f2a4f['default']['cumtosNum'] && this['fourNew']()));
                    }, _0x5a43b2['prototype']['onExpedite'] = function () {
                        this['isClickDan' + 'Qi'] || this['_startRota' + 'tion'] < -0x46 || (_0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ShiYongDan' + 'Qi']), this['isClickDan' + 'Qi'] = !0x0, this['gameContro' + 'l']['playExpedi' + 'te'](), this['isFillDanQ' + 'i'] = !0x1, 0x1 == _0x2f2a4f['default']['cumtosNum'] && this['fourNew']());
                    }, _0x5a43b2['prototype']['addNitroge' + 'n'] = function () {
                        this['_startRota' + 'tion'] = 0x10d;
                    }, _0x5a43b2['prototype']['AddDanQi'] = function () {
                        var _0x2e60e2 = Laya['timer']['delta'];
                        if (this['_pie'] && !this['isFillDanQ' + 'i']) {
                            var _0x137954 = 0x168 / _0x2f2a4f['default']['nitrogenre' + 'covery'] * _0x2e60e2;
                            this['isClickDan' + 'Qi'] ? (this['isEnter'] && (this['playItem']['visible'] = !0x0, this['playItem']['play'](0x0, !0x0), this['isEnter'] = !0x1), this['_startRota' + 'tion'] -= _0x137954 * _0x2f2a4f['default']['nitrogenus' + 'e'], this['img_oneGas']['skin'] = 'panelUI/ga' + 'ss_3.png', _0x2f2a4f['default']['isUseDanQi'] = !0x0) : (this['playItem']['visible'] = !0x1, this['playItem']['stop'](), this['isEnter'] = !0x0, this['_startRota' + 'tion'] += _0x137954, this['img_oneGas']['skin'] = 'panelUI/ga' + 'ss_2.png', _0x2f2a4f['default']['isUseDanQi'] = !0x1), this['_startRota' + 'tion'] >= 0x10e && (this['_startRota' + 'tion'] = 0x10e), this['_startRota' + 'tion'] <= -0x5a && (this['_startRota' + 'tion'] = -0x5a, this['isClickDan' + 'Qi'] = !0x1, this['gameContro' + 'l']['sotpExpedd' + 'ite']()), this['_pie']['graphics']['clear'](), this['_pie']['graphics']['drawPie'](0x36, 0x36, 0x3c, this['_startRota' + 'tion'], 0x10e, '#ff0000'), this['_startRota' + 'tion'] >= 0x10e && (this['isFillDanQ' + 'i'] = !0x0);
                        }
                    }, _0x5a43b2['prototype']['playAnimat' + 'ion'] = function (_0x30aacd, _0x35fb4f) {
                        this['playItem'] = new Laya['Animation'](), this['playItem']['loadAtlas']('animation/' + _0x30aacd + '.atlas'), this['playItem']['zOrder'] = 0x5, this['playItem']['scale'](_0x35fb4f * this['scoreNum'], _0x35fb4f * this['scoreNum']), Laya['stage']['addChild'](this['playItem']), this['playItem']['visible'] = !0x1;
                    }, _0x5a43b2['prototype']['ClickShaCh' + 'e'] = function (_0x192708) {
                        _0x192708 == _0x303fbf['ShaChe']['down'] && _0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ShaChe']), this['gameContro' + 'l']['_moveType'] = _0x192708, 0x1 == _0x2f2a4f['default']['cumtosNum'] && this['oneThree'] && (this['oneThree'] = !0x1, this['threeNew']());
                    }, _0x5a43b2['prototype']['ClickShaCh' + 'e2'] = function (_0x1d15eb, _0x1fbda7) {
                        _0x1fbda7['keyCode'] === Laya['Keyboard']['X'] && (_0x1d15eb == _0x303fbf['ShaChe']['down'] && _0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ShaChe']), this['gameContro' + 'l']['_moveType'] = _0x1d15eb, 0x1 == _0x2f2a4f['default']['cumtosNum'] && this['oneThree'] && (this['oneThree'] = !0x1, this['threeNew']()));
                    }, _0x5a43b2['prototype']['vicyory'] = function () {
                        this['isDestinat' + 'ion'] = !0x0, this['gameContro' + 'l']['destinatio' + 'nParticle1']['active'] = !0x0, this['gameContro' + 'l']['destinatio' + 'nParticle1']['particleSy' + 'stem']['play'](), this['gameContro' + 'l']['destinatio' + 'nParticle2']['active'] = !0x0, this['gameContro' + 'l']['destinatio' + 'nParticle2']['particleSy' + 'stem']['play'](), Laya['SoundManag' + 'er']['stopAllSou' + 'nd'](), _0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ShengLi']), this['gameContro' + 'l']['isOverGame'] = !0x0, this['allOverGam' + 'e'](0x7d0);
                    }, _0x5a43b2['prototype']['defeated'] = function (_0x4240dc) {
                        this['isDestinat' + 'ion'] = !0x0, Laya['SoundManag' + 'er']['stopAllSou' + 'nd'](), this['allOverGam' + 'e'](_0x4240dc);
                    }, _0x5a43b2['prototype']['allOverGam' + 'e'] = function (_0x1b3049) {
                        this['offBtn'](), this['playItem']['visible'] = !0x1, this['playItem']['stop'](), this['gameContro' + 'l']['isCollisio' + 'n'] = !0x0, Laya['timer']['clear'](this, this['timerAdd']), this['gameContro' + 'l']['isOverGame'] = !0x0, this['gameContro' + 'l']['_moveType'] = _0x303fbf['ShaChe']['down'], this['victoryAnd' + 'Defeated'](), Laya['timer']['once'](_0x1b3049, this, this['gamerOverP' + 'anel']);
                    }, _0x5a43b2['prototype']['victoryAnd' + 'Defeated'] = function () {
                        _0x2f2a4f['default']['starIstrue' + '_1'] = this['isWinning'](_0x2f2a4f['default']['onestartyp' + 'e'], _0x2f2a4f['default']['onestarnum']), _0x2f2a4f['default']['starIstrue' + '_2'] = this['isWinning'](_0x2f2a4f['default']['twostartyp' + 'e'], _0x2f2a4f['default']['twostarnum']), _0x2f2a4f['default']['starIstrue' + '_3'] = this['isWinning'](_0x2f2a4f['default']['threestart' + 'ype'], _0x2f2a4f['default']['threestarn' + 'um']), _0x2f2a4f['default']['starIstrue' + '_1'] || _0x2f2a4f['default']['starIstrue' + '_2'] || _0x2f2a4f['default']['starIstrue' + '_3'] ? _0x2f2a4f['default']['VictoryAnd' + 'Defeated'] = !0x0 : _0x2f2a4f['default']['VictoryAnd' + 'Defeated'] = !0x1;
                    }, _0x5a43b2['prototype']['isWinning'] = function (_0x260aec, _0x11eea7) {
                        switch (_0x260aec) {
                        case 0x1:
                            if (this['timerAll'] <= _0x11eea7)
                                return !0x0;
                            break;
                        case 0x2:
                            break;
                        case 0x3:
                            if (_0x2f2a4f['default']['accidentNu' + 'm'] <= _0x11eea7 && this['timerAll'] <= _0x2f2a4f['default']['onestarnum'])
                                return !0x0;
                            break;
                        case 0x4:
                            break;
                        case 0x5:
                            if (_0x2f2a4f['default']['chaseRanki' + 'ng'] <= _0x11eea7)
                                return !0x0;
                        }
                        return !0x1;
                    }, _0x5a43b2['prototype']['gamerOverP' + 'anel'] = function () {
                        switch (_0x54ca52['default']['showDialog'](new _0x1c02a6['default'](0x1)), _0x2f2a4f['default']['cumtosNum']) {
                        case 0x4:
                            _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['wanchengDi' + 'siguan']);
                            break;
                        case 0x5:
                            _0x159a58['default']['newDot'](_0x4764e7['GetDotText']['wuguanwanc' + 'heng']);
                        }
                        this['loadGameRe' + 'source']();
                    }, _0x5a43b2['prototype']['loadGameRe' + 'source'] = function () {
                        var _0x2ddba4 = _0x2f2a4f['default']['config_lev' + 'el'][_0x4b856a['default']['CustomsDat' + 'a']['length']], _0x3ce528 = [];
                        0x1 == _0x2ddba4['checkpoint' + 'type'] && (_0x3ce528 = _0x3ce528['concat'](_0x221d6f['default']['getBarrier' + 'CarRes'](_0x2ddba4['id']))), 0x4 == _0x2ddba4['checkpoint' + 'type'] && (_0x3ce528 = _0x3ce528['concat'](_0x221d6f['default']['loadRivalC' + 'ar'](_0x2ddba4['id']))), Laya['loader']['create'](_0x3ce528);
                    }, _0x5a43b2['prototype']['onPase'] = function () {
                        this['offBtn'](), Laya['SoundManag' + 'er']['muted'] || _0x59897a['default']['stopMusic'](), this['gameContro' + 'l']['isPause'] = !0x0, Laya['timer']['clear'](this, this['timerAdd']), _0x54ca52['default']['showDialog'](new _0x412a5f['default']());
                    }, _0x5a43b2['prototype']['collderPau' + 'se'] = function () {
                        this['offBtn'](), Laya['SoundManag' + 'er']['muted'] || _0x59897a['default']['stopMusic'](), Laya['timer']['clear'](this, this['timerAdd']), this['gameContro' + 'l']['isPause'] = !0x0;
                    }, _0x5a43b2['prototype']['onSound'] = function () {
                        Laya['SoundManag' + 'er']['muted'] = !Laya['SoundManag' + 'er']['muted'], Laya['SoundManag' + 'er']['muted'] ? (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_off.pn' + 'g', _0x59897a['default']['stopMusic']()) : (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_on.png', _0x59897a['default']['playMusic'](0x2)), _0x60f99['default']['setItem']('playSoundM' + 'uted', !Laya['SoundManag' + 'er']['muted']);
                    }, _0x5a43b2['prototype']['poseStarGa' + 'me'] = function () {
                        this['onBtn'](), Laya['SoundManag' + 'er']['muted'] || _0x59897a['default']['playMusic'](0x2), this['gameContro' + 'l']['isPause'] = !0x1, Laya['timer']['loop'](0x3e8, this, this['timerAdd']);
                    }, _0x5a43b2['prototype']['evevt_IsLe' + 'ftAndRight'] = function () {
                        this['gameContro' + 'l']['borderIstr' + 'ue'] = !0x0;
                    }, _0x5a43b2['prototype']['evevt_Barr' + 'ierCar'] = function (_0x42c690) {
                        if (!this['gameContro' + 'l']['isOverGame']) {
                            _0x59897a['default']['playEffect'](_0x303fbf['SoundName']['ZhuangChe']);
                            var _0x4f179b = this['gameContro' + 'l']['collderBar' + 'rierCar'](_0x42c690);
                            this['img_crush']['visible'] = !0x0, this['img_crush']['alpha'] = 0.7, _0x4f179b ? this['img_crush']['skewY'] = 0xb4 : this['img_crush']['skewY'] = 0x0, _0x2f2a4f['default']['accidentNu' + 'm']++, Laya['Tween']['to'](this['img_crush'], { 'alpha': 0x0 }, 0x3e8, null, null, 0x5dc);
                        }
                    }, _0x5a43b2['prototype']['evevt_Nitr' + 'ogen'] = function (_0x40e1f8) {
                        var _0xa07d55 = this;
                        if (_0x59897a['default']['playEffect'](_0x303fbf['SoundName']['HuoDeDanQi']), !_0x2f2a4f['default']['isCollserB' + 'arrier']) {
                            var _0x45e2c7 = 0x0;
                            _0x45e2c7 = _0x40e1f8 == _0x303fbf['Nitrogen_t' + 'ype']['Blue'] ? _0x5c6def['default']['parseStrin' + 'g'](_0x2f2a4f['default']['nitrogenin' + 'crease'])[0x0] : _0x5c6def['default']['parseStrin' + 'g'](_0x2f2a4f['default']['nitrogenin' + 'crease'])[0x1], this['img_nit']['visible'] = !0x0, this['lab_nit']['visible'] = !0x0, this['lab_nit']['text'] = '+' + _0x45e2c7, this['_startRota' + 'tion'] += _0x45e2c7, Laya['Tween']['to'](this['img_nit'], { 'y': this['img_nit']['y'] - 0x64 }, 0x258, Laya['Ease']['strongOut'], Laya['Handler']['create'](this, function () {
                                _0xa07d55['img_nit']['y'] += 0x64, _0xa07d55['img_nit']['visible'] = !0x1;
                            })), Laya['Tween']['to'](this['lab_nit'], { 'y': this['lab_nit']['y'] - 0x64 }, 0x258, Laya['Ease']['strongOut'], Laya['Handler']['create'](this, function () {
                                _0xa07d55['lab_nit']['y'] += 0x64, _0xa07d55['lab_nit']['visible'] = !0x1;
                            })), this['_startRota' + 'tion'] >= 0x10d && (this['_startRota' + 'tion'] = 0x10d);
                        }
                    }, _0x5a43b2['prototype']['showChaPin' + 'g'] = function () {
                        _0x54ca52['default']['showDialog'](new _0x1c02a6['default'](0x2));
                    }, _0x5a43b2['prototype']['onDisable'] = function () {
                        this['offBtn'](), Laya['timer']['clear'](this, this['update']), Laya['timer']['clear'](this, this['timerAdd']), _0x2f2a4f['default']['istrueStar' + 'Game'] = !0x1, this['playItem']['visible'] = !0x1, this['playItem']['stop'](), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['isNitrogen'], this['evevt_Nitr' + 'ogen'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['poseStarGa' + 'me'], this['poseStarGa' + 'me'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['CountDown'], this['starGame'], this), _0x2f4ade['default']['getInstanc' + 'e']()['on'](_0x303fbf['GameEvent']['leftAndRig' + 'ht'], this['evevt_IsLe' + 'ftAndRight'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['barrierCar'], this['evevt_Barr' + 'ierCar'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['addNitroge' + 'n'], this['addNitroge' + 'n'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['ExportFail'], this['showChaPin' + 'g'], this), _0x2f4ade['default']['getInstanc' + 'e']()['off'](_0x303fbf['GameEvent']['CollderSto' + 'p'], this['collderPau' + 'se'], this), Laya['stage']['off'](Laya['Event']['KEY_DOWN'], this, this['ClickShaCh' + 'e2']), Laya['stage']['off'](Laya['Event']['KEY_UP'], this, this['ClickShaCh' + 'e2']), Laya['stage']['off'](Laya['Event']['KEY_DOWN'], this, this['onExpedite' + '2']), this['gameContro' + 'l'] && this['gameContro' + 'l']['gameOver']();
                    }, _0x5a43b2;
                }(_0x53171a['ui']['scenes']['GameSceneU' + 'I']);
            _0x2f9229['default'] = _0x2ac641;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../game/GameControl': 0x44,
            '../manager/EventManager': 0x4b,
            '../manager/ResManager': 0x4f,
            '../manager/SoundManager': 0x50,
            '../manager/UIManager': 0x51,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            '../utils/Utils3d': 0x5d,
            '../utils/publicUtil': 0x5e,
            './CountDownWnd': 0x27,
            './GameCentrePanel': 0x28,
            './PasePanel': 0x32,
            './StarNitrogenPanel': 0x38
        }
    ],
    0x2b: [
        function (_0x7276b2, _0x4ad88e, _0x20742a) {
            'use strict';
            var _0x3fa2b3 = this && this['__extends'] || function () {
                var _0x29f890 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x3f0970, _0x992f49) {
                    _0x3f0970['__proto__'] = _0x992f49;
                } || function (_0x20271f, _0x211134) {
                    for (var _0x2d8a86 in _0x211134)
                        _0x211134['hasOwnProp' + 'erty'](_0x2d8a86) && (_0x20271f[_0x2d8a86] = _0x211134[_0x2d8a86]);
                };
                return function (_0x279c57, _0x3e6c4f) {
                    function _0x2936a8() {
                        this['constructo' + 'r'] = _0x279c57;
                    }
                    _0x29f890(_0x279c57, _0x3e6c4f), _0x279c57['prototype'] = null === _0x3e6c4f ? Object['create'](_0x3e6c4f) : (_0x2936a8['prototype'] = _0x3e6c4f['prototype'], new _0x2936a8());
                };
            }();
            Object['defineProp' + 'erty'](_0x20742a, '__esModule', { 'value': !0x0 });
            var _0x3a8239 = _0x7276b2('../ui/laya' + 'MaxUI'), _0xba52ee = _0x7276b2('../prefabs' + '/ExportPre' + 'fabs'), _0x31ebb0 = _0x7276b2('../constan' + 't/enums'), _0x358293 = _0x7276b2('../data/Ro' + 'leInfo'), _0x5400ea = _0x7276b2('../config/' + 'CarDataCon' + 'fig'), _0x5cb959 = _0x7276b2('../utils/M' + 'athUtil'), _0x4baf62 = _0x7276b2('../scripts' + '/SpriteSca' + 'le'), _0x14856e = _0x7276b2('../manager' + '/UIManager'), _0x1f422d = _0x7276b2('../manager' + '/EventMana' + 'ger'), _0x5b9463 = _0x7276b2('../platfor' + 'ms/MiniGam' + 'e'), _0x14c601 = _0x7276b2('../constan' + 't/texts'), _0x2ae683 = _0x7276b2('../BGame/m' + 'gr/BShareM' + 'gr'), _0x3171a0 = _0x7276b2('../BGame/B' + 'Enum'), _0x4938a5 = _0x7276b2('../BGame/m' + 'gr/BAdMgr'), _0x3f2891 = _0x7276b2('../config/' + 'Config'), _0xa0a515 = _0x7276b2('../utils/D' + 'ataUtil'), _0x44a3d9 = _0x7276b2('../CGame/c' + 'ljdSdk'), _0x5748d1 = function (_0x1b0567) {
                    function _0x2f0dc5(_0x104f7a) {
                        var _0x1af8d5 = _0x1b0567['call'](this) || this;
                        return _0x1af8d5['_type'] = 0x1, _0x1af8d5['getGoldNnm'] = 0x0, _0x1af8d5['timesNum'] = 0x1, _0x1af8d5['_type'] = _0x104f7a, _0x1af8d5;
                    }
                    return _0x3fa2b3(_0x2f0dc5, _0x1b0567), _0x2f0dc5['prototype']['onEnable'] = function () {
                        var _0xa68dc7 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0xba52ee['default']['addStage'](this['box'], _0x31ebb0['ExportId']['goldLack'], !0x1), this['init'](), this['btn_get']['addCompone' + 'ntIntance'](new _0x4baf62['default'](null, function () {
                            _0xa68dc7['onClose']();
                        }, _0x31ebb0['soundType']['guanBi'])), this['btn_getGol' + 'd']['addCompone' + 'ntIntance'](new _0x4baf62['default'](null, function () {
                            _0xa68dc7['palyShowVi' + 'deoAd']();
                        }, _0x31ebb0['soundType']['tongYong'])), this['wuDian'](), _0x1f422d['default']['getInstanc' + 'e']()['on'](_0x31ebb0['GameEvent']['glodGift'], this['shareWin'], this), _0x5b9463['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x2f0dc5['prototype']['wuDian'] = function () {
                        if (_0xa0a515['default']['hideBanner'](), this['btn_get']['y'] = Laya['stage']['height'] - this['btn_get']['height'] - 0x37, this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x44a3d9['default']['isCanShare'])
                            this['accidentCl' + 'ickMax'] = _0x5cb959['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                            var _0x3d1f3d = _0xa0a515['default']['showBanner' + 'Ad']();
                            _0x3d1f3d ? this['btn_get']['y'] = Laya['stage']['height'] - _0x3d1f3d['getSize']()['height'] - _0x3f2891['default']['showBanner'] : this['btn_get']['y'] = Laya['stage']['height'] - this['btn_get']['height'] - 0xf0;
                        }
                    }, _0x2f0dc5['prototype']['showBanner'] = function () {
                        var _0x2c8e8e = _0xa0a515['default']['showBanner' + 'Ad']();
                        if (_0x2c8e8e) {
                            var _0xb34c1e = Laya['stage']['height'] - _0x2c8e8e['getSize']()['height'] - _0x3f2891['default']['showBanner'];
                            Laya['Tween']['to'](this['btn_get'], { 'y': _0xb34c1e }, 0x64, Laya['Ease']['strongOut'], Laya['Handler']['create'](this, function () {
                            }));
                        } else
                            this['btn_get']['y'] = Laya['stage']['height'] - this['btn_get']['height'] - 0xf0;
                    }, _0x2f0dc5['prototype']['init'] = function () {
                        this['timesNum'] = 0x1, this['customsDat' + 'a'] = _0x5400ea['default']['config_lev' + 'el'][_0x358293['default']['CustomsDat' + 'a']['length'] - 0x1];
                        var _0x323d90 = _0x5cb959['default']['parseStrin' + 'g'](_0x5400ea['default']['goldbagcoe' + 'fficient']), _0x1a4832 = _0x323d90[_0x5cb959['default']['randomInSe' + 'ction'](0x0, _0x323d90['length'] - 0x1)];
                        this['getGoldNnm'] = _0x1a4832 * this['customsDat' + 'a']['freegold'], this['lab_showGo' + 'ld']['text'] = '+' + this['getGoldNnm'];
                    }, _0x2f0dc5['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x334f7d = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x334f7d['shareWin'](!0x0);
                        });
                    }, _0x2f0dc5['prototype']['share'] = function () {
                        _0x358293['default']['todaygoldb' + 'agmax'] > 0x0 ? _0x2ae683['default']['getMgr']()['onShare'](function (_0x4483ad) {
                            if ('在本地' == _0x4483ad['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x4483ad['result']) {
                                case _0x3171a0['EResult']['succeed']:
                                    _0x5400ea['default']['shareType'] = _0x31ebb0['shareType']['glodGift'];
                                    break;
                                case _0x3171a0['EResult']['Failure']:
                                    _0x14856e['default']['showToast'](_0x14c601['GameText']['NoVideoAd']);
                                }
                        }['bind'](this)) : _0x14856e['default']['showToast'](_0x14c601['GameText']['NoVideoAd']);
                    }, _0x2f0dc5['prototype']['shareWin'] = function (_0x4312d1) {
                        void 0x0 === _0x4312d1 && (_0x4312d1 = !0x1), _0x4312d1 ? this['onGetGold']() : (_0x5400ea['default']['showTimer'] - _0x5400ea['default']['hideTimer']) / 0x3e8 >= _0x5400ea['default']['share'] ? this['onGetGold']() : _0x14856e['default']['showToast'](_0x14c601['GameText']['ShareFailT' + 'ip']);
                    }, _0x2f0dc5['prototype']['onGetGold'] = function () {
                        this['timesNum'] = 0x2, this['getGold']();
                    }, _0x2f0dc5['prototype']['getGold'] = function () {
                        _0x358293['default']['addTodaygo' + 'ldbagmax'](-0x1), _0x358293['default']['addGold'](this['getGoldNnm'] * this['timesNum']), _0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['updataGold'], null), 0x2 == this['_type'] ? _0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['goldOverTw' + 'een'], null) : _0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['goldLack'], null), _0x14856e['default']['closeDialo' + 'g'](this);
                    }, _0x2f0dc5['prototype']['onClose'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? (this['timesNum'] = 0x1, this['getGold']()) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x2f0dc5['prototype']['onDisable'] = function () {
                        _0xa0a515['default']['hideBanner'](), 0x2 == this['_type'] ? (_0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['showBanner'], null), _0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['selsctGold' + 'Gift'], null)) : _0x1f422d['default']['getInstanc' + 'e']()['emit'](_0x31ebb0['GameEvent']['homeGoldGi' + 'ft'], null), _0x5400ea['default']['shareType'] = _0x31ebb0['shareType']['not'], this['btn_getGol' + 'd']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_get']['off'](Laya['Event']['CLICK'], this, this['onClose']), _0x1f422d['default']['getInstanc' + 'e']()['off'](_0x31ebb0['GameEvent']['getGold'], this['shareWin'], this);
                    }, _0x2f0dc5;
                }(_0x3a8239['ui']['dialogs']['GoldGiftPa' + 'nelUI']);
            _0x20742a['default'] = _0x5748d1;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x2c: [
        function (_0x56f911, _0x3fb429, _0x1a9063) {
            'use strict';
            var _0x406727 = this && this['__extends'] || function () {
                var _0x1c52a6 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x140cb6, _0x253d89) {
                    _0x140cb6['__proto__'] = _0x253d89;
                } || function (_0x3b0db5, _0x5ece90) {
                    for (var _0x3c35ba in _0x5ece90)
                        _0x5ece90['hasOwnProp' + 'erty'](_0x3c35ba) && (_0x3b0db5[_0x3c35ba] = _0x5ece90[_0x3c35ba]);
                };
                return function (_0x14957e, _0x24209b) {
                    function _0x3bdd55() {
                        this['constructo' + 'r'] = _0x14957e;
                    }
                    _0x1c52a6(_0x14957e, _0x24209b), _0x14957e['prototype'] = null === _0x24209b ? Object['create'](_0x24209b) : (_0x3bdd55['prototype'] = _0x24209b['prototype'], new _0x3bdd55());
                };
            }();
            Object['defineProp' + 'erty'](_0x1a9063, '__esModule', { 'value': !0x0 });
            var _0x1edac8 = _0x56f911('../ui/laya' + 'MaxUI'), _0x3aba29 = _0x56f911('../prefabs' + '/ExportPre' + 'fabs'), _0xe1892c = _0x56f911('../constan' + 't/enums'), _0x1dd3ab = _0x56f911('../data/Ro' + 'leInfo'), _0xb15799 = _0x56f911('../config/' + 'CarDataCon' + 'fig'), _0x3d5485 = _0x56f911('../scripts' + '/SpriteSca' + 'le'), _0xd4c55a = _0x56f911('../manager' + '/UIManager'), _0x3345c2 = _0x56f911('../manager' + '/EventMana' + 'ger'), _0x6962de = _0x56f911('../platfor' + 'ms/MiniGam' + 'e'), _0x3b771b = _0x56f911('../constan' + 't/texts'), _0x42445a = _0x56f911('../BGame/m' + 'gr/BShareM' + 'gr'), _0x1e3f55 = _0x56f911('../BGame/B' + 'Enum'), _0x47078c = _0x56f911('../BGame/m' + 'gr/BAdMgr'), _0x2e45f1 = _0x56f911('../utils/D' + 'ataUtil'), _0xa9e94b = _0x56f911('../CGame/c' + 'ljdSdk'), _0x526b4b = _0x56f911('./ChaPingP' + 'anel'), _0x5e76ee = function (_0x347e01) {
                    function _0x576209() {
                        return _0x347e01['call'](this) || this;
                    }
                    return _0x406727(_0x576209, _0x347e01), _0x576209['prototype']['onEnable'] = function () {
                        var _0x9377bd = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x3aba29['default']['addStage'](this['box'], 0x11, !0x0), this['init'](), this['btn_return']['addCompone' + 'ntIntance'](new _0x3d5485['default'](null, function () {
                            _0x9377bd['onClose']();
                        }, _0xe1892c['soundType']['guanBi'])), this['btn_getGol' + 'd']['addCompone' + 'ntIntance'](new _0x3d5485['default'](null, function () {
                            _0x9377bd['palyShowVi' + 'deoAd']();
                        }, _0xe1892c['soundType']['tongYong'])), _0x3345c2['default']['getInstanc' + 'e']()['on'](_0xe1892c['GameEvent']['getGold'], this['shareWin'], this), _0x2e45f1['default']['showBanner' + 'Ad'](), _0x6962de['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x576209['prototype']['init'] = function () {
                        this['customsDat' + 'a'] = _0xb15799['default']['config_lev' + 'el'][_0x1dd3ab['default']['CustomsDat' + 'a']['length'] - 0x1], this['lab_showGo' + 'ld']['text'] = '+' + this['customsDat' + 'a']['freegold'];
                    }, _0x576209['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x250b33 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x250b33['shareWin'](!0x0);
                        });
                    }, _0x576209['prototype']['share'] = function () {
                        _0x1dd3ab['default']['todayfreeg' + 'oldmax'] > 0x0 ? _0x42445a['default']['getMgr']()['onShare'](function (_0x582a34) {
                            if ('在本地' == _0x582a34['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x582a34['result']) {
                                case _0x1e3f55['EResult']['succeed']:
                                    _0xb15799['default']['shareType'] = _0xe1892c['shareType']['goldLack'];
                                    break;
                                case _0x1e3f55['EResult']['Failure']:
                                    _0xd4c55a['default']['showToast'](_0x3b771b['GameText']['NoVideoAd']);
                                }
                        }['bind'](this)) : _0xd4c55a['default']['showToast'](_0x3b771b['GameText']['NoVideoAd']);
                    }, _0x576209['prototype']['shareWin'] = function (_0x493d57) {
                        void 0x0 === _0x493d57 && (_0x493d57 = !0x1), _0x493d57 ? this['onGetGold']() : (_0xb15799['default']['showTimer'] - _0xb15799['default']['hideTimer']) / 0x3e8 >= _0xb15799['default']['share'] ? this['onGetGold']() : _0xd4c55a['default']['showToast'](_0x3b771b['GameText']['ShareFailT' + 'ip']);
                    }, _0x576209['prototype']['onGetGold'] = function () {
                        _0x1dd3ab['default']['addTodayfr' + 'eegoldmax'](-0x1), _0x1dd3ab['default']['addGold'](this['customsDat' + 'a']['freegold']), _0x3345c2['default']['getInstanc' + 'e']()['emit'](_0xe1892c['GameEvent']['updataGold'], null), _0x3345c2['default']['getInstanc' + 'e']()['emit'](_0xe1892c['GameEvent']['goldLack'], null), _0xd4c55a['default']['closeDialo' + 'g'](this);
                    }, _0x576209['prototype']['onClose'] = function () {
                        _0xd4c55a['default']['closeDialo' + 'g'](this);
                    }, _0x576209['prototype']['onDisable'] = function () {
                        if (_0xb15799['default']['shareType'] = _0xe1892c['shareType']['not'], this['btn_getGol' + 'd']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_return']['off'](Laya['Event']['CLICK'], this, this['onClose']), _0x3345c2['default']['getInstanc' + 'e']()['off'](_0xe1892c['GameEvent']['getGold'], this['shareWin'], this), _0xa9e94b['default']['isCanDemo']) {
                            switch (_0xb15799['default']['cumtosNum']) {
                            case 0x1:
                                _0x2e45f1['default']['newDot'](_0x3b771b['GetDotText']['DiyiguanFa' + 'nhuiGUanka' + 'JIemian']);
                                break;
                            case 0x2:
                                _0x2e45f1['default']['newDot'](_0x3b771b['GetDotText']['erguanFanh' + 'uiGUankaji' + 'emian']);
                                break;
                            case 0x3:
                                _0x2e45f1['default']['newDot'](_0x3b771b['GetDotText']['sanguanfan' + 'huiguanka']);
                            }
                            _0xd4c55a['default']['showDialog'](new _0x526b4b['default'](0x2, !0x1));
                        } else
                            _0x3345c2['default']['getInstanc' + 'e']()['emit'](_0xe1892c['GameEvent']['showBanner'], null);
                    }, _0x576209;
                }(_0x1edac8['ui']['dialogs']['GoldLackPa' + 'nelUI']);
            _0x1a9063['default'] = _0x5e76ee;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            './ChaPingPanel': 0x24
        }
    ],
    0x2d: [
        function (_0x267c99, _0x9e202e, _0x4f5e49) {
            'use strict';
            var _0x3aa59d = this && this['__extends'] || function () {
                var _0x47b713 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x180839, _0xe0032f) {
                    _0x180839['__proto__'] = _0xe0032f;
                } || function (_0x3da7e0, _0x13dac9) {
                    for (var _0x12d49b in _0x13dac9)
                        _0x13dac9['hasOwnProp' + 'erty'](_0x12d49b) && (_0x3da7e0[_0x12d49b] = _0x13dac9[_0x12d49b]);
                };
                return function (_0x136213, _0x3f96d3) {
                    function _0x7b311d() {
                        this['constructo' + 'r'] = _0x136213;
                    }
                    _0x47b713(_0x136213, _0x3f96d3), _0x136213['prototype'] = null === _0x3f96d3 ? Object['create'](_0x3f96d3) : (_0x7b311d['prototype'] = _0x3f96d3['prototype'], new _0x7b311d());
                };
            }();
            Object['defineProp' + 'erty'](_0x4f5e49, '__esModule', { 'value': !0x0 });
            var _0x1649fb = _0x267c99('../ui/laya' + 'MaxUI'), _0x2687b3 = _0x267c99('../scripts' + '/SpriteSca' + 'le'), _0x376176 = _0x267c99('../constan' + 't/enums'), _0x16ac8d = _0x267c99('../manager' + '/ResManage' + 'r'), _0x7feccc = _0x267c99('../data/Ro' + 'leInfo'), _0xfde983 = _0x267c99('../config/' + 'Config'), _0x58c174 = _0x267c99('../manager' + '/UIManager'), _0x1e6c31 = _0x267c99('../config/' + 'CarDataCon' + 'fig'), _0x30e3d0 = _0x267c99('../utils/U' + 'tils3d'), _0x26440c = _0x267c99('../manager' + '/EventMana' + 'ger'), _0x30b193 = _0x267c99('./SelectCu' + 'stomsPanel'), _0x3bf171 = _0x267c99('./GoldLack' + 'Panel'), _0x1def0d = _0x267c99('../utils/M' + 'athUtil'), _0x30ee87 = _0x267c99('./SignPane' + 'l'), _0x378063 = _0x267c99('../utils/p' + 'ublicUtil'), _0x3a7af9 = _0x267c99('../manager' + '/SoundMana' + 'ger'), _0x1e6059 = _0x267c99('../prefabs' + '/ExportHom' + 'ePrefabs'), _0x30587c = _0x267c99('../data/en' + 'ergyData'), _0x2cadd7 = _0x267c99('../BGame/u' + 'tils/BTime' + 'Utlis'), _0x37dd13 = _0x267c99('../BGame/B' + 'Enum'), _0x5bcd03 = _0x267c99('./RankingP' + 'anel'), _0x33e801 = _0x267c99('./GoldGift' + 'Panel'), _0x8af566 = _0x267c99('../utils/D' + 'ataUtil'), _0x3c3f06 = _0x267c99('../BGame/m' + 'gr/BAdMgr'), _0x1cb991 = _0x267c99('../constan' + 't/texts'), _0x2ba673 = _0x267c99('../CGame/c' + 'ljdSdk'), _0x4a370a = _0x267c99('../BGame/m' + 'gr/BShareM' + 'gr'), _0x3a3850 = _0x267c99('./GameCent' + 'rePanel'), _0x55923 = _0x267c99('./UnlockPa' + 'nel'), _0x5a73fb = function (_0xa33eee) {
                    function _0x41db1e() {
                        var _0x205de6 = _0xa33eee['call'](this) || this;
                        return _0x205de6['upgradePar' + 'ticle'] = null, _0x205de6['sparkloopb' + 'lus1'] = null, _0x205de6['sparkloopb' + 'lus2'] = null, _0x205de6['posY'] = 0x64, _0x205de6['isSoundPla' + 'y'] = !0x0, _0x205de6['goldLackNu' + 'm'] = 0x0, _0x205de6['rotateSpee' + 'd'] = new Laya['Vector3'](0x0, 0.01, 0x0), _0x205de6;
                    }
                    return _0x3aa59d(_0x41db1e, _0xa33eee), _0x41db1e['prototype']['onAwake'] = function () {
                        this['onBtn'](), this['initCarDat' + 'a'](), this['init'](), _0x1e6059['default']['addStage'](this['Box_shang'], _0x376176['ExportId']['home'], 0x43, 0x60, 0x1), _0x8af566['default']['newDot'](_0x1cb991['GetDotText']['ZhuJieMian']);
                    }, _0x41db1e['prototype']['onEnable'] = function () {
                        this['loadGameRe' + 'source']();
                    }, _0x41db1e['prototype']['onBtn'] = function () {
                        var _0x521478 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['btn_sound']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onSound']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_left']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onChange']('left');
                        }, _0x376176['soundType']['tongYong'])), this['btn_right']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onChange']('right');
                        }, _0x376176['soundType']['tongYong'])), this['btn_startG' + 'ame']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onStartGam' + 'e']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_upCarR' + 'ank']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onUpCarRan' + 'k']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_unlock']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onUnlock']();
                        }, _0x376176['soundType']['ziDingYi'])), this['btn_sign']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onSign']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_rank']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onRank']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_demo']['addCompone' + 'ntIntance'](new _0x2687b3['default'](null, function () {
                            _0x521478['onDemoStar']();
                        }, _0x376176['soundType']['tongYong'])), this['btn_goldGi' + 'ft']['on'](Laya['Event']['CLICK'], this, this['onGoldGift']), this['btn_goldGi' + 'ftTwo']['on'](Laya['Event']['CLICK'], this, this['onGoldGift']), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['homeGoldGi' + 'ft'], this['plapGift'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['updataGold'], this['showGold'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['goldLack'], this['Event_play' + 'GetGold'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['homeGoldTw' + 'een'], this['Event_play' + 'GetGold'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['homePowerT' + 'ween'], this['Event_play' + 'GetPower'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['ExportFail'], this['showChaPin' + 'g'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['isDeme'], this['demeReturn'], this), _0x26440c['default']['getInstanc' + 'e']()['on'](_0x376176['GameEvent']['freeDemo'], this['shareWin'], this);
                    }, _0x41db1e['prototype']['offBtn'] = function () {
                        this['btn_sound']['off'](Laya['Event']['CLICK'], this, this['onSound']), this['btn_sign']['off'](Laya['Event']['CLICK'], this, this['onSign']), this['btn_left']['off'](Laya['Event']['CLICK'], this, this['onChange']), this['btn_right']['off'](Laya['Event']['CLICK'], this, this['onChange']), this['btn_startG' + 'ame']['off'](Laya['Event']['CLICK'], this, this['onStartGam' + 'e']), this['btn_upCarR' + 'ank']['off'](Laya['Event']['CLICK'], this, this['onUpCarRan' + 'k']), this['btn_unlock']['off'](Laya['Event']['CLICK'], this, this['onUnlock']), this['btn_rank']['off'](Laya['Event']['CLICK'], this, this['onRank']), this['btn_goldGi' + 'ft']['off'](Laya['Event']['CLICK'], this, this['onGoldGift']), this['btn_goldGi' + 'ftTwo']['off'](Laya['Event']['CLICK'], this, this['onGoldGift']);
                    }, _0x41db1e['prototype']['init'] = function () {
                        var _0x13e23a = _0x378063['default']['getItem']('playSoundM' + 'uted', !0x0);
                        _0x3a7af9['default']['initMusic'](0x1), Laya['SoundManag' + 'er']['muted'] = !_0x13e23a, Laya['SoundManag' + 'er']['muted'] ? (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_off.pn' + 'g', _0x3a7af9['default']['stopMusic']()) : (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_on.png', _0x3a7af9['default']['playMusic'](0x1)), this['jieSuoFron' + 'tType'] = _0x376176['HomeType']['zhuYe'], this['_showHomeT' + 'ype'] = _0x376176['HomeType']['zhuYe'], this['showHomePa' + 'nel'](_0x376176['HomeType']['zhuYe']), this['showGold']();
                        var _0x4e0623 = this['isHaveCar']();
                        _0x4e0623 || _0x7feccc['default']['setUseMoto' + 'Index'](_0x7feccc['default']['UserHaveCa' + 'rArr'][_0x7feccc['default']['UserHaveCa' + 'rArr']['length'] - 0x1]), this['loadShowho' + 'meCar3D'](), this['newUserGui' + 'de'](), this['showGetPow' + 'er'](), Laya['timer']['loop'](0x3e8, this, this['showGetPow' + 'er']), this['plapGift']();
                    }, _0x41db1e['prototype']['plapGift'] = function () {
                        if (this['Box_goldGi' + 'ft']['visible'] = !0x1, _0x7feccc['default']['todaygoldb' + 'agmax'] > 0x0 && _0x2ba673['default']['isCanShare']) {
                            var _0x477dbf = _0x1def0d['default']['parseStrin' + 'g'](_0x1e6c31['default']['goldbagref' + 'resh']), _0x415f45 = _0x1def0d['default']['randomInSe' + 'ction'](_0x477dbf[0x0], _0x477dbf[0x1]);
                            this['posY'] = _0x1def0d['default']['randomInSe' + 'ction'](0xc8, 0x190), Laya['timer']['once'](0x3e8 * _0x415f45, this, this['tweenGoldG' + 'ift']);
                        }
                    }, _0x41db1e['prototype']['tweenGoldG' + 'ift'] = function () {
                        this['Box_goldGi' + 'ft']['visible'] = !0x0;
                        var _0x1a58ee = Laya['stage']['width'] / 0x2;
                        this['starGoldPo' + 's'] = new Laya['Point'](), this['endGoldPos'] = new Laya['Point'](), this['Box_goldGi' + 'ft']['x'] < Laya['stage']['width'] / 0x2 ? (this['starGoldPo' + 's']['setTo'](_0x1a58ee - 0x1f4, this['posY']), this['endGoldPos']['setTo'](_0x1a58ee + 0x1f4, this['posY'])) : (this['starGoldPo' + 's']['setTo'](_0x1a58ee + 0x1f4, this['posY']), this['endGoldPos']['setTo'](_0x1a58ee - 0x1f4, this['posY'])), this['Box_goldGi' + 'ft']['pos'](this['starGoldPo' + 's']['x'], this['starGoldPo' + 's']['y']), this['pathArr'] = _0x1def0d['default']['bezierPath'](this['starGoldPo' + 's'], this['endGoldPos'], 0x3, 0x96, 0x12c), Laya['timer']['frameLoop'](0x1, this, this['paradrop']);
                    }, _0x41db1e['prototype']['paradrop'] = function () {
                        var _0x400a0c = this['pathArr']['shift']();
                        this['Box_goldGi' + 'ft']['pos'](_0x400a0c[0x0], _0x400a0c[0x1]), this['pathArr']['length'] <= 0x0 && (Laya['timer']['clear'](this, this['paradrop']), this['tweenGoldG' + 'ift']());
                    }, _0x41db1e['prototype']['newUserGui' + 'de'] = function () {
                        this['ani_guide']['visible'] = !0x1, _0x7feccc['default']['CustomsDat' + 'a']['length'] <= 0x2 && (this['ani_guide']['visible'] = !0x0, this['ani_guide']['pos'](this['btn_startG' + 'ame']['x'], this['btn_startG' + 'ame']['y'] - this['btn_startG' + 'ame']['height']), this['ani_guide']['play'](0x0, !0x0));
                    }, _0x41db1e['prototype']['showGetPow' + 'er'] = function () {
                        var _0x3ff9b9 = _0x2cadd7['default']['getTimeStr'](_0x30587c['default']['I']['getCD'](), _0x37dd13['ETimeshow']['full'], _0x37dd13['ETimeunit']['sec'], [
                            ':',
                            ''
                        ]);
                        this['lab_getPow' + 'erTimer']['text'] = _0x3ff9b9 + '\x20+', _0x30587c['default']['I']['isEnergyMa' + 'x']() && (this['box_getPow' + 'er']['visible'] = !0x1);
                    }, _0x41db1e['prototype']['showGold'] = function () {
                        this['lab_gold']['text'] = _0x7feccc['default']['GoldNum']['toString'](), this['lab_power']['text'] = _0x30587c['default']['I']['getNum']() + '/' + _0x1e6c31['default']['powermax'], this['showUpgrad' + 'eIcon']();
                    }, _0x41db1e['prototype']['loadShowho' + 'meCar3D'] = function () {
                        var _0x2bb071, _0x4ab29b = this;
                        if (_0x2bb071 = _0x16ac8d['default']['getHomeCar' + '3DModel'](_0x7feccc['default']['UserShowCa' + 'r']), !this['scene_home']) {
                            var _0x77db93 = Laya['loader']['getRes'](_0xfde983['default']['Res3D']['HomeScene']);
                            _0x77db93['zOrder'] = -0x1, this['upgradePar' + 'ticle'] = _0x77db93['getChildBy' + 'Name']('upgrade'), this['upgradePar' + 'ticle']['transform']['localPosit' + 'ionY'] = 0x2710, this['upgradePar' + 'ticle']['particleSy' + 'stem']['play']();
                            for (var _0x45a041 = 0x0; _0x45a041 < this['upgradePar' + 'ticle']['numChildre' + 'n']; _0x45a041++) {
                                var _0x49ef0f = this['upgradePar' + 'ticle']['getChildAt'](_0x45a041);
                                _0x49ef0f['particleSy' + 'stem']['play']();
                            }
                            this['sparkloopb' + 'lus'] = _0x77db93['getChildBy' + 'Name']('sparkloopb' + 'lue'), this['sparkloopb' + 'lus1'] = this['sparkloopb' + 'lus']['getChildAt'](0x0), this['sparkloopb' + 'lus2'] = this['sparkloopb' + 'lus']['getChildAt'](0x1), this['sparkloopb' + 'lus']['transform']['localPosit' + 'ionY'] = 0x2710, this['addChild'](_0x77db93), this['scene_home'] = _0x77db93;
                        }
                        var _0x14e678 = function () {
                                _0x4ab29b['showHomeCa' + 'r'] && (Laya['timer']['clear'](_0x4ab29b, _0x4ab29b['rotateTime' + 'rCb']), _0x4ab29b['showHomeCa' + 'r']['removeSelf'](), _0x4ab29b['showHomeCa' + 'r'] = null);
                                var _0x45cba4 = Laya['loader']['getRes'](_0x2bb071);
                                _0x45cba4 && (_0x4ab29b['scene_home']['addChild'](_0x45cba4), _0x4ab29b['showHomeCa' + 'r'] = _0x45cba4, _0x4ab29b['showHomeCa' + 'r']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4ab29b['showHomeCa' + 'r']['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](0x0, 0x0, 0x0), Laya['timer']['loop'](0x1e, _0x4ab29b, _0x4ab29b['rotateTime' + 'rCb']), _0x4ab29b['showUnlock' + 'Data']());
                            }, _0x60b884 = function () {
                            };
                        Laya['loader']['create']([_0x2bb071], Laya['Handler']['create'](this, _0x14e678), Laya['Handler']['create'](this, _0x60b884));
                    }, _0x41db1e['prototype']['rotateTime' + 'rCb'] = function () {
                        this['showHomeCa' + 'r'] && this['showHomeCa' + 'r']['transform']['rotate'](this['rotateSpee' + 'd'], !0x1, !0x0);
                    }, _0x41db1e['prototype']['initCarDat' + 'a'] = function () {
                        _0x1e6c31['default']['userMotoDa' + 'ta'] = _0x1e6c31['default']['config_mot' + 'o'][_0x7feccc['default']['UserLevel'] - 0x1], _0x1e6c31['default']['readonly_s' + 'peed'] = _0x1e6c31['default']['userMotoDa' + 'ta']['speedmax'], _0x1e6c31['default']['userMotoSp' + 'eed'] = _0x30e3d0['default']['changeSpee' + 'd'](_0x1e6c31['default']['userMotoDa' + 'ta']['speedmax']), _0x1e6c31['default']['motoExpedi' + 'te'] = _0x30e3d0['default']['changeSpee' + 'd'](_0x1e6c31['default']['userMotoDa' + 'ta']['nitrogenma' + 'x']), this['showUpgrad' + 'eData']();
                    }, _0x41db1e['prototype']['onStartGam' + 'e'] = function () {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            _0x8af566['default']['newDot'](_0x1cb991['GetDotText']['ZhuJieMian' + 'KaiShi']), Laya['timer']['clear'](this, this['paradrop']), this['pathArr'] = [], _0x58c174['default']['showDialog'](new _0x30b193['default'](!0x0), !0x1);
                        });
                    }, _0x41db1e['prototype']['showHomePa' + 'nel'] = function (_0x29be95) {
                        switch (this['img_lock']['visible'] = !0x1, this['Box_xia_ji' + 'eSuo']['visible'] = !0x1, this['Box_xia_zu' + 'o']['visible'] = !0x1, this['Box_xia_zh' + 'uYe']['visible'] = !0x1, _0x29be95 == _0x376176['HomeType']['jieSuo'] && this['_showHomeT' + 'ype'] != _0x376176['HomeType']['jieSuo'] && (this['jieSuoFron' + 'tType'] = this['_showHomeT' + 'ype']), this['_showHomeT' + 'ype'] = _0x29be95, _0x29be95) {
                        case _0x376176['HomeType']['zhuYe']:
                            this['Box_xia_zh' + 'uYe']['visible'] = !0x0, this['Box_xia_zu' + 'o']['visible'] = !0x0;
                            break;
                        case _0x376176['HomeType']['jieSuo']:
                            this['Box_xia_ji' + 'eSuo']['visible'] = !0x0, this['img_lock']['visible'] = !0x0;
                        }
                    }, _0x41db1e['prototype']['onChange'] = function (_0x549e52) {
                        'left' == _0x549e52 ? (0x1 == _0x7feccc['default']['UserShowCa' + 'r'] && (_0x7feccc['default']['UserShowCa' + 'r'] = 0x15), _0x7feccc['default']['setUseMoto' + 'Index'](_0x7feccc['default']['UserShowCa' + 'r'] - 0x1)) : (0x14 == _0x7feccc['default']['UserShowCa' + 'r'] && (_0x7feccc['default']['UserShowCa' + 'r'] = 0x0), _0x7feccc['default']['setUseMoto' + 'Index'](_0x7feccc['default']['UserShowCa' + 'r'] + 0x1)), this['loadShowho' + 'meCar3D']();
                        var _0x18f795 = this['isHaveCar']();
                        _0x18f795 ? this['showHomePa' + 'nel'](_0x376176['HomeType']['zhuYe']) : this['showHomePa' + 'nel'](_0x376176['HomeType']['jieSuo']);
                    }, _0x41db1e['prototype']['isHaveCar'] = function () {
                        for (var _0x3e471b = 0x0; _0x3e471b < _0x7feccc['default']['UserHaveCa' + 'rArr']['length']; _0x3e471b++) {
                            var _0x277441 = _0x7feccc['default']['UserHaveCa' + 'rArr'][_0x3e471b];
                            if (_0x277441 == _0x7feccc['default']['UserShowCa' + 'r'])
                                return !0x0;
                        }
                        return !0x1;
                    }, _0x41db1e['prototype']['onSound'] = function () {
                        Laya['SoundManag' + 'er']['muted'] = !Laya['SoundManag' + 'er']['muted'], Laya['SoundManag' + 'er']['muted'] ? (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_off.pn' + 'g', _0x3a7af9['default']['stopMusic']()) : (this['btn_sound']['skin'] = 'panelUI/vo' + 'ice_on.png', _0x3a7af9['default']['playMusic'](0x1)), _0x378063['default']['setItem']('playSoundM' + 'uted', !Laya['SoundManag' + 'er']['muted']);
                    }, _0x41db1e['prototype']['onUpCarRan' + 'k'] = function () {
                        if (_0x7feccc['default']['GoldNum'] > _0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold']) {
                            this['goldLackNu' + 'm'] = 0x0, this['upgradePar' + 'ticle']['transform']['localPosit' + 'ionY'] = 0x0, this['upgradePar' + 'ticle']['particleSy' + 'stem']['play']();
                            for (var _0x3deafa = 0x0; _0x3deafa < this['upgradePar' + 'ticle']['numChildre' + 'n']; _0x3deafa++) {
                                var _0x3751e7 = this['upgradePar' + 'ticle']['getChildAt'](_0x3deafa);
                                _0x3751e7['particleSy' + 'stem']['play']();
                            }
                            _0x7feccc['default']['addGold'](-_0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold']), _0x7feccc['default']['setUserLev' + 'el'](), this['initCarDat' + 'a'](), _0x26440c['default']['getInstanc' + 'e']()['emit'](_0x376176['GameEvent']['updataGold'], null);
                        } else
                            this['goldLackNu' + 'm'] >= 0x0 ? this['onGoldLack' + 'Panel']() : (this['goldLackNu' + 'm']++, _0x58c174['default']['showDialog'](new _0x55923['default']()));
                    }, _0x41db1e['prototype']['onGoldLack' + 'Panel'] = function () {
                        var _0x55ea61 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x55ea61['shareWinGo' + 'ldLack'](!0x0);
                        });
                    }, _0x41db1e['prototype']['shareGoldL' + 'ack'] = function () {
                        var _0x591c3d = this;
                        _0x7feccc['default']['todaygoldb' + 'agmax'] > 0x0 ? _0x4a370a['default']['getMgr']()['onShare'](function (_0x16082a) {
                            if ('在本地' == _0x16082a['tag'])
                                _0x591c3d['shareWinGo' + 'ldLack'](!0x0);
                            else
                                switch (_0x16082a['result']) {
                                case _0x37dd13['EResult']['succeed']:
                                    _0x1e6c31['default']['shareType'] = _0x376176['shareType']['glodGift'];
                                    break;
                                case _0x37dd13['EResult']['Failure']:
                                    _0x58c174['default']['showToast'](_0x1cb991['GameText']['NoVideoAd']);
                                }
                        }['bind'](this)) : (_0x1e6c31['default']['shareType'] = 0x0, _0x58c174['default']['showToast'](_0x1cb991['GameText']['NoVideoAd']));
                    }, _0x41db1e['prototype']['shareWinGo' + 'ldLack'] = function (_0x403056) {
                        void 0x0 === _0x403056 && (_0x403056 = !0x1), _0x1e6c31['default']['shareType'] = 0x0, _0x403056 ? this['onUpgrede']() : (_0x1e6c31['default']['showTimer'] - _0x1e6c31['default']['hideTimer']) / 0x3e8 >= _0x1e6c31['default']['share'] ? this['onUpgrede']() : _0x58c174['default']['showToast'](_0x1cb991['GameText']['ShareFailT' + 'ip']);
                    }, _0x41db1e['prototype']['onUpgrede'] = function () {
                        this['upgradePar' + 'ticle']['transform']['localPosit' + 'ionY'] = 0x0, this['upgradePar' + 'ticle']['particleSy' + 'stem']['play']();
                        for (var _0x427284 = 0x0; _0x427284 < this['upgradePar' + 'ticle']['numChildre' + 'n']; _0x427284++) {
                            var _0xb120e3 = this['upgradePar' + 'ticle']['getChildAt'](_0x427284);
                            _0xb120e3['particleSy' + 'stem']['play']();
                        }
                        _0x7feccc['default']['setUserLev' + 'el'](), this['initCarDat' + 'a']();
                    }, _0x41db1e['prototype']['showUpgrad' + 'eData'] = function () {
                        0x0 != _0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold'] ? this['lab_upgrad' + 'eGold']['text'] = _0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold'] + '' : (this['lab_upgrad' + 'eGold']['text'] = 'MAX', this['btn_upCarR' + 'ank']['disabled'] = !0x0), this['lab_3']['text'] = 'Control：' + _0x1e6c31['default']['userMotoDa' + 'ta']['manipulate'], this['lab_2']['text'] = 'MAX\x20Speed：' + _0x1e6c31['default']['userMotoDa' + 'ta']['speedmax'], this['lab_1']['text'] = 'Nitro：' + _0x1e6c31['default']['userMotoDa' + 'ta']['nitrogenma' + 'x'], this['lab_carLev' + 'el']['text'] = 'LEVEL：' + _0x1e6c31['default']['userMotoDa' + 'ta']['lv'], this['pro_3']['value'] = _0x1e6c31['default']['userMotoDa' + 'ta']['manipulate'] / _0x1e6c31['default']['userMaxMot' + 'oData']['manipulate'], this['pro_2']['value'] = _0x1e6c31['default']['userMotoDa' + 'ta']['speedmax'] / _0x1e6c31['default']['userMaxMot' + 'oData']['speedmax'], this['pro_1']['value'] = _0x1e6c31['default']['userMotoDa' + 'ta']['nitrogenma' + 'x'] / _0x1e6c31['default']['userMaxMot' + 'oData']['nitrogenma' + 'x'], this['showUpgrad' + 'eIcon']();
                    }, _0x41db1e['prototype']['showUnlock' + 'Data'] = function () {
                        var _0x5ae60f = this['returnUnlo' + 'ckData'](), _0x55df75 = _0x7feccc['default']['getGetCarS' + 'everal'](_0x7feccc['default']['UserShowCa' + 'r']);
                        _0x5ae60f && (0x1 == _0x5ae60f['unlocktype'] ? (this['lab_unlock' + 'Num']['text'] = _0x5ae60f['probabilit' + 'y'] + '', this['img_unlock' + 'Icon']['skin'] = 'panelUI/co' + 'in.png') : (this['lab_unlock' + 'Num']['text'] = _0x55df75 + '/' + _0x5ae60f['probabilit' + 'y'], this['img_unlock' + 'Icon']['skin'] = 'panelUI/vi' + 'deo.png'));
                    }, _0x41db1e['prototype']['showUpgrad' + 'eIcon'] = function () {
                        _0x7feccc['default']['GoldNum'] > _0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold'] ? (this['lab_upgrad' + 'eGold']['text'] = _0x1e6c31['default']['userMotoDa' + 'ta']['uplvgold'] + '', this['img_upgrad' + 'eGold']['skin'] = 'panelUI/co' + 'in.png') : (this['lab_upgrad' + 'eGold']['text'] = 'Ad', this['img_upgrad' + 'eGold']['skin'] = 'panelUI/vi' + 'deo.png');
                    }, _0x41db1e['prototype']['returnUnlo' + 'ckData'] = function () {
                        for (var _0x18b7e8 = (0x3e8 + _0x7feccc['default']['UserShowCa' + 'r'])['toString'](), _0x25146e = 0x0; _0x25146e < _0x1e6c31['default']['game_mycar' + 'unlock_con' + 'fig']['length']; _0x25146e++) {
                            var _0x4d2873 = _0x1e6c31['default']['game_mycar' + 'unlock_con' + 'fig'][_0x25146e];
                            if (_0x4d2873['id'] == _0x18b7e8)
                                return {
                                    'unlocktype': _0x4d2873['unlocktype'],
                                    'probability': _0x4d2873['probabilit' + 'y']
                                };
                        }
                    }, _0x41db1e['prototype']['onUnlock'] = function () {
                        var _0x1600e1 = this['returnUnlo' + 'ckData']();
                        if (0x1 == _0x1600e1['unlocktype'])
                            _0x1600e1['probabilit' + 'y'] <= _0x7feccc['default']['GoldNum'] ? (this['palySparkl' + 'oopblus'](), _0x3a7af9['default']['playEffect'](_0x376176['SoundName']['QiCheJieSu' + 'o']), _0x7feccc['default']['setUserHav' + 'eCarArr'](_0x7feccc['default']['UserShowCa' + 'r']), this['showHomePa' + 'nel'](_0x376176['HomeType']['zhuYe'])) : _0x58c174['default']['showDialog'](new _0x3bf171['default']());
                        else {
                            var _0x5833bf = this;
                            platform['getInstanc' + 'e']()['showReward'](() => {
                                _0x5833bf['unlockCar']();
                            });
                        }
                    }, _0x41db1e['prototype']['unlockCar'] = function () {
                        var _0x4f7a96 = _0x7feccc['default']['getGetCarS' + 'everal'](_0x7feccc['default']['UserShowCa' + 'r']), _0x1c1844 = this['returnUnlo' + 'ckData']();
                        _0x4f7a96 + 0x1 == _0x1c1844['probabilit' + 'y'] ? (_0x7feccc['default']['setUserHav' + 'eCarArr'](_0x7feccc['default']['UserShowCa' + 'r']), _0x58c174['default']['showToast'](_0x1cb991['GameText']['ChangeLuck' + 'yMoto']), this['palySparkl' + 'oopblus']()) : _0x7feccc['default']['setGetCarS' + 'everal'](_0x7feccc['default']['UserShowCa' + 'r'], _0x4f7a96 + 0x1), this['showUnlock' + 'Data']();
                        var _0x633d1f = this['isHaveCar']();
                        _0x633d1f ? this['showHomePa' + 'nel'](_0x376176['HomeType']['zhuYe']) : this['showHomePa' + 'nel'](_0x376176['HomeType']['jieSuo']);
                    }, _0x41db1e['prototype']['palySparkl' + 'oopblus'] = function () {
                        var _0x15202b = this;
                        this['sparkloopb' + 'lus']['transform']['localPosit' + 'ionY'] = 0x0, this['sparkloopb' + 'lus1']['particleSy' + 'stem']['play']();
                        for (var _0x432057 = 0x0; _0x432057 < this['sparkloopb' + 'lus1']['numChildre' + 'n']; _0x432057++) {
                            var _0x46ac37 = this['sparkloopb' + 'lus1']['getChildAt'](_0x432057);
                            _0x46ac37['particleSy' + 'stem']['play']();
                        }
                        this['sparkloopb' + 'lus2']['particleSy' + 'stem']['play']();
                        for (var _0x432057 = 0x0; _0x432057 < this['sparkloopb' + 'lus2']['numChildre' + 'n']; _0x432057++) {
                            var _0x46ac37 = this['sparkloopb' + 'lus2']['getChildAt'](_0x432057);
                            _0x46ac37['particleSy' + 'stem']['play']();
                        }
                        Laya['Tween']['to'](this['sparkloopb' + 'lus']['transform'], { 'localRotationEulerY': 0x2d0 }, 0xfa0, null, Laya['Handler']['create'](this, function () {
                            _0x15202b['sparkloopb' + 'lus']['transform']['localRotat' + 'ionEulerY'] = 0x0, _0x15202b['sparkloopb' + 'lus']['transform']['localPosit' + 'ionY'] = 0x2710;
                        }));
                    }, _0x41db1e['prototype']['onGoldGift'] = function () {
                        Laya['timer']['clear'](this, this['paradrop']), this['pathArr'] = [], this['Box_goldGi' + 'ft']['visible'] = !0x1, _0x58c174['default']['showDialog'](new _0x33e801['default'](0x1));
                    }, _0x41db1e['prototype']['Event_play' + 'GetGold'] = function () {
                        _0x1def0d['default']['playTweenI' + 'mg'](_0x376176['CurrencyTy' + 'pe']['Diamond'], this['img_getGol' + 'd']);
                    }, _0x41db1e['prototype']['Event_play' + 'GetPower'] = function () {
                        _0x1def0d['default']['playTweenI' + 'mg'](_0x376176['CurrencyTy' + 'pe']['power'], this['img_power']);
                    }, _0x41db1e['prototype']['onSign'] = function () {
                        _0x58c174['default']['showDialog'](new _0x30ee87['default']());
                    }, _0x41db1e['prototype']['onRank'] = function () {
                        _0x58c174['default']['showDialog'](new _0x5bcd03['default']());
                    }, _0x41db1e['prototype']['onDemoStar'] = function () {
                        var _0x44fba0 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x44fba0['shareWin'](!0x0);
                        });
                    }, _0x41db1e['prototype']['share'] = function () {
                        var _0x3badb0 = this;
                        _0x4a370a['default']['getMgr']()['onShare'](function (_0x191cd9) {
                            if ('在本地' == _0x191cd9['tag'])
                                _0x3badb0['shareWin'](!0x0);
                            else
                                switch (_0x191cd9['result']) {
                                case _0x37dd13['EResult']['succeed']:
                                    _0x1e6c31['default']['shareType'] = _0x376176['shareType']['ondemo'];
                                    break;
                                case _0x37dd13['EResult']['Failure']:
                                    _0x1e6c31['default']['shareType'] = _0x376176['shareType']['not'], _0x58c174['default']['showToast'](_0x1cb991['GameText']['NoVideoAd']);
                                }
                        }['bind'](this));
                    }, _0x41db1e['prototype']['shareWin'] = function (_0x59f0ee) {
                        void 0x0 === _0x59f0ee && (_0x59f0ee = !0x1), _0x59f0ee ? this['onDemo']() : (_0x1e6c31['default']['showTimer'] - _0x1e6c31['default']['hideTimer']) / 0x3e8 >= _0x1e6c31['default']['share'] ? this['onDemo']() : (_0x1e6c31['default']['shareType'] = _0x376176['shareType']['not'], _0x58c174['default']['showToast'](_0x1cb991['GameText']['ShareFailT' + 'ip']));
                    }, _0x41db1e['prototype']['onDemo'] = function () {
                        _0x1e6c31['default']['shareType'] = _0x376176['shareType']['not'], Laya['timer']['clear'](this, this['paradrop']), this['pathArr'] = [], _0x58c174['default']['showDialog'](new _0x30b193['default'](!0x0, !0x0), !0x1);
                    }, _0x41db1e['prototype']['demeReturn'] = function () {
                        var _0x4a491b = this['isHaveCar']();
                        _0x4a491b || _0x7feccc['default']['setUseMoto' + 'Index'](_0x7feccc['default']['UserHaveCa' + 'rArr'][_0x7feccc['default']['UserHaveCa' + 'rArr']['length'] - 0x1]), this['loadShowho' + 'meCar3D'](), this['showHomePa' + 'nel'](_0x376176['HomeType']['zhuYe']);
                    }, _0x41db1e['prototype']['showChaPin' + 'g'] = function () {
                        _0x58c174['default']['showDialog'](new _0x3a3850['default'](0x2));
                    }, _0x41db1e['prototype']['loadGameRe' + 'source'] = function () {
                        var _0x1c9c99 = _0x1e6c31['default']['config_lev' + 'el'][_0x7feccc['default']['CustomsDat' + 'a']['length'] - 0x1], _0x3daa2f = [];
                        0x1 == _0x1c9c99['checkpoint' + 'type'] && (_0x3daa2f = _0x3daa2f['concat'](_0x16ac8d['default']['getBarrier' + 'CarRes'](_0x1c9c99['id']))), 0x4 == _0x1c9c99['checkpoint' + 'type'] && (_0x3daa2f = _0x3daa2f['concat'](_0x16ac8d['default']['loadRivalC' + 'ar'](_0x1c9c99['id']))), Laya['loader']['create'](_0x3daa2f);
                    }, _0x41db1e['prototype']['onDisable'] = function () {
                        this['offBtn'](), this['showHomeCa' + 'r'] && (Laya['timer']['clear'](this, this['rotateTime' + 'rCb']), this['showHomeCa' + 'r']['removeSelf'](), this['showHomeCa' + 'r'] = null), Laya['timer']['clear'](this, this['showGetPow' + 'er']), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['updataGold'], this['showGold'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['goldLack'], this['Event_play' + 'GetGold'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['homeGoldTw' + 'een'], this['Event_play' + 'GetGold'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['homePowerT' + 'ween'], this['Event_play' + 'GetPower'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['homeGoldGi' + 'ft'], this['plapGift'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['ExportFail'], this['showChaPin' + 'g'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['isDeme'], this['demeReturn'], this), _0x26440c['default']['getInstanc' + 'e']()['off'](_0x376176['GameEvent']['freeDemo'], this['shareWin'], this);
                    }, _0x41db1e;
                }(_0x1649fb['ui']['scenes']['HomeSceneU' + 'I']);
            _0x4f5e49['default'] = _0x5a73fb;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../BGame/utils/BTimeUtlis': 0x15,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../data/energyData': 0x40,
            '../manager/EventManager': 0x4b,
            '../manager/ResManager': 0x4f,
            '../manager/SoundManager': 0x50,
            '../manager/UIManager': 0x51,
            '../prefabs/ExportHomePrefabs': 0x55,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            '../utils/Utils3d': 0x5d,
            '../utils/publicUtil': 0x5e,
            './GameCentrePanel': 0x28,
            './GoldGiftPanel': 0x2b,
            './GoldLackPanel': 0x2c,
            './RankingPanel': 0x34,
            './SelectCustomsPanel': 0x35,
            './SignPanel': 0x37,
            './UnlockPanel': 0x3a
        }
    ],
    0x2e: [
        function (_0x3febd3, _0x1b8b3a, _0x19ee0a) {
            'use strict';
            var _0x20cb6d = this && this['__extends'] || function () {
                    var _0x26f888 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x40884a, _0x22bfbb) {
                        _0x40884a['__proto__'] = _0x22bfbb;
                    } || function (_0x14e1a6, _0x495699) {
                        for (var _0x50ff7e in _0x495699)
                            _0x495699['hasOwnProp' + 'erty'](_0x50ff7e) && (_0x14e1a6[_0x50ff7e] = _0x495699[_0x50ff7e]);
                    };
                    return function (_0x37d066, _0x52ca28) {
                        function _0x2acf57() {
                            this['constructo' + 'r'] = _0x37d066;
                        }
                        _0x26f888(_0x37d066, _0x52ca28), _0x37d066['prototype'] = null === _0x52ca28 ? Object['create'](_0x52ca28) : (_0x2acf57['prototype'] = _0x52ca28['prototype'], new _0x2acf57());
                    };
                }(), _0x38397b = this && this['__awaiter'] || function (_0x54d9a5, _0x523873, _0x17c156, _0xcb749) {
                    return new (_0x17c156 || (_0x17c156 = Promise))(function (_0x39a1cb, _0x6a713b) {
                        function _0x1cfa49(_0x3f6e67) {
                            try {
                                _0x15bb39(_0xcb749['next'](_0x3f6e67));
                            } catch (_0x190a8e) {
                                _0x6a713b(_0x190a8e);
                            }
                        }
                        function _0x2fe319(_0x4f5b5f) {
                            try {
                                _0x15bb39(_0xcb749['throw'](_0x4f5b5f));
                            } catch (_0x57ab64) {
                                _0x6a713b(_0x57ab64);
                            }
                        }
                        function _0x15bb39(_0x3277f5) {
                            _0x3277f5['done'] ? _0x39a1cb(_0x3277f5['value']) : new _0x17c156(function (_0x2f6376) {
                                _0x2f6376(_0x3277f5['value']);
                            })['then'](_0x1cfa49, _0x2fe319);
                        }
                        _0x15bb39((_0xcb749 = _0xcb749['apply'](_0x54d9a5, _0x523873 || []))['next']());
                    });
                }, _0x1c7a33 = this && this['__generato' + 'r'] || function (_0x4209ba, _0x6e0d9d) {
                    function _0x4c13(_0x17459d) {
                        return function (_0x5e91b9) {
                            return _0x4f54d7([
                                _0x17459d,
                                _0x5e91b9
                            ]);
                        };
                    }
                    function _0x4f54d7(_0x16914b) {
                        if (_0x5ef271)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x51c803;)
                            try {
                                if (_0x5ef271 = 0x1, _0x482bc9 && (_0x2202b6 = 0x2 & _0x16914b[0x0] ? _0x482bc9['return'] : _0x16914b[0x0] ? _0x482bc9['throw'] || ((_0x2202b6 = _0x482bc9['return']) && _0x2202b6['call'](_0x482bc9), 0x0) : _0x482bc9['next']) && !(_0x2202b6 = _0x2202b6['call'](_0x482bc9, _0x16914b[0x1]))['done'])
                                    return _0x2202b6;
                                switch (_0x482bc9 = 0x0, _0x2202b6 && (_0x16914b = [
                                        0x2 & _0x16914b[0x0],
                                        _0x2202b6['value']
                                    ]), _0x16914b[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x2202b6 = _0x16914b;
                                    break;
                                case 0x4:
                                    return _0x51c803['label']++, {
                                        'value': _0x16914b[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x51c803['label']++, _0x482bc9 = _0x16914b[0x1], _0x16914b = [0x0];
                                    continue;
                                case 0x7:
                                    _0x16914b = _0x51c803['ops']['pop'](), _0x51c803['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x2202b6 = _0x51c803['trys'], !(_0x2202b6 = _0x2202b6['length'] > 0x0 && _0x2202b6[_0x2202b6['length'] - 0x1]) && (0x6 === _0x16914b[0x0] || 0x2 === _0x16914b[0x0])) {
                                        _0x51c803 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x16914b[0x0] && (!_0x2202b6 || _0x16914b[0x1] > _0x2202b6[0x0] && _0x16914b[0x1] < _0x2202b6[0x3])) {
                                        _0x51c803['label'] = _0x16914b[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x16914b[0x0] && _0x51c803['label'] < _0x2202b6[0x1]) {
                                        _0x51c803['label'] = _0x2202b6[0x1], _0x2202b6 = _0x16914b;
                                        break;
                                    }
                                    if (_0x2202b6 && _0x51c803['label'] < _0x2202b6[0x2]) {
                                        _0x51c803['label'] = _0x2202b6[0x2], _0x51c803['ops']['push'](_0x16914b);
                                        break;
                                    }
                                    _0x2202b6[0x2] && _0x51c803['ops']['pop'](), _0x51c803['trys']['pop']();
                                    continue;
                                }
                                _0x16914b = _0x6e0d9d['call'](_0x4209ba, _0x51c803);
                            } catch (_0x3c66af) {
                                _0x16914b = [
                                    0x6,
                                    _0x3c66af
                                ], _0x482bc9 = 0x0;
                            } finally {
                                _0x5ef271 = _0x2202b6 = 0x0;
                            }
                        if (0x5 & _0x16914b[0x0])
                            throw _0x16914b[0x1];
                        return {
                            'value': _0x16914b[0x0] ? _0x16914b[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x5ef271, _0x482bc9, _0x2202b6, _0xdab48c, _0x51c803 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x2202b6[0x0])
                                    throw _0x2202b6[0x1];
                                return _0x2202b6[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0xdab48c = {
                        'next': _0x4c13(0x0),
                        'throw': _0x4c13(0x1),
                        'return': _0x4c13(0x2)
                    }, 'function' == typeof Symbol && (_0xdab48c[Symbol['iterator']] = function () {
                        return this;
                    }), _0xdab48c;
                };
            Object['defineProp' + 'erty'](_0x19ee0a, '__esModule', { 'value': !0x0 });
            var _0x3d63bf = _0x3febd3('../constan' + 't/texts'), _0x442441 = _0x3febd3('../manager' + '/UIManager'), _0x15e019 = _0x3febd3('../config/' + 'Config'), _0x451652 = _0x3febd3('../manager' + '/ResManage' + 'r'), _0x137770 = _0x3febd3('../config/' + 'CarDataCon' + 'fig'), _0x5df9e5 = _0x3febd3('../data/Ro' + 'leInfo'), _0x23f70f = _0x3febd3('../ui/laya' + 'MaxUI'), _0x2fc5fc = _0x3febd3('../utils/D' + 'ataUtil'), _0x64cc55 = 0.3, _0x21da78 = function (_0x1a790f) {
                    function _0x249657() {
                        var _0x177d41 = _0x1a790f['call'](this) || this;
                        return _0x177d41['curPercent'] = 0x0, _0x177d41;
                    }
                    return _0x20cb6d(_0x249657, _0x1a790f), _0x249657['prototype']['onAwake'] = function () {
                        return _0x38397b(this, void 0x0, void 0x0, function () {
                            return _0x1c7a33(this, function (_0x577bd2) {
                                return this['pivot'](Laya['stage']['width'] / 0x2, Laya['stage']['height'] / 0x2), this['size'](Laya['stage']['width'], Laya['stage']['height']), this['img_bg']['width'] = Laya['stage']['width'], this['img_bg']['height'] = Laya['stage']['height'], this['onLoadResO' + 'ver'](), 0x1 == _0x137770['default']['cumtosNum'] && _0x2fc5fc['default']['newDot'](_0x3d63bf['GetDotText']['DiYiGuanLo' + 'ad']), [0x2];
                            });
                        });
                    }, _0x249657['prototype']['onLoadResO' + 'ver'] = function () {
                        this['tipLabel']['text'] = _0x3d63bf['GameText']['LoadingSce' + 'ne'], this['progressBa' + 'r']['value'] = _0x64cc55, this['per']['text'] = Math['round'](0x64 * _0x64cc55) + '%', Laya['loader']['once'](Laya['Event']['ERROR'], this, this['onLoad3DRe' + 'sError']);
                        var _0x277215 = [];
                        _0x277215['push'](_0x451652['default']['loadCustom' + 's'](_0x137770['default']['roadType'])), _0x277215['push'](_0x15e019['default']['Nitrogen_B' + 'lue']), _0x277215['push'](_0x15e019['default']['Nitrogen_Y' + 'ellow']), _0x277215['push'](_0x451652['default']['getGameCar' + 'Model'](_0x5df9e5['default']['UserShowCa' + 'r'])), _0x277215['push'](_0x451652['default']['loadSkyBox'](_0x137770['default']['skyBoxType'])), 0x1 == _0x137770['default']['checkpoint' + 'type'] && (_0x277215 = _0x277215['concat'](_0x451652['default']['getBarrier' + 'CarRes'](_0x137770['default']['cumtosNum']))), 0x4 == _0x137770['default']['checkpoint' + 'type'] && (_0x277215 = _0x277215['concat'](_0x451652['default']['loadRivalC' + 'ar'](_0x137770['default']['cumtosNum']))), Laya['loader']['create'](_0x277215, Laya['Handler']['create'](this, this['onLoad3DRe' + 'sOver']), Laya['Handler']['create'](this, this['onLoad3DRe' + 'sProgress']));
                    }, _0x249657['prototype']['onLoad3DRe' + 'sError'] = function (_0x3ff186) {
                        console['error']('Load3d\x20Res' + '\x20Error:\x20'), console['error'](_0x3ff186);
                    }, _0x249657['prototype']['onLoad3DRe' + 'sProgress'] = function (_0x38e71a) {
                        var _0x3c9688 = _0x64cc55, _0x46492a = _0x3c9688 + _0x38e71a * (0x1 - _0x64cc55);
                        _0x46492a = _0x46492a > 0x1 ? 0x1 : _0x46492a, _0x46492a < this['curPercent'] || (this['curPercent'] = _0x46492a, this['progressBa' + 'r']['value'] = _0x46492a, this['per']['text'] = Math['round'](0x64 * _0x46492a) + '%');
                    }, _0x249657['prototype']['onLoad3DRe' + 'sOver'] = function () {
                        return _0x38397b(this, void 0x0, void 0x0, function () {
                            return _0x1c7a33(this, function (_0x4a61d0) {
                                return _0x2fc5fc['default']['newDot'](_0x3d63bf['GetDotText']['wanchengdi' + 'yiguanload']), this['progressBa' + 'r']['value'] = 0x1, this['per']['text'] = '100%', _0x137770['default']['istrueStar' + 'Game'] = !0x1, this['tipLabel']['text'] = _0x3d63bf['GameText']['LoadingOve' + 'r'], _0x442441['default']['switchScen' + 'e'](_0x15e019['default']['gameScene']), [0x2];
                            });
                        });
                    }, _0x249657;
                }(_0x23f70f['ui']['scenes']['LoadCustom' + 'sSceneUI']);
            _0x19ee0a['default'] = _0x21da78;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/ResManager': 0x4f,
            '../manager/UIManager': 0x51,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b
        }
    ],
    0x2f: [
        function (_0x365fcc, _0x214810, _0x434fba) {
            'use strict';
            var _0x594cd3 = this && this['__extends'] || function () {
                    var _0x2dd4ba = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x35406d, _0x5d2b2c) {
                        _0x35406d['__proto__'] = _0x5d2b2c;
                    } || function (_0x56d42f, _0x2f53a7) {
                        for (var _0x1ddcd6 in _0x2f53a7)
                            _0x2f53a7['hasOwnProp' + 'erty'](_0x1ddcd6) && (_0x56d42f[_0x1ddcd6] = _0x2f53a7[_0x1ddcd6]);
                    };
                    return function (_0x1fc2d1, _0x263ad9) {
                        function _0x1d0f70() {
                            this['constructo' + 'r'] = _0x1fc2d1;
                        }
                        _0x2dd4ba(_0x1fc2d1, _0x263ad9), _0x1fc2d1['prototype'] = null === _0x263ad9 ? Object['create'](_0x263ad9) : (_0x1d0f70['prototype'] = _0x263ad9['prototype'], new _0x1d0f70());
                    };
                }(), _0x36910f = this && this['__awaiter'] || function (_0x3d1c31, _0x12500e, _0x53cf14, _0x30a409) {
                    return new (_0x53cf14 || (_0x53cf14 = Promise))(function (_0x16e742, _0x343fb7) {
                        function _0xf85861(_0x188b8f) {
                            try {
                                _0x4d95c2(_0x30a409['next'](_0x188b8f));
                            } catch (_0x324c95) {
                                _0x343fb7(_0x324c95);
                            }
                        }
                        function _0x52775b(_0x5c95f4) {
                            try {
                                _0x4d95c2(_0x30a409['throw'](_0x5c95f4));
                            } catch (_0x31ce9e) {
                                _0x343fb7(_0x31ce9e);
                            }
                        }
                        function _0x4d95c2(_0x36e9f4) {
                            _0x36e9f4['done'] ? _0x16e742(_0x36e9f4['value']) : new _0x53cf14(function (_0x4efd07) {
                                _0x4efd07(_0x36e9f4['value']);
                            })['then'](_0xf85861, _0x52775b);
                        }
                        _0x4d95c2((_0x30a409 = _0x30a409['apply'](_0x3d1c31, _0x12500e || []))['next']());
                    });
                }, _0x2629d6 = this && this['__generato' + 'r'] || function (_0x21b798, _0x2baefe) {
                    function _0x2ea527(_0x4a6c59) {
                        return function (_0x1e85a1) {
                            return _0x1f42a0([
                                _0x4a6c59,
                                _0x1e85a1
                            ]);
                        };
                    }
                    function _0x1f42a0(_0x4d7e50) {
                        if (_0x26f73d)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x144f4a;)
                            try {
                                if (_0x26f73d = 0x1, _0x2309d3 && (_0x3df41f = 0x2 & _0x4d7e50[0x0] ? _0x2309d3['return'] : _0x4d7e50[0x0] ? _0x2309d3['throw'] || ((_0x3df41f = _0x2309d3['return']) && _0x3df41f['call'](_0x2309d3), 0x0) : _0x2309d3['next']) && !(_0x3df41f = _0x3df41f['call'](_0x2309d3, _0x4d7e50[0x1]))['done'])
                                    return _0x3df41f;
                                switch (_0x2309d3 = 0x0, _0x3df41f && (_0x4d7e50 = [
                                        0x2 & _0x4d7e50[0x0],
                                        _0x3df41f['value']
                                    ]), _0x4d7e50[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x3df41f = _0x4d7e50;
                                    break;
                                case 0x4:
                                    return _0x144f4a['label']++, {
                                        'value': _0x4d7e50[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x144f4a['label']++, _0x2309d3 = _0x4d7e50[0x1], _0x4d7e50 = [0x0];
                                    continue;
                                case 0x7:
                                    _0x4d7e50 = _0x144f4a['ops']['pop'](), _0x144f4a['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x3df41f = _0x144f4a['trys'], !(_0x3df41f = _0x3df41f['length'] > 0x0 && _0x3df41f[_0x3df41f['length'] - 0x1]) && (0x6 === _0x4d7e50[0x0] || 0x2 === _0x4d7e50[0x0])) {
                                        _0x144f4a = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x4d7e50[0x0] && (!_0x3df41f || _0x4d7e50[0x1] > _0x3df41f[0x0] && _0x4d7e50[0x1] < _0x3df41f[0x3])) {
                                        _0x144f4a['label'] = _0x4d7e50[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x4d7e50[0x0] && _0x144f4a['label'] < _0x3df41f[0x1]) {
                                        _0x144f4a['label'] = _0x3df41f[0x1], _0x3df41f = _0x4d7e50;
                                        break;
                                    }
                                    if (_0x3df41f && _0x144f4a['label'] < _0x3df41f[0x2]) {
                                        _0x144f4a['label'] = _0x3df41f[0x2], _0x144f4a['ops']['push'](_0x4d7e50);
                                        break;
                                    }
                                    _0x3df41f[0x2] && _0x144f4a['ops']['pop'](), _0x144f4a['trys']['pop']();
                                    continue;
                                }
                                _0x4d7e50 = _0x2baefe['call'](_0x21b798, _0x144f4a);
                            } catch (_0x4ac00a) {
                                _0x4d7e50 = [
                                    0x6,
                                    _0x4ac00a
                                ], _0x2309d3 = 0x0;
                            } finally {
                                _0x26f73d = _0x3df41f = 0x0;
                            }
                        if (0x5 & _0x4d7e50[0x0])
                            throw _0x4d7e50[0x1];
                        return {
                            'value': _0x4d7e50[0x0] ? _0x4d7e50[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x26f73d, _0x2309d3, _0x3df41f, _0x4789c9, _0x144f4a = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x3df41f[0x0])
                                    throw _0x3df41f[0x1];
                                return _0x3df41f[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x4789c9 = {
                        'next': _0x2ea527(0x0),
                        'throw': _0x2ea527(0x1),
                        'return': _0x2ea527(0x2)
                    }, 'function' == typeof Symbol && (_0x4789c9[Symbol['iterator']] = function () {
                        return this;
                    }), _0x4789c9;
                };
            Object['defineProp' + 'erty'](_0x434fba, '__esModule', { 'value': !0x0 });
            var _0x377768 = _0x365fcc('../constan' + 't/texts'), _0x2e6090 = _0x365fcc('../manager' + '/UIManager'), _0x1a5e3c = _0x365fcc('../manager' + '/PlatformM' + 'anager'), _0x6800cc = _0x365fcc('../constan' + 't/enums'), _0x78e5f = _0x365fcc('../manager' + '/ExportGam' + 'eManager'), _0x1fb91d = _0x365fcc('../config/' + 'Config'), _0x4819bf = _0x365fcc('../config/' + 'CarDataCon' + 'fig'), _0x4c7347 = _0x365fcc('../data/Ro' + 'leInfo'), _0x554bf4 = _0x365fcc('../utils/M' + 'athUtil'), _0x40a190 = _0x365fcc('../platfor' + 'ms/MiniGam' + 'e'), _0x2347ac = _0x365fcc('../ui/laya' + 'MaxUI'), _0x2a3516 = _0x365fcc('../BGame/B' + 'Game'), _0x88aba1 = _0x365fcc('../BGame/B' + 'Enum'), _0x53af73 = _0x365fcc('../BGame/m' + 'gr/BUrlMgr'), _0x4ea195 = _0x365fcc('./ChaPingP' + 'anel'), _0x24e96b = _0x365fcc('../data/en' + 'ergyData'), _0x146b8f = _0x365fcc('../CGame/c' + 'ljdSdk'), _0x1a75c2 = _0x365fcc('../utils/D' + 'ataUtil'), _0x132434 = 0.3, _0xd1a7f = function (_0xdf1531) {
                    function _0x1cd8f6() {
                        var _0x3517bf = _0xdf1531['call'](this) || this;
                        return _0x3517bf['curPercent'] = 0x0, _0x3517bf['isNewUser'] = 0x0, _0x3517bf['autoDestro' + 'yAtClosed'] = !0x0, _0x3517bf;
                    }
                    return _0x594cd3(_0x1cd8f6, _0xdf1531), _0x1cd8f6['prototype']['onAwake'] = function () {
                        return _0x36910f(this, void 0x0, void 0x0, function () {
                            var _0xe06354;
                            return _0x2629d6(this, function (_0x38cdb3) {
                                return this['pivot'](Laya['stage']['width'] / 0x2, Laya['stage']['height'] / 0x2), this['size'](Laya['stage']['width'], Laya['stage']['height']), this['img_bg']['width'] = Laya['stage']['width'], this['img_bg']['height'] = Laya['stage']['height'], _0x1fb91d['default']['platformTy' + 'pr'] == _0x6800cc['PlatformTy' + 'pe']['wx'] && (_0x78e5f['default']['Instance']()['onStatInit'](), _0x78e5f['default']['Instance']()['onStatLogi' + 'n'](), _0x78e5f['default']['Instance']()['onStatCrea' + 'teRole']()), this['tipLabel']['text'] = _0x377768['GameText']['LoadingTip'], _0xe06354 = _0x1fb91d['default']['config'], Laya['loader']['load'](_0xe06354, Laya['Handler']['create'](this, this['onLoadResO' + 'vers']), Laya['Handler']['create'](this, this['onLoadProg' + 'ress']), Laya['Loader']['JSON']), [0x2];
                            });
                        });
                    }, _0x1cd8f6['prototype']['onLoadResE' + 'rror'] = function (_0x911ade) {
                        console['error']('Load\x20Res\x20E' + 'rror:\x20'), console['error'](_0x911ade);
                    }, _0x1cd8f6['prototype']['onLoadProg' + 'ress'] = function (_0x287d27) {
                        var _0x307ea5 = (this['progressBa' + 'r']['value'], _0x287d27 * _0x132434);
                        this['progressBa' + 'r']['value'] = _0x307ea5, this['per']['text'] = Math['round'](0x64 * _0x307ea5) + '%';
                    }, _0x1cd8f6['prototype']['onLoadResO' + 'vers'] = function () {
                        Laya['loader']['load']('versions/v' + 'ersion.jso' + 'n', Laya['Handler']['create'](this, this['onLoadResO' + 'ver']));
                    }, _0x1cd8f6['prototype']['onLoadResO' + 'ver'] = function (_0x5ce5ab) {
                        this['configData']();
                        var _0x6caa90 = Laya['loader']['getRes']('versions/v' + 'ersion.jso' + 'n'), _0x256cc2 = _0x6caa90['version'];
                        _0x1fb91d['default']['version'] = _0x256cc2, _0x2a3516['default']['bgame']['getPlatfor' + 'm']()['setVersion'](_0x256cc2);
                        var _0x3695b0 = this;
                        _0x2a3516['default']['getUserInf' + 'oMgr']()['login'](function (_0x42d572) {
                            switch (_0x42d572['result']) {
                            case _0x88aba1['EResult']['succeed']:
                                _0x4c7347['default']['importData'](_0x146b8f['default']['gameInfo']), _0x24e96b['default']['I']['init']();
                                var _0x1c3841 = _0x4c7347['default']['readStamp'](), _0x2d818f = _0x554bf4['default']['getTimesta' + 'mp'](), _0x56de61 = 0x0;
                                _0x1c3841 && (_0x56de61 = _0x2d818f - _0x1c3841), _0x1a75c2['default']['newDot'](_0x377768['GetDotText']['jinruload']), _0x4c7347['default']['OffLineTim' + 'er'] = Math['floor'](_0x56de61 / 0x3e8);
                                var _0x2fd00a = _0x554bf4['default']['isSameDay'](_0x1c3841);
                                _0x2fd00a || (_0x4c7347['default']['setTodayfr' + 'eegoldmax'](_0x4819bf['default']['todayfreeg' + 'oldmax']), _0x4c7347['default']['setTodaygo' + 'ldbagmax'](_0x4819bf['default']['todaygoldb' + 'agmax']), _0x4c7347['default']['setTodayfr' + 'eepowermax'](_0x4819bf['default']['todayfreep' + 'owermax']), _0x4c7347['default']['SigeDays'] >= 0x8 && _0x4c7347['default']['setSigeDay' + 's'](0x1), _0x4c7347['default']['setIsGetSi' + 'gn'](!0x1)), _0x3695b0['tipLabel']['text'] = _0x377768['GameText']['LoadingSce' + 'ne'], _0x3695b0['progressBa' + 'r']['value'] = _0x132434, _0x3695b0['per']['text'] = Math['round'](0x64 * _0x132434) + '%';
                                var _0x2109a6 = [];
                                _0x2109a6['push'](_0x1fb91d['default']['Res3D']['HomeScene']), _0x2109a6['push'](_0x1fb91d['default']['Res3D']['GameScene']), Laya['loader']['create'](_0x2109a6, Laya['Handler']['create'](_0x3695b0, _0x3695b0['onLoad3DRe' + 'sOver']), Laya['Handler']['create'](_0x3695b0, _0x3695b0['onLoad3DRe' + 'sProgress']));
                                break;
                            case _0x88aba1['EResult']['Failure']:
                                break;
                            case _0x88aba1['EResult']['cancel']:
                            }
                        });
                    }, _0x1cd8f6['prototype']['onLoad3DRe' + 'sError'] = function (_0x12980a) {
                        console['error']('Load3d\x20Res' + '\x20Error:\x20'), console['error'](_0x12980a);
                    }, _0x1cd8f6['prototype']['onLoad3DRe' + 'sProgress'] = function (_0x35b328) {
                        var _0x28cdc4 = _0x132434, _0x5d9108 = _0x28cdc4 + _0x35b328 * (0x1 - _0x132434);
                        _0x5d9108 = _0x5d9108 > 0x1 ? 0x1 : _0x5d9108, _0x5d9108 < this['curPercent'] || (this['curPercent'] = _0x5d9108, this['progressBa' + 'r']['value'] = _0x5d9108, this['per']['text'] = Math['round'](0x64 * _0x5d9108) + '%');
                    }, _0x1cd8f6['prototype']['onLoad3DRe' + 'sOver'] = function () {
                        return _0x36910f(this, void 0x0, void 0x0, function () {
                            return _0x2629d6(this, function (_0x492fea) {
                                this['progressBa' + 'r']['value'] = 0x1, this['per']['text'] = '100%', this['tipLabel']['text'] = _0x377768['GameText']['LoadingOve' + 'r'];
                                try {
                                    FKGames['init']({
                                        'debug': !![],
                                        'appName': '',
                                        'gamemonetizeId': '57860ohh24n3m32ja0zwe97dl39q4xxs',
                                        'gamedistributionId': '',
                                        'complete': () => {
                                            _0x1a75c2['default']['newDot'](_0x377768['GetDotText']['wanchenglo' + 'ad']), _0x2e6090['default']['switchScen' + 'e'](_0x1fb91d['default']['homeScene']), _0x146b8f['default']['uploadScor' + 'e'](_0x4c7347['default']['CustomsDat' + 'a']['length'], _0x40a190['MiniGame']['I']['starAll']()), console['log']('----------' + '初始化成功!!!--' + '--------');
                                        }
                                    });
                                } catch (_0x19bd04) {
                                    console['error'](_0x19bd04), _0x1a5e3c['default']['platform']['showWarnin' + 'g'](_0x6800cc['ErrorCode']['ExitMiniGa' + 'me']);
                                }
                                return [0x2];
                            });
                        });
                    }, _0x1cd8f6['prototype']['onLoadTabl' + 'e'] = function () {
                        _0x2a3516['default']['getTableMg' + 'r']()['loadAllTab' + 'le'](function (_0xa850f7) {
                            switch (_0xa850f7['result']) {
                            case _0x88aba1['EResult']['succeed']:
                                console['log']('加载表格成功');
                                break;
                            default:
                                console['log']('加载表格失败');
                            }
                        }['bind'](this));
                    }, _0x1cd8f6['prototype']['configData'] = function () {
                        _0x4819bf['default']['config_lev' + 'el'] = Laya['Loader']['getRes']('config/gam' + 'e_level_co' + 'nfig.json'), _0x4819bf['default']['config_car'] = Laya['Loader']['getRes']('config/gam' + 'e_car_conf' + 'ig.json'), _0x4819bf['default']['config_con' + 'stant'] = Laya['Loader']['getRes']('config/gam' + 'e_constant' + '_config.js' + 'on'), _0x4819bf['default']['config_mot' + 'o'] = Laya['Loader']['getRes']('config/gam' + 'e_mycar_co' + 'nfig.json'), _0x4819bf['default']['config_sha' + 're'] = Laya['Loader']['getRes']('config/gam' + 'e_share_co' + 'nfig.json'), _0x4819bf['default']['config_sig' + 'nin'] = Laya['Loader']['getRes']('config/gam' + 'e_signin_c' + 'onfig.json'), _0x4819bf['default']['config_mot' + 'oChangeLv'] = Laya['Loader']['getRes']('config/gam' + 'e_motounlo' + 'ck_config.' + 'json'), _0x4819bf['default']['game_mycar' + 'unlock_con' + 'fig'] = Laya['Loader']['getRes']('config/gam' + 'e_mycarunl' + 'ock_config' + '.json'), _0x4819bf['default']['game_name_' + 'config'] = Laya['Loader']['getRes']('config/gam' + 'e_name_con' + 'fig.json'), _0x4819bf['default']['share'] = this['findValue']('share'), _0x4819bf['default']['kefuReward'] = this['findValue']('kefuReward'), _0x4819bf['default']['defaultpow' + 'er'] = this['findValue']('defaultpow' + 'er'), _0x4819bf['default']['defaultgol' + 'd'] = this['findValue']('defaultgol' + 'd'), _0x4819bf['default']['powermax'] = this['findValue']('powermax'), _0x4819bf['default']['powerrecov' + 'erytime'] = this['findValue']('powerrecov' + 'erytime'), _0x4819bf['default']['powerrecov' + 'erynum'] = this['findValue']('powerrecov' + 'erynum'), _0x4819bf['default']['todayfreeg' + 'oldmax'] = this['findValue']('todayfreeg' + 'oldmax'), _0x4819bf['default']['freegoldnu' + 'm'] = this['findValue']('freegoldnu' + 'm'), _0x4819bf['default']['todayfreep' + 'owermax'] = this['findValue']('todayfreep' + 'owermax'), _0x4819bf['default']['freepowern' + 'um'] = this['findValue']('freepowern' + 'um'), _0x4819bf['default']['reality_in' + 'itialSpeed'] = this['findValue']('initialSpe' + 'ed'), _0x4819bf['default']['accelerati' + 'on'] = this['findValue']('accelerati' + 'on'), _0x4819bf['default']['brakingspe' + 'ed'] = this['findValue']('brakingspe' + 'ed'), _0x4819bf['default']['slideMinsS' + 'peed'] = _0x4819bf['default']['accelerati' + 'on'] / this['findValue']('slowdown'), _0x4819bf['default']['carRotateY'] = this['findValue']('turnacorne' + 'r'), _0x4819bf['default']['carSlantX'] = this['findValue']('tilt'), _0x4819bf['default']['carMove'] = this['findValue']('motomove'), _0x4819bf['default']['rotateHome' + 'Car'] = this['findValue']('rotateHome' + 'Car'), _0x4819bf['default']['twostargol' + 'd'] = this['findValue']('twostargol' + 'd'), _0x4819bf['default']['threestarg' + 'old'] = this['findValue']('threestarg' + 'old'), _0x4819bf['default']['maxspeed'] = this['findValue']('maxspeed'), _0x4819bf['default']['minspeed'] = this['findValue']('minspeed'), _0x4819bf['default']['initialSpe' + 'edmax'] = this['findValue']('initialSpe' + 'edmax'), _0x4819bf['default']['autocidesp' + 'eed'] = this['findValue']('autocidesp' + 'eed'), _0x4819bf['default']['nitrogenre' + 'covery'] = this['findValue']('nitrogenre' + 'covery'), _0x4819bf['default']['nitrogenus' + 'e'] = this['findValue']('nitrogenus' + 'e'), _0x4819bf['default']['eliminatio' + 'ninterval'] = this['findValue']('eliminatio' + 'ninterval'), _0x4819bf['default']['eliminatio' + 'nkeep'] = this['findValue']('eliminatio' + 'nkeep'), _0x4819bf['default']['nitrogenin' + 'crease'] = this['findValue']('nitrogenin' + 'crease'), _0x4819bf['default']['timetrial'] = this['findValue']('timetrial'), _0x4819bf['default']['knockout'] = this['findValue']('knockout'), _0x4819bf['default']['notraffic'] = this['findValue']('notraffic'), _0x4819bf['default']['sidewipewi' + 'de'] = this['findValue']('sidewipewi' + 'de'), _0x4819bf['default']['goldbagref' + 'resh'] = this['findValue']('goldbagref' + 'resh'), _0x4819bf['default']['todaygoldb' + 'agmax'] = this['findValue']('todaygoldb' + 'agmax'), _0x4819bf['default']['goldbagcoe' + 'fficient'] = this['findValue']('goldbagcoe' + 'fficient'), _0x4819bf['default']['levelvideo'] = this['findValue']('levelvideo'), _0x4819bf['default']['userMaxMot' + 'oData'] = _0x4819bf['default']['config_mot' + 'o'][_0x4819bf['default']['config_mot' + 'o']['length'] - 0x1], _0x4819bf['default']['LuckyCarAr' + 'r'] = [];
                        for (var _0x302975 = 0x0; _0x302975 < _0x4819bf['default']['game_mycar' + 'unlock_con' + 'fig']['length']; _0x302975++) {
                            var _0x2cb7de = _0x4819bf['default']['game_mycar' + 'unlock_con' + 'fig'][_0x302975];
                            0x2 == _0x2cb7de['unlocktype'] && _0x4819bf['default']['LuckyCarAr' + 'r']['push'](_0x2cb7de);
                        }
                    }, _0x1cd8f6['prototype']['findValue'] = function (_0x2f0768) {
                        for (var _0x3f13de = 0x0; _0x3f13de < _0x4819bf['default']['config_con' + 'stant']['length']; _0x3f13de++) {
                            var _0x32ccfe = _0x4819bf['default']['config_con' + 'stant'][_0x3f13de];
                            if (_0x32ccfe['key'] == _0x2f0768)
                                return _0x32ccfe['value'];
                        }
                        return null;
                    }, _0x1cd8f6['prototype']['onShowHand' + 'ler'] = function (_0x4e92b2) {
                        var _0x554b81 = _0x554bf4['default']['randomInSe' + 'ction'](0x1, 0x2);
                        0x1 == _0x554b81 ? _0x1fb91d['default']['shareType'] = 0x1 : _0x1fb91d['default']['shareType'] = 0x2, _0x40a190['MiniGame']['I']['onShareApp' + 'Message'](_0x4819bf['default']['config_sha' + 're'][_0x1fb91d['default']['shareType'] - 0x1]['desc'], _0x53af73['default']['getMgr']()['getUrl']('res') + ('/share/sha' + 're_') + _0x1fb91d['default']['shareType'] + '.jpg', 'InvitateID' + '=' + _0x1fb91d['default']['invitateID']);
                    }, _0x1cd8f6;
                }(_0x2347ac['ui']['scenes']['LoginScene' + 'UI']);
            _0x434fba['default'] = _0xd1a7f;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/BGame': 0x3,
            '../BGame/mgr/BUrlMgr': 0x14,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../data/energyData': 0x40,
            '../manager/ExportGameManager': 0x4c,
            '../manager/PlatformManager': 0x4e,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24
        }
    ],
    0x30: [
        function (_0xd9cc07, _0xac6999, _0x566190) {
            'use strict';
            var _0x399b83 = this && this['__extends'] || function () {
                var _0x518a5b = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x2aeace, _0x311968) {
                    _0x2aeace['__proto__'] = _0x311968;
                } || function (_0x5a4edd, _0x993e52) {
                    for (var _0x340065 in _0x993e52)
                        _0x993e52['hasOwnProp' + 'erty'](_0x340065) && (_0x5a4edd[_0x340065] = _0x993e52[_0x340065]);
                };
                return function (_0x1449ab, _0x53ee67) {
                    function _0x3176c9() {
                        this['constructo' + 'r'] = _0x1449ab;
                    }
                    _0x518a5b(_0x1449ab, _0x53ee67), _0x1449ab['prototype'] = null === _0x53ee67 ? Object['create'](_0x53ee67) : (_0x3176c9['prototype'] = _0x53ee67['prototype'], new _0x3176c9());
                };
            }();
            Object['defineProp' + 'erty'](_0x566190, '__esModule', { 'value': !0x0 });
            var _0x49c48f = _0xd9cc07('../ui/laya' + 'MaxUI'), _0x166bdf = _0xd9cc07('../prefabs' + '/ExportPre' + 'fabs'), _0x15a0e7 = _0xd9cc07('../constan' + 't/enums'), _0x4524e9 = _0xd9cc07('../data/Ro' + 'leInfo'), _0x529531 = _0xd9cc07('../platfor' + 'ms/MiniGam' + 'e'), _0x486275 = _0xd9cc07('../manager' + '/UIManager'), _0x48ad00 = _0xd9cc07('../constan' + 't/texts'), _0x1eb573 = _0xd9cc07('../scripts' + '/SpriteSca' + 'le'), _0x482842 = _0xd9cc07('../config/' + 'Config'), _0x397533 = _0xd9cc07('../CGame/c' + 'ljdSdk'), _0x57cccf = _0xd9cc07('../config/' + 'CarDataCon' + 'fig'), _0x5f4119 = _0xd9cc07('../utils/M' + 'athUtil'), _0x30c550 = _0xd9cc07('../BGame/m' + 'gr/BAdMgr'), _0x13d0f5 = _0xd9cc07('../BGame/B' + 'Enum'), _0x456e65 = _0xd9cc07('../manager' + '/EventMana' + 'ger'), _0x5728da = _0xd9cc07('../utils/D' + 'ataUtil'), _0x5c6935 = _0xd9cc07('./ChaPingP' + 'anel'), _0x1fd30f = function (_0x3cf1c8) {
                    function _0x379b51(_0x1df5a5) {
                        var _0x863143 = _0x3cf1c8['call'](this) || this;
                        return _0x863143['_type'] = 0x1, _0x863143['carIndex'] = 0x0, _0x863143['_type'] = _0x1df5a5, _0x863143;
                    }
                    return _0x399b83(_0x379b51, _0x3cf1c8), _0x379b51['prototype']['onEnable'] = function () {
                        var _0x2ffcaf = this;
                        this['btn_get']['addCompone' + 'ntIntance'](new _0x1eb573['default'](null, function () {
                            _0x2ffcaf['onGetCar']();
                        }, _0x15a0e7['soundType']['tongYong'])), this['btn_No']['addCompone' + 'ntIntance'](new _0x1eb573['default'](null, function () {
                            _0x2ffcaf['onNo']();
                        }, _0x15a0e7['soundType']['tongYong'])), 0x2 == this['_type'] ? _0x166bdf['default']['addStage'](this['box'], 0x12, !0x1) : _0x166bdf['default']['addStage'](this['box'], _0x15a0e7['ExportId']['lucky'], !0x1), this['init'](), this['wuDian'](), _0x529531['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x379b51['prototype']['wuDian'] = function () {
                        if (this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x397533['default']['isCanShare'] && 0x3 != this['_type'])
                            this['accidentCl' + 'ickMax'] = _0x5f4119['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                        }
                    }, _0x379b51['prototype']['showBanner'] = function () {
                    }, _0x379b51['prototype']['init'] = function () {
                        this['carIndex'] = this['noGetCar'](), this['img_car']['skin'] = 'car/luckyc' + 'ar_' + this['carIndex'] + '.png';
                    }, _0x379b51['prototype']['noGetCar'] = function () {
                        for (var _0x4f6920 = _0x5f4119['default']['getRandomA' + 'rr'](0x0, _0x57cccf['default']['LuckyCarAr' + 'r']['length'] - 0x1, _0x57cccf['default']['LuckyCarAr' + 'r']['length'] - 0x1), _0x58ceab = 0x0; _0x58ceab < _0x4f6920['length']; _0x58ceab++) {
                            var _0x1fb460 = this['userHaveCa' + 'rArr'](_0x57cccf['default']['LuckyCarAr' + 'r'][_0x4f6920[_0x58ceab]]['id']);
                            if (!_0x1fb460['isHave'])
                                return _0x1fb460['id'] % 0x3e8;
                        }
                        return 0x0;
                    }, _0x379b51['prototype']['userHaveCa' + 'rArr'] = function (_0x565205) {
                        for (var _0x130618 = 0x0; _0x130618 < _0x4524e9['default']['UserHaveCa' + 'rArr']['length']; _0x130618++) {
                            var _0x4074a6 = _0x4524e9['default']['UserHaveCa' + 'rArr'][_0x130618];
                            if (_0x4074a6 + 0x3e8 == _0x565205)
                                return {
                                    'isHave': !0x0,
                                    'id': 0x0
                                };
                        }
                        return {
                            'isHave': !0x1,
                            'id': _0x565205
                        };
                    }, _0x379b51['prototype']['onGetCar'] = function () {
                        var _0x154bcf = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x154bcf['succeed']();
                        });
                    }, _0x379b51['prototype']['succeed'] = function () {
                        _0x4524e9['default']['setUseMoto' + 'Index'](this['carIndex']), _0x4524e9['default']['setUserHav' + 'eCarArr'](this['carIndex']), _0x486275['default']['showToast'](_0x48ad00['GameText']['ChangeLuck' + 'yMoto']), this['onCloseBtn']();
                    }, _0x379b51['prototype']['onCloseBtn'] = function () {
                        _0x486275['default']['closeDialo' + 'g'](this);
                    }, _0x379b51['prototype']['onNo'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? _0x486275['default']['closeDialo' + 'g'](this) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x379b51['prototype']['onDisable'] = function () {
                        if (_0x5728da['default']['hideBanner'](), 0x1 == this['_type'])
                            _0x486275['default']['switchScen' + 'e'](_0x482842['default']['loadCustom' + 's']);
                        else {
                            if (_0x397533['default']['isCanDemo']) {
                                switch (_0x57cccf['default']['cumtosNum']) {
                                case 0x1:
                                    _0x5728da['default']['newDot'](_0x48ad00['GetDotText']['DiyiguanFa' + 'nhuiGUanka' + 'JIemian']);
                                    break;
                                case 0x2:
                                    _0x5728da['default']['newDot'](_0x48ad00['GetDotText']['erguanFanh' + 'uiGUankaji' + 'emian']);
                                    break;
                                case 0x3:
                                    _0x5728da['default']['newDot'](_0x48ad00['GetDotText']['sanguanfan' + 'huiguanka']);
                                }
                                _0x486275['default']['showDialog'](new _0x5c6935['default'](0x2, !0x1));
                            } else
                                _0x456e65['default']['getInstanc' + 'e']()['emit'](_0x15a0e7['GameEvent']['showBanner'], null);
                        }
                        this['btn_get']['off'](Laya['Event']['CLICK'], this, this['onGetCar']), this['btn_No']['off'](Laya['Event']['CLICK'], this, this['onNo']);
                    }, _0x379b51;
                }(_0x49c48f['ui']['dialogs']['LuckyPanel' + 'UI']);
            _0x566190['default'] = _0x1fd30f;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24
        }
    ],
    0x31: [
        function (_0x143f8b, _0x54655b, _0x3228ac) {
            'use strict';
            var _0x7f8ba0 = this && this['__extends'] || function () {
                var _0x57459b = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x560505, _0x21b0a3) {
                    _0x560505['__proto__'] = _0x21b0a3;
                } || function (_0x34882c, _0xe4720b) {
                    for (var _0x1b2cc4 in _0xe4720b)
                        _0xe4720b['hasOwnProp' + 'erty'](_0x1b2cc4) && (_0x34882c[_0x1b2cc4] = _0xe4720b[_0x1b2cc4]);
                };
                return function (_0x51d6dd, _0x4b5217) {
                    function _0x2838e3() {
                        this['constructo' + 'r'] = _0x51d6dd;
                    }
                    _0x57459b(_0x51d6dd, _0x4b5217), _0x51d6dd['prototype'] = null === _0x4b5217 ? Object['create'](_0x4b5217) : (_0x2838e3['prototype'] = _0x4b5217['prototype'], new _0x2838e3());
                };
            }();
            Object['defineProp' + 'erty'](_0x3228ac, '__esModule', { 'value': !0x0 });
            var _0x38b519 = _0x143f8b('../ui/laya' + 'MaxUI'), _0x3c9c1d = _0x143f8b('../prefabs' + '/ExportPre' + 'fabs'), _0x1d8ef2 = _0x143f8b('../constan' + 't/enums'), _0x3c99e0 = _0x143f8b('../data/Ro' + 'leInfo'), _0x3f1df2 = _0x143f8b('../config/' + 'CarDataCon' + 'fig'), _0x3b5f71 = _0x143f8b('../utils/U' + 'tils3d'), _0x4e7a11 = _0x143f8b('../CGame/c' + 'ljdSdk'), _0x39ae75 = _0x143f8b('../scripts' + '/SpriteSca' + 'le'), _0x596164 = _0x143f8b('../manager' + '/UIManager'), _0x20f6f6 = _0x143f8b('../manager' + '/EventMana' + 'ger'), _0x7a44a8 = _0x143f8b('./SignPane' + 'l'), _0x341ec3 = _0x143f8b('../constan' + 't/texts'), _0x19e2ff = _0x143f8b('../platfor' + 'ms/MiniGam' + 'e'), _0xd5f9c3 = _0x143f8b('../BGame/B' + 'Enum'), _0x4eface = _0x143f8b('../BGame/m' + 'gr/BShareM' + 'gr'), _0x13ca11 = _0x143f8b('../BGame/m' + 'gr/BAdMgr'), _0x1ebe98 = _0x143f8b('../config/' + 'Config'), _0xafd1e8 = _0x143f8b('../utils/D' + 'ataUtil'), _0x469275 = _0x143f8b('../utils/M' + 'athUtil'), _0x43329b = function (_0x3f8ac3) {
                    function _0x53555c() {
                        var _0x2c20c9 = _0x3f8ac3['call'](this) || this;
                        return _0x2c20c9['isExitClic' + 'k'] = !0x1, _0x2c20c9;
                    }
                    return _0x7f8ba0(_0x53555c, _0x3f8ac3), _0x53555c['prototype']['onEnable'] = function () {
                        var _0x25e581 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x3c9c1d['default']['addStage'](this['box'], _0x1d8ef2['ExportId']['offLine'], !0x1), this['init'](), this['btn_dounbl' + 'eGold']['addCompone' + 'ntIntance'](new _0x39ae75['default'](null, function () {
                            _0x25e581['palyShowVi' + 'deoAd']();
                        }, _0x1d8ef2['soundType']['tongYong'])), this['btn_getGol' + 'd']['addCompone' + 'ntIntance'](new _0x39ae75['default'](null, function () {
                            _0x25e581['onGetGold']();
                        }, _0x1d8ef2['soundType']['tongYong'])), _0x20f6f6['default']['getInstanc' + 'e']()['on'](_0x1d8ef2['GameEvent']['Offline'], this['shareWin'], this), this['wuDian'](), _0x19e2ff['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x53555c['prototype']['wuDian'] = function () {
                        if (_0xafd1e8['default']['hideBanner'](), this['isExitClic' + 'k'] = !0x1, this['btn_getGol' + 'd']['y'] = Laya['stage']['height'] - this['btn_getGol' + 'd']['height'] - 0x37, this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x4e7a11['default']['isCanShare'])
                            this['accidentCl' + 'ickMax'] = _0x469275['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                            var _0x20d8e7 = _0xafd1e8['default']['showBanner' + 'Ad']();
                            this['isExitClic' + 'k'] = !0x0, _0x20d8e7 ? this['btn_getGol' + 'd']['y'] = Laya['stage']['height'] - _0x20d8e7['getSize']()['height'] - _0x1ebe98['default']['showBanner'] : this['btn_getGol' + 'd']['y'] = Laya['stage']['height'] - this['btn_getGol' + 'd']['height'] - 0xf0;
                        }
                    }, _0x53555c['prototype']['showBanner'] = function () {
                        var _0x205e05 = this, _0x7658c1 = _0xafd1e8['default']['showBanner' + 'Ad']();
                        if (_0x7658c1) {
                            var _0x522bd0 = Laya['stage']['height'] - _0x7658c1['getSize']()['height'] - _0x1ebe98['default']['showBanner'];
                            Laya['Tween']['to'](this['btn_getGol' + 'd'], { 'y': _0x522bd0 }, 0x64, Laya['Ease']['strongOut'], Laya['Handler']['create'](this, function () {
                                _0x205e05['isExitClic' + 'k'] = !0x0;
                            }));
                        } else
                            this['isExitClic' + 'k'] = !0x0, this['btn_getGol' + 'd']['y'] = Laya['stage']['height'] - this['btn_getGol' + 'd']['height'] - 0xf0;
                    }, _0x53555c['prototype']['init'] = function () {
                        if (this['_customsDa' + 'ta'] = _0x3f1df2['default']['config_lev' + 'el'][_0x3c99e0['default']['CustomsDat' + 'a']['length'] - 0x1], _0x3c99e0['default']['OffLineTim' + 'er'] >= 0xe10)
                            this['_goldNum'] = Math['floor'](this['_customsDa' + 'ta']['freegold']);
                        else {
                            var _0x48695f = _0x3b5f71['default']['againstLer' + 'p'](0xa, 0xe10, _0x3c99e0['default']['OffLineTim' + 'er']);
                            this['_goldNum'] = Math['floor'](_0x3b5f71['default']['lerp'](0x1, this['_customsDa' + 'ta']['freegold'], _0x48695f));
                        }
                        this['lab_gold']['text'] = '+' + this['_goldNum'], _0x3c99e0['default']['OffLineTim' + 'er'] = 0x0;
                    }, _0x53555c['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x396099 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x396099['shareWin'](!0x0);
                        });
                    }, _0x53555c['prototype']['share'] = function () {
                        _0x4eface['default']['getMgr']()['onShare'](function (_0x4ec106) {
                            if ('在本地' == _0x4ec106['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x4ec106['result']) {
                                case _0xd5f9c3['EResult']['succeed']:
                                    _0x3f1df2['default']['shareType'] = _0x1d8ef2['shareType']['offLine'];
                                    break;
                                case _0xd5f9c3['EResult']['Failure']:
                                    _0x596164['default']['showToast'](_0x341ec3['GameText']['NoVideoAd']);
                                }
                        }['bind'](this));
                    }, _0x53555c['prototype']['shareWin'] = function (_0xb47681) {
                        void 0x0 === _0xb47681 && (_0xb47681 = !0x1), _0xb47681 ? this['onDounbleG' + 'old']() : (_0x3f1df2['default']['showTimer'] - _0x3f1df2['default']['hideTimer']) / 0x3e8 >= _0x3f1df2['default']['share'] ? this['onDounbleG' + 'old']() : _0x596164['default']['showToast'](_0x341ec3['GameText']['ShareFailT' + 'ip']);
                    }, _0x53555c['prototype']['onDounbleG' + 'old'] = function () {
                        this['award'](0x2);
                    }, _0x53555c['prototype']['onGetGold'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? this['award'](0x1) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x53555c['prototype']['award'] = function (_0x1c6906) {
                        _0x3c99e0['default']['addGold'](this['_goldNum'] * _0x1c6906), _0x20f6f6['default']['getInstanc' + 'e']()['emit'](_0x1d8ef2['GameEvent']['updataGold'], null), _0x20f6f6['default']['getInstanc' + 'e']()['emit'](_0x1d8ef2['GameEvent']['homeGoldTw' + 'een'], null), this['onReturn']();
                    }, _0x53555c['prototype']['onReturn'] = function () {
                        _0x596164['default']['closeDialo' + 'g'](this);
                    }, _0x53555c['prototype']['onDisable'] = function () {
                        _0xafd1e8['default']['hideBanner'](), _0x3c99e0['default']['IsGetSign'] || _0x596164['default']['showDialog'](new _0x7a44a8['default']()), _0x3c99e0['default']['OffLineTim' + 'er'] = 0x0, _0x3f1df2['default']['shareType'] = _0x1d8ef2['shareType']['not'], this['btn_dounbl' + 'eGold']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_getGol' + 'd']['off'](Laya['Event']['CLICK'], this, this['onGetGold']), _0x20f6f6['default']['getInstanc' + 'e']()['on'](_0x1d8ef2['GameEvent']['Offline'], this['shareWin'], this);
                    }, _0x53555c;
                }(_0x38b519['ui']['dialogs']['OffLinePan' + 'elUI']);
            _0x3228ac['default'] = _0x43329b;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            '../utils/Utils3d': 0x5d,
            './SignPanel': 0x37
        }
    ],
    0x32: [
        function (_0x3e1951, _0x1e05b0, _0x1e9552) {
            'use strict';
            var _0x3d4203 = this && this['__extends'] || function () {
                var _0x1420fa = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x3ea32f, _0x10407e) {
                    _0x3ea32f['__proto__'] = _0x10407e;
                } || function (_0x5a1189, _0x54c10e) {
                    for (var _0x57fc3c in _0x54c10e)
                        _0x54c10e['hasOwnProp' + 'erty'](_0x57fc3c) && (_0x5a1189[_0x57fc3c] = _0x54c10e[_0x57fc3c]);
                };
                return function (_0x58360b, _0x314578) {
                    function _0x3c0a54() {
                        this['constructo' + 'r'] = _0x58360b;
                    }
                    _0x1420fa(_0x58360b, _0x314578), _0x58360b['prototype'] = null === _0x314578 ? Object['create'](_0x314578) : (_0x3c0a54['prototype'] = _0x314578['prototype'], new _0x3c0a54());
                };
            }();
            Object['defineProp' + 'erty'](_0x1e9552, '__esModule', { 'value': !0x0 });
            var _0x5b5e95 = _0x3e1951('../ui/laya' + 'MaxUI'), _0x31502a = _0x3e1951('../scripts' + '/SpriteSca' + 'le'), _0x4906b2 = _0x3e1951('../manager' + '/UIManager'), _0xda5af1 = _0x3e1951('../config/' + 'Config'), _0x873efd = _0x3e1951('../constan' + 't/enums'), _0x3dc3f8 = _0x3e1951('./CountDow' + 'nWnd'), _0x33ad9c = _0x3e1951('../prefabs' + '/ExportPre' + 'fabs'), _0x4dc4bc = _0x3e1951('../utils/D' + 'ataUtil'), _0x495340 = _0x3e1951('../platfor' + 'ms/MiniGam' + 'e'), _0xca72f9 = _0x3e1951('../BGame/m' + 'gr/BAdMgr'), _0x294d1b = _0x3e1951('./ChaPingP' + 'anel'), _0x529bf7 = function (_0x2fafa3) {
                    function _0x2df937() {
                        return _0x2fafa3['call'](this) || this;
                    }
                    return _0x3d4203(_0x2df937, _0x2fafa3), _0x2df937['prototype']['onAwake'] = function () {
                        var _0x1eb27d = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['btn_return']['addCompone' + 'ntIntance'](new _0x31502a['default'](null, function () {
                            _0x1eb27d['onReturn']();
                        }, _0x873efd['soundType']['guanBi'])), this['btn_contin' + 'ue']['addCompone' + 'ntIntance'](new _0x31502a['default'](null, function () {
                            _0x1eb27d['onContinue']();
                        }, _0x873efd['soundType']['tongYong'])), _0x33ad9c['default']['addStage'](this['box'], _0x873efd['ExportId']['zanTing'], !0x0), _0x4dc4bc['default']['showBanner' + 'Ad'](), _0x495340['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x2df937['prototype']['onContinue'] = function () {
                        _0x4dc4bc['default']['hideBanner'](), _0x3dc3f8['default']['addToStage'](_0x873efd['CountDownT' + 'ype']['ResumeGame']), _0x4906b2['default']['closeDialo' + 'g'](this);
                    }, _0x2df937['prototype']['onReturn'] = function () {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            _0x4906b2['default']['switchScen' + 'e'](_0xda5af1['default']['homeScene']), _0x4906b2['default']['closeDialo' + 'g'](this), _0x4906b2['default']['showDialog'](new _0x294d1b['default'](0x2, !0x1));
                        });
                    }, _0x2df937['prototype']['onDestroy'] = function () {
                        this['btn_return']['off'](Laya['Event']['MOUSE_OUT'], this, this['onReturn']), this['btn_contin' + 'ue']['off'](Laya['Event']['MOUSE_OUT'], this, this['onContinue']);
                    }, _0x2df937;
                }(_0x5b5e95['ui']['dialogs']['PasePanelU' + 'I']);
            _0x1e9552['default'] = _0x529bf7;
        },
        {
            '../BGame/mgr/BAdMgr': 0x11,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            './ChaPingPanel': 0x24,
            './CountDownWnd': 0x27
        }
    ],
    0x33: [
        function (_0x5ec783, _0x368e6d, _0x5975db) {
            'use strict';
            var _0x1ebc34 = this && this['__extends'] || function () {
                var _0x324aaa = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x2fede7, _0x2cec58) {
                    _0x2fede7['__proto__'] = _0x2cec58;
                } || function (_0x192bab, _0x245a3c) {
                    for (var _0xb39eff in _0x245a3c)
                        _0x245a3c['hasOwnProp' + 'erty'](_0xb39eff) && (_0x192bab[_0xb39eff] = _0x245a3c[_0xb39eff]);
                };
                return function (_0x3ae51b, _0x4b9b8a) {
                    function _0x480c57() {
                        this['constructo' + 'r'] = _0x3ae51b;
                    }
                    _0x324aaa(_0x3ae51b, _0x4b9b8a), _0x3ae51b['prototype'] = null === _0x4b9b8a ? Object['create'](_0x4b9b8a) : (_0x480c57['prototype'] = _0x4b9b8a['prototype'], new _0x480c57());
                };
            }();
            Object['defineProp' + 'erty'](_0x5975db, '__esModule', { 'value': !0x0 });
            var _0x665045 = _0x5ec783('../ui/laya' + 'MaxUI'), _0x4d0366 = _0x5ec783('../prefabs' + '/ExportPre' + 'fabs'), _0x22f441 = _0x5ec783('../constan' + 't/enums'), _0x24b0f3 = _0x5ec783('../config/' + 'CarDataCon' + 'fig'), _0x2271ca = _0x5ec783('../data/Ro' + 'leInfo'), _0x376ca9 = _0x5ec783('../config/' + 'Config'), _0x307cfd = _0x5ec783('../CGame/c' + 'ljdSdk'), _0x1ec746 = _0x5ec783('../scripts' + '/SpriteSca' + 'le'), _0x302aca = _0x5ec783('../manager' + '/UIManager'), _0x5d008f = _0x5ec783('./ServiceP' + 'anel'), _0x441cdd = _0x5ec783('../manager' + '/EventMana' + 'ger'), _0x1f9ba8 = _0x5ec783('../data/en' + 'ergyData'), _0xd25a9f = _0x5ec783('../BGame/u' + 'tils/BTime' + 'Utlis'), _0x4b1ac0 = _0x5ec783('../BGame/B' + 'Enum'), _0x266ce6 = _0x5ec783('../platfor' + 'ms/MiniGam' + 'e'), _0x144f5d = _0x5ec783('../constan' + 't/texts'), _0x452267 = _0x5ec783('../BGame/m' + 'gr/BShareM' + 'gr'), _0x2ef636 = _0x5ec783('../BGame/m' + 'gr/BAdMgr'), _0x22ce26 = _0x5ec783('../utils/D' + 'ataUtil'), _0x6bfea8 = function (_0x59a92a) {
                    function _0x125810() {
                        return _0x59a92a['call'](this) || this;
                    }
                    return _0x1ebc34(_0x125810, _0x59a92a), _0x125810['prototype']['onEnable'] = function () {
                        var _0x2f103b = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x4d0366['default']['addStage'](this['box'], _0x22f441['ExportId']['powerLack'], !0x0), this['init'](), this['btn_return']['addCompone' + 'ntIntance'](new _0x1ec746['default'](null, function () {
                            _0x2f103b['onReturn']();
                        }, _0x22f441['soundType']['guanBi'])), this['btn_getPow' + 'er']['addCompone' + 'ntIntance'](new _0x1ec746['default'](null, function () {
                            _0x2f103b['palyShowVi' + 'deoAd']();
                        }, _0x22f441['soundType']['tongYong'])), this['btn_servic' + 'eGet']['addCompone' + 'ntIntance'](new _0x1ec746['default'](null, function () {
                            _0x2f103b['onServiceG' + 'et']();
                        }, _0x22f441['soundType']['tongYong'])), _0x441cdd['default']['getInstanc' + 'e']()['on'](_0x22f441['GameEvent']['getPower'], this['shareWin'], this), _0x22ce26['default']['showBanner' + 'Ad'](), _0x266ce6['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x125810['prototype']['init'] = function () {
                        this['lab_get1']['text'] = 'Gift：\x20\x20\x20×' + _0x24b0f3['default']['freepowern' + 'um'], this['lab_get2']['text'] = 'Gift：\x20\x20\x20×' + _0x24b0f3['default']['kefuReward'], _0x307cfd['default']['kefuReward'] && (this['btn_servic' + 'eGet']['visible'] = !0x1), _0x376ca9['default']['platformTy' + 'pr'] != _0x22f441['PlatformTy' + 'pe']['wx'] && (this['box_kefu']['visible'] = !0x1), this['showGetPow' + 'er'](), Laya['timer']['loop'](0x3e8, this, this['showGetPow' + 'er']);
                    }, _0x125810['prototype']['showGetPow' + 'er'] = function () {
                        var _0x379645 = _0xd25a9f['default']['getTimeStr'](_0x1f9ba8['default']['I']['getCD'](), _0x4b1ac0['ETimeshow']['full'], _0x4b1ac0['ETimeunit']['sec'], [
                            ':',
                            ''
                        ]);
                        this['lab_timer']['text'] = _0x379645 + '\x20+';
                    }, _0x125810['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x5da1e0 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x5da1e0['shareWin'](!0x0);
                        });
                    }, _0x125810['prototype']['share'] = function () {
                        _0x452267['default']['getMgr']()['onShare'](function (_0x4af3f9) {
                            if ('在本地' == _0x4af3f9['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x4af3f9['result']) {
                                case _0x4b1ac0['EResult']['succeed']:
                                    _0x24b0f3['default']['shareType'] = _0x22f441['shareType']['powerLack'];
                                    break;
                                case _0x4b1ac0['EResult']['Failure']:
                                    _0x302aca['default']['showToast'](_0x144f5d['GameText']['NoVideoAd']);
                                }
                        }['bind'](this));
                    }, _0x125810['prototype']['shareWin'] = function (_0x5b2464) {
                        _0x5b2464 ? this['onGetPower']() : (_0x24b0f3['default']['showTimer'] - _0x24b0f3['default']['hideTimer']) / 0x3e8 >= _0x24b0f3['default']['share'] ? this['onGetPower']() : _0x302aca['default']['showToast'](_0x144f5d['GameText']['ShareFailT' + 'ip']);
                    }, _0x125810['prototype']['onGetPower'] = function () {
                        _0x2271ca['default']['addTodayfr' + 'eepowermax'](-0x1), _0x1f9ba8['default']['I']['add'](_0x24b0f3['default']['freepowern' + 'um']), _0x441cdd['default']['getInstanc' + 'e']()['emit'](_0x22f441['GameEvent']['updataGold'], null), _0x441cdd['default']['getInstanc' + 'e']()['emit'](_0x22f441['GameEvent']['powerGet'], null), this['onReturn']();
                    }, _0x125810['prototype']['onServiceG' + 'et'] = function () {
                        _0x302aca['default']['showDialog'](new _0x5d008f['default']()), this['onReturn']();
                    }, _0x125810['prototype']['onReturn'] = function () {
                        _0x302aca['default']['closeDialo' + 'g'](this);
                    }, _0x125810['prototype']['onDisable'] = function () {
                        Laya['timer']['clear'](this, this['showGetPow' + 'er']), this['btn_getPow' + 'er']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_servic' + 'eGet']['off'](Laya['Event']['CLICK'], this, this['onServiceG' + 'et']), this['btn_return']['off'](Laya['Event']['CLICK'], this, this['onReturn']), _0x24b0f3['default']['shareType'] = _0x22f441['shareType']['not'], _0x441cdd['default']['getInstanc' + 'e']()['off'](_0x22f441['GameEvent']['getPower'], this['shareWin'], this), _0x22ce26['default']['hideBanner']();
                    }, _0x125810;
                }(_0x665045['ui']['dialogs']['PowerLackP' + 'anelUI']);
            _0x5975db['default'] = _0x6bfea8;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../BGame/utils/BTimeUtlis': 0x15,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../data/energyData': 0x40,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            './ServicePanel': 0x36
        }
    ],
    0x34: [
        function (_0x45b8ad, _0x4a663b, _0x2221ec) {
            'use strict';
            var _0x4e2a49 = this && this['__extends'] || function () {
                var _0x42a98a = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x4b8019, _0x5d8780) {
                    _0x4b8019['__proto__'] = _0x5d8780;
                } || function (_0x387ce1, _0x107102) {
                    for (var _0x8ac649 in _0x107102)
                        _0x107102['hasOwnProp' + 'erty'](_0x8ac649) && (_0x387ce1[_0x8ac649] = _0x107102[_0x8ac649]);
                };
                return function (_0x2b5408, _0x365d1a) {
                    function _0x51f85e() {
                        this['constructo' + 'r'] = _0x2b5408;
                    }
                    _0x42a98a(_0x2b5408, _0x365d1a), _0x2b5408['prototype'] = null === _0x365d1a ? Object['create'](_0x365d1a) : (_0x51f85e['prototype'] = _0x365d1a['prototype'], new _0x51f85e());
                };
            }();
            Object['defineProp' + 'erty'](_0x2221ec, '__esModule', { 'value': !0x0 });
            var _0x134130 = _0x45b8ad('../ui/laya' + 'MaxUI'), _0x5818b3 = _0x45b8ad('../scripts' + '/SpriteSca' + 'le'), _0x82fc28 = _0x45b8ad('../constan' + 't/enums'), _0x466120 = _0x45b8ad('../manager' + '/UIManager'), _0x56bc76 = _0x45b8ad('../CGame/c' + 'ljdSdk'), _0x15115a = _0x45b8ad('../platfor' + 'ms/MiniGam' + 'e'), _0x1edcff = _0x45b8ad('../config/' + 'Config'), _0x4209c5 = _0x45b8ad('../BGame/B' + 'Enum'), _0x2fc5bd = function (_0x1f934b) {
                    function _0x23ea25() {
                        return _0x1f934b['call'](this) || this;
                    }
                    return _0x4e2a49(_0x23ea25, _0x1f934b), _0x23ea25['prototype']['onEnable'] = function () {
                        var _0x3c9b0e = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['box_Accred' + 'it']['visible'] = !0x1, Laya['timer']['once'](0xa, this, this['onRing'], [0x1]), this['bnt_return']['addCompone' + 'ntIntance'](new _0x5818b3['default'](null, function () {
                            _0x3c9b0e['onReturn']();
                        }, _0x82fc28['soundType']['guanBi'])), this['btn_friend']['addCompone' + 'ntIntance'](new _0x5818b3['default'](null, function () {
                            _0x3c9b0e['onRing'](0x1);
                        }, _0x82fc28['soundType']['tongYong'])), this['btn_world']['addCompone' + 'ntIntance'](new _0x5818b3['default'](null, function () {
                            _0x3c9b0e['onRing'](0x2);
                        }, _0x82fc28['soundType']['tongYong'])), _0x15115a['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x23ea25['prototype']['onRing'] = function (_0x39d1a2) {
                        if (0x1 == _0x39d1a2)
                            this['openData']['width'] = 0x33e, this['openData']['height'] = 0x1e9, this['openData']['x'] = this['Box']['x'] + 0xd, this['openData']['y'] = this['Box']['y'] + 0x5b, this['btn_friend']['skin'] = 'panelUI/ra' + 'nk_up.png', this['lab_friend']['color'] = '#ffffff', this['lab_world']['color'] = '#9c9c9c', this['btn_world']['skin'] = 'panelUI/ra' + 'nk_down.pn' + 'g', this['openData']['postMsg']('open'), this['openData']['visible'] = !0x0, this['list_rank']['visible'] = !0x1, this['UI_user']['visible'] = !0x1;
                        else {
                            var _0x2b1e91 = this;
                            this['openData']['postMsg']('close'), this['openData']['visible'] = !0x1, this['btn_friend']['skin'] = 'panelUI/ra' + 'nk_down.pn' + 'g', this['lab_friend']['color'] = '#9c9c9c', this['lab_world']['color'] = '#ffffff', this['btn_world']['skin'] = 'panelUI/ra' + 'nk_up.png', _0x15115a['MiniGame']['I']['isAuthoriz' + 'e'] ? _0x56bc76['default']['auth'] ? _0x2b1e91['getRank']() : _0x2b1e91['setUserInf' + 'o']() : (_0x2b1e91['box_Accred' + 'it']['visible'] = !0x0, _0x15115a['MiniGame']['I']['wxAccredit'](function (_0x40ce57) {
                                _0x2b1e91['box_Accred' + 'it']['visible'] = !0x1, _0x15115a['MiniGame']['I']['isAuthoriz' + 'e'] ? _0x56bc76['default']['auth'] ? _0x2b1e91['getRank']() : _0x2b1e91['setUserInf' + 'o']() : _0x466120['default']['closeDialo' + 'g'](this);
                            }['bind'](this)));
                        }
                    }, _0x23ea25['prototype']['setUserInf' + 'o'] = function () {
                        var _0x1c956f = this;
                        console['log'](_0x1edcff['default']['userInfo']), _0x56bc76['default']['setUserInf' + 'o'](_0x1edcff['default']['userInfo']['encryptedD' + 'ata'], _0x1edcff['default']['userInfo']['iv'], function (_0x36c7e5) {
                            switch (_0x36c7e5['result']) {
                            case _0x4209c5['EResult']['succeed']:
                                _0x1c956f['getRank']();
                                break;
                            case _0x4209c5['EResult']['Failure']:
                                _0x1c956f['setUserInf' + 'o']();
                            }
                        });
                    }, _0x23ea25['prototype']['getRank'] = function () {
                        var _0xb491e9 = this;
                        _0x56bc76['default']['getRanks'](function (_0x22b808) {
                            if (_0x22b808['result'] == _0x4209c5['EResult']['succeed']) {
                                _0xb491e9['list_rank']['visible'] = !0x0;
                                var _0x3f650e = _0x22b808['data']['my'];
                                switch (_0xb491e9['UI_user']['visible'] = !0x0, _0xb491e9['UI_user']['img_bg']['skin'] = 'openRankin' + 'g/btu_rank' + '2.png', _0xb491e9['UI_user']['img_icon']['skin'] = _0x3f650e['avatar'], _0xb491e9['UI_user']['lab_custom' + 'sNum']['text'] = _0x3f650e['level'] + '关', _0xb491e9['UI_user']['lab_name']['text'] = _0x3f650e['name'], _0xb491e9['UI_user']['lab_starNu' + 'm']['text'] = _0x3f650e['star'] + '', _0x3f650e['rank']) {
                                case 0x1:
                                    _0xb491e9['UI_user']['img_rank']['visible'] = !0x0, _0xb491e9['UI_user']['img_rank']['skin'] = 'openRankin' + 'g/mingci1.' + 'png', _0xb491e9['UI_user']['lab_rank']['text'] = '';
                                    break;
                                case 0x2:
                                    _0xb491e9['UI_user']['img_rank']['visible'] = !0x0, _0xb491e9['UI_user']['img_rank']['skin'] = 'openRankin' + 'g/mingci2.' + 'png', _0xb491e9['UI_user']['lab_rank']['text'] = '';
                                    break;
                                case 0x3:
                                    _0xb491e9['UI_user']['img_rank']['visible'] = !0x0, _0xb491e9['UI_user']['img_rank']['skin'] = 'openRankin' + 'g/mingci3.' + 'png', _0xb491e9['UI_user']['lab_rank']['text'] = '';
                                    break;
                                default:
                                    _0xb491e9['UI_user']['img_rank']['visible'] = !0x1, _0xb491e9['UI_user']['lab_rank']['text'] = _0x3f650e['rank'] + '';
                                }
                                _0xb491e9['rankDataAr' + 'r'] = _0x22b808['data']['rank'], _0xb491e9['list_rank']['vScrollBar' + 'Skin'] = '', _0xb491e9['list_rank']['array'] = new Array(_0xb491e9['rankDataAr' + 'r']['length']), _0xb491e9['list_rank']['itemRender'] = _0x134130['ui']['item']['WorldRanki' + 'ngItemUI'], _0xb491e9['list_rank']['renderHand' + 'ler'] = new Laya['Handler'](_0xb491e9, _0xb491e9['updateRank' + 'Item']), _0xb491e9['list_rank']['refresh']();
                            } else
                                _0xb491e9['getRank']();
                        }['bind'](this));
                    }, _0x23ea25['prototype']['updateRank' + 'Item'] = function (_0x2b5cfa, _0x2e7741) {
                        var _0x3102bf = this['rankDataAr' + 'r'][_0x2e7741];
                        switch (_0x3102bf['rank']) {
                        case 0x1:
                            _0x2b5cfa['img_rank']['visible'] = !0x0, _0x2b5cfa['img_rank']['skin'] = 'openRankin' + 'g/mingci1.' + 'png', _0x2b5cfa['lab_rank']['text'] = '';
                            break;
                        case 0x2:
                            _0x2b5cfa['img_rank']['visible'] = !0x0, _0x2b5cfa['img_rank']['skin'] = 'openRankin' + 'g/mingci2.' + 'png', _0x2b5cfa['lab_rank']['text'] = '';
                            break;
                        case 0x3:
                            _0x2b5cfa['img_rank']['visible'] = !0x0, _0x2b5cfa['img_rank']['skin'] = 'openRankin' + 'g/mingci3.' + 'png', _0x2b5cfa['lab_rank']['text'] = '';
                            break;
                        default:
                            _0x2b5cfa['img_rank']['visible'] = !0x1, _0x2b5cfa['lab_rank']['text'] = _0x3102bf['rank'] + '';
                        }
                        _0x2b5cfa['img_icon']['skin'] = _0x3102bf['avatar'], _0x2b5cfa['lab_name']['text'] = _0x3102bf['name'], _0x2b5cfa['lab_custom' + 'sNum']['text'] = _0x3102bf['level'] + '关', _0x2b5cfa['lab_starNu' + 'm']['text'] = _0x3102bf['star'] + '';
                    }, _0x23ea25['prototype']['onReturn'] = function () {
                        this['openData']['postMsg']('close'), this['openData']['visible'] = !0x1, _0x466120['default']['closeDialo' + 'g'](this);
                    }, _0x23ea25['prototype']['onDisable'] = function () {
                        this['bnt_return']['off'](Laya['Event']['CLICK'], this, this['onReturn']), this['btn_friend']['off'](Laya['Event']['CLICK'], this, this['onRing']), this['btn_world']['off'](Laya['Event']['CLICK'], this, this['onRing']);
                    }, _0x23ea25;
                }(_0x134130['ui']['dialogs']['RankingPan' + 'elUI']);
            _0x2221ec['default'] = _0x2fc5bd;
        },
        {
            '../BGame/BEnum': 0x2,
            '../CGame/cljdSdk': 0x19,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a
        }
    ],
    0x35: [
        function (_0x1d2bd8, _0x4bd146, _0x594a58) {
            'use strict';
            var _0x36210c = this && this['__extends'] || function () {
                var _0x283d27 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x190b22, _0x4a172e) {
                    _0x190b22['__proto__'] = _0x4a172e;
                } || function (_0x2e0c15, _0x20340c) {
                    for (var _0x3ae374 in _0x20340c)
                        _0x20340c['hasOwnProp' + 'erty'](_0x3ae374) && (_0x2e0c15[_0x3ae374] = _0x20340c[_0x3ae374]);
                };
                return function (_0x11959b, _0x5c9df7) {
                    function _0x4289df() {
                        this['constructo' + 'r'] = _0x11959b;
                    }
                    _0x283d27(_0x11959b, _0x5c9df7), _0x11959b['prototype'] = null === _0x5c9df7 ? Object['create'](_0x5c9df7) : (_0x4289df['prototype'] = _0x5c9df7['prototype'], new _0x4289df());
                };
            }();
            Object['defineProp' + 'erty'](_0x594a58, '__esModule', { 'value': !0x0 });
            var _0x1de68b = _0x1d2bd8('../ui/laya' + 'MaxUI'), _0x470c5d = _0x1d2bd8('../data/Ro' + 'leInfo'), _0x3a8ce4 = _0x1d2bd8('../config/' + 'CarDataCon' + 'fig'), _0x17ce67 = _0x1d2bd8('../config/' + 'Config'), _0x5ac468 = _0x1d2bd8('../constan' + 't/enums'), _0x5dac29 = _0x1d2bd8('../scripts' + '/SpriteSca' + 'le'), _0x5e6ac3 = _0x1d2bd8('../manager' + '/UIManager'), _0x1d88af = _0x1d2bd8('../utils/M' + 'athUtil'), _0x56cbe2 = _0x1d2bd8('./PowerLac' + 'kPanel'), _0x5e9ace = _0x1d2bd8('../manager' + '/EventMana' + 'ger'), _0x22b402 = _0x1d2bd8('../manager' + '/SoundMana' + 'ger'), _0x395106 = _0x1d2bd8('../prefabs' + '/ExportHom' + 'ePrefabs'), _0x85b322 = _0x1d2bd8('../data/en' + 'ergyData'), _0xcf8b07 = _0x1d2bd8('../BGame/u' + 'tils/BTime' + 'Utlis'), _0x43569c = _0x1d2bd8('../BGame/B' + 'Enum'), _0x2e1d52 = _0x1d2bd8('./GoldGift' + 'Panel'), _0x392ff7 = _0x1d2bd8('../utils/D' + 'ataUtil'), _0x1a241d = _0x1d2bd8('./LuckyPan' + 'el'), _0x1c4be1 = _0x1d2bd8('../platfor' + 'ms/MiniGam' + 'e'), _0x111af0 = _0x1d2bd8('../CGame/c' + 'ljdSdk'), _0xa48c72 = _0x1d2bd8('../constan' + 't/texts'), _0x35ca68 = _0x1d2bd8('../manager' + '/ResManage' + 'r'), _0x30d13a = _0x1d2bd8('../BGame/m' + 'gr/BAdMgr'), _0x1cd512 = _0x1d2bd8('./ChaPingP' + 'anel'), _0x5c1512 = function (_0x32ebd4) {
                    function _0x5564e1(_0x40baff, _0x109922) {
                        void 0x0 === _0x40baff && (_0x40baff = !0x1), void 0x0 === _0x109922 && (_0x109922 = !0x1);
                        var _0x45c36f = _0x32ebd4['call'](this) || this;
                        return _0x45c36f['isHome'] = !0x1, _0x45c36f['isDemo'] = !0x1, _0x45c36f['chapterAll'] = 0x0, _0x45c36f['chapterNum'] = 0x1, _0x45c36f['posY'] = 0x64, _0x45c36f['isOneClick'] = !0x0, _0x45c36f['isStarGame'] = !0x1, _0x45c36f['isHome'] = _0x40baff, _0x45c36f['isDemo'] = _0x109922, _0x45c36f;
                    }
                    return _0x36210c(_0x5564e1, _0x32ebd4), _0x5564e1['prototype']['onAwake'] = function () {
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['showGold'](), this['initData'](), this['init'](), this['onBtn'](), _0x395106['default']['addStage'](this['Box_zhong'], _0x5ac468['ExportId']['select'], 0x0, 0x1de, 0x2), _0x392ff7['default']['newDot'](_0xa48c72['GetDotText']['GuanKaJieM' + 'ian']), _0x5e9ace['default']['getInstanc' + 'e']()['on'](_0x5ac468['GameEvent']['powerGet'], this['GetPower'], this), _0x5e9ace['default']['getInstanc' + 'e']()['on'](_0x5ac468['GameEvent']['updataGold'], this['showGold'], this), _0x5e9ace['default']['getInstanc' + 'e']()['on'](_0x5ac468['GameEvent']['goldOverTw' + 'een'], this['OnGameGold'], this), _0x5e9ace['default']['getInstanc' + 'e']()['on'](_0x5ac468['GameEvent']['selsctGold' + 'Gift'], this['plapGift'], this), _0x5e9ace['default']['getInstanc' + 'e']()['on'](_0x5ac468['GameEvent']['showBanner'], this['showBanner' + 'Timer'], this), this['isHome'] && this['showBanner' + 'Timer'](), this['loadGameRe' + 'source']();
                    }, _0x5564e1['prototype']['onEnable'] = function () {
                        this['plapGift']();
                    }, _0x5564e1['prototype']['plapGift'] = function () {
                        if (this['Box_goldGi' + 'ft']['visible'] = !0x1, _0x470c5d['default']['todaygoldb' + 'agmax'] > 0x0 && _0x111af0['default']['isCanShare']) {
                            var _0x1ad81e = _0x1d88af['default']['parseStrin' + 'g'](_0x3a8ce4['default']['goldbagref' + 'resh']), _0x2879a3 = _0x1d88af['default']['randomInSe' + 'ction'](_0x1ad81e[0x0], _0x1ad81e[0x1]);
                            this['posY'] = _0x1d88af['default']['randomInSe' + 'ction'](0xc8, 0x190), Laya['timer']['once'](0x3e8 * _0x2879a3, this, this['tweenGoldG' + 'ift']);
                        }
                    }, _0x5564e1['prototype']['tweenGoldG' + 'ift'] = function () {
                        this['Box_goldGi' + 'ft']['visible'] = !0x0;
                        var _0x2b46ad = Laya['stage']['width'] / 0x2;
                        this['starGoldPo' + 's'] = new Laya['Point'](), this['endGoldPos'] = new Laya['Point'](), this['Box_goldGi' + 'ft']['x'] < Laya['stage']['width'] / 0x2 ? (this['starGoldPo' + 's']['setTo'](_0x2b46ad - 0x1f4, this['posY']), this['endGoldPos']['setTo'](_0x2b46ad + 0x1f4, this['posY'])) : (this['starGoldPo' + 's']['setTo'](_0x2b46ad + 0x1f4, this['posY']), this['endGoldPos']['setTo'](_0x2b46ad - 0x1f4, this['posY'])), this['Box_goldGi' + 'ft']['pos'](this['starGoldPo' + 's']['x'], this['starGoldPo' + 's']['y']), this['pathArr'] = _0x1d88af['default']['bezierPath'](this['starGoldPo' + 's'], this['endGoldPos'], 0x3, 0x96, 0x12c), Laya['timer']['frameLoop'](0x1, this, this['paradrop']);
                    }, _0x5564e1['prototype']['paradrop'] = function () {
                        var _0x23fffb = this['pathArr']['shift']();
                        this['Box_goldGi' + 'ft']['pos'](_0x23fffb[0x0], _0x23fffb[0x1]), this['pathArr']['length'] <= 0x0 && (Laya['timer']['clear'](this, this['paradrop']), this['tweenGoldG' + 'ift']());
                    }, _0x5564e1['prototype']['onBtn'] = function () {
                        var _0x340cf2 = this;
                        this['btn_starGa' + 'me']['addCompone' + 'ntIntance'](new _0x5dac29['default'](null, function () {
                            _0x340cf2['onStarGame']();
                        }, _0x5ac468['soundType']['ziDingYi'])), this['btn_return']['addCompone' + 'ntIntance'](new _0x5dac29['default'](null, function () {
                            _0x340cf2['onReturn']();
                        }, _0x5ac468['soundType']['guanBi'])), this['btn_you']['addCompone' + 'ntIntance'](new _0x5dac29['default'](null, function () {
                            _0x340cf2['onChangeCh' + 'apter'](0x2);
                        }, _0x5ac468['soundType']['tongYong'])), this['btn_zuo']['addCompone' + 'ntIntance'](new _0x5dac29['default'](null, function () {
                            _0x340cf2['onChangeCh' + 'apter'](0x1);
                        }, _0x5ac468['soundType']['tongYong'])), this['btn_goldGi' + 'ft']['on'](Laya['Event']['CLICK'], this, this['onGoldGift']), this['btn_goldGi' + 'ftTwo']['on'](Laya['Event']['CLICK'], this, this['onGoldGift']), _0x1c4be1['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x5564e1['prototype']['initData'] = function () {
                        this['chapterAll'] = _0x3a8ce4['default']['config_lev' + 'el']['length'] / 0xa, _0x470c5d['default']['CustomsDat' + 'a']['length'] > 0xa ? this['chapterNum'] = Math['floor']((_0x470c5d['default']['CustomsDat' + 'a']['length'] - 0x1) / 0xa) + 0x1 : this['chapterNum'] = 0x1, this['isOneClick'] = !0x0, this['box_reduce' + 'Power']['visible'] = !0x1;
                    }, _0x5564e1['prototype']['init'] = function () {
                        this['btn_zuo']['visible'] = !0x0, this['btn_you']['visible'] = !0x0, this['isStarGame'] = !0x1, 0x1 == this['chapterNum'] && (this['btn_zuo']['visible'] = !0x1), this['chapterNum'] == this['chapterAll'] && (this['btn_you']['visible'] = !0x1), this['customsDat' + 'aArr'] = this['findCustom' + 'sData'](), this['updateData']();
                        var _0x47509d = 0x0;
                        _0x47509d = _0x470c5d['default']['CustomsDat' + 'a']['length'] % 0xa == 0x0 ? 0x9 : _0x470c5d['default']['CustomsDat' + 'a']['length'] % 0xa - 0x1, _0x47509d >= 0x0 && this['showBtnDat' + 'a'](_0x47509d), this['newUserGui' + 'de'](), this['showGetPow' + 'er'](), Laya['timer']['loop'](0x3e8, this, this['showGetPow' + 'er']), this['ani_select' + 'Guide']['play'](0x0, !0x0);
                    }, _0x5564e1['prototype']['showGetPow' + 'er'] = function () {
                        var _0x3b4731 = _0xcf8b07['default']['getTimeStr'](_0x85b322['default']['I']['getCD'](), _0x43569c['ETimeshow']['full'], _0x43569c['ETimeunit']['sec'], [
                            ':',
                            ''
                        ]);
                        this['lab_getPow' + 'erTimer']['text'] = _0x3b4731 + '\x20+', _0x85b322['default']['I']['isEnergyMa' + 'x']() && (this['box_getPow' + 'er']['visible'] = !0x1);
                    }, _0x5564e1['prototype']['newUserGui' + 'de'] = function () {
                        this['ani_guide']['visible'] = !0x1, _0x470c5d['default']['CustomsDat' + 'a']['length'] <= 0x2 && (this['ani_guide']['visible'] = !0x0, this['ani_guide']['pos'](this['btn_starGa' + 'me']['x'], this['btn_starGa' + 'me']['y'] - this['btn_starGa' + 'me']['height']), this['ani_guide']['play'](0x0, !0x0));
                    }, _0x5564e1['prototype']['updateData'] = function () {
                        for (var _0x3a9ed4 = 0x0; _0x3a9ed4 < this['customsDat' + 'aArr']['length']; _0x3a9ed4++) {
                            var _0xf270f = this['UI_Chapter' + '_' + (_0x3a9ed4 + 0x1)], _0x1a6eaf = 0x0, _0xdd4083 = this['customsDat' + 'aArr'][_0x3a9ed4], _0x31caf5 = this['findRoleIn' + 'fo'](_0xdd4083);
                            if (_0xf270f['img_xuanZh' + 'ong']['visible'] = !0x1, _0xf270f['img_select' + 'Type']['off'](Laya['Event']['CLICK'], this, this['showBtnDat' + 'a']), _0xf270f['img_star_1']['visible'] = !0x1, _0xf270f['img_star_2']['visible'] = !0x1, _0xf270f['img_star_3']['visible'] = !0x1, _0xf270f['img_select' + 'Type']['skin'] = 'panelUI/le' + 'vel_3.png', _0x31caf5['istrue']) {
                                _0xf270f['img_select' + 'Type']['on'](Laya['Event']['CLICK'], this, this['showBtnDat' + 'a'], [
                                    _0x3a9ed4,
                                    _0xdd4083,
                                    _0xf270f
                                ]), _0x31caf5['customsDat' + 'a']['star_1'] && _0x1a6eaf++, _0x31caf5['customsDat' + 'a']['star_2'] && _0x1a6eaf++, _0x31caf5['customsDat' + 'a']['star_3'] && _0x1a6eaf++, _0xf270f['img_star_1']['visible'] = !0x0, _0xf270f['img_star_2']['visible'] = !0x0, _0xf270f['img_star_3']['visible'] = !0x0, _0xf270f['img_star_1']['skin'] = 'panelUI/st' + 'ar_2.png', _0xf270f['img_star_2']['skin'] = 'panelUI/st' + 'ar_2.png', _0xf270f['img_star_3']['skin'] = 'panelUI/st' + 'ar_2.png';
                                for (var _0x5e3e1e = 0x1; _0x1a6eaf >= _0x5e3e1e; _0x5e3e1e++)
                                    _0xf270f['img_star_' + _0x5e3e1e]['skin'] = 'panelUI/st' + 'ar.png';
                                _0xf270f['img_select' + 'Type']['skin'] = 'panelUI/le' + 'vel_1.png', _0x31caf5['customsDat' + 'a']['star_1'] || _0x31caf5['customsDat' + 'a']['star_2'] || _0x31caf5['customsDat' + 'a']['star_3'] || _0x31caf5['customsDat' + 'a']['id'] != _0x470c5d['default']['CustomsDat' + 'a']['length'] || (_0xf270f['img_star_1']['visible'] = !0x1, _0xf270f['img_star_2']['visible'] = !0x1, _0xf270f['img_star_3']['visible'] = !0x1);
                            }
                            _0xf270f['lab_custom' + 'sNum']['text'] = _0xdd4083['id']['toString'](), _0x3a8ce4['default']['customs_se' + 'lect'] == _0xdd4083['id'] && _0x31caf5['istrue'] ? (_0xf270f['img_xuanZh' + 'ong']['visible'] = !0x0, _0xf270f['img_select' + 'Type']['skin'] = 'panelUI/le' + 'vel_2.png') : _0xf270f['img_xuanZh' + 'ong']['visible'] = !0x1;
                        }
                    }, _0x5564e1['prototype']['showBtnDat' + 'a'] = function (_0x294081, _0xbc73aa, _0x3a7b38) {
                        var _0x57ded8 = this['UI_Chapter' + '_' + (_0x294081 + 0x1)];
                        this['ani_select' + 'Guide']['visible'] = !0x0, this['ani_select' + 'Guide']['pos'](_0x57ded8['x'] + _0x57ded8['width'] / 0x2 * _0x57ded8['scaleX'], _0x57ded8['y'] - _0x57ded8['height'] / 0x3);
                        var _0x31ecd8;
                        _0x31ecd8 = _0xbc73aa ? _0xbc73aa : this['customsDat' + 'aArr'][_0x294081];
                        var _0x4cb1cf = this['findRoleIn' + 'fo'](_0x31ecd8);
                        if (_0x4cb1cf['istrue'])
                            for (var _0xa6c801 = 0x1; 0x3 >= _0xa6c801; _0xa6c801++) {
                                var _0x3273fd = _0x4cb1cf['customsDat' + 'a']['star_' + _0xa6c801];
                                _0x3273fd ? this['lab_descri' + 'be_' + _0xa6c801]['color'] = '#3fff63' : this['lab_descri' + 'be_' + _0xa6c801]['color'] = '#ffffff';
                            }
                        else
                            this['ani_select' + 'Guide']['visible'] = !0x1;
                        switch (_0x3a8ce4['default']['customs_se' + 'lect'] = _0x31ecd8['id'], this['lab_custom' + 'sName']['text'] = _0x31ecd8['name'], this['lab_descri' + 'be_1']['text'] = _0x31ecd8['onestardes'], this['lab_descri' + 'be_2']['text'] = _0x31ecd8['twostardes'], this['lab_descri' + 'be_3']['text'] = _0x31ecd8['threestard' + 'es'], _0x31ecd8['checkpoint' + 'type']) {
                        case 0x1:
                            this['lab_gameTy' + 'pe']['text'] = 'Time\x20Trial', this['lab_descri' + 'be']['text'] = _0x3a8ce4['default']['timetrial'], this['img_gameTy' + 'pe']['skin'] = 'panelUI/ic' + 'on_shijian' + '.png';
                            break;
                        case 0x2:
                            this['lab_gameTy' + 'pe']['text'] = '无交通竞速', this['lab_descri' + 'be']['text'] = _0x3a8ce4['default']['notraffic'], this['img_gameTy' + 'pe']['skin'] = 'panelUI/ic' + 'on_shijian' + '.png';
                            break;
                        case 0x3:
                            break;
                        case 0x4:
                            this['lab_gameTy' + 'pe']['text'] = 'Knockout', this['lab_descri' + 'be']['text'] = _0x3a8ce4['default']['knockout'], this['img_gameTy' + 'pe']['skin'] = 'panelUI/ic' + 'on_jingsai' + '.png';
                            break;
                        case 0x5:
                            break;
                        case 0x6:
                        }
                        this['cuntomsDat' + 'a'](_0x31ecd8), this['updateData']();
                    }, _0x5564e1['prototype']['cuntomsDat' + 'a'] = function (_0x33f119) {
                        _0x3a8ce4['default']['chapterNum'] = this['chapterNum'], _0x3a8ce4['default']['cumtosNum'] = _0x33f119['id'], _0x3a8ce4['default']['roadType'] = _0x33f119['sceneid'], _0x3a8ce4['default']['skyBoxType'] = _0x33f119['skyid'], _0x3a8ce4['default']['destinatio' + 'nDis'] = _0x33f119['enddistanc' + 'e'], _0x3a8ce4['default']['onestarnum'] = _0x33f119['onestarnum'], _0x3a8ce4['default']['onestartyp' + 'e'] = _0x33f119['onestartyp' + 'e'], _0x3a8ce4['default']['twostarnum'] = _0x33f119['twostarnum'], _0x3a8ce4['default']['twostartyp' + 'e'] = _0x33f119['twostartyp' + 'e'], _0x3a8ce4['default']['threestarn' + 'um'] = _0x33f119['threestarn' + 'um'], _0x3a8ce4['default']['threestart' + 'ype'] = _0x33f119['threestart' + 'ype'], _0x3a8ce4['default']['overtakego' + 'ld'] = _0x33f119['overtakego' + 'ld'], _0x3a8ce4['default']['upgold'] = _0x33f119['upgold'], _0x3a8ce4['default']['freegold'] = _0x33f119['freegold'], _0x3a8ce4['default']['checkpoint' + 'type'] = _0x33f119['checkpoint' + 'type'], _0x3a8ce4['default']['endlucky'] = _0x33f119['endlucky'], _0x3a8ce4['default']['startlucky'] = _0x33f119['startlucky'], _0x3a8ce4['default']['oneTrackDi' + 's'] = 0x32, _0x3a8ce4['default']['twoTrackDi' + 's'] = 0xaa, _0x3a8ce4['default']['threeTrack' + 'Dis'] = 0x82, _0x3a8ce4['default']['fourTrackD' + 'is'] = 0x28, _0x3a8ce4['default']['oneNitroge' + 'nDis'] = 0xc8, _0x3a8ce4['default']['twoNitroge' + 'nDis'] = 0x64, _0x3a8ce4['default']['threeNitro' + 'genDis'] = 0x96, _0x3a8ce4['default']['fourNitrog' + 'enDis'] = 0x64, _0x3a8ce4['default']['trackAddLo' + 'ngX'] = 0x0, _0x3a8ce4['default']['moveSpeed'] = 0x0, _0x3a8ce4['default']['RunSpeed'] = 0x0, _0x3a8ce4['default']['accidentNu' + 'm'] = 0x0;
                    }, _0x5564e1['prototype']['showGold'] = function () {
                        this['lab_gold']['text'] = _0x470c5d['default']['GoldNum']['toString'](), this['lab_power']['text'] = _0x85b322['default']['I']['getNum']() + '/' + _0x3a8ce4['default']['powermax'];
                    }, _0x5564e1['prototype']['findCustom' + 'sData'] = function () {
                        for (var _0x1508dd = _0x3a8ce4['default']['config_lev' + 'el'], _0x267232 = [], _0xfb625d = 0xa * this['chapterNum'], _0x1c3d8c = 0xa * (this['chapterNum'] - 0x1), _0x47c72d = _0x1c3d8c; _0xfb625d > _0x47c72d; _0x47c72d++) {
                            var _0x63156e = _0x1508dd[_0x47c72d];
                            _0x267232['push'](_0x63156e);
                        }
                        return _0x267232;
                    }, _0x5564e1['prototype']['findRoleIn' + 'fo'] = function (_0x5cdd51) {
                        var _0x4cc25e = !0x1, _0x481e68 = null;
                        return _0x5cdd51['id'] <= _0x470c5d['default']['CustomsDat' + 'a']['length'] ? (_0x4cc25e = !0x0, _0x481e68 = _0x470c5d['default']['CustomsDat' + 'a'][_0x5cdd51['id'] - 0x1]) : (_0x4cc25e = !0x1, _0x481e68 = null), {
                            'istrue': _0x4cc25e,
                            'customsData': _0x481e68
                        };
                    }, _0x5564e1['prototype']['onStarGame'] = function () {
                        var _0x13c914 = this;
                        this['isOneClick'] && (_0x85b322['default']['I']['isEnergy']() ? (_0x22b402['default']['playEffect'](_0x5ac468['SoundName']['GuanKaBiSa' + 'iAnNiu']), this['isOneClick'] = !0x1, this['box_reduce' + 'Power']['visible'] = !0x0, Laya['Tween']['to'](this['box_reduce' + 'Power'], { 'y': this['box_reduce' + 'Power']['y'] - 0x64 }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                            _0x392ff7['default']['newDot'](_0xa48c72['GetDotText']['GuankaDian' + 'JiBiSai']), _0x13c914['isStarGame'] = !0x0, _0x13c914['box_reduce' + 'Power']['y'] = _0x13c914['box_reduce' + 'Power']['y'] + 0x64, _0x13c914['box_reduce' + 'Power']['visible'] = !0x1, _0x13c914['box_reduce' + 'Power']['alpha'] = 0x1, _0x85b322['default']['I']['add'](-0x1), _0x5e6ac3['default']['closeDialo' + 'g'](_0x13c914);
                            var _0x2985f0 = (_0x1d88af['default']['getRandom'](0x64), _0x392ff7['default']['contrastUs' + 'erHaveCarI' + 'strue']()), _0x400b5d = _0x1d88af['default']['getRandom'](0x64);
                            _0x400b5d <= _0x3a8ce4['default']['startlucky'] && _0x2985f0 ? _0x5e6ac3['default']['showDialog'](new _0x1a241d['default'](0x1)) : _0x5e6ac3['default']['switchScen' + 'e'](_0x17ce67['default']['loadCustom' + 's']);
                        }))) : _0x5e6ac3['default']['showDialog'](new _0x56cbe2['default']()));
                    }, _0x5564e1['prototype']['onChangeCh' + 'apter'] = function (_0x442e58) {
                        this['showBanner'](), 0x1 == _0x442e58 ? this['chapterNum']-- : this['chapterNum']++, this['init'](), this['changeBg']();
                    }, _0x5564e1['prototype']['changeBg'] = function () {
                        var _0x280711 = _0x1d88af['default']['randomInSe' + 'ction'](0x1, 0x3);
                        this['img_Bg']['skin'] = 'panelUI/le' + 'vel_bg_' + _0x280711 + '.png';
                    }, _0x5564e1['prototype']['onReturn'] = function () {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            _0x5e6ac3['default']['closeDialo' + 'g'](this), _0x5e6ac3['default']['showDialog'](new _0x1cd512['default'](0x2, !0x1));
                        });
                    }, _0x5564e1['prototype']['GetPower'] = function () {
                        _0x1d88af['default']['playTweenI' + 'mg'](_0x5ac468['CurrencyTy' + 'pe']['power'], this['img_power']);
                    }, _0x5564e1['prototype']['OnGameGold'] = function () {
                        Laya['timer']['once'](0x1f4, this, this['OnGoldTwee' + 'n']);
                    }, _0x5564e1['prototype']['OnGoldTwee' + 'n'] = function () {
                        _0x1d88af['default']['playTweenI' + 'mg'](_0x5ac468['CurrencyTy' + 'pe']['Diamond'], this['img_gold']);
                    }, _0x5564e1['prototype']['onGoldGift'] = function () {
                        Laya['timer']['clear'](this, this['paradrop']), this['pathArr'] = [], this['Box_goldGi' + 'ft']['visible'] = !0x1, _0x5e6ac3['default']['showDialog'](new _0x2e1d52['default'](0x2));
                    }, _0x5564e1['prototype']['showBanner' + 'Timer'] = function () {
                        Laya['timer']['once'](0xa, this, this['showBanner']);
                    }, _0x5564e1['prototype']['showBanner'] = function () {
                        _0x392ff7['default']['showBanner' + 'Ad'](!0x0, this['Box_zhong']['width'] / 0x2 + this['Box_zhong']['x']);
                    }, _0x5564e1['prototype']['hideBanner'] = function () {
                        _0x392ff7['default']['hideBanner']();
                    }, _0x5564e1['prototype']['loadGameRe' + 'source'] = function () {
                        var _0x3b1e19 = (_0x3a8ce4['default']['config_lev' + 'el'][_0x470c5d['default']['CustomsDat' + 'a']['length'] - 0x1], []);
                        _0x3b1e19['push'](_0x35ca68['default']['getGameCar' + 'Model'](_0x470c5d['default']['UserShowCa' + 'r'])), _0x3b1e19['push'](_0x17ce67['default']['Nitrogen_B' + 'lue']), _0x3b1e19['push'](_0x17ce67['default']['Nitrogen_Y' + 'ellow']), Laya['loader']['create'](_0x3b1e19);
                    }, _0x5564e1['prototype']['onDisable'] = function () {
                        this['hideBanner'](), _0x470c5d['default']['todaygoldb' + 'agmax'] > 0x0 && _0x5e9ace['default']['getInstanc' + 'e']()['emit'](_0x5ac468['GameEvent']['homeGoldGi' + 'ft'], null), this['isDemo'] && !this['isStarGame'] && _0x5e9ace['default']['getInstanc' + 'e']()['emit'](_0x5ac468['GameEvent']['isDeme'], null), Laya['timer']['clear'](this, this['paradrop']), this['pathArr'] = [], Laya['timer']['clear'](this, this['showGetPow' + 'er']), this['btn_return']['off'](Laya['Event']['CLICK'], this, this['onReturn']), this['btn_starGa' + 'me']['off'](Laya['Event']['CLICK'], this, this['onStarGame']), this['btn_you']['off'](Laya['Event']['CLICK'], this, this['onChangeCh' + 'apter']), this['btn_zuo']['off'](Laya['Event']['CLICK'], this, this['onChangeCh' + 'apter']), this['btn_goldGi' + 'ft']['off'](Laya['Event']['CLICK'], this, this['onGoldGift']), this['btn_goldGi' + 'ftTwo']['off'](Laya['Event']['CLICK'], this, this['onGoldGift']), _0x5e9ace['default']['getInstanc' + 'e']()['off'](_0x5ac468['GameEvent']['powerGet'], this['GetPower'], this), _0x5e9ace['default']['getInstanc' + 'e']()['off'](_0x5ac468['GameEvent']['updataGold'], this['showGold'], this), _0x5e9ace['default']['getInstanc' + 'e']()['off'](_0x5ac468['GameEvent']['goldOverTw' + 'een'], this['OnGameGold'], this), _0x5e9ace['default']['getInstanc' + 'e']()['off'](_0x5ac468['GameEvent']['selsctGold' + 'Gift'], this['plapGift'], this), _0x5e9ace['default']['getInstanc' + 'e']()['off'](_0x5ac468['GameEvent']['showBanner'], this['showBanner' + 'Timer'], this);
                    }, _0x5564e1;
                }(_0x1de68b['ui']['dialogs']['SelectCust' + 'omsPanelUI']);
            _0x594a58['default'] = _0x5c1512;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/utils/BTimeUtlis': 0x15,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../data/energyData': 0x40,
            '../manager/EventManager': 0x4b,
            '../manager/ResManager': 0x4f,
            '../manager/SoundManager': 0x50,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportHomePrefabs': 0x55,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './ChaPingPanel': 0x24,
            './GoldGiftPanel': 0x2b,
            './LuckyPanel': 0x30,
            './PowerLackPanel': 0x33
        }
    ],
    0x36: [
        function (_0x432d58, _0x3a23e8, _0x381e4f) {
            'use strict';
            var _0x120a64 = this && this['__extends'] || function () {
                var _0x521e03 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x5b88a1, _0x190dc1) {
                    _0x5b88a1['__proto__'] = _0x190dc1;
                } || function (_0xff149b, _0x50a34a) {
                    for (var _0x176d10 in _0x50a34a)
                        _0x50a34a['hasOwnProp' + 'erty'](_0x176d10) && (_0xff149b[_0x176d10] = _0x50a34a[_0x176d10]);
                };
                return function (_0x16e79e, _0x55bd00) {
                    function _0x37fbde() {
                        this['constructo' + 'r'] = _0x16e79e;
                    }
                    _0x521e03(_0x16e79e, _0x55bd00), _0x16e79e['prototype'] = null === _0x55bd00 ? Object['create'](_0x55bd00) : (_0x37fbde['prototype'] = _0x55bd00['prototype'], new _0x37fbde());
                };
            }();
            Object['defineProp' + 'erty'](_0x381e4f, '__esModule', { 'value': !0x0 });
            var _0x581af2 = _0x432d58('../ui/laya' + 'MaxUI'), _0xae915 = _0x432d58('../prefabs' + '/ExportPre' + 'fabs'), _0x33156c = _0x432d58('../constan' + 't/enums'), _0x248397 = _0x432d58('../config/' + 'CarDataCon' + 'fig'), _0x1aed72 = _0x432d58('../manager' + '/EventMana' + 'ger'), _0x5a37e8 = _0x432d58('../CGame/c' + 'ljdSdk'), _0xdd6732 = _0x432d58('../BGame/B' + 'Enum'), _0x23c0df = _0x432d58('../manager' + '/UIManager'), _0x1a55dd = _0x432d58('../scripts' + '/SpriteSca' + 'le'), _0x3abc03 = _0x432d58('../BGame/m' + 'gr/BUrlMgr'), _0x4a97c9 = _0x432d58('../data/en' + 'ergyData'), _0x3cdb5f = _0x432d58('../platfor' + 'ms/MiniGam' + 'e'), _0x12e84c = function (_0x7d0c89) {
                    function _0x3fd849() {
                        return _0x7d0c89['call'](this) || this;
                    }
                    return _0x120a64(_0x3fd849, _0x7d0c89), _0x3fd849['prototype']['onEnable'] = function () {
                        var _0x25b0b0 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0xae915['default']['addStage'](this['box'], _0x33156c['ExportId']['kefu'], !0x0), this['btn_return']['addCompone' + 'ntIntance'](new _0x1a55dd['default'](null, function () {
                            _0x25b0b0['onCloseBtn']();
                        }, _0x33156c['soundType']['guanBi'])), this['btn_getPow' + 'er']['addCompone' + 'ntIntance'](new _0x1a55dd['default'](null, function () {
                            _0x25b0b0['onGetPower']();
                        }, _0x33156c['soundType']['tongYong'])), _0x248397['default']['isKefuRewa' + 'rd'] = !0x0, _0x1aed72['default']['getInstanc' + 'e']()['on'](_0x33156c['GameEvent']['kefuReward'], this['shareWin'], this), _0x3cdb5f['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x3fd849['prototype']['onGetPower'] = function () {
                        wx['openCustom' + 'erServiceC' + 'onversatio' + 'n']({
                            'sessionFrom': '',
                            'showMessageCard': !0x0,
                            'sendMessageTitle': '一份好礼正在打包中.' + '..',
                            'sendMessagePath': _0x3abc03['default']['getMgr']()['getUrl']('res') + ('/resources' + '/service_g' + 'etPower.pn' + 'g'),
                            'sendMessageImg': _0x3abc03['default']['getMgr']()['getUrl']('res') + ('/resources' + '/service_g' + 'etPower.pn' + 'g'),
                            'success': function () {
                                console['log']('发送客服会话成功');
                            },
                            'fail': function () {
                                console['log']('发送客服会话失败');
                            }
                        });
                    }, _0x3fd849['prototype']['shareWin'] = function () {
                        var _0x4f4366 = this;
                        _0x5a37e8['default']['serviceAwa' + 'rd'](function (_0x4b086d) {
                            switch (_0x4b086d['result']) {
                            case _0xdd6732['EResult']['succeed']:
                                _0x4f4366['succeed']();
                                break;
                            case _0xdd6732['EResult']['cancel']:
                                console['log']('领取失败喽');
                                break;
                            default:
                                console['log']('调用失败:' + _0x4b086d['data']);
                            }
                        }['bind'](this));
                    }, _0x3fd849['prototype']['succeed'] = function () {
                        _0x5a37e8['default']['kefuReward'] = !0x0, _0x4a97c9['default']['I']['add'](_0x248397['default']['freepowern' + 'um']), _0x1aed72['default']['getInstanc' + 'e']()['emit'](_0x33156c['GameEvent']['powerGet'], null), this['onCloseBtn']();
                    }, _0x3fd849['prototype']['onCloseBtn'] = function () {
                        _0x1aed72['default']['getInstanc' + 'e']()['emit'](_0x33156c['GameEvent']['showSelect' + 'Bnner'], null), _0x23c0df['default']['closeDialo' + 'g'](this);
                    }, _0x3fd849['prototype']['onDisable'] = function () {
                        this['btn_getPow' + 'er']['off'](Laya['Event']['CLICK'], this, this['onGetPower']), _0x248397['default']['isKefuRewa' + 'rd'] = !0x1, this['btn_return']['off'](Laya['Event']['CLICK'], this, this['onCloseBtn']), _0x1aed72['default']['getInstanc' + 'e']()['off'](_0x33156c['GameEvent']['kefuReward'], this['shareWin'], this);
                    }, _0x3fd849;
                }(_0x581af2['ui']['dialogs']['ServicePan' + 'elUI']);
            _0x381e4f['default'] = _0x12e84c;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BUrlMgr': 0x14,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../constant/enums': 0x3d,
            '../data/energyData': 0x40,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a
        }
    ],
    0x37: [
        function (_0x5a4580, _0x3f8d78, _0x41b3c2) {
            'use strict';
            var _0x5ad17a = this && this['__extends'] || function () {
                var _0x5b576c = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x4196da, _0x403301) {
                    _0x4196da['__proto__'] = _0x403301;
                } || function (_0x386f1a, _0x114cb8) {
                    for (var _0x444fff in _0x114cb8)
                        _0x114cb8['hasOwnProp' + 'erty'](_0x444fff) && (_0x386f1a[_0x444fff] = _0x114cb8[_0x444fff]);
                };
                return function (_0x32842f, _0x15625b) {
                    function _0x50a367() {
                        this['constructo' + 'r'] = _0x32842f;
                    }
                    _0x5b576c(_0x32842f, _0x15625b), _0x32842f['prototype'] = null === _0x15625b ? Object['create'](_0x15625b) : (_0x50a367['prototype'] = _0x15625b['prototype'], new _0x50a367());
                };
            }();
            Object['defineProp' + 'erty'](_0x41b3c2, '__esModule', { 'value': !0x0 });
            var _0x230472 = _0x5a4580('../ui/laya' + 'MaxUI'), _0x47eb3d = _0x5a4580('../data/Ro' + 'leInfo'), _0x3b6027 = _0x5a4580('../config/' + 'CarDataCon' + 'fig'), _0x3e4c7c = _0x5a4580('../scripts' + '/SpriteSca' + 'le'), _0x37ba31 = _0x5a4580('../manager' + '/UIManager'), _0x523ae2 = _0x5a4580('../constan' + 't/enums'), _0x16d813 = _0x5a4580('../manager' + '/EventMana' + 'ger'), _0xa441cb = _0x5a4580('../data/en' + 'ergyData'), _0x358699 = _0x5a4580('../platfor' + 'ms/MiniGam' + 'e'), _0x215e77 = _0x5a4580('../constan' + 't/texts'), _0xfd0d8a = _0x5a4580('../BGame/B' + 'Enum'), _0x30ba86 = _0x5a4580('../BGame/m' + 'gr/BShareM' + 'gr'), _0x5aa7a2 = _0x5a4580('../BGame/m' + 'gr/BAdMgr'), _0x4a1fd4 = _0x5a4580('../config/' + 'Config'), _0x35d8b0 = _0x5a4580('../utils/D' + 'ataUtil'), _0x4773dd = _0x5a4580('../CGame/c' + 'ljdSdk'), _0x2497f3 = _0x5a4580('../utils/M' + 'athUtil'), _0x3bb741 = function (_0x355952) {
                    function _0x127203() {
                        var _0x5c0f9b = _0x355952['call'](this) || this;
                        return _0x5c0f9b['_mulNum'] = 0x1, _0x5c0f9b;
                    }
                    return _0x5ad17a(_0x127203, _0x355952), _0x127203['prototype']['onEnable'] = function () {
                        var _0x5e8496 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), this['btn_return']['visible'] = !0x1, this['init'](), this['isGetSigen'](), this['btn_return']['addCompone' + 'ntIntance'](new _0x3e4c7c['default'](null, function () {
                            _0x5e8496['onReturn']();
                        }, _0x523ae2['soundType']['guanBi'])), this['btn_dounbl' + 'e']['addCompone' + 'ntIntance'](new _0x3e4c7c['default'](null, function () {
                            _0x5e8496['palyShowVi' + 'deoAd']();
                        }, _0x523ae2['soundType']['tongYong'])), this['btn_get']['addCompone' + 'ntIntance'](new _0x3e4c7c['default'](null, function () {
                            _0x5e8496['onGet']();
                        }, _0x523ae2['soundType']['tongYong'])), _0x16d813['default']['getInstanc' + 'e']()['on'](_0x523ae2['GameEvent']['sign'], this['shareWin'], this), this['wuDian'](), _0x358699['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x127203['prototype']['wuDian'] = function () {
                        if (this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x4773dd['default']['isCanShare'] && !_0x47eb3d['default']['IsGetSign'])
                            this['accidentCl' + 'ickMax'] = _0x2497f3['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                        }
                    }, _0x127203['prototype']['showBanner'] = function () {
                    }, _0x127203['prototype']['init'] = function () {
                        this['_signDataA' + 'rr'] = [], this['_mulNum'] = 0x1, this['_customsDa' + 'ta'] = _0x3b6027['default']['config_lev' + 'el'][_0x47eb3d['default']['CustomsDat' + 'a']['length'] - 0x1];
                        for (var _0xdcf1c7 = 0x0; _0xdcf1c7 < _0x3b6027['default']['config_sig' + 'nin']['length']; _0xdcf1c7++) {
                            var _0x2733d3 = _0x3b6027['default']['config_sig' + 'nin'][_0xdcf1c7];
                            this['_signDataA' + 'rr']['push'](_0x2733d3);
                        }
                        this['list_sign']['array'] = new Array(this['_signDataA' + 'rr']['length']), this['list_sign']['itemRender'] = _0x230472['ui']['item']['SignItemUI'], this['list_sign']['renderHand' + 'ler'] = new Laya['Handler'](this, this['signItem']);
                    }, _0x127203['prototype']['signItem'] = function (_0x3db5f5, _0x556e04) {
                        _0x3db5f5['img_achiev' + 'e']['visible'] = !0x1;
                        var _0x22af80 = this['_signDataA' + 'rr'][_0x556e04];
                        _0x3db5f5['lab_days']['text'] = 'DAY\x20' + _0x22af80['id'], 0x1 == _0x22af80['rewardtype'] ? (_0x3db5f5['lab_num']['text'] = Math['floor'](_0x22af80['number'] * this['_customsDa' + 'ta']['freegold']) + '', _0x3db5f5['img_icon']['skin'] = 'panelUI/co' + 'in.png') : 0x2 == _0x22af80['rewardtype'] && (_0x3db5f5['lab_num']['text'] = _0x22af80['number'] + '', _0x3db5f5['img_icon']['skin'] = 'panelUI/st' + 'rength.png'), _0x22af80['id'] < _0x47eb3d['default']['SigeDays'] && (_0x3db5f5['img_achiev' + 'e']['visible'] = !0x0), _0x47eb3d['default']['SigeDays'] != _0x22af80['id'] || _0x47eb3d['default']['IsGetSign'] ? _0x3db5f5['img_bg']['skin'] = 'panelUI/si' + 'gn_btu1.pn' + 'g' : _0x3db5f5['img_bg']['skin'] = 'panelUI/si' + 'gn_btu2.pn' + 'g';
                    }, _0x127203['prototype']['isGetSigen'] = function () {
                        _0x47eb3d['default']['IsGetSign'] ? (this['btn_dounbl' + 'e']['disabled'] = !0x0, this['lab_double']['text'] = 'RECEIVED', this['btn_get']['visible'] = !0x1, this['showReturn']()) : (this['btn_dounbl' + 'e']['disabled'] = !0x1, this['lab_double']['text'] = 'Get\x20x2', this['btn_get']['visible'] = !0x0, Laya['timer']['once'](0xfa0, this, this['showReturn']));
                    }, _0x127203['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x5c7047 = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x5c7047['shareWin'](!0x0);
                        });
                    }, _0x127203['prototype']['share'] = function () {
                        _0x30ba86['default']['getMgr']()['onShare'](function (_0x32724a) {
                            if ('在本地' == _0x32724a['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x32724a['result']) {
                                case _0xfd0d8a['EResult']['succeed']:
                                    _0x3b6027['default']['shareType'] = _0x523ae2['shareType']['sign'];
                                    break;
                                case _0xfd0d8a['EResult']['Failure']:
                                    _0x37ba31['default']['showToast'](_0x215e77['GameText']['NoVideoAd']);
                                }
                        }['bind'](this));
                    }, _0x127203['prototype']['shareWin'] = function (_0x393de7) {
                        void 0x0 === _0x393de7 && (_0x393de7 = !0x1), _0x393de7 ? this['onDounble']() : (_0x3b6027['default']['showTimer'] - _0x3b6027['default']['hideTimer']) / 0x3e8 >= _0x3b6027['default']['share'] ? this['onDounble']() : _0x37ba31['default']['showToast'](_0x215e77['GameText']['ShareFailT' + 'ip']);
                    }, _0x127203['prototype']['onDounble'] = function () {
                        this['_mulNum'] = 0x2, this['getAware']();
                    }, _0x127203['prototype']['onGet'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? (this['_mulNum'] = 0x1, this['getAware']()) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0x127203['prototype']['getAware'] = function () {
                        var _0x5636f6 = _0x3b6027['default']['config_sig' + 'nin'][_0x47eb3d['default']['SigeDays'] - 0x1];
                        0x1 == _0x5636f6['rewardtype'] ? (_0x47eb3d['default']['addGold'](this['_mulNum'] * _0x5636f6['number'] * this['_customsDa' + 'ta']['freegold']), _0x16d813['default']['getInstanc' + 'e']()['emit'](_0x523ae2['GameEvent']['homeGoldTw' + 'een'], null)) : 0x2 == _0x5636f6['rewardtype'] && (_0xa441cb['default']['I']['add'](this['_mulNum'] * _0x5636f6['number']), _0x16d813['default']['getInstanc' + 'e']()['emit'](_0x523ae2['GameEvent']['homePowerT' + 'ween'], null)), _0x16d813['default']['getInstanc' + 'e']()['emit'](_0x523ae2['GameEvent']['updataGold'], null), _0x47eb3d['default']['addSigeDay' + 's'](0x1), _0x47eb3d['default']['setIsGetSi' + 'gn'](!0x0), this['isGetSigen'](), this['init'](), _0x37ba31['default']['closeDialo' + 'g'](this);
                    }, _0x127203['prototype']['showReturn'] = function () {
                        this['btn_return']['visible'] = !0x0;
                    }, _0x127203['prototype']['onReturn'] = function () {
                        _0x37ba31['default']['closeDialo' + 'g'](this);
                    }, _0x127203['prototype']['onDisable'] = function () {
                        _0x35d8b0['default']['hideBanner'](), this['btn_return']['off'](Laya['Event']['CLICK'], this, this['onReturn']), this['btn_dounbl' + 'e']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_get']['off'](Laya['Event']['CLICK'], this, this['onGet']), _0x3b6027['default']['shareType'] = _0x523ae2['shareType']['not'], _0x16d813['default']['getInstanc' + 'e']()['off'](_0x523ae2['GameEvent']['sign'], this['shareWin'], this);
                    }, _0x127203;
                }(_0x230472['ui']['dialogs']['SignPanelU' + 'I']);
            _0x41b3c2['default'] = _0x3bb741;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../data/energyData': 0x40,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x38: [
        function (_0x43ab16, _0x1af61c, _0xc31a22) {
            'use strict';
            var _0x346977 = this && this['__extends'] || function () {
                var _0x14f493 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x272461, _0x4ccfbe) {
                    _0x272461['__proto__'] = _0x4ccfbe;
                } || function (_0x4ab3d6, _0x4b8467) {
                    for (var _0x201eb7 in _0x4b8467)
                        _0x4b8467['hasOwnProp' + 'erty'](_0x201eb7) && (_0x4ab3d6[_0x201eb7] = _0x4b8467[_0x201eb7]);
                };
                return function (_0x1ba4e7, _0x2a5949) {
                    function _0x42e149() {
                        this['constructo' + 'r'] = _0x1ba4e7;
                    }
                    _0x14f493(_0x1ba4e7, _0x2a5949), _0x1ba4e7['prototype'] = null === _0x2a5949 ? Object['create'](_0x2a5949) : (_0x42e149['prototype'] = _0x2a5949['prototype'], new _0x42e149());
                };
            }();
            Object['defineProp' + 'erty'](_0xc31a22, '__esModule', { 'value': !0x0 });
            var _0x473109 = _0x43ab16('../ui/laya' + 'MaxUI'), _0x367e85 = _0x43ab16('../scripts' + '/SpriteSca' + 'le'), _0x408a18 = _0x43ab16('../manager' + '/UIManager'), _0x202bb5 = _0x43ab16('../manager' + '/EventMana' + 'ger'), _0xbde269 = _0x43ab16('../constan' + 't/enums'), _0x280792 = _0x43ab16('./CountDow' + 'nWnd'), _0x485c29 = _0x43ab16('../prefabs' + '/ExportPre' + 'fabs'), _0x84831f = _0x43ab16('../config/' + 'CarDataCon' + 'fig'), _0x10ff65 = _0x43ab16('../constan' + 't/texts'), _0x270d16 = _0x43ab16('../platfor' + 'ms/MiniGam' + 'e'), _0x979fdf = _0x43ab16('../BGame/m' + 'gr/BShareM' + 'gr'), _0x3a1922 = _0x43ab16('../BGame/B' + 'Enum'), _0xd5bd36 = _0x43ab16('../BGame/m' + 'gr/BAdMgr'), _0x2b7b67 = _0x43ab16('../config/' + 'Config'), _0xc1ed7c = _0x43ab16('../utils/D' + 'ataUtil'), _0x3134f0 = _0x43ab16('../CGame/c' + 'ljdSdk'), _0x228dfa = _0x43ab16('../utils/M' + 'athUtil'), _0x292172 = function (_0x229a43) {
                    function _0xe8fd1d() {
                        return _0x229a43['call'](this) || this;
                    }
                    return _0x346977(_0xe8fd1d, _0x229a43), _0xe8fd1d['prototype']['onEnable'] = function () {
                        var _0x1b0640 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x485c29['default']['addStage'](this['box'], _0xbde269['ExportId']['starNitrog' + 'en'], !0x1), this['btn_star']['addCompone' + 'ntIntance'](new _0x367e85['default'](null, function () {
                            _0x1b0640['onStarGame']();
                        }, _0xbde269['soundType']['tongYong'])), this['btn_getNit' + 'rogen']['addCompone' + 'ntIntance'](new _0x367e85['default'](null, function () {
                            _0x1b0640['palyShowVi' + 'deoAd']();
                        }, _0xbde269['soundType']['tongYong'])), _0x202bb5['default']['getInstanc' + 'e']()['on'](_0xbde269['GameEvent']['danqi'], this['shareWin'], this), this['wuDian'](), _0x270d16['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0xe8fd1d['prototype']['wuDian'] = function () {
                        if (this['accidentNu' + 'm'] = 0x0, this['accidentCl' + 'ickMax'] = 0x0, _0x3134f0['default']['isCanShare'])
                            this['accidentCl' + 'ickMax'] = _0x228dfa['default']['randomInSe' + 'ction'](0x2, 0x4);
                        else {
                        }
                    }, _0xe8fd1d['prototype']['showBanner'] = function () {
                    }, _0xe8fd1d['prototype']['palyShowVi' + 'deoAd'] = function () {
                        var _0x3c4cbc = this;
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x3c4cbc['shareWin'](!0x0);
                        });
                    }, _0xe8fd1d['prototype']['share'] = function () {
                        _0x979fdf['default']['getMgr']()['onShare'](function (_0x10249c) {
                            if ('在本地' == _0x10249c['tag'])
                                this['shareWin'](!0x0);
                            else
                                switch (_0x10249c['result']) {
                                case _0x3a1922['EResult']['succeed']:
                                    _0x84831f['default']['shareType'] = _0xbde269['shareType']['danqi'];
                                    break;
                                case _0x3a1922['EResult']['Failure']:
                                    _0x408a18['default']['showToast'](_0x10ff65['GameText']['NoVideoAd']);
                                }
                        }['bind'](this));
                    }, _0xe8fd1d['prototype']['shareWin'] = function (_0x7ce6d8) {
                        void 0x0 === _0x7ce6d8 && (_0x7ce6d8 = !0x1), _0x7ce6d8 ? this['onGetNitro' + 'gen']() : (_0x84831f['default']['showTimer'] - _0x84831f['default']['hideTimer']) / 0x3e8 >= _0x84831f['default']['share'] ? this['onGetNitro' + 'gen']() : _0x408a18['default']['showToast'](_0x10ff65['GameText']['ShareFailT' + 'ip']);
                    }, _0xe8fd1d['prototype']['onGetNitro' + 'gen'] = function () {
                        _0x202bb5['default']['getInstanc' + 'e']()['emit'](_0xbde269['GameEvent']['addNitroge' + 'n'], null), _0x408a18['default']['closeDialo' + 'g'](this);
                    }, _0xe8fd1d['prototype']['onStarGame'] = function () {
                        this['accidentNu' + 'm']++, this['accidentNu' + 'm'] > this['accidentCl' + 'ickMax'] ? _0x408a18['default']['closeDialo' + 'g'](this) : this['accidentNu' + 'm'] == this['accidentCl' + 'ickMax'] && this['showBanner']();
                    }, _0xe8fd1d['prototype']['onCloseBtn'] = function () {
                        _0x408a18['default']['closeDialo' + 'g'](this);
                    }, _0xe8fd1d['prototype']['onDisable'] = function () {
                        _0x84831f['default']['shareType'] = _0xbde269['shareType']['not'], _0x280792['default']['addToStage'](_0xbde269['CountDownT' + 'ype']['StartGame']), this['btn_getNit' + 'rogen']['off'](Laya['Event']['CLICK'], this, this['palyShowVi' + 'deoAd']), this['btn_star']['off'](Laya['Event']['CLICK'], this, this['onStarGame']), _0x202bb5['default']['getInstanc' + 'e']()['off'](_0xbde269['GameEvent']['danqi'], this['shareWin'], this), _0xc1ed7c['default']['hideBanner']();
                    }, _0xe8fd1d;
                }(_0x473109['ui']['dialogs']['StarNitrog' + 'enPanelUI']);
            _0xc31a22['default'] = _0x292172;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../manager/EventManager': 0x4b,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b,
            '../utils/MathUtil': 0x5c,
            './CountDownWnd': 0x27
        }
    ],
    0x39: [
        function (_0x1dce44, _0xb93ea, _0x1a883a) {
            'use strict';
            var _0x3f60e8 = this && this['__extends'] || function () {
                var _0xef1fad = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x317be4, _0x26f5e7) {
                    _0x317be4['__proto__'] = _0x26f5e7;
                } || function (_0x5bdfb8, _0x2afc84) {
                    for (var _0x4ee934 in _0x2afc84)
                        _0x2afc84['hasOwnProp' + 'erty'](_0x4ee934) && (_0x5bdfb8[_0x4ee934] = _0x2afc84[_0x4ee934]);
                };
                return function (_0x2dd368, _0x2e5c34) {
                    function _0x2b662d() {
                        this['constructo' + 'r'] = _0x2dd368;
                    }
                    _0xef1fad(_0x2dd368, _0x2e5c34), _0x2dd368['prototype'] = null === _0x2e5c34 ? Object['create'](_0x2e5c34) : (_0x2b662d['prototype'] = _0x2e5c34['prototype'], new _0x2b662d());
                };
            }();
            Object['defineProp' + 'erty'](_0x1a883a, '__esModule', { 'value': !0x0 });
            var _0x2cd548 = _0x1dce44('../ui/laya' + 'MaxUI'), _0x13843b = function (_0x3baa75) {
                    function _0x56c22e(_0x445239, _0x4c3dbf) {
                        var _0x412524 = _0x3baa75['call'](this) || this;
                        return _0x412524['holdTime'] = 0x3e8, _0x412524['flyTime'] = 0x320, _0x412524['flyY'] = 0x64, _0x412524['tip'] = _0x445239, _0x412524['isModal'] = !0x1, _0x412524['overCallba' + 'ck'] = _0x4c3dbf, _0x412524['autoDestro' + 'yAtClosed'] = !0x0, _0x412524;
                    }
                    return _0x3f60e8(_0x56c22e, _0x3baa75), _0x56c22e['prototype']['onAwake'] = function () {
                        var _0x4a47f6 = this;
                        this['tipLabel']['changeText'](this['tip']), setTimeout(function () {
                            Laya['Tween']['to'](_0x4a47f6, {
                                'y': _0x4a47f6['y'] - _0x4a47f6['flyY'],
                                'alpha': 0x0
                            }, _0x4a47f6['flyTime'], Laya['Ease']['linearOut'], Laya['Handler']['create'](_0x4a47f6, _0x4a47f6['onAniOver']));
                        }, this['holdTime']), this['resizeBg']();
                    }, _0x56c22e['prototype']['resizeBg'] = function () {
                        var _0x130b76 = 0x14, _0x1947fb = this['tipLabel']['textField'];
                        this['bg']['width'] = _0x1947fb['textWidth'] + 0x2 * _0x130b76, this['bg']['height'] = _0x1947fb['textHeight'] + 0x2 * _0x130b76;
                    }, _0x56c22e['prototype']['onAniOver'] = function () {
                        this['overCallba' + 'ck'] && this['overCallba' + 'ck'] && this['overCallba' + 'ck']();
                    }, _0x56c22e;
                }(_0x2cd548['ui']['dialogs']['ToastDialo' + 'gUI']);
            _0x1a883a['default'] = _0x13843b;
        },
        { '../ui/layaMaxUI': 0x5a }
    ],
    0x3a: [
        function (_0x2efd45, _0x2729bf, _0x29e88a) {
            'use strict';
            var _0x4e0fca = this && this['__extends'] || function () {
                var _0x67182d = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x329579, _0x2672d7) {
                    _0x329579['__proto__'] = _0x2672d7;
                } || function (_0x293828, _0x54d196) {
                    for (var _0x232f16 in _0x54d196)
                        _0x54d196['hasOwnProp' + 'erty'](_0x232f16) && (_0x293828[_0x232f16] = _0x54d196[_0x232f16]);
                };
                return function (_0x1d7496, _0x56b12d) {
                    function _0x53f388() {
                        this['constructo' + 'r'] = _0x1d7496;
                    }
                    _0x67182d(_0x1d7496, _0x56b12d), _0x1d7496['prototype'] = null === _0x56b12d ? Object['create'](_0x56b12d) : (_0x53f388['prototype'] = _0x56b12d['prototype'], new _0x53f388());
                };
            }();
            Object['defineProp' + 'erty'](_0x29e88a, '__esModule', { 'value': !0x0 });
            var _0x1fd365 = _0x2efd45('../ui/laya' + 'MaxUI'), _0x2d354e = _0x2efd45('../prefabs' + '/ExportPre' + 'fabs'), _0x2a6d35 = _0x2efd45('../constan' + 't/enums'), _0x250f2c = _0x2efd45('../scripts' + '/SpriteSca' + 'le'), _0x712de0 = _0x2efd45('../manager' + '/UIManager'), _0x2921dd = _0x2efd45('../platfor' + 'ms/MiniGam' + 'e'), _0x2eac66 = _0x2efd45('../utils/D' + 'ataUtil'), _0x2d148d = function (_0x3a4d8d) {
                    function _0x5cfe28() {
                        return _0x3a4d8d['call'](this) || this;
                    }
                    return _0x4e0fca(_0x5cfe28, _0x3a4d8d), _0x5cfe28['prototype']['onEnable'] = function () {
                        var _0x4896e7 = this;
                        this['size'](Laya['stage']['width'], Laya['stage']['height']), _0x2d354e['default']['addStage'](this['box'], 0x11, !0x0), this['btn_getGol' + 'd']['addCompone' + 'ntIntance'](new _0x250f2c['default'](null, function () {
                            _0x4896e7['onClose']();
                        }, _0x2a6d35['soundType']['tongYong'])), _0x2921dd['MiniGame']['I']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'](this);
                    }, _0x5cfe28['prototype']['onClose'] = function () {
                        _0x712de0['default']['closeDialo' + 'g'](this), _0x2eac66['default']['hideBanner']();
                    }, _0x5cfe28['prototype']['onDisable'] = function () {
                        this['btn_getGol' + 'd']['off'](Laya['Event']['CLICK'], this, this['onClose']);
                    }, _0x5cfe28;
                }(_0x1fd365['ui']['dialogs']['UnlockPane' + 'lUI']);
            _0x29e88a['default'] = _0x2d148d;
        },
        {
            '../constant/enums': 0x3d,
            '../manager/UIManager': 0x51,
            '../platforms/MiniGame': 0x52,
            '../prefabs/ExportPrefabs': 0x56,
            '../scripts/SpriteScale': 0x59,
            '../ui/layaMaxUI': 0x5a,
            '../utils/DataUtil': 0x5b
        }
    ],
    0x3b: [
        function (_0x27c961, _0x123be5, _0xd61859) {
            'use strict';
            Object['defineProp' + 'erty'](_0xd61859, '__esModule', { 'value': !0x0 });
            var _0x2c7e0d = _0x27c961('../constan' + 't/enums'), _0x3e17f9 = function () {
                    function _0x580e84() {
                    }
                    return _0x580e84['RunSpeed'] = 0.05, _0x580e84['minspeed'] = 0.05, _0x580e84['maxspeed'] = 0.5, _0x580e84['userMotoSp' + 'eed'] = _0x580e84['minspeed'], _0x580e84['accelerati' + 'on'] = 0.002, _0x580e84['brakingspe' + 'ed'] = 0.01, _0x580e84['motoExpedi' + 'te'] = 0.05, _0x580e84['moveSpeed'] = 0.05, _0x580e84['motoExpedi' + 'teAddSpeed'] = 0x2 * _0x580e84['accelerati' + 'on'], _0x580e84['autocidesp' + 'eed'] = 0.006, _0x580e84['nitrogenre' + 'covery'] = 0x7530, _0x580e84['slideMinsS' + 'peed'] = _0x580e84['accelerati' + 'on'] / 0x2, _0x580e84['rotateHome' + 'Car'] = 0.1, _0x580e84['carMove'] = 0x5, _0x580e84['carRotateY'] = 0x23, _0x580e84['carSlantX'] = 0x23, _0x580e84['twostargol' + 'd'] = 1.5, _0x580e84['threestarg' + 'old'] = 0x2, _0x580e84['reality_in' + 'itialSpeed'] = 0x14, _0x580e84['initialSpe' + 'edmax'] = 0x258, _0x580e84['defaultpow' + 'er'] = 0x5, _0x580e84['defaultgol' + 'd'] = 0x0, _0x580e84['powerrecov' + 'erynum'] = 0x1, _0x580e84['powerrecov' + 'erytime'] = 0x4b0, _0x580e84['todayfreep' + 'owermax'] = 0x5, _0x580e84['freepowern' + 'um'] = 0x2, _0x580e84['todayfreeg' + 'oldmax'] = 0x5, _0x580e84['freegoldnu' + 'm'] = 1.2, _0x580e84['powermax'] = 0xa, _0x580e84['nitrogenus' + 'e'] = 0x3, _0x580e84['share'] = 0x4, _0x580e84['eliminatio' + 'ninterval'] = 0x2710, _0x580e84['eliminatio' + 'nkeep'] = 0x4e20, _0x580e84['nitrogenin' + 'crease'] = '25;40', _0x580e84['timetrial'] = '', _0x580e84['knockout'] = '', _0x580e84['notraffic'] = '', _0x580e84['sidewipewi' + 'de'] = 0.3, _0x580e84['kefuReward'] = 0x2, _0x580e84['goldbagref' + 'resh'] = '10;30', _0x580e84['todaygoldb' + 'agmax'] = 0x5, _0x580e84['goldbagcoe' + 'fficient'] = '3;4;5', _0x580e84['levelvideo'] = 0x50, _0x580e84['readonly_s' + 'peed'] = _0x580e84['reality_in' + 'itialSpeed'], _0x580e84['istrueStar' + 'Game'] = !0x1, _0x580e84['trackFixat' + 'ionLong'] = 0xfe, _0x580e84['trackAddLo' + 'ngX'] = 0x0, _0x580e84['farthestCa' + 'rDis'] = 0x12c, _0x580e84['oneTrackDi' + 's'] = 0xa, _0x580e84['twoTrackDi' + 's'] = 0xc8, _0x580e84['threeTrack' + 'Dis'] = 0x96, _0x580e84['fourTrackD' + 'is'] = 0x14, _0x580e84['oneNitroge' + 'nDis'] = 0x64, _0x580e84['twoNitroge' + 'nDis'] = 0xc8, _0x580e84['threeNitro' + 'genDis'] = 0x32, _0x580e84['fourNitrog' + 'enDis'] = 0x96, _0x580e84['VictoryAnd' + 'Defeated'] = !0x0, _0x580e84['isUseDanQi'] = !0x1, _0x580e84['isNewUSer'] = !0x0, _0x580e84['accidentNu' + 'm'] = 0x0, _0x580e84['isShowGame'] = !0x0, _0x580e84['hideTimer'] = 0x0, _0x580e84['showTimer'] = 0x0, _0x580e84['chaseRanki' + 'ng'] = 0x0, _0x580e84['RivalCarNu' + 'm'] = 0x0, _0x580e84['isCollserB' + 'arrier'] = !0x1, _0x580e84['customs_Ma' + 'x'] = 0x1, _0x580e84['customs_se' + 'lect'] = _0x580e84['customs_Ma' + 'x'], _0x580e84['chapterNum'] = 0x0, _0x580e84['cumtosNum'] = 0x1, _0x580e84['roadType'] = 0x1, _0x580e84['skyBoxType'] = 0x1, _0x580e84['destinatio' + 'nDis'] = 0x5dc, _0x580e84['updataCarD' + 'estination' + 'Dis'] = _0x580e84['destinatio' + 'nDis'], _0x580e84['onestartyp' + 'e'] = 0x1, _0x580e84['onestarnum'] = 0x3c, _0x580e84['twostartyp' + 'e'] = 0x1, _0x580e84['twostarnum'] = 0x32, _0x580e84['threestart' + 'ype'] = 0x1, _0x580e84['threestarn' + 'um'] = 0x1e, _0x580e84['upgold'] = 0x3e8, _0x580e84['barrierCar' + 'Type'] = 0x1, _0x580e84['checkpoint' + 'type'] = 0x1, _0x580e84['endlucky'] = 0x50, _0x580e84['startlucky'] = 0x50, _0x580e84['shareType'] = _0x2c7e0d['shareType']['not'], _0x580e84['isKefuRewa' + 'rd'] = !0x1, _0x580e84['isGamecent' + 're'] = !0x1, _0x580e84['isShowBann' + 'er'] = !0x0, _0x580e84['str_road'] = '', _0x580e84['str_gameCa' + 'r'] = '', _0x580e84['str_skyBox'] = '', _0x580e84;
                }();
            _0xd61859['default'] = _0x3e17f9;
        },
        { '../constant/enums': 0x3d }
    ],
    0x3c: [
        function (_0x44061c, _0x2c3731, _0x3546b6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3546b6, '__esModule', { 'value': !0x0 });
            var _0x408e72 = _0x44061c('../constan' + 't/enums'), _0x2ef862 = function () {
                    function _0x1182c8() {
                    }
                    return _0x1182c8['annouceVer' + 'sion'] = '201910291', _0x1182c8['appId'] = 'wx10005249' + '74202a53', _0x1182c8['appName'] = '飞车高手', _0x1182c8['appkey'] = '761d9641b9' + 'd0a9e1064d' + '4697f53f08' + '86', _0x1182c8['version'] = '2020.1.0.0', _0x1182c8['platformTy' + 'pr'] = _0x408e72['PlatformTy' + 'pe']['web'], _0x1182c8['BannerArr'] = [], _0x1182c8['resUrl'] = 'https://ga' + 'me.g.lieqi' + 'cun.cn/', _0x1182c8['yzUrl'] = 'https://ga' + 'me.g.lieqi' + 'cun.cn/sdq' + 'c', _0x1182c8['secret'] = '', _0x1182c8['uid'] = '', _0x1182c8['ut'] = '3', _0x1182c8['TableDataF' + 'ilePath'] = 'table/rowD' + 'ata.json', _0x1182c8['motorcycle' + 'Item'] = 'LayaScene_' + 'game/Motor' + 'cycle/moto' + 'rcycle', _0x1182c8['motorcycle' + 'LuckyItem'] = 'LayaScene_' + 'game/motor' + 'cycleLucky' + '/motorcycl' + 'eLucky_', _0x1182c8['gameCarIte' + 'm'] = 'LayaScene_' + 'game/GameM' + 'otorcycles' + '/moto_driv' + 'ing', _0x1182c8['gameLuckyC' + 'arItem'] = 'LayaScene_' + 'game/moto_' + 'lucky/moto' + '_lucky', _0x1182c8['gameScen'] = 'LayaScene_' + 'game/Road_' + 'all/', _0x1182c8['skyBox'] = 'LayaScene_' + 'game/sky/t' + 'iankongqiu' + '_', _0x1182c8['barrierCar'] = 'LayaScene_' + 'game/AIcar' + '/car_', _0x1182c8['motoBarrie' + 'rCar'] = 'LayaScene_' + 'game/moto_' + 'simple/mot' + 'o_simple_', _0x1182c8['ShowHomeCa' + 'rItem'] = 'ResGame3D/' + 'RacingCar/' + 'RacingCar_', _0x1182c8['GameScene'] = 'ResGame3D/' + 'Road_all/', _0x1182c8['ShowGameCa' + 'rItem'] = 'ResGame3D/' + 'RacingCar_' + 'Sample/Rac' + 'ingCar_Sam' + 'ple_', _0x1182c8['SkyBox'] = 'ResGame3D/' + 'Sky/Sky_', _0x1182c8['BarrierCar'] = 'ResGame3D/' + 'Ai_car/Ai_' + 'car_', _0x1182c8['Nitrogen_B' + 'lue'] = 'ResGame3D/' + 'Nitrogen/N' + 'itrogen_Bl' + 'ue/Convent' + 'ional/Samp' + 'leScene.lh', _0x1182c8['Nitrogen_Y' + 'ellow'] = 'ResGame3D/' + 'Nitrogen/N' + 'itrogen_Ye' + 'llow/Conve' + 'ntional/Sa' + 'mpleScene.' + 'lh', _0x1182c8['RivalCar'] = 'ResGame3D/' + 'RacingCar_' + 'Sample_NoR' + 'i/RacingCa' + 'r_Sample_N' + 'oRi_', _0x1182c8['config'] = [
                        { 'url': 'config/gam' + 'e_level_co' + 'nfig.json' },
                        { 'url': 'config/gam' + 'e_car_conf' + 'ig.json' },
                        { 'url': 'config/gam' + 'e_constant' + '_config.js' + 'on' },
                        { 'url': 'config/gam' + 'e_mycar_co' + 'nfig.json' },
                        { 'url': 'config/gam' + 'e_share_co' + 'nfig.json' },
                        { 'url': 'config/gam' + 'e_signin_c' + 'onfig.json' },
                        { 'url': 'config/gam' + 'e_motounlo' + 'ck_config.' + 'json' },
                        { 'url': 'config/gam' + 'e_name_con' + 'fig.json' },
                        { 'url': 'config/gam' + 'e_mycarunl' + 'ock_config' + '.json' }
                    ], _0x1182c8['designWidt' + 'h'] = 0x2ee, _0x1182c8['designHeig' + 'ht'] = 0x536, _0x1182c8['gameScene'] = 'scenes/Gam' + 'eScene.sce' + 'ne', _0x1182c8['homeScene'] = 'scenes/Hom' + 'eScene.sce' + 'ne', _0x1182c8['loginScene'] = 'scenes/Log' + 'inScene.sc' + 'ene', _0x1182c8['loadCustom' + 's'] = 'scenes/Loa' + 'dCustomsSc' + 'ene.scene', _0x1182c8['localFiles'] = [
                        'local',
                        'open',
                        'res/atlas/' + 'local.atla' + 's',
                        'res/atlas/' + 'local.png',
                        'res/atlas/' + 'open.atlas',
                        'res/atlas/' + 'open.png',
                        'scenes',
                        'prefabs',
                        'dialogs',
                        'item',
                        'animation',
                        'panel',
                        'panelUI',
                        'ani',
                        'openRankin' + 'g',
                        'versions'
                    ], _0x1182c8['virtualSpe' + 'edRatio'] = 1.5, _0x1182c8['MinSpeed'] = 8.333333, _0x1182c8['MaxSpeed'] = 0x28, _0x1182c8['roadLength'] = 0xfe, _0x1182c8['roadWidth'] = 0x10, _0x1182c8['roadTagNam' + 'e'] = 'road', _0x1182c8['Res3D'] = {
                        'HomeScene': 'ResGame3D/' + 'Scene/Car_' + 'Interface/' + 'Convention' + 'al/Car_Int' + 'erface.ls',
                        'GameScene': 'ResGame3D/' + 'Scene/Samp' + 'leScene/Co' + 'nventional' + '/SampleSce' + 'ne.ls'
                    }, _0x1182c8['roadIdToNa' + 'me'] = {
                        0x1: 'HiSp_road',
                        0x2: 'City_road',
                        0x3: 'Des_road',
                        0x4: 'Ice_road'
                    }, _0x1182c8['roadTypeDi' + 's'] = {
                        0x1: [
                            492.8,
                            537.6,
                            425.7,
                            537.6
                        ],
                        0x2: [
                            0x1b0,
                            0x1b0,
                            0x1b0
                        ],
                        0x3: [
                            0x192,
                            0x192,
                            268.11
                        ],
                        0x4: [
                            400.2,
                            300.4
                        ]
                    }, _0x1182c8['sound'] = {
                        0x1: 'sound/BgSt' + 'ar.mp3',
                        0x2: 'sound/BiSa' + 'i1.mp3',
                        0x3: 'sound/BiSa' + 'i2.mp3',
                        0x4: 'sound/CheL' + 'iangShengJ' + 'i.mp3',
                        0x5: 'sound/DaoJ' + 'iShi1.mp3',
                        0x6: 'sound/DaoJ' + 'iShi23.mp3',
                        0x7: 'sound/Guan' + 'Bi.mp3',
                        0x8: 'sound/Guan' + 'KaBiSaiAnN' + 'iu.mp3',
                        0x9: 'sound/HuoD' + 'eDanQi.mp3',
                        0xa: 'sound/HuoD' + 'eJinBi.mp3',
                        0xb: 'sound/HuoD' + 'eTiLi.mp3',
                        0xc: 'sound/HuoD' + 'eXingXing.' + 'mp3',
                        0xd: 'sound/QiCh' + 'eJieSuo.mp' + '3',
                        0xe: 'sound/ShaC' + 'he.mp3',
                        0xf: 'sound/Shen' + 'gLi.mp3',
                        0x10: 'sound/ShiB' + 'ai.mp3',
                        0x11: 'sound/ShiY' + 'ongDanQi.m' + 'p3',
                        0x12: 'sound/TaiT' + 'aoJingGao.' + 'mp3',
                        0x13: 'sound/Tong' + 'Yong.mp3',
                        0x14: 'sound/WanC' + 'hengSaoGua' + 'ng.mp3',
                        0x15: 'sound/XinG' + 'uanKaiQi.m' + 'p3',
                        0x16: 'sound/Zhua' + 'ngChe.mp3',
                        0x17: 'sound/spee' + 'd1.wav',
                        0x18: 'sound/spee' + 'd2.wav'
                    }, _0x1182c8['exporeId'] = 0x0, _0x1182c8['exportGame'] = {
                        0x1: '暂停对联',
                        0x2: '失败对联',
                        0x3: '胜利对联',
                        0x4: '金币大礼包对联',
                        0x5: '体力不足对联',
                        0x6: '客服会话对联',
                        0x7: '开局氮气对联',
                        0x8: '离线收益对联',
                        0x9: '主界面小插屏',
                        0xa: '比赛结束的游戏中心全' + '屏',
                        0xb: '主界面浮窗',
                        0xc: '关卡界面浮窗',
                        0xd: '比赛前幸运解锁对联',
                        0xe: '撞车暂停对联',
                        0xf: '关卡界面小插屏',
                        0x10: '取消导出弹游戏中心',
                        0x11: '幸运金币对联',
                        0x12: '比赛后幸运解锁对联'
                    }, _0x1182c8['exportNum'] = 0x8, _0x1182c8['showBanner'] = 0x41, _0x1182c8;
                }();
            _0x3546b6['default'] = _0x2ef862;
        },
        { '../constant/enums': 0x3d }
    ],
    0x3d: [
        function (_0x5a23d0, _0x30fcdf, _0x53faa3) {
            'use strict';
            Object['defineProp' + 'erty'](_0x53faa3, '__esModule', { 'value': !0x0 });
            var _0x527eaa;
            !function (_0x16ba98) {
                _0x16ba98[_0x16ba98['Bottom'] = 0x0] = 'Bottom';
            }(_0x527eaa = _0x53faa3['BannerType'] || (_0x53faa3['BannerType'] = {}));
            var _0x3929af;
            !function (_0x5156a) {
                _0x5156a[_0x5156a['TestExit'] = -0x65] = 'TestExit', _0x5156a[_0x5156a['WXVersionT' + 'ooOld'] = -0x63] = 'WXVersionT' + 'ooOld', _0x5156a[_0x5156a['ExitMiniGa' + 'me'] = -0x62] = 'ExitMiniGa' + 'me', _0x5156a[_0x5156a['NoError'] = 0x3e8] = 'NoError';
            }(_0x3929af = _0x53faa3['ErrorCode'] || (_0x53faa3['ErrorCode'] = {}));
            var _0xcb493c;
            !function (_0x584692) {
                _0x584692[_0x584692['None'] = -0x1] = 'None', _0x584692[_0x584692['Blank'] = 0x0] = 'Blank', _0x584692[_0x584692['VideoAd'] = 0x1] = 'VideoAd', _0x584692[_0x584692['Share'] = 0x2] = 'Share';
            }(_0xcb493c = _0x53faa3['PromoteMod' + 'e'] || (_0x53faa3['PromoteMod' + 'e'] = {}));
            var _0x1d3e9b;
            !function (_0x298768) {
                _0x298768[_0x298768['BgStar'] = 0x1] = 'BgStar', _0x298768[_0x298768['BiSai1'] = 0x2] = 'BiSai1', _0x298768[_0x298768['BiSai2'] = 0x3] = 'BiSai2', _0x298768[_0x298768['CheLiangSh' + 'engJi'] = 0x4] = 'CheLiangSh' + 'engJi', _0x298768[_0x298768['DaoJiShi1'] = 0x5] = 'DaoJiShi1', _0x298768[_0x298768['DaoJiShi23'] = 0x6] = 'DaoJiShi23', _0x298768[_0x298768['GuanBi'] = 0x7] = 'GuanBi', _0x298768[_0x298768['GuanKaBiSa' + 'iAnNiu'] = 0x8] = 'GuanKaBiSa' + 'iAnNiu', _0x298768[_0x298768['HuoDeDanQi'] = 0x9] = 'HuoDeDanQi', _0x298768[_0x298768['HuoDeJinBi'] = 0xa] = 'HuoDeJinBi', _0x298768[_0x298768['HuoDeTiLi'] = 0xb] = 'HuoDeTiLi', _0x298768[_0x298768['HuoDeXingX' + 'ing'] = 0xc] = 'HuoDeXingX' + 'ing', _0x298768[_0x298768['QiCheJieSu' + 'o'] = 0xd] = 'QiCheJieSu' + 'o', _0x298768[_0x298768['ShaChe'] = 0xe] = 'ShaChe', _0x298768[_0x298768['ShengLi'] = 0xf] = 'ShengLi', _0x298768[_0x298768['ShiBai'] = 0x10] = 'ShiBai', _0x298768[_0x298768['ShiYongDan' + 'Qi'] = 0x11] = 'ShiYongDan' + 'Qi', _0x298768[_0x298768['TaiTaoJing' + 'Gao'] = 0x12] = 'TaiTaoJing' + 'Gao', _0x298768[_0x298768['TongYong'] = 0x13] = 'TongYong', _0x298768[_0x298768['WanChengSa' + 'oGuang'] = 0x14] = 'WanChengSa' + 'oGuang', _0x298768[_0x298768['XinGuanKai' + 'Qi'] = 0x15] = 'XinGuanKai' + 'Qi', _0x298768[_0x298768['ZhuangChe'] = 0x16] = 'ZhuangChe', _0x298768[_0x298768['speed1'] = 0x17] = 'speed1', _0x298768[_0x298768['speed2'] = 0x18] = 'speed2';
            }(_0x1d3e9b = _0x53faa3['SoundName'] || (_0x53faa3['SoundName'] = {}));
            var _0x3d44a9;
            !function (_0x4d6fe5) {
                _0x4d6fe5[_0x4d6fe5['tongYong'] = 0x2] = 'tongYong', _0x4d6fe5[_0x4d6fe5['guanBi'] = 0x3] = 'guanBi', _0x4d6fe5[_0x4d6fe5['ziDingYi'] = 0x4] = 'ziDingYi';
            }(_0x3d44a9 = _0x53faa3['soundType'] || (_0x53faa3['soundType'] = {}));
            var _0x4113e2;
            !function (_0x30631a) {
                _0x30631a['sound101'] = 'sound101', _0x30631a['sound102'] = 'sound102', _0x30631a['sound201'] = 'sound201', _0x30631a['sound202'] = 'sound202', _0x30631a['sound301'] = 'sound301', _0x30631a['sound302'] = 'sound302', _0x30631a['sound401'] = 'sound401', _0x30631a['sound402'] = 'sound402', _0x30631a['sound501'] = 'sound501', _0x30631a['sound502'] = 'sound502', _0x30631a['sound601'] = 'sound601', _0x30631a['sound602'] = 'sound602', _0x30631a['sound701'] = 'sound701', _0x30631a['sound702'] = 'sound702', _0x30631a['sound801'] = 'sound801', _0x30631a['sound802'] = 'sound802';
            }(_0x4113e2 = _0x53faa3['motoSound'] || (_0x53faa3['motoSound'] = {}));
            var _0x58d050;
            !function (_0x5124db) {
                _0x5124db[_0x5124db['ShowCloseD' + 'ialog'] = 0x3e8] = 'ShowCloseD' + 'ialog', _0x5124db[_0x5124db['StartGame'] = 0x3e9] = 'StartGame', _0x5124db[_0x5124db['NearPass'] = 0x3ea] = 'NearPass', _0x5124db[_0x5124db['GameResult'] = 0x3eb] = 'GameResult', _0x5124db[_0x5124db['RecordDuaH' + 'ighSpeed'] = 0x3ec] = 'RecordDuaH' + 'ighSpeed', _0x5124db[_0x5124db['StopGame'] = 0x3ed] = 'StopGame', _0x5124db[_0x5124db['ResumeGame'] = 0x3ee] = 'ResumeGame', _0x5124db[_0x5124db['AgainTenSe' + 'conds'] = 0x3ef] = 'AgainTenSe' + 'conds', _0x5124db[_0x5124db['RefreshGol' + 'd'] = 0x3f0] = 'RefreshGol' + 'd', _0x5124db[_0x5124db['offTouchEv' + 'ent'] = 0x3f1] = 'offTouchEv' + 'ent', _0x5124db[_0x5124db['onTouchEve' + 'nt'] = 0x3f2] = 'onTouchEve' + 'nt', _0x5124db[_0x5124db['OnShow'] = 0x3f3] = 'OnShow', _0x5124db[_0x5124db['UpdateAvat' + 'ar'] = 0x3f4] = 'UpdateAvat' + 'ar', _0x5124db[_0x5124db['ContinueCa' + 'reer'] = 0x3f5] = 'ContinueCa' + 'reer', _0x5124db[_0x5124db['RefreshPow' + 'er'] = 0x3f6] = 'RefreshPow' + 'er', _0x5124db[_0x5124db['RefreshSco' + 'reInCareer'] = 0x3f7] = 'RefreshSco' + 'reInCareer', _0x5124db[_0x5124db['RefreshAdU' + 'nlockCount'] = 0x3f8] = 'RefreshAdU' + 'nlockCount', _0x5124db[_0x5124db['leftAndRig' + 'ht'] = 0x3f9] = 'leftAndRig' + 'ht', _0x5124db[_0x5124db['showCrushI' + 'mg'] = 0x3fa] = 'showCrushI' + 'mg', _0x5124db[_0x5124db['updataPowe' + 'r'] = 0x3fb] = 'updataPowe' + 'r', _0x5124db[_0x5124db['overStarSh' + 'ow'] = 0x3fc] = 'overStarSh' + 'ow', _0x5124db[_0x5124db['doubleGold'] = 0x3fd] = 'doubleGold', _0x5124db[_0x5124db['addGraphic' + 's'] = 0x3fe] = 'addGraphic' + 's', _0x5124db[_0x5124db['ChangeMoto'] = 0x3ff] = 'ChangeMoto', _0x5124db[_0x5124db['ChangeLuck' + 'Moto'] = 0x400] = 'ChangeLuck' + 'Moto', _0x5124db[_0x5124db['homeGoldTw' + 'een'] = 0x401] = 'homeGoldTw' + 'een', _0x5124db[_0x5124db['gameContre'] = 0x402] = 'gameContre', _0x5124db[_0x5124db['showSelect' + 'Bnner'] = 0x403] = 'showSelect' + 'Bnner', _0x5124db[_0x5124db['homePowerT' + 'ween'] = 0x404] = 'homePowerT' + 'ween', _0x5124db[_0x5124db['powerGet'] = 0x405] = 'powerGet', _0x5124db[_0x5124db['goldLack'] = 0x406] = 'goldLack', _0x5124db[_0x5124db['CountDown'] = 0x407] = 'CountDown', _0x5124db[_0x5124db['poseStarGa' + 'me'] = 0x408] = 'poseStarGa' + 'me', _0x5124db[_0x5124db['isNitrogen'] = 0x409] = 'isNitrogen', _0x5124db[_0x5124db['barrierCar'] = 0x40a] = 'barrierCar', _0x5124db[_0x5124db['updataGold'] = 0x40b] = 'updataGold', _0x5124db[_0x5124db['kefuReward'] = 0x40c] = 'kefuReward', _0x5124db[_0x5124db['addNitroge' + 'n'] = 0x40d] = 'addNitroge' + 'n', _0x5124db[_0x5124db['gameOverDo' + 'uble'] = 0x40e] = 'gameOverDo' + 'uble', _0x5124db[_0x5124db['getGold'] = 0x40f] = 'getGold', _0x5124db[_0x5124db['Offline'] = 0x410] = 'Offline', _0x5124db[_0x5124db['getPower'] = 0x411] = 'getPower', _0x5124db[_0x5124db['sign'] = 0x412] = 'sign', _0x5124db[_0x5124db['danqi'] = 0x413] = 'danqi', _0x5124db[_0x5124db['jump'] = 0x414] = 'jump', _0x5124db[_0x5124db['freeDemo'] = 0x415] = 'freeDemo', _0x5124db[_0x5124db['glodGift'] = 0x416] = 'glodGift', _0x5124db[_0x5124db['goldOverTw' + 'een'] = 0x417] = 'goldOverTw' + 'een', _0x5124db[_0x5124db['selsctGold' + 'Gift'] = 0x418] = 'selsctGold' + 'Gift', _0x5124db[_0x5124db['homeGoldGi' + 'ft'] = 0x419] = 'homeGoldGi' + 'ft', _0x5124db[_0x5124db['showBanner'] = 0x41a] = 'showBanner', _0x5124db[_0x5124db['ExportFail'] = 0x41b] = 'ExportFail', _0x5124db[_0x5124db['isDeme'] = 0x41c] = 'isDeme', _0x5124db[_0x5124db['CollderSto' + 'p'] = 0x41d] = 'CollderSto' + 'p';
            }(_0x58d050 = _0x53faa3['GameEvent'] || (_0x53faa3['GameEvent'] = {}));
            var _0x1ac1e0;
            !function (_0x8f4ab9) {
                _0x8f4ab9['Float'] = '浮窗', _0x8f4ab9['Try'] = '试玩', _0x8f4ab9['Side'] = '侧边栏', _0x8f4ab9['FloatBar'] = '底边栏', _0x8f4ab9['StartPage'] = '首屏', _0x8f4ab9['Mode'] = '模式界面', _0x8f4ab9['GameResult'] = '结算界面', _0x8f4ab9['WindowSide'] = '对联', _0x8f4ab9['TryExport'] = '插屏', _0x8f4ab9['ExportList'] = '底边栏', _0x8f4ab9['Zhu'] = '主界面', _0x8f4ab9['JieShu'] = '结束界面', _0x8f4ab9['QuXiaoDaol' + 'iang'] = '取消导量';
            }(_0x1ac1e0 = _0x53faa3['FlowDataTy' + 'pe'] || (_0x53faa3['FlowDataTy' + 'pe'] = {}));
            var _0x20c2fa;
            !function (_0x903435) {
                _0x903435[_0x903435['Init'] = 0x0] = 'Init', _0x903435[_0x903435['GameScene'] = 0x1] = 'GameScene', _0x903435[_0x903435['GuideStep'] = 0x2] = 'GuideStep', _0x903435[_0x903435['TryExportD' + 'ialog'] = 0x3] = 'TryExportD' + 'ialog';
            }(_0x20c2fa = _0x53faa3['HideBanner' + 'Pos'] || (_0x53faa3['HideBanner' + 'Pos'] = {}));
            var _0x5ea297;
            !function (_0xabde7d) {
                _0xabde7d[_0xabde7d['ChooseRoad'] = 0x1] = 'ChooseRoad', _0xabde7d[_0xabde7d['Home'] = 0x2] = 'Home', _0xabde7d[_0xabde7d['operateVie' + 'w'] = 0x3] = 'operateVie' + 'w', _0xabde7d[_0xabde7d['topBar'] = 0x4] = 'topBar', _0xabde7d[_0xabde7d['ChooseMode'] = 0x5] = 'ChooseMode', _0xabde7d[_0xabde7d['Garage'] = 0x6] = 'Garage', _0xabde7d[_0xabde7d['destroyVie' + 'w'] = 0x7] = 'destroyVie' + 'w', _0xabde7d[_0xabde7d['PvPView'] = 0x8] = 'PvPView', _0xabde7d[_0xabde7d['MatchView'] = 0x9] = 'MatchView', _0xabde7d[_0xabde7d['CareerView'] = 0xa] = 'CareerView', _0xabde7d[_0xabde7d['Load3DScen' + 'e'] = 0xb] = 'Load3DScen' + 'e', _0xabde7d[_0xabde7d['SceneEnd'] = 0xc] = 'SceneEnd', _0xabde7d[_0xabde7d['NearPassTi' + 'pView'] = 0xd] = 'NearPassTi' + 'pView', _0xabde7d[_0xabde7d['FloatWindo' + 'w'] = 0xe] = 'FloatWindo' + 'w', _0xabde7d[_0xabde7d['GameResult' + '_Career'] = 0xf] = 'GameResult' + '_Career', _0xabde7d[_0xabde7d['GameResult' + '_Double'] = 0x10] = 'GameResult' + '_Double';
            }(_0x5ea297 = _0x53faa3['SceneID'] || (_0x53faa3['SceneID'] = {}));
            var _0x1c2eb2;
            !function (_0x26edc1) {
                _0x26edc1[_0x26edc1['Step_HomeW' + 'elcome'] = 0x0] = 'Step_HomeW' + 'elcome', _0x26edc1[_0x26edc1['Step_HomeS' + 'tart'] = 0x1] = 'Step_HomeS' + 'tart', _0x26edc1[_0x26edc1['Step_Choos' + 'eCareer'] = 0x2] = 'Step_Choos' + 'eCareer', _0x26edc1[_0x26edc1['Step_Caree' + 'rFirst'] = 0x3] = 'Step_Caree' + 'rFirst', _0x26edc1[_0x26edc1['Step_Caree' + 'rStart'] = 0x4] = 'Step_Caree' + 'rStart', _0x26edc1[_0x26edc1['Step_GameT' + 'ip'] = 0x5] = 'Step_GameT' + 'ip', _0x26edc1[_0x26edc1['Step_Opera' + 'teRotate'] = 0x6] = 'Step_Opera' + 'teRotate', _0x26edc1[_0x26edc1['Step_Opera' + 'teAccelera' + 'te'] = 0x7] = 'Step_Opera' + 'teAccelera' + 'te', _0x26edc1[_0x26edc1['Step_Opera' + 'teBrake'] = 0x8] = 'Step_Opera' + 'teBrake', _0x26edc1[_0x26edc1['Step_UseFu' + 'el'] = 0x9] = 'Step_UseFu' + 'el', _0x26edc1[_0x26edc1['Step_Retur' + 'nHome'] = 0xa] = 'Step_Retur' + 'nHome', _0x26edc1[_0x26edc1['Step_Guide' + 'Reward'] = 0xb] = 'Step_Guide' + 'Reward', _0x26edc1[_0x26edc1['Step_Enter' + 'Garage'] = 0xc] = 'Step_Enter' + 'Garage', _0x26edc1[_0x26edc1['Step_Unloc' + 'kCar'] = 0xd] = 'Step_Unloc' + 'kCar', _0x26edc1[_0x26edc1['Step_Finis' + 'hGuide'] = 0xe] = 'Step_Finis' + 'hGuide', _0x26edc1[_0x26edc1['Step_HighS' + 'peed'] = 0xf] = 'Step_HighS' + 'peed', _0x26edc1[_0x26edc1['Step_Conti' + 'nousPass'] = 0x10] = 'Step_Conti' + 'nousPass';
            }(_0x1c2eb2 = _0x53faa3['GuideStep'] || (_0x53faa3['GuideStep'] = {}));
            var _0x436dbb;
            !function (_0xbd38e3) {
                _0xbd38e3[_0xbd38e3['EndLess'] = 0x1] = 'EndLess', _0xbd38e3[_0xbd38e3['RankMatch'] = 0x2] = 'RankMatch', _0xbd38e3[_0xbd38e3['TimeTrail'] = 0x3] = 'TimeTrail';
            }(_0x436dbb = _0x53faa3['UnlockFunc' + 'tion'] || (_0x53faa3['UnlockFunc' + 'tion'] = {}));
            var _0x2d3746;
            !function (_0x3a3bb0) {
                _0x3a3bb0[_0x3a3bb0['Energy'] = 0x1] = 'Energy', _0x3a3bb0[_0x3a3bb0['Accelerate'] = 0x2] = 'Accelerate', _0x3a3bb0[_0x3a3bb0['Operate'] = 0x3] = 'Operate', _0x3a3bb0[_0x3a3bb0['Brake'] = 0x4] = 'Brake';
            }(_0x2d3746 = _0x53faa3['CarPropert' + 'y'] || (_0x53faa3['CarPropert' + 'y'] = {}));
            var _0x57d877;
            !function (_0x2ccab1) {
                _0x2ccab1['propertyLv' + 'l'] = 'propertyLv' + 'l';
            }(_0x57d877 = _0x53faa3['KeyName'] || (_0x53faa3['KeyName'] = {}));
            var _0xfe069b;
            !function (_0x362bfb) {
                _0x362bfb[_0x362bfb['StartGame'] = 0x1] = 'StartGame', _0x362bfb[_0x362bfb['ResumeGame'] = 0x2] = 'ResumeGame', _0x362bfb[_0x362bfb['RestartGam' + 'e'] = 0x3] = 'RestartGam' + 'e';
            }(_0xfe069b = _0x53faa3['CountDownT' + 'ype'] || (_0x53faa3['CountDownT' + 'ype'] = {}));
            var _0x592d5f;
            !function (_0x263827) {
                _0x263827[_0x263827['Bronze'] = 0x1] = 'Bronze', _0x263827[_0x263827['Silver'] = 0x2] = 'Silver', _0x263827[_0x263827['Gold'] = 0x3] = 'Gold', _0x263827[_0x263827['Platinum'] = 0x4] = 'Platinum', _0x263827[_0x263827['Diamond'] = 0x5] = 'Diamond', _0x263827[_0x263827['Legend'] = 0x6] = 'Legend', _0x263827[_0x263827['King'] = 0x7] = 'King';
            }(_0x592d5f = _0x53faa3['PvPRank'] || (_0x53faa3['PvPRank'] = {}));
            var _0x43d9cd;
            !function (_0x289781) {
                _0x289781[_0x289781['Bronze_Las' + 't'] = 0x11] = 'Bronze_Las' + 't';
            }(_0x43d9cd = _0x53faa3['RankMatch'] || (_0x53faa3['RankMatch'] = {}));
            var _0x35a6e0;
            !function (_0x53419d) {
                _0x53419d[_0x53419d['World'] = 0x0] = 'World', _0x53419d[_0x53419d['WxFriend'] = 0x1] = 'WxFriend';
            }(_0x35a6e0 = _0x53faa3['RankType'] || (_0x53faa3['RankType'] = {}));
            var _0x3b515e;
            !function (_0x1e8540) {
                _0x1e8540[_0x1e8540['ShowFriend' + 'Rank'] = 0x1] = 'ShowFriend' + 'Rank', _0x1e8540[_0x1e8540['ShowGroupR' + 'ank'] = 0x2] = 'ShowGroupR' + 'ank', _0x1e8540[_0x1e8540['DeleteRank'] = 0x3] = 'DeleteRank';
            }(_0x3b515e = _0x53faa3['WxOpenActi' + 'on'] || (_0x53faa3['WxOpenActi' + 'on'] = {}));
            var _0x6a3504;
            !function (_0x538b93) {
                _0x538b93[_0x538b93['Fullfilled'] = 0x0] = 'Fullfilled', _0x538b93[_0x538b93['UnchooseCa' + 'r'] = 0x1] = 'UnchooseCa' + 'r', _0x538b93[_0x538b93['UnenoughPr' + 'operty'] = 0x2] = 'UnenoughPr' + 'operty', _0x538b93[_0x538b93['ErrorStep'] = 0x3] = 'ErrorStep', _0x538b93[_0x538b93['ErrorConfi' + 'gParas'] = 0x4] = 'ErrorConfi' + 'gParas', _0x538b93[_0x538b93['UnenoughTi' + 'meTrail'] = 0x5] = 'UnenoughTi' + 'meTrail', _0x538b93[_0x538b93['UnenoughPv' + 'PGrade'] = 0x6] = 'UnenoughPv' + 'PGrade', _0x538b93[_0x538b93['UnenoughPv' + 'PWinCount'] = 0x7] = 'UnenoughPv' + 'PWinCount', _0x538b93[_0x538b93['UnenoughCa' + 'rQuality'] = 0x8] = 'UnenoughCa' + 'rQuality', _0x538b93[_0x538b93['UnenoughSt' + 'ars'] = 0x9] = 'UnenoughSt' + 'ars', _0x538b93[_0x538b93['UnenoughDa' + 'yTasks'] = 0xa] = 'UnenoughDa' + 'yTasks';
            }(_0x6a3504 = _0x53faa3['CheckCondi' + 'tionResult'] || (_0x53faa3['CheckCondi' + 'tionResult'] = {}));
            var _0x5d2a32;
            !function (_0xbedc36) {
                _0xbedc36[_0xbedc36['One'] = 0x1] = 'One', _0xbedc36[_0xbedc36['Two'] = 0x2] = 'Two', _0xbedc36[_0xbedc36['Three'] = 0x3] = 'Three', _0xbedc36[_0xbedc36['Four'] = 0x4] = 'Four', _0xbedc36[_0xbedc36['Five'] = 0x5] = 'Five', _0xbedc36[_0xbedc36['Six'] = 0x6] = 'Six';
            }(_0x5d2a32 = _0x53faa3['CareerTask' + 'Type'] || (_0x53faa3['CareerTask' + 'Type'] = {}));
            var _0x2a6e1d;
            !function (_0x4ae688) {
                _0x4ae688[_0x4ae688['Finish'] = 0x7] = 'Finish', _0x4ae688[_0x4ae688['Earlier'] = 0x8] = 'Earlier', _0x4ae688[_0x4ae688['NoDestroye' + 'd'] = 0x9] = 'NoDestroye' + 'd', _0x4ae688[_0x4ae688['UseReborn'] = 0xa] = 'UseReborn', _0x4ae688[_0x4ae688['NoBrake'] = 0xb] = 'NoBrake';
            }(_0x2a6e1d = _0x53faa3['CareerStar' + 'Condition'] || (_0x53faa3['CareerStar' + 'Condition'] = {}));
            var _0x1241e2;
            !function (_0x86d176) {
                _0x86d176[_0x86d176['Property'] = 0x1] = 'Property', _0x86d176[_0x86d176['TimeTrailC' + 'ount'] = 0x2] = 'TimeTrailC' + 'ount', _0x86d176[_0x86d176['PvPGrade'] = 0x3] = 'PvPGrade', _0x86d176[_0x86d176['PvPWinCoun' + 't'] = 0x4] = 'PvPWinCoun' + 't', _0x86d176[_0x86d176['CarQuality'] = 0x5] = 'CarQuality', _0x86d176[_0x86d176['DayTaskFin' + 'ishCount'] = 0x6] = 'DayTaskFin' + 'ishCount', _0x86d176[_0x86d176['StarCountC' + 'hapterPreS' + 'tep'] = 0x7] = 'StarCountC' + 'hapterPreS' + 'tep';
            }(_0x1241e2 = _0x53faa3['CareerCond' + 'ition'] || (_0x53faa3['CareerCond' + 'ition'] = {}));
            var _0x3c4464;
            !function (_0xaeb6c0) {
                _0xaeb6c0[_0xaeb6c0['NearPass'] = 0x0] = 'NearPass', _0xaeb6c0[_0xaeb6c0['AddLeftTim' + 'e_Career'] = 0x1] = 'AddLeftTim' + 'e_Career';
            }(_0x3c4464 = _0x53faa3['FloatTipTy' + 'pe'] || (_0x53faa3['FloatTipTy' + 'pe'] = {}));
            var _0x3e144f;
            !function (_0xef9baf) {
                _0xef9baf[_0xef9baf['Second'] = 0x3e8] = 'Second', _0xef9baf[_0xef9baf['Minute'] = 0xea60] = 'Minute', _0xef9baf[_0xef9baf['Hour'] = 0x36ee80] = 'Hour';
            }(_0x3e144f = _0x53faa3['TimeDate'] || (_0x53faa3['TimeDate'] = {}));
            var _0x1e80ce;
            !function (_0x2e3380) {
                _0x2e3380[_0x2e3380['LeftToMidd' + 'le'] = 0x0] = 'LeftToMidd' + 'le', _0x2e3380[_0x2e3380['MiddleToRi' + 'ght'] = 0x1] = 'MiddleToRi' + 'ght', _0x2e3380[_0x2e3380['RightToMid' + 'dle'] = 0x2] = 'RightToMid' + 'dle', _0x2e3380[_0x2e3380['MiddleToLe' + 'ft'] = 0x3] = 'MiddleToLe' + 'ft', _0x2e3380[_0x2e3380['Invalid'] = 0x4] = 'Invalid';
            }(_0x1e80ce = _0x53faa3['AniDirecti' + 'on'] || (_0x53faa3['AniDirecti' + 'on'] = {}));
            var _0x142582;
            !function (_0x3ed57a) {
                _0x3ed57a[_0x3ed57a['WndSide_Ic' + 'onWidth'] = 0x82] = 'WndSide_Ic' + 'onWidth';
            }(_0x142582 = _0x53faa3['TryGameIco' + 'n'] || (_0x53faa3['TryGameIco' + 'n'] = {}));
            var _0x34cadd;
            !function (_0x432c21) {
                _0x432c21[_0x432c21['Gold'] = 0x0] = 'Gold', _0x432c21[_0x432c21['power'] = 0x1] = 'power', _0x432c21[_0x432c21['Diamond'] = 0x2] = 'Diamond';
            }(_0x34cadd = _0x53faa3['CurrencyTy' + 'pe'] || (_0x53faa3['CurrencyTy' + 'pe'] = {}));
            var _0x2312cc;
            !function (_0x4ecbbe) {
                _0x4ecbbe[_0x4ecbbe['ended'] = 0x0] = 'ended', _0x4ecbbe[_0x4ecbbe['goon'] = 0x1] = 'goon', _0x4ecbbe[_0x4ecbbe['none'] = 0x2] = 'none';
            }(_0x2312cc = _0x53faa3['Video_Ids'] || (_0x53faa3['Video_Ids'] = {}));
            var _0x174dcd;
            !function (_0x101402) {
                _0x101402[_0x101402['wx'] = 0x1] = 'wx', _0x101402[_0x101402['qq'] = 0x2] = 'qq', _0x101402[_0x101402['web'] = 0x3] = 'web', _0x101402[_0x101402['tt'] = 0x4] = 'tt';
            }(_0x174dcd = _0x53faa3['PlatformTy' + 'pe'] || (_0x53faa3['PlatformTy' + 'pe'] = {}));
            var _0x3d95b4;
            !function (_0x81b29a) {
                _0x81b29a[_0x81b29a['zhuYe'] = 0x0] = 'zhuYe', _0x81b29a[_0x81b29a['jieSuo'] = 0x1] = 'jieSuo';
            }(_0x3d95b4 = _0x53faa3['HomeType'] || (_0x53faa3['HomeType'] = {}));
            var _0x1d369d;
            !function (_0x29028b) {
                _0x29028b[_0x29028b['down'] = 0x0] = 'down', _0x29028b[_0x29028b['up'] = 0x1] = 'up';
            }(_0x1d369d = _0x53faa3['ShaChe'] || (_0x53faa3['ShaChe'] = {}));
            var _0x1f2370;
            !function (_0x114899) {
                _0x114899[_0x114899['Blue'] = 0x2] = 'Blue', _0x114899[_0x114899['Yellow'] = 0x3] = 'Yellow';
            }(_0x1f2370 = _0x53faa3['Nitrogen_t' + 'ype'] || (_0x53faa3['Nitrogen_t' + 'ype'] = {}));
            var _0xb033;
            !function (_0x435776) {
                _0x435776[_0x435776['zanTing'] = 0x1] = 'zanTing', _0x435776[_0x435776['shiBai'] = 0x2] = 'shiBai', _0x435776[_0x435776['shengLi'] = 0x3] = 'shengLi', _0x435776[_0x435776['goldLack'] = 0x4] = 'goldLack', _0x435776[_0x435776['powerLack'] = 0x5] = 'powerLack', _0x435776[_0x435776['kefu'] = 0x6] = 'kefu', _0x435776[_0x435776['starNitrog' + 'en'] = 0x7] = 'starNitrog' + 'en', _0x435776[_0x435776['offLine'] = 0x8] = 'offLine', _0x435776[_0x435776['zhuChaPing'] = 0x9] = 'zhuChaPing', _0x435776[_0x435776['gameOverCo' + 'ntre'] = 0xa] = 'gameOverCo' + 'ntre', _0x435776[_0x435776['home'] = 0xb] = 'home', _0x435776[_0x435776['select'] = 0xc] = 'select', _0x435776[_0x435776['lucky'] = 0xd] = 'lucky', _0x435776[_0x435776['collder'] = 0xe] = 'collder', _0x435776[_0x435776['guankaChap' + 'ing'] = 0xf] = 'guankaChap' + 'ing', _0x435776[_0x435776['quxiaoCont' + 're'] = 0x10] = 'quxiaoCont' + 're';
            }(_0xb033 = _0x53faa3['ExportId'] || (_0x53faa3['ExportId'] = {}));
            var _0x3e8d0a;
            !function (_0x207cb6) {
                _0x207cb6[_0x207cb6['not'] = 0x0] = 'not', _0x207cb6[_0x207cb6['kefu'] = 0x1] = 'kefu', _0x207cb6[_0x207cb6['gameOverDo' + 'uble'] = 0x2] = 'gameOverDo' + 'uble', _0x207cb6[_0x207cb6['gameOverJu' + 'mp'] = 0x3] = 'gameOverJu' + 'mp', _0x207cb6[_0x207cb6['goldLack'] = 0x4] = 'goldLack', _0x207cb6[_0x207cb6['offLine'] = 0x5] = 'offLine', _0x207cb6[_0x207cb6['powerLack'] = 0x6] = 'powerLack', _0x207cb6[_0x207cb6['sign'] = 0x7] = 'sign', _0x207cb6[_0x207cb6['danqi'] = 0x8] = 'danqi', _0x207cb6[_0x207cb6['glodGift'] = 0x9] = 'glodGift', _0x207cb6[_0x207cb6['ondemo'] = 0xa] = 'ondemo';
            }(_0x3e8d0a = _0x53faa3['shareType'] || (_0x53faa3['shareType'] = {}));
            var _0x8fec28;
            !function (_0x1eddb7) {
                _0x1eddb7['server'] = 'server', _0x1eddb7['res'] = 'res';
            }(_0x8fec28 = _0x53faa3['EUrl'] || (_0x53faa3['EUrl'] = {}));
        },
        {}
    ],
    0x3e: [
        function (_0x3b71ef, _0x332e47, _0x3493f3) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3493f3, '__esModule', { 'value': !0x0 }), _0x3493f3['GameText'] = {
                'NetError': 'Network\x20Er' + 'ror',
                'LoadingTip': 'Loading...',
                'LoadingRes': 'Loading\x20Re' + 'source...',
                'LoadingScene': 'Loading\x20Sc' + 'ene...',
                'LoadingOver': 'Loading\x20Co' + 'mplete',
                'GetSuccess': 'Get\x20Succes' + 's',
                'GetFail': 'Get\x20Failed',
                'ExceedResu': 'The\x20Resurr' + 'ection\x20Poi' + 'nt\x20Is\x20Full',
                'GoldNotEg': 'Gold\x20Coins' + '\x20Shortage',
                'CantSign': 'Already\x20Si' + 'gned\x20In',
                'ShareFail': 'Communicat' + 'ion\x20Failed',
                'NoVideoAd': 'There\x20Are\x20' + 'No\x20Videos\x20' + 'To\x20Watch,\x20' + 'Please\x20Try' + '\x20Again\x20Lat' + 'er',
                'WaitPower': 'No\x20Video\x20T' + 'o\x20Watch,\x20P' + 'lease\x20Take' + '\x20A\x20Break\x20A' + 'nd\x20Wait\x20Fo' + 'r\x20Your\x20Str' + 'ength\x20To\x20R' + 'ecover',
                'NotOpen': 'Not\x20Yet\x20Op' + 'en,\x20So\x20Sta' + 'y\x20Tuned',
                'GoldGift': 'The\x20Video\x20' + 'Is\x20Being\x20P' + 'repared,\x20P' + 'lease\x20Try\x20' + 'Again\x20Late' + 'r',
                'Share': 'Share',
                'VideoAd': 'Video\x20Ads',
                'BannerAd': 'Banner\x20Adv' + 'ertising',
                'GetOnePower': 'Get\x201\x20Poin' + 't\x20Of\x20Stami' + 'na',
                'GetTryAward': 'Congratula' + 'tions\x20On\x20G' + 'etting\x20{0}' + '\x20Gold\x20Coin' + 's',
                'GetTryAwardTime': 'Try\x20For\x20{0' + '}\x20Seconds\x20' + 'To\x20Get\x20Rew' + 'ards',
                'GetTryAwardTip': 'Try\x20To\x20Pla' + 'y\x20For\x20{0}\x20' + 'Seconds,\x20R' + 'eturn\x20Rewa' + 'rds',
                'BtnTextGetAward': 'Receive',
                'BtnTextGotAward': 'Try\x20It\x20Out',
                'GetDoubleAward': 'Congratula' + 'tions\x20On\x20G' + 'etting\x20Dou' + 'ble\x20Reward',
                'UnlockAtLevel': '{0}\x20Level\x20' + 'Unlock',
                'CheckInAwardText': 'Click\x20The\x20' + 'Button\x20To\x20' + 'Receive\x20Th' + 'e\x20Award',
                'GetSignAward': 'Congratula' + 'tions\x20On\x20G' + 'etting\x20{0}' + '\x20Gold\x20Coin' + 's',
                'AuthUserError': 'Authorizat' + 'ion\x20Failed' + ',\x20Please\x20T' + 'ry\x20Again',
                'AskAuthUser': 'Not\x20Author' + 'ized\x20Yet,\x20' + 'Please\x20Aut' + 'horize\x20Fir' + 'st',
                'ShareFailTip': 'Share\x20To\x20D' + 'ifferent\x20G' + 'roups\x20To\x20R' + 'eceive\x20Rew' + 'ards!',
                'ChangeMoto': 'Vehicle\x20Ch' + 'anged\x20Succ' + 'essfully',
                'ChangeLuckyMoto': 'Successful' + 'ly\x20Unlocke' + 'd\x20The\x20Car!'
            }, _0x3493f3['GetDotText'] = {
                'main': '流失统计：',
                'jinruload': '1、进入游戏加载界面',
                'wanchengload': '2、完成游戏加载界面',
                'ZhuJieMian': '3、进入游戏主界面',
                'ZhuJieMianKaiShi': '4、点击主界面比赛按' + '钮',
                'GuanKaJieMian': '5、进入关卡界面',
                'GuankaDianJiBiSai': '6、点击观看界面比赛' + '按钮',
                'DiYiGuanLoad': '7、进入第1关loa' + 'ding界面',
                'wanchengdiyiguanload': '8、完成第一关loa' + 'd',
                'JinRuDiYiGuan': '9、进入第一关',
                'WanChengXinShouYinDao': '10、完成新手引导',
                'DiyiguanTanChuYouXizhongxin': '11、第1关弹出游戏' + '中心界面',
                'DiyiguanJieSuanJiemian': '12、进入第1关结算' + '界面',
                'DiyiguanFanhuiGUankaJIemian': '13、第1关返回关卡' + '界面',
                'erGuanJinRu': '14、进入第2关',
                'erGuanTanchuyouxizhongxin': '15、第2关弹出游戏' + '中心界面',
                'erguanJieSuan': '16、进入第2结算界' + '面',
                'erguanFanhuiGUankajiemian': '17、第2关返回关卡' + '界面',
                'sanguanjinru': '18、进入第3关',
                'sanguantanchuyouxizhongxin': '19、第3关弹出游戏' + '中心界面',
                'sanguanjiesuan': '20、进入第3关结算' + '界面',
                'sanguanfanhuiguanka': '21、第3关返回关卡' + '界面',
                'wanchengDisiguan': '22、完成第四关',
                'wuguanwancheng': '23、完成第五关',
                'Video': '看视频细分',
                'MianFeiJinBi': '免费金币',
                'TiLiBuZu': '体力不足',
                'KaiJuDanQi': '开局氮气',
                'ShuangBeiLingQu': 'Get\x20x2',
                'TianGuoBenGuan': '跳过本关',
                'LiXinaShouYi': '离线收益',
                'DaoChu': '导出统计',
                'XingYunJiwMian': '幸运界面',
                'ZhuJieMianChaPing': '主界面插屏',
                'GaunKaChaPing': '关卡界面插屏',
                'QuXiaoDaoChuChaPing': '取消导出插屏',
                'baoxiang': '宝箱界面'
            };
        },
        {}
    ],
    0x3f: [
        function (_0x36bf4c, _0x590131, _0xe82a49) {
            'use strict';
            Object['defineProp' + 'erty'](_0xe82a49, '__esModule', { 'value': !0x0 });
            var _0x1a057b = _0x36bf4c('../config/' + 'CarDataCon' + 'fig'), _0x52630b = _0x36bf4c('../BGame/B' + 'Game'), _0x17ac1d = _0x36bf4c('../utils/M' + 'athUtil'), _0x116ceb = _0x36bf4c('../BGame/l' + 'ib/BLocalS' + 'torage'), _0x471d27 = function () {
                    function _0x3c83c4() {
                    }
                    return _0x3c83c4['init'] = function () {
                        var _0x33af93 = {};
                        return _0x33af93;
                    }, _0x3c83c4['importData'] = function (_0x2627de) {
                        var _0x1aa3a1 = this;
                        _0x52630b['default']['getStorage']()['readData']('IsGetSign', !0x1, function (_0x15fd86) {
                            _0x1aa3a1['IsGetSign'] = _0x15fd86['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('SigeDays', 0x1, function (_0x42a43b) {
                            _0x1aa3a1['SigeDays'] = _0x42a43b['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('UserShowCa' + 'r', 0x1, function (_0x1f08ff) {
                            _0x1aa3a1['UserShowCa' + 'r'] = _0x1f08ff['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('GoldNum', _0x1a057b['default']['defaultgol' + 'd'], function (_0x1796ab) {
                            _0x1aa3a1['GoldNum'] = _0x1796ab['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('UserLevel', 0x1, function (_0x284ce0) {
                            _0x1aa3a1['UserLevel'] = _0x284ce0['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('todayfreeg' + 'oldmax', _0x1a057b['default']['todayfreeg' + 'oldmax'], function (_0x138687) {
                            _0x1aa3a1['todayfreeg' + 'oldmax'] = _0x138687['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('todaygoldb' + 'agmax', _0x1a057b['default']['todaygoldb' + 'agmax'], function (_0x8076dc) {
                            _0x1aa3a1['todaygoldb' + 'agmax'] = _0x8076dc['data'];
                        }['bind'](this)), _0x52630b['default']['getStorage']()['readData']('todayfreep' + 'owermax', _0x1a057b['default']['todayfreep' + 'owermax'], function (_0x284e08) {
                            _0x1aa3a1['todayfreep' + 'owermax'] = _0x284e08['data'];
                        }['bind'](this));
                        var _0x2d0dc5 = [{
                                'id': 0x1,
                                'star_1': !0x1,
                                'star_2': !0x1,
                                'star_3': !0x1
                            }];
                        _0x52630b['default']['getStorage']()['readData']('CustomsDat' + 'a', JSON['stringify'](_0x2d0dc5), function (_0x34353c) {
                            _0x1aa3a1['CustomsDat' + 'a'] = JSON['parse'](_0x34353c['data']);
                        }['bind'](this));
                        var _0x5aa0d8 = [0x1];
                        _0x52630b['default']['getStorage']()['readData']('UserHaveCa' + 'rArr', JSON['stringify'](_0x5aa0d8), function (_0x318553) {
                            _0x1aa3a1['UserHaveCa' + 'rArr'] = JSON['parse'](_0x318553['data']);
                        }['bind'](this));
                        var _0x58b1b2 = {};
                        _0x52630b['default']['getStorage']()['readData']('GetCarSeve' + 'ral', JSON['stringify'](_0x58b1b2), function (_0x554496) {
                            _0x1aa3a1['GetCarSeve' + 'ral'] = JSON['parse'](_0x554496['data']);
                        }['bind'](this)), _0x52630b['default']['getStorage']()['registerCa' + 'llback'](function () {
                            _0x3c83c4['stampData']();
                        }['bind'](this));
                    }, _0x3c83c4['exportData'] = function () {
                        var _0x31df17 = {};
                        return _0x31df17['userMotoAr' + 'r'] = this['UserHaveCa' + 'rArr'], _0x31df17['userShowMo' + 'to'] = this['UserShowCa' + 'r'], _0x31df17;
                    }, _0x3c83c4['stampData'] = function () {
                        var _0x154d9 = _0x17ac1d['default']['getTimesta' + 'mp']();
                        _0x116ceb['default']['saveData']('stamp', _0x154d9);
                    }, _0x3c83c4['readStamp'] = function () {
                        return _0x116ceb['default']['readData']('stamp', Date['now']());
                    }, _0x3c83c4['addGold'] = function (_0x34511f) {
                        this['setGoldNum'](this['GoldNum'] + _0x34511f);
                    }, _0x3c83c4['setGoldNum'] = function (_0x3f81d1) {
                        this['GoldNum'] = _0x3f81d1, _0x52630b['default']['getStorage']()['saveData']('GoldNum', this['GoldNum']);
                    }, _0x3c83c4['setUserLev' + 'el'] = function () {
                        this['UserLevel']++, _0x52630b['default']['getStorage']()['saveData']('UserLevel', this['UserLevel']);
                    }, _0x3c83c4['addTodayfr' + 'eegoldmax'] = function (_0x32cfc2) {
                        this['setTodayfr' + 'eegoldmax'](this['todayfreeg' + 'oldmax'] + _0x32cfc2);
                    }, _0x3c83c4['setTodayfr' + 'eegoldmax'] = function (_0x2085f4) {
                        this['todayfreeg' + 'oldmax'] = _0x2085f4, _0x52630b['default']['getStorage']()['saveData']('todayfreeg' + 'oldmax', this['todayfreeg' + 'oldmax']);
                    }, _0x3c83c4['addTodaygo' + 'ldbagmax'] = function (_0x30c439) {
                        this['setTodaygo' + 'ldbagmax'](this['todaygoldb' + 'agmax'] + _0x30c439);
                    }, _0x3c83c4['setTodaygo' + 'ldbagmax'] = function (_0x4c3d1e) {
                        this['todaygoldb' + 'agmax'] = _0x4c3d1e, _0x52630b['default']['getStorage']()['saveData']('todaygoldb' + 'agmax', this['todaygoldb' + 'agmax']);
                    }, _0x3c83c4['setIsGetSi' + 'gn'] = function (_0x36de38) {
                        this['IsGetSign'] = _0x36de38, _0x52630b['default']['getStorage']()['saveData']('IsGetSign', this['IsGetSign']);
                    }, _0x3c83c4['addSigeDay' + 's'] = function (_0x16024e) {
                        this['setSigeDay' + 's'](this['SigeDays'] + _0x16024e);
                    }, _0x3c83c4['setSigeDay' + 's'] = function (_0x52e5b9) {
                        this['SigeDays'] = _0x52e5b9, _0x52630b['default']['getStorage']()['saveData']('SigeDays', this['SigeDays']);
                    }, _0x3c83c4['addTodayfr' + 'eepowermax'] = function (_0x3b46c3) {
                        this['setTodayfr' + 'eepowermax'](this['todayfreep' + 'owermax'] + _0x3b46c3);
                    }, _0x3c83c4['setTodayfr' + 'eepowermax'] = function (_0x4f27cf) {
                        this['todayfreep' + 'owermax'] = _0x4f27cf, _0x52630b['default']['getStorage']()['saveData']('todayfreep' + 'owermax', this['todayfreep' + 'owermax']);
                    }, _0x3c83c4['setUseMoto' + 'Index'] = function (_0x855a67) {
                        this['UserShowCa' + 'r'] = _0x855a67, _0x52630b['default']['getStorage']()['saveData']('UserShowCa' + 'r', this['UserShowCa' + 'r']);
                    }, _0x3c83c4['setUserHav' + 'eCarArr'] = function (_0x530852) {
                        this['UserHaveCa' + 'rArr']['push'](_0x530852), _0x52630b['default']['getStorage']()['saveData']('UserHaveCa' + 'rArr', JSON['stringify'](this['UserHaveCa' + 'rArr']));
                    }, _0x3c83c4['setGetCarS' + 'everal'] = function (_0x2d2cbb, _0x24da83) {
                        this['GetCarSeve' + 'ral'][_0x2d2cbb] = _0x24da83, _0x52630b['default']['getStorage']()['saveData']('GetCarSeve' + 'ral', JSON['stringify'](this['GetCarSeve' + 'ral']));
                    }, _0x3c83c4['getGetCarS' + 'everal'] = function (_0x22dc6b) {
                        return this['GetCarSeve' + 'ral'][_0x22dc6b] || this['setGetCarS' + 'everal'](_0x22dc6b, 0x0), this['GetCarSeve' + 'ral'][_0x22dc6b];
                    }, _0x3c83c4['setCustoms' + 'Data'] = function (_0x4f2184) {
                        this['CustomsDat' + 'a'][_0x4f2184['id'] - 0x1] = _0x4f2184, _0x52630b['default']['getStorage']()['saveData']('CustomsDat' + 'a', JSON['stringify'](this['CustomsDat' + 'a'])), _0x52630b['default']['getStorage']()['saveData']('level', this['CustomsDat' + 'a']['length']);
                    }, _0x3c83c4['addCustoms' + 'Data'] = function (_0x2d816e) {
                        this['CustomsDat' + 'a']['push'](_0x2d816e), _0x52630b['default']['getStorage']()['saveData']('CustomsDat' + 'a', JSON['stringify'](this['CustomsDat' + 'a'])), _0x52630b['default']['getStorage']()['saveData']('level', this['CustomsDat' + 'a']['length']);
                    }, _0x3c83c4['CustomsDat' + 'a'] = [{
                            'id': 0x1,
                            'star_1': !0x1,
                            'star_2': !0x1,
                            'star_3': !0x1
                        }], _0x3c83c4['GoldNum'] = 0x0, _0x3c83c4['OffLineTim' + 'er'] = 0x1, _0x3c83c4['todayfreep' + 'owermax'] = _0x1a057b['default']['todayfreep' + 'owermax'], _0x3c83c4['UserHaveCa' + 'rArr'] = [], _0x3c83c4['UserShowCa' + 'r'] = 0x1, _0x3c83c4['UserLevel'] = 0x1, _0x3c83c4['todayfreeg' + 'oldmax'] = _0x1a057b['default']['todayfreeg' + 'oldmax'], _0x3c83c4['todaygoldb' + 'agmax'] = _0x1a057b['default']['todaygoldb' + 'agmax'], _0x3c83c4['IsGetSign'] = !0x1, _0x3c83c4['SigeDays'] = 0x1, _0x3c83c4;
                }();
            _0xe82a49['default'] = _0x471d27;
        },
        {
            '../BGame/BGame': 0x3,
            '../BGame/lib/BLocalStorage': 0x10,
            '../config/CarDataConfig': 0x3b,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x40: [
        function (_0x53319, _0x35f4f2, _0x12a5e2) {
            'use strict';
            Object['defineProp' + 'erty'](_0x12a5e2, '__esModule', { 'value': !0x0 });
            var _0x19e154 = _0x53319('../config/' + 'CarDataCon' + 'fig'), _0x30e62e = _0x53319('../manager' + '/EventMana' + 'ger'), _0x2e5323 = _0x53319('../constan' + 't/enums'), _0x2f53cc = _0x53319('../BGame/l' + 'ib/BLocalS' + 'torage'), _0x18d97a = function () {
                    function _0x23be06() {
                        this['energy'] = 0x0, this['energyMax'] = 0x5, this['recoverynu' + 'm'] = 0x1, this['defaultEne' + 'rgy'] = 0x5, this['energyCDMa' + 'x'] = 0x1b7740, this['settleTime'] = 0x0;
                    }
                    return Object['defineProp' + 'erty'](_0x23be06, 'I', {
                        'get': function () {
                            return _0x23be06['instance'] = _0x23be06['instance'] || new _0x23be06();
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x23be06['prototype']['init'] = function () {
                        this['setDefault' + 'Num'](_0x19e154['default']['defaultpow' + 'er']), this['setCDMax'](0x3e8 * _0x19e154['default']['powerrecov' + 'erytime']), this['setMax'](_0x19e154['default']['powermax']), this['readTime'](), this['readEnergy'](), this['settle']();
                    }, _0x23be06['prototype']['getNum'] = function () {
                        return this['settle'](), this['energy'];
                    }, _0x23be06['prototype']['add'] = function (_0x38f2ba) {
                        this['getNum']() >= this['getMax']() && this['saveTime'](Date['now']()), this['settle'](), this['setNum'](this['getNum']() + _0x38f2ba);
                    }, _0x23be06['prototype']['setMax'] = function (_0xae9300) {
                        this['energyMax'] = _0xae9300;
                    }, _0x23be06['prototype']['getMax'] = function () {
                        return this['energyMax'];
                    }, _0x23be06['prototype']['setCDMax'] = function (_0x2f0e16) {
                        this['energyCDMa' + 'x'] = _0x2f0e16;
                    }, _0x23be06['prototype']['setRecover' + 'yNum'] = function (_0x4c8071) {
                        this['recoverynu' + 'm'] = _0x4c8071;
                    }, _0x23be06['prototype']['setDefault' + 'Num'] = function (_0x13e394) {
                        this['defaultEne' + 'rgy'] = _0x13e394;
                    }, _0x23be06['prototype']['getCDMax'] = function () {
                        return this['energyCDMa' + 'x'];
                    }, _0x23be06['prototype']['getCD'] = function () {
                        if (this['getNum']() >= this['getMax']())
                            return 0x0;
                        this['settle']();
                        var _0x1ef7d8 = Date['now']();
                        return this['energyCDMa' + 'x'] - (_0x1ef7d8 - this['settleTime']);
                    }, _0x23be06['prototype']['getFullTim' + 'e'] = function () {
                        this['settle']();
                        var _0xbcc25e = this['getMax']() - this['getNum']();
                        return 0x0 >= _0xbcc25e ? 0x0 : _0xbcc25e * this['getCDMax']();
                    }, _0x23be06['prototype']['isEnergy'] = function (_0x541aca) {
                        return _0x541aca || (_0x541aca = 0x1), this['getNum']() < _0x541aca ? !0x1 : !0x0;
                    }, _0x23be06['prototype']['isEnergyMa' + 'x'] = function () {
                        return this['getNum']() >= this['getMax']() ? !0x0 : !0x1;
                    }, _0x23be06['prototype']['setNum'] = function (_0x3d196b) {
                        this['energy'] = _0x3d196b, _0x2f53cc['default']['saveData']('energyNum', this['energy']), _0x30e62e['default']['getInstanc' + 'e']()['emit'](_0x2e5323['GameEvent']['updataGold'], null);
                    }, _0x23be06['prototype']['readEnergy'] = function () {
                        var _0xf7c915 = _0x2f53cc['default']['readData']('energyNum', this['defaultEne' + 'rgy']);
                        _0xf7c915 && (this['energy'] = +_0xf7c915);
                    }, _0x23be06['prototype']['saveTime'] = function (_0x54741e) {
                        this['settleTime'] = _0x54741e, _0x2f53cc['default']['saveData']('energyTime', this['settleTime']);
                    }, _0x23be06['prototype']['readTime'] = function () {
                        var _0x3b967a = _0x2f53cc['default']['readData']('energyTime', 0x0);
                        return this['settleTime'] = +_0x3b967a, this['settleTime'];
                    }, _0x23be06['prototype']['settle'] = function () {
                        var _0x5b41f8 = this['getMax']() - this['energy'];
                        if (!(0x0 >= _0x5b41f8)) {
                            var _0x5d7665 = Date['now'](), _0x26d2ba = this['readTime']();
                            if (!(_0x5d7665 - _0x26d2ba < this['getCDMax']())) {
                                var _0x4a9fe1 = _0x5d7665 - _0x26d2ba, _0x457842 = Math['floor'](_0x4a9fe1 / this['getCDMax']());
                                this['saveTime'](_0x5d7665 - (_0x4a9fe1 - _0x457842 * this['getCDMax']()));
                                var _0x2b1865 = _0x457842 > _0x5b41f8 ? _0x5b41f8 : _0x457842;
                                _0x2b1865 *= this['recoverynu' + 'm'], this['setNum'](this['energy'] + _0x2b1865);
                            }
                        }
                    }, _0x23be06['instance'] = null, _0x23be06;
                }();
            _0x12a5e2['default'] = _0x18d97a;
        },
        {
            '../BGame/lib/BLocalStorage': 0x10,
            '../config/CarDataConfig': 0x3b,
            '../constant/enums': 0x3d,
            '../manager/EventManager': 0x4b
        }
    ],
    0x41: [
        function (_0x196020, _0x1ee62b, _0x451705) {
            'use strict';
            Object['defineProp' + 'erty'](_0x451705, '__esModule', { 'value': !0x0 });
            var _0x19ee18 = _0x196020('../config/' + 'CarDataCon' + 'fig'), _0x4ebb19 = _0x196020('../utils/U' + 'tils3d'), _0x36e387 = function () {
                    function _0x139c49() {
                        this['BarrierCar' + 'All'] = null, this['BarrierCar'] = null, this['_trackType'] = 0x1, this['barrierCar' + 'FL'] = null, this['barrierCar' + 'FR'] = null, this['barrierCar' + 'RL'] = null, this['barrierCar' + 'RR'] = null, this['BarrierCar' + 'RotateSpee' + 'd'] = 0x0, this['BarrierCar' + 'MoveSpeed'] = 0x0, this['rotateSpee' + 'd'] = 0x9c4;
                    }
                    return _0x139c49['Create'] = function (_0x43db89, _0x54582b, _0x2af90c, _0x3b1aa6) {
                        var _0x2bc222 = new _0x139c49();
                        return _0x2bc222['BarrierCar' + 'All'] = _0x54582b, _0x2bc222['_trackType'] = _0x2af90c, _0x2bc222['BarrierCar'] = _0x2bc222['BarrierCar' + 'All']['getChildAt'](0x0)['getChildAt'](0x0), _0x2bc222['barrierCar' + 'FL'] = _0x2bc222['BarrierCar']['getChildBy' + 'Name']('Wheel_Fron' + 't_L'), 0xc >= _0x43db89 && (_0x2bc222['barrierCar' + 'FR'] = _0x2bc222['BarrierCar']['getChildBy' + 'Name']('Wheel_Fron' + 't_R')), _0x2bc222['barrierCar' + 'RL'] = _0x2bc222['BarrierCar']['getChildBy' + 'Name']('Wheel_Rear' + '_L'), 0xc >= _0x43db89 && (_0x2bc222['barrierCar' + 'RR'] = _0x2bc222['BarrierCar']['getChildBy' + 'Name']('Wheel_Rear' + '_R')), _0x2bc222['_init'](_0x3b1aa6), _0x2bc222;
                    }, _0x139c49['prototype']['_init'] = function (_0x5ce4aa) {
                        switch (this['_trackType']) {
                        case 0x1:
                            this['BarrierCar' + 'All']['transform']['localPosit' + 'ionX'] = _0x19ee18['default']['oneTrackDi' + 's'], this['BarrierCar' + 'All']['transform']['localPosit' + 'ionZ'] = 5.5, this['BarrierCar' + 'RotateSpee' + 'd'] = _0x5ce4aa['onelanespe' + 'ed'];
                            break;
                        case 0x2:
                            this['BarrierCar' + 'All']['transform']['localPosit' + 'ionX'] = _0x19ee18['default']['twoTrackDi' + 's'], this['BarrierCar' + 'All']['transform']['localPosit' + 'ionZ'] = 1.57, this['BarrierCar' + 'RotateSpee' + 'd'] = _0x5ce4aa['twolanespe' + 'ed'];
                            break;
                        case 0x3:
                            this['BarrierCar' + 'All']['transform']['localPosit' + 'ionX'] = _0x19ee18['default']['threeTrack' + 'Dis'], this['BarrierCar' + 'All']['transform']['localPosit' + 'ionZ'] = -1.57, this['BarrierCar' + 'RotateSpee' + 'd'] = _0x5ce4aa['shreelanes' + 'peed'];
                            break;
                        case 0x4:
                            this['BarrierCar' + 'All']['transform']['localPosit' + 'ionX'] = _0x19ee18['default']['fourTrackD' + 'is'], this['BarrierCar' + 'All']['transform']['localPosit' + 'ionZ'] = -5.5, this['BarrierCar' + 'RotateSpee' + 'd'] = _0x5ce4aa['fourlanesp' + 'eed'];
                        }
                        this['BarrierCar' + 'MoveSpeed'] = _0x4ebb19['default']['changeSpee' + 'd'](this['BarrierCar' + 'RotateSpee' + 'd']);
                    }, _0x139c49['prototype']['updata'] = function () {
                        this['BarrierCar' + 'All']['transform']['translate'](new Laya['Vector3'](this['BarrierCar' + 'MoveSpeed'], 0x0, 0x0)), this['barrierCar' + 'FL'] && this['barrierCar' + 'FL']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['BarrierCar' + 'RotateSpee' + 'd'] / this['rotateSpee' + 'd'])), this['barrierCar' + 'FR'] && this['barrierCar' + 'FR']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['BarrierCar' + 'RotateSpee' + 'd'] / this['rotateSpee' + 'd'])), this['barrierCar' + 'RL'] && this['barrierCar' + 'RL']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['BarrierCar' + 'RotateSpee' + 'd'] / this['rotateSpee' + 'd'])), this['barrierCar' + 'RR'] && this['barrierCar' + 'RR']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['BarrierCar' + 'RotateSpee' + 'd'] / this['rotateSpee' + 'd']));
                    }, _0x139c49['prototype']['removeSelf'] = function () {
                        this['BarrierCar' + 'All'] && (this['BarrierCar' + 'All']['removeSelf'](), this['BarrierCar' + 'All'] = null);
                    }, _0x139c49;
                }();
            _0x451705['default'] = _0x36e387;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../utils/Utils3d': 0x5d
        }
    ],
    0x42: [
        function (_0x3facfd, _0x4db0ea, _0x5d0cdd) {
            'use strict';
            var _0x5a3849 = this && this['__extends'] || function () {
                var _0x3eb1c7 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x14d81a, _0x1b3dd0) {
                    _0x14d81a['__proto__'] = _0x1b3dd0;
                } || function (_0x499a8a, _0x2c8a32) {
                    for (var _0x19eba6 in _0x2c8a32)
                        _0x2c8a32['hasOwnProp' + 'erty'](_0x19eba6) && (_0x499a8a[_0x19eba6] = _0x2c8a32[_0x19eba6]);
                };
                return function (_0x3a53d8, _0x105dc3) {
                    function _0x5bf14d() {
                        this['constructo' + 'r'] = _0x3a53d8;
                    }
                    _0x3eb1c7(_0x3a53d8, _0x105dc3), _0x3a53d8['prototype'] = null === _0x105dc3 ? Object['create'](_0x105dc3) : (_0x5bf14d['prototype'] = _0x105dc3['prototype'], new _0x5bf14d());
                };
            }();
            Object['defineProp' + 'erty'](_0x5d0cdd, '__esModule', { 'value': !0x0 });
            var _0x52a293 = _0x3facfd('../manager' + '/EventMana' + 'ger'), _0x208c2d = _0x3facfd('../constan' + 't/enums'), _0x5ab2ca = function (_0x22d882) {
                    function _0x302b0e() {
                        var _0x3d1f3a = _0x22d882['call'](this) || this;
                        return _0x3d1f3a['isBarrierC' + 'ar'] = !0x1, _0x3d1f3a['isNitrogen'] = !0x1, _0x3d1f3a['nitrogem_t' + 'ype'] = _0x208c2d['Nitrogen_t' + 'ype']['Blue'], _0x3d1f3a;
                    }
                    return _0x5a3849(_0x302b0e, _0x22d882), _0x302b0e['prototype']['onTriggerE' + 'nter'] = function (_0x396733) {
                        console['log']('A');
                    }, _0x302b0e['prototype']['onTriggerS' + 'tay'] = function (_0xb7dbbc) {
                    }, _0x302b0e['prototype']['onTriggerE' + 'xit'] = function (_0x9a7ba5) {
                    }, _0x302b0e['prototype']['onCollisio' + 'nEnter'] = function (_0x31d628) {
                        _0x31d628['other']['owner'] == this['userCar'] && (this['isBarrierC' + 'ar'] ? _0x31d628['_colliderA']['owner'] == this['userCar'] ? _0x52a293['default']['getInstanc' + 'e']()['emit'](_0x208c2d['GameEvent']['barrierCar'], _0x31d628['_colliderB']['owner']) : _0x31d628['_colliderB']['owner'] == this['userCar'] && _0x52a293['default']['getInstanc' + 'e']()['emit'](_0x208c2d['GameEvent']['barrierCar'], _0x31d628['_colliderA']['owner']) : this['isNitrogen'] ? this['nitrogem_t' + 'ype'] == _0x208c2d['Nitrogen_t' + 'ype']['Blue'] ? _0x52a293['default']['getInstanc' + 'e']()['emit'](_0x208c2d['GameEvent']['isNitrogen'], _0x208c2d['Nitrogen_t' + 'ype']['Blue']) : _0x52a293['default']['getInstanc' + 'e']()['emit'](_0x208c2d['GameEvent']['isNitrogen'], _0x208c2d['Nitrogen_t' + 'ype']['Yellow']) : _0x52a293['default']['getInstanc' + 'e']()['emit'](_0x208c2d['GameEvent']['leftAndRig' + 'ht'], null));
                    }, _0x302b0e['prototype']['onCollisio' + 'nStay'] = function (_0x50ea7f) {
                    }, _0x302b0e['prototype']['onCollisio' + 'nExit'] = function (_0x49429f) {
                    }, _0x302b0e;
                }(Laya['Script3D']);
            _0x5d0cdd['Collision'] = _0x5ab2ca;
        },
        {
            '../constant/enums': 0x3d,
            '../manager/EventManager': 0x4b
        }
    ],
    0x43: [
        function (_0x42c208, _0x9f5015, _0x3378b1) {
            'use strict';
            var _0x4cf99f = this && this['__extends'] || function () {
                var _0x594db0 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x394ed3, _0x1d0d39) {
                    _0x394ed3['__proto__'] = _0x1d0d39;
                } || function (_0xdcd6f4, _0x4fd030) {
                    for (var _0x303b84 in _0x4fd030)
                        _0x4fd030['hasOwnProp' + 'erty'](_0x303b84) && (_0xdcd6f4[_0x303b84] = _0x4fd030[_0x303b84]);
                };
                return function (_0x3b90c9, _0x41830a) {
                    function _0x476552() {
                        this['constructo' + 'r'] = _0x3b90c9;
                    }
                    _0x594db0(_0x3b90c9, _0x41830a), _0x3b90c9['prototype'] = null === _0x41830a ? Object['create'](_0x41830a) : (_0x476552['prototype'] = _0x41830a['prototype'], new _0x476552());
                };
            }();
            Object['defineProp' + 'erty'](_0x3378b1, '__esModule', { 'value': !0x0 });
            var _0x1e720f = _0x42c208('../config/' + 'CarDataCon' + 'fig'), _0x1f0b34 = _0x42c208('../config/' + 'Config'), _0x59a848 = function (_0x3316e4) {
                    function _0x532e9a() {
                        var _0x108734 = _0x3316e4['call'](this) || this;
                        return _0x108734['AllCustoms'] = null, _0x108734['trackArr'] = null, _0x108734['destinatio' + 'n'] = null, _0x108734;
                    }
                    return _0x4cf99f(_0x532e9a, _0x3316e4), _0x532e9a['create'] = function (_0x3d8c20) {
                        var _0xa69a19 = new _0x532e9a();
                        return _0xa69a19['AllCustoms'] = _0x3d8c20, _0xa69a19['trackArr'] = _0xa69a19['AllCustoms']['getChildAt'](0x0)['getChildAt'](0x0), _0xa69a19['destinatio' + 'n'] = _0xa69a19['AllCustoms']['getChildAt'](0x0)['getChildAt'](0x1), _0xa69a19['initTrack'](), _0xa69a19;
                    }, _0x532e9a['prototype']['initTrack'] = function () {
                        if (this['trackArr'] && this['destinatio' + 'n']) {
                            this['trackArr']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0);
                            for (var _0x1a18ef = 0x0; _0x1a18ef < this['trackArr']['numChildre' + 'n']; _0x1a18ef++) {
                                var _0x1b434e = _0x1a18ef + 0x1;
                                _0x1b434e >= this['trackArr']['numChildre' + 'n'] && (_0x1b434e = 0x0);
                                var _0x2d4a04 = this['trackArr']['getChildAt'](_0x1a18ef);
                                _0x2d4a04['transform']['position'] = new Laya['Vector3'](_0x1e720f['default']['trackAddLo' + 'ngX'], 0x0, 0x0), _0x1e720f['default']['trackAddLo' + 'ngX'] += _0x1f0b34['default']['roadTypeDi' + 's'][_0x1e720f['default']['roadType']][_0x1a18ef] / 0x2 + _0x1f0b34['default']['roadTypeDi' + 's'][_0x1e720f['default']['roadType']][_0x1b434e] / 0x2;
                            }
                            _0x1e720f['default']['destinatio' + 'nDis'] > 0x0 ? this['destinatio' + 'n']['transform']['position'] = new Laya['Vector3'](_0x1e720f['default']['destinatio' + 'nDis'], 0x0, 0x0) : this['destinatio' + 'n']['active'] = !0x1;
                        }
                    }, _0x532e9a['prototype']['removeSelf'] = function () {
                        this['AllCustoms'] && this['AllCustoms']['removeSelf'](), this['AllCustoms'] = null, this['trackArr'] = null, this['destinatio' + 'n'] = null, _0x1e720f['default']['trackAddLo' + 'ngX'] = 0x0;
                    }, _0x532e9a;
                }(Laya['Script3D']);
            _0x3378b1['default'] = _0x59a848;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c
        }
    ],
    0x44: [
        function (_0x1d324b, _0x5d2419, _0xb89228) {
            'use strict';
            var _0x5d7804 = this && this['__extends'] || function () {
                var _0x40591b = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x4886c9, _0x21b6ee) {
                    _0x4886c9['__proto__'] = _0x21b6ee;
                } || function (_0x431ea2, _0x4ffdc5) {
                    for (var _0x13a169 in _0x4ffdc5)
                        _0x4ffdc5['hasOwnProp' + 'erty'](_0x13a169) && (_0x431ea2[_0x13a169] = _0x4ffdc5[_0x13a169]);
                };
                return function (_0x2fe6cc, _0x3142ae) {
                    function _0xf12487() {
                        this['constructo' + 'r'] = _0x2fe6cc;
                    }
                    _0x40591b(_0x2fe6cc, _0x3142ae), _0x2fe6cc['prototype'] = null === _0x3142ae ? Object['create'](_0x3142ae) : (_0xf12487['prototype'] = _0x3142ae['prototype'], new _0xf12487());
                };
            }();
            Object['defineProp' + 'erty'](_0xb89228, '__esModule', { 'value': !0x0 });
            var _0x5a586a = _0x1d324b('../config/' + 'CarDataCon' + 'fig'), _0x57b002 = _0x1d324b('./CustomsC' + 'ontrol'), _0x50b758 = _0x1d324b('../config/' + 'Config'), _0x4dc690 = _0x1d324b('./UserCarC' + 'ontrol'), _0x3026e0 = _0x1d324b('../data/Ro' + 'leInfo'), _0xf35b96 = _0x1d324b('../constan' + 't/enums'), _0xb86323 = _0x1d324b('../utils/M' + 'athUtil'), _0x41a885 = _0x1d324b('./BarrierC' + 'arControl'), _0x10658a = _0x1d324b('./Collisio' + 'n'), _0xa3f178 = _0x1d324b('./Nitrogen' + 'Control'), _0x3535e9 = _0x1d324b('../manager' + '/SoundMana' + 'ger'), _0x443770 = _0x1d324b('./RivalCar' + 'Control'), _0x2111f9 = _0x1d324b('../manager' + '/UIManager'), _0x361b94 = _0x1d324b('../compone' + 'nts/Collde' + 'rPanel'), _0x1a32ac = _0x1d324b('../manager' + '/EventMana' + 'ger'), _0x48fb7a = function (_0x38114b) {
                    function _0x40ad10() {
                        var _0x253847 = _0x38114b['call'](this) || this;
                        return _0x253847['gameScene'] = null, _0x253847['gameCustom' + 's'] = null, _0x253847['userCar'] = null, _0x253847['gameCarInd' + 'ex'] = 0x1, _0x253847['ribbon'] = null, _0x253847['isLoadCar'] = !0x1, _0x253847['isLoadCust' + 'oms'] = !0x1, _0x253847['track'] = null, _0x253847['destinatio' + 'n'] = null, _0x253847['destinatio' + 'nParticle1'] = null, _0x253847['destinatio' + 'nParticle2'] = null, _0x253847['SkyBox'] = null, _0x253847['isCollisio' + 'n'] = !0x1, _0x253847['isOverGame'] = !0x1, _0x253847['BarrierCar' + 'Arr'] = [], _0x253847['NitrogenAr' + 'r'] = [], _0x253847['collserCar' + 'PosX'] = 0x0, _0x253847['collserCar' + 'PosZ'] = 0x0, _0x253847['isPause'] = !0x1, _0x253847['RivalCarAr' + 'r'] = [], _0x253847['firstInto'] = !0x0, _0x253847['onShow'] = null, _0x253847['onHide'] = null, _0x253847['isAndroid'] = -0x1, _0x253847['borderIstr' + 'ue'] = !0x1, _0x253847['transX'] = 0x0, _0x253847['zheng'] = 0x1, _0x253847['fu'] = 0x1, _0x253847['chaseRanki' + 'ng'] = 0x0, _0x253847['_moveType'] = _0xf35b96['ShaChe']['up'], _0x253847['danqiAddSp' + 'eed'] = 0x0, _0x253847['isOneColli' + 'sion'] = !0x1, _0x253847['flickerNum'] = 0x0, _0x253847;
                    }
                    return _0x5d7804(_0x40ad10, _0x38114b), _0x40ad10['prototype']['LoadGameSc' + 'ene'] = function () {
                        return this['gameScene'] = Laya['loader']['getRes'](_0x50b758['default']['Res3D']['GameScene']), this['ribbon'] = this['gameScene']['getChildBy' + 'Name']('effect')['getChildBy' + 'Name']('ribbon'), this['destinatio' + 'nParticle1'] = this['ribbon']['getChildAt'](0x0), this['destinatio' + 'nParticle2'] = this['ribbon']['getChildAt'](0x1), this['destinatio' + 'nParticle1']['particleSy' + 'stem']['play'](), this['destinatio' + 'nParticle2']['particleSy' + 'stem']['play'](), this['destinatio' + 'nParticle1']['active'] = !0x1, this['destinatio' + 'nParticle2']['active'] = !0x1, this['gameScene'];
                    }, _0x40ad10['prototype']['starGame'] = function () {
                        this['init'](), this['LoadTrack'](), this['LoadUserCa' + 'r'](), 0x1 == _0x5a586a['default']['checkpoint' + 'type'] ? this['BarrierAnd' + 'NitrogenMa' + 'g'](!0x0) : 0x4 == _0x5a586a['default']['checkpoint' + 'type'] && this['LoadRivalC' + 'ar']();
                    }, _0x40ad10['prototype']['init'] = function () {
                        this['isLoadCar'] = !0x1, this['isLoadCust' + 'oms'] = !0x1, this['danqiAddSp' + 'eed'] = 0x0, this['isCollisio' + 'n'] = !0x1, this['_moveType'] = _0xf35b96['ShaChe']['up'], this['isOverGame'] = !0x1, this['isPause'] = !0x1, this['firstInto'] = !0x0, this['gameCarInd' + 'ex'] = _0x3026e0['default']['UserShowCa' + 'r'];
                    }, _0x40ad10['prototype']['LoadRivalC' + 'ar'] = function () {
                        for (var _0x18040a = this, _0x15207a = _0x5a586a['default']['config_lev' + 'el'][_0x5a586a['default']['cumtosNum'] - 0x1], _0x80ccc9 = _0xb86323['default']['parseStrin' + 'g'](_0x15207a['enemycarid']), _0x58ca8a = _0xb86323['default']['parseStrin' + 'g'](_0x15207a['enemycarsp' + 'eed']), _0x2e00a9 = _0xb86323['default']['getRandomA' + 'rr'](0x1, 0x4, 0x4), _0x4a95b2 = function (_0x337c9e) {
                                    Laya['Scene3D']['load'](_0x50b758['default']['RivalCar'] + _0x80ccc9[_0x337c9e] + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), Laya['Handler']['create'](_0x566ceb, function (_0xf67ce6) {
                                        var _0x36422f = Laya['MeshSprite' + '3D']['instantiat' + 'e'](_0xf67ce6, _0x18040a['gameScene'], !0x0), _0x4b5507 = _0x443770['default']['create'](_0x36422f, _0x2e00a9[_0x337c9e], _0x58ca8a[_0x337c9e]);
                                        {
                                            var _0x2bba52 = _0x4b5507['rivalColli' + 'sion']['addCompone' + 'nt'](_0x10658a['Collision']);
                                            _0x2bba52['userCar'] = _0x18040a['userCar']['userCar'], _0x2bba52['isBarrierC' + 'ar'] = !0x0;
                                        }
                                        _0x18040a['RivalCarAr' + 'r']['push'](_0x4b5507);
                                    }));
                                }, _0x566ceb = this, _0x18efbc = 0x0; _0x18efbc < _0x2e00a9['length']; _0x18efbc++)
                            _0x4a95b2(_0x18efbc);
                        _0x5a586a['default']['RivalCarNu' + 'm'] = _0x2e00a9['length'] + 0x1;
                    }, _0x40ad10['prototype']['BarrierAnd' + 'NitrogenMa' + 'g'] = function (_0x48fefe) {
                        if (void 0x0 === _0x48fefe && (_0x48fefe = !0x1), this['userCar'] || !this['firstInto']) {
                            var _0x4076dc = _0x5a586a['default']['config_lev' + 'el'][_0x5a586a['default']['cumtosNum'] - 0x1];
                            if (_0x5a586a['default']['oneTrackDi' + 's'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x3f16f5 = [];
                                _0x3f16f5 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['onelanespa' + 'ce']), this['LoadBarrie' + 'rCarItem'](_0x4076dc, 0x1), _0x5a586a['default']['oneTrackDi' + 's'] += _0xb86323['default']['getRandomA' + 'rr'](_0x3f16f5[0x0], _0x3f16f5[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['twoTrackDi' + 's'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x664a9d = [];
                                _0x664a9d = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['twolanespa' + 'ce']), this['LoadBarrie' + 'rCarItem'](_0x4076dc, 0x2), _0x5a586a['default']['twoTrackDi' + 's'] += _0xb86323['default']['getRandomA' + 'rr'](_0x664a9d[0x0], _0x664a9d[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['threeTrack' + 'Dis'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x43596c = [];
                                _0x43596c = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['shreelanes' + 'pace']), this['LoadBarrie' + 'rCarItem'](_0x4076dc, 0x3), _0x5a586a['default']['threeTrack' + 'Dis'] += _0xb86323['default']['getRandomA' + 'rr'](_0x43596c[0x0], _0x43596c[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['fourTrackD' + 'is'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x4a7ba1 = [];
                                _0x4a7ba1 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['fourlanesp' + 'ace']), this['LoadBarrie' + 'rCarItem'](_0x4076dc, 0x4), _0x5a586a['default']['fourTrackD' + 'is'] += _0xb86323['default']['getRandomA' + 'rr'](_0x4a7ba1[0x0], _0x4a7ba1[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['oneNitroge' + 'nDis'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x4a7ba1 = [];
                                _0x4a7ba1 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['fourlanesp' + 'ace']), this['LoadNitrog' + 'en'](0x1), _0x5a586a['default']['oneNitroge' + 'nDis'] += _0xb86323['default']['getRandomA' + 'rr'](_0x4a7ba1[0x0], _0x4a7ba1[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['twoNitroge' + 'nDis'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x4a7ba1 = [];
                                _0x4a7ba1 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['fourlanesp' + 'ace']), this['LoadNitrog' + 'en'](0x2), _0x5a586a['default']['twoNitroge' + 'nDis'] += _0xb86323['default']['getRandomA' + 'rr'](_0x4a7ba1[0x0], _0x4a7ba1[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['threeNitro' + 'genDis'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x4a7ba1 = [];
                                _0x4a7ba1 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['fourlanesp' + 'ace']), this['LoadNitrog' + 'en'](0x3), _0x5a586a['default']['threeNitro' + 'genDis'] += _0xb86323['default']['getRandomA' + 'rr'](_0x4a7ba1[0x0], _0x4a7ba1[0x1], 0x1)[0x0];
                            }
                            if (_0x5a586a['default']['fourNitrog' + 'enDis'] < _0x5a586a['default']['farthestCa' + 'rDis'] + this['userCar']['car']['transform']['localPosit' + 'ionX']) {
                                var _0x4a7ba1 = [];
                                _0x4a7ba1 = _0xb86323['default']['parseStrin' + 'g'](_0x4076dc['fourlanesp' + 'ace']), this['LoadNitrog' + 'en'](0x4), _0x5a586a['default']['fourNitrog' + 'enDis'] += _0xb86323['default']['getRandomA' + 'rr'](_0x4a7ba1[0x0], _0x4a7ba1[0x1], 0x1)[0x0];
                            }
                            this['firstInto'] = !0x1;
                        }
                    }, _0x40ad10['prototype']['LoadBarrie' + 'rCarItem'] = function (_0x299df5, _0x153ad3) {
                        var _0x5d6883 = this, _0x10cec2 = 0x2, _0x26b555 = [];
                        switch (_0x153ad3) {
                        case 0x1:
                            _0x26b555 = _0xb86323['default']['parseStrin' + 'g'](_0x299df5['onelaneid']), _0x10cec2 = _0x26b555[_0xb86323['default']['randomInSe' + 'ction'](0x0, _0x26b555['length'] - 0x1)];
                            break;
                        case 0x2:
                            _0x26b555 = _0xb86323['default']['parseStrin' + 'g'](_0x299df5['twolaneid']), _0x10cec2 = _0x26b555[_0xb86323['default']['randomInSe' + 'ction'](0x0, _0x26b555['length'] - 0x1)];
                            break;
                        case 0x3:
                            _0x26b555 = _0xb86323['default']['parseStrin' + 'g'](_0x299df5['shreelanei' + 'd']), _0x10cec2 = _0x26b555[_0xb86323['default']['randomInSe' + 'ction'](0x0, _0x26b555['length'] - 0x1)];
                            break;
                        case 0x4:
                            _0x26b555 = _0xb86323['default']['parseStrin' + 'g'](_0x299df5['fourlaneid']), _0x10cec2 = _0x26b555[_0xb86323['default']['randomInSe' + 'ction'](0x0, _0x26b555['length'] - 0x1)];
                        }
                        _0x10cec2 > 0x10 && (_0x10cec2 = 0x10), Laya['Scene3D']['load'](_0x50b758['default']['BarrierCar'] + _0x10cec2 + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), Laya['Handler']['create'](this, function (_0x1b855c) {
                            var _0x20e453 = Laya['MeshSprite' + '3D']['instantiat' + 'e'](_0x1b855c, _0x5d6883['gameScene'], !0x0), _0x2ec457 = _0x41a885['default']['Create'](_0x10cec2, _0x20e453, _0x153ad3, _0x299df5);
                            {
                                var _0x243b77 = _0x2ec457['BarrierCar']['addCompone' + 'nt'](_0x10658a['Collision']);
                                _0x243b77['userCar'] = _0x5d6883['userCar']['userCar'], _0x243b77['isBarrierC' + 'ar'] = !0x0;
                            }
                            _0x5d6883['BarrierCar' + 'Arr']['push'](_0x2ec457);
                        }));
                    }, _0x40ad10['prototype']['LoadSkyBox'] = function () {
                        var _0x28e15a = this;
                        Laya['Scene3D']['load'](_0x5a586a['default']['str_skyBox'], Laya['Handler']['create'](this, function (_0x3bc2f7) {
                            _0x28e15a['SkyBox'] = _0x3bc2f7, _0x28e15a['gameScene']['addChild'](_0x28e15a['SkyBox']), _0x28e15a['userCar']['car']['addChild'](_0x28e15a['SkyBox']);
                        }));
                    }, _0x40ad10['prototype']['LoadTrack'] = function () {
                        var _0x50601d = this;
                        Laya['Scene3D']['load'](_0x5a586a['default']['str_road'], Laya['Handler']['create'](this, function (_0x3aa297) {
                            _0x50601d['gameCustom' + 's'] = _0x57b002['default']['create'](_0x3aa297), _0x50601d['track'] = Laya['MeshSprite' + '3D']['instantiat' + 'e'](_0x50601d['gameCustom' + 's']['trackArr'], _0x50601d['gameScene']), _0x50601d['destinatio' + 'n'] = Laya['MeshSprite' + '3D']['instantiat' + 'e'](_0x50601d['gameCustom' + 's']['destinatio' + 'n'], _0x50601d['gameScene']), _0x50601d['isLoadCust' + 'oms'] = !0x0, _0x50601d['ribbon']['transform']['localPosit' + 'ionX'] = _0x50601d['gameCustom' + 's']['destinatio' + 'n']['transform']['localPosit' + 'ionX'], _0x50601d['LoadCarTra' + 'k']();
                        }));
                    }, _0x40ad10['prototype']['LoadUserCa' + 'r'] = function () {
                        var _0x7f7dce = this;
                        Laya['Scene3D']['load'](_0x5a586a['default']['str_gameCa' + 'r'], Laya['Handler']['create'](this, function (_0x54c702) {
                            _0x7f7dce['gameScene']['addChild'](_0x54c702), _0x7f7dce['userCar'] = _0x4dc690['default']['create'](_0x7f7dce['gameCarInd' + 'ex'], _0x54c702), _0x7f7dce['isLoadCar'] = !0x0, _0x7f7dce['LoadCarTra' + 'k']();
                        }));
                    }, _0x40ad10['prototype']['LoadCarTra' + 'k'] = function () {
                        this['isLoadCar'] && this['isLoadCust' + 'oms'] && (this['LoadSkyBox'](), this['addCollder'](), this['moveTrack']());
                    }, _0x40ad10['prototype']['LoadNitrog' + 'en'] = function (_0x5364c9) {
                        var _0x212d94 = _0xb86323['default']['randomInSe' + 'ction'](_0xf35b96['Nitrogen_t' + 'ype']['Blue'], _0xf35b96['Nitrogen_t' + 'ype']['Yellow']), _0x5f29c9 = this, _0x5ab98b = '';
                        _0x5ab98b = _0x212d94 == _0xf35b96['Nitrogen_t' + 'ype']['Blue'] ? _0x50b758['default']['Nitrogen_B' + 'lue'] : _0x50b758['default']['Nitrogen_Y' + 'ellow'], Laya['Scene3D']['load'](_0x5ab98b, Laya['Handler']['create'](this, function (_0x271de7) {
                            var _0x2b6ca3 = Laya['MeshSprite' + '3D']['instantiat' + 'e'](_0x271de7, _0x5f29c9['gameScene']), _0xbaaa8f = _0xa3f178['default']['create'](_0x2b6ca3, _0x5364c9), _0x5a4f4c = _0xbaaa8f['nitrogen']['addCompone' + 'nt'](_0x10658a['Collision']);
                            _0x5a4f4c['userCar'] = _0x5f29c9['userCar']['userCar'], _0x5a4f4c['isNitrogen'] = !0x0, _0x5a4f4c['nitrogem_t' + 'ype'] = _0x212d94, _0x5f29c9['NitrogenAr' + 'r']['push'](_0xbaaa8f);
                        }));
                    }, _0x40ad10['prototype']['moveTrack'] = function () {
                        if (!_0x5a586a['default']['isCollserB' + 'arrier'] && this['userCar']) {
                            var _0x2cd163 = this['userCar']['car']['transform']['position']['x'];
                            if (this['track'])
                                for (var _0x203d4d = 0x0; _0x203d4d < this['track']['numChildre' + 'n']; ++_0x203d4d) {
                                    var _0x246581 = _0x203d4d + 0x1;
                                    _0x246581 >= this['track']['numChildre' + 'n'] && (_0x246581 = 0x0);
                                    var _0x57b6c3 = this['track']['getChildAt'](_0x203d4d), _0x2956be = _0x57b6c3['transform']['position']['x'];
                                    if (_0x2956be + _0x50b758['default']['roadTypeDi' + 's'][_0x5a586a['default']['roadType']][_0x203d4d] / 0x2 < _0x2cd163 - 0xa) {
                                        _0x57b6c3['transform']['position'] = new Laya['Vector3'](_0x5a586a['default']['trackAddLo' + 'ngX'], 0x0, 0x0), _0x5a586a['default']['trackAddLo' + 'ngX'] += _0x50b758['default']['roadTypeDi' + 's'][_0x5a586a['default']['roadType']][_0x203d4d] / 0x2 + _0x50b758['default']['roadTypeDi' + 's'][_0x5a586a['default']['roadType']][_0x246581] / 0x2;
                                        break;
                                    }
                                    _0x2956be > this['userCar']['car']['transform']['localPosit' + 'ionX'] + 0x258 ? _0x57b6c3['active'] = !0x1 : _0x57b6c3['active'] = !0x0;
                                }
                        }
                    }, _0x40ad10['prototype']['addCollder'] = function () {
                        if (this['isLoadCar'] && this['isLoadCust' + 'oms'] && this['track'] && this['userCar'])
                            for (var _0x2e4080 = 0x0; _0x2e4080 < this['track']['numChildre' + 'n']; _0x2e4080++) {
                                var _0x3a9d24 = this['track']['getChildAt'](_0x2e4080)['getChildBy' + 'Name']('barrier_le' + 'ft');
                                if (_0x3a9d24) {
                                    var _0xf1769d = _0x3a9d24['addCompone' + 'nt'](_0x10658a['Collision']);
                                    _0xf1769d['userCar'] = this['userCar']['userCar'];
                                }
                                var _0x461541 = this['track']['getChildAt'](_0x2e4080)['getChildBy' + 'Name']('barrier_ri' + 'ght');
                                if (_0x461541) {
                                    var _0x292679 = _0x461541['addCompone' + 'nt'](_0x10658a['Collision']);
                                    _0x292679['userCar'] = this['userCar']['userCar'];
                                }
                            }
                    }, _0x40ad10['prototype']['dkeyDown'] = function (_0x45c8b2) {
                        switch (_0x45c8b2['keyCode']) {
                        case Laya['Keyboard']['DOWN']:
                            break;
                        case Laya['Keyboard']['UP']:
                            break;
                        case Laya['Keyboard']['RIGHT']:
                        case Laya['Keyboard']['D']:
                            this['s'] = -0x1;
                            !this['disLoop'] && (this['disLoop'] = !![], Laya['timer']['frameLoop'](0x1, this, this['onDeviceMo' + 'tionChange'], [
                                { 'beta': this['beta'] },
                                this['s']
                            ]));
                            break;
                        case Laya['Keyboard']['LEFT']:
                        case Laya['Keyboard']['A']:
                            this['s'] = 0x1;
                            !this['disLoop'] && (this['disLoop'] = !![], Laya['timer']['frameLoop'](0x1, this, this['onDeviceMo' + 'tionChange'], [
                                { 'beta': this['beta'] },
                                this['s']
                            ]));
                            break;
                        default:
                            break;
                        }
                    }, _0x40ad10['prototype']['dkeyUp'] = function (_0x4c7fe9) {
                        this['disLoop'] = ![], Laya['timer']['clear'](this, this['onDeviceMo' + 'tionChange']), this['onDeviceMo' + 'tionChange']({ 'beta': 0x0 }, 0x0);
                        switch (_0x4c7fe9['keyCode']) {
                        case Laya['Keyboard']['DOWN']:
                            break;
                        case Laya['Keyboard']['UP']:
                            break;
                        case Laya['Keyboard']['RIGHT']:
                            break;
                        case Laya['Keyboard']['LEFT']:
                            break;
                        default:
                            break;
                        }
                    }, _0x40ad10['prototype']['onDeviceMo' + 'tionChange'] = function (_0x4de533, _0x5165cb) {
                        var _0xf28f66 = this;
                        _0x4de533['beta'] = _0x4de533['beta'] += 0x1 * _0x5165cb;
                        if (_0xf28f66['userCar'] && !_0xf28f66['isPause'] && _0x5a586a['default']['istrueStar' + 'Game']) {
                            if (_0xf28f66['isOverGame'])
                                return void (_0xf28f66['userCar']['userCar']['transform']['localRotat' + 'ionEulerY'] = 0x0);
                            _0xf28f66['transX'] = _0x4de533['beta'] / 0x3e8 * _0x5a586a['default']['carMove'] * -0x1;
                            var _0xb2ac5e = _0xf28f66['gammaSwitc' + 'hAngle'](_0x4de533['beta'], 0x1);
                            _0xf28f66['gammaSwitc' + 'hAngle'](_0x4de533['beta'], 0x2), (_0xf28f66['transX'] > 0.4 && (_0xf28f66['transX'] = 0.4), _0xf28f66['transX'] < -0.4 && (_0xf28f66['transX'] = -0.4), _0x4de533['beta'] > 0x0 ? _0xf28f66['fu'] = 0x1 : _0xf28f66['fu'] = -0x1, _0xf28f66['borderIstr' + 'ue'] || (_0x4de533['beta'] > 0x0 ? _0xf28f66['zheng'] = 0x1 : _0xf28f66['zheng'] = -0x1), _0xf28f66['borderIstr' + 'ue'] && _0xf28f66['fu'] != _0xf28f66['zheng'] && (_0xf28f66['borderIstr' + 'ue'] = !0x1), _0xf28f66['borderIstr' + 'ue'] || _0xf28f66['userCar']['car']['transform']['translate'](new Laya['Vector3'](0x0, 0x0, _0xf28f66['transX'])), _0xf28f66['userCar']['userCar']['transform']['localRotat' + 'ionEulerY'] = _0xb2ac5e);
                        }
                    }, _0x40ad10['prototype']['startGameO' + 'fListenDev' + 'iceMotion'] = function () {
                        var _0x342a09 = this;
                        this['s'] = 0x0, this['beta'] = 0x0, this['disLoop'] = ![];
                        if (Laya['Browser']['onMobile']) {
                        } else
                            Laya['stage']['on'](Laya['Event']['KEY_DOWN'], this, this['dkeyDown']), Laya['stage']['on'](Laya['Event']['KEY_UP'], this, this['dkeyUp']);
                    }, _0x40ad10['prototype']['gammaSwitc' + 'hAngle'] = function (_0x2f3738, _0x24269e) {
                        return _0x2f3738 > 0x5a ? _0x2f3738 = 0x5a : -0x5a > _0x2f3738 && (_0x2f3738 = -0x5a), 0x2 == _0x24269e ? -_0x2f3738 / 0x5a * _0x5a586a['default']['carSlantX'] : _0x2f3738 / 0x5a * _0x5a586a['default']['carRotateY'];
                    }, _0x40ad10['prototype']['stopGameOf' + 'ListenDevi' + 'ceMotion'] = function () {
                        Laya['stage']['off'](Laya['Event']['KEY_DOWN'], this, this['dkeyDown']), Laya['stage']['off'](Laya['Event']['KEY_UP'], this, this['dkeyUp']), Laya['timer']['clear'](this, this['onDeviceMo' + 'tionChange']), this['disLoop'] = ![];
                    }, _0x40ad10['prototype']['updata'] = function () {
                        if (this['userCar'] && (this['carMove'](), !this['isOverGame'])) {
                            if (this['moveTrack'](), 0x1 == _0x5a586a['default']['checkpoint' + 'type']) {
                                if (this['BarrierAnd' + 'NitrogenMa' + 'g'](), this['starEndDis'](), this['BarrierCar' + 'Arr'])
                                    for (var _0x18632e = 0x0; _0x18632e < this['BarrierCar' + 'Arr']['length']; _0x18632e++) {
                                        var _0x50ec9e = this['BarrierCar' + 'Arr'][_0x18632e];
                                        _0x50ec9e && _0x50ec9e['updata']();
                                    }
                                this['removeBarA' + 'ndNit']();
                            }
                            if (0x4 == _0x5a586a['default']['checkpoint' + 'type'] && this['RivalCarAr' + 'r']) {
                                this['chaseGameU' + 'pdata']();
                                for (var _0x3b8b38 = 0x0; _0x3b8b38 < this['RivalCarAr' + 'r']['length']; _0x3b8b38++) {
                                    var _0x50ec9e = this['RivalCarAr' + 'r'][_0x3b8b38];
                                    _0x50ec9e && _0x50ec9e['updata']();
                                }
                            }
                            this['playCollis' + 'ionCar']();
                        }
                    }, _0x40ad10['prototype']['chaseGameU' + 'pdata'] = function () {
                        if (this['userCar']) {
                            this['chaseRanki' + 'ng'] = this['RivalCarAr' + 'r']['length'] + 0x1;
                            for (var _0x25971 = 0x0; _0x25971 < this['RivalCarAr' + 'r']['length']; _0x25971++) {
                                var _0x448416 = this['RivalCarAr' + 'r'][_0x25971];
                                _0x448416['rivalCar']['transform']['localPosit' + 'ionX'] < this['userCar']['car']['transform']['localPosit' + 'ionX'] && this['chaseRanki' + 'ng']--;
                            }
                            _0x5a586a['default']['chaseRanki' + 'ng'] = this['chaseRanki' + 'ng'];
                        }
                    }, _0x40ad10['prototype']['removeBarA' + 'ndNit'] = function () {
                        for (var _0x16e948 = 0x0; _0x16e948 < this['BarrierCar' + 'Arr']['length']; _0x16e948++) {
                            var _0x487b6f = this['BarrierCar' + 'Arr'][_0x16e948];
                            _0x487b6f && _0x487b6f['BarrierCar' + 'All']['transform']['localPosit' + 'ionX'] < this['userCar']['car']['transform']['localPosit' + 'ionX'] - 0x14 && (this['BarrierCar' + 'Arr'][_0x16e948]['removeSelf'](), this['BarrierCar' + 'Arr']['splice'](_0x16e948, 0x1));
                        }
                        for (var _0x16e948 = 0x0; _0x16e948 < this['NitrogenAr' + 'r']['length']; _0x16e948++) {
                            var _0x487b6f = this['NitrogenAr' + 'r'][_0x16e948];
                            _0x487b6f && _0x487b6f['nitrogenAl' + 'l']['transform']['localPosit' + 'ionX'] < this['userCar']['car']['transform']['localPosit' + 'ionX'] && (this['NitrogenAr' + 'r'][_0x16e948]['removeSelf'](), this['NitrogenAr' + 'r']['splice'](_0x16e948, 0x1));
                        }
                    }, _0x40ad10['prototype']['starEndDis'] = function () {
                        _0x5a586a['default']['updataCarD' + 'estination' + 'Dis'] = this['destinatio' + 'n']['transform']['localPosit' + 'ionX'] - this['userCar']['car']['transform']['localPosit' + 'ionX'];
                    }, _0x40ad10['prototype']['carMove'] = function () {
                        _0x5a586a['default']['isCollserB' + 'arrier'] || (this['_moveType'] == _0xf35b96['ShaChe']['up'] ? _0x5a586a['default']['RunSpeed'] <= _0x5a586a['default']['userMotoSp' + 'eed'] && (_0x5a586a['default']['RunSpeed'] += _0x5a586a['default']['accelerati' + 'on']) : _0x5a586a['default']['RunSpeed'] >= _0x5a586a['default']['minspeed'] && (_0x5a586a['default']['RunSpeed'] -= _0x5a586a['default']['brakingspe' + 'ed']), _0x5a586a['default']['isUseDanQi'] && !this['isOverGame'] ? this['danqiAddSp' + 'eed'] < _0x5a586a['default']['motoExpedi' + 'te'] ? (this['danqiAddSp' + 'eed'] += _0x5a586a['default']['motoExpedi' + 'teAddSpeed'], _0x5a586a['default']['moveSpeed'] = _0x5a586a['default']['RunSpeed'] + this['danqiAddSp' + 'eed']) : _0x5a586a['default']['moveSpeed'] = _0x5a586a['default']['RunSpeed'] + _0x5a586a['default']['motoExpedi' + 'te'] : this['danqiAddSp' + 'eed'] > 0x0 ? (this['danqiAddSp' + 'eed'] -= _0x5a586a['default']['motoExpedi' + 'teAddSpeed'], _0x5a586a['default']['moveSpeed'] = _0x5a586a['default']['RunSpeed'] + this['danqiAddSp' + 'eed']) : (this['danqiAddSp' + 'eed'] = 0x0, _0x5a586a['default']['moveSpeed'] = _0x5a586a['default']['RunSpeed']), this['userCar']['car']['transform']['translate'](new Laya['Vector3'](_0x5a586a['default']['moveSpeed'], 0x0, 0x0)), this['ribbon']['transform']['localPosit' + 'ionX'] = this['userCar']['car']['transform']['localPosit' + 'ionX'], this['ribbon']['transform']['localPosit' + 'ionZ'] = this['userCar']['car']['transform']['localPosit' + 'ionZ']);
                    }, _0x40ad10['prototype']['collderBar' + 'rierCar'] = function (_0x2becef) {
                        if (!this['isOverGame']) {
                            if (0x1 == _0x5a586a['default']['checkpoint' + 'type'])
                                for (var _0x4fe97c = 0x0; _0x4fe97c < this['BarrierCar' + 'Arr']['length']; _0x4fe97c++) {
                                    var _0x17719b = this['BarrierCar' + 'Arr'][_0x4fe97c];
                                    if (_0x17719b && _0x2becef == _0x17719b['BarrierCar'])
                                        return this['collserCar' + 'PosX'] = this['userCar']['car']['transform']['localPosit' + 'ionX'], this['collserCar' + 'PosZ'] = this['userCar']['car']['transform']['localPosit' + 'ionZ'], _0x5a586a['default']['isCollserB' + 'arrier'] = !0x0, this['userCar']['car']['transform']['localPosit' + 'ionZ'] >= _0x17719b['BarrierCar' + 'All']['transform']['localPosit' + 'ionZ'] ? !0x0 : !0x1;
                                }
                            if (0x4 == _0x5a586a['default']['checkpoint' + 'type'])
                                for (var _0x4fe97c = 0x0; _0x4fe97c < this['RivalCarAr' + 'r']['length']; _0x4fe97c++) {
                                    var _0x17719b = this['RivalCarAr' + 'r'][_0x4fe97c];
                                    if (_0x17719b && _0x2becef == _0x17719b['rivalColli' + 'sion'])
                                        return this['collserCar' + 'PosX'] = this['userCar']['car']['transform']['localPosit' + 'ionX'], this['collserCar' + 'PosZ'] = this['userCar']['car']['transform']['localPosit' + 'ionZ'], _0x5a586a['default']['isCollserB' + 'arrier'] = !0x0, this['userCar']['car']['transform']['localPosit' + 'ionZ'] >= _0x17719b['rivalCar']['transform']['localPosit' + 'ionZ'] ? !0x0 : !0x1;
                                }
                        }
                    }, _0x40ad10['prototype']['playCollis' + 'ionCar'] = function () {
                        _0x5a586a['default']['isCollserB' + 'arrier'] && (_0x5a586a['default']['RunSpeed'] > 0x0 ? (this['isOneColli' + 'sion'] || (this['isOneColli' + 'sion'] = !0x0, _0x3535e9['default']['playEffect'](_0xf35b96['SoundName']['ZhuangChe']), _0x5a586a['default']['accidentNu' + 'm']++), this['userCar']['userCar']['active'] = !0x1, _0x5a586a['default']['RunSpeed'] -= _0x5a586a['default']['autocidesp' + 'eed'], this['userCar']['car']['transform']['translate'](new Laya['Vector3'](_0x5a586a['default']['RunSpeed'], 0x0, 0x0))) : (this['isOneColli' + 'sion'] = !0x1, this['userCar']['userCar']['active'] = !0x0, _0x5a586a['default']['RunSpeed'] = 0x0, this['userCar']['car']['transform']['localPosit' + 'ionX'] = this['collserCar' + 'PosX'], this['userCar']['car']['transform']['localPosit' + 'ionZ'] = this['collserCar' + 'PosZ'], this['_moveType'] = _0xf35b96['ShaChe']['up'], _0x5a586a['default']['isCollserB' + 'arrier'] = !0x1, Laya['timer']['loop'](0x64, this, this['playFlicke' + 'rCar']), _0x2111f9['default']['showDialog'](new _0x361b94['default']()), _0x1a32ac['default']['getInstanc' + 'e']()['emit'](_0xf35b96['GameEvent']['CollderSto' + 'p'], null)));
                    }, _0x40ad10['prototype']['playFlicke' + 'rCar'] = function () {
                        this['flickerNum']++, this['flickerNum'] % 0x2 == 0x0 ? this['userCar']['userCar']['active'] = !0x0 : this['userCar']['userCar']['active'] = !0x1, 0x8 == this['flickerNum'] && (Laya['timer']['clear'](this, this['playFlicke' + 'rCar']), this['flickerNum'] = 0x0);
                    }, _0x40ad10['prototype']['playExpedi' + 'te'] = function () {
                        Laya['Tween']['to'](this['userCar']['camera']['transform'], { 'localPositionX': this['userCar']['camera']['transform']['localPosit' + 'ionX'] - 0x1 }, 0x190);
                    }, _0x40ad10['prototype']['sotpExpedd' + 'ite'] = function () {
                        var _0x185150 = this;
                        Laya['Tween']['to'](this['userCar']['camera']['transform'], { 'localPositionX': this['userCar']['camera']['transform']['localPosit' + 'ionX'] + 0x1 }, 0x12c, null, Laya['Handler']['create'](this, function () {
                            _0x185150['userCar']['camera']['transform']['localPosit' + 'ionX'] = -10.27;
                        }));
                    }, _0x40ad10['prototype']['gameOver'] = function () {
                        this['track'] && (this['track']['removeSelf'](), this['track'] = null), this['destinatio' + 'n'] && (this['destinatio' + 'n']['removeSelf'](), this['destinatio' + 'n']['destroy'](!0x0), this['destinatio' + 'n'] = null), this['SkyBox'] && (this['SkyBox']['removeSelf'](), this['SkyBox']['destroy'](!0x0), this['SkyBox'] = null), this['userCar'] && (this['userCar']['removeSelf'](), this['userCar'] = null), this['gameCustom' + 's'] && (this['gameCustom' + 's']['removeSelf'](), this['gameCustom' + 's'] = null);
                        for (var _0x3f7b30 = 0x0; _0x3f7b30 < this['BarrierCar' + 'Arr']['length']; ++_0x3f7b30)
                            this['BarrierCar' + 'Arr'][_0x3f7b30] && (this['BarrierCar' + 'Arr'][_0x3f7b30]['removeSelf'](), this['BarrierCar' + 'Arr'][_0x3f7b30] = null);
                        this['BarrierCar' + 'Arr'] = [];
                        for (var _0x3f7b30 = 0x0; _0x3f7b30 < this['NitrogenAr' + 'r']['length']; ++_0x3f7b30)
                            this['NitrogenAr' + 'r'][_0x3f7b30] && (this['NitrogenAr' + 'r'][_0x3f7b30]['removeSelf'](), this['NitrogenAr' + 'r'][_0x3f7b30] = null);
                        this['NitrogenAr' + 'r'] = [];
                        for (var _0x3f7b30 = 0x0; _0x3f7b30 < this['RivalCarAr' + 'r']['length']; ++_0x3f7b30)
                            this['RivalCarAr' + 'r'][_0x3f7b30] && (this['RivalCarAr' + 'r'][_0x3f7b30]['removeSelf'](), this['RivalCarAr' + 'r'][_0x3f7b30] = null);
                        this['RivalCarAr' + 'r'] = [], Laya['timer']['clear'](this, this['updata']);
                    }, _0x40ad10;
                }(Laya['Script3D']);
            _0xb89228['default'] = _0x48fb7a;
        },
        {
            '../components/CollderPanel': 0x26,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/SoundManager': 0x50,
            '../manager/UIManager': 0x51,
            '../utils/MathUtil': 0x5c,
            './BarrierCarControl': 0x41,
            './Collision': 0x42,
            './CustomsControl': 0x43,
            './NitrogenControl': 0x45,
            './RivalCarControl': 0x46,
            './UserCarControl': 0x47
        }
    ],
    0x45: [
        function (_0x22977c, _0x5d51a7, _0x87946) {
            'use strict';
            var _0x47632a = this && this['__extends'] || function () {
                var _0x367e2c = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x25a03a, _0x2d9859) {
                    _0x25a03a['__proto__'] = _0x2d9859;
                } || function (_0x53b76f, _0x202907) {
                    for (var _0xd13f55 in _0x202907)
                        _0x202907['hasOwnProp' + 'erty'](_0xd13f55) && (_0x53b76f[_0xd13f55] = _0x202907[_0xd13f55]);
                };
                return function (_0x17d370, _0x8283f6) {
                    function _0x4c496b() {
                        this['constructo' + 'r'] = _0x17d370;
                    }
                    _0x367e2c(_0x17d370, _0x8283f6), _0x17d370['prototype'] = null === _0x8283f6 ? Object['create'](_0x8283f6) : (_0x4c496b['prototype'] = _0x8283f6['prototype'], new _0x4c496b());
                };
            }();
            Object['defineProp' + 'erty'](_0x87946, '__esModule', { 'value': !0x0 });
            var _0x5318a2 = _0x22977c('../config/' + 'CarDataCon' + 'fig'), _0x3e4df4 = function (_0x33e53a) {
                    function _0x2a753b() {
                        var _0xd14b79 = _0x33e53a['call'](this) || this;
                        return _0xd14b79['nitrogenAl' + 'l'] = null, _0xd14b79['nitrogen'] = null, _0xd14b79;
                    }
                    return _0x47632a(_0x2a753b, _0x33e53a), _0x2a753b['create'] = function (_0x8f4407, _0x3de5ad) {
                        var _0x345ded = new _0x2a753b();
                        return _0x345ded['nitrogenAl' + 'l'] = _0x8f4407, _0x345ded['nitrogen'] = _0x345ded['nitrogenAl' + 'l']['getChildAt'](0x0)['getChildAt'](0x0), _0x345ded['init'](_0x3de5ad), _0x345ded;
                    }, _0x2a753b['prototype']['init'] = function (_0x1ba856) {
                        switch (_0x1ba856) {
                        case 0x1:
                            this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionX'] = _0x5318a2['default']['oneNitroge' + 'nDis'], this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionZ'] = 5.52;
                            break;
                        case 0x2:
                            this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionX'] = _0x5318a2['default']['twoNitroge' + 'nDis'], this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionZ'] = 0x2;
                            break;
                        case 0x3:
                            this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionX'] = _0x5318a2['default']['threeNitro' + 'genDis'], this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionZ'] = -0x2;
                            break;
                        case 0x4:
                            this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionX'] = _0x5318a2['default']['fourNitrog' + 'enDis'], this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionZ'] = -5.52;
                        }
                        this['isRemove'] = !0x1, this['moveNitrog' + 'en']();
                    }, _0x2a753b['prototype']['moveNitrog' + 'en'] = function () {
                        var _0x1151c7 = this;
                        Laya['Tween']['to'](this['nitrogenAl' + 'l']['transform'], { 'localPositionY': this['nitrogenAl' + 'l']['transform']['localPosit' + 'ionY'] + 0.6 }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                            _0x1151c7['isRemove'] || Laya['Tween']['to'](_0x1151c7['nitrogenAl' + 'l']['transform'], { 'localPositionY': _0x1151c7['nitrogenAl' + 'l']['transform']['localPosit' + 'ionY'] - 0.6 }, 0x1f4, null, Laya['Handler']['create'](_0x1151c7, function () {
                                _0x1151c7['isRemove'] || _0x1151c7['moveNitrog' + 'en']();
                            }));
                        }));
                    }, _0x2a753b['prototype']['removeSelf'] = function () {
                        this['nitrogenAl' + 'l'] && (this['isRemove'] = !0x0, this['nitrogenAl' + 'l']['removeSelf'](), this['nitrogenAl' + 'l'] = null);
                    }, _0x2a753b;
                }(Laya['Script3D']);
            _0x87946['default'] = _0x3e4df4;
        },
        { '../config/CarDataConfig': 0x3b }
    ],
    0x46: [
        function (_0x4d150f, _0x569dd7, _0x1f0675) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1f0675, '__esModule', { 'value': !0x0 });
            var _0x34a565 = _0x4d150f('../utils/U' + 'tils3d'), _0x2faf0a = _0x4d150f('../config/' + 'CarDataCon' + 'fig'), _0x4f4979 = function () {
                    function _0x5e9793() {
                        this['rivalCarAl' + 'l'] = null, this['rivalCar'] = null, this['trackType'] = 0x1, this['rivalCarSp' + 'eed'] = 0x0, this['rivalColli' + 'sion'] = null, this['rivalCarFL'] = null, this['rivalCarFR'] = null, this['rivalCarRL'] = null, this['rivalCarRR'] = null, this['isOutStop'] = !0x1, this['rivalSpeed'] = 0x0, this['rivalCarAd' + 'dSpeed'] = 0x0, this['rivalPosit' + 'ionX'] = 0x5, this['wheelRotat' + 'eSpeed'] = 0xfa0;
                    }
                    return _0x5e9793['create'] = function (_0x8733c6, _0x2623a3, _0x5dd547) {
                        var _0x4641fc = new _0x5e9793();
                        return _0x4641fc['rivalCarAl' + 'l'] = _0x8733c6, _0x4641fc['trackType'] = _0x2623a3, _0x4641fc['rivalCarSp' + 'eed'] = _0x5dd547, _0x4641fc['rivalCar'] = _0x4641fc['rivalCarAl' + 'l']['getChildAt'](0x0), _0x4641fc['rivalColli' + 'sion'] = _0x4641fc['rivalCar']['getChildAt'](0x0)['getChildAt'](0x0), _0x4641fc['rivalCarFL'] = _0x4641fc['rivalColli' + 'sion']['getChildBy' + 'Name']('Wheel_Fron' + 't_L'), _0x4641fc['rivalCarFR'] = _0x4641fc['rivalColli' + 'sion']['getChildBy' + 'Name']('Wheel_Fron' + 't_R'), _0x4641fc['rivalCarRL'] = _0x4641fc['rivalColli' + 'sion']['getChildBy' + 'Name']('Wheel_Rear' + '_L'), _0x4641fc['rivalCarRR'] = _0x4641fc['rivalColli' + 'sion']['getChildBy' + 'Name']('Wheel_Rear' + '_R'), _0x4641fc['init'](), _0x4641fc;
                    }, _0x5e9793['prototype']['init'] = function () {
                        switch (this['trackType']) {
                        case 0x1:
                            this['rivalCar']['transform']['localPosit' + 'ionX'] = this['rivalPosit' + 'ionX'], this['rivalCar']['transform']['localPosit' + 'ionZ'] = 5.5;
                            break;
                        case 0x2:
                            this['rivalCar']['transform']['localPosit' + 'ionX'] = this['rivalPosit' + 'ionX'], this['rivalCar']['transform']['localPosit' + 'ionZ'] = 1.57;
                            break;
                        case 0x3:
                            this['rivalCar']['transform']['localPosit' + 'ionX'] = this['rivalPosit' + 'ionX'], this['rivalCar']['transform']['localPosit' + 'ionZ'] = -1.57;
                            break;
                        case 0x4:
                            this['rivalCar']['transform']['localPosit' + 'ionX'] = this['rivalPosit' + 'ionX'], this['rivalCar']['transform']['localPosit' + 'ionZ'] = -5.5;
                        }
                        this['rivalSpeed'] = _0x34a565['default']['changeSpee' + 'd'](this['rivalCarSp' + 'eed']), this['rivalCarAd' + 'dSpeed'] = 0x0, this['isOutStop'] = !0x1;
                    }, _0x5e9793['prototype']['updata'] = function () {
                        this['isOutStop'] ? this['rivalCarAd' + 'dSpeed'] > 0x0 ? (this['rivalCarAd' + 'dSpeed'] -= 0x4 * _0x2faf0a['default']['accelerati' + 'on'], this['rivalCar']['transform']['translate'](new Laya['Vector3'](this['rivalCarAd' + 'dSpeed'], 0x0, 0x0))) : this['rivalCarAd' + 'dSpeed'] = 0x0 : (this['rivalCarAd' + 'dSpeed'] >= this['rivalSpeed'] ? (this['rivalCarAd' + 'dSpeed'] = this['rivalSpeed'], this['rivalCar']['transform']['translate'](new Laya['Vector3'](this['rivalSpeed'], 0x0, 0x0))) : (this['rivalCarAd' + 'dSpeed'] += 0x2 * _0x2faf0a['default']['accelerati' + 'on'], this['rivalCar']['transform']['translate'](new Laya['Vector3'](this['rivalCarAd' + 'dSpeed'], 0x0, 0x0))), this['rivalCarFL']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['rivalCarSp' + 'eed'] / this['wheelRotat' + 'eSpeed'])), this['rivalCarFR']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['rivalCarSp' + 'eed'] / this['wheelRotat' + 'eSpeed'])), this['rivalCarRL']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['rivalCarSp' + 'eed'] / this['wheelRotat' + 'eSpeed'])), this['rivalCarRR']['transform']['rotate'](new Laya['Vector3'](0x0, 0x0, -this['rivalCarSp' + 'eed'] / this['wheelRotat' + 'eSpeed'])));
                    }, _0x5e9793['prototype']['removeSelf'] = function () {
                        this['rivalCarAl' + 'l'] && (this['rivalCarAl' + 'l']['removeSelf'](), this['rivalCarAl' + 'l'] = null), this['rivalCar'] && (this['rivalCar']['removeSelf'](), this['rivalCar'] = null);
                    }, _0x5e9793;
                }();
            _0x1f0675['default'] = _0x4f4979;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../utils/Utils3d': 0x5d
        }
    ],
    0x47: [
        function (_0x2eae3f, _0x15aa45, _0x60763b) {
            'use strict';
            var _0x301f70 = this && this['__extends'] || function () {
                var _0x97b8d8 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x131d85, _0x55f98b) {
                    _0x131d85['__proto__'] = _0x55f98b;
                } || function (_0x5ef290, _0xa2d74) {
                    for (var _0x3371d6 in _0xa2d74)
                        _0xa2d74['hasOwnProp' + 'erty'](_0x3371d6) && (_0x5ef290[_0x3371d6] = _0xa2d74[_0x3371d6]);
                };
                return function (_0x142950, _0x35ef78) {
                    function _0x29b69c() {
                        this['constructo' + 'r'] = _0x142950;
                    }
                    _0x97b8d8(_0x142950, _0x35ef78), _0x142950['prototype'] = null === _0x35ef78 ? Object['create'](_0x35ef78) : (_0x29b69c['prototype'] = _0x35ef78['prototype'], new _0x29b69c());
                };
            }();
            Object['defineProp' + 'erty'](_0x60763b, '__esModule', { 'value': !0x0 });
            var _0x13f58f = function (_0x3506f6) {
                function _0x1efcdf() {
                    var _0x4ff9bf = _0x3506f6['call'](this) || this;
                    return _0x4ff9bf['carAll'] = null, _0x4ff9bf['car'] = null, _0x4ff9bf['camera'] = null, _0x4ff9bf['userCar'] = null, _0x4ff9bf['boxWide'] = null, _0x4ff9bf['pointer'] = null, _0x4ff9bf['userCarWid' + 'e'] = 0x0, _0x4ff9bf;
                }
                return _0x301f70(_0x1efcdf, _0x3506f6), _0x1efcdf['create'] = function (_0x209f05, _0x4e04ba) {
                    var _0x12a781 = new _0x1efcdf();
                    return _0x12a781['carAll'] = _0x4e04ba, _0x12a781['car'] = _0x12a781['carAll']['getChildAt'](0x0), _0x12a781['userCar'] = _0x12a781['car']['getChildAt'](0x0)['getChildAt'](0x0), _0x12a781['camera'] = _0x12a781['car']['getChildAt'](0x0)['getChildAt'](0x1), _0x12a781['car']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x12a781;
                }, _0x1efcdf['prototype']['removeSelf'] = function () {
                    this['carAll'] && (this['carAll']['removeSelf'](), this['carAll'] = null), this['car'] && (this['car']['removeSelf'], this['car'] = null);
                }, _0x1efcdf;
            }(Laya['Script3D']);
            _0x60763b['default'] = _0x13f58f;
        },
        {}
    ],
    0x48: [
        function (_0x1fffc8, _0x60f8d2, _0x19e36e) {
            'use strict';
            var _0x519d5c = this && this['__extends'] || function () {
                var _0x41ebb8 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x43fe35, _0x5344ba) {
                    _0x43fe35['__proto__'] = _0x5344ba;
                } || function (_0xdc618a, _0x157f9d) {
                    for (var _0x19a539 in _0x157f9d)
                        _0x157f9d['hasOwnProp' + 'erty'](_0x19a539) && (_0xdc618a[_0x19a539] = _0x157f9d[_0x19a539]);
                };
                return function (_0x5b0746, _0x44bdf5) {
                    function _0x4bbbef() {
                        this['constructo' + 'r'] = _0x5b0746;
                    }
                    _0x41ebb8(_0x5b0746, _0x44bdf5), _0x5b0746['prototype'] = null === _0x44bdf5 ? Object['create'](_0x44bdf5) : (_0x4bbbef['prototype'] = _0x44bdf5['prototype'], new _0x4bbbef());
                };
            }();
            Object['defineProp' + 'erty'](_0x19e36e, '__esModule', { 'value': !0x0 });
            var _0x4f3a5b = _0x1fffc8('../ui/laya' + 'MaxUI'), _0x5c84b8 = _0x1fffc8('../platfor' + 'ms/MiniGam' + 'e'), _0x3839d7 = function (_0x1a1446) {
                    function _0x45c2f1(_0x592e30) {
                        return _0x1a1446['call'](this) || this;
                    }
                    return _0x519d5c(_0x45c2f1, _0x1a1446), _0x45c2f1['prototype']['onAwake'] = function () {
                        this['iconImg']['on'](Laya['Event']['CLICK'], this, this['onTry']);
                    }, _0x45c2f1['prototype']['setData'] = function (_0xe1fa2e) {
                        _0xe1fa2e ? this['data'] = _0xe1fa2e : this['data'] = this['dataSource'], this['updateData']();
                    }, _0x45c2f1['prototype']['export'] = function (_0x57dbc6) {
                        this['exportType'] = _0x57dbc6;
                    }, _0x45c2f1['prototype']['updateData'] = function () {
                        this['data'] && (this['iconImg'] && (this['iconImg']['skin'] = this['data']['image']), this['nameLabel'] && (this['nameLabel']['text'] = this['data']['displayTit' + 'le']));
                    }, _0x45c2f1['prototype']['onTry'] = function () {
                        this['data'] && _0x5c84b8['MiniGame']['I']['navigateTo' + 'MiniProgra' + 'm']({
                            'eventName': this['data']['type'],
                            'subEventName': this['data']['title'],
                            'displayTitle': this['data']['displayTit' + 'le'],
                            'appId': this['data']['appid'],
                            'path': this['data']['path'],
                            'extraData': {
                                'appId': this['data']['targetAppi' + 'd'],
                                'path': this['data']['targetPath']
                            },
                            'exportType': this['exportType']
                        }, this['data']['title'], '小插屏', !0x1);
                    }, _0x45c2f1;
                }(_0x4f3a5b['ui']['item']['ChaPingIte' + 'mUI']);
            _0x19e36e['default'] = _0x3839d7;
        },
        {
            '../platforms/MiniGame': 0x52,
            '../ui/layaMaxUI': 0x5a
        }
    ],
    0x49: [
        function (_0x55a6a1, _0xcec710, _0x28217c) {
            'use strict';
            var _0x1f8d22 = this && this['__extends'] || function () {
                var _0x57c72e = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x43a946, _0x4a16a6) {
                    _0x43a946['__proto__'] = _0x4a16a6;
                } || function (_0x3def36, _0x58bdfb) {
                    for (var _0x476ca9 in _0x58bdfb)
                        _0x58bdfb['hasOwnProp' + 'erty'](_0x476ca9) && (_0x3def36[_0x476ca9] = _0x58bdfb[_0x476ca9]);
                };
                return function (_0x3f1f49, _0x2669a4) {
                    function _0x50919d() {
                        this['constructo' + 'r'] = _0x3f1f49;
                    }
                    _0x57c72e(_0x3f1f49, _0x2669a4), _0x3f1f49['prototype'] = null === _0x2669a4 ? Object['create'](_0x2669a4) : (_0x50919d['prototype'] = _0x2669a4['prototype'], new _0x50919d());
                };
            }();
            Object['defineProp' + 'erty'](_0x28217c, '__esModule', { 'value': !0x0 });
            var _0x2b4a31 = _0x55a6a1('../ui/laya' + 'MaxUI'), _0x336036 = _0x55a6a1('../platfor' + 'ms/MiniGam' + 'e'), _0x324733 = function (_0x197311) {
                    function _0x5bce9f(_0x3b1dc3) {
                        var _0x2c8c5b = _0x197311['call'](this) || this;
                        return _0x2c8c5b['isPopupGam' + 'eCentre'] = !0x1, _0x2c8c5b['exportName'] = '', _0x2c8c5b;
                    }
                    return _0x1f8d22(_0x5bce9f, _0x197311), _0x5bce9f['prototype']['onAwake'] = function () {
                        this['iconImg']['on'](Laya['Event']['CLICK'], this, this['onTry']);
                    }, _0x5bce9f['prototype']['setData'] = function (_0x5f3412) {
                        _0x5f3412 ? this['data'] = _0x5f3412 : this['data'] = this['dataSource'], this['updateData']();
                    }, _0x5bce9f['prototype']['export'] = function (_0x1672f8, _0x15cfee, _0x3da1de) {
                        this['exportType'] = _0x1672f8, this['isPopupGam' + 'eCentre'] = _0x15cfee, this['exportName'] = _0x3da1de;
                    }, _0x5bce9f['prototype']['updateData'] = function () {
                        this['data'] && this['iconImg'] && (this['iconImg']['skin'] = this['data']['image']);
                    }, _0x5bce9f['prototype']['onTry'] = function () {
                        this['data'] && _0x336036['MiniGame']['I']['navigateTo' + 'MiniProgra' + 'm']({
                            'eventName': this['data']['type'],
                            'subEventName': this['data']['title'],
                            'displayTitle': this['data']['displayTit' + 'le'],
                            'appId': this['data']['appid'],
                            'path': this['data']['path'],
                            'extraData': {
                                'appId': this['data']['targetAppi' + 'd'],
                                'path': this['data']['targetPath']
                            },
                            'exportType': this['exportType']
                        }, this['data']['title'], this['exportName'], this['isPopupGam' + 'eCentre']);
                    }, _0x5bce9f;
                }(_0x2b4a31['ui']['item']['ExportItem' + 'UI']);
            _0x28217c['default'] = _0x324733;
        },
        {
            '../platforms/MiniGame': 0x52,
            '../ui/layaMaxUI': 0x5a
        }
    ],
    0x4a: [
        function (_0x151820, _0x4cf24e, _0x52fd46) {
            'use strict';
            var _0x40188d = this && this['__extends'] || function () {
                var _0x54e968 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x290482, _0x1f943d) {
                    _0x290482['__proto__'] = _0x1f943d;
                } || function (_0x4b94fb, _0x19920e) {
                    for (var _0x300834 in _0x19920e)
                        _0x19920e['hasOwnProp' + 'erty'](_0x300834) && (_0x4b94fb[_0x300834] = _0x19920e[_0x300834]);
                };
                return function (_0x48a472, _0x58f166) {
                    function _0x22c1d7() {
                        this['constructo' + 'r'] = _0x48a472;
                    }
                    _0x54e968(_0x48a472, _0x58f166), _0x48a472['prototype'] = null === _0x58f166 ? Object['create'](_0x58f166) : (_0x22c1d7['prototype'] = _0x58f166['prototype'], new _0x22c1d7());
                };
            }();
            Object['defineProp' + 'erty'](_0x52fd46, '__esModule', { 'value': !0x0 });
            var _0x22d058 = _0x151820('../ui/laya' + 'MaxUI'), _0x4465cd = _0x151820('../platfor' + 'ms/MiniGam' + 'e'), _0x149e66 = function (_0xf10456) {
                    function _0x3cfb67(_0x2e6c71) {
                        return _0xf10456['call'](this) || this;
                    }
                    return _0x40188d(_0x3cfb67, _0xf10456), _0x3cfb67['prototype']['onAwake'] = function () {
                        this['iconImg']['on'](Laya['Event']['CLICK'], this, this['onTry']);
                    }, _0x3cfb67['prototype']['setData'] = function (_0x569545) {
                        _0x569545 ? this['data'] = _0x569545 : this['data'] = this['dataSource'], this['updateData']();
                    }, _0x3cfb67['prototype']['export'] = function (_0x32dae4) {
                        this['exportType'] = _0x32dae4;
                    }, _0x3cfb67['prototype']['updateData'] = function () {
                        this['data'] && (this['iconImg'] && (this['iconImg']['skin'] = this['data']['image']), this['nameLabel'] && (this['nameLabel']['text'] = this['data']['displayTit' + 'le']));
                    }, _0x3cfb67['prototype']['onTry'] = function () {
                        this['data'] && _0x4465cd['MiniGame']['I']['navigateTo' + 'MiniProgra' + 'm']({
                            'eventName': this['data']['type'],
                            'subEventName': this['data']['title'],
                            'displayTitle': this['data']['displayTit' + 'le'],
                            'appId': this['data']['appid'],
                            'path': this['data']['path'],
                            'extraData': {
                                'appId': this['data']['targetAppi' + 'd'],
                                'path': this['data']['targetPath']
                            },
                            'exportType': this['exportType']
                        }, this['data']['title'], '游戏中心', !0x1);
                    }, _0x3cfb67;
                }(_0x22d058['ui']['item']['GameCentre' + 'ItemUI']);
            _0x52fd46['default'] = _0x149e66;
        },
        {
            '../platforms/MiniGame': 0x52,
            '../ui/layaMaxUI': 0x5a
        }
    ],
    0x4b: [
        function (_0x5ce21c, _0x1054c2, _0x4e2772) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4e2772, '__esModule', { 'value': !0x0 });
            var _0x2ecd94 = function () {
                function _0x348775() {
                    this['dispatcher'] = new Laya['EventDispa' + 'tcher']();
                }
                return _0x348775['getInstanc' + 'e'] = function () {
                    return this['instance'] || (this['instance'] = new _0x348775()), this['instance'];
                }, _0x348775['getEventTy' + 'pe'] = function (_0x53d5b3) {
                    return '' + this['eventPrefi' + 'x'] + _0x53d5b3;
                }, _0x348775['prototype']['on'] = function (_0x34dec0, _0x104deb, _0x4c24e7, _0x1fa2d5) {
                    this['dispatcher']['on'](_0x348775['getEventTy' + 'pe'](_0x34dec0), _0x4c24e7, _0x104deb, _0x1fa2d5);
                }, _0x348775['prototype']['off'] = function (_0x122c26, _0x2dc56a, _0x2a4bc6) {
                    this['dispatcher']['off'](_0x348775['getEventTy' + 'pe'](_0x122c26), _0x2a4bc6, _0x2dc56a);
                }, _0x348775['prototype']['offAll'] = function (_0x4fbdca) {
                    this['dispatcher']['offAll'](_0x348775['getEventTy' + 'pe'](_0x4fbdca));
                }, _0x348775['prototype']['offAllTarg' + 'et'] = function (_0x4becbe) {
                    this['dispatcher']['offAllCall' + 'er'](_0x4becbe);
                }, _0x348775['prototype']['emit'] = function (_0x58dfd9, _0x4a9a55) {
                    return this['dispatcher']['event'](_0x348775['getEventTy' + 'pe'](_0x58dfd9), _0x4a9a55);
                }, _0x348775['prototype']['one'] = function (_0x2dbf3a, _0x450d65, _0x1c71e3) {
                    this['dispatcher']['once'](_0x348775['getEventTy' + 'pe'](_0x2dbf3a), _0x1c71e3, _0x450d65);
                }, _0x348775['eventPrefi' + 'x'] = 'GameEv_', _0x348775;
            }();
            _0x4e2772['default'] = _0x2ecd94;
        },
        {}
    ],
    0x4c: [
        function (_0xa60cd8, _0x126613, _0xcff836) {
            'use strict';
            Object['defineProp' + 'erty'](_0xcff836, '__esModule', { 'value': !0x0 });
            var _0x5e608b = _0xa60cd8('../../libs' + '/stat-ES6-' + '20181121.m' + 'in.js'), _0x74737c = _0xa60cd8('./Platform' + 'Manager'), _0x231a50 = _0xa60cd8('../config/' + 'Config'), _0x5ef496 = function () {
                    function _0x2904bd() {
                    }
                    return _0x2904bd['Instance'] = function () {
                        return this['instance'] || (this['instance'] = new _0x2904bd()), this['instance'];
                    }, _0x2904bd['prototype']['onStatInit'] = function () {
                    }, _0x2904bd['prototype']['onStatLogi' + 'n'] = function () {
                    }, _0x2904bd['prototype']['onStatCrea' + 'teRole'] = function () {
                    }, _0x2904bd['prototype']['reportCust' + 'omEvent'] = function (_0x13fa8b, _0xea8095) {
                    }, _0x2904bd['prototype']['getFlow'] = function (_0x337c9a) {
                        return void 0x0;
                    }, _0x2904bd['instance'] = null, _0x2904bd;
                }();
            _0xcff836['default'] = _0x5ef496;
        },
        {
            '../../libs/stat-ES6-20181121.min.js': 0x1,
            '../config/Config': 0x3c,
            './PlatformManager': 0x4e
        }
    ],
    0x4d: [
        function (_0x5f0826, _0x39580d, _0xde83ce) {
            'use strict';
            Object['defineProp' + 'erty'](_0xde83ce, '__esModule', { 'value': !0x0 });
            var _0x204773 = Laya['HttpReques' + 't'], _0x54799e = _0x5f0826('../data/Ro' + 'leInfo'), _0x299f08 = _0x5f0826('../config/' + 'Config'), _0x94e4b3 = _0x5f0826('../platfor' + 'ms/MiniGam' + 'e'), _0x36f4a7 = function () {
                    function _0x245c3e() {
                        if (_0x245c3e['instance'])
                            throw 'HttpManage' + 'r\x20is\x20singl' + 'eton';
                    }
                    return Object['defineProp' + 'erty'](_0x245c3e, 'I', {
                        'get': function () {
                            return _0x245c3e['instance'] = _0x245c3e['instance'] || new _0x245c3e();
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x245c3e['prototype']['postUserDa' + 'ta'] = function () {
                        this['httpPost']('game/data', { 'data': _0x54799e['default']['exportData']() });
                    }, _0x245c3e['prototype']['postLevelD' + 'ata'] = function () {
                        this['httpPost']('game/level' + '1', {
                            'level': _0x54799e['default']['CustomsDat' + 'a']['length'],
                            'star': _0x94e4b3['MiniGame']['I']['starAll']()
                        });
                    }, _0x245c3e['prototype']['setUserInf' + 'o'] = function (_0x19c0a7, _0x2eeb4c) {
                        this['httpPost']('game/useri' + 'nfo', {
                            'encryptedData': _0x299f08['default']['userInfo']['encryptedD' + 'ata'],
                            'iv': _0x299f08['default']['userInfo']['iv']
                        }, _0x19c0a7, _0x2eeb4c);
                    }, _0x245c3e['prototype']['getRanks'] = function (_0x148b8b, _0x4a87a4) {
                        this['httpPost']('game/rank1', {}, _0x148b8b, _0x4a87a4);
                    }, _0x245c3e['prototype']['httpPost'] = function (_0x4d78c8, _0x5eb9fd, _0x1ed013, _0x34e0ca) {
                        this['send']('post', _0x299f08['default']['yzUrl'] + _0x4d78c8, Laya['Handler']['create'](this, function (_0x2a3a0d) {
                            console['log']('调用成功:' + JSON['stringify'](_0x2a3a0d)), _0x1ed013 && _0x1ed013(_0x2a3a0d);
                        }), Laya['Handler']['create'](this, function (_0x4d0952) {
                            console['log']('调用失败:' + _0x4d0952), _0x34e0ca && _0x34e0ca(_0x4d0952);
                        }), null, _0x5eb9fd);
                    }, _0x245c3e['prototype']['send'] = function (_0x2a4849, _0x428cc4, _0x540b4c, _0x1e8829, _0x4134b5, _0x1f7da5, _0x200998, _0x29737f, _0x520d8f) {
                        void 0x0 === _0x540b4c && (_0x540b4c = null), void 0x0 === _0x1e8829 && (_0x1e8829 = null), void 0x0 === _0x4134b5 && (_0x4134b5 = null), void 0x0 === _0x1f7da5 && (_0x1f7da5 = null), void 0x0 === _0x200998 && (_0x200998 = 'get'), void 0x0 === _0x29737f && (_0x29737f = 'json'), void 0x0 === _0x520d8f && (_0x520d8f = null);
                        var _0x19f179 = new _0x204773();
                        _0x19f179['on'](Laya['Event']['COMPLETE'], _0x245c3e, this['onLoadComp' + 'leted'], [
                            _0x540b4c,
                            _0x19f179,
                            _0x428cc4
                        ]), _0x19f179['on'](Laya['Event']['ERROR'], _0x245c3e, this['onLoadErro' + 'r'], [
                            _0x1e8829,
                            _0x19f179,
                            _0x428cc4
                        ]), _0x19f179['on'](Laya['Event']['PROGRESS'], _0x245c3e, this['onProgress'], [_0x4134b5]), 'get' == _0x2a4849 ? _0x19f179['send'](_0x428cc4, _0x1f7da5, _0x200998, _0x29737f, _0x520d8f) : 'post' == _0x2a4849 && _0x19f179['send'](_0x428cc4, JSON['stringify'](_0x1f7da5), 'post', _0x29737f, [
                            'Content-Ty' + 'pe',
                            'applicatio' + 'n/json'
                        ]);
                    }, _0x245c3e['prototype']['onLoadComp' + 'leted'] = function (_0x470645, _0x51a01b, _0xf7b038, _0x2bedb2) {
                        void 0x0 === _0x470645 && (_0x470645 = null), void 0x0 === _0x51a01b && (_0x51a01b = null), void 0x0 === _0xf7b038 && (_0xf7b038 = null), void 0x0 === _0x2bedb2 && (_0x2bedb2 = null), _0x470645 && _0x470645['runWith'](_0x2bedb2), _0x245c3e['I']['clear'](_0x51a01b, _0xf7b038);
                    }, _0x245c3e['prototype']['onProgress'] = function (_0x31eff0, _0x234358) {
                        void 0x0 === _0x31eff0 && (_0x31eff0 = null), void 0x0 === _0x234358 && (_0x234358 = 0x0), _0x31eff0 && _0x31eff0['runWith'](_0x234358);
                    }, _0x245c3e['prototype']['onLoadErro' + 'r'] = function (_0x1816c4, _0x1ee241, _0x49300a, _0x2387eb) {
                        void 0x0 === _0x1816c4 && (_0x1816c4 = null), void 0x0 === _0x1ee241 && (_0x1ee241 = null), void 0x0 === _0x49300a && (_0x49300a = null), void 0x0 === _0x2387eb && (_0x2387eb = ''), _0x1816c4 && _0x1816c4['runWith'](_0x2387eb), _0x245c3e['I']['clear'](_0x1ee241, _0x49300a);
                    }, _0x245c3e['prototype']['clear'] = function (_0x5a831f, _0xc4613e) {
                        _0x5a831f && _0x5a831f['offAll']();
                    }, _0x245c3e;
                }();
            _0xde83ce['default'] = _0x36f4a7;
        },
        {
            '../config/Config': 0x3c,
            '../data/RoleInfo': 0x3f,
            '../platforms/MiniGame': 0x52
        }
    ],
    0x4e: [
        function (_0xf3b184, _0x3b18cb, _0x8f99) {
            'use strict';
            Object['defineProp' + 'erty'](_0x8f99, '__esModule', { 'value': !0x0 });
            var _0x2cdd2c = _0xf3b184('../platfor' + 'ms/WebPlat' + 'form'), _0x13c46f = _0xf3b184('../platfor' + 'ms/WxPlatf' + 'orm'), _0xb0352b = function () {
                    function _0x2ecd5b() {
                    }
                    return _0x2ecd5b['init'] = function () {
                        this['platform'] = new _0x2cdd2c['default'](), this['platform']['registerUp' + 'dateEvents']();
                    }, _0x2ecd5b;
                }();
            _0x8f99['default'] = _0xb0352b;
        },
        {
            '../platforms/WebPlatform': 0x53,
            '../platforms/WxPlatform': 0x54
        }
    ],
    0x4f: [
        function (_0x17105a, _0x4f19fa, _0x485607) {
            'use strict';
            var _0x27f10f = this && this['__awaiter'] || function (_0xf40bda, _0x3db248, _0x5c8ecf, _0x1fe048) {
                    return new (_0x5c8ecf || (_0x5c8ecf = Promise))(function (_0x2d6cf4, _0x5692d0) {
                        function _0x48b65e(_0x4b6fee) {
                            try {
                                _0x5ecb67(_0x1fe048['next'](_0x4b6fee));
                            } catch (_0x3f113b) {
                                _0x5692d0(_0x3f113b);
                            }
                        }
                        function _0x274328(_0x2c3705) {
                            try {
                                _0x5ecb67(_0x1fe048['throw'](_0x2c3705));
                            } catch (_0x39bb55) {
                                _0x5692d0(_0x39bb55);
                            }
                        }
                        function _0x5ecb67(_0x28e5cd) {
                            _0x28e5cd['done'] ? _0x2d6cf4(_0x28e5cd['value']) : new _0x5c8ecf(function (_0x6192c2) {
                                _0x6192c2(_0x28e5cd['value']);
                            })['then'](_0x48b65e, _0x274328);
                        }
                        _0x5ecb67((_0x1fe048 = _0x1fe048['apply'](_0xf40bda, _0x3db248 || []))['next']());
                    });
                }, _0x2883c5 = this && this['__generato' + 'r'] || function (_0x2169b4, _0x421e21) {
                    function _0xdacbf3(_0x57df44) {
                        return function (_0xcf6546) {
                            return _0x145a77([
                                _0x57df44,
                                _0xcf6546
                            ]);
                        };
                    }
                    function _0x145a77(_0x33b28c) {
                        if (_0x140c72)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x5ba11b;)
                            try {
                                if (_0x140c72 = 0x1, _0x969d13 && (_0x2d948c = 0x2 & _0x33b28c[0x0] ? _0x969d13['return'] : _0x33b28c[0x0] ? _0x969d13['throw'] || ((_0x2d948c = _0x969d13['return']) && _0x2d948c['call'](_0x969d13), 0x0) : _0x969d13['next']) && !(_0x2d948c = _0x2d948c['call'](_0x969d13, _0x33b28c[0x1]))['done'])
                                    return _0x2d948c;
                                switch (_0x969d13 = 0x0, _0x2d948c && (_0x33b28c = [
                                        0x2 & _0x33b28c[0x0],
                                        _0x2d948c['value']
                                    ]), _0x33b28c[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x2d948c = _0x33b28c;
                                    break;
                                case 0x4:
                                    return _0x5ba11b['label']++, {
                                        'value': _0x33b28c[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x5ba11b['label']++, _0x969d13 = _0x33b28c[0x1], _0x33b28c = [0x0];
                                    continue;
                                case 0x7:
                                    _0x33b28c = _0x5ba11b['ops']['pop'](), _0x5ba11b['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x2d948c = _0x5ba11b['trys'], !(_0x2d948c = _0x2d948c['length'] > 0x0 && _0x2d948c[_0x2d948c['length'] - 0x1]) && (0x6 === _0x33b28c[0x0] || 0x2 === _0x33b28c[0x0])) {
                                        _0x5ba11b = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x33b28c[0x0] && (!_0x2d948c || _0x33b28c[0x1] > _0x2d948c[0x0] && _0x33b28c[0x1] < _0x2d948c[0x3])) {
                                        _0x5ba11b['label'] = _0x33b28c[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x33b28c[0x0] && _0x5ba11b['label'] < _0x2d948c[0x1]) {
                                        _0x5ba11b['label'] = _0x2d948c[0x1], _0x2d948c = _0x33b28c;
                                        break;
                                    }
                                    if (_0x2d948c && _0x5ba11b['label'] < _0x2d948c[0x2]) {
                                        _0x5ba11b['label'] = _0x2d948c[0x2], _0x5ba11b['ops']['push'](_0x33b28c);
                                        break;
                                    }
                                    _0x2d948c[0x2] && _0x5ba11b['ops']['pop'](), _0x5ba11b['trys']['pop']();
                                    continue;
                                }
                                _0x33b28c = _0x421e21['call'](_0x2169b4, _0x5ba11b);
                            } catch (_0x216edc) {
                                _0x33b28c = [
                                    0x6,
                                    _0x216edc
                                ], _0x969d13 = 0x0;
                            } finally {
                                _0x140c72 = _0x2d948c = 0x0;
                            }
                        if (0x5 & _0x33b28c[0x0])
                            throw _0x33b28c[0x1];
                        return {
                            'value': _0x33b28c[0x0] ? _0x33b28c[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x140c72, _0x969d13, _0x2d948c, _0x459f01, _0x5ba11b = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x2d948c[0x0])
                                    throw _0x2d948c[0x1];
                                return _0x2d948c[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x459f01 = {
                        'next': _0xdacbf3(0x0),
                        'throw': _0xdacbf3(0x1),
                        'return': _0xdacbf3(0x2)
                    }, 'function' == typeof Symbol && (_0x459f01[Symbol['iterator']] = function () {
                        return this;
                    }), _0x459f01;
                };
            Object['defineProp' + 'erty'](_0x485607, '__esModule', { 'value': !0x0 });
            var _0x4ade3d = _0x17105a('../config/' + 'Config'), _0x182617 = _0x17105a('../config/' + 'CarDataCon' + 'fig'), _0x1c8b56 = _0x17105a('../utils/M' + 'athUtil'), _0x3a8894 = _0x17105a('../platfor' + 'ms/MiniGam' + 'e'), _0x5e0c56 = function () {
                    function _0x5b3737() {
                    }
                    return _0x5b3737['init'] = function () {
                    }, _0x5b3737['getHomeCar' + '3DModel'] = function (_0x2142c4) {
                        return _0x4ade3d['default']['ShowHomeCa' + 'rItem'] + _0x2142c4 + ('/Conventio' + 'nal/Car_In' + 'terface.lh');
                    }, _0x5b3737['getGameCar' + 'Model'] = function (_0x2b5f64) {
                        return _0x182617['default']['str_gameCa' + 'r'] = _0x4ade3d['default']['ShowGameCa' + 'rItem'] + _0x2b5f64 + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), _0x182617['default']['str_gameCa' + 'r'];
                    }, _0x5b3737['loadRivalC' + 'ar'] = function (_0x57ff6f) {
                        for (var _0x2e90ca = [], _0xabd3ef = _0x182617['default']['config_lev' + 'el'][_0x57ff6f - 0x1], _0x4c8428 = _0x1c8b56['default']['parseStrin' + 'g'](_0xabd3ef['enemycarid']), _0x1223c2 = 0x0; _0x1223c2 < _0x4c8428['length']; _0x1223c2++)
                            _0x2e90ca['push'](_0x4ade3d['default']['RivalCar'] + _0x4c8428[_0x1223c2] + ('/Conventio' + 'nal/Sample' + 'Scene.lh'));
                        return _0x2e90ca;
                    }, _0x5b3737['getHomeLuc' + 'kCar3DMode' + 'l'] = function (_0x1f0847) {
                        return _0x4ade3d['default']['motorcycle' + 'LuckyItem'] + _0x1f0847 + ('/Conventio' + 'nal/Interf' + 'ace.lh');
                    }, _0x5b3737['getGameLuv' + 'kyCarModel'] = function (_0x233cd1) {
                        return _0x182617['default']['str_gameCa' + 'r'] = _0x4ade3d['default']['gameLuckyC' + 'arItem'] + _0x233cd1 + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), _0x182617['default']['str_gameCa' + 'r'];
                    }, _0x5b3737['loadCustom' + 's'] = function (_0x30da1) {
                        return _0x182617['default']['str_road'] = _0x4ade3d['default']['GameScene'] + _0x4ade3d['default']['roadIdToNa' + 'me'][_0x30da1] + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), _0x182617['default']['str_road'];
                    }, _0x5b3737['loadSkyBox'] = function (_0x146a0f) {
                        return _0x182617['default']['str_skyBox'] = _0x4ade3d['default']['SkyBox'] + _0x146a0f + ('/Conventio' + 'nal/Sample' + 'Scene.lh'), _0x182617['default']['str_skyBox'];
                    }, _0x5b3737['getBarrier' + 'CarRes'] = function (_0x3473ad) {
                        var _0x220e81 = [], _0x3a3368 = [], _0x52c182 = _0x182617['default']['config_lev' + 'el'][_0x3473ad - 0x1], _0x3cd59c = [];
                        _0x3a3368['push'](_0x1c8b56['default']['parseStrin' + 'g'](_0x52c182['onelaneid'])), _0x3a3368['push'](_0x1c8b56['default']['parseStrin' + 'g'](_0x52c182['twolaneid'])), _0x3a3368['push'](_0x1c8b56['default']['parseStrin' + 'g'](_0x52c182['shreelanei' + 'd'])), _0x3a3368['push'](_0x1c8b56['default']['parseStrin' + 'g'](_0x52c182['fourlaneid']));
                        for (var _0x208cc5 = 0x0; _0x208cc5 < _0x3a3368['length']; _0x208cc5++)
                            for (var _0x5c8bdb = _0x3a3368[_0x208cc5], _0x358ce4 = 0x0; _0x358ce4 < _0x5c8bdb['length']; _0x358ce4++) {
                                var _0x236c3b = _0x5c8bdb[_0x358ce4];
                                _0x3cd59c['push'](_0x236c3b);
                            }
                        _0x3cd59c = _0x1c8b56['default']['outRepetit' + 'ion'](_0x3cd59c);
                        for (var _0x3c1001 = 0x0; _0x3c1001 < _0x3cd59c['length']; _0x3c1001++) {
                            var _0x396059 = _0x3cd59c[_0x3c1001];
                            _0x396059 > 0x10 && (_0x396059 = 0x10), _0x220e81['push'](_0x4ade3d['default']['BarrierCar'] + _0x396059 + ('/Conventio' + 'nal/Sample' + 'Scene.lh'));
                        }
                        return _0x220e81;
                    }, _0x5b3737['initResUrl'] = function () {
                    }, _0x5b3737['loadJsonCo' + 'nfig'] = function (_0x3703c4) {
                        var _0x561480 = this;
                        return new Promise(function (_0x54bc81, _0x17c6fe) {
                            var _0x533bed = new Laya['Handler'](_0x561480, function (_0x439fcb) {
                                _0x439fcb ? _0x54bc81(_0x439fcb) : _0x17c6fe('load\x20' + _0x3703c4 + '\x20error');
                            });
                            Laya['loader']['load'](_0x3703c4, _0x533bed, null, Laya['Loader']['JSON']);
                        });
                    }, _0x5b3737['setImageBy' + 'Url'] = function (_0x587d25, _0x59251b) {
                        return _0x27f10f(this, void 0x0, void 0x0, function () {
                            return _0x2883c5(this, function (_0x5b410a) {
                                return 'string' == typeof _0x587d25 && _0x59251b && (_0x59251b['skin'] = _0x587d25), [0x2];
                            });
                        });
                    }, _0x5b3737['loadRemote' + 'Image'] = function (_0x11b68d) {
                        var _0x55adaf = this;
                        return new Promise(function (_0x406324, _0x392493) {
                            var _0x102497 = new Laya['Handler'](_0x55adaf, function (_0x467ce5) {
                                _0x467ce5 ? _0x406324(_0x467ce5) : _0x392493('load\x20' + _0x11b68d + '\x20error');
                            });
                            Laya['loader']['load'](_0x11b68d, _0x102497, null, Laya['Loader']['IMAGE']);
                        });
                    }, _0x5b3737;
                }();
            _0x485607['default'] = _0x5e0c56;
        },
        {
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../platforms/MiniGame': 0x52,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x50: [
        function (_0x2e0d54, _0x3ecdb1, _0x21bff6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x21bff6, '__esModule', { 'value': !0x0 });
            var _0x25452c = _0x2e0d54('../constan' + 't/enums'), _0x27bdc3 = _0x2e0d54('../config/' + 'Config'), _0x44b999 = _0x2e0d54('../utils/M' + 'athUtil'), _0x5ab813 = _0x2e0d54('../BGame/B' + 'Game'), _0x130a3c = _0x2e0d54('../BGame/m' + 'gr/BUrlMgr'), _0x33334b = !0x1, _0x3e9038 = function () {
                    function _0x388f97() {
                    }
                    return _0x388f97['getSrc'] = function (_0x45d607) {
                        var _0x1ca8e4 = _0x27bdc3['default']['sound'][_0x45d607];
                        return _0x1ca8e4 ? '' + _0x1ca8e4 : null;
                    }, _0x388f97['playEffect'] = function (_0x590a90, _0x2eeff4, _0x3237a4) {
                        if (void 0x0 === _0x2eeff4 && (_0x2eeff4 = !0x1), void 0x0 === _0x3237a4 && (_0x3237a4 = !0x1), !_0x33334b && !Laya['SoundManag' + 'er']['soundMuted']) {
                            var _0x38704d = this['soundChann' + 'elMap'][_0x590a90];
                            if (_0x38704d && _0x2eeff4 && !_0x3237a4)
                                _0x38704d['isStopped'] && _0x38704d['resume']();
                            else {
                                var _0x455e99 = this['getSrc'](_0x590a90);
                                _0x455e99 && (_0x38704d = Laya['SoundManag' + 'er']['playSound'](_0x455e99, _0x2eeff4 ? 0x0 : 0x1), this['soundChann' + 'elMap'][_0x590a90] = _0x38704d);
                            }
                        }
                    }, _0x388f97['stopEffect'] = function (_0x21f328) {
                        if (!_0x33334b && !Laya['SoundManag' + 'er']['soundMuted']) {
                            var _0x47067c = this['soundChann' + 'elMap'][_0x21f328];
                            _0x47067c && (_0x47067c['isStopped'] || _0x47067c['pause']());
                        }
                    }, _0x388f97['soundMuted'] = function (_0xc71f5d) {
                        _0x33334b || (Laya['SoundManag' + 'er']['soundMuted'] = _0xc71f5d);
                    }, _0x388f97['initMusic'] = function (_0x42148d) {
                        if (_0x27bdc3['default']['platformTy' + 'pr'] != _0x25452c['PlatformTy' + 'pe']['web']) {
                            if (0x1 == _0x42148d) {
                                if (!this['m_mainMusi' + 'c']) {
                                    var _0x571b04 = _0x5ab813['default']['getGame']()['getSound']();
                                    this['m_mainMusi' + 'c'] = _0x571b04['createInne' + 'rAudioCont' + 'ext'](), this['m_mainMusi' + 'c']['src'] = _0x130a3c['default']['getMgr']()['getUrl']('res') + '/' + _0x27bdc3['default']['sound'][_0x25452c['SoundName']['BgStar']], this['m_mainMusi' + 'c']['volume'] = 0x1;
                                }
                            } else {
                                if (0x2 == _0x42148d) {
                                    if (!this['m_gameMusi' + 'c']) {
                                        var _0x571b04 = _0x5ab813['default']['getGame']()['getSound']();
                                        this['m_gameMusi' + 'c'] = _0x571b04['createInne' + 'rAudioCont' + 'ext'](), this['m_gameMusi' + 'c']['volume'] = 0x1;
                                    }
                                    this['m_gameMusi' + 'c']['src'] = _0x130a3c['default']['getMgr']()['getUrl']('res') + '/' + _0x27bdc3['default']['sound'][_0x44b999['default']['randomInSe' + 'ction'](_0x25452c['SoundName']['BiSai1'], _0x25452c['SoundName']['BiSai2'])];
                                }
                            }
                        }
                    }, _0x388f97['playMusic'] = function (_0x45865d) {
                        return _0x27bdc3['default']['platformTy' + 'pr'] == _0x25452c['PlatformTy' + 'pe']['web'] ? void (0x1 == _0x45865d ? Laya['SoundManag' + 'er']['playMusic'](_0x27bdc3['default']['sound'][_0x25452c['SoundName']['BgStar']]) : 0x2 == _0x45865d && Laya['SoundManag' + 'er']['playMusic'](_0x27bdc3['default']['sound'][_0x44b999['default']['randomInSe' + 'ction'](_0x25452c['SoundName']['BiSai1'], _0x25452c['SoundName']['BiSai2'])])) : void (0x1 == _0x45865d ? (this['m_gameMusi' + 'c'] && this['m_gameMusi' + 'c']['stop'](), this['m_mainMusi' + 'c'] && (this['m_mainMusi' + 'c']['play'](), this['m_mainMusi' + 'c']['loop'] = !0x0)) : 0x2 == _0x45865d && (this['m_mainMusi' + 'c'] && this['m_mainMusi' + 'c']['stop'](), this['m_gameMusi' + 'c'] && (this['m_gameMusi' + 'c']['play'](), this['m_gameMusi' + 'c']['loop'] = !0x0)));
                    }, _0x388f97['stopMusic'] = function () {
                        this['m_mainMusi' + 'c'] && this['m_mainMusi' + 'c']['stop'](), this['m_gameMusi' + 'c'] && this['m_gameMusi' + 'c']['stop']();
                    }, _0x388f97['musicMuted'] = function (_0xf212a) {
                        _0x33334b || (this['isMusicSto' + 'p'] = _0xf212a, this['isMusicSto' + 'p'] && Laya['SoundManag' + 'er']['stopMusic']());
                    }, _0x388f97['removeChan' + 'nel'] = function (_0x3c095e) {
                        _0x33334b || Laya['SoundManag' + 'er']['removeChan' + 'nel'](_0x3c095e);
                    }, _0x388f97['soundChann' + 'elMap'] = {}, _0x388f97['isMusicSto' + 'p'] = !0x1, _0x388f97['musicType'] = 0x0, _0x388f97;
                }();
            _0x21bff6['default'] = _0x3e9038;
        },
        {
            '../BGame/BGame': 0x3,
            '../BGame/mgr/BUrlMgr': 0x14,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x51: [
        function (_0x4e6e24, _0x1d020d, _0x3f028a) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3f028a, '__esModule', { 'value': !0x0 });
            var _0x404874 = _0x4e6e24('../scripts' + '/DialogLay' + 'outScript'), _0x1ed215 = _0x4e6e24('../compone' + 'nts/ToastD' + 'ialog'), _0x1aa89d = _0x4e6e24('./EventMan' + 'ager'), _0x5f2c69 = _0x4e6e24('../constan' + 't/enums'), _0x5f3ce6 = _0x4e6e24('../GameCon' + 'fig'), _0x41fa25 = _0x4e6e24('./Platform' + 'Manager'), _0x1f8787 = function () {
                    function _0x2dc906() {
                    }
                    return _0x2dc906['init'] = function () {
                        UIConfig['popupBgAlp' + 'ha'] = 0.85, Laya['Dialog']['manager']['popupEffec' + 't'] = this['popEffect'], Laya['Dialog']['manager']['popupEffec' + 'tHandler'] = new Laya['Handler'](this, this['popEffect']), Laya['Dialog']['manager']['closeEffec' + 't'] = this['closeEffec' + 't'], Laya['Dialog']['manager']['closeEffec' + 'tHandler'] = new Laya['Handler'](this, this['closeEffec' + 't']), this['dialogQueu' + 'e'] = [], this['currentSce' + 'ne'] = '', this['showingDia' + 'logs'] = [], this['createTipL' + 'ayer'](), this['initSystem' + 'OnShow']();
                    }, _0x2dc906['createTipL' + 'ayer'] = function () {
                        this['tipLayer'] = new Laya['Sprite'](), this['tipLayer']['width'] = _0x5f3ce6['default']['width'], this['tipLayer']['height'] = _0x5f3ce6['default']['height'], this['tipLayer']['pivot'](0.5 * _0x5f3ce6['default']['width'], 0.5 * _0x5f3ce6['default']['height'])['pos'](0.5 * Laya['stage']['width'], 0.5 * Laya['stage']['height']), this['tipLayer']['mouseEnabl' + 'ed'] = !0x1, this['tipLayer']['zOrder'] = 0x3e9, Laya['stage']['addChild'](this['tipLayer']);
                    }, _0x2dc906['closeEffec' + 't'] = function (_0x4c79e3) {
                        _0x4c79e3['_effectTwe' + 'en'] = Laya['Tween']['to'](_0x4c79e3, {
                            'scaleX': 0x0,
                            'scaleY': 0x0
                        }, 0x12c, Laya['Ease']['strongOut'], Laya['Handler']['create'](Laya['Dialog']['manager'], Laya['Dialog']['manager']['doClose'], [_0x4c79e3]), 0x0, !0x1, !0x1);
                    }, _0x2dc906['popEffect'] = function (_0x2f5465) {
                        _0x2f5465['scale'](0x1, 0x1), _0x2f5465['_effectTwe' + 'en'] = Laya['Tween']['from'](_0x2f5465, {
                            'scaleX': 0x1,
                            'scaleY': 1.1
                        }, 0x12c, Laya['Ease']['backOut'], Laya['Handler']['create'](Laya['Dialog']['manager'], Laya['Dialog']['manager']['doOpen'], [_0x2f5465]), 0x0, !0x1, !0x1);
                    }, _0x2dc906['_dialogLay' + 'out'] = function (_0x4de722) {
                        _0x4de722 instanceof _0x1ed215['default'] ? _0x4de722['isModal'] = !0x1 : _0x4de722['isModal'] = !0x0, _0x4de722['anchorX'] = 0.5, _0x4de722['anchorY'] = 0.5, _0x4de722['addCompone' + 'nt'](_0x404874['default']);
                    }, _0x2dc906['showDialog'] = function (_0x2b199d, _0x556756, _0x3c10ae) {
                        void 0x0 === _0x556756 && (_0x556756 = !0x0), void 0x0 === _0x3c10ae && (_0x3c10ae = !0x1), this['_dialogLay' + 'out'](_0x2b199d), _0x2b199d['isShowEffe' + 'ct'] = _0x556756, this['showingDia' + 'logs']['length'] > 0x0 && _0x3c10ae ? this['dialogQueu' + 'e']['push'](_0x2b199d) : (this['showingDia' + 'logs']['push'](_0x2b199d), Laya['Dialog']['manager']['open'](_0x2b199d, !0x1, _0x556756)), _0x1aa89d['default']['getInstanc' + 'e']()['emit'](_0x5f2c69['GameEvent']['ShowCloseD' + 'ialog'], {
                            'currentScene': this['currentSce' + 'ne'],
                            'showingDialogCount': this['showingDia' + 'logs']['length']
                        });
                    }, _0x2dc906['closeAllDi' + 'alog'] = function () {
                        for (; this['showingDia' + 'logs']['length'] > 0x0;) {
                            var _0x423d9f = this['showingDia' + 'logs'][0x0];
                            this['closeDialo' + 'g'](_0x423d9f);
                        }
                    }, _0x2dc906['closeDialo' + 'g'] = function (_0x4528ec) {
                        _0x4528ec && _0x4528ec['close']();
                        for (var _0x5cf776 = this['showingDia' + 'logs']['length'] - 0x1; _0x5cf776 >= 0x0; _0x5cf776--)
                            if (this['showingDia' + 'logs'][_0x5cf776] === _0x4528ec) {
                                this['showingDia' + 'logs']['splice'](_0x5cf776, 0x1);
                                break;
                            }
                        if (this['showingDia' + 'logs']['length'] < 0x1) {
                            var _0x1ec820 = this['dialogQueu' + 'e']['shift']();
                            _0x1ec820 && Laya['Dialog']['manager']['open'](_0x1ec820, !0x1, _0x1ec820['isShowEffe' + 'ct']);
                        }
                        _0x1aa89d['default']['getInstanc' + 'e']()['emit'](_0x5f2c69['GameEvent']['ShowCloseD' + 'ialog'], {
                            'currentScene': this['currentSce' + 'ne'],
                            'showingDialogCount': this['showingDia' + 'logs']['length']
                        });
                    }, _0x2dc906['switchScen' + 'e'] = function (_0x2b7a4a, _0x2a1235) {
                        void 0x0 === _0x2a1235 && (_0x2a1235 = null), this['currentSce' + 'ne'] = _0x2b7a4a, Laya['Scene']['open'](_0x2b7a4a, !0x0, null, _0x2a1235);
                    }, _0x2dc906['getCurrent' + 'Scene'] = function () {
                        return this['currentSce' + 'ne'];
                    }, _0x2dc906['getShowing' + 'DialogCoun' + 't'] = function () {
                        return this['showingDia' + 'logs']['length'];
                    }, _0x2dc906['showToast'] = function (_0x1ba5c9) {
                        var _0x12bcfd = new _0x1ed215['default'](_0x1ba5c9, function () {
                            _0x12bcfd['autoDestro' + 'yAtClosed'] = !0x0, _0x12bcfd['destroy'](!0x0);
                        });
                        this['tipLayer']['addChild'](_0x12bcfd), this['popEffect'](_0x12bcfd);
                    }, _0x2dc906['systemOnSh' + 'ow'] = function (_0x4676d9) {
                        _0x1aa89d['default']['getInstanc' + 'e']()['emit'](_0x5f2c69['GameEvent']['OnShow'], _0x4676d9);
                    }, _0x2dc906['initSystem' + 'OnShow'] = function () {
                        _0x41fa25['default']['platform']['onShow'](this['systemOnSh' + 'ow']);
                    }, _0x2dc906['showPartic' + 'le'] = function (_0x4b733e, _0x423ce4) {
                        void 0x0 === _0x423ce4 && (_0x423ce4 = null);
                        var _0x1fa7a1 = Laya['loader']['getRes'](_0x4b733e);
                        if (!_0x1fa7a1)
                            return null;
                        var _0x2533a4 = new Laya['Particle2D'](_0x1fa7a1);
                        return _0x2533a4['zOrder'] = 0xf, _0x423ce4 ? _0x423ce4['addChild'](_0x2533a4) : Laya['stage']['addChild'](_0x2533a4), _0x2533a4;
                    }, _0x2dc906['removePart' + 'icle'] = function (_0x11ddd8) {
                        _0x11ddd8 && _0x11ddd8['parent'] && (_0x11ddd8['emitter']['stop'](), _0x11ddd8['parent']['removeChil' + 'd'](_0x11ddd8));
                    }, _0x2dc906['showFloatL' + 'ayerItem'] = function () {
                    }, _0x2dc906['showFloatL' + 'ayer'] = function () {
                    }, _0x2dc906['addFloatLa' + 'yerItem'] = function () {
                    }, _0x2dc906;
                }();
            _0x3f028a['default'] = _0x1f8787;
        },
        {
            '../GameConfig': 0x22,
            '../components/ToastDialog': 0x39,
            '../constant/enums': 0x3d,
            '../scripts/DialogLayoutScript': 0x57,
            './EventManager': 0x4b,
            './PlatformManager': 0x4e
        }
    ],
    0x52: [
        function (_0x35f520, _0x2a75ff, _0x50ce5e) {
            'use strict';
            Object['defineProp' + 'erty'](_0x50ce5e, '__esModule', { 'value': !0x0 });
            var _0x32ac98 = _0x35f520('../config/' + 'Config'), _0xa7c1a6 = _0x35f520('../data/Ro' + 'leInfo'), _0x40e87e = _0x35f520('../utils/M' + 'athUtil'), _0x122f66 = _0x35f520('../config/' + 'CarDataCon' + 'fig'), _0x4ae8c6 = _0x35f520('../constan' + 't/enums'), _0x29f47e = _0x35f520('../constan' + 't/texts'), _0x3f87b1 = _0x35f520('../manager' + '/EventMana' + 'ger'), _0x5d103a = _0x35f520('../manager' + '/HttpManag' + 'er'), _0x381d1d = _0x35f520('../manager' + '/UIManager'), _0x25caea = _0x35f520('../manager' + '/ExportGam' + 'eManager'), _0x592f17 = _0x35f520('../BGame/m' + 'gr/BUrlMgr'), _0x474613 = _0x35f520('../CGame/c' + 'ljdSdk'), _0x5571e0 = _0x35f520('../compone' + 'nts/GameCe' + 'ntrePanel'), _0x4c18a7 = function () {
                    function _0x35bf9f() {
                        this['m_selectba' + 'nnerList'] = [], this['m_bannerTi' + 'meOut'] = 0x0, this['isInitVide' + 'oAd'] = !0x1, this['_video'] = null, this['_callback'] = null, this['_dotType'] = null, this['starAllNum'] = 0x0;
                    }
                    return Object['defineProp' + 'erty'](_0x35bf9f, 'I', {
                        'get': function () {
                            return _0x35bf9f['instance'] = _0x35bf9f['instance'] || new _0x35bf9f();
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x35bf9f['prototype']['init'] = function (_0x52df1b) {
                        this['wx'] = _0x52df1b, this['isAuthoriz' + 'e'] = !0x1;
                    }, _0x35bf9f['prototype']['isWx'] = function () {
                        return ![];
                    }, _0x35bf9f['prototype']['isIphoneX'] = function () {
                        return ![];
                    }, _0x35bf9f['prototype']['authorize'] = function () {
                    }, _0x35bf9f['prototype']['getUserInf' + 'o'] = function (_0x4680d1, _0x4dcd2e) {
                        void 0x0 === _0x4dcd2e && (_0x4dcd2e = null), this['wx']['getUserInf' + 'o']({
                            'withCredentials': !0x1,
                            'lang': 'zh_CN',
                            'success': function (_0x501cd7) {
                                _0x32ac98['default']['userInfo'] = _0x501cd7, _0x32ac98['default']['userInfo']['encryptedD' + 'ata'] = _0x501cd7['encryptedD' + 'ata'], _0x32ac98['default']['userInfo']['iv'] = _0x501cd7['iv'], _0x4680d1 && _0x4680d1['runWith'](_0x501cd7);
                            },
                            'fail': function () {
                                _0x4dcd2e && _0x4dcd2e['run']();
                            }
                        });
                    }, _0x35bf9f['prototype']['wxAccredit'] = function (_0x5a80d0, _0xec1cfe) {
                        if (void 0x0 === _0xec1cfe && (_0xec1cfe = !0x0), wx['createUser' + 'InfoButton']) {
                            console['log']('创建授权按钮');
                            var _0x1cf589 = wx['createUser' + 'InfoButton']({
                                'type': 'image',
                                'image': _0x592f17['default']['getMgr']()['getUrl']('res') + ('/resources' + '/kong.png'),
                                'style': {
                                    'left': 0x0,
                                    'top': 0x0,
                                    'width': Laya['stage']['width'],
                                    'height': Laya['stage']['height']
                                }
                            });
                            _0x1cf589['onTap'](function (_0x396204) {
                                console['log']('授权按钮被点击', _0x396204), _0x396204['userInfo'] ? (_0x1cf589['hide'](), _0x35bf9f['I']['isAuthoriz' + 'e'] = !0x0, _0x32ac98['default']['userInfo'] = _0x396204['userInfo'], _0x32ac98['default']['userInfo']['encryptedD' + 'ata'] = _0x396204['encryptedD' + 'ata'], _0x32ac98['default']['userInfo']['iv'] = _0x396204['iv'], _0x5a80d0 ? _0x5a80d0(_0x32ac98['default']['userInfo']) : null) : (_0xec1cfe ? _0x1cf589['hide']() : null, _0x5a80d0 ? _0x5a80d0(null) : null);
                            }['bind'](this));
                        } else
                            console['log']('旧版本'), _0x5a80d0 ? _0x5a80d0(null) : null;
                    }, _0x35bf9f['prototype']['onHide'] = function (_0x4655f7) {
                        this['wx']['onHide'](function () {
                            _0x122f66['default']['isShowGame'] = !0x1, _0x122f66['default']['hideTimer'] = _0x40e87e['default']['getTimesta' + 'mp'](), _0x4655f7 && _0x4655f7['run']();
                        });
                    }, _0x35bf9f['prototype']['onShow'] = function (_0x286c75) {
                        this['wx']['onShow'](function (_0x55ab9c) {
                            switch (_0x122f66['default']['isShowGame'] = !0x0, _0x122f66['default']['showTimer'] = _0x40e87e['default']['getTimesta' + 'mp'](), console['log']('离开游戏的时间' + (_0x122f66['default']['showTimer'] - _0x122f66['default']['hideTimer']) / 0x3e8), _0x122f66['default']['isKefuRewa' + 'rd'] && _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['kefuReward'], null), _0x122f66['default']['shareType']) {
                            case _0x4ae8c6['shareType']['gameOverDo' + 'uble']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['gameOverDo' + 'uble'], null);
                                break;
                            case _0x4ae8c6['shareType']['gameOverJu' + 'mp']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['jump'], null);
                                break;
                            case _0x4ae8c6['shareType']['goldLack']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['getGold'], null);
                                break;
                            case _0x4ae8c6['shareType']['offLine']:
                                break;
                            case _0x4ae8c6['shareType']['powerLack']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['getPower'], null);
                                break;
                            case _0x4ae8c6['shareType']['sign']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['sign'], null);
                                break;
                            case _0x4ae8c6['shareType']['danqi']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['danqi'], null);
                                break;
                            case _0x4ae8c6['shareType']['glodGift']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['glodGift'], null);
                                break;
                            case _0x4ae8c6['shareType']['ondemo']:
                                _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['freeDemo'], null);
                            }
                            _0x286c75 && _0x286c75['runWith'](_0x55ab9c);
                        });
                    }, _0x35bf9f['prototype']['vibrateSho' + 'rt'] = function () {
                    }, _0x35bf9f['prototype']['checkIsUse' + 'rAdvisedTo' + 'Rest'] = function (_0x614b0a, _0x100fe3, _0x46d607) {
                        void 0x0 === _0x100fe3 && (_0x100fe3 = null), void 0x0 === _0x46d607 && (_0x46d607 = null), this['wx']['checkIsUse' + 'rAdvisedTo' + 'Rest']({
                            'todayPlayedTime': _0x614b0a,
                            'success': function (_0x5856e0) {
                                _0x100fe3 && _0x100fe3['runWith'](_0x5856e0);
                            },
                            'fail': function () {
                                _0x46d607 && _0x46d607['run']();
                            }
                        });
                    }, _0x35bf9f['prototype']['login'] = function (_0xbd7add, _0x21e636, _0x3ab4ae) {
                        if (![]) {
                        } else
                            _0x5d103a['default']['I']['send']('get', _0x32ac98['default']['yzUrl'] + ('game/login' + '?token=666' + '666662&inv' + 'iteCode=') + _0xbd7add + ('&anonymous' + 'Code=&ut=3' + '&version=') + _0x32ac98['default']['version'] + ('&appid=jpm' + 't-h5'), Laya['Handler']['create'](self, function (_0x175dd2) {
                                console['log']('code换取id成功' + ':' + JSON['stringify'](_0x175dd2)), _0x32ac98['default']['secret'] = _0x175dd2['secret'], _0x32ac98['default']['uid'] = _0x175dd2['uid'], _0x21e636 && _0x21e636['runWith'](_0x175dd2);
                            }), Laya['Handler']['create'](self, function (_0x2de94f) {
                                console['log']('code换取id失败' + ':', _0x2de94f);
                            }));
                    }, _0x35bf9f['prototype']['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't'] = function (_0x23ae6b, _0xc968d5) {
                    }, _0x35bf9f['prototype']['openGameCe' + 'ntre'] = function (_0x2ea416) {
                        _0x2ea416 && _0x3f87b1['default']['getInstanc' + 'e']()['emit'](_0x4ae8c6['GameEvent']['gameContre'], null), _0x381d1d['default']['showDialog'](new _0x5571e0['default'](0x2));
                    }, _0x35bf9f['prototype']['createUser' + 'InfoButton'] = function (_0x22c63a, _0xc2d8cb, _0x5c36d6, _0x5490c9, _0x638ac2, _0x3c9b47, _0x33dec1) {
                        void 0x0 === _0x3c9b47 && (_0x3c9b47 = !0x1), void 0x0 === _0x33dec1 && (_0x33dec1 = 'zh_CN');
                        var _0x2d0170 = this['wx']['createUser' + 'InfoButton']({
                            'type': _0x22c63a,
                            'text': _0xc2d8cb,
                            'imgUrl': _0x5c36d6,
                            'style': _0x5490c9,
                            'withCredentials': _0x3c9b47,
                            'lang': _0x33dec1
                        });
                        _0x2d0170['onTap'](function (_0x2963b2) {
                            _0x638ac2 && _0x638ac2['runWith'](_0x2963b2), _0x2d0170['destroy']();
                        }), _0x2d0170['show']();
                    }, _0x35bf9f['prototype']['showShareM' + 'enu'] = function (_0x54c8d1, _0x506cbf, _0x558639) {
                        void 0x0 === _0x54c8d1 && (_0x54c8d1 = !0x1), void 0x0 === _0x506cbf && (_0x506cbf = null), void 0x0 === _0x558639 && (_0x558639 = null), this['wx']['showShareM' + 'enu']({ 'withShareTicket': _0x54c8d1 });
                    }, _0x35bf9f['prototype']['hideShareM' + 'enu'] = function (_0x8fe9ff, _0x5143e4, _0x9a4f18) {
                        void 0x0 === _0x8fe9ff && (_0x8fe9ff = null), void 0x0 === _0x5143e4 && (_0x5143e4 = null), void 0x0 === _0x9a4f18 && (_0x9a4f18 = null), this['wx']['hideShareM' + 'enu']({
                            'success': function () {
                                _0x8fe9ff && _0x8fe9ff['run']();
                            },
                            'fail': function () {
                                _0x5143e4 && _0x5143e4['run']();
                            },
                            'complete': function () {
                                _0x9a4f18 && _0x9a4f18['run']();
                            }
                        });
                    }, _0x35bf9f['prototype']['onShareApp' + 'Message'] = function (_0x2d0ff9, _0xb45649, _0x32fe68) {
                    }, _0x35bf9f['prototype']['onShare'] = function (_0x4c58ca) {
                    }, _0x35bf9f['prototype']['shareAppMe' + 'ssage'] = function (_0x17c18b, _0x15de01, _0x194f39, _0x384bda) {
                    }, _0x35bf9f['prototype']['getLaunchO' + 'ptionsSync'] = function () {
                    }, _0x35bf9f['prototype']['navigateTo' + 'MiniProgra' + 'm'] = function (_0x457c02, _0x47dbb6, _0x19c57d, _0x58f027) {
                    }, _0x35bf9f['prototype']['destroyBan' + 'nerAd'] = function () {
                    }, _0x35bf9f['prototype']['initBanner' + 'Ad'] = function () {
                    }, _0x35bf9f['prototype']['showBanner' + 'Ad'] = function (_0x2d703f, _0x2c2052, _0x3f8d51) {
                    }, _0x35bf9f['prototype']['delayShowB' + 'annerAd'] = function () {
                        console['log']('延迟显示广告'), this['m_bannerAd']['show']();
                    }, _0x35bf9f['prototype']['hideBanner' + 'Ad'] = function () {
                        Laya['timer']['clear'](this, this['delayShowB' + 'annerAd']), this['m_bannerAd'] && this['m_bannerAd']['hide']();
                    }, _0x35bf9f['prototype']['getBannerH' + 'eight'] = function (_0x759f49) {
                        return Math['floor'](Laya['stage']['height'] / this['systemInfo']['screenHeig' + 'ht'] * _0x759f49);
                    }, _0x35bf9f['prototype']['createBann' + 'er'] = function (_0x4023e7, _0xac3e9d) {
                        var _0x11823c = this, _0x119d28 = this, _0x438819 = 0x12c, _0x35fc91 = (this['systemInfo']['screenWidt' + 'h'] / 0x2, this['wx']['createBann' + 'erAd']({
                                'adUnitId': 'adunit-e98' + 'b081db89ba' + 'd1b',
                                'style': {
                                    'left': (this['systemInfo']['screenHeig' + 'ht'] - _0x438819) / 0x2,
                                    'top': this['systemInfo']['screenHeig' + 'ht'],
                                    'width': _0x438819
                                }
                            }));
                        this['m_bannerTi' + 'meOut']++, _0x4023e7 && (console['log']('createBann' + 'er', _0x4023e7, '\x20', _0xac3e9d), this['m_bannerAd'] = _0x35fc91), _0xac3e9d && _0x35fc91 && _0x35fc91['show'](), _0x35fc91['onError'](function (_0xc01265) {
                            console['log']('创建广告失败', _0x119d28['m_bannerLi' + 'st']['length']);
                        }), _0x35fc91['onResize'](function (_0xf9cc0c) {
                            _0x35fc91['style']['top'] = _0x11823c['systemInfo']['screenHeig' + 'ht'] - _0xf9cc0c['height'], _0x35fc91['style']['height'] = _0xf9cc0c['height'], _0x35fc91['style']['left'] = (_0x11823c['systemInfo']['screenWidt' + 'h'] - _0xf9cc0c['width']) / 0x2, _0x119d28['m_bannerLi' + 'st']['push'](_0x35fc91), _0x119d28['m_bannerLi' + 'st']['length'] >= 0x5 && console['log']('创建广告完成！'), console['log']('创建广告成功', _0x119d28['m_bannerLi' + 'st']['length']);
                        });
                    }, _0x35bf9f['prototype']['showSelect' + 'BannerAd'] = function (_0x2d68d6) {
                    }, _0x35bf9f['prototype']['selectCrea' + 'teBanner'] = function (_0x5b0c02, _0x23d8b5) {
                        var _0x36aace = this, _0xdd2a80 = this, _0xd2dbc4 = 0x12c, _0x1f865e = (this['systemInfo']['screenWidt' + 'h'] / 0x2, this['wx']['createBann' + 'erAd']({
                                'adUnitId': 'adunit-e98' + 'b081db89ba' + 'd1b',
                                'style': {
                                    'left': (this['systemInfo']['screenHeig' + 'ht'] - _0xd2dbc4) / 0x2,
                                    'top': this['systemInfo']['screenHeig' + 'ht'],
                                    'width': _0xd2dbc4
                                }
                            }));
                        _0x5b0c02 && _0x1f865e && (this['m_selectBa' + 'nner'] = _0x1f865e, _0x1f865e['show']()), _0x1f865e['onError'](function (_0x55d476) {
                            console['log']('选择界面创建广告完成' + '！', _0xdd2a80['m_selectba' + 'nnerList']['length']);
                        }), _0x1f865e['onResize'](function (_0x1583ea) {
                            _0x1f865e['style']['top'] = _0x36aace['systemInfo']['screenHeig' + 'ht'] - _0x1583ea['height'], _0x1f865e['style']['height'] = _0x1583ea['height'], _0x1f865e['style']['left'] = _0x23d8b5, _0xdd2a80['m_selectba' + 'nnerList']['push'](_0x1f865e), _0xdd2a80['m_selectba' + 'nnerList']['length'] >= 0x2 && console['log']('选择界面创建广告完成' + '！'), console['log']('选择界面创建广告完成' + '！', _0xdd2a80['m_selectba' + 'nnerList']['length']);
                        });
                    }, _0x35bf9f['prototype']['hideSelect' + 'BannerAd'] = function () {
                        Laya['timer']['clear'](this, this['delayShowB' + 'annerAd']), this['m_selectBa' + 'nner'] && this['m_selectBa' + 'nner']['hide']();
                    }, _0x35bf9f['prototype']['showVideoA' + 'd'] = function (_0x5645d1, _0x421035) {
                    }, _0x35bf9f['prototype']['showModal'] = function (_0x13ca42, _0x501fde) {
                    }, _0x35bf9f['prototype']['showToast'] = function (_0x5b35f6) {
                        wx['showToast']({
                            'title': _0x5b35f6,
                            'icon': 'none',
                            'image': '',
                            'duration': 0x5dc,
                            'success': function () {
                            },
                            'fail': function () {
                            },
                            'complete': function () {
                            }
                        });
                    }, _0x35bf9f['prototype']['setUserClo' + 'udStorage'] = function () {
                        var _0x492c27 = this['starAll'](), _0x5c57ba = _0xa7c1a6['default']['CustomsDat' + 'a']['length'], _0x5756ac = 0x2710 * _0x5c57ba + _0x492c27, _0x4f3b42 = [{
                                    'key': 'score',
                                    'value': '' + _0x5756ac
                                }];
                        this['setCloudSt' + 'orage'](_0x4f3b42);
                    }, _0x35bf9f['prototype']['starAll'] = function () {
                        this['starAllNum'] = 0x0;
                        for (var _0x2375fc = 0x0; _0x2375fc < _0xa7c1a6['default']['CustomsDat' + 'a']['length']; _0x2375fc++) {
                            var _0x1acbc4 = _0xa7c1a6['default']['CustomsDat' + 'a'][_0x2375fc];
                            _0x1acbc4['star_1'] && this['starAllNum']++, _0x1acbc4['star_2'] && this['starAllNum']++, _0x1acbc4['star_3'] && this['starAllNum']++;
                        }
                        return this['starAllNum'];
                    }, _0x35bf9f['prototype']['setCloudSt' + 'orage'] = function (_0x286a58) {
                    }, _0x35bf9f;
                }();
            _0x50ce5e['MiniGame'] = _0x4c18a7;
        },
        {
            '../BGame/mgr/BUrlMgr': 0x14,
            '../CGame/cljdSdk': 0x19,
            '../components/GameCentrePanel': 0x28,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../constant/texts': 0x3e,
            '../data/RoleInfo': 0x3f,
            '../manager/EventManager': 0x4b,
            '../manager/ExportGameManager': 0x4c,
            '../manager/HttpManager': 0x4d,
            '../manager/UIManager': 0x51,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x53: [
        function (_0x1dfb05, _0x36a4db, _0x3e07a4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3e07a4, '__esModule', { 'value': !0x0 });
            var _0x45d1bc = function () {
                function _0x22f3a2() {
                    this['name'] = 'web';
                }
                return _0x22f3a2['prototype']['showWarnin' + 'g'] = function (_0x282b8a) {
                }, _0x22f3a2['prototype']['request'] = function (_0x540585) {
                    var _0x447d38 = this;
                    return new Promise(function (_0x1fc068, _0x3355fc) {
                        var _0x2c2d39 = new Laya['HttpReques' + 't']();
                        _0x2c2d39['http']['timeout'] = 0x1388, _0x2c2d39['once'](Laya['Event']['COMPLETE'], _0x447d38, function (_0x23917a) {
                            _0x1fc068(_0x23917a);
                        }), _0x2c2d39['once'](Laya['Event']['ERROR'], _0x447d38, function (_0xab4e05) {
                            _0x3355fc(_0xab4e05);
                        }), _0x2c2d39['send'](_0x540585['url'], _0x540585['data'], _0x540585['method'], 'json', [
                            'Content-Ty' + 'pe',
                            'applicatio' + 'n/json'
                        ]);
                    });
                }, _0x22f3a2['prototype']['isWx'] = function () {
                    return !0x1;
                }, _0x22f3a2['prototype']['showToast'] = function (_0x31c06f) {
                }, _0x22f3a2['prototype']['registerUp' + 'dateEvents'] = function () {
                }, _0x22f3a2['prototype']['getLaunchO' + 'ptionsSync'] = function () {
                }, _0x22f3a2['prototype']['navigateTo' + 'MiniProgra' + 'm'] = function (_0x272fbd) {
                }, _0x22f3a2['prototype']['onShow'] = function (_0xfa6747) {
                }, _0x22f3a2['prototype']['showShareM' + 'odal'] = function (_0x3ab458, _0x247936, _0x618338) {
                }, _0x22f3a2['prototype']['setUserClo' + 'udStorage'] = function (_0x10a6b9) {
                }, _0x22f3a2['prototype']['postMessag' + 'e'] = function (_0x2231a0) {
                }, _0x22f3a2['prototype']['openCustom' + 'erServiceC' + 'onversatio' + 'n'] = function (_0x230527) {
                }, _0x22f3a2['prototype']['vibrate'] = function (_0x59436f, _0x3e8d92) {
                }, _0x22f3a2;
            }();
            _0x3e07a4['default'] = _0x45d1bc;
        },
        {}
    ],
    0x54: [
        function (_0x1250ad, _0x3ec07e, _0x33173c) {
            'use strict';
            Object['defineProp' + 'erty'](_0x33173c, '__esModule', { 'value': !0x0 });
            var _0x1f48b1 = _0x1250ad('../constan' + 't/enums'), _0x6bfc3a = function () {
                    function _0x159759() {
                        this['name'] = 'wxgame';
                    }
                    return _0x159759['prototype']['showWarnin' + 'g'] = function (_0x4270d1) {
                        _0x4270d1 === _0x1f48b1['ErrorCode']['WXVersionT' + 'ooOld'] ? wx['showToast']({
                            'title': '为了更好的游戏体验，' + '建议您升级微信版本',
                            'icon': 'none'
                        }) : _0x4270d1 === _0x1f48b1['ErrorCode']['ExitMiniGa' + 'me'] ? wx['showModal']({
                            'title': '温馨提示',
                            'content': '配置文件加载失败，请' + '重新启动游戏',
                            'showCancel': !0x1,
                            'success': function (_0xc13c6) {
                                _0xc13c6['confirm'] && wx['exitMiniPr' + 'ogram']();
                            }
                        }) : _0x4270d1 === _0x1f48b1['ErrorCode']['TestExit'] && wx['showModal']({
                            'title': '温馨提示',
                            'content': '已清空数据，请重新启' + '动游戏',
                            'showCancel': !0x1,
                            'success': function (_0x149271) {
                                _0x149271['confirm'] && wx['exitMiniPr' + 'ogram']();
                            }
                        });
                    }, _0x159759['prototype']['showShareM' + 'odal'] = function (_0x4b06be, _0x10f156, _0x56077c) {
                        wx['showModal']({
                            'title': '系统提示',
                            'content': _0x4b06be,
                            'showCancel': !0x0,
                            'confirmText': '分享到群',
                            'success': function (_0x3fe707) {
                                _0x3fe707 && _0x3fe707['confirm'] === !0x0 ? _0x10f156 && _0x10f156() : _0x3fe707 && _0x3fe707['cancel'] === !0x0 && _0x56077c && _0x56077c();
                            }
                        });
                    }, _0x159759['prototype']['request'] = function (_0x36f13b) {
                        return new Promise(function (_0x16f7fc, _0x572694) {
                            wx['request']({
                                'url': _0x36f13b['url'],
                                'data': _0x36f13b['data'],
                                'header': _0x36f13b['header'],
                                'method': _0x36f13b['method'],
                                'dataType': _0x36f13b['dataType'] || 'json',
                                'success': function (_0x2dbf36) {
                                    return _0x16f7fc(_0x2dbf36['data']);
                                },
                                'fail': function () {
                                },
                                'complete': function () {
                                }
                            });
                        });
                    }, _0x159759['prototype']['isWx'] = function () {
                        return !0x0;
                    }, _0x159759['prototype']['showToast'] = function (_0x1cbda2) {
                        wx['showToast']({
                            'title': _0x1cbda2,
                            'icon': 'none'
                        });
                    }, _0x159759['prototype']['registerUp' + 'dateEvents'] = function () {
                    }, _0x159759['prototype']['getLaunchO' + 'ptionsSync'] = function () {
                        return wx['getLaunchO' + 'ptionsSync']();
                    }, _0x159759['prototype']['navigateTo' + 'MiniProgra' + 'm'] = function (_0x511b8e) {
                        return 'function' == typeof wx['navigateTo' + 'MiniProgra' + 'm'] ? wx['navigateTo' + 'MiniProgra' + 'm'](_0x511b8e) : void 0x0;
                    }, _0x159759['prototype']['onShow'] = function (_0x15ecb7) {
                        wx['onShow'](_0x15ecb7);
                    }, _0x159759['prototype']['setUserClo' + 'udStorage'] = function (_0xb23533) {
                        wx['setUserClo' + 'udStorage'](_0xb23533);
                    }, _0x159759['prototype']['postMessag' + 'e'] = function (_0x2f7226) {
                        if (wx && wx['getOpenDat' + 'aContext']) {
                            var _0x5716b9 = wx['getOpenDat' + 'aContext']();
                            _0x5716b9['postMessag' + 'e'](_0x2f7226);
                        }
                    }, _0x159759['prototype']['openCustom' + 'erServiceC' + 'onversatio' + 'n'] = function (_0x19adc9) {
                        wx['openCustom' + 'erServiceC' + 'onversatio' + 'n']({
                            'sessionFrom': 'CustomerSe' + 'rvice',
                            'showMessageCard': !0x0,
                            'sendMessageTitle': _0x19adc9['imageTitle'],
                            'sendMessagePath': 'pages/inde' + 'x/index?fr' + 'om=wxcusto' + 'mer&key=1',
                            'sendMessageImg': _0x19adc9['imagePath'],
                            'success': function () {
                                _0x19adc9 && _0x19adc9['success'] && _0x19adc9['success']();
                            },
                            'fail': function () {
                                _0x19adc9 && _0x19adc9['fail'] && _0x19adc9['fail']();
                            }
                        });
                    }, _0x159759['prototype']['vibrate'] = function (_0x312699, _0x5c2346) {
                        _0x312699 ? wx['vibrateLon' + 'g']({
                            'success': function () {
                                _0x5c2346 && _0x5c2346({ 'success': !0x0 });
                            },
                            'fail': function () {
                                _0x5c2346 && _0x5c2346({ 'success': !0x1 });
                            }
                        }) : wx['vibrateSho' + 'rt']({
                            'success': function () {
                                _0x5c2346 && _0x5c2346({ 'success': !0x0 });
                            },
                            'fail': function () {
                                _0x5c2346 && _0x5c2346({ 'success': !0x1 });
                            }
                        });
                    }, _0x159759;
                }();
            _0x33173c['default'] = _0x6bfc3a;
        },
        { '../constant/enums': 0x3d }
    ],
    0x55: [
        function (_0xfdeef5, _0x151b9b, _0x22cc86) {
            'use strict';
            var _0x34015c = this && this['__extends'] || function () {
                    var _0x376f7a = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x35c87a, _0x5365c2) {
                        _0x35c87a['__proto__'] = _0x5365c2;
                    } || function (_0xefcd0c, _0x351018) {
                        for (var _0x37ef9a in _0x351018)
                            _0x351018['hasOwnProp' + 'erty'](_0x37ef9a) && (_0xefcd0c[_0x37ef9a] = _0x351018[_0x37ef9a]);
                    };
                    return function (_0x22f91a, _0x4fe580) {
                        function _0x4308c4() {
                            this['constructo' + 'r'] = _0x22f91a;
                        }
                        _0x376f7a(_0x22f91a, _0x4fe580), _0x22f91a['prototype'] = null === _0x4fe580 ? Object['create'](_0x4fe580) : (_0x4308c4['prototype'] = _0x4fe580['prototype'], new _0x4308c4());
                    };
                }(), _0x5f412a = this && this['__awaiter'] || function (_0xed173a, _0x245c26, _0x5a8b91, _0x5ac3f9) {
                    return new (_0x5a8b91 || (_0x5a8b91 = Promise))(function (_0x3de39b, _0x501d20) {
                        function _0x1a5819(_0xae79c6) {
                            try {
                                _0x23b485(_0x5ac3f9['next'](_0xae79c6));
                            } catch (_0x9740bd) {
                                _0x501d20(_0x9740bd);
                            }
                        }
                        function _0x124a5b(_0xbdbe7) {
                            try {
                                _0x23b485(_0x5ac3f9['throw'](_0xbdbe7));
                            } catch (_0x2ac005) {
                                _0x501d20(_0x2ac005);
                            }
                        }
                        function _0x23b485(_0x71a15b) {
                            _0x71a15b['done'] ? _0x3de39b(_0x71a15b['value']) : new _0x5a8b91(function (_0x1ea1ff) {
                                _0x1ea1ff(_0x71a15b['value']);
                            })['then'](_0x1a5819, _0x124a5b);
                        }
                        _0x23b485((_0x5ac3f9 = _0x5ac3f9['apply'](_0xed173a, _0x245c26 || []))['next']());
                    });
                }, _0x4cd3d7 = this && this['__generato' + 'r'] || function (_0x16a0bc, _0x12866c) {
                    function _0x42e0b9(_0x377b47) {
                        return function (_0xb7fb49) {
                            return _0x2e16a3([
                                _0x377b47,
                                _0xb7fb49
                            ]);
                        };
                    }
                    function _0x2e16a3(_0x34c52d) {
                        if (_0x1215d9)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x3bfde6;)
                            try {
                                if (_0x1215d9 = 0x1, _0x25f514 && (_0x463a39 = 0x2 & _0x34c52d[0x0] ? _0x25f514['return'] : _0x34c52d[0x0] ? _0x25f514['throw'] || ((_0x463a39 = _0x25f514['return']) && _0x463a39['call'](_0x25f514), 0x0) : _0x25f514['next']) && !(_0x463a39 = _0x463a39['call'](_0x25f514, _0x34c52d[0x1]))['done'])
                                    return _0x463a39;
                                switch (_0x25f514 = 0x0, _0x463a39 && (_0x34c52d = [
                                        0x2 & _0x34c52d[0x0],
                                        _0x463a39['value']
                                    ]), _0x34c52d[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x463a39 = _0x34c52d;
                                    break;
                                case 0x4:
                                    return _0x3bfde6['label']++, {
                                        'value': _0x34c52d[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x3bfde6['label']++, _0x25f514 = _0x34c52d[0x1], _0x34c52d = [0x0];
                                    continue;
                                case 0x7:
                                    _0x34c52d = _0x3bfde6['ops']['pop'](), _0x3bfde6['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x463a39 = _0x3bfde6['trys'], !(_0x463a39 = _0x463a39['length'] > 0x0 && _0x463a39[_0x463a39['length'] - 0x1]) && (0x6 === _0x34c52d[0x0] || 0x2 === _0x34c52d[0x0])) {
                                        _0x3bfde6 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x34c52d[0x0] && (!_0x463a39 || _0x34c52d[0x1] > _0x463a39[0x0] && _0x34c52d[0x1] < _0x463a39[0x3])) {
                                        _0x3bfde6['label'] = _0x34c52d[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x34c52d[0x0] && _0x3bfde6['label'] < _0x463a39[0x1]) {
                                        _0x3bfde6['label'] = _0x463a39[0x1], _0x463a39 = _0x34c52d;
                                        break;
                                    }
                                    if (_0x463a39 && _0x3bfde6['label'] < _0x463a39[0x2]) {
                                        _0x3bfde6['label'] = _0x463a39[0x2], _0x3bfde6['ops']['push'](_0x34c52d);
                                        break;
                                    }
                                    _0x463a39[0x2] && _0x3bfde6['ops']['pop'](), _0x3bfde6['trys']['pop']();
                                    continue;
                                }
                                _0x34c52d = _0x12866c['call'](_0x16a0bc, _0x3bfde6);
                            } catch (_0x4f7a6d) {
                                _0x34c52d = [
                                    0x6,
                                    _0x4f7a6d
                                ], _0x25f514 = 0x0;
                            } finally {
                                _0x1215d9 = _0x463a39 = 0x0;
                            }
                        if (0x5 & _0x34c52d[0x0])
                            throw _0x34c52d[0x1];
                        return {
                            'value': _0x34c52d[0x0] ? _0x34c52d[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x1215d9, _0x25f514, _0x463a39, _0xd6030, _0x3bfde6 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x463a39[0x0])
                                    throw _0x463a39[0x1];
                                return _0x463a39[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0xd6030 = {
                        'next': _0x42e0b9(0x0),
                        'throw': _0x42e0b9(0x1),
                        'return': _0x42e0b9(0x2)
                    }, 'function' == typeof Symbol && (_0xd6030[Symbol['iterator']] = function () {
                        return this;
                    }), _0xd6030;
                };
            Object['defineProp' + 'erty'](_0x22cc86, '__esModule', { 'value': !0x0 });
            var _0x5eed39 = _0xfdeef5('../ui/laya' + 'MaxUI'), _0x3e61b4 = _0xfdeef5('../manager' + '/ExportGam' + 'eManager'), _0x4a053d = _0xfdeef5('../config/' + 'Config'), _0x3a0639 = _0xfdeef5('../constan' + 't/enums'), _0x4d0b08 = _0xfdeef5('../BGame/B' + 'Game'), _0x298591 = _0xfdeef5('../utils/M' + 'athUtil'), _0x259b0c = _0xfdeef5('../item/Ex' + 'portItem'), _0x3bdb33 = function (_0x34b56b) {
                    function _0x2b0cd4() {
                        var _0xe9d1e1 = _0x34b56b['call'](this) || this;
                        return _0xe9d1e1['type'] = 0x1, _0xe9d1e1;
                    }
                    return _0x34015c(_0x2b0cd4, _0x34b56b), _0x2b0cd4['addStage'] = function (_0x2365eb, _0xbcd387, _0x4fde6d, _0x373272, _0x465bc7) {
                        var _0x15ab61 = new _0x2b0cd4();
                        _0x15ab61['exiptType'] = _0xbcd387, _0x15ab61['type'] = _0x465bc7, _0x15ab61['x'] = _0x4fde6d, _0x15ab61['y'] = _0x373272, _0x15ab61['exportPre'] = _0x15ab61, _0x2365eb['addChild'](_0x15ab61['exportPre']);
                    }, _0x2b0cd4['prototype']['onAwake'] = function () {
                        this['init']();
                    }, _0x2b0cd4['prototype']['init'] = function () {
                        return _0x5f412a(this, void 0x0, void 0x0, function () {
                            var _0x160050, _0x2297ca, _0x1dbd3f, _0x471909, _0x2256ae, _0x471c18, _0x471909, _0x2256ae, _0x471c18;
                            return _0x4cd3d7(this, function (_0xe69e3b) {
                                switch (_0xe69e3b['label']) {
                                case 0x0:
                                    return _0x4d0b08['default']['getGame']()['getPlatfor' + 'm']()['getId']() != _0x3a0639['PlatformTy' + 'pe']['wx'] ? [0x2] : (this['list_home']['visible'] = !0x1, this['list_selec' + 't']['visible'] = !0x1, 0x1 == this['type'] ? this['list_home']['visible'] = !0x0 : this['list_selec' + 't']['visible'] = !0x0, _0x160050 = [], _0x1dbd3f = this, [
                                        0x4,
                                        _0x3e61b4['default']['Instance']()['getFlow']('对联')
                                    ]);
                                case 0x1:
                                    if (_0x1dbd3f['ExportData'] = _0xe69e3b['sent'](), 0x1 == this['type']) {
                                        for (_0x471909 = this['ExportData']['applets']['length'], _0x471909 >= 0x5 && (_0x471909 = 0x5), _0x2297ca = 0x1 == _0x471909 ? [0x0] : 0x0 >= _0x471909 ? [] : _0x298591['default']['getRandomA' + 'rr'](0x0, this['ExportData']['applets']['length'] - 0x1, _0x471909), _0x2256ae = 0x0; _0x2256ae < _0x2297ca['length']; _0x2256ae++)
                                            _0x471c18 = _0x2297ca[_0x2256ae], _0x160050['push'](this['ExportData']['applets'][_0x471c18]);
                                        this['list_home']['itemRender'] = _0x259b0c['default'], this['list_home']['array'] = _0x160050, this['list_home']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onExportIt' + 'em']), Laya['timer']['loop'](0x7d0, this, this['tweenList']), this['list_home']['refresh']();
                                    } else {
                                        for (_0x471909 = this['ExportData']['applets']['length'], _0x471909 >= 0x2 && (_0x471909 = 0x2), _0x2297ca = 0x1 == _0x471909 ? [0x0] : 0x0 >= _0x471909 ? [] : _0x298591['default']['getRandomA' + 'rr'](0x0, this['ExportData']['applets']['length'] - 0x1, _0x471909), _0x2256ae = 0x0; _0x2256ae < _0x2297ca['length']; _0x2256ae++)
                                            _0x471c18 = _0x2297ca[_0x2256ae], _0x160050['push'](this['ExportData']['applets'][_0x471c18]);
                                        this['list_selec' + 't']['itemRender'] = _0x259b0c['default'], this['list_selec' + 't']['array'] = _0x160050, this['list_selec' + 't']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onExportIt' + 'em']), Laya['timer']['loop'](0x7d0, this, this['tweenList']), this['list_selec' + 't']['refresh']();
                                    }
                                    return [0x2];
                                }
                            });
                        });
                    }, _0x2b0cd4['prototype']['tweenList'] = function () {
                        if (0x1 == this['list_home']['length'])
                            this['itemIndexE' + 'nd'] = 0x0;
                        else {
                            if (0x0 == this['list_home']['length'])
                                return;
                            if (this['itemIndexS' + 'tar'] = _0x298591['default']['getRandomA' + 'rr'](0x0, this['list_home']['length'] - 0x1, 0x1)[0x0], this['itemIndexE' + 'nd'] == this['itemIndexS' + 'tar'])
                                return void this['tweenList']();
                            this['itemIndexE' + 'nd'] = this['itemIndexS' + 'tar'];
                        }
                        var _0x13bffd = this['list_home']['getChildAt'](0x0), _0x46b568 = _0x13bffd['getChildAt'](this['itemIndexE' + 'nd']);
                        Laya['Tween']['to'](_0x46b568['getChildAt'](0x0), {
                            'scaleX': 1.2,
                            'scaleY': 1.2
                        }, 0xc8, null, Laya['Handler']['create'](this, function () {
                            Laya['Tween']['to'](_0x46b568['getChildAt'](0x0), {
                                'scaleX': 0x1,
                                'scaleY': 0x1
                            }, 0xc8);
                        }));
                    }, _0x2b0cd4['prototype']['onExportIt' + 'em'] = function (_0x12b19a, _0x110b9c) {
                        _0x12b19a['setData'](), _0x12b19a['export'](_0x4a053d['default']['exportGame'][this['exiptType']], !0x0, '浮窗');
                    }, _0x2b0cd4['prototype']['onDestroy'] = function () {
                        this['exportPre'] && this['exportPre']['removeSelf']();
                    }, _0x2b0cd4;
                }(_0x5eed39['ui']['prefabs']['ExportHome' + 'PrefabsUI']);
            _0x22cc86['default'] = _0x3bdb33;
        },
        {
            '../BGame/BGame': 0x3,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../item/ExportItem': 0x49,
            '../manager/ExportGameManager': 0x4c,
            '../ui/layaMaxUI': 0x5a,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x56: [
        function (_0x2caf93, _0x300658, _0x933b7d) {
            'use strict';
            var _0x2518bb = this && this['__extends'] || function () {
                    var _0x2fdfaf = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x543cd2, _0x1e5c7a) {
                        _0x543cd2['__proto__'] = _0x1e5c7a;
                    } || function (_0xb716b, _0x2fc414) {
                        for (var _0x4642c9 in _0x2fc414)
                            _0x2fc414['hasOwnProp' + 'erty'](_0x4642c9) && (_0xb716b[_0x4642c9] = _0x2fc414[_0x4642c9]);
                    };
                    return function (_0x4d64b4, _0x5119a1) {
                        function _0x462760() {
                            this['constructo' + 'r'] = _0x4d64b4;
                        }
                        _0x2fdfaf(_0x4d64b4, _0x5119a1), _0x4d64b4['prototype'] = null === _0x5119a1 ? Object['create'](_0x5119a1) : (_0x462760['prototype'] = _0x5119a1['prototype'], new _0x462760());
                    };
                }(), _0x882c72 = this && this['__awaiter'] || function (_0x7692c2, _0x25ed3c, _0x346a30, _0x77b5e0) {
                    return new (_0x346a30 || (_0x346a30 = Promise))(function (_0x3e4550, _0x12468a) {
                        function _0x2d4c06(_0x487d18) {
                            try {
                                _0x4362b9(_0x77b5e0['next'](_0x487d18));
                            } catch (_0x6d816e) {
                                _0x12468a(_0x6d816e);
                            }
                        }
                        function _0x35e4a1(_0x562f54) {
                            try {
                                _0x4362b9(_0x77b5e0['throw'](_0x562f54));
                            } catch (_0x53d834) {
                                _0x12468a(_0x53d834);
                            }
                        }
                        function _0x4362b9(_0x3fa50b) {
                            _0x3fa50b['done'] ? _0x3e4550(_0x3fa50b['value']) : new _0x346a30(function (_0x556d16) {
                                _0x556d16(_0x3fa50b['value']);
                            })['then'](_0x2d4c06, _0x35e4a1);
                        }
                        _0x4362b9((_0x77b5e0 = _0x77b5e0['apply'](_0x7692c2, _0x25ed3c || []))['next']());
                    });
                }, _0x231848 = this && this['__generato' + 'r'] || function (_0x5c230f, _0x51153f) {
                    function _0x1d1212(_0xf56f34) {
                        return function (_0x46d646) {
                            return _0x5ac65a([
                                _0xf56f34,
                                _0x46d646
                            ]);
                        };
                    }
                    function _0x5ac65a(_0x45531e) {
                        if (_0x2bdb49)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x19ef0f;)
                            try {
                                if (_0x2bdb49 = 0x1, _0x133c11 && (_0x245353 = 0x2 & _0x45531e[0x0] ? _0x133c11['return'] : _0x45531e[0x0] ? _0x133c11['throw'] || ((_0x245353 = _0x133c11['return']) && _0x245353['call'](_0x133c11), 0x0) : _0x133c11['next']) && !(_0x245353 = _0x245353['call'](_0x133c11, _0x45531e[0x1]))['done'])
                                    return _0x245353;
                                switch (_0x133c11 = 0x0, _0x245353 && (_0x45531e = [
                                        0x2 & _0x45531e[0x0],
                                        _0x245353['value']
                                    ]), _0x45531e[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x245353 = _0x45531e;
                                    break;
                                case 0x4:
                                    return _0x19ef0f['label']++, {
                                        'value': _0x45531e[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x19ef0f['label']++, _0x133c11 = _0x45531e[0x1], _0x45531e = [0x0];
                                    continue;
                                case 0x7:
                                    _0x45531e = _0x19ef0f['ops']['pop'](), _0x19ef0f['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x245353 = _0x19ef0f['trys'], !(_0x245353 = _0x245353['length'] > 0x0 && _0x245353[_0x245353['length'] - 0x1]) && (0x6 === _0x45531e[0x0] || 0x2 === _0x45531e[0x0])) {
                                        _0x19ef0f = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x45531e[0x0] && (!_0x245353 || _0x45531e[0x1] > _0x245353[0x0] && _0x45531e[0x1] < _0x245353[0x3])) {
                                        _0x19ef0f['label'] = _0x45531e[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x45531e[0x0] && _0x19ef0f['label'] < _0x245353[0x1]) {
                                        _0x19ef0f['label'] = _0x245353[0x1], _0x245353 = _0x45531e;
                                        break;
                                    }
                                    if (_0x245353 && _0x19ef0f['label'] < _0x245353[0x2]) {
                                        _0x19ef0f['label'] = _0x245353[0x2], _0x19ef0f['ops']['push'](_0x45531e);
                                        break;
                                    }
                                    _0x245353[0x2] && _0x19ef0f['ops']['pop'](), _0x19ef0f['trys']['pop']();
                                    continue;
                                }
                                _0x45531e = _0x51153f['call'](_0x5c230f, _0x19ef0f);
                            } catch (_0x57d04b) {
                                _0x45531e = [
                                    0x6,
                                    _0x57d04b
                                ], _0x133c11 = 0x0;
                            } finally {
                                _0x2bdb49 = _0x245353 = 0x0;
                            }
                        if (0x5 & _0x45531e[0x0])
                            throw _0x45531e[0x1];
                        return {
                            'value': _0x45531e[0x0] ? _0x45531e[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x2bdb49, _0x133c11, _0x245353, _0x5c3f1e, _0x19ef0f = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x245353[0x0])
                                    throw _0x245353[0x1];
                                return _0x245353[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x5c3f1e = {
                        'next': _0x1d1212(0x0),
                        'throw': _0x1d1212(0x1),
                        'return': _0x1d1212(0x2)
                    }, 'function' == typeof Symbol && (_0x5c3f1e[Symbol['iterator']] = function () {
                        return this;
                    }), _0x5c3f1e;
                };
            Object['defineProp' + 'erty'](_0x933b7d, '__esModule', { 'value': !0x0 });
            var _0x156283 = _0x2caf93('../ui/laya' + 'MaxUI'), _0x3932e5 = _0x2caf93('../manager' + '/ExportGam' + 'eManager'), _0x2714fc = _0x2caf93('../config/' + 'Config'), _0x51a92a = _0x2caf93('../constan' + 't/enums'), _0xe2bd2 = _0x2caf93('../BGame/B' + 'Game'), _0x5d2105 = _0x2caf93('../utils/M' + 'athUtil'), _0x311c74 = _0x2caf93('../item/Ex' + 'portItem'), _0x993e83 = function (_0x51417e) {
                    function _0x2b3263() {
                        var _0x288fff = _0x51417e['call'](this) || this;
                        return _0x288fff['exiptType'] = 0x0, _0x288fff['isPopupGam' + 'eCentre'] = !0x1, _0x288fff;
                    }
                    return _0x2518bb(_0x2b3263, _0x51417e), _0x2b3263['addStage'] = function (_0x1403c0, _0x23a7fa, _0x424920) {
                        var _0x18e4e2 = new _0x2b3263();
                        _0x18e4e2['exiptType'] = _0x23a7fa, _0x18e4e2['centerX'] = 0x0, _0x18e4e2['centerY'] = 0x0, _0x18e4e2['zOrder'] = -0x1, _0x18e4e2['isPopupGam' + 'eCentre'] = _0x424920, _0x18e4e2['exportPre'] = _0x18e4e2, _0x1403c0['addChild'](_0x18e4e2['exportPre']);
                    }, _0x2b3263['prototype']['onAwake'] = function () {
                        this['init']();
                    }, _0x2b3263['prototype']['init'] = function () {
                        return _0x882c72(this, void 0x0, void 0x0, function () {
                            var _0x417992, _0x273781, _0x3eecba, _0x34beb0, _0x546dee, _0x4d78a7, _0x352ce8, _0x4d78a7, _0x352ce8;
                            return _0x231848(this, function (_0x2af26a) {
                                switch (_0x2af26a['label']) {
                                case 0x0:
                                    return _0xe2bd2['default']['getGame']()['getPlatfor' + 'm']()['getId']() != _0x51a92a['PlatformTy' + 'pe']['wx'] ? [0x2] : (_0x417992 = [], _0x273781 = [], _0x546dee = this, [
                                        0x4,
                                        _0x3932e5['default']['Instance']()['getFlow']('对联')
                                    ]);
                                case 0x1:
                                    for (_0x546dee['ExportData'] = _0x2af26a['sent'](), _0x3eecba = _0x5d2105['default']['getRandomA' + 'rr'](0x0, this['ExportData']['applets']['length'] - 0x1, this['ExportData']['applets']['length']), _0x4d78a7 = 0x0; _0x4d78a7 < _0x3eecba['length']; _0x4d78a7++)
                                        _0x352ce8 = _0x3eecba[_0x4d78a7], _0x417992['push'](this['ExportData']['applets'][_0x352ce8]);
                                    for (_0x34beb0 = _0x5d2105['default']['getRandomA' + 'rr'](0x0, this['ExportData']['applets']['length'] - 0x1, this['ExportData']['applets']['length']), _0x4d78a7 = 0x0; _0x4d78a7 < _0x34beb0['length']; _0x4d78a7++)
                                        _0x352ce8 = _0x34beb0[_0x4d78a7], _0x273781['push'](this['ExportData']['applets'][_0x352ce8]);
                                    return this['list_1']['vScrollBar' + 'Skin'] = '', this['list_1']['itemRender'] = _0x311c74['default'], this['list_1']['array'] = _0x417992, this['list_1']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onUpdateIt' + 'em']), this['list_1']['refresh'](), this['list_2']['vScrollBar' + 'Skin'] = '', this['list_2']['itemRender'] = _0x311c74['default'], this['list_2']['array'] = _0x273781, this['list_2']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onUpdateIt' + 'em']), this['list_2']['refresh'](), this['m_type_1'] = 0x0, this['m_type_2'] = 0x0, Laya['timer']['frameLoop'](0x1, this, this['scrollerCa' + 'll']), [0x2];
                                }
                            });
                        });
                    }, _0x2b3263['prototype']['scrollerCa' + 'll'] = function () {
                        0x0 == this['m_type_1'] ? (this['list_1']['scrollBar']['value'] += 0x1, this['list_1']['scrollBar']['value'] >= this['list_1']['scrollBar']['max'] && (this['m_type_1'] = 0x1)) : 0x1 == this['m_type_1'] && (this['list_1']['scrollBar']['value'] -= 0x1, this['list_1']['scrollBar']['value'] <= 0x0 && (this['m_type_1'] = 0x0)), 0x0 == this['m_type_2'] ? (this['list_2']['scrollBar']['value'] += 0x1, this['list_2']['scrollBar']['value'] >= this['list_2']['scrollBar']['max'] && (this['m_type_2'] = 0x1)) : 0x1 == this['m_type_2'] && (this['list_2']['scrollBar']['value'] -= 0x1, this['list_2']['scrollBar']['value'] <= 0x0 && (this['m_type_2'] = 0x0));
                    }, _0x2b3263['prototype']['tweenList'] = function () {
                        var _0x173901 = _0x5d2105['default']['getRandom'](0x64);
                        if (_0x173901 > 0x32) {
                            if (0x1 == this['list_1']['length'])
                                this['itemIndexE' + 'nd'] = 0x0;
                            else {
                                if (0x0 == this['list_1']['length'])
                                    return;
                                if (this['itemIndexS' + 'tar'] = _0x5d2105['default']['getRandomA' + 'rr'](0x0, this['list_1']['length'] - 0x1, 0x1)[0x0], this['itemIndexE' + 'nd'] == this['itemIndexS' + 'tar'])
                                    return void this['tweenList']();
                                this['itemIndexE' + 'nd'] = this['itemIndexS' + 'tar'];
                            }
                            var _0x3014ca = this['list_1']['getChildAt'](0x0), _0x3f4ffb = _0x3014ca['getChildAt'](this['itemIndexE' + 'nd']);
                            Laya['Tween']['to'](_0x3f4ffb['getChildAt'](0x0), {
                                'scaleX': 1.2,
                                'scaleY': 1.2
                            }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                Laya['Tween']['to'](_0x3f4ffb['getChildAt'](0x0), {
                                    'scaleX': 0x1,
                                    'scaleY': 0x1
                                }, 0xc8);
                            }));
                        } else {
                            if (0x1 == this['list_2']['length'])
                                this['itemIndexE' + 'nd'] = 0x0;
                            else {
                                if (0x0 == this['list_2']['length'])
                                    return;
                                if (this['itemIndexS' + 'tar'] = _0x5d2105['default']['getRandomA' + 'rr'](0x0, this['list_2']['length'] - 0x1, 0x1)[0x0], this['itemIndexE' + 'nd'] == this['itemIndexS' + 'tar'])
                                    return void this['tweenList']();
                                this['itemIndexE' + 'nd'] = this['itemIndexS' + 'tar'];
                            }
                            var _0x3014ca = this['list_2']['getChildAt'](0x0), _0x3f4ffb = _0x3014ca['getChildAt'](this['itemIndexE' + 'nd']);
                            Laya['Tween']['to'](_0x3f4ffb['getChildAt'](0x0), {
                                'scaleX': 1.2,
                                'scaleY': 1.2
                            }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                Laya['Tween']['to'](_0x3f4ffb['getChildAt'](0x0), {
                                    'scaleX': 0x1,
                                    'scaleY': 0x1
                                }, 0xc8);
                            }));
                        }
                    }, _0x2b3263['prototype']['onUpdateIt' + 'em'] = function (_0x256f10, _0x22e6a5) {
                        _0x256f10['setData'](), _0x256f10['export'](_0x2714fc['default']['exportGame'][this['exiptType']], this['isPopupGam' + 'eCentre'], '对联');
                    }, _0x2b3263['prototype']['onDestroy'] = function () {
                        this['exportPre'] && this['exportPre']['removeSelf']();
                    }, _0x2b3263;
                }(_0x156283['ui']['prefabs']['ExportPref' + 'absUI']);
            _0x933b7d['default'] = _0x993e83;
        },
        {
            '../BGame/BGame': 0x3,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../item/ExportItem': 0x49,
            '../manager/ExportGameManager': 0x4c,
            '../ui/layaMaxUI': 0x5a,
            '../utils/MathUtil': 0x5c
        }
    ],
    0x57: [
        function (_0x26a99e, _0x1010a5, _0x4733d4) {
            'use strict';
            var _0x1a1cce = this && this['__extends'] || function () {
                var _0x1aa0d6 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x3454ed, _0x4f6bc0) {
                    _0x3454ed['__proto__'] = _0x4f6bc0;
                } || function (_0xbd7715, _0x4208ed) {
                    for (var _0xcfc6d9 in _0x4208ed)
                        _0x4208ed['hasOwnProp' + 'erty'](_0xcfc6d9) && (_0xbd7715[_0xcfc6d9] = _0x4208ed[_0xcfc6d9]);
                };
                return function (_0x79a2c4, _0x497236) {
                    function _0x3cebe4() {
                        this['constructo' + 'r'] = _0x79a2c4;
                    }
                    _0x1aa0d6(_0x79a2c4, _0x497236), _0x79a2c4['prototype'] = null === _0x497236 ? Object['create'](_0x497236) : (_0x3cebe4['prototype'] = _0x497236['prototype'], new _0x3cebe4());
                };
            }();
            Object['defineProp' + 'erty'](_0x4733d4, '__esModule', { 'value': !0x0 });
            var _0x2d61ff = function (_0x18cce0) {
                function _0x19d477() {
                    return null !== _0x18cce0 && _0x18cce0['apply'](this, arguments) || this;
                }
                return _0x1a1cce(_0x19d477, _0x18cce0), _0x19d477['prototype']['onAwake'] = function () {
                    var _0x523403 = this['owner'];
                    _0x523403['on'](Laya['Event']['RESIZE'], this, this['onResize']);
                }, _0x19d477['prototype']['centerDial' + 'og'] = function () {
                    var _0x2718ff = this['owner'];
                    _0x2718ff['x'] = Math['round']((Laya['stage']['width'] - _0x2718ff['width'] >> 0x1) + _0x2718ff['pivotX']), _0x2718ff['y'] = Math['round']((Laya['stage']['height'] - _0x2718ff['height'] >> 0x1) + _0x2718ff['pivotY']);
                }, _0x19d477['prototype']['onResize'] = function () {
                    this['centerDial' + 'og'](), Laya['Dialog']['manager']['_checkMask']();
                }, _0x19d477;
            }(Laya['Script']);
            _0x4733d4['default'] = _0x2d61ff;
        },
        {}
    ],
    0x58: [
        function (_0x225b7c, _0x5f1825, _0x377579) {
            'use strict';
            var _0xca789e = this && this['__extends'] || function () {
                var _0x2fab29 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x12c4d7, _0x56addc) {
                    _0x12c4d7['__proto__'] = _0x56addc;
                } || function (_0x1d9453, _0x2a0cc3) {
                    for (var _0x3e3017 in _0x2a0cc3)
                        _0x2a0cc3['hasOwnProp' + 'erty'](_0x3e3017) && (_0x1d9453[_0x3e3017] = _0x2a0cc3[_0x3e3017]);
                };
                return function (_0x4200e2, _0x470539) {
                    function _0xb8ab41() {
                        this['constructo' + 'r'] = _0x4200e2;
                    }
                    _0x2fab29(_0x4200e2, _0x470539), _0x4200e2['prototype'] = null === _0x470539 ? Object['create'](_0x470539) : (_0xb8ab41['prototype'] = _0x470539['prototype'], new _0xb8ab41());
                };
            }();
            Object['defineProp' + 'erty'](_0x377579, '__esModule', { 'value': !0x0 });
            var _0x3fcdb0 = _0x225b7c('../GameCon' + 'fig'), _0x45a64f = function (_0x441bd7) {
                    function _0x3dc33d() {
                        return _0x441bd7['call'](this) || this;
                    }
                    return _0xca789e(_0x3dc33d, _0x441bd7), _0x3dc33d['prototype']['onAwake'] = function () {
                        this['moveSceneT' + 'oCenter'](), this['scaleBg']();
                    }, _0x3dc33d['prototype']['moveSceneT' + 'oCenter'] = function () {
                        var _0x507da1 = this['owner'];
                        _0x507da1['pivot'](0.5 * _0x507da1['width'], 0.5 * _0x507da1['height'])['pos'](0.5 * Laya['stage']['width'], 0.5 * Laya['stage']['height']);
                    }, _0x3dc33d['prototype']['calculateR' + 'atio'] = function () {
                        var _0xb50f0f = this['owner'];
                        _0x3fcdb0['default'];
                        if (Laya['stage']['width'] > 0x0 && _0xb50f0f['height'] > 0x0) {
                            var _0xdac2f5 = _0x3fcdb0['default']['width'] * Laya['stage']['height'] / (_0x3fcdb0['default']['height'] * Laya['stage']['width']);
                            return 0x1 > _0xdac2f5 ? 0x1 : _0xdac2f5;
                        }
                        return 0x1;
                    }, _0x3dc33d['prototype']['scaleBg'] = function () {
                        try {
                            if (this['bg']) {
                                var _0x393162 = this['bg'], _0x33b954 = this['calculateR' + 'atio']();
                                _0x393162['centerX'] = 0x0, _0x393162['centerY'] = 0x0, _0x393162['scale'](_0x33b954 * _0x393162['scaleX'], _0x33b954 * _0x393162['scaleY'], !0x0);
                            }
                        } catch (_0x36b5df) {
                            console['error'](_0x36b5df);
                        }
                    }, _0x3dc33d;
                }(Laya['Script']);
            _0x377579['default'] = _0x45a64f;
        },
        { '../GameConfig': 0x22 }
    ],
    0x59: [
        function (_0x42f9a9, _0x27cf5a, _0x59ed37) {
            'use strict';
            var _0x38f38a = this && this['__extends'] || function () {
                var _0x19f6c2 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x5f2f12, _0x4b0431) {
                    _0x5f2f12['__proto__'] = _0x4b0431;
                } || function (_0xd44529, _0x39e830) {
                    for (var _0x3bbc97 in _0x39e830)
                        _0x39e830['hasOwnProp' + 'erty'](_0x3bbc97) && (_0xd44529[_0x3bbc97] = _0x39e830[_0x3bbc97]);
                };
                return function (_0x160fd9, _0x5efcde) {
                    function _0x7c0bc6() {
                        this['constructo' + 'r'] = _0x160fd9;
                    }
                    _0x19f6c2(_0x160fd9, _0x5efcde), _0x160fd9['prototype'] = null === _0x5efcde ? Object['create'](_0x5efcde) : (_0x7c0bc6['prototype'] = _0x5efcde['prototype'], new _0x7c0bc6());
                };
            }();
            Object['defineProp' + 'erty'](_0x59ed37, '__esModule', { 'value': !0x0 });
            var _0x3e00a6 = _0x42f9a9('../manager' + '/SoundMana' + 'ger'), _0x9a3388 = _0x42f9a9('../constan' + 't/enums'), _0x45a925 = function (_0x357d0c) {
                    function _0x2a3fa4(_0xf35d2b, _0x118320, _0x16cf35, _0x58a81d) {
                        void 0x0 === _0xf35d2b && (_0xf35d2b = null), void 0x0 === _0x118320 && (_0x118320 = null), void 0x0 === _0x58a81d && (_0x58a81d = null);
                        var _0x583198 = _0x357d0c['call'](this) || this;
                        return _0x583198['sp'] = null, _0x583198['fnMouseDow' + 'n'] = null, _0x583198['fnMouseUp'] = null, _0x583198['fnMouseOut'] = null, _0x583198['initScale'] = 0x1, _0x583198['fnMouseDow' + 'n'] = _0xf35d2b, _0x583198['fnMouseUp'] = _0x118320, _0x583198['fnMouseOut'] = _0x58a81d, _0x583198['_palySound' + 'Type'] = _0x16cf35, _0x583198;
                    }
                    return _0x38f38a(_0x2a3fa4, _0x357d0c), _0x2a3fa4['prototype']['onAwake'] = function () {
                        var _0x69c56a = this['owner'];
                        this['sp'] = _0x69c56a, _0x69c56a['on'](Laya['Event']['MOUSE_DOWN'], null, _0x2a3fa4['onTouch'], [this]), _0x69c56a['on'](Laya['Event']['MOUSE_UP'], null, _0x2a3fa4['onTouch'], [this]), _0x69c56a['on'](Laya['Event']['MOUSE_OUT'], null, _0x2a3fa4['onTouch'], [this]), this['initScale'] = this['sp']['scaleX'];
                    }, _0x2a3fa4['prototype']['onEnable'] = function () {
                    }, _0x2a3fa4['onTouch'] = function (_0x414a50, _0x1aec4b) {
                        if (_0x1aec4b && _0x414a50) {
                            var _0x1e4fca = _0x414a50;
                            switch (_0x1aec4b['stopPropag' + 'ation'](), _0x1aec4b['type']) {
                            case Laya['Event']['MOUSE_DOWN']:
                                _0x1e4fca['_palySound' + 'Type'] == _0x9a3388['soundType']['tongYong'] ? _0x3e00a6['default']['playEffect'](_0x9a3388['SoundName']['TongYong']) : _0x1e4fca['_palySound' + 'Type'] == _0x9a3388['soundType']['guanBi'] && _0x3e00a6['default']['playEffect'](_0x9a3388['SoundName']['GuanBi']), _0x1e4fca['sp']['scale'](0.9 * _0x1e4fca['initScale'], 0.9 * _0x1e4fca['initScale']), _0x1e4fca['fnMouseDow' + 'n'] && _0x1e4fca['fnMouseDow' + 'n']();
                                break;
                            case Laya['Event']['MOUSE_UP']:
                                _0x1e4fca['sp']['scale'](_0x1e4fca['initScale'], _0x1e4fca['initScale']), _0x1e4fca['fnMouseUp'] && _0x1e4fca['fnMouseUp']();
                                break;
                            case Laya['Event']['MOUSE_OUT']:
                                _0x1e4fca['sp']['scale'](_0x1e4fca['initScale'], _0x1e4fca['initScale']), _0x1e4fca['fnMouseOut'] && _0x1e4fca['fnMouseOut']();
                            }
                        }
                    }, _0x2a3fa4;
                }(Laya['Script']);
            _0x59ed37['default'] = _0x45a925;
        },
        {
            '../constant/enums': 0x3d,
            '../manager/SoundManager': 0x50
        }
    ],
    0x5a: [
        function (_0x34fd36, _0x230179, _0x4129d2) {
            'use strict';
            var _0x3a9f87 = this && this['__extends'] || function () {
                var _0x361586 = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x2d5f65, _0x197669) {
                    _0x2d5f65['__proto__'] = _0x197669;
                } || function (_0x2e6e6b, _0x1915d7) {
                    for (var _0xd53d41 in _0x1915d7)
                        _0x1915d7['hasOwnProp' + 'erty'](_0xd53d41) && (_0x2e6e6b[_0xd53d41] = _0x1915d7[_0xd53d41]);
                };
                return function (_0x576142, _0x99da3b) {
                    function _0x290fc0() {
                        this['constructo' + 'r'] = _0x576142;
                    }
                    _0x361586(_0x576142, _0x99da3b), _0x576142['prototype'] = null === _0x99da3b ? Object['create'](_0x99da3b) : (_0x290fc0['prototype'] = _0x99da3b['prototype'], new _0x290fc0());
                };
            }();
            Object['defineProp' + 'erty'](_0x4129d2, '__esModule', { 'value': !0x0 });
            var _0x2db21a, _0x1eb511 = Laya['View'], _0x23274e = Laya['Dialog'], _0x144e04 = Laya['Scene'], _0x4900d2 = Laya['ClassUtils']['regClass'];
            !function (_0x3e2e16) {
                var _0x5e6eae;
                !function (_0x1e1f9f) {
                    var _0x1f7a89 = function (_0xdd14e6) {
                        function _0x419e4d() {
                            return _0xdd14e6['call'](this) || this;
                        }
                        return _0x3a9f87(_0x419e4d, _0xdd14e6), _0x419e4d['prototype']['createChil' + 'dren'] = function () {
                            _0xdd14e6['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Ch' + 'aPingPanel');
                        }, _0x419e4d;
                    }(_0x23274e);
                    _0x1e1f9f['ChaPingPan' + 'elUI'] = _0x1f7a89, _0x4900d2('ui.dialogs' + '.ChaPingPa' + 'nelUI', _0x1f7a89);
                    var _0x4187c0 = function (_0x151553) {
                        function _0x5ca579() {
                            return _0x151553['call'](this) || this;
                        }
                        return _0x3a9f87(_0x5ca579, _0x151553), _0x5ca579['prototype']['createChil' + 'dren'] = function () {
                            _0x151553['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Ch' + 'estDialog');
                        }, _0x5ca579;
                    }(_0x23274e);
                    _0x1e1f9f['ChestDialo' + 'gUI'] = _0x4187c0, _0x4900d2('ui.dialogs' + '.ChestDial' + 'ogUI', _0x4187c0);
                    var _0x49a980 = function (_0x1ebbce) {
                        function _0x2cbaaf() {
                            return _0x1ebbce['call'](this) || this;
                        }
                        return _0x3a9f87(_0x2cbaaf, _0x1ebbce), _0x2cbaaf['prototype']['createChil' + 'dren'] = function () {
                            _0x1ebbce['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Co' + 'llderPanel');
                        }, _0x2cbaaf;
                    }(_0x23274e);
                    _0x1e1f9f['CollderPan' + 'elUI'] = _0x49a980, _0x4900d2('ui.dialogs' + '.CollderPa' + 'nelUI', _0x49a980);
                    var _0x42af85 = function (_0x456950) {
                        function _0x3fba7a() {
                            return _0x456950['call'](this) || this;
                        }
                        return _0x3a9f87(_0x3fba7a, _0x456950), _0x3fba7a['prototype']['createChil' + 'dren'] = function () {
                            _0x456950['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Ga' + 'meCentrePa' + 'nel');
                        }, _0x3fba7a;
                    }(_0x23274e);
                    _0x1e1f9f['GameCentre' + 'PanelUI'] = _0x42af85, _0x4900d2('ui.dialogs' + '.GameCentr' + 'ePanelUI', _0x42af85);
                    var _0x276134 = function (_0x43ddc6) {
                        function _0x4da8f6() {
                            return _0x43ddc6['call'](this) || this;
                        }
                        return _0x3a9f87(_0x4da8f6, _0x43ddc6), _0x4da8f6['prototype']['createChil' + 'dren'] = function () {
                            _0x43ddc6['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Ga' + 'meOverPane' + 'l');
                        }, _0x4da8f6;
                    }(_0x23274e);
                    _0x1e1f9f['GameOverPa' + 'nelUI'] = _0x276134, _0x4900d2('ui.dialogs' + '.GameOverP' + 'anelUI', _0x276134);
                    var _0x355ed5 = function (_0x3658ea) {
                        function _0x25e861() {
                            return _0x3658ea['call'](this) || this;
                        }
                        return _0x3a9f87(_0x25e861, _0x3658ea), _0x25e861['prototype']['createChil' + 'dren'] = function () {
                            _0x3658ea['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Go' + 'ldGiftPane' + 'l');
                        }, _0x25e861;
                    }(_0x23274e);
                    _0x1e1f9f['GoldGiftPa' + 'nelUI'] = _0x355ed5, _0x4900d2('ui.dialogs' + '.GoldGiftP' + 'anelUI', _0x355ed5);
                    var _0x225ce0 = function (_0x312c21) {
                        function _0x1de204() {
                            return _0x312c21['call'](this) || this;
                        }
                        return _0x3a9f87(_0x1de204, _0x312c21), _0x1de204['prototype']['createChil' + 'dren'] = function () {
                            _0x312c21['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Go' + 'ldLackPane' + 'l');
                        }, _0x1de204;
                    }(_0x23274e);
                    _0x1e1f9f['GoldLackPa' + 'nelUI'] = _0x225ce0, _0x4900d2('ui.dialogs' + '.GoldLackP' + 'anelUI', _0x225ce0);
                    var _0x4a3de8 = function (_0x5a8962) {
                        function _0xf9b56e() {
                            return _0x5a8962['call'](this) || this;
                        }
                        return _0x3a9f87(_0xf9b56e, _0x5a8962), _0xf9b56e['prototype']['createChil' + 'dren'] = function () {
                            _0x5a8962['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Lu' + 'ckyPanel');
                        }, _0xf9b56e;
                    }(_0x23274e);
                    _0x1e1f9f['LuckyPanel' + 'UI'] = _0x4a3de8, _0x4900d2('ui.dialogs' + '.LuckyPane' + 'lUI', _0x4a3de8);
                    var _0x1ed834 = function (_0x4f65bf) {
                        function _0x5d38da() {
                            return _0x4f65bf['call'](this) || this;
                        }
                        return _0x3a9f87(_0x5d38da, _0x4f65bf), _0x5d38da['prototype']['createChil' + 'dren'] = function () {
                            _0x4f65bf['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Of' + 'fLinePanel');
                        }, _0x5d38da;
                    }(_0x23274e);
                    _0x1e1f9f['OffLinePan' + 'elUI'] = _0x1ed834, _0x4900d2('ui.dialogs' + '.OffLinePa' + 'nelUI', _0x1ed834);
                    var _0x558349 = function (_0x3710b3) {
                        function _0x33467e() {
                            return _0x3710b3['call'](this) || this;
                        }
                        return _0x3a9f87(_0x33467e, _0x3710b3), _0x33467e['prototype']['createChil' + 'dren'] = function () {
                            _0x3710b3['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Pa' + 'sePanel');
                        }, _0x33467e;
                    }(_0x23274e);
                    _0x1e1f9f['PasePanelU' + 'I'] = _0x558349, _0x4900d2('ui.dialogs' + '.PasePanel' + 'UI', _0x558349);
                    var _0xf079ec = function (_0x4a4f70) {
                        function _0x47bbf1() {
                            return _0x4a4f70['call'](this) || this;
                        }
                        return _0x3a9f87(_0x47bbf1, _0x4a4f70), _0x47bbf1['prototype']['createChil' + 'dren'] = function () {
                            _0x4a4f70['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Po' + 'werLackPan' + 'el');
                        }, _0x47bbf1;
                    }(_0x23274e);
                    _0x1e1f9f['PowerLackP' + 'anelUI'] = _0xf079ec, _0x4900d2('ui.dialogs' + '.PowerLack' + 'PanelUI', _0xf079ec);
                    var _0x3c7948 = function (_0x341561) {
                        function _0xcff5ae() {
                            return _0x341561['call'](this) || this;
                        }
                        return _0x3a9f87(_0xcff5ae, _0x341561), _0xcff5ae['prototype']['createChil' + 'dren'] = function () {
                            _0x341561['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Ra' + 'nkingPanel');
                        }, _0xcff5ae;
                    }(_0x23274e);
                    _0x1e1f9f['RankingPan' + 'elUI'] = _0x3c7948, _0x4900d2('ui.dialogs' + '.RankingPa' + 'nelUI', _0x3c7948);
                    var _0xb47f4b = function (_0x4175e6) {
                        function _0x53ed3f() {
                            return _0x4175e6['call'](this) || this;
                        }
                        return _0x3a9f87(_0x53ed3f, _0x4175e6), _0x53ed3f['prototype']['createChil' + 'dren'] = function () {
                            _0x4175e6['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Se' + 'lectCustom' + 'sPanel');
                        }, _0x53ed3f;
                    }(_0x23274e);
                    _0x1e1f9f['SelectCust' + 'omsPanelUI'] = _0xb47f4b, _0x4900d2('ui.dialogs' + '.SelectCus' + 'tomsPanelU' + 'I', _0xb47f4b);
                    var _0x742bb5 = function (_0x28403e) {
                        function _0x4bb020() {
                            return _0x28403e['call'](this) || this;
                        }
                        return _0x3a9f87(_0x4bb020, _0x28403e), _0x4bb020['prototype']['createChil' + 'dren'] = function () {
                            _0x28403e['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Se' + 'rvicePanel');
                        }, _0x4bb020;
                    }(_0x23274e);
                    _0x1e1f9f['ServicePan' + 'elUI'] = _0x742bb5, _0x4900d2('ui.dialogs' + '.ServicePa' + 'nelUI', _0x742bb5);
                    var _0x592c13 = function (_0x532eee) {
                        function _0x277321() {
                            return _0x532eee['call'](this) || this;
                        }
                        return _0x3a9f87(_0x277321, _0x532eee), _0x277321['prototype']['createChil' + 'dren'] = function () {
                            _0x532eee['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Si' + 'gnPanel');
                        }, _0x277321;
                    }(_0x23274e);
                    _0x1e1f9f['SignPanelU' + 'I'] = _0x592c13, _0x4900d2('ui.dialogs' + '.SignPanel' + 'UI', _0x592c13);
                    var _0x167e3a = function (_0x48af73) {
                        function _0x597eec() {
                            return _0x48af73['call'](this) || this;
                        }
                        return _0x3a9f87(_0x597eec, _0x48af73), _0x597eec['prototype']['createChil' + 'dren'] = function () {
                            _0x48af73['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/St' + 'arNitrogen' + 'Panel');
                        }, _0x597eec;
                    }(_0x23274e);
                    _0x1e1f9f['StarNitrog' + 'enPanelUI'] = _0x167e3a, _0x4900d2('ui.dialogs' + '.StarNitro' + 'genPanelUI', _0x167e3a);
                    var _0x2f0ecc = function (_0x58cb8f) {
                        function _0x526503() {
                            return _0x58cb8f['call'](this) || this;
                        }
                        return _0x3a9f87(_0x526503, _0x58cb8f), _0x526503['prototype']['createChil' + 'dren'] = function () {
                            _0x58cb8f['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/To' + 'astDialog');
                        }, _0x526503;
                    }(_0x23274e);
                    _0x1e1f9f['ToastDialo' + 'gUI'] = _0x2f0ecc, _0x4900d2('ui.dialogs' + '.ToastDial' + 'ogUI', _0x2f0ecc);
                    var _0x53f6df = function (_0x1c9750) {
                        function _0x57ca3a() {
                            return _0x1c9750['call'](this) || this;
                        }
                        return _0x3a9f87(_0x57ca3a, _0x1c9750), _0x57ca3a['prototype']['createChil' + 'dren'] = function () {
                            _0x1c9750['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('dialogs/Un' + 'lockPanel');
                        }, _0x57ca3a;
                    }(_0x23274e);
                    _0x1e1f9f['UnlockPane' + 'lUI'] = _0x53f6df, _0x4900d2('ui.dialogs' + '.UnlockPan' + 'elUI', _0x53f6df);
                }(_0x5e6eae = _0x3e2e16['dialogs'] || (_0x3e2e16['dialogs'] = {}));
            }(_0x2db21a = _0x4129d2['ui'] || (_0x4129d2['ui'] = {})), function (_0x2e1ee4) {
                var _0x596c12;
                !function (_0xff8928) {
                    var _0x1c48de = function (_0xef5420) {
                        function _0x2d2b83() {
                            return _0xef5420['call'](this) || this;
                        }
                        return _0x3a9f87(_0x2d2b83, _0xef5420), _0x2d2b83['prototype']['createChil' + 'dren'] = function () {
                        }, _0x2d2b83;
                    }(_0x1eb511);
                    _0xff8928['ChaPingIte' + 'mUI'] = _0x1c48de, _0x4900d2('ui.item.Ch' + 'aPingItemU' + 'I', _0x1c48de);
                    var _0x5df26d = function (_0x45161b) {
                        function _0x44df7d() {
                            return _0x45161b['call'](this) || this;
                        }
                        return _0x3a9f87(_0x44df7d, _0x45161b), _0x44df7d['prototype']['createChil' + 'dren'] = function () {
                            _0x45161b['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('item/Custo' + 'msItem');
                        }, _0x44df7d;
                    }(_0x1eb511);
                    _0xff8928['CustomsIte' + 'mUI'] = _0x5df26d, _0x4900d2('ui.item.Cu' + 'stomsItemU' + 'I', _0x5df26d);
                    var _0x536625 = function (_0x4458c6) {
                        function _0x5ae2e4() {
                            return _0x4458c6['call'](this) || this;
                        }
                        return _0x3a9f87(_0x5ae2e4, _0x4458c6), _0x5ae2e4['prototype']['createChil' + 'dren'] = function () {
                        }, _0x5ae2e4;
                    }(_0x1eb511);
                    _0xff8928['ExportHome' + 'ItemUI'] = _0x536625, _0x4900d2('ui.item.Ex' + 'portHomeIt' + 'emUI', _0x536625);
                    var _0x3d481e = function (_0x3a5ada) {
                        function _0x831019() {
                            return _0x3a5ada['call'](this) || this;
                        }
                        return _0x3a9f87(_0x831019, _0x3a5ada), _0x831019['prototype']['createChil' + 'dren'] = function () {
                        }, _0x831019;
                    }(_0x1eb511);
                    _0xff8928['ExportItem' + 'UI'] = _0x3d481e, _0x4900d2('ui.item.Ex' + 'portItemUI', _0x3d481e);
                    var _0x3da977 = function (_0xbab1a1) {
                        function _0x401c6f() {
                            return _0xbab1a1['call'](this) || this;
                        }
                        return _0x3a9f87(_0x401c6f, _0xbab1a1), _0x401c6f['prototype']['createChil' + 'dren'] = function () {
                        }, _0x401c6f;
                    }(_0x1eb511);
                    _0xff8928['GameCentre' + 'ItemUI'] = _0x3da977, _0x4900d2('ui.item.Ga' + 'meCentreIt' + 'emUI', _0x3da977);
                    var _0x8bd760 = function (_0x13f0b4) {
                        function _0xd9d07b() {
                            return _0x13f0b4['call'](this) || this;
                        }
                        return _0x3a9f87(_0xd9d07b, _0x13f0b4), _0xd9d07b['prototype']['createChil' + 'dren'] = function () {
                            _0x13f0b4['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('item/Ranki' + 'ngItem');
                        }, _0xd9d07b;
                    }(_0x1eb511);
                    _0xff8928['RankingIte' + 'mUI'] = _0x8bd760, _0x4900d2('ui.item.Ra' + 'nkingItemU' + 'I', _0x8bd760);
                    var _0x278035 = function (_0x195d45) {
                        function _0x38c311() {
                            return _0x195d45['call'](this) || this;
                        }
                        return _0x3a9f87(_0x38c311, _0x195d45), _0x38c311['prototype']['createChil' + 'dren'] = function () {
                            _0x195d45['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('item/SignI' + 'tem');
                        }, _0x38c311;
                    }(_0x1eb511);
                    _0xff8928['SignItemUI'] = _0x278035, _0x4900d2('ui.item.Si' + 'gnItemUI', _0x278035);
                    var _0x23e26d = function (_0x5b7a15) {
                        function _0x2be7e4() {
                            return _0x5b7a15['call'](this) || this;
                        }
                        return _0x3a9f87(_0x2be7e4, _0x5b7a15), _0x2be7e4['prototype']['createChil' + 'dren'] = function () {
                            _0x5b7a15['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('item/World' + 'RankingIte' + 'm');
                        }, _0x2be7e4;
                    }(_0x1eb511);
                    _0xff8928['WorldRanki' + 'ngItemUI'] = _0x23e26d, _0x4900d2('ui.item.Wo' + 'rldRanking' + 'ItemUI', _0x23e26d);
                }(_0x596c12 = _0x2e1ee4['item'] || (_0x2e1ee4['item'] = {}));
            }(_0x2db21a = _0x4129d2['ui'] || (_0x4129d2['ui'] = {})), function (_0x504adc) {
                var _0x12baab;
                !function (_0x290bf9) {
                    var _0x30417b = function (_0x16ced6) {
                        function _0x522383() {
                            return _0x16ced6['call'](this) || this;
                        }
                        return _0x3a9f87(_0x522383, _0x16ced6), _0x522383['prototype']['createChil' + 'dren'] = function () {
                            _0x16ced6['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('prefabs/da' + 'ojishi');
                        }, _0x522383;
                    }(_0x144e04);
                    _0x290bf9['daojishiUI'] = _0x30417b, _0x4900d2('ui.prefabs' + '.daojishiU' + 'I', _0x30417b);
                    var _0x392d80 = function (_0x5dfdfd) {
                        function _0x1ffec6() {
                            return _0x5dfdfd['call'](this) || this;
                        }
                        return _0x3a9f87(_0x1ffec6, _0x5dfdfd), _0x1ffec6['prototype']['createChil' + 'dren'] = function () {
                            _0x5dfdfd['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('prefabs/Ex' + 'portHomePr' + 'efabs');
                        }, _0x1ffec6;
                    }(_0x1eb511);
                    _0x290bf9['ExportHome' + 'PrefabsUI'] = _0x392d80, _0x4900d2('ui.prefabs' + '.ExportHom' + 'ePrefabsUI', _0x392d80);
                    var _0x189072 = function (_0xfcb602) {
                        function _0x5887e8() {
                            return _0xfcb602['call'](this) || this;
                        }
                        return _0x3a9f87(_0x5887e8, _0xfcb602), _0x5887e8['prototype']['createChil' + 'dren'] = function () {
                            _0xfcb602['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('prefabs/Ex' + 'portPrefab' + 's');
                        }, _0x5887e8;
                    }(_0x1eb511);
                    _0x290bf9['ExportPref' + 'absUI'] = _0x189072, _0x4900d2('ui.prefabs' + '.ExportPre' + 'fabsUI', _0x189072);
                    var _0xc621c9 = function (_0x3c000a) {
                        function _0x35f991() {
                            return _0x3c000a['call'](this) || this;
                        }
                        return _0x3a9f87(_0x35f991, _0x3c000a), _0x35f991['prototype']['createChil' + 'dren'] = function () {
                            _0x3c000a['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('prefabs/Mi' + 'suseBtnPre' + 'fabs');
                        }, _0x35f991;
                    }(_0x1eb511);
                    _0x290bf9['MisuseBtnP' + 'refabsUI'] = _0xc621c9, _0x4900d2('ui.prefabs' + '.MisuseBtn' + 'PrefabsUI', _0xc621c9);
                }(_0x12baab = _0x504adc['prefabs'] || (_0x504adc['prefabs'] = {}));
            }(_0x2db21a = _0x4129d2['ui'] || (_0x4129d2['ui'] = {})), function (_0x1bc807) {
                var _0x49c6e5;
                !function (_0x1967a6) {
                    var _0x17beb1 = function (_0x6218a9) {
                        function _0x84ad56() {
                            return _0x6218a9['call'](this) || this;
                        }
                        return _0x3a9f87(_0x84ad56, _0x6218a9), _0x84ad56['prototype']['createChil' + 'dren'] = function () {
                            _0x6218a9['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('scenes/Gam' + 'eScene');
                        }, _0x84ad56;
                    }(_0x144e04);
                    _0x1967a6['GameSceneU' + 'I'] = _0x17beb1, _0x4900d2('ui.scenes.' + 'GameSceneU' + 'I', _0x17beb1);
                    var _0x290e74 = function (_0x2d249c) {
                        function _0x4f0dd1() {
                            return _0x2d249c['call'](this) || this;
                        }
                        return _0x3a9f87(_0x4f0dd1, _0x2d249c), _0x4f0dd1['prototype']['createChil' + 'dren'] = function () {
                            _0x2d249c['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('scenes/Hom' + 'eScene');
                        }, _0x4f0dd1;
                    }(_0x144e04);
                    _0x1967a6['HomeSceneU' + 'I'] = _0x290e74, _0x4900d2('ui.scenes.' + 'HomeSceneU' + 'I', _0x290e74);
                    var _0x10975e = function (_0x269791) {
                        function _0x5e0a2a() {
                            return _0x269791['call'](this) || this;
                        }
                        return _0x3a9f87(_0x5e0a2a, _0x269791), _0x5e0a2a['prototype']['createChil' + 'dren'] = function () {
                            _0x269791['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('scenes/Loa' + 'dCustomsSc' + 'ene');
                        }, _0x5e0a2a;
                    }(_0x144e04);
                    _0x1967a6['LoadCustom' + 'sSceneUI'] = _0x10975e, _0x4900d2('ui.scenes.' + 'LoadCustom' + 'sSceneUI', _0x10975e);
                    var _0x1849b1 = function (_0x5d02e3) {
                        function _0x21b444() {
                            return _0x5d02e3['call'](this) || this;
                        }
                        return _0x3a9f87(_0x21b444, _0x5d02e3), _0x21b444['prototype']['createChil' + 'dren'] = function () {
                            _0x5d02e3['prototype']['createChil' + 'dren']['call'](this), this['loadScene']('scenes/Log' + 'inScene');
                        }, _0x21b444;
                    }(_0x144e04);
                    _0x1967a6['LoginScene' + 'UI'] = _0x1849b1, _0x4900d2('ui.scenes.' + 'LoginScene' + 'UI', _0x1849b1);
                }(_0x49c6e5 = _0x1bc807['scenes'] || (_0x1bc807['scenes'] = {}));
            }(_0x2db21a = _0x4129d2['ui'] || (_0x4129d2['ui'] = {}));
        },
        {}
    ],
    0x5b: [
        function (_0x400d8c, _0x524007, _0x4c2edf) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4c2edf, '__esModule', { 'value': !0x0 });
            var _0x2c9069 = _0x400d8c('../config/' + 'CarDataCon' + 'fig'), _0x230ef5 = _0x400d8c('../data/Ro' + 'leInfo'), _0x31f8e3 = _0x400d8c('../BGame/B' + 'Game'), _0x1f262a = _0x400d8c('../BGame/m' + 'gr/BUrlMgr'), _0x3f58ef = _0x400d8c('../BGame/m' + 'gr/BShareM' + 'gr'), _0x4ec23b = _0x400d8c('../constan' + 't/enums'), _0x3bdd0a = _0x400d8c('../config/' + 'Config'), _0x313b53 = _0x400d8c('./MathUtil'), _0x55e2a8 = _0x400d8c('../BGame/m' + 'gr/BAdMgr'), _0x25bd16 = _0x400d8c('../BGame/B' + 'Enum'), _0x50d508 = _0x400d8c('../manager' + '/ExportGam' + 'eManager'), _0x395b69 = _0x400d8c('../CGame/c' + 'ljdSdk'), _0x602fa4 = function () {
                    function _0x399a1f() {
                    }
                    return _0x399a1f['contrastUs' + 'erHaveCarI' + 'strue'] = function () {
                        for (var _0x400fb6 = _0x313b53['default']['getRandomA' + 'rr'](0x0, _0x2c9069['default']['LuckyCarAr' + 'r']['length'] - 0x1, _0x2c9069['default']['LuckyCarAr' + 'r']['length'] - 0x1), _0x26de47 = 0x0; _0x26de47 < _0x400fb6['length']; _0x26de47++) {
                            var _0xab9e7d = this['userHaveCa' + 'rArr'](_0x2c9069['default']['LuckyCarAr' + 'r'][_0x400fb6[_0x26de47]]['id']);
                            if (!_0xab9e7d)
                                return !0x0;
                        }
                        return !0x1;
                    }, _0x399a1f['userHaveCa' + 'rArr'] = function (_0x1b3d2b) {
                        for (var _0x4c0237 = 0x0; _0x4c0237 < _0x230ef5['default']['UserHaveCa' + 'rArr']['length']; _0x4c0237++) {
                            var _0x160ca9 = _0x230ef5['default']['UserHaveCa' + 'rArr'][_0x4c0237];
                            if (_0x160ca9 + 0x3e8 == _0x1b3d2b)
                                return !0x0;
                        }
                        return !0x1;
                    }, _0x399a1f['initShare'] = function () {
                        for (var _0x4589b0 = _0x31f8e3['default']['getTableMg' + 'r']()['getTable']('game_share' + '_config'), _0x9372bb = _0x4589b0['getRowNum'](), _0x27e6ea = [], _0x1ea815 = 0x0; _0x9372bb > _0x1ea815; _0x1ea815++) {
                            var _0x131e07 = _0x1f262a['default']['getMgr']()['getUrl'](_0x4ec23b['EUrl']['res']) + '_' + (_0x1ea815 + 0x1) + '.jpg', _0x3ff24b = _0x3f58ef['default']['getMgr']()['addShareMo' + 'del'](_0x4589b0['getData'](_0x1ea815), _0x131e07);
                            _0x27e6ea['push'](_0x3ff24b);
                        }
                        var _0x50a7ee = _0x3f58ef['default']['getMgr']()['addSharePo' + 'int'](_0x27e6ea);
                        _0x3f58ef['default']['getMgr']()['setShareMe' + 'nu'](_0x50a7ee);
                    }, _0x399a1f['newDot'] = function (_0x503c0a) {
                        _0x395b69['default']['isNewPlaye' + 'r'] && _0x50d508['default']['Instance']()['reportCust' + 'omEvent']('流失统计', _0x503c0a);
                    }, _0x399a1f['initBanner'] = function () {
                    }, _0x399a1f['loopShowBa' + 'nnerAd'] = function () {
                        this['isLoopShow' + 'Banner'] && this['showBanner' + 'Ad'](this['isSelectba' + 'nner'], this['selectbann' + 'erPox']);
                    }, _0x399a1f['clearLoopS' + 'howBanner'] = function () {
                        Laya['timer']['clear'](this, this['loopShowBa' + 'nnerAd']);
                    }, _0x399a1f['showBanner' + 'Ad'] = function (_0x2ba35f, _0x1e7eb1) {
                    }, _0x399a1f['setBannerP' + 'osX'] = function (_0x10a45d, _0x362fae) {
                    }, _0x399a1f['hideBanner'] = function () {
                    }, _0x399a1f['isLoopShow' + 'Banner'] = !0x1, _0x399a1f['banner'] = null, _0x399a1f['isSelectba' + 'nner'] = !0x1, _0x399a1f['selectbann' + 'erPox'] = 0x0, _0x399a1f;
                }();
            _0x4c2edf['default'] = _0x602fa4;
        },
        {
            '../BGame/BEnum': 0x2,
            '../BGame/BGame': 0x3,
            '../BGame/mgr/BAdMgr': 0x11,
            '../BGame/mgr/BShareMgr': 0x13,
            '../BGame/mgr/BUrlMgr': 0x14,
            '../CGame/cljdSdk': 0x19,
            '../config/CarDataConfig': 0x3b,
            '../config/Config': 0x3c,
            '../constant/enums': 0x3d,
            '../data/RoleInfo': 0x3f,
            '../manager/ExportGameManager': 0x4c,
            './MathUtil': 0x5c
        }
    ],
    0x5c: [
        function (_0x1e23a4, _0xe6884, _0x119c42) {
            'use strict';
            var _0x29729c = this && this['__awaiter'] || function (_0x2b5aa7, _0x337a04, _0x3cc513, _0xe15762) {
                    return new (_0x3cc513 || (_0x3cc513 = Promise))(function (_0x4a4cda, _0x11ccd1) {
                        function _0x3b89f9(_0x3598b3) {
                            try {
                                _0x3c756b(_0xe15762['next'](_0x3598b3));
                            } catch (_0xd1127b) {
                                _0x11ccd1(_0xd1127b);
                            }
                        }
                        function _0x579939(_0x168f95) {
                            try {
                                _0x3c756b(_0xe15762['throw'](_0x168f95));
                            } catch (_0x4aa835) {
                                _0x11ccd1(_0x4aa835);
                            }
                        }
                        function _0x3c756b(_0x5079e4) {
                            _0x5079e4['done'] ? _0x4a4cda(_0x5079e4['value']) : new _0x3cc513(function (_0x46a4e6) {
                                _0x46a4e6(_0x5079e4['value']);
                            })['then'](_0x3b89f9, _0x579939);
                        }
                        _0x3c756b((_0xe15762 = _0xe15762['apply'](_0x2b5aa7, _0x337a04 || []))['next']());
                    });
                }, _0x32c3e = this && this['__generato' + 'r'] || function (_0x2568a4, _0x5279f8) {
                    function _0x55e9e5(_0x5e7dc2) {
                        return function (_0x59a8f5) {
                            return _0x57f0ce([
                                _0x5e7dc2,
                                _0x59a8f5
                            ]);
                        };
                    }
                    function _0x57f0ce(_0x50bf4e) {
                        if (_0x5706bd)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x4b2d81;)
                            try {
                                if (_0x5706bd = 0x1, _0x18242e && (_0x5990b8 = 0x2 & _0x50bf4e[0x0] ? _0x18242e['return'] : _0x50bf4e[0x0] ? _0x18242e['throw'] || ((_0x5990b8 = _0x18242e['return']) && _0x5990b8['call'](_0x18242e), 0x0) : _0x18242e['next']) && !(_0x5990b8 = _0x5990b8['call'](_0x18242e, _0x50bf4e[0x1]))['done'])
                                    return _0x5990b8;
                                switch (_0x18242e = 0x0, _0x5990b8 && (_0x50bf4e = [
                                        0x2 & _0x50bf4e[0x0],
                                        _0x5990b8['value']
                                    ]), _0x50bf4e[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x5990b8 = _0x50bf4e;
                                    break;
                                case 0x4:
                                    return _0x4b2d81['label']++, {
                                        'value': _0x50bf4e[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x4b2d81['label']++, _0x18242e = _0x50bf4e[0x1], _0x50bf4e = [0x0];
                                    continue;
                                case 0x7:
                                    _0x50bf4e = _0x4b2d81['ops']['pop'](), _0x4b2d81['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x5990b8 = _0x4b2d81['trys'], !(_0x5990b8 = _0x5990b8['length'] > 0x0 && _0x5990b8[_0x5990b8['length'] - 0x1]) && (0x6 === _0x50bf4e[0x0] || 0x2 === _0x50bf4e[0x0])) {
                                        _0x4b2d81 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x50bf4e[0x0] && (!_0x5990b8 || _0x50bf4e[0x1] > _0x5990b8[0x0] && _0x50bf4e[0x1] < _0x5990b8[0x3])) {
                                        _0x4b2d81['label'] = _0x50bf4e[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x50bf4e[0x0] && _0x4b2d81['label'] < _0x5990b8[0x1]) {
                                        _0x4b2d81['label'] = _0x5990b8[0x1], _0x5990b8 = _0x50bf4e;
                                        break;
                                    }
                                    if (_0x5990b8 && _0x4b2d81['label'] < _0x5990b8[0x2]) {
                                        _0x4b2d81['label'] = _0x5990b8[0x2], _0x4b2d81['ops']['push'](_0x50bf4e);
                                        break;
                                    }
                                    _0x5990b8[0x2] && _0x4b2d81['ops']['pop'](), _0x4b2d81['trys']['pop']();
                                    continue;
                                }
                                _0x50bf4e = _0x5279f8['call'](_0x2568a4, _0x4b2d81);
                            } catch (_0x333b3e) {
                                _0x50bf4e = [
                                    0x6,
                                    _0x333b3e
                                ], _0x18242e = 0x0;
                            } finally {
                                _0x5706bd = _0x5990b8 = 0x0;
                            }
                        if (0x5 & _0x50bf4e[0x0])
                            throw _0x50bf4e[0x1];
                        return {
                            'value': _0x50bf4e[0x0] ? _0x50bf4e[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x5706bd, _0x18242e, _0x5990b8, _0x4afd53, _0x4b2d81 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x5990b8[0x0])
                                    throw _0x5990b8[0x1];
                                return _0x5990b8[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x4afd53 = {
                        'next': _0x55e9e5(0x0),
                        'throw': _0x55e9e5(0x1),
                        'return': _0x55e9e5(0x2)
                    }, 'function' == typeof Symbol && (_0x4afd53[Symbol['iterator']] = function () {
                        return this;
                    }), _0x4afd53;
                };
            Object['defineProp' + 'erty'](_0x119c42, '__esModule', { 'value': !0x0 });
            var _0x53b9c6 = _0x1e23a4('../constan' + 't/enums'), _0x2cd61a = _0x1e23a4('../GameCon' + 'fig'), _0xb4d3a = _0x1e23a4('../manager' + '/SoundMana' + 'ger'), _0x15e5a2 = function () {
                    function _0x4f17ab() {
                    }
                    return _0x4f17ab['getRandom'] = function (_0x44fcdc) {
                        return Math['floor'](Math['random']() * _0x44fcdc);
                    }, _0x4f17ab['randomInSe' + 'ction'] = function (_0x50b633, _0x371ae1) {
                        return _0x50b633 + Math['floor'](Math['random']() * (_0x371ae1 - _0x50b633 + 0x1));
                    }, _0x4f17ab['getRandomA' + 'rr'] = function (_0x4e63d5, _0xfe802f, _0x5cfecd) {
                        if (0x0 >= _0x5cfecd || _0x4e63d5 >= _0xfe802f)
                            return null;
                        for (var _0x35e72a = []; _0x5cfecd > 0x0;) {
                            var _0x33dad7 = _0x4e63d5 + Math['floor'](Math['random']() * (_0xfe802f - _0x4e63d5 + 0x1));
                            -0x1 == _0x35e72a['indexOf'](_0x33dad7) && (_0x35e72a['push'](_0x33dad7), _0x5cfecd--);
                        }
                        return _0x35e72a;
                    }, _0x4f17ab['getRandNin' + 'M'] = function (_0x374bf3, _0x3a9ddf, _0x5bb96e) {
                        void 0x0 === _0x5bb96e && (_0x5bb96e = !0x1);
                        for (var _0x6735a7 = [], _0x29881b = 0x0; _0x374bf3 > _0x29881b; _0x29881b++)
                            _0x6735a7['push'](_0x29881b);
                        for (var _0x4a8316, _0x4f7c26, _0x2dd43f = _0x6735a7['length']; _0x2dd43f > _0x6735a7['length'] - _0x3a9ddf;)
                            _0x4f7c26 = this['getRandom'](_0x2dd43f), _0x2dd43f--, _0x4a8316 = _0x6735a7[_0x2dd43f], _0x6735a7[_0x2dd43f] = _0x6735a7[_0x4f7c26], _0x6735a7[_0x4f7c26] = _0x4a8316;
                        return _0x5bb96e ? _0x6735a7['slice'](_0x6735a7['length'] - _0x3a9ddf, _0x6735a7['length'])['sort'](function (_0xaa8a78, _0x1ea26c) {
                            return _0xaa8a78 - _0x1ea26c;
                        }) : _0x6735a7['slice'](_0x6735a7['length'] - _0x3a9ddf, _0x6735a7['length']);
                    }, _0x4f17ab['transToNum' + 'ber'] = function (_0x8cf18f, _0x5dfe60) {
                        return +(_0x8cf18f || _0x5dfe60);
                    }, _0x4f17ab['transToStr' + 'Number'] = function (_0x4d2258) {
                        var _0xed669f = '' + _0x4d2258, _0x2c36cd = _0xed669f['split']('')['reverse']()['join']('');
                        return _0x2c36cd = _0x2c36cd['replace'](/(...)/, '$1,'), _0x2c36cd = _0x2c36cd['split']('')['reverse']()['join']('');
                    }, _0x4f17ab['bezierPath'] = function (_0x38c58f, _0x27fefe, _0x2ed94e, _0x41ae68, _0xd0f54d) {
                        var _0x5a55ab = [], _0x58c072 = [], _0x5065b4 = _0x38c58f['distance'](_0x27fefe['x'], _0x27fefe['y']), _0x5187a5 = _0x5065b4 / (0x2 * _0x2ed94e), _0x106e46 = Math['atan2'](_0x27fefe['y'] - _0x38c58f['y'], _0x27fefe['x'] - _0x38c58f['x']);
                        _0x58c072['push'](_0x38c58f['x'], _0x38c58f['y']);
                        for (var _0x3d0c1b = 0x1, _0xa101a0 = 0x0; _0x2ed94e - 0x1 + _0x2ed94e > _0xa101a0; _0xa101a0++) {
                            var _0x4cafe2 = _0x38c58f['x'] + Math['cos'](_0x106e46) * (_0x5187a5 * (_0xa101a0 + 0x1)), _0x2d6f33 = _0x38c58f['y'] + Math['sin'](_0x106e46) * (_0x5187a5 * (_0xa101a0 + 0x1));
                            _0xa101a0 % 0x2 == 0x0 && (_0x4cafe2 += Math['cos'](_0x106e46 + (0x1 == _0x3d0c1b ? -0x5a * Math['PI'] / 0xb4 : 0x10e * Math['PI'] / 0xb4)) * _0x41ae68 * _0x3d0c1b, _0x2d6f33 += Math['sin'](_0x106e46 + (0x1 == _0x3d0c1b ? -0x5a * Math['PI'] / 0xb4 : 0x10e * Math['PI'] / 0xb4)) * _0x41ae68 * _0x3d0c1b, _0x3d0c1b *= -0x1), _0x58c072['push'](_0x4cafe2, _0x2d6f33);
                        }
                        _0x58c072['push'](_0x27fefe['x'], _0x27fefe['y']), _0x5a55ab = Laya['Bezier']['I']['getBezierP' + 'oints'](_0x58c072, _0xd0f54d, 0x2);
                        for (var _0x4eb982 = 0x0, _0x344051 = [], _0x515b3c = 0x0, _0x2ed94e = _0x5a55ab['length']; _0x2ed94e > _0x515b3c; _0x515b3c += 0x2)
                            _0x344051[_0x4eb982] = [], _0x344051[_0x4eb982][0x0] = parseFloat(_0x5a55ab[_0x515b3c]), _0x344051[_0x4eb982][0x1] = parseFloat(_0x5a55ab[_0x515b3c + 0x1]), _0x4eb982++;
                        return _0x344051;
                    }, _0x4f17ab['parseStrin' + 'g'] = function (_0x240697, _0x22bf49) {
                        var _0x5ebd1c = [], _0x5bd8cb = _0x240697['split'](';');
                        return _0x22bf49 ? _0x5bd8cb['filter'](function (_0x28e84d) {
                            var _0x5cda79 = _0x28e84d['split']('-');
                            _0x5ebd1c['push'](_0x5cda79);
                        }) : (_0x5ebd1c = _0x5bd8cb, _0x5ebd1c['forEach'](function (_0x57acc9, _0x5588f6) {
                            _0x5ebd1c[_0x5588f6] = Number(_0x57acc9);
                        })), _0x5ebd1c;
                    }, _0x4f17ab['outRepetit' + 'ion'] = function (_0x38214c) {
                        for (var _0x128b76 = [], _0x56fb15 = 0x0; _0x56fb15 < _0x38214c['length']; _0x56fb15++) {
                            var _0x40b803 = _0x38214c[_0x56fb15];
                            -0x1 == _0x128b76['indexOf'](_0x40b803) && _0x128b76['push'](_0x40b803);
                        }
                        return _0x128b76;
                    }, _0x4f17ab['parseTimeB' + 'ynumber'] = function (_0x2adff9, _0x2651b0) {
                        var _0x15e2a7, _0x370aac, _0x585358;
                        _0x370aac = this['number2str' + 'ing'](Math['floor'](_0x2adff9 % 0x3c)), _0x15e2a7 = this['number2str' + 'ing'](Math['floor'](_0x2adff9 / 0x3c) % 0x3c), _0x585358 = this['number2str' + 'ing'](Math['floor'](_0x2adff9 / 0x3c / 0x3c));
                        var _0x5dc197 = _0x2adff9 > 0x0 ? _0x585358 + ':' + _0x15e2a7 + ':' + _0x370aac : '00:00:00';
                        return _0x2651b0 || (_0x5dc197 = _0x2adff9 > 0x0 ? _0x15e2a7 + ':' + _0x370aac : '00:00'), _0x5dc197;
                    }, _0x4f17ab['number2str' + 'ing'] = function (_0x1fad2d) {
                        var _0x381902;
                        return _0x381902 = _0x1fad2d > 0x9 ? '' + _0x1fad2d : '0' + _0x1fad2d;
                    }, _0x4f17ab['getTimesta' + 'mp'] = function () {
                        var _0x105d9d, _0x5495de = new Date();
                        return _0x105d9d = _0x5495de['getTime']();
                    }, _0x4f17ab['isSameDay'] = function (_0x1f9046) {
                        if (0x0 >= _0x1f9046)
                            return !0x1;
                        var _0x3f9b17 = new Date(this['getTimesta' + 'mp']()), _0x163efc = new Date(_0x1f9046);
                        return _0x3f9b17['toDateStri' + 'ng']() == _0x163efc['toDateStri' + 'ng']();
                    }, _0x4f17ab['playAnim'] = function (_0x5ab7c3, _0x4a8fbd, _0x4cc4c3) {
                        return void 0x0 === _0x4cc4c3 && (_0x4cc4c3 = 0x1), _0x29729c(this, void 0x0, void 0x0, function () {
                            var _0x33ab02, _0x2ecaa5, _0x25c7a7, _0x113d52;
                            return _0x32c3e(this, function (_0x30b3da) {
                                switch (_0x30b3da['label']) {
                                case 0x0:
                                    return [
                                        0x4,
                                        this['createImg'](_0x5ab7c3, _0x4cc4c3)
                                    ];
                                case 0x1:
                                    for (_0x30b3da['sent'](), _0x33ab02 = 0x0, _0x2ecaa5 = 0x0, _0x25c7a7 = this['imgList']['length'], _0x113d52 = _0x25c7a7 - 0x1; _0x113d52 >= 0x0; _0x113d52--)
                                        0x2 == _0x4cc4c3 || _0x2ecaa5++;
                                    return [0x2];
                                }
                            });
                        });
                    }, _0x4f17ab['playTweenI' + 'mg'] = function (_0xc8fc73, _0x5e6fd7, _0x4a3239, _0x4a1f17) {
                        return void 0x0 === _0x4a1f17 && (_0x4a1f17 = 0x1), _0x29729c(this, void 0x0, void 0x0, function () {
                            var _0x4d53fd, _0x4c9b6f, _0x5a0e4a, _0x5ab7e9, _0xc66745, _0x208a37, _0x53fbbb, _0x51d883, _0x4a1eed, _0x353678 = this;
                            return _0x32c3e(this, function (_0x43c286) {
                                switch (_0x43c286['label']) {
                                case 0x0:
                                    return [
                                        0x4,
                                        this['createImg'](_0xc8fc73, _0x4a1f17)
                                    ];
                                case 0x1:
                                    for (_0x43c286['sent'](), _0x4d53fd = _0x5e6fd7['localToGlo' + 'bal'](new Laya['Point'](0x0, 0x0)), _0x4c9b6f = 0x0, _0x5a0e4a = 0x0, _0x5ab7e9 = this['imgList']['length'], _0xc66745 = _0x4d53fd['x'] + _0x5e6fd7['width'] / 0x2 * 0.7, _0x208a37 = _0x4d53fd['y'] + _0x5e6fd7['height'] / 0x2 * 0.7, _0x53fbbb = function (_0x84daee) {
                                            var _0x531538 = _0x51d883['imgList'][_0x84daee];
                                            Laya['Tween']['to'](_0x531538, {
                                                'scaleX': 1.1,
                                                'scaleY': 1.1,
                                                'alpha': 0x1
                                            }, 0x14 * _0x5a0e4a + 0xc8, null, Laya['Handler']['create'](_0x51d883, function () {
                                                Laya['Tween']['to'](_0x531538, {
                                                    'x': _0xc66745,
                                                    'y': _0x208a37,
                                                    'scaleX': 0.7,
                                                    'scaleY': 0.7
                                                }, 0x1e * _0x5a0e4a + 0x190, null, Laya['Handler']['create'](_0x353678, function () {
                                                    _0x4c9b6f++, _0x4c9b6f == _0x5ab7e9 && _0x353678['clearImg']();
                                                }), 0x14 * _0x5ab7e9 + 0x64);
                                            })), _0x5a0e4a++;
                                        }, _0x51d883 = this, _0x4a1eed = _0x5ab7e9 - 0x1; _0x4a1eed >= 0x0; _0x4a1eed--)
                                        _0x53fbbb(_0x4a1eed);
                                    return [0x2];
                                }
                            });
                        });
                    }, _0x4f17ab['createImg'] = function (_0x1aa633, _0x55d6b8) {
                        var _0x25a076 = this;
                        void 0x0 === _0x55d6b8 && (_0x55d6b8 = 0x1);
                        var _0x5af74c = '';
                        switch (_0x1aa633) {
                        case _0x53b9c6['CurrencyTy' + 'pe']['Gold']:
                            _0xb4d3a['default']['playEffect'](_0x53b9c6['SoundName']['HuoDeJinBi']), _0x5af74c = 'panelUI/co' + 'in.png';
                            break;
                        case _0x53b9c6['CurrencyTy' + 'pe']['Diamond']:
                            _0xb4d3a['default']['playEffect'](_0x53b9c6['SoundName']['HuoDeJinBi']), _0x5af74c = 'panelUI/co' + 'in.png';
                            break;
                        case _0x53b9c6['CurrencyTy' + 'pe']['power']:
                            _0xb4d3a['default']['playEffect'](_0x53b9c6['SoundName']['HuoDeTiLi']), _0x5af74c = 'panelUI/st' + 'rength.png';
                        }
                        return new Promise(function (_0x1fb899, _0x4d11d5) {
                            if (_0x1aa633 == _0x53b9c6['CurrencyTy' + 'pe']['Diamond'])
                                for (var _0x18b6a1 = 0x0; 0xa > _0x18b6a1; _0x18b6a1++) {
                                    var _0x19f3fa = _0x25a076['createSpri' + 'te'](_0x5af74c);
                                    Laya['stage']['addChild'](_0x19f3fa), _0x19f3fa['zOrder'] = 0x2710;
                                    var _0x3a7b33 = Math['random']() < 0.5 ? 0x1 : -0x1;
                                    _0x19f3fa['x'] = Math['random']() * _0x3a7b33 * 0x78 + Laya['stage']['width'] / 0x2, _0x19f3fa['y'] = Math['random']() * _0x3a7b33 * 0x78 + Laya['stage']['height'] / 0x2 - 0xc8, _0x25a076['imgList']['push'](_0x19f3fa), _0x19f3fa['scaleX'] = _0x19f3fa['scaleY'] = 0x0, _0x19f3fa['anchorX'] = _0x19f3fa['anchorY'] = 0.5;
                                }
                            else {
                                if (_0x1aa633 == _0x53b9c6['CurrencyTy' + 'pe']['Gold'])
                                    for (var _0x18b6a1 = 0x0; 0xa > _0x18b6a1; _0x18b6a1++) {
                                        var _0x19f3fa = _0x25a076['createSpri' + 'te'](_0x5af74c);
                                        _0x19f3fa['zOrder'] = 0x2710, Laya['stage']['addChild'](_0x19f3fa), _0x25a076['imgList']['push'](_0x19f3fa), _0x19f3fa['scaleX'] = _0x19f3fa['scaleY'] = 0x0, _0x19f3fa['anchorX'] = _0x19f3fa['anchorY'] = 0.5, _0x25a076['getPoint'](_0x19f3fa, _0x18b6a1);
                                    }
                                else {
                                    if (_0x1aa633 == _0x53b9c6['CurrencyTy' + 'pe']['power'])
                                        for (var _0x18b6a1 = 0x0; 0x3 > _0x18b6a1; _0x18b6a1++) {
                                            var _0x19f3fa = _0x25a076['createSpri' + 'te'](_0x5af74c);
                                            _0x19f3fa['zOrder'] = 0x2710, Laya['stage']['addChild'](_0x19f3fa), _0x25a076['imgList']['push'](_0x19f3fa), _0x19f3fa['scaleX'] = _0x19f3fa['scaleY'] = 0x0, _0x19f3fa['anchorX'] = _0x19f3fa['anchorY'] = 0.5;
                                            var _0x3a7b33 = _0x25a076['isOdd'](_0x18b6a1) ? 0x1 : -0x1;
                                            _0x19f3fa['x'] = -0xa + Math['random']() * _0x3a7b33 * 0x50 + Laya['stage']['width'] / 0x2, _0x19f3fa['y'] = -0x3c + Math['random']() * _0x3a7b33 * 0x50 + Laya['stage']['height'] / 0x2 - 0xc8;
                                        }
                                }
                            }
                            _0x1fb899();
                        });
                    }, _0x4f17ab['clearImg'] = function () {
                        for (var _0x517578 = 0x0; _0x517578 < this['imgList']['length']; _0x517578++) {
                            var _0x495f6a = this['imgList'][_0x517578];
                            _0x495f6a['parent']['removeChil' + 'd'](_0x495f6a), _0x495f6a = null;
                        }
                        this['imgList'] = [];
                    }, _0x4f17ab['getPoint'] = function (_0x442fdd, _0x53b6ef, _0x331771) {
                        void 0x0 === _0x331771 && (_0x331771 = 0x1);
                        var _0x1d63ed = 0x8c, _0xd2c82 = 0x168;
                        0x2 == _0x331771 && (_0x1d63ed = 0xb4);
                        var _0x3593d0 = _0x1d63ed * Math['cos'](_0xd2c82 * _0x53b6ef / Math['PI'] / 0xb4), _0x2bced5 = _0x1d63ed * Math['sin'](_0xd2c82 * _0x53b6ef / Math['PI'] / 0xb4);
                        _0x442fdd['x'] = _0x3593d0 + Laya['stage']['width'] / 0x2, _0x442fdd['y'] = _0x2bced5 + Laya['stage']['height'] / 0x2;
                    }, _0x4f17ab['createSpri' + 'te'] = function (_0x476326) {
                        var _0xc0313a = new Laya['Image'](_0x476326);
                        return _0xc0313a;
                    }, _0x4f17ab['isOdd'] = function (_0x464c30) {
                        return _0x464c30 % 0x2 != 0x0;
                    }, _0x4f17ab['randomArra' + 'y'] = function (_0x4d62fb) {
                        var _0x35ebc4 = Math['floor'](Math['random']() * _0x4d62fb['length']);
                        return _0x4d62fb[_0x35ebc4];
                    }, _0x4f17ab['getOffsetH' + 'eight'] = function () {
                        return Laya['stage']['height'] - _0x2cd61a['default']['height'];
                    }, _0x4f17ab['imgList'] = [], _0x4f17ab;
                }();
            _0x119c42['default'] = _0x15e5a2;
        },
        {
            '../GameConfig': 0x22,
            '../constant/enums': 0x3d,
            '../manager/SoundManager': 0x50
        }
    ],
    0x5d: [
        function (_0x899ff, _0x46c431, _0x47fe52) {
            'use strict';
            Object['defineProp' + 'erty'](_0x47fe52, '__esModule', { 'value': !0x0 });
            var _0x399a74 = _0x899ff('../config/' + 'CarDataCon' + 'fig'), _0x191142 = function () {
                    function _0x5b9c73() {
                    }
                    return _0x5b9c73['checkPoint' + 'InRect'] = function (_0x609c2e, _0x4fee52) {
                        return _0x609c2e['x'] > _0x4fee52['x'] && _0x609c2e['x'] < _0x4fee52['x'] + _0x4fee52['width'] && _0x609c2e['z'] > _0x4fee52['z'] && _0x609c2e['z'] < _0x4fee52['z'] + _0x4fee52['height'] ? !0x0 : !0x1;
                    }, _0x5b9c73['againstLer' + 'p'] = function (_0x311585, _0x135795, _0x103c80) {
                        return (_0x103c80 - _0x311585) / (_0x135795 - _0x311585);
                    }, _0x5b9c73['lerp'] = function (_0x482434, _0x375948, _0x2e19d7) {
                        return 0x0 >= _0x2e19d7 ? _0x482434 : _0x2e19d7 >= 0x1 ? _0x375948 : _0x2e19d7 * _0x375948 + (0x1 - _0x2e19d7) * _0x482434;
                    }, _0x5b9c73['changeSpee' + 'd'] = function (_0x2b4ad9) {
                        var _0x59a44f = this['againstLer' + 'p'](_0x399a74['default']['reality_in' + 'itialSpeed'], _0x399a74['default']['initialSpe' + 'edmax'], _0x2b4ad9);
                        return this['lerp'](_0x399a74['default']['minspeed'], _0x399a74['default']['maxspeed'], _0x59a44f);
                    }, _0x5b9c73['limitLerp'] = function (_0x12e390, _0x5e96a1, _0x34d5f5, _0x3fdc3f, _0x42d633) {
                        if (void 0x0 === _0x3fdc3f && (_0x3fdc3f = -0x1), void 0x0 === _0x42d633 && (_0x42d633 = -0x1), 0x0 >= _0x34d5f5)
                            return _0x12e390;
                        if (_0x34d5f5 >= 0x1)
                            return _0x5e96a1;
                        var _0x186954 = _0x34d5f5 * _0x5e96a1 + (0x1 - _0x34d5f5) * _0x12e390;
                        return _0x3fdc3f >= 0x0 ? Math['abs'](_0x186954 - _0x12e390) < _0x3fdc3f && (_0x12e390 > _0x186954 ? (_0x186954 = _0x12e390 - _0x3fdc3f, _0x5e96a1 > _0x186954 && (_0x186954 = _0x5e96a1)) : _0x186954 > _0x12e390 && (_0x186954 = _0x12e390 + _0x3fdc3f, _0x186954 > _0x5e96a1 && (_0x186954 = _0x5e96a1))) : _0x42d633 >= 0x0 && Math['abs'](_0x186954 - _0x12e390) > _0x42d633 && (_0x12e390 > _0x186954 ? (_0x186954 = _0x12e390 - _0x42d633, _0x5e96a1 > _0x186954 && (_0x186954 = _0x5e96a1)) : _0x186954 > _0x12e390 && (_0x186954 = _0x12e390 + _0x42d633, _0x186954 > _0x5e96a1 && (_0x186954 = _0x5e96a1))), _0x186954;
                    }, _0x5b9c73['limitNumbe' + 'r'] = function (_0x5c11a4, _0x31f981, _0x3bb524) {
                        return _0x5c11a4 = _0x5c11a4 > _0x31f981 ? _0x5c11a4 : _0x31f981, _0x5c11a4 = _0x3bb524 > _0x5c11a4 ? _0x5c11a4 : _0x3bb524;
                    }, _0x5b9c73['pointDista' + 'nceSquare'] = function (_0x328995, _0x3ea904) {
                        return Math['sqrt']((_0x328995['x'] - _0x3ea904['x']) * (_0x328995['x'] - _0x3ea904['x']) + (_0x328995['y'] - _0x3ea904['y']) * (_0x328995['y'] - _0x3ea904['y']) + (_0x328995['z'] - _0x3ea904['z']) * (_0x328995['z'] - _0x3ea904['z']));
                    }, _0x5b9c73['pointDista' + 'nce'] = function (_0x328887, _0x2a281b) {
                        return Math['sqrt']((_0x328887['x'] - _0x2a281b['x']) * (_0x328887['x'] - _0x2a281b['x']) + (_0x328887['y'] - _0x2a281b['y']) * (_0x328887['y'] - _0x2a281b['y']));
                    }, _0x5b9c73['randNum'] = function (_0x19ecb1, _0x21a7a7) {
                        return parseInt('' + (Math['random']() * (_0x21a7a7 - _0x19ecb1) + _0x19ecb1), 0xa);
                    }, _0x5b9c73['randomsort'] = function (_0x3fae3a, _0x565e2a) {
                        return Math['random']() > 0.5 ? -0x1 : 0x1;
                    }, _0x5b9c73['getTanAngl' + 'e'] = function (_0x252da8, _0x1d3f33) {
                        var _0x26db0d = Math['atan'](Math['abs'](_0x252da8) / Math['abs'](_0x1d3f33)) / 0.01745;
                        return _0x1d3f33 >= 0x0 && 0x0 >= _0x252da8 ? _0x26db0d : 0x0 >= _0x1d3f33 && 0x0 >= _0x252da8 ? 0xb4 - _0x26db0d : 0x0 >= _0x1d3f33 && _0x252da8 >= 0x0 ? 0xb4 + _0x26db0d : _0x1d3f33 >= 0x0 && _0x252da8 >= 0x0 ? 0x168 - _0x26db0d : void 0x0;
                    }, _0x5b9c73;
                }();
            _0x47fe52['default'] = _0x191142;
        },
        { '../config/CarDataConfig': 0x3b }
    ],
    0x5e: [
        function (_0x4ad3a2, _0x418ff3, _0x51b870) {
            'use strict';
            var _0x3e129d = this && this['__awaiter'] || function (_0x18571b, _0x13fe97, _0x2f8530, _0x14c55a) {
                    return new (_0x2f8530 || (_0x2f8530 = Promise))(function (_0x3926d1, _0x21f9b6) {
                        function _0x32a531(_0x28e57e) {
                            try {
                                _0x26c627(_0x14c55a['next'](_0x28e57e));
                            } catch (_0x5e4b93) {
                                _0x21f9b6(_0x5e4b93);
                            }
                        }
                        function _0x545fa3(_0x1a0f15) {
                            try {
                                _0x26c627(_0x14c55a['throw'](_0x1a0f15));
                            } catch (_0x8bec85) {
                                _0x21f9b6(_0x8bec85);
                            }
                        }
                        function _0x26c627(_0x20e14a) {
                            _0x20e14a['done'] ? _0x3926d1(_0x20e14a['value']) : new _0x2f8530(function (_0x5d62f3) {
                                _0x5d62f3(_0x20e14a['value']);
                            })['then'](_0x32a531, _0x545fa3);
                        }
                        _0x26c627((_0x14c55a = _0x14c55a['apply'](_0x18571b, _0x13fe97 || []))['next']());
                    });
                }, _0x239391 = this && this['__generato' + 'r'] || function (_0x55cc46, _0xcc2c97) {
                    function _0x2e2045(_0x50c627) {
                        return function (_0x2ed718) {
                            return _0x1d8052([
                                _0x50c627,
                                _0x2ed718
                            ]);
                        };
                    }
                    function _0x1d8052(_0x51aa31) {
                        if (_0x261d99)
                            throw new TypeError('Generator\x20' + 'is\x20already' + '\x20executing' + '.');
                        for (; _0x6ad8b8;)
                            try {
                                if (_0x261d99 = 0x1, _0x34d1b2 && (_0x2b7117 = 0x2 & _0x51aa31[0x0] ? _0x34d1b2['return'] : _0x51aa31[0x0] ? _0x34d1b2['throw'] || ((_0x2b7117 = _0x34d1b2['return']) && _0x2b7117['call'](_0x34d1b2), 0x0) : _0x34d1b2['next']) && !(_0x2b7117 = _0x2b7117['call'](_0x34d1b2, _0x51aa31[0x1]))['done'])
                                    return _0x2b7117;
                                switch (_0x34d1b2 = 0x0, _0x2b7117 && (_0x51aa31 = [
                                        0x2 & _0x51aa31[0x0],
                                        _0x2b7117['value']
                                    ]), _0x51aa31[0x0]) {
                                case 0x0:
                                case 0x1:
                                    _0x2b7117 = _0x51aa31;
                                    break;
                                case 0x4:
                                    return _0x6ad8b8['label']++, {
                                        'value': _0x51aa31[0x1],
                                        'done': !0x1
                                    };
                                case 0x5:
                                    _0x6ad8b8['label']++, _0x34d1b2 = _0x51aa31[0x1], _0x51aa31 = [0x0];
                                    continue;
                                case 0x7:
                                    _0x51aa31 = _0x6ad8b8['ops']['pop'](), _0x6ad8b8['trys']['pop']();
                                    continue;
                                default:
                                    if (_0x2b7117 = _0x6ad8b8['trys'], !(_0x2b7117 = _0x2b7117['length'] > 0x0 && _0x2b7117[_0x2b7117['length'] - 0x1]) && (0x6 === _0x51aa31[0x0] || 0x2 === _0x51aa31[0x0])) {
                                        _0x6ad8b8 = 0x0;
                                        continue;
                                    }
                                    if (0x3 === _0x51aa31[0x0] && (!_0x2b7117 || _0x51aa31[0x1] > _0x2b7117[0x0] && _0x51aa31[0x1] < _0x2b7117[0x3])) {
                                        _0x6ad8b8['label'] = _0x51aa31[0x1];
                                        break;
                                    }
                                    if (0x6 === _0x51aa31[0x0] && _0x6ad8b8['label'] < _0x2b7117[0x1]) {
                                        _0x6ad8b8['label'] = _0x2b7117[0x1], _0x2b7117 = _0x51aa31;
                                        break;
                                    }
                                    if (_0x2b7117 && _0x6ad8b8['label'] < _0x2b7117[0x2]) {
                                        _0x6ad8b8['label'] = _0x2b7117[0x2], _0x6ad8b8['ops']['push'](_0x51aa31);
                                        break;
                                    }
                                    _0x2b7117[0x2] && _0x6ad8b8['ops']['pop'](), _0x6ad8b8['trys']['pop']();
                                    continue;
                                }
                                _0x51aa31 = _0xcc2c97['call'](_0x55cc46, _0x6ad8b8);
                            } catch (_0x4c5e7c) {
                                _0x51aa31 = [
                                    0x6,
                                    _0x4c5e7c
                                ], _0x34d1b2 = 0x0;
                            } finally {
                                _0x261d99 = _0x2b7117 = 0x0;
                            }
                        if (0x5 & _0x51aa31[0x0])
                            throw _0x51aa31[0x1];
                        return {
                            'value': _0x51aa31[0x0] ? _0x51aa31[0x1] : void 0x0,
                            'done': !0x0
                        };
                    }
                    var _0x261d99, _0x34d1b2, _0x2b7117, _0x1e94e0, _0x6ad8b8 = {
                            'label': 0x0,
                            'sent': function () {
                                if (0x1 & _0x2b7117[0x0])
                                    throw _0x2b7117[0x1];
                                return _0x2b7117[0x1];
                            },
                            'trys': [],
                            'ops': []
                        };
                    return _0x1e94e0 = {
                        'next': _0x2e2045(0x0),
                        'throw': _0x2e2045(0x1),
                        'return': _0x2e2045(0x2)
                    }, 'function' == typeof Symbol && (_0x1e94e0[Symbol['iterator']] = function () {
                        return this;
                    }), _0x1e94e0;
                };
            Object['defineProp' + 'erty'](_0x51b870, '__esModule', { 'value': !0x0 });
            var _0x361a0f = function () {
                function _0x189c64() {
                }
                return _0x189c64['showAdOrSh' + 'are'] = function (_0x201e94, _0x2b5945, _0x4c9123) {
                    return void 0x0 === _0x4c9123 && (_0x4c9123 = null), _0x3e129d(this, void 0x0, void 0x0, function () {
                        return _0x239391(this, function (_0x3d4eea) {
                            return [0x2];
                        });
                    });
                }, _0x189c64['getStringL' + 'ength'] = function (_0x3fdf4f) {
                    return _0x3fdf4f && _0x3fdf4f['replace'](/[\u0391-\uFFE5]/g, 'aa')['length'] || 0x0;
                }, _0x189c64['getItem'] = function (_0x2c10b6, _0x5e0926) {
                    var _0x3e1f07 = localStorage['getItem'](_0x2c10b6);
                    return null == _0x3e1f07 || '' == _0x3e1f07 ? _0x5e0926 : JSON['parse'](_0x3e1f07);
                }, _0x189c64['setItem'] = function (_0x50e6b8, _0x849ae5) {
                    localStorage['setItem'](_0x50e6b8, _0x849ae5);
                }, _0x189c64;
            }();
            _0x51b870['default'] = _0x361a0f;
        },
        {}
    ]
}, {}, [0x23]);