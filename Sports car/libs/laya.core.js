var Laya = window['Laya'] = function (_0x5da5df, _0x559b4e) {
    var _0x4c2018 = {
        '__internals': [],
        '__packages': {},
        '__classmap': {
            'Object': Object,
            'Function': Function,
            'Array': Array,
            'String': String
        },
        '__sysClass': {
            'object': 'Object',
            'array': 'Array',
            'string': 'String',
            'dictionary': 'Dictionary'
        },
        '__propun': {
            'writable': !0x0,
            'enumerable': !0x1,
            'configurable': !0x0
        },
        '__presubstr': String['prototype']['substr'],
        '__substr': function (_0x148e27, _0x2e1b7d) {
            return 0x1 == arguments['length'] ? _0x4c2018['__presubst' + 'r']['call'](this, _0x148e27) : _0x4c2018['__presubst' + 'r']['call'](this, _0x148e27, _0x2e1b7d > 0x0 ? _0x2e1b7d : this['length'] + _0x2e1b7d);
        },
        '__init': function (_0x5a4e72) {
            _0x5a4e72['forEach'](function (_0x1e63f8) {
                _0x1e63f8['__init$'] && _0x1e63f8['__init$']();
            });
        },
        '__isClass': function (_0x4122c0) {
            return _0x4122c0 && (_0x4122c0['__isclass'] || _0x4122c0 == Object || _0x4122c0 == String || _0x4122c0 == Array);
        },
        '__newvec': function (_0x38d225, _0x1e9d6a) {
            var _0x10568c = [];
            _0x10568c['length'] = _0x38d225;
            for (var _0x1ac782 = 0x0; _0x38d225 > _0x1ac782; _0x1ac782++)
                _0x10568c[_0x1ac782] = _0x1e9d6a;
            return _0x10568c;
        },
        '__extend': function (_0x240e55, _0x25ab33) {
            function _0x25935f() {
                _0x4c2018['un'](this, 'constructo' + 'r', _0x240e55);
            }
            for (var _0x165577 in _0x25ab33)
                if (_0x25ab33['hasOwnProp' + 'erty'](_0x165577)) {
                    var _0x48c4a4 = Object['getOwnProp' + 'ertyDescri' + 'ptor'](_0x25ab33, _0x165577), _0x50ef34 = _0x48c4a4['get'], _0x2084ba = _0x48c4a4['set'];
                    _0x50ef34 || _0x2084ba ? _0x50ef34 && _0x2084ba ? Object['defineProp' + 'erty'](_0x240e55, _0x165577, _0x48c4a4) : (_0x50ef34 && Object['defineProp' + 'erty'](_0x240e55, _0x165577, _0x50ef34), _0x2084ba && Object['defineProp' + 'erty'](_0x240e55, _0x165577, _0x2084ba)) : _0x240e55[_0x165577] = _0x25ab33[_0x165577];
                }
            _0x25935f['prototype'] = _0x25ab33['prototype'], _0x240e55['prototype'] = new _0x25935f(), _0x4c2018['un'](_0x240e55['prototype'], '__imps', _0x4c2018['__copy']({}, _0x25ab33['prototype']['__imps']));
        },
        '__copy': function (_0x346e05, _0x1291ca) {
            if (!_0x1291ca)
                return null;
            _0x346e05 = _0x346e05 || {};
            for (var _0x47067a in _0x1291ca)
                _0x346e05[_0x47067a] = _0x1291ca[_0x47067a];
            return _0x346e05;
        },
        '__package': function (_0x2e8e91, _0x317c8d) {
            if (!_0x4c2018['__packages'][_0x2e8e91]) {
                _0x4c2018['__packages'][_0x2e8e91] = !0x0;
                var _0xcb37a = _0x5da5df, _0x497555 = _0x2e8e91['split']('.');
                if (_0x497555['length'] > 0x1)
                    for (var _0x4120d7 = 0x0, _0x31d51d = _0x497555['length'] - 0x1; _0x31d51d > _0x4120d7; _0x4120d7++) {
                        var _0x4cbdd1 = _0xcb37a[_0x497555[_0x4120d7]];
                        _0xcb37a = _0x4cbdd1 ? _0x4cbdd1 : _0xcb37a[_0x497555[_0x4120d7]] = {};
                    }
                _0xcb37a[_0x497555[_0x497555['length'] - 0x1]] || (_0xcb37a[_0x497555[_0x497555['length'] - 0x1]] = _0x317c8d || {});
            }
        },
        '__hasOwnProperty': function (_0x36f136, _0x388bda) {
            function _0x1db3e9(_0x337be9, _0x137ee7) {
                if (Object['hasOwnProp' + 'erty']['call'](_0x137ee7['prototype'], _0x337be9))
                    return !0x0;
                var _0x1b37f2 = _0x137ee7['prototype']['__super'];
                return null == _0x1b37f2 ? null : _0x1db3e9(_0x337be9, _0x1b37f2);
            }
            return _0x388bda = _0x388bda || this, Object['hasOwnProp' + 'erty']['call'](_0x388bda, _0x36f136) || _0x1db3e9(_0x36f136, _0x388bda['__class']);
        },
        '__typeof': function (_0x5a3f98, _0x4ed158) {
            if (!_0x5a3f98 || !_0x4ed158)
                return !0x1;
            if (_0x4ed158 === String)
                return 'string' == typeof _0x5a3f98;
            if (_0x4ed158 === Number)
                return 'number' == typeof _0x5a3f98;
            if (_0x4ed158['__interfac' + 'e__'])
                _0x4ed158 = _0x4ed158['__interfac' + 'e__'];
            else {
                if ('string' != typeof _0x4ed158)
                    return _0x5a3f98 instanceof _0x4ed158;
            }
            return _0x5a3f98['__imps'] && _0x5a3f98['__imps'][_0x4ed158] || _0x5a3f98['__class'] == _0x4ed158;
        },
        '__as': function (_0x26d276, _0x390bb4) {
            return this['__typeof'](_0x26d276, _0x390bb4) ? _0x26d276 : null;
        },
        '__int': function (_0x1f59fd) {
            return _0x1f59fd ? parseInt(_0x1f59fd) : 0x0;
        },
        'interface': function (_0x5a7a7d, _0x370048) {
            _0x4c2018['__package'](_0x5a7a7d, {});
            var _0x34bb31 = _0x4c2018['__internal' + 's'], _0x39dd12 = _0x34bb31[_0x5a7a7d] = _0x34bb31[_0x5a7a7d] || { 'self': _0x5a7a7d };
            if (_0x370048) {
                var _0x3a92ae = _0x370048['split'](',');
                _0x39dd12['extend'] = [];
                for (var _0x876451 = 0x0; _0x876451 < _0x3a92ae['length']; _0x876451++) {
                    var _0x185126 = _0x3a92ae[_0x876451];
                    _0x34bb31[_0x185126] = _0x34bb31[_0x185126] || { 'self': _0x185126 }, _0x39dd12['extend']['push'](_0x34bb31[_0x185126]);
                }
            }
            for (var _0x487098 = _0x5da5df, _0x58c6c7 = _0x5a7a7d['split']('.'), _0x876451 = 0x0; _0x876451 < _0x58c6c7['length'] - 0x1; _0x876451++)
                _0x487098 = _0x487098[_0x58c6c7[_0x876451]];
            _0x487098[_0x58c6c7[_0x58c6c7['length'] - 0x1]] = { '__interface__': _0x5a7a7d };
        },
        'class': function (_0x5f19f0, _0x31afc9, _0x264d3b, _0x4bbc4e) {
            if (_0x264d3b && _0x4c2018['__extend'](_0x5f19f0, _0x264d3b), _0x31afc9) {
                if (_0x4c2018['__package'](_0x31afc9, _0x5f19f0), _0x4c2018['__classmap'][_0x31afc9] = _0x5f19f0, _0x31afc9['indexOf']('.') > 0x0) {
                    if (0x0 == _0x31afc9['indexOf']('laya.')) {
                        var _0x46eda6 = _0x31afc9['split']('.');
                        _0x4bbc4e = _0x4bbc4e || _0x46eda6[_0x46eda6['length'] - 0x1], _0x4c2018[_0x4bbc4e] && console['log']('Warning!,t' + 'his\x20class[' + _0x4bbc4e + (']\x20already\x20' + 'exist:'), _0x4c2018[_0x4bbc4e]), _0x4c2018[_0x4bbc4e] = _0x5f19f0;
                    }
                } else
                    'Main' == _0x31afc9 ? _0x5da5df['Main'] = _0x5f19f0 : (_0x4c2018[_0x31afc9] && console['log']('Error!,thi' + 's\x20class[' + _0x31afc9 + (']\x20already\x20' + 'exist:'), _0x4c2018[_0x31afc9]), _0x4c2018[_0x31afc9] = _0x5f19f0);
            }
            var _0x2c8167 = _0x4c2018['un'], _0x1f9556 = _0x5f19f0['prototype'];
            _0x2c8167(_0x1f9556, 'hasOwnProp' + 'erty', _0x4c2018['__hasOwnPr' + 'operty']), _0x2c8167(_0x1f9556, '__class', _0x5f19f0), _0x2c8167(_0x1f9556, '__super', _0x264d3b), _0x2c8167(_0x1f9556, '__classNam' + 'e', _0x31afc9), _0x2c8167(_0x5f19f0, '__super', _0x264d3b), _0x2c8167(_0x5f19f0, '__classNam' + 'e', _0x31afc9), _0x2c8167(_0x5f19f0, '__isclass', !0x0), _0x2c8167(_0x5f19f0, 'super', function (_0x1afa6f) {
                this['__super']['call'](_0x1afa6f);
            });
        },
        'imps': function (_0x520b01, _0x5c72a6) {
            function _0x449abd(_0x3f0c12) {
                var _0x26a4c7, _0x26bc4b;
                if ((_0x26a4c7 = _0x4c2018['__internal' + 's'][_0x3f0c12]) && (_0x56b3e7[_0x3f0c12] = !0x0, _0x26bc4b = _0x26a4c7['extend'])) {
                    for (var _0x1a3244 = 0x0; _0x1a3244 < _0x26bc4b['length']; _0x1a3244++)
                        _0x449abd(_0x26bc4b[_0x1a3244]['self']);
                }
            }
            if (!_0x5c72a6)
                return null;
            var _0x56b3e7 = _0x520b01['__imps'] || _0x4c2018['un'](_0x520b01, '__imps', {});
            for (var _0x315368 in _0x5c72a6)
                _0x449abd(_0x315368);
        },
        'superSet': function (_0x28b799, _0x461241, _0x42e5eb, _0x16b3b1) {
            var _0x2ad466 = _0x28b799['prototype']['_$set_' + _0x42e5eb];
            _0x2ad466 && _0x2ad466['call'](_0x461241, _0x16b3b1);
        },
        'superGet': function (_0x53c606, _0x473ab7, _0x499161) {
            var _0x5293b5 = _0x53c606['prototype']['_$get_' + _0x499161];
            return _0x5293b5 ? _0x5293b5['call'](_0x473ab7) : null;
        },
        'getset': function (_0x19f5ec, _0x2ea207, _0x1e8fdd, _0x3d49f1, _0xa2ae8) {
            _0x19f5ec ? (_0x3d49f1 && (_0x2ea207['_$GET_' + _0x1e8fdd] = _0x3d49f1), _0xa2ae8 && (_0x2ea207['_$SET_' + _0x1e8fdd] = _0xa2ae8)) : (_0x3d49f1 && _0x4c2018['un'](_0x2ea207, '_$get_' + _0x1e8fdd, _0x3d49f1), _0xa2ae8 && _0x4c2018['un'](_0x2ea207, '_$set_' + _0x1e8fdd, _0xa2ae8)), _0x3d49f1 && _0xa2ae8 ? Object['defineProp' + 'erty'](_0x2ea207, _0x1e8fdd, {
                'get': _0x3d49f1,
                'set': _0xa2ae8,
                'enumerable': !0x1,
                'configurable': !0x0
            }) : (_0x3d49f1 && Object['defineProp' + 'erty'](_0x2ea207, _0x1e8fdd, {
                'get': _0x3d49f1,
                'enumerable': !0x1,
                'configurable': !0x0
            }), _0xa2ae8 && Object['defineProp' + 'erty'](_0x2ea207, _0x1e8fdd, {
                'set': _0xa2ae8,
                'enumerable': !0x1,
                'configurable': !0x0
            }));
        },
        'static': function (_0x45e9b4, _0x3fb084) {
            function _0x29d3c4() {
                var _0x1d032c = _0x3fb084[_0x2237c7], _0x3fe28d = _0x3fb084[_0x2237c7 + 0x1];
                Object['defineProp' + 'erty'](_0x45e9b4, _0x1d032c, {
                    'get': function () {
                        return delete this[_0x1d032c], this[_0x1d032c] = _0x3fe28d['call'](this);
                    },
                    'set': function (_0x488927) {
                        delete this[_0x1d032c], this[_0x1d032c] = _0x488927;
                    },
                    'enumerable': !0x0,
                    'configurable': !0x0
                });
            }
            for (var _0x2237c7 = 0x0, _0x4b8645 = _0x3fb084['length']; _0x4b8645 > _0x2237c7; _0x2237c7 += 0x2)
                'length' == _0x3fb084[_0x2237c7] ? _0x45e9b4['length'] = _0x3fb084[_0x2237c7 + 0x1]['call'](_0x45e9b4) : _0x29d3c4();
        },
        'un': function (_0xfd0f32, _0x3ea2ed, _0x56f6a9) {
            return _0x56f6a9 || (_0x56f6a9 = _0xfd0f32[_0x3ea2ed]), _0x4c2018['__propun']['value'] = _0x56f6a9, Object['defineProp' + 'erty'](_0xfd0f32, _0x3ea2ed, _0x4c2018['__propun']), _0x56f6a9;
        },
        'uns': function (_0x1469ec, _0x35ec38) {
            _0x35ec38['forEach'](function (_0x166a4a) {
                _0x4c2018['un'](_0x1469ec, _0x166a4a);
            });
        }
    };
    return _0x5da5df['console'] = _0x5da5df['console'] || {
        'log': function () {
        }
    }, _0x5da5df['trace'] = _0x5da5df['console']['log'], Error['prototype']['throwError'] = function () {
        throw arguments;
    }, Object['defineProp' + 'erty'](Array['prototype'], 'fixed', { 'enumerable': !0x1 }), _0x4c2018;
}(window, document);
!function (_0xbdc100, _0x2ad2f5, _0x82dd10) {
    _0x82dd10['un'], _0x82dd10['uns'], _0x82dd10['static'], _0x82dd10['class'], _0x82dd10['getset'], _0x82dd10['__newvec'];
}(window, document, Laya), function (_0xd373d9, _0x4137d8, _0x34a895) {
    var _0x5043ef = (_0x34a895['un'], _0x34a895['uns'], _0x34a895['static']), _0x4621f4 = _0x34a895['class'], _0x71e09a = _0x34a895['getset'];
    _0x34a895['__newvec'], (_0x34a895['interface']('laya.runti' + 'me.IMarket'), _0x34a895['interface']('laya.filte' + 'rs.IFilter'), _0x34a895['interface']('laya.resou' + 'rce.IDispo' + 'se'), _0x34a895['interface']('laya.runti' + 'me.IPlatfo' + 'rm'), _0x34a895['interface']('laya.resou' + 'rce.IDestr' + 'oy'), _0x34a895['interface']('laya.runti' + 'me.ICPlatf' + 'ormClass'), _0x34a895['interface']('laya.resou' + 'rce.ICreat' + 'eResource'), _0x34a895['interface']('laya.runti' + 'me.IConchR' + 'enderObjec' + 't'), _0x34a895['interface']('laya.resou' + 'rce.ISingl' + 'etonElemen' + 't'), _0x34a895['interface']('laya.runti' + 'me.IPlatfo' + 'rmClass', 'IPlatform'));
    var _0x189459 = (function () {
            return _0x71e09a(0x1, _0x34a895, 'alertGloba' + 'lError', null, function (_0x189f79) {
                var _0x5c1804 = 0x0;
                _0x189f79 ? _0x2ad6c5['window']['onerror'] = function (_0xd92b8, _0x2a9b64, _0x1ebff6, _0x469983, _0x1ee586) {
                    _0x5c1804++ < 0x5 && _0x1ee586 && alert('出错啦，请把此信息截' + '图给研发商\x0a' + _0xd92b8 + '\x0a' + _0x1ee586['stack']);
                } : _0x2ad6c5['window']['onerror'] = null;
            }), _0x34a895['init'] = function (_0x4c06f7, _0x2915b8, _0x1374ac) {
                for (var _0x4ad0e6 = [], _0x1876ed = 0x2, _0x46b47e = arguments['length']; _0x46b47e > _0x1876ed; _0x1876ed++)
                    _0x4ad0e6['push'](arguments[_0x1876ed]);
                if (!_0x34a895['_isinit']) {
                    _0x34a895['_isinit'] = !0x0, ArrayBuffer['prototype']['slice'] || (ArrayBuffer['prototype']['slice'] = _0x34a895['_arrayBuff' + 'erSlice']), _0x2ad6c5['__init__'](), _0x4fec79['isConchApp'] || _0x3f4349['__init__'](), _0x34a895['systemTime' + 'r'] = new _0x2f73a1(!0x1), _0x34a895['startTimer'] = new _0x2f73a1(!0x1), _0x34a895['physicsTim' + 'er'] = new _0x2f73a1(!0x1), _0x34a895['updateTime' + 'r'] = new _0x2f73a1(!0x1), _0x34a895['lateTimer'] = new _0x2f73a1(!0x1), _0x34a895['timer'] = new _0x2f73a1(!0x1), _0x34a895['loader'] = new _0x571bfb(), _0x479696['__init__']();
                    for (var _0x4354af = !0x1, _0x1876ed = 0x0, _0x157fb9 = _0x4ad0e6['length']; _0x157fb9 > _0x1876ed; _0x1876ed++)
                        _0x4ad0e6[_0x1876ed] && _0x4ad0e6[_0x1876ed]['enable'] && (_0x4ad0e6[_0x1876ed]['enable'](), 'WebGL' == typeof _0x4ad0e6[_0x1876ed] && (_0x4354af = !0x0));
                    return _0x4fec79['isConchApp'] && (_0x4354af || laya['webgl']['WebGL']['enable'](), _0x552e50['enableNati' + 've']()), _0x58cc6b['beginCheck'](), _0x34a895['_currentSt' + 'age'] = _0x34a895['stage'] = new _0x5d2d7a(), _0x34a895['_getUrlPat' + 'h'](), _0x34a895['render'] = new _0x4fec79(0x0, 0x0), _0x34a895['stage']['size'](_0x4c06f7, _0x2915b8), _0xd373d9['stage'] = _0x34a895['stage'], _0x131d85['__init__'](), _0x51e35a['__init__'](), _0x1a2fe4['instance']['__init__'](_0x34a895['stage'], _0x4fec79['canvas']), _0xe66919['__init__'](), _0x273f4b['autoStopMu' + 'sic'] = !0x0, _0x4fec79['canvas'];
                }
            }, _0x34a895['_getUrlPat' + 'h'] = function () {
                var _0x33c266 = _0x2ad6c5['window']['location'], _0x537bbd = _0x33c266['pathname'];
                _0x537bbd = ':' == _0x537bbd['charAt'](0x2) ? _0x537bbd['substring'](0x1) : _0x537bbd, _0x4bf8e9['rootPath'] = _0x4bf8e9['basePath'] = _0x4bf8e9['getPath']('file:' == _0x33c266['protocol'] ? _0x537bbd : _0x33c266['protocol'] + '//' + _0x33c266['host'] + _0x33c266['pathname']);
            }, _0x34a895['_arrayBuff' + 'erSlice'] = function (_0x3fb66, _0x2d83ca) {
                var _0x21f719 = this, _0x2489e9 = new Uint8Array(_0x21f719, _0x3fb66, _0x2d83ca - _0x3fb66), _0x4646b2 = new Uint8Array(_0x2489e9['length']);
                return _0x4646b2['set'](_0x2489e9), _0x4646b2['buffer'];
            }, _0x34a895['_runScript'] = function (_0x442f3e) {
                return _0x2ad6c5['window'][_0x34a895['_evcode']](_0x442f3e);
            }, _0x34a895['enableDebu' + 'gPanel'] = function (_0x3ead1c) {
                if (void 0x0 === _0x3ead1c && (_0x3ead1c = 'libs/laya.' + 'debugtool.' + 'js'), _0x34a895['DebugPanel'])
                    _0x34a895['DebugPanel']['enable']();
                else {
                    var _0x553e75 = _0x2ad6c5['createElem' + 'ent']('script');
                    _0x553e75['onload'] = function () {
                        _0x34a895['DebugPanel']['enable']();
                    }, _0x553e75['src'] = _0x3ead1c, _0x2ad6c5['document']['body']['appendChil' + 'd'](_0x553e75);
                }
            }, _0x34a895['stage'] = null, _0x34a895['systemTime' + 'r'] = null, _0x34a895['startTimer'] = null, _0x34a895['physicsTim' + 'er'] = null, _0x34a895['updateTime' + 'r'] = null, _0x34a895['lateTimer'] = null, _0x34a895['timer'] = null, _0x34a895['loader'] = null, _0x34a895['version'] = '2.0.0', _0x34a895['render'] = null, _0x34a895['_currentSt' + 'age'] = null, _0x34a895['_isinit'] = !0x1, _0x34a895['isWXOpenDa' + 'taContext'] = !0x1, _0x34a895['isWXPosMsg'] = !0x1, _0x5043ef(_0x34a895, [
                'conchMarke' + 't',
                function () {
                    return this['conchMarke' + 't'] = _0xd373d9['conch'] ? conchMarket : null;
                },
                'PlatformCl' + 'ass',
                function () {
                    return this['PlatformCl' + 'ass'] = _0xd373d9['PlatformCl' + 'ass'];
                },
                '_evcode',
                function () {
                    return this['_evcode'] = 'eval';
                }
            ]), _0x34a895;
        }(), function () {
            function _0x41709f(_0x520501) {
                if (this['arrColor'] = [], null == _0x520501)
                    return this['strColor'] = '#00000000', this['numColor'] = 0x0, void (this['arrColor'] = [
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ]);
                var _0x39fd75 = 0x0, _0x15496e = 0x0, _0x41d339 = 0x0;
                if ('string' == typeof _0x520501) {
                    if (_0x520501['indexOf']('rgba(') >= 0x0 || _0x520501['indexOf']('rgb(') >= 0x0) {
                        var _0x213d8f = _0x520501, _0x4690ef = 0x0, _0x5ab5c0 = 0x0;
                        for (_0x4690ef = _0x213d8f['indexOf']('('), _0x5ab5c0 = _0x213d8f['indexOf'](')'), _0x213d8f = _0x213d8f['substring'](_0x4690ef + 0x1, _0x5ab5c0), this['arrColor'] = _0x213d8f['split'](','), _0x15496e = this['arrColor']['length'], _0x39fd75 = 0x0; _0x15496e > _0x39fd75; _0x39fd75++)
                            this['arrColor'][_0x39fd75] = parseFloat(this['arrColor'][_0x39fd75]), 0x3 > _0x39fd75 && (this['arrColor'][_0x39fd75] = Math['round'](this['arrColor'][_0x39fd75]));
                        _0x41d339 = 0x4 == this['arrColor']['length'] ? 0x100 * (0x100 * (0x100 * this['arrColor'][0x0] + this['arrColor'][0x1]) + this['arrColor'][0x2]) + Math['round'](0xff * this['arrColor'][0x3]) : 0x100 * (0x100 * this['arrColor'][0x0] + this['arrColor'][0x1]) + this['arrColor'][0x2], this['strColor'] = _0x520501;
                    } else {
                        if (this['strColor'] = _0x520501, '#' === _0x520501['charAt'](0x0) && (_0x520501 = _0x520501['substr'](0x1)), _0x15496e = _0x520501['length'], 0x3 === _0x15496e || 0x4 === _0x15496e) {
                            var _0x1d1c3a = '';
                            for (_0x39fd75 = 0x0; _0x15496e > _0x39fd75; _0x39fd75++)
                                _0x1d1c3a += _0x520501[_0x39fd75] + _0x520501[_0x39fd75];
                            _0x520501 = _0x1d1c3a;
                        }
                        _0x41d339 = parseInt(_0x520501, 0x10);
                    }
                } else
                    _0x41d339 = _0x520501, this['strColor'] = _0x3b78ce['toHexColor'](_0x41d339);
                this['strColor']['indexOf']('rgba') >= 0x0 || 0x9 === this['strColor']['length'] ? (this['arrColor'] = [
                    ((0xff000000 & _0x41d339) >>> 0x18) / 0xff,
                    ((0xff0000 & _0x41d339) >> 0x10) / 0xff,
                    ((0xff00 & _0x41d339) >> 0x8) / 0xff,
                    (0xff & _0x41d339) / 0xff
                ], this['numColor'] = (0xff000000 & _0x41d339) >>> 0x18 | (0xff0000 & _0x41d339) >> 0x8 | (0xff00 & _0x41d339) << 0x8 | (0xff & _0x41d339) << 0x18) : (this['arrColor'] = [
                    ((0xff0000 & _0x41d339) >> 0x10) / 0xff,
                    ((0xff00 & _0x41d339) >> 0x8) / 0xff,
                    (0xff & _0x41d339) / 0xff,
                    0x1
                ], this['numColor'] = 0xff000000 | (0xff0000 & _0x41d339) >> 0x10 | 0xff00 & _0x41d339 | (0xff & _0x41d339) << 0x10), this['arrColor']['__id'] = ++_0x41709f['_COLODID'];
            }
            return _0x4621f4(_0x41709f, 'laya.utils' + '.ColorUtil' + 's'), _0x41709f['_initDefau' + 'lt'] = function () {
                _0x41709f['_DEFAULT'] = {};
                for (var _0x1f4b03 in _0x41709f['_COLOR_MAP'])
                    _0x41709f['_SAVE'][_0x1f4b03] = _0x41709f['_DEFAULT'][_0x1f4b03] = new _0x41709f(_0x41709f['_COLOR_MAP'][_0x1f4b03]);
                return _0x41709f['_DEFAULT'];
            }, _0x41709f['_initSaveM' + 'ap'] = function () {
                _0x41709f['_SAVE_SIZE'] = 0x0, _0x41709f['_SAVE'] = {};
                for (var _0x257cef in _0x41709f['_DEFAULT'])
                    _0x41709f['_SAVE'][_0x257cef] = _0x41709f['_DEFAULT'][_0x257cef];
            }, _0x41709f['create'] = function (_0x1500aa) {
                var _0x370798 = _0x1500aa + '', _0x1aa576 = _0x41709f['_SAVE'][_0x370798];
                return null != _0x1aa576 ? _0x1aa576 : (_0x41709f['_SAVE_SIZE'] < 0x3e8 && _0x41709f['_initSaveM' + 'ap'](), _0x41709f['_SAVE'][_0x370798] = new _0x41709f(_0x1500aa));
            }, _0x41709f['_SAVE'] = {}, _0x41709f['_SAVE_SIZE'] = 0x0, _0x41709f['_COLOR_MAP'] = {
                'purple': '#800080',
                'orange': '#ffa500',
                'white': '#FFFFFF',
                'red': '#FF0000',
                'green': '#00FF00',
                'blue': '#0000FF',
                'black': '#000000',
                'yellow': '#FFFF00',
                'gray': '#808080'
            }, _0x41709f['_DEFAULT'] = _0x41709f['_initDefau' + 'lt'](), _0x41709f['_COLODID'] = 0x1, _0x41709f;
        }()), _0x39c04c = function () {
            function _0x1e903b() {
            }
            return _0x4621f4(_0x1e903b, 'laya.rende' + 'rs.LayaGLQ' + 'uickRunner'), _0x1e903b['__init__'] = function () {
                _0x1e903b['map'][0x203] = _0x1e903b['alpha_tran' + 'sform_draw' + 'LayaGL'], _0x1e903b['map'][0x201] = _0x1e903b['alpha_draw' + 'LayaGL'], _0x1e903b['map'][0x202] = _0x1e903b['transform_' + 'drawLayaGL'], _0x1e903b['map'][0x2002] = _0x1e903b['transform_' + 'drawNodes'], _0x1e903b['map'][0x103] = _0x1e903b['alpha_tran' + 'sform_draw' + 'Texture'], _0x1e903b['map'][0x101] = _0x1e903b['alpha_draw' + 'Texture'], _0x1e903b['map'][0x102] = _0x1e903b['transform_' + 'drawTextur' + 'e'], _0x1e903b['map'][0x2200] = _0x1e903b['drawLayaGL' + '_drawNodes'];
            }, _0x1e903b['transform_' + 'drawTextur' + 'e'] = function (_0x9f6a5, _0x5a29a4, _0xa21dad, _0x22aa89) {
                var _0x54b823 = (_0x9f6a5['_style'], _0x9f6a5['texture']);
                _0x5a29a4['saveTransf' + 'orm'](_0x1e903b['curMat']), _0x5a29a4['transformB' + 'yMatrix'](_0x9f6a5['transform'], _0xa21dad, _0x22aa89), _0x5a29a4['drawTextur' + 'e'](_0x54b823, -_0x9f6a5['pivotX'], -_0x9f6a5['pivotY'], _0x9f6a5['_width'] || _0x54b823['width'], _0x9f6a5['_height'] || _0x54b823['height']), _0x5a29a4['restoreTra' + 'nsform'](_0x1e903b['curMat']);
            }, _0x1e903b['alpha_draw' + 'Texture'] = function (_0x17514b, _0x1087f7, _0x4b01fe, _0x351495) {
                var _0x89e740 = _0x17514b['_style'], _0x1e3ab4 = NaN, _0x38373f = _0x17514b['texture'];
                if ((_0x1e3ab4 = _0x89e740['alpha']) > 0.01 || _0x17514b['_needRepai' + 'nt']()) {
                    var _0x691752 = _0x1087f7['globalAlph' + 'a'];
                    _0x1087f7['globalAlph' + 'a'] *= _0x1e3ab4, _0x1087f7['drawTextur' + 'e'](_0x38373f, _0x4b01fe - _0x89e740['pivotX'] + _0x38373f['offsetX'], _0x351495 - _0x89e740['pivotY'] + _0x38373f['offsetY'], _0x17514b['_width'] || _0x38373f['width'], _0x17514b['_height'] || _0x38373f['height']), _0x1087f7['globalAlph' + 'a'] = _0x691752;
                }
            }, _0x1e903b['alpha_tran' + 'sform_draw' + 'Texture'] = function (_0x51f5f1, _0x131d59, _0x5e0329, _0x3d7a6d) {
                var _0x4454c7 = _0x51f5f1['_style'], _0x5ac688 = NaN, _0x3f1697 = _0x51f5f1['texture'];
                if ((_0x5ac688 = _0x4454c7['alpha']) > 0.01 || _0x51f5f1['_needRepai' + 'nt']()) {
                    var _0x5ce706 = _0x131d59['globalAlph' + 'a'];
                    _0x131d59['globalAlph' + 'a'] *= _0x5ac688, _0x131d59['saveTransf' + 'orm'](_0x1e903b['curMat']), _0x131d59['transformB' + 'yMatrix'](_0x51f5f1['transform'], _0x5e0329, _0x3d7a6d), _0x131d59['drawTextur' + 'e'](_0x3f1697, -_0x4454c7['pivotX'] + _0x3f1697['offsetX'], -_0x4454c7['pivotY'] + _0x3f1697['offsetY'], _0x51f5f1['_width'] || _0x3f1697['width'], _0x51f5f1['_height'] || _0x3f1697['height']), _0x131d59['restoreTra' + 'nsform'](_0x1e903b['curMat']), _0x131d59['globalAlph' + 'a'] = _0x5ce706;
                }
            }, _0x1e903b['alpha_tran' + 'sform_draw' + 'LayaGL'] = function (_0x31428a, _0x2bbf22, _0x199340, _0x43fe7e) {
                var _0x5a9a96 = _0x31428a['_style'], _0x56c177 = NaN;
                if ((_0x56c177 = _0x5a9a96['alpha']) > 0.01 || _0x31428a['_needRepai' + 'nt']()) {
                    var _0x153296 = _0x2bbf22['globalAlph' + 'a'];
                    _0x2bbf22['globalAlph' + 'a'] *= _0x56c177, _0x2bbf22['saveTransf' + 'orm'](_0x1e903b['curMat']), _0x2bbf22['transformB' + 'yMatrix'](_0x31428a['transform'], _0x199340, _0x43fe7e), _0x31428a['_graphics'] && _0x31428a['_graphics']['_render'](_0x31428a, _0x2bbf22, -_0x5a9a96['pivotX'], -_0x5a9a96['pivotY']), _0x2bbf22['restoreTra' + 'nsform'](_0x1e903b['curMat']), _0x2bbf22['globalAlph' + 'a'] = _0x153296;
                }
            }, _0x1e903b['alpha_draw' + 'LayaGL'] = function (_0x460dca, _0xc79889, _0x31b436, _0x4c56dd) {
                var _0x22e7f5 = _0x460dca['_style'], _0x390292 = NaN;
                if ((_0x390292 = _0x22e7f5['alpha']) > 0.01 || _0x460dca['_needRepai' + 'nt']()) {
                    var _0x46977d = _0xc79889['globalAlph' + 'a'];
                    _0xc79889['globalAlph' + 'a'] *= _0x390292, _0x460dca['_graphics'] && _0x460dca['_graphics']['_render'](_0x460dca, _0xc79889, _0x31b436 - _0x22e7f5['pivotX'], _0x4c56dd - _0x22e7f5['pivotY']), _0xc79889['globalAlph' + 'a'] = _0x46977d;
                }
            }, _0x1e903b['transform_' + 'drawLayaGL'] = function (_0x582e84, _0x16674c, _0x660d77, _0xd2e8fa) {
                var _0x34bbb9 = _0x582e84['_style'];
                _0x16674c['saveTransf' + 'orm'](_0x1e903b['curMat']), _0x16674c['transformB' + 'yMatrix'](_0x582e84['transform'], _0x660d77, _0xd2e8fa), _0x582e84['_graphics'] && _0x582e84['_graphics']['_render'](_0x582e84, _0x16674c, -_0x34bbb9['pivotX'], -_0x34bbb9['pivotY']), _0x16674c['restoreTra' + 'nsform'](_0x1e903b['curMat']);
            }, _0x1e903b['transform_' + 'drawNodes'] = function (_0x892321, _0x3b3c4b, _0x220e01, _0x14e3c4) {
                var _0xd0388b = _0x892321['_getBit'](0x100) && _0x3b3c4b['drawCallOp' + 'timize'](!0x0), _0x5eac91 = _0x892321['_style'];
                _0x3b3c4b['saveTransf' + 'orm'](_0x1e903b['curMat']), _0x3b3c4b['transformB' + 'yMatrix'](_0x892321['transform'], _0x220e01, _0x14e3c4), _0x220e01 = -_0x5eac91['pivotX'], _0x14e3c4 = -_0x5eac91['pivotY'];
                var _0x8b002f, _0x17c43c = _0x892321['_children'], _0x27b6c3 = _0x17c43c['length'];
                if (_0x5eac91['viewport']) {
                    var _0x593f95 = _0x5eac91['viewport'], _0x3e7f0a = _0x593f95['x'], _0x1980c5 = _0x593f95['y'], _0x71f47 = _0x593f95['right'], _0x313956 = _0x593f95['bottom'], _0x30de06 = NaN, _0x36cea0 = NaN;
                    for (_0x3316eb = 0x0; _0x27b6c3 > _0x3316eb; ++_0x3316eb)
                        (_0x8b002f = _0x17c43c[_0x3316eb])['_visible'] && (_0x30de06 = _0x8b002f['_x']) < _0x71f47 && _0x30de06 + _0x8b002f['width'] > _0x3e7f0a && (_0x36cea0 = _0x8b002f['_y']) < _0x313956 && _0x36cea0 + _0x8b002f['height'] > _0x1980c5 && _0x8b002f['render'](_0x3b3c4b, _0x220e01, _0x14e3c4);
                } else {
                    for (var _0x3316eb = 0x0; _0x27b6c3 > _0x3316eb; ++_0x3316eb)
                        (_0x8b002f = _0x17c43c[_0x3316eb])['_visible'] && _0x8b002f['render'](_0x3b3c4b, _0x220e01, _0x14e3c4);
                }
                _0x3b3c4b['restoreTra' + 'nsform'](_0x1e903b['curMat']), _0xd0388b && _0x3b3c4b['drawCallOp' + 'timize'](!0x1);
            }, _0x1e903b['drawLayaGL' + '_drawNodes'] = function (_0x314b2e, _0x1f1e60, _0x1d0d7d, _0x3404a7) {
                var _0x5b1bb7 = _0x314b2e['_getBit'](0x100) && _0x1f1e60['drawCallOp' + 'timize'](!0x0), _0x103e46 = _0x314b2e['_style'];
                _0x1d0d7d -= _0x103e46['pivotX'], _0x3404a7 -= _0x103e46['pivotY'], _0x314b2e['_graphics'] && _0x314b2e['_graphics']['_render'](_0x314b2e, _0x1f1e60, _0x1d0d7d, _0x3404a7);
                var _0x2edfd0, _0x20cffe = _0x314b2e['_children'], _0x238c4a = _0x20cffe['length'];
                if (_0x103e46['viewport']) {
                    var _0xe3c821 = _0x103e46['viewport'], _0x5e8fe6 = _0xe3c821['x'], _0x35eb76 = _0xe3c821['y'], _0x54393c = _0xe3c821['right'], _0x1e6d76 = _0xe3c821['bottom'], _0x5d2a94 = NaN, _0x31d56f = NaN;
                    for (_0x11bccd = 0x0; _0x238c4a > _0x11bccd; ++_0x11bccd)
                        (_0x2edfd0 = _0x20cffe[_0x11bccd])['_visible'] && (_0x5d2a94 = _0x2edfd0['_x']) < _0x54393c && _0x5d2a94 + _0x2edfd0['width'] > _0x5e8fe6 && (_0x31d56f = _0x2edfd0['_y']) < _0x1e6d76 && _0x31d56f + _0x2edfd0['height'] > _0x35eb76 && _0x2edfd0['render'](_0x1f1e60, _0x1d0d7d, _0x3404a7);
                } else {
                    for (var _0x11bccd = 0x0; _0x238c4a > _0x11bccd; ++_0x11bccd)
                        (_0x2edfd0 = _0x20cffe[_0x11bccd])['_visible'] && _0x2edfd0['render'](_0x1f1e60, _0x1d0d7d, _0x3404a7);
                }
                _0x5b1bb7 && _0x1f1e60['drawCallOp' + 'timize'](!0x1);
            }, _0x1e903b['map'] = {}, _0x5043ef(_0x1e903b, [
                'curMat',
                function () {
                    return this['curMat'] = new _0x250bb7();
                }
            ]), _0x1e903b;
        }(), _0x43c415 = function () {
            function _0x2d8348() {
            }
            _0x4621f4(_0x2d8348, 'laya.displ' + 'ay.cmd.Dra' + 'wTextureCm' + 'd');
            var _0x1486f0 = _0x2d8348['prototype'];
            return _0x1486f0['recover'] = function () {
                this['texture']['_removeRef' + 'erence'](), this['texture'] = null, this['matrix'] = null, _0x2249dd['recover']('DrawTextur' + 'eCmd', this);
            }, _0x1486f0['run'] = function (_0x1925eb, _0x551ae0, _0xa315c3) {
                _0x1925eb['drawTextur' + 'eWithTrans' + 'form'](this['texture'], this['x'], this['y'], this['width'], this['height'], this['matrix'], _0x551ae0, _0xa315c3, this['alpha'], this['blendMode'], this['colorFlt']);
            }, _0x71e09a(0x0, _0x1486f0, 'cmdID', function () {
                return 'DrawTextur' + 'e';
            }), _0x2d8348['create'] = function (_0x1001a5, _0x54651f, _0x1b3266, _0x97d89d, _0x32b3f5, _0x229bbf, _0x591114, _0x1e28d9, _0x4166a3) {
                var _0x406b42 = _0x2249dd['getItemByC' + 'lass']('DrawTextur' + 'eCmd', _0x2d8348);
                return _0x406b42['texture'] = _0x1001a5, _0x1001a5['_addRefere' + 'nce'](), _0x406b42['x'] = _0x54651f, _0x406b42['y'] = _0x1b3266, _0x406b42['width'] = _0x97d89d, _0x406b42['height'] = _0x32b3f5, _0x406b42['matrix'] = _0x229bbf, _0x406b42['alpha'] = _0x591114, _0x406b42['color'] = _0x1e28d9, _0x406b42['blendMode'] = _0x4166a3, _0x1e28d9 && (_0x406b42['colorFlt'] = new _0x54b560(), _0x406b42['colorFlt']['setColor'](_0x1e28d9)), _0x406b42;
            }, _0x2d8348['ID'] = 'DrawTextur' + 'e', _0x2d8348;
        }(), _0x251b03 = function () {
            function _0x4c93c7(_0x443dc8, _0x337663) {
                void 0x0 === _0x443dc8 && (_0x443dc8 = 0x0), void 0x0 === _0x337663 && (_0x337663 = 0x0), this['x'] = _0x443dc8, this['y'] = _0x337663;
            }
            _0x4621f4(_0x4c93c7, 'laya.maths' + '.Point');
            var _0x545988 = _0x4c93c7['prototype'];
            return _0x545988['setTo'] = function (_0x2fb781, _0x3fe921) {
                return this['x'] = _0x2fb781, this['y'] = _0x3fe921, this;
            }, _0x545988['reset'] = function () {
                return this['x'] = this['y'] = 0x0, this;
            }, _0x545988['recover'] = function () {
                _0x2249dd['recover']('Point', this['reset']());
            }, _0x545988['distance'] = function (_0x8d2126, _0x33e579) {
                return Math['sqrt']((this['x'] - _0x8d2126) * (this['x'] - _0x8d2126) + (this['y'] - _0x33e579) * (this['y'] - _0x33e579));
            }, _0x545988['toString'] = function () {
                return this['x'] + ',' + this['y'];
            }, _0x545988['normalize'] = function () {
                var _0x346213 = Math['sqrt'](this['x'] * this['x'] + this['y'] * this['y']);
                if (_0x346213 > 0x0) {
                    var _0x53d72a = 0x1 / _0x346213;
                    this['x'] *= _0x53d72a, this['y'] *= _0x53d72a;
                }
            }, _0x545988['copy'] = function (_0xeb5b7a) {
                return this['setTo'](_0xeb5b7a['x'], _0xeb5b7a['y']);
            }, _0x4c93c7['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('Point', _0x4c93c7);
            }, _0x4c93c7['TEMP'] = new _0x4c93c7(), _0x4c93c7['EMPTY'] = new _0x4c93c7(), _0x4c93c7;
        }(), _0x3ab7ea = function () {
            function _0x4b9b10() {
                this['data'] = null;
            }
            _0x4621f4(_0x4b9b10, 'laya.filte' + 'rs.ColorFi' + 'lterAction');
            var _0x37d3e6 = _0x4b9b10['prototype'];
            return _0x37d3e6['apply'] = function (_0x488e7b) {
                var _0x22050d = _0x488e7b['canvas'], _0x392684 = _0x22050d['context'];
                if (0x0 == _0x22050d['width'] || 0x0 == _0x22050d['height'])
                    return _0x22050d;
                for (var _0x1b4756, _0x143afd = _0x392684['getImageDa' + 'ta'](0x0, 0x0, _0x22050d['width'], _0x22050d['height']), _0x202b78 = _0x143afd['data'], _0x3a8ffa = 0x0, _0x471b17 = _0x202b78['length']; _0x471b17 > _0x3a8ffa; _0x3a8ffa += 0x4)
                    _0x1b4756 = this['getColor'](_0x202b78[_0x3a8ffa], _0x202b78[_0x3a8ffa + 0x1], _0x202b78[_0x3a8ffa + 0x2], _0x202b78[_0x3a8ffa + 0x3]), 0x0 != _0x202b78[_0x3a8ffa + 0x3] && (_0x202b78[_0x3a8ffa] = _0x1b4756[0x0], _0x202b78[_0x3a8ffa + 0x1] = _0x1b4756[0x1], _0x202b78[_0x3a8ffa + 0x2] = _0x1b4756[0x2], _0x202b78[_0x3a8ffa + 0x3] = _0x1b4756[0x3]);
                return _0x392684['putImageDa' + 'ta'](_0x143afd, 0x0, 0x0), _0x488e7b;
            }, _0x37d3e6['getColor'] = function (_0x2e8567, _0x3be55a, _0x112cd3, _0x2df212) {
                var _0x40aff6 = [];
                if (this['data']['_mat'] && this['data']['_alpha']) {
                    var _0x29ecf9 = this['data']['_mat'], _0x5cf767 = this['data']['_alpha'];
                    _0x40aff6[0x0] = _0x29ecf9[0x0] * _0x2e8567 + _0x29ecf9[0x1] * _0x3be55a + _0x29ecf9[0x2] * _0x112cd3 + _0x29ecf9[0x3] * _0x2df212 + _0x5cf767[0x0], _0x40aff6[0x1] = _0x29ecf9[0x4] * _0x2e8567 + _0x29ecf9[0x5] * _0x3be55a + _0x29ecf9[0x6] * _0x112cd3 + _0x29ecf9[0x7] * _0x2df212 + _0x5cf767[0x1], _0x40aff6[0x2] = _0x29ecf9[0x8] * _0x2e8567 + _0x29ecf9[0x9] * _0x3be55a + _0x29ecf9[0xa] * _0x112cd3 + _0x29ecf9[0xb] * _0x2df212 + _0x5cf767[0x2], _0x40aff6[0x3] = _0x29ecf9[0xc] * _0x2e8567 + _0x29ecf9[0xd] * _0x3be55a + _0x29ecf9[0xe] * _0x112cd3 + _0x29ecf9[0xf] * _0x2df212 + _0x5cf767[0x3];
                }
                return _0x40aff6;
            }, _0x4b9b10;
        }(), _0x15a9b4 = function () {
            function _0x397229() {
                this['_cacheBoun' + 'dsType'] = !0x1;
            }
            _0x4621f4(_0x397229, 'laya.displ' + 'ay.Graphic' + 'sBounds');
            var _0x414612 = _0x397229['prototype'];
            return _0x414612['destroy'] = function () {
                this['_graphics'] = null, this['_cacheBoun' + 'dsType'] = !0x1, this['_temp'] && (this['_temp']['length'] = 0x0), this['_rstBoundP' + 'oints'] && (this['_rstBoundP' + 'oints']['length'] = 0x0), this['_bounds'] && this['_bounds']['recover'](), this['_bounds'] = null, _0x2249dd['recover']('GraphicsBo' + 'unds', this);
            }, _0x414612['reset'] = function () {
                this['_temp'] && (this['_temp']['length'] = 0x0);
            }, _0x414612['getBounds'] = function (_0x41d122) {
                return void 0x0 === _0x41d122 && (_0x41d122 = !0x1), (!this['_bounds'] || !this['_temp'] || this['_temp']['length'] < 0x1 || _0x41d122 != this['_cacheBoun' + 'dsType']) && (this['_bounds'] = _0x22858b['_getWrapRe' + 'c'](this['getBoundPo' + 'ints'](_0x41d122), this['_bounds'])), this['_cacheBoun' + 'dsType'] = _0x41d122, this['_bounds'];
            }, _0x414612['getBoundPo' + 'ints'] = function (_0x33eff3) {
                return void 0x0 === _0x33eff3 && (_0x33eff3 = !0x1), (!this['_temp'] || this['_temp']['length'] < 0x1 || _0x33eff3 != this['_cacheBoun' + 'dsType']) && (this['_temp'] = this['_getCmdPoi' + 'nts'](_0x33eff3)), this['_cacheBoun' + 'dsType'] = _0x33eff3, this['_rstBoundP' + 'oints'] = _0x3b78ce['copyArray'](this['_rstBoundP' + 'oints'], this['_temp']);
            }, _0x414612['_getCmdPoi' + 'nts'] = function (_0x22b66e) {
                void 0x0 === _0x22b66e && (_0x22b66e = !0x1);
                var _0xff3aa1, _0x3b3f46 = (_0x4fec79['_context'], this['_graphics']['cmds']);
                if (_0xff3aa1 = this['_temp'] || (this['_temp'] = []), _0xff3aa1['length'] = 0x0, _0x3b3f46 || null == this['_graphics']['_one'] || (_0x397229['_tempCmds']['length'] = 0x0, _0x397229['_tempCmds']['push'](this['_graphics']['_one']), _0x3b3f46 = _0x397229['_tempCmds']), !_0x3b3f46)
                    return _0xff3aa1;
                var _0x44bbe8 = _0x397229['_tempMatri' + 'xArrays'];
                _0x44bbe8['length'] = 0x0;
                var _0x1a2235 = _0x397229['_initMatri' + 'x'];
                _0x1a2235['identity']();
                for (var _0x3f1995, _0x3e2136, _0x52c05b = _0x397229['_tempMatri' + 'x'], _0x558cc2 = 0x0, _0x46645f = _0x3b3f46['length']; _0x46645f > _0x558cc2; _0x558cc2++)
                    switch (_0x3f1995 = _0x3b3f46[_0x558cc2], _0x3f1995['cmdID']) {
                    case 'Alpha':
                        _0x44bbe8['push'](_0x1a2235), _0x1a2235 = _0x1a2235['clone']();
                        break;
                    case 'Restore':
                        _0x1a2235 = _0x44bbe8['pop']();
                        break;
                    case 'Scale':
                        _0x52c05b['identity'](), _0x52c05b['translate'](-_0x3f1995['pivotX'], -_0x3f1995['pivotY']), _0x52c05b['scale'](_0x3f1995['scaleX'], _0x3f1995['scaleY']), _0x52c05b['translate'](_0x3f1995['pivotX'], _0x3f1995['pivotY']), this['_switchMat' + 'rix'](_0x1a2235, _0x52c05b);
                        break;
                    case 'Rotate':
                        _0x52c05b['identity'](), _0x52c05b['translate'](-_0x3f1995['pivotX'], -_0x3f1995['pivotY']), _0x52c05b['rotate'](_0x3f1995['angle']), _0x52c05b['translate'](_0x3f1995['pivotX'], _0x3f1995['pivotY']), this['_switchMat' + 'rix'](_0x1a2235, _0x52c05b);
                        break;
                    case 'Translate':
                        _0x52c05b['identity'](), _0x52c05b['translate'](_0x3f1995['tx'], _0x3f1995['ty']), this['_switchMat' + 'rix'](_0x1a2235, _0x52c05b);
                        break;
                    case 'Transform':
                        _0x52c05b['identity'](), _0x52c05b['translate'](-_0x3f1995['pivotX'], -_0x3f1995['pivotY']), _0x52c05b['concat'](_0x3f1995['matrix']), _0x52c05b['translate'](_0x3f1995['pivotX'], _0x3f1995['pivotY']), this['_switchMat' + 'rix'](_0x1a2235, _0x52c05b);
                        break;
                    case 'DrawImage':
                    case 'FillTextur' + 'e':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x1a2235);
                        break;
                    case 'DrawTextur' + 'e':
                        _0x1a2235['copyTo'](_0x52c05b), _0x3f1995['matrix'] && _0x52c05b['concat'](_0x3f1995['matrix']), _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x52c05b);
                        break;
                    case 'DrawImage':
                        if (_0x3e2136 = _0x3f1995['texture'], _0x22b66e)
                            _0x3f1995['width'] && _0x3f1995['height'] ? _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x1a2235) : _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3e2136['width'], _0x3e2136['height']), _0x1a2235);
                        else {
                            var _0xaf4fa2 = (_0x3f1995['width'] || _0x3e2136['sourceWidt' + 'h']) / _0x3e2136['width'], _0x4cf928 = (_0x3f1995['height'] || _0x3e2136['sourceHeig' + 'ht']) / _0x3e2136['height'], _0x1e7d5d = _0xaf4fa2 * _0x3e2136['sourceWidt' + 'h'], _0x57e667 = _0x4cf928 * _0x3e2136['sourceHeig' + 'ht'], _0x5c5a3a = _0x3e2136['offsetX'] > 0x0 ? _0x3e2136['offsetX'] : 0x0, _0x3aed2b = _0x3e2136['offsetY'] > 0x0 ? _0x3e2136['offsetY'] : 0x0;
                            _0x5c5a3a *= _0xaf4fa2, _0x3aed2b *= _0x4cf928, _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'] - _0x5c5a3a, _0x3f1995['y'] - _0x3aed2b, _0x1e7d5d, _0x57e667), _0x1a2235);
                        }
                        break;
                    case 'FillTextur' + 'e':
                        _0x3f1995['width'] && _0x3f1995['height'] ? _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x1a2235) : (_0x3e2136 = _0x3f1995['texture'], _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3e2136['width'], _0x3e2136['height']), _0x1a2235));
                        break;
                    case 'DrawTextur' + 'e':
                        var _0x574433;
                        _0x3f1995['matrix'] ? (_0x1a2235['copyTo'](_0x52c05b), _0x52c05b['concat'](_0x3f1995['matrix']), _0x574433 = _0x52c05b) : _0x574433 = _0x1a2235, _0x22b66e ? _0x3f1995['width'] && _0x3f1995['height'] ? _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x574433) : (_0x3e2136 = _0x3f1995['texture'], _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3e2136['width'], _0x3e2136['height']), _0x574433)) : (_0x3e2136 = _0x3f1995['texture'], _0xaf4fa2 = (_0x3f1995['width'] || _0x3e2136['sourceWidt' + 'h']) / _0x3e2136['width'], _0x4cf928 = (_0x3f1995['height'] || _0x3e2136['sourceHeig' + 'ht']) / _0x3e2136['height'], _0x1e7d5d = _0xaf4fa2 * _0x3e2136['sourceWidt' + 'h'], _0x57e667 = _0x4cf928 * _0x3e2136['sourceHeig' + 'ht'], _0x5c5a3a = _0x3e2136['offsetX'] > 0x0 ? _0x3e2136['offsetX'] : 0x0, _0x3aed2b = _0x3e2136['offsetY'] > 0x0 ? _0x3e2136['offsetY'] : 0x0, _0x5c5a3a *= _0xaf4fa2, _0x3aed2b *= _0x4cf928, _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'] - _0x5c5a3a, _0x3f1995['y'] - _0x3aed2b, _0x1e7d5d, _0x57e667), _0x574433));
                        break;
                    case 'DrawRect':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['width'], _0x3f1995['height']), _0x1a2235);
                        break;
                    case 'DrawCircle':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x22858b['_getBoundP' + 'ointS'](_0x3f1995['x'] - _0x3f1995['radius'], _0x3f1995['y'] - _0x3f1995['radius'], _0x3f1995['radius'] + _0x3f1995['radius'], _0x3f1995['radius'] + _0x3f1995['radius']), _0x1a2235);
                        break;
                    case 'DrawLine':
                        _0x397229['_tempPoint' + 's']['length'] = 0x0;
                        var _0xe4e897 = NaN;
                        _0xe4e897 = 0.5 * _0x3f1995['lineWidth'], _0x3f1995['fromX'] == _0x3f1995['toX'] ? _0x397229['_tempPoint' + 's']['push'](_0x3f1995['fromX'] + _0xe4e897, _0x3f1995['fromY'], _0x3f1995['toX'] + _0xe4e897, _0x3f1995['toY'], _0x3f1995['fromX'] - _0xe4e897, _0x3f1995['fromY'], _0x3f1995['toX'] - _0xe4e897, _0x3f1995['toY']) : _0x3f1995['fromY'] == _0x3f1995['toY'] ? _0x397229['_tempPoint' + 's']['push'](_0x3f1995['fromX'], _0x3f1995['fromY'] + _0xe4e897, _0x3f1995['toX'], _0x3f1995['toY'] + _0xe4e897, _0x3f1995['fromX'], _0x3f1995['fromY'] - _0xe4e897, _0x3f1995['toX'], _0x3f1995['toY'] - _0xe4e897) : _0x397229['_tempPoint' + 's']['push'](_0x3f1995['fromX'], _0x3f1995['fromY'], _0x3f1995['toX'], _0x3f1995['toY']), _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x397229['_tempPoint' + 's'], _0x1a2235);
                        break;
                    case 'DrawCurves':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x450997['I']['getBezierP' + 'oints'](_0x3f1995['points']), _0x1a2235, _0x3f1995['x'], _0x3f1995['y']);
                        break;
                    case 'DrawLines':
                    case 'DrawPoly':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, _0x3f1995['points'], _0x1a2235, _0x3f1995['x'], _0x3f1995['y']);
                        break;
                    case 'DrawPath':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, this['_getPathPo' + 'ints'](_0x3f1995['paths']), _0x1a2235, _0x3f1995['x'], _0x3f1995['y']);
                        break;
                    case 'DrawPie':
                        _0x397229['_addPointA' + 'rrToRst'](_0xff3aa1, this['_getPiePoi' + 'nts'](_0x3f1995['x'], _0x3f1995['y'], _0x3f1995['radius'], _0x3f1995['startAngle'], _0x3f1995['endAngle']), _0x1a2235);
                    }
                return _0xff3aa1['length'] > 0xc8 ? _0xff3aa1 = _0x3b78ce['copyArray'](_0xff3aa1, _0x22858b['_getWrapRe' + 'c'](_0xff3aa1)['_getBoundP' + 'oints']()) : _0xff3aa1['length'] > 0x8 && (_0xff3aa1 = _0x496684['scanPList'](_0xff3aa1)), _0xff3aa1;
            }, _0x414612['_switchMat' + 'rix'] = function (_0x3518ec, _0xddfaf7) {
                _0xddfaf7['concat'](_0x3518ec), _0xddfaf7['copyTo'](_0x3518ec);
            }, _0x414612['_getPiePoi' + 'nts'] = function (_0x286d8c, _0x581574, _0x4bc99f, _0x336964, _0x2727f3) {
                var _0x151e0d = _0x397229['_tempPoint' + 's'];
                _0x397229['_tempPoint' + 's']['length'] = 0x0, _0x151e0d['push'](_0x286d8c, _0x581574);
                var _0x2a36b6 = Math['PI'] / 0xa, _0x3fad64 = NaN;
                for (_0x3fad64 = _0x336964; _0x2727f3 > _0x3fad64; _0x3fad64 += _0x2a36b6)
                    _0x151e0d['push'](_0x286d8c + _0x4bc99f * Math['cos'](_0x3fad64), _0x581574 + _0x4bc99f * Math['sin'](_0x3fad64));
                return _0x2727f3 != _0x3fad64 && _0x151e0d['push'](_0x286d8c + _0x4bc99f * Math['cos'](_0x2727f3), _0x581574 + _0x4bc99f * Math['sin'](_0x2727f3)), _0x151e0d;
            }, _0x414612['_getPathPo' + 'ints'] = function (_0x3b0683) {
                var _0x17a45d = 0x0, _0x11699b = 0x0, _0x44105f = _0x397229['_tempPoint' + 's'];
                _0x44105f['length'] = 0x0, _0x11699b = _0x3b0683['length'];
                var _0x8e90ad;
                for (_0x17a45d = 0x0; _0x11699b > _0x17a45d; _0x17a45d++)
                    _0x8e90ad = _0x3b0683[_0x17a45d], _0x8e90ad['length'] > 0x1 && (_0x44105f['push'](_0x8e90ad[0x1], _0x8e90ad[0x2]), _0x8e90ad['length'] > 0x3 && _0x44105f['push'](_0x8e90ad[0x3], _0x8e90ad[0x4]));
                return _0x44105f;
            }, _0x397229['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('GraphicsBo' + 'unds', _0x397229);
            }, _0x397229['_addPointA' + 'rrToRst'] = function (_0x240419, _0x5ec99d, _0x5dbc4c, _0x2c176d, _0x187e95) {
                void 0x0 === _0x2c176d && (_0x2c176d = 0x0), void 0x0 === _0x187e95 && (_0x187e95 = 0x0);
                var _0x5a1da3 = 0x0, _0x1ba7e2 = 0x0;
                for (_0x1ba7e2 = _0x5ec99d['length'], _0x5a1da3 = 0x0; _0x1ba7e2 > _0x5a1da3; _0x5a1da3 += 0x2)
                    _0x397229['_addPointT' + 'oRst'](_0x240419, _0x5ec99d[_0x5a1da3] + _0x2c176d, _0x5ec99d[_0x5a1da3 + 0x1] + _0x187e95, _0x5dbc4c);
            }, _0x397229['_addPointT' + 'oRst'] = function (_0x34940e, _0x495c74, _0xdf685b, _0x4384e9) {
                var _0x18a7e1 = _0x251b03['TEMP'];
                _0x18a7e1['setTo'](_0x495c74 ? _0x495c74 : 0x0, _0xdf685b ? _0xdf685b : 0x0), _0x4384e9['transformP' + 'oint'](_0x18a7e1), _0x34940e['push'](_0x18a7e1['x'], _0x18a7e1['y']);
            }, _0x397229['_tempPoint' + 's'] = [], _0x397229['_tempMatri' + 'xArrays'] = [], _0x397229['_tempCmds'] = [], _0x5043ef(_0x397229, [
                '_tempMatri' + 'x',
                function () {
                    return this['_tempMatri' + 'x'] = new _0x250bb7();
                },
                '_initMatri' + 'x',
                function () {
                    return this['_initMatri' + 'x'] = new _0x250bb7();
                }
            ]), _0x397229;
        }(), _0x3f0f68 = function () {
            function _0x172c4b() {
                this['_$0__event' + 's'] = null;
            }
            var _0xe1e159;
            _0x4621f4(_0x172c4b, 'laya.event' + 's.EventDis' + 'patcher');
            var _0x2e3cb1 = _0x172c4b['prototype'];
            return _0x2e3cb1['hasListene' + 'r'] = function (_0x3be567) {
                var _0x446d28 = this['_$0__event' + 's'] && this['_$0__event' + 's'][_0x3be567];
                return !!_0x446d28;
            }, _0x2e3cb1['event'] = function (_0x3e57ec, _0x1eea60) {
                if (!this['_$0__event' + 's'] || !this['_$0__event' + 's'][_0x3e57ec])
                    return !0x1;
                var _0x13c7ef = this['_$0__event' + 's'][_0x3e57ec];
                if (_0x13c7ef['run'])
                    _0x13c7ef['once'] && delete this['_$0__event' + 's'][_0x3e57ec], null != _0x1eea60 ? _0x13c7ef['runWith'](_0x1eea60) : _0x13c7ef['run']();
                else {
                    for (var _0x8c358d = 0x0, _0x230777 = _0x13c7ef['length']; _0x230777 > _0x8c358d; _0x8c358d++) {
                        var _0x10e87f = _0x13c7ef[_0x8c358d];
                        _0x10e87f && (null != _0x1eea60 ? _0x10e87f['runWith'](_0x1eea60) : _0x10e87f['run']()), (!_0x10e87f || _0x10e87f['once']) && (_0x13c7ef['splice'](_0x8c358d, 0x1), _0x8c358d--, _0x230777--);
                    }
                    0x0 === _0x13c7ef['length'] && this['_$0__event' + 's'] && delete this['_$0__event' + 's'][_0x3e57ec];
                }
                return !0x0;
            }, _0x2e3cb1['on'] = function (_0x238a14, _0x55a8fd, _0x475741, _0x33ca01) {
                return this['_createLis' + 'tener'](_0x238a14, _0x55a8fd, _0x475741, _0x33ca01, !0x1);
            }, _0x2e3cb1['once'] = function (_0x24a739, _0x50af09, _0x2c599d, _0x131889) {
                return this['_createLis' + 'tener'](_0x24a739, _0x50af09, _0x2c599d, _0x131889, !0x0);
            }, _0x2e3cb1['_createLis' + 'tener'] = function (_0x7b44fd, _0x58fa59, _0x199d96, _0x5310de, _0x26e98e, _0x3767f7) {
                void 0x0 === _0x3767f7 && (_0x3767f7 = !0x0), _0x3767f7 && this['off'](_0x7b44fd, _0x58fa59, _0x199d96, _0x26e98e);
                var _0x4a80ea = _0xe1e159['create'](_0x58fa59 || this, _0x199d96, _0x5310de, _0x26e98e);
                this['_$0__event' + 's'] || (this['_$0__event' + 's'] = {});
                var _0x231ab8 = this['_$0__event' + 's'];
                return _0x231ab8[_0x7b44fd] ? _0x231ab8[_0x7b44fd]['run'] ? _0x231ab8[_0x7b44fd] = [
                    _0x231ab8[_0x7b44fd],
                    _0x4a80ea
                ] : _0x231ab8[_0x7b44fd]['push'](_0x4a80ea) : _0x231ab8[_0x7b44fd] = _0x4a80ea, this;
            }, _0x2e3cb1['off'] = function (_0x476eb0, _0x139880, _0x47fe90, _0xebc263) {
                if (void 0x0 === _0xebc263 && (_0xebc263 = !0x1), !this['_$0__event' + 's'] || !this['_$0__event' + 's'][_0x476eb0])
                    return this;
                var _0x55971c = this['_$0__event' + 's'][_0x476eb0];
                if (null != _0x55971c) {
                    if (_0x55971c['run'])
                        _0x139880 && _0x55971c['caller'] !== _0x139880 || null != _0x47fe90 && _0x55971c['method'] !== _0x47fe90 || _0xebc263 && !_0x55971c['once'] || (delete this['_$0__event' + 's'][_0x476eb0], _0x55971c['recover']());
                    else {
                        for (var _0x17ea1c = 0x0, _0x880a12 = 0x0, _0x19bd25 = _0x55971c['length']; _0x19bd25 > _0x880a12; _0x880a12++) {
                            var _0x5e5096 = _0x55971c[_0x880a12];
                            _0x5e5096 ? !_0x5e5096 || _0x139880 && _0x5e5096['caller'] !== _0x139880 || null != _0x47fe90 && _0x5e5096['method'] !== _0x47fe90 || _0xebc263 && !_0x5e5096['once'] || (_0x17ea1c++, _0x55971c[_0x880a12] = null, _0x5e5096['recover']()) : _0x17ea1c++;
                        }
                        _0x17ea1c === _0x19bd25 && delete this['_$0__event' + 's'][_0x476eb0];
                    }
                }
                return this;
            }, _0x2e3cb1['offAll'] = function (_0x30e1c7) {
                var _0xa974b8 = this['_$0__event' + 's'];
                if (!_0xa974b8)
                    return this;
                if (_0x30e1c7)
                    this['_recoverHa' + 'ndlers'](_0xa974b8[_0x30e1c7]), delete _0xa974b8[_0x30e1c7];
                else {
                    for (var _0x3e2d2b in _0xa974b8)
                        this['_recoverHa' + 'ndlers'](_0xa974b8[_0x3e2d2b]);
                    this['_$0__event' + 's'] = null;
                }
                return this;
            }, _0x2e3cb1['offAllCall' + 'er'] = function (_0x597c15) {
                if (_0x597c15 && this['_$0__event' + 's']) {
                    for (var _0x180030 in this['_$0__event' + 's'])
                        this['off'](_0x180030, _0x597c15, null);
                }
                return this;
            }, _0x2e3cb1['_recoverHa' + 'ndlers'] = function (_0x4068ba) {
                if (_0x4068ba) {
                    if (_0x4068ba['run'])
                        _0x4068ba['recover']();
                    else {
                        for (var _0x51d8c8 = _0x4068ba['length'] - 0x1; _0x51d8c8 > -0x1; _0x51d8c8--)
                            _0x4068ba[_0x51d8c8] && (_0x4068ba[_0x51d8c8]['recover'](), _0x4068ba[_0x51d8c8] = null);
                    }
                }
            }, _0x2e3cb1['isMouseEve' + 'nt'] = function (_0x3cf858) {
                return _0x172c4b['MOUSE_EVEN' + 'TS'][_0x3cf858] || !0x1;
            }, _0x172c4b['MOUSE_EVEN' + 'TS'] = {
                'rightmousedown': !0x0,
                'rightmouseup': !0x0,
                'rightclick': !0x0,
                'mousedown': !0x0,
                'mouseup': !0x0,
                'mousemove': !0x0,
                'mouseover': !0x0,
                'mouseout': !0x0,
                'click': !0x0,
                'doubleclick': !0x0
            }, _0x172c4b['__init$'] = function () {
                Object['defineProp' + 'erty'](laya['events']['EventDispa' + 'tcher']['prototype'], '_events', {
                    'enumerable': !0x1,
                    'writable': !0x0
                }), _0xe1e159 = function (_0x6c3b15) {
                    function _0x4dc54f(_0x475515, _0x529039, _0xa90b00, _0x35497f) {
                        _0x4dc54f['__super']['call'](this, _0x475515, _0x529039, _0xa90b00, _0x35497f);
                    }
                    _0x4621f4(_0x4dc54f, '', _0x6c3b15);
                    var _0x269bce = _0x4dc54f['prototype'];
                    return _0x269bce['recover'] = function () {
                        this['_id'] > 0x0 && (this['_id'] = 0x0, _0x4dc54f['_pool']['push'](this['clear']()));
                    }, _0x4dc54f['create'] = function (_0x5e2c6f, _0x269922, _0x5f3ba6, _0x4f285b) {
                        return void 0x0 === _0x4f285b && (_0x4f285b = !0x0), _0x4dc54f['_pool']['length'] ? _0x4dc54f['_pool']['pop']()['setTo'](_0x5e2c6f, _0x269922, _0x5f3ba6, _0x4f285b) : new _0x4dc54f(_0x5e2c6f, _0x269922, _0x5f3ba6, _0x4f285b);
                    }, _0x4dc54f['_pool'] = [], _0x4dc54f;
                }(_0x16ca2b);
            }, _0x172c4b;
        }(), _0x16ca2b = function () {
            function _0x436e43(_0x5f2825, _0x453caf, _0x36dc6b, _0x32deea) {
                this['once'] = !0x1, this['_id'] = 0x0, void 0x0 === _0x32deea && (_0x32deea = !0x1), this['setTo'](_0x5f2825, _0x453caf, _0x36dc6b, _0x32deea);
            }
            _0x4621f4(_0x436e43, 'laya.utils' + '.Handler');
            var _0x57a263 = _0x436e43['prototype'];
            return _0x57a263['setTo'] = function (_0xe6669b, _0x12ac68, _0xa82677, _0x4632dc) {
                return this['_id'] = _0x436e43['_gid']++, this['caller'] = _0xe6669b, this['method'] = _0x12ac68, this['args'] = _0xa82677, this['once'] = _0x4632dc, this;
            }, _0x57a263['run'] = function () {
                if (null == this['method'])
                    return null;
                var _0xa7444d = this['_id'], _0x703706 = this['method']['apply'](this['caller'], this['args']);
                return this['_id'] === _0xa7444d && this['once'] && this['recover'](), _0x703706;
            }, _0x57a263['runWith'] = function (_0x31b451) {
                if (null == this['method'])
                    return null;
                var _0x5b3445 = this['_id'];
                if (null == _0x31b451)
                    var _0x1a9199 = this['method']['apply'](this['caller'], this['args']);
                else
                    _0x1a9199 = this['args'] || _0x31b451['unshift'] ? this['args'] ? this['method']['apply'](this['caller'], this['args']['concat'](_0x31b451)) : this['method']['apply'](this['caller'], _0x31b451) : this['method']['call'](this['caller'], _0x31b451);
                return this['_id'] === _0x5b3445 && this['once'] && this['recover'](), _0x1a9199;
            }, _0x57a263['clear'] = function () {
                return this['caller'] = null, this['method'] = null, this['args'] = null, this;
            }, _0x57a263['recover'] = function () {
                this['_id'] > 0x0 && (this['_id'] = 0x0, _0x436e43['_pool']['push'](this['clear']()));
            }, _0x436e43['create'] = function (_0x373e5a, _0x47db42, _0x41202c, _0x49f313) {
                return void 0x0 === _0x49f313 && (_0x49f313 = !0x0), _0x436e43['_pool']['length'] ? _0x436e43['_pool']['pop']()['setTo'](_0x373e5a, _0x47db42, _0x41202c, _0x49f313) : new _0x436e43(_0x373e5a, _0x47db42, _0x41202c, _0x49f313);
            }, _0x436e43['_pool'] = [], _0x436e43['_gid'] = 0x1, _0x436e43;
        }(), _0x42326c = (function () {
            function _0x2b6893() {
            }
            return _0x4621f4(_0x2b6893, 'laya.Const'), _0x2b6893['NOT_ACTIVE'] = 0x1, _0x2b6893['ACTIVE_INH' + 'IERARCHY'] = 0x2, _0x2b6893['AWAKED'] = 0x4, _0x2b6893['NOT_READY'] = 0x8, _0x2b6893['DISPLAY'] = 0x10, _0x2b6893['HAS_ZORDER'] = 0x20, _0x2b6893['HAS_MOUSE'] = 0x40, _0x2b6893['DISPLAYED_' + 'INSTAGE'] = 0x80, _0x2b6893['DRAWCALL_O' + 'PTIMIZE'] = 0x100, _0x2b6893;
        }(), function () {
            function _0x7f0e38() {
                this['_one'] = null, this['_cmds'] = null, this['autoDestro' + 'y'] = !0x1, this['_render'] = this['_renderEmp' + 'ty'], this['_createDat' + 'a']();
            }
            _0x4621f4(_0x7f0e38, 'laya.displ' + 'ay.Graphic' + 's');
            var _0x6d4fc1 = _0x7f0e38['prototype'];
            return _0x6d4fc1['_createDat' + 'a'] = function () {
            }, _0x6d4fc1['_clearData'] = function () {
            }, _0x6d4fc1['_destroyDa' + 'ta'] = function () {
            }, _0x6d4fc1['destroy'] = function () {
                this['clear'](!0x0), this['_graphicBo' + 'unds'] && this['_graphicBo' + 'unds']['destroy'](), this['_graphicBo' + 'unds'] = null, this['_vectorgra' + 'phArray'] = null, this['_sp'] && (this['_sp']['_renderTyp' + 'e'] = 0x0, this['_sp']['_setRender' + 'Type'](0x0), this['_sp'] = null), this['_destroyDa' + 'ta']();
            }, _0x6d4fc1['clear'] = function (_0x2f9b14) {
                if (void 0x0 === _0x2f9b14 && (_0x2f9b14 = !0x0), _0x2f9b14) {
                    var _0x12e245 = this['_one'];
                    if (this['_cmds']) {
                        var _0xeb14ab = 0x0, _0x1d2363 = this['_cmds']['length'];
                        for (_0xeb14ab = 0x0; _0x1d2363 > _0xeb14ab; _0xeb14ab++)
                            _0x12e245 = this['_cmds'][_0xeb14ab], _0x12e245['recover']();
                        this['_cmds']['length'] = 0x0;
                    } else
                        _0x12e245 && _0x12e245['recover']();
                } else
                    this['_cmds'] = null;
                if (this['_one'] = null, this['_render'] = this['_renderEmp' + 'ty'], this['_clearData'](), this['_sp'] && (this['_sp']['_renderTyp' + 'e'] &= -0x201, this['_sp']['_setRender' + 'Type'](this['_sp']['_renderTyp' + 'e'])), this['_repaint'](), this['_vectorgra' + 'phArray']) {
                    for (_0xeb14ab = 0x0, _0x1d2363 = this['_vectorgra' + 'phArray']['length']; _0x1d2363 > _0xeb14ab; _0xeb14ab++)
                        _0x2a3233['getInstanc' + 'e']()['deleteShap' + 'e'](this['_vectorgra' + 'phArray'][_0xeb14ab]);
                    this['_vectorgra' + 'phArray']['length'] = 0x0;
                }
            }, _0x6d4fc1['_clearBoun' + 'dsCache'] = function () {
                this['_graphicBo' + 'unds'] && this['_graphicBo' + 'unds']['reset']();
            }, _0x6d4fc1['_initGraph' + 'icBounds'] = function () {
                this['_graphicBo' + 'unds'] || (this['_graphicBo' + 'unds'] = _0x15a9b4['create'](), this['_graphicBo' + 'unds']['_graphics'] = this);
            }, _0x6d4fc1['_repaint'] = function () {
                this['_clearBoun' + 'dsCache'](), this['_sp'] && this['_sp']['repaint']();
            }, _0x6d4fc1['_isOnlyOne'] = function () {
                return !this['_cmds'] || 0x0 === this['_cmds']['length'];
            }, _0x6d4fc1['getBounds'] = function (_0x1a16cb) {
                return void 0x0 === _0x1a16cb && (_0x1a16cb = !0x1), this['_initGraph' + 'icBounds'](), this['_graphicBo' + 'unds']['getBounds'](_0x1a16cb);
            }, _0x6d4fc1['getBoundPo' + 'ints'] = function (_0x465c1f) {
                return void 0x0 === _0x465c1f && (_0x465c1f = !0x1), this['_initGraph' + 'icBounds'](), this['_graphicBo' + 'unds']['getBoundPo' + 'ints'](_0x465c1f);
            }, _0x6d4fc1['drawImage'] = function (_0x251bf5, _0x473e72, _0x151a81, _0x433c7b, _0x15f591) {
                if (void 0x0 === _0x473e72 && (_0x473e72 = 0x0), void 0x0 === _0x151a81 && (_0x151a81 = 0x0), void 0x0 === _0x433c7b && (_0x433c7b = 0x0), void 0x0 === _0x15f591 && (_0x15f591 = 0x0), !_0x251bf5)
                    return null;
                if (_0x433c7b || (_0x433c7b = _0x251bf5['sourceWidt' + 'h']), _0x15f591 || (_0x15f591 = _0x251bf5['sourceHeig' + 'ht']), _0x251bf5['getIsReady']()) {
                    var _0x5161e6 = _0x433c7b / _0x251bf5['sourceWidt' + 'h'], _0x58b81b = _0x15f591 / _0x251bf5['sourceHeig' + 'ht'];
                    if (_0x433c7b = _0x251bf5['width'] * _0x5161e6, _0x15f591 = _0x251bf5['height'] * _0x58b81b, 0x0 >= _0x433c7b || 0x0 >= _0x15f591)
                        return null;
                    _0x473e72 += _0x251bf5['offsetX'] * _0x5161e6, _0x151a81 += _0x251bf5['offsetY'] * _0x58b81b;
                }
                this['_sp'] && (this['_sp']['_renderTyp' + 'e'] |= 0x200, this['_sp']['_setRender' + 'Type'](this['_sp']['_renderTyp' + 'e']));
                var _0x44ad2c = _0x45b84c['create']['call'](this, _0x251bf5, _0x473e72, _0x151a81, _0x433c7b, _0x15f591);
                return null == this['_one'] ? (this['_one'] = _0x44ad2c, this['_render'] = this['_renderOne' + 'Img']) : this['_saveToCmd'](null, _0x44ad2c), this['_repaint'](), _0x44ad2c;
            }, _0x6d4fc1['drawTextur' + 'e'] = function (_0x1761ad, _0x17407f, _0x212e5a, _0x46f883, _0x24f201, _0x5bc067, _0x33c585, _0x5c03bb, _0x1c2b91) {
                if (void 0x0 === _0x17407f && (_0x17407f = 0x0), void 0x0 === _0x212e5a && (_0x212e5a = 0x0), void 0x0 === _0x46f883 && (_0x46f883 = 0x0), void 0x0 === _0x24f201 && (_0x24f201 = 0x0), void 0x0 === _0x33c585 && (_0x33c585 = 0x1), !_0x1761ad || 0.01 > _0x33c585)
                    return null;
                if (!_0x1761ad['getIsReady']())
                    return null;
                if (_0x46f883 || (_0x46f883 = _0x1761ad['sourceWidt' + 'h']), _0x24f201 || (_0x24f201 = _0x1761ad['sourceHeig' + 'ht']), _0x1761ad['getIsReady']()) {
                    var _0x33f24d = !_0x4fec79['isWebGL'] && (_0x2ad6c5['onFirefox'] || _0x2ad6c5['onEdge'] || _0x2ad6c5['onIE'] || _0x2ad6c5['onSafari']) ? 0.5 : 0x0, _0x3baa6b = _0x46f883 / _0x1761ad['sourceWidt' + 'h'], _0x12d51b = _0x24f201 / _0x1761ad['sourceHeig' + 'ht'];
                    if (_0x46f883 = _0x1761ad['width'] * _0x3baa6b, _0x24f201 = _0x1761ad['height'] * _0x12d51b, 0x0 >= _0x46f883 || 0x0 >= _0x24f201)
                        return null;
                    _0x17407f += _0x1761ad['offsetX'] * _0x3baa6b, _0x212e5a += _0x1761ad['offsetY'] * _0x12d51b, _0x17407f -= _0x33f24d, _0x212e5a -= _0x33f24d, _0x46f883 += 0x2 * _0x33f24d, _0x24f201 += 0x2 * _0x33f24d;
                }
                if (this['_sp'] && (this['_sp']['_renderTyp' + 'e'] |= 0x200, this['_sp']['_setRender' + 'Type'](this['_sp']['_renderTyp' + 'e'])), !_0x4fec79['isConchApp'] && !_0x4fec79['isWebGL'] && (_0x1c2b91 || _0x5c03bb)) {
                    var _0x2fe87d = new _0x50a1b2();
                    _0x2fe87d['size'](_0x46f883, _0x24f201);
                    var _0x84404 = _0x2fe87d['getContext']('2d');
                    if (_0x84404['drawTextur' + 'e'](_0x1761ad, 0x0, 0x0, _0x46f883, _0x24f201), _0x1761ad = new _0x49c097(_0x2fe87d), _0x5c03bb) {
                        var _0x3619ec = new _0x3ab7ea(), _0x27debd = _0x189459['create'](_0x5c03bb)['arrColor'];
                        _0x3619ec['data'] = new _0x54b560()['color'](0xff * _0x27debd[0x0], 0xff * _0x27debd[0x1], 0xff * _0x27debd[0x2]), _0x3619ec['apply']({ 'canvas': _0x2fe87d });
                    }
                }
                var _0x537be1 = _0x43c415['create']['call'](this, _0x1761ad, _0x17407f, _0x212e5a, _0x46f883, _0x24f201, _0x5bc067, _0x33c585, _0x5c03bb, _0x1c2b91);
                return this['_repaint'](), this['_saveToCmd'](null, _0x537be1);
            }, _0x6d4fc1['drawTextur' + 'es'] = function (_0x20abf6, _0xa9b3e3) {
                return _0x20abf6 ? this['_saveToCmd'](_0x4fec79['_context']['_drawTextu' + 'res'], _0x2a73e2['create']['call'](this, _0x20abf6, _0xa9b3e3)) : null;
            }, _0x6d4fc1['drawTriang' + 'les'] = function (_0x252440, _0x171ead, _0x1b1c1b, _0x2a585d, _0x88c7ad, _0x227087, _0x347df9, _0x10bc77, _0x44ed15, _0x2cfbc0) {
                return void 0x0 === _0x10bc77 && (_0x10bc77 = 0x1), this['_saveToCmd'](_0x4fec79['_context']['drawTriang' + 'les'], _0x176bfb['create']['call'](this, _0x252440, _0x171ead, _0x1b1c1b, _0x2a585d, _0x88c7ad, _0x227087, _0x347df9, _0x10bc77, _0x44ed15, _0x2cfbc0));
            }, _0x6d4fc1['fillTextur' + 'e'] = function (_0x3dc2e6, _0x18a094, _0x34e55c, _0x46b1ca, _0x29979d, _0x20a889, _0x306b30) {
                return void 0x0 === _0x46b1ca && (_0x46b1ca = 0x0), void 0x0 === _0x29979d && (_0x29979d = 0x0), void 0x0 === _0x20a889 && (_0x20a889 = 'repeat'), _0x3dc2e6 && _0x3dc2e6['getIsReady']() ? this['_saveToCmd'](_0x4fec79['_context']['_fillTextu' + 're'], _0x3ccdc1['create']['call'](this, _0x3dc2e6, _0x18a094, _0x34e55c, _0x46b1ca, _0x29979d, _0x20a889, _0x306b30 || _0x251b03['EMPTY'], {})) : null;
            }, _0x6d4fc1['_saveToCmd'] = function (_0x1e380a, _0x5589b4) {
                return this['_sp'] && (this['_sp']['_renderTyp' + 'e'] |= 0x200, this['_sp']['_setRender' + 'Type'](this['_sp']['_renderTyp' + 'e'])), null == this['_one'] ? (this['_one'] = _0x5589b4, this['_render'] = this['_renderOne']) : (this['_render'] = this['_renderAll'], 0x0 === (this['_cmds'] || (this['_cmds'] = []))['length'] && this['_cmds']['push'](this['_one']), this['_cmds']['push'](_0x5589b4)), this['_repaint'](), _0x5589b4;
            }, _0x6d4fc1['clipRect'] = function (_0x4db563, _0x4332a7, _0x31aa2f, _0x5d2947) {
                return this['_saveToCmd'](_0x4fec79['_context']['_clipRect'], _0x754f70['create']['call'](this, _0x4db563, _0x4332a7, _0x31aa2f, _0x5d2947));
            }, _0x6d4fc1['fillText'] = function (_0x321ae3, _0x49acce, _0x1cb28b, _0x42a26e, _0x39ad86, _0x490fcc) {
                return this['_saveToCmd'](_0x4fec79['_context']['_fillText'], _0x428443['create']['call'](this, _0x321ae3, _0x49acce, _0x1cb28b, _0x42a26e || _0x12a05f['defaultFon' + 'tStr'](), _0x39ad86, _0x490fcc));
            }, _0x6d4fc1['fillBorder' + 'Text'] = function (_0x2a161a, _0x4007e0, _0x31fef9, _0x48d64b, _0x3d7206, _0x4b1bab, _0x5b014b, _0x454e2a) {
                return this['_saveToCmd'](_0x4fec79['_context']['_fillBorde' + 'rText'], _0x20fc0b['create']['call'](this, _0x2a161a, _0x4007e0, _0x31fef9, _0x48d64b || _0x12a05f['defaultFon' + 'tStr'](), _0x3d7206, _0x4b1bab, _0x5b014b, _0x454e2a));
            }, _0x6d4fc1['fillWords'] = function (_0x5699c5, _0x307932, _0x289b24, _0x378d66, _0x2aee39) {
                return this['_saveToCmd'](_0x4fec79['_context']['_fillWords'], _0x513bc2['create']['call'](this, _0x5699c5, _0x307932, _0x289b24, _0x378d66 || _0x12a05f['defaultFon' + 'tStr'](), _0x2aee39));
            }, _0x6d4fc1['fillBorder' + 'Words'] = function (_0x457544, _0x1d36d1, _0x5bca26, _0x18de28, _0x52a002, _0x84dbeb, _0xf173be) {
                return this['_saveToCmd'](_0x4fec79['_context']['_fillBorde' + 'rWords'], _0x13a123['create']['call'](this, _0x457544, _0x1d36d1, _0x5bca26, _0x18de28 || _0x12a05f['defaultFon' + 'tStr'](), _0x52a002, _0x84dbeb, _0xf173be));
            }, _0x6d4fc1['strokeText'] = function (_0x4fba68, _0x5d901e, _0x5567e6, _0x27117f, _0x70cc42, _0x504169, _0x2d4ba8) {
                return this['_saveToCmd'](_0x4fec79['_context']['_strokeTex' + 't'], _0x9c3d0d['create']['call'](this, _0x4fba68, _0x5d901e, _0x5567e6, _0x27117f || _0x12a05f['defaultFon' + 'tStr'](), _0x70cc42, _0x504169, _0x2d4ba8));
            }, _0x6d4fc1['alpha'] = function (_0x47579f) {
                return this['_saveToCmd'](_0x4fec79['_context']['_alpha'], _0x59651c['create']['call'](this, _0x47579f));
            }, _0x6d4fc1['transform'] = function (_0x168610, _0x24637d, _0xe5316a) {
                return void 0x0 === _0x24637d && (_0x24637d = 0x0), void 0x0 === _0xe5316a && (_0xe5316a = 0x0), this['_saveToCmd'](_0x4fec79['_context']['_transform'], _0x36939f['create']['call'](this, _0x168610, _0x24637d, _0xe5316a));
            }, _0x6d4fc1['rotate'] = function (_0x35acb3, _0x537d79, _0x486620) {
                return void 0x0 === _0x537d79 && (_0x537d79 = 0x0), void 0x0 === _0x486620 && (_0x486620 = 0x0), this['_saveToCmd'](_0x4fec79['_context']['_rotate'], _0x39fd1d['create']['call'](this, _0x35acb3, _0x537d79, _0x486620));
            }, _0x6d4fc1['scale'] = function (_0x1cefcb, _0xadd515, _0x161f96, _0x2bb04f) {
                return void 0x0 === _0x161f96 && (_0x161f96 = 0x0), void 0x0 === _0x2bb04f && (_0x2bb04f = 0x0), this['_saveToCmd'](_0x4fec79['_context']['_scale'], _0x1fa189['create']['call'](this, _0x1cefcb, _0xadd515, _0x161f96, _0x2bb04f));
            }, _0x6d4fc1['translate'] = function (_0x157983, _0x504d28) {
                return this['_saveToCmd'](_0x4fec79['_context']['_translate'], _0x5b626a['create']['call'](this, _0x157983, _0x504d28));
            }, _0x6d4fc1['save'] = function () {
                return this['_saveToCmd'](_0x4fec79['_context']['_save'], _0x4e0962['create']['call'](this));
            }, _0x6d4fc1['restore'] = function () {
                return this['_saveToCmd'](_0x4fec79['_context']['_restore'], _0x2b28ee['create']['call'](this));
            }, _0x6d4fc1['replaceTex' + 't'] = function (_0xef6145) {
                this['_repaint']();
                var _0x24d676 = this['_cmds'];
                if (_0x24d676) {
                    for (var _0x228195 = _0x24d676['length'] - 0x1; _0x228195 > -0x1; _0x228195--)
                        if (this['_isTextCmd'](_0x24d676[_0x228195]))
                            return _0x24d676[_0x228195]['text'] = _0xef6145, !0x0;
                } else {
                    if (this['_one'] && this['_isTextCmd'](this['_one']))
                        return this['_one']['text'] = _0xef6145, !0x0;
                }
                return !0x1;
            }, _0x6d4fc1['_isTextCmd'] = function (_0xb3ce88) {
                var _0x27d341 = _0xb3ce88['cmdID'];
                return 'FillText' == _0x27d341 || 'StrokeText' == _0x27d341 || 'FillBorder' + 'Text' == _0x27d341;
            }, _0x6d4fc1['replaceTex' + 'tColor'] = function (_0x173b27) {
                this['_repaint']();
                var _0x1e7048 = this['_cmds'];
                if (_0x1e7048) {
                    for (var _0x43abbc = _0x1e7048['length'] - 0x1; _0x43abbc > -0x1; _0x43abbc--)
                        this['_isTextCmd'](_0x1e7048[_0x43abbc]) && this['_setTextCm' + 'dColor'](_0x1e7048[_0x43abbc], _0x173b27);
                } else
                    this['_one'] && this['_isTextCmd'](this['_one']) && this['_setTextCm' + 'dColor'](this['_one'], _0x173b27);
            }, _0x6d4fc1['_setTextCm' + 'dColor'] = function (_0x1b0985, _0x381b8d) {
                var _0x4de075 = _0x1b0985['cmdID'];
                switch (_0x4de075) {
                case 'FillText':
                case 'StrokeText':
                    _0x1b0985['color'] = _0x381b8d;
                    break;
                case 'FillBorder' + 'Text':
                case 'FillBorder' + 'Words':
                case 'FillBorder' + 'Text':
                    _0x1b0985['fillColor'] = _0x381b8d;
                }
            }, _0x6d4fc1['loadImage'] = function (_0x369605, _0x12e74f, _0x540c6b, _0x16ddb4, _0x11ea81, _0x4a8709) {
                void 0x0 === _0x12e74f && (_0x12e74f = 0x0), void 0x0 === _0x540c6b && (_0x540c6b = 0x0), void 0x0 === _0x16ddb4 && (_0x16ddb4 = 0x0), void 0x0 === _0x11ea81 && (_0x11ea81 = 0x0);
                var _0x5989ce = _0x3943d1['getRes'](_0x369605);
                _0x5989ce ? _0x5989ce['getIsReady']() ? this['drawImage'](_0x5989ce, _0x12e74f, _0x540c6b, _0x16ddb4, _0x11ea81) : _0x5989ce['once']('ready', this, this['drawImage'], [
                    _0x5989ce,
                    _0x12e74f,
                    _0x540c6b,
                    _0x16ddb4,
                    _0x11ea81
                ]) : (_0x5989ce = new _0x49c097(), _0x5989ce['load'](_0x369605), _0x3943d1['cacheRes'](_0x369605, _0x5989ce), _0x5989ce['once']('ready', this, this['drawImage'], [
                    _0x5989ce,
                    _0x12e74f,
                    _0x540c6b,
                    _0x16ddb4,
                    _0x11ea81
                ])), null != _0x4a8709 && (_0x5989ce['getIsReady']() ? _0x4a8709['call'](this['_sp']) : _0x5989ce['on']('ready', this['_sp'], _0x4a8709));
            }, _0x6d4fc1['_renderEmp' + 'ty'] = function (_0x2c2fdc, _0x3000fd, _0x34c598, _0x4f1c2a) {
            }, _0x6d4fc1['_renderAll'] = function (_0x3900ea, _0x536903, _0xe3d286, _0x4137f3) {
                for (var _0x3dc14b, _0x3a7b95 = this['_cmds'], _0x5e3fc0 = 0x0, _0x453410 = _0x3a7b95['length']; _0x453410 > _0x5e3fc0; _0x5e3fc0++)
                    (_0x3dc14b = _0x3a7b95[_0x5e3fc0])['run'](_0x536903, _0xe3d286, _0x4137f3);
            }, _0x6d4fc1['_renderOne'] = function (_0x5a0202, _0x486ecd, _0x22a559, _0x38fe94) {
                this['_one']['run'](_0x486ecd, _0x22a559, _0x38fe94);
            }, _0x6d4fc1['_renderOne' + 'Img'] = function (_0x30884d, _0x5d3d7b, _0x56a1f0, _0x2c241d) {
                this['_one']['run'](_0x5d3d7b, _0x56a1f0, _0x2c241d);
            }, _0x6d4fc1['drawLine'] = function (_0x4c8a9c, _0x2ced11, _0x9820c2, _0x149db7, _0x15118d, _0x1d620e) {
                void 0x0 === _0x1d620e && (_0x1d620e = 0x1);
                var _0x1e5262 = 0x0;
                _0x4fec79['isWebGL'] && (_0x1e5262 = _0x2a3233['getInstanc' + 'e']()['getId'](), null == this['_vectorgra' + 'phArray'] && (this['_vectorgra' + 'phArray'] = []), this['_vectorgra' + 'phArray']['push'](_0x1e5262));
                var _0x3842b5 = 0x1 > _0x1d620e || _0x1d620e % 0x2 === 0x0 ? 0x0 : 0.5;
                return this['_saveToCmd'](_0x4fec79['_context']['_drawLine'], _0x4f150a['create']['call'](this, _0x4c8a9c + _0x3842b5, _0x2ced11 + _0x3842b5, _0x9820c2 + _0x3842b5, _0x149db7 + _0x3842b5, _0x15118d, _0x1d620e, _0x1e5262));
            }, _0x6d4fc1['drawLines'] = function (_0xca531b, _0x26f633, _0x27bb1a, _0x417055, _0x3e1bf7) {
                void 0x0 === _0x3e1bf7 && (_0x3e1bf7 = 0x1);
                var _0x4a0e3e = 0x0;
                if (!_0x27bb1a || _0x27bb1a['length'] < 0x4)
                    return null;
                _0x4fec79['isWebGL'] && (_0x4a0e3e = _0x2a3233['getInstanc' + 'e']()['getId'](), null == this['_vectorgra' + 'phArray'] && (this['_vectorgra' + 'phArray'] = []), this['_vectorgra' + 'phArray']['push'](_0x4a0e3e));
                var _0x392f60 = 0x1 > _0x3e1bf7 || _0x3e1bf7 % 0x2 === 0x0 ? 0x0 : 0.5;
                return this['_saveToCmd'](_0x4fec79['_context']['_drawLines'], _0x47f9c7['create']['call'](this, _0xca531b + _0x392f60, _0x26f633 + _0x392f60, _0x27bb1a, _0x417055, _0x3e1bf7, _0x4a0e3e));
            }, _0x6d4fc1['drawCurves'] = function (_0xeb785d, _0x30e029, _0x5be589, _0x9c57e4, _0x1bb1a8) {
                return void 0x0 === _0x1bb1a8 && (_0x1bb1a8 = 0x1), this['_saveToCmd'](_0x4fec79['_context']['_drawCurve' + 's'], _0x3cbe98['create']['call'](this, _0xeb785d, _0x30e029, _0x5be589, _0x9c57e4, _0x1bb1a8));
            }, _0x6d4fc1['drawRect'] = function (_0x5d80bc, _0xfa2677, _0x1ca311, _0x4b33e4, _0x3996c6, _0x511596, _0x53290d) {
                void 0x0 === _0x53290d && (_0x53290d = 0x1);
                var _0x28e08a = _0x53290d >= 0x1 && _0x511596 ? _0x53290d / 0x2 : 0x0, _0x868c26 = _0x511596 ? _0x53290d : 0x0;
                return this['_saveToCmd'](_0x4fec79['_context']['drawRect'], _0x4f9c8a['create']['call'](this, _0x5d80bc + _0x28e08a, _0xfa2677 + _0x28e08a, _0x1ca311 - _0x868c26, _0x4b33e4 - _0x868c26, _0x3996c6, _0x511596, _0x53290d));
            }, _0x6d4fc1['drawCircle'] = function (_0x14628b, _0x1e78c7, _0x156701, _0x31430b, _0x2ec83d, _0x19c3b3) {
                void 0x0 === _0x19c3b3 && (_0x19c3b3 = 0x1);
                var _0x26f968 = _0x19c3b3 >= 0x1 && _0x2ec83d ? _0x19c3b3 / 0x2 : 0x0, _0x5a9555 = 0x0;
                return _0x4fec79['isWebGL'] && (_0x5a9555 = _0x2a3233['getInstanc' + 'e']()['getId'](), null == this['_vectorgra' + 'phArray'] && (this['_vectorgra' + 'phArray'] = []), this['_vectorgra' + 'phArray']['push'](_0x5a9555)), this['_saveToCmd'](_0x4fec79['_context']['_drawCircl' + 'e'], _0x2a54bf['create']['call'](this, _0x14628b, _0x1e78c7, _0x156701 - _0x26f968, _0x31430b, _0x2ec83d, _0x19c3b3, _0x5a9555));
            }, _0x6d4fc1['drawPie'] = function (_0x26b297, _0x312065, _0x9224d3, _0x22241e, _0x50aa59, _0x30222a, _0x3b4deb, _0x5e467d) {
                void 0x0 === _0x5e467d && (_0x5e467d = 0x1);
                var _0xfb04a4 = _0x5e467d >= 0x1 && _0x3b4deb ? _0x5e467d / 0x2 : 0x0, _0x1238ae = _0x3b4deb ? _0x5e467d : 0x0, _0x249bf4 = 0x0;
                return _0x4fec79['isWebGL'] && (_0x249bf4 = _0x2a3233['getInstanc' + 'e']()['getId'](), null == this['_vectorgra' + 'phArray'] && (this['_vectorgra' + 'phArray'] = []), this['_vectorgra' + 'phArray']['push'](_0x249bf4)), this['_saveToCmd'](_0x4fec79['_context']['_drawPie'], _0x4dc72['create']['call'](this, _0x26b297 + _0xfb04a4, _0x312065 + _0xfb04a4, _0x9224d3 - _0x1238ae, _0x3b78ce['toRadian'](_0x22241e), _0x3b78ce['toRadian'](_0x50aa59), _0x30222a, _0x3b4deb, _0x5e467d, _0x249bf4));
            }, _0x6d4fc1['drawPoly'] = function (_0x3829ea, _0x5746fb, _0x41e9c2, _0x5ac022, _0x43b731, _0x31b759) {
                void 0x0 === _0x31b759 && (_0x31b759 = 0x1);
                var _0x3e80cb = 0x0;
                if (_0x4fec79['isWebGL']) {
                    _0x3e80cb = _0x2a3233['getInstanc' + 'e']()['getId'](), null == this['_vectorgra' + 'phArray'] && (this['_vectorgra' + 'phArray'] = []), this['_vectorgra' + 'phArray']['push'](_0x3e80cb);
                    var _0x4dad94 = !0x1;
                    _0x4dad94 = _0x41e9c2['length'] > 0x6 ? !0x1 : !0x0;
                }
                var _0x4797e7 = _0x31b759 >= 0x1 && _0x43b731 ? _0x31b759 % 0x2 === 0x0 ? 0x0 : 0.5 : 0x0;
                return this['_saveToCmd'](_0x4fec79['_context']['_drawPoly'], _0x57d8ec['create']['call'](this, _0x3829ea + _0x4797e7, _0x5746fb + _0x4797e7, _0x41e9c2, _0x5ac022, _0x43b731, _0x31b759, _0x4dad94, _0x3e80cb));
            }, _0x6d4fc1['drawPath'] = function (_0x5e8fa5, _0x53f1fe, _0x116382, _0x2602c4, _0x2e5880) {
                return this['_saveToCmd'](_0x4fec79['_context']['_drawPath'], _0x51cfb8['create']['call'](this, _0x5e8fa5, _0x53f1fe, _0x116382, _0x2602c4, _0x2e5880));
            }, _0x71e09a(0x0, _0x6d4fc1, 'cmds', function () {
                return this['_cmds'];
            }, function (_0x18a047) {
                this['_sp'] && (this['_sp']['_renderTyp' + 'e'] |= 0x200, this['_sp']['_setRender' + 'Type'](this['_sp']['_renderTyp' + 'e'])), this['_cmds'] = _0x18a047, this['_render'] = this['_renderAll'], this['_repaint']();
            }), _0x7f0e38;
        }()), _0x58cc6b = function () {
            function _0x374934() {
            }
            return _0x4621f4(_0x374934, 'laya.utils' + '.CacheMang' + 'er'), _0x374934['regCacheBy' + 'Function'] = function (_0x55a410, _0x39c046) {
                _0x374934['unRegCache' + 'ByFunction'](_0x55a410, _0x39c046);
                var _0x2d3133;
                _0x2d3133 = {
                    'tryDispose': _0x55a410,
                    'getCacheList': _0x39c046
                }, _0x374934['_cacheList']['push'](_0x2d3133);
            }, _0x374934['unRegCache' + 'ByFunction'] = function (_0x5c5a08, _0x344b49) {
                var _0x192889 = 0x0, _0x2a4224 = 0x0;
                for (_0x2a4224 = _0x374934['_cacheList']['length'], _0x192889 = 0x0; _0x2a4224 > _0x192889; _0x192889++)
                    if (_0x374934['_cacheList'][_0x192889]['tryDispose'] == _0x5c5a08 && _0x374934['_cacheList'][_0x192889]['getCacheLi' + 'st'] == _0x344b49)
                        return void _0x374934['_cacheList']['splice'](_0x192889, 0x1);
            }, _0x374934['forceDispo' + 'se'] = function () {
                var _0x5d927d = 0x0, _0x503598 = _0x374934['_cacheList']['length'];
                for (_0x5d927d = 0x0; _0x503598 > _0x5d927d; _0x5d927d++)
                    _0x374934['_cacheList'][_0x5d927d]['tryDispose'](!0x0);
            }, _0x374934['beginCheck'] = function (_0x1a7912) {
                void 0x0 === _0x1a7912 && (_0x1a7912 = 0x3a98), _0x34a895['systemTime' + 'r']['loop'](_0x1a7912, null, _0x374934['_checkLoop']);
            }, _0x374934['stopCheck'] = function () {
                _0x34a895['systemTime' + 'r']['clear'](null, _0x374934['_checkLoop']);
            }, _0x374934['_checkLoop'] = function () {
                var _0x3b2482 = _0x374934['_cacheList'];
                if (!(_0x3b2482['length'] < 0x1)) {
                    var _0x31169b = _0x2ad6c5['now'](), _0x2e7cb9 = 0x0, _0x40b51d = 0x0;
                    for (_0x40b51d = _0x2e7cb9 = _0x3b2482['length']; _0x2e7cb9 > 0x0 && (_0x374934['_index']++, _0x374934['_index'] = _0x374934['_index'] % _0x40b51d, _0x3b2482[_0x374934['_index']]['tryDispose'](!0x1), !(_0x2ad6c5['now']() - _0x31169b > _0x374934['loopTimeLi' + 'mit']));)
                        _0x2e7cb9--;
                }
            }, _0x374934['loopTimeLi' + 'mit'] = 0x2, _0x374934['_cacheList'] = [], _0x374934['_index'] = 0x0, _0x374934;
        }(), _0x4a4c33 = function () {
            function _0x19c694() {
            }
            _0x4621f4(_0x19c694, 'laya.event' + 's.Event');
            var _0xe002d9 = _0x19c694['prototype'];
            return _0xe002d9['setTo'] = function (_0x13f7b4, _0x3e754a, _0x1ec417) {
                return this['type'] = _0x13f7b4, this['currentTar' + 'get'] = _0x3e754a, this['target'] = _0x1ec417, this;
            }, _0xe002d9['stopPropag' + 'ation'] = function () {
                this['_stoped'] = !0x0;
            }, _0x71e09a(0x0, _0xe002d9, 'stageY', function () {
                return _0x34a895['stage']['mouseY'];
            }), _0x71e09a(0x0, _0xe002d9, 'charCode', function () {
                return this['nativeEven' + 't']['charCode'];
            }), _0x71e09a(0x0, _0xe002d9, 'touches', function () {
                if (!this['nativeEven' + 't'])
                    return null;
                var _0x55b041 = this['nativeEven' + 't']['touches'];
                if (_0x55b041)
                    for (var _0x5e6390 = _0x34a895['stage'], _0x39973c = 0x0, _0xe23857 = _0x55b041['length']; _0xe23857 > _0x39973c; _0x39973c++) {
                        var _0x1f5d06 = _0x55b041[_0x39973c], _0x1515bd = _0x251b03['TEMP'];
                        _0x1515bd['setTo'](_0x1f5d06['clientX'], _0x1f5d06['clientY']), _0x5e6390['_canvasTra' + 'nsform']['invertTran' + 'sformPoint'](_0x1515bd), _0x5e6390['transform']['invertTran' + 'sformPoint'](_0x1515bd), _0x1f5d06['stageX'] = _0x1515bd['x'], _0x1f5d06['stageY'] = _0x1515bd['y'];
                    }
                return _0x55b041;
            }), _0x71e09a(0x0, _0xe002d9, 'keyLocatio' + 'n', function () {
                return this['nativeEven' + 't']['location'] || this['nativeEven' + 't']['keyLocatio' + 'n'];
            }), _0x71e09a(0x0, _0xe002d9, 'ctrlKey', function () {
                return this['nativeEven' + 't']['ctrlKey'];
            }), _0x71e09a(0x0, _0xe002d9, 'altKey', function () {
                return this['nativeEven' + 't']['altKey'];
            }), _0x71e09a(0x0, _0xe002d9, 'shiftKey', function () {
                return this['nativeEven' + 't']['shiftKey'];
            }), _0x71e09a(0x0, _0xe002d9, 'stageX', function () {
                return _0x34a895['stage']['mouseX'];
            }), _0x19c694['EMPTY'] = new _0x19c694(), _0x19c694['MOUSE_DOWN'] = 'mousedown', _0x19c694['MOUSE_UP'] = 'mouseup', _0x19c694['CLICK'] = 'click', _0x19c694['RIGHT_MOUS' + 'E_DOWN'] = 'rightmouse' + 'down', _0x19c694['RIGHT_MOUS' + 'E_UP'] = 'rightmouse' + 'up', _0x19c694['RIGHT_CLIC' + 'K'] = 'rightclick', _0x19c694['MOUSE_MOVE'] = 'mousemove', _0x19c694['MOUSE_OVER'] = 'mouseover', _0x19c694['MOUSE_OUT'] = 'mouseout', _0x19c694['MOUSE_WHEE' + 'L'] = 'mousewheel', _0x19c694['ROLL_OVER'] = 'mouseover', _0x19c694['ROLL_OUT'] = 'mouseout', _0x19c694['DOUBLE_CLI' + 'CK'] = 'doubleclic' + 'k', _0x19c694['CHANGE'] = 'change', _0x19c694['CHANGED'] = 'changed', _0x19c694['RESIZE'] = 'resize', _0x19c694['ADDED'] = 'added', _0x19c694['REMOVED'] = 'removed', _0x19c694['DISPLAY'] = 'display', _0x19c694['UNDISPLAY'] = 'undisplay', _0x19c694['ERROR'] = 'error', _0x19c694['COMPLETE'] = 'complete', _0x19c694['LOADED'] = 'loaded', _0x19c694['READY'] = 'ready', _0x19c694['PROGRESS'] = 'progress', _0x19c694['INPUT'] = 'input', _0x19c694['RENDER'] = 'render', _0x19c694['OPEN'] = 'open', _0x19c694['MESSAGE'] = 'message', _0x19c694['CLOSE'] = 'close', _0x19c694['KEY_DOWN'] = 'keydown', _0x19c694['KEY_PRESS'] = 'keypress', _0x19c694['KEY_UP'] = 'keyup', _0x19c694['FRAME'] = 'enterframe', _0x19c694['DRAG_START'] = 'dragstart', _0x19c694['DRAG_MOVE'] = 'dragmove', _0x19c694['DRAG_END'] = 'dragend', _0x19c694['ENTER'] = 'enter', _0x19c694['SELECT'] = 'select', _0x19c694['BLUR'] = 'blur', _0x19c694['FOCUS'] = 'focus', _0x19c694['VISIBILITY' + '_CHANGE'] = 'visibility' + 'change', _0x19c694['FOCUS_CHAN' + 'GE'] = 'focuschang' + 'e', _0x19c694['PLAYED'] = 'played', _0x19c694['PAUSED'] = 'paused', _0x19c694['STOPPED'] = 'stopped', _0x19c694['START'] = 'start', _0x19c694['END'] = 'end', _0x19c694['COMPONENT_' + 'ADDED'] = 'componenta' + 'dded', _0x19c694['COMPONENT_' + 'REMOVED'] = 'componentr' + 'emoved', _0x19c694['RELEASED'] = 'released', _0x19c694['LINK'] = 'link', _0x19c694['LABEL'] = 'label', _0x19c694['FULL_SCREE' + 'N_CHANGE'] = 'fullscreen' + 'change', _0x19c694['DEVICE_LOS' + 'T'] = 'devicelost', _0x19c694['TRANSFORM_' + 'CHANGED'] = 'transformc' + 'hanged', _0x19c694['ANIMATION_' + 'CHANGED'] = 'animationc' + 'hanged', _0x19c694['TRAIL_FILT' + 'ER_CHANGE'] = 'trailfilte' + 'rchange', _0x19c694['TRIGGER_EN' + 'TER'] = 'triggerent' + 'er', _0x19c694['TRIGGER_ST' + 'AY'] = 'triggersta' + 'y', _0x19c694['TRIGGER_EX' + 'IT'] = 'triggerexi' + 't', _0x19c694;
        }(), _0x2e66fe = (function () {
            function _0x4b41c2() {
            }
            return _0x4621f4(_0x4b41c2, 'laya.displ' + 'ay.SpriteC' + 'onst'), _0x4b41c2['POSRENDERT' + 'YPE'] = 0x0, _0x4b41c2['POSBUFFERB' + 'EGIN'] = 0x1, _0x4b41c2['POSBUFFERE' + 'ND'] = 0x2, _0x4b41c2['POSFRAMECO' + 'UNT'] = 0x3, _0x4b41c2['POSREPAINT'] = 0x4, _0x4b41c2['POSVISIBLE' + '_NATIVE'] = 0x5, _0x4b41c2['POSX'] = 0x6, _0x4b41c2['POSY'] = 0x7, _0x4b41c2['POSPIVOTX'] = 0x8, _0x4b41c2['POSPIVOTY'] = 0x9, _0x4b41c2['POSSCALEX'] = 0xa, _0x4b41c2['POSSCALEY'] = 0xb, _0x4b41c2['POSSKEWX'] = 0xc, _0x4b41c2['POSSKEWY'] = 0xd, _0x4b41c2['POSROTATIO' + 'N'] = 0xe, _0x4b41c2['POSTRANSFO' + 'RM_FLAG'] = 0xf, _0x4b41c2['POSMATRIX'] = 0x10, _0x4b41c2['POSCOLOR'] = 0x16, _0x4b41c2['POSGRAPICS'] = 0x17, _0x4b41c2['POSSIM_TEX' + 'TURE_ID'] = 0x18, _0x4b41c2['POSSIM_TEX' + 'TURE_DATA'] = 0x19, _0x4b41c2['POSLAYAGL3' + 'D'] = 0x1a, _0x4b41c2['POSCUSTOM'] = 0x1b, _0x4b41c2['POSCLIP'] = 0x1c, _0x4b41c2['POSCLIP_NE' + 'G_POS'] = 0x20, _0x4b41c2['POSCOLORFI' + 'LTER_COLOR'] = 0x22, _0x4b41c2['POSCOLORFI' + 'LTER_ALPHA'] = 0x32, _0x4b41c2['POSCALLBAC' + 'K_OBJ_ID'] = 0x36, _0x4b41c2['POSCUSTOM_' + 'CALLBACK_F' + 'UN_ID'] = 0x37, _0x4b41c2['POSCANVAS_' + 'CALLBACK_F' + 'UN_ID'] = 0x38, _0x4b41c2['POSCANVAS_' + 'CALLBACK_E' + 'ND_FUN_ID'] = 0x39, _0x4b41c2['POSCANVAS_' + 'BEGIN_CMD_' + 'ID'] = 0x3a, _0x4b41c2['POSCANVAS_' + 'END_CMD_ID'] = 0x3b, _0x4b41c2['POSCANVAS_' + 'DRAW_TARGE' + 'T_CMD_ID'] = 0x3c, _0x4b41c2['POSCANVAS_' + 'DRAW_TARGE' + 'T_PARAM_ID'] = 0x3d, _0x4b41c2['POSLAYA3D_' + 'FUN_ID'] = 0x3e, _0x4b41c2['POSCACHE_C' + 'ANVAS_SKIP' + '_PAINT_FLA' + 'G'] = 0x3f, _0x4b41c2['POSFILTER_' + 'BEGIN_CMD_' + 'ID'] = 0x40, _0x4b41c2['POSFILTER_' + 'CALLBACK_F' + 'UN_ID'] = 0x41, _0x4b41c2['POSFILTER_' + 'END_CMD_ID'] = 0x42, _0x4b41c2['POSFILTER_' + 'END_CALLBA' + 'CK_FUN_ID'] = 0x43, _0x4b41c2['POSGRAPHIC' + 'S_CALLBACK' + '_FUN_ID'] = 0x44, _0x4b41c2['POSMASK_CA' + 'LLBACK_FUN' + '_ID'] = 0x45, _0x4b41c2['POSMASK_CM' + 'D_ID'] = 0x46, _0x4b41c2['POSBLEND_S' + 'RC'] = 0x47, _0x4b41c2['POSBLEND_D' + 'EST'] = 0x48, _0x4b41c2['POSSIM_REC' + 'T_FILL_CMD'] = 0x49, _0x4b41c2['POSSIM_REC' + 'T_FILL_DAT' + 'A'] = 0x4a, _0x4b41c2['POSSIM_REC' + 'T_STROKE_C' + 'MD'] = 0x4b, _0x4b41c2['POSSIM_REC' + 'T_STROKE_D' + 'ATA'] = 0x4c, _0x4b41c2['POSSIZE'] = 0x4d, _0x4b41c2['ALPHA'] = 0x1, _0x4b41c2['TRANSFORM'] = 0x2, _0x4b41c2['BLEND'] = 0x4, _0x4b41c2['CANVAS'] = 0x8, _0x4b41c2['FILTERS'] = 0x10, _0x4b41c2['MASK'] = 0x20, _0x4b41c2['CLIP'] = 0x40, _0x4b41c2['STYLE'] = 0x80, _0x4b41c2['TEXTURE'] = 0x100, _0x4b41c2['GRAPHICS'] = 0x200, _0x4b41c2['LAYAGL3D'] = 0x400, _0x4b41c2['CUSTOM'] = 0x800, _0x4b41c2['ONECHILD'] = 0x1000, _0x4b41c2['CHILDS'] = 0x2000, _0x4b41c2['REPAINT_NO' + 'NE'] = 0x0, _0x4b41c2['REPAINT_NO' + 'DE'] = 0x1, _0x4b41c2['REPAINT_CA' + 'CHE'] = 0x2, _0x4b41c2['REPAINT_AL' + 'L'] = 0x3, _0x4b41c2;
        }(), function () {
            function _0x4940a3(_0x4b7a52) {
                this['_xd_'] = !0x0, this['_allocated' + '_'] = 0x8, this['_pos_'] = 0x0, this['_length'] = 0x0, _0x4b7a52 ? (this['_u8d_'] = new Uint8Array(_0x4b7a52), this['_d_'] = new DataView(this['_u8d_']['buffer']), this['_length'] = this['_d_']['byteLength']) : this['_resizeBuf' + 'fer'](this['_allocated' + '_']);
            }
            _0x4621f4(_0x4940a3, 'laya.utils' + '.Byte');
            var _0xe5fc59 = _0x4940a3['prototype'];
            return _0xe5fc59['_resizeBuf' + 'fer'] = function (_0x2d5538) {
                try {
                    var _0x309aa5 = new Uint8Array(_0x2d5538);
                    null != this['_u8d_'] && (this['_u8d_']['length'] <= _0x2d5538 ? _0x309aa5['set'](this['_u8d_']) : _0x309aa5['set'](this['_u8d_']['subarray'](0x0, _0x2d5538))), this['_u8d_'] = _0x309aa5, this['_d_'] = new DataView(_0x309aa5['buffer']);
                } catch (_0x57a35b) {
                    throw 'Invalid\x20ty' + 'ped\x20array\x20' + 'length:' + _0x2d5538;
                }
            }, _0xe5fc59['getString'] = function () {
                return this['readString']();
            }, _0xe5fc59['readString'] = function () {
                return this['_rUTF'](this['getUint16']());
            }, _0xe5fc59['getFloat32' + 'Array'] = function (_0x2d4e79, _0x180e85) {
                return this['readFloat3' + '2Array'](_0x2d4e79, _0x180e85);
            }, _0xe5fc59['readFloat3' + '2Array'] = function (_0x2d27c0, _0x43143) {
                var _0x346bbb = _0x2d27c0 + _0x43143;
                _0x346bbb = _0x346bbb > this['_length'] ? this['_length'] : _0x346bbb;
                var _0x314345 = new Float32Array(this['_d_']['buffer']['slice'](_0x2d27c0, _0x346bbb));
                return this['_pos_'] = _0x346bbb, _0x314345;
            }, _0xe5fc59['getUint8Ar' + 'ray'] = function (_0x2395b5, _0x32ad5d) {
                return this['readUint8A' + 'rray'](_0x2395b5, _0x32ad5d);
            }, _0xe5fc59['readUint8A' + 'rray'] = function (_0x39730a, _0x5d1155) {
                var _0xca5abd = _0x39730a + _0x5d1155;
                _0xca5abd = _0xca5abd > this['_length'] ? this['_length'] : _0xca5abd;
                var _0x4cfe43 = new Uint8Array(this['_d_']['buffer']['slice'](_0x39730a, _0xca5abd));
                return this['_pos_'] = _0xca5abd, _0x4cfe43;
            }, _0xe5fc59['getInt16Ar' + 'ray'] = function (_0x4134b7, _0x2adf2a) {
                return this['readInt16A' + 'rray'](_0x4134b7, _0x2adf2a);
            }, _0xe5fc59['readInt16A' + 'rray'] = function (_0x1b16cb, _0x5d646a) {
                var _0x287c72 = _0x1b16cb + _0x5d646a;
                _0x287c72 = _0x287c72 > this['_length'] ? this['_length'] : _0x287c72;
                var _0x261dcd = new Int16Array(this['_d_']['buffer']['slice'](_0x1b16cb, _0x287c72));
                return this['_pos_'] = _0x287c72, _0x261dcd;
            }, _0xe5fc59['getFloat32'] = function () {
                return this['readFloat3' + '2']();
            }, _0xe5fc59['readFloat3' + '2'] = function () {
                if (this['_pos_'] + 0x4 > this['_length'])
                    throw 'getFloat32' + '\x20error\x20-\x20O' + 'ut\x20of\x20boun' + 'ds';
                var _0x17e7ce = this['_d_']['getFloat32'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x4, _0x17e7ce;
            }, _0xe5fc59['getFloat64'] = function () {
                return this['readFloat6' + '4']();
            }, _0xe5fc59['readFloat6' + '4'] = function () {
                if (this['_pos_'] + 0x8 > this['_length'])
                    throw 'getFloat64' + '\x20error\x20-\x20O' + 'ut\x20of\x20boun' + 'ds';
                var _0x308623 = this['_d_']['getFloat64'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x8, _0x308623;
            }, _0xe5fc59['writeFloat' + '32'] = function (_0xbc2efc) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x4), this['_d_']['setFloat32'](this['_pos_'], _0xbc2efc, this['_xd_']), this['_pos_'] += 0x4;
            }, _0xe5fc59['writeFloat' + '64'] = function (_0x4af7a7) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x8), this['_d_']['setFloat64'](this['_pos_'], _0x4af7a7, this['_xd_']), this['_pos_'] += 0x8;
            }, _0xe5fc59['getInt32'] = function () {
                return this['readInt32']();
            }, _0xe5fc59['readInt32'] = function () {
                if (this['_pos_'] + 0x4 > this['_length'])
                    throw 'getInt32\x20e' + 'rror\x20-\x20Out' + '\x20of\x20bounds';
                var _0x2db47e = this['_d_']['getInt32'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x4, _0x2db47e;
            }, _0xe5fc59['getUint32'] = function () {
                return this['readUint32']();
            }, _0xe5fc59['readUint32'] = function () {
                if (this['_pos_'] + 0x4 > this['_length'])
                    throw 'getUint32\x20' + 'error\x20-\x20Ou' + 't\x20of\x20bound' + 's';
                var _0x572e0f = this['_d_']['getUint32'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x4, _0x572e0f;
            }, _0xe5fc59['writeInt32'] = function (_0x11370c) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x4), this['_d_']['setInt32'](this['_pos_'], _0x11370c, this['_xd_']), this['_pos_'] += 0x4;
            }, _0xe5fc59['writeUint3' + '2'] = function (_0x3a9bc2) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x4), this['_d_']['setUint32'](this['_pos_'], _0x3a9bc2, this['_xd_']), this['_pos_'] += 0x4;
            }, _0xe5fc59['getInt16'] = function () {
                return this['readInt16']();
            }, _0xe5fc59['readInt16'] = function () {
                if (this['_pos_'] + 0x2 > this['_length'])
                    throw 'getInt16\x20e' + 'rror\x20-\x20Out' + '\x20of\x20bounds';
                var _0x25f41f = this['_d_']['getInt16'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x2, _0x25f41f;
            }, _0xe5fc59['getUint16'] = function () {
                return this['readUint16']();
            }, _0xe5fc59['readUint16'] = function () {
                if (this['_pos_'] + 0x2 > this['_length'])
                    throw 'getUint16\x20' + 'error\x20-\x20Ou' + 't\x20of\x20bound' + 's';
                var _0x596015 = this['_d_']['getUint16'](this['_pos_'], this['_xd_']);
                return this['_pos_'] += 0x2, _0x596015;
            }, _0xe5fc59['writeUint1' + '6'] = function (_0xeba12b) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x2), this['_d_']['setUint16'](this['_pos_'], _0xeba12b, this['_xd_']), this['_pos_'] += 0x2;
            }, _0xe5fc59['writeInt16'] = function (_0x4596c4) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x2), this['_d_']['setInt16'](this['_pos_'], _0x4596c4, this['_xd_']), this['_pos_'] += 0x2;
            }, _0xe5fc59['getUint8'] = function () {
                return this['readUint8']();
            }, _0xe5fc59['readUint8'] = function () {
                if (this['_pos_'] + 0x1 > this['_length'])
                    throw 'getUint8\x20e' + 'rror\x20-\x20Out' + '\x20of\x20bounds';
                return this['_u8d_'][this['_pos_']++];
            }, _0xe5fc59['writeUint8'] = function (_0x55635a) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x1), this['_d_']['setUint8'](this['_pos_'], _0x55635a), this['_pos_']++;
            }, _0xe5fc59['_getUInt8'] = function (_0x4dad9a) {
                return this['_readUInt8'](_0x4dad9a);
            }, _0xe5fc59['_readUInt8'] = function (_0x5013d1) {
                return this['_d_']['getUint8'](_0x5013d1);
            }, _0xe5fc59['_getUint16'] = function (_0x56a987) {
                return this['_readUint1' + '6'](_0x56a987);
            }, _0xe5fc59['_readUint1' + '6'] = function (_0x21403c) {
                return this['_d_']['getUint16'](_0x21403c, this['_xd_']);
            }, _0xe5fc59['_getMatrix'] = function () {
                return this['_readMatri' + 'x']();
            }, _0xe5fc59['_readMatri' + 'x'] = function () {
                var _0x2f8e37 = new _0x250bb7(this['getFloat32'](), this['getFloat32'](), this['getFloat32'](), this['getFloat32'](), this['getFloat32'](), this['getFloat32']());
                return _0x2f8e37;
            }, _0xe5fc59['_rUTF'] = function (_0x1bee62) {
                for (var _0x1789ad = '', _0x30a4b5 = this['_pos_'] + _0x1bee62, _0x319c64 = 0x0, _0x3923f6 = 0x0, _0x10aa16 = 0x0, _0x4e8f06 = String['fromCharCo' + 'de'], _0x49551b = this['_u8d_'], _0x425a05 = 0x0; this['_pos_'] < _0x30a4b5;)
                    _0x319c64 = _0x49551b[this['_pos_']++], 0x80 > _0x319c64 ? 0x0 != _0x319c64 && (_0x1789ad += _0x4e8f06(_0x319c64)) : 0xe0 > _0x319c64 ? _0x1789ad += _0x4e8f06((0x3f & _0x319c64) << 0x6 | 0x7f & _0x49551b[this['_pos_']++]) : 0xf0 > _0x319c64 ? (_0x3923f6 = _0x49551b[this['_pos_']++], _0x1789ad += _0x4e8f06((0x1f & _0x319c64) << 0xc | (0x7f & _0x3923f6) << 0x6 | 0x7f & _0x49551b[this['_pos_']++])) : (_0x3923f6 = _0x49551b[this['_pos_']++], _0x10aa16 = _0x49551b[this['_pos_']++], _0x1789ad += _0x4e8f06((0xf & _0x319c64) << 0x12 | (0x7f & _0x3923f6) << 0xc | _0x10aa16 << 0x6 & 0x7f | 0x7f & _0x49551b[this['_pos_']++])), _0x425a05++;
                return _0x1789ad;
            }, _0xe5fc59['getCustomS' + 'tring'] = function (_0x16d0e0) {
                return this['readCustom' + 'String'](_0x16d0e0);
            }, _0xe5fc59['readCustom' + 'String'] = function (_0x4254f2) {
                for (var _0x51c76e = '', _0x2bda6a = 0x0, _0x4810b0 = 0x0, _0x166c00 = 0x0, _0x2b264e = String['fromCharCo' + 'de'], _0x4989ec = this['_u8d_']; _0x4254f2 > 0x0;)
                    if (_0x4810b0 = _0x4989ec[this['_pos_']], 0x80 > _0x4810b0)
                        _0x51c76e += _0x2b264e(_0x4810b0), this['_pos_']++, _0x4254f2--;
                    else {
                        for (_0x2bda6a = _0x4810b0 - 0x80, this['_pos_']++, _0x4254f2 -= _0x2bda6a; _0x2bda6a > 0x0;)
                            _0x4810b0 = _0x4989ec[this['_pos_']++], _0x166c00 = _0x4989ec[this['_pos_']++], _0x51c76e += _0x2b264e(_0x166c00 << 0x8 | _0x4810b0), _0x2bda6a--;
                    }
                return _0x51c76e;
            }, _0xe5fc59['clear'] = function () {
                this['_pos_'] = 0x0, this['length'] = 0x0;
            }, _0xe5fc59['__getBuffe' + 'r'] = function () {
                return this['_d_']['buffer'];
            }, _0xe5fc59['writeUTFBy' + 'tes'] = function (_0x2869dd) {
                _0x2869dd += '';
                for (var _0x1e525c = 0x0, _0x4b186b = _0x2869dd['length']; _0x4b186b > _0x1e525c; _0x1e525c++) {
                    var _0x273806 = _0x2869dd['charCodeAt'](_0x1e525c);
                    0x7f >= _0x273806 ? this['writeByte'](_0x273806) : 0x7ff >= _0x273806 ? (this['_ensureWri' + 'te'](this['_pos_'] + 0x2), this['_u8d_']['set']([
                        0xc0 | _0x273806 >> 0x6,
                        0x80 | 0x3f & _0x273806
                    ], this['_pos_']), this['_pos_'] += 0x2) : 0xffff >= _0x273806 ? (this['_ensureWri' + 'te'](this['_pos_'] + 0x3), this['_u8d_']['set']([
                        0xe0 | _0x273806 >> 0xc,
                        0x80 | _0x273806 >> 0x6 & 0x3f,
                        0x80 | 0x3f & _0x273806
                    ], this['_pos_']), this['_pos_'] += 0x3) : (this['_ensureWri' + 'te'](this['_pos_'] + 0x4), this['_u8d_']['set']([
                        0xf0 | _0x273806 >> 0x12,
                        0x80 | _0x273806 >> 0xc & 0x3f,
                        0x80 | _0x273806 >> 0x6 & 0x3f,
                        0x80 | 0x3f & _0x273806
                    ], this['_pos_']), this['_pos_'] += 0x4);
                }
            }, _0xe5fc59['writeUTFSt' + 'ring'] = function (_0x50806e) {
                var _0x2ca139 = this['pos'];
                this['writeUint1' + '6'](0x1), this['writeUTFBy' + 'tes'](_0x50806e);
                var _0x3e4cda = this['pos'] - _0x2ca139 - 0x2;
                this['_d_']['setUint16'](_0x2ca139, _0x3e4cda, this['_xd_']);
            }, _0xe5fc59['readUTFStr' + 'ing'] = function () {
                return this['readUTFByt' + 'es'](this['getUint16']());
            }, _0xe5fc59['getUTFStri' + 'ng'] = function () {
                return this['readUTFStr' + 'ing']();
            }, _0xe5fc59['readUTFByt' + 'es'] = function (_0x421675) {
                if (void 0x0 === _0x421675 && (_0x421675 = -0x1), 0x0 === _0x421675)
                    return '';
                var _0x3713ce = this['bytesAvail' + 'able'];
                if (_0x421675 > _0x3713ce)
                    throw 'readUTFByt' + 'es\x20error\x20-' + '\x20Out\x20of\x20bo' + 'unds';
                return _0x421675 = _0x421675 > 0x0 ? _0x421675 : _0x3713ce, this['_rUTF'](_0x421675);
            }, _0xe5fc59['getUTFByte' + 's'] = function (_0x5930fb) {
                return void 0x0 === _0x5930fb && (_0x5930fb = -0x1), this['readUTFByt' + 'es'](_0x5930fb);
            }, _0xe5fc59['writeByte'] = function (_0x2958b4) {
                this['_ensureWri' + 'te'](this['_pos_'] + 0x1), this['_d_']['setInt8'](this['_pos_'], _0x2958b4), this['_pos_'] += 0x1;
            }, _0xe5fc59['readByte'] = function () {
                if (this['_pos_'] + 0x1 > this['_length'])
                    throw 'readByte\x20e' + 'rror\x20-\x20Out' + '\x20of\x20bounds';
                return this['_d_']['getInt8'](this['_pos_']++);
            }, _0xe5fc59['getByte'] = function () {
                return this['readByte']();
            }, _0xe5fc59['_ensureWri' + 'te'] = function (_0xc39dd1) {
                this['_length'] < _0xc39dd1 && (this['_length'] = _0xc39dd1), this['_allocated' + '_'] < _0xc39dd1 && (this['length'] = _0xc39dd1);
            }, _0xe5fc59['writeArray' + 'Buffer'] = function (_0x5bbbb0, _0x10dfa0, _0x2ee08e) {
                if (void 0x0 === _0x10dfa0 && (_0x10dfa0 = 0x0), void 0x0 === _0x2ee08e && (_0x2ee08e = 0x0), 0x0 > _0x10dfa0 || 0x0 > _0x2ee08e)
                    throw 'writeArray' + 'Buffer\x20err' + 'or\x20-\x20Out\x20o' + 'f\x20bounds';
                0x0 == _0x2ee08e && (_0x2ee08e = _0x5bbbb0['byteLength'] - _0x10dfa0), this['_ensureWri' + 'te'](this['_pos_'] + _0x2ee08e);
                var _0x458637 = new Uint8Array(_0x5bbbb0);
                this['_u8d_']['set'](_0x458637['subarray'](_0x10dfa0, _0x10dfa0 + _0x2ee08e), this['_pos_']), this['_pos_'] += _0x2ee08e;
            }, _0xe5fc59['readArrayB' + 'uffer'] = function (_0x223c1b) {
                var _0x508c79;
                return _0x508c79 = this['_u8d_']['buffer']['slice'](this['_pos_'], this['_pos_'] + _0x223c1b), this['_pos_'] = this['_pos_'] + _0x223c1b, _0x508c79;
            }, _0x71e09a(0x0, _0xe5fc59, 'buffer', function () {
                var _0x5bc679 = this['_d_']['buffer'];
                return _0x5bc679['byteLength'] === this['_length'] ? _0x5bc679 : _0x5bc679['slice'](0x0, this['_length']);
            }), _0x71e09a(0x0, _0xe5fc59, 'endian', function () {
                return this['_xd_'] ? 'littleEndi' + 'an' : 'bigEndian';
            }, function (_0x2a05ac) {
                this['_xd_'] = 'littleEndi' + 'an' === _0x2a05ac;
            }), _0x71e09a(0x0, _0xe5fc59, 'length', function () {
                return this['_length'];
            }, function (_0x5c3357) {
                this['_allocated' + '_'] < _0x5c3357 ? this['_resizeBuf' + 'fer'](this['_allocated' + '_'] = Math['floor'](Math['max'](_0x5c3357, 0x2 * this['_allocated' + '_']))) : this['_allocated' + '_'] > _0x5c3357 && this['_resizeBuf' + 'fer'](this['_allocated' + '_'] = _0x5c3357), this['_length'] = _0x5c3357;
            }), _0x71e09a(0x0, _0xe5fc59, 'pos', function () {
                return this['_pos_'];
            }, function (_0x4e7e84) {
                this['_pos_'] = _0x4e7e84;
            }), _0x71e09a(0x0, _0xe5fc59, 'bytesAvail' + 'able', function () {
                return this['_length'] - this['_pos_'];
            }), _0x4940a3['getSystemE' + 'ndian'] = function () {
                if (!_0x4940a3['_sysEndian']) {
                    var _0x35338e = new ArrayBuffer(0x2);
                    new DataView(_0x35338e)['setInt16'](0x0, 0x100, !0x0), _0x4940a3['_sysEndian'] = 0x100 === new Int16Array(_0x35338e)[0x0] ? 'littleEndi' + 'an' : 'bigEndian';
                }
                return _0x4940a3['_sysEndian'];
            }, _0x4940a3['BIG_ENDIAN'] = 'bigEndian', _0x4940a3['LITTLE_END' + 'IAN'] = 'littleEndi' + 'an', _0x4940a3['_sysEndian'] = null, _0x4940a3;
        }()), _0x4612fc = function () {
            function _0x431edf(_0x4d1062) {
                this['_font'] = '14px\x20Arial', this['_family'] = 'Arial', this['_size'] = 0xe, this['_italic'] = !0x1, this['_bold'] = !0x1, this['_id'] = _0x431edf['_gfontID']++, this['setFont'](_0x4d1062 || this['_font']);
            }
            _0x4621f4(_0x431edf, 'laya.utils' + '.FontInfo');
            var _0x3b5f5d = _0x431edf['prototype'];
            return _0x3b5f5d['setFont'] = function (_0x5d598f) {
                this['_font'] = _0x5d598f;
                var _0x3d2230 = _0x5d598f['split']('\x20'), _0x391e9f = _0x3d2230['length'];
                if (0x2 > _0x391e9f)
                    return void (0x1 == _0x391e9f && _0x3d2230[0x0]['indexOf']('px') > 0x0 && (this['_size'] = parseInt(_0x3d2230[0x0])));
                for (var _0x810cfa = -0x1, _0x4d8ca5 = 0x0; _0x391e9f > _0x4d8ca5; _0x4d8ca5++)
                    if (_0x3d2230[_0x4d8ca5]['indexOf']('px') > 0x0 || _0x3d2230[_0x4d8ca5]['indexOf']('pt') > 0x0) {
                        _0x810cfa = _0x4d8ca5, this['_size'] = parseInt(_0x3d2230[_0x4d8ca5]), this['_size'] <= 0x0 && (console['error']('font\x20parse' + '\x20error:' + _0x5d598f), this['_size'] = 0xe);
                        break;
                    }
                var _0x11aaf2 = _0x810cfa + 0x1, _0x53bb3e = _0x3d2230[_0x11aaf2];
                for (_0x11aaf2++; _0x391e9f > _0x11aaf2; _0x11aaf2++)
                    _0x53bb3e += '\x20' + _0x3d2230[_0x11aaf2];
                this['_family'] = _0x53bb3e['split'](',')[0x0], this['_italic'] = _0x3d2230['indexOf']('italic') >= 0x0, this['_bold'] = _0x3d2230['indexOf']('bold') >= 0x0;
            }, _0x431edf['Parse'] = function (_0xbb3b61) {
                if (_0xbb3b61 === _0x431edf['_lastFont'])
                    return _0x431edf['_lastFontI' + 'nfo'];
                var _0x45ce7d = _0x431edf['_cache'][_0xbb3b61];
                return _0x45ce7d || (_0x45ce7d = _0x431edf['_cache'][_0xbb3b61] = new _0x431edf(_0xbb3b61)), _0x431edf['_lastFont'] = _0xbb3b61, _0x431edf['_lastFontI' + 'nfo'] = _0x45ce7d, _0x45ce7d;
            }, _0x431edf['EMPTY'] = new _0x431edf(null), _0x431edf['_cache'] = {}, _0x431edf['_gfontID'] = 0x0, _0x431edf['_lastFont'] = '', _0x431edf['_lastFontI' + 'nfo'] = null, _0x431edf;
        }(), _0x3b78ce = (function () {
            function _0x391754() {
            }
            return _0x4621f4(_0x391754, 'laya.utils' + '.Mouse'), _0x71e09a(0x1, _0x391754, 'cursor', function () {
                return _0x391754['_style']['cursor'];
            }, function (_0x1c3523) {
                _0x391754['_style']['cursor'] = _0x1c3523;
            }), _0x391754['hide'] = function () {
                'none' != _0x391754['cursor'] && (_0x391754['_preCursor'] = _0x391754['cursor'], _0x391754['cursor'] = 'none');
            }, _0x391754['show'] = function () {
                'none' == _0x391754['cursor'] && (_0x391754['_preCursor'] ? _0x391754['cursor'] = _0x391754['_preCursor'] : _0x391754['cursor'] = 'auto');
            }, _0x391754['_preCursor'] = null, _0x5043ef(_0x391754, [
                '_style',
                function () {
                    return this['_style'] = _0x2ad6c5['document']['body']['style'];
                }
            ]), _0x391754;
        }(), function () {
            function _0x4d142b() {
            }
            return _0x4621f4(_0x4d142b, 'laya.utils' + '.Utils'), _0x4d142b['toRadian'] = function (_0x351704) {
                return _0x351704 * _0x4d142b['_pi2'];
            }, _0x4d142b['toAngle'] = function (_0x20641d) {
                return _0x20641d * _0x4d142b['_pi'];
            }, _0x4d142b['toHexColor'] = function (_0x25dd90) {
                if (0x0 > _0x25dd90 || isNaN(_0x25dd90))
                    return null;
                for (var _0x55550f = _0x25dd90['toString'](0x10); _0x55550f['length'] < 0x6;)
                    _0x55550f = '0' + _0x55550f;
                return '#' + _0x55550f;
            }, _0x4d142b['getGID'] = function () {
                return _0x4d142b['_gid']++;
            }, _0x4d142b['concatArra' + 'y'] = function (_0x520c8c, _0x22a045) {
                if (!_0x22a045)
                    return _0x520c8c;
                if (!_0x520c8c)
                    return _0x22a045;
                var _0x26c38a = 0x0, _0x4b6e49 = _0x22a045['length'];
                for (_0x26c38a = 0x0; _0x4b6e49 > _0x26c38a; _0x26c38a++)
                    _0x520c8c['push'](_0x22a045[_0x26c38a]);
                return _0x520c8c;
            }, _0x4d142b['clearArray'] = function (_0x3b9822) {
                return _0x3b9822 ? (_0x3b9822['length'] = 0x0, _0x3b9822) : _0x3b9822;
            }, _0x4d142b['copyArray'] = function (_0x5f368c, _0x35f3f3) {
                if (_0x5f368c || (_0x5f368c = []), !_0x35f3f3)
                    return _0x5f368c;
                _0x5f368c['length'] = _0x35f3f3['length'];
                var _0x383ebc = 0x0, _0x303d01 = _0x35f3f3['length'];
                for (_0x383ebc = 0x0; _0x303d01 > _0x383ebc; _0x383ebc++)
                    _0x5f368c[_0x383ebc] = _0x35f3f3[_0x383ebc];
                return _0x5f368c;
            }, _0x4d142b['getGlobalR' + 'ecByPoints'] = function (_0xfba005, _0x4fa1f0, _0xbc9396, _0x6679db, _0x14dba5) {
                var _0x35b406;
                _0x35b406 = _0x251b03['create']()['setTo'](_0x4fa1f0, _0xbc9396), _0x35b406 = _0xfba005['localToGlo' + 'bal'](_0x35b406);
                var _0x30ba9f;
                _0x30ba9f = _0x251b03['create']()['setTo'](_0x6679db, _0x14dba5), _0x30ba9f = _0xfba005['localToGlo' + 'bal'](_0x30ba9f);
                var _0x4bf420 = _0x22858b['_getWrapRe' + 'c']([
                    _0x35b406['x'],
                    _0x35b406['y'],
                    _0x30ba9f['x'],
                    _0x30ba9f['y']
                ]);
                return _0x35b406['recover'](), _0x30ba9f['recover'](), _0x4bf420;
            }, _0x4d142b['getGlobalP' + 'osAndScale'] = function (_0x5ef398) {
                return _0x4d142b['getGlobalR' + 'ecByPoints'](_0x5ef398, 0x0, 0x0, 0x1, 0x1);
            }, _0x4d142b['bind'] = function (_0x4a2114, _0xe26b67) {
                var _0x4e92ff = _0x4a2114;
                return _0x4e92ff = _0x4a2114['bind'](_0xe26b67);
            }, _0x4d142b['measureTex' + 't'] = function (_0x36259f, _0x29b1e1) {
                return _0x552e50['measureTex' + 't'](_0x36259f, _0x29b1e1);
            }, _0x4d142b['updateOrde' + 'r'] = function (_0x29730f) {
                if (!_0x29730f || _0x29730f['length'] < 0x2)
                    return !0x1;
                for (var _0x4041d2, _0x3838d1 = 0x1, _0x1cedcc = 0x0, _0x5b36ce = _0x29730f['length'], _0xc6c652 = NaN; _0x5b36ce > _0x3838d1;) {
                    for (_0x1cedcc = _0x3838d1, _0x4041d2 = _0x29730f[_0x1cedcc], _0xc6c652 = _0x29730f[_0x1cedcc]['_zOrder']; --_0x1cedcc > -0x1 && _0x29730f[_0x1cedcc]['_zOrder'] > _0xc6c652;)
                        _0x29730f[_0x1cedcc + 0x1] = _0x29730f[_0x1cedcc];
                    _0x29730f[_0x1cedcc + 0x1] = _0x4041d2, _0x3838d1++;
                }
                return !0x0;
            }, _0x4d142b['transPoint' + 'List'] = function (_0x53d56b, _0x209f0a, _0xf4cb6c) {
                var _0x5f0c8d = 0x0, _0x2eb6df = _0x53d56b['length'];
                for (_0x5f0c8d = 0x0; _0x2eb6df > _0x5f0c8d; _0x5f0c8d += 0x2)
                    _0x53d56b[_0x5f0c8d] += _0x209f0a, _0x53d56b[_0x5f0c8d + 0x1] += _0xf4cb6c;
            }, _0x4d142b['parseInt'] = function (_0x11f074, _0x2fdc53) {
                void 0x0 === _0x2fdc53 && (_0x2fdc53 = 0x0);
                var _0x3b31e5 = _0x2ad6c5['window']['parseInt'](_0x11f074, _0x2fdc53);
                return isNaN(_0x3b31e5) ? 0x0 : _0x3b31e5;
            }, _0x4d142b['getFileExt' + 'ension'] = function (_0x9b81b5) {
                _0x4d142b['_extReg']['lastIndex'] = _0x9b81b5['lastIndexO' + 'f']('.');
                var _0x1cf65f = _0x4d142b['_extReg']['exec'](_0x9b81b5);
                return _0x1cf65f && _0x1cf65f['length'] > 0x1 ? _0x1cf65f[0x1]['toLowerCas' + 'e']() : null;
            }, _0x4d142b['getTransfo' + 'rmRelative' + 'ToWindow'] = function (_0x56efa3, _0x1d2698, _0x33b590) {
                var _0x35bf2a = _0x34a895['stage'], _0x45f3e7 = laya['utils']['Utils']['getGlobalP' + 'osAndScale'](_0x56efa3), _0x2aa187 = _0x35bf2a['_canvasTra' + 'nsform']['clone'](), _0x211fc9 = _0x2aa187['tx'], _0x4d1dd8 = _0x2aa187['ty'];
                _0x2aa187['rotate'](-Math['PI'] / 0xb4 * _0x34a895['stage']['canvasDegr' + 'ee']), _0x2aa187['scale'](_0x34a895['stage']['clientScal' + 'eX'], _0x34a895['stage']['clientScal' + 'eY']);
                var _0xb93b4e = _0x34a895['stage']['canvasDegr' + 'ee'] % 0xb4 != 0x0, _0x160c82 = NaN, _0x8f1293 = NaN;
                _0xb93b4e ? (_0x160c82 = _0x33b590 + _0x45f3e7['y'], _0x8f1293 = _0x1d2698 + _0x45f3e7['x'], _0x160c82 *= _0x2aa187['d'], _0x8f1293 *= _0x2aa187['a'], 0x5a == _0x34a895['stage']['canvasDegr' + 'ee'] ? (_0x160c82 = _0x211fc9 - _0x160c82, _0x8f1293 += _0x4d1dd8) : (_0x160c82 += _0x211fc9, _0x8f1293 = _0x4d1dd8 - _0x8f1293)) : (_0x160c82 = _0x1d2698 + _0x45f3e7['x'], _0x8f1293 = _0x33b590 + _0x45f3e7['y'], _0x160c82 *= _0x2aa187['a'], _0x8f1293 *= _0x2aa187['d'], _0x160c82 += _0x211fc9, _0x8f1293 += _0x4d1dd8), _0x8f1293 += _0x34a895['stage']['_safariOff' + 'setY'];
                var _0x13d2d0 = NaN, _0x57aa84 = NaN;
                return _0xb93b4e ? (_0x13d2d0 = _0x2aa187['d'] * _0x45f3e7['height'], _0x57aa84 = _0x2aa187['a'] * _0x45f3e7['width']) : (_0x13d2d0 = _0x2aa187['a'] * _0x45f3e7['width'], _0x57aa84 = _0x2aa187['d'] * _0x45f3e7['height']), {
                    'x': _0x160c82,
                    'y': _0x8f1293,
                    'scaleX': _0x13d2d0,
                    'scaleY': _0x57aa84
                };
            }, _0x4d142b['fitDOMElem' + 'entInArea'] = function (_0x2e8d14, _0x20ac77, _0x4376fc, _0x31c23a, _0x3f9983, _0x5d3dec) {
                _0x2e8d14['_fitLayaAi' + 'rInitializ' + 'ed'] || (_0x2e8d14['_fitLayaAi' + 'rInitializ' + 'ed'] = !0x0, _0x2e8d14['style']['transformO' + 'rigin'] = _0x2e8d14['style']['webKittran' + 'sformOrigi' + 'n'] = 'left\x20top', _0x2e8d14['style']['position'] = 'absolute');
                var _0x1a6b49 = _0x4d142b['getTransfo' + 'rmRelative' + 'ToWindow'](_0x20ac77, _0x4376fc, _0x31c23a);
                _0x2e8d14['style']['transform'] = _0x2e8d14['style']['webkitTran' + 'sform'] = 'scale(' + _0x1a6b49['scaleX'] + ',' + _0x1a6b49['scaleY'] + ')\x20rotate(' + _0x34a895['stage']['canvasDegr' + 'ee'] + 'deg)', _0x2e8d14['style']['width'] = _0x3f9983 + 'px', _0x2e8d14['style']['height'] = _0x5d3dec + 'px', _0x2e8d14['style']['left'] = _0x1a6b49['x'] + 'px', _0x2e8d14['style']['top'] = _0x1a6b49['y'] + 'px';
            }, _0x4d142b['isOkTextur' + 'eList'] = function (_0x4a7c71) {
                if (!_0x4a7c71)
                    return !0x1;
                var _0x5b2b70, _0x43928e = 0x0, _0x48d9b5 = _0x4a7c71['length'];
                for (_0x43928e = 0x0; _0x48d9b5 > _0x43928e; _0x43928e++)
                    if (_0x5b2b70 = _0x4a7c71[_0x43928e], !_0x5b2b70 || !_0x5b2b70['_getSource']())
                        return !0x1;
                return !0x0;
            }, _0x4d142b['isOKCmdLis' + 't'] = function (_0x485653) {
                if (!_0x485653)
                    return !0x1;
                var _0x506219, _0x3e011c = 0x0, _0x4da8d1 = _0x485653['length'];
                for (_0x3e011c = 0x0; _0x4da8d1 > _0x3e011c; _0x3e011c++)
                    _0x506219 = _0x485653[_0x3e011c];
                return !0x0;
            }, _0x4d142b['getQuerySt' + 'ring'] = function (_0x46d903) {
                if (_0x2ad6c5['onMiniGame'])
                    return null;
                var _0xe9ea06 = new RegExp('(^|&)' + _0x46d903 + ('=([^&]*)(&' + '|$)')), _0xf6a33c = _0xd373d9['location']['search']['substr'](0x1)['match'](_0xe9ea06);
                return null != _0xf6a33c ? unescape(_0xf6a33c[0x2]) : null;
            }, _0x4d142b['_gid'] = 0x1, _0x4d142b['_pi'] = 0xb4 / Math['PI'], _0x4d142b['_pi2'] = Math['PI'] / 0xb4, _0x4d142b['_extReg'] = /\.(\w+)\??/g, _0x4d142b['parseXMLFr' + 'omString'] = function (_0x5c5499) {
                var _0x259adb;
                if (_0x5c5499 = _0x5c5499['replace'](/>\s+</g, '><'), _0x259adb = new DOMParser()['parseFromS' + 'tring'](_0x5c5499, 'text/xml'), _0x259adb['firstChild']['textConten' + 't']['indexOf']('This\x20page\x20' + 'contains\x20t' + 'he\x20followi' + 'ng\x20errors') > -0x1)
                    throw new Error(_0x259adb['firstChild']['firstChild']['textConten' + 't']);
                return _0x259adb;
            }, _0x4d142b;
        }()), _0x452b71 = function () {
            function _0x569016() {
            }
            return _0x4621f4(_0x569016, 'laya.utils' + '.Ease'), _0x569016['linearNone'] = function (_0x118314, _0x12d2e8, _0x3db76e, _0x189eda) {
                return _0x3db76e * _0x118314 / _0x189eda + _0x12d2e8;
            }, _0x569016['linearIn'] = function (_0x1e4323, _0x432475, _0x4690f9, _0x2dca48) {
                return _0x4690f9 * _0x1e4323 / _0x2dca48 + _0x432475;
            }, _0x569016['linearInOu' + 't'] = function (_0x411611, _0x484baf, _0xdfa275, _0x36380a) {
                return _0xdfa275 * _0x411611 / _0x36380a + _0x484baf;
            }, _0x569016['linearOut'] = function (_0x3c0e86, _0x55000c, _0x266b53, _0x58ccfb) {
                return _0x266b53 * _0x3c0e86 / _0x58ccfb + _0x55000c;
            }, _0x569016['bounceIn'] = function (_0x2f0cb1, _0xaf571f, _0x207ab0, _0x472acb) {
                return _0x207ab0 - _0x569016['bounceOut'](_0x472acb - _0x2f0cb1, 0x0, _0x207ab0, _0x472acb) + _0xaf571f;
            }, _0x569016['bounceInOu' + 't'] = function (_0x1503a4, _0x4bedb4, _0x4c16aa, _0x42eaa7) {
                return 0.5 * _0x42eaa7 > _0x1503a4 ? 0.5 * _0x569016['bounceIn'](0x2 * _0x1503a4, 0x0, _0x4c16aa, _0x42eaa7) + _0x4bedb4 : 0.5 * _0x569016['bounceOut'](0x2 * _0x1503a4 - _0x42eaa7, 0x0, _0x4c16aa, _0x42eaa7) + 0.5 * _0x4c16aa + _0x4bedb4;
            }, _0x569016['bounceOut'] = function (_0x31bec5, _0x532f35, _0x21bf1b, _0x10f4c6) {
                return (_0x31bec5 /= _0x10f4c6) < 0x1 / 2.75 ? _0x21bf1b * (7.5625 * _0x31bec5 * _0x31bec5) + _0x532f35 : 0x2 / 2.75 > _0x31bec5 ? _0x21bf1b * (7.5625 * (_0x31bec5 -= 1.5 / 2.75) * _0x31bec5 + 0.75) + _0x532f35 : 2.5 / 2.75 > _0x31bec5 ? _0x21bf1b * (7.5625 * (_0x31bec5 -= 2.25 / 2.75) * _0x31bec5 + 0.9375) + _0x532f35 : _0x21bf1b * (7.5625 * (_0x31bec5 -= 2.625 / 2.75) * _0x31bec5 + 0.984375) + _0x532f35;
            }, _0x569016['backIn'] = function (_0x50c7ab, _0x3e4466, _0x482d57, _0x128b3e, _0xcd8360) {
                return void 0x0 === _0xcd8360 && (_0xcd8360 = 1.70158), _0x482d57 * (_0x50c7ab /= _0x128b3e) * _0x50c7ab * ((_0xcd8360 + 0x1) * _0x50c7ab - _0xcd8360) + _0x3e4466;
            }, _0x569016['backInOut'] = function (_0x4e7b4d, _0x54450e, _0x3ffe22, _0x2368fc, _0xcaa6a0) {
                return void 0x0 === _0xcaa6a0 && (_0xcaa6a0 = 1.70158), (_0x4e7b4d /= 0.5 * _0x2368fc) < 0x1 ? 0.5 * _0x3ffe22 * (_0x4e7b4d * _0x4e7b4d * (((_0xcaa6a0 *= 1.525) + 0x1) * _0x4e7b4d - _0xcaa6a0)) + _0x54450e : _0x3ffe22 / 0x2 * ((_0x4e7b4d -= 0x2) * _0x4e7b4d * (((_0xcaa6a0 *= 1.525) + 0x1) * _0x4e7b4d + _0xcaa6a0) + 0x2) + _0x54450e;
            }, _0x569016['backOut'] = function (_0x263a92, _0x4d98ec, _0x38a37c, _0x12a70d, _0x3e0bbd) {
                return void 0x0 === _0x3e0bbd && (_0x3e0bbd = 1.70158), _0x38a37c * ((_0x263a92 = _0x263a92 / _0x12a70d - 0x1) * _0x263a92 * ((_0x3e0bbd + 0x1) * _0x263a92 + _0x3e0bbd) + 0x1) + _0x4d98ec;
            }, _0x569016['elasticIn'] = function (_0x33c81b, _0x111b50, _0x4d5878, _0x1133fb, _0x42655c, _0x66fa65) {
                void 0x0 === _0x42655c && (_0x42655c = 0x0), void 0x0 === _0x66fa65 && (_0x66fa65 = 0x0);
                var _0x19bd16;
                return 0x0 == _0x33c81b ? _0x111b50 : 0x1 == (_0x33c81b /= _0x1133fb) ? _0x111b50 + _0x4d5878 : (_0x66fa65 || (_0x66fa65 = 0.3 * _0x1133fb), !_0x42655c || _0x4d5878 > 0x0 && _0x4d5878 > _0x42655c || 0x0 > _0x4d5878 && -_0x4d5878 > _0x42655c ? (_0x42655c = _0x4d5878, _0x19bd16 = _0x66fa65 / 0x4) : _0x19bd16 = _0x66fa65 / _0x569016['PI2'] * Math['asin'](_0x4d5878 / _0x42655c), -(_0x42655c * Math['pow'](0x2, 0xa * (_0x33c81b -= 0x1)) * Math['sin']((_0x33c81b * _0x1133fb - _0x19bd16) * _0x569016['PI2'] / _0x66fa65)) + _0x111b50);
            }, _0x569016['elasticInO' + 'ut'] = function (_0x3dbe02, _0x1df6b6, _0x95c802, _0x3b8f44, _0x3d5b29, _0xd348f8) {
                void 0x0 === _0x3d5b29 && (_0x3d5b29 = 0x0), void 0x0 === _0xd348f8 && (_0xd348f8 = 0x0);
                var _0x59cd63;
                return 0x0 == _0x3dbe02 ? _0x1df6b6 : 0x2 == (_0x3dbe02 /= 0.5 * _0x3b8f44) ? _0x1df6b6 + _0x95c802 : (_0xd348f8 || (_0xd348f8 = _0x3b8f44 * (0.3 * 1.5)), !_0x3d5b29 || _0x95c802 > 0x0 && _0x95c802 > _0x3d5b29 || 0x0 > _0x95c802 && -_0x95c802 > _0x3d5b29 ? (_0x3d5b29 = _0x95c802, _0x59cd63 = _0xd348f8 / 0x4) : _0x59cd63 = _0xd348f8 / _0x569016['PI2'] * Math['asin'](_0x95c802 / _0x3d5b29), 0x1 > _0x3dbe02 ? -0.5 * (_0x3d5b29 * Math['pow'](0x2, 0xa * (_0x3dbe02 -= 0x1)) * Math['sin']((_0x3dbe02 * _0x3b8f44 - _0x59cd63) * _0x569016['PI2'] / _0xd348f8)) + _0x1df6b6 : _0x3d5b29 * Math['pow'](0x2, -0xa * (_0x3dbe02 -= 0x1)) * Math['sin']((_0x3dbe02 * _0x3b8f44 - _0x59cd63) * _0x569016['PI2'] / _0xd348f8) * 0.5 + _0x95c802 + _0x1df6b6);
            }, _0x569016['elasticOut'] = function (_0x5769f6, _0x12e2ad, _0x8417d7, _0x145b5e, _0x13ed2b, _0x32af2d) {
                void 0x0 === _0x13ed2b && (_0x13ed2b = 0x0), void 0x0 === _0x32af2d && (_0x32af2d = 0x0);
                var _0x50e547;
                return 0x0 == _0x5769f6 ? _0x12e2ad : 0x1 == (_0x5769f6 /= _0x145b5e) ? _0x12e2ad + _0x8417d7 : (_0x32af2d || (_0x32af2d = 0.3 * _0x145b5e), !_0x13ed2b || _0x8417d7 > 0x0 && _0x8417d7 > _0x13ed2b || 0x0 > _0x8417d7 && -_0x8417d7 > _0x13ed2b ? (_0x13ed2b = _0x8417d7, _0x50e547 = _0x32af2d / 0x4) : _0x50e547 = _0x32af2d / _0x569016['PI2'] * Math['asin'](_0x8417d7 / _0x13ed2b), _0x13ed2b * Math['pow'](0x2, -0xa * _0x5769f6) * Math['sin']((_0x5769f6 * _0x145b5e - _0x50e547) * _0x569016['PI2'] / _0x32af2d) + _0x8417d7 + _0x12e2ad);
            }, _0x569016['strongIn'] = function (_0x10857f, _0x43593f, _0x411200, _0x4aada6) {
                return _0x411200 * (_0x10857f /= _0x4aada6) * _0x10857f * _0x10857f * _0x10857f * _0x10857f + _0x43593f;
            }, _0x569016['strongInOu' + 't'] = function (_0x3c66bd, _0x681176, _0x18db9a, _0x3f2df3) {
                return (_0x3c66bd /= 0.5 * _0x3f2df3) < 0x1 ? 0.5 * _0x18db9a * _0x3c66bd * _0x3c66bd * _0x3c66bd * _0x3c66bd * _0x3c66bd + _0x681176 : 0.5 * _0x18db9a * ((_0x3c66bd -= 0x2) * _0x3c66bd * _0x3c66bd * _0x3c66bd * _0x3c66bd + 0x2) + _0x681176;
            }, _0x569016['strongOut'] = function (_0xfd5d28, _0x55ec4a, _0x25916a, _0x4a74a9) {
                return _0x25916a * ((_0xfd5d28 = _0xfd5d28 / _0x4a74a9 - 0x1) * _0xfd5d28 * _0xfd5d28 * _0xfd5d28 * _0xfd5d28 + 0x1) + _0x55ec4a;
            }, _0x569016['sineInOut'] = function (_0x100775, _0x489d59, _0x25e0b3, _0x3bb294) {
                return 0.5 * -_0x25e0b3 * (Math['cos'](Math['PI'] * _0x100775 / _0x3bb294) - 0x1) + _0x489d59;
            }, _0x569016['sineIn'] = function (_0x5887c2, _0x258765, _0x4b333f, _0x4eb2e4) {
                return -_0x4b333f * Math['cos'](_0x5887c2 / _0x4eb2e4 * _0x569016['HALF_PI']) + _0x4b333f + _0x258765;
            }, _0x569016['sineOut'] = function (_0x105466, _0x461b35, _0x10b9cd, _0x5c2081) {
                return _0x10b9cd * Math['sin'](_0x105466 / _0x5c2081 * _0x569016['HALF_PI']) + _0x461b35;
            }, _0x569016['quintIn'] = function (_0x663e89, _0x1026a0, _0x324317, _0x16c7ae) {
                return _0x324317 * (_0x663e89 /= _0x16c7ae) * _0x663e89 * _0x663e89 * _0x663e89 * _0x663e89 + _0x1026a0;
            }, _0x569016['quintInOut'] = function (_0x29ee63, _0x4b5ea2, _0x3ec20c, _0x1a3594) {
                return (_0x29ee63 /= 0.5 * _0x1a3594) < 0x1 ? 0.5 * _0x3ec20c * _0x29ee63 * _0x29ee63 * _0x29ee63 * _0x29ee63 * _0x29ee63 + _0x4b5ea2 : 0.5 * _0x3ec20c * ((_0x29ee63 -= 0x2) * _0x29ee63 * _0x29ee63 * _0x29ee63 * _0x29ee63 + 0x2) + _0x4b5ea2;
            }, _0x569016['quintOut'] = function (_0x757e62, _0xbea2da, _0x3b36bb, _0x6ff3f5) {
                return _0x3b36bb * ((_0x757e62 = _0x757e62 / _0x6ff3f5 - 0x1) * _0x757e62 * _0x757e62 * _0x757e62 * _0x757e62 + 0x1) + _0xbea2da;
            }, _0x569016['quartIn'] = function (_0x2be9ad, _0x520f7e, _0x13ba5b, _0x152926) {
                return _0x13ba5b * (_0x2be9ad /= _0x152926) * _0x2be9ad * _0x2be9ad * _0x2be9ad + _0x520f7e;
            }, _0x569016['quartInOut'] = function (_0xddf917, _0xcb315c, _0x517a49, _0xb0d8b7) {
                return (_0xddf917 /= 0.5 * _0xb0d8b7) < 0x1 ? 0.5 * _0x517a49 * _0xddf917 * _0xddf917 * _0xddf917 * _0xddf917 + _0xcb315c : 0.5 * -_0x517a49 * ((_0xddf917 -= 0x2) * _0xddf917 * _0xddf917 * _0xddf917 - 0x2) + _0xcb315c;
            }, _0x569016['quartOut'] = function (_0x589b26, _0x48803, _0xdf3e9b, _0x2c094c) {
                return -_0xdf3e9b * ((_0x589b26 = _0x589b26 / _0x2c094c - 0x1) * _0x589b26 * _0x589b26 * _0x589b26 - 0x1) + _0x48803;
            }, _0x569016['cubicIn'] = function (_0x42fa8b, _0x286033, _0x547242, _0x56df54) {
                return _0x547242 * (_0x42fa8b /= _0x56df54) * _0x42fa8b * _0x42fa8b + _0x286033;
            }, _0x569016['cubicInOut'] = function (_0x187471, _0x4e08e4, _0x481cf3, _0x5b271e) {
                return (_0x187471 /= 0.5 * _0x5b271e) < 0x1 ? 0.5 * _0x481cf3 * _0x187471 * _0x187471 * _0x187471 + _0x4e08e4 : 0.5 * _0x481cf3 * ((_0x187471 -= 0x2) * _0x187471 * _0x187471 + 0x2) + _0x4e08e4;
            }, _0x569016['cubicOut'] = function (_0x6ea15b, _0x5115ed, _0x5dc139, _0x458259) {
                return _0x5dc139 * ((_0x6ea15b = _0x6ea15b / _0x458259 - 0x1) * _0x6ea15b * _0x6ea15b + 0x1) + _0x5115ed;
            }, _0x569016['quadIn'] = function (_0xecef0e, _0x4d8dcf, _0x299f09, _0x14ecce) {
                return _0x299f09 * (_0xecef0e /= _0x14ecce) * _0xecef0e + _0x4d8dcf;
            }, _0x569016['quadInOut'] = function (_0x54ebc5, _0x55baf5, _0x1cb43f, _0x5737b9) {
                return (_0x54ebc5 /= 0.5 * _0x5737b9) < 0x1 ? 0.5 * _0x1cb43f * _0x54ebc5 * _0x54ebc5 + _0x55baf5 : 0.5 * -_0x1cb43f * (--_0x54ebc5 * (_0x54ebc5 - 0x2) - 0x1) + _0x55baf5;
            }, _0x569016['quadOut'] = function (_0x26447d, _0x291123, _0x840f26, _0x178643) {
                return -_0x840f26 * (_0x26447d /= _0x178643) * (_0x26447d - 0x2) + _0x291123;
            }, _0x569016['expoIn'] = function (_0x56165f, _0x7df021, _0x4b2b84, _0x2225cf) {
                return 0x0 == _0x56165f ? _0x7df021 : _0x4b2b84 * Math['pow'](0x2, 0xa * (_0x56165f / _0x2225cf - 0x1)) + _0x7df021 - 0.001 * _0x4b2b84;
            }, _0x569016['expoInOut'] = function (_0x42ba00, _0x3abef1, _0x299412, _0x4dac50) {
                return 0x0 == _0x42ba00 ? _0x3abef1 : _0x42ba00 == _0x4dac50 ? _0x3abef1 + _0x299412 : (_0x42ba00 /= 0.5 * _0x4dac50) < 0x1 ? 0.5 * _0x299412 * Math['pow'](0x2, 0xa * (_0x42ba00 - 0x1)) + _0x3abef1 : 0.5 * _0x299412 * (-Math['pow'](0x2, -0xa * --_0x42ba00) + 0x2) + _0x3abef1;
            }, _0x569016['expoOut'] = function (_0x33894a, _0x2ffa3c, _0x443c45, _0x5cc38a) {
                return _0x33894a == _0x5cc38a ? _0x2ffa3c + _0x443c45 : _0x443c45 * (-Math['pow'](0x2, -0xa * _0x33894a / _0x5cc38a) + 0x1) + _0x2ffa3c;
            }, _0x569016['circIn'] = function (_0x21e27b, _0x4bc3cd, _0xe15733, _0x4f9885) {
                return -_0xe15733 * (Math['sqrt'](0x1 - (_0x21e27b /= _0x4f9885) * _0x21e27b) - 0x1) + _0x4bc3cd;
            }, _0x569016['circInOut'] = function (_0xb21674, _0x3498ac, _0x98fab3, _0x4bcb30) {
                return (_0xb21674 /= 0.5 * _0x4bcb30) < 0x1 ? 0.5 * -_0x98fab3 * (Math['sqrt'](0x1 - _0xb21674 * _0xb21674) - 0x1) + _0x3498ac : 0.5 * _0x98fab3 * (Math['sqrt'](0x1 - (_0xb21674 -= 0x2) * _0xb21674) + 0x1) + _0x3498ac;
            }, _0x569016['circOut'] = function (_0x5b5661, _0xa53667, _0x10a670, _0x391e10) {
                return _0x10a670 * Math['sqrt'](0x1 - (_0x5b5661 = _0x5b5661 / _0x391e10 - 0x1) * _0x5b5661) + _0xa53667;
            }, _0x569016['HALF_PI'] = 0.5 * Math['PI'], _0x569016['PI2'] = 0x2 * Math['PI'], _0x569016;
        }(), _0x26563f = (function () {
            function _0x1ed09c() {
            }
            return _0x4621f4(_0x1ed09c, 'laya.syste' + 'm.System'), _0x1ed09c['changeDefi' + 'nition'] = function (_0x60487e, _0x229c17) {
                _0x34a895[_0x60487e] = _0x229c17;
                var _0x4d408a = _0x60487e + '=classObj';
                _0x34a895['_runScript'](_0x4d408a);
            }, _0x1ed09c['__init__'] = function () {
            }, _0x1ed09c;
        }(), function () {
            function _0x1c06c8() {
                this['_action'] = null, this['_glRender'] = null;
            }
            _0x4621f4(_0x1c06c8, 'laya.filte' + 'rs.Filter');
            var _0x3487d1 = _0x1c06c8['prototype'];
            return _0x34a895['imps'](_0x3487d1, { 'laya.filters.IFilter': !0x0 }), _0x71e09a(0x0, _0x3487d1, 'type', function () {
                return -0x1;
            }), _0x1c06c8['BLUR'] = 0x10, _0x1c06c8['COLOR'] = 0x20, _0x1c06c8['GLOW'] = 0x8, _0x1c06c8['_filter'] = null, _0x1c06c8['_recycleSc' + 'ope'] = null, _0x1c06c8;
        }()), _0x754f70 = function () {
            function _0x5886e4() {
            }
            _0x4621f4(_0x5886e4, 'laya.displ' + 'ay.cmd.Cli' + 'pRectCmd');
            var _0x3bda1c = _0x5886e4['prototype'];
            return _0x3bda1c['recover'] = function () {
                _0x2249dd['recover']('ClipRectCm' + 'd', this);
            }, _0x3bda1c['run'] = function (_0x56a9d6, _0xed5dbf, _0x49b5e0) {
                _0x56a9d6['clipRect'](this['x'] + _0xed5dbf, this['y'] + _0x49b5e0, this['width'], this['height']);
            }, _0x71e09a(0x0, _0x3bda1c, 'cmdID', function () {
                return 'ClipRect';
            }), _0x5886e4['create'] = function (_0x17183d, _0x5946ed, _0x593ff5, _0x4eeeac) {
                var _0x3c102d = _0x2249dd['getItemByC' + 'lass']('ClipRectCm' + 'd', _0x5886e4);
                return _0x3c102d['x'] = _0x17183d, _0x3c102d['y'] = _0x5946ed, _0x3c102d['width'] = _0x593ff5, _0x3c102d['height'] = _0x4eeeac, _0x3c102d;
            }, _0x5886e4['ID'] = 'ClipRect', _0x5886e4;
        }(), _0x45b84c = function () {
            function _0x2c0f80() {
            }
            _0x4621f4(_0x2c0f80, 'laya.displ' + 'ay.cmd.Dra' + 'wImageCmd');
            var _0x5e72c4 = _0x2c0f80['prototype'];
            return _0x5e72c4['recover'] = function () {
                this['texture']['_removeRef' + 'erence'](), this['texture'] = null, _0x2249dd['recover']('DrawImageC' + 'md', this);
            }, _0x5e72c4['run'] = function (_0x32f208, _0x356a0d, _0x4e7be6) {
                _0x32f208['drawTextur' + 'e'](this['texture'], this['x'] + _0x356a0d, this['y'] + _0x4e7be6, this['width'], this['height']);
            }, _0x71e09a(0x0, _0x5e72c4, 'cmdID', function () {
                return 'DrawImage';
            }), _0x2c0f80['create'] = function (_0x3a4060, _0x38e14d, _0x56751b, _0x2071c6, _0x2a7894) {
                var _0x279ba7 = _0x2249dd['getItemByC' + 'lass']('DrawImageC' + 'md', _0x2c0f80);
                return _0x279ba7['texture'] = _0x3a4060, _0x3a4060['_addRefere' + 'nce'](), _0x279ba7['x'] = _0x38e14d, _0x279ba7['y'] = _0x56751b, _0x279ba7['width'] = _0x2071c6, _0x279ba7['height'] = _0x2a7894, _0x279ba7;
            }, _0x2c0f80['ID'] = 'DrawImage', _0x2c0f80;
        }(), _0x57d8ec = function () {
            function _0xee1401() {
            }
            _0x4621f4(_0xee1401, 'laya.displ' + 'ay.cmd.Dra' + 'wPolyCmd');
            var _0x4f231f = _0xee1401['prototype'];
            return _0x4f231f['recover'] = function () {
                this['points'] = null, this['fillColor'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawPolyCm' + 'd', this);
            }, _0x4f231f['run'] = function (_0x3225ff, _0x2fcd2a, _0x17342a) {
                _0x3225ff['_drawPoly'](this['x'] + _0x2fcd2a, this['y'] + _0x17342a, this['points'], this['fillColor'], this['lineColor'], this['lineWidth'], this['isConvexPo' + 'lygon'], this['vid']);
            }, _0x71e09a(0x0, _0x4f231f, 'cmdID', function () {
                return 'DrawPoly';
            }), _0xee1401['create'] = function (_0x51b0c6, _0x115bfb, _0x15c4d5, _0x2bae5f, _0x50de0d, _0x42e212, _0x4486a7, _0x468466) {
                var _0x46896c = _0x2249dd['getItemByC' + 'lass']('DrawPolyCm' + 'd', _0xee1401);
                return _0x46896c['x'] = _0x51b0c6, _0x46896c['y'] = _0x115bfb, _0x46896c['points'] = _0x15c4d5, _0x46896c['fillColor'] = _0x2bae5f, _0x46896c['lineColor'] = _0x50de0d, _0x46896c['lineWidth'] = _0x42e212, _0x46896c['isConvexPo' + 'lygon'] = _0x4486a7, _0x46896c['vid'] = _0x468466, _0x46896c;
            }, _0xee1401['ID'] = 'DrawPoly', _0xee1401;
        }(), _0x2ad6c5 = (function () {
            function _0x111569() {
            }
            return _0x4621f4(_0x111569, 'laya.net.R' + 'esourceVer' + 'sion'), _0x111569['enable'] = function (_0x559835, _0x89d4c8, _0x4e2e64) {
                void 0x0 === _0x4e2e64 && (_0x4e2e64 = 0x2), laya['net']['ResourceVe' + 'rsion']['type'] = _0x4e2e64, _0x34a895['loader']['load'](_0x559835, _0x16ca2b['create'](null, _0x111569['onManifest' + 'Loaded'], [_0x89d4c8]), null, 'json'), _0x4bf8e9['customForm' + 'at'] = _0x111569['addVersion' + 'Prefix'];
            }, _0x111569['onManifest' + 'Loaded'] = function (_0x526b01, _0x1891a2) {
                _0x111569['manifest'] = _0x1891a2, _0x526b01['run'](), _0x1891a2 || console['warn']('资源版本清单文件不存' + '在，不使用资源版本管' + '理。忽略ERR_FI' + 'LE_NOT_FOU' + 'ND错误。');
            }, _0x111569['addVersion' + 'Prefix'] = function (_0x39a4df) {
                return _0x39a4df = _0x4bf8e9['getAdptedF' + 'ilePath'](_0x39a4df), _0x111569['manifest'] && _0x111569['manifest'][_0x39a4df] ? 0x2 == _0x111569['type'] ? _0x111569['manifest'][_0x39a4df] : _0x111569['manifest'][_0x39a4df] + '/' + _0x39a4df : _0x39a4df;
            }, _0x111569['FOLDER_VER' + 'SION'] = 0x1, _0x111569['FILENAME_V' + 'ERSION'] = 0x2, _0x111569['manifest'] = null, _0x111569['type'] = 0x1, _0x111569;
        }(), function () {
            function _0x5db204() {
            }
            return _0x4621f4(_0x5db204, 'laya.utils' + '.Browser'), _0x71e09a(0x1, _0x5db204, 'pixelRatio', function () {
                if (_0x5db204['_pixelRati' + 'o'] < 0x0) {
                    if (_0x5db204['__init__'](), _0x5db204['userAgent']['indexOf']('Mozilla/6.' + '0(Linux;\x20A' + 'ndroid\x206.0' + ';\x20HUAWEI\x20N' + 'XT-AL10\x20Bu' + 'ild/HUAWEI' + 'NXT-AL10)') > -0x1)
                        _0x5db204['_pixelRati' + 'o'] = 0x2;
                    else {
                        var _0x241759 = _0x5db204['context'], _0x30b5b1 = _0x241759['backingSto' + 'rePixelRat' + 'io'] || _0x241759['webkitBack' + 'ingStorePi' + 'xelRatio'] || _0x241759['mozBacking' + 'StorePixel' + 'Ratio'] || _0x241759['msBackingS' + 'torePixelR' + 'atio'] || _0x241759['oBackingSt' + 'orePixelRa' + 'tio'] || _0x241759['backingSto' + 'rePixelRat' + 'io'] || 0x1;
                        _0x5db204['_pixelRati' + 'o'] = (_0x5db204['_window']['devicePixe' + 'lRatio'] || 0x1) / _0x30b5b1, _0x5db204['_pixelRati' + 'o'] < 0x1 && (_0x5db204['_pixelRati' + 'o'] = 0x1);
                    }
                }
                return _0x5db204['_pixelRati' + 'o'];
            }), _0x71e09a(0x1, _0x5db204, 'height', function () {
                return _0x5db204['__init__'](), (_0x34a895['stage'] && _0x34a895['stage']['canvasRota' + 'tion'] ? _0x5db204['clientWidt' + 'h'] : _0x5db204['clientHeig' + 'ht']) * _0x5db204['pixelRatio'];
            }), _0x71e09a(0x1, _0x5db204, 'clientWidt' + 'h', function () {
                return _0x5db204['__init__'](), _0x5db204['_window']['innerWidth'] || _0x5db204['_document']['body']['clientWidt' + 'h'];
            }), _0x71e09a(0x1, _0x5db204, 'window', function () {
                return _0x5db204['_window'] || _0x5db204['__init__']();
            }), _0x71e09a(0x1, _0x5db204, 'clientHeig' + 'ht', function () {
                return _0x5db204['__init__'](), _0x5db204['_window']['innerHeigh' + 't'] || _0x5db204['_document']['body']['clientHeig' + 'ht'] || _0x5db204['_document']['documentEl' + 'ement']['clientHeig' + 'ht'];
            }), _0x71e09a(0x1, _0x5db204, 'width', function () {
                return _0x5db204['__init__'](), (_0x34a895['stage'] && _0x34a895['stage']['canvasRota' + 'tion'] ? _0x5db204['clientHeig' + 'ht'] : _0x5db204['clientWidt' + 'h']) * _0x5db204['pixelRatio'];
            }), _0x71e09a(0x1, _0x5db204, 'container', function () {
                return _0x5db204['_container'] || (_0x5db204['__init__'](), _0x5db204['_container'] = _0x5db204['createElem' + 'ent']('div'), _0x5db204['_container']['id'] = 'layaContai' + 'ner', _0x5db204['_document']['body']['appendChil' + 'd'](_0x5db204['_container'])), _0x5db204['_container'];
            }, function (_0x4bb9d5) {
                _0x5db204['_container'] = _0x4bb9d5;
            }), _0x71e09a(0x1, _0x5db204, 'document', function () {
                return _0x5db204['__init__'](), _0x5db204['_document'];
            }), _0x5db204['__init__'] = function () {
                if (_0x5db204['_window'])
                    return _0x5db204['_window'];
                var _0x4f3a2c = _0x5db204['_window'] = _0xd373d9, _0x597c2f = _0x5db204['_document'] = _0x4f3a2c['document'], _0x2bb08d = _0x5db204['userAgent'] = _0x4f3a2c['navigator']['userAgent'], _0x59a172 = _0x4f3a2c['_layalibs'];
                if (_0x59a172) {
                    _0x59a172['sort'](function (_0x5e62a0, _0x253106) {
                        return _0x5e62a0['i'] > _0x253106['i'];
                    });
                    for (var _0xf526f0 = 0x0; _0xf526f0 < _0x59a172['length']; _0xf526f0++)
                        _0x59a172[_0xf526f0]['f'](_0x4f3a2c, _0x597c2f, _0x34a895);
                }
                _0x2bb08d['indexOf']('MiniGame') > -0x1 && (_0x34a895['MiniAdpter'] ? _0x34a895['MiniAdpter']['enable']() : console['error']('请先添加小游戏适配库' + ',详细教程：http' + 's://ldc2.l' + 'ayabox.com' + '/doc/?nav=' + 'zh-ts-5-0-' + '0')), _0x2bb08d['indexOf']('SwanGame') > -0x1 && (_0x34a895['BMiniAdapt' + 'er'] ? _0x34a895['BMiniAdapt' + 'er']['enable']() : console['error']('请先添加百度小游戏适' + '配库,详细教程：ht' + 'tps://ldc2' + '.layabox.c' + 'om/doc/?na' + 'v=zh-ts-5-' + '0-0')), _0x4f3a2c['trace'] = console['log'], _0x4f3a2c['requestAni' + 'mationFram' + 'e'] = _0x4f3a2c['requestAni' + 'mationFram' + 'e'] || _0x4f3a2c['webkitRequ' + 'estAnimati' + 'onFrame'] || _0x4f3a2c['mozRequest' + 'AnimationF' + 'rame'] || _0x4f3a2c['oRequestAn' + 'imationFra' + 'me'] || _0x4f3a2c['msRequestA' + 'nimationFr' + 'ame'] || function (_0x5576dd) {
                    return _0x4f3a2c['setTimeout'](_0x5576dd, 0x3e8 / 0x3c);
                };
                var _0x23c0fc = _0x597c2f['body']['style'];
                _0x23c0fc['margin'] = 0x0, _0x23c0fc['overflow'] = 'hidden', _0x23c0fc['-webkit-us' + 'er-select'] = 'none', _0x23c0fc['-webkit-ta' + 'p-highligh' + 't-color'] = 'rgba(200,2' + '00,200,0)';
                for (var _0x3e3249 = _0x597c2f['getElement' + 'sByTagName']('meta'), _0x3b2cfd = 0x0, _0x1b0180 = !0x1, _0x1ea8e0 = 'width=devi' + 'ce-width,i' + 'nitial-sca' + 'le=1.0,min' + 'imum-scale' + '=1.0,maxim' + 'um-scale=1' + '.0,user-sc' + 'alable=no'; _0x3b2cfd < _0x3e3249['length'];) {
                    var _0x1396c8 = _0x3e3249[_0x3b2cfd];
                    if ('viewport' == _0x1396c8['name']) {
                        _0x1396c8['content'] = _0x1ea8e0, _0x1b0180 = !0x0;
                        break;
                    }
                    _0x3b2cfd++;
                }
                _0x1b0180 || (_0x1396c8 = _0x597c2f['createElem' + 'ent']('meta'), _0x1396c8['name'] = 'viewport', _0x1396c8['content'] = _0x1ea8e0, _0x597c2f['getElement' + 'sByTagName']('head')[0x0]['appendChil' + 'd'](_0x1396c8)), _0x5db204['onMobile'] = _0x2bb08d['indexOf']('Mobile') > -0x1, _0x5db204['onIOS'] = !!_0x2bb08d['match'](/\(i[^;]+;(U;)? CPU.+Mac OS X/), _0x5db204['onIPhone'] = _0x2bb08d['indexOf']('iPhone') > -0x1, _0x5db204['onMac'] = _0x2bb08d['indexOf']('Mac\x20OS\x20X') > -0x1, _0x5db204['onIPad'] = _0x2bb08d['indexOf']('iPad') > -0x1, _0x5db204['onAndroid'] = _0x2bb08d['indexOf']('Android') > -0x1 || _0x2bb08d['indexOf']('Adr') > -0x1, _0x5db204['onWP'] = _0x2bb08d['indexOf']('Windows\x20Ph' + 'one') > -0x1, _0x5db204['onQQBrowse' + 'r'] = _0x2bb08d['indexOf']('QQBrowser') > -0x1, _0x5db204['onMQQBrows' + 'er'] = _0x2bb08d['indexOf']('MQQBrowser') > -0x1 || _0x2bb08d['indexOf']('Mobile') > -0x1 && _0x2bb08d['indexOf']('QQ') > -0x1, _0x5db204['onIE'] = !!_0x4f3a2c['ActiveXObj' + 'ect'] || 'ActiveXObj' + 'ect' in _0x4f3a2c, _0x5db204['onWeiXin'] = _0x2bb08d['indexOf']('MicroMesse' + 'nger') > -0x1, _0x5db204['onSafari'] = _0x2bb08d['indexOf']('Safari') > -0x1, _0x5db204['onPC'] = !_0x5db204['onMobile'], _0x5db204['onMiniGame'] = _0x2bb08d['indexOf']('MiniGame') > -0x1, _0x5db204['onBDMiniGa' + 'me'] = _0x2bb08d['indexOf']('SwanGame') > -0x1, _0x5db204['onLimixiu'] = _0x2bb08d['indexOf']('limixiu') > -0x1, _0x5db204['supportLoc' + 'alStorage'] = _0x3df59e['__init__'](), _0x5db204['supportWeb' + 'Audio'] = _0x273f4b['__init__'](), _0x4fec79['_mainCanva' + 's'] = new _0x50a1b2(!0x0);
                var _0x4ff037 = _0x4fec79['_mainCanva' + 's']['source']['style'];
                _0x4ff037['position'] = 'absolute', _0x4ff037['top'] = _0x4ff037['left'] = '0px', _0x4ff037['background'] = '#000000', _0x5db204['canvas'] = new _0x50a1b2(!0x0), _0x5db204['context'] = _0x5db204['canvas']['getContext']('2d');
                var _0x2a839b = new _0x50a1b2(!0x0), _0x4e5922 = [
                        'webgl',
                        'experiment' + 'al-webgl',
                        'webkit-3d',
                        'moz-webgl'
                    ], _0x27c271 = null;
                for (_0x3b2cfd = 0x0; _0x3b2cfd < _0x4e5922['length']; _0x3b2cfd++) {
                    try {
                        _0x27c271 = _0x2a839b['source']['getContext'](_0x4e5922[_0x3b2cfd]);
                    } catch (_0x58304f) {
                    }
                    if (_0x27c271) {
                        _0x5db204['_supportWe' + 'bGL'] = !0x0;
                        break;
                    }
                }
                return _0x4f3a2c;
            }, _0x5db204['createElem' + 'ent'] = function (_0x1389cb) {
                return _0x5db204['__init__'](), _0x5db204['_document']['createElem' + 'ent'](_0x1389cb);
            }, _0x5db204['getElement' + 'ById'] = function (_0x5f0d88) {
                return _0x5db204['__init__'](), _0x5db204['_document']['getElement' + 'ById'](_0x5f0d88);
            }, _0x5db204['removeElem' + 'ent'] = function (_0x18d8b0) {
                _0x18d8b0 && _0x18d8b0['parentNode'] && _0x18d8b0['parentNode']['removeChil' + 'd'](_0x18d8b0);
            }, _0x5db204['now'] = function () {
                return Date['now']();
            }, _0x5db204['userAgent'] = null, _0x5db204['onMobile'] = !0x1, _0x5db204['onIOS'] = !0x1, _0x5db204['onMac'] = !0x1, _0x5db204['onIPhone'] = !0x1, _0x5db204['onIPad'] = !0x1, _0x5db204['onAndroid'] = !0x1, _0x5db204['onWP'] = !0x1, _0x5db204['onQQBrowse' + 'r'] = !0x1, _0x5db204['onMQQBrows' + 'er'] = !0x1, _0x5db204['onSafari'] = !0x1, _0x5db204['onIE'] = !0x1, _0x5db204['onWeiXin'] = !0x1, _0x5db204['onPC'] = !0x1, _0x5db204['onMiniGame'] = !0x1, _0x5db204['onBDMiniGa' + 'me'] = !0x1, _0x5db204['onLimixiu'] = !0x1, _0x5db204['onFirefox'] = !0x1, _0x5db204['onEdge'] = !0x1, _0x5db204['supportWeb' + 'Audio'] = !0x1, _0x5db204['supportLoc' + 'alStorage'] = !0x1, _0x5db204['canvas'] = null, _0x5db204['context'] = null, _0x5db204['_window'] = null, _0x5db204['_document'] = null, _0x5db204['_container'] = null, _0x5db204['_pixelRati' + 'o'] = -0x1, _0x5db204['_supportWe' + 'bGL'] = !0x1, _0x5db204;
        }()), _0x9c3d0d = function () {
            function _0x45c485() {
            }
            _0x4621f4(_0x45c485, 'laya.displ' + 'ay.cmd.Str' + 'okeTextCmd');
            var _0x2c80a7 = _0x45c485['prototype'];
            return _0x2c80a7['recover'] = function () {
                _0x2249dd['recover']('StrokeText' + 'Cmd', this);
            }, _0x2c80a7['run'] = function (_0x3af596, _0x15126a, _0x20a379) {
                _0x3af596['strokeWord'](this['text'], this['x'] + _0x15126a, this['y'] + _0x20a379, this['font'], this['color'], this['lineWidth'], this['textAlign']);
            }, _0x71e09a(0x0, _0x2c80a7, 'cmdID', function () {
                return 'StrokeText';
            }), _0x45c485['create'] = function (_0x2b045e, _0x4b9cd5, _0x3e069c, _0x3a745c, _0x483a81, _0x12f550, _0x3e5b49) {
                var _0x82ff89 = _0x2249dd['getItemByC' + 'lass']('StrokeText' + 'Cmd', _0x45c485);
                return _0x82ff89['text'] = _0x2b045e, _0x82ff89['x'] = _0x4b9cd5, _0x82ff89['y'] = _0x3e069c, _0x82ff89['font'] = _0x3a745c, _0x82ff89['color'] = _0x483a81, _0x82ff89['lineWidth'] = _0x12f550, _0x82ff89['textAlign'] = _0x3e5b49, _0x82ff89;
            }, _0x45c485['ID'] = 'StrokeText', _0x45c485;
        }(), _0x22858b = function () {
            function _0xcd3e13(_0x5a98ad, _0x531118, _0x54cc48, _0x560ff1) {
                void 0x0 === _0x5a98ad && (_0x5a98ad = 0x0), void 0x0 === _0x531118 && (_0x531118 = 0x0), void 0x0 === _0x54cc48 && (_0x54cc48 = 0x0), void 0x0 === _0x560ff1 && (_0x560ff1 = 0x0), this['x'] = _0x5a98ad, this['y'] = _0x531118, this['width'] = _0x54cc48, this['height'] = _0x560ff1;
            }
            _0x4621f4(_0xcd3e13, 'laya.maths' + '.Rectangle');
            var _0x36d65c = _0xcd3e13['prototype'];
            return _0x36d65c['setTo'] = function (_0x4ded8e, _0xcd5a84, _0x2b0bd0, _0x4afb35) {
                return this['x'] = _0x4ded8e, this['y'] = _0xcd5a84, this['width'] = _0x2b0bd0, this['height'] = _0x4afb35, this;
            }, _0x36d65c['reset'] = function () {
                return this['x'] = this['y'] = this['width'] = this['height'] = 0x0, this;
            }, _0x36d65c['recover'] = function () {
                _0x2249dd['recover']('Rectangle', this['reset']());
            }, _0x36d65c['copyFrom'] = function (_0x1a9437) {
                return this['x'] = _0x1a9437['x'], this['y'] = _0x1a9437['y'], this['width'] = _0x1a9437['width'], this['height'] = _0x1a9437['height'], this;
            }, _0x36d65c['contains'] = function (_0xb7058b, _0x45e171) {
                return this['width'] <= 0x0 || this['height'] <= 0x0 ? !0x1 : _0xb7058b >= this['x'] && _0xb7058b < this['right'] && _0x45e171 >= this['y'] && _0x45e171 < this['bottom'] ? !0x0 : !0x1;
            }, _0x36d65c['intersects'] = function (_0x199e3c) {
                return !(_0x199e3c['x'] > this['x'] + this['width'] || _0x199e3c['x'] + _0x199e3c['width'] < this['x'] || _0x199e3c['y'] > this['y'] + this['height'] || _0x199e3c['y'] + _0x199e3c['height'] < this['y']);
            }, _0x36d65c['intersecti' + 'on'] = function (_0x4a9a20, _0x18dce4) {
                return this['intersects'](_0x4a9a20) ? (_0x18dce4 || (_0x18dce4 = new _0xcd3e13()), _0x18dce4['x'] = Math['max'](this['x'], _0x4a9a20['x']), _0x18dce4['y'] = Math['max'](this['y'], _0x4a9a20['y']), _0x18dce4['width'] = Math['min'](this['right'], _0x4a9a20['right']) - _0x18dce4['x'], _0x18dce4['height'] = Math['min'](this['bottom'], _0x4a9a20['bottom']) - _0x18dce4['y'], _0x18dce4) : null;
            }, _0x36d65c['union'] = function (_0x842e83, _0x45b157) {
                return _0x45b157 || (_0x45b157 = new _0xcd3e13()), this['clone'](_0x45b157), _0x842e83['width'] <= 0x0 || _0x842e83['height'] <= 0x0 ? _0x45b157 : (_0x45b157['addPoint'](_0x842e83['x'], _0x842e83['y']), _0x45b157['addPoint'](_0x842e83['right'], _0x842e83['bottom']), this);
            }, _0x36d65c['clone'] = function (_0x6e2087) {
                return _0x6e2087 || (_0x6e2087 = new _0xcd3e13()), _0x6e2087['x'] = this['x'], _0x6e2087['y'] = this['y'], _0x6e2087['width'] = this['width'], _0x6e2087['height'] = this['height'], _0x6e2087;
            }, _0x36d65c['toString'] = function () {
                return this['x'] + ',' + this['y'] + ',' + this['width'] + ',' + this['height'];
            }, _0x36d65c['equals'] = function (_0x49ed69) {
                return _0x49ed69 && _0x49ed69['x'] === this['x'] && _0x49ed69['y'] === this['y'] && _0x49ed69['width'] === this['width'] && _0x49ed69['height'] === this['height'] ? !0x0 : !0x1;
            }, _0x36d65c['addPoint'] = function (_0x4a3f22, _0x5b3841) {
                return this['x'] > _0x4a3f22 && (this['width'] += this['x'] - _0x4a3f22, this['x'] = _0x4a3f22), this['y'] > _0x5b3841 && (this['height'] += this['y'] - _0x5b3841, this['y'] = _0x5b3841), this['width'] < _0x4a3f22 - this['x'] && (this['width'] = _0x4a3f22 - this['x']), this['height'] < _0x5b3841 - this['y'] && (this['height'] = _0x5b3841 - this['y']), this;
            }, _0x36d65c['_getBoundP' + 'oints'] = function () {
                var _0x1d3516 = _0xcd3e13['_temB'];
                return _0x1d3516['length'] = 0x0, 0x0 == this['width'] || 0x0 == this['height'] ? _0x1d3516 : (_0x1d3516['push'](this['x'], this['y'], this['x'] + this['width'], this['y'], this['x'], this['y'] + this['height'], this['x'] + this['width'], this['y'] + this['height']), _0x1d3516);
            }, _0x36d65c['isEmpty'] = function () {
                return this['width'] <= 0x0 || this['height'] <= 0x0 ? !0x0 : !0x1;
            }, _0x71e09a(0x0, _0x36d65c, 'right', function () {
                return this['x'] + this['width'];
            }), _0x71e09a(0x0, _0x36d65c, 'bottom', function () {
                return this['y'] + this['height'];
            }), _0xcd3e13['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('Rectangle', _0xcd3e13);
            }, _0xcd3e13['_getBoundP' + 'ointS'] = function (_0x43f8e1, _0x4fedf4, _0xbd9723, _0x24decc) {
                var _0x463897 = _0xcd3e13['_temA'];
                return _0x463897['length'] = 0x0, 0x0 == _0xbd9723 || 0x0 == _0x24decc ? _0x463897 : (_0x463897['push'](_0x43f8e1, _0x4fedf4, _0x43f8e1 + _0xbd9723, _0x4fedf4, _0x43f8e1, _0x4fedf4 + _0x24decc, _0x43f8e1 + _0xbd9723, _0x4fedf4 + _0x24decc), _0x463897);
            }, _0xcd3e13['_getWrapRe' + 'c'] = function (_0x587e30, _0x26ec8c) {
                if (!_0x587e30 || _0x587e30['length'] < 0x1)
                    return _0x26ec8c ? _0x26ec8c['setTo'](0x0, 0x0, 0x0, 0x0) : _0xcd3e13['TEMP']['setTo'](0x0, 0x0, 0x0, 0x0);
                _0x26ec8c = _0x26ec8c ? _0x26ec8c : laya['maths']['Rectangle']['create']();
                var _0x580073, _0x2d7e44, _0x1d4e3d, _0x1736c6, _0x1826b2, _0x45ed54 = _0x587e30['length'], _0x1b0c36 = _0x251b03['TEMP'];
                for (_0x2d7e44 = _0x1736c6 = 0x1869f, _0x1d4e3d = _0x1826b2 = -_0x2d7e44, _0x580073 = 0x0; _0x45ed54 > _0x580073; _0x580073 += 0x2)
                    _0x1b0c36['x'] = _0x587e30[_0x580073], _0x1b0c36['y'] = _0x587e30[_0x580073 + 0x1], _0x2d7e44 = _0x2d7e44 < _0x1b0c36['x'] ? _0x2d7e44 : _0x1b0c36['x'], _0x1736c6 = _0x1736c6 < _0x1b0c36['y'] ? _0x1736c6 : _0x1b0c36['y'], _0x1d4e3d = _0x1d4e3d > _0x1b0c36['x'] ? _0x1d4e3d : _0x1b0c36['x'], _0x1826b2 = _0x1826b2 > _0x1b0c36['y'] ? _0x1826b2 : _0x1b0c36['y'];
                return _0x26ec8c['setTo'](_0x2d7e44, _0x1736c6, _0x1d4e3d - _0x2d7e44, _0x1826b2 - _0x1736c6);
            }, _0xcd3e13['EMPTY'] = new _0xcd3e13(), _0xcd3e13['TEMP'] = new _0xcd3e13(), _0xcd3e13['_temB'] = [], _0xcd3e13['_temA'] = [], _0xcd3e13;
        }(), _0x1fa189 = function () {
            function _0x4eb6f6() {
            }
            _0x4621f4(_0x4eb6f6, 'laya.displ' + 'ay.cmd.Sca' + 'leCmd');
            var _0x4be753 = _0x4eb6f6['prototype'];
            return _0x4be753['recover'] = function () {
                _0x2249dd['recover']('ScaleCmd', this);
            }, _0x4be753['run'] = function (_0x33a817, _0x4643a7, _0x22ef58) {
                _0x33a817['_scale'](this['scaleX'], this['scaleY'], this['pivotX'] + _0x4643a7, this['pivotY'] + _0x22ef58);
            }, _0x71e09a(0x0, _0x4be753, 'cmdID', function () {
                return 'Scale';
            }), _0x4eb6f6['create'] = function (_0x468030, _0x447cfd, _0x75e66b, _0x50466d) {
                var _0x1eae5d = _0x2249dd['getItemByC' + 'lass']('ScaleCmd', _0x4eb6f6);
                return _0x1eae5d['scaleX'] = _0x468030, _0x1eae5d['scaleY'] = _0x447cfd, _0x1eae5d['pivotX'] = _0x75e66b, _0x1eae5d['pivotY'] = _0x50466d, _0x1eae5d;
            }, _0x4eb6f6['ID'] = 'Scale', _0x4eb6f6;
        }(), _0x59651c = function () {
            function _0x5fa13d() {
            }
            _0x4621f4(_0x5fa13d, 'laya.displ' + 'ay.cmd.Alp' + 'haCmd');
            var _0xf9b877 = _0x5fa13d['prototype'];
            return _0xf9b877['recover'] = function () {
                _0x2249dd['recover']('AlphaCmd', this);
            }, _0xf9b877['run'] = function (_0x5e59b3, _0x195147, _0x17fb82) {
                _0x5e59b3['alpha'](this['alpha']);
            }, _0x71e09a(0x0, _0xf9b877, 'cmdID', function () {
                return 'Alpha';
            }), _0x5fa13d['create'] = function (_0x1432ec) {
                var _0x29d3c9 = _0x2249dd['getItemByC' + 'lass']('AlphaCmd', _0x5fa13d);
                return _0x29d3c9['alpha'] = _0x1432ec, _0x29d3c9;
            }, _0x5fa13d['ID'] = 'Alpha', _0x5fa13d;
        }(), _0x2a3233 = function () {
            function _0x1428bf() {
                this['useDic'] = {}, this['shapeDic'] = {}, this['shapeLineD' + 'ic'] = {}, this['_id'] = 0x0, this['_checkKey'] = !0x1, this['_freeIdArr' + 'ay'] = [], _0x4fec79['isWebGL'] && _0x58cc6b['regCacheBy' + 'Function'](_0x3b78ce['bind'](this['startDispo' + 'se'], this), _0x3b78ce['bind'](this['getCacheLi' + 'st'], this));
            }
            _0x4621f4(_0x1428bf, 'laya.utils' + '.VectorGra' + 'phManager');
            var _0x2e24fe = _0x1428bf['prototype'];
            return _0x2e24fe['getId'] = function () {
                return this['_id']++;
            }, _0x2e24fe['addShape'] = function (_0x2363a6, _0x5dd72f) {
                this['shapeDic'][_0x2363a6] = _0x5dd72f, this['useDic'][_0x2363a6] || (this['useDic'][_0x2363a6] = !0x0);
            }, _0x2e24fe['addLine'] = function (_0x3e9a62, _0x36bed6) {
                this['shapeLineD' + 'ic'][_0x3e9a62] = _0x36bed6, this['shapeLineD' + 'ic'][_0x3e9a62] || (this['shapeLineD' + 'ic'][_0x3e9a62] = !0x0);
            }, _0x2e24fe['getShape'] = function (_0xd1c0b2) {
                this['_checkKey'] && null != this['useDic'][_0xd1c0b2] && (this['useDic'][_0xd1c0b2] = !0x0);
            }, _0x2e24fe['deleteShap' + 'e'] = function (_0x425a0a) {
                this['shapeDic'][_0x425a0a] && (this['shapeDic'][_0x425a0a] = null, delete this['shapeDic'][_0x425a0a]), this['shapeLineD' + 'ic'][_0x425a0a] && (this['shapeLineD' + 'ic'][_0x425a0a] = null, delete this['shapeLineD' + 'ic'][_0x425a0a]), null != this['useDic'][_0x425a0a] && delete this['useDic'][_0x425a0a];
            }, _0x2e24fe['getCacheLi' + 'st'] = function () {
                var _0x474cea, _0x29df20 = [];
                for (_0x474cea in this['shapeDic'])
                    _0x29df20['push'](this['shapeDic'][_0x474cea]);
                for (_0x474cea in this['shapeLineD' + 'ic'])
                    _0x29df20['push'](this['shapeLineD' + 'ic'][_0x474cea]);
                return _0x29df20;
            }, _0x2e24fe['startDispo' + 'se'] = function (_0x2885ef) {
                var _0x19ec0c;
                for (_0x19ec0c in this['useDic'])
                    this['useDic'][_0x19ec0c] = !0x1;
                this['_checkKey'] = !0x0;
            }, _0x2e24fe['endDispose'] = function () {
                if (this['_checkKey']) {
                    var _0x2ab5d8;
                    for (_0x2ab5d8 in this['useDic'])
                        this['useDic'][_0x2ab5d8] || this['deleteShap' + 'e'](_0x2ab5d8);
                    this['_checkKey'] = !0x1;
                }
            }, _0x1428bf['getInstanc' + 'e'] = function () {
                return _0x1428bf['instance'] = _0x1428bf['instance'] || new _0x1428bf();
            }, _0x1428bf['instance'] = null, _0x1428bf;
        }(), _0x25ea11 = function () {
            function _0x43b250() {
                this['id'] = NaN, this['save'] = [], this['toUpperCas' + 'e'] = null, this['changed'] = !0x1, this['_text'] = null, this['width'] = -0x1, this['pageChars'] = [], this['startID'] = 0x0, this['startIDStr' + 'oke'] = 0x0, this['lastGCCnt'] = 0x0;
            }
            _0x4621f4(_0x43b250, 'laya.utils' + '.WordText');
            var _0x1c3b82 = _0x43b250['prototype'];
            return _0x1c3b82['setText'] = function (_0x40e289) {
                this['changed'] = !0x0, this['_text'] = _0x40e289, this['width'] = -0x1, this['pageChars'] = [];
            }, _0x1c3b82['toString'] = function () {
                return this['_text'];
            }, _0x1c3b82['charCodeAt'] = function (_0xbacc00) {
                return this['_text'] ? this['_text']['charCodeAt'](_0xbacc00) : NaN;
            }, _0x1c3b82['charAt'] = function (_0x432ebd) {
                return this['_text'] ? this['_text']['charAt'](_0x432ebd) : null;
            }, _0x1c3b82['cleanCache'] = function () {
                this['pageChars'] = [], this['startID'] = 0x0;
            }, _0x71e09a(0x0, _0x1c3b82, 'length', function () {
                return this['_text'] ? this['_text']['length'] : 0x0;
            }), _0x43b250;
        }(), _0x39fd1d = function () {
            function _0x2a4c0a() {
            }
            _0x4621f4(_0x2a4c0a, 'laya.displ' + 'ay.cmd.Rot' + 'ateCmd');
            var _0x457106 = _0x2a4c0a['prototype'];
            return _0x457106['recover'] = function () {
                _0x2249dd['recover']('RotateCmd', this);
            }, _0x457106['run'] = function (_0x56dc03, _0x6ab5ce, _0xcb58c5) {
                _0x56dc03['_rotate'](this['angle'], this['pivotX'] + _0x6ab5ce, this['pivotY'] + _0xcb58c5);
            }, _0x71e09a(0x0, _0x457106, 'cmdID', function () {
                return 'Rotate';
            }), _0x2a4c0a['create'] = function (_0x42eee4, _0x51749a, _0x3962e2) {
                var _0x2630df = _0x2249dd['getItemByC' + 'lass']('RotateCmd', _0x2a4c0a);
                return _0x2630df['angle'] = _0x42eee4, _0x2630df['pivotX'] = _0x51749a, _0x2630df['pivotY'] = _0x3962e2, _0x2630df;
            }, _0x2a4c0a['ID'] = 'Rotate', _0x2a4c0a;
        }(), _0x4f9c8a = function () {
            function _0x114951() {
            }
            _0x4621f4(_0x114951, 'laya.displ' + 'ay.cmd.Dra' + 'wRectCmd');
            var _0x275d8c = _0x114951['prototype'];
            return _0x275d8c['recover'] = function () {
                this['fillColor'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawRectCm' + 'd', this);
            }, _0x275d8c['run'] = function (_0x135cf1, _0x54ceaf, _0x3522b9) {
                _0x135cf1['drawRect'](this['x'] + _0x54ceaf, this['y'] + _0x3522b9, this['width'], this['height'], this['fillColor'], this['lineColor'], this['lineWidth']);
            }, _0x71e09a(0x0, _0x275d8c, 'cmdID', function () {
                return 'DrawRect';
            }), _0x114951['create'] = function (_0x418690, _0x971887, _0x2718e6, _0x3641ef, _0x5bbfcb, _0x4a7622, _0x57fb90) {
                var _0x32ed59 = _0x2249dd['getItemByC' + 'lass']('DrawRectCm' + 'd', _0x114951);
                return _0x32ed59['x'] = _0x418690, _0x32ed59['y'] = _0x971887, _0x32ed59['width'] = _0x2718e6, _0x32ed59['height'] = _0x3641ef, _0x32ed59['fillColor'] = _0x5bbfcb, _0x32ed59['lineColor'] = _0x4a7622, _0x32ed59['lineWidth'] = _0x57fb90, _0x32ed59;
            }, _0x114951['ID'] = 'DrawRect', _0x114951;
        }(), _0x237f41 = function () {
            function _0x4cc29b() {
            }
            return _0x4621f4(_0x4cc29b, 'laya.maths' + '.MathUtil'), _0x4cc29b['subtractVe' + 'ctor3'] = function (_0x2f2941, _0x2c5a1b, _0x2f19c2) {
                _0x2f19c2[0x0] = _0x2f2941[0x0] - _0x2c5a1b[0x0], _0x2f19c2[0x1] = _0x2f2941[0x1] - _0x2c5a1b[0x1], _0x2f19c2[0x2] = _0x2f2941[0x2] - _0x2c5a1b[0x2];
            }, _0x4cc29b['lerp'] = function (_0x4d1f68, _0xef15c9, _0x3529ea) {
                return _0x4d1f68 * (0x1 - _0x3529ea) + _0xef15c9 * _0x3529ea;
            }, _0x4cc29b['scaleVecto' + 'r3'] = function (_0x29d599, _0x45d79f, _0x10600b) {
                _0x10600b[0x0] = _0x29d599[0x0] * _0x45d79f, _0x10600b[0x1] = _0x29d599[0x1] * _0x45d79f, _0x10600b[0x2] = _0x29d599[0x2] * _0x45d79f;
            }, _0x4cc29b['lerpVector' + '3'] = function (_0x758a6f, _0x100e23, _0x2c194e, _0x5da6f0) {
                var _0x1621df = _0x758a6f[0x0], _0x3b3478 = _0x758a6f[0x1], _0x1f3339 = _0x758a6f[0x2];
                _0x5da6f0[0x0] = _0x1621df + _0x2c194e * (_0x100e23[0x0] - _0x1621df), _0x5da6f0[0x1] = _0x3b3478 + _0x2c194e * (_0x100e23[0x1] - _0x3b3478), _0x5da6f0[0x2] = _0x1f3339 + _0x2c194e * (_0x100e23[0x2] - _0x1f3339);
            }, _0x4cc29b['lerpVector' + '4'] = function (_0x385a7f, _0x2156f9, _0x14fbc5, _0x22d43f) {
                var _0x28029c = _0x385a7f[0x0], _0x5b50ee = _0x385a7f[0x1], _0x4e39be = _0x385a7f[0x2], _0xe3b4df = _0x385a7f[0x3];
                _0x22d43f[0x0] = _0x28029c + _0x14fbc5 * (_0x2156f9[0x0] - _0x28029c), _0x22d43f[0x1] = _0x5b50ee + _0x14fbc5 * (_0x2156f9[0x1] - _0x5b50ee), _0x22d43f[0x2] = _0x4e39be + _0x14fbc5 * (_0x2156f9[0x2] - _0x4e39be), _0x22d43f[0x3] = _0xe3b4df + _0x14fbc5 * (_0x2156f9[0x3] - _0xe3b4df);
            }, _0x4cc29b['slerpQuate' + 'rnionArray'] = function (_0x4c7b7b, _0x6f591e, _0x39d1fc, _0x25b8c1, _0x588970, _0x646d49, _0x581b14) {
                var _0x2c166f, _0x429c16, _0x3f80e4, _0x13490a, _0x2570a3, _0x53331e = _0x4c7b7b[_0x6f591e + 0x0], _0x4f391c = _0x4c7b7b[_0x6f591e + 0x1], _0x615a0f = _0x4c7b7b[_0x6f591e + 0x2], _0x5465f5 = _0x4c7b7b[_0x6f591e + 0x3], _0x2f72af = _0x39d1fc[_0x25b8c1 + 0x0], _0xe48b68 = _0x39d1fc[_0x25b8c1 + 0x1], _0x70657a = _0x39d1fc[_0x25b8c1 + 0x2], _0x40e8a6 = _0x39d1fc[_0x25b8c1 + 0x3];
                return _0x429c16 = _0x53331e * _0x2f72af + _0x4f391c * _0xe48b68 + _0x615a0f * _0x70657a + _0x5465f5 * _0x40e8a6, 0x0 > _0x429c16 && (_0x429c16 = -_0x429c16, _0x2f72af = -_0x2f72af, _0xe48b68 = -_0xe48b68, _0x70657a = -_0x70657a, _0x40e8a6 = -_0x40e8a6), 0x1 - _0x429c16 > 0.000001 ? (_0x2c166f = Math['acos'](_0x429c16), _0x3f80e4 = Math['sin'](_0x2c166f), _0x13490a = Math['sin']((0x1 - _0x588970) * _0x2c166f) / _0x3f80e4, _0x2570a3 = Math['sin'](_0x588970 * _0x2c166f) / _0x3f80e4) : (_0x13490a = 0x1 - _0x588970, _0x2570a3 = _0x588970), _0x646d49[_0x581b14 + 0x0] = _0x13490a * _0x53331e + _0x2570a3 * _0x2f72af, _0x646d49[_0x581b14 + 0x1] = _0x13490a * _0x4f391c + _0x2570a3 * _0xe48b68, _0x646d49[_0x581b14 + 0x2] = _0x13490a * _0x615a0f + _0x2570a3 * _0x70657a, _0x646d49[_0x581b14 + 0x3] = _0x13490a * _0x5465f5 + _0x2570a3 * _0x40e8a6, _0x646d49;
            }, _0x4cc29b['getRotatio' + 'n'] = function (_0x300b6a, _0xcbf25d, _0x136e24, _0x26c6cc) {
                return Math['atan2'](_0x26c6cc - _0xcbf25d, _0x136e24 - _0x300b6a) / Math['PI'] * 0xb4;
            }, _0x4cc29b['sortBigFir' + 'st'] = function (_0x146c5c, _0xc4dec9) {
                return _0x146c5c == _0xc4dec9 ? 0x0 : _0xc4dec9 > _0x146c5c ? 0x1 : -0x1;
            }, _0x4cc29b['sortSmallF' + 'irst'] = function (_0x37b7de, _0x3ef188) {
                return _0x37b7de == _0x3ef188 ? 0x0 : _0x3ef188 > _0x37b7de ? -0x1 : 0x1;
            }, _0x4cc29b['sortNumBig' + 'First'] = function (_0x1a71c3, _0x504d7a) {
                return parseFloat(_0x504d7a) - parseFloat(_0x1a71c3);
            }, _0x4cc29b['sortNumSma' + 'llFirst'] = function (_0x551814, _0x5f5db3) {
                return parseFloat(_0x551814) - parseFloat(_0x5f5db3);
            }, _0x4cc29b['sortByKey'] = function (_0x502844, _0x583e72, _0x4cc973) {
                void 0x0 === _0x583e72 && (_0x583e72 = !0x1), void 0x0 === _0x4cc973 && (_0x4cc973 = !0x0);
                var _0x4aff67;
                return _0x4aff67 = _0x583e72 ? _0x4cc973 ? _0x4cc29b['sortNumBig' + 'First'] : _0x4cc29b['sortBigFir' + 'st'] : _0x4cc973 ? _0x4cc29b['sortNumSma' + 'llFirst'] : _0x4cc29b['sortSmallF' + 'irst'], function (_0x3ce13d, _0x2dce19) {
                    return _0x4aff67(_0x3ce13d[_0x502844], _0x2dce19[_0x502844]);
                };
            }, _0x4cc29b;
        }(), _0x3cbe98 = function () {
            function _0x499f4() {
            }
            _0x4621f4(_0x499f4, 'laya.displ' + 'ay.cmd.Dra' + 'wCurvesCmd');
            var _0x18f01b = _0x499f4['prototype'];
            return _0x18f01b['recover'] = function () {
                this['points'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawCurves' + 'Cmd', this);
            }, _0x18f01b['run'] = function (_0x55ec58, _0x302790, _0x232656) {
                _0x55ec58['drawCurves'](this['x'] + _0x302790, this['y'] + _0x232656, this['points'], this['lineColor'], this['lineWidth']);
            }, _0x71e09a(0x0, _0x18f01b, 'cmdID', function () {
                return 'DrawCurves';
            }), _0x499f4['create'] = function (_0x40fd9a, _0x33a00e, _0x158697, _0x3416b3, _0x33ff36) {
                var _0x254021 = _0x2249dd['getItemByC' + 'lass']('DrawCurves' + 'Cmd', _0x499f4);
                return _0x254021['x'] = _0x40fd9a, _0x254021['y'] = _0x33a00e, _0x254021['points'] = _0x158697, _0x254021['lineColor'] = _0x3416b3, _0x254021['lineWidth'] = _0x33ff36, _0x254021;
            }, _0x499f4['ID'] = 'DrawCurves', _0x499f4;
        }(), _0x4e0962 = function () {
            function _0x2f0061() {
            }
            _0x4621f4(_0x2f0061, 'laya.displ' + 'ay.cmd.Sav' + 'eCmd');
            var _0x27b69f = _0x2f0061['prototype'];
            return _0x27b69f['recover'] = function () {
                _0x2249dd['recover']('SaveCmd', this);
            }, _0x27b69f['run'] = function (_0x73bb48, _0x39cd5e, _0xbd7145) {
                _0x73bb48['save']();
            }, _0x71e09a(0x0, _0x27b69f, 'cmdID', function () {
                return 'Save';
            }), _0x2f0061['create'] = function () {
                var _0x54ed70 = _0x2249dd['getItemByC' + 'lass']('SaveCmd', _0x2f0061);
                return _0x54ed70;
            }, _0x2f0061['ID'] = 'Save', _0x2f0061;
        }(), _0x144f60 = function () {
            function _0x3bea64() {
                this['reset']();
            }
            _0x4621f4(_0x3bea64, 'laya.displ' + 'ay.css.Spr' + 'iteStyle');
            var _0x565d07 = _0x3bea64['prototype'];
            return _0x565d07['reset'] = function () {
                return this['scaleX'] = this['scaleY'] = 0x1, this['skewX'] = this['skewY'] = 0x0, this['pivotX'] = this['pivotY'] = this['rotation'] = 0x0, this['alpha'] = 0x1, this['scrollRect'] && this['scrollRect']['recover'](), this['scrollRect'] = null, this['viewport'] && this['viewport']['recover'](), this['viewport'] = null, this['hitArea'] = null, this['dragging'] = null, this['blendMode'] = null, this;
            }, _0x565d07['recover'] = function () {
                this !== _0x3bea64['EMPTY'] && _0x2249dd['recover']('SpriteStyl' + 'e', this['reset']());
            }, _0x3bea64['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('SpriteStyl' + 'e', _0x3bea64);
            }, _0x3bea64['EMPTY'] = new _0x3bea64(), _0x3bea64;
        }(), _0x4f150a = function () {
            function _0x2b3d94() {
            }
            _0x4621f4(_0x2b3d94, 'laya.displ' + 'ay.cmd.Dra' + 'wLineCmd');
            var _0x238271 = _0x2b3d94['prototype'];
            return _0x238271['recover'] = function () {
                _0x2249dd['recover']('DrawLineCm' + 'd', this);
            }, _0x238271['run'] = function (_0x107e3f, _0x338fc7, _0x213fb3) {
                _0x107e3f['_drawLine'](_0x338fc7, _0x213fb3, this['fromX'], this['fromY'], this['toX'], this['toY'], this['lineColor'], this['lineWidth'], this['vid']);
            }, _0x71e09a(0x0, _0x238271, 'cmdID', function () {
                return 'DrawLine';
            }), _0x2b3d94['create'] = function (_0x1981c8, _0x27b96b, _0x400cab, _0x1cb08f, _0x208774, _0x580c2d, _0x2f76b9) {
                var _0x56a797 = _0x2249dd['getItemByC' + 'lass']('DrawLineCm' + 'd', _0x2b3d94);
                return _0x56a797['fromX'] = _0x1981c8, _0x56a797['fromY'] = _0x27b96b, _0x56a797['toX'] = _0x400cab, _0x56a797['toY'] = _0x1cb08f, _0x56a797['lineColor'] = _0x208774, _0x56a797['lineWidth'] = _0x580c2d, _0x56a797['vid'] = _0x2f76b9, _0x56a797;
            }, _0x2b3d94['ID'] = 'DrawLine', _0x2b3d94;
        }(), _0x250bb7 = function () {
            function _0x67bda1(_0xf6151e, _0x2de37c, _0x19b8e7, _0x1f9143, _0x28e6f7, _0x5890ed, _0x800257) {
                return this['_bTransfor' + 'm'] = !0x1, void 0x0 === _0xf6151e && (_0xf6151e = 0x1), void 0x0 === _0x2de37c && (_0x2de37c = 0x0), void 0x0 === _0x19b8e7 && (_0x19b8e7 = 0x0), void 0x0 === _0x1f9143 && (_0x1f9143 = 0x1), void 0x0 === _0x28e6f7 && (_0x28e6f7 = 0x0), void 0x0 === _0x5890ed && (_0x5890ed = 0x0), void 0x0 === _0x800257 && (_0x800257 = 0x0), null != _0x67bda1['_createFun'] ? _0x67bda1['_createFun'](_0xf6151e, _0x2de37c, _0x19b8e7, _0x1f9143, _0x28e6f7, _0x5890ed, _0x800257) : (this['a'] = _0xf6151e, this['b'] = _0x2de37c, this['c'] = _0x19b8e7, this['d'] = _0x1f9143, this['tx'] = _0x28e6f7, this['ty'] = _0x5890ed, void this['_checkTran' + 'sform']());
            }
            _0x4621f4(_0x67bda1, 'laya.maths' + '.Matrix');
            var _0x3c68e9 = _0x67bda1['prototype'];
            return _0x3c68e9['identity'] = function () {
                return this['a'] = this['d'] = 0x1, this['b'] = this['tx'] = this['ty'] = this['c'] = 0x0, this['_bTransfor' + 'm'] = !0x1, this;
            }, _0x3c68e9['_checkTran' + 'sform'] = function () {
                return this['_bTransfor' + 'm'] = 0x1 !== this['a'] || 0x0 !== this['b'] || 0x0 !== this['c'] || 0x1 !== this['d'];
            }, _0x3c68e9['setTransla' + 'te'] = function (_0x43ff66, _0x4b8c8b) {
                return this['tx'] = _0x43ff66, this['ty'] = _0x4b8c8b, this;
            }, _0x3c68e9['translate'] = function (_0xfc720, _0x25b522) {
                return this['tx'] += _0xfc720, this['ty'] += _0x25b522, this;
            }, _0x3c68e9['scale'] = function (_0x55cd75, _0x546b93) {
                return this['a'] *= _0x55cd75, this['d'] *= _0x546b93, this['c'] *= _0x55cd75, this['b'] *= _0x546b93, this['tx'] *= _0x55cd75, this['ty'] *= _0x546b93, this['_bTransfor' + 'm'] = !0x0, this;
            }, _0x3c68e9['rotate'] = function (_0x1af8b7) {
                var _0x25b229 = Math['cos'](_0x1af8b7), _0x3e23e0 = Math['sin'](_0x1af8b7), _0x23cc05 = this['a'], _0x56898d = this['c'], _0x3a9173 = this['tx'];
                return this['a'] = _0x23cc05 * _0x25b229 - this['b'] * _0x3e23e0, this['b'] = _0x23cc05 * _0x3e23e0 + this['b'] * _0x25b229, this['c'] = _0x56898d * _0x25b229 - this['d'] * _0x3e23e0, this['d'] = _0x56898d * _0x3e23e0 + this['d'] * _0x25b229, this['tx'] = _0x3a9173 * _0x25b229 - this['ty'] * _0x3e23e0, this['ty'] = _0x3a9173 * _0x3e23e0 + this['ty'] * _0x25b229, this['_bTransfor' + 'm'] = !0x0, this;
            }, _0x3c68e9['skew'] = function (_0x480037, _0x3fec3a) {
                var _0x40fd7e = Math['tan'](_0x480037), _0x234e2c = Math['tan'](_0x3fec3a), _0x229ac8 = this['a'], _0x870af7 = this['b'];
                return this['a'] += _0x234e2c * this['c'], this['b'] += _0x234e2c * this['d'], this['c'] += _0x40fd7e * _0x229ac8, this['d'] += _0x40fd7e * _0x870af7, this;
            }, _0x3c68e9['invertTran' + 'sformPoint'] = function (_0x36d952) {
                var _0x725a0c = this['a'], _0x53e338 = this['b'], _0x2fd625 = this['c'], _0x325fe6 = this['d'], _0x5e2dcf = this['tx'], _0x473682 = _0x725a0c * _0x325fe6 - _0x53e338 * _0x2fd625, _0x2ad1b7 = _0x325fe6 / _0x473682, _0x2354c8 = -_0x53e338 / _0x473682, _0x12601b = -_0x2fd625 / _0x473682, _0x4406d7 = _0x725a0c / _0x473682, _0x2c6a14 = (_0x2fd625 * this['ty'] - _0x325fe6 * _0x5e2dcf) / _0x473682, _0x50239a = -(_0x725a0c * this['ty'] - _0x53e338 * _0x5e2dcf) / _0x473682;
                return _0x36d952['setTo'](_0x2ad1b7 * _0x36d952['x'] + _0x12601b * _0x36d952['y'] + _0x2c6a14, _0x2354c8 * _0x36d952['x'] + _0x4406d7 * _0x36d952['y'] + _0x50239a);
            }, _0x3c68e9['transformP' + 'oint'] = function (_0x57ebde) {
                return _0x57ebde['setTo'](this['a'] * _0x57ebde['x'] + this['c'] * _0x57ebde['y'] + this['tx'], this['b'] * _0x57ebde['x'] + this['d'] * _0x57ebde['y'] + this['ty']);
            }, _0x3c68e9['transformP' + 'ointN'] = function (_0x20de3f) {
                return _0x20de3f['setTo'](this['a'] * _0x20de3f['x'] + this['c'] * _0x20de3f['y'], this['b'] * _0x20de3f['x'] + this['d'] * _0x20de3f['y']);
            }, _0x3c68e9['getScaleX'] = function () {
                return 0x0 === this['b'] ? this['a'] : Math['sqrt'](this['a'] * this['a'] + this['b'] * this['b']);
            }, _0x3c68e9['getScaleY'] = function () {
                return 0x0 === this['c'] ? this['d'] : Math['sqrt'](this['c'] * this['c'] + this['d'] * this['d']);
            }, _0x3c68e9['invert'] = function () {
                var _0x520065 = this['a'], _0x28b8a5 = this['b'], _0x2688dd = this['c'], _0x5109b6 = this['d'], _0x337064 = this['tx'], _0x520122 = _0x520065 * _0x5109b6 - _0x28b8a5 * _0x2688dd;
                return this['a'] = _0x5109b6 / _0x520122, this['b'] = -_0x28b8a5 / _0x520122, this['c'] = -_0x2688dd / _0x520122, this['d'] = _0x520065 / _0x520122, this['tx'] = (_0x2688dd * this['ty'] - _0x5109b6 * _0x337064) / _0x520122, this['ty'] = -(_0x520065 * this['ty'] - _0x28b8a5 * _0x337064) / _0x520122, this;
            }, _0x3c68e9['setTo'] = function (_0x47419d, _0x4b7ffa, _0x50e0a4, _0x27969f, _0x1e98b0, _0x4fa1e3) {
                return this['a'] = _0x47419d, this['b'] = _0x4b7ffa, this['c'] = _0x50e0a4, this['d'] = _0x27969f, this['tx'] = _0x1e98b0, this['ty'] = _0x4fa1e3, this;
            }, _0x3c68e9['concat'] = function (_0x88c9b0) {
                var _0x2e4ee0 = this['a'], _0x2e26f2 = this['c'], _0x1959c2 = this['tx'];
                return this['a'] = _0x2e4ee0 * _0x88c9b0['a'] + this['b'] * _0x88c9b0['c'], this['b'] = _0x2e4ee0 * _0x88c9b0['b'] + this['b'] * _0x88c9b0['d'], this['c'] = _0x2e26f2 * _0x88c9b0['a'] + this['d'] * _0x88c9b0['c'], this['d'] = _0x2e26f2 * _0x88c9b0['b'] + this['d'] * _0x88c9b0['d'], this['tx'] = _0x1959c2 * _0x88c9b0['a'] + this['ty'] * _0x88c9b0['c'] + _0x88c9b0['tx'], this['ty'] = _0x1959c2 * _0x88c9b0['b'] + this['ty'] * _0x88c9b0['d'] + _0x88c9b0['ty'], this;
            }, _0x3c68e9['scaleEx'] = function (_0x5c02f9, _0x5be309) {
                var _0x5dbd95 = this['a'], _0x4fdea7 = this['b'], _0x488198 = this['c'], _0x40feae = this['d'];
                0x0 !== _0x4fdea7 || 0x0 !== _0x488198 ? (this['a'] = _0x5c02f9 * _0x5dbd95, this['b'] = _0x5c02f9 * _0x4fdea7, this['c'] = _0x5be309 * _0x488198, this['d'] = _0x5be309 * _0x40feae) : (this['a'] = _0x5c02f9 * _0x5dbd95, this['b'] = 0x0 * _0x40feae, this['c'] = 0x0 * _0x5dbd95, this['d'] = _0x5be309 * _0x40feae), this['_bTransfor' + 'm'] = !0x0;
            }, _0x3c68e9['rotateEx'] = function (_0x127f29) {
                var _0x372e87 = Math['cos'](_0x127f29), _0x21db1a = Math['sin'](_0x127f29), _0x10f33f = this['a'], _0x4f85ea = this['b'], _0x3c6f88 = this['c'], _0x462b67 = this['d'];
                0x0 !== _0x4f85ea || 0x0 !== _0x3c6f88 ? (this['a'] = _0x372e87 * _0x10f33f + _0x21db1a * _0x3c6f88, this['b'] = _0x372e87 * _0x4f85ea + _0x21db1a * _0x462b67, this['c'] = -_0x21db1a * _0x10f33f + _0x372e87 * _0x3c6f88, this['d'] = -_0x21db1a * _0x4f85ea + _0x372e87 * _0x462b67) : (this['a'] = _0x372e87 * _0x10f33f, this['b'] = _0x21db1a * _0x462b67, this['c'] = -_0x21db1a * _0x10f33f, this['d'] = _0x372e87 * _0x462b67), this['_bTransfor' + 'm'] = !0x0;
            }, _0x3c68e9['clone'] = function () {
                var _0x2da3a6 = _0x67bda1['create']();
                return _0x2da3a6['a'] = this['a'], _0x2da3a6['b'] = this['b'], _0x2da3a6['c'] = this['c'], _0x2da3a6['d'] = this['d'], _0x2da3a6['tx'] = this['tx'], _0x2da3a6['ty'] = this['ty'], _0x2da3a6['_bTransfor' + 'm'] = this['_bTransfor' + 'm'], _0x2da3a6;
            }, _0x3c68e9['copyTo'] = function (_0x52c9ad) {
                return _0x52c9ad['a'] = this['a'], _0x52c9ad['b'] = this['b'], _0x52c9ad['c'] = this['c'], _0x52c9ad['d'] = this['d'], _0x52c9ad['tx'] = this['tx'], _0x52c9ad['ty'] = this['ty'], _0x52c9ad['_bTransfor' + 'm'] = this['_bTransfor' + 'm'], _0x52c9ad;
            }, _0x3c68e9['toString'] = function () {
                return this['a'] + ',' + this['b'] + ',' + this['c'] + ',' + this['d'] + ',' + this['tx'] + ',' + this['ty'];
            }, _0x3c68e9['destroy'] = function () {
                this['recover']();
            }, _0x3c68e9['recover'] = function () {
                _0x2249dd['recover']('Matrix', this['identity']());
            }, _0x67bda1['mul'] = function (_0xcf89c2, _0x36c5b6, _0x1eb655) {
                var _0x44b045 = _0xcf89c2['a'], _0xd29acc = _0xcf89c2['b'], _0x3941ad = _0xcf89c2['c'], _0x2e6c03 = _0xcf89c2['d'], _0x26de42 = _0xcf89c2['tx'], _0x10ccd6 = _0xcf89c2['ty'], _0xaf862a = _0x36c5b6['a'], _0x785977 = _0x36c5b6['b'], _0x118e4a = _0x36c5b6['c'], _0x7c1085 = _0x36c5b6['d'], _0x3537a8 = _0x36c5b6['tx'], _0x3474ec = _0x36c5b6['ty'];
                return 0x0 !== _0x785977 || 0x0 !== _0x118e4a ? (_0x1eb655['a'] = _0x44b045 * _0xaf862a + _0xd29acc * _0x118e4a, _0x1eb655['b'] = _0x44b045 * _0x785977 + _0xd29acc * _0x7c1085, _0x1eb655['c'] = _0x3941ad * _0xaf862a + _0x2e6c03 * _0x118e4a, _0x1eb655['d'] = _0x3941ad * _0x785977 + _0x2e6c03 * _0x7c1085, _0x1eb655['tx'] = _0xaf862a * _0x26de42 + _0x118e4a * _0x10ccd6 + _0x3537a8, _0x1eb655['ty'] = _0x785977 * _0x26de42 + _0x7c1085 * _0x10ccd6 + _0x3474ec) : (_0x1eb655['a'] = _0x44b045 * _0xaf862a, _0x1eb655['b'] = _0xd29acc * _0x7c1085, _0x1eb655['c'] = _0x3941ad * _0xaf862a, _0x1eb655['d'] = _0x2e6c03 * _0x7c1085, _0x1eb655['tx'] = _0xaf862a * _0x26de42 + _0x3537a8, _0x1eb655['ty'] = _0x7c1085 * _0x10ccd6 + _0x3474ec), _0x1eb655;
            }, _0x67bda1['mul16'] = function (_0x16b1b1, _0x354a98, _0x2ee7b0) {
                var _0x53598d = _0x16b1b1['a'], _0x249004 = _0x16b1b1['b'], _0x592629 = _0x16b1b1['c'], _0x3b71f7 = _0x16b1b1['d'], _0x3a388b = _0x16b1b1['tx'], _0x2bae19 = _0x16b1b1['ty'], _0xaf8277 = _0x354a98['a'], _0x26efd6 = _0x354a98['b'], _0x17e7d1 = _0x354a98['c'], _0x467671 = _0x354a98['d'], _0x1cb683 = _0x354a98['tx'], _0x54ade8 = _0x354a98['ty'];
                return 0x0 !== _0x26efd6 || 0x0 !== _0x17e7d1 ? (_0x2ee7b0[0x0] = _0x53598d * _0xaf8277 + _0x249004 * _0x17e7d1, _0x2ee7b0[0x1] = _0x53598d * _0x26efd6 + _0x249004 * _0x467671, _0x2ee7b0[0x4] = _0x592629 * _0xaf8277 + _0x3b71f7 * _0x17e7d1, _0x2ee7b0[0x5] = _0x592629 * _0x26efd6 + _0x3b71f7 * _0x467671, _0x2ee7b0[0xc] = _0xaf8277 * _0x3a388b + _0x17e7d1 * _0x2bae19 + _0x1cb683, _0x2ee7b0[0xd] = _0x26efd6 * _0x3a388b + _0x467671 * _0x2bae19 + _0x54ade8) : (_0x2ee7b0[0x0] = _0x53598d * _0xaf8277, _0x2ee7b0[0x1] = _0x249004 * _0x467671, _0x2ee7b0[0x4] = _0x592629 * _0xaf8277, _0x2ee7b0[0x5] = _0x3b71f7 * _0x467671, _0x2ee7b0[0xc] = _0xaf8277 * _0x3a388b + _0x1cb683, _0x2ee7b0[0xd] = _0x467671 * _0x2bae19 + _0x54ade8), _0x2ee7b0;
            }, _0x67bda1['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('Matrix', _0x67bda1);
            }, _0x67bda1['EMPTY'] = new _0x67bda1(), _0x67bda1['TEMP'] = new _0x67bda1(), _0x67bda1['_createFun'] = null, _0x67bda1;
        }(), _0x59c1f7 = (function () {
            function _0x5343c9() {
                this['_strsToID'] = {}, this['_idToStrs'] = [], this['_length'] = 0x0;
            }
            _0x4621f4(_0x5343c9, 'laya.utils' + '.StringKey');
            var _0x2366fa = _0x5343c9['prototype'];
            return _0x2366fa['add'] = function (_0x3a41f3) {
                var _0x5f42e2 = this['_strsToID'][_0x3a41f3];
                return null != _0x5f42e2 ? _0x5f42e2 : (this['_idToStrs'][this['_length']] = _0x3a41f3, this['_strsToID'][_0x3a41f3] = this['_length']++);
            }, _0x2366fa['getID'] = function (_0x3473a9) {
                var _0x1e86c8 = this['_strsToID'][_0x3473a9];
                return null == _0x1e86c8 ? -0x1 : _0x1e86c8;
            }, _0x2366fa['getName'] = function (_0x396d20) {
                var _0x43b834 = this['_idToStrs'][_0x396d20];
                return null == _0x43b834 ? void 0x0 : _0x43b834;
            }, _0x5343c9;
        }(), function () {
            function _0x1b8899() {
            }
            return _0x4621f4(_0x1b8899, 'laya.utils' + '.Log'), _0x1b8899['enable'] = function () {
                _0x1b8899['_logdiv'] || (_0x1b8899['_logdiv'] = _0x2ad6c5['createElem' + 'ent']('div'), _0x1b8899['_logdiv']['style']['cssText'] = 'border:whi' + 'te;padding' + ':4px;overf' + 'low-y:auto' + ';z-index:1' + '000000;bac' + 'kground:rg' + 'ba(100,100' + ',100,0.6);' + 'color:whit' + 'e;position' + ':\x20absolute' + ';left:0px;' + 'top:0px;wi' + 'dth:50%;he' + 'ight:50%;', _0x2ad6c5['document']['body']['appendChil' + 'd'](_0x1b8899['_logdiv']), _0x1b8899['_btn'] = _0x2ad6c5['createElem' + 'ent']('button'), _0x1b8899['_btn']['innerText'] = 'Hide', _0x1b8899['_btn']['style']['cssText'] = 'z-index:10' + '00001;posi' + 'tion:\x20abso' + 'lute;left:' + '10px;top:1' + '0px;', _0x1b8899['_btn']['onclick'] = _0x1b8899['toggle'], _0x2ad6c5['document']['body']['appendChil' + 'd'](_0x1b8899['_btn']));
            }, _0x1b8899['toggle'] = function () {
                var _0x2d2d34 = _0x1b8899['_logdiv']['style'];
                '' === _0x2d2d34['display'] ? (_0x1b8899['_btn']['innerText'] = 'Show', _0x2d2d34['display'] = 'none') : (_0x1b8899['_btn']['innerText'] = 'Hide', _0x2d2d34['display'] = '');
            }, _0x1b8899['print'] = function (_0x4fd049) {
                _0x1b8899['_logdiv'] && (_0x1b8899['_count'] >= _0x1b8899['maxCount'] && _0x1b8899['clear'](), _0x1b8899['_count']++, _0x1b8899['_logdiv']['innerText'] += _0x4fd049 + '\x0a', _0x1b8899['autoScroll' + 'ToBottom'] && _0x1b8899['_logdiv']['scrollHeig' + 'ht'] - _0x1b8899['_logdiv']['scrollTop'] - _0x1b8899['_logdiv']['clientHeig' + 'ht'] < 0x32 && (_0x1b8899['_logdiv']['scrollTop'] = _0x1b8899['_logdiv']['scrollHeig' + 'ht']));
            }, _0x1b8899['clear'] = function () {
                _0x1b8899['_logdiv']['innerText'] = '', _0x1b8899['_count'] = 0x0;
            }, _0x1b8899['_logdiv'] = null, _0x1b8899['_btn'] = null, _0x1b8899['_count'] = 0x0, _0x1b8899['maxCount'] = 0x32, _0x1b8899['autoScroll' + 'ToBottom'] = !0x0, _0x1b8899;
        }(), function () {
            function _0x1c715b() {
            }
            return _0x4621f4(_0x1c715b, 'laya.net.A' + 'tlasInfoMa' + 'nager'), _0x1c715b['enable'] = function (_0x23dc46, _0x49cbbb) {
                _0x34a895['loader']['load'](_0x23dc46, _0x16ca2b['create'](null, _0x1c715b['_onInfoLoa' + 'ded'], [_0x49cbbb]), null, 'json');
            }, _0x1c715b['_onInfoLoa' + 'ded'] = function (_0x3434e3, _0x3f596a) {
                var _0x1780a, _0x2d4f7f, _0x2d423d, _0x3b4001 = 0x0, _0x46007b = 0x0;
                for (_0x1780a in _0x3f596a)
                    for (_0x2d423d = _0x3f596a[_0x1780a], _0x2d4f7f = _0x2d423d[0x0], _0x2d423d = _0x2d423d[0x1], _0x46007b = _0x2d423d['length'], _0x3b4001 = 0x0; _0x46007b > _0x3b4001; _0x3b4001++)
                        _0x1c715b['_fileLoadD' + 'ic'][_0x2d4f7f + _0x2d423d[_0x3b4001]] = _0x1780a;
                _0x3434e3 && _0x3434e3['run']();
            }, _0x1c715b['getFileLoa' + 'dPath'] = function (_0x4eb04a) {
                return _0x1c715b['_fileLoadD' + 'ic'][_0x4eb04a] || _0x4eb04a;
            }, _0x1c715b['_fileLoadD' + 'ic'] = {}, _0x1c715b;
        }()), _0x53e0be = function () {
            function _0x2768d9() {
                this['_pool'] = [], this['_map'] = [], this['_laters'] = [];
            }
            var _0x385703;
            _0x4621f4(_0x2768d9, 'laya.utils' + '.CallLater');
            var _0x9be4b0 = _0x2768d9['prototype'];
            return _0x9be4b0['_update'] = function () {
                var _0x3c1ea9 = this['_laters'], _0x438580 = _0x3c1ea9['length'];
                if (_0x438580 > 0x0) {
                    for (var _0x12de64 = 0x0, _0x1ad3e7 = _0x438580 - 0x1; _0x1ad3e7 >= _0x12de64; _0x12de64++) {
                        var _0x1e135c = _0x3c1ea9[_0x12de64];
                        this['_map'][_0x1e135c['key']] = null, null !== _0x1e135c['method'] && (_0x1e135c['run'](), _0x1e135c['clear']()), this['_pool']['push'](_0x1e135c), _0x12de64 === _0x1ad3e7 && (_0x1ad3e7 = _0x3c1ea9['length'] - 0x1);
                    }
                    _0x3c1ea9['length'] = 0x0;
                }
            }, _0x9be4b0['_getHandle' + 'r'] = function (_0x24a8a0, _0x501bc3) {
                var _0x42b36e = _0x24a8a0 ? _0x24a8a0['$_GID'] || (_0x24a8a0['$_GID'] = _0x3b78ce['getGID']()) : 0x0, _0x223792 = _0x501bc3['$_TID'] || (_0x501bc3['$_TID'] = 0x186a0 * _0x2f73a1['_mid']++);
                return this['_map'][_0x42b36e + _0x223792];
            }, _0x9be4b0['callLater'] = function (_0x301680, _0x2428a4, _0xfae89f) {
                if (null == this['_getHandle' + 'r'](_0x301680, _0x2428a4)) {
                    if (this['_pool']['length'])
                        var _0x2ff255 = this['_pool']['pop']();
                    else
                        _0x2ff255 = new _0x385703();
                    _0x2ff255['caller'] = _0x301680, _0x2ff255['method'] = _0x2428a4, _0x2ff255['args'] = _0xfae89f;
                    var _0xa3a704 = _0x301680 ? _0x301680['$_GID'] : 0x0, _0x56a18c = _0x2428a4['$_TID'];
                    _0x2ff255['key'] = _0xa3a704 + _0x56a18c, this['_map'][_0x2ff255['key']] = _0x2ff255, this['_laters']['push'](_0x2ff255);
                }
            }, _0x9be4b0['runCallLat' + 'er'] = function (_0x390bf6, _0x7e8e1) {
                var _0x38aa71 = this['_getHandle' + 'r'](_0x390bf6, _0x7e8e1);
                _0x38aa71 && null != _0x38aa71['method'] && (this['_map'][_0x38aa71['key']] = null, _0x38aa71['run'](), _0x38aa71['clear']());
            }, _0x2768d9['I'] = new _0x2768d9(), _0x2768d9['__init$'] = function () {
                _0x385703 = function () {
                    function _0x1b9ac3() {
                        this['key'] = 0x0, this['caller'] = null, this['method'] = null, this['args'] = null;
                    }
                    _0x4621f4(_0x1b9ac3, '');
                    var _0xe9de9f = _0x1b9ac3['prototype'];
                    return _0xe9de9f['clear'] = function () {
                        this['caller'] = null, this['method'] = null, this['args'] = null;
                    }, _0xe9de9f['run'] = function () {
                        var _0x5eaf76 = this['caller'];
                        if (_0x5eaf76 && _0x5eaf76['destroyed'])
                            return this['clear']();
                        var _0x2f2bc2 = this['method'], _0xb25a3c = this['args'];
                        null != _0x2f2bc2 && (_0xb25a3c ? _0x2f2bc2['apply'](_0x5eaf76, _0xb25a3c) : _0x2f2bc2['call'](_0x5eaf76));
                    }, _0x1b9ac3;
                }();
            }, _0x2768d9;
        }(), _0x51cfb8 = function () {
            function _0x5cb743() {
            }
            _0x4621f4(_0x5cb743, 'laya.displ' + 'ay.cmd.Dra' + 'wPathCmd');
            var _0x31ac80 = _0x5cb743['prototype'];
            return _0x31ac80['recover'] = function () {
                this['paths'] = null, this['brush'] = null, this['pen'] = null, _0x2249dd['recover']('DrawPathCm' + 'd', this);
            }, _0x31ac80['run'] = function (_0x54f80f, _0x3e5fa0, _0x36c903) {
                _0x54f80f['_drawPath'](this['x'] + _0x3e5fa0, this['y'] + _0x36c903, this['paths'], this['brush'], this['pen']);
            }, _0x71e09a(0x0, _0x31ac80, 'cmdID', function () {
                return 'DrawPath';
            }), _0x5cb743['create'] = function (_0x38ca61, _0x3919d9, _0x2f6739, _0x16107d, _0x3b52ae) {
                var _0x59e3a4 = _0x2249dd['getItemByC' + 'lass']('DrawPathCm' + 'd', _0x5cb743);
                return _0x59e3a4['x'] = _0x38ca61, _0x59e3a4['y'] = _0x3919d9, _0x59e3a4['paths'] = _0x2f6739, _0x59e3a4['brush'] = _0x16107d, _0x59e3a4['pen'] = _0x3b52ae, _0x59e3a4;
            }, _0x5cb743['ID'] = 'DrawPath', _0x5cb743;
        }(), _0x176bfb = function () {
            function _0x4ef17a() {
            }
            _0x4621f4(_0x4ef17a, 'laya.displ' + 'ay.cmd.Dra' + 'wTriangles' + 'Cmd');
            var _0x4371c6 = _0x4ef17a['prototype'];
            return _0x4371c6['recover'] = function () {
                this['texture'] = null, this['vertices'] = null, this['uvs'] = null, this['indices'] = null, this['matrix'] = null, _0x2249dd['recover']('DrawTriang' + 'lesCmd', this);
            }, _0x4371c6['run'] = function (_0x48a2da, _0xb48214, _0x22d40f) {
                _0x48a2da['drawTriang' + 'les'](this['texture'], this['x'] + _0xb48214, this['y'] + _0x22d40f, this['vertices'], this['uvs'], this['indices'], this['matrix'], this['alpha'], this['color'], this['blendMode']);
            }, _0x71e09a(0x0, _0x4371c6, 'cmdID', function () {
                return 'DrawTriang' + 'les';
            }), _0x4ef17a['create'] = function (_0x482d10, _0x43ec4e, _0x314039, _0x418e93, _0x589205, _0xc1d4a2, _0x34edc8, _0x189209, _0x1c40e2, _0x463b8c) {
                var _0x60cc8d = _0x2249dd['getItemByC' + 'lass']('DrawTriang' + 'lesCmd', _0x4ef17a);
                if (_0x60cc8d['texture'] = _0x482d10, _0x60cc8d['x'] = _0x43ec4e, _0x60cc8d['y'] = _0x314039, _0x60cc8d['vertices'] = _0x418e93, _0x60cc8d['uvs'] = _0x589205, _0x60cc8d['indices'] = _0xc1d4a2, _0x60cc8d['matrix'] = _0x34edc8, _0x60cc8d['alpha'] = _0x189209, _0x1c40e2) {
                    _0x60cc8d['color'] = new _0x54b560();
                    var _0xac388e = _0x189459['create'](_0x1c40e2)['arrColor'];
                    _0x60cc8d['color']['color'](0xff * _0xac388e[0x0], 0xff * _0xac388e[0x1], 0xff * _0xac388e[0x2], 0xff * _0xac388e[0x3]);
                }
                return _0x60cc8d['blendMode'] = _0x463b8c, _0x60cc8d;
            }, _0x4ef17a['ID'] = 'DrawTriang' + 'les', _0x4ef17a;
        }(), _0x2973e9 = function () {
            function _0x3223a0() {
            }
            return _0x4621f4(_0x3223a0, 'laya.utils' + '.Stat'), _0x71e09a(0x1, _0x3223a0, 'onclick', null, function (_0x4c3f50) {
                _0x3223a0['_sp'] && _0x3223a0['_sp']['on']('click', _0x3223a0['_sp'], _0x4c3f50), _0x3223a0['_canvas'] && (_0x3223a0['_canvas']['source']['onclick'] = _0x4c3f50, _0x3223a0['_canvas']['source']['style']['pointerEve' + 'nts'] = '');
            }), _0x3223a0['show'] = function (_0x168c9a, _0x4d5de4) {
                void 0x0 === _0x168c9a && (_0x168c9a = 0x0), void 0x0 === _0x4d5de4 && (_0x4d5de4 = 0x0), _0x2ad6c5['onMiniGame'] || _0x2ad6c5['onLimixiu'] || (_0x3223a0['_useCanvas'] = !0x0), _0x3223a0['_show'] = !0x0, _0x3223a0['_fpsData']['length'] = 0x3c, _0x4fec79['isConchApp'] ? _0x3223a0['_view'][0x0] = {
                    'title': 'FPS',
                    'value': '_fpsStr',
                    'color': 'yellow',
                    'units': 'int'
                } : _0x3223a0['_view'][0x0] = {
                    'title': 'FPS(Canvas' + ')',
                    'value': '_fpsStr',
                    'color': 'yellow',
                    'units': 'int'
                }, _0x3223a0['_view'][0x1] = {
                    'title': 'Sprite',
                    'value': '_spriteStr',
                    'color': 'white',
                    'units': 'int'
                }, _0x3223a0['_view'][0x2] = {
                    'title': 'RenderBatc' + 'h',
                    'value': 'renderBatc' + 'h',
                    'color': 'white',
                    'units': 'int'
                }, _0x3223a0['_view'][0x3] = {
                    'title': 'CPUMemory',
                    'value': 'cpuMemory',
                    'color': 'yellow',
                    'units': 'M'
                }, _0x3223a0['_view'][0x4] = {
                    'title': 'GPUMemory',
                    'value': 'gpuMemory',
                    'color': 'yellow',
                    'units': 'M'
                }, _0x4fec79['isWebGL'] && (_0x3223a0['_view'][0x5] = {
                    'title': 'Shader',
                    'value': 'shaderCall',
                    'color': 'white',
                    'units': 'int'
                }, _0x4fec79['is3DMode'] ? (_0x3223a0['_view'][0x0]['title'] = 'FPS(3D)', _0x3223a0['_view'][0x6] = {
                    'title': 'TriFaces',
                    'value': 'trianglesF' + 'aces',
                    'color': 'white',
                    'units': 'int'
                }) : (_0x3223a0['_view'][0x0]['title'] = 'FPS(WebGL)', _0x3223a0['_view'][0x6] = {
                    'title': 'Canvas',
                    'value': '_canvasStr',
                    'color': 'white',
                    'units': 'int'
                })), _0x3223a0['_useCanvas'] ? _0x3223a0['createUIPr' + 'e'](_0x168c9a, _0x4d5de4) : _0x3223a0['createUI'](_0x168c9a, _0x4d5de4), _0x3223a0['enable']();
            }, _0x3223a0['createUIPr' + 'e'] = function (_0x15abf4, _0x361abf) {
                var _0x3f1e23 = _0x2ad6c5['pixelRatio'];
                _0x3223a0['_width'] = 0x82 * _0x3f1e23, _0x3223a0['_vx'] = 0x4b * _0x3f1e23, _0x3223a0['_height'] = _0x3f1e23 * (0xc * _0x3223a0['_view']['length'] + 0x3 * _0x3f1e23) + 0x4, _0x3223a0['_fontSize'] = 0xc * _0x3f1e23;
                for (var _0x4707ae = 0x0; _0x4707ae < _0x3223a0['_view']['length']; _0x4707ae++)
                    _0x3223a0['_view'][_0x4707ae]['x'] = 0x4, _0x3223a0['_view'][_0x4707ae]['y'] = _0x4707ae * _0x3223a0['_fontSize'] + 0x2 * _0x3f1e23;
                _0x4fec79['isConchApp'] ? (_0x3223a0['_sp'] = new _0x4bc7a0(), _0x3223a0['_titleSp'] = new _0x4bc7a0(), _0x3223a0['_bgSp'] = new _0x4bc7a0(), _0x3223a0['_bgSp']['graphics']['drawRect'](_0x15abf4, _0x361abf, _0x3223a0['_width'], _0x3223a0['_height'], '#969696'), _0x3223a0['_bgSp']['alpha'] = 0.8, _0x3223a0['_sp']['zOrder'] = 0x186a0, _0x3223a0['_titleSp']['zOrder'] = 0x186a0, _0x3223a0['_bgSp']['zOrder'] = 0x186a0, _0x3223a0['_bgSp']['addChild'](_0x3223a0['_sp']), _0x3223a0['_bgSp']['addChild'](_0x3223a0['_titleSp']), _0x34a895['stage']['addChild'](_0x3223a0['_bgSp'])) : (_0x3223a0['_canvas'] || (_0x3223a0['_canvas'] = new _0x50a1b2(!0x0), _0x3223a0['_canvas']['size'](_0x3223a0['_width'], _0x3223a0['_height']), _0x3223a0['_ctx'] = _0x3223a0['_canvas']['getContext']('2d'), _0x3223a0['_ctx']['textBaseli' + 'ne'] = 'top', _0x3223a0['_ctx']['font'] = _0x3223a0['_fontSize'] + 'px\x20Arial', _0x3223a0['_canvas']['source']['style']['cssText'] = 'pointer-ev' + 'ents:none;' + 'background' + ':rgba(150,' + '150,150,0.' + '8);z-index' + ':100000;po' + 'sition:\x20ab' + 'solute;dir' + 'ection:ltr' + ';left:' + _0x15abf4 + 'px;top:' + _0x361abf + 'px;width:' + _0x3223a0['_width'] / _0x3f1e23 + 'px;height:' + _0x3223a0['_height'] / _0x3f1e23 + 'px;'), _0x2ad6c5['container']['appendChil' + 'd'](_0x3223a0['_canvas']['source'])), _0x3223a0['_first'] = !0x0, _0x3223a0['loop'](), _0x3223a0['_first'] = !0x1;
            }, _0x3223a0['createUI'] = function (_0x4651e0, _0x175610) {
                var _0x324802 = _0x3223a0['_sp'], _0x7b8feb = _0x2ad6c5['pixelRatio'];
                _0x324802 || (_0x324802 = new _0x4bc7a0(), _0x3223a0['_leftText'] = new _0x12a05f(), _0x3223a0['_leftText']['pos'](0x5, 0x5), _0x3223a0['_leftText']['color'] = '#ffffff', _0x324802['addChild'](_0x3223a0['_leftText']), _0x3223a0['_txt'] = new _0x12a05f(), _0x3223a0['_txt']['pos'](0x50 * _0x7b8feb, 0x5), _0x3223a0['_txt']['color'] = '#ffffff', _0x324802['addChild'](_0x3223a0['_txt']), _0x3223a0['_sp'] = _0x324802), _0x324802['pos'](_0x4651e0, _0x175610);
                for (var _0x1c262f = '', _0x4f7c7f = 0x0; _0x4f7c7f < _0x3223a0['_view']['length']; _0x4f7c7f++) {
                    var _0x43d43d = _0x3223a0['_view'][_0x4f7c7f];
                    _0x1c262f += _0x43d43d['title'] + '\x0a';
                }
                _0x3223a0['_leftText']['text'] = _0x1c262f;
                var _0x2dbbf6 = 0x8a * _0x7b8feb, _0x480f69 = _0x7b8feb * (0xc * _0x3223a0['_view']['length'] + 0x3 * _0x7b8feb) + 0x4;
                _0x3223a0['_txt']['fontSize'] = _0x3223a0['_fontSize'] * _0x7b8feb, _0x3223a0['_leftText']['fontSize'] = _0x3223a0['_fontSize'] * _0x7b8feb, _0x324802['size'](_0x2dbbf6, _0x480f69), _0x324802['graphics']['clear'](), _0x324802['graphics']['alpha'](0.5), _0x324802['graphics']['drawRect'](0x0, 0x0, _0x2dbbf6, _0x480f69, '#999999'), _0x324802['graphics']['alpha'](0x2), _0x3223a0['loop']();
            }, _0x3223a0['enable'] = function () {
                _0x34a895['systemTime' + 'r']['frameLoop'](0x1, _0x3223a0, _0x3223a0['loop']);
            }, _0x3223a0['hide'] = function () {
                _0x3223a0['_show'] = !0x1, _0x34a895['systemTime' + 'r']['clear'](_0x3223a0, _0x3223a0['loop']), _0x3223a0['_canvas'] && _0x2ad6c5['removeElem' + 'ent'](_0x3223a0['_canvas']['source']);
            }, _0x3223a0['clear'] = function () {
                _0x3223a0['trianglesF' + 'aces'] = _0x3223a0['renderBatc' + 'h'] = _0x3223a0['shaderCall'] = _0x3223a0['spriteCoun' + 't'] = _0x3223a0['spriteRend' + 'erUseCache' + 'Count'] = _0x3223a0['treeNodeCo' + 'llision'] = _0x3223a0['treeSprite' + 'Collision'] = _0x3223a0['canvasNorm' + 'al'] = _0x3223a0['canvasBitm' + 'ap'] = _0x3223a0['canvasReCa' + 'che'] = 0x0;
            }, _0x3223a0['loop'] = function () {
                _0x3223a0['_count']++;
                var _0x50afc4 = _0x2ad6c5['now']();
                if (!(_0x50afc4 - _0x3223a0['_timer'] < 0x3e8)) {
                    var _0xaa4d58 = _0x3223a0['_count'];
                    if (_0x3223a0['FPS'] = Math['round'](0x3e8 * _0xaa4d58 / (_0x50afc4 - _0x3223a0['_timer'])), _0x3223a0['_show']) {
                        _0x3223a0['trianglesF' + 'aces'] = Math['round'](_0x3223a0['trianglesF' + 'aces'] / _0xaa4d58), _0x3223a0['_useCanvas'] ? (_0x3223a0['renderBatc' + 'h'] = Math['round'](_0x3223a0['renderBatc' + 'h'] / _0xaa4d58), _0x3223a0['shaderCall'] = Math['round'](_0x3223a0['shaderCall'] / _0xaa4d58), _0x3223a0['spriteCoun' + 't'] = Math['round'](_0x3223a0['spriteCoun' + 't'] / _0xaa4d58) - 0x1) : (_0x3223a0['renderBatc' + 'h'] = Math['round'](_0x3223a0['renderBatc' + 'h'] / _0xaa4d58) - 0x1, _0x3223a0['shaderCall'] = Math['round'](_0x3223a0['shaderCall'] / _0xaa4d58), _0x3223a0['spriteCoun' + 't'] = Math['round'](_0x3223a0['spriteCoun' + 't'] / _0xaa4d58) - 0x4), _0x3223a0['spriteRend' + 'erUseCache' + 'Count'] = Math['round'](_0x3223a0['spriteRend' + 'erUseCache' + 'Count'] / _0xaa4d58), _0x3223a0['canvasNorm' + 'al'] = Math['round'](_0x3223a0['canvasNorm' + 'al'] / _0xaa4d58), _0x3223a0['canvasBitm' + 'ap'] = Math['round'](_0x3223a0['canvasBitm' + 'ap'] / _0xaa4d58), _0x3223a0['canvasReCa' + 'che'] = Math['ceil'](_0x3223a0['canvasReCa' + 'che'] / _0xaa4d58), _0x3223a0['treeNodeCo' + 'llision'] = Math['round'](_0x3223a0['treeNodeCo' + 'llision'] / _0xaa4d58), _0x3223a0['treeSprite' + 'Collision'] = Math['round'](_0x3223a0['treeSprite' + 'Collision'] / _0xaa4d58);
                        var _0x7216a3 = _0x3223a0['FPS'] > 0x0 ? Math['floor'](0x3e8 / _0x3223a0['FPS'])['toString']() : '\x20';
                        _0x3223a0['_fpsStr'] = _0x3223a0['FPS'] + (_0x3223a0['renderSlow'] ? '\x20slow' : '') + '\x20' + _0x7216a3, _0x3223a0['_spriteStr'] = _0x3223a0['spriteCoun' + 't'] + (_0x3223a0['spriteRend' + 'erUseCache' + 'Count'] ? '/' + _0x3223a0['spriteRend' + 'erUseCache' + 'Count'] : ''), _0x3223a0['_canvasStr'] = _0x3223a0['canvasReCa' + 'che'] + '/' + _0x3223a0['canvasNorm' + 'al'] + '/' + _0x3223a0['canvasBitm' + 'ap'], _0x3223a0['cpuMemory'] = _0x297d95['cpuMemory'], _0x3223a0['gpuMemory'] = _0x297d95['gpuMemory'], _0x3223a0['_useCanvas'] ? _0x3223a0['renderInfo' + 'Pre']() : _0x3223a0['renderInfo'](), _0x3223a0['clear']();
                    }
                    _0x3223a0['_count'] = 0x0, _0x3223a0['_timer'] = _0x50afc4;
                }
            }, _0x3223a0['renderInfo' + 'Pre'] = function () {
                var _0x4105b7, _0x4ef593, _0x2fb9f1 = 0x0;
                if (_0x4fec79['isConchApp']) {
                    for (_0x3223a0['_sp']['graphics']['clear'](), _0x2fb9f1 = 0x0; _0x2fb9f1 < _0x3223a0['_view']['length']; _0x2fb9f1++)
                        _0x4105b7 = _0x3223a0['_view'][_0x2fb9f1], _0x3223a0['_first'] && _0x3223a0['_titleSp']['graphics']['fillText'](_0x4105b7['title'], _0x4105b7['x'], _0x4105b7['y'], _0x3223a0['_fontSize'] + 'px\x20Arial', '#ffffff', 'left'), _0x4ef593 = _0x3223a0[_0x4105b7['value']], 'M' == _0x4105b7['units'] && (_0x4ef593 = Math['floor'](_0x4ef593 / 0x100000 * 0x64) / 0x64 + '\x20M'), _0x3223a0['_sp']['graphics']['fillText'](_0x4ef593 + '', _0x4105b7['x'] + _0x3223a0['_vx'], _0x4105b7['y'], _0x3223a0['_fontSize'] + 'px\x20Arial', _0x4105b7['color'], 'left');
                } else {
                    if (_0x3223a0['_canvas']) {
                        var _0x4cbe3e = _0x3223a0['_ctx'];
                        for (_0x4cbe3e['clearRect'](_0x3223a0['_first'] ? 0x0 : _0x3223a0['_vx'], 0x0, _0x3223a0['_width'], _0x3223a0['_height']), _0x2fb9f1 = 0x0; _0x2fb9f1 < _0x3223a0['_view']['length']; _0x2fb9f1++)
                            _0x4105b7 = _0x3223a0['_view'][_0x2fb9f1], _0x3223a0['_first'] && (_0x4cbe3e['fillStyle'] = 'white', _0x4cbe3e['fillText'](_0x4105b7['title'], _0x4105b7['x'], _0x4105b7['y'])), _0x4cbe3e['fillStyle'] = _0x4105b7['color'], _0x4ef593 = _0x3223a0[_0x4105b7['value']], 'M' == _0x4105b7['units'] && (_0x4ef593 = Math['floor'](_0x4ef593 / 0x100000 * 0x64) / 0x64 + '\x20M'), _0x4cbe3e['fillText'](_0x4ef593 + '', _0x4105b7['x'] + _0x3223a0['_vx'], _0x4105b7['y']);
                    }
                }
            }, _0x3223a0['renderInfo'] = function () {
                for (var _0x225b41 = '', _0x318896 = 0x0; _0x318896 < _0x3223a0['_view']['length']; _0x318896++) {
                    var _0x2148b7 = _0x3223a0['_view'][_0x318896], _0x5802d8 = _0x3223a0[_0x2148b7['value']];
                    'M' == _0x2148b7['units'] && (_0x5802d8 = Math['floor'](_0x5802d8 / 0x100000 * 0x64) / 0x64 + '\x20M'), 'K' == _0x2148b7['units'] && (_0x5802d8 = Math['floor'](_0x5802d8 / 0x400 * 0x64) / 0x64 + '\x20K'), _0x225b41 += _0x5802d8 + '\x0a';
                }
                _0x3223a0['_txt']['text'] = _0x225b41;
            }, _0x3223a0['FPS'] = 0x0, _0x3223a0['loopCount'] = 0x0, _0x3223a0['shaderCall'] = 0x0, _0x3223a0['renderBatc' + 'h'] = 0x0, _0x3223a0['trianglesF' + 'aces'] = 0x0, _0x3223a0['spriteCoun' + 't'] = 0x0, _0x3223a0['spriteRend' + 'erUseCache' + 'Count'] = 0x0, _0x3223a0['treeNodeCo' + 'llision'] = 0x0, _0x3223a0['treeSprite' + 'Collision'] = 0x0, _0x3223a0['canvasNorm' + 'al'] = 0x0, _0x3223a0['canvasBitm' + 'ap'] = 0x0, _0x3223a0['canvasReCa' + 'che'] = 0x0, _0x3223a0['renderSlow'] = !0x1, _0x3223a0['gpuMemory'] = 0x0, _0x3223a0['cpuMemory'] = 0x0, _0x3223a0['_fpsStr'] = null, _0x3223a0['_canvasStr'] = null, _0x3223a0['_spriteStr'] = null, _0x3223a0['_fpsData'] = [], _0x3223a0['_timer'] = 0x0, _0x3223a0['_count'] = 0x0, _0x3223a0['_view'] = [], _0x3223a0['_fontSize'] = 0xc, _0x3223a0['_txt'] = null, _0x3223a0['_leftText'] = null, _0x3223a0['_sp'] = null, _0x3223a0['_titleSp'] = null, _0x3223a0['_bgSp'] = null, _0x3223a0['_show'] = !0x1, _0x3223a0['_useCanvas'] = !0x1, _0x3223a0['_canvas'] = null, _0x3223a0['_ctx'] = null, _0x3223a0['_first'] = !0x1, _0x3223a0['_vx'] = NaN, _0x3223a0['_width'] = 0x0, _0x3223a0['_height'] = 0x64, _0x3223a0;
        }(), _0x512c96 = function () {
            function _0x46143c() {
            }
            _0x4621f4(_0x46143c, 'laya.displ' + 'ay.css.Bou' + 'ndsStyle');
            var _0x55375f = _0x46143c['prototype'];
            return _0x55375f['reset'] = function () {
                return this['bounds'] && this['bounds']['recover'](), this['userBounds'] && this['userBounds']['recover'](), this['bounds'] = null, this['userBounds'] = null, this['temBM'] = null, this;
            }, _0x55375f['recover'] = function () {
                _0x2249dd['recover']('BoundsStyl' + 'e', this['reset']());
            }, _0x46143c['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('BoundsStyl' + 'e', _0x46143c);
            }, _0x46143c;
        }(), _0x4dc72 = function () {
            function _0x45908c() {
            }
            _0x4621f4(_0x45908c, 'laya.displ' + 'ay.cmd.Dra' + 'wPieCmd');
            var _0x3f4e65 = _0x45908c['prototype'];
            return _0x3f4e65['recover'] = function () {
                this['fillColor'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawPieCmd', this);
            }, _0x3f4e65['run'] = function (_0x121c5b, _0x3e7890, _0x22ddf8) {
                _0x121c5b['_drawPie'](this['x'] + _0x3e7890, this['y'] + _0x22ddf8, this['radius'], this['_startAngl' + 'e'], this['_endAngle'], this['fillColor'], this['lineColor'], this['lineWidth'], this['vid']);
            }, _0x71e09a(0x0, _0x3f4e65, 'startAngle', function () {
                return 0xb4 * this['_startAngl' + 'e'] / Math['PI'];
            }, function (_0x4b3eb2) {
                this['_startAngl' + 'e'] = _0x4b3eb2 * Math['PI'] / 0xb4;
            }), _0x71e09a(0x0, _0x3f4e65, 'cmdID', function () {
                return 'DrawPie';
            }), _0x71e09a(0x0, _0x3f4e65, 'endAngle', function () {
                return 0xb4 * this['_endAngle'] / Math['PI'];
            }, function (_0x216d6a) {
                this['_endAngle'] = _0x216d6a * Math['PI'] / 0xb4;
            }), _0x45908c['create'] = function (_0x47e42f, _0x4dc16e, _0x57b79f, _0x266b55, _0x2ae5c0, _0x4b2e88, _0x47406b, _0x4f52ab, _0x449741) {
                var _0x3f2137 = _0x2249dd['getItemByC' + 'lass']('DrawPieCmd', _0x45908c);
                return _0x3f2137['x'] = _0x47e42f, _0x3f2137['y'] = _0x4dc16e, _0x3f2137['radius'] = _0x57b79f, _0x3f2137['_startAngl' + 'e'] = _0x266b55, _0x3f2137['_endAngle'] = _0x2ae5c0, _0x3f2137['fillColor'] = _0x4b2e88, _0x3f2137['lineColor'] = _0x47406b, _0x3f2137['lineWidth'] = _0x4f52ab, _0x3f2137['vid'] = _0x449741, _0x3f2137;
            }, _0x45908c['ID'] = 'DrawPie', _0x45908c;
        }(), _0x513bc2 = (function () {
            function _0x2c94c2() {
            }
            return _0x4621f4(_0x2c94c2, 'laya.event' + 's.KeyLocat' + 'ion'), _0x2c94c2['STANDARD'] = 0x0, _0x2c94c2['LEFT'] = 0x1, _0x2c94c2['RIGHT'] = 0x2, _0x2c94c2['NUM_PAD'] = 0x3, _0x2c94c2;
        }(), function () {
            function _0x2ae291() {
                this['sign'] = null, this['maxCount'] = 0x3e8;
            }
            _0x4621f4(_0x2ae291, 'laya.utils' + '.PoolCache');
            var _0x56947a = _0x2ae291['prototype'];
            return _0x56947a['getCacheLi' + 'st'] = function () {
                return _0x2249dd['getPoolByS' + 'ign'](this['sign']);
            }, _0x56947a['tryDispose'] = function (_0x100f81) {
                var _0x446474;
                _0x446474 = _0x2249dd['getPoolByS' + 'ign'](this['sign']), _0x446474['length'] > this['maxCount'] && _0x446474['splice'](this['maxCount'], _0x446474['length'] - this['maxCount']);
            }, _0x2ae291['addPoolCac' + 'heManager'] = function (_0x578f5c, _0x513ab6) {
                void 0x0 === _0x513ab6 && (_0x513ab6 = 0x64);
                var _0x50cb4b;
                _0x50cb4b = new _0x2ae291(), _0x50cb4b['sign'] = _0x578f5c, _0x50cb4b['maxCount'] = _0x513ab6, _0x58cc6b['regCacheBy' + 'Function'](_0x3b78ce['bind'](_0x50cb4b['tryDispose'], _0x50cb4b), _0x3b78ce['bind'](_0x50cb4b['getCacheLi' + 'st'], _0x50cb4b));
            }, _0x2ae291;
        }(), function () {
            function _0x167569() {
            }
            _0x4621f4(_0x167569, 'laya.displ' + 'ay.cmd.Fil' + 'lWordsCmd');
            var _0x5335f3 = _0x167569['prototype'];
            return _0x5335f3['recover'] = function () {
                this['words'] = null, _0x2249dd['recover']('FillWordsC' + 'md', this);
            }, _0x5335f3['run'] = function (_0x149d10, _0x4e5e08, _0x275542) {
                _0x149d10['fillWords'](this['words'], this['x'] + _0x4e5e08, this['y'] + _0x275542, this['font'], this['color']);
            }, _0x71e09a(0x0, _0x5335f3, 'cmdID', function () {
                return 'FillWords';
            }), _0x167569['create'] = function (_0x454651, _0x5aca0f, _0x38a3d5, _0x34bf36, _0xbaf3e9) {
                var _0x38361b = _0x2249dd['getItemByC' + 'lass']('FillWordsC' + 'md', _0x167569);
                return _0x38361b['words'] = _0x454651, _0x38361b['x'] = _0x5aca0f, _0x38361b['y'] = _0x38a3d5, _0x38361b['font'] = _0x34bf36, _0x38361b['color'] = _0xbaf3e9, _0x38361b;
            }, _0x167569['ID'] = 'FillWords', _0x167569;
        }()), _0x36939f = function () {
            function _0x4f808a() {
            }
            _0x4621f4(_0x4f808a, 'laya.displ' + 'ay.cmd.Tra' + 'nsformCmd');
            var _0x561965 = _0x4f808a['prototype'];
            return _0x561965['recover'] = function () {
                this['matrix'] = null, _0x2249dd['recover']('TransformC' + 'md', this);
            }, _0x561965['run'] = function (_0x3a9c8e, _0x1e7ac0, _0xbc8e8d) {
                _0x3a9c8e['_transform'](this['matrix'], this['pivotX'] + _0x1e7ac0, this['pivotY'] + _0xbc8e8d);
            }, _0x71e09a(0x0, _0x561965, 'cmdID', function () {
                return 'Transform';
            }), _0x4f808a['create'] = function (_0x89c908, _0x82f58d, _0x520543) {
                var _0x3b7729 = _0x2249dd['getItemByC' + 'lass']('TransformC' + 'md', _0x4f808a);
                return _0x3b7729['matrix'] = _0x89c908, _0x3b7729['pivotX'] = _0x82f58d, _0x3b7729['pivotY'] = _0x520543, _0x3b7729;
            }, _0x4f808a['ID'] = 'Transform', _0x4f808a;
        }(), _0x450997 = function () {
            function _0xd4b18e() {
                this['_controlPo' + 'ints'] = [
                    new _0x251b03(),
                    new _0x251b03(),
                    new _0x251b03()
                ], this['_calFun'] = this['getPoint2'];
            }
            _0x4621f4(_0xd4b18e, 'laya.maths' + '.Bezier');
            var _0x2344c4 = _0xd4b18e['prototype'];
            return _0x2344c4['_switchPoi' + 'nt'] = function (_0x23966c, _0xc06f17) {
                var _0x1f436d = this['_controlPo' + 'ints']['shift']();
                _0x1f436d['setTo'](_0x23966c, _0xc06f17), this['_controlPo' + 'ints']['push'](_0x1f436d);
            }, _0x2344c4['getPoint2'] = function (_0x41df5d, _0x58589f) {
                var _0x4e9e23 = this['_controlPo' + 'ints'][0x0], _0x31fbad = this['_controlPo' + 'ints'][0x1], _0x50a6b8 = this['_controlPo' + 'ints'][0x2], _0x9b503f = Math['pow'](0x1 - _0x41df5d, 0x2) * _0x4e9e23['x'] + 0x2 * _0x41df5d * (0x1 - _0x41df5d) * _0x31fbad['x'] + Math['pow'](_0x41df5d, 0x2) * _0x50a6b8['x'], _0x4730a5 = Math['pow'](0x1 - _0x41df5d, 0x2) * _0x4e9e23['y'] + 0x2 * _0x41df5d * (0x1 - _0x41df5d) * _0x31fbad['y'] + Math['pow'](_0x41df5d, 0x2) * _0x50a6b8['y'];
                _0x58589f['push'](_0x9b503f, _0x4730a5);
            }, _0x2344c4['getPoint3'] = function (_0x136c27, _0x58e9c7) {
                var _0x439756 = this['_controlPo' + 'ints'][0x0], _0xaefde = this['_controlPo' + 'ints'][0x1], _0x139529 = this['_controlPo' + 'ints'][0x2], _0x5d7f08 = this['_controlPo' + 'ints'][0x3], _0x5eaef6 = Math['pow'](0x1 - _0x136c27, 0x3) * _0x439756['x'] + 0x3 * _0xaefde['x'] * _0x136c27 * (0x1 - _0x136c27) * (0x1 - _0x136c27) + 0x3 * _0x139529['x'] * _0x136c27 * _0x136c27 * (0x1 - _0x136c27) + _0x5d7f08['x'] * Math['pow'](_0x136c27, 0x3), _0x3f4aa6 = Math['pow'](0x1 - _0x136c27, 0x3) * _0x439756['y'] + 0x3 * _0xaefde['y'] * _0x136c27 * (0x1 - _0x136c27) * (0x1 - _0x136c27) + 0x3 * _0x139529['y'] * _0x136c27 * _0x136c27 * (0x1 - _0x136c27) + _0x5d7f08['y'] * Math['pow'](_0x136c27, 0x3);
                _0x58e9c7['push'](_0x5eaef6, _0x3f4aa6);
            }, _0x2344c4['insertPoin' + 'ts'] = function (_0x21176a, _0x308a2b) {
                var _0x3454a0 = NaN;
                _0x21176a = _0x21176a > 0x0 ? _0x21176a : 0x5;
                var _0x4110ba = NaN;
                for (_0x4110ba = 0x1 / _0x21176a, _0x3454a0 = 0x0; 0x1 >= _0x3454a0; _0x3454a0 += _0x4110ba)
                    this['_calFun'](_0x3454a0, _0x308a2b);
            }, _0x2344c4['getBezierP' + 'oints'] = function (_0x1a07a8, _0x4c75ed, _0x34d47c) {
                void 0x0 === _0x4c75ed && (_0x4c75ed = 0x5), void 0x0 === _0x34d47c && (_0x34d47c = 0x2);
                var _0x4b09f2 = 0x0, _0x258058 = 0x0;
                if (_0x258058 = _0x1a07a8['length'], 0x2 * (_0x34d47c + 0x1) > _0x258058)
                    return [];
                var _0x2dd6d7 = [];
                switch (_0x34d47c) {
                case 0x2:
                    this['_calFun'] = this['getPoint2'];
                    break;
                case 0x3:
                    this['_calFun'] = this['getPoint3'];
                    break;
                default:
                    return [];
                }
                for (; this['_controlPo' + 'ints']['length'] <= _0x34d47c;)
                    this['_controlPo' + 'ints']['push'](_0x251b03['create']());
                for (_0x4b09f2 = 0x0; 0x2 * _0x34d47c > _0x4b09f2; _0x4b09f2 += 0x2)
                    this['_switchPoi' + 'nt'](_0x1a07a8[_0x4b09f2], _0x1a07a8[_0x4b09f2 + 0x1]);
                for (_0x4b09f2 = 0x2 * _0x34d47c; _0x258058 > _0x4b09f2; _0x4b09f2 += 0x2)
                    this['_switchPoi' + 'nt'](_0x1a07a8[_0x4b09f2], _0x1a07a8[_0x4b09f2 + 0x1]), _0x4b09f2 / 0x2 % _0x34d47c == 0x0 && this['insertPoin' + 'ts'](_0x4c75ed, _0x2dd6d7);
                return _0x2dd6d7;
            }, _0x5043ef(_0xd4b18e, [
                'I',
                function () {
                    return this['I'] = new _0xd4b18e();
                }
            ]), _0xd4b18e;
        }(), _0x1804aa = function () {
            function _0x584f97(_0x4a91e8, _0x50210d, _0x4f32a2, _0x3ae270) {
                this['id'] = 0x0, this['name'] = null, this['color'] = 0x0, this['scale'] = 0x1, this['datapos'] = 0x0, this['datas'] = new Array(_0x4bdd6d['DATANUM']), this['id'] = _0x4a91e8, this['color'] = _0x50210d, this['name'] = _0x4f32a2, this['scale'] = _0x3ae270;
            }
            _0x4621f4(_0x584f97, 'laya.utils' + '.PerfData');
            var _0x13a889 = _0x584f97['prototype'];
            return _0x13a889['addData'] = function (_0x4dd45a) {
                this['datas'][this['datapos']] = _0x4dd45a, this['datapos']++, this['datapos'] %= _0x4bdd6d['DATANUM'];
            }, _0x584f97;
        }(), _0x36e3c7 = function () {
            function _0x3da1ae() {
                this['_id'] = _0x3b78ce['getGID'](), this['_resetComp']();
            }
            _0x4621f4(_0x3da1ae, 'laya.compo' + 'nents.Comp' + 'onent');
            var _0x12fdd3 = _0x3da1ae['prototype'];
            return _0x34a895['imps'](_0x12fdd3, {
                'laya.resource.ISingletonElement': !0x0,
                'laya.resource.IDestroy': !0x0
            }), _0x12fdd3['_isScript'] = function () {
                return !0x1;
            }, _0x12fdd3['_resetComp'] = function () {
                this['_indexInLi' + 'st'] = -0x1, this['_enabled'] = !0x0, this['_awaked'] = !0x1, this['owner'] = null;
            }, _0x12fdd3['_getIndexI' + 'nList'] = function () {
                return this['_indexInLi' + 'st'];
            }, _0x12fdd3['_setIndexI' + 'nList'] = function (_0x851619) {
                this['_indexInLi' + 'st'] = _0x851619;
            }, _0x12fdd3['_onAdded'] = function () {
            }, _0x12fdd3['_onAwake'] = function () {
            }, _0x12fdd3['_onEnable'] = function () {
            }, _0x12fdd3['_onDisable'] = function () {
            }, _0x12fdd3['_onEnableI' + 'nScene'] = function () {
            }, _0x12fdd3['_onDisable' + 'InScene'] = function () {
            }, _0x12fdd3['_onDestroy'] = function () {
            }, _0x12fdd3['onReset'] = function () {
            }, _0x12fdd3['_parse'] = function (_0x250c25) {
            }, _0x12fdd3['_cloneTo'] = function (_0x470309) {
            }, _0x12fdd3['_setActive'] = function (_0x2a1106) {
                _0x2a1106 ? (this['_awaked'] || (this['_awaked'] = !0x0, this['_onAwake']()), this['_enabled'] && this['_onEnable']()) : this['_enabled'] && this['_onDisable']();
            }, _0x12fdd3['_setActive' + 'InScene'] = function (_0x335c64) {
                _0x335c64 ? this['_onEnableI' + 'nScene']() : this['_onDisable' + 'InScene']();
            }, _0x12fdd3['destroy'] = function () {
                this['owner'] && this['owner']['_destroyCo' + 'mponent'](this);
            }, _0x12fdd3['_destroy'] = function () {
                this['owner']['activeInHi' + 'erarchy'] && this['_enabled'] && (this['_setActive'](!0x1), this['_isScript']() && this['onDisable']()), this['owner']['_scene'] && this['_setActive' + 'InScene'](!0x1), this['_onDestroy'](), this['_destroyed'] = !0x0, this['onReset'] !== laya['components']['Component']['prototype']['onReset'] ? (this['onReset'](), this['_resetComp'](), _0x2249dd['recoverByC' + 'lass'](this)) : this['_resetComp']();
            }, _0x71e09a(0x0, _0x12fdd3, 'id', function () {
                return this['_id'];
            }), _0x71e09a(0x0, _0x12fdd3, 'enabled', function () {
                return this['_enabled'];
            }, function (_0x55b692) {
                this['_enabled'] = _0x55b692, this['owner'] && (_0x55b692 ? this['owner']['activeInHi' + 'erarchy'] && this['_onEnable']() : this['owner']['activeInHi' + 'erarchy'] && this['_onDisable']());
            }), _0x71e09a(0x0, _0x12fdd3, 'isSingleto' + 'n', function () {
                return !0x0;
            }), _0x71e09a(0x0, _0x12fdd3, 'destroyed', function () {
                return this['_destroyed'];
            }), _0x3da1ae;
        }(), _0x5cbd9c = function () {
            function _0x391ff7() {
                this['_hit'] = null, this['_unHit'] = null;
            }
            _0x4621f4(_0x391ff7, 'laya.utils' + '.HitArea');
            var _0x6cd4c4 = _0x391ff7['prototype'];
            return _0x6cd4c4['contains'] = function (_0x1a1a93, _0x1ca235) {
                return _0x391ff7['_isHitGrap' + 'hic'](_0x1a1a93, _0x1ca235, this['hit']) ? !_0x391ff7['_isHitGrap' + 'hic'](_0x1a1a93, _0x1ca235, this['unHit']) : !0x1;
            }, _0x71e09a(0x0, _0x6cd4c4, 'hit', function () {
                return this['_hit'] || (this['_hit'] = new _0x42326c()), this['_hit'];
            }, function (_0x405175) {
                this['_hit'] = _0x405175;
            }), _0x71e09a(0x0, _0x6cd4c4, 'unHit', function () {
                return this['_unHit'] || (this['_unHit'] = new _0x42326c()), this['_unHit'];
            }, function (_0x5bd481) {
                this['_unHit'] = _0x5bd481;
            }), _0x391ff7['_isHitGrap' + 'hic'] = function (_0x10f82b, _0x4cf3a8, _0x13c4b9) {
                if (!_0x13c4b9)
                    return !0x1;
                var _0x502b89 = _0x13c4b9['cmds'];
                if (!_0x502b89 && _0x13c4b9['_one'] && (_0x502b89 = _0x391ff7['_cmds'], _0x502b89['length'] = 0x1, _0x502b89[0x0] = _0x13c4b9['_one']), !_0x502b89)
                    return !0x1;
                var _0x2f1a84 = 0x0, _0x283751 = 0x0;
                _0x283751 = _0x502b89['length'];
                var _0x2f1d58;
                for (_0x2f1a84 = 0x0; _0x283751 > _0x2f1a84; _0x2f1a84++)
                    if (_0x2f1d58 = _0x502b89[_0x2f1a84]) {
                        switch (_0x2f1d58['cmdID']) {
                        case 'Translate':
                            _0x10f82b -= _0x2f1d58['tx'], _0x4cf3a8 -= _0x2f1d58['ty'];
                        }
                        if (_0x391ff7['_isHitCmd'](_0x10f82b, _0x4cf3a8, _0x2f1d58))
                            return !0x0;
                    }
                return !0x1;
            }, _0x391ff7['_isHitCmd'] = function (_0x19a051, _0x5417fa, _0xafb7c7) {
                if (!_0xafb7c7)
                    return !0x1;
                var _0x3cb9e6 = !0x1;
                switch (_0xafb7c7['cmdID']) {
                case 'DrawRect':
                    _0x391ff7['_rect']['setTo'](_0xafb7c7['x'], _0xafb7c7['y'], _0xafb7c7['width'], _0xafb7c7['height']), _0x3cb9e6 = _0x391ff7['_rect']['contains'](_0x19a051, _0x5417fa);
                    break;
                case 'DrawCircle':
                    var _0x4f594e = NaN;
                    _0x19a051 -= _0xafb7c7['x'], _0x5417fa -= _0xafb7c7['y'], _0x4f594e = _0x19a051 * _0x19a051 + _0x5417fa * _0x5417fa, _0x3cb9e6 = _0x4f594e < _0xafb7c7['radius'] * _0xafb7c7['radius'];
                    break;
                case 'DrawPoly':
                    _0x19a051 -= _0xafb7c7['x'], _0x5417fa -= _0xafb7c7['y'], _0x3cb9e6 = _0x391ff7['_ptInPolyg' + 'on'](_0x19a051, _0x5417fa, _0xafb7c7['points']);
                }
                return _0x3cb9e6;
            }, _0x391ff7['_ptInPolyg' + 'on'] = function (_0x2c382d, _0x4e44c8, _0x5332fb) {
                var _0x18f24e = _0x391ff7['_ptPoint'];
                _0x18f24e['setTo'](_0x2c382d, _0x4e44c8);
                var _0x3f169f = 0x0, _0x45ee01 = NaN, _0x1aac2d = NaN, _0x4052e6 = NaN, _0x4f959e = NaN, _0x44c791 = 0x0;
                _0x44c791 = _0x5332fb['length'];
                for (var _0x880f06 = 0x0; _0x44c791 > _0x880f06; _0x880f06 += 0x2)
                    if (_0x45ee01 = _0x5332fb[_0x880f06], _0x1aac2d = _0x5332fb[_0x880f06 + 0x1], _0x4052e6 = _0x5332fb[(_0x880f06 + 0x2) % _0x44c791], _0x4f959e = _0x5332fb[(_0x880f06 + 0x3) % _0x44c791], _0x1aac2d != _0x4f959e && !(_0x18f24e['y'] < Math['min'](_0x1aac2d, _0x4f959e) || _0x18f24e['y'] >= Math['max'](_0x1aac2d, _0x4f959e))) {
                        var _0x180a12 = (_0x18f24e['y'] - _0x1aac2d) * (_0x4052e6 - _0x45ee01) / (_0x4f959e - _0x1aac2d) + _0x45ee01;
                        _0x180a12 > _0x18f24e['x'] && _0x3f169f++;
                    }
                return _0x3f169f % 0x2 == 0x1;
            }, _0x391ff7['_cmds'] = [], _0x5043ef(_0x391ff7, [
                '_rect',
                function () {
                    return this['_rect'] = new _0x22858b();
                },
                '_ptPoint',
                function () {
                    return this['_ptPoint'] = new _0x251b03();
                }
            ]), _0x391ff7;
        }(), _0x238506 = function () {
            function _0x4fa1a4() {
            }
            return _0x4621f4(_0x4fa1a4, 'Config'), _0x4fa1a4['animationI' + 'nterval'] = 0x32, _0x4fa1a4['isAntialia' + 's'] = !0x1, _0x4fa1a4['isAlpha'] = !0x1, _0x4fa1a4['premultipl' + 'iedAlpha'] = !0x0, _0x4fa1a4['isStencil'] = !0x0, _0x4fa1a4['preserveDr' + 'awingBuffe' + 'r'] = !0x1, _0x4fa1a4['webGL2D_Me' + 'shAllocMax' + 'Mem'] = !0x0, _0x4fa1a4['is2DPixelA' + 'rtGame'] = !0x1, _0x4fa1a4['useWebGL2'] = !0x1, _0x4fa1a4;
        }(), _0x2b28ee = function () {
            function _0x4b3e93() {
            }
            _0x4621f4(_0x4b3e93, 'laya.displ' + 'ay.cmd.Res' + 'toreCmd');
            var _0x4b36ee = _0x4b3e93['prototype'];
            return _0x4b36ee['recover'] = function () {
                _0x2249dd['recover']('RestoreCmd', this);
            }, _0x4b36ee['run'] = function (_0x569760, _0x4683bd, _0x39bb6b) {
                _0x569760['restore']();
            }, _0x71e09a(0x0, _0x4b36ee, 'cmdID', function () {
                return 'Restore';
            }), _0x4b3e93['create'] = function () {
                var _0x125e9f = _0x2249dd['getItemByC' + 'lass']('RestoreCmd', _0x4b3e93);
                return _0x125e9f;
            }, _0x4b3e93['ID'] = 'Restore', _0x4b3e93;
        }(), _0x496684 = function () {
            function _0x37ca6c() {
            }
            return _0x4621f4(_0x37ca6c, 'laya.maths' + '.GrahamSca' + 'n'), _0x37ca6c['multiply'] = function (_0x51b917, _0x4d1373, _0x57b55a) {
                return (_0x51b917['x'] - _0x57b55a['x']) * (_0x4d1373['y'] - _0x57b55a['y']) - (_0x4d1373['x'] - _0x57b55a['x']) * (_0x51b917['y'] - _0x57b55a['y']);
            }, _0x37ca6c['dis'] = function (_0x434b1b, _0x1fa5de) {
                return (_0x434b1b['x'] - _0x1fa5de['x']) * (_0x434b1b['x'] - _0x1fa5de['x']) + (_0x434b1b['y'] - _0x1fa5de['y']) * (_0x434b1b['y'] - _0x1fa5de['y']);
            }, _0x37ca6c['_getPoints'] = function (_0x121ac6, _0x4bf6fc, _0x274156) {
                for (void 0x0 === _0x4bf6fc && (_0x4bf6fc = !0x1), _0x37ca6c['_mPointLis' + 't'] || (_0x37ca6c['_mPointLis' + 't'] = []); _0x37ca6c['_mPointLis' + 't']['length'] < _0x121ac6;)
                    _0x37ca6c['_mPointLis' + 't']['push'](new _0x251b03());
                return _0x274156 || (_0x274156 = []), _0x274156['length'] = 0x0, _0x4bf6fc ? _0x37ca6c['getFrom'](_0x274156, _0x37ca6c['_mPointLis' + 't'], _0x121ac6) : _0x37ca6c['getFromR'](_0x274156, _0x37ca6c['_mPointLis' + 't'], _0x121ac6), _0x274156;
            }, _0x37ca6c['getFrom'] = function (_0x18d521, _0x1c11a8, _0x118db5) {
                var _0x3ef9d8 = 0x0;
                for (_0x3ef9d8 = 0x0; _0x118db5 > _0x3ef9d8; _0x3ef9d8++)
                    _0x18d521['push'](_0x1c11a8[_0x3ef9d8]);
                return _0x18d521;
            }, _0x37ca6c['getFromR'] = function (_0x3887ea, _0x4d4cbc, _0x2548da) {
                var _0xee40d2 = 0x0;
                for (_0xee40d2 = 0x0; _0x2548da > _0xee40d2; _0xee40d2++)
                    _0x3887ea['push'](_0x4d4cbc['pop']());
                return _0x3887ea;
            }, _0x37ca6c['pListToPoi' + 'ntList'] = function (_0x45882c, _0xf376aa) {
                void 0x0 === _0xf376aa && (_0xf376aa = !0x1);
                var _0x322a71 = 0x0, _0x51d54a = _0x45882c['length'] / 0x2, _0x251746 = _0x37ca6c['_getPoints'](_0x51d54a, _0xf376aa, _0x37ca6c['_tempPoint' + 'List']);
                for (_0x322a71 = 0x0; _0x51d54a > _0x322a71; _0x322a71++)
                    _0x251746[_0x322a71]['setTo'](_0x45882c[_0x322a71 + _0x322a71], _0x45882c[_0x322a71 + _0x322a71 + 0x1]);
                return _0x251746;
            }, _0x37ca6c['pointListT' + 'oPlist'] = function (_0x1987b2) {
                var _0x564a29, _0x5c7f2b = 0x0, _0x48efd2 = _0x1987b2['length'], _0x4009eb = _0x37ca6c['_temPList'];
                for (_0x4009eb['length'] = 0x0, _0x5c7f2b = 0x0; _0x48efd2 > _0x5c7f2b; _0x5c7f2b++)
                    _0x564a29 = _0x1987b2[_0x5c7f2b], _0x4009eb['push'](_0x564a29['x'], _0x564a29['y']);
                return _0x4009eb;
            }, _0x37ca6c['scanPList'] = function (_0x172a04) {
                return _0x3b78ce['copyArray'](_0x172a04, _0x37ca6c['pointListT' + 'oPlist'](_0x37ca6c['scan'](_0x37ca6c['pListToPoi' + 'ntList'](_0x172a04, !0x0))));
            }, _0x37ca6c['scan'] = function (_0x12027f) {
                var _0x30d329, _0x118b22, _0x2ed305, _0x7a9c7 = 0x0, _0x2f8edd = 0x0, _0x54b7b2 = 0x0, _0x323c35 = _0x12027f['length'], _0x468088 = {};
                for (_0x118b22 = _0x37ca6c['_temArr'], _0x118b22['length'] = 0x0, _0x323c35 = _0x12027f['length'], _0x7a9c7 = _0x323c35 - 0x1; _0x7a9c7 >= 0x0; _0x7a9c7--)
                    _0x30d329 = _0x12027f[_0x7a9c7], _0x2ed305 = _0x30d329['x'] + '_' + _0x30d329['y'], _0x468088['hasOwnProp' + 'erty'](_0x2ed305) || (_0x468088[_0x2ed305] = !0x0, _0x118b22['push'](_0x30d329));
                for (_0x323c35 = _0x118b22['length'], _0x3b78ce['copyArray'](_0x12027f, _0x118b22), _0x7a9c7 = 0x1; _0x323c35 > _0x7a9c7; _0x7a9c7++)
                    (_0x12027f[_0x7a9c7]['y'] < _0x12027f[_0x54b7b2]['y'] || _0x12027f[_0x7a9c7]['y'] == _0x12027f[_0x54b7b2]['y'] && _0x12027f[_0x7a9c7]['x'] < _0x12027f[_0x54b7b2]['x']) && (_0x54b7b2 = _0x7a9c7);
                for (_0x30d329 = _0x12027f[0x0], _0x12027f[0x0] = _0x12027f[_0x54b7b2], _0x12027f[_0x54b7b2] = _0x30d329, _0x7a9c7 = 0x1; _0x323c35 - 0x1 > _0x7a9c7; _0x7a9c7++) {
                    for (_0x54b7b2 = _0x7a9c7, _0x2f8edd = _0x7a9c7 + 0x1; _0x323c35 > _0x2f8edd; _0x2f8edd++)
                        (_0x37ca6c['multiply'](_0x12027f[_0x2f8edd], _0x12027f[_0x54b7b2], _0x12027f[0x0]) > 0x0 || 0x0 == _0x37ca6c['multiply'](_0x12027f[_0x2f8edd], _0x12027f[_0x54b7b2], _0x12027f[0x0]) && _0x37ca6c['dis'](_0x12027f[0x0], _0x12027f[_0x2f8edd]) < _0x37ca6c['dis'](_0x12027f[0x0], _0x12027f[_0x54b7b2])) && (_0x54b7b2 = _0x2f8edd);
                    _0x30d329 = _0x12027f[_0x7a9c7], _0x12027f[_0x7a9c7] = _0x12027f[_0x54b7b2], _0x12027f[_0x54b7b2] = _0x30d329;
                }
                if (_0x118b22 = _0x37ca6c['_temArr'], _0x118b22['length'] = 0x0, _0x12027f['length'] < 0x3)
                    return _0x3b78ce['copyArray'](_0x118b22, _0x12027f);
                for (_0x118b22['push'](_0x12027f[0x0], _0x12027f[0x1], _0x12027f[0x2]), _0x7a9c7 = 0x3; _0x323c35 > _0x7a9c7; _0x7a9c7++) {
                    for (; _0x118b22['length'] >= 0x2 && _0x37ca6c['multiply'](_0x12027f[_0x7a9c7], _0x118b22[_0x118b22['length'] - 0x1], _0x118b22[_0x118b22['length'] - 0x2]) >= 0x0;)
                        _0x118b22['pop']();
                    _0x12027f[_0x7a9c7] && _0x118b22['push'](_0x12027f[_0x7a9c7]);
                }
                return _0x118b22;
            }, _0x37ca6c['_mPointLis' + 't'] = null, _0x37ca6c['_tempPoint' + 'List'] = [], _0x37ca6c['_temPList'] = [], _0x37ca6c['_temArr'] = [], _0x37ca6c;
        }(), _0x4bf8e9 = function () {
            function _0x2d52bc(_0x21ceb9) {
                this['_url'] = null, this['_path'] = null, this['_url'] = _0x2d52bc['formatURL'](_0x21ceb9), this['_path'] = _0x2d52bc['getPath'](_0x21ceb9);
            }
            _0x4621f4(_0x2d52bc, 'laya.net.U' + 'RL');
            var _0x1160a5 = _0x2d52bc['prototype'];
            return _0x71e09a(0x0, _0x1160a5, 'path', function () {
                return this['_path'];
            }), _0x71e09a(0x0, _0x1160a5, 'url', function () {
                return this['_url'];
            }), _0x2d52bc['formatURL'] = function (_0x566b76) {
                if (!_0x566b76)
                    return 'null\x20path';
                if (_0x566b76['indexOf'](':') > 0x0)
                    return _0x566b76;
                if (null != _0x2d52bc['customForm' + 'at'] && (_0x566b76 = _0x2d52bc['customForm' + 'at'](_0x566b76)), _0x566b76['indexOf'](':') > 0x0)
                    return _0x566b76;
                var _0x564ac1 = _0x566b76['charAt'](0x0);
                if ('.' === _0x564ac1)
                    return _0x2d52bc['_formatRel' + 'ativePath'](_0x2d52bc['basePath'] + _0x566b76);
                if ('~' === _0x564ac1)
                    return _0x2d52bc['rootPath'] + _0x566b76['substring'](0x1);
                if ('d' === _0x564ac1) {
                    if (0x0 === _0x566b76['indexOf']('data:image'))
                        return _0x566b76;
                } else {
                    if ('/' === _0x564ac1)
                        return _0x566b76;
                }
                return _0x2d52bc['basePath'] + _0x566b76;
            }, _0x2d52bc['_formatRel' + 'ativePath'] = function (_0x255910) {
                for (var _0x49053b = _0x255910['split']('/'), _0x1ed84d = 0x0, _0x443c3e = _0x49053b['length']; _0x443c3e > _0x1ed84d; _0x1ed84d++)
                    '..' == _0x49053b[_0x1ed84d] && (_0x49053b['splice'](_0x1ed84d - 0x1, 0x2), _0x1ed84d -= 0x2);
                return _0x49053b['join']('/');
            }, _0x2d52bc['getPath'] = function (_0x32da98) {
                var _0x4fe278 = _0x32da98['lastIndexO' + 'f']('/');
                return _0x4fe278 > 0x0 ? _0x32da98['substr'](0x0, _0x4fe278 + 0x1) : '';
            }, _0x2d52bc['getFileNam' + 'e'] = function (_0x121636) {
                var _0x5d48b7 = _0x121636['lastIndexO' + 'f']('/');
                return _0x5d48b7 > 0x0 ? _0x121636['substr'](_0x5d48b7 + 0x1) : _0x121636;
            }, _0x2d52bc['getAdptedF' + 'ilePath'] = function (_0x5c666e) {
                if (!_0x2d52bc['exportScen' + 'eToJson'] || !_0x5c666e)
                    return _0x5c666e;
                var _0xc96c14 = 0x0, _0x609f02 = 0x0;
                _0x609f02 = _0x2d52bc['_adpteType' + 'List']['length'];
                var _0x1da184;
                for (_0xc96c14 = 0x0; _0x609f02 > _0xc96c14; _0xc96c14++)
                    _0x1da184 = _0x2d52bc['_adpteType' + 'List'][_0xc96c14], _0x5c666e = _0x5c666e['replace'](_0x1da184[0x0], _0x1da184[0x1]);
                return _0x5c666e;
            }, _0x2d52bc['version'] = {}, _0x2d52bc['exportScen' + 'eToJson'] = !0x1, _0x2d52bc['basePath'] = '', _0x2d52bc['rootPath'] = '', _0x2d52bc['customForm' + 'at'] = function (_0x3aab47) {
                var _0x2f2869 = _0x2d52bc['version'][_0x3aab47];
                return !_0x4fec79['isConchApp'] && _0x2f2869 && (_0x3aab47 += '?v=' + _0x2f2869), _0x3aab47;
            }, _0x5043ef(_0x2d52bc, [
                '_adpteType' + 'List',
                function () {
                    return this['_adpteType' + 'List'] = [
                        [
                            '.scene3d',
                            '.json'
                        ],
                        [
                            '.scene',
                            '.json'
                        ],
                        [
                            '.taa',
                            '.json'
                        ],
                        [
                            '.prefab',
                            '.json'
                        ]
                    ];
                }
            ]), _0x2d52bc;
        }(), _0x2e64ca = function () {
            function _0x434c51() {
                this['gid'] = 0x0, this['repeat'] = 0x1, this['_count'] = 0x0;
            }
            _0x4621f4(_0x434c51, 'laya.utils' + '.Tween');
            var _0x2df022 = _0x434c51['prototype'];
            return _0x2df022['to'] = function (_0x21ad17, _0x5deee3, _0x3dc036, _0x3cfe33, _0x2a276b, _0x1abd02, _0x499c8e) {
                return void 0x0 === _0x1abd02 && (_0x1abd02 = 0x0), void 0x0 === _0x499c8e && (_0x499c8e = !0x1), this['_create'](_0x21ad17, _0x5deee3, _0x3dc036, _0x3cfe33, _0x2a276b, _0x1abd02, _0x499c8e, !0x0, !0x1, !0x0);
            }, _0x2df022['from'] = function (_0x1b2655, _0x559d7d, _0x539278, _0x4aa6a1, _0x849f9, _0x590838, _0x24bad9) {
                return void 0x0 === _0x590838 && (_0x590838 = 0x0), void 0x0 === _0x24bad9 && (_0x24bad9 = !0x1), this['_create'](_0x1b2655, _0x559d7d, _0x539278, _0x4aa6a1, _0x849f9, _0x590838, _0x24bad9, !0x1, !0x1, !0x0);
            }, _0x2df022['_create'] = function (_0x54ca4d, _0x343305, _0xe2088b, _0x55341b, _0x5f4466, _0x365463, _0x150331, _0x19fce0, _0x324981, _0x17aae9) {
                if (!_0x54ca4d)
                    throw new Error('Tween:targ' + 'et\x20is\x20null');
                this['_target'] = _0x54ca4d, this['_duration'] = _0xe2088b, this['_ease'] = _0x55341b || _0x343305['ease'] || _0x434c51['easeNone'], this['_complete'] = _0x5f4466 || _0x343305['complete'], this['_delay'] = _0x365463, this['_props'] = [], this['_usedTimer'] = 0x0, this['_startTime' + 'r'] = _0x2ad6c5['now'](), this['_usedPool'] = _0x324981, this['_delayPara' + 'm'] = null, this['update'] = _0x343305['update'];
                var _0x44ef16 = _0x54ca4d['$_GID'] || (_0x54ca4d['$_GID'] = _0x3b78ce['getGID']());
                return _0x434c51['tweenMap'][_0x44ef16] ? (_0x150331 && _0x434c51['clearTween'](_0x54ca4d), _0x434c51['tweenMap'][_0x44ef16]['push'](this)) : _0x434c51['tweenMap'][_0x44ef16] = [this], _0x17aae9 ? 0x0 >= _0x365463 ? this['firstStart'](_0x54ca4d, _0x343305, _0x19fce0) : (this['_delayPara' + 'm'] = [
                    _0x54ca4d,
                    _0x343305,
                    _0x19fce0
                ], _0x34a895['timer']['once'](_0x365463, this, this['firstStart'], this['_delayPara' + 'm'])) : this['_initProps'](_0x54ca4d, _0x343305, _0x19fce0), this;
            }, _0x2df022['firstStart'] = function (_0x202f8c, _0x10e1e2, _0x103738) {
                return this['_delayPara' + 'm'] = null, _0x202f8c['destroyed'] ? void this['clear']() : (this['_initProps'](_0x202f8c, _0x10e1e2, _0x103738), void this['_beginLoop']());
            }, _0x2df022['_initProps'] = function (_0x1abb10, _0x49d9cc, _0xc40e49) {
                for (var _0x5dd791 in _0x49d9cc)
                    if ('number' == typeof _0x1abb10[_0x5dd791]) {
                        var _0x5d33f2 = _0xc40e49 ? _0x1abb10[_0x5dd791] : _0x49d9cc[_0x5dd791], _0x16c844 = _0xc40e49 ? _0x49d9cc[_0x5dd791] : _0x1abb10[_0x5dd791];
                        this['_props']['push']([
                            _0x5dd791,
                            _0x5d33f2,
                            _0x16c844 - _0x5d33f2
                        ]), _0xc40e49 || (_0x1abb10[_0x5dd791] = _0x5d33f2);
                    }
            }, _0x2df022['_beginLoop'] = function () {
                _0x34a895['timer']['frameLoop'](0x1, this, this['_doEase']);
            }, _0x2df022['_doEase'] = function () {
                this['_updateEas' + 'e'](_0x2ad6c5['now']());
            }, _0x2df022['_updateEas' + 'e'] = function (_0xa3ca19) {
                var _0x1479d4 = this['_target'];
                if (_0x1479d4) {
                    if (_0x1479d4['destroyed'])
                        return _0x434c51['clearTween'](_0x1479d4);
                    var _0x127e5d = this['_usedTimer'] = _0xa3ca19 - this['_startTime' + 'r'] - this['_delay'];
                    if (!(0x0 > _0x127e5d)) {
                        if (_0x127e5d >= this['_duration'])
                            return this['complete']();
                        for (var _0x2f3a0e = _0x127e5d > 0x0 ? this['_ease'](_0x127e5d, 0x0, 0x1, this['_duration']) : 0x0, _0x28a9d8 = this['_props'], _0xd8e467 = 0x0, _0x88c02d = _0x28a9d8['length']; _0x88c02d > _0xd8e467; _0xd8e467++) {
                            var _0x3a1f34 = _0x28a9d8[_0xd8e467];
                            _0x1479d4[_0x3a1f34[0x0]] = _0x3a1f34[0x1] + _0x2f3a0e * _0x3a1f34[0x2];
                        }
                        this['update'] && this['update']['run']();
                    }
                }
            }, _0x2df022['complete'] = function () {
                if (this['_target']) {
                    _0x34a895['timer']['runTimer'](this, this['firstStart']);
                    for (var _0x16e9dd = this['_target'], _0x2b71c0 = this['_props'], _0x4462d9 = this['_complete'], _0x1cb8e7 = 0x0, _0x489071 = _0x2b71c0['length']; _0x489071 > _0x1cb8e7; _0x1cb8e7++) {
                        var _0x264125 = _0x2b71c0[_0x1cb8e7];
                        _0x16e9dd[_0x264125[0x0]] = _0x264125[0x1] + _0x264125[0x2];
                    }
                    this['update'] && this['update']['run'](), this['_count']++, 0x0 != this['repeat'] && this['_count'] >= this['repeat'] ? (this['clear'](), _0x4462d9 && _0x4462d9['run']()) : this['restart']();
                }
            }, _0x2df022['pause'] = function () {
                _0x34a895['timer']['clear'](this, this['_beginLoop']), _0x34a895['timer']['clear'](this, this['_doEase']), _0x34a895['timer']['clear'](this, this['firstStart']);
                var _0x2a0440 = _0x2ad6c5['now'](), _0x54b3d5 = NaN;
                _0x54b3d5 = _0x2a0440 - this['_startTime' + 'r'] - this['_delay'], 0x0 > _0x54b3d5 && (this['_usedTimer'] = _0x54b3d5);
            }, _0x2df022['setStartTi' + 'me'] = function (_0x3a6aea) {
                this['_startTime' + 'r'] = _0x3a6aea;
            }, _0x2df022['clear'] = function () {
                this['_target'] && (this['_remove'](), this['_clear']());
            }, _0x2df022['_clear'] = function () {
                this['pause'](), _0x34a895['timer']['clear'](this, this['firstStart']), this['_complete'] = null, this['_target'] = null, this['_ease'] = null, this['_props'] = null, this['_delayPara' + 'm'] = null, this['_usedPool'] && (this['update'] = null, _0x2249dd['recover']('tween', this));
            }, _0x2df022['recover'] = function () {
                this['_usedPool'] = !0x0, this['_clear']();
            }, _0x2df022['_remove'] = function () {
                var _0x3312fc = _0x434c51['tweenMap'][this['_target']['$_GID']];
                if (_0x3312fc) {
                    for (var _0x35fdc6 = 0x0, _0x2d6b88 = _0x3312fc['length']; _0x2d6b88 > _0x35fdc6; _0x35fdc6++)
                        if (_0x3312fc[_0x35fdc6] === this) {
                            _0x3312fc['splice'](_0x35fdc6, 0x1);
                            break;
                        }
                }
            }, _0x2df022['restart'] = function () {
                if (this['pause'](), this['_usedTimer'] = 0x0, this['_startTime' + 'r'] = _0x2ad6c5['now'](), this['_delayPara' + 'm'])
                    return void _0x34a895['timer']['once'](this['_delay'], this, this['firstStart'], this['_delayPara' + 'm']);
                for (var _0x1cd0d9 = this['_props'], _0x5c8c31 = 0x0, _0x5b0e49 = _0x1cd0d9['length']; _0x5b0e49 > _0x5c8c31; _0x5c8c31++) {
                    var _0x5983dd = _0x1cd0d9[_0x5c8c31];
                    this['_target'][_0x5983dd[0x0]] = _0x5983dd[0x1];
                }
                _0x34a895['timer']['once'](this['_delay'], this, this['_beginLoop']);
            }, _0x2df022['resume'] = function () {
                this['_usedTimer'] >= this['_duration'] || (this['_startTime' + 'r'] = _0x2ad6c5['now']() - this['_usedTimer'] - this['_delay'], this['_delayPara' + 'm'] ? this['_usedTimer'] < 0x0 ? _0x34a895['timer']['once'](-this['_usedTimer'], this, this['firstStart'], this['_delayPara' + 'm']) : this['firstStart']['apply'](this, this['_delayPara' + 'm']) : this['_beginLoop']());
            }, _0x71e09a(0x0, _0x2df022, 'progress', null, function (_0x5002aa) {
                var _0x54235d = _0x5002aa * this['_duration'];
                this['_startTime' + 'r'] = _0x2ad6c5['now']() - this['_delay'] - _0x54235d;
            }), _0x434c51['to'] = function (_0x5518b4, _0x1c5ce6, _0x5a6062, _0x3c83f9, _0x48d6da, _0x3e2eea, _0xb274a3, _0x10bdc5) {
                return void 0x0 === _0x3e2eea && (_0x3e2eea = 0x0), void 0x0 === _0xb274a3 && (_0xb274a3 = !0x1), void 0x0 === _0x10bdc5 && (_0x10bdc5 = !0x0), _0x2249dd['getItemByC' + 'lass']('tween', _0x434c51)['_create'](_0x5518b4, _0x1c5ce6, _0x5a6062, _0x3c83f9, _0x48d6da, _0x3e2eea, _0xb274a3, !0x0, _0x10bdc5, !0x0);
            }, _0x434c51['from'] = function (_0x59d02a, _0x4a6fc1, _0x530aff, _0x3cd75a, _0x10bafe, _0x5b7e72, _0x2e99cc, _0x3bf1bc) {
                return void 0x0 === _0x5b7e72 && (_0x5b7e72 = 0x0), void 0x0 === _0x2e99cc && (_0x2e99cc = !0x1), void 0x0 === _0x3bf1bc && (_0x3bf1bc = !0x0), _0x2249dd['getItemByC' + 'lass']('tween', _0x434c51)['_create'](_0x59d02a, _0x4a6fc1, _0x530aff, _0x3cd75a, _0x10bafe, _0x5b7e72, _0x2e99cc, !0x1, _0x3bf1bc, !0x0);
            }, _0x434c51['clearAll'] = function (_0x2f4f5b) {
                if (_0x2f4f5b && _0x2f4f5b['$_GID']) {
                    var _0x1cdb7b = _0x434c51['tweenMap'][_0x2f4f5b['$_GID']];
                    if (_0x1cdb7b) {
                        for (var _0x255c40 = 0x0, _0xa7316b = _0x1cdb7b['length']; _0xa7316b > _0x255c40; _0x255c40++)
                            _0x1cdb7b[_0x255c40]['_clear']();
                        _0x1cdb7b['length'] = 0x0;
                    }
                }
            }, _0x434c51['clear'] = function (_0x474c58) {
                _0x474c58['clear']();
            }, _0x434c51['clearTween'] = function (_0x44b141) {
                _0x434c51['clearAll'](_0x44b141);
            }, _0x434c51['easeNone'] = function (_0x3ec746, _0x4190d1, _0x2ed7ad, _0x5442c0) {
                return _0x2ed7ad * _0x3ec746 / _0x5442c0 + _0x4190d1;
            }, _0x434c51['tweenMap'] = [], _0x434c51;
        }(), _0x552e50 = function () {
            function _0x6271f6() {
            }
            return _0x4621f4(_0x6271f6, 'laya.utils' + '.RunDriver'), _0x6271f6['getInclude' + 'Str'] = function (_0x139648) {
                return null;
            }, _0x6271f6['createShad' + 'erConditio' + 'n'] = function (_0x3cf96d) {
                var _0x40d3c9 = '(function(' + ')\x20{return\x20' + _0x3cf96d + ';})';
                return _0x34a895['_runScript'](_0x40d3c9);
            }, _0x6271f6['fontMap'] = [], _0x6271f6['measureTex' + 't'] = function (_0x569b18, _0x366d57) {
                var _0xce4dbb = _0x6271f6['hanzi']['test'](_0x569b18);
                if (_0xce4dbb && _0x6271f6['fontMap'][_0x366d57])
                    return _0x6271f6['fontMap'][_0x366d57];
                var _0x56e306 = _0x2ad6c5['context'];
                _0x56e306['font'] = _0x366d57;
                var _0x2b5ce7 = _0x56e306['measureTex' + 't'](_0x569b18);
                return _0xce4dbb && (_0x6271f6['fontMap'][_0x366d57] = _0x2b5ce7), _0x2b5ce7;
            }, _0x6271f6['drawToCanv' + 'as'] = function (_0x3cff01, _0xea67c8, _0x32e31b, _0x2088ef, _0x1eac7b, _0x2134a6) {
                _0x32e31b |= 0x0, _0x2088ef |= 0x0, _0x1eac7b |= 0x0, _0x2134a6 |= 0x0;
                var _0x4bd586 = new _0x50a1b2(), _0x3105c0 = _0x4bd586['getContext']('2d');
                return _0x4bd586['size'](_0x32e31b, _0x2088ef), _0x131d85['renders'][_0xea67c8]['_fun'](_0x3cff01, _0x3105c0, _0x1eac7b, _0x2134a6), _0x4bd586;
            }, _0x6271f6['initRender'] = function (_0x4ffa54, _0x1608ff, _0xe7127f) {
                return _0x4fec79['_context'] = _0x4ffa54['getContext']('2d'), _0x4ffa54['size'](_0x1608ff, _0xe7127f), !0x0;
            }, _0x6271f6['createPart' + 'icleTempla' + 'te2D'] = null, _0x6271f6['changeWebG' + 'LSize'] = function (_0x2f528d, _0x77d5cc) {
            }, _0x6271f6['createRend' + 'erSprite'] = function (_0x2a2c22, _0xcb5c9d) {
                return new _0x131d85(_0x2a2c22, _0xcb5c9d);
            }, _0x6271f6['clear'] = function (_0x345cd2) {
                _0x4fec79['isConchApp'] || _0x4fec79['_context']['clear']();
            }, _0x6271f6['getTexture' + 'Pixels'] = function (_0xfe0f01, _0x4a30dd, _0x77b65f, _0x1e5142, _0x143a60) {
                return null;
            }, _0x6271f6['skinAniSpr' + 'ite'] = function () {
                return null;
            }, _0x6271f6['cancelLoad' + 'ByUrl'] = function (_0x32247c) {
            }, _0x6271f6['enableNati' + 've'] = null, _0x5043ef(_0x6271f6, [
                'hanzi',
                function () {
                    return this['hanzi'] = new RegExp('^[一-龥]$');
                }
            ]), _0x6271f6;
        }(), _0x273f4b = function () {
            function _0x40e8ce() {
            }
            return _0x4621f4(_0x40e8ce, 'laya.media' + '.SoundMana' + 'ger'), _0x71e09a(0x1, _0x40e8ce, 'useAudioMu' + 'sic', function () {
                return _0x40e8ce['_useAudioM' + 'usic'];
            }, function (_0x45fa2c) {
                _0x40e8ce['_useAudioM' + 'usic'] = _0x45fa2c, _0x45fa2c ? _0x40e8ce['_musicClas' + 's'] = _0x5886df : _0x40e8ce['_musicClas' + 's'] = null;
            }), _0x71e09a(0x1, _0x40e8ce, 'autoStopMu' + 'sic', function () {
                return _0x40e8ce['_autoStopM' + 'usic'];
            }, function (_0xb934ab) {
                _0x34a895['stage']['off']('blur', null, _0x40e8ce['_stageOnBl' + 'ur']), _0x34a895['stage']['off']('focus', null, _0x40e8ce['_stageOnFo' + 'cus']), _0x34a895['stage']['off']('visibility' + 'change', null, _0x40e8ce['_visibilit' + 'yChange']), _0x40e8ce['_autoStopM' + 'usic'] = _0xb934ab, _0xb934ab && (_0x34a895['stage']['on']('blur', null, _0x40e8ce['_stageOnBl' + 'ur']), _0x34a895['stage']['on']('focus', null, _0x40e8ce['_stageOnFo' + 'cus']), _0x34a895['stage']['on']('visibility' + 'change', null, _0x40e8ce['_visibilit' + 'yChange']));
            }), _0x71e09a(0x1, _0x40e8ce, 'muted', function () {
                return _0x40e8ce['_muted'];
            }, function (_0x196067) {
                _0x196067 != _0x40e8ce['_muted'] && (_0x196067 && _0x40e8ce['stopAllSou' + 'nd'](), _0x40e8ce['musicMuted'] = _0x196067, _0x40e8ce['_muted'] = _0x196067);
            }), _0x71e09a(0x1, _0x40e8ce, 'musicMuted', function () {
                return _0x40e8ce['_musicMute' + 'd'];
            }, function (_0x4a111a) {
                _0x4a111a != _0x40e8ce['_musicMute' + 'd'] && (_0x4a111a ? (_0x40e8ce['_bgMusic'] && _0x40e8ce['_musicChan' + 'nel'] && !_0x40e8ce['_musicChan' + 'nel']['isStopped'] ? _0x4fec79['isConchApp'] ? _0x40e8ce['_musicChan' + 'nel']['_audio'] && (_0x40e8ce['_musicChan' + 'nel']['_audio']['muted'] = !0x0) : _0x40e8ce['_musicChan' + 'nel']['pause']() : _0x40e8ce['_musicChan' + 'nel'] = null, _0x40e8ce['_musicMute' + 'd'] = _0x4a111a) : (_0x40e8ce['_musicMute' + 'd'] = _0x4a111a, _0x40e8ce['_bgMusic'] && _0x40e8ce['_musicChan' + 'nel'] && (_0x4fec79['isConchApp'] ? _0x40e8ce['_musicChan' + 'nel']['_audio'] && (_0x40e8ce['_musicChan' + 'nel']['_audio']['muted'] = !0x1) : _0x40e8ce['_musicChan' + 'nel']['resume']())));
            }), _0x71e09a(0x1, _0x40e8ce, 'soundMuted', function () {
                return _0x40e8ce['_soundMute' + 'd'];
            }, function (_0xc50694) {
                _0x40e8ce['_soundMute' + 'd'] = _0xc50694;
            }), _0x40e8ce['__init__'] = function () {
                var _0x39dfe5 = _0x2ad6c5['window'], _0x460743 = _0x39dfe5['AudioConte' + 'xt'] || _0x39dfe5['webkitAudi' + 'oContext'] || _0x39dfe5['mozAudioCo' + 'ntext'] ? !0x0 : !0x1;
                return _0x460743 && _0x1807a3['initWebAud' + 'io'](), _0x40e8ce['_soundClas' + 's'] = _0x460743 ? _0x1807a3 : _0x5886df, _0x5886df['_initMusic' + 'Audio'](), _0x40e8ce['_musicClas' + 's'] = _0x5886df, _0x460743;
            }, _0x40e8ce['addChannel'] = function (_0x499ba3) {
                _0x40e8ce['_channels']['indexOf'](_0x499ba3) >= 0x0 || _0x40e8ce['_channels']['push'](_0x499ba3);
            }, _0x40e8ce['removeChan' + 'nel'] = function (_0x578517) {
                var _0x5cd360 = 0x0;
                for (_0x5cd360 = _0x40e8ce['_channels']['length'] - 0x1; _0x5cd360 >= 0x0; _0x5cd360--)
                    _0x40e8ce['_channels'][_0x5cd360] == _0x578517 && _0x40e8ce['_channels']['splice'](_0x5cd360, 0x1);
            }, _0x40e8ce['disposeSou' + 'ndLater'] = function (_0x254e7e) {
                _0x40e8ce['_lastSound' + 'UsedTimeDi' + 'c'][_0x254e7e] = _0x2ad6c5['now'](), _0x40e8ce['_isCheckin' + 'gDispose'] || (_0x40e8ce['_isCheckin' + 'gDispose'] = !0x0, _0x34a895['timer']['loop'](0x1388, null, _0x40e8ce['_checkDisp' + 'oseSound']));
            }, _0x40e8ce['_checkDisp' + 'oseSound'] = function () {
                var _0x310b1f, _0x54c557 = _0x2ad6c5['now'](), _0xce3397 = !0x1;
                for (_0x310b1f in _0x40e8ce['_lastSound' + 'UsedTimeDi' + 'c'])
                    _0x54c557 - _0x40e8ce['_lastSound' + 'UsedTimeDi' + 'c'][_0x310b1f] > 0x7530 ? (delete _0x40e8ce['_lastSound' + 'UsedTimeDi' + 'c'][_0x310b1f], _0x40e8ce['disposeSou' + 'ndIfNotUse' + 'd'](_0x310b1f)) : _0xce3397 = !0x0;
                _0xce3397 || (_0x40e8ce['_isCheckin' + 'gDispose'] = !0x1, _0x34a895['timer']['clear'](null, _0x40e8ce['_checkDisp' + 'oseSound']));
            }, _0x40e8ce['disposeSou' + 'ndIfNotUse' + 'd'] = function (_0x1ae408) {
                var _0x9eb475 = 0x0;
                for (_0x9eb475 = _0x40e8ce['_channels']['length'] - 0x1; _0x9eb475 >= 0x0; _0x9eb475--)
                    if (_0x40e8ce['_channels'][_0x9eb475]['url'] == _0x1ae408)
                        return;
                _0x40e8ce['destroySou' + 'nd'](_0x1ae408);
            }, _0x40e8ce['_visibilit' + 'yChange'] = function () {
                _0x34a895['stage']['isVisibili' + 'ty'] ? _0x40e8ce['_stageOnFo' + 'cus']() : _0x40e8ce['_stageOnBl' + 'ur']();
            }, _0x40e8ce['_stageOnBl' + 'ur'] = function () {
                _0x40e8ce['_isActive'] = !0x1, _0x40e8ce['_musicChan' + 'nel'] && (_0x40e8ce['_musicChan' + 'nel']['isStopped'] || (_0x40e8ce['_blurPause' + 'd'] = !0x0, _0x40e8ce['_musicChan' + 'nel']['pause']())), _0x40e8ce['stopAllSou' + 'nd'](), _0x34a895['stage']['once']('mousedown', null, _0x40e8ce['_stageOnFo' + 'cus']);
            }, _0x40e8ce['_recoverWe' + 'bAudio'] = function () {
                _0x1807a3['ctx'] && 'running' != _0x1807a3['ctx']['state'] && _0x1807a3['ctx']['resume'] && _0x1807a3['ctx']['resume']();
            }, _0x40e8ce['_stageOnFo' + 'cus'] = function () {
                _0x40e8ce['_isActive'] = !0x0, _0x40e8ce['_recoverWe' + 'bAudio'](), _0x34a895['stage']['off']('mousedown', null, _0x40e8ce['_stageOnFo' + 'cus']), _0x40e8ce['_blurPause' + 'd'] && _0x40e8ce['_musicChan' + 'nel'] && _0x40e8ce['_musicChan' + 'nel']['isStopped'] && (_0x40e8ce['_blurPause' + 'd'] = !0x1, _0x40e8ce['_musicChan' + 'nel']['resume']());
            }, _0x40e8ce['playSound'] = function (_0x23a8f4, _0x25ee2e, _0x3b1995, _0x21f9e7, _0x3f5b89) {
                if (void 0x0 === _0x25ee2e && (_0x25ee2e = 0x1), void 0x0 === _0x3f5b89 && (_0x3f5b89 = 0x0), !_0x40e8ce['_isActive'] || !_0x23a8f4)
                    return null;
                if (_0x40e8ce['_muted'])
                    return null;
                if (_0x40e8ce['_recoverWe' + 'bAudio'](), _0x23a8f4 = _0x4bf8e9['formatURL'](_0x23a8f4), _0x23a8f4 == _0x40e8ce['_bgMusic']) {
                    if (_0x40e8ce['_musicMute' + 'd'])
                        return null;
                } else {
                    if (_0x4fec79['isConchApp']) {
                        var _0x26e516 = _0x3b78ce['getFileExt' + 'ension'](_0x23a8f4);
                        if ('wav' != _0x26e516 && 'ogg' != _0x26e516)
                            return alert('The\x20sound\x20' + 'only\x20suppo' + 'rts\x20wav\x20or' + '\x20ogg\x20forma' + 't,for\x20opti' + 'mal\x20perfor' + 'mance\x20reas' + 'on,please\x20' + 'refer\x20to\x20t' + 'he\x20officia' + 'l\x20website\x20' + 'document.'), null;
                    }
                    if (_0x40e8ce['_soundMute' + 'd'])
                        return null;
                }
                var _0x142800;
                _0x2ad6c5['onMiniGame'] || (_0x142800 = _0x34a895['loader']['getRes'](_0x23a8f4)), _0x21f9e7 || (_0x21f9e7 = _0x40e8ce['_soundClas' + 's']), _0x142800 || (_0x142800 = new _0x21f9e7(), _0x142800['load'](_0x23a8f4), _0x2ad6c5['onMiniGame'] || _0x3943d1['cacheRes'](_0x23a8f4, _0x142800));
                var _0x48a974;
                return (_0x48a974 = _0x142800['play'](_0x3f5b89, _0x25ee2e)) ? (_0x48a974['url'] = _0x23a8f4, _0x48a974['volume'] = _0x23a8f4 == _0x40e8ce['_bgMusic'] ? _0x40e8ce['musicVolum' + 'e'] : _0x40e8ce['soundVolum' + 'e'], _0x48a974['completeHa' + 'ndler'] = _0x3b1995, _0x48a974) : null;
            }, _0x40e8ce['destroySou' + 'nd'] = function (_0x2df332) {
                var _0x463c93 = _0x34a895['loader']['getRes'](_0x2df332);
                _0x463c93 && (_0x3943d1['clearRes'](_0x2df332), _0x463c93['dispose']());
            }, _0x40e8ce['playMusic'] = function (_0x4a2e68, _0x4dd37f, _0x2e55ff, _0x43a83c) {
                return void 0x0 === _0x4dd37f && (_0x4dd37f = 0x0), void 0x0 === _0x43a83c && (_0x43a83c = 0x0), _0x4a2e68 = _0x4bf8e9['formatURL'](_0x4a2e68), _0x40e8ce['_bgMusic'] = _0x4a2e68, _0x40e8ce['_musicChan' + 'nel'] && _0x40e8ce['_musicChan' + 'nel']['stop'](), _0x40e8ce['_musicChan' + 'nel'] = _0x40e8ce['playSound'](_0x4a2e68, _0x4dd37f, _0x2e55ff, _0x40e8ce['_musicClas' + 's'], _0x43a83c);
            }, _0x40e8ce['stopSound'] = function (_0x2895d8) {
                _0x2895d8 = _0x4bf8e9['formatURL'](_0x2895d8);
                var _0x40da40, _0x3aa7c3 = 0x0;
                for (_0x3aa7c3 = _0x40e8ce['_channels']['length'] - 0x1; _0x3aa7c3 >= 0x0; _0x3aa7c3--)
                    _0x40da40 = _0x40e8ce['_channels'][_0x3aa7c3], _0x40da40['url'] == _0x2895d8 && _0x40da40['stop']();
            }, _0x40e8ce['stopAll'] = function () {
                _0x40e8ce['_bgMusic'] = null;
                var _0x29124a, _0x34f033 = 0x0;
                for (_0x34f033 = _0x40e8ce['_channels']['length'] - 0x1; _0x34f033 >= 0x0; _0x34f033--)
                    _0x29124a = _0x40e8ce['_channels'][_0x34f033], _0x29124a['stop']();
            }, _0x40e8ce['stopAllSou' + 'nd'] = function () {
                var _0x470ec8, _0x264294 = 0x0;
                for (_0x264294 = _0x40e8ce['_channels']['length'] - 0x1; _0x264294 >= 0x0; _0x264294--)
                    _0x470ec8 = _0x40e8ce['_channels'][_0x264294], _0x470ec8['url'] != _0x40e8ce['_bgMusic'] && _0x470ec8['stop']();
            }, _0x40e8ce['stopMusic'] = function () {
                _0x40e8ce['_musicChan' + 'nel'] && _0x40e8ce['_musicChan' + 'nel']['stop'](), _0x40e8ce['_bgMusic'] = null;
            }, _0x40e8ce['setSoundVo' + 'lume'] = function (_0x3871d1, _0x5b3dce) {
                if (_0x5b3dce)
                    _0x5b3dce = _0x4bf8e9['formatURL'](_0x5b3dce), _0x40e8ce['_setVolume'](_0x5b3dce, _0x3871d1);
                else {
                    _0x40e8ce['soundVolum' + 'e'] = _0x3871d1;
                    var _0x45de93, _0x106ba3 = 0x0;
                    for (_0x106ba3 = _0x40e8ce['_channels']['length'] - 0x1; _0x106ba3 >= 0x0; _0x106ba3--)
                        _0x45de93 = _0x40e8ce['_channels'][_0x106ba3], _0x45de93['url'] != _0x40e8ce['_bgMusic'] && (_0x45de93['volume'] = _0x3871d1);
                }
            }, _0x40e8ce['setMusicVo' + 'lume'] = function (_0x4a548d) {
                _0x40e8ce['musicVolum' + 'e'] = _0x4a548d, _0x40e8ce['_setVolume'](_0x40e8ce['_bgMusic'], _0x4a548d);
            }, _0x40e8ce['_setVolume'] = function (_0x51316f, _0x410c8a) {
                _0x51316f = _0x4bf8e9['formatURL'](_0x51316f);
                var _0x114b1e, _0x3a29a4 = 0x0;
                for (_0x3a29a4 = _0x40e8ce['_channels']['length'] - 0x1; _0x3a29a4 >= 0x0; _0x3a29a4--)
                    _0x114b1e = _0x40e8ce['_channels'][_0x3a29a4], _0x114b1e['url'] == _0x51316f && (_0x114b1e['volume'] = _0x410c8a);
            }, _0x40e8ce['musicVolum' + 'e'] = 0x1, _0x40e8ce['soundVolum' + 'e'] = 0x1, _0x40e8ce['playbackRa' + 'te'] = 0x1, _0x40e8ce['_useAudioM' + 'usic'] = !0x0, _0x40e8ce['_muted'] = !0x1, _0x40e8ce['_soundMute' + 'd'] = !0x1, _0x40e8ce['_musicMute' + 'd'] = !0x1, _0x40e8ce['_bgMusic'] = null, _0x40e8ce['_musicChan' + 'nel'] = null, _0x40e8ce['_channels'] = [], _0x40e8ce['_autoStopM' + 'usic'] = !0x1, _0x40e8ce['_blurPause' + 'd'] = !0x1, _0x40e8ce['_isActive'] = !0x0, _0x40e8ce['_soundClas' + 's'] = null, _0x40e8ce['_musicClas' + 's'] = null, _0x40e8ce['_lastSound' + 'UsedTimeDi' + 'c'] = {}, _0x40e8ce['_isCheckin' + 'gDispose'] = !0x1, _0x40e8ce['autoReleas' + 'eSound'] = !0x0, _0x40e8ce;
        }(), _0x2249dd = function () {
            function _0xd30981() {
            }
            return _0x4621f4(_0xd30981, 'laya.utils' + '.Pool'), _0xd30981['getPoolByS' + 'ign'] = function (_0x21cbe0) {
                return _0xd30981['_poolDic'][_0x21cbe0] || (_0xd30981['_poolDic'][_0x21cbe0] = []);
            }, _0xd30981['clearBySig' + 'n'] = function (_0x3572a7) {
                _0xd30981['_poolDic'][_0x3572a7] && (_0xd30981['_poolDic'][_0x3572a7]['length'] = 0x0);
            }, _0xd30981['recover'] = function (_0x1239f1, _0x110a77) {
                _0x110a77['__InPool'] || (_0x110a77['__InPool'] = !0x0, _0xd30981['getPoolByS' + 'ign'](_0x1239f1)['push'](_0x110a77));
            }, _0xd30981['recoverByC' + 'lass'] = function (_0x189ac1) {
                if (_0x189ac1) {
                    var _0x2c4eb9 = _0x189ac1['__classNam' + 'e'] || _0x189ac1['constructo' + 'r']['_$gid'];
                    _0x2c4eb9 && _0xd30981['recover'](_0x2c4eb9, _0x189ac1);
                }
            }, _0xd30981['_getClassS' + 'ign'] = function (_0x5e161a) {
                var _0x3b9ec0 = _0x5e161a['__classNam' + 'e'] || _0x5e161a['_$gid'];
                return _0x3b9ec0 || (_0x5e161a['_$gid'] = _0x3b9ec0 = _0x3b78ce['getGID']() + ''), _0x3b9ec0;
            }, _0xd30981['createByCl' + 'ass'] = function (_0x2d060c) {
                return _0xd30981['getItemByC' + 'lass'](_0xd30981['_getClassS' + 'ign'](_0x2d060c), _0x2d060c);
            }, _0xd30981['getItemByC' + 'lass'] = function (_0x405643, _0x53effa) {
                if (!_0xd30981['_poolDic'][_0x405643])
                    return new _0x53effa();
                var _0x47fca8 = _0xd30981['getPoolByS' + 'ign'](_0x405643);
                if (_0x47fca8['length']) {
                    var _0x4f7bd9 = _0x47fca8['pop']();
                    _0x4f7bd9['__InPool'] = !0x1;
                } else
                    _0x4f7bd9 = new _0x53effa();
                return _0x4f7bd9;
            }, _0xd30981['getItemByC' + 'reateFun'] = function (_0x17b0ae, _0xe86f2, _0x124449) {
                var _0x4083c2 = _0xd30981['getPoolByS' + 'ign'](_0x17b0ae), _0x3c4b38 = _0x4083c2['length'] ? _0x4083c2['pop']() : _0xe86f2['call'](_0x124449);
                return _0x3c4b38['__InPool'] = !0x1, _0x3c4b38;
            }, _0xd30981['getItem'] = function (_0x20233c) {
                var _0x3ed587 = _0xd30981['getPoolByS' + 'ign'](_0x20233c), _0x2c4b4c = _0x3ed587['length'] ? _0x3ed587['pop']() : null;
                return _0x2c4b4c && (_0x2c4b4c['__InPool'] = !0x1), _0x2c4b4c;
            }, _0xd30981['POOLSIGN'] = '__InPool', _0xd30981['_poolDic'] = {}, _0xd30981;
        }(), _0x4c6abc = function () {
            function _0x4a465f() {
                this['json'] = null;
            }
            _0x4621f4(_0x4a465f, 'laya.compo' + 'nents.Pref' + 'ab');
            var _0x2c5f8d = _0x4a465f['prototype'];
            return _0x2c5f8d['create'] = function () {
                return this['json'] ? _0x10b6f2['createByDa' + 'ta'](null, this['json']) : null;
            }, _0x4a465f;
        }(), _0x131d85 = function () {
            function _0x25d499(_0x1eb1ce, _0x375e6e) {
                if (_0x39c04c['map'][_0x1eb1ce])
                    return this['_fun'] = _0x39c04c['map'][_0x1eb1ce], void (this['_next'] = _0x25d499['NORENDER']);
                switch (this['_next'] = _0x375e6e || _0x25d499['NORENDER'], _0x1eb1ce) {
                case 0x0:
                    return void (this['_fun'] = this['_no']);
                case 0x1:
                    return void (this['_fun'] = this['_alpha']);
                case 0x2:
                    return void (this['_fun'] = this['_transform']);
                case 0x4:
                    return void (this['_fun'] = this['_blend']);
                case 0x8:
                    return void (this['_fun'] = this['_canvas']);
                case 0x20:
                    return void (this['_fun'] = this['_mask']);
                case 0x40:
                    return void (this['_fun'] = this['_clip']);
                case 0x80:
                    return void (this['_fun'] = this['_style']);
                case 0x200:
                    return void (this['_fun'] = this['_graphics']);
                case 0x2000:
                    return void (this['_fun'] = this['_children']);
                case 0x800:
                    return void (this['_fun'] = this['_custom']);
                case 0x100:
                    return void (this['_fun'] = this['_texture']);
                case 0x10:
                    return void (this['_fun'] = _0x26563f['_filter']);
                case 0x11111:
                    return void (this['_fun'] = _0x25d499['_initRende' + 'rFun']);
                }
                this['onCreate'](_0x1eb1ce);
            }
            _0x4621f4(_0x25d499, 'laya.rende' + 'rs.RenderS' + 'prite');
            var _0x23323c = _0x25d499['prototype'];
            return _0x23323c['onCreate'] = function (_0x566c85) {
            }, _0x23323c['_style'] = function (_0x1317e5, _0x35e1f0, _0x3b5d87, _0x359ae1) {
                var _0x4274fe = _0x1317e5['_style'];
                null != _0x4274fe['render'] && _0x4274fe['render'](_0x1317e5, _0x35e1f0, _0x3b5d87, _0x359ae1);
                var _0x452c9e = this['_next'];
                _0x452c9e['_fun']['call'](_0x452c9e, _0x1317e5, _0x35e1f0, _0x3b5d87, _0x359ae1);
            }, _0x23323c['_no'] = function (_0x2878b3, _0x4d876d, _0x4882dc, _0xec994) {
            }, _0x23323c['_custom'] = function (_0x532415, _0x538607, _0x27d09f, _0x5146ac) {
                _0x532415['customRend' + 'er'](_0x538607, _0x27d09f, _0x5146ac), this['_next']['_fun']['call'](this['_next'], _0x532415, _0x538607, _0x27d09f - _0x532415['pivotX'], _0x5146ac - _0x532415['pivotY']);
            }, _0x23323c['_clip'] = function (_0x31e6ef, _0x42f48e, _0x2351d8, _0x36eca1) {
                var _0x17feb6 = this['_next'];
                if (_0x17feb6 != _0x25d499['NORENDER']) {
                    var _0x56cac = _0x31e6ef['_style']['scrollRect'];
                    _0x42f48e['save'](), _0x42f48e['clipRect'](_0x2351d8, _0x36eca1, _0x56cac['width'], _0x56cac['height']), _0x17feb6['_fun']['call'](_0x17feb6, _0x31e6ef, _0x42f48e, _0x2351d8 - _0x56cac['x'], _0x36eca1 - _0x56cac['y']), _0x42f48e['restore']();
                }
            }, _0x23323c['_blend'] = function (_0x528c2c, _0x1cbb3d, _0x35884f, _0xc4e78e) {
                var _0x3281a2 = _0x528c2c['_style'];
                _0x3281a2['blendMode'] && (_0x1cbb3d['globalComp' + 'ositeOpera' + 'tion'] = _0x3281a2['blendMode']);
                var _0x15265e = this['_next'];
                _0x15265e['_fun']['call'](_0x15265e, _0x528c2c, _0x1cbb3d, _0x35884f, _0xc4e78e), _0x1cbb3d['globalComp' + 'ositeOpera' + 'tion'] = 'source-ove' + 'r';
            }, _0x23323c['_mask'] = function (_0x1867af, _0x5e5721, _0x24225b, _0x5e6beb) {
                var _0x384c53 = this['_next'];
                _0x384c53['_fun']['call'](_0x384c53, _0x1867af, _0x5e5721, _0x24225b, _0x5e6beb);
                var _0x3ac572 = _0x1867af['mask'];
                _0x3ac572 && (_0x5e5721['globalComp' + 'ositeOpera' + 'tion'] = 'destinatio' + 'n-in', (_0x3ac572['numChildre' + 'n'] > 0x0 || !_0x3ac572['graphics']['_isOnlyOne']()) && (_0x3ac572['cacheAs'] = 'bitmap'), _0x3ac572['render'](_0x5e5721, _0x24225b - _0x1867af['_style']['pivotX'], _0x5e6beb - _0x1867af['_style']['pivotY'])), _0x5e5721['globalComp' + 'ositeOpera' + 'tion'] = 'source-ove' + 'r';
            }, _0x23323c['_texture'] = function (_0x4fd7fd, _0x5d092f, _0x29809e, _0x20ed0c) {
                var _0xe553b = _0x4fd7fd['texture'];
                _0xe553b['_getSource']() && _0x5d092f['drawTextur' + 'e'](_0xe553b, _0x29809e - _0x4fd7fd['pivotX'] + _0xe553b['offsetX'], _0x20ed0c - _0x4fd7fd['pivotY'] + _0xe553b['offsetY'], _0x4fd7fd['_width'] || _0xe553b['width'], _0x4fd7fd['_height'] || _0xe553b['height']);
                var _0x3dcc6a = this['_next'];
                _0x3dcc6a['_fun']['call'](_0x3dcc6a, _0x4fd7fd, _0x5d092f, _0x29809e, _0x20ed0c);
            }, _0x23323c['_graphics'] = function (_0x2e44f1, _0x2ba850, _0x4450ab, _0x2d2a37) {
                _0x2e44f1['_graphics'] && _0x2e44f1['_graphics']['_render'](_0x2e44f1, _0x2ba850, _0x4450ab - _0x2e44f1['pivotX'], _0x2d2a37 - _0x2e44f1['pivotY']);
                var _0x169cd4 = this['_next'];
                _0x169cd4['_fun']['call'](_0x169cd4, _0x2e44f1, _0x2ba850, _0x4450ab, _0x2d2a37);
            }, _0x23323c['_image'] = function (_0x282d1b, _0x4e2134, _0x4ef9a9, _0x3aa63d) {
                var _0x8c7c51 = _0x282d1b['_style'];
                _0x4e2134['drawTextur' + 'e2'](_0x4ef9a9, _0x3aa63d, _0x8c7c51['pivotX'], _0x8c7c51['pivotY'], _0x282d1b['transform'], _0x282d1b['_graphics']['_one']);
            }, _0x23323c['_image2'] = function (_0x43a7c3, _0x4f407a, _0x378f0c, _0x2b5a34) {
                var _0x9e04f6 = _0x43a7c3['_style'];
                _0x4f407a['drawTextur' + 'e2'](_0x378f0c, _0x2b5a34, _0x9e04f6['pivotX'], _0x9e04f6['pivotY'], _0x43a7c3['transform'], _0x43a7c3['_graphics']['_one']);
            }, _0x23323c['_alpha'] = function (_0x339d9d, _0x12be41, _0x5e568a, _0x1bddc5) {
                var _0x107a7c, _0x171e0d = _0x339d9d['_style'];
                if ((_0x107a7c = _0x171e0d['alpha']) > 0.01 || _0x339d9d['_needRepai' + 'nt']()) {
                    var _0x39cfbb = _0x12be41['globalAlph' + 'a'];
                    _0x12be41['globalAlph' + 'a'] *= _0x107a7c;
                    var _0x2e139a = this['_next'];
                    _0x2e139a['_fun']['call'](_0x2e139a, _0x339d9d, _0x12be41, _0x5e568a, _0x1bddc5), _0x12be41['globalAlph' + 'a'] = _0x39cfbb;
                }
            }, _0x23323c['_transform'] = function (_0x22d358, _0x5c5020, _0x1d7629, _0x12bc27) {
                var _0x38aeed = _0x22d358['transform'], _0x4bd09d = this['_next'];
                _0x22d358['_style'], _0x38aeed && _0x4bd09d != _0x25d499['NORENDER'] ? (_0x5c5020['save'](), _0x5c5020['transform'](_0x38aeed['a'], _0x38aeed['b'], _0x38aeed['c'], _0x38aeed['d'], _0x38aeed['tx'] + _0x1d7629, _0x38aeed['ty'] + _0x12bc27), _0x4bd09d['_fun']['call'](_0x4bd09d, _0x22d358, _0x5c5020, 0x0, 0x0), _0x5c5020['restore']()) : _0x4bd09d['_fun']['call'](_0x4bd09d, _0x22d358, _0x5c5020, _0x1d7629, _0x12bc27);
            }, _0x23323c['_children'] = function (_0x498c67, _0x2f3f82, _0x4ffeb2, _0xd6d942) {
                var _0x39f5e4, _0x93f6b6 = _0x498c67['_style'], _0x1900da = _0x498c67['_children'], _0x27b769 = _0x1900da['length'];
                _0x4ffeb2 -= _0x498c67['pivotX'], _0xd6d942 -= _0x498c67['pivotY'];
                var _0x12c2ef = _0x498c67['_getBit'](0x100) && _0x2f3f82['drawCallOp' + 'timize'](!0x0);
                if (_0x93f6b6['viewport']) {
                    var _0x15db1b = _0x93f6b6['viewport'], _0x463be7 = _0x15db1b['x'], _0x1f29e7 = _0x15db1b['y'], _0x386f24 = _0x15db1b['right'], _0x23ea98 = _0x15db1b['bottom'], _0x3b04a7 = NaN, _0x12a081 = NaN;
                    for (_0xb45a40 = 0x0; _0x27b769 > _0xb45a40; ++_0xb45a40)
                        (_0x39f5e4 = _0x1900da[_0xb45a40])['_visible'] && (_0x3b04a7 = _0x39f5e4['_x']) < _0x386f24 && _0x3b04a7 + _0x39f5e4['width'] > _0x463be7 && (_0x12a081 = _0x39f5e4['_y']) < _0x23ea98 && _0x12a081 + _0x39f5e4['height'] > _0x1f29e7 && _0x39f5e4['render'](_0x2f3f82, _0x4ffeb2, _0xd6d942);
                } else {
                    for (var _0xb45a40 = 0x0; _0x27b769 > _0xb45a40; ++_0xb45a40)
                        (_0x39f5e4 = _0x1900da[_0xb45a40])['_visible'] && _0x39f5e4['render'](_0x2f3f82, _0x4ffeb2, _0xd6d942);
                }
                _0x12c2ef && _0x2f3f82['drawCallOp' + 'timize'](!0x1);
            }, _0x23323c['_canvas'] = function (_0x2a3761, _0x386c1b, _0x49775c, _0x25e0f9) {
                var _0x36a105 = _0x2a3761['_cacheStyl' + 'e'], _0x35ffbb = this['_next'];
                if (!_0x36a105['enableCanv' + 'asRender'])
                    return void _0x35ffbb['_fun']['call'](_0x35ffbb, _0x2a3761, _0x386c1b, _0x49775c, _0x25e0f9);
                'bitmap' === _0x36a105['cacheAs'] ? _0x2973e9['canvasBitm' + 'ap']++ : _0x2973e9['canvasNorm' + 'al']++;
                var _0x2a32f2 = !0x1, _0x38d8d8 = !0x1;
                if (_0x4fec79['isWebGL'] && _0x36a105['canvas']) {
                    var _0x3cda6c = _0x36a105['canvas'], _0x28eb68 = (_0x3cda6c['context'], _0x3cda6c['touches']);
                    if (_0x28eb68) {
                        for (var _0x1036e8 = 0x0; _0x1036e8 < _0x28eb68['length']; _0x1036e8++)
                            if (_0x28eb68[_0x1036e8]['deleted']) {
                                _0x38d8d8 = !0x0;
                                break;
                            }
                    }
                    _0x2a32f2 = _0x3cda6c['isCacheVal' + 'id'] && !_0x3cda6c['isCacheVal' + 'id']();
                }
                if (_0x2a3761['_needRepai' + 'nt']() || !_0x36a105['canvas'] || _0x38d8d8 || _0x2a32f2 || _0x34a895['stage']['isGlobalRe' + 'paint']()) {
                    if (_0x4fec79['isWebGL'] && 'normal' === _0x36a105['cacheAs']) {
                        if (_0x386c1b['_targets'])
                            return void _0x35ffbb['_fun']['call'](_0x35ffbb, _0x2a3761, _0x386c1b, _0x49775c, _0x25e0f9);
                        this['_canvas_we' + 'bgl_normal' + '_repaint'](_0x2a3761, _0x386c1b);
                    } else
                        this['_canvas_re' + 'paint'](_0x2a3761, _0x386c1b, _0x49775c, _0x25e0f9);
                }
                var _0x1ec402 = _0x36a105['cacheRect'];
                _0x386c1b['drawCanvas'](_0x36a105['canvas'], _0x49775c + _0x1ec402['x'], _0x25e0f9 + _0x1ec402['y'], _0x1ec402['width'], _0x1ec402['height']);
            }, _0x23323c['_canvas_re' + 'paint'] = function (_0x5a7a7a, _0x1cbff0, _0x572f0d, _0x120bbf) {
                var _0x3e1909, _0x362b04, _0x145499, _0x507e78, _0x1fda58, _0x66a420, _0x460e08, _0x5013f4, _0x5c5b0a, _0x4cd141 = _0x5a7a7a['_cacheStyl' + 'e'], _0x561f30 = this['_next'], _0x141d17 = _0x4cd141['canvas'], _0x516f34 = _0x4cd141['cacheAs'];
                if (_0x5c5b0a = _0x4cd141['_calculate' + 'CacheRect'](_0x5a7a7a, _0x516f34, _0x572f0d, _0x120bbf), _0x460e08 = _0x5c5b0a['x'], _0x5013f4 = _0x5c5b0a['y'], _0x507e78 = _0x4cd141['cacheRect'], _0x1fda58 = _0x507e78['width'] * _0x460e08, _0x66a420 = _0x507e78['height'] * _0x5013f4, _0x362b04 = _0x507e78['x'], _0x145499 = _0x507e78['y'], _0x4fec79['isWebGL'] && 'bitmap' === _0x516f34 && (_0x1fda58 > 0x800 || _0x66a420 > 0x800))
                    return console['warn']('cache\x20bitm' + 'ap\x20size\x20la' + 'rger\x20than\x20' + '2048,cache' + '\x20ignored'), _0x4cd141['releaseCon' + 'text'](), void _0x561f30['_fun']['call'](_0x561f30, _0x5a7a7a, _0x1cbff0, _0x572f0d, _0x120bbf);
                if (_0x141d17 || (_0x4cd141['createCont' + 'ext'](), _0x141d17 = _0x4cd141['canvas']), _0x3e1909 = _0x141d17['context'], _0x3e1909['sprite'] = _0x5a7a7a, (_0x141d17['width'] != _0x1fda58 || _0x141d17['height'] != _0x66a420) && _0x141d17['size'](_0x1fda58, _0x66a420), 'bitmap' === _0x516f34 ? _0x3e1909['asBitmap'] = !0x0 : 'normal' === _0x516f34 && (_0x3e1909['asBitmap'] = !0x1), _0x3e1909['clear'](), 0x1 != _0x460e08 || 0x1 != _0x5013f4) {
                    var _0x2e2574 = _0x3e1909;
                    _0x2e2574['save'](), _0x2e2574['scale'](_0x460e08, _0x5013f4), _0x561f30['_fun']['call'](_0x561f30, _0x5a7a7a, _0x3e1909, -_0x362b04, -_0x145499), _0x2e2574['restore'](), _0x5a7a7a['_applyFilt' + 'ers']();
                } else
                    _0x2e2574 = _0x3e1909, _0x561f30['_fun']['call'](_0x561f30, _0x5a7a7a, _0x3e1909, -_0x362b04, -_0x145499), _0x5a7a7a['_applyFilt' + 'ers']();
                _0x4cd141['staticCach' + 'e'] && (_0x4cd141['reCache'] = !0x1), _0x2973e9['canvasReCa' + 'che']++;
            }, _0x23323c['_canvas_we' + 'bgl_normal' + '_repaint'] = function (_0x1f625c, _0x46b09b) {
                var _0x17fd73 = _0x1f625c['_cacheStyl' + 'e'], _0x3697af = this['_next'], _0x13931d = _0x17fd73['canvas'], _0x1d0b1d = _0x17fd73['cacheAs'];
                _0x17fd73['_calculate' + 'CacheRect'](_0x1f625c, _0x1d0b1d, 0x0, 0x0), _0x13931d || (_0x13931d = _0x17fd73['canvas'] = new _0x34a895['WebGLCache' + 'AsNormalCa' + 'nvas'](_0x46b09b, _0x1f625c));
                var _0x4d095e = _0x13931d['context'];
                _0x13931d['startRec'](), _0x3697af['_fun']['call'](_0x3697af, _0x1f625c, _0x4d095e, _0x1f625c['pivotX'], _0x1f625c['pivotY']), _0x1f625c['_applyFilt' + 'ers'](), _0x2973e9['canvasReCa' + 'che']++, _0x13931d['endRec']();
            }, _0x25d499['__init__'] = function () {
                _0x39c04c['__init__']();
                var _0x2524dc, _0x1319ed = 0x0, _0x43405d = 0x0;
                for (_0x2524dc = _0x552e50['createRend' + 'erSprite'](0x11111, null), _0x43405d = _0x25d499['renders']['length'] = 0x4000, _0x1319ed = 0x0; _0x43405d > _0x1319ed; _0x1319ed++)
                    _0x25d499['renders'][_0x1319ed] = _0x2524dc;
                _0x25d499['renders'][0x0] = _0x552e50['createRend' + 'erSprite'](0x0, null);
            }, _0x25d499['_initRende' + 'rFun'] = function (_0x4d400b, _0x21be54, _0x7f2db, _0x51f229) {
                var _0x36d527 = _0x4d400b['_renderTyp' + 'e'], _0x3efbf4 = _0x25d499['renders'][_0x36d527] = _0x25d499['_getTypeRe' + 'nder'](_0x36d527);
                _0x3efbf4['_fun'](_0x4d400b, _0x21be54, _0x7f2db, _0x51f229);
            }, _0x25d499['_getTypeRe' + 'nder'] = function (_0x53665f) {
                if (_0x39c04c['map'][_0x53665f])
                    return _0x552e50['createRend' + 'erSprite'](_0x53665f, null);
                for (var _0x4fbaf5 = null, _0x1cfd23 = 0x2000; _0x1cfd23 > 0x0;)
                    _0x1cfd23 & _0x53665f && (_0x4fbaf5 = _0x552e50['createRend' + 'erSprite'](_0x1cfd23, _0x4fbaf5)), _0x1cfd23 >>= 0x1;
                return _0x4fbaf5;
            }, _0x25d499['INIT'] = 0x11111, _0x25d499['renders'] = [], _0x25d499['NORENDER'] = new _0x25d499(0x0, null), _0x25d499;
        }(), _0x2f73a1 = function () {
            function _0x570393(_0x1dec0d) {
                this['scale'] = 0x1, this['currFrame'] = 0x0, this['_delta'] = 0x0, this['_map'] = [], this['_handlers'] = [], this['_temp'] = [], this['_count'] = 0x0, this['currTimer'] = _0x2ad6c5['now'](), this['_lastTimer'] = _0x2ad6c5['now'](), void 0x0 === _0x1dec0d && (_0x1dec0d = !0x0), _0x1dec0d && _0x34a895['systemTime' + 'r'] && _0x34a895['systemTime' + 'r']['frameLoop'](0x1, this, this['_update']);
            }
            var _0x262100;
            _0x4621f4(_0x570393, 'laya.utils' + '.Timer');
            var _0x40b80d = _0x570393['prototype'];
            return _0x40b80d['_update'] = function () {
                if (this['scale'] <= 0x0)
                    return void (this['_lastTimer'] = _0x2ad6c5['now']());
                var _0x393b58 = this['currFrame'] = this['currFrame'] + this['scale'], _0x3f4814 = _0x2ad6c5['now']();
                this['_delta'] = (_0x3f4814 - this['_lastTimer']) * this['scale'];
                var _0x5a4cf2 = this['currTimer'] = this['currTimer'] + this['_delta'];
                this['_lastTimer'] = _0x3f4814;
                var _0x4e2845 = this['_handlers'];
                this['_count'] = 0x0;
                for (var _0x38f973 = 0x0, _0x238409 = _0x4e2845['length']; _0x238409 > _0x38f973; _0x38f973++) {
                    var _0x15c37a = _0x4e2845[_0x38f973];
                    if (null !== _0x15c37a['method']) {
                        var _0x166b8e = _0x15c37a['userFrame'] ? _0x393b58 : _0x5a4cf2;
                        if (_0x166b8e >= _0x15c37a['exeTime']) {
                            if (_0x15c37a['repeat']) {
                                if (_0x15c37a['jumpFrame']) {
                                    for (; _0x166b8e >= _0x15c37a['exeTime'];)
                                        _0x15c37a['exeTime'] += _0x15c37a['delay'], _0x15c37a['run'](!0x1);
                                } else
                                    _0x15c37a['exeTime'] += _0x15c37a['delay'], _0x15c37a['run'](!0x1), _0x166b8e > _0x15c37a['exeTime'] && (_0x15c37a['exeTime'] += Math['ceil']((_0x166b8e - _0x15c37a['exeTime']) / _0x15c37a['delay']) * _0x15c37a['delay']);
                            } else
                                _0x15c37a['run'](!0x0);
                        }
                    } else
                        this['_count']++;
                }
                (this['_count'] > 0x1e || _0x393b58 % 0xc8 === 0x0) && this['_clearHand' + 'lers']();
            }, _0x40b80d['_clearHand' + 'lers'] = function () {
                for (var _0x15a51a = this['_handlers'], _0x37dce9 = 0x0, _0x2c3fe2 = _0x15a51a['length']; _0x2c3fe2 > _0x37dce9; _0x37dce9++) {
                    var _0x326159 = _0x15a51a[_0x37dce9];
                    null !== _0x326159['method'] ? this['_temp']['push'](_0x326159) : this['_recoverHa' + 'ndler'](_0x326159);
                }
                this['_handlers'] = this['_temp'], _0x15a51a['length'] = 0x0, this['_temp'] = _0x15a51a;
            }, _0x40b80d['_recoverHa' + 'ndler'] = function (_0x5e45ce) {
                this['_map'][_0x5e45ce['key']] == _0x5e45ce && (this['_map'][_0x5e45ce['key']] = null), _0x5e45ce['clear'](), _0x570393['_pool']['push'](_0x5e45ce);
            }, _0x40b80d['_create'] = function (_0x24d6c5, _0x1cbb84, _0x13dfbe, _0x32b7e3, _0x3fbdb5, _0x4c4968, _0x364ee0) {
                if (!_0x13dfbe)
                    return _0x3fbdb5['apply'](_0x32b7e3, _0x4c4968), null;
                if (_0x364ee0) {
                    var _0x2f5357 = this['_getHandle' + 'r'](_0x32b7e3, _0x3fbdb5);
                    if (_0x2f5357)
                        return _0x2f5357['repeat'] = _0x1cbb84, _0x2f5357['userFrame'] = _0x24d6c5, _0x2f5357['delay'] = _0x13dfbe, _0x2f5357['caller'] = _0x32b7e3, _0x2f5357['method'] = _0x3fbdb5, _0x2f5357['args'] = _0x4c4968, _0x2f5357['exeTime'] = _0x13dfbe + (_0x24d6c5 ? this['currFrame'] : this['currTimer'] + _0x2ad6c5['now']() - this['_lastTimer']), _0x2f5357;
                }
                return _0x2f5357 = _0x570393['_pool']['length'] > 0x0 ? _0x570393['_pool']['pop']() : new _0x262100(), _0x2f5357['repeat'] = _0x1cbb84, _0x2f5357['userFrame'] = _0x24d6c5, _0x2f5357['delay'] = _0x13dfbe, _0x2f5357['caller'] = _0x32b7e3, _0x2f5357['method'] = _0x3fbdb5, _0x2f5357['args'] = _0x4c4968, _0x2f5357['exeTime'] = _0x13dfbe + (_0x24d6c5 ? this['currFrame'] : this['currTimer'] + _0x2ad6c5['now']() - this['_lastTimer']), this['_indexHand' + 'ler'](_0x2f5357), this['_handlers']['push'](_0x2f5357), _0x2f5357;
            }, _0x40b80d['_indexHand' + 'ler'] = function (_0xb5e031) {
                var _0x56653b = _0xb5e031['caller'], _0x317623 = _0xb5e031['method'], _0xb7df0f = _0x56653b ? _0x56653b['$_GID'] || (_0x56653b['$_GID'] = _0x3b78ce['getGID']()) : 0x0, _0x4d08f2 = _0x317623['$_TID'] || (_0x317623['$_TID'] = 0x186a0 * _0x570393['_mid']++);
                _0xb5e031['key'] = _0xb7df0f + _0x4d08f2, this['_map'][_0xb5e031['key']] = _0xb5e031;
            }, _0x40b80d['once'] = function (_0x13b637, _0x51db4e, _0x58463a, _0x18d628, _0x268fd2) {
                void 0x0 === _0x268fd2 && (_0x268fd2 = !0x0), this['_create'](!0x1, !0x1, _0x13b637, _0x51db4e, _0x58463a, _0x18d628, _0x268fd2);
            }, _0x40b80d['loop'] = function (_0x62e1dd, _0xde888d, _0x9ecedc, _0x2c2a36, _0x1956f0, _0x490e9a) {
                void 0x0 === _0x1956f0 && (_0x1956f0 = !0x0), void 0x0 === _0x490e9a && (_0x490e9a = !0x1);
                var _0xdd5d41 = this['_create'](!0x1, !0x0, _0x62e1dd, _0xde888d, _0x9ecedc, _0x2c2a36, _0x1956f0);
                _0xdd5d41 && (_0xdd5d41['jumpFrame'] = _0x490e9a);
            }, _0x40b80d['frameOnce'] = function (_0x385596, _0x1316aa, _0x2a17bb, _0x4abff5, _0x1b3464) {
                void 0x0 === _0x1b3464 && (_0x1b3464 = !0x0), this['_create'](!0x0, !0x1, _0x385596, _0x1316aa, _0x2a17bb, _0x4abff5, _0x1b3464);
            }, _0x40b80d['frameLoop'] = function (_0x51cb17, _0xc30d10, _0x95048e, _0x396190, _0x4d6b00) {
                void 0x0 === _0x4d6b00 && (_0x4d6b00 = !0x0), this['_create'](!0x0, !0x0, _0x51cb17, _0xc30d10, _0x95048e, _0x396190, _0x4d6b00);
            }, _0x40b80d['toString'] = function () {
                return '\x20handlers:' + this['_handlers']['length'] + '\x20pool:' + _0x570393['_pool']['length'];
            }, _0x40b80d['clear'] = function (_0x438864, _0x245a44) {
                var _0x40daf1 = this['_getHandle' + 'r'](_0x438864, _0x245a44);
                _0x40daf1 && (this['_map'][_0x40daf1['key']] = null, _0x40daf1['key'] = 0x0, _0x40daf1['clear']());
            }, _0x40b80d['clearAll'] = function (_0x4bde65) {
                if (_0x4bde65)
                    for (var _0x267faf = 0x0, _0x13f96a = this['_handlers']['length']; _0x13f96a > _0x267faf; _0x267faf++) {
                        var _0xfbaff1 = this['_handlers'][_0x267faf];
                        _0xfbaff1['caller'] === _0x4bde65 && (this['_map'][_0xfbaff1['key']] = null, _0xfbaff1['key'] = 0x0, _0xfbaff1['clear']());
                    }
            }, _0x40b80d['_getHandle' + 'r'] = function (_0x3833c0, _0x45dd23) {
                var _0x2760b2 = _0x3833c0 ? _0x3833c0['$_GID'] || (_0x3833c0['$_GID'] = _0x3b78ce['getGID']()) : 0x0, _0x3620ec = _0x45dd23['$_TID'] || (_0x45dd23['$_TID'] = 0x186a0 * _0x570393['_mid']++);
                return this['_map'][_0x2760b2 + _0x3620ec];
            }, _0x40b80d['callLater'] = function (_0x14aee0, _0x4ab082, _0x401d43) {
                _0x53e0be['I']['callLater'](_0x14aee0, _0x4ab082, _0x401d43);
            }, _0x40b80d['runCallLat' + 'er'] = function (_0x37b4b2, _0x2ac921) {
                _0x53e0be['I']['runCallLat' + 'er'](_0x37b4b2, _0x2ac921);
            }, _0x40b80d['runTimer'] = function (_0x14adef, _0x55eb01) {
                var _0x2ddfe7 = this['_getHandle' + 'r'](_0x14adef, _0x55eb01);
                _0x2ddfe7 && null != _0x2ddfe7['method'] && (this['_map'][_0x2ddfe7['key']] = null, _0x2ddfe7['run'](!0x0));
            }, _0x40b80d['pause'] = function () {
                this['scale'] = 0x0;
            }, _0x40b80d['resume'] = function () {
                this['scale'] = 0x1;
            }, _0x71e09a(0x0, _0x40b80d, 'delta', function () {
                return this['_delta'];
            }), _0x570393['_pool'] = [], _0x570393['_mid'] = 0x1, _0x570393['__init$'] = function () {
                _0x262100 = function () {
                    function _0x1bf2e8() {
                        this['key'] = 0x0, this['repeat'] = !0x1, this['delay'] = 0x0, this['userFrame'] = !0x1, this['exeTime'] = 0x0, this['caller'] = null, this['method'] = null, this['args'] = null, this['jumpFrame'] = !0x1;
                    }
                    _0x4621f4(_0x1bf2e8, '');
                    var _0x8af25d = _0x1bf2e8['prototype'];
                    return _0x8af25d['clear'] = function () {
                        this['caller'] = null, this['method'] = null, this['args'] = null;
                    }, _0x8af25d['run'] = function (_0x432f25) {
                        var _0x16aa0e = this['caller'];
                        if (_0x16aa0e && _0x16aa0e['destroyed'])
                            return this['clear']();
                        var _0x4a5cab = this['method'], _0x6f6bc0 = this['args'];
                        _0x432f25 && this['clear'](), null != _0x4a5cab && (_0x6f6bc0 ? _0x4a5cab['apply'](_0x16aa0e, _0x6f6bc0) : _0x4a5cab['call'](_0x16aa0e));
                    }, _0x1bf2e8;
                }();
            }, _0x570393;
        }(), _0x20fc0b = function () {
            function _0x4aef9e() {
            }
            _0x4621f4(_0x4aef9e, 'laya.displ' + 'ay.cmd.Fil' + 'lBorderTex' + 'tCmd');
            var _0x38e852 = _0x4aef9e['prototype'];
            return _0x38e852['recover'] = function () {
                _0x2249dd['recover']('FillBorder' + 'TextCmd', this);
            }, _0x38e852['run'] = function (_0x15e202, _0x536256, _0x1bfaf8) {
                _0x15e202['fillBorder' + 'Text'](this['text'], this['x'] + _0x536256, this['y'] + _0x1bfaf8, this['font'], this['fillColor'], this['borderColo' + 'r'], this['lineWidth'], this['textAlign']);
            }, _0x71e09a(0x0, _0x38e852, 'cmdID', function () {
                return 'FillBorder' + 'Text';
            }), _0x4aef9e['create'] = function (_0xc83021, _0x494a4d, _0x101d3d, _0x5ec9be, _0x2b0bb3, _0x1f3dcc, _0x5b12b8, _0x16f245) {
                var _0x511392 = _0x2249dd['getItemByC' + 'lass']('FillBorder' + 'TextCmd', _0x4aef9e);
                return _0x511392['text'] = _0xc83021, _0x511392['x'] = _0x494a4d, _0x511392['y'] = _0x101d3d, _0x511392['font'] = _0x5ec9be, _0x511392['fillColor'] = _0x2b0bb3, _0x511392['borderColo' + 'r'] = _0x1f3dcc, _0x511392['lineWidth'] = _0x5b12b8, _0x511392['textAlign'] = _0x16f245, _0x511392;
            }, _0x4aef9e['ID'] = 'FillBorder' + 'Text', _0x4aef9e;
        }(), _0x3ccdc1 = function () {
            function _0x3b4ae2() {
            }
            _0x4621f4(_0x3b4ae2, 'laya.displ' + 'ay.cmd.Fil' + 'lTextureCm' + 'd');
            var _0x47c4c7 = _0x3b4ae2['prototype'];
            return _0x47c4c7['recover'] = function () {
                this['texture'] = null, this['offset'] = null, this['other'] = null, _0x2249dd['recover']('FillTextur' + 'eCmd', this);
            }, _0x47c4c7['run'] = function (_0x1f4080, _0x59adfb, _0x37ade8) {
                _0x1f4080['fillTextur' + 'e'](this['texture'], this['x'] + _0x59adfb, this['y'] + _0x37ade8, this['width'], this['height'], this['type'], this['offset'], this['other']);
            }, _0x71e09a(0x0, _0x47c4c7, 'cmdID', function () {
                return 'FillTextur' + 'e';
            }), _0x3b4ae2['create'] = function (_0x547e35, _0x185d11, _0x461017, _0x251a86, _0x190126, _0xc00284, _0x3050b6, _0x5930c1) {
                var _0x8fadca = _0x2249dd['getItemByC' + 'lass']('FillTextur' + 'eCmd', _0x3b4ae2);
                return _0x8fadca['texture'] = _0x547e35, _0x8fadca['x'] = _0x185d11, _0x8fadca['y'] = _0x461017, _0x8fadca['width'] = _0x251a86, _0x8fadca['height'] = _0x190126, _0x8fadca['type'] = _0xc00284, _0x8fadca['offset'] = _0x3050b6, _0x8fadca['other'] = _0x5930c1, _0x8fadca;
            }, _0x3b4ae2['ID'] = 'FillTextur' + 'e', _0x3b4ae2;
        }(), _0x13a123 = function () {
            function _0x93f483() {
            }
            _0x4621f4(_0x93f483, 'laya.displ' + 'ay.cmd.Fil' + 'lBorderWor' + 'dsCmd');
            var _0x2a7e2a = _0x93f483['prototype'];
            return _0x2a7e2a['recover'] = function () {
                this['words'] = null, _0x2249dd['recover']('FillBorder' + 'WordsCmd', this);
            }, _0x2a7e2a['run'] = function (_0x1586d8, _0x58566b, _0x1c4579) {
                _0x1586d8['fillBorder' + 'Words'](this['words'], this['x'] + _0x58566b, this['y'] + _0x1c4579, this['font'], this['fillColor'], this['borderColo' + 'r'], this['lineWidth']);
            }, _0x71e09a(0x0, _0x2a7e2a, 'cmdID', function () {
                return 'FillBorder' + 'Words';
            }), _0x93f483['create'] = function (_0x30fe1e, _0x3beaa3, _0x453ff1, _0x217c84, _0x1e19ab, _0x2a1b2c, _0x57d83e) {
                var _0x27cff2 = _0x2249dd['getItemByC' + 'lass']('FillBorder' + 'WordsCmd', _0x93f483);
                return _0x27cff2['words'] = _0x30fe1e, _0x27cff2['x'] = _0x3beaa3, _0x27cff2['y'] = _0x453ff1, _0x27cff2['font'] = _0x217c84, _0x27cff2['fillColor'] = _0x1e19ab, _0x27cff2['borderColo' + 'r'] = _0x2a1b2c, _0x27cff2['lineWidth'] = _0x57d83e, _0x27cff2;
            }, _0x93f483['ID'] = 'FillBorder' + 'Words', _0x93f483;
        }(), _0x4fec79 = function () {
            function _0x52af7b(_0x4465e2, _0x1331ea) {
                function _0x8c0e7d(_0xf54f8f) {
                    _0x34a895['stage']['_loop'](), _0x2ad6c5['window']['requestAni' + 'mationFram' + 'e'](_0x8c0e7d);
                }
                this['_timeId'] = 0x0, _0x52af7b['_mainCanva' + 's']['source']['id'] = 'layaCanvas', _0x52af7b['_mainCanva' + 's']['source']['width'] = _0x4465e2, _0x52af7b['_mainCanva' + 's']['source']['height'] = _0x1331ea, laya['renders']['Render']['isConchApp'] ? _0x2ad6c5['document']['body']['appendChil' + 'd'](_0x52af7b['_mainCanva' + 's']['source']) : _0x2ad6c5['container']['appendChil' + 'd'](_0x52af7b['_mainCanva' + 's']['source']), _0x552e50['initRender'](_0x52af7b['_mainCanva' + 's'], _0x4465e2, _0x1331ea), _0x2ad6c5['window']['requestAni' + 'mationFram' + 'e'](_0x8c0e7d), _0x34a895['stage']['on']('visibility' + 'change', this, this['_onVisibil' + 'itychange']);
            }
            _0x4621f4(_0x52af7b, 'laya.rende' + 'rs.Render');
            var _0x3960d3 = _0x52af7b['prototype'];
            return _0x3960d3['_onVisibil' + 'itychange'] = function () {
                _0x34a895['stage']['isVisibili' + 'ty'] ? 0x0 != this['_timeId'] && _0x2ad6c5['window']['clearInter' + 'val'](this['_timeId']) : this['_timeId'] = _0x2ad6c5['window']['setInterva' + 'l'](this['_enterFram' + 'e'], 0x3e8);
            }, _0x3960d3['_enterFram' + 'e'] = function (_0x50ef06) {
                _0x34a895['stage']['_loop']();
            }, _0x71e09a(0x1, _0x52af7b, 'context', function () {
                return _0x52af7b['_context'];
            }), _0x71e09a(0x1, _0x52af7b, 'canvas', function () {
                return _0x52af7b['_mainCanva' + 's']['source'];
            }), _0x52af7b['_context'] = null, _0x52af7b['_mainCanva' + 's'] = null, _0x52af7b['isWebGL'] = !0x1, _0x52af7b['is3DMode'] = !0x1, _0x5043ef(_0x52af7b, [
                'isConchApp',
                function () {
                    return this['isConchApp'] = null != _0xd373d9['conch'];
                }
            ]), _0x52af7b;
        }(), _0x3f4349 = (function () {
            function _0x153d88() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['texture'] = null, this['x'] = NaN, this['y'] = NaN, this['width'] = NaN, this['height'] = NaN;
            }
            _0x4621f4(_0x153d88, 'laya.displ' + 'ay.cmd.Dra' + 'wCanvasCmd');
            var _0x184676 = _0x153d88['prototype'];
            return _0x184676['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, _0x2249dd['recover']('DrawCanvas' + 'Cmd', this);
            }, _0x71e09a(0x0, _0x184676, 'cmdID', function () {
                return 'DrawCanvas' + 'Cmd';
            }), _0x153d88['create'] = function (_0x1ecbfa, _0x2f0368, _0x4f8c8c, _0x3a3e43, _0xdaa830) {
                return null;
            }, _0x153d88['ID'] = 'DrawCanvas' + 'Cmd', _0x153d88['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_'] = null, _0x153d88['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0x153d88['_PARAM_VB_' + 'POS_'] = 0x5, _0x153d88;
        }(), function () {
            function _0x2a623a() {
            }
            _0x4621f4(_0x2a623a, 'laya.resou' + 'rce.Contex' + 't');
            var _0x3c7992 = _0x2a623a['prototype'];
            return _0x3c7992['drawCanvas'] = function (_0x2f4349, _0x14a5b1, _0x59cc10, _0x39d396, _0x47022e) {
                _0x2973e9['renderBatc' + 'h']++, this['drawImage'](_0x2f4349['_source'], _0x14a5b1, _0x59cc10, _0x39d396, _0x47022e);
            }, _0x3c7992['_drawRect'] = function (_0x22c273, _0x206500, _0x2c6aa6, _0x48a6a5, _0x23ae3a) {
                _0x2973e9['renderBatc' + 'h']++, _0x23ae3a && (this['fillStyle'] = _0x23ae3a), this['fillRect'](_0x22c273, _0x206500, _0x2c6aa6, _0x48a6a5);
            }, _0x3c7992['drawText'] = function (_0x4665a9, _0x34ec6c, _0x3c0429, _0x53e1a4, _0x126259, _0x3ee8f3) {
                _0x2973e9['renderBatc' + 'h']++, arguments['length'] > 0x3 && null != _0x53e1a4 && (this['font'] = _0x53e1a4, this['fillStyle'] = _0x126259, this['textAlign'] = _0x3ee8f3, this['textBaseli' + 'ne'] = 'top'), this['fillText'](_0x4665a9, _0x34ec6c, _0x3c0429);
            }, _0x3c7992['fillBorder' + 'Text'] = function (_0x1c1586, _0x46615c, _0x39ac6b, _0x1c5ca5, _0x2d4c5c, _0x4d33a5, _0x59d1d7, _0x14f477) {
                _0x2973e9['renderBatc' + 'h']++, this['font'] = _0x1c5ca5, this['fillStyle'] = _0x2d4c5c, this['textBaseli' + 'ne'] = 'top', this['strokeStyl' + 'e'] = _0x4d33a5, this['lineWidth'] = _0x59d1d7, this['textAlign'] = _0x14f477, this['strokeText'](_0x1c1586, _0x46615c, _0x39ac6b), this['fillText'](_0x1c1586, _0x46615c, _0x39ac6b);
            }, _0x3c7992['fillWords'] = function (_0x13eb83, _0x27f090, _0x452c43, _0x4fea08, _0x1248de) {
                _0x4fea08 && (this['font'] = _0x4fea08), _0x1248de && (this['fillStyle'] = _0x1248de), this['textBaseli' + 'ne'] = 'top', this['textAlign'] = 'left';
                for (var _0x53f85c = 0x0, _0x52e750 = _0x13eb83['length']; _0x52e750 > _0x53f85c; _0x53f85c++) {
                    var _0x34b226 = _0x13eb83[_0x53f85c];
                    this['fillText'](_0x34b226['char'], _0x34b226['x'] + _0x27f090, _0x34b226['y'] + _0x452c43);
                }
            }, _0x3c7992['fillBorder' + 'Words'] = function (_0xae0447, _0x6bce6f, _0x13a4b5, _0x297cf9, _0x24330a, _0x4b4e27, _0xfa4f40) {
                _0x297cf9 && (this['font'] = _0x297cf9), _0x24330a && (this['fillStyle'] = _0x24330a), this['textBaseli' + 'ne'] = 'top', this['lineWidth'] = _0xfa4f40, this['textAlign'] = 'left', this['strokeStyl' + 'e'] = _0x4b4e27;
                for (var _0x484590 = 0x0, _0x1b6528 = _0xae0447['length']; _0x1b6528 > _0x484590; _0x484590++) {
                    var _0x4a73c8 = _0xae0447[_0x484590];
                    this['strokeText'](_0x4a73c8['char'], _0x4a73c8['x'] + _0x6bce6f, _0x4a73c8['y'] + _0x13a4b5), this['fillText'](_0x4a73c8['char'], _0x4a73c8['x'] + _0x6bce6f, _0x4a73c8['y'] + _0x13a4b5);
                }
            }, _0x3c7992['strokeWord'] = function (_0x49a209, _0x4669af, _0x1a8dc9, _0x183b07, _0xa9fb8f, _0x487c70, _0x4504b4) {
                _0x2973e9['renderBatc' + 'h']++, arguments['length'] > 0x3 && null != _0x183b07 && (this['font'] = _0x183b07, this['strokeStyl' + 'e'] = _0xa9fb8f, this['lineWidth'] = _0x487c70, this['textAlign'] = _0x4504b4, this['textBaseli' + 'ne'] = 'top'), this['strokeText'](_0x49a209, _0x4669af, _0x1a8dc9);
            }, _0x3c7992['setTransfo' + 'rmByMatrix'] = function (_0x4b4d43) {
                this['setTransfo' + 'rm'](_0x4b4d43['a'], _0x4b4d43['b'], _0x4b4d43['c'], _0x4b4d43['d'], _0x4b4d43['tx'], _0x4b4d43['ty']);
            }, _0x3c7992['clipRect'] = function (_0x31ca74, _0x4fe2a0, _0x45acfb, _0x385aa7) {
                _0x2973e9['renderBatc' + 'h']++, this['beginPath'](), this['rect'](_0x31ca74, _0x4fe2a0, _0x45acfb, _0x385aa7), this['clip']();
            }, _0x3c7992['drawTextur' + 'eWithTrans' + 'form'] = function (_0x2ca2ee, _0x5b614f, _0x140c3b, _0x5731e4, _0x48749b, _0x1cb0ef, _0x5b0eed, _0x39d706, _0x3cb9e4, _0x5c29de, _0x27b6d) {
                if (_0x2ca2ee['_getSource']()) {
                    _0x2973e9['renderBatc' + 'h']++;
                    var _0x3a3e03 = 0x1 !== _0x3cb9e4;
                    if (_0x3a3e03) {
                        var _0x44628d = this['globalAlph' + 'a'];
                        this['globalAlph' + 'a'] *= _0x3cb9e4;
                    }
                    _0x5c29de && (this['globalComp' + 'ositeOpera' + 'tion'] = _0x5c29de);
                    var _0x3f8b4f = _0x2ca2ee['uv'], _0x41eca7 = _0x2ca2ee['bitmap']['_width'], _0x5a8237 = _0x2ca2ee['bitmap']['_height'];
                    _0x1cb0ef ? (this['save'](), this['transform'](_0x1cb0ef['a'], _0x1cb0ef['b'], _0x1cb0ef['c'], _0x1cb0ef['d'], _0x1cb0ef['tx'] + _0x5b0eed, _0x1cb0ef['ty'] + _0x39d706), this['drawImage'](_0x2ca2ee['bitmap']['_source'], _0x3f8b4f[0x0] * _0x41eca7, _0x3f8b4f[0x1] * _0x5a8237, (_0x3f8b4f[0x2] - _0x3f8b4f[0x0]) * _0x41eca7, (_0x3f8b4f[0x5] - _0x3f8b4f[0x3]) * _0x5a8237, _0x5b614f, _0x140c3b, _0x5731e4, _0x48749b), this['restore']()) : this['drawImage'](_0x2ca2ee['bitmap']['_source'], _0x3f8b4f[0x0] * _0x41eca7, _0x3f8b4f[0x1] * _0x5a8237, (_0x3f8b4f[0x2] - _0x3f8b4f[0x0]) * _0x41eca7, (_0x3f8b4f[0x5] - _0x3f8b4f[0x3]) * _0x5a8237, _0x5b0eed + _0x5b614f, _0x39d706 + _0x140c3b, _0x5731e4, _0x48749b), _0x3a3e03 && (this['globalAlph' + 'a'] = _0x44628d), _0x5c29de && (this['globalComp' + 'ositeOpera' + 'tion'] = 'source-ove' + 'r');
                }
            }, _0x3c7992['drawTextur' + 'e2'] = function (_0x4cfb35, _0x5d230b, _0x3f289d, _0x4de605, _0x51c342, _0x48f7c3) {
                var _0x200c2b = _0x48f7c3[0x0];
                _0x2973e9['renderBatc' + 'h']++;
                var _0x29e864 = _0x200c2b['uv'], _0x3a5f29 = _0x200c2b['bitmap']['_width'], _0x1a01e4 = _0x200c2b['bitmap']['_height'];
                _0x51c342 ? (this['save'](), this['transform'](_0x51c342['a'], _0x51c342['b'], _0x51c342['c'], _0x51c342['d'], _0x51c342['tx'] + _0x4cfb35, _0x51c342['ty'] + _0x5d230b), this['drawImage'](_0x200c2b['bitmap']['_source'], _0x29e864[0x0] * _0x3a5f29, _0x29e864[0x1] * _0x1a01e4, (_0x29e864[0x2] - _0x29e864[0x0]) * _0x3a5f29, (_0x29e864[0x5] - _0x29e864[0x3]) * _0x1a01e4, _0x48f7c3[0x1] - _0x3f289d, _0x48f7c3[0x2] - _0x4de605, _0x48f7c3[0x3], _0x48f7c3[0x4]), this['restore']()) : this['drawImage'](_0x200c2b['bitmap']['_source'], _0x29e864[0x0] * _0x3a5f29, _0x29e864[0x1] * _0x1a01e4, (_0x29e864[0x2] - _0x29e864[0x0]) * _0x3a5f29, (_0x29e864[0x5] - _0x29e864[0x3]) * _0x1a01e4, _0x48f7c3[0x1] - _0x3f289d + _0x4cfb35, _0x48f7c3[0x2] - _0x4de605 + _0x5d230b, _0x48f7c3[0x3], _0x48f7c3[0x4]);
            }, _0x3c7992['fillTextur' + 'e'] = function (_0x29d4c0, _0x2bcc57, _0x34627b, _0x56219c, _0xc15292, _0xf1e5c7, _0x1e69f2, _0x3ebfd3) {
                if (!_0x3ebfd3['pat']) {
                    if (_0x29d4c0['uv'] != _0x49c097['DEF_UV']) {
                        var _0x3c5b7a = new _0x50a1b2();
                        _0x3c5b7a['getContext']('2d'), _0x3c5b7a['size'](_0x29d4c0['width'], _0x29d4c0['height']), _0x3c5b7a['context']['drawTextur' + 'e'](_0x29d4c0, 0x0, 0x0, _0x29d4c0['width'], _0x29d4c0['height']), _0x29d4c0 = new _0x49c097(_0x3c5b7a);
                    }
                    _0x3ebfd3['pat'] = this['createPatt' + 'ern'](_0x29d4c0['bitmap']['_source'], _0xf1e5c7);
                }
                var _0x2d95ad = _0x2bcc57, _0x328e68 = _0x34627b, _0x432764 = 0x0, _0x34c80d = 0x0;
                _0x1e69f2 && (_0x2d95ad += _0x1e69f2['x'] % _0x29d4c0['width'], _0x328e68 += _0x1e69f2['y'] % _0x29d4c0['height'], _0x432764 -= _0x1e69f2['x'] % _0x29d4c0['width'], _0x34c80d -= _0x1e69f2['y'] % _0x29d4c0['height']), this['translate'](_0x2d95ad, _0x328e68), this['_drawRect'](_0x432764, _0x34c80d, _0x56219c, _0xc15292, _0x3ebfd3['pat']), this['translate'](-_0x2d95ad, -_0x328e68);
            }, _0x3c7992['flush'] = function () {
                return 0x0;
            }, _0x3c7992['destroy'] = function () {
                this['canvas']['width'] = this['canvas']['height'] = 0x0;
            }, _0x3c7992['clear'] = function () {
                _0x4fec79['isConchApp'] || this['clearRect'](0x0, 0x0, _0x4fec79['_mainCanva' + 's']['width'], _0x4fec79['_mainCanva' + 's']['height']);
            }, _0x3c7992['drawTriang' + 'le'] = function (_0x1f1e33, _0x451dc7, _0x8297ad, _0x5b6ac0, _0x29bec0, _0x24f5a8, _0x54b3eb, _0x37d3b1) {
                var _0x1dbf7c = _0x1f1e33['bitmap'], _0x131996 = _0x1dbf7c['_getSource'](), _0x3ffd69 = _0x1f1e33['width'], _0x25d278 = _0x1f1e33['height'], _0x52e3e2 = _0x1dbf7c['width'], _0x2c0e91 = _0x1dbf7c['height'], _0x273913 = _0x8297ad[_0x5b6ac0] * _0x52e3e2, _0x541f61 = _0x8297ad[_0x29bec0] * _0x52e3e2, _0x3e7c7b = _0x8297ad[_0x24f5a8] * _0x52e3e2, _0x2b46e3 = _0x8297ad[_0x5b6ac0 + 0x1] * _0x2c0e91, _0x58d3c9 = _0x8297ad[_0x29bec0 + 0x1] * _0x2c0e91, _0x2559aa = _0x8297ad[_0x24f5a8 + 0x1] * _0x2c0e91, _0x201bc3 = _0x451dc7[_0x5b6ac0], _0x540afe = _0x451dc7[_0x29bec0], _0xf2da61 = _0x451dc7[_0x24f5a8], _0x1d0b92 = _0x451dc7[_0x5b6ac0 + 0x1], _0x5332e4 = _0x451dc7[_0x29bec0 + 0x1], _0x5f007d = _0x451dc7[_0x24f5a8 + 0x1];
                if (_0x37d3b1) {
                    var _0x1b0980 = 0x1, _0x1ee9e0 = 0x1, _0x1a4bf8 = (_0x201bc3 + _0x540afe + _0xf2da61) / 0x3, _0x31c3b8 = (_0x1d0b92 + _0x5332e4 + _0x5f007d) / 0x3, _0x3da33e = _0x201bc3 - _0x1a4bf8, _0x342587 = _0x1d0b92 - _0x31c3b8, _0x1fb5af = Math['sqrt'](_0x3da33e * _0x3da33e + _0x342587 * _0x342587);
                    _0x201bc3 = _0x1a4bf8 + _0x3da33e / _0x1fb5af * (_0x1fb5af + _0x1b0980), _0x1d0b92 = _0x31c3b8 + _0x342587 / _0x1fb5af * (_0x1fb5af + _0x1ee9e0), _0x3da33e = _0x540afe - _0x1a4bf8, _0x342587 = _0x5332e4 - _0x31c3b8, _0x1fb5af = Math['sqrt'](_0x3da33e * _0x3da33e + _0x342587 * _0x342587), _0x540afe = _0x1a4bf8 + _0x3da33e / _0x1fb5af * (_0x1fb5af + _0x1b0980), _0x5332e4 = _0x31c3b8 + _0x342587 / _0x1fb5af * (_0x1fb5af + _0x1ee9e0), _0x3da33e = _0xf2da61 - _0x1a4bf8, _0x342587 = _0x5f007d - _0x31c3b8, _0x1fb5af = Math['sqrt'](_0x3da33e * _0x3da33e + _0x342587 * _0x342587), _0xf2da61 = _0x1a4bf8 + _0x3da33e / _0x1fb5af * (_0x1fb5af + _0x1b0980), _0x5f007d = _0x31c3b8 + _0x342587 / _0x1fb5af * (_0x1fb5af + _0x1ee9e0);
                }
                this['save'](), _0x54b3eb && this['transform'](_0x54b3eb['a'], _0x54b3eb['b'], _0x54b3eb['c'], _0x54b3eb['d'], _0x54b3eb['tx'], _0x54b3eb['ty']), this['beginPath'](), this['moveTo'](_0x201bc3, _0x1d0b92), this['lineTo'](_0x540afe, _0x5332e4), this['lineTo'](_0xf2da61, _0x5f007d), this['closePath'](), this['clip']();
                var _0xea9701 = _0x273913 * _0x58d3c9 + _0x2b46e3 * _0x3e7c7b + _0x541f61 * _0x2559aa - _0x58d3c9 * _0x3e7c7b - _0x2b46e3 * _0x541f61 - _0x273913 * _0x2559aa, _0x163ea8 = 0x1 / _0xea9701, _0x37f9a3 = _0x201bc3 * _0x58d3c9 + _0x2b46e3 * _0xf2da61 + _0x540afe * _0x2559aa - _0x58d3c9 * _0xf2da61 - _0x2b46e3 * _0x540afe - _0x201bc3 * _0x2559aa, _0x1f27b8 = _0x273913 * _0x540afe + _0x201bc3 * _0x3e7c7b + _0x541f61 * _0xf2da61 - _0x540afe * _0x3e7c7b - _0x201bc3 * _0x541f61 - _0x273913 * _0xf2da61, _0x31e7f8 = _0x273913 * _0x58d3c9 * _0xf2da61 + _0x2b46e3 * _0x540afe * _0x3e7c7b + _0x201bc3 * _0x541f61 * _0x2559aa - _0x201bc3 * _0x58d3c9 * _0x3e7c7b - _0x2b46e3 * _0x541f61 * _0xf2da61 - _0x273913 * _0x540afe * _0x2559aa, _0xca3a5b = _0x1d0b92 * _0x58d3c9 + _0x2b46e3 * _0x5f007d + _0x5332e4 * _0x2559aa - _0x58d3c9 * _0x5f007d - _0x2b46e3 * _0x5332e4 - _0x1d0b92 * _0x2559aa, _0x502f56 = _0x273913 * _0x5332e4 + _0x1d0b92 * _0x3e7c7b + _0x541f61 * _0x5f007d - _0x5332e4 * _0x3e7c7b - _0x1d0b92 * _0x541f61 - _0x273913 * _0x5f007d, _0x426f91 = _0x273913 * _0x58d3c9 * _0x5f007d + _0x2b46e3 * _0x5332e4 * _0x3e7c7b + _0x1d0b92 * _0x541f61 * _0x2559aa - _0x1d0b92 * _0x58d3c9 * _0x3e7c7b - _0x2b46e3 * _0x541f61 * _0x5f007d - _0x273913 * _0x5332e4 * _0x2559aa;
                this['transform'](_0x37f9a3 * _0x163ea8, _0xca3a5b * _0x163ea8, _0x1f27b8 * _0x163ea8, _0x502f56 * _0x163ea8, _0x31e7f8 * _0x163ea8, _0x426f91 * _0x163ea8), this['drawImage'](_0x131996, _0x1f1e33['uv'][0x0] * _0x52e3e2, _0x1f1e33['uv'][0x1] * _0x2c0e91, _0x3ffd69, _0x25d278, _0x1f1e33['uv'][0x0] * _0x52e3e2, _0x1f1e33['uv'][0x1] * _0x2c0e91, _0x3ffd69, _0x25d278), this['restore']();
            }, _0x3c7992['transformB' + 'yMatrix'] = function (_0x22d2ed, _0x511def, _0x54a7da) {
                this['transform'](_0x22d2ed['a'], _0x22d2ed['b'], _0x22d2ed['c'], _0x22d2ed['d'], _0x22d2ed['tx'] + _0x511def, _0x22d2ed['ty'] + _0x54a7da);
            }, _0x3c7992['saveTransf' + 'orm'] = function (_0x429659) {
                this['save']();
            }, _0x3c7992['restoreTra' + 'nsform'] = function (_0x2f9195) {
                this['restore']();
            }, _0x3c7992['drawRect'] = function (_0x4fa5ac, _0x4c7469, _0x5cda24, _0x2f553b, _0x2fe26a, _0x5bd0e7, _0x49c5a1) {
                var _0x55c58c = this;
                null != _0x2fe26a && (_0x55c58c['fillStyle'] = _0x2fe26a, _0x55c58c['fillRect'](_0x4fa5ac, _0x4c7469, _0x5cda24, _0x2f553b)), null != _0x5bd0e7 && (_0x55c58c['strokeStyl' + 'e'] = _0x5bd0e7, _0x55c58c['lineWidth'] = _0x49c5a1, _0x55c58c['strokeRect'](_0x4fa5ac, _0x4c7469, _0x5cda24, _0x2f553b));
            }, _0x3c7992['drawTextur' + 'e'] = function (_0x410626, _0x527ca6, _0x1160c1, _0x1ff688, _0x4e7a1b) {
                var _0x48eb5f = _0x410626['_getSource']();
                if (_0x48eb5f) {
                    _0x2973e9['renderBatc' + 'h']++;
                    var _0x1d5857 = _0x410626['uv'], _0x1ab671 = _0x410626['bitmap']['width'], _0x3432ff = _0x410626['bitmap']['height'];
                    this['drawImage'](_0x48eb5f, _0x1d5857[0x0] * _0x1ab671, _0x1d5857[0x1] * _0x3432ff, (_0x1d5857[0x2] - _0x1d5857[0x0]) * _0x1ab671, (_0x1d5857[0x5] - _0x1d5857[0x3]) * _0x3432ff, _0x527ca6, _0x1160c1, _0x1ff688, _0x4e7a1b);
                }
            }, _0x3c7992['drawTextur' + 'es'] = function (_0x285d76, _0x444f71, _0x2ab53a, _0x37e568) {
                _0x2973e9['renderBatc' + 'h'] += _0x444f71['length'] / 0x2;
                for (var _0x585d78 = _0x285d76['width'], _0x216067 = _0x285d76['height'], _0x33eb60 = 0x0, _0x5e8142 = _0x444f71['length']; _0x5e8142 > _0x33eb60; _0x33eb60 += 0x2)
                    this['drawTextur' + 'e'](_0x285d76, _0x444f71[_0x33eb60] + _0x2ab53a, _0x444f71[_0x33eb60 + 0x1] + _0x37e568, _0x585d78, _0x216067);
            }, _0x3c7992['drawTriang' + 'les'] = function (_0x571d87, _0x58a8c7, _0xf51e5f, _0x5f14d9, _0x438b03, _0x3a3358, _0x2fcbda, _0x2cbbfc, _0x398336, _0x4b7391) {
                var _0x12ff20 = 0x0, _0x3d8b0d = _0x3a3358['length'];
                for (this['translate'](_0x58a8c7, _0xf51e5f), _0x12ff20 = 0x0; _0x3d8b0d > _0x12ff20; _0x12ff20 += 0x3) {
                    var _0x1dc9e3 = 0x2 * _0x3a3358[_0x12ff20], _0x2a6151 = 0x2 * _0x3a3358[_0x12ff20 + 0x1], _0x125180 = 0x2 * _0x3a3358[_0x12ff20 + 0x2];
                    this['drawTriang' + 'le'](_0x571d87, _0x5f14d9, _0x438b03, _0x1dc9e3, _0x2a6151, _0x125180, _0x2fcbda, !0x0);
                }
                this['translate'](-_0x58a8c7, -_0xf51e5f);
            }, _0x3c7992['alpha'] = function (_0x3a00d1) {
                this['globalAlph' + 'a'] *= _0x3a00d1;
            }, _0x3c7992['_transform'] = function (_0x3ecb29, _0x2064ef, _0x55ff58) {
                this['translate'](_0x2064ef, _0x55ff58), this['transform'](_0x3ecb29['a'], _0x3ecb29['b'], _0x3ecb29['c'], _0x3ecb29['d'], _0x3ecb29['tx'], _0x3ecb29['ty']), this['translate'](-_0x2064ef, -_0x55ff58);
            }, _0x3c7992['_rotate'] = function (_0x3e1afb, _0x5bc2b2, _0x59fdec) {
                this['translate'](_0x5bc2b2, _0x59fdec), this['rotate'](_0x3e1afb), this['translate'](-_0x5bc2b2, -_0x59fdec);
            }, _0x3c7992['_scale'] = function (_0x4f6cd7, _0x1aa00a, _0x4be494, _0x3b9643) {
                this['translate'](_0x4be494, _0x3b9643), this['scale'](_0x4f6cd7, _0x1aa00a), this['translate'](-_0x4be494, -_0x3b9643);
            }, _0x3c7992['_drawLine'] = function (_0x3934b7, _0x12b868, _0x2c5667, _0x29a9f1, _0xefcd1, _0x544773, _0x17db59, _0x5b960c, _0x110901) {
                this['beginPath'](), this['strokeStyl' + 'e'] = _0x17db59, this['lineWidth'] = _0x5b960c, this['moveTo'](_0x3934b7 + _0x2c5667, _0x12b868 + _0x29a9f1), this['lineTo'](_0x3934b7 + _0xefcd1, _0x12b868 + _0x544773), this['stroke']();
            }, _0x3c7992['_drawLines'] = function (_0xfbeabc, _0x16dc00, _0x363ef0, _0x5ea8dd, _0x125f77, _0x2d7852) {
                _0x4fec79['isWebGL'] && this['setPathId'](_0x2d7852), this['beginPath'](), this['strokeStyl' + 'e'] = _0x5ea8dd, this['lineWidth'] = _0x125f77;
                var _0x2b3bf2 = 0x2, _0x7f3967 = _0x363ef0['length'];
                if (_0x4fec79['isWebGL'])
                    this['addPath'](_0x363ef0['slice'](), !0x1, !0x1, _0xfbeabc, _0x16dc00);
                else {
                    for (this['moveTo'](_0xfbeabc + _0x363ef0[0x0], _0x16dc00 + _0x363ef0[0x1]); _0x7f3967 > _0x2b3bf2;)
                        this['lineTo'](_0xfbeabc + _0x363ef0[_0x2b3bf2++], _0x16dc00 + _0x363ef0[_0x2b3bf2++]);
                }
                this['stroke']();
            }, _0x3c7992['drawCurves'] = function (_0xc3c3c9, _0x43eeac, _0x4083d2, _0x284891, _0x25d06d) {
                this['beginPath'](), this['strokeStyl' + 'e'] = _0x284891, this['lineWidth'] = _0x25d06d, this['moveTo'](_0xc3c3c9 + _0x4083d2[0x0], _0x43eeac + _0x4083d2[0x1]);
                for (var _0x5d9aee = 0x2, _0x45c001 = _0x4083d2['length']; _0x45c001 > _0x5d9aee;)
                    this['quadraticC' + 'urveTo'](_0xc3c3c9 + _0x4083d2[_0x5d9aee++], _0x43eeac + _0x4083d2[_0x5d9aee++], _0xc3c3c9 + _0x4083d2[_0x5d9aee++], _0x43eeac + _0x4083d2[_0x5d9aee++]);
                this['stroke']();
            }, _0x3c7992['_fillAndSt' + 'roke'] = function (_0x34bf1a, _0x4ecb1d, _0x54a865, _0x4c0d32) {
                void 0x0 === _0x4c0d32 && (_0x4c0d32 = !0x1), null != _0x34bf1a && (this['fillStyle'] = _0x34bf1a, this['fill']()), null != _0x4ecb1d && _0x54a865 > 0x0 && (this['strokeStyl' + 'e'] = _0x4ecb1d, this['lineWidth'] = _0x54a865, this['stroke']());
            }, _0x3c7992['_drawCircl' + 'e'] = function (_0x48acfc, _0x283769, _0x3f36c2, _0x5c4ca0, _0xe14d2d, _0x4a33f9, _0x5200a9) {
                _0x2973e9['renderBatc' + 'h']++, _0x4fec79['isWebGL'] ? this['beginPath'](!0x0) : this['beginPath'](), this['arc'](_0x48acfc, _0x283769, _0x3f36c2, 0x0, _0x2a623a['PI2']), this['closePath'](), this['_fillAndSt' + 'roke'](_0x5c4ca0, _0xe14d2d, _0x4a33f9);
            }, _0x3c7992['_drawPie'] = function (_0x1a0177, _0x2c3b56, _0xf6ad07, _0x49ca9f, _0xcc3f13, _0x3c38fa, _0x306353, _0x5b3ca5, _0x11aabb) {
                this['beginPath'](), this['moveTo'](_0x1a0177, _0x2c3b56), this['arc'](_0x1a0177, _0x2c3b56, _0xf6ad07, _0x49ca9f, _0xcc3f13), this['closePath'](), this['_fillAndSt' + 'roke'](_0x3c38fa, _0x306353, _0x5b3ca5);
            }, _0x3c7992['_drawPoly'] = function (_0x12a8b0, _0x2426fd, _0x1309ee, _0x32c173, _0x1cd333, _0x2f8546, _0x23e1bd, _0x2ea064) {
                var _0x44a0ac = 0x2, _0x3f5e97 = _0x1309ee['length'];
                if (this['beginPath'](), _0x4fec79['isWebGL'])
                    this['setPathId'](_0x2ea064), this['addPath'](_0x1309ee['slice'](), !0x0, _0x23e1bd, _0x12a8b0, _0x2426fd);
                else {
                    for (this['moveTo'](_0x12a8b0 + _0x1309ee[0x0], _0x2426fd + _0x1309ee[0x1]); _0x3f5e97 > _0x44a0ac;)
                        this['lineTo'](_0x12a8b0 + _0x1309ee[_0x44a0ac++], _0x2426fd + _0x1309ee[_0x44a0ac++]);
                }
                this['closePath'](), this['_fillAndSt' + 'roke'](_0x32c173, _0x1cd333, _0x2f8546, _0x23e1bd);
            }, _0x3c7992['_drawPath'] = function (_0x2509ae, _0x400bd8, _0x38908a, _0x4f2532, _0x5495b8) {
                this['beginPath']();
                for (var _0x3dfcba = 0x0, _0x51140b = _0x38908a['length']; _0x51140b > _0x3dfcba; _0x3dfcba++) {
                    var _0x34435f = _0x38908a[_0x3dfcba];
                    switch (_0x34435f[0x0]) {
                    case 'moveTo':
                        this['moveTo'](_0x2509ae + _0x34435f[0x1], _0x400bd8 + _0x34435f[0x2]);
                        break;
                    case 'lineTo':
                        this['lineTo'](_0x2509ae + _0x34435f[0x1], _0x400bd8 + _0x34435f[0x2]);
                        break;
                    case 'arcTo':
                        this['arcTo'](_0x2509ae + _0x34435f[0x1], _0x400bd8 + _0x34435f[0x2], _0x2509ae + _0x34435f[0x3], _0x400bd8 + _0x34435f[0x4], _0x34435f[0x5]);
                        break;
                    case 'closePath':
                        this['closePath']();
                    }
                }
                null != _0x4f2532 && (this['fillStyle'] = _0x4f2532['fillStyle'], this['fill']()), null != _0x5495b8 && (this['strokeStyl' + 'e'] = _0x5495b8['strokeStyl' + 'e'], this['lineWidth'] = _0x5495b8['lineWidth'] || 0x1, this['lineJoin'] = _0x5495b8['lineJoin'], this['lineCap'] = _0x5495b8['lineCap'], this['miterLimit'] = _0x5495b8['miterLimit'], this['stroke']());
            }, _0x3c7992['drawPartic' + 'le'] = function (_0x5d90a7, _0x2fa208, _0x198560) {
            }, _0x2a623a['__init__'] = function (_0x20bef7) {
                var _0x1808a9 = laya['resource']['Context']['prototype'];
                if (_0x20bef7 = _0x20bef7 || CanvasRenderingContext2D['prototype'], !_0x20bef7['init2d']) {
                    _0x20bef7['init2d'] = !0x0;
                    var _0x9d80c1 = [
                        'saveTransf' + 'orm',
                        'restoreTra' + 'nsform',
                        'transformB' + 'yMatrix',
                        'drawTriang' + 'les',
                        'drawTriang' + 'le',
                        'drawTextur' + 'es',
                        'fillWords',
                        'fillBorder' + 'Words',
                        'drawRect',
                        'strokeWord',
                        'drawText',
                        'fillTextur' + 'e',
                        'setTransfo' + 'rmByMatrix',
                        'clipRect',
                        'drawTextur' + 'e',
                        'drawTextur' + 'e2',
                        'drawTextur' + 'eWithTrans' + 'form',
                        'flush',
                        'clear',
                        'destroy',
                        'drawCanvas',
                        'fillBorder' + 'Text',
                        'drawCurves',
                        '_drawRect',
                        'alpha',
                        '_transform',
                        '_rotate',
                        '_scale',
                        '_drawLine',
                        '_drawLines',
                        '_drawCircl' + 'e',
                        '_fillAndSt' + 'roke',
                        '_drawPie',
                        '_drawPoly',
                        '_drawPath',
                        'drawTextur' + 'eWithTrans' + 'form'
                    ];
                    _0x9d80c1['forEach'](function (_0x106cd9) {
                        _0x20bef7[_0x106cd9] = _0x1808a9[_0x106cd9];
                    });
                }
            }, _0x2a623a['ENUM_TEXTA' + 'LIGN_DEFAU' + 'LT'] = 0x0, _0x2a623a['ENUM_TEXTA' + 'LIGN_CENTE' + 'R'] = 0x1, _0x2a623a['ENUM_TEXTA' + 'LIGN_RIGHT'] = 0x2, _0x2a623a['PI2'] = 0x2 * Math['PI'], _0x2a623a;
        }()), _0x10b6f2 = function () {
            function _0x291e6e() {
            }
            var _0x21c72d, _0x399ef9;
            return _0x4621f4(_0x291e6e, 'laya.utils' + '.SceneUtil' + 's'), _0x291e6e['getBindFun'] = function (_0x3b9936) {
                var _0x4c8df5 = _0x291e6e['_funMap']['get'](_0x3b9936);
                if (null == _0x4c8df5) {
                    var _0x2da72f = '\x22' + _0x3b9936 + '\x22';
                    _0x2da72f = _0x2da72f['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22');
                    var _0x427614 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + _0x2da72f + ('\x0a}catch(e)' + '{}}})');
                    _0x4c8df5 = _0x34a895['_runScript'](_0x427614), _0x291e6e['_funMap']['set'](_0x3b9936, _0x4c8df5);
                }
                return _0x4c8df5;
            }, _0x291e6e['createByDa' + 'ta'] = function (_0x21462d, _0x3955d1) {
                var _0x2cc79d = _0x399ef9['create']();
                if (_0x21462d = _0x291e6e['createComp'](_0x3955d1, _0x21462d, _0x21462d, null, _0x2cc79d), _0x21462d['_setBit'](0x8, !0x0), _0x21462d['hasOwnProp' + 'erty']('_idMap') && (_0x21462d['_idMap'] = _0x2cc79d['_idMap']), _0x3955d1['animations']) {
                    var _0x4e895e, _0x2cab28, _0x3505b1 = [], _0x18e9e6 = _0x3955d1['animations'], _0x3083a2 = 0x0, _0x36c103 = _0x18e9e6['length'];
                    for (_0x3083a2 = 0x0; _0x36c103 > _0x3083a2; _0x3083a2++) {
                        switch (_0x4e895e = new _0x18c4f0(), _0x2cab28 = _0x18e9e6[_0x3083a2], _0x4e895e['_setUp'](_0x2cc79d['_idMap'], _0x2cab28), _0x21462d[_0x2cab28['name']] = _0x4e895e, _0x4e895e['_setContro' + 'lNode'](_0x21462d), _0x2cab28['action']) {
                        case 0x1:
                            _0x4e895e['play'](0x0, !0x1);
                            break;
                        case 0x2:
                            _0x4e895e['play'](0x0, !0x0);
                        }
                        _0x3505b1['push'](_0x4e895e);
                    }
                    _0x21462d['_aniList'] = _0x3505b1;
                }
                return 'Scene' === _0x21462d['_$componen' + 'tType'] && _0x21462d['_width'] > 0x0 && null == _0x3955d1['props']['hitTestPri' + 'or'] && !_0x21462d['mouseThrou' + 'gh'] && (_0x21462d['hitTestPri' + 'or'] = !0x0), _0x2cc79d['beginLoad'](_0x21462d), _0x21462d;
            }, _0x291e6e['createInit' + 'Tool'] = function () {
                return _0x399ef9['create']();
            }, _0x291e6e['createComp'] = function (_0x198042, _0x8778b0, _0xc1f523, _0x254368, _0x392769) {
                if ('Scene3D' == _0x198042['type'] || 'Sprite3D' == _0x198042['type']) {
                    var _0x329e18 = [], _0xc27e88 = _0x34a895['Utils3D']['_createSce' + 'neByJsonFo' + 'rMaker'](_0x198042, _0x329e18, _0x392769);
                    return 'Sprite3D' == _0x198042['type'] ? _0x34a895['StaticBatc' + 'hManager']['combine'](_0xc27e88, _0x329e18) : _0x34a895['StaticBatc' + 'hManager']['combine'](null, _0x329e18), _0xc27e88;
                }
                if (_0x8778b0 = _0x8778b0 || _0x291e6e['getCompIns' + 'tance'](_0x198042), !_0x8778b0)
                    return _0x198042['props'] && _0x198042['props']['runtime'] ? console['warn']('runtime\x20no' + 't\x20found:' + _0x198042['props']['runtime']) : console['warn']('can\x20not\x20cr' + 'eate:' + _0x198042['type']), null;
                var _0x5ec177 = _0x198042['child'];
                if (_0x5ec177)
                    for (var _0xbde3f5 = 'List' == _0x8778b0['_$componen' + 'tType'], _0x2d3760 = 0x0, _0x257a34 = _0x5ec177['length']; _0x257a34 > _0x2d3760; _0x2d3760++) {
                        var _0x4233b5 = _0x5ec177[_0x2d3760];
                        if (!_0x8778b0['hasOwnProp' + 'erty']('itemRender') || 'render' != _0x4233b5['props']['name'] && 'render' !== _0x4233b5['props']['renderType']) {
                            if ('Graphic' == _0x4233b5['type'])
                                _0x421b39['_addGraphi' + 'csToSprite'](_0x4233b5, _0x8778b0);
                            else {
                                if (_0x421b39['_isDrawTyp' + 'e'](_0x4233b5['type']))
                                    _0x421b39['_addGraphi' + 'cToSprite'](_0x4233b5, _0x8778b0, !0x0);
                                else {
                                    if (_0xbde3f5) {
                                        var _0x2be35d = [], _0x5e8d5f = _0x291e6e['createComp'](_0x4233b5, null, _0xc1f523, _0x2be35d, _0x392769);
                                        _0x2be35d['length'] && (_0x5e8d5f['_$bindData'] = _0x2be35d);
                                    } else
                                        _0x5e8d5f = _0x291e6e['createComp'](_0x4233b5, null, _0xc1f523, _0x254368, _0x392769);
                                    'Script' == _0x4233b5['type'] ? _0x5e8d5f instanceof laya['components']['Component'] ? _0x8778b0['_addCompon' + 'entInstanc' + 'e'](_0x5e8d5f) : 'owner' in _0x5e8d5f ? _0x5e8d5f['owner'] = _0x8778b0 : 'target' in _0x5e8d5f && (_0x5e8d5f['target'] = _0x8778b0) : 'mask' == _0x4233b5['props']['renderType'] || 'mask' == _0x4233b5['props']['name'] ? _0x8778b0['mask'] = _0x5e8d5f : _0x5e8d5f instanceof laya['display']['Node'] && _0x8778b0['addChild'](_0x5e8d5f);
                                }
                            }
                        } else
                            _0x8778b0['itemRender'] = _0x4233b5;
                    }
                var _0x53b16e = _0x198042['props'];
                for (var _0x5403b8 in _0x53b16e) {
                    var _0x1348a3 = _0x53b16e[_0x5403b8];
                    'string' == typeof _0x1348a3 && (_0x1348a3['indexOf']('@node:') >= 0x0 || _0x1348a3['indexOf']('@Prefab:') >= 0x0) ? _0x392769 && _0x392769['addNodeRef'](_0x8778b0, _0x5403b8, _0x1348a3) : _0x291e6e['setCompVal' + 'ue'](_0x8778b0, _0x5403b8, _0x1348a3, _0xc1f523, _0x254368);
                }
                return _0x8778b0['_afterInit' + 'ed'] && _0x8778b0['_afterInit' + 'ed'](), _0x198042['compId'] && _0x392769 && _0x392769['_idMap'] && (_0x392769['_idMap'][_0x198042['compId']] = _0x8778b0), _0x8778b0;
            }, _0x291e6e['setCompVal' + 'ue'] = function (_0xe0bbfe, _0x9ed864, _0x109807, _0x1f0445, _0x1180d3) {
                if ('string' == typeof _0x109807 && _0x109807['indexOf']('${') > -0x1) {
                    if (_0x291e6e['_sheet'] || (_0x291e6e['_sheet'] = _0x421b39['getClass']('laya.data.' + 'Table')), !_0x291e6e['_sheet'])
                        return void console['warn']('Can\x20not\x20fi' + 'nd\x20class\x20S' + 'heet');
                    if (_0x1180d3)
                        _0x1180d3['push'](_0xe0bbfe, _0x9ed864, _0x109807);
                    else {
                        if (_0x1f0445) {
                            -0x1 == _0x109807['indexOf']('].') && (_0x109807 = _0x109807['replace']('.', '[0].'));
                            var _0x184881 = new _0x21c72d(_0xe0bbfe, _0x9ed864, _0x109807);
                            _0x184881['exe'](_0x1f0445);
                            for (var _0x31de96, _0x5ee5d8, _0x2eda0f = _0x109807['replace'](/\[.*?\]\./g, '.'); null != (_0x31de96 = _0x291e6e['_parseWatc' + 'hData']['exec'](_0x2eda0f));) {
                                for (var _0x42dfae = _0x31de96[0x1]; null != (_0x5ee5d8 = _0x291e6e['_parseKeyW' + 'ord']['exec'](_0x42dfae));) {
                                    var _0x274c05 = _0x5ee5d8[0x0], _0x42054e = _0x1f0445['_watchMap'][_0x274c05] || (_0x1f0445['_watchMap'][_0x274c05] = []);
                                    _0x42054e['push'](_0x184881), _0x291e6e['_sheet']['I']['notifer']['on'](_0x274c05, _0x1f0445, _0x1f0445['changeData'], [_0x274c05]);
                                }
                                _0x42054e = _0x1f0445['_watchMap'][_0x42dfae] || (_0x1f0445['_watchMap'][_0x42dfae] = []), _0x42054e['push'](_0x184881), _0x291e6e['_sheet']['I']['notifer']['on'](_0x42dfae, _0x1f0445, _0x1f0445['changeData'], [_0x42dfae]);
                            }
                        }
                    }
                } else
                    'var' === _0x9ed864 && _0x1f0445 ? _0x1f0445[_0x109807] = _0xe0bbfe : _0xe0bbfe[_0x9ed864] = 'true' === _0x109807 ? !0x0 : 'false' === _0x109807 ? !0x1 : _0x109807;
            }, _0x291e6e['getCompIns' + 'tance'] = function (_0x246bab) {
                if ('UIView' == _0x246bab['type'] && _0x246bab['props'] && _0x246bab['props']['pageData'])
                    return _0x291e6e['createByDa' + 'ta'](null, _0x246bab['props']['pageData']);
                var _0x3c6dae = _0x246bab['props'] && _0x246bab['props']['runtime'] || _0x246bab['type'], _0x14b543 = _0x421b39['getClass'](_0x3c6dae);
                if (!_0x14b543)
                    throw 'Can\x20not\x20fi' + 'nd\x20class\x20' + _0x3c6dae;
                if ('Script' === _0x246bab['type'] && _0x14b543['prototype']['_doAwake']) {
                    var _0x4905cb = _0x2249dd['createByCl' + 'ass'](_0x14b543);
                    return _0x4905cb['_destroyed'] = !0x1, _0x4905cb;
                }
                return _0x246bab['props'] && _0x246bab['props']['hasOwnProp' + 'erty']('renderType') && 'instance' == _0x246bab['props']['renderType'] ? (_0x14b543['instance'] || (_0x14b543['instance'] = new _0x14b543()), _0x14b543['instance']) : new _0x14b543();
            }, _0x291e6e['_sheet'] = null, _0x5043ef(_0x291e6e, [
                '_funMap',
                function () {
                    return this['_funMap'] = new _0x479696();
                },
                '_parseWatc' + 'hData',
                function () {
                    return this['_parseWatc' + 'hData'] = /\${(.*?)}/g;
                },
                '_parseKeyW' + 'ord',
                function () {
                    return this['_parseKeyW' + 'ord'] = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
                }
            ]), _0x291e6e['__init$'] = function () {
                _0x21c72d = function () {
                    function _0x5c9fdd(_0x6ee7ba, _0x209283, _0xb2020e) {
                        this['comp'] = null, this['prop'] = null, this['value'] = null, this['comp'] = _0x6ee7ba, this['prop'] = _0x209283, this['value'] = _0xb2020e;
                    }
                    _0x4621f4(_0x5c9fdd, '');
                    var _0x54bc89 = _0x5c9fdd['prototype'];
                    return _0x54bc89['exe'] = function (_0x7f0be8) {
                        var _0x4de203 = _0x291e6e['getBindFun'](this['value']);
                        this['comp'][this['prop']] = _0x4de203['call'](this, _0x7f0be8);
                    }, _0x5c9fdd;
                }(), _0x399ef9 = function () {
                    function _0x25b5f9() {
                        this['_nodeRefLi' + 'st'] = null, this['_initList'] = null, this['_loadList'] = null, this['_idMap'] = null, this['_scene'] = null;
                    }
                    _0x4621f4(_0x25b5f9, '');
                    var _0x463817 = _0x25b5f9['prototype'];
                    return _0x463817['reset'] = function () {
                        this['_nodeRefLi' + 'st'] = null, this['_initList'] = null, this['_idMap'] = null, this['_loadList'] = null, this['_scene'] = null;
                    }, _0x463817['recover'] = function () {
                        this['reset'](), _0x2249dd['recover']('InitTool', this);
                    }, _0x463817['addLoadRes'] = function (_0x5e93c7, _0x26b423) {
                        this['_loadList'] || (this['_loadList'] = []), _0x26b423 ? this['_loadList']['push']({
                            'url': _0x5e93c7,
                            'type': _0x26b423
                        }) : this['_loadList']['push'](_0x5e93c7);
                    }, _0x463817['addNodeRef'] = function (_0x3347bf, _0x53e952, _0x51f607) {
                        this['_nodeRefLi' + 'st'] || (this['_nodeRefLi' + 'st'] = []), this['_nodeRefLi' + 'st']['push']([
                            _0x3347bf,
                            _0x53e952,
                            _0x51f607
                        ]), _0x51f607['indexOf']('@Prefab:') >= 0x0 && this['addLoadRes'](_0x51f607['replace']('@Prefab:', ''), 'prefab');
                    }, _0x463817['setNodeRef'] = function () {
                        if (this['_nodeRefLi' + 'st']) {
                            if (!this['_idMap'])
                                return void (this['_nodeRefLi' + 'st'] = null);
                            var _0x37cfdc = 0x0, _0xd83f0c = 0x0;
                            _0xd83f0c = this['_nodeRefLi' + 'st']['length'];
                            var _0xbf5f30;
                            for (_0x37cfdc = 0x0; _0xd83f0c > _0x37cfdc; _0x37cfdc++)
                                _0xbf5f30 = this['_nodeRefLi' + 'st'][_0x37cfdc], _0xbf5f30[0x0][_0xbf5f30[0x1]] = this['getReferDa' + 'ta'](_0xbf5f30[0x2]);
                            this['_nodeRefLi' + 'st'] = null;
                        }
                    }, _0x463817['getReferDa' + 'ta'] = function (_0xbe9978) {
                        if (_0xbe9978['indexOf']('@Prefab:') >= 0x0) {
                            var _0x3fbdd6;
                            return _0x3fbdd6 = _0x3943d1['getRes'](_0xbe9978['replace']('@Prefab:', ''));
                        }
                        if (_0xbe9978['indexOf']('@arr:') >= 0x0) {
                            _0xbe9978 = _0xbe9978['replace']('@arr:', '');
                            var _0x4d686f;
                            _0x4d686f = _0xbe9978['split'](',');
                            var _0x103c99, _0x396d3c = 0x0, _0x2b3a21 = 0x0;
                            for (_0x2b3a21 = _0x4d686f['length'], _0x396d3c = 0x0; _0x2b3a21 > _0x396d3c; _0x396d3c++)
                                _0x103c99 = _0x4d686f[_0x396d3c], _0x103c99 ? _0x4d686f[_0x396d3c] = this['_idMap'][_0x103c99['replace']('@node:', '')] : _0x4d686f[_0x396d3c] = null;
                            return _0x4d686f;
                        }
                        return this['_idMap'][_0xbe9978['replace']('@node:', '')];
                    }, _0x463817['addInitIte' + 'm'] = function (_0x2394f1) {
                        this['_initList'] || (this['_initList'] = []), this['_initList']['push'](_0x2394f1);
                    }, _0x463817['doInits'] = function () {
                        this['_initList'] && (this['_initList'] = null);
                    }, _0x463817['finish'] = function () {
                        this['setNodeRef'](), this['doInits'](), this['_scene']['_setBit'](0x8, !0x1), this['_scene']['parent'] && this['_scene']['parent']['activeInHi' + 'erarchy'] && this['_scene']['active'] && this['_scene']['_processAc' + 'tive'](), this['_scene']['event']('onViewCrea' + 'ted'), this['recover']();
                    }, _0x463817['beginLoad'] = function (_0x5ed3d6) {
                        this['_scene'] = _0x5ed3d6, !this['_loadList'] || this['_loadList']['length'] < 0x1 ? this['finish']() : _0x34a895['loader']['load'](this['_loadList'], _0x16ca2b['create'](this, this['finish']));
                    }, _0x25b5f9['create'] = function () {
                        var _0x23532a = _0x2249dd['getItemByC' + 'lass']('InitTool', _0x25b5f9);
                        return _0x23532a['_idMap'] = [], _0x23532a;
                    }, _0x25b5f9;
                }();
            }, _0x291e6e;
        }(), _0x2a73e2 = function () {
            function _0x367d23() {
            }
            _0x4621f4(_0x367d23, 'laya.displ' + 'ay.cmd.Dra' + 'wTexturesC' + 'md');
            var _0xdbeb3a = _0x367d23['prototype'];
            return _0xdbeb3a['recover'] = function () {
                this['texture']['_removeRef' + 'erence'](), this['texture'] = null, this['pos'] = null, _0x2249dd['recover']('DrawTextur' + 'esCmd', this);
            }, _0xdbeb3a['run'] = function (_0x12bad2, _0xe970b5, _0x2e3568) {
                _0x12bad2['drawTextur' + 'es'](this['texture'], this['pos'], _0xe970b5, _0x2e3568);
            }, _0x71e09a(0x0, _0xdbeb3a, 'cmdID', function () {
                return 'DrawTextur' + 'es';
            }), _0x367d23['create'] = function (_0x1ed16b, _0xf2f2c0) {
                var _0x5a4e9b = _0x2249dd['getItemByC' + 'lass']('DrawTextur' + 'esCmd', _0x367d23);
                return _0x5a4e9b['texture'] = _0x1ed16b, _0x1ed16b['_addRefere' + 'nce'](), _0x5a4e9b['pos'] = _0xf2f2c0, _0x5a4e9b;
            }, _0x367d23['ID'] = 'DrawTextur' + 'es', _0x367d23;
        }(), _0x168ff5 = function () {
            function _0x3bf2f2() {
                this['reset']();
            }
            _0x4621f4(_0x3bf2f2, 'laya.displ' + 'ay.css.Cac' + 'heStyle');
            var _0x5b7a61 = _0x3bf2f2['prototype'];
            return _0x5b7a61['needBitmap' + 'Cache'] = function () {
                return this['cacheForFi' + 'lters'] || !!this['mask'];
            }, _0x5b7a61['needEnable' + 'CanvasRend' + 'er'] = function () {
                return 'none' != this['userSetCac' + 'he'] || this['cacheForFi' + 'lters'] || !!this['mask'];
            }, _0x5b7a61['releaseCon' + 'text'] = function () {
                this['canvas'] && this['canvas']['size'] && (_0x2249dd['recover']('CacheCanva' + 's', this['canvas']), this['canvas']['size'](0x0, 0x0)), this['canvas'] = null;
            }, _0x5b7a61['createCont' + 'ext'] = function () {
                if (!this['canvas']) {
                    this['canvas'] = _0x2249dd['getItem']('CacheCanva' + 's') || new _0x50a1b2(!_0x4fec79['isWebGL']);
                    var _0x1a949b = this['canvas']['context'];
                    _0x1a949b || (_0x1a949b = this['canvas']['getContext']('2d'));
                }
            }, _0x5b7a61['releaseFil' + 'terCache'] = function () {
                var _0x2c828c = this['filterCach' + 'e'];
                _0x2c828c && (_0x2c828c['destroy'](), _0x2c828c['recycle'](), this['filterCach' + 'e'] = null);
            }, _0x5b7a61['recover'] = function () {
                this !== _0x3bf2f2['EMPTY'] && _0x2249dd['recover']('SpriteCach' + 'e', this['reset']());
            }, _0x5b7a61['reset'] = function () {
                return this['releaseCon' + 'text'](), this['releaseFil' + 'terCache'](), this['cacheAs'] = 'none', this['enableCanv' + 'asRender'] = !0x1, this['userSetCac' + 'he'] = 'none', this['cacheForFi' + 'lters'] = !0x1, this['staticCach' + 'e'] = !0x1, this['reCache'] = !0x0, this['mask'] = null, this['maskParent'] = null, this['filterCach' + 'e'] = null, this['filters'] = null, this['hasGlowFil' + 'ter'] = !0x1, this['cacheRect'] && this['cacheRect']['recover'](), this['cacheRect'] = null, this;
            }, _0x5b7a61['_calculate' + 'CacheRect'] = function (_0x5f3389, _0x5a6372, _0x58dd9b, _0x23d6ab) {
                var _0x2ddc22 = !0x1;
                (_0x4fec79['isWebGL'] || _0x4fec79['isConchApp']) && (_0x2ddc22 = !0x0);
                var _0x2a8d3d = _0x5f3389['_cacheStyl' + 'e'];
                _0x2a8d3d['cacheRect'] || (_0x2a8d3d['cacheRect'] = _0x22858b['create']());
                var _0x311396;
                _0x2ddc22 && 'bitmap' !== _0x5a6372 ? _0x2a8d3d['cacheRect']['setTo'](-_0x5f3389['_style']['pivotX'], -_0x5f3389['_style']['pivotY'], 0x1, 0x1) : (_0x311396 = _0x5f3389['getSelfBou' + 'nds'](), _0x4fec79['isConchApp'] ? (_0x311396['width'] = _0x311396['x'] + _0x311396['width'] + 0x20, _0x311396['height'] = _0x311396['x'] + _0x311396['height'] + 0x20) : (_0x311396['width'] = _0x311396['width'] + 0x20, _0x311396['height'] = _0x311396['height'] + 0x20), _0x311396['x'] = _0x311396['x'] - _0x5f3389['pivotX'], _0x311396['y'] = _0x311396['y'] - _0x5f3389['pivotY'], _0x311396['x'] = _0x311396['x'] - 0x10, _0x311396['y'] = _0x311396['y'] - 0x10, _0x311396['x'] = Math['floor'](_0x311396['x'] + _0x58dd9b) - _0x58dd9b, _0x311396['y'] = Math['floor'](_0x311396['y'] + _0x23d6ab) - _0x23d6ab, _0x311396['width'] = Math['floor'](_0x311396['width']), _0x311396['height'] = Math['floor'](_0x311396['height']), _0x2a8d3d['cacheRect']['copyFrom'](_0x311396)), _0x311396 = _0x2a8d3d['cacheRect'];
                var _0xdcba7c = _0x2ddc22 ? 0x1 : _0x2ad6c5['pixelRatio'] * _0x34a895['stage']['clientScal' + 'eX'], _0x510303 = _0x2ddc22 ? 0x1 : _0x2ad6c5['pixelRatio'] * _0x34a895['stage']['clientScal' + 'eY'];
                if (!_0x2ddc22) {
                    var _0x3aae08, _0x45bb5e = 0x1, _0x135904 = 0x1;
                    for (_0x3aae08 = _0x5f3389; _0x3aae08 && _0x3aae08 != _0x34a895['stage'];)
                        _0x45bb5e *= _0x3aae08['scaleX'], _0x135904 *= _0x3aae08['scaleY'], _0x3aae08 = _0x3aae08['parent'];
                    _0x45bb5e > 0x1 && (_0xdcba7c *= _0x45bb5e), _0x135904 > 0x1 && (_0x510303 *= _0x135904);
                }
                if (_0x5f3389['_style']['scrollRect']) {
                    var _0x318313 = _0x5f3389['_style']['scrollRect'];
                    _0x311396['x'] -= _0x318313['x'], _0x311396['y'] -= _0x318313['y'];
                }
                return _0x3bf2f2['_scaleInfo']['setTo'](_0xdcba7c, _0x510303), _0x3bf2f2['_scaleInfo'];
            }, _0x3bf2f2['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('SpriteCach' + 'e', _0x3bf2f2);
            }, _0x3bf2f2['EMPTY'] = new _0x3bf2f2(), _0x3bf2f2['CANVAS_EXT' + 'END_EDGE'] = 0x10, _0x5043ef(_0x3bf2f2, [
                '_scaleInfo',
                function () {
                    return this['_scaleInfo'] = new _0x251b03();
                }
            ]), _0x3bf2f2;
        }(), _0x5b626a = function () {
            function _0x2bc8ba() {
            }
            _0x4621f4(_0x2bc8ba, 'laya.displ' + 'ay.cmd.Tra' + 'nslateCmd');
            var _0x562443 = _0x2bc8ba['prototype'];
            return _0x562443['recover'] = function () {
                _0x2249dd['recover']('TranslateC' + 'md', this);
            }, _0x562443['run'] = function (_0x9f791a, _0x6a93a5, _0x2651ad) {
                _0x9f791a['translate'](this['tx'], this['ty']);
            }, _0x71e09a(0x0, _0x562443, 'cmdID', function () {
                return 'Translate';
            }), _0x2bc8ba['create'] = function (_0x14a446, _0x1c0a26) {
                var _0x3c1fc7 = _0x2249dd['getItemByC' + 'lass']('TranslateC' + 'md', _0x2bc8ba);
                return _0x3c1fc7['tx'] = _0x14a446, _0x3c1fc7['ty'] = _0x1c0a26, _0x3c1fc7;
            }, _0x2bc8ba['ID'] = 'Translate', _0x2bc8ba;
        }(), _0x530859 = function () {
            function _0x3129b8() {
                this['ratio'] = 0.92, this['maxOffset'] = 0x3c, this['_dragging'] = !0x1, this['_clickOnly'] = !0x0;
            }
            _0x4621f4(_0x3129b8, 'laya.utils' + '.Dragging');
            var _0x45db18 = _0x3129b8['prototype'];
            return _0x45db18['start'] = function (_0x2af819, _0x5849d3, _0x266ea1, _0xcee39, _0x45baf9, _0x5d045d, _0x2425ec, _0x6b0a3d) {
                void 0x0 === _0x6b0a3d && (_0x6b0a3d = 0.92), this['clearTimer'](), this['target'] = _0x2af819, this['area'] = _0x5849d3, this['hasInertia'] = _0x266ea1, this['elasticDis' + 'tance'] = _0x5849d3 ? _0xcee39 : 0x0, this['elasticBac' + 'kTime'] = _0x45baf9, this['data'] = _0x5d045d, this['_disableMo' + 'useEvent'] = _0x2425ec, this['ratio'] = _0x6b0a3d, this['_parent'] = _0x2af819['parent'], this['_clickOnly'] = !0x0, this['_dragging'] = !0x0, this['_elasticRa' + 'teX'] = this['_elasticRa' + 'teY'] = 0x1, this['_lastX'] = this['_parent']['mouseX'], this['_lastY'] = this['_parent']['mouseY'], _0x34a895['stage']['on']('mouseup', this, this['onStageMou' + 'seUp']), _0x34a895['stage']['on']('mouseout', this, this['onStageMou' + 'seUp']), _0x34a895['systemTime' + 'r']['frameLoop'](0x1, this, this['loop']);
            }, _0x45db18['clearTimer'] = function () {
                _0x34a895['systemTime' + 'r']['clear'](this, this['loop']), _0x34a895['systemTime' + 'r']['clear'](this, this['tweenMove']), this['_tween'] && (this['_tween']['recover'](), this['_tween'] = null);
            }, _0x45db18['stop'] = function () {
                this['_dragging'] && (_0x1a2fe4['instance']['disableMou' + 'seEvent'] = !0x1, _0x34a895['stage']['off']('mouseup', this, this['onStageMou' + 'seUp']), _0x34a895['stage']['off']('mouseout', this, this['onStageMou' + 'seUp']), this['_dragging'] = !0x1, this['target'] && this['area'] && this['backToArea'](), this['clear']());
            }, _0x45db18['loop'] = function () {
                var _0x213ded = this['_parent']['getMousePo' + 'int'](), _0x57bfb2 = _0x213ded['x'], _0x4ec511 = _0x213ded['y'], _0x1f7c93 = _0x57bfb2 - this['_lastX'], _0x29c7d2 = _0x4ec511 - this['_lastY'];
                if (this['_clickOnly']) {
                    if (!(Math['abs'](_0x1f7c93 * _0x34a895['stage']['_canvasTra' + 'nsform']['getScaleX']()) > 0x1 || Math['abs'](_0x29c7d2 * _0x34a895['stage']['_canvasTra' + 'nsform']['getScaleY']()) > 0x1))
                        return;
                    this['_clickOnly'] = !0x1, this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['target']['event']('dragstart', this['data']), _0x1a2fe4['instance']['disableMou' + 'seEvent'] = this['_disableMo' + 'useEvent'];
                } else
                    this['_offsets']['push'](_0x1f7c93, _0x29c7d2);
                (0x0 !== _0x1f7c93 || 0x0 !== _0x29c7d2) && (this['_lastX'] = _0x57bfb2, this['_lastY'] = _0x4ec511, this['target']['x'] += _0x1f7c93 * this['_elasticRa' + 'teX'], this['target']['y'] += _0x29c7d2 * this['_elasticRa' + 'teY'], this['area'] && this['checkArea'](), this['target']['event']('dragmove', this['data']));
            }, _0x45db18['checkArea'] = function () {
                if (this['elasticDis' + 'tance'] <= 0x0)
                    this['backToArea']();
                else {
                    if (this['target']['_x'] < this['area']['x'])
                        var _0x21246c = this['area']['x'] - this['target']['_x'];
                    else
                        _0x21246c = this['target']['_x'] > this['area']['x'] + this['area']['width'] ? this['target']['_x'] - this['area']['x'] - this['area']['width'] : 0x0;
                    if (this['_elasticRa' + 'teX'] = Math['max'](0x0, 0x1 - _0x21246c / this['elasticDis' + 'tance']), this['target']['_y'] < this['area']['y'])
                        var _0x2f67de = this['area']['y'] - this['target']['y'];
                    else
                        _0x2f67de = this['target']['_y'] > this['area']['y'] + this['area']['height'] ? this['target']['_y'] - this['area']['y'] - this['area']['height'] : 0x0;
                    this['_elasticRa' + 'teY'] = Math['max'](0x0, 0x1 - _0x2f67de / this['elasticDis' + 'tance']);
                }
            }, _0x45db18['backToArea'] = function () {
                this['target']['x'] = Math['min'](Math['max'](this['target']['_x'], this['area']['x']), this['area']['x'] + this['area']['width']), this['target']['y'] = Math['min'](Math['max'](this['target']['_y'], this['area']['y']), this['area']['y'] + this['area']['height']);
            }, _0x45db18['onStageMou' + 'seUp'] = function (_0x4dfff8) {
                if (_0x1a2fe4['instance']['disableMou' + 'seEvent'] = !0x1, _0x34a895['stage']['off']('mouseup', this, this['onStageMou' + 'seUp']), _0x34a895['stage']['off']('mouseout', this, this['onStageMou' + 'seUp']), _0x34a895['systemTime' + 'r']['clear'](this, this['loop']), !this['_clickOnly'] && this['target']) {
                    if (this['hasInertia']) {
                        this['_offsets']['length'] < 0x1 && this['_offsets']['push'](this['_parent']['mouseX'] - this['_lastX'], this['_parent']['mouseY'] - this['_lastY']), this['_offsetX'] = this['_offsetY'] = 0x0;
                        for (var _0x13738d = this['_offsets']['length'], _0x3369bb = Math['min'](_0x13738d, 0x6), _0x8c0328 = this['_offsets']['length'] - _0x3369bb, _0x1907fb = _0x13738d - 0x1; _0x1907fb > _0x8c0328; _0x1907fb--)
                            this['_offsetY'] += this['_offsets'][_0x1907fb--], this['_offsetX'] += this['_offsets'][_0x1907fb];
                        this['_offsetX'] = this['_offsetX'] / _0x3369bb * 0x2, this['_offsetY'] = this['_offsetY'] / _0x3369bb * 0x2, Math['abs'](this['_offsetX']) > this['maxOffset'] && (this['_offsetX'] = this['_offsetX'] > 0x0 ? this['maxOffset'] : -this['maxOffset']), Math['abs'](this['_offsetY']) > this['maxOffset'] && (this['_offsetY'] = this['_offsetY'] > 0x0 ? this['maxOffset'] : -this['maxOffset']), _0x34a895['systemTime' + 'r']['frameLoop'](0x1, this, this['tweenMove']);
                    } else
                        this['elasticDis' + 'tance'] > 0x0 ? this['checkElast' + 'ic']() : this['clear']();
                }
            }, _0x45db18['checkElast' + 'ic'] = function () {
                var _0x4f029f = NaN, _0x4939b1 = NaN;
                if (this['target']['x'] < this['area']['x'] ? _0x4f029f = this['area']['x'] : this['target']['_x'] > this['area']['x'] + this['area']['width'] && (_0x4f029f = this['area']['x'] + this['area']['width']), this['target']['y'] < this['area']['y'] ? _0x4939b1 = this['area']['y'] : this['target']['_y'] > this['area']['y'] + this['area']['height'] && (_0x4939b1 = this['area']['y'] + this['area']['height']), isNaN(_0x4f029f) && isNaN(_0x4939b1))
                    this['clear']();
                else {
                    var _0x11b930 = {};
                    isNaN(_0x4f029f) || (_0x11b930['x'] = _0x4f029f), isNaN(_0x4939b1) || (_0x11b930['y'] = _0x4939b1), this['_tween'] = _0x2e64ca['to'](this['target'], _0x11b930, this['elasticBac' + 'kTime'], _0x452b71['sineOut'], _0x16ca2b['create'](this, this['clear']), 0x0, !0x1, !0x1);
                }
            }, _0x45db18['tweenMove'] = function () {
                this['_offsetX'] *= this['ratio'] * this['_elasticRa' + 'teX'], this['_offsetY'] *= this['ratio'] * this['_elasticRa' + 'teY'], this['target']['x'] += this['_offsetX'], this['target']['y'] += this['_offsetY'], this['area'] && this['checkArea'](), this['target']['event']('dragmove', this['data']), (Math['abs'](this['_offsetX']) < 0x1 && Math['abs'](this['_offsetY']) < 0x1 || this['_elasticRa' + 'teX'] < 0.5 || this['_elasticRa' + 'teY'] < 0.5) && (_0x34a895['systemTime' + 'r']['clear'](this, this['tweenMove']), this['elasticDis' + 'tance'] > 0x0 ? this['checkElast' + 'ic']() : this['clear']());
            }, _0x45db18['clear'] = function () {
                if (this['target']) {
                    this['clearTimer']();
                    var _0x26d921 = this['target'];
                    this['target'] = null, this['_parent'] = null, _0x26d921['event']('dragend', this['data']);
                }
            }, _0x3129b8;
        }(), _0x3df59e = function () {
            function _0x15545d() {
            }
            var _0x550692;
            return _0x4621f4(_0x15545d, 'laya.net.L' + 'ocalStorag' + 'e'), _0x15545d['__init__'] = function () {
                return _0x15545d['_baseClass'] || (_0x15545d['_baseClass'] = _0x550692, _0x550692['init']()), _0x15545d['items'] = _0x15545d['_baseClass']['items'], _0x15545d['support'] = _0x15545d['_baseClass']['support'], _0x15545d['support'];
            }, _0x15545d['setItem'] = function (_0x2772de, _0x46b183) {
                _0x15545d['_baseClass']['setItem'](_0x2772de, _0x46b183);
            }, _0x15545d['getItem'] = function (_0x4cd4c2) {
                return _0x15545d['_baseClass']['getItem'](_0x4cd4c2);
            }, _0x15545d['setJSON'] = function (_0x112114, _0x1e6072) {
                _0x15545d['_baseClass']['setJSON'](_0x112114, _0x1e6072);
            }, _0x15545d['getJSON'] = function (_0x485091) {
                return _0x15545d['_baseClass']['getJSON'](_0x485091);
            }, _0x15545d['removeItem'] = function (_0x4cc824) {
                _0x15545d['_baseClass']['removeItem'](_0x4cc824);
            }, _0x15545d['clear'] = function () {
                _0x15545d['_baseClass']['clear']();
            }, _0x15545d['_baseClass'] = null, _0x15545d['items'] = null, _0x15545d['support'] = !0x1, _0x15545d['__init$'] = function () {
                _0x550692 = function () {
                    function _0x2cb005() {
                    }
                    return _0x4621f4(_0x2cb005, ''), _0x2cb005['init'] = function () {
                        try {
                            _0x2cb005['support'] = !0x0, _0x2cb005['items'] = _0xd373d9['localStora' + 'ge'], _0x2cb005['setItem']('laya', '1'), _0x2cb005['removeItem']('laya');
                        } catch (_0x18559d) {
                            _0x2cb005['support'] = !0x1;
                        }
                        _0x2cb005['support'] || console['log']('LocalStora' + 'ge\x20is\x20not\x20' + 'supprot\x20or' + '\x20browser\x20i' + 's\x20private\x20' + 'mode.');
                    }, _0x2cb005['setItem'] = function (_0x27f77d, _0xc3ef95) {
                        try {
                            _0x2cb005['support'] && _0x2cb005['items']['setItem'](_0x27f77d, _0xc3ef95);
                        } catch (_0xe8c84) {
                            console['warn']('set\x20localS' + 'torage\x20fai' + 'led', _0xe8c84);
                        }
                    }, _0x2cb005['getItem'] = function (_0x11e522) {
                        return _0x2cb005['support'] ? _0x2cb005['items']['getItem'](_0x11e522) : null;
                    }, _0x2cb005['setJSON'] = function (_0x3673b5, _0x3fe601) {
                        try {
                            _0x2cb005['support'] && _0x2cb005['items']['setItem'](_0x3673b5, JSON['stringify'](_0x3fe601));
                        } catch (_0x29cbfe) {
                            console['warn']('set\x20localS' + 'torage\x20fai' + 'led', _0x29cbfe);
                        }
                    }, _0x2cb005['getJSON'] = function (_0x50a8ae) {
                        return JSON['parse'](_0x2cb005['support'] ? _0x2cb005['items']['getItem'](_0x50a8ae) : null);
                    }, _0x2cb005['removeItem'] = function (_0x103fe5) {
                        _0x2cb005['support'] && _0x2cb005['items']['removeItem'](_0x103fe5);
                    }, _0x2cb005['clear'] = function () {
                        _0x2cb005['support'] && _0x2cb005['items']['clear']();
                    }, _0x2cb005['items'] = null, _0x2cb005['support'] = !0x1, _0x2cb005;
                }();
            }, _0x15545d;
        }(), _0x428443 = function () {
            function _0x31c0fe() {
                this['_textIsWor' + 'ldText'] = !0x1, this['_fontColor'] = 0xffffffff, this['_strokeCol' + 'or'] = 0x0, this['_nTexAlign'] = 0x0, this['_fontObj'] = _0x31c0fe['_defFontOb' + 'j'];
            }
            _0x4621f4(_0x31c0fe, 'laya.displ' + 'ay.cmd.Fil' + 'lTextCmd');
            var _0x4a61b6 = _0x31c0fe['prototype'];
            return _0x4a61b6['recover'] = function () {
                _0x2249dd['recover']('FillTextCm' + 'd', this);
            }, _0x4a61b6['run'] = function (_0x49e6f6, _0x476a1c, _0x2a8a91) {
                _0x34a895['stage']['isGlobalRe' + 'paint']() && this['_textIsWor' + 'ldText'] && this['_text']['cleanCache'](), this['_textIsWor' + 'ldText'] && _0x49e6f6['_fast_fill' + 'text'] ? _0x49e6f6['_fast_fill' + 'text'](this['_text'], this['x'] + _0x476a1c, this['y'] + _0x2a8a91, this['_fontObj'], this['_color'], null, 0x0, this['_nTexAlign'], 0x0) : _0x49e6f6['drawText'](this['_text'], this['x'] + _0x476a1c, this['y'] + _0x2a8a91, this['_font'], this['_color'], this['_textAlign']);
            }, _0x71e09a(0x0, _0x4a61b6, 'text', function () {
                return this['_text'];
            }, function (_0x14f489) {
                this['_text'] = _0x14f489, this['_textIsWor' + 'ldText'] = _0x14f489 instanceof laya['utils']['WordText'], this['_textIsWor' + 'ldText'] && this['_text']['cleanCache']();
            }), _0x71e09a(0x0, _0x4a61b6, 'cmdID', function () {
                return 'FillText';
            }), _0x71e09a(0x0, _0x4a61b6, 'color', function () {
                return this['_color'];
            }, function (_0x3a5a5d) {
                this['_color'] = _0x3a5a5d, this['_fontColor'] = _0x189459['create'](_0x3a5a5d)['numColor'], this['_textIsWor' + 'ldText'] && this['_text']['cleanCache']();
            }), _0x71e09a(0x0, _0x4a61b6, 'font', function () {
                return this['_font'];
            }, function (_0x4d7f30) {
                this['_font'] = _0x4d7f30, (_0x4fec79['isWebGL'] || _0x4fec79['isConchApp']) && (this['_fontObj'] = _0x4612fc['Parse'](_0x4d7f30)), this['_textIsWor' + 'ldText'] && this['_text']['cleanCache']();
            }), _0x71e09a(0x0, _0x4a61b6, 'textAlign', function () {
                return this['_textAlign'];
            }, function (_0xfe4124) {
                switch (this['_textAlign'] = _0xfe4124, _0xfe4124) {
                case 'center':
                    this['_nTexAlign'] = _0x3f4349['ENUM_TEXTA' + 'LIGN_CENTE' + 'R'];
                    break;
                case 'right':
                    this['_nTexAlign'] = _0x3f4349['ENUM_TEXTA' + 'LIGN_RIGHT'];
                    break;
                default:
                    this['_nTexAlign'] = _0x3f4349['ENUM_TEXTA' + 'LIGN_DEFAU' + 'LT'];
                }
                this['_textIsWor' + 'ldText'] && this['_text']['cleanCache']();
            }), _0x31c0fe['create'] = function (_0x19bfeb, _0x3edb9c, _0x2d31bf, _0x1c5873, _0x1edeca, _0x12f7c7) {
                var _0x478cdf = _0x2249dd['getItemByC' + 'lass']('FillTextCm' + 'd', _0x31c0fe);
                return _0x478cdf['text'] = _0x19bfeb, _0x478cdf['_textIsWor' + 'ldText'] = _0x19bfeb instanceof laya['utils']['WordText'], _0x478cdf['x'] = _0x3edb9c, _0x478cdf['y'] = _0x2d31bf, _0x478cdf['font'] = _0x1c5873, _0x478cdf['color'] = _0x1edeca, _0x478cdf['textAlign'] = _0x12f7c7, _0x478cdf;
            }, _0x31c0fe['ID'] = 'FillText', _0x5043ef(_0x31c0fe, [
                '_defFontOb' + 'j',
                function () {
                    return this['_defFontOb' + 'j'] = new _0x4612fc(null);
                }
            ]), _0x31c0fe;
        }(), _0x479696 = function () {
            function _0x4f0c9a() {
                this['_obj'] = null, this['_obj'] = _0x4f0c9a['supportWea' + 'kMap'] ? new _0x2ad6c5['window']['WeakMap']() : {}, _0x4f0c9a['supportWea' + 'kMap'] || _0x4f0c9a['_maps']['push'](this);
            }
            _0x4621f4(_0x4f0c9a, 'laya.utils' + '.WeakObjec' + 't');
            var _0x1395d2 = _0x4f0c9a['prototype'];
            return _0x1395d2['set'] = function (_0x2c940a, _0x4f35cb) {
                if (null != _0x2c940a) {
                    if (_0x4f0c9a['supportWea' + 'kMap']) {
                        var _0x103f27 = _0x2c940a;
                        ('string' == typeof _0x2c940a || 'number' == typeof _0x2c940a) && (_0x103f27 = _0x4f0c9a['_keys'][_0x2c940a], _0x103f27 || (_0x103f27 = _0x4f0c9a['_keys'][_0x2c940a] = { 'k': _0x2c940a })), this['_obj']['set'](_0x103f27, _0x4f35cb);
                    } else
                        'string' == typeof _0x2c940a || 'number' == typeof _0x2c940a ? this['_obj'][_0x2c940a] = _0x4f35cb : (_0x2c940a['$_GID'] || (_0x2c940a['$_GID'] = _0x3b78ce['getGID']()), this['_obj'][_0x2c940a['$_GID']] = _0x4f35cb);
                }
            }, _0x1395d2['get'] = function (_0x43be4f) {
                if (null == _0x43be4f)
                    return null;
                if (_0x4f0c9a['supportWea' + 'kMap']) {
                    var _0x7ab540 = 'string' == typeof _0x43be4f || 'number' == typeof _0x43be4f ? _0x4f0c9a['_keys'][_0x43be4f] : _0x43be4f;
                    return _0x7ab540 ? this['_obj']['get'](_0x7ab540) : null;
                }
                return 'string' == typeof _0x43be4f || 'number' == typeof _0x43be4f ? this['_obj'][_0x43be4f] : this['_obj'][_0x43be4f['$_GID']];
            }, _0x1395d2['del'] = function (_0x11599a) {
                if (null != _0x11599a) {
                    if (_0x4f0c9a['supportWea' + 'kMap']) {
                        var _0x3036cd = 'string' == typeof _0x11599a || 'number' == typeof _0x11599a ? _0x4f0c9a['_keys'][_0x11599a] : _0x11599a;
                        if (!_0x3036cd)
                            return;
                        this['_obj']['delete'](_0x3036cd);
                    } else
                        'string' == typeof _0x11599a || 'number' == typeof _0x11599a ? delete this['_obj'][_0x11599a] : delete this['_obj'][this['_obj']['$_GID']];
                }
            }, _0x1395d2['has'] = function (_0x4a1afe) {
                if (null == _0x4a1afe)
                    return !0x1;
                if (_0x4f0c9a['supportWea' + 'kMap']) {
                    var _0x3c14db = 'string' == typeof _0x4a1afe || 'number' == typeof _0x4a1afe ? _0x4f0c9a['_keys'][_0x4a1afe] : _0x4a1afe;
                    return this['_obj']['has'](_0x3c14db);
                }
                return 'string' == typeof _0x4a1afe || 'number' == typeof _0x4a1afe ? null != this['_obj'][_0x4a1afe] : null != this['_obj'][this['_obj']['$_GID']];
            }, _0x4f0c9a['__init__'] = function () {
                _0x4f0c9a['supportWea' + 'kMap'] = null != _0x2ad6c5['window']['WeakMap'], _0x4f0c9a['supportWea' + 'kMap'] || _0x34a895['systemTime' + 'r']['loop'](_0x4f0c9a['delInterva' + 'l'], null, _0x4f0c9a['clearCache']);
            }, _0x4f0c9a['clearCache'] = function () {
                for (var _0x42352e = 0x0, _0x31d18d = _0x4f0c9a['_maps']['length']; _0x31d18d > _0x42352e; _0x42352e++) {
                    var _0xb2c445 = _0x4f0c9a['_maps'][_0x42352e];
                    _0xb2c445['_obj'] = {};
                }
            }, _0x4f0c9a['supportWea' + 'kMap'] = !0x1, _0x4f0c9a['delInterva' + 'l'] = 0x927c0, _0x4f0c9a['_keys'] = {}, _0x4f0c9a['_maps'] = [], _0x5043ef(_0x4f0c9a, [
                'I',
                function () {
                    return this['I'] = new _0x4f0c9a();
                }
            ]), _0x4f0c9a;
        }(), _0x3e8d1e = function () {
            function _0x8d74a5() {
                this['preOvers'] = [], this['preDowns'] = [], this['preRightDo' + 'wns'] = [], this['enable'] = !0x0, this['_lastClick' + 'Time'] = 0x0, this['_event'] = new _0x4a4c33();
            }
            _0x4621f4(_0x8d74a5, 'laya.event' + 's.TouchMan' + 'ager');
            var _0x31c7ed = _0x8d74a5['prototype'];
            return _0x31c7ed['_clearTemp' + 'Arrs'] = function () {
                _0x8d74a5['_oldArr']['length'] = 0x0, _0x8d74a5['_newArr']['length'] = 0x0, _0x8d74a5['_tEleArr']['length'] = 0x0;
            }, _0x31c7ed['getTouchFr' + 'omArr'] = function (_0x13ab3d, _0x23e4bd) {
                var _0x50c336 = 0x0, _0x3af82f = 0x0;
                _0x3af82f = _0x23e4bd['length'];
                var _0x7b803c;
                for (_0x50c336 = 0x0; _0x3af82f > _0x50c336; _0x50c336++)
                    if (_0x7b803c = _0x23e4bd[_0x50c336], _0x7b803c['id'] == _0x13ab3d)
                        return _0x7b803c;
                return null;
            }, _0x31c7ed['removeTouc' + 'hFromArr'] = function (_0x3f11bb, _0x1cfad8) {
                var _0x25de35 = 0x0;
                for (_0x25de35 = _0x1cfad8['length'] - 0x1; _0x25de35 >= 0x0; _0x25de35--)
                    _0x1cfad8[_0x25de35]['id'] == _0x3f11bb && _0x1cfad8['splice'](_0x25de35, 0x1);
            }, _0x31c7ed['createTouc' + 'hO'] = function (_0x144d7f, _0x14a0ca) {
                var _0x369e01;
                return _0x369e01 = _0x2249dd['getItem']('TouchData') || {}, _0x369e01['id'] = _0x14a0ca, _0x369e01['tar'] = _0x144d7f, _0x369e01;
            }, _0x31c7ed['onMouseDow' + 'n'] = function (_0x4daee4, _0x347486, _0x27931b) {
                if (void 0x0 === _0x27931b && (_0x27931b = !0x1), this['enable']) {
                    var _0x4c9e7f, _0x2ced9b, _0x5a9458;
                    _0x4c9e7f = this['getTouchFr' + 'omArr'](_0x347486, this['preOvers']), _0x5a9458 = this['getEles'](_0x4daee4, null, _0x8d74a5['_tEleArr']), _0x4c9e7f ? _0x4c9e7f['tar'] = _0x4daee4 : (_0x2ced9b = this['createTouc' + 'hO'](_0x4daee4, _0x347486), this['preOvers']['push'](_0x2ced9b)), _0x2ad6c5['onMobile'] && this['sendEvents'](_0x5a9458, 'mouseover');
                    var _0x376876;
                    _0x376876 = _0x27931b ? this['preDowns'] : this['preRightDo' + 'wns'], _0x4c9e7f = this['getTouchFr' + 'omArr'](_0x347486, _0x376876), _0x4c9e7f ? _0x4c9e7f['tar'] = _0x4daee4 : (_0x2ced9b = this['createTouc' + 'hO'](_0x4daee4, _0x347486), _0x376876['push'](_0x2ced9b)), this['sendEvents'](_0x5a9458, _0x27931b ? 'mousedown' : 'rightmouse' + 'down'), this['_clearTemp' + 'Arrs']();
                }
            }, _0x31c7ed['sendEvents'] = function (_0x10bebe, _0x258576) {
                var _0x1d89c9 = 0x0, _0x3a4f75 = 0x0;
                _0x3a4f75 = _0x10bebe['length'], this['_event']['_stoped'] = !0x1;
                var _0x4fda6f;
                _0x4fda6f = _0x10bebe[0x0];
                var _0x5d728c;
                for (_0x1d89c9 = 0x0; _0x3a4f75 > _0x1d89c9; _0x1d89c9++) {
                    if (_0x5d728c = _0x10bebe[_0x1d89c9], _0x5d728c['destroyed'])
                        return;
                    if (_0x5d728c['event'](_0x258576, this['_event']['setTo'](_0x258576, _0x5d728c, _0x4fda6f)), this['_event']['_stoped'])
                        break;
                }
            }, _0x31c7ed['getEles'] = function (_0xf8d44f, _0x44436a, _0x42a3d0) {
                for (_0x42a3d0 ? _0x42a3d0['length'] = 0x0 : _0x42a3d0 = []; _0xf8d44f && _0xf8d44f != _0x44436a;)
                    _0x42a3d0['push'](_0xf8d44f), _0xf8d44f = _0xf8d44f['parent'];
                return _0x42a3d0;
            }, _0x31c7ed['checkMouse' + 'OutAndOver' + 'OfMove'] = function (_0x12d57e, _0x29aa17, _0xfd27b6) {
                if (void 0x0 === _0xfd27b6 && (_0xfd27b6 = 0x0), _0x29aa17 != _0x12d57e) {
                    var _0x5def91, _0x3b3206, _0x395b4e = 0x0, _0x1c75ef = 0x0;
                    if (_0x29aa17['contains'](_0x12d57e))
                        _0x3b3206 = this['getEles'](_0x12d57e, _0x29aa17, _0x8d74a5['_tEleArr']), this['sendEvents'](_0x3b3206, 'mouseover');
                    else {
                        if (_0x12d57e['contains'](_0x29aa17))
                            _0x3b3206 = this['getEles'](_0x29aa17, _0x12d57e, _0x8d74a5['_tEleArr']), this['sendEvents'](_0x3b3206, 'mouseout');
                        else {
                            _0x3b3206 = _0x8d74a5['_tEleArr'], _0x3b3206['length'] = 0x0;
                            var _0x390ea1;
                            _0x390ea1 = this['getEles'](_0x29aa17, null, _0x8d74a5['_oldArr']);
                            var _0x1ec2fa;
                            _0x1ec2fa = this['getEles'](_0x12d57e, null, _0x8d74a5['_newArr']), _0x1c75ef = _0x390ea1['length'];
                            var _0x23e8a6 = 0x0;
                            for (_0x395b4e = 0x0; _0x1c75ef > _0x395b4e; _0x395b4e++) {
                                if (_0x5def91 = _0x390ea1[_0x395b4e], _0x23e8a6 = _0x1ec2fa['indexOf'](_0x5def91), _0x23e8a6 >= 0x0) {
                                    _0x1ec2fa['splice'](_0x23e8a6, _0x1ec2fa['length'] - _0x23e8a6);
                                    break;
                                }
                                _0x3b3206['push'](_0x5def91);
                            }
                            _0x3b3206['length'] > 0x0 && this['sendEvents'](_0x3b3206, 'mouseout'), _0x1ec2fa['length'] > 0x0 && this['sendEvents'](_0x1ec2fa, 'mouseover');
                        }
                    }
                }
            }, _0x31c7ed['onMouseMov' + 'e'] = function (_0x404043, _0x47156f) {
                if (this['enable']) {
                    var _0x201aad;
                    _0x201aad = this['getTouchFr' + 'omArr'](_0x47156f, this['preOvers']);
                    var _0xea5ae3;
                    _0x201aad ? (this['checkMouse' + 'OutAndOver' + 'OfMove'](_0x404043, _0x201aad['tar']), _0x201aad['tar'] = _0x404043, _0xea5ae3 = this['getEles'](_0x404043, null, _0x8d74a5['_tEleArr'])) : (_0xea5ae3 = this['getEles'](_0x404043, null, _0x8d74a5['_tEleArr']), this['sendEvents'](_0xea5ae3, 'mouseover'), this['preOvers']['push'](this['createTouc' + 'hO'](_0x404043, _0x47156f))), this['sendEvents'](_0xea5ae3, 'mousemove'), this['_clearTemp' + 'Arrs']();
                }
            }, _0x31c7ed['getLastOve' + 'rs'] = function () {
                return _0x8d74a5['_tEleArr']['length'] = 0x0, this['preOvers']['length'] > 0x0 && this['preOvers'][0x0]['tar'] ? this['getEles'](this['preOvers'][0x0]['tar'], null, _0x8d74a5['_tEleArr']) : (_0x8d74a5['_tEleArr']['push'](_0x34a895['stage']), _0x8d74a5['_tEleArr']);
            }, _0x31c7ed['stageMouse' + 'Out'] = function () {
                var _0x31c36c;
                _0x31c36c = this['getLastOve' + 'rs'](), this['preOvers']['length'] = 0x0, this['sendEvents'](_0x31c36c, 'mouseout');
            }, _0x31c7ed['onMouseUp'] = function (_0xf9afa1, _0x46ff85, _0x2d8458) {
                if (void 0x0 === _0x2d8458 && (_0x2d8458 = !0x1), this['enable']) {
                    var _0x5b02d2, _0x53996c, _0x101161, _0x498867, _0x885354, _0x548fdd = 0x0, _0x154900 = 0x0, _0xa1c2b8 = _0x2ad6c5['onMobile'];
                    _0x53996c = this['getEles'](_0xf9afa1, null, _0x8d74a5['_tEleArr']), this['sendEvents'](_0x53996c, _0x2d8458 ? 'mouseup' : 'rightmouse' + 'up');
                    var _0x26b8f9;
                    if (_0x26b8f9 = _0x2d8458 ? this['preDowns'] : this['preRightDo' + 'wns'], _0x5b02d2 = this['getTouchFr' + 'omArr'](_0x46ff85, _0x26b8f9)) {
                        var _0x2711b3 = !0x1, _0x3a32fd = _0x2ad6c5['now']();
                        if (_0x2711b3 = _0x3a32fd - this['_lastClick' + 'Time'] < 0x12c, this['_lastClick' + 'Time'] = _0x3a32fd, _0xf9afa1 == _0x5b02d2['tar'])
                            _0x885354 = _0x53996c;
                        else {
                            for (_0x101161 = this['getEles'](_0x5b02d2['tar'], null, _0x8d74a5['_oldArr']), _0x885354 = _0x8d74a5['_newArr'], _0x885354['length'] = 0x0, _0x154900 = _0x101161['length'], _0x548fdd = 0x0; _0x154900 > _0x548fdd; _0x548fdd++)
                                _0x498867 = _0x101161[_0x548fdd], _0x53996c['indexOf'](_0x498867) >= 0x0 && _0x885354['push'](_0x498867);
                        }
                        _0x885354['length'] > 0x0 && this['sendEvents'](_0x885354, _0x2d8458 ? 'click' : 'rightclick'), _0x2d8458 && _0x2711b3 && this['sendEvents'](_0x885354, 'doubleclic' + 'k'), this['removeTouc' + 'hFromArr'](_0x46ff85, _0x26b8f9), _0x5b02d2['tar'] = null, _0x2249dd['recover']('TouchData', _0x5b02d2);
                    } else ;
                    _0x5b02d2 = this['getTouchFr' + 'omArr'](_0x46ff85, this['preOvers']), _0x5b02d2 && _0xa1c2b8 && (_0x885354 = this['getEles'](_0x5b02d2['tar'], null, _0x885354), _0x885354 && _0x885354['length'] > 0x0 && this['sendEvents'](_0x885354, 'mouseout'), this['removeTouc' + 'hFromArr'](_0x46ff85, this['preOvers']), _0x5b02d2['tar'] = null, _0x2249dd['recover']('TouchData', _0x5b02d2)), this['_clearTemp' + 'Arrs']();
                }
            }, _0x8d74a5['_oldArr'] = [], _0x8d74a5['_newArr'] = [], _0x8d74a5['_tEleArr'] = [], _0x5043ef(_0x8d74a5, [
                'I',
                function () {
                    return this['I'] = new _0x8d74a5();
                }
            ]), _0x8d74a5;
        }(), _0x1e263f = function () {
            function _0x361487() {
                this['fontName'] = null, this['complete'] = null, this['err'] = null, this['_fontTxt'] = null, this['_url'] = null, this['_div'] = null, this['_txtWidth'] = NaN, this['_http'] = null;
            }
            _0x4621f4(_0x361487, 'laya.net.T' + 'TFLoader');
            var _0x227aac = _0x361487['prototype'];
            return _0x227aac['load'] = function (_0x200bf6) {
                this['_url'] = _0x200bf6;
                var _0x2b46f5 = _0x200bf6['split']('.ttf')[0x0]['split']('/');
                this['fontName'] = _0x2b46f5[_0x2b46f5['length'] - 0x1], _0x4fec79['isConchApp'] ? this['_loadConch']() : _0x2ad6c5['window']['FontFace'] ? this['_loadWithF' + 'ontFace']() : this['_loadWithC' + 'SS']();
            }, _0x227aac['_loadConch'] = function () {
                this['_http'] = new _0x13dba9(), this['_http']['on']('error', this, this['_onErr']), this['_http']['on']('complete', this, this['_onHttpLoa' + 'ded']), this['_http']['send'](this['_url'], null, 'get', 'arraybuffe' + 'r');
            }, _0x227aac['_onHttpLoa' + 'ded'] = function (_0x2c8859) {
                _0x2ad6c5['window']['conchTextC' + 'anvas']['setFontFac' + 'eFromBuffe' + 'r'](this['fontName'], _0x2c8859), this['_clearHttp'](), this['_complete']();
            }, _0x227aac['_clearHttp'] = function () {
                this['_http'] && (this['_http']['off']('error', this, this['_onErr']), this['_http']['off']('complete', this, this['_onHttpLoa' + 'ded']), this['_http'] = null);
            }, _0x227aac['_onErr'] = function () {
                this['_clearHttp'](), this['err'] && (this['err']['runWith']('fail:' + this['_url']), this['err'] = null);
            }, _0x227aac['_complete'] = function () {
                _0x34a895['systemTime' + 'r']['clear'](this, this['_complete']), _0x34a895['systemTime' + 'r']['clear'](this, this['_checkComp' + 'lete']), this['_div'] && this['_div']['parentNode'] && (this['_div']['parentNode']['removeChil' + 'd'](this['_div']), this['_div'] = null), this['complete'] && (this['complete']['runWith'](this), this['complete'] = null);
            }, _0x227aac['_checkComp' + 'lete'] = function () {
                _0x552e50['measureTex' + 't']('LayaTTFFon' + 't', this['_fontTxt'])['width'] != this['_txtWidth'] && this['_complete']();
            }, _0x227aac['_loadWithF' + 'ontFace'] = function () {
                var _0x30fe52 = new _0x2ad6c5['window']['FontFace'](this['fontName'], 'url(\x27' + this['_url'] + '\x27)');
                _0x2ad6c5['window']['document']['fonts']['add'](_0x30fe52);
                var _0x249d42 = this;
                _0x30fe52['loaded']['then'](function () {
                    _0x249d42['_complete']();
                }), _0x30fe52['load']();
            }, _0x227aac['_createDiv'] = function () {
                this['_div'] = _0x2ad6c5['createElem' + 'ent']('div'), this['_div']['innerHTML'] = 'laya';
                var _0x553856 = this['_div']['style'];
                _0x553856['fontFamily'] = this['fontName'], _0x553856['position'] = 'absolute', _0x553856['left'] = '-100px', _0x553856['top'] = '-100px', _0x2ad6c5['document']['body']['appendChil' + 'd'](this['_div']);
            }, _0x227aac['_loadWithC' + 'SS'] = function () {
                var _0x3f655d = this, _0x27adeb = _0x2ad6c5['createElem' + 'ent']('style');
                _0x27adeb['type'] = 'text/css', _0x2ad6c5['document']['body']['appendChil' + 'd'](_0x27adeb), _0x27adeb['textConten' + 't'] = '@font-face' + '\x20{\x20font-fa' + 'mily:\x27' + this['fontName'] + ('\x27;\x20src:url' + '(\x27') + this['_url'] + '\x27);}', this['_fontTxt'] = '40px\x20' + this['fontName'], this['_txtWidth'] = _0x552e50['measureTex' + 't']('LayaTTFFon' + 't', this['_fontTxt'])['width'];
                var _0x173ac6 = this;
                _0x27adeb['onload'] = function () {
                    _0x34a895['systemTime' + 'r']['once'](0x2710, _0x173ac6, _0x3f655d['_complete']);
                }, _0x34a895['systemTime' + 'r']['loop'](0x14, this, this['_checkComp' + 'lete']), this['_createDiv']();
            }, _0x361487['_testStrin' + 'g'] = 'LayaTTFFon' + 't', _0x361487;
        }(), _0x42d053 = function () {
            function _0x494c8e() {
                this['_texture'] = null, this['_fontCharD' + 'ic'] = {}, this['_fontWidth' + 'Map'] = {}, this['_complete'] = null, this['_path'] = null, this['_maxWidth'] = 0x0, this['_spaceWidt' + 'h'] = 0xa, this['_padding'] = null, this['fontSize'] = 0xc, this['autoScaleS' + 'ize'] = !0x1, this['letterSpac' + 'ing'] = 0x0;
            }
            _0x4621f4(_0x494c8e, 'laya.displ' + 'ay.BitmapF' + 'ont');
            var _0x5a4cb7 = _0x494c8e['prototype'];
            return _0x5a4cb7['loadFont'] = function (_0x441445, _0x4f2574) {
                return this['_path'] = _0x441445, this['_complete'] = _0x4f2574, _0x441445 && -0x1 !== _0x441445['indexOf']('.fnt') ? void _0x34a895['loader']['load']([
                    {
                        'url': _0x441445,
                        'type': 'xml'
                    },
                    {
                        'url': _0x441445['replace']('.fnt', '.png'),
                        'type': 'image'
                    }
                ], _0x16ca2b['create'](this, this['_onLoaded'])) : void console['error']('Bitmap\x20fon' + 't\x20configur' + 'ation\x20info' + 'rmation\x20mu' + 'st\x20be\x20a\x20\x22.' + 'fnt\x22\x20file');
            }, _0x5a4cb7['_onLoaded'] = function () {
                this['parseFont'](_0x3943d1['getRes'](this['_path']), _0x3943d1['getRes'](this['_path']['replace']('.fnt', '.png'))), this['_complete'] && this['_complete']['run']();
            }, _0x5a4cb7['parseFont'] = function (_0x41a69b, _0x5a1dfe) {
                if (null != _0x41a69b && null != _0x5a1dfe) {
                    this['_texture'] = _0x5a1dfe;
                    var _0x10a190 = 0x1, _0x48ff95 = _0x41a69b['getElement' + 'sByTagName']('info');
                    if (!_0x48ff95[0x0]['getAttribu' + 'teNode'])
                        return this['parseFont2'](_0x41a69b, _0x5a1dfe);
                    this['fontSize'] = parseInt(_0x48ff95[0x0]['getAttribu' + 'teNode']('size')['nodeValue']);
                    var _0x16e0c3 = _0x48ff95[0x0]['getAttribu' + 'teNode']('padding')['nodeValue'], _0x34df29 = _0x16e0c3['split'](',');
                    this['_padding'] = [
                        parseInt(_0x34df29[0x0]),
                        parseInt(_0x34df29[0x1]),
                        parseInt(_0x34df29[0x2]),
                        parseInt(_0x34df29[0x3])
                    ];
                    var _0x13c681;
                    _0x13c681 = _0x41a69b['getElement' + 'sByTagName']('char');
                    var _0x10009c = 0x0;
                    for (_0x10009c = 0x0; _0x10009c < _0x13c681['length']; _0x10009c++) {
                        var _0x161fb2 = _0x13c681[_0x10009c], _0x5047e2 = parseInt(_0x161fb2['getAttribu' + 'teNode']('id')['nodeValue']), _0x5f21f5 = parseInt(_0x161fb2['getAttribu' + 'teNode']('xoffset')['nodeValue']) / _0x10a190, _0x4a4cbc = parseInt(_0x161fb2['getAttribu' + 'teNode']('yoffset')['nodeValue']) / _0x10a190, _0x30a27e = parseInt(_0x161fb2['getAttribu' + 'teNode']('xadvance')['nodeValue']) / _0x10a190, _0x19ad77 = new _0x22858b();
                        _0x19ad77['x'] = parseInt(_0x161fb2['getAttribu' + 'teNode']('x')['nodeValue']), _0x19ad77['y'] = parseInt(_0x161fb2['getAttribu' + 'teNode']('y')['nodeValue']), _0x19ad77['width'] = parseInt(_0x161fb2['getAttribu' + 'teNode']('width')['nodeValue']), _0x19ad77['height'] = parseInt(_0x161fb2['getAttribu' + 'teNode']('height')['nodeValue']);
                        var _0x50e72a = _0x49c097['create'](_0x5a1dfe, _0x19ad77['x'], _0x19ad77['y'], _0x19ad77['width'], _0x19ad77['height'], _0x5f21f5, _0x4a4cbc);
                        this['_maxWidth'] = Math['max'](this['_maxWidth'], _0x30a27e + this['letterSpac' + 'ing']), this['_fontCharD' + 'ic'][_0x5047e2] = _0x50e72a, this['_fontWidth' + 'Map'][_0x5047e2] = _0x30a27e;
                    }
                }
            }, _0x5a4cb7['parseFont2'] = function (_0x17369d, _0x4840f6) {
                if (null != _0x17369d && null != _0x4840f6) {
                    this['_texture'] = _0x4840f6;
                    var _0x5bdcfd = 0x1, _0x2701f8 = _0x17369d['getElement' + 'sByTagName']('info');
                    this['fontSize'] = parseInt(_0x2701f8[0x0]['attributes']['size']['nodeValue']);
                    var _0x525514 = _0x2701f8[0x0]['attributes']['padding']['nodeValue'], _0x3ae53b = _0x525514['split'](',');
                    this['_padding'] = [
                        parseInt(_0x3ae53b[0x0]),
                        parseInt(_0x3ae53b[0x1]),
                        parseInt(_0x3ae53b[0x2]),
                        parseInt(_0x3ae53b[0x3])
                    ];
                    var _0x50cd6f = _0x17369d['getElement' + 'sByTagName']('char'), _0x22544e = 0x0;
                    for (_0x22544e = 0x0; _0x22544e < _0x50cd6f['length']; _0x22544e++) {
                        var _0xc8075f = _0x50cd6f[_0x22544e]['attributes'], _0x3f2dc1 = parseInt(_0xc8075f['id']['nodeValue']), _0x4f3be6 = parseInt(_0xc8075f['xoffset']['nodeValue']) / _0x5bdcfd, _0x36f33b = parseInt(_0xc8075f['yoffset']['nodeValue']) / _0x5bdcfd, _0x4db113 = parseInt(_0xc8075f['xadvance']['nodeValue']) / _0x5bdcfd, _0x4a5f7a = new _0x22858b();
                        _0x4a5f7a['x'] = parseInt(_0xc8075f['x']['nodeValue']), _0x4a5f7a['y'] = parseInt(_0xc8075f['y']['nodeValue']), _0x4a5f7a['width'] = parseInt(_0xc8075f['width']['nodeValue']), _0x4a5f7a['height'] = parseInt(_0xc8075f['height']['nodeValue']);
                        var _0xf1d96d = _0x49c097['create'](_0x4840f6, _0x4a5f7a['x'], _0x4a5f7a['y'], _0x4a5f7a['width'], _0x4a5f7a['height'], _0x4f3be6, _0x36f33b);
                        this['_maxWidth'] = Math['max'](this['_maxWidth'], _0x4db113 + this['letterSpac' + 'ing']), this['_fontCharD' + 'ic'][_0x3f2dc1] = _0xf1d96d, this['_fontWidth' + 'Map'][_0x3f2dc1] = _0x4db113;
                    }
                }
            }, _0x5a4cb7['getCharTex' + 'ture'] = function (_0x2ec5e2) {
                return this['_fontCharD' + 'ic'][_0x2ec5e2['charCodeAt'](0x0)];
            }, _0x5a4cb7['destroy'] = function () {
                if (this['_texture']) {
                    for (var _0x5dded2 in this['_fontCharD' + 'ic']) {
                        var _0x5bf5ed = this['_fontCharD' + 'ic'][_0x5dded2];
                        _0x5bf5ed && _0x5bf5ed['destroy']();
                    }
                    this['_texture']['destroy'](), this['_fontCharD' + 'ic'] = null, this['_fontWidth' + 'Map'] = null, this['_texture'] = null, this['_complete'] = null, this['_padding'] = null;
                }
            }, _0x5a4cb7['setSpaceWi' + 'dth'] = function (_0x328189) {
                this['_spaceWidt' + 'h'] = _0x328189;
            }, _0x5a4cb7['getCharWid' + 'th'] = function (_0x565f19) {
                var _0x365293 = _0x565f19['charCodeAt'](0x0);
                return this['_fontWidth' + 'Map'][_0x365293] ? this['_fontWidth' + 'Map'][_0x365293] + this['letterSpac' + 'ing'] : '\x20' === _0x565f19 ? this['_spaceWidt' + 'h'] + this['letterSpac' + 'ing'] : 0x0;
            }, _0x5a4cb7['getTextWid' + 'th'] = function (_0x5090e1) {
                for (var _0x4443db = 0x0, _0x210013 = 0x0, _0x268257 = _0x5090e1['length']; _0x268257 > _0x210013; _0x210013++)
                    _0x4443db += this['getCharWid' + 'th'](_0x5090e1['charAt'](_0x210013));
                return _0x4443db;
            }, _0x5a4cb7['getMaxWidt' + 'h'] = function () {
                return this['_maxWidth'];
            }, _0x5a4cb7['getMaxHeig' + 'ht'] = function () {
                return this['fontSize'];
            }, _0x5a4cb7['_drawText'] = function (_0x1a42ee, _0x3e96cd, _0x423d13, _0x16fe90, _0x26e071, _0x2a6179) {
                var _0x2d452d, _0x2902fd = this['getTextWid' + 'th'](_0x1a42ee), _0x58a557 = 0x0;
                'center' === _0x26e071 && (_0x58a557 = (_0x2a6179 - _0x2902fd) / 0x2), 'right' === _0x26e071 && (_0x58a557 = _0x2a6179 - _0x2902fd);
                for (var _0x1ef58e = 0x0, _0x32832b = 0x0, _0x2b7e7d = _0x1a42ee['length']; _0x2b7e7d > _0x32832b; _0x32832b++)
                    _0x2d452d = this['getCharTex' + 'ture'](_0x1a42ee['charAt'](_0x32832b)), _0x2d452d && (_0x3e96cd['graphics']['drawImage'](_0x2d452d, _0x423d13 + _0x1ef58e + _0x58a557, _0x16fe90), _0x1ef58e += this['getCharWid' + 'th'](_0x1a42ee['charAt'](_0x32832b)));
            }, _0x494c8e;
        }(), _0x421b39 = function () {
            function _0x14ced5() {
            }
            return _0x4621f4(_0x14ced5, 'laya.utils' + '.ClassUtil' + 's'), _0x14ced5['regClass'] = function (_0x7621a5, _0x5e2292) {
                _0x14ced5['_classMap'][_0x7621a5] = _0x5e2292;
            }, _0x14ced5['regShortCl' + 'assName'] = function (_0xab7b79) {
                for (var _0x115302 = 0x0; _0x115302 < _0xab7b79['length']; _0x115302++) {
                    var _0xe9252e = _0xab7b79[_0x115302], _0x550bad = _0xe9252e['name'];
                    _0x14ced5['_classMap'][_0x550bad] = _0xe9252e;
                }
            }, _0x14ced5['getRegClas' + 's'] = function (_0x586061) {
                return _0x14ced5['_classMap'][_0x586061];
            }, _0x14ced5['getClass'] = function (_0x2c2bfa) {
                var _0x2e2f08 = _0x14ced5['_classMap'][_0x2c2bfa] || _0x2c2bfa;
                return 'string' == typeof _0x2e2f08 ? _0x34a895['__classmap'][_0x2e2f08] || _0x34a895[_0x2c2bfa] : _0x2e2f08;
            }, _0x14ced5['getInstanc' + 'e'] = function (_0x534623) {
                var _0x57c356 = _0x14ced5['getClass'](_0x534623);
                return _0x57c356 ? new _0x57c356() : (console['warn']('[error]\x20Un' + 'defined\x20cl' + 'ass:', _0x534623), null);
            }, _0x14ced5['createByJs' + 'on'] = function (_0x1f8815, _0x491211, _0xb1d07f, _0x29af3b, _0x2f12b8) {
                'string' == typeof _0x1f8815 && (_0x1f8815 = JSON['parse'](_0x1f8815));
                var _0x19a5d8 = _0x1f8815['props'];
                if (!_0x491211 && (_0x491211 = _0x2f12b8 ? _0x2f12b8['runWith'](_0x1f8815) : _0x14ced5['getInstanc' + 'e'](_0x19a5d8['runtime'] || _0x1f8815['type']), !_0x491211))
                    return null;
                var _0x4f304b = _0x1f8815['child'];
                if (_0x4f304b)
                    for (var _0x3fb84a = 0x0, _0x25428a = _0x4f304b['length']; _0x25428a > _0x3fb84a; _0x3fb84a++) {
                        var _0x2b239d = _0x4f304b[_0x3fb84a];
                        if ('render' !== _0x2b239d['props']['name'] && 'render' !== _0x2b239d['props']['renderType'] || !_0x491211['_$set_item' + 'Render']) {
                            if ('Graphic' == _0x2b239d['type'])
                                _0x14ced5['_addGraphi' + 'csToSprite'](_0x2b239d, _0x491211);
                            else {
                                if (_0x14ced5['_isDrawTyp' + 'e'](_0x2b239d['type']))
                                    _0x14ced5['_addGraphi' + 'cToSprite'](_0x2b239d, _0x491211, !0x0);
                                else {
                                    var _0x2de5f6 = _0x14ced5['createByJs' + 'on'](_0x2b239d, null, _0xb1d07f, _0x29af3b, _0x2f12b8);
                                    'Script' === _0x2b239d['type'] ? _0x2de5f6['hasOwnProp' + 'erty']('owner') ? _0x2de5f6['owner'] = _0x491211 : _0x2de5f6['hasOwnProp' + 'erty']('target') && (_0x2de5f6['target'] = _0x491211) : 'mask' == _0x2b239d['props']['renderType'] ? _0x491211['mask'] = _0x2de5f6 : _0x491211['addChild'](_0x2de5f6);
                                }
                            }
                        } else
                            _0x491211['itemRender'] = _0x2b239d;
                    }
                if (_0x19a5d8)
                    for (var _0x3d8876 in _0x19a5d8) {
                        var _0x170dbc = _0x19a5d8[_0x3d8876];
                        'var' === _0x3d8876 && _0xb1d07f ? _0xb1d07f[_0x170dbc] = _0x491211 : _0x170dbc instanceof Array && 'function' == typeof _0x491211[_0x3d8876] ? _0x491211[_0x3d8876]['apply'](_0x491211, _0x170dbc) : _0x491211[_0x3d8876] = _0x170dbc;
                    }
                return _0x29af3b && _0x1f8815['customProp' + 's'] && _0x29af3b['runWith']([
                    _0x491211,
                    _0x1f8815
                ]), _0x491211['created'] && _0x491211['created'](), _0x491211;
            }, _0x14ced5['_addGraphi' + 'csToSprite'] = function (_0x3724fe, _0x31d5be) {
                var _0x167f64 = _0x3724fe['child'];
                if (_0x167f64 && !(_0x167f64['length'] < 0x1)) {
                    var _0x2b2a25 = _0x14ced5['_getGraphi' + 'csFromSpri' + 'te'](_0x3724fe, _0x31d5be), _0x4990e6 = 0x0, _0x1a6e47 = 0x0;
                    _0x3724fe['props'] && (_0x4990e6 = _0x14ced5['_getObjVar'](_0x3724fe['props'], 'x', 0x0), _0x1a6e47 = _0x14ced5['_getObjVar'](_0x3724fe['props'], 'y', 0x0)), 0x0 != _0x4990e6 && 0x0 != _0x1a6e47 && _0x2b2a25['translate'](_0x4990e6, _0x1a6e47);
                    var _0x272f7d = 0x0, _0x37b8b6 = 0x0;
                    for (_0x37b8b6 = _0x167f64['length'], _0x272f7d = 0x0; _0x37b8b6 > _0x272f7d; _0x272f7d++)
                        _0x14ced5['_addGraphi' + 'cToGraphic' + 's'](_0x167f64[_0x272f7d], _0x2b2a25);
                    0x0 != _0x4990e6 && 0x0 != _0x1a6e47 && _0x2b2a25['translate'](-_0x4990e6, -_0x1a6e47);
                }
            }, _0x14ced5['_addGraphi' + 'cToSprite'] = function (_0x4c9232, _0x167e4a, _0x4a0322) {
                void 0x0 === _0x4a0322 && (_0x4a0322 = !0x1);
                var _0x106cfa = _0x4a0322 ? _0x14ced5['_getGraphi' + 'csFromSpri' + 'te'](_0x4c9232, _0x167e4a) : _0x167e4a['graphics'];
                _0x14ced5['_addGraphi' + 'cToGraphic' + 's'](_0x4c9232, _0x106cfa);
            }, _0x14ced5['_getGraphi' + 'csFromSpri' + 'te'] = function (_0x6b6a88, _0x480847) {
                if (!_0x6b6a88 || !_0x6b6a88['props'])
                    return _0x480847['graphics'];
                var _0x5e103f = _0x6b6a88['props']['renderType'];
                if ('hit' === _0x5e103f || 'unHit' === _0x5e103f) {
                    var _0xaf7f95 = _0x480847['_style']['hitArea'] || (_0x480847['hitArea'] = new _0x5cbd9c());
                    _0xaf7f95[_0x5e103f] || (_0xaf7f95[_0x5e103f] = new _0x42326c());
                    var _0x4a4cf4 = _0xaf7f95[_0x5e103f];
                }
                return _0x4a4cf4 || (_0x4a4cf4 = _0x480847['graphics']), _0x4a4cf4;
            }, _0x14ced5['_getTransf' + 'ormData'] = function (_0x5b2c57) {
                var _0x3d0d3b;
                (_0x5b2c57['hasOwnProp' + 'erty']('pivotX') || _0x5b2c57['hasOwnProp' + 'erty']('pivotY')) && (_0x3d0d3b = _0x3d0d3b || new _0x250bb7(), _0x3d0d3b['translate'](-_0x14ced5['_getObjVar'](_0x5b2c57, 'pivotX', 0x0), -_0x14ced5['_getObjVar'](_0x5b2c57, 'pivotY', 0x0)));
                var _0x449fa9 = _0x14ced5['_getObjVar'](_0x5b2c57, 'scaleX', 0x1), _0x9725a2 = _0x14ced5['_getObjVar'](_0x5b2c57, 'scaleY', 0x1), _0x57fe87 = _0x14ced5['_getObjVar'](_0x5b2c57, 'rotation', 0x0);
                return _0x14ced5['_getObjVar'](_0x5b2c57, 'skewX', 0x0), _0x14ced5['_getObjVar'](_0x5b2c57, 'skewY', 0x0), ((0x1 != _0x449fa9 || 0x1 != _0x9725a2 || 0x0 != _0x57fe87) && (_0x3d0d3b = _0x3d0d3b || new _0x250bb7(), _0x3d0d3b['scale'](_0x449fa9, _0x9725a2), _0x3d0d3b['rotate'](0.0174532922222222 * _0x57fe87)), _0x3d0d3b);
            }, _0x14ced5['_addGraphi' + 'cToGraphic' + 's'] = function (_0x3502c5, _0x2c6d66) {
                var _0x4e9c7f;
                if (_0x4e9c7f = _0x3502c5['props']) {
                    var _0xac43ab;
                    if (_0xac43ab = _0x14ced5['DrawTypeDi' + 'c'][_0x3502c5['type']]) {
                        var _0x4a9d73 = _0x2c6d66, _0x2a3135 = _0x14ced5['_getParams'](_0x4e9c7f, _0xac43ab[0x1], _0xac43ab[0x2], _0xac43ab[0x3]), _0x14922a = _0x14ced5['_tM'];
                        (_0x14922a || 0x1 != _0x14ced5['_alpha']) && (_0x4a9d73['save'](), _0x14922a && _0x4a9d73['transform'](_0x14922a), 0x1 != _0x14ced5['_alpha'] && _0x4a9d73['alpha'](_0x14ced5['_alpha'])), _0x4a9d73[_0xac43ab[0x0]]['apply'](_0x4a9d73, _0x2a3135), (_0x14922a || 0x1 != _0x14ced5['_alpha']) && _0x4a9d73['restore']();
                    }
                }
            }, _0x14ced5['_adptLineD' + 'ata'] = function (_0x47685b) {
                return _0x47685b[0x2] = parseFloat(_0x47685b[0x0]) + parseFloat(_0x47685b[0x2]), _0x47685b[0x3] = parseFloat(_0x47685b[0x1]) + parseFloat(_0x47685b[0x3]), _0x47685b;
            }, _0x14ced5['_adptTextu' + 'reData'] = function (_0x5890ae) {
                return _0x5890ae[0x0] = _0x3943d1['getRes'](_0x5890ae[0x0]), _0x5890ae;
            }, _0x14ced5['_adptLines' + 'Data'] = function (_0xa77b2d) {
                return _0xa77b2d[0x2] = _0x14ced5['_getPointL' + 'istByStr'](_0xa77b2d[0x2]), _0xa77b2d;
            }, _0x14ced5['_isDrawTyp' + 'e'] = function (_0xe647b8) {
                return 'Image' === _0xe647b8 ? !0x1 : _0x14ced5['DrawTypeDi' + 'c']['hasOwnProp' + 'erty'](_0xe647b8);
            }, _0x14ced5['_getParams'] = function (_0x806fd9, _0x6f748c, _0x448e1f, _0x12aad6) {
                void 0x0 === _0x448e1f && (_0x448e1f = 0x0);
                var _0x295154 = _0x14ced5['_temParam'];
                _0x295154['length'] = _0x6f748c['length'];
                var _0x3ba121 = 0x0, _0x578616 = 0x0;
                for (_0x578616 = _0x6f748c['length'], _0x3ba121 = 0x0; _0x578616 > _0x3ba121; _0x3ba121++)
                    _0x295154[_0x3ba121] = _0x14ced5['_getObjVar'](_0x806fd9, _0x6f748c[_0x3ba121][0x0], _0x6f748c[_0x3ba121][0x1]);
                _0x14ced5['_alpha'] = _0x14ced5['_getObjVar'](_0x806fd9, 'alpha', 0x1);
                var _0x327f40;
                return _0x327f40 = _0x14ced5['_getTransf' + 'ormData'](_0x806fd9), _0x327f40 ? (_0x448e1f || (_0x448e1f = 0x0), _0x327f40['translate'](_0x295154[_0x448e1f], _0x295154[_0x448e1f + 0x1]), _0x295154[_0x448e1f] = _0x295154[_0x448e1f + 0x1] = 0x0, _0x14ced5['_tM'] = _0x327f40) : _0x14ced5['_tM'] = null, _0x12aad6 && _0x14ced5[_0x12aad6] && (_0x295154 = _0x14ced5[_0x12aad6](_0x295154)), _0x295154;
            }, _0x14ced5['_getPointL' + 'istByStr'] = function (_0x3ad4d1) {
                var _0x525896 = _0x3ad4d1['split'](','), _0x9c0b2f = 0x0, _0x405a61 = 0x0;
                for (_0x405a61 = _0x525896['length'], _0x9c0b2f = 0x0; _0x405a61 > _0x9c0b2f; _0x9c0b2f++)
                    _0x525896[_0x9c0b2f] = parseFloat(_0x525896[_0x9c0b2f]);
                return _0x525896;
            }, _0x14ced5['_getObjVar'] = function (_0x161b2a, _0x4da992, _0x4d3902) {
                return _0x161b2a['hasOwnProp' + 'erty'](_0x4da992) ? _0x161b2a[_0x4da992] : _0x4d3902;
            }, _0x14ced5['_temParam'] = [], _0x14ced5['_classMap'] = {
                'Sprite': _0x4bc7a0,
                'Scene': _0x48bea3,
                'Text': _0x12a05f,
                'Animation': 'laya.displ' + 'ay.Animati' + 'on',
                'Skeleton': 'laya.ani.b' + 'one.Skelet' + 'on',
                'Particle2D': 'laya.parti' + 'cle.Partic' + 'le2D',
                'div': 'laya.html.' + 'dom.HTMLDi' + 'vParser',
                'p': 'laya.html.' + 'dom.HTMLEl' + 'ement',
                'img': 'laya.html.' + 'dom.HTMLIm' + 'ageElement',
                'span': 'laya.html.' + 'dom.HTMLEl' + 'ement',
                'br': 'laya.html.' + 'dom.HTMLBr' + 'Element',
                'style': 'laya.html.' + 'dom.HTMLSt' + 'yleElement',
                'font': 'laya.html.' + 'dom.HTMLEl' + 'ement',
                'a': 'laya.html.' + 'dom.HTMLEl' + 'ement',
                '#text': 'laya.html.' + 'dom.HTMLEl' + 'ement',
                'link': 'laya.html.' + 'dom.HTMLLi' + 'nkElement'
            }, _0x14ced5['_tM'] = null, _0x14ced5['_alpha'] = NaN, _0x5043ef(_0x14ced5, [
                'DrawTypeDi' + 'c',
                function () {
                    return this['DrawTypeDi' + 'c'] = {
                        'Rect': [
                            'drawRect',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'width',
                                    0x0
                                ],
                                [
                                    'height',
                                    0x0
                                ],
                                [
                                    'fillColor',
                                    null
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x1
                                ]
                            ]
                        ],
                        'Circle': [
                            'drawCircle',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'radius',
                                    0x0
                                ],
                                [
                                    'fillColor',
                                    null
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x1
                                ]
                            ]
                        ],
                        'Pie': [
                            'drawPie',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'radius',
                                    0x0
                                ],
                                [
                                    'startAngle',
                                    0x0
                                ],
                                [
                                    'endAngle',
                                    0x0
                                ],
                                [
                                    'fillColor',
                                    null
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x1
                                ]
                            ]
                        ],
                        'Image': [
                            'drawTextur' + 'e',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'width',
                                    0x0
                                ],
                                [
                                    'height',
                                    0x0
                                ]
                            ]
                        ],
                        'Texture': [
                            'drawTextur' + 'e',
                            [
                                [
                                    'skin',
                                    null
                                ],
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'width',
                                    0x0
                                ],
                                [
                                    'height',
                                    0x0
                                ]
                            ],
                            0x1,
                            '_adptTextu' + 'reData'
                        ],
                        'FillTexture': [
                            'fillTextur' + 'e',
                            [
                                [
                                    'skin',
                                    null
                                ],
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'width',
                                    0x0
                                ],
                                [
                                    'height',
                                    0x0
                                ],
                                [
                                    'repeat',
                                    null
                                ]
                            ],
                            0x1,
                            '_adptTextu' + 'reData'
                        ],
                        'FillText': [
                            'fillText',
                            [
                                [
                                    'text',
                                    ''
                                ],
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'font',
                                    null
                                ],
                                [
                                    'color',
                                    null
                                ],
                                [
                                    'textAlign',
                                    null
                                ]
                            ],
                            0x1
                        ],
                        'Line': [
                            'drawLine',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'toX',
                                    0x0
                                ],
                                [
                                    'toY',
                                    0x0
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x0
                                ]
                            ],
                            0x0,
                            '_adptLineD' + 'ata'
                        ],
                        'Lines': [
                            'drawLines',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'points',
                                    ''
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x0
                                ]
                            ],
                            0x0,
                            '_adptLines' + 'Data'
                        ],
                        'Curves': [
                            'drawCurves',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'points',
                                    ''
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x0
                                ]
                            ],
                            0x0,
                            '_adptLines' + 'Data'
                        ],
                        'Poly': [
                            'drawPoly',
                            [
                                [
                                    'x',
                                    0x0
                                ],
                                [
                                    'y',
                                    0x0
                                ],
                                [
                                    'points',
                                    ''
                                ],
                                [
                                    'fillColor',
                                    null
                                ],
                                [
                                    'lineColor',
                                    null
                                ],
                                [
                                    'lineWidth',
                                    0x1
                                ]
                            ],
                            0x0,
                            '_adptLines' + 'Data'
                        ]
                    };
                }
            ]), _0x14ced5;
        }(), _0x51e35a = (function () {
            function _0xc0bb3c() {
                this['reset']();
            }
            _0x4621f4(_0xc0bb3c, 'laya.utils' + '.HTMLChar');
            var _0x12de37 = _0xc0bb3c['prototype'];
            return _0x12de37['setData'] = function (_0xcc51a4, _0xef76d0, _0x5e82a3, _0x2a7a8c) {
                return this['char'] = _0xcc51a4, this['charNum'] = _0xcc51a4['charCodeAt'](0x0), this['x'] = this['y'] = 0x0, this['width'] = _0xef76d0, this['height'] = _0x5e82a3, this['style'] = _0x2a7a8c, this['isWord'] = !_0xc0bb3c['_isWordReg' + 'Exp']['test'](_0xcc51a4), this;
            }, _0x12de37['reset'] = function () {
                return this['x'] = this['y'] = this['width'] = this['height'] = 0x0, this['isWord'] = !0x1, this['char'] = null, this['charNum'] = 0x0, this['style'] = null, this;
            }, _0x12de37['recover'] = function () {
                _0x2249dd['recover']('HTMLChar', this['reset']());
            }, _0x12de37['_isChar'] = function () {
                return !0x0;
            }, _0x12de37['_getCSSSty' + 'le'] = function () {
                return this['style'];
            }, _0xc0bb3c['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('HTMLChar', _0xc0bb3c);
            }, _0xc0bb3c['_isWordReg' + 'Exp'] = new RegExp('[\x5cw.]', ''), _0xc0bb3c;
        }(), function () {
            function _0x492eac() {
            }
            _0x4621f4(_0x492eac, 'laya.displ' + 'ay.cmd.Dra' + 'wParticleC' + 'md');
            var _0x56cc4f = _0x492eac['prototype'];
            return _0x56cc4f['recover'] = function () {
                this['_templ'] = null, _0x2249dd['recover']('DrawPartic' + 'leCmd', this);
            }, _0x56cc4f['run'] = function (_0x22311b, _0x4e6b21, _0x1e63ae) {
                _0x22311b['drawPartic' + 'le'](_0x4e6b21, _0x1e63ae, this['_templ']);
            }, _0x71e09a(0x0, _0x56cc4f, 'cmdID', function () {
                return 'DrawPartic' + 'leCmd';
            }), _0x492eac['create'] = function (_0x2aacf5) {
                var _0x11fcb6 = _0x2249dd['getItemByC' + 'lass']('DrawPartic' + 'leCmd', _0x492eac);
                return _0x11fcb6['_templ'] = _0x2aacf5, _0x11fcb6;
            }, _0x492eac['ID'] = 'DrawPartic' + 'leCmd', _0x492eac;
        }(), function () {
            function _0x82dd6c() {
            }
            return _0x4621f4(_0x82dd6c, 'laya.event' + 's.KeyBoard' + 'Manager'), _0x82dd6c['__init__'] = function () {
                _0x82dd6c['_addEvent']('keydown'), _0x82dd6c['_addEvent']('keypress'), _0x82dd6c['_addEvent']('keyup');
            }, _0x82dd6c['_addEvent'] = function (_0x4a7396) {
                _0x2ad6c5['document']['addEventLi' + 'stener'](_0x4a7396, function (_0x33ced7) {
                    laya['events']['KeyBoardMa' + 'nager']['_dispatch'](_0x33ced7, _0x4a7396);
                }, !0x0);
            }, _0x82dd6c['_dispatch'] = function (_0x1f0c30, _0x5cf9d7) {
                if (_0x82dd6c['enabled']) {
                    _0x82dd6c['_event']['_stoped'] = !0x1, _0x82dd6c['_event']['nativeEven' + 't'] = _0x1f0c30, _0x82dd6c['_event']['keyCode'] = _0x1f0c30['keyCode'] || _0x1f0c30['which'] || _0x1f0c30['charCode'], 'keydown' === _0x5cf9d7 ? _0x82dd6c['_pressKeys'][_0x82dd6c['_event']['keyCode']] = !0x0 : 'keyup' === _0x5cf9d7 && (_0x82dd6c['_pressKeys'][_0x82dd6c['_event']['keyCode']] = null);
                    for (var _0x487293 = _0x34a895['stage']['focus'] && null != _0x34a895['stage']['focus']['event'] && _0x34a895['stage']['focus']['displayedI' + 'nStage'] ? _0x34a895['stage']['focus'] : _0x34a895['stage'], _0x1c3eb6 = _0x487293; _0x1c3eb6;)
                        _0x1c3eb6['event'](_0x5cf9d7, _0x82dd6c['_event']['setTo'](_0x5cf9d7, _0x1c3eb6, _0x487293)), _0x1c3eb6 = _0x1c3eb6['parent'];
                }
            }, _0x82dd6c['hasKeyDown'] = function (_0x1bd979) {
                return _0x82dd6c['_pressKeys'][_0x1bd979];
            }, _0x82dd6c['_pressKeys'] = {}, _0x82dd6c['enabled'] = !0x0, _0x5043ef(_0x82dd6c, [
                '_event',
                function () {
                    return this['_event'] = new _0x4a4c33();
                }
            ]), _0x82dd6c;
        }()), _0x2a54bf = (function () {
            function _0x113d81() {
            }
            return _0x4621f4(_0x113d81, 'laya.event' + 's.Keyboard'), _0x113d81['NUMBER_0'] = 0x30, _0x113d81['NUMBER_1'] = 0x31, _0x113d81['NUMBER_2'] = 0x32, _0x113d81['NUMBER_3'] = 0x33, _0x113d81['NUMBER_4'] = 0x34, _0x113d81['NUMBER_5'] = 0x35, _0x113d81['NUMBER_6'] = 0x36, _0x113d81['NUMBER_7'] = 0x37, _0x113d81['NUMBER_8'] = 0x38, _0x113d81['NUMBER_9'] = 0x39, _0x113d81['A'] = 0x41, _0x113d81['B'] = 0x42, _0x113d81['C'] = 0x43, _0x113d81['D'] = 0x44, _0x113d81['E'] = 0x45, _0x113d81['F'] = 0x46, _0x113d81['G'] = 0x47, _0x113d81['H'] = 0x48, _0x113d81['I'] = 0x49, _0x113d81['J'] = 0x4a, _0x113d81['K'] = 0x4b, _0x113d81['L'] = 0x4c, _0x113d81['M'] = 0x4d, _0x113d81['N'] = 0x4e, _0x113d81['O'] = 0x4f, _0x113d81['P'] = 0x50, _0x113d81['Q'] = 0x51, _0x113d81['R'] = 0x52, _0x113d81['S'] = 0x53, _0x113d81['T'] = 0x54, _0x113d81['U'] = 0x55, _0x113d81['V'] = 0x56, _0x113d81['W'] = 0x57, _0x113d81['X'] = 0x58, _0x113d81['Y'] = 0x59, _0x113d81['Z'] = 0x5a, _0x113d81['F1'] = 0x70, _0x113d81['F2'] = 0x71, _0x113d81['F3'] = 0x72, _0x113d81['F4'] = 0x73, _0x113d81['F5'] = 0x74, _0x113d81['F6'] = 0x75, _0x113d81['F7'] = 0x76, _0x113d81['F8'] = 0x77, _0x113d81['F9'] = 0x78, _0x113d81['F10'] = 0x79, _0x113d81['F11'] = 0x7a, _0x113d81['F12'] = 0x7b, _0x113d81['F13'] = 0x7c, _0x113d81['F14'] = 0x7d, _0x113d81['F15'] = 0x7e, _0x113d81['NUMPAD'] = 0x15, _0x113d81['NUMPAD_0'] = 0x60, _0x113d81['NUMPAD_1'] = 0x61, _0x113d81['NUMPAD_2'] = 0x62, _0x113d81['NUMPAD_3'] = 0x63, _0x113d81['NUMPAD_4'] = 0x64, _0x113d81['NUMPAD_5'] = 0x65, _0x113d81['NUMPAD_6'] = 0x66, _0x113d81['NUMPAD_7'] = 0x67, _0x113d81['NUMPAD_8'] = 0x68, _0x113d81['NUMPAD_9'] = 0x69, _0x113d81['NUMPAD_ADD'] = 0x6b, _0x113d81['NUMPAD_DEC' + 'IMAL'] = 0x6e, _0x113d81['NUMPAD_DIV' + 'IDE'] = 0x6f, _0x113d81['NUMPAD_ENT' + 'ER'] = 0x6c, _0x113d81['NUMPAD_MUL' + 'TIPLY'] = 0x6a, _0x113d81['NUMPAD_SUB' + 'TRACT'] = 0x6d, _0x113d81['SEMICOLON'] = 0xba, _0x113d81['EQUAL'] = 0xbb, _0x113d81['COMMA'] = 0xbc, _0x113d81['MINUS'] = 0xbd, _0x113d81['PERIOD'] = 0xbe, _0x113d81['SLASH'] = 0xbf, _0x113d81['BACKQUOTE'] = 0xc0, _0x113d81['LEFTBRACKE' + 'T'] = 0xdb, _0x113d81['BACKSLASH'] = 0xdc, _0x113d81['RIGHTBRACK' + 'ET'] = 0xdd, _0x113d81['QUOTE'] = 0xde, _0x113d81['ALTERNATE'] = 0x12, _0x113d81['BACKSPACE'] = 0x8, _0x113d81['CAPS_LOCK'] = 0x14, _0x113d81['COMMAND'] = 0xf, _0x113d81['CONTROL'] = 0x11, _0x113d81['DELETE'] = 0x2e, _0x113d81['ENTER'] = 0xd, _0x113d81['ESCAPE'] = 0x1b, _0x113d81['PAGE_UP'] = 0x21, _0x113d81['PAGE_DOWN'] = 0x22, _0x113d81['END'] = 0x23, _0x113d81['HOME'] = 0x24, _0x113d81['LEFT'] = 0x25, _0x113d81['UP'] = 0x26, _0x113d81['RIGHT'] = 0x27, _0x113d81['DOWN'] = 0x28, _0x113d81['SHIFT'] = 0x10, _0x113d81['SPACE'] = 0x20, _0x113d81['TAB'] = 0x9, _0x113d81['INSERT'] = 0x2d, _0x113d81;
        }(), function () {
            function _0x85c82b() {
            }
            _0x4621f4(_0x85c82b, 'laya.displ' + 'ay.cmd.Dra' + 'wCircleCmd');
            var _0x1d657e = _0x85c82b['prototype'];
            return _0x1d657e['recover'] = function () {
                this['fillColor'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawCircle' + 'Cmd', this);
            }, _0x1d657e['run'] = function (_0x53fff9, _0x3a1774, _0x50bbdd) {
                _0x53fff9['_drawCircl' + 'e'](this['x'] + _0x3a1774, this['y'] + _0x50bbdd, this['radius'], this['fillColor'], this['lineColor'], this['lineWidth'], this['vid']);
            }, _0x71e09a(0x0, _0x1d657e, 'cmdID', function () {
                return 'DrawCircle';
            }), _0x85c82b['create'] = function (_0x1efaf6, _0x3241a8, _0x28b93d, _0x5ea509, _0xc621ea, _0x383c85, _0x279d71) {
                var _0x1ea4bd = _0x2249dd['getItemByC' + 'lass']('DrawCircle' + 'Cmd', _0x85c82b);
                return _0x1ea4bd['x'] = _0x1efaf6, _0x1ea4bd['y'] = _0x3241a8, _0x1ea4bd['radius'] = _0x28b93d, _0x1ea4bd['fillColor'] = _0x5ea509, _0x1ea4bd['lineColor'] = _0xc621ea, _0x1ea4bd['lineWidth'] = _0x383c85, _0x1ea4bd['vid'] = _0x279d71, _0x1ea4bd;
            }, _0x85c82b['ID'] = 'DrawCircle', _0x85c82b;
        }()), _0x1a2fe4 = function () {
            function _0x111b8d() {
                this['mouseX'] = 0x0, this['mouseY'] = 0x0, this['disableMou' + 'seEvent'] = !0x1, this['mouseDownT' + 'ime'] = 0x0, this['mouseMoveA' + 'ccuracy'] = 0x2, this['_stage'] = null, this['_captureSp'] = null, this['_captureEx' + 'lusiveMode'] = !0x1, this['_hitCaputr' + 'eSp'] = !0x1, this['_target'] = null, this['_lastMoveT' + 'imer'] = 0x0, this['_isLeftMou' + 'se'] = !0x1, this['_touchIDs'] = {}, this['_id'] = 0x1, this['_tTouchID'] = 0x0, this['_event'] = new _0x4a4c33(), this['_captureCh' + 'ain'] = [], this['_matrix'] = new _0x250bb7(), this['_point'] = new _0x251b03(), this['_rect'] = new _0x22858b(), this['_prePoint'] = new _0x251b03(), this['_curTouchI' + 'D'] = NaN;
            }
            _0x4621f4(_0x111b8d, 'laya.event' + 's.MouseMan' + 'ager');
            var _0x4693dc = _0x111b8d['prototype'];
            return _0x4693dc['__init__'] = function (_0xff7d09, _0x29039e) {
                var _0xe4103b = this;
                this['_stage'] = _0xff7d09;
                var _0x1a0eec = this;
                _0x29039e['oncontextm' + 'enu'] = function (_0x1a242d) {
                    return _0x111b8d['enabled'] ? !0x1 : void 0x0;
                }, _0x29039e['addEventLi' + 'stener']('mousedown', function (_0x33b80b) {
                    _0x111b8d['enabled'] && (_0x2ad6c5['onIE'] || _0x33b80b['preventDef' + 'ault'](), _0x1a0eec['mouseDownT' + 'ime'] = _0x2ad6c5['now'](), _0xe4103b['runEvent'](_0x33b80b));
                }), _0x29039e['addEventLi' + 'stener']('mouseup', function (_0x2b5000) {
                    _0x111b8d['enabled'] && (_0x2b5000['preventDef' + 'ault'](), _0x1a0eec['mouseDownT' + 'ime'] = -_0x2ad6c5['now'](), _0xe4103b['runEvent'](_0x2b5000));
                }, !0x0), _0x29039e['addEventLi' + 'stener']('mousemove', function (_0x2f0259) {
                    if (_0x111b8d['enabled']) {
                        _0x2f0259['preventDef' + 'ault']();
                        var _0x30c0cc = _0x2ad6c5['now']();
                        if (_0x30c0cc - _0x1a0eec['_lastMoveT' + 'imer'] < 0xa)
                            return;
                        _0x1a0eec['_lastMoveT' + 'imer'] = _0x30c0cc, _0xe4103b['runEvent'](_0x2f0259);
                    }
                }, !0x0), _0x29039e['addEventLi' + 'stener']('mouseout', function (_0x572b69) {
                    _0x111b8d['enabled'] && _0xe4103b['runEvent'](_0x572b69);
                }), _0x29039e['addEventLi' + 'stener']('mouseover', function (_0x2b6446) {
                    _0x111b8d['enabled'] && _0xe4103b['runEvent'](_0x2b6446);
                }), _0x29039e['addEventLi' + 'stener']('touchstart', function (_0xcae98a) {
                    _0x111b8d['enabled'] && (_0x111b8d['_isFirstTo' + 'uch'] || _0xe66919['isInputtin' + 'g'] || _0xcae98a['preventDef' + 'ault'](), _0x1a0eec['mouseDownT' + 'ime'] = _0x2ad6c5['now'](), _0xe4103b['runEvent'](_0xcae98a));
                }), _0x29039e['addEventLi' + 'stener']('touchend', function (_0x2120b5) {
                    _0x111b8d['enabled'] ? (_0x111b8d['_isFirstTo' + 'uch'] || _0xe66919['isInputtin' + 'g'] || _0x2120b5['preventDef' + 'ault'](), _0x111b8d['_isFirstTo' + 'uch'] = !0x1, _0x1a0eec['mouseDownT' + 'ime'] = -_0x2ad6c5['now'](), _0xe4103b['runEvent'](_0x2120b5)) : _0xe4103b['_curTouchI' + 'D'] = NaN;
                }, !0x0), _0x29039e['addEventLi' + 'stener']('touchmove', function (_0x35383d) {
                    _0x111b8d['enabled'] && (_0x35383d['preventDef' + 'ault'](), _0xe4103b['runEvent'](_0x35383d));
                }, !0x0), _0x29039e['addEventLi' + 'stener']('touchcance' + 'l', function (_0x209bec) {
                    _0x111b8d['enabled'] ? (_0x209bec['preventDef' + 'ault'](), _0xe4103b['runEvent'](_0x209bec)) : _0xe4103b['_curTouchI' + 'D'] = NaN;
                }, !0x0), _0x29039e['addEventLi' + 'stener']('mousewheel', function (_0x48142a) {
                    _0x111b8d['enabled'] && _0xe4103b['runEvent'](_0x48142a);
                }), _0x29039e['addEventLi' + 'stener']('DOMMouseSc' + 'roll', function (_0x170f2f) {
                    _0x111b8d['enabled'] && _0xe4103b['runEvent'](_0x170f2f);
                });
            }, _0x4693dc['initEvent'] = function (_0xec54e3, _0x27452c) {
                var _0x5e035e = this;
                _0x5e035e['_event']['_stoped'] = !0x1, _0x5e035e['_event']['nativeEven' + 't'] = _0x27452c || _0xec54e3, _0x5e035e['_target'] = null, this['_point']['setTo'](_0xec54e3['pageX'] || _0xec54e3['clientX'], _0xec54e3['pageY'] || _0xec54e3['clientY']), this['_stage']['_canvasTra' + 'nsform'] && (this['_stage']['_canvasTra' + 'nsform']['invertTran' + 'sformPoint'](this['_point']), _0x5e035e['mouseX'] = this['_point']['x'], _0x5e035e['mouseY'] = this['_point']['y']), _0x5e035e['_event']['touchId'] = _0xec54e3['identifier'] || 0x0, this['_tTouchID'] = _0x5e035e['_event']['touchId'];
                var _0x598a48;
                _0x598a48 = _0x3e8d1e['I']['_event'], _0x598a48['_stoped'] = !0x1, _0x598a48['nativeEven' + 't'] = _0x5e035e['_event']['nativeEven' + 't'], _0x598a48['touchId'] = _0x5e035e['_event']['touchId'];
            }, _0x4693dc['checkMouse' + 'Wheel'] = function (_0x2d43d7) {
                this['_event']['delta'] = _0x2d43d7['wheelDelta'] ? 0.025 * _0x2d43d7['wheelDelta'] : -_0x2d43d7['detail'];
                for (var _0x3761fb = _0x3e8d1e['I']['getLastOve' + 'rs'](), _0x26b8bb = 0x0, _0x581e79 = _0x3761fb['length']; _0x581e79 > _0x26b8bb; _0x26b8bb++) {
                    var _0x4340bf = _0x3761fb[_0x26b8bb];
                    _0x4340bf['event']('mousewheel', this['_event']['setTo']('mousewheel', _0x4340bf, this['_target']));
                }
            }, _0x4693dc['onMouseMov' + 'e'] = function (_0x4cd153) {
                _0x3e8d1e['I']['onMouseMov' + 'e'](_0x4cd153, this['_tTouchID']);
            }, _0x4693dc['onMouseDow' + 'n'] = function (_0x426f8b) {
                if (_0xe66919['isInputtin' + 'g'] && _0x34a895['stage']['focus'] && _0x34a895['stage']['focus']['focus'] && !_0x34a895['stage']['focus']['contains'](this['_target'])) {
                    var _0x161ad1 = _0x34a895['stage']['focus']['_tf'] || _0x34a895['stage']['focus'], _0x216445 = _0x426f8b['_tf'] || _0x426f8b;
                    _0x216445 instanceof laya['display']['Input'] && _0x216445['multiline'] == _0x161ad1['multiline'] ? _0x161ad1['_focusOut']() : _0x161ad1['focus'] = !0x1;
                }
                _0x3e8d1e['I']['onMouseDow' + 'n'](_0x426f8b, this['_tTouchID'], this['_isLeftMou' + 'se']);
            }, _0x4693dc['onMouseUp'] = function (_0x1f0b09) {
                _0x3e8d1e['I']['onMouseUp'](_0x1f0b09, this['_tTouchID'], this['_isLeftMou' + 'se']);
            }, _0x4693dc['check'] = function (_0xb4dca6, _0x223463, _0x226d32, _0x42bdbd) {
                this['_point']['setTo'](_0x223463, _0x226d32), _0xb4dca6['fromParent' + 'Point'](this['_point']), _0x223463 = this['_point']['x'], _0x226d32 = this['_point']['y'];
                var _0x15de4e = _0xb4dca6['_style']['scrollRect'];
                if (_0x15de4e && (this['_rect']['setTo'](_0x15de4e['x'], _0x15de4e['y'], _0x15de4e['width'], _0x15de4e['height']), !this['_rect']['contains'](_0x223463, _0x226d32)))
                    return !0x1;
                if (!this['disableMou' + 'seEvent']) {
                    if (_0xb4dca6['hitTestPri' + 'or'] && !_0xb4dca6['mouseThrou' + 'gh'] && !this['hitTest'](_0xb4dca6, _0x223463, _0x226d32))
                        return !0x1;
                    for (var _0x1e1f7e = _0xb4dca6['_children']['length'] - 0x1; _0x1e1f7e > -0x1; _0x1e1f7e--) {
                        var _0x48d738 = _0xb4dca6['_children'][_0x1e1f7e];
                        if (!_0x48d738['destroyed'] && _0x48d738['_mouseStat' + 'e'] > 0x1 && _0x48d738['_visible'] && this['check'](_0x48d738, _0x223463, _0x226d32, _0x42bdbd))
                            return !0x0;
                    }
                    for (_0x1e1f7e = _0xb4dca6['_extUIChil' + 'd']['length'] - 0x1; _0x1e1f7e >= 0x0; _0x1e1f7e--) {
                        var _0xce4c2 = _0xb4dca6['_extUIChil' + 'd'][_0x1e1f7e];
                        if (!_0xce4c2['destroyed'] && _0xce4c2['_mouseStat' + 'e'] > 0x1 && _0xce4c2['_visible'] && this['check'](_0xce4c2, _0x223463, _0x226d32, _0x42bdbd))
                            return !0x0;
                    }
                }
                var _0x4368ed = !_0xb4dca6['hitTestPri' + 'or'] || _0xb4dca6['mouseThrou' + 'gh'] || this['disableMou' + 'seEvent'] ? this['hitTest'](_0xb4dca6, _0x223463, _0x226d32) : !0x0;
                return _0x4368ed ? (this['_target'] = _0xb4dca6, _0x42bdbd['call'](this, _0xb4dca6), this['_target'] == this['_hitCaputr' + 'eSp'] && (this['_hitCaputr' + 'eSp'] = !0x0)) : _0x42bdbd === this['onMouseUp'] && _0xb4dca6 === this['_stage'] && (this['_target'] = this['_stage'], _0x42bdbd['call'](this, this['_target'])), _0x4368ed;
            }, _0x4693dc['hitTest'] = function (_0x3a5d76, _0x12ebf0, _0x217310) {
                var _0x420697 = !0x1;
                _0x3a5d76['scrollRect'] && (_0x12ebf0 -= _0x3a5d76['_style']['scrollRect']['x'], _0x217310 -= _0x3a5d76['_style']['scrollRect']['y']);
                var _0x121638 = _0x3a5d76['_style']['hitArea'];
                return _0x121638 && _0x121638['_hit'] ? _0x121638['contains'](_0x12ebf0, _0x217310) : ((_0x3a5d76['width'] > 0x0 && _0x3a5d76['height'] > 0x0 || _0x3a5d76['mouseThrou' + 'gh'] || _0x121638) && (_0x420697 = _0x3a5d76['mouseThrou' + 'gh'] ? _0x3a5d76['getGraphic' + 'Bounds']()['contains'](_0x12ebf0, _0x217310) : (_0x121638 ? _0x121638 : this['_rect']['setTo'](0x0, 0x0, _0x3a5d76['width'], _0x3a5d76['height']))['contains'](_0x12ebf0, _0x217310)), _0x420697);
            }, _0x4693dc['_checkAllB' + 'aseUI'] = function (_0x23a892, _0x4c2cf9, _0x5f453c) {
                var _0x34c9b1 = this['handleExcl' + 'usiveCaptu' + 're'](this['mouseX'], this['mouseY'], _0x5f453c);
                return _0x34c9b1 ? !0x0 : (_0x34c9b1 = this['check'](this['_stage'], this['mouseX'], this['mouseY'], _0x5f453c), this['handleCapt' + 'ure'](this['mouseX'], this['mouseY'], _0x5f453c) || _0x34c9b1);
            }, _0x4693dc['check3DUI'] = function (_0x1eaf7a, _0x2cf238, _0x25180a) {
                for (var _0x4551ec = this['_stage']['_3dUI'], _0x2abea3 = 0x0, _0x592b96 = !0x1; _0x2abea3 < _0x4551ec['length']; _0x2abea3++) {
                    var _0x5db7 = _0x4551ec[_0x2abea3];
                    this['_stage']['_curUIBase'] = _0x5db7, !_0x5db7['destroyed'] && _0x5db7['_mouseStat' + 'e'] > 0x1 && _0x5db7['_visible'] && (_0x592b96 = _0x592b96 || this['check'](_0x5db7, this['mouseX'], this['mouseY'], _0x25180a));
                }
                return this['_stage']['_curUIBase'] = this['_stage'], _0x592b96;
            }, _0x4693dc['handleExcl' + 'usiveCaptu' + 're'] = function (_0x22b84a, _0x141833, _0x2d424d) {
                if (this['_captureEx' + 'lusiveMode'] && this['_captureSp'] && this['_captureCh' + 'ain']['length'] > 0x0) {
                    var _0x47850e;
                    this['_point']['setTo'](_0x22b84a, _0x141833);
                    for (var _0x20ff33 = 0x0; _0x20ff33 < this['_captureCh' + 'ain']['length']; _0x20ff33++)
                        _0x47850e = this['_captureCh' + 'ain'][_0x20ff33], _0x47850e['fromParent' + 'Point'](this['_point']);
                    return this['_target'] = _0x47850e, _0x2d424d['call'](this, _0x47850e), !0x0;
                }
                return !0x1;
            }, _0x4693dc['handleCapt' + 'ure'] = function (_0x18260f, _0x3e30b8, _0x7ef3ea) {
                if (!this['_hitCaputr' + 'eSp'] && this['_captureSp'] && this['_captureCh' + 'ain']['length'] > 0x0) {
                    var _0x507169;
                    this['_point']['setTo'](_0x18260f, _0x3e30b8);
                    for (var _0x57f94c = 0x0; _0x57f94c < this['_captureCh' + 'ain']['length']; _0x57f94c++)
                        _0x507169 = this['_captureCh' + 'ain'][_0x57f94c], _0x507169['fromParent' + 'Point'](this['_point']);
                    return this['_target'] = _0x507169, _0x7ef3ea['call'](this, _0x507169), !0x0;
                }
                return !0x1;
            }, _0x4693dc['runEvent'] = function (_0x2453cb) {
                var _0x476dd5, _0x4c97ca = 0x0, _0x12b81b = 0x0;
                switch ('mousemove' !== _0x2453cb['type'] && (this['_prePoint']['x'] = this['_prePoint']['y'] = -0xf4240), _0x2453cb['type']) {
                case 'mousedown':
                    this['_touchIDs'][0x0] = this['_id']++, _0x111b8d['_isTouchRe' + 'spond'] ? _0x111b8d['_isTouchRe' + 'spond'] = !0x1 : (this['_isLeftMou' + 'se'] = 0x0 === _0x2453cb['button'], this['initEvent'](_0x2453cb), this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseDow' + 'n']));
                    break;
                case 'mouseup':
                    this['_isLeftMou' + 'se'] = 0x0 === _0x2453cb['button'], this['initEvent'](_0x2453cb), this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseUp']);
                    break;
                case 'mousemove':
                    Math['abs'](this['_prePoint']['x'] - _0x2453cb['clientX']) + Math['abs'](this['_prePoint']['y'] - _0x2453cb['clientY']) >= this['mouseMoveA' + 'ccuracy'] && (this['_prePoint']['x'] = _0x2453cb['clientX'], this['_prePoint']['y'] = _0x2453cb['clientY'], this['initEvent'](_0x2453cb), this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseMov' + 'e']));
                    break;
                case 'touchstart':
                    _0x111b8d['_isTouchRe' + 'spond'] = !0x0, this['_isLeftMou' + 'se'] = !0x0;
                    var _0x1e0b23 = _0x2453cb['changedTou' + 'ches'];
                    for (_0x4c97ca = 0x0, _0x12b81b = _0x1e0b23['length']; _0x12b81b > _0x4c97ca; _0x4c97ca++)
                        _0x476dd5 = _0x1e0b23[_0x4c97ca], (_0x111b8d['multiTouch' + 'Enabled'] || isNaN(this['_curTouchI' + 'D'])) && (this['_curTouchI' + 'D'] = _0x476dd5['identifier'], this['_id'] % 0xc8 === 0x0 && (this['_touchIDs'] = {}), this['_touchIDs'][_0x476dd5['identifier']] = this['_id']++, this['initEvent'](_0x476dd5, _0x2453cb), this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseDow' + 'n']));
                    break;
                case 'touchend':
                case 'touchcance' + 'l':
                    _0x111b8d['_isTouchRe' + 'spond'] = !0x0, this['_isLeftMou' + 'se'] = !0x0;
                    var _0x405992 = _0x2453cb['changedTou' + 'ches'];
                    for (_0x4c97ca = 0x0, _0x12b81b = _0x405992['length']; _0x12b81b > _0x4c97ca; _0x4c97ca++)
                        if (_0x476dd5 = _0x405992[_0x4c97ca], _0x111b8d['multiTouch' + 'Enabled'] || _0x476dd5['identifier'] == this['_curTouchI' + 'D']) {
                            this['_curTouchI' + 'D'] = NaN, this['initEvent'](_0x476dd5, _0x2453cb);
                            var _0x37ebaf = !0x1;
                            _0x37ebaf = this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseUp']), _0x37ebaf || this['onMouseUp'](null);
                        }
                    break;
                case 'touchmove':
                    var _0x5e67fb = _0x2453cb['changedTou' + 'ches'];
                    for (_0x4c97ca = 0x0, _0x12b81b = _0x5e67fb['length']; _0x12b81b > _0x4c97ca; _0x4c97ca++)
                        _0x476dd5 = _0x5e67fb[_0x4c97ca], (_0x111b8d['multiTouch' + 'Enabled'] || _0x476dd5['identifier'] == this['_curTouchI' + 'D']) && (this['initEvent'](_0x476dd5, _0x2453cb), this['_checkAllB' + 'aseUI'](this['mouseX'], this['mouseY'], this['onMouseMov' + 'e']));
                    break;
                case 'wheel':
                case 'mousewheel':
                case 'DOMMouseSc' + 'roll':
                    this['checkMouse' + 'Wheel'](_0x2453cb);
                    break;
                case 'mouseout':
                    _0x3e8d1e['I']['stageMouse' + 'Out']();
                    break;
                case 'mouseover':
                    this['_stage']['event']('mouseover', this['_event']['setTo']('mouseover', this['_stage'], this['_stage']));
                }
            }, _0x4693dc['setCapture'] = function (_0x17a342, _0x43a1e1) {
                void 0x0 === _0x43a1e1 && (_0x43a1e1 = !0x1), this['_captureSp'] = _0x17a342, this['_captureEx' + 'lusiveMode'] = _0x43a1e1, this['_captureCh' + 'ain']['length'] = 0x0, this['_captureCh' + 'ain']['push'](_0x17a342);
                for (var _0x52c5c6 = _0x17a342;;) {
                    if (_0x52c5c6 == _0x34a895['stage'])
                        break;
                    if (_0x52c5c6 == _0x34a895['stage']['_curUIBase'])
                        break;
                    if (_0x52c5c6 = _0x52c5c6['parent'], !_0x52c5c6)
                        break;
                    this['_captureCh' + 'ain']['splice'](0x0, 0x0, _0x52c5c6);
                }
            }, _0x4693dc['releaseCap' + 'ture'] = function () {
                console['log']('release\x20ca' + 'pture'), this['_captureSp'] = null;
            }, _0x111b8d['enabled'] = !0x0, _0x111b8d['multiTouch' + 'Enabled'] = !0x0, _0x111b8d['_isTouchRe' + 'spond'] = !0x1, _0x111b8d['_isFirstTo' + 'uch'] = !0x0, _0x5043ef(_0x111b8d, [
                'instance',
                function () {
                    return this['instance'] = new _0x111b8d();
                }
            ]), _0x111b8d;
        }(), _0x47f9c7 = function () {
            function _0x2cd007() {
            }
            _0x4621f4(_0x2cd007, 'laya.displ' + 'ay.cmd.Dra' + 'wLinesCmd');
            var _0x805a87 = _0x2cd007['prototype'];
            return _0x805a87['recover'] = function () {
                this['points'] = null, this['lineColor'] = null, _0x2249dd['recover']('DrawLinesC' + 'md', this);
            }, _0x805a87['run'] = function (_0x2efd3e, _0x5a0577, _0x900db) {
                _0x2efd3e['_drawLines'](this['x'] + _0x5a0577, this['y'] + _0x900db, this['points'], this['lineColor'], this['lineWidth'], this['vid']);
            }, _0x71e09a(0x0, _0x805a87, 'cmdID', function () {
                return 'DrawLines';
            }), _0x2cd007['create'] = function (_0x20b67b, _0x4bd57a, _0x2b717c, _0x35b609, _0x5272e1, _0x5535a4) {
                var _0x46101e = _0x2249dd['getItemByC' + 'lass']('DrawLinesC' + 'md', _0x2cd007);
                return _0x46101e['x'] = _0x20b67b, _0x46101e['y'] = _0x4bd57a, _0x46101e['points'] = _0x2b717c, _0x46101e['lineColor'] = _0x35b609, _0x46101e['lineWidth'] = _0x5272e1, _0x46101e['vid'] = _0x5535a4, _0x46101e;
            }, _0x2cd007['ID'] = 'DrawLines', _0x2cd007;
        }(), _0x297d95 = function (_0x419b9c) {
            function _0x5ec7a0() {
                this['_cpuMemory'] = 0x0, this['_gpuMemory'] = 0x0, _0x5ec7a0['__super']['call'](this), this['_id'] = ++_0x5ec7a0['_uniqueIDC' + 'ounter'], this['_destroyed'] = !0x1, this['_reference' + 'Count'] = 0x0, _0x5ec7a0['_idResourc' + 'esMap'][this['id']] = this, this['lock'] = !0x1;
            }
            _0x4621f4(_0x5ec7a0, 'laya.resou' + 'rce.Resour' + 'ce', _0x419b9c);
            var _0x5be405 = _0x5ec7a0['prototype'];
            return _0x34a895['imps'](_0x5be405, {
                'laya.resource.ICreateResource': !0x0,
                'laya.resource.IDestroy': !0x0
            }), _0x5be405['_setCPUMem' + 'ory'] = function (_0x35425f) {
                var _0x3ad526 = _0x35425f - this['_cpuMemory'];
                this['_cpuMemory'] = _0x35425f, _0x5ec7a0['_addCPUMem' + 'ory'](_0x3ad526);
            }, _0x5be405['_setGPUMem' + 'ory'] = function (_0x3a85f2) {
                var _0x56c44c = _0x3a85f2 - this['_gpuMemory'];
                this['_gpuMemory'] = _0x3a85f2, _0x5ec7a0['_addGPUMem' + 'ory'](_0x56c44c);
            }, _0x5be405['_setCreate' + 'URL'] = function (_0x21944a) {
                if (this['_url'] !== _0x21944a) {
                    var _0x556b4e;
                    this['_url'] && (_0x556b4e = _0x5ec7a0['_urlResour' + 'cesMap'][this['_url']], _0x556b4e['splice'](_0x556b4e['indexOf'](this), 0x1), 0x0 === _0x556b4e['length'] && delete _0x5ec7a0['_urlResour' + 'cesMap'][this['_url']]), _0x21944a && (_0x556b4e = _0x5ec7a0['_urlResour' + 'cesMap'][_0x21944a], _0x556b4e || (_0x5ec7a0['_urlResour' + 'cesMap'][_0x21944a] = _0x556b4e = []), _0x556b4e['push'](this)), this['_url'] = _0x21944a;
                }
            }, _0x5be405['_addRefere' + 'nce'] = function (_0x59a1b1) {
                void 0x0 === _0x59a1b1 && (_0x59a1b1 = 0x1), this['_reference' + 'Count'] += _0x59a1b1;
            }, _0x5be405['_removeRef' + 'erence'] = function (_0x5e8a53) {
                void 0x0 === _0x5e8a53 && (_0x5e8a53 = 0x1), this['_reference' + 'Count'] -= _0x5e8a53;
            }, _0x5be405['_clearRefe' + 'rence'] = function () {
                this['_reference' + 'Count'] = 0x0;
            }, _0x5be405['_recoverRe' + 'source'] = function () {
            }, _0x5be405['_disposeRe' + 'source'] = function () {
            }, _0x5be405['_activeRes' + 'ource'] = function () {
            }, _0x5be405['destroy'] = function () {
                if (!this['_destroyed']) {
                    this['_destroyed'] = !0x0, this['lock'] = !0x1, this['_disposeRe' + 'source'](), delete _0x5ec7a0['_idResourc' + 'esMap'][this['id']];
                    var _0x37ca92;
                    if (this['_url']) {
                        _0x37ca92 = _0x5ec7a0['_urlResour' + 'cesMap'][this['_url']], _0x37ca92 && (_0x37ca92['splice'](_0x37ca92['indexOf'](this), 0x1), 0x0 === _0x37ca92['length'] && delete _0x5ec7a0['_urlResour' + 'cesMap'][this['_url']]);
                        var _0x46889c = _0x3943d1['getRes'](this['_url']);
                        _0x46889c == this && delete _0x3943d1['loadedMap'][this['_url']];
                    }
                }
            }, _0x71e09a(0x0, _0x5be405, 'id', function () {
                return this['_id'];
            }), _0x71e09a(0x0, _0x5be405, 'gpuMemory', function () {
                return this['_gpuMemory'];
            }), _0x71e09a(0x0, _0x5be405, 'url', function () {
                return this['_url'];
            }), _0x71e09a(0x0, _0x5be405, 'cpuMemory', function () {
                return this['_cpuMemory'];
            }), _0x71e09a(0x0, _0x5be405, 'destroyed', function () {
                return this['_destroyed'];
            }), _0x71e09a(0x0, _0x5be405, 'referenceC' + 'ount', function () {
                return this['_reference' + 'Count'];
            }), _0x71e09a(0x1, _0x5ec7a0, 'cpuMemory', function () {
                return this['_cpuMemory'];
            }, laya['events']['EventDispa' + 'tcher']['_$SET_cpuM' + 'emory']), _0x71e09a(0x1, _0x5ec7a0, 'gpuMemory', function () {
                return this['_gpuMemory'];
            }, laya['events']['EventDispa' + 'tcher']['_$SET_gpuM' + 'emory']), _0x5ec7a0['_addCPUMem' + 'ory'] = function (_0x40651c) {
                this['_cpuMemory'] += _0x40651c;
            }, _0x5ec7a0['_addGPUMem' + 'ory'] = function (_0x4bec55) {
                this['_gpuMemory'] += _0x4bec55;
            }, _0x5ec7a0['_addMemory'] = function (_0x4edfab, _0x55fac3) {
                this['_cpuMemory'] += _0x4edfab, this['_gpuMemory'] += _0x55fac3;
            }, _0x5ec7a0['getResourc' + 'eByID'] = function (_0x5512ba) {
                return _0x5ec7a0['_idResourc' + 'esMap'][_0x5512ba];
            }, _0x5ec7a0['getResourc' + 'eByURL'] = function (_0x8dd351, _0x41a0aa) {
                return void 0x0 === _0x41a0aa && (_0x41a0aa = 0x0), _0x5ec7a0['_urlResour' + 'cesMap'][_0x8dd351][_0x41a0aa];
            }, _0x5ec7a0['destroyUnu' + 'sedResourc' + 'es'] = function () {
                for (var _0x341a8e in _0x5ec7a0['_idResourc' + 'esMap']) {
                    var _0x3b408 = _0x5ec7a0['_idResourc' + 'esMap'][_0x341a8e];
                    _0x3b408['lock'] || 0x0 !== _0x3b408['_reference' + 'Count'] || _0x3b408['destroy']();
                }
            }, _0x5ec7a0['_uniqueIDC' + 'ounter'] = 0x0, _0x5ec7a0['_idResourc' + 'esMap'] = {}, _0x5ec7a0['_urlResour' + 'cesMap'] = {}, _0x5ec7a0['_cpuMemory'] = 0x0, _0x5ec7a0['_gpuMemory'] = 0x0, _0x5ec7a0;
        }(_0x3f0f68), _0x3fa3f0 = function (_0x15f309) {
            function _0x1efe35() {
                this['_bits'] = 0x0, this['_parent'] = null, this['name'] = '', this['destroyed'] = !0x1, this['_conchData'] = null, this['_component' + 's'] = null, this['_activeCha' + 'ngeScripts'] = null, this['_scene'] = null, _0x1efe35['__super']['call'](this), this['_children'] = _0x1efe35['ARRAY_EMPT' + 'Y'], this['_extUIChil' + 'd'] = _0x1efe35['ARRAY_EMPT' + 'Y'], this['createGLBu' + 'ffer']();
            }
            _0x4621f4(_0x1efe35, 'laya.displ' + 'ay.Node', _0x15f309);
            var _0x1b46be = _0x1efe35['prototype'];
            return _0x1b46be['createGLBu' + 'ffer'] = function () {
            }, _0x1b46be['_setBit'] = function (_0x1585c8, _0x49e7d2) {
                if (0x10 === _0x1585c8) {
                    var _0x50c9d2 = this['_getBit'](_0x1585c8);
                    _0x50c9d2 != _0x49e7d2 && this['_updateDis' + 'playedInst' + 'age']();
                }
                _0x49e7d2 ? this['_bits'] |= _0x1585c8 : this['_bits'] &= ~_0x1585c8;
            }, _0x1b46be['_getBit'] = function (_0x4b26fe) {
                return 0x0 != (this['_bits'] & _0x4b26fe);
            }, _0x1b46be['_setUpNoti' + 'ceChain'] = function () {
                this['_getBit'](0x10) && this['_setBitUp'](0x10);
            }, _0x1b46be['_setBitUp'] = function (_0x23c935) {
                var _0x260c2b = this;
                for (_0x260c2b['_setBit'](_0x23c935, !0x0), _0x260c2b = _0x260c2b['_parent']; _0x260c2b;) {
                    if (_0x260c2b['_getBit'](_0x23c935))
                        return;
                    _0x260c2b['_setBit'](_0x23c935, !0x0), _0x260c2b = _0x260c2b['_parent'];
                }
            }, _0x1b46be['on'] = function (_0x3280af, _0x4101d5, _0x4ac9c9, _0x56d6b6) {
                return ('display' === _0x3280af || 'undisplay' === _0x3280af) && (this['_getBit'](0x10) || this['_setBitUp'](0x10)), this['_createLis' + 'tener'](_0x3280af, _0x4101d5, _0x4ac9c9, _0x56d6b6, !0x1);
            }, _0x1b46be['once'] = function (_0x51c27f, _0x3ec359, _0x2eb077, _0x43384b) {
                return ('display' === _0x51c27f || 'undisplay' === _0x51c27f) && (this['_getBit'](0x10) || this['_setBitUp'](0x10)), this['_createLis' + 'tener'](_0x51c27f, _0x3ec359, _0x2eb077, _0x43384b, !0x0);
            }, _0x1b46be['destroy'] = function (_0x8634df) {
                void 0x0 === _0x8634df && (_0x8634df = !0x0), this['destroyed'] = !0x0, this['_destroyAl' + 'lComponent'](), this['_parent'] && this['_parent']['removeChil' + 'd'](this), this['_children'] && (_0x8634df ? this['destroyChi' + 'ldren']() : this['removeChil' + 'dren']()), this['onDestroy'](), this['_children'] = null, this['offAll']();
            }, _0x1b46be['onDestroy'] = function () {
            }, _0x1b46be['destroyChi' + 'ldren'] = function () {
                if (this['_children']) {
                    for (var _0x13a451 = 0x0, _0x3c02b1 = this['_children']['length']; _0x3c02b1 > _0x13a451; _0x13a451++)
                        this['_children'][0x0]['destroy'](!0x0);
                }
            }, _0x1b46be['addChild'] = function (_0x498946) {
                if (!_0x498946 || this['destroyed'] || _0x498946 === this)
                    return _0x498946;
                if (_0x498946['_zOrder'] && this['_setBit'](0x20, !0x0), _0x498946['_parent'] === this) {
                    var _0x49aa7a = this['getChildIn' + 'dex'](_0x498946);
                    _0x49aa7a !== this['_children']['length'] - 0x1 && (this['_children']['splice'](_0x49aa7a, 0x1), this['_children']['push'](_0x498946), this['_childChan' + 'ged']());
                } else
                    _0x498946['_parent'] && _0x498946['_parent']['removeChil' + 'd'](_0x498946), this['_children'] === _0x1efe35['ARRAY_EMPT' + 'Y'] && (this['_children'] = []), this['_children']['push'](_0x498946), _0x498946['_setParent'](this), this['_childChan' + 'ged']();
                return _0x498946;
            }, _0x1b46be['addInputCh' + 'ild'] = function (_0x2283e0) {
                if (this['_extUIChil' + 'd'] == _0x1efe35['ARRAY_EMPT' + 'Y'])
                    this['_extUIChil' + 'd'] = [_0x2283e0];
                else {
                    if (this['_extUIChil' + 'd']['indexOf'](_0x2283e0) >= 0x0)
                        return null;
                    this['_extUIChil' + 'd']['push'](_0x2283e0);
                }
                return null;
            }, _0x1b46be['removeInpu' + 'tChild'] = function (_0x2687a2) {
                var _0x3f217f = this['_extUIChil' + 'd']['indexOf'](_0x2687a2);
                _0x3f217f >= 0x0 && this['_extUIChil' + 'd']['splice'](_0x3f217f, 0x1);
            }, _0x1b46be['addChildre' + 'n'] = function (_0x5c0eff) {
                for (var _0x260b95 = arguments, _0x41e55d = 0x0, _0x24408c = _0x260b95['length']; _0x24408c > _0x41e55d;)
                    this['addChild'](_0x260b95[_0x41e55d++]);
            }, _0x1b46be['addChildAt'] = function (_0x49b727, _0x2d993e) {
                if (!_0x49b727 || this['destroyed'] || _0x49b727 === this)
                    return _0x49b727;
                if (_0x49b727['_zOrder'] && this['_setBit'](0x20, !0x0), _0x2d993e >= 0x0 && _0x2d993e <= this['_children']['length']) {
                    if (_0x49b727['_parent'] === this) {
                        var _0x253282 = this['getChildIn' + 'dex'](_0x49b727);
                        this['_children']['splice'](_0x253282, 0x1), this['_children']['splice'](_0x2d993e, 0x0, _0x49b727), this['_childChan' + 'ged']();
                    } else
                        _0x49b727['_parent'] && _0x49b727['_parent']['removeChil' + 'd'](_0x49b727), this['_children'] === _0x1efe35['ARRAY_EMPT' + 'Y'] && (this['_children'] = []), this['_children']['splice'](_0x2d993e, 0x0, _0x49b727), _0x49b727['_setParent'](this);
                    return _0x49b727;
                }
                throw new Error('appendChil' + 'dAt:The\x20in' + 'dex\x20is\x20out' + '\x20of\x20bounds');
            }, _0x1b46be['getChildIn' + 'dex'] = function (_0x31bbd9) {
                return this['_children']['indexOf'](_0x31bbd9);
            }, _0x1b46be['getChildBy' + 'Name'] = function (_0x124f76) {
                var _0x2990db = this['_children'];
                if (_0x2990db)
                    for (var _0x12cca2 = 0x0, _0x3c5bf4 = _0x2990db['length']; _0x3c5bf4 > _0x12cca2; _0x12cca2++) {
                        var _0x5bd553 = _0x2990db[_0x12cca2];
                        if (_0x5bd553['name'] === _0x124f76)
                            return _0x5bd553;
                    }
                return null;
            }, _0x1b46be['getChildAt'] = function (_0x214842) {
                return this['_children'][_0x214842] || null;
            }, _0x1b46be['setChildIn' + 'dex'] = function (_0x80ab4d, _0xe9dfdc) {
                var _0x57661e = this['_children'];
                if (0x0 > _0xe9dfdc || _0xe9dfdc >= _0x57661e['length'])
                    throw new Error('setChildIn' + 'dex:The\x20in' + 'dex\x20is\x20out' + '\x20of\x20bounds' + '.');
                var _0x76eaad = this['getChildIn' + 'dex'](_0x80ab4d);
                if (0x0 > _0x76eaad)
                    throw new Error('setChildIn' + 'dex:node\x20i' + 's\x20must\x20chi' + 'ld\x20of\x20this' + '\x20object.');
                return _0x57661e['splice'](_0x76eaad, 0x1), _0x57661e['splice'](_0xe9dfdc, 0x0, _0x80ab4d), this['_childChan' + 'ged'](), _0x80ab4d;
            }, _0x1b46be['_childChan' + 'ged'] = function (_0x4003d5) {
            }, _0x1b46be['removeChil' + 'd'] = function (_0xe47392) {
                if (!this['_children'])
                    return _0xe47392;
                var _0x53481f = this['_children']['indexOf'](_0xe47392);
                return this['removeChil' + 'dAt'](_0x53481f);
            }, _0x1b46be['removeSelf'] = function () {
                return this['_parent'] && this['_parent']['removeChil' + 'd'](this), this;
            }, _0x1b46be['removeChil' + 'dByName'] = function (_0x5929d3) {
                var _0x2e4796 = this['getChildBy' + 'Name'](_0x5929d3);
                return _0x2e4796 && this['removeChil' + 'd'](_0x2e4796), _0x2e4796;
            }, _0x1b46be['removeChil' + 'dAt'] = function (_0x5f2cac) {
                var _0x2d7b8d = this['getChildAt'](_0x5f2cac);
                return _0x2d7b8d && (this['_children']['splice'](_0x5f2cac, 0x1), _0x2d7b8d['_setParent'](null)), _0x2d7b8d;
            }, _0x1b46be['removeChil' + 'dren'] = function (_0x5202a7, _0xb2655) {
                if (void 0x0 === _0x5202a7 && (_0x5202a7 = 0x0), void 0x0 === _0xb2655 && (_0xb2655 = 0x7fffffff), this['_children'] && this['_children']['length'] > 0x0) {
                    var _0x1fe7b4 = this['_children'];
                    if (0x0 === _0x5202a7 && _0xb2655 >= _0x1fe7b4['length'] - 0x1) {
                        var _0x1ce278 = _0x1fe7b4;
                        this['_children'] = _0x1efe35['ARRAY_EMPT' + 'Y'];
                    } else
                        _0x1ce278 = _0x1fe7b4['splice'](_0x5202a7, _0xb2655 - _0x5202a7);
                    for (var _0x34bcfb = 0x0, _0x3d6b85 = _0x1ce278['length']; _0x3d6b85 > _0x34bcfb; _0x34bcfb++)
                        _0x1ce278[_0x34bcfb]['_setParent'](null);
                }
                return this;
            }, _0x1b46be['replaceChi' + 'ld'] = function (_0x4c5d21, _0x2abc01) {
                var _0x333279 = this['_children']['indexOf'](_0x2abc01);
                return _0x333279 > -0x1 ? (this['_children']['splice'](_0x333279, 0x1, _0x4c5d21), _0x2abc01['_setParent'](null), _0x4c5d21['_setParent'](this), _0x4c5d21) : null;
            }, _0x1b46be['_setParent'] = function (_0x4be775) {
                this['_parent'] !== _0x4be775 && (_0x4be775 ? (this['_parent'] = _0x4be775, this['_onAdded'](), this['event']('added'), this['_getBit'](0x10) && (this['_setUpNoti' + 'ceChain'](), _0x4be775['displayedI' + 'nStage'] && this['_displayCh' + 'ild'](this, !0x0)), _0x4be775['_childChan' + 'ged'](this)) : (this['_onRemoved'](), this['event']('removed'), this['_parent']['_childChan' + 'ged'](), this['_getBit'](0x10) && this['_displayCh' + 'ild'](this, !0x1), this['_parent'] = _0x4be775));
            }, _0x1b46be['_updateDis' + 'playedInst' + 'age'] = function () {
                var _0x4f7c4c;
                _0x4f7c4c = this;
                for (var _0x4925af = _0x34a895['stage'], _0xb2da70 = !0x1; _0x4f7c4c;) {
                    if (_0x4f7c4c['_getBit'](0x10)) {
                        _0xb2da70 = _0x4f7c4c['_getBit'](0x80);
                        break;
                    }
                    if (_0x4f7c4c === _0x4925af || _0x4f7c4c['_getBit'](0x80)) {
                        _0xb2da70 = !0x0;
                        break;
                    }
                    _0x4f7c4c = _0x4f7c4c['_parent'];
                }
                this['_setBit'](0x80, _0xb2da70);
            }, _0x1b46be['_setDispla' + 'y'] = function (_0x45e0cc) {
                this['_getBit'](0x80) !== _0x45e0cc && (this['_setBit'](0x80, _0x45e0cc), _0x45e0cc ? this['event']('display') : this['event']('undisplay'));
            }, _0x1b46be['_displayCh' + 'ild'] = function (_0x2ae289, _0x4f0437) {
                var _0x2f70 = _0x2ae289['_children'];
                if (_0x2f70)
                    for (var _0x23a8b5 = 0x0, _0x39dca8 = _0x2f70['length']; _0x39dca8 > _0x23a8b5; _0x23a8b5++) {
                        var _0x2c2aae = _0x2f70[_0x23a8b5];
                        _0x2c2aae['_getBit'](0x10) && (_0x2c2aae['_children']['length'] > 0x0 ? this['_displayCh' + 'ild'](_0x2c2aae, _0x4f0437) : _0x2c2aae['_setDispla' + 'y'](_0x4f0437));
                    }
                _0x2ae289['_setDispla' + 'y'](_0x4f0437);
            }, _0x1b46be['contains'] = function (_0xa24890) {
                if (_0xa24890 === this)
                    return !0x0;
                for (; _0xa24890;) {
                    if (_0xa24890['_parent'] === this)
                        return !0x0;
                    _0xa24890 = _0xa24890['_parent'];
                }
                return !0x1;
            }, _0x1b46be['timerLoop'] = function (_0x34c405, _0x51d6da, _0x2ec0c8, _0x447a35, _0x1da90f, _0x591117) {
                void 0x0 === _0x1da90f && (_0x1da90f = !0x0), void 0x0 === _0x591117 && (_0x591117 = !0x1);
                var _0xb34a7f = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0xb34a7f['loop'](_0x34c405, _0x51d6da, _0x2ec0c8, _0x447a35, _0x1da90f, _0x591117);
            }, _0x1b46be['timerOnce'] = function (_0x50fbfc, _0x3470c3, _0x6ff991, _0x505ad5, _0x2e69e5) {
                void 0x0 === _0x2e69e5 && (_0x2e69e5 = !0x0);
                var _0x5d39d4 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0x5d39d4['_create'](!0x1, !0x1, _0x50fbfc, _0x3470c3, _0x6ff991, _0x505ad5, _0x2e69e5);
            }, _0x1b46be['frameLoop'] = function (_0x3e8bff, _0x1c19bd, _0x4b2f0e, _0x2d4a8a, _0x5ce8ed) {
                void 0x0 === _0x5ce8ed && (_0x5ce8ed = !0x0);
                var _0xbed1b2 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0xbed1b2['_create'](!0x0, !0x0, _0x3e8bff, _0x1c19bd, _0x4b2f0e, _0x2d4a8a, _0x5ce8ed);
            }, _0x1b46be['frameOnce'] = function (_0x237441, _0x44c679, _0x31d3f1, _0x55afb0, _0x314468) {
                void 0x0 === _0x314468 && (_0x314468 = !0x0);
                var _0x3bc302 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0x3bc302['_create'](!0x0, !0x1, _0x237441, _0x44c679, _0x31d3f1, _0x55afb0, _0x314468);
            }, _0x1b46be['clearTimer'] = function (_0x46dd39, _0x1fd7d5) {
                var _0x522d67 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0x522d67['clear'](_0x46dd39, _0x1fd7d5);
            }, _0x1b46be['callLater'] = function (_0x3d4717, _0x85b93b) {
                var _0x35e2c6 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0x35e2c6['callLater'](this, _0x3d4717, _0x85b93b);
            }, _0x1b46be['runCallLat' + 'er'] = function (_0x1af8b8) {
                var _0x2a11c2 = this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
                _0x2a11c2['runCallLat' + 'er'](this, _0x1af8b8);
            }, _0x1b46be['_onActive'] = function () {
            }, _0x1b46be['_onInActiv' + 'e'] = function () {
            }, _0x1b46be['_onActiveI' + 'nScene'] = function () {
            }, _0x1b46be['_onInActiv' + 'eInScene'] = function () {
            }, _0x1b46be['_parse'] = function (_0x516009) {
            }, _0x1b46be['_setBelong' + 'Scene'] = function (_0x5604f1) {
                if (!this['_scene']) {
                    if (this['_scene'] = _0x5604f1, this['_component' + 's']) {
                        for (var _0x24a28c = 0x0, _0x41c805 = this['_component' + 's']['length']; _0x41c805 > _0x24a28c; _0x24a28c++)
                            this['_component' + 's'][_0x24a28c]['_setActive' + 'InScene'](!0x0);
                    }
                    for (this['_onActiveI' + 'nScene'](), _0x24a28c = 0x0, _0x41c805 = this['_children']['length']; _0x41c805 > _0x24a28c; _0x24a28c++)
                        this['_children'][_0x24a28c]['_setBelong' + 'Scene'](_0x5604f1);
                }
            }, _0x1b46be['_setUnBelo' + 'ngScene'] = function () {
                if (this['_scene'] !== this) {
                    if (this['_onInActiv' + 'eInScene'](), this['_component' + 's']) {
                        for (var _0x3a9660 = 0x0, _0xfd87c7 = this['_component' + 's']['length']; _0xfd87c7 > _0x3a9660; _0x3a9660++)
                            this['_component' + 's'][_0x3a9660]['_setActive' + 'InScene'](!0x1);
                    }
                    for (this['_scene'] = null, _0x3a9660 = 0x0, _0xfd87c7 = this['_children']['length']; _0xfd87c7 > _0x3a9660; _0x3a9660++)
                        this['_children'][_0x3a9660]['_setUnBelo' + 'ngScene']();
                }
            }, _0x1b46be['onAwake'] = function () {
            }, _0x1b46be['onEnable'] = function () {
            }, _0x1b46be['_processAc' + 'tive'] = function () {
                this['_activeCha' + 'ngeScripts'] || (this['_activeCha' + 'ngeScripts'] = []), this['_activeHie' + 'rarchy'](this['_activeCha' + 'ngeScripts']), this['_activeScr' + 'ipts']();
            }, _0x1b46be['_activeHie' + 'rarchy'] = function (_0x36b0a2) {
                if (this['_setBit'](0x2, !0x0), this['_component' + 's'])
                    for (var _0x541a76 = 0x0, _0x197516 = this['_component' + 's']['length']; _0x197516 > _0x541a76; _0x541a76++) {
                        var _0x302ce1 = this['_component' + 's'][_0x541a76];
                        _0x302ce1['_setActive'](!0x0), _0x302ce1['_isScript']() && _0x36b0a2['push'](_0x302ce1);
                    }
                for (this['_onActive'](), _0x541a76 = 0x0, _0x197516 = this['_children']['length']; _0x197516 > _0x541a76; _0x541a76++) {
                    var _0x3e83ed = this['_children'][_0x541a76];
                    !_0x3e83ed['_getBit'](0x1) && _0x3e83ed['_activeHie' + 'rarchy'](_0x36b0a2);
                }
                this['_getBit'](0x4) || (this['_setBit'](0x4, !0x0), this['onAwake']()), this['onEnable']();
            }, _0x1b46be['_activeScr' + 'ipts'] = function () {
                for (var _0x30bf27 = 0x0, _0x474c62 = this['_activeCha' + 'ngeScripts']['length']; _0x474c62 > _0x30bf27; _0x30bf27++)
                    this['_activeCha' + 'ngeScripts'][_0x30bf27]['onEnable']();
                this['_activeCha' + 'ngeScripts']['length'] = 0x0;
            }, _0x1b46be['_processIn' + 'Active'] = function () {
                this['_activeCha' + 'ngeScripts'] || (this['_activeCha' + 'ngeScripts'] = []), this['_inActiveH' + 'ierarchy'](this['_activeCha' + 'ngeScripts']), this['_inActiveS' + 'cripts']();
            }, _0x1b46be['_inActiveH' + 'ierarchy'] = function (_0x481ad7) {
                if (this['_onInActiv' + 'e'](), this['_component' + 's'])
                    for (var _0x280a77 = 0x0, _0x58110d = this['_component' + 's']['length']; _0x58110d > _0x280a77; _0x280a77++) {
                        var _0x2a10c0 = this['_component' + 's'][_0x280a77];
                        _0x2a10c0['_setActive'](!0x1), _0x2a10c0['_isScript']() && _0x481ad7['push'](_0x2a10c0);
                    }
                for (this['_setBit'](0x2, !0x1), _0x280a77 = 0x0, _0x58110d = this['_children']['length']; _0x58110d > _0x280a77; _0x280a77++) {
                    var _0x76e906 = this['_children'][_0x280a77];
                    _0x76e906 && !_0x76e906['_getBit'](0x1) && _0x76e906['_inActiveH' + 'ierarchy'](_0x481ad7);
                }
                this['onDisable']();
            }, _0x1b46be['_inActiveS' + 'cripts'] = function () {
                for (var _0x2d8ae0 = 0x0, _0x1d07c1 = this['_activeCha' + 'ngeScripts']['length']; _0x1d07c1 > _0x2d8ae0; _0x2d8ae0++)
                    this['_activeCha' + 'ngeScripts'][_0x2d8ae0]['onDisable']();
                this['_activeCha' + 'ngeScripts']['length'] = 0x0;
            }, _0x1b46be['onDisable'] = function () {
            }, _0x1b46be['_onAdded'] = function () {
                if (this['_activeCha' + 'ngeScripts'] && 0x0 !== this['_activeCha' + 'ngeScripts']['length'])
                    throw 'Node:\x20can\x27' + 't\x20set\x20the\x20' + 'main\x20inAct' + 'ive\x20node\x20a' + 'ctive\x20in\x20h' + 'ierarchy,i' + 'f\x20the\x20oper' + 'ate\x20is\x20in\x20' + 'main\x20inAct' + 'ive\x20node\x20o' + 'r\x20it\x27s\x20chi' + 'ldren\x20scri' + 'pt\x27s\x20onDis' + 'able\x20Event' + '.';
                var _0x3bb641 = this['_parent']['scene'];
                _0x3bb641 && this['_setBelong' + 'Scene'](_0x3bb641), this['_parent']['activeInHi' + 'erarchy'] && this['active'] && this['_processAc' + 'tive']();
            }, _0x1b46be['_onRemoved'] = function () {
                if (this['_activeCha' + 'ngeScripts'] && 0x0 !== this['_activeCha' + 'ngeScripts']['length'])
                    throw 'Node:\x20can\x27' + 't\x20set\x20the\x20' + 'main\x20activ' + 'e\x20node\x20inA' + 'ctive\x20in\x20h' + 'ierarchy,i' + 'f\x20the\x20oper' + 'ate\x20is\x20in\x20' + 'main\x20activ' + 'e\x20node\x20or\x20' + 'it\x27s\x20child' + 'ren\x20script' + '\x27s\x20onEnabl' + 'e\x20Event.';
                this['_parent']['activeInHi' + 'erarchy'] && this['active'] && this['_processIn' + 'Active'](), this['_parent']['scene'] && this['_setUnBelo' + 'ngScene']();
            }, _0x1b46be['_addCompon' + 'entInstanc' + 'e'] = function (_0x4e619d) {
                this['_component' + 's'] = this['_component' + 's'] || [], this['_component' + 's']['push'](_0x4e619d), _0x4e619d['owner'] = this, _0x4e619d['_onAdded'](), this['activeInHi' + 'erarchy'] && (_0x4e619d['_setActive'](!0x0), _0x4e619d['_isScript']() && _0x4e619d['onEnable']()), this['_scene'] && _0x4e619d['_setActive' + 'InScene'](!0x0);
            }, _0x1b46be['_destroyCo' + 'mponent'] = function (_0x346989) {
                if (this['_component' + 's'])
                    for (var _0x5f5cdc = 0x0, _0x23a47 = this['_component' + 's']['length']; _0x23a47 > _0x5f5cdc; _0x5f5cdc++) {
                        var _0x540070 = this['_component' + 's'][_0x5f5cdc];
                        if (_0x540070 === _0x346989) {
                            _0x540070['_destroy'](), this['_component' + 's']['splice'](_0x5f5cdc, 0x1);
                            break;
                        }
                    }
            }, _0x1b46be['_destroyAl' + 'lComponent'] = function () {
                if (this['_component' + 's']) {
                    for (var _0x58e99a = 0x0, _0x18d77c = this['_component' + 's']['length']; _0x18d77c > _0x58e99a; _0x58e99a++) {
                        var _0x14dad8 = this['_component' + 's'][_0x58e99a];
                        _0x14dad8['_destroy']();
                    }
                    this['_component' + 's']['length'] = 0x0;
                }
            }, _0x1b46be['_cloneTo'] = function (_0x40960f) {
                var _0x2d16ea = _0x40960f;
                if (this['_component' + 's'])
                    for (var _0x341026 = 0x0, _0x1a3cef = this['_component' + 's']['length']; _0x1a3cef > _0x341026; _0x341026++) {
                        var _0x3f689e = _0x2d16ea['addCompone' + 'nt'](this['_component' + 's'][_0x341026]['constructo' + 'r']);
                        this['_component' + 's'][_0x341026]['_cloneTo'](_0x3f689e);
                    }
            }, _0x1b46be['addCompone' + 'ntIntance'] = function (_0x44bbfd) {
                if (_0x44bbfd['owner'])
                    throw 'Node:the\x20c' + 'omponent\x20h' + 'as\x20belong\x20' + 'to\x20other\x20n' + 'ode.';
                if (_0x44bbfd['isSingleto' + 'n'] && this['getCompone' + 'nt'](_0x44bbfd['constructo' + 'r']))
                    throw 'Node:the\x20c' + 'omponent\x20i' + 's\x20singleto' + 'n,can\x27t\x20ad' + 'd\x20the\x20seco' + 'nd\x20one.';
                return this['_addCompon' + 'entInstanc' + 'e'](_0x44bbfd), _0x44bbfd;
            }, _0x1b46be['addCompone' + 'nt'] = function (_0x4aee69) {
                var _0xcf19e1 = _0x2249dd['createByCl' + 'ass'](_0x4aee69);
                if (_0xcf19e1['_destroyed'] = !0x1, _0xcf19e1['isSingleto' + 'n'] && this['getCompone' + 'nt'](_0x4aee69))
                    throw '无法实例' + _0x4aee69 + '组件，' + _0x4aee69 + '组件已存在！';
                return this['_addCompon' + 'entInstanc' + 'e'](_0xcf19e1), _0xcf19e1;
            }, _0x1b46be['getCompone' + 'nt'] = function (_0x30a66c) {
                if (this['_component' + 's'])
                    for (var _0x20c4df = 0x0, _0xb066aa = this['_component' + 's']['length']; _0xb066aa > _0x20c4df; _0x20c4df++) {
                        var _0x47ff70 = this['_component' + 's'][_0x20c4df];
                        if (_0x34a895['__typeof'](_0x47ff70, _0x30a66c))
                            return _0x47ff70;
                    }
                return null;
            }, _0x1b46be['getCompone' + 'nts'] = function (_0x13d73a) {
                var _0x178f78;
                if (this['_component' + 's'])
                    for (var _0x1b7984 = 0x0, _0x5ca1c6 = this['_component' + 's']['length']; _0x5ca1c6 > _0x1b7984; _0x1b7984++) {
                        var _0x301809 = this['_component' + 's'][_0x1b7984];
                        _0x34a895['__typeof'](_0x301809, _0x13d73a) && (_0x178f78 = _0x178f78 || [], _0x178f78['push'](_0x301809));
                    }
                return _0x178f78;
            }, _0x71e09a(0x0, _0x1b46be, 'numChildre' + 'n', function () {
                return this['_children']['length'];
            }), _0x71e09a(0x0, _0x1b46be, 'parent', function () {
                return this['_parent'];
            }), _0x71e09a(0x0, _0x1b46be, 'activeInHi' + 'erarchy', function () {
                return this['_getBit'](0x2);
            }), _0x71e09a(0x0, _0x1b46be, 'active', function () {
                return !this['_getBit'](0x8) && !this['_getBit'](0x1);
            }, function (_0x1292ed) {
                if (_0x1292ed = !!_0x1292ed, !this['_getBit'](0x1) !== _0x1292ed) {
                    if (this['_activeCha' + 'ngeScripts'] && 0x0 !== this['_activeCha' + 'ngeScripts']['length'])
                        throw _0x1292ed ? 'Node:\x20can\x27' + 't\x20set\x20the\x20' + 'main\x20inAct' + 'ive\x20node\x20a' + 'ctive\x20in\x20h' + 'ierarchy,i' + 'f\x20the\x20oper' + 'ate\x20is\x20in\x20' + 'main\x20inAct' + 'ive\x20node\x20o' + 'r\x20it\x27s\x20chi' + 'ldren\x20scri' + 'pt\x27s\x20onDis' + 'able\x20Event' + '.' : 'Node:\x20can\x27' + 't\x20set\x20the\x20' + 'main\x20activ' + 'e\x20node\x20inA' + 'ctive\x20in\x20h' + 'ierarchy,i' + 'f\x20the\x20oper' + 'ate\x20is\x20in\x20' + 'main\x20activ' + 'e\x20node\x20or\x20' + 'it\x27s\x20child' + 'ren\x20script' + '\x27s\x20onEnabl' + 'e\x20Event.';
                    this['_setBit'](0x1, !_0x1292ed), this['_parent'] && this['_parent']['activeInHi' + 'erarchy'] && (_0x1292ed ? this['_processAc' + 'tive']() : this['_processIn' + 'Active']());
                }
            }), _0x71e09a(0x0, _0x1b46be, 'displayedI' + 'nStage', function () {
                return this['_getBit'](0x10) ? this['_getBit'](0x80) : (this['_setBitUp'](0x10), this['_getBit'](0x80));
            }), _0x71e09a(0x0, _0x1b46be, 'scene', function () {
                return this['_scene'];
            }), _0x71e09a(0x0, _0x1b46be, 'timer', function () {
                return this['scene'] ? this['scene']['timer'] : _0x34a895['timer'];
            }), _0x1efe35['ARRAY_EMPT' + 'Y'] = [], _0x1efe35;
        }(_0x3f0f68), _0x13dba9 = function (_0x108aae) {
            function _0x715616() {
                this['_responseT' + 'ype'] = null, this['_data'] = null, this['_url'] = null, _0x715616['__super']['call'](this), this['_http'] = new _0x2ad6c5['window']['XMLHttpReq' + 'uest']();
            }
            _0x4621f4(_0x715616, 'laya.net.H' + 'ttpRequest', _0x108aae);
            var _0x6b3e15 = _0x715616['prototype'];
            return _0x6b3e15['send'] = function (_0x1e4791, _0x582399, _0x2431a8, _0x4b5d07, _0x312923) {
                void 0x0 === _0x2431a8 && (_0x2431a8 = 'get'), void 0x0 === _0x4b5d07 && (_0x4b5d07 = 'text'), this['_responseT' + 'ype'] = _0x4b5d07, this['_data'] = null, this['_url'] = _0x1e4791;
                var _0x220d01 = this, _0x27f160 = this['_http'];
                if (_0x1e4791 = _0x4bf8e9['getAdptedF' + 'ilePath'](_0x1e4791), _0x27f160['open'](_0x2431a8, _0x1e4791, !0x0), _0x312923) {
                    for (var _0x3efcd4 = 0x0; _0x3efcd4 < _0x312923['length']; _0x3efcd4++)
                        _0x27f160['setRequest' + 'Header'](_0x312923[_0x3efcd4++], _0x312923[_0x3efcd4]);
                } else
                    _0x4fec79['isConchApp'] || (_0x582399 && 'string' != typeof _0x582399 ? _0x27f160['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/json') : _0x27f160['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'));
                _0x27f160['responseTy' + 'pe'] = 'arraybuffe' + 'r' !== _0x4b5d07 ? 'text' : 'arraybuffe' + 'r', _0x27f160['onerror'] = function (_0x475e1b) {
                    _0x220d01['_onError'](_0x475e1b);
                }, _0x27f160['onabort'] = function (_0x8a81ea) {
                    _0x220d01['_onAbort'](_0x8a81ea);
                }, _0x27f160['onprogress'] = function (_0x43a739) {
                    _0x220d01['_onProgres' + 's'](_0x43a739);
                }, _0x27f160['onload'] = function (_0x239ddb) {
                    _0x220d01['_onLoad'](_0x239ddb);
                }, _0x27f160['send'](_0x582399);
            }, _0x6b3e15['_onProgres' + 's'] = function (_0x4dcbdc) {
                _0x4dcbdc && _0x4dcbdc['lengthComp' + 'utable'] && this['event']('progress', _0x4dcbdc['loaded'] / _0x4dcbdc['total']);
            }, _0x6b3e15['_onAbort'] = function (_0x1d7a14) {
                this['error']('Request\x20wa' + 's\x20aborted\x20' + 'by\x20user');
            }, _0x6b3e15['_onError'] = function (_0x35b9c2) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
            }, _0x6b3e15['_onLoad'] = function (_0x4141e8) {
                var _0x4cc321 = this['_http'], _0x3b33f4 = void 0x0 !== _0x4cc321['status'] ? _0x4cc321['status'] : 0xc8;
                0xc8 === _0x3b33f4 || 0xcc === _0x3b33f4 || 0x0 === _0x3b33f4 ? this['complete']() : this['error']('[' + _0x4cc321['status'] + ']' + _0x4cc321['statusText'] + ':' + _0x4cc321['responseUR' + 'L']);
            }, _0x6b3e15['error'] = function (_0x4e4825) {
                this['clear'](), console['warn'](this['url'], _0x4e4825), this['event']('error', _0x4e4825);
            }, _0x6b3e15['complete'] = function () {
                this['clear']();
                var _0x2da223 = !0x0;
                try {
                    'json' === this['_responseT' + 'ype'] ? this['_data'] = JSON['parse'](this['_http']['responseTe' + 'xt']) : 'xml' === this['_responseT' + 'ype'] ? this['_data'] = _0x3b78ce['parseXMLFr' + 'omString'](this['_http']['responseTe' + 'xt']) : this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'];
                } catch (_0x3a2363) {
                    _0x2da223 = !0x1, this['error'](_0x3a2363['message']);
                }
                _0x2da223 && this['event']('complete', this['_data'] instanceof Array ? [this['_data']] : this['_data']);
            }, _0x6b3e15['clear'] = function () {
                var _0x4e9f88 = this['_http'];
                _0x4e9f88['onerror'] = _0x4e9f88['onabort'] = _0x4e9f88['onprogress'] = _0x4e9f88['onload'] = null;
            }, _0x71e09a(0x0, _0x6b3e15, 'url', function () {
                return this['_url'];
            }), _0x71e09a(0x0, _0x6b3e15, 'http', function () {
                return this['_http'];
            }), _0x71e09a(0x0, _0x6b3e15, 'data', function () {
                return this['_data'];
            }), _0x715616;
        }(_0x3f0f68), _0x5886df = function (_0x60dbfd) {
            function _0x17f707() {
                this['url'] = null, this['audio'] = null, this['loaded'] = !0x1, _0x17f707['__super']['call'](this);
            }
            _0x4621f4(_0x17f707, 'laya.media' + '.h5audio.A' + 'udioSound', _0x60dbfd);
            var _0x286492 = _0x17f707['prototype'];
            return _0x286492['dispose'] = function () {
                var _0xc9fe77 = _0x17f707['_audioCach' + 'e'][this['url']];
                _0x2249dd['clearBySig' + 'n']('audio:' + this['url']), _0xc9fe77 && (_0x4fec79['isConchApp'] || (_0xc9fe77['src'] = ''), delete _0x17f707['_audioCach' + 'e'][this['url']]);
            }, _0x286492['load'] = function (_0xea406) {
                function _0x889e0d() {
                    _0x1432f8(), _0x2b6437['loaded'] = !0x0, _0x2b6437['event']('complete');
                }
                function _0x31a935() {
                    _0x3d4033['load'] = null, _0x1432f8(), _0x2b6437['event']('error');
                }
                function _0x1432f8() {
                    _0x3d4033['removeEven' + 'tListener']('canplaythr' + 'ough', _0x889e0d), _0x3d4033['removeEven' + 'tListener']('error', _0x31a935);
                }
                _0xea406 = _0x4bf8e9['formatURL'](_0xea406), this['url'] = _0xea406;
                var _0x3d4033;
                if (_0xea406 == _0x273f4b['_bgMusic'] ? (_0x17f707['_initMusic' + 'Audio'](), _0x3d4033 = _0x17f707['_musicAudi' + 'o'], _0x3d4033['src'] != _0xea406 && (_0x17f707['_audioCach' + 'e'][_0x3d4033['src']] = null, _0x3d4033 = null)) : _0x3d4033 = _0x17f707['_audioCach' + 'e'][_0xea406], _0x3d4033 && _0x3d4033['readyState'] >= 0x2)
                    return void this['event']('complete');
                _0x3d4033 || (_0xea406 == _0x273f4b['_bgMusic'] ? (_0x17f707['_initMusic' + 'Audio'](), _0x3d4033 = _0x17f707['_musicAudi' + 'o']) : _0x3d4033 = _0x2ad6c5['createElem' + 'ent']('audio'), _0x17f707['_audioCach' + 'e'][_0xea406] = _0x3d4033, _0x3d4033['src'] = _0xea406), _0x3d4033['addEventLi' + 'stener']('canplaythr' + 'ough', _0x889e0d), _0x3d4033['addEventLi' + 'stener']('error', _0x31a935);
                var _0x2b6437 = this;
                this['audio'] = _0x3d4033, _0x3d4033['load'] ? _0x3d4033['load']() : _0x31a935();
            }, _0x286492['play'] = function (_0x289e24, _0x20208e) {
                if (void 0x0 === _0x289e24 && (_0x289e24 = 0x0), void 0x0 === _0x20208e && (_0x20208e = 0x0), !this['url'])
                    return null;
                var _0x49a352;
                if (_0x49a352 = this['url'] == _0x273f4b['_bgMusic'] ? _0x17f707['_musicAudi' + 'o'] : _0x17f707['_audioCach' + 'e'][this['url']], !_0x49a352)
                    return null;
                var _0x3fc80b;
                _0x3fc80b = _0x2249dd['getItem']('audio:' + this['url']), _0x4fec79['isConchApp'] ? _0x3fc80b || (_0x3fc80b = _0x2ad6c5['createElem' + 'ent']('audio'), _0x3fc80b['src'] = this['url']) : this['url'] == _0x273f4b['_bgMusic'] ? (_0x17f707['_initMusic' + 'Audio'](), _0x3fc80b = _0x17f707['_musicAudi' + 'o'], _0x3fc80b['src'] = this['url']) : _0x3fc80b = _0x3fc80b ? _0x3fc80b : _0x49a352['cloneNode'](!0x0);
                var _0x50700f = new _0x29aac0(_0x3fc80b);
                return _0x50700f['url'] = this['url'], _0x50700f['loops'] = _0x20208e, _0x50700f['startTime'] = _0x289e24, _0x50700f['play'](), _0x273f4b['addChannel'](_0x50700f), _0x50700f;
            }, _0x71e09a(0x0, _0x286492, 'duration', function () {
                var _0x9e86c0;
                return _0x9e86c0 = _0x17f707['_audioCach' + 'e'][this['url']], _0x9e86c0 ? _0x9e86c0['duration'] : 0x0;
            }), _0x17f707['_initMusic' + 'Audio'] = function () {
                _0x17f707['_musicAudi' + 'o'] || (_0x17f707['_musicAudi' + 'o'] || (_0x17f707['_musicAudi' + 'o'] = _0x2ad6c5['createElem' + 'ent']('audio')), _0x4fec79['isConchApp'] || _0x2ad6c5['document']['addEventLi' + 'stener']('mousedown', _0x17f707['_makeMusic' + 'OK']));
            }, _0x17f707['_makeMusic' + 'OK'] = function () {
                _0x2ad6c5['document']['removeEven' + 'tListener']('mousedown', _0x17f707['_makeMusic' + 'OK']), _0x17f707['_musicAudi' + 'o']['src'] ? _0x17f707['_musicAudi' + 'o']['play']() : (_0x17f707['_musicAudi' + 'o']['src'] = '', _0x17f707['_musicAudi' + 'o']['load']());
            }, _0x17f707['_audioCach' + 'e'] = {}, _0x17f707['_musicAudi' + 'o'] = null, _0x17f707;
        }(_0x3f0f68), _0x2a8739 = function (_0xee4917) {
            function _0x3fac54() {
                this['worker'] = null, this['_useWorker' + 'Loader'] = !0x1, _0x3fac54['__super']['call'](this);
                var _0x4c888d = this;
                this['worker'] = new _0x2ad6c5['window']['Worker'](_0x3fac54['workerPath']), this['worker']['onmessage'] = function (_0x293915) {
                    _0x4c888d['workerMess' + 'age'](_0x293915['data']);
                };
            }
            _0x4621f4(_0x3fac54, 'laya.net.W' + 'orkerLoade' + 'r', _0xee4917);
            var _0x36b2ae = _0x3fac54['prototype'];
            return _0x36b2ae['workerMess' + 'age'] = function (_0x1735f4) {
                if (_0x1735f4)
                    switch (_0x1735f4['type']) {
                    case 'Image':
                        this['imageLoade' + 'd'](_0x1735f4);
                        break;
                    case 'Disable':
                        _0x3fac54['enable'] = !0x1;
                    }
            }, _0x36b2ae['imageLoade' + 'd'] = function (_0x1706b2) {
                if (!_0x1706b2['dataType'] || 'imageBitma' + 'p' != _0x1706b2['dataType'])
                    return void this['event'](_0x1706b2['url'], null);
                var _0x407bb1 = new _0x50a1b2(!0x0), _0x2fb4b0 = _0x407bb1['source']['getContext']('2d');
                switch (_0x1706b2['dataType']) {
                case 'imageBitma' + 'p':
                    var _0x1b977a = _0x1706b2['imageBitma' + 'p'];
                    _0x407bb1['size'](_0x1b977a['width'], _0x1b977a['height']), _0x2fb4b0['drawImage'](_0x1b977a, 0x0, 0x0);
                }
                if (console['log']('load:', _0x1706b2['url']), _0x4fec79['isWebGL']) {
                    _0x407bb1['_setGPUMem' + 'ory'](0x0);
                    var _0x11f65a = new laya['webgl']['resource']['Texture2D']();
                    _0x11f65a['loadImageS' + 'ource'](_0x407bb1), _0x407bb1 = _0x11f65a;
                }
                this['event'](_0x1706b2['url'], _0x407bb1);
            }, _0x36b2ae['loadImage'] = function (_0x491be2) {
                this['worker']['postMessag' + 'e'](_0x491be2);
            }, _0x36b2ae['_loadImage'] = function (_0x2ad788) {
                function _0x1825a1() {
                    laya['net']['WorkerLoad' + 'er']['I']['off'](_0x2ad788, _0x37ac8c, _0x38884d);
                }
                var _0x37ac8c = this;
                if (!this['_useWorker' + 'Loader'] || !_0x3fac54['_enable'])
                    return void _0x3fac54['_preLoadFu' + 'n']['call'](_0x37ac8c, _0x2ad788);
                _0x2ad788 = _0x4bf8e9['formatURL'](_0x2ad788);
                var _0x38884d = function (_0x49d445) {
                    _0x1825a1(), _0x49d445 ? _0x37ac8c['onLoaded'](_0x49d445) : _0x3fac54['_preLoadFu' + 'n']['call'](_0x37ac8c, _0x2ad788);
                };
                laya['net']['WorkerLoad' + 'er']['I']['on'](_0x2ad788, _0x37ac8c, _0x38884d), laya['net']['WorkerLoad' + 'er']['I']['loadImage'](_0x2ad788);
            }, _0x71e09a(0x1, _0x3fac54, 'enable', function () {
                return _0x3fac54['_enable'];
            }, function (_0x31ccd5) {
                _0x3fac54['_enable'] != _0x31ccd5 && (_0x3fac54['_enable'] = _0x31ccd5, _0x31ccd5 && null == _0x3fac54['_preLoadFu' + 'n'] && (_0x3fac54['_enable'] = _0x3fac54['__init__']()));
            }), _0x3fac54['__init__'] = function () {
                return null != _0x3fac54['_preLoadFu' + 'n'] ? !0x1 : _0x2ad6c5['window']['Worker'] ? (_0x3fac54['_preLoadFu' + 'n'] = _0x3943d1['prototype']['_loadImage'], _0x3943d1['prototype']['_loadImage'] = _0x3fac54['prototype']['_loadImage'], _0x3fac54['I'] || (_0x3fac54['I'] = new _0x3fac54()), !0x0) : !0x1;
            }, _0x3fac54['workerSupp' + 'orted'] = function () {
                return _0x2ad6c5['window']['Worker'] ? !0x0 : !0x1;
            }, _0x3fac54['enableWork' + 'erLoader'] = function () {
                _0x3fac54['_tryEnable' + 'd'] || (_0x3fac54['enable'] = !0x0, _0x3fac54['_tryEnable' + 'd'] = !0x0);
            }, _0x3fac54['I'] = null, _0x3fac54['workerPath'] = 'libs/worke' + 'rloader.js', _0x3fac54['_preLoadFu' + 'n'] = null, _0x3fac54['_enable'] = !0x1, _0x3fac54['_tryEnable' + 'd'] = !0x1, _0x3fac54;
        }(_0x3f0f68), _0x571bfb = function (_0x393d6e) {
            function _0x2f8f04() {
                this['retryNum'] = 0x1, this['retryDelay'] = 0x0, this['maxLoader'] = 0x5, this['_loaders'] = [], this['_loaderCou' + 'nt'] = 0x0, this['_resInfos'] = [], this['_infoPool'] = [], this['_maxPriori' + 'ty'] = 0x5, this['_failRes'] = {}, this['_statInfo'] = {
                    'count': 0x1,
                    'loaded': 0x1
                }, _0x2f8f04['__super']['call'](this);
                for (var _0xe071ab = 0x0; _0xe071ab < this['_maxPriori' + 'ty']; _0xe071ab++)
                    this['_resInfos'][_0xe071ab] = [];
            }
            var _0x222697;
            _0x4621f4(_0x2f8f04, 'laya.net.L' + 'oaderManag' + 'er', _0x393d6e);
            var _0x269668 = _0x2f8f04['prototype'];
            return _0x269668['getProgres' + 's'] = function () {
                return this['_statInfo']['loaded'] / this['_statInfo']['count'];
            }, _0x269668['resetProgr' + 'ess'] = function () {
                this['_statInfo']['count'] = this['_statInfo']['loaded'] = 0x1;
            }, _0x269668['create'] = function (_0x5d39cd, _0x5388fe, _0xe07091, _0x272c29, _0xb8d25d, _0x255df5, _0x32061d, _0x5d3475) {
                void 0x0 === _0x32061d && (_0x32061d = 0x1), void 0x0 === _0x5d3475 && (_0x5d3475 = !0x0), this['_create'](_0x5d39cd, !0x0, _0x5388fe, _0xe07091, _0x272c29, _0xb8d25d, _0x255df5, _0x32061d, _0x5d3475);
            }, _0x269668['_create'] = function (_0x34ddd3, _0x4335b5, _0x4ec211, _0x1711f5, _0x3b824a, _0x1188af, _0x322605, _0x356693, _0xbfd66e) {
                function _0x38fc86(_0x23c34f, _0x5f09dd) {
                    _0x2f2011++, _0x23c34f['progress'] = 0x1, _0x2f2011 === _0x464b4b && _0x4ec211 && _0x4ec211['run']();
                }
                function _0xb87b26(_0x7cd6d, _0x338648) {
                    _0x7cd6d['progress'] = _0x338648;
                    for (var _0x3a8b77 = 0x0, _0x43948b = 0x0; _0x464b4b > _0x43948b; _0x43948b++) {
                        var _0x5a5df1 = _0x48d5ae[_0x43948b];
                        _0x3a8b77 += _0x5a5df1['progress'];
                    }
                    var _0x1ce2a9 = _0x3a8b77 / _0x464b4b;
                    _0x5aa4d3['runWith'](_0x1ce2a9);
                }
                if (void 0x0 === _0x356693 && (_0x356693 = 0x1), void 0x0 === _0xbfd66e && (_0xbfd66e = !0x0), _0x34ddd3 instanceof Array) {
                    var _0x48d5ae = _0x34ddd3, _0x464b4b = _0x48d5ae['length'], _0x2f2011 = 0x0;
                    if (_0x1711f5)
                        var _0x5aa4d3 = _0x16ca2b['create'](_0x1711f5['caller'], _0x1711f5['method'], _0x1711f5['args'], !0x1);
                    for (var _0x274faf = 0x0; _0x464b4b > _0x274faf; _0x274faf++) {
                        var _0x3fa7fa = _0x48d5ae[_0x274faf];
                        'string' == typeof _0x3fa7fa && (_0x3fa7fa = _0x48d5ae[_0x274faf] = { 'url': _0x3fa7fa }), _0x3fa7fa['progress'] = 0x0;
                    }
                    for (_0x274faf = 0x0; _0x464b4b > _0x274faf; _0x274faf++) {
                        _0x3fa7fa = _0x48d5ae[_0x274faf];
                        var _0x249ec3 = _0x1711f5 ? _0x16ca2b['create'](null, _0xb87b26, [_0x3fa7fa], !0x1) : null, _0x3d0e99 = _0x1711f5 || _0x4ec211 ? _0x16ca2b['create'](null, _0x38fc86, [_0x3fa7fa]) : null;
                        this['_createOne'](_0x3fa7fa['url'], _0x4335b5, _0x3d0e99, _0x249ec3, _0x3fa7fa['type'] || _0x3b824a, _0x3fa7fa['constructP' + 'arams'] || _0x1188af, _0x3fa7fa['propertyPa' + 'rams'] || _0x322605, _0x3fa7fa['priority'] || _0x356693, _0xbfd66e);
                    }
                } else
                    this['_createOne'](_0x34ddd3, _0x4335b5, _0x4ec211, _0x1711f5, _0x3b824a, _0x1188af, _0x322605, _0x356693, _0xbfd66e);
            }, _0x269668['_createOne'] = function (_0x27727b, _0x3ef4bb, _0x19a80b, _0xda6c1d, _0x518852, _0x346012, _0x4bc5a5, _0x8dbee5, _0x46ac6f) {
                function _0x42a08b(_0x1565a1) {
                    _0x1565a1 && (!_0x3ef4bb && _0x1565a1 instanceof laya['resource']['Resource'] && _0x1565a1['_addRefere' + 'nce'](), _0x1565a1['_setCreate' + 'URL'](_0x27727b)), _0x19a80b && _0x19a80b['runWith'](_0x1565a1), _0x34a895['loader']['event'](_0x27727b);
                }
                void 0x0 === _0x8dbee5 && (_0x8dbee5 = 0x1), void 0x0 === _0x46ac6f && (_0x46ac6f = !0x0);
                var _0xd32d6a = this['getRes'](_0x27727b);
                if (_0xd32d6a)
                    !_0x3ef4bb && _0xd32d6a instanceof laya['resource']['Resource'] && _0xd32d6a['_addRefere' + 'nce'](), _0xda6c1d && _0xda6c1d['runWith'](0x1), _0x19a80b && _0x19a80b['runWith'](_0xd32d6a);
                else {
                    var _0x50e31e = _0x3b78ce['getFileExt' + 'ension'](_0x27727b);
                    if (_0x518852 || (_0x518852 = _0x2f8f04['createMap'][_0x50e31e] ? _0x2f8f04['createMap'][_0x50e31e][0x0] : null), !_0x518852)
                        return void this['load'](_0x27727b, _0x19a80b, _0xda6c1d, _0x518852, _0x8dbee5, _0x46ac6f);
                    var _0x32a9b1 = _0x3943d1['parserMap'];
                    if (!_0x32a9b1[_0x518852])
                        return void this['load'](_0x27727b, _0x19a80b, _0xda6c1d, _0x518852, _0x8dbee5, _0x46ac6f);
                    this['_createLoa' + 'd'](_0x27727b, _0x16ca2b['create'](null, _0x42a08b), _0xda6c1d, _0x518852, _0x346012, _0x4bc5a5, _0x8dbee5, _0x46ac6f, !0x0);
                }
            }, _0x269668['load'] = function (_0x1854a6, _0x950de7, _0x25bca9, _0x8db95b, _0x5cd98c, _0x59ea2b, _0x4b2ea2, _0x218464, _0x3fad8e) {
                var _0x41b71e = this;
                if (void 0x0 === _0x5cd98c && (_0x5cd98c = 0x1), void 0x0 === _0x59ea2b && (_0x59ea2b = !0x0), void 0x0 === _0x218464 && (_0x218464 = !0x1), void 0x0 === _0x3fad8e && (_0x3fad8e = !0x1), _0x1854a6 instanceof Array)
                    return this['_loadAsset' + 's'](_0x1854a6, _0x950de7, _0x25bca9, _0x8db95b, _0x5cd98c, _0x59ea2b, _0x4b2ea2);
                var _0x4d767d = _0x3943d1['getRes'](_0x1854a6);
                if (_0x218464 || null == _0x4d767d) {
                    var _0x590cf0;
                    _0x590cf0 = _0x1854a6, _0x1854a6 = _0x59c1f7['getFileLoa' + 'dPath'](_0x1854a6), _0x1854a6 != _0x590cf0 && 'nativeimag' + 'e' !== _0x8db95b ? _0x8db95b = 'atlas' : _0x590cf0 = null;
                    var _0x9c04c9 = _0x2f8f04['_resMap'][_0x1854a6];
                    _0x9c04c9 ? (_0x950de7 && (_0x590cf0 ? _0x950de7 && _0x9c04c9['_createLis' + 'tener']('complete', this, this['_resInfoLo' + 'aded'], [
                        _0x590cf0,
                        _0x950de7
                    ], !0x1, !0x1) : _0x950de7 && _0x9c04c9['_createLis' + 'tener']('complete', _0x950de7['caller'], _0x950de7['method'], _0x950de7['args'], !0x1, !0x1)), _0x25bca9 && _0x9c04c9['_createLis' + 'tener']('progress', _0x25bca9['caller'], _0x25bca9['method'], _0x25bca9['args'], !0x1, !0x1)) : (_0x9c04c9 = this['_infoPool']['length'] ? this['_infoPool']['pop']() : new _0x222697(), _0x9c04c9['url'] = _0x1854a6, _0x9c04c9['type'] = _0x8db95b, _0x9c04c9['cache'] = _0x59ea2b, _0x9c04c9['group'] = _0x4b2ea2, _0x9c04c9['ignoreCach' + 'e'] = _0x218464, _0x9c04c9['useWorkerL' + 'oader'] = _0x3fad8e, _0x9c04c9['originalUr' + 'l'] = _0x590cf0, _0x950de7 && _0x9c04c9['on']('complete', _0x950de7['caller'], _0x950de7['method'], _0x950de7['args']), _0x25bca9 && _0x9c04c9['on']('progress', _0x25bca9['caller'], _0x25bca9['method'], _0x25bca9['args']), _0x2f8f04['_resMap'][_0x1854a6] = _0x9c04c9, _0x5cd98c = _0x5cd98c < this['_maxPriori' + 'ty'] ? _0x5cd98c : this['_maxPriori' + 'ty'] - 0x1, this['_resInfos'][_0x5cd98c]['push'](_0x9c04c9), this['_statInfo']['count']++, this['event']('progress', this['getProgres' + 's']()), this['_next']());
                } else
                    _0x34a895['systemTime' + 'r']['frameOnce'](0x1, null, function () {
                        _0x25bca9 && _0x25bca9['runWith'](0x1), _0x950de7 && _0x950de7['runWith'](_0x4d767d), _0x41b71e['_loaderCou' + 'nt'] || _0x41b71e['event']('complete');
                    });
                return this;
            }, _0x269668['_resInfoLo' + 'aded'] = function (_0x1b9d88, _0x280998) {
                _0x280998['runWith'](_0x3943d1['getRes'](_0x1b9d88));
            }, _0x269668['_createLoa' + 'd'] = function (_0x3f36cc, _0x3707f1, _0x3097bd, _0x345860, _0x1ff8f5, _0x49b350, _0x2c2a6b, _0x468ff8, _0x273109) {
                var _0x408c30 = this;
                if (void 0x0 === _0x2c2a6b && (_0x2c2a6b = 0x1), void 0x0 === _0x468ff8 && (_0x468ff8 = !0x0), void 0x0 === _0x273109 && (_0x273109 = !0x1), _0x3f36cc instanceof Array)
                    return this['_loadAsset' + 's'](_0x3f36cc, _0x3707f1, _0x3097bd, _0x345860, _0x2c2a6b, _0x468ff8);
                var _0x31ffa4 = _0x3943d1['getRes'](_0x3f36cc);
                if (null != _0x31ffa4)
                    _0x34a895['systemTime' + 'r']['frameOnce'](0x1, null, function () {
                        _0x3097bd && _0x3097bd['runWith'](0x1), _0x3707f1 && _0x3707f1['runWith'](_0x31ffa4), _0x408c30['_loaderCou' + 'nt'] || _0x408c30['event']('complete');
                    });
                else {
                    var _0x9fbbea = _0x2f8f04['_resMap'][_0x3f36cc];
                    _0x9fbbea ? (_0x3707f1 && _0x9fbbea['_createLis' + 'tener']('complete', _0x3707f1['caller'], _0x3707f1['method'], _0x3707f1['args'], !0x1, !0x1), _0x3097bd && _0x9fbbea['_createLis' + 'tener']('progress', _0x3097bd['caller'], _0x3097bd['method'], _0x3097bd['args'], !0x1, !0x1)) : (_0x9fbbea = this['_infoPool']['length'] ? this['_infoPool']['pop']() : new _0x222697(), _0x9fbbea['url'] = _0x3f36cc, _0x9fbbea['type'] = _0x345860, _0x9fbbea['cache'] = !0x1, _0x9fbbea['ignoreCach' + 'e'] = _0x273109, _0x9fbbea['originalUr' + 'l'] = null, _0x9fbbea['createCach' + 'e'] = _0x468ff8, _0x9fbbea['createCons' + 'tructParam' + 's'] = _0x1ff8f5, _0x9fbbea['createProp' + 'ertyParams'] = _0x49b350, _0x3707f1 && _0x9fbbea['on']('complete', _0x3707f1['caller'], _0x3707f1['method'], _0x3707f1['args']), _0x3097bd && _0x9fbbea['on']('progress', _0x3097bd['caller'], _0x3097bd['method'], _0x3097bd['args']), _0x2f8f04['_resMap'][_0x3f36cc] = _0x9fbbea, _0x2c2a6b = _0x2c2a6b < this['_maxPriori' + 'ty'] ? _0x2c2a6b : this['_maxPriori' + 'ty'] - 0x1, this['_resInfos'][_0x2c2a6b]['push'](_0x9fbbea), this['_statInfo']['count']++, this['event']('progress', this['getProgres' + 's']()), this['_next']());
                }
                return this;
            }, _0x269668['_next'] = function () {
                if (!(this['_loaderCou' + 'nt'] >= this['maxLoader'])) {
                    for (var _0x5c46d0 = 0x0; _0x5c46d0 < this['_maxPriori' + 'ty']; _0x5c46d0++)
                        for (var _0x469795 = this['_resInfos'][_0x5c46d0]; _0x469795['length'] > 0x0;) {
                            var _0x55b9f5 = _0x469795['shift']();
                            if (_0x55b9f5)
                                return this['_doLoad'](_0x55b9f5);
                        }
                    this['_loaderCou' + 'nt'] || this['event']('complete');
                }
            }, _0x269668['_doLoad'] = function (_0x32d048) {
                function _0x302bc5(_0x73f119) {
                    _0xad367['offAll'](), _0xad367['_data'] = null, _0xad367['_customPar' + 'se'] = !0x1, _0x5ac08a['_loaders']['push'](_0xad367), _0x5ac08a['_endLoad'](_0x32d048, _0x73f119 instanceof Array ? [_0x73f119] : _0x73f119), _0x5ac08a['_loaderCou' + 'nt']--, _0x5ac08a['_next']();
                }
                this['_loaderCou' + 'nt']++;
                var _0xad367 = this['_loaders']['length'] ? this['_loaders']['pop']() : new _0x3943d1();
                _0xad367['on']('complete', null, _0x302bc5), _0xad367['on']('progress', null, function (_0x38b387) {
                    _0x32d048['event']('progress', _0x38b387);
                }), _0xad367['on']('error', null, function (_0x480356) {
                    _0x302bc5(null);
                });
                var _0x5ac08a = this;
                _0xad367['_construct' + 'Params'] = _0x32d048['createCons' + 'tructParam' + 's'], _0xad367['_propertyP' + 'arams'] = _0x32d048['createProp' + 'ertyParams'], _0xad367['_createCac' + 'he'] = _0x32d048['createCach' + 'e'], _0xad367['load'](_0x32d048['url'], _0x32d048['type'], _0x32d048['cache'], _0x32d048['group'], _0x32d048['ignoreCach' + 'e'], _0x32d048['useWorkerL' + 'oader']);
            }, _0x269668['_endLoad'] = function (_0x2ef2cc, _0x94a6d2) {
                var _0x3b23f0 = _0x2ef2cc['url'];
                if (null == _0x94a6d2) {
                    var _0x5a58eb = this['_failRes'][_0x3b23f0] || 0x0;
                    if (_0x5a58eb < this['retryNum'])
                        return console['warn']('[warn]Retr' + 'y\x20to\x20load:', _0x3b23f0), this['_failRes'][_0x3b23f0] = _0x5a58eb + 0x1, void _0x34a895['systemTime' + 'r']['once'](this['retryDelay'], this, this['_addReTry'], [_0x2ef2cc], !0x1);
                    _0x3943d1['clearRes'](_0x3b23f0), console['warn']('[error]Fai' + 'led\x20to\x20loa' + 'd:', _0x3b23f0), this['event']('error', _0x3b23f0);
                }
                this['_failRes'][_0x3b23f0] && (this['_failRes'][_0x3b23f0] = 0x0), delete _0x2f8f04['_resMap'][_0x3b23f0], _0x2ef2cc['originalUr' + 'l'] && (_0x94a6d2 = _0x3943d1['getRes'](_0x2ef2cc['originalUr' + 'l'])), _0x2ef2cc['event']('complete', _0x94a6d2), _0x2ef2cc['offAll'](), this['_infoPool']['push'](_0x2ef2cc), this['_statInfo']['loaded']++, this['event']('progress', this['getProgres' + 's']());
            }, _0x269668['_addReTry'] = function (_0x5ceb9c) {
                this['_resInfos'][this['_maxPriori' + 'ty'] - 0x1]['push'](_0x5ceb9c), this['_next']();
            }, _0x269668['clearRes'] = function (_0x593de6) {
                _0x3943d1['clearRes'](_0x593de6);
            }, _0x269668['clearTextu' + 'reRes'] = function (_0x7d0b83) {
                _0x3943d1['clearTextu' + 'reRes'](_0x7d0b83);
            }, _0x269668['getRes'] = function (_0x4ba7dd) {
                return _0x3943d1['getRes'](_0x4ba7dd);
            }, _0x269668['cacheRes'] = function (_0x359418, _0x233a25) {
                _0x3943d1['cacheRes'](_0x359418, _0x233a25);
            }, _0x269668['setGroup'] = function (_0x3584e1, _0x42e44e) {
                _0x3943d1['setGroup'](_0x3584e1, _0x42e44e);
            }, _0x269668['clearResBy' + 'Group'] = function (_0x1dce45) {
                _0x3943d1['clearResBy' + 'Group'](_0x1dce45);
            }, _0x269668['clearUnLoa' + 'ded'] = function () {
                for (var _0x4a7183 = 0x0; _0x4a7183 < this['_maxPriori' + 'ty']; _0x4a7183++) {
                    for (var _0x15b942 = this['_resInfos'][_0x4a7183], _0x52139e = _0x15b942['length'] - 0x1; _0x52139e > -0x1; _0x52139e--) {
                        var _0x24c73e = _0x15b942[_0x52139e];
                        _0x24c73e && (_0x24c73e['offAll'](), this['_infoPool']['push'](_0x24c73e));
                    }
                    _0x15b942['length'] = 0x0;
                }
                this['_loaderCou' + 'nt'] = 0x0, _0x2f8f04['_resMap'] = {};
            }, _0x269668['cancelLoad' + 'ByUrls'] = function (_0x276797) {
                if (_0x276797) {
                    for (var _0x505aeb = 0x0, _0x3bcedc = _0x276797['length']; _0x3bcedc > _0x505aeb; _0x505aeb++)
                        this['cancelLoad' + 'ByUrl'](_0x276797[_0x505aeb]);
                }
            }, _0x269668['cancelLoad' + 'ByUrl'] = function (_0xf0f9f7) {
                for (var _0x5a8218 = 0x0; _0x5a8218 < this['_maxPriori' + 'ty']; _0x5a8218++)
                    for (var _0x4856e5 = this['_resInfos'][_0x5a8218], _0x475633 = _0x4856e5['length'] - 0x1; _0x475633 > -0x1; _0x475633--) {
                        var _0x303722 = _0x4856e5[_0x475633];
                        _0x303722 && _0x303722['url'] === _0xf0f9f7 && (_0x4856e5[_0x475633] = null, _0x303722['offAll'](), this['_infoPool']['push'](_0x303722));
                    }
                _0x2f8f04['_resMap'][_0xf0f9f7] && delete _0x2f8f04['_resMap'][_0xf0f9f7];
            }, _0x269668['_loadAsset' + 's'] = function (_0x475655, _0x1e12db, _0x3f8a2a, _0x1db214, _0x39d810, _0x5224f7, _0x5b2636) {
                function _0xb4731f(_0x542f81, _0x4a681e) {
                    _0x24a6b7++, _0x542f81['progress'] = 0x1, _0x4a681e || (_0x56ff4a = !0x1), _0x24a6b7 === _0x577140 && _0x1e12db && _0x1e12db['runWith'](_0x56ff4a);
                }
                function _0x59b618(_0xff67b4, _0x139442) {
                    if (null != _0x3f8a2a) {
                        _0xff67b4['progress'] = _0x139442;
                        for (var _0x53af2e = 0x0, _0x19f03a = 0x0; _0x19f03a < _0x186ef8['length']; _0x19f03a++) {
                            var _0x40a7d9 = _0x186ef8[_0x19f03a];
                            _0x53af2e += _0x40a7d9['size'] * _0x40a7d9['progress'];
                        }
                        var _0x3fd029 = _0x53af2e / _0x177748;
                        _0x3f8a2a['runWith'](_0x3fd029);
                    }
                }
                void 0x0 === _0x39d810 && (_0x39d810 = 0x1), void 0x0 === _0x5224f7 && (_0x5224f7 = !0x0);
                for (var _0x577140 = _0x475655['length'], _0x24a6b7 = 0x0, _0x177748 = 0x0, _0x186ef8 = [], _0x56ff4a = !0x0, _0x311806 = 0x0; _0x577140 > _0x311806; _0x311806++) {
                    var _0x1ab74c = _0x475655[_0x311806];
                    'string' == typeof _0x1ab74c && (_0x1ab74c = {
                        'url': _0x1ab74c,
                        'type': _0x1db214,
                        'size': 0x1,
                        'priority': _0x39d810
                    }), _0x1ab74c['size'] || (_0x1ab74c['size'] = 0x1), _0x1ab74c['progress'] = 0x0, _0x177748 += _0x1ab74c['size'], _0x186ef8['push'](_0x1ab74c);
                    var _0x18c3ba = _0x3f8a2a ? _0x16ca2b['create'](null, _0x59b618, [_0x1ab74c], !0x1) : null, _0x40f0ec = _0x1e12db || _0x3f8a2a ? _0x16ca2b['create'](null, _0xb4731f, [_0x1ab74c]) : null;
                    this['load'](_0x1ab74c['url'], _0x40f0ec, _0x18c3ba, _0x1ab74c['type'], _0x1ab74c['priority'] || 0x1, _0x5224f7, _0x1ab74c['group'] || _0x5b2636, !0x1, _0x1ab74c['useWorkerL' + 'oader']);
                }
                return this;
            }, _0x269668['decodeBitm' + 'aps'] = function (_0x813110) {
                var _0xa0ea28, _0x2b60cb = 0x0, _0x532f95 = _0x813110['length'];
                for (_0xa0ea28 = _0x4fec79['_context'], _0x2b60cb = 0x0; _0x532f95 > _0x2b60cb; _0x2b60cb++) {
                    var _0x3790ed;
                    if (_0x3790ed = _0x3943d1['getAtlas'](_0x813110[_0x2b60cb]))
                        this['_decodeTex' + 'ture'](_0x3790ed[0x0], _0xa0ea28);
                    else {
                        var _0x481f09;
                        _0x481f09 = this['getRes'](_0x813110[_0x2b60cb]), _0x481f09 && _0x481f09 instanceof laya['resource']['Texture'] && this['_decodeTex' + 'ture'](_0x481f09, _0xa0ea28);
                    }
                }
            }, _0x269668['_decodeTex' + 'ture'] = function (_0x5bd2ef, _0x1d4d56) {
                var _0x330591 = _0x5bd2ef['bitmap'];
                if (_0x5bd2ef && _0x330591) {
                    var _0x4c7f3f = _0x330591['source'] || _0x330591['image'];
                    _0x4c7f3f && _0x34a895['__typeof'](_0x4c7f3f, _0x2ad6c5['window']['HTMLImageE' + 'lement']) && (_0x1d4d56['drawImage'](_0x4c7f3f, 0x0, 0x0, 0x1, 0x1), _0x1d4d56['getImageDa' + 'ta'](0x0, 0x0, 0x1, 0x1));
                }
            }, _0x2f8f04['cacheRes'] = function (_0x209f25, _0xd8efa3) {
                _0x3943d1['cacheRes'](_0x209f25, _0xd8efa3);
            }, _0x2f8f04['_resMap'] = {}, _0x5043ef(_0x2f8f04, [
                'createMap',
                function () {
                    return this['createMap'] = {
                        'atlas': [
                            null,
                            'atlas'
                        ]
                    };
                }
            ]), _0x2f8f04['__init$'] = function () {
                _0x222697 = function (_0x63f399) {
                    function _0x261ba7() {
                        this['url'] = null, this['type'] = null, this['cache'] = !0x1, this['group'] = null, this['ignoreCach' + 'e'] = !0x1, this['useWorkerL' + 'oader'] = !0x1, this['originalUr' + 'l'] = null, this['createCach' + 'e'] = !0x1, this['createCons' + 'tructParam' + 's'] = null, this['createProp' + 'ertyParams'] = null, _0x261ba7['__super']['call'](this);
                    }
                    return _0x4621f4(_0x261ba7, '', _0x63f399), _0x261ba7;
                }(_0x3f0f68);
            }, _0x2f8f04;
        }(_0x3f0f68), _0x423a0f = (function (_0x4a1261) {
            function _0x49f546() {
                _0x49f546['__super']['call'](this);
            }
            _0x4621f4(_0x49f546, 'laya.media' + '.Sound', _0x4a1261);
            var _0xb88fea = _0x49f546['prototype'];
            return _0xb88fea['load'] = function (_0x3ba913) {
            }, _0xb88fea['play'] = function (_0x48f84f, _0x19f134) {
                return void 0x0 === _0x48f84f && (_0x48f84f = 0x0), void 0x0 === _0x19f134 && (_0x19f134 = 0x0), null;
            }, _0xb88fea['dispose'] = function () {
            }, _0x71e09a(0x0, _0xb88fea, 'duration', function () {
                return 0x0;
            }), _0x49f546;
        }(_0x3f0f68), function (_0x5c903f) {
            function _0x5ebc9d() {
                this['_labelDic'] = null, this['_tweenDic'] = {}, this['_tweenData' + 'List'] = [], this['_endTweenD' + 'ataList'] = null, this['_currTime'] = 0x0, this['_lastTime'] = 0x0, this['_startTime'] = 0x0, this['_index'] = 0x0, this['_gidIndex'] = 0x0, this['_firstTwee' + 'nDic'] = {}, this['_startTime' + 'Sort'] = !0x1, this['_endTimeSo' + 'rt'] = !0x1, this['_loopKey'] = !0x1, this['scale'] = 0x1, this['_frameRate'] = 0x3c, this['_frameInde' + 'x'] = 0x0, this['_total'] = 0x0, _0x5ebc9d['__super']['call'](this);
            }
            var _0x1025e1;
            _0x4621f4(_0x5ebc9d, 'laya.utils' + '.TimeLine', _0x5c903f);
            var _0x29a9f5 = _0x5ebc9d['prototype'];
            return _0x29a9f5['to'] = function (_0x3c6a57, _0xaa4105, _0x2e409c, _0x452327, _0x33bfd9) {
                return void 0x0 === _0x33bfd9 && (_0x33bfd9 = 0x0), this['_create'](_0x3c6a57, _0xaa4105, _0x2e409c, _0x452327, _0x33bfd9, !0x0);
            }, _0x29a9f5['from'] = function (_0x55ab2f, _0x2c48e3, _0x56bdfe, _0x353111, _0x5ca11b) {
                return void 0x0 === _0x5ca11b && (_0x5ca11b = 0x0), this['_create'](_0x55ab2f, _0x2c48e3, _0x56bdfe, _0x353111, _0x5ca11b, !0x1);
            }, _0x29a9f5['_create'] = function (_0x51cd86, _0x495da5, _0x140301, _0x2b8864, _0x4dd931, _0x11da11) {
                var _0x5f3866 = _0x2249dd['getItemByC' + 'lass']('tweenData', _0x1025e1);
                return _0x5f3866['isTo'] = _0x11da11, _0x5f3866['type'] = 0x0, _0x5f3866['target'] = _0x51cd86, _0x5f3866['duration'] = _0x140301, _0x5f3866['data'] = _0x495da5, _0x5f3866['startTime'] = this['_startTime'] + _0x4dd931, _0x5f3866['endTime'] = _0x5f3866['startTime'] + _0x5f3866['duration'], _0x5f3866['ease'] = _0x2b8864, this['_startTime'] = Math['max'](_0x5f3866['endTime'], this['_startTime']), this['_tweenData' + 'List']['push'](_0x5f3866), this['_startTime' + 'Sort'] = !0x0, this['_endTimeSo' + 'rt'] = !0x0, this;
            }, _0x29a9f5['addLabel'] = function (_0x3512a4, _0xf1321c) {
                var _0xef0cad = _0x2249dd['getItemByC' + 'lass']('tweenData', _0x1025e1);
                return _0xef0cad['type'] = 0x1, _0xef0cad['data'] = _0x3512a4, _0xef0cad['endTime'] = _0xef0cad['startTime'] = this['_startTime'] + _0xf1321c, this['_labelDic'] || (this['_labelDic'] = {}), this['_labelDic'][_0x3512a4] = _0xef0cad, this['_tweenData' + 'List']['push'](_0xef0cad), this;
            }, _0x29a9f5['removeLabe' + 'l'] = function (_0x1bf07c) {
                if (this['_labelDic'] && this['_labelDic'][_0x1bf07c]) {
                    var _0x581f34 = this['_labelDic'][_0x1bf07c];
                    if (_0x581f34) {
                        var _0x398ccc = this['_tweenData' + 'List']['indexOf'](_0x581f34);
                        _0x398ccc > -0x1 && this['_tweenData' + 'List']['splice'](_0x398ccc, 0x1);
                    }
                    delete this['_labelDic'][_0x1bf07c];
                }
            }, _0x29a9f5['gotoTime'] = function (_0x33009a) {
                function _0x559c0f(_0x2d54ff, _0x5373dd) {
                    return _0x2d54ff['endTime'] > _0x5373dd['endTime'] ? 0x1 : _0x2d54ff['endTime'] < _0x5373dd['endTime'] ? -0x1 : 0x0;
                }
                if (null != this['_tweenData' + 'List'] && 0x0 != this['_tweenData' + 'List']['length']) {
                    var _0x197bce, _0x5e4320;
                    for (var _0x19cab5 in this['_firstTwee' + 'nDic'])
                        if (_0x5e4320 = this['_firstTwee' + 'nDic'][_0x19cab5]) {
                            for (var _0x4cae27 in _0x5e4320)
                                _0x5e4320['diyTarget']['hasOwnProp' + 'erty'](_0x4cae27) && (_0x5e4320['diyTarget'][_0x4cae27] = _0x5e4320[_0x4cae27]);
                        }
                    for (_0x19cab5 in this['_tweenDic'])
                        _0x197bce = this['_tweenDic'][_0x19cab5], _0x197bce['clear'](), delete this['_tweenDic'][_0x19cab5];
                    this['_index'] = 0x0, this['_gidIndex'] = 0x0, this['_currTime'] = _0x33009a, this['_lastTime'] = _0x2ad6c5['now']();
                    var _0x449836;
                    null == this['_endTweenD' + 'ataList'] || this['_endTimeSo' + 'rt'] ? (this['_endTimeSo' + 'rt'] = !0x1, this['_endTweenD' + 'ataList'] = _0x449836 = this['_tweenData' + 'List']['concat'](), _0x449836['sort'](_0x559c0f)) : _0x449836 = this['_endTweenD' + 'ataList'];
                    for (var _0x26ed7d, _0x3aed3f = 0x0, _0x555f3c = _0x449836['length']; _0x555f3c > _0x3aed3f; _0x3aed3f++)
                        if (_0x26ed7d = _0x449836[_0x3aed3f], 0x0 == _0x26ed7d['type']) {
                            if (!(_0x33009a >= _0x26ed7d['endTime']))
                                break;
                            this['_index'] = Math['max'](this['_index'], _0x3aed3f + 0x1);
                            var _0x16ffac = _0x26ed7d['data'];
                            if (_0x26ed7d['isTo']) {
                                for (var _0x169462 in _0x16ffac)
                                    _0x26ed7d['target'][_0x169462] = _0x16ffac[_0x169462];
                            }
                        }
                    for (_0x3aed3f = 0x0, _0x555f3c = this['_tweenData' + 'List']['length']; _0x555f3c > _0x3aed3f; _0x3aed3f++)
                        _0x26ed7d = this['_tweenData' + 'List'][_0x3aed3f], 0x0 == _0x26ed7d['type'] && _0x33009a >= _0x26ed7d['startTime'] && _0x33009a < _0x26ed7d['endTime'] && (this['_index'] = Math['max'](this['_index'], _0x3aed3f + 0x1), this['_gidIndex']++, _0x197bce = _0x2249dd['getItemByC' + 'lass']('tween', _0x2e64ca), _0x197bce['_create'](_0x26ed7d['target'], _0x26ed7d['data'], _0x26ed7d['duration'], _0x26ed7d['ease'], _0x16ca2b['create'](this, this['_animCompl' + 'ete'], [this['_gidIndex']]), 0x0, !0x1, _0x26ed7d['isTo'], !0x0, !0x1), _0x197bce['setStartTi' + 'me'](this['_currTime'] - (_0x33009a - _0x26ed7d['startTime'])), _0x197bce['_updateEas' + 'e'](this['_currTime']), _0x197bce['gid'] = this['_gidIndex'], this['_tweenDic'][this['_gidIndex']] = _0x197bce);
                }
            }, _0x29a9f5['gotoLabel'] = function (_0x185322) {
                if (null != this['_labelDic']) {
                    var _0x122034 = this['_labelDic'][_0x185322];
                    _0x122034 && this['gotoTime'](_0x122034['startTime']);
                }
            }, _0x29a9f5['pause'] = function () {
                _0x34a895['timer']['clear'](this, this['_update']);
            }, _0x29a9f5['resume'] = function () {
                this['play'](this['_currTime'], this['_loopKey']);
            }, _0x29a9f5['play'] = function (_0x3cb85c, _0x348b95) {
                function _0x4a7697(_0x565962, _0x2ab718) {
                    return _0x565962['startTime'] > _0x2ab718['startTime'] ? 0x1 : _0x565962['startTime'] < _0x2ab718['startTime'] ? -0x1 : 0x0;
                }
                if (void 0x0 === _0x3cb85c && (_0x3cb85c = 0x0), void 0x0 === _0x348b95 && (_0x348b95 = !0x1), this['_tweenData' + 'List']) {
                    if (this['_startTime' + 'Sort']) {
                        this['_startTime' + 'Sort'] = !0x1, this['_tweenData' + 'List']['sort'](_0x4a7697);
                        for (var _0xefd9b6 = 0x0, _0x3c7127 = this['_tweenData' + 'List']['length']; _0x3c7127 > _0xefd9b6; _0xefd9b6++) {
                            var _0x473839 = this['_tweenData' + 'List'][_0xefd9b6];
                            if (null != _0x473839 && 0x0 == _0x473839['type']) {
                                var _0x57ab05 = _0x473839['target'], _0x49cedd = _0x57ab05['$_GID'] || (_0x57ab05['$_GID'] = _0x3b78ce['getGID']()), _0x16b740 = null;
                                null == this['_firstTwee' + 'nDic'][_0x49cedd] ? (_0x16b740 = {}, _0x16b740['diyTarget'] = _0x57ab05, this['_firstTwee' + 'nDic'][_0x49cedd] = _0x16b740) : _0x16b740 = this['_firstTwee' + 'nDic'][_0x49cedd];
                                for (var _0x10ce44 in _0x473839['data'])
                                    null == _0x16b740[_0x10ce44] && (_0x16b740[_0x10ce44] = _0x57ab05[_0x10ce44]);
                            }
                        }
                    }
                    'string' == typeof _0x3cb85c ? this['gotoLabel'](_0x3cb85c) : this['gotoTime'](_0x3cb85c), this['_loopKey'] = _0x348b95, this['_lastTime'] = _0x2ad6c5['now'](), _0x34a895['timer']['frameLoop'](0x1, this, this['_update']);
                }
            }, _0x29a9f5['_update'] = function () {
                if (this['_currTime'] >= this['_startTime']) {
                    if (!this['_loopKey']) {
                        for (var _0x5a8c91 in this['_tweenDic'])
                            _0x2d8e44 = this['_tweenDic'][_0x5a8c91], _0x2d8e44['complete']();
                        return this['_complete'](), void this['pause']();
                    }
                    if (this['_complete'](), !this['_tweenData' + 'List'])
                        return;
                    this['gotoTime'](0x0);
                }
                var _0x12d6fc = _0x2ad6c5['now'](), _0x12ea39 = _0x12d6fc - this['_lastTime'], _0x1d0a66 = this['_currTime'] += _0x12ea39 * this['scale'];
                this['_lastTime'] = _0x12d6fc;
                for (_0x5a8c91 in this['_tweenDic'])
                    _0x2d8e44 = this['_tweenDic'][_0x5a8c91], _0x2d8e44['_updateEas' + 'e'](_0x1d0a66);
                var _0x2d8e44;
                if (0x0 != this['_tweenData' + 'List']['length'] && this['_index'] < this['_tweenData' + 'List']['length']) {
                    var _0x2380e4 = this['_tweenData' + 'List'][this['_index']];
                    _0x1d0a66 >= _0x2380e4['startTime'] && (this['_index']++, 0x0 == _0x2380e4['type'] ? (this['_gidIndex']++, _0x2d8e44 = _0x2249dd['getItemByC' + 'lass']('tween', _0x2e64ca), _0x2d8e44['_create'](_0x2380e4['target'], _0x2380e4['data'], _0x2380e4['duration'], _0x2380e4['ease'], _0x16ca2b['create'](this, this['_animCompl' + 'ete'], [this['_gidIndex']]), 0x0, !0x1, _0x2380e4['isTo'], !0x0, !0x1), _0x2d8e44['setStartTi' + 'me'](_0x1d0a66), _0x2d8e44['gid'] = this['_gidIndex'], this['_tweenDic'][this['_gidIndex']] = _0x2d8e44, _0x2d8e44['_updateEas' + 'e'](_0x1d0a66)) : this['event']('label', _0x2380e4['data']));
                }
            }, _0x29a9f5['_animCompl' + 'ete'] = function (_0x116324) {
                var _0x3f33a3 = this['_tweenDic'][_0x116324];
                _0x3f33a3 && delete this['_tweenDic'][_0x116324];
            }, _0x29a9f5['_complete'] = function () {
                this['event']('complete');
            }, _0x29a9f5['reset'] = function () {
                var _0x2037c7;
                if (this['_labelDic']) {
                    for (_0x2037c7 in this['_labelDic'])
                        delete this['_labelDic'][_0x2037c7];
                }
                var _0x106a7a;
                for (_0x2037c7 in this['_tweenDic'])
                    _0x106a7a = this['_tweenDic'][_0x2037c7], _0x106a7a['clear'](), delete this['_tweenDic'][_0x2037c7];
                for (_0x2037c7 in this['_firstTwee' + 'nDic'])
                    delete this['_firstTwee' + 'nDic'][_0x2037c7];
                if (this['_endTweenD' + 'ataList'] = null, this['_tweenData' + 'List'] && this['_tweenData' + 'List']['length']) {
                    var _0x33407d = 0x0, _0x1dba48 = 0x0;
                    for (_0x1dba48 = this['_tweenData' + 'List']['length'], _0x33407d = 0x0; _0x1dba48 > _0x33407d; _0x33407d++)
                        this['_tweenData' + 'List'][_0x33407d] && this['_tweenData' + 'List'][_0x33407d]['destroy']();
                }
                this['_tweenData' + 'List']['length'] = 0x0, this['_currTime'] = 0x0, this['_lastTime'] = 0x0, this['_startTime'] = 0x0, this['_index'] = 0x0, this['_gidIndex'] = 0x0, this['scale'] = 0x1, _0x34a895['timer']['clear'](this, this['_update']);
            }, _0x29a9f5['destroy'] = function () {
                this['reset'](), this['_labelDic'] = null, this['_tweenDic'] = null, this['_tweenData' + 'List'] = null, this['_firstTwee' + 'nDic'] = null;
            }, _0x71e09a(0x0, _0x29a9f5, 'index', function () {
                return this['_frameInde' + 'x'];
            }, function (_0x4cc781) {
                this['_frameInde' + 'x'] = _0x4cc781, this['gotoTime'](this['_frameInde' + 'x'] / this['_frameRate'] * 0x3e8);
            }), _0x71e09a(0x0, _0x29a9f5, 'total', function () {
                return this['_total'] = Math['floor'](this['_startTime'] / 0x3e8 * this['_frameRate']), this['_total'];
            }), _0x5ebc9d['to'] = function (_0x5e1054, _0x67a63b, _0x3b581a, _0x3fdd56, _0x5e555a) {
                return void 0x0 === _0x5e555a && (_0x5e555a = 0x0), new _0x5ebc9d()['to'](_0x5e1054, _0x67a63b, _0x3b581a, _0x3fdd56, _0x5e555a);
            }, _0x5ebc9d['from'] = function (_0x1b170b, _0xada864, _0x312041, _0x82162, _0x533964) {
                return void 0x0 === _0x533964 && (_0x533964 = 0x0), new _0x5ebc9d()['from'](_0x1b170b, _0xada864, _0x312041, _0x82162, _0x533964);
            }, _0x5ebc9d['__init$'] = function () {
                _0x1025e1 = function () {
                    function _0x34e1f2() {
                        this['type'] = 0x0, this['isTo'] = !0x0, this['startTime'] = NaN, this['endTime'] = NaN, this['target'] = null, this['duration'] = NaN, this['ease'] = null, this['data'] = null;
                    }
                    _0x4621f4(_0x34e1f2, '');
                    var _0x151e3e = _0x34e1f2['prototype'];
                    return _0x151e3e['destroy'] = function () {
                        this['target'] = null, this['ease'] = null, this['data'] = null, this['isTo'] = !0x0, this['type'] = 0x0, _0x2249dd['recover']('tweenData', this);
                    }, _0x34e1f2;
                }();
            }, _0x5ebc9d;
        }(_0x3f0f68)), _0x32b3f6 = function (_0x4015b1) {
            function _0x3be1c9() {
                this['url'] = null, this['loops'] = 0x0, this['startTime'] = NaN, this['isStopped'] = !0x1, this['completeHa' + 'ndler'] = null, _0x3be1c9['__super']['call'](this);
            }
            _0x4621f4(_0x3be1c9, 'laya.media' + '.SoundChan' + 'nel', _0x4015b1);
            var _0x51135e = _0x3be1c9['prototype'];
            return _0x51135e['play'] = function () {
            }, _0x51135e['stop'] = function () {
            }, _0x51135e['pause'] = function () {
            }, _0x51135e['resume'] = function () {
            }, _0x51135e['__runCompl' + 'ete'] = function (_0x5b2c88) {
                _0x5b2c88 && _0x5b2c88['run']();
            }, _0x71e09a(0x0, _0x51135e, 'volume', function () {
                return 0x1;
            }, function (_0x1397ba) {
            }), _0x71e09a(0x0, _0x51135e, 'position', function () {
                return 0x0;
            }), _0x71e09a(0x0, _0x51135e, 'duration', function () {
                return 0x0;
            }), _0x3be1c9;
        }(_0x3f0f68), _0x49c097 = function (_0x4ece62) {
            function _0x1bba5b(_0x578886, _0x43e9bd, _0x4d376a, _0x5726d4) {
                this['uvrect'] = [
                    0x0,
                    0x0,
                    0x1,
                    0x1
                ], this['_w'] = 0x0, this['_h'] = 0x0, this['_destroyed'] = !0x1, this['_reference' + 'Count'] = 0x0, this['offsetX'] = 0x0, this['offsetY'] = 0x0, this['sourceWidt' + 'h'] = 0x0, this['sourceHeig' + 'ht'] = 0x0, this['scaleRate'] = 0x1, _0x1bba5b['__super']['call'](this), void 0x0 === _0x4d376a && (_0x4d376a = 0x0), void 0x0 === _0x5726d4 && (_0x5726d4 = 0x0), this['setTo'](_0x578886, _0x43e9bd, _0x4d376a, _0x5726d4);
            }
            _0x4621f4(_0x1bba5b, 'laya.resou' + 'rce.Textur' + 'e', _0x4ece62);
            var _0x2761bb = _0x1bba5b['prototype'];
            return _0x2761bb['_addRefere' + 'nce'] = function () {
                this['_bitmap'] && this['_bitmap']['_addRefere' + 'nce'](), this['_reference' + 'Count']++;
            }, _0x2761bb['_removeRef' + 'erence'] = function () {
                this['_bitmap'] && this['_bitmap']['_removeRef' + 'erence'](), this['_reference' + 'Count']--;
            }, _0x2761bb['_getSource'] = function () {
                return this['_destroyed'] || !this['_bitmap'] ? null : (this['recoverBit' + 'map'](), this['_bitmap']['destroyed'] ? null : this['bitmap']['_getSource']());
            }, _0x2761bb['_onLoaded'] = function (_0x587e42, _0x554e6b) {
                if (_0x554e6b) {
                    if (_0x554e6b == this);
                    else {
                        if (_0x554e6b instanceof laya['resource']['Texture']) {
                            var _0x57b450 = _0x554e6b;
                            _0x1bba5b['_create'](_0x554e6b, 0x0, 0x0, _0x57b450['width'], _0x57b450['height'], 0x0, 0x0, _0x57b450['sourceWidt' + 'h'], _0x57b450['sourceHeig' + 'ht'], this);
                        } else
                            this['bitmap'] = _0x554e6b, this['sourceWidt' + 'h'] = this['_w'] = _0x554e6b['width'], this['sourceHeig' + 'ht'] = this['_h'] = _0x554e6b['height'];
                    }
                } else ;
                _0x587e42 && _0x587e42['run'](), this['event']('ready', this);
            }, _0x2761bb['getIsReady'] = function () {
                return this['_destroyed'] ? !0x1 : this['_bitmap'] ? !0x0 : !0x1;
            }, _0x2761bb['setTo'] = function (_0x4e8dd8, _0x3b6a48, _0x2e9695, _0x3f648b) {
                (void 0x0 === _0x2e9695 && (_0x2e9695 = 0x0), void 0x0 === _0x3f648b && (_0x3f648b = 0x0), this['bitmap'] = _0x4e8dd8, this['sourceWidt' + 'h'] = _0x2e9695, this['sourceHeig' + 'ht'] = _0x3f648b, _0x4e8dd8) && (this['_w'] = _0x4e8dd8['width'], this['_h'] = _0x4e8dd8['height'], this['sourceWidt' + 'h'] = this['sourceWidt' + 'h'] || this['_w'], this['sourceHeig' + 'ht'] = this['sourceHeig' + 'ht'] || this['_h']), this['uv'] = _0x3b6a48 || _0x1bba5b['DEF_UV'];
            }, _0x2761bb['load'] = function (_0x2cf7c3, _0x3d2c82) {
                this['_destroyed'] || _0x34a895['loader']['load'](_0x2cf7c3, _0x16ca2b['create'](this, this['_onLoaded'], [_0x3d2c82]), null, 'htmlimage', 0x1, !0x1, null, !0x0);
            }, _0x2761bb['getPixels'] = function (_0x341566, _0x498f0e, _0x59c657, _0x5ad64a) {
                if (_0x4fec79['isWebGL'])
                    return _0x552e50['getTexture' + 'Pixels'](this, _0x341566, _0x498f0e, _0x59c657, _0x5ad64a);
                if (_0x4fec79['isConchApp'])
                    return this['_nativeObj']['getImageDa' + 'ta'](_0x341566, _0x498f0e, _0x59c657, _0x5ad64a);
                var _0x5c2348 = this['width'], _0x448477 = this['height'];
                if (_0x341566 + _0x59c657 > _0x5c2348 && (_0x59c657 -= _0x341566 + _0x59c657 - _0x5c2348), _0x498f0e + _0x5ad64a > _0x448477 && (_0x5ad64a -= _0x498f0e + _0x5ad64a - _0x448477), 0x0 >= _0x59c657 || 0x0 >= _0x5ad64a)
                    return null;
                _0x2ad6c5['canvas']['size'](_0x59c657, _0x5ad64a), _0x2ad6c5['canvas']['clear'](), _0x2ad6c5['context']['drawImage'](this['bitmap']['_source'], _0x341566, _0x498f0e, _0x59c657, _0x5ad64a, 0x0, 0x0, _0x59c657, _0x5ad64a);
                var _0x419018 = _0x2ad6c5['context']['getImageDa' + 'ta'](0x0, 0x0, _0x59c657, _0x5ad64a);
                return _0x419018['data'];
            }, _0x2761bb['recoverBit' + 'map'] = function () {
                var _0x44609c = this['_bitmap']['url'];
                this['_destroyed'] || this['_bitmap'] && !this['_bitmap']['destroyed'] || !_0x44609c || this['load'](_0x44609c);
            }, _0x2761bb['disposeBit' + 'map'] = function () {
                !this['_destroyed'] && this['_bitmap'] && this['_bitmap']['destroy']();
            }, _0x2761bb['destroy'] = function () {
                this['_destroyed'] || (this['_destroyed'] = !0x0, this['bitmap'] && (this['bitmap']['_removeRef' + 'erence'](this['_reference' + 'Count']), this['bitmap'] = null), this['url'] && this === _0x34a895['loader']['getRes'](this['url']) && _0x34a895['loader']['clearRes'](this['url']));
            }, _0x71e09a(0x0, _0x2761bb, 'height', function () {
                return this['_h'] ? this['_h'] : this['bitmap'] ? this['uv'] && this['uv'] !== _0x1bba5b['DEF_UV'] ? (this['uv'][0x5] - this['uv'][0x1]) * this['bitmap']['height'] : this['bitmap']['height'] : 0x0;
            }, function (_0x1f856f) {
                this['_h'] = _0x1f856f, this['sourceHeig' + 'ht'] || (this['sourceHeig' + 'ht'] = _0x1f856f);
            }), _0x71e09a(0x0, _0x2761bb, 'uv', function () {
                return this['_uv'];
            }, function (_0x597d00) {
                this['uvrect'][0x0] = Math['min'](_0x597d00[0x0], _0x597d00[0x2], _0x597d00[0x4], _0x597d00[0x6]), this['uvrect'][0x1] = Math['min'](_0x597d00[0x1], _0x597d00[0x3], _0x597d00[0x5], _0x597d00[0x7]), this['uvrect'][0x2] = Math['max'](_0x597d00[0x0], _0x597d00[0x2], _0x597d00[0x4], _0x597d00[0x6]) - this['uvrect'][0x0], this['uvrect'][0x3] = Math['max'](_0x597d00[0x1], _0x597d00[0x3], _0x597d00[0x5], _0x597d00[0x7]) - this['uvrect'][0x1], this['_uv'] = _0x597d00;
            }), _0x71e09a(0x0, _0x2761bb, 'width', function () {
                return this['_w'] ? this['_w'] : this['bitmap'] ? this['uv'] && this['uv'] !== _0x1bba5b['DEF_UV'] ? (this['uv'][0x2] - this['uv'][0x0]) * this['bitmap']['width'] : this['bitmap']['width'] : 0x0;
            }, function (_0x3303a0) {
                this['_w'] = _0x3303a0, this['sourceWidt' + 'h'] || (this['sourceWidt' + 'h'] = _0x3303a0);
            }), _0x71e09a(0x0, _0x2761bb, 'bitmap', function () {
                return this['_bitmap'];
            }, function (_0x2498a9) {
                this['_bitmap'] && this['_bitmap']['_removeRef' + 'erence'](this['_reference' + 'Count']), this['_bitmap'] = _0x2498a9, _0x2498a9 && _0x2498a9['_addRefere' + 'nce'](this['_reference' + 'Count']);
            }), _0x71e09a(0x0, _0x2761bb, 'destroyed', function () {
                return this['_destroyed'];
            }), _0x1bba5b['moveUV'] = function (_0x5a41f7, _0x19f5ac, _0x1331ac) {
                for (var _0x4d4bc0 = 0x0; 0x8 > _0x4d4bc0; _0x4d4bc0 += 0x2)
                    _0x1331ac[_0x4d4bc0] += _0x5a41f7, _0x1331ac[_0x4d4bc0 + 0x1] += _0x19f5ac;
                return _0x1331ac;
            }, _0x1bba5b['create'] = function (_0x125986, _0x36374a, _0x48ed42, _0x3b48e5, _0x1c69b1, _0x101356, _0x8c5a4, _0x196811, _0x23c99b) {
                return void 0x0 === _0x101356 && (_0x101356 = 0x0), void 0x0 === _0x8c5a4 && (_0x8c5a4 = 0x0), void 0x0 === _0x196811 && (_0x196811 = 0x0), void 0x0 === _0x23c99b && (_0x23c99b = 0x0), _0x1bba5b['_create'](_0x125986, _0x36374a, _0x48ed42, _0x3b48e5, _0x1c69b1, _0x101356, _0x8c5a4, _0x196811, _0x23c99b);
            }, _0x1bba5b['_create'] = function (_0x4b3eb6, _0x2c229f, _0x52e667, _0x591d4b, _0x1c2c6c, _0x1b3b1e, _0x1326ea, _0x1c1581, _0x403ed0, _0x212960) {
                void 0x0 === _0x1b3b1e && (_0x1b3b1e = 0x0), void 0x0 === _0x1326ea && (_0x1326ea = 0x0), void 0x0 === _0x1c1581 && (_0x1c1581 = 0x0), void 0x0 === _0x403ed0 && (_0x403ed0 = 0x0);
                var _0x542e41 = _0x4b3eb6 instanceof laya['resource']['Texture'], _0xec7fb3 = _0x542e41 ? _0x4b3eb6['uv'] : _0x1bba5b['DEF_UV'], _0x19679d = _0x542e41 ? _0x4b3eb6['bitmap'] : _0x4b3eb6;
                _0x19679d['width'] && _0x2c229f + _0x591d4b > _0x19679d['width'] && (_0x591d4b = _0x19679d['width'] - _0x2c229f), _0x19679d['height'] && _0x52e667 + _0x1c2c6c > _0x19679d['height'] && (_0x1c2c6c = _0x19679d['height'] - _0x52e667);
                var _0x5484c6;
                _0x212960 ? (_0x5484c6 = _0x212960, _0x5484c6['setTo'](_0x19679d, null, _0x1c1581 || _0x591d4b, _0x403ed0 || _0x1c2c6c)) : _0x5484c6 = new _0x1bba5b(_0x19679d, null, _0x1c1581 || _0x591d4b, _0x403ed0 || _0x1c2c6c), _0x5484c6['width'] = _0x591d4b, _0x5484c6['height'] = _0x1c2c6c, _0x5484c6['offsetX'] = _0x1b3b1e, _0x5484c6['offsetY'] = _0x1326ea;
                var _0x28ef6b = 0x1 / _0x19679d['width'], _0x3ebef0 = 0x1 / _0x19679d['height'];
                _0x2c229f *= _0x28ef6b, _0x52e667 *= _0x3ebef0, _0x591d4b *= _0x28ef6b, _0x1c2c6c *= _0x3ebef0;
                var _0x36084c = _0x5484c6['uv'][0x0], _0x3e3be1 = _0x5484c6['uv'][0x1], _0x3237c9 = _0x5484c6['uv'][0x4], _0x3d7716 = _0x5484c6['uv'][0x5], _0x44e136 = _0x3237c9 - _0x36084c, _0x4ad504 = _0x3d7716 - _0x3e3be1, _0x22169b = _0x1bba5b['moveUV'](_0xec7fb3[0x0], _0xec7fb3[0x1], [
                        _0x2c229f,
                        _0x52e667,
                        _0x2c229f + _0x591d4b,
                        _0x52e667,
                        _0x2c229f + _0x591d4b,
                        _0x52e667 + _0x1c2c6c,
                        _0x2c229f,
                        _0x52e667 + _0x1c2c6c
                    ]);
                _0x5484c6['uv'] = [
                    _0x36084c + _0x22169b[0x0] * _0x44e136,
                    _0x3e3be1 + _0x22169b[0x1] * _0x4ad504,
                    _0x3237c9 - (0x1 - _0x22169b[0x2]) * _0x44e136,
                    _0x3e3be1 + _0x22169b[0x3] * _0x4ad504,
                    _0x3237c9 - (0x1 - _0x22169b[0x4]) * _0x44e136,
                    _0x3d7716 - (0x1 - _0x22169b[0x5]) * _0x4ad504,
                    _0x36084c + _0x22169b[0x6] * _0x44e136,
                    _0x3d7716 - (0x1 - _0x22169b[0x7]) * _0x4ad504
                ];
                var _0x1b6133 = _0x19679d['scaleRate'];
                return _0x1b6133 && 0x1 != _0x1b6133 ? (_0x5484c6['sourceWidt' + 'h'] /= _0x1b6133, _0x5484c6['sourceHeig' + 'ht'] /= _0x1b6133, _0x5484c6['width'] /= _0x1b6133, _0x5484c6['height'] /= _0x1b6133, _0x5484c6['scaleRate'] = _0x1b6133) : _0x5484c6['scaleRate'] = 0x1, _0x5484c6;
            }, _0x1bba5b['createFrom' + 'Texture'] = function (_0xc34a17, _0x5dd906, _0x197a4f, _0x2ad29c, _0x34e3b7) {
                var _0x179bf6 = _0xc34a17['scaleRate'];
                0x1 != _0x179bf6 && (_0x5dd906 *= _0x179bf6, _0x197a4f *= _0x179bf6, _0x2ad29c *= _0x179bf6, _0x34e3b7 *= _0x179bf6);
                var _0x1e6326 = _0x22858b['TEMP']['setTo'](_0x5dd906 - _0xc34a17['offsetX'], _0x197a4f - _0xc34a17['offsetY'], _0x2ad29c, _0x34e3b7), _0x5a82b9 = _0x1e6326['intersecti' + 'on'](_0x1bba5b['_rect1']['setTo'](0x0, 0x0, _0xc34a17['width'], _0xc34a17['height']), _0x1bba5b['_rect2']);
                if (!_0x5a82b9)
                    return null;
                var _0x325d78 = _0x1bba5b['create'](_0xc34a17, _0x5a82b9['x'], _0x5a82b9['y'], _0x5a82b9['width'], _0x5a82b9['height'], _0x5a82b9['x'] - _0x1e6326['x'], _0x5a82b9['y'] - _0x1e6326['y'], _0x2ad29c, _0x34e3b7);
                return _0x325d78;
            }, _0x1bba5b['DEF_UV'] = [
                0x0,
                0x0,
                0x1,
                0x0,
                0x1,
                0x1,
                0x0,
                0x1
            ], _0x1bba5b['NO_UV'] = [
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
                0x0
            ], _0x1bba5b['INV_UV'] = [
                0x0,
                0x1,
                0x1,
                0x1,
                0x1,
                0x0,
                0x0,
                0x0
            ], _0x1bba5b['_rect1'] = new _0x22858b(), _0x1bba5b['_rect2'] = new _0x22858b(), _0x1bba5b;
        }(_0x3f0f68), _0x1352f6 = function (_0x47f20f) {
            function _0x2dbee1() {
                this['totalCount'] = 0x0, this['_completeH' + 'andler'] = null, this['_toLoadLis' + 't'] = null, this['_isLoading'] = !0x1, this['_curUrl'] = null, _0x2dbee1['__super']['call'](this), this['_completeH' + 'andler'] = new _0x16ca2b(this, this['onOneLoadC' + 'omplete']), this['reset']();
            }
            _0x4621f4(_0x2dbee1, 'laya.net.S' + 'ceneLoader', _0x47f20f);
            var _0x3200c4 = _0x2dbee1['prototype'];
            return _0x3200c4['reset'] = function () {
                this['_toLoadLis' + 't'] = [], this['_isLoading'] = !0x1, this['totalCount'] = 0x0;
            }, _0x3200c4['load'] = function (_0x4d159d, _0xda177a, _0x1df30d) {
                if (void 0x0 === _0xda177a && (_0xda177a = !0x1), void 0x0 === _0x1df30d && (_0x1df30d = !0x0), _0x4d159d instanceof Array) {
                    var _0x5ea9c3 = 0x0, _0x3bb6aa = 0x0;
                    for (_0x3bb6aa = _0x4d159d['length'], _0x5ea9c3 = 0x0; _0x3bb6aa > _0x5ea9c3; _0x5ea9c3++)
                        this['_addToLoad' + 'List'](_0x4d159d[_0x5ea9c3], _0xda177a);
                } else
                    this['_addToLoad' + 'List'](_0x4d159d, _0xda177a);
                _0x1df30d && this['_checkNext']();
            }, _0x3200c4['_addToLoad' + 'List'] = function (_0x4b4251, _0x1c0bc3) {
                void 0x0 === _0x1c0bc3 && (_0x1c0bc3 = !0x1), this['_toLoadLis' + 't']['indexOf'](_0x4b4251) >= 0x0 || _0x3943d1['getRes'](_0x4b4251) || (_0x1c0bc3 ? this['_toLoadLis' + 't']['push']({ 'url': _0x4b4251 }) : this['_toLoadLis' + 't']['push'](_0x4b4251), this['totalCount']++);
            }, _0x3200c4['_checkNext'] = function () {
                if (!this['_isLoading']) {
                    if (0x0 == this['_toLoadLis' + 't']['length'])
                        return void this['event']('complete');
                    var _0x2937a4;
                    _0x2937a4 = this['_toLoadLis' + 't']['pop'](), 'string' == typeof _0x2937a4 ? this['loadOne'](_0x2937a4) : this['loadOne'](_0x2937a4['url'], !0x0);
                }
            }, _0x3200c4['loadOne'] = function (_0x5bec6c, _0x28df6b) {
                void 0x0 === _0x28df6b && (_0x28df6b = !0x1), this['_curUrl'] = _0x5bec6c;
                var _0x5003d6 = _0x3b78ce['getFileExt' + 'ension'](this['_curUrl']);
                _0x28df6b ? _0x34a895['loader']['create'](_0x5bec6c, this['_completeH' + 'andler']) : _0x2dbee1['LoadableEx' + 'tensions'][_0x5003d6] ? _0x34a895['loader']['load'](_0x5bec6c, this['_completeH' + 'andler'], null, _0x2dbee1['LoadableEx' + 'tensions'][_0x5003d6]) : _0x5bec6c != _0x59c1f7['getFileLoa' + 'dPath'](_0x5bec6c) || _0x2dbee1['No3dLoadTy' + 'pes'][_0x5003d6] || !_0x571bfb['createMap'][_0x5003d6] ? _0x34a895['loader']['load'](_0x5bec6c, this['_completeH' + 'andler']) : _0x34a895['loader']['create'](_0x5bec6c, this['_completeH' + 'andler']);
            }, _0x3200c4['onOneLoadC' + 'omplete'] = function () {
                this['_isLoading'] = !0x1, _0x3943d1['getRes'](this['_curUrl']) || console['log']('Fail\x20to\x20lo' + 'ad:', this['_curUrl']);
                var _0x32524b = _0x3b78ce['getFileExt' + 'ension'](this['_curUrl']);
                if (_0x2dbee1['LoadableEx' + 'tensions'][_0x32524b]) {
                    var _0x5928bc;
                    _0x5928bc = _0x3943d1['getRes'](this['_curUrl']), _0x5928bc && _0x5928bc instanceof laya['components']['Prefab'] && (_0x5928bc = _0x5928bc['json']), _0x5928bc && (_0x5928bc['loadList'] && this['load'](_0x5928bc['loadList'], !0x1, !0x1), _0x5928bc['loadList3D'] && this['load'](_0x5928bc['loadList3D'], !0x0, !0x1));
                }
                'sk' == _0x32524b && this['load'](this['_curUrl']['replace']('.sk', '.png'), !0x1, !0x1), this['event']('progress', this['getProgres' + 's']()), this['_checkNext']();
            }, _0x3200c4['getProgres' + 's'] = function () {
                return this['loadedCoun' + 't'] / this['totalCount'];
            }, _0x71e09a(0x0, _0x3200c4, 'loadedCoun' + 't', function () {
                return this['totalCount'] - this['leftCount'];
            }), _0x71e09a(0x0, _0x3200c4, 'leftCount', function () {
                return this['_isLoading'] ? this['_toLoadLis' + 't']['length'] + 0x1 : this['_toLoadLis' + 't']['length'];
            }), _0x5043ef(_0x2dbee1, [
                'LoadableEx' + 'tensions',
                function () {
                    return this['LoadableEx' + 'tensions'] = {
                        'scene': 'json',
                        'scene3d': 'json',
                        'ani': 'json',
                        'ui': 'json',
                        'prefab': 'prefab'
                    };
                },
                'No3dLoadTy' + 'pes',
                function () {
                    return this['No3dLoadTy' + 'pes'] = {
                        'png': !0x0,
                        'jpg': !0x0,
                        'txt': !0x0
                    };
                }
            ]), _0x2dbee1;
        }(_0x3f0f68), _0x3943d1 = function (_0x1dcff4) {
            function _0x25f90a() {
                this['_data'] = null, this['_url'] = null, this['_type'] = null, this['_cache'] = !0x1, this['_http'] = null, this['_useWorker' + 'Loader'] = !0x1, this['_customPar' + 'se'] = !0x1, this['_construct' + 'Params'] = null, this['_propertyP' + 'arams'] = null, this['_createCac' + 'he'] = !0x1, _0x25f90a['__super']['call'](this);
            }
            _0x4621f4(_0x25f90a, 'laya.net.L' + 'oader', _0x1dcff4);
            var _0x504267 = _0x25f90a['prototype'];
            return _0x504267['load'] = function (_0x24ab4e, _0x1de876, _0x5a15b9, _0x20929c, _0x5a6dc0, _0x4ffde6) {
                if (void 0x0 === _0x5a15b9 && (_0x5a15b9 = !0x0), void 0x0 === _0x5a6dc0 && (_0x5a6dc0 = !0x1), void 0x0 === _0x4ffde6 && (_0x4ffde6 = !0x1), !_0x24ab4e)
                    return void this['onLoaded'](null);
                if (_0x25f90a['setGroup'](_0x24ab4e, '666'), this['_url'] = _0x24ab4e, 0x0 === _0x24ab4e['indexOf']('data:image') ? _0x1de876 = 'image' : _0x24ab4e = _0x4bf8e9['formatURL'](_0x24ab4e), this['_type'] = _0x1de876 || (_0x1de876 = _0x25f90a['getTypeFro' + 'mUrl'](this['_url'])), this['_cache'] = _0x5a15b9, this['_useWorker' + 'Loader'] = _0x4ffde6, this['_data'] = null, _0x4ffde6 && _0x2a8739['enableWork' + 'erLoader'](), !_0x5a6dc0 && _0x25f90a['loadedMap'][_0x24ab4e])
                    return this['_data'] = _0x25f90a['loadedMap'][_0x24ab4e], this['event']('progress', 0x1), void this['event']('complete', this['_data']);
                if (_0x20929c && _0x25f90a['setGroup'](_0x24ab4e, _0x20929c), null != _0x25f90a['parserMap'][_0x1de876])
                    return this['_customPar' + 'se'] = !0x0, void (_0x25f90a['parserMap'][_0x1de876] instanceof laya['utils']['Handler'] ? _0x25f90a['parserMap'][_0x1de876]['runWith'](this) : _0x25f90a['parserMap'][_0x1de876]['call'](null, this));
                if ('image' === _0x1de876 || 'htmlimage' === _0x1de876 || 'nativeimag' + 'e' === _0x1de876)
                    return this['_loadImage'](_0x24ab4e);
                if ('sound' === _0x1de876)
                    return this['_loadSound'](_0x24ab4e);
                if ('ttf' === _0x1de876)
                    return this['_loadTTF'](_0x24ab4e);
                var _0x28a7e3;
                switch (_0x1de876) {
                case 'atlas':
                case 'prefab':
                case 'plf':
                    _0x28a7e3 = 'json';
                    break;
                case 'font':
                    _0x28a7e3 = 'xml';
                    break;
                default:
                    _0x28a7e3 = _0x1de876;
                }
                _0x25f90a['preLoadedM' + 'ap'][_0x24ab4e] ? this['onLoaded'](_0x25f90a['preLoadedM' + 'ap'][_0x24ab4e]) : (this['_http'] || (this['_http'] = new _0x13dba9(), this['_http']['on']('progress', this, this['onProgress']), this['_http']['on']('error', this, this['onError']), this['_http']['on']('complete', this, this['onLoaded'])), this['_http']['send'](_0x24ab4e, null, 'get', _0x28a7e3));
            }, _0x504267['_loadTTF'] = function (_0x550b45) {
                _0x550b45 = _0x4bf8e9['formatURL'](_0x550b45);
                var _0x2fc716 = new _0x1e263f();
                _0x2fc716['complete'] = _0x16ca2b['create'](this, this['onLoaded']), _0x2fc716['load'](_0x550b45);
            }, _0x504267['_loadImage'] = function (_0x140993) {
                function _0x2c376f() {
                    var _0x488fd3 = _0x9c5d9a;
                    _0x488fd3 && (_0x488fd3['onload'] = null, _0x488fd3['onerror'] = null, delete _0x25f90a['_imgCache'][_0x140993]);
                }
                _0x140993 = _0x4bf8e9['formatURL'](_0x140993);
                var _0x9c5d9a, _0x545e99 = this, _0x1085ae = function () {
                        _0x2c376f(), _0x545e99['event']('error', 'Load\x20image' + '\x20failed');
                    };
                if ('nativeimag' + 'e' === this['_type']) {
                    var _0x493217 = function () {
                        _0x2c376f(), _0x545e99['onLoaded'](_0x9c5d9a);
                    };
                    _0x9c5d9a = new _0x2ad6c5['window']['Image'](), _0x9c5d9a['crossOrigi' + 'n'] = '', _0x9c5d9a['onload'] = _0x493217, _0x9c5d9a['onerror'] = _0x1085ae, _0x9c5d9a['src'] = _0x140993, _0x25f90a['_imgCache'][_0x140993] = _0x9c5d9a;
                } else {
                    var _0x41a866 = new _0x2ad6c5['window']['Image']();
                    _0x493217 = function () {
                        _0x9c5d9a = _0x55568a['create'](_0x41a866['width'], _0x41a866['height']), _0x9c5d9a['loadImageS' + 'ource'](_0x41a866, !0x0), _0x9c5d9a['_setCreate' + 'URL'](_0x140993), _0x2c376f(), _0x545e99['onLoaded'](_0x9c5d9a);
                    }, _0x41a866['crossOrigi' + 'n'] = '', _0x41a866['onload'] = _0x493217, _0x41a866['onerror'] = _0x1085ae, _0x41a866['src'] = _0x140993, _0x9c5d9a = _0x41a866, _0x25f90a['_imgCache'][_0x140993] = _0x41a866;
                }
            }, _0x504267['_loadSound'] = function (_0x30e262) {
                function _0x5b30f5() {
                    _0xa43391(), _0x41eb0b['onLoaded'](_0xb9e193);
                }
                function _0x1c672d() {
                    _0xa43391(), _0xb9e193['dispose'](), _0x41eb0b['event']('error', 'Load\x20sound' + '\x20failed');
                }
                function _0xa43391() {
                    _0xb9e193['offAll']();
                }
                var _0xb9e193 = new _0x273f4b['_soundClas' + 's'](), _0x41eb0b = this;
                _0xb9e193['on']('complete', this, _0x5b30f5), _0xb9e193['on']('error', this, _0x1c672d), _0xb9e193['load'](_0x30e262);
            }, _0x504267['onProgress'] = function (_0x546857) {
                'atlas' === this['_type'] ? this['event']('progress', 0.3 * _0x546857) : this['event']('progress', _0x546857);
            }, _0x504267['onError'] = function (_0x406e1b) {
                this['event']('error', _0x406e1b);
            }, _0x504267['onLoaded'] = function (_0x24ae21) {
                var _0x232889 = this['_type'];
                if ('plf' == _0x232889)
                    this['parsePLFDa' + 'ta'](_0x24ae21), this['complete'](_0x24ae21);
                else {
                    if ('image' === _0x232889) {
                        var _0x1d2877 = new _0x49c097(_0x24ae21);
                        _0x1d2877['url'] = this['_url'], this['complete'](_0x1d2877);
                    } else {
                        if ('sound' === _0x232889 || 'htmlimage' === _0x232889 || 'nativeimag' + 'e' === _0x232889)
                            this['complete'](_0x24ae21);
                        else {
                            if ('atlas' === _0x232889) {
                                if (!_0x24ae21['url'] && !_0x24ae21['_setContex' + 't']) {
                                    if (!this['_data']) {
                                        if (this['_data'] = _0x24ae21, _0x24ae21['meta'] && _0x24ae21['meta']['image']) {
                                            for (var _0x208577 = _0x24ae21['meta']['image']['split'](','), _0x13db27 = this['_url']['indexOf']('/') >= 0x0 ? '/' : '\x5c', _0x28f7f7 = this['_url']['lastIndexO' + 'f'](_0x13db27), _0xefc888 = _0x28f7f7 >= 0x0 ? this['_url']['substr'](0x0, _0x28f7f7 + 0x1) : '', _0x1536d3 = 0x0, _0x4bf720 = _0x208577['length']; _0x4bf720 > _0x1536d3; _0x1536d3++)
                                                _0x208577[_0x1536d3] = _0xefc888 + _0x208577[_0x1536d3];
                                        } else
                                            _0x208577 = [this['_url']['replace']('.json', '.png')];
                                        _0x208577['reverse'](), _0x24ae21['toLoads'] = _0x208577, _0x24ae21['pics'] = [];
                                    }
                                    return this['event']('progress', 0.3 + 0x1 / _0x208577['length'] * 0.6), this['_loadImage'](_0x208577['pop']());
                                }
                                if (this['_data']['pics']['push'](_0x24ae21), this['_data']['toLoads']['length'] > 0x0)
                                    return this['event']('progress', 0.3 + 0x1 / this['_data']['toLoads']['length'] * 0.6), this['_loadImage'](this['_data']['toLoads']['pop']());
                                var _0x5b9180 = this['_data']['frames'], _0x190fa5 = this['_url']['split']('?')[0x0], _0xc7a33a = this['_data']['meta'] && this['_data']['meta']['prefix'] ? this['_data']['meta']['prefix'] : _0x190fa5['substring'](0x0, _0x190fa5['lastIndexO' + 'f']('.')) + '/', _0x2f67bc = this['_data']['pics'], _0x3cd739 = _0x4bf8e9['formatURL'](this['_url']), _0x23f734 = _0x25f90a['atlasMap'][_0x3cd739] || (_0x25f90a['atlasMap'][_0x3cd739] = []);
                                _0x23f734['dir'] = _0xc7a33a;
                                var _0x45a3c9 = 0x1;
                                if (this['_data']['meta'] && this['_data']['meta']['scale'] && 0x1 != this['_data']['meta']['scale']) {
                                    _0x45a3c9 = parseFloat(this['_data']['meta']['scale']);
                                    for (var _0x1f752c in _0x5b9180) {
                                        var _0x3774bf = _0x5b9180[_0x1f752c], _0x14c79c = _0x2f67bc[_0x3774bf['frame']['idx'] ? _0x3774bf['frame']['idx'] : 0x0], _0x145f60 = _0x4bf8e9['formatURL'](_0xc7a33a + _0x1f752c);
                                        _0x14c79c['scaleRate'] = _0x45a3c9;
                                        var _0x8c8e62;
                                        _0x8c8e62 = _0x49c097['_create'](_0x14c79c, _0x3774bf['frame']['x'], _0x3774bf['frame']['y'], _0x3774bf['frame']['w'], _0x3774bf['frame']['h'], _0x3774bf['spriteSour' + 'ceSize']['x'], _0x3774bf['spriteSour' + 'ceSize']['y'], _0x3774bf['sourceSize']['w'], _0x3774bf['sourceSize']['h'], laya['net']['Loader']['getRes'](_0x145f60)), _0x25f90a['cacheRes'](_0x145f60, _0x8c8e62), _0x8c8e62['url'] = _0x145f60, _0x23f734['push'](_0x145f60);
                                    }
                                } else {
                                    for (_0x1f752c in _0x5b9180)
                                        _0x3774bf = _0x5b9180[_0x1f752c], _0x14c79c = _0x2f67bc[_0x3774bf['frame']['idx'] ? _0x3774bf['frame']['idx'] : 0x0], _0x145f60 = _0x4bf8e9['formatURL'](_0xc7a33a + _0x1f752c), _0x8c8e62 = _0x49c097['_create'](_0x14c79c, _0x3774bf['frame']['x'], _0x3774bf['frame']['y'], _0x3774bf['frame']['w'], _0x3774bf['frame']['h'], _0x3774bf['spriteSour' + 'ceSize']['x'], _0x3774bf['spriteSour' + 'ceSize']['y'], _0x3774bf['sourceSize']['w'], _0x3774bf['sourceSize']['h'], laya['net']['Loader']['getRes'](_0x145f60)), _0x25f90a['cacheRes'](_0x145f60, _0x8c8e62), _0x8c8e62['url'] = _0x145f60, _0x23f734['push'](_0x145f60);
                                }
                                delete this['_data']['pics'], this['complete'](this['_data']);
                            } else {
                                if ('font' === _0x232889) {
                                    if (!_0x24ae21['_source'])
                                        return this['_data'] = _0x24ae21, this['event']('progress', 0.5), this['_loadImage'](this['_url']['replace']('.fnt', '.png'));
                                    var _0x408ef0 = new _0x42d053();
                                    _0x408ef0['parseFont'](this['_data'], new _0x49c097(_0x24ae21));
                                    var _0x522eed = this['_url']['split']('.fnt')[0x0]['split']('/'), _0x2bb75c = _0x522eed[_0x522eed['length'] - 0x1];
                                    _0x12a05f['registerBi' + 'tmapFont'](_0x2bb75c, _0x408ef0), this['_data'] = _0x408ef0, this['complete'](this['_data']);
                                } else {
                                    if ('prefab' === _0x232889) {
                                        var _0x3acccc = new _0x4c6abc();
                                        _0x3acccc['json'] = _0x24ae21, this['complete'](_0x3acccc);
                                    } else
                                        this['complete'](_0x24ae21);
                                }
                            }
                        }
                    }
                }
            }, _0x504267['parsePLFDa' + 'ta'] = function (_0x1f1e9f) {
                var _0x1c41d9, _0x4ac01c, _0x5af6fa;
                for (_0x1c41d9 in _0x1f1e9f)
                    switch (_0x5af6fa = _0x1f1e9f[_0x1c41d9], _0x1c41d9) {
                    case 'json':
                    case 'text':
                        for (_0x4ac01c in _0x5af6fa)
                            _0x25f90a['preLoadedM' + 'ap'][_0x4bf8e9['formatURL'](_0x4ac01c)] = _0x5af6fa[_0x4ac01c];
                        break;
                    default:
                        for (_0x4ac01c in _0x5af6fa)
                            _0x25f90a['preLoadedM' + 'ap'][_0x4bf8e9['formatURL'](_0x4ac01c)] = _0x5af6fa[_0x4ac01c];
                    }
            }, _0x504267['complete'] = function (_0x507536) {
                this['_data'] = _0x507536, this['_customPar' + 'se'] ? this['event']('loaded', _0x507536 instanceof Array ? [_0x507536] : _0x507536) : (_0x25f90a['_loaders']['push'](this), _0x25f90a['_isWorking'] || _0x25f90a['checkNext']());
            }, _0x504267['endLoad'] = function (_0x144b77) {
                _0x144b77 && (this['_data'] = _0x144b77), this['_cache'] && _0x25f90a['cacheRes'](this['_url'], this['_data']), this['event']('progress', 0x1), this['event']('complete', this['data'] instanceof Array ? [this['data']] : this['data']);
            }, _0x71e09a(0x0, _0x504267, 'url', function () {
                return this['_url'];
            }), _0x71e09a(0x0, _0x504267, 'data', function () {
                return this['_data'];
            }), _0x71e09a(0x0, _0x504267, 'cache', function () {
                return this['_cache'];
            }), _0x71e09a(0x0, _0x504267, 'type', function () {
                return this['_type'];
            }), _0x25f90a['getTypeFro' + 'mUrl'] = function (_0x4f97ab) {
                var _0x251224 = _0x3b78ce['getFileExt' + 'ension'](_0x4f97ab);
                return _0x251224 ? _0x25f90a['typeMap'][_0x251224] : (console['warn']('Not\x20recogn' + 'ize\x20the\x20re' + 'sources\x20su' + 'ffix', _0x4f97ab), 'text');
            }, _0x25f90a['checkNext'] = function () {
                _0x25f90a['_isWorking'] = !0x0;
                for (var _0x172ecf = _0x2ad6c5['now'](), _0x179b8d = _0x172ecf; _0x25f90a['_startInde' + 'x'] < _0x25f90a['_loaders']['length'];)
                    if (_0x179b8d = _0x2ad6c5['now'](), _0x25f90a['_loaders'][_0x25f90a['_startInde' + 'x']]['endLoad'](), _0x25f90a['_startInde' + 'x']++, _0x2ad6c5['now']() - _0x172ecf > _0x25f90a['maxTimeOut'])
                        return console['warn']('loader\x20cal' + 'lback\x20cost' + '\x20a\x20long\x20ti' + 'me:' + (_0x2ad6c5['now']() - _0x172ecf) + '\x20url=' + _0x25f90a['_loaders'][_0x25f90a['_startInde' + 'x'] - 0x1]['url']), void _0x34a895['systemTime' + 'r']['frameOnce'](0x1, null, _0x25f90a['checkNext']);
                _0x25f90a['_loaders']['length'] = 0x0, _0x25f90a['_startInde' + 'x'] = 0x0, _0x25f90a['_isWorking'] = !0x1;
            }, _0x25f90a['clearRes'] = function (_0x30c433) {
                _0x30c433 = _0x4bf8e9['formatURL'](_0x30c433);
                var _0x569e9a = _0x25f90a['getAtlas'](_0x30c433);
                if (_0x569e9a) {
                    for (var _0x40cc7a = 0x0, _0x27f4b9 = _0x569e9a['length']; _0x27f4b9 > _0x40cc7a; _0x40cc7a++) {
                        var _0x654d4f = _0x569e9a[_0x40cc7a], _0x4f56b8 = _0x25f90a['getRes'](_0x654d4f);
                        delete _0x25f90a['loadedMap'][_0x654d4f], _0x4f56b8 && _0x4f56b8['destroy']();
                    }
                    _0x569e9a['length'] = 0x0, delete _0x25f90a['atlasMap'][_0x30c433], delete _0x25f90a['loadedMap'][_0x30c433];
                } else {
                    var _0x166ebd = _0x25f90a['loadedMap'][_0x30c433];
                    _0x166ebd && (delete _0x25f90a['loadedMap'][_0x30c433], _0x166ebd instanceof laya['resource']['Texture'] && _0x166ebd['bitmap'] && _0x166ebd['destroy']());
                }
            }, _0x25f90a['clearTextu' + 'reRes'] = function (_0x59f7bc) {
                _0x59f7bc = _0x4bf8e9['formatURL'](_0x59f7bc);
                var _0x55c2f1 = laya['net']['Loader']['getAtlas'](_0x59f7bc), _0x369622 = _0x55c2f1 && _0x55c2f1['length'] > 0x0 ? laya['net']['Loader']['getRes'](_0x55c2f1[0x0]) : laya['net']['Loader']['getRes'](_0x59f7bc);
                _0x369622 instanceof laya['resource']['Texture'] && _0x369622['disposeBit' + 'map']();
            }, _0x25f90a['getRes'] = function (_0xc8e0d2) {
                return _0x25f90a['loadedMap'][_0x4bf8e9['formatURL'](_0xc8e0d2)];
            }, _0x25f90a['getAtlas'] = function (_0x496098) {
                return _0x25f90a['atlasMap'][_0x4bf8e9['formatURL'](_0x496098)];
            }, _0x25f90a['cacheRes'] = function (_0x4e434e, _0x176b73) {
                _0x4e434e = _0x4bf8e9['formatURL'](_0x4e434e), null != _0x25f90a['loadedMap'][_0x4e434e] ? console['warn']('Resources\x20' + 'already\x20ex' + 'ist,is\x20rep' + 'eated\x20load' + 'ing:', _0x4e434e) : _0x25f90a['loadedMap'][_0x4e434e] = _0x176b73;
            }, _0x25f90a['setGroup'] = function (_0x2dfe74, _0x563658) {
                _0x25f90a['groupMap'][_0x563658] || (_0x25f90a['groupMap'][_0x563658] = []), _0x25f90a['groupMap'][_0x563658]['push'](_0x2dfe74);
            }, _0x25f90a['clearResBy' + 'Group'] = function (_0x1fc98b) {
                if (_0x25f90a['groupMap'][_0x1fc98b]) {
                    var _0x2de6de = _0x25f90a['groupMap'][_0x1fc98b], _0x431e15 = 0x0, _0x3298ba = _0x2de6de['length'];
                    for (_0x431e15 = 0x0; _0x3298ba > _0x431e15; _0x431e15++)
                        _0x25f90a['clearRes'](_0x2de6de[_0x431e15]);
                    _0x2de6de['length'] = 0x0;
                }
            }, _0x25f90a['TEXT'] = 'text', _0x25f90a['JSON'] = 'json', _0x25f90a['PREFAB'] = 'prefab', _0x25f90a['XML'] = 'xml', _0x25f90a['BUFFER'] = 'arraybuffe' + 'r', _0x25f90a['IMAGE'] = 'image', _0x25f90a['SOUND'] = 'sound', _0x25f90a['ATLAS'] = 'atlas', _0x25f90a['FONT'] = 'font', _0x25f90a['TTF'] = 'ttf', _0x25f90a['PLF'] = 'plf', _0x25f90a['HIERARCHY'] = 'HIERARCHY', _0x25f90a['MESH'] = 'MESH', _0x25f90a['MATERIAL'] = 'MATERIAL', _0x25f90a['TEXTURE2D'] = 'TEXTURE2D', _0x25f90a['TEXTURECUB' + 'E'] = 'TEXTURECUB' + 'E', _0x25f90a['ANIMATIONC' + 'LIP'] = 'ANIMATIONC' + 'LIP', _0x25f90a['AVATAR'] = 'AVATAR', _0x25f90a['TERRAINHEI' + 'GHTDATA'] = 'TERRAINHEI' + 'GHTDATA', _0x25f90a['TERRAINRES'] = 'TERRAIN', _0x25f90a['typeMap'] = {
                'ttf': 'ttf',
                'png': 'image',
                'jpg': 'image',
                'jpeg': 'image',
                'txt': 'text',
                'json': 'json',
                'prefab': 'prefab',
                'xml': 'xml',
                'als': 'atlas',
                'atlas': 'atlas',
                'mp3': 'sound',
                'ogg': 'sound',
                'wav': 'sound',
                'part': 'json',
                'fnt': 'font',
                'pkm': 'pkm',
                'plf': 'plf',
                'scene': 'json',
                'ani': 'json',
                'sk': 'arraybuffe' + 'r'
            }, _0x25f90a['parserMap'] = {}, _0x25f90a['maxTimeOut'] = 0x64, _0x25f90a['groupMap'] = {}, _0x25f90a['loadedMap'] = {}, _0x25f90a['atlasMap'] = {}, _0x25f90a['preLoadedM' + 'ap'] = {}, _0x25f90a['_imgCache'] = {}, _0x25f90a['_loaders'] = [], _0x25f90a['_isWorking'] = !0x1, _0x25f90a['_startInde' + 'x'] = 0x0, _0x25f90a;
        }(_0x3f0f68), _0x1807a3 = (function (_0x1f31f4) {
            function _0x497188(_0x57a707, _0x39b59f, _0x520da7, _0x19c7f6) {
                this['_endian'] = null, this['_socket'] = null, this['_connected'] = !0x1, this['_addInputP' + 'osition'] = 0x0, this['_input'] = null, this['_output'] = null, this['disableInp' + 'ut'] = !0x1, this['_byteClass'] = null, this['protocols'] = [], _0x497188['__super']['call'](this), void 0x0 === _0x39b59f && (_0x39b59f = 0x0), this['_byteClass'] = _0x520da7 ? _0x520da7 : _0x2e66fe, this['protocols'] = _0x19c7f6, this['endian'] = 'bigEndian', _0x57a707 && _0x39b59f > 0x0 && 0xffff > _0x39b59f && this['connect'](_0x57a707, _0x39b59f);
            }
            _0x4621f4(_0x497188, 'laya.net.S' + 'ocket', _0x1f31f4);
            var _0x26accb = _0x497188['prototype'];
            return _0x26accb['connect'] = function (_0xb997a4, _0x2033ce) {
                var _0x1a78fe = 'ws://' + _0xb997a4 + ':' + _0x2033ce;
                this['connectByU' + 'rl'](_0x1a78fe);
            }, _0x26accb['connectByU' + 'rl'] = function (_0x3d6267) {
                var _0x47e1fd = this;
                null != this['_socket'] && this['close'](), this['_socket'] && this['cleanSocke' + 't'](), this['protocols'] && 0x0 != this['protocols']['length'] ? this['_socket'] = new _0x2ad6c5['window']['WebSocket'](_0x3d6267, this['protocols']) : this['_socket'] = new _0x2ad6c5['window']['WebSocket'](_0x3d6267), this['_socket']['binaryType'] = 'arraybuffe' + 'r', this['_output'] = new this['_byteClass'](), this['_output']['endian'] = this['endian'], this['_input'] = new this['_byteClass'](), this['_input']['endian'] = this['endian'], this['_addInputP' + 'osition'] = 0x0, this['_socket']['onopen'] = function (_0x44007e) {
                    _0x47e1fd['_onOpen'](_0x44007e);
                }, this['_socket']['onmessage'] = function (_0x636a16) {
                    _0x47e1fd['_onMessage'](_0x636a16);
                }, this['_socket']['onclose'] = function (_0x16f4c6) {
                    _0x47e1fd['_onClose'](_0x16f4c6);
                }, this['_socket']['onerror'] = function (_0x230f33) {
                    _0x47e1fd['_onError'](_0x230f33);
                };
            }, _0x26accb['cleanSocke' + 't'] = function () {
                this['close'](), this['_connected'] = !0x1, this['_socket']['onopen'] = null, this['_socket']['onmessage'] = null, this['_socket']['onclose'] = null, this['_socket']['onerror'] = null, this['_socket'] = null;
            }, _0x26accb['close'] = function () {
                if (null != this['_socket'])
                    try {
                        this['_socket']['close']();
                    } catch (_0x119d9e) {
                    }
            }, _0x26accb['_onOpen'] = function (_0x18df49) {
                this['_connected'] = !0x0, this['event']('open', _0x18df49);
            }, _0x26accb['_onMessage'] = function (_0x5a4eda) {
                if (_0x5a4eda && _0x5a4eda['data']) {
                    var _0x7eb64b = _0x5a4eda['data'];
                    if (this['disableInp' + 'ut'] && _0x7eb64b)
                        return void this['event']('message', _0x7eb64b);
                    this['_input']['length'] > 0x0 && this['_input']['bytesAvail' + 'able'] < 0x1 && (this['_input']['clear'](), this['_addInputP' + 'osition'] = 0x0);
                    var _0x75b75 = this['_input']['pos'];
                    !this['_addInputP' + 'osition'] && (this['_addInputP' + 'osition'] = 0x0), this['_input']['pos'] = this['_addInputP' + 'osition'], _0x7eb64b && ('string' == typeof _0x7eb64b ? this['_input']['writeUTFBy' + 'tes'](_0x7eb64b) : this['_input']['writeArray' + 'Buffer'](_0x7eb64b), this['_addInputP' + 'osition'] = this['_input']['pos'], this['_input']['pos'] = _0x75b75), this['event']('message', _0x7eb64b);
                }
            }, _0x26accb['_onClose'] = function (_0x27bed9) {
                this['_connected'] = !0x1, this['event']('close', _0x27bed9);
            }, _0x26accb['_onError'] = function (_0x4fe8ec) {
                this['event']('error', _0x4fe8ec);
            }, _0x26accb['send'] = function (_0x5eb1d7) {
                this['_socket']['send'](_0x5eb1d7);
            }, _0x26accb['flush'] = function () {
                if (this['_output'] && this['_output']['length'] > 0x0) {
                    var _0x4f027a;
                    try {
                        this['_socket'] && this['_socket']['send'](this['_output']['__getBuffe' + 'r']()['slice'](0x0, this['_output']['length']));
                    } catch (_0x5d71a8) {
                        _0x4f027a = _0x5d71a8;
                    }
                    this['_output']['endian'] = this['endian'], this['_output']['clear'](), _0x4f027a && this['event']('error', _0x4f027a);
                }
            }, _0x71e09a(0x0, _0x26accb, 'input', function () {
                return this['_input'];
            }), _0x71e09a(0x0, _0x26accb, 'output', function () {
                return this['_output'];
            }), _0x71e09a(0x0, _0x26accb, 'connected', function () {
                return this['_connected'];
            }), _0x71e09a(0x0, _0x26accb, 'endian', function () {
                return this['_endian'];
            }, function (_0x1291f) {
                this['_endian'] = _0x1291f, null != this['_input'] && (this['_input']['endian'] = _0x1291f), null != this['_output'] && (this['_output']['endian'] = _0x1291f);
            }), _0x497188['LITTLE_END' + 'IAN'] = 'littleEndi' + 'an', _0x497188['BIG_ENDIAN'] = 'bigEndian', _0x497188;
        }(_0x3f0f68), function (_0x37ca9f) {
            function _0x34b125() {
                this['url'] = null, this['loaded'] = !0x1, this['data'] = null, this['audioBuffe' + 'r'] = null, this['__toPlays'] = null, this['_disposed'] = !0x1, _0x34b125['__super']['call'](this);
            }
            _0x4621f4(_0x34b125, 'laya.media' + '.webaudio.' + 'WebAudioSo' + 'und', _0x37ca9f);
            var _0x509f74 = _0x34b125['prototype'];
            return _0x509f74['load'] = function (_0x421904) {
                var _0x2ce4fd = this;
                if (_0x421904 = _0x4bf8e9['formatURL'](_0x421904), this['url'] = _0x421904, this['audioBuffe' + 'r'] = _0x34b125['_dataCache'][_0x421904], this['audioBuffe' + 'r'])
                    return void this['_loaded'](this['audioBuffe' + 'r']);
                if (_0x34b125['e']['on']('loaded:' + _0x421904, this, this['_loaded']), _0x34b125['e']['on']('err:' + _0x421904, this, this['_err']), !_0x34b125['__loadingS' + 'ound'][_0x421904]) {
                    _0x34b125['__loadingS' + 'ound'][_0x421904] = !0x0;
                    var _0xe4d270 = new _0x2ad6c5['window']['XMLHttpReq' + 'uest']();
                    _0xe4d270['open']('GET', _0x421904, !0x0), _0xe4d270['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0xe4d270['onload'] = function () {
                        return _0x2ce4fd['_disposed'] ? void _0x2ce4fd['_removeLoa' + 'dEvents']() : (_0x2ce4fd['data'] = _0xe4d270['response'], _0x34b125['buffs']['push']({
                            'buffer': _0x2ce4fd['data'],
                            'url': _0x2ce4fd['url']
                        }), void _0x34b125['decode']());
                    }, _0xe4d270['onerror'] = function (_0x4f0836) {
                        _0x2ce4fd['_err']();
                    }, _0xe4d270['send']();
                }
            }, _0x509f74['_err'] = function () {
                this['_removeLoa' + 'dEvents'](), _0x34b125['__loadingS' + 'ound'][this['url']] = !0x1, this['event']('error');
            }, _0x509f74['_loaded'] = function (_0x2ba5c1) {
                this['_removeLoa' + 'dEvents'](), this['_disposed'] || (this['audioBuffe' + 'r'] = _0x2ba5c1, _0x34b125['_dataCache'][this['url']] = this['audioBuffe' + 'r'], this['loaded'] = !0x0, this['event']('complete'));
            }, _0x509f74['_removeLoa' + 'dEvents'] = function () {
                _0x34b125['e']['off']('loaded:' + this['url'], this, this['_loaded']), _0x34b125['e']['off']('err:' + this['url'], this, this['_err']);
            }, _0x509f74['__playAfte' + 'rLoaded'] = function () {
                if (this['__toPlays']) {
                    var _0x505d5e, _0x310367 = 0x0, _0x10f426 = 0x0;
                    _0x505d5e = this['__toPlays'], _0x10f426 = _0x505d5e['length'];
                    var _0x560a30;
                    for (_0x310367 = 0x0; _0x10f426 > _0x310367; _0x310367++)
                        _0x560a30 = _0x505d5e[_0x310367], _0x560a30[0x2] && !_0x560a30[0x2]['isStopped'] && this['play'](_0x560a30[0x0], _0x560a30[0x1], _0x560a30[0x2]);
                    this['__toPlays']['length'] = 0x0;
                }
            }, _0x509f74['play'] = function (_0xb51f5e, _0x3a3fe7, _0x37cb90) {
                return void 0x0 === _0xb51f5e && (_0xb51f5e = 0x0), void 0x0 === _0x3a3fe7 && (_0x3a3fe7 = 0x0), _0x37cb90 = _0x37cb90 ? _0x37cb90 : new _0x3cb2a4(), this['audioBuffe' + 'r'] || this['url'] && (this['__toPlays'] || (this['__toPlays'] = []), this['__toPlays']['push']([
                    _0xb51f5e,
                    _0x3a3fe7,
                    _0x37cb90
                ]), this['once']('complete', this, this['__playAfte' + 'rLoaded']), this['load'](this['url'])), _0x37cb90['url'] = this['url'], _0x37cb90['loops'] = _0x3a3fe7, _0x37cb90['audioBuffe' + 'r'] = this['audioBuffe' + 'r'], _0x37cb90['startTime'] = _0xb51f5e, _0x37cb90['play'](), _0x273f4b['addChannel'](_0x37cb90), _0x37cb90;
            }, _0x509f74['dispose'] = function () {
                this['_disposed'] = !0x0, delete _0x34b125['_dataCache'][this['url']], delete _0x34b125['__loadingS' + 'ound'][this['url']], this['audioBuffe' + 'r'] = null, this['data'] = null, this['__toPlays'] = [];
            }, _0x71e09a(0x0, _0x509f74, 'duration', function () {
                return this['audioBuffe' + 'r'] ? this['audioBuffe' + 'r']['duration'] : 0x0;
            }), _0x34b125['decode'] = function () {
                _0x34b125['buffs']['length'] <= 0x0 || _0x34b125['isDecoding'] || (_0x34b125['isDecoding'] = !0x0, _0x34b125['tInfo'] = _0x34b125['buffs']['shift'](), _0x34b125['ctx']['decodeAudi' + 'oData'](_0x34b125['tInfo']['buffer'], _0x34b125['_done'], _0x34b125['_fail']));
            }, _0x34b125['_done'] = function (_0x4802cc) {
                _0x34b125['e']['event']('loaded:' + _0x34b125['tInfo']['url'], _0x4802cc), _0x34b125['isDecoding'] = !0x1, _0x34b125['decode']();
            }, _0x34b125['_fail'] = function () {
                _0x34b125['e']['event']('err:' + _0x34b125['tInfo']['url'], null), _0x34b125['isDecoding'] = !0x1, _0x34b125['decode']();
            }, _0x34b125['_playEmpty' + 'Sound'] = function () {
                if (null != _0x34b125['ctx']) {
                    var _0x265236 = _0x34b125['ctx']['createBuff' + 'erSource']();
                    _0x265236['buffer'] = _0x34b125['_miniBuffe' + 'r'], _0x265236['connect'](_0x34b125['ctx']['destinatio' + 'n']), _0x265236['start'](0x0, 0x0, 0x0);
                }
            }, _0x34b125['_unlock'] = function () {
                _0x34b125['_unlocked'] || (_0x34b125['_playEmpty' + 'Sound'](), 'running' == _0x34b125['ctx']['state'] && (_0x2ad6c5['document']['removeEven' + 'tListener']('mousedown', _0x34b125['_unlock'], !0x0), _0x2ad6c5['document']['removeEven' + 'tListener']('touchend', _0x34b125['_unlock'], !0x0), _0x2ad6c5['document']['removeEven' + 'tListener']('touchstart', _0x34b125['_unlock'], !0x0), _0x34b125['_unlocked'] = !0x0));
            }, _0x34b125['initWebAud' + 'io'] = function () {
                'running' != _0x34b125['ctx']['state'] && (_0x34b125['_unlock'](), _0x2ad6c5['document']['addEventLi' + 'stener']('mousedown', _0x34b125['_unlock'], !0x0), _0x2ad6c5['document']['addEventLi' + 'stener']('touchend', _0x34b125['_unlock'], !0x0), _0x2ad6c5['document']['addEventLi' + 'stener']('touchstart', _0x34b125['_unlock'], !0x0));
            }, _0x34b125['_dataCache'] = {}, _0x34b125['buffs'] = [], _0x34b125['isDecoding'] = !0x1, _0x34b125['_unlocked'] = !0x1, _0x34b125['tInfo'] = null, _0x34b125['__loadingS' + 'ound'] = {}, _0x5043ef(_0x34b125, [
                'window',
                function () {
                    return this['window'] = _0x2ad6c5['window'];
                },
                'webAudioEn' + 'abled',
                function () {
                    return this['webAudioEn' + 'abled'] = _0x34b125['window']['AudioConte' + 'xt'] || _0x34b125['window']['webkitAudi' + 'oContext'] || _0x34b125['window']['mozAudioCo' + 'ntext'];
                },
                'ctx',
                function () {
                    return this['ctx'] = _0x34b125['webAudioEn' + 'abled'] ? new (_0x34b125['window']['AudioConte' + 'xt'] || _0x34b125['window']['webkitAudi' + 'oContext'] || _0x34b125['window']['mozAudioCo' + 'ntext'])() : void 0x0;
                },
                '_miniBuffe' + 'r',
                function () {
                    return this['_miniBuffe' + 'r'] = _0x34b125['ctx']['createBuff' + 'er'](0x1, 0x1, 0x5622);
                },
                'e',
                function () {
                    return this['e'] = new _0x3f0f68();
                }
            ]), _0x34b125;
        }(_0x3f0f68)), _0x54b560 = function (_0x4dbadd) {
            function _0x4ec39e(_0x9f6e2b) {
                _0x4ec39e['__super']['call'](this), _0x9f6e2b || (_0x9f6e2b = this['_copyMatri' + 'x'](_0x4ec39e['IDENTITY_M' + 'ATRIX'])), this['_mat'] = new Float32Array(0x10), this['_alpha'] = new Float32Array(0x4), this['setByMatri' + 'x'](_0x9f6e2b), this['_action'] = new _0x3ab7ea(), this['_action']['data'] = this;
            }
            _0x4621f4(_0x4ec39e, 'laya.filte' + 'rs.ColorFi' + 'lter', _0x4dbadd);
            var _0x5dbf87 = _0x4ec39e['prototype'];
            return _0x34a895['imps'](_0x5dbf87, { 'laya.filters.IFilter': !0x0 }), _0x5dbf87['gray'] = function () {
                return this['setByMatri' + 'x'](_0x4ec39e['GRAY_MATRI' + 'X']);
            }, _0x5dbf87['color'] = function (_0x4ec704, _0x62411a, _0x1c2f15, _0x5e0d33) {
                return void 0x0 === _0x4ec704 && (_0x4ec704 = 0x0), void 0x0 === _0x62411a && (_0x62411a = 0x0), void 0x0 === _0x1c2f15 && (_0x1c2f15 = 0x0), void 0x0 === _0x5e0d33 && (_0x5e0d33 = 0x1), this['setByMatri' + 'x']([
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    _0x4ec704,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    _0x62411a,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    _0x1c2f15,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    _0x5e0d33
                ]);
            }, _0x5dbf87['setColor'] = function (_0x2f171e) {
                var _0x4b6f93 = _0x189459['create'](_0x2f171e)['arrColor'], _0x185c55 = [
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x100 * _0x4b6f93[0x0],
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x100 * _0x4b6f93[0x1],
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x100 * _0x4b6f93[0x2],
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0
                    ];
                return this['setByMatri' + 'x'](_0x185c55);
            }, _0x5dbf87['setByMatri' + 'x'] = function (_0x4c73ba) {
                this['_matrix'] != _0x4c73ba && this['_copyMatri' + 'x'](_0x4c73ba);
                for (var _0x23f1c5 = 0x0, _0x16d0a5 = 0x0, _0x263f10 = 0x0; 0x14 > _0x263f10; _0x263f10++)
                    _0x263f10 % 0x5 != 0x4 ? this['_mat'][_0x23f1c5++] = _0x4c73ba[_0x263f10] : this['_alpha'][_0x16d0a5++] = _0x4c73ba[_0x263f10];
                return this;
            }, _0x5dbf87['adjustColo' + 'r'] = function (_0x4e3994, _0x2e9f73, _0x4d6f29, _0x6bc515) {
                return this['adjustHue'](_0x6bc515), this['adjustCont' + 'rast'](_0x2e9f73), this['adjustBrig' + 'htness'](_0x4e3994), this['adjustSatu' + 'ration'](_0x4d6f29), this;
            }, _0x5dbf87['adjustBrig' + 'htness'] = function (_0x2b82a0) {
                return _0x2b82a0 = this['_clampValu' + 'e'](_0x2b82a0, 0x64), 0x0 == _0x2b82a0 || isNaN(_0x2b82a0) ? this : this['_multiplyM' + 'atrix']([
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    _0x2b82a0,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    _0x2b82a0,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    _0x2b82a0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1
                ]);
            }, _0x5dbf87['adjustCont' + 'rast'] = function (_0x967b7b) {
                if (_0x967b7b = this['_clampValu' + 'e'](_0x967b7b, 0x64), 0x0 == _0x967b7b || isNaN(_0x967b7b))
                    return this;
                var _0x3baaa0 = NaN;
                0x0 > _0x967b7b ? _0x3baaa0 = 0x7f + _0x967b7b / 0x64 * 0x7f : (_0x3baaa0 = _0x967b7b % 0x1, _0x3baaa0 = 0x0 == _0x3baaa0 ? _0x4ec39e['DELTA_INDE' + 'X'][_0x967b7b] : _0x4ec39e['DELTA_INDE' + 'X'][_0x967b7b << 0x0] * (0x1 - _0x3baaa0) + _0x4ec39e['DELTA_INDE' + 'X'][(_0x967b7b << 0x0) + 0x1] * _0x3baaa0, _0x3baaa0 = 0x7f * _0x3baaa0 + 0x7f);
                var _0x27cace = _0x3baaa0 / 0x7f, _0x1a9f00 = 0.5 * (0x7f - _0x3baaa0);
                return this['_multiplyM' + 'atrix']([
                    _0x27cace,
                    0x0,
                    0x0,
                    0x0,
                    _0x1a9f00,
                    0x0,
                    _0x27cace,
                    0x0,
                    0x0,
                    _0x1a9f00,
                    0x0,
                    0x0,
                    _0x27cace,
                    0x0,
                    _0x1a9f00,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1
                ]);
            }, _0x5dbf87['adjustSatu' + 'ration'] = function (_0x4afecd) {
                if (_0x4afecd = this['_clampValu' + 'e'](_0x4afecd, 0x64), 0x0 == _0x4afecd || isNaN(_0x4afecd))
                    return this;
                var _0x2992e9 = 0x1 + (_0x4afecd > 0x0 ? 0x3 * _0x4afecd / 0x64 : _0x4afecd / 0x64), _0xc15a62 = 0x1 - _0x2992e9, _0x2fe93b = 0.3086 * _0xc15a62, _0xae7d51 = 0.6094 * _0xc15a62, _0x32ff9c = 0.082 * _0xc15a62;
                return this['_multiplyM' + 'atrix']([
                    _0x2fe93b + _0x2992e9,
                    _0xae7d51,
                    _0x32ff9c,
                    0x0,
                    0x0,
                    _0x2fe93b,
                    _0xae7d51 + _0x2992e9,
                    _0x32ff9c,
                    0x0,
                    0x0,
                    _0x2fe93b,
                    _0xae7d51,
                    _0x32ff9c + _0x2992e9,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1
                ]);
            }, _0x5dbf87['adjustHue'] = function (_0x2c2f26) {
                if (_0x2c2f26 = this['_clampValu' + 'e'](_0x2c2f26, 0xb4) / 0xb4 * Math['PI'], 0x0 == _0x2c2f26 || isNaN(_0x2c2f26))
                    return this;
                var _0x376a0f = Math['cos'](_0x2c2f26), _0x2db6ca = Math['sin'](_0x2c2f26), _0x43fa38 = 0.213, _0x2cbda1 = 0.715, _0x5997f7 = 0.072;
                return this['_multiplyM' + 'atrix']([
                    _0x43fa38 + _0x376a0f * (0x1 - _0x43fa38) + _0x2db6ca * -_0x43fa38,
                    _0x2cbda1 + _0x376a0f * -_0x2cbda1 + _0x2db6ca * -_0x2cbda1,
                    _0x5997f7 + _0x376a0f * -_0x5997f7 + _0x2db6ca * (0x1 - _0x5997f7),
                    0x0,
                    0x0,
                    _0x43fa38 + _0x376a0f * -_0x43fa38 + 0.143 * _0x2db6ca,
                    _0x2cbda1 + _0x376a0f * (0x1 - _0x2cbda1) + 0.14 * _0x2db6ca,
                    _0x5997f7 + _0x376a0f * -_0x5997f7 + _0x2db6ca * -0.283,
                    0x0,
                    0x0,
                    _0x43fa38 + _0x376a0f * -_0x43fa38 + _0x2db6ca * -(0x1 - _0x43fa38),
                    _0x2cbda1 + _0x376a0f * -_0x2cbda1 + _0x2db6ca * _0x2cbda1,
                    _0x5997f7 + _0x376a0f * (0x1 - _0x5997f7) + _0x2db6ca * _0x5997f7,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1
                ]);
            }, _0x5dbf87['reset'] = function () {
                return this['setByMatri' + 'x'](this['_copyMatri' + 'x'](_0x4ec39e['IDENTITY_M' + 'ATRIX']));
            }, _0x5dbf87['_multiplyM' + 'atrix'] = function (_0x337f08) {
                var _0x185e32 = [];
                this['_matrix'] = this['_fixMatrix'](this['_matrix']);
                for (var _0x2ccaa1 = 0x0; 0x5 > _0x2ccaa1; _0x2ccaa1++) {
                    for (var _0x510055 = 0x0; 0x5 > _0x510055; _0x510055++)
                        _0x185e32[_0x510055] = this['_matrix'][_0x510055 + 0x5 * _0x2ccaa1];
                    for (_0x510055 = 0x0; 0x5 > _0x510055; _0x510055++) {
                        for (var _0x15253a = 0x0, _0x926ffb = 0x0; 0x5 > _0x926ffb; _0x926ffb++)
                            _0x15253a += _0x337f08[_0x510055 + 0x5 * _0x926ffb] * _0x185e32[_0x926ffb];
                        this['_matrix'][_0x510055 + 0x5 * _0x2ccaa1] = _0x15253a;
                    }
                }
                return this['setByMatri' + 'x'](this['_matrix']);
            }, _0x5dbf87['_clampValu' + 'e'] = function (_0x14bd91, _0x4bbcf8) {
                return Math['min'](_0x4bbcf8, Math['max'](-_0x4bbcf8, _0x14bd91));
            }, _0x5dbf87['_fixMatrix'] = function (_0x16077e) {
                return null == _0x16077e ? _0x4ec39e['IDENTITY_M' + 'ATRIX'] : (_0x16077e['length'] < 0x19 ? _0x16077e = _0x16077e['slice'](0x0, _0x16077e['length'])['concat'](_0x4ec39e['IDENTITY_M' + 'ATRIX']['slice'](_0x16077e['length'], 0x19)) : _0x16077e['length'] > 0x19 && (_0x16077e = _0x16077e['slice'](0x0, 0x19)), _0x16077e);
            }, _0x5dbf87['_copyMatri' + 'x'] = function (_0x318557) {
                var _0x2cc7d3 = 0x19;
                this['_matrix'] || (this['_matrix'] = []);
                for (var _0x12b442 = 0x0; _0x2cc7d3 > _0x12b442; _0x12b442++)
                    this['_matrix'][_0x12b442] = _0x318557[_0x12b442];
                return this['_matrix'];
            }, _0x71e09a(0x0, _0x5dbf87, 'type', function () {
                return 0x20;
            }), _0x4ec39e['LENGTH'] = 0x19, _0x5043ef(_0x4ec39e, [
                'DELTA_INDE' + 'X',
                function () {
                    return this['DELTA_INDE' + 'X'] = [
                        0x0,
                        0.01,
                        0.02,
                        0.04,
                        0.05,
                        0.06,
                        0.07,
                        0.08,
                        0.1,
                        0.11,
                        0.12,
                        0.14,
                        0.15,
                        0.16,
                        0.17,
                        0.18,
                        0.2,
                        0.21,
                        0.22,
                        0.24,
                        0.25,
                        0.27,
                        0.28,
                        0.3,
                        0.32,
                        0.34,
                        0.36,
                        0.38,
                        0.4,
                        0.42,
                        0.44,
                        0.46,
                        0.48,
                        0.5,
                        0.53,
                        0.56,
                        0.59,
                        0.62,
                        0.65,
                        0.68,
                        0.71,
                        0.74,
                        0.77,
                        0.8,
                        0.83,
                        0.86,
                        0.89,
                        0.92,
                        0.95,
                        0.98,
                        0x1,
                        1.06,
                        1.12,
                        1.18,
                        1.24,
                        1.3,
                        1.36,
                        1.42,
                        1.48,
                        1.54,
                        1.6,
                        1.66,
                        1.72,
                        1.78,
                        1.84,
                        1.9,
                        1.96,
                        0x2,
                        2.12,
                        2.25,
                        2.37,
                        2.5,
                        2.62,
                        2.75,
                        2.87,
                        0x3,
                        3.2,
                        3.4,
                        3.6,
                        3.8,
                        0x4,
                        4.3,
                        4.7,
                        4.9,
                        0x5,
                        5.5,
                        0x6,
                        6.5,
                        6.8,
                        0x7,
                        7.3,
                        7.5,
                        7.8,
                        0x8,
                        8.4,
                        8.7,
                        0x9,
                        9.4,
                        9.6,
                        9.8,
                        0xa
                    ];
                },
                'GRAY_MATRI' + 'X',
                function () {
                    return this['GRAY_MATRI' + 'X'] = [
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
                    ];
                },
                'IDENTITY_M' + 'ATRIX',
                function () {
                    return this['IDENTITY_M' + 'ATRIX'] = [
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1
                    ];
                }
            ]), _0x4ec39e;
        }(_0x26563f), _0x215376 = (function (_0x26fcbd) {
            function _0x24decf() {
                _0x24decf['__super']['call'](this);
            }
            _0x4621f4(_0x24decf, 'laya.compo' + 'nents.Comm' + 'onScript', _0x26fcbd);
            var _0x3284c3 = _0x24decf['prototype'];
            return _0x3284c3['onAwake'] = function () {
            }, _0x3284c3['onEnable'] = function () {
            }, _0x3284c3['onStart'] = function () {
            }, _0x3284c3['onUpdate'] = function () {
            }, _0x3284c3['onLateUpda' + 'te'] = function () {
            }, _0x3284c3['onDisable'] = function () {
            }, _0x3284c3['onDestroy'] = function () {
            }, _0x71e09a(0x0, _0x3284c3, 'isSingleto' + 'n', function () {
                return !0x1;
            }), _0x24decf;
        }(_0x36e3c7), function (_0xe7c13e) {
            function _0x27bc7b() {
                this['italic'] = !0x1, _0x27bc7b['__super']['call'](this);
            }
            _0x4621f4(_0x27bc7b, 'laya.displ' + 'ay.css.Tex' + 'tStyle', _0xe7c13e);
            var _0x4df0c1 = _0x27bc7b['prototype'];
            return _0x4df0c1['reset'] = function () {
                return _0xe7c13e['prototype']['reset']['call'](this), this['italic'] = !0x1, this['align'] = 'left', this['wordWrap'] = !0x1, this['leading'] = 0x0, this['padding'] = [
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], this['bgColor'] = null, this['borderColo' + 'r'] = null, this['asPassword'] = !0x1, this['stroke'] = 0x0, this['strokeColo' + 'r'] = '#000000', this['bold'] = !0x1, this['underline'] = !0x1, this['underlineC' + 'olor'] = null, this['currBitmap' + 'Font'] = null, this;
            }, _0x4df0c1['recover'] = function () {
                this !== _0x27bc7b['EMPTY'] && _0x2249dd['recover']('TextStyle', this['reset']());
            }, _0x4df0c1['render'] = function (_0x32321a, _0x1b3985, _0x5b8734, _0x25f851) {
                (this['bgColor'] || this['borderColo' + 'r']) && _0x1b3985['drawRect'](_0x5b8734, _0x25f851, _0x32321a['width'], _0x32321a['height'], this['bgColor'], this['borderColo' + 'r'], 0x1);
            }, _0x27bc7b['create'] = function () {
                return _0x2249dd['getItemByC' + 'lass']('TextStyle', _0x27bc7b);
            }, _0x27bc7b['EMPTY'] = new _0x27bc7b(), _0x27bc7b;
        }(_0x144f60)), _0x421b7c = (function (_0x1e242c) {
            function _0x4e2739() {
                _0x4e2739['__super']['call'](this);
            }
            _0x4621f4(_0x4e2739, 'laya.compo' + 'nents.Scri' + 'pt', _0x1e242c);
            var _0x27f494 = _0x4e2739['prototype'];
            return _0x27f494['_onAwake'] = function () {
                this['onAwake'](), this['onStart'] !== laya['components']['Script']['prototype']['onStart'] && _0x34a895['startTimer']['callLater'](this, this['onStart']);
            }, _0x27f494['_onEnable'] = function () {
                var _0x359143 = laya['components']['Script']['prototype'];
                this['onTriggerE' + 'nter'] !== _0x359143['onTriggerE' + 'nter'] && this['owner']['on']('triggerent' + 'er', this, this['onTriggerE' + 'nter']), this['onTriggerS' + 'tay'] !== _0x359143['onTriggerS' + 'tay'] && this['owner']['on']('triggersta' + 'y', this, this['onTriggerS' + 'tay']), this['onTriggerE' + 'xit'] !== _0x359143['onTriggerE' + 'xit'] && this['owner']['on']('triggerexi' + 't', this, this['onTriggerE' + 'xit']), this['onMouseDow' + 'n'] !== _0x359143['onMouseDow' + 'n'] && this['owner']['on']('mousedown', this, this['onMouseDow' + 'n']), this['onMouseUp'] !== _0x359143['onMouseUp'] && this['owner']['on']('mouseup', this, this['onMouseUp']), this['onClick'] !== _0x359143['onClick'] && this['owner']['on']('click', this, this['onClick']), this['onStageMou' + 'seDown'] !== _0x359143['onStageMou' + 'seDown'] && _0x34a895['stage']['on']('mousedown', this, this['onStageMou' + 'seDown']), this['onStageMou' + 'seUp'] !== _0x359143['onStageMou' + 'seUp'] && _0x34a895['stage']['on']('mouseup', this, this['onStageMou' + 'seUp']), this['onStageCli' + 'ck'] !== _0x359143['onStageCli' + 'ck'] && _0x34a895['stage']['on']('click', this, this['onStageCli' + 'ck']), this['onStageMou' + 'seMove'] !== _0x359143['onStageMou' + 'seMove'] && _0x34a895['stage']['on']('mousemove', this, this['onStageMou' + 'seMove']), this['onDoubleCl' + 'ick'] !== _0x359143['onDoubleCl' + 'ick'] && this['owner']['on']('doubleclic' + 'k', this, this['onDoubleCl' + 'ick']), this['onRightCli' + 'ck'] !== _0x359143['onRightCli' + 'ck'] && this['owner']['on']('rightclick', this, this['onRightCli' + 'ck']), this['onMouseMov' + 'e'] !== _0x359143['onMouseMov' + 'e'] && this['owner']['on']('mousemove', this, this['onMouseMov' + 'e']), this['onMouseOve' + 'r'] !== _0x359143['onMouseOve' + 'r'] && this['owner']['on']('mouseover', this, this['onMouseOve' + 'r']), this['onMouseOut'] !== _0x359143['onMouseOut'] && this['owner']['on']('mouseout', this, this['onMouseOut']), this['onKeyDown'] !== _0x359143['onKeyDown'] && _0x34a895['stage']['on']('keydown', this, this['onKeyDown']), this['onKeyPress'] !== _0x359143['onKeyPress'] && _0x34a895['stage']['on']('keypress', this, this['onKeyPress']), this['onKeyUp'] !== _0x359143['onKeyUp'] && _0x34a895['stage']['on']('keyup', this, this['onKeyUp']), this['onUpdate'] !== _0x359143['onUpdate'] && _0x34a895['updateTime' + 'r']['frameLoop'](0x1, this, this['onUpdate']), this['onLateUpda' + 'te'] !== _0x359143['onLateUpda' + 'te'] && _0x34a895['lateTimer']['frameLoop'](0x1, this, this['onLateUpda' + 'te']), this['onPreRende' + 'r'] !== _0x359143['onPreRende' + 'r'] && _0x34a895['lateTimer']['frameLoop'](0x1, this, this['onPreRende' + 'r']);
            }, _0x27f494['_onDisable'] = function () {
                this['owner']['offAllCall' + 'er'](this), _0x34a895['stage']['offAllCall' + 'er'](this), _0x34a895['startTimer']['clearAll'](this), _0x34a895['updateTime' + 'r']['clearAll'](this), _0x34a895['lateTimer']['clearAll'](this);
            }, _0x27f494['_isScript'] = function () {
                return !0x0;
            }, _0x27f494['_onDestroy'] = function () {
                this['onDestroy']();
            }, _0x27f494['onAwake'] = function () {
            }, _0x27f494['onEnable'] = function () {
            }, _0x27f494['onStart'] = function () {
            }, _0x27f494['onTriggerE' + 'nter'] = function (_0x14db4a, _0x5f1d40, _0xa25f0) {
            }, _0x27f494['onTriggerS' + 'tay'] = function (_0x4e2fab, _0x218e99, _0x5c0b07) {
            }, _0x27f494['onTriggerE' + 'xit'] = function (_0x168961, _0x5ef10d, _0x304380) {
            }, _0x27f494['onMouseDow' + 'n'] = function (_0xe2d3d2) {
            }, _0x27f494['onMouseUp'] = function (_0xd14040) {
            }, _0x27f494['onClick'] = function (_0x149714) {
            }, _0x27f494['onStageMou' + 'seDown'] = function (_0x2b0e12) {
            }, _0x27f494['onStageMou' + 'seUp'] = function (_0x17af5f) {
            }, _0x27f494['onStageCli' + 'ck'] = function (_0x5a07cd) {
            }, _0x27f494['onStageMou' + 'seMove'] = function (_0x5508dd) {
            }, _0x27f494['onDoubleCl' + 'ick'] = function (_0x36bca2) {
            }, _0x27f494['onRightCli' + 'ck'] = function (_0x353e8c) {
            }, _0x27f494['onMouseMov' + 'e'] = function (_0x4cd33b) {
            }, _0x27f494['onMouseOve' + 'r'] = function (_0x35559c) {
            }, _0x27f494['onMouseOut'] = function (_0x2f4628) {
            }, _0x27f494['onKeyDown'] = function (_0x45eb47) {
            }, _0x27f494['onKeyPress'] = function (_0xef7fa9) {
            }, _0x27f494['onKeyUp'] = function (_0x3aefd4) {
            }, _0x27f494['onUpdate'] = function () {
            }, _0x27f494['onLateUpda' + 'te'] = function () {
            }, _0x27f494['onPreRende' + 'r'] = function () {
            }, _0x27f494['onPostRend' + 'er'] = function () {
            }, _0x27f494['onDisable'] = function () {
            }, _0x27f494['onDestroy'] = function () {
            }, _0x71e09a(0x0, _0x27f494, 'isSingleto' + 'n', function () {
                return !0x1;
            }), _0x4e2739;
        }(_0x36e3c7), function (_0xb74a2a) {
            function _0x43681d() {
                _0x43681d['__super']['call'](this), this['_width'] = -0x1, this['_height'] = -0x1;
            }
            _0x4621f4(_0x43681d, 'laya.resou' + 'rce.Bitmap', _0xb74a2a);
            var _0x32f847 = _0x43681d['prototype'];
            return _0x32f847['_getSource'] = function () {
                throw 'Bitmap:\x20mu' + 'st\x20overrid' + 'e\x20it.';
            }, _0x71e09a(0x0, _0x32f847, 'width', function () {
                return this['_width'];
            }), _0x71e09a(0x0, _0x32f847, 'height', function () {
                return this['_height'];
            }), _0x43681d;
        }(_0x297d95)), _0x4bc7a0 = function (_0x1af61b) {
            function _0x51ea30() {
                this['_x'] = 0x0, this['_y'] = 0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['_visible'] = !0x0, this['_mouseStat' + 'e'] = 0x0, this['_zOrder'] = 0x0, this['_renderTyp' + 'e'] = 0x0, this['_transform'] = null, this['_tfChanged'] = !0x1, this['_texture'] = null, this['_boundStyl' + 'e'] = null, this['_graphics'] = null, this['mouseThrou' + 'gh'] = !0x1, this['autoSize'] = !0x1, this['hitTestPri' + 'or'] = !0x1, _0x51ea30['__super']['call'](this), this['_repaint'] = 0x0, this['_style'] = _0x144f60['EMPTY'], this['_cacheStyl' + 'e'] = _0x168ff5['EMPTY'];
            }
            _0x4621f4(_0x51ea30, 'laya.displ' + 'ay.Sprite', _0x1af61b);
            var _0xf746d5 = _0x51ea30['prototype'];
            return _0xf746d5['destroy'] = function (_0x291f92) {
                void 0x0 === _0x291f92 && (_0x291f92 = !0x0), _0x1af61b['prototype']['destroy']['call'](this, _0x291f92), this['_style'] && this['_style']['recover'](), this['_cacheStyl' + 'e'] && this['_cacheStyl' + 'e']['recover'](), this['_boundStyl' + 'e'] && this['_boundStyl' + 'e']['recover'](), this['_style'] = null, this['_cacheStyl' + 'e'] = null, this['_boundStyl' + 'e'] = null, this['_transform'] = null, this['_graphics'] && this['_graphics']['autoDestro' + 'y'] && this['_graphics']['destroy'](), this['_graphics'] = null, this['texture'] = null;
            }, _0xf746d5['updateZOrd' + 'er'] = function () {
                _0x3b78ce['updateOrde' + 'r'](this['_children']) && this['repaint']();
            }, _0xf746d5['_getBounds' + 'Style'] = function () {
                return this['_boundStyl' + 'e'] || (this['_boundStyl' + 'e'] = _0x512c96['create']()), this['_boundStyl' + 'e'];
            }, _0xf746d5['_setCustom' + 'Render'] = function () {
            }, _0xf746d5['_setCacheA' + 's'] = function (_0xf51d36) {
            }, _0xf746d5['_checkCanv' + 'asEnable'] = function () {
                var _0x4e39b5 = this['_cacheStyl' + 'e']['needEnable' + 'CanvasRend' + 'er']();
                this['_getCacheS' + 'tyle']()['enableCanv' + 'asRender'] = _0x4e39b5, _0x4e39b5 ? (this['_cacheStyl' + 'e']['needBitmap' + 'Cache']() ? this['_cacheStyl' + 'e']['cacheAs'] = 'bitmap' : this['_cacheStyl' + 'e']['cacheAs'] = this['_cacheStyl' + 'e']['userSetCac' + 'he'], this['_cacheStyl' + 'e']['reCache'] = !0x0, this['_renderTyp' + 'e'] |= 0x8) : (this['_cacheStyl' + 'e']['cacheAs'] = 'none', this['_cacheStyl' + 'e']['releaseCon' + 'text'](), this['_renderTyp' + 'e'] &= -0x9), this['_setCacheA' + 's'](this['_cacheStyl' + 'e']['cacheAs']), this['_setRender' + 'Type'](this['_renderTyp' + 'e']);
            }, _0xf746d5['reCache'] = function () {
                this['_cacheStyl' + 'e']['reCache'] = !0x0, this['_repaint'] |= 0x2;
            }, _0xf746d5['getRepaint'] = function () {
                return this['_repaint'];
            }, _0xf746d5['_setX'] = function (_0x200618) {
                this['_x'] = _0x200618;
            }, _0xf746d5['_setY'] = function (_0x49dd99) {
                this['_y'] = _0x49dd99;
            }, _0xf746d5['_setWidth'] = function (_0x54ac50, _0x1b01fd) {
            }, _0xf746d5['_setHeight'] = function (_0x26bf7c, _0x5e15ab) {
            }, _0xf746d5['setSelfBou' + 'nds'] = function (_0x11cd59) {
                this['_getBounds' + 'Style']()['userBounds'] = _0x11cd59;
            }, _0xf746d5['getBounds'] = function () {
                return this['_getBounds' + 'Style']()['bounds'] = _0x22858b['_getWrapRe' + 'c'](this['_boundPoin' + 'tsToParent']());
            }, _0xf746d5['getSelfBou' + 'nds'] = function () {
                return this['_boundStyl' + 'e'] && this['_boundStyl' + 'e']['userBounds'] ? this['_boundStyl' + 'e']['userBounds'] : this['_graphics'] || 0x0 !== this['_children']['length'] || this['_texture'] ? this['_getBounds' + 'Style']()['bounds'] = _0x22858b['_getWrapRe' + 'c'](this['_getBoundP' + 'ointsM'](!0x1)) : _0x22858b['TEMP']['setTo'](0x0, 0x0, 0x0, 0x0);
            }, _0xf746d5['_boundPoin' + 'tsToParent'] = function (_0x47d5f7) {
                void 0x0 === _0x47d5f7 && (_0x47d5f7 = !0x1);
                var _0x250595 = 0x0, _0x9ec318 = 0x0;
                this['_style'] && (_0x250595 = this['pivotX'], _0x9ec318 = this['pivotY'], _0x47d5f7 = _0x47d5f7 || 0x0 !== this['_style']['rotation'], this['_style']['scrollRect'] && (_0x250595 += this['_style']['scrollRect']['x'], _0x9ec318 += this['_style']['scrollRect']['y']));
                var _0x2c1d2d = this['_getBoundP' + 'ointsM'](_0x47d5f7);
                if (!_0x2c1d2d || _0x2c1d2d['length'] < 0x1)
                    return _0x2c1d2d;
                if (0x8 != _0x2c1d2d['length'] && (_0x2c1d2d = _0x47d5f7 ? _0x496684['scanPList'](_0x2c1d2d) : _0x22858b['_getWrapRe' + 'c'](_0x2c1d2d, _0x22858b['TEMP'])['_getBoundP' + 'oints']()), !this['transform'])
                    return _0x3b78ce['transPoint' + 'List'](_0x2c1d2d, this['_x'] - _0x250595, this['_y'] - _0x9ec318), _0x2c1d2d;
                var _0xae827f = _0x251b03['TEMP'], _0x3596da = 0x0, _0x2e051b = _0x2c1d2d['length'];
                for (_0x3596da = 0x0; _0x2e051b > _0x3596da; _0x3596da += 0x2)
                    _0xae827f['x'] = _0x2c1d2d[_0x3596da], _0xae827f['y'] = _0x2c1d2d[_0x3596da + 0x1], this['toParentPo' + 'int'](_0xae827f), _0x2c1d2d[_0x3596da] = _0xae827f['x'], _0x2c1d2d[_0x3596da + 0x1] = _0xae827f['y'];
                return _0x2c1d2d;
            }, _0xf746d5['getGraphic' + 'Bounds'] = function (_0x48c5a6) {
                return void 0x0 === _0x48c5a6 && (_0x48c5a6 = !0x1), this['_graphics'] ? this['_graphics']['getBounds'](_0x48c5a6) : _0x22858b['TEMP']['setTo'](0x0, 0x0, 0x0, 0x0);
            }, _0xf746d5['_getBoundP' + 'ointsM'] = function (_0x4b411f) {
                if (void 0x0 === _0x4b411f && (_0x4b411f = !0x1), this['_boundStyl' + 'e'] && this['_boundStyl' + 'e']['userBounds'])
                    return this['_boundStyl' + 'e']['userBounds']['_getBoundP' + 'oints']();
                if (this['_boundStyl' + 'e'] || this['_getBounds' + 'Style'](), this['_boundStyl' + 'e']['temBM'] || (this['_boundStyl' + 'e']['temBM'] = []), this['_style']['scrollRect']) {
                    var _0x24911b = _0x3b78ce['clearArray'](this['_boundStyl' + 'e']['temBM']), _0x35f162 = _0x22858b['TEMP'];
                    return _0x35f162['copyFrom'](this['_style']['scrollRect']), _0x3b78ce['concatArra' + 'y'](_0x24911b, _0x35f162['_getBoundP' + 'oints']()), _0x24911b;
                }
                var _0x17e842;
                this['_graphics'] ? _0x17e842 = this['_graphics']['getBoundPo' + 'ints']() : (_0x17e842 = _0x3b78ce['clearArray'](this['_boundStyl' + 'e']['temBM']), this['_texture'] && (_0x35f162 = _0x22858b['TEMP'], _0x35f162['setTo'](0x0, 0x0, this['_texture']['width'], this['_texture']['height']), _0x3b78ce['concatArra' + 'y'](_0x17e842, _0x35f162['_getBoundP' + 'oints']())));
                var _0x16d753, _0x417a17, _0x154d2c;
                _0x154d2c = this['_children'];
                for (var _0x464ecc = 0x0, _0x16f2e4 = _0x154d2c['length']; _0x16f2e4 > _0x464ecc; _0x464ecc++)
                    _0x16d753 = _0x154d2c[_0x464ecc], _0x16d753 instanceof laya['display']['Sprite'] && _0x16d753['_visible'] === !0x0 && (_0x417a17 = _0x16d753['_boundPoin' + 'tsToParent'](_0x4b411f), _0x417a17 && (_0x17e842 = _0x17e842 ? _0x3b78ce['concatArra' + 'y'](_0x17e842, _0x417a17) : _0x417a17));
                return _0x17e842;
            }, _0xf746d5['_getCacheS' + 'tyle'] = function () {
                return this['_cacheStyl' + 'e'] === _0x168ff5['EMPTY'] && (this['_cacheStyl' + 'e'] = _0x168ff5['create']()), this['_cacheStyl' + 'e'];
            }, _0xf746d5['getStyle'] = function () {
                return this['_style'] === _0x144f60['EMPTY'] && (this['_style'] = _0x144f60['create']()), this['_style'];
            }, _0xf746d5['setStyle'] = function (_0x3329ac) {
                this['_style'] = _0x3329ac;
            }, _0xf746d5['_setScaleX'] = function (_0x537cc1) {
                this['_style']['scaleX'] = _0x537cc1;
            }, _0xf746d5['_setScaleY'] = function (_0x557ffa) {
                this['_style']['scaleY'] = _0x557ffa;
            }, _0xf746d5['_setRotati' + 'on'] = function (_0x1526c9) {
                this['_style']['rotation'] = _0x1526c9;
            }, _0xf746d5['_setSkewX'] = function (_0x5b287b) {
                this['_style']['skewX'] = _0x5b287b;
            }, _0xf746d5['_setSkewY'] = function (_0x5b6b40) {
                this['_style']['skewY'] = _0x5b6b40;
            }, _0xf746d5['_createTra' + 'nsform'] = function () {
                return _0x250bb7['create']();
            }, _0xf746d5['_adjustTra' + 'nsform'] = function () {
                this['_tfChanged'] = !0x1;
                var _0x571c54 = this['_style'], _0x14f73e = _0x571c54['scaleX'], _0x47ad5b = _0x571c54['scaleY'], _0x34b90a = this['_transform'] || (this['_transform'] = this['_createTra' + 'nsform']());
                if (_0x571c54['rotation'] || 0x1 !== _0x14f73e || 0x1 !== _0x47ad5b || 0x0 !== _0x571c54['skewX'] || 0x0 !== _0x571c54['skewY']) {
                    _0x34b90a['_bTransfor' + 'm'] = !0x0;
                    var _0xd31ce9 = 0.0174532922222222 * (_0x571c54['rotation'] - _0x571c54['skewX']), _0x244a91 = 0.0174532922222222 * (_0x571c54['rotation'] + _0x571c54['skewY']), _0x19c2bb = Math['cos'](_0x244a91), _0x5e5352 = Math['sin'](_0x244a91), _0x18134b = Math['sin'](_0xd31ce9), _0x14e456 = Math['cos'](_0xd31ce9);
                    _0x34b90a['a'] = _0x14f73e * _0x19c2bb, _0x34b90a['b'] = _0x14f73e * _0x5e5352, _0x34b90a['c'] = -_0x47ad5b * _0x18134b, _0x34b90a['d'] = _0x47ad5b * _0x14e456, _0x34b90a['tx'] = _0x34b90a['ty'] = 0x0;
                } else
                    _0x34b90a['identity'](), this['_renderTyp' + 'e'] &= -0x3, this['_setRender' + 'Type'](this['_renderTyp' + 'e']);
                return _0x34b90a;
            }, _0xf746d5['_setTransf' + 'orm'] = function (_0x40c887) {
            }, _0xf746d5['_setPivotX'] = function (_0x159eca) {
                var _0x59feec = this['getStyle']();
                _0x59feec['pivotX'] = _0x159eca;
            }, _0xf746d5['_getPivotX'] = function () {
                return this['_style']['pivotX'];
            }, _0xf746d5['_setPivotY'] = function (_0x354264) {
                var _0x2989f4 = this['getStyle']();
                _0x2989f4['pivotY'] = _0x354264;
            }, _0xf746d5['_getPivotY'] = function () {
                return this['_style']['pivotY'];
            }, _0xf746d5['_setAlpha'] = function (_0x3024c5) {
                if (this['_style']['alpha'] !== _0x3024c5) {
                    var _0x37a836 = this['getStyle']();
                    _0x37a836['alpha'] = _0x3024c5, 0x1 !== _0x3024c5 ? this['_renderTyp' + 'e'] |= 0x1 : this['_renderTyp' + 'e'] &= -0x2, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['parentRepa' + 'int']();
                }
            }, _0xf746d5['_getAlpha'] = function () {
                return this['_style']['alpha'];
            }, _0xf746d5['_setBlendM' + 'ode'] = function (_0x1614cc) {
            }, _0xf746d5['_setGraphi' + 'cs'] = function (_0x58ca26) {
            }, _0xf746d5['_setGraphi' + 'csCallBack'] = function () {
            }, _0xf746d5['_setScroll' + 'Rect'] = function (_0x1b1db5) {
            }, _0xf746d5['pos'] = function (_0x10290e, _0x564c69, _0x212dd8) {
                if (void 0x0 === _0x212dd8 && (_0x212dd8 = !0x1), this['_x'] !== _0x10290e || this['_y'] !== _0x564c69) {
                    if (this['destroyed'])
                        return this;
                    if (_0x212dd8) {
                        this['_setX'](_0x10290e), this['_setY'](_0x564c69), this['parentRepa' + 'int'](0x2);
                        var _0x4275d0 = this['_cacheStyl' + 'e']['maskParent'];
                        _0x4275d0 && _0x4275d0['repaint'](0x2);
                    } else
                        this['x'] = _0x10290e, this['y'] = _0x564c69;
                }
                return this;
            }, _0xf746d5['pivot'] = function (_0x3ef4d9, _0x1aefbf) {
                return this['pivotX'] = _0x3ef4d9, this['pivotY'] = _0x1aefbf, this;
            }, _0xf746d5['size'] = function (_0x51cc50, _0x3054ee) {
                return this['width'] = _0x51cc50, this['height'] = _0x3054ee, this;
            }, _0xf746d5['scale'] = function (_0x111380, _0x4508dd, _0x2e8e98) {
                void 0x0 === _0x2e8e98 && (_0x2e8e98 = !0x1);
                var _0x10c272 = this['getStyle']();
                if (_0x10c272['scaleX'] != _0x111380 || _0x10c272['scaleY'] != _0x4508dd) {
                    if (this['destroyed'])
                        return this;
                    _0x2e8e98 ? (this['_setScaleX'](_0x111380), this['_setScaleY'](_0x4508dd), this['_setTranfo' + 'rmChange']()) : (this['scaleX'] = _0x111380, this['scaleY'] = _0x4508dd);
                }
                return this;
            }, _0xf746d5['skew'] = function (_0xaa9f83, _0x449408) {
                return this['skewX'] = _0xaa9f83, this['skewY'] = _0x449408, this;
            }, _0xf746d5['render'] = function (_0x1f6481, _0x11d9b1, _0xe6998) {
                _0x2973e9['spriteCoun' + 't']++, _0x131d85['renders'][this['_renderTyp' + 'e']]['_fun'](this, _0x1f6481, _0x11d9b1 + this['_x'], _0xe6998 + this['_y']), this['_repaint'] = 0x0;
            }, _0xf746d5['drawToCanv' + 'as'] = function (_0x264728, _0x4e1ac7, _0xc510d4, _0x4a143d) {
                return _0x552e50['drawToCanv' + 'as'](this, this['_renderTyp' + 'e'], _0x264728, _0x4e1ac7, _0xc510d4, _0x4a143d);
            }, _0xf746d5['customRend' + 'er'] = function (_0xe48cf0, _0x2b550c, _0x1e028b) {
                this['_repaint'] = 0x3;
            }, _0xf746d5['_applyFilt' + 'ers'] = function () {
                if (!_0x4fec79['isWebGL']) {
                    var _0x42b086;
                    if (_0x42b086 = this['_cacheStyl' + 'e']['filters'], _0x42b086 && !(_0x42b086['length'] < 0x1)) {
                        for (var _0x4bf576 = 0x0, _0x504e2c = _0x42b086['length']; _0x504e2c > _0x4bf576; _0x4bf576++)
                            _0x42b086[_0x4bf576]['_action'] && _0x42b086[_0x4bf576]['_action']['apply'](this['_cacheStyl' + 'e']);
                    }
                }
            }, _0xf746d5['_setColorF' + 'ilter'] = function (_0x3b36b9) {
            }, _0xf746d5['_isHaveGlo' + 'wFilter'] = function () {
                var _0x35b6e9 = 0x0, _0x35b076 = 0x0;
                if (this['filters']) {
                    for (_0x35b6e9 = 0x0; _0x35b6e9 < this['filters']['length']; _0x35b6e9++)
                        if (0x8 == this['filters'][_0x35b6e9]['type'])
                            return !0x0;
                }
                for (_0x35b6e9 = 0x0, _0x35b076 = this['_children']['length']; _0x35b076 > _0x35b6e9; _0x35b6e9++)
                    if (this['_children'][_0x35b6e9]['_isHaveGlo' + 'wFilter']())
                        return !0x0;
                return !0x1;
            }, _0xf746d5['localToGlo' + 'bal'] = function (_0x3d24c5, _0x42dbac, _0x21476d) {
                void 0x0 === _0x42dbac && (_0x42dbac = !0x1), _0x42dbac === !0x0 && (_0x3d24c5 = new _0x251b03(_0x3d24c5['x'], _0x3d24c5['y']));
                var _0x4aca9c = this;
                for (_0x21476d = _0x21476d || _0x34a895['stage']; _0x4aca9c && !_0x4aca9c['destroyed'] && _0x4aca9c != _0x21476d;)
                    _0x3d24c5 = _0x4aca9c['toParentPo' + 'int'](_0x3d24c5), _0x4aca9c = _0x4aca9c['parent'];
                return _0x3d24c5;
            }, _0xf746d5['globalToLo' + 'cal'] = function (_0x4a459a, _0x53064a, _0x25adb0) {
                void 0x0 === _0x53064a && (_0x53064a = !0x1), _0x53064a && (_0x4a459a = new _0x251b03(_0x4a459a['x'], _0x4a459a['y']));
                var _0xeee8d2 = this, _0x18044e = [];
                for (_0x25adb0 = _0x25adb0 || _0x34a895['stage']; _0xeee8d2 && !_0xeee8d2['destroyed'] && _0xeee8d2 != _0x25adb0;)
                    _0x18044e['push'](_0xeee8d2), _0xeee8d2 = _0xeee8d2['parent'];
                for (var _0x16889d = _0x18044e['length'] - 0x1; _0x16889d >= 0x0;)
                    _0xeee8d2 = _0x18044e[_0x16889d], _0x4a459a = _0xeee8d2['fromParent' + 'Point'](_0x4a459a), _0x16889d--;
                return _0x4a459a;
            }, _0xf746d5['toParentPo' + 'int'] = function (_0xea7efa) {
                if (!_0xea7efa)
                    return _0xea7efa;
                _0xea7efa['x'] -= this['pivotX'], _0xea7efa['y'] -= this['pivotY'], this['transform'] && this['_transform']['transformP' + 'oint'](_0xea7efa), _0xea7efa['x'] += this['_x'], _0xea7efa['y'] += this['_y'];
                var _0x3ec4ae = this['_style']['scrollRect'];
                return _0x3ec4ae && (_0xea7efa['x'] -= _0x3ec4ae['x'], _0xea7efa['y'] -= _0x3ec4ae['y']), _0xea7efa;
            }, _0xf746d5['fromParent' + 'Point'] = function (_0xff56e4) {
                if (!_0xff56e4)
                    return _0xff56e4;
                _0xff56e4['x'] -= this['_x'], _0xff56e4['y'] -= this['_y'];
                var _0x3a4be4 = this['_style']['scrollRect'];
                return _0x3a4be4 && (_0xff56e4['x'] += _0x3a4be4['x'], _0xff56e4['y'] += _0x3a4be4['y']), this['transform'] && this['_transform']['invertTran' + 'sformPoint'](_0xff56e4), _0xff56e4['x'] += this['pivotX'], _0xff56e4['y'] += this['pivotY'], _0xff56e4;
            }, _0xf746d5['fromStageP' + 'oint'] = function (_0x363a6e) {
                return _0x363a6e;
            }, _0xf746d5['on'] = function (_0x5d3f4b, _0x45aada, _0x232b6b, _0x5ae292) {
                return 0x1 !== this['_mouseStat' + 'e'] && this['isMouseEve' + 'nt'](_0x5d3f4b) ? (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](0x40, !0x0), this['_parent'] && this['_$2__onDis' + 'play'](), this['_createLis' + 'tener'](_0x5d3f4b, _0x45aada, _0x232b6b, _0x5ae292, !0x1)) : _0x1af61b['prototype']['on']['call'](this, _0x5d3f4b, _0x45aada, _0x232b6b, _0x5ae292);
            }, _0xf746d5['once'] = function (_0x1b2563, _0x28bcdd, _0x5721a3, _0xd7b9cf) {
                return 0x1 !== this['_mouseStat' + 'e'] && this['isMouseEve' + 'nt'](_0x1b2563) ? (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](0x40, !0x0), this['_parent'] && this['_$2__onDis' + 'play'](), this['_createLis' + 'tener'](_0x1b2563, _0x28bcdd, _0x5721a3, _0xd7b9cf, !0x0)) : _0x1af61b['prototype']['once']['call'](this, _0x1b2563, _0x28bcdd, _0x5721a3, _0xd7b9cf);
            }, _0xf746d5['_$2__onDis' + 'play'] = function () {
                if (0x1 !== this['_mouseStat' + 'e']) {
                    var _0x5a1f8e = this;
                    for (_0x5a1f8e = _0x5a1f8e['parent']; _0x5a1f8e && 0x1 !== _0x5a1f8e['_mouseStat' + 'e'] && !_0x5a1f8e['_getBit'](0x40);)
                        _0x5a1f8e['mouseEnabl' + 'ed'] = !0x0, _0x5a1f8e['_setBit'](0x40, !0x0), _0x5a1f8e = _0x5a1f8e['parent'];
                }
            }, _0xf746d5['_setParent'] = function (_0x413bb3) {
                _0x1af61b['prototype']['_setParent']['call'](this, _0x413bb3), _0x413bb3 && this['_getBit'](0x40) && this['_$2__onDis' + 'play']();
            }, _0xf746d5['loadImage'] = function (_0x5fc8ce, _0x5bf822) {
                function _0x31db95() {
                    _0x1005fd['repaint'](0x3), _0x5bf822 && _0x5bf822['run']();
                }
                var _0x1005fd = this;
                if (null == _0x5fc8ce)
                    this['texture'] = null, _0x31db95();
                else {
                    var _0xbd7782 = _0x3943d1['getRes'](_0x5fc8ce);
                    _0xbd7782 || (_0xbd7782 = new _0x49c097(), _0xbd7782['load'](_0x5fc8ce), _0x3943d1['cacheRes'](_0x5fc8ce, _0xbd7782)), this['texture'] = _0xbd7782, _0xbd7782['getIsReady']() ? _0x31db95() : _0xbd7782['once']('ready', null, _0x31db95);
                }
                return this;
            }, _0xf746d5['repaint'] = function (_0x4313f2) {
                void 0x0 === _0x4313f2 && (_0x4313f2 = 0x2), this['_repaint'] & _0x4313f2 || (this['_repaint'] |= _0x4313f2, this['parentRepa' + 'int'](_0x4313f2)), this['_cacheStyl' + 'e'] && this['_cacheStyl' + 'e']['maskParent'] && this['_cacheStyl' + 'e']['maskParent']['repaint'](_0x4313f2);
            }, _0xf746d5['_needRepai' + 'nt'] = function () {
                return 0x2 & this['_repaint'] && this['_cacheStyl' + 'e']['enableCanv' + 'asRender'] && this['_cacheStyl' + 'e']['reCache'];
            }, _0xf746d5['_childChan' + 'ged'] = function (_0x1542fc) {
                this['_children']['length'] ? this['_renderTyp' + 'e'] |= 0x2000 : this['_renderTyp' + 'e'] &= -0x2001, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), _0x1542fc && this['_getBit'](0x20) && _0x34a895['systemTime' + 'r']['callLater'](this, this['updateZOrd' + 'er']), this['repaint'](0x3);
            }, _0xf746d5['parentRepa' + 'int'] = function (_0x3e0ada) {
                void 0x0 === _0x3e0ada && (_0x3e0ada = 0x2);
                var _0x1a825e = this['_parent'];
                !_0x1a825e || _0x1a825e['_repaint'] & _0x3e0ada || (_0x1a825e['_repaint'] |= _0x3e0ada, _0x1a825e['parentRepa' + 'int'](_0x3e0ada));
            }, _0xf746d5['_setMask'] = function (_0x2dea0c) {
            }, _0xf746d5['startDrag'] = function (_0x4db0b8, _0x4d8ecc, _0x3ffeca, _0x112c09, _0x286946, _0x4a20f7, _0x4a4b13) {
                void 0x0 === _0x4d8ecc && (_0x4d8ecc = !0x1), void 0x0 === _0x3ffeca && (_0x3ffeca = 0x0), void 0x0 === _0x112c09 && (_0x112c09 = 0x12c), void 0x0 === _0x4a20f7 && (_0x4a20f7 = !0x1), void 0x0 === _0x4a4b13 && (_0x4a4b13 = 0.92), this['_style']['dragging'] || (this['getStyle']()['dragging'] = new _0x530859()), this['_style']['dragging']['start'](this, _0x4db0b8, _0x4d8ecc, _0x3ffeca, _0x112c09, _0x286946, _0x4a20f7, _0x4a4b13);
            }, _0xf746d5['stopDrag'] = function () {
                this['_style']['dragging'] && this['_style']['dragging']['stop']();
            }, _0xf746d5['_setDispla' + 'y'] = function (_0x36270c) {
                _0x36270c || this['_cacheStyl' + 'e'] && (this['_cacheStyl' + 'e']['releaseCon' + 'text'](), this['_cacheStyl' + 'e']['releaseFil' + 'terCache'](), this['_cacheStyl' + 'e']['hasGlowFil' + 'ter'] && (this['_cacheStyl' + 'e']['hasGlowFil' + 'ter'] = !0x1)), _0x1af61b['prototype']['_setDispla' + 'y']['call'](this, _0x36270c);
            }, _0xf746d5['hitTestPoi' + 'nt'] = function (_0x1125d2, _0x45717a) {
                var _0x49b71c = this['globalToLo' + 'cal'](_0x251b03['TEMP']['setTo'](_0x1125d2, _0x45717a));
                _0x1125d2 = _0x49b71c['x'], _0x45717a = _0x49b71c['y'];
                var _0x4b136f = this['_style']['hitArea'] ? this['_style']['hitArea'] : this['_width'] > 0x0 && this['_height'] > 0x0 ? _0x22858b['TEMP']['setTo'](0x0, 0x0, this['_width'], this['_height']) : this['getSelfBou' + 'nds']();
                return _0x4b136f['contains'](_0x1125d2, _0x45717a);
            }, _0xf746d5['getMousePo' + 'int'] = function () {
                return this['globalToLo' + 'cal'](_0x251b03['TEMP']['setTo'](_0x34a895['stage']['mouseX'], _0x34a895['stage']['mouseY']));
            }, _0xf746d5['_setTextur' + 'e'] = function (_0x3faeb5) {
            }, _0xf746d5['_setRender' + 'Type'] = function (_0x4eb75c) {
            }, _0xf746d5['_setTranfo' + 'rmChange'] = function () {
                this['_tfChanged'] = !0x0, this['_renderTyp' + 'e'] |= 0x2, this['parentRepa' + 'int'](0x2);
            }, _0xf746d5['_setBgStyl' + 'eColor'] = function (_0x2d8bc5, _0x35763e, _0x58cac2, _0x38eabe, _0x45cd04) {
            }, _0xf746d5['_setBorder' + 'StyleColor'] = function (_0x235d3e, _0x604b1a, _0x2bad9f, _0x196efa, _0x1d60a0, _0x5e1147) {
            }, _0xf746d5['captureMou' + 'seEvent'] = function (_0x1f4f88) {
                _0x1a2fe4['instance']['setCapture'](this, _0x1f4f88);
            }, _0xf746d5['releaseMou' + 'seEvent'] = function () {
                _0x1a2fe4['instance']['releaseCap' + 'ture']();
            }, _0x71e09a(0x0, _0xf746d5, 'customRend' + 'erEnable', null, function (_0x4d60e5) {
                _0x4d60e5 && (this['_renderTyp' + 'e'] |= 0x800, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['_setCustom' + 'Render']());
            }), _0x71e09a(0x0, _0xf746d5, 'cacheAs', function () {
                return this['_cacheStyl' + 'e']['cacheAs'];
            }, function (_0x40c6ce) {
                _0x40c6ce !== this['_cacheStyl' + 'e']['userSetCac' + 'he'] && (_0x4fec79['isConchApp'] && 'bitmap' != _0x40c6ce || this['mask'] && 'normal' === _0x40c6ce || (this['_setCacheA' + 's'](_0x40c6ce), this['_getCacheS' + 'tyle']()['userSetCac' + 'he'] = _0x40c6ce, this['_checkCanv' + 'asEnable'](), this['repaint']()));
            }), _0x71e09a(0x0, _0xf746d5, 'globalScal' + 'eY', function () {
                for (var _0x1e8d6a = 0x1, _0x3a2861 = this; _0x3a2861 && _0x3a2861 !== _0x34a895['stage'];)
                    _0x1e8d6a *= _0x3a2861['scaleY'], _0x3a2861 = _0x3a2861['parent'];
                return _0x1e8d6a;
            }), _0x71e09a(0x0, _0xf746d5, 'hitArea', function () {
                return this['_style']['hitArea'];
            }, function (_0x287876) {
                this['getStyle']()['hitArea'] = _0x287876;
            }), _0x71e09a(0x0, _0xf746d5, 'staticCach' + 'e', function () {
                return this['_cacheStyl' + 'e']['staticCach' + 'e'];
            }, function (_0x44011f) {
                this['_getCacheS' + 'tyle']()['staticCach' + 'e'] = _0x44011f, _0x44011f || this['reCache']();
            }), _0x71e09a(0x0, _0xf746d5, 'displayWid' + 'th', function () {
                return this['width'] * this['scaleX'];
            }), _0x71e09a(0x0, _0xf746d5, 'zOrder', function () {
                return this['_zOrder'];
            }, function (_0x1149a3) {
                this['_zOrder'] != _0x1149a3 && (this['_zOrder'] = _0x1149a3, this['_parent'] && (_0x1149a3 && this['_parent']['_setBit'](0x20, !0x0), _0x34a895['systemTime' + 'r']['callLater'](this['_parent'], this['updateZOrd' + 'er'])));
            }), _0x71e09a(0x0, _0xf746d5, 'rotation', function () {
                return this['_style']['rotation'];
            }, function (_0x117863) {
                var _0x1bb49b = this['getStyle']();
                _0x1bb49b['rotation'] !== _0x117863 && (this['_setRotati' + 'on'](_0x117863), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'width', function () {
                return this['autoSize'] ? this['texture'] ? this['texture']['width'] : this['_graphics'] || 0x0 !== this['_children']['length'] ? this['getSelfBou' + 'nds']()['width'] : 0x0 : this['_width'] || (this['texture'] ? this['texture']['width'] : 0x0);
            }, function (_0x346720) {
                this['_width'] !== _0x346720 && (this['_width'] = _0x346720, this['_setWidth'](this['texture'], _0x346720), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'x', function () {
                return this['_x'];
            }, function (_0x5567fe) {
                if (!this['destroyed'] && this['_x'] !== _0x5567fe) {
                    this['_setX'](_0x5567fe), this['parentRepa' + 'int'](0x2);
                    var _0x49deea = this['_cacheStyl' + 'e']['maskParent'];
                    _0x49deea && _0x49deea['repaint'](0x2);
                }
            }), _0x71e09a(0x0, _0xf746d5, 'drawCallOp' + 'timize', function () {
                return this['_getBit'](0x100);
            }, function (_0x25de55) {
                this['_setBit'](0x100, _0x25de55);
            }), _0x71e09a(0x0, _0xf746d5, 'texture', function () {
                return this['_texture'];
            }, function (_0x5bafa6) {
                'string' == typeof _0x5bafa6 ? this['loadImage'](_0x5bafa6) : this['_texture'] != _0x5bafa6 && (this['_texture'] && this['_texture']['_removeRef' + 'erence'](), this['_texture'] = _0x5bafa6, _0x5bafa6 && _0x5bafa6['_addRefere' + 'nce'](), this['_setTextur' + 'e'](_0x5bafa6), this['_setWidth'](this['_texture'], this['width']), this['_setHeight'](this['_texture'], this['height']), _0x5bafa6 ? this['_renderTyp' + 'e'] |= 0x100 : this['_renderTyp' + 'e'] &= -0x101, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['repaint']());
            }), _0x71e09a(0x0, _0xf746d5, 'globalRota' + 'tion', function () {
                for (var _0x31d2fe = 0x0, _0x8c18e8 = this; _0x8c18e8 && _0x8c18e8 !== _0x34a895['stage'];)
                    _0x31d2fe += _0x8c18e8['rotation'], _0x8c18e8 = _0x8c18e8['parent'];
                return _0x31d2fe;
            }), _0x71e09a(0x0, _0xf746d5, 'y', function () {
                return this['_y'];
            }, function (_0x3280d2) {
                if (!this['destroyed'] && this['_y'] !== _0x3280d2) {
                    this['_setY'](_0x3280d2), this['parentRepa' + 'int'](0x2);
                    var _0x59ec9b = this['_cacheStyl' + 'e']['maskParent'];
                    _0x59ec9b && _0x59ec9b['repaint'](0x2);
                }
            }), _0x71e09a(0x0, _0xf746d5, 'displayHei' + 'ght', function () {
                return this['height'] * this['scaleY'];
            }), _0x71e09a(0x0, _0xf746d5, 'height', function () {
                return this['autoSize'] ? this['texture'] ? this['texture']['height'] : this['_graphics'] || 0x0 !== this['_children']['length'] ? this['getSelfBou' + 'nds']()['height'] : 0x0 : this['_height'] || (this['texture'] ? this['texture']['height'] : 0x0);
            }, function (_0x43201a) {
                this['_height'] !== _0x43201a && (this['_height'] = _0x43201a, this['_setHeight'](this['texture'], _0x43201a), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'blendMode', function () {
                return this['_style']['blendMode'];
            }, function (_0x3a5957) {
                this['_setBlendM' + 'ode'](_0x3a5957), this['getStyle']()['blendMode'] = _0x3a5957, _0x3a5957 && 'source-ove' + 'r' != _0x3a5957 ? this['_renderTyp' + 'e'] |= 0x4 : this['_renderTyp' + 'e'] &= -0x5, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['parentRepa' + 'int']();
            }), _0x71e09a(0x0, _0xf746d5, 'scaleX', function () {
                return this['_style']['scaleX'];
            }, function (_0x47545a) {
                var _0x4041b6 = this['getStyle']();
                _0x4041b6['scaleX'] !== _0x47545a && (this['_setScaleX'](_0x47545a), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'scaleY', function () {
                return this['_style']['scaleY'];
            }, function (_0x344dc9) {
                var _0x3c967b = this['getStyle']();
                _0x3c967b['scaleY'] !== _0x344dc9 && (this['_setScaleY'](_0x344dc9), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'stage', function () {
                return _0x34a895['stage'];
            }), _0x71e09a(0x0, _0xf746d5, 'skewX', function () {
                return this['_style']['skewX'];
            }, function (_0x19c426) {
                var _0x17ee35 = this['getStyle']();
                _0x17ee35['skewX'] !== _0x19c426 && (this['_setSkewX'](_0x19c426), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'scrollRect', function () {
                return this['_style']['scrollRect'];
            }, function (_0x24f6fa) {
                this['getStyle']()['scrollRect'] = _0x24f6fa, this['_setScroll' + 'Rect'](_0x24f6fa), this['repaint'](), _0x24f6fa ? this['_renderTyp' + 'e'] |= 0x40 : this['_renderTyp' + 'e'] &= -0x41, this['_setRender' + 'Type'](this['_renderTyp' + 'e']);
            }), _0x71e09a(0x0, _0xf746d5, 'skewY', function () {
                return this['_style']['skewY'];
            }, function (_0x25ad26) {
                var _0x1554ec = this['getStyle']();
                _0x1554ec['skewY'] !== _0x25ad26 && (this['_setSkewY'](_0x25ad26), this['_setTranfo' + 'rmChange']());
            }), _0x71e09a(0x0, _0xf746d5, 'transform', function () {
                return this['_tfChanged'] ? this['_adjustTra' + 'nsform']() : this['_transform'];
            }, function (_0x120264) {
                this['_tfChanged'] = !0x1;
                var _0x10cae7 = this['_transform'] || (this['_transform'] = this['_createTra' + 'nsform']());
                _0x120264['copyTo'](_0x10cae7), this['_setTransf' + 'orm'](_0x10cae7), _0x120264 && (this['_x'] = _0x120264['tx'], this['_y'] = _0x120264['ty'], _0x120264['tx'] = _0x120264['ty'] = 0x0), _0x120264 ? this['_renderTyp' + 'e'] |= 0x2 : this['_renderTyp' + 'e'] &= -0x3, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['parentRepa' + 'int']();
            }), _0x71e09a(0x0, _0xf746d5, 'pivotX', function () {
                return this['_getPivotX']();
            }, function (_0x5bd6ba) {
                this['_setPivotX'](_0x5bd6ba), this['repaint']();
            }), _0x71e09a(0x0, _0xf746d5, 'pivotY', function () {
                return this['_getPivotY']();
            }, function (_0x4684f9) {
                this['_setPivotY'](_0x4684f9), this['repaint']();
            }), _0x71e09a(0x0, _0xf746d5, 'alpha', function () {
                return this['_getAlpha']();
            }, function (_0x1757ca) {
                _0x1757ca = 0x0 > _0x1757ca ? 0x0 : _0x1757ca > 0x1 ? 0x1 : _0x1757ca, this['_setAlpha'](_0x1757ca);
            }), _0x71e09a(0x0, _0xf746d5, 'visible', function () {
                return this['_visible'];
            }, function (_0x162e47) {
                this['_visible'] !== _0x162e47 && (this['_visible'] = _0x162e47, this['parentRepa' + 'int'](0x3));
            }), _0x71e09a(0x0, _0xf746d5, 'graphics', function () {
                return this['_graphics'] || (this['graphics'] = new _0x42326c(), this['_graphics']['autoDestro' + 'y'] = !0x0), this['_graphics'];
            }, function (_0x5255d1) {
                this['_graphics'] && (this['_graphics']['_sp'] = null), this['_graphics'] = _0x5255d1, _0x5255d1 ? (this['_setGraphi' + 'cs'](_0x5255d1), this['_renderTyp' + 'e'] |= 0x200, _0x5255d1['_sp'] = this) : this['_renderTyp' + 'e'] &= -0x201, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['repaint']();
            }), _0x71e09a(0x0, _0xf746d5, 'filters', function () {
                return this['_cacheStyl' + 'e']['filters'];
            }, function (_0x338225) {
                _0x338225 && 0x0 === _0x338225['length'] && (_0x338225 = null), this['_cacheStyl' + 'e']['filters'] != _0x338225 && (this['_getCacheS' + 'tyle']()['filters'] = _0x338225 ? _0x338225['slice']() : null, (_0x4fec79['isWebGL'] || _0x4fec79['isConchApp']) && (_0x338225 && _0x338225['length'] ? (this['_setColorF' + 'ilter'](_0x338225[0x0]), this['_renderTyp' + 'e'] |= 0x10) : (this['_setColorF' + 'ilter'](null), this['_renderTyp' + 'e'] &= -0x11), this['_setRender' + 'Type'](this['_renderTyp' + 'e'])), _0x338225 && _0x338225['length'] > 0x0 ? (this['_getBit'](0x10) || this['_setBitUp'](0x10), (_0x4fec79['isWebGL'] || _0x4fec79['isConchApp']) && 0x1 == _0x338225['length'] && _0x338225[0x0] instanceof laya['filters']['ColorFilte' + 'r'] || (this['_getCacheS' + 'tyle']()['cacheForFi' + 'lters'] = !0x0, this['_checkCanv' + 'asEnable']())) : this['_cacheStyl' + 'e']['cacheForFi' + 'lters'] && (this['_cacheStyl' + 'e']['cacheForFi' + 'lters'] = !0x1, this['_checkCanv' + 'asEnable']()), this['_getCacheS' + 'tyle']()['hasGlowFil' + 'ter'] = this['_isHaveGlo' + 'wFilter'](), this['repaint']());
            }), _0x71e09a(0x0, _0xf746d5, 'mask', function () {
                return this['_cacheStyl' + 'e']['mask'];
            }, function (_0x4d872) {
                _0x4d872 && this['mask'] && this['mask']['_cacheStyl' + 'e']['maskParent'] || (this['_getCacheS' + 'tyle']()['mask'] = _0x4d872, this['_setMask'](_0x4d872), this['_checkCanv' + 'asEnable'](), _0x4d872 ? _0x4d872['_getCacheS' + 'tyle']()['maskParent'] = this : this['mask'] && (this['mask']['_getCacheS' + 'tyle']()['maskParent'] = null), this['_renderTyp' + 'e'] |= 0x20, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['parentRepa' + 'int'](0x3));
            }), _0x71e09a(0x0, _0xf746d5, 'mouseEnabl' + 'ed', function () {
                return this['_mouseStat' + 'e'] > 0x1;
            }, function (_0x64291) {
                this['_mouseStat' + 'e'] = _0x64291 ? 0x2 : 0x1;
            }), _0x71e09a(0x0, _0xf746d5, 'globalScal' + 'eX', function () {
                for (var _0x3aac80 = 0x1, _0x4a1bec = this; _0x4a1bec && _0x4a1bec !== _0x34a895['stage'];)
                    _0x3aac80 *= _0x4a1bec['scaleX'], _0x4a1bec = _0x4a1bec['parent'];
                return _0x3aac80;
            }), _0x71e09a(0x0, _0xf746d5, 'mouseX', function () {
                return this['getMousePo' + 'int']()['x'];
            }), _0x71e09a(0x0, _0xf746d5, 'mouseY', function () {
                return this['getMousePo' + 'int']()['y'];
            }), _0x71e09a(0x0, _0xf746d5, 'viewport', function () {
                return this['_style']['viewport'];
            }, function (_0x4be6c8) {
                if ('string' == typeof _0x4be6c8) {
                    var _0x300009;
                    _0x300009 = _0x4be6c8['split'](','), _0x300009['length'] > 0x3 && (_0x4be6c8 = new _0x22858b(parseFloat(_0x300009[0x0]), parseFloat(_0x300009[0x1]), parseFloat(_0x300009[0x2]), parseFloat(_0x300009[0x3])));
                }
                this['getStyle']()['viewport'] = _0x4be6c8;
            }), _0x51ea30['fromImage'] = function (_0x2e30ae) {
                return new _0x51ea30()['loadImage'](_0x2e30ae);
            }, _0x51ea30;
        }(_0x3fa3f0), _0x29aac0 = function (_0x29fd66) {
            function _0x20c9e4(_0x181a9a) {
                this['_audio'] = null, this['_onEnd'] = null, this['_resumePla' + 'y'] = null, _0x20c9e4['__super']['call'](this), this['_onEnd'] = _0x3b78ce['bind'](this['__onEnd'], this), this['_resumePla' + 'y'] = _0x3b78ce['bind'](this['__resumePl' + 'ay'], this), _0x181a9a['addEventLi' + 'stener']('ended', this['_onEnd']), this['_audio'] = _0x181a9a;
            }
            _0x4621f4(_0x20c9e4, 'laya.media' + '.h5audio.A' + 'udioSoundC' + 'hannel', _0x29fd66);
            var _0x321aef = _0x20c9e4['prototype'];
            return _0x321aef['__onEnd'] = function () {
                return 0x1 == this['loops'] ? (this['completeHa' + 'ndler'] && (_0x34a895['systemTime' + 'r']['once'](0xa, this, this['__runCompl' + 'ete'], [this['completeHa' + 'ndler']], !0x1), this['completeHa' + 'ndler'] = null), this['stop'](), void this['event']('complete')) : (this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, void this['play']());
            }, _0x321aef['__resumePl' + 'ay'] = function () {
                if (this['_audio'] && this['_audio']['removeEven' + 'tListener']('canplay', this['_resumePla' + 'y']), !this['isStopped'])
                    try {
                        this['_audio']['currentTim' + 'e'] = this['startTime'], _0x2ad6c5['container']['appendChil' + 'd'](this['_audio']), this['_audio']['play']();
                    } catch (_0x5c9462) {
                        this['event']('error');
                    }
            }, _0x321aef['play'] = function () {
                this['isStopped'] = !0x1;
                try {
                    this['_audio']['playbackRa' + 'te'] = _0x273f4b['playbackRa' + 'te'], this['_audio']['currentTim' + 'e'] = this['startTime'];
                } catch (_0x607986) {
                    return void this['_audio']['addEventLi' + 'stener']('canplay', this['_resumePla' + 'y']);
                }
                _0x273f4b['addChannel'](this), _0x2ad6c5['container']['appendChil' + 'd'](this['_audio']), 'play' in this['_audio'] && this['_audio']['play']();
            }, _0x321aef['stop'] = function () {
                this['isStopped'] = !0x0, _0x273f4b['removeChan' + 'nel'](this), this['completeHa' + 'ndler'] = null, this['_audio'] && ('pause' in this['_audio'] && _0x4fec79['isConchApp'] && this['_audio']['stop'](), this['_audio']['pause'](), this['_audio']['removeEven' + 'tListener']('ended', this['_onEnd']), this['_audio']['removeEven' + 'tListener']('canplay', this['_resumePla' + 'y']), _0x2ad6c5['onIE'] || this['_audio'] != _0x5886df['_musicAudi' + 'o'] && _0x2249dd['recover']('audio:' + this['url'], this['_audio']), _0x2ad6c5['removeElem' + 'ent'](this['_audio']), this['_audio'] = null);
            }, _0x321aef['pause'] = function () {
                this['isStopped'] = !0x0, _0x273f4b['removeChan' + 'nel'](this), 'pause' in this['_audio'] && this['_audio']['pause']();
            }, _0x321aef['resume'] = function () {
                this['_audio'] && (this['isStopped'] = !0x1, _0x273f4b['addChannel'](this), 'play' in this['_audio'] && this['_audio']['play']());
            }, _0x71e09a(0x0, _0x321aef, 'position', function () {
                return this['_audio'] ? this['_audio']['currentTim' + 'e'] : 0x0;
            }), _0x71e09a(0x0, _0x321aef, 'duration', function () {
                return this['_audio'] ? this['_audio']['duration'] : 0x0;
            }), _0x71e09a(0x0, _0x321aef, 'volume', function () {
                return this['_audio'] ? this['_audio']['volume'] : 0x1;
            }, function (_0x2157d6) {
                this['_audio'] && (this['_audio']['volume'] = _0x2157d6);
            }), _0x20c9e4;
        }(_0x32b3f6), _0x3cb2a4 = function (_0x22abf1) {
            function _0x30db65() {
                this['audioBuffe' + 'r'] = null, this['gain'] = null, this['bufferSour' + 'ce'] = null, this['_currentTi' + 'me'] = 0x0, this['_volume'] = 0x1, this['_startTime'] = 0x0, this['_pauseTime'] = 0x0, this['_onPlayEnd'] = null, this['context'] = _0x1807a3['ctx'], _0x30db65['__super']['call'](this), this['_onPlayEnd'] = _0x3b78ce['bind'](this['__onPlayEn' + 'd'], this), this['context']['createGain'] ? this['gain'] = this['context']['createGain']() : this['gain'] = this['context']['createGain' + 'Node']();
            }
            _0x4621f4(_0x30db65, 'laya.media' + '.webaudio.' + 'WebAudioSo' + 'undChannel', _0x22abf1);
            var _0x1e5e47 = _0x30db65['prototype'];
            return _0x1e5e47['play'] = function () {
                if (_0x273f4b['addChannel'](this), this['isStopped'] = !0x1, this['_clearBuff' + 'erSource'](), this['audioBuffe' + 'r']) {
                    var _0x1412b3 = this['context'], _0x209694 = this['gain'], _0x1758e9 = _0x1412b3['createBuff' + 'erSource']();
                    this['bufferSour' + 'ce'] = _0x1758e9, _0x1758e9['buffer'] = this['audioBuffe' + 'r'], _0x1758e9['connect'](_0x209694), _0x209694 && _0x209694['disconnect'](), _0x209694['connect'](_0x1412b3['destinatio' + 'n']), _0x1758e9['onended'] = this['_onPlayEnd'], this['startTime'] >= this['duration'] && (this['startTime'] = 0x0), this['_startTime'] = _0x2ad6c5['now'](), this['gain']['gain']['setTargetA' + 'tTime'] ? this['gain']['gain']['setTargetA' + 'tTime'](this['_volume'], this['context']['currentTim' + 'e'], 0.001) : this['gain']['gain']['value'] = this['_volume'], 0x0 == this['loops'] && (_0x1758e9['loop'] = !0x0), _0x1758e9['playbackRa' + 'te']['setTargetA' + 'tTime'] ? _0x1758e9['playbackRa' + 'te']['setTargetA' + 'tTime'](_0x273f4b['playbackRa' + 'te'], this['context']['currentTim' + 'e'], 0.001) : _0x1758e9['playbackRa' + 'te']['value'] = _0x273f4b['playbackRa' + 'te'], _0x1758e9['start'](0x0, this['startTime']), this['_currentTi' + 'me'] = 0x0;
                }
            }, _0x1e5e47['__onPlayEn' + 'd'] = function () {
                return 0x1 == this['loops'] ? (this['completeHa' + 'ndler'] && (_0x34a895['timer']['once'](0xa, this, this['__runCompl' + 'ete'], [this['completeHa' + 'ndler']], !0x1), this['completeHa' + 'ndler'] = null), this['stop'](), void this['event']('complete')) : (this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, void this['play']());
            }, _0x1e5e47['_clearBuff' + 'erSource'] = function () {
                if (this['bufferSour' + 'ce']) {
                    var _0x62c96f = this['bufferSour' + 'ce'];
                    _0x62c96f['stop'] ? _0x62c96f['stop'](0x0) : _0x62c96f['noteOff'](0x0), _0x62c96f['disconnect'](0x0), _0x62c96f['onended'] = null, _0x30db65['_tryCleanF' + 'ailed'] || this['_tryClearB' + 'uffer'](_0x62c96f), this['bufferSour' + 'ce'] = null;
                }
            }, _0x1e5e47['_tryClearB' + 'uffer'] = function (_0x43e522) {
                if (_0x2ad6c5['onMac'])
                    try {
                        _0x43e522['buffer'] = _0x1807a3['_miniBuffe' + 'r'];
                    } catch (_0x5270fa) {
                        _0x30db65['_tryCleanF' + 'ailed'] = !0x0;
                    }
                else
                    try {
                        _0x43e522['buffer'] = null;
                    } catch (_0x135f76) {
                        _0x30db65['_tryCleanF' + 'ailed'] = !0x0;
                    }
            }, _0x1e5e47['stop'] = function () {
                this['_clearBuff' + 'erSource'](), this['audioBuffe' + 'r'] = null, this['gain'] && this['gain']['disconnect'](), this['isStopped'] = !0x0, _0x273f4b['removeChan' + 'nel'](this), this['completeHa' + 'ndler'] = null, _0x273f4b['autoReleas' + 'eSound'] && _0x273f4b['disposeSou' + 'ndLater'](this['url']);
            }, _0x1e5e47['pause'] = function () {
                this['isStopped'] || (this['_pauseTime'] = this['position']), this['_clearBuff' + 'erSource'](), this['gain'] && this['gain']['disconnect'](), this['isStopped'] = !0x0, _0x273f4b['removeChan' + 'nel'](this), _0x273f4b['autoReleas' + 'eSound'] && _0x273f4b['disposeSou' + 'ndLater'](this['url']);
            }, _0x1e5e47['resume'] = function () {
                this['startTime'] = this['_pauseTime'], this['play']();
            }, _0x71e09a(0x0, _0x1e5e47, 'position', function () {
                return this['bufferSour' + 'ce'] ? (_0x2ad6c5['now']() - this['_startTime']) / 0x3e8 + this['startTime'] : 0x0;
            }), _0x71e09a(0x0, _0x1e5e47, 'duration', function () {
                return this['audioBuffe' + 'r'] ? this['audioBuffe' + 'r']['duration'] : 0x0;
            }), _0x71e09a(0x0, _0x1e5e47, 'volume', function () {
                return this['_volume'];
            }, function (_0x4c68fb) {
                this['isStopped'] || (this['_volume'] = _0x4c68fb, this['gain']['gain']['setTargetA' + 'tTime'] ? this['gain']['gain']['setTargetA' + 'tTime'](_0x4c68fb, this['context']['currentTim' + 'e'], 0.001) : this['gain']['gain']['value'] = _0x4c68fb);
            }), _0x30db65['_tryCleanF' + 'ailed'] = !0x1, _0x30db65['SetTargetD' + 'elay'] = 0.001, _0x30db65;
        }(_0x32b3f6), _0x50a1b2 = function (_0x30b1a0) {
            function _0xa949cd(_0x33f182) {
                _0xa949cd['__super']['call'](this), void 0x0 === _0x33f182 && (_0x33f182 = !0x1), _0x33f182 || !_0x4fec79['isWebGL'] ? this['_source'] = _0x2ad6c5['createElem' + 'ent']('canvas') : this['_source'] = this, this['lock'] = !0x0;
            }
            _0x4621f4(_0xa949cd, 'laya.resou' + 'rce.HTMLCa' + 'nvas', _0x30b1a0);
            var _0x2f142d = _0xa949cd['prototype'];
            return _0x2f142d['_getSource'] = function () {
                return this['_source'];
            }, _0x2f142d['clear'] = function () {
                this['_ctx'] && this['_ctx']['clear'](), this['_texture'] && (this['_texture']['destroy'](), this['_texture'] = null);
            }, _0x2f142d['destroy'] = function () {
                this['_ctx'] && this['_ctx']['destroy'](), this['_ctx'] = null;
            }, _0x2f142d['release'] = function () {
            }, _0x2f142d['_setContex' + 't'] = function (_0x1d7c67) {
                this['_ctx'] = _0x1d7c67;
            }, _0x2f142d['getContext'] = function (_0xf133cc, _0x586ffb) {
                return this['context'];
            }, _0x2f142d['getMemSize'] = function () {
                return 0x0;
            }, _0x2f142d['size'] = function (_0xd4755e, _0xe1a9a0) {
                (this['_width'] != _0xd4755e || this['_height'] != _0xe1a9a0 || this['_source'] && (this['_source']['width'] != _0xd4755e || this['_source']['height'] != _0xe1a9a0)) && (this['_width'] = _0xd4755e, this['_height'] = _0xe1a9a0, this['_setGPUMem' + 'ory'](_0xd4755e * _0xe1a9a0 * 0x4), this['_ctx'] && this['_ctx']['size'] && this['_ctx']['size'](_0xd4755e, _0xe1a9a0), this['_source'] && (this['_source']['height'] = _0xe1a9a0, this['_source']['width'] = _0xd4755e), this['_texture'] && (this['_texture']['destroy'](), this['_texture'] = null));
            }, _0x2f142d['getTexture'] = function () {
                return this['_texture'] || (this['_texture'] = new _0x49c097(this, _0x49c097['DEF_UV'])), this['_texture'];
            }, _0x2f142d['toBase64'] = function (_0xf55dd3, _0x2a9678, _0x4bfe95) {
                if (this['_source']) {
                    if (_0x4fec79['isConchApp'] && this['_source']['toBase64'])
                        this['_source']['toBase64'](_0xf55dd3, _0x2a9678, _0x4bfe95);
                    else {
                        var _0x5cc038 = this['_source']['toDataURL'](_0xf55dd3, _0x2a9678);
                        _0x4bfe95(_0x5cc038);
                    }
                }
            }, _0x71e09a(0x0, _0x2f142d, 'source', function () {
                return this['_source'];
            }), _0x71e09a(0x0, _0x2f142d, 'context', function () {
                return this['_ctx'] ? this['_ctx'] : (_0x4fec79['isWebGL'] && this['_source'] == this ? this['_ctx'] = new laya['webgl']['canvas']['WebGLConte' + 'xt2D']() : this['_ctx'] = this['_source']['getContext'](_0x4fec79['isConchApp'] ? 'layagl' : '2d'), this['_ctx']['_canvas'] = this, this['_ctx']);
            }), _0xa949cd;
        }(_0x421b7c), _0x12a05f = function (_0x2713df) {
            function _0x5ba2aa() {
                this['_clipPoint'] = null, this['_text'] = null, this['_isChanged'] = !0x1, this['_textWidth'] = 0x0, this['_textHeigh' + 't'] = 0x0, this['_lines'] = [], this['_lineWidth' + 's'] = [], this['_startX'] = 0x0, this['_startY'] = 0x0, this['_words'] = null, this['_charSize'] = {}, this['_valign'] = 'top', this['_color'] = '#000000', _0x5ba2aa['__super']['call'](this), this['_fontSize'] = _0x5ba2aa['defaultFon' + 'tSize'], this['_font'] = _0x5ba2aa['defaultFon' + 't'], this['overflow'] = 'visible', this['_style'] = _0x215376['EMPTY'];
            }
            _0x4621f4(_0x5ba2aa, 'laya.displ' + 'ay.Text', _0x2713df);
            var _0x254ba5 = _0x5ba2aa['prototype'];
            return _0x254ba5['getStyle'] = function () {
                return this['_style'] === _0x215376['EMPTY'] && (this['_style'] = _0x215376['create']()), this['_style'];
            }, _0x254ba5['_getTextSt' + 'yle'] = function () {
                return this['_style'] === _0x215376['EMPTY'] && (this['_style'] = _0x215376['create']()), this['_style'];
            }, _0x254ba5['destroy'] = function (_0x183b77) {
                void 0x0 === _0x183b77 && (_0x183b77 = !0x0), _0x2713df['prototype']['destroy']['call'](this, _0x183b77), this['_clipPoint'] = null, this['_lines'] = null, this['_lineWidth' + 's'] = null, this['_words'] = null, this['_charSize'] = null;
            }, _0x254ba5['_getBoundP' + 'ointsM'] = function (_0x767fdb) {
                void 0x0 === _0x767fdb && (_0x767fdb = !0x1);
                var _0x21c9a0 = _0x22858b['TEMP'];
                return _0x21c9a0['setTo'](0x0, 0x0, this['width'], this['height']), _0x21c9a0['_getBoundP' + 'oints']();
            }, _0x254ba5['getGraphic' + 'Bounds'] = function (_0x31dfb0) {
                void 0x0 === _0x31dfb0 && (_0x31dfb0 = !0x1);
                var _0x55379a = _0x22858b['TEMP'];
                return _0x55379a['setTo'](0x0, 0x0, this['width'], this['height']), _0x55379a;
            }, _0x254ba5['_getCSSSty' + 'le'] = function () {
                return this['_style'];
            }, _0x254ba5['lang'] = function (_0x3af693, _0x5481a2, _0xd8cda8, _0x5bf5a6, _0x4d3a97, _0x36ad17, _0x238c33, _0x4d786b, _0x197f7b, _0x3becf0, _0x13eb13) {
                if (_0x3af693 = _0x5ba2aa['langPacks'] && _0x5ba2aa['langPacks'][_0x3af693] ? _0x5ba2aa['langPacks'][_0x3af693] : _0x3af693, arguments['length'] < 0x2)
                    this['_text'] = _0x3af693;
                else {
                    for (var _0x1b29b9 = 0x0, _0x52a07b = arguments['length']; _0x52a07b > _0x1b29b9; _0x1b29b9++)
                        _0x3af693 = _0x3af693['replace']('{' + _0x1b29b9 + '}', arguments[_0x1b29b9 + 0x1]);
                    this['_text'] = _0x3af693;
                }
            }, _0x254ba5['_getContex' + 'tFont'] = function () {
                return (this['italic'] ? 'italic\x20' : '') + (this['bold'] ? 'bold\x20' : '') + this['fontSize'] + 'px\x20' + (_0x2ad6c5['onIPhone'] ? laya['display']['Text']['fontFamily' + 'Map'][this['font']] || this['font'] : this['font']);
            }, _0x254ba5['_isPassWor' + 'dMode'] = function () {
                var _0x11b3a8 = this['_style'], _0x2acc60 = _0x11b3a8['asPassword'];
                return 'prompt' in this && this['prompt'] == this['_text'] && (_0x2acc60 = !0x1), _0x2acc60;
            }, _0x254ba5['_getPassWo' + 'rdTxt'] = function (_0x12ac2a) {
                var _0xecf2fd, _0x5998e9 = _0x12ac2a['length'];
                _0xecf2fd = '';
                for (var _0x14790d = _0x5998e9; _0x14790d > 0x0; _0x14790d--)
                    _0xecf2fd += '●';
                return _0xecf2fd;
            }, _0x254ba5['_renderTex' + 't'] = function () {
                var _0x43cc75 = this['padding'], _0x5d6619 = this['_lines']['length'];
                'visible' != this['overflow'] && (_0x5d6619 = Math['min'](_0x5d6619, Math['floor']((this['height'] - _0x43cc75[0x0] - _0x43cc75[0x2]) / (this['leading'] + this['_charSize']['height'])) + 0x1));
                var _0x8eed19 = this['scrollY'] / (this['_charSize']['height'] + this['leading']) | 0x0, _0x5143ee = this['graphics'];
                _0x5143ee['clear'](!0x0);
                var _0x355034 = this['_getContex' + 'tFont']();
                _0x2ad6c5['context']['font'] = _0x355034;
                var _0x16d487 = _0x43cc75[0x3], _0x4efe98 = 'left', _0x4efce9 = this['_lines'], _0x2900d3 = this['leading'] + this['_charSize']['height'], _0x2683e7 = this['_style']['currBitmap' + 'Font'];
                _0x2683e7 && (_0x2900d3 = this['leading'] + _0x2683e7['getMaxHeig' + 'ht']());
                var _0x12f9fe = _0x43cc75[0x0];
                if (!_0x2683e7 && this['_width'] > 0x0 && this['_textWidth'] <= this['_width'] && ('right' == this['align'] ? (_0x4efe98 = 'right', _0x16d487 = this['_width'] - _0x43cc75[0x1]) : 'center' == this['align'] && (_0x4efe98 = 'center', _0x16d487 = 0.5 * this['_width'] + _0x43cc75[0x3] - _0x43cc75[0x1])), this['_height'] > 0x0) {
                    var _0x59b09f = this['_textHeigh' + 't'] > this['_height'] ? 'top' : this['valign'];
                    'middle' === _0x59b09f ? _0x12f9fe = 0.5 * (this['_height'] - _0x5d6619 * _0x2900d3) + _0x43cc75[0x0] - _0x43cc75[0x2] : 'bottom' === _0x59b09f && (_0x12f9fe = this['_height'] - _0x5d6619 * _0x2900d3 - _0x43cc75[0x2]);
                }
                var _0x48fd1b = this['_style'];
                if (_0x2683e7 && _0x2683e7['autoScaleS' + 'ize'])
                    var _0x16dcab = _0x2683e7['fontSize'] / this['fontSize'];
                if (this['_clipPoint']) {
                    if (_0x5143ee['save'](), _0x2683e7 && _0x2683e7['autoScaleS' + 'ize']) {
                        var _0x308693 = 0x0, _0x1d0f25 = 0x0;
                        _0x308693 = this['_width'] ? this['_width'] - _0x43cc75[0x3] - _0x43cc75[0x1] : this['_textWidth'], _0x1d0f25 = this['_height'] ? this['_height'] - _0x43cc75[0x0] - _0x43cc75[0x2] : this['_textHeigh' + 't'], _0x308693 *= _0x16dcab, _0x1d0f25 *= _0x16dcab, _0x5143ee['clipRect'](_0x43cc75[0x3], _0x43cc75[0x0], _0x308693, _0x1d0f25);
                    } else
                        _0x5143ee['clipRect'](_0x43cc75[0x3], _0x43cc75[0x0], this['_width'] ? this['_width'] - _0x43cc75[0x3] - _0x43cc75[0x1] : this['_textWidth'], this['_height'] ? this['_height'] - _0x43cc75[0x0] - _0x43cc75[0x2] : this['_textHeigh' + 't']);
                    this['repaint']();
                }
                var _0x23c3c8 = _0x48fd1b['asPassword'];
                'prompt' in this && this['prompt'] == this['_text'] && (_0x23c3c8 = !0x1);
                for (var _0x4745c1 = 0x0, _0x2c54ad = 0x0, _0x442d50 = Math['min'](this['_lines']['length'], _0x5d6619 + _0x8eed19) || 0x1, _0x2b5f92 = _0x8eed19; _0x442d50 > _0x2b5f92; _0x2b5f92++) {
                    var _0x312072, _0x381d26 = _0x4efce9[_0x2b5f92];
                    if (_0x23c3c8) {
                        var _0x51aa87 = _0x381d26['length'];
                        _0x381d26 = '';
                        for (var _0x27cbbe = _0x51aa87; _0x27cbbe > 0x0; _0x27cbbe--)
                            _0x381d26 += '●';
                    }
                    if (null == _0x381d26 && (_0x381d26 = ''), _0x4745c1 = _0x16d487 - (this['_clipPoint'] ? this['_clipPoint']['x'] : 0x0), _0x2c54ad = _0x12f9fe + _0x2900d3 * _0x2b5f92 - (this['_clipPoint'] ? this['_clipPoint']['y'] : 0x0), this['underline'] && this['_drawUnder' + 'line'](_0x4efe98, _0x4745c1, _0x2c54ad, _0x2b5f92), _0x2683e7) {
                        var _0x6dc6ca = this['width'];
                        _0x2683e7['autoScaleS' + 'ize'] && (_0x6dc6ca = this['width'] * _0x16dcab), _0x2683e7['_drawText'](_0x381d26, this, _0x4745c1, _0x2c54ad, this['align'], _0x6dc6ca);
                    } else
                        _0x4fec79['isWebGL'] ? (this['_words'] || (this['_words'] = []), _0x312072 = this['_words']['length'] > _0x2b5f92 - _0x8eed19 ? this['_words'][_0x2b5f92 - _0x8eed19] : new _0x25ea11(), _0x312072['setText'](_0x381d26)) : _0x312072 = _0x381d26, _0x48fd1b['stroke'] ? _0x5143ee['fillBorder' + 'Text'](_0x312072, _0x4745c1, _0x2c54ad, _0x355034, this['color'], _0x48fd1b['strokeColo' + 'r'], _0x48fd1b['stroke'], _0x4efe98) : _0x5143ee['fillText'](_0x312072, _0x4745c1, _0x2c54ad, _0x355034, this['color'], _0x4efe98);
                }
                if (_0x2683e7 && _0x2683e7['autoScaleS' + 'ize']) {
                    var _0x19fdb5 = 0x1 / _0x16dcab;
                    this['scale'](_0x19fdb5, _0x19fdb5);
                }
                this['_clipPoint'] && _0x5143ee['restore'](), this['_startX'] = _0x16d487, this['_startY'] = _0x12f9fe;
            }, _0x254ba5['_drawUnder' + 'line'] = function (_0x109078, _0x8668a5, _0x3beb92, _0x2190e8) {
                var _0x2d9587 = this['_lineWidth' + 's'][_0x2190e8];
                switch (_0x109078) {
                case 'center':
                    _0x8668a5 -= _0x2d9587 / 0x2;
                    break;
                case 'right':
                    _0x8668a5 -= _0x2d9587;
                    break;
                case 'left':
                }
                _0x3beb92 += this['_charSize']['height'], this['_graphics']['drawLine'](_0x8668a5, _0x3beb92, _0x8668a5 + _0x2d9587, _0x3beb92, this['underlineC' + 'olor'] || this['color'], 0x1);
            }, _0x254ba5['typeset'] = function () {
                return this['_isChanged'] = !0x1, this['_text'] ? (_0x4fec79['isConchApp'] ? _0xd373d9['conchTextC' + 'anvas']['font'] = this['_getContex' + 'tFont']() : _0x2ad6c5['context']['font'] = this['_getContex' + 'tFont'](), this['_lines']['length'] = 0x0, this['_lineWidth' + 's']['length'] = 0x0, this['_isPassWor' + 'dMode']() ? this['_parseLine' + 's'](this['_getPassWo' + 'rdTxt'](this['_text'])) : this['_parseLine' + 's'](this['_text']), this['_evalTextS' + 'ize'](), this['_checkEnab' + 'ledViewpor' + 'tOrNot']() ? this['_clipPoint'] || (this['_clipPoint'] = new _0x251b03(0x0, 0x0)) : this['_clipPoint'] = null, void this['_renderTex' + 't']()) : (this['_clipPoint'] = null, this['_textWidth'] = this['_textHeigh' + 't'] = 0x0, void this['graphics']['clear'](!0x0));
            }, _0x254ba5['_evalTextS' + 'ize'] = function () {
                var _0x596ab8 = NaN, _0x3818f7 = NaN;
                _0x596ab8 = Math['max']['apply'](this, this['_lineWidth' + 's']), _0x3818f7 = this['_style']['currBitmap' + 'Font'] ? this['_lines']['length'] * (this['_style']['currBitmap' + 'Font']['getMaxHeig' + 'ht']() + this['leading']) + this['padding'][0x0] + this['padding'][0x2] : this['_lines']['length'] * (this['_charSize']['height'] + this['leading']) + this['padding'][0x0] + this['padding'][0x2], (_0x596ab8 != this['_textWidth'] || _0x3818f7 != this['_textHeigh' + 't']) && (this['_textWidth'] = _0x596ab8, this['_textHeigh' + 't'] = _0x3818f7);
            }, _0x254ba5['_checkEnab' + 'ledViewpor' + 'tOrNot'] = function () {
                return 'scroll' == this['overflow'] && (this['_width'] > 0x0 && this['_textWidth'] > this['_width'] || this['_height'] > 0x0 && this['_textHeigh' + 't'] > this['_height']);
            }, _0x254ba5['changeText'] = function (_0x3ce338) {
                this['_text'] !== _0x3ce338 && (this['lang'](_0x3ce338 + ''), this['_graphics'] && this['_graphics']['replaceTex' + 't'](this['_text']) || this['typeset']());
            }, _0x254ba5['_parseLine' + 's'] = function (_0x5a5d4b) {
                var _0x384e46 = this['wordWrap'] || 'hidden' == this['overflow'];
                if (_0x384e46)
                    var _0x5f5017 = this['_getWordWr' + 'apWidth']();
                var _0x2642ac = this['_style']['currBitmap' + 'Font'];
                if (_0x2642ac)
                    this['_charSize']['width'] = _0x2642ac['getMaxWidt' + 'h'](), this['_charSize']['height'] = _0x2642ac['getMaxHeig' + 'ht']();
                else {
                    var _0x40b997 = null;
                    _0x40b997 = _0x4fec79['isConchApp'] ? _0xd373d9['conchTextC' + 'anvas']['measureTex' + 't'](this['_testWord']) : _0x2ad6c5['context']['measureTex' + 't'](_0x5ba2aa['_testWord']), this['_charSize']['width'] = _0x40b997['width'], this['_charSize']['height'] = _0x40b997['height'] || this['fontSize'];
                }
                for (var _0x5937e8 = _0x5a5d4b['replace'](/\r\n/g, '\x0a')['split']('\x0a'), _0x4de497 = 0x0, _0x19c2f8 = _0x5937e8['length']; _0x19c2f8 > _0x4de497; _0x4de497++) {
                    var _0x15a6a3 = _0x5937e8[_0x4de497];
                    _0x384e46 ? this['_parseLine'](_0x15a6a3, _0x5f5017) : (this['_lineWidth' + 's']['push'](this['_getTextWi' + 'dth'](_0x15a6a3)), this['_lines']['push'](_0x15a6a3));
                }
            }, _0x254ba5['_parseLine'] = function (_0x26d58d, _0x243333) {
                var _0x349013, _0x5004c9 = (_0x2ad6c5['context'], this['_lines']), _0x308817 = 0x0, _0xd5595f = NaN, _0x422ed3 = NaN, _0x56a382 = 0x0;
                if (_0xd5595f = this['_getTextWi' + 'dth'](_0x26d58d), _0x243333 >= _0xd5595f)
                    return _0x5004c9['push'](_0x26d58d), void this['_lineWidth' + 's']['push'](_0xd5595f);
                _0xd5595f = this['_charSize']['width'], _0x308817 = Math['floor'](_0x243333 / _0xd5595f), 0x0 == _0x308817 && (_0x308817 = 0x1), _0xd5595f = this['_getTextWi' + 'dth'](_0x26d58d['substring'](0x0, _0x308817)), _0x422ed3 = _0xd5595f;
                for (var _0x79306e = _0x308817, _0x1a663a = _0x26d58d['length']; _0x1a663a > _0x79306e; _0x79306e++)
                    if (_0xd5595f = this['_getTextWi' + 'dth'](_0x26d58d['charAt'](_0x79306e)), _0x422ed3 += _0xd5595f, _0x422ed3 > _0x243333) {
                        if (this['wordWrap']) {
                            var _0x24ae2c = _0x26d58d['substring'](_0x56a382, _0x79306e);
                            if (_0x24ae2c['charCodeAt'](_0x24ae2c['length'] - 0x1) < 0xff && (_0x349013 = /(?:\w|-)+$/['exec'](_0x24ae2c), _0x349013 && (_0x79306e = _0x349013['index'] + _0x56a382, 0x0 == _0x349013['index'] ? _0x79306e += _0x24ae2c['length'] : _0x24ae2c = _0x26d58d['substring'](_0x56a382, _0x79306e))), _0x5004c9['push'](_0x24ae2c), this['_lineWidth' + 's']['push'](_0x422ed3 - _0xd5595f), _0x56a382 = _0x79306e, !(_0x1a663a > _0x79306e + _0x308817)) {
                                _0x5004c9['push'](_0x26d58d['substring'](_0x56a382, _0x1a663a)), this['_lineWidth' + 's']['push'](this['_getTextWi' + 'dth'](_0x5004c9[_0x5004c9['length'] - 0x1])), _0x56a382 = -0x1;
                                break;
                            }
                            _0x79306e += _0x308817, _0xd5595f = this['_getTextWi' + 'dth'](_0x26d58d['substring'](_0x56a382, _0x79306e)), _0x422ed3 = _0xd5595f, _0x79306e--;
                        } else {
                            if ('hidden' == this['overflow'])
                                return _0x5004c9['push'](_0x26d58d['substring'](0x0, _0x79306e)), void this['_lineWidth' + 's']['push'](this['_getTextWi' + 'dth'](_0x5004c9[_0x5004c9['length'] - 0x1]));
                        }
                    }
                this['wordWrap'] && -0x1 != _0x56a382 && (_0x5004c9['push'](_0x26d58d['substring'](_0x56a382, _0x1a663a)), this['_lineWidth' + 's']['push'](this['_getTextWi' + 'dth'](_0x5004c9[_0x5004c9['length'] - 0x1])));
            }, _0x254ba5['_getTextWi' + 'dth'] = function (_0x48393f) {
                var _0x4377ff = this['_style']['currBitmap' + 'Font'];
                return _0x4377ff ? _0x4377ff['getTextWid' + 'th'](_0x48393f) : _0x4fec79['isConchApp'] ? _0xd373d9['conchTextC' + 'anvas']['measureTex' + 't'](_0x48393f)['width'] : _0x2ad6c5['context']['measureTex' + 't'](_0x48393f)['width'];
            }, _0x254ba5['_getWordWr' + 'apWidth'] = function () {
                var _0x4035fb = this['padding'], _0x59a5d0 = NaN, _0x3dc30c = this['_style']['currBitmap' + 'Font'];
                return _0x59a5d0 = _0x3dc30c && _0x3dc30c['autoScaleS' + 'ize'] ? this['_width'] * (_0x3dc30c['fontSize'] / this['fontSize']) : this['_width'], 0x0 >= _0x59a5d0 && (_0x59a5d0 = this['wordWrap'] ? 0x64 : _0x2ad6c5['width']), 0x0 >= _0x59a5d0 && (_0x59a5d0 = 0x64), _0x59a5d0 - _0x4035fb[0x3] - _0x4035fb[0x1];
            }, _0x254ba5['getCharPoi' + 'nt'] = function (_0xf6c3df, _0x4766ac) {
                this['_isChanged'] && _0x34a895['systemTime' + 'r']['runCallLat' + 'er'](this, this['typeset']);
                for (var _0x555279 = 0x0, _0x5f49bc = this['_lines'], _0x4e4561 = 0x0, _0xf54fda = 0x0, _0x133c70 = _0x5f49bc['length']; _0x133c70 > _0xf54fda; _0xf54fda++) {
                    if (_0x555279 += _0x5f49bc[_0xf54fda]['length'], _0x555279 > _0xf6c3df) {
                        var _0x1aad78 = _0xf54fda;
                        break;
                    }
                    _0x4e4561 = _0x555279;
                }
                var _0x289588 = (this['italic'] ? 'italic\x20' : '') + (this['bold'] ? 'bold\x20' : '') + this['fontSize'] + 'px\x20' + this['font'];
                _0x2ad6c5['context']['font'] = _0x289588;
                var _0x514a46 = this['_getTextWi' + 'dth'](this['_text']['substring'](_0x4e4561, _0xf6c3df)), _0xee38c3 = _0x4766ac || new _0x251b03();
                return _0xee38c3['setTo'](this['_startX'] + _0x514a46 - (this['_clipPoint'] ? this['_clipPoint']['x'] : 0x0), this['_startY'] + _0x1aad78 * (this['_charSize']['height'] + this['leading']) - (this['_clipPoint'] ? this['_clipPoint']['y'] : 0x0));
            }, _0x71e09a(0x0, _0x254ba5, 'width', function () {
                return this['_width'] ? this['_width'] : this['textWidth'] + this['padding'][0x1] + this['padding'][0x3];
            }, function (_0x3c5dad) {
                _0x3c5dad != this['_width'] && (_0x34a895['superSet'](_0x4bc7a0, this, 'width', _0x3c5dad), this['isChanged'] = !0x0, this['borderColo' + 'r'] && this['_setBorder' + 'StyleColor'](0x0, 0x0, this['width'], this['height'], this['borderColo' + 'r'], 0x1));
            }), _0x71e09a(0x0, _0x254ba5, 'textWidth', function () {
                return this['_isChanged'] && _0x34a895['systemTime' + 'r']['runCallLat' + 'er'](this, this['typeset']), this['_textWidth'];
            }), _0x71e09a(0x0, _0x254ba5, 'height', function () {
                return this['_height'] ? this['_height'] : this['textHeight'];
            }, function (_0x9d7616) {
                _0x9d7616 != this['_height'] && (_0x34a895['superSet'](_0x4bc7a0, this, 'height', _0x9d7616), this['isChanged'] = !0x0, this['borderColo' + 'r'] && this['_setBorder' + 'StyleColor'](0x0, 0x0, this['width'], this['height'], this['borderColo' + 'r'], 0x1));
            }), _0x71e09a(0x0, _0x254ba5, 'textHeight', function () {
                return this['_isChanged'] && _0x34a895['systemTime' + 'r']['runCallLat' + 'er'](this, this['typeset']), this['_textHeigh' + 't'];
            }), _0x71e09a(0x0, _0x254ba5, 'padding', function () {
                return this['_style']['padding'];
            }, function (_0x5eec4f) {
                if ('string' == typeof _0x5eec4f) {
                    var _0x4f0312;
                    _0x4f0312 = _0x5eec4f['split'](',');
                    var _0x50d343 = 0x0, _0x555390 = 0x0;
                    for (_0x555390 = _0x4f0312['length']; _0x4f0312['length'] < 0x4;)
                        _0x4f0312['push'](0x0);
                    for (_0x50d343 = 0x0; _0x555390 > _0x50d343; _0x50d343++)
                        _0x4f0312[_0x50d343] = parseFloat(_0x4f0312[_0x50d343]) || 0x0;
                    _0x5eec4f = _0x4f0312;
                }
                this['_getTextSt' + 'yle']()['padding'] = _0x5eec4f, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'bold', function () {
                return this['_style']['bold'];
            }, function (_0x4a04d3) {
                this['_getTextSt' + 'yle']()['bold'] = _0x4a04d3, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'text', function () {
                return this['_text'] || '';
            }, function (_0x57d702) {
                this['_text'] !== _0x57d702 && (this['lang'](_0x57d702 + ''), this['isChanged'] = !0x0, this['event']('change'), this['borderColo' + 'r'] && this['_setBorder' + 'StyleColor'](0x0, 0x0, this['width'], this['height'], this['borderColo' + 'r'], 0x1));
            }), _0x71e09a(0x0, _0x254ba5, 'color', function () {
                return this['_color'];
            }, function (_0x56f003) {
                this['_color'] != _0x56f003 && (this['_color'] = _0x56f003, !this['_isChanged'] && this['_graphics'] ? this['_graphics']['replaceTex' + 'tColor'](this['color']) : this['isChanged'] = !0x0);
            }), _0x71e09a(0x0, _0x254ba5, 'font', function () {
                return this['_font'];
            }, function (_0x25f703) {
                this['_style']['currBitmap' + 'Font'] && (this['_getTextSt' + 'yle']()['currBitmap' + 'Font'] = null, this['scale'](0x1, 0x1)), _0x5ba2aa['_bitmapFon' + 'ts'] && _0x5ba2aa['_bitmapFon' + 'ts'][_0x25f703] && (this['_getTextSt' + 'yle']()['currBitmap' + 'Font'] = _0x5ba2aa['_bitmapFon' + 'ts'][_0x25f703]), this['_font'] = _0x25f703, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'fontSize', function () {
                return this['_fontSize'];
            }, function (_0x385c79) {
                this['_fontSize'] != _0x385c79 && (this['_fontSize'] = _0x385c79, this['isChanged'] = !0x0);
            }), _0x71e09a(0x0, _0x254ba5, 'italic', function () {
                return this['_style']['italic'];
            }, function (_0x2a9bf8) {
                this['_getTextSt' + 'yle']()['italic'] = _0x2a9bf8, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'align', function () {
                return this['_style']['align'];
            }, function (_0x1b9e9f) {
                this['_getTextSt' + 'yle']()['align'] = _0x1b9e9f, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'valign', function () {
                return this['_valign'];
            }, function (_0x3d0114) {
                this['_valign'] = _0x3d0114, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'wordWrap', function () {
                return this['_style']['wordWrap'];
            }, function (_0x593f0c) {
                this['_getTextSt' + 'yle']()['wordWrap'] = _0x593f0c, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'leading', function () {
                return this['_style']['leading'];
            }, function (_0x19a567) {
                this['_getTextSt' + 'yle']()['leading'] = _0x19a567, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'bgColor', function () {
                return this['_style']['bgColor'];
            }, function (_0x2b55ca) {
                this['_getTextSt' + 'yle']()['bgColor'] = _0x2b55ca, this['_renderTyp' + 'e'] |= 0x80, this['_setBgStyl' + 'eColor'](0x0, 0x0, this['width'], this['height'], _0x2b55ca), this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'borderColo' + 'r', function () {
                return this['_style']['borderColo' + 'r'];
            }, function (_0x3dfde2) {
                this['_getTextSt' + 'yle']()['borderColo' + 'r'] = _0x3dfde2, this['_renderTyp' + 'e'] |= 0x80, this['_setBorder' + 'StyleColor'](0x0, 0x0, this['width'], this['height'], _0x3dfde2, 0x1), this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'stroke', function () {
                return this['_style']['stroke'];
            }, function (_0x393aae) {
                this['_getTextSt' + 'yle']()['stroke'] = _0x393aae, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'strokeColo' + 'r', function () {
                return this['_style']['strokeColo' + 'r'];
            }, function (_0x40db7f) {
                this['_getTextSt' + 'yle']()['strokeColo' + 'r'] = _0x40db7f, this['isChanged'] = !0x0;
            }), _0x71e09a(0x0, _0x254ba5, 'isChanged', null, function (_0x4b6bff) {
                this['_isChanged'] !== _0x4b6bff && (this['_isChanged'] = _0x4b6bff, _0x4b6bff && _0x34a895['systemTime' + 'r']['callLater'](this, this['typeset']));
            }), _0x71e09a(0x0, _0x254ba5, 'scrollX', function () {
                return this['_clipPoint'] ? this['_clipPoint']['x'] : 0x0;
            }, function (_0xb78db2) {
                if (!('scroll' != this['overflow'] || this['textWidth'] < this['_width']) && this['_clipPoint']) {
                    _0xb78db2 = _0xb78db2 < this['padding'][0x3] ? this['padding'][0x3] : _0xb78db2;
                    var _0x5c05d5 = this['_textWidth'] - this['_width'];
                    _0xb78db2 = _0xb78db2 > _0x5c05d5 ? _0x5c05d5 : _0xb78db2, this['_clipPoint']['x'] = _0xb78db2, this['_renderTex' + 't']();
                }
            }), _0x71e09a(0x0, _0x254ba5, 'scrollY', function () {
                return this['_clipPoint'] ? this['_clipPoint']['y'] : 0x0;
            }, function (_0x3d19e3) {
                if (!('scroll' != this['overflow'] || this['textHeight'] < this['_height']) && this['_clipPoint']) {
                    _0x3d19e3 = _0x3d19e3 < this['padding'][0x0] ? this['padding'][0x0] : _0x3d19e3;
                    var _0x456236 = this['_textHeigh' + 't'] - this['_height'];
                    _0x3d19e3 = _0x3d19e3 > _0x456236 ? _0x456236 : _0x3d19e3, this['_clipPoint']['y'] = _0x3d19e3, this['_renderTex' + 't']();
                }
            }), _0x71e09a(0x0, _0x254ba5, 'maxScrollX', function () {
                return this['textWidth'] < this['_width'] ? 0x0 : this['_textWidth'] - this['_width'];
            }), _0x71e09a(0x0, _0x254ba5, 'maxScrollY', function () {
                return this['textHeight'] < this['_height'] ? 0x0 : this['_textHeigh' + 't'] - this['_height'];
            }), _0x71e09a(0x0, _0x254ba5, 'lines', function () {
                return this['_isChanged'] && this['typeset'](), this['_lines'];
            }), _0x71e09a(0x0, _0x254ba5, 'underlineC' + 'olor', function () {
                return this['_style']['underlineC' + 'olor'];
            }, function (_0x19a5b8) {
                this['_getTextSt' + 'yle']()['underlineC' + 'olor'] = _0x19a5b8, this['_isChanged'] || this['_renderTex' + 't']();
            }), _0x71e09a(0x0, _0x254ba5, 'underline', function () {
                return this['_style']['underline'];
            }, function (_0x3eb4cd) {
                this['_getTextSt' + 'yle']()['underline'] = _0x3eb4cd;
            }), _0x5ba2aa['defaultFon' + 'tStr'] = function () {
                return _0x5ba2aa['defaultFon' + 'tSize'] + 'px\x20' + _0x5ba2aa['defaultFon' + 't'];
            }, _0x5ba2aa['registerBi' + 'tmapFont'] = function (_0x46f9f0, _0x44d284) {
                _0x5ba2aa['_bitmapFon' + 'ts'] || (_0x5ba2aa['_bitmapFon' + 'ts'] = {}), _0x5ba2aa['_bitmapFon' + 'ts'][_0x46f9f0] = _0x44d284;
            }, _0x5ba2aa['unregister' + 'BitmapFont'] = function (_0x5b8b38, _0x190f41) {
                if (void 0x0 === _0x190f41 && (_0x190f41 = !0x0), _0x5ba2aa['_bitmapFon' + 'ts'] && _0x5ba2aa['_bitmapFon' + 'ts'][_0x5b8b38]) {
                    var _0xec8a7f = _0x5ba2aa['_bitmapFon' + 'ts'][_0x5b8b38];
                    _0x190f41 && _0xec8a7f['destroy'](), delete _0x5ba2aa['_bitmapFon' + 'ts'][_0x5b8b38];
                }
            }, _0x5ba2aa['VISIBLE'] = 'visible', _0x5ba2aa['SCROLL'] = 'scroll', _0x5ba2aa['HIDDEN'] = 'hidden', _0x5ba2aa['defaultFon' + 'tSize'] = 0xc, _0x5ba2aa['defaultFon' + 't'] = 'Arial', _0x5ba2aa['langPacks'] = null, _0x5ba2aa['isComplexT' + 'ext'] = !0x1, _0x5ba2aa['_testWord'] = '游', _0x5ba2aa['_bitmapFon' + 'ts'] = null, _0x5ba2aa['CharacterC' + 'ache'] = !0x0, _0x5ba2aa['RightToLef' + 't'] = !0x1, _0x5043ef(_0x5ba2aa, [
                'fontFamily' + 'Map',
                function () {
                    return this['fontFamily' + 'Map'] = {
                        '报隶': '报隶-简',
                        '黑体': '黑体-简',
                        '楷体': '楷体-简',
                        '兰亭黑': '兰亭黑-简',
                        '隶变': '隶变-简',
                        '凌慧体': '凌慧体-简',
                        '翩翩体': '翩翩体-简',
                        '苹方': '苹方-简',
                        '手札体': '手札体-简',
                        '宋体': '宋体-简',
                        '娃娃体': '娃娃体-简',
                        '魏碑': '魏碑-简',
                        '行楷': '行楷-简',
                        '雅痞': '雅痞-简',
                        '圆体': '圆体-简'
                    };
                }
            ]), _0x5ba2aa;
        }(_0x4bc7a0), _0x55568a = (function (_0x52f226) {
            function _0x4240a7() {
                this['url'] = null, this['_channel'] = null, this['_tar'] = null, this['_playEvent' + 's'] = null, this['_stopEvent' + 's'] = null, _0x4240a7['__super']['call'](this), this['visible'] = !0x1, this['on']('added', this, this['_onParentC' + 'hange']), this['on']('removed', this, this['_onParentC' + 'hange']);
            }
            _0x4621f4(_0x4240a7, 'laya.media' + '.SoundNode', _0x52f226);
            var _0x3dced5 = _0x4240a7['prototype'];
            return _0x3dced5['_onParentC' + 'hange'] = function () {
                this['target'] = this['parent'];
            }, _0x3dced5['play'] = function (_0x365ced, _0x337380) {
                void 0x0 === _0x365ced && (_0x365ced = 0x1), isNaN(_0x365ced) && (_0x365ced = 0x1), this['url'] && (this['stop'](), this['_channel'] = _0x273f4b['playSound'](this['url'], _0x365ced, _0x337380));
            }, _0x3dced5['stop'] = function () {
                this['_channel'] && !this['_channel']['isStopped'] && this['_channel']['stop'](), this['_channel'] = null;
            }, _0x3dced5['_setPlayAc' + 'tion'] = function (_0x2a3779, _0x5cee5f, _0x534133, _0x131130) {
                void 0x0 === _0x131130 && (_0x131130 = !0x0), this[_0x534133] && _0x2a3779 && (_0x131130 ? _0x2a3779['on'](_0x5cee5f, this, this[_0x534133]) : _0x2a3779['off'](_0x5cee5f, this, this[_0x534133]));
            }, _0x3dced5['_setPlayAc' + 'tions'] = function (_0x519097, _0x234b32, _0xbfb14f, _0x34049d) {
                if (void 0x0 === _0x34049d && (_0x34049d = !0x0), _0x519097 && _0x234b32) {
                    var _0xf35e00 = _0x234b32['split'](','), _0x31c85b = 0x0, _0xd46c6c = 0x0;
                    for (_0xd46c6c = _0xf35e00['length'], _0x31c85b = 0x0; _0xd46c6c > _0x31c85b; _0x31c85b++)
                        this['_setPlayAc' + 'tion'](_0x519097, _0xf35e00[_0x31c85b], _0xbfb14f, _0x34049d);
                }
            }, _0x71e09a(0x0, _0x3dced5, 'playEvent', null, function (_0x5c6657) {
                this['_playEvent' + 's'] = _0x5c6657, _0x5c6657 && this['_tar'] && this['_setPlayAc' + 'tions'](this['_tar'], _0x5c6657, 'play');
            }), _0x71e09a(0x0, _0x3dced5, 'target', null, function (_0x7afedf) {
                this['_tar'] && (this['_setPlayAc' + 'tions'](this['_tar'], this['_playEvent' + 's'], 'play', !0x1), this['_setPlayAc' + 'tions'](this['_tar'], this['_stopEvent' + 's'], 'stop', !0x1)), this['_tar'] = _0x7afedf, this['_tar'] && (this['_setPlayAc' + 'tions'](this['_tar'], this['_playEvent' + 's'], 'play', !0x0), this['_setPlayAc' + 'tions'](this['_tar'], this['_stopEvent' + 's'], 'stop', !0x0));
            }), _0x71e09a(0x0, _0x3dced5, 'stopEvent', null, function (_0x592afa) {
                this['_stopEvent' + 's'] = _0x592afa, _0x592afa && this['_tar'] && this['_setPlayAc' + 'tions'](this['_tar'], _0x592afa, 'stop');
            }), _0x4240a7;
        }(_0x4bc7a0), function (_0x560f34) {
            function _0x4457d0() {
                _0x4457d0['__super']['call'](this);
            }
            _0x4621f4(_0x4457d0, 'laya.resou' + 'rce.HTMLIm' + 'age', _0x560f34);
            var _0x4d981f = _0x4457d0['prototype'];
            return _0x4d981f['loadImageS' + 'ource'] = function (_0x5d8ddd) {
                var _0x275bbb = _0x5d8ddd['width'], _0x235f95 = _0x5d8ddd['height'];
                if (0x0 >= _0x275bbb || 0x0 >= _0x235f95)
                    throw new Error('HTMLImage:' + 'width\x20or\x20h' + 'eight\x20must' + '\x20large\x20tha' + 'n\x200.');
                this['_width'] = _0x275bbb, this['_height'] = _0x235f95, this['_source'] = _0x5d8ddd, this['_setGPUMem' + 'ory'](_0x275bbb * _0x235f95 * 0x4), this['_activeRes' + 'ource']();
            }, _0x4d981f['_disposeRe' + 'source'] = function () {
                this['_source'] && (this['_source'] = null, this['_setGPUMem' + 'ory'](0x0));
            }, _0x4d981f['_getSource'] = function () {
                return this['_source'];
            }, _0x4457d0['create'] = function (_0x4dd02e, _0xf1ce87) {
                return new _0x4457d0();
            }, _0x4457d0;
        }(_0x421b7c)), _0x174293 = function (_0x21d35c) {
            function _0x153f48() {
                this['loop'] = !0x1, this['wrapMode'] = 0x0, this['_index'] = 0x0, this['_count'] = 0x0, this['_isPlaying'] = !0x1, this['_labels'] = null, this['_isReverse'] = !0x1, this['_frameRate' + 'Changed'] = !0x1, this['_actionNam' + 'e'] = null, this['_controlNo' + 'de'] = null, _0x153f48['__super']['call'](this), this['_interval'] = _0x238506['animationI' + 'nterval'], this['_setBitUp'](0x10);
            }
            _0x4621f4(_0x153f48, 'laya.displ' + 'ay.Animati' + 'onBase', _0x21d35c);
            var _0x2b53bc = _0x153f48['prototype'];
            return _0x2b53bc['play'] = function (_0xa2bcf2, _0x486897, _0x122edd) {
                void 0x0 === _0xa2bcf2 && (_0xa2bcf2 = 0x0), void 0x0 === _0x486897 && (_0x486897 = !0x0), void 0x0 === _0x122edd && (_0x122edd = ''), this['_isPlaying'] = !0x0, this['_actionNam' + 'e'] = _0x122edd, this['index'] = 'string' == typeof _0xa2bcf2 ? this['_getFrameB' + 'yLabel'](_0xa2bcf2) : _0xa2bcf2, this['loop'] = _0x486897, this['_isReverse'] = 0x1 === this['wrapMode'], 0x0 == this['index'] && this['_isReverse'] && (this['index'] = this['count'] - 0x1), this['interval'] > 0x0 && this['timerLoop'](this['interval'], this, this['_frameLoop'], null, !0x0, !0x0);
            }, _0x2b53bc['_getFrameB' + 'yLabel'] = function (_0x367db7) {
                for (var _0x5b39fe = 0x0; _0x5b39fe < this['_count']; _0x5b39fe++) {
                    var _0x195ddf = this['_labels'][_0x5b39fe];
                    if (_0x195ddf && _0x195ddf['indexOf'](_0x367db7) > -0x1)
                        return _0x5b39fe;
                }
                return 0x0;
            }, _0x2b53bc['_frameLoop'] = function () {
                if (this['_isReverse']) {
                    if (this['_index']--, this['_index'] < 0x0) {
                        if (!this['loop'])
                            return this['_index'] = 0x0, this['stop'](), void this['event']('complete');
                        0x2 == this['wrapMode'] ? (this['_index'] = this['_count'] > 0x0 ? 0x1 : 0x0, this['_isReverse'] = !0x1) : this['_index'] = this['_count'] - 0x1, this['event']('complete');
                    }
                } else {
                    if (this['_index']++, this['_index'] >= this['_count']) {
                        if (!this['loop'])
                            return this['_index']--, this['stop'](), void this['event']('complete');
                        0x2 == this['wrapMode'] ? (this['_index'] = this['_count'] - 0x2 >= 0x0 ? this['_count'] - 0x2 : 0x0, this['_isReverse'] = !0x0) : this['_index'] = 0x0, this['event']('complete');
                    }
                }
                this['index'] = this['_index'];
            }, _0x2b53bc['_setContro' + 'lNode'] = function (_0x1b3cb0) {
                this['_controlNo' + 'de'] && (this['_controlNo' + 'de']['off']('display', this, this['_resumePla' + 'y']), this['_controlNo' + 'de']['off']('undisplay', this, this['_resumePla' + 'y'])), this['_controlNo' + 'de'] = _0x1b3cb0, _0x1b3cb0 && _0x1b3cb0 != this && (_0x1b3cb0['on']('display', this, this['_resumePla' + 'y']), _0x1b3cb0['on']('undisplay', this, this['_resumePla' + 'y']));
            }, _0x2b53bc['_setDispla' + 'y'] = function (_0x1b3a9f) {
                _0x21d35c['prototype']['_setDispla' + 'y']['call'](this, _0x1b3a9f), this['_resumePla' + 'y']();
            }, _0x2b53bc['_resumePla' + 'y'] = function () {
                this['_isPlaying'] && (this['_controlNo' + 'de']['displayedI' + 'nStage'] ? this['play'](this['_index'], this['loop'], this['_actionNam' + 'e']) : this['clearTimer'](this, this['_frameLoop']));
            }, _0x2b53bc['stop'] = function () {
                this['_isPlaying'] = !0x1, this['clearTimer'](this, this['_frameLoop']);
            }, _0x2b53bc['addLabel'] = function (_0x3ff2c3, _0x4014c9) {
                this['_labels'] || (this['_labels'] = {}), this['_labels'][_0x4014c9] || (this['_labels'][_0x4014c9] = []), this['_labels'][_0x4014c9]['push'](_0x3ff2c3);
            }, _0x2b53bc['removeLabe' + 'l'] = function (_0x3a244c) {
                if (_0x3a244c) {
                    if (this['_labels']) {
                        for (var _0x464261 in this['_labels'])
                            this['_removeLab' + 'elFromList'](this['_labels'][_0x464261], _0x3a244c);
                    }
                } else
                    this['_labels'] = null;
            }, _0x2b53bc['_removeLab' + 'elFromList'] = function (_0x351af8, _0x303fa1) {
                if (_0x351af8) {
                    for (var _0x26b838 = _0x351af8['length'] - 0x1; _0x26b838 >= 0x0; _0x26b838--)
                        _0x351af8[_0x26b838] == _0x303fa1 && _0x351af8['splice'](_0x26b838, 0x1);
                }
            }, _0x2b53bc['gotoAndSto' + 'p'] = function (_0x534486) {
                this['index'] = 'string' == typeof _0x534486 ? this['_getFrameB' + 'yLabel'](_0x534486) : _0x534486, this['stop']();
            }, _0x2b53bc['_displayTo' + 'Index'] = function (_0x3cce62) {
            }, _0x2b53bc['clear'] = function () {
                return this['stop'](), this['_labels'] = null, this;
            }, _0x71e09a(0x0, _0x2b53bc, 'interval', function () {
                return this['_interval'];
            }, function (_0x325b00) {
                this['_interval'] != _0x325b00 && (this['_frameRate' + 'Changed'] = !0x0, this['_interval'] = _0x325b00, this['_isPlaying'] && _0x325b00 > 0x0 && this['timerLoop'](_0x325b00, this, this['_frameLoop'], null, !0x0, !0x0));
            }), _0x71e09a(0x0, _0x2b53bc, 'isPlaying', function () {
                return this['_isPlaying'];
            }), _0x71e09a(0x0, _0x2b53bc, 'index', function () {
                return this['_index'];
            }, function (_0x2b521b) {
                if (this['_index'] = _0x2b521b, this['_displayTo' + 'Index'](_0x2b521b), this['_labels'] && this['_labels'][_0x2b521b]) {
                    for (var _0x98d893 = this['_labels'][_0x2b521b], _0x46714a = 0x0, _0x17b2ce = _0x98d893['length']; _0x17b2ce > _0x46714a; _0x46714a++)
                        this['event']('label', _0x98d893[_0x46714a]);
                }
            }), _0x71e09a(0x0, _0x2b53bc, 'count', function () {
                return this['_count'];
            }), _0x153f48['WRAP_POSIT' + 'IVE'] = 0x0, _0x153f48['WRAP_REVER' + 'SE'] = 0x1, _0x153f48['WRAP_PINGP' + 'ONG'] = 0x2, _0x153f48;
        }(_0x4bc7a0), _0x5d2d7a = function (_0x2d6108) {
            function _0x9a2c40() {
                function _0x3b3585() {
                    'hidden' == _0x2ad6c5['document'][_0x50d852] ? (_0x3b9574['_isVisibil' + 'ity'] = !0x1, _0x5357ec['_isInputti' + 'ng']() && (_0xe66919['inputEleme' + 'nt']['target']['focus'] = !0x1)) : _0x3b9574['_isVisibil' + 'ity'] = !0x0, _0x3b9574['renderingE' + 'nabled'] = _0x3b9574['_isVisibil' + 'ity'], _0x5357ec['event']('visibility' + 'change');
                }
                this['focus'] = null, this['_frameRate'] = 'fast', this['designWidt' + 'h'] = 0x0, this['designHeig' + 'ht'] = 0x0, this['canvasRota' + 'tion'] = !0x1, this['canvasDegr' + 'ee'] = 0x0, this['renderingE' + 'nabled'] = !0x0, this['screenAdap' + 'tationEnab' + 'led'] = !0x0, this['_screenMod' + 'e'] = 'none', this['_scaleMode'] = 'noscale', this['_alignV'] = 'top', this['_alignH'] = 'left', this['_bgColor'] = 'black', this['_mouseMove' + 'Time'] = 0x0, this['_renderCou' + 'nt'] = 0x0, this['_safariOff' + 'setY'] = 0x0, this['_frameStar' + 'tTime'] = 0x0, this['_isFocused'] = !0x1, this['_isVisibil' + 'ity'] = !0x1, this['_wgColor'] = [
                    0x0,
                    0x0,
                    0x0,
                    0x1
                ], this['_scene3Ds'] = [], this['_globalRep' + 'aintSet'] = !0x1, this['_globalRep' + 'aintGet'] = !0x1, this['_curUIBase'] = null, _0x9a2c40['__super']['call'](this), this['offset'] = new _0x251b03(), this['_canvasTra' + 'nsform'] = new _0x250bb7(), this['_previousO' + 'rientation'] = _0x2ad6c5['window']['orientatio' + 'n'], this['_3dUI'] = [];
                var _0x3b9574 = this;
                this['transform'] = _0x250bb7['create'](), this['mouseEnabl' + 'ed'] = !0x0, this['hitTestPri' + 'or'] = !0x0, this['autoSize'] = !0x1, this['_setBit'](0x80, !0x0), this['_setBit'](0x2, !0x0), this['_isFocused'] = !0x0, this['_isVisibil' + 'ity'] = !0x0;
                var _0x33c881 = _0x2ad6c5['window'], _0x5357ec = this;
                _0x33c881['addEventLi' + 'stener']('focus', function () {
                    _0x3b9574['_isFocused'] = !0x0, _0x5357ec['event']('focus'), _0x5357ec['event']('focuschang' + 'e');
                }), _0x33c881['addEventLi' + 'stener']('blur', function () {
                    _0x3b9574['_isFocused'] = !0x1, _0x5357ec['event']('blur'), _0x5357ec['event']('focuschang' + 'e'), _0x5357ec['_isInputti' + 'ng']() && (_0xe66919['inputEleme' + 'nt']['target']['focus'] = !0x1);
                });
                var _0x50d852 = 'visibility' + 'State', _0x438337 = 'visibility' + 'change', _0x16d9ec = _0x33c881['document'];
                'undefined' != typeof _0x16d9ec['hidden'] ? (_0x438337 = 'visibility' + 'change', _0x50d852 = 'visibility' + 'State') : 'undefined' != typeof _0x16d9ec['mozHidden'] ? (_0x438337 = 'mozvisibil' + 'itychange', _0x50d852 = 'mozVisibil' + 'ityState') : 'undefined' != typeof _0x16d9ec['msHidden'] ? (_0x438337 = 'msvisibili' + 'tychange', _0x50d852 = 'msVisibili' + 'tyState') : 'undefined' != typeof _0x16d9ec['webkitHidd' + 'en'] && (_0x438337 = 'webkitvisi' + 'bilitychan' + 'ge', _0x50d852 = 'webkitVisi' + 'bilityStat' + 'e'), _0x33c881['document']['addEventLi' + 'stener'](_0x438337, _0x3b3585), _0x33c881['addEventLi' + 'stener']('resize', function () {
                    var _0x454cc2 = _0x2ad6c5['window']['orientatio' + 'n'];
                    null != _0x454cc2 && _0x454cc2 != _0x3b9574['_previousO' + 'rientation'] && _0x5357ec['_isInputti' + 'ng']() && (_0xe66919['inputEleme' + 'nt']['target']['focus'] = !0x1), _0x3b9574['_previousO' + 'rientation'] = _0x454cc2, _0x5357ec['_isInputti' + 'ng']() || (_0x2ad6c5['onSafari'] && (_0x5357ec['_safariOff' + 'setY'] = (_0x2ad6c5['window']['__innerHei' + 'ght'] || _0x2ad6c5['document']['body']['clientHeig' + 'ht'] || _0x2ad6c5['document']['documentEl' + 'ement']['clientHeig' + 'ht']) - _0x2ad6c5['window']['innerHeigh' + 't']), _0x5357ec['_resetCanv' + 'as']());
                }), _0x33c881['addEventLi' + 'stener']('orientatio' + 'nchange', function (_0x588df3) {
                    _0x5357ec['_resetCanv' + 'as']();
                }), this['on']('mousemove', this, this['_onmouseMo' + 've']), _0x2ad6c5['onMobile'] && this['on']('mousedown', this, this['_onmouseMo' + 've']);
            }
            _0x4621f4(_0x9a2c40, 'laya.displ' + 'ay.Stage', _0x2d6108);
            var _0x56ca1e = _0x9a2c40['prototype'];
            return _0x56ca1e['_isInputti' + 'ng'] = function () {
                return _0x2ad6c5['onMobile'] && _0xe66919['isInputtin' + 'g'];
            }, _0x56ca1e['_changeCan' + 'vasSize'] = function () {
                this['setScreenS' + 'ize'](_0x2ad6c5['clientWidt' + 'h'] * _0x2ad6c5['pixelRatio'], _0x2ad6c5['clientHeig' + 'ht'] * _0x2ad6c5['pixelRatio']);
            }, _0x56ca1e['_resetCanv' + 'as'] = function () {
                this['screenAdap' + 'tationEnab' + 'led'] && this['_changeCan' + 'vasSize']();
            }, _0x56ca1e['setScreenS' + 'ize'] = function (_0x19dd71, _0x5dcd19) {
                var _0x221098 = !0x1;
                if ('none' !== this['_screenMod' + 'e']) {
                    var _0x2282b0 = 0x1 > _0x19dd71 / _0x5dcd19 ? 'vertical' : 'horizontal';
                    if (_0x221098 = _0x2282b0 !== this['_screenMod' + 'e']) {
                        var _0x383057 = _0x5dcd19;
                        _0x5dcd19 = _0x19dd71, _0x19dd71 = _0x383057;
                    }
                }
                this['canvasRota' + 'tion'] = _0x221098;
                var _0x13ef02 = _0x4fec79['_mainCanva' + 's'], _0x223151 = _0x13ef02['source']['style'], _0x4f6e3f = this['_canvasTra' + 'nsform']['identity'](), _0x2f557f = this['_scaleMode'], _0x42b7f0 = _0x19dd71 / this['designWidt' + 'h'], _0x305ae4 = _0x5dcd19 / this['designHeig' + 'ht'], _0x12051c = this['designWidt' + 'h'], _0x3b973c = this['designHeig' + 'ht'], _0x300b89 = _0x19dd71, _0x46b954 = _0x5dcd19, _0xe75e9b = _0x2ad6c5['pixelRatio'];
                switch (this['_width'] = this['designWidt' + 'h'], this['_height'] = this['designHeig' + 'ht'], _0x2f557f) {
                case 'noscale':
                    _0x42b7f0 = _0x305ae4 = 0x1, _0x300b89 = this['designWidt' + 'h'], _0x46b954 = this['designHeig' + 'ht'];
                    break;
                case 'showall':
                    _0x42b7f0 = _0x305ae4 = Math['min'](_0x42b7f0, _0x305ae4), _0x12051c = _0x300b89 = Math['round'](this['designWidt' + 'h'] * _0x42b7f0), _0x3b973c = _0x46b954 = Math['round'](this['designHeig' + 'ht'] * _0x305ae4);
                    break;
                case 'noborder':
                    _0x42b7f0 = _0x305ae4 = Math['max'](_0x42b7f0, _0x305ae4), _0x300b89 = Math['round'](this['designWidt' + 'h'] * _0x42b7f0), _0x46b954 = Math['round'](this['designHeig' + 'ht'] * _0x305ae4);
                    break;
                case 'full':
                    _0x42b7f0 = _0x305ae4 = 0x1, this['_width'] = _0x12051c = _0x19dd71, this['_height'] = _0x3b973c = _0x5dcd19;
                    break;
                case 'fixedwidth':
                    _0x305ae4 = _0x42b7f0, this['_height'] = _0x3b973c = Math['round'](_0x5dcd19 / _0x42b7f0);
                    break;
                case 'fixedheigh' + 't':
                    _0x42b7f0 = _0x305ae4, this['_width'] = _0x12051c = Math['round'](_0x19dd71 / _0x305ae4);
                    break;
                case 'fixedauto':
                    _0x19dd71 / _0x5dcd19 < this['designWidt' + 'h'] / this['designHeig' + 'ht'] ? (_0x305ae4 = _0x42b7f0, this['_height'] = _0x3b973c = Math['round'](_0x5dcd19 / _0x42b7f0)) : (_0x42b7f0 = _0x305ae4, this['_width'] = _0x12051c = Math['round'](_0x19dd71 / _0x305ae4));
                }
                _0x42b7f0 *= this['scaleX'], _0x305ae4 *= this['scaleY'], 0x1 === _0x42b7f0 && 0x1 === _0x305ae4 ? this['transform']['identity']() : (this['transform']['a'] = this['_formatDat' + 'a'](_0x42b7f0 / (_0x300b89 / _0x12051c)), this['transform']['d'] = this['_formatDat' + 'a'](_0x305ae4 / (_0x46b954 / _0x3b973c))), _0x4fec79['isConchApp'] && (this['_conchData']['_float32Da' + 'ta'][0xa] = this['_formatDat' + 'a'](_0x42b7f0 / (_0x300b89 / _0x12051c)), this['_conchData']['_float32Da' + 'ta'][0xb] = this['_formatDat' + 'a'](_0x305ae4 / (_0x46b954 / _0x3b973c)), this['_conchData']['_float32Da' + 'ta'][0xf] = 0x1), _0x13ef02['size'](_0x12051c, _0x3b973c), _0x552e50['changeWebG' + 'LSize'](_0x12051c, _0x3b973c), _0x4f6e3f['scale'](_0x300b89 / _0x12051c / _0xe75e9b, _0x46b954 / _0x3b973c / _0xe75e9b), 'left' === this['_alignH'] ? this['offset']['x'] = 0x0 : 'right' === this['_alignH'] ? this['offset']['x'] = _0x19dd71 - _0x300b89 : this['offset']['x'] = 0.5 * (_0x19dd71 - _0x300b89) / _0xe75e9b, 'top' === this['_alignV'] ? this['offset']['y'] = 0x0 : 'bottom' === this['_alignV'] ? this['offset']['y'] = _0x5dcd19 - _0x46b954 : this['offset']['y'] = 0.5 * (_0x5dcd19 - _0x46b954) / _0xe75e9b, this['offset']['x'] = Math['round'](this['offset']['x']), this['offset']['y'] = Math['round'](this['offset']['y']), _0x4f6e3f['translate'](this['offset']['x'], this['offset']['y']), this['_safariOff' + 'setY'] && _0x4f6e3f['translate'](0x0, this['_safariOff' + 'setY']), this['canvasDegr' + 'ee'] = 0x0, _0x221098 && ('horizontal' === this['_screenMod' + 'e'] ? (_0x4f6e3f['rotate'](Math['PI'] / 0x2), _0x4f6e3f['translate'](_0x5dcd19 / _0xe75e9b, 0x0), this['canvasDegr' + 'ee'] = 0x5a) : (_0x4f6e3f['rotate'](-Math['PI'] / 0x2), _0x4f6e3f['translate'](0x0, _0x19dd71 / _0xe75e9b), this['canvasDegr' + 'ee'] = -0x5a)), _0x4f6e3f['a'] = this['_formatDat' + 'a'](_0x4f6e3f['a']), _0x4f6e3f['d'] = this['_formatDat' + 'a'](_0x4f6e3f['d']), _0x4f6e3f['tx'] = this['_formatDat' + 'a'](_0x4f6e3f['tx']), _0x4f6e3f['ty'] = this['_formatDat' + 'a'](_0x4f6e3f['ty']), this['transform'] = this['transform'], _0x223151['transformO' + 'rigin'] = _0x223151['webkitTran' + 'sformOrigi' + 'n'] = _0x223151['msTransfor' + 'mOrigin'] = _0x223151['mozTransfo' + 'rmOrigin'] = _0x223151['oTransform' + 'Origin'] = '0px\x200px\x200p' + 'x', _0x223151['transform'] = _0x223151['webkitTran' + 'sform'] = _0x223151['msTransfor' + 'm'] = _0x223151['mozTransfo' + 'rm'] = _0x223151['oTransform'] = 'matrix(' + _0x4f6e3f['toString']() + ')', this['_safariOff' + 'setY'] && _0x4f6e3f['translate'](0x0, -this['_safariOff' + 'setY']), _0x4f6e3f['translate'](parseInt(_0x223151['left']) || 0x0, parseInt(_0x223151['top']) || 0x0), this['visible'] = !0x0, this['_repaint'] |= 0x2, this['event']('resize');
            }, _0x56ca1e['_formatDat' + 'a'] = function (_0x90255d) {
                return Math['abs'](_0x90255d) < 0.000001 ? 0x0 : Math['abs'](0x1 - _0x90255d) < 0.001 ? _0x90255d > 0x0 ? 0x1 : -0x1 : _0x90255d;
            }, _0x56ca1e['getMousePo' + 'int'] = function () {
                return _0x251b03['TEMP']['setTo'](this['mouseX'], this['mouseY']);
            }, _0x56ca1e['repaint'] = function (_0x57328e) {
                void 0x0 === _0x57328e && (_0x57328e = 0x2), this['_repaint'] |= _0x57328e;
            }, _0x56ca1e['repaintFor' + 'Native'] = function (_0x1108ca) {
                void 0x0 === _0x1108ca && (_0x1108ca = 0x2), this['_conchData']['_int32Data'][0x4] |= _0x1108ca;
            }, _0x56ca1e['parentRepa' + 'int'] = function (_0x143846) {
                void 0x0 === _0x143846 && (_0x143846 = 0x2);
            }, _0x56ca1e['_loop'] = function () {
                return this['_globalRep' + 'aintGet'] = this['_globalRep' + 'aintSet'], this['_globalRep' + 'aintSet'] = !0x1, this['render'](_0x4fec79['_context'], 0x0, 0x0), !0x0;
            }, _0x56ca1e['getFrameTm'] = function () {
                return this['_frameStar' + 'tTime'];
            }, _0x56ca1e['_onmouseMo' + 've'] = function (_0x2457ed) {
                this['_mouseMove' + 'Time'] = _0x2ad6c5['now']();
            }, _0x56ca1e['getTimeFro' + 'mFrameStar' + 't'] = function () {
                return _0x2ad6c5['now']() - this['_frameStar' + 'tTime'];
            }, _0x56ca1e['render'] = function (_0x19e60e, _0x29e90b, _0x1cb3ee) {
                if (_0x9a2c40['_dbgSprite']['graphics']['clear'](), 'sleep' === this['_frameRate']) {
                    var _0x4ad8a7 = _0x2ad6c5['now']();
                    if (!(_0x4ad8a7 - this['_frameStar' + 'tTime'] >= 0x3e8))
                        return;
                    this['_frameStar' + 'tTime'] = _0x4ad8a7;
                } else {
                    if (!this['_visible'])
                        return this['_renderCou' + 'nt']++, void (this['_renderCou' + 'nt'] % 0x5 === 0x0 && (_0x53e0be['I']['_update'](), _0x2973e9['loopCount']++, this['_updateTim' + 'ers']()));
                    this['_frameStar' + 'tTime'] = _0x2ad6c5['now']();
                }
                this['_renderCou' + 'nt']++;
                var _0x1de561 = 'mouse' === this['_frameRate'] ? this['_frameStar' + 'tTime'] - this['_mouseMove' + 'Time'] < 0x7d0 ? 'fast' : 'slow' : this['_frameRate'], _0xe2b77f = 'slow' !== _0x1de561, _0x5ad828 = this['_renderCou' + 'nt'] % 0x2 === 0x0;
                if (_0x2973e9['renderSlow'] = !_0xe2b77f, (_0xe2b77f || _0x5ad828) && (_0x53e0be['I']['_update'](), _0x2973e9['loopCount']++, !_0x4fec79['isConchApp'] && _0x4fec79['isWebGL'] && this['renderingE' + 'nabled'])) {
                    for (var _0x530ccf = 0x0, _0x16ed9e = this['_scene3Ds']['length']; _0x16ed9e > _0x530ccf; _0x530ccf++)
                        this['_scene3Ds'][_0x530ccf]['_update']();
                    _0x19e60e['clear'](), _0x2d6108['prototype']['render']['call'](this, _0x19e60e, _0x29e90b, _0x1cb3ee), _0x2973e9['_show'] && _0x2973e9['_sp'] && _0x2973e9['_sp']['render'](_0x19e60e, _0x29e90b, _0x1cb3ee);
                }
                _0x9a2c40['_dbgSprite']['render'](_0x19e60e, 0x0, 0x0), (_0xe2b77f || !_0x5ad828) && (this['renderingE' + 'nabled'] && (_0x4fec79['isWebGL'] ? (_0x552e50['clear'](this['_bgColor']), _0x19e60e['flush'](), _0x2a3233['instance'] && _0x2a3233['getInstanc' + 'e']()['endDispose']()) : (_0x552e50['clear'](this['_bgColor']), _0x2d6108['prototype']['render']['call'](this, _0x19e60e, _0x29e90b, _0x1cb3ee), _0x2973e9['_show'] && _0x2973e9['_sp'] && _0x2973e9['_sp']['render'](_0x19e60e, _0x29e90b, _0x1cb3ee), _0x4fec79['isConchApp'] && _0x19e60e['gl']['commit']())), this['_updateTim' + 'ers']());
            }, _0x56ca1e['_updateTim' + 'ers'] = function () {
                _0x34a895['systemTime' + 'r']['_update'](), _0x34a895['startTimer']['_update'](), _0x34a895['physicsTim' + 'er']['_update'](), _0x34a895['updateTime' + 'r']['_update'](), _0x34a895['lateTimer']['_update'](), _0x34a895['timer']['_update']();
            }, _0x56ca1e['renderToNa' + 'tive'] = function (_0x49db72, _0x8a2a2, _0x58ead9) {
                return this['_renderCou' + 'nt']++, _0x2973e9['loopCount']++, this['_visible'] ? (_0x53e0be['I']['_update'](), this['_updateTim' + 'ers'](), _0x53e0be['I']['_update'](), void (this['renderingE' + 'nabled'] && (_0x552e50['clear'](this['_bgColor']), _0x2d6108['prototype']['render']['call'](this, _0x49db72, _0x8a2a2, _0x58ead9), _0x2973e9['_show'] && _0x2973e9['_sp'] && _0x2973e9['_sp']['render'](_0x49db72, _0x8a2a2, _0x58ead9), _0x49db72['gl']['commit']()))) : void (this['_renderCou' + 'nt'] % 0x5 === 0x0 && (_0x53e0be['I']['_update'](), _0x2973e9['loopCount']++, this['_updateTim' + 'ers'](), _0x53e0be['I']['_update']()));
            }, _0x56ca1e['_requestFu' + 'llscreen'] = function () {
                var _0x47ba35 = _0x2ad6c5['document']['documentEl' + 'ement'];
                _0x47ba35['requestFul' + 'lscreen'] ? _0x47ba35['requestFul' + 'lscreen']() : _0x47ba35['mozRequest' + 'FullScreen'] ? _0x47ba35['mozRequest' + 'FullScreen']() : _0x47ba35['webkitRequ' + 'estFullscr' + 'een'] ? _0x47ba35['webkitRequ' + 'estFullscr' + 'een']() : _0x47ba35['msRequestF' + 'ullscreen'] && _0x47ba35['msRequestF' + 'ullscreen']();
            }, _0x56ca1e['_fullScree' + 'nChanged'] = function () {
                _0x34a895['stage']['event']('fullscreen' + 'change');
            }, _0x56ca1e['exitFullsc' + 'reen'] = function () {
                var _0x101266 = _0x2ad6c5['document'];
                _0x101266['exitFullsc' + 'reen'] ? _0x101266['exitFullsc' + 'reen']() : _0x101266['mozCancelF' + 'ullScreen'] ? _0x101266['mozCancelF' + 'ullScreen']() : _0x101266['webkitExit' + 'Fullscreen'] && _0x101266['webkitExit' + 'Fullscreen']();
            }, _0x56ca1e['isGlobalRe' + 'paint'] = function () {
                return this['_globalRep' + 'aintGet'];
            }, _0x56ca1e['setGlobalR' + 'epaint'] = function () {
                this['_globalRep' + 'aintSet'] = !0x0;
            }, _0x56ca1e['add3DUI'] = function (_0x4c553b) {
                var _0x25fb64 = _0x4c553b['rootView'];
                this['_3dUI']['indexOf'](_0x25fb64) >= 0x0 || this['_3dUI']['push'](_0x25fb64);
            }, _0x56ca1e['remove3DUI'] = function (_0x1161bd) {
                var _0x44f1b7 = _0x1161bd['rootView'], _0x2201bc = this['_3dUI']['indexOf'](_0x44f1b7);
                return _0x2201bc >= 0x0 ? (this['_3dUI']['splice'](_0x2201bc, 0x1), !0x0) : !0x1;
            }, _0x71e09a(0x0, _0x56ca1e, 'clientScal' + 'eY', function () {
                return this['_transform'] ? this['_transform']['getScaleY']() : 0x1;
            }), _0x71e09a(0x0, _0x56ca1e, 'width', _0x2d6108['prototype']['_$get_widt' + 'h'], function (_0x379610) {
                this['designWidt' + 'h'] = _0x379610, _0x34a895['superSet'](_0x4bc7a0, this, 'width', _0x379610), _0x34a895['systemTime' + 'r']['callLater'](this, this['_changeCan' + 'vasSize']);
            }), _0x71e09a(0x0, _0x56ca1e, 'isFocused', function () {
                return this['_isFocused'];
            }), _0x71e09a(0x0, _0x56ca1e, 'alignH', function () {
                return this['_alignH'];
            }, function (_0x550e72) {
                this['_alignH'] = _0x550e72, _0x34a895['systemTime' + 'r']['callLater'](this, this['_changeCan' + 'vasSize']);
            }), _0x71e09a(0x0, _0x56ca1e, 'height', _0x2d6108['prototype']['_$get_heig' + 'ht'], function (_0x2cdf3b) {
                this['designHeig' + 'ht'] = _0x2cdf3b, _0x34a895['superSet'](_0x4bc7a0, this, 'height', _0x2cdf3b), _0x34a895['systemTime' + 'r']['callLater'](this, this['_changeCan' + 'vasSize']);
            }), _0x71e09a(0x0, _0x56ca1e, 'transform', function () {
                return this['_tfChanged'] && this['_adjustTra' + 'nsform'](), this['_transform'] = this['_transform'] || this['_createTra' + 'nsform']();
            }, _0x2d6108['prototype']['_$set_tran' + 'sform']), _0x71e09a(0x0, _0x56ca1e, 'isVisibili' + 'ty', function () {
                return this['_isVisibil' + 'ity'];
            }), _0x71e09a(0x0, _0x56ca1e, 'scaleMode', function () {
                return this['_scaleMode'];
            }, function (_0x291bd5) {
                this['_scaleMode'] = _0x291bd5, _0x34a895['systemTime' + 'r']['callLater'](this, this['_changeCan' + 'vasSize']);
            }), _0x71e09a(0x0, _0x56ca1e, 'alignV', function () {
                return this['_alignV'];
            }, function (_0x3212f5) {
                this['_alignV'] = _0x3212f5, _0x34a895['systemTime' + 'r']['callLater'](this, this['_changeCan' + 'vasSize']);
            }), _0x71e09a(0x0, _0x56ca1e, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x9400a7) {
                this['_bgColor'] = _0x9400a7, _0x4fec79['isWebGL'] && (_0x9400a7 ? this['_wgColor'] = _0x189459['create'](_0x9400a7)['arrColor'] : this['_wgColor'] = null), _0x2ad6c5['onLimixiu'] ? this['_wgColor'] = _0x189459['create'](_0x9400a7)['arrColor'] : _0x9400a7 ? _0x4fec79['canvas']['style']['background'] = _0x9400a7 : _0x4fec79['canvas']['style']['background'] = 'none', _0x4fec79['isConchApp'] && (this['_renderTyp' + 'e'] |= 0x80, this['_setBgStyl' + 'eColor'](0x0, 0x0, this['width'], this['height'], _0x9400a7), this['_setRender' + 'Type'](this['_renderTyp' + 'e']));
            }), _0x71e09a(0x0, _0x56ca1e, 'mouseX', function () {
                return Math['round'](_0x1a2fe4['instance']['mouseX'] / this['clientScal' + 'eX']);
            }), _0x71e09a(0x0, _0x56ca1e, 'mouseY', function () {
                return Math['round'](_0x1a2fe4['instance']['mouseY'] / this['clientScal' + 'eY']);
            }), _0x71e09a(0x0, _0x56ca1e, 'clientScal' + 'eX', function () {
                return this['_transform'] ? this['_transform']['getScaleX']() : 0x1;
            }), _0x71e09a(0x0, _0x56ca1e, 'screenMode', function () {
                return this['_screenMod' + 'e'];
            }, function (_0x375a26) {
                this['_screenMod' + 'e'] = _0x375a26;
            }), _0x71e09a(0x0, _0x56ca1e, 'visible', _0x2d6108['prototype']['_$get_visi' + 'ble'], function (_0x2d3af6) {
                if (this['visible'] !== _0x2d3af6) {
                    _0x34a895['superSet'](_0x4bc7a0, this, 'visible', _0x2d3af6);
                    var _0x20456b = _0x4fec79['_mainCanva' + 's']['source']['style'];
                    _0x20456b['visibility'] = _0x2d3af6 ? 'visible' : 'hidden';
                }
            }), _0x71e09a(0x0, _0x56ca1e, 'fullScreen' + 'Enabled', null, function (_0x26e880) {
                var _0x203771 = _0x2ad6c5['document'], _0x5f224c = _0x4fec79['canvas'];
                _0x26e880 ? (_0x5f224c['addEventLi' + 'stener']('mousedown', this['_requestFu' + 'llscreen']), _0x5f224c['addEventLi' + 'stener']('touchstart', this['_requestFu' + 'llscreen']), _0x203771['addEventLi' + 'stener']('fullscreen' + 'change', this['_fullScree' + 'nChanged']), _0x203771['addEventLi' + 'stener']('mozfullscr' + 'eenchange', this['_fullScree' + 'nChanged']), _0x203771['addEventLi' + 'stener']('webkitfull' + 'screenchan' + 'ge', this['_fullScree' + 'nChanged']), _0x203771['addEventLi' + 'stener']('msfullscre' + 'enchange', this['_fullScree' + 'nChanged'])) : (_0x5f224c['removeEven' + 'tListener']('mousedown', this['_requestFu' + 'llscreen']), _0x5f224c['removeEven' + 'tListener']('touchstart', this['_requestFu' + 'llscreen']), _0x203771['removeEven' + 'tListener']('fullscreen' + 'change', this['_fullScree' + 'nChanged']), _0x203771['removeEven' + 'tListener']('mozfullscr' + 'eenchange', this['_fullScree' + 'nChanged']), _0x203771['removeEven' + 'tListener']('webkitfull' + 'screenchan' + 'ge', this['_fullScree' + 'nChanged']), _0x203771['removeEven' + 'tListener']('msfullscre' + 'enchange', this['_fullScree' + 'nChanged']));
            }), _0x71e09a(0x0, _0x56ca1e, 'frameRate', function () {
                return _0x4fec79['isConchApp'] ? this['_frameRate' + 'Native'] : this['_frameRate'];
            }, function (_0x24e9e2) {
                if (_0x4fec79['isConchApp']) {
                    switch (_0x24e9e2) {
                    case 'fast':
                        _0xd373d9['conch']['config']['setLimitFP' + 'S'](0x3c);
                        break;
                    case 'mouse':
                        _0xd373d9['conch']['config']['setMouseFr' + 'ame'](0x7d0);
                        break;
                    case 'slow':
                        _0xd373d9['conch']['config']['setSlowFra' + 'me'](!0x0);
                        break;
                    case 'sleep':
                        _0xd373d9['conch']['config']['setLimitFP' + 'S'](0x1);
                    }
                    this['_frameRate' + 'Native'] = _0x24e9e2;
                } else
                    this['_frameRate'] = _0x24e9e2;
            }), _0x9a2c40['SCALE_NOSC' + 'ALE'] = 'noscale', _0x9a2c40['SCALE_EXAC' + 'TFIT'] = 'exactfit', _0x9a2c40['SCALE_SHOW' + 'ALL'] = 'showall', _0x9a2c40['SCALE_NOBO' + 'RDER'] = 'noborder', _0x9a2c40['SCALE_FULL'] = 'full', _0x9a2c40['SCALE_FIXE' + 'D_WIDTH'] = 'fixedwidth', _0x9a2c40['SCALE_FIXE' + 'D_HEIGHT'] = 'fixedheigh' + 't', _0x9a2c40['SCALE_FIXE' + 'D_AUTO'] = 'fixedauto', _0x9a2c40['ALIGN_LEFT'] = 'left', _0x9a2c40['ALIGN_RIGH' + 'T'] = 'right', _0x9a2c40['ALIGN_CENT' + 'ER'] = 'center', _0x9a2c40['ALIGN_TOP'] = 'top', _0x9a2c40['ALIGN_MIDD' + 'LE'] = 'middle', _0x9a2c40['ALIGN_BOTT' + 'OM'] = 'bottom', _0x9a2c40['SCREEN_NON' + 'E'] = 'none', _0x9a2c40['SCREEN_HOR' + 'IZONTAL'] = 'horizontal', _0x9a2c40['SCREEN_VER' + 'TICAL'] = 'vertical', _0x9a2c40['FRAME_FAST'] = 'fast', _0x9a2c40['FRAME_SLOW'] = 'slow', _0x9a2c40['FRAME_MOUS' + 'E'] = 'mouse', _0x9a2c40['FRAME_SLEE' + 'P'] = 'sleep', _0x5043ef(_0x9a2c40, [
                '_dbgSprite',
                function () {
                    return this['_dbgSprite'] = new _0x4bc7a0();
                }
            ]), _0x9a2c40;
        }(_0x4bc7a0), _0x4bdd6d = function (_0x303b5d) {
            function _0x344fae() {
                this['datas'] = [], this['hud_width'] = 0x320, this['hud_height'] = 0xc8, this['gMinV'] = 0x0, this['gMaxV'] = 0x64, this['textSpace'] = 0x28, this['_now'] = null, this['sttm'] = 0x0, _0x344fae['__super']['call'](this), this['xdata'] = new Array(_0x344fae['DATANUM']), this['ydata'] = new Array(_0x344fae['DATANUM']), _0x344fae['inst'] = this, this['_renderTyp' + 'e'] |= 0x800, this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['_setCustom' + 'Render'](), this['addDataDef'](0x0, 0xffffff, 'frame', 0x1), this['addDataDef'](0x1, 0xff00, 'update', 0x1), this['addDataDef'](0x2, 0xff0000, 'flush', 0x1), this['_now'] = performance ? performance['now']['bind'](performance) : Date['now'];
            }
            _0x4621f4(_0x344fae, 'laya.utils' + '.PerfHUD', _0x303b5d);
            var _0x4d3d7a = _0x344fae['prototype'];
            return _0x4d3d7a['now'] = function () {
                return this['_now']();
            }, _0x4d3d7a['start'] = function () {
                this['sttm'] = this['_now']();
            }, _0x4d3d7a['end'] = function (_0x171657) {
                var _0x42a94c = this['_now']() - this['sttm'];
                this['updateValu' + 'e'](_0x171657, _0x42a94c);
            }, _0x4d3d7a['config'] = function (_0x572b45, _0x3b92a7) {
                this['hud_width'] = _0x572b45, this['hud_height'] = _0x3b92a7;
            }, _0x4d3d7a['addDataDef'] = function (_0xe67ef5, _0x1016db, _0x17fe9, _0x14c206) {
                this['datas'][_0xe67ef5] = new _0x1804aa(_0xe67ef5, _0x1016db, _0x17fe9, _0x14c206);
            }, _0x4d3d7a['updateValu' + 'e'] = function (_0x47c46e, _0x28f055) {
                this['datas'][_0x47c46e]['addData'](_0x28f055);
            }, _0x4d3d7a['v2y'] = function (_0x3124b1) {
                return this['_y'] + this['hud_height'] * (0x1 - (_0x3124b1 - this['gMinV']) / this['gMaxV']), this['_y'] + this['hud_height'] * (0x1 - (_0x3124b1 - this['gMinV']) / this['gMaxV']);
            }, _0x4d3d7a['drawHLine'] = function (_0x15d6ad, _0x3ef2aa, _0x5b1048, _0x174d39) {
                var _0x6cab7d = this['_x'], _0x1fe3da = (this['_x'] + this['hud_width'], this['v2y'](_0x3ef2aa));
                _0x15d6ad['fillText'](_0x174d39, _0x6cab7d, _0x1fe3da - 0x6, null, 'green'), _0x6cab7d += this['textSpace'], _0x15d6ad['fillStyle'] = _0x5b1048, _0x15d6ad['fillRect'](_0x6cab7d, _0x1fe3da, this['_x'] + this['hud_width'], 0x1);
            }, _0x4d3d7a['customRend' + 'er'] = function (_0x125f61, _0x15acab, _0xc2be0d) {
                var _0x15d47e = performance['now']();
                _0x344fae['_lastTm'] <= 0x0 && (_0x344fae['_lastTm'] = _0x15d47e), this['updateValu' + 'e'](0x0, _0x15d47e - _0x344fae['_lastTm']), _0x344fae['_lastTm'] = _0x15d47e, _0x125f61['save'](), _0x125f61['fillRect'](this['_x'], this['_y'], this['hud_width'], this['hud_height'] + 0x4, '#000000cc'), _0x125f61['globalAlph' + 'a'] = 0.9, this['drawHLine'](_0x125f61, 0x0, 'green', '\x20\x20\x20\x200'), this['drawHLine'](_0x125f61, 0xa, 'green', '\x20\x2010'), this['drawHLine'](_0x125f61, 16.667, 'red', '\x20'), this['drawHLine'](_0x125f61, 0x14, 'green', '50|20'), this['drawHLine'](_0x125f61, 33.334, 'yellow', ''), this['drawHLine'](_0x125f61, 16.667 * 0x3, 'yellow', ''), this['drawHLine'](_0x125f61, 66.668, 'yellow', ''), this['drawHLine'](_0x125f61, 0x32, 'green', '20|50'), this['drawHLine'](_0x125f61, 0x64, 'green', '10|100');
                for (var _0x499491 = 0x0, _0x11a42a = this['datas']['length']; _0x11a42a > _0x499491; _0x499491++) {
                    var _0x393a0c = this['datas'][_0x499491];
                    if (_0x393a0c) {
                        var _0x2e4a96 = _0x393a0c['datas']['length'], _0x35ae21 = (this['hud_width'] - this['textSpace']) / _0x2e4a96, _0x566202 = _0x393a0c['datapos'], _0x4e0203 = this['_x'] + this['textSpace'];
                        _0x125f61['fillStyle'] = _0x393a0c['color'];
                        for (var _0x22307c = _0x2e4a96; _0x22307c > _0x566202; _0x566202++) {
                            var _0x2ef338 = this['v2y'](_0x393a0c['datas'][_0x566202] * _0x393a0c['scale']);
                            _0x125f61['fillRect'](_0x4e0203, _0x2ef338, _0x35ae21, this['hud_height'] + this['_y'] - _0x2ef338), _0x4e0203 += _0x35ae21;
                        }
                        for (_0x566202 = 0x0; _0x566202 < _0x393a0c['datapos']; _0x566202++)
                            _0x2ef338 = this['v2y'](_0x393a0c['datas'][_0x566202] * _0x393a0c['scale']), _0x125f61['fillRect'](_0x4e0203, _0x2ef338, _0x35ae21, this['hud_height'] + this['_y'] - _0x2ef338), _0x4e0203 += _0x35ae21;
                    }
                }
                _0x125f61['restore']();
            }, _0x344fae['_lastTm'] = 0x0, _0x344fae['_now'] = 0x0, _0x344fae['DATANUM'] = 0x12c, _0x344fae['inst'] = null, _0x344fae['drawTexTm'] = 0x0, _0x344fae;
        }(_0x4bc7a0), _0x48bea3 = function (_0x412f90) {
            function _0x52b476() {
                this['autoDestro' + 'yAtClosed'] = !0x1, this['url'] = null, this['_timer'] = null, this['_viewCreat' + 'ed'] = !0x1, this['_idMap'] = null, this['_$componen' + 'tType'] = 'Scene', _0x52b476['__super']['call'](this), this['_setBit'](0x8, !0x0), _0x52b476['unDestroye' + 'dScenes']['push'](this), this['_scene'] = this, this['createChil' + 'dren']();
            }
            _0x4621f4(_0x52b476, 'laya.displ' + 'ay.Scene', _0x412f90);
            var _0x324a2d = _0x52b476['prototype'];
            return _0x324a2d['createChil' + 'dren'] = function () {
            }, _0x324a2d['loadScene'] = function (_0x4809d2) {
                var _0x563831 = _0x4809d2['indexOf']('.') > -0x1 ? _0x4809d2 : _0x4809d2 + '.scene', _0x2478db = _0x34a895['loader']['getRes'](_0x563831);
                if (_0x2478db)
                    this['createView'](_0x2478db);
                else {
                    _0x34a895['loader']['resetProgr' + 'ess']();
                    var _0x2cb0ab = new _0x1352f6();
                    _0x2cb0ab['on']('complete', this, this['_onSceneLo' + 'aded'], [_0x563831]), _0x2cb0ab['load'](_0x563831);
                }
            }, _0x324a2d['_onSceneLo' + 'aded'] = function (_0x4c1391) {
                this['createView'](_0x3943d1['getRes'](_0x4c1391));
            }, _0x324a2d['createView'] = function (_0x430bca) {
                _0x430bca && !this['_viewCreat' + 'ed'] && (this['_viewCreat' + 'ed'] = !0x0, _0x10b6f2['createByDa' + 'ta'](this, _0x430bca));
            }, _0x324a2d['getNodeByI' + 'D'] = function (_0x2908e9) {
                return this['_idMap'] ? this['_idMap'][_0x2908e9] : null;
            }, _0x324a2d['open'] = function (_0x2def75, _0x246910) {
                void 0x0 === _0x2def75 && (_0x2def75 = !0x0), _0x2def75 && _0x52b476['closeAll'](), _0x52b476['root']['addChild'](this['scene']), this['onOpened'](_0x246910);
            }, _0x324a2d['onOpened'] = function (_0x4aeca0) {
            }, _0x324a2d['close'] = function (_0x4a2082) {
                this['autoDestro' + 'yAtClosed'] ? this['destroy']() : this['removeSelf'](), this['onClosed'](_0x4a2082);
            }, _0x324a2d['onClosed'] = function (_0x10f7ed) {
            }, _0x324a2d['destroy'] = function (_0xdc1e40) {
                void 0x0 === _0xdc1e40 && (_0xdc1e40 = !0x0), this['_idMap'] = null, _0x412f90['prototype']['destroy']['call'](this, _0xdc1e40);
                for (var _0x562d29 = laya['display']['Scene']['unDestroye' + 'dScenes'], _0x31022f = _0x562d29['length'] - 0x1; _0x31022f > -0x1; _0x31022f--)
                    if (_0x562d29[_0x31022f] === this)
                        return void _0x562d29['splice'](_0x31022f, 0x1);
            }, _0x324a2d['_sizeChang' + 'ed'] = function () {
                this['event']('resize');
            }, _0x71e09a(0x0, _0x324a2d, 'scaleX', _0x412f90['prototype']['_$get_scal' + 'eX'], function (_0x39a7bb) {
                _0x34a895['superGet'](_0x4bc7a0, this, 'scaleX') != _0x39a7bb && (_0x34a895['superSet'](_0x4bc7a0, this, 'scaleX', _0x39a7bb), this['event']('resize'));
            }), _0x71e09a(0x0, _0x324a2d, 'scaleY', _0x412f90['prototype']['_$get_scal' + 'eY'], function (_0xab4e44) {
                _0x34a895['superGet'](_0x4bc7a0, this, 'scaleY') != _0xab4e44 && (_0x34a895['superSet'](_0x4bc7a0, this, 'scaleY', _0xab4e44), this['event']('resize'));
            }), _0x71e09a(0x0, _0x324a2d, 'width', function () {
                if (this['_width'])
                    return this['_width'];
                for (var _0xeb9b14 = 0x0, _0x617841 = this['numChildre' + 'n'] - 0x1; _0x617841 > -0x1; _0x617841--) {
                    var _0x5bacc4 = this['getChildAt'](_0x617841);
                    _0x5bacc4['_visible'] && (_0xeb9b14 = Math['max'](_0x5bacc4['_x'] + _0x5bacc4['width'] * _0x5bacc4['scaleX'], _0xeb9b14));
                }
                return _0xeb9b14;
            }, function (_0x91a844) {
                _0x34a895['superGet'](_0x4bc7a0, this, 'width') != _0x91a844 && (_0x34a895['superSet'](_0x4bc7a0, this, 'width', _0x91a844), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x71e09a(0x0, _0x324a2d, 'timer', function () {
                return this['_timer'] || _0x34a895['timer'];
            }, function (_0x2ede07) {
                this['_timer'] = _0x2ede07;
            }), _0x71e09a(0x0, _0x324a2d, 'height', function () {
                if (this['_height'])
                    return this['_height'];
                for (var _0x218636 = 0x0, _0x2686f1 = this['numChildre' + 'n'] - 0x1; _0x2686f1 > -0x1; _0x2686f1--) {
                    var _0xe6f80e = this['getChildAt'](_0x2686f1);
                    _0xe6f80e['_visible'] && (_0x218636 = Math['max'](_0xe6f80e['_y'] + _0xe6f80e['height'] * _0xe6f80e['scaleY'], _0x218636));
                }
                return _0x218636;
            }, function (_0x3bace5) {
                _0x34a895['superGet'](_0x4bc7a0, this, 'height') != _0x3bace5 && (_0x34a895['superSet'](_0x4bc7a0, this, 'height', _0x3bace5), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x71e09a(0x1, _0x52b476, 'root', function () {
                function _0x4a00a5() {
                    _0x52b476['_root']['size'](_0x34a895['stage']['width'], _0x34a895['stage']['height']), _0x52b476['_root']['event']('resize');
                }
                return _0x52b476['_root'] || (_0x52b476['_root'] = _0x34a895['stage']['addChild'](new _0x4bc7a0()), _0x52b476['_root']['name'] = 'root', _0x34a895['stage']['on']('resize', null, _0x4a00a5), _0x4a00a5()), _0x52b476['_root'];
            }, laya['display']['Sprite']['_$SET_root']), _0x52b476['load'] = function (_0xf31311, _0x5bd509, _0x51987c) {
                function _0x5d0b9(_0x50e3d7) {
                    _0x52b476['_loadPage'] && _0x52b476['_loadPage']['event']('progress', _0x50e3d7), _0x51987c && _0x51987c['runWith'](_0x50e3d7);
                }
                function _0x26ff42() {
                    _0x2aab2e['off']('progress', null, _0x5d0b9);
                    var _0x2dfb5a = _0x3943d1['getRes'](_0xf31311);
                    if (!_0x2dfb5a)
                        throw 'Can\x20not\x20fi' + 'nd\x20scene:' + _0xf31311;
                    if (!_0x2dfb5a['props'])
                        throw 'Scene\x20data' + '\x20is\x20error:' + _0xf31311;
                    var _0x2f6f04 = _0x2dfb5a['props']['runtime'] ? _0x2dfb5a['props']['runtime'] : _0x2dfb5a['type'], _0x10445c = _0x421b39['getClass'](_0x2f6f04);
                    if ('instance' == _0x2dfb5a['props']['renderType'])
                        var _0x4723f9 = _0x10445c['instance'] || (_0x10445c['instance'] = new _0x10445c());
                    else
                        _0x4723f9 = new _0x10445c();
                    if (!(_0x4723f9 && _0x4723f9 instanceof laya['display']['Node']))
                        throw 'Can\x20not\x20fi' + 'nd\x20scene:' + _0x2f6f04;
                    _0x4723f9['url'] = _0xf31311, _0x4723f9['_getBit'](0x8) ? (_0x4723f9['on']('onViewCrea' + 'ted', null, function () {
                        _0x5bd509 && _0x5bd509['runWith'](_0x4723f9);
                    }), _0x4723f9['createView'](_0x2dfb5a)) : _0x5bd509 && _0x5bd509['runWith'](_0x4723f9), _0x52b476['hideLoadin' + 'gPage']();
                }
                _0x34a895['loader']['resetProgr' + 'ess']();
                var _0x2aab2e = new _0x1352f6();
                _0x2aab2e['on']('progress', null, _0x5d0b9), _0x2aab2e['once']('complete', null, _0x26ff42), _0x2aab2e['load'](_0xf31311);
            }, _0x52b476['open'] = function (_0x1c0deb, _0x500073, _0x406593, _0x1f2531, _0x1d3be5) {
                if (void 0x0 === _0x500073 && (_0x500073 = !0x0), _0x406593 instanceof laya['utils']['Handler']) {
                    var _0x5c4a29 = _0x1f2531;
                    _0x1f2531 = _0x406593, _0x406593 = _0x5c4a29;
                }
                _0x52b476['showLoadin' + 'gPage'](), _0x52b476['load'](_0x1c0deb, _0x16ca2b['create'](null, this['_onSceneLo' + 'aded'], [
                    _0x500073,
                    _0x1f2531,
                    _0x406593
                ]), _0x1d3be5);
            }, _0x52b476['_onSceneLo' + 'aded'] = function (_0x3dab05, _0x5fe80c, _0x22ee00, _0x2372bb) {
                _0x2372bb['open'](_0x3dab05, _0x22ee00), _0x5fe80c && _0x5fe80c['runWith'](_0x2372bb);
            }, _0x52b476['close'] = function (_0x3d3831, _0x1bf96d) {
                void 0x0 === _0x1bf96d && (_0x1bf96d = '');
                for (var _0x3c24ea = !0x1, _0x1b261e = laya['display']['Scene']['unDestroye' + 'dScenes'], _0x580aae = 0x0, _0x9313bb = _0x1b261e['length']; _0x9313bb > _0x580aae; _0x580aae++) {
                    var _0x57d70a = _0x1b261e[_0x580aae];
                    _0x57d70a && _0x57d70a['parent'] && _0x57d70a['url'] === _0x3d3831 && _0x57d70a['name'] == _0x1bf96d && (_0x57d70a['close'](), _0x3c24ea = !0x0);
                }
                return _0x3c24ea;
            }, _0x52b476['closeAll'] = function () {
                for (var _0x58d5f7 = laya['display']['Scene']['root'], _0x37219a = 0x0, _0x4494a6 = _0x58d5f7['numChildre' + 'n']; _0x4494a6 > _0x37219a; _0x37219a++) {
                    var _0x1c7afd = _0x58d5f7['getChildAt'](0x0);
                    _0x1c7afd instanceof laya['display']['Scene'] ? _0x1c7afd['close']() : _0x1c7afd['removeSelf']();
                }
            }, _0x52b476['destroy'] = function (_0x4e7071, _0x618ba5) {
                void 0x0 === _0x618ba5 && (_0x618ba5 = '');
                for (var _0x12c556 = !0x1, _0x3d054a = laya['display']['Scene']['unDestroye' + 'dScenes'], _0x4703d5 = 0x0, _0xd42b4f = _0x3d054a['length']; _0xd42b4f > _0x4703d5; _0x4703d5++) {
                    var _0x143348 = _0x3d054a[_0x4703d5];
                    _0x143348['url'] === _0x4e7071 && _0x143348['name'] == _0x618ba5 && (_0x143348['destroy'](), _0x12c556 = !0x0);
                }
                return _0x12c556;
            }, _0x52b476['gc'] = function () {
                _0x297d95['destroyUnu' + 'sedResourc' + 'es']();
            }, _0x52b476['setLoading' + 'Page'] = function (_0xdccda7) {
                _0x52b476['_loadPage'] != _0xdccda7 && (_0x52b476['_loadPage'] = _0xdccda7);
            }, _0x52b476['showLoadin' + 'gPage'] = function (_0xef1b02, _0x34b27d) {
                void 0x0 === _0x34b27d && (_0x34b27d = 0x1f4), _0x52b476['_loadPage'] && (_0x34a895['systemTime' + 'r']['clear'](null, _0x52b476['_showLoadi' + 'ng']), _0x34a895['systemTime' + 'r']['clear'](null, _0x52b476['_hideLoadi' + 'ng']), _0x34a895['systemTime' + 'r']['once'](_0x34b27d, null, _0x52b476['_showLoadi' + 'ng'], [_0xef1b02], !0x1));
            }, _0x52b476['_showLoadi' + 'ng'] = function (_0x4bea53) {
                _0x34a895['stage']['addChild'](_0x52b476['_loadPage']), _0x52b476['_loadPage']['onOpened'](_0x4bea53);
            }, _0x52b476['_hideLoadi' + 'ng'] = function () {
                _0x52b476['_loadPage']['close']();
            }, _0x52b476['hideLoadin' + 'gPage'] = function (_0x476ad5) {
                void 0x0 === _0x476ad5 && (_0x476ad5 = 0x1f4), _0x52b476['_loadPage'] && (_0x34a895['systemTime' + 'r']['clear'](null, _0x52b476['_showLoadi' + 'ng']), _0x34a895['systemTime' + 'r']['clear'](null, _0x52b476['_hideLoadi' + 'ng']), _0x34a895['systemTime' + 'r']['once'](_0x476ad5, null, _0x52b476['_hideLoadi' + 'ng']));
            }, _0x52b476['unDestroye' + 'dScenes'] = [], _0x52b476['_root'] = null, _0x52b476['_loadPage'] = null, _0x52b476;
        }(_0x4bc7a0), _0x18c4f0 = function (_0x474afd) {
            function _0x284ed8() {
                this['_targetDic'] = null, this['_animation' + 'Data'] = null, this['_usedFrame' + 's'] = null, _0x284ed8['__super']['call'](this), null === _0x284ed8['_sortIndex' + 'Fun'] && (_0x284ed8['_sortIndex' + 'Fun'] = _0x237f41['sortByKey']('index', !0x1, !0x0));
            }
            _0x4621f4(_0x284ed8, 'laya.displ' + 'ay.FrameAn' + 'imation', _0x474afd);
            var _0x552ae0 = _0x284ed8['prototype'];
            return _0x552ae0['_setUp'] = function (_0x26afcf, _0x5ab166) {
                this['_targetDic'] = _0x26afcf, this['_animation' + 'Data'] = _0x5ab166, this['interval'] = 0x3e8 / _0x5ab166['frameRate'], _0x5ab166['parsed'] ? (this['_count'] = _0x5ab166['count'], this['_labels'] = _0x5ab166['labels'], this['_usedFrame' + 's'] = _0x5ab166['animationN' + 'ewFrames']) : (this['_usedFrame' + 's'] = [], this['_calculate' + 'Datas'](), _0x5ab166['parsed'] = !0x0, _0x5ab166['labels'] = this['_labels'], _0x5ab166['count'] = this['_count'], _0x5ab166['animationN' + 'ewFrames'] = this['_usedFrame' + 's']);
            }, _0x552ae0['clear'] = function () {
                return _0x474afd['prototype']['clear']['call'](this), this['_targetDic'] = null, this['_animation' + 'Data'] = null, this;
            }, _0x552ae0['_displayTo' + 'Index'] = function (_0x459096) {
                if (this['_animation' + 'Data']) {
                    0x0 > _0x459096 && (_0x459096 = 0x0), _0x459096 > this['_count'] && (_0x459096 = this['_count']);
                    var _0x2b9ce2 = this['_animation' + 'Data']['nodes'], _0x2948e0 = 0x0, _0x496c87 = _0x2b9ce2['length'];
                    for (_0x2948e0 = 0x0; _0x496c87 > _0x2948e0; _0x2948e0++)
                        this['_displayNo' + 'deToFrame'](_0x2b9ce2[_0x2948e0], _0x459096);
                }
            }, _0x552ae0['_displayNo' + 'deToFrame'] = function (_0x58f188, _0x4f14bb, _0x9815a3) {
                _0x9815a3 || (_0x9815a3 = this['_targetDic']);
                var _0x45dc7d = _0x9815a3[_0x58f188['target']];
                if (_0x45dc7d) {
                    var _0x41edf6, _0x1f6296, _0x27360c, _0xf0c81c = _0x58f188['frames'], _0x7b5070 = _0x58f188['keys'], _0x2d0254 = 0x0, _0x137b78 = _0x7b5070['length'];
                    for (_0x2d0254 = 0x0; _0x137b78 > _0x2d0254; _0x2d0254++)
                        _0x41edf6 = _0x7b5070[_0x2d0254], _0x1f6296 = _0xf0c81c[_0x41edf6], _0x27360c = _0x1f6296['length'] > _0x4f14bb ? _0x1f6296[_0x4f14bb] : _0x1f6296[_0x1f6296['length'] - 0x1], _0x45dc7d[_0x41edf6] = _0x27360c;
                    var _0x39de1f = _0x58f188['funkeys'];
                    _0x137b78 = _0x39de1f['length'];
                    var _0x1f4794;
                    if (0x0 != _0x137b78) {
                        for (_0x2d0254 = 0x0; _0x137b78 > _0x2d0254; _0x2d0254++)
                            _0x41edf6 = _0x39de1f[_0x2d0254], _0x1f4794 = _0xf0c81c[_0x41edf6], void 0x0 !== _0x1f4794[_0x4f14bb] && _0x45dc7d[_0x41edf6] && _0x45dc7d[_0x41edf6]['apply'](_0x45dc7d, _0x1f4794[_0x4f14bb]);
                    }
                }
            }, _0x552ae0['_calculate' + 'Datas'] = function () {
                if (this['_animation' + 'Data']) {
                    var _0x5e5528, _0x1ab0fd = this['_animation' + 'Data']['nodes'], _0x52184d = 0x0, _0x312a44 = _0x1ab0fd['length'];
                    for (this['_count'] = 0x0, _0x52184d = 0x0; _0x312a44 > _0x52184d; _0x52184d++)
                        _0x5e5528 = _0x1ab0fd[_0x52184d], this['_calculate' + 'KeyFrames'](_0x5e5528);
                    this['_count'] += 0x1;
                }
            }, _0x552ae0['_calculate' + 'KeyFrames'] = function (_0x5486c0) {
                var _0x4ca5fd, _0x21cf16, _0xedc419 = _0x5486c0['keyframes'], _0x4d66d9 = _0x5486c0['target'];
                _0x5486c0['frames'] || (_0x5486c0['frames'] = {}), _0x5486c0['keys'] ? _0x5486c0['keys']['length'] = 0x0 : _0x5486c0['keys'] = [], _0x5486c0['funkeys'] ? _0x5486c0['funkeys']['length'] = 0x0 : _0x5486c0['funkeys'] = [], _0x5486c0['initValues'] || (_0x5486c0['initValues'] = {});
                for (_0x4ca5fd in _0xedc419) {
                    var _0x3d5633 = -0x1 != _0x4ca5fd['indexOf']('()');
                    if (_0x21cf16 = _0xedc419[_0x4ca5fd], _0x3d5633 && (_0x4ca5fd = _0x4ca5fd['substr'](0x0, _0x4ca5fd['length'] - 0x2)), _0x5486c0['frames'][_0x4ca5fd] || (_0x5486c0['frames'][_0x4ca5fd] = []), _0x3d5633) {
                        _0x5486c0['funkeys']['push'](_0x4ca5fd);
                        for (var _0x3f04e1 = _0x5486c0['frames'][_0x4ca5fd], _0x47ad28 = 0x0; _0x47ad28 < _0x21cf16['length']; _0x47ad28++) {
                            var _0x26a181 = _0x21cf16[_0x47ad28];
                            _0x3f04e1[_0x26a181['index']] = _0x26a181['value'], _0x26a181['index'] > this['_count'] && (this['_count'] = _0x26a181['index']);
                        }
                    } else
                        this['_targetDic'] && this['_targetDic'][_0x4d66d9] && (_0x5486c0['initValues'][_0x4ca5fd] = this['_targetDic'][_0x4d66d9][_0x4ca5fd]), _0x21cf16['sort'](_0x284ed8['_sortIndex' + 'Fun']), _0x5486c0['keys']['push'](_0x4ca5fd), this['_calculate' + 'NodePropFr' + 'ames'](_0x21cf16, _0x5486c0['frames'][_0x4ca5fd], _0x4ca5fd, _0x4d66d9);
                }
            }, _0x552ae0['resetNodes'] = function () {
                if (this['_targetDic'] && this['_animation' + 'Data']) {
                    var _0x501c4e, _0x6a7d17, _0x43d5c8 = this['_animation' + 'Data']['nodes'], _0x141fb2 = 0x0, _0x2e9cdd = _0x43d5c8['length'];
                    for (_0x141fb2 = 0x0; _0x2e9cdd > _0x141fb2; _0x141fb2++)
                        if (_0x501c4e = _0x43d5c8[_0x141fb2], _0x6a7d17 = _0x501c4e['initValues']) {
                            var _0x3f7365 = this['_targetDic'][_0x501c4e['target']];
                            if (_0x3f7365) {
                                var _0xe0ed28;
                                for (_0xe0ed28 in _0x6a7d17)
                                    _0x3f7365[_0xe0ed28] = _0x6a7d17[_0xe0ed28];
                            }
                        }
                }
            }, _0x552ae0['_calculate' + 'NodePropFr' + 'ames'] = function (_0x49758b, _0xc1d972, _0x149408, _0x3f89e5) {
                var _0x3e73c1 = 0x0, _0x23ac42 = _0x49758b['length'] - 0x1;
                for (_0xc1d972['length'] = _0x49758b[_0x23ac42]['index'] + 0x1, _0x3e73c1 = 0x0; _0x23ac42 > _0x3e73c1; _0x3e73c1++)
                    this['_dealKeyFr' + 'ame'](_0x49758b[_0x3e73c1]), this['_calculate' + 'FrameValue' + 's'](_0x49758b[_0x3e73c1], _0x49758b[_0x3e73c1 + 0x1], _0xc1d972);
                0x0 == _0x23ac42 && (_0xc1d972[0x0] = _0x49758b[0x0]['value'], this['_usedFrame' + 's'] && (this['_usedFrame' + 's'][_0x49758b[0x0]['index']] = !0x0)), this['_dealKeyFr' + 'ame'](_0x49758b[_0x3e73c1]);
            }, _0x552ae0['_dealKeyFr' + 'ame'] = function (_0x17fed8) {
                _0x17fed8['label'] && '' != _0x17fed8['label'] && this['addLabel'](_0x17fed8['label'], _0x17fed8['index']);
            }, _0x552ae0['_calculate' + 'FrameValue' + 's'] = function (_0x520d3c, _0x41bd84, _0x79f6c1) {
                var _0x4bbf29, _0x2e1370 = 0x0, _0x57455d = _0x520d3c['index'], _0x5f0a4e = _0x41bd84['index'], _0x315f5a = _0x520d3c['value'], _0x125341 = _0x41bd84['value'] - _0x520d3c['value'], _0x6c3187 = _0x5f0a4e - _0x57455d, _0x22a8fb = this['_usedFrame' + 's'];
                if (_0x5f0a4e > this['_count'] && (this['_count'] = _0x5f0a4e), _0x520d3c['tween']) {
                    for (_0x4bbf29 = _0x452b71[_0x520d3c['tweenMetho' + 'd']], null == _0x4bbf29 && (_0x4bbf29 = _0x452b71['linearNone']), _0x2e1370 = _0x57455d; _0x5f0a4e > _0x2e1370; _0x2e1370++)
                        _0x79f6c1[_0x2e1370] = _0x4bbf29(_0x2e1370 - _0x57455d, _0x315f5a, _0x125341, _0x6c3187), _0x22a8fb && (_0x22a8fb[_0x2e1370] = !0x0);
                } else {
                    for (_0x2e1370 = _0x57455d; _0x5f0a4e > _0x2e1370; _0x2e1370++)
                        _0x79f6c1[_0x2e1370] = _0x315f5a;
                }
                _0x22a8fb && (_0x22a8fb[_0x520d3c['index']] = !0x0, _0x22a8fb[_0x41bd84['index']] = !0x0), _0x79f6c1[_0x41bd84['index']] = _0x41bd84['value'];
            }, _0x284ed8['_sortIndex' + 'Fun'] = null, _0x284ed8;
        }(_0x174293), _0xe66919 = function (_0x59d26a) {
            function _0x3da84f() {
                this['_focus'] = !0x1, this['_multiline'] = !0x1, this['_editable'] = !0x0, this['_restrictP' + 'attern'] = null, this['_type'] = 'text', this['_prompt'] = '', this['_promptCol' + 'or'] = '#A9A9A9', this['_originCol' + 'or'] = '#000000', this['_content'] = '', _0x3da84f['__super']['call'](this), this['_maxChars'] = 0x186a0, this['_width'] = 0x64, this['_height'] = 0x14, this['multiline'] = !0x1, this['overflow'] = 'scroll', this['on']('mousedown', this, this['_onMouseDo' + 'wn']), this['on']('undisplay', this, this['_onUnDispl' + 'ay']);
            }
            _0x4621f4(_0x3da84f, 'laya.displ' + 'ay.Input', _0x59d26a);
            var _0xf35094 = _0x3da84f['prototype'];
            return _0xf35094['setSelecti' + 'on'] = function (_0x5eff24, _0x5d7e42) {
                this['focus'] = !0x0, laya['display']['Input']['inputEleme' + 'nt']['selectionS' + 'tart'] = _0x5eff24, laya['display']['Input']['inputEleme' + 'nt']['selectionE' + 'nd'] = _0x5d7e42;
            }, _0xf35094['_onUnDispl' + 'ay'] = function (_0x7a8f79) {
                this['focus'] = !0x1;
            }, _0xf35094['_onMouseDo' + 'wn'] = function (_0x4b774e) {
                this['focus'] = !0x0;
            }, _0xf35094['_syncInput' + 'Transform'] = function () {
                var _0x2e5693 = this['nativeInpu' + 't'], _0x19bef6 = _0x3b78ce['getTransfo' + 'rmRelative' + 'ToWindow'](this, this['padding'][0x3], this['padding'][0x0]), _0x4bade3 = this['_width'] - this['padding'][0x1] - this['padding'][0x3], _0x128d72 = this['_height'] - this['padding'][0x0] - this['padding'][0x2];
                _0x4fec79['isConchApp'] ? (_0x2e5693['setScale'](_0x19bef6['scaleX'], _0x19bef6['scaleY']), _0x2e5693['setSize'](_0x4bade3, _0x128d72), _0x2e5693['setPos'](_0x19bef6['x'], _0x19bef6['y'])) : (_0x3da84f['inputConta' + 'iner']['style']['transform'] = _0x3da84f['inputConta' + 'iner']['style']['webkitTran' + 'sform'] = 'scale(' + _0x19bef6['scaleX'] + ',' + _0x19bef6['scaleY'] + ')\x20rotate(' + _0x34a895['stage']['canvasDegr' + 'ee'] + 'deg)', _0x2e5693['style']['width'] = _0x4bade3 + 'px', _0x2e5693['style']['height'] = _0x128d72 + 'px', _0x3da84f['inputConta' + 'iner']['style']['left'] = _0x19bef6['x'] + 'px', _0x3da84f['inputConta' + 'iner']['style']['top'] = _0x19bef6['y'] + 'px');
            }, _0xf35094['select'] = function () {
                this['nativeInpu' + 't']['select']();
            }, _0xf35094['_setInputM' + 'ethod'] = function () {
                _0x3da84f['input']['parentElem' + 'ent'] && _0x3da84f['inputConta' + 'iner']['removeChil' + 'd'](_0x3da84f['input']), _0x3da84f['area']['parentElem' + 'ent'] && _0x3da84f['inputConta' + 'iner']['removeChil' + 'd'](_0x3da84f['area']), _0x3da84f['inputEleme' + 'nt'] = this['_multiline'] ? _0x3da84f['area'] : _0x3da84f['input'], _0x3da84f['inputConta' + 'iner']['appendChil' + 'd'](_0x3da84f['inputEleme' + 'nt']), _0x12a05f['RightToLef' + 't'] && (_0x3da84f['inputEleme' + 'nt']['style']['direction'] = 'rtl');
            }, _0xf35094['_focusIn'] = function () {
                laya['display']['Input']['isInputtin' + 'g'] = !0x0;
                var _0x1cd1ce = this['nativeInpu' + 't'];
                this['_focus'] = !0x0;
                var _0x271eb2 = _0x1cd1ce['style'];
                _0x271eb2['whiteSpace'] = this['wordWrap'] ? 'pre-wrap' : 'nowrap', this['_setPrompt' + 'Color'](), _0x1cd1ce['readOnly'] = !this['_editable'], _0x4fec79['isConchApp'] && (_0x1cd1ce['setType'](this['_type']), _0x1cd1ce['setForbidE' + 'dit'](!this['_editable'])), _0x1cd1ce['maxLength'] = this['_maxChars'], this['padding'], (_0x1cd1ce['type'] = this['_type'], _0x1cd1ce['value'] = this['_content'], _0x1cd1ce['placeholde' + 'r'] = this['_prompt'], _0x34a895['stage']['off']('keydown', this, this['_onKeyDown']), _0x34a895['stage']['on']('keydown', this, this['_onKeyDown']), _0x34a895['stage']['focus'] = this, this['event']('focus'), _0x2ad6c5['onPC'] && _0x1cd1ce['focus'](), !_0x2ad6c5['onMiniGame'] && !_0x2ad6c5['onBDMiniGa' + 'me']) && (this['_text'], this['_text'] = null), this['typeset'](), _0x1cd1ce['setColor'](this['_originCol' + 'or']), _0x1cd1ce['setFontSiz' + 'e'](this['fontSize']), _0x1cd1ce['setFontFac' + 'e'](_0x2ad6c5['onIPhone'] ? _0x12a05f['fontFamily' + 'Map'][this['font']] || this['font'] : this['font']), _0x4fec79['isConchApp'] && _0x1cd1ce['setMultiAb' + 'le'] && _0x1cd1ce['setMultiAb' + 'le'](this['_multiline']), _0x271eb2['lineHeight'] = this['leading'] + this['fontSize'] + 'px', _0x271eb2['fontStyle'] = this['italic'] ? 'italic' : 'normal', _0x271eb2['fontWeight'] = this['bold'] ? 'bold' : 'normal', _0x271eb2['textAlign'] = this['align'], _0x271eb2['padding'] = '0\x200', this['_syncInput' + 'Transform'](), !_0x4fec79['isConchApp'] && _0x2ad6c5['onPC'] && _0x34a895['systemTime' + 'r']['frameLoop'](0x1, this, this['_syncInput' + 'Transform']);
            }, _0xf35094['_setPrompt' + 'Color'] = function () {
                _0x3da84f['promptStyl' + 'eDOM'] = _0x2ad6c5['getElement' + 'ById']('promptStyl' + 'e'), _0x3da84f['promptStyl' + 'eDOM'] || (_0x3da84f['promptStyl' + 'eDOM'] = _0x2ad6c5['createElem' + 'ent']('style'), _0x3da84f['promptStyl' + 'eDOM']['setAttribu' + 'te']('id', 'promptStyl' + 'e'), _0x2ad6c5['document']['head']['appendChil' + 'd'](_0x3da84f['promptStyl' + 'eDOM'])), _0x3da84f['promptStyl' + 'eDOM']['innerText'] = 'input::-we' + 'bkit-input' + '-placehold' + 'er,\x20textar' + 'ea::-webki' + 't-input-pl' + 'aceholder\x20' + '{color:' + this['_promptCol' + 'or'] + ('}input:-mo' + 'z-placehol' + 'der,\x20texta' + 'rea:-moz-p' + 'laceholder' + '\x20{color:') + this['_promptCol' + 'or'] + ('}input::-m' + 'oz-placeho' + 'lder,\x20text' + 'area::-moz' + '-placehold' + 'er\x20{color:') + this['_promptCol' + 'or'] + ('}input:-ms' + '-input-pla' + 'ceholder,\x20' + 'textarea:-' + 'ms-input-p' + 'laceholder' + '\x20{color:') + this['_promptCol' + 'or'] + '}';
            }, _0xf35094['_focusOut'] = function () {
                laya['display']['Input']['isInputtin' + 'g'] = !0x1, this['_focus'] = !0x1, this['_text'] = null, this['_content'] = this['nativeInpu' + 't']['value'], this['_content'] ? (_0x34a895['superSet'](_0x12a05f, this, 'text', this['_content']), _0x34a895['superSet'](_0x12a05f, this, 'color', this['_originCol' + 'or'])) : (_0x34a895['superSet'](_0x12a05f, this, 'text', this['_prompt']), _0x34a895['superSet'](_0x12a05f, this, 'color', this['_promptCol' + 'or'])), _0x34a895['stage']['off']('keydown', this, this['_onKeyDown']), _0x34a895['stage']['focus'] = null, this['event']('blur'), this['event']('change'), _0x4fec79['isConchApp'] && this['nativeInpu' + 't']['blur'](), _0x2ad6c5['onPC'] && _0x34a895['systemTime' + 'r']['clear'](this, this['_syncInput' + 'Transform']);
            }, _0xf35094['_onKeyDown'] = function (_0x4abe46) {
                0xd === _0x4abe46['keyCode'] && (_0x2ad6c5['onMobile'] && !this['_multiline'] && (this['focus'] = !0x1), this['event']('enter'));
            }, _0xf35094['changeText'] = function (_0x21dab7) {
                this['_content'] = _0x21dab7, this['_focus'] ? (this['nativeInpu' + 't']['value'] = _0x21dab7 || '', this['event']('change')) : _0x59d26a['prototype']['changeText']['call'](this, _0x21dab7);
            }, _0x71e09a(0x0, _0xf35094, 'color', _0x59d26a['prototype']['_$get_colo' + 'r'], function (_0x163eaa) {
                this['_focus'] && this['nativeInpu' + 't']['setColor'](_0x163eaa), _0x34a895['superSet'](_0x12a05f, this, 'color', this['_content'] ? _0x163eaa : this['_promptCol' + 'or']), this['_originCol' + 'or'] = _0x163eaa;
            }), _0x71e09a(0x0, _0xf35094, 'multiline', function () {
                return this['_multiline'];
            }, function (_0x69282f) {
                this['_multiline'] = _0x69282f, this['valign'] = _0x69282f ? 'top' : 'middle';
            }), _0x71e09a(0x0, _0xf35094, 'maxChars', function () {
                return this['_maxChars'];
            }, function (_0x35feef) {
                0x0 >= _0x35feef && (_0x35feef = 0x186a0), this['_maxChars'] = _0x35feef;
            }), _0x71e09a(0x0, _0xf35094, 'text', function () {
                return this['_focus'] ? this['nativeInpu' + 't']['value'] : this['_content'] || '';
            }, function (_0x9f4f54) {
                _0x34a895['superSet'](_0x12a05f, this, 'color', this['_originCol' + 'or']), _0x9f4f54 += '', this['_focus'] ? (this['nativeInpu' + 't']['value'] = _0x9f4f54 || '', this['event']('change')) : (this['_multiline'] || (_0x9f4f54 = _0x9f4f54['replace'](/\r?\n/g, '')), this['_content'] = _0x9f4f54, _0x9f4f54 ? _0x34a895['superSet'](_0x12a05f, this, 'text', _0x9f4f54) : (_0x34a895['superSet'](_0x12a05f, this, 'text', this['_prompt']), _0x34a895['superSet'](_0x12a05f, this, 'color', this['promptColo' + 'r'])));
            }), _0x71e09a(0x0, _0xf35094, 'nativeInpu' + 't', function () {
                return this['_multiline'] ? _0x3da84f['area'] : _0x3da84f['input'];
            }), _0x71e09a(0x0, _0xf35094, 'focus', function () {
                return this['_focus'];
            }, function (_0x56fe16) {
                var _0x195b45 = this['nativeInpu' + 't'];
                this['_focus'] !== _0x56fe16 && (_0x56fe16 ? (_0x195b45['target'] ? _0x195b45['target']['_focusOut']() : this['_setInputM' + 'ethod'](), _0x195b45['target'] = this, this['_focusIn']()) : (_0x195b45['target'] = null, this['_focusOut'](), _0x2ad6c5['document']['body']['scrollTop'] = 0x0, _0x195b45['blur'](), _0x4fec79['isConchApp'] ? _0x195b45['setPos'](-0x2710, -0x2710) : _0x3da84f['inputConta' + 'iner']['contains'](_0x195b45) && _0x3da84f['inputConta' + 'iner']['removeChil' + 'd'](_0x195b45)));
            }), _0x71e09a(0x0, _0xf35094, 'editable', function () {
                return this['_editable'];
            }, function (_0x50fd71) {
                this['_editable'] = _0x50fd71, _0x4fec79['isConchApp'] && _0x3da84f['input']['setForbidE' + 'dit'](!_0x50fd71);
            }), _0x71e09a(0x0, _0xf35094, 'bgColor', _0x59d26a['prototype']['_$get_bgCo' + 'lor'], function (_0x410bff) {
                _0x34a895['superSet'](_0x12a05f, this, 'bgColor', _0x410bff), _0x4fec79['isConchApp'] && this['nativeInpu' + 't']['setBgColor'](_0x410bff);
            }), _0x71e09a(0x0, _0xf35094, 'restrict', function () {
                return this['_restrictP' + 'attern'] ? this['_restrictP' + 'attern']['source'] : '';
            }, function (_0x52cf33) {
                _0x52cf33 ? (_0x52cf33 = '[^' + _0x52cf33 + ']', _0x52cf33['indexOf']('^^') > -0x1 && (_0x52cf33 = _0x52cf33['replace']('^^', '')), this['_restrictP' + 'attern'] = new RegExp(_0x52cf33, 'g')) : this['_restrictP' + 'attern'] = null;
            }), _0x71e09a(0x0, _0xf35094, 'prompt', function () {
                return this['_prompt'];
            }, function (_0x3e040e) {
                !this['_text'] && _0x3e040e && _0x34a895['superSet'](_0x12a05f, this, 'color', this['_promptCol' + 'or']), this['promptColo' + 'r'] = this['_promptCol' + 'or'], this['_text'] ? _0x34a895['superSet'](_0x12a05f, this, 'text', this['_text'] == this['_prompt'] ? _0x3e040e : this['_text']) : _0x34a895['superSet'](_0x12a05f, this, 'text', _0x3e040e), this['_prompt'] = _0x12a05f['langPacks'] && _0x12a05f['langPacks'][_0x3e040e] ? _0x12a05f['langPacks'][_0x3e040e] : _0x3e040e;
            }), _0x71e09a(0x0, _0xf35094, 'promptColo' + 'r', function () {
                return this['_promptCol' + 'or'];
            }, function (_0x41dcb6) {
                this['_promptCol' + 'or'] = _0x41dcb6, this['_content'] || _0x34a895['superSet'](_0x12a05f, this, 'color', _0x41dcb6);
            }), _0x71e09a(0x0, _0xf35094, 'type', function () {
                return this['_type'];
            }, function (_0x30a755) {
                'password' === _0x30a755 ? this['_getTextSt' + 'yle']()['asPassword'] = !0x0 : this['_getTextSt' + 'yle']()['asPassword'] = !0x1, this['_type'] = _0x30a755;
            }), _0x3da84f['__init__'] = function () {
                if (_0x3da84f['_createInp' + 'utElement'](), _0x2ad6c5['onMobile']) {
                    var _0x14128d = !0x1;
                    (_0x2ad6c5['onMiniGame'] || _0x2ad6c5['onBDMiniGa' + 'me']) && (_0x14128d = !0x0), _0x4fec79['canvas']['addEventLi' + 'stener'](_0x3da84f['IOS_IFRAME'] ? _0x14128d ? 'touchend' : 'click' : 'touchend', _0x3da84f['_popupInpu' + 'tMethod']);
                }
            }, _0x3da84f['_popupInpu' + 'tMethod'] = function (_0xee9624) {
                if (laya['display']['Input']['isInputtin' + 'g']) {
                    var _0xcd39f4 = laya['display']['Input']['inputEleme' + 'nt'];
                    _0xcd39f4['focus']();
                }
            }, _0x3da84f['_createInp' + 'utElement'] = function () {
                _0x3da84f['_initInput'](_0x3da84f['area'] = _0x2ad6c5['createElem' + 'ent']('textarea')), _0x3da84f['_initInput'](_0x3da84f['input'] = _0x2ad6c5['createElem' + 'ent']('input')), _0x3da84f['inputConta' + 'iner'] = _0x2ad6c5['createElem' + 'ent']('div'), _0x3da84f['inputConta' + 'iner']['style']['position'] = 'absolute', _0x3da84f['inputConta' + 'iner']['style']['zIndex'] = 0x186a0, _0x2ad6c5['container']['appendChil' + 'd'](_0x3da84f['inputConta' + 'iner']), _0x3da84f['inputConta' + 'iner']['setPos'] = function (_0x360fe9, _0xc3179) {
                    _0x3da84f['inputConta' + 'iner']['style']['left'] = _0x360fe9 + 'px', _0x3da84f['inputConta' + 'iner']['style']['top'] = _0xc3179 + 'px';
                };
            }, _0x3da84f['_initInput'] = function (_0x52c3c4) {
                var _0x577e08 = _0x52c3c4['style'];
                _0x577e08['cssText'] = 'position:a' + 'bsolute;ov' + 'erflow:hid' + 'den;resize' + ':none;tran' + 'sform-orig' + 'in:0\x200;-we' + 'bkit-trans' + 'form-origi' + 'n:0\x200;-moz' + '-transform' + '-origin:0\x20' + '0;-o-trans' + 'form-origi' + 'n:0\x200;', _0x577e08['resize'] = 'none', _0x577e08['background' + 'Color'] = 'transparen' + 't', _0x577e08['border'] = 'none', _0x577e08['outline'] = 'none', _0x577e08['zIndex'] = 0x1, _0x52c3c4['addEventLi' + 'stener']('input', _0x3da84f['_processIn' + 'putting']), _0x52c3c4['addEventLi' + 'stener']('mousemove', _0x3da84f['_stopEvent']), _0x52c3c4['addEventLi' + 'stener']('mousedown', _0x3da84f['_stopEvent']), _0x52c3c4['addEventLi' + 'stener']('touchmove', _0x3da84f['_stopEvent']), _0x52c3c4['setFontFac' + 'e'] = function (_0x37f8b1) {
                    _0x52c3c4['style']['fontFamily'] = _0x37f8b1;
                }, _0x4fec79['isConchApp'] || (_0x52c3c4['setColor'] = function (_0x1d8a72) {
                    _0x52c3c4['style']['color'] = _0x1d8a72;
                }, _0x52c3c4['setFontSiz' + 'e'] = function (_0x5aaf05) {
                    _0x52c3c4['style']['fontSize'] = _0x5aaf05 + 'px';
                });
            }, _0x3da84f['_processIn' + 'putting'] = function (_0x10a0a6) {
                var _0x461be7 = laya['display']['Input']['inputEleme' + 'nt']['target'];
                if (_0x461be7) {
                    var _0xf9fa0f = laya['display']['Input']['inputEleme' + 'nt']['value'];
                    _0x461be7['_restrictP' + 'attern'] && (_0xf9fa0f = _0xf9fa0f['replace'](/\u2006|\x27/g, ''), _0x461be7['_restrictP' + 'attern']['test'](_0xf9fa0f) && (_0xf9fa0f = _0xf9fa0f['replace'](_0x461be7['_restrictP' + 'attern'], ''), laya['display']['Input']['inputEleme' + 'nt']['value'] = _0xf9fa0f)), _0x461be7['_text'] = _0xf9fa0f, _0x461be7['event']('input');
                }
            }, _0x3da84f['_stopEvent'] = function (_0x5398ed) {
                'touchmove' == _0x5398ed['type'] && _0x5398ed['preventDef' + 'ault'](), _0x5398ed['stopPropag' + 'ation'] && _0x5398ed['stopPropag' + 'ation']();
            }, _0x3da84f['TYPE_TEXT'] = 'text', _0x3da84f['TYPE_PASSW' + 'ORD'] = 'password', _0x3da84f['TYPE_EMAIL'] = 'email', _0x3da84f['TYPE_URL'] = 'url', _0x3da84f['TYPE_NUMBE' + 'R'] = 'number', _0x3da84f['TYPE_RANGE'] = 'range', _0x3da84f['TYPE_DATE'] = 'date', _0x3da84f['TYPE_MONTH'] = 'month', _0x3da84f['TYPE_WEEK'] = 'week', _0x3da84f['TYPE_TIME'] = 'time', _0x3da84f['TYPE_DATE_' + 'TIME'] = 'datetime', _0x3da84f['TYPE_DATE_' + 'TIME_LOCAL'] = 'datetime-l' + 'ocal', _0x3da84f['TYPE_SEARC' + 'H'] = 'search', _0x3da84f['input'] = null, _0x3da84f['area'] = null, _0x3da84f['inputEleme' + 'nt'] = null, _0x3da84f['inputConta' + 'iner'] = null, _0x3da84f['confirmBut' + 'ton'] = null, _0x3da84f['promptStyl' + 'eDOM'] = null, _0x3da84f['inputHeigh' + 't'] = 0x2d, _0x3da84f['isInputtin' + 'g'] = !0x1, _0x3da84f['stageMatri' + 'x'] = null, _0x5043ef(_0x3da84f, [
                'IOS_IFRAME',
                function () {
                    return this['IOS_IFRAME'] = _0x2ad6c5['onIOS'] && _0x2ad6c5['window']['top'] != _0x2ad6c5['window']['self'];
                }
            ]), _0x3da84f;
        }(_0x12a05f), _0x4f3996 = (function (_0x2e108a) {
            function _0x501faf() {
                this['_frames'] = null, this['_url'] = null, _0x501faf['__super']['call'](this), this['_setContro' + 'lNode'](this);
            }
            _0x4621f4(_0x501faf, 'laya.displ' + 'ay.Animati' + 'on', _0x2e108a);
            var _0x1773a3 = _0x501faf['prototype'];
            return _0x1773a3['destroy'] = function (_0x290ede) {
                void 0x0 === _0x290ede && (_0x290ede = !0x0), this['stop'](), laya['display']['Sprite']['prototype']['destroy']['call'](this, _0x290ede), this['_frames'] = null, this['_labels'] = null;
            }, _0x1773a3['play'] = function (_0x572b73, _0x52dddb, _0x896aa0) {
                void 0x0 === _0x572b73 && (_0x572b73 = 0x0), void 0x0 === _0x52dddb && (_0x52dddb = !0x0), void 0x0 === _0x896aa0 && (_0x896aa0 = ''), _0x896aa0 && this['_setFrames' + 'FromCache'](_0x896aa0, !0x0), _0x2e108a['prototype']['play']['call'](this, _0x572b73, _0x52dddb, _0x896aa0);
            }, _0x1773a3['_setFrames' + 'FromCache'] = function (_0x3f4b1b, _0x454724) {
                if (void 0x0 === _0x454724 && (_0x454724 = !0x1), this['_url'] && (_0x3f4b1b = this['_url'] + '#' + _0x3f4b1b), _0x3f4b1b && _0x501faf['framesMap'][_0x3f4b1b]) {
                    var _0x17a601 = _0x501faf['framesMap'][_0x3f4b1b];
                    return _0x17a601 instanceof Array ? (this['_frames'] = _0x501faf['framesMap'][_0x3f4b1b], this['_count'] = this['_frames']['length']) : (_0x17a601['nodeRoot'] && (_0x501faf['framesMap'][_0x3f4b1b] = _0x4f3996['parseAnima' + 'tionByData'](_0x17a601), _0x17a601 = _0x501faf['framesMap'][_0x3f4b1b]), this['_frames'] = _0x17a601['frames'], this['_count'] = this['_frames']['length'], this['_frameRate' + 'Changed'] || (this['_interval'] = _0x17a601['interval']), this['_labels'] = this['_copyLabel' + 's'](_0x17a601['labels'])), !0x0;
                }
                return _0x454724 && console['log']('ani\x20not\x20fo' + 'und:', _0x3f4b1b), !0x1;
            }, _0x1773a3['_copyLabel' + 's'] = function (_0x31effc) {
                if (!_0x31effc)
                    return null;
                var _0x20db1b;
                _0x20db1b = {};
                var _0x5abb2a;
                for (_0x5abb2a in _0x31effc)
                    _0x20db1b[_0x5abb2a] = _0x3b78ce['copyArray']([], _0x31effc[_0x5abb2a]);
                return _0x20db1b;
            }, _0x1773a3['_frameLoop'] = function () {
                this['_visible'] && this['_style']['alpha'] > 0.01 && this['_frames'] && _0x2e108a['prototype']['_frameLoop']['call'](this);
            }, _0x1773a3['_displayTo' + 'Index'] = function (_0x5e5bec) {
                this['_frames'] && (this['graphics'] = this['_frames'][_0x5e5bec]);
            }, _0x1773a3['clear'] = function () {
                return _0x2e108a['prototype']['clear']['call'](this), this['stop'](), this['graphics'] = null, this['_frames'] = null, this['_labels'] = null, this;
            }, _0x1773a3['loadImages'] = function (_0x41fce4, _0x3cb1bf) {
                return void 0x0 === _0x3cb1bf && (_0x3cb1bf = ''), this['_url'] = '', this['_setFrames' + 'FromCache'](_0x3cb1bf) || (this['frames'] = _0x501faf['framesMap'][_0x3cb1bf] ? _0x501faf['framesMap'][_0x3cb1bf] : _0x501faf['createFram' + 'es'](_0x41fce4, _0x3cb1bf)), this;
            }, _0x1773a3['loadAtlas'] = function (_0x476602, _0x489de9, _0x19ee24) {
                function _0x1e5182(_0x4e7aab) {
                    _0x476602 === _0x4e7aab && (_0x10afb8['frames'] = _0x501faf['framesMap'][_0x19ee24] ? _0x501faf['framesMap'][_0x19ee24] : _0x501faf['createFram' + 'es'](_0x476602, _0x19ee24), _0x489de9 && _0x489de9['run']());
                }
                void 0x0 === _0x19ee24 && (_0x19ee24 = ''), this['_url'] = '';
                var _0x10afb8 = this;
                return _0x10afb8['_setFrames' + 'FromCache'](_0x19ee24) || (_0x3943d1['getAtlas'](_0x476602) ? _0x1e5182(_0x476602) : _0x34a895['loader']['load'](_0x476602, _0x16ca2b['create'](null, _0x1e5182, [_0x476602]), null, 'atlas')), this;
            }, _0x1773a3['loadAnimat' + 'ion'] = function (_0x17dcdf, _0xf4f363, _0x26c295) {
                this['_url'] = _0x17dcdf;
                var _0x1d3181 = this;
                return this['_actionNam' + 'e'] || (this['_actionNam' + 'e'] = ''), _0x1d3181['_setFrames' + 'FromCache'](this['_actionNam' + 'e']) ? (_0x1d3181['_setFrames' + 'FromCache'](this['_actionNam' + 'e'], !0x0), this['index'] = 0x0, _0xf4f363 && _0xf4f363['run']()) : !_0x26c295 || _0x3943d1['getAtlas'](_0x26c295) ? this['_loadAnima' + 'tionData'](_0x17dcdf, _0xf4f363, _0x26c295) : _0x34a895['loader']['load'](_0x26c295, _0x16ca2b['create'](this, this['_loadAnima' + 'tionData'], [
                    _0x17dcdf,
                    _0xf4f363,
                    _0x26c295
                ]), null, 'atlas'), this;
            }, _0x1773a3['_loadAnima' + 'tionData'] = function (_0x97f65f, _0xa9f15b, _0x4d9885) {
                function _0x18e62f(_0x4a8404) {
                    if (_0x3943d1['getRes'](_0x4a8404)) {
                        if (_0x97f65f === _0x4a8404) {
                            var _0x7a5b6;
                            if (_0x501faf['framesMap'][_0x97f65f + '#'])
                                _0x4adac4['_setFrames' + 'FromCache'](_0xf6c91b['_actionNam' + 'e'], !0x0), _0xf6c91b['index'] = 0x0, _0xf6c91b['_resumePla' + 'y']();
                            else {
                                var _0x455228 = _0x4f3996['parseAnima' + 'tionData'](_0x3943d1['getRes'](_0x97f65f));
                                if (!_0x455228)
                                    return;
                                var _0x3f6a58, _0x178436 = _0x455228['animationL' + 'ist'], _0x56cf4e = 0x0, _0x1c8bf5 = _0x178436['length'];
                                for (_0x56cf4e = 0x0; _0x1c8bf5 > _0x56cf4e; _0x56cf4e++)
                                    _0x7a5b6 = _0x178436[_0x56cf4e], _0x501faf['framesMap'][_0x97f65f + '#' + _0x7a5b6['name']] = _0x7a5b6, _0x3f6a58 || (_0x3f6a58 = _0x7a5b6);
                                _0x3f6a58 && (_0x501faf['framesMap'][_0x97f65f + '#'] = _0x3f6a58, _0x4adac4['_setFrames' + 'FromCache'](_0xf6c91b['_actionNam' + 'e'], !0x0), _0xf6c91b['index'] = 0x0), _0xf6c91b['_resumePla' + 'y']();
                            }
                            _0xa9f15b && _0xa9f15b['run']();
                        }
                        _0x3943d1['clearRes'](_0x97f65f);
                    }
                }
                var _0xf6c91b = this;
                if (_0x4d9885 && !_0x3943d1['getAtlas'](_0x4d9885))
                    return void console['warn']('atlas\x20load' + '\x20fail:' + _0x4d9885);
                var _0x4adac4 = this;
                _0x3943d1['getRes'](_0x97f65f) ? _0x18e62f(_0x97f65f) : _0x34a895['loader']['load'](_0x97f65f, _0x16ca2b['create'](null, _0x18e62f, [_0x97f65f]), null, 'json');
            }, _0x71e09a(0x0, _0x1773a3, 'frames', function () {
                return this['_frames'];
            }, function (_0x3702cb) {
                this['_frames'] = _0x3702cb, _0x3702cb && (this['_count'] = _0x3702cb['length'], this['_actionNam' + 'e'] && this['_setFrames' + 'FromCache'](this['_actionNam' + 'e'], !0x0), this['index'] = this['_index']);
            }), _0x71e09a(0x0, _0x1773a3, 'autoPlay', null, function (_0x22841c) {
                _0x22841c ? this['play']() : this['stop']();
            }), _0x71e09a(0x0, _0x1773a3, 'source', null, function (_0x8fd6c) {
                _0x8fd6c['indexOf']('.ani') > -0x1 ? this['loadAnimat' + 'ion'](_0x8fd6c) : _0x8fd6c['indexOf']('.json') > -0x1 || _0x8fd6c['indexOf']('als') > -0x1 || _0x8fd6c['indexOf']('atlas') > -0x1 ? this['loadAtlas'](_0x8fd6c) : this['loadImages'](_0x8fd6c['split'](','));
            }), _0x71e09a(0x0, _0x1773a3, 'autoAnimat' + 'ion', null, function (_0x2fce55) {
                this['play'](0x0, !0x0, _0x2fce55);
            }), _0x501faf['createFram' + 'es'] = function (_0x4f63d7, _0x5ab77e) {
                var _0x3f915c;
                if ('string' == typeof _0x4f63d7) {
                    var _0x5f3dbd = _0x3943d1['getAtlas'](_0x4f63d7);
                    if (_0x5f3dbd && _0x5f3dbd['length']) {
                        _0x3f915c = [];
                        for (var _0x14d5d1 = 0x0, _0x37c540 = _0x5f3dbd['length']; _0x37c540 > _0x14d5d1; _0x14d5d1++) {
                            var _0x4e5087 = new _0x42326c();
                            _0x4e5087['drawImage'](_0x3943d1['getRes'](_0x5f3dbd[_0x14d5d1]), 0x0, 0x0), _0x3f915c['push'](_0x4e5087);
                        }
                    }
                } else {
                    if (_0x4f63d7 instanceof Array) {
                        for (_0x3f915c = [], _0x14d5d1 = 0x0, _0x37c540 = _0x4f63d7['length']; _0x37c540 > _0x14d5d1; _0x14d5d1++)
                            _0x4e5087 = new _0x42326c(), _0x4e5087['loadImage'](_0x4f63d7[_0x14d5d1], 0x0, 0x0), _0x3f915c['push'](_0x4e5087);
                    }
                }
                return _0x5ab77e && (_0x501faf['framesMap'][_0x5ab77e] = _0x3f915c), _0x3f915c;
            }, _0x501faf['clearCache'] = function (_0x526acf) {
                var _0x2303c4, _0x341bce = _0x501faf['framesMap'], _0x4c3013 = _0x526acf + '#';
                for (_0x2303c4 in _0x341bce)
                    (_0x2303c4 === _0x526acf || 0x0 === _0x2303c4['indexOf'](_0x4c3013)) && delete _0x501faf['framesMap'][_0x2303c4];
            }, _0x501faf['framesMap'] = {}, _0x501faf;
        }(_0x174293), function (_0x459f2c) {
            function _0x13de39() {
                this['_target'] = null, this['_playEvent'] = null, this['_initData'] = {}, this['_aniKeys'] = null, this['_effectCla' + 'ss'] = null, _0x13de39['__super']['call'](this);
            }
            _0x4621f4(_0x13de39, 'laya.displ' + 'ay.EffectA' + 'nimation', _0x459f2c);
            var _0x298de2 = _0x13de39['prototype'];
            return _0x298de2['_onOtherBe' + 'gin'] = function (_0xeee39) {
                _0xeee39 !== this && this['stop']();
            }, _0x298de2['_addEvent'] = function () {
                this['_target'] && this['_playEvent'] && (this['_setContro' + 'lNode'](this['_target']), this['_target']['on'](this['_playEvent'], this, this['_onPlayAct' + 'ion']));
            }, _0x298de2['_onPlayAct' + 'ion'] = function () {
                this['play'](0x0, !0x1);
            }, _0x298de2['play'] = function (_0x3c8d43, _0x192835, _0x39bc79) {
                void 0x0 === _0x3c8d43 && (_0x3c8d43 = 0x0), void 0x0 === _0x192835 && (_0x192835 = !0x0), void 0x0 === _0x39bc79 && (_0x39bc79 = ''), this['_target'] && (this['_target']['event']('effectbegi' + 'n', [this]), this['_recordIni' + 'tData'](), laya['display']['AnimationB' + 'ase']['prototype']['play']['call'](this, _0x3c8d43, _0x192835, _0x39bc79));
            }, _0x298de2['_recordIni' + 'tData'] = function () {
                if (this['_aniKeys']) {
                    var _0x5edbe7 = 0x0, _0x2fa206 = 0x0;
                    _0x2fa206 = this['_aniKeys']['length'];
                    var _0x1275e9;
                    for (_0x5edbe7 = 0x0; _0x2fa206 > _0x5edbe7; _0x5edbe7++)
                        _0x1275e9 = this['_aniKeys'][_0x5edbe7], this['_initData'][_0x1275e9] = this['_target'][_0x1275e9];
                }
            }, _0x298de2['_displayTo' + 'Index'] = function (_0x4e7905) {
                if (this['_animation' + 'Data']) {
                    0x0 > _0x4e7905 && (_0x4e7905 = 0x0), _0x4e7905 > this['_count'] && (_0x4e7905 = this['_count']);
                    var _0x3e8b35 = this['_animation' + 'Data']['nodes'], _0x1707f2 = 0x0, _0x4a371e = _0x3e8b35['length'];
                    for (_0x4a371e = _0x4a371e > 0x1 ? 0x1 : _0x4a371e, _0x1707f2 = 0x0; _0x4a371e > _0x1707f2; _0x1707f2++)
                        this['_displayNo' + 'deToFrame'](_0x3e8b35[_0x1707f2], _0x4e7905);
                }
            }, _0x298de2['_displayNo' + 'deToFrame'] = function (_0x5e2f11, _0x5eafdf, _0x2dfdf4) {
                if (this['_target']) {
                    var _0x44b83c, _0x2782d0, _0x3f43d8, _0x219567, _0x4c6bbd, _0x375fb4, _0x44b688, _0x363bb9 = this['_target'], _0x150a5c = _0x5e2f11['frames'], _0x3f0460 = _0x5e2f11['keys'], _0x2192b7 = 0x0, _0x4ccea7 = _0x3f0460['length'], _0x145f56 = _0x5e2f11['secondFram' + 'es'], _0x38f630 = 0x0;
                    for (_0x2192b7 = 0x0; _0x4ccea7 > _0x2192b7; _0x2192b7++)
                        _0x44b83c = _0x3f0460[_0x2192b7], _0x2782d0 = _0x150a5c[_0x44b83c], _0x38f630 = _0x145f56[_0x44b83c], -0x1 == _0x38f630 ? _0x3f43d8 = this['_initData'][_0x44b83c] : _0x38f630 > _0x5eafdf ? (_0x4c6bbd = _0x5e2f11['keyframes'][_0x44b83c], _0x375fb4 = _0x4c6bbd[0x0], _0x375fb4['tween'] ? (_0x219567 = _0x452b71[_0x375fb4['tweenMetho' + 'd']], null == _0x219567 && (_0x219567 = _0x452b71['linearNone']), _0x44b688 = _0x4c6bbd[0x1], _0x3f43d8 = _0x219567(_0x5eafdf, this['_initData'][_0x44b83c], _0x44b688['value'] - this['_initData'][_0x44b83c], _0x44b688['index'])) : _0x3f43d8 = this['_initData'][_0x44b83c]) : _0x3f43d8 = _0x2782d0['length'] > _0x5eafdf ? _0x2782d0[_0x5eafdf] : _0x2782d0[_0x2782d0['length'] - 0x1], _0x363bb9[_0x44b83c] = _0x3f43d8;
                }
            }, _0x298de2['_calculate' + 'KeyFrames'] = function (_0x43a300) {
                _0x459f2c['prototype']['_calculate' + 'KeyFrames']['call'](this, _0x43a300);
                var _0x57853f, _0x1dd578, _0x5ecb93 = _0x43a300['keyframes'], _0x5394e4 = (_0x43a300['target'], {});
                _0x43a300['secondFram' + 'es'] = _0x5394e4;
                for (_0x57853f in _0x5ecb93)
                    _0x1dd578 = _0x5ecb93[_0x57853f], _0x1dd578['length'] <= 0x1 ? _0x5394e4[_0x57853f] = -0x1 : _0x5394e4[_0x57853f] = _0x1dd578[0x1]['index'];
            }, _0x71e09a(0x0, _0x298de2, 'target', function () {
                return this['_target'];
            }, function (_0x229df3) {
                this['_target'] && this['_target']['off']('effectbegi' + 'n', this, this['_onOtherBe' + 'gin']), this['_target'] = _0x229df3, this['_target'] && this['_target']['on']('effectbegi' + 'n', this, this['_onOtherBe' + 'gin']), this['_addEvent']();
            }), _0x71e09a(0x0, _0x298de2, 'playEvent', null, function (_0x3d41c2) {
                this['_playEvent'] = _0x3d41c2, _0x3d41c2 && this['_addEvent']();
            }), _0x71e09a(0x0, _0x298de2, 'effectData', null, function (_0x27a965) {
                if (_0x27a965) {
                    var _0x57a2a2 = _0x27a965['animations'];
                    if (_0x57a2a2 && _0x57a2a2[0x0]) {
                        var _0x4ad467 = _0x57a2a2[0x0];
                        this['_setUp']({}, _0x4ad467), _0x4ad467['nodes'] && _0x4ad467['nodes'][0x0] && (this['_aniKeys'] = _0x4ad467['nodes'][0x0]['keys']);
                    }
                }
            }), _0x71e09a(0x0, _0x298de2, 'effectClas' + 's', null, function (_0x513d14) {
                if (this['_effectCla' + 'ss'] = _0x421b39['getClass'](_0x513d14), this['_effectCla' + 'ss']) {
                    var _0x556236 = this['_effectCla' + 'ss']['uiView'];
                    if (_0x556236) {
                        var _0xd09258 = _0x556236['animations'];
                        if (_0xd09258 && _0xd09258[0x0]) {
                            var _0x532662 = _0xd09258[0x0];
                            this['_setUp']({}, _0x532662), _0x532662['nodes'] && _0x532662['nodes'][0x0] && (this['_aniKeys'] = _0x532662['nodes'][0x0]['keys']);
                        }
                    }
                }
            }), _0x13de39['EFFECT_BEG' + 'IN'] = 'effectbegi' + 'n', _0x13de39;
        }(_0x18c4f0), function (_0x198b51) {
            function _0x85ff69() {
                this['animationL' + 'ist'] = null, this['animationD' + 'ic'] = null, this['_nodeList'] = null, this['_nodeDefau' + 'ltProps'] = null, this['_gList'] = null, this['_nodeIDAni' + 'Dic'] = {}, this['_rootNode'] = null, this['_nodeGDic'] = null, _0x85ff69['__super']['call'](this);
            }
            var _0x4df771;
            _0x4621f4(_0x85ff69, 'laya.utils' + '.GraphicAn' + 'imation', _0x198b51);
            var _0x34e2dc = _0x85ff69['prototype'];
            return _0x34e2dc['_parseNode' + 'List'] = function (_0x4a4c91) {
                this['_nodeList'] || (this['_nodeList'] = []), this['_nodeDefau' + 'ltProps'][_0x4a4c91['compId']] = _0x4a4c91['props'], _0x4a4c91['compId'] && this['_nodeList']['push'](_0x4a4c91['compId']);
                var _0x281843 = _0x4a4c91['child'];
                if (_0x281843) {
                    var _0x56d725 = 0x0, _0x1816e8 = _0x281843['length'];
                    for (_0x56d725 = 0x0; _0x1816e8 > _0x56d725; _0x56d725++)
                        this['_parseNode' + 'List'](_0x281843[_0x56d725]);
                }
            }, _0x34e2dc['_calGraphi' + 'cData'] = function (_0x16a6ca) {
                if (this['_setUp'](null, _0x16a6ca), this['_createGra' + 'phicData'](), this['_nodeIDAni' + 'Dic']) {
                    var _0x3140ad;
                    for (_0x3140ad in this['_nodeIDAni' + 'Dic'])
                        this['_nodeIDAni' + 'Dic'][_0x3140ad] = null;
                }
            }, _0x34e2dc['_createGra' + 'phicData'] = function () {
                var _0x21d9d4 = [], _0x52a20b = 0x0, _0x14d101 = this['count'], _0x11be69 = this['_usedFrame' + 's'];
                _0x11be69 || (_0x11be69 = []);
                var _0x32e267;
                for (_0x52a20b = 0x0; _0x14d101 > _0x52a20b; _0x52a20b++)
                    (_0x11be69[_0x52a20b] || !_0x32e267) && (_0x32e267 = this['_createFra' + 'meGraphic'](_0x52a20b)), _0x21d9d4['push'](_0x32e267);
                this['_gList'] = _0x21d9d4;
            }, _0x34e2dc['_createFra' + 'meGraphic'] = function (_0x385cee) {
                var _0x5e316b = new _0x42326c();
                return _0x85ff69['_rootMatri' + 'x'] || (_0x85ff69['_rootMatri' + 'x'] = new _0x250bb7()), this['_updateNod' + 'eGraphic'](this['_rootNode'], _0x385cee, _0x85ff69['_rootMatri' + 'x'], _0x5e316b), _0x5e316b;
            }, _0x34e2dc['_updateNod' + 'eGraphic'] = function (_0x1f8d23, _0x161c9c, _0x37f034, _0x33f2fa, _0x4c3a18) {
                void 0x0 === _0x4c3a18 && (_0x4c3a18 = 0x1);
                var _0x5b7447;
                _0x5b7447 = this['_nodeGDic'][_0x1f8d23['compId']] = this['_getNodeGr' + 'aphicData'](_0x1f8d23['compId'], _0x161c9c, this['_nodeGDic'][_0x1f8d23['compId']]), _0x5b7447['resultTran' + 'sform'] || (_0x5b7447['resultTran' + 'sform'] = new _0x250bb7());
                var _0x450913;
                _0x450913 = _0x5b7447['resultTran' + 'sform'], _0x250bb7['mul'](_0x5b7447['transform'], _0x37f034, _0x450913);
                var _0x28303e, _0x4efca8 = _0x5b7447['alpha'] * _0x4c3a18;
                if (!(0.01 > _0x4efca8)) {
                    _0x5b7447['skin'] && (_0x28303e = this['_getTextur' + 'eByUrl'](_0x5b7447['skin']), _0x28303e && (_0x450913['_checkTran' + 'sform']() ? (_0x33f2fa['drawTextur' + 'e'](_0x28303e, 0x0, 0x0, _0x5b7447['width'], _0x5b7447['height'], _0x450913, _0x4efca8), _0x5b7447['resultTran' + 'sform'] = null) : _0x33f2fa['drawTextur' + 'e'](_0x28303e, _0x450913['tx'], _0x450913['ty'], _0x5b7447['width'], _0x5b7447['height'], null, _0x4efca8)));
                    var _0x567372 = _0x1f8d23['child'];
                    if (_0x567372) {
                        var _0x28972d = 0x0, _0x5675e4 = 0x0;
                        for (_0x5675e4 = _0x567372['length'], _0x28972d = 0x0; _0x5675e4 > _0x28972d; _0x28972d++)
                            this['_updateNod' + 'eGraphic'](_0x567372[_0x28972d], _0x161c9c, _0x450913, _0x33f2fa, _0x4efca8);
                    }
                }
            }, _0x34e2dc['_updateNoC' + 'hilds'] = function (_0x4c038c, _0x35ecaa) {
                if (_0x4c038c['skin']) {
                    var _0x561f71 = this['_getTextur' + 'eByUrl'](_0x4c038c['skin']);
                    if (_0x561f71) {
                        var _0x4a2843 = _0x4c038c['transform'];
                        _0x4a2843['_checkTran' + 'sform']();
                        var _0x375b09 = !0x1;
                        _0x375b09 = !_0x4a2843['_bTransfor' + 'm'], _0x375b09 ? _0x35ecaa['drawTextur' + 'e'](_0x561f71, _0x4a2843['tx'], _0x4a2843['ty'], _0x4c038c['width'], _0x4c038c['height'], null, _0x4c038c['alpha']) : _0x35ecaa['drawTextur' + 'e'](_0x561f71, 0x0, 0x0, _0x4c038c['width'], _0x4c038c['height'], _0x4a2843['clone'](), _0x4c038c['alpha']);
                    }
                }
            }, _0x34e2dc['_updateNod' + 'eGraphic2'] = function (_0x11e5cf, _0x3dc9b0, _0x2281d6) {
                var _0x257624;
                if (_0x257624 = this['_nodeGDic'][_0x11e5cf['compId']] = this['_getNodeGr' + 'aphicData'](_0x11e5cf['compId'], _0x3dc9b0, this['_nodeGDic'][_0x11e5cf['compId']]), !_0x11e5cf['child'])
                    return void this['_updateNoC' + 'hilds'](_0x257624, _0x2281d6);
                var _0xc82d53 = _0x257624['transform'];
                _0xc82d53['_checkTran' + 'sform']();
                var _0x326c23 = !0x1;
                _0x326c23 = !_0xc82d53['_bTransfor' + 'm'];
                var _0x4bcdde = !0x1;
                _0x4bcdde = _0x326c23 && (0x0 != _0xc82d53['tx'] || 0x0 != _0xc82d53['ty']);
                var _0x1ce144 = !0x1;
                _0x1ce144 = _0xc82d53['_bTransfor' + 'm'] || 0x1 != _0x257624['alpha'], _0x1ce144 && _0x2281d6['save'](), 0x1 != _0x257624['alpha'] && _0x2281d6['alpha'](_0x257624['alpha']), _0x326c23 ? _0x4bcdde && _0x2281d6['translate'](_0xc82d53['tx'], _0xc82d53['ty']) : _0x2281d6['transform'](_0xc82d53['clone']());
                var _0x19f95c, _0x3d2a07 = _0x11e5cf['child'];
                if (_0x257624['skin'] && (_0x19f95c = this['_getTextur' + 'eByUrl'](_0x257624['skin']), _0x19f95c && _0x2281d6['drawImage'](_0x19f95c, 0x0, 0x0, _0x257624['width'], _0x257624['height'])), _0x3d2a07) {
                    var _0x3e3f1e = 0x0, _0xfdbf0a = 0x0;
                    for (_0xfdbf0a = _0x3d2a07['length'], _0x3e3f1e = 0x0; _0xfdbf0a > _0x3e3f1e; _0x3e3f1e++)
                        this['_updateNod' + 'eGraphic2'](_0x3d2a07[_0x3e3f1e], _0x3dc9b0, _0x2281d6);
                }
                _0x1ce144 ? _0x2281d6['restore']() : _0x326c23 ? _0x4bcdde && _0x2281d6['translate'](-_0xc82d53['tx'], -_0xc82d53['ty']) : _0x2281d6['transform'](_0xc82d53['clone']()['invert']());
            }, _0x34e2dc['_calculate' + 'KeyFrames'] = function (_0x4591c4) {
                _0x198b51['prototype']['_calculate' + 'KeyFrames']['call'](this, _0x4591c4), this['_nodeIDAni' + 'Dic'][_0x4591c4['target']] = _0x4591c4;
            }, _0x34e2dc['getNodeDat' + 'aByID'] = function (_0x4380e0) {
                return this['_nodeIDAni' + 'Dic'][_0x4380e0];
            }, _0x34e2dc['_getParams'] = function (_0x34c32a, _0x102775, _0x265889, _0x17cfdc) {
                var _0x2d97ec = _0x85ff69['_temParam'];
                _0x2d97ec['length'] = _0x102775['length'];
                var _0x4ac4a1 = 0x0, _0x5a58a7 = _0x102775['length'];
                for (_0x4ac4a1 = 0x0; _0x5a58a7 > _0x4ac4a1; _0x4ac4a1++)
                    _0x2d97ec[_0x4ac4a1] = this['_getObjVar'](_0x34c32a, _0x102775[_0x4ac4a1][0x0], _0x265889, _0x102775[_0x4ac4a1][0x1], _0x17cfdc);
                return _0x2d97ec;
            }, _0x34e2dc['_getObjVar'] = function (_0x1d3150, _0x59b8fb, _0x28148a, _0x53e2f3, _0x415546) {
                if (_0x1d3150['hasOwnProp' + 'erty'](_0x59b8fb)) {
                    var _0x30e174 = _0x1d3150[_0x59b8fb];
                    return _0x28148a >= _0x30e174['length'] && (_0x28148a = _0x30e174['length'] - 0x1), _0x1d3150[_0x59b8fb][_0x28148a];
                }
                return _0x415546['hasOwnProp' + 'erty'](_0x59b8fb) ? _0x415546[_0x59b8fb] : _0x53e2f3;
            }, _0x34e2dc['_getNodeGr' + 'aphicData'] = function (_0x2bb8ab, _0x59ec07, _0x27c541) {
                _0x27c541 || (_0x27c541 = new _0x4df771()), _0x27c541['transform'] ? _0x27c541['transform']['identity']() : _0x27c541['transform'] = new _0x250bb7();
                var _0x4a3083 = this['getNodeDat' + 'aByID'](_0x2bb8ab);
                if (!_0x4a3083)
                    return _0x27c541;
                var _0x3a885a = _0x4a3083['frames'], _0x183b67 = this['_getParams'](_0x3a885a, _0x85ff69['_drawTextu' + 'reCmd'], _0x59ec07, this['_nodeDefau' + 'ltProps'][_0x2bb8ab]), _0x54f59f = _0x183b67[0x0], _0x5b5bc7 = NaN, _0x24ae3d = NaN, _0x517e90 = _0x183b67[0x5], _0x57abf4 = _0x183b67[0x6], _0xd1b13d = _0x183b67[0xd], _0x147f59 = _0x183b67[0xe], _0x47f657 = _0x183b67[0x7], _0x2edf00 = _0x183b67[0x8], _0x49395c = _0x183b67[0x9], _0x50b75c = _0x183b67[0xb], _0x1e46c5 = _0x183b67[0xc];
                _0x5b5bc7 = _0x183b67[0x3], _0x24ae3d = _0x183b67[0x4], (0x0 == _0x5b5bc7 || 0x0 == _0x24ae3d) && (_0x54f59f = null), -0x1 == _0x5b5bc7 && (_0x5b5bc7 = 0x0), -0x1 == _0x24ae3d && (_0x24ae3d = 0x0);
                var _0x17e4e1;
                _0x27c541['skin'] = _0x54f59f, _0x27c541['width'] = _0x5b5bc7, _0x27c541['height'] = _0x24ae3d, _0x54f59f && (_0x17e4e1 = this['_getTextur' + 'eByUrl'](_0x54f59f), _0x17e4e1 ? (_0x5b5bc7 || (_0x5b5bc7 = _0x17e4e1['sourceWidt' + 'h']), _0x24ae3d || (_0x24ae3d = _0x17e4e1['sourceHeig' + 'ht'])) : console['warn']('lost\x20skin:', _0x54f59f, ',you\x20may\x20l' + 'oad\x20pics\x20f' + 'irst')), _0x27c541['alpha'] = _0x183b67[0xa];
                var _0x3cdc0b = _0x27c541['transform'];
                0x0 != _0xd1b13d && (_0x517e90 = _0xd1b13d * _0x5b5bc7), 0x0 != _0x147f59 && (_0x57abf4 = _0x147f59 * _0x24ae3d), (0x0 != _0x517e90 || 0x0 != _0x57abf4) && _0x3cdc0b['translate'](-_0x517e90, -_0x57abf4);
                var _0x2b029e = null;
                if (_0x49395c || 0x1 !== _0x47f657 || 0x1 !== _0x2edf00 || _0x50b75c || _0x1e46c5) {
                    _0x2b029e = _0x85ff69['_tempMt'], _0x2b029e['identity'](), _0x2b029e['_bTransfor' + 'm'] = !0x0;
                    var _0x3220af = 0.0174532922222222 * (_0x49395c - _0x50b75c), _0xccbaf4 = 0.0174532922222222 * (_0x49395c + _0x1e46c5), _0x543e74 = Math['cos'](_0xccbaf4), _0x3a88e0 = Math['sin'](_0xccbaf4), _0x2ab555 = Math['sin'](_0x3220af), _0x54704f = Math['cos'](_0x3220af);
                    _0x2b029e['a'] = _0x47f657 * _0x543e74, _0x2b029e['b'] = _0x47f657 * _0x3a88e0, _0x2b029e['c'] = -_0x2edf00 * _0x2ab555, _0x2b029e['d'] = _0x2edf00 * _0x54704f, _0x2b029e['tx'] = _0x2b029e['ty'] = 0x0;
                }
                return _0x2b029e && (_0x3cdc0b = _0x250bb7['mul'](_0x3cdc0b, _0x2b029e, _0x3cdc0b)), _0x3cdc0b['translate'](_0x183b67[0x1], _0x183b67[0x2]), _0x27c541;
            }, _0x34e2dc['_getTextur' + 'eByUrl'] = function (_0x28551d) {
                return _0x3943d1['getRes'](_0x28551d);
            }, _0x34e2dc['setAniData'] = function (_0x3be65a, _0x2a8aa6) {
                if (_0x3be65a['animations']) {
                    this['_nodeDefau' + 'ltProps'] = {}, this['_nodeGDic'] = {}, this['_nodeList'] && (this['_nodeList']['length'] = 0x0), this['_rootNode'] = _0x3be65a, this['_parseNode' + 'List'](_0x3be65a);
                    var _0xbad2c8, _0x20043f = {}, _0x521389 = [], _0x4c3885 = _0x3be65a['animations'], _0x41f586 = 0x0, _0x3a6c7e = _0x4c3885['length'];
                    for (_0x41f586 = 0x0; _0x3a6c7e > _0x41f586; _0x41f586++)
                        if (_0xbad2c8 = _0x4c3885[_0x41f586], this['_labels'] = null, (!_0x2a8aa6 || _0x2a8aa6 == _0xbad2c8['name']) && _0xbad2c8) {
                            try {
                                this['_calGraphi' + 'cData'](_0xbad2c8);
                            } catch (_0x2cc8f7) {
                                console['warn']('parse\x20anim' + 'ation\x20fail' + ':' + _0xbad2c8['name'] + (',empty\x20ani' + 'mation\x20cre' + 'ated')), this['_gList'] = [];
                            }
                            var _0x185338 = {};
                            _0x185338['interval'] = 0x3e8 / _0xbad2c8['frameRate'], _0x185338['frames'] = this['_gList'], _0x185338['labels'] = this['_labels'], _0x185338['name'] = _0xbad2c8['name'], _0x521389['push'](_0x185338), _0x20043f[_0xbad2c8['name']] = _0x185338;
                        }
                    this['animationL' + 'ist'] = _0x521389, this['animationD' + 'ic'] = _0x20043f;
                }
                _0x85ff69['_temParam']['length'] = 0x0;
            }, _0x34e2dc['parseByDat' + 'a'] = function (_0x499254) {
                var _0x315c4b, _0x5c058b;
                _0x315c4b = _0x499254['nodeRoot'], _0x5c058b = _0x499254['aniO'], delete _0x499254['nodeRoot'], delete _0x499254['aniO'], this['_nodeDefau' + 'ltProps'] = {}, this['_nodeGDic'] = {}, this['_nodeList'] && (this['_nodeList']['length'] = 0x0), this['_rootNode'] = _0x315c4b, this['_parseNode' + 'List'](_0x315c4b), this['_labels'] = null;
                try {
                    this['_calGraphi' + 'cData'](_0x5c058b);
                } catch (_0x368361) {
                    console['warn']('parse\x20anim' + 'ation\x20fail' + ':' + _0x5c058b['name'] + (',empty\x20ani' + 'mation\x20cre' + 'ated')), this['_gList'] = [];
                }
                var _0x44f705 = _0x499254;
                return _0x44f705['interval'] = 0x3e8 / _0x5c058b['frameRate'], _0x44f705['frames'] = this['_gList'], _0x44f705['labels'] = this['_labels'], _0x44f705['name'] = _0x5c058b['name'], _0x44f705;
            }, _0x34e2dc['setUpAniDa' + 'ta'] = function (_0x4df8cb) {
                if (_0x4df8cb['animations']) {
                    var _0x26dd0f, _0x17dad3 = {}, _0x4340dc = [], _0x5a650e = _0x4df8cb['animations'], _0x11dd8d = 0x0, _0x34d381 = _0x5a650e['length'];
                    for (_0x11dd8d = 0x0; _0x34d381 > _0x11dd8d; _0x11dd8d++)
                        if (_0x26dd0f = _0x5a650e[_0x11dd8d]) {
                            var _0x308aa1 = {};
                            _0x308aa1['name'] = _0x26dd0f['name'], _0x308aa1['aniO'] = _0x26dd0f, _0x308aa1['nodeRoot'] = _0x4df8cb, _0x4340dc['push'](_0x308aa1), _0x17dad3[_0x26dd0f['name']] = _0x308aa1;
                        }
                    this['animationL' + 'ist'] = _0x4340dc, this['animationD' + 'ic'] = _0x17dad3;
                }
            }, _0x34e2dc['_clear'] = function () {
                this['animationL' + 'ist'] = null, this['animationD' + 'ic'] = null, this['_gList'] = null, this['_nodeGDic'] = null;
            }, _0x85ff69['parseAnima' + 'tionByData'] = function (_0x25e221) {
                _0x85ff69['_I'] || (_0x85ff69['_I'] = new _0x85ff69());
                var _0x5948c1;
                return _0x5948c1 = _0x85ff69['_I']['parseByDat' + 'a'](_0x25e221), _0x85ff69['_I']['_clear'](), _0x5948c1;
            }, _0x85ff69['parseAnima' + 'tionData'] = function (_0x247a80) {
                _0x85ff69['_I'] || (_0x85ff69['_I'] = new _0x85ff69()), _0x85ff69['_I']['setUpAniDa' + 'ta'](_0x247a80);
                var _0x3e36e4;
                return _0x3e36e4 = {}, _0x3e36e4['animationL' + 'ist'] = _0x85ff69['_I']['animationL' + 'ist'], _0x3e36e4['animationD' + 'ic'] = _0x85ff69['_I']['animationD' + 'ic'], _0x85ff69['_I']['_clear'](), _0x3e36e4;
            }, _0x85ff69['_temParam'] = [], _0x85ff69['_I'] = null, _0x85ff69['_rootMatri' + 'x'] = null, _0x5043ef(_0x85ff69, [
                '_drawTextu' + 'reCmd',
                function () {
                    return this['_drawTextu' + 'reCmd'] = [
                        [
                            'skin',
                            null
                        ],
                        [
                            'x',
                            0x0
                        ],
                        [
                            'y',
                            0x0
                        ],
                        [
                            'width',
                            -0x1
                        ],
                        [
                            'height',
                            -0x1
                        ],
                        [
                            'pivotX',
                            0x0
                        ],
                        [
                            'pivotY',
                            0x0
                        ],
                        [
                            'scaleX',
                            0x1
                        ],
                        [
                            'scaleY',
                            0x1
                        ],
                        [
                            'rotation',
                            0x0
                        ],
                        [
                            'alpha',
                            0x1
                        ],
                        [
                            'skewX',
                            0x0
                        ],
                        [
                            'skewY',
                            0x0
                        ],
                        [
                            'anchorX',
                            0x0
                        ],
                        [
                            'anchorY',
                            0x0
                        ]
                    ];
                },
                '_tempMt',
                function () {
                    return this['_tempMt'] = new _0x250bb7();
                }
            ]), _0x85ff69['__init$'] = function () {
                _0x4df771 = function () {
                    function _0x3f14a7() {
                        this['skin'] = null, this['transform'] = null, this['resultTran' + 'sform'] = null, this['width'] = NaN, this['height'] = NaN, this['alpha'] = 0x1;
                    }
                    return _0x4621f4(_0x3f14a7, ''), _0x3f14a7;
                }();
            }, _0x85ff69;
        }(_0x18c4f0));
    _0x34a895['__init']([
        _0x3f0f68,
        _0x571bfb,
        _0x4f3996,
        _0x10b6f2,
        _0x2f73a1,
        _0x53e0be,
        _0x3df59e,
        _0x423a0f
    ]);
}(window, document, Laya), function (_0x4d4908, _0x2e5e5e, _0x76a4cb) {
    var _0x1d32e4 = (_0x76a4cb['un'], _0x76a4cb['uns'], _0x76a4cb['static'], _0x76a4cb['class']), _0x5dcf81 = _0x76a4cb['getset'], _0x29289e = (_0x76a4cb['__newvec'], laya['filters']['BlurFilter']), _0x3890e5 = laya['filters']['ColorFilte' + 'r'], _0x1004a7 = laya['utils']['ColorUtils'], _0x442c82 = laya['components']['Component'], _0x4b1787 = laya['utils']['Ease'], _0xdb9895 = (laya['events']['Event'], laya['filters']['GlowFilter']), _0x50630f = laya['utils']['Handler'], _0x24813c = (laya['display']['Node'], laya['display']['Sprite'], laya['utils']['Tween']), _0x129923 = laya['utils']['Utils'], _0xff4f6b = function () {
            function _0x296e2c() {
            }
            return _0x1d32e4(_0x296e2c, 'LayaMain'), _0x296e2c;
        }(), _0x4c2ca3 = function () {
            function _0x338188() {
                this['_filter'] = null, this['_target'] = null;
            }
            _0x1d32e4(_0x338188, 'laya.effec' + 't.FilterSe' + 'tterBase');
            var _0x42b932 = _0x338188['prototype'];
            return _0x42b932['paramChang' + 'ed'] = function () {
                _0x76a4cb['systemTime' + 'r']['callLater'](this, this['buildFilte' + 'r']);
            }, _0x42b932['buildFilte' + 'r'] = function () {
                this['_target'] && this['addFilter'](this['_target']);
            }, _0x42b932['addFilter'] = function (_0x2872cb) {
                if (_0x2872cb) {
                    if (_0x2872cb['filters']) {
                        var _0x3f61c9;
                        _0x3f61c9 = _0x2872cb['filters'], _0x3f61c9['indexOf'](this['_filter']) < 0x0 && (_0x3f61c9['push'](this['_filter']), _0x2872cb['filters'] = _0x129923['copyArray']([], _0x3f61c9));
                    } else
                        _0x2872cb['filters'] = [this['_filter']];
                }
            }, _0x42b932['removeFilt' + 'er'] = function (_0x409006) {
                _0x409006 && (_0x409006['filters'] = null);
            }, _0x5dcf81(0x0, _0x42b932, 'target', null, function (_0x431141) {
                this['_target'] != _0x431141 && (this['_target'] = _0x431141, this['paramChang' + 'ed']());
            }), _0x338188;
        }(), _0x34f0e6 = (function () {
            function _0x9e1322() {
                this['_tar'] = null, this['_curState'] = 0x0, this['_curTween'] = null, this['effectScal' + 'e'] = 1.5, this['tweenTime'] = 0x12c, this['effectEase'] = null, this['backEase'] = null;
            }
            _0x1d32e4(_0x9e1322, 'laya.effec' + 't.ButtonEf' + 'fect');
            var _0x2a976e = _0x9e1322['prototype'];
            return _0x2a976e['toChangedS' + 'tate'] = function () {
                this['_curState'] = 0x1, this['_curTween'] && _0x24813c['clear'](this['_curTween']), this['_curTween'] = _0x24813c['to'](this['_tar'], {
                    'scaleX': this['effectScal' + 'e'],
                    'scaleY': this['effectScal' + 'e']
                }, this['tweenTime'], _0x4b1787[this['effectEase']], _0x50630f['create'](this, this['tweenCompl' + 'ete']));
            }, _0x2a976e['toInitStat' + 'e'] = function () {
                0x2 != this['_curState'] && (this['_curTween'] && _0x24813c['clear'](this['_curTween']), this['_curState'] = 0x2, this['_curTween'] = _0x24813c['to'](this['_tar'], {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, this['tweenTime'], _0x4b1787[this['backEase']], _0x50630f['create'](this, this['tweenCompl' + 'ete'])));
            }, _0x2a976e['tweenCompl' + 'ete'] = function () {
                this['_curState'] = 0x0, this['_curTween'] = null;
            }, _0x5dcf81(0x0, _0x2a976e, 'target', null, function (_0x4f69ae) {
                this['_tar'] = _0x4f69ae, _0x4f69ae['on']('mousedown', this, this['toChangedS' + 'tate']), _0x4f69ae['on']('mouseup', this, this['toInitStat' + 'e']), _0x4f69ae['on']('mouseout', this, this['toInitStat' + 'e']);
            }), _0x9e1322;
        }(), function (_0x581120) {
            function _0x437060() {
                this['duration'] = 0x3e8, this['delay'] = 0x0, this['repeat'] = 0x0, this['ease'] = null, this['eventName'] = null, this['target'] = null, this['autoDestro' + 'yAtComplet' + 'e'] = !0x0, this['_comlete'] = null, this['_tween'] = null, _0x437060['__super']['call'](this);
            }
            _0x1d32e4(_0x437060, 'laya.effec' + 't.EffectBa' + 'se', _0x581120);
            var _0x2ed25e = _0x437060['prototype'];
            return _0x2ed25e['_onAwake'] = function () {
                this['target'] = this['target'] || this['owner'], this['autoDestro' + 'yAtComplet' + 'e'] && (this['_comlete'] = _0x50630f['create'](this['target'], this['target']['destroy'], null, !0x1)), this['eventName'] ? this['owner']['on'](this['eventName'], this, this['_exeTween']) : this['_exeTween']();
            }, _0x2ed25e['_exeTween'] = function () {
                this['_tween'] = this['_doTween'](), this['_tween']['repeat'] = this['repeat'];
            }, _0x2ed25e['_doTween'] = function () {
                return null;
            }, _0x2ed25e['onReset'] = function () {
                this['duration'] = 0x3e8, this['delay'] = 0x0, this['repeat'] = 0x0, this['ease'] = null, this['target'] = null, this['eventName'] && (this['owner']['off'](this['eventName'], this, this['_exeTween']), this['eventName'] = null), this['_comlete'] && (this['_comlete']['recover'](), this['_comlete'] = null), this['_tween'] && (this['_tween']['clear'](), this['_tween'] = null);
            }, _0x437060;
        }(_0x442c82));
    (function (_0x443c78) {
        function _0x496fc0() {
            this['_color'] = '#ff0000', this['_blur'] = 0x4, this['_offX'] = 0x6, this['_offY'] = 0x6, _0x496fc0['__super']['call'](this), this['_filter'] = new _0xdb9895(this['_color']);
        }
        _0x1d32e4(_0x496fc0, 'laya.effec' + 't.GlowFilt' + 'erSetter', _0x443c78);
        var _0x1fb998 = _0x496fc0['prototype'];
        return _0x1fb998['buildFilte' + 'r'] = function () {
            this['_filter'] = new _0xdb9895(this['color'], this['blur'], this['offX'], this['offY']), _0x443c78['prototype']['buildFilte' + 'r']['call'](this);
        }, _0x5dcf81(0x0, _0x1fb998, 'blur', function () {
            return this['_blur'];
        }, function (_0x5b3ff4) {
            this['_blur'] = _0x5b3ff4, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x1fb998, 'color', function () {
            return this['_color'];
        }, function (_0x2bcdab) {
            this['_color'] = _0x2bcdab, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x1fb998, 'offX', function () {
            return this['_offX'];
        }, function (_0x12eac3) {
            this['_offX'] = _0x12eac3, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x1fb998, 'offY', function () {
            return this['_offY'];
        }, function (_0x1cccec) {
            this['_offY'] = _0x1cccec, this['paramChang' + 'ed']();
        }), _0x496fc0;
    }(_0x4c2ca3), function (_0x42510f) {
        function _0x2c2d37() {
            this['_strength'] = 0x4, _0x2c2d37['__super']['call'](this), this['_filter'] = new _0x29289e(this['strength']);
        }
        _0x1d32e4(_0x2c2d37, 'laya.effec' + 't.BlurFilt' + 'erSetter', _0x42510f);
        var _0x1e88b1 = _0x2c2d37['prototype'];
        return _0x1e88b1['buildFilte' + 'r'] = function () {
            this['_filter'] = new _0x29289e(this['strength']), _0x42510f['prototype']['buildFilte' + 'r']['call'](this);
        }, _0x5dcf81(0x0, _0x1e88b1, 'strength', function () {
            return this['_strength'];
        }, function (_0x1ce483) {
            this['_strength'] = _0x1ce483;
        }), _0x2c2d37;
    }(_0x4c2ca3), function (_0x5c955d) {
        function _0x331aad() {
            this['_brightnes' + 's'] = 0x0, this['_contrast'] = 0x0, this['_saturatio' + 'n'] = 0x0, this['_hue'] = 0x0, this['_red'] = 0x0, this['_green'] = 0x0, this['_blue'] = 0x0, this['_alpha'] = 0x0, this['_color'] = null, _0x331aad['__super']['call'](this), this['_filter'] = new _0x3890e5();
        }
        _0x1d32e4(_0x331aad, 'laya.effec' + 't.ColorFil' + 'terSetter', _0x5c955d);
        var _0x149510 = _0x331aad['prototype'];
        return _0x149510['buildFilte' + 'r'] = function () {
            this['_filter']['reset'](), this['_filter']['color'](this['red'], this['green'], this['blue'], this['alpha']), this['_filter']['adjustHue'](this['hue']), this['_filter']['adjustCont' + 'rast'](this['contrast']), this['_filter']['adjustBrig' + 'htness'](this['brightness']), this['_filter']['adjustSatu' + 'ration'](this['saturation']), _0x5c955d['prototype']['buildFilte' + 'r']['call'](this);
        }, _0x5dcf81(0x0, _0x149510, 'brightness', function () {
            return this['_brightnes' + 's'];
        }, function (_0xb7278) {
            this['_brightnes' + 's'] = _0xb7278, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'alpha', function () {
            return this['_alpha'];
        }, function (_0x340740) {
            this['_alpha'] = _0x340740, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'contrast', function () {
            return this['_contrast'];
        }, function (_0x5d13b5) {
            this['_contrast'] = _0x5d13b5, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'hue', function () {
            return this['_hue'];
        }, function (_0x3ad559) {
            this['_hue'] = _0x3ad559, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'saturation', function () {
            return this['_saturatio' + 'n'];
        }, function (_0x2ba9ae) {
            this['_saturatio' + 'n'] = _0x2ba9ae, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'green', function () {
            return this['_green'];
        }, function (_0x4a7894) {
            this['_green'] = _0x4a7894, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'red', function () {
            return this['_red'];
        }, function (_0x1afdd1) {
            this['_red'] = _0x1afdd1, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'blue', function () {
            return this['_blue'];
        }, function (_0x935ec2) {
            this['_blue'] = _0x935ec2, this['paramChang' + 'ed']();
        }), _0x5dcf81(0x0, _0x149510, 'color', function () {
            return this['_color'];
        }, function (_0x4e6505) {
            this['_color'] = _0x4e6505;
            var _0x480801;
            _0x480801 = _0x1004a7['create'](_0x4e6505), this['_red'] = 0xff * _0x480801['arrColor'][0x0], this['_green'] = 0xff * _0x480801['arrColor'][0x1], this['_blue'] = 0xff * _0x480801['arrColor'][0x2], this['paramChang' + 'ed']();
        }), _0x331aad;
    }(_0x4c2ca3), function (_0xe4cdee) {
        function _0x143834() {
            _0x143834['__super']['call'](this);
        }
        _0x1d32e4(_0x143834, 'laya.effec' + 't.FadeIn', _0xe4cdee);
        var _0x29a755 = _0x143834['prototype'];
        return _0x29a755['_doTween'] = function () {
            return this['target']['alpha'] = 0x0, _0x24813c['to'](this['target'], { 'alpha': 0x1 }, this['duration'], _0x4b1787[this['ease']], this['_comlete'], this['delay']);
        }, _0x143834;
    }(_0x34f0e6), function (_0x45ec94) {
        function _0x41ee8a() {
            _0x41ee8a['__super']['call'](this);
        }
        _0x1d32e4(_0x41ee8a, 'laya.effec' + 't.FadeOut', _0x45ec94);
        var _0x37f559 = _0x41ee8a['prototype'];
        return _0x37f559['_doTween'] = function () {
            return this['target']['alpha'] = 0x1, _0x24813c['to'](this['target'], { 'alpha': 0x0 }, this['duration'], _0x4b1787[this['ease']], this['_comlete'], this['delay']);
        }, _0x41ee8a;
    }(_0x34f0e6), new _0xff4f6b());
}(window, document, Laya);