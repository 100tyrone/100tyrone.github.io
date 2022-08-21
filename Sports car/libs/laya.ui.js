(function (_0x5630a1, _0x28f8da, _0x90a138) {
    var _0x28e3f6 = _0x90a138['un'], _0x179ed5 = _0x90a138['uns'], _0x2f72fa = _0x90a138['static'], _0x25419d = _0x90a138['class'], _0x25c3de = _0x90a138['getset'], _0x1a8000 = _0x90a138['__newvec'], _0x3e28ca = laya['display']['Animation'], _0x40aaea = laya['utils']['Browser'], _0x4c2995 = laya['utils']['ClassUtils'], _0x12fc8f = laya['filters']['ColorFilte' + 'r'], _0x1ebadf = laya['components']['Component'], _0x134fe8 = laya['Const'], _0x31a122 = laya['utils']['Ease'], _0x5b5e73 = laya['events']['Event'], _0x432350 = laya['display']['Graphics'], _0x44d7a5 = laya['utils']['Handler'], _0x2aae8d = laya['display']['Input'], _0x3b96d5 = laya['net']['Loader'], _0x5174a7 = laya['net']['LocalStora' + 'ge'], _0x46403e = laya['maths']['Matrix'], _0x18a838 = laya['display']['Node'], _0x5e6c15 = laya['maths']['Point'], _0x472506 = laya['maths']['Rectangle'], _0x51303c = laya['renders']['Render'], _0x49559f = laya['display']['Scene'], _0x56dabb = laya['utils']['SceneUtils'], _0x4ab096 = laya['display']['Sprite'], _0x537283 = laya['display']['Stage'], _0x279cd6 = laya['display']['Text'], _0x3fdd90 = laya['resource']['Texture'], _0x5cf2ba = laya['utils']['Tween'], _0x2a011f = laya['utils']['Utils'], _0x485a96 = laya['utils']['WeakObject'];
    _0x90a138['interface']('laya.ui.IB' + 'ox'), _0x90a138['interface']('laya.ui.II' + 'tem'), _0x90a138['interface']('laya.ui.IR' + 'ender'), _0x90a138['interface']('laya.ui.IS' + 'elect');
    var _0x17d5a0 = function () {
            function _0x2b41e4() {
            }
            return _0x25419d(_0x2b41e4, 'laya.ui.UI' + 'Utils'), _0x2b41e4['fillArray'] = function (_0x5431c7, _0x1ff7d9, _0x1bf212) {
                var _0x5bfbe6 = _0x5431c7['concat']();
                if (_0x1ff7d9) {
                    var _0x326bfb = _0x1ff7d9['split'](',');
                    for (var _0x459887 = 0x0, _0x39d501 = Math['min'](_0x5bfbe6['length'], _0x326bfb['length']); _0x459887 < _0x39d501; _0x459887++) {
                        var _0x2c2a45 = _0x326bfb[_0x459887];
                        _0x5bfbe6[_0x459887] = _0x2c2a45 == 'true' ? !![] : _0x2c2a45 == 'false' ? ![] : _0x2c2a45;
                        if (_0x1bf212 != null)
                            _0x5bfbe6[_0x459887] = _0x1bf212(_0x2c2a45);
                    }
                }
                return _0x5bfbe6;
            }, _0x2b41e4['toColor'] = function (_0x42be94) {
                return _0x2a011f['toHexColor'](_0x42be94);
            }, _0x2b41e4['gray'] = function (_0x6d8a5c, _0x1d22df) {
                _0x1d22df === void 0x0 && (_0x1d22df = !![]), _0x1d22df ? _0x2b41e4['addFilter'](_0x6d8a5c, _0x2b41e4['grayFilter']) : _0x2b41e4['clearFilte' + 'r'](_0x6d8a5c, _0x12fc8f);
            }, _0x2b41e4['addFilter'] = function (_0x28ee56, _0x2805bb) {
                var _0xd7b880 = _0x28ee56['filters'] || [];
                _0xd7b880['push'](_0x2805bb), _0x28ee56['filters'] = _0xd7b880;
            }, _0x2b41e4['clearFilte' + 'r'] = function (_0x3cce73, _0x5917f5) {
                var _0x155fa9 = _0x3cce73['filters'];
                if (_0x155fa9 != null && _0x155fa9['length'] > 0x0) {
                    for (var _0x1d35ed = _0x155fa9['length'] - 0x1; _0x1d35ed > -0x1; _0x1d35ed--) {
                        var _0x4f9735 = _0x155fa9[_0x1d35ed];
                        if (_0x90a138['__typeof'](_0x4f9735, _0x5917f5))
                            _0x155fa9['splice'](_0x1d35ed, 0x1);
                    }
                    _0x3cce73['filters'] = _0x155fa9;
                }
            }, _0x2b41e4['_getReplac' + 'eStr'] = function (_0x4f4b21) {
                return _0x2b41e4['escapeSequ' + 'ence'][_0x4f4b21];
            }, _0x2b41e4['adptString'] = function (_0x4ba96b) {
                return _0x4ba96b['replace'](/\\(\w)/g, _0x2b41e4['_getReplac' + 'eStr']);
            }, _0x2b41e4['getBindFun'] = function (_0x7c2789) {
                var _0x72fbbb = _0x2b41e4['_funMap']['get'](_0x7c2789);
                if (_0x72fbbb == null) {
                    var _0x361aae = '\x22' + _0x7c2789 + '\x22';
                    _0x361aae = _0x361aae['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22');
                    var _0x519904 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + _0x361aae + ('\x0a}catch(e)' + '{}}})');
                    _0x72fbbb = _0x90a138['_runScript'](_0x519904), _0x2b41e4['_funMap']['set'](_0x7c2789, _0x72fbbb);
                }
                return _0x72fbbb;
            }, _0x2f72fa(_0x2b41e4, [
                'grayFilter',
                function () {
                    return this['grayFilter'] = new _0x12fc8f([
                        0.3086,
                        0.6094,
                        0.082,
                        0x0,
                        0x0,
                        0.3086,
                        0.6094,
                        0.082,
                        0x0,
                        0x0,
                        0.3086,
                        0.6094,
                        0.082,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0
                    ]);
                },
                'escapeSequ' + 'ence',
                function () {
                    return this['escapeSequ' + 'ence'] = {
                        '\x5cn': '\x0a',
                        '\x5ct': '\x09'
                    };
                },
                '_funMap',
                function () {
                    return this['_funMap'] = new _0x485a96();
                }
            ]), _0x2b41e4;
        }(), _0xb0c2d5 = function () {
            function _0x15d10a() {
            }
            return _0x25419d(_0x15d10a, 'laya.ui.St' + 'yles'), _0x15d10a['labelColor'] = '#000000', _0x15d10a['buttonStat' + 'eNum'] = 0x3, _0x15d10a['scrollBarM' + 'inNum'] = 0xf, _0x15d10a['scrollBarD' + 'elayTime'] = 0x1f4, _0x2f72fa(_0x15d10a, [
                'defaultSiz' + 'eGrid',
                function () {
                    return this['defaultSiz' + 'eGrid'] = [
                        0x4,
                        0x4,
                        0x4,
                        0x4,
                        0x0
                    ];
                },
                'labelPaddi' + 'ng',
                function () {
                    return this['labelPaddi' + 'ng'] = [
                        0x2,
                        0x2,
                        0x2,
                        0x2
                    ];
                },
                'inputLabel' + 'Padding',
                function () {
                    return this['inputLabel' + 'Padding'] = [
                        0x1,
                        0x1,
                        0x1,
                        0x3
                    ];
                },
                'buttonLabe' + 'lColors',
                function () {
                    return this['buttonLabe' + 'lColors'] = [
                        '#32556b',
                        '#32cc6b',
                        '#ff0000',
                        '#C0C0C0'
                    ];
                },
                'comboBoxIt' + 'emColors',
                function () {
                    return this['comboBoxIt' + 'emColors'] = [
                        '#5e95b6',
                        '#ffffff',
                        '#000000',
                        '#8fa4b1',
                        '#ffffff'
                    ];
                }
            ]), _0x15d10a;
        }(), _0x2212a1 = function () {
            function _0x5c3638() {
            }
            return _0x25419d(_0x5c3638, 'UIConfig'), _0x5c3638['touchScrol' + 'lEnable'] = !![], _0x5c3638['mouseWheel' + 'Enable'] = !![], _0x5c3638['showButton' + 's'] = !![], _0x5c3638['popupBgCol' + 'or'] = '#000000', _0x5c3638['popupBgAlp' + 'ha'] = 0.5, _0x5c3638['closeDialo' + 'gOnSide'] = !![], _0x5c3638;
        }(), _0x243845 = function (_0xd9e545) {
            function _0x3745b5() {
                this['autoCacheC' + 'md'] = !![], this['_width'] = 0x0, this['_height'] = 0x0, this['_source'] = null, this['_sizeGrid'] = null, this['_isChanged'] = ![], this['_offset'] = null, _0x3745b5['__super']['call'](this);
            }
            _0x25419d(_0x3745b5, 'laya.ui.Au' + 'toBitmap', _0xd9e545);
            var _0x2bba5a = _0x3745b5['prototype'];
            return _0x2bba5a['destroy'] = function () {
                _0xd9e545['prototype']['destroy']['call'](this), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
            }, _0x2bba5a['_setChange' + 'd'] = function () {
                !this['_isChanged'] && (this['_isChanged'] = !![], _0x90a138['timer']['callLater'](this, this['changeSour' + 'ce']));
            }, _0x2bba5a['changeSour' + 'ce'] = function () {
                this['_isChanged'] = ![];
                var _0xdc4db0 = this['_source'];
                if (!_0xdc4db0 || !_0xdc4db0['bitmap'])
                    return;
                var _0x52c1f8 = this['width'], _0x517e24 = this['height'], _0x22ef99 = this['_sizeGrid'], _0xb8eeed = _0xdc4db0['sourceWidt' + 'h'], _0x3b8b57 = _0xdc4db0['sourceHeig' + 'ht'];
                if (!_0x22ef99 || _0xb8eeed === _0x52c1f8 && _0x3b8b57 === _0x517e24)
                    this['clear'](), this['drawTextur' + 'e'](_0xdc4db0, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x52c1f8, _0x517e24);
                else {
                    this['clear']();
                    var _0x2459b2 = _0x22ef99[0x0], _0x185704 = _0x22ef99[0x1], _0x34eae8 = _0x22ef99[0x2], _0x42a3d6 = _0x22ef99[0x3], _0x34ac16 = _0x22ef99[0x4], _0x4af3b3 = ![];
                    _0x52c1f8 == _0xb8eeed && (_0x42a3d6 = _0x185704 = 0x0);
                    _0x517e24 == _0x3b8b57 && (_0x2459b2 = _0x34eae8 = 0x0);
                    if (_0x42a3d6 + _0x185704 > _0x52c1f8) {
                        var _0x276882 = _0x52c1f8;
                        _0x4af3b3 = !![], _0x52c1f8 = _0x42a3d6 + _0x185704, this['save'](), this['clipRect'](0x0, 0x0, _0x276882, _0x517e24);
                    }
                    _0x42a3d6 && _0x2459b2 && this['drawImage'](_0x3745b5['getTexture'](_0xdc4db0, 0x0, 0x0, _0x42a3d6, _0x2459b2), 0x0, 0x0, _0x42a3d6, _0x2459b2), _0x185704 && _0x2459b2 && this['drawImage'](_0x3745b5['getTexture'](_0xdc4db0, _0xb8eeed - _0x185704, 0x0, _0x185704, _0x2459b2), _0x52c1f8 - _0x185704, 0x0, _0x185704, _0x2459b2), _0x42a3d6 && _0x34eae8 && this['drawImage'](_0x3745b5['getTexture'](_0xdc4db0, 0x0, _0x3b8b57 - _0x34eae8, _0x42a3d6, _0x34eae8), 0x0, _0x517e24 - _0x34eae8, _0x42a3d6, _0x34eae8), _0x185704 && _0x34eae8 && this['drawImage'](_0x3745b5['getTexture'](_0xdc4db0, _0xb8eeed - _0x185704, _0x3b8b57 - _0x34eae8, _0x185704, _0x34eae8), _0x52c1f8 - _0x185704, _0x517e24 - _0x34eae8, _0x185704, _0x34eae8), _0x2459b2 && this['drawBitmap'](_0x34ac16, _0x3745b5['getTexture'](_0xdc4db0, _0x42a3d6, 0x0, _0xb8eeed - _0x42a3d6 - _0x185704, _0x2459b2), _0x42a3d6, 0x0, _0x52c1f8 - _0x42a3d6 - _0x185704, _0x2459b2), _0x34eae8 && this['drawBitmap'](_0x34ac16, _0x3745b5['getTexture'](_0xdc4db0, _0x42a3d6, _0x3b8b57 - _0x34eae8, _0xb8eeed - _0x42a3d6 - _0x185704, _0x34eae8), _0x42a3d6, _0x517e24 - _0x34eae8, _0x52c1f8 - _0x42a3d6 - _0x185704, _0x34eae8), _0x42a3d6 && this['drawBitmap'](_0x34ac16, _0x3745b5['getTexture'](_0xdc4db0, 0x0, _0x2459b2, _0x42a3d6, _0x3b8b57 - _0x2459b2 - _0x34eae8), 0x0, _0x2459b2, _0x42a3d6, _0x517e24 - _0x2459b2 - _0x34eae8), _0x185704 && this['drawBitmap'](_0x34ac16, _0x3745b5['getTexture'](_0xdc4db0, _0xb8eeed - _0x185704, _0x2459b2, _0x185704, _0x3b8b57 - _0x2459b2 - _0x34eae8), _0x52c1f8 - _0x185704, _0x2459b2, _0x185704, _0x517e24 - _0x2459b2 - _0x34eae8), this['drawBitmap'](_0x34ac16, _0x3745b5['getTexture'](_0xdc4db0, _0x42a3d6, _0x2459b2, _0xb8eeed - _0x42a3d6 - _0x185704, _0x3b8b57 - _0x2459b2 - _0x34eae8), _0x42a3d6, _0x2459b2, _0x52c1f8 - _0x42a3d6 - _0x185704, _0x517e24 - _0x2459b2 - _0x34eae8);
                    if (_0x4af3b3)
                        this['restore']();
                }
                this['_repaint']();
            }, _0x2bba5a['drawBitmap'] = function (_0x3db4d8, _0x579d1a, _0x2ccab0, _0x21e658, _0x574d4a, _0x5110e4) {
                _0x574d4a === void 0x0 && (_0x574d4a = 0x0), _0x5110e4 === void 0x0 && (_0x5110e4 = 0x0);
                if (_0x574d4a < 0.1 || _0x5110e4 < 0.1)
                    return;
                if (_0x3db4d8 && (_0x579d1a['width'] != _0x574d4a || _0x579d1a['height'] != _0x5110e4))
                    this['fillTextur' + 'e'](_0x579d1a, _0x2ccab0, _0x21e658, _0x574d4a, _0x5110e4);
                else
                    this['drawImage'](_0x579d1a, _0x2ccab0, _0x21e658, _0x574d4a, _0x5110e4);
            }, _0x25c3de(0x0, _0x2bba5a, 'sizeGrid', function () {
                return this['_sizeGrid'];
            }, function (_0x4d70f5) {
                this['_sizeGrid'] = _0x4d70f5, this['_setChange' + 'd']();
            }), _0x25c3de(0x0, _0x2bba5a, 'width', function () {
                if (this['_width'])
                    return this['_width'];
                if (this['_source'])
                    return this['_source']['sourceWidt' + 'h'];
                return 0x0;
            }, function (_0x5042b8) {
                this['_width'] != _0x5042b8 && (this['_width'] = _0x5042b8, this['_setChange' + 'd']());
            }), _0x25c3de(0x0, _0x2bba5a, 'height', function () {
                if (this['_height'])
                    return this['_height'];
                if (this['_source'])
                    return this['_source']['sourceHeig' + 'ht'];
                return 0x0;
            }, function (_0x3127d5) {
                this['_height'] != _0x3127d5 && (this['_height'] = _0x3127d5, this['_setChange' + 'd']());
            }), _0x25c3de(0x0, _0x2bba5a, 'source', function () {
                return this['_source'];
            }, function (_0x59aa4b) {
                _0x59aa4b ? (this['_source'] = _0x59aa4b, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
            }), _0x3745b5['getTexture'] = function (_0x1d3403, _0x5ad7c2, _0x3bc3af, _0x174ebf, _0x95edbd) {
                if (_0x174ebf <= 0x0)
                    _0x174ebf = 0x1;
                if (_0x95edbd <= 0x0)
                    _0x95edbd = 0x1;
                _0x1d3403['$_GID'] || (_0x1d3403['$_GID'] = _0x2a011f['getGID']());
                var _0x29262d;
                return (!_0x29262d || !_0x29262d['_getSource']()) && (_0x29262d = _0x3fdd90['createFrom' + 'Texture'](_0x1d3403, _0x5ad7c2, _0x3bc3af, _0x174ebf, _0x95edbd)), _0x29262d;
            }, _0x3745b5;
        }(_0x432350), _0x9864f4 = function (_0x444e52) {
            function _0x520c33() {
                _0x520c33['__super']['call'](this);
                ;
            }
            return _0x25419d(_0x520c33, 'laya.ui.UI' + 'Event', _0x444e52), _0x520c33['SHOW_TIP'] = 'showtip', _0x520c33['HIDE_TIP'] = 'hidetip', _0x520c33;
        }(_0x5b5e73), _0x475c1f = function (_0xf2b384) {
            function _0x5ace8b() {
                _0x5ace8b['__super']['call'](this), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
            }
            _0x25419d(_0x5ace8b, 'laya.ui.Wi' + 'dget', _0xf2b384);
            var _0x4560fb = _0x5ace8b['prototype'];
            return _0x4560fb['onReset'] = function () {
                this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
            }, _0x4560fb['_onEnable'] = function () {
                if (this['owner']['parent'])
                    this['_onAdded']();
                else
                    this['owner']['once']('added', this, this['_onAdded']);
            }, _0x4560fb['_onDisable'] = function () {
                this['owner']['off']('added', this, this['_onAdded']);
                if (this['owner']['parent'])
                    this['owner']['parent']['off']('resize', this, this['_onParentR' + 'esize']);
            }, _0x4560fb['_onAdded'] = function () {
                if (this['owner']['parent'])
                    this['owner']['parent']['on']('resize', this, this['_onParentR' + 'esize']);
                this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
            }, _0x4560fb['_onParentR' + 'esize'] = function () {
                if (this['resetLayou' + 'tX']() || this['resetLayou' + 'tY']())
                    this['owner']['event']('resize');
            }, _0x4560fb['resetLayou' + 'tX'] = function () {
                var _0x34834f = this['owner'];
                if (!_0x34834f)
                    return ![];
                var _0x3a4204 = _0x34834f['parent'];
                if (_0x3a4204) {
                    if (!isNaN(this['centerX']))
                        _0x34834f['x'] = Math['round']((_0x3a4204['width'] - _0x34834f['displayWid' + 'th']) * 0.5 + this['centerX'] + _0x34834f['pivotX'] * _0x34834f['scaleX']);
                    else {
                        if (!isNaN(this['left'])) {
                            _0x34834f['x'] = Math['round'](this['left'] + _0x34834f['pivotX'] * _0x34834f['scaleX']);
                            if (!isNaN(this['right'])) {
                                var _0x69f78d = (_0x3a4204['_width'] - this['left'] - this['right']) / (_0x34834f['scaleX'] || 0.01);
                                if (_0x69f78d != _0x34834f['width'])
                                    return _0x34834f['width'] = _0x69f78d, !![];
                            }
                        } else
                            !isNaN(this['right']) && (_0x34834f['x'] = Math['round'](_0x3a4204['width'] - _0x34834f['displayWid' + 'th'] - this['right'] + _0x34834f['pivotX'] * _0x34834f['scaleX']));
                    }
                }
                return ![];
            }, _0x4560fb['resetLayou' + 'tY'] = function () {
                var _0x58f2d0 = this['owner'];
                if (!_0x58f2d0)
                    return ![];
                var _0x1101ef = _0x58f2d0['parent'];
                if (_0x1101ef) {
                    if (!isNaN(this['centerY']))
                        _0x58f2d0['y'] = Math['round']((_0x1101ef['height'] - _0x58f2d0['displayHei' + 'ght']) * 0.5 + this['centerY'] + _0x58f2d0['pivotY'] * _0x58f2d0['scaleY']);
                    else {
                        if (!isNaN(this['top'])) {
                            _0x58f2d0['y'] = Math['round'](this['top'] + _0x58f2d0['pivotY'] * _0x58f2d0['scaleY']);
                            if (!isNaN(this['bottom'])) {
                                var _0x17ee0c = (_0x1101ef['_height'] - this['top'] - this['bottom']) / (_0x58f2d0['scaleY'] || 0.01);
                                if (_0x17ee0c != _0x58f2d0['height'])
                                    return _0x58f2d0['height'] = _0x17ee0c, !![];
                            }
                        } else
                            !isNaN(this['bottom']) && (_0x58f2d0['y'] = Math['round'](_0x1101ef['height'] - _0x58f2d0['displayHei' + 'ght'] - this['bottom'] + _0x58f2d0['pivotY'] * _0x58f2d0['scaleY']));
                    }
                }
                return ![];
            }, _0x4560fb['resetLayou' + 't'] = function () {
                this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
            }, _0x25c3de(0x0, _0x4560fb, 'centerX', function () {
                return this['_centerX'];
            }, function (_0xd6f25) {
                this['_centerX'] != _0xd6f25 && (this['_centerX'] = _0xd6f25, this['resetLayou' + 'tX']());
            }), _0x25c3de(0x0, _0x4560fb, 'top', function () {
                return this['_top'];
            }, function (_0x5ac0e1) {
                this['_top'] != _0x5ac0e1 && (this['_top'] = _0x5ac0e1, this['resetLayou' + 'tY']());
            }), _0x25c3de(0x0, _0x4560fb, 'bottom', function () {
                return this['_bottom'];
            }, function (_0x73867d) {
                this['_bottom'] != _0x73867d && (this['_bottom'] = _0x73867d, this['resetLayou' + 'tY']());
            }), _0x25c3de(0x0, _0x4560fb, 'left', function () {
                return this['_left'];
            }, function (_0x3620d2) {
                this['_left'] != _0x3620d2 && (this['_left'] = _0x3620d2, this['resetLayou' + 'tX']());
            }), _0x25c3de(0x0, _0x4560fb, 'right', function () {
                return this['_right'];
            }, function (_0x5a82b0) {
                this['_right'] != _0x5a82b0 && (this['_right'] = _0x5a82b0, this['resetLayou' + 'tX']());
            }), _0x25c3de(0x0, _0x4560fb, 'centerY', function () {
                return this['_centerY'];
            }, function (_0x39db2d) {
                this['_centerY'] != _0x39db2d && (this['_centerY'] = _0x39db2d, this['resetLayou' + 'tY']());
            }), _0x2f72fa(_0x5ace8b, [
                'EMPTY',
                function () {
                    return this['EMPTY'] = new _0x5ace8b();
                }
            ]), _0x5ace8b;
        }(_0x1ebadf), _0x5c4857 = function (_0x5dd492) {
            function _0x486f04() {
                this['_dataSourc' + 'e'] = null, this['_toolTip'] = null, this['_tag'] = null, this['_disabled'] = ![], this['_gray'] = ![], _0x486f04['__super']['call'](this), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x475c1f['EMPTY'], this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']();
            }
            _0x25419d(_0x486f04, 'laya.ui.UI' + 'Component', _0x5dd492);
            var _0x226d7c = _0x486f04['prototype'];
            return _0x226d7c['destroy'] = function (_0x19a25b) {
                _0x19a25b === void 0x0 && (_0x19a25b = !![]), _0x5dd492['prototype']['destroy']['call'](this, _0x19a25b), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
            }, _0x226d7c['preinitial' + 'ize'] = function () {
            }, _0x226d7c['createChil' + 'dren'] = function () {
            }, _0x226d7c['initialize'] = function () {
            }, _0x226d7c['measureWid' + 'th'] = function () {
                var _0x4d1b40 = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x368a11 = this['numChildre' + 'n'] - 0x1; _0x368a11 > -0x1; _0x368a11--) {
                    var _0x5472b8 = this['getChildAt'](_0x368a11);
                    _0x5472b8['_visible'] && (_0x4d1b40 = Math['max'](_0x5472b8['_x'] + _0x5472b8['width'] * _0x5472b8['scaleX'], _0x4d1b40));
                }
                return _0x4d1b40;
            }, _0x226d7c['commitMeas' + 'ure'] = function () {
            }, _0x226d7c['measureHei' + 'ght'] = function () {
                var _0x5424d8 = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x55f2cd = this['numChildre' + 'n'] - 0x1; _0x55f2cd > -0x1; _0x55f2cd--) {
                    var _0x326e36 = this['getChildAt'](_0x55f2cd);
                    _0x326e36['_visible'] && (_0x5424d8 = Math['max'](_0x326e36['_y'] + _0x326e36['height'] * _0x326e36['scaleY'], _0x5424d8));
                }
                return _0x5424d8;
            }, _0x226d7c['_sizeChang' + 'ed'] = function () {
                if (!isNaN(this['_anchorX']))
                    this['pivotX'] = this['anchorX'] * this['width'];
                if (!isNaN(this['_anchorY']))
                    this['pivotY'] = this['anchorY'] * this['height'];
                this['event']('resize');
                if (this['_widget'] !== _0x475c1f['EMPTY'])
                    this['_widget']['resetLayou' + 't']();
            }, _0x226d7c['onMouseOve' + 'r'] = function (_0x36adf1) {
                _0x90a138['stage']['event']('showtip', this['_toolTip']);
            }, _0x226d7c['onMouseOut'] = function (_0x336113) {
                _0x90a138['stage']['event']('hidetip', this['_toolTip']);
            }, _0x226d7c['_getWidget'] = function () {
                return this['_widget'] === _0x475c1f['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x475c1f)), this['_widget'];
            }, _0x226d7c['onCompResi' + 'ze'] = function () {
                this['_sizeChang' + 'ed']();
            }, _0x226d7c['_childChan' + 'ged'] = function (_0x36c309) {
                this['callLater'](this['_sizeChang' + 'ed']), _0x5dd492['prototype']['_childChan' + 'ged']['call'](this, _0x36c309);
            }, _0x25c3de(0x0, _0x226d7c, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x1575b1) {
                _0x1575b1 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x1575b1);
            }), _0x25c3de(0x0, _0x226d7c, 'width', function () {
                if (this['_width'])
                    return this['_width'];
                return this['measureWid' + 'th']();
            }, function (_0x4ca2f4) {
                if (_0x90a138['superGet'](_0x4ab096, this, 'width') == _0x4ca2f4)
                    return;
                _0x90a138['superSet'](_0x4ab096, this, 'width', _0x4ca2f4), this['callLater'](this['_sizeChang' + 'ed']);
            }), _0x25c3de(0x0, _0x226d7c, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x37b485) {
                _0x37b485 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x37b485);
            }), _0x25c3de(0x0, _0x226d7c, 'height', function () {
                if (this['_height'])
                    return this['_height'];
                return this['measureHei' + 'ght']();
            }, function (_0x30a602) {
                if (_0x90a138['superGet'](_0x4ab096, this, 'height') == _0x30a602)
                    return;
                _0x90a138['superSet'](_0x4ab096, this, 'height', _0x30a602), this['callLater'](this['_sizeChang' + 'ed']);
            }), _0x25c3de(0x0, _0x226d7c, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x26c73c) {
                _0x26c73c != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x26c73c);
            }), _0x25c3de(0x0, _0x226d7c, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x59e079) {
                this['_dataSourc' + 'e'] = _0x59e079;
                for (var _0x3da4ea in this['_dataSourc' + 'e']) {
                    this['hasOwnProp' + 'erty'](_0x3da4ea) && !(typeof this[_0x3da4ea] == 'function') && (this[_0x3da4ea] = this['_dataSourc' + 'e'][_0x3da4ea]);
                }
            }), _0x25c3de(0x0, _0x226d7c, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x148446) {
                _0x148446 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x148446);
            }), _0x25c3de(0x0, _0x226d7c, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x5bebfc) {
                _0x5bebfc != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x5bebfc);
            }), _0x25c3de(0x0, _0x226d7c, 'right', function () {
                return this['_widget']['right'];
            }, function (_0xf759f6) {
                _0xf759f6 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0xf759f6);
            }), _0x25c3de(0x0, _0x226d7c, 'tag', function () {
                return this['_tag'];
            }, function (_0x551c10) {
                this['_tag'] = _0x551c10;
            }), _0x25c3de(0x0, _0x226d7c, 'toolTip', function () {
                return this['_toolTip'];
            }, function (_0xbf62cf) {
                this['_toolTip'] != _0xbf62cf && (this['_toolTip'] = _0xbf62cf, _0xbf62cf != null ? (this['on']('mouseover', this, this['onMouseOve' + 'r']), this['on']('mouseout', this, this['onMouseOut'])) : (this['off']('mouseover', this, this['onMouseOve' + 'r']), this['off']('mouseout', this, this['onMouseOut'])));
            }), _0x25c3de(0x0, _0x226d7c, 'gray', function () {
                return this['_gray'];
            }, function (_0xe34836) {
                _0xe34836 !== this['_gray'] && (this['_gray'] = _0xe34836, _0x17d5a0['gray'](this, _0xe34836));
            }), _0x25c3de(0x0, _0x226d7c, 'disabled', function () {
                return this['_disabled'];
            }, function (_0x2f3437) {
                _0x2f3437 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x2f3437, this['mouseEnabl' + 'ed'] = !_0x2f3437);
            }), _0x25c3de(0x0, _0x226d7c, 'scaleX', _0x5dd492['prototype']['_$get_scal' + 'eX'], function (_0x543f13) {
                if (_0x90a138['superGet'](_0x4ab096, this, 'scaleX') == _0x543f13)
                    return;
                _0x90a138['superSet'](_0x4ab096, this, 'scaleX', _0x543f13), this['event']('resize');
            }), _0x25c3de(0x0, _0x226d7c, 'scaleY', _0x5dd492['prototype']['_$get_scal' + 'eY'], function (_0x518b8a) {
                if (_0x90a138['superGet'](_0x4ab096, this, 'scaleY') == _0x518b8a)
                    return;
                _0x90a138['superSet'](_0x4ab096, this, 'scaleY', _0x518b8a), this['event']('resize');
            }), _0x25c3de(0x0, _0x226d7c, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x41a666) {
                this['_anchorX'] != _0x41a666 && (this['_anchorX'] = _0x41a666, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x25c3de(0x0, _0x226d7c, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0xb55b8b) {
                this['_anchorY'] != _0xb55b8b && (this['_anchorY'] = _0xb55b8b, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x486f04;
        }(_0x4ab096), _0x4968c2 = function (_0x59d9eb) {
            function _0x383d19() {
                this['lockLayer'] = null, this['popupEffec' + 't'] = function (_0x39a6a6) {
                    _0x39a6a6['scale'](0x1, 0x1), _0x39a6a6['_effectTwe' + 'en'] = _0x5cf2ba['from'](_0x39a6a6, {
                        'x': _0x90a138['stage']['width'] / 0x2,
                        'y': _0x90a138['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x31a122['backOut'], _0x44d7a5['create'](this, this['doOpen'], [_0x39a6a6]), 0x0, ![], ![]);
                }, this['closeEffec' + 't'] = function (_0x50825d) {
                    _0x50825d['_effectTwe' + 'en'] = _0x5cf2ba['to'](_0x50825d, {
                        'x': _0x90a138['stage']['width'] / 0x2,
                        'y': _0x90a138['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x31a122['strongOut'], _0x44d7a5['create'](this, this['doClose'], [_0x50825d]), 0x0, ![], ![]);
                }, _0x383d19['__super']['call'](this), this['maskLayer'] = new _0x4ab096(), this['popupEffec' + 'tHandler'] = new _0x44d7a5(this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x44d7a5(this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !![], this['zOrder'] = 0x3e8, _0x90a138['stage']['addChild'](this), _0x90a138['stage']['on']('resize', this, this['_onResize']);
                if (_0x2212a1['closeDialo' + 'gOnSide'])
                    this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']);
                this['_onResize'](null);
            }
            _0x25419d(_0x383d19, 'laya.ui.Di' + 'alogManage' + 'r', _0x59d9eb);
            var _0x6e27b7 = _0x383d19['prototype'];
            return _0x6e27b7['_closeOnSi' + 'de'] = function () {
                var _0x163c3c = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
                if (_0x163c3c instanceof laya['ui']['Dialog'])
                    _0x163c3c['close']();
            }, _0x6e27b7['setLockVie' + 'w'] = function (_0x11d81a) {
                !this['lockLayer'] && (this['lockLayer'] = new _0x1354a5(), this['lockLayer']['mouseEnabl' + 'ed'] = !![], this['lockLayer']['size'](_0x90a138['stage']['width'], _0x90a138['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x11d81a && (_0x11d81a['centerX'] = _0x11d81a['centerY'] = 0x0, this['lockLayer']['addChild'](_0x11d81a));
            }, _0x6e27b7['_onResize'] = function (_0x30c7b9) {
                var _0x216a5a = this['maskLayer']['width'] = _0x90a138['stage']['width'], _0x44b167 = this['maskLayer']['height'] = _0x90a138['stage']['height'];
                if (this['lockLayer'])
                    this['lockLayer']['size'](_0x216a5a, _0x44b167);
                this['maskLayer']['graphics']['clear'](!![]), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x216a5a, _0x44b167, _0x2212a1['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x2212a1['popupBgAlp' + 'ha'];
                for (var _0x5758ee = this['numChildre' + 'n'] - 0x1; _0x5758ee > -0x1; _0x5758ee--) {
                    var _0x10ada9 = this['getChildAt'](_0x5758ee);
                    if (_0x10ada9['isPopupCen' + 'ter'])
                        this['_centerDia' + 'log'](_0x10ada9);
                }
            }, _0x6e27b7['_centerDia' + 'log'] = function (_0x387c6a) {
                _0x387c6a['x'] = Math['round']((_0x90a138['stage']['width'] - _0x387c6a['width'] >> 0x1) + _0x387c6a['pivotX']), _0x387c6a['y'] = Math['round']((_0x90a138['stage']['height'] - _0x387c6a['height'] >> 0x1) + _0x387c6a['pivotY']);
            }, _0x6e27b7['open'] = function (_0x191f88, _0x3b370a, _0x4d0512) {
                _0x3b370a === void 0x0 && (_0x3b370a = ![]), _0x4d0512 === void 0x0 && (_0x4d0512 = ![]);
                if (_0x3b370a)
                    this['_closeAll']();
                this['_clearDial' + 'ogEffect'](_0x191f88);
                if (_0x191f88['isPopupCen' + 'ter'])
                    this['_centerDia' + 'log'](_0x191f88);
                this['addChild'](_0x191f88);
                if (_0x191f88['isModal'] || this['_getBit'](0x20))
                    _0x90a138['timer']['callLater'](this, this['_checkMask']);
                if (_0x4d0512 && _0x191f88['popupEffec' + 't'] != null)
                    _0x191f88['popupEffec' + 't']['runWith'](_0x191f88);
                else
                    this['doOpen'](_0x191f88);
                this['event']('open');
            }, _0x6e27b7['_clearDial' + 'ogEffect'] = function (_0x2f3cb5) {
                _0x2f3cb5['_effectTwe' + 'en'] && (_0x5cf2ba['clear'](_0x2f3cb5['_effectTwe' + 'en']), _0x2f3cb5['_effectTwe' + 'en'] = null);
            }, _0x6e27b7['doOpen'] = function (_0x20bba7) {
                _0x20bba7['onOpened'](_0x20bba7['_param']);
            }, _0x6e27b7['lock'] = function (_0x118474) {
                if (this['lockLayer']) {
                    if (_0x118474)
                        this['addChild'](this['lockLayer']);
                    else
                        this['lockLayer']['removeSelf']();
                }
            }, _0x6e27b7['close'] = function (_0x2d6bed) {
                this['_clearDial' + 'ogEffect'](_0x2d6bed);
                if (_0x2d6bed['isShowEffe' + 'ct'] && _0x2d6bed['closeEffec' + 't'] != null)
                    _0x2d6bed['closeEffec' + 't']['runWith']([_0x2d6bed]);
                else
                    this['doClose'](_0x2d6bed);
                this['event']('close');
            }, _0x6e27b7['doClose'] = function (_0x25ccd6) {
                _0x25ccd6['removeSelf'](), _0x25ccd6['isModal'] && this['_checkMask'](), _0x25ccd6['closeHandl' + 'er'] && _0x25ccd6['closeHandl' + 'er']['runWith'](_0x25ccd6['closeType']), _0x25ccd6['onClosed'](_0x25ccd6['closeType']);
                if (_0x25ccd6['autoDestro' + 'yAtClosed'])
                    _0x25ccd6['destroy']();
            }, _0x6e27b7['closeAll'] = function () {
                this['_closeAll'](), this['event']('close');
            }, _0x6e27b7['_closeAll'] = function () {
                for (var _0x4aeec4 = this['numChildre' + 'n'] - 0x1; _0x4aeec4 > -0x1; _0x4aeec4--) {
                    var _0x2447ca = this['getChildAt'](_0x4aeec4);
                    _0x2447ca && _0x2447ca['close'] != null && this['doClose'](_0x2447ca);
                }
            }, _0x6e27b7['getDialogs' + 'ByGroup'] = function (_0x54b85e) {
                var _0x4984e3 = [];
                for (var _0x1bfaa9 = this['numChildre' + 'n'] - 0x1; _0x1bfaa9 > -0x1; _0x1bfaa9--) {
                    var _0x38dbc9 = this['getChildAt'](_0x1bfaa9);
                    _0x38dbc9 && _0x38dbc9['group'] === _0x54b85e && _0x4984e3['push'](_0x38dbc9);
                }
                return _0x4984e3;
            }, _0x6e27b7['closeByGro' + 'up'] = function (_0x5b3ab5) {
                var _0x4dfdf3 = [];
                for (var _0x3cd3b9 = this['numChildre' + 'n'] - 0x1; _0x3cd3b9 > -0x1; _0x3cd3b9--) {
                    var _0x19fe19 = this['getChildAt'](_0x3cd3b9);
                    _0x19fe19 && _0x19fe19['group'] === _0x5b3ab5 && (_0x19fe19['close'](), _0x4dfdf3['push'](_0x19fe19));
                }
                return _0x4dfdf3;
            }, _0x6e27b7['_checkMask'] = function () {
                this['maskLayer']['removeSelf']();
                for (var _0x345a5f = this['numChildre' + 'n'] - 0x1; _0x345a5f > -0x1; _0x345a5f--) {
                    var _0x70ed37 = this['getChildAt'](_0x345a5f);
                    if (_0x70ed37 && _0x70ed37['isModal']) {
                        this['addChildAt'](this['maskLayer'], _0x345a5f);
                        return;
                    }
                }
            }, _0x383d19;
        }(_0x4ab096), _0x5c6a75 = function (_0xf2664f) {
            function _0x26700f() {
                this['_watchMap'] = {}, this['_widget'] = null, this['_dataSourc' + 'e'] = null, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x475c1f['EMPTY'], _0x26700f['__super']['call'](this);
            }
            _0x25419d(_0x26700f, 'laya.ui.Vi' + 'ew', _0xf2664f);
            var _0x53aaa4 = _0x26700f['prototype'];
            return _0x53aaa4['destroy'] = function (_0x14cc17) {
                _0x14cc17 === void 0x0 && (_0x14cc17 = !![]), this['_watchMap'] = null, _0xf2664f['prototype']['destroy']['call'](this, _0x14cc17);
            }, _0x53aaa4['changeData'] = function (_0x1d4557) {
                var _0x48581f = this['_watchMap'][_0x1d4557];
                if (!_0x48581f)
                    return;
                for (var _0x108719 = 0x0, _0x3c03f8 = _0x48581f['length']; _0x108719 < _0x3c03f8; _0x108719++) {
                    var _0x116d49 = _0x48581f[_0x108719];
                    _0x116d49['exe'](this);
                }
            }, _0x53aaa4['_sizeChang' + 'ed'] = function () {
                if (!isNaN(this['_anchorX']))
                    this['pivotX'] = this['anchorX'] * this['width'];
                if (!isNaN(this['_anchorY']))
                    this['pivotY'] = this['anchorY'] * this['height'];
                this['event']('resize');
            }, _0x53aaa4['_getWidget'] = function () {
                return this['_widget'] === _0x475c1f['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x475c1f)), this['_widget'];
            }, _0x53aaa4['loadUI'] = function (_0x311b75) {
                var _0x132948 = _0x26700f['uiMap'][_0x311b75];
                _0x26700f['uiMap'] && this['createView'](_0x132948);
            }, _0x25c3de(0x0, _0x53aaa4, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x82f2b2) {
                this['_anchorX'] != _0x82f2b2 && (this['_anchorX'] = _0x82f2b2, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x25c3de(0x0, _0x53aaa4, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x29af87) {
                _0x29af87 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x29af87);
            }), _0x25c3de(0x0, _0x53aaa4, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x59eb73) {
                _0x59eb73 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x59eb73);
            }), _0x25c3de(0x0, _0x53aaa4, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x2ffb29) {
                _0x2ffb29 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x2ffb29);
            }), _0x25c3de(0x0, _0x53aaa4, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x5ec3fa) {
                this['_dataSourc' + 'e'] = _0x5ec3fa;
                for (var _0x55391f in _0x5ec3fa) {
                    var _0x536fbf = this['getChildBy' + 'Name'](_0x55391f);
                    if (_0x536fbf instanceof laya['ui']['UIComponen' + 't'])
                        _0x536fbf['dataSource'] = _0x5ec3fa[_0x55391f];
                    else {
                        if (this['hasOwnProp' + 'erty'](_0x55391f) && !(typeof this[_0x55391f] == 'function'))
                            this[_0x55391f] = _0x5ec3fa[_0x55391f];
                    }
                }
            }), _0x25c3de(0x0, _0x53aaa4, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x17a837) {
                _0x17a837 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x17a837);
            }), _0x25c3de(0x0, _0x53aaa4, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x121815) {
                _0x121815 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x121815);
            }), _0x25c3de(0x0, _0x53aaa4, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x342ab1) {
                this['_anchorY'] != _0x342ab1 && (this['_anchorY'] = _0x342ab1, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x25c3de(0x0, _0x53aaa4, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x346cb1) {
                _0x346cb1 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x346cb1);
            }), _0x26700f['regCompone' + 'nt'] = function (_0x31784e, _0x562f01) {
                _0x4c2995['regClass'](_0x31784e, _0x562f01);
            }, _0x26700f['regViewRun' + 'time'] = function (_0x28b236, _0x1f9868) {
                _0x4c2995['regClass'](_0x28b236, _0x1f9868);
            }, _0x26700f['regUI'] = function (_0x3c2168, _0x18bd18) {
                _0x90a138['loader']['cacheRes'](_0x3c2168, _0x18bd18);
            }, _0x26700f['uiMap'] = {}, _0x26700f['__init$'] = function () {
                _0x4c2995['regShortCl' + 'assName']([
                    _0x4a59e1,
                    _0x2ba5d4,
                    _0x5eae6f,
                    _0x1f6325,
                    _0x1354a5,
                    _0x28e932,
                    _0x2ba5d4,
                    _0x1b91e7,
                    _0x5a1d54,
                    _0x4e7210,
                    _0x5c4857,
                    _0x30bc63,
                    _0x31686f,
                    _0x258466,
                    _0x3bcf92,
                    _0x3e2083,
                    _0x51d7e0,
                    _0x3881f6,
                    _0x9d6efb,
                    _0x287afb,
                    _0xa212e3,
                    _0x2c1129,
                    _0x22b75e,
                    _0x197dce,
                    _0x26700f,
                    _0x1a42b8,
                    _0x578472,
                    _0x1a6bc4,
                    _0x9c6343,
                    _0x4587af,
                    _0x5050ef,
                    _0x4ab096,
                    _0x3e28ca,
                    _0x279cd6,
                    _0x287767
                ]);
            }, _0x26700f;
        }(_0x49559f), _0xa212e3 = function (_0x454082) {
            function _0xed65e8(_0x4d755b) {
                this['rollRatio'] = 0.97, this['changeHand' + 'ler'] = null, this['scaleBar'] = !![], this['autoHide'] = ![], this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['upButton'] = null, this['downButton'] = null, this['slider'] = null, this['_scrollSiz' + 'e'] = 0x1, this['_skin'] = null, this['_thumbPerc' + 'ent'] = 0x1, this['_target'] = null, this['_lastPoint'] = null, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_isElastic'] = ![], this['_value'] = NaN, this['_hide'] = ![], this['_clickOnly'] = !![], this['_offsets'] = null, this['isLockedFu' + 'n'] = null, this['triggerDow' + 'nDragLimit'] = null, this['triggerUpD' + 'ragLimit'] = null, _0xed65e8['__super']['call'](this), this['_showButto' + 'ns'] = _0x2212a1['showButton' + 's'], this['_touchScro' + 'llEnable'] = _0x2212a1['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x2212a1['mouseWheel' + 'Enable'], this['skin'] = _0x4d755b, this['max'] = 0x1;
            }
            _0x25419d(_0xed65e8, 'laya.ui.Sc' + 'rollBar', _0x454082);
            var _0x2de69b = _0xed65e8['prototype'];
            return _0x2de69b['destroy'] = function (_0x1f098a) {
                _0x1f098a === void 0x0 && (_0x1f098a = !![]), this['stopScroll'](), this['target'] = null, _0x454082['prototype']['destroy']['call'](this, _0x1f098a), this['upButton'] && this['upButton']['destroy'](_0x1f098a), this['downButton'] && this['downButton']['destroy'](_0x1f098a), this['slider'] && this['slider']['destroy'](_0x1f098a), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
            }, _0x2de69b['createChil' + 'dren'] = function () {
                this['addChild'](this['slider'] = new _0x2c1129()), this['addChild'](this['upButton'] = new _0x2ba5d4()), this['addChild'](this['downButton'] = new _0x2ba5d4());
            }, _0x2de69b['initialize'] = function () {
                this['slider']['showLabel'] = ![], this['slider']['tick'] = 0x0, this['slider']['on']('change', this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']), this['downButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x2de69b['onSliderCh' + 'ange'] = function () {
                if (this['_value'] != this['slider']['value'])
                    this['value'] = this['slider']['value'];
            }, _0x2de69b['onButtonMo' + 'useDown'] = function (_0x4a873e) {
                var _0xfea10 = _0x4a873e['currentTar' + 'get'] === this['upButton'];
                this['slide'](_0xfea10), _0x90a138['timer']['once'](_0xb0c2d5['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0xfea10]), _0x90a138['stage']['once']('mouseup', this, this['onStageMou' + 'seUp']);
            }, _0x2de69b['startLoop'] = function (_0x449769) {
                _0x90a138['timer']['frameLoop'](0x1, this, this['slide'], [_0x449769]);
            }, _0x2de69b['slide'] = function (_0x432b43) {
                if (_0x432b43)
                    this['value'] -= this['_scrollSiz' + 'e'];
                else
                    this['value'] += this['_scrollSiz' + 'e'];
            }, _0x2de69b['onStageMou' + 'seUp'] = function (_0x21e2ec) {
                _0x90a138['timer']['clear'](this, this['startLoop']), _0x90a138['timer']['clear'](this, this['slide']);
            }, _0x2de69b['_skinLoade' + 'd'] = function () {
                this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x2de69b['changeScro' + 'llBar'] = function () {
                this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'];
                this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png'));
                if (this['slider']['isVertical'])
                    this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0;
                else
                    this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0;
                this['resetPosit' + 'ions'](), this['repaint']();
            }, _0x2de69b['_sizeChang' + 'ed'] = function () {
                _0x454082['prototype']['_sizeChang' + 'ed']['call'](this), this['repaint'](), this['resetPosit' + 'ions'](), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
            }, _0x2de69b['resetPosit' + 'ions'] = function () {
                if (this['slider']['isVertical'])
                    this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0);
                else
                    this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0);
                this['resetButto' + 'nPosition']();
            }, _0x2de69b['resetButto' + 'nPosition'] = function () {
                if (this['slider']['isVertical'])
                    this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'];
                else
                    this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
            }, _0x2de69b['measureWid' + 'th'] = function () {
                if (this['slider']['isVertical'])
                    return this['slider']['width'];
                return 0x64;
            }, _0x2de69b['measureHei' + 'ght'] = function () {
                if (this['slider']['isVertical'])
                    return 0x64;
                return this['slider']['height'];
            }, _0x2de69b['setScroll'] = function (_0x3bfefd, _0x375dc7, _0x3938c5) {
                this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x3bfefd, _0x375dc7, _0x3938c5), this['slider']['bar']['visible'] = _0x375dc7 > 0x0;
                if (!this['_hide'] && this['autoHide'])
                    this['visible'] = ![];
            }, _0x2de69b['onTargetMo' + 'useWheel'] = function (_0x3b6233) {
                this['value'] -= _0x3b6233['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
            }, _0x2de69b['onTargetMo' + 'useDown'] = function (_0x4396fc) {
                if (this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x4396fc))
                    return;
                this['event']('end'), this['_clickOnly'] = !![], this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_lastPoint'] || (this['_lastPoint'] = new _0x5e6c15()), this['_lastPoint']['setTo'](_0x90a138['stage']['mouseX'], _0x90a138['stage']['mouseY']), _0x90a138['timer']['clear'](this, this['tweenMove']), _0x5cf2ba['clearTween'](this), _0x90a138['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x90a138['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x90a138['timer']['frameLoop'](0x1, this, this['loop']);
            }, _0x2de69b['startDragF' + 'orce'] = function () {
                this['_clickOnly'] = !![], this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_lastPoint'] || (this['_lastPoint'] = new _0x5e6c15()), this['_lastPoint']['setTo'](_0x90a138['stage']['mouseX'], _0x90a138['stage']['mouseY']), _0x90a138['timer']['clear'](this, this['tweenMove']), _0x5cf2ba['clearTween'](this), _0x90a138['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x90a138['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x90a138['timer']['frameLoop'](0x1, this, this['loop']);
            }, _0x2de69b['cancelDrag' + 'Op'] = function () {
                _0x90a138['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x90a138['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x90a138['timer']['clear'](this, this['tweenMove']), _0x90a138['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !![];
            }, _0x2de69b['checkTrigg' + 'ers'] = function (_0x3fe643) {
                _0x3fe643 === void 0x0 && (_0x3fe643 = ![]);
                if (this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0) {
                    if (this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x3fe643))
                        return this['cancelDrag' + 'Op'](), this['value'] = 0x0, !![];
                }
                if (this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max']) {
                    if (this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x3fe643))
                        return this['cancelDrag' + 'Op'](), this['value'] = this['max'], !![];
                }
                return ![];
            }, _0x2de69b['startTween' + 'MoveForce'] = function (_0x49ac1a) {
                this['_lastOffse' + 't'] = _0x49ac1a, _0x90a138['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
            }, _0x2de69b['loop'] = function () {
                var _0x3dc689 = _0x90a138['stage']['mouseY'], _0x18f737 = _0x90a138['stage']['mouseX'];
                this['_lastOffse' + 't'] = this['isVertical'] ? _0x3dc689 - this['_lastPoint']['y'] : _0x18f737 - this['_lastPoint']['x'];
                if (this['_clickOnly']) {
                    if (Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x90a138['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x90a138['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1) {
                        this['_clickOnly'] = ![];
                        if (this['checkTrigg' + 'ers']())
                            return;
                        this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = ![], !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !![]), this['event']('start');
                    } else
                        return;
                } else {
                    if (this['checkTrigg' + 'ers']())
                        return;
                }
                this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x18f737, this['_lastPoint']['y'] = _0x3dc689;
                if (this['_lastOffse' + 't'] === 0x0)
                    return;
                !this['_checkElas' + 'tic'] && (this['elasticDis' + 'tance'] > 0x0 ? !this['_checkElas' + 'tic'] && this['_lastOffse' + 't'] != 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !![], this['_checkElas' + 'tic'] = !![]) : this['_isElastic'] = ![]) : this['_checkElas' + 'tic'] = !![]);
                if (this['_isElastic']) {
                    if (this['_value'] <= this['min']) {
                        if (this['_lastOffse' + 't'] > 0x0)
                            this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']);
                        else {
                            this['value'] -= this['_lastOffse' + 't'] * 0.5;
                            if (this['_value'] >= this['min'])
                                this['_checkElas' + 'tic'] = ![];
                        }
                    } else {
                        if (this['_value'] >= this['max']) {
                            if (this['_lastOffse' + 't'] < 0x0)
                                this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']);
                            else {
                                this['value'] -= this['_lastOffse' + 't'] * 0.5;
                                if (this['_value'] <= this['max'])
                                    this['_checkElas' + 'tic'] = ![];
                            }
                        }
                    }
                } else
                    this['value'] -= this['_lastOffse' + 't'];
            }, _0x2de69b['onStageMou' + 'seUp2'] = function (_0x29e880) {
                _0x90a138['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x90a138['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x90a138['timer']['clear'](this, this['loop']);
                if (this['_clickOnly']) {
                    if (this['_value'] >= this['min'] && this['_value'] <= this['max'])
                        return;
                }
                this['_target']['mouseEnabl' + 'ed'] = !![];
                if (this['_isElastic']) {
                    if (this['_value'] < this['min'])
                        _0x5cf2ba['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x31a122['sineOut'], _0x44d7a5['create'](this, this['elasticOve' + 'r']));
                    else
                        this['_value'] > this['max'] && _0x5cf2ba['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x31a122['sineOut'], _0x44d7a5['create'](this, this['elasticOve' + 'r']));
                } else {
                    if (!this['_offsets'])
                        return;
                    this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x90a138['stage']['mouseY'] - this['_lastPoint']['y'] : _0x90a138['stage']['mouseX'] - this['_lastPoint']['x']);
                    ;
                    var _0x19926 = 0x0, _0x1ca727 = Math['min'](this['_offsets']['length'], 0x3);
                    for (var _0x3eb0f7 = 0x0; _0x3eb0f7 < _0x1ca727; _0x3eb0f7++) {
                        _0x19926 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x3eb0f7];
                    }
                    this['_lastOffse' + 't'] = _0x19926 / _0x1ca727, _0x19926 = Math['abs'](this['_lastOffse' + 't']);
                    if (_0x19926 < 0x2) {
                        this['event']('end');
                        return;
                    }
                    if (_0x19926 > 0xfa)
                        this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa;
                    var _0x4d1df7 = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                    _0x90a138['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x4d1df7]);
                }
            }, _0x2de69b['elasticOve' + 'r'] = function () {
                this['_isElastic'] = ![], !this['hide'] && this['autoHide'] && _0x5cf2ba['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event']('end');
            }, _0x2de69b['tweenMove'] = function (_0x595257) {
                this['_lastOffse' + 't'] *= this['rollRatio'];
                if (this['checkTrigg' + 'ers'](!![]))
                    return;
                ;
                var _0x3b0bda = NaN;
                if (_0x595257 > 0x0) {
                    if (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min']) {
                        this['_isElastic'] = !![], _0x3b0bda = -(this['min'] - _0x595257 - this['value']) * 0.5;
                        if (this['_lastOffse' + 't'] > _0x3b0bda)
                            this['_lastOffse' + 't'] = _0x3b0bda;
                    } else {
                        if (this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max']) {
                            this['_isElastic'] = !![], _0x3b0bda = -(this['max'] + _0x595257 - this['value']) * 0.5;
                            if (this['_lastOffse' + 't'] < _0x3b0bda)
                                this['_lastOffse' + 't'] = _0x3b0bda;
                        }
                    }
                }
                this['value'] -= this['_lastOffse' + 't'];
                if (Math['abs'](this['_lastOffse' + 't']) < 0.1) {
                    _0x90a138['timer']['clear'](this, this['tweenMove']);
                    if (this['_isElastic']) {
                        if (this['_value'] < this['min'])
                            _0x5cf2ba['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x31a122['sineOut'], _0x44d7a5['create'](this, this['elasticOve' + 'r']));
                        else
                            this['_value'] > this['max'] ? _0x5cf2ba['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x31a122['sineOut'], _0x44d7a5['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']();
                        return;
                    }
                    this['event']('end'), !this['hide'] && this['autoHide'] && _0x5cf2ba['to'](this, { 'alpha': 0x0 }, 0x1f4);
                }
            }, _0x2de69b['stopScroll'] = function () {
                this['onStageMou' + 'seUp2'](null), _0x90a138['timer']['clear'](this, this['tweenMove']), _0x5cf2ba['clearTween'](this);
            }, _0x25c3de(0x0, _0x2de69b, 'thumbPerce' + 'nt', function () {
                return this['_thumbPerc' + 'ent'];
            }, function (_0x9e3483) {
                this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x9e3483 = _0x9e3483 >= 0x1 ? 0.99 : _0x9e3483, this['_thumbPerc' + 'ent'] = _0x9e3483;
                if (this['scaleBar']) {
                    if (this['slider']['isVertical'])
                        this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x9e3483, _0xb0c2d5['scrollBarM' + 'inNum']);
                    else
                        this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x9e3483, _0xb0c2d5['scrollBarM' + 'inNum']);
                }
            }), _0x25c3de(0x0, _0x2de69b, 'dataSource', _0x454082['prototype']['_$get_data' + 'Source'], function (_0x2d211d) {
                this['_dataSourc' + 'e'] = _0x2d211d;
                if (typeof _0x2d211d == 'number' || typeof _0x2d211d == 'string')
                    this['value'] = Number(_0x2d211d);
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x2d211d);
            }), _0x25c3de(0x0, _0x2de69b, 'skin', function () {
                return this['_skin'];
            }, function (_0x38f1eb) {
                if (_0x38f1eb == '\x20')
                    return;
                this['_skin'] != _0x38f1eb && (this['_skin'] = _0x38f1eb, this['_skin'] && !_0x3b96d5['getRes'](this['_skin']) ? _0x90a138['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$up.png'),
                    this['_skin']['replace']('.png', '$down.png'),
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x44d7a5['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0x2de69b, 'max', function () {
                return this['slider']['max'];
            }, function (_0x30ad35) {
                this['slider']['max'] = _0x30ad35;
            }), _0x25c3de(0x0, _0x2de69b, 'min', function () {
                return this['slider']['min'];
            }, function (_0x3d77bd) {
                this['slider']['min'] = _0x3d77bd;
            }), _0x25c3de(0x0, _0x2de69b, 'value', function () {
                return this['_value'];
            }, function (_0x36d18a) {
                _0x36d18a !== this['_value'] && (this['_value'] = _0x36d18a, !this['_isElastic'] && (this['slider']['_value'] != _0x36d18a && (this['slider']['_value'] = _0x36d18a, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
            }), _0x25c3de(0x0, _0x2de69b, 'isVertical', function () {
                return this['slider']['isVertical'];
            }, function (_0x59c2ea) {
                this['slider']['isVertical'] = _0x59c2ea;
            }), _0x25c3de(0x0, _0x2de69b, 'sizeGrid', function () {
                return this['slider']['sizeGrid'];
            }, function (_0x498d03) {
                this['slider']['sizeGrid'] = _0x498d03;
            }), _0x25c3de(0x0, _0x2de69b, 'scrollSize', function () {
                return this['_scrollSiz' + 'e'];
            }, function (_0x21faf8) {
                this['_scrollSiz' + 'e'] = _0x21faf8;
            }), _0x25c3de(0x0, _0x2de69b, 'target', function () {
                return this['_target'];
            }, function (_0x209cd9) {
                this['_target'] && (this['_target']['off']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_target']['off']('mousedown', this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x209cd9, _0x209cd9 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on']('mousedown', this, this['onTargetMo' + 'useDown']));
            }), _0x25c3de(0x0, _0x2de69b, 'hide', function () {
                return this['_hide'];
            }, function (_0x4a3fbc) {
                this['_hide'] = _0x4a3fbc, this['visible'] = !_0x4a3fbc;
            }), _0x25c3de(0x0, _0x2de69b, 'showButton' + 's', function () {
                return this['_showButto' + 'ns'];
            }, function (_0x50fde2) {
                this['_showButto' + 'ns'] = _0x50fde2, this['callLater'](this['changeScro' + 'llBar']);
            }), _0x25c3de(0x0, _0x2de69b, 'touchScrol' + 'lEnable', function () {
                return this['_touchScro' + 'llEnable'];
            }, function (_0x3eb699) {
                this['_touchScro' + 'llEnable'] = _0x3eb699, this['target'] = this['_target'];
            }), _0x25c3de(0x0, _0x2de69b, 'mouseWheel' + 'Enable', function () {
                return this['_mouseWhee' + 'lEnable'];
            }, function (_0x3c1d6b) {
                this['_mouseWhee' + 'lEnable'] = _0x3c1d6b, this['target'] = this['_target'];
            }), _0x25c3de(0x0, _0x2de69b, 'lastOffset', function () {
                return this['_lastOffse' + 't'];
            }), _0x25c3de(0x0, _0x2de69b, 'tick', function () {
                return this['slider']['tick'];
            }, function (_0x301c71) {
                this['slider']['tick'] = _0x301c71;
            }), _0xed65e8;
        }(_0x5c4857), _0x1354a5 = function (_0x26f288) {
            function _0xed1d05() {
                _0xed1d05['__super']['call'](this);
                ;
            }
            _0x25419d(_0xed1d05, 'laya.ui.Bo' + 'x', _0x26f288);
            var _0x5f5247 = _0xed1d05['prototype'];
            return _0x90a138['imps'](_0x5f5247, { 'laya.ui.IBox': !![] }), _0x25c3de(0x0, _0x5f5247, 'dataSource', _0x26f288['prototype']['_$get_data' + 'Source'], function (_0x1030dd) {
                this['_dataSourc' + 'e'] = _0x1030dd;
                for (var _0x4932f3 in _0x1030dd) {
                    var _0x39ecd5 = this['getChildBy' + 'Name'](_0x4932f3);
                    if (_0x39ecd5)
                        _0x39ecd5['dataSource'] = _0x1030dd[_0x4932f3];
                    else {
                        if (this['hasOwnProp' + 'erty'](_0x4932f3) && !(typeof this[_0x4932f3] == 'function'))
                            this[_0x4932f3] = _0x1030dd[_0x4932f3];
                    }
                }
            }), _0xed1d05;
        }(_0x5c4857), _0x258466 = function (_0x2f6f0c) {
            function _0x5e1915(_0x23c23f) {
                this['_bitmap'] = null, this['_skin'] = null, this['_group'] = null, _0x5e1915['__super']['call'](this), this['skin'] = _0x23c23f;
            }
            _0x25419d(_0x5e1915, 'laya.ui.Im' + 'age', _0x2f6f0c);
            var _0x433e45 = _0x5e1915['prototype'];
            return _0x433e45['destroy'] = function (_0xec8b7f) {
                _0xec8b7f === void 0x0 && (_0xec8b7f = !![]), _0x2f6f0c['prototype']['destroy']['call'](this, !![]), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
            }, _0x433e45['dispose'] = function () {
                this['destroy'](!![]), _0x90a138['loader']['clearRes'](this['_skin']);
            }, _0x433e45['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x243845(), this['_bitmap']['autoCacheC' + 'md'] = ![];
            }, _0x433e45['setSource'] = function (_0x79dc0d, _0x38858c) {
                _0x79dc0d === this['_skin'] && _0x38858c && (this['source'] = _0x38858c, this['onCompResi' + 'ze']());
            }, _0x433e45['measureWid' + 'th'] = function () {
                return this['_bitmap']['width'];
            }, _0x433e45['measureHei' + 'ght'] = function () {
                return this['_bitmap']['height'];
            }, _0x25c3de(0x0, _0x433e45, 'dataSource', _0x2f6f0c['prototype']['_$get_data' + 'Source'], function (_0x1621a0) {
                this['_dataSourc' + 'e'] = _0x1621a0;
                if (typeof _0x1621a0 == 'string')
                    this['skin'] = _0x1621a0;
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x1621a0);
            }), _0x25c3de(0x0, _0x433e45, 'source', function () {
                return this['_bitmap']['source'];
            }, function (_0xe97504) {
                if (!this['_bitmap'])
                    return;
                this['_bitmap']['source'] = _0xe97504, this['event']('loaded'), this['repaint']();
            }), _0x25c3de(0x0, _0x433e45, 'skin', function () {
                return this['_skin'];
            }, function (_0x2a7343) {
                if (this['_skin'] != _0x2a7343) {
                    this['_skin'] = _0x2a7343;
                    if (_0x2a7343) {
                        var _0x533ea0 = _0x3b96d5['getRes'](_0x2a7343);
                        if (_0x533ea0)
                            this['source'] = _0x533ea0, this['onCompResi' + 'ze']();
                        else
                            _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['setSource'], [this['_skin']]), null, 'image', 0x1, !![], this['_group']);
                    } else
                        this['source'] = null;
                }
            }), _0x25c3de(0x0, _0x433e45, 'sizeGrid', function () {
                if (this['_bitmap']['sizeGrid'])
                    return this['_bitmap']['sizeGrid']['join'](',');
                return null;
            }, function (_0x3caab9) {
                this['_bitmap']['sizeGrid'] = _0x17d5a0['fillArray'](_0xb0c2d5['defaultSiz' + 'eGrid'], _0x3caab9, Number);
            }), _0x25c3de(0x0, _0x433e45, 'group', function () {
                return this['_group'];
            }, function (_0x45011e) {
                if (_0x45011e && this['_skin'])
                    _0x3b96d5['setGroup'](this['_skin'], _0x45011e);
                this['_group'] = _0x45011e;
            }), _0x25c3de(0x0, _0x433e45, 'width', _0x2f6f0c['prototype']['_$get_widt' + 'h'], function (_0x5b671a) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x5b671a), this['_bitmap']['width'] = _0x5b671a == 0x0 ? 1e-7 : _0x5b671a;
            }), _0x25c3de(0x0, _0x433e45, 'height', _0x2f6f0c['prototype']['_$get_heig' + 'ht'], function (_0x1dbe9c) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x1dbe9c), this['_bitmap']['height'] = _0x1dbe9c == 0x0 ? 1e-7 : _0x1dbe9c;
            }), _0x5e1915;
        }(_0x5c4857), _0x2c1129 = function (_0x40f8fa) {
            function _0xcdb20f(_0x3105bb) {
                this['changeHand' + 'ler'] = null, this['isVertical'] = !![], this['showLabel'] = !![], this['_allowClic' + 'kBack'] = ![], this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, this['_skin'] = null, this['_bg'] = null, this['_progress'] = null, this['_bar'] = null, this['_tx'] = NaN, this['_ty'] = NaN, this['_maxMove'] = NaN, this['_globalSac' + 'le'] = null, _0xcdb20f['__super']['call'](this), this['skin'] = _0x3105bb;
            }
            _0x25419d(_0xcdb20f, 'laya.ui.Sl' + 'ider', _0x40f8fa);
            var _0x3510d0 = _0xcdb20f['prototype'];
            return _0x3510d0['destroy'] = function (_0x4c825f) {
                _0x4c825f === void 0x0 && (_0x4c825f = !![]), _0x40f8fa['prototype']['destroy']['call'](this, _0x4c825f), this['_bg'] && this['_bg']['destroy'](_0x4c825f), this['_bar'] && this['_bar']['destroy'](_0x4c825f), this['_progress'] && this['_progress']['destroy'](_0x4c825f), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
            }, _0x3510d0['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x258466()), this['addChild'](this['_bar'] = new _0x2ba5d4());
            }, _0x3510d0['initialize'] = function () {
                this['_bar']['on']('mousedown', this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0';
                if (this['_progress'])
                    this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'];
                this['allowClick' + 'Back'] = !![];
            }, _0x3510d0['onBarMouse' + 'Down'] = function (_0x5d96bc) {
                this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x5e6c15()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x90a138['stage']['mouseX'], this['_ty'] = _0x90a138['stage']['mouseY'], _0x90a138['stage']['on']('mousemove', this, this['mouseMove']), _0x90a138['stage']['once']('mouseup', this, this['mouseUp']), _0x90a138['stage']['once']('mouseout', this, this['mouseUp']), this['showValueT' + 'ext']();
            }, _0x3510d0['showValueT' + 'ext'] = function () {
                if (this['showLabel']) {
                    var _0x5542cd = laya['ui']['Slider']['label'];
                    this['addChild'](_0x5542cd), _0x5542cd['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x5542cd['x'] = this['_bar']['_x'] + 0x14, _0x5542cd['y'] = (this['_bar']['height'] - _0x5542cd['height']) * 0.5 + this['_bar']['_y']) : (_0x5542cd['y'] = this['_bar']['_y'] - 0x14, _0x5542cd['x'] = (this['_bar']['width'] - _0x5542cd['width']) * 0.5 + this['_bar']['_x']);
                }
            }, _0x3510d0['hideValueT' + 'ext'] = function () {
                laya['ui']['Slider']['label'] && laya['ui']['Slider']['label']['removeSelf']();
            }, _0x3510d0['mouseUp'] = function (_0x447922) {
                _0x90a138['stage']['off']('mousemove', this, this['mouseMove']), _0x90a138['stage']['off']('mouseup', this, this['mouseUp']), _0x90a138['stage']['off']('mouseout', this, this['mouseUp']), this['sendChange' + 'Event']('changed'), this['hideValueT' + 'ext']();
            }, _0x3510d0['mouseMove'] = function (_0x2fa856) {
                var _0x1f6933 = this['_value'];
                if (this['isVertical']) {
                    this['_bar']['y'] += (_0x90a138['stage']['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'];
                    if (this['_bar']['_y'] > this['_maxMove'])
                        this['_bar']['y'] = this['_maxMove'];
                    else {
                        if (this['_bar']['_y'] < 0x0)
                            this['_bar']['y'] = 0x0;
                    }
                    this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'];
                    if (this['_progress'])
                        this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'];
                } else {
                    this['_bar']['x'] += (_0x90a138['stage']['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'];
                    if (this['_bar']['_x'] > this['_maxMove'])
                        this['_bar']['x'] = this['_maxMove'];
                    else {
                        if (this['_bar']['_x'] < 0x0)
                            this['_bar']['x'] = 0x0;
                    }
                    this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'];
                    if (this['_progress'])
                        this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'];
                }
                this['_tx'] = _0x90a138['stage']['mouseX'], this['_ty'] = _0x90a138['stage']['mouseY'];
                if (this['_tick'] != 0x0) {
                    var _0x52d89a = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x52d89a) / _0x52d89a;
                }
                this['_value'] != _0x1f6933 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
            }, _0x3510d0['sendChange' + 'Event'] = function (_0xa1a34a) {
                _0xa1a34a === void 0x0 && (_0xa1a34a = 'change'), this['event'](_0xa1a34a), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
            }, _0x3510d0['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
                var _0x4d6c72 = this['_skin']['replace']('.png', '$progress.' + 'png');
                _0x3b96d5['getRes'](_0x4d6c72) && (!this['_progress'] && (this['addChild'](this['_progress'] = new _0x258466()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x4d6c72), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x3510d0['setBarPoin' + 't'] = function () {
                if (this['isVertical'])
                    this['_bar']['x'] = Math['round']((this['_bg']['width'] - this['_bar']['width']) * 0.5);
                else
                    this['_bar']['y'] = Math['round']((this['_bg']['height'] - this['_bar']['height']) * 0.5);
            }, _0x3510d0['measureWid' + 'th'] = function () {
                return Math['max'](this['_bg']['width'], this['_bar']['width']);
            }, _0x3510d0['measureHei' + 'ght'] = function () {
                return Math['max'](this['_bg']['height'], this['_bar']['height']);
            }, _0x3510d0['_sizeChang' + 'ed'] = function () {
                _0x40f8fa['prototype']['_sizeChang' + 'ed']['call'](this);
                if (this['isVertical'])
                    this['_bg']['height'] = this['height'];
                else
                    this['_bg']['width'] = this['width'];
                this['setBarPoin' + 't'](), this['changeValu' + 'e']();
            }, _0x3510d0['setSlider'] = function (_0x268b9e, _0x728329, _0x1dbc09) {
                this['_value'] = -0x1, this['_min'] = _0x268b9e, this['_max'] = _0x728329 > _0x268b9e ? _0x728329 : _0x268b9e, this['value'] = _0x1dbc09 < _0x268b9e ? _0x268b9e : _0x1dbc09 > _0x728329 ? _0x728329 : _0x1dbc09;
            }, _0x3510d0['changeValu' + 'e'] = function () {
                if (this['tick'] != 0x0) {
                    var _0x574277 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x574277) / _0x574277;
                }
                this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
                var _0x2744ef = this['_max'] - this['_min'];
                if (_0x2744ef === 0x0)
                    _0x2744ef = 0x1;
                if (this['isVertical']) {
                    this['_bar']['y'] = (this['_value'] - this['_min']) / _0x2744ef * (this['height'] - this['_bar']['height']);
                    if (this['_progress'])
                        this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'];
                } else {
                    this['_bar']['x'] = (this['_value'] - this['_min']) / _0x2744ef * (this['width'] - this['_bar']['width']);
                    if (this['_progress'])
                        this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'];
                }
            }, _0x3510d0['onBgMouseD' + 'own'] = function (_0x28b360) {
                var _0x830c8b = this['_bg']['getMousePo' + 'int']();
                if (this['isVertical'])
                    this['value'] = _0x830c8b['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'];
                else
                    this['value'] = _0x830c8b['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
            }, _0x25c3de(0x0, _0x3510d0, 'dataSource', _0x40f8fa['prototype']['_$get_data' + 'Source'], function (_0x189558) {
                this['_dataSourc' + 'e'] = _0x189558;
                if (typeof _0x189558 == 'number' || typeof _0x189558 == 'string')
                    this['value'] = Number(_0x189558);
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x189558);
            }), _0x25c3de(0x0, _0x3510d0, 'skin', function () {
                return this['_skin'];
            }, function (_0x492602) {
                this['_skin'] != _0x492602 && (this['_skin'] = _0x492602, this['_skin'] && !_0x3b96d5['getRes'](this['_skin']) ? _0x90a138['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x44d7a5['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0x3510d0, 'tick', function () {
                return this['_tick'];
            }, function (_0x2ae96b) {
                this['_tick'] != _0x2ae96b && (this['_tick'] = _0x2ae96b, this['callLater'](this['changeValu' + 'e']));
            }), _0x25c3de(0x0, _0x3510d0, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x1e329f) {
                this['_bg']['sizeGrid'] = _0x1e329f, this['_bar']['sizeGrid'] = _0x1e329f;
                if (this['_progress'])
                    this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'];
            }), _0x25c3de(0x0, _0x3510d0, 'allowClick' + 'Back', function () {
                return this['_allowClic' + 'kBack'];
            }, function (_0x33e486) {
                if (this['_allowClic' + 'kBack'] != _0x33e486) {
                    this['_allowClic' + 'kBack'] = _0x33e486;
                    if (_0x33e486)
                        this['_bg']['on']('mousedown', this, this['onBgMouseD' + 'own']);
                    else
                        this['_bg']['off']('mousedown', this, this['onBgMouseD' + 'own']);
                }
            }), _0x25c3de(0x0, _0x3510d0, 'max', function () {
                return this['_max'];
            }, function (_0x38143f) {
                this['_max'] != _0x38143f && (this['_max'] = _0x38143f, this['callLater'](this['changeValu' + 'e']));
            }), _0x25c3de(0x0, _0x3510d0, 'min', function () {
                return this['_min'];
            }, function (_0x1b8974) {
                this['_min'] != _0x1b8974 && (this['_min'] = _0x1b8974, this['callLater'](this['changeValu' + 'e']));
            }), _0x25c3de(0x0, _0x3510d0, 'bar', function () {
                return this['_bar'];
            }), _0x25c3de(0x0, _0x3510d0, 'value', function () {
                return this['_value'];
            }, function (_0x19aecd) {
                if (this['_value'] != _0x19aecd) {
                    var _0x301ed2 = this['_value'];
                    this['_value'] = _0x19aecd, this['changeValu' + 'e'](), this['_value'] != _0x301ed2 && this['sendChange' + 'Event']();
                }
            }), _0x2f72fa(_0xcdb20f, [
                'label',
                function () {
                    return this['label'] = new _0x3bcf92();
                }
            ]), _0xcdb20f;
        }(_0x5c4857), _0x3bcf92 = function (_0x55f692) {
            function _0x5b6842(_0x1d8543) {
                this['_tf'] = null, _0x5b6842['__super']['call'](this), _0x1d8543 === void 0x0 && (_0x1d8543 = ''), this['text'] = _0x1d8543;
            }
            _0x25419d(_0x5b6842, 'laya.ui.La' + 'bel', _0x55f692);
            var _0x44cb2f = _0x5b6842['prototype'];
            return _0x44cb2f['destroy'] = function (_0x39ccfc) {
                _0x39ccfc === void 0x0 && (_0x39ccfc = !![]), _0x55f692['prototype']['destroy']['call'](this, _0x39ccfc), this['_tf'] = null;
            }, _0x44cb2f['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x279cd6());
            }, _0x44cb2f['changeText'] = function (_0x1c21eb) {
                this['_tf']['changeText'](_0x1c21eb);
            }, _0x44cb2f['measureWid' + 'th'] = function () {
                return this['_tf']['width'];
            }, _0x44cb2f['measureHei' + 'ght'] = function () {
                return this['_tf']['height'];
            }, _0x25c3de(0x0, _0x44cb2f, 'padding', function () {
                return this['_tf']['padding']['join'](',');
            }, function (_0x525495) {
                this['_tf']['padding'] = _0x17d5a0['fillArray'](_0xb0c2d5['labelPaddi' + 'ng'], _0x525495, Number);
            }), _0x25c3de(0x0, _0x44cb2f, 'bold', function () {
                return this['_tf']['bold'];
            }, function (_0x484575) {
                this['_tf']['bold'] = _0x484575;
            }), _0x25c3de(0x0, _0x44cb2f, 'align', function () {
                return this['_tf']['align'];
            }, function (_0x319eb0) {
                this['_tf']['align'] = _0x319eb0;
            }), _0x25c3de(0x0, _0x44cb2f, 'text', function () {
                return this['_tf']['text'];
            }, function (_0x5844c4) {
                if (this['_tf']['text'] != _0x5844c4) {
                    if (_0x5844c4)
                        _0x5844c4 = _0x17d5a0['adptString'](_0x5844c4 + '');
                    this['_tf']['text'] = _0x5844c4, this['event']('change');
                    if (!this['_width'] || !this['_height'])
                        this['onCompResi' + 'ze']();
                }
            }), _0x25c3de(0x0, _0x44cb2f, 'italic', function () {
                return this['_tf']['italic'];
            }, function (_0x4a2698) {
                this['_tf']['italic'] = _0x4a2698;
            }), _0x25c3de(0x0, _0x44cb2f, 'wordWrap', function () {
                return this['_tf']['wordWrap'];
            }, function (_0x465ad8) {
                this['_tf']['wordWrap'] = _0x465ad8;
            }), _0x25c3de(0x0, _0x44cb2f, 'font', function () {
                return this['_tf']['font'];
            }, function (_0x191b69) {
                this['_tf']['font'] = _0x191b69;
            }), _0x25c3de(0x0, _0x44cb2f, 'dataSource', _0x55f692['prototype']['_$get_data' + 'Source'], function (_0x1c6ddc) {
                this['_dataSourc' + 'e'] = _0x1c6ddc;
                if (typeof _0x1c6ddc == 'number' || typeof _0x1c6ddc == 'string')
                    this['text'] = _0x1c6ddc + '';
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x1c6ddc);
            }), _0x25c3de(0x0, _0x44cb2f, 'color', function () {
                return this['_tf']['color'];
            }, function (_0x89f4c1) {
                this['_tf']['color'] = _0x89f4c1;
            }), _0x25c3de(0x0, _0x44cb2f, 'valign', function () {
                return this['_tf']['valign'];
            }, function (_0x545bc3) {
                this['_tf']['valign'] = _0x545bc3;
            }), _0x25c3de(0x0, _0x44cb2f, 'leading', function () {
                return this['_tf']['leading'];
            }, function (_0x2bedf4) {
                this['_tf']['leading'] = _0x2bedf4;
            }), _0x25c3de(0x0, _0x44cb2f, 'fontSize', function () {
                return this['_tf']['fontSize'];
            }, function (_0x6d95e1) {
                this['_tf']['fontSize'] = _0x6d95e1;
            }), _0x25c3de(0x0, _0x44cb2f, 'bgColor', function () {
                return this['_tf']['bgColor'];
            }, function (_0x450a74) {
                this['_tf']['bgColor'] = _0x450a74;
            }), _0x25c3de(0x0, _0x44cb2f, 'borderColo' + 'r', function () {
                return this['_tf']['borderColo' + 'r'];
            }, function (_0xcc7ec3) {
                this['_tf']['borderColo' + 'r'] = _0xcc7ec3;
            }), _0x25c3de(0x0, _0x44cb2f, 'stroke', function () {
                return this['_tf']['stroke'];
            }, function (_0x3e04f8) {
                this['_tf']['stroke'] = _0x3e04f8;
            }), _0x25c3de(0x0, _0x44cb2f, 'strokeColo' + 'r', function () {
                return this['_tf']['strokeColo' + 'r'];
            }, function (_0x54a389) {
                this['_tf']['strokeColo' + 'r'] = _0x54a389;
            }), _0x25c3de(0x0, _0x44cb2f, 'textField', function () {
                return this['_tf'];
            }), _0x25c3de(0x0, _0x44cb2f, 'width', function () {
                if (this['_width'] || this['_tf']['text'])
                    return _0x90a138['superGet'](_0x5c4857, this, 'width');
                return 0x0;
            }, function (_0x3c17b7) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x3c17b7), this['_tf']['width'] = _0x3c17b7;
            }), _0x25c3de(0x0, _0x44cb2f, 'height', function () {
                if (this['_height'] || this['_tf']['text'])
                    return _0x90a138['superGet'](_0x5c4857, this, 'height');
                return 0x0;
            }, function (_0x4acfc5) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x4acfc5), this['_tf']['height'] = _0x4acfc5;
            }), _0x25c3de(0x0, _0x44cb2f, 'overflow', function () {
                return this['_tf']['overflow'];
            }, function (_0x19de7b) {
                this['_tf']['overflow'] = _0x19de7b;
            }), _0x25c3de(0x0, _0x44cb2f, 'underline', function () {
                return this['_tf']['underline'];
            }, function (_0x430750) {
                this['_tf']['underline'] = _0x430750;
            }), _0x25c3de(0x0, _0x44cb2f, 'underlineC' + 'olor', function () {
                return this['_tf']['underlineC' + 'olor'];
            }, function (_0x39c9b4) {
                this['_tf']['underlineC' + 'olor'] = _0x39c9b4;
            }), _0x5b6842;
        }(_0x5c4857), _0x1f6325 = function (_0x5e628b) {
            function _0x201e5d() {
                this['changeHand' + 'ler'] = null, this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000', this['_panelChan' + 'ged'] = ![], _0x201e5d['__super']['call'](this);
            }
            _0x25419d(_0x201e5d, 'laya.ui.Co' + 'lorPicker', _0x5e628b);
            var _0x83fb1b = _0x201e5d['prototype'];
            return _0x83fb1b['destroy'] = function (_0x57d28e) {
                _0x57d28e === void 0x0 && (_0x57d28e = !![]), _0x5e628b['prototype']['destroy']['call'](this, _0x57d28e), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x57d28e), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x57d28e), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
            }, _0x83fb1b['createChil' + 'dren'] = function () {
                this['addChild'](this['_colorButt' + 'on'] = new _0x2ba5d4()), this['_colorPane' + 'l'] = new _0x1354a5(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x4ab096()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x4ab096()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x2aae8d());
            }, _0x83fb1b['initialize'] = function () {
                this['_colorButt' + 'on']['on']('click', this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on']('change', this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on']('keydown', this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on']('mousemove', this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on']('click', this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on']('mousedown', this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
            }, _0x83fb1b['onPanelMou' + 'seDown'] = function (_0x5c1b97) {
                _0x5c1b97['stopPropag' + 'ation']();
            }, _0x83fb1b['changePane' + 'l'] = function () {
                this['_panelChan' + 'ged'] = ![];
                var _0x51377c = this['_colorPane' + 'l']['graphics'];
                _0x51377c['clear'](!![]), _0x51377c['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], _0x51377c = this['_colorTile' + 's']['graphics'], _0x51377c['clear'](!![]);
                var _0xca1bd3 = [
                    0x0,
                    0x333333,
                    0x666666,
                    0x999999,
                    0xcccccc,
                    0xffffff,
                    0xff0000,
                    0xff00,
                    0xff,
                    0xffff00,
                    0xffff,
                    0xff00ff
                ];
                for (var _0x5a37eb = 0x0; _0x5a37eb < 0xc; _0x5a37eb++) {
                    for (var _0x1b45a3 = 0x0; _0x1b45a3 < 0x14; _0x1b45a3++) {
                        var _0x314107 = 0x0;
                        if (_0x1b45a3 === 0x0)
                            _0x314107 = _0xca1bd3[_0x5a37eb];
                        else {
                            if (_0x1b45a3 === 0x1)
                                _0x314107 = 0x0;
                            else
                                _0x314107 = (((_0x5a37eb * 0x3 + _0x1b45a3 / 0x6) % 0x3 << 0x0) + (_0x5a37eb / 0x6 << 0x0) * 0x3) * 0x33 << 0x10 | _0x1b45a3 % 0x6 * 0x33 << 0x8 | (_0x5a37eb << 0x0) % 0x6 * 0x33;
                        }
                        var _0x24ed89 = _0x17d5a0['toColor'](_0x314107);
                        this['_colors']['push'](_0x24ed89);
                        var _0x126db9 = _0x1b45a3 * this['_gridSize'], _0x3a1172 = _0x5a37eb * this['_gridSize'];
                        _0x51377c['drawRect'](_0x126db9, _0x3a1172, this['_gridSize'], this['_gridSize'], _0x24ed89, '#000000');
                    }
                }
            }, _0x83fb1b['onColorBut' + 'tonClick'] = function (_0x47c238) {
                if (this['_colorPane' + 'l']['parent'])
                    this['close']();
                else
                    this['open']();
            }, _0x83fb1b['open'] = function () {
                var _0x51e789 = this['localToGlo' + 'bal'](new _0x5e6c15()), _0x2e17c3 = _0x51e789['x'] + this['_colorPane' + 'l']['width'] <= _0x90a138['stage']['width'] ? _0x51e789['x'] : _0x90a138['stage']['width'] - this['_colorPane' + 'l']['width'], _0x50c025 = _0x51e789['y'] + this['_colorButt' + 'on']['height'];
                _0x50c025 = _0x50c025 + this['_colorPane' + 'l']['height'] <= _0x90a138['stage']['height'] ? _0x50c025 : _0x51e789['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x2e17c3, _0x50c025), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x90a138['_currentSt' + 'age']['addChild'](this['_colorPane' + 'l']), _0x90a138['stage']['on']('mousedown', this, this['removeColo' + 'rBox']);
            }, _0x83fb1b['close'] = function () {
                _0x90a138['stage']['off']('mousedown', this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
            }, _0x83fb1b['removeColo' + 'rBox'] = function (_0x4ed7ad) {
                this['close']();
            }, _0x83fb1b['onColorFie' + 'ldKeyDown'] = function (_0x37decd) {
                if (_0x37decd['keyCode'] == 0xd) {
                    if (this['_colorInpu' + 't']['text'])
                        this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'];
                    else
                        this['selectedCo' + 'lor'] = null;
                    this['close'](), _0x37decd['stopPropag' + 'ation']();
                }
            }, _0x83fb1b['onColorInp' + 'utChange'] = function (_0x2e7615) {
                if (this['_colorInpu' + 't']['text'])
                    this['drawBlock'](this['_colorInpu' + 't']['text']);
                else
                    this['drawBlock']('#FFFFFF');
            }, _0x83fb1b['onColorTil' + 'esClick'] = function (_0x311b93) {
                this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
            }, _0x83fb1b['onColorTil' + 'esMouseMov' + 'e'] = function (_0x3b6b49) {
                this['_colorInpu' + 't']['focus'] = ![];
                var _0x14a636 = this['getColorBy' + 'Mouse']();
                this['_colorInpu' + 't']['text'] = _0x14a636, this['drawBlock'](_0x14a636);
            }, _0x83fb1b['getColorBy' + 'Mouse'] = function () {
                var _0x1a3cfd = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x410180 = Math['floor'](_0x1a3cfd['x'] / this['_gridSize']), _0x1da9d6 = Math['floor'](_0x1a3cfd['y'] / this['_gridSize']);
                return this['_colors'][_0x1da9d6 * 0x14 + _0x410180];
            }, _0x83fb1b['drawBlock'] = function (_0x5eadf2) {
                var _0xd8c302 = this['_colorBloc' + 'k']['graphics'];
                _0xd8c302['clear'](!![]);
                var _0x3ca120 = _0x5eadf2 ? _0x5eadf2 : '#ffffff';
                _0xd8c302['drawRect'](0x0, 0x0, 0x32, 0x14, _0x3ca120, this['_borderCol' + 'or']), _0x5eadf2 || _0xd8c302['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
            }, _0x83fb1b['changeColo' + 'r'] = function () {
                var _0x23eb18 = this['graphics'];
                _0x23eb18['clear'](!![]);
                var _0x1e9766 = this['_selectedC' + 'olor'] || '#000000';
                _0x23eb18['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x1e9766);
            }, _0x83fb1b['_setPanelC' + 'hanged'] = function () {
                !this['_panelChan' + 'ged'] && (this['_panelChan' + 'ged'] = !![], this['callLater'](this['changePane' + 'l']));
            }, _0x25c3de(0x0, _0x83fb1b, 'inputBgCol' + 'or', function () {
                return this['_inputBgCo' + 'lor'];
            }, function (_0x243bd6) {
                this['_inputBgCo' + 'lor'] = _0x243bd6, this['_setPanelC' + 'hanged']();
            }), _0x25c3de(0x0, _0x83fb1b, 'selectedCo' + 'lor', function () {
                return this['_selectedC' + 'olor'];
            }, function (_0x47516e) {
                this['_selectedC' + 'olor'] != _0x47516e && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x47516e, this['drawBlock'](_0x47516e), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event']('change', _0x5b5e73['EMPTY']['setTo']('change', this, this)));
            }), _0x25c3de(0x0, _0x83fb1b, 'skin', function () {
                return this['_colorButt' + 'on']['skin'];
            }, function (_0x4e538f) {
                this['_colorButt' + 'on']['once']('loaded', this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x4e538f;
            }), _0x25c3de(0x0, _0x83fb1b, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0xa316a9) {
                this['_bgColor'] = _0xa316a9, this['_setPanelC' + 'hanged']();
            }), _0x25c3de(0x0, _0x83fb1b, 'borderColo' + 'r', function () {
                return this['_borderCol' + 'or'];
            }, function (_0x31a2c0) {
                this['_borderCol' + 'or'] = _0x31a2c0, this['_setPanelC' + 'hanged']();
            }), _0x25c3de(0x0, _0x83fb1b, 'inputColor', function () {
                return this['_inputColo' + 'r'];
            }, function (_0x37b30a) {
                this['_inputColo' + 'r'] = _0x37b30a, this['_setPanelC' + 'hanged']();
            }), _0x201e5d;
        }(_0x5c4857), _0x2ba5d4 = function (_0x12c1f6) {
            function _0x20a5b3(_0x3cdd15, _0x5ca76f) {
                this['toggle'] = ![], this['_bitmap'] = null, this['_text'] = null, this['_strokeCol' + 'ors'] = null, this['_state'] = 0x0, this['_selected'] = ![], this['_skin'] = null, this['_autoSize'] = !![], this['_sources'] = null, this['_clickHand' + 'ler'] = null, this['_stateChan' + 'ged'] = ![], _0x20a5b3['__super']['call'](this), this['_labelColo' + 'rs'] = _0xb0c2d5['buttonLabe' + 'lColors'], this['_stateNum'] = _0xb0c2d5['buttonStat' + 'eNum'], _0x5ca76f === void 0x0 && (_0x5ca76f = ''), this['skin'] = _0x3cdd15, this['label'] = _0x5ca76f;
            }
            _0x25419d(_0x20a5b3, 'laya.ui.Bu' + 'tton', _0x12c1f6);
            var _0x24f20e = _0x20a5b3['prototype'];
            return _0x90a138['imps'](_0x24f20e, { 'laya.ui.ISelect': !![] }), _0x24f20e['destroy'] = function (_0x14aef8) {
                _0x14aef8 === void 0x0 && (_0x14aef8 = !![]), _0x12c1f6['prototype']['destroy']['call'](this, _0x14aef8), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x14aef8), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
            }, _0x24f20e['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x243845();
            }, _0x24f20e['createText'] = function () {
                !this['_text'] && (this['_text'] = new _0x279cd6(), this['_text']['overflow'] = 'hidden', this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
            }, _0x24f20e['initialize'] = function () {
                this['_mouseStat' + 'e'] !== 0x1 && (this['mouseEnabl' + 'ed'] = !![], this['_setBit'](0x40, !![])), this['_createLis' + 'tener']('mouseover', this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener']('mouseout', this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener']('mousedown', this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener']('mouseup', this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener']('click', this, this['onMouse'], null, ![], ![]);
            }, _0x24f20e['onMouse'] = function (_0x27392b) {
                if (this['toggle'] === ![] && this['_selected'])
                    return;
                if (_0x27392b['type'] === 'click') {
                    this['toggle'] && (this['selected'] = !this['_selected']), this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']();
                    return;
                }
                !this['_selected'] && (this['state'] = _0x20a5b3['stateMap'][_0x27392b['type']]);
            }, _0x24f20e['_skinLoade' + 'd'] = function () {
                this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x24f20e['changeClip' + 's'] = function () {
                var _0xf4fc22 = _0x3b96d5['getRes'](this['_skin']);
                if (!_0xf4fc22) {
                    console['log']('lose\x20skin', this['_skin']);
                    return;
                }
                ;
                var _0x15cf26 = _0xf4fc22['sourceWidt' + 'h'], _0x493a7b = _0xf4fc22['sourceHeig' + 'ht'] / this['_stateNum'];
                _0xf4fc22['$_GID'] || (_0xf4fc22['$_GID'] = _0x2a011f['getGID']());
                var _0x1cd72b = _0xf4fc22['$_GID'] + '-' + this['_stateNum'], _0x3aa72a = _0x485a96['I']['get'](_0x1cd72b);
                !_0x2a011f['isOkTextur' + 'eList'](_0x3aa72a) && (_0x3aa72a = null);
                if (_0x3aa72a)
                    this['_sources'] = _0x3aa72a;
                else {
                    this['_sources'] = [];
                    if (this['_stateNum'] === 0x1)
                        this['_sources']['push'](_0xf4fc22);
                    else
                        for (var _0x21c74b = 0x0; _0x21c74b < this['_stateNum']; _0x21c74b++) {
                            this['_sources']['push'](_0x3fdd90['createFrom' + 'Texture'](_0xf4fc22, 0x0, _0x493a7b * _0x21c74b, _0x15cf26, _0x493a7b));
                        }
                    _0x485a96['I']['set'](_0x1cd72b, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x15cf26, this['_bitmap']['height'] = this['_height'] || _0x493a7b, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x15cf26);
            }, _0x24f20e['measureWid' + 'th'] = function () {
                this['runCallLat' + 'er'](this['changeClip' + 's']);
                if (this['_autoSize'])
                    return this['_bitmap']['width'];
                return this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0);
            }, _0x24f20e['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
            }, _0x24f20e['changeStat' + 'e'] = function () {
                this['_stateChan' + 'ged'] = ![], this['runCallLat' + 'er'](this['changeClip' + 's']);
                var _0xb8b03b = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
                this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0xb8b03b]);
                if (this['label']) {
                    this['_text']['color'] = this['_labelColo' + 'rs'][_0xb8b03b];
                    if (this['_strokeCol' + 'ors'])
                        this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0xb8b03b];
                }
            }, _0x24f20e['_setStateC' + 'hanged'] = function () {
                !this['_stateChan' + 'ged'] && (this['_stateChan' + 'ged'] = !![], this['callLater'](this['changeStat' + 'e']));
            }, _0x25c3de(0x0, _0x24f20e, 'skin', function () {
                return this['_skin'];
            }, function (_0x56fa04) {
                this['_skin'] != _0x56fa04 && (this['_skin'] = _0x56fa04, _0x56fa04 ? !_0x3b96d5['getRes'](_0x56fa04) ? _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']() : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0x24f20e, 'labelPaddi' + 'ng', function () {
                return this['createText'](), this['_text']['padding']['join'](',');
            }, function (_0x59ed4d) {
                this['createText'](), this['_text']['padding'] = _0x17d5a0['fillArray'](_0xb0c2d5['labelPaddi' + 'ng'], _0x59ed4d, Number);
            }), _0x25c3de(0x0, _0x24f20e, 'state', function () {
                return this['_state'];
            }, function (_0x41e366) {
                this['_state'] != _0x41e366 && (this['_state'] = _0x41e366, this['_setStateC' + 'hanged']());
            }), _0x25c3de(0x0, _0x24f20e, 'text', function () {
                return this['createText'](), this['_text'];
            }), _0x25c3de(0x0, _0x24f20e, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x1899ca) {
                typeof _0x1899ca == 'string' && (_0x1899ca = parseInt(_0x1899ca)), this['_stateNum'] != _0x1899ca && (this['_stateNum'] = _0x1899ca < 0x1 ? 0x1 : _0x1899ca > 0x3 ? 0x3 : _0x1899ca, this['callLater'](this['changeClip' + 's']));
            }), _0x25c3de(0x0, _0x24f20e, 'label', function () {
                return this['_text'] ? this['_text']['text'] : null;
            }, function (_0x507e4e) {
                if (!this['_text'] && !_0x507e4e)
                    return;
                this['createText'](), this['_text']['text'] != _0x507e4e && (_0x507e4e && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x507e4e + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']());
            }), _0x25c3de(0x0, _0x24f20e, 'labelSize', function () {
                return this['createText'](), this['_text']['fontSize'];
            }, function (_0x877256) {
                this['createText'](), this['_text']['fontSize'] = _0x877256;
            }), _0x25c3de(0x0, _0x24f20e, 'selected', function () {
                return this['_selected'];
            }, function (_0x58452b) {
                this['_selected'] != _0x58452b && (this['_selected'] = _0x58452b, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event']('change'));
            }), _0x25c3de(0x0, _0x24f20e, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
            }, function (_0x386220) {
                this['_strokeCol' + 'ors'] = _0x17d5a0['fillArray'](_0xb0c2d5['buttonLabe' + 'lColors'], _0x386220, String), this['_setStateC' + 'hanged']();
            }), _0x25c3de(0x0, _0x24f20e, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs']['join'](',');
            }, function (_0x407cc1) {
                this['_labelColo' + 'rs'] = _0x17d5a0['fillArray'](_0xb0c2d5['buttonLabe' + 'lColors'], _0x407cc1, String), this['_setStateC' + 'hanged']();
            }), _0x25c3de(0x0, _0x24f20e, 'labelStrok' + 'e', function () {
                return this['createText'](), this['_text']['stroke'];
            }, function (_0xde7fd6) {
                this['createText'](), this['_text']['stroke'] = _0xde7fd6;
            }), _0x25c3de(0x0, _0x24f20e, 'labelStrok' + 'eColor', function () {
                return this['createText'](), this['_text']['strokeColo' + 'r'];
            }, function (_0x19ddb6) {
                this['createText'](), this['_text']['strokeColo' + 'r'] = _0x19ddb6;
            }), _0x25c3de(0x0, _0x24f20e, 'labelBold', function () {
                return this['createText'](), this['_text']['bold'];
            }, function (_0x2dcff2) {
                this['createText'](), this['_text']['bold'] = _0x2dcff2;
            }), _0x25c3de(0x0, _0x24f20e, 'labelFont', function () {
                return this['createText'](), this['_text']['font'];
            }, function (_0x57c6b4) {
                this['createText'](), this['_text']['font'] = _0x57c6b4;
            }), _0x25c3de(0x0, _0x24f20e, 'labelAlign', function () {
                return this['createText'](), this['_text']['align'];
            }, function (_0x11889d) {
                this['createText'](), this['_text']['align'] = _0x11889d;
            }), _0x25c3de(0x0, _0x24f20e, 'clickHandl' + 'er', function () {
                return this['_clickHand' + 'ler'];
            }, function (_0x4c64d5) {
                this['_clickHand' + 'ler'] = _0x4c64d5;
            }), _0x25c3de(0x0, _0x24f20e, 'sizeGrid', function () {
                if (this['_bitmap']['sizeGrid'])
                    return this['_bitmap']['sizeGrid']['join'](',');
                return null;
            }, function (_0x42685a) {
                this['_bitmap']['sizeGrid'] = _0x17d5a0['fillArray'](_0xb0c2d5['defaultSiz' + 'eGrid'], _0x42685a, Number);
            }), _0x25c3de(0x0, _0x24f20e, 'width', _0x12c1f6['prototype']['_$get_widt' + 'h'], function (_0x51df5c) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x51df5c), this['_autoSize'] && (this['_bitmap']['width'] = _0x51df5c, this['_text'] && (this['_text']['width'] = _0x51df5c));
            }), _0x25c3de(0x0, _0x24f20e, 'height', _0x12c1f6['prototype']['_$get_heig' + 'ht'], function (_0x3b974f) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x3b974f), this['_autoSize'] && (this['_bitmap']['height'] = _0x3b974f, this['_text'] && (this['_text']['height'] = _0x3b974f));
            }), _0x25c3de(0x0, _0x24f20e, 'dataSource', _0x12c1f6['prototype']['_$get_data' + 'Source'], function (_0x3040c3) {
                this['_dataSourc' + 'e'] = _0x3040c3;
                if (typeof _0x3040c3 == 'number' || typeof _0x3040c3 == 'string')
                    this['label'] = _0x3040c3 + '';
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x3040c3);
            }), _0x25c3de(0x0, _0x24f20e, 'iconOffset', function () {
                return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
            }, function (_0x1941df) {
                if (_0x1941df)
                    this['_bitmap']['_offset'] = _0x17d5a0['fillArray']([
                        0x1,
                        0x1
                    ], _0x1941df, Number);
                else
                    this['_bitmap']['_offset'] = [];
            }), _0x2f72fa(_0x20a5b3, [
                'stateMap',
                function () {
                    return this['stateMap'] = {
                        'mouseup': 0x0,
                        'mouseover': 0x1,
                        'mousedown': 0x2,
                        'mouseout': 0x0
                    };
                }
            ]), _0x20a5b3;
        }(_0x5c4857), _0x3881f6 = function (_0x590572) {
            function _0x109f80(_0x1061a5) {
                this['changeHand' + 'ler'] = null, this['_bg'] = null, this['_bar'] = null, this['_skin'] = null, this['_value'] = 0.5, _0x109f80['__super']['call'](this), this['skin'] = _0x1061a5;
            }
            _0x25419d(_0x109f80, 'laya.ui.Pr' + 'ogressBar', _0x590572);
            var _0x55e533 = _0x109f80['prototype'];
            return _0x55e533['destroy'] = function (_0x78f98f) {
                _0x78f98f === void 0x0 && (_0x78f98f = !![]), _0x590572['prototype']['destroy']['call'](this, _0x78f98f), this['_bg'] && this['_bg']['destroy'](_0x78f98f), this['_bar'] && this['_bar']['destroy'](_0x78f98f), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
            }, _0x55e533['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x258466()), this['addChild'](this['_bar'] = new _0x258466()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = ![];
            }, _0x55e533['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x55e533['measureWid' + 'th'] = function () {
                return this['_bg']['width'];
            }, _0x55e533['measureHei' + 'ght'] = function () {
                return this['_bg']['height'];
            }, _0x55e533['changeValu' + 'e'] = function () {
                if (this['sizeGrid']) {
                    var _0x3b2875 = this['sizeGrid']['split'](','), _0x56b635 = Number(_0x3b2875[0x3]), _0x400e63 = Number(_0x3b2875[0x1]), _0x45448a = this['width'] - _0x56b635 - _0x400e63, _0x279f5f = _0x45448a * this['_value'];
                    this['_bar']['width'] = _0x56b635 + _0x400e63 + _0x279f5f, this['_bar']['visible'] = this['_bar']['width'] > _0x56b635 + _0x400e63;
                } else
                    this['_bar']['width'] = this['width'] * this['_value'];
            }, _0x25c3de(0x0, _0x55e533, 'dataSource', _0x590572['prototype']['_$get_data' + 'Source'], function (_0x4d983d) {
                this['_dataSourc' + 'e'] = _0x4d983d;
                if (typeof _0x4d983d == 'number' || typeof _0x4d983d == 'string')
                    this['value'] = Number(_0x4d983d);
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x4d983d);
            }), _0x25c3de(0x0, _0x55e533, 'skin', function () {
                return this['_skin'];
            }, function (_0x1132b5) {
                this['_skin'] != _0x1132b5 && (this['_skin'] = _0x1132b5, this['_skin'] && !_0x3b96d5['getRes'](this['_skin']) ? _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0x55e533, 'height', _0x590572['prototype']['_$get_heig' + 'ht'], function (_0x19c6ea) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x19c6ea), this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
            }), _0x25c3de(0x0, _0x55e533, 'bar', function () {
                return this['_bar'];
            }), _0x25c3de(0x0, _0x55e533, 'value', function () {
                return this['_value'];
            }, function (_0x4b2121) {
                this['_value'] != _0x4b2121 && (_0x4b2121 = _0x4b2121 > 0x1 ? 0x1 : _0x4b2121 < 0x0 ? 0x0 : _0x4b2121, this['_value'] = _0x4b2121, this['callLater'](this['changeValu' + 'e']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x4b2121));
            }), _0x25c3de(0x0, _0x55e533, 'bg', function () {
                return this['_bg'];
            }), _0x25c3de(0x0, _0x55e533, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0xb4fb94) {
                this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0xb4fb94;
            }), _0x25c3de(0x0, _0x55e533, 'width', _0x590572['prototype']['_$get_widt' + 'h'], function (_0x3f2262) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x3f2262), this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
            }), _0x109f80;
        }(_0x5c4857), _0x5063e3 = function (_0x255ebf) {
            function _0x31580f() {
                this['_tipBox'] = null, this['_tipText'] = null, this['_defaultTi' + 'pHandler'] = null, _0x31580f['__super']['call'](this), this['_tipBox'] = new _0x5c4857(), this['_tipBox']['addChild'](this['_tipText'] = new _0x279cd6()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x31580f['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x90a138['stage']['on']('showtip', this, this['_onStageSh' + 'owTip']), _0x90a138['stage']['on']('hidetip', this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
            }
            _0x25419d(_0x31580f, 'laya.ui.Ti' + 'pManager', _0x255ebf);
            var _0x2864de = _0x31580f['prototype'];
            return _0x2864de['_onStageHi' + 'deTip'] = function (_0x4fdc38) {
                _0x90a138['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
            }, _0x2864de['_onStageSh' + 'owTip'] = function (_0x8bc025) {
                _0x90a138['timer']['once'](_0x31580f['tipDelay'], this, this['_showTip'], [_0x8bc025], !![]);
            }, _0x2864de['_showTip'] = function (_0x4387d0) {
                if (typeof _0x4387d0 == 'string') {
                    var _0x3177da = String(_0x4387d0);
                    Boolean(_0x3177da) && this['_defaultTi' + 'pHandler'](_0x3177da);
                } else {
                    if (_0x4387d0 instanceof laya['utils']['Handler'])
                        _0x4387d0['run']();
                    else
                        typeof _0x4387d0 == 'function' && _0x4387d0['apply']();
                }
                !![] && (_0x90a138['stage']['on']('mousemove', this, this['_onStageMo' + 'useMove']), _0x90a138['stage']['on']('mousedown', this, this['_onStageMo' + 'useDown'])), this['_onStageMo' + 'useMove'](null);
            }, _0x2864de['_onStageMo' + 'useDown'] = function (_0x4f049f) {
                this['closeAll']();
            }, _0x2864de['_onStageMo' + 'useMove'] = function (_0xfb123c) {
                this['_showToSta' + 'ge'](this, _0x31580f['offsetX'], _0x31580f['offsetY']);
            }, _0x2864de['_showToSta' + 'ge'] = function (_0x43f7ee, _0x4b75b6, _0x16f464) {
                _0x4b75b6 === void 0x0 && (_0x4b75b6 = 0x0), _0x16f464 === void 0x0 && (_0x16f464 = 0x0);
                var _0x1bc197 = _0x43f7ee['getBounds']();
                _0x43f7ee['x'] = _0x90a138['stage']['mouseX'] + _0x4b75b6, _0x43f7ee['y'] = _0x90a138['stage']['mouseY'] + _0x16f464, _0x43f7ee['_x'] + _0x1bc197['width'] > _0x90a138['stage']['width'] && (_0x43f7ee['x'] -= _0x1bc197['width'] + _0x4b75b6), _0x43f7ee['_y'] + _0x1bc197['height'] > _0x90a138['stage']['height'] && (_0x43f7ee['y'] -= _0x1bc197['height'] + _0x16f464);
            }, _0x2864de['closeAll'] = function () {
                _0x90a138['timer']['clear'](this, this['_showTip']), _0x90a138['stage']['off']('mousemove', this, this['_onStageMo' + 'useMove']), _0x90a138['stage']['off']('mousedown', this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
            }, _0x2864de['showDislay' + 'Tip'] = function (_0x5a7358) {
                this['addChild'](_0x5a7358), this['_showToSta' + 'ge'](this), _0x90a138['_currentSt' + 'age']['addChild'](this);
            }, _0x2864de['_showDefau' + 'ltTip'] = function (_0x3790e1) {
                this['_tipText']['text'] = _0x3790e1;
                var _0x235582 = this['_tipBox']['graphics'];
                _0x235582['clear'](!![]), _0x235582['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x31580f['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x90a138['_currentSt' + 'age']['addChild'](this);
            }, _0x25c3de(0x0, _0x2864de, 'defaultTip' + 'Handler', function () {
                return this['_defaultTi' + 'pHandler'];
            }, function (_0x5902e3) {
                this['_defaultTi' + 'pHandler'] = _0x5902e3;
            }), _0x31580f['offsetX'] = 0xa, _0x31580f['offsetY'] = 0xf, _0x31580f['tipTextCol' + 'or'] = '#ffffff', _0x31580f['tipBackCol' + 'or'] = '#111111', _0x31580f['tipDelay'] = 0xc8, _0x31580f;
        }(_0x5c4857), _0x4e7210 = function (_0x8e0926) {
            function _0x46ac9a(_0x4fb2db, _0x26ae46) {
                this['_visibleNu' + 'm'] = 0x6, this['_button'] = null, this['_list'] = null, this['_isOpen'] = ![], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['_selectHan' + 'dler'] = null, this['_itemHeigh' + 't'] = NaN, this['_listHeigh' + 't'] = NaN, this['_listChang' + 'ed'] = ![], this['_itemChang' + 'ed'] = ![], this['_scrollBar' + 'Skin'] = null, this['_isCustomL' + 'ist'] = ![], this['itemRender'] = null, _0x46ac9a['__super']['call'](this), this['_itemColor' + 's'] = _0xb0c2d5['comboBoxIt' + 'emColors'], this['skin'] = _0x4fb2db, this['labels'] = _0x26ae46;
            }
            _0x25419d(_0x46ac9a, 'laya.ui.Co' + 'mboBox', _0x8e0926);
            var _0x34ee0b = _0x46ac9a['prototype'];
            return _0x34ee0b['destroy'] = function (_0x569f03) {
                _0x569f03 === void 0x0 && (_0x569f03 = !![]), _0x8e0926['prototype']['destroy']['call'](this, _0x569f03), this['_button'] && this['_button']['destroy'](_0x569f03), this['_list'] && this['_list']['destroy'](_0x569f03), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
            }, _0x34ee0b['createChil' + 'dren'] = function () {
                this['addChild'](this['_button'] = new _0x2ba5d4()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x34ee0b['_createLis' + 't'] = function () {
                this['_list'] = new _0x3e2083();
                if (this['_scrollBar' + 'Skin'])
                    this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin'];
                this['_setListEv' + 'ent'](this['_list']);
            }, _0x34ee0b['_setListEv' + 'ent'] = function (_0x49311d) {
                this['_list']['selectEnab' + 'le'] = !![], this['_list']['on']('mousedown', this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x44d7a5['create'](this, this['onlistItem' + 'Mouse'], null, ![]);
                if (this['_list']['scrollBar'])
                    this['_list']['scrollBar']['on']('mousedown', this, this['onScrollBa' + 'rDown']);
            }, _0x34ee0b['onListDown'] = function (_0x46c82b) {
                _0x46c82b['stopPropag' + 'ation']();
            }, _0x34ee0b['onScrollBa' + 'rDown'] = function (_0x2dfd5d) {
                _0x2dfd5d['stopPropag' + 'ation']();
            }, _0x34ee0b['onButtonMo' + 'useDown'] = function (_0x459603) {
                this['callLater'](this['switchTo'], [!this['_isOpen']]);
            }, _0x34ee0b['measureWid' + 'th'] = function () {
                return this['_button']['width'];
            }, _0x34ee0b['measureHei' + 'ght'] = function () {
                return this['_button']['height'];
            }, _0x34ee0b['changeList'] = function () {
                this['_listChang' + 'ed'] = ![];
                var _0x57db2f = this['width'] - 0x2, _0x5266cb = this['_itemColor' + 's'][0x2];
                this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                    'type': 'Box',
                    'child': [{
                            'type': 'Label',
                            'props': {
                                'name': 'label',
                                'x': 0x1,
                                'padding': '3,3,3,3',
                                'width': _0x57db2f,
                                'height': this['_itemHeigh' + 't'],
                                'fontSize': this['_itemSize'],
                                'color': _0x5266cb
                            }
                        }]
                }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
            }, _0x34ee0b['onlistItem' + 'Mouse'] = function (_0x348dcb, _0x3d4732) {
                var _0x549899 = _0x348dcb['type'];
                if (_0x549899 === 'mouseover' || _0x549899 === 'mouseout') {
                    if (this['_isCustomL' + 'ist'])
                        return;
                    var _0x2ea180 = this['_list']['getCell'](_0x3d4732);
                    if (!_0x2ea180)
                        return;
                    var _0x8a3885 = _0x2ea180['getChildBy' + 'Name']('label');
                    _0x8a3885 && (_0x549899 === 'mouseover' ? (_0x8a3885['bgColor'] = this['_itemColor' + 's'][0x0], _0x8a3885['color'] = this['_itemColor' + 's'][0x1]) : (_0x8a3885['bgColor'] = null, _0x8a3885['color'] = this['_itemColor' + 's'][0x2]));
                } else
                    _0x549899 === 'click' && (this['selectedIn' + 'dex'] = _0x3d4732, this['isOpen'] = ![]);
            }, _0x34ee0b['switchTo'] = function (_0x6324d5) {
                this['isOpen'] = _0x6324d5;
            }, _0x34ee0b['changeOpen'] = function () {
                this['isOpen'] = !this['_isOpen'];
            }, _0x34ee0b['changeItem'] = function () {
                this['_itemChang' + 'ed'] = ![], this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'];
                if (!this['_isCustomL' + 'ist']) {
                    var _0x390882 = this['_list']['graphics'];
                    _0x390882['clear'](!![]), _0x390882['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
                }
                ;
                var _0x422d4c = this['_list']['array'] || [];
                _0x422d4c['length'] = 0x0;
                for (var _0x3a861d = 0x0, _0x1a5227 = this['_labels']['length']; _0x3a861d < _0x1a5227; _0x3a861d++) {
                    _0x422d4c['push']({ 'label': this['_labels'][_0x3a861d] });
                }
                this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x422d4c;
            }, _0x34ee0b['changeSele' + 'cted'] = function () {
                this['_button']['label'] = this['selectedLa' + 'bel'];
            }, _0x34ee0b['_onStageMo' + 'useWheel'] = function (_0x1f7557) {
                if (!this['_list'] || this['_list']['contains'](_0x1f7557['target']))
                    return;
                this['removeList'](null);
            }, _0x34ee0b['removeList'] = function (_0x3b11d4) {
                _0x90a138['stage']['off']('mousedown', this, this['removeList']), _0x90a138['stage']['off']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['isOpen'] = ![];
            }, _0x25c3de(0x0, _0x34ee0b, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x310df4) {
                if (this['_selectedI' + 'ndex'] != _0x310df4) {
                    this['_selectedI' + 'ndex'] = _0x310df4;
                    if (this['_labels']['length'] > 0x0)
                        this['changeSele' + 'cted']();
                    else
                        this['callLater'](this['changeSele' + 'cted']);
                    this['event']('change', [_0x5b5e73['EMPTY']['setTo']('change', this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']);
                }
            }), _0x25c3de(0x0, _0x34ee0b, 'skin', function () {
                return this['_button']['skin'];
            }, function (_0x4dda41) {
                this['_button']['skin'] != _0x4dda41 && (this['_button']['skin'] = _0x4dda41, this['_listChang' + 'ed'] = !![]);
            }), _0x25c3de(0x0, _0x34ee0b, 'visibleNum', function () {
                return this['_visibleNu' + 'm'];
            }, function (_0x39fb28) {
                this['_visibleNu' + 'm'] = _0x39fb28, this['_listChang' + 'ed'] = !![];
            }), _0x25c3de(0x0, _0x34ee0b, 'width', _0x8e0926['prototype']['_$get_widt' + 'h'], function (_0x277319) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x277319), this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !![], this['_listChang' + 'ed'] = !![];
            }), _0x25c3de(0x0, _0x34ee0b, 'selectedLa' + 'bel', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
            }, function (_0xdd9b43) {
                this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0xdd9b43);
            }), _0x25c3de(0x0, _0x34ee0b, 'labels', function () {
                return this['_labels']['join'](',');
            }, function (_0x556c4d) {
                if (this['_labels']['length'] > 0x0)
                    this['selectedIn' + 'dex'] = -0x1;
                if (_0x556c4d)
                    this['_labels'] = _0x556c4d['split'](',');
                else
                    this['_labels']['length'] = 0x0;
                this['_itemChang' + 'ed'] = !![];
            }), _0x25c3de(0x0, _0x34ee0b, 'height', _0x8e0926['prototype']['_$get_heig' + 'ht'], function (_0x427288) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x427288), this['_button']['height'] = this['_height'];
            }), _0x25c3de(0x0, _0x34ee0b, 'selectHand' + 'ler', function () {
                return this['_selectHan' + 'dler'];
            }, function (_0x4a4948) {
                this['_selectHan' + 'dler'] = _0x4a4948;
            }), _0x25c3de(0x0, _0x34ee0b, 'labelBold', function () {
                return this['_button']['text']['bold'];
            }, function (_0x3cff0c) {
                this['_button']['text']['bold'] = _0x3cff0c;
            }), _0x25c3de(0x0, _0x34ee0b, 'itemColors', function () {
                return String(this['_itemColor' + 's']);
            }, function (_0x149f3c) {
                this['_itemColor' + 's'] = _0x17d5a0['fillArray'](this['_itemColor' + 's'], _0x149f3c, String), this['_listChang' + 'ed'] = !![];
            }), _0x25c3de(0x0, _0x34ee0b, 'itemSize', function () {
                return this['_itemSize'];
            }, function (_0xccd430) {
                this['_itemSize'] = _0xccd430, this['_listChang' + 'ed'] = !![];
            }), _0x25c3de(0x0, _0x34ee0b, 'scrollBar', function () {
                return this['list']['scrollBar'];
            }), _0x25c3de(0x0, _0x34ee0b, 'isOpen', function () {
                return this['_isOpen'];
            }, function (_0x2e8642) {
                if (this['_isOpen'] != _0x2e8642) {
                    this['_isOpen'] = _0x2e8642, this['_button']['selected'] = this['_isOpen'];
                    if (this['_isOpen']) {
                        this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                        var _0xa88e09 = this['localToGlo' + 'bal'](_0x5e6c15['TEMP']['setTo'](0x0, 0x0)), _0x100da9 = _0xa88e09['y'] + this['_button']['height'];
                        _0x100da9 = _0x100da9 + this['_listHeigh' + 't'] <= _0x90a138['stage']['height'] ? _0x100da9 : _0xa88e09['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0xa88e09['x'], _0x100da9), this['_list']['zOrder'] = 0x3e9, _0x90a138['_currentSt' + 'age']['addChild'](this['_list']), _0x90a138['stage']['once']('mousedown', this, this['removeList']), _0x90a138['stage']['on']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                    } else
                        this['_list'] && this['_list']['removeSelf']();
                }
            }), _0x25c3de(0x0, _0x34ee0b, 'scrollBarS' + 'kin', function () {
                return this['_scrollBar' + 'Skin'];
            }, function (_0x38eb85) {
                this['_scrollBar' + 'Skin'] = _0x38eb85;
            }), _0x25c3de(0x0, _0x34ee0b, 'sizeGrid', function () {
                return this['_button']['sizeGrid'];
            }, function (_0x31f37d) {
                this['_button']['sizeGrid'] = _0x31f37d;
            }), _0x25c3de(0x0, _0x34ee0b, 'button', function () {
                return this['_button'];
            }), _0x25c3de(0x0, _0x34ee0b, 'list', function () {
                return this['_list'] || this['_createLis' + 't'](), this['_list'];
            }, function (_0x23dc3a) {
                _0x23dc3a && (_0x23dc3a['removeSelf'](), this['_isCustomL' + 'ist'] = !![], this['_list'] = _0x23dc3a, this['_setListEv' + 'ent'](_0x23dc3a), this['_itemHeigh' + 't'] = _0x23dc3a['getCell'](0x0)['height'] + _0x23dc3a['spaceY']);
            }), _0x25c3de(0x0, _0x34ee0b, 'dataSource', _0x8e0926['prototype']['_$get_data' + 'Source'], function (_0x38d45a) {
                this['_dataSourc' + 'e'] = _0x38d45a;
                if (typeof _0x38d45a == 'number' && Math['floor'](_0x38d45a) == _0x38d45a || typeof _0x38d45a == 'string')
                    this['selectedIn' + 'dex'] = parseInt(_0x38d45a);
                else {
                    if (_0x38d45a instanceof Array)
                        this['labels'] = _0x38d45a['join'](',');
                    else
                        _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x38d45a);
                }
            }), _0x25c3de(0x0, _0x34ee0b, 'labelColor' + 's', function () {
                return this['_button']['labelColor' + 's'];
            }, function (_0x399dde) {
                this['_button']['labelColor' + 's'] != _0x399dde && (this['_button']['labelColor' + 's'] = _0x399dde);
            }), _0x25c3de(0x0, _0x34ee0b, 'labelPaddi' + 'ng', function () {
                return this['_button']['text']['padding']['join'](',');
            }, function (_0x2f6b7d) {
                this['_button']['text']['padding'] = _0x17d5a0['fillArray'](_0xb0c2d5['labelPaddi' + 'ng'], _0x2f6b7d, Number);
            }), _0x25c3de(0x0, _0x34ee0b, 'labelSize', function () {
                return this['_button']['text']['fontSize'];
            }, function (_0x5a8bb2) {
                this['_button']['text']['fontSize'] = _0x5a8bb2;
            }), _0x25c3de(0x0, _0x34ee0b, 'labelFont', function () {
                return this['_button']['text']['font'];
            }, function (_0x36b47d) {
                this['_button']['text']['font'] = _0x36b47d;
            }), _0x25c3de(0x0, _0x34ee0b, 'stateNum', function () {
                return this['_button']['stateNum'];
            }, function (_0x2ba7d5) {
                this['_button']['stateNum'] = _0x2ba7d5;
            }), _0x46ac9a;
        }(_0x5c4857), _0x3e0762 = function (_0x486b23) {
            function _0x2d2871() {
                this['_$4__textu' + 're'] = null, _0x2d2871['__super']['call'](this), this['_width'] = this['_height'] = 0xc8;
                var _0x34dbe9 = new _0x3fdd90();
                if (_0x90a138['Texture2D'])
                    _0x34dbe9['bitmap'] = new _0x90a138['Texture2D'](), this['texture'] = _0x34dbe9;
                else
                    throw new Error('WXOpenData' + 'Viewer:web' + 'gl\x20not\x20fou' + 'nd!');
            }
            _0x25419d(_0x2d2871, 'laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x486b23);
            var _0x15b912 = _0x2d2871['prototype'];
            return _0x15b912['onEnable'] = function () {
                this['postMsg']({
                    'type': 'display',
                    'rate': _0x90a138['stage']['frameRate']
                });
                if (_0x5630a1['wx'] && _0x5630a1['sharedCanv' + 'as'])
                    _0x90a138['timer']['frameLoop'](0x1, this, this['_onLoop']);
            }, _0x15b912['onDisable'] = function () {
                this['postMsg']({ 'type': 'undisplay' }), _0x90a138['timer']['clear'](this, this['_onLoop']);
            }, _0x15b912['_onLoop'] = function () {
                this['texture']['bitmap']['loadImageS' + 'ource'](_0x5630a1['sharedCanv' + 'as']);
            }, _0x15b912['_postMsg'] = function () {
                var _0x49edd9 = new _0x46403e();
                _0x49edd9['translate'](this['x'], this['y']);
                var _0x327b30 = _0x90a138['stage'];
                _0x49edd9['scale'](_0x327b30['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x327b30['transform']['getScaleX'](), _0x327b30['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x327b30['transform']['getScaleY']()), this['postMsg']({
                    'type': 'changeMatr' + 'ix',
                    'a': _0x49edd9['a'],
                    'b': _0x49edd9['b'],
                    'c': _0x49edd9['c'],
                    'd': _0x49edd9['d'],
                    'tx': _0x49edd9['tx'],
                    'ty': _0x49edd9['ty'],
                    'w': this['width'],
                    'h': this['height']
                });
            }, _0x15b912['postMsg'] = function (_0x5ef2a0) {
                if (_0x5630a1['wx'] && _0x5630a1['wx']['getOpenDat' + 'aContext']) {
                    var _0x516f2f = _0x5630a1['wx']['getOpenDat' + 'aContext']();
                    _0x516f2f['postMessag' + 'e'](_0x5ef2a0);
                }
            }, _0x25c3de(0x0, _0x15b912, 'x', _0x486b23['prototype']['_$get_x'], function (_0x54a9df) {
                _0x90a138['superSet'](_0x5c4857, this, 'x', _0x54a9df), this['callLater'](this['_postMsg']);
            }), _0x25c3de(0x0, _0x15b912, 'width', _0x486b23['prototype']['_$get_widt' + 'h'], function (_0xc8b29b) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0xc8b29b);
                if (_0x5630a1['sharedCanv' + 'as'])
                    _0x5630a1['sharedCanv' + 'as']['width'] = _0xc8b29b;
                this['callLater'](this['_postMsg']);
            }), _0x25c3de(0x0, _0x15b912, 'height', _0x486b23['prototype']['_$get_heig' + 'ht'], function (_0x394814) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0x394814);
                if (_0x5630a1['sharedCanv' + 'as'])
                    _0x5630a1['sharedCanv' + 'as']['height'] = _0x394814;
                this['callLater'](this['_postMsg']);
            }), _0x25c3de(0x0, _0x15b912, 'y', _0x486b23['prototype']['_$get_y'], function (_0x280761) {
                _0x90a138['superSet'](_0x5c4857, this, 'y', _0x280761), this['callLater'](this['_postMsg']);
            }), _0x2d2871;
        }(_0x5c4857), _0x5a1d54 = function (_0x445919) {
            function _0x35dd71(_0x11262d, _0x3fadd7, _0x140844) {
                this['_sources'] = null, this['_bitmap'] = null, this['_skin'] = null, this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_autoPlay'] = ![], this['_interval'] = 0x32, this['_complete'] = null, this['_isPlaying'] = ![], this['_index'] = 0x0, this['_clipChang' + 'ed'] = ![], this['_group'] = null, this['_toIndex'] = -0x1, _0x35dd71['__super']['call'](this), _0x3fadd7 === void 0x0 && (_0x3fadd7 = 0x1), _0x140844 === void 0x0 && (_0x140844 = 0x1), this['_clipX'] = _0x3fadd7, this['_clipY'] = _0x140844, this['skin'] = _0x11262d;
            }
            _0x25419d(_0x35dd71, 'laya.ui.Cl' + 'ip', _0x445919);
            var _0x446395 = _0x35dd71['prototype'];
            return _0x446395['destroy'] = function (_0x581872) {
                _0x581872 === void 0x0 && (_0x581872 = !![]), _0x445919['prototype']['destroy']['call'](this, !![]), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
            }, _0x446395['dispose'] = function () {
                this['destroy'](!![]), _0x90a138['loader']['clearRes'](this['_skin']);
            }, _0x446395['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x243845();
            }, _0x446395['_onDisplay'] = function (_0x5ba0ff) {
                if (this['_isPlaying']) {
                    if (this['_getBit'](0x80))
                        this['play']();
                    else
                        this['stop']();
                } else
                    this['_autoPlay'] && this['play']();
            }, _0x446395['_skinLoade' + 'd'] = function () {
                this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x446395['changeClip'] = function () {
                this['_clipChang' + 'ed'] = ![];
                if (!this['_skin'])
                    return;
                var _0x308003 = _0x3b96d5['getRes'](this['_skin']);
                _0x308003 ? this['loadComple' + 'te'](this['_skin'], _0x308003) : _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['loadComple' + 'te'], [this['_skin']]));
            }, _0x446395['loadComple' + 'te'] = function (_0x56b99b, _0x56f1b9) {
                if (_0x56b99b === this['_skin'] && _0x56f1b9) {
                    var _0x2a0d00 = this['_clipWidth'] || Math['ceil'](_0x56f1b9['sourceWidt' + 'h'] / this['_clipX']), _0x1603b8 = this['_clipHeigh' + 't'] || Math['ceil'](_0x56f1b9['sourceHeig' + 'ht'] / this['_clipY']), _0x1fb803 = this['_skin'] + _0x2a0d00 + _0x1603b8, _0x4627ae = _0x485a96['I']['get'](_0x1fb803);
                    !_0x2a011f['isOkTextur' + 'eList'](_0x4627ae) && (_0x4627ae = null);
                    if (_0x4627ae)
                        this['_sources'] = _0x4627ae;
                    else {
                        this['_sources'] = [];
                        for (var _0x1a3b08 = 0x0; _0x1a3b08 < this['_clipY']; _0x1a3b08++) {
                            for (var _0x27fbf = 0x0; _0x27fbf < this['_clipX']; _0x27fbf++) {
                                this['_sources']['push'](_0x3fdd90['createFrom' + 'Texture'](_0x56f1b9, _0x2a0d00 * _0x27fbf, _0x1603b8 * _0x1a3b08, _0x2a0d00, _0x1603b8));
                            }
                        }
                        _0x485a96['I']['set'](_0x1fb803, this['_sources']);
                    }
                    this['index'] = this['_index'], this['event']('loaded'), this['onCompResi' + 'ze']();
                }
            }, _0x446395['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
            }, _0x446395['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
            }, _0x446395['play'] = function (_0x4acdcc, _0x4cb1c6) {
                _0x4acdcc === void 0x0 && (_0x4acdcc = 0x0), _0x4cb1c6 === void 0x0 && (_0x4cb1c6 = -0x1), this['_isPlaying'] = !![], this['index'] = _0x4acdcc, this['_toIndex'] = _0x4cb1c6, this['_index']++, _0x90a138['timer']['loop'](this['interval'], this, this['_loop']), this['on']('display', this, this['_onDisplay']), this['on']('undisplay', this, this['_onDisplay']);
            }, _0x446395['_loop'] = function () {
                if (this['_visible'] && this['_sources']) {
                    this['_index']++;
                    if (this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'])
                        this['stop']();
                    else {
                        if (this['_index'] >= this['_sources']['length'])
                            this['_index'] = 0x0;
                    }
                    this['index'] = this['_index'];
                }
            }, _0x446395['stop'] = function () {
                this['_isPlaying'] = ![], _0x90a138['timer']['clear'](this, this['_loop']), this['event']('complete');
            }, _0x446395['_setClipCh' + 'anged'] = function () {
                !this['_clipChang' + 'ed'] && (this['_clipChang' + 'ed'] = !![], this['callLater'](this['changeClip']));
            }, _0x25c3de(0x0, _0x446395, 'interval', function () {
                return this['_interval'];
            }, function (_0x5a1eac) {
                if (this['_interval'] != _0x5a1eac) {
                    this['_interval'] = _0x5a1eac;
                    if (this['_isPlaying'])
                        this['play']();
                }
            }), _0x25c3de(0x0, _0x446395, 'skin', function () {
                return this['_skin'];
            }, function (_0x482938) {
                this['_skin'] != _0x482938 && (this['_skin'] = _0x482938, _0x482938 ? !_0x3b96d5['getRes'](_0x482938) ? _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']() : this['_bitmap']['source'] = null);
            }), _0x25c3de(0x0, _0x446395, 'sources', function () {
                return this['_sources'];
            }, function (_0xbfaab9) {
                this['_sources'] = _0xbfaab9, this['index'] = this['_index'], this['event']('loaded');
            }), _0x25c3de(0x0, _0x446395, 'clipX', function () {
                return this['_clipX'];
            }, function (_0x27a9ee) {
                this['_clipX'] = _0x27a9ee || 0x1, this['_setClipCh' + 'anged']();
            }), _0x25c3de(0x0, _0x446395, 'clipY', function () {
                return this['_clipY'];
            }, function (_0xcd3da7) {
                this['_clipY'] = _0xcd3da7 || 0x1, this['_setClipCh' + 'anged']();
            }), _0x25c3de(0x0, _0x446395, 'total', function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
            }), _0x25c3de(0x0, _0x446395, 'clipWidth', function () {
                return this['_clipWidth'];
            }, function (_0x5444d5) {
                this['_clipWidth'] = _0x5444d5, this['_setClipCh' + 'anged']();
            }), _0x25c3de(0x0, _0x446395, 'sizeGrid', function () {
                if (this['_bitmap']['sizeGrid'])
                    return this['_bitmap']['sizeGrid']['join'](',');
                return null;
            }, function (_0x5acbe9) {
                this['_bitmap']['sizeGrid'] = _0x17d5a0['fillArray'](_0xb0c2d5['defaultSiz' + 'eGrid'], _0x5acbe9, Number);
            }), _0x25c3de(0x0, _0x446395, 'group', function () {
                return this['_group'];
            }, function (_0x1409da) {
                if (_0x1409da && this['_skin'])
                    _0x3b96d5['setGroup'](this['_skin'], _0x1409da);
                this['_group'] = _0x1409da;
            }), _0x25c3de(0x0, _0x446395, 'clipHeight', function () {
                return this['_clipHeigh' + 't'];
            }, function (_0x3c5da8) {
                this['_clipHeigh' + 't'] = _0x3c5da8, this['_setClipCh' + 'anged']();
            }), _0x25c3de(0x0, _0x446395, 'width', _0x445919['prototype']['_$get_widt' + 'h'], function (_0x42d18c) {
                _0x90a138['superSet'](_0x5c4857, this, 'width', _0x42d18c), this['_bitmap']['width'] = _0x42d18c;
            }), _0x25c3de(0x0, _0x446395, 'height', _0x445919['prototype']['_$get_heig' + 'ht'], function (_0xedfb6) {
                _0x90a138['superSet'](_0x5c4857, this, 'height', _0xedfb6), this['_bitmap']['height'] = _0xedfb6;
            }), _0x25c3de(0x0, _0x446395, 'index', function () {
                return this['_index'];
            }, function (_0x23cf86) {
                this['_index'] = _0x23cf86, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x23cf86]), this['event']('change');
            }), _0x25c3de(0x0, _0x446395, 'autoPlay', function () {
                return this['_autoPlay'];
            }, function (_0x35c939) {
                this['_autoPlay'] != _0x35c939 && (this['_autoPlay'] = _0x35c939, _0x35c939 ? this['play']() : this['stop']());
            }), _0x25c3de(0x0, _0x446395, 'isPlaying', function () {
                return this['_isPlaying'];
            }, function (_0x2c58e7) {
                this['_isPlaying'] = _0x2c58e7;
            }), _0x25c3de(0x0, _0x446395, 'dataSource', _0x445919['prototype']['_$get_data' + 'Source'], function (_0x52c063) {
                this['_dataSourc' + 'e'] = _0x52c063;
                if (typeof _0x52c063 == 'number' && Math['floor'](_0x52c063) == _0x52c063 || typeof _0x52c063 == 'string')
                    this['index'] = parseInt(_0x52c063);
                else
                    _0x90a138['superSet'](_0x5c4857, this, 'dataSource', _0x52c063);
            }), _0x25c3de(0x0, _0x446395, 'bitmap', function () {
                return this['_bitmap'];
            }), _0x35dd71;
        }(_0x5c4857), _0x1a42b8 = function (_0x31dd9f) {
            function _0x4d95cc() {
                this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['group'] = null, this['isModal'] = ![], this['isShowEffe' + 'ct'] = !![], this['isPopupCen' + 'ter'] = !![], this['closeType'] = null, this['_dragArea'] = null, this['_param'] = null, this['_effectTwe' + 'en'] = null, _0x4d95cc['__super']['call'](this), this['popupEffec' + 't'] = _0x4d95cc['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x4d95cc['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on']('click', this, this['_onClick']);
            }
            _0x25419d(_0x4d95cc, 'laya.ui.Di' + 'alog', _0x31dd9f);
            var _0x2180a5 = _0x4d95cc['prototype'];
            return _0x2180a5['_dealDragA' + 'rea'] = function () {
                var _0x1753d3 = this['getChildBy' + 'Name']('drag');
                _0x1753d3 && (this['dragArea'] = _0x1753d3['_x'] + ',' + _0x1753d3['_y'] + ',' + _0x1753d3['width'] + ',' + _0x1753d3['height'], _0x1753d3['removeSelf']());
            }, _0x2180a5['_onMouseDo' + 'wn'] = function (_0x4f8a00) {
                var _0x97baa4 = this['getMousePo' + 'int']();
                if (this['_dragArea']['contains'](_0x97baa4['x'], _0x97baa4['y']))
                    this['startDrag']();
                else
                    this['stopDrag']();
            }, _0x2180a5['_onClick'] = function (_0x56a9dd) {
                var _0x5ce691 = _0x56a9dd['target'];
                if (_0x5ce691)
                    switch (_0x5ce691['name']) {
                    case 'close':
                    case 'cancel':
                    case 'sure':
                    case 'no':
                    case 'ok':
                    case 'yes':
                        this['close'](_0x5ce691['name']);
                        return;
                    }
            }, _0x2180a5['open'] = function (_0x1032c1, _0x38a681) {
                _0x1032c1 === void 0x0 && (_0x1032c1 = !![]), this['_dealDragA' + 'rea'](), this['_param'] = _0x38a681, _0x4d95cc['manager']['open'](this, _0x1032c1, this['isShowEffe' + 'ct']), _0x4d95cc['manager']['lock'](![]);
            }, _0x2180a5['close'] = function (_0x22c606) {
                this['closeType'] = _0x22c606, _0x4d95cc['manager']['close'](this);
            }, _0x2180a5['destroy'] = function (_0x39f62f) {
                _0x39f62f === void 0x0 && (_0x39f62f = !![]), this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, _0x31dd9f['prototype']['destroy']['call'](this, _0x39f62f);
            }, _0x2180a5['show'] = function (_0x50c154, _0x550839) {
                _0x50c154 === void 0x0 && (_0x50c154 = ![]), _0x550839 === void 0x0 && (_0x550839 = !![]), this['_open'](![], _0x50c154, _0x550839);
            }, _0x2180a5['popup'] = function (_0x40beba, _0x5da14f) {
                _0x40beba === void 0x0 && (_0x40beba = ![]), _0x5da14f === void 0x0 && (_0x5da14f = !![]), this['_open'](!![], _0x40beba, _0x5da14f);
            }, _0x2180a5['_open'] = function (_0x588267, _0xcb72ee, _0x496252) {
                this['isModal'] = _0x588267, this['isShowEffe' + 'ct'] = _0x496252, _0x4d95cc['manager']['lock'](!![]), this['open'](_0xcb72ee);
            }, _0x25c3de(0x0, _0x2180a5, 'dragArea', function () {
                if (this['_dragArea'])
                    return this['_dragArea']['toString']();
                return null;
            }, function (_0x437672) {
                if (_0x437672) {
                    var _0x8cfd5 = _0x17d5a0['fillArray']([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ], _0x437672, Number);
                    this['_dragArea'] = new _0x472506(_0x8cfd5[0x0], _0x8cfd5[0x1], _0x8cfd5[0x2], _0x8cfd5[0x3]), this['on']('mousedown', this, this['_onMouseDo' + 'wn']);
                } else
                    this['_dragArea'] = null, this['off']('mousedown', this, this['_onMouseDo' + 'wn']);
            }), _0x25c3de(0x0, _0x2180a5, 'isPopup', function () {
                return this['parent'] != null;
            }), _0x25c3de(0x0, _0x2180a5, 'zOrder', _0x31dd9f['prototype']['_$get_zOrd' + 'er'], function (_0x12bdc6) {
                _0x90a138['superSet'](_0x5c6a75, this, 'zOrder', _0x12bdc6), _0x4d95cc['manager']['_checkMask']();
            }), _0x25c3de(0x1, _0x4d95cc, 'manager', function () {
                return _0x4d95cc['_manager'] = _0x4d95cc['_manager'] || new _0x4968c2();
            }, function (_0x481565) {
                _0x4d95cc['_manager'] = _0x481565;
            }), _0x4d95cc['setLockVie' + 'w'] = function (_0x261522) {
                _0x4d95cc['manager']['setLockVie' + 'w'](_0x261522);
            }, _0x4d95cc['lock'] = function (_0x11deac) {
                _0x4d95cc['manager']['lock'](_0x11deac);
            }, _0x4d95cc['closeAll'] = function () {
                _0x4d95cc['manager']['closeAll']();
            }, _0x4d95cc['getDialogs' + 'ByGroup'] = function (_0x210691) {
                return _0x4d95cc['manager']['getDialogs' + 'ByGroup'](_0x210691);
            }, _0x4d95cc['closeByGro' + 'up'] = function (_0x345c0f) {
                return _0x4d95cc['manager']['closeByGro' + 'up'](_0x345c0f);
            }, _0x4d95cc['CLOSE'] = 'close', _0x4d95cc['CANCEL'] = 'cancel', _0x4d95cc['SURE'] = 'sure', _0x4d95cc['NO'] = 'no', _0x4d95cc['YES'] = 'yes', _0x4d95cc['OK'] = 'ok', _0x4d95cc['_manager'] = null, _0x4d95cc;
        }(_0x5c6a75), _0x578472 = function (_0x2900e9) {
            function _0x46a6be() {
                _0x46a6be['__super']['call'](this);
                ;
            }
            return _0x25419d(_0x46a6be, 'laya.ui.VS' + 'crollBar', _0x2900e9), _0x46a6be;
        }(_0xa212e3), _0x30bc63 = function (_0x2582d4) {
            function _0xd8881d() {
                _0xd8881d['__super']['call'](this);
                ;
            }
            _0x25419d(_0xd8881d, 'laya.ui.HS' + 'crollBar', _0x2582d4);
            var _0x1baaa8 = _0xd8881d['prototype'];
            return _0x1baaa8['initialize'] = function () {
                _0x2582d4['prototype']['initialize']['call'](this), this['slider']['isVertical'] = ![];
            }, _0xd8881d;
        }(_0xa212e3), _0x519f21 = function (_0x24bd75) {
            function _0x50b163(_0x27bf3a, _0x2c8c9b) {
                this['selectHand' + 'ler'] = null, this['_items'] = null, this['_selectedI' + 'ndex'] = -0x1, this['_skin'] = null, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['_labels'] = null, this['_labelColo' + 'rs'] = null, this['_labelFont'] = null, this['_labelStro' + 'keColor'] = null, this['_strokeCol' + 'ors'] = null, this['_labelStro' + 'ke'] = NaN, this['_labelSize'] = 0x0, this['_labelBold'] = ![], this['_labelPadd' + 'ing'] = null, this['_labelAlig' + 'n'] = null, this['_stateNum'] = 0x0, this['_labelChan' + 'ged'] = ![], _0x50b163['__super']['call'](this), this['skin'] = _0x2c8c9b, this['labels'] = _0x27bf3a;
            }
            _0x25419d(_0x50b163, 'laya.ui.UI' + 'Group', _0x24bd75);
            var _0xaaa5de = _0x50b163['prototype'];
            return _0x90a138['imps'](_0xaaa5de, { 'laya.ui.IItem': !![] }), _0xaaa5de['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !![];
            }, _0xaaa5de['destroy'] = function (_0x4acbd8) {
                _0x4acbd8 === void 0x0 && (_0x4acbd8 = !![]), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x4acbd8), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
            }, _0xaaa5de['addItem'] = function (_0xd16a41, _0x3034fb) {
                _0x3034fb === void 0x0 && (_0x3034fb = !![]);
                var _0x1dc079 = _0xd16a41, _0x33f3fa = this['_items']['length'];
                _0x1dc079['name'] = 'item' + _0x33f3fa, this['addChild'](_0x1dc079), this['initItems']();
                if (_0x3034fb && _0x33f3fa > 0x0) {
                    var _0x41d7b4 = this['_items'][_0x33f3fa - 0x1];
                    this['_direction'] == 'horizontal' ? _0x1dc079['x'] = _0x41d7b4['_x'] + _0x41d7b4['width'] + this['_space'] : _0x1dc079['y'] = _0x41d7b4['_y'] + _0x41d7b4['height'] + this['_space'];
                } else
                    _0x3034fb && (_0x1dc079['x'] = 0x0, _0x1dc079['y'] = 0x0);
                return _0x33f3fa;
            }, _0xaaa5de['delItem'] = function (_0x97c1c1, _0x1568ad) {
                _0x1568ad === void 0x0 && (_0x1568ad = !![]);
                var _0x5d6748 = this['_items']['indexOf'](_0x97c1c1);
                if (_0x5d6748 != -0x1) {
                    var _0x323206 = _0x97c1c1;
                    this['removeChil' + 'd'](_0x323206);
                    for (var _0x34cb82 = _0x5d6748 + 0x1, _0x2cd584 = this['_items']['length']; _0x34cb82 < _0x2cd584; _0x34cb82++) {
                        var _0xf3b0fb = this['_items'][_0x34cb82];
                        _0xf3b0fb['name'] = 'item' + (_0x34cb82 - 0x1), _0x1568ad && (this['_direction'] == 'horizontal' ? _0xf3b0fb['x'] -= _0x323206['width'] + this['_space'] : _0xf3b0fb['y'] -= _0x323206['height'] + this['_space']);
                    }
                    this['initItems']();
                    if (this['_selectedI' + 'ndex'] > -0x1) {
                        var _0x537d00 = 0x0;
                        _0x537d00 = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x537d00;
                    }
                }
            }, _0xaaa5de['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0xaaa5de['initItems'] = function () {
                this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
                for (var _0x26c364 = 0x0; _0x26c364 < 0x2710; _0x26c364++) {
                    var _0x46b6eb = this['getChildBy' + 'Name']('item' + _0x26c364);
                    if (_0x46b6eb == null)
                        break;
                    this['_items']['push'](_0x46b6eb), _0x46b6eb['selected'] = _0x26c364 === this['_selectedI' + 'ndex'], _0x46b6eb['clickHandl' + 'er'] = _0x44d7a5['create'](this, this['itemClick'], [_0x26c364], ![]);
                }
            }, _0xaaa5de['itemClick'] = function (_0x5a32df) {
                this['selectedIn' + 'dex'] = _0x5a32df;
            }, _0xaaa5de['setSelect'] = function (_0x36c349, _0x22e23c) {
                if (this['_items'] && _0x36c349 > -0x1 && _0x36c349 < this['_items']['length'])
                    this['_items'][_0x36c349]['selected'] = _0x22e23c;
            }, _0xaaa5de['_skinLoade' + 'd'] = function () {
                this['_setLabelC' + 'hanged'](), this['event']('loaded');
            }, _0xaaa5de['createItem'] = function (_0x4c98b6, _0x36a7d4) {
                return null;
            }, _0xaaa5de['changeLabe' + 'ls'] = function () {
                this['_labelChan' + 'ged'] = ![];
                if (this['_items']) {
                    var _0xa663d6 = 0x0;
                    for (var _0x4adc8f = 0x0, _0x49c3d2 = this['_items']['length']; _0x4adc8f < _0x49c3d2; _0x4adc8f++) {
                        var _0x57ba41 = this['_items'][_0x4adc8f];
                        this['_skin'] && (_0x57ba41['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x57ba41['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x57ba41['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x57ba41['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x57ba41['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x57ba41['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x57ba41['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x57ba41['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x57ba41['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x57ba41['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x57ba41['labelFont'] = this['_labelFont']), this['_direction'] === 'horizontal' ? (_0x57ba41['y'] = 0x0, _0x57ba41['x'] = _0xa663d6, _0xa663d6 += _0x57ba41['width'] + this['_space']) : (_0x57ba41['x'] = 0x0, _0x57ba41['y'] = _0xa663d6, _0xa663d6 += _0x57ba41['height'] + this['_space']);
                    }
                }
                this['_sizeChang' + 'ed']();
            }, _0xaaa5de['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
            }, _0xaaa5de['_setLabelC' + 'hanged'] = function () {
                !this['_labelChan' + 'ged'] && (this['_labelChan' + 'ged'] = !![], this['callLater'](this['changeLabe' + 'ls']));
            }, _0x25c3de(0x0, _0xaaa5de, 'labelStrok' + 'eColor', function () {
                return this['_labelStro' + 'keColor'];
            }, function (_0x52e882) {
                this['_labelStro' + 'keColor'] != _0x52e882 && (this['_labelStro' + 'keColor'] = _0x52e882, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'skin', function () {
                return this['_skin'];
            }, function (_0x3ddbd0) {
                this['_skin'] != _0x3ddbd0 && (this['_skin'] = _0x3ddbd0, this['_skin'] && !_0x3b96d5['getRes'](this['_skin']) ? _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0xaaa5de, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x514847) {
                this['_selectedI' + 'ndex'] != _0x514847 && (this['setSelect'](this['_selectedI' + 'ndex'], ![]), this['_selectedI' + 'ndex'] = _0x514847, this['setSelect'](_0x514847, !![]), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x25c3de(0x0, _0xaaa5de, 'labels', function () {
                return this['_labels'];
            }, function (_0x3fe00f) {
                if (this['_labels'] != _0x3fe00f) {
                    this['_labels'] = _0x3fe00f, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged']();
                    if (this['_labels']) {
                        var _0x23a108 = this['_labels']['split'](',');
                        for (var _0x736c1d = 0x0, _0x4fa058 = _0x23a108['length']; _0x736c1d < _0x4fa058; _0x736c1d++) {
                            var _0x119223 = this['createItem'](this['_skin'], _0x23a108[_0x736c1d]);
                            _0x119223['name'] = 'item' + _0x736c1d, this['addChild'](_0x119223);
                        }
                    }
                    this['initItems']();
                }
            }), _0x25c3de(0x0, _0xaaa5de, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'];
            }, function (_0x88236f) {
                this['_strokeCol' + 'ors'] != _0x88236f && (this['_strokeCol' + 'ors'] = _0x88236f, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs'];
            }, function (_0x5235e2) {
                this['_labelColo' + 'rs'] != _0x5235e2 && (this['_labelColo' + 'rs'] = _0x5235e2, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelStrok' + 'e', function () {
                return this['_labelStro' + 'ke'];
            }, function (_0x27c391) {
                this['_labelStro' + 'ke'] != _0x27c391 && (this['_labelStro' + 'ke'] = _0x27c391, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelSize', function () {
                return this['_labelSize'];
            }, function (_0x3ffd8b) {
                this['_labelSize'] != _0x3ffd8b && (this['_labelSize'] = _0x3ffd8b, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x118e4d) {
                this['_stateNum'] != _0x118e4d && (this['_stateNum'] = _0x118e4d, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelBold', function () {
                return this['_labelBold'];
            }, function (_0x2b180e) {
                this['_labelBold'] != _0x2b180e && (this['_labelBold'] = _0x2b180e, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelFont', function () {
                return this['_labelFont'];
            }, function (_0x59b5fe) {
                this['_labelFont'] != _0x59b5fe && (this['_labelFont'] = _0x59b5fe, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'labelPaddi' + 'ng', function () {
                return this['_labelPadd' + 'ing'];
            }, function (_0xdb4d0b) {
                this['_labelPadd' + 'ing'] != _0xdb4d0b && (this['_labelPadd' + 'ing'] = _0xdb4d0b, this['_setLabelC' + 'hanged']());
            }), _0x25c3de(0x0, _0xaaa5de, 'direction', function () {
                return this['_direction'];
            }, function (_0x3f3fff) {
                this['_direction'] = _0x3f3fff, this['_setLabelC' + 'hanged']();
            }), _0x25c3de(0x0, _0xaaa5de, 'space', function () {
                return this['_space'];
            }, function (_0x5b9d16) {
                this['_space'] = _0x5b9d16, this['_setLabelC' + 'hanged']();
            }), _0x25c3de(0x0, _0xaaa5de, 'items', function () {
                return this['_items'];
            }), _0x25c3de(0x0, _0xaaa5de, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x4b6fd0) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x4b6fd0);
            }), _0x25c3de(0x0, _0xaaa5de, 'dataSource', _0x24bd75['prototype']['_$get_data' + 'Source'], function (_0x3da725) {
                this['_dataSourc' + 'e'] = _0x3da725;
                if (typeof _0x3da725 == 'number' && Math['floor'](_0x3da725) == _0x3da725 || typeof _0x3da725 == 'string')
                    this['selectedIn' + 'dex'] = parseInt(_0x3da725);
                else {
                    if (_0x3da725 instanceof Array)
                        this['labels'] = _0x3da725['join'](',');
                    else
                        _0x90a138['superSet'](_0x1354a5, this, 'dataSource', _0x3da725);
                }
            }), _0x50b163;
        }(_0x1354a5), _0x5c4c83 = function (_0x5ccaef) {
            function _0x3617d7(_0x17ebe9) {
                this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_appid'] = null, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, _0x3617d7['__super']['call'](this), this['_http'] = new _0x40aaea['window']['XMLHttpReq' + 'uest'](), this['skin'] = _0x17ebe9, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
            }
            _0x25419d(_0x3617d7, 'laya.ui.Ad' + 'vImage', _0x5ccaef);
            var _0x976d60 = _0x3617d7['prototype'];
            return _0x976d60['setLoadUrl'] = function () {
                _0x40aaea['onLimixiu'] && (this['resUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/wyw/gconf' + 'ig.json');
            }, _0x976d60['init'] = function () {
                if (this['isSupportJ' + 'ump']())
                    (_0x40aaea['onMiniGame'] || _0x40aaea['onBDMiniGa' + 'me']) && _0x90a138['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']();
                else
                    this['visible'] = ![];
            }, _0x976d60['initEvent'] = function () {
                this['on']('click', this, this['onAdvsImgC' + 'lick']);
            }, _0x976d60['onAdvsImgC' + 'lick'] = function () {
                var _0x3c195e = this['getCurrent' + 'AppidObj']();
                if (_0x3c195e)
                    this['jumptoGame']();
            }, _0x976d60['revertAdvs' + 'Data'] = function () {
                if (this['advsListAr' + 'r'][this['_playIndex']]) {
                    this['visible'] = !![];
                    if (_0x40aaea['onLimixiu']) {
                        var _0x59ac0a = 'https://ab' + 'c.layabox.' + 'com/public' + '/icon/';
                        this['visible'] = !![];
                        var _0x57fd1d = this['advsListAr' + 'r'][this['_playIndex']];
                        _0x57fd1d && (_0x40aaea['onLimixiu'] && GameStatusInfo['gameId'] == _0x57fd1d['gameid'] ? this['onLunbo']() : (this['skin'] = _0x59ac0a + _0x57fd1d['iconUrl'], this['size'](0x67, 0x7e)));
                    } else
                        this['skin'] = this['advsListAr' + 'r'][this['_playIndex']];
                }
            }, _0x976d60['isSupportJ' + 'ump'] = function () {
                if (_0x40aaea['onMiniGame']) {
                    var _0x46ffc0 = typeof wx['navigateTo' + 'MiniProgra' + 'm'] == 'function';
                    return _0x46ffc0;
                } else {
                    if (_0x40aaea['onLimixiu']) {
                        if (BK['QQ']['skipGame'])
                            return !![];
                    } else {
                        if (_0x40aaea['onBDMiniGa' + 'me'])
                            return !![];
                    }
                }
                return ![];
            }, _0x976d60['jumptoGame'] = function () {
                var _0x3b479e = this, _0x3b69af = this['advsListAr' + 'r'][this['_playIndex']], _0xb0f64b = parseInt(_0x3b69af['gameid']), _0x526b5a = _0x3b69af['extendInfo'], _0x2d3b23 = _0x3b69af['path'];
                if (_0x40aaea['onLimixiu']) {
                    if (!_0x3b69af['isLunBo']) {
                        if (!_0x3b69af['isLunBo']) {
                            var _0x2a8dda = _0x5174a7['getJSON']('gameObj');
                            !_0x2a8dda && (_0x2a8dda = {}), !_0x2a8dda[_0x3b69af['gameid']] && (_0x2a8dda[_0x3b69af['gameid']] = {}), _0x2a8dda[_0x3b69af['gameid']] = { 'isclick': !![] }, _0x5174a7['setJSON']('gameObj', _0x2a8dda), this['advsListAr' + 'r']['splice'](this['_playIndex'], 0x1);
                        }
                    }
                    BK['QQ']['skipGame'](_0xb0f64b, _0x526b5a), this['updateAdvs' + 'Info']();
                } else {
                    if (_0x40aaea['onMiniGame'])
                        this['isSupportJ' + 'ump']() && wx['navigateTo' + 'MiniProgra' + 'm']({
                            'appId': _0x3b69af['gameid'],
                            'path': _0x2d3b23,
                            'extraData': _0x526b5a,
                            'envVersion': 'release',
                            'success': function _0x13d5f0() {
                                console['log']('----------' + '---跳转成功---' + '----------' + '-');
                            },
                            'fail': function _0x38c66d() {
                                console['log']('----------' + '---跳转失败---' + '----------' + '-');
                            },
                            'complete': function _0x158d9c() {
                                console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), _0x3b479e['updateAdvs' + 'Info']();
                            }['bind'](this)
                        });
                    else {
                        if (_0x40aaea['onBDMiniGa' + 'me']) {
                        } else
                            this['visible'] = ![];
                    }
                }
            }, _0x976d60['updateAdvs' + 'Info'] = function () {
                this['visible'] = ![], this['onLunbo'](), _0x90a138['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
            }, _0x976d60['onLunbo'] = function () {
                if (this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1)
                    this['_playIndex'] = 0x0;
                else
                    this['_playIndex'] += 0x1;
                this['visible'] = !![], this['revertAdvs' + 'Data']();
            }, _0x976d60['getCurrent' + 'AppidObj'] = function () {
                return this['advsListAr' + 'r'][this['_playIndex']];
            }, _0x976d60['onGetAdvsL' + 'istData'] = function () {
                var _0x1f5000 = this, _0x5bf328 = _0x3617d7['randRange'](0x2710, 0xf4240), _0x56d638 = this['resUrl'] + '?' + _0x5bf328;
                this['_http']['open']('get', _0x56d638, !![]), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x3d7197) {
                    _0x1f5000['_onError'](_0x3d7197);
                }, this['_http']['onload'] = function (_0x39adb4) {
                    _0x1f5000['_onLoad'](_0x39adb4);
                }, this['_http']['send'](null);
            }, _0x976d60['_onError'] = function (_0x26e617) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
            }, _0x976d60['_onLoad'] = function (_0x14212) {
                var _0x558eee = this['_http'], _0x356ca5 = _0x558eee['status'] !== undefined ? _0x558eee['status'] : 0xc8;
                _0x356ca5 === 0xc8 || _0x356ca5 === 0xcc || _0x356ca5 === 0x0 ? this['complete']() : this['error']('[' + _0x558eee['status'] + ']' + _0x558eee['statusText'] + ':' + _0x558eee['responseUR' + 'L']);
            }, _0x976d60['error'] = function (_0x522599) {
                this['event']('error', _0x522599);
            }, _0x976d60['complete'] = function () {
                var _0x30987b = !![];
                try {
                    this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), _0x40aaea['onLimixiu'] ? (this['advsListAr' + 'r'] = this['getAdvsQAr' + 'r'](this['_data']), this['advsListAr' + 'r']['length'] ? (this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']()) : this['visible'] = ![]) : (this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']());
                } catch (_0x4e1292) {
                    _0x30987b = ![], this['error'](_0x4e1292['message']);
                }
            }, _0x976d60['getAdvsQAr' + 'r'] = function (_0x4f8009) {
                var _0x543227 = [], _0x475b14 = _0x5174a7['getJSON']('gameObj');
                for (var _0x535226 in _0x4f8009) {
                    var _0x380d07 = _0x4f8009[_0x535226];
                    if (_0x475b14 && _0x475b14[_0x380d07['gameid']] && !_0x380d07['isQiangZhi'])
                        continue;
                    _0x543227['push'](_0x380d07);
                }
                return _0x543227;
            }, _0x976d60['clear'] = function () {
                var _0x1b98c0 = this['_http'];
                _0x1b98c0['onerror'] = _0x1b98c0['onabort'] = _0x1b98c0['onprogress'] = _0x1b98c0['onload'] = null;
            }, _0x976d60['destroy'] = function (_0x41d1da) {
                _0x41d1da === void 0x0 && (_0x41d1da = !![]), _0x90a138['timer']['clear'](this, this['onLunbo']), _0x5ccaef['prototype']['destroy']['call'](this, !![]), this['clear'](), _0x90a138['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
            }, _0x3617d7['randRange'] = function (_0x39f56e, _0x156599) {
                return Math['floor'](Math['random']() * (_0x156599 - _0x39f56e + 0x1)) + _0x39f56e;
            }, _0x3617d7;
        }(_0x258466), _0x51d7e0 = function (_0x2525ed) {
            function _0x3a061b() {
                this['_content'] = null, this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_scrollCha' + 'nged'] = ![], this['_usedCache'] = null, this['_elasticEn' + 'abled'] = ![], _0x3a061b['__super']['call'](this), this['width'] = this['height'] = 0x64;
            }
            _0x25419d(_0x3a061b, 'laya.ui.Pa' + 'nel', _0x2525ed);
            var _0x21f354 = _0x3a061b['prototype'];
            return _0x21f354['destroy'] = function (_0x56f337) {
                _0x56f337 === void 0x0 && (_0x56f337 = !![]), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x56f337), this['_content'] && this['_content']['destroy'](_0x56f337), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x56f337), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x56f337), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
            }, _0x21f354['destroyChi' + 'ldren'] = function () {
                this['_content']['destroyChi' + 'ldren']();
            }, _0x21f354['createChil' + 'dren'] = function () {
                laya['display']['Node']['prototype']['addChild']['call'](this, this['_content'] = new _0x1354a5());
            }, _0x21f354['addChild'] = function (_0x31b34e) {
                return _0x31b34e['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x31b34e);
            }, _0x21f354['onResize'] = function () {
                this['_setScroll' + 'Changed']();
            }, _0x21f354['addChildAt'] = function (_0x38228a, _0x5264e0) {
                return _0x38228a['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x38228a, _0x5264e0);
            }, _0x21f354['removeChil' + 'd'] = function (_0x5df64a) {
                return _0x5df64a['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x5df64a);
            }, _0x21f354['removeChil' + 'dAt'] = function (_0x520ce6) {
                return this['getChildAt'](_0x520ce6)['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x520ce6);
            }, _0x21f354['removeChil' + 'dren'] = function (_0x4f07ef, _0x5b4ac9) {
                return _0x4f07ef === void 0x0 && (_0x4f07ef = 0x0), _0x5b4ac9 === void 0x0 && (_0x5b4ac9 = 0x7fffffff), this['_content']['removeChil' + 'dren'](_0x4f07ef, _0x5b4ac9), this['_setScroll' + 'Changed'](), this;
            }, _0x21f354['getChildAt'] = function (_0x10fd29) {
                return this['_content']['getChildAt'](_0x10fd29);
            }, _0x21f354['getChildBy' + 'Name'] = function (_0x3636ac) {
                return this['_content']['getChildBy' + 'Name'](_0x3636ac);
            }, _0x21f354['getChildIn' + 'dex'] = function (_0x1c477e) {
                return this['_content']['getChildIn' + 'dex'](_0x1c477e);
            }, _0x21f354['changeScro' + 'll'] = function () {
                this['_scrollCha' + 'nged'] = ![];
                var _0xc4dffc = this['contentWid' + 'th'] || 0x1, _0x30faa7 = this['contentHei' + 'ght'] || 0x1, _0x34a3c3 = this['_vScrollBa' + 'r'], _0x37b0e7 = this['_hScrollBa' + 'r'], _0x2c42f7 = _0x34a3c3 && _0x30faa7 > this['_height'], _0x4b7e93 = _0x37b0e7 && _0xc4dffc > this['_width'], _0x4a297b = _0x2c42f7 ? this['_width'] - _0x34a3c3['width'] : this['_width'], _0x4306ae = _0x4b7e93 ? this['_height'] - _0x37b0e7['height'] : this['_height'];
                _0x34a3c3 && (_0x34a3c3['x'] = this['_width'] - _0x34a3c3['width'], _0x34a3c3['y'] = 0x0, _0x34a3c3['height'] = this['_height'] - (_0x4b7e93 ? _0x37b0e7['height'] : 0x0), _0x34a3c3['scrollSize'] = Math['max'](this['_height'] * 0.033, 0x1), _0x34a3c3['thumbPerce' + 'nt'] = _0x4306ae / _0x30faa7, _0x34a3c3['setScroll'](0x0, _0x30faa7 - _0x4306ae, _0x34a3c3['value'])), _0x37b0e7 && (_0x37b0e7['x'] = 0x0, _0x37b0e7['y'] = this['_height'] - _0x37b0e7['height'], _0x37b0e7['width'] = this['_width'] - (_0x2c42f7 ? _0x34a3c3['width'] : 0x0), _0x37b0e7['scrollSize'] = Math['max'](this['_width'] * 0.033, 0x1), _0x37b0e7['thumbPerce' + 'nt'] = _0x4a297b / _0xc4dffc, _0x37b0e7['setScroll'](0x0, _0xc4dffc - _0x4a297b, _0x37b0e7['value']));
            }, _0x21f354['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['_width'], this['_height']);
            }, _0x21f354['setContent' + 'Size'] = function (_0x4a29d5, _0x30dd50) {
                var _0x5dc9c9 = this['_content'];
                _0x5dc9c9['width'] = _0x4a29d5, _0x5dc9c9['height'] = _0x30dd50, _0x5dc9c9['_style']['scrollRect'] || (_0x5dc9c9['scrollRect'] = _0x472506['create']()), _0x5dc9c9['_style']['scrollRect']['setTo'](0x0, 0x0, _0x4a29d5, _0x30dd50), _0x5dc9c9['scrollRect'] = _0x5dc9c9['scrollRect'];
            }, _0x21f354['onScrollBa' + 'rChange'] = function (_0x497467) {
                var _0x101c23 = this['_content']['_style']['scrollRect'];
                if (_0x101c23) {
                    var _0x330cdc = Math['round'](_0x497467['value']);
                    _0x497467['isVertical'] ? _0x101c23['y'] = _0x330cdc : _0x101c23['x'] = _0x330cdc, this['_content']['scrollRect'] = _0x101c23;
                }
            }, _0x21f354['scrollTo'] = function (_0x3b5ff5, _0x3e31cc) {
                _0x3b5ff5 === void 0x0 && (_0x3b5ff5 = 0x0), _0x3e31cc === void 0x0 && (_0x3e31cc = 0x0);
                if (this['vScrollBar'])
                    this['vScrollBar']['value'] = _0x3e31cc;
                if (this['hScrollBar'])
                    this['hScrollBar']['value'] = _0x3b5ff5;
            }, _0x21f354['refresh'] = function () {
                this['changeScro' + 'll']();
            }, _0x21f354['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x90a138['superGet'](_0x1354a5, this, 'cacheAs')), _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', 'none'), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x21f354['onScrollEn' + 'd'] = function () {
                _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', this['_usedCache']);
            }, _0x21f354['_setScroll' + 'Changed'] = function () {
                !this['_scrollCha' + 'nged'] && (this['_scrollCha' + 'nged'] = !![], this['callLater'](this['changeScro' + 'll']));
            }, _0x25c3de(0x0, _0x21f354, 'numChildre' + 'n', function () {
                return this['_content']['numChildre' + 'n'];
            }), _0x25c3de(0x0, _0x21f354, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x2a3b83) {
                this['_hScrollBa' + 'r'] == null && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_hScrollBa' + 'r'] = new _0x30bc63()), this['_hScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x2a3b83;
            }), _0x25c3de(0x0, _0x21f354, 'contentWid' + 'th', function () {
                var _0x5d5061 = 0x0;
                for (var _0x4cb1e1 = this['_content']['numChildre' + 'n'] - 0x1; _0x4cb1e1 > -0x1; _0x4cb1e1--) {
                    var _0x126a5c = this['_content']['getChildAt'](_0x4cb1e1);
                    _0x5d5061 = Math['max'](_0x126a5c['_x'] + _0x126a5c['width'] * _0x126a5c['scaleX'] - _0x126a5c['pivotX'], _0x5d5061);
                }
                return _0x5d5061;
            }), _0x25c3de(0x0, _0x21f354, 'contentHei' + 'ght', function () {
                var _0x487244 = 0x0;
                for (var _0x557a13 = this['_content']['numChildre' + 'n'] - 0x1; _0x557a13 > -0x1; _0x557a13--) {
                    var _0x339c4a = this['_content']['getChildAt'](_0x557a13);
                    _0x487244 = Math['max'](_0x339c4a['_y'] + _0x339c4a['height'] * _0x339c4a['scaleY'] - _0x339c4a['pivotY'], _0x487244);
                }
                return _0x487244;
            }), _0x25c3de(0x0, _0x21f354, 'width', _0x2525ed['prototype']['_$get_widt' + 'h'], function (_0x46f861) {
                _0x90a138['superSet'](_0x1354a5, this, 'width', _0x46f861), this['_setScroll' + 'Changed']();
            }), _0x25c3de(0x0, _0x21f354, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x25c3de(0x0, _0x21f354, 'content', function () {
                return this['_content'];
            }), _0x25c3de(0x0, _0x21f354, 'height', _0x2525ed['prototype']['_$get_heig' + 'ht'], function (_0x89b2ca) {
                _0x90a138['superSet'](_0x1354a5, this, 'height', _0x89b2ca), this['_setScroll' + 'Changed']();
            }), _0x25c3de(0x0, _0x21f354, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x36e98d) {
                this['_vScrollBa' + 'r'] == null && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_vScrollBa' + 'r'] = new _0x578472()), this['_vScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x36e98d;
            }), _0x25c3de(0x0, _0x21f354, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x25c3de(0x0, _0x21f354, 'cacheAs', _0x2525ed['prototype']['_$get_cach' + 'eAs'], function (_0x4fc02e) {
                _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', _0x4fc02e), this['_usedCache'] = null, _0x4fc02e !== 'none' ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x25c3de(0x0, _0x21f354, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x3c05b9) {
                this['_elasticEn' + 'abled'] = _0x3c05b9, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x3c05b9 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x3c05b9 ? 0xc8 : 0x0);
            }), _0x3a061b;
        }(_0x1354a5), _0x20809d = function (_0x32fa1b) {
            function _0x2d4a91() {
                this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = ![], _0x2d4a91['__super']['call'](this);
            }
            _0x25419d(_0x2d4a91, 'laya.ui.La' + 'youtBox', _0x32fa1b);
            var _0x2b1a55 = _0x2d4a91['prototype'];
            return _0x2b1a55['addChild'] = function (_0x33693e) {
                return _0x33693e['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChild']['call'](this, _0x33693e);
            }, _0x2b1a55['onResize'] = function (_0x528d34) {
                this['_setItemCh' + 'anged']();
            }, _0x2b1a55['addChildAt'] = function (_0x45d380, _0x5f3227) {
                return _0x45d380['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChildAt']['call'](this, _0x45d380, _0x5f3227);
            }, _0x2b1a55['removeChil' + 'dAt'] = function (_0x12d282) {
                return this['getChildAt'](_0x12d282)['off']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['removeChil' + 'dAt']['call'](this, _0x12d282);
            }, _0x2b1a55['refresh'] = function () {
                this['_setItemCh' + 'anged']();
            }, _0x2b1a55['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = ![];
            }, _0x2b1a55['sortItem'] = function (_0x49fb2e) {
                if (_0x49fb2e)
                    _0x49fb2e['sort'](function (_0x270c2f, _0x5c0a83) {
                        return _0x270c2f['y'] - _0x5c0a83['y'];
                    });
            }, _0x2b1a55['_setItemCh' + 'anged'] = function () {
                !this['_itemChang' + 'ed'] && (this['_itemChang' + 'ed'] = !![], this['callLater'](this['changeItem' + 's']));
            }, _0x25c3de(0x0, _0x2b1a55, 'space', function () {
                return this['_space'];
            }, function (_0x5e7c16) {
                this['_space'] = _0x5e7c16, this['_setItemCh' + 'anged']();
            }), _0x25c3de(0x0, _0x2b1a55, 'align', function () {
                return this['_align'];
            }, function (_0x5d9558) {
                this['_align'] = _0x5d9558, this['_setItemCh' + 'anged']();
            }), _0x2d4a91;
        }(_0x1354a5), _0x197dce = function (_0x153ac0) {
            function _0xa732c7(_0x54ffad) {
                this['_bg'] = null, this['_skin'] = null, _0xa732c7['__super']['call'](this), _0x54ffad === void 0x0 && (_0x54ffad = ''), this['text'] = _0x54ffad, this['skin'] = this['skin'];
            }
            _0x25419d(_0xa732c7, 'laya.ui.Te' + 'xtInput', _0x153ac0);
            var _0x3dbd17 = _0xa732c7['prototype'];
            return _0x3dbd17['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !![];
            }, _0x3dbd17['destroy'] = function (_0x56d661) {
                _0x56d661 === void 0x0 && (_0x56d661 = !![]), _0x153ac0['prototype']['destroy']['call'](this, _0x56d661), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
            }, _0x3dbd17['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x2aae8d()), this['_tf']['padding'] = _0xb0c2d5['inputLabel' + 'Padding'], this['_tf']['on']('input', this, this['_onInput']), this['_tf']['on']('enter', this, this['_onEnter']), this['_tf']['on']('blur', this, this['_onBlur']), this['_tf']['on']('focus', this, this['_onFocus']);
            }, _0x3dbd17['_onFocus'] = function () {
                this['event']('focus', this);
            }, _0x3dbd17['_onBlur'] = function () {
                this['event']('blur', this);
            }, _0x3dbd17['_onInput'] = function () {
                this['event']('input', this);
            }, _0x3dbd17['_onEnter'] = function () {
                this['event']('enter', this);
            }, _0x3dbd17['initialize'] = function () {
                this['width'] = 0x80, this['height'] = 0x16;
            }, _0x3dbd17['_skinLoade' + 'd'] = function () {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x243845()), this['_bg']['source'] = _0x3b96d5['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x3dbd17['select'] = function () {
                this['_tf']['select']();
            }, _0x3dbd17['setSelecti' + 'on'] = function (_0x4c8ead, _0x12da1a) {
                this['_tf']['setSelecti' + 'on'](_0x4c8ead, _0x12da1a);
            }, _0x25c3de(0x0, _0x3dbd17, 'text', _0x153ac0['prototype']['_$get_text'], function (_0x5acd9c) {
                this['_tf']['text'] != _0x5acd9c && (_0x5acd9c = _0x5acd9c + '', this['_tf']['text'] = _0x5acd9c, this['event']('change'));
            }), _0x25c3de(0x0, _0x3dbd17, 'bg', function () {
                return this['_bg'];
            }, function (_0x27752d) {
                this['graphics'] = this['_bg'] = _0x27752d;
            }), _0x25c3de(0x0, _0x3dbd17, 'multiline', function () {
                return this['_tf']['multiline'];
            }, function (_0x2ed2a8) {
                this['_tf']['multiline'] = _0x2ed2a8;
            }), _0x25c3de(0x0, _0x3dbd17, 'skin', function () {
                return this['_skin'];
            }, function (_0x354666) {
                this['_skin'] != _0x354666 && (this['_skin'] = _0x354666, this['_skin'] && !_0x3b96d5['getRes'](this['_skin']) ? _0x90a138['loader']['load'](this['_skin'], _0x44d7a5['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x25c3de(0x0, _0x3dbd17, 'sizeGrid', function () {
                return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
            }, function (_0xc77f24) {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x243845()), this['_bg']['sizeGrid'] = _0x17d5a0['fillArray'](_0xb0c2d5['defaultSiz' + 'eGrid'], _0xc77f24, Number);
            }), _0x25c3de(0x0, _0x3dbd17, 'width', _0x153ac0['prototype']['_$get_widt' + 'h'], function (_0x509a8f) {
                _0x90a138['superSet'](_0x3bcf92, this, 'width', _0x509a8f), this['_bg'] && (this['_bg']['width'] = _0x509a8f);
            }), _0x25c3de(0x0, _0x3dbd17, 'height', _0x153ac0['prototype']['_$get_heig' + 'ht'], function (_0xe4d2d4) {
                _0x90a138['superSet'](_0x3bcf92, this, 'height', _0xe4d2d4), this['_bg'] && (this['_bg']['height'] = _0xe4d2d4);
            }), _0x25c3de(0x0, _0x3dbd17, 'editable', function () {
                return this['_tf']['editable'];
            }, function (_0x3de375) {
                this['_tf']['editable'] = _0x3de375;
            }), _0x25c3de(0x0, _0x3dbd17, 'restrict', function () {
                return this['_tf']['restrict'];
            }, function (_0x1d3d63) {
                this['_tf']['restrict'] = _0x1d3d63;
            }), _0x25c3de(0x0, _0x3dbd17, 'prompt', function () {
                return this['_tf']['prompt'];
            }, function (_0x2a86f4) {
                this['_tf']['prompt'] = _0x2a86f4;
            }), _0x25c3de(0x0, _0x3dbd17, 'promptColo' + 'r', function () {
                return this['_tf']['promptColo' + 'r'];
            }, function (_0x1a767b) {
                this['_tf']['promptColo' + 'r'] = _0x1a767b;
            }), _0x25c3de(0x0, _0x3dbd17, 'maxChars', function () {
                return this['_tf']['maxChars'];
            }, function (_0x5b20fe) {
                this['_tf']['maxChars'] = _0x5b20fe;
            }), _0x25c3de(0x0, _0x3dbd17, 'focus', function () {
                return this['_tf']['focus'];
            }, function (_0x131118) {
                this['_tf']['focus'] = _0x131118;
            }), _0x25c3de(0x0, _0x3dbd17, 'type', function () {
                return this['_tf']['type'];
            }, function (_0x40e4f7) {
                this['_tf']['type'] = _0x40e4f7;
            }), _0xa732c7;
        }(_0x3bcf92), _0x4a59e1 = function (_0x2d05aa) {
            function _0x427c31() {
                this['_items'] = null, this['_selectedI' + 'ndex'] = 0x0, _0x427c31['__super']['call'](this), this['_setIndexH' + 'andler'] = _0x44d7a5['create'](this, this['setIndex'], null, ![]);
            }
            _0x25419d(_0x427c31, 'laya.ui.Vi' + 'ewStack', _0x2d05aa);
            var _0x762406 = _0x427c31['prototype'];
            return _0x90a138['imps'](_0x762406, { 'laya.ui.IItem': !![] }), _0x762406['setItems'] = function (_0x585583) {
                this['removeChil' + 'dren']();
                var _0xd19fe0 = 0x0;
                for (var _0xadd064 = 0x0, _0x39e8d5 = _0x585583['length']; _0xadd064 < _0x39e8d5; _0xadd064++) {
                    var _0x4ab2ac = _0x585583[_0xadd064];
                    _0x4ab2ac && (_0x4ab2ac['name'] = 'item' + _0xd19fe0, this['addChild'](_0x4ab2ac), _0xd19fe0++);
                }
                this['initItems']();
            }, _0x762406['addItem'] = function (_0x56cf92) {
                _0x56cf92['name'] = 'item' + this['_items']['length'], this['addChild'](_0x56cf92), this['initItems']();
            }, _0x762406['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x762406['initItems'] = function () {
                this['_items'] = [];
                for (var _0x1b3aac = 0x0; _0x1b3aac < 0x2710; _0x1b3aac++) {
                    var _0x2a9c89 = this['getChildBy' + 'Name']('item' + _0x1b3aac);
                    if (_0x2a9c89 == null)
                        break;
                    this['_items']['push'](_0x2a9c89), _0x2a9c89['visible'] = _0x1b3aac == this['_selectedI' + 'ndex'];
                }
            }, _0x762406['setSelect'] = function (_0x2b94f1, _0x2bc71c) {
                this['_items'] && _0x2b94f1 > -0x1 && _0x2b94f1 < this['_items']['length'] && (this['_items'][_0x2b94f1]['visible'] = _0x2bc71c);
            }, _0x762406['setIndex'] = function (_0x3fa690) {
                this['selectedIn' + 'dex'] = _0x3fa690;
            }, _0x25c3de(0x0, _0x762406, 'dataSource', _0x2d05aa['prototype']['_$get_data' + 'Source'], function (_0x3c6fb9) {
                this['_dataSourc' + 'e'] = _0x3c6fb9;
                if (typeof _0x3c6fb9 == 'number' && Math['floor'](_0x3c6fb9) == _0x3c6fb9 || typeof _0x3c6fb9 == 'string')
                    this['selectedIn' + 'dex'] = parseInt(_0x3c6fb9);
                else
                    for (var _0x1cfe1f in this['_dataSourc' + 'e']) {
                        this['hasOwnProp' + 'erty'](_0x1cfe1f) && (this[_0x1cfe1f] = this['_dataSourc' + 'e'][_0x1cfe1f]);
                    }
            }), _0x25c3de(0x0, _0x762406, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x30cb64) {
                this['_selectedI' + 'ndex'] != _0x30cb64 && (this['setSelect'](this['_selectedI' + 'ndex'], ![]), this['_selectedI' + 'ndex'] = _0x30cb64, this['setSelect'](this['_selectedI' + 'ndex'], !![]));
            }), _0x25c3de(0x0, _0x762406, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x48bca6) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x48bca6);
            }), _0x25c3de(0x0, _0x762406, 'items', function () {
                return this['_items'];
            }), _0x25c3de(0x0, _0x762406, 'setIndexHa' + 'ndler', function () {
                return this['_setIndexH' + 'andler'];
            }, function (_0x395dd7) {
                this['_setIndexH' + 'andler'] = _0x395dd7;
            }), _0x427c31;
        }(_0x1354a5), _0x1a6bc4 = function (_0x35f9ba) {
            function _0x30bfdb() {
                _0x30bfdb['__super']['call'](this);
                ;
            }
            return _0x25419d(_0x30bfdb, 'laya.ui.VS' + 'lider', _0x35f9ba), _0x30bfdb;
        }(_0x2c1129), _0x9c6343 = function (_0x1b1cff) {
            function _0x345d7f() {
                this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null, this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !![], _0x345d7f['__super']['call'](this), this['width'] = this['height'] = 0xc8;
            }
            _0x25419d(_0x345d7f, 'laya.ui.Tr' + 'ee', _0x1b1cff);
            var _0x217dc3 = _0x345d7f['prototype'];
            return _0x90a138['imps'](_0x217dc3, { 'laya.ui.IRender': !![] }), _0x217dc3['destroy'] = function (_0x11fa62) {
                _0x11fa62 === void 0x0 && (_0x11fa62 = !![]), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x11fa62), this['_list'] && this['_list']['destroy'](_0x11fa62), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
            }, _0x217dc3['createChil' + 'dren'] = function () {
                this['addChild'](this['_list'] = new _0x3e2083()), this['_list']['renderHand' + 'ler'] = _0x44d7a5['create'](this, this['renderItem'], null, ![]), this['_list']['repeatX'] = 0x1, this['_list']['on']('change', this, this['onListChan' + 'ge']);
            }, _0x217dc3['onListChan' + 'ge'] = function (_0x4c407e) {
                this['event']('change');
            }, _0x217dc3['getArray'] = function () {
                var _0x52d3f5 = [], _0x38db0c;
                for (var _0xe43222 in this['_source']) {
                    _0x38db0c = this['_source'][_0xe43222], this['getParentO' + 'penStatus'](_0x38db0c) && (_0x38db0c['x'] = this['_spaceLeft'] * this['getDepth'](_0x38db0c), _0x52d3f5['push'](_0x38db0c));
                }
                return _0x52d3f5;
            }, _0x217dc3['getDepth'] = function (_0xca081a, _0x547ecf) {
                _0x547ecf === void 0x0 && (_0x547ecf = 0x0);
                if (_0xca081a['nodeParent'] == null)
                    return _0x547ecf;
                else
                    return this['getDepth'](_0xca081a['nodeParent'], _0x547ecf + 0x1);
            }, _0x217dc3['getParentO' + 'penStatus'] = function (_0x557d48) {
                var _0x29659d = _0x557d48['nodeParent'];
                if (_0x29659d == null)
                    return !![];
                else {
                    if (_0x29659d['isOpen']) {
                        if (_0x29659d['nodeParent'] != null)
                            return this['getParentO' + 'penStatus'](_0x29659d);
                        else
                            return !![];
                    } else
                        return ![];
                }
            }, _0x217dc3['renderItem'] = function (_0x149b17, _0x2216b2) {
                var _0x156f9e = _0x149b17['dataSource'];
                if (_0x156f9e) {
                    _0x149b17['left'] = _0x156f9e['x'];
                    var _0x1e15ea = _0x149b17['getChildBy' + 'Name']('arrow');
                    _0x1e15ea && (_0x156f9e['hasChild'] ? (_0x1e15ea['visible'] = !![], _0x1e15ea['index'] = _0x156f9e['isOpen'] ? 0x1 : 0x0, _0x1e15ea['tag'] = _0x2216b2, _0x1e15ea['off']('click', this, this['onArrowCli' + 'ck']), _0x1e15ea['on']('click', this, this['onArrowCli' + 'ck'])) : _0x1e15ea['visible'] = ![]);
                    ;
                    var _0x330c2c = _0x149b17['getChildBy' + 'Name']('folder');
                    _0x330c2c && (_0x330c2c['clipY'] == 0x2 ? _0x330c2c['index'] = _0x156f9e['isDirector' + 'y'] ? 0x0 : 0x1 : _0x330c2c['index'] = _0x156f9e['isDirector' + 'y'] ? _0x156f9e['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                        _0x149b17,
                        _0x2216b2
                    ]);
                }
            }, _0x217dc3['onArrowCli' + 'ck'] = function (_0x3674b3) {
                var _0x5bfeec = _0x3674b3['currentTar' + 'get'], _0x30baf3 = _0x5bfeec['tag'];
                this['_list']['array'][_0x30baf3]['isOpen'] = !this['_list']['array'][_0x30baf3]['isOpen'], this['event']('open'), this['_list']['array'] = this['getArray']();
            }, _0x217dc3['setItemSta' + 'te'] = function (_0x1c3d62, _0x79654a) {
                if (!this['_list']['array'][_0x1c3d62])
                    return;
                this['_list']['array'][_0x1c3d62]['isOpen'] = _0x79654a, this['_list']['array'] = this['getArray']();
            }, _0x217dc3['fresh'] = function () {
                this['_list']['array'] = this['getArray'](), this['repaint']();
            }, _0x217dc3['parseXml'] = function (_0x56c26b, _0x132a79, _0x1142a3, _0x42e07d) {
                var _0x563f1b, _0x576626 = _0x56c26b['childNodes'], _0x4a05d6 = _0x576626['length'];
                if (!_0x42e07d) {
                    _0x563f1b = {};
                    var _0x40ab81 = _0x56c26b['attributes'], _0x111880;
                    for (var _0x38fb21 in _0x40ab81) {
                        _0x111880 = _0x40ab81[_0x38fb21];
                        var _0x2a3344 = _0x111880['nodeName'], _0x3b406e = _0x111880['nodeValue'];
                        _0x563f1b[_0x2a3344] = _0x3b406e == 'true' ? !![] : _0x3b406e == 'false' ? ![] : _0x3b406e;
                    }
                    _0x563f1b['nodeParent'] = _0x1142a3;
                    if (_0x4a05d6 > 0x0)
                        _0x563f1b['isDirector' + 'y'] = !![];
                    _0x563f1b['hasChild'] = _0x4a05d6 > 0x0, _0x132a79['push'](_0x563f1b);
                }
                for (var _0x1f91c0 = 0x0; _0x1f91c0 < _0x4a05d6; _0x1f91c0++) {
                    var _0x2e809f = _0x576626[_0x1f91c0];
                    this['parseXml'](_0x2e809f, _0x132a79, _0x563f1b, ![]);
                }
            }, _0x217dc3['parseOpenS' + 'tatus'] = function (_0x2c3dd7, _0x3d5ba6) {
                for (var _0x42bda8 = 0x0, _0x9cbc56 = _0x3d5ba6['length']; _0x42bda8 < _0x9cbc56; _0x42bda8++) {
                    var _0x583312 = _0x3d5ba6[_0x42bda8];
                    if (_0x583312['isDirector' + 'y'])
                        for (var _0x501808 = 0x0, _0x3104ad = _0x2c3dd7['length']; _0x501808 < _0x3104ad; _0x501808++) {
                            var _0x53a973 = _0x2c3dd7[_0x501808];
                            if (_0x53a973['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x53a973, _0x583312) && _0x583312['label'] == _0x53a973['label']) {
                                _0x583312['isOpen'] = _0x53a973['isOpen'];
                                break;
                            }
                        }
                }
            }, _0x217dc3['isSamePare' + 'nt'] = function (_0x562918, _0x43e35c) {
                if (_0x562918['nodeParent'] == null && _0x43e35c['nodeParent'] == null)
                    return !![];
                else {
                    if (_0x562918['nodeParent'] == null || _0x43e35c['nodeParent'] == null)
                        return ![];
                    else {
                        if (_0x562918['nodeParent']['label'] == _0x43e35c['nodeParent']['label'])
                            return this['isSamePare' + 'nt'](_0x562918['nodeParent'], _0x43e35c['nodeParent']);
                        else
                            return ![];
                    }
                }
            }, _0x217dc3['filter'] = function (_0x2353a4) {
                if (Boolean(_0x2353a4)) {
                    var _0x23d2e3 = [];
                    this['getFilterS' + 'ource'](this['_source'], _0x23d2e3, _0x2353a4), this['_list']['array'] = _0x23d2e3;
                } else
                    this['_list']['array'] = this['getArray']();
            }, _0x217dc3['getFilterS' + 'ource'] = function (_0x24cc76, _0x7e5b9f, _0x3bc852) {
                _0x3bc852 = _0x3bc852['toLocaleLo' + 'werCase']();
                var _0x19ec71;
                for (var _0x333c81 in _0x24cc76) {
                    _0x19ec71 = _0x24cc76[_0x333c81], !_0x19ec71['isDirector' + 'y'] && String(_0x19ec71['label'])['toLowerCas' + 'e']()['indexOf'](_0x3bc852) > -0x1 && (_0x19ec71['x'] = 0x0, _0x7e5b9f['push'](_0x19ec71)), _0x19ec71['child'] && _0x19ec71['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x19ec71['child'], _0x7e5b9f, _0x3bc852);
                }
            }, _0x25c3de(0x0, _0x217dc3, 'spaceBotto' + 'm', function () {
                return this['_list']['spaceY'];
            }, function (_0x240ac0) {
                this['_list']['spaceY'] = _0x240ac0;
            }), _0x25c3de(0x0, _0x217dc3, 'keepStatus', function () {
                return this['_keepStatu' + 's'];
            }, function (_0x382b7a) {
                this['_keepStatu' + 's'] = _0x382b7a;
            }), _0x25c3de(0x0, _0x217dc3, 'itemRender', function () {
                return this['_list']['itemRender'];
            }, function (_0x4b6041) {
                this['_list']['itemRender'] = _0x4b6041;
            }), _0x25c3de(0x0, _0x217dc3, 'array', function () {
                return this['_list']['array'];
            }, function (_0x1aa7fe) {
                this['_keepStatu' + 's'] && this['_list']['array'] && _0x1aa7fe && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x1aa7fe), this['_source'] = _0x1aa7fe, this['_list']['array'] = this['getArray']();
            }), _0x25c3de(0x0, _0x217dc3, 'mouseHandl' + 'er', function () {
                return this['_list']['mouseHandl' + 'er'];
            }, function (_0x4b408a) {
                this['_list']['mouseHandl' + 'er'] = _0x4b408a;
            }), _0x25c3de(0x0, _0x217dc3, 'dataSource', _0x1b1cff['prototype']['_$get_data' + 'Source'], function (_0x299a6e) {
                this['_dataSourc' + 'e'] = _0x299a6e, _0x90a138['superSet'](_0x1354a5, this, 'dataSource', _0x299a6e);
            }), _0x25c3de(0x0, _0x217dc3, 'source', function () {
                return this['_source'];
            }), _0x25c3de(0x0, _0x217dc3, 'scrollBar', function () {
                return this['_list']['scrollBar'];
            }), _0x25c3de(0x0, _0x217dc3, 'list', function () {
                return this['_list'];
            }), _0x25c3de(0x0, _0x217dc3, 'scrollBarS' + 'kin', function () {
                return this['_list']['vScrollBar' + 'Skin'];
            }, function (_0x5bb13a) {
                this['_list']['vScrollBar' + 'Skin'] = _0x5bb13a;
            }), _0x25c3de(0x0, _0x217dc3, 'renderHand' + 'ler', function () {
                return this['_renderHan' + 'dler'];
            }, function (_0x3ae22a) {
                this['_renderHan' + 'dler'] = _0x3ae22a;
            }), _0x25c3de(0x0, _0x217dc3, 'selectedIn' + 'dex', function () {
                return this['_list']['selectedIn' + 'dex'];
            }, function (_0x31bbbd) {
                this['_list']['selectedIn' + 'dex'] = _0x31bbbd;
            }), _0x25c3de(0x0, _0x217dc3, 'spaceLeft', function () {
                return this['_spaceLeft'];
            }, function (_0x12fc4f) {
                this['_spaceLeft'] = _0x12fc4f;
            }), _0x25c3de(0x0, _0x217dc3, 'selectedIt' + 'em', function () {
                return this['_list']['selectedIt' + 'em'];
            }, function (_0x535940) {
                this['_list']['selectedIt' + 'em'] = _0x535940;
            }), _0x25c3de(0x0, _0x217dc3, 'width', _0x1b1cff['prototype']['_$get_widt' + 'h'], function (_0x5f5bc5) {
                _0x90a138['superSet'](_0x1354a5, this, 'width', _0x5f5bc5), this['_list']['width'] = _0x5f5bc5;
            }), _0x25c3de(0x0, _0x217dc3, 'height', _0x1b1cff['prototype']['_$get_heig' + 'ht'], function (_0x4bea48) {
                _0x90a138['superSet'](_0x1354a5, this, 'height', _0x4bea48), this['_list']['height'] = _0x4bea48;
            }), _0x25c3de(0x0, _0x217dc3, 'xml', null, function (_0x2fe467) {
                var _0x7c00c9 = [];
                this['parseXml'](_0x2fe467['childNodes'][0x0], _0x7c00c9, null, !![]), this['array'] = _0x7c00c9;
            }), _0x25c3de(0x0, _0x217dc3, 'selectedPa' + 'th', function () {
                if (this['_list']['selectedIt' + 'em'])
                    return this['_list']['selectedIt' + 'em']['path'];
                return null;
            }), _0x345d7f;
        }(_0x1354a5), _0x3e2083 = function (_0x305ff5) {
            function _0x103085() {
                this['selectHand' + 'ler'] = null, this['renderHand' + 'ler'] = null, this['mouseHandl' + 'er'] = null, this['selectEnab' + 'le'] = ![], this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_array'] = null, this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !![], this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_isMoved'] = ![], this['cacheConte' + 'nt'] = ![], this['_createdLi' + 'ne'] = 0x0, this['_cellChang' + 'ed'] = ![], this['_usedCache'] = null, this['_elasticEn' + 'abled'] = ![], this['_preLen'] = 0x0, _0x103085['__super']['call'](this), this['_cells'] = [], this['_offset'] = new _0x5e6c15();
            }
            _0x25419d(_0x103085, 'laya.ui.Li' + 'st', _0x305ff5);
            var _0x31a4b7 = _0x103085['prototype'];
            return _0x90a138['imps'](_0x31a4b7, {
                'laya.ui.IRender': !![],
                'laya.ui.IItem': !![]
            }), _0x31a4b7['destroy'] = function (_0x50c003) {
                _0x50c003 === void 0x0 && (_0x50c003 = !![]), this['_content'] && this['_content']['destroy'](_0x50c003), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x50c003), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x50c003), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
            }, _0x31a4b7['createChil' + 'dren'] = function () {
                this['addChild'](this['_content'] = new _0x1354a5());
            }, _0x31a4b7['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x90a138['superGet'](_0x1354a5, this, 'cacheAs')), _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', 'none'), this['_scrollBar']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x31a4b7['onScrollEn' + 'd'] = function () {
                _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', this['_usedCache']);
            }, _0x31a4b7['_removePre' + 'ScrollBar'] = function () {
                var _0x8a8ef7 = this['removeChil' + 'dByName']('scrollBar');
                if (_0x8a8ef7)
                    _0x8a8ef7['destroy'](!![]);
            }, _0x31a4b7['changeCell' + 's'] = function () {
                this['_cellChang' + 'ed'] = ![];
                if (this['_itemRende' + 'r']) {
                    this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                    var _0x30ed3c = this['_getOneCel' + 'l'](), _0x1611b0 = _0x30ed3c['width'] + this['_spaceX'] || 0x1, _0x888876 = _0x30ed3c['height'] + this['_spaceY'] || 0x1;
                    if (this['_width'] > 0x0)
                        this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x1611b0) : Math['ceil'](this['_width'] / _0x1611b0);
                    if (this['_height'] > 0x0)
                        this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x888876) : Math['round'](this['_height'] / _0x888876);
                    var _0x1d8779 = this['_width'] ? this['_width'] : _0x1611b0 * this['repeatX'] - this['_spaceX'], _0x144299 = this['_height'] ? this['_height'] : _0x888876 * this['repeatY'] - this['_spaceY'];
                    this['_cellSize'] = this['_isVertica' + 'l'] ? _0x888876 : _0x1611b0, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x888876 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x144299 - this['_spaceY'] : _0x1611b0 * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x1d8779 - this['_spaceX'];
                    if (this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'])
                        this['_scrollBar']['height'] = _0x144299;
                    else {
                        if (!this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'])
                            this['_scrollBar']['width'] = _0x1d8779;
                    }
                    this['setContent' + 'Size'](_0x1d8779, _0x144299);
                    var _0x1d0f5b = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x54d1b4 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                    this['_createIte' + 'ms'](0x0, _0x1d0f5b, _0x54d1b4), this['_createdLi' + 'ne'] = _0x54d1b4, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
                }
            }, _0x31a4b7['_getOneCel' + 'l'] = function () {
                if (this['_cells']['length'] === 0x0) {
                    var _0x8686a7 = this['createItem']();
                    this['_offset']['setTo'](_0x8686a7['_x'], _0x8686a7['_y']);
                    if (this['cacheConte' + 'nt'])
                        return _0x8686a7;
                    this['_cells']['push'](_0x8686a7);
                }
                return this['_cells'][0x0];
            }, _0x31a4b7['_createIte' + 'ms'] = function (_0x26e5fe, _0x4f53a3, _0xa1f641) {
                var _0x2413ff = this['_content'], _0x16ec32 = this['_getOneCel' + 'l'](), _0x5ae128 = _0x16ec32['width'] + this['_spaceX'], _0x41926e = _0x16ec32['height'] + this['_spaceY'];
                if (this['cacheConte' + 'nt']) {
                    var _0x2b819e = new _0x1354a5();
                    _0x2b819e['cacheAs'] = 'normal', _0x2b819e['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x26e5fe) * _0x5ae128, (this['_isVertica' + 'l'] ? _0x26e5fe : 0x0) * _0x41926e), this['_content']['addChild'](_0x2b819e), _0x2413ff = _0x2b819e;
                } else {
                    var _0x45f4f7 = [];
                    for (var _0x1b24e7 = this['_cells']['length'] - 0x1; _0x1b24e7 > -0x1; _0x1b24e7--) {
                        var _0xd4654f = this['_cells'][_0x1b24e7];
                        _0xd4654f['removeSelf'](), _0x45f4f7['push'](_0xd4654f);
                    }
                    this['_cells']['length'] = 0x0;
                }
                for (var _0xdba8dc = _0x26e5fe; _0xdba8dc < _0xa1f641; _0xdba8dc++) {
                    for (var _0x52e562 = 0x0; _0x52e562 < _0x4f53a3; _0x52e562++) {
                        _0x45f4f7 && _0x45f4f7['length'] ? _0x16ec32 = _0x45f4f7['pop']() : _0x16ec32 = this['createItem'](), _0x16ec32['x'] = (this['_isVertica' + 'l'] ? _0x52e562 : _0xdba8dc) * _0x5ae128 - _0x2413ff['_x'], _0x16ec32['y'] = (this['_isVertica' + 'l'] ? _0xdba8dc : _0x52e562) * _0x41926e - _0x2413ff['_y'], _0x16ec32['name'] = 'item' + (_0xdba8dc * _0x4f53a3 + _0x52e562), _0x2413ff['addChild'](_0x16ec32), this['addCell'](_0x16ec32);
                    }
                }
            }, _0x31a4b7['createItem'] = function () {
                var _0x467923 = [];
                if (typeof this['_itemRende' + 'r'] == 'function')
                    var _0x29d223 = new this['_itemRende' + 'r']();
                else
                    _0x29d223 = _0x56dabb['createComp'](this['_itemRende' + 'r'], null, null, _0x467923);
                if (_0x467923['length'] == 0x0 && _0x29d223['_watchMap']) {
                    var _0x45cb63 = _0x29d223['_watchMap'];
                    for (var _0x42c991 in _0x45cb63) {
                        var _0xfe640c = _0x45cb63[_0x42c991];
                        for (var _0x27ebd4 = 0x0; _0x27ebd4 < _0xfe640c['length']; _0x27ebd4++) {
                            var _0x28c75d = _0xfe640c[_0x27ebd4];
                            _0x467923['push'](_0x28c75d['comp'], _0x28c75d['prop'], _0x28c75d['value']);
                        }
                    }
                }
                if (_0x467923['length'])
                    _0x29d223['_$bindData'] = _0x467923;
                return _0x29d223;
            }, _0x31a4b7['addCell'] = function (_0x40ddc7) {
                _0x40ddc7['on']('click', this, this['onCellMous' + 'e']), _0x40ddc7['on']('rightclick', this, this['onCellMous' + 'e']), _0x40ddc7['on']('mouseover', this, this['onCellMous' + 'e']), _0x40ddc7['on']('mouseout', this, this['onCellMous' + 'e']), _0x40ddc7['on']('mousedown', this, this['onCellMous' + 'e']), _0x40ddc7['on']('mouseup', this, this['onCellMous' + 'e']), this['_cells']['push'](_0x40ddc7);
            }, _0x31a4b7['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x31a4b7['initItems'] = function () {
                if (!this['_itemRende' + 'r'] && this['getChildBy' + 'Name']('item0') != null) {
                    this['repeatX'] = 0x1;
                    var _0x67201 = 0x0;
                    _0x67201 = 0x0;
                    for (var _0x58f0ee = 0x0; _0x58f0ee < 0x2710; _0x58f0ee++) {
                        var _0x231802 = this['getChildBy' + 'Name']('item' + _0x58f0ee);
                        if (_0x231802) {
                            this['addCell'](_0x231802), _0x67201++;
                            continue;
                        }
                        break;
                    }
                    this['repeatY'] = _0x67201;
                }
            }, _0x31a4b7['setContent' + 'Size'] = function (_0x5af251, _0xb51d8f) {
                this['_content']['width'] = _0x5af251, this['_content']['height'] = _0xb51d8f, (this['_scrollBar'] || this['_offset']['x'] != 0x0 || this['_offset']['y'] != 0x0) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x472506['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x5af251, _0xb51d8f), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event']('resize');
            }, _0x31a4b7['onCellMous' + 'e'] = function (_0x1d18e0) {
                if (_0x1d18e0['type'] === 'mousedown')
                    this['_isMoved'] = ![];
                var _0x314146 = _0x1d18e0['currentTar' + 'get'], _0x308564 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x314146);
                if (_0x308564 < 0x0)
                    return;
                if (_0x1d18e0['type'] === 'click' || _0x1d18e0['type'] === 'rightclick') {
                    if (this['selectEnab' + 'le'] && !this['_isMoved'])
                        this['selectedIn' + 'dex'] = _0x308564;
                    else
                        this['changeCell' + 'State'](_0x314146, !![], 0x0);
                } else
                    (_0x1d18e0['type'] === 'mouseover' || _0x1d18e0['type'] === 'mouseout') && this['_selectedI' + 'ndex'] !== _0x308564 && this['changeCell' + 'State'](_0x314146, _0x1d18e0['type'] === 'mouseover', 0x0);
                this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                    _0x1d18e0,
                    _0x308564
                ]);
            }, _0x31a4b7['changeCell' + 'State'] = function (_0x224852, _0x2270da, _0x40991f) {
                var _0xc90cc3 = _0x224852['getChildBy' + 'Name']('selectBox');
                _0xc90cc3 && (this['selectEnab' + 'le'] = !![], _0xc90cc3['visible'] = _0x2270da, _0xc90cc3['index'] = _0x40991f);
            }, _0x31a4b7['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['width'], this['height']);
                if (this['_scrollBar'])
                    this['callLater'](this['onScrollBa' + 'rChange']);
            }, _0x31a4b7['onScrollBa' + 'rChange'] = function (_0x42235c) {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
                var _0x4d3196 = this['_scrollBar']['value'], _0x13aa6a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x29d801 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x15724f = Math['floor'](_0x4d3196 / this['_cellSize']);
                if (!this['cacheConte' + 'nt']) {
                    var _0x558edb = _0x15724f * _0x13aa6a, _0x236233 = 0x0;
                    if (_0x558edb > this['_startInde' + 'x']) {
                        _0x236233 = _0x558edb - this['_startInde' + 'x'];
                        var _0x3727c4 = !![], _0x3c4d79 = this['_startInde' + 'x'] + _0x13aa6a * (_0x29d801 + 0x1);
                        this['_isMoved'] = !![];
                    } else
                        _0x558edb < this['_startInde' + 'x'] && (_0x236233 = this['_startInde' + 'x'] - _0x558edb, _0x3727c4 = ![], _0x3c4d79 = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !![]);
                    for (var _0x4f6602 = 0x0; _0x4f6602 < _0x236233; _0x4f6602++) {
                        if (_0x3727c4) {
                            var _0x10953a = this['_cells']['shift']();
                            this['_cells'][this['_cells']['length']] = _0x10953a;
                            var _0x484320 = _0x3c4d79 + _0x4f6602;
                        } else
                            _0x10953a = this['_cells']['pop'](), this['_cells']['unshift'](_0x10953a), _0x484320 = _0x3c4d79 - _0x4f6602;
                        ;
                        var _0xdd56d8 = Math['floor'](_0x484320 / _0x13aa6a) * this['_cellSize'];
                        this['_isVertica' + 'l'] ? _0x10953a['y'] = _0xdd56d8 : _0x10953a['x'] = _0xdd56d8, this['renderItem'](_0x10953a, _0x484320);
                    }
                    this['_startInde' + 'x'] = _0x558edb, this['changeSele' + 'ctStatus']();
                } else
                    _0x236233 = _0x29d801 + 0x1, this['_createdLi' + 'ne'] - _0x15724f < _0x236233 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x13aa6a, this['_createdLi' + 'ne'] + _0x236233), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x13aa6a, 0x0), this['_createdLi' + 'ne'] += _0x236233);
                ;
                var _0x1fae9c = this['_content']['_style']['scrollRect'];
                this['_isVertica' + 'l'] ? (_0x1fae9c['y'] = _0x4d3196 - this['_offset']['y'], _0x1fae9c['x'] = -this['_offset']['x']) : (_0x1fae9c['y'] = -this['_offset']['y'], _0x1fae9c['x'] = _0x4d3196 - this['_offset']['x']), this['_content']['scrollRect'] = _0x1fae9c;
            }, _0x31a4b7['posCell'] = function (_0x2acf37, _0xb8efe2) {
                if (!this['_scrollBar'])
                    return;
                var _0x1f7cda = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x262eb9 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x475f27 = Math['floor'](_0xb8efe2 / _0x1f7cda) * this['_cellSize'];
                this['_isVertica' + 'l'] ? _0x2acf37['_y'] = _0x475f27 : _0x2acf37['x'] = _0x475f27;
            }, _0x31a4b7['changeSele' + 'ctStatus'] = function () {
                for (var _0x1be2f7 = 0x0, _0xc913f7 = this['_cells']['length']; _0x1be2f7 < _0xc913f7; _0x1be2f7++) {
                    this['changeCell' + 'State'](this['_cells'][_0x1be2f7], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x1be2f7, 0x1);
                }
            }, _0x31a4b7['renderItem' + 's'] = function (_0x3592b3, _0xc97ecf) {
                _0x3592b3 === void 0x0 && (_0x3592b3 = 0x0), _0xc97ecf === void 0x0 && (_0xc97ecf = 0x0);
                for (var _0x10b0be = _0x3592b3, _0x11194f = _0xc97ecf || this['_cells']['length']; _0x10b0be < _0x11194f; _0x10b0be++) {
                    this['renderItem'](this['_cells'][_0x10b0be], this['_startInde' + 'x'] + _0x10b0be);
                }
                this['changeSele' + 'ctStatus']();
            }, _0x31a4b7['renderItem'] = function (_0x3bcdbe, _0x1d29d2) {
                if (this['_array'] && _0x1d29d2 >= 0x0 && _0x1d29d2 < this['_array']['length']) {
                    _0x3bcdbe['visible'] = !![];
                    if (_0x3bcdbe['_$bindData'])
                        _0x3bcdbe['_dataSourc' + 'e'] = this['_array'][_0x1d29d2], this['_bindData'](_0x3bcdbe, this['_array'][_0x1d29d2]);
                    else
                        _0x3bcdbe['dataSource'] = this['_array'][_0x1d29d2];
                    !this['cacheConte' + 'nt'] && this['posCell'](_0x3bcdbe, _0x1d29d2);
                    if (this['hasListene' + 'r']('render'))
                        this['event']('render', [
                            _0x3bcdbe,
                            _0x1d29d2
                        ]);
                    if (this['renderHand' + 'ler'])
                        this['renderHand' + 'ler']['runWith']([
                            _0x3bcdbe,
                            _0x1d29d2
                        ]);
                } else
                    _0x3bcdbe['visible'] = ![], _0x3bcdbe['dataSource'] = null;
            }, _0x31a4b7['_bindData'] = function (_0x4ed360, _0x1837c9) {
                var _0x37d855 = _0x4ed360['_$bindData'];
                for (var _0x272ed8 = 0x0, _0x3074e0 = _0x37d855['length']; _0x272ed8 < _0x3074e0; _0x272ed8++) {
                    var _0x5317ac = _0x37d855[_0x272ed8++], _0x4c36dd = _0x37d855[_0x272ed8++], _0x2a540b = _0x37d855[_0x272ed8], _0x25b763 = _0x17d5a0['getBindFun'](_0x2a540b);
                    _0x5317ac[_0x4c36dd] = _0x25b763['call'](this, _0x1837c9);
                }
            }, _0x31a4b7['updateArra' + 'y'] = function (_0x52522a) {
                this['_array'] = _0x52522a;
                var _0x5b0a6c = 0x0;
                if (this['_array']) {
                    _0x5b0a6c = this['_preLen'] - this['_startInde' + 'x'];
                    if (_0x5b0a6c >= 0x0)
                        this['renderItem' + 's'](_0x5b0a6c);
                    this['_preLen'] = this['_array']['length'];
                }
                if (this['_scrollBar']) {
                    var _0x142b65 = _0x52522a['length'], _0x231b5a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x5030ae = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x10315b = Math['ceil'](_0x142b65 / _0x231b5a);
                    _0x10315b >= _0x5030ae && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x5030ae / _0x10315b, this['_scrollBar']['slider']['_max'] = (_0x10315b - _0x5030ae) * this['_cellSize'] + this['_cellOffse' + 't']);
                }
            }, _0x31a4b7['refresh'] = function () {
                this['array'] = this['_array'];
            }, _0x31a4b7['getItem'] = function (_0x79347f) {
                if (_0x79347f > -0x1 && _0x79347f < this['_array']['length'])
                    return this['_array'][_0x79347f];
                return null;
            }, _0x31a4b7['changeItem'] = function (_0x3ca815, _0x45f2bc) {
                _0x3ca815 > -0x1 && _0x3ca815 < this['_array']['length'] && (this['_array'][_0x3ca815] = _0x45f2bc, _0x3ca815 >= this['_startInde' + 'x'] && _0x3ca815 < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x3ca815), _0x3ca815));
            }, _0x31a4b7['setItem'] = function (_0x2c2095, _0x1cb3e5) {
                this['changeItem'](_0x2c2095, _0x1cb3e5);
            }, _0x31a4b7['addItem'] = function (_0x420f85) {
                this['_array']['push'](_0x420f85), this['array'] = this['_array'];
            }, _0x31a4b7['addItemAt'] = function (_0x4066e3, _0x4b48b7) {
                this['_array']['splice'](_0x4b48b7, 0x0, _0x4066e3), this['array'] = this['_array'];
            }, _0x31a4b7['deleteItem'] = function (_0x3f0d57) {
                this['_array']['splice'](_0x3f0d57, 0x1), this['array'] = this['_array'];
            }, _0x31a4b7['getCell'] = function (_0x35feee) {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
                if (_0x35feee > -0x1 && this['_cells'])
                    return this['_cells'][(_0x35feee - this['_startInde' + 'x']) % this['_cells']['length']];
                return null;
            }, _0x31a4b7['scrollTo'] = function (_0x15becd) {
                if (this['_scrollBar']) {
                    var _0x419983 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    this['_scrollBar']['value'] = Math['floor'](_0x15becd / _0x419983) * this['_cellSize'];
                } else
                    this['startIndex'] = _0x15becd;
            }, _0x31a4b7['tweenTo'] = function (_0x30b620, _0x18131f, _0x5d9a57) {
                _0x18131f === void 0x0 && (_0x18131f = 0xc8);
                if (this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x29fbbf = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    _0x5cf2ba['to'](this['_scrollBar'], { 'value': Math['floor'](_0x30b620 / _0x29fbbf) * this['_cellSize'] }, _0x18131f, null, _0x5d9a57, 0x0, !![]);
                } else {
                    this['startIndex'] = _0x30b620;
                    if (_0x5d9a57)
                        _0x5d9a57['run']();
                }
            }, _0x31a4b7['_setCellCh' + 'anged'] = function () {
                !this['_cellChang' + 'ed'] && (this['_cellChang' + 'ed'] = !![], this['callLater'](this['changeCell' + 's']));
            }, _0x31a4b7['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
            }, _0x25c3de(0x0, _0x31a4b7, 'cacheAs', _0x305ff5['prototype']['_$get_cach' + 'eAs'], function (_0xef3cb1) {
                _0x90a138['superSet'](_0x1354a5, this, 'cacheAs', _0xef3cb1);
                if (this['_scrollBar']) {
                    this['_usedCache'] = null;
                    if (_0xef3cb1 !== 'none')
                        this['_scrollBar']['on']('start', this, this['onScrollSt' + 'art']);
                    else
                        this['_scrollBar']['off']('start', this, this['onScrollSt' + 'art']);
                }
            }), _0x25c3de(0x0, _0x31a4b7, 'content', function () {
                return this['_content'];
            }), _0x25c3de(0x0, _0x31a4b7, 'height', _0x305ff5['prototype']['_$get_heig' + 'ht'], function (_0x53b831) {
                _0x53b831 != this['_height'] && (_0x90a138['superSet'](_0x1354a5, this, 'height', _0x53b831), this['_setCellCh' + 'anged']());
            }), _0x25c3de(0x0, _0x31a4b7, 'itemRender', function () {
                return this['_itemRende' + 'r'];
            }, function (_0x1de0f9) {
                if (this['_itemRende' + 'r'] != _0x1de0f9) {
                    this['_itemRende' + 'r'] = _0x1de0f9;
                    for (var _0xe9983f = this['_cells']['length'] - 0x1; _0xe9983f > -0x1; _0xe9983f--) {
                        this['_cells'][_0xe9983f]['destroy']();
                    }
                    this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
                }
            }), _0x25c3de(0x0, _0x31a4b7, 'vScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x1cf098) {
                this['_removePre' + 'ScrollBar']();
                var _0x17dae6 = new _0x578472();
                _0x17dae6['name'] = 'scrollBar', _0x17dae6['right'] = 0x0, _0x17dae6['skin'] = _0x1cf098, _0x17dae6['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x17dae6, this['addChild'](_0x17dae6), this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'page', function () {
                return this['_page'];
            }, function (_0x394e43) {
                this['_page'] = _0x394e43, this['_array'] && (this['_page'] = _0x394e43 > 0x0 ? _0x394e43 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
            }), _0x25c3de(0x0, _0x31a4b7, 'hScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x3412f1) {
                this['_removePre' + 'ScrollBar']();
                var _0x148ddc = new _0x30bc63();
                _0x148ddc['name'] = 'scrollBar', _0x148ddc['bottom'] = 0x0, _0x148ddc['skin'] = _0x3412f1, _0x148ddc['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x148ddc, this['addChild'](_0x148ddc), this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'repeatX', function () {
                return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
            }, function (_0x16f071) {
                this['_repeatX'] = _0x16f071, this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'scrollBar', function () {
                return this['_scrollBar'];
            }, function (_0x5e45a7) {
                this['_scrollBar'] != _0x5e45a7 && (this['_scrollBar'] = _0x5e45a7, _0x5e45a7 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on']('change', this, this['onScrollBa' + 'rChange'])));
            }), _0x25c3de(0x0, _0x31a4b7, 'width', _0x305ff5['prototype']['_$get_widt' + 'h'], function (_0x4a966e) {
                _0x4a966e != this['_width'] && (_0x90a138['superSet'](_0x1354a5, this, 'width', _0x4a966e), this['_setCellCh' + 'anged']());
            }), _0x25c3de(0x0, _0x31a4b7, 'repeatY', function () {
                return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
            }, function (_0x4d25bc) {
                this['_repeatY'] = _0x4d25bc, this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x3b6f00) {
                this['_spaceX'] = _0x3b6f00, this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x3651e3) {
                this['_spaceY'] = _0x3651e3, this['_setCellCh' + 'anged']();
            }), _0x25c3de(0x0, _0x31a4b7, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x4d39da) {
                this['_selectedI' + 'ndex'] != _0x4d39da && (this['_selectedI' + 'ndex'] = _0x4d39da, this['changeSele' + 'ctStatus'](), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x4d39da), this['startIndex'] = this['_startInde' + 'x']);
            }), _0x25c3de(0x0, _0x31a4b7, 'selectedIt' + 'em', function () {
                return this['_selectedI' + 'ndex'] != -0x1 ? this['_array'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x3d81e2) {
                this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x3d81e2);
            }), _0x25c3de(0x0, _0x31a4b7, 'length', function () {
                return this['_array'] ? this['_array']['length'] : 0x0;
            }), _0x25c3de(0x0, _0x31a4b7, 'selection', function () {
                return this['getCell'](this['_selectedI' + 'ndex']);
            }, function (_0x4d75ea) {
                this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x4d75ea);
            }), _0x25c3de(0x0, _0x31a4b7, 'startIndex', function () {
                return this['_startInde' + 'x'];
            }, function (_0x1c56b7) {
                this['_startInde' + 'x'] = _0x1c56b7 > 0x0 ? _0x1c56b7 : 0x0, this['callLater'](this['renderItem' + 's']);
            }), _0x25c3de(0x0, _0x31a4b7, 'array', function () {
                return this['_array'];
            }, function (_0x2fe7d6) {
                this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x2fe7d6 || [], this['_preLen'] = this['_array']['length'];
                var _0x27d8eb = this['_array']['length'];
                this['totalPage'] = Math['ceil'](_0x27d8eb / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x27d8eb ? this['_selectedI' + 'ndex'] : _0x27d8eb - 0x1, this['startIndex'] = this['_startInde' + 'x'];
                if (this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x36a207 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x5b25b5 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x4b6bf0 = Math['ceil'](_0x27d8eb / _0x36a207), _0x474a23 = this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage'];
                    _0x474a23 > 0x1 && _0x4b6bf0 >= _0x5b25b5 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x5b25b5 / _0x4b6bf0, this['_scrollBar']['setScroll'](0x0, (_0x4b6bf0 - _0x5b25b5) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
                }
            }), _0x25c3de(0x0, _0x31a4b7, 'dataSource', _0x305ff5['prototype']['_$get_data' + 'Source'], function (_0xc51f1b) {
                this['_dataSourc' + 'e'] = _0xc51f1b;
                if (typeof _0xc51f1b == 'number' && Math['floor'](_0xc51f1b) == _0xc51f1b || typeof _0xc51f1b == 'string')
                    this['selectedIn' + 'dex'] = parseInt(_0xc51f1b);
                else {
                    if (_0xc51f1b instanceof Array)
                        this['array'] = _0xc51f1b;
                    else
                        _0x90a138['superSet'](_0x1354a5, this, 'dataSource', _0xc51f1b);
                }
            }), _0x25c3de(0x0, _0x31a4b7, 'cells', function () {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
            }), _0x25c3de(0x0, _0x31a4b7, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x24150e) {
                this['_elasticEn' + 'abled'] = _0x24150e, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x24150e ? 0xc8 : 0x0);
            }), _0x103085;
        }(_0x1354a5), _0x31686f = function (_0x8f3156) {
            function _0x47a29a(_0x5436e4) {
                _0x47a29a['__super']['call'](this, _0x5436e4), this['isVertical'] = ![];
            }
            return _0x25419d(_0x47a29a, 'laya.ui.HS' + 'lider', _0x8f3156), _0x47a29a;
        }(_0x2c1129), _0x28e932 = function (_0x33d5ce) {
            function _0x489f00() {
                this['_oldW'] = 0x0, this['_oldH'] = 0x0, _0x489f00['__super']['call'](this);
            }
            _0x25419d(_0x489f00, 'laya.ui.Sc' + 'aleBox', _0x33d5ce);
            var _0x17050a = _0x489f00['prototype'];
            return _0x17050a['onEnable'] = function () {
                _0x90a138['stage']['on']('resize', this, this['onResize']), this['onResize']();
            }, _0x17050a['onDisable'] = function () {
                _0x90a138['stage']['off']('resize', this, this['onResize']);
            }, _0x17050a['onResize'] = function () {
                if (this['width'] > 0x0 && this['height'] > 0x0) {
                    var _0x5ab43b = Math['min'](_0x90a138['stage']['width'] / this['_oldW'], _0x90a138['stage']['height'] / this['_oldH']);
                    _0x90a138['superSet'](_0x1354a5, this, 'width', _0x90a138['stage']['width']), _0x90a138['superSet'](_0x1354a5, this, 'height', _0x90a138['stage']['height']), this['scale'](_0x5ab43b, _0x5ab43b);
                }
            }, _0x25c3de(0x0, _0x17050a, 'width', _0x33d5ce['prototype']['_$get_widt' + 'h'], function (_0x1a5544) {
                _0x90a138['superSet'](_0x1354a5, this, 'width', _0x1a5544), this['_oldW'] = _0x1a5544;
            }), _0x25c3de(0x0, _0x17050a, 'height', _0x33d5ce['prototype']['_$get_heig' + 'ht'], function (_0x881d0c) {
                _0x90a138['superSet'](_0x1354a5, this, 'height', _0x881d0c), this['_oldH'] = _0x881d0c;
            }), _0x489f00;
        }(_0x1354a5), _0x9d6efb = function (_0x8400a4) {
            function _0x42e2ee(_0x1f619b, _0x4694ff) {
                this['_value'] = null, _0x4694ff === void 0x0 && (_0x4694ff = ''), _0x42e2ee['__super']['call'](this, _0x1f619b, _0x4694ff);
            }
            _0x25419d(_0x42e2ee, 'laya.ui.Ra' + 'dio', _0x8400a4);
            var _0x4c112f = _0x42e2ee['prototype'];
            return _0x4c112f['destroy'] = function (_0x3c9d70) {
                _0x3c9d70 === void 0x0 && (_0x3c9d70 = !![]), _0x8400a4['prototype']['destroy']['call'](this, _0x3c9d70), this['_value'] = null;
            }, _0x4c112f['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = ![], this['_autoSize'] = ![];
            }, _0x4c112f['initialize'] = function () {
                _0x8400a4['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on']('click', this, this['onClick']);
            }, _0x4c112f['onClick'] = function (_0x40cfe6) {
                this['selected'] = !![];
            }, _0x25c3de(0x0, _0x4c112f, 'value', function () {
                return this['_value'] != null ? this['_value'] : this['label'];
            }, function (_0x33457c) {
                this['_value'] = _0x33457c;
            }), _0x42e2ee;
        }(_0x2ba5d4), _0x1b91e7 = function (_0x23ffe1) {
            function _0x6595f3(_0x7bee8b, _0x21c1d7) {
                _0x21c1d7 === void 0x0 && (_0x21c1d7 = ''), _0x6595f3['__super']['call'](this, _0x7bee8b, _0x21c1d7);
            }
            _0x25419d(_0x6595f3, 'laya.ui.Ch' + 'eckBox', _0x23ffe1);
            var _0x2865b1 = _0x6595f3['prototype'];
            return _0x2865b1['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !![], this['_autoSize'] = ![];
            }, _0x2865b1['initialize'] = function () {
                _0x23ffe1['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
            }, _0x25c3de(0x0, _0x2865b1, 'dataSource', _0x23ffe1['prototype']['_$get_data' + 'Source'], function (_0x1d3c4b) {
                this['_dataSourc' + 'e'] = _0x1d3c4b;
                if (typeof _0x1d3c4b == 'boolean')
                    this['selected'] = _0x1d3c4b;
                else {
                    if (typeof _0x1d3c4b == 'string')
                        this['selected'] = _0x1d3c4b === 'true';
                    else
                        _0x90a138['superSet'](_0x2ba5d4, this, 'dataSource', _0x1d3c4b);
                }
            }), _0x6595f3;
        }(_0x2ba5d4), _0x287767 = function (_0x4e75ef) {
            function _0x4642a0(_0x3864bd, _0x3dffc0) {
                this['_valueArr'] = null, this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x4642a0['__super']['call'](this);
                if (_0x3864bd)
                    this['skin'] = _0x3864bd;
                if (_0x3dffc0)
                    this['sheet'] = _0x3dffc0;
            }
            _0x25419d(_0x4642a0, 'laya.ui.Fo' + 'ntClip', _0x4e75ef);
            var _0x357f76 = _0x4642a0['prototype'];
            return _0x357f76['createChil' + 'dren'] = function () {
                this['_bitmap'] = new _0x243845(), this['on']('loaded', this, this['_onClipLoa' + 'ded']);
            }, _0x357f76['_onClipLoa' + 'ded'] = function () {
                this['callLater'](this['changeValu' + 'e']);
            }, _0x357f76['changeValu' + 'e'] = function () {
                if (!this['_sources'])
                    return;
                if (!this['_valueArr'])
                    return;
                this['graphics']['clear'](!![]);
                var _0x2d50ee;
                _0x2d50ee = this['_sources'][0x0];
                if (!_0x2d50ee)
                    return;
                var _0x391ba5 = this['_direction'] === 'horizontal';
                _0x391ba5 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x2d50ee['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x2d50ee['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x2d50ee['sourceWidt' + 'h'], this['_wordsH'] = (_0x2d50ee['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                ;
                var _0x3caf69 = 0x0;
                if (this['_width'])
                    switch (this['_align']) {
                    case 'center':
                        _0x3caf69 = 0.5 * (this['_width'] - this['_wordsW']);
                        break;
                    case 'right':
                        _0x3caf69 = this['_width'] - this['_wordsW'];
                        break;
                    default:
                        _0x3caf69 = 0x0;
                    }
                for (var _0x439a2d = 0x0, _0xd8e96d = this['_valueArr']['length']; _0x439a2d < _0xd8e96d; _0x439a2d++) {
                    var _0x2a91da = this['_indexMap'][this['_valueArr']['charAt'](_0x439a2d)];
                    if (!this['sources'][_0x2a91da])
                        continue;
                    _0x2d50ee = this['sources'][_0x2a91da];
                    if (_0x391ba5)
                        this['graphics']['drawImage'](_0x2d50ee, _0x3caf69 + _0x439a2d * (_0x2d50ee['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x2d50ee['sourceWidt' + 'h'], _0x2d50ee['sourceHeig' + 'ht']);
                    else
                        this['graphics']['drawImage'](_0x2d50ee, 0x0 + _0x3caf69, _0x439a2d * (_0x2d50ee['sourceHeig' + 'ht'] + this['spaceY']), _0x2d50ee['sourceWidt' + 'h'], _0x2d50ee['sourceHeig' + 'ht']);
                }
                !this['_width'] && (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), !this['_height'] && (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
            }, _0x357f76['measureWid' + 'th'] = function () {
                return this['_wordsW'];
            }, _0x357f76['measureHei' + 'ght'] = function () {
                return this['_wordsH'];
            }, _0x357f76['destroy'] = function (_0x33b136) {
                _0x33b136 === void 0x0 && (_0x33b136 = !![]), this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!![]), this['removeSelf'](), this['off']('loaded', this, this['_onClipLoa' + 'ded']), _0x4e75ef['prototype']['destroy']['call'](this, _0x33b136);
            }, _0x25c3de(0x0, _0x357f76, 'sheet', function () {
                return this['_sheet'];
            }, function (_0x26fa97) {
                _0x26fa97 += '', this['_sheet'] = _0x26fa97;
                var _0x247545 = _0x26fa97['split']('\x20');
                this['_clipX'] = String(_0x247545[0x0])['length'], this['clipY'] = _0x247545['length'], this['_indexMap'] = {};
                for (var _0x4e010b = 0x0; _0x4e010b < this['_clipY']; _0x4e010b++) {
                    var _0x5a4be3 = _0x247545[_0x4e010b]['split']('');
                    for (var _0x38b18c = 0x0, _0x28610d = _0x5a4be3['length']; _0x38b18c < _0x28610d; _0x38b18c++) {
                        this['_indexMap'][_0x5a4be3[_0x38b18c]] = _0x4e010b * this['_clipX'] + _0x38b18c;
                    }
                }
            }), _0x25c3de(0x0, _0x357f76, 'height', _0x4e75ef['prototype']['_$get_heig' + 'ht'], function (_0x512879) {
                _0x90a138['superSet'](_0x5a1d54, this, 'height', _0x512879), this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'direction', function () {
                return this['_direction'];
            }, function (_0x135c55) {
                this['_direction'] = _0x135c55, this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'value', function () {
                if (!this['_valueArr'])
                    return '';
                return this['_valueArr'];
            }, function (_0x3bba20) {
                _0x3bba20 += '', this['_valueArr'] = _0x3bba20, this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'width', _0x4e75ef['prototype']['_$get_widt' + 'h'], function (_0x57600c) {
                _0x90a138['superSet'](_0x5a1d54, this, 'width', _0x57600c), this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x2614e0) {
                this['_spaceX'] = _0x2614e0;
                if (this['_direction'] === 'horizontal')
                    this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x23a695) {
                this['_spaceY'] = _0x23a695;
                if (!(this['_direction'] === 'horizontal'))
                    this['callLater'](this['changeValu' + 'e']);
            }), _0x25c3de(0x0, _0x357f76, 'align', function () {
                return this['_align'];
            }, function (_0x2d8565) {
                this['_align'] = _0x2d8565, this['callLater'](this['changeValu' + 'e']);
            }), _0x4642a0;
        }(_0x5a1d54), _0x22b75e = function (_0x6ccdd6) {
            function _0x22b89e() {
                _0x22b89e['__super']['call'](this);
                ;
            }
            _0x25419d(_0x22b89e, 'laya.ui.Ta' + 'b', _0x6ccdd6);
            var _0x1af82c = _0x22b89e['prototype'];
            return _0x1af82c['createItem'] = function (_0x93dd6f, _0x24f308) {
                return new _0x2ba5d4(_0x93dd6f, _0x24f308);
            }, _0x22b89e;
        }(_0x519f21), _0x287afb = function (_0x466abd) {
            function _0x38f14f() {
                _0x38f14f['__super']['call'](this);
                ;
            }
            _0x25419d(_0x38f14f, 'laya.ui.Ra' + 'dioGroup', _0x466abd);
            var _0x323ca5 = _0x38f14f['prototype'];
            return _0x323ca5['createItem'] = function (_0x1533b9, _0x1f604a) {
                return new _0x9d6efb(_0x1533b9, _0x1f604a);
            }, _0x38f14f;
        }(_0x519f21), _0x4587af = function (_0x2786e1) {
            function _0x527530() {
                _0x527530['__super']['call'](this);
                ;
            }
            _0x25419d(_0x527530, 'laya.ui.HB' + 'ox', _0x2786e1);
            var _0x4064f3 = _0x527530['prototype'];
            return _0x4064f3['sortItem'] = function (_0x4ec83d) {
                if (_0x4ec83d)
                    _0x4ec83d['sort'](function (_0x23fd1e, _0x1db9b3) {
                        return _0x23fd1e['x'] - _0x1db9b3['x'];
                    });
            }, _0x4064f3['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = ![];
                var _0x590793 = [], _0x381ddd = 0x0;
                for (var _0x23d05a = 0x0, _0x521d77 = this['numChildre' + 'n']; _0x23d05a < _0x521d77; _0x23d05a++) {
                    var _0x14914d = this['getChildAt'](_0x23d05a);
                    _0x14914d && (_0x590793['push'](_0x14914d), _0x381ddd = this['_height'] ? this['_height'] : Math['max'](_0x381ddd, _0x14914d['height'] * _0x14914d['scaleY']));
                }
                this['sortItem'](_0x590793);
                var _0x9cb0b9 = 0x0;
                for (_0x23d05a = 0x0, _0x521d77 = _0x590793['length']; _0x23d05a < _0x521d77; _0x23d05a++) {
                    _0x14914d = _0x590793[_0x23d05a], _0x14914d['x'] = _0x9cb0b9, _0x9cb0b9 += _0x14914d['width'] * _0x14914d['scaleX'] + this['_space'];
                    if (this['_align'] == 'top')
                        _0x14914d['y'] = 0x0;
                    else {
                        if (this['_align'] == 'middle')
                            _0x14914d['y'] = (_0x381ddd - _0x14914d['height'] * _0x14914d['scaleY']) * 0.5;
                        else
                            this['_align'] == 'bottom' && (_0x14914d['y'] = _0x381ddd - _0x14914d['height'] * _0x14914d['scaleY']);
                    }
                }
                this['_sizeChang' + 'ed']();
            }, _0x25c3de(0x0, _0x4064f3, 'height', _0x2786e1['prototype']['_$get_heig' + 'ht'], function (_0x5dfa1f) {
                this['_height'] != _0x5dfa1f && (_0x90a138['superSet'](_0x20809d, this, 'height', _0x5dfa1f), this['callLater'](this['changeItem' + 's']));
            }), _0x527530['NONE'] = 'none', _0x527530['TOP'] = 'top', _0x527530['MIDDLE'] = 'middle', _0x527530['BOTTOM'] = 'bottom', _0x527530;
        }(_0x20809d), _0x5eae6f = function (_0x3118df) {
            function _0x4233fd(_0x2da69b) {
                this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, _0x2da69b === void 0x0 && (_0x2da69b = ''), _0x4233fd['__super']['call'](this, _0x2da69b), this['on']('change', this, this['_onTextCha' + 'nge']);
            }
            _0x25419d(_0x4233fd, 'laya.ui.Te' + 'xtArea', _0x3118df);
            var _0x479eac = _0x4233fd['prototype'];
            return _0x479eac['_onTextCha' + 'nge'] = function () {
                this['callLater'](this['changeScro' + 'll']);
            }, _0x479eac['destroy'] = function (_0x102685) {
                _0x102685 === void 0x0 && (_0x102685 = !![]), _0x3118df['prototype']['destroy']['call'](this, _0x102685), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null;
            }, _0x479eac['initialize'] = function () {
                this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !![], this['multiline'] = !![];
            }, _0x479eac['onVBarChan' + 'ged'] = function (_0x151392) {
                this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
            }, _0x479eac['onHBarChan' + 'ged'] = function (_0x5b932b) {
                this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
            }, _0x479eac['changeScro' + 'll'] = function () {
                var _0x4e2590 = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x411f2d = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x44cb75 = _0x4e2590 ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x1d5b4e = _0x411f2d ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x588dce = this['_tf']['padding'] || _0xb0c2d5['labelPaddi' + 'ng'];
                this['_tf']['width'] = _0x44cb75, this['_tf']['height'] = _0x1d5b4e, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x588dce[0x2], this['_vScrollBa' + 'r']['y'] = _0x588dce[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x411f2d ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x588dce[0x1] - _0x588dce[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x1d5b4e / Math['max'](this['_tf']['textHeight'], _0x1d5b4e), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x4e2590), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x588dce[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x588dce[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x4e2590 ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x588dce[0x0] - _0x588dce[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](_0x44cb75 * 0.033, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x44cb75 / Math['max'](this['_tf']['textWidth'], _0x44cb75), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x411f2d);
            }, _0x479eac['scrollTo'] = function (_0xfc8ff4) {
                this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0xfc8ff4;
            }, _0x25c3de(0x0, _0x479eac, 'scrollY', function () {
                return this['_tf']['scrollY'];
            }), _0x25c3de(0x0, _0x479eac, 'width', _0x3118df['prototype']['_$get_widt' + 'h'], function (_0x6ed1e8) {
                _0x90a138['superSet'](_0x197dce, this, 'width', _0x6ed1e8), this['callLater'](this['changeScro' + 'll']);
            }), _0x25c3de(0x0, _0x479eac, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x25c3de(0x0, _0x479eac, 'height', _0x3118df['prototype']['_$get_heig' + 'ht'], function (_0x28b644) {
                _0x90a138['superSet'](_0x197dce, this, 'height', _0x28b644), this['callLater'](this['changeScro' + 'll']);
            }), _0x25c3de(0x0, _0x479eac, 'maxScrollX', function () {
                return this['_tf']['maxScrollX'];
            }), _0x25c3de(0x0, _0x479eac, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x1acd4f) {
                this['_vScrollBa' + 'r'] == null && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x578472()), this['_vScrollBa' + 'r']['on']('change', this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x1acd4f;
            }), _0x25c3de(0x0, _0x479eac, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x5a90a1) {
                this['_hScrollBa' + 'r'] == null && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x30bc63()), this['_hScrollBa' + 'r']['on']('change', this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = ![], this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x5a90a1;
            }), _0x25c3de(0x0, _0x479eac, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x25c3de(0x0, _0x479eac, 'maxScrollY', function () {
                return this['_tf']['maxScrollY'];
            }), _0x25c3de(0x0, _0x479eac, 'scrollX', function () {
                return this['_tf']['scrollX'];
            }), _0x4233fd;
        }(_0x197dce), _0x5050ef = function (_0x4b0417) {
            function _0x56e83f() {
                _0x56e83f['__super']['call'](this);
                ;
            }
            _0x25419d(_0x56e83f, 'laya.ui.VB' + 'ox', _0x4b0417);
            var _0x562008 = _0x56e83f['prototype'];
            return _0x562008['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = ![];
                var _0x2e818c = [], _0x4afe54 = 0x0;
                for (var _0x4f4e70 = 0x0, _0x167ef7 = this['numChildre' + 'n']; _0x4f4e70 < _0x167ef7; _0x4f4e70++) {
                    var _0x49847b = this['getChildAt'](_0x4f4e70);
                    _0x49847b && (_0x2e818c['push'](_0x49847b), _0x4afe54 = this['_width'] ? this['_width'] : Math['max'](_0x4afe54, _0x49847b['width'] * _0x49847b['scaleX']));
                }
                this['sortItem'](_0x2e818c);
                var _0x3b3259 = 0x0;
                for (_0x4f4e70 = 0x0, _0x167ef7 = _0x2e818c['length']; _0x4f4e70 < _0x167ef7; _0x4f4e70++) {
                    _0x49847b = _0x2e818c[_0x4f4e70], _0x49847b['y'] = _0x3b3259, _0x3b3259 += _0x49847b['height'] * _0x49847b['scaleY'] + this['_space'];
                    if (this['_align'] == 'left')
                        _0x49847b['x'] = 0x0;
                    else {
                        if (this['_align'] == 'center')
                            _0x49847b['x'] = (_0x4afe54 - _0x49847b['width'] * _0x49847b['scaleX']) * 0.5;
                        else
                            this['_align'] == 'right' && (_0x49847b['x'] = _0x4afe54 - _0x49847b['width'] * _0x49847b['scaleX']);
                    }
                }
                this['_sizeChang' + 'ed']();
            }, _0x25c3de(0x0, _0x562008, 'width', _0x4b0417['prototype']['_$get_widt' + 'h'], function (_0x1c1c38) {
                this['_width'] != _0x1c1c38 && (_0x90a138['superSet'](_0x20809d, this, 'width', _0x1c1c38), this['callLater'](this['changeItem' + 's']));
            }), _0x56e83f['NONE'] = 'none', _0x56e83f['LEFT'] = 'left', _0x56e83f['CENTER'] = 'center', _0x56e83f['RIGHT'] = 'right', _0x56e83f;
        }(_0x20809d);
    _0x90a138['__init']([_0x5c6a75]);
}(window, document, Laya));