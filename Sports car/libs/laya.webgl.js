(function (_0x2923dd, _0x435c6a, _0x4a6519) {
    var _0x4b542f = _0x4a6519['un'], _0x475d23 = _0x4a6519['uns'], _0x3a2911 = _0x4a6519['static'], _0x199b5b = _0x4a6519['class'], _0x3a2bd3 = _0x4a6519['getset'], _0x54ae5f = _0x4a6519['__newvec'], _0x9476b9 = laya['maths']['Bezier'], _0x1a67fc = laya['resource']['Bitmap'], _0x3592ad = laya['utils']['Browser'], _0x348f03 = laya['display']['css']['CacheStyle'], _0x39bea5 = laya['filters']['ColorFilte' + 'r'], _0x4b1f30 = laya['utils']['ColorUtils'], _0x5a5989 = _0x4a6519['Config'], _0x3ed815 = laya['resource']['Context'], _0xbb80bb = laya['display']['cmd']['DrawCanvas' + 'Cmd'], _0x25772b = laya['display']['cmd']['DrawImageC' + 'md'], _0x209140 = laya['events']['Event'], _0x43187f = laya['display']['cmd']['FillTextCm' + 'd'], _0x37b02b = laya['filters']['Filter'], _0x2adb5b = laya['utils']['FontInfo'], _0xfece3 = laya['display']['Graphics'], _0x256e64 = laya['resource']['HTMLCanvas'], _0x540fde = laya['utils']['HTMLChar'], _0x4a00a2 = laya['resource']['HTMLImage'], _0x128cd4 = laya['utils']['Handler'], _0x4759af = laya['net']['Loader'], _0x4fb671 = laya['maths']['Matrix'], _0x4b8140 = laya['display']['Node'], _0x4eeaa7 = laya['maths']['Point'], _0x5460aa = laya['utils']['Pool'], _0x4759e4 = laya['maths']['Rectangle'], _0x30d89b = laya['renders']['Render'], _0x121f50 = laya['renders']['RenderSpri' + 'te'], _0x1c4cc5 = laya['resource']['Resource'], _0x313368 = laya['display']['cmd']['RestoreCmd'], _0x2350af = laya['display']['cmd']['RotateCmd'], _0x2f724f = laya['utils']['RunDriver'], _0x2cf87d = laya['display']['cmd']['SaveCmd'], _0x312e0a = laya['display']['cmd']['ScaleCmd'], _0x854b9a = laya['display']['Sprite'], _0xaf371c = laya['display']['SpriteCons' + 't'], _0x4aee6e = laya['display']['css']['SpriteStyl' + 'e'], _0x31e060 = laya['display']['Stage'], _0x29f3e7 = laya['utils']['Stat'], _0x3c672c = laya['utils']['StringKey'], _0x21a9bd = laya['system']['System'], _0x566c92 = laya['display']['Text'], _0x4fcec0 = laya['resource']['Texture'], _0x5cf33b = laya['display']['cmd']['TransformC' + 'md'], _0x5b3cf5 = laya['display']['cmd']['TranslateC' + 'md'], _0x2e08b5 = laya['utils']['VectorGrap' + 'hManager'], _0xd6dad = laya['utils']['WordText'];
    _0x4a6519['interface']('laya.webgl' + '.submit.IS' + 'ubmit'), _0x4a6519['interface']('laya.webgl' + '.canvas.sa' + 've.ISaveDa' + 'ta');
    var _0x2f38dd = function () {
            function _0x35ccd5() {
            }
            _0x199b5b(_0x35ccd5, 'laya.webgl' + '.canvas.sa' + 've.SaveBas' + 'e');
            var _0x5a2931 = _0x35ccd5['prototype'];
            return _0x4a6519['imps'](_0x5a2931, { 'laya.webgl.canvas.save.ISaveData': !![] }), _0x5a2931['isSaveMark'] = function () {
                return ![];
            }, _0x5a2931['restore'] = function (_0x2e22f9) {
                this['_dataObj'][this['_valueName']] = this['_value'], _0x35ccd5['POOL'][_0x35ccd5['POOL']['_length']++] = this, this['_newSubmit'] && (_0x2e22f9['_curSubmit'] = _0x247f32['RENDERBASE']);
            }, _0x35ccd5['_createArr' + 'ay'] = function () {
                var _0x5c50bd = [];
                return _0x5c50bd['_length'] = 0x0, _0x5c50bd;
            }, _0x35ccd5['_init'] = function () {
                var _0x31c153 = _0x35ccd5['_namemap'] = {};
                return _0x31c153[0x1] = 'ALPHA', _0x31c153[0x2] = 'fillStyle', _0x31c153[0x8] = 'font', _0x31c153[0x100] = 'lineWidth', _0x31c153[0x200] = 'strokeStyl' + 'e', _0x31c153[0x2000] = '_mergeID', _0x31c153[0x400] = _0x31c153[0x800] = _0x31c153[0x1000] = [], _0x31c153[0x4000] = 'textBaseli' + 'ne', _0x31c153[0x8000] = 'textAlign', _0x31c153[0x10000] = '_nBlendTyp' + 'e', _0x31c153[0x100000] = 'shader', _0x31c153[0x200000] = 'filters', _0x31c153[0x800000] = '_colorFile' + 'r', _0x31c153;
            }, _0x35ccd5['save'] = function (_0x51096c, _0x480f80, _0x229782, _0x4d22b9) {
                if ((_0x51096c['_saveMark']['_saveuse'] & _0x480f80) !== _0x480f80) {
                    _0x51096c['_saveMark']['_saveuse'] |= _0x480f80;
                    var _0x5f2e98 = _0x35ccd5['POOL'], _0x4f90a4 = _0x5f2e98['_length'] > 0x0 ? _0x5f2e98[--_0x5f2e98['_length']] : new _0x35ccd5();
                    _0x4f90a4['_value'] = _0x229782[_0x4f90a4['_valueName'] = _0x35ccd5['_namemap'][_0x480f80]], _0x4f90a4['_dataObj'] = _0x229782, _0x4f90a4['_newSubmit'] = _0x4d22b9;
                    var _0x48fd08 = _0x51096c['_save'];
                    _0x48fd08[_0x48fd08['_length']++] = _0x4f90a4;
                }
            }, _0x35ccd5['POOL'] = laya['webgl']['canvas']['save']['SaveBase']['_createArr' + 'ay'](), _0x35ccd5['_namemap'] = _0x35ccd5['_init'](), _0x35ccd5;
        }(), _0xd9aa33 = function () {
            function _0x1231ab(_0x117d6f, _0x317d8e) {
                this['size'] = [
                    0x0,
                    0x0
                ], this['alpha'] = 0x1, this['ALPHA'] = 0x1, this['subID'] = 0x0, this['ref'] = 0x1, this['_cacheID'] = 0x0, this['clipMatDir'] = [
                    0x5f5e0ff,
                    0x0,
                    0x0,
                    0x5f5e0ff
                ], this['clipMatPos'] = [
                    0x0,
                    0x0
                ], this['defines'] = new _0x4a8714(), this['mainID'] = _0x117d6f, this['subID'] = _0x317d8e, this['textureHos' + 't'] = null, this['texture'] = null, this['color'] = null, this['colorAdd'] = null, this['u_mmat2'] = null, this['_cacheID'] = _0x117d6f | _0x317d8e, this['_inClassCa' + 'che'] = _0x1231ab['_cache'][this['_cacheID']], _0x117d6f > 0x0 && !this['_inClassCa' + 'che'] && (this['_inClassCa' + 'che'] = _0x1231ab['_cache'][this['_cacheID']] = [], this['_inClassCa' + 'che']['_length'] = 0x0), this['clear']();
            }
            _0x199b5b(_0x1231ab, 'laya.webgl' + '.shader.d2' + '.value.Val' + 'ue2D');
            var _0x10a740 = _0x1231ab['prototype'];
            return _0x10a740['setValue'] = function (_0x5565dc) {
            }, _0x10a740['_ShaderWit' + 'hCompile'] = function () {
                var _0x351081 = _0x3ca794['withCompil' + 'e2D'](0x0, this['mainID'], this['defines']['toNameDic'](), this['mainID'] | this['defines']['_value'], _0x123b81['create'], this['_attribLoc' + 'ation']);
                return _0x351081;
            }, _0x10a740['upload'] = function () {
                var _0x28307e = _0x5c6236;
                _0x5c6236['worldMatri' + 'x4'] === _0x5c6236['TEMPMAT4_A' + 'RRAY'] || this['defines']['addInt'](0x80), this['mmat'] = _0x28307e['worldMatri' + 'x4'];
                _0x5c6236['matWVP'] && (this['defines']['addInt'](0x800), this['u_MvpMatri' + 'x'] = _0x5c6236['matWVP']['elements']);
                ;
                var _0x1d39a6 = _0x3ca794['sharders'][this['mainID'] | this['defines']['_value']] || this['_ShaderWit' + 'hCompile']();
                _0x1d39a6['_shaderVal' + 'ueWidth'] !== _0x28307e['width'] || _0x1d39a6['_shaderVal' + 'ueHeight'] !== _0x28307e['height'] ? (this['size'][0x0] = _0x28307e['width'], this['size'][0x1] = _0x28307e['height'], _0x1d39a6['_shaderVal' + 'ueWidth'] = _0x28307e['width'], _0x1d39a6['_shaderVal' + 'ueHeight'] = _0x28307e['height'], _0x1d39a6['upload'](this, null)) : _0x1d39a6['upload'](this, _0x1d39a6['_params2dQ' + 'uick2'] || _0x1d39a6['_make2dQui' + 'ck2']());
            }, _0x10a740['setFilters'] = function (_0x4805bf) {
                this['filters'] = _0x4805bf;
                if (!_0x4805bf)
                    return;
                var _0x8cbd6 = _0x4805bf['length'], _0x325043;
                for (var _0x1bcfb6 = 0x0; _0x1bcfb6 < _0x8cbd6; _0x1bcfb6++) {
                    _0x325043 = _0x4805bf[_0x1bcfb6], _0x325043 && (this['defines']['add'](_0x325043['type']), _0x325043['action']['setValue'](this));
                }
            }, _0x10a740['clear'] = function () {
                this['defines']['_value'] = this['subID'] + (_0x354f16['shaderHigh' + 'Precision'] ? 0x400 : 0x0);
            }, _0x10a740['release'] = function () {
                --this['ref'] < 0x1 && (this['_inClassCa' + 'che'] && (this['_inClassCa' + 'che'][this['_inClassCa' + 'che']['_length']++] = this), this['clear'](), this['filters'] = null, this['ref'] = 0x1);
            }, _0x1231ab['_initone'] = function (_0x398fda, _0x109399) {
                _0x1231ab['_typeClass'][_0x398fda] = _0x109399, _0x1231ab['_cache'][_0x398fda] = [], _0x1231ab['_cache'][_0x398fda]['_length'] = 0x0;
            }, _0x1231ab['__init__'] = function () {
                _0x1231ab['_initone'](0x4, _0x28c857), _0x1231ab['_initone'](0x200, _0x4cd3d7), _0x1231ab['_initone'](0x1, _0x20869a), _0x1231ab['_initone'](0x1 | 0x8, _0x20869a);
            }, _0x1231ab['create'] = function (_0xdc15a0, _0x2e157d) {
                var _0x2be334 = _0x1231ab['_cache'][_0xdc15a0 | _0x2e157d];
                if (_0x2be334['_length'])
                    return _0x2be334[--_0x2be334['_length']];
                else
                    return new _0x1231ab['_typeClass'][_0xdc15a0 | _0x2e157d](_0x2e157d);
            }, _0x1231ab['_cache'] = [], _0x1231ab['_typeClass'] = [], _0x1231ab['TEMPMAT4_A' + 'RRAY'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1
            ], _0x1231ab;
        }(), _0x3a58c2 = function () {
            function _0x46e320() {
                this['ib'] = null, this['vb'] = null;
                var _0xd3956b = _0x354f16['mainContex' + 't'];
                this['ib'] = _0xdf5923['create'](0x88e8), this['vb'] = _0x5351bd['create'](0x8);
            }
            _0x199b5b(_0x46e320, 'laya.webgl' + '.shader.d2' + '.skinAnish' + 'ader.SkinM' + 'eshBuffer');
            var _0x4ca66a = _0x46e320['prototype'];
            return _0x4ca66a['addSkinMes' + 'h'] = function (_0x3bb919) {
                _0x3bb919['getData2'](this['vb'], this['ib'], this['vb']['_byteLengt' + 'h'] / 0x20);
            }, _0x4ca66a['reset'] = function () {
                this['vb']['clear'](), this['ib']['clear']();
            }, _0x46e320['getInstanc' + 'e'] = function () {
                return _0x46e320['instance'] = _0x46e320['instance'] || new _0x46e320();
            }, _0x46e320['instance'] = null, _0x46e320;
        }(), _0x16a47f = function () {
            function _0x3ce431() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = new ParamData(0x4 * 0x4, !![]);
            }
            _0x199b5b(_0x3ce431, 'laya.layag' + 'l.cmdNativ' + 'e.ScaleCmd' + 'Native');
            var _0x2c0a06 = _0x3ce431['prototype'];
            return _0x2c0a06['recover'] = function () {
                _0x5460aa['recover']('ScaleCmd', this);
            }, _0x3a2bd3(0x0, _0x2c0a06, 'cmdID', function () {
                return 'Scale';
            }), _0x3a2bd3(0x0, _0x2c0a06, 'scaleX', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x0];
            }, function (_0x57e8ed) {
                this['_paramData']['_float32Da' + 'ta'][0x0] = _0x57e8ed, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2c0a06, 'scaleY', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x1];
            }, function (_0x5c7d28) {
                this['_paramData']['_float32Da' + 'ta'][0x1] = _0x5c7d28, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2c0a06, 'pivotX', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x2];
            }, function (_0x4e364c) {
                this['_paramData']['_float32Da' + 'ta'][0x2] = _0x4e364c, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2c0a06, 'pivotY', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x3];
            }, function (_0x5968fc) {
                this['_paramData']['_float32Da' + 'ta'][0x3] = _0x5968fc, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3ce431['create'] = function (_0x206c79, _0x38c1bb, _0x17c836, _0x29c57b) {
                var _0x37f8d7 = _0x5460aa['getItemByC' + 'lass']('ScaleCmd', _0x3ce431), _0x5633fa = _0x37f8d7['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'], _0xda5009 = _0x37f8d7['_paramData']['_float32Da' + 'ta'];
                _0xda5009[0x0] = _0x206c79, _0xda5009[0x1] = _0x38c1bb, _0xda5009[0x2] = _0x17c836, _0xda5009[0x3] = _0x29c57b;
                var _0x39464c = _0x37f8d7['_paramData']['getPtrID']();
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x37f8d7['_paramData']), _0x5633fa['setGlobalV' + 'alueEx'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0xc, _0x39464c, 0x0), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x5633fa), _0x37f8d7;
            }, _0x3ce431['ID'] = 'Scale', _0x3ce431;
        }(), _0x1803a0 = function () {
            function _0x1d011a() {
                this['_clipInfoI' + 'D'] = -0x1, this['_globalCli' + 'pMatrix'] = new _0x4fb671(), this['_clipRect'] = new _0x4759e4();
            }
            _0x199b5b(_0x1d011a, 'laya.webgl' + '.canvas.sa' + 've.SaveCli' + 'pRect');
            var _0x4f6fda = _0x1d011a['prototype'];
            return _0x4a6519['imps'](_0x4f6fda, { 'laya.webgl.canvas.save.ISaveData': !![] }), _0x4f6fda['isSaveMark'] = function () {
                return ![];
            }, _0x4f6fda['restore'] = function (_0x2b7fc1) {
                this['_globalCli' + 'pMatrix']['copyTo'](_0x2b7fc1['_globalCli' + 'pMatrix']), this['_clipRect']['clone'](_0x2b7fc1['_clipRect']), _0x2b7fc1['_clipInfoI' + 'D'] = this['_clipInfoI' + 'D'], _0x1d011a['POOL'][_0x1d011a['POOL']['_length']++] = this;
            }, _0x1d011a['save'] = function (_0xabb883) {
                if ((_0xabb883['_saveMark']['_saveuse'] & 0x20000) == 0x20000)
                    return;
                _0xabb883['_saveMark']['_saveuse'] |= 0x20000;
                var _0x133503 = _0x1d011a['POOL'], _0x44d3ca = _0x133503['_length'] > 0x0 ? _0x133503[--_0x133503['_length']] : new _0x1d011a();
                _0xabb883['_globalCli' + 'pMatrix']['copyTo'](_0x44d3ca['_globalCli' + 'pMatrix']), _0xabb883['_clipRect']['clone'](_0x44d3ca['_clipRect']), _0x44d3ca['_clipInfoI' + 'D'] = _0xabb883['_clipInfoI' + 'D'];
                var _0x412c00 = _0xabb883['_save'];
                _0x412c00[_0x412c00['_length']++] = _0x44d3ca;
            }, _0x1d011a['POOL'] = _0x2f38dd['_createArr' + 'ay'](), _0x1d011a;
        }(), _0x48ea9b = function () {
            function _0x305894() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = new ParamData(0x2 * 0x4, !![]);
            }
            _0x199b5b(_0x305894, 'laya.layag' + 'l.cmdNativ' + 'e.Translat' + 'eCmdNative');
            var _0x3ed787 = _0x305894['prototype'];
            return _0x3ed787['recover'] = function () {
                _0x5460aa['recover']('TranslateC' + 'md', this);
            }, _0x3a2bd3(0x0, _0x3ed787, 'ty', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x1];
            }, function (_0x416b69) {
                this['_paramData']['_float32Da' + 'ta'][0x1] = _0x416b69, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x3ed787, 'cmdID', function () {
                return 'Translate';
            }), _0x3a2bd3(0x0, _0x3ed787, 'tx', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x0];
            }, function (_0x2938bb) {
                this['_paramData']['_float32Da' + 'ta'][0x0] = _0x2938bb, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x305894['create'] = function (_0xa6b038, _0x5ea64f) {
                var _0x1d3377 = _0x5460aa['getItemByC' + 'lass']('TranslateC' + 'md', _0x305894), _0x111e38 = _0x1d3377['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'], _0x2a1aef = _0x1d3377['_paramData']['_float32Da' + 'ta'];
                _0x2a1aef[0x0] = _0xa6b038, _0x2a1aef[0x1] = _0x5ea64f;
                var _0x27ecf0 = _0x1d3377['_paramData']['getPtrID']();
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1d3377['_paramData']), _0x111e38['setGlobalV' + 'alueEx'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x9, _0x27ecf0, 0x0), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x111e38), _0x1d3377;
            }, _0x305894['ID'] = 'Translate', _0x305894;
        }(), _0x33edbf = function () {
            function _0x5c33bb() {
            }
            _0x199b5b(_0x5c33bb, 'laya.layag' + 'l.LayaGL');
            var _0x558b0d = _0x5c33bb['prototype'];
            return _0x558b0d['createComm' + 'andEncoder'] = function (_0x9e7cd5, _0x3f7fad, _0x833282) {
                return _0x9e7cd5 === void 0x0 && (_0x9e7cd5 = 0x80), _0x3f7fad === void 0x0 && (_0x3f7fad = 0x40), _0x833282 === void 0x0 && (_0x833282 = ![]), new _0xefe7f5(this, _0x9e7cd5, _0x3f7fad, _0x833282);
            }, _0x558b0d['beginComma' + 'ndEncoding'] = function (_0x325298) {
            }, _0x558b0d['endCommand' + 'Encoding'] = function () {
            }, _0x558b0d['calcMatrix' + 'FromScaleS' + 'kewRotatio' + 'n'] = function (_0x3c6966, _0x4752b9, _0x5de954, _0x2fa104, _0x205c28, _0x4c516f, _0x1e482f, _0x43e15b, _0x34ebee, _0x5d9256, _0x19dbb8, _0x1f790e) {
            }, _0x558b0d['setGLTempl' + 'ate'] = function (_0x3b9629, _0x5796c9) {
            }, _0x558b0d['setEndGLTe' + 'mplate'] = function (_0x371f36, _0x58e708) {
            }, _0x558b0d['matrix4x4M' + 'ultiply'] = function (_0x216d75, _0x206086, _0x7be77b) {
            }, _0x558b0d['evaluateCl' + 'ipDatasRea' + 'lTime'] = function (_0x210387, _0x167221, _0x324a78, _0x5c4571) {
            }, _0x5c33bb['getFrameCo' + 'unt'] = function () {
                return 0x0;
            }, _0x5c33bb['syncBuffer' + 'ToRenderTh' + 'read'] = function (_0x4a4a8d, _0x2d8f16) {
                _0x2d8f16 === void 0x0 && (_0x2d8f16 = 0x0);
            }, _0x5c33bb['createArra' + 'yBufferRef'] = function (_0x74e4c8, _0x5acecc, _0x5035e4) {
            }, _0x5c33bb['createArra' + 'yBufferRef' + 's'] = function (_0x357411, _0x40b25c, _0x1d62f8, _0x4afa9b) {
            }, _0x5c33bb['EXECUTE_JS' + '_THREAD_BU' + 'FFER'] = 0x0, _0x5c33bb['EXECUTE_RE' + 'NDER_THREA' + 'D_BUFFER'] = 0x1, _0x5c33bb['EXECUTE_CO' + 'PY_TO_REND' + 'ER'] = 0x2, _0x5c33bb['EXECUTE_CO' + 'PY_TO_REND' + 'ER3D'] = 0x3, _0x5c33bb['VALUE_OPER' + 'ATE_ADD'] = 0x0, _0x5c33bb['VALUE_OPER' + 'ATE_SUB'] = 0x1, _0x5c33bb['VALUE_OPER' + 'ATE_MUL'] = 0x2, _0x5c33bb['VALUE_OPER' + 'ATE_DIV'] = 0x3, _0x5c33bb['VALUE_OPER' + 'ATE_M2_MUL'] = 0x4, _0x5c33bb['VALUE_OPER' + 'ATE_M3_MUL'] = 0x5, _0x5c33bb['VALUE_OPER' + 'ATE_M4_MUL'] = 0x6, _0x5c33bb['VALUE_OPER' + 'ATE_M32_MU' + 'L'] = 0x7, _0x5c33bb['VALUE_OPER' + 'ATE_SET'] = 0x8, _0x5c33bb['VALUE_OPER' + 'ATE_M32_TR' + 'ANSLATE'] = 0x9, _0x5c33bb['VALUE_OPER' + 'ATE_M32_SC' + 'ALE'] = 0xa, _0x5c33bb['VALUE_OPER' + 'ATE_M32_RO' + 'TATE'] = 0xb, _0x5c33bb['VALUE_OPER' + 'ATE_M32_SC' + 'ALE_PIVOT'] = 0xc, _0x5c33bb['VALUE_OPER' + 'ATE_M32_RO' + 'TATE_PIVOT'] = 0xd, _0x5c33bb['VALUE_OPER' + 'ATE_M32_TR' + 'ANSFORM_PI' + 'VOT'] = 0xe, _0x5c33bb['VALUE_OPER' + 'ATE_BYTE4_' + 'COLOR_MUL'] = 0xf, _0x5c33bb['ARRAY_BUFF' + 'ER_TYPE_DA' + 'TA'] = 0x0, _0x5c33bb['ARRAY_BUFF' + 'ER_TYPE_CM' + 'D'] = 0x1, _0x5c33bb['ARRAY_BUFF' + 'ER_REF_REF' + 'ERENCE'] = 0x0, _0x5c33bb['ARRAY_BUFF' + 'ER_REF_COP' + 'Y'] = 0x1, _0x5c33bb['UPLOAD_SHA' + 'DER_UNIFOR' + 'M_TYPE_ID'] = 0x0, _0x5c33bb['UPLOAD_SHA' + 'DER_UNIFOR' + 'M_TYPE_DAT' + 'A'] = 0x1, _0x5c33bb['instance'] = null, _0x5c33bb;
        }(), _0x1de15d = function () {
            function _0x3be374(_0xae4740, _0x1bba99, _0x2af0da) {
                this['atlasID'] = 0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['_texCount'] = 0x0, this['_rowInfo'] = null, this['_cells'] = null, this['_used'] = 0x0, _0xae4740 === void 0x0 && (_0xae4740 = 0x0), _0x1bba99 === void 0x0 && (_0x1bba99 = 0x0), _0x2af0da === void 0x0 && (_0x2af0da = 0x0), this['_cells'] = null, this['_rowInfo'] = null, this['atlasID'] = _0x2af0da, this['_init'](_0xae4740, _0x1bba99);
            }
            _0x199b5b(_0x3be374, 'laya.webgl' + '.text.Atla' + 'sGrid');
            var _0x4aa8e2 = _0x3be374['prototype'];
            return _0x4aa8e2['addRect'] = function (_0x29d6aa, _0x3e1e36, _0x1441e8, _0x3bd4f6) {
                if (!this['_get'](_0x3e1e36, _0x1441e8, _0x3bd4f6))
                    return ![];
                return this['_fill'](_0x3bd4f6['x'], _0x3bd4f6['y'], _0x3e1e36, _0x1441e8, _0x29d6aa), this['_texCount']++, !![];
            }, _0x4aa8e2['_release'] = function () {
                this['_cells'] = null, this['_rowInfo'] = null;
            }, _0x4aa8e2['_init'] = function (_0x18d6ea, _0x127689) {
                this['_width'] = _0x18d6ea, this['_height'] = _0x127689, this['_release']();
                if (this['_width'] == 0x0)
                    return ![];
                return this['_cells'] = new Uint8Array(this['_width'] * this['_height'] * 0x3), this['_rowInfo'] = new Uint8Array(this['_height']), this['_used'] = 0x0, this['_clear'](), !![];
            }, _0x4aa8e2['_get'] = function (_0x3c2947, _0x3d4135, _0x324d87) {
                if (_0x3c2947 > this['_width'] || _0x3d4135 > this['_height'])
                    return ![];
                ;
                var _0x189a71 = -0x1, _0x32e687 = -0x1, _0x1d119c = this['_width'], _0x24150d = this['_height'], _0xa3a012 = this['_cells'];
                for (var _0x4bacea = 0x0; _0x4bacea < _0x24150d; _0x4bacea++) {
                    if (this['_rowInfo'][_0x4bacea] < _0x3c2947)
                        continue;
                    for (var _0x532e3e = 0x0; _0x532e3e < _0x1d119c;) {
                        var _0x19974e = (_0x4bacea * _0x1d119c + _0x532e3e) * 0x3;
                        if (_0xa3a012[_0x19974e] != 0x0 || _0xa3a012[_0x19974e + 0x1] < _0x3c2947 || _0xa3a012[_0x19974e + 0x2] < _0x3d4135) {
                            _0x532e3e += _0xa3a012[_0x19974e + 0x1];
                            continue;
                        }
                        _0x189a71 = _0x532e3e, _0x32e687 = _0x4bacea;
                        for (var _0x13e651 = 0x0; _0x13e651 < _0x3c2947; _0x13e651++) {
                            if (_0xa3a012[0x3 * _0x13e651 + _0x19974e + 0x2] < _0x3d4135) {
                                _0x189a71 = -0x1;
                                break;
                            }
                        }
                        if (_0x189a71 < 0x0) {
                            _0x532e3e += _0xa3a012[_0x19974e + 0x1];
                            continue;
                        }
                        return _0x324d87['x'] = _0x189a71, _0x324d87['y'] = _0x32e687, !![];
                    }
                }
                return ![];
            }, _0x4aa8e2['_fill'] = function (_0x25b396, _0x22e982, _0xd1b436, _0x283d33, _0x2f3f2d) {
                var _0x3b4894 = this['_width'], _0x2b9676 = this['_height'];
                this['_check'](_0x25b396 + _0xd1b436 <= _0x3b4894 && _0x22e982 + _0x283d33 <= _0x2b9676);
                for (var _0x4388bb = _0x22e982; _0x4388bb < _0x283d33 + _0x22e982; ++_0x4388bb) {
                    this['_check'](this['_rowInfo'][_0x4388bb] >= _0xd1b436), this['_rowInfo'][_0x4388bb] -= _0xd1b436;
                    for (var _0x1e704e = 0x0; _0x1e704e < _0xd1b436; _0x1e704e++) {
                        var _0x1c8e6a = (_0x25b396 + _0x4388bb * _0x3b4894 + _0x1e704e) * 0x3;
                        this['_check'](this['_cells'][_0x1c8e6a] == 0x0), this['_cells'][_0x1c8e6a] = _0x2f3f2d, this['_cells'][_0x1c8e6a + 0x1] = _0xd1b436, this['_cells'][_0x1c8e6a + 0x2] = _0x283d33;
                    }
                }
                if (_0x25b396 > 0x0)
                    for (_0x4388bb = 0x0; _0x4388bb < _0x283d33; ++_0x4388bb) {
                        var _0x1554b1 = 0x0;
                        for (_0x1e704e = _0x25b396 - 0x1; _0x1e704e >= 0x0; --_0x1e704e, ++_0x1554b1) {
                            if (this['_cells'][((_0x22e982 + _0x4388bb) * _0x3b4894 + _0x1e704e) * 0x3] != 0x0)
                                break;
                        }
                        for (_0x1e704e = _0x1554b1; _0x1e704e > 0x0; --_0x1e704e) {
                            this['_cells'][((_0x22e982 + _0x4388bb) * _0x3b4894 + _0x25b396 - _0x1e704e) * 0x3 + 0x1] = _0x1e704e, this['_check'](_0x1e704e > 0x0);
                        }
                    }
                if (_0x22e982 > 0x0)
                    for (_0x1e704e = _0x25b396; _0x1e704e < _0x25b396 + _0xd1b436; ++_0x1e704e) {
                        _0x1554b1 = 0x0;
                        for (_0x4388bb = _0x22e982 - 0x1; _0x4388bb >= 0x0; --_0x4388bb, _0x1554b1++) {
                            if (this['_cells'][(_0x1e704e + _0x4388bb * _0x3b4894) * 0x3] != 0x0)
                                break;
                        }
                        for (_0x4388bb = _0x1554b1; _0x4388bb > 0x0; --_0x4388bb) {
                            this['_cells'][(_0x1e704e + (_0x22e982 - _0x4388bb) * _0x3b4894) * 0x3 + 0x2] = _0x4388bb, this['_check'](_0x4388bb > 0x0);
                        }
                    }
                this['_used'] += _0xd1b436 * _0x283d33 / (this['_width'] * this['_height']);
            }, _0x4aa8e2['_check'] = function (_0x35bb43) {
                _0x35bb43 == ![] && console['log']('xtexMerger' + '\x20错误啦');
            }, _0x4aa8e2['_clear'] = function () {
                this['_texCount'] = 0x0;
                for (var _0x38ad7e = 0x0; _0x38ad7e < this['_height']; _0x38ad7e++) {
                    this['_rowInfo'][_0x38ad7e] = this['_width'];
                }
                for (var _0x287017 = 0x0; _0x287017 < this['_height']; _0x287017++) {
                    for (var _0x304c2c = 0x0; _0x304c2c < this['_width']; _0x304c2c++) {
                        var _0x39bcbc = (_0x287017 * this['_width'] + _0x304c2c) * 0x3;
                        this['_cells'][_0x39bcbc] = 0x0, this['_cells'][_0x39bcbc + 0x1] = this['_width'] - _0x304c2c, this['_cells'][_0x39bcbc + 0x2] = this['_width'] - _0x287017;
                    }
                }
            }, _0x3be374;
        }(), _0x3c6ccc = function () {
            function _0x3a7a36(_0x32a630, _0x599738, _0x4aeb98) {
                this['_stride'] = 0x0, this['vertNum'] = 0x0, this['indexNum'] = 0x0, this['_applied'] = ![], this['_vb'] = null, this['_ib'] = null, this['_vao'] = null, this['_attribInf' + 'o'] = null, this['_quadNum'] = 0x0, this['canReuse'] = ![], this['_stride'] = _0x32a630, this['_vb'] = new _0x5351bd(_0x32a630, 0x88e8), _0x599738 ? this['_vb']['_resizeBuf' + 'fer'](_0x599738, ![]) : _0x5a5989['webGL2D_Me' + 'shAllocMax' + 'Mem'] && this['_vb']['_resizeBuf' + 'fer'](0x40 * 0x400 * _0x32a630, ![]), this['_ib'] = new _0xdf5923(), _0x4aeb98 && this['_ib']['_resizeBuf' + 'fer'](_0x4aeb98, ![]);
            }
            _0x199b5b(_0x3a7a36, 'laya.webgl' + '.utils.Mes' + 'h2D');
            var _0xf96952 = _0x3a7a36['prototype'];
            return _0xf96952['cloneWithN' + 'ewVB'] = function () {
                var _0x55e934 = new _0x3a7a36(this['_stride'], 0x0, 0x0);
                return _0x55e934['_ib'] = this['_ib'], _0x55e934['_quadNum'] = this['_quadNum'], _0x55e934['_attribInf' + 'o'] = this['_attribInf' + 'o'], _0x55e934;
            }, _0xf96952['cloneWithN' + 'ewVBIB'] = function () {
                var _0x5319b9 = new _0x3a7a36(this['_stride'], 0x0, 0x0);
                return _0x5319b9['_attribInf' + 'o'] = this['_attribInf' + 'o'], _0x5319b9;
            }, _0xf96952['getVBW'] = function () {
                return this['_vb']['setNeedUpl' + 'oad'](), this['_vb'];
            }, _0xf96952['getVBR'] = function () {
                return this['_vb'];
            }, _0xf96952['getIBR'] = function () {
                return this['_ib'];
            }, _0xf96952['getIBW'] = function () {
                return this['_ib']['setNeedUpl' + 'oad'](), this['_ib'];
            }, _0xf96952['createQuad' + 'IB'] = function (_0x5e3b2f) {
                this['_quadNum'] = _0x5e3b2f, this['_ib']['_resizeBuf' + 'fer'](_0x5e3b2f * 0x6 * 0x2, ![]), this['_ib']['byteLength'] = this['_ib']['bufferLeng' + 'th'];
                var _0x37297d = this['_ib']['getUint16A' + 'rray'](), _0x575d25 = 0x0, _0x3894d8 = 0x0;
                for (var _0x542c64 = 0x0; _0x542c64 < _0x5e3b2f; _0x542c64++) {
                    _0x37297d[_0x575d25++] = _0x3894d8, _0x37297d[_0x575d25++] = _0x3894d8 + 0x2, _0x37297d[_0x575d25++] = _0x3894d8 + 0x1, _0x37297d[_0x575d25++] = _0x3894d8, _0x37297d[_0x575d25++] = _0x3894d8 + 0x3, _0x37297d[_0x575d25++] = _0x3894d8 + 0x2, _0x3894d8 += 0x4;
                }
                this['_ib']['setNeedUpl' + 'oad']();
            }, _0xf96952['setAttribu' + 'tes'] = function (_0x4cc7d3) {
                this['_attribInf' + 'o'] = _0x4cc7d3;
                if (this['_attribInf' + 'o']['length'] % 0x3 != 0x0)
                    throw 'Mesh2D\x20set' + 'Attributes' + '\x20error!';
            }, _0xf96952['configVAO'] = function (_0x5c6dcb) {
                if (this['_applied'])
                    return;
                this['_applied'] = !![];
                !this['_vao'] && (this['_vao'] = new _0x1763f5());
                this['_vao']['bind'](), this['_vb']['_bindForVA' + 'O'](), this['_ib']['setNeedUpl' + 'oad'](), this['_ib']['_bind_uplo' + 'adForVAO']();
                var _0x57ecd7 = this['_attribInf' + 'o']['length'] / 0x3, _0x2f341b = 0x0;
                for (var _0xfc9144 = 0x0; _0xfc9144 < _0x57ecd7; _0xfc9144++) {
                    var _0x3922ca = this['_attribInf' + 'o'][_0x2f341b + 0x1], _0x17921e = this['_attribInf' + 'o'][_0x2f341b], _0x2c7e9a = this['_attribInf' + 'o'][_0x2f341b + 0x2];
                    _0x5c6dcb['enableVert' + 'exAttribAr' + 'ray'](_0xfc9144), _0x5c6dcb['vertexAttr' + 'ibPointer'](_0xfc9144, _0x3922ca, _0x17921e, ![], this['_stride'], _0x2c7e9a), _0x2f341b += 0x3;
                }
                this['_vao']['unBind']();
            }, _0xf96952['useMesh'] = function (_0x408b9e) {
                this['_applied'] || this['configVAO'](_0x408b9e), this['_vao']['bind'](), this['_vb']['bind'](), this['_ib']['_bind_uplo' + 'ad']() || this['_ib']['bind'](), this['_vb']['_bind_uplo' + 'ad']() || this['_vb']['bind']();
            }, _0xf96952['getEleNum'] = function () {
                return this['_ib']['getBuffer']()['byteLength'] / 0x2;
            }, _0xf96952['releaseMes' + 'h'] = function () {
            }, _0xf96952['destroy'] = function () {
            }, _0xf96952['clearVB'] = function () {
                this['_vb']['clear']();
            }, _0x3a7a36['_gvaoid'] = 0x0, _0x3a7a36;
        }(), _0x334d19 = function () {
            function _0x2d3232(_0x38bc1f) {
                this['_color'] = null, this['setValue'](_0x38bc1f);
            }
            _0x199b5b(_0x2d3232, 'laya.webgl' + '.canvas.Dr' + 'awStyle');
            var _0x1ec634 = _0x2d3232['prototype'];
            return _0x1ec634['setValue'] = function (_0x407ecb) {
                if (_0x407ecb)
                    this['_color'] = _0x407ecb instanceof laya['utils']['ColorUtils'] ? _0x407ecb : _0x4b1f30['create'](_0x407ecb);
                else
                    this['_color'] = _0x4b1f30['create']('#000000');
            }, _0x1ec634['reset'] = function () {
                this['_color'] = _0x4b1f30['create']('#000000');
            }, _0x1ec634['toInt'] = function () {
                return this['_color']['numColor'];
            }, _0x1ec634['equal'] = function (_0x20dd25) {
                if (typeof _0x20dd25 == 'string')
                    return this['_color']['strColor'] === _0x20dd25;
                if (_0x20dd25 instanceof laya['utils']['ColorUtils'])
                    return this['_color']['numColor'] === _0x20dd25['numColor'];
                return ![];
            }, _0x1ec634['toColorStr'] = function () {
                return this['_color']['strColor'];
            }, _0x2d3232['create'] = function (_0x4a05ce) {
                if (_0x4a05ce) {
                    var _0x5e0125 = _0x4a05ce instanceof laya['utils']['ColorUtils'] ? _0x4a05ce : _0x4b1f30['create'](_0x4a05ce);
                    return _0x5e0125['_drawStyle'] || (_0x5e0125['_drawStyle'] = new _0x2d3232(_0x4a05ce));
                }
                return _0x2d3232['DEFAULT'];
            }, _0x3a2911(_0x2d3232, [
                'DEFAULT',
                function () {
                    return this['DEFAULT'] = new _0x2d3232('#000000');
                }
            ]), _0x2d3232;
        }(), _0x32b95f = function () {
            function _0x53acfb() {
                this['fontSizeIn' + 'fo'] = {}, this['charRender'] = null, this['mapFont'] = {}, this['fontID'] = 0x0, this['mapColor'] = [], this['colorID'] = 0x0, this['fontScaleX'] = 0x1, this['fontScaleY'] = 0x1, this['_curStrPos'] = 0x0, this['bmpData32'] = null, this['lastFont'] = null, this['fontSizeW'] = 0x0, this['fontSizeH'] = 0x0, this['fontSizeOf' + 'fX'] = 0x0, this['fontSizeOf' + 'fY'] = 0x0, this['renderPerC' + 'har'] = !![], this['textureMem'] = 0x0, this['fontStr'] = null, this['textAtlase' + 's'] = [], this['isoTexture' + 's'] = [], this['tmpAtlasPo' + 's'] = new _0x4eeaa7();
                var _0x2e2e2b = ![], _0x1643e5 = _0x4a6519['MiniAdpter'];
                _0x1643e5 && _0x1643e5['systemInfo'] && _0x1643e5['systemInfo']['system'] && (_0x2e2e2b = _0x1643e5['systemInfo']['system']['toLowerCas' + 'e']() === 'ios\x2010.1.1');
                if (_0x3592ad['onMiniGame'] && !_0x2e2e2b)
                    _0x53acfb['isWan1Wan'] = !![];
                if (_0x3592ad['onLimixiu'])
                    _0x53acfb['isWan1Wan'] = !![];
                this['charRender'] = _0x30d89b['isConchApp'] ? new _0x7fdce3() : new _0x3fb2b8(_0x53acfb['atlasWidth'], _0x53acfb['atlasWidth'], _0x53acfb['scaleFontW' + 'ithCtx'], !_0x53acfb['isWan1Wan'], ![]), _0x53acfb['textRender' + 'Inst'] = this, _0x4a6519['textRender'] = this, _0x53acfb['atlasWidth' + '2'] = _0x53acfb['atlasWidth'] * _0x53acfb['atlasWidth'];
            }
            _0x199b5b(_0x53acfb, 'laya.webgl' + '.text.Text' + 'Render');
            var _0x3bb7cc = _0x53acfb['prototype'];
            return _0x3bb7cc['setFont'] = function (_0x6bc1a4) {
                if (this['lastFont'] == _0x6bc1a4)
                    return;
                this['lastFont'] = _0x6bc1a4;
                var _0x53a4d0 = this['getFontSiz' + 'eInfo'](_0x6bc1a4['_family']), _0x30450e = _0x53a4d0 >> 0x18, _0x24142c = _0x53a4d0 >> 0x10 & 0xff, _0x3ecd55 = _0x53a4d0 >> 0x8 & 0xff, _0xea137d = _0x53a4d0 & 0xff, _0x384523 = _0x6bc1a4['_size'] / _0x53acfb['standardFo' + 'ntSize'];
                this['fontSizeOf' + 'fX'] = Math['ceil'](_0x30450e * _0x384523), this['fontSizeOf' + 'fY'] = Math['ceil'](_0x24142c * _0x384523), this['fontSizeW'] = Math['ceil'](_0x3ecd55 * _0x384523), this['fontSizeH'] = Math['ceil'](_0xea137d * _0x384523), this['fontStr'] = _0x6bc1a4['_font']['replace']('italic', '');
            }, _0x3bb7cc['getNextCha' + 'r'] = function (_0x1883ab) {
                var _0x391977 = _0x1883ab['length'], _0x3eeab7 = this['_curStrPos'];
                if (_0x3eeab7 >= _0x391977)
                    return null;
                var _0x50708d = ![], _0x2e7e01 = _0x3eeab7, _0x4f5009 = 0x0;
                for (; _0x2e7e01 < _0x391977; _0x2e7e01++) {
                    var _0x2081cc = _0x1883ab['charCodeAt'](_0x2e7e01);
                    if (_0x2081cc >>> 0xb == 0x1b) {
                        if (_0x4f5009 == 0x1)
                            break;
                        _0x4f5009 = 0x1, _0x2e7e01++;
                    } else {
                        if (_0x2081cc === 0xfe0e || _0x2081cc === 0xfe0f) {
                        } else {
                            if (_0x2081cc == 0x200d)
                                _0x4f5009 = 0x2;
                            else {
                                if (_0x4f5009 == 0x0)
                                    _0x4f5009 = 0x1;
                                else {
                                    if (_0x4f5009 == 0x1)
                                        break;
                                    else {
                                        if (_0x4f5009 == 0x2) {
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return this['_curStrPos'] = _0x2e7e01, _0x1883ab['substring'](_0x3eeab7, _0x2e7e01);
            }, _0x3bb7cc['filltext'] = function (_0x26d778, _0x56c709, _0x5afad4, _0x7b0f15, _0x180223, _0x3aa5d9, _0x5b9643, _0x5ed38d, _0x4452c9, _0x2c23fb) {
                _0x2c23fb === void 0x0 && (_0x2c23fb = 0x0);
                if (_0x56c709['length'] <= 0x0)
                    return;
                var _0x3a606f = _0x2adb5b['Parse'](_0x180223), _0x531155 = 0x0;
                switch (_0x4452c9) {
                case 'center':
                    _0x531155 = _0x3ed815['ENUM_TEXTA' + 'LIGN_CENTE' + 'R'];
                    break;
                case 'right':
                    _0x531155 = _0x3ed815['ENUM_TEXTA' + 'LIGN_RIGHT'];
                    break;
                }
                this['_fast_fill' + 'text'](_0x26d778, _0x56c709, null, _0x5afad4, _0x7b0f15, _0x3a606f, _0x3aa5d9, _0x5b9643, _0x5ed38d, _0x531155, _0x2c23fb);
            }, _0x3bb7cc['fillWords'] = function (_0x4fa45a, _0x1ddfb4, _0x1f4869, _0x4c7543, _0x41cca0, _0x321a88, _0x308333, _0xf4d470) {
                if (!_0x1ddfb4)
                    return;
                if (_0x1ddfb4['length'] <= 0x0)
                    return;
                var _0x5dd5fa = _0x2adb5b['Parse'](_0x41cca0);
                this['_fast_fill' + 'text'](_0x4fa45a, null, _0x1ddfb4, _0x1f4869, _0x4c7543, _0x5dd5fa, _0x321a88, _0x308333, _0xf4d470, 0x0, 0x0);
            }, _0x3bb7cc['_fast_fill' + 'text'] = function (_0x221dd8, _0x49506b, _0xf2b51e, _0x2c4d8c, _0x2c8486, _0x31189f, _0x27585b, _0x49e663, _0x3c1f73, _0x2b3ca6, _0x6baa29) {
                _0x6baa29 === void 0x0 && (_0x6baa29 = 0x0);
                if (_0x49506b && _0x49506b['length'] < 0x1)
                    return;
                if (_0xf2b51e && _0xf2b51e['length'] < 0x1)
                    return;
                if (_0x3c1f73 < 0x0)
                    _0x3c1f73 = 0x0;
                this['setFont'](_0x31189f), this['fontScaleX'] = this['fontScaleY'] = 0x1;
                if (_0x53acfb['scaleFontW' + 'ithCtx']) {
                    var _0x24244d = 0x1, _0x31232a = 0x1;
                    _0x30d89b['isConchApp'] ? (_0x24244d = _0x221dd8['_curMat']['getScaleX'](), _0x31232a = _0x221dd8['_curMat']['getScaleY']()) : (_0x24244d = _0x221dd8['getMatScal' + 'eX'](), _0x31232a = _0x221dd8['getMatScal' + 'eY']());
                    if (_0x24244d < 0.0001 || _0x31232a < 0.1)
                        return;
                    if (_0x24244d > 0x1)
                        this['fontScaleX'] = _0x24244d;
                    if (_0x31232a > 0x1)
                        this['fontScaleY'] = _0x31232a;
                }
                _0x31189f['_italic'] && (_0x221dd8['_italicDeg'] = 0xd);
                var _0x4451a4 = _0x49506b, _0x34c920 = !_0xf2b51e && _0x49506b instanceof laya['utils']['WordText'], _0x433f18 = _0x49506b, _0x48277c = !!_0xf2b51e, _0x56e099 = _0x34c920 ? _0x4451a4['pageChars'] : [], _0x268601 = 0x0;
                _0x34c920 ? (_0x433f18 = _0x4451a4['_text'], _0x268601 = _0x4451a4['width'], _0x268601 < 0x0 && (_0x268601 = _0x4451a4['width'] = this['charRender']['getWidth'](this['fontStr'], _0x433f18))) : _0x268601 = _0x433f18 ? this['charRender']['getWidth'](this['fontStr'], _0x433f18) : 0x0;
                switch (_0x2b3ca6) {
                case _0x3ed815['ENUM_TEXTA' + 'LIGN_CENTE' + 'R']:
                    _0x2c4d8c -= _0x268601 / 0x2;
                    break;
                case _0x3ed815['ENUM_TEXTA' + 'LIGN_RIGHT']:
                    _0x2c4d8c -= _0x268601;
                    break;
                }
                _0x4451a4 && _0x56e099 && (this['hasFreedTe' + 'xt'](_0x56e099) && (_0x56e099 = _0x4451a4['pageChars'] = []));
                ;
                var _0x3e3330 = null, _0x4d260b = _0x34c920 || _0x53acfb['forceWhole' + 'Render'], _0x6ce9b5 = this['renderPerC' + 'har'] = !_0x34c920 || _0x53acfb['forceSplit' + 'Render'] || _0x48277c;
                if (!_0x56e099 || _0x56e099['length'] < 0x1) {
                    if (_0x6ce9b5) {
                        var _0x4cc349 = 0x0, _0x21f495 = 0x0;
                        this['_curStrPos'] = 0x0;
                        var _0x3317fd;
                        while (!![]) {
                            if (_0x48277c) {
                                var _0x1d3feb = _0xf2b51e[this['_curStrPos']++];
                                _0x1d3feb ? (_0x3317fd = _0x1d3feb['char'], _0x4cc349 = _0x1d3feb['x'], _0x21f495 = _0x1d3feb['y']) : _0x3317fd = null;
                            } else
                                _0x3317fd = this['getNextCha' + 'r'](_0x433f18);
                            if (!_0x3317fd)
                                break;
                            _0x3e3330 = this['getCharRen' + 'derInfo'](_0x3317fd, _0x31189f, _0x27585b, _0x49e663, _0x3c1f73, ![]);
                            if (!_0x3e3330)
                                break;
                            if (_0x3e3330['isSpace']) {
                            } else {
                                var _0x55ea08 = _0x56e099[_0x3e3330['tex']['id']];
                                !_0x55ea08 && (_0x56e099[_0x3e3330['tex']['id']] = _0x55ea08 = []), _0x30d89b['isConchApp'] ? _0x55ea08['push']({
                                    'ri': _0x3e3330,
                                    'x': _0x4cc349,
                                    'y': _0x21f495,
                                    'w': _0x3e3330['bmpWidth'] / this['fontScaleX'],
                                    'h': _0x3e3330['bmpHeight'] / this['fontScaleY']
                                }) : _0x55ea08['push']({
                                    'ri': _0x3e3330,
                                    'x': _0x4cc349 + 0x1 / this['fontScaleX'],
                                    'y': _0x21f495 + 0x1 / this['fontScaleY'],
                                    'w': (_0x3e3330['bmpWidth'] - 0x2) / this['fontScaleX'],
                                    'h': (_0x3e3330['bmpHeight'] - 0x2) / this['fontScaleY']
                                }), _0x4cc349 += _0x3e3330['width'];
                            }
                        }
                    } else {
                        var _0x381523 = _0x53acfb['noAtlas'] || _0x268601 * this['fontScaleX'] > _0x53acfb['atlasWidth'];
                        _0x3e3330 = this['getCharRen' + 'derInfo'](_0x433f18, _0x31189f, _0x27585b, _0x49e663, _0x3c1f73, _0x381523), _0x30d89b['isConchApp'] ? _0x56e099[0x0] = [{
                                'ri': _0x3e3330,
                                'x': 0x0,
                                'y': 0x0,
                                'w': _0x3e3330['bmpWidth'] / this['fontScaleX'],
                                'h': _0x3e3330['bmpHeight'] / this['fontScaleY']
                            }] : _0x56e099[0x0] = [{
                                'ri': _0x3e3330,
                                'x': 0x1 / this['fontScaleX'],
                                'y': 0x1 / this['fontScaleY'],
                                'w': (_0x3e3330['bmpWidth'] - 0x2) / this['fontScaleX'],
                                'h': (_0x3e3330['bmpHeight'] - 0x2) / this['fontScaleY']
                            }];
                    }
                }
                this['_drawResor' + 'tedWords'](_0x221dd8, _0x2c4d8c, _0x2c8486, _0x56e099), _0x221dd8['_italicDeg'] = 0x0;
            }, _0x3bb7cc['_drawResor' + 'tedWords'] = function (_0x3e5814, _0x316a56, _0x7685a6, _0x3f507f) {
                var _0x37b2c7 = _0x3e5814['_charSubmi' + 'tCache'] && _0x3e5814['_charSubmi' + 'tCache']['_enbale'];
                for (var _0x1f145d in _0x3f507f) {
                    var _0xcb0c9d = _0x3f507f[_0x1f145d], _0x58c46e = _0xcb0c9d['length'];
                    if (_0x58c46e <= 0x0)
                        continue;
                    for (var _0x15817d = 0x0; _0x15817d < _0x58c46e; _0x15817d++) {
                        var _0x2a5840 = _0xcb0c9d[_0x15817d], _0x343c0c = _0x2a5840['ri'];
                        if (_0x343c0c['isSpace'])
                            continue;
                        _0x343c0c['touch'](), _0x3e5814['drawTexAli' + 'gn'] = !![];
                        if (_0x30d89b['isConchApp'])
                            _0x3e5814['_drawTextu' + 'reM'](_0x343c0c['tex']['texture'], _0x316a56 + _0x2a5840['x'] - _0x343c0c['orix'], _0x7685a6 + _0x2a5840['y'] - _0x343c0c['oriy'], _0x2a5840['w'], _0x2a5840['h'], null, 0x1, _0x343c0c['uv']);
                        else
                            _0x3e5814['_inner_dra' + 'wTexture'](_0x343c0c['tex']['texture'], _0x343c0c['tex']['texture']['bitmap']['id'], _0x316a56 + _0x2a5840['x'] - _0x343c0c['orix'], _0x7685a6 + _0x2a5840['y'] - _0x343c0c['oriy'], _0x2a5840['w'], _0x2a5840['h'], null, _0x343c0c['uv'], 0x1, _0x37b2c7);
                        _0x3e5814['touches'] && _0x3e5814['touches']['push'](_0x343c0c);
                    }
                }
            }, _0x3bb7cc['hasFreedTe' + 'xt'] = function (_0xd57b70) {
                for (var _0x322479 in _0xd57b70) {
                    var _0x13807d = _0xd57b70[_0x322479];
                    for (var _0x9d2e07 = 0x0, _0x2e7744 = _0x13807d['length']; _0x9d2e07 < _0x2e7744; _0x9d2e07++) {
                        var _0x4e884d = _0x13807d[_0x9d2e07]['ri'];
                        if (_0x4e884d['deleted'] || _0x4e884d['tex']['__destroye' + 'd'])
                            return !![];
                    }
                }
                return ![];
            }, _0x3bb7cc['getCharRen' + 'derInfo'] = function (_0x33fca4, _0x3ef019, _0x5a0b84, _0x5120a1, _0x733c7e, _0x3d7558) {
                _0x3d7558 === void 0x0 && (_0x3d7558 = ![]);
                var _0x14e786 = this['mapFont'][_0x3ef019['_family']];
                _0x14e786 == undefined && (this['mapFont'][_0x3ef019['_family']] = _0x14e786 = this['fontID']++);
                ;
                var _0x5d7c21 = _0x33fca4 + '_' + _0x14e786 + '_' + _0x3ef019['_size'] + '_' + _0x5a0b84;
                if (_0x733c7e > 0x0)
                    _0x5d7c21 += '_' + _0x5120a1 + _0x733c7e;
                if (_0x3ef019['_bold'])
                    _0x5d7c21 += 'P';
                (this['fontScaleX'] != 0x1 || this['fontScaleY'] != 0x1) && (_0x5d7c21 += (this['fontScaleX'] * 0x14 | 0x0) + '_' + (this['fontScaleY'] * 0x14 | 0x0));
                ;
                var _0x3f8a4b = 0x0, _0x57db0e = this['textAtlase' + 's']['length'], _0x53cd4f = null, _0x5ea5bf = null;
                if (!_0x3d7558)
                    for (_0x3f8a4b = 0x0; _0x3f8a4b < _0x57db0e; _0x3f8a4b++) {
                        _0x5ea5bf = this['textAtlase' + 's'][_0x3f8a4b], _0x53cd4f = _0x5ea5bf['charMaps'][_0x5d7c21];
                        if (_0x53cd4f)
                            return _0x53cd4f['touch'](), _0x53cd4f;
                    }
                _0x53cd4f = new _0x37b54c(), this['charRender']['scale'](this['fontScaleX'], this['fontScaleY']), _0x53cd4f['char'] = _0x33fca4, _0x53cd4f['height'] = _0x3ef019['_size'];
                var _0x2c56c2 = _0x3ef019['_size'] / 0x3 | 0x0, _0x2d2ab6 = null, _0x3a4c6d = Math['ceil'](this['charRender']['getWidth'](this['fontStr'], _0x33fca4) * this['fontScaleX']);
                _0x3a4c6d > this['charRender']['canvasWidt' + 'h'] && (this['charRender']['canvasWidt' + 'h'] = Math['min'](0x800, _0x3a4c6d + _0x2c56c2 * 0x2));
                if (_0x3d7558) {
                    _0x2d2ab6 = this['charRender']['getCharBmp'](_0x33fca4, this['fontStr'], _0x733c7e, _0x5a0b84, _0x5120a1, _0x53cd4f, _0x2c56c2, _0x2c56c2, _0x2c56c2, _0x2c56c2, null);
                    var _0x4c07c5 = _0x31d0dd['getTextTex' + 'ture'](_0x2d2ab6['width'], _0x2d2ab6['height']);
                    _0x4c07c5['addChar'](_0x2d2ab6, 0x0, 0x0, _0x53cd4f['uv']), _0x53cd4f['tex'] = _0x4c07c5, _0x53cd4f['orix'] = _0x2c56c2, _0x53cd4f['oriy'] = _0x2c56c2, _0x4c07c5['ri'] = _0x53cd4f, this['isoTexture' + 's']['push'](_0x4c07c5);
                } else {
                    var _0x1209f0 = _0x33fca4['length'];
                    if (_0x1209f0 > 0x1) {
                    }
                    ;
                    var _0x45ed96 = _0x733c7e * 0x1, _0x5c7e49 = Math['ceil']((this['fontSizeW'] + _0x45ed96 * 0x2) * this['fontScaleX']), _0x3b3ded = Math['ceil']((this['fontSizeH'] + _0x45ed96 * 0x2) * this['fontScaleY']);
                    _0x53acfb['imgdtRect'][0x0] = (_0x2c56c2 - this['fontSizeOf' + 'fX'] - _0x45ed96) * this['fontScaleX'] | 0x0, _0x53acfb['imgdtRect'][0x1] = (_0x2c56c2 - this['fontSizeOf' + 'fY'] - _0x45ed96) * this['fontScaleY'] | 0x0, this['renderPerC' + 'har'] || _0x1209f0 == 0x1 ? (_0x53acfb['imgdtRect'][0x2] = Math['max'](_0x3a4c6d, _0x5c7e49), _0x53acfb['imgdtRect'][0x3] = Math['max'](_0x3a4c6d, _0x3b3ded)) : (_0x53acfb['imgdtRect'][0x2] = -0x1, _0x53acfb['imgdtRect'][0x3] = _0x3b3ded), _0x2d2ab6 = this['charRender']['getCharBmp'](_0x33fca4, this['fontStr'], _0x733c7e, _0x5a0b84, _0x5120a1, _0x53cd4f, _0x2c56c2, _0x2c56c2, _0x2c56c2, _0x2c56c2, _0x53acfb['imgdtRect']), _0x5ea5bf = this['addBmpData'](_0x2d2ab6, _0x53cd4f), _0x53acfb['isWan1Wan'] ? (_0x53cd4f['orix'] = _0x2c56c2, _0x53cd4f['oriy'] = _0x2c56c2) : (_0x53cd4f['orix'] = this['fontSizeOf' + 'fX'] + _0x45ed96, _0x53cd4f['oriy'] = this['fontSizeOf' + 'fY'] + _0x45ed96), _0x5ea5bf['charMaps'][_0x5d7c21] = _0x53cd4f;
                }
                return _0x53cd4f;
            }, _0x3bb7cc['addBmpData'] = function (_0x43c3c7, _0x3844ca) {
                var _0x5d689d = _0x43c3c7['width'], _0x5e39e6 = _0x43c3c7['height'], _0x4eb8d6 = this['textAtlase' + 's']['length'], _0x555d88 = null, _0x3e0b11 = ![];
                for (var _0x2cca03 = 0x0; _0x2cca03 < _0x4eb8d6; _0x2cca03++) {
                    _0x555d88 = this['textAtlase' + 's'][_0x2cca03], _0x3e0b11 = _0x555d88['getAEmpty'](_0x5d689d, _0x5e39e6, this['tmpAtlasPo' + 's']);
                    if (_0x3e0b11)
                        break;
                }
                if (!_0x3e0b11) {
                    _0x555d88 = new _0x556f29(), this['textAtlase' + 's']['push'](_0x555d88), _0x3e0b11 = _0x555d88['getAEmpty'](_0x5d689d, _0x5e39e6, this['tmpAtlasPo' + 's']);
                    if (!_0x3e0b11)
                        throw 'err1';
                    this['cleanAtlas' + 'es']();
                }
                return _0x3e0b11 && (_0x555d88['texture']['addChar'](_0x43c3c7, this['tmpAtlasPo' + 's']['x'], this['tmpAtlasPo' + 's']['y'], _0x3844ca['uv']), _0x3844ca['tex'] = _0x555d88['texture']), _0x555d88;
            }, _0x3bb7cc['GC'] = function (_0x3e9c28) {
                var _0x149fa5 = 0x0, _0x488a33 = this['textAtlase' + 's']['length'], _0x58fc6a = 0x0, _0x44f2e9 = _0x53acfb['destroyAtl' + 'asDt'], _0x13e911 = 0x0, _0xeac3ce = 0x0, _0x5ec455 = -0x1, _0x2d3219 = 0x0, _0x3d8157 = null, _0x17aa03 = null;
                for (; _0x149fa5 < _0x488a33; _0x149fa5++) {
                    _0x17aa03 = this['textAtlase' + 's'][_0x149fa5], _0x3d8157 = _0x17aa03['texture'];
                    if (_0x3d8157) {
                        _0x13e911 += _0x3d8157['curUsedCov' + 'Rate'], _0xeac3ce += _0x3d8157['curUsedCov' + 'RateAtlas'];
                        var _0x51de4d = _0x17aa03['usedRate'] - _0x3d8157['curUsedCov' + 'RateAtlas'];
                        _0x2d3219 < _0x51de4d && (_0x2d3219 = _0x51de4d, _0x5ec455 = _0x149fa5);
                    }
                    _0x58fc6a = _0x29f3e7['loopCount'] - _0x17aa03['texture']['lastTouchT' + 'm'], _0x58fc6a > _0x44f2e9 && (_0x53acfb['showLog'] && console['log']('TextRender' + '\x20GC\x20delete' + '\x20atlas\x20' + _0x3d8157 ? _0x17aa03['texture']['id'] : 'unk'), _0x17aa03['destroy'](), this['textAtlase' + 's'][_0x149fa5] = this['textAtlase' + 's'][_0x488a33 - 0x1], _0x488a33--, _0x149fa5--);
                }
                this['textAtlase' + 's']['length'] = _0x488a33, _0x488a33 = this['isoTexture' + 's']['length'];
                for (_0x149fa5 = 0x0; _0x149fa5 < _0x488a33; _0x149fa5++) {
                    _0x3d8157 = this['isoTexture' + 's'][_0x149fa5], _0x58fc6a = _0x29f3e7['loopCount'] - _0x3d8157['lastTouchT' + 'm'], _0x58fc6a > _0x53acfb['destroyUnu' + 'sedTexture' + 'Dt'] && (_0x3d8157['ri']['deleted'] = !![], _0x3d8157['ri']['tex'] = null, _0x3d8157['destroy'](), this['isoTexture' + 's'][_0x149fa5] = this['isoTexture' + 's'][_0x488a33 - 0x1], _0x488a33--, _0x149fa5--);
                }
                ;
                var _0x280f6b = this['textAtlase' + 's']['length'] > 0x1 && this['textAtlase' + 's']['length'] - _0xeac3ce >= 0x2;
                (_0x53acfb['atlasWidth'] * _0x53acfb['atlasWidth'] * 0x4 * this['textAtlase' + 's']['length'] > _0x53acfb['cleanMem'] || _0x280f6b || _0x53acfb['simClean']) && (_0x53acfb['simClean'] = ![], _0x53acfb['showLog'] && console['log']('清理使用率低的贴图。' + '总使用率:', _0xeac3ce, ':', this['textAtlase' + 's']['length'], '最差贴图:' + _0x5ec455), _0x5ec455 >= 0x0 && (_0x17aa03 = this['textAtlase' + 's'][_0x5ec455], _0x17aa03['destroy'](), this['textAtlase' + 's'][_0x5ec455] = this['textAtlase' + 's'][this['textAtlase' + 's']['length'] - 0x1], this['textAtlase' + 's']['length'] = this['textAtlase' + 's']['length'] - 0x1)), _0x31d0dd['clean']();
            }, _0x3bb7cc['cleanAtlas' + 'es'] = function () {
            }, _0x3bb7cc['getCharBmp'] = function (_0xdd0c37) {
            }, _0x3bb7cc['checkBmpLi' + 'ne'] = function (_0x3a5830, _0x4ffb8e, _0xbaf51b, _0x193ba0) {
                this['bmpData32']['buffer'] != _0x3a5830['data']['buffer'] && (this['bmpData32'] = new Uint32Array(_0x3a5830['data']['buffer']));
                ;
                var _0x4ff084 = _0x3a5830['width'] * _0x4ffb8e + _0xbaf51b;
                for (var _0x3b11d2 = _0xbaf51b; _0x3b11d2 < _0x193ba0; _0x3b11d2++) {
                    if (this['bmpData32'][_0x4ff084++] != 0x0)
                        return !![];
                }
                return ![];
            }, _0x3bb7cc['updateBbx'] = function (_0x34e5a7, _0x28aa2a, _0x79d836) {
                _0x79d836 === void 0x0 && (_0x79d836 = ![]);
                var _0x594bf7 = _0x34e5a7['width'], _0x3e2b7b = _0x34e5a7['height'], _0x271593 = 0x0, _0x5c7a1d = _0x28aa2a[0x1], _0x1b56b0 = 0x0, _0x167a40 = _0x5c7a1d;
                if (this['checkBmpLi' + 'ne'](_0x34e5a7, _0x5c7a1d, 0x0, _0x594bf7))
                    while (!![]) {
                        _0x167a40 = (_0x5c7a1d + _0x1b56b0) / 0x2 | 0x0;
                        if (_0x167a40 + 0x1 >= _0x5c7a1d) {
                            _0x28aa2a[0x1] = _0x167a40;
                            break;
                        }
                        this['checkBmpLi' + 'ne'](_0x34e5a7, _0x167a40, 0x0, _0x594bf7) ? _0x5c7a1d = _0x167a40 : _0x1b56b0 = _0x167a40;
                    }
                if (_0x28aa2a[0x3] > _0x3e2b7b)
                    _0x28aa2a[0x3] = _0x3e2b7b;
                else {
                    _0x167a40 = _0x5c7a1d = _0x28aa2a[0x3], _0x1b56b0 = _0x3e2b7b;
                    if (this['checkBmpLi' + 'ne'](_0x34e5a7, _0x5c7a1d, 0x0, _0x594bf7))
                        while (!![]) {
                            _0x167a40 = (_0x5c7a1d + _0x1b56b0) / 0x2 | 0x0;
                            if (_0x167a40 - 0x1 <= _0x5c7a1d) {
                                _0x28aa2a[0x3] = _0x167a40;
                                break;
                            }
                            this['checkBmpLi' + 'ne'](_0x34e5a7, _0x167a40, 0x0, _0x594bf7) ? _0x5c7a1d = _0x167a40 : _0x1b56b0 = _0x167a40;
                        }
                }
                if (_0x79d836)
                    return;
                var _0x547401 = _0x28aa2a[0x0], _0x13842c = _0x594bf7 * _0x28aa2a[0x1];
                for (_0x167a40 = _0x28aa2a[0x1]; _0x167a40 < _0x28aa2a[0x3]; _0x167a40++) {
                    for (_0x271593 = 0x0; _0x271593 < _0x547401; _0x271593++) {
                        if (this['bmpData32'][_0x13842c + _0x271593] != 0x0) {
                            _0x547401 = _0x271593;
                            break;
                        }
                    }
                    _0x13842c += _0x594bf7;
                }
                _0x28aa2a[0x0] = _0x547401;
                var _0x51d81c = _0x28aa2a[0x2];
                _0x13842c = _0x594bf7 * _0x28aa2a[0x1];
                for (_0x167a40 = _0x28aa2a[0x1]; _0x167a40 < _0x28aa2a[0x3]; _0x167a40++) {
                    for (_0x271593 = _0x51d81c; _0x271593 < _0x594bf7; _0x271593++) {
                        if (this['bmpData32'][_0x13842c + _0x271593] != 0x0) {
                            _0x51d81c = _0x271593;
                            break;
                        }
                    }
                    _0x13842c += _0x594bf7;
                }
                _0x28aa2a[0x2] = _0x51d81c;
            }, _0x3bb7cc['getFontSiz' + 'eInfo'] = function (_0x3f1ae9) {
                var _0x29bbcb = this['fontSizeIn' + 'fo'][_0x3f1ae9];
                if (_0x29bbcb != undefined)
                    return _0x29bbcb;
                var _0x1384ed = 'bold\x20' + _0x53acfb['standardFo' + 'ntSize'] + 'px\x20' + _0x3f1ae9;
                if (_0x53acfb['isWan1Wan']) {
                    this['fontSizeW'] = this['charRender']['getWidth'](_0x1384ed, '国') * 1.5, this['fontSizeH'] = _0x53acfb['standardFo' + 'ntSize'] * 1.5;
                    var _0x1650ab = this['fontSizeW'] << 0x8 | this['fontSizeH'];
                    return this['fontSizeIn' + 'fo'][_0x3f1ae9] = _0x1650ab, _0x1650ab;
                }
                _0x53acfb['pixelBBX'][0x0] = _0x53acfb['standardFo' + 'ntSize'] / 0x2, _0x53acfb['pixelBBX'][0x1] = _0x53acfb['standardFo' + 'ntSize'] / 0x2, _0x53acfb['pixelBBX'][0x2] = _0x53acfb['standardFo' + 'ntSize'], _0x53acfb['pixelBBX'][0x3] = _0x53acfb['standardFo' + 'ntSize'];
                var _0x11466f = 0x10, _0x554187 = 0x10, _0x224d22 = 0x10, _0xb09904 = 0x10;
                this['charRender']['scale'](0x1, 0x1), _0x53acfb['tmpRI']['height'] = _0x53acfb['standardFo' + 'ntSize'];
                var _0x245040 = this['charRender']['getCharBmp']('g', _0x1384ed, 0x0, 'red', null, _0x53acfb['tmpRI'], _0x11466f, _0x554187, _0x224d22, _0xb09904);
                _0x30d89b['isConchApp'] && (_0x245040['data'] = new Uint8ClampedArray(_0x245040['data']));
                this['bmpData32'] = new Uint32Array(_0x245040['data']['buffer']), this['updateBbx'](_0x245040, _0x53acfb['pixelBBX'], ![]), _0x245040 = this['charRender']['getCharBmp']('国', _0x1384ed, 0x0, 'red', null, _0x53acfb['tmpRI'], _0x554187, _0x554187, _0x224d22, _0xb09904);
                _0x30d89b['isConchApp'] && (_0x245040['data'] = new Uint8ClampedArray(_0x245040['data']));
                this['bmpData32'] = new Uint32Array(_0x245040['data']['buffer']);
                if (_0x53acfb['pixelBBX'][0x2] < _0x11466f + _0x53acfb['tmpRI']['width'])
                    _0x53acfb['pixelBBX'][0x2] = _0x11466f + _0x53acfb['tmpRI']['width'];
                this['updateBbx'](_0x245040, _0x53acfb['pixelBBX'], ![]);
                _0x30d89b['isConchApp'] && (_0x11466f = 0x0, _0x554187 = 0x0);
                ;
                var _0x3b7cb8 = Math['max'](_0x11466f - _0x53acfb['pixelBBX'][0x0], 0x0), _0x388bed = Math['max'](_0x554187 - _0x53acfb['pixelBBX'][0x1], 0x0), _0x3afd68 = _0x53acfb['pixelBBX'][0x2] - _0x53acfb['pixelBBX'][0x0], _0x47cda4 = _0x53acfb['pixelBBX'][0x3] - _0x53acfb['pixelBBX'][0x1], _0x21155f = _0x3b7cb8 << 0x18 | _0x388bed << 0x10 | _0x3afd68 << 0x8 | _0x47cda4;
                return this['fontSizeIn' + 'fo'][_0x3f1ae9] = _0x21155f, _0x21155f;
            }, _0x3bb7cc['printDbgIn' + 'fo'] = function () {
                console['log']('图集个数:' + this['textAtlase' + 's']['length'] + ',每个图集大小:' + _0x53acfb['atlasWidth'] + 'x' + _0x53acfb['atlasWidth'], '\x20用canvas:', _0x53acfb['isWan1Wan']), console['log']('图集占用空间:' + _0x53acfb['atlasWidth'] * _0x53acfb['atlasWidth'] * 0x4 / 0x400 / 0x400 * this['textAtlase' + 's']['length'] + 'M'), console['log']('缓存用到的字体:');
                for (var _0x414439 in this['mapFont']) {
                    var _0xae369f = this['getFontSiz' + 'eInfo'](_0x414439), _0x3c59fb = _0xae369f >> 0x18, _0x327584 = _0xae369f >> 0x10 & 0xff, _0x8153b1 = _0xae369f >> 0x8 & 0xff, _0x6ed157 = _0xae369f & 0xff;
                    console['log']('\x20\x20\x20\x20' + _0x414439, '\x20off:', _0x3c59fb, _0x327584, '\x20size:', _0x8153b1, _0x6ed157);
                }
                ;
                var _0x28f55a = 0x0;
                console['log']('缓存数据:');
                var _0x4cd990 = 0x0, _0x2a32a4 = 0x0;
                this['textAtlase' + 's']['forEach'](function (_0x5b34f5) {
                    var _0x26a1ae = _0x5b34f5['texture']['id'], _0x52188f = _0x29f3e7['loopCount'] - _0x5b34f5['texture']['lastTouchT' + 'm'], _0x218d5c = _0x52188f > 0x0 ? '' + _0x52188f + '帧以前' : '当前帧';
                    _0x4cd990 += _0x5b34f5['texture']['curUsedCov' + 'Rate'], _0x2a32a4 += _0x5b34f5['texture']['curUsedCov' + 'RateAtlas'], console['log']('--图集(id:' + _0x26a1ae + ',当前使用率:' + (_0x5b34f5['texture']['curUsedCov' + 'Rate'] * 0x3e8 | 0x0) + '‰', '当前图集使用率:', (_0x5b34f5['texture']['curUsedCov' + 'RateAtlas'] * 0x64 | 0x0) + '%', '图集使用率:', _0x5b34f5['usedRate'] * 0x64 | 0x0, '%,\x20使用于:' + _0x218d5c + ')--:');
                    for (var _0x4409a5 in _0x5b34f5['charMaps']) {
                        var _0x2bcc36 = _0x5b34f5['charMaps'][_0x4409a5];
                        console['log']('\x20\x20\x20\x20\x20off:', _0x2bcc36['orix'], _0x2bcc36['oriy'], '\x20bmp宽高:', _0x2bcc36['bmpWidth'], _0x2bcc36['bmpHeight'], '无效:', _0x2bcc36['deleted'], 'touchdt:', _0x29f3e7['loopCount'] - _0x2bcc36['touchTick'], '位置:', _0x2bcc36['uv'][0x0] * _0x53acfb['atlasWidth'] | 0x0, _0x2bcc36['uv'][0x1] * _0x53acfb['atlasWidth'] | 0x0, '字符:', _0x2bcc36['char'], 'key:', _0x4409a5), _0x28f55a++;
                    }
                }), console['log']('独立贴图文字(' + this['isoTexture' + 's']['length'] + '个):'), this['isoTexture' + 's']['forEach'](function (_0x3ac011) {
                    console['log']('\x20\x20\x20\x20size:', _0x3ac011['_texW'], _0x3ac011['_texH'], 'touch间隔:', _0x29f3e7['loopCount'] - _0x3ac011['lastTouchT' + 'm'], 'char:', _0x3ac011['ri']['char']);
                }), console['log']('总缓存:', _0x28f55a, '总使用率:', _0x4cd990, '总当前图集使用率:', _0x2a32a4);
            }, _0x3bb7cc['showAtlas'] = function (_0x54f2a8, _0x14e61e, _0x5aa1ec, _0x2e889a, _0x1a47c6, _0x3d61e3) {
                if (!this['textAtlase' + 's'][_0x54f2a8])
                    return console['log']('没有这个图集'), null;
                ;
                var _0x4222ef = new _0x854b9a(), _0x565c84 = this['textAtlase' + 's'][_0x54f2a8]['texture'], _0x546444 = {
                        'width': _0x53acfb['atlasWidth'],
                        'height': _0x53acfb['atlasWidth'],
                        'sourceWidth': _0x53acfb['atlasWidth'],
                        'sourceHeight': _0x53acfb['atlasWidth'],
                        'offsetX': 0x0,
                        'offsetY': 0x0,
                        'getIsReady': function () {
                            return !![];
                        },
                        '_addReference': function () {
                        },
                        '_removeReference': function () {
                        },
                        '_getSource': function () {
                            return _0x565c84['_getSource']();
                        },
                        'bitmap': { 'id': _0x565c84['id'] },
                        '_uv': _0x4fcec0['DEF_UV']
                    };
                return _0x4222ef['size'] = function (_0x3d60ff, _0x187fd4) {
                    return this['width'] = _0x3d60ff, this['height'] = _0x187fd4, _0x4222ef['graphics']['clear'](), _0x4222ef['graphics']['drawRect'](0x0, 0x0, _0x4222ef['width'], _0x4222ef['height'], _0x14e61e), _0x4222ef['graphics']['drawTextur' + 'e'](_0x546444, 0x0, 0x0, _0x4222ef['width'], _0x4222ef['height']), this;
                }, _0x4222ef['graphics']['drawRect'](0x0, 0x0, _0x1a47c6, _0x3d61e3, _0x14e61e), _0x4222ef['graphics']['drawTextur' + 'e'](_0x546444, 0x0, 0x0, _0x1a47c6, _0x3d61e3), _0x4222ef['pos'](_0x5aa1ec, _0x2e889a), _0x4a6519['stage']['addChild'](_0x4222ef), _0x4222ef;
            }, _0x3bb7cc['filltext_n' + 'ative'] = function (_0xa1f981, _0x293cb9, _0x42f1a0, _0x1bead2, _0x36466a, _0x31433b, _0x24e9f0, _0x2d80d0, _0x1cb64f, _0x4c95c5, _0x5040df) {
                _0x5040df === void 0x0 && (_0x5040df = 0x0);
                if (_0x293cb9 && _0x293cb9['length'] <= 0x0)
                    return;
                if (_0x42f1a0 && _0x42f1a0['length'] < 0x1)
                    return;
                var _0x5d130f = _0x2adb5b['Parse'](_0x31433b), _0x17056a = 0x0;
                switch (_0x4c95c5) {
                case 'center':
                    _0x17056a = _0x3ed815['ENUM_TEXTA' + 'LIGN_CENTE' + 'R'];
                    break;
                case 'right':
                    _0x17056a = _0x3ed815['ENUM_TEXTA' + 'LIGN_RIGHT'];
                    break;
                }
                return this['_fast_fill' + 'text'](_0xa1f981, _0x293cb9, _0x42f1a0, _0x1bead2, _0x36466a, _0x5d130f, _0x24e9f0, _0x2d80d0, _0x1cb64f, _0x17056a, _0x5040df);
            }, _0x53acfb['useOldChar' + 'Book'] = ![], _0x53acfb['atlasWidth'] = 0x800, _0x53acfb['noAtlas'] = ![], _0x53acfb['forceSplit' + 'Render'] = ![], _0x53acfb['forceWhole' + 'Render'] = ![], _0x53acfb['scaleFontW' + 'ithCtx'] = !![], _0x53acfb['standardFo' + 'ntSize'] = 0x20, _0x53acfb['destroyAtl' + 'asDt'] = 0xa, _0x53acfb['checkClean' + 'TextureDt'] = 0x7d0, _0x53acfb['destroyUnu' + 'sedTexture' + 'Dt'] = 0xbb8, _0x53acfb['cleanMem'] = 0x64 * 0x400 * 0x400, _0x53acfb['isWan1Wan'] = ![], _0x53acfb['showLog'] = ![], _0x53acfb['debugUV'] = ![], _0x53acfb['atlasWidth' + '2'] = 0x800 * 0x800, _0x53acfb['textRender' + 'Inst'] = null, _0x53acfb['simClean'] = ![], _0x3a2911(_0x53acfb, [
                'tmpRI',
                function () {
                    return this['tmpRI'] = new _0x37b54c();
                },
                'pixelBBX',
                function () {
                    return this['pixelBBX'] = [
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ];
                },
                'imgdtRect',
                function () {
                    return this['imgdtRect'] = [
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ];
                }
            ]), _0x53acfb;
        }(), _0x3a7c76 = function () {
            function _0x1f213b() {
                this['_commandEn' + 'coder'] = null;
            }
            _0x199b5b(_0x1f213b, 'laya.layag' + 'l.ConchGra' + 'phicsAdpt');
            var _0x19327a = _0x1f213b['prototype'];
            return _0x19327a['_createDat' + 'a'] = function () {
                this['_commandEn' + 'coder'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, !![]);
            }, _0x19327a['_clearData'] = function () {
                if (this['_commandEn' + 'coder'])
                    this['_commandEn' + 'coder']['clearEncod' + 'ing']();
            }, _0x19327a['_destroyDa' + 'ta'] = function () {
                this['_commandEn' + 'coder'] && (this['_commandEn' + 'coder']['clearEncod' + 'ing'](), this['_commandEn' + 'coder'] = null);
            }, _0x1f213b['__init__'] = function () {
                var _0x32f84c = _0xfece3['prototype'], _0x38e608 = _0x1f213b['prototype'], _0x473507 = [
                        '_createDat' + 'a',
                        '_clearData',
                        '_destroyDa' + 'ta'
                    ], _0x37ac3f = 0x0, _0x2bd72a = 0x0;
                _0x2bd72a = _0x473507['length'];
                var _0x554bf3;
                for (_0x37ac3f = 0x0; _0x37ac3f < _0x2bd72a; _0x37ac3f++) {
                    _0x554bf3 = _0x473507[_0x37ac3f], _0x32f84c[_0x554bf3] = _0x38e608[_0x554bf3];
                }
            }, _0x1f213b;
        }(), _0x2e73ec = function () {
            function _0x346858() {
            }
            return _0x199b5b(_0x346858, 'laya.webgl' + '.utils.Mat' + 'irxArray'), _0x346858['ArrayMul'] = function (_0xd36334, _0x4d8f09, _0x31f3dd) {
                if (!_0xd36334) {
                    _0x346858['copyArray'](_0x4d8f09, _0x31f3dd);
                    return;
                }
                if (!_0x4d8f09) {
                    _0x346858['copyArray'](_0xd36334, _0x31f3dd);
                    return;
                }
                ;
                var _0x19264a = NaN, _0x2bfd3f = NaN, _0x2efcd0 = NaN, _0x4124c9 = NaN;
                for (var _0x302563 = 0x0; _0x302563 < 0x4; _0x302563++) {
                    _0x19264a = _0xd36334[_0x302563], _0x2bfd3f = _0xd36334[_0x302563 + 0x4], _0x2efcd0 = _0xd36334[_0x302563 + 0x8], _0x4124c9 = _0xd36334[_0x302563 + 0xc], _0x31f3dd[_0x302563] = _0x19264a * _0x4d8f09[0x0] + _0x2bfd3f * _0x4d8f09[0x1] + _0x2efcd0 * _0x4d8f09[0x2] + _0x4124c9 * _0x4d8f09[0x3], _0x31f3dd[_0x302563 + 0x4] = _0x19264a * _0x4d8f09[0x4] + _0x2bfd3f * _0x4d8f09[0x5] + _0x2efcd0 * _0x4d8f09[0x6] + _0x4124c9 * _0x4d8f09[0x7], _0x31f3dd[_0x302563 + 0x8] = _0x19264a * _0x4d8f09[0x8] + _0x2bfd3f * _0x4d8f09[0x9] + _0x2efcd0 * _0x4d8f09[0xa] + _0x4124c9 * _0x4d8f09[0xb], _0x31f3dd[_0x302563 + 0xc] = _0x19264a * _0x4d8f09[0xc] + _0x2bfd3f * _0x4d8f09[0xd] + _0x2efcd0 * _0x4d8f09[0xe] + _0x4124c9 * _0x4d8f09[0xf];
                }
            }, _0x346858['copyArray'] = function (_0x1d7570, _0xe4b225) {
                if (!_0x1d7570)
                    return;
                if (!_0xe4b225)
                    return;
                for (var _0x27f0be = 0x0; _0x27f0be < _0x1d7570['length']; _0x27f0be++) {
                    _0xe4b225[_0x27f0be] = _0x1d7570[_0x27f0be];
                }
            }, _0x346858;
        }(), _0x2c0b83 = function () {
            function _0x3fc5df() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = new ParamData(0x3 * 0x4, !![]);
            }
            _0x199b5b(_0x3fc5df, 'laya.layag' + 'l.cmdNativ' + 'e.RotateCm' + 'dNative');
            var _0x50f15a = _0x3fc5df['prototype'];
            return _0x50f15a['recover'] = function () {
                _0x5460aa['recover']('RotateCmd', this);
            }, _0x3a2bd3(0x0, _0x50f15a, 'cmdID', function () {
                return 'Rotate';
            }), _0x3a2bd3(0x0, _0x50f15a, 'angle', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x0];
            }, function (_0x4208f1) {
                this['_paramData']['_float32Da' + 'ta'][0x0] = _0x4208f1, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x50f15a, 'pivotX', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x1];
            }, function (_0x1e1b28) {
                this['_paramData']['_float32Da' + 'ta'][0x1] = _0x1e1b28, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x50f15a, 'pivotY', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x2];
            }, function (_0x2f06d5) {
                this['_paramData']['_float32Da' + 'ta'][0x2] = _0x2f06d5, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3fc5df['create'] = function (_0x57e716, _0x3fd17a, _0x5e2a68) {
                var _0x1b729b = _0x5460aa['getItemByC' + 'lass']('RotateCmd', _0x3fc5df), _0x57a89c = _0x1b729b['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'], _0xab51c4 = _0x1b729b['_paramData']['_float32Da' + 'ta'];
                _0xab51c4[0x0] = _0x57e716, _0xab51c4[0x1] = _0x3fd17a, _0xab51c4[0x2] = _0x5e2a68;
                var _0x276a76 = _0x1b729b['_paramData']['getPtrID']();
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1b729b['_paramData']), _0x57a89c['setGlobalV' + 'alueEx'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0xd, _0x276a76, 0x0), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x57a89c), _0x1b729b;
            }, _0x3fc5df['ID'] = 'Rotate', _0x3fc5df;
        }(), _0x53ec23 = function () {
            function _0x12cc43() {
                this['_graphicsC' + 'mdEncoder'] = null;
            }
            _0x199b5b(_0x12cc43, 'laya.layag' + 'l.cmdNativ' + 'e.SaveCmdN' + 'ative');
            var _0x73b75d = _0x12cc43['prototype'];
            return _0x73b75d['recover'] = function () {
                _0x5460aa['recover']('SaveCmd', this);
            }, _0x3a2bd3(0x0, _0x73b75d, 'cmdID', function () {
                return 'Save';
            }), _0x12cc43['create'] = function () {
                var _0x36c4e3 = _0x5460aa['getItemByC' + 'lass']('SaveCmd', _0x12cc43), _0x29efd1 = _0x36c4e3['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x29efd1['save'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x29efd1), _0x36c4e3;
            }, _0x12cc43['ID'] = 'Save', _0x12cc43;
        }(), _0xa0633a = function () {
            function _0x25934f() {
            }
            return _0x199b5b(_0x25934f, 'laya.webgl' + '.VertexArr' + 'ayObject'), _0x25934f;
        }()(function () {
            var _0x106a2a = {};
            function _0x24da9f(_0x8af2d1) {
                _0x2923dd['console'] && _0x2923dd['console']['error'] && _0x2923dd['console']['error'](_0x8af2d1);
            }
            function _0x190e68(_0x460373) {
                _0x2923dd['console'] && _0x2923dd['console']['log'] && _0x2923dd['console']['log'](_0x460373);
            }
            function _0x4e234b(_0x3d436b, _0x30981f) {
                _0x106a2a[_0x3d436b] = !![], _0x30981f !== undefined && _0x24da9f(_0x30981f);
            }
            function _0x993424(_0x5336af) {
                var _0x554d09 = _0x5336af['getError'];
                _0x5336af['getError'] = function () {
                    var _0x45f615;
                    do {
                        _0x45f615 = _0x554d09['apply'](_0x5336af), _0x45f615 != _0x5336af['NO_ERROR'] && (_0x106a2a[_0x45f615] = !![]);
                    } while (_0x45f615 != _0x5336af['NO_ERROR']);
                    for (var _0x45f615 in _0x106a2a) {
                        if (_0x106a2a[_0x45f615])
                            return delete _0x106a2a[_0x45f615], parseInt(_0x45f615);
                    }
                    return _0x5336af['NO_ERROR'];
                };
            }
            var _0x3f1755 = function _0x4203af(_0x81f50d) {
                var _0x512fec = _0x81f50d['gl'];
                this['ext'] = _0x81f50d, this['isAlive'] = !![], this['hasBeenBou' + 'nd'] = ![], this['elementArr' + 'ayBuffer'] = null, this['attribs'] = new Array(_0x81f50d['maxVertexA' + 'ttribs']);
                for (var _0x50bf3a = 0x0; _0x50bf3a < this['attribs']['length']; _0x50bf3a++) {
                    var _0x5b6645 = new _0x4203af['VertexAttr' + 'ib'](_0x512fec);
                    this['attribs'][_0x50bf3a] = _0x5b6645;
                }
                this['maxAttrib'] = 0x0;
            };
            _0x3f1755['VertexAttr' + 'ib'] = function _0x1d7abd(_0x5d4149) {
                this['enabled'] = ![], this['buffer'] = null, this['size'] = 0x4, this['type'] = _0x5d4149['FLOAT'], this['normalized'] = ![], this['stride'] = 0x10, this['offset'] = 0x0, this['cached'] = '', this['recache']();
            }, _0x3f1755['VertexAttr' + 'ib']['prototype']['recache'] = function _0x13ade5() {
                this['cached'] = [
                    this['size'],
                    this['type'],
                    this['normalized'],
                    this['stride'],
                    this['offset']
                ]['join'](':');
            };
            var _0x18d117 = function _0x59b323(_0xa0ef36) {
                var _0x2b3742 = this;
                this['gl'] = _0xa0ef36, _0x993424(_0xa0ef36);
                var _0x1872a7 = this['original'] = {
                    'getParameter': _0xa0ef36['getParamet' + 'er'],
                    'enableVertexAttribArray': _0xa0ef36['enableVert' + 'exAttribAr' + 'ray'],
                    'disableVertexAttribArray': _0xa0ef36['disableVer' + 'texAttribA' + 'rray'],
                    'bindBuffer': _0xa0ef36['bindBuffer'],
                    'getVertexAttrib': _0xa0ef36['getVertexA' + 'ttrib'],
                    'vertexAttribPointer': _0xa0ef36['vertexAttr' + 'ibPointer']
                };
                _0xa0ef36['getParamet' + 'er'] = function _0x56ac84(_0xa14133) {
                    if (_0xa14133 == _0x2b3742['VERTEX_ARR' + 'AY_BINDING' + '_OES'])
                        return _0x2b3742['currentVer' + 'texArrayOb' + 'ject'] == _0x2b3742['defaultVer' + 'texArrayOb' + 'ject'] ? null : _0x2b3742['currentVer' + 'texArrayOb' + 'ject'];
                    return _0x1872a7['getParamet' + 'er']['apply'](this, arguments);
                }, _0xa0ef36['enableVert' + 'exAttribAr' + 'ray'] = function _0x4917d2(_0x586f27) {
                    var _0x20dd66 = _0x2b3742['currentVer' + 'texArrayOb' + 'ject'];
                    _0x20dd66['maxAttrib'] = Math['max'](_0x20dd66['maxAttrib'], _0x586f27);
                    var _0xb26cd1 = _0x20dd66['attribs'][_0x586f27];
                    return _0xb26cd1['enabled'] = !![], _0x1872a7['enableVert' + 'exAttribAr' + 'ray']['apply'](this, arguments);
                }, _0xa0ef36['disableVer' + 'texAttribA' + 'rray'] = function _0x128990(_0x1fe60d) {
                    var _0x1e9ed2 = _0x2b3742['currentVer' + 'texArrayOb' + 'ject'];
                    _0x1e9ed2['maxAttrib'] = Math['max'](_0x1e9ed2['maxAttrib'], _0x1fe60d);
                    var _0x1ac001 = _0x1e9ed2['attribs'][_0x1fe60d];
                    return _0x1ac001['enabled'] = ![], _0x1872a7['disableVer' + 'texAttribA' + 'rray']['apply'](this, arguments);
                }, _0xa0ef36['bindBuffer'] = function _0x3906a7(_0x2c19c4, _0x577eac) {
                    switch (_0x2c19c4) {
                    case _0xa0ef36['ARRAY_BUFF' + 'ER']:
                        _0x2b3742['currentArr' + 'ayBuffer'] = _0x577eac;
                        break;
                    case _0xa0ef36['ELEMENT_AR' + 'RAY_BUFFER']:
                        _0x2b3742['currentVer' + 'texArrayOb' + 'ject']['elementArr' + 'ayBuffer'] = _0x577eac;
                        break;
                    }
                    return _0x1872a7['bindBuffer']['apply'](this, arguments);
                }, _0xa0ef36['getVertexA' + 'ttrib'] = function _0x1280d6(_0xa9c485, _0x39bcb2) {
                    var _0x3248e6 = _0x2b3742['currentVer' + 'texArrayOb' + 'ject'], _0x230ca2 = _0x3248e6['attribs'][_0xa9c485];
                    switch (_0x39bcb2) {
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'BUFFER_BIN' + 'DING']:
                        return _0x230ca2['buffer'];
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'ENABLED']:
                        return _0x230ca2['enabled'];
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'SIZE']:
                        return _0x230ca2['size'];
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'STRIDE']:
                        return _0x230ca2['stride'];
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'TYPE']:
                        return _0x230ca2['type'];
                    case _0xa0ef36['VERTEX_ATT' + 'RIB_ARRAY_' + 'NORMALIZED']:
                        return _0x230ca2['normalized'];
                    default:
                        return _0x1872a7['getVertexA' + 'ttrib']['apply'](this, arguments);
                    }
                }, _0xa0ef36['vertexAttr' + 'ibPointer'] = function _0x392fb3(_0x30c902, _0x4de374, _0x411702, _0x414dc3, _0x4faa1b, _0x3fcd15) {
                    var _0x13967e = _0x2b3742['currentVer' + 'texArrayOb' + 'ject'];
                    _0x13967e['maxAttrib'] = Math['max'](_0x13967e['maxAttrib'], _0x30c902);
                    var _0x1d9848 = _0x13967e['attribs'][_0x30c902];
                    return _0x1d9848['buffer'] = _0x2b3742['currentArr' + 'ayBuffer'], _0x1d9848['size'] = _0x4de374, _0x1d9848['type'] = _0x411702, _0x1d9848['normalized'] = _0x414dc3, _0x1d9848['stride'] = _0x4faa1b, _0x1d9848['offset'] = _0x3fcd15, _0x1d9848['recache'](), _0x1872a7['vertexAttr' + 'ibPointer']['apply'](this, arguments);
                };
                _0xa0ef36['instrument' + 'Extension'] && _0xa0ef36['instrument' + 'Extension'](this, 'OES_vertex' + '_array_obj' + 'ect');
                if (_0xa0ef36['canvas'] && _0xa0ef36['canvas']['addEventLi' + 'stener'])
                    _0xa0ef36['canvas']['addEventLi' + 'stener']('webglconte' + 'xtrestored', function () {
                        _0x190e68('OESVertexA' + 'rrayObject' + '\x20emulation' + '\x20library\x20c' + 'ontext\x20res' + 'tored'), _0x2b3742['reset_']();
                    }, !![]);
                this['reset_']();
            };
            _0x18d117['prototype']['VERTEX_ARR' + 'AY_BINDING' + '_OES'] = 0x85b5, _0x18d117['prototype']['reset_'] = function _0x53fc82() {
                var _0x505f97 = this['vertexArra' + 'yObjects'] !== undefined;
                if (_0x505f97)
                    for (var _0x32b2b5 = 0x0; _0x32b2b5 < this['vertexArra' + 'yObjects']['length']; ++_0x32b2b5) {
                        this['vertexArra' + 'yObjects']['isAlive'] = ![];
                    }
                var _0x8e2478 = this['gl'];
                this['maxVertexA' + 'ttribs'] = _0x8e2478['getParamet' + 'er'](_0x8e2478['MAX_VERTEX' + '_ATTRIBS']), this['defaultVer' + 'texArrayOb' + 'ject'] = new _0x3f1755(this), this['currentVer' + 'texArrayOb' + 'ject'] = null, this['currentArr' + 'ayBuffer'] = null, this['vertexArra' + 'yObjects'] = [this['defaultVer' + 'texArrayOb' + 'ject']], this['bindVertex' + 'ArrayOES'](null);
            }, _0x18d117['prototype']['createVert' + 'exArrayOES'] = function _0x53f474() {
                var _0x59acd8 = new _0x3f1755(this);
                return this['vertexArra' + 'yObjects']['push'](_0x59acd8), _0x59acd8;
            }, _0x18d117['prototype']['deleteVert' + 'exArrayOES'] = function _0x2db54f(_0xd25648) {
                _0xd25648['isAlive'] = ![], this['vertexArra' + 'yObjects']['splice'](this['vertexArra' + 'yObjects']['indexOf'](_0xd25648), 0x1), this['currentVer' + 'texArrayOb' + 'ject'] == _0xd25648 && this['bindVertex' + 'ArrayOES'](null);
            }, _0x18d117['prototype']['isVertexAr' + 'rayOES'] = function _0x3771b9(_0x17efa1) {
                if (_0x17efa1 && _0x17efa1 instanceof _0x3f1755) {
                    if (_0x17efa1['hasBeenBou' + 'nd'] && _0x17efa1['ext'] == this)
                        return !![];
                }
                return ![];
            }, _0x18d117['prototype']['bindVertex' + 'ArrayOES'] = function _0x10152a(_0x84b20) {
                var _0xd9f381 = this['gl'];
                if (_0x84b20 && !_0x84b20['isAlive']) {
                    _0x4e234b(_0xd9f381['INVALID_OP' + 'ERATION'], 'bindVertex' + 'ArrayOES:\x20' + 'attempt\x20to' + '\x20bind\x20dele' + 'ted\x20arrayO' + 'bject');
                    return;
                }
                var _0x4cf0ba = this['original'], _0x2652ee = this['currentVer' + 'texArrayOb' + 'ject'];
                this['currentVer' + 'texArrayOb' + 'ject'] = _0x84b20 || this['defaultVer' + 'texArrayOb' + 'ject'], this['currentVer' + 'texArrayOb' + 'ject']['hasBeenBou' + 'nd'] = !![];
                var _0x45f906 = this['currentVer' + 'texArrayOb' + 'ject'];
                if (_0x2652ee == _0x45f906)
                    return;
                (!_0x2652ee || _0x45f906['elementArr' + 'ayBuffer'] != _0x2652ee['elementArr' + 'ayBuffer']) && _0x4cf0ba['bindBuffer']['call'](_0xd9f381, _0xd9f381['ELEMENT_AR' + 'RAY_BUFFER'], _0x45f906['elementArr' + 'ayBuffer']);
                var _0x459dfa = this['currentArr' + 'ayBuffer'], _0x25bb9c = Math['max'](_0x2652ee ? _0x2652ee['maxAttrib'] : 0x0, _0x45f906['maxAttrib']);
                for (var _0x1638c0 = 0x0; _0x1638c0 <= _0x25bb9c; _0x1638c0++) {
                    var _0x429838 = _0x45f906['attribs'][_0x1638c0], _0x3276c9 = _0x2652ee ? _0x2652ee['attribs'][_0x1638c0] : null;
                    (!_0x2652ee || _0x429838['enabled'] != _0x3276c9['enabled']) && (_0x429838['enabled'] ? _0x4cf0ba['enableVert' + 'exAttribAr' + 'ray']['call'](_0xd9f381, _0x1638c0) : _0x4cf0ba['disableVer' + 'texAttribA' + 'rray']['call'](_0xd9f381, _0x1638c0));
                    if (_0x429838['enabled']) {
                        var _0x3f3f17 = ![];
                        (!_0x2652ee || _0x429838['buffer'] != _0x3276c9['buffer']) && (_0x459dfa != _0x429838['buffer'] && (_0x4cf0ba['bindBuffer']['call'](_0xd9f381, _0xd9f381['ARRAY_BUFF' + 'ER'], _0x429838['buffer']), _0x459dfa = _0x429838['buffer']), _0x3f3f17 = !![]), (_0x3f3f17 || _0x429838['cached'] != _0x3276c9['cached']) && _0x4cf0ba['vertexAttr' + 'ibPointer']['call'](_0xd9f381, _0x1638c0, _0x429838['size'], _0x429838['type'], _0x429838['normalized'], _0x429838['stride'], _0x429838['offset']);
                    }
                }
                this['currentArr' + 'ayBuffer'] != _0x459dfa && _0x4cf0ba['bindBuffer']['call'](_0xd9f381, _0xd9f381['ARRAY_BUFF' + 'ER'], this['currentArr' + 'ayBuffer']);
            }, _0x2923dd['_setupVert' + 'exArrayObj' + 'ect'] = function (_0x4f1b00) {
                var _0x1731f4 = _0x4f1b00['getSupport' + 'edExtensio' + 'ns'];
                _0x4f1b00['getSupport' + 'edExtensio' + 'ns'] = function _0x2b2078() {
                    var _0x4dba56 = _0x1731f4['call'](this) || [];
                    return _0x4dba56['indexOf']('OES_vertex' + '_array_obj' + 'ect') < 0x0 && _0x4dba56['push']('OES_vertex' + '_array_obj' + 'ect'), _0x4dba56;
                };
                var _0x398a8d = _0x4f1b00['getExtensi' + 'on'];
                _0x4f1b00['getExtensi' + 'on'] = function _0x2c46be(_0x3b5876) {
                    var _0x247193 = _0x398a8d['call'](this, _0x3b5876);
                    if (_0x247193)
                        return _0x247193;
                    if (_0x3b5876 !== 'OES_vertex' + '_array_obj' + 'ect')
                        return null;
                    return !this['__OESVerte' + 'xArrayObje' + 'ct'] && (console['log']('Setup\x20OES_' + 'vertex_arr' + 'ay_object\x20' + 'polyfill'), this['__OESVerte' + 'xArrayObje' + 'ct'] = new _0x18d117(this)), this['__OESVerte' + 'xArrayObje' + 'ct'];
                };
            }, _0x2923dd['_forceSetu' + 'pVertexArr' + 'ayObject'] = function (_0x176ce9) {
                var _0x3fb27e = _0x176ce9['getSupport' + 'edExtensio' + 'ns'];
                _0x176ce9['getSupport' + 'edExtensio' + 'ns'] = function _0x1a3b6b() {
                    var _0x1d95c8 = _0x3fb27e['call'](this) || [];
                    return _0x1d95c8['indexOf']('OES_vertex' + '_array_obj' + 'ect') < 0x0 && _0x1d95c8['push']('OES_vertex' + '_array_obj' + 'ect'), _0x1d95c8;
                };
                var _0x569143 = _0x176ce9['getExtensi' + 'on'];
                _0x176ce9['getExtensi' + 'on'] = function _0x2c503b(_0x664210) {
                    if (_0x664210 === 'OES_vertex' + '_array_obj' + 'ect')
                        return !this['__OESVerte' + 'xArrayObje' + 'ct'] && (console['log']('Setup\x20OES_' + 'vertex_arr' + 'ay_object\x20' + 'polyfill'), this['__OESVerte' + 'xArrayObje' + 'ct'] = new _0x18d117(this)), this['__OESVerte' + 'xArrayObje' + 'ct'];
                    else {
                        var _0x1069c1 = _0x569143['call'](this, _0x664210);
                        return _0x1069c1 ? _0x1069c1 : null;
                    }
                };
            };
        }());
    ;
    var _0x3f256a = function () {
            function _0xdb0534() {
            }
            _0x199b5b(_0xdb0534, 'laya.webgl' + '.text.Arab' + 'icReshaper');
            var _0x19968f = _0xdb0534['prototype'];
            return _0x19968f['characterM' + 'apContains'] = function (_0x3c5244) {
                for (var _0x5cf661 = 0x0; _0x5cf661 < _0xdb0534['charsMap']['length']; ++_0x5cf661) {
                    if (_0xdb0534['charsMap'][_0x5cf661][0x0] === _0x3c5244)
                        return !![];
                }
                return ![];
            }, _0x19968f['getCharRep'] = function (_0x4c76c7) {
                for (var _0x22ea67 = 0x0; _0x22ea67 < _0xdb0534['charsMap']['length']; ++_0x22ea67) {
                    if (_0xdb0534['charsMap'][_0x22ea67][0x0] === _0x4c76c7)
                        return _0xdb0534['charsMap'][_0x22ea67];
                }
                return ![];
            }, _0x19968f['getCombCha' + 'rRep'] = function (_0x13f73f, _0x25f625) {
                for (var _0x3fffa1 = 0x0; _0x3fffa1 < _0xdb0534['combCharsM' + 'ap']['length']; ++_0x3fffa1) {
                    if (_0xdb0534['combCharsM' + 'ap'][_0x3fffa1][0x0][0x0] === _0x13f73f && _0xdb0534['combCharsM' + 'ap'][_0x3fffa1][0x0][0x1] === _0x25f625)
                        return _0xdb0534['combCharsM' + 'ap'][_0x3fffa1];
                }
                return ![];
            }, _0x19968f['isTranspar' + 'ent'] = function (_0x54f940) {
                for (var _0x2a1c8a = 0x0; _0x2a1c8a < _0xdb0534['transChars']['length']; ++_0x2a1c8a) {
                    if (_0xdb0534['transChars'][_0x2a1c8a] === _0x54f940)
                        return !![];
                }
                return ![];
            }, _0x19968f['getOrigina' + 'lCharsFrom' + 'Code'] = function (_0x4a7750) {
                var _0x32f1bc = 0x0;
                for (_0x32f1bc = 0x0; _0x32f1bc < _0xdb0534['charsMap']['length']; ++_0x32f1bc) {
                    if (_0xdb0534['charsMap'][_0x32f1bc]['indexOf'](_0x4a7750) > -0x1)
                        return String['fromCharCo' + 'de'](_0xdb0534['charsMap'][_0x32f1bc][0x0]);
                }
                for (_0x32f1bc = 0x0; _0x32f1bc < _0xdb0534['combCharsM' + 'ap']['length']; ++_0x32f1bc) {
                    if (_0xdb0534['combCharsM' + 'ap'][_0x32f1bc]['indexOf'](_0x4a7750) > -0x1)
                        return String['fromCharCo' + 'de'](_0xdb0534['combCharsM' + 'ap'][_0x32f1bc][0x0][0x0]) + String['fromCharCo' + 'de'](_0xdb0534['combCharsM' + 'ap'][_0x32f1bc][0x0][0x1]);
                }
                return String['fromCharCo' + 'de'](_0x4a7750);
            }, _0x19968f['convertAra' + 'bic'] = function (_0x2b96d2) {
                var _0x2495f8, _0x49c138, _0x40dea2 = '';
                for (var _0xb1d89b = 0x0; _0xb1d89b < _0x2b96d2['length']; ++_0xb1d89b) {
                    var _0x7b3eb0 = _0x2b96d2['charCodeAt'](_0xb1d89b);
                    if (this['characterM' + 'apContains'](_0x7b3eb0)) {
                        var _0x57fd86 = null, _0x3e3723 = null, _0x500ee6 = _0xb1d89b - 0x1, _0x3ba69c = _0xb1d89b + 0x1;
                        for (; _0x500ee6 >= 0x0; --_0x500ee6) {
                            if (!this['isTranspar' + 'ent'](_0x2b96d2['charCodeAt'](_0x500ee6)))
                                break;
                        }
                        _0x57fd86 = _0x500ee6 >= 0x0 ? _0x2b96d2['charCodeAt'](_0x500ee6) : null, _0x2495f8 = _0x57fd86 ? this['getCharRep'](_0x57fd86) : ![];
                        (!_0x2495f8 || _0x2495f8[0x2] == null && _0x2495f8[0x3] == null) && (_0x57fd86 = null);
                        for (; _0x3ba69c < _0x2b96d2['length']; ++_0x3ba69c) {
                            if (!this['isTranspar' + 'ent'](_0x2b96d2['charCodeAt'](_0x3ba69c)))
                                break;
                        }
                        _0x3e3723 = _0x3ba69c < _0x2b96d2['length'] ? _0x2b96d2['charCodeAt'](_0x3ba69c) : null, _0x2495f8 = _0x3e3723 ? this['getCharRep'](_0x3e3723) : ![];
                        (!_0x2495f8 || _0x2495f8[0x3] == null && _0x2495f8[0x4] == null) && (_0x3e3723 = null);
                        if (_0x7b3eb0 === 0x644 && _0x3e3723 != null && (_0x3e3723 === 0x622 || _0x3e3723 === 0x623 || _0x3e3723 === 0x625 || _0x3e3723 === 0x627)) {
                            _0x49c138 = this['getCombCha' + 'rRep'](_0x7b3eb0, _0x3e3723);
                            _0x57fd86 != null ? _0x40dea2 += String['fromCharCo' + 'de'](_0x49c138[0x4]) : _0x40dea2 += String['fromCharCo' + 'de'](_0x49c138[0x1]);
                            ++_0xb1d89b;
                            continue;
                        }
                        _0x2495f8 = this['getCharRep'](_0x7b3eb0);
                        if (_0x57fd86 != null && _0x3e3723 != null && _0x2495f8[0x3] != null) {
                            _0x40dea2 += String['fromCharCo' + 'de'](_0x2495f8[0x3]);
                            continue;
                        } else {
                            if (_0x57fd86 != null && _0x2495f8[0x4] != null) {
                                _0x40dea2 += String['fromCharCo' + 'de'](_0x2495f8[0x4]);
                                continue;
                            } else {
                                if (_0x3e3723 != null && _0x2495f8[0x2] != null) {
                                    _0x40dea2 += String['fromCharCo' + 'de'](_0x2495f8[0x2]);
                                    continue;
                                } else
                                    _0x40dea2 += String['fromCharCo' + 'de'](_0x2495f8[0x1]);
                            }
                        }
                    } else
                        _0x40dea2 += String['fromCharCo' + 'de'](_0x7b3eb0);
                }
                return _0x40dea2;
            }, _0x19968f['convertAra' + 'bicBack'] = function (_0xb33251) {
                var _0x263193 = '', _0x4ca665 = 0x0, _0x55ba24 = 0x0;
                _0x365ba1:
                    for (_0x55ba24 = 0x0; _0x55ba24 < _0xb33251['length']; ++_0x55ba24) {
                        _0x4ca665 = _0xb33251['charCodeAt'](_0x55ba24), _0x263193 += this['getOrigina' + 'lCharsFrom' + 'Code'](_0x4ca665);
                    }
                return _0x263193;
            }, _0x3a2911(_0xdb0534, [
                'charsMap',
                function () {
                    return this['charsMap'] = [
                        [
                            0x621,
                            0xfe80,
                            null,
                            null,
                            null
                        ],
                        [
                            0x622,
                            0xfe81,
                            null,
                            null,
                            0xfe82
                        ],
                        [
                            0x623,
                            0xfe83,
                            null,
                            null,
                            0xfe84
                        ],
                        [
                            0x624,
                            0xfe85,
                            null,
                            null,
                            0xfe86
                        ],
                        [
                            0x625,
                            0xfe87,
                            null,
                            null,
                            0xfe88
                        ],
                        [
                            0x626,
                            0xfe89,
                            0xfe8b,
                            0xfe8c,
                            0xfe8a
                        ],
                        [
                            0x627,
                            0xfe8d,
                            null,
                            null,
                            0xfe8e
                        ],
                        [
                            0x628,
                            0xfe8f,
                            0xfe91,
                            0xfe92,
                            0xfe90
                        ],
                        [
                            0x629,
                            0xfe93,
                            null,
                            null,
                            0xfe94
                        ],
                        [
                            0x62a,
                            0xfe95,
                            0xfe97,
                            0xfe98,
                            0xfe96
                        ],
                        [
                            0x62b,
                            0xfe99,
                            0xfe9b,
                            0xfe9c,
                            0xfe9a
                        ],
                        [
                            0x62c,
                            0xfe9d,
                            0xfe9f,
                            0xfea0,
                            0xfe9e
                        ],
                        [
                            0x62d,
                            0xfea1,
                            0xfea3,
                            0xfea4,
                            0xfea2
                        ],
                        [
                            0x62e,
                            0xfea5,
                            0xfea7,
                            0xfea8,
                            0xfea6
                        ],
                        [
                            0x62f,
                            0xfea9,
                            null,
                            null,
                            0xfeaa
                        ],
                        [
                            0x630,
                            0xfeab,
                            null,
                            null,
                            0xfeac
                        ],
                        [
                            0x631,
                            0xfead,
                            null,
                            null,
                            0xfeae
                        ],
                        [
                            0x632,
                            0xfeaf,
                            null,
                            null,
                            0xfeb0
                        ],
                        [
                            0x633,
                            0xfeb1,
                            0xfeb3,
                            0xfeb4,
                            0xfeb2
                        ],
                        [
                            0x634,
                            0xfeb5,
                            0xfeb7,
                            0xfeb8,
                            0xfeb6
                        ],
                        [
                            0x635,
                            0xfeb9,
                            0xfebb,
                            0xfebc,
                            0xfeba
                        ],
                        [
                            0x636,
                            0xfebd,
                            0xfebf,
                            0xfec0,
                            0xfebe
                        ],
                        [
                            0x637,
                            0xfec1,
                            0xfec3,
                            0xfec4,
                            0xfec2
                        ],
                        [
                            0x638,
                            0xfec5,
                            0xfec7,
                            0xfec8,
                            0xfec6
                        ],
                        [
                            0x639,
                            0xfec9,
                            0xfecb,
                            0xfecc,
                            0xfeca
                        ],
                        [
                            0x63a,
                            0xfecd,
                            0xfecf,
                            0xfed0,
                            0xfece
                        ],
                        [
                            0x640,
                            0x640,
                            0x640,
                            0x640,
                            0x640
                        ],
                        [
                            0x641,
                            0xfed1,
                            0xfed3,
                            0xfed4,
                            0xfed2
                        ],
                        [
                            0x642,
                            0xfed5,
                            0xfed7,
                            0xfed8,
                            0xfed6
                        ],
                        [
                            0x643,
                            0xfed9,
                            0xfedb,
                            0xfedc,
                            0xfeda
                        ],
                        [
                            0x644,
                            0xfedd,
                            0xfedf,
                            0xfee0,
                            0xfede
                        ],
                        [
                            0x645,
                            0xfee1,
                            0xfee3,
                            0xfee4,
                            0xfee2
                        ],
                        [
                            0x646,
                            0xfee5,
                            0xfee7,
                            0xfee8,
                            0xfee6
                        ],
                        [
                            0x647,
                            0xfee9,
                            0xfeeb,
                            0xfeec,
                            0xfeea
                        ],
                        [
                            0x648,
                            0xfeed,
                            null,
                            null,
                            0xfeee
                        ],
                        [
                            0x649,
                            0xfeef,
                            null,
                            null,
                            0xfef0
                        ],
                        [
                            0x64a,
                            0xfef1,
                            0xfef3,
                            0xfef4,
                            0xfef2
                        ],
                        [
                            0x67e,
                            0xfb56,
                            0xfb58,
                            0xfb59,
                            0xfb57
                        ],
                        [
                            0x6cc,
                            0xfbfc,
                            0xfbfe,
                            0xfbff,
                            0xfbfd
                        ],
                        [
                            0x686,
                            0xfb7a,
                            0xfb7c,
                            0xfb7d,
                            0xfb7b
                        ],
                        [
                            0x6a9,
                            0xfb8e,
                            0xfb90,
                            0xfb91,
                            0xfb8f
                        ],
                        [
                            0x6af,
                            0xfb92,
                            0xfb94,
                            0xfb95,
                            0xfb93
                        ],
                        [
                            0x698,
                            0xfb8a,
                            null,
                            null,
                            0xfb8b
                        ]
                    ];
                },
                'combCharsM' + 'ap',
                function () {
                    return this['combCharsM' + 'ap'] = [
                        [
                            [
                                0x644,
                                0x622
                            ],
                            0xfef5,
                            null,
                            null,
                            0xfef6
                        ],
                        [
                            [
                                0x644,
                                0x623
                            ],
                            0xfef7,
                            null,
                            null,
                            0xfef8
                        ],
                        [
                            [
                                0x644,
                                0x625
                            ],
                            0xfef9,
                            null,
                            null,
                            0xfefa
                        ],
                        [
                            [
                                0x644,
                                0x627
                            ],
                            0xfefb,
                            null,
                            null,
                            0xfefc
                        ]
                    ];
                },
                'transChars',
                function () {
                    return this['transChars'] = [
                        0x610,
                        0x612,
                        0x613,
                        0x614,
                        0x615,
                        0x64b,
                        0x64c,
                        0x64d,
                        0x64e,
                        0x64f,
                        0x650,
                        0x651,
                        0x652,
                        0x653,
                        0x654,
                        0x655,
                        0x656,
                        0x657,
                        0x658,
                        0x670,
                        0x6d6,
                        0x6d7,
                        0x6d8,
                        0x6d9,
                        0x6da,
                        0x6db,
                        0x6dc,
                        0x6df,
                        0x6e0,
                        0x6e1,
                        0x6e2,
                        0x6e3,
                        0x6e4,
                        0x6e7,
                        0x6e8,
                        0x6ea,
                        0x6eb,
                        0x6ec,
                        0x6ed
                    ];
                }
            ]), _0xdb0534;
        }(), _0xe26936 = function () {
            function _0x342cc8() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['_texture'] = null, this['_pos'] = null, this['_rectNum'] = 0x0, this['_vbSize'] = 0x0, this['vbBuffer'] = null;
            }
            _0x199b5b(_0x342cc8, 'laya.layag' + 'l.cmdNativ' + 'e.DrawText' + 'uresCmdNat' + 'ive');
            var _0x2359da = _0x342cc8['prototype'];
            return _0x2359da['recover'] = function () {
                this['_texture'] = null, this['_pos'] = null, _0x5460aa['recover']('DrawTextur' + 'esCmd', this);
            }, _0x3a2bd3(0x0, _0x2359da, 'cmdID', function () {
                return 'DrawTextur' + 'es';
            }), _0x3a2bd3(0x0, _0x2359da, 'texture', function () {
                return this['_texture'];
            }, function (_0x1715ed) {
                this['_texture'] = _0x1715ed;
                var _0x112fea = this['_texture']['bitmap']['width'], _0x2bd170 = this['_texture']['bitmap']['height'], _0x2cca53 = this['_texture']['uv'], _0x1ccd6a = this['vbBuffer']['_float32Da' + 'ta'], _0x12279a = this['vbBuffer']['_int32Data'], _0x32a656 = 0x0;
                for (var _0x1b74be = 0x0; _0x1b74be < this['_rectNum']; _0x1b74be++) {
                    var _0x11f013 = this['pos'][_0x1b74be * 0x2], _0x35d657 = this['pos'][_0x1b74be * 0x2 + 0x1];
                    _0x1ccd6a[_0x32a656++] = _0x11f013, _0x1ccd6a[_0x32a656++] = _0x35d657, _0x1ccd6a[_0x32a656++] = _0x2cca53[0x0], _0x1ccd6a[_0x32a656++] = _0x2cca53[0x1], _0x12279a[_0x32a656++] = 0xffffffff, _0x12279a[_0x32a656++] = 0xffffffff, _0x1ccd6a[_0x32a656++] = _0x11f013 + _0x112fea, _0x1ccd6a[_0x32a656++] = _0x35d657, _0x1ccd6a[_0x32a656++] = _0x2cca53[0x2], _0x1ccd6a[_0x32a656++] = _0x2cca53[0x3], _0x12279a[_0x32a656++] = 0xffffffff, _0x12279a[_0x32a656++] = 0xffffffff, _0x1ccd6a[_0x32a656++] = _0x11f013 + _0x112fea, _0x1ccd6a[_0x32a656++] = _0x35d657 + _0x2bd170, _0x1ccd6a[_0x32a656++] = _0x2cca53[0x4], _0x1ccd6a[_0x32a656++] = _0x2cca53[0x5], _0x12279a[_0x32a656++] = 0xffffffff, _0x12279a[_0x32a656++] = 0xffffffff, _0x1ccd6a[_0x32a656++] = _0x11f013, _0x1ccd6a[_0x32a656++] = _0x35d657 + _0x2bd170, _0x1ccd6a[_0x32a656++] = _0x2cca53[0x6], _0x1ccd6a[_0x32a656++] = _0x2cca53[0x7], _0x12279a[_0x32a656++] = 0xffffffff, _0x12279a[_0x32a656++] = 0xffffffff;
                }
                ;
                var _0x1d3efc = this['_paramData']['_int32Data'];
                _0x1d3efc[_0x342cc8['_PARAM_TEX' + 'LOCATION_P' + 'OS_']] = 0x84c0, _0x1d3efc[_0x342cc8['_PARAM_TEX' + 'TURE_POS_']] = this['_texture']['bitmap']['_glTexture']['id'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2359da, 'pos', function () {
                return this['_pos'];
            }, function (_0x4c89b5) {
                this['_pos'] = _0x4c89b5;
                var _0x164ca8 = this['_pos']['length'] / 0x2, _0x523762 = this['_texture']['bitmap']['width'], _0x5990cb = this['_texture']['bitmap']['height'], _0x82f378 = this['_texture']['uv'];
                (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < _0x164ca8 * 0x18 * 0x4) && (this['vbBuffer'] = new ParamData(_0x164ca8 * 0x18 * 0x4, !![]));
                this['_vbSize'] = _0x164ca8 * 0x18 * 0x4, this['_rectNum'] = _0x164ca8;
                var _0x2404f4 = this['vbBuffer']['_float32Da' + 'ta'], _0x3ef652 = this['vbBuffer']['_int32Data'], _0x312f2d = 0x0;
                for (var _0x177b64 = 0x0; _0x177b64 < _0x164ca8; _0x177b64++) {
                    var _0x1b50b3 = this['pos'][_0x177b64 * 0x2], _0x400204 = this['pos'][_0x177b64 * 0x2 + 0x1];
                    _0x2404f4[_0x312f2d++] = _0x1b50b3, _0x2404f4[_0x312f2d++] = _0x400204, _0x2404f4[_0x312f2d++] = _0x82f378[0x0], _0x2404f4[_0x312f2d++] = _0x82f378[0x1], _0x3ef652[_0x312f2d++] = 0xffffffff, _0x3ef652[_0x312f2d++] = 0xffffffff, _0x2404f4[_0x312f2d++] = _0x1b50b3 + _0x523762, _0x2404f4[_0x312f2d++] = _0x400204, _0x2404f4[_0x312f2d++] = _0x82f378[0x2], _0x2404f4[_0x312f2d++] = _0x82f378[0x3], _0x3ef652[_0x312f2d++] = 0xffffffff, _0x3ef652[_0x312f2d++] = 0xffffffff, _0x2404f4[_0x312f2d++] = _0x1b50b3 + _0x523762, _0x2404f4[_0x312f2d++] = _0x400204 + _0x5990cb, _0x2404f4[_0x312f2d++] = _0x82f378[0x4], _0x2404f4[_0x312f2d++] = _0x82f378[0x5], _0x3ef652[_0x312f2d++] = 0xffffffff, _0x3ef652[_0x312f2d++] = 0xffffffff, _0x2404f4[_0x312f2d++] = _0x1b50b3, _0x2404f4[_0x312f2d++] = _0x400204 + _0x5990cb, _0x2404f4[_0x312f2d++] = _0x82f378[0x6], _0x2404f4[_0x312f2d++] = _0x82f378[0x7], _0x3ef652[_0x312f2d++] = 0xffffffff, _0x3ef652[_0x312f2d++] = 0xffffffff;
                }
                ;
                var _0x229026 = this['_paramData']['_float32Da' + 'ta'], _0x33dbda = this['_paramData']['_int32Data'];
                _0x33dbda[_0x342cc8['_PARAM_REC' + 'T_NUM_POS_']] = this['_rectNum'], _0x33dbda[_0x342cc8['_PARAM_VB_' + 'POS_']] = this['vbBuffer']['getPtrID'](), _0x33dbda[_0x342cc8['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x342cc8['create'] = function (_0x54f38c, _0x489e8c) {
                var _0x10d85f = _0x5460aa['getItemByC' + 'lass']('DrawTextur' + 'esCmd', _0x342cc8);
                _0x10d85f['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_'] && (_0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x7c, 0x20, !![]), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['uniformTex' + 'tureByPara' + 'mData'](_0x342cc8['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_'], _0x342cc8['_PARAM_TEX' + 'LOCATION_P' + 'OS_'] * 0x4, _0x342cc8['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['setRectMes' + 'hExByParam' + 'Data'](_0x342cc8['_PARAM_REC' + 'T_NUM_POS_'] * 0x4, _0x342cc8['_PARAM_VB_' + 'POS_'] * 0x4, _0x342cc8['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x342cc8['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']));
                !_0x10d85f['_paramData'] && (_0x10d85f['_paramData'] = new ParamData(0x7 * 0x4, !![]));
                {
                    _0x10d85f['_texture'] = _0x54f38c, _0x10d85f['_pos'] = _0x489e8c;
                    var _0x18ab8a = _0x54f38c['bitmap']['width'], _0x4ce739 = _0x54f38c['bitmap']['height'], _0x1f5aab = _0x54f38c['uv'], _0x1d755a = _0x489e8c['length'] / 0x2;
                    (!_0x10d85f['vbBuffer'] || _0x10d85f['vbBuffer']['getByteLen' + 'gth']() < _0x1d755a * 0x18 * 0x4) && (_0x10d85f['vbBuffer'] = new ParamData(_0x1d755a * 0x18 * 0x4, !![]));
                    _0x10d85f['_vbSize'] = _0x1d755a * 0x18 * 0x4, _0x10d85f['_rectNum'] = _0x1d755a;
                    var _0x4c7400 = _0x10d85f['vbBuffer']['_float32Da' + 'ta'], _0x475121 = _0x10d85f['vbBuffer']['_int32Data'], _0x5957c0 = 0x0;
                    for (var _0x11a2da = 0x0; _0x11a2da < _0x1d755a; _0x11a2da++) {
                        var _0x4f73ed = _0x489e8c[_0x11a2da * 0x2], _0x40cf54 = _0x489e8c[_0x11a2da * 0x2 + 0x1];
                        _0x4c7400[_0x5957c0++] = _0x4f73ed, _0x4c7400[_0x5957c0++] = _0x40cf54, _0x4c7400[_0x5957c0++] = _0x1f5aab[0x0], _0x4c7400[_0x5957c0++] = _0x1f5aab[0x1], _0x475121[_0x5957c0++] = 0xffffffff, _0x475121[_0x5957c0++] = 0xffffffff, _0x4c7400[_0x5957c0++] = _0x4f73ed + _0x18ab8a, _0x4c7400[_0x5957c0++] = _0x40cf54, _0x4c7400[_0x5957c0++] = _0x1f5aab[0x2], _0x4c7400[_0x5957c0++] = _0x1f5aab[0x3], _0x475121[_0x5957c0++] = 0xffffffff, _0x475121[_0x5957c0++] = 0xffffffff, _0x4c7400[_0x5957c0++] = _0x4f73ed + _0x18ab8a, _0x4c7400[_0x5957c0++] = _0x40cf54 + _0x4ce739, _0x4c7400[_0x5957c0++] = _0x1f5aab[0x4], _0x4c7400[_0x5957c0++] = _0x1f5aab[0x5], _0x475121[_0x5957c0++] = 0xffffffff, _0x475121[_0x5957c0++] = 0xffffffff, _0x4c7400[_0x5957c0++] = _0x4f73ed, _0x4c7400[_0x5957c0++] = _0x40cf54 + _0x4ce739, _0x4c7400[_0x5957c0++] = _0x1f5aab[0x6], _0x4c7400[_0x5957c0++] = _0x1f5aab[0x7], _0x475121[_0x5957c0++] = 0xffffffff, _0x475121[_0x5957c0++] = 0xffffffff;
                    }
                    ;
                    var _0x52e401 = _0x10d85f['_paramData']['_float32Da' + 'ta'], _0x1eb8ae = _0x10d85f['_paramData']['_int32Data'];
                    _0x1eb8ae[_0x342cc8['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_']] = 0x3, _0x1eb8ae[_0x342cc8['_PARAM_TEX' + 'LOCATION_P' + 'OS_']] = 0x84c0, _0x1eb8ae[_0x342cc8['_PARAM_TEX' + 'TURE_POS_']] = _0x54f38c['bitmap']['_glTexture']['id'], _0x1eb8ae[_0x342cc8['_PARAM_REC' + 'T_NUM_POS_']] = _0x10d85f['_rectNum'], _0x1eb8ae[_0x342cc8['_PARAM_VB_' + 'POS_']] = _0x10d85f['vbBuffer']['getPtrID'](), _0x1eb8ae[_0x342cc8['_PARAM_VB_' + 'SIZE_POS_']] = _0x10d85f['_vbSize'], _0x1eb8ae[_0x342cc8['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x10d85f['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x10d85f['_paramData']);
                }
                return _0x10d85f['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_']['getPtrID'](), _0x10d85f['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x10d85f['_graphicsC' + 'mdEncoder']), _0x10d85f;
            }, _0x342cc8['ID'] = 'DrawTextur' + 'es', _0x342cc8['_DRAW_TEXT' + 'URES_CMD_E' + 'NCODER_'] = null, _0x342cc8['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_'] = 0x0, _0x342cc8['_PARAM_TEX' + 'LOCATION_P' + 'OS_'] = 0x1, _0x342cc8['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0x342cc8['_PARAM_REC' + 'T_NUM_POS_'] = 0x3, _0x342cc8['_PARAM_VB_' + 'POS_'] = 0x4, _0x342cc8['_PARAM_VB_' + 'SIZE_POS_'] = 0x5, _0x342cc8['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0x6, _0x342cc8;
        }(), _0x1013b1 = function () {
            function _0x2404c2() {
                this['_saveuse'] = 0x0;
                ;
            }
            _0x199b5b(_0x2404c2, 'laya.webgl' + '.canvas.sa' + 've.SaveMar' + 'k');
            var _0x29a3ef = _0x2404c2['prototype'];
            return _0x4a6519['imps'](_0x29a3ef, { 'laya.webgl.canvas.save.ISaveData': !![] }), _0x29a3ef['isSaveMark'] = function () {
                return !![];
            }, _0x29a3ef['restore'] = function (_0x4d6b56) {
                _0x4d6b56['_saveMark'] = this['_preSaveMa' + 'rk'], _0x2404c2['POOL'][_0x2404c2['POOL']['_length']++] = this;
            }, _0x2404c2['Create'] = function (_0x5230f2) {
                var _0x99495 = _0x2404c2['POOL'], _0x3f8534 = _0x99495['_length'] > 0x0 ? _0x99495[--_0x99495['_length']] : new _0x2404c2();
                return _0x3f8534['_saveuse'] = 0x0, _0x3f8534['_preSaveMa' + 'rk'] = _0x5230f2['_saveMark'], _0x5230f2['_saveMark'] = _0x3f8534, _0x3f8534;
            }, _0x2404c2['POOL'] = _0x2f38dd['_createArr' + 'ay'](), _0x2404c2;
        }(), _0x5185bb = function () {
            function _0x2ad5cc() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_texture'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_vertices'] = null, this['_uvs'] = null, this['_indices'] = null, this['_matrix'] = null, this['_alpha'] = NaN, this['_color'] = null, this['_blendMode'] = null, this['vbBuffer'] = null, this['_vbSize'] = NaN, this['ibBuffer'] = null, this['_ibSize'] = NaN, this['_verticesN' + 'um'] = NaN, this['_ibNum'] = NaN, this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x0;
            }
            _0x199b5b(_0x2ad5cc, 'laya.layag' + 'l.cmdNativ' + 'e.DrawTria' + 'nglesCmdNa' + 'tive');
            var _0x4117c0 = _0x2ad5cc['prototype'];
            return _0x4117c0['recover'] = function () {
                this['_texture'] = null, this['_vertices'] = null, this['_uvs'] = null, this['_indices'] = null, this['_matrix'] = null, _0x5460aa['recover']('DrawTriang' + 'lesCmd', this);
            }, _0x4117c0['_setBlendM' + 'ode'] = function (_0x4c291a) {
                switch (_0x4c291a) {
                case 'normal':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x303;
                    break;
                case 'add':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x304;
                    break;
                case 'multiply':
                    this['_blend_src'] = 0x306, this['_blend_des' + 't'] = 0x303;
                    break;
                case 'screen':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x1;
                    break;
                case 'light':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x1;
                    break;
                case 'overlay':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x301;
                    break;
                case 'destinatio' + 'n-out':
                    this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x0;
                    break;
                case 'mask':
                    this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x302;
                    break;
                default:
                    alert('_setBlendM' + 'ode\x20Unknow' + 'n\x20type');
                    break;
                }
            }, _0x4117c0['_mixRGBand' + 'Alpha'] = function (_0x4050d3, _0x191a39) {
                var _0x3c3fa9 = (_0x4050d3 & 0xff000000) >>> 0x18;
                return _0x3c3fa9 != 0x0 ? _0x3c3fa9 *= _0x191a39 : _0x3c3fa9 = _0x191a39 * 0xff, _0x4050d3 & 0xffffff | _0x3c3fa9 << 0x18;
            }, _0x3a2bd3(0x0, _0x4117c0, 'vertices', function () {
                return this['_vertices'];
            }, function (_0x23fd06) {
                this['_vertices'] = _0x23fd06;
                var _0x316e8d = this['vbBuffer']['_float32Da' + 'ta'], _0x1df30f = 0x0;
                for (var _0x46be9d = 0x0; _0x46be9d < this['_verticesN' + 'um']; _0x46be9d++) {
                    _0x316e8d[_0x1df30f++] = this['_x'] + _0x23fd06[_0x46be9d * 0x2], _0x316e8d[_0x1df30f++] = this['_y'] + _0x23fd06[_0x46be9d * 0x2 + 0x1], _0x1df30f++, _0x1df30f++, _0x1df30f++, _0x1df30f++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'cmdID', function () {
                return 'DrawTriang' + 'les';
            }), _0x3a2bd3(0x0, _0x4117c0, 'matrix', function () {
                return this['_matrix'];
            }, function (_0x42bfc4) {
                this['_matrix'] = _0x42bfc4;
                var _0x4c442d = this['_paramData']['_float32Da' + 'ta'];
                _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_']] = _0x42bfc4['a'], _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x1] = _0x42bfc4['b'], _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x2] = _0x42bfc4['c'], _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x3] = _0x42bfc4['d'], _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x4] = _0x42bfc4['tx'], _0x4c442d[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x5] = _0x42bfc4['ty'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'texture', function () {
                return this['_texture'];
            }, function (_0x21112c) {
                if (!_0x21112c || !_0x21112c['url'])
                    return;
                this['_texture'] = _0x21112c;
                var _0x584462 = this['_paramData']['_int32Data'];
                _0x584462[_0x2ad5cc['_PARAM_TEX' + 'TURE_POS_']] = this['_texture']['bitmap']['_glTexture']['id'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'y', function () {
                return this['_y'];
            }, function (_0xc16508) {
                this['_y'] = _0xc16508;
                var _0x370566 = this['vbBuffer']['_float32Da' + 'ta'], _0x52f118 = 0x0;
                for (var _0x1c038f = 0x0; _0x1c038f < this['_verticesN' + 'um']; _0x1c038f++) {
                    _0x52f118++, _0x370566[_0x52f118++] = _0xc16508 + this['vertices'][_0x1c038f * 0x2 + 0x1], _0x52f118++, _0x52f118++, _0x52f118++, _0x52f118++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'x', function () {
                return this['_x'];
            }, function (_0x13dc0a) {
                this['_x'] = _0x13dc0a;
                var _0x318d95 = this['vbBuffer']['_float32Da' + 'ta'], _0x1796ec = 0x0;
                for (var _0x40a21d = 0x0; _0x40a21d < this['_verticesN' + 'um']; _0x40a21d++) {
                    _0x318d95[_0x1796ec++] = _0x13dc0a + this['vertices'][_0x40a21d * 0x2], _0x1796ec++, _0x1796ec++, _0x1796ec++, _0x1796ec++, _0x1796ec++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'alpha', function () {
                return this['_alpha'];
            }, function (_0x20a7e9) {
                this['_alpha'] = _0x20a7e9;
            }), _0x3a2bd3(0x0, _0x4117c0, 'uvs', function () {
                return this['_uvs'];
            }, function (_0x5624fc) {
                this['_uvs'] = _0x5624fc;
                var _0x167d67 = this['vbBuffer']['_float32Da' + 'ta'], _0x448889 = 0x0;
                for (var _0x244c99 = 0x0; _0x244c99 < this['_verticesN' + 'um']; _0x244c99++) {
                    _0x448889++, _0x448889++, _0x167d67[_0x448889++] = _0x5624fc[_0x244c99 * 0x2], _0x167d67[_0x448889++] = _0x5624fc[_0x244c99 * 0x2 + 0x1], _0x448889++, _0x448889++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'indices', function () {
                return this['_indices'];
            }, function (_0x44042c) {
                this['_indices'] = _0x44042c;
                var _0x39f816 = this['ibBuffer']['_int16Data'], _0x29cb77 = 0x0;
                for (var _0x2d9881 = 0x0; _0x2d9881 < this['_ibNum']; _0x2d9881++) {
                    _0x39f816[_0x29cb77++] = _0x44042c[_0x2d9881];
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']);
            }), _0x3a2bd3(0x0, _0x4117c0, 'color', function () {
                return this['_color'];
            }, function (_0x19948f) {
                this['_color'] = _0x19948f;
            }), _0x3a2bd3(0x0, _0x4117c0, 'blendMode', function () {
                return this['_blendMode'];
            }, function (_0x3dd6fe) {
                this['_blendMode'] = _0x3dd6fe;
            }), _0x2ad5cc['create'] = function (_0x24c1ba, _0x29d07e, _0x56cc49, _0x81b4f0, _0x2b99e4, _0x94806e, _0x4f64d1, _0x4dc973, _0x2772b5, _0x462d1d) {
                var _0x34fe9f = _0x5460aa['getItemByC' + 'lass']('DrawTriang' + 'lesCmd', _0x2ad5cc);
                _0x34fe9f['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_'] && (_0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['save'](), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['blendFuncB' + 'yParamData'](_0x2ad5cc['_PARAM_BLE' + 'ND_SRC_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['setGlobalV' + 'alueByPara' + 'mData'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x7, _0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['uniformTex' + 'tureByPara' + 'mData'](_0x2ad5cc['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_'] * 0x4, _0x2ad5cc['_PARAM_TEX' + 'LOCATION_P' + 'OS_'] * 0x4, _0x2ad5cc['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['setMeshExB' + 'yParamData'](_0x2ad5cc['_PARAM_VB_' + 'POS_'] * 0x4, _0x2ad5cc['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'POS_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x2ad5cc['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['restore'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']));
                !_0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_'] && (_0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['save'](), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['blendFuncB' + 'yParamData'](_0x2ad5cc['_PARAM_BLE' + 'ND_SRC_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['addShaderM' + 'acro'](_0xe4a59a['SHADER_MAC' + 'RO_COLOR_F' + 'ILTER']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['setGlobalV' + 'alueByPara' + 'mData'](_0xe4a59a['GLOBALVALU' + 'E_COLORFIL' + 'TER_COLOR'], 0x8, _0x2ad5cc['_PARAM_FIL' + 'TER_COLOR_' + 'POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['setGlobalV' + 'alueByPara' + 'mData'](_0xe4a59a['GLOBALVALU' + 'E_COLORFIL' + 'TER_ALPHA'], 0x8, _0x2ad5cc['_PARAM_FIL' + 'TER_ALPHA_' + 'POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['setGlobalV' + 'alueByPara' + 'mData'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x7, _0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['uniformTex' + 'tureByPara' + 'mData'](_0x2ad5cc['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_'] * 0x4, _0x2ad5cc['_PARAM_TEX' + 'LOCATION_P' + 'OS_'] * 0x4, _0x2ad5cc['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['setMeshExB' + 'yParamData'](_0x2ad5cc['_PARAM_VB_' + 'POS_'] * 0x4, _0x2ad5cc['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'POS_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x2ad5cc['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x2ad5cc['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['restore'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']));
                !_0x34fe9f['_paramData'] && (_0x34fe9f['_paramData'] = new ParamData(0x26 * 0x4, !![]));
                {
                    _0x34fe9f['_texture'] = _0x24c1ba, _0x34fe9f['_x'] = _0x29d07e, _0x34fe9f['_y'] = _0x56cc49, _0x34fe9f['_vertices'] = _0x81b4f0, _0x34fe9f['_uvs'] = _0x2b99e4, _0x34fe9f['_indices'] = _0x94806e;
                    _0x4f64d1 ? _0x34fe9f['_matrix'] = _0x4f64d1 : _0x34fe9f['_matrix'] = new _0x4fb671();
                    _0x34fe9f['_alpha'] = _0x4dc973, _0x34fe9f['_color'] = _0x2772b5, _0x34fe9f['_blendMode'] = _0x462d1d;
                    var _0x3d7686 = new _0x39bea5(), _0x4a95cc = _0x4b1f30['create'](_0x2772b5);
                    _0x3d7686['color'](_0x4a95cc['arrColor'][0x0], _0x4a95cc['arrColor'][0x1], _0x4a95cc['arrColor'][0x2], _0x4a95cc['arrColor'][0x3]), _0x34fe9f['_verticesN' + 'um'] = _0x34fe9f['_vertices']['length'] / 0x2;
                    var _0x26bdd9 = _0x34fe9f['_verticesN' + 'um'];
                    (!_0x34fe9f['vbBuffer'] || _0x34fe9f['vbBuffer']['getByteLen' + 'gth']() < _0x26bdd9 * 0x18 * 0x3) && (_0x34fe9f['vbBuffer'] = new ParamData(_0x26bdd9 * 0x18 * 0x3, !![]));
                    _0x34fe9f['_vbSize'] = _0x26bdd9 * 0x18 * 0x3;
                    var _0x5b8584 = _0x34fe9f['vbBuffer']['_float32Da' + 'ta'], _0x196e11 = _0x34fe9f['vbBuffer']['_int32Data'], _0x41d269 = 0xffffffff;
                    _0x4dc973 && (_0x41d269 = _0x34fe9f['_mixRGBand' + 'Alpha'](_0x41d269, _0x4dc973));
                    ;
                    var _0x27631a = 0x0;
                    for (var _0x2970fe = 0x0; _0x2970fe < _0x34fe9f['_verticesN' + 'um']; _0x2970fe++) {
                        _0x5b8584[_0x27631a++] = _0x29d07e / _0x34fe9f['_matrix']['a'] + _0x81b4f0[_0x2970fe * 0x2], _0x5b8584[_0x27631a++] = _0x56cc49 / _0x34fe9f['_matrix']['d'] + _0x81b4f0[_0x2970fe * 0x2 + 0x1], _0x5b8584[_0x27631a++] = _0x2b99e4[_0x2970fe * 0x2], _0x5b8584[_0x27631a++] = _0x2b99e4[_0x2970fe * 0x2 + 0x1], _0x196e11[_0x27631a++] = _0x41d269, _0x196e11[_0x27631a++] = 0xffffffff;
                    }
                    _0x34fe9f['_ibNum'] = _0x94806e['length'];
                    var _0x12093a = _0x34fe9f['_ibNum'];
                    (!_0x34fe9f['ibBuffer'] || _0x34fe9f['ibBuffer']['getByteLen' + 'gth']() < _0x12093a * 0x2) && (_0x34fe9f['ibBuffer'] = new ParamData(_0x12093a * 0x2, !![], !![]));
                    _0x34fe9f['_ibSize'] = _0x12093a * 0x2;
                    var _0x4e02f7 = _0x34fe9f['ibBuffer']['_int16Data'], _0x309b4a = 0x0;
                    for (var _0x4d5532 = 0x0; _0x4d5532 < _0x34fe9f['_ibNum']; _0x4d5532++) {
                        _0x4e02f7[_0x309b4a++] = _0x94806e[_0x4d5532];
                    }
                }
                ;
                var _0x2fa207 = _0x34fe9f['_paramData']['_float32Da' + 'ta'], _0xe8e334 = _0x34fe9f['_paramData']['_int32Data'];
                _0xe8e334[_0x2ad5cc['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_']] = 0x3, _0xe8e334[_0x2ad5cc['_PARAM_TEX' + 'LOCATION_P' + 'OS_']] = 0x84c0, _0xe8e334[_0x2ad5cc['_PARAM_TEX' + 'TURE_POS_']] = _0x24c1ba['bitmap']['_glTexture']['id'], _0xe8e334[_0x2ad5cc['_PARAM_VB_' + 'POS_']] = _0x34fe9f['vbBuffer']['getPtrID'](), _0xe8e334[_0x2ad5cc['_PARAM_VB_' + 'SIZE_POS_']] = _0x34fe9f['_vbSize'], _0xe8e334[_0x2ad5cc['_PARAM_IB_' + 'POS_']] = _0x34fe9f['ibBuffer']['getPtrID'](), _0xe8e334[_0x2ad5cc['_PARAM_IB_' + 'SIZE_POS_']] = _0x34fe9f['_ibSize'], _0xe8e334[_0x2ad5cc['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0xe8e334[_0x2ad5cc['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0xe8e334[_0x2ad5cc['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_']] = _0x34fe9f['_matrix']['a'], _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x1] = _0x34fe9f['_matrix']['b'], _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x2] = _0x34fe9f['_matrix']['c'], _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x3] = _0x34fe9f['_matrix']['d'], _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x4] = _0x34fe9f['_matrix']['tx'], _0x2fa207[_0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] + 0x5] = _0x34fe9f['_matrix']['ty'];
                _0x462d1d ? (_0x34fe9f['_setBlendM' + 'ode'](_0x462d1d), _0xe8e334[_0x2ad5cc['_PARAM_BLE' + 'ND_SRC_POS' + '_']] = _0x34fe9f['_blend_src'], _0xe8e334[_0x2ad5cc['_PARAM_BLE' + 'ND_DEST_PO' + 'S_']] = _0x34fe9f['_blend_des' + 't']) : (_0xe8e334[_0x2ad5cc['_PARAM_BLE' + 'ND_SRC_POS' + '_']] = -0x1, _0xe8e334[_0x2ad5cc['_PARAM_BLE' + 'ND_DEST_PO' + 'S_']] = -0x1);
                if (_0x2772b5) {
                    _0x27631a = _0x2ad5cc['_PARAM_FIL' + 'TER_COLOR_' + 'POS_'];
                    var _0x3561fb = _0x3d7686['_mat'];
                    _0x2fa207[_0x27631a++] = _0x3561fb[0x0], _0x2fa207[_0x27631a++] = _0x3561fb[0x1], _0x2fa207[_0x27631a++] = _0x3561fb[0x2], _0x2fa207[_0x27631a++] = _0x3561fb[0x3], _0x2fa207[_0x27631a++] = _0x3561fb[0x4], _0x2fa207[_0x27631a++] = _0x3561fb[0x5], _0x2fa207[_0x27631a++] = _0x3561fb[0x6], _0x2fa207[_0x27631a++] = _0x3561fb[0x7], _0x2fa207[_0x27631a++] = _0x3561fb[0x8], _0x2fa207[_0x27631a++] = _0x3561fb[0x9], _0x2fa207[_0x27631a++] = _0x3561fb[0xa], _0x2fa207[_0x27631a++] = _0x3561fb[0xb], _0x2fa207[_0x27631a++] = _0x3561fb[0xc], _0x2fa207[_0x27631a++] = _0x3561fb[0xd], _0x2fa207[_0x27631a++] = _0x3561fb[0xe], _0x2fa207[_0x27631a++] = _0x3561fb[0xf], _0x27631a = _0x2ad5cc['_PARAM_FIL' + 'TER_ALPHA_' + 'POS_'];
                    var _0x3d8920 = _0x3d7686['_alpha'];
                    _0x2fa207[_0x27631a++] = _0x3d8920[0x0] * 0xff, _0x2fa207[_0x27631a++] = _0x3d8920[0x1] * 0xff, _0x2fa207[_0x27631a++] = _0x3d8920[0x2] * 0xff, _0x2fa207[_0x27631a++] = _0x3d8920[0x3] * 0xff;
                }
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x34fe9f['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x34fe9f['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x34fe9f['_paramData']), _0x2772b5 ? _0x34fe9f['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_']['getPtrID'](), _0x34fe9f['_paramData']['getPtrID'](), -0x1) : _0x34fe9f['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_']['getPtrID'](), _0x34fe9f['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x34fe9f['_graphicsC' + 'mdEncoder']), _0x34fe9f;
            }, _0x2ad5cc['ID'] = 'DrawTriang' + 'les', _0x2ad5cc['_DRAW_TRIA' + 'NGLES_CMD_' + 'ENCODER_'] = null, _0x2ad5cc['_DRAW_TRIA' + 'NGLES_COLO' + 'RFILTER_CM' + 'D_ENCODER_'] = null, _0x2ad5cc['_PARAM_UNI' + 'FORMLOCATI' + 'ON_POS_'] = 0x0, _0x2ad5cc['_PARAM_TEX' + 'LOCATION_P' + 'OS_'] = 0x1, _0x2ad5cc['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0x2ad5cc['_PARAM_VB_' + 'POS_'] = 0x3, _0x2ad5cc['_PARAM_VB_' + 'SIZE_POS_'] = 0x4, _0x2ad5cc['_PARAM_IB_' + 'POS_'] = 0x5, _0x2ad5cc['_PARAM_IB_' + 'SIZE_POS_'] = 0x6, _0x2ad5cc['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0x7, _0x2ad5cc['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0x8, _0x2ad5cc['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0x9, _0x2ad5cc['_PARAM_BLE' + 'ND_SRC_POS' + '_'] = 0xa, _0x2ad5cc['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] = 0xb, _0x2ad5cc['_PARAM_MAT' + 'RIX_POS_'] = 0xc, _0x2ad5cc['_PARAM_FIL' + 'TER_COLOR_' + 'POS_'] = 0x12, _0x2ad5cc['_PARAM_FIL' + 'TER_ALPHA_' + 'POS_'] = 0x22, _0x2ad5cc;
        }(), _0x10c501 = function () {
            function _0x4c7c7b(_0xa7bf80, _0x330a43, _0x42eb15) {
                this['_value'] = 0x0, this['_name2int'] = _0xa7bf80, this['_int2name'] = _0x330a43, this['_int2nameM' + 'ap'] = _0x42eb15;
            }
            _0x199b5b(_0x4c7c7b, 'laya.webgl' + '.shader.Sh' + 'aderDefine' + 'sBase');
            var _0x3d717f = _0x4c7c7b['prototype'];
            return _0x3d717f['add'] = function (_0x401ec9) {
                if (typeof _0x401ec9 == 'string')
                    _0x401ec9 = this['_name2int'][_0x401ec9];
                return this['_value'] |= _0x401ec9, this['_value'];
            }, _0x3d717f['addInt'] = function (_0x25cd41) {
                return this['_value'] |= _0x25cd41, this['_value'];
            }, _0x3d717f['remove'] = function (_0x1efae9) {
                if (typeof _0x1efae9 == 'string')
                    _0x1efae9 = this['_name2int'][_0x1efae9];
                return this['_value'] &= ~_0x1efae9, this['_value'];
            }, _0x3d717f['isDefine'] = function (_0x5637ed) {
                return (this['_value'] & _0x5637ed) === _0x5637ed;
            }, _0x3d717f['getValue'] = function () {
                return this['_value'];
            }, _0x3d717f['setValue'] = function (_0x22d11e) {
                this['_value'] = _0x22d11e;
            }, _0x3d717f['toNameDic'] = function () {
                var _0x1066b6 = this['_int2nameM' + 'ap'][this['_value']];
                return _0x1066b6 ? _0x1066b6 : _0x4c7c7b['_toText'](this['_value'], this['_int2name'], this['_int2nameM' + 'ap']);
            }, _0x4c7c7b['_reg'] = function (_0x1302ea, _0x231b04, _0x7c5ba2, _0x3183db) {
                _0x7c5ba2[_0x1302ea] = _0x231b04, _0x3183db[_0x231b04] = _0x1302ea;
            }, _0x4c7c7b['_toText'] = function (_0x4165a1, _0x5466c9, _0x26f0af) {
                var _0x4d3a3a = _0x26f0af[_0x4165a1];
                if (_0x4d3a3a)
                    return _0x4d3a3a;
                var _0xfeffb = {}, _0x544703 = 0x1;
                for (var _0x30bbdc = 0x0; _0x30bbdc < 0x20; _0x30bbdc++) {
                    _0x544703 = 0x1 << _0x30bbdc;
                    if (_0x544703 > _0x4165a1)
                        break;
                    if (_0x4165a1 & _0x544703) {
                        var _0x2b2242 = _0x5466c9[_0x544703];
                        _0x2b2242 && (_0xfeffb[_0x2b2242] = '');
                    }
                }
                return _0x26f0af[_0x4165a1] = _0xfeffb, _0xfeffb;
            }, _0x4c7c7b['_toInt'] = function (_0xa06d37, _0x240c5b) {
                var _0x70d662 = _0xa06d37['split']('.'), _0x35b095 = 0x0;
                for (var _0x272123 = 0x0, _0x20f925 = _0x70d662['length']; _0x272123 < _0x20f925; _0x272123++) {
                    var _0x469b85 = _0x240c5b[_0x70d662[_0x272123]];
                    if (!_0x469b85)
                        throw new Error('Defines\x20to' + '\x20int\x20err:' + _0xa06d37 + '/' + _0x70d662[_0x272123]);
                    _0x35b095 |= _0x469b85;
                }
                return _0x35b095;
            }, _0x4c7c7b;
        }(), _0x5839f2 = function () {
            function _0x270838(_0x50ecb4) {
                this['childs'] = [], this['text'] = '', this['parent'] = null, this['name'] = null, this['noCompile'] = ![], this['includefil' + 'es'] = null, this['condition'] = null, this['conditionT' + 'ype'] = 0x0, this['useFuns'] = '', this['z'] = 0x0, this['src'] = null, this['includefil' + 'es'] = _0x50ecb4;
            }
            _0x199b5b(_0x270838, 'laya.webgl' + '.utils.Sha' + 'derNode');
            var _0x2e5146 = _0x270838['prototype'];
            return _0x2e5146['setParent'] = function (_0x170b94) {
                _0x170b94['childs']['push'](this), this['z'] = _0x170b94['z'] + 0x1, this['parent'] = _0x170b94;
            }, _0x2e5146['setConditi' + 'on'] = function (_0x3bfb5a, _0x5f4e7d) {
                _0x3bfb5a && (this['conditionT' + 'ype'] = _0x5f4e7d, _0x3bfb5a = _0x3bfb5a['replace'](/(\s*$)/g, ''), this['condition'] = function () {
                    return this[_0x3bfb5a];
                }, this['condition']['__conditio' + 'n'] = _0x3bfb5a);
            }, _0x2e5146['toscript'] = function (_0x1636e7, _0x16a0c6) {
                return this['_toscript'](_0x1636e7, _0x16a0c6, ++_0x270838['__id']);
            }, _0x2e5146['_toscript'] = function (_0x34ea0c, _0x343cee, _0x479fd3) {
                if (this['childs']['length'] < 0x1 && !this['text'])
                    return _0x343cee;
                var _0x131b91 = _0x343cee['length'];
                if (this['condition']) {
                    var _0x310548 = !!this['condition']['call'](_0x34ea0c);
                    this['conditionT' + 'ype'] === 0x2 && (_0x310548 = !_0x310548);
                    if (!_0x310548)
                        return _0x343cee;
                }
                this['text'] && _0x343cee['push'](this['text']), this['childs']['length'] > 0x0 && this['childs']['forEach'](function (_0x25bcff, _0x45e6ea, _0x2fb560) {
                    _0x25bcff['_toscript'](_0x34ea0c, _0x343cee, _0x479fd3);
                });
                if (this['includefil' + 'es']['length'] > 0x0 && this['useFuns']['length'] > 0x0) {
                    var _0x30b597;
                    for (var _0x207508 = 0x0, _0x357286 = this['includefil' + 'es']['length']; _0x207508 < _0x357286; _0x207508++) {
                        if (this['includefil' + 'es'][_0x207508]['curUseID'] == _0x479fd3)
                            continue;
                        _0x30b597 = this['includefil' + 'es'][_0x207508]['file']['getFunsScr' + 'ipt'](this['useFuns']), _0x30b597['length'] > 0x0 && (this['includefil' + 'es'][_0x207508]['curUseID'] = _0x479fd3, _0x343cee[0x0] = _0x30b597 + _0x343cee[0x0]);
                    }
                }
                return _0x343cee;
            }, _0x270838['__id'] = 0x1, _0x270838;
        }(), _0x2364b8 = function () {
            function _0x263449() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_graphicsC' + 'mdEncoder_' + 'lines'] = null, this['_paramData'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_points'] = null, this['_fillColor'] = null, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_isConvexP' + 'olygon'] = ![], this['_vid'] = 0x0, this['_vertNum'] = 0x0, this['_line_vert' + 'Num'] = 0x0, this['ibBuffer'] = null, this['vbBuffer'] = null, this['line_ibBuf' + 'fer'] = null, this['line_vbBuf' + 'fer'] = null, this['_ibSize'] = 0x0, this['_vbSize'] = 0x0, this['_line_ibSi' + 'ze'] = 0x0, this['_line_vbSi' + 'ze'] = 0x0, this['_cmdCurren' + 'tPos'] = 0x0, this['_linePoint' + 's'] = [], this['_line_vbAr' + 'ray'] = [], this['_line_ibAr' + 'ray'] = [];
            }
            _0x199b5b(_0x263449, 'laya.layag' + 'l.cmdNativ' + 'e.DrawPoly' + 'CmdNative');
            var _0xa93c7 = _0x263449['prototype'];
            return _0xa93c7['recover'] = function () {
                this['_points'] = null, this['_fillColor'] = null, this['_lineColor'] = null, this['_linePoint' + 's']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, _0x5460aa['recover']('DrawPolyCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0xa93c7, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x30987d) {
                this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']), this['_lineColor'] = _0x30987d;
                if (this['_lineColor'] && this['line_vbBuf' + 'fer']) {
                    var _0x5802f4 = _0x4b1f30['create'](this['_lineColor']), _0x5ab1ac = _0x5802f4['numColor'], _0x47b7cb = this['line_vbBuf' + 'fer']['_int32Data'], _0x1bfb60 = 0x0;
                    for (var _0x1cd4a4 = 0x0; _0x1cd4a4 < this['_line_vert' + 'Num']; _0x1cd4a4++) {
                        _0x1bfb60++, _0x1bfb60++, _0x47b7cb[_0x1bfb60++] = _0x5ab1ac;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
            }), _0x3a2bd3(0x0, _0xa93c7, 'points', function () {
                return this['_points'];
            }, function (_0x4d788c) {
                this['_points'] = _0x4d788c;
                {
                    this['_vertNum'] = _0x4d788c['length'] / 0x2;
                    var _0x458c2b = this['_vertNum'], _0x3d3699 = _0x576d8c['earcut'](_0x4d788c, null, 0x2);
                    if (_0x3d3699['length'] > 0x0) {
                        (!this['ibBuffer'] || this['ibBuffer']['getByteLen' + 'gth']() < _0x3d3699['length'] * 0x2) && (this['ibBuffer'] = new ParamData(_0x3d3699['length'] * 0x2, !![], !![]));
                        this['_ibSize'] = _0x3d3699['length'] * 0x2;
                        var _0x24ce92 = this['ibBuffer']['_int16Data'], _0x58f0bc = 0x0;
                        for (var _0x4bf355 = 0x0; _0x4bf355 < _0x3d3699['length']; _0x4bf355++) {
                            _0x24ce92[_0x58f0bc++] = _0x3d3699[_0x4bf355];
                        }
                    }
                    (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['vbBuffer'] = new ParamData(_0x458c2b * 0x3 * 0x4, !![]));
                    this['_vbSize'] = this['_vertNum'] * 0x3 * 0x4;
                    var _0x40a928 = _0x4b1f30['create'](this['_fillColor']), _0x4966ec = _0x40a928['numColor'], _0x8b57f1 = this['vbBuffer']['_float32Da' + 'ta'], _0x3669da = this['vbBuffer']['_int32Data'], _0x320b19 = 0x0;
                    for (var _0x42fedd = 0x0; _0x42fedd < this['_vertNum']; _0x42fedd++) {
                        _0x8b57f1[_0x320b19++] = this['_points'][_0x42fedd * 0x2] + this['_x'], _0x8b57f1[_0x320b19++] = this['_points'][_0x42fedd * 0x2 + 0x1] + this['_y'], _0x3669da[_0x320b19++] = _0x4966ec;
                    }
                }
                ;
                var _0x22c9fb = this['_paramData']['_int32Data'];
                _0x22c9fb[_0x263449['_PARAM_VB_' + 'POS_']] = this['vbBuffer']['getPtrID'](), _0x22c9fb[_0x263449['_PARAM_IB_' + 'POS_']] = this['ibBuffer']['getPtrID'](), _0x22c9fb[_0x263449['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x22c9fb[_0x263449['_PARAM_IB_' + 'SIZE_POS_']] = this['_ibSize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
                if (this['lineColor']) {
                    {
                        var _0x39779b = 0x0;
                        this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                        for (_0x42fedd = 0x0; _0x42fedd < _0x4d788c['length']; _0x42fedd++) {
                            this['_linePoint' + 's']['push'](_0x4d788c[_0x42fedd]);
                        }
                        this['_linePoint' + 's']['push'](_0x4d788c[0x0]), this['_linePoint' + 's']['push'](_0x4d788c[0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'], _0x39779b = this['_line_vert' + 'Num'];
                        (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x39779b - 0x2) * 0x3 * 0x2, !![], !![]));
                        this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                        var _0x1ee62f = this['line_ibBuf' + 'fer']['_int16Data'];
                        _0x58f0bc = 0x0;
                        for (_0x4bf355 = 0x0; _0x4bf355 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0x4bf355++) {
                            _0x1ee62f[_0x58f0bc++] = this['_line_ibAr' + 'ray'][_0x4bf355];
                        }
                        (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x39779b * 0x3 * 0x4, !![]));
                        this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                        var _0x2b9d8c = _0x4b1f30['create'](this['_lineColor']), _0x2e23e = _0x2b9d8c['numColor'], _0x16dd48 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x313ac3 = this['line_vbBuf' + 'fer']['_int32Data'];
                        _0x320b19 = 0x0;
                        for (_0x42fedd = 0x0; _0x42fedd < this['_line_vert' + 'Num']; _0x42fedd++) {
                            _0x16dd48[_0x320b19++] = this['_line_vbAr' + 'ray'][_0x42fedd * 0x2] + this['_x'], _0x16dd48[_0x320b19++] = this['_line_vbAr' + 'ray'][_0x42fedd * 0x2 + 0x1] + this['_y'], _0x313ac3[_0x320b19++] = _0x2e23e;
                        }
                    }
                    _0x22c9fb = this['_paramData']['_int32Data'], _0x22c9fb[_0x263449['_PARAM_LIN' + 'E_VB_POS_']] = this['line_vbBuf' + 'fer']['getPtrID'](), _0x22c9fb[_0x263449['_PARAM_LIN' + 'E_IB_POS_']] = this['line_ibBuf' + 'fer']['getPtrID'](), _0x22c9fb[_0x263449['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = this['_line_vbSi' + 'ze'], _0x22c9fb[_0x263449['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = this['_line_ibSi' + 'ze'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']);
                }
            }), _0x3a2bd3(0x0, _0xa93c7, 'cmdID', function () {
                return 'DrawPoly';
            }), _0x3a2bd3(0x0, _0xa93c7, 'fillColor', function () {
                return this['_fillColor'];
            }, function (_0xb4206d) {
                this['_fillColor'] = _0xb4206d;
                var _0x4cbc66 = _0x4b1f30['create'](this['_fillColor']), _0x200bf6 = _0x4cbc66['numColor'], _0xa91678 = this['vbBuffer']['_int32Data'], _0x2b88c2 = 0x0;
                for (var _0x1987a2 = 0x0; _0x1987a2 < this['_vertNum']; _0x1987a2++) {
                    _0x2b88c2++, _0x2b88c2++, _0xa91678[_0x2b88c2++] = _0x200bf6;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0xa93c7, 'x', function () {
                return this['_x'];
            }, function (_0x3351f7) {
                this['_x'] = _0x3351f7;
                var _0x46c2de = this['vbBuffer']['_float32Da' + 'ta'], _0x2fc837 = 0x0;
                for (var _0x5ada09 = 0x0; _0x5ada09 < this['_vertNum']; _0x5ada09++) {
                    _0x46c2de[_0x2fc837++] = this['_points'][_0x5ada09 * 0x2] + this['_x'], _0x2fc837++, _0x2fc837++;
                }
                if (this['_lineColor']) {
                    var _0x3671d1 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x2fc837 = 0x0;
                    for (_0x5ada09 = 0x0; _0x5ada09 < this['_line_vert' + 'Num']; _0x5ada09++) {
                        _0x3671d1[_0x2fc837++] = this['_line_vbAr' + 'ray'][_0x5ada09 * 0x2] + this['_x'], _0x2fc837++, _0x2fc837++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0xa93c7, 'isConvexPo' + 'lygon', function () {
                return this['_isConvexP' + 'olygon'];
            }, function (_0x2c4470) {
                this['_isConvexP' + 'olygon'] = _0x2c4470;
            }), _0x3a2bd3(0x0, _0xa93c7, 'vid', function () {
                return this['_vid'];
            }, function (_0x4a1176) {
                this['_vid'] = _0x4a1176;
            }), _0x3a2bd3(0x0, _0xa93c7, 'y', function () {
                return this['_y'];
            }, function (_0x5d0be5) {
                this['_y'] = _0x5d0be5;
                var _0x59c7e7 = this['vbBuffer']['_float32Da' + 'ta'], _0x692343 = 0x0;
                for (var _0x5492c4 = 0x0; _0x5492c4 < this['_vertNum']; _0x5492c4++) {
                    _0x692343++, _0x59c7e7[_0x692343++] = this['_points'][_0x5492c4 * 0x2 + 0x1] + this['_y'], _0x692343++;
                }
                if (this['_lineColor']) {
                    var _0x2805d9 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x692343 = 0x0;
                    for (_0x5492c4 = 0x0; _0x5492c4 < this['_line_vert' + 'Num']; _0x5492c4++) {
                        _0x692343++, _0x2805d9[_0x692343++] = this['_line_vbAr' + 'ray'][_0x5492c4 * 0x2 + 0x1] + this['_y'], _0x692343++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0xa93c7, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x49e47f) {
                this['lineColor'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineWidth'] = _0x49e47f, this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                for (var _0x17ce0a = 0x0; _0x17ce0a < this['_points']['length']; _0x17ce0a++) {
                    this['_linePoint' + 's']['push'](this['_points'][_0x17ce0a]);
                }
                this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]);
                var _0x36ef83 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x1d9c7e = 0x0;
                for (_0x17ce0a = 0x0; _0x17ce0a < this['_line_vert' + 'Num']; _0x17ce0a++) {
                    _0x36ef83[_0x1d9c7e++] = this['_line_vbAr' + 'ray'][_0x17ce0a * 0x2] + this['_x'], _0x36ef83[_0x1d9c7e++] = this['_line_vbAr' + 'ray'][_0x17ce0a * 0x2 + 0x1] + this['_y'], _0x1d9c7e++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
            }), _0x263449['create'] = function (_0xc4cfb9, _0x54504a, _0xd4f1de, _0x444225, _0x4ce25d, _0x8bb2ad, _0x51b755, _0x2abbde) {
                var _0x16f9b4 = _0x5460aa['getItemByC' + 'lass']('DrawPolyCm' + 'd', _0x263449);
                _0x16f9b4['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_'] && (_0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xa8, 0x20, !![]), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['setMeshExB' + 'yParamData'](_0x263449['_PARAM_VB_' + 'POS_'] * 0x4, _0x263449['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x263449['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x263449['_PARAM_IB_' + 'POS_'] * 0x4, _0x263449['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x263449['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x263449['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']));
                !_0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_'] && (_0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xf4, 0x20, !![]), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['setMeshExB' + 'yParamData'](_0x263449['_PARAM_VB_' + 'POS_'] * 0x4, _0x263449['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x263449['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x263449['_PARAM_IB_' + 'POS_'] * 0x4, _0x263449['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x263449['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x263449['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['setMeshExB' + 'yParamData'](_0x263449['_PARAM_LIN' + 'E_VB_POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_IB_POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] * 0x4, _0x263449['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']));
                !_0x16f9b4['_paramData'] && (_0x16f9b4['_paramData'] = new ParamData(0x11 * 0x4, !![]));
                {
                    _0x16f9b4['_x'] = _0xc4cfb9, _0x16f9b4['_y'] = _0x54504a, _0x16f9b4['_points'] = _0xd4f1de, _0x16f9b4['_fillColor'] = _0x444225, _0x16f9b4['_lineColor'] = _0x4ce25d, _0x16f9b4['_lineWidth'] = _0x8bb2ad, _0x16f9b4['_isConvexP' + 'olygon'] = _0x51b755, _0x16f9b4['_vertNum'] = _0xd4f1de['length'] / 0x2;
                    var _0x1f0a5a = _0x16f9b4['_vertNum'], _0x6cf4f6 = _0x576d8c['earcut'](_0xd4f1de, null, 0x2);
                    if (_0x6cf4f6['length'] > 0x0) {
                        (!_0x16f9b4['ibBuffer'] || _0x16f9b4['ibBuffer']['getByteLen' + 'gth']() < _0x6cf4f6['length'] * 0x2) && (_0x16f9b4['ibBuffer'] = new ParamData(_0x6cf4f6['length'] * 0x2, !![], !![]));
                        _0x16f9b4['_ibSize'] = _0x6cf4f6['length'] * 0x2;
                        var _0x574f23 = _0x16f9b4['ibBuffer']['_int16Data'], _0xface51 = 0x0;
                        for (var _0x3c436e = 0x0; _0x3c436e < _0x6cf4f6['length']; _0x3c436e++) {
                            _0x574f23[_0xface51++] = _0x6cf4f6[_0x3c436e];
                        }
                    }
                    ;
                    var _0x351fab = _0x4b1f30['create'](_0x444225), _0x2249b6 = _0x351fab['numColor'];
                    (!_0x16f9b4['vbBuffer'] || _0x16f9b4['vbBuffer']['getByteLen' + 'gth']() < _0x16f9b4['_vertNum'] * 0x3 * 0x4) && (_0x16f9b4['vbBuffer'] = new ParamData(_0x1f0a5a * 0x3 * 0x4, !![]));
                    _0x16f9b4['_vbSize'] = _0x16f9b4['_vertNum'] * 0x3 * 0x4;
                    var _0x99d3cd = _0x16f9b4['vbBuffer']['_float32Da' + 'ta'], _0x206dc6 = _0x16f9b4['vbBuffer']['_int32Data'], _0x327f75 = 0x0;
                    for (var _0x1c16a4 = 0x0; _0x1c16a4 < _0x16f9b4['_vertNum']; _0x1c16a4++) {
                        _0x99d3cd[_0x327f75++] = _0xd4f1de[_0x1c16a4 * 0x2] + _0xc4cfb9, _0x99d3cd[_0x327f75++] = _0xd4f1de[_0x1c16a4 * 0x2 + 0x1] + _0x54504a, _0x206dc6[_0x327f75++] = _0x2249b6;
                    }
                    for (_0x1c16a4 = 0x0; _0x1c16a4 < _0xd4f1de['length']; _0x1c16a4++) {
                        _0x16f9b4['_linePoint' + 's']['push'](_0xd4f1de[_0x1c16a4]);
                    }
                    _0x16f9b4['_linePoint' + 's']['push'](_0xd4f1de[0x0]), _0x16f9b4['_linePoint' + 's']['push'](_0xd4f1de[0x1]);
                    if (_0x4ce25d) {
                        _0x2fe41e['createLine' + '2'](_0x16f9b4['_linePoint' + 's'], _0x16f9b4['_line_ibAr' + 'ray'], _0x8bb2ad, 0x0, _0x16f9b4['_line_vbAr' + 'ray'], ![]), _0x16f9b4['_line_vert' + 'Num'] = _0x16f9b4['_linePoint' + 's']['length'];
                        var _0x38201f = _0x16f9b4['_line_vert' + 'Num'];
                        (!_0x16f9b4['line_ibBuf' + 'fer'] || _0x16f9b4['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (_0x16f9b4['line_ibBuf' + 'fer'] = new ParamData((_0x38201f - 0x2) * 0x3 * 0x2, !![], !![]));
                        _0x16f9b4['_line_ibSi' + 'ze'] = (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                        var _0x48c9d1 = _0x16f9b4['line_ibBuf' + 'fer']['_int16Data'];
                        _0xface51 = 0x0;
                        for (_0x3c436e = 0x0; _0x3c436e < (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3; _0x3c436e++) {
                            _0x48c9d1[_0xface51++] = _0x16f9b4['_line_ibAr' + 'ray'][_0x3c436e];
                        }
                        (!_0x16f9b4['line_vbBuf' + 'fer'] || _0x16f9b4['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < _0x16f9b4['_line_vert' + 'Num'] * 0x3 * 0x4) && (_0x16f9b4['line_vbBuf' + 'fer'] = new ParamData(_0x38201f * 0x3 * 0x4, !![]));
                        _0x16f9b4['_line_vbSi' + 'ze'] = _0x16f9b4['_line_vert' + 'Num'] * 0x3 * 0x4;
                        var _0x48989f = _0x4b1f30['create'](_0x4ce25d), _0x57d641 = _0x48989f['numColor'], _0x155947 = _0x16f9b4['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x240bc1 = _0x16f9b4['line_vbBuf' + 'fer']['_int32Data'];
                        _0x327f75 = 0x0;
                        for (_0x1c16a4 = 0x0; _0x1c16a4 < _0x16f9b4['_line_vert' + 'Num']; _0x1c16a4++) {
                            _0x155947[_0x327f75++] = _0x16f9b4['_line_vbAr' + 'ray'][_0x1c16a4 * 0x2] + _0xc4cfb9, _0x155947[_0x327f75++] = _0x16f9b4['_line_vbAr' + 'ray'][_0x1c16a4 * 0x2 + 0x1] + _0x54504a, _0x240bc1[_0x327f75++] = _0x57d641;
                        }
                    } else {
                        _0x16f9b4['_lineWidth'] = 0x1;
                        var _0xd6af06 = '#ffffff';
                        _0x2fe41e['createLine' + '2'](_0x16f9b4['_linePoint' + 's'], _0x16f9b4['_line_ibAr' + 'ray'], _0x16f9b4['_lineWidth'], 0x0, _0x16f9b4['_line_vbAr' + 'ray'], ![]), _0x16f9b4['_line_vert' + 'Num'] = _0x16f9b4['_linePoint' + 's']['length'], _0x38201f = _0x16f9b4['_line_vert' + 'Num'];
                        (!_0x16f9b4['line_ibBuf' + 'fer'] || _0x16f9b4['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (_0x16f9b4['line_ibBuf' + 'fer'] = new ParamData((_0x38201f - 0x2) * 0x3 * 0x2, !![], !![]));
                        _0x16f9b4['_line_ibSi' + 'ze'] = (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2, _0x48c9d1 = _0x16f9b4['line_ibBuf' + 'fer']['_int16Data'], _0xface51 = 0x0;
                        for (_0x3c436e = 0x0; _0x3c436e < (_0x16f9b4['_line_vert' + 'Num'] - 0x2) * 0x3; _0x3c436e++) {
                            _0x48c9d1[_0xface51++] = _0x16f9b4['_line_ibAr' + 'ray'][_0x3c436e];
                        }
                        (!_0x16f9b4['line_vbBuf' + 'fer'] || _0x16f9b4['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < _0x16f9b4['_line_vert' + 'Num'] * 0x3 * 0x4) && (_0x16f9b4['line_vbBuf' + 'fer'] = new ParamData(_0x38201f * 0x3 * 0x4, !![]));
                        _0x16f9b4['_line_vbSi' + 'ze'] = _0x16f9b4['_line_vert' + 'Num'] * 0x3 * 0x4, _0x48989f = _0x4b1f30['create'](_0xd6af06), _0x57d641 = _0x48989f['numColor'], _0x155947 = _0x16f9b4['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x240bc1 = _0x16f9b4['line_vbBuf' + 'fer']['_int32Data'], _0x327f75 = 0x0;
                        for (_0x1c16a4 = 0x0; _0x1c16a4 < _0x16f9b4['_line_vert' + 'Num']; _0x1c16a4++) {
                            _0x155947[_0x327f75++] = _0x16f9b4['_line_vbAr' + 'ray'][_0x1c16a4 * 0x2] + _0xc4cfb9, _0x155947[_0x327f75++] = _0x16f9b4['_line_vbAr' + 'ray'][_0x1c16a4 * 0x2 + 0x1] + _0x54504a, _0x240bc1[_0x327f75++] = _0x57d641;
                        }
                    }
                }
                ;
                var _0x30abd5 = _0x16f9b4['_paramData']['_float32Da' + 'ta'], _0x53c203 = _0x16f9b4['_paramData']['_int32Data'];
                _0x53c203[0x0] = 0x1, _0x53c203[0x1] = 0x8 * 0x4;
                if (_0x16f9b4['ibBuffer'] == null)
                    return null;
                return _0x53c203[_0x263449['_PARAM_VB_' + 'POS_']] = _0x16f9b4['vbBuffer']['getPtrID'](), _0x53c203[_0x263449['_PARAM_IB_' + 'POS_']] = _0x16f9b4['ibBuffer']['getPtrID'](), _0x53c203[_0x263449['_PARAM_VB_' + 'SIZE_POS_']] = _0x16f9b4['_vbSize'], _0x53c203[_0x263449['_PARAM_IB_' + 'SIZE_POS_']] = _0x16f9b4['_ibSize'], _0x53c203[_0x263449['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x53c203[_0x263449['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x53c203[_0x263449['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x30abd5[_0x263449['_PARAM_ISC' + 'ONVEXT_POS' + '_']] = _0x51b755, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['ibBuffer']), _0x53c203[_0x263449['_PARAM_LIN' + 'E_VB_POS_']] = _0x16f9b4['line_vbBuf' + 'fer']['getPtrID'](), _0x53c203[_0x263449['_PARAM_LIN' + 'E_IB_POS_']] = _0x16f9b4['line_ibBuf' + 'fer']['getPtrID'](), _0x53c203[_0x263449['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = _0x16f9b4['_line_vbSi' + 'ze'], _0x53c203[_0x263449['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = _0x16f9b4['_line_ibSi' + 'ze'], _0x53c203[_0x263449['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_']] = 0x0, _0x53c203[_0x263449['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_']] = 0x0, _0x53c203[_0x263449['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['_paramData']), _0x4ce25d ? _0x16f9b4['_cmdCurren' + 'tPos'] = _0x16f9b4['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_']['getPtrID'](), _0x16f9b4['_paramData']['getPtrID'](), -0x1) : _0x16f9b4['_cmdCurren' + 'tPos'] = _0x16f9b4['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_']['getPtrID'](), _0x16f9b4['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16f9b4['_graphicsC' + 'mdEncoder']), _0x16f9b4;
            }, _0x263449['ID'] = 'DrawPoly', _0x263449['_DRAW_POLY' + '_CMD_ENCOD' + 'ER_'] = null, _0x263449['_DRAW_POLY' + '_LINES_CMD' + '_ENCODER_'] = null, _0x263449['_PARAM_VB_' + 'POS_'] = 0x2, _0x263449['_PARAM_IB_' + 'POS_'] = 0x3, _0x263449['_PARAM_VB_' + 'SIZE_POS_'] = 0x4, _0x263449['_PARAM_IB_' + 'SIZE_POS_'] = 0x5, _0x263449['_PARAM_LIN' + 'E_VB_POS_'] = 0x6, _0x263449['_PARAM_LIN' + 'E_IB_POS_'] = 0x7, _0x263449['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] = 0x8, _0x263449['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] = 0x9, _0x263449['_PARAM_ISC' + 'ONVEXT_POS' + '_'] = 0xa, _0x263449['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0xb, _0x263449['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0xc, _0x263449['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] = 0xd, _0x263449['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] = 0xe, _0x263449['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0xf, _0x263449['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] = 0x10, _0x263449;
        }(), _0x3168e6 = function () {
            function _0x1df7f9() {
            }
            return _0x199b5b(_0x1df7f9, 'laya.webgl' + '.shader.Sh' + 'aderValue'), _0x1df7f9;
        }(), _0x26cdea = function () {
            function _0x30f69() {
            }
            _0x199b5b(_0x30f69, 'laya.webgl' + '.resource.' + 'ICharRende' + 'r');
            var _0x15f500 = _0x30f69['prototype'];
            return _0x15f500['getWidth'] = function (_0x185a19, _0x409118) {
                return 0x0;
            }, _0x15f500['scale'] = function (_0x12b69a, _0x1f7e66) {
            }, _0x15f500['getCharBmp'] = function (_0x41451a, _0x2b0d34, _0x1babbe, _0x4f506a, _0x160364, _0x31b1c3, _0x31bc6a, _0xc61325, _0x42608d, _0xbb8b94, _0x2244d3) {
                return null;
            }, _0x3a2bd3(0x0, _0x15f500, 'canvasWidt' + 'h', function () {
                return 0x0;
            }, function (_0x4993bd) {
            }), _0x30f69;
        }(), _0x336bb3 = function () {
            function _0x587c28() {
            }
            return _0x199b5b(_0x587c28, 'laya.layag' + 'l.LayaGLRu' + 'nner'), _0x587c28['uploadShad' + 'erUniforms'] = function (_0x55b421, _0x2c4947, _0xaddd99, _0xc4fc70) {
                var _0x311229 = _0xaddd99['_data'], _0x2a3b48 = _0x2c4947['getArrayDa' + 'ta'](), _0x248f8b = 0x0;
                for (var _0x2aa5b9 = 0x0, _0x103256 = _0x2a3b48['length']; _0x2aa5b9 < _0x103256; _0x2aa5b9++) {
                    var _0x521864 = _0x2a3b48[_0x2aa5b9];
                    if (_0xc4fc70 || _0x521864['textureID'] !== -0x1) {
                        var _0x216b1e = _0x311229[_0x521864['dataOffset']];
                        if (_0x216b1e != null)
                            _0x248f8b += _0x521864['fun']['call'](_0x521864['caller'], _0x521864, _0x216b1e);
                    }
                }
                return _0x248f8b;
            }, _0x587c28['uploadCust' + 'omUniform'] = function (_0x4aa23e, _0x597e93, _0x3f5751, _0x5bb289) {
                var _0x105e11 = 0x0, _0x5ada71 = _0x597e93[_0x3f5751];
                if (_0x5ada71 && _0x5bb289 != null)
                    _0x105e11 += _0x5ada71['fun']['call'](_0x5ada71['caller'], _0x5ada71, _0x5bb289);
                return _0x105e11;
            }, _0x587c28['uploadShad' + 'erUniforms' + 'ForNative'] = function (_0x423dec, _0x531f4c, _0x375f61) {
                var _0x30c7bf = 0x0;
                _0x375f61['_runtimeCo' + 'pyValues']['length'] >= 0x0 && (_0x30c7bf = 0x1);
                ;
                var _0x45187d = _0x375f61['_data'];
                return _0x423dec['uploadShad' + 'erUniforms'](_0x531f4c, _0x45187d, _0x30c7bf);
            }, _0x587c28;
        }(), _0x2952e3 = function () {
            function _0x145127(_0xd04005, _0x1a8575, _0xf3df0b) {
                this['pages'] = [], this['fontFamily'] = null, this['_slotW'] = 0x0, this['_gridW'] = 0x0, this['_gridNum'] = 0x0, this['_baseSize'] = 0x0, this['_lastSz'] = 0x0, this['_spaceWidt' + 'hMap'] = [], this['_minScoreI' + 'D'] = -0x1, this['_selectedS' + 'izeIdx'] = 0x0, this['margin_lef' + 't'] = 0x0, this['margin_top'] = 0x0, this['margin_bot' + 'tom'] = 0x0, this['margin_rig' + 'ht'] = 0x0, this['gcCnt'] = 0x0, this['_textureWi' + 'dth'] = _0x231b8b['textureWid' + 'th'], this['fontFamily'] = _0xd04005, this['margin_top'] = this['margin_lef' + 't'] = this['margin_rig' + 'ht'] = this['margin_bot' + 'tom'] = _0xf3df0b, this['_baseSize'] = Math['floor'](_0x1a8575 / _0x231b8b['gridSize']) * _0x231b8b['gridSize'], this['_selectedS' + 'izeIdx'] = _0x1a8575 - this['_baseSize'] | 0x0, this['_slotW'] = Math['ceil'](_0x1a8575 / _0x231b8b['gridSize']) * _0x231b8b['gridSize'], this['_gridW'] = Math['floor'](this['_textureWi' + 'dth'] / this['_slotW']);
                if (this['_gridW'] <= 0x0) {
                    console['error']('文字太大,需要修改t' + 'exture大小');
                    debugger;
                    this['_gridW'] = 0x1;
                }
                this['_gridNum'] = this['_gridW'] * this['_gridW'], console['log']('gridInfo:s' + 'lotW=' + this['_slotW'] + ',gridw=' + this['_gridW'] + ',gridNum=' + this['_gridNum'] + ',textureW=' + this['_textureWi' + 'dth']);
            }
            _0x199b5b(_0x145127, 'laya.webgl' + '.resource.' + 'CharPages');
            var _0x343918 = _0x145127['prototype'];
            return _0x343918['getWidth'] = function (_0x20ef1b) {
                return _0x145127['charRender']['getWidth'](_0x231b8b['_curFont'], _0x20ef1b);
            }, _0x343918['selectSize'] = function (_0x1273aa, _0x3deffc) {
                this['_selectedS' + 'izeIdx'] = _0x3deffc - this['_baseSize'] | 0x0;
            }, _0x343918['getSpaceCh' + 'ar'] = function (_0x5eca99) {
                if (this['_spaceWidt' + 'hMap'][this['_selectedS' + 'izeIdx']])
                    return this['_spaceWidt' + 'hMap'][this['_selectedS' + 'izeIdx']];
                ;
                var _0x96dd4b = new _0x37b54c();
                return this['_spaceWidt' + 'hMap'][this['_selectedS' + 'izeIdx']] = _0x96dd4b, _0x96dd4b['width'] = this['getWidth']('\x20'), _0x96dd4b['isSpace'] = !![], _0x96dd4b;
            }, _0x343918['getChar'] = function (_0x59a248, _0xa6fce5, _0x37c115, _0x4d2acc, _0x4ee174, _0xb37e6e, _0x130dce, _0x5d9135) {
                if (_0x59a248 === '\x20')
                    return this['getSpaceCh' + 'ar'](_0x130dce);
                var _0x27a9d2 = _0xa6fce5 > 0x0 ? _0x59a248 + '_' + _0xa6fce5 + _0x4ee174 : _0x59a248, _0x2a4dd4;
                _0x27a9d2 += _0x4d2acc, _0xb37e6e && (_0x27a9d2 += 'B'), _0x5d9135 && (_0x27a9d2 += _0x5d9135);
                for (var _0x217480 = 0x0, _0x53682e = this['pages']['length']; _0x217480 < _0x53682e; _0x217480++) {
                    var _0x5e2fcc = this['pages'][_0x217480], _0x51540b = _0x5e2fcc['charMaps'][this['_selectedS' + 'izeIdx']];
                    if (_0x51540b) {
                        _0x2a4dd4 = _0x51540b['get'](_0x27a9d2);
                        if (_0x2a4dd4)
                            return _0x130dce && _0x2a4dd4['touch'](), _0x2a4dd4;
                    }
                }
                _0x2a4dd4 = this['_getASlot']();
                if (!_0x2a4dd4)
                    return null;
                var _0x5ea5da = _0x2a4dd4['tex']['charMaps'][this['_selectedS' + 'izeIdx']];
                !_0x5ea5da && (_0x5ea5da = _0x2a4dd4['tex']['charMaps'][this['_selectedS' + 'izeIdx']] = new Map()), _0x5ea5da['set'](_0x27a9d2, _0x2a4dd4), _0x130dce && _0x2a4dd4['touch'](), _0x2a4dd4['height'] = _0x37c115;
                var _0x503422 = this['getCharBmp'](_0x59a248, _0x231b8b['_curFont'], _0xa6fce5, _0x4d2acc, _0x4ee174, _0x2a4dd4), _0x654937 = Math['floor'](_0x2a4dd4['pos'] / this['_gridW']), _0x469ec4 = _0x2a4dd4['pos'] % this['_gridW'], _0x167271 = _0x469ec4 * this['_slotW'], _0x5d62af = _0x654937 * this['_slotW'], _0x342733 = this['_textureWi' + 'dth'], _0x3f9c33 = _0x167271 / _0x342733, _0x12d0ef = _0x5d62af / _0x342733, _0x881e9a = (_0x167271 + _0x503422['width']) / _0x342733, _0x3e2539 = (_0x5d62af + _0x503422['height']) / _0x342733, _0x4dec5e = _0x2a4dd4['uv'];
                return _0x4dec5e[0x0] = _0x3f9c33, _0x4dec5e[0x1] = _0x12d0ef, _0x4dec5e[0x2] = _0x881e9a, _0x4dec5e[0x3] = _0x12d0ef, _0x4dec5e[0x4] = _0x881e9a, _0x4dec5e[0x5] = _0x3e2539, _0x4dec5e[0x6] = _0x3f9c33, _0x4dec5e[0x7] = _0x3e2539, _0x2a4dd4['tex']['addChar'](_0x503422, _0x167271, _0x5d62af), _0x2a4dd4;
            }, _0x343918['_getASlot'] = function () {
                var _0x209d8c = this['pages']['length'], _0xaf17b6, _0x3036be, _0x506868 = 0x0;
                for (var _0x48218f = 0x0; _0x48218f < _0x209d8c; _0x48218f++) {
                    _0xaf17b6 = this['pages'][_0x48218f], _0x3036be = _0xaf17b6['findAGrid']();
                    if (_0x3036be)
                        return _0x3036be;
                }
                return _0xaf17b6 = _0x231b8b['trash']['getAPage'](this['_gridNum']), this['pages']['push'](_0xaf17b6), _0x3036be = _0xaf17b6['findAGrid'](), !_0x3036be && console['error']('_getASlot\x20' + 'error!'), _0x3036be;
            }, _0x343918['getAllPage' + 'Score'] = function () {
                var _0x41a2c2 = 0x0, _0x284558 = this['pages']['length'], _0x3b7267 = _0x29f3e7['loopCount'], _0x9bc3b2 = 0x0, _0x4e80ba = 0x2710;
                for (; _0x41a2c2 < _0x284558; _0x41a2c2++) {
                    var _0x355ce9 = this['pages'][_0x41a2c2];
                    _0x355ce9['_scoreTick'] == _0x3b7267 ? _0x9bc3b2 += _0x355ce9['_score'] : _0x355ce9['_score'] = 0x0, _0x355ce9['_score'] < _0x4e80ba && (_0x4e80ba = _0x355ce9['_score'], this['_minScoreI' + 'D'] = _0x41a2c2);
                }
                return _0x9bc3b2;
            }, _0x343918['removeLRU'] = function () {
                var _0x6596a3 = this['_gridNum'] * this['pages']['length'] - this['getAllPage' + 'Score']();
                if (_0x6596a3 >= this['_gridNum']) {
                    if (this['_minScoreI' + 'D'] >= 0x0) {
                        var _0x555197 = this['pages'][this['_minScoreI' + 'D']];
                        console['log']('remove\x20fon' + 'tpage:\x20del' + 'pageid=' + this['_minScoreI' + 'D'] + ',\x20total=' + this['pages']['length'] + ',gcCnt:' + (this['gcCnt'] + 0x1));
                        var _0x23798f = _0x555197['_score'];
                        _0x555197['printDebug' + 'Info'](), _0x231b8b['trash']['discardPag' + 'e'](_0x555197), this['pages'][this['_minScoreI' + 'D']] = this['pages'][this['pages']['length'] - 0x1], this['pages']['pop']();
                        var _0x20fe36 = _0x29f3e7['loopCount'], _0x106f7e = 0x0, _0x315051 = this['pages']['length'];
                        for (; _0x106f7e < _0x315051 && _0x23798f > 0x0; _0x106f7e++) {
                            _0x555197 = this['pages'][_0x106f7e], console['log']('clean\x20page' + '\x20' + _0x106f7e);
                            var _0x2f5c55 = _0x555197['removeOld'](_0x20fe36);
                            _0x23798f -= _0x2f5c55;
                        }
                    }
                    return this['gcCnt']++, !![];
                }
                return ![];
            }, _0x343918['getCharBmp'] = function (_0x119d3e, _0x52f841, _0x16d55d, _0x11eac2, _0x25f590, _0x3b166a) {
                return _0x145127['charRender']['getCharBmp'](_0x119d3e, _0x52f841, _0x16d55d, _0x11eac2, _0x25f590, _0x3b166a, this['margin_lef' + 't'], this['margin_top'], this['margin_rig' + 'ht'], this['margin_bot' + 'tom']);
            }, _0x343918['printPages' + 'Info'] = function () {
                console['log']('拥有页数:\x20', this['pages']['length']), console['log']('基本大小:', this['_baseSize']), console['log']('格子宽度:', this['_slotW']), console['log']('每行格子数:', this['_gridW']), console['log']('贴图大小:', this['_textureWi' + 'dth']), console['log']('\x20\x20\x20\x20边界:', this['margin_lef' + 't'], this['margin_top']), console['log']('得分最少页:', this['_minScoreI' + 'D']), console['log']('\x20\x20GC次数:', this['gcCnt']), console['log']('\x20-------页信' + '息-------'), this['pages']['forEach'](function (_0x4fce97) {
                    _0x4fce97['printDebug' + 'Info'](!![]);
                }), console['log']('\x20-----页信息结' + '束-------');
            }, _0x145127['getBmpSize'] = function (_0x2b21d4) {
                return _0x2b21d4 * 1.5;
            }, _0x145127['charRender'] = null, _0x145127;
        }(), _0xd3fb96 = function () {
            function _0xbadcce() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_paramID'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_radius'] = NaN, this['_startAngl' + 'e'] = NaN, this['_endAngle'] = NaN, this['_fillColor'] = null, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_vertNum'] = 0x0, this['_line_vert' + 'Num'] = 0x0, this['ibBuffer'] = null, this['vbBuffer'] = null, this['line_ibBuf' + 'fer'] = null, this['line_vbBuf' + 'fer'] = null, this['_ibSize'] = 0x0, this['_vbSize'] = 0x0, this['_line_ibSi' + 'ze'] = 0x0, this['_line_vbSi' + 'ze'] = 0x0, this['_cmdCurren' + 'tPos'] = 0x0, this['_points'] = [], this['_linePoint' + 's'] = [], this['_line_vbAr' + 'ray'] = [], this['_line_ibAr' + 'ray'] = [];
            }
            _0x199b5b(_0xbadcce, 'laya.layag' + 'l.cmdNativ' + 'e.DrawPieC' + 'mdNative');
            var _0x48afaa = _0xbadcce['prototype'];
            return _0x48afaa['_arc'] = function (_0x37f3ec, _0x31d041, _0xc77776, _0x1cfbdb, _0x312318, _0x2a4642, _0x530654) {
                _0x2a4642 === void 0x0 && (_0x2a4642 = ![]), _0x530654 === void 0x0 && (_0x530654 = !![]);
                var _0x2bebf8 = [];
                _0x2bebf8['push'](0x0), _0x2bebf8['push'](0x0);
                var _0x4b7c85 = 0x0, _0x10b853 = 0x0, _0x141c3c = 0x0, _0x21232a = 0x0, _0x1f9c19 = 0x0, _0x18a104 = 0x0, _0x951414 = 0x0, _0x2748fa = 0x0, _0x11d0e2 = 0x0, _0x48b51b = 0x0, _0xdee1ab = 0x0, _0x4bbdb5 = 0x0, _0xd38505 = 0x0, _0x138252 = 0x0, _0x5bf8a1 = 0x0, _0xb5417 = 0x0, _0x44a8ed = 0x0;
                _0x10b853 = _0x312318 - _0x1cfbdb;
                if (!_0x2a4642) {
                    if (Math['abs'](_0x10b853) >= Math['PI'] * 0x2)
                        _0x10b853 = Math['PI'] * 0x2;
                    else
                        while (_0x10b853 < 0x0) {
                            _0x10b853 += Math['PI'] * 0x2;
                        }
                } else {
                    if (Math['abs'](_0x10b853) >= Math['PI'] * 0x2)
                        _0x10b853 = -Math['PI'] * 0x2;
                    else
                        while (_0x10b853 > 0x0) {
                            _0x10b853 -= Math['PI'] * 0x2;
                        }
                }
                if (_0xc77776 < 0x65)
                    _0xb5417 = Math['max'](0xa, _0x10b853 * _0xc77776 / 0x5);
                else
                    _0xc77776 < 0xc9 ? _0xb5417 = Math['max'](0xa, _0x10b853 * _0xc77776 / 0x14) : _0xb5417 = Math['max'](0xa, _0x10b853 * _0xc77776 / 0x28);
                _0x141c3c = _0x10b853 / _0xb5417 / 0x2, _0x21232a = Math['abs'](0x4 / 0x3 * (0x1 - Math['cos'](_0x141c3c)) / Math['sin'](_0x141c3c));
                _0x2a4642 && (_0x21232a = -_0x21232a);
                _0x44a8ed = 0x0;
                var _0x39ced1 = NaN, _0x282d9f = NaN, _0x3f736f = 0x0, _0x3dc138 = 0x0;
                for (_0x5bf8a1 = 0x0; _0x5bf8a1 <= _0xb5417; _0x5bf8a1++) {
                    _0x4b7c85 = _0x1cfbdb + _0x10b853 * (_0x5bf8a1 / _0xb5417), _0x1f9c19 = Math['cos'](_0x4b7c85), _0x18a104 = Math['sin'](_0x4b7c85), _0x951414 = _0x37f3ec + _0x1f9c19 * _0xc77776, _0x2748fa = _0x31d041 + _0x18a104 * _0xc77776, (_0x951414 != _0x3f736f || _0x2748fa != _0x3dc138) && (_0x2bebf8['push'](_0x951414), _0x2bebf8['push'](_0x2748fa)), _0x3f736f = _0x951414, _0x3dc138 = _0x2748fa;
                }
                return _0x1f9c19 = Math['cos'](_0x312318), _0x18a104 = Math['sin'](_0x312318), _0x951414 = _0x37f3ec + _0x1f9c19 * _0xc77776, _0x2748fa = _0x31d041 + _0x18a104 * _0xc77776, (_0x951414 != _0x3f736f || _0x2748fa != _0x3dc138) && (_0x2bebf8['push'](_0x951414), _0x2bebf8['push'](_0x2748fa)), _0x2bebf8;
            }, _0x48afaa['_setData'] = function (_0x25ddff, _0x7c8b6d, _0x2c43f0, _0x17c984, _0x16e21d, _0x5039a5) {
                {
                    this['_vertNum'] = _0x17c984['length'] / 0x2;
                    var _0x1e06b4 = this['_vertNum'], _0x4cbde1 = 0x0, _0x4adfed = this['_vertNum'] - 0x2;
                    (!this['ibBuffer'] || this['ibBuffer']['getByteLen' + 'gth']() < _0x4adfed * 0x3 * 0x2) && (this['ibBuffer'] = new ParamData(_0x4adfed * 0x3 * 0x2, !![], !![]));
                    this['_ibSize'] = _0x4adfed * 0x3 * 0x2;
                    var _0x3c382e = this['ibBuffer']['_int16Data'], _0xf1cfb3 = 0x0;
                    for (var _0x3d8173 = 0x0; _0x3d8173 < _0x4adfed; _0x3d8173++) {
                        _0x3c382e[_0xf1cfb3++] = _0x4cbde1, _0x3c382e[_0xf1cfb3++] = _0x3d8173 + 0x1 + _0x4cbde1, _0x3c382e[_0xf1cfb3++] = _0x3d8173 + 0x2 + _0x4cbde1;
                    }
                    (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['vbBuffer'] = new ParamData(_0x1e06b4 * 0x3 * 0x4, !![]));
                    this['_vbSize'] = this['_vertNum'] * 0x3 * 0x4;
                    var _0x279b29 = _0x4b1f30['create'](_0x2c43f0), _0xde977f = _0x279b29['numColor'], _0x190513 = this['vbBuffer']['_float32Da' + 'ta'], _0x556db1 = this['vbBuffer']['_int32Data'], _0x139919 = 0x0;
                    for (var _0x16801a = 0x0; _0x16801a < this['_vertNum']; _0x16801a++) {
                        _0x190513[_0x139919++] = _0x17c984[_0x16801a * 0x2] + _0x25ddff, _0x190513[_0x139919++] = _0x17c984[_0x16801a * 0x2 + 0x1] + _0x7c8b6d, _0x556db1[_0x139919++] = _0xde977f;
                    }
                    ;
                    var _0x5b4a74 = 0x0;
                    this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                    for (_0x16801a = 0x0; _0x16801a < _0x17c984['length']; _0x16801a++) {
                        this['_linePoint' + 's']['push'](_0x17c984[_0x16801a]);
                    }
                    this['_linePoint' + 's']['push'](_0x17c984[0x0]), this['_linePoint' + 's']['push'](_0x17c984[0x1]);
                    if (_0x16e21d) {
                        _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], _0x5039a5, 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'], _0x5b4a74 = this['_line_vert' + 'Num'];
                        (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x5b4a74 - 0x2) * 0x3 * 0x2, !![], !![]));
                        this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                        var _0x1fba8e = this['line_ibBuf' + 'fer']['_int16Data'];
                        _0xf1cfb3 = 0x0;
                        for (var _0xdb5139 = 0x0; _0xdb5139 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0xdb5139++) {
                            _0x1fba8e[_0xf1cfb3++] = this['_line_ibAr' + 'ray'][_0xdb5139];
                        }
                        (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x5b4a74 * 0x3 * 0x4, !![]));
                        this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                        var _0x16b7a6 = _0x4b1f30['create'](_0x16e21d), _0x433922 = _0x16b7a6['numColor'], _0x28d219 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x53a877 = this['line_vbBuf' + 'fer']['_int32Data'];
                        _0x139919 = 0x0;
                        for (_0x16801a = 0x0; _0x16801a < this['_line_vert' + 'Num']; _0x16801a++) {
                            _0x28d219[_0x139919++] = this['_line_vbAr' + 'ray'][_0x16801a * 0x2] + this['_x'], _0x28d219[_0x139919++] = this['_line_vbAr' + 'ray'][_0x16801a * 0x2 + 0x1] + this['_y'], _0x53a877[_0x139919++] = _0x433922;
                        }
                    } else {
                        this['_lineWidth'] = 0x1;
                        var _0x10dda4 = '#FFFFFF';
                        _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'], _0x5b4a74 = this['_line_vert' + 'Num'];
                        (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x5b4a74 - 0x2) * 0x3 * 0x2, !![], !![]));
                        this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2, _0x1fba8e = this['line_ibBuf' + 'fer']['_int16Data'], _0xf1cfb3 = 0x0;
                        for (_0xdb5139 = 0x0; _0xdb5139 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0xdb5139++) {
                            _0x1fba8e[_0xf1cfb3++] = this['_line_ibAr' + 'ray'][_0xdb5139];
                        }
                        (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x5b4a74 * 0x3 * 0x4, !![]));
                        this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4, _0x16b7a6 = _0x4b1f30['create'](_0x10dda4), _0x433922 = _0x16b7a6['numColor'], _0x28d219 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x53a877 = this['line_vbBuf' + 'fer']['_int32Data'], _0x139919 = 0x0;
                        for (_0x16801a = 0x0; _0x16801a < this['_line_vert' + 'Num']; _0x16801a++) {
                            _0x28d219[_0x139919++] = this['_line_vbAr' + 'ray'][_0x16801a * 0x2] + this['_x'], _0x28d219[_0x139919++] = this['_line_vbAr' + 'ray'][_0x16801a * 0x2 + 0x1] + this['_y'], _0x53a877[_0x139919++] = _0x433922;
                        }
                    }
                }
            }, _0x48afaa['_saveToPar' + 'amData'] = function () {
                var _0x1e4fcf = this['_paramData']['_float32Da' + 'ta'], _0x4ca9f2 = this['_paramData']['_int32Data'];
                _0x4ca9f2[0x0] = 0x1, _0x4ca9f2[0x1] = 0x8 * 0x4, _0x4ca9f2[_0xbadcce['_PARAM_VB_' + 'POS_']] = this['vbBuffer']['getPtrID'](), _0x4ca9f2[_0xbadcce['_PARAM_IB_' + 'POS_']] = this['ibBuffer']['getPtrID'](), _0x4ca9f2[_0xbadcce['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x4ca9f2[_0xbadcce['_PARAM_IB_' + 'SIZE_POS_']] = this['_ibSize'], _0x4ca9f2[_0xbadcce['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x4ca9f2[_0xbadcce['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x4ca9f2[_0xbadcce['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']), _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_VB_POS_']] = this['line_vbBuf' + 'fer']['getPtrID'](), _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_IB_POS_']] = this['line_ibBuf' + 'fer']['getPtrID'](), _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = this['_line_vbSi' + 'ze'], _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = this['_line_ibSi' + 'ze'], _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_']] = 0x0, _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_']] = 0x0, _0x4ca9f2[_0xbadcce['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']);
            }, _0x48afaa['recover'] = function () {
                this['_fillColor'] = null, this['_lineColor'] = null, this['_points']['length'] = 0x0, this['_linePoint' + 's']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, _0x5460aa['recover']('DrawPieCmd', this);
            }, _0x3a2bd3(0x0, _0x48afaa, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x1afc71) {
                !this['_lineColor'] && this['_lineWidth'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineColor'] = _0x1afc71, this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                for (var _0x5b28a2 = 0x0; _0x5b28a2 < this['_points']['length']; _0x5b28a2++) {
                    this['_linePoint' + 's']['push'](this['_points'][_0x5b28a2]);
                }
                this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                var _0xf17db3 = this['_line_vert' + 'Num'];
                (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0xf17db3 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                var _0x44f41b = this['line_ibBuf' + 'fer']['_int16Data'], _0x1a7518 = 0x0;
                for (var _0x34f783 = 0x0; _0x34f783 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0x34f783++) {
                    _0x44f41b[_0x1a7518++] = this['_line_ibAr' + 'ray'][_0x34f783];
                }
                (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0xf17db3 * 0x3 * 0x4, !![]));
                this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                var _0x393ea1 = _0x4b1f30['create'](_0x1afc71), _0x166c46 = _0x393ea1['numColor'], _0x1d3ab6 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x56132b = this['line_vbBuf' + 'fer']['_int32Data'], _0x5ee753 = 0x0;
                for (_0x5b28a2 = 0x0; _0x5b28a2 < this['_line_vert' + 'Num']; _0x5b28a2++) {
                    _0x1d3ab6[_0x5ee753++] = this['_line_vbAr' + 'ray'][_0x5b28a2 * 0x2] + this['_x'], _0x1d3ab6[_0x5ee753++] = this['_line_vbAr' + 'ray'][_0x5b28a2 * 0x2 + 0x1] + this['_y'], _0x56132b[_0x5ee753++] = _0x166c46;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'startAngle', function () {
                return this['_startAngl' + 'e'] * 0xb4 / Math['PI'];
            }, function (_0x2a9a03) {
                this['_startAngl' + 'e'] = _0x2a9a03 * Math['PI'] / 0xb4, this['_points'] = this['_arc'](0x0, 0x0, this['_radius'], _0x2a9a03 * Math['PI'] / 0xb4, this['_endAngle']), this['_setData'](this['_x'], this['_y'], this['_fillColor'], this['_points'], this['_lineColor'], this['_lineWidth']), this['_saveToPar' + 'amData'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'cmdID', function () {
                return 'DrawPie';
            }), _0x3a2bd3(0x0, _0x48afaa, 'fillColor', function () {
                return this['_fillColor'];
            }, function (_0x30b135) {
                this['_fillColor'] = _0x30b135;
                var _0x382aa7 = _0x4b1f30['create'](this['_fillColor']), _0x29f5ec = _0x382aa7['numColor'], _0x54e6ea = this['vbBuffer']['_int32Data'], _0x1a7679 = 0x0;
                for (var _0x1be7ef = 0x0; _0x1be7ef < this['_vertNum']; _0x1be7ef++) {
                    _0x1a7679++, _0x1a7679++, _0x54e6ea[_0x1a7679++] = _0x29f5ec;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'x', function () {
                return this['_x'];
            }, function (_0x1bb1c0) {
                this['_x'] = _0x1bb1c0;
                var _0x3772aa = this['vbBuffer']['_float32Da' + 'ta'], _0x2692b8 = 0x0;
                for (var _0xde5b89 = 0x0; _0xde5b89 < this['_vertNum']; _0xde5b89++) {
                    _0x3772aa[_0x2692b8++] = this['_points'][_0xde5b89 * 0x2] + this['_x'], _0x2692b8++, _0x2692b8++;
                }
                if (this['_lineColor']) {
                    var _0x4e1e47 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x2692b8 = 0x0;
                    for (_0xde5b89 = 0x0; _0xde5b89 < this['_line_vert' + 'Num']; _0xde5b89++) {
                        _0x4e1e47[_0x2692b8++] = this['_line_vbAr' + 'ray'][_0xde5b89 * 0x2] + this['_x'], _0x2692b8++, _0x2692b8++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'y', function () {
                return this['_y'];
            }, function (_0x36361b) {
                this['_y'] = _0x36361b;
                var _0x2b4de9 = this['vbBuffer']['_float32Da' + 'ta'], _0x4c9986 = 0x0;
                for (var _0x323ff6 = 0x0; _0x323ff6 < this['_vertNum']; _0x323ff6++) {
                    _0x4c9986++, _0x2b4de9[_0x4c9986++] = this['_points'][_0x323ff6 * 0x2 + 0x1] + this['_y'], _0x4c9986++;
                }
                if (this['_lineColor']) {
                    var _0x378d48 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x4c9986 = 0x0;
                    for (_0x323ff6 = 0x0; _0x323ff6 < this['_line_vert' + 'Num']; _0x323ff6++) {
                        _0x4c9986++, _0x378d48[_0x4c9986++] = this['_line_vbAr' + 'ray'][_0x323ff6 * 0x2 + 0x1] + this['_y'], _0x4c9986++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'radius', function () {
                return this['_radius'];
            }, function (_0x28b051) {
                this['_points'] = this['_arc'](0x0, 0x0, _0x28b051, this['_startAngl' + 'e'], this['_endAngle']), this['_setData'](this['_x'], this['_y'], this['_fillColor'], this['_points'], this['_lineColor'], this['_lineWidth']), this['_saveToPar' + 'amData'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'endAngle', function () {
                return this['_endAngle'] * 0xb4 / Math['PI'];
            }, function (_0x297617) {
                this['_endAngle'] = _0x297617 * Math['PI'] / 0xb4, this['_points'] = this['_arc'](0x0, 0x0, this['_radius'], this['_startAngl' + 'e'], _0x297617 * Math['PI'] / 0xb4), this['_setData'](this['_x'], this['_y'], this['_fillColor'], this['_points'], this['_lineColor'], this['_lineWidth']), this['_saveToPar' + 'amData'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x48afaa, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x3b7f03) {
                this['lineColor'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineWidth'] = _0x3b7f03, this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                for (var _0x3ebfd0 = 0x0; _0x3ebfd0 < this['_points']['length']; _0x3ebfd0++) {
                    this['_linePoint' + 's']['push'](this['_points'][_0x3ebfd0]);
                }
                this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], _0x3b7f03, 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                var _0xb6d1a0 = this['_line_vert' + 'Num'];
                (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0xb6d1a0 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                var _0x3edbb2 = this['line_ibBuf' + 'fer']['_int16Data'], _0x5cad71 = 0x0;
                for (var _0xd4f9bc = 0x0; _0xd4f9bc < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0xd4f9bc++) {
                    _0x3edbb2[_0x5cad71++] = this['_line_ibAr' + 'ray'][_0xd4f9bc];
                }
                (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0xb6d1a0 * 0x3 * 0x4, !![]));
                this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                var _0x5f5b8e = _0x4b1f30['create'](this['lineColor']), _0x1cbba1 = _0x5f5b8e['numColor'], _0x581a04 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x13c548 = this['line_vbBuf' + 'fer']['_int32Data'], _0x74aa80 = 0x0;
                for (_0x3ebfd0 = 0x0; _0x3ebfd0 < this['_line_vert' + 'Num']; _0x3ebfd0++) {
                    _0x581a04[_0x74aa80++] = this['_line_vbAr' + 'ray'][_0x3ebfd0 * 0x2] + this['_x'], _0x581a04[_0x74aa80++] = this['_line_vbAr' + 'ray'][_0x3ebfd0 * 0x2 + 0x1] + this['_y'], _0x13c548[_0x74aa80++] = _0x1cbba1;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
            }), _0xbadcce['create'] = function (_0x63ca69, _0x122d1e, _0x1c4608, _0x371e0e, _0x5a9d5c, _0x163846, _0x2a9040, _0x40ad29, _0x35e920) {
                var _0x1fc215 = _0x5460aa['getItemByC' + 'lass']('DrawPieCmd', _0xbadcce);
                _0x1fc215['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_'] && (_0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xf4, 0x20, !![]), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['setMeshExB' + 'yParamData'](_0xbadcce['_PARAM_VB_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0xbadcce['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0xbadcce['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['setMeshExB' + 'yParamData'](_0xbadcce['_PARAM_LIN' + 'E_VB_POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_IB_POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']));
                !_0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_'] && (_0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xa8, 0x20, !![]), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['setMeshExB' + 'yParamData'](_0xbadcce['_PARAM_VB_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0xbadcce['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'POS_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0xbadcce['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0xbadcce['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']));
                !_0x1fc215['_paramData'] && (_0x1fc215['_paramData'] = new ParamData(0x10 * 0x4, !![]));
                {
                    _0x1fc215['_x'] = _0x63ca69, _0x1fc215['_y'] = _0x122d1e, _0x1fc215['_radius'] = _0x1c4608, _0x1fc215['_startAngl' + 'e'] = _0x371e0e, _0x1fc215['_endAngle'] = _0x5a9d5c, _0x1fc215['_fillColor'] = _0x163846, _0x1fc215['_lineColor'] = _0x2a9040, _0x1fc215['_lineWidth'] = _0x40ad29, _0x1fc215['_points'] = _0x1fc215['_arc'](0x0, 0x0, _0x1c4608, _0x371e0e, _0x5a9d5c), _0x1fc215['_setData'](_0x63ca69, _0x122d1e, _0x163846, _0x1fc215['_points'], _0x2a9040, _0x40ad29);
                }
                return _0x1fc215['_saveToPar' + 'amData'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1fc215['_paramData']), _0x2a9040 ? _0x1fc215['_cmdCurren' + 'tPos'] = _0x1fc215['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_']['getPtrID'](), _0x1fc215['_paramData']['getPtrID'](), -0x1) : _0x1fc215['_cmdCurren' + 'tPos'] = _0x1fc215['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_']['getPtrID'](), _0x1fc215['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1fc215['_graphicsC' + 'mdEncoder']), _0x1fc215;
            }, _0xbadcce['ID'] = 'DrawPie', _0xbadcce['_DRAW_PIE_' + 'CMD_ENCODE' + 'R_'] = null, _0xbadcce['_DRAW_PIE_' + 'LINES_CMD_' + 'ENCODER_'] = null, _0xbadcce['_PARAM_VB_' + 'POS_'] = 0x2, _0xbadcce['_PARAM_IB_' + 'POS_'] = 0x3, _0xbadcce['_PARAM_LIN' + 'E_VB_POS_'] = 0x4, _0xbadcce['_PARAM_LIN' + 'E_IB_POS_'] = 0x5, _0xbadcce['_PARAM_VB_' + 'SIZE_POS_'] = 0x6, _0xbadcce['_PARAM_IB_' + 'SIZE_POS_'] = 0x7, _0xbadcce['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] = 0x8, _0xbadcce['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] = 0x9, _0xbadcce['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0xa, _0xbadcce['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0xb, _0xbadcce['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] = 0xc, _0xbadcce['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] = 0xd, _0xbadcce['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0xe, _0xbadcce['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] = 0xf, _0xbadcce;
        }(), _0x5ccc27 = function () {
            function _0x47b821() {
                this['_nativeVer' + 'texArrayOb' + 'ject'] = null, this['_bindedInd' + 'exBuffer'] = null, this['_nativeVer' + 'texArrayOb' + 'ject'] = _0x33edbf['instance']['createVert' + 'exArray']();
            }
            _0x199b5b(_0x47b821, 'laya.webgl' + '.BufferSta' + 'teBase');
            var _0xe8cc63 = _0x47b821['prototype'];
            return _0xe8cc63['bind'] = function () {
                _0x47b821['_curBinded' + 'BufferStat' + 'e'] !== this && (_0x33edbf['instance']['bindVertex' + 'Array'](this['_nativeVer' + 'texArrayOb' + 'ject']), _0x47b821['_curBinded' + 'BufferStat' + 'e'] = this);
            }, _0xe8cc63['unBind'] = function () {
                if (_0x47b821['_curBinded' + 'BufferStat' + 'e'] === this)
                    _0x33edbf['instance']['bindVertex' + 'Array'](null), _0x47b821['_curBinded' + 'BufferStat' + 'e'] = null;
                else
                    throw 'BufferStat' + 'e:\x20must\x20ca' + 'll\x20bind()\x20' + 'function\x20f' + 'irst.';
            }, _0xe8cc63['bindForNat' + 'ive'] = function () {
                _0x33edbf['instance']['bindVertex' + 'Array'](this['_nativeVer' + 'texArrayOb' + 'ject']), _0x47b821['_curBinded' + 'BufferStat' + 'e'] = this;
            }, _0xe8cc63['unBindForN' + 'ative'] = function () {
                _0x33edbf['instance']['bindVertex' + 'Array'](null), _0x47b821['_curBinded' + 'BufferStat' + 'e'] = null;
            }, _0xe8cc63['destroy'] = function () {
                _0x33edbf['instance']['deleteVert' + 'exArray'](this['_nativeVer' + 'texArrayOb' + 'ject']);
            }, _0x47b821['_curBinded' + 'BufferStat' + 'e'] = null, _0x47b821;
        }(), _0x589690 = function () {
            function _0x1a48c7() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_width'] = NaN, this['_height'] = NaN, this['_fillColor'] = null, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_line_vert' + 'Num'] = 0x0, this['_cmdCurren' + 'tPos'] = 0x0, this['_linePoint' + 's'] = [], this['_line_ibAr' + 'ray'] = [], this['_line_vbAr' + 'ray'] = [];
            }
            _0x199b5b(_0x1a48c7, 'laya.layag' + 'l.cmdNativ' + 'e.DrawRect' + 'CmdNative');
            var _0x31023a = _0x1a48c7['prototype'];
            return _0x31023a['recover'] = function () {
                this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_graphicsC' + 'mdEncoder'] = null, _0x5460aa['recover']('DrawRectCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0x31023a, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x31e580) {
                this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']), this['_lineColor'] = _0x31e580;
                var _0x527b0b = this['_paramData']['_int32Data'], _0x720865 = _0x4b1f30['create'](_0x31e580), _0x540319 = _0x720865['numColor'], _0x526bb6 = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                for (var _0x2b1af7 = 0x0; _0x2b1af7 < this['_line_vert' + 'Num']; _0x2b1af7++) {
                    _0x526bb6++, _0x526bb6++, _0x527b0b[_0x526bb6++] = _0x540319;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'cmdID', function () {
                return 'DrawRect';
            }), _0x3a2bd3(0x0, _0x31023a, 'fillColor', function () {
                return this['_fillColor'];
            }, function (_0x2ef007) {
                this['_fillColor'] = _0x2ef007;
                if (typeof _0x2ef007 === 'string') {
                    var _0x5c6509 = _0x4b1f30['create'](this['_fillColor']), _0x333d01 = _0x5c6509['numColor'], _0x521529 = this['_paramData']['_int32Data'];
                    _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x4] = _0x333d01, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xa] = _0x333d01, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x10] = _0x333d01, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x16] = _0x333d01;
                } else
                    _0x521529 = this['_paramData']['_int32Data'], _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x4] = _0x2ef007, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xa] = _0x2ef007, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x10] = _0x2ef007, _0x521529[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x16] = _0x2ef007;
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'width', function () {
                return this['_width'];
            }, function (_0xb304ea) {
                this['_width'] = _0xb304ea;
                var _0x334dc8 = this['_paramData']['_float32Da' + 'ta'];
                _0x334dc8[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x334dc8[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'];
                if (this['lineColor']) {
                    this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_linePoint' + 's'][0x2] = this['_x'] + this['_width'], this['_linePoint' + 's'][0x4] = this['_x'] + this['_width'], _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                    var _0x4c6ee9 = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                    for (var _0xbb4990 = 0x0; _0xbb4990 < this['_line_vert' + 'Num']; _0xbb4990++) {
                        _0x334dc8[_0x4c6ee9++] = this['_line_vbAr' + 'ray'][_0xbb4990 * 0x2], _0x334dc8[_0x4c6ee9++] = this['_line_vbAr' + 'ray'][_0xbb4990 * 0x2 + 0x1], _0x4c6ee9++;
                    }
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'x', function () {
                return this['_x'];
            }, function (_0x57461d) {
                this['_x'] = _0x57461d;
                var _0x11bf81 = this['_paramData']['_float32Da' + 'ta'];
                _0x11bf81[_0x1a48c7['_PARAM_VB_' + 'POS_']] = this['_x'], _0x11bf81[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x11bf81[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x11bf81[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'];
                if (this['lineColor']) {
                    this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_linePoint' + 's'][0x0] = this['_x'], this['_linePoint' + 's'][0x2] = this['_x'] + this['_width'], this['_linePoint' + 's'][0x4] = this['_x'] + this['_width'], this['_linePoint' + 's'][0x6] = this['_x'], this['_linePoint' + 's'][0x8] = this['_x'], _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]);
                    var _0x13c45c = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                    for (var _0x20b87c = 0x0; _0x20b87c < this['_line_vert' + 'Num']; _0x20b87c++) {
                        _0x11bf81[_0x13c45c++] = this['_line_vbAr' + 'ray'][_0x20b87c * 0x2], _0x11bf81[_0x13c45c++] = this['_line_vbAr' + 'ray'][_0x20b87c * 0x2 + 0x1], _0x13c45c++;
                    }
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'y', function () {
                return this['_y'];
            }, function (_0x2c5d78) {
                this['_y'] = _0x2c5d78;
                var _0x220f96 = this['_paramData']['_float32Da' + 'ta'];
                _0x220f96[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x220f96[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x220f96[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x220f96[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'];
                if (this['lineColor']) {
                    this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_linePoint' + 's'][0x1] = this['_y'], this['_linePoint' + 's'][0x3] = this['_y'], this['_linePoint' + 's'][0x5] = this['_y'] + this['_height'], this['_linePoint' + 's'][0x7] = this['_y'] + this['_height'], this['_linePoint' + 's'][0x9] = this['_y'] - this['_lineWidth'] / 0x2, _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]);
                    var _0x4d879b = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                    for (var _0x35266f = 0x0; _0x35266f < this['_line_vert' + 'Num']; _0x35266f++) {
                        _0x220f96[_0x4d879b++] = this['_line_vbAr' + 'ray'][_0x35266f * 0x2], _0x220f96[_0x4d879b++] = this['_line_vbAr' + 'ray'][_0x35266f * 0x2 + 0x1], _0x4d879b++;
                    }
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'height', function () {
                return this['_height'];
            }, function (_0x5933ac) {
                this['_height'] = _0x5933ac;
                var _0x17f74d = this['_paramData']['_float32Da' + 'ta'];
                _0x17f74d[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x17f74d[_0x1a48c7['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'];
                if (this['lineColor']) {
                    this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_linePoint' + 's'][0x5] = this['_y'] + this['_height'], this['_linePoint' + 's'][0x7] = this['_y'] + this['_height'], _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]);
                    var _0x4f8d11 = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                    for (var _0x312035 = 0x0; _0x312035 < this['_line_vert' + 'Num']; _0x312035++) {
                        _0x17f74d[_0x4f8d11++] = this['_line_vbAr' + 'ray'][_0x312035 * 0x2], _0x17f74d[_0x4f8d11++] = this['_line_vbAr' + 'ray'][_0x312035 * 0x2 + 0x1], _0x4f8d11++;
                    }
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x31023a, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x1bd9b8) {
                this['lineColor'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineWidth'] = _0x1bd9b8, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_linePoint' + 's'][0x9] = this['_y'] - this['_lineWidth'] / 0x2, _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                var _0x3400d6 = this['_paramData']['_float32Da' + 'ta'], _0x42a14a = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                for (var _0x2919f5 = 0x0; _0x2919f5 < this['_line_vert' + 'Num']; _0x2919f5++) {
                    _0x3400d6[_0x42a14a++] = this['_line_vbAr' + 'ray'][_0x2919f5 * 0x2], _0x3400d6[_0x42a14a++] = this['_line_vbAr' + 'ray'][_0x2919f5 * 0x2 + 0x1], _0x42a14a++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x1a48c7['create'] = function (_0x3f2970, _0x3d9b22, _0x480e37, _0x3fecb9, _0x45ba5a, _0xa9849c, _0x1588a3) {
                var _0xea9a23 = _0x5460aa['getItemByC' + 'lass']('DrawRectCm' + 'd', _0x1a48c7);
                _0xea9a23['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_'] && (_0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x12c, 0x20, !![]), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['setRectMes' + 'hByParamDa' + 'ta'](_0x1a48c7['_PARAM_REC' + 'T_NUM_POS_'] * 0x4, _0x1a48c7['_PARAM_VB_' + 'POS_'] * 0x4, _0x1a48c7['_PARAM_VB_' + 'SIZE_POS_'] * 0x4), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['setMeshByP' + 'aramData'](_0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_IB_POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] * 0x4, _0x1a48c7['_PARAM_LIN' + 'E_IBELEMEN' + 'T_OFFSET_P' + 'OS_'] * 0x4), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']));
                !_0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_'] && (_0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['setRectMes' + 'hByParamDa' + 'ta'](_0x1a48c7['_PARAM_REC' + 'T_NUM_POS_'] * 0x4, _0x1a48c7['_PARAM_VB_' + 'POS_'] * 0x4, _0x1a48c7['_PARAM_VB_' + 'SIZE_POS_'] * 0x4), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']));
                !_0xea9a23['_paramData'] && (_0xea9a23['_paramData'] = new ParamData(0x49 * 0x4, !![]));
                {
                    _0xea9a23['_x'] = _0x3f2970, _0xea9a23['_y'] = _0x3d9b22, _0xea9a23['_width'] = _0x480e37, _0xea9a23['_height'] = _0x3fecb9, _0xea9a23['_fillColor'] = _0x45ba5a, _0xea9a23['_lineColor'] = _0xa9849c, _0xea9a23['_lineWidth'] = _0x1588a3;
                    var _0x2b7a83 = _0x4b1f30['create'](_0x45ba5a), _0x494bad = _0x2b7a83['numColor'], _0x16f713 = _0xea9a23['_paramData']['_float32Da' + 'ta'], _0x1fe741 = _0xea9a23['_paramData']['_int32Data'];
                    _0x1fe741[_0x1a48c7['_PARAM_REC' + 'T_NUM_POS_']] = 0x1, _0x1fe741[_0x1a48c7['_PARAM_VB_' + 'SIZE_POS_']] = 0x18 * 0x4;
                    var _0x3898e1 = _0x1a48c7['_PARAM_VB_' + 'POS_'];
                    _0x16f713[_0x3898e1++] = _0x3f2970, _0x16f713[_0x3898e1++] = _0x3d9b22, _0x16f713[_0x3898e1++] = 0x0, _0x16f713[_0x3898e1++] = 0x0, _0x1fe741[_0x3898e1++] = _0x494bad, _0x16f713[_0x3898e1++] = 0xffffffff, _0x16f713[_0x3898e1++] = _0x3f2970 + _0x480e37, _0x16f713[_0x3898e1++] = _0x3d9b22, _0x16f713[_0x3898e1++] = 0x0, _0x16f713[_0x3898e1++] = 0x0, _0x1fe741[_0x3898e1++] = _0x494bad, _0x16f713[_0x3898e1++] = 0xffffffff, _0x16f713[_0x3898e1++] = _0x3f2970 + _0x480e37, _0x16f713[_0x3898e1++] = _0x3d9b22 + _0x3fecb9, _0x16f713[_0x3898e1++] = 0x0, _0x16f713[_0x3898e1++] = 0x0, _0x1fe741[_0x3898e1++] = _0x494bad, _0x16f713[_0x3898e1++] = 0xffffffff, _0x16f713[_0x3898e1++] = _0x3f2970, _0x16f713[_0x3898e1++] = _0x3d9b22 + _0x3fecb9, _0x16f713[_0x3898e1++] = 0x0, _0x16f713[_0x3898e1++] = 0x0, _0x1fe741[_0x3898e1++] = _0x494bad, _0x16f713[_0x3898e1++] = 0xffffffff, _0xea9a23['_linePoint' + 's']['push'](_0x3f2970), _0xea9a23['_linePoint' + 's']['push'](_0x3d9b22), _0xea9a23['_linePoint' + 's']['push'](_0x3f2970 + _0x480e37), _0xea9a23['_linePoint' + 's']['push'](_0x3d9b22), _0xea9a23['_linePoint' + 's']['push'](_0x3f2970 + _0x480e37), _0xea9a23['_linePoint' + 's']['push'](_0x3d9b22 + _0x3fecb9), _0xea9a23['_linePoint' + 's']['push'](_0x3f2970), _0xea9a23['_linePoint' + 's']['push'](_0x3d9b22 + _0x3fecb9), _0xea9a23['_linePoint' + 's']['push'](_0x3f2970), _0xea9a23['_linePoint' + 's']['push'](_0x3d9b22 - _0x1588a3 / 0x2);
                    if (_0xa9849c) {
                        _0x2fe41e['createLine' + '2'](_0xea9a23['_linePoint' + 's'], _0xea9a23['_line_ibAr' + 'ray'], _0x1588a3, 0x0, _0xea9a23['_line_vbAr' + 'ray'], ![]), _0xea9a23['_line_vert' + 'Num'] = _0xea9a23['_linePoint' + 's']['length'], _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = 0x1e * 0x4;
                        var _0x4a6709 = _0x4b1f30['create'](_0xa9849c), _0x355746 = _0x4a6709['numColor'];
                        _0x3898e1 = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                        for (var _0x474e55 = 0x0; _0x474e55 < _0xea9a23['_line_vert' + 'Num']; _0x474e55++) {
                            _0x16f713[_0x3898e1++] = _0xea9a23['_line_vbAr' + 'ray'][_0x474e55 * 0x2], _0x16f713[_0x3898e1++] = _0xea9a23['_line_vbAr' + 'ray'][_0x474e55 * 0x2 + 0x1], _0x1fe741[_0x3898e1++] = _0x355746;
                        }
                        _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = _0xea9a23['_line_ibAr' + 'ray']['length'] * 0x2;
                        var _0x27d0bf = _0xea9a23['_paramData']['_int16Data'];
                        _0x3898e1 = _0x1a48c7['_PARAM_LIN' + 'E_IB_POS_'] * 0x2;
                        for (var _0x21fd60 = 0x0; _0x21fd60 < _0xea9a23['_line_ibAr' + 'ray']['length']; _0x21fd60++) {
                            _0x27d0bf[_0x3898e1++] = _0xea9a23['_line_ibAr' + 'ray'][_0x21fd60];
                        }
                    } else {
                        _0xea9a23['_lineWidth'] = 0x1;
                        var _0x18eae7 = '#ffffff';
                        _0x2fe41e['createLine' + '2'](_0xea9a23['_linePoint' + 's'], _0xea9a23['_line_ibAr' + 'ray'], _0xea9a23['_lineWidth'], 0x0, _0xea9a23['_line_vbAr' + 'ray'], ![]), _0xea9a23['_line_vert' + 'Num'] = _0xea9a23['_linePoint' + 's']['length'], _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = 0x1e * 0x4, _0x4a6709 = _0x4b1f30['create'](_0x18eae7), _0x355746 = _0x4a6709['numColor'], _0x3898e1 = _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'];
                        for (_0x474e55 = 0x0; _0x474e55 < _0xea9a23['_line_vert' + 'Num']; _0x474e55++) {
                            _0x16f713[_0x3898e1++] = _0xea9a23['_line_vbAr' + 'ray'][_0x474e55 * 0x2], _0x16f713[_0x3898e1++] = _0xea9a23['_line_vbAr' + 'ray'][_0x474e55 * 0x2 + 0x1], _0x1fe741[_0x3898e1++] = _0x355746;
                        }
                        _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = _0xea9a23['_line_ibAr' + 'ray']['length'] * 0x2, _0x27d0bf = _0xea9a23['_paramData']['_int16Data'], _0x3898e1 = _0x1a48c7['_PARAM_LIN' + 'E_IB_POS_'] * 0x2;
                        for (_0x21fd60 = 0x0; _0x21fd60 < _0xea9a23['_line_ibAr' + 'ray']['length']; _0x21fd60++) {
                            _0x27d0bf[_0x3898e1++] = _0xea9a23['_line_ibAr' + 'ray'][_0x21fd60];
                        }
                    }
                    _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_']] = 0x0, _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_']] = 0x0, _0x1fe741[_0x1a48c7['_PARAM_LIN' + 'E_IBELEMEN' + 'T_OFFSET_P' + 'OS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xea9a23['_paramData']);
                }
                return _0xa9849c ? _0xea9a23['_cmdCurren' + 'tPos'] = _0xea9a23['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_']['getPtrID'](), _0xea9a23['_paramData']['getPtrID'](), -0x1) : _0xea9a23['_cmdCurren' + 'tPos'] = _0xea9a23['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_']['getPtrID'](), _0xea9a23['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xea9a23['_graphicsC' + 'mdEncoder']), _0xea9a23;
            }, _0x1a48c7['ID'] = 'DrawRect', _0x1a48c7['_DRAW_RECT' + '_CMD_ENCOD' + 'ER_'] = null, _0x1a48c7['_DRAW_RECT' + '_LINE_CMD_' + 'ENCODER_'] = null, _0x1a48c7['_PARAM_REC' + 'T_NUM_POS_'] = 0x0, _0x1a48c7['_PARAM_VB_' + 'SIZE_POS_'] = 0x1, _0x1a48c7['_PARAM_VB_' + 'POS_'] = 0x2, _0x1a48c7['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] = 0x1a, _0x1a48c7['_PARAM_LIN' + 'E_VB_POS_'] = 0x1b, _0x1a48c7['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] = 0x39, _0x1a48c7['_PARAM_LIN' + 'E_IB_POS_'] = 0x3a, _0x1a48c7['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] = 0x46, _0x1a48c7['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] = 0x47, _0x1a48c7['_PARAM_LIN' + 'E_IBELEMEN' + 'T_OFFSET_P' + 'OS_'] = 0x48, _0x1a48c7;
        }(), _0x1fc93b = function () {
            function _0x18533b(_0x43f8e3, _0x5765a4, _0x5a877d, _0x166f39) {
                var _0x1c35a6 = this;
                function _0x3330c0(_0x3a8744) {
                    var _0x4188f7 = [], _0x295c1a = new _0x5839f2(_0x4188f7);
                    return _0x1c35a6['_compileTo' + 'Tree'](_0x295c1a, _0x3a8744['split']('\x0a'), 0x0, _0x4188f7, _0x166f39), _0x295c1a;
                }
                ;
                var _0xee30c4 = _0x3592ad['now']();
                this['_VS'] = _0x3330c0(_0x43f8e3), this['_PS'] = _0x3330c0(_0x5765a4), this['_nameMap'] = _0x5a877d;
                if (_0x3592ad['now']() - _0xee30c4 > 0x2)
                    console['log']('ShaderComp' + 'ile\x20use\x20ti' + 'me:' + (_0x3592ad['now']() - _0xee30c4) + '\x20\x20size:' + _0x43f8e3['length'] + '/' + _0x5765a4['length']);
            }
            _0x199b5b(_0x18533b, 'laya.webgl' + '.utils.Sha' + 'derCompile');
            var _0x1e576c = _0x18533b['prototype'];
            return _0x1e576c['_compileTo' + 'Tree'] = function (_0x635101, _0x4fbd50, _0xc7d2d6, _0x32dc95, _0x55e978) {
                var _0xdd1e2d, _0x25487e, _0x1bdb21, _0x5ab7b9, _0x39ffc0, _0x289cb9 = 0x0, _0xd634d, _0x298c48, _0x2bbc71 = 0x0, _0x58c54c = 0x0, _0x57c84b = 0x0;
                for (_0x2bbc71 = _0xc7d2d6; _0x2bbc71 < _0x4fbd50['length']; _0x2bbc71++) {
                    _0x1bdb21 = _0x4fbd50[_0x2bbc71];
                    if (_0x1bdb21['length'] < 0x1)
                        continue;
                    _0x289cb9 = _0x1bdb21['indexOf']('//');
                    if (_0x289cb9 === 0x0)
                        continue;
                    if (_0x289cb9 >= 0x0)
                        _0x1bdb21 = _0x1bdb21['substr'](0x0, _0x289cb9);
                    _0xdd1e2d = _0x298c48 || new _0x5839f2(_0x32dc95), _0x298c48 = null, _0xdd1e2d['text'] = _0x1bdb21, _0xdd1e2d['noCompile'] = !![];
                    if ((_0x289cb9 = _0x1bdb21['indexOf']('#')) >= 0x0) {
                        _0x5ab7b9 = '#';
                        for (_0x57c84b = _0x289cb9 + 0x1, _0x58c54c = _0x1bdb21['length']; _0x57c84b < _0x58c54c; _0x57c84b++) {
                            var _0x493c3d = _0x1bdb21['charAt'](_0x57c84b);
                            if (_0x493c3d === '\x20' || _0x493c3d === '\x09' || _0x493c3d === '?')
                                break;
                            _0x5ab7b9 += _0x493c3d;
                        }
                        _0xdd1e2d['name'] = _0x5ab7b9;
                        switch (_0x5ab7b9) {
                        case '#ifdef':
                        case '#ifndef':
                            _0xdd1e2d['src'] = _0x1bdb21, _0xdd1e2d['noCompile'] = _0x1bdb21['match'](/[!&|()=<>]/) != null;
                            !_0xdd1e2d['noCompile'] ? (_0xd634d = _0x1bdb21['replace'](/^\s*/, '')['split'](/\s+/), _0xdd1e2d['setConditi' + 'on'](_0xd634d[0x1], _0x5ab7b9 === '#ifdef' ? 0x1 : 0x2), _0xdd1e2d['text'] = '//' + _0xdd1e2d['text']) : console['log']('function()' + ':Boolean{r' + 'eturn\x20' + _0x1bdb21['substr'](_0x289cb9 + _0xdd1e2d['name']['length']) + '}');
                            _0xdd1e2d['setParent'](_0x635101), _0x635101 = _0xdd1e2d;
                            if (_0x55e978) {
                                _0xd634d = _0x1bdb21['substr'](_0x57c84b)['split'](_0x18533b['_splitToWo' + 'rdExps3']);
                                for (_0x57c84b = 0x0; _0x57c84b < _0xd634d['length']; _0x57c84b++) {
                                    _0x1bdb21 = _0xd634d[_0x57c84b], _0x1bdb21['length'] && (_0x55e978[_0x1bdb21] = !![]);
                                }
                            }
                            continue;
                        case '#if':
                            _0xdd1e2d['src'] = _0x1bdb21, _0xdd1e2d['noCompile'] = !![], _0xdd1e2d['setParent'](_0x635101), _0x635101 = _0xdd1e2d;
                            if (_0x55e978) {
                                _0xd634d = _0x1bdb21['substr'](_0x57c84b)['split'](_0x18533b['_splitToWo' + 'rdExps3']);
                                for (_0x57c84b = 0x0; _0x57c84b < _0xd634d['length']; _0x57c84b++) {
                                    _0x1bdb21 = _0xd634d[_0x57c84b], _0x1bdb21['length'] && _0x1bdb21 != 'defined' && (_0x55e978[_0x1bdb21] = !![]);
                                }
                            }
                            continue;
                        case '#else':
                            _0xdd1e2d['src'] = _0x1bdb21, _0x635101 = _0x635101['parent'], _0x25487e = _0x635101['childs'][_0x635101['childs']['length'] - 0x1], _0xdd1e2d['noCompile'] = _0x25487e['noCompile'];
                            !_0xdd1e2d['noCompile'] && (_0xdd1e2d['condition'] = _0x25487e['condition'], _0xdd1e2d['conditionT' + 'ype'] = _0x25487e['conditionT' + 'ype'] == 0x1 ? 0x2 : 0x1, _0xdd1e2d['text'] = '//' + _0xdd1e2d['text'] + '\x20' + _0x25487e['text'] + '\x20' + _0xdd1e2d['conditionT' + 'ype']);
                            _0xdd1e2d['setParent'](_0x635101), _0x635101 = _0xdd1e2d;
                            continue;
                        case '#endif':
                            _0x635101 = _0x635101['parent'], _0x25487e = _0x635101['childs'][_0x635101['childs']['length'] - 0x1], _0xdd1e2d['noCompile'] = _0x25487e['noCompile'];
                            !_0xdd1e2d['noCompile'] && (_0xdd1e2d['text'] = '//' + _0xdd1e2d['text']);
                            _0xdd1e2d['setParent'](_0x635101);
                            continue;
                        case '#include':
                            _0xd634d = _0x18533b['splitToWor' + 'ds'](_0x1bdb21, null);
                            var _0x3c5739 = _0x18533b['includes'][_0xd634d[0x1]];
                            if (!_0x3c5739)
                                throw 'ShaderComp' + 'ile\x20error\x20' + 'no\x20this\x20in' + 'clude\x20file' + ':' + _0xd634d[0x1];
                            if ((_0x289cb9 = _0xd634d[0x0]['indexOf']('?')) < 0x0) {
                                _0xdd1e2d['setParent'](_0x635101), _0x1bdb21 = _0x3c5739['getWith'](_0xd634d[0x2] == 'with' ? _0xd634d[0x3] : null), this['_compileTo' + 'Tree'](_0xdd1e2d, _0x1bdb21['split']('\x0a'), 0x0, _0x32dc95, _0x55e978), _0xdd1e2d['text'] = '';
                                continue;
                            }
                            _0xdd1e2d['setConditi' + 'on'](_0xd634d[0x0]['substr'](_0x289cb9 + 0x1), 0x1), _0xdd1e2d['text'] = _0x3c5739['getWith'](_0xd634d[0x2] == 'with' ? _0xd634d[0x3] : null);
                            break;
                        case '#import':
                            _0xd634d = _0x18533b['splitToWor' + 'ds'](_0x1bdb21, null), _0x39ffc0 = _0xd634d[0x1], _0x32dc95['push']({
                                'node': _0xdd1e2d,
                                'file': _0x18533b['includes'][_0x39ffc0],
                                'ofs': _0xdd1e2d['text']['length']
                            });
                            continue;
                        }
                    } else {
                        _0x25487e = _0x635101['childs'][_0x635101['childs']['length'] - 0x1];
                        if (_0x25487e && !_0x25487e['name']) {
                            _0x32dc95['length'] > 0x0 && _0x18533b['splitToWor' + 'ds'](_0x1bdb21, _0x25487e), _0x298c48 = _0xdd1e2d, _0x25487e['text'] += '\x0a' + _0x1bdb21;
                            continue;
                        }
                        _0x32dc95['length'] > 0x0 && _0x18533b['splitToWor' + 'ds'](_0x1bdb21, _0xdd1e2d);
                    }
                    _0xdd1e2d['setParent'](_0x635101);
                }
            }, _0x1e576c['createShad' + 'er'] = function (_0x2ac541, _0x5d3b17, _0x25a522, _0x58162f) {
                var _0x329cd5 = {}, _0x2baceb = '';
                if (_0x2ac541)
                    for (var _0x2fcb8f in _0x2ac541) {
                        _0x2baceb += '#define\x20' + _0x2fcb8f + '\x0a', _0x329cd5[_0x2fcb8f] = !![];
                    }
                ;
                var _0x27f053 = this['_VS']['toscript'](_0x329cd5, []), _0x390f66 = this['_PS']['toscript'](_0x329cd5, []);
                return (_0x25a522 || _0x3ca794['create'])(_0x2baceb + _0x27f053['join']('\x0a'), _0x2baceb + _0x390f66['join']('\x0a'), _0x5d3b17, this['_nameMap'], _0x58162f);
            }, _0x18533b['_parseOne'] = function (_0x26e0e2, _0x4873b3, _0x2fa17d, _0xc958a2, _0x28cf32, _0x3ce6d7) {
                var _0x4efb11 = {
                    'type': _0x18533b['shaderPara' + 'msMap'][_0x2fa17d[_0xc958a2 + 0x1]],
                    'name': _0x2fa17d[_0xc958a2 + 0x2],
                    'size': isNaN(parseInt(_0x2fa17d[_0xc958a2 + 0x3])) ? 0x1 : parseInt(_0x2fa17d[_0xc958a2 + 0x3])
                };
                return _0x3ce6d7 && (_0x28cf32 == 'attribute' ? _0x26e0e2['push'](_0x4efb11) : _0x4873b3['push'](_0x4efb11)), _0x2fa17d[_0xc958a2 + 0x3] == ':' && (_0x4efb11['type'] = _0x2fa17d[_0xc958a2 + 0x4], _0xc958a2 += 0x2), _0xc958a2 += 0x2, _0xc958a2;
            }, _0x18533b['addInclude'] = function (_0x2374ca, _0x57725b) {
                if (!_0x57725b || _0x57725b['length'] === 0x0)
                    throw new Error('add\x20shader' + '\x20include\x20f' + 'ile\x20err:' + _0x2374ca);
                if (_0x18533b['includes'][_0x2374ca])
                    throw new Error('add\x20shader' + '\x20include\x20f' + 'ile\x20err,\x20h' + 'as\x20add:' + _0x2374ca);
                _0x18533b['includes'][_0x2374ca] = new _0x1b01e7(_0x57725b);
            }, _0x18533b['preGetPara' + 'ms'] = function (_0x5bd334, _0x592ff3) {
                var _0x40a818 = [
                        _0x5bd334,
                        _0x592ff3
                    ], _0xf9146f = {}, _0x300ae5 = [], _0x5a1518 = [], _0x41abdc = {}, _0x3c9a8f = [];
                _0xf9146f['attributes'] = _0x300ae5, _0xf9146f['uniforms'] = _0x5a1518, _0xf9146f['defines'] = _0x41abdc;
                var _0x281133 = 0x0, _0x687e98 = 0x0, _0x12a21b;
                for (var _0x1c33cb = 0x0; _0x1c33cb < 0x2; _0x1c33cb++) {
                    _0x40a818[_0x1c33cb] = _0x40a818[_0x1c33cb]['replace'](_0x18533b['_removeAnn' + 'otation'], '');
                    var _0x418dad = _0x40a818[_0x1c33cb]['match'](_0x18533b['_reg']), _0x3f009b;
                    for (_0x281133 = 0x0, _0x687e98 = _0x418dad['length']; _0x281133 < _0x687e98; _0x281133++) {
                        var _0x9a423a = _0x418dad[_0x281133];
                        if (_0x9a423a != 'attribute' && _0x9a423a != 'uniform') {
                            if (_0x9a423a == '#define') {
                                _0x9a423a = _0x418dad[++_0x281133], _0x3c9a8f[_0x9a423a] = 0x1;
                                continue;
                            } else {
                                if (_0x9a423a == '#ifdef') {
                                    _0x3f009b = _0x418dad[++_0x281133];
                                    var _0x1fd835 = _0x41abdc[_0x3f009b] = _0x41abdc[_0x3f009b] || [];
                                    for (_0x281133++; _0x281133 < _0x687e98; _0x281133++) {
                                        _0x9a423a = _0x418dad[_0x281133];
                                        if (_0x9a423a != 'attribute' && _0x9a423a != 'uniform') {
                                            if (_0x9a423a == '#else')
                                                for (_0x281133++; _0x281133 < _0x687e98; _0x281133++) {
                                                    _0x9a423a = _0x418dad[_0x281133];
                                                    if (_0x9a423a != 'attribute' && _0x9a423a != 'uniform') {
                                                        if (_0x9a423a == '#endif')
                                                            break;
                                                        continue;
                                                    }
                                                    _0x281133 = _0x18533b['_parseOne'](_0x300ae5, _0x5a1518, _0x418dad, _0x281133, _0x9a423a, !_0x3c9a8f[_0x3f009b]);
                                                }
                                            continue;
                                        }
                                        _0x281133 = _0x18533b['_parseOne'](_0x300ae5, _0x5a1518, _0x418dad, _0x281133, _0x9a423a, _0x3c9a8f[_0x3f009b]);
                                    }
                                }
                            }
                            continue;
                        }
                        _0x281133 = _0x18533b['_parseOne'](_0x300ae5, _0x5a1518, _0x418dad, _0x281133, _0x9a423a, !![]);
                    }
                }
                return _0xf9146f;
            }, _0x18533b['splitToWor' + 'ds'] = function (_0xa7c86c, _0x2dde8b) {
                var _0x3a3968 = [], _0x3e630e, _0x4d9ee3 = -0x1, _0x451504;
                for (var _0x7c6b08 = 0x0, _0x2fbe1b = _0xa7c86c['length']; _0x7c6b08 < _0x2fbe1b; _0x7c6b08++) {
                    _0x3e630e = _0xa7c86c['charAt'](_0x7c6b08);
                    if (('\x20\x09=+-*/&%!' + '<>()\x27\x22,;')['indexOf'](_0x3e630e) >= 0x0) {
                        _0x4d9ee3 >= 0x0 && _0x7c6b08 - _0x4d9ee3 > 0x1 && (_0x451504 = _0xa7c86c['substr'](_0x4d9ee3, _0x7c6b08 - _0x4d9ee3), _0x3a3968['push'](_0x451504));
                        if (_0x3e630e == '\x22' || _0x3e630e == '\x27') {
                            var _0x70c22c = _0xa7c86c['indexOf'](_0x3e630e, _0x7c6b08 + 0x1);
                            if (_0x70c22c < 0x0)
                                throw 'Sharder\x20er' + 'r:' + _0xa7c86c;
                            _0x3a3968['push'](_0xa7c86c['substr'](_0x7c6b08 + 0x1, _0x70c22c - _0x7c6b08 - 0x1)), _0x7c6b08 = _0x70c22c, _0x4d9ee3 = -0x1;
                            continue;
                        }
                        if (_0x3e630e == '(' && _0x2dde8b && _0x3a3968['length'] > 0x0) {
                            _0x451504 = _0x3a3968[_0x3a3968['length'] - 0x1] + ';';
                            if ('vec4;main;'['indexOf'](_0x451504) < 0x0)
                                _0x2dde8b['useFuns'] += _0x451504;
                        }
                        _0x4d9ee3 = -0x1;
                        continue;
                    }
                    if (_0x4d9ee3 < 0x0)
                        _0x4d9ee3 = _0x7c6b08;
                }
                return _0x4d9ee3 < _0x2fbe1b && _0x2fbe1b - _0x4d9ee3 > 0x1 && (_0x451504 = _0xa7c86c['substr'](_0x4d9ee3, _0x2fbe1b - _0x4d9ee3), _0x3a3968['push'](_0x451504)), _0x3a3968;
            }, _0x18533b['IFDEF_NO'] = 0x0, _0x18533b['IFDEF_YES'] = 0x1, _0x18533b['IFDEF_ELSE'] = 0x2, _0x18533b['IFDEF_PARE' + 'NT'] = 0x3, _0x18533b['_removeAnn' + 'otation'] = new RegExp('(/\x5c*([^*]|' + '[\x5cr\x5c\x0a]|(\x5c*' + '+([^*/]|[\x5c' + 'r\x5cn])))*\x5c*' + '+/)|(//.*)', 'g'), _0x18533b['_reg'] = new RegExp('(\x22.*\x22)|(\x27.' + '*\x27)|([#\x5cw\x5c' + '*-\x5c.+/()=<' + '>{}\x5c\x5c]+)|(' + '[,;:\x5c\x5c])', 'g'), _0x18533b['_splitToWo' + 'rdExps'] = new RegExp('[(\x22.*\x22)]+|' + '[(\x27.*\x27)]+|' + '([\x20\x5ct=\x5c+\x5c-' + '*/&%!<>!%(' + '),;])', 'g'), _0x18533b['includes'] = {}, _0x3a2911(_0x18533b, [
                'shaderPara' + 'msMap',
                function () {
                    return this['shaderPara' + 'msMap'] = {
                        'float': 0x1406,
                        'int': 0x1404,
                        'bool': 0x8b56,
                        'vec2': 0x8b50,
                        'vec3': 0x8b51,
                        'vec4': 0x8b52,
                        'ivec2': 0x8b53,
                        'ivec3': 0x8b54,
                        'ivec4': 0x8b55,
                        'bvec2': 0x8b57,
                        'bvec3': 0x8b58,
                        'bvec4': 0x8b59,
                        'mat2': 0x8b5a,
                        'mat3': 0x8b5b,
                        'mat4': 0x8b5c,
                        'sampler2D': 0x8b5e,
                        'samplerCube': 0x8b60
                    };
                },
                '_splitToWo' + 'rdExps3',
                function () {
                    return this['_splitToWo' + 'rdExps3'] = new RegExp('[\x20\x5ct=\x5c+\x5c-*' + '/&%!<>!%()' + ',;\x5c|]', 'g');
                }
            ]), _0x18533b;
        }(), _0x2f1f5c = function () {
            function _0x54392c() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_text'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_font'] = null, this['_color'] = null, this['_textAlign'] = null, this['_draw_text' + 'ure_cmd_en' + 'coder_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x40, 0x20, !![]);
            }
            _0x199b5b(_0x54392c, 'laya.layag' + 'l.cmdNativ' + 'e.FillText' + 'CmdNative');
            var _0x5dca2f = _0x54392c['prototype'];
            return _0x5dca2f['createFill' + 'Text'] = function (_0x25f79d, _0x3fc9b2, _0x6d246e, _0xc3ff5b, _0x2fb8d3, _0x5f27fe, _0x7d3398) {
                var _0x1b223c = _0x4b1f30['create'](_0x5f27fe), _0x416b34 = _0x1b223c['numColor'], _0x2e56c4 = {};
                _0x2e56c4['_curMat'] = new _0x4fb671(), _0x2e56c4['_italicDeg'] = 0x0, _0x2e56c4['_drawTextu' + 'reUseColor'] = 0xffffffff, _0x2e56c4['fillStyle'] = _0x5f27fe, _0x2e56c4['_fillColor'] = 0xffffffff, _0x2e56c4['setFillCol' + 'or'] = function (_0xf3a4ba) {
                    _0x2e56c4['_fillColor'] = _0xf3a4ba;
                }, _0x2e56c4['getFillCol' + 'or'] = function () {
                    return _0x2e56c4['_fillColor'];
                }, _0x2e56c4['mixRGBandA' + 'lpha'] = function (_0x39126e) {
                    return _0x39126e;
                }, _0x2e56c4['_drawTextu' + 'reM'] = function (_0xd64d1b, _0x8974c3, _0x51d9c4, _0x1af6e6, _0x25e303, _0x174e24, _0x522b64, _0x245a21) {
                    _0x25f79d['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x25f79d['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x25f79d['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x25f79d['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x25f79d['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x25f79d['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x25f79d['uniformTex' + 'ture'](0x3, 0x84c0, _0xd64d1b['bitmap']['_glTexture']);
                    var _0x54a0b7 = new Float32Array([
                            _0x8974c3,
                            _0x51d9c4,
                            _0x245a21[0x0],
                            _0x245a21[0x1],
                            0x0,
                            0x0,
                            _0x8974c3 + _0x1af6e6,
                            _0x51d9c4,
                            _0x245a21[0x2],
                            _0x245a21[0x3],
                            0x0,
                            0x0,
                            _0x8974c3 + _0x1af6e6,
                            _0x51d9c4 + _0x25e303,
                            _0x245a21[0x4],
                            _0x245a21[0x5],
                            0x0,
                            0x0,
                            _0x8974c3,
                            _0x51d9c4 + _0x25e303,
                            _0x245a21[0x6],
                            _0x245a21[0x7],
                            0x0,
                            0x0
                        ]), _0x58fc55 = new Int32Array(_0x54a0b7['buffer']);
                    _0x58fc55[0x4] = _0x58fc55[0xa] = _0x58fc55[0x10] = _0x58fc55[0x16] = 0xffffffff, _0x58fc55[0x5] = _0x58fc55[0xb] = _0x58fc55[0x11] = _0x58fc55[0x17] = 0xffffffff, _0x25f79d['setRectMes' + 'h'](0x1, _0x54a0b7, _0x54a0b7['length']), _0x25f79d['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x25f79d['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x25f79d);
                }, _0x54392c['cbook']['filltext_n' + 'ative'](_0x2e56c4, _0x3fc9b2, null, _0x6d246e, _0xc3ff5b, _0x2fb8d3, _0x5f27fe, null, 0x0, _0x7d3398);
            }, _0x5dca2f['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, _0x5460aa['recover']('FillTextCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0x5dca2f, 'text', function () {
                return this['_text'];
            }, function (_0x2bd6c0) {
                var _0x3468d = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x3468d['clearEncod' + 'ing'](), this['_text'] = _0x2bd6c0, this['createFill' + 'Text'](_0x3468d, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3468d);
            }), _0x3a2bd3(0x0, _0x5dca2f, 'cmdID', function () {
                return 'FillText';
            }), _0x3a2bd3(0x0, _0x5dca2f, 'font', function () {
                return this['_font'];
            }, function (_0x7ea1eb) {
                var _0x8ea111 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x8ea111['clearEncod' + 'ing'](), this['_font'] = _0x7ea1eb, this['createFill' + 'Text'](_0x8ea111, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x8ea111);
            }), _0x3a2bd3(0x0, _0x5dca2f, 'color', function () {
                return this['_color'];
            }, function (_0x455394) {
                var _0x125ba3 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x125ba3['clearEncod' + 'ing'](), this['_color'] = _0x455394, this['createFill' + 'Text'](_0x125ba3, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x125ba3);
            }), _0x3a2bd3(0x0, _0x5dca2f, 'textAlign', function () {
                return this['_textAlign'];
            }, function (_0x5d1af4) {
                var _0x28f4d1 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x28f4d1['clearEncod' + 'ing'](), this['_textAlign'] = _0x5d1af4, this['createFill' + 'Text'](_0x28f4d1, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x28f4d1);
            }), _0x3a2bd3(0x0, _0x5dca2f, 'x', function () {
                return this['_x'];
            }, function (_0x2c2328) {
                var _0x35876e = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x35876e['clearEncod' + 'ing'](), this['_x'] = _0x2c2328, this['createFill' + 'Text'](_0x35876e, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x35876e);
            }), _0x3a2bd3(0x0, _0x5dca2f, 'y', function () {
                return this['_y'];
            }, function (_0xe3e57f) {
                var _0x5b2c67 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x5b2c67['clearEncod' + 'ing'](), this['_y'] = _0xe3e57f, this['createFill' + 'Text'](_0x5b2c67, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x5b2c67);
            }), _0x54392c['create'] = function (_0x5e82a5, _0x307c78, _0x7700b8, _0x2a4087, _0x224db5, _0x17ba24) {
                if (!_0x54392c['cbook'])
                    new Error('Error:char' + 'book\x20not\x20c' + 'reate!');
                var _0x3d3041 = _0x5460aa['getItemByC' + 'lass']('FillTextCm' + 'd', _0x54392c), _0x3fe2f2 = _0x3d3041['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x3d3041['_text'] = _0x5e82a5, _0x3d3041['_x'] = _0x307c78, _0x3d3041['_y'] = _0x7700b8, _0x3d3041['_font'] = _0x2a4087, _0x3d3041['_color'] = _0x224db5, _0x3d3041['_textAlign'] = _0x17ba24, _0x3d3041['_draw_text' + 'ure_cmd_en' + 'coder_']['clearEncod' + 'ing'](), _0x3d3041['createFill' + 'Text'](_0x3d3041['_draw_text' + 'ure_cmd_en' + 'coder_'], _0x5e82a5, _0x307c78, _0x7700b8, _0x2a4087, _0x224db5, _0x17ba24), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3d3041['_draw_text' + 'ure_cmd_en' + 'coder_']), _0x3fe2f2['useCommand' + 'Encoder'](_0x3d3041['_draw_text' + 'ure_cmd_en' + 'coder_']['getPtrID'](), -0x1, -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3fe2f2), _0x3d3041;
            }, _0x54392c['ID'] = 'FillText', _0x3a2911(_0x54392c, [
                'cbook',
                function () {
                    return this['cbook'] = _0x4a6519['textRender'];
                }
            ]), _0x54392c;
        }(), _0x21b46c = function () {
            function _0x24a675() {
            }
            _0x199b5b(_0x24a675, 'laya.webgl' + '.WebGLCont' + 'ext');
            var _0x552b2e = _0x24a675['prototype'];
            return _0x552b2e['getContext' + 'Attributes'] = function () {
                return null;
            }, _0x552b2e['isContextL' + 'ost'] = function () {
            }, _0x552b2e['getSupport' + 'edExtensio' + 'ns'] = function () {
                return null;
            }, _0x552b2e['getExtensi' + 'on'] = function (_0x450237) {
                return null;
            }, _0x552b2e['activeText' + 'ure'] = function (_0x3659b5) {
            }, _0x552b2e['attachShad' + 'er'] = function (_0x8a1d42, _0x2bf1df) {
            }, _0x552b2e['bindAttrib' + 'Location'] = function (_0x460529, _0xa6f771, _0x8b34d1) {
            }, _0x552b2e['bindBuffer'] = function (_0x4dc387, _0x2046fc) {
            }, _0x552b2e['bindFrameb' + 'uffer'] = function (_0x262679, _0x36ebe6) {
            }, _0x552b2e['bindRender' + 'buffer'] = function (_0x22bc0b, _0x53cf91) {
            }, _0x552b2e['bindTextur' + 'e'] = function (_0x148477, _0x13f95d) {
            }, _0x552b2e['useTexture'] = function (_0x4681b3) {
            }, _0x552b2e['blendColor'] = function (_0x1d679a, _0x33e08e, _0x9af58e, _0x52c109) {
            }, _0x552b2e['blendEquat' + 'ion'] = function (_0xb73add) {
            }, _0x552b2e['blendEquat' + 'ionSeparat' + 'e'] = function (_0x11b9eb, _0x248034) {
            }, _0x552b2e['blendFunc'] = function (_0x365854, _0x3f34bd) {
            }, _0x552b2e['blendFuncS' + 'eparate'] = function (_0x3a0171, _0x113454, _0x3db469, _0xfc8915) {
            }, _0x552b2e['bufferData'] = function (_0x2ed24b, _0x1f8382, _0x22298e) {
            }, _0x552b2e['bufferSubD' + 'ata'] = function (_0x3fb80c, _0x3a187a, _0x42d69c) {
            }, _0x552b2e['checkFrame' + 'bufferStat' + 'us'] = function (_0x5e94d5) {
                return null;
            }, _0x552b2e['clear'] = function (_0x82011c) {
            }, _0x552b2e['clearColor'] = function (_0x18cfc0, _0x3050bc, _0x5af094, _0x58c56a) {
            }, _0x552b2e['clearDepth'] = function (_0x18e4f1) {
            }, _0x552b2e['clearStenc' + 'il'] = function (_0x226168) {
            }, _0x552b2e['colorMask'] = function (_0xaf8d68, _0x5d3c2c, _0x366cbd, _0x257656) {
            }, _0x552b2e['compileSha' + 'der'] = function (_0x18229f) {
            }, _0x552b2e['copyTexIma' + 'ge2D'] = function (_0x39355e, _0x58c2e7, _0x2b186f, _0x2cdedc, _0xd83615, _0x4db6bd, _0xd0e16f, _0x1ad8d1) {
            }, _0x552b2e['copyTexSub' + 'Image2D'] = function (_0x1e5821, _0x106055, _0x4fa922, _0x26274c, _0x3d82e8, _0x1045ef, _0x4b41f4, _0x38c3f8) {
            }, _0x552b2e['createBuff' + 'er'] = function () {
            }, _0x552b2e['createFram' + 'ebuffer'] = function () {
            }, _0x552b2e['createProg' + 'ram'] = function () {
            }, _0x552b2e['createRend' + 'erbuffer'] = function () {
            }, _0x552b2e['createShad' + 'er'] = function (_0x198bb9) {
            }, _0x552b2e['createText' + 'ure'] = function () {
                return null;
            }, _0x552b2e['cullFace'] = function (_0x50610e) {
            }, _0x552b2e['deleteBuff' + 'er'] = function (_0x4d6888) {
            }, _0x552b2e['deleteFram' + 'ebuffer'] = function (_0x2a6207) {
            }, _0x552b2e['deleteProg' + 'ram'] = function (_0xf9f59f) {
            }, _0x552b2e['deleteRend' + 'erbuffer'] = function (_0x589c27) {
            }, _0x552b2e['deleteShad' + 'er'] = function (_0x581fb1) {
            }, _0x552b2e['deleteText' + 'ure'] = function (_0x315016) {
            }, _0x552b2e['depthFunc'] = function (_0x59fd76) {
            }, _0x552b2e['depthMask'] = function (_0x49ee61) {
            }, _0x552b2e['depthRange'] = function (_0x164e14, _0x5c248e) {
            }, _0x552b2e['detachShad' + 'er'] = function (_0x578271, _0x5e6489) {
            }, _0x552b2e['disable'] = function (_0x2054e7) {
            }, _0x552b2e['disableVer' + 'texAttribA' + 'rray'] = function (_0x2f1328) {
            }, _0x552b2e['drawArrays'] = function (_0xd26654, _0xe39c2b, _0xa136ea) {
            }, _0x552b2e['drawElemen' + 'ts'] = function (_0x353c13, _0x21cf36, _0x36601e, _0x5d2e5e) {
            }, _0x552b2e['enable'] = function (_0x50d720) {
            }, _0x552b2e['enableVert' + 'exAttribAr' + 'ray'] = function (_0x382dd1) {
            }, _0x552b2e['finish'] = function () {
            }, _0x552b2e['flush'] = function () {
            }, _0x552b2e['framebuffe' + 'rRenderbuf' + 'fer'] = function (_0x25aa67, _0x5ebfa6, _0x2c7b77, _0x14fd1a) {
            }, _0x552b2e['framebuffe' + 'rTexture2D'] = function (_0x31f57f, _0x4c1522, _0x359a8a, _0x1cd99b, _0xfbe088) {
            }, _0x552b2e['frontFace'] = function (_0x4a7a5d) {
                return null;
            }, _0x552b2e['generateMi' + 'pmap'] = function (_0x2be5ff) {
                return null;
            }, _0x552b2e['getActiveA' + 'ttrib'] = function (_0x2eed73, _0x1c1ba2) {
                return null;
            }, _0x552b2e['getActiveU' + 'niform'] = function (_0x4de2b5, _0x4d4c89) {
                return null;
            }, _0x552b2e['getAttribL' + 'ocation'] = function (_0x45651f, _0x3ca684) {
                return 0x0;
            }, _0x552b2e['getParamet' + 'er'] = function (_0x445f09) {
                return null;
            }, _0x552b2e['getBufferP' + 'arameter'] = function (_0x19e580, _0x599d89) {
                return null;
            }, _0x552b2e['getError'] = function () {
                return null;
            }, _0x552b2e['getFramebu' + 'fferAttach' + 'mentParame' + 'ter'] = function (_0x4ff6fa, _0x1d0414, _0x4da8fd) {
            }, _0x552b2e['getProgram' + 'Parameter'] = function (_0x1576b8, _0x3b4aba) {
                return 0x0;
            }, _0x552b2e['getProgram' + 'InfoLog'] = function (_0x2bda7f) {
                return null;
            }, _0x552b2e['getRenderb' + 'ufferParam' + 'eter'] = function (_0x16c846, _0x42def8) {
                return null;
            }, _0x552b2e['getShaderP' + 'recisionFo' + 'rmat'] = function (_0x10c6b3) {
                var _0x3bc1ec = arguments;
                return null;
            }, _0x552b2e['getShaderP' + 'arameter'] = function (_0x54751d, _0xf72459) {
            }, _0x552b2e['getShaderI' + 'nfoLog'] = function (_0x56339c) {
                return null;
            }, _0x552b2e['getShaderS' + 'ource'] = function (_0x430c92) {
                return null;
            }, _0x552b2e['getTexPara' + 'meter'] = function (_0x3fb7a9, _0xcfe065) {
            }, _0x552b2e['getUniform'] = function (_0x31aa83, _0x2fbd8d) {
            }, _0x552b2e['getUniform' + 'Location'] = function (_0x287a14, _0xe3b083) {
                return null;
            }, _0x552b2e['getVertexA' + 'ttrib'] = function (_0x1897e1, _0x45759e) {
                return null;
            }, _0x552b2e['getVertexA' + 'ttribOffse' + 't'] = function (_0x1abca0, _0x571aa4) {
                return null;
            }, _0x552b2e['hint'] = function (_0x238510, _0x3921e7) {
            }, _0x552b2e['isBuffer'] = function (_0x63d99b) {
            }, _0x552b2e['isEnabled'] = function (_0x3a3138) {
            }, _0x552b2e['isFramebuf' + 'fer'] = function (_0x58f1ab) {
            }, _0x552b2e['isProgram'] = function (_0x256303) {
            }, _0x552b2e['isRenderbu' + 'ffer'] = function (_0x4f08c2) {
            }, _0x552b2e['isShader'] = function (_0x4d1fe4) {
            }, _0x552b2e['isTexture'] = function (_0x27f3e3) {
            }, _0x552b2e['lineWidth'] = function (_0x26a0b7) {
            }, _0x552b2e['linkProgra' + 'm'] = function (_0x9c0027) {
            }, _0x552b2e['pixelStore' + 'i'] = function (_0x19575f, _0x7c4559) {
            }, _0x552b2e['polygonOff' + 'set'] = function (_0x4da829, _0x3b8352) {
            }, _0x552b2e['readPixels'] = function (_0x302190, _0x453ef5, _0x475bde, _0x21632c, _0x370ba6, _0x4240f3, _0x147faf) {
            }, _0x552b2e['renderbuff' + 'erStorage'] = function (_0x3f80ba, _0x5647d2, _0x2772fa, _0x2936c4) {
            }, _0x552b2e['sampleCove' + 'rage'] = function (_0x3ac970, _0x39d30c) {
            }, _0x552b2e['scissor'] = function (_0x2137da, _0x46e0a0, _0x1b63bc, _0x2d0906) {
            }, _0x552b2e['shaderSour' + 'ce'] = function (_0x5e08c9, _0x1db3c3) {
            }, _0x552b2e['stencilFun' + 'c'] = function (_0x42171e, _0x1f3b21, _0x469011) {
            }, _0x552b2e['stencilFun' + 'cSeparate'] = function (_0x2a2dc1, _0x329233, _0x49aede, _0x33c0d8) {
            }, _0x552b2e['stencilMas' + 'k'] = function (_0x26cd20) {
            }, _0x552b2e['stencilMas' + 'kSeparate'] = function (_0x3a74c5, _0x44e63b) {
            }, _0x552b2e['stencilOp'] = function (_0xfc6a03, _0x542915, _0x498465) {
            }, _0x552b2e['stencilOpS' + 'eparate'] = function (_0x1bec91, _0x320185, _0x4099fc, _0x59aa65) {
            }, _0x552b2e['texImage2D'] = function (_0x5bad77) {
            }, _0x552b2e['texParamet' + 'erf'] = function (_0x3f4c1b, _0x2613a8, _0x5a7f6b) {
            }, _0x552b2e['texParamet' + 'eri'] = function (_0x35ce97, _0x4616a9, _0x325448) {
            }, _0x552b2e['texSubImag' + 'e2D'] = function (_0x243cfb) {
            }, _0x552b2e['uniform1f'] = function (_0x240c4e, _0x492f22) {
            }, _0x552b2e['uniform1fv'] = function (_0x3a658d, _0x430b8c) {
            }, _0x552b2e['uniform1i'] = function (_0xb1b184, _0x3bf28a) {
            }, _0x552b2e['uniform1iv'] = function (_0x5ab823, _0x2096d8) {
            }, _0x552b2e['uniform2f'] = function (_0x16bb38, _0x4093c9, _0x3996f1) {
            }, _0x552b2e['uniform2fv'] = function (_0x309a80, _0x539d9c) {
            }, _0x552b2e['uniform2i'] = function (_0x26df87, _0x4e43e8, _0x202cc1) {
            }, _0x552b2e['uniform2iv'] = function (_0x38d2b1, _0x37c788) {
            }, _0x552b2e['uniform3f'] = function (_0x41c045, _0x2a5ba8, _0x392cf3, _0x34a9e4) {
            }, _0x552b2e['uniform3fv'] = function (_0x4f13ca, _0x44101a) {
            }, _0x552b2e['uniform3i'] = function (_0x3092eb, _0x221d9f, _0x5e523b, _0x53c146) {
            }, _0x552b2e['uniform3iv'] = function (_0x343550, _0x1d9e48) {
            }, _0x552b2e['uniform4f'] = function (_0x4f5ed3, _0x24bbee, _0x458405, _0x33ed90, _0x57b793) {
            }, _0x552b2e['uniform4fv'] = function (_0x3a6b23, _0x497198) {
            }, _0x552b2e['uniform4i'] = function (_0x4aea77, _0x4e5f64, _0x2ae888, _0x1253e9, _0x1f00fb) {
            }, _0x552b2e['uniform4iv'] = function (_0x21d67b, _0xe1d06b) {
            }, _0x552b2e['uniformMat' + 'rix2fv'] = function (_0x81db3, _0x52860c, _0x1bad2e) {
            }, _0x552b2e['uniformMat' + 'rix3fv'] = function (_0x4aab01, _0x2bf6a3, _0x3b583c) {
            }, _0x552b2e['uniformMat' + 'rix4fv'] = function (_0x2403c1, _0x8e4b2a, _0x29581c) {
            }, _0x552b2e['useProgram'] = function (_0x1dd648) {
            }, _0x552b2e['validatePr' + 'ogram'] = function (_0x5536e7) {
            }, _0x552b2e['vertexAttr' + 'ib1f'] = function (_0x3f3d04, _0x851ab3) {
            }, _0x552b2e['vertexAttr' + 'ib1fv'] = function (_0x5874b1, _0x2fb271) {
            }, _0x552b2e['vertexAttr' + 'ib2f'] = function (_0x220873, _0x58698c, _0x245eff) {
            }, _0x552b2e['vertexAttr' + 'ib2fv'] = function (_0x5c4a83, _0x30c974) {
            }, _0x552b2e['vertexAttr' + 'ib3f'] = function (_0x3af87c, _0x22645d, _0x4325c6, _0x1683e5) {
            }, _0x552b2e['vertexAttr' + 'ib3fv'] = function (_0x91dc50, _0x33e801) {
            }, _0x552b2e['vertexAttr' + 'ib4f'] = function (_0x121cfa, _0x134de1, _0x342df0, _0x5ece36, _0x3a9c8a) {
            }, _0x552b2e['vertexAttr' + 'ib4fv'] = function (_0x15ef0c, _0x3a29fd) {
            }, _0x552b2e['vertexAttr' + 'ibPointer'] = function (_0x28fc11, _0x2580fc, _0x2d1e56, _0x54258c, _0x11c510, _0x4f6873) {
            }, _0x552b2e['viewport'] = function (_0x3ef533, _0x34ee04, _0x23ba91, _0x26ed13) {
            }, _0x552b2e['configureB' + 'ackBuffer'] = function (_0x401b7f, _0x5a1ee1, _0x4f1464, _0x181ecb, _0x32a34b) {
                _0x181ecb === void 0x0 && (_0x181ecb = !![]), _0x32a34b === void 0x0 && (_0x32a34b = ![]);
            }, _0x552b2e['compressed' + 'TexImage2D'] = function (_0x4026ef) {
            }, _0x552b2e['createVert' + 'exArray'] = function () {
                throw 'not\x20implem' + 'ented';
            }, _0x552b2e['bindVertex' + 'Array'] = function (_0x365285) {
                throw 'not\x20implem' + 'ented';
            }, _0x552b2e['deleteVert' + 'exArray'] = function (_0x15aefa) {
                throw 'not\x20implem' + 'ented';
            }, _0x552b2e['isVertexAr' + 'ray'] = function (_0x551b76) {
                throw 'not\x20implem' + 'ented';
            }, _0x24a675['__init__'] = function (_0x5c2894) {
                _0x24a675['__init_nat' + 'ive'](), laya['webgl']['WebGLConte' + 'xt']['_checkExte' + 'nsions'](_0x5c2894);
                if (!_0x354f16['_isWebGL2']) {
                    _0xa0633a;
                    if (_0x2923dd['_setupVert' + 'exArrayObj' + 'ect']) {
                        if (_0x3592ad['onMiniGame'] || _0x3592ad['onLimixiu'])
                            _0x2923dd['_forceSetu' + 'pVertexArr' + 'ayObject'](_0x5c2894);
                        else
                            _0x2923dd['_setupVert' + 'exArrayObj' + 'ect'](_0x5c2894);
                    }
                    ;
                    var _0x452ef4 = (_0x5c2894['rawgl'] || _0x5c2894)['getExtensi' + 'on']('OES_vertex' + '_array_obj' + 'ect');
                    if (_0x452ef4) {
                        console['log']('EXT:webgl\x20' + 'support\x20OE' + 'S_vertex_a' + 'rray_objec' + 't！');
                        var _0x59bf65 = _0x5c2894;
                        _0x59bf65['createVert' + 'exArray'] = function () {
                            return _0x452ef4['createVert' + 'exArrayOES']();
                        }, _0x59bf65['bindVertex' + 'Array'] = function (_0x4aa45b) {
                            _0x452ef4['bindVertex' + 'ArrayOES'](_0x4aa45b);
                        }, _0x59bf65['deleteVert' + 'exArray'] = function (_0x4f54ad) {
                            _0x452ef4['deleteVert' + 'exArrayOES'](_0x4f54ad);
                        }, _0x59bf65['isVertexAr' + 'ray'] = function (_0x590444) {
                            _0x452ef4['isVertexAr' + 'rayOES'](_0x590444);
                        };
                    }
                }
            }, _0x24a675['_getExtens' + 'ion'] = function (_0x394a4f, _0x2083ed) {
                var _0xe349f8 = _0x24a675['_extention' + 'VendorPref' + 'ixes'];
                for (var _0x5a8e9f in _0xe349f8) {
                    var _0x116875 = _0x394a4f['getExtensi' + 'on'](_0xe349f8[_0x5a8e9f] + _0x2083ed);
                    if (_0x116875)
                        return _0x116875;
                }
                return null;
            }, _0x24a675['_checkExte' + 'nsions'] = function (_0x72f0d4) {
                return _0x24a675['_extTextur' + 'eFilterAni' + 'sotropic'] = _0x24a675['_getExtens' + 'ion'](_0x72f0d4, 'EXT_textur' + 'e_filter_a' + 'nisotropic'), _0x24a675['_compresse' + 'dTextureS3' + 'tc'] = _0x24a675['_getExtens' + 'ion'](_0x72f0d4, 'WEBGL_comp' + 'ressed_tex' + 'ture_s3tc'), _0x24a675['_compresse' + 'dTexturePv' + 'rtc'] = _0x24a675['_getExtens' + 'ion'](_0x72f0d4, 'WEBGL_comp' + 'ressed_tex' + 'ture_pvrtc'), _0x24a675['_compresse' + 'dTextureEt' + 'c1'] = _0x24a675['_getExtens' + 'ion'](_0x72f0d4, 'WEBGL_comp' + 'ressed_tex' + 'ture_etc1'), null;
            }, _0x24a675['__init_nat' + 'ive'] = function () {
                if (!_0x30d89b['isConchApp'])
                    return;
                var _0x520850 = _0x24a675;
                _0x520850['useProgram'] = _0x520850['useProgram' + 'ForNative'], _0x520850['activeText' + 'ure'] = _0x520850['activeText' + 'ureForNati' + 've'], _0x520850['bindTextur' + 'e'] = _0x520850['bindTextur' + 'eForNative'], _0x520850['bindVertex' + 'Array'] = _0x520850['bindVertex' + 'ArrayForNa' + 'tive'], _0x520850['setDepthTe' + 'st'] = _0x520850['setDepthTe' + 'stForNativ' + 'e'], _0x520850['setDepthMa' + 'sk'] = _0x520850['setDepthMa' + 'skForNativ' + 'e'], _0x520850['setDepthFu' + 'nc'] = _0x520850['setDepthFu' + 'ncForNativ' + 'e'], _0x520850['setBlend'] = _0x520850['setBlendFo' + 'rNative'], _0x520850['setBlendFu' + 'nc'] = _0x520850['setBlendFu' + 'ncForNativ' + 'e'], _0x520850['setCullFac' + 'e'] = _0x520850['setCullFac' + 'eForNative'], _0x520850['setFrontFa' + 'ce'] = _0x520850['setFrontFa' + 'ceForNativ' + 'e'], _0x520850['_checkExte' + 'nsions'](_0x3592ad['window']['LayaGLCont' + 'ext']['instance']);
            }, _0x24a675['useProgram'] = function (_0x42fbd1, _0x54b7fe) {
                if (_0x24a675['_useProgra' + 'm'] === _0x54b7fe)
                    return ![];
                return _0x42fbd1['useProgram'](_0x54b7fe), _0x24a675['_useProgra' + 'm'] = _0x54b7fe, !![];
            }, _0x24a675['setDepthTe' + 'st'] = function (_0x380c6f, _0x1f53fb) {
                _0x1f53fb !== _0x24a675['_depthTest'] && (_0x24a675['_depthTest'] = _0x1f53fb, _0x1f53fb ? _0x380c6f['enable'](0xb71) : _0x380c6f['disable'](0xb71));
            }, _0x24a675['setDepthMa' + 'sk'] = function (_0x414f34, _0x2b3121) {
                _0x2b3121 !== _0x24a675['_depthMask'] && (_0x24a675['_depthMask'] = _0x2b3121, _0x414f34['depthMask'](_0x2b3121));
            }, _0x24a675['setDepthFu' + 'nc'] = function (_0xe45837, _0x57e6e0) {
                _0x57e6e0 !== _0x24a675['_depthFunc'] && (_0x24a675['_depthFunc'] = _0x57e6e0, _0xe45837['depthFunc'](_0x57e6e0));
            }, _0x24a675['setBlend'] = function (_0x3049ba, _0x4e7d31) {
                _0x4e7d31 !== _0x24a675['_blend'] && (_0x24a675['_blend'] = _0x4e7d31, _0x4e7d31 ? _0x3049ba['enable'](0xbe2) : _0x3049ba['disable'](0xbe2));
            }, _0x24a675['setBlendFu' + 'nc'] = function (_0x44ba7e, _0x297d96, _0x1fc799) {
                (_0x297d96 !== _0x24a675['_sFactor'] || _0x1fc799 !== _0x24a675['_dFactor']) && (_0x24a675['_sFactor'] = _0x297d96, _0x24a675['_dFactor'] = _0x1fc799, _0x44ba7e['blendFunc'](_0x297d96, _0x1fc799));
            }, _0x24a675['setCullFac' + 'e'] = function (_0x1636ab, _0x19e28c) {
                _0x19e28c !== _0x24a675['_cullFace'] && (_0x24a675['_cullFace'] = _0x19e28c, _0x19e28c ? _0x1636ab['enable'](0xb44) : _0x1636ab['disable'](0xb44));
            }, _0x24a675['setFrontFa' + 'ce'] = function (_0x4c6e0a, _0x44d440) {
                _0x44d440 !== _0x24a675['_frontFace'] && (_0x24a675['_frontFace'] = _0x44d440, _0x4c6e0a['frontFace'](_0x44d440));
            }, _0x24a675['activeText' + 'ure'] = function (_0x588b11, _0x5e916d) {
                _0x24a675['_activedTe' + 'xtureID'] !== _0x5e916d && (_0x588b11['activeText' + 'ure'](_0x5e916d), _0x24a675['_activedTe' + 'xtureID'] = _0x5e916d);
            }, _0x24a675['bindTextur' + 'e'] = function (_0x103145, _0x5b5f12, _0x4dfca1) {
                _0x24a675['_activeTex' + 'tures'][_0x24a675['_activedTe' + 'xtureID'] - 0x84c0] !== _0x4dfca1 && (_0x103145['bindTextur' + 'e'](_0x5b5f12, _0x4dfca1), _0x24a675['_activeTex' + 'tures'][_0x24a675['_activedTe' + 'xtureID'] - 0x84c0] = _0x4dfca1);
            }, _0x24a675['useProgram' + 'ForNative'] = function (_0x5a41a3, _0x5d6d63) {
                return _0x5a41a3['useProgram'](_0x5d6d63), !![];
            }, _0x24a675['setDepthTe' + 'stForNativ' + 'e'] = function (_0x27c218, _0x193260) {
                if (_0x193260)
                    _0x27c218['enable'](0xb71);
                else
                    _0x27c218['disable'](0xb71);
            }, _0x24a675['setDepthMa' + 'skForNativ' + 'e'] = function (_0x40acc0, _0x52a5fc) {
                _0x40acc0['depthMask'](_0x52a5fc);
            }, _0x24a675['setDepthFu' + 'ncForNativ' + 'e'] = function (_0x4b00b1, _0x37b44b) {
                _0x4b00b1['depthFunc'](_0x37b44b);
            }, _0x24a675['setBlendFo' + 'rNative'] = function (_0x5c40a3, _0x1b8411) {
                if (_0x1b8411)
                    _0x5c40a3['enable'](0xbe2);
                else
                    _0x5c40a3['disable'](0xbe2);
            }, _0x24a675['setBlendFu' + 'ncForNativ' + 'e'] = function (_0x1b2ad9, _0x290b8c, _0x21e425) {
                _0x1b2ad9['blendFunc'](_0x290b8c, _0x21e425);
            }, _0x24a675['setCullFac' + 'eForNative'] = function (_0x4365b3, _0x2ca4ab) {
                if (_0x2ca4ab)
                    _0x4365b3['enable'](0xb44);
                else
                    _0x4365b3['disable'](0xb44);
            }, _0x24a675['setFrontFa' + 'ceForNativ' + 'e'] = function (_0x391c21, _0x20ffb3) {
                _0x391c21['frontFace'](_0x20ffb3);
            }, _0x24a675['activeText' + 'ureForNati' + 've'] = function (_0x3a26f, _0x370230) {
                _0x3a26f['activeText' + 'ure'](_0x370230);
            }, _0x24a675['bindTextur' + 'eForNative'] = function (_0x15dae7, _0x13c1fd, _0x5147ef) {
                _0x15dae7['bindTextur' + 'e'](_0x13c1fd, _0x5147ef);
            }, _0x24a675['bindVertex' + 'ArrayForNa' + 'tive'] = function (_0x21dd91, _0x8442b0) {
                _0x21dd91['bindVertex' + 'Array'](_0x8442b0);
            }, _0x24a675['DEPTH_BUFF' + 'ER_BIT'] = 0x100, _0x24a675['STENCIL_BU' + 'FFER_BIT'] = 0x400, _0x24a675['COLOR_BUFF' + 'ER_BIT'] = 0x4000, _0x24a675['POINTS'] = 0x0, _0x24a675['LINES'] = 0x1, _0x24a675['LINE_LOOP'] = 0x2, _0x24a675['LINE_STRIP'] = 0x3, _0x24a675['TRIANGLES'] = 0x4, _0x24a675['TRIANGLE_S' + 'TRIP'] = 0x5, _0x24a675['TRIANGLE_F' + 'AN'] = 0x6, _0x24a675['ZERO'] = 0x0, _0x24a675['ONE'] = 0x1, _0x24a675['SRC_COLOR'] = 0x300, _0x24a675['ONE_MINUS_' + 'SRC_COLOR'] = 0x301, _0x24a675['SRC_ALPHA'] = 0x302, _0x24a675['ONE_MINUS_' + 'SRC_ALPHA'] = 0x303, _0x24a675['DST_ALPHA'] = 0x304, _0x24a675['ONE_MINUS_' + 'DST_ALPHA'] = 0x305, _0x24a675['DST_COLOR'] = 0x306, _0x24a675['ONE_MINUS_' + 'DST_COLOR'] = 0x307, _0x24a675['SRC_ALPHA_' + 'SATURATE'] = 0x308, _0x24a675['FUNC_ADD'] = 0x8006, _0x24a675['BLEND_EQUA' + 'TION'] = 0x8009, _0x24a675['BLEND_EQUA' + 'TION_RGB'] = 0x8009, _0x24a675['BLEND_EQUA' + 'TION_ALPHA'] = 0x883d, _0x24a675['FUNC_SUBTR' + 'ACT'] = 0x800a, _0x24a675['FUNC_REVER' + 'SE_SUBTRAC' + 'T'] = 0x800b, _0x24a675['BLEND_DST_' + 'RGB'] = 0x80c8, _0x24a675['BLEND_SRC_' + 'RGB'] = 0x80c9, _0x24a675['BLEND_DST_' + 'ALPHA'] = 0x80ca, _0x24a675['BLEND_SRC_' + 'ALPHA'] = 0x80cb, _0x24a675['CONSTANT_C' + 'OLOR'] = 0x8001, _0x24a675['ONE_MINUS_' + 'CONSTANT_C' + 'OLOR'] = 0x8002, _0x24a675['CONSTANT_A' + 'LPHA'] = 0x8003, _0x24a675['ONE_MINUS_' + 'CONSTANT_A' + 'LPHA'] = 0x8004, _0x24a675['BLEND_COLO' + 'R'] = 0x8005, _0x24a675['ARRAY_BUFF' + 'ER'] = 0x8892, _0x24a675['ELEMENT_AR' + 'RAY_BUFFER'] = 0x8893, _0x24a675['ARRAY_BUFF' + 'ER_BINDING'] = 0x8894, _0x24a675['ELEMENT_AR' + 'RAY_BUFFER' + '_BINDING'] = 0x8895, _0x24a675['STREAM_DRA' + 'W'] = 0x88e0, _0x24a675['STATIC_DRA' + 'W'] = 0x88e4, _0x24a675['DYNAMIC_DR' + 'AW'] = 0x88e8, _0x24a675['BUFFER_SIZ' + 'E'] = 0x8764, _0x24a675['BUFFER_USA' + 'GE'] = 0x8765, _0x24a675['CURRENT_VE' + 'RTEX_ATTRI' + 'B'] = 0x8626, _0x24a675['FRONT'] = 0x404, _0x24a675['BACK'] = 0x405, _0x24a675['CULL_FACE'] = 0xb44, _0x24a675['FRONT_AND_' + 'BACK'] = 0x408, _0x24a675['BLEND'] = 0xbe2, _0x24a675['DITHER'] = 0xbd0, _0x24a675['STENCIL_TE' + 'ST'] = 0xb90, _0x24a675['DEPTH_TEST'] = 0xb71, _0x24a675['SCISSOR_TE' + 'ST'] = 0xc11, _0x24a675['POLYGON_OF' + 'FSET_FILL'] = 0x8037, _0x24a675['SAMPLE_ALP' + 'HA_TO_COVE' + 'RAGE'] = 0x809e, _0x24a675['SAMPLE_COV' + 'ERAGE'] = 0x80a0, _0x24a675['NO_ERROR'] = 0x0, _0x24a675['INVALID_EN' + 'UM'] = 0x500, _0x24a675['INVALID_VA' + 'LUE'] = 0x501, _0x24a675['INVALID_OP' + 'ERATION'] = 0x502, _0x24a675['OUT_OF_MEM' + 'ORY'] = 0x505, _0x24a675['CW'] = 0x900, _0x24a675['CCW'] = 0x901, _0x24a675['LINE_WIDTH'] = 0xb21, _0x24a675['ALIASED_PO' + 'INT_SIZE_R' + 'ANGE'] = 0x846d, _0x24a675['ALIASED_LI' + 'NE_WIDTH_R' + 'ANGE'] = 0x846e, _0x24a675['CULL_FACE_' + 'MODE'] = 0xb45, _0x24a675['FRONT_FACE'] = 0xb46, _0x24a675['DEPTH_RANG' + 'E'] = 0xb70, _0x24a675['DEPTH_WRIT' + 'EMASK'] = 0xb72, _0x24a675['DEPTH_CLEA' + 'R_VALUE'] = 0xb73, _0x24a675['DEPTH_FUNC'] = 0xb74, _0x24a675['STENCIL_CL' + 'EAR_VALUE'] = 0xb91, _0x24a675['STENCIL_FU' + 'NC'] = 0xb92, _0x24a675['STENCIL_FA' + 'IL'] = 0xb94, _0x24a675['STENCIL_PA' + 'SS_DEPTH_F' + 'AIL'] = 0xb95, _0x24a675['STENCIL_PA' + 'SS_DEPTH_P' + 'ASS'] = 0xb96, _0x24a675['STENCIL_RE' + 'F'] = 0xb97, _0x24a675['STENCIL_VA' + 'LUE_MASK'] = 0xb93, _0x24a675['STENCIL_WR' + 'ITEMASK'] = 0xb98, _0x24a675['STENCIL_BA' + 'CK_FUNC'] = 0x8800, _0x24a675['STENCIL_BA' + 'CK_FAIL'] = 0x8801, _0x24a675['STENCIL_BA' + 'CK_PASS_DE' + 'PTH_FAIL'] = 0x8802, _0x24a675['STENCIL_BA' + 'CK_PASS_DE' + 'PTH_PASS'] = 0x8803, _0x24a675['STENCIL_BA' + 'CK_REF'] = 0x8ca3, _0x24a675['STENCIL_BA' + 'CK_VALUE_M' + 'ASK'] = 0x8ca4, _0x24a675['STENCIL_BA' + 'CK_WRITEMA' + 'SK'] = 0x8ca5, _0x24a675['VIEWPORT'] = 0xba2, _0x24a675['SCISSOR_BO' + 'X'] = 0xc10, _0x24a675['COLOR_CLEA' + 'R_VALUE'] = 0xc22, _0x24a675['COLOR_WRIT' + 'EMASK'] = 0xc23, _0x24a675['UNPACK_ALI' + 'GNMENT'] = 0xcf5, _0x24a675['PACK_ALIGN' + 'MENT'] = 0xd05, _0x24a675['MAX_TEXTUR' + 'E_SIZE'] = 0xd33, _0x24a675['MAX_VIEWPO' + 'RT_DIMS'] = 0xd3a, _0x24a675['SUBPIXEL_B' + 'ITS'] = 0xd50, _0x24a675['RED_BITS'] = 0xd52, _0x24a675['GREEN_BITS'] = 0xd53, _0x24a675['BLUE_BITS'] = 0xd54, _0x24a675['ALPHA_BITS'] = 0xd55, _0x24a675['DEPTH_BITS'] = 0xd56, _0x24a675['STENCIL_BI' + 'TS'] = 0xd57, _0x24a675['POLYGON_OF' + 'FSET_UNITS'] = 0x2a00, _0x24a675['POLYGON_OF' + 'FSET_FACTO' + 'R'] = 0x8038, _0x24a675['TEXTURE_BI' + 'NDING_2D'] = 0x8069, _0x24a675['SAMPLE_BUF' + 'FERS'] = 0x80a8, _0x24a675['SAMPLES'] = 0x80a9, _0x24a675['SAMPLE_COV' + 'ERAGE_VALU' + 'E'] = 0x80aa, _0x24a675['SAMPLE_COV' + 'ERAGE_INVE' + 'RT'] = 0x80ab, _0x24a675['NUM_COMPRE' + 'SSED_TEXTU' + 'RE_FORMATS'] = 0x86a2, _0x24a675['COMPRESSED' + '_TEXTURE_F' + 'ORMATS'] = 0x86a3, _0x24a675['DONT_CARE'] = 0x1100, _0x24a675['FASTEST'] = 0x1101, _0x24a675['NICEST'] = 0x1102, _0x24a675['GENERATE_M' + 'IPMAP_HINT'] = 0x8192, _0x24a675['BYTE'] = 0x1400, _0x24a675['UNSIGNED_B' + 'YTE'] = 0x1401, _0x24a675['SHORT'] = 0x1402, _0x24a675['UNSIGNED_S' + 'HORT'] = 0x1403, _0x24a675['INT'] = 0x1404, _0x24a675['UNSIGNED_I' + 'NT'] = 0x1405, _0x24a675['FLOAT'] = 0x1406, _0x24a675['DEPTH_COMP' + 'ONENT'] = 0x1902, _0x24a675['ALPHA'] = 0x1906, _0x24a675['RGB'] = 0x1907, _0x24a675['RGBA'] = 0x1908, _0x24a675['LUMINANCE'] = 0x1909, _0x24a675['LUMINANCE_' + 'ALPHA'] = 0x190a, _0x24a675['UNSIGNED_S' + 'HORT_4_4_4' + '_4'] = 0x8033, _0x24a675['UNSIGNED_S' + 'HORT_5_5_5' + '_1'] = 0x8034, _0x24a675['UNSIGNED_S' + 'HORT_5_6_5'] = 0x8363, _0x24a675['FRAGMENT_S' + 'HADER'] = 0x8b30, _0x24a675['VERTEX_SHA' + 'DER'] = 0x8b31, _0x24a675['MAX_VERTEX' + '_ATTRIBS'] = 0x8869, _0x24a675['MAX_VERTEX' + '_UNIFORM_V' + 'ECTORS'] = 0x8dfb, _0x24a675['MAX_VARYIN' + 'G_VECTORS'] = 0x8dfc, _0x24a675['MAX_COMBIN' + 'ED_TEXTURE' + '_IMAGE_UNI' + 'TS'] = 0x8b4d, _0x24a675['MAX_VERTEX' + '_TEXTURE_I' + 'MAGE_UNITS'] = 0x8b4c, _0x24a675['MAX_TEXTUR' + 'E_IMAGE_UN' + 'ITS'] = 0x8872, _0x24a675['MAX_FRAGME' + 'NT_UNIFORM' + '_VECTORS'] = 0x8dfd, _0x24a675['SHADER_TYP' + 'E'] = 0x8b4f, _0x24a675['DELETE_STA' + 'TUS'] = 0x8b80, _0x24a675['LINK_STATU' + 'S'] = 0x8b82, _0x24a675['VALIDATE_S' + 'TATUS'] = 0x8b83, _0x24a675['ATTACHED_S' + 'HADERS'] = 0x8b85, _0x24a675['ACTIVE_UNI' + 'FORMS'] = 0x8b86, _0x24a675['ACTIVE_ATT' + 'RIBUTES'] = 0x8b89, _0x24a675['SHADING_LA' + 'NGUAGE_VER' + 'SION'] = 0x8b8c, _0x24a675['CURRENT_PR' + 'OGRAM'] = 0x8b8d, _0x24a675['NEVER'] = 0x200, _0x24a675['LESS'] = 0x201, _0x24a675['EQUAL'] = 0x202, _0x24a675['LEQUAL'] = 0x203, _0x24a675['GREATER'] = 0x204, _0x24a675['NOTEQUAL'] = 0x205, _0x24a675['GEQUAL'] = 0x206, _0x24a675['ALWAYS'] = 0x207, _0x24a675['KEEP'] = 0x1e00, _0x24a675['REPLACE'] = 0x1e01, _0x24a675['INCR'] = 0x1e02, _0x24a675['DECR'] = 0x1e03, _0x24a675['INVERT'] = 0x150a, _0x24a675['INCR_WRAP'] = 0x8507, _0x24a675['DECR_WRAP'] = 0x8508, _0x24a675['VENDOR'] = 0x1f00, _0x24a675['RENDERER'] = 0x1f01, _0x24a675['VERSION'] = 0x1f02, _0x24a675['NEAREST'] = 0x2600, _0x24a675['LINEAR'] = 0x2601, _0x24a675['NEAREST_MI' + 'PMAP_NEARE' + 'ST'] = 0x2700, _0x24a675['LINEAR_MIP' + 'MAP_NEARES' + 'T'] = 0x2701, _0x24a675['NEAREST_MI' + 'PMAP_LINEA' + 'R'] = 0x2702, _0x24a675['LINEAR_MIP' + 'MAP_LINEAR'] = 0x2703, _0x24a675['TEXTURE_MA' + 'G_FILTER'] = 0x2800, _0x24a675['TEXTURE_MI' + 'N_FILTER'] = 0x2801, _0x24a675['TEXTURE_WR' + 'AP_S'] = 0x2802, _0x24a675['TEXTURE_WR' + 'AP_T'] = 0x2803, _0x24a675['TEXTURE_2D'] = 0xde1, _0x24a675['TEXTURE_3D'] = 0x806f, _0x24a675['TEXTURE'] = 0x1702, _0x24a675['TEXTURE_CU' + 'BE_MAP'] = 0x8513, _0x24a675['TEXTURE_BI' + 'NDING_CUBE' + '_MAP'] = 0x8514, _0x24a675['TEXTURE_CU' + 'BE_MAP_POS' + 'ITIVE_X'] = 0x8515, _0x24a675['TEXTURE_CU' + 'BE_MAP_NEG' + 'ATIVE_X'] = 0x8516, _0x24a675['TEXTURE_CU' + 'BE_MAP_POS' + 'ITIVE_Y'] = 0x8517, _0x24a675['TEXTURE_CU' + 'BE_MAP_NEG' + 'ATIVE_Y'] = 0x8518, _0x24a675['TEXTURE_CU' + 'BE_MAP_POS' + 'ITIVE_Z'] = 0x8519, _0x24a675['TEXTURE_CU' + 'BE_MAP_NEG' + 'ATIVE_Z'] = 0x851a, _0x24a675['MAX_CUBE_M' + 'AP_TEXTURE' + '_SIZE'] = 0x851c, _0x24a675['TEXTURE0'] = 0x84c0, _0x24a675['TEXTURE1'] = 0x84c1, _0x24a675['TEXTURE2'] = 0x84c2, _0x24a675['TEXTURE3'] = 0x84c3, _0x24a675['TEXTURE4'] = 0x84c4, _0x24a675['TEXTURE5'] = 0x84c5, _0x24a675['TEXTURE6'] = 0x84c6, _0x24a675['TEXTURE7'] = 0x84c7, _0x24a675['TEXTURE8'] = 0x84c8, _0x24a675['TEXTURE9'] = 0x84c9, _0x24a675['TEXTURE10'] = 0x84ca, _0x24a675['TEXTURE11'] = 0x84cb, _0x24a675['TEXTURE12'] = 0x84cc, _0x24a675['TEXTURE13'] = 0x84cd, _0x24a675['TEXTURE14'] = 0x84ce, _0x24a675['TEXTURE15'] = 0x84cf, _0x24a675['TEXTURE16'] = 0x84d0, _0x24a675['TEXTURE17'] = 0x84d1, _0x24a675['TEXTURE18'] = 0x84d2, _0x24a675['TEXTURE19'] = 0x84d3, _0x24a675['TEXTURE20'] = 0x84d4, _0x24a675['TEXTURE21'] = 0x84d5, _0x24a675['TEXTURE22'] = 0x84d6, _0x24a675['TEXTURE23'] = 0x84d7, _0x24a675['TEXTURE24'] = 0x84d8, _0x24a675['TEXTURE25'] = 0x84d9, _0x24a675['TEXTURE26'] = 0x84da, _0x24a675['TEXTURE27'] = 0x84db, _0x24a675['TEXTURE28'] = 0x84dc, _0x24a675['TEXTURE29'] = 0x84dd, _0x24a675['TEXTURE30'] = 0x84de, _0x24a675['TEXTURE31'] = 0x84df, _0x24a675['ACTIVE_TEX' + 'TURE'] = 0x84e0, _0x24a675['REPEAT'] = 0x2901, _0x24a675['CLAMP_TO_E' + 'DGE'] = 0x812f, _0x24a675['MIRRORED_R' + 'EPEAT'] = 0x8370, _0x24a675['FLOAT_VEC2'] = 0x8b50, _0x24a675['FLOAT_VEC3'] = 0x8b51, _0x24a675['FLOAT_VEC4'] = 0x8b52, _0x24a675['INT_VEC2'] = 0x8b53, _0x24a675['INT_VEC3'] = 0x8b54, _0x24a675['INT_VEC4'] = 0x8b55, _0x24a675['BOOL'] = 0x8b56, _0x24a675['BOOL_VEC2'] = 0x8b57, _0x24a675['BOOL_VEC3'] = 0x8b58, _0x24a675['BOOL_VEC4'] = 0x8b59, _0x24a675['FLOAT_MAT2'] = 0x8b5a, _0x24a675['FLOAT_MAT3'] = 0x8b5b, _0x24a675['FLOAT_MAT4'] = 0x8b5c, _0x24a675['SAMPLER_2D'] = 0x8b5e, _0x24a675['SAMPLER_CU' + 'BE'] = 0x8b60, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'ENABLED'] = 0x8622, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'SIZE'] = 0x8623, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'STRIDE'] = 0x8624, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'TYPE'] = 0x8625, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'NORMALIZED'] = 0x886a, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'POINTER'] = 0x8645, _0x24a675['VERTEX_ATT' + 'RIB_ARRAY_' + 'BUFFER_BIN' + 'DING'] = 0x889f, _0x24a675['COMPILE_ST' + 'ATUS'] = 0x8b81, _0x24a675['LOW_FLOAT'] = 0x8df0, _0x24a675['MEDIUM_FLO' + 'AT'] = 0x8df1, _0x24a675['HIGH_FLOAT'] = 0x8df2, _0x24a675['LOW_INT'] = 0x8df3, _0x24a675['MEDIUM_INT'] = 0x8df4, _0x24a675['HIGH_INT'] = 0x8df5, _0x24a675['FRAMEBUFFE' + 'R'] = 0x8d40, _0x24a675['RENDERBUFF' + 'ER'] = 0x8d41, _0x24a675['RGBA4'] = 0x8056, _0x24a675['RGB5_A1'] = 0x8057, _0x24a675['RGB565'] = 0x8d62, _0x24a675['DEPTH_COMP' + 'ONENT16'] = 0x81a5, _0x24a675['STENCIL_IN' + 'DEX'] = 0x1901, _0x24a675['STENCIL_IN' + 'DEX8'] = 0x8d48, _0x24a675['DEPTH_STEN' + 'CIL'] = 0x84f9, _0x24a675['RENDERBUFF' + 'ER_WIDTH'] = 0x8d42, _0x24a675['RENDERBUFF' + 'ER_HEIGHT'] = 0x8d43, _0x24a675['RENDERBUFF' + 'ER_INTERNA' + 'L_FORMAT'] = 0x8d44, _0x24a675['RENDERBUFF' + 'ER_RED_SIZ' + 'E'] = 0x8d50, _0x24a675['RENDERBUFF' + 'ER_GREEN_S' + 'IZE'] = 0x8d51, _0x24a675['RENDERBUFF' + 'ER_BLUE_SI' + 'ZE'] = 0x8d52, _0x24a675['RENDERBUFF' + 'ER_ALPHA_S' + 'IZE'] = 0x8d53, _0x24a675['RENDERBUFF' + 'ER_DEPTH_S' + 'IZE'] = 0x8d54, _0x24a675['RENDERBUFF' + 'ER_STENCIL' + '_SIZE'] = 0x8d55, _0x24a675['FRAMEBUFFE' + 'R_ATTACHME' + 'NT_OBJECT_' + 'TYPE'] = 0x8cd0, _0x24a675['FRAMEBUFFE' + 'R_ATTACHME' + 'NT_OBJECT_' + 'NAME'] = 0x8cd1, _0x24a675['FRAMEBUFFE' + 'R_ATTACHME' + 'NT_TEXTURE' + '_LEVEL'] = 0x8cd2, _0x24a675['FRAMEBUFFE' + 'R_ATTACHME' + 'NT_TEXTURE' + '_CUBE_MAP_' + 'FACE'] = 0x8cd3, _0x24a675['COLOR_ATTA' + 'CHMENT0'] = 0x8ce0, _0x24a675['DEPTH_ATTA' + 'CHMENT'] = 0x8d00, _0x24a675['STENCIL_AT' + 'TACHMENT'] = 0x8d20, _0x24a675['DEPTH_STEN' + 'CIL_ATTACH' + 'MENT'] = 0x821a, _0x24a675['NONE'] = 0x0, _0x24a675['FRAMEBUFFE' + 'R_COMPLETE'] = 0x8cd5, _0x24a675['FRAMEBUFFE' + 'R_INCOMPLE' + 'TE_ATTACHM' + 'ENT'] = 0x8cd6, _0x24a675['FRAMEBUFFE' + 'R_INCOMPLE' + 'TE_MISSING' + '_ATTACHMEN' + 'T'] = 0x8cd7, _0x24a675['FRAMEBUFFE' + 'R_INCOMPLE' + 'TE_DIMENSI' + 'ONS'] = 0x8cd9, _0x24a675['FRAMEBUFFE' + 'R_UNSUPPOR' + 'TED'] = 0x8cdd, _0x24a675['FRAMEBUFFE' + 'R_BINDING'] = 0x8ca6, _0x24a675['RENDERBUFF' + 'ER_BINDING'] = 0x8ca7, _0x24a675['MAX_RENDER' + 'BUFFER_SIZ' + 'E'] = 0x84e8, _0x24a675['INVALID_FR' + 'AMEBUFFER_' + 'OPERATION'] = 0x506, _0x24a675['UNPACK_FLI' + 'P_Y_WEBGL'] = 0x9240, _0x24a675['UNPACK_PRE' + 'MULTIPLY_A' + 'LPHA_WEBGL'] = 0x9241, _0x24a675['CONTEXT_LO' + 'ST_WEBGL'] = 0x9242, _0x24a675['UNPACK_COL' + 'ORSPACE_CO' + 'NVERSION_W' + 'EBGL'] = 0x9243, _0x24a675['BROWSER_DE' + 'FAULT_WEBG' + 'L'] = 0x9244, _0x24a675['_extTextur' + 'eFilterAni' + 'sotropic'] = null, _0x24a675['_compresse' + 'dTextureS3' + 'tc'] = null, _0x24a675['_compresse' + 'dTexturePv' + 'rtc'] = null, _0x24a675['_compresse' + 'dTextureEt' + 'c1'] = null, _0x24a675['_glTexture' + 'IDs'] = [
                0x84c0,
                0x84c1,
                0x84c2,
                0x84c3,
                0x84c4,
                0x84c5,
                0x84c6,
                0x84c7
            ], _0x24a675['_useProgra' + 'm'] = null, _0x24a675['_depthTest'] = !![], _0x24a675['_depthMask'] = !![], _0x24a675['_blend'] = ![], _0x24a675['_cullFace'] = ![], _0x24a675['_activedTe' + 'xtureID'] = 0x84c0, _0x3a2911(_0x24a675, [
                '_extention' + 'VendorPref' + 'ixes',
                function () {
                    return this['_extention' + 'VendorPref' + 'ixes'] = [
                        '',
                        'WEBKIT_',
                        'MOZ_'
                    ];
                },
                '_activeTex' + 'tures',
                function () {
                    return this['_activeTex' + 'tures'] = new Array(0x8);
                },
                '_depthFunc',
                function () {
                    return this['_depthFunc'] = 0x201;
                },
                '_sFactor',
                function () {
                    return this['_sFactor'] = 0x1;
                },
                '_dFactor',
                function () {
                    return this['_dFactor'] = 0x0;
                },
                '_frontFace',
                function () {
                    return this['_frontFace'] = 0x901;
                }
            ]), _0x24a675;
        }(), _0x423f77 = function () {
            function _0xc57fd5() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = new ParamData(0x4 * 0x4, !![]);
            }
            _0x199b5b(_0xc57fd5, 'laya.layag' + 'l.cmdNativ' + 'e.ClipRect' + 'CmdNative');
            var _0x43bd1d = _0xc57fd5['prototype'];
            return _0x43bd1d['recover'] = function () {
                _0x5460aa['recover']('ClipRectCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0x43bd1d, 'cmdID', function () {
                return 'ClipRect';
            }), _0x3a2bd3(0x0, _0x43bd1d, 'width', function () {
                return 0x0;
            }, function (_0x5d3046) {
            }), _0x3a2bd3(0x0, _0x43bd1d, 'x', function () {
                return 0x0;
            }, function (_0x35245b) {
            }), _0x3a2bd3(0x0, _0x43bd1d, 'y', function () {
                return 0x0;
            }, function (_0x2f43ca) {
            }), _0x3a2bd3(0x0, _0x43bd1d, 'height', function () {
                return 0x0;
            }, function (_0x160ac2) {
            }), _0xc57fd5['create'] = function (_0x16dd04, _0x7a095f, _0x3ed61c, _0x59ca24) {
                var _0x3a0a7b = _0x5460aa['getItemByC' + 'lass']('ClipRectCm' + 'd', _0xc57fd5);
                _0x3a0a7b['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                var _0x40b9ef = _0x3a0a7b['_graphicsC' + 'mdEncoder'], _0x1d8da0 = _0x3a0a7b['_paramData']['_float32Da' + 'ta'];
                _0x1d8da0[0x0] = _0x16dd04, _0x1d8da0[0x1] = _0x7a095f, _0x1d8da0[0x2] = _0x3ed61c, _0x1d8da0[0x3] = _0x59ca24;
                var _0x463fc7 = _0x3a0a7b['_paramData']['getPtrID']();
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3a0a7b['_paramData']), _0x40b9ef['setClipVal' + 'ueEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], _0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], _0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], _0x463fc7), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x40b9ef), _0x3a0a7b;
            }, _0xc57fd5['ID'] = 'ClipRect', _0xc57fd5;
        }(), _0x32f2c3 = function () {
            function _0x25a02c() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_x'] = 0x0, this['_y'] = 0x0, this['_points'] = [], this['_lineColor'] = null, this['_lineWidth'] = NaN, this['lastOriX'] = 0x0, this['lastOriY'] = 0x0, this['tArray'] = [], this['_vertNum'] = 0x0, this['ibBuffer'] = null, this['vbBuffer'] = null, this['_ibSize'] = 0x0, this['_vbSize'] = 0x0, this['_ibArray'] = [], this['_vbArray'] = [];
            }
            _0x199b5b(_0x25a02c, 'laya.layag' + 'l.cmdNativ' + 'e.DrawCurv' + 'esCmdNativ' + 'e');
            var _0x5425ae = _0x25a02c['prototype'];
            return _0x5425ae['_getPoints'] = function (_0x298546) {
                var _0x23fee2 = [];
                this['_points']['push'](_0x298546[0x0]), this['_points']['push'](_0x298546[0x1]);
                var _0x3223ab = 0x2, _0x517a33 = _0x298546['length'];
                while (_0x3223ab < _0x517a33) {
                    this['_quadratic' + 'CurveTo'](_0x23fee2, _0x298546[_0x3223ab++], _0x298546[_0x3223ab++], _0x298546[_0x3223ab++], _0x298546[_0x3223ab++]);
                }
                return _0x23fee2;
            }, _0x5425ae['_quadratic' + 'CurveTo'] = function (_0x6f3cb3, _0x3d4db1, _0x14b286, _0x375fd7, _0x5e251f) {
                var _0x1f6970 = _0x9476b9['I'];
                this['tArray']['length'] == 0x0 ? (this['lastOriX'] = this['_points'][0x0], this['lastOriY'] = this['_points'][0x1]) : (this['lastOriX'] = this['tArray'][this['tArray']['length'] - 0x2], this['lastOriY'] = this['tArray'][this['tArray']['length'] - 0x1]);
                this['tArray'] = _0x1f6970['getBezierP' + 'oints']([
                    this['lastOriX'],
                    this['lastOriY'],
                    _0x3d4db1,
                    _0x14b286,
                    _0x375fd7,
                    _0x5e251f
                ], 0x1e, 0x2);
                for (var _0x3e5d03 = 0x2, _0x14abdf = this['tArray']['length']; _0x3e5d03 < _0x14abdf; _0x3e5d03++) {
                    _0x6f3cb3['push'](this['tArray'][_0x3e5d03]);
                }
            }, _0x5425ae['recover'] = function () {
                this['_lineColor'] = null, this['_points']['length'] = 0x0, this['tArray']['length'] = 0x0, this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x5460aa['recover']('DrawCurves' + 'Cmd', this);
            }, _0x3a2bd3(0x0, _0x5425ae, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x4d78c1) {
                this['_lineColor'] = _0x4d78c1;
                var _0x3ac07c = _0x4b1f30['create'](this['_lineColor']), _0x646b84 = _0x3ac07c['numColor'], _0xdf4892 = this['vbBuffer']['_int32Data'], _0x4c7d78 = 0x0;
                for (var _0x351dd1 = 0x0; _0x351dd1 < this['_vertNum']; _0x351dd1++) {
                    _0x4c7d78++, _0x4c7d78++, _0xdf4892[_0x4c7d78++] = _0x646b84;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x5425ae, 'points', function () {
                return this['_points'];
            }, function (_0x47804d) {
                this['_points']['length'] = 0x0, this['lastOriX'] = 0x0, this['lastOriY'] = 0x0, this['_points'] = this['_getPoints'](_0x47804d), this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x2fe41e['createLine' + '2'](this['_points'], this['_ibArray'], this['lineWidth'], 0x0, this['_vbArray'], ![]);
                var _0x5e71fd = _0x4b1f30['create'](this['_lineColor']), _0x34fe99 = _0x5e71fd['numColor'];
                this['_vertNum'] = this['_points']['length'];
                var _0x3799f6 = this['_vertNum'];
                (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['vbBuffer'] = new ParamData(_0x3799f6 * 0x3 * 0x4, !![]));
                this['_vbSize'] = this['_vertNum'] * 0x3 * 0x4;
                var _0x3a9f7b = this['vbBuffer']['_float32Da' + 'ta'], _0x4fa5ac = this['vbBuffer']['_int32Data'], _0x4d4228 = 0x0;
                for (var _0x27ed56 = 0x0; _0x27ed56 < this['_vertNum']; _0x27ed56++) {
                    _0x3a9f7b[_0x4d4228++] = this['_vbArray'][_0x27ed56 * 0x2] + this['x'], _0x3a9f7b[_0x4d4228++] = this['_vbArray'][_0x27ed56 * 0x2 + 0x1] + this['y'], _0x4fa5ac[_0x4d4228++] = _0x34fe99;
                }
                (!this['ibBuffer'] || this['ibBuffer']['getByteLen' + 'gth']() < (this['_vertNum'] - 0x2) * 0x3 * 0x2) && (this['ibBuffer'] = new ParamData((_0x3799f6 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_ibSize'] = (this['_vertNum'] - 0x2) * 0x3 * 0x2;
                var _0x4f791b = this['ibBuffer']['_int16Data'];
                for (var _0x2b4e29 = 0x0; _0x2b4e29 < (this['_vertNum'] - 0x2) * 0x3; _0x2b4e29++) {
                    _0x4f791b[_0x2b4e29] = this['_ibArray'][_0x2b4e29];
                }
                _0x4fa5ac = this['_paramData']['_int32Data'], _0x4fa5ac[_0x25a02c['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x4fa5ac[_0x25a02c['_PARAM_IB_' + 'SIZE_POS_']] = this['_ibSize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x5425ae, 'cmdID', function () {
                return 'DrawCurves';
            }), _0x3a2bd3(0x0, _0x5425ae, 'x', function () {
                return this['_x'];
            }, function (_0x5af209) {
                this['_x'] = _0x5af209;
                var _0x1c1b0b = this['vbBuffer']['_float32Da' + 'ta'], _0x4cedbb = 0x0;
                for (var _0x22bb40 = 0x0; _0x22bb40 < this['_vertNum']; _0x22bb40++) {
                    _0x1c1b0b[_0x4cedbb++] = this['_vbArray'][_0x22bb40 * 0x2] + this['_x'], _0x4cedbb++, _0x4cedbb++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x5425ae, 'y', function () {
                return this['_y'];
            }, function (_0x41364d) {
                this['_y'] = _0x41364d;
                var _0x5674c6 = this['vbBuffer']['_float32Da' + 'ta'], _0xd37cb5 = 0x0;
                for (var _0x5d108f = 0x0; _0x5d108f < this['_vertNum']; _0x5d108f++) {
                    _0xd37cb5++, _0x5674c6[_0xd37cb5++] = this['_vbArray'][_0x5d108f * 0x2 + 0x1] + this['_y'], _0xd37cb5++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x5425ae, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x50cb6a) {
                this['_lineWidth'] = _0x50cb6a, this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x2fe41e['createLine' + '2'](this['_points'], this['_ibArray'], this['_lineWidth'], 0x0, this['_vbArray'], ![]);
                var _0x2ae914 = this['vbBuffer']['_float32Da' + 'ta'], _0x2f61bb = 0x0;
                for (var _0x4bc274 = 0x0; _0x4bc274 < this['_vertNum']; _0x4bc274++) {
                    _0x2ae914[_0x2f61bb++] = this['_vbArray'][_0x4bc274 * 0x2] + this['x'], _0x2ae914[_0x2f61bb++] = this['_vbArray'][_0x4bc274 * 0x2 + 0x1] + this['y'], _0x2f61bb++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x25a02c['create'] = function (_0x1195f6, _0x133048, _0x7132ba, _0x3db127, _0x5d3739) {
                var _0x249120 = _0x5460aa['getItemByC' + 'lass']('DrawCurves' + 'Cmd', _0x25a02c);
                _0x249120['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_'] && (_0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['setMeshExB' + 'yParamData'](_0x25a02c['_PARAM_VB_' + 'POS_'] * 0x4, _0x25a02c['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x25a02c['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x25a02c['_PARAM_IB_' + 'POS_'] * 0x4, _0x25a02c['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x25a02c['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x25a02c['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']));
                !_0x249120['_paramData'] && (_0x249120['_paramData'] = new ParamData(0x8 * 0x4, !![]));
                {
                    _0x249120['_x'] = _0x1195f6, _0x249120['_y'] = _0x133048, _0x249120['_lineColor'] = _0x3db127, _0x249120['_lineWidth'] = _0x5d3739, _0x249120['_points'] = _0x249120['_getPoints'](_0x7132ba), _0x2fe41e['createLine' + '2'](_0x249120['_points'], _0x249120['_ibArray'], _0x5d3739, 0x0, _0x249120['_vbArray'], ![]);
                    var _0x4a10a1 = _0x4b1f30['create'](_0x3db127), _0x5d6caf = _0x4a10a1['numColor'];
                    _0x249120['_vertNum'] = _0x249120['_points']['length'];
                    var _0x497777 = _0x249120['_vertNum'];
                    (!_0x249120['vbBuffer'] || _0x249120['vbBuffer']['getByteLen' + 'gth']() < _0x249120['_vertNum'] * 0x3 * 0x4) && (_0x249120['vbBuffer'] = new ParamData(_0x497777 * 0x3 * 0x4, !![]));
                    _0x249120['_vbSize'] = _0x249120['_vertNum'] * 0x3 * 0x4;
                    var _0xd4b7e4 = _0x249120['vbBuffer']['_float32Da' + 'ta'], _0x2bed75 = _0x249120['vbBuffer']['_int32Data'], _0x1f1f1c = 0x0;
                    for (var _0x108638 = 0x0; _0x108638 < _0x249120['_vertNum']; _0x108638++) {
                        _0xd4b7e4[_0x1f1f1c++] = _0x249120['_vbArray'][_0x108638 * 0x2] + _0x1195f6, _0xd4b7e4[_0x1f1f1c++] = _0x249120['_vbArray'][_0x108638 * 0x2 + 0x1] + _0x133048, _0x2bed75[_0x1f1f1c++] = _0x5d6caf;
                    }
                    (!_0x249120['ibBuffer'] || _0x249120['ibBuffer']['getByteLen' + 'gth']() < (_0x249120['_vertNum'] - 0x2) * 0x3 * 0x2) && (_0x249120['ibBuffer'] = new ParamData((_0x497777 - 0x2) * 0x3 * 0x2, !![], !![]));
                    _0x249120['_ibSize'] = (_0x249120['_vertNum'] - 0x2) * 0x3 * 0x2;
                    var _0x35e3b4 = _0x249120['ibBuffer']['_int16Data'];
                    for (var _0x496a1f = 0x0; _0x496a1f < (_0x249120['_vertNum'] - 0x2) * 0x3; _0x496a1f++) {
                        _0x35e3b4[_0x496a1f] = _0x249120['_ibArray'][_0x496a1f];
                    }
                }
                ;
                var _0x391ca8 = _0x249120['_paramData']['_float32Da' + 'ta'];
                return _0x2bed75 = _0x249120['_paramData']['_int32Data'], _0x2bed75[0x0] = 0x1, _0x2bed75[_0x25a02c['_PARAM_VB_' + 'POS_']] = _0x249120['vbBuffer']['getPtrID'](), _0x2bed75[_0x25a02c['_PARAM_IB_' + 'POS_']] = _0x249120['ibBuffer']['getPtrID'](), _0x2bed75[_0x25a02c['_PARAM_VB_' + 'SIZE_POS_']] = _0x249120['_vbSize'], _0x2bed75[_0x25a02c['_PARAM_IB_' + 'SIZE_POS_']] = _0x249120['_ibSize'], _0x2bed75[_0x25a02c['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x2bed75[_0x25a02c['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x2bed75[_0x25a02c['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x249120['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x249120['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x249120['_paramData']), _0x249120['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_']['getPtrID'](), _0x249120['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x249120['_graphicsC' + 'mdEncoder']), _0x249120;
            }, _0x25a02c['ID'] = 'DrawCurves', _0x25a02c['_DRAW_CURV' + 'ES_CMD_ENC' + 'ODER_'] = null, _0x25a02c['_PARAM_VB_' + 'POS_'] = 0x1, _0x25a02c['_PARAM_IB_' + 'POS_'] = 0x2, _0x25a02c['_PARAM_VB_' + 'SIZE_POS_'] = 0x3, _0x25a02c['_PARAM_IB_' + 'SIZE_POS_'] = 0x4, _0x25a02c['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0x5, _0x25a02c['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0x6, _0x25a02c['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0x7, _0x25a02c;
        }(), _0x37b54c = function () {
            function _0x969f87() {
                this['char'] = '', this['tex'] = null, this['deleted'] = ![], this['pos'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['bmpWidth'] = 0x0, this['bmpHeight'] = 0x0, this['orix'] = 0x0, this['oriy'] = 0x0, this['touchTick'] = 0x0, this['isSpace'] = ![], this['uv'] = new Array(0x8);
            }
            _0x199b5b(_0x969f87, 'laya.webgl' + '.resource.' + 'CharRender' + 'Info');
            var _0x56ff2d = _0x969f87['prototype'];
            return _0x56ff2d['touch'] = function () {
                var _0x2bd15b = _0x29f3e7['loopCount'];
                this['touchTick'] != _0x2bd15b && this['tex']['touchRect'](this, _0x2bd15b), this['touchTick'] = _0x2bd15b;
            }, _0x969f87;
        }(), _0x3e7575 = function () {
            function _0x5314f0() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['_texture'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_width'] = NaN, this['_height'] = NaN;
            }
            _0x199b5b(_0x5314f0, 'laya.layag' + 'l.cmdNativ' + 'e.DrawCanv' + 'asCmdNativ' + 'e');
            var _0x5628c3 = _0x5314f0['prototype'];
            return _0x5628c3['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, _0x5460aa['recover']('DrawCanvas' + 'Cmd', this);
            }, _0x3a2bd3(0x0, _0x5628c3, 'cmdID', function () {
                return 'DrawCanvas';
            }), _0x3a2bd3(0x0, _0x5628c3, 'y', function () {
                return this['_y'];
            }, function (_0x3f5115) {
                this['_y'] = _0x3f5115;
                var _0x29959e = this['_paramData']['_float32Da' + 'ta'];
                _0x29959e[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x29959e[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x29959e[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x29959e[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x29959e[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x1] = _0x3f5115 + 0x10, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x5628c3, 'texture', function () {
                return this['_texture'];
            }, function (_0x387f00) {
                this['_texture'] = _0x387f00, this['_paramData']['_int32Data'][_0x5314f0['_PARAM_TEX' + 'TURE_POS_']] = this['_texture']['_getSource']()['id'];
                var _0x2cdeb6 = this['_paramData']['_float32Da' + 'ta'], _0x55801f = _0x4a9aac['flipyuv'];
                _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x2] = _0x55801f[0x0], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x3] = _0x55801f[0x1], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x8] = _0x55801f[0x2], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x9] = _0x55801f[0x3], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xe] = _0x55801f[0x4], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xf] = _0x55801f[0x5], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x14] = _0x55801f[0x6], _0x2cdeb6[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x15] = _0x55801f[0x7], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x5628c3, 'width', function () {
                return this['_width'];
            }, function (_0x28c60e) {
                this['_width'] = _0x28c60e;
                var _0x4891ee = this['_paramData']['_float32Da' + 'ta'];
                _0x4891ee[_0x5314f0['_PARAM_VB_' + 'POS_']] = this['_x'], _0x4891ee[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x4891ee[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x4891ee[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x4891ee[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x2] = _0x28c60e - 0x10 * 0x2, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x5628c3, 'x', function () {
                return this['_x'];
            }, function (_0x380e6d) {
                this['_x'] = _0x380e6d;
                var _0x28d6d3 = this['_paramData']['_float32Da' + 'ta'];
                _0x28d6d3[_0x5314f0['_PARAM_VB_' + 'POS_']] = this['_x'], _0x28d6d3[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x28d6d3[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x28d6d3[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x28d6d3[_0x5314f0['_PARAM_CLI' + 'P_SIZE']] = _0x380e6d + 0x10, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x5628c3, 'height', function () {
                return this['_height'];
            }, function (_0x3a3fab) {
                this['_height'] = _0x3a3fab;
                var _0x41369d = this['_paramData']['_float32Da' + 'ta'];
                _0x41369d[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x41369d[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x41369d[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x41369d[_0x5314f0['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x41369d[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x3] = _0x3a3fab - 0x10 * 0x2, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x5314f0['create'] = function (_0x2b9bea, _0x26c95e, _0x5d8e62, _0x226c10, _0x101da8) {
                var _0x4c5a82 = _0x5460aa['getItemByC' + 'lass']('DrawCanvas' + 'Cmd', _0x5314f0);
                _0x4c5a82['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                _0x5314f0['createComm' + 'andEncoder']();
                !_0x4c5a82['_paramData'] && (_0x4c5a82['_paramData'] = new ParamData(0x21 * 0x4, !![]));
                _0x4c5a82['_texture'] = _0x2b9bea, _0x4c5a82['_x'] = _0x26c95e, _0x4c5a82['_y'] = _0x5d8e62, _0x4c5a82['_width'] = _0x226c10, _0x4c5a82['_height'] = _0x101da8, _0x5314f0['setParamDa' + 'ta'](_0x4c5a82['_paramData'], _0x2b9bea, _0x26c95e, _0x5d8e62, _0x226c10, _0x101da8);
                var _0x344bf6 = _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['getPtrID'](), _0x2d314d = _0x4c5a82['_paramData']['getPtrID']();
                return _0x4c5a82['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x344bf6, _0x2d314d, -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x4c5a82['_graphicsC' + 'mdEncoder']), _0x4c5a82;
            }, _0x5314f0['createComm' + 'andEncoder'] = function () {
                !_0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_'] && (_0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xac, 0x20, !![]), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['uniformTex' + 'tureByPara' + 'mData'](0x0, 0x1 * 0x4, _0x5314f0['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['setRectMes' + 'hByParamDa' + 'ta'](0x3 * 0x4, _0x5314f0['_PARAM_VB_' + 'POS_'] * 0x4, 0x4 * 0x4), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']));
            }, _0x5314f0['setParamDa' + 'ta'] = function (_0xdc6ee5, _0x585c1e, _0x21415f, _0x3dca98, _0x181f82, _0x12f3b0) {
                var _0x201b25 = _0xdc6ee5['_float32Da' + 'ta'], _0x50a597 = _0xdc6ee5['_int32Data'];
                _0x50a597[0x0] = 0x3, _0x50a597[0x1] = 0x84c0, _0x50a597[_0x5314f0['_PARAM_TEX' + 'TURE_POS_']] = _0x585c1e['_getSource']()['id'], _0x50a597[0x3] = 0x1, _0x50a597[0x4] = 0x18 * 0x4;
                var _0x287ec7 = _0x181f82 != 0x0 ? _0x181f82 : _0x585c1e['width'], _0x1f2a3d = _0x12f3b0 != 0x0 ? _0x12f3b0 : _0x585c1e['height'], _0x240187 = _0x4a9aac['flipyuv'], _0x256f64 = _0x5314f0['_PARAM_VB_' + 'POS_'];
                _0x201b25[_0x256f64++] = _0x21415f, _0x201b25[_0x256f64++] = _0x3dca98, _0x201b25[_0x256f64++] = _0x240187[0x0], _0x201b25[_0x256f64++] = _0x240187[0x1], _0x50a597[_0x256f64++] = 0xffffffff, _0x50a597[_0x256f64++] = 0xffffffff, _0x201b25[_0x256f64++] = _0x21415f + _0x287ec7, _0x201b25[_0x256f64++] = _0x3dca98, _0x201b25[_0x256f64++] = _0x240187[0x2], _0x201b25[_0x256f64++] = _0x240187[0x3], _0x50a597[_0x256f64++] = 0xffffffff, _0x50a597[_0x256f64++] = 0xffffffff, _0x201b25[_0x256f64++] = _0x21415f + _0x287ec7, _0x201b25[_0x256f64++] = _0x3dca98 + _0x1f2a3d, _0x201b25[_0x256f64++] = _0x240187[0x4], _0x201b25[_0x256f64++] = _0x240187[0x5], _0x50a597[_0x256f64++] = 0xffffffff, _0x50a597[_0x256f64++] = 0xffffffff, _0x201b25[_0x256f64++] = _0x21415f, _0x201b25[_0x256f64++] = _0x3dca98 + _0x1f2a3d, _0x201b25[_0x256f64++] = _0x240187[0x6], _0x201b25[_0x256f64++] = _0x240187[0x7], _0x50a597[_0x256f64++] = 0xffffffff, _0x50a597[_0x256f64++] = 0xffffffff, _0x201b25[_0x5314f0['_PARAM_CLI' + 'P_SIZE']] = _0x21415f + 0x10, _0x201b25[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x1] = _0x3dca98 + 0x10, _0x201b25[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x2] = _0x181f82 - 0x10 * 0x2, _0x201b25[_0x5314f0['_PARAM_CLI' + 'P_SIZE'] + 0x3] = _0x12f3b0 - 0x10 * 0x2, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xdc6ee5);
            }, _0x5314f0['ID'] = 'DrawCanvas', _0x5314f0['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_'] = null, _0x5314f0['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0x5314f0['_PARAM_VB_' + 'POS_'] = 0x5, _0x5314f0['_PARAM_CLI' + 'P_SIZE'] = 0x1d, _0x5314f0;
        }(), _0x1b6ff9 = function () {
            function _0x4cce76() {
                this['_mat'] = new _0x4fb671();
            }
            _0x199b5b(_0x4cce76, 'laya.webgl' + '.canvas.sa' + 've.SaveTra' + 'nslate');
            var _0x3353da = _0x4cce76['prototype'];
            return _0x4a6519['imps'](_0x3353da, { 'laya.webgl.canvas.save.ISaveData': !![] }), _0x3353da['isSaveMark'] = function () {
                return ![];
            }, _0x3353da['restore'] = function (_0x4fb626) {
                this['_mat']['copyTo'](_0x4fb626['_curMat']), _0x4cce76['POOL'][_0x4cce76['POOL']['_length']++] = this;
            }, _0x4cce76['save'] = function (_0x3d9c70) {
                var _0x86b8d3 = _0x4cce76['POOL'], _0x23f5ca = _0x86b8d3['_length'] > 0x0 ? _0x86b8d3[--_0x86b8d3['_length']] : new _0x4cce76();
                _0x3d9c70['_curMat']['copyTo'](_0x23f5ca['_mat']);
                var _0x138213 = _0x3d9c70['_save'];
                _0x138213[_0x138213['_length']++] = _0x23f5ca;
            }, _0x4cce76['POOL'] = _0x2f38dd['_createArr' + 'ay'](), _0x4cce76;
        }(), _0x1f8145 = function () {
            function _0x33efa3() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_matrix'] = null, this['_paramData'] = new ParamData(0x8 * 0x4, !![]);
            }
            _0x199b5b(_0x33efa3, 'laya.layag' + 'l.cmdNativ' + 'e.Transfor' + 'mCmdNative');
            var _0x2accb5 = _0x33efa3['prototype'];
            return _0x2accb5['recover'] = function () {
                this['_matrix'] = null, _0x5460aa['recover']('TransformC' + 'md', this);
            }, _0x3a2bd3(0x0, _0x2accb5, 'cmdID', function () {
                return 'Transform';
            }), _0x3a2bd3(0x0, _0x2accb5, 'matrix', function () {
                return this['_matrix'];
            }, function (_0x4ed3ae) {
                this['_matrix'] = _0x4ed3ae;
                var _0x40680f = this['_paramData']['_float32Da' + 'ta'];
                _0x40680f[0x0] = this['_matrix']['a'], _0x40680f[0x1] = this['_matrix']['b'], _0x40680f[0x2] = this['_matrix']['c'], _0x40680f[0x3] = this['_matrix']['d'], _0x40680f[0x4] = this['_matrix']['tx'], _0x40680f[0x5] = this['_matrix']['ty'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2accb5, 'pivotX', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x6];
            }, function (_0x507367) {
                this['_paramData']['_float32Da' + 'ta'][0x6] = _0x507367, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x2accb5, 'pivotY', function () {
                return this['_paramData']['_float32Da' + 'ta'][0x7];
            }, function (_0x286b2e) {
                this['_paramData']['_float32Da' + 'ta'][0x7] = _0x286b2e, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x33efa3['create'] = function (_0x186fed, _0x44de10, _0x519bfb) {
                var _0x2906b1 = _0x5460aa['getItemByC' + 'lass']('TransformC' + 'md', _0x33efa3), _0x5159da = _0x2906b1['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'], _0x1b810a = _0x2906b1['_paramData']['_float32Da' + 'ta'];
                _0x1b810a[0x0] = _0x186fed['a'], _0x1b810a[0x1] = _0x186fed['b'], _0x1b810a[0x2] = _0x186fed['c'], _0x1b810a[0x3] = _0x186fed['d'], _0x1b810a[0x4] = _0x186fed['tx'], _0x1b810a[0x5] = _0x186fed['ty'], _0x1b810a[0x6] = _0x44de10, _0x1b810a[0x7] = _0x519bfb, _0x2906b1['_matrix'] = _0x186fed;
                var _0xe4fb22 = _0x2906b1['_paramData']['getPtrID']();
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x2906b1['_paramData']), _0x5159da['setGlobalV' + 'alueEx'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0xe, _0xe4fb22, 0x0), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x5159da), _0x2906b1;
            }, _0x33efa3['ID'] = 'Transform', _0x33efa3;
        }(), _0x5b219b = function () {
            function _0x4b2908() {
            }
            return _0x199b5b(_0x4b2908, 'laya.layag' + 'l.ConchCmd' + 'Replace'), _0x4b2908['__init__'] = function () {
                var _0x297601 = laya['display']['cmd'], _0x544e3b = laya['layagl']['cmdNative'], _0x3176a5;
                for (_0x3176a5 in _0x297601) {
                    _0x544e3b[_0x3176a5 + 'Native'] && (_0x297601[_0x3176a5]['create'] = _0x544e3b[_0x3176a5 + 'Native']['create']);
                }
            }, _0x4b2908;
        }(), _0x19c1d3 = function () {
            function _0x261c0e() {
                this['_mesh'] = null, this['_startIdx'] = 0x0, this['_numEle'] = 0x0, this['shaderValu' + 'e'] = null, this['blendType'] = 0x0, this['_ref'] = 0x1, this['srcRT'] = null, this['_key'] = new _0x2e7190();
            }
            _0x199b5b(_0x261c0e, 'laya.webgl' + '.submit.Su' + 'bmitTarget');
            var _0xf37cc0 = _0x261c0e['prototype'];
            return _0x4a6519['imps'](_0xf37cc0, { 'laya.webgl.submit.ISubmit': !![] }), _0xf37cc0['renderSubm' + 'it'] = function () {
                var _0x31497d = _0x354f16['mainContex' + 't'];
                this['_mesh']['useMesh'](_0x31497d);
                var _0x4283c9 = this['srcRT'];
                return _0x4283c9 && (this['shaderValu' + 'e']['texture'] = _0x4283c9['_getSource'](), this['shaderValu' + 'e']['upload'](), this['blend'](), _0x29f3e7['renderBatc' + 'h']++, _0x29f3e7['trianglesF' + 'aces'] += this['_numEle'] / 0x3, _0x354f16['mainContex' + 't']['drawElemen' + 'ts'](0x4, this['_numEle'], 0x1403, this['_startIdx'])), 0x1;
            }, _0xf37cc0['blend'] = function () {
                if (_0x5c9116['activeBlen' + 'dFunction'] !== _0x5c9116['fns'][this['blendType']]) {
                    var _0x20956a = _0x354f16['mainContex' + 't'];
                    _0x20956a['enable'](0xbe2), _0x5c9116['fns'][this['blendType']](_0x20956a), _0x5c9116['activeBlen' + 'dFunction'] = _0x5c9116['fns'][this['blendType']];
                }
            }, _0xf37cc0['getRenderT' + 'ype'] = function () {
                return 0x0;
            }, _0xf37cc0['releaseRen' + 'der'] = function () {
                if (--this['_ref'] < 0x1) {
                    var _0x3c5dab = _0x261c0e['POOL'];
                    _0x3c5dab[_0x3c5dab['_length']++] = this;
                }
            }, _0xf37cc0['reUse'] = function (_0x1b31aa, _0x4fa1ba) {
                return this['_startIdx'] = _0x4fa1ba, this['_ref']++, _0x4fa1ba;
            }, _0x261c0e['create'] = function (_0x236fb0, _0x504b32, _0x2d56e0, _0x349640) {
                var _0x434273 = _0x261c0e['POOL']['_length'] ? _0x261c0e['POOL'][--_0x261c0e['POOL']['_length']] : new _0x261c0e();
                _0x434273['_mesh'] = _0x504b32, _0x434273['srcRT'] = _0x349640, _0x434273['_startIdx'] = _0x504b32['indexNum'] * _0x39d4bb['BYTES_PIDX'], _0x434273['_ref'] = 0x1, _0x434273['_key']['clear'](), _0x434273['_numEle'] = 0x0, _0x434273['blendType'] = _0x236fb0['_nBlendTyp' + 'e'], _0x434273['_key']['blendShade' + 'r'] = _0x434273['blendType'], _0x434273['shaderValu' + 'e'] = _0x2d56e0, _0x434273['shaderValu' + 'e']['setValue'](_0x236fb0['_shader2D']);
                if (_0x236fb0['_colorFile' + 'r']) {
                    var _0x81d054 = _0x236fb0['_colorFile' + 'r'];
                    _0x2d56e0['defines']['add'](_0x81d054['type']), _0x2d56e0['colorMat'] = _0x81d054['_mat'], _0x2d56e0['colorAlpha'] = _0x81d054['_alpha'];
                }
                return _0x434273;
            }, _0x261c0e['POOL'] = (_0x261c0e['POOL'] = [], _0x261c0e['POOL']['_length'] = 0x0, _0x261c0e['POOL']), _0x261c0e;
        }(), _0x576d8c = function () {
            function _0x312754() {
            }
            return _0x199b5b(_0x312754, 'laya.webgl' + '.shapes.Ea' + 'rcut'), _0x312754['earcut'] = function (_0x21a669, _0x2e087e, _0x5d8821) {
                _0x5d8821 = _0x5d8821 || 0x2;
                var _0x365c4d = _0x2e087e && _0x2e087e['length'], _0x418c91 = _0x365c4d ? _0x2e087e[0x0] * _0x5d8821 : _0x21a669['length'], _0x7c6c84 = _0x312754['linkedList'](_0x21a669, 0x0, _0x418c91, _0x5d8821, !![]), _0x5d4a13 = [];
                if (!_0x7c6c84)
                    return _0x5d4a13;
                var _0x12392e, _0x31313c, _0x1d7b9f, _0x1ce965, _0x333c8c, _0x6817a3, _0xc8212e;
                if (_0x365c4d)
                    _0x7c6c84 = _0x312754['eliminateH' + 'oles'](_0x21a669, _0x2e087e, _0x7c6c84, _0x5d8821);
                if (_0x21a669['length'] > 0x50 * _0x5d8821) {
                    _0x12392e = _0x1d7b9f = _0x21a669[0x0], _0x31313c = _0x1ce965 = _0x21a669[0x1];
                    for (var _0x215e62 = _0x5d8821; _0x215e62 < _0x418c91; _0x215e62 += _0x5d8821) {
                        _0x333c8c = _0x21a669[_0x215e62], _0x6817a3 = _0x21a669[_0x215e62 + 0x1];
                        if (_0x333c8c < _0x12392e)
                            _0x12392e = _0x333c8c;
                        if (_0x6817a3 < _0x31313c)
                            _0x31313c = _0x6817a3;
                        if (_0x333c8c > _0x1d7b9f)
                            _0x1d7b9f = _0x333c8c;
                        if (_0x6817a3 > _0x1ce965)
                            _0x1ce965 = _0x6817a3;
                    }
                    _0xc8212e = Math['max'](_0x1d7b9f - _0x12392e, _0x1ce965 - _0x31313c), _0xc8212e = _0xc8212e !== 0x0 ? 0x1 / _0xc8212e : 0x0;
                }
                return _0x312754['earcutLink' + 'ed'](_0x7c6c84, _0x5d4a13, _0x5d8821, _0x12392e, _0x31313c, _0xc8212e), _0x5d4a13;
            }, _0x312754['linkedList'] = function (_0xaf3d3b, _0x58df9b, _0xc731eb, _0x58b9ab, _0xeb37e5) {
                var _0x566b54, _0x131422;
                if (_0xeb37e5 === _0x312754['signedArea'](_0xaf3d3b, _0x58df9b, _0xc731eb, _0x58b9ab) > 0x0) {
                    for (_0x566b54 = _0x58df9b; _0x566b54 < _0xc731eb; _0x566b54 += _0x58b9ab)
                        _0x131422 = _0x312754['insertNode'](_0x566b54, _0xaf3d3b[_0x566b54], _0xaf3d3b[_0x566b54 + 0x1], _0x131422);
                } else {
                    for (_0x566b54 = _0xc731eb - _0x58b9ab; _0x566b54 >= _0x58df9b; _0x566b54 -= _0x58b9ab)
                        _0x131422 = _0x312754['insertNode'](_0x566b54, _0xaf3d3b[_0x566b54], _0xaf3d3b[_0x566b54 + 0x1], _0x131422);
                }
                return _0x131422 && _0x312754['equals'](_0x131422, _0x131422['next']) && (_0x312754['removeNode'](_0x131422), _0x131422 = _0x131422['next']), _0x131422;
            }, _0x312754['filterPoin' + 'ts'] = function (_0x5c57e1, _0x30a5cf) {
                if (!_0x5c57e1)
                    return _0x5c57e1;
                if (!_0x30a5cf)
                    _0x30a5cf = _0x5c57e1;
                var _0x4ab141 = _0x5c57e1, _0x27d152;
                do {
                    _0x27d152 = ![];
                    if (!_0x4ab141['steiner'] && (_0x312754['equals'](_0x4ab141, _0x4ab141['next']) || _0x312754['area'](_0x4ab141['prev'], _0x4ab141, _0x4ab141['next']) === 0x0)) {
                        _0x312754['removeNode'](_0x4ab141), _0x4ab141 = _0x30a5cf = _0x4ab141['prev'];
                        if (_0x4ab141 === _0x4ab141['next'])
                            break;
                        _0x27d152 = !![];
                    } else
                        _0x4ab141 = _0x4ab141['next'];
                } while (_0x27d152 || _0x4ab141 !== _0x30a5cf);
                return _0x30a5cf;
            }, _0x312754['earcutLink' + 'ed'] = function (_0x406886, _0x1453ee, _0x4b2571, _0x5bcc53, _0x2c0c8c, _0x3d238f, _0x2b0c4c) {
                if (!_0x406886)
                    return;
                if (!_0x2b0c4c && _0x3d238f)
                    _0x312754['indexCurve'](_0x406886, _0x5bcc53, _0x2c0c8c, _0x3d238f);
                var _0x2f8eb2 = _0x406886, _0x2c3b51, _0x24cdeb;
                while (_0x406886['prev'] !== _0x406886['next']) {
                    _0x2c3b51 = _0x406886['prev'], _0x24cdeb = _0x406886['next'];
                    if (_0x3d238f ? _0x312754['isEarHashe' + 'd'](_0x406886, _0x5bcc53, _0x2c0c8c, _0x3d238f) : _0x312754['isEar'](_0x406886)) {
                        _0x1453ee['push'](_0x2c3b51['i'] / _0x4b2571), _0x1453ee['push'](_0x406886['i'] / _0x4b2571), _0x1453ee['push'](_0x24cdeb['i'] / _0x4b2571), _0x312754['removeNode'](_0x406886), _0x406886 = _0x24cdeb['next'], _0x2f8eb2 = _0x24cdeb['next'];
                        continue;
                    }
                    _0x406886 = _0x24cdeb;
                    if (_0x406886 === _0x2f8eb2) {
                        if (!_0x2b0c4c)
                            _0x312754['earcutLink' + 'ed'](_0x312754['filterPoin' + 'ts'](_0x406886, null), _0x1453ee, _0x4b2571, _0x5bcc53, _0x2c0c8c, _0x3d238f, 0x1);
                        else {
                            if (_0x2b0c4c === 0x1)
                                _0x406886 = _0x312754['cureLocalI' + 'ntersectio' + 'ns'](_0x406886, _0x1453ee, _0x4b2571), _0x312754['earcutLink' + 'ed'](_0x406886, _0x1453ee, _0x4b2571, _0x5bcc53, _0x2c0c8c, _0x3d238f, 0x2);
                            else
                                _0x2b0c4c === 0x2 && _0x312754['splitEarcu' + 't'](_0x406886, _0x1453ee, _0x4b2571, _0x5bcc53, _0x2c0c8c, _0x3d238f);
                        }
                        break;
                    }
                }
            }, _0x312754['isEar'] = function (_0x4d33b0) {
                var _0x432506 = _0x4d33b0['prev'], _0x298832 = _0x4d33b0, _0x31f918 = _0x4d33b0['next'];
                if (_0x312754['area'](_0x432506, _0x298832, _0x31f918) >= 0x0)
                    return ![];
                var _0x3b3148 = _0x4d33b0['next']['next'];
                while (_0x3b3148 !== _0x4d33b0['prev']) {
                    if (_0x312754['pointInTri' + 'angle'](_0x432506['x'], _0x432506['y'], _0x298832['x'], _0x298832['y'], _0x31f918['x'], _0x31f918['y'], _0x3b3148['x'], _0x3b3148['y']) && _0x312754['area'](_0x3b3148['prev'], _0x3b3148, _0x3b3148['next']) >= 0x0)
                        return ![];
                    _0x3b3148 = _0x3b3148['next'];
                }
                return !![];
            }, _0x312754['isEarHashe' + 'd'] = function (_0x246deb, _0x16e191, _0x4200af, _0x1cf68a) {
                var _0x1409ea = _0x246deb['prev'], _0x40f3c1 = _0x246deb, _0x4bf586 = _0x246deb['next'];
                if (_0x312754['area'](_0x1409ea, _0x40f3c1, _0x4bf586) >= 0x0)
                    return ![];
                var _0x37410a = _0x1409ea['x'] < _0x40f3c1['x'] ? _0x1409ea['x'] < _0x4bf586['x'] ? _0x1409ea['x'] : _0x4bf586['x'] : _0x40f3c1['x'] < _0x4bf586['x'] ? _0x40f3c1['x'] : _0x4bf586['x'], _0x5abd85 = _0x1409ea['y'] < _0x40f3c1['y'] ? _0x1409ea['y'] < _0x4bf586['y'] ? _0x1409ea['y'] : _0x4bf586['y'] : _0x40f3c1['y'] < _0x4bf586['y'] ? _0x40f3c1['y'] : _0x4bf586['y'], _0x4f3a10 = _0x1409ea['x'] > _0x40f3c1['x'] ? _0x1409ea['x'] > _0x4bf586['x'] ? _0x1409ea['x'] : _0x4bf586['x'] : _0x40f3c1['x'] > _0x4bf586['x'] ? _0x40f3c1['x'] : _0x4bf586['x'], _0x44e380 = _0x1409ea['y'] > _0x40f3c1['y'] ? _0x1409ea['y'] > _0x4bf586['y'] ? _0x1409ea['y'] : _0x4bf586['y'] : _0x40f3c1['y'] > _0x4bf586['y'] ? _0x40f3c1['y'] : _0x4bf586['y'], _0x1f6e95 = _0x312754['zOrder'](_0x37410a, _0x5abd85, _0x16e191, _0x4200af, _0x1cf68a), _0x5ac9ad = _0x312754['zOrder'](_0x4f3a10, _0x44e380, _0x16e191, _0x4200af, _0x1cf68a), _0x14e8af = _0x246deb['nextZ'];
                while (_0x14e8af && _0x14e8af['z'] <= _0x5ac9ad) {
                    if (_0x14e8af !== _0x246deb['prev'] && _0x14e8af !== _0x246deb['next'] && _0x312754['pointInTri' + 'angle'](_0x1409ea['x'], _0x1409ea['y'], _0x40f3c1['x'], _0x40f3c1['y'], _0x4bf586['x'], _0x4bf586['y'], _0x14e8af['x'], _0x14e8af['y']) && _0x312754['area'](_0x14e8af['prev'], _0x14e8af, _0x14e8af['next']) >= 0x0)
                        return ![];
                    _0x14e8af = _0x14e8af['nextZ'];
                }
                _0x14e8af = _0x246deb['prevZ'];
                while (_0x14e8af && _0x14e8af['z'] >= _0x1f6e95) {
                    if (_0x14e8af !== _0x246deb['prev'] && _0x14e8af !== _0x246deb['next'] && _0x312754['pointInTri' + 'angle'](_0x1409ea['x'], _0x1409ea['y'], _0x40f3c1['x'], _0x40f3c1['y'], _0x4bf586['x'], _0x4bf586['y'], _0x14e8af['x'], _0x14e8af['y']) && _0x312754['area'](_0x14e8af['prev'], _0x14e8af, _0x14e8af['next']) >= 0x0)
                        return ![];
                    _0x14e8af = _0x14e8af['prevZ'];
                }
                return !![];
            }, _0x312754['cureLocalI' + 'ntersectio' + 'ns'] = function (_0x3ba4c7, _0x12d947, _0x1a32fb) {
                var _0x3611f2 = _0x3ba4c7;
                do {
                    var _0x50abb4 = _0x3611f2['prev'], _0x4f6b71 = _0x3611f2['next']['next'];
                    !_0x312754['equals'](_0x50abb4, _0x4f6b71) && _0x312754['intersects'](_0x50abb4, _0x3611f2, _0x3611f2['next'], _0x4f6b71) && _0x312754['locallyIns' + 'ide'](_0x50abb4, _0x4f6b71) && _0x312754['locallyIns' + 'ide'](_0x4f6b71, _0x50abb4) && (_0x12d947['push'](_0x50abb4['i'] / _0x1a32fb), _0x12d947['push'](_0x3611f2['i'] / _0x1a32fb), _0x12d947['push'](_0x4f6b71['i'] / _0x1a32fb), _0x312754['removeNode'](_0x3611f2), _0x312754['removeNode'](_0x3611f2['next']), _0x3611f2 = _0x3ba4c7 = _0x4f6b71), _0x3611f2 = _0x3611f2['next'];
                } while (_0x3611f2 !== _0x3ba4c7);
                return _0x3611f2;
            }, _0x312754['splitEarcu' + 't'] = function (_0x2d7db5, _0x485984, _0x362074, _0x3e856b, _0x31563f, _0x443e69) {
                var _0x44c341 = _0x2d7db5;
                do {
                    var _0xb70cf3 = _0x44c341['next']['next'];
                    while (_0xb70cf3 !== _0x44c341['prev']) {
                        if (_0x44c341['i'] !== _0xb70cf3['i'] && _0x312754['isValidDia' + 'gonal'](_0x44c341, _0xb70cf3)) {
                            var _0x19ebc2 = _0x312754['splitPolyg' + 'on'](_0x44c341, _0xb70cf3);
                            _0x44c341 = _0x312754['filterPoin' + 'ts'](_0x44c341, _0x44c341['next']), _0x19ebc2 = _0x312754['filterPoin' + 'ts'](_0x19ebc2, _0x19ebc2['next']), _0x312754['earcutLink' + 'ed'](_0x44c341, _0x485984, _0x362074, _0x3e856b, _0x31563f, _0x443e69), _0x312754['earcutLink' + 'ed'](_0x19ebc2, _0x485984, _0x362074, _0x3e856b, _0x31563f, _0x443e69);
                            return;
                        }
                        _0xb70cf3 = _0xb70cf3['next'];
                    }
                    _0x44c341 = _0x44c341['next'];
                } while (_0x44c341 !== _0x2d7db5);
            }, _0x312754['eliminateH' + 'oles'] = function (_0x183acb, _0x2389ff, _0x56da4c, _0x32142d) {
                var _0x31ca19 = [], _0x560bdf, _0x43b489, _0x4a119d, _0x3e8914, _0x1fc83d;
                for (_0x560bdf = 0x0, _0x43b489 = _0x2389ff['length']; _0x560bdf < _0x43b489; _0x560bdf++) {
                    _0x4a119d = _0x2389ff[_0x560bdf] * _0x32142d, _0x3e8914 = _0x560bdf < _0x43b489 - 0x1 ? _0x2389ff[_0x560bdf + 0x1] * _0x32142d : _0x183acb['length'], _0x1fc83d = _0x312754['linkedList'](_0x183acb, _0x4a119d, _0x3e8914, _0x32142d, ![]);
                    if (_0x1fc83d === _0x1fc83d['next'])
                        _0x1fc83d['steiner'] = !![];
                    _0x31ca19['push'](_0x312754['getLeftmos' + 't'](_0x1fc83d));
                }
                _0x31ca19['sort'](_0x312754['compareX']);
                for (_0x560bdf = 0x0; _0x560bdf < _0x31ca19['length']; _0x560bdf++) {
                    _0x312754['eliminateH' + 'ole'](_0x31ca19[_0x560bdf], _0x56da4c), _0x56da4c = _0x312754['filterPoin' + 'ts'](_0x56da4c, _0x56da4c['next']);
                }
                return _0x56da4c;
            }, _0x312754['compareX'] = function (_0x258b13, _0x378708) {
                return _0x258b13['x'] - _0x378708['x'];
            }, _0x312754['eliminateH' + 'ole'] = function (_0x1accd1, _0x5d07bc) {
                _0x5d07bc = _0x312754['findHoleBr' + 'idge'](_0x1accd1, _0x5d07bc);
                if (_0x5d07bc) {
                    var _0x25e236 = _0x312754['splitPolyg' + 'on'](_0x5d07bc, _0x1accd1);
                    _0x312754['filterPoin' + 'ts'](_0x25e236, _0x25e236['next']);
                }
            }, _0x312754['findHoleBr' + 'idge'] = function (_0x236ac7, _0x149651) {
                var _0x360d02 = _0x149651, _0x264552 = _0x236ac7['x'], _0x1c009d = _0x236ac7['y'], _0x1ce187 = -Infinity, _0x28a6e0;
                do {
                    if (_0x1c009d <= _0x360d02['y'] && _0x1c009d >= _0x360d02['next']['y'] && _0x360d02['next']['y'] !== _0x360d02['y']) {
                        var _0x4a90c0 = _0x360d02['x'] + (_0x1c009d - _0x360d02['y']) * (_0x360d02['next']['x'] - _0x360d02['x']) / (_0x360d02['next']['y'] - _0x360d02['y']);
                        if (_0x4a90c0 <= _0x264552 && _0x4a90c0 > _0x1ce187) {
                            _0x1ce187 = _0x4a90c0;
                            if (_0x4a90c0 === _0x264552) {
                                if (_0x1c009d === _0x360d02['y'])
                                    return _0x360d02;
                                if (_0x1c009d === _0x360d02['next']['y'])
                                    return _0x360d02['next'];
                            }
                            _0x28a6e0 = _0x360d02['x'] < _0x360d02['next']['x'] ? _0x360d02 : _0x360d02['next'];
                        }
                    }
                    _0x360d02 = _0x360d02['next'];
                } while (_0x360d02 !== _0x149651);
                if (!_0x28a6e0)
                    return null;
                if (_0x264552 === _0x1ce187)
                    return _0x28a6e0['prev'];
                var _0x2f9453 = _0x28a6e0, _0x5cf303 = _0x28a6e0['x'], _0x42c2c8 = _0x28a6e0['y'], _0x5bbc47 = Infinity, _0x4af47e;
                _0x360d02 = _0x28a6e0['next'];
                while (_0x360d02 !== _0x2f9453) {
                    _0x264552 >= _0x360d02['x'] && _0x360d02['x'] >= _0x5cf303 && _0x264552 !== _0x360d02['x'] && _0x312754['pointInTri' + 'angle'](_0x1c009d < _0x42c2c8 ? _0x264552 : _0x1ce187, _0x1c009d, _0x5cf303, _0x42c2c8, _0x1c009d < _0x42c2c8 ? _0x1ce187 : _0x264552, _0x1c009d, _0x360d02['x'], _0x360d02['y']) && (_0x4af47e = Math['abs'](_0x1c009d - _0x360d02['y']) / (_0x264552 - _0x360d02['x']), (_0x4af47e < _0x5bbc47 || _0x4af47e === _0x5bbc47 && _0x360d02['x'] > _0x28a6e0['x']) && _0x312754['locallyIns' + 'ide'](_0x360d02, _0x236ac7) && (_0x28a6e0 = _0x360d02, _0x5bbc47 = _0x4af47e)), _0x360d02 = _0x360d02['next'];
                }
                return _0x28a6e0;
            }, _0x312754['indexCurve'] = function (_0x3c45bb, _0x221c69, _0x130074, _0x24909b) {
                var _0x22f611 = _0x3c45bb;
                do {
                    if (_0x22f611['z'] === null)
                        _0x22f611['z'] = _0x312754['zOrder'](_0x22f611['x'], _0x22f611['y'], _0x221c69, _0x130074, _0x24909b);
                    _0x22f611['prevZ'] = _0x22f611['prev'], _0x22f611['nextZ'] = _0x22f611['next'], _0x22f611 = _0x22f611['next'];
                } while (_0x22f611 !== _0x3c45bb);
                _0x22f611['prevZ']['nextZ'] = null, _0x22f611['prevZ'] = null, _0x312754['sortLinked'](_0x22f611);
            }, _0x312754['sortLinked'] = function (_0x505317) {
                var _0x1eeb5e, _0x4c5d4c, _0x3144c3, _0x2a5513, _0x58bcde, _0x3b15db, _0x31ea40, _0x4660d5, _0xed8310 = 0x1;
                do {
                    _0x4c5d4c = _0x505317, _0x505317 = null, _0x58bcde = null, _0x3b15db = 0x0;
                    while (_0x4c5d4c) {
                        _0x3b15db++, _0x3144c3 = _0x4c5d4c, _0x31ea40 = 0x0;
                        for (_0x1eeb5e = 0x0; _0x1eeb5e < _0xed8310; _0x1eeb5e++) {
                            _0x31ea40++, _0x3144c3 = _0x3144c3['nextZ'];
                            if (!_0x3144c3)
                                break;
                        }
                        _0x4660d5 = _0xed8310;
                        while (_0x31ea40 > 0x0 || _0x4660d5 > 0x0 && _0x3144c3) {
                            _0x31ea40 !== 0x0 && (_0x4660d5 === 0x0 || !_0x3144c3 || _0x4c5d4c['z'] <= _0x3144c3['z']) ? (_0x2a5513 = _0x4c5d4c, _0x4c5d4c = _0x4c5d4c['nextZ'], _0x31ea40--) : (_0x2a5513 = _0x3144c3, _0x3144c3 = _0x3144c3['nextZ'], _0x4660d5--);
                            if (_0x58bcde)
                                _0x58bcde['nextZ'] = _0x2a5513;
                            else
                                _0x505317 = _0x2a5513;
                            _0x2a5513['prevZ'] = _0x58bcde, _0x58bcde = _0x2a5513;
                        }
                        _0x4c5d4c = _0x3144c3;
                    }
                    _0x58bcde['nextZ'] = null, _0xed8310 *= 0x2;
                } while (_0x3b15db > 0x1);
                return _0x505317;
            }, _0x312754['zOrder'] = function (_0x5b3e1f, _0x2fa922, _0x315923, _0x1bec16, _0x8781c4) {
                return _0x5b3e1f = 0x7fff * (_0x5b3e1f - _0x315923) * _0x8781c4, _0x2fa922 = 0x7fff * (_0x2fa922 - _0x1bec16) * _0x8781c4, _0x5b3e1f = (_0x5b3e1f | _0x5b3e1f << 0x8) & 0xff00ff, _0x5b3e1f = (_0x5b3e1f | _0x5b3e1f << 0x4) & 0xf0f0f0f, _0x5b3e1f = (_0x5b3e1f | _0x5b3e1f << 0x2) & 0x33333333, _0x5b3e1f = (_0x5b3e1f | _0x5b3e1f << 0x1) & 0x55555555, _0x2fa922 = (_0x2fa922 | _0x2fa922 << 0x8) & 0xff00ff, _0x2fa922 = (_0x2fa922 | _0x2fa922 << 0x4) & 0xf0f0f0f, _0x2fa922 = (_0x2fa922 | _0x2fa922 << 0x2) & 0x33333333, _0x2fa922 = (_0x2fa922 | _0x2fa922 << 0x1) & 0x55555555, _0x5b3e1f | _0x2fa922 << 0x1;
            }, _0x312754['getLeftmos' + 't'] = function (_0x3dc80d) {
                var _0x40fea5 = _0x3dc80d, _0x375604 = _0x3dc80d;
                do {
                    if (_0x40fea5['x'] < _0x375604['x'])
                        _0x375604 = _0x40fea5;
                    _0x40fea5 = _0x40fea5['next'];
                } while (_0x40fea5 !== _0x3dc80d);
                return _0x375604;
            }, _0x312754['pointInTri' + 'angle'] = function (_0x2a65f7, _0xe9114f, _0x54bd77, _0x1cb8df, _0x4ff7ca, _0x14f3d2, _0x444b16, _0x5cad0b) {
                return (_0x4ff7ca - _0x444b16) * (_0xe9114f - _0x5cad0b) - (_0x2a65f7 - _0x444b16) * (_0x14f3d2 - _0x5cad0b) >= 0x0 && (_0x2a65f7 - _0x444b16) * (_0x1cb8df - _0x5cad0b) - (_0x54bd77 - _0x444b16) * (_0xe9114f - _0x5cad0b) >= 0x0 && (_0x54bd77 - _0x444b16) * (_0x14f3d2 - _0x5cad0b) - (_0x4ff7ca - _0x444b16) * (_0x1cb8df - _0x5cad0b) >= 0x0;
            }, _0x312754['isValidDia' + 'gonal'] = function (_0x35723c, _0x19de4b) {
                return _0x35723c['next']['i'] !== _0x19de4b['i'] && _0x35723c['prev']['i'] !== _0x19de4b['i'] && !_0x312754['intersects' + 'Polygon'](_0x35723c, _0x19de4b) && _0x312754['locallyIns' + 'ide'](_0x35723c, _0x19de4b) && _0x312754['locallyIns' + 'ide'](_0x19de4b, _0x35723c) && _0x312754['middleInsi' + 'de'](_0x35723c, _0x19de4b);
            }, _0x312754['area'] = function (_0x87f9a5, _0x35d5cd, _0x5d265e) {
                return (_0x35d5cd['y'] - _0x87f9a5['y']) * (_0x5d265e['x'] - _0x35d5cd['x']) - (_0x35d5cd['x'] - _0x87f9a5['x']) * (_0x5d265e['y'] - _0x35d5cd['y']);
            }, _0x312754['equals'] = function (_0x5d7058, _0x27ac78) {
                return _0x5d7058['x'] === _0x27ac78['x'] && _0x5d7058['y'] === _0x27ac78['y'];
            }, _0x312754['intersects'] = function (_0xc0c13b, _0x49922d, _0x17bc32, _0x523c04) {
                if (_0x312754['equals'](_0xc0c13b, _0x49922d) && _0x312754['equals'](_0x17bc32, _0x523c04) || _0x312754['equals'](_0xc0c13b, _0x523c04) && _0x312754['equals'](_0x17bc32, _0x49922d))
                    return !![];
                return _0x312754['area'](_0xc0c13b, _0x49922d, _0x17bc32) > 0x0 !== _0x312754['area'](_0xc0c13b, _0x49922d, _0x523c04) > 0x0 && _0x312754['area'](_0x17bc32, _0x523c04, _0xc0c13b) > 0x0 !== _0x312754['area'](_0x17bc32, _0x523c04, _0x49922d) > 0x0;
            }, _0x312754['intersects' + 'Polygon'] = function (_0x4b1c6d, _0x50d8b9) {
                var _0x24ac39 = _0x4b1c6d;
                do {
                    if (_0x24ac39['i'] !== _0x4b1c6d['i'] && _0x24ac39['next']['i'] !== _0x4b1c6d['i'] && _0x24ac39['i'] !== _0x50d8b9['i'] && _0x24ac39['next']['i'] !== _0x50d8b9['i'] && _0x312754['intersects'](_0x24ac39, _0x24ac39['next'], _0x4b1c6d, _0x50d8b9))
                        return !![];
                    _0x24ac39 = _0x24ac39['next'];
                } while (_0x24ac39 !== _0x4b1c6d);
                return ![];
            }, _0x312754['locallyIns' + 'ide'] = function (_0x38c71c, _0x42fd2c) {
                return _0x312754['area'](_0x38c71c['prev'], _0x38c71c, _0x38c71c['next']) < 0x0 ? _0x312754['area'](_0x38c71c, _0x42fd2c, _0x38c71c['next']) >= 0x0 && _0x312754['area'](_0x38c71c, _0x38c71c['prev'], _0x42fd2c) >= 0x0 : _0x312754['area'](_0x38c71c, _0x42fd2c, _0x38c71c['prev']) < 0x0 || _0x312754['area'](_0x38c71c, _0x38c71c['next'], _0x42fd2c) < 0x0;
            }, _0x312754['middleInsi' + 'de'] = function (_0x442c4d, _0x253779) {
                var _0x522289 = _0x442c4d, _0x300a30 = ![], _0x275186 = (_0x442c4d['x'] + _0x253779['x']) / 0x2, _0x48e9fd = (_0x442c4d['y'] + _0x253779['y']) / 0x2;
                do {
                    if (_0x522289['y'] > _0x48e9fd !== _0x522289['next']['y'] > _0x48e9fd && _0x522289['next']['y'] !== _0x522289['y'] && _0x275186 < (_0x522289['next']['x'] - _0x522289['x']) * (_0x48e9fd - _0x522289['y']) / (_0x522289['next']['y'] - _0x522289['y']) + _0x522289['x'])
                        _0x300a30 = !_0x300a30;
                    _0x522289 = _0x522289['next'];
                } while (_0x522289 !== _0x442c4d);
                return _0x300a30;
            }, _0x312754['splitPolyg' + 'on'] = function (_0x26da19, _0x160cbe) {
                var _0x19702e = new _0x127bc9(_0x26da19['i'], _0x26da19['x'], _0x26da19['y']), _0x1ecee1 = new _0x127bc9(_0x160cbe['i'], _0x160cbe['x'], _0x160cbe['y']), _0x2b3b0f = _0x26da19['next'], _0x16a5f7 = _0x160cbe['prev'];
                return _0x26da19['next'] = _0x160cbe, _0x160cbe['prev'] = _0x26da19, _0x19702e['next'] = _0x2b3b0f, _0x2b3b0f['prev'] = _0x19702e, _0x1ecee1['next'] = _0x19702e, _0x19702e['prev'] = _0x1ecee1, _0x16a5f7['next'] = _0x1ecee1, _0x1ecee1['prev'] = _0x16a5f7, _0x1ecee1;
            }, _0x312754['insertNode'] = function (_0x1ae9e0, _0xb20dc, _0x37df3c, _0x1fd7e5) {
                var _0xacb372 = new _0x127bc9(_0x1ae9e0, _0xb20dc, _0x37df3c);
                return !_0x1fd7e5 ? (_0xacb372['prev'] = _0xacb372, _0xacb372['next'] = _0xacb372) : (_0xacb372['next'] = _0x1fd7e5['next'], _0xacb372['prev'] = _0x1fd7e5, _0x1fd7e5['next']['prev'] = _0xacb372, _0x1fd7e5['next'] = _0xacb372), _0xacb372;
            }, _0x312754['removeNode'] = function (_0x52bcfc) {
                _0x52bcfc['next']['prev'] = _0x52bcfc['prev'], _0x52bcfc['prev']['next'] = _0x52bcfc['next'];
                if (_0x52bcfc['prevZ'])
                    _0x52bcfc['prevZ']['nextZ'] = _0x52bcfc['nextZ'];
                if (_0x52bcfc['nextZ'])
                    _0x52bcfc['nextZ']['prevZ'] = _0x52bcfc['prevZ'];
            }, _0x312754['signedArea'] = function (_0x389eee, _0x4b07ec, _0x76c2a4, _0x97d3cc) {
                var _0x14c9ec = 0x0;
                for (var _0x10e397 = _0x4b07ec, _0x109831 = _0x76c2a4 - _0x97d3cc; _0x10e397 < _0x76c2a4; _0x10e397 += _0x97d3cc) {
                    _0x14c9ec += (_0x389eee[_0x109831] - _0x389eee[_0x10e397]) * (_0x389eee[_0x10e397 + 0x1] + _0x389eee[_0x109831 + 0x1]), _0x109831 = _0x10e397;
                }
                return _0x14c9ec;
            }, _0x312754;
        }(), _0x234633 = function () {
            function _0x3cecf2() {
                this['_paramData'] = new ParamData(0x4, !![]);
            }
            _0x199b5b(_0x3cecf2, 'laya.layag' + 'l.cmdNativ' + 'e.AlphaCmd' + 'Native');
            var _0x47e0cd = _0x3cecf2['prototype'];
            return _0x47e0cd['recover'] = function () {
                _0x5460aa['recover']('AlphaCmd', this);
            }, _0x47e0cd['run'] = function (_0x4e12c5, _0x30bffd, _0x3f0334) {
                _0x4e12c5['alpha'](this['_alpha']);
            }, _0x3a2bd3(0x0, _0x47e0cd, 'cmdID', function () {
                return 'Alpha';
            }), _0x3a2bd3(0x0, _0x47e0cd, 'alpha', function () {
                return this['_alpha'];
            }, function (_0x27a54d) {
                _0x27a54d = _0x27a54d > 0x1 ? 0x1 : _0x27a54d, _0x27a54d = _0x27a54d < 0x0 ? 0x0 : _0x27a54d, this['_alpha'] = _0x27a54d;
                var _0x2d10fe = 0xffffff;
                _0x2d10fe = _0x27a54d * 0xff << 0x18 | _0x2d10fe, this['_paramData']['_int32Data'][0x0] = _0x2d10fe, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3cecf2['create'] = function (_0x11da6d) {
                var _0x5baac3 = _0x5460aa['getItemByC' + 'lass']('AlphaCmd', _0x3cecf2), _0x1959c1 = _0x5baac3['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                return _0x5baac3['alpha'] = _0x11da6d, _0x1959c1['setGlobalV' + 'alueEx'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0xf, _0x5baac3['_paramData']['getPtrID'](), 0x0), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1959c1), _0x5baac3;
            }, _0x3cecf2['ID'] = 'Alpha', _0x3cecf2;
        }(), _0x247f32 = function () {
            function _0x3ce26b(_0x371249) {
                this['clipInfoID'] = -0x1, this['_numEle'] = 0x0, this['_ref'] = 0x1, this['_key'] = new _0x2e7190(), _0x371249 === void 0x0 && (_0x371249 = 0x2710), this['_renderTyp' + 'e'] = _0x371249, this['_id'] = ++_0x3ce26b['ID'];
            }
            _0x199b5b(_0x3ce26b, 'laya.webgl' + '.submit.Su' + 'bmit');
            var _0x594aea = _0x3ce26b['prototype'];
            return _0x4a6519['imps'](_0x594aea, { 'laya.webgl.submit.ISubmit': !![] }), _0x594aea['getID'] = function () {
                return this['_id'];
            }, _0x594aea['releaseRen' + 'der'] = function () {
                if (_0x3ce26b['RENDERBASE'] == this)
                    return;
                --this['_ref'] < 0x1 && (_0x3ce26b['POOL'][_0x3ce26b['_poolSize']++] = this, this['shaderValu' + 'e']['release'](), this['shaderValu' + 'e'] = null, this['_mesh'] = null, this['_parent'] && (this['_parent']['releaseRen' + 'der'](), this['_parent'] = null));
            }, _0x594aea['getRenderT' + 'ype'] = function () {
                return this['_renderTyp' + 'e'];
            }, _0x594aea['renderSubm' + 'it'] = function () {
                if (this['_numEle'] === 0x0 || !this['_mesh'] || this['_numEle'] == 0x0)
                    return 0x1;
                var _0xf11687 = this['shaderValu' + 'e']['textureHos' + 't'];
                if (_0xf11687) {
                    var _0x1e82c6 = _0xf11687['_getSource']();
                    if (!_0x1e82c6)
                        return 0x1;
                    this['shaderValu' + 'e']['texture'] = _0x1e82c6;
                }
                ;
                var _0xb51e6b = _0x354f16['mainContex' + 't'];
                return this['_mesh']['useMesh'](_0xb51e6b), this['shaderValu' + 'e']['upload'](), _0x5c9116['activeBlen' + 'dFunction'] !== this['_blendFn'] && (_0x21b46c['setBlend'](_0xb51e6b, !![]), this['_blendFn'](_0xb51e6b), _0x5c9116['activeBlen' + 'dFunction'] = this['_blendFn']), _0xb51e6b['drawElemen' + 'ts'](0x4, this['_numEle'], 0x1403, this['_startIdx']), _0x29f3e7['renderBatc' + 'h']++, _0x29f3e7['trianglesF' + 'aces'] += this['_numEle'] / 0x3, 0x1;
            }, _0x594aea['_cloneInit'] = function (_0x3f08fc, _0x25ce63, _0x26f36a, _0x45f454) {
                ;
                _0x3f08fc['_ref'] = 0x1, _0x3f08fc['_mesh'] = _0x26f36a, _0x3f08fc['_id'] = this['_id'], _0x3f08fc['_key']['copyFrom'](this['_key']), _0x3f08fc['_parent'] = this, _0x3f08fc['_blendFn'] = this['_blendFn'], _0x3f08fc['_renderTyp' + 'e'] = this['_renderTyp' + 'e'], _0x3f08fc['_startIdx'] = _0x45f454 * _0x39d4bb['BYTES_PIDX'], _0x3f08fc['_numEle'] = this['_numEle'], _0x3f08fc['shaderValu' + 'e'] = this['shaderValu' + 'e'], this['shaderValu' + 'e']['ref']++, this['_ref']++;
            }, _0x594aea['clone'] = function (_0x31fdf7, _0x56832b, _0x283eac) {
                ;
                return null;
            }, _0x594aea['reUse'] = function (_0x1e44d3, _0x20aa81) {
                ;
                return 0x0;
            }, _0x594aea['toString'] = function () {
                return 'ibindex:' + this['_startIdx'] + '\x20num:' + this['_numEle'] + '\x20key=' + this['_key'];
            }, _0x3ce26b['__init__'] = function () {
                var _0x46eee0 = _0x3ce26b['RENDERBASE'] = new _0x3ce26b(-0x1);
                _0x46eee0['shaderValu' + 'e'] = new _0xd9aa33(0x0, 0x0), _0x46eee0['shaderValu' + 'e']['ALPHA'] = 0x1, _0x46eee0['_ref'] = 0xffffffff;
            }, _0x3ce26b['create'] = function (_0x5abeb9, _0x24917e, _0x17af55) {
                ;
                var _0x42a8ab = _0x3ce26b['_poolSize'] ? _0x3ce26b['POOL'][--_0x3ce26b['_poolSize']] : new _0x3ce26b();
                _0x42a8ab['_ref'] = 0x1, _0x42a8ab['_mesh'] = _0x24917e, _0x42a8ab['_key']['clear'](), _0x42a8ab['_startIdx'] = _0x24917e['indexNum'] * _0x39d4bb['BYTES_PIDX'], _0x42a8ab['_numEle'] = 0x0;
                var _0xdd079 = _0x5abeb9['_nBlendTyp' + 'e'];
                _0x42a8ab['_blendFn'] = _0x5abeb9['_targets'] ? _0x5c9116['targetFns'][_0xdd079] : _0x5c9116['fns'][_0xdd079], _0x42a8ab['shaderValu' + 'e'] = _0x17af55, _0x42a8ab['shaderValu' + 'e']['setValue'](_0x5abeb9['_shader2D']);
                var _0x1c322c = _0x5abeb9['_shader2D']['filters'];
                return _0x1c322c && _0x42a8ab['shaderValu' + 'e']['setFilters'](_0x1c322c), _0x42a8ab;
            }, _0x3ce26b['createShap' + 'e'] = function (_0x48c5c8, _0x5df436, _0x153796, _0x33d04d) {
                var _0x185577 = _0x3ce26b['_poolSize'] ? _0x3ce26b['POOL'][--_0x3ce26b['_poolSize']] : new _0x3ce26b();
                _0x185577['_mesh'] = _0x5df436, _0x185577['_numEle'] = _0x153796, _0x185577['_startIdx'] = _0x5df436['indexNum'] * 0x2, _0x185577['_ref'] = 0x1, _0x185577['shaderValu' + 'e'] = _0x33d04d, _0x185577['shaderValu' + 'e']['setValue'](_0x48c5c8['_shader2D']);
                var _0x4d318c = _0x48c5c8['_nBlendTyp' + 'e'];
                return _0x185577['_key']['blendShade' + 'r'] = _0x4d318c, _0x185577['_blendFn'] = _0x48c5c8['_targets'] ? _0x5c9116['targetFns'][_0x4d318c] : _0x5c9116['fns'][_0x4d318c], _0x185577;
            }, _0x3ce26b['TYPE_2D'] = 0x2710, _0x3ce26b['TYPE_CANVA' + 'S'] = 0x2713, _0x3ce26b['TYPE_CMDSE' + 'TRT'] = 0x2714, _0x3ce26b['TYPE_CUSTO' + 'M'] = 0x2715, _0x3ce26b['TYPE_BLURR' + 'T'] = 0x2716, _0x3ce26b['TYPE_CMDDE' + 'STORYPRERT'] = 0x2717, _0x3ce26b['TYPE_DISAB' + 'LESTENCIL'] = 0x2718, _0x3ce26b['TYPE_OTHER' + 'IBVB'] = 0x2719, _0x3ce26b['TYPE_PRIMI' + 'TIVE'] = 0x271a, _0x3ce26b['TYPE_RT'] = 0x271b, _0x3ce26b['TYPE_BLUR_' + 'RT'] = 0x271c, _0x3ce26b['TYPE_TARGE' + 'T'] = 0x271d, _0x3ce26b['TYPE_CHANG' + 'E_VALUE'] = 0x271e, _0x3ce26b['TYPE_SHAPE'] = 0x271f, _0x3ce26b['TYPE_TEXTU' + 'RE'] = 0x2720, _0x3ce26b['TYPE_FILLT' + 'EXTURE'] = 0x2721, _0x3ce26b['KEY_ONCE'] = -0x1, _0x3ce26b['KEY_FILLRE' + 'CT'] = 0x1, _0x3ce26b['KEY_DRAWTE' + 'XTURE'] = 0x2, _0x3ce26b['KEY_VG'] = 0x3, _0x3ce26b['KEY_TRIANG' + 'LES'] = 0x4, _0x3ce26b['RENDERBASE'] = null, _0x3ce26b['ID'] = 0x1, _0x3ce26b['preRender'] = null, _0x3ce26b['_poolSize'] = 0x0, _0x3ce26b['POOL'] = [], _0x3ce26b;
        }(), _0x39d4bb = function () {
            function _0x1df9ef() {
            }
            return _0x199b5b(_0x1df9ef, 'laya.webgl' + '.utils.CON' + 'ST3D2D'), _0x1df9ef['BYTES_PE'] = 0x4, _0x1df9ef['BYTES_PIDX'] = 0x2, _0x1df9ef['defaultMat' + 'rix4'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1
            ], _0x1df9ef['defaultMin' + 'usYMatrix4'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                -0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1
            ], _0x1df9ef['uniformMat' + 'rix3'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0
            ], _0x1df9ef['_TMPARRAY'] = [], _0x1df9ef['_OFFSETX'] = 0x0, _0x1df9ef['_OFFSETY'] = 0x0, _0x1df9ef;
        }(), _0x354f16 = function () {
            function _0x43d6a1() {
            }
            return _0x199b5b(_0x43d6a1, 'laya.webgl' + '.WebGL'), _0x43d6a1['_uint8Arra' + 'ySlice'] = function () {
                var _0x722ad0 = this, _0x1e37ed = _0x722ad0['length'], _0x29e11a = new Uint8Array(_0x722ad0['length']);
                for (var _0x59d8fa = 0x0; _0x59d8fa < _0x1e37ed; _0x59d8fa++)
                    _0x29e11a[_0x59d8fa] = _0x722ad0[_0x59d8fa];
                return _0x29e11a;
            }, _0x43d6a1['_float32Ar' + 'raySlice'] = function () {
                var _0x1a9e57 = this, _0x11c0c1 = _0x1a9e57['length'], _0x420e17 = new Float32Array(_0x1a9e57['length']);
                for (var _0x431aa6 = 0x0; _0x431aa6 < _0x11c0c1; _0x431aa6++)
                    _0x420e17[_0x431aa6] = _0x1a9e57[_0x431aa6];
                return _0x420e17;
            }, _0x43d6a1['_uint16Arr' + 'aySlice'] = function (_0x53d94f) {
                var _0xd21a9a = arguments, _0x475b11 = this, _0x4964e0 = 0x0, _0x47b28d, _0x49c339 = 0x0;
                if (_0xd21a9a['length'] === 0x0) {
                    _0x4964e0 = _0x475b11['length'], _0x47b28d = new Uint16Array(_0x4964e0);
                    for (_0x49c339 = 0x0; _0x49c339 < _0x4964e0; _0x49c339++)
                        _0x47b28d[_0x49c339] = _0x475b11[_0x49c339];
                } else {
                    if (_0xd21a9a['length'] === 0x2) {
                        var _0x27d60d = _0xd21a9a[0x0], _0x38f5c6 = _0xd21a9a[0x1];
                        if (_0x38f5c6 > _0x27d60d) {
                            _0x4964e0 = _0x38f5c6 - _0x27d60d, _0x47b28d = new Uint16Array(_0x4964e0);
                            for (_0x49c339 = _0x27d60d; _0x49c339 < _0x38f5c6; _0x49c339++)
                                _0x47b28d[_0x49c339 - _0x27d60d] = _0x475b11[_0x49c339];
                        } else
                            _0x47b28d = new Uint16Array(0x0);
                    }
                }
                return _0x47b28d;
            }, _0x43d6a1['_nativeRen' + 'der_enable'] = function () {
                if (_0x43d6a1['isNativeRe' + 'nder_enabl' + 'e'])
                    return;
                _0x43d6a1['isNativeRe' + 'nder_enabl' + 'e'] = !![], _0x4a00a2['create'] = function (_0xaa41ab, _0x5dc16a) {
                    var _0x54bf51 = new _0x466364(_0xaa41ab, _0x5dc16a, 0x1, ![], ![]);
                    return _0x54bf51['wrapModeU'] = 0x1, _0x54bf51['wrapModeV'] = 0x1, _0x54bf51;
                }, _0x21b46c['__init_nat' + 'ive'](), _0x5c6236['width'] = _0x3592ad['window']['innerWidth'], _0x5c6236['height'] = _0x3592ad['window']['innerHeigh' + 't'], _0x2f724f['measureTex' + 't'] = function (_0x4c2bf4, _0x2dd572) {
                    return _0x2923dd['conchTextC' + 'anvas']['font'] = _0x2dd572, _0x2923dd['conchTextC' + 'anvas']['measureTex' + 't'](_0x4c2bf4);
                }, _0x2f724f['enableNati' + 've'] = function () {
                    _0x336bb3['uploadShad' + 'erUniforms'] = _0x336bb3['uploadShad' + 'erUniforms' + 'ForNative'];
                    var _0x7b0d30 = _0x31e060;
                    _0x7b0d30['prototype']['repaint'] = _0x7b0d30['prototype']['repaintFor' + 'Native'], _0x7b0d30['prototype']['render'] = _0x7b0d30['prototype']['renderToNa' + 'tive'];
                    var _0x391219 = _0x5ccc27;
                    _0x391219['prototype']['bind'] = _0x5ccc27['prototype']['bindForNat' + 'ive'], _0x391219['prototype']['unBind'] = _0x5ccc27['prototype']['unBindForN' + 'ative'];
                    if (_0x30d89b['isConchApp']) {
                        _0xefe7f5 = _0x2923dd['GLCommandE' + 'ncoder'], _0x33edbf = _0x2923dd['LayaGLCont' + 'ext'];
                        var _0x1a0f97 = _0x2923dd['CanvasRend' + 'eringConte' + 'xt']['prototype'], _0x596bc1 = _0xdd58f5['prototype'];
                        _0xdd58f5 = _0x2923dd['CanvasRend' + 'eringConte' + 'xt'], _0x1a0f97['drawImage'] = _0x596bc1['drawImage'], _0x1a0f97['drawTextur' + 'e'] = _0x596bc1['drawTextur' + 'e'], _0x1a0f97['fillText'] = _0x596bc1['fillText'], _0x1a0f97['save'] = _0x596bc1['save'], _0x1a0f97['restore'] = _0x596bc1['restore'], _0x1a0f97['translate'] = _0x596bc1['translate'], _0x1a0f97['scale'] = _0x596bc1['scale'], _0x1a0f97['rotate'] = _0x596bc1['rotate'], _0x1a0f97['transform'] = _0x596bc1['transform'], _0x1a0f97['beginRT'] = _0x596bc1['beginRT'], _0x1a0f97['endRT'] = _0x596bc1['endRT'], _0x1a0f97['drawCanvas'] = _0x596bc1['drawCanvas'], _0x1a0f97['drawTarget'] = _0x596bc1['drawTarget'], _0x1a0f97['_$get_asBi' + 'tmap'] = _0x596bc1['_$get_asBi' + 'tmap'], _0x1a0f97['_$set_asBi' + 'tmap'] = _0x596bc1['_$set_asBi' + 'tmap'], _0x1a0f97['toBase64'] = _0x596bc1['toBase64'], _0x1a0f97['getImageDa' + 'ta'] = _0x596bc1['getImageDa' + 'ta'], _0x3a2bd3(0x0, _0x1a0f97, 'asBitmap', _0x1a0f97['_$get_asBi' + 'tmap'], _0x1a0f97['_$set_asBi' + 'tmap']), _0x143391['rewritePro' + 'perties']();
                    }
                    _0x3b69e5['init'](), _0xe4a59a['__init__']();
                }, _0x2f724f['clear'] = function (_0x362fc7) {
                    var _0x1ec46c = _0x4b1f30['create'](_0x362fc7)['arrColor'], _0x1f48b3 = _0x33edbf['instance'];
                    if (_0x1ec46c)
                        _0x1f48b3['clearColor'](_0x1ec46c[0x0], _0x1ec46c[0x1], _0x1ec46c[0x2], _0x1ec46c[0x3]);
                    _0x1f48b3['clear'](0x4000 | 0x100 | 0x400);
                }, _0x2f724f['drawToCanv' + 'as'] = function (_0x3deb01, _0x50b1ca, _0x21a3d3, _0x32fc7a, _0x1d5926, _0x4f3018) {
                    var _0x10c751 = new _0x256e64(!![]);
                    _0x10c751['size'](_0x21a3d3, _0x32fc7a);
                    var _0x3c4ad4 = _0x10c751['getContext']('2d');
                    _0x3c4ad4['asBitmap'] = !![];
                    var _0x59b697 = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![]);
                    _0x59b697['beginEncod' + 'ing'](), _0x59b697['clearEncod' + 'ing']();
                    var _0x448598 = _0x33edbf['instance'], _0x5963be = _0x448598['getCurrent' + 'Context']();
                    _0x448598['setCurrent' + 'Context'](_0x3c4ad4), _0x3c4ad4['beginRT'](), _0x448598['save']();
                    var _0x1076fe = _0x3b69e5['_tempFloat' + 'ArrayMatri' + 'x'];
                    return _0x1076fe[0x0] = 0x1, _0x1076fe[0x1] = 0x0, _0x1076fe[0x2] = 0x0, _0x1076fe[0x3] = 0x1, _0x1076fe[0x4] = _0x1d5926, _0x1076fe[0x5] = _0x4f3018, _0x448598['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x8, _0x1076fe), _0x3deb01['writeBlock' + 'ToNative'](), _0x448598['restore'](), _0x448598['setCurrent' + 'Context'](_0x5963be), _0x448598['commitCont' + 'extToGPU'](_0x3c4ad4), _0x3c4ad4['endRT'](), _0x59b697['endEncodin' + 'g'](), _0x448598['useCommand' + 'Encoder'](_0x59b697['getPtrID'](), -0x1, 0x0), _0x10c751;
                }, _0x256e64['prototype']['getTexture'] = function () {
                    return !this['_texture'] && (this['_texture'] = this['context']['_targets'], this['_texture']['uv'] = _0x4a9aac['flipyuv'], this['_texture']['bitmap'] = this['_texture']), this['_texture'];
                };
            }, _0x43d6a1['_webglRend' + 'er_enable'] = function () {
                if (_0x30d89b['isWebGL'])
                    return;
                _0x30d89b['isWebGL'] = !![], _0x2f724f['initRender'] = function (_0x17a048, _0xbfa82b, _0x5a47af) {
                    function _0x5b257b(_0x5cf567) {
                        var _0x4d1005, _0xa05f64 = [
                                'webgl2',
                                'webgl',
                                'experiment' + 'al-webgl',
                                'webkit-3d',
                                'moz-webgl'
                            ];
                        !_0x5a5989['useWebGL2'] && _0xa05f64['shift']();
                        for (var _0x236e92 = 0x0; _0x236e92 < _0xa05f64['length']; _0x236e92++) {
                            try {
                                _0x4d1005 = _0x5cf567['getContext'](_0xa05f64[_0x236e92], {
                                    'stencil': _0x5a5989['isStencil'],
                                    'alpha': _0x5a5989['isAlpha'],
                                    'antialias': _0x5a5989['isAntialia' + 's'],
                                    'premultipliedAlpha': _0x5a5989['premultipl' + 'iedAlpha'],
                                    'preserveDrawingBuffer': _0x5a5989['preserveDr' + 'awingBuffe' + 'r']
                                });
                            } catch (_0x1594ec) {
                            }
                            if (_0x4d1005)
                                return _0xa05f64[_0x236e92] === 'webgl2' && (laya['webgl']['WebGL']['_isWebGL2'] = !![]), new _0x33edbf(), _0x4d1005;
                        }
                        return null;
                    }
                    ;
                    var _0x203e8f = _0x33edbf['instance'] = laya['webgl']['WebGL']['mainContex' + 't'] = _0x5b257b(_0x30d89b['_mainCanva' + 's']['source']);
                    if (!_0x203e8f)
                        return ![];
                    _0x17a048['size'](_0xbfa82b, _0x5a47af), _0x21b46c['__init__'](_0x203e8f), _0x23a596['__init__'](), _0x247f32['__init__']();
                    var _0x15cd1d = new _0x23a596();
                    _0x30d89b['_context'] = _0x15cd1d, _0x17a048['_setContex' + 't'](_0x15cd1d), laya['webgl']['WebGL']['shaderHigh' + 'Precision'] = ![];
                    try {
                        var _0x1b0afb = _0x203e8f['getShaderP' + 'recisionFo' + 'rmat'](0x8b30, 0x8df2);
                        _0x1b0afb['precision'] ? _0x43d6a1['shaderHigh' + 'Precision'] = !![] : _0x43d6a1['shaderHigh' + 'Precision'] = ![];
                    } catch (_0x42611f) {
                    }
                    return _0x33edbf['instance'] = _0x203e8f, _0x21a9bd['__init__'](), _0x4a8714['__init__'](), _0xd9aa33['__init__'](), _0x16a48a['__init__'](), _0x53e8eb['__int__'](_0x203e8f), _0x5c9116['_init_'](_0x203e8f), !![];
                }, _0x4a00a2['create'] = function (_0x23dd1a, _0x1295e4) {
                    var _0x59be48 = new _0x466364(_0x23dd1a, _0x1295e4, 0x1, ![], ![]);
                    return _0x59be48['wrapModeU'] = 0x1, _0x59be48['wrapModeV'] = 0x1, _0x59be48;
                }, _0x2f724f['createRend' + 'erSprite'] = function (_0x12f7ad, _0x3d712e) {
                    return new _0x2e9374(_0x12f7ad, _0x3d712e);
                }, _0x2f724f['changeWebG' + 'LSize'] = function (_0x1159f9, _0x18c1ba) {
                    laya['webgl']['WebGL']['onStageRes' + 'ize'](_0x1159f9, _0x18c1ba);
                }, _0x2f724f['clear'] = function (_0x2d4632) {
                    _0x23a596['set2DRende' + 'rConfig'](), _0x5c6236['worldSciss' + 'orTest'] && laya['webgl']['WebGL']['mainContex' + 't']['disable'](0xc11);
                    var _0x4c1de6 = _0x30d89b['context'], _0x5f232b = _0x4c1de6['_submits']['_length'] == 0x0 || _0x5a5989['preserveDr' + 'awingBuffe' + 'r'] ? _0x4b1f30['create'](_0x2d4632)['arrColor'] : _0x4a6519['stage']['_wgColor'];
                    if (_0x5f232b)
                        _0x4c1de6['clearBG'](_0x5f232b[0x0], _0x5f232b[0x1], _0x5f232b[0x2], _0x5f232b[0x3]);
                    _0x5c6236['clear']();
                }, _0x2f724f['drawToCanv' + 'as'] = function (_0x416502, _0x7a0598, _0x5ba932, _0x531036, _0x59df4f, _0x17d1dc) {
                    _0x59df4f -= _0x416502['x'], _0x17d1dc -= _0x416502['y'], _0x59df4f |= 0x0, _0x17d1dc |= 0x0, _0x5ba932 |= 0x0, _0x531036 |= 0x0;
                    var _0x443b76 = new _0x23a596();
                    _0x443b76['size'](_0x5ba932, _0x531036), _0x443b76['asBitmap'] = !![], _0x443b76['_targets']['start'](), _0x121f50['renders'][_0x7a0598]['_fun'](_0x416502, _0x443b76, _0x59df4f, _0x17d1dc), _0x443b76['flush'](), _0x443b76['_targets']['end'](), _0x443b76['_targets']['restore']();
                    var _0x21510e = _0x443b76['_targets']['getData'](0x0, 0x0, _0x5ba932, _0x531036);
                    _0x443b76['destroy']();
                    var _0x2c9e6c = new ImageData(_0x5ba932, _0x531036);
                    ;
                    var _0x4d8668 = _0x5ba932 * 0x4, _0x55e280 = new Uint8Array(_0x4d8668), _0x311518 = _0x2c9e6c['data'], _0x75a334 = _0x531036 - 0x1, _0x36058f = _0x75a334 * _0x4d8668, _0xf5b272 = 0x0;
                    for (; _0x75a334 >= 0x0; _0x75a334--) {
                        _0x311518['set'](_0x21510e['subarray'](_0xf5b272, _0xf5b272 + _0x4d8668), _0x36058f), _0x36058f -= _0x4d8668, _0xf5b272 += _0x4d8668;
                    }
                    ;
                    var _0x4018da = new _0x256e64(!![]);
                    _0x4018da['size'](_0x5ba932, _0x531036);
                    var _0x4c8007 = _0x4018da['getContext']('2d');
                    _0x4c8007['putImageDa' + 'ta'](_0x2c9e6c, 0x0, 0x0);
                    ;
                    return _0x4018da;
                }, _0x2f724f['getTexture' + 'Pixels'] = function (_0x26f77c, _0x242ccf, _0xc672cf, _0xfaf974, _0x4b3701) {
                    var _0x1af2fd = 0x0, _0x415124 = 0x0, _0x2d67e3 = 0x0, _0x38367e = _0x26f77c['bitmap'], _0x300497 = _0x38367e['width'], _0x490664 = _0x38367e['height'];
                    if (_0x242ccf + _0xfaf974 > _0x300497)
                        _0xfaf974 -= _0x242ccf + _0xfaf974 - _0x300497;
                    if (_0xc672cf + _0x4b3701 > _0x490664)
                        _0x4b3701 -= _0xc672cf + _0x4b3701 - _0x490664;
                    if (_0xfaf974 <= 0x0 || _0x4b3701 <= 0x0)
                        return null;
                    var _0x5d2916 = _0xfaf974 * 0x4, _0x233541 = null;
                    try {
                        _0x233541 = _0x38367e['getPixels']();
                    } catch (_0x5623c7) {
                    }
                    if (_0x233541) {
                        if (_0x242ccf == 0x0 && _0xc672cf == 0x0 && _0xfaf974 == _0x300497 && _0x4b3701 == _0x490664)
                            return _0x233541;
                        var _0x4bfbb0 = new Uint8Array(_0xfaf974 * _0x4b3701 * 0x4);
                        _0x5d2916 = _0x300497 * 0x4, _0x1af2fd = _0x242ccf * 0x4, _0x415124 = (_0xc672cf + _0x4b3701 - 0x1) * _0x5d2916 + _0x242ccf * 0x4;
                        for (_0x2d67e3 = _0x4b3701 - 0x1; _0x2d67e3 >= 0x0; _0x2d67e3--) {
                            _0x4bfbb0['set'](_0x20e79e['slice'](_0x415124, _0x415124 + _0xfaf974 * 0x4), _0x1af2fd), _0x1af2fd += _0x5d2916, _0x415124 -= _0x5d2916;
                        }
                        return _0x4bfbb0;
                    }
                    ;
                    var _0x21a88b = new _0x23a596();
                    _0x21a88b['size'](_0xfaf974, _0x4b3701), _0x21a88b['asBitmap'] = !![];
                    var _0x4e3a29 = null;
                    if (_0x242ccf != 0x0 || _0xc672cf != 0x0 || _0xfaf974 != _0x300497 || _0x4b3701 != _0x490664) {
                        _0x4e3a29 = _0x26f77c['uv']['concat']();
                        var _0x43db13 = _0x4e3a29[0x0], _0x387434 = _0x4e3a29[0x1], _0xba02d8 = _0x4e3a29[0x2] - _0x43db13, _0xbca282 = _0x4e3a29[0x7] - _0x387434, _0xa997cc = _0xba02d8 / _0x300497, _0x199bad = _0xbca282 / _0x490664;
                        _0x4e3a29 = [
                            _0x43db13 + _0x242ccf * _0xa997cc,
                            _0x387434 + _0xc672cf * _0x199bad,
                            _0x43db13 + (_0x242ccf + _0xfaf974) * _0xa997cc,
                            _0x387434 + _0xc672cf * _0x199bad,
                            _0x43db13 + (_0x242ccf + _0xfaf974) * _0xa997cc,
                            _0x387434 + (_0xc672cf + _0x4b3701) * _0x199bad,
                            _0x43db13 + _0x242ccf * _0xa997cc,
                            _0x387434 + (_0xc672cf + _0x4b3701) * _0x199bad
                        ];
                    }
                    _0x21a88b['_drawTextu' + 'reM'](_0x26f77c, 0x0, 0x0, _0xfaf974, _0x4b3701, null, 0x1, _0x4e3a29), _0x21a88b['_targets']['start'](), _0x21a88b['flush'](), _0x21a88b['_targets']['end'](), _0x21a88b['_targets']['restore']();
                    var _0x20e79e = _0x21a88b['_targets']['getData'](0x0, 0x0, _0xfaf974, _0x4b3701);
                    _0x21a88b['destroy'](), _0x4bfbb0 = new Uint8Array(_0xfaf974 * _0x4b3701 * 0x4), _0x1af2fd = 0x0, _0x415124 = (_0x4b3701 - 0x1) * _0x5d2916;
                    for (_0x2d67e3 = _0x4b3701 - 0x1; _0x2d67e3 >= 0x0; _0x2d67e3--) {
                        _0x4bfbb0['set'](_0x20e79e['slice'](_0x415124, _0x415124 + _0x5d2916), _0x1af2fd), _0x1af2fd += _0x5d2916, _0x415124 -= _0x5d2916;
                    }
                    return _0x4bfbb0;
                }, _0x37b02b['_filter'] = function (_0x326586, _0x3a2d13, _0x28b615, _0x440ff3) {
                    var _0x42cac1 = _0x3a2d13, _0xe65531 = this['_next'];
                    if (_0xe65531) {
                        var _0x34b54a = _0x326586['filters'], _0xa965fb = _0x34b54a['length'];
                        if (_0xa965fb == 0x1 && _0x34b54a[0x0]['type'] == 0x20) {
                            _0x3a2d13['save'](), _0x3a2d13['setColorFi' + 'lter'](_0x34b54a[0x0]), _0xe65531['_fun']['call'](_0xe65531, _0x326586, _0x3a2d13, _0x28b615, _0x440ff3), _0x3a2d13['restore']();
                            return;
                        }
                        ;
                        var _0x316469 = _0xd9aa33['create'](0x1, 0x0), _0x257eb4, _0x3c6c3a = _0x4eeaa7['TEMP'], _0x26b1c9 = _0x42cac1['_curMat'], _0x4c2aa7 = _0x4fb671['create']();
                        _0x26b1c9['copyTo'](_0x4c2aa7);
                        var _0x3ca39f = 0x0, _0x4e819c = 0x0, _0x234588 = ![], _0x41ac87 = null, _0x1b4d44 = _0x326586['_cacheStyl' + 'e']['filterCach' + 'e'] || null;
                        if (!_0x1b4d44 || _0x326586['getRepaint']() != 0x0) {
                            _0x234588 = _0x326586['_isHaveGlo' + 'wFilter']();
                            _0x234588 && (_0x3ca39f = 0x32, _0x4e819c = 0x19);
                            _0x257eb4 = new _0x4759e4(), _0x257eb4['copyFrom'](_0x326586['getSelfBou' + 'nds']()), _0x257eb4['x'] += _0x326586['x'], _0x257eb4['y'] += _0x326586['y'], _0x257eb4['x'] -= _0x326586['pivotX'] + 0x4, _0x257eb4['y'] -= _0x326586['pivotY'] + 0x4;
                            var _0x4fe7a6 = _0x257eb4['x'], _0x5c774f = _0x257eb4['y'];
                            _0x257eb4['width'] += _0x3ca39f + 0x8, _0x257eb4['height'] += _0x3ca39f + 0x8, _0x3c6c3a['x'] = _0x257eb4['x'] * _0x4c2aa7['a'] + _0x257eb4['y'] * _0x4c2aa7['c'], _0x3c6c3a['y'] = _0x257eb4['y'] * _0x4c2aa7['d'] + _0x257eb4['x'] * _0x4c2aa7['b'], _0x257eb4['x'] = _0x3c6c3a['x'], _0x257eb4['y'] = _0x3c6c3a['y'], _0x3c6c3a['x'] = _0x257eb4['width'] * _0x4c2aa7['a'] + _0x257eb4['height'] * _0x4c2aa7['c'], _0x3c6c3a['y'] = _0x257eb4['height'] * _0x4c2aa7['d'] + _0x257eb4['width'] * _0x4c2aa7['b'], _0x257eb4['width'] = _0x3c6c3a['x'], _0x257eb4['height'] = _0x3c6c3a['y'];
                            if (_0x257eb4['width'] <= 0x0 || _0x257eb4['height'] <= 0x0)
                                return;
                            _0x1b4d44 && _0xb36f96['releaseRT'](_0x1b4d44), _0x41ac87 = _0xb36f96['getRT'](_0x257eb4['width'], _0x257eb4['height']);
                            var _0x56650e = _0x1b4d44 = _0xb36f96['getRT'](_0x257eb4['width'], _0x257eb4['height']);
                            _0x326586['_getCacheS' + 'tyle']()['filterCach' + 'e'] = _0x1b4d44, _0x42cac1['pushRT'](), _0x42cac1['useRT'](_0x41ac87);
                            var _0x355cfd = _0x326586['x'] - _0x4fe7a6 + _0x4e819c, _0xc98818 = _0x326586['y'] - _0x5c774f + _0x4e819c;
                            _0xe65531['_fun']['call'](_0xe65531, _0x326586, _0x3a2d13, _0x355cfd, _0xc98818), _0x42cac1['useRT'](_0x56650e);
                            for (var _0x5061b7 = 0x0; _0x5061b7 < _0xa965fb; _0x5061b7++) {
                                _0x5061b7 != 0x0 && (_0x42cac1['useRT'](_0x41ac87), _0x42cac1['drawTarget'](_0x56650e, 0x0, 0x0, _0x257eb4['width'], _0x257eb4['height'], _0x4fb671['TEMP']['identity'](), _0x316469, null, _0x5c9116['TOINT']['overlay']), _0x42cac1['useRT'](_0x56650e));
                                ;
                                var _0x425424 = _0x34b54a[_0x5061b7];
                                switch (_0x425424['type']) {
                                case 0x10:
                                    _0x425424['_glRender'] && _0x425424['_glRender']['render'](_0x41ac87, _0x3a2d13, _0x257eb4['width'], _0x257eb4['height'], _0x425424);
                                    break;
                                case 0x8:
                                    _0x425424['_glRender'] && _0x425424['_glRender']['render'](_0x41ac87, _0x3a2d13, _0x257eb4['width'], _0x257eb4['height'], _0x425424);
                                    break;
                                case 0x20:
                                    _0x42cac1['setColorFi' + 'lter'](_0x425424), _0x42cac1['drawTarget'](_0x41ac87, 0x0, 0x0, _0x257eb4['width'], _0x257eb4['height'], _0x4fb671['EMPTY']['identity'](), _0xd9aa33['create'](0x1, 0x0)), _0x42cac1['setColorFi' + 'lter'](null);
                                    break;
                                }
                            }
                            _0x42cac1['popRT']();
                        } else {
                            _0x234588 = _0x326586['_cacheStyl' + 'e']['hasGlowFil' + 'ter'] || ![];
                            _0x234588 && (_0x3ca39f = 0x32, _0x4e819c = 0x19);
                            _0x257eb4 = _0x326586['getBounds']();
                            if (_0x257eb4['width'] <= 0x0 || _0x257eb4['height'] <= 0x0)
                                return;
                            _0x257eb4['width'] += _0x3ca39f, _0x257eb4['height'] += _0x3ca39f, _0x3c6c3a['x'] = _0x257eb4['x'] * _0x4c2aa7['a'] + _0x257eb4['y'] * _0x4c2aa7['c'], _0x3c6c3a['y'] = _0x257eb4['y'] * _0x4c2aa7['d'] + _0x257eb4['x'] * _0x4c2aa7['b'], _0x257eb4['x'] = _0x3c6c3a['x'], _0x257eb4['y'] = _0x3c6c3a['y'], _0x3c6c3a['x'] = _0x257eb4['width'] * _0x4c2aa7['a'] + _0x257eb4['height'] * _0x4c2aa7['c'], _0x3c6c3a['y'] = _0x257eb4['height'] * _0x4c2aa7['d'] + _0x257eb4['width'] * _0x4c2aa7['b'], _0x257eb4['width'] = _0x3c6c3a['x'], _0x257eb4['height'] = _0x3c6c3a['y'];
                        }
                        _0x28b615 = _0x28b615 - _0x4e819c - _0x326586['x'], _0x440ff3 = _0x440ff3 - _0x4e819c - _0x326586['y'], _0x3c6c3a['setTo'](_0x28b615, _0x440ff3), _0x4c2aa7['transformP' + 'oint'](_0x3c6c3a), _0x28b615 = _0x3c6c3a['x'] + _0x257eb4['x'], _0x440ff3 = _0x3c6c3a['y'] + _0x257eb4['y'], _0x42cac1['_drawRende' + 'rTexture'](_0x1b4d44, _0x28b615, _0x440ff3, _0x257eb4['width'], _0x257eb4['height'], _0x4fb671['TEMP']['identity'](), 0x1, _0x4a9aac['defuv']);
                        if (_0x41ac87) {
                            var _0x4ddac4 = _0x4f1d6e['create']([_0x41ac87], function (_0x2bbd5d) {
                                _0x2bbd5d['destroy']();
                            }, this);
                            _0x41ac87 = null, _0x3a2d13['addRenderO' + 'bject'](_0x4ddac4);
                        }
                        _0x4c2aa7['destroy']();
                    }
                }, _0x256e64['prototype']['getTexture'] = function () {
                    if (!this['_texture']) {
                        var _0x3933fe = new _0x466364();
                        _0x3933fe['loadImageS' + 'ource'](this['source']), this['_texture'] = new _0x4fcec0(_0x3933fe);
                    }
                    return this['_texture'];
                }, Float32Array['prototype']['slice'] || (Float32Array['prototype']['slice'] = _0x43d6a1['_float32Ar' + 'raySlice']), Uint16Array['prototype']['slice'] || (Uint16Array['prototype']['slice'] = _0x43d6a1['_uint16Arr' + 'aySlice']), Uint8Array['prototype']['slice'] || (Uint8Array['prototype']['slice'] = _0x43d6a1['_uint8Arra' + 'ySlice']);
            }, _0x43d6a1['enable'] = function () {
                _0x3592ad['__init__']();
                if (!_0x3592ad['_supportWe' + 'bGL'])
                    return ![];
                return _0x30d89b['isConchApp'] ? _0x43d6a1['_nativeRen' + 'der_enable']() : _0x43d6a1['_webglRend' + 'er_enable'](), !![];
            }, _0x43d6a1['onStageRes' + 'ize'] = function (_0x1abd4c, _0xddb0af) {
                if (_0x43d6a1['mainContex' + 't'] == null)
                    return;
                _0x43d6a1['mainContex' + 't']['viewport'](0x0, 0x0, _0x1abd4c, _0xddb0af), _0x5c6236['width'] = _0x1abd4c, _0x5c6236['height'] = _0xddb0af;
            }, _0x43d6a1['mainContex' + 't'] = null, _0x43d6a1['shaderHigh' + 'Precision'] = ![], _0x43d6a1['_isWebGL2'] = ![], _0x43d6a1['isNativeRe' + 'nder_enabl' + 'e'] = ![], _0x43d6a1;
        }(), _0x5c9116 = function () {
            function _0x3671e7() {
            }
            return _0x199b5b(_0x3671e7, 'laya.webgl' + '.canvas.Bl' + 'endMode'), _0x3671e7['_init_'] = function (_0x31e6b2) {
                _0x3671e7['fns'] = [
                    _0x3671e7['BlendNorma' + 'l'],
                    _0x3671e7['BlendAdd'],
                    _0x3671e7['BlendMulti' + 'ply'],
                    _0x3671e7['BlendScree' + 'n'],
                    _0x3671e7['BlendOverl' + 'ay'],
                    _0x3671e7['BlendLight'],
                    _0x3671e7['BlendMask'],
                    _0x3671e7['BlendDesti' + 'nationOut']
                ], _0x3671e7['targetFns'] = [
                    _0x3671e7['BlendNorma' + 'lTarget'],
                    _0x3671e7['BlendAddTa' + 'rget'],
                    _0x3671e7['BlendMulti' + 'plyTarget'],
                    _0x3671e7['BlendScree' + 'nTarget'],
                    _0x3671e7['BlendOverl' + 'ayTarget'],
                    _0x3671e7['BlendLight' + 'Target'],
                    _0x3671e7['BlendMask'],
                    _0x3671e7['BlendDesti' + 'nationOut']
                ];
            }, _0x3671e7['BlendNorma' + 'l'] = function (_0x1b83e9) {
                _0x21b46c['setBlendFu' + 'nc'](_0x1b83e9, 0x1, 0x303);
            }, _0x3671e7['BlendAdd'] = function (_0x168102) {
                _0x21b46c['setBlendFu' + 'nc'](_0x168102, 0x1, 0x304);
            }, _0x3671e7['BlendMulti' + 'ply'] = function (_0x453173) {
                _0x21b46c['setBlendFu' + 'nc'](_0x453173, 0x306, 0x303);
            }, _0x3671e7['BlendScree' + 'n'] = function (_0x3a94dc) {
                _0x21b46c['setBlendFu' + 'nc'](_0x3a94dc, 0x1, 0x1);
            }, _0x3671e7['BlendOverl' + 'ay'] = function (_0x31d00d) {
                _0x21b46c['setBlendFu' + 'nc'](_0x31d00d, 0x1, 0x301);
            }, _0x3671e7['BlendLight'] = function (_0x54dac8) {
                _0x21b46c['setBlendFu' + 'nc'](_0x54dac8, 0x1, 0x1);
            }, _0x3671e7['BlendNorma' + 'lTarget'] = function (_0x5d556a) {
                _0x21b46c['setBlendFu' + 'nc'](_0x5d556a, 0x1, 0x303);
            }, _0x3671e7['BlendAddTa' + 'rget'] = function (_0x4cd853) {
                _0x21b46c['setBlendFu' + 'nc'](_0x4cd853, 0x1, 0x304);
            }, _0x3671e7['BlendMulti' + 'plyTarget'] = function (_0x173e3a) {
                _0x21b46c['setBlendFu' + 'nc'](_0x173e3a, 0x306, 0x303);
            }, _0x3671e7['BlendScree' + 'nTarget'] = function (_0x25cee3) {
                _0x21b46c['setBlendFu' + 'nc'](_0x25cee3, 0x1, 0x1);
            }, _0x3671e7['BlendOverl' + 'ayTarget'] = function (_0x59bd6b) {
                _0x21b46c['setBlendFu' + 'nc'](_0x59bd6b, 0x1, 0x301);
            }, _0x3671e7['BlendLight' + 'Target'] = function (_0x4afe15) {
                _0x21b46c['setBlendFu' + 'nc'](_0x4afe15, 0x1, 0x1);
            }, _0x3671e7['BlendMask'] = function (_0x57eaa0) {
                _0x21b46c['setBlendFu' + 'nc'](_0x57eaa0, 0x0, 0x302);
            }, _0x3671e7['BlendDesti' + 'nationOut'] = function (_0x19be34) {
                _0x21b46c['setBlendFu' + 'nc'](_0x19be34, 0x0, 0x0);
            }, _0x3671e7['activeBlen' + 'dFunction'] = null, _0x3671e7['NAMES'] = [
                'normal',
                'add',
                'multiply',
                'screen',
                'overlay',
                'light',
                'mask',
                'destinatio' + 'n-out'
            ], _0x3671e7['TOINT'] = {
                'normal': 0x0,
                'add': 0x1,
                'multiply': 0x2,
                'screen': 0x3,
                'overlay': 0x4,
                'light': 0x5,
                'mask': 0x6,
                'destination-out': 0x7,
                'lighter': 0x1
            }, _0x3671e7['NORMAL'] = 'normal', _0x3671e7['ADD'] = 'add', _0x3671e7['MULTIPLY'] = 'multiply', _0x3671e7['SCREEN'] = 'screen', _0x3671e7['OVERLAY'] = 'overlay', _0x3671e7['LIGHT'] = 'light', _0x3671e7['MASK'] = 'mask', _0x3671e7['DESTINATIO' + 'NOUT'] = 'destinatio' + 'n-out', _0x3671e7['LIGHTER'] = 'lighter', _0x3671e7['fns'] = [], _0x3671e7['targetFns'] = [], _0x3671e7;
        }(), _0x1842c0 = function () {
            var _0x13780e;
            function _0x21c205() {
                this['_lastOriX'] = 0x0, this['_lastOriY'] = 0x0, this['paths'] = [], this['_curPath'] = null;
            }
            _0x199b5b(_0x21c205, 'laya.webgl' + '.canvas.Pa' + 'th');
            var _0x283978 = _0x21c205['prototype'];
            return _0x283978['beginPath'] = function (_0x2e0d78) {
                this['paths']['length'] = 0x1, this['_curPath'] = this['paths'][0x0] = new _0x13780e(), this['_curPath']['convex'] = _0x2e0d78;
            }, _0x283978['closePath'] = function () {
                this['_curPath']['loop'] = !![];
            }, _0x283978['newPath'] = function () {
                this['_curPath'] = new _0x13780e(), this['paths']['push'](this['_curPath']);
            }, _0x283978['addPoint'] = function (_0x1bc38a, _0x3f8330) {
                this['_curPath']['path']['push'](_0x1bc38a, _0x3f8330);
            }, _0x283978['push'] = function (_0x68eaa, _0x14769e) {
                if (!this['_curPath'])
                    this['_curPath'] = new _0x13780e(), this['paths']['push'](this['_curPath']);
                else
                    this['_curPath']['path']['length'] > 0x0 && (this['_curPath'] = new _0x13780e(), this['paths']['push'](this['_curPath']));
                ;
                var _0x12361b = this['_curPath'];
                _0x12361b['path'] = _0x68eaa['slice'](), _0x12361b['convex'] = _0x14769e;
            }, _0x283978['reset'] = function () {
                this['paths']['length'] = 0x0;
            }, _0x21c205['__init$'] = function () {
                _0x13780e = function () {
                    function _0x1d916d() {
                        this['path'] = [], this['loop'] = ![], this['convex'] = ![];
                    }
                    return _0x199b5b(_0x1d916d, ''), _0x1d916d;
                }();
            }, _0x21c205;
        }(), _0xad6375 = function () {
            function _0x57f5ee() {
                this['_glBuffer'] = null, this['_buffer'] = null, this['_bufferTyp' + 'e'] = 0x0, this['_bufferUsa' + 'ge'] = 0x0, this['_byteLengt' + 'h'] = 0x0, this['_glBuffer'] = _0x33edbf['instance']['createBuff' + 'er']();
            }
            _0x199b5b(_0x57f5ee, 'laya.webgl' + '.utils.Buf' + 'fer');
            var _0x171767 = _0x57f5ee['prototype'];
            return _0x171767['_bindForVA' + 'O'] = function () {
            }, _0x171767['bind'] = function () {
                return ![];
            }, _0x171767['destroy'] = function () {
                this['_glBuffer'] && (_0x33edbf['instance']['deleteBuff' + 'er'](this['_glBuffer']), this['_glBuffer'] = null);
            }, _0x3a2bd3(0x0, _0x171767, 'bufferUsag' + 'e', function () {
                return this['_bufferUsa' + 'ge'];
            }), _0x57f5ee['_bindedVer' + 'texBuffer'] = null, _0x57f5ee['_bindedInd' + 'exBuffer'] = null, _0x57f5ee;
        }(), _0xdd58f5 = function () {
            function _0x489257() {
                this['_customCmd' + 's'] = null, this['_targets'] = null, this['_width'] = 0x0, this['_height'] = 0x0, this['_cmdEncode' + 'r'] = null;
            }
            _0x199b5b(_0x489257, 'laya.layag' + 'l.LayaGLRe' + 'nderingCon' + 'text');
            var _0x4a2272 = _0x489257['prototype'];
            return _0x4a2272['drawTextur' + 'e'] = function (_0x3e3519, _0x48a786, _0x5e2cee, _0x2ad074, _0x4e15fb) {
                _0x48a786 === void 0x0 && (_0x48a786 = 0x0), _0x5e2cee === void 0x0 && (_0x5e2cee = 0x0), _0x2ad074 === void 0x0 && (_0x2ad074 = 0x0), _0x4e15fb === void 0x0 && (_0x4e15fb = 0x0), this['drawImage'](_0x3e3519, _0x48a786, _0x5e2cee, _0x2ad074, _0x4e15fb);
            }, _0x4a2272['drawImage'] = function (_0x118f4a, _0x49c3f5, _0x1f7cc5, _0x10ef13, _0x2186a8) {
                _0x49c3f5 === void 0x0 && (_0x49c3f5 = 0x0), _0x1f7cc5 === void 0x0 && (_0x1f7cc5 = 0x0), _0x10ef13 === void 0x0 && (_0x10ef13 = 0x0), _0x2186a8 === void 0x0 && (_0x2186a8 = 0x0), this['_customCmd' + 's']['push'](_0x25772b['create']['call'](this, _0x118f4a, _0x49c3f5, _0x1f7cc5, _0x10ef13, _0x2186a8));
            }, _0x4a2272['fillText'] = function (_0x3b17a6, _0x13c9d5, _0x171cfe, _0x233435, _0x2272f5, _0x505644) {
                this['_customCmd' + 's']['push'](_0x43187f['create']['call'](this, _0x3b17a6, _0x13c9d5, _0x171cfe, _0x233435 || _0x566c92['defaultFon' + 'tStr'](), _0x2272f5, _0x505644));
            }, _0x4a2272['save'] = function () {
                this['_customCmd' + 's']['push'](_0x2cf87d['create']['call'](this));
            }, _0x4a2272['restore'] = function () {
                this['_customCmd' + 's']['push'](_0x313368['create']['call'](this));
            }, _0x4a2272['translate'] = function (_0x5a138d, _0x2140a3) {
                this['_customCmd' + 's']['push'](_0x5b3cf5['create']['call'](this, _0x5a138d, _0x2140a3));
            }, _0x4a2272['rotate'] = function (_0x59b9ec, _0x4ff0f5, _0x3642d5) {
                _0x4ff0f5 === void 0x0 && (_0x4ff0f5 = 0x0), _0x3642d5 === void 0x0 && (_0x3642d5 = 0x0), this['_customCmd' + 's']['push'](_0x2350af['create']['call'](this, _0x59b9ec, _0x4ff0f5, _0x3642d5));
            }, _0x4a2272['scale'] = function (_0x2ac449, _0x458597, _0x54216f, _0x62a5c3) {
                _0x54216f === void 0x0 && (_0x54216f = 0x0), _0x62a5c3 === void 0x0 && (_0x62a5c3 = 0x0), this['_customCmd' + 's']['push'](_0x312e0a['create']['call'](this, _0x2ac449, _0x458597, _0x54216f, _0x62a5c3));
            }, _0x4a2272['transform'] = function (_0x729682, _0xcbfc87, _0x2dbbfe) {
                _0xcbfc87 === void 0x0 && (_0xcbfc87 = 0x0), _0x2dbbfe === void 0x0 && (_0x2dbbfe = 0x0), this['_customCmd' + 's']['push'](_0x5cf33b['create']['call'](this, _0x729682, _0xcbfc87, _0x2dbbfe));
            }, _0x4a2272['beginRT'] = function () {
                _0x4a9aac['pushRT'](), this['_targets']['start'](), this['clear']();
            }, _0x4a2272['clear'] = function () {
            }, _0x4a2272['endRT'] = function () {
                _0x4a9aac['popRT']();
            }, _0x4a2272['drawCanvas'] = function (_0x2db8c1, _0x534266, _0x30cbb4) {
                var _0x3c9ca3 = _0x2db8c1['context']['_targets'];
                this['_customCmd' + 's']['push'](_0xbb80bb['create']['call'](this, _0x3c9ca3, _0x534266, _0x30cbb4, _0x3c9ca3['width'], _0x3c9ca3['height']));
            }, _0x4a2272['drawTarget'] = function (_0x357912, _0x24daf6, _0xa1821c, _0x85030d, _0x4a66e9, _0x26a9a4) {
                var _0x552b66 = new ArrayBuffer(0x18 * 0x4), _0x255119 = new Int32Array(_0x552b66), _0x55233c = new Float32Array(_0x552b66), _0x162957 = _0x4a66e9 != 0x0 ? _0x4a66e9 : _0x24daf6['width'], _0x1b7996 = _0x26a9a4 != 0x0 ? _0x26a9a4 : _0x24daf6['height'], _0x1e20c9 = _0x4a9aac['flipyuv'], _0x2f5e42 = 0x0;
                _0x55233c[_0x2f5e42++] = _0xa1821c, _0x55233c[_0x2f5e42++] = _0x85030d, _0x55233c[_0x2f5e42++] = _0x1e20c9[0x0], _0x55233c[_0x2f5e42++] = _0x1e20c9[0x1], _0x255119[_0x2f5e42++] = 0xffffffff, _0x255119[_0x2f5e42++] = 0xffffffff, _0x55233c[_0x2f5e42++] = _0xa1821c + _0x162957, _0x55233c[_0x2f5e42++] = _0x85030d, _0x55233c[_0x2f5e42++] = _0x1e20c9[0x2], _0x55233c[_0x2f5e42++] = _0x1e20c9[0x3], _0x255119[_0x2f5e42++] = 0xffffffff, _0x255119[_0x2f5e42++] = 0xffffffff, _0x55233c[_0x2f5e42++] = _0xa1821c + _0x162957, _0x55233c[_0x2f5e42++] = _0x85030d + _0x1b7996, _0x55233c[_0x2f5e42++] = _0x1e20c9[0x4], _0x55233c[_0x2f5e42++] = _0x1e20c9[0x5], _0x255119[_0x2f5e42++] = 0xffffffff, _0x255119[_0x2f5e42++] = 0xffffffff, _0x55233c[_0x2f5e42++] = _0xa1821c, _0x55233c[_0x2f5e42++] = _0x85030d + _0x1b7996, _0x55233c[_0x2f5e42++] = _0x1e20c9[0x6], _0x55233c[_0x2f5e42++] = _0x1e20c9[0x7], _0x255119[_0x2f5e42++] = 0xffffffff, _0x255119[_0x2f5e42++] = 0xffffffff, _0x357912['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x357912['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x357912['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x357912['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x357912['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x357912['uniformTex' + 'ture'](0x0, 0x84c0, _0x24daf6['_getSource']()), _0x357912['setRectMes' + 'h'](0x1, _0x552b66), _0x357912['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x357912['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf);
            }, _0x4a2272['getImageDa' + 'ta'] = function (_0x4cc2fa, _0xde43bb, _0x2eae69, _0x517d83, _0x3edd21) {
                var _0x2598f8 = this['_targets']['sourceWidt' + 'h'], _0x1b30ae = this['_targets']['sourceHeig' + 'ht'];
                if (_0x4cc2fa < 0x0 || _0xde43bb < 0x0 || _0x2eae69 < 0x0 || _0x517d83 < 0x0 || _0x2eae69 > _0x2598f8 || _0x517d83 > _0x1b30ae)
                    return;
                !this['_cmdEncode' + 'r'] && (this['_cmdEncode' + 'r'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![]));
                ;
                var _0x2c871e = _0x33edbf['instance'];
                this['_cmdEncode' + 'r']['beginEncod' + 'ing'](), this['_cmdEncode' + 'r']['clearEncod' + 'ing'](), _0x4a9aac['pushRT'](), this['_targets']['start'](), _0x2c871e['readPixels' + 'Async'](_0x4cc2fa, _0xde43bb, _0x2eae69, _0x517d83, 0x1908, 0x1401, function (_0x2d3898) {
                    _0x3edd21(_0x2d3898);
                }), this['endRT'](), this['_cmdEncode' + 'r']['endEncodin' + 'g'](), _0x2c871e['useCommand' + 'Encoder'](this['_cmdEncode' + 'r']['getPtrID'](), -0x1, 0x0);
            }, _0x4a2272['toBase64'] = function (_0x3afa27, _0xa499ec, _0x47efe7) {
                var _0x4db00a = this['_targets']['sourceWidt' + 'h'], _0x71252b = this['_targets']['sourceHeig' + 'ht'];
                this['getImageDa' + 'ta'](0x0, 0x0, _0x4db00a, _0x71252b, function (_0x1d1147) {
                    var _0x5de380 = conchToBase64(_0x3afa27, _0xa499ec, _0x1d1147, _0x4db00a, _0x71252b);
                    _0x47efe7(_0x5de380);
                });
            }, _0x3a2bd3(0x0, _0x4a2272, 'asBitmap', function () {
                return !this['_targets'];
            }, function (_0x2488a0) {
                if (_0x2488a0) {
                    this['_targets'] || (this['_targets'] = new _0x4a9aac(this['_width'], this['_height'], 0x1, -0x1));
                    if (!this['_width'] || !this['_height'])
                        throw Error('asBitmap\x20n' + 'o\x20size!');
                } else
                    this['_targets'] = null;
            }), _0x489257;
        }(), _0x3f2e79 = function () {
            function _0x484a54() {
                this['_draw_text' + 'ure_cmd_en' + 'coder_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x40, 0x20, !![]);
            }
            _0x199b5b(_0x484a54, 'laya.layag' + 'l.cmdNativ' + 'e.FillWord' + 'sCmdNative');
            var _0x1bd155 = _0x484a54['prototype'];
            return _0x1bd155['createFill' + 'Text'] = function (_0x417643, _0x59dc8d, _0x5e4079, _0x3b14ee, _0x3b31aa, _0x42b58d) {
                var _0x252ac0 = _0x4b1f30['create'](_0x42b58d), _0x28310d = _0x252ac0['numColor'], _0x4218e2 = {};
                _0x4218e2['_curMat'] = new _0x4fb671(), _0x4218e2['_italicDeg'] = 0x0, _0x4218e2['_drawTextu' + 'reUseColor'] = 0xffffffff, _0x4218e2['fillStyle'] = _0x42b58d, _0x4218e2['_fillColor'] = 0xffffffff, _0x4218e2['setFillCol' + 'or'] = function (_0x313364) {
                    _0x4218e2['_fillColor'] = _0x313364;
                }, _0x4218e2['getFillCol' + 'or'] = function () {
                    return _0x4218e2['_fillColor'];
                }, _0x4218e2['mixRGBandA' + 'lpha'] = function (_0x5a7161) {
                    return _0x5a7161;
                }, _0x4218e2['_drawTextu' + 'reM'] = function (_0x3d5031, _0x2b3068, _0x203c6f, _0x10c0c7, _0x1dbf1c, _0x36cf1a, _0x46fd50, _0x512fb3) {
                    _0x417643['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x417643['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x417643['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x417643['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x417643['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x417643['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x417643['uniformTex' + 'ture'](0x3, 0x84c0, _0x3d5031['bitmap']['_glTexture']);
                    var _0x2c1fc7 = new Float32Array([
                            _0x2b3068,
                            _0x203c6f,
                            _0x512fb3[0x0],
                            _0x512fb3[0x1],
                            0x0,
                            0x0,
                            _0x2b3068 + _0x10c0c7,
                            _0x203c6f,
                            _0x512fb3[0x2],
                            _0x512fb3[0x3],
                            0x0,
                            0x0,
                            _0x2b3068 + _0x10c0c7,
                            _0x203c6f + _0x1dbf1c,
                            _0x512fb3[0x4],
                            _0x512fb3[0x5],
                            0x0,
                            0x0,
                            _0x2b3068,
                            _0x203c6f + _0x1dbf1c,
                            _0x512fb3[0x6],
                            _0x512fb3[0x7],
                            0x0,
                            0x0
                        ]), _0x325853 = new Int32Array(_0x2c1fc7['buffer']);
                    _0x325853[0x4] = _0x325853[0xa] = _0x325853[0x10] = _0x325853[0x16] = 0xffffffff, _0x325853[0x5] = _0x325853[0xb] = _0x325853[0x11] = _0x325853[0x17] = 0xffffffff, _0x417643['setRectMes' + 'h'](0x1, _0x2c1fc7, _0x2c1fc7['length']), _0x417643['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x417643['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x417643);
                }, _0x484a54['cbook']['filltext_n' + 'ative'](_0x4218e2, null, _0x59dc8d, _0x5e4079, _0x3b14ee, _0x3b31aa, _0x42b58d, null, 0x0, null);
            }, _0x1bd155['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, this['words'] = null, _0x5460aa['recover']('FillWordsC' + 'md', this);
            }, _0x3a2bd3(0x0, _0x1bd155, 'cmdID', function () {
                return 'FillWords';
            }), _0x484a54['create'] = function (_0x1a62b9, _0x3cf1e5, _0x4d5b6f, _0x17378c, _0x3295b1) {
                if (!_0x484a54['cbook'])
                    new Error('Error:char' + 'book\x20not\x20c' + 'reate!');
                var _0x5eaf90 = _0x5460aa['getItemByC' + 'lass']('FillWordsC' + 'md', _0x484a54), _0x18b07b = _0x5eaf90['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x5eaf90['words'] = _0x1a62b9, _0x5eaf90['x'] = _0x3cf1e5, _0x5eaf90['y'] = _0x4d5b6f, _0x5eaf90['font'] = _0x17378c, _0x5eaf90['color'] = _0x3295b1, _0x5eaf90['_draw_text' + 'ure_cmd_en' + 'coder_']['clearEncod' + 'ing'](), _0x5eaf90['createFill' + 'Text'](_0x5eaf90['_draw_text' + 'ure_cmd_en' + 'coder_'], _0x1a62b9, _0x3cf1e5, _0x4d5b6f, _0x17378c, _0x3295b1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x5eaf90['_draw_text' + 'ure_cmd_en' + 'coder_']), _0x18b07b['useCommand' + 'Encoder'](_0x5eaf90['_draw_text' + 'ure_cmd_en' + 'coder_']['getPtrID'](), -0x1, -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x18b07b), _0x5eaf90;
            }, _0x484a54['ID'] = 'FillWords', _0x3a2911(_0x484a54, [
                'cbook',
                function () {
                    return this['cbook'] = _0x4a6519['textRender'];
                }
            ]), _0x484a54;
        }(), _0x5edd11 = function () {
            function _0x387f60() {
                this['_matrix'] = new _0x4fb671();
            }
            _0x199b5b(_0x387f60, 'laya.webgl' + '.canvas.sa' + 've.SaveTra' + 'nsform');
            var _0x26d293 = _0x387f60['prototype'];
            return _0x4a6519['imps'](_0x26d293, { 'laya.webgl.canvas.save.ISaveData': !![] }), _0x26d293['isSaveMark'] = function () {
                return ![];
            }, _0x26d293['restore'] = function (_0x1cf23b) {
                _0x1cf23b['_curMat'] = this['_savematri' + 'x'], _0x387f60['POOL'][_0x387f60['POOL']['_length']++] = this;
            }, _0x387f60['save'] = function (_0x59edda) {
                var _0x394ff4 = _0x59edda['_saveMark'];
                if ((_0x394ff4['_saveuse'] & 0x800) === 0x800)
                    return;
                _0x394ff4['_saveuse'] |= 0x800;
                var _0x9a1bab = _0x387f60['POOL'], _0x4d9ad7 = _0x9a1bab['_length'] > 0x0 ? _0x9a1bab[--_0x9a1bab['_length']] : new _0x387f60();
                _0x4d9ad7['_savematri' + 'x'] = _0x59edda['_curMat'], _0x59edda['_curMat'] = _0x59edda['_curMat']['copyTo'](_0x4d9ad7['_matrix']);
                var _0x159357 = _0x59edda['_save'];
                _0x159357[_0x159357['_length']++] = _0x4d9ad7;
            }, _0x387f60['POOL'] = _0x2f38dd['_createArr' + 'ay'](), _0x387f60;
        }(), _0x1327ac = function () {
            function _0x3b8d52() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_graphicsC' + 'mdEncoder_' + 'fill'] = null, this['_paramData' + '_fill'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_paths'] = null, this['_brush'] = null, this['_pen'] = null, this['_vertNum'] = 0x0, this['_startOriX'] = 0x0, this['_startOriY'] = 0x0, this['_lastOriX'] = 0x0, this['_lastOriY'] = 0x0, this['SEGNUM'] = 0x20, this['lines_ibBu' + 'ffer'] = null, this['lines_vbBu' + 'ffer'] = null, this['_lines_ibS' + 'ize'] = 0x0, this['_lines_vbS' + 'ize'] = 0x0, this['fill_ibBuf' + 'fer'] = null, this['fill_vbBuf' + 'fer'] = null, this['_fill_ibSi' + 'ze'] = 0x0, this['_fill_vbSi' + 'ze'] = 0x0, this['_cmdCurren' + 'tPos'] = 0x0, this['_points'] = [], this['_lines_ibA' + 'rray'] = [], this['_lines_vbA' + 'rray'] = [], this['_fill_ibAr' + 'ray'] = [], this['_fill_vbAr' + 'ray'] = [];
            }
            _0x199b5b(_0x3b8d52, 'laya.layag' + 'l.cmdNativ' + 'e.DrawPath' + 'CmdNative');
            var _0x12b4f2 = _0x3b8d52['prototype'];
            return _0x12b4f2['_arcTo'] = function (_0x500e0b) {
                var _0x3d8891 = _0x500e0b[0x1], _0x4c66a5 = _0x500e0b[0x2], _0x9b6952 = _0x500e0b[0x3], _0x5bcece = _0x500e0b[0x4], _0x3f9d01 = _0x500e0b[0x5], _0x26ff51 = 0x0, _0x14d31b = 0x0, _0x22e6d8 = 0x0, _0x39853d = this['_lastOriX'] - _0x3d8891, _0x26fa3b = this['_lastOriY'] - _0x4c66a5, _0x38b359 = Math['sqrt'](_0x39853d * _0x39853d + _0x26fa3b * _0x26fa3b);
                if (_0x38b359 <= 0.000001)
                    return;
                ;
                var _0x515552 = _0x39853d / _0x38b359, _0x182544 = _0x26fa3b / _0x38b359, _0x50136f = _0x9b6952 - _0x3d8891, _0x3c4a1f = _0x5bcece - _0x4c66a5, _0x2831e8 = _0x50136f * _0x50136f + _0x3c4a1f * _0x3c4a1f, _0x5bac82 = Math['sqrt'](_0x2831e8);
                if (_0x5bac82 <= 0.000001)
                    return;
                ;
                var _0xa105c4 = _0x50136f / _0x5bac82, _0x4010b2 = _0x3c4a1f / _0x5bac82, _0x331cee = _0x515552 + _0xa105c4, _0x5033cb = _0x182544 + _0x4010b2, _0x329f4d = Math['sqrt'](_0x331cee * _0x331cee + _0x5033cb * _0x5033cb);
                if (_0x329f4d <= 0.000001)
                    return;
                ;
                var _0x57b450 = _0x331cee / _0x329f4d, _0x23d9ac = _0x5033cb / _0x329f4d, _0x67aa86 = Math['acos'](_0x57b450 * _0x515552 + _0x23d9ac * _0x182544), _0x9083ca = Math['PI'] / 0x2 - _0x67aa86;
                _0x38b359 = _0x3f9d01 / Math['tan'](_0x9083ca);
                var _0x47bb19 = _0x38b359 * _0x515552 + _0x3d8891, _0x4ddb7f = _0x38b359 * _0x182544 + _0x4c66a5, _0x475f6c = Math['sqrt'](_0x38b359 * _0x38b359 + _0x3f9d01 * _0x3f9d01), _0x344e4d = _0x3d8891 + _0x57b450 * _0x475f6c, _0x8f28b3 = _0x4c66a5 + _0x23d9ac * _0x475f6c, _0x3097d9 = _0x38b359 * _0xa105c4 + _0x3d8891, _0x1435b3 = _0x38b359 * _0x4010b2 + _0x4c66a5, _0xee29f8 = _0x515552 * _0x4010b2 - _0x182544 * _0xa105c4, _0x5400a6 = 0x0, _0x462684 = 0x0, _0x12cbfa = 0x0;
                if (_0xee29f8 >= 0x0) {
                    _0x5400a6 = _0x9083ca * 0x2;
                    var _0x5cdc05 = _0x5400a6 / this['SEGNUM'];
                    _0x462684 = Math['sin'](_0x5cdc05), _0x12cbfa = Math['cos'](_0x5cdc05);
                } else
                    _0x5400a6 = -_0x9083ca * 0x2, _0x5cdc05 = _0x5400a6 / this['SEGNUM'], _0x462684 = Math['sin'](_0x5cdc05), _0x12cbfa = Math['cos'](_0x5cdc05);
                ;
                var _0x2b17bc = this['_lastOriX'], _0x4fd92e = this['_lastOriY'], _0x4d6722 = _0x47bb19 - _0x344e4d, _0x163a29 = _0x4ddb7f - _0x8f28b3, _0x1551e8 = 0x0, _0x466885 = 0x0;
                for (_0x26ff51 = 0x0; _0x26ff51 < this['SEGNUM']; _0x26ff51++) {
                    var _0x1b13bd = _0x4d6722 * _0x12cbfa + _0x163a29 * _0x462684, _0x250523 = -_0x4d6722 * _0x462684 + _0x163a29 * _0x12cbfa;
                    _0x14d31b = _0x1b13bd + _0x344e4d, _0x22e6d8 = _0x250523 + _0x8f28b3, (Math['abs'](_0x2b17bc - _0x14d31b) > 0.1 || Math['abs'](_0x4fd92e - _0x22e6d8) > 0.1) && (this['_points']['push'](_0x14d31b), this['_points']['push'](_0x22e6d8)), _0x4d6722 = _0x1b13bd, _0x163a29 = _0x250523;
                }
            }, _0x12b4f2['recover'] = function () {
                this['_paths'] = null, this['_brush'] = null, this['_pen'] = null, this['_points']['length'] = 0x0, this['_lines_ibA' + 'rray']['length'] = 0x0, this['_lines_vbA' + 'rray']['length'] = 0x0, this['_fill_ibAr' + 'ray']['length'] = 0x0, this['_fill_vbAr' + 'ray']['length'] = 0x0, _0x5460aa['recover']('DrawPathCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0x12b4f2, 'cmdID', function () {
                return 'DrawPath';
            }), _0x3a2bd3(0x0, _0x12b4f2, 'paths', function () {
                return this['_paths'];
            }, function (_0x550ed0) {
                this['_paths'] = _0x550ed0;
            }), _0x3a2bd3(0x0, _0x12b4f2, 'x', function () {
                return this['_x'];
            }, function (_0x56c249) {
                this['_x'] = _0x56c249;
                var _0x6665f3 = this['lines_vbBu' + 'ffer']['_float32Da' + 'ta'], _0x35fbf8 = 0x0;
                for (var _0x33a044 = 0x0; _0x33a044 < this['_vertNum']; _0x33a044++) {
                    _0x6665f3[_0x35fbf8++] = this['_lines_vbA' + 'rray'][_0x33a044 * 0x2] + _0x56c249, _0x35fbf8++, _0x35fbf8++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['lines_vbBu' + 'ffer']);
            }), _0x3a2bd3(0x0, _0x12b4f2, 'y', function () {
                return this['_y'];
            }, function (_0x2ac4c6) {
                this['_y'] = _0x2ac4c6;
                var _0x33c97c = this['lines_vbBu' + 'ffer']['_float32Da' + 'ta'], _0x2e84b4 = 0x0;
                for (var _0x5ea6b0 = 0x0; _0x5ea6b0 < this['_vertNum']; _0x5ea6b0++) {
                    _0x2e84b4++, _0x33c97c[_0x2e84b4++] = this['_lines_vbA' + 'rray'][_0x5ea6b0 * 0x2 + 0x1] + _0x2ac4c6, _0x2e84b4++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['lines_vbBu' + 'ffer']);
            }), _0x3a2bd3(0x0, _0x12b4f2, 'brush', function () {
                return this['_brush'];
            }, function (_0x44948a) {
                !this['_brush'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_brush'] = _0x44948a;
                var _0x4be1fe = this['_vertNum'], _0x49e0be = _0x576d8c['earcut'](this['_points'], null, 0x2);
                if (_0x49e0be['length'] > 0x0) {
                    (!this['fill_ibBuf' + 'fer'] || this['fill_ibBuf' + 'fer']['getByteLen' + 'gth']() < _0x49e0be['length'] * 0x2) && (this['fill_ibBuf' + 'fer'] = new ParamData(_0x49e0be['length'] * 0x2, !![], !![]));
                    this['_fill_ibSi' + 'ze'] = _0x49e0be['length'] * 0x2;
                    var _0xa94950 = this['fill_ibBuf' + 'fer']['_int16Data'], _0xb9df21 = 0x0;
                    for (var _0x39d24c = 0x0; _0x39d24c < _0x49e0be['length']; _0x39d24c++) {
                        _0xa94950[_0xb9df21++] = _0x49e0be[_0x39d24c];
                    }
                }
                ;
                var _0x469fb9 = _0x4b1f30['create'](_0x44948a['fillStyle']), _0x32b4f0 = _0x469fb9['numColor'];
                (!this['fill_vbBuf' + 'fer'] || this['fill_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['fill_vbBuf' + 'fer'] = new ParamData(_0x4be1fe * 0x3 * 0x4, !![]));
                this['_fill_vbSi' + 'ze'] = this['_vertNum'] * 0x3 * 0x4;
                var _0x404d18 = this['fill_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x553dc6 = this['fill_vbBuf' + 'fer']['_int32Data'], _0xfc1f94 = 0x0;
                for (var _0x560411 = 0x0; _0x560411 < this['_vertNum']; _0x560411++) {
                    _0x404d18[_0xfc1f94++] = this['_points'][_0x560411 * 0x2] + this['x'], _0x404d18[_0xfc1f94++] = this['_points'][_0x560411 * 0x2 + 0x1] + this['y'], _0x553dc6[_0xfc1f94++] = _0x32b4f0;
                }
                ;
                var _0x2e68c2 = this['_paramData']['_int32Data'];
                _0x2e68c2[_0x3b8d52['_PARAM_FIL' + 'L_VB_POS_']] = this['fill_vbBuf' + 'fer']['getPtrID'](), _0x2e68c2[_0x3b8d52['_PARAM_FIL' + 'L_IB_POS_']] = this['fill_ibBuf' + 'fer']['getPtrID'](), _0x2e68c2[_0x3b8d52['_PARAM_FIL' + 'L_VB_SIZE_' + 'POS_']] = this['_fill_vbSi' + 'ze'], _0x2e68c2[_0x3b8d52['_PARAM_FIL' + 'L_IB_SIZE_' + 'POS_']] = this['_fill_ibSi' + 'ze'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['fill_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['fill_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x12b4f2, 'pen', function () {
                return this['_pen'];
            }, function (_0x497f17) {
                this['_pen'] = _0x497f17, this['_lines_ibA' + 'rray']['length'] = 0x0, this['_lines_vbA' + 'rray']['length'] = 0x0, _0x2fe41e['createLine' + '2'](this['_points'], this['_lines_ibA' + 'rray'], _0x497f17['lineWidth'], 0x0, this['_lines_vbA' + 'rray'], ![]);
                var _0x497710 = _0x4b1f30['create'](_0x497f17['strokeStyl' + 'e']), _0x152287 = _0x497710['numColor'], _0x37ecb6 = this['_vertNum'];
                (!this['lines_vbBu' + 'ffer'] || this['lines_vbBu' + 'ffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['lines_vbBu' + 'ffer'] = new ParamData(_0x37ecb6 * 0x3 * 0x4, !![]));
                this['_lines_vbS' + 'ize'] = this['_vertNum'] * 0x3 * 0x4;
                var _0x214100 = this['lines_vbBu' + 'ffer']['_float32Da' + 'ta'], _0x5b5f4f = this['lines_vbBu' + 'ffer']['_int32Data'], _0x44fd8a = 0x0;
                for (var _0x6d1c21 = 0x0; _0x6d1c21 < this['_vertNum']; _0x6d1c21++) {
                    _0x214100[_0x44fd8a++] = this['_lines_vbA' + 'rray'][_0x6d1c21 * 0x2] + this['x'], _0x214100[_0x44fd8a++] = this['_lines_vbA' + 'rray'][_0x6d1c21 * 0x2 + 0x1] + this['y'], _0x5b5f4f[_0x44fd8a++] = _0x152287;
                }
                (!this['lines_ibBu' + 'ffer'] || this['lines_ibBu' + 'ffer']['getByteLen' + 'gth']() < (this['_vertNum'] - 0x2) * 0x3 * 0x2) && (this['lines_ibBu' + 'ffer'] = new ParamData((_0x37ecb6 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_lines_ibS' + 'ize'] = (this['_vertNum'] - 0x2) * 0x3 * 0x2;
                var _0xd0515b = this['lines_ibBu' + 'ffer']['_int16Data'];
                for (var _0x2674a5 = 0x0; _0x2674a5 < (this['_vertNum'] - 0x2) * 0x3; _0x2674a5++) {
                    _0xd0515b[_0x2674a5] = this['_lines_ibA' + 'rray'][_0x2674a5];
                }
                _0x5b5f4f = this['_paramData']['_int32Data'], _0x5b5f4f[_0x3b8d52['_PARAM_LIN' + 'ES_VB_POS_']] = this['lines_vbBu' + 'ffer']['getPtrID'](), _0x5b5f4f[_0x3b8d52['_PARAM_LIN' + 'ES_IB_POS_']] = this['lines_ibBu' + 'ffer']['getPtrID'](), _0x5b5f4f[_0x3b8d52['_PARAM_LIN' + 'ES_VB_SIZE' + '_POS_']] = this['_lines_vbS' + 'ize'], _0x5b5f4f[_0x3b8d52['_PARAM_LIN' + 'ES_IB_SIZE' + '_POS_']] = this['_lines_ibS' + 'ize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['lines_vbBu' + 'ffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['lines_ibBu' + 'ffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3b8d52['create'] = function (_0x486253, _0x3a965a, _0x3b749f, _0x2f1fcc, _0x324ca2) {
                var _0x288fa8 = _0x5460aa['getItemByC' + 'lass']('DrawPathCm' + 'd', _0x3b8d52);
                _0x288fa8['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] && (_0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xbc, 0x20, !![]), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['setMeshExB' + 'yParamData'](_0x3b8d52['_PARAM_LIN' + 'ES_VB_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_VB_SIZE' + '_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_IB_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_IB_SIZE' + '_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']));
                !_0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_'] && (_0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xa8, 0x20, !![]), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['setMeshExB' + 'yParamData'](_0x3b8d52['_PARAM_FIL' + 'L_VB_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_VB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_VB_SIZE_' + 'POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_SIZE_' + 'POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']));
                !_0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_'] && (_0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xf4, 0x20, !![]), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['setMeshExB' + 'yParamData'](_0x3b8d52['_PARAM_FIL' + 'L_VB_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_VB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_VB_SIZE_' + 'POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_IB_SIZE_' + 'POS_'] * 0x4, _0x3b8d52['_PARAM_FIL' + 'L_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['setMeshExB' + 'yParamData'](_0x3b8d52['_PARAM_LIN' + 'ES_VB_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_VB_SIZE' + '_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_IB_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'ES_IB_SIZE' + '_POS_'] * 0x4, _0x3b8d52['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']));
                !_0x288fa8['_paramData'] && (_0x288fa8['_paramData'] = new ParamData(0xf * 0x4, !![]));
                {
                    _0x288fa8['_x'] = _0x486253, _0x288fa8['_y'] = _0x3a965a, _0x288fa8['_paths'] = _0x3b749f, _0x288fa8['_brush'] = _0x2f1fcc, _0x288fa8['_pen'] = _0x324ca2;
                    for (var _0x49f005 = 0x0, _0x1f7bcc = _0x3b749f['length']; _0x49f005 < _0x1f7bcc; _0x49f005++) {
                        var _0x3db2d6 = _0x3b749f[_0x49f005];
                        _0x49f005 == 0x0 && (_0x288fa8['_startOriX'] = _0x3db2d6[0x1], _0x288fa8['_startOriY'] = _0x3db2d6[0x2]);
                        switch (_0x3db2d6[0x0]) {
                        case 'moveTo':
                            _0x288fa8['_lastOriX'] = _0x3db2d6[0x1], _0x288fa8['_lastOriY'] = _0x3db2d6[0x2], _0x288fa8['_points']['push'](_0x3db2d6[0x1]), _0x288fa8['_points']['push'](_0x3db2d6[0x2]);
                            break;
                        case 'lineTo':
                            _0x288fa8['_lastOriX'] = _0x3db2d6[0x1], _0x288fa8['_lastOriY'] = _0x3db2d6[0x2], _0x288fa8['_points']['push'](_0x3db2d6[0x1]), _0x288fa8['_points']['push'](_0x3db2d6[0x2]);
                            break;
                        case 'arcTo':
                            _0x288fa8['_arcTo'](_0x3db2d6);
                            break;
                        case 'closePath':
                            _0x288fa8['_points']['push'](_0x288fa8['_startOriX']), _0x288fa8['_points']['push'](_0x288fa8['_startOriY']);
                            break;
                        }
                    }
                    _0x288fa8['_vertNum'] = _0x288fa8['_points']['length'];
                    if (_0x324ca2) {
                        _0x2fe41e['createLine' + '2'](_0x288fa8['_points'], _0x288fa8['_lines_ibA' + 'rray'], _0x324ca2['lineWidth'], 0x0, _0x288fa8['_lines_vbA' + 'rray'], ![]);
                        var _0x4cb12b = _0x4b1f30['create'](_0x324ca2['strokeStyl' + 'e']), _0x18a589 = _0x4cb12b['numColor'], _0x597a40 = _0x288fa8['_vertNum'];
                        (!_0x288fa8['lines_vbBu' + 'ffer'] || _0x288fa8['lines_vbBu' + 'ffer']['getByteLen' + 'gth']() < _0x288fa8['_vertNum'] * 0x3 * 0x4) && (_0x288fa8['lines_vbBu' + 'ffer'] = new ParamData(_0x597a40 * 0x3 * 0x4, !![]));
                        _0x288fa8['_lines_vbS' + 'ize'] = _0x288fa8['_vertNum'] * 0x3 * 0x4;
                        var _0x330276 = _0x288fa8['lines_vbBu' + 'ffer']['_float32Da' + 'ta'], _0x368181 = _0x288fa8['lines_vbBu' + 'ffer']['_int32Data'], _0x9fc3b9 = 0x0;
                        for (_0x49f005 = 0x0; _0x49f005 < _0x288fa8['_vertNum']; _0x49f005++) {
                            _0x330276[_0x9fc3b9++] = _0x288fa8['_lines_vbA' + 'rray'][_0x49f005 * 0x2] + _0x486253, _0x330276[_0x9fc3b9++] = _0x288fa8['_lines_vbA' + 'rray'][_0x49f005 * 0x2 + 0x1] + _0x3a965a, _0x368181[_0x9fc3b9++] = _0x18a589;
                        }
                        (!_0x288fa8['lines_ibBu' + 'ffer'] || _0x288fa8['lines_ibBu' + 'ffer']['getByteLen' + 'gth']() < (_0x288fa8['_vertNum'] - 0x2) * 0x3 * 0x2) && (_0x288fa8['lines_ibBu' + 'ffer'] = new ParamData((_0x597a40 - 0x2) * 0x3 * 0x2, !![], !![]));
                        _0x288fa8['_lines_ibS' + 'ize'] = (_0x288fa8['_vertNum'] - 0x2) * 0x3 * 0x2;
                        var _0x137582 = _0x288fa8['lines_ibBu' + 'ffer']['_int16Data'];
                        for (var _0x372f6f = 0x0; _0x372f6f < (_0x288fa8['_vertNum'] - 0x2) * 0x3; _0x372f6f++) {
                            _0x137582[_0x372f6f] = _0x288fa8['_lines_ibA' + 'rray'][_0x372f6f];
                        }
                    }
                    if (_0x2f1fcc) {
                        _0x597a40 = _0x288fa8['_vertNum'];
                        var _0xa07878 = _0x576d8c['earcut'](_0x288fa8['_points'], null, 0x2);
                        if (_0xa07878['length'] > 0x0) {
                            (!_0x288fa8['fill_ibBuf' + 'fer'] || _0x288fa8['fill_ibBuf' + 'fer']['getByteLen' + 'gth']() < _0xa07878['length'] * 0x2) && (_0x288fa8['fill_ibBuf' + 'fer'] = new ParamData(_0xa07878['length'] * 0x2, !![], !![]));
                            _0x288fa8['_fill_ibSi' + 'ze'] = _0xa07878['length'] * 0x2, _0x137582 = _0x288fa8['fill_ibBuf' + 'fer']['_int16Data'];
                            var _0x33d4ee = 0x0;
                            for (_0x372f6f = 0x0; _0x372f6f < _0xa07878['length']; _0x372f6f++) {
                                _0x137582[_0x33d4ee++] = _0xa07878[_0x372f6f];
                            }
                        }
                        _0x4cb12b = _0x4b1f30['create'](_0x2f1fcc['fillStyle']), _0x18a589 = _0x4cb12b['numColor'];
                        (!_0x288fa8['fill_vbBuf' + 'fer'] || _0x288fa8['fill_vbBuf' + 'fer']['getByteLen' + 'gth']() < _0x288fa8['_vertNum'] * 0x3 * 0x4) && (_0x288fa8['fill_vbBuf' + 'fer'] = new ParamData(_0x597a40 * 0x3 * 0x4, !![]));
                        _0x288fa8['_fill_vbSi' + 'ze'] = _0x288fa8['_vertNum'] * 0x3 * 0x4, _0x330276 = _0x288fa8['fill_vbBuf' + 'fer']['_float32Da' + 'ta'];
                        var _0x59f472 = _0x288fa8['fill_vbBuf' + 'fer']['_int32Data'];
                        _0x59f472 = _0x288fa8['fill_vbBuf' + 'fer']['_int32Data'], _0x9fc3b9 = 0x0;
                        for (_0x49f005 = 0x0; _0x49f005 < _0x288fa8['_vertNum']; _0x49f005++) {
                            _0x330276[_0x9fc3b9++] = _0x288fa8['_points'][_0x49f005 * 0x2] + _0x486253, _0x330276[_0x9fc3b9++] = _0x288fa8['_points'][_0x49f005 * 0x2 + 0x1] + _0x3a965a, _0x59f472[_0x9fc3b9++] = _0x18a589;
                        }
                    }
                }
                ;
                var _0x31afc6 = _0x288fa8['_paramData']['_float32Da' + 'ta'];
                _0x368181 = _0x288fa8['_paramData']['_int32Data'], _0x368181[0x0] = 0x1;
                _0x324ca2 && (_0x368181[_0x3b8d52['_PARAM_LIN' + 'ES_VB_POS_']] = _0x288fa8['lines_vbBu' + 'ffer']['getPtrID'](), _0x368181[_0x3b8d52['_PARAM_LIN' + 'ES_IB_POS_']] = _0x288fa8['lines_ibBu' + 'ffer']['getPtrID'](), _0x368181[_0x3b8d52['_PARAM_LIN' + 'ES_VB_SIZE' + '_POS_']] = _0x288fa8['_lines_vbS' + 'ize'], _0x368181[_0x3b8d52['_PARAM_LIN' + 'ES_IB_SIZE' + '_POS_']] = _0x288fa8['_lines_ibS' + 'ize'], _0x368181[_0x3b8d52['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_']] = 0x0, _0x368181[_0x3b8d52['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_']] = 0x0, _0x368181[_0x3b8d52['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['lines_vbBu' + 'ffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['lines_ibBu' + 'ffer']));
                _0x2f1fcc && (_0x368181[_0x3b8d52['_PARAM_FIL' + 'L_VB_POS_']] = _0x288fa8['fill_vbBuf' + 'fer']['getPtrID'](), _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_IB_POS_']] = _0x288fa8['fill_ibBuf' + 'fer']['getPtrID'](), _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_VB_SIZE_' + 'POS_']] = _0x288fa8['_fill_vbSi' + 'ze'], _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_IB_SIZE_' + 'POS_']] = _0x288fa8['_fill_ibSi' + 'ze'], _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_VB_OFFSE' + 'T_POS_']] = 0x0, _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_IB_OFFSE' + 'T_POS_']] = 0x0, _0x368181[_0x3b8d52['_PARAM_FIL' + 'L_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['fill_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['fill_ibBuf' + 'fer']));
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['_paramData']);
                if (_0x2f1fcc && _0x324ca2)
                    _0x288fa8['_cmdCurren' + 'tPos'] = _0x288fa8['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_']['getPtrID'](), _0x288fa8['_paramData']['getPtrID'](), -0x1);
                else {
                    if (_0x2f1fcc && !_0x324ca2)
                        _0x288fa8['_cmdCurren' + 'tPos'] = _0x288fa8['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_']['getPtrID'](), _0x288fa8['_paramData']['getPtrID'](), -0x1);
                    else
                        !_0x2f1fcc && _0x324ca2 && (_0x288fa8['_cmdCurren' + 'tPos'] = _0x288fa8['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['getPtrID'](), _0x288fa8['_paramData']['getPtrID'](), -0x1));
                }
                return _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x288fa8['_graphicsC' + 'mdEncoder']), _0x288fa8;
            }, _0x3b8d52['ID'] = 'DrawPath', _0x3b8d52['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] = null, _0x3b8d52['_DRAW_LINE' + 'S_FILL_CMD' + '_ENCODER_'] = null, _0x3b8d52['_DRAW_FILL' + '_CMD_ENCOD' + 'ER_'] = null, _0x3b8d52['_PARAM_LIN' + 'ES_VB_POS_'] = 0x1, _0x3b8d52['_PARAM_LIN' + 'ES_IB_POS_'] = 0x2, _0x3b8d52['_PARAM_LIN' + 'ES_VB_SIZE' + '_POS_'] = 0x3, _0x3b8d52['_PARAM_LIN' + 'ES_IB_SIZE' + '_POS_'] = 0x4, _0x3b8d52['_PARAM_FIL' + 'L_VB_POS_'] = 0x5, _0x3b8d52['_PARAM_FIL' + 'L_IB_POS_'] = 0x6, _0x3b8d52['_PARAM_FIL' + 'L_VB_SIZE_' + 'POS_'] = 0x7, _0x3b8d52['_PARAM_FIL' + 'L_IB_SIZE_' + 'POS_'] = 0x8, _0x3b8d52['_PARAM_FIL' + 'L_VB_OFFSE' + 'T_POS_'] = 0x9, _0x3b8d52['_PARAM_FIL' + 'L_IB_OFFSE' + 'T_POS_'] = 0xa, _0x3b8d52['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] = 0xb, _0x3b8d52['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] = 0xc, _0x3b8d52['_PARAM_FIL' + 'L_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] = 0xd, _0x3b8d52['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] = 0xe, _0x3b8d52;
        }(), _0x16a48a = function () {
            function _0x3c2e11() {
                this['ALPHA'] = 0x1, this['shaderType'] = 0x0, this['defines'] = new _0x4a8714(), this['fillStyle'] = _0x334d19['DEFAULT'], this['strokeStyl' + 'e'] = _0x334d19['DEFAULT'];
            }
            _0x199b5b(_0x3c2e11, 'laya.webgl' + '.shader.d2' + '.Shader2D');
            var _0x34caa9 = _0x3c2e11['prototype'];
            return _0x34caa9['destroy'] = function () {
                this['defines'] = null, this['filters'] = null;
            }, _0x3c2e11['__init__'] = function () {
                var _0x5a4d5b, _0x25eb06;
                _0x5a4d5b = '/*\x0a\x09textur' + 'e和fillrect' + '使用的。\x0a*/\x0aat' + 'tribute\x20ve' + 'c4\x20posuv;\x0a' + 'attribute\x20' + 'vec4\x20attri' + 'bColor;\x0aat' + 'tribute\x20ve' + 'c4\x20attribF' + 'lags;\x0a//at' + 'tribute\x20ve' + 'c4\x20clipDir' + ';\x0a//attrib' + 'ute\x20vec2\x20c' + 'lipRect;\x0au' + 'niform\x20vec' + '4\x20clipMatD' + 'ir;\x0aunifor' + 'm\x20vec2\x20cli' + 'pMatPos;\x09\x09' + '//\x20这个是全局的，' + '不用再应用矩阵了。\x0a' + 'varying\x20ve' + 'c2\x20cliped;' + '\x0auniform\x20v' + 'ec2\x20size;\x0a' + '\x0a#ifdef\x20WO' + 'RLDMAT\x0a\x09un' + 'iform\x20mat4' + '\x20mmat;\x0a#en' + 'dif\x0aunifor' + 'm\x20mat4\x20u_M' + 'vpMatrix;\x0a' + '\x0avarying\x20v' + 'ec4\x20v_texc' + 'oordAlpha;' + '\x0avarying\x20v' + 'ec4\x20v_colo' + 'r;\x0avarying' + '\x20float\x20v_u' + 'seTex;\x0a\x0avo' + 'id\x20main()\x20' + '{\x0a\x0a\x09vec4\x20p' + 'os\x20=\x20vec4(' + 'posuv.xy,0' + '.,1.);\x0a#if' + 'def\x20WORLDM' + 'AT\x0a\x09pos=mm' + 'at*pos;\x0a#e' + 'ndif\x0a\x09vec4' + '\x20pos1\x20\x20=ve' + 'c4((pos.x/' + 'size.x-0.5' + ')*2.0,(0.5' + '-pos.y/siz' + 'e.y)*2.0,0' + '.,1.0);\x0a#i' + 'fdef\x20MVP3D' + '\x0a\x09gl_Posit' + 'ion=u_MvpM' + 'atrix*pos1' + ';\x0a#else\x0a\x09g' + 'l_Position' + '=pos1;\x0a#en' + 'dif\x0a\x09v_tex' + 'coordAlpha' + '.xy\x20=\x20posu' + 'v.zw;\x0a\x09//v' + '_texcoordA' + 'lpha.z\x20=\x20a' + 'ttribColor' + '.a/255.0;\x0a' + '\x09v_color\x20=' + '\x20attribCol' + 'or/255.0;\x0a' + '\x09v_color.x' + 'yz*=v_colo' + 'r.w;//反正后面' + '也要预乘\x0a\x09\x0a\x09v_' + 'useTex\x20=\x20a' + 'ttribFlags' + '.r/255.0;\x0a' + '\x09float\x20cli' + 'pw\x20=\x20lengt' + 'h(clipMatD' + 'ir.xy);\x0a\x09f' + 'loat\x20cliph' + '\x20=\x20length(' + 'clipMatDir' + '.zw);\x0a\x09vec' + '2\x20clippos\x20' + '=\x20pos.xy\x20-' + '\x20clipMatPo' + 's.xy;\x09//po' + 's已经应用矩阵了，为' + '了减的有意义，cli' + 'p的位置也要缩放\x0a\x09' + 'if(clipw>2' + '0000.\x20&&\x20c' + ('liph>20000' + '.)\x0a\x09\x09clipe' + 'd\x20=\x20vec2(0' + '.5,0.5);\x0a\x09' + 'else\x20{\x0a\x09\x09/' + '/转成0到1之间。/' + 'clipw/clip' + 'w\x20表示clippo' + 's与normaliz' + 'e之后的clip朝向' + '点积之后，再除以cl' + 'ipw\x0a\x09\x09clip' + 'ed=vec2(\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.xy)/clip' + 'w/clipw,\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.zw)/clip' + 'h/cliph);\x0a' + '\x09}\x0a\x0a}'), _0x25eb06 = '/*\x0a\x09textur' + 'e和fillrect' + '使用的。\x0a*/\x0a\x0ap' + 'recision\x20m' + 'ediump\x20flo' + 'at;\x0a//prec' + 'ision\x20high' + 'p\x20float;\x0av' + 'arying\x20vec' + '4\x20v_texcoo' + 'rdAlpha;\x0av' + 'arying\x20vec' + '4\x20v_color;' + '\x0avarying\x20f' + 'loat\x20v_use' + 'Tex;\x0aunifo' + 'rm\x20sampler' + '2D\x20texture' + ';\x0avarying\x20' + 'vec2\x20clipe' + 'd;\x0a\x0a#ifdef' + '\x20BLUR_FILT' + 'ER\x0auniform' + '\x20vec4\x20stre' + 'ngth_sig2_' + '2sig2_gaus' + 's1;\x0aunifor' + 'm\x20vec2\x20blu' + 'rInfo;\x0a\x0a#d' + 'efine\x20PI\x203' + '.141593\x0a\x0af' + 'loat\x20getGa' + 'ussian(flo' + 'at\x20x,\x20floa' + 't\x20y){\x0a\x20\x20\x20\x20' + 'return\x20str' + 'ength_sig2' + '_2sig2_gau' + 'ss1.w*exp(' + '-(x*x+y*y)' + '/strength_' + 'sig2_2sig2' + '_gauss1.z)' + ';\x0a}\x0a\x0avec4\x20' + 'blur(){\x0a\x20\x20' + '\x20\x20const\x20fl' + 'oat\x20blurw\x20' + '=\x209.0;\x0a\x20\x20\x20' + '\x20vec4\x20vec4' + 'Color\x20=\x20ve' + 'c4(0.0,0.0' + ',0.0,0.0);' + '\x0a\x20\x20\x20\x20vec2\x20' + 'halfsz=vec' + '2(blurw,bl' + 'urw)/2.0/b' + 'lurInfo;\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20vec' + '2\x20startpos' + '=v_texcoor' + 'dAlpha.xy-' + 'halfsz;\x0a\x20\x20' + '\x20\x20vec2\x20cte' + 'xcoord\x20=\x20s' + 'tartpos;\x0a\x20' + '\x20\x20\x20vec2\x20st' + 'ep\x20=\x201.0/b' + 'lurInfo;\x20\x20' + '//每个像素\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20for(floa' + 't\x20y\x20=\x200.0;' + 'y<=blurw;\x20' + '++y){\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20ctexco' + 'ord.x=star' + 'tpos.x;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20for(' + 'float\x20x\x20=\x20' + '0.0;x<=blu' + 'rw;\x20++x){\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20//TODO\x20纹' + '理坐标的固定偏移应该' + '在vs中处理\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'ec4Color\x20+' + '=\x20texture2' + 'D(texture,' + '\x20ctexcoord' + ')*getGauss' + 'ian(x-blur' + 'w/2.0,y-bl' + 'urw/2.0);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20ctexcoor' + 'd.x+=step.' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20ctexcoord' + ('.y+=step.y' + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20return\x20v' + 'ec4Color;\x0a' + '}\x0a#endif\x0a\x0a' + '#ifdef\x20COL' + 'OR_FILTER\x0a' + 'uniform\x20ve' + 'c4\x20colorAl' + 'pha;\x0aunifo' + 'rm\x20mat4\x20co' + 'lorMat;\x0a#e' + 'ndif\x0a\x0a#ifd' + 'ef\x20GLOW_FI' + 'LTER\x0aunifo' + 'rm\x20vec4\x20u_' + 'color;\x0auni' + 'form\x20vec4\x20' + 'u_blurInfo' + '1;\x0auniform' + '\x20vec4\x20u_bl' + 'urInfo2;\x0a#' + 'endif\x0a\x0a#if' + 'def\x20COLOR_' + 'ADD\x0aunifor' + 'm\x20vec4\x20col' + 'orAdd;\x0a#en' + 'dif\x0a\x0a//FIL' + 'LTEXTURE\x0au' + 'niform\x20vec' + '4\x20u_TexRan' + 'ge;//start' + 'u,startv,u' + 'range,\x20vra' + 'nge\x0a\x0avoid\x20' + 'main()\x20{\x0a\x09' + 'if(cliped.' + 'x<0.)\x20disc' + 'ard;\x0a\x09if(c' + 'liped.x>1.' + ')\x20discard;' + '\x0a\x09if(clipe' + 'd.y<0.)\x20di' + 'scard;\x0a\x09if' + '(cliped.y>' + '1.)\x20discar' + 'd;\x0a\x09\x0a#ifde' + 'f\x20FILLTEXT' + 'URE\x09\x0a\x20\x20\x20ve' + 'c4\x20color=\x20' + 'texture2D(' + 'texture,\x20f' + 'ract(v_tex' + 'coordAlpha' + '.xy)*u_Tex' + 'Range.zw\x20+' + '\x20u_TexRang' + 'e.xy);\x0a#el' + 'se\x0a\x20\x20\x20vec4' + '\x20color=\x20te' + 'xture2D(te' + 'xture,\x20v_t' + 'excoordAlp' + 'ha.xy);\x0a#e' + 'ndif\x0a\x0a\x20\x20\x20i' + 'f(v_useTex' + '<=0.)color' + '\x20=\x20vec4(1.' + ',1.,1.,1.)' + ';\x0a\x20\x20\x20color' + '.a*=v_colo' + 'r.w;\x0a\x20\x20\x20//' + 'color.rgb*' + '=v_color.w' + ';\x0a\x20\x20\x20color' + '.rgb*=v_co' + 'lor.rgb;\x0a\x20' + '\x20\x20gl_FragC' + 'olor=color' + ';\x0a\x20\x20\x20\x0a\x20\x20\x20#' + 'ifdef\x20COLO' + 'R_ADD\x0a\x09gl_' + 'FragColor\x20' + '=\x20vec4(col' + 'orAdd.rgb,' + 'colorAdd.a' + '*gl_FragCo' + 'lor.a);\x0a\x09g' + 'l_FragColo' + 'r.xyz\x20*=\x20c' + 'olorAdd.a;' + '\x0a\x20\x20\x20#endif' + '\x0a\x20\x20\x20\x0a\x20\x20\x20#i' + 'fdef\x20BLUR_' + 'FILTER\x0a\x09gl' + '_FragColor' + '\x20=\x20\x20\x20blur(' + ');\x0a\x09gl_Fra' + 'gColor.w*=' + 'v_color.w;') + ('\x20\x20\x20\x0a\x20\x20\x20#en' + 'dif\x0a\x20\x20\x20\x0a\x20\x20' + '\x20#ifdef\x20CO' + 'LOR_FILTER' + '\x0a\x09mat4\x20alp' + 'haMat\x20=col' + 'orMat;\x0a\x0a\x09a' + 'lphaMat[0]' + '[3]\x20*=\x20gl_' + 'FragColor.' + 'a;\x0a\x09alphaM' + 'at[1][3]\x20*' + '=\x20gl_FragC' + 'olor.a;\x0a\x09a' + 'lphaMat[2]' + '[3]\x20*=\x20gl_' + 'FragColor.' + 'a;\x0a\x0a\x09gl_Fr' + 'agColor\x20=\x20' + 'gl_FragCol' + 'or\x20*\x20alpha' + 'Mat;\x0a\x09gl_F' + 'ragColor\x20+' + '=\x20colorAlp' + 'ha/255.0*g' + 'l_FragColo' + 'r.a;\x0a\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x0a\x20' + '\x20\x20#ifdef\x20G' + 'LOW_FILTER' + '\x0a\x09const\x20fl' + 'oat\x20c_Iter' + 'ationTime\x20' + '=\x2010.0;\x0a\x09f' + 'loat\x20float' + 'IterationT' + 'otalTime\x20=' + '\x20c_Iterati' + 'onTime\x20*\x20c' + '_Iteration' + 'Time;\x0a\x09vec' + '4\x20vec4Colo' + 'r\x20=\x20vec4(0' + '.0,0.0,0.0' + ',0.0);\x0a\x09ve' + 'c2\x20vec2Fil' + 'terDir\x20=\x20v' + 'ec2(-(u_bl' + 'urInfo1.z)' + '/u_blurInf' + 'o2.x,-(u_b' + 'lurInfo1.w' + ')/u_blurIn' + 'fo2.y);\x0a\x09v' + 'ec2\x20vec2Fi' + 'lterOff\x20=\x20' + 'vec2(u_blu' + 'rInfo1.x/u' + '_blurInfo2' + '.x/c_Itera' + 'tionTime\x20*' + '\x202.0,u_blu' + 'rInfo1.y/u' + '_blurInfo2' + '.y/c_Itera' + 'tionTime\x20*' + '\x202.0);\x0a\x09fl' + 'oat\x20maxNum' + '\x20=\x20u_blurI' + 'nfo1.x\x20*\x20u' + '_blurInfo1' + '.y;\x0a\x09vec2\x20' + 'vec2Off\x20=\x20' + 'vec2(0.0,0' + '.0);\x0a\x09floa' + 't\x20floatOff' + '\x20=\x20c_Itera' + 'tionTime/2' + '.0;\x0a\x09for(f' + 'loat\x20i\x20=\x200' + '.0;i<=c_It' + 'erationTim' + 'e;\x20++i){\x0a\x09' + '\x09for(float' + '\x20j\x20=\x200.0;j' + '<=c_Iterat' + 'ionTime;\x20+' + '+j){\x0a\x09\x09\x09ve' + 'c2Off\x20=\x20ve' + 'c2(vec2Fil' + 'terOff.x\x20*' + '\x20(i\x20-\x20floa' + 'tOff),vec2' + 'FilterOff.' + 'y\x20*\x20(j\x20-\x20f' + 'loatOff));' + '\x0a\x09\x09\x09vec4Co' + 'lor\x20+=\x20tex' + 'ture2D(tex' + 'ture,\x20v_te') + ('xcoordAlph' + 'a.xy\x20+\x20vec' + '2FilterDir' + '\x20+\x20vec2Off' + ')/floatIte' + 'rationTota' + 'lTime;\x0a\x09\x09}' + '\x0a\x09}\x0a\x09gl_Fr' + 'agColor\x20=\x20' + 'vec4(u_col' + 'or.rgb,vec' + '4Color.a\x20*' + '\x20u_blurInf' + 'o2.z);\x0a\x09gl' + '_FragColor' + '.rgb\x20*=\x20gl' + '_FragColor' + '.a;\x20\x20\x20\x0a\x20\x20\x20' + '#endif\x0a\x20\x20\x20' + '\x0a}'), _0x3ca794['preCompile' + '2D'](0x0, 0x1, _0x5a4d5b, _0x25eb06, null), _0x5a4d5b = 'attribute\x20' + 'vec4\x20posit' + 'ion;\x0aattri' + 'bute\x20vec4\x20' + 'attribColo' + 'r;\x0a//attri' + 'bute\x20vec4\x20' + 'clipDir;\x0a/' + '/attribute' + '\x20vec2\x20clip' + 'Rect;\x0aunif' + 'orm\x20vec4\x20c' + 'lipMatDir;' + '\x0auniform\x20v' + 'ec2\x20clipMa' + 'tPos;\x0a#ifd' + 'ef\x20WORLDMA' + 'T\x0a\x09uniform' + '\x20mat4\x20mmat' + ';\x0a#endif\x0au' + 'niform\x20mat' + '4\x20u_mmat2;' + '\x0a//uniform' + '\x20vec2\x20u_po' + 's;\x0auniform' + '\x20vec2\x20size' + ';\x0avarying\x20' + 'vec4\x20color' + ';\x0a//vec4\x20d' + 'irxy=vec4(' + '0.9,0.1,\x20-' + '0.1,0.9);\x0a' + '//vec4\x20cli' + 'p=vec4(100' + '.,30.,300.' + ',600.);\x0ava' + 'rying\x20vec2' + '\x20cliped;\x0av' + 'oid\x20main()' + '{\x0a\x09\x0a#ifdef' + '\x20WORLDMAT\x0a' + '\x09vec4\x20pos=' + 'mmat*vec4(' + 'position.x' + 'y,0.,1.);\x0a' + '\x09gl_Positi' + 'on\x20=vec4((' + 'pos.x/size' + '.x-0.5)*2.' + '0,(0.5-pos' + '.y/size.y)' + '*2.0,pos.z' + ',1.0);\x0a#el' + 'se\x0a\x09gl_Pos' + 'ition\x20=vec' + '4((positio' + 'n.x/size.x' + '-0.5)*2.0,' + '(0.5-posit' + 'ion.y/size' + '.y)*2.0,po' + 'sition.z,1' + '.0);\x0a#endi' + 'f\x09\x0a\x09float\x20' + 'clipw\x20=\x20le' + 'ngth(clipM' + 'atDir.xy);' + '\x0a\x09float\x20cl' + 'iph\x20=\x20leng' + 'th(clipMat' + 'Dir.zw);\x0a\x09' + 'vec2\x20clipp' + 'os\x20=\x20posit' + 'ion.xy\x20-\x20c' + 'lipMatPos.' + 'xy;\x09//pos已' + '经应用矩阵了，为了减' + '的有意义，clip的' + '位置也要缩放\x0a\x09if' + '(clipw>200' + '00.\x20&&\x20cli' + 'ph>20000.)' + '\x0a\x09\x09cliped\x20' + '=\x20vec2(0.5' + ',0.5);\x0a\x09el' + 'se\x20{\x0a\x09\x09//c' + 'lipdir是带缩放' + '的方向，由于上面cl' + 'ippos是在缩放后' + '的空间计算的，所以需' + '要把方向先norma' + 'lize一下\x0a\x09\x09c' + 'liped=vec2' + '(\x20dot(clip' + 'pos,clipMa' + 'tDir.xy)/c' + 'lipw/clipw' + ',\x20dot(clip' + 'pos,clipMa' + 'tDir.zw)/c' + ('liph/cliph' + ');\x0a\x09}\x0a\x20\x20//' + 'pos2d.x\x20=\x20' + 'dot(clippo' + 's,dirx);\x0a\x20' + '\x20color=att' + 'ribColor/2' + '55.;\x0a}'), _0x25eb06 = 'precision\x20' + 'mediump\x20fl' + 'oat;\x0a//pre' + 'cision\x20med' + 'iump\x20float' + ';\x0avarying\x20' + 'vec4\x20color' + ';\x0a//unifor' + 'm\x20float\x20al' + 'pha;\x0avaryi' + 'ng\x20vec2\x20cl' + 'iped;\x0avoid' + '\x20main(){\x0a\x09' + '//vec4\x20a=v' + 'ec4(color.' + 'r,\x20color.g' + ',\x20color.b,' + '\x201);\x0a\x09//a.' + 'a*=alpha;\x0a' + '\x20\x20\x20\x20gl_Fra' + 'gColor=\x20co' + 'lor;//\x20vec' + '4(color.r,' + '\x20color.g,\x20' + 'color.b,\x20a' + 'lpha);\x0a\x09gl' + '_FragColor' + '.rgb*=colo' + 'r.a;\x0a\x09if(c' + 'liped.x<0.' + ')\x20discard;' + '\x0a\x09if(clipe' + 'd.x>1.)\x20di' + 'scard;\x0a\x09if' + '(cliped.y<' + '0.)\x20discar' + 'd;\x0a\x09if(cli' + 'ped.y>1.)\x20' + 'discard;\x0a}', _0x3ca794['preCompile' + '2D'](0x0, 0x4, _0x5a4d5b, _0x25eb06, null), _0x5a4d5b = '/*\x0a\x09textur' + 'e和fillrect' + '使用的。\x0a*/\x0aat' + 'tribute\x20ve' + 'c4\x20posuv;\x0a' + 'attribute\x20' + 'vec4\x20attri' + 'bColor;\x0aat' + 'tribute\x20ve' + 'c4\x20attribF' + 'lags;\x0a//at' + 'tribute\x20ve' + 'c4\x20clipDir' + ';\x0a//attrib' + 'ute\x20vec2\x20c' + 'lipRect;\x0au' + 'niform\x20vec' + '4\x20clipMatD' + 'ir;\x0aunifor' + 'm\x20vec2\x20cli' + 'pMatPos;\x09\x09' + '//\x20这个是全局的，' + '不用再应用矩阵了。\x0a' + 'varying\x20ve' + 'c2\x20cliped;' + '\x0auniform\x20v' + 'ec2\x20size;\x0a' + '\x0a#ifdef\x20WO' + 'RLDMAT\x0a\x09un' + 'iform\x20mat4' + '\x20mmat;\x0a#en' + 'dif\x0aunifor' + 'm\x20mat4\x20u_M' + 'vpMatrix;\x0a' + '\x0avarying\x20v' + 'ec4\x20v_texc' + 'oordAlpha;' + '\x0avarying\x20v' + 'ec4\x20v_colo' + 'r;\x0avarying' + '\x20float\x20v_u' + 'seTex;\x0a\x0avo' + 'id\x20main()\x20' + '{\x0a\x0a\x09vec4\x20p' + 'os\x20=\x20vec4(' + 'posuv.xy,0' + '.,1.);\x0a#if' + 'def\x20WORLDM' + 'AT\x0a\x09pos=mm' + 'at*pos;\x0a#e' + 'ndif\x0a\x09vec4' + '\x20pos1\x20\x20=ve' + 'c4((pos.x/' + 'size.x-0.5' + ')*2.0,(0.5' + '-pos.y/siz' + 'e.y)*2.0,0' + '.,1.0);\x0a#i' + 'fdef\x20MVP3D' + '\x0a\x09gl_Posit' + 'ion=u_MvpM' + 'atrix*pos1' + ';\x0a#else\x0a\x09g' + 'l_Position' + '=pos1;\x0a#en' + 'dif\x0a\x09v_tex' + 'coordAlpha' + '.xy\x20=\x20posu' + 'v.zw;\x0a\x09//v' + '_texcoordA' + 'lpha.z\x20=\x20a' + 'ttribColor' + '.a/255.0;\x0a' + '\x09v_color\x20=' + '\x20attribCol' + 'or/255.0;\x0a' + '\x09v_color.x' + 'yz*=v_colo' + 'r.w;//反正后面' + '也要预乘\x0a\x09\x0a\x09v_' + 'useTex\x20=\x20a' + 'ttribFlags' + '.r/255.0;\x0a' + '\x09float\x20cli' + 'pw\x20=\x20lengt' + 'h(clipMatD' + 'ir.xy);\x0a\x09f' + 'loat\x20cliph' + '\x20=\x20length(' + 'clipMatDir' + '.zw);\x0a\x09vec' + '2\x20clippos\x20' + '=\x20pos.xy\x20-' + '\x20clipMatPo' + 's.xy;\x09//po' + 's已经应用矩阵了，为' + '了减的有意义，cli' + 'p的位置也要缩放\x0a\x09' + 'if(clipw>2' + '0000.\x20&&\x20c' + ('liph>20000' + '.)\x0a\x09\x09clipe' + 'd\x20=\x20vec2(0' + '.5,0.5);\x0a\x09' + 'else\x20{\x0a\x09\x09/' + '/转成0到1之间。/' + 'clipw/clip' + 'w\x20表示clippo' + 's与normaliz' + 'e之后的clip朝向' + '点积之后，再除以cl' + 'ipw\x0a\x09\x09clip' + 'ed=vec2(\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.xy)/clip' + 'w/clipw,\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.zw)/clip' + 'h/cliph);\x0a' + '\x09}\x0a\x0a}'), _0x25eb06 = '#ifdef\x20FSH' + 'IGHPRECISI' + 'ON\x0a\x09precis' + 'ion\x20highp\x20' + 'float;\x0a#el' + 'se\x0a\x09precis' + 'ion\x20medium' + 'p\x20float;\x0a#' + 'endif\x0a\x0a//p' + 'recision\x20h' + 'ighp\x20float' + ';\x0avarying\x20' + 'vec2\x20v_tex' + 'coord;\x0auni' + 'form\x20sampl' + 'er2D\x20textu' + 're;\x0aunifor' + 'm\x20float\x20al' + 'pha;\x0aunifo' + 'rm\x20vec4\x20u_' + 'TexRange;\x0a' + 'uniform\x20ve' + 'c2\x20u_offse' + 't;\x0a\x0a#impor' + 't?BLUR_FIL' + 'TER\x20\x20\x22part' + 's/BlurFilt' + 'er_ps_unif' + 'orm.glsl\x22;' + '\x0a\x0a#import?' + 'COLOR_FILT' + 'ER\x20\x22parts/' + 'ColorFilte' + 'r.glsl\x22\x20wi' + 'th\x20ColorFi' + 'lter_ps_un' + 'iform;\x0a\x0a#i' + 'mport?GLOW' + '_FILTER\x20\x22p' + 'arts/GlowF' + 'ilter_ps_u' + 'niform.gls' + 'l\x22;\x0a\x0a#impo' + 'rt?COLOR_A' + 'DD\x20\x22parts/' + 'ColorAdd.g' + 'lsl\x22\x20with\x20' + 'ColorAdd_p' + 's_uniform;' + '\x0a\x0avoid\x20mai' + 'n()\x20{\x0a\x20\x20\x20v' + 'ec2\x20newTex' + 'Coord;\x0a\x20\x20\x20' + 'newTexCoor' + 'd.x\x20=\x20mod(' + 'u_offset.x' + '\x20+\x20v_texco' + 'ord.x,u_Te' + 'xRange.y)\x20' + '+\x20u_TexRan' + 'ge.x;\x0a\x20\x20\x20n' + 'ewTexCoord' + '.y\x20=\x20mod(u' + '_offset.y\x20' + '+\x20v_texcoo' + 'rd.y,u_Tex' + 'Range.w)\x20+' + '\x20u_TexRang' + 'e.z;\x0a\x20\x20\x20ve' + 'c4\x20color=\x20' + 'texture2D(' + 'texture,\x20n' + 'ewTexCoord' + ');\x0a\x20\x20\x20colo' + 'r.a*=alpha' + ';\x0a\x20\x20\x20gl_Fr' + 'agColor=co' + 'lor;\x0a\x20\x20\x20\x0a\x20' + '\x20\x20#import?' + 'COLOR_ADD\x20' + '\x22parts/Col' + 'orAdd.glsl' + '\x22\x20with\x20Col' + 'orAdd_ps_l' + 'ogic;\x0a\x20\x20\x20\x0a' + '\x20\x20\x20#import' + '?BLUR_FILT' + 'ER\x20\x20\x22parts' + '/BlurFilte' + 'r_ps_logic' + '.glsl\x22;\x0a\x20\x20' + '\x20\x0a\x20\x20\x20#impo' + 'rt?COLOR_F' + 'ILTER\x20\x22par' + 'ts/ColorFi' + 'lter.glsl\x22' + '\x20with\x20Colo' + 'rFilter_ps' + '_logic;\x0a\x20\x20' + '\x20\x0a\x20\x20\x20#impo' + ('rt?GLOW_FI' + 'LTER\x20\x22part' + 's/GlowFilt' + 'er_ps_logi' + 'c.glsl\x22;\x0a}'), _0x3ca794['preCompile' + '2D'](0x0, 0x100, _0x5a4d5b, _0x25eb06, null), _0x5a4d5b = 'attribute\x20' + 'vec2\x20posit' + 'ion;\x0aattri' + 'bute\x20vec2\x20' + 'texcoord;\x0a' + 'attribute\x20' + 'vec4\x20color' + ';\x0auniform\x20' + 'vec2\x20size;' + '\x0auniform\x20f' + 'loat\x20offse' + 'tX;\x0aunifor' + 'm\x20float\x20of' + 'fsetY;\x0auni' + 'form\x20mat4\x20' + 'mmat;\x0aunif' + 'orm\x20mat4\x20u' + '_mmat2;\x0ava' + 'rying\x20vec2' + '\x20v_texcoor' + 'd;\x0avarying' + '\x20vec4\x20v_co' + 'lor;\x0avoid\x20' + 'main()\x20{\x0a\x20' + '\x20vec4\x20pos=' + 'mmat*u_mma' + 't2*vec4(of' + 'fsetX+posi' + 'tion.x,off' + 'setY+posit' + 'ion.y,0,1\x20' + ');\x0a\x20\x20gl_Po' + 'sition\x20=\x20v' + 'ec4((pos.x' + '/size.x-0.' + '5)*2.0,(0.' + '5-pos.y/si' + 'ze.y)*2.0,' + 'pos.z,1.0)' + ';\x0a\x20\x20v_colo' + 'r\x20=\x20color;' + '\x0a\x20\x20v_color' + '.rgb\x20*=\x20v_' + 'color.a;\x0a\x20' + '\x20v_texcoor' + 'd\x20=\x20texcoo' + 'rd;\x20\x20\x0a}', _0x25eb06 = 'precision\x20' + 'mediump\x20fl' + 'oat;\x0avaryi' + 'ng\x20vec2\x20v_' + 'texcoord;\x0a' + 'varying\x20ve' + 'c4\x20v_color' + ';\x0auniform\x20' + 'sampler2D\x20' + 'texture;\x0au' + 'niform\x20flo' + 'at\x20alpha;\x0a' + 'void\x20main(' + ')\x20{\x0a\x09vec4\x20' + 't_color\x20=\x20' + 'texture2D(' + 'texture,\x20v' + '_texcoord)' + ';\x0a\x09gl_Frag' + 'Color\x20=\x20t_' + 'color.rgba' + '\x20*\x20v_color' + ';\x0a\x09gl_Frag' + 'Color\x20*=\x20a' + 'lpha;\x0a}', _0x3ca794['preCompile' + '2D'](0x0, 0x200, _0x5a4d5b, _0x25eb06, null);
            }, _0x3c2e11;
        }(), _0xefe7f5 = function () {
            function _0x373c55(_0x5dbd04, _0x388e27, _0x535c28, _0x1cb0d8) {
                this['_idata'] = [];
            }
            _0x199b5b(_0x373c55, 'laya.layag' + 'l.CommandE' + 'ncoder');
            var _0x55484d = _0x373c55['prototype'];
            return _0x55484d['getArrayDa' + 'ta'] = function () {
                return this['_idata'];
            }, _0x55484d['getPtrID'] = function () {
                return 0x0;
            }, _0x55484d['beginEncod' + 'ing'] = function () {
            }, _0x55484d['endEncodin' + 'g'] = function () {
            }, _0x55484d['clearEncod' + 'ing'] = function () {
                this['_idata']['length'] = 0x0;
            }, _0x55484d['getCount'] = function () {
                return this['_idata']['length'];
            }, _0x55484d['add_Shader' + 'Value'] = function (_0xe2155e) {
                this['_idata']['push'](_0xe2155e);
            }, _0x55484d['addShaderU' + 'niform'] = function (_0x17fdef) {
                this['add_Shader' + 'Value'](_0x17fdef);
            }, _0x373c55;
        }(), _0x1b01e7 = function () {
            function _0x1d257c(_0x19585c) {
                this['script'] = null, this['codes'] = {}, this['funs'] = {}, this['curUseID'] = -0x1, this['funnames'] = '', this['script'] = _0x19585c;
                var _0x1d53fc = 0x0, _0x249cf2 = 0x0, _0x406ba = 0x0;
                while (!![]) {
                    _0x1d53fc = _0x19585c['indexOf']('#begin', _0x1d53fc);
                    if (_0x1d53fc < 0x0)
                        break;
                    _0x406ba = _0x1d53fc + 0x5;
                    while (!![]) {
                        _0x406ba = _0x19585c['indexOf']('#end', _0x406ba);
                        if (_0x406ba < 0x0)
                            break;
                        if (_0x19585c['charAt'](_0x406ba + 0x4) === 'i')
                            _0x406ba += 0x5;
                        else
                            break;
                    }
                    if (_0x406ba < 0x0)
                        throw 'add\x20includ' + 'e\x20err,no\x20#' + 'end:' + _0x19585c;
                    _0x249cf2 = _0x19585c['indexOf']('\x0a', _0x1d53fc);
                    var _0x4da613 = _0x1fc93b['splitToWor' + 'ds'](_0x19585c['substr'](_0x1d53fc, _0x249cf2 - _0x1d53fc), null);
                    if (_0x4da613[0x1] == 'code')
                        this['codes'][_0x4da613[0x2]] = _0x19585c['substr'](_0x249cf2 + 0x1, _0x406ba - _0x249cf2 - 0x1);
                    else
                        _0x4da613[0x1] == 'function' && (_0x249cf2 = _0x19585c['indexOf']('function', _0x1d53fc), _0x249cf2 += 'function'['length'], this['funs'][_0x4da613[0x3]] = _0x19585c['substr'](_0x249cf2 + 0x1, _0x406ba - _0x249cf2 - 0x1), this['funnames'] += _0x4da613[0x3] + ';');
                    _0x1d53fc = _0x406ba + 0x1;
                }
            }
            _0x199b5b(_0x1d257c, 'laya.webgl' + '.utils.Inl' + 'cudeFile');
            var _0x466de0 = _0x1d257c['prototype'];
            return _0x466de0['getWith'] = function (_0x11dc63) {
                var _0x119674 = _0x11dc63 ? this['codes'][_0x11dc63] : this['script'];
                if (!_0x119674)
                    throw 'get\x20with\x20e' + 'rror:' + _0x11dc63;
                return _0x119674;
            }, _0x466de0['getFunsScr' + 'ipt'] = function (_0x1d4e6a) {
                var _0x274066 = '';
                for (var _0x2f4fa3 in this['funs']) {
                    _0x1d4e6a['indexOf'](_0x2f4fa3 + ';') >= 0x0 && (_0x274066 += this['funs'][_0x2f4fa3]);
                }
                return _0x274066;
            }, _0x1d257c;
        }(), _0x51e777 = function () {
            function _0x42bc64() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_fromX'] = NaN, this['_fromY'] = NaN, this['_toX'] = NaN, this['_toY'] = NaN, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_vid'] = 0x0;
            }
            _0x199b5b(_0x42bc64, 'laya.layag' + 'l.cmdNativ' + 'e.DrawLine' + 'CmdNative');
            var _0xe39811 = _0x42bc64['prototype'];
            return _0xe39811['recover'] = function () {
                _0x5460aa['recover']('DrawLineCm' + 'd', this);
            }, _0x3a2bd3(0x0, _0xe39811, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x4bc0b8) {
                this['_lineColor'] = _0x4bc0b8;
                var _0x23dc90 = _0x4b1f30['create'](this['lineColor']), _0x2ae086 = _0x23dc90['numColor'], _0x4b4387 = this['_paramData']['_int32Data'], _0x47db51 = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x47db51++, _0x47db51++, _0x4b4387[_0x47db51++] = _0x2ae086, _0x47db51++, _0x47db51++, _0x4b4387[_0x47db51++] = _0x2ae086, _0x47db51++, _0x47db51++, _0x4b4387[_0x47db51++] = _0x2ae086, _0x47db51++, _0x47db51++, _0x4b4387[_0x47db51++] = _0x2ae086, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xe39811, 'cmdID', function () {
                return 'DrawLine';
            }), _0x3a2bd3(0x0, _0xe39811, 'toY', function () {
                return this['_toY'];
            }, function (_0x21cfd4) {
                this['_toY'] = _0x21cfd4;
                var _0x4bb386 = [
                        this['_fromX'],
                        this['_fromY'],
                        this['_toX'],
                        this['_toY']
                    ], _0x19bbcc = [], _0x3cc58f = [];
                _0x2fe41e['createLine' + '2'](_0x4bb386, _0x3cc58f, this['_lineWidth'], 0x0, _0x19bbcc, ![]);
                var _0x1dec2e = this['_paramData']['_float32Da' + 'ta'], _0x1d638f = this['_paramData']['_int32Data'], _0x1e6dbc = this['_paramData']['_int16Data'], _0x1d1c73 = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x0], _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x1], _0x1d1c73++, _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x2], _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x3], _0x1d1c73++, _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x4], _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x5], _0x1d1c73++, _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x6], _0x1dec2e[_0x1d1c73++] = _0x19bbcc[0x7], _0x1d1c73++;
                var _0x86bc17 = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x0], _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x1], _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x2], _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x3], _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x4], _0x1e6dbc[_0x86bc17++] = _0x3cc58f[0x5], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xe39811, 'fromX', function () {
                return this['_fromX'];
            }, function (_0x4f671e) {
                this['_fromX'] = _0x4f671e;
                var _0x5d7288 = [
                        this['_fromX'],
                        this['_fromY'],
                        this['_toX'],
                        this['_toY']
                    ], _0x204afc = [], _0x420cb8 = [];
                _0x2fe41e['createLine' + '2'](_0x5d7288, _0x420cb8, this['_lineWidth'], 0x0, _0x204afc, ![]);
                var _0x1192f5 = this['_paramData']['_float32Da' + 'ta'], _0x4082ef = this['_paramData']['_int32Data'], _0x250261 = this['_paramData']['_int16Data'], _0x42f5ad = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x1192f5[_0x42f5ad++] = _0x204afc[0x0], _0x1192f5[_0x42f5ad++] = _0x204afc[0x1], _0x42f5ad++, _0x1192f5[_0x42f5ad++] = _0x204afc[0x2], _0x1192f5[_0x42f5ad++] = _0x204afc[0x3], _0x42f5ad++, _0x1192f5[_0x42f5ad++] = _0x204afc[0x4], _0x1192f5[_0x42f5ad++] = _0x204afc[0x5], _0x42f5ad++, _0x1192f5[_0x42f5ad++] = _0x204afc[0x6], _0x1192f5[_0x42f5ad++] = _0x204afc[0x7], _0x42f5ad++;
                var _0xfd9c57 = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                _0x250261[_0xfd9c57++] = _0x420cb8[0x0], _0x250261[_0xfd9c57++] = _0x420cb8[0x1], _0x250261[_0xfd9c57++] = _0x420cb8[0x2], _0x250261[_0xfd9c57++] = _0x420cb8[0x3], _0x250261[_0xfd9c57++] = _0x420cb8[0x4], _0x250261[_0xfd9c57++] = _0x420cb8[0x5], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xe39811, 'vid', function () {
                return this['_vid'];
            }, function (_0x4e7433) {
                this['_vid'] = _0x4e7433;
            }), _0x3a2bd3(0x0, _0xe39811, 'toX', function () {
                return this['_toX'];
            }, function (_0x5a2ab2) {
                this['_toX'] = _0x5a2ab2;
                var _0x4f83e7 = [
                        this['_fromX'],
                        this['_fromY'],
                        this['_toX'],
                        this['_toY']
                    ], _0x3b6da3 = [], _0x29348e = [];
                _0x2fe41e['createLine' + '2'](_0x4f83e7, _0x29348e, this['_lineWidth'], 0x0, _0x3b6da3, ![]);
                var _0x238eef = this['_paramData']['_float32Da' + 'ta'], _0x9ce9f1 = this['_paramData']['_int32Data'], _0x12331f = this['_paramData']['_int16Data'], _0x1ea0d0 = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x0], _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x1], _0x1ea0d0++, _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x2], _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x3], _0x1ea0d0++, _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x4], _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x5], _0x1ea0d0++, _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x6], _0x238eef[_0x1ea0d0++] = _0x3b6da3[0x7], _0x1ea0d0++;
                var _0x55bf40 = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                _0x12331f[_0x55bf40++] = _0x29348e[0x0], _0x12331f[_0x55bf40++] = _0x29348e[0x1], _0x12331f[_0x55bf40++] = _0x29348e[0x2], _0x12331f[_0x55bf40++] = _0x29348e[0x3], _0x12331f[_0x55bf40++] = _0x29348e[0x4], _0x12331f[_0x55bf40++] = _0x29348e[0x5], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xe39811, 'fromY', function () {
                return this['_fromY'];
            }, function (_0x350c28) {
                this['_fromY'] = _0x350c28;
                var _0x1b6ca5 = [
                        this['_fromX'],
                        this['_fromY'],
                        this['_toX'],
                        this['_toY']
                    ], _0x26f6ed = [], _0xc3d3eb = [];
                _0x2fe41e['createLine' + '2'](_0x1b6ca5, _0xc3d3eb, this['_lineWidth'], 0x0, _0x26f6ed, ![]);
                var _0x30065d = this['_paramData']['_float32Da' + 'ta'], _0x425e85 = this['_paramData']['_int32Data'], _0x3d85bc = this['_paramData']['_int16Data'], _0x2f3ee3 = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x0], _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x1], _0x2f3ee3++, _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x2], _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x3], _0x2f3ee3++, _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x4], _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x5], _0x2f3ee3++, _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x6], _0x30065d[_0x2f3ee3++] = _0x26f6ed[0x7], _0x2f3ee3++;
                var _0x21920b = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x0], _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x1], _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x2], _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x3], _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x4], _0x3d85bc[_0x21920b++] = _0xc3d3eb[0x5], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xe39811, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x3da580) {
                this['_lineWidth'] = _0x3da580;
                var _0x20bec3 = [
                        this['_fromX'],
                        this['_fromY'],
                        this['_toX'],
                        this['_toY']
                    ], _0x3a5f93 = [], _0x395867 = [];
                _0x2fe41e['createLine' + '2'](_0x20bec3, _0x395867, this['lineWidth'], 0x0, _0x3a5f93, ![]);
                var _0x219b4c = this['_paramData']['_float32Da' + 'ta'], _0xf2dd3 = this['_paramData']['_int32Data'], _0x270f83 = this['_paramData']['_int16Data'], _0x1b637a = _0x42bc64['_PARAM_VB_' + 'POS_'];
                _0x219b4c[_0x1b637a++] = _0x3a5f93[0x0], _0x219b4c[_0x1b637a++] = _0x3a5f93[0x1], _0x1b637a++, _0x219b4c[_0x1b637a++] = _0x3a5f93[0x2], _0x219b4c[_0x1b637a++] = _0x3a5f93[0x3], _0x1b637a++, _0x219b4c[_0x1b637a++] = _0x3a5f93[0x4], _0x219b4c[_0x1b637a++] = _0x3a5f93[0x5], _0x1b637a++, _0x219b4c[_0x1b637a++] = _0x3a5f93[0x6], _0x219b4c[_0x1b637a++] = _0x3a5f93[0x7], _0x1b637a++;
                var _0x28255a = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                _0x270f83[_0x28255a++] = _0x395867[0x0], _0x270f83[_0x28255a++] = _0x395867[0x1], _0x270f83[_0x28255a++] = _0x395867[0x2], _0x270f83[_0x28255a++] = _0x395867[0x3], _0x270f83[_0x28255a++] = _0x395867[0x4], _0x270f83[_0x28255a++] = _0x395867[0x5], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x42bc64['create'] = function (_0x41e2e9, _0x288371, _0xf42ca9, _0x2fbb62, _0x12f53e, _0x1d2346, _0x11c44a) {
                var _0xa8c7ca = _0x5460aa['getItemByC' + 'lass']('DrawLineCm' + 'd', _0x42bc64);
                _0xa8c7ca['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_'] && (_0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['setMeshByP' + 'aramData'](_0x42bc64['_PARAM_VB_' + 'POS_'] * 0x4, _0x42bc64['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, 0x1 * 0x4, _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x4, _0x42bc64['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, 0x2 * 0x4, _0x42bc64['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']));
                !_0xa8c7ca['_paramData'] && (_0xa8c7ca['_paramData'] = new ParamData(0x18 * 0x4, !![]));
                {
                    _0xa8c7ca['_fromX'] = _0x41e2e9, _0xa8c7ca['_fromY'] = _0x288371, _0xa8c7ca['_toX'] = _0xf42ca9, _0xa8c7ca['_toY'] = _0x2fbb62, _0xa8c7ca['_lineColor'] = _0x12f53e, _0xa8c7ca['_lineWidth'] = _0x1d2346, _0xa8c7ca['_vid'] = _0x11c44a;
                    var _0x3fbc21 = _0x4b1f30['create'](_0x12f53e), _0x574359 = _0x3fbc21['numColor'], _0x48fd6e = [
                            _0x41e2e9,
                            _0x288371,
                            _0xf42ca9,
                            _0x2fbb62
                        ], _0x46c261 = [], _0xb2bd69 = [];
                    _0x2fe41e['createLine' + '2'](_0x48fd6e, _0xb2bd69, _0x1d2346, 0x0, _0x46c261, ![]);
                    var _0x215179 = _0xa8c7ca['_paramData']['_float32Da' + 'ta'], _0x558d3f = _0xa8c7ca['_paramData']['_int32Data'], _0x3fb61b = _0xa8c7ca['_paramData']['_int16Data'];
                    _0x558d3f[0x0] = 0x1, _0x558d3f[0x1] = 0xc * 0x4, _0x558d3f[0x2] = 0x6 * 0x2, _0x558d3f[_0x42bc64['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x558d3f[_0x42bc64['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x558d3f[_0x42bc64['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0;
                    var _0x2f3221 = _0x42bc64['_PARAM_VB_' + 'POS_'];
                    _0x215179[_0x2f3221++] = _0x46c261[0x0], _0x215179[_0x2f3221++] = _0x46c261[0x1], _0x558d3f[_0x2f3221++] = _0x574359, _0x215179[_0x2f3221++] = _0x46c261[0x2], _0x215179[_0x2f3221++] = _0x46c261[0x3], _0x558d3f[_0x2f3221++] = _0x574359, _0x215179[_0x2f3221++] = _0x46c261[0x4], _0x215179[_0x2f3221++] = _0x46c261[0x5], _0x558d3f[_0x2f3221++] = _0x574359, _0x215179[_0x2f3221++] = _0x46c261[0x6], _0x215179[_0x2f3221++] = _0x46c261[0x7], _0x558d3f[_0x2f3221++] = _0x574359;
                    var _0x371e08 = _0x42bc64['_PARAM_IB_' + 'POS_'] * 0x2;
                    _0x3fb61b[_0x371e08++] = _0xb2bd69[0x0], _0x3fb61b[_0x371e08++] = _0xb2bd69[0x1], _0x3fb61b[_0x371e08++] = _0xb2bd69[0x2], _0x3fb61b[_0x371e08++] = _0xb2bd69[0x3], _0x3fb61b[_0x371e08++] = _0xb2bd69[0x4], _0x3fb61b[_0x371e08++] = _0xb2bd69[0x5], !_0x12f53e ? _0x215179[_0x42bc64['_PARAM_LIN' + 'ECOLOR_POS' + '_']] = 0xff0000ff : _0x215179[_0x42bc64['_PARAM_LIN' + 'ECOLOR_POS' + '_']] = _0x12f53e, _0x215179[_0x42bc64['_PARAM_LIN' + 'EWIDTH_POS' + '_']] = _0x1d2346, _0x215179[_0x42bc64['_PARAM_VID' + '_POS_']] = _0x11c44a, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xa8c7ca['_paramData']);
                }
                return _0xa8c7ca['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_']['getPtrID'](), _0xa8c7ca['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xa8c7ca['_graphicsC' + 'mdEncoder']), _0xa8c7ca;
            }, _0x42bc64['ID'] = 'DrawLine', _0x42bc64['_DRAW_LINE' + '_CMD_ENCOD' + 'ER_'] = null, _0x42bc64['_PARAM_VB_' + 'POS_'] = 0x3, _0x42bc64['_PARAM_IB_' + 'POS_'] = 0xf, _0x42bc64['_PARAM_LIN' + 'ECOLOR_POS' + '_'] = 0x12, _0x42bc64['_PARAM_LIN' + 'EWIDTH_POS' + '_'] = 0x13, _0x42bc64['_PARAM_VID' + '_POS_'] = 0x14, _0x42bc64['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0x15, _0x42bc64['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0x16, _0x42bc64['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0x17, _0x42bc64;
        }(), _0x1aca61 = function () {
            function _0x23ba51() {
                this['_draw_text' + 'ure_cmd_en' + 'coder_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x40, 0x20, !![]);
            }
            _0x199b5b(_0x23ba51, 'laya.layag' + 'l.cmdNativ' + 'e.FillBord' + 'erWordsCmd' + 'Native');
            var _0x46f67d = _0x23ba51['prototype'];
            return _0x46f67d['createFill' + 'BorderText'] = function (_0x142aee, _0x145034, _0x3e40ad, _0x51c502, _0x1ab17b, _0x1dfb3e, _0x23a3bc, _0x3b0764) {
                var _0x457b7f = _0x4b1f30['create'](_0x1dfb3e), _0x4df68b = _0x457b7f['numColor'], _0x1939e5 = {};
                _0x1939e5['_curMat'] = new _0x4fb671(), _0x1939e5['_italicDeg'] = 0x0, _0x1939e5['_drawTextu' + 'reUseColor'] = 0xffffffff, _0x1939e5['fillStyle'] = _0x1dfb3e, _0x1939e5['_fillColor'] = 0xffffffff, _0x1939e5['setFillCol' + 'or'] = function (_0x4bd7ab) {
                    _0x1939e5['_fillColor'] = _0x4bd7ab;
                }, _0x1939e5['getFillCol' + 'or'] = function () {
                    return _0x1939e5['_fillColor'];
                }, _0x1939e5['mixRGBandA' + 'lpha'] = function (_0x4c2e01) {
                    return _0x4c2e01;
                }, _0x1939e5['_drawTextu' + 'reM'] = function (_0x371587, _0x5addec, _0x46a934, _0x549642, _0x3031ce, _0x33675e, _0x35d3d6, _0x383bf1) {
                    _0x142aee['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x142aee['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x142aee['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x142aee['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x142aee['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x142aee['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x142aee['uniformTex' + 'ture'](0x3, 0x84c0, _0x371587['bitmap']['_glTexture']);
                    var _0x10ffa7 = new Float32Array([
                            _0x5addec,
                            _0x46a934,
                            _0x383bf1[0x0],
                            _0x383bf1[0x1],
                            0x0,
                            0x0,
                            _0x5addec + _0x549642,
                            _0x46a934,
                            _0x383bf1[0x2],
                            _0x383bf1[0x3],
                            0x0,
                            0x0,
                            _0x5addec + _0x549642,
                            _0x46a934 + _0x3031ce,
                            _0x383bf1[0x4],
                            _0x383bf1[0x5],
                            0x0,
                            0x0,
                            _0x5addec,
                            _0x46a934 + _0x3031ce,
                            _0x383bf1[0x6],
                            _0x383bf1[0x7],
                            0x0,
                            0x0
                        ]), _0x1f594d = new Int32Array(_0x10ffa7['buffer']);
                    _0x1f594d[0x4] = _0x1f594d[0xa] = _0x1f594d[0x10] = _0x1f594d[0x16] = 0xffffffff, _0x1f594d[0x5] = _0x1f594d[0xb] = _0x1f594d[0x11] = _0x1f594d[0x17] = 0xffffffff, _0x142aee['setRectMes' + 'h'](0x1, _0x10ffa7, _0x10ffa7['length']), _0x142aee['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x142aee['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x142aee);
                }, _0x23ba51['cbook']['filltext_n' + 'ative'](_0x1939e5, null, _0x145034, _0x3e40ad, _0x51c502, _0x1ab17b, _0x1dfb3e, _0x23a3bc, _0x3b0764, null, 0x0);
            }, _0x46f67d['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, this['words'] = null, _0x5460aa['recover']('FillBorder' + 'WordsCmd', this);
            }, _0x3a2bd3(0x0, _0x46f67d, 'cmdID', function () {
                return 'FillBorder' + 'Words';
            }), _0x23ba51['create'] = function (_0x3f9d36, _0x493d2c, _0x3871fc, _0x5e5a59, _0x4d8b4a, _0x3a414d, _0x207346) {
                if (!_0x23ba51['cbook'])
                    new Error('Error:char' + 'book\x20not\x20c' + 'reate!');
                var _0x3f4c7a = _0x5460aa['getItemByC' + 'lass']('FillBorder' + 'WordsCmd', _0x23ba51), _0x19f7eb = _0x3f4c7a['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x3f4c7a['words'] = _0x3f9d36, _0x3f4c7a['x'] = _0x493d2c, _0x3f4c7a['y'] = _0x3871fc, _0x3f4c7a['font'] = _0x5e5a59, _0x3f4c7a['color'] = _0x4d8b4a, _0x3f4c7a['strokeColo' + 'r'] = _0x3a414d, _0x3f4c7a['strokeWidt' + 'h'] = _0x207346, _0x3f4c7a['_draw_text' + 'ure_cmd_en' + 'coder_']['clearEncod' + 'ing'](), _0x3f4c7a['createFill' + 'BorderText'](_0x3f4c7a['_draw_text' + 'ure_cmd_en' + 'coder_'], _0x3f9d36, _0x493d2c, _0x3871fc, _0x5e5a59, _0x4d8b4a, _0x3a414d, _0x207346), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3f4c7a['_draw_text' + 'ure_cmd_en' + 'coder_']), _0x19f7eb['useCommand' + 'Encoder'](_0x3f4c7a['_draw_text' + 'ure_cmd_en' + 'coder_']['getPtrID'](), -0x1, -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x19f7eb), _0x3f4c7a;
            }, _0x23ba51['ID'] = 'FillBorder' + 'Words', _0x3a2911(_0x23ba51, [
                'cbook',
                function () {
                    return this['cbook'] = _0x4a6519['textRender'];
                }
            ]), _0x23ba51;
        }(), _0x5ea528 = function () {
            function _0x1ae66e(_0x552996, _0x13ebc3) {
                this['submitStar' + 'tPos'] = 0x0, this['submitEndP' + 'os'] = 0x0, this['context'] = null, this['touches'] = [], this['submits'] = [], this['sprite'] = null, this['_mesh'] = null, this['_pathMesh'] = null, this['_triangleM' + 'esh'] = null, this['meshlist'] = [], this['_oldMesh'] = null, this['_oldPathMe' + 'sh'] = null, this['_oldTriMes' + 'h'] = null, this['_oldMeshLi' + 'st'] = null, this['oldTx'] = 0x0, this['oldTy'] = 0x0, this['cachedClip' + 'Info'] = new _0x4fb671(), this['invMat'] = new _0x4fb671(), this['context'] = _0x552996, this['sprite'] = _0x13ebc3, _0x552996['_globalCli' + 'pMatrix']['copyTo'](this['cachedClip' + 'Info']);
            }
            _0x199b5b(_0x1ae66e, 'laya.webgl' + '.canvas.We' + 'bGLCacheAs' + 'NormalCanv' + 'as');
            var _0x276402 = _0x1ae66e['prototype'];
            return _0x276402['startRec'] = function () {
                this['context']['_charSubmi' + 'tCache']['_enbale'] && (this['context']['_charSubmi' + 'tCache']['enable'](![], this['context']), this['context']['_charSubmi' + 'tCache']['enable'](!![], this['context']));
                this['touches']['length'] = 0x0, this['context']['touches'] = this['touches'], this['context']['_globalCli' + 'pMatrix']['copyTo'](this['cachedClip' + 'Info']), this['submits']['length'] = 0x0, this['submitStar' + 'tPos'] = this['context']['_submits']['_length'];
                for (var _0x4aa4bf = 0x0, _0x50d708 = this['meshlist']['length']; _0x4aa4bf < _0x50d708; _0x4aa4bf++) {
                    var _0x3d1109 = this['meshlist'][_0x4aa4bf];
                    _0x3d1109['canReuse'] ? _0x3d1109['releaseMes' + 'h']() : _0x3d1109['destroy']();
                }
                this['meshlist']['length'] = 0x0, this['_mesh'] = _0x1645d2['getAMesh'](), this['_pathMesh'] = _0x20c78c['getAMesh'](), this['_triangleM' + 'esh'] = _0x2696ab['getAMesh'](), this['meshlist']['push'](this['_mesh']), this['meshlist']['push'](this['_pathMesh']), this['meshlist']['push'](this['_triangleM' + 'esh']), this['context']['_curSubmit'] = _0x247f32['RENDERBASE'], this['_oldMesh'] = this['context']['_mesh'], this['_oldPathMe' + 'sh'] = this['context']['_pathMesh'], this['_oldTriMes' + 'h'] = this['context']['_triangleM' + 'esh'], this['_oldMeshLi' + 'st'] = this['context']['meshlist'], this['context']['_mesh'] = this['_mesh'], this['context']['_pathMesh'] = this['_pathMesh'], this['context']['_triangleM' + 'esh'] = this['_triangleM' + 'esh'], this['context']['meshlist'] = this['meshlist'], this['oldTx'] = this['context']['_curMat']['tx'], this['oldTy'] = this['context']['_curMat']['ty'], this['context']['_curMat']['tx'] = 0x0, this['context']['_curMat']['ty'] = 0x0, this['context']['_curMat']['copyTo'](this['invMat']), this['invMat']['invert']();
            }, _0x276402['endRec'] = function () {
                this['context']['_charSubmi' + 'tCache']['_enbale'] && (this['context']['_charSubmi' + 'tCache']['enable'](![], this['context']), this['context']['_charSubmi' + 'tCache']['enable'](!![], this['context']));
                ;
                var _0x5c77b5 = this['context']['_submits'];
                this['submitEndP' + 'os'] = _0x5c77b5['_length'];
                var _0x4e53d4 = this['submitEndP' + 'os'] - this['submitStar' + 'tPos'];
                for (var _0x47b955 = 0x0; _0x47b955 < _0x4e53d4; _0x47b955++) {
                    this['submits']['push'](_0x5c77b5[this['submitStar' + 'tPos'] + _0x47b955]);
                }
                _0x5c77b5['_length'] -= _0x4e53d4, this['context']['_mesh'] = this['_oldMesh'], this['context']['_pathMesh'] = this['_oldPathMe' + 'sh'], this['context']['_triangleM' + 'esh'] = this['_oldTriMes' + 'h'], this['context']['meshlist'] = this['_oldMeshLi' + 'st'], this['context']['_curSubmit'] = _0x247f32['RENDERBASE'], this['context']['_curMat']['tx'] = this['oldTx'], this['context']['_curMat']['ty'] = this['oldTy'], this['context']['touches'] = null;
            }, _0x276402['isCacheVal' + 'id'] = function () {
                var _0x257b9b = this['context']['_globalCli' + 'pMatrix'];
                if (_0x257b9b['a'] != this['cachedClip' + 'Info']['a'] || _0x257b9b['b'] != this['cachedClip' + 'Info']['b'] || _0x257b9b['c'] != this['cachedClip' + 'Info']['c'] || _0x257b9b['d'] != this['cachedClip' + 'Info']['d'] || _0x257b9b['tx'] != this['cachedClip' + 'Info']['tx'] || _0x257b9b['ty'] != this['cachedClip' + 'Info']['ty'])
                    return ![];
                return !![];
            }, _0x276402['flushsubmi' + 't'] = function () {
                var _0x5873bd = _0x247f32['RENDERBASE'];
                this['submits']['forEach'](function (_0x398434) {
                    if (_0x398434 == _0x247f32['RENDERBASE'])
                        return;
                    _0x247f32['preRender'] = _0x5873bd, _0x5873bd = _0x398434, _0x398434['renderSubm' + 'it']();
                });
            }, _0x276402['releaseMem'] = function () {
            }, _0x3a2911(_0x1ae66e, [
                'matI',
                function () {
                    return this['matI'] = new _0x4fb671();
                }
            ]), _0x1ae66e;
        }(), _0x127bc9 = function () {
            function _0x4f0940(_0x308e45, _0x3c3f8a, _0x3e7569) {
                this['i'] = null, this['x'] = null, this['y'] = null, this['prev'] = null, this['next'] = null, this['z'] = null, this['prevZ'] = null, this['nextZ'] = null, this['steiner'] = null, this['i'] = _0x308e45, this['x'] = _0x3c3f8a, this['y'] = _0x3e7569, this['prev'] = null, this['next'] = null, this['z'] = null, this['prevZ'] = null, this['nextZ'] = null, this['steiner'] = ![];
            }
            return _0x199b5b(_0x4f0940, 'laya.webgl' + '.shapes.Ea' + 'rcutNode'), _0x4f0940;
        }(), _0x2fe41e = function () {
            function _0x19ac62() {
            }
            return _0x199b5b(_0x19ac62, 'laya.webgl' + '.shapes.Ba' + 'sePoly'), _0x19ac62['createLine' + '2'] = function (_0xb11908, _0x3bc005, _0x56e9f2, _0x5d85d9, _0x203385, _0x199368) {
                if (_0xb11908['length'] < 0x4)
                    return null;
                var _0x597b1d = _0x19ac62['tempData']['length'] > _0xb11908['length'] + 0x2 ? _0x19ac62['tempData'] : new Array(_0xb11908['length'] + 0x2);
                _0x597b1d[0x0] = _0xb11908[0x0], _0x597b1d[0x1] = _0xb11908[0x1];
                var _0x246627 = 0x2, _0x58ec32 = 0x0, _0x217df8 = _0xb11908['length'];
                for (_0x58ec32 = 0x2; _0x58ec32 < _0x217df8; _0x58ec32 += 0x2) {
                    Math['abs'](_0xb11908[_0x58ec32] - _0xb11908[_0x58ec32 - 0x2]) + Math['abs'](_0xb11908[_0x58ec32 + 0x1] - _0xb11908[_0x58ec32 - 0x1]) > 0.01 && (_0x597b1d[_0x246627++] = _0xb11908[_0x58ec32], _0x597b1d[_0x246627++] = _0xb11908[_0x58ec32 + 0x1]);
                }
                _0x199368 && Math['abs'](_0xb11908[0x0] - _0x597b1d[_0x246627 - 0x2]) + Math['abs'](_0xb11908[0x1] - _0x597b1d[_0x246627 - 0x1]) > 0.01 && (_0x597b1d[_0x246627++] = _0xb11908[0x0], _0x597b1d[_0x246627++] = _0xb11908[0x1]);
                ;
                var _0x345385 = _0x203385;
                _0x217df8 = _0x246627 / 0x2;
                var _0x4225b4 = _0x56e9f2 / 0x2, _0x3b906b, _0x29d805, _0x582b6e, _0x5b1b4f, _0x5117e7, _0x3c94e2, _0x1d6724, _0x31cc53, _0x3f603a, _0x4e23aa, _0x25ca35, _0x104a14, _0x2a907c, _0x169f88, _0x199d0c, _0x2f6118, _0x23ff68, _0x351b87, _0x24ed72, _0x4d64db, _0x135f27, _0x4b3705, _0x4483e3;
                _0x582b6e = _0x597b1d[0x0], _0x5b1b4f = _0x597b1d[0x1], _0x5117e7 = _0x597b1d[0x2], _0x3c94e2 = _0x597b1d[0x3], _0x3f603a = -(_0x5b1b4f - _0x3c94e2), _0x4e23aa = _0x582b6e - _0x5117e7, _0x4483e3 = Math['sqrt'](_0x3f603a * _0x3f603a + _0x4e23aa * _0x4e23aa), _0x3f603a = _0x3f603a / _0x4483e3 * _0x4225b4, _0x4e23aa = _0x4e23aa / _0x4483e3 * _0x4225b4;
                var _0x4e0b25 = _0x3f603a, _0x5c53f0 = _0x4e23aa;
                _0x345385['push'](_0x582b6e - _0x3f603a, _0x5b1b4f - _0x4e23aa, _0x582b6e + _0x3f603a, _0x5b1b4f + _0x4e23aa);
                for (_0x58ec32 = 0x1; _0x58ec32 < _0x217df8 - 0x1; _0x58ec32++) {
                    _0x582b6e = _0x597b1d[(_0x58ec32 - 0x1) * 0x2], _0x5b1b4f = _0x597b1d[(_0x58ec32 - 0x1) * 0x2 + 0x1], _0x5117e7 = _0x597b1d[_0x58ec32 * 0x2], _0x3c94e2 = _0x597b1d[_0x58ec32 * 0x2 + 0x1], _0x1d6724 = _0x597b1d[(_0x58ec32 + 0x1) * 0x2], _0x31cc53 = _0x597b1d[(_0x58ec32 + 0x1) * 0x2 + 0x1], _0x3f603a = -(_0x5b1b4f - _0x3c94e2), _0x4e23aa = _0x582b6e - _0x5117e7, _0x4483e3 = Math['sqrt'](_0x3f603a * _0x3f603a + _0x4e23aa * _0x4e23aa), _0x3f603a = _0x3f603a / _0x4483e3 * _0x4225b4, _0x4e23aa = _0x4e23aa / _0x4483e3 * _0x4225b4, _0x25ca35 = -(_0x3c94e2 - _0x31cc53), _0x104a14 = _0x5117e7 - _0x1d6724, _0x4483e3 = Math['sqrt'](_0x25ca35 * _0x25ca35 + _0x104a14 * _0x104a14), _0x25ca35 = _0x25ca35 / _0x4483e3 * _0x4225b4, _0x104a14 = _0x104a14 / _0x4483e3 * _0x4225b4, _0x199d0c = -_0x4e23aa + _0x5b1b4f - (-_0x4e23aa + _0x3c94e2), _0x2f6118 = -_0x3f603a + _0x5117e7 - (-_0x3f603a + _0x582b6e), _0x23ff68 = (-_0x3f603a + _0x582b6e) * (-_0x4e23aa + _0x3c94e2) - (-_0x3f603a + _0x5117e7) * (-_0x4e23aa + _0x5b1b4f), _0x351b87 = -_0x104a14 + _0x31cc53 - (-_0x104a14 + _0x3c94e2), _0x24ed72 = -_0x25ca35 + _0x5117e7 - (-_0x25ca35 + _0x1d6724), _0x4d64db = (-_0x25ca35 + _0x1d6724) * (-_0x104a14 + _0x3c94e2) - (-_0x25ca35 + _0x5117e7) * (-_0x104a14 + _0x31cc53), _0x135f27 = _0x199d0c * _0x24ed72 - _0x351b87 * _0x2f6118;
                    if (Math['abs'](_0x135f27) < 0.1) {
                        _0x135f27 += 10.1, _0x345385['push'](_0x5117e7 - _0x3f603a, _0x3c94e2 - _0x4e23aa, _0x5117e7 + _0x3f603a, _0x3c94e2 + _0x4e23aa);
                        continue;
                    }
                    _0x3b906b = (_0x2f6118 * _0x4d64db - _0x24ed72 * _0x23ff68) / _0x135f27, _0x29d805 = (_0x351b87 * _0x23ff68 - _0x199d0c * _0x4d64db) / _0x135f27, _0x4b3705 = (_0x3b906b - _0x5117e7) * (_0x3b906b - _0x5117e7) + (_0x29d805 - _0x3c94e2) + (_0x29d805 - _0x3c94e2), _0x345385['push'](_0x3b906b, _0x29d805, _0x5117e7 - (_0x3b906b - _0x5117e7), _0x3c94e2 - (_0x29d805 - _0x3c94e2));
                }
                _0x582b6e = _0x597b1d[_0x246627 - 0x4], _0x5b1b4f = _0x597b1d[_0x246627 - 0x3], _0x5117e7 = _0x597b1d[_0x246627 - 0x2], _0x3c94e2 = _0x597b1d[_0x246627 - 0x1], _0x3f603a = -(_0x5b1b4f - _0x3c94e2), _0x4e23aa = _0x582b6e - _0x5117e7, _0x4483e3 = Math['sqrt'](_0x3f603a * _0x3f603a + _0x4e23aa * _0x4e23aa), _0x3f603a = _0x3f603a / _0x4483e3 * _0x4225b4, _0x4e23aa = _0x4e23aa / _0x4483e3 * _0x4225b4, _0x345385['push'](_0x5117e7 - _0x3f603a, _0x3c94e2 - _0x4e23aa, _0x5117e7 + _0x3f603a, _0x3c94e2 + _0x4e23aa);
                for (_0x58ec32 = 0x1; _0x58ec32 < _0x217df8; _0x58ec32++) {
                    _0x3bc005['push'](_0x5d85d9 + (_0x58ec32 - 0x1) * 0x2, _0x5d85d9 + (_0x58ec32 - 0x1) * 0x2 + 0x1, _0x5d85d9 + _0x58ec32 * 0x2 + 0x1, _0x5d85d9 + _0x58ec32 * 0x2 + 0x1, _0x5d85d9 + _0x58ec32 * 0x2, _0x5d85d9 + (_0x58ec32 - 0x1) * 0x2);
                }
                return _0x345385;
            }, _0x19ac62['createLine' + 'Triangle'] = function (_0x503558, _0x1f4c7d, _0x45c4e9, _0x8f6df7, _0x22d17b, _0x17f52e, _0x2d0847) {
                var _0xa635e2 = _0x503558['slice'](), _0x1c4ab9 = _0xa635e2['length'], _0x180352 = _0xa635e2[0x0], _0x2ca841 = _0xa635e2[0x1], _0x345d28 = _0xa635e2[0x2], _0x1bd711 = _0xa635e2[0x2], _0x8eafe4 = 0x0, _0x2b1ae8 = 0x0, _0x50b379 = 0x0, _0x209e88 = 0x0, _0x48da96 = _0x1c4ab9 / 0x2;
                if (_0x48da96 <= 0x1)
                    return;
                if (_0x48da96 == 0x2)
                    return;
                ;
                var _0x4e169e = new Array(_0x48da96 * 0x4), _0x252e2a = 0x0, _0x24a8c0 = 0x0;
                for (var _0x24ddec = 0x0; _0x24ddec < _0x48da96 - 0x1; _0x24ddec++) {
                    _0x180352 = _0xa635e2[_0x24a8c0++], _0x2ca841 = _0xa635e2[_0x24a8c0++], (_0x345d28 = _0xa635e2[_0x24a8c0++], _0x1bd711 = _0xa635e2[_0x24a8c0++]), (_0x50b379 = _0x345d28 - _0x180352, _0x209e88 = _0x1bd711 - _0x2ca841), _0x50b379 != 0x0 && _0x209e88 != 0x0 && (_0x8eafe4 = Math['sqrt'](_0x50b379 * _0x50b379 + _0x209e88 * _0x209e88), _0x8eafe4 > 0.001 && (_0x2b1ae8 = _0x252e2a * 0x4, _0x4e169e[_0x2b1ae8] = _0x180352, _0x4e169e[_0x2b1ae8 + 0x1] = _0x2ca841, _0x4e169e[_0x2b1ae8 + 0x2] = _0x50b379 / _0x8eafe4, _0x4e169e[_0x2b1ae8 + 0x3] = _0x209e88 / _0x8eafe4, _0x252e2a++));
                }
                _0x8f6df7 ? (_0x180352 = _0xa635e2[_0x1c4ab9 - 0x2], _0x2ca841 = _0xa635e2[_0x1c4ab9 - 0x1], (_0x345d28 = _0xa635e2[0x0], _0x1bd711 = _0xa635e2[0x1]), (_0x50b379 = _0x345d28 - _0x180352, _0x209e88 = _0x1bd711 - _0x2ca841), _0x50b379 != 0x0 && _0x209e88 != 0x0 && (_0x8eafe4 = Math['sqrt'](_0x50b379 * _0x50b379 + _0x209e88 * _0x209e88), _0x8eafe4 > 0.001 && (_0x2b1ae8 = _0x252e2a * 0x4, _0x4e169e[_0x2b1ae8] = _0x180352, _0x4e169e[_0x2b1ae8 + 0x1] = _0x2ca841, _0x4e169e[_0x2b1ae8 + 0x2] = _0x50b379 / _0x8eafe4, _0x4e169e[_0x2b1ae8 + 0x3] = _0x209e88 / _0x8eafe4, _0x252e2a++))) : (_0x2b1ae8 = _0x252e2a * 0x4, _0x4e169e[_0x2b1ae8] = _0x180352, _0x4e169e[_0x2b1ae8 + 0x1] = _0x2ca841, _0x4e169e[_0x2b1ae8 + 0x2] = _0x50b379 / _0x8eafe4, _0x4e169e[_0x2b1ae8 + 0x3] = _0x209e88 / _0x8eafe4, _0x252e2a++);
                _0x24a8c0 = 0x0;
                for (_0x24ddec = 0x0; _0x24ddec < _0x48da96; _0x24ddec++) {
                    _0x180352 = _0xa635e2[_0x24a8c0], _0x2ca841 = _0xa635e2[_0x24a8c0 + 0x1], (_0x345d28 = _0xa635e2[_0x24a8c0 + 0x2], _0x1bd711 = _0xa635e2[_0x24a8c0 + 0x3]);
                    var _0x12c0c1 = _0xa635e2[_0x24a8c0 + 0x4], _0x90d11 = _0xa635e2[_0x24a8c0 + 0x5];
                }
                if (_0x8f6df7) {
                }
            }, _0x3a2911(_0x19ac62, [
                'tempData',
                function () {
                    return this['tempData'] = new Array(0x100);
                }
            ]), _0x19ac62;
        }(), _0x7cc5d = function () {
            function _0x2b297d() {
                this['_data'] = [], this['_ndata'] = 0x0, this['_tex'] = null, this['_imgId'] = 0x0, this['_clipid'] = -0x1, this['_enbale'] = ![], this['_colorFile' + 'r'] = null, this['_clipMatri' + 'x'] = new _0x4fb671();
            }
            _0x199b5b(_0x2b297d, 'laya.webgl' + '.text.Char' + 'SubmitCach' + 'e');
            var _0x598764 = _0x2b297d['prototype'];
            return _0x598764['clear'] = function () {
                this['_tex'] = null, this['_imgId'] = -0x1, this['_ndata'] = 0x0, this['_enbale'] = ![], this['_colorFile' + 'r'] = null;
            }, _0x598764['destroy'] = function () {
                this['clear'](), this['_data']['length'] = 0x0, this['_data'] = null;
            }, _0x598764['add'] = function (_0x53b29c, _0x6a9d0, _0x1a797c, _0x14b023, _0x46abdb, _0x94019a) {
                this['_ndata'] > 0x0 && (this['_tex'] != _0x6a9d0 || this['_imgId'] != _0x1a797c || this['_clipid'] >= 0x0 && this['_clipid'] != _0x53b29c['_clipInfoI' + 'D']) && this['submit'](_0x53b29c), this['_clipid'] = _0x53b29c['_clipInfoI' + 'D'], _0x53b29c['_globalCli' + 'pMatrix']['copyTo'](this['_clipMatri' + 'x']), this['_tex'] = _0x6a9d0, this['_imgId'] = _0x1a797c, this['_colorFile' + 'r'] = _0x53b29c['_colorFile' + 'r'], this['_data'][this['_ndata']] = _0x14b023, this['_data'][this['_ndata'] + 0x1] = _0x46abdb, this['_data'][this['_ndata'] + 0x2] = _0x94019a, this['_ndata'] += 0x3;
            }, _0x598764['getPos'] = function () {
                if (_0x2b297d['__nPosPool'] == 0x0)
                    return new Array(0x8);
                return _0x2b297d['__posPool'][--_0x2b297d['__nPosPool']];
            }, _0x598764['enable'] = function (_0x51d52f, _0x17ce03) {
                if (_0x51d52f === this['_enbale'])
                    return;
                this['_enbale'] = _0x51d52f, this['_enbale'] || this['submit'](_0x17ce03);
            }, _0x598764['submit'] = function (_0x236173) {
                var _0xa8b9e4 = this['_ndata'];
                if (!_0xa8b9e4)
                    return;
                var _0x4b1cab = _0x236173['_mesh'], _0x3a3055 = _0x236173['_colorFile' + 'r'];
                _0x236173['_colorFile' + 'r'] = this['_colorFile' + 'r'];
                var _0x35778b = _0x519df4['create'](_0x236173, _0x4b1cab, _0xd9aa33['create'](0x1, 0x0));
                _0x236173['_submits'][_0x236173['_submits']['_length']++] = _0x236173['_curSubmit'] = _0x35778b, _0x35778b['shaderValu' + 'e']['textureHos' + 't'] = this['_tex'], _0x35778b['_key']['other'] = this['_imgId'], _0x236173['_colorFile' + 'r'] = _0x3a3055, _0x236173['_copyClipI' + 'nfo'](_0x35778b, this['_clipMatri' + 'x']), _0x35778b['clipInfoID'] = this['_clipid'];
                for (var _0x36f376 = 0x0; _0x36f376 < _0xa8b9e4; _0x36f376 += 0x3) {
                    _0x4b1cab['addQuad'](this['_data'][_0x36f376], this['_data'][_0x36f376 + 0x1], this['_data'][_0x36f376 + 0x2], !![]), _0x2b297d['__posPool'][_0x2b297d['__nPosPool']++] = this['_data'][_0x36f376];
                }
                _0xa8b9e4 /= 0x3, _0x35778b['_numEle'] += _0xa8b9e4 * 0x6, _0x4b1cab['indexNum'] += _0xa8b9e4 * 0x6, _0x4b1cab['vertNum'] += _0xa8b9e4 * 0x4, _0x236173['_drawCount'] += _0xa8b9e4, this['_ndata'] = 0x0;
                if (_0x29f3e7['loopCount'] % 0x64 == 0x0)
                    this['_data']['length'] = 0x0;
            }, _0x2b297d['__posPool'] = [], _0x2b297d['__nPosPool'] = 0x0, _0x2b297d;
        }(), _0x36e218 = function () {
            function _0xed16a1() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['_texture'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_width'] = NaN, this['_height'] = NaN, this['_matrix'] = null, this['_alpha'] = NaN, this['_color'] = null, this['_blendMode'] = null, this['_cmdCurren' + 'tPos'] = 0x0, this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x0;
            }
            _0x199b5b(_0xed16a1, 'laya.layag' + 'l.cmdNativ' + 'e.DrawText' + 'ureCmdNati' + 've');
            var _0x7f04c2 = _0xed16a1['prototype'];
            return _0x7f04c2['recover'] = function () {
                this['_texture'] = null, _0x5460aa['recover']('DrawTextur' + 'eCmd', this);
            }, _0x7f04c2['_setBlendM' + 'ode'] = function (_0x2777cf) {
                switch (_0x2777cf) {
                case 'normal':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x303;
                    break;
                case 'add':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x304;
                    break;
                case 'multiply':
                    this['_blend_src'] = 0x306, this['_blend_des' + 't'] = 0x303;
                    break;
                case 'screen':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x1;
                    break;
                case 'light':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x1;
                    break;
                case 'overlay':
                    this['_blend_src'] = 0x1, this['_blend_des' + 't'] = 0x301;
                    break;
                case 'destinatio' + 'n-out':
                    this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x0;
                    break;
                case 'mask':
                    this['_blend_src'] = 0x0, this['_blend_des' + 't'] = 0x302;
                    break;
                default:
                    alert('_setBlendM' + 'ode\x20Unknow' + 'n\x20type');
                    break;
                }
            }, _0x7f04c2['_mixRGBand' + 'Alpha'] = function (_0xf89911, _0x2a20d2) {
                var _0x50a2da = (_0xf89911 & 0xff000000) >>> 0x18;
                return _0x50a2da != 0x0 ? _0x50a2da *= _0x2a20d2 : _0x50a2da = _0x2a20d2 * 0xff, _0xf89911 & 0xffffff | _0x50a2da << 0x18;
            }, _0x3a2bd3(0x0, _0x7f04c2, 'cmdID', function () {
                return 'DrawTextur' + 'e';
            }), _0x3a2bd3(0x0, _0x7f04c2, 'matrix', function () {
                return this['_matrix'];
            }, function (_0x592a93) {
                !this['_matrix'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_matrix'] = _0x592a93;
                var _0x302928 = this['_paramData']['_float32Da' + 'ta'];
                _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_']] = _0x592a93['a'], _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x1] = _0x592a93['b'], _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x2] = _0x592a93['c'], _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x3] = _0x592a93['d'], _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x4] = _0x592a93['tx'], _0x302928[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x5] = _0x592a93['ty'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'y', function () {
                return this['_y'];
            }, function (_0x5f4d6f) {
                this['_y'] = _0x5f4d6f;
                var _0x157727 = this['_paramData']['_float32Da' + 'ta'];
                _0x157727[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x157727[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x157727[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x157727[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'texture', function () {
                return this['_texture'];
            }, function (_0x42c874) {
                if (!_0x42c874 || !_0x42c874['url'])
                    return;
                this['_texture'] = _0x42c874, this['_paramData']['_int32Data'][_0xed16a1['_PARAM_TEX' + 'TURE_POS_']] = this['_texture']['bitmap']['_glTexture']['id'];
                var _0x17de04 = this['_paramData']['_float32Da' + 'ta'], _0x12e7f2 = this['texture']['uv'];
                _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x2] = _0x12e7f2[0x0], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x3] = _0x12e7f2[0x1], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x8] = _0x12e7f2[0x2], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x9] = _0x12e7f2[0x3], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xe] = _0x12e7f2[0x4], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xf] = _0x12e7f2[0x5], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x14] = _0x12e7f2[0x6], _0x17de04[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x15] = _0x12e7f2[0x7], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'width', function () {
                return this['_width'];
            }, function (_0x409681) {
                this['_width'] = _0x409681;
                var _0x3c7101 = this['_paramData']['_float32Da' + 'ta'];
                _0x3c7101[_0xed16a1['_PARAM_VB_' + 'POS_']] = this['_x'], _0x3c7101[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x3c7101[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x3c7101[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'x', function () {
                return this['_x'];
            }, function (_0x3589d4) {
                this['_x'] = _0x3589d4;
                var _0x4d0da5 = this['_paramData']['_float32Da' + 'ta'];
                _0x4d0da5[_0xed16a1['_PARAM_VB_' + 'POS_']] = this['_x'], _0x4d0da5[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x4d0da5[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x4d0da5[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'height', function () {
                return this['_height'];
            }, function (_0x520033) {
                this['_height'] = _0x520033;
                var _0x377305 = this['_paramData']['_float32Da' + 'ta'];
                _0x377305[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x377305[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x377305[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x377305[_0xed16a1['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x7f04c2, 'alpha', function () {
                return this['_alpha'];
            }, function (_0x34d404) {
                this['_alpha'] = _0x34d404;
            }), _0xed16a1['create'] = function (_0x36f6ad, _0x2613ac, _0xaa979f, _0x1db4ea, _0x59d2ca, _0x34d713, _0x2feaba, _0x5861d4, _0x46c28a) {
                var _0xac4631 = _0x5460aa['getItemByC' + 'lass']('DrawTextur' + 'eCmd', _0xed16a1);
                _0xac4631['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_'] && (_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xbc, 0x20, !![]), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['blendFuncB' + 'yParamData'](_0xed16a1['_PARAM_BLE' + 'ND_SRC_POS' + '_'] * 0x4, _0xed16a1['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['uniformTex' + 'tureByPara' + 'mData'](_0xed16a1['_PARAM_UNI' + 'FORM_LOCAT' + 'ION_POS_'] * 0x4, _0xed16a1['_PARAM_TEX' + '_LOCATION_' + 'POS_'] * 0x4, _0xed16a1['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['setRectMes' + 'hByParamDa' + 'ta'](_0xed16a1['_PARAM_REC' + 'T_NUM_POS_'] * 0x4, _0xed16a1['_PARAM_VB_' + 'POS_'] * 0x4, _0xed16a1['_PARAM_VB_' + 'SIZE_POS_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']));
                !_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_'] && (_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xe0, 0x20, !![]), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['blendFuncB' + 'yParamData'](_0xed16a1['_PARAM_BLE' + 'ND_SRC_POS' + '_'] * 0x4, _0xed16a1['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['save'](), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['setGlobalV' + 'alueByPara' + 'mData'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x7, _0xed16a1['_PARAM_MAT' + 'RIX_POS_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['uniformTex' + 'tureByPara' + 'mData'](_0xed16a1['_PARAM_UNI' + 'FORM_LOCAT' + 'ION_POS_'] * 0x4, _0xed16a1['_PARAM_TEX' + '_LOCATION_' + 'POS_'] * 0x4, _0xed16a1['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['setRectMes' + 'hByParamDa' + 'ta'](_0xed16a1['_PARAM_REC' + 'T_NUM_POS_'] * 0x4, _0xed16a1['_PARAM_VB_' + 'POS_'] * 0x4, _0xed16a1['_PARAM_VB_' + 'SIZE_POS_'] * 0x4), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['restore'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']));
                !_0xac4631['_paramData'] && (_0xac4631['_paramData'] = new ParamData(0x25 * 0x4, !![]));
                {
                    _0xac4631['_texture'] = _0x36f6ad, _0xac4631['_x'] = _0x2613ac, _0xac4631['_y'] = _0xaa979f, _0xac4631['_width'] = _0x1db4ea, _0xac4631['_height'] = _0x59d2ca, _0xac4631['_matrix'] = _0x34d713, _0xac4631['_alpha'] = _0x2feaba, _0xac4631['_color'] = _0x5861d4, _0xac4631['_blendMode'] = _0x46c28a;
                    var _0xdeb082 = _0x1db4ea != 0x0 ? _0x1db4ea : _0x36f6ad['bitmap']['width'], _0x1458a1 = _0x59d2ca != 0x0 ? _0x59d2ca : _0x36f6ad['bitmap']['height'], _0x3a0fbd = _0x36f6ad['uv'], _0x3fa242 = _0xac4631['_paramData']['_float32Da' + 'ta'], _0x294eef = _0xac4631['_paramData']['_int32Data'];
                    _0x294eef[_0xed16a1['_PARAM_UNI' + 'FORM_LOCAT' + 'ION_POS_']] = 0x3, _0x294eef[_0xed16a1['_PARAM_TEX' + '_LOCATION_' + 'POS_']] = 0x84c0, _0x294eef[_0xed16a1['_PARAM_TEX' + 'TURE_POS_']] = _0x36f6ad['bitmap']['_glTexture']['id'], _0x294eef[_0xed16a1['_PARAM_REC' + 'T_NUM_POS_']] = 0x1, _0x294eef[_0xed16a1['_PARAM_VB_' + 'SIZE_POS_']] = 0x18 * 0x4;
                    _0x46c28a ? (_0xac4631['_setBlendM' + 'ode'](_0x46c28a), _0x294eef[_0xed16a1['_PARAM_BLE' + 'ND_SRC_POS' + '_']] = _0xac4631['_blend_src'], _0x294eef[_0xed16a1['_PARAM_BLE' + 'ND_DEST_PO' + 'S_']] = _0xac4631['_blend_des' + 't']) : (_0x294eef[_0xed16a1['_PARAM_BLE' + 'ND_SRC_POS' + '_']] = -0x1, _0x294eef[_0xed16a1['_PARAM_BLE' + 'ND_DEST_PO' + 'S_']] = -0x1);
                    ;
                    var _0x3a6cb3 = 0xffffffff;
                    _0x2feaba && (_0x3a6cb3 = _0xac4631['_mixRGBand' + 'Alpha'](_0x3a6cb3, _0x2feaba));
                    ;
                    var _0x47aa44 = _0xed16a1['_PARAM_VB_' + 'POS_'];
                    _0x3fa242[_0x47aa44++] = _0x2613ac, _0x3fa242[_0x47aa44++] = _0xaa979f, _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x0], _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x1], _0x294eef[_0x47aa44++] = _0x3a6cb3, _0x294eef[_0x47aa44++] = 0xffffffff, _0x3fa242[_0x47aa44++] = _0x2613ac + _0xdeb082, _0x3fa242[_0x47aa44++] = _0xaa979f, _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x2], _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x3], _0x294eef[_0x47aa44++] = _0x3a6cb3, _0x294eef[_0x47aa44++] = 0xffffffff, _0x3fa242[_0x47aa44++] = _0x2613ac + _0xdeb082, _0x3fa242[_0x47aa44++] = _0xaa979f + _0x1458a1, _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x4], _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x5], _0x294eef[_0x47aa44++] = _0x3a6cb3, _0x294eef[_0x47aa44++] = 0xffffffff, _0x3fa242[_0x47aa44++] = _0x2613ac, _0x3fa242[_0x47aa44++] = _0xaa979f + _0x1458a1, _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x6], _0x3fa242[_0x47aa44++] = _0x3a0fbd[0x7], _0x294eef[_0x47aa44++] = _0x3a6cb3, _0x294eef[_0x47aa44++] = 0xffffffff, _0x34d713 && (_0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_']] = _0x34d713['a'], _0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x1] = _0x34d713['b'], _0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x2] = _0x34d713['c'], _0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x3] = _0x34d713['d'], _0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x4] = _0x34d713['tx'], _0x3fa242[_0xed16a1['_PARAM_MAT' + 'RIX_POS_'] + 0x5] = _0x34d713['ty']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xac4631['_paramData']);
                }
                return _0x34d713 ? _0xac4631['_cmdCurren' + 'tPos'] = _0xac4631['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_']['getPtrID'](), _0xac4631['_paramData']['getPtrID'](), -0x1) : _0xac4631['_cmdCurren' + 'tPos'] = _0xac4631['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_']['getPtrID'](), _0xac4631['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xac4631['_graphicsC' + 'mdEncoder']), _0xac4631;
            }, _0xed16a1['ID'] = 'DrawTextur' + 'e', _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_'] = null, _0xed16a1['_DRAW_TEXT' + 'URE_CMD_EN' + 'CODER_MATR' + 'IX_'] = null, _0xed16a1['_PARAM_UNI' + 'FORM_LOCAT' + 'ION_POS_'] = 0x0, _0xed16a1['_PARAM_TEX' + '_LOCATION_' + 'POS_'] = 0x1, _0xed16a1['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0xed16a1['_PARAM_REC' + 'T_NUM_POS_'] = 0x3, _0xed16a1['_PARAM_VB_' + 'SIZE_POS_'] = 0x4, _0xed16a1['_PARAM_VB_' + 'POS_'] = 0x5, _0xed16a1['_PARAM_MAT' + 'RIX_POS_'] = 0x1d, _0xed16a1['_PARAM_BLE' + 'ND_SRC_POS' + '_'] = 0x23, _0xed16a1['_PARAM_BLE' + 'ND_DEST_PO' + 'S_'] = 0x24, _0xed16a1;
        }(), _0x1b00df = function () {
            function _0x516512() {
                this['_graphicsC' + 'mdEncoder'] = null;
            }
            _0x199b5b(_0x516512, 'laya.layag' + 'l.cmdNativ' + 'e.RestoreC' + 'mdNative');
            var _0x26379d = _0x516512['prototype'];
            return _0x26379d['recover'] = function () {
                _0x5460aa['recover']('RestoreCmd', this);
            }, _0x3a2bd3(0x0, _0x26379d, 'cmdID', function () {
                return 'Restore';
            }), _0x516512['create'] = function () {
                var _0x2ef58e = _0x5460aa['getItemByC' + 'lass']('RestoreCmd', _0x516512), _0x1859e0 = _0x2ef58e['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x1859e0['restore'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1859e0), _0x2ef58e;
            }, _0x516512['ID'] = 'Restore', _0x516512;
        }(), _0xb36f96 = function () {
            function _0x25f0ff() {
            }
            return _0x199b5b(_0x25f0ff, 'laya.webgl' + '.resource.' + 'WebGLRTMgr'), _0x25f0ff['getRT'] = function (_0x3fc62b, _0x41f04e) {
                _0x3fc62b = _0x3fc62b | 0x0, _0x41f04e = _0x41f04e | 0x0;
                _0x3fc62b >= 0x2710 && console['error']('getRT\x20erro' + 'r!\x20w\x20too\x20b' + 'ig');
                ;
                var _0x2ef43f = _0x41f04e * 0x2710 + _0x3fc62b, _0x1f15b5 = _0x25f0ff['dict'][_0x2ef43f], _0x4ccc5d;
                if (_0x1f15b5) {
                    if (_0x1f15b5['length'] > 0x0)
                        return _0x4ccc5d = _0x1f15b5['pop'](), _0x4ccc5d['_mgrKey'] = _0x2ef43f, _0x4ccc5d;
                }
                return _0x4ccc5d = new _0x4a9aac(_0x3fc62b, _0x41f04e, 0x1, -0x1), _0x4ccc5d['_mgrKey'] = _0x2ef43f, _0x4ccc5d;
            }, _0x25f0ff['releaseRT'] = function (_0x1a7e49) {
                if (_0x1a7e49['_mgrKey'] <= 0x0)
                    return;
                var _0x1e0c35 = _0x25f0ff['dict'][_0x1a7e49['_mgrKey']];
                !_0x1e0c35 && (_0x1e0c35 = [], _0x25f0ff['dict'][_0x1a7e49['_mgrKey']] = _0x1e0c35), _0x1a7e49['_mgrKey'] = 0x0, _0x1e0c35['push'](_0x1a7e49);
            }, _0x25f0ff['dict'] = {}, _0x25f0ff;
        }(), _0x58ea10 = function () {
            function _0x59b922() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['vbBuffer'] = null, this['_template'] = null, this['_floatCoun' + 'tPerVertex'] = 0x1d, this['_firstNewE' + 'lement'] = 0x0, this['_firstFree' + 'Element'] = 0x0, this['_firstActi' + 'veElement'] = 0x0, this['_firstReti' + 'redElement'] = 0x0, this['_maxPartic' + 'leNum'] = 0x0;
            }
            _0x199b5b(_0x59b922, 'laya.layag' + 'l.cmdNativ' + 'e.DrawPart' + 'icleCmdNat' + 'ive');
            var _0x48d291 = _0x59b922['prototype'];
            return _0x48d291['updatePart' + 'icle'] = function () {
                if (this['_template']['texture']) {
                    this['_template']['updatePart' + 'icleForNat' + 'ive']();
                    var _0x38ff19 = this['_template']['sv'], _0xab07 = this['_paramData']['_int32Data'], _0x170819 = this['_paramData']['_float32Da' + 'ta'], _0x13238e = 0x0, _0x44e169 = 0x0;
                    _0x170819[_0x59b922['_PARAM_CUR' + 'RENTTIME_P' + 'OS_']] = _0x38ff19['u_CurrentT' + 'ime'], _0x170819[_0x59b922['_PARAM_DUR' + 'ATION_POS_']] = _0x38ff19['u_Duration'], _0x170819[_0x59b922['_PARAM_END' + 'VEL_POS_']] = _0x38ff19['u_EndVeloc' + 'ity'], _0x170819[_0x59b922['_PARAM_GRA' + 'VITY_POS_']] = _0x38ff19['u_Gravity'][0x0], _0x170819[_0x59b922['_PARAM_GRA' + 'VITY_POS_'] + 0x1] = _0x38ff19['u_Gravity'][0x1], _0x170819[_0x59b922['_PARAM_GRA' + 'VITY_POS_'] + 0x2] = _0x38ff19['u_Gravity'][0x2], _0x38ff19['size'][0x0] = _0x5c6236['width'], _0x38ff19['size'][0x1] = _0x5c6236['height'], _0x170819[_0x59b922['_PARAM_SIZ' + 'E_POS_']] = _0x38ff19['size'][0x0], _0x170819[_0x59b922['_PARAM_SIZ' + 'E_POS_'] + 0x1] = _0x38ff19['size'][0x1], _0x170819[_0x59b922['_PARAM_MAT' + '_POS_']] = 0x1, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x1] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x2] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x3] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x4] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x5] = 0x1, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x6] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x7] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x8] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0x9] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xa] = 0x1, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xb] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xc] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xd] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xe] = 0x0, _0x170819[_0x59b922['_PARAM_MAT' + '_POS_'] + 0xf] = 0x1, _0xab07[_0x59b922['_PARAM_TEX' + 'TURE_LOC_P' + 'OS_']] = 0x84c0, _0xab07[_0x59b922['_PARAM_TEX' + 'TURE_POS_']] = this['_template']['texture']['bitmap']['_glTexture']['id'], this['vbBuffer'] = this['_template']['getConchMe' + 'sh'](), this['_firstNewE' + 'lement'] = this['_template']['getFirstNe' + 'wElement'](), this['_firstFree' + 'Element'] = this['_template']['getFirstFr' + 'eeElement'](), this['_firstActi' + 'veElement'] = this['_template']['getFirstAc' + 'tiveElemen' + 't'](), this['_firstReti' + 'redElement'] = this['_template']['getFirstRe' + 'tiredEleme' + 'nt']();
                    var _0x1c36c3 = 0x0, _0x47422b = 0x0, _0x29621d = 0x0, _0x10473b = 0x0, _0x4b634a = 0x0, _0x121877 = 0x0;
                    if (this['_firstActi' + 'veElement'] != this['_firstFree' + 'Element']) {
                        if (this['_firstActi' + 'veElement'] < this['_firstFree' + 'Element'])
                            _0xab07[_0x59b922['_PARAM_REG' + 'DATA_POS_']] = 0x1, _0x4b634a = this['_firstFree' + 'Element'] - this['_firstActi' + 'veElement'], _0x1c36c3 = (this['_firstFree' + 'Element'] - this['_firstActi' + 'veElement']) * this['_floatCoun' + 'tPerVertex'] * 0x4 * 0x4, _0x29621d = this['_firstActi' + 'veElement'] * this['_floatCoun' + 'tPerVertex'] * 0x4 * 0x4;
                        else {
                            _0xab07[_0x59b922['_PARAM_REG' + 'DATA_POS_']] = 0x0;
                            {
                                _0x4b634a = this['_maxPartic' + 'leNum'] - this['_firstActi' + 'veElement'], _0x1c36c3 = (this['_maxPartic' + 'leNum'] - this['_firstActi' + 'veElement']) * this['_floatCoun' + 'tPerVertex'] * 0x4 * 0x4, _0x29621d = this['_firstActi' + 'veElement'] * this['_floatCoun' + 'tPerVertex'] * 0x4 * 0x4;
                            }
                            {
                                this['_firstFree' + 'Element'] > 0x0 ? (_0x121877 = this['_firstFree' + 'Element'], _0x47422b = this['_firstFree' + 'Element'] * this['_floatCoun' + 'tPerVertex'] * 0x4 * 0x4, _0x10473b = 0x0) : _0xab07[_0x59b922['_PARAM_REG' + 'DATA_POS_']] = 0x1;
                            }
                        }
                    }
                    _0xab07[_0x59b922['_PARAM_VB1' + '_POS_']] = this['vbBuffer']['getPtrID'](), _0xab07[_0x59b922['_PARAM_REC' + 'T1_NUM_POS' + '_']] = _0x4b634a, _0xab07[_0x59b922['_PARAM_VB1' + '_SIZE_POS_']] = _0x1c36c3, _0xab07[_0x59b922['_PARAM_VB1' + '_OFFSET_PO' + 'S_']] = _0x29621d, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x47422b > 0x0 && (_0xab07[_0x59b922['_PARAM_VB2' + '_POS_']] = this['vbBuffer']['getPtrID'](), _0xab07[_0x59b922['_PARAM_REC' + 'T2_NUM_POS' + '_']] = _0x121877, _0xab07[_0x59b922['_PARAM_VB2' + '_SIZE_POS_']] = _0x47422b, _0xab07[_0x59b922['_PARAM_VB2' + '_OFFSET_PO' + 'S_']] = _0x10473b), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']), this['_template']['addDrawCou' + 'nter']();
                }
            }, _0x48d291['recover'] = function () {
                this['_template'] = null, _0x5460aa['recover']('DrawPartic' + 'leCmd', this);
            }, _0x3a2bd3(0x0, _0x48d291, 'cmdID', function () {
                return 'DrawPartic' + 'leCmd';
            }), _0x59b922['create'] = function (_0x40b664) {
                var _0x519fbf = _0x5460aa['getItemByC' + 'lass']('DrawPartic' + 'leCmd', _0x59b922);
                _0x519fbf['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_'] && (_0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x11c, 0x20, !![]), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWPARTIC' + 'LE']), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['useVDO'](_0xe4a59a['VDO_MESHPA' + 'RTICLE']), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x0, _0x59b922['_PARAM_CUR' + 'RENTTIME_P' + 'OS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x1, _0x59b922['_PARAM_DUR' + 'ATION_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x2, _0x59b922['_PARAM_END' + 'VEL_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x3, _0x59b922['_PARAM_GRA' + 'VITY_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x4, _0x59b922['_PARAM_SIZ' + 'E_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformByP' + 'aramData'](0x5, _0x59b922['_PARAM_MAT' + '_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['uniformTex' + 'tureByPara' + 'mData'](_0x59b922['_PARAM_TEX' + 'TURE_UNIFO' + 'RMLOC_POS_'] * 0x4, _0x59b922['_PARAM_TEX' + 'TURE_LOC_P' + 'OS_'] * 0x4, _0x59b922['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['setRectMes' + 'hExByParam' + 'Data'](_0x59b922['_PARAM_REC' + 'T1_NUM_POS' + '_'] * 0x4, _0x59b922['_PARAM_VB1' + '_POS_'] * 0x4, _0x59b922['_PARAM_VB1' + '_SIZE_POS_'] * 0x4, _0x59b922['_PARAM_VB1' + '_OFFSET_PO' + 'S_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x1, 0x7), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['loadDataTo' + 'RegByParam' + 'Data'](0x0, _0x59b922['_PARAM_REG' + 'DATA_POS_'] * 0x4, 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['ifGreater0'](0x0, 0x2), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['setRectMes' + 'hExByParam' + 'Data'](_0x59b922['_PARAM_REC' + 'T2_NUM_POS' + '_'] * 0x4, _0x59b922['_PARAM_VB2' + '_POS_'] * 0x4, _0x59b922['_PARAM_VB2' + '_SIZE_POS_'] * 0x4, _0x59b922['_PARAM_VB2' + '_OFFSET_PO' + 'S_'] * 0x4), _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x1, 0x7), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']));
                !_0x519fbf['_paramData'] && (_0x519fbf['_paramData'] = new ParamData(0x24 * 0x4, !![]));
                {
                    _0x519fbf['_template'] = _0x40b664, _0x519fbf['_maxPartic' + 'leNum'] = _0x40b664['settings']['maxPartice' + 's'];
                    var _0x2c709e = _0x519fbf['_paramData']['_int32Data'], _0x53baac = _0x40b664['_sv'], _0x47866a = _0x519fbf['_paramData']['_float32Da' + 'ta'], _0x21f457 = 0x0;
                    _0x47866a[_0x59b922['_PARAM_CUR' + 'RENTTIME_P' + 'OS_']] = -0x1, _0x47866a[_0x59b922['_PARAM_DUR' + 'ATION_POS_']] = -0x1, _0x47866a[_0x59b922['_PARAM_END' + 'VEL_POS_']] = -0x1, _0x47866a[_0x59b922['_PARAM_GRA' + 'VITY_POS_']] = -0x1, _0x47866a[_0x59b922['_PARAM_GRA' + 'VITY_POS_'] + 0x1] = -0x1, _0x47866a[_0x59b922['_PARAM_GRA' + 'VITY_POS_'] + 0x2] = -0x1, _0x47866a[_0x59b922['_PARAM_SIZ' + 'E_POS_']] = -0x1, _0x47866a[_0x59b922['_PARAM_SIZ' + 'E_POS_'] + 0x1] = -0x1;
                    for (_0x21f457 = 0x0; _0x21f457 < 0x10; _0x21f457++) {
                        _0x47866a[_0x59b922['_PARAM_MAT' + '_POS_'] + _0x21f457] = -0x1;
                    }
                    _0x2c709e[_0x59b922['_PARAM_TEX' + 'TURE_LOC_P' + 'OS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_TEX' + 'TURE_POS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_TEX' + 'TURE_UNIFO' + 'RMLOC_POS_']] = 0x6, _0x2c709e[_0x59b922['_PARAM_REG' + 'DATA_POS_']] = 0x0, _0x2c709e[_0x59b922['_PARAM_VB1' + '_POS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_VB2' + '_POS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_VB1' + '_SIZE_POS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_VB2' + '_SIZE_POS_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_REC' + 'T1_NUM_POS' + '_']] = -0x1, _0x2c709e[_0x59b922['_PARAM_REC' + 'T2_NUM_POS' + '_']] = -0x1, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x519fbf['_paramData']);
                }
                return _0x519fbf['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_']['getPtrID'](), _0x519fbf['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x519fbf['_graphicsC' + 'mdEncoder']), _0x519fbf;
            }, _0x59b922['ID'] = 'DrawPartic' + 'leCmd', _0x59b922['_DRAW_PART' + 'ICLE_CMD_E' + 'NCODER_'] = null, _0x59b922['_PARAM_VB1' + '_POS_'] = 0x0, _0x59b922['_PARAM_VB2' + '_POS_'] = 0x1, _0x59b922['_PARAM_VB1' + '_SIZE_POS_'] = 0x2, _0x59b922['_PARAM_VB2' + '_SIZE_POS_'] = 0x3, _0x59b922['_PARAM_CUR' + 'RENTTIME_P' + 'OS_'] = 0x4, _0x59b922['_PARAM_DUR' + 'ATION_POS_'] = 0x5, _0x59b922['_PARAM_END' + 'VEL_POS_'] = 0x6, _0x59b922['_PARAM_GRA' + 'VITY_POS_'] = 0x7, _0x59b922['_PARAM_SIZ' + 'E_POS_'] = 0xa, _0x59b922['_PARAM_MAT' + '_POS_'] = 0xc, _0x59b922['_PARAM_TEX' + 'TURE_LOC_P' + 'OS_'] = 0x1c, _0x59b922['_PARAM_TEX' + 'TURE_POS_'] = 0x1d, _0x59b922['_PARAM_REG' + 'DATA_POS_'] = 0x1e, _0x59b922['_PARAM_TEX' + 'TURE_UNIFO' + 'RMLOC_POS_'] = 0x1f, _0x59b922['_PARAM_REC' + 'T1_NUM_POS' + '_'] = 0x20, _0x59b922['_PARAM_REC' + 'T2_NUM_POS' + '_'] = 0x21, _0x59b922['_PARAM_VB1' + '_OFFSET_PO' + 'S_'] = 0x22, _0x59b922['_PARAM_VB2' + '_OFFSET_PO' + 'S_'] = 0x23, _0x59b922;
        }(), _0x5c6236 = function () {
            function _0x287916() {
            }
            return _0x199b5b(_0x287916, 'laya.webgl' + '.utils.Ren' + 'derState2D'), _0x287916['mat2MatArr' + 'ay'] = function (_0x402d9c, _0x5974c0) {
                var _0x56385a = _0x402d9c, _0x1af332 = _0x5974c0;
                return _0x1af332[0x0] = _0x56385a['a'], _0x1af332[0x1] = _0x56385a['b'], _0x1af332[0x2] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x2], _0x1af332[0x3] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x3], _0x1af332[0x4] = _0x56385a['c'], _0x1af332[0x5] = _0x56385a['d'], _0x1af332[0x6] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x6], _0x1af332[0x7] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x7], _0x1af332[0x8] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x8], _0x1af332[0x9] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0x9], _0x1af332[0xa] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0xa], _0x1af332[0xb] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0xb], _0x1af332[0xc] = _0x56385a['tx'], _0x1af332[0xd] = _0x56385a['ty'], _0x1af332[0xe] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0xe], _0x1af332[0xf] = _0x287916['EMPTYMAT4_' + 'ARRAY'][0xf], _0x5974c0;
            }, _0x287916['restoreTem' + 'pArray'] = function () {
                _0x287916['TEMPMAT4_A' + 'RRAY'][0x0] = 0x1, _0x287916['TEMPMAT4_A' + 'RRAY'][0x1] = 0x0, _0x287916['TEMPMAT4_A' + 'RRAY'][0x4] = 0x0, _0x287916['TEMPMAT4_A' + 'RRAY'][0x5] = 0x1, _0x287916['TEMPMAT4_A' + 'RRAY'][0xc] = 0x0, _0x287916['TEMPMAT4_A' + 'RRAY'][0xd] = 0x0;
            }, _0x287916['clear'] = function () {
                _0x287916['worldSciss' + 'orTest'] = ![], _0x287916['worldAlpha'] = 0x1;
            }, _0x287916['_MAXSIZE'] = 0x5f5e0ff, _0x287916['EMPTYMAT4_' + 'ARRAY'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1
            ], _0x287916['TEMPMAT4_A' + 'RRAY'] = [
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1,
                0x0,
                0x0,
                0x0,
                0x0,
                0x1
            ], _0x287916['worldMatri' + 'x4'] = _0x287916['TEMPMAT4_A' + 'RRAY'], _0x287916['matWVP'] = null, _0x287916['worldAlpha'] = 0x1, _0x287916['worldSciss' + 'orTest'] = ![], _0x287916['worldShade' + 'rDefines'] = null, _0x287916['worldFilte' + 'rs'] = null, _0x287916['width'] = 0x0, _0x287916['height'] = 0x0, _0x3a2911(_0x287916, [
                'worldMatri' + 'x',
                function () {
                    return this['worldMatri' + 'x'] = new _0x4fb671();
                }
            ]), _0x287916;
        }(), _0x489080 = function () {
            function _0xb66ba0() {
                this['_renderTyp' + 'e'] = 0x0, this['_repaint'] = 0x0, this['_x'] = NaN, this['_y'] = NaN;
            }
            _0x199b5b(_0xb66ba0, 'laya.layag' + 'l.QuickTes' + 'tTool');
            var _0x5e66a8 = _0xb66ba0['prototype'];
            return _0x5e66a8['render'] = function (_0x2c0f5c, _0x208bfe, _0x4a3025) {
                _0x29f3e7['spriteCoun' + 't']++, _0xb66ba0['_addType'](this['_renderTyp' + 'e']), _0xb66ba0['showRender' + 'TypeInfo'](this['_renderTyp' + 'e']), _0x121f50['renders'][this['_renderTyp' + 'e']]['_fun'](this, _0x2c0f5c, _0x208bfe + this['_x'], _0x4a3025 + this['_y']), this['_repaint'] = 0x0;
            }, _0x5e66a8['_stageRend' + 'er'] = function (_0x33f364, _0x4ea2d1, _0x20e696) {
                _0xb66ba0['_countStar' + 't'](), _0xb66ba0['_PreStageR' + 'ender']['call'](_0x4a6519['stage'], _0x33f364, _0x4ea2d1, _0x20e696), _0xb66ba0['_countEnd']();
            }, _0xb66ba0['getMCDName'] = function (_0x37f535) {
                return _0xb66ba0['_typeToNam' + 'eDic'][_0x37f535];
            }, _0xb66ba0['showRender' + 'TypeInfo'] = function (_0x531182, _0x104b81) {
                _0x104b81 === void 0x0 && (_0x104b81 = ![]);
                if (!_0x104b81 && _0xb66ba0['showedDic'][_0x531182])
                    return;
                _0xb66ba0['showedDic'][_0x531182] = !![];
                if (!_0xb66ba0['_rendertyp' + 'eToStrDic'][_0x531182]) {
                    var _0x1d7a35 = [], _0x5ddb66 = 0x0;
                    _0x5ddb66 = 0x1;
                    while (_0x5ddb66 <= _0x531182) {
                        _0x5ddb66 & _0x531182 && _0x1d7a35['push'](_0xb66ba0['getMCDName'](_0x5ddb66 & _0x531182)), _0x5ddb66 = _0x5ddb66 << 0x1;
                    }
                    _0xb66ba0['_rendertyp' + 'eToStrDic'][_0x531182] = _0x1d7a35['join'](',');
                }
                console['log']('cmd:', _0xb66ba0['_rendertyp' + 'eToStrDic'][_0x531182]);
            }, _0xb66ba0['__init__'] = function () {
                _0xb66ba0['_typeToNam' + 'eDic'][0x1] = 'ALPHA', _0xb66ba0['_typeToNam' + 'eDic'][0x2] = 'TRANSFORM', _0xb66ba0['_typeToNam' + 'eDic'][0x100] = 'TEXTURE', _0xb66ba0['_typeToNam' + 'eDic'][0x200] = 'GRAPHICS', _0xb66ba0['_typeToNam' + 'eDic'][0x1000] = 'ONECHILD', _0xb66ba0['_typeToNam' + 'eDic'][0x2000] = 'CHILDS', _0xb66ba0['_typeToNam' + 'eDic'][0x2 | 0x1] = 'TRANSFORM|' + 'ALPHA', _0xb66ba0['_typeToNam' + 'eDic'][0x8] = 'CANVAS', _0xb66ba0['_typeToNam' + 'eDic'][0x4] = 'BLEND', _0xb66ba0['_typeToNam' + 'eDic'][0x10] = 'FILTERS', _0xb66ba0['_typeToNam' + 'eDic'][0x20] = 'MASK', _0xb66ba0['_typeToNam' + 'eDic'][0x40] = 'CLIP', _0xb66ba0['_typeToNam' + 'eDic'][0x400] = 'LAYAGL3D';
            }, _0xb66ba0['_countStar' + 't'] = function () {
                var _0x4de45c;
                for (_0x4de45c in _0xb66ba0['_countDic']) {
                    _0xb66ba0['_countDic'][_0x4de45c] = 0x0;
                }
            }, _0xb66ba0['_countEnd'] = function () {
                _0xb66ba0['_i']++, _0xb66ba0['_i'] > 0x3c && (_0xb66ba0['showCountI' + 'nfo'](), _0xb66ba0['_i'] = 0x0);
            }, _0xb66ba0['_addType'] = function (_0x436e13) {
                !_0xb66ba0['_countDic'][_0x436e13] ? _0xb66ba0['_countDic'][_0x436e13] = 0x1 : _0xb66ba0['_countDic'][_0x436e13] += 0x1;
            }, _0xb66ba0['showCountI' + 'nfo'] = function () {
                console['log']('==========' + '=========');
                var _0x537513;
                for (_0x537513 in _0xb66ba0['_countDic']) {
                    console['log']('count:' + _0xb66ba0['_countDic'][_0x537513]), _0xb66ba0['showRender' + 'TypeInfo'](_0x537513, !![]);
                }
            }, _0xb66ba0['enableQuic' + 'kTest'] = function () {
                _0xb66ba0['__init__'](), _0x854b9a['prototype']['render'] = _0xb66ba0['prototype']['render'], _0xb66ba0['_PreStageR' + 'ender'] = _0x31e060['prototype']['render'], _0x31e060['prototype']['render'] = _0xb66ba0['prototype']['_stageRend' + 'er'];
            }, _0xb66ba0['showedDic'] = {}, _0xb66ba0['_rendertyp' + 'eToStrDic'] = {}, _0xb66ba0['_typeToNam' + 'eDic'] = {}, _0xb66ba0['_PreStageR' + 'ender'] = null, _0xb66ba0['_countDic'] = {}, _0xb66ba0['_i'] = 0x0, _0xb66ba0;
        }(), _0x2e7190 = function () {
            function _0xccc2c3() {
                this['blendShade' + 'r'] = 0x0, this['submitType'] = 0x0, this['other'] = 0x0, this['clear']();
            }
            _0x199b5b(_0xccc2c3, 'laya.webgl' + '.submit.Su' + 'bmitKey');
            var _0x24e8d6 = _0xccc2c3['prototype'];
            return _0x24e8d6['clear'] = function () {
                this['submitType'] = -0x1, this['blendShade' + 'r'] = this['other'] = 0x0;
            }, _0x24e8d6['copyFrom'] = function (_0x31723c) {
                this['other'] = _0x31723c['other'], this['blendShade' + 'r'] = _0x31723c['blendShade' + 'r'], this['submitType'] = _0x31723c['submitType'];
            }, _0x24e8d6['copyFrom2'] = function (_0x3a3471, _0x49bd53, _0x3fea71) {
                this['other'] = _0x3fea71, this['submitType'] = _0x49bd53;
            }, _0x24e8d6['equal3_2'] = function (_0x59ef8b, _0x40cac9, _0x23b247) {
                return this['submitType'] === _0x40cac9 && this['other'] === _0x23b247 && this['blendShade' + 'r'] === _0x59ef8b['blendShade' + 'r'];
            }, _0x24e8d6['equal4_2'] = function (_0x437374, _0x513ea0, _0x309fbb) {
                return this['submitType'] === _0x513ea0 && this['other'] === _0x309fbb && this['blendShade' + 'r'] === _0x437374['blendShade' + 'r'];
            }, _0x24e8d6['equal_3'] = function (_0x177fb0) {
                return this['submitType'] === _0x177fb0['submitType'] && this['blendShade' + 'r'] === _0x177fb0['blendShade' + 'r'];
            }, _0x24e8d6['equal'] = function (_0x5c5d79) {
                return this['other'] === _0x5c5d79['other'] && this['submitType'] === _0x5c5d79['submitType'] && this['blendShade' + 'r'] === _0x5c5d79['blendShade' + 'r'];
            }, _0xccc2c3;
        }(), _0x3c3538 = function () {
            function _0x27c8a9() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_text'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_font'] = null, this['_color'] = null, this['_strokeCol' + 'or'] = null, this['_strokeWid' + 'th'] = 0x0, this['_textAlign'] = null, this['_draw_text' + 'ure_cmd_en' + 'coder_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x40, 0x20, !![]);
            }
            _0x199b5b(_0x27c8a9, 'laya.layag' + 'l.cmdNativ' + 'e.FillBord' + 'erTextCmdN' + 'ative');
            var _0x48bef5 = _0x27c8a9['prototype'];
            return _0x48bef5['createFill' + 'BorderText'] = function (_0x261587, _0x8b3bc2, _0x5e5947, _0x1b18ed, _0x2d8a60, _0x53bff0, _0x1ab28f, _0x3e3068, _0x3c21c9) {
                var _0x47ea8c = _0x4b1f30['create'](_0x53bff0), _0x2838b2 = _0x47ea8c['numColor'], _0x57662b = {};
                _0x57662b['_curMat'] = new _0x4fb671(), _0x57662b['_italicDeg'] = 0x0, _0x57662b['_drawTextu' + 'reUseColor'] = 0xffffffff, _0x57662b['fillStyle'] = _0x53bff0, _0x57662b['_fillColor'] = 0xffffffff, _0x57662b['setFillCol' + 'or'] = function (_0x18c7a4) {
                    _0x57662b['_fillColor'] = _0x18c7a4;
                }, _0x57662b['getFillCol' + 'or'] = function () {
                    return _0x57662b['_fillColor'];
                }, _0x57662b['mixRGBandA' + 'lpha'] = function (_0x418b57) {
                    return _0x418b57;
                }, _0x57662b['_drawTextu' + 'reM'] = function (_0x36d860, _0x4798af, _0x2fddce, _0x7bd753, _0x39a20a, _0x1fb005, _0x3f2f88, _0x34f2b3) {
                    _0x261587['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x261587['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x261587['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x261587['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x261587['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x261587['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x261587['uniformTex' + 'ture'](0x3, 0x84c0, _0x36d860['bitmap']['_glTexture']);
                    var _0x28feeb = new Float32Array([
                            _0x4798af,
                            _0x2fddce,
                            _0x34f2b3[0x0],
                            _0x34f2b3[0x1],
                            0x0,
                            0x0,
                            _0x4798af + _0x7bd753,
                            _0x2fddce,
                            _0x34f2b3[0x2],
                            _0x34f2b3[0x3],
                            0x0,
                            0x0,
                            _0x4798af + _0x7bd753,
                            _0x2fddce + _0x39a20a,
                            _0x34f2b3[0x4],
                            _0x34f2b3[0x5],
                            0x0,
                            0x0,
                            _0x4798af,
                            _0x2fddce + _0x39a20a,
                            _0x34f2b3[0x6],
                            _0x34f2b3[0x7],
                            0x0,
                            0x0
                        ]), _0x3d5ac2 = new Int32Array(_0x28feeb['buffer']);
                    _0x3d5ac2[0x4] = _0x3d5ac2[0xa] = _0x3d5ac2[0x10] = _0x3d5ac2[0x16] = 0xffffffff, _0x3d5ac2[0x5] = _0x3d5ac2[0xb] = _0x3d5ac2[0x11] = _0x3d5ac2[0x17] = 0xffffffff, _0x261587['setRectMes' + 'h'](0x1, _0x28feeb, _0x28feeb['length']), _0x261587['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x261587['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x261587);
                }, _0x27c8a9['cbook']['filltext_n' + 'ative'](_0x57662b, _0x8b3bc2, null, _0x5e5947, _0x1b18ed, _0x2d8a60, _0x53bff0, _0x1ab28f, _0x3e3068, _0x3c21c9);
            }, _0x48bef5['recover'] = function () {
                this['_graphicsC' + 'mdEncoder'] = null, _0x5460aa['recover']('FillBorder' + 'TextCmd', this);
            }, _0x3a2bd3(0x0, _0x48bef5, 'text', function () {
                return this['_text'];
            }, function (_0x1ddcf7) {
                var _0x592ee6 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x592ee6['clearEncod' + 'ing'](), this['_text'] = _0x1ddcf7, this['createFill' + 'BorderText'](_0x592ee6, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x592ee6);
            }), _0x3a2bd3(0x0, _0x48bef5, 'cmdID', function () {
                return 'FillBorder' + 'Text';
            }), _0x3a2bd3(0x0, _0x48bef5, 'font', function () {
                return this['_font'];
            }, function (_0x43acfb) {
                var _0xb6ab1a = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0xb6ab1a['clearEncod' + 'ing'](), this['_font'] = _0x43acfb, this['createFill' + 'BorderText'](_0xb6ab1a, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xb6ab1a);
            }), _0x3a2bd3(0x0, _0x48bef5, 'color', function () {
                return this['_color'];
            }, function (_0x481183) {
                var _0x40fd2b = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x40fd2b['clearEncod' + 'ing'](), this['_color'] = _0x481183, this['createFill' + 'BorderText'](_0x40fd2b, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x40fd2b);
            }), _0x3a2bd3(0x0, _0x48bef5, 'textAlign', function () {
                return this['_textAlign'];
            }, function (_0x1169c5) {
                var _0x16c683 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x16c683['clearEncod' + 'ing'](), this['_textAlign'] = _0x1169c5, this['createFill' + 'BorderText'](_0x16c683, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x16c683);
            }), _0x3a2bd3(0x0, _0x48bef5, 'x', function () {
                return this['_x'];
            }, function (_0x2f62a7) {
                var _0x24c106 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x24c106['clearEncod' + 'ing'](), this['_x'] = _0x2f62a7, this['createFill' + 'BorderText'](_0x24c106, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x24c106);
            }), _0x3a2bd3(0x0, _0x48bef5, 'y', function () {
                return this['_y'];
            }, function (_0x17d71c) {
                var _0x4d6c81 = this['_draw_text' + 'ure_cmd_en' + 'coder_'];
                _0x4d6c81['clearEncod' + 'ing'](), this['_y'] = _0x17d71c, this['createFill' + 'BorderText'](_0x4d6c81, this['_text'], this['_x'], this['_y'], this['_font'], this['_color'], this['_strokeCol' + 'or'], this['_strokeWid' + 'th'], this['_textAlign']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x4d6c81);
            }), _0x27c8a9['create'] = function (_0x243a48, _0x4eda0e, _0x590b9f, _0x288167, _0x513ba1, _0x5505e0, _0x3d7e1b, _0x55a6cc) {
                if (!_0x27c8a9['cbook'])
                    new Error('Error:char' + 'book\x20not\x20c' + 'reate!');
                var _0x28d92f = _0x5460aa['getItemByC' + 'lass']('FillBorder' + 'TextCmd', _0x27c8a9), _0x519336 = _0x28d92f['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                return _0x28d92f['_text'] = _0x243a48, _0x28d92f['_x'] = _0x4eda0e, _0x28d92f['_y'] = _0x590b9f, _0x28d92f['_font'] = _0x288167, _0x28d92f['_color'] = _0x513ba1, _0x28d92f['_strokeCol' + 'or'] = _0x5505e0, _0x28d92f['_strokeWid' + 'th'] = _0x3d7e1b, _0x28d92f['_textAlign'] = _0x55a6cc, _0x28d92f['_draw_text' + 'ure_cmd_en' + 'coder_']['clearEncod' + 'ing'](), _0x28d92f['createFill' + 'BorderText'](_0x28d92f['_draw_text' + 'ure_cmd_en' + 'coder_'], _0x243a48, _0x4eda0e, _0x590b9f, _0x288167, _0x513ba1, _0x5505e0, _0x3d7e1b, _0x55a6cc), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x28d92f['_draw_text' + 'ure_cmd_en' + 'coder_']), _0x519336['useCommand' + 'Encoder'](_0x28d92f['_draw_text' + 'ure_cmd_en' + 'coder_']['getPtrID'](), -0x1, -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x519336), _0x28d92f;
            }, _0x27c8a9['ID'] = 'FillBorder' + 'Text', _0x3a2911(_0x27c8a9, [
                'cbook',
                function () {
                    return this['cbook'] = _0x4a6519['textRender'];
                }
            ]), _0x27c8a9;
        }(), _0x143391 = function () {
            function _0x1450f8() {
            }
            return _0x199b5b(_0x1450f8, 'laya.layag' + 'l.ConchPro' + 'pertyAdpt'), _0x1450f8['rewritePro' + 'perties'] = function () {
                laya['layagl']['ConchPrope' + 'rtyAdpt']['rewriteNum' + 'Property'](_0x4759e4['prototype'], 'x'), laya['layagl']['ConchPrope' + 'rtyAdpt']['rewriteNum' + 'Property'](_0x4759e4['prototype'], 'y'), laya['layagl']['ConchPrope' + 'rtyAdpt']['rewriteNum' + 'Property'](_0x4759e4['prototype'], 'width'), laya['layagl']['ConchPrope' + 'rtyAdpt']['rewriteNum' + 'Property'](_0x4759e4['prototype'], 'height'), laya['layagl']['ConchPrope' + 'rtyAdpt']['rewriteFun' + 'c'](_0x4759e4['prototype'], 'recover');
            }, _0x1450f8['rewriteNum' + 'Property'] = function (_0x172855, _0x16e73a) {
                Object['defineProp' + 'erty'](_0x172855, _0x16e73a, {
                    'get': function () {
                        return this['_' + _0x16e73a] || 0x0;
                    },
                    'set': function (_0x1e4f1d) {
                        this['_' + _0x16e73a] = _0x1e4f1d, this['onProperty' + 'Changed'] && this['onProperty' + 'Changed'](this);
                    }
                });
            }, _0x1450f8['rewriteFun' + 'c'] = function (_0x5d6c87, _0x201649) {
                _0x5d6c87['__' + _0x201649] = _0x5d6c87[_0x201649], _0x5d6c87[_0x201649] = function () {
                    _0x5d6c87['__' + _0x201649]['call'](this);
                    if (this['onProperty' + 'Changed'])
                        this['onProperty' + 'Changed'] = null;
                };
            }, _0x1450f8;
        }(), _0x384aa8 = function () {
            function _0x5e5a01(_0x30d437, _0x57e4a9, _0x105080, _0x6f91fd, _0x41149f, _0x1c11ae, _0x21e85a) {
                _0x30d437 === void 0x0 && (_0x30d437 = 0x1), _0x57e4a9 === void 0x0 && (_0x57e4a9 = 0x0), _0x105080 === void 0x0 && (_0x105080 = 0x0), _0x6f91fd === void 0x0 && (_0x6f91fd = 0x1), _0x41149f === void 0x0 && (_0x41149f = 0x0), _0x1c11ae === void 0x0 && (_0x1c11ae = 0x0), this['_nums'] = _0x21e85a = _0x21e85a ? _0x21e85a : new Float32Array(0x6), _0x21e85a[0x0] = _0x30d437, _0x21e85a[0x1] = _0x57e4a9, _0x21e85a[0x2] = _0x105080, _0x21e85a[0x3] = _0x6f91fd, _0x21e85a[0x4] = _0x41149f, _0x21e85a[0x5] = _0x1c11ae, this['_checkTran' + 'sform']();
            }
            _0x199b5b(_0x5e5a01, 'laya.layag' + 'l.MatrixCo' + 'nch');
            var _0x4c6f3a = _0x5e5a01['prototype'];
            return _0x4c6f3a['identity'] = function () {
                var _0x38ed38 = this['_nums'];
                return _0x38ed38[0x0] = _0x38ed38[0x3] = 0x1, _0x38ed38[0x1] = _0x38ed38[0x4] = _0x38ed38[0x5] = _0x38ed38[0x2] = 0x0, this['_bTransfor' + 'm'] = ![], this;
            }, _0x4c6f3a['_checkTran' + 'sform'] = function () {
                var _0x136a23 = this['_nums'];
                return this['_bTransfor' + 'm'] = _0x136a23[0x0] !== 0x1 || _0x136a23[0x1] !== 0x0 || _0x136a23[0x2] !== 0x0 || _0x136a23[0x3] !== 0x1;
            }, _0x4c6f3a['setTransla' + 'te'] = function (_0x461953, _0x41018b) {
                return this['_nums'][0x4] = _0x461953, this['_nums'][0x5] = _0x41018b, this;
            }, _0x4c6f3a['translate'] = function (_0x47b84e, _0x1c2e3b) {
                return this['_nums'][0x4] += _0x47b84e, this['_nums'][0x5] += _0x1c2e3b, this;
            }, _0x4c6f3a['scale'] = function (_0x4405a6, _0x5734fc) {
                var _0x2949b6 = this['_nums'];
                return _0x2949b6[0x0] *= _0x4405a6, _0x2949b6[0x3] *= _0x5734fc, _0x2949b6[0x2] *= _0x4405a6, _0x2949b6[0x1] *= _0x5734fc, _0x2949b6[0x4] *= _0x4405a6, _0x2949b6[0x5] *= _0x5734fc, this['_bTransfor' + 'm'] = !![], this;
            }, _0x4c6f3a['rotate'] = function (_0x5eb547) {
                var _0x3f0819 = this['_nums'], _0x141b7e = Math['cos'](_0x5eb547), _0x22f4f4 = Math['sin'](_0x5eb547), _0x4b102d = _0x3f0819[0x0], _0x32385f = _0x3f0819[0x2], _0x443eae = _0x3f0819[0x4];
                return _0x3f0819[0x0] = _0x4b102d * _0x141b7e - _0x3f0819[0x1] * _0x22f4f4, _0x3f0819[0x1] = _0x4b102d * _0x22f4f4 + _0x3f0819[0x1] * _0x141b7e, _0x3f0819[0x2] = _0x32385f * _0x141b7e - _0x3f0819[0x3] * _0x22f4f4, _0x3f0819[0x3] = _0x32385f * _0x22f4f4 + _0x3f0819[0x3] * _0x141b7e, _0x3f0819[0x4] = _0x443eae * _0x141b7e - _0x3f0819[0x5] * _0x22f4f4, _0x3f0819[0x5] = _0x443eae * _0x22f4f4 + _0x3f0819[0x5] * _0x141b7e, this['_bTransfor' + 'm'] = !![], this;
            }, _0x4c6f3a['skew'] = function (_0x561fc9, _0x1175d8) {
                var _0x482682 = this['_nums'], _0x5cf97e = Math['tan'](_0x561fc9), _0x2f2827 = Math['tan'](_0x1175d8), _0x4660e0 = _0x482682[0x0], _0x3f8f9e = _0x482682[0x1];
                return _0x482682[0x0] += _0x2f2827 * _0x482682[0x2], _0x482682[0x1] += _0x2f2827 * _0x482682[0x3], _0x482682[0x2] += _0x5cf97e * _0x4660e0, _0x482682[0x3] += _0x5cf97e * _0x3f8f9e, this;
            }, _0x4c6f3a['invertTran' + 'sformPoint'] = function (_0x1807b8) {
                var _0x412b0d = this['_nums'], _0x5bc900 = _0x412b0d[0x0], _0x263b9b = _0x412b0d[0x1], _0x791e24 = _0x412b0d[0x2], _0x11abd5 = _0x412b0d[0x3], _0xcd8b5a = _0x412b0d[0x4], _0x1d5f72 = _0x5bc900 * _0x11abd5 - _0x263b9b * _0x791e24, _0x3f64ed = _0x11abd5 / _0x1d5f72, _0x59e97c = -_0x263b9b / _0x1d5f72, _0x2f476f = -_0x791e24 / _0x1d5f72, _0x3282c9 = _0x5bc900 / _0x1d5f72, _0x487c83 = (_0x791e24 * _0x412b0d[0x5] - _0x11abd5 * _0xcd8b5a) / _0x1d5f72, _0x50e8d5 = -(_0x5bc900 * _0x412b0d[0x5] - _0x263b9b * _0xcd8b5a) / _0x1d5f72;
                return _0x1807b8['setTo'](_0x3f64ed * _0x1807b8['x'] + _0x2f476f * _0x1807b8['y'] + _0x487c83, _0x59e97c * _0x1807b8['x'] + _0x3282c9 * _0x1807b8['y'] + _0x50e8d5);
            }, _0x4c6f3a['transformP' + 'oint'] = function (_0x16725a) {
                var _0x17db46 = this['_nums'];
                return _0x16725a['setTo'](_0x17db46[0x0] * _0x16725a['x'] + _0x17db46[0x2] * _0x16725a['y'] + _0x17db46[0x4], _0x17db46[0x1] * _0x16725a['x'] + _0x17db46[0x3] * _0x16725a['y'] + _0x17db46[0x5]);
            }, _0x4c6f3a['transformP' + 'ointN'] = function (_0x5e73e8) {
                var _0x510c87 = this['_nums'];
                return _0x5e73e8['setTo'](_0x510c87[0x0] * _0x5e73e8['x'] + _0x510c87[0x2] * _0x5e73e8['y'], _0x510c87[0x1] * _0x5e73e8['x'] + _0x510c87[0x3] * _0x5e73e8['y']);
            }, _0x4c6f3a['getScaleX'] = function () {
                var _0x1e488f = this['_nums'];
                return _0x1e488f[0x1] === 0x0 ? this['a'] : Math['sqrt'](_0x1e488f[0x0] * _0x1e488f[0x0] + _0x1e488f[0x1] * _0x1e488f[0x1]);
            }, _0x4c6f3a['getScaleY'] = function () {
                var _0x2284ce = this['_nums'];
                return _0x2284ce[0x2] === 0x0 ? _0x2284ce[0x3] : Math['sqrt'](_0x2284ce[0x2] * _0x2284ce[0x2] + _0x2284ce[0x3] * _0x2284ce[0x3]);
            }, _0x4c6f3a['invert'] = function () {
                var _0x421611 = this['_nums'], _0x5af35a = _0x421611[0x0], _0x11f901 = _0x421611[0x1], _0x6ad80c = _0x421611[0x2], _0x2e61c0 = _0x421611[0x3], _0x13c76e = _0x421611[0x4], _0x2b5ecd = _0x5af35a * _0x2e61c0 - _0x11f901 * _0x6ad80c;
                return _0x421611[0x0] = _0x2e61c0 / _0x2b5ecd, _0x421611[0x1] = -_0x11f901 / _0x2b5ecd, _0x421611[0x2] = -_0x6ad80c / _0x2b5ecd, _0x421611[0x3] = _0x5af35a / _0x2b5ecd, _0x421611[0x4] = (_0x6ad80c * this['ty'] - _0x2e61c0 * _0x13c76e) / _0x2b5ecd, _0x421611[0x5] = -(_0x5af35a * this['ty'] - _0x11f901 * _0x13c76e) / _0x2b5ecd, this;
            }, _0x4c6f3a['setTo'] = function (_0x51d40b, _0x289882, _0x3bb8bc, _0x3f1eb2, _0x3c05f5, _0x2a919b) {
                var _0x211288 = this['_nums'];
                return _0x211288[0x0] = _0x51d40b, _0x211288[0x1] = _0x289882, _0x211288[0x2] = _0x3bb8bc, _0x211288[0x3] = _0x3f1eb2, _0x211288[0x4] = _0x3c05f5, _0x211288[0x5] = _0x2a919b, this;
            }, _0x4c6f3a['concat'] = function (_0x4b22fc) {
                var _0x9f75ca = this['_nums'], _0x356a91 = _0x4b22fc['_nums'], _0x1ac7e0 = _0x9f75ca[0x0], _0x485d41 = _0x9f75ca[0x2], _0x3c9c20 = _0x9f75ca[0x4];
                return _0x9f75ca[0x0] = _0x1ac7e0 * _0x356a91[0x0] + _0x9f75ca[0x1] * _0x356a91[0x2], _0x9f75ca[0x1] = _0x1ac7e0 * _0x356a91[0x1] + _0x9f75ca[0x1] * _0x356a91[0x3], _0x9f75ca[0x2] = _0x485d41 * _0x356a91[0x0] + _0x9f75ca[0x3] * _0x356a91[0x2], _0x9f75ca[0x3] = _0x485d41 * _0x356a91[0x1] + _0x9f75ca[0x3] * _0x356a91[0x3], _0x9f75ca[0x4] = _0x3c9c20 * _0x356a91[0x0] + _0x9f75ca[0x5] * _0x356a91[0x2] + _0x356a91[0x4], _0x9f75ca[0x5] = _0x3c9c20 * _0x356a91[0x1] + _0x9f75ca[0x5] * _0x356a91[0x3] + _0x356a91[0x5], this;
            }, _0x4c6f3a['scaleEx'] = function (_0x194585, _0x27bc48) {
                var _0x2e17b9 = this['_nums'], _0xde1768 = _0x2e17b9[0x0], _0x4ce048 = _0x2e17b9[0x1], _0x3fb25e = _0x2e17b9[0x2], _0x431398 = _0x2e17b9[0x3];
                _0x4ce048 !== 0x0 || _0x3fb25e !== 0x0 ? (_0x2e17b9[0x0] = _0x194585 * _0xde1768, _0x2e17b9[0x1] = _0x194585 * _0x4ce048, _0x2e17b9[0x2] = _0x27bc48 * _0x3fb25e, _0x2e17b9[0x3] = _0x27bc48 * _0x431398) : (_0x2e17b9[0x0] = _0x194585 * _0xde1768, _0x2e17b9[0x1] = 0x0 * _0x431398, _0x2e17b9[0x2] = 0x0 * _0xde1768, _0x2e17b9[0x3] = _0x27bc48 * _0x431398), this['_bTransfor' + 'm'] = !![];
            }, _0x4c6f3a['rotateEx'] = function (_0x45be9b) {
                var _0x47d134 = this['_nums'], _0x300440 = Math['cos'](_0x45be9b), _0x4b70cf = Math['sin'](_0x45be9b), _0xa5ac75 = _0x47d134[0x0], _0x113f5f = _0x47d134[0x1], _0x54186b = _0x47d134[0x2], _0x12f441 = _0x47d134[0x3];
                _0x113f5f !== 0x0 || _0x54186b !== 0x0 ? (_0x47d134[0x0] = _0x300440 * _0xa5ac75 + _0x4b70cf * _0x54186b, _0x47d134[0x1] = _0x300440 * _0x113f5f + _0x4b70cf * _0x12f441, _0x47d134[0x2] = -_0x4b70cf * _0xa5ac75 + _0x300440 * _0x54186b, _0x47d134[0x3] = -_0x4b70cf * _0x113f5f + _0x300440 * _0x12f441) : (_0x47d134[0x0] = _0x300440 * _0xa5ac75, _0x47d134[0x1] = _0x4b70cf * _0x12f441, _0x47d134[0x2] = -_0x4b70cf * _0xa5ac75, _0x47d134[0x3] = _0x300440 * _0x12f441), this['_bTransfor' + 'm'] = !![];
            }, _0x4c6f3a['clone'] = function () {
                var _0xf8e164 = this['_nums'], _0x3d188c = _0x5e5a01['create'](), _0x39a2ec = _0x3d188c['_nums'];
                return _0x39a2ec[0x0] = _0xf8e164[0x0], _0x39a2ec[0x1] = _0xf8e164[0x1], _0x39a2ec[0x2] = _0xf8e164[0x2], _0x39a2ec[0x3] = _0xf8e164[0x3], _0x39a2ec[0x4] = _0xf8e164[0x4], _0x39a2ec[0x5] = _0xf8e164[0x5], _0x3d188c['_bTransfor' + 'm'] = this['_bTransfor' + 'm'], _0x3d188c;
            }, _0x4c6f3a['copyTo'] = function (_0x455280) {
                var _0x5cf74a = this['_nums'], _0x1e9367 = _0x455280['_nums'];
                return _0x1e9367[0x0] = _0x5cf74a[0x0], _0x1e9367[0x1] = _0x5cf74a[0x1], _0x1e9367[0x2] = _0x5cf74a[0x2], _0x1e9367[0x3] = _0x5cf74a[0x3], _0x1e9367[0x4] = _0x5cf74a[0x4], _0x1e9367[0x5] = _0x5cf74a[0x5], _0x455280['_bTransfor' + 'm'] = this['_bTransfor' + 'm'], _0x455280;
            }, _0x4c6f3a['toString'] = function () {
                return this['a'] + ',' + this['b'] + ',' + this['c'] + ',' + this['d'] + ',' + this['tx'] + ',' + this['ty'];
            }, _0x4c6f3a['destroy'] = function () {
                this['recover']();
            }, _0x4c6f3a['recover'] = function () {
                _0x5e5a01['_pool']['push'](this);
            }, _0x3a2bd3(0x0, _0x4c6f3a, 'a', function () {
                return this['_nums'][0x0];
            }, function (_0x1e0a50) {
                this['_nums'][0x0] = _0x1e0a50;
            }), _0x3a2bd3(0x0, _0x4c6f3a, 'b', function () {
                return this['_nums'][0x1];
            }, function (_0x33d7c0) {
                this['_nums'][0x1] = _0x33d7c0;
            }), _0x3a2bd3(0x0, _0x4c6f3a, 'c', function () {
                return this['_nums'][0x2];
            }, function (_0x5bf08e) {
                this['_nums'][0x2] = _0x5bf08e;
            }), _0x3a2bd3(0x0, _0x4c6f3a, 'd', function () {
                return this['_nums'][0x3];
            }, function (_0x43fad2) {
                this['_nums'][0x3] = _0x43fad2;
            }), _0x3a2bd3(0x0, _0x4c6f3a, 'tx', function () {
                return this['_nums'][0x4];
            }, function (_0x2b24a8) {
                this['_nums'][0x4] = _0x2b24a8;
            }), _0x3a2bd3(0x0, _0x4c6f3a, 'ty', function () {
                return this['_nums'][0x5];
            }, function (_0x470171) {
                this['_nums'][0x5] = _0x470171;
            }), _0x5e5a01['mul'] = function (_0x446c31, _0x45f0eb, _0x232c68) {
                var _0x1d612a = _0x446c31['_nums'], _0x2d4800 = _0x45f0eb['_nums'], _0x41af43 = _0x232c68['_nums'], _0x5d08be = _0x1d612a[0x0], _0x5d9935 = _0x1d612a[0x1], _0x419582 = _0x1d612a[0x2], _0xc39185 = _0x1d612a[0x3], _0x3a5f54 = _0x1d612a[0x4], _0xae727c = _0x1d612a[0x5], _0x1db8a9 = _0x2d4800[0x0], _0x56bbd9 = _0x2d4800[0x1], _0x153756 = _0x2d4800[0x2], _0x474eb9 = _0x2d4800[0x3], _0xa83a7 = _0x2d4800[0x4], _0x51d5e8 = _0x2d4800[0x5];
                return _0x56bbd9 !== 0x0 || _0x153756 !== 0x0 ? (_0x41af43[0x0] = _0x5d08be * _0x1db8a9 + _0x5d9935 * _0x153756, _0x41af43[0x1] = _0x5d08be * _0x56bbd9 + _0x5d9935 * _0x474eb9, _0x41af43[0x2] = _0x419582 * _0x1db8a9 + _0xc39185 * _0x153756, _0x41af43[0x3] = _0x419582 * _0x56bbd9 + _0xc39185 * _0x474eb9, _0x41af43[0x4] = _0x1db8a9 * _0x3a5f54 + _0x153756 * _0xae727c + _0xa83a7, _0x41af43[0x5] = _0x56bbd9 * _0x3a5f54 + _0x474eb9 * _0xae727c + _0x51d5e8) : (_0x41af43[0x0] = _0x5d08be * _0x1db8a9, _0x41af43[0x1] = _0x5d9935 * _0x474eb9, _0x41af43[0x2] = _0x419582 * _0x1db8a9, _0x41af43[0x3] = _0xc39185 * _0x474eb9, _0x41af43[0x4] = _0x1db8a9 * _0x3a5f54 + _0xa83a7, _0x41af43[0x5] = _0x474eb9 * _0xae727c + _0x51d5e8), _0x232c68;
            }, _0x5e5a01['mul16'] = function (_0x3469fc, _0xb526f4, _0x2b9b75) {
                var _0x1e4a6a = _0x3469fc['_nums'], _0x19d7cb = _0xb526f4['_nums'], _0xfc9d4 = _0x1e4a6a[0x0], _0x80874e = _0x1e4a6a[0x1], _0x4a1155 = _0x1e4a6a[0x2], _0x2e0fc0 = _0x1e4a6a[0x3], _0x1baca7 = _0x1e4a6a[0x4], _0x444df2 = _0x1e4a6a[0x5], _0x8e5da7 = _0x19d7cb[0x0], _0x448e45 = _0x19d7cb[0x1], _0x39cb9d = _0x19d7cb[0x2], _0x2cba98 = _0x19d7cb[0x3], _0x50c691 = _0x19d7cb[0x4], _0x123a52 = _0x19d7cb[0x5];
                return _0x448e45 !== 0x0 || _0x39cb9d !== 0x0 ? (_0x2b9b75[0x0] = _0xfc9d4 * _0x8e5da7 + _0x80874e * _0x39cb9d, _0x2b9b75[0x1] = _0xfc9d4 * _0x448e45 + _0x80874e * _0x2cba98, _0x2b9b75[0x4] = _0x4a1155 * _0x8e5da7 + _0x2e0fc0 * _0x39cb9d, _0x2b9b75[0x5] = _0x4a1155 * _0x448e45 + _0x2e0fc0 * _0x2cba98, _0x2b9b75[0xc] = _0x8e5da7 * _0x1baca7 + _0x39cb9d * _0x444df2 + _0x50c691, _0x2b9b75[0xd] = _0x448e45 * _0x1baca7 + _0x2cba98 * _0x444df2 + _0x123a52) : (_0x2b9b75[0x0] = _0xfc9d4 * _0x8e5da7, _0x2b9b75[0x1] = _0x80874e * _0x2cba98, _0x2b9b75[0x4] = _0x4a1155 * _0x8e5da7, _0x2b9b75[0x5] = _0x2e0fc0 * _0x2cba98, _0x2b9b75[0xc] = _0x8e5da7 * _0x1baca7 + _0x50c691, _0x2b9b75[0xd] = _0x2cba98 * _0x444df2 + _0x123a52), _0x2b9b75;
            }, _0x5e5a01['create'] = function (_0x57db57) {
                var _0x46a630;
                if (_0x5e5a01['_pool']['length'])
                    return _0x46a630 = _0x5e5a01['_pool']['pop'](), _0x57db57 && (_0x46a630['_nums'] = _0x57db57), _0x46a630['identity'](), _0x46a630;
                else
                    return new _0x5e5a01(0x1, 0x0, 0x0, 0x1, 0x0, 0x0, _0x57db57);
            }, _0x5e5a01['A'] = 0x0, _0x5e5a01['B'] = 0x1, _0x5e5a01['C'] = 0x2, _0x5e5a01['D'] = 0x3, _0x5e5a01['TX'] = 0x4, _0x5e5a01['TY'] = 0x5, _0x5e5a01['EMPTY'] = new _0x5e5a01(), _0x5e5a01['TEMP'] = new _0x5e5a01(), _0x5e5a01['_pool'] = [], _0x5e5a01;
        }(), _0x2c67c3 = function () {
            function _0x1ce963(_0x2ef9af) {
                this['_par'] = null, this['_loaded'] = !![], this['bitmap'] = {}, this['bitmap']['id'] = _0x2ef9af['id'], this['_par'] = _0x2ef9af;
            }
            _0x199b5b(_0x1ce963, 'laya.webgl' + '.resource.' + 'CharIntern' + 'alTexture');
            var _0x35b180 = _0x1ce963['prototype'];
            return _0x35b180['_getSource'] = function () {
                return this['_par']['_source'];
            }, _0x1ce963;
        }(), _0xe4a59a = function () {
            function _0x151c58() {
            }
            return _0x199b5b(_0x151c58, 'laya.layag' + 'l.LayaNati' + 've2D'), _0x151c58['_init_simp' + 'le_texture' + '_cmdEncode' + 'r_'] = function () {
                _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xac, 0x20, !![]), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['useProgram' + 'Ex'](laya['layagl']['LayaNative' + '2D']['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['useVDO'](laya['layagl']['LayaNative' + '2D']['VDO_MESHQU' + 'ADTEXTURE']), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['uniformTex' + 'tureByPara' + 'mData'](0x0, 0x1 * 0x4, 0x2 * 0x4), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['setRectMes' + 'hByParamDa' + 'ta'](0x3 * 0x4, 0x5 * 0x4, 0x4 * 0x4), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']);
            }, _0x151c58['_init_simp' + 'le_rect_cm' + 'dEncoder_'] = function () {
                _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x88, 0x20, !![]), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['useProgram' + 'Ex'](laya['layagl']['LayaNative' + '2D']['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['useVDO'](laya['layagl']['LayaNative' + '2D']['VDO_MESHQU' + 'ADTEXTURE']), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['setRectMes' + 'hByParamDa' + 'ta'](0x0 * 0x4, 0x2 * 0x4, 0x1 * 0x4), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']);
            }, _0x151c58['_init_rect' + '_border_cm' + 'dEncoder_'] = function () {
                _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['useProgram' + 'Ex'](laya['layagl']['LayaNative' + '2D']['PROGRAMEX_' + 'DRAWVG']), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['useVDO'](laya['layagl']['LayaNative' + '2D']['VDO_MESHVG']), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['uniformEx'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['setMeshByP' + 'aramData'](0x5 * 0x4, 0x0 * 0x4, 0x1 * 0x4, 0x23 * 0x4, 0x2 * 0x4, 0x3 * 0x4, 0x4 * 0x4), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['modifyMesh'](laya['layagl']['LayaNative' + '2D']['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']);
            }, _0x151c58['__init__'] = function () {
                if (_0x30d89b['isConchApp']) {
                    var _0xd27a64 = _0x33edbf['instance'];
                    _0x151c58['GLOBALVALU' + 'E_MATRIX32'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x6, new Float32Array([
                        0x1,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1404, 0x1, new Uint32Array([0xffffffff])), _0x151c58['GLOBALVALU' + 'E_ITALICDE' + 'G'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x1, new Float32Array([0x0])), _0x151c58['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0xf4240,
                        0x0,
                        0x0,
                        0xf4240
                    ])), _0x151c58['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x2, new Float32Array([
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1404, 0x1, new Int32Array([0x1])), _0x151c58['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1404, 0x1, new Int32Array([0x303])), _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_COLOR'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x10, new Float32Array([
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x0,
                        0x0,
                        0x0,
                        0x1
                    ])), _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_ALPHA'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0x0,
                        0x0,
                        0x0,
                        0x1
                    ])), _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_STRENGT' + 'H'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_BLURINF' + 'O'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x2, new Float32Array([
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_COLOR'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O1'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ])), _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O2'] = _0xd27a64['addGlobalV' + 'alueDefine'](0x0, 0x1406, 0x4, new Float32Array([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ])), _0xd27a64['endGlobalV' + 'alueDefine'](), _0x151c58['PROGRAMEX_' + 'DRAWTEXTUR' + 'E'] = _0x33edbf['instance']['createProg' + 'ramEx']('/*\x0a\x09textur' + 'e和fillrect' + '使用的。\x0a*/\x0aat' + 'tribute\x20ve' + 'c4\x20posuv;\x0a' + 'attribute\x20' + 'vec4\x20attri' + 'bColor;\x0aat' + 'tribute\x20ve' + 'c4\x20attribF' + 'lags;\x0a//at' + 'tribute\x20ve' + 'c4\x20clipDir' + ';\x0a//attrib' + 'ute\x20vec2\x20c' + 'lipRect;\x0au' + 'niform\x20vec' + '4\x20clipMatD' + 'ir;\x0aunifor' + 'm\x20vec2\x20cli' + 'pMatPos;\x09\x09' + '//\x20这个是全局的，' + '不用再应用矩阵了。\x0a' + 'varying\x20ve' + 'c2\x20cliped;' + '\x0auniform\x20v' + 'ec2\x20size;\x0a' + '\x0a#ifdef\x20WO' + 'RLDMAT\x0a\x09un' + 'iform\x20mat4' + '\x20mmat;\x0a#en' + 'dif\x0aunifor' + 'm\x20mat4\x20u_M' + 'vpMatrix;\x0a' + '\x0avarying\x20v' + 'ec4\x20v_texc' + 'oordAlpha;' + '\x0avarying\x20v' + 'ec4\x20v_colo' + 'r;\x0avarying' + '\x20float\x20v_u' + 'seTex;\x0a\x0avo' + 'id\x20main()\x20' + '{\x0a\x0a\x09vec4\x20p' + 'os\x20=\x20vec4(' + 'posuv.xy,0' + '.,1.);\x0a#if' + 'def\x20WORLDM' + 'AT\x0a\x09pos=mm' + 'at*pos;\x0a#e' + 'ndif\x0a\x09vec4' + '\x20pos1\x20\x20=ve' + 'c4((pos.x/' + 'size.x-0.5' + ')*2.0,(0.5' + '-pos.y/siz' + 'e.y)*2.0,0' + '.,1.0);\x0a#i' + 'fdef\x20MVP3D' + '\x0a\x09gl_Posit' + 'ion=u_MvpM' + 'atrix*pos1' + ';\x0a#else\x0a\x09g' + 'l_Position' + '=pos1;\x0a#en' + 'dif\x0a\x09v_tex' + 'coordAlpha' + '.xy\x20=\x20posu' + 'v.zw;\x0a\x09//v' + '_texcoordA' + 'lpha.z\x20=\x20a' + 'ttribColor' + '.a/255.0;\x0a' + '\x09v_color\x20=' + '\x20attribCol' + 'or/255.0;\x0a' + '\x09v_color.x' + 'yz*=v_colo' + 'r.w;//反正后面' + '也要预乘\x0a\x09\x0a\x09v_' + 'useTex\x20=\x20a' + 'ttribFlags' + '.r/255.0;\x0a' + '\x09float\x20cli' + 'pw\x20=\x20lengt' + 'h(clipMatD' + 'ir.xy);\x0a\x09f' + 'loat\x20cliph' + '\x20=\x20length(' + 'clipMatDir' + '.zw);\x0a\x09vec' + '2\x20clippos\x20' + '=\x20pos.xy\x20-' + '\x20clipMatPo' + 's.xy;\x09//po' + 's已经应用矩阵了，为' + '了减的有意义，cli' + 'p的位置也要缩放\x0a\x09' + 'if(clipw>2' + '0000.\x20&&\x20c' + ('liph>20000' + '.)\x0a\x09\x09clipe' + 'd\x20=\x20vec2(0' + '.5,0.5);\x0a\x09' + 'else\x20{\x0a\x09\x09/' + '/转成0到1之间。/' + 'clipw/clip' + 'w\x20表示clippo' + 's与normaliz' + 'e之后的clip朝向' + '点积之后，再除以cl' + 'ipw\x0a\x09\x09clip' + 'ed=vec2(\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.xy)/clip' + 'w/clipw,\x20d' + 'ot(clippos' + ',clipMatDi' + 'r.zw)/clip' + 'h/cliph);\x0a' + '\x09}\x0a\x0a}'), '/*\x0a\x09textur' + 'e和fillrect' + '使用的。\x0a*/\x0a\x0ap' + 'recision\x20m' + 'ediump\x20flo' + 'at;\x0a//prec' + 'ision\x20high' + 'p\x20float;\x0av' + 'arying\x20vec' + '4\x20v_texcoo' + 'rdAlpha;\x0av' + 'arying\x20vec' + '4\x20v_color;' + '\x0avarying\x20f' + 'loat\x20v_use' + 'Tex;\x0aunifo' + 'rm\x20sampler' + '2D\x20texture' + ';\x0avarying\x20' + 'vec2\x20clipe' + 'd;\x0a\x0a#ifdef' + '\x20BLUR_FILT' + 'ER\x0auniform' + '\x20vec4\x20stre' + 'ngth_sig2_' + '2sig2_gaus' + 's1;\x0aunifor' + 'm\x20vec2\x20blu' + 'rInfo;\x0a\x0a#d' + 'efine\x20PI\x203' + '.141593\x0a\x0af' + 'loat\x20getGa' + 'ussian(flo' + 'at\x20x,\x20floa' + 't\x20y){\x0a\x20\x20\x20\x20' + 'return\x20str' + 'ength_sig2' + '_2sig2_gau' + 'ss1.w*exp(' + '-(x*x+y*y)' + '/strength_' + 'sig2_2sig2' + '_gauss1.z)' + ';\x0a}\x0a\x0avec4\x20' + 'blur(){\x0a\x20\x20' + '\x20\x20const\x20fl' + 'oat\x20blurw\x20' + '=\x209.0;\x0a\x20\x20\x20' + '\x20vec4\x20vec4' + 'Color\x20=\x20ve' + 'c4(0.0,0.0' + ',0.0,0.0);' + '\x0a\x20\x20\x20\x20vec2\x20' + 'halfsz=vec' + '2(blurw,bl' + 'urw)/2.0/b' + 'lurInfo;\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20vec' + '2\x20startpos' + '=v_texcoor' + 'dAlpha.xy-' + 'halfsz;\x0a\x20\x20' + '\x20\x20vec2\x20cte' + 'xcoord\x20=\x20s' + 'tartpos;\x0a\x20' + '\x20\x20\x20vec2\x20st' + 'ep\x20=\x201.0/b' + 'lurInfo;\x20\x20' + '//每个像素\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20for(floa' + 't\x20y\x20=\x200.0;' + 'y<=blurw;\x20' + '++y){\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20ctexco' + 'ord.x=star' + 'tpos.x;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20for(' + 'float\x20x\x20=\x20' + '0.0;x<=blu' + 'rw;\x20++x){\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20//TODO\x20纹' + '理坐标的固定偏移应该' + '在vs中处理\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20v' + 'ec4Color\x20+' + '=\x20texture2' + 'D(texture,' + '\x20ctexcoord' + ')*getGauss' + 'ian(x-blur' + 'w/2.0,y-bl' + 'urw/2.0);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20ctexcoor' + 'd.x+=step.' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20ctexcoord' + ('.y+=step.y' + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20return\x20v' + 'ec4Color;\x0a' + '}\x0a#endif\x0a\x0a' + '#ifdef\x20COL' + 'OR_FILTER\x0a' + 'uniform\x20ve' + 'c4\x20colorAl' + 'pha;\x0aunifo' + 'rm\x20mat4\x20co' + 'lorMat;\x0a#e' + 'ndif\x0a\x0a#ifd' + 'ef\x20GLOW_FI' + 'LTER\x0aunifo' + 'rm\x20vec4\x20u_' + 'color;\x0auni' + 'form\x20vec4\x20' + 'u_blurInfo' + '1;\x0auniform' + '\x20vec4\x20u_bl' + 'urInfo2;\x0a#' + 'endif\x0a\x0a#if' + 'def\x20COLOR_' + 'ADD\x0aunifor' + 'm\x20vec4\x20col' + 'orAdd;\x0a#en' + 'dif\x0a\x0a//FIL' + 'LTEXTURE\x0au' + 'niform\x20vec' + '4\x20u_TexRan' + 'ge;//start' + 'u,startv,u' + 'range,\x20vra' + 'nge\x0a\x0avoid\x20' + 'main()\x20{\x0a\x09' + 'if(cliped.' + 'x<0.)\x20disc' + 'ard;\x0a\x09if(c' + 'liped.x>1.' + ')\x20discard;' + '\x0a\x09if(clipe' + 'd.y<0.)\x20di' + 'scard;\x0a\x09if' + '(cliped.y>' + '1.)\x20discar' + 'd;\x0a\x09\x0a#ifde' + 'f\x20FILLTEXT' + 'URE\x09\x0a\x20\x20\x20ve' + 'c4\x20color=\x20' + 'texture2D(' + 'texture,\x20f' + 'ract(v_tex' + 'coordAlpha' + '.xy)*u_Tex' + 'Range.zw\x20+' + '\x20u_TexRang' + 'e.xy);\x0a#el' + 'se\x0a\x20\x20\x20vec4' + '\x20color=\x20te' + 'xture2D(te' + 'xture,\x20v_t' + 'excoordAlp' + 'ha.xy);\x0a#e' + 'ndif\x0a\x0a\x20\x20\x20i' + 'f(v_useTex' + '<=0.)color' + '\x20=\x20vec4(1.' + ',1.,1.,1.)' + ';\x0a\x20\x20\x20color' + '.a*=v_colo' + 'r.w;\x0a\x20\x20\x20//' + 'color.rgb*' + '=v_color.w' + ';\x0a\x20\x20\x20color' + '.rgb*=v_co' + 'lor.rgb;\x0a\x20' + '\x20\x20gl_FragC' + 'olor=color' + ';\x0a\x20\x20\x20\x0a\x20\x20\x20#' + 'ifdef\x20COLO' + 'R_ADD\x0a\x09gl_' + 'FragColor\x20' + '=\x20vec4(col' + 'orAdd.rgb,' + 'colorAdd.a' + '*gl_FragCo' + 'lor.a);\x0a\x09g' + 'l_FragColo' + 'r.xyz\x20*=\x20c' + 'olorAdd.a;' + '\x0a\x20\x20\x20#endif' + '\x0a\x20\x20\x20\x0a\x20\x20\x20#i' + 'fdef\x20BLUR_' + 'FILTER\x0a\x09gl' + '_FragColor' + '\x20=\x20\x20\x20blur(' + ');\x0a\x09gl_Fra' + 'gColor.w*=' + 'v_color.w;') + ('\x20\x20\x20\x0a\x20\x20\x20#en' + 'dif\x0a\x20\x20\x20\x0a\x20\x20' + '\x20#ifdef\x20CO' + 'LOR_FILTER' + '\x0a\x09mat4\x20alp' + 'haMat\x20=col' + 'orMat;\x0a\x0a\x09a' + 'lphaMat[0]' + '[3]\x20*=\x20gl_' + 'FragColor.' + 'a;\x0a\x09alphaM' + 'at[1][3]\x20*' + '=\x20gl_FragC' + 'olor.a;\x0a\x09a' + 'lphaMat[2]' + '[3]\x20*=\x20gl_' + 'FragColor.' + 'a;\x0a\x0a\x09gl_Fr' + 'agColor\x20=\x20' + 'gl_FragCol' + 'or\x20*\x20alpha' + 'Mat;\x0a\x09gl_F' + 'ragColor\x20+' + '=\x20colorAlp' + 'ha/255.0*g' + 'l_FragColo' + 'r.a;\x0a\x20\x20\x20#e' + 'ndif\x0a\x20\x20\x20\x0a\x20' + '\x20\x20#ifdef\x20G' + 'LOW_FILTER' + '\x0a\x09const\x20fl' + 'oat\x20c_Iter' + 'ationTime\x20' + '=\x2010.0;\x0a\x09f' + 'loat\x20float' + 'IterationT' + 'otalTime\x20=' + '\x20c_Iterati' + 'onTime\x20*\x20c' + '_Iteration' + 'Time;\x0a\x09vec' + '4\x20vec4Colo' + 'r\x20=\x20vec4(0' + '.0,0.0,0.0' + ',0.0);\x0a\x09ve' + 'c2\x20vec2Fil' + 'terDir\x20=\x20v' + 'ec2(-(u_bl' + 'urInfo1.z)' + '/u_blurInf' + 'o2.x,-(u_b' + 'lurInfo1.w' + ')/u_blurIn' + 'fo2.y);\x0a\x09v' + 'ec2\x20vec2Fi' + 'lterOff\x20=\x20' + 'vec2(u_blu' + 'rInfo1.x/u' + '_blurInfo2' + '.x/c_Itera' + 'tionTime\x20*' + '\x202.0,u_blu' + 'rInfo1.y/u' + '_blurInfo2' + '.y/c_Itera' + 'tionTime\x20*' + '\x202.0);\x0a\x09fl' + 'oat\x20maxNum' + '\x20=\x20u_blurI' + 'nfo1.x\x20*\x20u' + '_blurInfo1' + '.y;\x0a\x09vec2\x20' + 'vec2Off\x20=\x20' + 'vec2(0.0,0' + '.0);\x0a\x09floa' + 't\x20floatOff' + '\x20=\x20c_Itera' + 'tionTime/2' + '.0;\x0a\x09for(f' + 'loat\x20i\x20=\x200' + '.0;i<=c_It' + 'erationTim' + 'e;\x20++i){\x0a\x09' + '\x09for(float' + '\x20j\x20=\x200.0;j' + '<=c_Iterat' + 'ionTime;\x20+' + '+j){\x0a\x09\x09\x09ve' + 'c2Off\x20=\x20ve' + 'c2(vec2Fil' + 'terOff.x\x20*' + '\x20(i\x20-\x20floa' + 'tOff),vec2' + 'FilterOff.' + 'y\x20*\x20(j\x20-\x20f' + 'loatOff));' + '\x0a\x09\x09\x09vec4Co' + 'lor\x20+=\x20tex' + 'ture2D(tex' + 'ture,\x20v_te') + ('xcoordAlph' + 'a.xy\x20+\x20vec' + '2FilterDir' + '\x20+\x20vec2Off' + ')/floatIte' + 'rationTota' + 'lTime;\x0a\x09\x09}' + '\x0a\x09}\x0a\x09gl_Fr' + 'agColor\x20=\x20' + 'vec4(u_col' + 'or.rgb,vec' + '4Color.a\x20*' + '\x20u_blurInf' + 'o2.z);\x0a\x09gl' + '_FragColor' + '.rgb\x20*=\x20gl' + '_FragColor' + '.a;\x20\x20\x20\x0a\x20\x20\x20' + '#endif\x0a\x20\x20\x20' + '\x0a}'), 'posuv,attr' + 'ibColor,at' + 'tribFlags', 'size,clipM' + 'atDir,clip' + 'MatPos,tex' + 'ture,color' + 'Mat,colorA' + 'lpha,stren' + 'gth_sig2_2' + 'sig2_gauss' + '1,blurInfo' + ',u_color,u' + '_blurInfo1' + ',u_blurInf' + 'o2'), _0x151c58['PROGRAMEX_' + 'DRAWVG'] = _0x33edbf['instance']['createProg' + 'ramEx']('attribute\x20' + 'vec4\x20posit' + 'ion;\x0aattri' + 'bute\x20vec4\x20' + 'attribColo' + 'r;\x0a//attri' + 'bute\x20vec4\x20' + 'clipDir;\x0a/' + '/attribute' + '\x20vec2\x20clip' + 'Rect;\x0aunif' + 'orm\x20vec4\x20c' + 'lipMatDir;' + '\x0auniform\x20v' + 'ec2\x20clipMa' + 'tPos;\x0a#ifd' + 'ef\x20WORLDMA' + 'T\x0a\x09uniform' + '\x20mat4\x20mmat' + ';\x0a#endif\x0au' + 'niform\x20mat' + '4\x20u_mmat2;' + '\x0a//uniform' + '\x20vec2\x20u_po' + 's;\x0auniform' + '\x20vec2\x20size' + ';\x0avarying\x20' + 'vec4\x20color' + ';\x0a//vec4\x20d' + 'irxy=vec4(' + '0.9,0.1,\x20-' + '0.1,0.9);\x0a' + '//vec4\x20cli' + 'p=vec4(100' + '.,30.,300.' + ',600.);\x0ava' + 'rying\x20vec2' + '\x20cliped;\x0av' + 'oid\x20main()' + '{\x0a\x09\x0a#ifdef' + '\x20WORLDMAT\x0a' + '\x09vec4\x20pos=' + 'mmat*vec4(' + 'position.x' + 'y,0.,1.);\x0a' + '\x09gl_Positi' + 'on\x20=vec4((' + 'pos.x/size' + '.x-0.5)*2.' + '0,(0.5-pos' + '.y/size.y)' + '*2.0,pos.z' + ',1.0);\x0a#el' + 'se\x0a\x09gl_Pos' + 'ition\x20=vec' + '4((positio' + 'n.x/size.x' + '-0.5)*2.0,' + '(0.5-posit' + 'ion.y/size' + '.y)*2.0,po' + 'sition.z,1' + '.0);\x0a#endi' + 'f\x09\x0a\x09float\x20' + 'clipw\x20=\x20le' + 'ngth(clipM' + 'atDir.xy);' + '\x0a\x09float\x20cl' + 'iph\x20=\x20leng' + 'th(clipMat' + 'Dir.zw);\x0a\x09' + 'vec2\x20clipp' + 'os\x20=\x20posit' + 'ion.xy\x20-\x20c' + 'lipMatPos.' + 'xy;\x09//pos已' + '经应用矩阵了，为了减' + '的有意义，clip的' + '位置也要缩放\x0a\x09if' + '(clipw>200' + '00.\x20&&\x20cli' + 'ph>20000.)' + '\x0a\x09\x09cliped\x20' + '=\x20vec2(0.5' + ',0.5);\x0a\x09el' + 'se\x20{\x0a\x09\x09//c' + 'lipdir是带缩放' + '的方向，由于上面cl' + 'ippos是在缩放后' + '的空间计算的，所以需' + '要把方向先norma' + 'lize一下\x0a\x09\x09c' + 'liped=vec2' + '(\x20dot(clip' + 'pos,clipMa' + 'tDir.xy)/c' + 'lipw/clipw' + ',\x20dot(clip' + 'pos,clipMa' + 'tDir.zw)/c' + ('liph/cliph' + ');\x0a\x09}\x0a\x20\x20//' + 'pos2d.x\x20=\x20' + 'dot(clippo' + 's,dirx);\x0a\x20' + '\x20color=att' + 'ribColor/2' + '55.;\x0a}'), 'precision\x20' + 'mediump\x20fl' + 'oat;\x0a//pre' + 'cision\x20med' + 'iump\x20float' + ';\x0avarying\x20' + 'vec4\x20color' + ';\x0a//unifor' + 'm\x20float\x20al' + 'pha;\x0avaryi' + 'ng\x20vec2\x20cl' + 'iped;\x0avoid' + '\x20main(){\x0a\x09' + '//vec4\x20a=v' + 'ec4(color.' + 'r,\x20color.g' + ',\x20color.b,' + '\x201);\x0a\x09//a.' + 'a*=alpha;\x0a' + '\x20\x20\x20\x20gl_Fra' + 'gColor=\x20co' + 'lor;//\x20vec' + '4(color.r,' + '\x20color.g,\x20' + 'color.b,\x20a' + 'lpha);\x0a\x09gl' + '_FragColor' + '.rgb*=colo' + 'r.a;\x0a\x09if(c' + 'liped.x<0.' + ')\x20discard;' + '\x0a\x09if(clipe' + 'd.x>1.)\x20di' + 'scard;\x0a\x09if' + '(cliped.y<' + '0.)\x20discar' + 'd;\x0a\x09if(cli' + 'ped.y>1.)\x20' + 'discard;\x0a}', 'position,a' + 'ttribColor', 'size,clipM' + 'atDir,clip' + 'MatPos'), _0x151c58['PROGRAMEX_' + 'DRAWPARTIC' + 'LE'] = _0x33edbf['instance']['createProg' + 'ramEx']('attribute\x20' + 'vec4\x20a_Cor' + 'nerTexture' + 'Coordinate' + ';\x0aattribut' + 'e\x20vec3\x20a_P' + 'osition;\x0aa' + 'ttribute\x20v' + 'ec3\x20a_Velo' + 'city;\x0aattr' + 'ibute\x20vec4' + '\x20a_StartCo' + 'lor;\x0aattri' + 'bute\x20vec4\x20' + 'a_EndColor' + ';\x0aattribut' + 'e\x20vec3\x20a_S' + 'izeRotatio' + 'n;\x0aattribu' + 'te\x20vec2\x20a_' + 'Radius;\x0aat' + 'tribute\x20ve' + 'c4\x20a_Radia' + 'n;\x0aattribu' + 'te\x20float\x20a' + '_AgeAddSca' + 'le;\x0aattrib' + 'ute\x20float\x20' + 'a_Time;\x0a\x0av' + 'arying\x20vec' + '4\x20v_Color;' + '\x0avarying\x20v' + 'ec2\x20v_Text' + 'ureCoordin' + 'ate;\x0a\x0aunif' + 'orm\x20float\x20' + 'u_CurrentT' + 'ime;\x0aunifo' + 'rm\x20float\x20u' + '_Duration;' + '\x0auniform\x20f' + 'loat\x20u_End' + 'Velocity;\x0a' + 'uniform\x20ve' + 'c3\x20u_Gravi' + 'ty;\x0a\x0aunifo' + 'rm\x20vec2\x20si' + 'ze;\x0aunifor' + 'm\x20mat4\x20u_m' + 'mat;\x0a\x0avec4' + '\x20ComputePa' + 'rticlePosi' + 'tion(in\x20ve' + 'c3\x20positio' + 'n,\x20in\x20vec3' + '\x20velocity,' + 'in\x20float\x20a' + 'ge,in\x20floa' + 't\x20normaliz' + 'edAge)\x0a{\x0a\x0a' + '\x20\x20\x20float\x20s' + 'tartVeloci' + 'ty\x20=\x20lengt' + 'h(velocity' + ');//起始标量速度' + '\x0a\x20\x20\x20float\x20' + 'endVelocit' + 'y\x20=\x20startV' + 'elocity\x20*\x20' + 'u_EndVeloc' + 'ity;//结束标量' + '速度\x0a\x0a\x20\x20\x20flo' + 'at\x20velocit' + 'yIntegral\x20' + '=\x20startVel' + 'ocity\x20*\x20no' + 'rmalizedAg' + 'e\x20+(endVel' + 'ocity\x20-\x20st' + 'artVelocit' + 'y)\x20*\x20norma' + 'lizedAge\x20*' + 'normalized' + 'Age/2.0;//' + '计算当前速度的标量（' + '单位空间），vt=v' + '0*t+(1/2)*' + 'a*(t^2)\x0a\x20\x20' + '\x20\x0a\x20\x20\x20vec3\x20' + 'addPositio' + 'n\x20=\x20normal' + 'ize(veloci' + 'ty)\x20*\x20velo' + 'cityIntegr' + 'al\x20*\x20u_Dur' + 'ation;//计算' + '受自身速度影响的位置' + '，转换标量到矢量\x20\x20' + '\x20\x20\x0a\x20\x20\x20addP' + 'osition\x20+=' + ('\x20u_Gravity' + '\x20*\x20age\x20*\x20n' + 'ormalizedA' + 'ge;//计算受重力' + '影响的位置\x0a\x20\x20\x20\x0a' + '\x20\x20\x20float\x20r' + 'adius=mix(' + 'a_Radius.x' + ',\x20a_Radius' + '.y,\x20normal' + 'izedAge);\x20' + '//计算粒子受半径和' + '角度影响（无需计算角' + '度和半径时，可用宏定' + '义优化屏蔽此计算）\x0a' + '\x20\x20\x20float\x20r' + 'adianHoriz' + 'ontal\x20=mix' + '(a_Radian.' + 'x,a_Radian' + '.z,normali' + 'zedAge);\x0a\x20' + '\x20\x20float\x20ra' + 'dianVertic' + 'al\x20=mix(a_' + 'Radian.y,a' + '_Radian.w,' + 'normalized' + 'Age);\x0a\x20\x20\x20\x0a' + '\x20\x20\x20float\x20r' + '\x20=cos(radi' + 'anVertical' + ')*\x20radius;' + '\x0a\x20\x20\x20addPos' + 'ition.y\x20+=' + '\x20sin(radia' + 'nVertical)' + '\x20*\x20radius;' + '\x0a\x09\x0a\x20\x20\x20addP' + 'osition.x\x20' + '+=\x20cos(rad' + 'ianHorizon' + 'tal)\x20*r;\x0a\x20' + '\x20\x20addPosit' + 'ion.z\x20+=\x20s' + 'in(radianH' + 'orizontal)' + '\x20*r;\x0a\x20\x20\x0a\x20\x20' + '\x20addPositi' + 'on.y=-addP' + 'osition.y;' + '//2D粒子位置更新' + '需要取负，2D粒子坐' + '标系Y轴正向朝上\x0a\x20' + '\x20\x20position' + '+=addPosit' + 'ion;\x0a\x20\x20\x20re' + 'turn\x20\x20vec4' + '(position,' + '1.0);\x0a}\x0a\x0af' + 'loat\x20Compu' + 'teParticle' + 'Size(in\x20fl' + 'oat\x20startS' + 'ize,in\x20flo' + 'at\x20endSize' + ',\x20in\x20float' + '\x20normalize' + 'dAge)\x0a{\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20floa' + 't\x20size\x20=\x20m' + 'ix(startSi' + 'ze,\x20endSiz' + 'e,\x20normali' + 'zedAge);\x0a\x20' + '\x20\x20\x20return\x20' + 'size;\x0a}\x0a\x0am' + 'at2\x20Comput' + 'eParticleR' + 'otation(in' + '\x20float\x20rot' + ',in\x20float\x20' + 'age)\x0a{\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20float' + '\x20rotation\x20' + '=rot\x20*\x20age' + ';\x0a\x20\x20\x20\x20//计算' + '2x2旋转矩阵.\x0a\x20' + '\x20\x20\x20float\x20c' + '\x20=\x20cos(rot' + 'ation);\x0a\x20\x20' + '\x20\x20float\x20s\x20' + '=\x20sin(rota' + 'tion);\x0a\x20\x20\x20' + '\x20return\x20ma' + 't2(c,\x20-s,\x20' + 's,\x20c);\x0a}\x0a\x0a' + 'vec4\x20Compu' + 'teParticle' + 'Color(in\x20v') + ('ec4\x20startC' + 'olor,in\x20ve' + 'c4\x20endColo' + 'r,in\x20float' + '\x20normalize' + 'dAge)\x0a{\x0a\x09v' + 'ec4\x20color=' + 'mix(startC' + 'olor,endCo' + 'lor,normal' + 'izedAge);\x0a' + '\x20\x20\x20\x20//硬编码设' + '置，使粒子淡入很快，' + '淡出很慢,6.7的缩' + '放因子把置归一在0到' + '1之间，可以谷歌x*' + '(1-x)*(1-x' + ')*6.7的制图表\x0a' + '\x20\x20\x20\x20color.' + 'a\x20*=\x20norma' + 'lizedAge\x20*' + '\x20(1.0-norm' + 'alizedAge)' + '\x20*\x20(1.0-no' + 'rmalizedAg' + 'e)\x20*\x206.7;\x0a' + '\x20\x20\x20\x0a\x20\x20\x20\x20re' + 'turn\x20color' + ';\x0a}\x0a\x0avoid\x20' + 'main()\x0a{\x0a\x20' + '\x20\x20float\x20ag' + 'e\x20=\x20u_Curr' + 'entTime\x20-\x20' + 'a_Time;\x0a\x20\x20' + '\x20age\x20*=\x201.' + '0\x20+\x20a_AgeA' + 'ddScale;\x0a\x20' + '\x20\x20float\x20no' + 'rmalizedAg' + 'e\x20=\x20clamp(' + 'age\x20/\x20u_Du' + 'ration,0.0' + ',1.0);\x0a\x20\x20\x20' + 'gl_Positio' + 'n\x20=\x20Comput' + 'eParticleP' + 'osition(a_' + 'Position,\x20' + 'a_Velocity' + ',\x20age,\x20nor' + 'malizedAge' + ');//计算粒子位置' + '\x0a\x20\x20\x20float\x20' + 'pSize\x20=\x20Co' + 'mputeParti' + 'cleSize(a_' + 'SizeRotati' + 'on.x,a_Siz' + 'eRotation.' + 'y,\x20normali' + 'zedAge);\x0a\x20' + '\x20\x20mat2\x20rot' + 'ation\x20=\x20Co' + 'mputeParti' + 'cleRotatio' + 'n(a_SizeRo' + 'tation.z,\x20' + 'age);\x0a\x09\x0a\x20\x20' + '\x20\x20mat4\x20mat' + '=u_mmat;\x0a\x20' + '\x20\x20\x20gl_Posi' + 'tion=vec4(' + '(mat*gl_Po' + 'sition).xy' + ',0.0,1.0);' + '\x0a\x20\x20\x20\x20gl_Po' + 'sition.xy\x20' + '+=\x20(rotati' + 'on*a_Corne' + 'rTextureCo' + 'ordinate.x' + 'y)\x20*\x20pSize' + '*vec2(mat[' + '0][0],mat[' + '1][1]);\x0a\x20\x20' + '\x20\x20gl_Posit' + 'ion=vec4((' + 'gl_Positio' + 'n.x/size.x' + '-0.5)*2.0,' + '(0.5-gl_Po' + 'sition.y/s' + 'ize.y)*2.0' + ',0.0,1.0);' + '\x0a\x20\x20\x20\x0a\x20\x20\x20v_' + 'Color\x20=\x20Co' + 'mputeParti' + 'cleColor(a' + '_StartColo' + 'r,a_EndCol') + ('or,\x20normal' + 'izedAge);\x0a' + '\x20\x20\x20v_Textu' + 'reCoordina' + 'te\x20=a_Corn' + 'erTextureC' + 'oordinate.' + 'zw;\x0a}\x0a\x0a'), '#ifdef\x20FSH' + 'IGHPRECISI' + 'ON\x0aprecisi' + 'on\x20highp\x20f' + 'loat;\x0a#els' + 'e\x0aprecisio' + 'n\x20mediump\x20' + 'float;\x0a#en' + 'dif\x0a\x0avaryi' + 'ng\x20vec4\x20v_' + 'Color;\x0avar' + 'ying\x20vec2\x20' + 'v_TextureC' + 'oordinate;' + '\x0auniform\x20s' + 'ampler2D\x20u' + '_texture;\x0a' + '\x0avoid\x20main' + '()\x0a{\x09\x0a\x09gl_' + 'FragColor=' + 'texture2D(' + 'u_texture,' + 'v_TextureC' + 'oordinate)' + '*v_Color;\x0a' + '\x09gl_FragCo' + 'lor.xyz\x20*=' + '\x20v_Color.w' + ';\x0a}', 'a_CornerTe' + 'xtureCoord' + 'inate,a_Po' + 'sition,a_V' + 'elocity,a_' + 'StartColor' + ',a_EndColo' + 'r,a_SizeRo' + 'tation,a_R' + 'adius,a_Ra' + 'dian,a_Age' + 'AddScale,a' + '_Time', 'u_CurrentT' + 'ime,u_Dura' + 'tion,u_End' + 'Velocity,u' + '_Gravity,s' + 'ize,u_mmat' + ',u_texture'), _0x151c58['VDO_MESHQU' + 'ADTEXTURE'] = _0xd27a64['createVDO'](new Int32Array([
                        0x1406,
                        0x0,
                        0x4,
                        0x18,
                        0x1401,
                        0x10,
                        0x4,
                        0x18,
                        0x1401,
                        0x14,
                        0x4,
                        0x18
                    ])), _0x151c58['VDO_MESHVG'] = _0xd27a64['createVDO'](new Int32Array([
                        0x1406,
                        0x0,
                        0x2,
                        0xc,
                        0x1401,
                        0x8,
                        0x4,
                        0xc
                    ])), _0x151c58['VDO_MESHPA' + 'RTICLE'] = _0xd27a64['createVDO'](new Int32Array([
                        0x1406,
                        0x0,
                        0x4,
                        0x74,
                        0x1406,
                        0x10,
                        0x3,
                        0x74,
                        0x1406,
                        0x1c,
                        0x3,
                        0x74,
                        0x1406,
                        0x28,
                        0x4,
                        0x74,
                        0x1406,
                        0x38,
                        0x4,
                        0x74,
                        0x1406,
                        0x48,
                        0x3,
                        0x74,
                        0x1406,
                        0x54,
                        0x2,
                        0x74,
                        0x1406,
                        0x5c,
                        0x4,
                        0x74,
                        0x1406,
                        0x6c,
                        0x1,
                        0x74,
                        0x1406,
                        0x70,
                        0x1,
                        0x74
                    ])), _0x151c58['_init_simp' + 'le_texture' + '_cmdEncode' + 'r_'](), _0x151c58['_init_simp' + 'le_rect_cm' + 'dEncoder_'](), _0x151c58['_init_rect' + '_border_cm' + 'dEncoder_'](), _0x151c58['SHADER_MAC' + 'RO_COLOR_F' + 'ILTER'] = _0x33edbf['instance']['defineShad' + 'erMacro']('#define\x20CO' + 'LOR_FILTER', [
                        {
                            'uname': 0x4,
                            'id': _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_COLOR']
                        },
                        {
                            'uname': 0x5,
                            'id': _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_ALPHA']
                        }
                    ]), _0x151c58['SHADER_MAC' + 'RO_BLUR_FI' + 'LTER'] = _0x33edbf['instance']['defineShad' + 'erMacro']('#define\x20BL' + 'UR_FILTER', [
                        {
                            'uname': 0x6,
                            'id': _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_STRENGT' + 'H']
                        },
                        {
                            'uname': 0x7,
                            'id': _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_BLURINF' + 'O']
                        }
                    ]), _0x151c58['SHADER_MAC' + 'RO_GLOW_FI' + 'LTER'] = _0x33edbf['instance']['defineShad' + 'erMacro']('#define\x20GL' + 'OW_FILTER', [
                        {
                            'uname': 0x8,
                            'id': _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_COLOR']
                        },
                        {
                            'uname': 0x9,
                            'id': _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O1']
                        },
                        {
                            'uname': 0xa,
                            'id': _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O2']
                        }
                    ]), _0x11030f['__init__'](), _0x11030f['__init_END' + '_']();
                    if (_0x32b95f['useOldChar' + 'Book'])
                        new _0x231b8b();
                    else
                        new _0x32b95f();
                    _0x2952e3['charRender'] = new _0x7fdce3();
                }
            }, _0x151c58['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_'] = null, _0x151c58['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_'] = null, _0x151c58['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_'] = null, _0x151c58['PROGRAMEX_' + 'DRAWTEXTUR' + 'E'] = 0x0, _0x151c58['PROGRAMEX_' + 'DRAWVG'] = 0x0, _0x151c58['PROGRAMEX_' + 'DRAWRECT'] = 0x0, _0x151c58['PROGRAMEX_' + 'DRAWPARTIC' + 'LE'] = 0x0, _0x151c58['VDO_MESHQU' + 'ADTEXTURE'] = 0x0, _0x151c58['VDO_MESHVG'] = 0x0, _0x151c58['VDO_MESHPA' + 'RTICLE'] = 0x0, _0x151c58['GLOBALVALU' + 'E_VIEWS'] = 0x0, _0x151c58['GLOBALVALU' + 'E_MATRIX32'] = 0x0, _0x151c58['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'] = 0x0, _0x151c58['GLOBALVALU' + 'E_ITALICDE' + 'G'] = 0x0, _0x151c58['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'] = 0x0, _0x151c58['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'] = 0x0, _0x151c58['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'] = 0x0, _0x151c58['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST'] = 0x0, _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_COLOR'] = 0x0, _0x151c58['GLOBALVALU' + 'E_COLORFIL' + 'TER_ALPHA'] = 0x0, _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_STRENGT' + 'H'] = 0x0, _0x151c58['GLOBALVALU' + 'E_BLURFILT' + 'ER_BLURINF' + 'O'] = 0x0, _0x151c58['SHADER_MAC' + 'RO_COLOR_F' + 'ILTER'] = 0x0, _0x151c58['SHADER_MAC' + 'RO_BLUR_FI' + 'LTER'] = 0x0, _0x151c58['SHADER_MAC' + 'RO_GLOW_FI' + 'LTER'] = 0x0, _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_COLOR'] = 0x0, _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O1'] = 0x0, _0x151c58['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O2'] = 0x0, _0x151c58;
        }(), _0x11030f = function () {
            function _0x527dda() {
                this['_commStr'] = '', this['_commandEn' + 'coder'] = null, this['_id'] = 0x0, this['_commandEn' + 'coder'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x40, 0x10, ![]);
            }
            _0x199b5b(_0x527dda, 'laya.layag' + 'l.LayaGLTe' + 'mplate');
            var _0x1bac08 = _0x527dda['prototype'];
            return _0x1bac08['addComd'] = function (_0x52fb4f, _0x22a1a3) {
                this['_commStr'] += _0x52fb4f + '(' + _0x22a1a3 + ');', this['_commandEn' + 'coder'][_0x52fb4f]['apply'](this['_commandEn' + 'coder'], _0x22a1a3);
            }, _0x527dda['createByRe' + 'nderType'] = function (_0x2c40a4) {
                var _0x37e88b = _0x527dda['GLS'][_0x2c40a4] = new _0x527dda();
                _0x30d89b['isConchApp'] && _0x33edbf['instance']['setGLTempl' + 'ate'](_0x2c40a4, _0x37e88b['_commandEn' + 'coder']['getPtrID']());
                ;
                var _0x2c5167 = 0x1;
                while (_0x2c5167 <= 0x2000) {
                    var _0x4f71d7 = _0x2c40a4 & _0x2c5167;
                    if (_0x4f71d7 && _0x527dda['__FUN_PARA' + 'M__'][_0x2c5167]) {
                        var _0x40b427 = _0x527dda['__FUN_PARA' + 'M__'][_0x2c5167];
                        for (var _0x518840 = 0x0, _0x73af32 = _0x40b427['length']; _0x518840 < _0x73af32; _0x518840++) {
                            var _0x3b0a7d = _0x40b427[_0x518840];
                            _0x37e88b['addComd'](_0x3b0a7d['func'], _0x3b0a7d['args']);
                        }
                    }
                    _0x2c5167 <<= 0x1;
                }
                return _0x37e88b['_id'] = _0x2c40a4, console['log']('template=' + _0x37e88b['_commStr']), _0x37e88b;
            }, _0x527dda['createByRe' + 'nderTypeEn' + 'd'] = function (_0x1a99e1) {
                var _0x5e2947 = _0x527dda['GLSE'][_0x1a99e1] = new _0x527dda();
                _0x30d89b['isConchApp'] && _0x33edbf['instance']['setEndGLTe' + 'mplate'](_0x1a99e1, _0x5e2947['_commandEn' + 'coder']['getPtrID']());
                ;
                var _0x9ee5 = 0x2000;
                while (_0x9ee5 > 0x1) {
                    var _0x16dce0 = _0x1a99e1 & _0x9ee5;
                    if (_0x16dce0 && _0x527dda['__FUN_PARA' + 'M_END_'][_0x9ee5]) {
                        var _0x837f95 = _0x527dda['__FUN_PARA' + 'M_END_'][_0x9ee5];
                        for (var _0xb3c91f = 0x0, _0x19bfff = _0x837f95['length']; _0xb3c91f < _0x19bfff; _0xb3c91f++) {
                            var _0x1777d4 = _0x837f95[_0xb3c91f];
                            _0x5e2947['addComd'](_0x1777d4['func'], _0x1777d4['args']);
                        }
                    }
                    _0x9ee5 >>= 0x1;
                }
                return _0x5e2947['_id'] = _0x1a99e1, console['log']('templateEn' + 'd=' + _0x5e2947['_commStr']), _0x5e2947;
            }, _0x527dda['__init__'] = function () {
                _0x527dda['__FUN_PARA' + 'M__'][0x1] = [{
                        'func': 'setGlobalV' + 'alueByPara' + 'mData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'],
                            0xf,
                            0x16 * 0x4
                        ]
                    }], _0x527dda['__FUN_PARA' + 'M__'][0x2] = [
                    {
                        'func': 'calcLocalM' + 'atrix32',
                        'args': [
                            0xf * 0x4,
                            0x10 * 0x4,
                            0x6 * 0x4,
                            0x7 * 0x4,
                            0x8 * 0x4,
                            0x9 * 0x4,
                            0xa * 0x4,
                            0xb * 0x4,
                            0xc * 0x4,
                            0xd * 0x4,
                            0xe * 0x4
                        ]
                    },
                    {
                        'func': 'setGlobalV' + 'alueByPara' + 'mData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_MATRIX32'],
                            0x7,
                            0x10 * 0x4
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x4] = [
                    {
                        'func': 'setGlobalV' + 'alueByPara' + 'mData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'],
                            0x8,
                            0x47 * 0x4
                        ]
                    },
                    {
                        'func': 'setGlobalV' + 'alueByPara' + 'mData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST'],
                            0x8,
                            0x48 * 0x4
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x100] = [{
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x18 * 0x4,
                            0x19 * 0x4,
                            0x1
                        ]
                    }], _0x527dda['__FUN_PARA' + 'M__'][0x200] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x44 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x17 * 0x4,
                            -0x1,
                            0x1
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x400] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x3e * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x1a * 0x4,
                            -0x1,
                            0x3
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x800] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x37 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x1b * 0x4,
                            -0x1,
                            0x1
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x40] = [
                    {
                        'func': 'setClipByP' + 'aramData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'],
                            _0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'],
                            _0xe4a59a['GLOBALVALU' + 'E_MATRIX32'],
                            0x1c * 0x4
                        ]
                    },
                    {
                        'func': 'setGlobalV' + 'alueByPara' + 'mData',
                        'args': [
                            _0xe4a59a['GLOBALVALU' + 'E_MATRIX32'],
                            0x9,
                            0x20 * 0x4
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x10] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x41 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x40 * 0x4,
                            -0x1,
                            0x0
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x20] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x45 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x46 * 0x4,
                            -0x1,
                            0x0
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x8] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x38 * 0x4
                        ]
                    },
                    {
                        'func': 'loadDataTo' + 'RegByParam' + 'Data',
                        'args': [
                            0x0,
                            0x3f * 0x4,
                            0x4
                        ]
                    },
                    {
                        'func': 'ifGreater0',
                        'args': [
                            0x0,
                            0x7fffffff
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x3a * 0x4,
                            -0x1,
                            0x0
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M__'][0x80] = [
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x49 * 0x4,
                            0x4a * 0x4,
                            0x1
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x4b * 0x4,
                            0x4c * 0x4,
                            0x1
                        ]
                    }
                ];
            }, _0x527dda['__init_END' + '_'] = function () {
                _0x527dda['__FUN_PARA' + 'M_END_'][0x10] = [
                    {
                        'func': 'loadDataTo' + 'RegByParam' + 'Data',
                        'args': [
                            0x0,
                            0x3f * 0x4,
                            0x4
                        ]
                    },
                    {
                        'func': 'ifGreater0',
                        'args': [
                            0x0,
                            0x2
                        ]
                    },
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x43 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x42 * 0x4,
                            -0x1,
                            0x1
                        ]
                    }
                ], _0x527dda['__FUN_PARA' + 'M_END_'][0x8] = [
                    {
                        'func': 'callbackJS' + 'ByParamDat' + 'a',
                        'args': [
                            0x36 * 0x4,
                            0x39 * 0x4
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x3b * 0x4,
                            -0x1,
                            0x0
                        ]
                    },
                    {
                        'func': 'useCommand' + 'EncoderByP' + 'aramData',
                        'args': [
                            0x3c * 0x4,
                            0x3d * 0x4,
                            0x1
                        ]
                    }
                ];
            }, _0x527dda['GLS'] = [], _0x527dda['GLSE'] = [], _0x527dda['__FUN_PARA' + 'M__'] = [], _0x527dda['__FUN_PARA' + 'M_END_'] = [], _0x527dda;
        }(), _0x231b8b = function () {
            var _0x15daa5;
            function _0x2f211f() {
                this['fontPages'] = [], this['fontPagesN' + 'ame'] = [], this['_curPage'] = null, this['tempUV'] = [
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x1,
                    0x1,
                    0x0,
                    0x1
                ], this['fontScaleX'] = 0x1, this['fontScaleY'] = 0x1, this['_curStrPos'] = 0x0, this['tempMat'] = new _0x4fb671();
                var _0x111cfa = ![], _0x5a8071 = _0x4a6519['MiniAdpter'];
                _0x5a8071 && _0x5a8071['systemInfo'] && _0x5a8071['systemInfo']['system'] && (_0x111cfa = _0x5a8071['systemInfo']['system']['toLowerCas' + 'e']() === 'ios\x2010.1.1');
                if (_0x3592ad['onMiniGame'] && !_0x111cfa)
                    _0x2f211f['isWan1Wan'] = !![];
                _0x2f211f['charbookIn' + 'st'] = this, _0x4a6519['textRender'] = this, _0x2952e3['charRender'] = _0x30d89b['isConchApp'] ? new _0x7fdce3() : new _0x3fb2b8(_0x2f211f['textureWid' + 'th'], _0x2f211f['textureWid' + 'th'], _0x2f211f['scaleFontW' + 'ithCtx'], !_0x2f211f['isWan1Wan'], _0x2f211f['debug']);
            }
            _0x199b5b(_0x2f211f, 'laya.webgl' + '.resource.' + 'CharBook');
            var _0x3b1359 = _0x2f211f['prototype'];
            return _0x3b1359['selectFont'] = function (_0x275a8b, _0x2e8825) {
                var _0x23ab4f = Math['max'](this['fontScaleX'], this['fontScaleY']), _0x56dd2e = _0x2e8825 * _0x23ab4f, _0x340a6c;
                if (_0x275a8b === _0x2f211f['_lastFont'] && _0x56dd2e === _0x2f211f['_lastFontS' + 'z'])
                    _0x340a6c = _0x2f211f['_lastCharP' + 'age'];
                else {
                    var _0x5b333c = _0x2952e3['getBmpSize'](_0x2e8825) * _0x23ab4f, _0x430000 = Math['floor'](_0x5b333c / _0x2f211f['gridSize']), _0x281cbb = _0x275a8b + _0x430000, _0x340c68 = this['fontPagesN' + 'ame']['indexOf'](_0x281cbb);
                    if (_0x340c68 < 0x0) {
                        var _0x292bde = new _0x2952e3(_0x275a8b, _0x5b333c, _0x30d89b['isConchApp'] ? 0x0 : Math['ceil'](_0x2e8825 / 0x4));
                        this['fontPages']['push'](_0x292bde), this['fontPagesN' + 'ame']['push'](_0x281cbb), _0x340a6c = _0x292bde;
                    } else
                        _0x340a6c = this['fontPages'][_0x340c68];
                    _0x340a6c['selectSize'](_0x2e8825, _0x5b333c), _0x2f211f['_lastFont'] = _0x275a8b, _0x2f211f['_lastFontS' + 'z'] = _0x56dd2e, _0x2f211f['_lastCharP' + 'age'] = _0x340a6c;
                }
                return _0x340a6c;
            }, _0x3b1359['getNextCha' + 'r'] = function (_0xb73751) {
                var _0xa468cb = _0xb73751['length'], _0x471e50 = this['_curStrPos'];
                if (_0x471e50 >= _0xa468cb)
                    return null;
                var _0x3ed236 = ![], _0x1c8e66 = _0x471e50, _0x2a9298 = 0x0;
                for (; _0x1c8e66 < _0xa468cb; _0x1c8e66++) {
                    var _0x578316 = _0xb73751['charCodeAt'](_0x1c8e66);
                    if (_0x578316 >>> 0xb == 0x1b) {
                        if (_0x2a9298 == 0x1)
                            break;
                        _0x2a9298 = 0x1, _0x1c8e66++;
                    } else {
                        if (_0x578316 === 0xfe0e || _0x578316 === 0xfe0f) {
                        } else {
                            if (_0x578316 == 0x200d)
                                _0x2a9298 = 0x2;
                            else {
                                if (_0x2a9298 == 0x0)
                                    _0x2a9298 = 0x1;
                                else {
                                    if (_0x2a9298 == 0x1)
                                        break;
                                    else {
                                        if (_0x2a9298 == 0x2) {
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return this['_curStrPos'] = _0x1c8e66, _0xb73751['substring'](_0x471e50, _0x1c8e66);
            }, _0x3b1359['hasFreedTe' + 'xt'] = function (_0x313a34, _0x1b0045) {
                if (_0x313a34 && _0x313a34['length'] > 0x0)
                    for (var _0x17c3d3 = _0x1b0045, _0x57853f = _0x313a34['length']; _0x17c3d3 < _0x57853f; _0x17c3d3++) {
                        var _0x493f55 = _0x313a34[_0x17c3d3];
                        if (!_0x493f55)
                            continue;
                        for (var _0x7d9ca0 = 0x0, _0x4d462b = _0x493f55['length']; _0x7d9ca0 < _0x4d462b; _0x7d9ca0++) {
                            var _0x41f1fb = _0x493f55[_0x7d9ca0]['ri'];
                            if (_0x41f1fb['deleted'] || _0x41f1fb['tex']['__destroye' + 'd'])
                                return !![];
                        }
                    }
                return ![];
            }, _0x3b1359['_fast_fill' + 'text'] = function (_0x5c80f3, _0x1c3df8, _0x570e97, _0x2c0233, _0x22d880, _0x3bda67, _0x5cfd77, _0x50a887, _0x34d824, _0x2314e8, _0x58e3c9) {
                _0x58e3c9 === void 0x0 && (_0x58e3c9 = 0x0);
                if (_0x1c3df8 && _0x1c3df8['length'] < 0x1)
                    return;
                if (_0x570e97 && _0x570e97['length'] < 0x1)
                    return;
                _0x2f211f['_curFont'] = _0x3bda67['_font'], this['fontScaleX'] = this['fontScaleY'] = 0x1;
                if (_0x2f211f['scaleFontW' + 'ithCtx']) {
                    var _0x359b7d = _0x5c80f3['getMatScal' + 'eX'](), _0x24ec02 = _0x5c80f3['getMatScal' + 'eY']();
                    if (_0x359b7d < 0.0001 || _0x24ec02 < 0.1)
                        return;
                    if (_0x359b7d > 0x1)
                        this['fontScaleX'] = _0x359b7d;
                    if (_0x24ec02 > 0x1)
                        this['fontScaleY'] = _0x24ec02;
                }
                _0x3bda67['_italic'] && (_0x5c80f3['_italicDeg'] = 0xc), this['_curPage'] = this['selectFont'](_0x3bda67['_family'], _0x3bda67['_size']);
                var _0x3ae27e = _0x2c0233, _0x534080 = _0x1c3df8, _0x2302de = _0x1c3df8, _0x597d19 = 0x0, _0xa80151 = !_0x570e97 && _0x1c3df8 instanceof laya['utils']['WordText'], _0x26b93e = !!_0x570e97, _0x473a93 = _0x2f211f['cacheRende' + 'rInfoInWor' + 'dText'] && _0xa80151 ? _0x534080['pageChars'] : [];
                _0xa80151 ? (_0x2302de = _0x534080['_text'], _0x597d19 = _0x534080['width'], _0x597d19 < 0x0 && (_0x597d19 = _0x534080['width'] = this['_curPage']['getWidth'](_0x2302de))) : _0x597d19 = _0x2302de ? this['_curPage']['getWidth'](_0x2302de) : 0x0;
                switch (_0x2314e8) {
                case _0x3ed815['ENUM_TEXTA' + 'LIGN_CENTE' + 'R']:
                    _0x3ae27e = _0x2c0233 - _0x597d19 / 0x2;
                    break;
                case _0x3ed815['ENUM_TEXTA' + 'LIGN_RIGHT']:
                    _0x3ae27e = _0x2c0233 - _0x597d19;
                    break;
                default:
                    _0x3ae27e = _0x2c0233;
                }
                _0x534080 && _0x534080['lastGCCnt'] != this['_curPage']['gcCnt'] && (_0x534080['lastGCCnt'] = this['_curPage']['gcCnt'], this['hasFreedTe' + 'xt'](_0x473a93, _0x534080['startID']) && (_0x473a93 = _0x534080['pageChars'] = []));
                ;
                var _0x3229ee = _0xa80151 ? _0x534080['startID'] : 0x0, _0x2cfebf = _0xa80151 ? _0x534080['startIDStr' + 'oke'] : 0x0;
                if (!_0x473a93 || _0x473a93['length'] < 0x1) {
                    var _0x55a05d = null;
                    if (_0x2f211f['scaleFontW' + 'ithCtx']) {
                        _0x2952e3['charRender']['scale'](Math['max'](this['fontScaleX'], 0x1), Math['max'](this['fontScaleY'], 0x1));
                        if (this['fontScaleX'] > 0x1 || this['fontScaleY'] > 0x1)
                            _0x55a05d = '' + (this['fontScaleX'] * 0xa | 0x0) + (this['fontScaleY'] * 0xa | 0x0);
                    }
                    _0x3229ee = -0x1, _0x2cfebf = -0x1;
                    var _0x208b8d = 0x0, _0x8ce244 = 0x0;
                    this['_curStrPos'] = 0x0;
                    var _0x2d5ba8;
                    if (_0x26b93e) {
                        var _0x3362ef = _0x570e97[this['_curStrPos']++];
                        _0x2d5ba8 = _0x3362ef['char'], _0x208b8d = _0x3362ef['x'], _0x8ce244 = _0x3362ef['y'];
                    } else
                        _0x2d5ba8 = this['getNextCha' + 'r'](_0x2302de);
                    ;
                    var _0x2469b4 = _0x3bda67['_bold'];
                    while (_0x2d5ba8) {
                        var _0x131713;
                        _0x131713 = this['_curPage']['getChar'](_0x2d5ba8, _0x34d824, _0x3bda67['_size'], _0x5cfd77, _0x50a887, _0x2469b4, ![], _0x55a05d);
                        if (!_0x131713)
                            break;
                        _0x131713['char'] = _0x2d5ba8;
                        if (_0x131713['isSpace']) {
                        } else {
                            var _0x444308 = _0x473a93[_0x131713['tex']['id']];
                            if (!_0x444308) {
                                _0x473a93[_0x131713['tex']['id']] = _0x444308 = [];
                                if (_0x3229ee < 0x0 || _0x3229ee > _0x131713['tex']['id'])
                                    _0x3229ee = _0x131713['tex']['id'];
                            }
                            _0x444308['push']({
                                'ri': _0x131713,
                                'x': _0x208b8d,
                                'y': _0x8ce244,
                                'w': _0x131713['bmpWidth'] / this['fontScaleX'],
                                'h': _0x131713['bmpHeight'] / this['fontScaleY']
                            });
                        }
                        _0x26b93e ? (_0x3362ef = _0x570e97[this['_curStrPos']++], _0x3362ef ? (_0x2d5ba8 = _0x3362ef['char'], _0x208b8d = _0x3362ef['x'], _0x8ce244 = _0x3362ef['y']) : _0x2d5ba8 = null) : (_0x2d5ba8 = this['getNextCha' + 'r'](_0x2302de), _0x208b8d += _0x131713['width']);
                    }
                    _0xa80151 && (_0x534080['startID'] = _0x3229ee, _0x534080['startIDStr' + 'oke'] = _0x2cfebf);
                }
                this['_drawResor' + 'tedWords'](_0x5c80f3, _0x3ae27e, _0x473a93, _0x3229ee, _0x22d880), _0x5c80f3['_italicDeg'] = 0x0;
            }, _0x3b1359['fillWords'] = function (_0xea097, _0x109103, _0x3b5190, _0xaa39a3, _0x54574e, _0x56237b, _0x2813c5, _0x580428) {
                if (!_0x109103)
                    return;
                if (_0x109103['length'] <= 0x0)
                    return;
                var _0x169e80 = _0x4b1f30['create'](_0x56237b)['numColor'], _0x577730 = _0x2813c5 ? _0x4b1f30['create'](_0x2813c5)['numColor'] : 0x0;
                _0x2f211f['_curFont'] = _0x54574e;
                var _0x3fe5ff = _0x2adb5b['Parse'](_0x54574e);
                this['_fast_fill' + 'text'](_0xea097, null, _0x109103, _0x3b5190, _0xaa39a3, _0x3fe5ff, _0x56237b, _0x2813c5, _0x580428, 0x0, 0x0);
            }, _0x3b1359['filltext'] = function (_0x4f2aa5, _0x15ef47, _0x40df36, _0x2b95d9, _0x5687fc, _0x4988c4, _0x2aa0dc, _0x2f796d, _0x2db694, _0x27cbb7) {
                _0x27cbb7 === void 0x0 && (_0x27cbb7 = 0x0);
                if (_0x15ef47['length'] <= 0x0)
                    return;
                var _0x3c15d7 = _0x4b1f30['create'](_0x4988c4)['numColor'], _0x1f8748 = _0x2aa0dc ? _0x4b1f30['create'](_0x2aa0dc)['numColor'] : 0x0;
                _0x2f211f['_curFont'] = _0x5687fc;
                var _0x42f3e5 = _0x2adb5b['Parse'](_0x5687fc), _0x4c5d1a = 0x0;
                switch (_0x2db694) {
                case 'center':
                    _0x4c5d1a = _0x3ed815['ENUM_TEXTA' + 'LIGN_CENTE' + 'R'];
                    break;
                case 'right':
                    _0x4c5d1a = _0x3ed815['ENUM_TEXTA' + 'LIGN_RIGHT'];
                    break;
                }
                this['_fast_fill' + 'text'](_0x4f2aa5, _0x15ef47, null, _0x40df36, _0x2b95d9, _0x42f3e5, _0x4988c4, _0x2aa0dc, _0x2f796d, _0x4c5d1a, _0x27cbb7);
            }, _0x3b1359['filltext_n' + 'ative'] = function (_0x2c0724, _0x1ab9bf, _0x1a3ad6, _0x2cdfbf, _0x50a971, _0x5428b4, _0x5454f0, _0x3c1835, _0x3ca233, _0x24fc46, _0x1be45c) {
                _0x1be45c === void 0x0 && (_0x1be45c = 0x0);
                if (_0x1ab9bf && _0x1ab9bf['length'] <= 0x0)
                    return;
                var _0x786f0c = _0x4b1f30['create'](_0x5454f0)['numColor'], _0x3de61c = _0x3c1835 ? _0x4b1f30['create'](_0x3c1835)['numColor'] : 0x0;
                _0x2f211f['_curFont'] = _0x5428b4, this['fontScaleX'] = this['fontScaleY'] = 0x1;
                if (_0x2f211f['scaleFontW' + 'ithCtx']) {
                    var _0x542258 = _0x2c0724['_curMat']['getScaleX'](), _0x156566 = _0x2c0724['_curMat']['getScaleY']();
                    if (_0x542258 < 0.0001 || _0x156566 < 0.1)
                        return;
                    this['fontScaleX'] = _0x542258, this['fontScaleY'] = _0x156566, _0x2952e3['charRender']['scale'](this['fontScaleX'], this['fontScaleY']);
                }
                ;
                var _0x569c02 = _0x2adb5b['Parse'](_0x5428b4), _0x94a259 = _0x569c02['_family'], _0x20abb4 = _0x569c02['_bold'];
                _0x569c02['_italic'] && (_0x2c0724['_italicDeg'] = 0xc);
                this['_curPage'] = this['selectFont'](_0x94a259, _0x569c02['_size'] * this['fontScaleX']);
                var _0x1cfcc8 = _0x2cdfbf, _0x3a15f5 = _0x1ab9bf, _0xe68e11 = _0x1ab9bf, _0x2a7fbc = 0x0, _0x54d74f = !_0x1a3ad6 && _0xe68e11 instanceof laya['utils']['WordText'], _0x39db53 = !!_0x1a3ad6, _0x2a9e94 = _0x2f211f['cacheRende' + 'rInfoInWor' + 'dText'] && _0x54d74f ? _0x3a15f5['pageChars'] : [];
                _0x54d74f ? (_0xe68e11 = _0x3a15f5['toString'](), _0x2a7fbc = _0x3a15f5['width'], _0x2a7fbc < 0x0 && (_0x2a7fbc = _0x3a15f5['width'] = this['_curPage']['getWidth'](_0xe68e11))) : _0x2a7fbc = this['_curPage']['getWidth'](_0xe68e11);
                switch (_0x24fc46) {
                case 'center':
                    _0x1cfcc8 = _0x2cdfbf - _0x2a7fbc / 0x2;
                    break;
                case 'right':
                    _0x1cfcc8 = _0x2cdfbf - _0x2a7fbc;
                    break;
                default:
                    _0x1cfcc8 = _0x2cdfbf;
                }
                if (_0x2a9e94) {
                    var _0x347658 = ![];
                    for (var _0x9e7976 = 0x0, _0x894140 = _0x2a9e94['length']; _0x9e7976 < _0x894140; _0x9e7976++) {
                        var _0x3e5532 = _0x2a9e94[_0x9e7976];
                        if (!_0x3e5532)
                            continue;
                        for (var _0x6877eb = 0x0, _0x19ea53 = _0x3e5532['length']; _0x6877eb < _0x19ea53; _0x6877eb++) {
                            var _0xec08a5 = _0x3e5532[_0x6877eb];
                            if (_0xec08a5['ri']['tex']['__destroye' + 'd']) {
                                _0x347658 = !![];
                                break;
                            }
                        }
                        if (_0x347658)
                            break;
                    }
                    if (_0x347658)
                        _0x2a9e94 = _0x3a15f5['pageChars'] = [];
                }
                if (!_0x2a9e94 || _0x2a9e94['length'] <= 0x0) {
                    var _0x493e82 = null;
                    if (_0x2f211f['scaleFontW' + 'ithCtx']) {
                        _0x2952e3['charRender']['scale'](Math['max'](this['fontScaleX'], 0x1), Math['max'](this['fontScaleY'], 0x1));
                        if (this['fontScaleX'] > 0x1 || this['fontScaleY'] > 0x1)
                            _0x493e82 = '' + (this['fontScaleX'] * 0xa | 0x0) + (this['fontScaleY'] * 0xa | 0x0);
                    }
                    ;
                    var _0x4dbdb0 = 0x0, _0x934885 = 0x0;
                    this['_curStrPos'] = 0x0;
                    var _0x57803b;
                    if (_0x39db53) {
                        var _0xcb2d97 = _0x1a3ad6[this['_curStrPos']++];
                        _0x57803b = _0xcb2d97['char'], _0x4dbdb0 = _0xcb2d97['x'], _0x934885 = _0xcb2d97['y'];
                    } else
                        _0x57803b = this['getNextCha' + 'r'](_0xe68e11);
                    _0x20abb4 = _0x569c02['_bold'];
                    while (_0x57803b) {
                        var _0x3aef8d;
                        _0x3aef8d = this['_curPage']['getChar'](_0x57803b, _0x3ca233, _0x569c02['_size'], _0x5454f0, _0x3c1835, _0x20abb4, ![], _0x493e82);
                        if (_0x3aef8d['isSpace']) {
                        } else {
                            var _0x2f0637 = _0x2a9e94[_0x3aef8d['tex']['id']];
                            !_0x2f0637 && (_0x2a9e94[_0x3aef8d['tex']['id']] = _0x2f0637 = []), _0x2f0637['push']({
                                'ri': _0x3aef8d,
                                'x': _0x4dbdb0,
                                'y': _0x934885,
                                'color': _0x5454f0,
                                'nColor': _0x786f0c
                            });
                        }
                        _0x39db53 ? (_0xcb2d97 = _0x1a3ad6[this['_curStrPos']++], _0xcb2d97 ? (_0x57803b = _0xcb2d97['char'], _0x4dbdb0 = _0xcb2d97['x'], _0x934885 = _0xcb2d97['y']) : _0x57803b = null) : (_0x4dbdb0 += _0x3aef8d['width'], _0x57803b = this['getNextCha' + 'r'](_0xe68e11));
                    }
                }
                ;
                var _0x5ba66e = _0x2c0724['_drawTextu' + 'reUseColor'];
                this['_drawResor' + 'tedWords_n' + 'ative'](_0x2c0724, _0x1cfcc8, _0x2a9e94, _0x50a971), _0x2c0724['_drawTextu' + 'reUseColor'] = _0x5ba66e, _0x2c0724['_italicDeg'] = 0x0;
            }, _0x3b1359['_drawResor' + 'tedWords'] = function (_0x14a001, _0x54aafa, _0x176fdf, _0xd06202, _0x397480) {
                var _0x706cd5 = _0x14a001['getFillCol' + 'or']();
                _0x14a001['setFillCol' + 'or'](_0x14a001['mixRGBandA' + 'lpha'](0xffffff)), _0x54aafa -= this['_curPage']['margin_lef' + 't'], _0x397480 -= this['_curPage']['margin_top'];
                var _0x59e5e3 = _0x14a001['_charSubmi' + 'tCache']['_enbale'];
                for (var _0x3a69ff = _0xd06202, _0x2d0622 = _0x176fdf['length']; _0x3a69ff < _0x2d0622; _0x3a69ff++) {
                    var _0x219364 = _0x176fdf[_0x3a69ff];
                    if (!_0x219364)
                        continue;
                    var _0x148f72 = _0x219364['length'];
                    if (_0x148f72 <= 0x0)
                        continue;
                    for (var _0x24c037 = 0x0; _0x24c037 < _0x148f72; _0x24c037++) {
                        var _0x15d43d = _0x219364[_0x24c037], _0xa46add = _0x15d43d['ri'];
                        if (_0xa46add['isSpace'])
                            continue;
                        _0xa46add['touch'](), _0x14a001['drawTexAli' + 'gn'] = !![], _0x14a001['_inner_dra' + 'wTexture'](_0xa46add['tex']['texture'], _0xa46add['tex']['texture']['bitmap']['id'], _0x54aafa + _0x15d43d['x'], _0x397480 + _0x15d43d['y'], _0x15d43d['w'], _0x15d43d['h'], null, _0xa46add['uv'], 0x1, _0x59e5e3), _0x14a001['touches'] && _0x14a001['touches']['push'](_0xa46add);
                    }
                }
                _0x14a001['setFillCol' + 'or'](_0x706cd5);
            }, _0x3b1359['_drawResor' + 'tedWords_n' + 'ative'] = function (_0x4cd6f2, _0x4daaf4, _0x2eba8d, _0x4a1c10) {
                var _0x4b92c3 = 0x0;
                for (var _0x11f273 = 0x0, _0x30e0e1 = _0x2eba8d['length']; _0x11f273 < _0x30e0e1; _0x11f273++) {
                    var _0x59e5d2 = _0x2eba8d[_0x11f273];
                    if (!_0x59e5d2)
                        continue;
                    for (var _0xd54f1 = 0x0, _0x1d3bba = _0x59e5d2['length']; _0xd54f1 < _0x1d3bba; _0xd54f1++) {
                        var _0x51220e = _0x59e5d2[_0xd54f1], _0x1efa43 = _0x51220e['ri'];
                        if (_0x1efa43['isSpace'])
                            continue;
                        _0x4cd6f2['_drawTextu' + 'reUseColor'] = ![], _0x4b92c3 != _0x51220e['nColor'] && (_0x4cd6f2['fillStyle'] = _0x51220e['color'], _0x4b92c3 = _0x51220e['nColor']), _0x1efa43['touch'](), this['_drawCharR' + 'enderInfo'](_0x4cd6f2, _0x51220e['ri'], _0x4daaf4 + _0x51220e['x'], _0x51220e['y'] + _0x4a1c10);
                    }
                }
            }, _0x3b1359['_drawCharR' + 'enderInfo'] = function (_0xa638f6, _0x57dde5, _0x6b4c50, _0x4f95dc) {
                _0xa638f6['_drawTextu' + 'reM'](_0x57dde5['tex']['texture'], _0x6b4c50 - this['_curPage']['margin_lef' + 't'], _0x4f95dc - this['_curPage']['margin_top'], _0x57dde5['bmpWidth'], _0x57dde5['bmpHeight'], null, 0x1, _0x57dde5['uv']), _0xa638f6['touches'] && _0xa638f6['touches']['push'](_0x57dde5);
            }, _0x3b1359['listPages'] = function () {
                var _0x467de3 = this;
                console['log']('打印所有页的信息:'), this['fontPages']['forEach'](function (_0x23051f, _0x5e9272) {
                    var _0x1c947c = _0x467de3['fontPagesN' + 'ame'][_0x5e9272], _0x263897 = parseInt(_0x1c947c['substr'](_0x23051f['fontFamily']['length'])) * _0x2f211f['gridSize'];
                    console['log']('==========' + '==========' + '==========' + '====='), console['log']('名字:', _0x467de3['fontPagesN' + 'ame'][_0x5e9272], '大小范围:', _0x263897, _0x263897 + _0x2f211f['gridSize']), _0x23051f['printPages' + 'Info']();
                });
            }, _0x3b1359['GC'] = function (_0xb171a2) {
                var _0x2b1cb3 = 0x0, _0x4608b0 = this['fontPages']['length'];
                this['fontPages']['forEach'](function (_0x49b340) {
                    _0x49b340['removeLRU']();
                });
            }, _0x2f211f['textureWid' + 'th'] = 0x200, _0x2f211f['cacheRende' + 'rInfoInWor' + 'dText'] = !![], _0x2f211f['scaleFontW' + 'ithCtx'] = !![], _0x2f211f['gridSize'] = 0x10, _0x2f211f['debug'] = ![], _0x2f211f['_curFont'] = null, _0x2f211f['charbookIn' + 'st'] = null, _0x2f211f['_fontMem'] = 0x0, _0x2f211f['_lastFont'] = null, _0x2f211f['_lastFontS' + 'z'] = 0x0, _0x2f211f['_lastCharP' + 'age'] = null, _0x2f211f['isWan1Wan'] = ![], _0x3a2911(_0x2f211f, [
                '_uint32',
                function () {
                    return this['_uint32'] = new Uint32Array(0x1);
                },
                'trash',
                function () {
                    return this['trash'] = new _0x15daa5(_0x2f211f['textureWid' + 'th']);
                }
            ]), _0x2f211f['__init$'] = function () {
                _0x15daa5 = function () {
                    function _0x196315(_0x2874f6) {
                        this['poolLen'] = 0x0, this['cleanTm'] = 0x0, this['texW'] = 0x0, this['pool'] = new Array(0xa), this['texW'] = _0x2874f6;
                    }
                    _0x199b5b(_0x196315, '');
                    var _0x2fb45e = _0x196315['prototype'];
                    return _0x2fb45e['getAPage'] = function (_0x43bdd9) {
                        if (this['poolLen'] > 0x0) {
                            var _0x21ff05 = this['pool'][--this['poolLen']];
                            _0x21ff05['setGridNum'](_0x43bdd9);
                            if (this['poolLen'] > 0x0)
                                this['clean']();
                            return _0x21ff05;
                        }
                        return new _0x15e4ba(this['texW'], this['texW'], _0x43bdd9);
                    }, _0x2fb45e['discardPag' + 'e'] = function (_0x3c72f8) {
                        this['clean']();
                        if (!_0x3c72f8)
                            return;
                        _0x3c72f8['genID']++, this['poolLen'] >= this['pool']['length'] && (this['pool'] = this['pool']['concat'](new Array(0xa))), _0x3c72f8['reset'](), this['pool'][this['poolLen']++] = _0x3c72f8;
                    }, _0x2fb45e['clean'] = function () {
                        var _0x275bc8 = _0x4a6519['stage']['getFrameTm']();
                        if (this['cleanTm'] === 0x0)
                            this['cleanTm'] = _0x275bc8;
                        if (_0x275bc8 - this['cleanTm'] > 0x7530) {
                            for (var _0x2617c3 = 0x0; _0x2617c3 < this['poolLen']; _0x2617c3++) {
                                var _0x3ad276 = this['pool'][_0x2617c3];
                                _0x275bc8 - _0x3ad276['_discardTm'] > 0x4e20 && (_0x3ad276['destroy'](), this['pool'][_0x2617c3] = this['pool'][this['poolLen'] - 0x1], this['poolLen']--, _0x2617c3--);
                            }
                            this['cleanTm'] = _0x275bc8;
                        }
                    }, _0x196315;
                }();
            }, _0x2f211f;
        }(), _0x4f1d6e = function () {
            function _0x3acfea() {
                this['fun'] = null, this['_this'] = null, this['args'] = null, this['_ref'] = 0x1, this['_key'] = new _0x2e7190();
            }
            _0x199b5b(_0x3acfea, 'laya.webgl' + '.submit.Su' + 'bmitCMD');
            var _0x130278 = _0x3acfea['prototype'];
            return _0x4a6519['imps'](_0x130278, { 'laya.webgl.submit.ISubmit': !![] }), _0x130278['renderSubm' + 'it'] = function () {
                return this['fun']['apply'](this['_this'], this['args']), 0x1;
            }, _0x130278['getRenderT' + 'ype'] = function () {
                return 0x0;
            }, _0x130278['reUse'] = function (_0x58db05, _0x422bec) {
                return this['_ref']++, _0x422bec;
            }, _0x130278['releaseRen' + 'der'] = function () {
                if (--this['_ref'] < 0x1) {
                    var _0x46dd77 = _0x3acfea['POOL'];
                    _0x46dd77[_0x46dd77['_length']++] = this;
                }
            }, _0x130278['clone'] = function (_0x3a513a, _0x479786, _0x1d2519) {
                return null;
            }, _0x3acfea['create'] = function (_0x202b1a, _0x2c3132, _0x433f72) {
                var _0x721e50 = _0x3acfea['POOL']['_length'] ? _0x3acfea['POOL'][--_0x3acfea['POOL']['_length']] : new _0x3acfea();
                return _0x721e50['fun'] = _0x2c3132, _0x721e50['args'] = _0x202b1a, _0x721e50['_this'] = _0x433f72, _0x721e50['_ref'] = 0x1, _0x721e50['_key']['clear'](), _0x721e50;
            }, _0x3acfea['POOL'] = (_0x3acfea['POOL'] = [], _0x3acfea['POOL']['_length'] = 0x0, _0x3acfea['POOL']), _0x3acfea;
        }(), _0x95fe16 = function () {
            function _0x4a7099() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_points'] = null, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_vid'] = 0x0, this['_vertNum'] = 0x0, this['ibBuffer'] = null, this['vbBuffer'] = null, this['_ibSize'] = 0x0, this['_vbSize'] = 0x0, this['_ibArray'] = [], this['_vbArray'] = [];
            }
            _0x199b5b(_0x4a7099, 'laya.layag' + 'l.cmdNativ' + 'e.DrawLine' + 'sCmdNative');
            var _0x49749b = _0x4a7099['prototype'];
            return _0x49749b['recover'] = function () {
                this['_points'] = null, this['_lineColor'] = null, this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x5460aa['recover']('DrawLinesC' + 'md', this);
            }, _0x3a2bd3(0x0, _0x49749b, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0xc5e125) {
                this['_lineColor'] = _0xc5e125;
                var _0xd1550e = _0x4b1f30['create'](this['_lineColor']), _0x3ba7f7 = _0xd1550e['numColor'], _0x37ae5b = this['vbBuffer']['_int32Data'], _0x578573 = 0x0;
                for (var _0x57b322 = 0x0; _0x57b322 < this['_vertNum']; _0x57b322++) {
                    _0x578573++, _0x578573++, _0x37ae5b[_0x578573++] = _0x3ba7f7;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x49749b, 'points', function () {
                return this['_points'];
            }, function (_0x5ba341) {
                this['_points'] = _0x5ba341, this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x2fe41e['createLine' + '2'](this['_points'], this['_ibArray'], this['_lineWidth'], 0x0, this['_vbArray'], ![]);
                var _0x39c371 = _0x4b1f30['create'](this['_lineColor']), _0x1c21b6 = _0x39c371['numColor'];
                this['_vertNum'] = this['_points']['length'];
                var _0xb06782 = this['_vertNum'];
                (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['vbBuffer'] = new ParamData(_0xb06782 * 0x3 * 0x4, !![]));
                this['_vbSize'] = this['_vertNum'] * 0x3 * 0x4;
                var _0x3542f0 = this['vbBuffer']['_float32Da' + 'ta'], _0x15af6d = this['vbBuffer']['_int32Data'], _0x2e3230 = 0x0;
                for (var _0x50cc22 = 0x0; _0x50cc22 < this['_vertNum']; _0x50cc22++) {
                    _0x3542f0[_0x2e3230++] = this['_vbArray'][_0x50cc22 * 0x2] + this['x'], _0x3542f0[_0x2e3230++] = this['_vbArray'][_0x50cc22 * 0x2 + 0x1] + this['y'], _0x15af6d[_0x2e3230++] = _0x1c21b6;
                }
                (!this['ibBuffer'] || this['ibBuffer']['getByteLen' + 'gth']() < (this['_vertNum'] - 0x2) * 0x3 * 0x2) && (this['ibBuffer'] = new ParamData((_0xb06782 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_ibSize'] = (this['_vertNum'] - 0x2) * 0x3 * 0x2;
                var _0x27e781 = this['ibBuffer']['_int16Data'];
                for (var _0x4a4844 = 0x0; _0x4a4844 < (this['_vertNum'] - 0x2) * 0x3; _0x4a4844++) {
                    _0x27e781[_0x4a4844] = this['_ibArray'][_0x4a4844];
                }
                _0x15af6d = this['_paramData']['_int32Data'], _0x15af6d[_0x4a7099['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x15af6d[_0x4a7099['_PARAM_IB_' + 'SIZE_POS_']] = this['_ibSize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x49749b, 'cmdID', function () {
                return 'DrawLines';
            }), _0x3a2bd3(0x0, _0x49749b, 'x', function () {
                return this['_x'];
            }, function (_0x53935f) {
                this['_x'] = _0x53935f;
                var _0x1fd160 = this['vbBuffer']['_float32Da' + 'ta'], _0x42b2d4 = 0x0;
                for (var _0x2d5190 = 0x0; _0x2d5190 < this['_vertNum']; _0x2d5190++) {
                    _0x1fd160[_0x42b2d4++] = this['_vbArray'][_0x2d5190 * 0x2] + this['_x'], _0x42b2d4++, _0x42b2d4++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x49749b, 'vid', function () {
                return this['_vid'];
            }, function (_0xfb9130) {
                this['_vid'] = _0xfb9130;
            }), _0x3a2bd3(0x0, _0x49749b, 'y', function () {
                return this['_y'];
            }, function (_0x2a9bb9) {
                this['_y'] = _0x2a9bb9;
                var _0x5358fe = this['vbBuffer']['_float32Da' + 'ta'], _0x33907e = 0x0;
                for (var _0x1d587e = 0x0; _0x1d587e < this['_vertNum']; _0x1d587e++) {
                    _0x33907e++, _0x5358fe[_0x33907e++] = this['_vbArray'][_0x1d587e * 0x2 + 0x1] + this['_y'], _0x33907e++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x49749b, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0xd61576) {
                this['_lineWidth'] = _0xd61576, this['_ibArray']['length'] = 0x0, this['_vbArray']['length'] = 0x0, _0x2fe41e['createLine' + '2'](this['_points'], this['_ibArray'], this['_lineWidth'], 0x0, this['_vbArray'], ![]);
                var _0x50c5c8 = this['vbBuffer']['_float32Da' + 'ta'], _0xf31bce = 0x0;
                for (var _0x4c4b1f = 0x0; _0x4c4b1f < this['_vertNum']; _0x4c4b1f++) {
                    _0x50c5c8[_0xf31bce++] = this['_vbArray'][_0x4c4b1f * 0x2] + this['x'], _0x50c5c8[_0xf31bce++] = this['_vbArray'][_0x4c4b1f * 0x2 + 0x1] + this['y'], _0xf31bce++;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x4a7099['create'] = function (_0x3b2dae, _0x3f6d7c, _0x55ae9a, _0x2284a1, _0x1eefe1, _0x5f1078) {
                var _0xe1363d = _0x5460aa['getItemByC' + 'lass']('DrawLinesC' + 'md', _0x4a7099);
                _0xe1363d['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] && (_0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x98, 0x20, !![]), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['setMeshExB' + 'yParamData'](_0x4a7099['_PARAM_VB_' + 'POS_'] * 0x4, _0x4a7099['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x4a7099['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x4a7099['_PARAM_IB_' + 'POS_'] * 0x4, _0x4a7099['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x4a7099['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x4a7099['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']));
                !_0xe1363d['_paramData'] && (_0xe1363d['_paramData'] = new ParamData(0xb * 0x4, !![]));
                {
                    _0xe1363d['_x'] = _0x3b2dae, _0xe1363d['_y'] = _0x3f6d7c, _0xe1363d['_points'] = _0x55ae9a, _0xe1363d['_lineColor'] = _0x2284a1, _0xe1363d['_lineWidth'] = _0x1eefe1, _0xe1363d['_vid'] = _0x5f1078, _0x2fe41e['createLine' + '2'](_0x55ae9a, _0xe1363d['_ibArray'], _0x1eefe1, 0x0, _0xe1363d['_vbArray'], ![]);
                    var _0x37c1c3 = _0x4b1f30['create'](_0x2284a1), _0x1c45d1 = _0x37c1c3['numColor'];
                    _0xe1363d['_vertNum'] = _0x55ae9a['length'];
                    var _0x3ae0ed = _0xe1363d['_vertNum'];
                    (!_0xe1363d['vbBuffer'] || _0xe1363d['vbBuffer']['getByteLen' + 'gth']() < _0xe1363d['_vertNum'] * 0x3 * 0x4) && (_0xe1363d['vbBuffer'] = new ParamData(_0x3ae0ed * 0x3 * 0x4, !![]));
                    _0xe1363d['_vbSize'] = _0xe1363d['_vertNum'] * 0x3 * 0x4;
                    var _0xb7fa90 = _0xe1363d['vbBuffer']['_float32Da' + 'ta'], _0x13dffb = _0xe1363d['vbBuffer']['_int32Data'], _0x4376f3 = 0x0;
                    for (var _0x51e301 = 0x0; _0x51e301 < _0xe1363d['_vertNum']; _0x51e301++) {
                        _0xb7fa90[_0x4376f3++] = _0xe1363d['_vbArray'][_0x51e301 * 0x2] + _0x3b2dae, _0xb7fa90[_0x4376f3++] = _0xe1363d['_vbArray'][_0x51e301 * 0x2 + 0x1] + _0x3f6d7c, _0x13dffb[_0x4376f3++] = _0x1c45d1;
                    }
                    (!_0xe1363d['ibBuffer'] || _0xe1363d['ibBuffer']['getByteLen' + 'gth']() < (_0xe1363d['_vertNum'] - 0x2) * 0x3 * 0x2) && (_0xe1363d['ibBuffer'] = new ParamData((_0x3ae0ed - 0x2) * 0x3 * 0x2, !![], !![]));
                    _0xe1363d['_ibSize'] = (_0xe1363d['_vertNum'] - 0x2) * 0x3 * 0x2;
                    var _0x4e0389 = _0xe1363d['ibBuffer']['_int16Data'];
                    for (var _0x394efb = 0x0; _0x394efb < (_0xe1363d['_vertNum'] - 0x2) * 0x3; _0x394efb++) {
                        _0x4e0389[_0x394efb] = _0xe1363d['_ibArray'][_0x394efb];
                    }
                }
                ;
                var _0xdfa04c = _0xe1363d['_paramData']['_float32Da' + 'ta'];
                return _0x13dffb = _0xe1363d['_paramData']['_int32Data'], _0x13dffb[0x0] = 0x1, _0x13dffb[_0x4a7099['_PARAM_VB_' + 'POS_']] = _0xe1363d['vbBuffer']['getPtrID'](), _0x13dffb[_0x4a7099['_PARAM_IB_' + 'POS_']] = _0xe1363d['ibBuffer']['getPtrID'](), !_0x2284a1 ? _0xdfa04c[_0x4a7099['_PARAM_LIN' + 'ECOLOR_POS' + '_']] = 0xff0000ff : _0xdfa04c[_0x4a7099['_PARAM_LIN' + 'ECOLOR_POS' + '_']] = _0x2284a1, _0xdfa04c[_0x4a7099['_PARAM_LIN' + 'EWIDTH_POS' + '_']] = _0x1eefe1, _0xdfa04c[_0x4a7099['_PARAM_VID' + '_POS_']] = _0x5f1078, _0x13dffb[_0x4a7099['_PARAM_VB_' + 'SIZE_POS_']] = _0xe1363d['_vbSize'], _0x13dffb[_0x4a7099['_PARAM_IB_' + 'SIZE_POS_']] = _0xe1363d['_ibSize'], _0x13dffb[_0x4a7099['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x13dffb[_0x4a7099['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x13dffb[_0x4a7099['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xe1363d['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xe1363d['ibBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xe1363d['_paramData']), _0xe1363d['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_']['getPtrID'](), _0xe1363d['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0xe1363d['_graphicsC' + 'mdEncoder']), _0xe1363d;
            }, _0x4a7099['ID'] = 'DrawLines', _0x4a7099['_DRAW_LINE' + 'S_CMD_ENCO' + 'DER_'] = null, _0x4a7099['_PARAM_VB_' + 'POS_'] = 0x1, _0x4a7099['_PARAM_IB_' + 'POS_'] = 0x2, _0x4a7099['_PARAM_LIN' + 'ECOLOR_POS' + '_'] = 0x3, _0x4a7099['_PARAM_LIN' + 'EWIDTH_POS' + '_'] = 0x4, _0x4a7099['_PARAM_VID' + '_POS_'] = 0x5, _0x4a7099['_PARAM_VB_' + 'SIZE_POS_'] = 0x6, _0x4a7099['_PARAM_IB_' + 'SIZE_POS_'] = 0x7, _0x4a7099['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0x8, _0x4a7099['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0x9, _0x4a7099['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0xa, _0x4a7099;
        }(), _0x1b1a74 = function () {
            function _0x3986c5() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_index'] = 0x0, this['_paramData'] = null, this['_texture'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_width'] = NaN, this['_height'] = NaN;
            }
            _0x199b5b(_0x3986c5, 'laya.layag' + 'l.cmdNativ' + 'e.DrawImag' + 'eCmdNative');
            var _0xbc44b1 = _0x3986c5['prototype'];
            return _0xbc44b1['recover'] = function () {
                this['_texture']['_removeRef' + 'erence'](), this['_texture'] = null, this['_graphicsC' + 'mdEncoder'] = null, _0x5460aa['recover']('DrawImageC' + 'md', this);
            }, _0x3a2bd3(0x0, _0xbc44b1, 'cmdID', function () {
                return 'DrawImage';
            }), _0x3a2bd3(0x0, _0xbc44b1, 'y', function () {
                return this['_y'];
            }, function (_0x53fd66) {
                this['_y'] = _0x53fd66;
                var _0x46b5be = this['_paramData']['_float32Da' + 'ta'];
                _0x46b5be[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x46b5be[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x46b5be[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x46b5be[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xbc44b1, 'texture', function () {
                return this['_texture'];
            }, function (_0x60057d) {
                this['_texture'] = _0x60057d, this['_paramData']['_int32Data'][_0x3986c5['_PARAM_TEX' + 'TURE_POS_']] = this['_texture']['bitmap']['_glTexture']['id'];
                var _0x254d98 = this['_paramData']['_float32Da' + 'ta'], _0x2a1217 = this['_texture']['uv'];
                _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x2] = _0x2a1217[0x0], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x3] = _0x2a1217[0x1], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x8] = _0x2a1217[0x2], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x9] = _0x2a1217[0x3], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xe] = _0x2a1217[0x4], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xf] = _0x2a1217[0x5], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x14] = _0x2a1217[0x6], _0x254d98[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x15] = _0x2a1217[0x7], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xbc44b1, 'width', function () {
                return this['_width'];
            }, function (_0x1e64d5) {
                this['_width'] = _0x1e64d5;
                var _0x3f450a = this['_paramData']['_float32Da' + 'ta'];
                _0x3f450a[_0x3986c5['_PARAM_VB_' + 'POS_']] = this['_x'], _0x3f450a[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x3f450a[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x3f450a[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xbc44b1, 'x', function () {
                return this['_x'];
            }, function (_0x1e3675) {
                this['_x'] = _0x1e3675;
                var _0x15b728 = this['_paramData']['_float32Da' + 'ta'];
                _0x15b728[_0x3986c5['_PARAM_VB_' + 'POS_']] = this['_x'], _0x15b728[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x6] = this['_x'] + this['_width'], _0x15b728[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xc] = this['_x'] + this['_width'], _0x15b728[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x12] = this['_x'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0xbc44b1, 'height', function () {
                return this['_height'];
            }, function (_0x37b379) {
                this['_height'] = _0x37b379;
                var _0x3dc1af = this['_paramData']['_float32Da' + 'ta'];
                _0x3dc1af[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x1] = this['_y'], _0x3dc1af[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x7] = this['_y'], _0x3dc1af[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0xd] = this['_y'] + this['_height'], _0x3dc1af[_0x3986c5['_PARAM_VB_' + 'POS_'] + 0x13] = this['_y'] + this['_height'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3986c5['create'] = function (_0x52c3ce, _0x14f01d, _0x68c482, _0x3e1d37, _0x256137) {
                var _0x588279 = _0x5460aa['getItemByC' + 'lass']('DrawImageC' + 'md', _0x3986c5);
                _0x588279['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_'] && (_0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xac, 0x20, !![]), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWTEXTUR' + 'E']), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['useVDO'](_0xe4a59a['VDO_MESHQU' + 'ADTEXTURE']), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['uniformTex' + 'tureByPara' + 'mData'](0x0, 0x1 * 0x4, _0x3986c5['_PARAM_TEX' + 'TURE_POS_'] * 0x4), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['setRectMes' + 'hByParamDa' + 'ta'](0x3 * 0x4, _0x3986c5['_PARAM_VB_' + 'POS_'] * 0x4, 0x4 * 0x4), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']));
                !_0x588279['_paramData'] && (_0x588279['_paramData'] = new ParamData(0x1d * 0x4, !![]));
                {
                    _0x588279['_texture'] = _0x52c3ce, _0x52c3ce['_addRefere' + 'nce'](), _0x588279['_x'] = _0x14f01d, _0x588279['_y'] = _0x68c482, _0x588279['_width'] = _0x3e1d37, _0x588279['_height'] = _0x256137;
                    var _0x273493 = _0x588279['_paramData']['_float32Da' + 'ta'], _0x2d3c54 = _0x588279['_paramData']['_int32Data'];
                    _0x2d3c54[0x0] = 0x3, _0x2d3c54[0x1] = 0x84c0, _0x2d3c54[_0x3986c5['_PARAM_TEX' + 'TURE_POS_']] = _0x52c3ce['getIsReady']() ? _0x52c3ce['bitmap']['_glTexture']['id'] : 0x0, _0x2d3c54[0x3] = 0x1, _0x2d3c54[0x4] = 0x18 * 0x4;
                    var _0x1c35d5 = _0x3e1d37 != 0x0 ? _0x3e1d37 : _0x52c3ce['bitmap']['width'], _0x55bdeb = _0x256137 != 0x0 ? _0x256137 : _0x52c3ce['bitmap']['height'], _0x12fe17 = _0x52c3ce['uv'], _0xf64068 = _0x3986c5['_PARAM_VB_' + 'POS_'];
                    _0x273493[_0xf64068++] = _0x14f01d, _0x273493[_0xf64068++] = _0x68c482, _0x273493[_0xf64068++] = _0x12fe17[0x0], _0x273493[_0xf64068++] = _0x12fe17[0x1], _0x2d3c54[_0xf64068++] = 0xffffffff, _0x2d3c54[_0xf64068++] = 0xffffffff, _0x273493[_0xf64068++] = _0x14f01d + _0x1c35d5, _0x273493[_0xf64068++] = _0x68c482, _0x273493[_0xf64068++] = _0x12fe17[0x2], _0x273493[_0xf64068++] = _0x12fe17[0x3], _0x2d3c54[_0xf64068++] = 0xffffffff, _0x2d3c54[_0xf64068++] = 0xffffffff, _0x273493[_0xf64068++] = _0x14f01d + _0x1c35d5, _0x273493[_0xf64068++] = _0x68c482 + _0x55bdeb, _0x273493[_0xf64068++] = _0x12fe17[0x4], _0x273493[_0xf64068++] = _0x12fe17[0x5], _0x2d3c54[_0xf64068++] = 0xffffffff, _0x2d3c54[_0xf64068++] = 0xffffffff, _0x273493[_0xf64068++] = _0x14f01d, _0x273493[_0xf64068++] = _0x68c482 + _0x55bdeb, _0x273493[_0xf64068++] = _0x12fe17[0x6], _0x273493[_0xf64068++] = _0x12fe17[0x7], _0x2d3c54[_0xf64068++] = 0xffffffff, _0x2d3c54[_0xf64068++] = 0xffffffff, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x588279['_paramData']);
                }
                return _0x588279['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_']['getPtrID'](), _0x588279['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x588279['_graphicsC' + 'mdEncoder']), _0x588279;
            }, _0x3986c5['ID'] = 'DrawImage', _0x3986c5['_DRAW_IMAG' + 'E_CMD_ENCO' + 'DER_'] = null, _0x3986c5['_PARAM_TEX' + 'TURE_POS_'] = 0x2, _0x3986c5['_PARAM_VB_' + 'POS_'] = 0x5, _0x3986c5;
        }(), _0x2305b8 = function () {
            function _0x329f8b() {
                this['_graphicsC' + 'mdEncoder'] = null, this['_paramData'] = null, this['_paramID'] = null, this['_x'] = NaN, this['_y'] = NaN, this['_radius'] = NaN, this['_fillColor'] = null, this['_lineColor'] = null, this['_lineWidth'] = NaN, this['_vertNum'] = 0x0, this['_line_vert' + 'Num'] = 0x0, this['ibBuffer'] = null, this['vbBuffer'] = null, this['line_ibBuf' + 'fer'] = null, this['line_vbBuf' + 'fer'] = null, this['_ibSize'] = 0x0, this['_vbSize'] = 0x0, this['_line_ibSi' + 'ze'] = 0x0, this['_line_vbSi' + 'ze'] = 0x0, this['_cmdCurren' + 'tPos'] = 0x0, this['_points'] = [], this['_linePoint' + 's'] = [], this['_line_vbAr' + 'ray'] = [], this['_line_ibAr' + 'ray'] = [];
            }
            _0x199b5b(_0x329f8b, 'laya.layag' + 'l.cmdNativ' + 'e.DrawCirc' + 'leCmdNativ' + 'e');
            var _0x36df91 = _0x329f8b['prototype'];
            return _0x36df91['_arc'] = function (_0x40b5ab, _0x2a5422, _0x4e43a4, _0x4ac6c6, _0x3982d7) {
                _0x4ac6c6 === void 0x0 && (_0x4ac6c6 = ![]), _0x3982d7 === void 0x0 && (_0x3982d7 = !![]);
                var _0x5d8899 = [], _0x14f358 = 0x0, _0x143a3f = Math['PI'] * 0x2, _0x475eee = 0x0, _0x5a5cc7 = 0x0, _0x16d5ba = 0x0, _0x3cfa03 = 0x0, _0x2f265b = 0x0, _0x1b32df = 0x0, _0x190a61 = 0x0, _0x296f40 = 0x0, _0x10ab10 = 0x0, _0x51592c = 0x0, _0x31fd2d = 0x0, _0x8c6407 = 0x0, _0x2f3df4 = 0x0, _0xcbec96 = 0x0, _0x50f279 = 0x0, _0x2fb950 = 0x0, _0x88fd43 = 0x0;
                _0x5a5cc7 = _0x143a3f - _0x14f358;
                if (!_0x4ac6c6) {
                    if (Math['abs'](_0x5a5cc7) >= Math['PI'] * 0x2)
                        _0x5a5cc7 = Math['PI'] * 0x2;
                    else
                        while (_0x5a5cc7 < 0x0) {
                            _0x5a5cc7 += Math['PI'] * 0x2;
                        }
                } else {
                    if (Math['abs'](_0x5a5cc7) >= Math['PI'] * 0x2)
                        _0x5a5cc7 = -Math['PI'] * 0x2;
                    else
                        while (_0x5a5cc7 > 0x0) {
                            _0x5a5cc7 -= Math['PI'] * 0x2;
                        }
                }
                if (_0x4e43a4 < 0x65)
                    _0x2fb950 = Math['max'](0xa, _0x5a5cc7 * _0x4e43a4 / 0x5);
                else
                    _0x4e43a4 < 0xc9 ? _0x2fb950 = Math['max'](0xa, _0x5a5cc7 * _0x4e43a4 / 0x14) : _0x2fb950 = Math['max'](0xa, _0x5a5cc7 * _0x4e43a4 / 0x28);
                _0x16d5ba = _0x5a5cc7 / _0x2fb950 / 0x2, _0x3cfa03 = Math['abs'](0x4 / 0x3 * (0x1 - Math['cos'](_0x16d5ba)) / Math['sin'](_0x16d5ba));
                _0x4ac6c6 && (_0x3cfa03 = -_0x3cfa03);
                _0x88fd43 = 0x0;
                var _0x56d290 = NaN, _0x22bc03 = NaN;
                for (_0x50f279 = 0x0; _0x50f279 <= _0x2fb950; _0x50f279++) {
                    _0x475eee = _0x14f358 + _0x5a5cc7 * (_0x50f279 / _0x2fb950), _0x2f265b = Math['cos'](_0x475eee), _0x1b32df = Math['sin'](_0x475eee), _0x190a61 = _0x40b5ab + _0x2f265b * _0x4e43a4, _0x296f40 = _0x2a5422 + _0x1b32df * _0x4e43a4, _0x5d8899['push'](_0x190a61), _0x5d8899['push'](_0x296f40);
                }
                return _0x5d8899;
            }, _0x36df91['recover'] = function () {
                this['_fillColor'] = null, this['_lineColor'] = null, this['_points']['length'] = 0x0, this['_linePoint' + 's']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, _0x5460aa['recover']('DrawCircle' + 'Cmd', this);
            }, _0x3a2bd3(0x0, _0x36df91, 'lineColor', function () {
                return this['_lineColor'];
            }, function (_0x519bee) {
                !this['_lineColor'] && this['_lineWidth'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineColor'] = _0x519bee, this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                for (var _0x411c43 = 0x0; _0x411c43 < this['_points']['length']; _0x411c43++) {
                    this['_linePoint' + 's']['push'](this['_points'][_0x411c43]);
                }
                this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                var _0x140b72 = this['_line_vert' + 'Num'];
                (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x140b72 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                var _0x5ca29e = this['line_ibBuf' + 'fer']['_int16Data'], _0x1a653b = 0x0;
                for (var _0x295484 = 0x0; _0x295484 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0x295484++) {
                    _0x5ca29e[_0x1a653b++] = this['_line_ibAr' + 'ray'][_0x295484];
                }
                (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x140b72 * 0x3 * 0x4, !![]));
                this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                var _0x38dd0e = _0x4b1f30['create'](_0x519bee), _0x451d8 = _0x38dd0e['numColor'], _0x399b9e = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x13871d = this['line_vbBuf' + 'fer']['_int32Data'], _0x1e874d = 0x0;
                for (_0x411c43 = 0x0; _0x411c43 < this['_line_vert' + 'Num']; _0x411c43++) {
                    _0x399b9e[_0x1e874d++] = this['_line_vbAr' + 'ray'][_0x411c43 * 0x2] + this['x'], _0x399b9e[_0x1e874d++] = this['_line_vbAr' + 'ray'][_0x411c43 * 0x2 + 0x1] + this['y'], _0x13871d[_0x1e874d++] = _0x451d8;
                }
                ;
                var _0x296e31 = this['_paramData']['_int32Data'];
                ;
                _0x296e31[_0x329f8b['_PARAM_LIN' + 'E_VB_POS_']] = this['line_vbBuf' + 'fer']['getPtrID'](), _0x296e31[_0x329f8b['_PARAM_LIN' + 'E_IB_POS_']] = this['line_ibBuf' + 'fer']['getPtrID'](), _0x296e31[_0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = this['_line_vbSi' + 'ze'], _0x296e31[_0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = this['_line_ibSi' + 'ze'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x3a2bd3(0x0, _0x36df91, 'cmdID', function () {
                return 'DrawCircle';
            }), _0x3a2bd3(0x0, _0x36df91, 'fillColor', function () {
                return this['_fillColor'];
            }, function (_0x4608cd) {
                this['_fillColor'] = _0x4608cd;
                var _0x4fafce = _0x4b1f30['create'](this['_fillColor']), _0x1f832b = _0x4fafce['numColor'], _0x45b0c0 = this['vbBuffer']['_int32Data'], _0x3b50a1 = 0x0;
                for (var _0x2c140e = 0x0; _0x2c140e < this['_vertNum']; _0x2c140e++) {
                    _0x3b50a1++, _0x3b50a1++, _0x45b0c0[_0x3b50a1++] = _0x1f832b;
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x36df91, 'x', function () {
                return this['_x'];
            }, function (_0x267942) {
                this['_x'] = _0x267942;
                var _0x36276f = this['vbBuffer']['_float32Da' + 'ta'], _0x6791fe = 0x0;
                for (var _0x3ac9fd = 0x0; _0x3ac9fd < this['_vertNum']; _0x3ac9fd++) {
                    _0x36276f[_0x6791fe++] = this['_points'][_0x3ac9fd * 0x2] + this['_x'], _0x6791fe++, _0x6791fe++;
                }
                if (this['_lineColor']) {
                    var _0x20ff2b = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x6791fe = 0x0;
                    for (_0x3ac9fd = 0x0; _0x3ac9fd < this['_line_vert' + 'Num']; _0x3ac9fd++) {
                        _0x20ff2b[_0x6791fe++] = this['_line_vbAr' + 'ray'][_0x3ac9fd * 0x2] + this['_x'], _0x6791fe++, _0x6791fe++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x36df91, 'y', function () {
                return this['_y'];
            }, function (_0x2af263) {
                this['_y'] = _0x2af263;
                var _0xc3d560 = this['vbBuffer']['_float32Da' + 'ta'], _0x2271b4 = 0x0;
                for (var _0xcb57eb = 0x0; _0xcb57eb < this['_vertNum']; _0xcb57eb++) {
                    _0x2271b4++, _0xc3d560[_0x2271b4++] = this['_points'][_0xcb57eb * 0x2 + 0x1] + this['_y'], _0x2271b4++;
                }
                if (this['_lineColor']) {
                    var _0x1926c2 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'];
                    _0x2271b4 = 0x0;
                    for (_0xcb57eb = 0x0; _0xcb57eb < this['_line_vert' + 'Num']; _0xcb57eb++) {
                        _0x2271b4++, _0x1926c2[_0x2271b4++] = this['_line_vbAr' + 'ray'][_0xcb57eb * 0x2 + 0x1] + this['_y'], _0x2271b4++;
                    }
                    _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']);
                }
                _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']);
            }), _0x3a2bd3(0x0, _0x36df91, 'radius', function () {
                return this['_radius'];
            }, function (_0x12fe74) {
                this['_points'] = this['_arc'](0x0, 0x0, _0x12fe74);
                {
                    this['_vertNum'] = this['_points']['length'] / 0x2;
                    var _0x23fefc = this['_vertNum'], _0x72e0ed = 0x0;
                    this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                    var _0x1554d6 = 0x0, _0x3a6965 = this['_vertNum'] - 0x2;
                    (!this['ibBuffer'] || this['ibBuffer']['getByteLen' + 'gth']() < _0x3a6965 * 0x3 * 0x2) && (this['ibBuffer'] = new ParamData(_0x3a6965 * 0x3 * 0x2, !![], !![]));
                    this['_ibSize'] = _0x3a6965 * 0x3 * 0x2;
                    var _0x5585c9 = this['ibBuffer']['_int16Data'], _0x5b492b = 0x0;
                    for (var _0x146058 = 0x0; _0x146058 < _0x3a6965; _0x146058++) {
                        _0x5585c9[_0x5b492b++] = _0x1554d6, _0x5585c9[_0x5b492b++] = _0x146058 + 0x1 + _0x1554d6, _0x5585c9[_0x5b492b++] = _0x146058 + 0x2 + _0x1554d6;
                    }
                    (!this['vbBuffer'] || this['vbBuffer']['getByteLen' + 'gth']() < this['_vertNum'] * 0x3 * 0x4) && (this['vbBuffer'] = new ParamData(_0x23fefc * 0x3 * 0x4, !![]));
                    this['_vbSize'] = this['_vertNum'] * 0x3 * 0x4;
                    var _0x4f73e3 = _0x4b1f30['create'](this['_fillColor']), _0x116e15 = _0x4f73e3['numColor'], _0x228e48 = this['vbBuffer']['_float32Da' + 'ta'], _0x51a19a = this['vbBuffer']['_int32Data'], _0x339cc0 = 0x0;
                    for (var _0x4e0a3a = 0x0; _0x4e0a3a < this['_vertNum']; _0x4e0a3a++) {
                        _0x228e48[_0x339cc0++] = this['_points'][_0x4e0a3a * 0x2] + this['_x'], _0x228e48[_0x339cc0++] = this['_points'][_0x4e0a3a * 0x2 + 0x1] + this['_y'], _0x51a19a[_0x339cc0++] = _0x116e15;
                    }
                    if (this['_lineColor']) {
                        for (_0x4e0a3a = 0x0; _0x4e0a3a < this['_points']['length']; _0x4e0a3a++) {
                            this['_linePoint' + 's']['push'](this['_points'][_0x4e0a3a]);
                        }
                        this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], this['_lineWidth'], 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'], _0x72e0ed = this['_line_vert' + 'Num'];
                        (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x72e0ed - 0x2) * 0x3 * 0x2, !![], !![]));
                        this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                        var _0x3ab8a6 = this['line_ibBuf' + 'fer']['_int16Data'];
                        _0x5b492b = 0x0;
                        for (var _0x220405 = 0x0; _0x220405 < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0x220405++) {
                            _0x3ab8a6[_0x5b492b++] = this['_line_ibAr' + 'ray'][_0x220405];
                        }
                        (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x72e0ed * 0x3 * 0x4, !![]));
                        this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                        var _0x4244e0 = _0x4b1f30['create'](this['_lineColor']), _0x7eca2a = _0x4244e0['numColor'], _0xcad39e = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x1aacd4 = this['line_vbBuf' + 'fer']['_int32Data'];
                        _0x339cc0 = 0x0;
                        for (_0x4e0a3a = 0x0; _0x4e0a3a < this['_line_vert' + 'Num']; _0x4e0a3a++) {
                            _0xcad39e[_0x339cc0++] = this['_line_vbAr' + 'ray'][_0x4e0a3a * 0x2] + this['_x'], _0xcad39e[_0x339cc0++] = this['_line_vbAr' + 'ray'][_0x4e0a3a * 0x2 + 0x1] + this['_y'], _0x1aacd4[_0x339cc0++] = _0x7eca2a;
                        }
                    }
                    ;
                    var _0x26008b = this['_paramData']['_int32Data'];
                    _0x26008b[_0x329f8b['_PARAM_VB_' + 'POS_']] = this['vbBuffer']['getPtrID'](), _0x26008b[_0x329f8b['_PARAM_IB_' + 'POS_']] = this['ibBuffer']['getPtrID'](), _0x26008b[_0x329f8b['_PARAM_VB_' + 'SIZE_POS_']] = this['_vbSize'], _0x26008b[_0x329f8b['_PARAM_IB_' + 'SIZE_POS_']] = this['_ibSize'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['ibBuffer']), this['_lineColor'] && (_0x26008b[_0x329f8b['_PARAM_LIN' + 'E_VB_POS_']] = this['line_vbBuf' + 'fer']['getPtrID'](), _0x26008b[_0x329f8b['_PARAM_LIN' + 'E_IB_POS_']] = this['line_ibBuf' + 'fer']['getPtrID'](), _0x26008b[_0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = this['_line_vbSi' + 'ze'], _0x26008b[_0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = this['_line_ibSi' + 'ze'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer'])), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
                }
            }), _0x3a2bd3(0x0, _0x36df91, 'lineWidth', function () {
                return this['_lineWidth'];
            }, function (_0x3d37da) {
                !this['_lineWidth'] && this['_lineColor'] && (this['_graphicsC' + 'mdEncoder']['_idata'][this['_cmdCurren' + 'tPos'] + 0x1] = _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_graphicsC' + 'mdEncoder']));
                this['_lineWidth'] = _0x3d37da, this['_linePoint' + 's']['length'] = 0x0, this['_line_ibAr' + 'ray']['length'] = 0x0, this['_line_vbAr' + 'ray']['length'] = 0x0;
                for (var _0x56270b = 0x0; _0x56270b < this['_points']['length']; _0x56270b++) {
                    this['_linePoint' + 's']['push'](this['_points'][_0x56270b]);
                }
                this['_linePoint' + 's']['push'](this['_points'][0x0]), this['_linePoint' + 's']['push'](this['_points'][0x1]), _0x2fe41e['createLine' + '2'](this['_linePoint' + 's'], this['_line_ibAr' + 'ray'], _0x3d37da, 0x0, this['_line_vbAr' + 'ray'], ![]), this['_line_vert' + 'Num'] = this['_linePoint' + 's']['length'];
                var _0x12ac48 = this['_line_vert' + 'Num'];
                (!this['line_ibBuf' + 'fer'] || this['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (this['line_ibBuf' + 'fer'] = new ParamData((_0x12ac48 - 0x2) * 0x3 * 0x2, !![], !![]));
                this['_line_ibSi' + 'ze'] = (this['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                var _0x111405 = this['line_ibBuf' + 'fer']['_int16Data'], _0x44ec91 = 0x0;
                for (var _0x60687d = 0x0; _0x60687d < (this['_line_vert' + 'Num'] - 0x2) * 0x3; _0x60687d++) {
                    _0x111405[_0x44ec91++] = this['_line_ibAr' + 'ray'][_0x60687d];
                }
                (!this['line_vbBuf' + 'fer'] || this['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < this['_line_vert' + 'Num'] * 0x3 * 0x4) && (this['line_vbBuf' + 'fer'] = new ParamData(_0x12ac48 * 0x3 * 0x4, !![]));
                this['_line_vbSi' + 'ze'] = this['_line_vert' + 'Num'] * 0x3 * 0x4;
                var _0x2e4ab2 = _0x4b1f30['create'](this['_lineColor']), _0x25efb2 = _0x2e4ab2['numColor'], _0x6bc4e7 = this['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x4bbbb8 = this['line_vbBuf' + 'fer']['_int32Data'], _0x4de29d = 0x0;
                for (_0x56270b = 0x0; _0x56270b < this['_line_vert' + 'Num']; _0x56270b++) {
                    _0x6bc4e7[_0x4de29d++] = this['_line_vbAr' + 'ray'][_0x56270b * 0x2] + this['x'], _0x6bc4e7[_0x4de29d++] = this['_line_vbAr' + 'ray'][_0x56270b * 0x2 + 0x1] + this['y'], _0x4bbbb8[_0x4de29d++] = _0x25efb2;
                }
                ;
                var _0x588588 = this['_paramData']['_int32Data'];
                ;
                _0x588588[_0x329f8b['_PARAM_LIN' + 'E_VB_POS_']] = this['line_vbBuf' + 'fer']['getPtrID'](), _0x588588[_0x329f8b['_PARAM_LIN' + 'E_IB_POS_']] = this['line_ibBuf' + 'fer']['getPtrID'](), _0x588588[_0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = this['_line_vbSi' + 'ze'], _0x588588[_0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = this['_line_ibSi' + 'ze'], _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_paramData']);
            }), _0x329f8b['create'] = function (_0x3a81d4, _0x42eff6, _0x38f7f9, _0x3e77bf, _0x14bdf3, _0x51a9c7, _0x126807) {
                var _0x1e8874 = _0x5460aa['getItemByC' + 'lass']('DrawCircle' + 'Cmd', _0x329f8b);
                _0x1e8874['_graphicsC' + 'mdEncoder'] = this['_commandEn' + 'coder'];
                ;
                !_0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_'] && (_0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xf4, 0x20, !![]), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['setMeshExB' + 'yParamData'](_0x329f8b['_PARAM_VB_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x329f8b['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x329f8b['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['setMeshExB' + 'yParamData'](_0x329f8b['_PARAM_LIN' + 'E_VB_POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_IB_POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] * 0x4), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']));
                !_0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_'] && (_0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0xa8, 0x20, !![]), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['blendFuncB' + 'yGlobalVal' + 'ue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], _0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST']), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['useProgram' + 'Ex'](_0xe4a59a['PROGRAMEX_' + 'DRAWVG']), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['useVDO'](_0xe4a59a['VDO_MESHVG']), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x0), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_DIR'], 0x1), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['uniformEx'](_0xe4a59a['GLOBALVALU' + 'E_CLIP_MAT' + '_POS'], 0x2), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['setMeshExB' + 'yParamData'](_0x329f8b['_PARAM_VB_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_VB_' + 'OFFSET_POS' + '_'] * 0x4, _0x329f8b['_PARAM_VB_' + 'SIZE_POS_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'POS_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'OFFSET_POS' + '_'] * 0x4, _0x329f8b['_PARAM_IB_' + 'SIZE_POS_'] * 0x4, _0x329f8b['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] * 0x4), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x0, 0x7), _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['modifyMesh'](_0xe4a59a['GLOBALVALU' + 'E_DRAWTEXT' + 'URE_COLOR'], 0x1, 0xf), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']));
                !_0x1e8874['_paramData'] && (_0x1e8874['_paramData'] = new ParamData(0x12 * 0x4, !![]));
                {
                    _0x1e8874['_x'] = _0x3a81d4, _0x1e8874['_y'] = _0x42eff6, _0x1e8874['_radius'] = _0x38f7f9, _0x1e8874['_fillColor'] = _0x3e77bf, _0x1e8874['_lineColor'] = _0x14bdf3, _0x1e8874['_lineWidth'] = _0x51a9c7, _0x1e8874['_points'] = _0x1e8874['_arc'](0x0, 0x0, _0x38f7f9), _0x1e8874['_vertNum'] = _0x1e8874['_points']['length'] / 0x2;
                    var _0xd02d4d = _0x1e8874['_vertNum'], _0x3f2ded = 0x0, _0xf4fbf8 = _0x1e8874['_vertNum'] - 0x2;
                    (!_0x1e8874['ibBuffer'] || _0x1e8874['ibBuffer']['getByteLen' + 'gth']() < _0xf4fbf8 * 0x3 * 0x2) && (_0x1e8874['ibBuffer'] = new ParamData(_0xf4fbf8 * 0x3 * 0x2, !![], !![]));
                    _0x1e8874['_ibSize'] = _0xf4fbf8 * 0x3 * 0x2;
                    var _0x2bed2b = _0x1e8874['ibBuffer']['_int16Data'], _0x3ee842 = 0x0;
                    for (var _0x7f3ab0 = 0x0; _0x7f3ab0 < _0xf4fbf8; _0x7f3ab0++) {
                        _0x2bed2b[_0x3ee842++] = _0x3f2ded, _0x2bed2b[_0x3ee842++] = _0x7f3ab0 + 0x1 + _0x3f2ded, _0x2bed2b[_0x3ee842++] = _0x7f3ab0 + 0x2 + _0x3f2ded;
                    }
                    ;
                    var _0x4ff6f5 = _0x4b1f30['create'](_0x3e77bf), _0x54d476 = _0x4ff6f5['numColor'];
                    (!_0x1e8874['vbBuffer'] || _0x1e8874['vbBuffer']['getByteLen' + 'gth']() < _0x1e8874['_vertNum'] * 0x3 * 0x4) && (_0x1e8874['vbBuffer'] = new ParamData(_0xd02d4d * 0x3 * 0x4, !![]));
                    _0x1e8874['_vbSize'] = _0x1e8874['_vertNum'] * 0x3 * 0x4;
                    var _0x4b974a = _0x1e8874['vbBuffer']['_float32Da' + 'ta'], _0x52c1bd = _0x1e8874['vbBuffer']['_int32Data'], _0x3b0108 = 0x0;
                    for (var _0x543d4a = 0x0; _0x543d4a < _0x1e8874['_vertNum']; _0x543d4a++) {
                        _0x4b974a[_0x3b0108++] = _0x1e8874['_points'][_0x543d4a * 0x2] + _0x3a81d4, _0x4b974a[_0x3b0108++] = _0x1e8874['_points'][_0x543d4a * 0x2 + 0x1] + _0x42eff6, _0x52c1bd[_0x3b0108++] = _0x54d476;
                    }
                    ;
                    var _0x1d5c34 = 0x0;
                    for (_0x543d4a = 0x0; _0x543d4a < _0x1e8874['_points']['length']; _0x543d4a++) {
                        _0x1e8874['_linePoint' + 's']['push'](_0x1e8874['_points'][_0x543d4a]);
                    }
                    _0x1e8874['_linePoint' + 's']['push'](_0x1e8874['_points'][0x0]), _0x1e8874['_linePoint' + 's']['push'](_0x1e8874['_points'][0x1]);
                    if (_0x14bdf3) {
                        _0x2fe41e['createLine' + '2'](_0x1e8874['_linePoint' + 's'], _0x1e8874['_line_ibAr' + 'ray'], _0x51a9c7, 0x0, _0x1e8874['_line_vbAr' + 'ray'], ![]), _0x1e8874['_line_vert' + 'Num'] = _0x1e8874['_linePoint' + 's']['length'], _0x1d5c34 = _0x1e8874['_line_vert' + 'Num'];
                        (!_0x1e8874['line_ibBuf' + 'fer'] || _0x1e8874['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (_0x1e8874['line_ibBuf' + 'fer'] = new ParamData((_0x1d5c34 - 0x2) * 0x3 * 0x2, !![], !![]));
                        _0x1e8874['_line_ibSi' + 'ze'] = (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2;
                        var _0x5d94bf = _0x1e8874['line_ibBuf' + 'fer']['_int16Data'];
                        _0x3ee842 = 0x0;
                        for (var _0x1ea8b7 = 0x0; _0x1ea8b7 < (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3; _0x1ea8b7++) {
                            _0x5d94bf[_0x3ee842++] = _0x1e8874['_line_ibAr' + 'ray'][_0x1ea8b7];
                        }
                        (!_0x1e8874['line_vbBuf' + 'fer'] || _0x1e8874['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < _0x1e8874['_line_vert' + 'Num'] * 0x3 * 0x4) && (_0x1e8874['line_vbBuf' + 'fer'] = new ParamData(_0x1d5c34 * 0x3 * 0x4, !![]));
                        _0x1e8874['_line_vbSi' + 'ze'] = _0x1e8874['_line_vert' + 'Num'] * 0x3 * 0x4;
                        var _0x3896ef = _0x4b1f30['create'](_0x14bdf3), _0x14b5fd = _0x3896ef['numColor'], _0x57a983 = _0x1e8874['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x46d878 = _0x1e8874['line_vbBuf' + 'fer']['_int32Data'];
                        _0x3b0108 = 0x0;
                        for (_0x543d4a = 0x0; _0x543d4a < _0x1e8874['_line_vert' + 'Num']; _0x543d4a++) {
                            _0x57a983[_0x3b0108++] = _0x1e8874['_line_vbAr' + 'ray'][_0x543d4a * 0x2] + _0x3a81d4, _0x57a983[_0x3b0108++] = _0x1e8874['_line_vbAr' + 'ray'][_0x543d4a * 0x2 + 0x1] + _0x42eff6, _0x46d878[_0x3b0108++] = _0x14b5fd;
                        }
                    } else {
                        _0x1e8874['_lineWidth'] = 0x1;
                        var _0x791c67 = '#FFFFFF';
                        _0x2fe41e['createLine' + '2'](_0x1e8874['_linePoint' + 's'], _0x1e8874['_line_ibAr' + 'ray'], _0x1e8874['_lineWidth'], 0x0, _0x1e8874['_line_vbAr' + 'ray'], ![]), _0x1e8874['_line_vert' + 'Num'] = _0x1e8874['_linePoint' + 's']['length'], _0x1d5c34 = _0x1e8874['_line_vert' + 'Num'];
                        (!_0x1e8874['line_ibBuf' + 'fer'] || _0x1e8874['line_ibBuf' + 'fer']['getByteLen' + 'gth']() < (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2) && (_0x1e8874['line_ibBuf' + 'fer'] = new ParamData((_0x1d5c34 - 0x2) * 0x3 * 0x2, !![], !![]));
                        _0x1e8874['_line_ibSi' + 'ze'] = (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3 * 0x2, _0x5d94bf = _0x1e8874['line_ibBuf' + 'fer']['_int16Data'], _0x3ee842 = 0x0;
                        for (_0x1ea8b7 = 0x0; _0x1ea8b7 < (_0x1e8874['_line_vert' + 'Num'] - 0x2) * 0x3; _0x1ea8b7++) {
                            _0x5d94bf[_0x3ee842++] = _0x1e8874['_line_ibAr' + 'ray'][_0x1ea8b7];
                        }
                        (!_0x1e8874['line_vbBuf' + 'fer'] || _0x1e8874['line_vbBuf' + 'fer']['getByteLen' + 'gth']() < _0x1e8874['_line_vert' + 'Num'] * 0x3 * 0x4) && (_0x1e8874['line_vbBuf' + 'fer'] = new ParamData(_0x1d5c34 * 0x3 * 0x4, !![]));
                        _0x1e8874['_line_vbSi' + 'ze'] = _0x1e8874['_line_vert' + 'Num'] * 0x3 * 0x4, _0x3896ef = _0x4b1f30['create'](_0x791c67), _0x14b5fd = _0x3896ef['numColor'], _0x57a983 = _0x1e8874['line_vbBuf' + 'fer']['_float32Da' + 'ta'], _0x46d878 = _0x1e8874['line_vbBuf' + 'fer']['_int32Data'], _0x3b0108 = 0x0;
                        for (_0x543d4a = 0x0; _0x543d4a < _0x1e8874['_line_vert' + 'Num']; _0x543d4a++) {
                            _0x57a983[_0x3b0108++] = _0x1e8874['_line_vbAr' + 'ray'][_0x543d4a * 0x2] + _0x3a81d4, _0x57a983[_0x3b0108++] = _0x1e8874['_line_vbAr' + 'ray'][_0x543d4a * 0x2 + 0x1] + _0x42eff6, _0x46d878[_0x3b0108++] = _0x14b5fd;
                        }
                    }
                }
                ;
                var _0x3155dd = _0x1e8874['_paramData']['_float32Da' + 'ta'], _0x2e78ab = _0x1e8874['_paramData']['_int32Data'];
                return _0x2e78ab[0x0] = 0x1, _0x2e78ab[0x1] = 0x8 * 0x4, _0x2e78ab[_0x329f8b['_PARAM_VB_' + 'POS_']] = _0x1e8874['vbBuffer']['getPtrID'](), _0x2e78ab[_0x329f8b['_PARAM_IB_' + 'POS_']] = _0x1e8874['ibBuffer']['getPtrID'](), _0x2e78ab[_0x329f8b['_PARAM_VB_' + 'SIZE_POS_']] = _0x1e8874['_vbSize'], _0x2e78ab[_0x329f8b['_PARAM_IB_' + 'SIZE_POS_']] = _0x1e8874['_ibSize'], _0x2e78ab[_0x329f8b['_PARAM_VB_' + 'OFFSET_POS' + '_']] = 0x0, _0x2e78ab[_0x329f8b['_PARAM_IB_' + 'OFFSET_POS' + '_']] = 0x0, _0x2e78ab[_0x329f8b['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['vbBuffer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['ibBuffer']), _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_VB_POS_']] = _0x1e8874['line_vbBuf' + 'fer']['getPtrID'](), _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_IB_POS_']] = _0x1e8874['line_ibBuf' + 'fer']['getPtrID'](), _0x3155dd[_0x329f8b['_PARAM_LIN' + 'ECOLOR_POS' + '_']] = _0x14bdf3, _0x3155dd[_0x329f8b['_PARAM_LIN' + 'EWIDTH_POS' + '_']] = _0x51a9c7, _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_']] = _0x1e8874['_line_vbSi' + 'ze'], _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_']] = _0x1e8874['_line_ibSi' + 'ze'], _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_']] = 0x0, _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_']] = 0x0, _0x2e78ab[_0x329f8b['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_']] = 0x0, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['line_vbBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['line_ibBuf' + 'fer']), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['_paramData']), _0x14bdf3 ? _0x1e8874['_cmdCurren' + 'tPos'] = _0x1e8874['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_']['getPtrID'](), _0x1e8874['_paramData']['getPtrID'](), -0x1) : _0x1e8874['_cmdCurren' + 'tPos'] = _0x1e8874['_graphicsC' + 'mdEncoder']['useCommand' + 'Encoder'](_0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_']['getPtrID'](), _0x1e8874['_paramData']['getPtrID'](), -0x1), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](_0x1e8874['_graphicsC' + 'mdEncoder']), _0x1e8874;
            }, _0x329f8b['ID'] = 'DrawCircle', _0x329f8b['_DRAW_CIRC' + 'LE_CMD_ENC' + 'ODER_'] = null, _0x329f8b['_DRAW_CIRC' + 'LE_LINES_C' + 'MD_ENCODER' + '_'] = null, _0x329f8b['_PARAM_VB_' + 'POS_'] = 0x2, _0x329f8b['_PARAM_IB_' + 'POS_'] = 0x3, _0x329f8b['_PARAM_LIN' + 'E_VB_POS_'] = 0x4, _0x329f8b['_PARAM_LIN' + 'E_IB_POS_'] = 0x5, _0x329f8b['_PARAM_LIN' + 'ECOLOR_POS' + '_'] = 0x6, _0x329f8b['_PARAM_LIN' + 'EWIDTH_POS' + '_'] = 0x7, _0x329f8b['_PARAM_VB_' + 'SIZE_POS_'] = 0x8, _0x329f8b['_PARAM_IB_' + 'SIZE_POS_'] = 0x9, _0x329f8b['_PARAM_LIN' + 'E_VB_SIZE_' + 'POS_'] = 0xa, _0x329f8b['_PARAM_LIN' + 'E_IB_SIZE_' + 'POS_'] = 0xb, _0x329f8b['_PARAM_VB_' + 'OFFSET_POS' + '_'] = 0xc, _0x329f8b['_PARAM_IB_' + 'OFFSET_POS' + '_'] = 0xd, _0x329f8b['_PARAM_LIN' + 'E_VB_OFFSE' + 'T_POS_'] = 0xe, _0x329f8b['_PARAM_LIN' + 'E_IB_OFFSE' + 'T_POS_'] = 0xf, _0x329f8b['_PARAM_IND' + 'EX_ELEMENT' + '_OFFSET_PO' + 'S_'] = 0x10, _0x329f8b['_PARAM_LIN' + 'E_INDEX_EL' + 'EMENT_OFFS' + 'ET_POS_'] = 0x11, _0x329f8b;
        }(), _0x556f29 = function () {
            function _0x398c5d() {
                this['texWidth'] = 0x400, this['texHeight'] = 0x400, this['atlasgrid'] = null, this['protectDis' + 't'] = 0x1, this['texture'] = null, this['charMaps'] = {}, this['texHeight'] = this['texWidth'] = _0x32b95f['atlasWidth'], this['texture'] = _0x31d0dd['getTextTex' + 'ture'](this['texWidth'], this['texHeight']), this['texWidth'] / _0x398c5d['atlasGridW'] > 0x100 && (_0x398c5d['atlasGridW'] = Math['ceil'](this['texWidth'] / 0x100)), this['atlasgrid'] = new _0x1de15d(this['texWidth'] / _0x398c5d['atlasGridW'], this['texHeight'] / _0x398c5d['atlasGridW'], this['texture']['id']);
            }
            _0x199b5b(_0x398c5d, 'laya.webgl' + '.text.Text' + 'Atlas');
            var _0x1693a3 = _0x398c5d['prototype'];
            return _0x1693a3['setProtect' + 'eDist'] = function (_0x330bfe) {
                this['protectDis' + 't'] = _0x330bfe;
            }, _0x1693a3['getAEmpty'] = function (_0x2f144d, _0x537f5b, _0x315b74) {
                var _0x2a8ba3 = this['atlasgrid']['addRect'](0x1, Math['ceil'](_0x2f144d / _0x398c5d['atlasGridW']), Math['ceil'](_0x537f5b / _0x398c5d['atlasGridW']), _0x315b74);
                return _0x2a8ba3 && (_0x315b74['x'] *= _0x398c5d['atlasGridW'], _0x315b74['y'] *= _0x398c5d['atlasGridW']), _0x2a8ba3;
            }, _0x1693a3['destroy'] = function () {
                for (var _0xb5648b in this['charMaps']) {
                    var _0x2ca708 = this['charMaps'][_0xb5648b];
                    _0x2ca708['deleted'] = !![];
                }
                this['texture']['discard']();
            }, _0x1693a3['printDebug' + 'Info'] = function () {
            }, _0x3a2bd3(0x0, _0x1693a3, 'usedRate', function () {
                return this['atlasgrid']['_used'];
            }), _0x398c5d['atlasGridW'] = 0x10, _0x398c5d;
        }(), _0x2e9374 = function (_0xb0ed74) {
            function _0x291c2c(_0x3c90af, _0x2f5f32) {
                _0x291c2c['__super']['call'](this, _0x3c90af, _0x2f5f32);
            }
            _0x199b5b(_0x291c2c, 'laya.webgl' + '.utils.Ren' + 'derSprite3' + 'D', _0xb0ed74);
            var _0x19b933 = _0x291c2c['prototype'];
            return _0x19b933['onCreate'] = function (_0x22fa7a) {
                switch (_0x22fa7a) {
                case 0x4:
                    this['_fun'] = this['_blend'];
                    return;
                }
            }, _0x19b933['_mask'] = function (_0x1d0be9, _0x1df2fe, _0x5dca32, _0x3f7187) {
                var _0xf45acf = this['_next'], _0x530bd4 = _0x1d0be9['mask'], _0xaf5a86, _0x39c2c4 = _0x1df2fe;
                if (_0x530bd4) {
                    _0x39c2c4['save']();
                    var _0x14d8a8 = _0x39c2c4['globalComp' + 'ositeOpera' + 'tion'], _0x46efa7 = new _0x4759e4();
                    _0x46efa7['copyFrom'](_0x530bd4['getBounds']()), _0x46efa7['width'] = Math['round'](_0x46efa7['width']), _0x46efa7['height'] = Math['round'](_0x46efa7['height']), _0x46efa7['x'] = Math['round'](_0x46efa7['x']), _0x46efa7['y'] = Math['round'](_0x46efa7['y']);
                    if (_0x46efa7['width'] > 0x0 && _0x46efa7['height'] > 0x0) {
                        var _0x31583d = _0x46efa7['width'], _0x4fa7e7 = _0x46efa7['height'], _0x16af75 = _0xb36f96['getRT'](_0x31583d, _0x4fa7e7);
                        _0x39c2c4['breakNextM' + 'erge'](), _0x39c2c4['pushRT'](), _0x39c2c4['addRenderO' + 'bject'](_0x4f1d6e['create']([
                            _0x39c2c4,
                            _0x16af75,
                            _0x31583d,
                            _0x4fa7e7
                        ], laya['webgl']['utils']['RenderSpri' + 'te3D']['tmpTarget'], this)), _0x530bd4['render'](_0x39c2c4, -_0x46efa7['x'], -_0x46efa7['y']), _0x39c2c4['breakNextM' + 'erge'](), _0x39c2c4['popRT'](), _0x39c2c4['save'](), _0x39c2c4['clipRect'](_0x5dca32 + _0x46efa7['x'] - _0x1d0be9['getStyle']()['pivotX'], _0x3f7187 + _0x46efa7['y'] - _0x1d0be9['getStyle']()['pivotY'], _0x31583d, _0x4fa7e7), _0xf45acf['_fun']['call'](_0xf45acf, _0x1d0be9, _0x39c2c4, _0x5dca32, _0x3f7187), _0x39c2c4['restore'](), _0x14d8a8 = _0x39c2c4['globalComp' + 'ositeOpera' + 'tion'], _0x39c2c4['addRenderO' + 'bject'](_0x4f1d6e['create'](['mask'], laya['webgl']['utils']['RenderSpri' + 'te3D']['setBlendMo' + 'de'], this));
                        var _0x11b167 = _0xd9aa33['create'](0x1, 0x0), _0x43f69e = _0x4fcec0['INV_UV'];
                        _0x39c2c4['drawTarget'](_0x16af75, _0x5dca32 + _0x46efa7['x'] - _0x1d0be9['getStyle']()['pivotX'], _0x3f7187 + _0x46efa7['y'] - _0x1d0be9['getStyle']()['pivotY'], _0x31583d, _0x4fa7e7, _0x4fb671['TEMP']['identity'](), _0x11b167, _0x43f69e, 0x6), _0x39c2c4['addRenderO' + 'bject'](_0x4f1d6e['create']([_0x16af75], laya['webgl']['utils']['RenderSpri' + 'te3D']['recycleTar' + 'get'], this)), _0x39c2c4['addRenderO' + 'bject'](_0x4f1d6e['create']([_0x14d8a8], laya['webgl']['utils']['RenderSpri' + 'te3D']['setBlendMo' + 'de'], this));
                    }
                    _0x39c2c4['restore']();
                } else
                    _0xf45acf['_fun']['call'](_0xf45acf, _0x1d0be9, _0x1df2fe, _0x5dca32, _0x3f7187);
            }, _0x19b933['_blend'] = function (_0x849e1c, _0x21fc75, _0x3d07a6, _0x3eca37) {
                var _0x202efc = _0x849e1c['_style'], _0xf0ad35 = this['_next'];
                _0x202efc['blendMode'] ? (_0x21fc75['save'](), _0x21fc75['globalComp' + 'ositeOpera' + 'tion'] = _0x202efc['blendMode'], _0xf0ad35['_fun']['call'](_0xf0ad35, _0x849e1c, _0x21fc75, _0x3d07a6, _0x3eca37), _0x21fc75['restore']()) : _0xf0ad35['_fun']['call'](_0xf0ad35, _0x849e1c, _0x21fc75, _0x3d07a6, _0x3eca37);
            }, _0x291c2c['tmpTarget'] = function (_0x1bbaf7, _0x384622, _0x585a9c, _0x420409) {
                _0x384622['start'](), _0x384622['clear'](0x0, 0x0, 0x0, 0x0);
            }, _0x291c2c['recycleTar' + 'get'] = function (_0x5bfd41) {
                _0xb36f96['releaseRT'](_0x5bfd41);
            }, _0x291c2c['setBlendMo' + 'de'] = function (_0x312eec) {
                var _0x2e5130 = _0x354f16['mainContex' + 't'];
                _0x5c9116['targetFns'][_0x5c9116['TOINT'][_0x312eec]](_0x2e5130);
            }, _0x3a2911(_0x291c2c, [
                'tempUV',
                function () {
                    return this['tempUV'] = new Array(0x8);
                }
            ]), _0x291c2c;
        }(_0x121f50), _0x23a596 = function (_0x4c4377) {
            var _0x3ceef2;
            function _0x24c9f0() {
                this['_drawTriUs' + 'eAbsMatrix'] = ![], this['_id'] = ++_0x24c9f0['_COUNT'], this['_path'] = null, this['_drawCount'] = 0x1, this['_maxNumEle'] = 0x0, this['_renderCou' + 'nt'] = 0x0, this['_isConvexC' + 'md'] = !![], this['_submits'] = null, this['_curSubmit'] = null, this['meshlist'] = [], this['_clipInfoI' + 'D'] = 0x0, this['_lastMatSc' + 'aleX'] = 0x1, this['_lastMatSc' + 'aleY'] = 0x1, this['_lastMat_a'] = 0x1, this['_lastMat_b'] = 0x0, this['_lastMat_c'] = 0x0, this['_lastMat_d'] = 0x1, this['_nBlendTyp' + 'e'] = 0x0, this['_saveMark'] = null, this['_drawTextu' + 'reUseColor'] = ![], this['_italicDeg'] = 0x0, this['_lastTex'] = null, this['_fillColor'] = 0x0, this['_flushCnt'] = 0x0, this['drawTexAli' + 'gn'] = ![], this['mId'] = -0x1, this['mHaveKey'] = ![], this['mHaveLineK' + 'ey'] = ![], _0x24c9f0['__super']['call'](this), this['_width'] = 0x5f5e0ff, this['_height'] = 0x5f5e0ff, this['_submitKey'] = new _0x2e7190(), this['_transedPo' + 'ints'] = new Array(0x8), this['_temp4Poin' + 'ts'] = new Array(0x8), this['_clipRect'] = _0x24c9f0['MAXCLIPREC' + 'T'], this['_globalCli' + 'pMatrix'] = new _0x4fb671(0x5f5e0ff, 0x0, 0x0, 0x5f5e0ff, 0x0, 0x0), this['_shader2D'] = new _0x16a48a(), this['mOutPoint'], _0x24c9f0['_contextco' + 'unt']++;
                if (!_0x24c9f0['defTexture']) {
                    var _0x3bc630 = new _0x466364(0x2, 0x2);
                    _0x3bc630['setPixels'](new Uint8Array(0x10)), _0x24c9f0['defTexture'] = new _0x4fcec0(_0x3bc630);
                }
                this['_lastTex'] = _0x24c9f0['defTexture'], this['clear']();
            }
            _0x199b5b(_0x24c9f0, 'laya.webgl' + '.canvas.We' + 'bGLContext' + '2D', _0x4c4377);
            var _0x1f8a1c = _0x24c9f0['prototype'];
            return _0x1f8a1c['clearBG'] = function (_0x16b7db, _0x5873b2, _0x463178, _0x2b9faa) {
                var _0x377456 = _0x354f16['mainContex' + 't'];
                _0x377456['clearColor'](_0x16b7db, _0x5873b2, _0x463178, _0x2b9faa), _0x377456['clear'](0x4000);
            }, _0x1f8a1c['_getSubmit' + 's'] = function () {
                return this['_submits'];
            }, _0x1f8a1c['_releaseMe' + 'm'] = function () {
                if (!this['_submits'])
                    return;
                this['_curMat']['destroy'](), this['_curMat'] = null, this['_shader2D']['destroy'](), this['_shader2D'] = null, this['_charSubmi' + 'tCache']['clear']();
                for (var _0x59a6d2 = 0x0, _0x4ebc88 = this['_submits']['_length']; _0x59a6d2 < _0x4ebc88; _0x59a6d2++) {
                    this['_submits'][_0x59a6d2]['releaseRen' + 'der']();
                }
                this['_submits']['length'] = 0x0, this['_submits']['_length'] = 0x0, this['_submits'] = null, this['_curSubmit'] = null, this['_path'] = null, this['_save'] = null;
                var _0x110977 = 0x0;
                for (_0x59a6d2 = 0x0, _0x110977 = this['meshlist']['length']; _0x59a6d2 < _0x110977; _0x59a6d2++) {
                    var _0x2ce00c = this['meshlist'][_0x59a6d2];
                    _0x2ce00c['destroy']();
                }
                this['meshlist']['length'] = 0x0, this['sprite'] = null, this['_targets'] && this['_targets']['destroy'](), this['_targets'] = null;
            }, _0x1f8a1c['destroy'] = function () {
                --_0x24c9f0['_contextco' + 'unt'], this['sprite'] = null, this['_releaseMe' + 'm'](), this['_charSubmi' + 'tCache']['destroy'](), this['_targets'] && this['_targets']['destroy'](), this['_targets'] = null, this['_mesh']['destroy']();
            }, _0x1f8a1c['clear'] = function () {
                !this['_submits'] && (this['_other'] = _0x3ceef2['DEFAULT'], this['_curMat'] = _0x4fb671['create'](), this['_charSubmi' + 'tCache'] = new _0x7cc5d(), this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']), this['_pathMesh'] = _0x20c78c['getAMesh'](), this['meshlist']['push'](this['_pathMesh']), this['_triangleM' + 'esh'] = _0x2696ab['getAMesh'](), this['meshlist']['push'](this['_triangleM' + 'esh']), this['_submits'] = [], this['_save'] = [_0x1013b1['Create'](this)], this['_save']['length'] = 0xa, this['_shader2D'] = new _0x16a48a());
                this['_submitKey']['clear'](), this['_mesh']['clearVB'](), this['_renderCou' + 'nt']++, this['_drawCount'] = 0x1, this['_other'] = _0x3ceef2['DEFAULT'], this['_other']['lineWidth'] = this['_shader2D']['ALPHA'] = 0x1, this['_nBlendTyp' + 'e'] = 0x0, this['_clipRect'] = _0x24c9f0['MAXCLIPREC' + 'T'], this['_curSubmit'] = _0x247f32['RENDERBASE'], _0x247f32['RENDERBASE']['_ref'] = 0xffffff, _0x247f32['RENDERBASE']['_numEle'] = 0x0, this['_shader2D']['fillStyle'] = this['_shader2D']['strokeStyl' + 'e'] = _0x334d19['DEFAULT'];
                for (var _0xa2c4b9 = 0x0, _0x10c2df = this['_submits']['_length']; _0xa2c4b9 < _0x10c2df; _0xa2c4b9++)
                    this['_submits'][_0xa2c4b9]['releaseRen' + 'der']();
                this['_submits']['_length'] = 0x0, this['_curMat']['identity'](), this['_other']['clear'](), this['_saveMark'] = this['_save'][0x0], this['_save']['_length'] = 0x1;
            }, _0x1f8a1c['size'] = function (_0x5e32b9, _0x1c1478) {
                (this['_width'] != _0x5e32b9 || this['_height'] != _0x1c1478) && (this['_width'] = _0x5e32b9, this['_height'] = _0x1c1478, this['_targets'] && (this['_targets']['destroy'](), this['_targets'] = new _0x4a9aac(_0x5e32b9, _0x1c1478, 0x1, -0x1)), _0x30d89b['_context'] == this && (_0x354f16['mainContex' + 't']['viewport'](0x0, 0x0, _0x5e32b9, _0x1c1478), _0x5c6236['width'] = _0x5e32b9, _0x5c6236['height'] = _0x1c1478));
                if (_0x5e32b9 === 0x0 && _0x1c1478 === 0x0)
                    this['_releaseMe' + 'm']();
            }, _0x1f8a1c['getMatScal' + 'eX'] = function () {
                if (this['_lastMat_a'] == this['_curMat']['a'] && this['_lastMat_b'] == this['_curMat']['b'])
                    return this['_lastMatSc' + 'aleX'];
                return this['_lastMatSc' + 'aleX'] = this['_curMat']['getScaleX'](), this['_lastMat_a'] = this['_curMat']['a'], this['_lastMat_b'] = this['_curMat']['b'], this['_lastMatSc' + 'aleX'];
            }, _0x1f8a1c['getMatScal' + 'eY'] = function () {
                if (this['_lastMat_c'] == this['_curMat']['c'] && this['_lastMat_d'] == this['_curMat']['d'])
                    return this['_lastMatSc' + 'aleY'];
                return this['_lastMatSc' + 'aleY'] = this['_curMat']['getScaleY'](), this['_lastMat_c'] = this['_curMat']['c'], this['_lastMat_d'] = this['_curMat']['d'], this['_lastMatSc' + 'aleY'];
            }, _0x1f8a1c['setFillCol' + 'or'] = function (_0x241713) {
                this['_fillColor'] = _0x241713;
            }, _0x1f8a1c['getFillCol' + 'or'] = function () {
                return this['_fillColor'];
            }, _0x1f8a1c['translate'] = function (_0x32d20b, _0x356241) {
                (_0x32d20b !== 0x0 || _0x356241 !== 0x0) && (_0x1b6ff9['save'](this), this['_curMat']['_bTransfor' + 'm'] ? (_0x5edd11['save'](this), this['_curMat']['tx'] += _0x32d20b * this['_curMat']['a'] + _0x356241 * this['_curMat']['c'], this['_curMat']['ty'] += _0x32d20b * this['_curMat']['b'] + _0x356241 * this['_curMat']['d']) : (this['_curMat']['tx'] = _0x32d20b, this['_curMat']['ty'] = _0x356241));
            }, _0x1f8a1c['save'] = function () {
                this['_save'][this['_save']['_length']++] = _0x1013b1['Create'](this);
            }, _0x1f8a1c['restore'] = function () {
                var _0x198e4e = this['_save']['_length'], _0x1ba75d = this['_nBlendTyp' + 'e'];
                if (_0x198e4e < 0x1)
                    return;
                for (var _0x43cc35 = _0x198e4e - 0x1; _0x43cc35 >= 0x0; _0x43cc35--) {
                    var _0x23fac2 = this['_save'][_0x43cc35];
                    _0x23fac2['restore'](this);
                    if (_0x23fac2['isSaveMark']()) {
                        this['_save']['_length'] = _0x43cc35;
                        return;
                    }
                }
                _0x1ba75d != this['_nBlendTyp' + 'e'] && (this['_curSubmit'] = _0x247f32['RENDERBASE']);
            }, _0x1f8a1c['fillText'] = function (_0x135c93, _0x3257be, _0x3b3160, _0x2161ef, _0x530ea3, _0x4b776a) {
                this['_fillText'](_0x135c93, null, _0x3257be, _0x3b3160, _0x2161ef, _0x530ea3, null, 0x0, null);
            }, _0x1f8a1c['_fillText'] = function (_0x2fb702, _0x1e1a58, _0x5e1498, _0x9e6497, _0x5cc06c, _0x34722e, _0x5a63b7, _0x5df61b, _0x2cfe4e, _0x12c215) {
                _0x12c215 === void 0x0 && (_0x12c215 = 0x0);
                if (_0x2fb702)
                    _0x24c9f0['_textRende' + 'r']['filltext'](this, _0x2fb702, _0x5e1498, _0x9e6497, _0x5cc06c, _0x34722e, _0x5a63b7, _0x5df61b, _0x2cfe4e, _0x12c215);
                else {
                    if (_0x1e1a58)
                        _0x24c9f0['_textRende' + 'r']['fillWords'](this, _0x1e1a58, _0x5e1498, _0x9e6497, _0x5cc06c, _0x34722e, _0x5a63b7, _0x5df61b);
                }
            }, _0x1f8a1c['_fast_fill' + 'text'] = function (_0x2cd4e5, _0x364890, _0x3f66ee, _0x3649c5, _0x569070, _0x2e4514, _0x47c703, _0x239eef, _0x40cc3a) {
                _0x40cc3a === void 0x0 && (_0x40cc3a = 0x0), _0x24c9f0['_textRende' + 'r']['_fast_fill' + 'text'](this, _0x2cd4e5, null, _0x364890, _0x3f66ee, _0x3649c5, _0x569070, _0x2e4514, _0x47c703, _0x239eef, _0x40cc3a);
            }, _0x1f8a1c['fillWords'] = function (_0x3072b0, _0x10faf0, _0x447446, _0x301046, _0xf17750) {
                this['_fillText'](null, _0x3072b0, _0x10faf0, _0x447446, _0x301046, _0xf17750, null, -0x1, null, 0x0);
            }, _0x1f8a1c['fillBorder' + 'Words'] = function (_0x17ef1a, _0x10013f, _0x3113cf, _0x4138d6, _0x3d6144, _0x58b2b2, _0x458572) {
                this['_fillBorde' + 'rText'](null, _0x17ef1a, _0x10013f, _0x3113cf, _0x4138d6, _0x3d6144, _0x58b2b2, _0x458572, null);
            }, _0x1f8a1c['drawText'] = function (_0x169b52, _0x3ddbe1, _0x5d188a, _0x481ba7, _0x1c51ac, _0x338bc7) {
                this['_fillText'](_0x169b52, null, _0x3ddbe1, _0x5d188a, _0x481ba7, _0x4b1f30['create'](_0x1c51ac)['strColor'], null, -0x1, _0x338bc7);
            }, _0x1f8a1c['strokeWord'] = function (_0x43720c, _0x21af59, _0xcebeac, _0x46f2a1, _0x17a78b, _0x29eb84, _0x2fe336) {
                ;
                this['_fillText'](_0x43720c, null, _0x21af59, _0xcebeac, _0x46f2a1, null, _0x4b1f30['create'](_0x17a78b)['strColor'], _0x29eb84 || 0x1, _0x2fe336);
            }, _0x1f8a1c['fillBorder' + 'Text'] = function (_0x10a928, _0x269b42, _0x539ec7, _0x349568, _0x20b324, _0x5499e9, _0x2f81b6, _0x4127ff) {
                this['_fillBorde' + 'rText'](_0x10a928, null, _0x269b42, _0x539ec7, _0x349568, _0x4b1f30['create'](_0x20b324)['strColor'], _0x4b1f30['create'](_0x5499e9)['strColor'], _0x2f81b6, _0x4127ff);
            }, _0x1f8a1c['_fillBorde' + 'rText'] = function (_0x4db6a9, _0x98cae2, _0x340548, _0x24a816, _0x16e30e, _0x2ef9b6, _0x1caf84, _0x1a7c37, _0x3bbd53) {
                this['_fillText'](_0x4db6a9, _0x98cae2, _0x340548, _0x24a816, _0x16e30e, _0x2ef9b6, _0x1caf84, _0x1a7c37 || 0x1, _0x3bbd53);
            }, _0x1f8a1c['_fillRect'] = function (_0x5d398c, _0x1d1dc1, _0x1f6500, _0x264153, _0xd82a4f) {
                var _0x57ef1f = this['_curSubmit'], _0x37c9a0 = _0x57ef1f && (_0x57ef1f['_key']['submitType'] === 0x2 && _0x57ef1f['_key']['blendShade' + 'r'] === this['_nBlendTyp' + 'e']);
                this['_mesh']['vertNum'] + 0x4 > 0xffff && (this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']), _0x37c9a0 = ![]), _0x37c9a0 && (_0x37c9a0 = _0x37c9a0 && this['isSameClip' + 'Info'](_0x57ef1f)), this['transformQ' + 'uad'](_0x5d398c, _0x1d1dc1, _0x1f6500, _0x264153, 0x0, this['_curMat'], this['_transedPo' + 'ints']), !this['clipedOff'](this['_transedPo' + 'ints']) && (this['_mesh']['addQuad'](this['_transedPo' + 'ints'], _0x4fcec0['NO_UV'], _0xd82a4f, ![]), !_0x37c9a0 && (_0x57ef1f = this['_curSubmit'] = _0x519df4['create'](this, this['_mesh'], _0xd9aa33['create'](0x1, 0x0)), this['_submits'][this['_submits']['_length']++] = _0x57ef1f, this['_copyClipI' + 'nfo'](_0x57ef1f, this['_globalCli' + 'pMatrix']), _0x57ef1f['shaderValu' + 'e']['textureHos' + 't'] = this['_lastTex'], _0x57ef1f['_key']['other'] = this['_lastTex'] && this['_lastTex']['bitmap'] ? this['_lastTex']['bitmap']['id'] : -0x1, _0x57ef1f['_renderTyp' + 'e'] = 0x2720), this['_curSubmit']['_numEle'] += 0x6, this['_mesh']['indexNum'] += 0x6, this['_mesh']['vertNum'] += 0x4);
            }, _0x1f8a1c['fillRect'] = function (_0x3281bc, _0x8631fd, _0x2183bd, _0x206b36, _0x386a79) {
                var _0xee89c2 = _0x386a79 ? _0x334d19['create'](_0x386a79) : this['_shader2D']['fillStyle'], _0x1058f2 = this['mixRGBandA' + 'lpha'](_0xee89c2['toInt']());
                this['_fillRect'](_0x3281bc, _0x8631fd, _0x2183bd, _0x206b36, _0x1058f2);
            }, _0x1f8a1c['fillTextur' + 'e'] = function (_0x3a6956, _0x278e55, _0x176d21, _0x258635, _0x4fd589, _0x23724d, _0x583404, _0x551aa9) {
                if (!_0x3a6956['_getSource']()) {
                    this['sprite'] && _0x4a6519['systemTime' + 'r']['callLater'](this, this['_repaintSp' + 'rite']);
                    return;
                }
                ;
                var _0x59a116 = this['_curSubmit'], _0x5b7bfc = ![];
                this['_mesh']['vertNum'] + 0x4 > 0xffff && (this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']), _0x5b7bfc = ![]);
                ;
                var _0x27b2b7 = _0x3a6956['bitmap'], _0x43c587 = !![], _0x2b438c = !![];
                switch (_0x23724d) {
                case 'repeat':
                    break;
                case 'repeat-x':
                    _0x2b438c = ![];
                    break;
                case 'repeat-y':
                    _0x43c587 = ![];
                    break;
                case 'no-repeat':
                    _0x43c587 = _0x2b438c = ![];
                    break;
                default:
                    break;
                }
                ;
                var _0x49e0ad = this['_temp4Poin' + 'ts'], _0x15dc1a = 0x0, _0x474c6e = 0x0, _0x227d33 = 0x0, _0x3748bf = 0x0, _0x5d8550 = 0x0, _0x19fff0 = 0x0;
                _0x583404['x'] < 0x0 ? (_0x227d33 = _0x278e55, _0x15dc1a = -_0x583404['x'] % _0x3a6956['width'] / _0x3a6956['width']) : _0x227d33 = _0x278e55 + _0x583404['x'];
                _0x583404['y'] < 0x0 ? (_0x3748bf = _0x176d21, _0x474c6e = -_0x583404['y'] % _0x3a6956['height'] / _0x3a6956['height']) : _0x3748bf = _0x176d21 + _0x583404['y'];
                _0x5d8550 = _0x278e55 + _0x258635, _0x19fff0 = _0x176d21 + _0x4fd589, !_0x43c587 && (_0x5d8550 = Math['min'](_0x5d8550, _0x278e55 + _0x583404['x'] + _0x3a6956['width'])), !_0x2b438c && (_0x19fff0 = Math['min'](_0x19fff0, _0x176d21 + _0x583404['y'] + _0x3a6956['height']));
                if (_0x5d8550 < _0x278e55 || _0x19fff0 < _0x176d21)
                    return;
                if (_0x227d33 > _0x5d8550 || _0x3748bf > _0x19fff0)
                    return;
                var _0x56a39a = (_0x5d8550 - _0x278e55 - _0x583404['x']) / _0x3a6956['width'], _0x4e64b6 = (_0x19fff0 - _0x176d21 - _0x583404['y']) / _0x3a6956['height'];
                this['transformQ' + 'uad'](_0x227d33, _0x3748bf, _0x5d8550 - _0x227d33, _0x19fff0 - _0x3748bf, 0x0, this['_curMat'], this['_transedPo' + 'ints']), _0x49e0ad[0x0] = _0x15dc1a, _0x49e0ad[0x1] = _0x474c6e, _0x49e0ad[0x2] = _0x56a39a, _0x49e0ad[0x3] = _0x474c6e, _0x49e0ad[0x4] = _0x56a39a, _0x49e0ad[0x5] = _0x4e64b6, _0x49e0ad[0x6] = _0x15dc1a, _0x49e0ad[0x7] = _0x4e64b6;
                if (!this['clipedOff'](this['_transedPo' + 'ints'])) {
                    var _0x23b0af = this['_mixRGBand' + 'Alpha'](0xffffffff, this['_shader2D']['ALPHA']);
                    this['_mesh']['addQuad'](this['_transedPo' + 'ints'], _0x49e0ad, _0x23b0af, !![]);
                    var _0x57dcfa = _0xd9aa33['create'](0x1, 0x0);
                    _0x57dcfa['defines']['add'](0x100), _0x57dcfa['u_TexRange'] = _0x3a6956['uvrect'], _0x59a116 = this['_curSubmit'] = _0x519df4['create'](this, this['_mesh'], _0x57dcfa), this['_submits'][this['_submits']['_length']++] = _0x59a116, this['_copyClipI' + 'nfo'](_0x59a116, this['_globalCli' + 'pMatrix']), _0x59a116['shaderValu' + 'e']['textureHos' + 't'] = _0x3a6956, _0x59a116['_renderTyp' + 'e'] = 0x2720, this['_curSubmit']['_numEle'] += 0x6, this['_mesh']['indexNum'] += 0x6, this['_mesh']['vertNum'] += 0x4;
                }
                this['breakNextM' + 'erge']();
            }, _0x1f8a1c['setColorFi' + 'lter'] = function (_0x4edcfb) {
                _0x2f38dd['save'](this, 0x800000, this, !![]), this['_colorFile' + 'r'] = _0x4edcfb, this['_curSubmit'] = _0x247f32['RENDERBASE'];
            }, _0x1f8a1c['drawTextur' + 'e'] = function (_0x532ab5, _0x1c338c, _0x44bdaa, _0x41f56d, _0x2691de) {
                this['_drawTextu' + 'reM'](_0x532ab5, _0x1c338c, _0x44bdaa, _0x41f56d, _0x2691de, null, 0x1, null);
            }, _0x1f8a1c['drawTextur' + 'es'] = function (_0x1256b9, _0x3b5904, _0x6a25cd, _0x5b413c) {
                if (!_0x1256b9['_getSource']()) {
                    this['sprite'] && _0x4a6519['systemTime' + 'r']['callLater'](this, this['_repaintSp' + 'rite']);
                    return;
                }
                ;
                var _0x458c54 = _0x3b5904['length'] / 0x2, _0x274705 = 0x0;
                for (var _0x3fa173 = 0x0; _0x3fa173 < _0x458c54; _0x3fa173++) {
                    this['_inner_dra' + 'wTexture'](_0x1256b9, _0x1256b9['bitmap']['id'], _0x3b5904[_0x274705++] + _0x6a25cd, _0x3b5904[_0x274705++] + _0x5b413c, 0x0, 0x0, null, null, 0x1, ![]);
                }
            }, _0x1f8a1c['_drawTextu' + 'reAddSubmi' + 't'] = function (_0x477aa6, _0xb1e947) {
                var _0x1432b2 = null;
                _0x1432b2 = _0x519df4['create'](this, this['_mesh'], _0xd9aa33['create'](0x1, 0x0)), this['_submits'][this['_submits']['_length']++] = _0x1432b2, _0x1432b2['shaderValu' + 'e']['textureHos' + 't'] = _0xb1e947, _0x1432b2['_key']['other'] = _0x477aa6, _0x1432b2['_renderTyp' + 'e'] = 0x2720, this['_curSubmit'] = _0x1432b2;
            }, _0x1f8a1c['_drawTextu' + 'reM'] = function (_0xdcd83f, _0x557a4b, _0x16aa48, _0x234eba, _0x4b0c55, _0x5acd60, _0x1afe29, _0x211a9f) {
                if (!_0xdcd83f['_getSource']())
                    return this['sprite'] && _0x4a6519['systemTime' + 'r']['callLater'](this, this['_repaintSp' + 'rite']), ![];
                return this['_inner_dra' + 'wTexture'](_0xdcd83f, _0xdcd83f['bitmap']['id'], _0x557a4b, _0x16aa48, _0x234eba, _0x4b0c55, _0x5acd60, _0x211a9f, _0x1afe29, ![]);
            }, _0x1f8a1c['_drawRende' + 'rTexture'] = function (_0x40543b, _0x24c9d4, _0x1ace96, _0x9abc04, _0x2f6ab5, _0x1c6a01, _0x438ca4, _0x21e915) {
                return this['_inner_dra' + 'wTexture'](_0x40543b, -0x1, _0x24c9d4, _0x1ace96, _0x9abc04, _0x2f6ab5, _0x1c6a01, _0x21e915, 0x1, ![]);
            }, _0x1f8a1c['submitDebu' + 'gger'] = function () {
                this['_submits'][this['_submits']['_length']++] = _0x4f1d6e['create']([], function () {
                    debugger;
                }, this);
            }, _0x1f8a1c['_copyClipI' + 'nfo'] = function (_0x3c279d, _0x3ad2af) {
                var _0x36bd90 = _0x3c279d['shaderValu' + 'e']['clipMatDir'];
                _0x36bd90[0x0] = _0x3ad2af['a'], _0x36bd90[0x1] = _0x3ad2af['b'], _0x36bd90[0x2] = _0x3ad2af['c'], _0x36bd90[0x3] = _0x3ad2af['d'];
                var _0x12957c = _0x3c279d['shaderValu' + 'e']['clipMatPos'];
                _0x12957c[0x0] = _0x3ad2af['tx'], _0x12957c[0x1] = _0x3ad2af['ty'], _0x3c279d['clipInfoID'] = this['_clipInfoI' + 'D'];
            }, _0x1f8a1c['isSameClip' + 'Info'] = function (_0x38fc24) {
                return _0x38fc24['clipInfoID'] === this['_clipInfoI' + 'D'];
            }, _0x1f8a1c['_useNewTex' + '2DSubmit'] = function (_0x5d7637, _0x3b6a3c) {
                this['_mesh']['vertNum'] + _0x3b6a3c > 0xffff && (this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']));
                ;
                var _0x59db4c = _0x519df4['create'](this, this['_mesh'], _0xd9aa33['create'](0x1, 0x0));
                this['_submits'][this['_submits']['_length']++] = this['_curSubmit'] = _0x59db4c, _0x59db4c['shaderValu' + 'e']['textureHos' + 't'] = _0x5d7637, this['_copyClipI' + 'nfo'](_0x59db4c, this['_globalCli' + 'pMatrix']);
            }, _0x1f8a1c['_drawTexRe' + 'ct'] = function (_0x1d334e, _0x3149a8, _0x44d441, _0x9c9b05, _0x5b6b92) {
                this['transformQ' + 'uad'](_0x1d334e, _0x3149a8, _0x44d441, _0x9c9b05, this['_italicDeg'], this['_curMat'], this['_transedPo' + 'ints']);
                var _0x3be547 = this['_transedPo' + 'ints'];
                _0x3be547[0x0] = _0x3be547[0x0] + 0.5 | 0x0, _0x3be547[0x1] = _0x3be547[0x1] + 0.5 | 0x0, _0x3be547[0x2] = _0x3be547[0x2] + 0.5 | 0x0, _0x3be547[0x3] = _0x3be547[0x3] + 0.5 | 0x0, _0x3be547[0x4] = _0x3be547[0x4] + 0.5 | 0x0, _0x3be547[0x5] = _0x3be547[0x5] + 0.5 | 0x0, _0x3be547[0x6] = _0x3be547[0x6] + 0.5 | 0x0, _0x3be547[0x7] = _0x3be547[0x7] + 0.5 | 0x0, !this['clipedOff'](this['_transedPo' + 'ints']) && (this['_mesh']['addQuad'](this['_transedPo' + 'ints'], _0x5b6b92, this['_fillColor'], !![]), this['_curSubmit']['_numEle'] += 0x6, this['_mesh']['indexNum'] += 0x6, this['_mesh']['vertNum'] += 0x4);
            }, _0x1f8a1c['drawCallOp' + 'timize'] = function (_0x37e187) {
                return this['_charSubmi' + 'tCache']['enable'](_0x37e187, this), _0x37e187;
            }, _0x1f8a1c['_inner_dra' + 'wTexture'] = function (_0x433d90, _0x1e94f5, _0x4391a0, _0x4e6306, _0x2e8e98, _0x371d3, _0x939b0f, _0x559139, _0x17a7c7, _0x42d120) {
                var _0x151eac = this['_curSubmit']['_key'];
                _0x559139 = _0x559139 || _0x433d90['_uv'];
                if (_0x151eac['submitType'] === 0x4 && _0x151eac['other'] === _0x1e94f5) {
                    var _0x1db709 = _0x24c9f0['_drawTexTo' + 'DrawTri_Ve' + 'rt'];
                    return _0x1db709[0x0] = _0x4391a0, _0x1db709[0x1] = _0x4e6306, (_0x1db709[0x2] = _0x4391a0 + _0x2e8e98, _0x1db709[0x3] = _0x4e6306, _0x1db709[0x4] = _0x4391a0 + _0x2e8e98, _0x1db709[0x5] = _0x4e6306 + _0x371d3, _0x1db709[0x6] = _0x4391a0, _0x1db709[0x7] = _0x4e6306 + _0x371d3), this['_drawTriUs' + 'eAbsMatrix'] = !![], this['drawTriang' + 'les'](_0x433d90, 0x0, 0x0, _0x1db709, _0x559139, _0x24c9f0['_drawTexTo' + 'DrawTri_In' + 'dex'], _0x939b0f, _0x17a7c7, null, 'normal'), this['_drawTriUs' + 'eAbsMatrix'] = ![], !![];
                }
                ;
                var _0x1a5c91 = _0x42d120 ? this['_charSubmi' + 'tCache']['getPos']() : this['_transedPo' + 'ints'];
                this['transformQ' + 'uad'](_0x4391a0, _0x4e6306, _0x2e8e98 || _0x433d90['width'], _0x371d3 || _0x433d90['height'], this['_italicDeg'], _0x939b0f || this['_curMat'], _0x1a5c91);
                this['drawTexAli' + 'gn'] && (_0x1a5c91[0x0] = _0x1a5c91[0x0] + 0.5 | 0x0, _0x1a5c91[0x1] = _0x1a5c91[0x1] + 0.5 | 0x0, _0x1a5c91[0x2] = _0x1a5c91[0x2] + 0.5 | 0x0, _0x1a5c91[0x3] = _0x1a5c91[0x3] + 0.5 | 0x0, _0x1a5c91[0x4] = _0x1a5c91[0x4] + 0.5 | 0x0, _0x1a5c91[0x5] = _0x1a5c91[0x5] + 0.5 | 0x0, _0x1a5c91[0x6] = _0x1a5c91[0x6] + 0.5 | 0x0, _0x1a5c91[0x7] = _0x1a5c91[0x7] + 0.5 | 0x0, this['drawTexAli' + 'gn'] = ![]);
                ;
                var _0x4d5e48 = this['_mixRGBand' + 'Alpha'](0xffffffff, this['_shader2D']['ALPHA'] * _0x17a7c7);
                if (_0x42d120)
                    return this['_charSubmi' + 'tCache']['add'](this, _0x433d90, _0x1e94f5, _0x1a5c91, _0x559139, _0x4d5e48), !![];
                this['_drawCount']++;
                var _0x3b529f = _0x1e94f5 >= 0x0 && _0x151eac['submitType'] === 0x2 && _0x151eac['other'] === _0x1e94f5;
                _0x3b529f && (_0x3b529f = _0x3b529f && this['isSameClip' + 'Info'](this['_curSubmit'])), this['_lastTex'] = _0x433d90;
                this['_mesh']['vertNum'] + 0x4 > 0xffff && (this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']), _0x3b529f = ![]);
                if (!this['clipedOff'](this['_transedPo' + 'ints'])) {
                    this['_mesh']['addQuad'](_0x1a5c91, _0x559139, _0x4d5e48, !![]);
                    if (!_0x3b529f) {
                        var _0x2f48c5 = _0x519df4['create'](this, this['_mesh'], _0xd9aa33['create'](0x1, 0x0));
                        this['_submits'][this['_submits']['_length']++] = this['_curSubmit'] = _0x2f48c5, _0x2f48c5['shaderValu' + 'e']['textureHos' + 't'] = _0x433d90, _0x2f48c5['_key']['other'] = _0x1e94f5, this['_copyClipI' + 'nfo'](_0x2f48c5, this['_globalCli' + 'pMatrix']);
                    }
                    return this['_curSubmit']['_numEle'] += 0x6, this['_mesh']['indexNum'] += 0x6, this['_mesh']['vertNum'] += 0x4, !![];
                }
                return ![];
            }, _0x1f8a1c['transform4' + 'Points'] = function (_0x40ee14, _0x4bc68d, _0x4a3a8b) {
                var _0x1c2249 = _0x4bc68d['tx'], _0x2b52ee = _0x4bc68d['ty'];
                _0x4bc68d['_bTransfor' + 'm'] ? (_0x4a3a8b[0x0] = _0x40ee14[0x0] * _0x4bc68d['a'] + _0x40ee14[0x1] * _0x4bc68d['c'] + _0x1c2249, _0x4a3a8b[0x1] = _0x40ee14[0x0] * _0x4bc68d['b'] + _0x40ee14[0x1] * _0x4bc68d['d'] + _0x2b52ee, _0x4a3a8b[0x2] = _0x40ee14[0x2] * _0x4bc68d['a'] + _0x40ee14[0x3] * _0x4bc68d['c'] + _0x1c2249, _0x4a3a8b[0x3] = _0x40ee14[0x2] * _0x4bc68d['b'] + _0x40ee14[0x3] * _0x4bc68d['d'] + _0x2b52ee, _0x4a3a8b[0x4] = _0x40ee14[0x4] * _0x4bc68d['a'] + _0x40ee14[0x5] * _0x4bc68d['c'] + _0x1c2249, _0x4a3a8b[0x5] = _0x40ee14[0x4] * _0x4bc68d['b'] + _0x40ee14[0x5] * _0x4bc68d['d'] + _0x2b52ee, _0x4a3a8b[0x6] = _0x40ee14[0x6] * _0x4bc68d['a'] + _0x40ee14[0x7] * _0x4bc68d['c'] + _0x1c2249, _0x4a3a8b[0x7] = _0x40ee14[0x6] * _0x4bc68d['b'] + _0x40ee14[0x7] * _0x4bc68d['d'] + _0x2b52ee) : (_0x4a3a8b[0x0] = _0x40ee14[0x0] + _0x1c2249, _0x4a3a8b[0x1] = _0x40ee14[0x1] + _0x2b52ee, _0x4a3a8b[0x2] = _0x40ee14[0x2] + _0x1c2249, _0x4a3a8b[0x3] = _0x40ee14[0x3] + _0x2b52ee, _0x4a3a8b[0x4] = _0x40ee14[0x4] + _0x1c2249, _0x4a3a8b[0x5] = _0x40ee14[0x5] + _0x2b52ee, _0x4a3a8b[0x6] = _0x40ee14[0x6] + _0x1c2249, _0x4a3a8b[0x7] = _0x40ee14[0x7] + _0x2b52ee);
            }, _0x1f8a1c['clipedOff'] = function (_0x565d93) {
                if (this['_clipRect']['width'] <= 0x0 || this['_clipRect']['height'] <= 0x0)
                    return !![];
                return ![];
            }, _0x1f8a1c['transformQ' + 'uad'] = function (_0x3cf510, _0x5add90, _0x92ae7a, _0x2bdc3c, _0x2b947c, _0x52a963, _0x12e680) {
                var _0x1ea39f = 0x0;
                _0x2b947c != 0x0 && (_0x1ea39f = Math['tan'](_0x2b947c * Math['PI'] / 0xb4) * _0x2bdc3c);
                ;
                var _0x51e2c7 = _0x3cf510 + _0x92ae7a, _0x1285a7 = _0x5add90 + _0x2bdc3c;
                this['_temp4Poin' + 'ts'][0x0] = _0x3cf510 + _0x1ea39f, this['_temp4Poin' + 'ts'][0x1] = _0x5add90, this['_temp4Poin' + 'ts'][0x2] = _0x51e2c7 + _0x1ea39f, this['_temp4Poin' + 'ts'][0x3] = _0x5add90, this['_temp4Poin' + 'ts'][0x4] = _0x51e2c7, this['_temp4Poin' + 'ts'][0x5] = _0x1285a7, this['_temp4Poin' + 'ts'][0x6] = _0x3cf510, this['_temp4Poin' + 'ts'][0x7] = _0x1285a7, this['transform4' + 'Points'](this['_temp4Poin' + 'ts'], _0x52a963, _0x12e680);
            }, _0x1f8a1c['pushRT'] = function () {
                this['addRenderO' + 'bject'](_0x4f1d6e['create'](null, _0x4a9aac['pushRT'], this));
            }, _0x1f8a1c['popRT'] = function () {
                this['addRenderO' + 'bject'](_0x4f1d6e['create'](null, _0x4a9aac['popRT'], this)), this['breakNextM' + 'erge']();
            }, _0x1f8a1c['useRT'] = function (_0x3b6121) {
                function _0x18a63a(_0x427289) {
                    if (!_0x427289)
                        throw 'error\x20useR' + 'T';
                    else
                        _0x427289['start'](), _0x427289['clear'](0x0, 0x0, 0x0, 0x0);
                }
                this['addRenderO' + 'bject'](_0x4f1d6e['create']([_0x3b6121], _0x18a63a, this)), this['breakNextM' + 'erge']();
            }, _0x1f8a1c['RTRestore'] = function (_0x250c9e) {
                function _0x1fd75d(_0x3407cc) {
                    _0x3407cc['restore']();
                }
                this['addRenderO' + 'bject'](_0x4f1d6e['create']([_0x250c9e], _0x1fd75d, this)), this['breakNextM' + 'erge']();
            }, _0x1f8a1c['breakNextM' + 'erge'] = function () {
                this['_curSubmit'] = _0x247f32['RENDERBASE'];
            }, _0x1f8a1c['_repaintSp' + 'rite'] = function () {
                this['sprite'] && this['sprite']['repaint']();
            }, _0x1f8a1c['drawTextur' + 'eWithTrans' + 'form'] = function (_0x16963d, _0x4ba07b, _0x1c2841, _0x19038e, _0x389f86, _0x3d457a, _0xc08d87, _0x51a4b7, _0x5d0a5f, _0x5eac63, _0x3bd6ef) {
                var _0x85c8b0 = null;
                _0x5eac63 && (_0x85c8b0 = this['globalComp' + 'ositeOpera' + 'tion'], this['globalComp' + 'ositeOpera' + 'tion'] = _0x5eac63);
                ;
                var _0x316e1c = this['_colorFile' + 'r'];
                _0x3bd6ef && this['setColorFi' + 'lter'](_0x3bd6ef);
                if (!_0x3d457a) {
                    this['_drawTextu' + 'reM'](_0x16963d, _0x4ba07b + _0xc08d87, _0x1c2841 + _0x51a4b7, _0x19038e, _0x389f86, null, _0x5d0a5f, null);
                    _0x5eac63 && (this['globalComp' + 'ositeOpera' + 'tion'] = _0x85c8b0);
                    _0x3bd6ef && this['setColorFi' + 'lter'](_0x316e1c);
                    return;
                }
                ;
                var _0x1eb59a = this['_curMat'];
                _0x24c9f0['_tmpMatrix']['a'] = _0x3d457a['a'], _0x24c9f0['_tmpMatrix']['b'] = _0x3d457a['b'], _0x24c9f0['_tmpMatrix']['c'] = _0x3d457a['c'], _0x24c9f0['_tmpMatrix']['d'] = _0x3d457a['d'], _0x24c9f0['_tmpMatrix']['tx'] = _0x3d457a['tx'] + _0xc08d87, _0x24c9f0['_tmpMatrix']['ty'] = _0x3d457a['ty'] + _0x51a4b7, _0x24c9f0['_tmpMatrix']['_bTransfor' + 'm'] = _0x3d457a['_bTransfor' + 'm'], _0x3d457a && _0x1eb59a['_bTransfor' + 'm'] ? (_0x4fb671['mul'](_0x24c9f0['_tmpMatrix'], _0x1eb59a, _0x24c9f0['_tmpMatrix']), _0x3d457a = _0x24c9f0['_tmpMatrix'], _0x3d457a['_bTransfor' + 'm'] = !![]) : _0x3d457a = _0x24c9f0['_tmpMatrix'], this['_drawTextu' + 'reM'](_0x16963d, _0x4ba07b, _0x1c2841, _0x19038e, _0x389f86, _0x3d457a, _0x5d0a5f, null), _0x5eac63 && (this['globalComp' + 'ositeOpera' + 'tion'] = _0x85c8b0), _0x3bd6ef && this['setColorFi' + 'lter'](_0x316e1c);
            }, _0x1f8a1c['_flushToTa' + 'rget'] = function (_0x18ab6f, _0x4ed462) {
                _0x5c6236['worldSciss' + 'orTest'] = ![], _0x354f16['mainContex' + 't']['disable'](0xc11);
                var _0x2df7cf = _0x5c6236['worldAlpha'], _0x17769a = _0x5c6236['worldMatri' + 'x4'], _0x2ef5f2 = _0x5c6236['worldMatri' + 'x'], _0xb968ad = _0x5c6236['worldShade' + 'rDefines'];
                _0x5c6236['worldMatri' + 'x'] = _0x4fb671['EMPTY'], _0x5c6236['restoreTem' + 'pArray'](), _0x5c6236['worldMatri' + 'x4'] = _0x5c6236['TEMPMAT4_A' + 'RRAY'], _0x5c6236['worldAlpha'] = 0x1, _0xea7fb6['activeShad' + 'er'] = null, _0x4ed462['start']();
                if (_0x18ab6f['_submits']['_length'] > 0x0)
                    _0x4ed462['clear'](0x0, 0x0, 0x0, 0x0);
                _0x18ab6f['_curSubmit'] = _0x247f32['RENDERBASE'], _0x18ab6f['flush'](), _0x18ab6f['clear'](), _0x4ed462['restore'](), _0x18ab6f['_curSubmit'] = _0x247f32['RENDERBASE'], _0xea7fb6['activeShad' + 'er'] = null, _0x5c6236['worldAlpha'] = _0x2df7cf, _0x5c6236['worldMatri' + 'x4'] = _0x17769a, _0x5c6236['worldMatri' + 'x'] = _0x2ef5f2;
            }, _0x1f8a1c['drawCanvas'] = function (_0x269a35, _0x1621b4, _0x43f9f6, _0x1230c0, _0x3cebb0) {
                var _0x4ce623 = _0x269a35['context'], _0x4fe8af;
                if (_0x4ce623['_targets'])
                    _0x4ce623['_submits']['_length'] > 0x0 && (_0x4fe8af = _0x4f1d6e['create']([
                        _0x4ce623,
                        _0x4ce623['_targets']
                    ], this['_flushToTa' + 'rget'], this), this['_submits'][this['_submits']['_length']++] = _0x4fe8af), this['_drawRende' + 'rTexture'](_0x4ce623['_targets'], _0x1621b4, _0x43f9f6, _0x1230c0, _0x3cebb0, null, 0x1, _0x4a9aac['flipyuv']), this['_curSubmit'] = _0x247f32['RENDERBASE'];
                else {
                    var _0x505923 = _0x269a35;
                    _0x505923['touches'] && _0x505923['touches']['forEach'](function (_0x36089e) {
                        _0x36089e['touch']();
                    });
                    _0x4fe8af = _0x1836f7['create'](_0x269a35, this['_shader2D']['ALPHA'], this['_shader2D']['filters']), this['_submits'][this['_submits']['_length']++] = _0x4fe8af, _0x4fe8af['_key']['clear']();
                    var _0x27e1e6 = _0x4fe8af['_matrix'];
                    this['_curMat']['copyTo'](_0x27e1e6);
                    var _0x3a7385 = _0x27e1e6['tx'], _0xa3ac42 = _0x27e1e6['ty'];
                    _0x27e1e6['tx'] = _0x27e1e6['ty'] = 0x0, _0x27e1e6['transformP' + 'oint'](_0x4eeaa7['TEMP']['setTo'](_0x1621b4, _0x43f9f6)), _0x27e1e6['translate'](_0x4eeaa7['TEMP']['x'] + _0x3a7385, _0x4eeaa7['TEMP']['y'] + _0xa3ac42), _0x4fb671['mul'](_0x505923['invMat'], _0x27e1e6, _0x27e1e6), this['_curSubmit'] = _0x247f32['RENDERBASE'];
                }
            }, _0x1f8a1c['drawTarget'] = function (_0xd00a1, _0x37cd4e, _0x238048, _0x4ade7c, _0x19030a, _0x11a90d, _0x51ccd9, _0x4d79, _0x136efd) {
                _0x136efd === void 0x0 && (_0x136efd = -0x1), this['_drawCount']++;
                var _0x55ee20 = this['mixRGBandA' + 'lpha'](this['_drawTextu' + 'reUseColor'] ? this['fillStyle'] ? this['fillStyle']['toInt']() : 0x0 : 0xffffffff);
                this['_mesh']['vertNum'] + 0x4 > 0xffff && (this['_mesh'] = _0x1645d2['getAMesh'](), this['meshlist']['push'](this['_mesh']));
                this['transformQ' + 'uad'](_0x37cd4e, _0x238048, _0x4ade7c, _0x19030a, 0x0, _0x11a90d || this['_curMat'], this['_transedPo' + 'ints']);
                if (!this['clipedOff'](this['_transedPo' + 'ints'])) {
                    this['_mesh']['addQuad'](this['_transedPo' + 'ints'], _0x4d79 || _0x4fcec0['DEF_UV'], 0xffffffff, !![]);
                    var _0x275853 = this['_curSubmit'] = _0x19c1d3['create'](this, this['_mesh'], _0x51ccd9, _0xd00a1);
                    return _0x275853['blendType'] = _0x136efd == -0x1 ? this['_nBlendTyp' + 'e'] : _0x136efd, this['_copyClipI' + 'nfo'](_0x275853, this['_globalCli' + 'pMatrix']), _0x275853['_numEle'] = 0x6, this['_mesh']['indexNum'] += 0x6, this['_mesh']['vertNum'] += 0x4, this['_maxNumEle'] = Math['max'](this['_maxNumEle'], _0x275853['_numEle']), this['_submits'][this['_submits']['_length']++] = _0x275853, this['_curSubmit'] = _0x247f32['RENDERBASE'], !![];
                }
                return this['_curSubmit'] = _0x247f32['RENDERBASE'], ![];
            }, _0x1f8a1c['drawTriang' + 'les'] = function (_0x1bf04c, _0x4803d6, _0x2d9557, _0x36d5e0, _0x3e96a3, _0x8cfc37, _0x564a18, _0xa8e602, _0x3c858e, _0x1a2119) {
                if (!_0x1bf04c['_getSource']()) {
                    this['sprite'] && _0x4a6519['systemTime' + 'r']['callLater'](this, this['_repaintSp' + 'rite']);
                    return;
                }
                this['_drawCount']++;
                var _0xf34877 = null, _0x4f0513 = ![];
                _0x3c858e && (_0xf34877 = this['_colorFile' + 'r'], this['_colorFile' + 'r'] = _0x3c858e, this['_curSubmit'] = _0x247f32['RENDERBASE'], _0x4f0513 = _0xf34877 != _0x3c858e);
                ;
                var _0x3580e6 = _0x1bf04c['bitmap'], _0x8f14be = this['_curSubmit']['_key'], _0x1e0446 = _0x8f14be['submitType'] === 0x4 && _0x8f14be['other'] === _0x3580e6['id'] && _0x8f14be['blendShade' + 'r'] == this['_nBlendTyp' + 'e'], _0x5ac68c = this['_mixRGBand' + 'Alpha'](0xffffffff, this['_shader2D']['ALPHA'] * _0xa8e602), _0x312541 = _0x36d5e0['length'] / 0x2, _0x2679c6 = _0x8cfc37['length'];
                this['_triangleM' + 'esh']['vertNum'] + _0x312541 > 0xffff && (this['_triangleM' + 'esh'] = _0x2696ab['getAMesh'](), this['meshlist']['push'](this['_triangleM' + 'esh']), _0x1e0446 = ![]);
                if (!_0x1e0446) {
                    var _0x46f93c = this['_curSubmit'] = _0x519df4['create'](this, this['_triangleM' + 'esh'], _0xd9aa33['create'](0x1, 0x0));
                    _0x46f93c['shaderValu' + 'e']['textureHos' + 't'] = _0x1bf04c, _0x46f93c['_renderTyp' + 'e'] = 0x2720, _0x46f93c['_key']['submitType'] = 0x4, _0x46f93c['_key']['other'] = _0x3580e6['id'], this['_copyClipI' + 'nfo'](_0x46f93c, this['_globalCli' + 'pMatrix']), this['_submits'][this['_submits']['_length']++] = _0x46f93c;
                }
                !_0x564a18 ? (_0x24c9f0['_tmpMatrix']['a'] = 0x1, _0x24c9f0['_tmpMatrix']['b'] = 0x0, _0x24c9f0['_tmpMatrix']['c'] = 0x0, _0x24c9f0['_tmpMatrix']['d'] = 0x1, _0x24c9f0['_tmpMatrix']['tx'] = _0x4803d6, _0x24c9f0['_tmpMatrix']['ty'] = _0x2d9557) : (_0x24c9f0['_tmpMatrix']['a'] = _0x564a18['a'], _0x24c9f0['_tmpMatrix']['b'] = _0x564a18['b'], _0x24c9f0['_tmpMatrix']['c'] = _0x564a18['c'], _0x24c9f0['_tmpMatrix']['d'] = _0x564a18['d'], _0x24c9f0['_tmpMatrix']['tx'] = _0x564a18['tx'] + _0x4803d6, _0x24c9f0['_tmpMatrix']['ty'] = _0x564a18['ty'] + _0x2d9557), !this['_drawTriUs' + 'eAbsMatrix'] && _0x4fb671['mul'](_0x24c9f0['_tmpMatrix'], this['_curMat'], _0x24c9f0['_tmpMatrix']), this['_triangleM' + 'esh']['addData'](_0x36d5e0, _0x3e96a3, _0x8cfc37, _0x24c9f0['_tmpMatrix'], _0x5ac68c, this), this['_curSubmit']['_numEle'] += _0x2679c6, this['_maxNumEle'] = Math['max'](this['_maxNumEle'], this['_curSubmit']['_numEle']), _0x4f0513 && (this['_colorFile' + 'r'] = _0xf34877, this['_curSubmit'] = _0x247f32['RENDERBASE']);
            }, _0x1f8a1c['transform'] = function (_0x4e4dba, _0xd9fffc, _0x44d575, _0x3bdfc7, _0x4c0320, _0xf83ea3) {
                _0x5edd11['save'](this), _0x4fb671['mul'](_0x4fb671['TEMP']['setTo'](_0x4e4dba, _0xd9fffc, _0x44d575, _0x3bdfc7, _0x4c0320, _0xf83ea3), this['_curMat'], this['_curMat']), this['_curMat']['_checkTran' + 'sform']();
            }, _0x1f8a1c['_transform' + 'ByMatrix'] = function (_0x30fe3b, _0x2ea63c, _0x2da80b) {
                _0x30fe3b['setTransla' + 'te'](_0x2ea63c, _0x2da80b), _0x4fb671['mul'](_0x30fe3b, this['_curMat'], this['_curMat']), _0x30fe3b['setTransla' + 'te'](0x0, 0x0), this['_curMat']['_bTransfor' + 'm'] = !![];
            }, _0x1f8a1c['setTransfo' + 'rmByMatrix'] = function (_0x596c8f) {
                _0x596c8f['copyTo'](this['_curMat']);
            }, _0x1f8a1c['rotate'] = function (_0x9950b0) {
                _0x5edd11['save'](this), this['_curMat']['rotateEx'](_0x9950b0);
            }, _0x1f8a1c['scale'] = function (_0x42b8bf, _0x21ffaf) {
                _0x5edd11['save'](this), this['_curMat']['scaleEx'](_0x42b8bf, _0x21ffaf);
            }, _0x1f8a1c['clipRect'] = function (_0x231738, _0x1336a5, _0x4b7965, _0x5b648e) {
                _0x1803a0['save'](this);
                this['_clipRect'] == _0x24c9f0['MAXCLIPREC' + 'T'] ? this['_clipRect'] = new _0x4759e4(_0x231738, _0x1336a5, _0x4b7965, _0x5b648e) : (this['_clipRect']['width'] = _0x4b7965, this['_clipRect']['height'] = _0x5b648e, this['_clipRect']['x'] = _0x231738, this['_clipRect']['y'] = _0x1336a5);
                _0x24c9f0['_clipID_Ge' + 'n']++, _0x24c9f0['_clipID_Ge' + 'n'] %= 0x2710, this['_clipInfoI' + 'D'] = _0x24c9f0['_clipID_Ge' + 'n'];
                var _0x350e01 = this['_globalCli' + 'pMatrix'], _0x4acf19 = _0x350e01['tx'], _0x160b94 = _0x350e01['ty'], _0x38dba8 = _0x4acf19 + _0x350e01['a'], _0x28be37 = _0x160b94 + _0x350e01['d'];
                this['_clipRect']['width'] >= 0x5f5e0ff ? (_0x350e01['a'] = _0x350e01['d'] = 0x5f5e0ff, _0x350e01['b'] = _0x350e01['c'] = _0x350e01['tx'] = _0x350e01['ty'] = 0x0) : this['_curMat']['_bTransfor' + 'm'] ? (_0x350e01['tx'] = this['_clipRect']['x'] * this['_curMat']['a'] + this['_clipRect']['y'] * this['_curMat']['c'] + this['_curMat']['tx'], _0x350e01['ty'] = this['_clipRect']['x'] * this['_curMat']['b'] + this['_clipRect']['y'] * this['_curMat']['d'] + this['_curMat']['ty'], _0x350e01['a'] = this['_clipRect']['width'] * this['_curMat']['a'], _0x350e01['b'] = this['_clipRect']['width'] * this['_curMat']['b'], _0x350e01['c'] = this['_clipRect']['height'] * this['_curMat']['c'], _0x350e01['d'] = this['_clipRect']['height'] * this['_curMat']['d']) : (_0x350e01['tx'] = this['_clipRect']['x'] + this['_curMat']['tx'], _0x350e01['ty'] = this['_clipRect']['y'] + this['_curMat']['ty'], _0x350e01['a'] = this['_clipRect']['width'], _0x350e01['b'] = _0x350e01['c'] = 0x0, _0x350e01['d'] = this['_clipRect']['height']);
                if (_0x350e01['a'] > 0x0 && _0x350e01['d'] > 0x0) {
                    var _0x12ab38 = _0x350e01['tx'] + _0x350e01['a'], _0x23f65d = _0x350e01['ty'] + _0x350e01['d'];
                    if (_0x12ab38 <= _0x4acf19 || _0x23f65d <= _0x160b94 || _0x350e01['tx'] >= _0x38dba8 || _0x350e01['ty'] >= _0x28be37)
                        _0x350e01['a'] = -0.1, _0x350e01['d'] = -0.1;
                    else {
                        _0x350e01['tx'] < _0x4acf19 && (_0x350e01['a'] -= _0x4acf19 - _0x350e01['tx'], _0x350e01['tx'] = _0x4acf19);
                        _0x12ab38 > _0x38dba8 && (_0x350e01['a'] -= _0x12ab38 - _0x38dba8);
                        _0x350e01['ty'] < _0x160b94 && (_0x350e01['d'] -= _0x160b94 - _0x350e01['ty'], _0x350e01['ty'] = _0x160b94);
                        _0x23f65d > _0x28be37 && (_0x350e01['d'] -= _0x23f65d - _0x28be37);
                        if (_0x350e01['a'] <= 0x0)
                            _0x350e01['a'] = -0.1;
                        if (_0x350e01['d'] <= 0x0)
                            _0x350e01['d'] = -0.1;
                    }
                }
            }, _0x1f8a1c['drawMesh'] = function (_0x156a95, _0xbec488, _0xbd0747, _0x5de048, _0x8c9194, _0x28d133, _0x5ad5c2, _0xdc66ec, _0x349a9e) {
                _0x349a9e === void 0x0 && (_0x349a9e = 0x0);
                ;
            }, _0x1f8a1c['addRenderO' + 'bject'] = function (_0x439c8b) {
                this['_submits'][this['_submits']['_length']++] = _0x439c8b;
            }, _0x1f8a1c['submitElem' + 'ent'] = function (_0x1e397d, _0x5db94e) {
                var _0x37992b = _0x30d89b['_context'] === this, _0xa07d4f = this['_submits'], _0x162350 = _0xa07d4f['_length'];
                _0x5db94e < 0x0 && (_0x5db94e = _0xa07d4f['_length']);
                var _0x58b76f = _0x247f32['RENDERBASE'];
                while (_0x1e397d < _0x5db94e) {
                    this['_renderNex' + 'tSubmitInd' + 'ex'] = _0x1e397d + 0x1;
                    if (_0xa07d4f[_0x1e397d] === _0x247f32['RENDERBASE']) {
                        _0x1e397d++;
                        continue;
                    }
                    _0x247f32['preRender'] = _0x58b76f, _0x58b76f = _0xa07d4f[_0x1e397d], _0x1e397d += _0x58b76f['renderSubm' + 'it']();
                }
                return _0x162350;
            }, _0x1f8a1c['flush'] = function () {
                var _0x5e4385 = this['submitElem' + 'ent'](0x0, this['_submits']['_length']);
                this['_path'] && this['_path']['reset'](), _0x3a58c2['instance'] && _0x3a58c2['getInstanc' + 'e']()['reset'](), this['_curSubmit'] = _0x247f32['RENDERBASE'];
                for (var _0x248c08 = 0x0, _0x1bb3cb = this['meshlist']['length']; _0x248c08 < _0x1bb3cb; _0x248c08++) {
                    var _0x8f9e94 = this['meshlist'][_0x248c08];
                    _0x8f9e94['canReuse'] ? _0x8f9e94['releaseMes' + 'h']() : _0x8f9e94['destroy']();
                }
                this['meshlist']['length'] = 0x0, this['_mesh'] = _0x1645d2['getAMesh'](), this['_pathMesh'] = _0x20c78c['getAMesh'](), this['_triangleM' + 'esh'] = _0x2696ab['getAMesh'](), this['meshlist']['push'](this['_mesh'], this['_pathMesh'], this['_triangleM' + 'esh']), this['_flushCnt']++;
                if (this['_flushCnt'] % 0x3c == 0x0 && _0x30d89b['_context'] == this) {
                    var _0x8cc4e2 = _0x4a6519['textRender'];
                    if (_0x8cc4e2)
                        _0x8cc4e2['GC'](![]);
                }
                return _0x5e4385;
            }, _0x1f8a1c['setPathId'] = function (_0x61e5a7) {
                this['mId'] = _0x61e5a7;
                if (this['mId'] != -0x1) {
                    this['mHaveKey'] = ![];
                    var _0x1def08 = _0x2e08b5['getInstanc' + 'e']();
                    _0x1def08['shapeDic'][this['mId']] && (this['mHaveKey'] = !![]), this['mHaveLineK' + 'ey'] = ![], _0x1def08['shapeLineD' + 'ic'][this['mId']] && (this['mHaveLineK' + 'ey'] = !![]);
                }
            }, _0x1f8a1c['beginPath'] = function (_0x37483e) {
                _0x37483e === void 0x0 && (_0x37483e = ![]);
                var _0x3e400f = this['_getPath']();
                _0x3e400f['beginPath'](_0x37483e);
            }, _0x1f8a1c['closePath'] = function () {
                this['_path']['closePath']();
            }, _0x1f8a1c['addPath'] = function (_0x5eb5ff, _0x1a2474, _0x3bcd13, _0x4cd839, _0x5b0acf) {
                var _0x24a3f5 = 0x0;
                for (var _0x2f35ea = 0x0, _0x364eb0 = _0x5eb5ff['length'] / 0x2; _0x2f35ea < _0x364eb0; _0x2f35ea++) {
                    var _0x41f832 = _0x5eb5ff[_0x24a3f5] + _0x4cd839, _0x43ade1 = _0x5eb5ff[_0x24a3f5 + 0x1] + _0x5b0acf;
                    _0x5eb5ff[_0x24a3f5] = _0x41f832, _0x5eb5ff[_0x24a3f5 + 0x1] = _0x43ade1, _0x24a3f5 += 0x2;
                }
                this['_getPath']()['push'](_0x5eb5ff, _0x3bcd13);
            }, _0x1f8a1c['fill'] = function () {
                var _0x4b7f64 = this['_curMat'], _0x54e6f2 = this['_getPath'](), _0x2e5eee = this['_curSubmit'], _0x327cae = _0x2e5eee['_key']['submitType'] === 0x3 && _0x2e5eee['_key']['blendShade' + 'r'] === this['_nBlendTyp' + 'e'];
                _0x327cae && (_0x327cae = _0x327cae && this['isSameClip' + 'Info'](_0x2e5eee));
                !_0x327cae && (this['_curSubmit'] = this['addVGSubmi' + 't'](this['_pathMesh']));
                ;
                var _0x20e3fc = this['mixRGBandA' + 'lpha'](this['fillStyle']['toInt']()), _0xcc962a = 0x0, _0xcb6f1b;
                for (var _0x380797 = 0x0, _0x2122d8 = _0x54e6f2['paths']['length']; _0x380797 < _0x2122d8; _0x380797++) {
                    var _0x2dd872 = _0x54e6f2['paths'][_0x380797], _0x4f4140 = _0x2dd872['path']['length'] / 0x2;
                    if (_0x4f4140 < 0x3 || _0x4f4140 == 0x3 && !_0x2dd872['convex'])
                        continue;
                    var _0x12d4e6 = _0x2dd872['path']['concat'](), _0xa83524 = 0x0, _0x395a69 = 0x0, _0x141e8e = 0x0, _0xdca555 = NaN, _0x3f93ef = NaN;
                    if (_0x4b7f64['_bTransfor' + 'm'])
                        for (_0xa83524 = 0x0; _0xa83524 < _0x4f4140; _0xa83524++) {
                            _0x395a69 = _0xa83524 << 0x1, _0x141e8e = _0x395a69 + 0x1, _0xdca555 = _0x12d4e6[_0x395a69], _0x3f93ef = _0x12d4e6[_0x141e8e], _0x12d4e6[_0x395a69] = _0x4b7f64['a'] * _0xdca555 + _0x4b7f64['c'] * _0x3f93ef + _0x4b7f64['tx'], _0x12d4e6[_0x141e8e] = _0x4b7f64['b'] * _0xdca555 + _0x4b7f64['d'] * _0x3f93ef + _0x4b7f64['ty'];
                        }
                    else
                        for (_0xa83524 = 0x0; _0xa83524 < _0x4f4140; _0xa83524++) {
                            _0x395a69 = _0xa83524 << 0x1, _0x141e8e = _0x395a69 + 0x1, _0xdca555 = _0x12d4e6[_0x395a69], _0x3f93ef = _0x12d4e6[_0x141e8e], _0x12d4e6[_0x395a69] = _0xdca555 + _0x4b7f64['tx'], _0x12d4e6[_0x141e8e] = _0x3f93ef + _0x4b7f64['ty'];
                        }
                    this['_pathMesh']['vertNum'] + _0x4f4140 > 0xffff && (this['_curSubmit']['_numEle'] += _0xcc962a, _0xcc962a = 0x0, this['_pathMesh'] = _0x20c78c['getAMesh'](), this['_curSubmit'] = this['addVGSubmi' + 't'](this['_pathMesh']));
                    ;
                    var _0x23a6b0 = this['_pathMesh']['vertNum'];
                    if (_0x2dd872['convex']) {
                        var _0x5b9c13 = _0x4f4140 - 0x2;
                        _0xcb6f1b = new Array(_0x5b9c13 * 0x3);
                        var _0x1b0340 = 0x0;
                        for (var _0x1f8d44 = 0x0; _0x1f8d44 < _0x5b9c13; _0x1f8d44++) {
                            _0xcb6f1b[_0x1b0340++] = _0x23a6b0, _0xcb6f1b[_0x1b0340++] = _0x1f8d44 + 0x1 + _0x23a6b0, _0xcb6f1b[_0x1b0340++] = _0x1f8d44 + 0x2 + _0x23a6b0;
                        }
                    } else {
                        _0xcb6f1b = _0x576d8c['earcut'](_0x12d4e6, null, 0x2);
                        if (_0x23a6b0 > 0x0)
                            for (var _0x38b440 = 0x0; _0x38b440 < _0xcb6f1b['length']; _0x38b440++) {
                                _0xcb6f1b[_0x38b440] += _0x23a6b0;
                            }
                    }
                    this['_pathMesh']['addVertAnd' + 'IBToMesh'](this, _0x12d4e6, _0x20e3fc, _0xcb6f1b), _0xcc962a += _0xcb6f1b['length'];
                }
                this['_curSubmit']['_numEle'] += _0xcc962a;
            }, _0x1f8a1c['addVGSubmi' + 't'] = function (_0xfb116b) {
                var _0x596a0e = _0x247f32['createShap' + 'e'](this, _0xfb116b, 0x0, _0xd9aa33['create'](0x4, 0x0));
                return _0x596a0e['_key']['submitType'] = 0x3, this['_submits'][this['_submits']['_length']++] = _0x596a0e, this['_copyClipI' + 'nfo'](_0x596a0e, this['_globalCli' + 'pMatrix']), _0x596a0e;
            }, _0x1f8a1c['stroke'] = function () {
                if (this['lineWidth'] > 0x0) {
                    var _0x1bf755 = this['mixRGBandA' + 'lpha'](this['strokeStyl' + 'e']['_color']['numColor']), _0x4830bd = this['_getPath'](), _0x19197c = this['_curSubmit'], _0x1542b1 = _0x19197c['_key']['submitType'] === 0x3 && _0x19197c['_key']['blendShade' + 'r'] === this['_nBlendTyp' + 'e'];
                    _0x1542b1 && (_0x1542b1 = _0x1542b1 && this['isSameClip' + 'Info'](_0x19197c));
                    !_0x1542b1 && (this['_curSubmit'] = this['addVGSubmi' + 't'](this['_pathMesh']));
                    ;
                    var _0x4b2b40 = 0x0;
                    for (var _0x1074f9 = 0x0, _0x88e80d = _0x4830bd['paths']['length']; _0x1074f9 < _0x88e80d; _0x1074f9++) {
                        var _0x5618e8 = _0x4830bd['paths'][_0x1074f9];
                        if (_0x5618e8['path']['length'] <= 0x0)
                            continue;
                        var _0x4178fb = [], _0x299372 = [], _0x5e62e9 = _0x5618e8['path']['length'] * 0x2;
                        if (_0x5e62e9 < 0x2)
                            continue;
                        this['_pathMesh']['vertNum'] + _0x5e62e9 > 0xffff && (this['_curSubmit']['_numEle'] += _0x4b2b40, _0x4b2b40 = 0x0, this['_pathMesh'] = _0x20c78c['getAMesh'](), this['meshlist']['push'](this['_pathMesh']), this['_curSubmit'] = this['addVGSubmi' + 't'](this['_pathMesh']));
                        _0x2fe41e['createLine' + '2'](_0x5618e8['path'], _0x4178fb, this['lineWidth'], this['_pathMesh']['vertNum'], _0x299372, _0x5618e8['loop']);
                        var _0x51562d = _0x299372['length'] / 0x2, _0x4ef02c = this['_curMat'], _0x2c3121 = 0x0, _0x562b25 = 0x0, _0x5b78b9 = 0x0, _0x28eb18 = NaN, _0x5b3c60 = NaN;
                        if (_0x4ef02c['_bTransfor' + 'm'])
                            for (_0x2c3121 = 0x0; _0x2c3121 < _0x51562d; _0x2c3121++) {
                                _0x562b25 = _0x2c3121 << 0x1, _0x5b78b9 = _0x562b25 + 0x1, _0x28eb18 = _0x299372[_0x562b25], _0x5b3c60 = _0x299372[_0x5b78b9], _0x299372[_0x562b25] = _0x4ef02c['a'] * _0x28eb18 + _0x4ef02c['c'] * _0x5b3c60 + _0x4ef02c['tx'], _0x299372[_0x5b78b9] = _0x4ef02c['b'] * _0x28eb18 + _0x4ef02c['d'] * _0x5b3c60 + _0x4ef02c['ty'];
                            }
                        else
                            for (_0x2c3121 = 0x0; _0x2c3121 < _0x51562d; _0x2c3121++) {
                                _0x562b25 = _0x2c3121 << 0x1, _0x5b78b9 = _0x562b25 + 0x1, _0x28eb18 = _0x299372[_0x562b25], _0x5b3c60 = _0x299372[_0x5b78b9], _0x299372[_0x562b25] = _0x28eb18 + _0x4ef02c['tx'], _0x299372[_0x5b78b9] = _0x5b3c60 + _0x4ef02c['ty'];
                            }
                        this['_pathMesh']['addVertAnd' + 'IBToMesh'](this, _0x299372, _0x1bf755, _0x4178fb), _0x4b2b40 += _0x4178fb['length'];
                    }
                    this['_curSubmit']['_numEle'] += _0x4b2b40;
                }
            }, _0x1f8a1c['moveTo'] = function (_0x5bde8a, _0xed2885) {
                var _0x127e64 = this['_getPath']();
                _0x127e64['newPath'](), _0x127e64['_lastOriX'] = _0x5bde8a, _0x127e64['_lastOriY'] = _0xed2885, _0x127e64['addPoint'](_0x5bde8a, _0xed2885);
            }, _0x1f8a1c['lineTo'] = function (_0x59e2d6, _0x17eed2) {
                var _0x48dcdb = this['_getPath']();
                if (Math['abs'](_0x59e2d6 - _0x48dcdb['_lastOriX']) < 0.001 && Math['abs'](_0x17eed2 - _0x48dcdb['_lastOriY']) < 0.001)
                    return;
                _0x48dcdb['_lastOriX'] = _0x59e2d6, _0x48dcdb['_lastOriY'] = _0x17eed2, _0x48dcdb['addPoint'](_0x59e2d6, _0x17eed2);
            }, _0x1f8a1c['arcTo'] = function (_0xa28c21, _0x5d5135, _0x36667f, _0x3ef43b, _0x4e4091) {
                var _0x16de2b = 0x0, _0x1801ee = 0x0, _0x25bc7a = 0x0, _0x1716bc = this['_path']['_lastOriX'] - _0xa28c21, _0x18d64b = this['_path']['_lastOriY'] - _0x5d5135, _0x14d772 = Math['sqrt'](_0x1716bc * _0x1716bc + _0x18d64b * _0x18d64b);
                if (_0x14d772 <= 0.000001)
                    return;
                ;
                var _0x179703 = _0x1716bc / _0x14d772, _0x18e1cd = _0x18d64b / _0x14d772, _0x3961d7 = _0x36667f - _0xa28c21, _0x22fbf3 = _0x3ef43b - _0x5d5135, _0x4b2fae = _0x3961d7 * _0x3961d7 + _0x22fbf3 * _0x22fbf3, _0x170c14 = Math['sqrt'](_0x4b2fae);
                if (_0x170c14 <= 0.000001)
                    return;
                ;
                var _0x5e520d = _0x3961d7 / _0x170c14, _0x585ef6 = _0x22fbf3 / _0x170c14, _0x12914d = _0x179703 + _0x5e520d, _0x1a4a6e = _0x18e1cd + _0x585ef6, _0x281168 = Math['sqrt'](_0x12914d * _0x12914d + _0x1a4a6e * _0x1a4a6e);
                if (_0x281168 <= 0.000001)
                    return;
                ;
                var _0xbef078 = _0x12914d / _0x281168, _0x505d1a = _0x1a4a6e / _0x281168, _0xf42f6 = Math['acos'](_0xbef078 * _0x179703 + _0x505d1a * _0x18e1cd), _0x4fcba5 = Math['PI'] / 0x2 - _0xf42f6;
                _0x14d772 = _0x4e4091 / Math['tan'](_0x4fcba5);
                var _0x3c6eb4 = _0x14d772 * _0x179703 + _0xa28c21, _0x15b439 = _0x14d772 * _0x18e1cd + _0x5d5135, _0x4bcbfe = Math['sqrt'](_0x14d772 * _0x14d772 + _0x4e4091 * _0x4e4091), _0x44fe35 = _0xa28c21 + _0xbef078 * _0x4bcbfe, _0xd39532 = _0x5d5135 + _0x505d1a * _0x4bcbfe, _0x4685c1 = _0x14d772 * _0x5e520d + _0xa28c21, _0x301666 = _0x14d772 * _0x585ef6 + _0x5d5135, _0x3f4bbe = _0x179703 * _0x585ef6 - _0x18e1cd * _0x5e520d, _0x3296a2 = 0x0, _0x5f30c1 = 0x0, _0x595d8c = 0x0;
                if (_0x3f4bbe >= 0x0) {
                    _0x3296a2 = _0x4fcba5 * 0x2;
                    var _0x3e393d = _0x3296a2 / _0x24c9f0['SEGNUM'];
                    _0x5f30c1 = Math['sin'](_0x3e393d), _0x595d8c = Math['cos'](_0x3e393d);
                } else
                    _0x3296a2 = -_0x4fcba5 * 0x2, _0x3e393d = _0x3296a2 / _0x24c9f0['SEGNUM'], _0x5f30c1 = Math['sin'](_0x3e393d), _0x595d8c = Math['cos'](_0x3e393d);
                ;
                var _0x3315a7 = this['_path']['_lastOriX'], _0x1f8cae = this['_path']['_lastOriY'], _0x392842 = _0x3c6eb4, _0x1649c5 = _0x15b439;
                (Math['abs'](_0x392842 - this['_path']['_lastOriX']) > 0.1 || Math['abs'](_0x1649c5 - this['_path']['_lastOriY']) > 0.1) && (_0x1801ee = _0x392842, _0x25bc7a = _0x1649c5, _0x3315a7 = _0x392842, _0x1f8cae = _0x1649c5, this['_path']['addPoint'](_0x1801ee, _0x25bc7a));
                ;
                var _0x301f4e = _0x3c6eb4 - _0x44fe35, _0x1c5f5f = _0x15b439 - _0xd39532, _0x189b45 = 0x0, _0x165170 = 0x0;
                for (_0x16de2b = 0x0; _0x16de2b < _0x24c9f0['SEGNUM']; _0x16de2b++) {
                    var _0x3f9a1a = _0x301f4e * _0x595d8c + _0x1c5f5f * _0x5f30c1, _0x11d6af = -_0x301f4e * _0x5f30c1 + _0x1c5f5f * _0x595d8c;
                    _0x1801ee = _0x3f9a1a + _0x44fe35, _0x25bc7a = _0x11d6af + _0xd39532, (Math['abs'](_0x3315a7 - _0x1801ee) > 0.1 || Math['abs'](_0x1f8cae - _0x25bc7a) > 0.1) && (this['_path']['addPoint'](_0x1801ee, _0x25bc7a), _0x3315a7 = _0x1801ee, _0x1f8cae = _0x25bc7a), _0x301f4e = _0x3f9a1a, _0x1c5f5f = _0x11d6af;
                }
            }, _0x1f8a1c['arc'] = function (_0x294c05, _0x543dff, _0x2a3b55, _0xabc01b, _0x401e96, _0xc4182b, _0x2af6cd) {
                _0xc4182b === void 0x0 && (_0xc4182b = ![]), _0x2af6cd === void 0x0 && (_0x2af6cd = !![]);
                var _0x266dab = 0x0, _0x5bc1f6 = 0x0, _0x3569ee = 0x0, _0x42d6ca = 0x0, _0x1785e7 = 0x0, _0x2970f5 = 0x0, _0xe57f1f = 0x0, _0x1dd186 = 0x0, _0x31767f = 0x0, _0x447728 = 0x0, _0x3e4ca6 = 0x0, _0x558e99 = 0x0, _0x5428d6 = 0x0, _0x4d903e = 0x0, _0x3ea54c = 0x0, _0x761ca0 = 0x0, _0x99a3e5 = 0x0;
                _0x5bc1f6 = _0x401e96 - _0xabc01b;
                if (!_0xc4182b) {
                    if (Math['abs'](_0x5bc1f6) >= Math['PI'] * 0x2)
                        _0x5bc1f6 = Math['PI'] * 0x2;
                    else
                        while (_0x5bc1f6 < 0x0) {
                            _0x5bc1f6 += Math['PI'] * 0x2;
                        }
                } else {
                    if (Math['abs'](_0x5bc1f6) >= Math['PI'] * 0x2)
                        _0x5bc1f6 = -Math['PI'] * 0x2;
                    else
                        while (_0x5bc1f6 > 0x0) {
                            _0x5bc1f6 -= Math['PI'] * 0x2;
                        }
                }
                ;
                var _0x27a353 = this['getMatScal' + 'eX'](), _0x37b873 = this['getMatScal' + 'eY'](), _0x18c81c = _0x2a3b55 * (_0x27a353 > _0x37b873 ? _0x27a353 : _0x37b873), _0x413c91 = 0x2 * Math['PI'] * _0x18c81c;
                _0x761ca0 = Math['max'](_0x413c91 / 0xa, 0xa) | 0x0, _0x3569ee = _0x5bc1f6 / _0x761ca0 / 0x2, _0x42d6ca = Math['abs'](0x4 / 0x3 * (0x1 - Math['cos'](_0x3569ee)) / Math['sin'](_0x3569ee));
                if (_0xc4182b)
                    _0x42d6ca = -_0x42d6ca;
                _0x99a3e5 = 0x0;
                var _0x3e937a = this['_getPath'](), _0x18f68f = NaN, _0x342309 = NaN;
                for (_0x3ea54c = 0x0; _0x3ea54c <= _0x761ca0; _0x3ea54c++) {
                    _0x266dab = _0xabc01b + _0x5bc1f6 * (_0x3ea54c / _0x761ca0), _0x1785e7 = Math['cos'](_0x266dab), _0x2970f5 = Math['sin'](_0x266dab), _0xe57f1f = _0x294c05 + _0x1785e7 * _0x2a3b55, _0x1dd186 = _0x543dff + _0x2970f5 * _0x2a3b55, (_0xe57f1f != this['_path']['_lastOriX'] || _0x1dd186 != this['_path']['_lastOriY']) && _0x3e937a['addPoint'](_0xe57f1f, _0x1dd186);
                }
                _0x1785e7 = Math['cos'](_0x401e96), _0x2970f5 = Math['sin'](_0x401e96), _0xe57f1f = _0x294c05 + _0x1785e7 * _0x2a3b55, _0x1dd186 = _0x543dff + _0x2970f5 * _0x2a3b55, (_0xe57f1f != this['_path']['_lastOriX'] || _0x1dd186 != this['_path']['_lastOriY']) && _0x3e937a['addPoint'](_0xe57f1f, _0x1dd186);
            }, _0x1f8a1c['quadraticC' + 'urveTo'] = function (_0x2dd80e, _0x1138da, _0x795426, _0x3a9aac) {
                var _0x41f698 = _0x9476b9['I'], _0x247447 = [], _0xf3490e = _0x41f698['getBezierP' + 'oints']([
                        this['_path']['_lastOriX'],
                        this['_path']['_lastOriY'],
                        _0x2dd80e,
                        _0x1138da,
                        _0x795426,
                        _0x3a9aac
                    ], 0x1e, 0x2);
                for (var _0x3ed8ed = 0x0, _0x30afa0 = _0xf3490e['length'] / 0x2; _0x3ed8ed < _0x30afa0; _0x3ed8ed++) {
                    this['lineTo'](_0xf3490e[_0x3ed8ed * 0x2], _0xf3490e[_0x3ed8ed * 0x2 + 0x1]);
                }
                this['lineTo'](_0x795426, _0x3a9aac);
            }, _0x1f8a1c['rect'] = function (_0x50d985, _0x19e868, _0x62ee68, _0x9539e7) {
                this['_other'] = this['_other']['make'](), this['_other']['path'] || (this['_other']['path'] = new _0x1842c0()), this['_other']['path']['rect'](_0x50d985, _0x19e868, _0x62ee68, _0x9539e7);
            }, _0x1f8a1c['mixRGBandA' + 'lpha'] = function (_0x432a2b) {
                return this['_mixRGBand' + 'Alpha'](_0x432a2b, this['_shader2D']['ALPHA']);
            }, _0x1f8a1c['_mixRGBand' + 'Alpha'] = function (_0x3b90b9, _0x2ee80f) {
                var _0x14dc71 = (_0x3b90b9 & 0xff000000) >>> 0x18;
                return _0x14dc71 != 0x0 ? _0x14dc71 *= _0x2ee80f : _0x14dc71 = _0x2ee80f * 0xff, _0x3b90b9 & 0xffffff | _0x14dc71 << 0x18;
            }, _0x1f8a1c['strokeRect'] = function (_0x237c03, _0x457b3b, _0x41e90e, _0x30dee9, _0x2bfbf8) {
                var _0x224a66 = _0x2bfbf8 * 0.5;
                if (this['lineWidth'] > 0x0) {
                    var _0x5460af = this['mixRGBandA' + 'lpha'](this['strokeStyl' + 'e']['_color']['numColor']), _0x5d0b20 = this['lineWidth'] / 0x2;
                    this['_fillRect'](_0x237c03 - _0x5d0b20, _0x457b3b - _0x5d0b20, _0x41e90e + this['lineWidth'], this['lineWidth'], _0x5460af), this['_fillRect'](_0x237c03 - _0x5d0b20, _0x457b3b - _0x5d0b20 + _0x30dee9, _0x41e90e + this['lineWidth'], this['lineWidth'], _0x5460af), this['_fillRect'](_0x237c03 - _0x5d0b20, _0x457b3b + _0x5d0b20, this['lineWidth'], _0x30dee9 - this['lineWidth'], _0x5460af), this['_fillRect'](_0x237c03 - _0x5d0b20 + _0x41e90e, _0x457b3b + _0x5d0b20, this['lineWidth'], _0x30dee9 - this['lineWidth'], _0x5460af);
                }
            }, _0x1f8a1c['clip'] = function () {
            }, _0x1f8a1c['drawPartic' + 'le'] = function (_0x570826, _0x1a7bbf, _0x1eaf6d) {
                _0x1eaf6d['x'] = _0x570826, _0x1eaf6d['y'] = _0x1a7bbf, this['_submits'][this['_submits']['_length']++] = _0x1eaf6d;
            }, _0x1f8a1c['_getPath'] = function () {
                return this['_path'] || (this['_path'] = new _0x1842c0());
            }, _0x3a2bd3(0x0, _0x1f8a1c, 'globalComp' + 'ositeOpera' + 'tion', function () {
                return _0x5c9116['NAMES'][this['_nBlendTyp' + 'e']];
            }, function (_0x1ff0f3) {
                var _0x4c7b50 = _0x5c9116['TOINT'][_0x1ff0f3];
                _0x4c7b50 == null || this['_nBlendTyp' + 'e'] === _0x4c7b50 || (_0x2f38dd['save'](this, 0x10000, this, !![]), this['_curSubmit'] = _0x247f32['RENDERBASE'], this['_nBlendTyp' + 'e'] = _0x4c7b50);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'strokeStyl' + 'e', function () {
                return this['_shader2D']['strokeStyl' + 'e'];
            }, function (_0x1839fd) {
                this['_shader2D']['strokeStyl' + 'e']['equal'](_0x1839fd) || (_0x2f38dd['save'](this, 0x200, this['_shader2D'], ![]), this['_shader2D']['strokeStyl' + 'e'] = _0x334d19['create'](_0x1839fd), this['_submitKey']['other'] = -this['_shader2D']['strokeStyl' + 'e']['toInt']());
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'globalAlph' + 'a', function () {
                return this['_shader2D']['ALPHA'];
            }, function (_0x2eb688) {
                _0x2eb688 = Math['floor'](_0x2eb688 * 0x3e8) / 0x3e8, _0x2eb688 != this['_shader2D']['ALPHA'] && (_0x2f38dd['save'](this, 0x1, this['_shader2D'], ![]), this['_shader2D']['ALPHA'] = _0x2eb688);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'asBitmap', null, function (_0x41c631) {
                if (_0x41c631) {
                    this['_targets'] || (this['_targets'] = new _0x4a9aac(this['_width'], this['_height'], 0x1, -0x1));
                    if (!this['_width'] || !this['_height'])
                        throw Error('asBitmap\x20n' + 'o\x20size!');
                } else
                    this['_targets'] && this['_targets']['destroy'](), this['_targets'] = null;
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'fillStyle', function () {
                return this['_shader2D']['fillStyle'];
            }, function (_0x55b238) {
                !this['_shader2D']['fillStyle']['equal'](_0x55b238) && (_0x2f38dd['save'](this, 0x2, this['_shader2D'], ![]), this['_shader2D']['fillStyle'] = _0x334d19['create'](_0x55b238), this['_submitKey']['other'] = -this['_shader2D']['fillStyle']['toInt']());
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'textAlign', function () {
                return this['_other']['textAlign'];
            }, function (_0x2d1dba) {
                this['_other']['textAlign'] === _0x2d1dba || (this['_other'] = this['_other']['make'](), _0x2f38dd['save'](this, 0x8000, this['_other'], ![]), this['_other']['textAlign'] = _0x2d1dba);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'lineWidth', function () {
                return this['_other']['lineWidth'];
            }, function (_0x2af6da) {
                this['_other']['lineWidth'] === _0x2af6da || (this['_other'] = this['_other']['make'](), _0x2f38dd['save'](this, 0x100, this['_other'], ![]), this['_other']['lineWidth'] = _0x2af6da);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'textBaseli' + 'ne', function () {
                return this['_other']['textBaseli' + 'ne'];
            }, function (_0xdfc1fb) {
                this['_other']['textBaseli' + 'ne'] === _0xdfc1fb || (this['_other'] = this['_other']['make'](), _0x2f38dd['save'](this, 0x4000, this['_other'], ![]), this['_other']['textBaseli' + 'ne'] = _0xdfc1fb);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'font', null, function (_0x46b49d) {
                this['_other'] = this['_other']['make'](), _0x2f38dd['save'](this, 0x8, this['_other'], ![]);
            }), _0x3a2bd3(0x0, _0x1f8a1c, 'canvas', function () {
                return this['_canvas'];
            }), _0x24c9f0['__init__'] = function () {
                _0x3ceef2['DEFAULT'] = new _0x3ceef2(), _0x5ea528;
            }, _0x24c9f0['set2DRende' + 'rConfig'] = function () {
                var _0x16d9bb = _0x33edbf['instance'];
                _0x21b46c['setBlend'](_0x16d9bb, !![]), _0x21b46c['setBlendFu' + 'nc'](_0x16d9bb, 0x1, 0x303), _0x21b46c['setDepthTe' + 'st'](_0x16d9bb, ![]), _0x21b46c['setCullFac' + 'e'](_0x16d9bb, ![]), _0x21b46c['setDepthMa' + 'sk'](_0x16d9bb, !![]), _0x21b46c['setFrontFa' + 'ce'](_0x16d9bb, 0x901), _0x16d9bb['viewport'](0x0, 0x0, _0x5c6236['width'], _0x5c6236['height']);
            }, _0x24c9f0['_tempPoint'] = new _0x4eeaa7(), _0x24c9f0['_SUBMITVBS' + 'IZE'] = 0x7d00, _0x24c9f0['_MAXSIZE'] = 0x5f5e0ff, _0x24c9f0['_MAXVERTNU' + 'M'] = 0xffff, _0x24c9f0['MAXCLIPREC' + 'T'] = new _0x4759e4(0x0, 0x0, 0x5f5e0ff, 0x5f5e0ff), _0x24c9f0['_COUNT'] = 0x0, _0x24c9f0['_tmpMatrix'] = new _0x4fb671(), _0x24c9f0['SEGNUM'] = 0x20, _0x24c9f0['_contextco' + 'unt'] = 0x0, _0x24c9f0['_clipID_Ge' + 'n'] = 0x0, _0x24c9f0['defTexture'] = null, _0x3a2911(_0x24c9f0, [
                '_drawStyle' + 'Temp',
                function () {
                    return this['_drawStyle' + 'Temp'] = new _0x334d19(null);
                },
                '_keyMap',
                function () {
                    return this['_keyMap'] = new _0x3c672c();
                },
                '_drawTexTo' + 'DrawTri_Ve' + 'rt',
                function () {
                    return this['_drawTexTo' + 'DrawTri_Ve' + 'rt'] = new Float32Array(0x8);
                },
                '_drawTexTo' + 'DrawTri_In' + 'dex',
                function () {
                    return this['_drawTexTo' + 'DrawTri_In' + 'dex'] = new Uint16Array([
                        0x0,
                        0x1,
                        0x2,
                        0x0,
                        0x2,
                        0x3
                    ]);
                },
                '_textRende' + 'r',
                function () {
                    return this['_textRende' + 'r'] = _0x32b95f['useOldChar' + 'Book'] ? new _0x231b8b() : new _0x32b95f();
                }
            ]), _0x24c9f0['__init$'] = function () {
                _0x3ceef2 = function () {
                    function _0x9c758c() {
                        this['lineWidth'] = 0x1, this['path'] = null, this['textAlign'] = null, this['textBaseli' + 'ne'] = null;
                    }
                    _0x199b5b(_0x9c758c, '');
                    var _0x5bc52f = _0x9c758c['prototype'];
                    return _0x5bc52f['clear'] = function () {
                        this['lineWidth'] = 0x1, this['path'] && this['path']['clear'](), this['textAlign'] = this['textBaseli' + 'ne'] = null;
                    }, _0x5bc52f['make'] = function () {
                        return this === _0x9c758c['DEFAULT'] ? new _0x9c758c() : this;
                    }, _0x9c758c['DEFAULT'] = null, _0x9c758c;
                }();
            }, _0x24c9f0;
        }(_0x3ed815), _0x4cd3d7 = function (_0x48491f) {
            function _0x45f742(_0x2502b7) {
                this['texcoord'] = null, this['position'] = null, this['offsetX'] = 0x12c, this['offsetY'] = 0x0, _0x45f742['__super']['call'](this, 0x200, 0x0);
                var _0x391962 = 0x8 * _0x39d4bb['BYTES_PE'];
                this['position'] = [
                    0x2,
                    0x1406,
                    ![],
                    _0x391962,
                    0x0
                ], this['texcoord'] = [
                    0x2,
                    0x1406,
                    ![],
                    _0x391962,
                    0x2 * _0x39d4bb['BYTES_PE']
                ], this['color'] = [
                    0x4,
                    0x1406,
                    ![],
                    _0x391962,
                    0x4 * _0x39d4bb['BYTES_PE']
                ];
            }
            return _0x199b5b(_0x45f742, 'laya.webgl' + '.shader.d2' + '.skinAnish' + 'ader.SkinS' + 'V', _0x48491f), _0x45f742;
        }(_0xd9aa33), _0x20869a = function (_0x4dd392) {
            function _0x399582(_0x57c1e6) {
                this['u_colorMat' + 'rix'] = null, this['strength'] = 0x0, this['blurInfo'] = null, this['colorMat'] = null, this['colorAlpha'] = null, _0x57c1e6 === void 0x0 && (_0x57c1e6 = 0x0), _0x399582['__super']['call'](this, 0x1, _0x57c1e6), this['_attribLoc' + 'ation'] = [
                    'posuv',
                    0x0,
                    'attribColo' + 'r',
                    0x1,
                    'attribFlag' + 's',
                    0x2
                ];
            }
            _0x199b5b(_0x399582, 'laya.webgl' + '.shader.d2' + '.value.Tex' + 'tureSV', _0x4dd392);
            var _0x20bad8 = _0x399582['prototype'];
            return _0x20bad8['clear'] = function () {
                this['texture'] = null, this['shader'] = null, this['defines']['_value'] = this['subID'] + (_0x354f16['shaderHigh' + 'Precision'] ? 0x400 : 0x0);
            }, _0x399582;
        }(_0xd9aa33), _0x28c857 = function (_0xa4a9e0) {
            function _0x378b35(_0x1311f0) {
                _0x378b35['__super']['call'](this, 0x4, 0x0), this['_attribLoc' + 'ation'] = [
                    'position',
                    0x0,
                    'attribColo' + 'r',
                    0x1
                ];
            }
            return _0x199b5b(_0x378b35, 'laya.webgl' + '.shader.d2' + '.value.Pri' + 'mitiveSV', _0xa4a9e0), _0x378b35;
        }(_0xd9aa33), _0x1645d2 = function (_0x410391) {
            function _0x34ca91() {
                _0x34ca91['__super']['call'](this, laya['webgl']['utils']['MeshQuadTe' + 'xture']['const_stri' + 'de'], 0x4, 0x4), this['canReuse'] = !![], this['setAttribu' + 'tes'](laya['webgl']['utils']['MeshQuadTe' + 'xture']['_fixattriI' + 'nfo']), !laya['webgl']['utils']['MeshQuadTe' + 'xture']['_fixib'] ? (this['createQuad' + 'IB'](_0x34ca91['_maxIB']), laya['webgl']['utils']['MeshQuadTe' + 'xture']['_fixib'] = this['_ib']) : (this['_ib'] = laya['webgl']['utils']['MeshQuadTe' + 'xture']['_fixib'], this['_quadNum'] = _0x34ca91['_maxIB']);
            }
            _0x199b5b(_0x34ca91, 'laya.webgl' + '.utils.Mes' + 'hQuadTextu' + 're', _0x410391);
            var _0x4a71df = _0x34ca91['prototype'];
            return _0x4a71df['releaseMes' + 'h'] = function () {
                this['_vb']['setByteLen' + 'gth'](0x0), this['vertNum'] = 0x0, this['indexNum'] = 0x0, laya['webgl']['utils']['MeshQuadTe' + 'xture']['_POOL']['push'](this);
            }, _0x4a71df['destroy'] = function () {
                this['_vb']['destroy'](), this['_vb']['deleteBuff' + 'er']();
            }, _0x4a71df['addQuad'] = function (_0x4f412c, _0x13216c, _0x87cdf5, _0x508632) {
                var _0x4130e2 = this['_vb'], _0x1df1c4 = _0x4130e2['_byteLengt' + 'h'] >> 0x2;
                _0x4130e2['setByteLen' + 'gth'](_0x1df1c4 + laya['webgl']['utils']['MeshQuadTe' + 'xture']['const_stri' + 'de'] << 0x2);
                var _0xfb2814 = _0x4130e2['_floatArra' + 'y32'] || _0x4130e2['getFloat32' + 'Array'](), _0x395be5 = _0x4130e2['_uint32Arr' + 'ay'], _0x30425b = _0x1df1c4, _0x3d27c1 = _0x508632 ? 0xff : 0x0;
                _0xfb2814[_0x30425b++] = _0x4f412c[0x0], _0xfb2814[_0x30425b++] = _0x4f412c[0x1], _0xfb2814[_0x30425b++] = _0x13216c[0x0], _0xfb2814[_0x30425b++] = _0x13216c[0x1], _0x395be5[_0x30425b++] = _0x87cdf5, _0x395be5[_0x30425b++] = _0x3d27c1, _0xfb2814[_0x30425b++] = _0x4f412c[0x2], _0xfb2814[_0x30425b++] = _0x4f412c[0x3], _0xfb2814[_0x30425b++] = _0x13216c[0x2], _0xfb2814[_0x30425b++] = _0x13216c[0x3], _0x395be5[_0x30425b++] = _0x87cdf5, _0x395be5[_0x30425b++] = _0x3d27c1, _0xfb2814[_0x30425b++] = _0x4f412c[0x4], _0xfb2814[_0x30425b++] = _0x4f412c[0x5], _0xfb2814[_0x30425b++] = _0x13216c[0x4], _0xfb2814[_0x30425b++] = _0x13216c[0x5], _0x395be5[_0x30425b++] = _0x87cdf5, _0x395be5[_0x30425b++] = _0x3d27c1, _0xfb2814[_0x30425b++] = _0x4f412c[0x6], _0xfb2814[_0x30425b++] = _0x4f412c[0x7], _0xfb2814[_0x30425b++] = _0x13216c[0x6], _0xfb2814[_0x30425b++] = _0x13216c[0x7], _0x395be5[_0x30425b++] = _0x87cdf5, _0x395be5[_0x30425b++] = _0x3d27c1, _0x4130e2['_upload'] = !![];
            }, _0x34ca91['getAMesh'] = function () {
                if (laya['webgl']['utils']['MeshQuadTe' + 'xture']['_POOL']['length'])
                    return laya['webgl']['utils']['MeshQuadTe' + 'xture']['_POOL']['pop']();
                return new _0x34ca91();
            }, _0x34ca91['const_stri' + 'de'] = 0x18, _0x34ca91['_fixib'] = null, _0x34ca91['_maxIB'] = 0x10 * 0x400, _0x34ca91['_POOL'] = [], _0x3a2911(_0x34ca91, [
                '_fixattriI' + 'nfo',
                function () {
                    return this['_fixattriI' + 'nfo'] = [
                        0x1406,
                        0x4,
                        0x0,
                        0x1401,
                        0x4,
                        0x10,
                        0x1401,
                        0x4,
                        0x14
                    ];
                }
            ]), _0x34ca91;
        }(_0x3c6ccc), _0x20c78c = function (_0x18e5b3) {
            function _0x101027() {
                _0x101027['__super']['call'](this, laya['webgl']['utils']['MeshVG']['const_stri' + 'de'], 0x4, 0x4), this['canReuse'] = !![], this['setAttribu' + 'tes'](laya['webgl']['utils']['MeshVG']['_fixattriI' + 'nfo']);
            }
            _0x199b5b(_0x101027, 'laya.webgl' + '.utils.Mes' + 'hVG', _0x18e5b3);
            var _0x105ee2 = _0x101027['prototype'];
            return _0x105ee2['addVertAnd' + 'IBToMesh'] = function (_0x33957a, _0x4926de, _0x46ec56, _0x29f915) {
                var _0x21bd9f = this['_vb']['needSize'](_0x4926de['length'] / 0x2 * _0x101027['const_stri' + 'de']), _0x1e789b = _0x21bd9f >> 0x2, _0x37d9d2 = this['_vb']['_floatArra' + 'y32'] || this['_vb']['getFloat32' + 'Array'](), _0xf26e3f = this['_vb']['_uint32Arr' + 'ay'], _0x147a63 = 0x0, _0x265a26 = _0x4926de['length'] / 0x2;
                for (var _0x119955 = 0x0; _0x119955 < _0x265a26; _0x119955++) {
                    _0x37d9d2[_0x1e789b++] = _0x4926de[_0x147a63], _0x37d9d2[_0x1e789b++] = _0x4926de[_0x147a63 + 0x1], _0x147a63 += 0x2, _0xf26e3f[_0x1e789b++] = _0x46ec56;
                }
                this['_vb']['setNeedUpl' + 'oad'](), this['_ib']['append'](new Uint16Array(_0x29f915)), this['_ib']['setNeedUpl' + 'oad'](), this['vertNum'] += _0x265a26, this['indexNum'] += _0x29f915['length'];
            }, _0x105ee2['releaseMes' + 'h'] = function () {
                this['_vb']['setByteLen' + 'gth'](0x0), this['_ib']['setByteLen' + 'gth'](0x0), this['vertNum'] = 0x0, this['indexNum'] = 0x0, laya['webgl']['utils']['MeshVG']['_POOL']['push'](this);
            }, _0x105ee2['destroy'] = function () {
                this['_ib']['destroy'](), this['_vb']['destroy'](), this['_ib']['disposeRes' + 'ource'](), this['_vb']['deleteBuff' + 'er']();
            }, _0x101027['getAMesh'] = function () {
                if (laya['webgl']['utils']['MeshVG']['_POOL']['length'])
                    return laya['webgl']['utils']['MeshVG']['_POOL']['pop']();
                return new _0x101027();
            }, _0x101027['const_stri' + 'de'] = 0xc, _0x101027['_POOL'] = [], _0x3a2911(_0x101027, [
                '_fixattriI' + 'nfo',
                function () {
                    return this['_fixattriI' + 'nfo'] = [
                        0x1406,
                        0x2,
                        0x0,
                        0x1401,
                        0x4,
                        0x8
                    ];
                }
            ]), _0x101027;
        }(_0x3c6ccc), _0x2696ab = function (_0xbeea44) {
            function _0x3235d6() {
                _0x3235d6['__super']['call'](this, laya['webgl']['utils']['MeshTextur' + 'e']['const_stri' + 'de'], 0x4, 0x4), this['canReuse'] = !![], this['setAttribu' + 'tes'](laya['webgl']['utils']['MeshTextur' + 'e']['_fixattriI' + 'nfo']);
            }
            _0x199b5b(_0x3235d6, 'laya.webgl' + '.utils.Mes' + 'hTexture', _0xbeea44);
            var _0x54d7b7 = _0x3235d6['prototype'];
            return _0x54d7b7['addData'] = function (_0x4ab992, _0x4afbbe, _0x31410e, _0x46473c, _0x173460, _0x54b491) {
                var _0x19d563 = _0x4ab992['length'] / 0x2, _0x2fb6e2 = this['_vb']['needSize'](_0x19d563 * _0x3235d6['const_stri' + 'de']), _0x30d231 = _0x2fb6e2 >> 0x2, _0x5477c0 = this['_vb']['_floatArra' + 'y32'] || this['_vb']['getFloat32' + 'Array'](), _0x4d56de = this['_vb']['_uint32Arr' + 'ay'], _0x2f989c = 0x0;
                for (var _0x2ccbec = 0x0; _0x2ccbec < _0x19d563; _0x2ccbec++) {
                    var _0x333ae1 = _0x4ab992[_0x2f989c], _0x14d4af = _0x4ab992[_0x2f989c + 0x1], _0x8ed2e5 = _0x333ae1 * _0x46473c['a'] + _0x14d4af * _0x46473c['c'] + _0x46473c['tx'], _0x36047 = _0x333ae1 * _0x46473c['b'] + _0x14d4af * _0x46473c['d'] + _0x46473c['ty'];
                    _0x5477c0[_0x30d231++] = _0x8ed2e5, _0x5477c0[_0x30d231++] = _0x36047, _0x5477c0[_0x30d231++] = _0x4afbbe[_0x2f989c], _0x5477c0[_0x30d231++] = _0x4afbbe[_0x2f989c + 0x1], _0x2f989c += 0x2, _0x4d56de[_0x30d231++] = _0x173460, _0x4d56de[_0x30d231++] = 0xff;
                }
                this['_vb']['setNeedUpl' + 'oad']();
                var _0x4f2b8d = this['vertNum'];
                if (_0x4f2b8d > 0x0) {
                    var _0x28e710 = _0x31410e['length'];
                    if (_0x28e710 > _0x3235d6['tmpIdx']['length'])
                        _0x3235d6['tmpIdx'] = new Uint16Array(_0x28e710);
                    for (var _0x21b118 = 0x0; _0x21b118 < _0x28e710; _0x21b118++) {
                        _0x3235d6['tmpIdx'][_0x21b118] = _0x31410e[_0x21b118] + _0x4f2b8d;
                    }
                    this['_ib']['appendU16A' + 'rray'](_0x3235d6['tmpIdx'], _0x31410e['length']);
                } else
                    this['_ib']['append'](_0x31410e);
                this['_ib']['setNeedUpl' + 'oad'](), this['vertNum'] += _0x19d563, this['indexNum'] += _0x31410e['length'];
            }, _0x54d7b7['releaseMes' + 'h'] = function () {
                this['_vb']['setByteLen' + 'gth'](0x0), this['_ib']['setByteLen' + 'gth'](0x0), this['vertNum'] = 0x0, this['indexNum'] = 0x0, laya['webgl']['utils']['MeshTextur' + 'e']['_POOL']['push'](this);
            }, _0x54d7b7['destroy'] = function () {
                this['_ib']['destroy'](), this['_vb']['destroy'](), this['_ib']['disposeRes' + 'ource'](), this['_vb']['deleteBuff' + 'er']();
            }, _0x3235d6['getAMesh'] = function () {
                if (laya['webgl']['utils']['MeshTextur' + 'e']['_POOL']['length'])
                    return laya['webgl']['utils']['MeshTextur' + 'e']['_POOL']['pop']();
                return new _0x3235d6();
            }, _0x3235d6['const_stri' + 'de'] = 0x18, _0x3235d6['_POOL'] = [], _0x3a2911(_0x3235d6, [
                '_fixattriI' + 'nfo',
                function () {
                    return this['_fixattriI' + 'nfo'] = [
                        0x1406,
                        0x4,
                        0x0,
                        0x1401,
                        0x4,
                        0x10,
                        0x1401,
                        0x4,
                        0x14
                    ];
                },
                'tmpIdx',
                function () {
                    return this['tmpIdx'] = new Uint16Array(0x4);
                }
            ]), _0x3235d6;
        }(_0x3c6ccc), _0x4a8714 = function (_0x4224d9) {
            function _0x24400e() {
                _0x24400e['__super']['call'](this, _0x24400e['__name2int'], _0x24400e['__int2name'], _0x24400e['__int2name' + 'Map']);
            }
            return _0x199b5b(_0x24400e, 'laya.webgl' + '.shader.d2' + '.ShaderDef' + 'ines2D', _0x4224d9), _0x24400e['__init__'] = function () {
                _0x24400e['reg']('TEXTURE2D', 0x1), _0x24400e['reg']('PRIMITIVE', 0x4), _0x24400e['reg']('GLOW_FILTE' + 'R', 0x8), _0x24400e['reg']('BLUR_FILTE' + 'R', 0x10), _0x24400e['reg']('COLOR_FILT' + 'ER', 0x20), _0x24400e['reg']('COLOR_ADD', 0x40), _0x24400e['reg']('WORLDMAT', 0x80), _0x24400e['reg']('FILLTEXTUR' + 'E', 0x100), _0x24400e['reg']('FSHIGHPREC' + 'ISION', 0x400), _0x24400e['reg']('MVP3D', 0x800);
            }, _0x24400e['reg'] = function (_0x21e193, _0x19bbbc) {
                _0x10c501['_reg'](_0x21e193, _0x19bbbc, _0x24400e['__name2int'], _0x24400e['__int2name']);
            }, _0x24400e['toText'] = function (_0x8704f8, _0x174e8f, _0x5c94ea) {
                return _0x10c501['_toText'](_0x8704f8, _0x174e8f, _0x5c94ea);
            }, _0x24400e['toInt'] = function (_0x3912fb) {
                return _0x10c501['_toInt'](_0x3912fb, _0x24400e['__name2int']);
            }, _0x24400e['TEXTURE2D'] = 0x1, _0x24400e['PRIMITIVE'] = 0x4, _0x24400e['FILTERGLOW'] = 0x8, _0x24400e['FILTERBLUR'] = 0x10, _0x24400e['FILTERCOLO' + 'R'] = 0x20, _0x24400e['COLORADD'] = 0x40, _0x24400e['WORLDMAT'] = 0x80, _0x24400e['FILLTEXTUR' + 'E'] = 0x100, _0x24400e['SKINMESH'] = 0x200, _0x24400e['SHADERDEFI' + 'NE_FSHIGHP' + 'RECISION'] = 0x400, _0x24400e['MVP3D'] = 0x800, _0x24400e['NOOPTMASK'] = 0x8 | 0x10 | 0x20 | 0x100, _0x24400e['__name2int'] = {}, _0x24400e['__int2name'] = [], _0x24400e['__int2name' + 'Map'] = [], _0x24400e;
        }(_0x10c501), _0x3fb2b8 = function (_0xd996b7) {
            function _0x19e640(_0x2fdd8d, _0x33da06, _0x20e7fa, _0x58ce59, _0x3bb498) {
                this['lastScaleX'] = 0x1, this['lastScaleY'] = 0x1, this['needResetS' + 'cale'] = ![], this['maxTexW'] = 0x0, this['maxTexH'] = 0x0, this['scaleFontS' + 'ize'] = !![], this['showDbgInf' + 'o'] = ![], this['supportIma' + 'geData'] = !![], _0x19e640['__super']['call'](this), _0x20e7fa === void 0x0 && (_0x20e7fa = !![]), _0x58ce59 === void 0x0 && (_0x58ce59 = !![]), _0x3bb498 === void 0x0 && (_0x3bb498 = ![]), this['maxTexW'] = _0x2fdd8d, this['maxTexH'] = _0x33da06, this['scaleFontS' + 'ize'] = _0x20e7fa, this['supportIma' + 'geData'] = _0x58ce59, this['showDbgInf' + 'o'] = _0x3bb498;
                if (!_0x19e640['canvas']) {
                    _0x19e640['canvas'] = _0x2923dd['document']['createElem' + 'ent']('canvas'), _0x19e640['canvas']['width'] = 0x400, _0x19e640['canvas']['height'] = 0x200, _0x19e640['canvas']['style']['left'] = '-10000px', _0x19e640['canvas']['style']['position'] = 'absolute', _0x435c6a['body']['appendChil' + 'd'](_0x19e640['canvas']);
                    ;
                    _0x19e640['ctx'] = _0x19e640['canvas']['getContext']('2d');
                }
            }
            _0x199b5b(_0x19e640, 'laya.webgl' + '.resource.' + 'CharRender' + '_Canvas', _0xd996b7);
            var _0x34b6f0 = _0x19e640['prototype'];
            return _0x34b6f0['getWidth'] = function (_0x5d7d5f, _0x51c38f) {
                if (!_0x19e640['ctx'])
                    return 0x0;
                return _0x19e640['ctx']['_lastFont'] != _0x5d7d5f && (_0x19e640['ctx']['font'] = _0x5d7d5f, _0x19e640['ctx']['_lastFont'] = _0x5d7d5f), _0x19e640['ctx']['measureTex' + 't'](_0x51c38f)['width'];
            }, _0x34b6f0['scale'] = function (_0x26d593, _0x2ec6c1) {
                if (!this['supportIma' + 'geData']) {
                    this['lastScaleX'] = _0x26d593, this['lastScaleY'] = _0x2ec6c1;
                    return;
                }
                (this['lastScaleX'] != _0x26d593 || this['lastScaleY'] != _0x2ec6c1) && (_0x19e640['ctx']['setTransfo' + 'rm'](_0x26d593, 0x0, 0x0, _0x2ec6c1, 0x0, 0x0), this['lastScaleX'] = _0x26d593, this['lastScaleY'] = _0x2ec6c1);
            }, _0x34b6f0['getCharBmp'] = function (_0xc229e3, _0x1f6cf6, _0x1b8bc3, _0x3a92bf, _0x523718, _0x9d213b, _0x24a643, _0x33b319, _0x28295e, _0x377a18, _0x57a1f3) {
                if (!this['supportIma' + 'geData'])
                    return this['getCharCan' + 'vas'](_0xc229e3, _0x1f6cf6, _0x1b8bc3, _0x3a92bf, _0x523718, _0x9d213b, _0x24a643, _0x33b319, _0x28295e, _0x377a18);
                _0x19e640['ctx']['font'] != _0x1f6cf6 && (_0x19e640['ctx']['font'] = _0x1f6cf6, _0x19e640['ctx']['_lastFont'] = _0x1f6cf6);
                _0x9d213b['width'] = _0x19e640['ctx']['measureTex' + 't'](_0xc229e3)['width'];
                var _0x41fedd = _0x9d213b['width'] * this['lastScaleX'], _0x1ad55b = _0x9d213b['height'] * this['lastScaleY'];
                _0x41fedd += (_0x24a643 + _0x28295e) * this['lastScaleX'], _0x1ad55b += (_0x33b319 + _0x377a18) * this['lastScaleY'], _0x41fedd = Math['ceil'](_0x41fedd), _0x1ad55b = Math['ceil'](_0x1ad55b), _0x41fedd = Math['min'](_0x41fedd, laya['webgl']['resource']['CharRender' + '_Canvas']['canvas']['width']), _0x1ad55b = Math['min'](_0x1ad55b, laya['webgl']['resource']['CharRender' + '_Canvas']['canvas']['height']);
                var _0x5b9dff = _0x41fedd + _0x1b8bc3 * 0x2 + 0x1, _0x3ae042 = _0x1ad55b + _0x1b8bc3 * 0x2 + 0x1;
                _0x57a1f3 && (_0x5b9dff = Math['max'](_0x5b9dff, _0x57a1f3[0x0] + _0x57a1f3[0x2] + 0x1), _0x3ae042 = Math['max'](_0x3ae042, _0x57a1f3[0x1] + _0x57a1f3[0x3] + 0x1));
                _0x19e640['ctx']['clearRect'](0x0, 0x0, _0x5b9dff, _0x3ae042), _0x19e640['ctx']['save'](), _0x19e640['ctx']['textBaseli' + 'ne'] = 'top';
                _0x1b8bc3 > 0x0 && (_0x19e640['ctx']['strokeStyl' + 'e'] = _0x523718, _0x19e640['ctx']['lineWidth'] = _0x1b8bc3, _0x19e640['ctx']['strokeText'](_0xc229e3, _0x24a643, _0x33b319));
                _0x19e640['ctx']['fillStyle'] = _0x3a92bf, _0x19e640['ctx']['fillText'](_0xc229e3, _0x24a643, _0x33b319);
                this['showDbgInf' + 'o'] && (_0x19e640['ctx']['strokeStyl' + 'e'] = '#ff0000', _0x19e640['ctx']['strokeRect'](0x0, 0x0, _0x41fedd, _0x1ad55b), _0x19e640['ctx']['strokeStyl' + 'e'] = '#00ff00', _0x19e640['ctx']['strokeRect'](_0x24a643, _0x33b319, _0x9d213b['width'], _0x9d213b['height']));
                if (_0x57a1f3) {
                    if (_0x57a1f3[0x2] == -0x1)
                        _0x57a1f3[0x2] = Math['ceil']((_0x9d213b['width'] + _0x1b8bc3) * this['lastScaleX']);
                }
                ;
                var _0x362ccd = _0x57a1f3 ? _0x19e640['ctx']['getImageDa' + 'ta'](_0x57a1f3[0x0], _0x57a1f3[0x1], _0x57a1f3[0x2], _0x57a1f3[0x3]) : _0x19e640['ctx']['getImageDa' + 'ta'](0x0, 0x0, _0x41fedd, _0x1ad55b);
                return _0x19e640['ctx']['restore'](), _0x9d213b['bmpWidth'] = _0x362ccd['width'], _0x9d213b['bmpHeight'] = _0x362ccd['height'], _0x362ccd;
            }, _0x34b6f0['getCharCan' + 'vas'] = function (_0x55b3d8, _0xe9fcbd, _0xe4311d, _0x5458a8, _0x37fa2b, _0x44aff0, _0x4658e6, _0x5bf995, _0x3a8401, _0xb4e256) {
                _0x19e640['ctx']['font'] != _0xe9fcbd && (_0x19e640['ctx']['font'] = _0xe9fcbd, _0x19e640['ctx']['_lastFont'] = _0xe9fcbd);
                _0x44aff0['width'] = _0x19e640['ctx']['measureTex' + 't'](_0x55b3d8)['width'];
                var _0x2036b0 = _0x44aff0['width'] * this['lastScaleX'], _0x5372f2 = _0x44aff0['height'] * this['lastScaleY'];
                return _0x2036b0 += (_0x4658e6 + _0x3a8401) * this['lastScaleX'], _0x5372f2 += (_0x5bf995 + _0xb4e256) * this['lastScaleY'] + 0x1, _0x2036b0 = Math['min'](_0x2036b0, this['maxTexW']), _0x5372f2 = Math['min'](_0x5372f2, this['maxTexH']), _0x19e640['canvas']['width'] = Math['min'](_0x2036b0 + 0x1, this['maxTexW']), _0x19e640['canvas']['height'] = Math['min'](_0x5372f2 + 0x1, this['maxTexH']), _0x19e640['ctx']['font'] = _0xe9fcbd, _0x19e640['ctx']['clearRect'](0x0, 0x0, _0x2036b0 + 0x1 + _0xe4311d, _0x5372f2 + 0x1 + _0xe4311d), _0x19e640['ctx']['setTransfo' + 'rm'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0), _0x19e640['ctx']['save'](), this['scaleFontS' + 'ize'] && _0x19e640['ctx']['scale'](this['lastScaleX'], this['lastScaleY']), _0x19e640['ctx']['translate'](_0x4658e6, _0x5bf995), _0x19e640['ctx']['textAlign'] = 'left', _0x19e640['ctx']['textBaseli' + 'ne'] = 'top', _0xe4311d > 0x0 ? (_0x19e640['ctx']['strokeStyl' + 'e'] = _0x37fa2b, _0x19e640['ctx']['fillStyle'] = _0x5458a8, _0x19e640['ctx']['lineWidth'] = _0xe4311d, _0x19e640['ctx']['fillAndStr' + 'okeText'] ? _0x19e640['ctx']['fillAndStr' + 'okeText'](_0x55b3d8, 0x0, 0x0) : (_0x19e640['ctx']['strokeText'](_0x55b3d8, 0x0, 0x0), _0x19e640['ctx']['fillText'](_0x55b3d8, 0x0, 0x0))) : (_0x19e640['ctx']['fillStyle'] = _0x5458a8, _0x19e640['ctx']['fillText'](_0x55b3d8, 0x0, 0x0)), this['showDbgInf' + 'o'] && (_0x19e640['ctx']['strokeStyl' + 'e'] = '#ff0000', _0x19e640['ctx']['strokeRect'](0x0, 0x0, _0x2036b0, _0x5372f2), _0x19e640['ctx']['strokeStyl' + 'e'] = '#00ff00', _0x19e640['ctx']['strokeRect'](0x0, 0x0, _0x44aff0['width'], _0x44aff0['height'])), _0x19e640['ctx']['restore'](), _0x44aff0['bmpWidth'] = _0x19e640['canvas']['width'], _0x44aff0['bmpHeight'] = _0x19e640['canvas']['height'], _0x19e640['canvas'];
            }, _0x3a2bd3(0x0, _0x34b6f0, 'canvasWidt' + 'h', function () {
                return _0x19e640['canvas']['width'];
            }, function (_0x59005c) {
                if (_0x19e640['canvas']['width'] == _0x59005c)
                    return;
                _0x19e640['canvas']['width'] = _0x59005c, _0x59005c > 0x800 && console['warn']('画文字设置的宽度太大' + '，超过2048了'), _0x19e640['ctx']['setTransfo' + 'rm'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0), _0x19e640['ctx']['scale'](this['lastScaleX'], this['lastScaleY']);
            }), _0x19e640['canvas'] = null, _0x19e640['ctx'] = null, _0x19e640;
        }(_0x26cdea), _0x1763f5 = function (_0xb80e81) {
            function _0x2b05be() {
                _0x2b05be['__super']['call'](this);
            }
            return _0x199b5b(_0x2b05be, 'laya.webgl' + '.BufferSta' + 'te2D', _0xb80e81), _0x2b05be;
        }(_0x5ccc27), _0x7fdce3 = function (_0x1c4562) {
            function _0x48b683() {
                this['lastFont'] = '', _0x48b683['__super']['call'](this);
            }
            _0x199b5b(_0x48b683, 'laya.webgl' + '.resource.' + 'CharRender' + '_Native', _0x1c4562);
            var _0x400589 = _0x48b683['prototype'];
            return _0x400589['getWidth'] = function (_0x492c4b, _0x270ac0) {
                if (!_0x2923dd['conchTextC' + 'anvas'])
                    return 0x0;
                return this['lastFont'] != _0x492c4b && (_0x2923dd['conchTextC' + 'anvas']['font'] = _0x492c4b, this['lastFont'] = _0x492c4b), _0x2923dd['conchTextC' + 'anvas']['measureTex' + 't'](_0x270ac0)['width'];
            }, _0x400589['scale'] = function (_0x2c69c9, _0x4f3631) {
            }, _0x400589['getCharBmp'] = function (_0x1665dd, _0x20a7a2, _0x238a86, _0x486796, _0x31151c, _0x5c8de5, _0x498cc9, _0x15578b, _0x43d60a, _0x5a6f56, _0x365468) {
                if (!_0x2923dd['conchTextC' + 'anvas'])
                    return null;
                this['lastFont'] != _0x20a7a2 && (_0x2923dd['conchTextC' + 'anvas']['font'] = _0x20a7a2, this['lastFont'] = _0x20a7a2);
                ;
                var _0x27c66e = _0x5c8de5['width'] = _0x2923dd['conchTextC' + 'anvas']['measureTex' + 't'](_0x1665dd)['width'], _0x3e122e = _0x5c8de5['height'];
                _0x27c66e += _0x498cc9 + _0x43d60a, _0x3e122e += _0x15578b + _0x5a6f56;
                var _0x5599b7 = _0x4b1f30['create'](_0x31151c), _0x113db6 = _0x5599b7['numColor'], _0x5e8321 = _0x4b1f30['create'](_0x486796), _0x2a1a32 = _0x5e8321['numColor'], _0x2f8149 = _0x2923dd['conchTextC' + 'anvas']['getTextBit' + 'mapData'](_0x1665dd, _0x2a1a32, _0x238a86 > 0x2 ? 0x2 : _0x238a86, _0x113db6);
                return _0x5c8de5['bmpWidth'] = _0x2f8149['width'], _0x5c8de5['bmpHeight'] = _0x2f8149['height'], _0x2f8149;
            }, _0x48b683;
        }(_0x26cdea), _0x1836f7 = function (_0x31a98d) {
            function _0x31efab() {
                this['_matrix'] = new _0x4fb671(), this['_matrix4'] = _0x39d4bb['defaultMat' + 'rix4']['concat'](), _0x31efab['__super']['call'](this, 0x2710), this['shaderValu' + 'e'] = new _0xd9aa33(0x0, 0x0);
            }
            _0x199b5b(_0x31efab, 'laya.webgl' + '.submit.Su' + 'bmitCanvas', _0x31a98d);
            var _0x375539 = _0x31efab['prototype'];
            return _0x375539['renderSubm' + 'it'] = function () {
                var _0x2dd34a = _0x5c6236['worldAlpha'], _0x25485b = _0x5c6236['worldMatri' + 'x4'], _0x186d1c = _0x5c6236['worldMatri' + 'x'], _0x5a23c9 = _0x5c6236['worldFilte' + 'rs'], _0x57de9d = _0x5c6236['worldShade' + 'rDefines'], _0x547245 = this['shaderValu' + 'e'], _0x3b8119 = this['_matrix'], _0x28d1f7 = this['_matrix4'], _0x18ba8e = _0x4fb671['TEMP'];
                return _0x4fb671['mul'](_0x3b8119, _0x186d1c, _0x18ba8e), _0x28d1f7[0x0] = _0x18ba8e['a'], _0x28d1f7[0x1] = _0x18ba8e['b'], _0x28d1f7[0x4] = _0x18ba8e['c'], _0x28d1f7[0x5] = _0x18ba8e['d'], _0x28d1f7[0xc] = _0x18ba8e['tx'], _0x28d1f7[0xd] = _0x18ba8e['ty'], _0x5c6236['worldMatri' + 'x'] = _0x18ba8e['clone'](), _0x5c6236['worldMatri' + 'x4'] = _0x28d1f7, _0x5c6236['worldAlpha'] = _0x5c6236['worldAlpha'] * _0x547245['alpha'], _0x547245['filters'] && _0x547245['filters']['length'] && (_0x5c6236['worldFilte' + 'rs'] = _0x547245['filters'], _0x5c6236['worldShade' + 'rDefines'] = _0x547245['defines']), this['canv']['flushsubmi' + 't'](), _0x5c6236['worldAlpha'] = _0x2dd34a, _0x5c6236['worldMatri' + 'x4'] = _0x25485b, _0x5c6236['worldMatri' + 'x']['destroy'](), _0x5c6236['worldMatri' + 'x'] = _0x186d1c, _0x5c6236['worldFilte' + 'rs'] = _0x5a23c9, _0x5c6236['worldShade' + 'rDefines'] = _0x57de9d, 0x1;
            }, _0x375539['releaseRen' + 'der'] = function () {
                if (--this['_ref'] < 0x1) {
                    var _0x4ea953 = _0x31efab['POOL'];
                    this['_mesh'] = null, _0x4ea953[_0x4ea953['_length']++] = this;
                }
            }, _0x375539['clone'] = function (_0xa41751, _0x1a6826, _0x3b735a) {
                return null;
            }, _0x375539['getRenderT' + 'ype'] = function () {
                return 0x2713;
            }, _0x31efab['create'] = function (_0x291936, _0x22bcdd, _0xa8576d) {
                var _0x54c488 = !_0x31efab['POOL']['_length'] ? new _0x31efab() : _0x31efab['POOL'][--_0x31efab['POOL']['_length']];
                _0x54c488['canv'] = _0x291936, _0x54c488['_ref'] = 0x1, _0x54c488['_numEle'] = 0x0;
                var _0x184e25 = _0x54c488['shaderValu' + 'e'];
                return _0x184e25['alpha'] = _0x22bcdd, _0x184e25['defines']['setValue'](0x0), _0xa8576d && _0xa8576d['length'] && _0x184e25['setFilters'](_0xa8576d), _0x54c488;
            }, _0x31efab['POOL'] = (_0x31efab['POOL'] = [], _0x31efab['POOL']['_length'] = 0x0, _0x31efab['POOL']), _0x31efab;
        }(_0x247f32), _0x8725ff = function (_0x44c5ea) {
            function _0x5ea4d8(_0x44a9e9) {
                _0x5ea4d8['__super']['call'](this, laya['webgl']['utils']['MeshPartic' + 'le2D']['const_stri' + 'de'], _0x44a9e9 * 0x4 * _0x5ea4d8['const_stri' + 'de'], 0x4), this['canReuse'] = !![], this['setAttribu' + 'tes'](laya['webgl']['utils']['MeshPartic' + 'le2D']['_fixattriI' + 'nfo']), this['createQuad' + 'IB'](_0x44a9e9), this['_quadNum'] = _0x44a9e9;
            }
            _0x199b5b(_0x5ea4d8, 'laya.webgl' + '.utils.Mes' + 'hParticle2' + 'D', _0x44c5ea);
            var _0x111c25 = _0x5ea4d8['prototype'];
            return _0x111c25['setMaxPart' + 'icleNum'] = function (_0x30b624) {
                this['_vb']['_resizeBuf' + 'fer'](_0x30b624 * 0x4 * _0x5ea4d8['const_stri' + 'de'], ![]), this['createQuad' + 'IB'](_0x30b624);
            }, _0x111c25['releaseMes' + 'h'] = function () {
                debugger;
                this['_vb']['setByteLen' + 'gth'](0x0), this['vertNum'] = 0x0, this['indexNum'] = 0x0, laya['webgl']['utils']['MeshPartic' + 'le2D']['_POOL']['push'](this);
            }, _0x111c25['destroy'] = function () {
                this['_ib']['destroy'](), this['_vb']['destroy'](), this['_vb']['deleteBuff' + 'er']();
            }, _0x5ea4d8['getAMesh'] = function (_0x29562a) {
                if (laya['webgl']['utils']['MeshPartic' + 'le2D']['_POOL']['length']) {
                    var _0xdab2a = laya['webgl']['utils']['MeshPartic' + 'le2D']['_POOL']['pop']();
                    return _0xdab2a['setMaxPart' + 'icleNum'](_0x29562a), _0xdab2a;
                }
                return new _0x5ea4d8(_0x29562a);
            }, _0x5ea4d8['const_stri' + 'de'] = 0x1d * 0x4, _0x5ea4d8['_POOL'] = [], _0x3a2911(_0x5ea4d8, [
                '_fixattriI' + 'nfo',
                function () {
                    return this['_fixattriI' + 'nfo'] = [
                        0x1406,
                        0x4,
                        0x0,
                        0x1406,
                        0x3,
                        0x10,
                        0x1406,
                        0x3,
                        0x1c,
                        0x1406,
                        0x4,
                        0x28,
                        0x1406,
                        0x4,
                        0x38,
                        0x1406,
                        0x3,
                        0x48,
                        0x1406,
                        0x2,
                        0x54,
                        0x1406,
                        0x4,
                        0x5c,
                        0x1406,
                        0x1,
                        0x6c,
                        0x1406,
                        0x1,
                        0x70
                    ];
                }
            ]), _0x5ea4d8;
        }(_0x3c6ccc), _0x53e8eb = function (_0xd91915) {
            function _0x5c1d0e() {
                this['_maxsize'] = 0x0, this['_upload'] = !![], this['_uploadSiz' + 'e'] = 0x0, this['_bufferSiz' + 'e'] = 0x0, this['_u8Array'] = null, _0x5c1d0e['__super']['call'](this);
            }
            _0x199b5b(_0x5c1d0e, 'laya.webgl' + '.utils.Buf' + 'fer2D', _0xd91915);
            var _0x340bde = _0x5c1d0e['prototype'];
            return _0x340bde['setByteLen' + 'gth'] = function (_0x124560) {
                this['_byteLengt' + 'h'] !== _0x124560 && (_0x124560 <= this['_bufferSiz' + 'e'] || this['_resizeBuf' + 'fer'](_0x124560 * 0x2 + 0x100, !![]), this['_byteLengt' + 'h'] = _0x124560);
            }, _0x340bde['needSize'] = function (_0x337945) {
                var _0xd9f532 = this['_byteLengt' + 'h'];
                if (_0x337945) {
                    var _0xf4a08a = this['_byteLengt' + 'h'] + _0x337945;
                    _0xf4a08a <= this['_bufferSiz' + 'e'] || this['_resizeBuf' + 'fer'](_0xf4a08a << 0x1, !![]), this['_byteLengt' + 'h'] = _0xf4a08a;
                }
                return _0xd9f532;
            }, _0x340bde['_bufferDat' + 'a'] = function () {
                this['_maxsize'] = Math['max'](this['_maxsize'], this['_byteLengt' + 'h']), _0x29f3e7['loopCount'] % 0x1e == 0x0 && (this['_buffer']['byteLength'] > this['_maxsize'] + 0x40 && (this['_buffer'] = this['_buffer']['slice'](0x0, this['_maxsize'] + 0x40), this['_bufferSiz' + 'e'] = this['_buffer']['byteLength'], this['_checkArra' + 'yUse']()), this['_maxsize'] = this['_byteLengt' + 'h']), this['_uploadSiz' + 'e'] < this['_buffer']['byteLength'] && (this['_uploadSiz' + 'e'] = this['_buffer']['byteLength'], _0x33edbf['instance']['bufferData'](this['_bufferTyp' + 'e'], this['_uploadSiz' + 'e'], this['_bufferUsa' + 'ge'])), _0x33edbf['instance']['bufferSubD' + 'ata'](this['_bufferTyp' + 'e'], 0x0, this['_buffer']);
            }, _0x340bde['_bufferSub' + 'Data'] = function (_0x1b1692, _0x38915d, _0xb7b039) {
                _0x1b1692 === void 0x0 && (_0x1b1692 = 0x0), _0x38915d === void 0x0 && (_0x38915d = 0x0), _0xb7b039 === void 0x0 && (_0xb7b039 = 0x0), this['_maxsize'] = Math['max'](this['_maxsize'], this['_byteLengt' + 'h']);
                _0x29f3e7['loopCount'] % 0x1e == 0x0 && (this['_buffer']['byteLength'] > this['_maxsize'] + 0x40 && (this['_buffer'] = this['_buffer']['slice'](0x0, this['_maxsize'] + 0x40), this['_bufferSiz' + 'e'] = this['_buffer']['byteLength'], this['_checkArra' + 'yUse']()), this['_maxsize'] = this['_byteLengt' + 'h']);
                this['_uploadSiz' + 'e'] < this['_buffer']['byteLength'] && (this['_uploadSiz' + 'e'] = this['_buffer']['byteLength'], _0x33edbf['instance']['bufferData'](this['_bufferTyp' + 'e'], this['_uploadSiz' + 'e'], this['_bufferUsa' + 'ge']));
                if (_0x38915d || _0xb7b039) {
                    var _0x3667d2 = this['_buffer']['slice'](_0x38915d, _0xb7b039);
                    _0x33edbf['instance']['bufferSubD' + 'ata'](this['_bufferTyp' + 'e'], _0x1b1692, _0x3667d2);
                } else
                    _0x33edbf['instance']['bufferSubD' + 'ata'](this['_bufferTyp' + 'e'], _0x1b1692, this['_buffer']);
            }, _0x340bde['_checkArra' + 'yUse'] = function () {
            }, _0x340bde['_bind_uplo' + 'adForVAO'] = function () {
                if (!this['_upload'])
                    return ![];
                return this['_upload'] = ![], this['_bindForVA' + 'O'](), this['_bufferDat' + 'a'](), !![];
            }, _0x340bde['_bind_uplo' + 'ad'] = function () {
                if (!this['_upload'])
                    return ![];
                return this['_upload'] = ![], this['bind'](), this['_bufferDat' + 'a'](), !![];
            }, _0x340bde['_bind_subU' + 'pload'] = function (_0x1023cc, _0x4be8ba, _0x5083ef) {
                _0x1023cc === void 0x0 && (_0x1023cc = 0x0), _0x4be8ba === void 0x0 && (_0x4be8ba = 0x0), _0x5083ef === void 0x0 && (_0x5083ef = 0x0);
                if (!this['_upload'])
                    return ![];
                return this['_upload'] = ![], this['bind'](), this['_bufferSub' + 'Data'](_0x1023cc, _0x4be8ba, _0x5083ef), !![];
            }, _0x340bde['_resizeBuf' + 'fer'] = function (_0x281596, _0x52ae0c) {
                if (_0x281596 < this['_buffer']['byteLength'])
                    return this;
                if (_0x52ae0c && this['_buffer'] && this['_buffer']['byteLength'] > 0x0) {
                    var _0x3647d2 = new ArrayBuffer(_0x281596), _0x5712a8 = this['_u8Array'] && this['_u8Array']['buffer'] == this['_buffer'] ? this['_u8Array'] : new Uint8Array(this['_buffer']);
                    this['_u8Array'] = new Uint8Array(_0x3647d2), this['_u8Array']['set'](_0x5712a8, 0x0), this['_buffer'] = _0x3647d2;
                } else
                    this['_buffer'] = new ArrayBuffer(_0x281596);
                return this['_checkArra' + 'yUse'](), this['_upload'] = !![], this['_bufferSiz' + 'e'] = this['_buffer']['byteLength'], this;
            }, _0x340bde['append'] = function (_0x42f261) {
                this['_upload'] = !![];
                var _0x1756e6 = 0x0, _0x2ec03d;
                _0x1756e6 = _0x42f261['byteLength'];
                if (_0x42f261 instanceof Uint8Array)
                    this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x1756e6, !![]), _0x2ec03d = new Uint8Array(this['_buffer'], this['_byteLengt' + 'h']);
                else {
                    if (_0x42f261 instanceof Uint16Array)
                        this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x1756e6, !![]), _0x2ec03d = new Uint16Array(this['_buffer'], this['_byteLengt' + 'h']);
                    else
                        _0x42f261 instanceof Float32Array && (this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x1756e6, !![]), _0x2ec03d = new Float32Array(this['_buffer'], this['_byteLengt' + 'h']));
                }
                _0x2ec03d['set'](_0x42f261, 0x0), this['_byteLengt' + 'h'] += _0x1756e6, this['_checkArra' + 'yUse']();
            }, _0x340bde['appendU16A' + 'rray'] = function (_0x5c9c80, _0x55f105) {
                this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x55f105 * 0x2, !![]);
                var _0x527b9a = new Uint16Array(this['_buffer'], this['_byteLengt' + 'h'], _0x55f105);
                for (var _0x543084 = 0x0; _0x543084 < _0x55f105; _0x543084++) {
                    _0x527b9a[_0x543084] = _0x5c9c80[_0x543084];
                }
                this['_byteLengt' + 'h'] += _0x55f105 * 0x2, this['_checkArra' + 'yUse']();
            }, _0x340bde['appendEx'] = function (_0x23e895, _0x5aa34a) {
                this['_upload'] = !![];
                var _0x5e769c = 0x0, _0xdab34c;
                _0x5e769c = _0x23e895['byteLength'], this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x5e769c, !![]), _0xdab34c = new _0x5aa34a(this['_buffer'], this['_byteLengt' + 'h']), _0xdab34c['set'](_0x23e895, 0x0), this['_byteLengt' + 'h'] += _0x5e769c, this['_checkArra' + 'yUse']();
            }, _0x340bde['appendEx2'] = function (_0x36f9a2, _0x124436, _0x752aef, _0x5e3d06) {
                _0x5e3d06 === void 0x0 && (_0x5e3d06 = 0x1), this['_upload'] = !![];
                var _0x2381eb = 0x0, _0xf114c9;
                _0x2381eb = _0x752aef * _0x5e3d06, this['_resizeBuf' + 'fer'](this['_byteLengt' + 'h'] + _0x2381eb, !![]), _0xf114c9 = new _0x124436(this['_buffer'], this['_byteLengt' + 'h']);
                var _0x5472a7 = 0x0;
                for (_0x5472a7 = 0x0; _0x5472a7 < _0x752aef; _0x5472a7++) {
                    _0xf114c9[_0x5472a7] = _0x36f9a2[_0x5472a7];
                }
                this['_byteLengt' + 'h'] += _0x2381eb, this['_checkArra' + 'yUse']();
            }, _0x340bde['getBuffer'] = function () {
                return this['_buffer'];
            }, _0x340bde['setNeedUpl' + 'oad'] = function () {
                this['_upload'] = !![];
            }, _0x340bde['getNeedUpl' + 'oad'] = function () {
                return this['_upload'];
            }, _0x340bde['upload'] = function () {
                var _0x421514 = this['_bind_uplo' + 'ad']();
                _0x33edbf['instance']['bindBuffer'](this['_bufferTyp' + 'e'], null);
                if (this['_bufferTyp' + 'e'] == 0x8892)
                    _0xad6375['_bindedVer' + 'texBuffer'] = null;
                if (this['_bufferTyp' + 'e'] == 0x8893)
                    _0xad6375['_bindedInd' + 'exBuffer'] = null;
                return _0xea7fb6['activeShad' + 'er'] = null, _0x421514;
            }, _0x340bde['subUpload'] = function (_0x2c7ceb, _0x305942, _0x5c376b) {
                _0x2c7ceb === void 0x0 && (_0x2c7ceb = 0x0), _0x305942 === void 0x0 && (_0x305942 = 0x0), _0x5c376b === void 0x0 && (_0x5c376b = 0x0);
                var _0x6f42f0 = this['_bind_subU' + 'pload']();
                _0x33edbf['instance']['bindBuffer'](this['_bufferTyp' + 'e'], null);
                if (this['_bufferTyp' + 'e'] == 0x8892)
                    _0xad6375['_bindedVer' + 'texBuffer'] = null;
                if (this['_bufferTyp' + 'e'] == 0x8893)
                    _0xad6375['_bindedInd' + 'exBuffer'] = null;
                return _0xea7fb6['activeShad' + 'er'] = null, _0x6f42f0;
            }, _0x340bde['_disposeRe' + 'source'] = function () {
                this['_upload'] = !![], this['_uploadSiz' + 'e'] = 0x0;
            }, _0x340bde['clear'] = function () {
                this['_byteLengt' + 'h'] = 0x0, this['_upload'] = !![];
            }, _0x3a2bd3(0x0, _0x340bde, 'bufferLeng' + 'th', function () {
                return this['_buffer']['byteLength'];
            }), _0x3a2bd3(0x0, _0x340bde, 'byteLength', null, function (_0x5afc4d) {
                this['setByteLen' + 'gth'](_0x5afc4d);
            }), _0x5c1d0e['__int__'] = function (_0x30af96) {
            }, _0x5c1d0e['FLOAT32'] = 0x4, _0x5c1d0e['SHORT'] = 0x2, _0x5c1d0e;
        }(_0xad6375), _0x519df4 = function (_0x28d139) {
            function _0x4f95cb(_0x504a14) {
                _0x504a14 === void 0x0 && (_0x504a14 = 0x2710), _0x4f95cb['__super']['call'](this, _0x504a14);
            }
            _0x199b5b(_0x4f95cb, 'laya.webgl' + '.submit.Su' + 'bmitTextur' + 'e', _0x28d139);
            var _0x3d90d5 = _0x4f95cb['prototype'];
            return _0x3d90d5['clone'] = function (_0x20d497, _0x75167, _0xbd816c) {
                var _0x5f45af = _0x4f95cb['_poolSize'] ? _0x4f95cb['POOL'][--_0x4f95cb['_poolSize']] : new _0x4f95cb();
                return this['_cloneInit'](_0x5f45af, _0x20d497, _0x75167, _0xbd816c), _0x5f45af;
            }, _0x3d90d5['releaseRen' + 'der'] = function () {
                --this['_ref'] < 0x1 && (_0x4f95cb['POOL'][_0x4f95cb['_poolSize']++] = this, this['shaderValu' + 'e']['release'](), this['_mesh'] = null, this['_parent'] && (this['_parent']['releaseRen' + 'der'](), this['_parent'] = null));
            }, _0x3d90d5['renderSubm' + 'it'] = function () {
                if (this['_numEle'] === 0x0)
                    return 0x1;
                var _0x384246 = this['shaderValu' + 'e']['textureHos' + 't'];
                if (_0x384246) {
                    var _0xe1edfc = _0x384246 ? _0x384246['_getSource']() : null;
                    if (!_0xe1edfc)
                        return 0x1;
                }
                ;
                var _0x6f2e91 = _0x354f16['mainContex' + 't'];
                this['_mesh']['useMesh'](_0x6f2e91);
                var _0x14c2f0 = _0x247f32['preRender'], _0x383f38 = _0x247f32['preRender']['_key'];
                return this['_key']['blendShade' + 'r'] === 0x0 && (this['_key']['submitType'] === _0x383f38['submitType'] && this['_key']['blendShade' + 'r'] === _0x383f38['blendShade' + 'r']) && _0xea7fb6['activeShad' + 'er'] && _0x247f32['preRender']['clipInfoID'] == this['clipInfoID'] && _0x14c2f0['shaderValu' + 'e']['defines']['_value'] === this['shaderValu' + 'e']['defines']['_value'] && (this['shaderValu' + 'e']['defines']['_value'] & _0x4a8714['NOOPTMASK']) == 0x0 ? _0xea7fb6['activeShad' + 'er']['uploadText' + 'ure2D'](_0xe1edfc) : (_0x5c9116['activeBlen' + 'dFunction'] !== this['_blendFn'] && (_0x21b46c['setBlend'](_0x6f2e91, !![]), this['_blendFn'](_0x6f2e91), _0x5c9116['activeBlen' + 'dFunction'] = this['_blendFn']), this['shaderValu' + 'e']['texture'] = _0xe1edfc, this['shaderValu' + 'e']['upload']()), _0x6f2e91['drawElemen' + 'ts'](0x4, this['_numEle'], 0x1403, this['_startIdx']), _0x29f3e7['renderBatc' + 'h']++, _0x29f3e7['trianglesF' + 'aces'] += this['_numEle'] / 0x3, 0x1;
            }, _0x4f95cb['create'] = function (_0x2f95b1, _0xdf58a8, _0x22f2da) {
                var _0x3a8db7 = _0x4f95cb['_poolSize'] ? _0x4f95cb['POOL'][--_0x4f95cb['_poolSize']] : new _0x4f95cb(0x2720);
                _0x3a8db7['_mesh'] = _0xdf58a8, _0x3a8db7['_key']['clear'](), _0x3a8db7['_key']['submitType'] = 0x2, _0x3a8db7['_ref'] = 0x1, _0x3a8db7['_startIdx'] = _0xdf58a8['indexNum'] * _0x39d4bb['BYTES_PIDX'], _0x3a8db7['_numEle'] = 0x0;
                var _0x4f1237 = _0x2f95b1['_nBlendTyp' + 'e'];
                _0x3a8db7['_key']['blendShade' + 'r'] = _0x4f1237, _0x3a8db7['_blendFn'] = _0x2f95b1['_targets'] ? _0x5c9116['targetFns'][_0x4f1237] : _0x5c9116['fns'][_0x4f1237], _0x3a8db7['shaderValu' + 'e'] = _0x22f2da;
                if (_0x2f95b1['_colorFile' + 'r']) {
                    var _0x344d79 = _0x2f95b1['_colorFile' + 'r'];
                    _0x22f2da['defines']['add'](_0x344d79['type']), _0x22f2da['colorMat'] = _0x344d79['_mat'], _0x22f2da['colorAlpha'] = _0x344d79['_alpha'];
                }
                return _0x3a8db7;
            }, _0x4f95cb['_poolSize'] = 0x0, _0x4f95cb['POOL'] = [], _0x4f95cb;
        }(_0x247f32), _0xea7fb6 = function (_0x516954) {
            function _0x2bebaf() {
                _0x2bebaf['__super']['call'](this);
            }
            return _0x199b5b(_0x2bebaf, 'laya.webgl' + '.shader.Ba' + 'seShader', _0x516954), _0x2bebaf['activeShad' + 'er'] = null, _0x2bebaf['bindShader'] = null, _0x2bebaf;
        }(_0x1c4cc5), _0x15e4ba = function (_0x2105cd) {
            function _0x59a297(_0x280531, _0x508444, _0x337851) {
                this['texture'] = null, this['_source'] = null, this['_used'] = null, this['_startFind' + 'Pos'] = 0x0, this['_texW'] = 0x0, this['_texH'] = 0x0, this['_gridNum'] = 0x0, this['charMaps'] = [], this['_score'] = 0x0, this['_scoreTick'] = 0x0, this['__destroye' + 'd'] = ![], this['_discardTm'] = 0x0, this['genID'] = 0x0, this['ArrCharRen' + 'derInfo'] = [], _0x59a297['__super']['call'](this), this['_texW'] = _0x280531, this['_texH'] = _0x508444, this['_gridNum'] = _0x337851, this['texture'] = new _0x2c67c3(this), this['setGridNum'](_0x337851), this['lock'] = !![];
            }
            _0x199b5b(_0x59a297, 'laya.webgl' + '.resource.' + 'CharPageTe' + 'xture', _0x2105cd);
            var _0x54e979 = _0x59a297['prototype'];
            return _0x54e979['findAGrid'] = function () {
                for (var _0x431aff = this['_startFind' + 'Pos']; _0x431aff < this['_gridNum']; _0x431aff++) {
                    if (this['_used'][_0x431aff] == 0x0) {
                        this['_startFind' + 'Pos'] = _0x431aff + 0x1, this['_used'][_0x431aff] = 0x1;
                        var _0x57dd4d = this['ArrCharRen' + 'derInfo'][_0x431aff] = new _0x37b54c();
                        return _0x57dd4d['tex'] = this, _0x57dd4d['pos'] = _0x431aff, _0x57dd4d;
                    }
                }
                return null;
            }, _0x54e979['removeGrid'] = function (_0x39f02a) {
                this['ArrCharRen' + 'derInfo'][_0x39f02a] && (this['ArrCharRen' + 'derInfo'][_0x39f02a]['deleted'] = !![]);
                this['_used'][_0x39f02a] = 0x0;
                if (_0x39f02a < this['_startFind' + 'Pos'])
                    this['_startFind' + 'Pos'] = _0x39f02a;
            }, _0x54e979['removeOld'] = function (_0x3b9b69) {
                var _0x1c81ea = 0x0, _0x5c6028 = null;
                for (var _0x352b1f = 0x0, _0x18bf51 = this['charMaps']['length']; _0x352b1f < _0x18bf51; _0x352b1f++) {
                    _0x5c6028 = this['charMaps'][_0x352b1f];
                    if (!_0x5c6028)
                        continue;
                    var _0x1113a4 = this;
                    _0x5c6028['forEach'](function (_0x2fe2d2, _0x22d296, _0x3c371e) {
                        if (_0x2fe2d2) {
                            if (_0x2fe2d2['touchTick'] < _0x3b9b69) {
                                console['log']('remove\x20cha' + 'r\x20' + _0x22d296), _0x1113a4['removeGrid'](_0x2fe2d2['pos']), _0x3c371e['delete'](_0x22d296);
                                ;
                                _0x1c81ea++;
                            }
                        }
                    });
                }
                return _0x1c81ea;
            }, _0x54e979['reset'] = function () {
                this['_discardTm'] = _0x4a6519['stage']['getFrameTm'](), this['_startFind' + 'Pos'] = 0x0, this['charMaps'] = [], this['_score'] = 0x0, this['_scoreTick'] = 0x0, this['__destroye' + 'd'] = !![], this['ArrCharRen' + 'derInfo']['forEach'](function (_0x39b731) {
                    _0x39b731['deleted'] = !![];
                });
            }, _0x54e979['setGridNum'] = function (_0xf79113) {
                this['_gridNum'] = _0xf79113;
                if (!this['_used'] || this['_used']['length'] != this['_gridNum'])
                    this['_used'] = new Uint8Array(_0xf79113);
                else {
                    if (this['_used']['fill'])
                        this['_used']['fill'](0x0);
                    else {
                        for (var _0x5cda95 = 0x0; _0x5cda95 < this['_used']['length']; _0x5cda95++)
                            this['_used'][_0x5cda95] = 0x0;
                    }
                }
            }, _0x54e979['recreateRe' + 'source'] = function () {
                if (this['_source'])
                    return;
                var _0x3e0e3b = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'], _0x3ec924 = this['_source'] = _0x3e0e3b['createText' + 'ure']();
                this['texture']['bitmap']['_glTexture'] = this['_source'], _0x21b46c['bindTextur' + 'e'](_0x3e0e3b, 0xde1, _0x3ec924), _0x3e0e3b['texImage2D'](0xde1, 0x0, 0x1908, this['_texW'], this['_texH'], 0x0, 0x1908, 0x1401, null), _0x3e0e3b['texParamet' + 'eri'](0xde1, 0x2801, 0x2601), _0x3e0e3b['texParamet' + 'eri'](0xde1, 0x2800, 0x2601), _0x3e0e3b['texParamet' + 'eri'](0xde1, 0x2802, 0x812f), _0x3e0e3b['texParamet' + 'eri'](0xde1, 0x2803, 0x812f);
            }, _0x54e979['addChar'] = function (_0x3a1173, _0x20668d, _0xefdade) {
                if (_0x231b8b['isWan1Wan']) {
                    this['addCharCan' + 'vas'](_0x3a1173, _0x20668d, _0xefdade);
                    return;
                }
                !this['_source'] && this['recreateRe' + 'source']();
                var _0x6ce0b4 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                _0x21b46c['bindTextur' + 'e'](_0x6ce0b4, 0xde1, this['_source']), !_0x30d89b['isConchApp'] && _0x6ce0b4['pixelStore' + 'i'](0x9241, !![]);
                var _0x409fab = _0x3a1173['data'];
                if (_0x3a1173['data'] instanceof Uint8ClampedArray)
                    _0x409fab = new Uint8Array(_0x409fab['buffer']);
                _0x6ce0b4['texSubImag' + 'e2D'](0xde1, 0x0, _0x20668d, _0xefdade, _0x3a1173['width'], _0x3a1173['height'], 0x1908, 0x1401, _0x409fab), !_0x30d89b['isConchApp'] && _0x6ce0b4['pixelStore' + 'i'](0x9241, ![]);
            }, _0x54e979['addCharCan' + 'vas'] = function (_0x3951e0, _0x232df9, _0x99a9e) {
                !this['_source'] && this['recreateRe' + 'source']();
                var _0x2b3150 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                _0x21b46c['bindTextur' + 'e'](_0x2b3150, 0xde1, this['_source']), !_0x30d89b['isConchApp'] && _0x2b3150['pixelStore' + 'i'](0x9241, !![]), _0x2b3150['texSubImag' + 'e2D'](0xde1, 0x0, _0x232df9, _0x99a9e, 0x1908, 0x1401, _0x3951e0), !_0x30d89b['isConchApp'] && _0x2b3150['pixelStore' + 'i'](0x9241, ![]);
            }, _0x54e979['destroy'] = function () {
                console['log']('destroy\x20Ch' + 'arPageText' + 'ure'), this['__destroye' + 'd'] = !![];
                var _0x57c783 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                this['_source'] && _0x57c783['deleteText' + 'ure'](this['_source']), this['_source'] = null, this['ArrCharRen' + 'derInfo']['forEach'](function (_0x4493ac) {
                    _0x4493ac['deleted'] = !![];
                });
            }, _0x54e979['touchRect'] = function (_0x27d20f, _0x39db9e) {
                this['_scoreTick'] != _0x39db9e && (this['_score'] = 0x0, this['_scoreTick'] = _0x39db9e), this['_score']++;
            }, _0x54e979['printDebug' + 'Info'] = function (_0x503ccb) {
                _0x503ccb === void 0x0 && (_0x503ccb = ![]), console['log']('。得分:', this['_score'], ',\x20算分时间:', this['_scoreTick'], ',格子数:', this['_gridNum']);
                var _0x187922 = Math['sqrt'](this['_gridNum']), _0x31223d = 0x0;
                for (var _0x207735 = 0x0, _0x46ab00 = this['charMaps']['length']; _0x207735 < _0x46ab00; _0x207735++) {
                    var _0x4c88fd = this['charMaps'][_0x207735];
                    if (!_0x4c88fd)
                        continue;
                    var _0x58e59e = this, _0x56cf23 = '';
                    _0x503ccb && console['log']('\x20\x20\x20与基本大小差' + _0x207735 + '的map信息:');
                    _0x4c88fd['forEach'](function (_0x470e16, _0x32d2e3, _0x2ef40c) {
                        if (_0x470e16) {
                            if (_0x503ccb)
                                console['log']('\x20\x20\x20\x20\x20\x20key:', _0x32d2e3, '\x20位置:', _0x470e16['pos'] / _0x187922 | 0x0, _0x470e16['pos'] % _0x187922 | 0x0, '\x20宽高:', _0x470e16['bmpWidth'], _0x470e16['bmpHeight'], '\x20是否删除:', _0x470e16['deleted'], '\x20touch时间:', _0x470e16['touchTick']);
                            else
                                _0x56cf23 += _0x32d2e3;
                        }
                    });
                    if (!_0x503ccb)
                        console['log']('data[', _0x207735, ']:', _0x56cf23);
                }
            }, _0x59a297;
        }(_0x1c4cc5), _0x3b69e5 = function (_0x3afb7a) {
            function _0xbeb4d9() {
                this['_customRen' + 'derCmd'] = null, this['_customCmd' + 's'] = null, this['_x'] = 0x0, this['_y'] = 0x0, this['_renderTyp' + 'e'] = 0x0, this['_bRepaintC' + 'anvas'] = ![], this['_lastConte' + 'xt'] = null, _0xbeb4d9['__super']['call'](this);
            }
            _0x199b5b(_0xbeb4d9, 'laya.layag' + 'l.ConchSpr' + 'iteAdpt', _0x3afb7a);
            var _0x30103f = _0xbeb4d9['prototype'];
            return _0x30103f['createData'] = function () {
                var _0x3f90d8 = 0x4d * 0x4;
                this['_conchData'] = new ParamData(_0x3f90d8, ![]), this['_datai32'] = this['_conchData']['_int32Data'], this['_dataf32'] = this['_conchData']['_float32Da' + 'ta'], this['_dataf32'][0x4] = 0x1, this['_datai32'][0x3] = -0x1, this['_datai32'][0x1] = 0x0, this['_datai32'][0x2] = 0x0, this['_datai32'][0x16] = 0xffffffff, this['_datai32'][0x5] = 0x1, this['_dataf32'][0x8] = 0x0, this['_dataf32'][0x9] = 0x0, this['_dataf32'][0xa] = 0x1, this['_dataf32'][0xb] = 0x1, this['_dataf32'][0x10] = 0x1, this['_dataf32'][0x10 + 0x1] = 0x0, this['_dataf32'][0x10 + 0x2] = 0x0, this['_dataf32'][0x10 + 0x3] = 0x1, this['_dataf32'][0x10 + 0x4] = 0x0, this['_dataf32'][0x10 + 0x5] = 0x0, this['_datai32'][0x18] = -0x1, this['_datai32'][0x19] = -0x1, this['_datai32'][0x1b] = -0x1, this['_datai32'][0x1c] = 0x0, this['_datai32'][0x1c + 0x1] = 0x0, this['_datai32'][0x1c + 0x2] = 0xf4240, this['_datai32'][0x1c + 0x3] = 0xf4240, this['_datai32'][0x3f] = 0x0, this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x303, this['_datai32'][0x44] = -0x1, this['_renderTyp' + 'e'] |= 0x2, this['_setRender' + 'Type'](this['_renderTyp' + 'e']);
            }, _0x30103f['_createTra' + 'nsform'] = function () {
                return _0x384aa8['create'](new Float32Array(0x6));
            }, _0x30103f['_setTransf' + 'orm'] = function (_0x316a8e) {
                var _0x278d91 = this['_conchData']['_float32Da' + 'ta'];
                _0x278d91[0xf] = 0x0, _0x278d91[0x10] = _0x316a8e['a'], _0x278d91[0x10 + 0x1] = _0x316a8e['b'], _0x278d91[0x10 + 0x2] = _0x316a8e['c'], _0x278d91[0x10 + 0x3] = _0x316a8e['d'], _0x278d91[0x10 + 0x4] = _0x316a8e['tx'], _0x278d91[0x10 + 0x5] = _0x316a8e['ty'];
            }, _0x30103f['_setTranfo' + 'rmChange'] = function () {
                this['_tfChanged'] = !![], this['parentRepa' + 'int'](0x2);
            }, _0x30103f['_setGraphi' + 'cs'] = function (_0x15482d) {
                this['_datai32'][0x17] = _0x15482d['_commandEn' + 'coder']['getPtrID']();
            }, _0x30103f['_setGraphi' + 'csCallBack'] = function () {
                !this['_callbackF' + 'uncObj'] && (this['_callbackF' + 'uncObj'] = new CallbackFuncObj()), this['_datai32'][0x36] = this['_callbackF' + 'uncObj']['id'], this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x5, this['updatePart' + 'icleFromNa' + 'tive']['bind'](this)), this['_datai32'][0x44] = 0x5;
            }, _0x30103f['_setCacheA' + 's'] = function (_0x5705d0) {
                _0x3e7575['createComm' + 'andEncoder'](), !this['_drawCanva' + 'sParamData'] && (this['_drawCanva' + 'sParamData'] = new ParamData(0x21 * 0x4, !![])), !this['_callbackF' + 'uncObj'] && (this['_callbackF' + 'uncObj'] = new CallbackFuncObj()), !this['_canvasBeg' + 'inCmd'] && (this['_canvasBeg' + 'inCmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![])), !this['_canvasEnd' + 'Cmd'] && (this['_canvasEnd' + 'Cmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![])), this['_datai32'][0x36] = this['_callbackF' + 'uncObj']['id'], this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x1, this['canvasBegi' + 'nRenderFro' + 'mNative']['bind'](this)), this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x2, this['canvasEndR' + 'enderFromN' + 'ative']['bind'](this)), this['_datai32'][0x38] = 0x1, this['_datai32'][0x39] = 0x2, this['_datai32'][0x3a] = this['_canvasBeg' + 'inCmd']['getPtrID'](), this['_datai32'][0x3b] = this['_canvasEnd' + 'Cmd']['getPtrID'](), this['_datai32'][0x3c] = _0x3e7575['_DRAW_CANV' + 'AS_CMD_ENC' + 'ODER_']['getPtrID'](), this['_datai32'][0x3d] = this['_drawCanva' + 'sParamData']['getPtrID']();
            }, _0x30103f['_setX'] = function (_0x353dc5) {
                this['_x'] = this['_dataf32'][0x6] = _0x353dc5, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setY'] = function (_0x495fdb) {
                this['_y'] = this['_dataf32'][0x7] = _0x495fdb, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setWidth'] = function (_0x2da400, _0xffef57) {
                _0x2da400 && _0x2da400['getIsReady']() && this['_setTextur' + 'eEx'](_0x2da400, !![]);
            }, _0x30103f['_setHeight'] = function (_0x12bb9c, _0x3d7b9a) {
                _0x12bb9c && _0x12bb9c['getIsReady']() && this['_setTextur' + 'eEx'](_0x12bb9c, !![]);
            }, _0x30103f['_setPivotX'] = function (_0x4ae1c7) {
                this['_renderTyp' + 'e'] |= 0x2, this['_dataf32'][0x8] = _0x4ae1c7, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_getPivotX'] = function () {
                return this['_dataf32'][0x8];
            }, _0x30103f['_setPivotY'] = function (_0x235df9) {
                this['_renderTyp' + 'e'] |= 0x2, this['_dataf32'][0x9] = _0x235df9, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_getPivotY'] = function () {
                return this['_dataf32'][0x9];
            }, _0x30103f['_setAlpha'] = function (_0x5229c1) {
                var _0x2e238 = this['getStyle']();
                _0x2e238['alpha'] = _0x5229c1, _0x5229c1 = _0x5229c1 > 0x1 ? 0x1 : _0x5229c1, _0x5229c1 = _0x5229c1 < 0x0 ? 0x0 : _0x5229c1;
                var _0x5f2ea5 = this['_datai32'][0x16], _0x2b31e6 = _0x5f2ea5 >> 0x18;
                _0x2b31e6 = _0x5229c1 * 0xff, _0x5f2ea5 = _0x5f2ea5 & 0xffffff | _0x2b31e6 << 0x18, this['_datai32'][0x16] = _0x5f2ea5;
                if (_0x5229c1 !== 0x1)
                    this['_renderTyp' + 'e'] |= 0x1;
                else
                    this['_renderTyp' + 'e'] &= ~0x1;
                this['_setRender' + 'Type'](this['_renderTyp' + 'e']), this['parentRepa' + 'int']();
            }, _0x30103f['_setRender' + 'Type'] = function (_0x245320) {
                this['_datai32'][0x0] = _0x245320, !_0x11030f['GLS'][_0x245320] && (_0x11030f['createByRe' + 'nderType'](_0x245320), _0x11030f['createByRe' + 'nderTypeEn' + 'd'](_0x245320));
            }, _0x30103f['parentRepa' + 'int'] = function () {
            }, _0x30103f['_getAlpha'] = function () {
                return (this['_datai32'][0x16] >>> 0x18) / 0xff;
            }, _0x30103f['_setScaleX'] = function (_0xec87d0) {
                this['_style']['scaleX'] = this['_dataf32'][0xa] = _0xec87d0, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setScaleY'] = function (_0x4e7794) {
                this['_style']['scaleY'] = this['_dataf32'][0xb] = _0x4e7794, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setSkewX'] = function (_0x54bd2c) {
                this['_style']['skewX'] = this['_dataf32'][0xc] = _0x54bd2c, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setSkewY'] = function (_0x364cfb) {
                this['_style']['skewY'] = this['_dataf32'][0xd] = _0x364cfb, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setRotati' + 'on'] = function (_0x1a7ddf) {
                this['_style']['rotation'] = this['_dataf32'][0xe] = _0x1a7ddf, this['_dataf32'][0xf] = 0x1;
            }, _0x30103f['_setBgStyl' + 'eColor'] = function (_0x3879fb, _0x2d5520, _0x2c64aa, _0x23ee8d, _0x5b628c) {
                var _0x5b0fa7 = null, _0x4ae0bd = null;
                !this['_drawSimpl' + 'eRectParam' + 'Data'] && (this['_drawSimpl' + 'eRectParam' + 'Data'] = new ParamData(0x1a * 0x4, !![]));
                _0x5b0fa7 = this['_drawSimpl' + 'eRectParam' + 'Data']['_float32Da' + 'ta'], _0x4ae0bd = this['_drawSimpl' + 'eRectParam' + 'Data']['_int32Data'];
                var _0x16e21f = _0x4b1f30['create'](_0x5b628c), _0x22f855 = _0x16e21f['numColor'];
                _0x4ae0bd[0x0] = 0x1, _0x4ae0bd[0x1] = 0x18 * 0x4;
                var _0x1e78d7 = 0x2;
                _0x5b0fa7[_0x1e78d7++] = _0x3879fb, _0x5b0fa7[_0x1e78d7++] = _0x2d5520, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x4ae0bd[_0x1e78d7++] = _0x22f855, _0x5b0fa7[_0x1e78d7++] = 0xffffffff, _0x5b0fa7[_0x1e78d7++] = _0x3879fb + _0x2c64aa, _0x5b0fa7[_0x1e78d7++] = _0x2d5520, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x4ae0bd[_0x1e78d7++] = _0x22f855, _0x5b0fa7[_0x1e78d7++] = 0xffffffff, _0x5b0fa7[_0x1e78d7++] = _0x3879fb + _0x2c64aa, _0x5b0fa7[_0x1e78d7++] = _0x2d5520 + _0x23ee8d, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x4ae0bd[_0x1e78d7++] = _0x22f855, _0x5b0fa7[_0x1e78d7++] = 0xffffffff, _0x5b0fa7[_0x1e78d7++] = _0x3879fb, _0x5b0fa7[_0x1e78d7++] = _0x2d5520 + _0x23ee8d, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x5b0fa7[_0x1e78d7++] = 0x0, _0x4ae0bd[_0x1e78d7++] = _0x22f855, _0x5b0fa7[_0x1e78d7++] = 0xffffffff, this['_datai32'][0x4a] = this['_drawSimpl' + 'eRectParam' + 'Data']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_drawSimpl' + 'eRectParam' + 'Data']), this['_datai32'][0x49] = _0xe4a59a['_SIMPLE_RE' + 'CT_CMDENCO' + 'DER_']['getPtrID']();
            }, _0x30103f['_setBorder' + 'StyleColor'] = function (_0x2fa58a, _0x455717, _0x31415d, _0x3bbba5, _0x446b51, _0x3c7d1a) {
                var _0x22739c = null, _0x4c6925 = null;
                !this['_drawRectB' + 'orderParam' + 'Data'] && (this['_drawRectB' + 'orderParam' + 'Data'] = new ParamData(0x3b * 0x4, !![]));
                _0x22739c = this['_drawRectB' + 'orderParam' + 'Data']['_float32Da' + 'ta'], _0x4c6925 = this['_drawRectB' + 'orderParam' + 'Data']['_int32Data'];
                var _0x46ccd8 = [], _0xd97760 = [], _0x2c9878 = [];
                _0x46ccd8['push'](_0x2fa58a), _0x46ccd8['push'](_0x455717), _0x46ccd8['push'](_0x2fa58a + _0x31415d), _0x46ccd8['push'](_0x455717), _0x46ccd8['push'](_0x2fa58a + _0x31415d), _0x46ccd8['push'](_0x455717 + _0x3bbba5), _0x46ccd8['push'](_0x2fa58a), _0x46ccd8['push'](_0x455717 + _0x3bbba5), _0x46ccd8['push'](_0x2fa58a), _0x46ccd8['push'](_0x455717 - _0x3c7d1a / 0x2), _0x2fe41e['createLine' + '2'](_0x46ccd8, _0xd97760, _0x3c7d1a, 0x0, _0x2c9878, ![]);
                var _0xc0d0a8 = _0x46ccd8['length'];
                _0x22739c = this['_drawRectB' + 'orderParam' + 'Data']['_float32Da' + 'ta'], _0x4c6925 = this['_drawRectB' + 'orderParam' + 'Data']['_int32Data'];
                var _0x429c86 = this['_drawRectB' + 'orderParam' + 'Data']['_int16Data'], _0x589d0a = _0x4b1f30['create'](_0x446b51), _0x4d5086 = _0x589d0a['numColor'];
                _0x4c6925[0x0] = 0x0, _0x4c6925[0x1] = 0x1e * 0x4, _0x4c6925[0x2] = 0x0, _0x4c6925[0x3] = _0xd97760['length'] * 0x2, _0x4c6925[0x4] = 0x0;
                var _0x51df23 = 0x5;
                for (var _0x2422ad = 0x0; _0x2422ad < _0xc0d0a8; _0x2422ad++) {
                    _0x22739c[_0x51df23++] = _0x2c9878[_0x2422ad * 0x2], _0x22739c[_0x51df23++] = _0x2c9878[_0x2422ad * 0x2 + 0x1], _0x4c6925[_0x51df23++] = _0x4d5086;
                }
                _0x51df23 = 0x23 * 0x2;
                for (var _0x4dde3c = 0x0; _0x4dde3c < _0xd97760['length']; _0x4dde3c++) {
                    _0x429c86[_0x51df23++] = _0xd97760[_0x4dde3c];
                }
                this['_datai32'][0x4c] = this['_drawRectB' + 'orderParam' + 'Data']['getPtrID'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_drawRectB' + 'orderParam' + 'Data']), this['_datai32'][0x4b] = _0xe4a59a['_RECT_BORD' + 'ER_CMD_ENC' + 'ODER_']['getPtrID']();
            }, _0x30103f['_setTextur' + 'eEx'] = function (_0x5f49d3, _0x47f9b0) {
                var _0x47540e = null, _0x30ab56 = null;
                if (!this['_drawSimpl' + 'eImageData']) {
                    this['_drawSimpl' + 'eImageData'] = new ParamData(0x1d * 0x4, !![]), _0x47540e = this['_drawSimpl' + 'eImageData']['_float32Da' + 'ta'], _0x30ab56 = this['_drawSimpl' + 'eImageData']['_int32Data'], _0x30ab56[0x0] = 0x3, _0x30ab56[0x1] = 0x84c0, _0x30ab56[0x2] = _0x47f9b0 ? _0x5f49d3['bitmap']['_glTexture']['id'] : 0x0, _0x30ab56[0x3] = 0x1, _0x30ab56[0x4] = 0x18 * 0x4;
                    var _0x36e88a = _0x5f49d3['uv'];
                    _0x47540e[0x5] = 0x0, _0x47540e[0x6] = 0x0, _0x47540e[0x7] = _0x36e88a[0x0], _0x47540e[0x8] = _0x36e88a[0x1], _0x30ab56[0x9] = 0xffffffff, _0x30ab56[0xa] = 0xffffffff, _0x47540e[0xb] = 0x0, _0x47540e[0xc] = 0x0, _0x47540e[0xd] = _0x36e88a[0x2], _0x47540e[0xe] = _0x36e88a[0x3], _0x30ab56[0xf] = 0xffffffff, _0x30ab56[0x10] = 0xffffffff, _0x47540e[0x11] = 0x0, _0x47540e[0x12] = 0x0, _0x47540e[0x13] = _0x36e88a[0x4], _0x47540e[0x14] = _0x36e88a[0x5], _0x30ab56[0x15] = 0xffffffff, _0x30ab56[0x16] = 0xffffffff, _0x47540e[0x17] = 0x0, _0x47540e[0x18] = 0x0, _0x47540e[0x19] = _0x36e88a[0x6], _0x47540e[0x1a] = _0x36e88a[0x7], _0x30ab56[0x1b] = 0xffffffff, _0x30ab56[0x1c] = 0xffffffff;
                }
                _0x47540e = this['_drawSimpl' + 'eImageData']['_float32Da' + 'ta'], _0x30ab56 = this['_drawSimpl' + 'eImageData']['_int32Data'], _0x30ab56[0x2] = _0x47f9b0 ? _0x5f49d3['bitmap']['_glTexture']['id'] : 0x0;
                var _0x24528e = _0x47f9b0 ? _0x5f49d3['width'] : 0x0, _0x3ac16e = _0x47f9b0 ? _0x5f49d3['height'] : 0x0, _0xc89150 = this['_width'], _0x3eaf03 = this['_height'];
                _0x24528e = _0xc89150 > 0x0 ? _0xc89150 : _0x24528e, _0x3ac16e = _0x3eaf03 > 0x0 ? _0x3eaf03 : _0x3ac16e, _0x47540e[0xb] = _0x47540e[0x11] = _0x24528e, _0x47540e[0x12] = _0x47540e[0x18] = _0x3ac16e;
                var _0x41862d = this['_drawSimpl' + 'eImageData']['getPtrID']();
                this['_datai32'][0x19] = _0x41862d, _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_drawSimpl' + 'eImageData']), this['_datai32'][0x18] = _0xe4a59a['_SIMPLE_TE' + 'XTURE_CMDE' + 'NCODER_']['getPtrID']();
            }, _0x30103f['_setTextur' + 'e'] = function (_0x5a7aad) {
                if (!_0x5a7aad)
                    return;
                _0x5a7aad['getIsReady']() ? this['_setTextur' + 'eEx'](_0x5a7aad, !![]) : (this['_setTextur' + 'eEx'](_0x5a7aad, ![]), _0x5a7aad['on']('ready', this, this['_setTextur' + 'eEx'], [
                    _0x5a7aad,
                    !![]
                ]));
            }, _0x30103f['_setCustom' + 'Render'] = function () {
                !this['_callbackF' + 'uncObj'] && (this['_callbackF' + 'uncObj'] = new CallbackFuncObj()), this['_customCmd' + 's'] = [], this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x0, this['customRend' + 'erFromNati' + 've']['bind'](this)), this['_customRen' + 'derCmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, !![]), this['_datai32'][0x36] = this['_callbackF' + 'uncObj']['id'], this['_datai32'][0x37] = 0x0, this['_datai32'][0x1b] = this['_customRen' + 'derCmd']['getPtrID']();
            }, _0x30103f['_setScroll' + 'Rect'] = function (_0xa8b12f) {
                this['_dataf32'][0x1c] = 0x0, this['_dataf32'][0x1c + 0x1] = 0x0, this['_dataf32'][0x1c + 0x2] = _0xa8b12f['width'], this['_dataf32'][0x1c + 0x3] = _0xa8b12f['height'], this['_dataf32'][0x20] = -_0xa8b12f['x'], this['_dataf32'][0x20 + 0x1] = -_0xa8b12f['y'], _0xa8b12f['onProperty' + 'Changed'] = this['_setScroll' + 'Rect']['bind'](this);
            }, _0x30103f['_setColorF' + 'ilter'] = function (_0x5d2573) {
                !this['_callbackF' + 'uncObj'] && (this['_callbackF' + 'uncObj'] = new CallbackFuncObj()), !this['_filterBeg' + 'inCmd'] && (this['_filterBeg' + 'inCmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![])), !this['_filterEnd' + 'Cmd'] && (this['_filterEnd' + 'Cmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, !![])), this['_datai32'][0x36] = this['_callbackF' + 'uncObj']['id'], this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x3, this['filterBegi' + 'nRenderFro' + 'mNative']['bind'](this)), this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x4, this['filterEndR' + 'enderFromN' + 'ative']['bind'](this)), this['_datai32'][0x41] = 0x3, this['_datai32'][0x40] = this['_filterBeg' + 'inCmd']['getPtrID'](), this['_datai32'][0x43] = 0x4, this['_datai32'][0x42] = this['_filterEnd' + 'Cmd']['getPtrID']();
            }, _0x30103f['_setMask'] = function (_0x78e9ce) {
                _0x78e9ce['cacheAs'] = 'bitmap', !this['_callbackF' + 'uncObj'] && (this['_callbackF' + 'uncObj'] = new CallbackFuncObj()), !this['_maskCmd'] && (this['_maskCmd'] = _0x33edbf['instance']['createComm' + 'andEncoder'](0x80, 0x40, ![])), this['_datai32'][0x36] = this['_callbackF' + 'uncObj']['id'], this['_callbackF' + 'uncObj']['addCallbac' + 'kFunc'](0x6, this['maskRender' + 'FromNative']['bind'](this)), this['_datai32'][0x45] = 0x6, this['_datai32'][0x46] = this['_maskCmd']['getPtrID']();
            }, _0x30103f['_adjustTra' + 'nsform'] = function () {
                var _0x4f0a1b = this['_transform'] || (this['_transform'] = this['_createTra' + 'nsform']());
                _0x4f0a1b['_bTransfor' + 'm'] = !![], _0x33edbf['instance']['calcMatrix' + 'FromScaleS' + 'kewRotatio' + 'n'](this['_conchData']['_data']['_ptrID'], 0xf * 0x4, 0x10 * 0x4, 0x6 * 0x4, 0x7 * 0x4, 0x8 * 0x4, 0x9 * 0x4, 0xa * 0x4, 0xb * 0x4, 0xc * 0x4, 0xd * 0x4, 0xe * 0x4);
                var _0x484a14 = this['_conchData']['_float32Da' + 'ta'];
                return _0x4f0a1b['a'] = _0x484a14[0x10], _0x4f0a1b['b'] = _0x484a14[0x10 + 0x1], _0x4f0a1b['c'] = _0x484a14[0x10 + 0x2], _0x4f0a1b['d'] = _0x484a14[0x10 + 0x3], _0x4f0a1b['tx'] = 0x0, _0x4f0a1b['ty'] = 0x0, _0x4f0a1b;
            }, _0x30103f['_setBlendM' + 'ode'] = function (_0x430e3b) {
                switch (_0x430e3b) {
                case 'normal':
                    this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x303;
                    break;
                case 'add':
                case 'lighter':
                    this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x304;
                    break;
                case 'multiply':
                    this['_datai32'][0x47] = 0x306, this['_datai32'][0x48] = 0x303;
                    break;
                case 'screen':
                    this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x1;
                    break;
                case 'overlay':
                    this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x301;
                    break;
                case 'light':
                    this['_datai32'][0x47] = 0x1, this['_datai32'][0x48] = 0x1;
                    break;
                case 'mask':
                    this['_datai32'][0x47] = 0x0, this['_datai32'][0x48] = 0x302;
                    break;
                case 'destinatio' + 'n-out':
                    this['_datai32'][0x47] = 0x0, this['_datai32'][0x48] = 0x0;
                    break;
                default:
                    alert('_setBlendM' + 'ode\x20Unknow' + 'n\x20type');
                    break;
                }
            }, _0x30103f['customRend' + 'erFromNati' + 've'] = function () {
                var _0xd16431 = _0x33edbf['instance']['getCurrent' + 'Context']();
                this['_customRen' + 'derCmd']['beginEncod' + 'ing'](), this['_customRen' + 'derCmd']['clearEncod' + 'ing'](), _0xd16431['_commandEn' + 'coder'] = this['_customRen' + 'derCmd'], _0xd16431['_customCmd' + 's'] = this['_customCmd' + 's'];
                for (var _0x2a6b2d = 0x0, _0x4ed05b = this['_customCmd' + 's']['length']; _0x2a6b2d < _0x4ed05b; _0x2a6b2d++) {
                    this['_customCmd' + 's'][_0x2a6b2d]['recover']();
                }
                this['_customCmd' + 's']['length'] = 0x0, this['customRend' + 'er'](_0xd16431, 0x0, 0x0), this['_customRen' + 'derCmd']['endEncodin' + 'g']();
            }, _0x30103f['canvasBegi' + 'nRenderFro' + 'mNative'] = function () {
                var _0x280358 = _0x33edbf['instance'], _0x2314b0 = null, _0x2fc0d8 = null, _0x55d526 = this['_cacheStyl' + 'e'];
                if (_0x55d526['canvas'] && this['_datai32'][0x4] == 0x0)
                    _0x2314b0 = _0x55d526['canvas'], this['_bRepaintC' + 'anvas'] != ![] && (this['setChildre' + 'nNativeVis' + 'ible'](![]), this['_bRepaintC' + 'anvas'] = ![]), this['_datai32'][0x3f] = 0x1;
                else {
                    this['_canvasBeg' + 'inCmd']['beginEncod' + 'ing'](), this['_canvasBeg' + 'inCmd']['clearEncod' + 'ing'](), _0x2314b0 = laya['layagl']['ConchSprit' + 'eAdpt']['buildCanva' + 's'](this, 0x0, 0x0);
                    if (_0x2314b0) {
                        this['_datai32'][0x3f] = 0x0, this['_lastConte' + 'xt'] = _0x280358['getCurrent' + 'Context'](), _0x2fc0d8 = _0x2314b0['context'];
                        var _0x4e386e = _0x2fc0d8['_targets'];
                        _0x3e7575['setParamDa' + 'ta'](this['_drawCanva' + 'sParamData'], _0x4e386e, -0x10, -0x10, _0x4e386e['width'], _0x4e386e['height']), _0x280358['setCurrent' + 'Context'](_0x2fc0d8), _0x2fc0d8['beginRT'](), _0x280358['save'](), _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x0] = 0x1, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x1] = 0x0, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x2] = 0x0, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x3] = 0x1, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x4] = 0x10, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x5] = 0x10, _0x280358['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x8, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x']), this['_bRepaintC' + 'anvas'] != !![] && (this['setChildre' + 'nNativeVis' + 'ible'](!![]), this['_bRepaintC' + 'anvas'] = !![]);
                    }
                    this['_canvasBeg' + 'inCmd']['endEncodin' + 'g']();
                }
            }, _0x30103f['setChildre' + 'nNativeVis' + 'ible'] = function (_0xfc44f0) {
                var _0x3c1b5a = this['_children'], _0x39c280, _0x612a3f = _0x3c1b5a['length'];
                for (var _0x500f47 = 0x0; _0x500f47 < _0x612a3f; ++_0x500f47) {
                    _0x39c280 = _0x3c1b5a[_0x500f47], _0x39c280['_datai32'][0x5] = _0xfc44f0 ? 0x1 : 0x0, _0x39c280['setChildre' + 'nNativeVis' + 'ible'](_0xfc44f0);
                }
            }, _0x30103f['canvasEndR' + 'enderFromN' + 'ative'] = function () {
                var _0x45a3ac = _0x33edbf['instance'];
                this['_canvasEnd' + 'Cmd']['beginEncod' + 'ing'](), this['_canvasEnd' + 'Cmd']['clearEncod' + 'ing']();
                if (this['_bRepaintC' + 'anvas']) {
                    var _0x14ce7b = _0x33edbf['instance']['getCurrent' + 'Context']();
                    _0x45a3ac['restore'](), _0x45a3ac['setCurrent' + 'Context'](this['_lastConte' + 'xt']), _0x45a3ac['commitCont' + 'extToGPU'](_0x14ce7b), _0x14ce7b['endRT'](), _0x45a3ac['blendFunc'](0x1, 0x303);
                }
                this['_canvasEnd' + 'Cmd']['endEncodin' + 'g']();
            }, _0x30103f['filterBegi' + 'nRenderFro' + 'mNative'] = function () {
                var _0x7fd4b8 = this, _0x2d491b = _0x33edbf['instance'];
                this['_filterBeg' + 'inCmd']['beginEncod' + 'ing'](), this['_filterBeg' + 'inCmd']['clearEncod' + 'ing']();
                var _0x475ce6 = this['_getCacheS' + 'tyle']()['filters'], _0x5f005d = _0x475ce6['length'];
                if (_0x475ce6[0x0] instanceof laya['filters']['ColorFilte' + 'r']) {
                    _0x2d491b['addShaderM' + 'acro'](_0xe4a59a['SHADER_MAC' + 'RO_COLOR_F' + 'ILTER']);
                    var _0x990269 = _0x475ce6[0x0];
                    _0x2d491b['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_COLORFIL' + 'TER_COLOR'], 0x8, _0x990269['_mat']), _0x2d491b['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_COLORFIL' + 'TER_ALPHA'], 0x8, _0x990269['_alpha']);
                } else {
                    var _0x35e507 = _0x4eeaa7['TEMP'], _0x115229 = _0x4fb671['create'](), _0x292887 = 0x0, _0x4ebc82 = 0x0, _0x152f13 = _0x7fd4b8['_isHaveGlo' + 'wFilter']();
                    _0x152f13 && (_0x292887 = 0x32, _0x4ebc82 = 0x19);
                    ;
                    var _0x4ad1a2 = new _0x4759e4();
                    _0x4ad1a2['copyFrom'](_0x7fd4b8['getSelfBou' + 'nds']()), _0x4ad1a2['x'] += _0x7fd4b8['x'], _0x4ad1a2['y'] += _0x7fd4b8['y'], _0x4ad1a2['x'] -= _0x7fd4b8['pivotX'] + 0x4, _0x4ad1a2['y'] -= _0x7fd4b8['pivotY'] + 0x4;
                    var _0x2d2f7e = _0x4ad1a2['x'], _0x5ef635 = _0x4ad1a2['y'];
                    _0x4ad1a2['width'] += _0x292887 + 0x8, _0x4ad1a2['height'] += _0x292887 + 0x8, _0x35e507['x'] = _0x4ad1a2['x'] * _0x115229['a'] + _0x4ad1a2['y'] * _0x115229['c'], _0x35e507['y'] = _0x4ad1a2['y'] * _0x115229['d'] + _0x4ad1a2['x'] * _0x115229['b'], _0x4ad1a2['x'] = _0x35e507['x'], _0x4ad1a2['y'] = _0x35e507['y'], _0x35e507['x'] = _0x4ad1a2['width'] * _0x115229['a'] + _0x4ad1a2['height'] * _0x115229['c'], _0x35e507['y'] = _0x4ad1a2['height'] * _0x115229['d'] + _0x4ad1a2['width'] * _0x115229['b'], _0x4ad1a2['width'] = _0x35e507['x'], _0x4ad1a2['height'] = _0x35e507['y'];
                    if (_0x4ad1a2['width'] <= 0x0 || _0x4ad1a2['height'] <= 0x0)
                        return;
                    ;
                    var _0x5b608a = _0x7fd4b8['_getCacheS' + 'tyle']()['filterCach' + 'e'];
                    _0x5b608a && _0xb36f96['releaseRT'](_0x5b608a), _0x5b608a = _0xb36f96['getRT'](_0x4ad1a2['width'], _0x4ad1a2['height']), _0x7fd4b8['_getCacheS' + 'tyle']()['filterCach' + 'e'] = _0x5b608a, _0xbeb4d9['useRenderT' + 'arget'](_0x5b608a), _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x0] = 0x1, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x1] = 0x0, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x2] = 0x0, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x3] = 0x1, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x4] = _0x7fd4b8['x'] - _0x2d2f7e + _0x4ebc82, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x'][0x5] = _0x7fd4b8['y'] - _0x5ef635 + _0x4ebc82, _0x2d491b['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_MATRIX32'], 0x8, _0xbeb4d9['_tempFloat' + 'ArrayMatri' + 'x']);
                }
                this['_filterBeg' + 'inCmd']['endEncodin' + 'g']();
            }, _0x30103f['filterEndR' + 'enderFromN' + 'ative'] = function () {
                this['_filterEnd' + 'Cmd']['beginEncod' + 'ing'](), this['_filterEnd' + 'Cmd']['clearEncod' + 'ing']();
                var _0x5bdf85 = this, _0x5c3187 = _0x33edbf['instance'], _0x4f4994 = this['_getCacheS' + 'tyle']()['filters'];
                if (_0x4f4994[0x0] instanceof laya['filters']['ColorFilte' + 'r']) {
                } else {
                    _0x5c3187['restore']();
                    var _0x1f4e50 = _0x33edbf['instance']['getCurrent' + 'Context'](), _0x9a1a65 = _0x4a9aac['currentAct' + 'ive'];
                    _0x4a9aac['popRT']();
                    if (_0x4f4994[0x0] instanceof _0x4a6519['BlurFilter']) {
                        _0x5c3187['addShaderM' + 'acro'](_0xe4a59a['SHADER_MAC' + 'RO_BLUR_FI' + 'LTER']);
                        var _0x4f4ed0 = _0x4f4994[0x0];
                        _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2'][0x0] = _0x9a1a65['width'], _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2'][0x1] = _0x9a1a65['height'], _0x5c3187['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_BLURFILT' + 'ER_BLURINF' + 'O'], 0x8, _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2']), _0x5c3187['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_BLURFILT' + 'ER_STRENGT' + 'H'], 0x8, _0x4f4ed0['getStrenth' + '_sig2_2sig' + '2_native']()), _0x1f4e50['drawTarget'](this['_filterEnd' + 'Cmd'], _0x9a1a65, -0x4, -0x4, 0x0, 0x0);
                    } else {
                        if (_0x4f4994[0x0] instanceof _0x4a6519['GlowFilter']) {
                            var _0x320ce9 = _0x9a1a65['width'], _0x139eff = _0x9a1a65['height'], _0x21b8b8 = _0xb36f96['getRT'](_0x320ce9, _0x139eff);
                            _0xbeb4d9['useRenderT' + 'arget'](_0x21b8b8), _0x5c3187['addShaderM' + 'acro'](_0xe4a59a['SHADER_MAC' + 'RO_GLOW_FI' + 'LTER']);
                            var _0x59b4a5 = _0x4f4994[0x0], _0x1a743a = _0x59b4a5['getBlurInf' + 'o2Native']();
                            _0x1a743a[0x0] = _0x320ce9, _0x1a743a[0x1] = _0x139eff, _0x5c3187['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_GLOWFILT' + 'ER_COLOR'], 0x8, _0x59b4a5['getColorNa' + 'tive']()), _0x5c3187['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O1'], 0x8, _0x59b4a5['getBlurInf' + 'o1Native']()), _0x5c3187['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_GLOWFILT' + 'ER_BLURINF' + 'O2'], 0x8, _0x1a743a), _0x1f4e50['drawTarget'](this['_filterEnd' + 'Cmd'], _0x9a1a65, -0x10, -0x10, 0x0, 0x0), _0x5c3187['restore'](), _0x4a9aac['popRT'](), _0x1f4e50['drawTarget'](this['_filterEnd' + 'Cmd'], _0x21b8b8, -0x1d, -0x1d, 0x0, 0x0), _0x1f4e50['drawTarget'](this['_filterEnd' + 'Cmd'], _0x9a1a65, -0x1d, -0x1d, 0x0, 0x0);
                        }
                    }
                }
                this['_filterEnd' + 'Cmd']['endEncodin' + 'g'](), _0x33edbf['syncBuffer' + 'ToRenderTh' + 'read'](this['_filterEnd' + 'Cmd']);
            }, _0x30103f['maskRender' + 'FromNative'] = function () {
                this['_maskCmd']['beginEncod' + 'ing'](), this['_maskCmd']['clearEncod' + 'ing']();
                var _0x3a990a = _0x33edbf['instance'], _0x583aa3 = _0x3a990a['getCurrent' + 'Context'](), _0x15c587 = this['mask'];
                _0x15c587 && (_0x15c587['_children']['length'] > 0x0 ? (_0x3a990a['blockStart'](_0x15c587['_conchData']), _0x15c587['_renderChi' + 'lds'](_0x583aa3), _0x3a990a['blockEnd'](_0x15c587['_conchData'])) : _0x3a990a['block'](_0x15c587['_conchData'])), _0xbeb4d9['_tempInt1'][0x0] = 0x304, _0x3a990a['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_SRC'], 0x8, _0xbeb4d9['_tempInt1']), _0xbeb4d9['_tempInt1'][0x0] = 0x0, _0x3a990a['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_BLENDFUN' + 'C_DEST'], 0x8, _0xbeb4d9['_tempInt1']), this['_maskCmd']['endEncodin' + 'g']();
            }, _0x30103f['updatePart' + 'icleFromNa' + 'tive'] = function () {
                this['tempCmd']['updatePart' + 'icle']();
            }, _0xbeb4d9['createMatr' + 'ix'] = function (_0x4aa8d6, _0x24515c, _0x299485, _0x1a2997, _0x511484, _0x54c8a2, _0x93dd45) {
                return _0x4aa8d6 === void 0x0 && (_0x4aa8d6 = 0x1), _0x24515c === void 0x0 && (_0x24515c = 0x0), _0x299485 === void 0x0 && (_0x299485 = 0x0), _0x1a2997 === void 0x0 && (_0x1a2997 = 0x1), _0x511484 === void 0x0 && (_0x511484 = 0x0), _0x54c8a2 === void 0x0 && (_0x54c8a2 = 0x0), new _0x384aa8(_0x4aa8d6, _0x24515c, _0x299485, _0x1a2997, _0x511484, _0x54c8a2, _0x93dd45);
            }, _0xbeb4d9['init'] = function () {
                _0x5b219b['__init__'](), _0x3a7c76['__init__']();
                var _0x5297b5 = _0x854b9a['prototype'], _0x3a2e6a = _0xbeb4d9['prototype'], _0x281dfd = [
                        '_createTra' + 'nsform',
                        '_setTransf' + 'orm',
                        '_setGraphi' + 'cs',
                        '_setGraphi' + 'csCallBack',
                        '_setCacheA' + 's',
                        '_setX',
                        '_setY',
                        '_setPivotX',
                        '_getPivotX',
                        '_setPivotY',
                        '_getPivotY',
                        '_setAlpha',
                        '_getAlpha',
                        '_setScaleX',
                        '_setScaleY',
                        '_setSkewX',
                        '_setSkewY',
                        '_setRotati' + 'on',
                        '_adjustTra' + 'nsform',
                        '_setRender' + 'Type',
                        '_setTextur' + 'e',
                        '_setTextur' + 'eEx',
                        '_setCustom' + 'Render',
                        '_setScroll' + 'Rect',
                        '_setColorF' + 'ilter',
                        'customRend' + 'erFromNati' + 've',
                        'canvasBegi' + 'nRenderFro' + 'mNative',
                        'canvasEndR' + 'enderFromN' + 'ative',
                        'setChildre' + 'nNativeVis' + 'ible',
                        'filterBegi' + 'nRenderFro' + 'mNative',
                        'filterEndR' + 'enderFromN' + 'ative',
                        'updatePart' + 'icleFromNa' + 'tive',
                        '_setMask',
                        'maskRender' + 'FromNative',
                        '_setBlendM' + 'ode',
                        '_setBgStyl' + 'eColor',
                        '_setBorder' + 'StyleColor',
                        '_setWidth',
                        '_setHeight',
                        '_setTranfo' + 'rmChange'
                    ], _0x4f3227 = 0x0, _0x147b13 = 0x0;
                _0x147b13 = _0x281dfd['length'];
                var _0x44ceb7;
                for (_0x4f3227 = 0x0; _0x4f3227 < _0x147b13; _0x4f3227++) {
                    _0x44ceb7 = _0x281dfd[_0x4f3227], _0x5297b5[_0x44ceb7] = _0x3a2e6a[_0x44ceb7];
                }
                _0x5297b5['createGLBu' + 'ffer'] = _0x3a2e6a['createData'], _0x4fb671['_createFun'] = _0xbeb4d9['createMatr' + 'ix'];
                var _0x392618 = _0x854b9a;
                _0x5297b5['render'] = _0x5297b5['renderToNa' + 'tive'] = _0x2bc0bd['prototype']['renderToNa' + 'tive'], _0x5297b5['repaint'] = _0x5297b5['repaintFor' + 'Native'] = _0x2bc0bd['prototype']['repaintFor' + 'Native'], _0x5297b5['parentRepa' + 'int'] = _0x5297b5['parentRepa' + 'intForNati' + 've'] = _0x2bc0bd['prototype']['parentRepa' + 'intForNati' + 've'], _0x5297b5['_renderChi' + 'lds'] = _0x2bc0bd['prototype']['_renderChi' + 'lds'], _0x5297b5['writeBlock' + 'ToNative'] = _0x2bc0bd['prototype']['writeBlock' + 'ToNative'], _0x5297b5['_writeBloc' + 'kChilds'] = _0x2bc0bd['prototype']['_writeBloc' + 'kChilds'];
            }, _0xbeb4d9['useRenderT' + 'arget'] = function (_0x31aef0) {
                var _0x43094b = _0x33edbf['instance'];
                _0x4a9aac['pushRT'](), _0x31aef0['start'](), _0x43094b['clearColor'](0x0, 0x0, 0x0, 0x0), _0x43094b['clear'](0x4000 | 0x100 | 0x400), _0x43094b['save'](), _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2'][0x0] = _0x31aef0['width'], _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2'][0x1] = _0x31aef0['height'], _0x43094b['setGlobalV' + 'alue'](_0xe4a59a['GLOBALVALU' + 'E_VIEWS'], 0x8, _0xbeb4d9['_tempFloat' + 'ArrayBuffe' + 'r2']);
            }, _0xbeb4d9['buildCanva' + 's'] = function (_0x27ad5c, _0x5200a, _0x2e85c3) {
                var _0x3a5fc6 = _0x27ad5c['_cacheStyl' + 'e'], _0x1a9500, _0x30f4a7 = _0x3a5fc6['canvas'], _0x2145ad, _0x52e9cd, _0x2a2cf3, _0x468bbb = _0x3a5fc6['cacheAs'], _0x2d3bc2, _0x125ef0, _0x357ef1, _0x4bb348, _0x33e652;
                _0x33e652 = _0x3a5fc6['_calculate' + 'CacheRect'](_0x27ad5c, _0x468bbb, _0x5200a, _0x2e85c3), _0x357ef1 = _0x33e652['x'], _0x4bb348 = _0x33e652['y'], _0x2a2cf3 = _0x3a5fc6['cacheRect'], _0x2d3bc2 = _0x2a2cf3['width'] * _0x357ef1, _0x125ef0 = _0x2a2cf3['height'] * _0x4bb348, _0x2145ad = _0x2a2cf3['x'], _0x52e9cd = _0x2a2cf3['y'];
                if (_0x468bbb === 'bitmap' && (_0x2d3bc2 > 0x800 || _0x125ef0 > 0x800))
                    return alert('cache\x20bitm' + 'ap\x20size\x20la' + 'rger\x20than\x20' + '2048,cache' + '\x20ignored'), _0x3a5fc6['releaseCon' + 'text'](), null;
                !_0x30f4a7 && (_0x3a5fc6['createCont' + 'ext'](), _0x30f4a7 = _0x3a5fc6['canvas']);
                _0x1a9500 = _0x30f4a7['context'], _0x30f4a7['context']['sprite'] = _0x27ad5c;
                (_0x30f4a7['width'] != _0x2d3bc2 || _0x30f4a7['height'] != _0x125ef0) && (_0x30f4a7['size'](_0x2d3bc2, _0x125ef0), _0x1a9500['_targets'] && (_0x1a9500['_targets']['destroy'](), _0x1a9500['_targets'] = null));
                if (_0x468bbb === 'bitmap')
                    _0x30f4a7['context']['asBitmap'] = !![];
                else {
                    if (_0x468bbb === 'normal')
                        _0x30f4a7['context']['asBitmap'] = ![];
                }
                return _0x468bbb === 'normal' && (_0x1a9500['touches'] = []), _0x30f4a7;
            }, _0x3a2911(_0xbeb4d9, [
                '_tempFloat' + 'ArrayBuffe' + 'r2',
                function () {
                    return this['_tempFloat' + 'ArrayBuffe' + 'r2'] = new Float32Array(0x2);
                },
                '_tempFloat' + 'ArrayMatri' + 'x',
                function () {
                    return this['_tempFloat' + 'ArrayMatri' + 'x'] = new Float32Array(0x6);
                },
                '_tempInt1',
                function () {
                    return this['_tempInt1'] = new Int32Array(0x1);
                }
            ]), _0xbeb4d9;
        }(_0x4b8140), _0x31d0dd = function (_0x562594) {
            function _0x299a8c(_0x258702, _0x3f934e) {
                this['_source'] = null, this['_texW'] = 0x0, this['_texH'] = 0x0, this['__destroye' + 'd'] = ![], this['_discardTm'] = 0x0, this['genID'] = 0x0, this['bitmap'] = {
                    'id': 0x0,
                    '_glTexture': null
                }, this['curUsedCov' + 'Rate'] = 0x0, this['curUsedCov' + 'RateAtlas'] = 0x0, this['lastTouchT' + 'm'] = 0x0, this['ri'] = null, _0x299a8c['__super']['call'](this), this['_texW'] = _0x258702 || _0x32b95f['atlasWidth'], this['_texH'] = _0x3f934e || _0x32b95f['atlasWidth'], this['bitmap']['id'] = this['id'], this['lock'] = !![];
            }
            _0x199b5b(_0x299a8c, 'laya.webgl' + '.text.Text' + 'Texture', _0x562594);
            var _0x25f71e = _0x299a8c['prototype'];
            return _0x25f71e['recreateRe' + 'source'] = function () {
                if (this['_source'])
                    return;
                var _0x3b7996 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'], _0x500769 = this['_source'] = _0x3b7996['createText' + 'ure']();
                this['bitmap']['_glTexture'] = _0x500769, _0x21b46c['bindTextur' + 'e'](_0x3b7996, 0xde1, _0x500769), _0x3b7996['texImage2D'](0xde1, 0x0, 0x1908, this['_texW'], this['_texH'], 0x0, 0x1908, 0x1401, null), _0x3b7996['texParamet' + 'eri'](0xde1, 0x2801, 0x2601), _0x3b7996['texParamet' + 'eri'](0xde1, 0x2800, 0x2601), _0x3b7996['texParamet' + 'eri'](0xde1, 0x2802, 0x812f), _0x3b7996['texParamet' + 'eri'](0xde1, 0x2803, 0x812f), _0x32b95f['debugUV'] && this['fillWhite']();
            }, _0x25f71e['addChar'] = function (_0x7e508a, _0x42d0fe, _0x512004, _0x2b887c) {
                if (_0x32b95f['isWan1Wan'])
                    return this['addCharCan' + 'vas'](_0x7e508a, _0x42d0fe, _0x512004, _0x2b887c);
                !this['_source'] && this['recreateRe' + 'source']();
                var _0x1123f6 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                _0x21b46c['bindTextur' + 'e'](_0x1123f6, 0xde1, this['_source']), !_0x30d89b['isConchApp'] && _0x1123f6['pixelStore' + 'i'](0x9241, !![]);
                var _0x505719 = _0x7e508a['data'];
                if (_0x7e508a['data'] instanceof Uint8ClampedArray)
                    _0x505719 = new Uint8Array(_0x505719['buffer']);
                _0x1123f6['texSubImag' + 'e2D'](0xde1, 0x0, _0x42d0fe, _0x512004, _0x7e508a['width'], _0x7e508a['height'], 0x1908, 0x1401, _0x505719), !_0x30d89b['isConchApp'] && _0x1123f6['pixelStore' + 'i'](0x9241, ![]);
                var _0x35f06e = NaN, _0x15cede = NaN, _0x5a6097 = NaN, _0x2482e0 = NaN;
                return _0x30d89b['isConchApp'] ? (_0x35f06e = _0x42d0fe / this['_texW'], _0x15cede = _0x512004 / this['_texH'], _0x5a6097 = (_0x42d0fe + _0x7e508a['width']) / this['_texW'], _0x2482e0 = (_0x512004 + _0x7e508a['height']) / this['_texH']) : (_0x35f06e = (_0x42d0fe + 0x1) / this['_texW'], _0x15cede = (_0x512004 + 0x1) / this['_texH'], _0x5a6097 = (_0x42d0fe + _0x7e508a['width'] - 0x1) / this['_texW'], _0x2482e0 = (_0x512004 + _0x7e508a['height'] - 0x1) / this['_texH']), _0x2b887c = _0x2b887c || new Array(0x8), (_0x2b887c[0x0] = _0x35f06e, _0x2b887c[0x1] = _0x15cede), (_0x2b887c[0x2] = _0x5a6097, _0x2b887c[0x3] = _0x15cede), (_0x2b887c[0x4] = _0x5a6097, _0x2b887c[0x5] = _0x2482e0), (_0x2b887c[0x6] = _0x35f06e, _0x2b887c[0x7] = _0x2482e0), _0x2b887c;
            }, _0x25f71e['addCharCan' + 'vas'] = function (_0x376da0, _0x55da19, _0xb01b3a, _0x5a9397) {
                !this['_source'] && this['recreateRe' + 'source']();
                var _0x2de6d5 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                _0x21b46c['bindTextur' + 'e'](_0x2de6d5, 0xde1, this['_source']), !_0x30d89b['isConchApp'] && _0x2de6d5['pixelStore' + 'i'](0x9241, !![]), _0x2de6d5['texSubImag' + 'e2D'](0xde1, 0x0, _0x55da19, _0xb01b3a, 0x1908, 0x1401, _0x376da0), !_0x30d89b['isConchApp'] && _0x2de6d5['pixelStore' + 'i'](0x9241, ![]);
                var _0x15ebcc = NaN, _0x35a8f6 = NaN, _0x4324d5 = NaN, _0x310578 = NaN;
                return _0x30d89b['isConchApp'] ? (_0x15ebcc = _0x55da19 / this['_texW'], _0x35a8f6 = _0xb01b3a / this['_texH'], _0x4324d5 = (_0x55da19 + _0x376da0['width']) / this['_texW'], _0x310578 = (_0xb01b3a + _0x376da0['height']) / this['_texH']) : (_0x15ebcc = (_0x55da19 + 0x1) / this['_texW'], _0x35a8f6 = (_0xb01b3a + 0x1) / this['_texH'], _0x4324d5 = (_0x55da19 + _0x376da0['width'] - 0x1) / this['_texW'], _0x310578 = (_0xb01b3a + _0x376da0['height'] - 0x1) / this['_texH']), _0x5a9397 = _0x5a9397 || new Array(0x8), (_0x5a9397[0x0] = _0x15ebcc, _0x5a9397[0x1] = _0x35a8f6), (_0x5a9397[0x2] = _0x4324d5, _0x5a9397[0x3] = _0x35a8f6), (_0x5a9397[0x4] = _0x4324d5, _0x5a9397[0x5] = _0x310578), (_0x5a9397[0x6] = _0x15ebcc, _0x5a9397[0x7] = _0x310578), _0x5a9397;
            }, _0x25f71e['fillWhite'] = function () {
                !this['_source'] && this['recreateRe' + 'source']();
                var _0x41b0d1 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'], _0x33f639 = new Uint8Array(this['_texW'] * this['_texH'] * 0x4);
                _0x33f639['fill'](0xff), _0x41b0d1['texSubImag' + 'e2D'](0xde1, 0x0, 0x0, 0x0, this['_texW'], this['_texH'], 0x1908, 0x1401, _0x33f639);
            }, _0x25f71e['discard'] = function () {
                if (this['_texW'] != _0x32b95f['atlasWidth'] || this['_texH'] != _0x32b95f['atlasWidth']) {
                    this['destroy']();
                    return;
                }
                this['genID']++, _0x299a8c['poolLen'] >= _0x299a8c['pool']['length'] && (_0x299a8c['pool'] = _0x299a8c['pool']['concat'](new Array(0xa))), this['_discardTm'] = _0x4a6519['stage']['getFrameTm'](), _0x299a8c['pool'][_0x299a8c['poolLen']++] = this;
            }, _0x25f71e['destroy'] = function () {
                console['log']('destroy\x20Te' + 'xtTexture'), this['__destroye' + 'd'] = !![];
                var _0x1b1529 = _0x30d89b['isConchApp'] ? _0x33edbf['instance']['getDefault' + 'CommandEnc' + 'oder']() : _0x354f16['mainContex' + 't'];
                this['_source'] && _0x1b1529['deleteText' + 'ure'](this['_source']), this['_source'] = null;
            }, _0x25f71e['touchRect'] = function (_0x219f4, _0x5a07b5) {
                this['lastTouchT' + 'm'] != _0x5a07b5 && (this['curUsedCov' + 'Rate'] = 0x0, this['curUsedCov' + 'RateAtlas'] = 0x0, this['lastTouchT' + 'm'] = _0x5a07b5);
                ;
                var _0xe0caa6 = _0x32b95f['atlasWidth'] * _0x32b95f['atlasWidth'], _0x2ce939 = _0x556f29['atlasGridW'] * _0x556f29['atlasGridW'];
                this['curUsedCov' + 'Rate'] += _0x219f4['bmpWidth'] * _0x219f4['bmpHeight'] / _0xe0caa6, this['curUsedCov' + 'RateAtlas'] += Math['ceil'](_0x219f4['bmpWidth'] / _0x556f29['atlasGridW']) * Math['ceil'](_0x219f4['bmpHeight'] / _0x556f29['atlasGridW']) / (_0xe0caa6 / _0x2ce939);
            }, _0x25f71e['_getSource'] = function () {
                return this['_source'];
            }, _0x25f71e['drawOnScre' + 'en'] = function (_0x5d296e, _0x444e39) {
            }, _0x3a2bd3(0x0, _0x25f71e, 'texture', function () {
                return this;
            }), _0x299a8c['getTextTex' + 'ture'] = function (_0xbb1c0c, _0xe5068f) {
                if (_0xbb1c0c != _0x32b95f['atlasWidth'] || _0xbb1c0c != _0x32b95f['atlasWidth'])
                    return new _0x299a8c(_0xbb1c0c, _0xe5068f);
                if (_0x299a8c['poolLen'] > 0x0) {
                    var _0x184c86 = _0x299a8c['pool'][--_0x299a8c['poolLen']];
                    if (_0x299a8c['poolLen'] > 0x0)
                        _0x299a8c['clean']();
                    return _0x184c86;
                }
                return new _0x299a8c(_0xbb1c0c, _0xe5068f);
            }, _0x299a8c['clean'] = function () {
                var _0x3128cf = _0x4a6519['stage']['getFrameTm']();
                if (_0x299a8c['cleanTm'] === 0x0)
                    _0x299a8c['cleanTm'] = _0x3128cf;
                if (_0x3128cf - _0x299a8c['cleanTm'] >= _0x32b95f['checkClean' + 'TextureDt']) {
                    for (var _0x207cd6 = 0x0; _0x207cd6 < _0x299a8c['poolLen']; _0x207cd6++) {
                        var _0x598c63 = _0x299a8c['pool'][_0x207cd6];
                        _0x3128cf - _0x598c63['_discardTm'] >= _0x32b95f['destroyUnu' + 'sedTexture' + 'Dt'] && (_0x598c63['destroy'](), _0x299a8c['pool'][_0x207cd6] = _0x299a8c['pool'][_0x299a8c['poolLen'] - 0x1], _0x299a8c['poolLen']--, _0x207cd6--);
                    }
                    _0x299a8c['cleanTm'] = _0x3128cf;
                }
            }, _0x299a8c['poolLen'] = 0x0, _0x299a8c['cleanTm'] = 0x0, _0x3a2911(_0x299a8c, [
                'pool',
                function () {
                    return this['pool'] = new Array(0xa);
                }
            ]), _0x299a8c;
        }(_0x1c4cc5), _0xdf5923 = function (_0xf914c4) {
            function _0x3f363a(_0x31d200) {
                this['_uint16Arr' + 'ay'] = null, _0x31d200 === void 0x0 && (_0x31d200 = 0x88e4), _0x3f363a['__super']['call'](this), this['_bufferUsa' + 'ge'] = _0x31d200, this['_bufferTyp' + 'e'] = 0x8893, this['_buffer'] = new ArrayBuffer(0x8);
            }
            _0x199b5b(_0x3f363a, 'laya.webgl' + '.utils.Ind' + 'exBuffer2D', _0xf914c4);
            var _0x260eee = _0x3f363a['prototype'];
            return _0x260eee['_checkArra' + 'yUse'] = function () {
                this['_uint16Arr' + 'ay'] && (this['_uint16Arr' + 'ay'] = new Uint16Array(this['_buffer']));
            }, _0x260eee['getUint16A' + 'rray'] = function () {
                return this['_uint16Arr' + 'ay'] || (this['_uint16Arr' + 'ay'] = new Uint16Array(this['_buffer']));
            }, _0x260eee['_bindForVA' + 'O'] = function () {
                _0x33edbf['instance']['bindBuffer'](0x8893, this['_glBuffer']);
            }, _0x260eee['bind'] = function () {
                if (_0xad6375['_bindedInd' + 'exBuffer'] !== this['_glBuffer'])
                    return _0x33edbf['instance']['bindBuffer'](0x8893, this['_glBuffer']), _0xad6375['_bindedInd' + 'exBuffer'] = this['_glBuffer'], !![];
                return ![];
            }, _0x260eee['destory'] = function () {
                this['_uint16Arr' + 'ay'] = null, this['_buffer'] = null;
            }, _0x260eee['disposeRes' + 'ource'] = function () {
                this['_disposeRe' + 'source']();
            }, _0x3f363a['create'] = function (_0x4dad41) {
                return _0x4dad41 === void 0x0 && (_0x4dad41 = 0x88e4), new _0x3f363a(_0x4dad41);
            }, _0x3f363a;
        }(_0x53e8eb), _0x5351bd = function (_0x4373a6) {
            function _0x2b4e9f(_0x4a7ebb, _0x11a1c2) {
                this['_floatArra' + 'y32'] = null, this['_uint32Arr' + 'ay'] = null, this['_vertexStr' + 'ide'] = 0x0, _0x2b4e9f['__super']['call'](this), this['_vertexStr' + 'ide'] = _0x4a7ebb, this['_bufferUsa' + 'ge'] = _0x11a1c2, this['_bufferTyp' + 'e'] = 0x8892, this['_buffer'] = new ArrayBuffer(0x8), this['_floatArra' + 'y32'] = new Float32Array(this['_buffer']), this['_uint32Arr' + 'ay'] = new Uint32Array(this['_buffer']);
            }
            _0x199b5b(_0x2b4e9f, 'laya.webgl' + '.utils.Ver' + 'texBuffer2' + 'D', _0x4373a6);
            var _0x107ec4 = _0x2b4e9f['prototype'];
            return _0x107ec4['getFloat32' + 'Array'] = function () {
                return this['_floatArra' + 'y32'];
            }, _0x107ec4['appendArra' + 'y'] = function (_0x3e9ca2) {
                var _0x2e8235 = this['_byteLengt' + 'h'] >> 0x2;
                this['setByteLen' + 'gth'](this['_byteLengt' + 'h'] + _0x3e9ca2['length'] * 0x4);
                var _0x4911b0 = this['getFloat32' + 'Array']();
                _0x4911b0['set'](_0x3e9ca2, _0x2e8235), this['_upload'] = !![];
            }, _0x107ec4['_checkArra' + 'yUse'] = function () {
                this['_floatArra' + 'y32'] && (this['_floatArra' + 'y32'] = new Float32Array(this['_buffer'])), this['_uint32Arr' + 'ay'] && (this['_uint32Arr' + 'ay'] = new Uint32Array(this['_buffer']));
            }, _0x107ec4['deleteBuff' + 'er'] = function () {
                this['_disposeRe' + 'source']();
            }, _0x107ec4['_bindForVA' + 'O'] = function () {
                _0x33edbf['instance']['bindBuffer'](0x8892, this['_glBuffer']);
            }, _0x107ec4['bind'] = function () {
                if (_0xad6375['_bindedVer' + 'texBuffer'] !== this['_glBuffer'])
                    return _0x33edbf['instance']['bindBuffer'](0x8892, this['_glBuffer']), _0xad6375['_bindedVer' + 'texBuffer'] = this['_glBuffer'], !![];
                return ![];
            }, _0x107ec4['destroy'] = function () {
                laya['webgl']['utils']['Buffer']['prototype']['destroy']['call'](this), this['_byteLengt' + 'h'] = 0x0, this['_upload'] = !![], this['_buffer'] = null, this['_floatArra' + 'y32'] = null;
            }, _0x3a2bd3(0x0, _0x107ec4, 'vertexStri' + 'de', function () {
                return this['_vertexStr' + 'ide'];
            }), _0x2b4e9f['create'] = function (_0x46c38a, _0x22295f) {
                return _0x22295f === void 0x0 && (_0x22295f = 0x88e8), new _0x2b4e9f(_0x46c38a, _0x22295f);
            }, _0x2b4e9f;
        }(_0x53e8eb), _0x33e7f4 = function (_0x964faa) {
            function _0x55fb70(_0x35b2f0, _0x51cdc6) {
                _0x55fb70['__super']['call'](this), this['_wrapModeU'] = 0x0, this['_wrapModeV'] = 0x0, this['_filterMod' + 'e'] = 0x1, this['_readyed'] = ![], this['_width'] = -0x1, this['_height'] = -0x1, this['_format'] = _0x35b2f0, this['_mipmap'] = _0x51cdc6, this['_anisoLeve' + 'l'] = 0x1, this['_glTexture'] = _0x33edbf['instance']['createText' + 'ure']();
            }
            _0x199b5b(_0x55fb70, 'laya.webgl' + '.resource.' + 'BaseTextur' + 'e', _0x964faa);
            var _0x14b10b = _0x55fb70['prototype'];
            return _0x14b10b['_isPot'] = function (_0x29efb7) {
                return (_0x29efb7 & _0x29efb7 - 0x1) === 0x0;
            }, _0x14b10b['_getGLForm' + 'at'] = function () {
                var _0x52699d = 0x0;
                switch (this['_format']) {
                case 0x0:
                    _0x52699d = 0x1907;
                    break;
                case 0x1:
                    _0x52699d = 0x1908;
                    break;
                case 0x2:
                    _0x52699d = 0x1906;
                    break;
                case 0x3:
                    if (_0x21b46c['_compresse' + 'dTextureS3' + 'tc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTextureS3' + 'tc']['COMPRESSED' + '_RGB_S3TC_' + 'DXT1_EXT'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20DXT1\x20' + 'format.';
                    break;
                case 0x4:
                    if (_0x21b46c['_compresse' + 'dTextureS3' + 'tc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTextureS3' + 'tc']['COMPRESSED' + '_RGBA_S3TC' + '_DXT5_EXT'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20DXT5\x20' + 'format.';
                    break;
                case 0x5:
                    if (_0x21b46c['_compresse' + 'dTextureEt' + 'c1'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTextureEt' + 'c1']['COMPRESSED' + '_RGB_ETC1_' + 'WEBGL'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20ETC1R' + 'GB\x20format.';
                    break;
                case 0x9:
                    if (_0x21b46c['_compresse' + 'dTexturePv' + 'rtc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTexturePv' + 'rtc']['COMPRESSED' + '_RGB_PVRTC' + '_2BPPV1_IM' + 'G'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20PVRTC' + 'RGB_2BPPV\x20' + 'format.';
                    break;
                case 0xa:
                    if (_0x21b46c['_compresse' + 'dTexturePv' + 'rtc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTexturePv' + 'rtc']['COMPRESSED' + '_RGBA_PVRT' + 'C_2BPPV1_I' + 'MG'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20PVRTC' + 'RGBA_2BPPV' + '\x20format.';
                    break;
                case 0xb:
                    if (_0x21b46c['_compresse' + 'dTexturePv' + 'rtc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTexturePv' + 'rtc']['COMPRESSED' + '_RGB_PVRTC' + '_4BPPV1_IM' + 'G'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20PVRTC' + 'RGB_4BPPV\x20' + 'format.';
                    break;
                case 0xc:
                    if (_0x21b46c['_compresse' + 'dTexturePv' + 'rtc'])
                        _0x52699d = _0x21b46c['_compresse' + 'dTexturePv' + 'rtc']['COMPRESSED' + '_RGBA_PVRT' + 'C_4BPPV1_I' + 'MG'];
                    else
                        throw 'BaseTextur' + 'e:\x20not\x20sup' + 'port\x20PVRTC' + 'RGBA_4BPPV' + '\x20format.';
                    break;
                default:
                    throw 'BaseTextur' + 'e:\x20unknown' + '\x20texture\x20f' + 'ormat.';
                }
                return _0x52699d;
            }, _0x14b10b['_setFilter' + 'Mode'] = function (_0x51fc86) {
                var _0x2b91e3 = _0x33edbf['instance'];
                _0x21b46c['bindTextur' + 'e'](_0x2b91e3, this['_glTexture' + 'Type'], this['_glTexture']);
                switch (_0x51fc86) {
                case 0x0:
                    if (this['_mipmap'] && this['_isPot'](this['_width']) && this['_isPot'](this['_height']))
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2700);
                    else
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2600);
                    _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2800, 0x2600);
                    break;
                case 0x1:
                    if (this['_mipmap'] && this['_isPot'](this['_width']) && this['_isPot'](this['_height']))
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2701);
                    else
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2601);
                    _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2800, 0x2601);
                    break;
                case 0x2:
                    if (this['_mipmap'] && this['_isPot'](this['_width']) && this['_isPot'](this['_height']))
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2703);
                    else
                        _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2801, 0x2601);
                    _0x2b91e3['texParamet' + 'eri'](this['_glTexture' + 'Type'], 0x2800, 0x2601);
                    break;
                default:
                    throw new Error('BaseTextur' + 'e:unknown\x20' + 'filterMode' + '\x20value.');
                }
            }, _0x14b10b['_setWarpMo' + 'de'] = function (_0x56941e, _0x472c19) {
                var _0x3b8278 = _0x33edbf['instance'];
                _0x21b46c['bindTextur' + 'e'](_0x3b8278, this['_glTexture' + 'Type'], this['_glTexture']);
                if (this['_isPot'](this['_width']) && this['_isPot'](this['_height']))
                    switch (_0x472c19) {
                    case 0x0:
                        _0x3b8278['texParamet' + 'eri'](this['_glTexture' + 'Type'], _0x56941e, 0x2901);
                        break;
                    case 0x1:
                        _0x3b8278['texParamet' + 'eri'](this['_glTexture' + 'Type'], _0x56941e, 0x812f);
                        break;
                    }
                else
                    _0x3b8278['texParamet' + 'eri'](this['_glTexture' + 'Type'], _0x56941e, 0x812f);
            }, _0x14b10b['_setAnisot' + 'ropy'] = function (_0x415625) {
                var _0x3e5968 = _0x21b46c['_extTextur' + 'eFilterAni' + 'sotropic'];
                if (_0x3e5968 && !_0x3592ad['onLimixiu']) {
                    _0x415625 = Math['max'](_0x415625, 0x1);
                    var _0x5996e4 = _0x33edbf['instance'];
                    _0x21b46c['bindTextur' + 'e'](_0x5996e4, this['_glTexture' + 'Type'], this['_glTexture']), _0x415625 = Math['min'](_0x5996e4['getParamet' + 'er'](_0x3e5968['MAX_TEXTUR' + 'E_MAX_ANIS' + 'OTROPY_EXT']), _0x415625), _0x5996e4['texParamet' + 'erf'](this['_glTexture' + 'Type'], _0x3e5968['TEXTURE_MA' + 'X_ANISOTRO' + 'PY_EXT'], _0x415625);
                }
            }, _0x14b10b['_disposeRe' + 'source'] = function () {
                this['_glTexture'] && (_0x33edbf['instance']['deleteText' + 'ure'](this['_glTexture']), this['_glTexture'] = null, this['_setGPUMem' + 'ory'](0x0));
            }, _0x14b10b['_getSource'] = function () {
                if (this['_readyed'])
                    return this['_glTexture'];
                else
                    return null;
            }, _0x3a2bd3(0x0, _0x14b10b, 'wrapModeU', function () {
                return this['_wrapModeU'];
            }, function (_0x47d62c) {
                this['_wrapModeU'] !== _0x47d62c && (this['_wrapModeU'] = _0x47d62c, this['_width'] !== -0x1 && this['_setWarpMo' + 'de'](0x2802, _0x47d62c));
            }), _0x3a2bd3(0x0, _0x14b10b, 'mipmap', function () {
                return this['_mipmap'];
            }), _0x3a2bd3(0x0, _0x14b10b, 'format', function () {
                return this['_format'];
            }), _0x3a2bd3(0x0, _0x14b10b, 'wrapModeV', function () {
                return this['_wrapModeV'];
            }, function (_0x45831a) {
                this['_wrapModeV'] !== _0x45831a && (this['_wrapModeV'] = _0x45831a, this['_height'] !== -0x1 && this['_setWarpMo' + 'de'](0x2803, _0x45831a));
            }), _0x3a2bd3(0x0, _0x14b10b, 'defaulteTe' + 'xture', function () {
                throw 'BaseTextur' + 'e:must\x20ove' + 'rride\x20it.';
            }), _0x3a2bd3(0x0, _0x14b10b, 'filterMode', function () {
                return this['_filterMod' + 'e'];
            }, function (_0x1de443) {
                _0x1de443 !== this['_filterMod' + 'e'] && (this['_filterMod' + 'e'] = _0x1de443, this['_width'] !== -0x1 && this['_height'] !== -0x1 && this['_setFilter' + 'Mode'](_0x1de443));
            }), _0x3a2bd3(0x0, _0x14b10b, 'anisoLevel', function () {
                return this['_anisoLeve' + 'l'];
            }, function (_0x361f6f) {
                _0x361f6f !== this['_anisoLeve' + 'l'] && (this['_anisoLeve' + 'l'] = Math['max'](0x1, Math['min'](0x10, _0x361f6f)), this['_width'] !== -0x1 && this['_height'] !== -0x1 && this['_setAnisot' + 'ropy'](_0x361f6f));
            }), _0x55fb70['WARPMODE_R' + 'EPEAT'] = 0x0, _0x55fb70['WARPMODE_C' + 'LAMP'] = 0x1, _0x55fb70['FILTERMODE' + '_POINT'] = 0x0, _0x55fb70['FILTERMODE' + '_BILINEAR'] = 0x1, _0x55fb70['FILTERMODE' + '_TRILINEAR'] = 0x2, _0x55fb70['FORMAT_R8G' + '8B8'] = 0x0, _0x55fb70['FORMAT_R8G' + '8B8A8'] = 0x1, _0x55fb70['FORMAT_ALP' + 'HA8'] = 0x2, _0x55fb70['FORMAT_DXT' + '1'] = 0x3, _0x55fb70['FORMAT_DXT' + '5'] = 0x4, _0x55fb70['FORMAT_ETC' + '1RGB'] = 0x5, _0x55fb70['FORMAT_PVR' + 'TCRGB_2BPP' + 'V'] = 0x9, _0x55fb70['FORMAT_PVR' + 'TCRGBA_2BP' + 'PV'] = 0xa, _0x55fb70['FORMAT_PVR' + 'TCRGB_4BPP' + 'V'] = 0xb, _0x55fb70['FORMAT_PVR' + 'TCRGBA_4BP' + 'PV'] = 0xc, _0x55fb70['FORMAT_DEP' + 'TH_16'] = 0x0, _0x55fb70['FORMAT_STE' + 'NCIL_8'] = 0x1, _0x55fb70['FORMAT_DEP' + 'THSTENCIL_' + '16_8'] = 0x2, _0x55fb70['FORMAT_DEP' + 'THSTENCIL_' + 'NONE'] = 0x3, _0x55fb70;
        }(_0x1a67fc), _0x2bc0bd = function (_0x1224c1) {
            function _0x1f51c1() {
                _0x1f51c1['__super']['call'](this);
                ;
            }
            _0x199b5b(_0x1f51c1, 'laya.layag' + 'l.ConchSpr' + 'ite', _0x1224c1);
            var _0x15484a = _0x1f51c1['prototype'];
            return _0x15484a['parentRepa' + 'intForNati' + 've'] = function (_0xc58c1c) {
                _0xc58c1c === void 0x0 && (_0xc58c1c = 0x2);
                var _0x34b598 = this['_parent'];
                _0x34b598 && (!((_0x34b598['_conchData']['_int32Data'][0x4] & _0xc58c1c) == _0xc58c1c) && (_0x34b598['_conchData']['_int32Data'][0x4] |= _0xc58c1c, _0x34b598['parentRepa' + 'intForNati' + 've'](_0xc58c1c)));
            }, _0x15484a['renderToNa' + 'tive'] = function (_0x143278, _0x43b054, _0x51df3a) {
                var _0x16d940 = _0x143278['gl'], _0x36d22a = _0x33edbf['getFrameCo' + 'unt']() - 0x1, _0x5532ac = this['_conchData']['_int32Data'], _0x2992b3 = _0x5532ac[0x4];
                this['_children']['length'] > 0x0 ? _0x36d22a != _0x5532ac[0x3] || _0x2992b3 > 0x0 && (_0x2992b3 & 0x1) == 0x1 ? (_0x16d940['blockStart'](this['_conchData']), this['_renderChi' + 'lds'](_0x143278), _0x16d940['blockEnd'](this['_conchData'])) : _0x16d940['copyCmdBuf' + 'fer'](this['_conchData']['_int32Data'][0x1], this['_conchData']['_int32Data'][0x2]) : _0x16d940['block'](this['_conchData']);
            }, _0x15484a['writeBlock' + 'ToNative'] = function () {
                var _0x2ce0d2 = _0x33edbf['instance'];
                this['_children']['length'] > 0x0 ? (_0x2ce0d2['blockStart'](this['_conchData']), this['_writeBloc' + 'kChilds'](), _0x2ce0d2['blockEnd'](this['_conchData'])) : _0x2ce0d2['block'](this['_conchData']);
            }, _0x15484a['_renderChi' + 'lds'] = function (_0x507ce3) {
                var _0x4d99da = this['_children'], _0x8b204, _0xd91f78 = 0x0, _0x4a7aee = _0x4d99da['length'], _0x2bc9d6 = this['_style'];
                if (_0x2bc9d6['viewport']) {
                    var _0x4f36db = _0x2bc9d6['viewport'], _0xc382ba = _0x4f36db['x'], _0x3fa16f = _0x4f36db['y'], _0x7a9c9c = _0x4f36db['right'], _0x543989 = _0x4f36db['bottom'], _0x2cf00b = NaN, _0x51693d = NaN;
                    for (; _0xd91f78 < _0x4a7aee; ++_0xd91f78) {
                        if ((_0x8b204 = _0x4d99da[_0xd91f78])['_visible'] && ((_0x2cf00b = _0x8b204['_x']) < _0x7a9c9c && _0x2cf00b + _0x8b204['width'] > _0xc382ba && (_0x51693d = _0x8b204['_y']) < _0x543989 && _0x51693d + _0x8b204['height'] > _0x3fa16f))
                            _0x8b204['renderToNa' + 'tive'](_0x507ce3);
                    }
                } else {
                    for (; _0xd91f78 < _0x4a7aee; ++_0xd91f78)
                        (_0x8b204 = _0x4d99da[_0xd91f78])['_visible'] && _0x8b204['renderToNa' + 'tive'](_0x507ce3);
                }
            }, _0x15484a['_writeBloc' + 'kChilds'] = function () {
                var _0x4ef62c = this['_children'], _0x39e4cd, _0x1a529a = 0x0, _0x43ac3a = _0x4ef62c['length'], _0x4c8879 = this['_style'];
                if (_0x4c8879['viewport']) {
                    var _0x380920 = _0x4c8879['viewport'], _0x4c709b = _0x380920['x'], _0x4a3176 = _0x380920['y'], _0xb67f3 = _0x380920['right'], _0x53dfe4 = _0x380920['bottom'], _0x2100b2 = NaN, _0x1bff9b = NaN;
                    for (; _0x1a529a < _0x43ac3a; ++_0x1a529a) {
                        if ((_0x39e4cd = _0x4ef62c[_0x1a529a])['_visible'] && ((_0x2100b2 = _0x39e4cd['_x']) < _0xb67f3 && _0x2100b2 + _0x39e4cd['width'] > _0x4c709b && (_0x1bff9b = _0x39e4cd['_y']) < _0x53dfe4 && _0x1bff9b + _0x39e4cd['height'] > _0x4a3176))
                            _0x39e4cd['writeBlock' + 'ToNative']();
                    }
                } else {
                    for (; _0x1a529a < _0x43ac3a; ++_0x1a529a)
                        (_0x39e4cd = _0x4ef62c[_0x1a529a])['_visible'] && _0x39e4cd['writeBlock' + 'ToNative']();
                }
            }, _0x15484a['repaintFor' + 'Native'] = function (_0x303110) {
                _0x303110 === void 0x0 && (_0x303110 = 0x2), !((this['_conchData']['_int32Data'][0x4] & _0x303110) == _0x303110) && (this['_conchData']['_int32Data'][0x4] |= _0x303110, this['parentRepa' + 'intForNati' + 've'](_0x303110));
            }, _0x1f51c1;
        }(_0x854b9a), _0x3ca794 = function (_0x4ba122) {
            function _0x3b6d05(_0x18db5e, _0xcacc60, _0x2beb0b, _0x583354, _0x4dde05) {
                this['_attribInf' + 'o'] = null, this['customComp' + 'ile'] = ![], this['_curActTex' + 'Index'] = 0x0, this['tag'] = {}, this['_program'] = null, this['_params'] = null, this['_paramsMap'] = {}, _0x3b6d05['__super']['call'](this);
                if (!_0x18db5e || !_0xcacc60)
                    throw 'Shader\x20Err' + 'or';
                this['_attribInf' + 'o'] = _0x4dde05, _0x30d89b['isConchApp'] && (this['customComp' + 'ile'] = !![]), this['_id'] = ++_0x3b6d05['_count'], this['_vs'] = _0x18db5e, this['_ps'] = _0xcacc60, this['_nameMap'] = _0x583354 ? _0x583354 : {}, _0x2beb0b != null && (_0x3b6d05['sharders'][_0x2beb0b] = this), this['recreateRe' + 'source'](), this['lock'] = !![];
            }
            _0x199b5b(_0x3b6d05, 'laya.webgl' + '.shader.Sh' + 'ader', _0x4ba122);
            var _0x3918fb = _0x3b6d05['prototype'];
            return _0x3918fb['recreateRe' + 'source'] = function () {
                this['_compile'](), this['_setGPUMem' + 'ory'](0x0);
            }, _0x3918fb['_disposeRe' + 'source'] = function () {
                _0x354f16['mainContex' + 't']['deleteShad' + 'er'](this['_vshader']), _0x354f16['mainContex' + 't']['deleteShad' + 'er'](this['_pshader']), _0x354f16['mainContex' + 't']['deleteProg' + 'ram'](this['_program']), this['_vshader'] = this['_pshader'] = this['_program'] = null, this['_params'] = null, this['_paramsMap'] = {}, this['_setGPUMem' + 'ory'](0x0), this['_curActTex' + 'Index'] = 0x0;
            }, _0x3918fb['_compile'] = function () {
                if (!this['_vs'] || !this['_ps'] || this['_params'])
                    return;
                this['_reCompile'] = !![], this['_params'] = [];
                var _0x59625a;
                if (this['customComp' + 'ile'])
                    _0x59625a = _0x1fc93b['preGetPara' + 'ms'](this['_vs'], this['_ps']);
                var _0x1d5380 = _0x354f16['mainContex' + 't'];
                this['_program'] = _0x1d5380['createProg' + 'ram'](), this['_vshader'] = _0x3b6d05['_createSha' + 'der'](_0x1d5380, this['_vs'], 0x8b31), this['_pshader'] = _0x3b6d05['_createSha' + 'der'](_0x1d5380, this['_ps'], 0x8b30), _0x1d5380['attachShad' + 'er'](this['_program'], this['_vshader']), _0x1d5380['attachShad' + 'er'](this['_program'], this['_pshader']);
                var _0x195b31, _0x314809 = 0x0, _0x1313db = 0x0, _0x56aaa1 = 0x0, _0x214e84, _0x2e83ff = this['_attribInf' + 'o'] ? this['_attribInf' + 'o']['length'] : 0x0;
                for (_0x314809 = 0x0; _0x314809 < _0x2e83ff; _0x314809 += 0x2) {
                    _0x1d5380['bindAttrib' + 'Location'](this['_program'], this['_attribInf' + 'o'][_0x314809 + 0x1], this['_attribInf' + 'o'][_0x314809]);
                }
                _0x1d5380['linkProgra' + 'm'](this['_program']);
                if (!this['customComp' + 'ile'] && !_0x1d5380['getProgram' + 'Parameter'](this['_program'], 0x8b82))
                    throw _0x1d5380['getProgram' + 'InfoLog'](this['_program']);
                ;
                var _0x2df30a = this['customComp' + 'ile'] ? _0x59625a['uniforms']['length'] : _0x1d5380['getProgram' + 'Parameter'](this['_program'], 0x8b86);
                for (_0x314809 = 0x0; _0x314809 < _0x2df30a; _0x314809++) {
                    var _0x31dd63 = this['customComp' + 'ile'] ? _0x59625a['uniforms'][_0x314809] : _0x1d5380['getActiveU' + 'niform'](this['_program'], _0x314809);
                    _0x214e84 = _0x1d5380['getUniform' + 'Location'](this['_program'], _0x31dd63['name']), _0x195b31 = {
                        'vartype': 'uniform',
                        'glfun': null,
                        'ivartype': 0x1,
                        'location': _0x214e84,
                        'name': _0x31dd63['name'],
                        'type': _0x31dd63['type'],
                        'isArray': ![],
                        'isSame': ![],
                        'preValue': null,
                        'indexOfParams': 0x0
                    }, _0x195b31['name']['indexOf']('[0]') > 0x0 && (_0x195b31['name'] = _0x195b31['name']['substr'](0x0, _0x195b31['name']['length'] - 0x3), _0x195b31['isArray'] = !![], _0x195b31['location'] = _0x1d5380['getUniform' + 'Location'](this['_program'], _0x195b31['name'])), this['_params']['push'](_0x195b31);
                }
                for (_0x314809 = 0x0, _0x56aaa1 = this['_params']['length']; _0x314809 < _0x56aaa1; _0x314809++) {
                    _0x195b31 = this['_params'][_0x314809], _0x195b31['indexOfPar' + 'ams'] = _0x314809, _0x195b31['index'] = 0x1, _0x195b31['value'] = [
                        _0x195b31['location'],
                        null
                    ], _0x195b31['codename'] = _0x195b31['name'], _0x195b31['name'] = this['_nameMap'][_0x195b31['codename']] ? this['_nameMap'][_0x195b31['codename']] : _0x195b31['codename'], this['_paramsMap'][_0x195b31['name']] = _0x195b31, _0x195b31['_this'] = this, _0x195b31['uploadedVa' + 'lue'] = [];
                    switch (_0x195b31['type']) {
                    case 0x1404:
                        _0x195b31['fun'] = _0x195b31['isArray'] ? this['_uniform1i' + 'v'] : this['_uniform1i'];
                        break;
                    case 0x1406:
                        _0x195b31['fun'] = _0x195b31['isArray'] ? this['_uniform1f' + 'v'] : this['_uniform1f'];
                        break;
                    case 0x8b50:
                        _0x195b31['fun'] = _0x195b31['isArray'] ? this['_uniform_v' + 'ec2v'] : this['_uniform_v' + 'ec2'];
                        break;
                    case 0x8b51:
                        _0x195b31['fun'] = _0x195b31['isArray'] ? this['_uniform_v' + 'ec3v'] : this['_uniform_v' + 'ec3'];
                        break;
                    case 0x8b52:
                        _0x195b31['fun'] = _0x195b31['isArray'] ? this['_uniform_v' + 'ec4v'] : this['_uniform_v' + 'ec4'];
                        break;
                    case 0x8b5e:
                        _0x195b31['fun'] = this['_uniform_s' + 'ampler2D'];
                        break;
                    case 0x8b60:
                        _0x195b31['fun'] = this['_uniform_s' + 'amplerCube'];
                        break;
                    case 0x8b5c:
                        _0x195b31['glfun'] = _0x1d5380['uniformMat' + 'rix4fv'], _0x195b31['fun'] = this['_uniformMa' + 'trix4fv'];
                        break;
                    case 0x8b56:
                        _0x195b31['fun'] = this['_uniform1i'];
                        break;
                    case 0x8b5a:
                    case 0x8b5b:
                        throw new Error('compile\x20sh' + 'ader\x20err!');
                    default:
                        throw new Error('compile\x20sh' + 'ader\x20err!');
                    }
                }
            }, _0x3918fb['getUniform'] = function (_0x4caa5d) {
                return this['_paramsMap'][_0x4caa5d];
            }, _0x3918fb['_uniform1f'] = function (_0x22ed2d, _0x4f2ad7) {
                var _0x1e8f79 = _0x22ed2d['uploadedVa' + 'lue'];
                if (_0x1e8f79[0x0] !== _0x4f2ad7)
                    return _0x354f16['mainContex' + 't']['uniform1f'](_0x22ed2d['location'], _0x1e8f79[0x0] = _0x4f2ad7), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform1f' + 'v'] = function (_0x5921bd, _0x869ba2) {
                if (_0x869ba2['length'] < 0x4) {
                    var _0x267eb5 = _0x5921bd['uploadedVa' + 'lue'];
                    if (_0x267eb5[0x0] !== _0x869ba2[0x0] || _0x267eb5[0x1] !== _0x869ba2[0x1] || _0x267eb5[0x2] !== _0x869ba2[0x2] || _0x267eb5[0x3] !== _0x869ba2[0x3])
                        return _0x354f16['mainContex' + 't']['uniform1fv'](_0x5921bd['location'], _0x869ba2), _0x267eb5[0x0] = _0x869ba2[0x0], _0x267eb5[0x1] = _0x869ba2[0x1], _0x267eb5[0x2] = _0x869ba2[0x2], _0x267eb5[0x3] = _0x869ba2[0x3], 0x1;
                    return 0x0;
                } else
                    return _0x354f16['mainContex' + 't']['uniform1fv'](_0x5921bd['location'], _0x869ba2), 0x1;
            }, _0x3918fb['_uniform_v' + 'ec2'] = function (_0x6223ed, _0x453fdd) {
                var _0x170675 = _0x6223ed['uploadedVa' + 'lue'];
                if (_0x170675[0x0] !== _0x453fdd[0x0] || _0x170675[0x1] !== _0x453fdd[0x1])
                    return _0x354f16['mainContex' + 't']['uniform2f'](_0x6223ed['location'], _0x170675[0x0] = _0x453fdd[0x0], _0x170675[0x1] = _0x453fdd[0x1]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_v' + 'ec2v'] = function (_0x3deca8, _0x92598c) {
                if (_0x92598c['length'] < 0x2) {
                    var _0x168f88 = _0x3deca8['uploadedVa' + 'lue'];
                    if (_0x168f88[0x0] !== _0x92598c[0x0] || _0x168f88[0x1] !== _0x92598c[0x1] || _0x168f88[0x2] !== _0x92598c[0x2] || _0x168f88[0x3] !== _0x92598c[0x3])
                        return _0x354f16['mainContex' + 't']['uniform2fv'](_0x3deca8['location'], _0x92598c), _0x168f88[0x0] = _0x92598c[0x0], _0x168f88[0x1] = _0x92598c[0x1], _0x168f88[0x2] = _0x92598c[0x2], _0x168f88[0x3] = _0x92598c[0x3], 0x1;
                    return 0x0;
                } else
                    return _0x354f16['mainContex' + 't']['uniform2fv'](_0x3deca8['location'], _0x92598c), 0x1;
            }, _0x3918fb['_uniform_v' + 'ec3'] = function (_0x4629fb, _0x3d97ec) {
                var _0x5f2697 = _0x4629fb['uploadedVa' + 'lue'];
                if (_0x5f2697[0x0] !== _0x3d97ec[0x0] || _0x5f2697[0x1] !== _0x3d97ec[0x1] || _0x5f2697[0x2] !== _0x3d97ec[0x2])
                    return _0x354f16['mainContex' + 't']['uniform3f'](_0x4629fb['location'], _0x5f2697[0x0] = _0x3d97ec[0x0], _0x5f2697[0x1] = _0x3d97ec[0x1], _0x5f2697[0x2] = _0x3d97ec[0x2]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_v' + 'ec3v'] = function (_0x1b0342, _0x4296cd) {
                return _0x354f16['mainContex' + 't']['uniform3fv'](_0x1b0342['location'], _0x4296cd), 0x1;
            }, _0x3918fb['_uniform_v' + 'ec4'] = function (_0x259188, _0x432cef) {
                var _0x4cc8c2 = _0x259188['uploadedVa' + 'lue'];
                if (_0x4cc8c2[0x0] !== _0x432cef[0x0] || _0x4cc8c2[0x1] !== _0x432cef[0x1] || _0x4cc8c2[0x2] !== _0x432cef[0x2] || _0x4cc8c2[0x3] !== _0x432cef[0x3])
                    return _0x354f16['mainContex' + 't']['uniform4f'](_0x259188['location'], _0x4cc8c2[0x0] = _0x432cef[0x0], _0x4cc8c2[0x1] = _0x432cef[0x1], _0x4cc8c2[0x2] = _0x432cef[0x2], _0x4cc8c2[0x3] = _0x432cef[0x3]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_v' + 'ec4v'] = function (_0x592816, _0x26ec67) {
                return _0x354f16['mainContex' + 't']['uniform4fv'](_0x592816['location'], _0x26ec67), 0x1;
            }, _0x3918fb['_uniformMa' + 'trix2fv'] = function (_0x19dae4, _0x334675) {
                return _0x354f16['mainContex' + 't']['uniformMat' + 'rix2fv'](_0x19dae4['location'], ![], _0x334675), 0x1;
            }, _0x3918fb['_uniformMa' + 'trix3fv'] = function (_0x531c49, _0x2a8d9e) {
                return _0x354f16['mainContex' + 't']['uniformMat' + 'rix3fv'](_0x531c49['location'], ![], _0x2a8d9e), 0x1;
            }, _0x3918fb['_uniformMa' + 'trix4fv'] = function (_0x4c80ca, _0x1d5808) {
                return _0x354f16['mainContex' + 't']['uniformMat' + 'rix4fv'](_0x4c80ca['location'], ![], _0x1d5808), 0x1;
            }, _0x3918fb['_uniform1i'] = function (_0x2977f7, _0xe9ff57) {
                var _0x66b015 = _0x2977f7['uploadedVa' + 'lue'];
                if (_0x66b015[0x0] !== _0xe9ff57)
                    return _0x354f16['mainContex' + 't']['uniform1i'](_0x2977f7['location'], _0x66b015[0x0] = _0xe9ff57), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform1i' + 'v'] = function (_0x878376, _0x401159) {
                return _0x354f16['mainContex' + 't']['uniform1iv'](_0x878376['location'], _0x401159), 0x1;
            }, _0x3918fb['_uniform_i' + 'vec2'] = function (_0x24f8c8, _0x199cf1) {
                var _0x5f1eb0 = _0x24f8c8['uploadedVa' + 'lue'];
                if (_0x5f1eb0[0x0] !== _0x199cf1[0x0] || _0x5f1eb0[0x1] !== _0x199cf1[0x1])
                    return _0x354f16['mainContex' + 't']['uniform2i'](_0x24f8c8['location'], _0x5f1eb0[0x0] = _0x199cf1[0x0], _0x5f1eb0[0x1] = _0x199cf1[0x1]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_i' + 'vec2v'] = function (_0xac9c19, _0x4e37e4) {
                return _0x354f16['mainContex' + 't']['uniform2iv'](_0xac9c19['location'], _0x4e37e4), 0x1;
            }, _0x3918fb['_uniform_v' + 'ec3i'] = function (_0x5f12bd, _0x380969) {
                var _0x1f576f = _0x5f12bd['uploadedVa' + 'lue'];
                if (_0x1f576f[0x0] !== _0x380969[0x0] || _0x1f576f[0x1] !== _0x380969[0x1] || _0x1f576f[0x2] !== _0x380969[0x2])
                    return _0x354f16['mainContex' + 't']['uniform3i'](_0x5f12bd['location'], _0x1f576f[0x0] = _0x380969[0x0], _0x1f576f[0x1] = _0x380969[0x1], _0x1f576f[0x2] = _0x380969[0x2]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_v' + 'ec3vi'] = function (_0x5510b9, _0x51199e) {
                return _0x354f16['mainContex' + 't']['uniform3iv'](_0x5510b9['location'], _0x51199e), 0x1;
            }, _0x3918fb['_uniform_v' + 'ec4i'] = function (_0x550994, _0x220907) {
                var _0x895333 = _0x550994['uploadedVa' + 'lue'];
                if (_0x895333[0x0] !== _0x220907[0x0] || _0x895333[0x1] !== _0x220907[0x1] || _0x895333[0x2] !== _0x220907[0x2] || _0x895333[0x3] !== _0x220907[0x3])
                    return _0x354f16['mainContex' + 't']['uniform4i'](_0x550994['location'], _0x895333[0x0] = _0x220907[0x0], _0x895333[0x1] = _0x220907[0x1], _0x895333[0x2] = _0x220907[0x2], _0x895333[0x3] = _0x220907[0x3]), 0x1;
                return 0x0;
            }, _0x3918fb['_uniform_v' + 'ec4vi'] = function (_0x3c6869, _0x13e7de) {
                return _0x354f16['mainContex' + 't']['uniform4iv'](_0x3c6869['location'], _0x13e7de), 0x1;
            }, _0x3918fb['_uniform_s' + 'ampler2D'] = function (_0x41778f, _0x3d202d) {
                var _0x4171ba = _0x354f16['mainContex' + 't'], _0x1ff025 = _0x41778f['uploadedVa' + 'lue'];
                return _0x1ff025[0x0] == null ? (_0x1ff025[0x0] = this['_curActTex' + 'Index'], _0x4171ba['uniform1i'](_0x41778f['location'], this['_curActTex' + 'Index']), _0x21b46c['activeText' + 'ure'](_0x4171ba, 0x84c0 + this['_curActTex' + 'Index']), _0x21b46c['bindTextur' + 'e'](_0x4171ba, 0xde1, _0x3d202d), this['_curActTex' + 'Index']++, 0x1) : (_0x21b46c['activeText' + 'ure'](_0x4171ba, 0x84c0 + _0x1ff025[0x0]), _0x21b46c['bindTextur' + 'e'](_0x4171ba, 0xde1, _0x3d202d), 0x0);
            }, _0x3918fb['_uniform_s' + 'amplerCube'] = function (_0x6ccc45, _0x32a510) {
                var _0xa37b9a = _0x354f16['mainContex' + 't'], _0x244fed = _0x6ccc45['uploadedVa' + 'lue'];
                return _0x244fed[0x0] == null ? (_0x244fed[0x0] = this['_curActTex' + 'Index'], _0xa37b9a['uniform1i'](_0x6ccc45['location'], this['_curActTex' + 'Index']), _0x21b46c['activeText' + 'ure'](_0xa37b9a, 0x84c0 + this['_curActTex' + 'Index']), _0x21b46c['bindTextur' + 'e'](_0xa37b9a, 0x8513, _0x32a510), this['_curActTex' + 'Index']++, 0x1) : (_0x21b46c['activeText' + 'ure'](_0xa37b9a, 0x84c0 + _0x244fed[0x0]), _0x21b46c['bindTextur' + 'e'](_0xa37b9a, 0x8513, _0x32a510), 0x0);
            }, _0x3918fb['_noSetValu' + 'e'] = function (_0x358d4b) {
                console['log']('no....:' + _0x358d4b['name']);
            }, _0x3918fb['uploadOne'] = function (_0x9958f7, _0x4f068a) {
                _0x21b46c['useProgram'](_0x354f16['mainContex' + 't'], this['_program']);
                var _0x1a43c9 = this['_paramsMap'][_0x9958f7];
                _0x1a43c9['fun']['call'](this, _0x1a43c9, _0x4f068a);
            }, _0x3918fb['uploadText' + 'ure2D'] = function (_0xf7ab4f) {
                var _0x354c28 = _0x21b46c;
                _0x354c28['_activeTex' + 'tures'][0x0] !== _0xf7ab4f && (_0x354c28['bindTextur' + 'e'](_0x354f16['mainContex' + 't'], _0x354c28['TEXTURE_2D'], _0xf7ab4f), _0x354c28['_activeTex' + 'tures'][0x0] = _0xf7ab4f);
            }, _0x3918fb['upload'] = function (_0x2afa85, _0x178f7e) {
                _0xea7fb6['activeShad' + 'er'] = _0xea7fb6['bindShader'] = this;
                var _0x5d3251 = _0x354f16['mainContex' + 't'];
                _0x21b46c['useProgram'](_0x5d3251, this['_program']);
                this['_reCompile'] ? (_0x178f7e = this['_params'], this['_reCompile'] = ![]) : _0x178f7e = _0x178f7e || this['_params'];
                ;
                var _0x4ccd49, _0x453170, _0x5f1cc4 = _0x178f7e['length'], _0xb51edb = 0x0;
                for (var _0x21f13d = 0x0; _0x21f13d < _0x5f1cc4; _0x21f13d++) {
                    _0x4ccd49 = _0x178f7e[_0x21f13d];
                    if ((_0x453170 = _0x2afa85[_0x4ccd49['name']]) !== null)
                        _0xb51edb += _0x4ccd49['fun']['call'](this, _0x4ccd49, _0x453170);
                }
                _0x29f3e7['shaderCall'] += _0xb51edb;
            }, _0x3918fb['uploadArra' + 'y'] = function (_0x2c3f2f, _0x420beb, _0x338db7) {
                _0xea7fb6['activeShad' + 'er'] = this, _0xea7fb6['bindShader'] = this, _0x21b46c['useProgram'](_0x354f16['mainContex' + 't'], this['_program']);
                var _0x47f8a5 = this['_params'], _0x1310ac, _0x371308, _0x1456f1 = 0x0;
                for (var _0x20b576 = _0x420beb - 0x2; _0x20b576 >= 0x0; _0x20b576 -= 0x2) {
                    _0x371308 = this['_paramsMap'][_0x2c3f2f[_0x20b576]];
                    if (!_0x371308)
                        continue;
                    _0x1310ac = _0x2c3f2f[_0x20b576 + 0x1], _0x1310ac != null && (_0x338db7 && _0x338db7[_0x371308['name']] && _0x338db7[_0x371308['name']]['bind'](), _0x1456f1 += _0x371308['fun']['call'](this, _0x371308, _0x1310ac));
                }
                _0x29f3e7['shaderCall'] += _0x1456f1;
            }, _0x3918fb['getParams'] = function () {
                return this['_params'];
            }, _0x3918fb['setAttribu' + 'tesLocatio' + 'n'] = function (_0x36bcb0) {
                this['_attribInf' + 'o'] = _0x36bcb0;
            }, _0x3b6d05['getShader'] = function (_0x57be90) {
                return _0x3b6d05['sharders'][_0x57be90];
            }, _0x3b6d05['create'] = function (_0x467947, _0x25b6a8, _0x1bc9be, _0x15dd2b, _0x5653d9) {
                return new _0x3b6d05(_0x467947, _0x25b6a8, _0x1bc9be, _0x15dd2b, _0x5653d9);
            }, _0x3b6d05['withCompil' + 'e'] = function (_0x5c078d, _0xf7e1ff, _0x377bb4, _0x13aab1) {
                if (_0x377bb4 && _0x3b6d05['sharders'][_0x377bb4])
                    return _0x3b6d05['sharders'][_0x377bb4];
                var _0xefec10 = _0x3b6d05['_preCompil' + 'eShader'][0.0002 * _0x5c078d];
                if (!_0xefec10)
                    throw new Error('withCompil' + 'e\x20shader\x20e' + 'rr!' + _0x5c078d);
                return _0xefec10['createShad' + 'er'](_0xf7e1ff, _0x377bb4, _0x13aab1, null);
            }, _0x3b6d05['withCompil' + 'e2D'] = function (_0x56ccf0, _0x61fe5, _0x29acf0, _0x2b3966, _0x191c6e, _0x5567e4) {
                if (_0x2b3966 && _0x3b6d05['sharders'][_0x2b3966])
                    return _0x3b6d05['sharders'][_0x2b3966];
                var _0x43921e = _0x3b6d05['_preCompil' + 'eShader'][0.0002 * _0x56ccf0 + _0x61fe5];
                if (!_0x43921e)
                    throw new Error('withCompil' + 'e\x20shader\x20e' + 'rr!' + _0x56ccf0 + '\x20' + _0x61fe5);
                return _0x43921e['createShad' + 'er'](_0x29acf0, _0x2b3966, _0x191c6e, _0x5567e4);
            }, _0x3b6d05['addInclude'] = function (_0x31e34c, _0x23fcc0) {
                _0x1fc93b['addInclude'](_0x31e34c, _0x23fcc0);
            }, _0x3b6d05['preCompile'] = function (_0x35ebd2, _0x5b8178, _0x41b218, _0xbb5faf) {
                var _0x5a991d = 0.0002 * _0x35ebd2;
                _0x3b6d05['_preCompil' + 'eShader'][_0x5a991d] = new _0x1fc93b(_0x5b8178, _0x41b218, _0xbb5faf);
            }, _0x3b6d05['preCompile' + '2D'] = function (_0x1d4d97, _0x1f5935, _0x1833a0, _0x4b1f12, _0x14000d) {
                var _0x38334e = 0.0002 * _0x1d4d97 + _0x1f5935;
                _0x3b6d05['_preCompil' + 'eShader'][_0x38334e] = new _0x1fc93b(_0x1833a0, _0x4b1f12, _0x14000d);
            }, _0x3b6d05['_createSha' + 'der'] = function (_0x221e7b, _0x14755b, _0x575dc7) {
                var _0x179cfc = _0x221e7b['createShad' + 'er'](_0x575dc7);
                return _0x221e7b['shaderSour' + 'ce'](_0x179cfc, _0x14755b), _0x221e7b['compileSha' + 'der'](_0x179cfc), _0x221e7b['getShaderP' + 'arameter'](_0x179cfc, 0x8b81) ? _0x179cfc : (console['log'](_0x221e7b['getShaderI' + 'nfoLog'](_0x179cfc)), null);
            }, _0x3b6d05['_count'] = 0x0, _0x3b6d05['_preCompil' + 'eShader'] = {}, _0x3b6d05['SHADERNAME' + '2ID'] = 0.0002, _0x3b6d05['sharders'] = new Array(0x20), _0x3a2911(_0x3b6d05, [
                'nameKey',
                function () {
                    return this['nameKey'] = new _0x3c672c();
                }
            ]), _0x3b6d05;
        }(_0xea7fb6), _0x4a9aac = function (_0xab74fe) {
            function _0x42872c(_0x27f786, _0x225a25, _0x297562, _0x1ea2d4) {
                this['_mgrKey'] = 0x0, _0x297562 === void 0x0 && (_0x297562 = 0x0), _0x1ea2d4 === void 0x0 && (_0x1ea2d4 = 0x0), _0x42872c['__super']['call'](this, _0x297562, ![]), this['_glTexture' + 'Type'] = 0xde1, this['_width'] = _0x27f786, this['_height'] = _0x225a25, this['_depthSten' + 'cilFormat'] = _0x1ea2d4, this['_create'](_0x27f786, _0x225a25);
            }
            _0x199b5b(_0x42872c, 'laya.webgl' + '.resource.' + 'RenderText' + 'ure2D', _0xab74fe);
            var _0x50dea7 = _0x42872c['prototype'];
            return _0x50dea7['getIsReady'] = function () {
                return !![];
            }, _0x50dea7['_create'] = function (_0xa7eda2, _0x7cce26) {
                var _0x536471 = _0x33edbf['instance'];
                this['_frameBuff' + 'er'] = _0x536471['createFram' + 'ebuffer'](), _0x21b46c['bindTextur' + 'e'](_0x536471, this['_glTexture' + 'Type'], this['_glTexture']);
                var _0x242cba = this['_getGLForm' + 'at']();
                _0x536471['texImage2D'](this['_glTexture' + 'Type'], 0x0, _0x242cba, _0xa7eda2, _0x7cce26, 0x0, _0x242cba, 0x1401, null), this['_setGPUMem' + 'ory'](_0xa7eda2 * _0x7cce26 * 0x4), _0x536471['bindFrameb' + 'uffer'](0x8d40, this['_frameBuff' + 'er']), _0x536471['framebuffe' + 'rTexture2D'](0x8d40, 0x8ce0, 0xde1, this['_glTexture'], 0x0);
                if (this['_depthSten' + 'cilFormat'] !== 0x3) {
                    this['_depthSten' + 'cilBuffer'] = _0x536471['createRend' + 'erbuffer'](), _0x536471['bindRender' + 'buffer'](0x8d41, this['_depthSten' + 'cilBuffer']);
                    switch (this['_depthSten' + 'cilFormat']) {
                    case 0x0:
                        _0x536471['renderbuff' + 'erStorage'](0x8d41, 0x81a5, _0xa7eda2, _0x7cce26), _0x536471['framebuffe' + 'rRenderbuf' + 'fer'](0x8d40, 0x8d00, 0x8d41, this['_depthSten' + 'cilBuffer']);
                        break;
                    case 0x1:
                        _0x536471['renderbuff' + 'erStorage'](0x8d41, 0x8d48, _0xa7eda2, _0x7cce26), _0x536471['framebuffe' + 'rRenderbuf' + 'fer'](0x8d40, 0x8d20, 0x8d41, this['_depthSten' + 'cilBuffer']);
                        break;
                    case 0x2:
                        _0x536471['renderbuff' + 'erStorage'](0x8d41, 0x84f9, _0xa7eda2, _0x7cce26), _0x536471['framebuffe' + 'rRenderbuf' + 'fer'](0x8d40, 0x821a, 0x8d41, this['_depthSten' + 'cilBuffer']);
                        break;
                    default:
                        console['log']('RenderText' + 'ure:\x20unkon' + 'w\x20depth\x20fo' + 'rmat.');
                    }
                }
                _0x536471['bindFrameb' + 'uffer'](0x8d40, null), _0x536471['bindRender' + 'buffer'](0x8d41, null), this['_setWarpMo' + 'de'](0x2802, this['_wrapModeU']), this['_setWarpMo' + 'de'](0x2803, this['_wrapModeV']), this['_setFilter' + 'Mode'](this['_filterMod' + 'e']), this['_setAnisot' + 'ropy'](this['_anisoLeve' + 'l']), this['_readyed'] = !![], this['_activeRes' + 'ource']();
            }, _0x50dea7['generateMi' + 'pmap'] = function () {
                this['_isPot'](this['width']) && this['_isPot'](this['height']) ? (this['_mipmap'] = !![], _0x33edbf['instance']['generateMi' + 'pmap'](this['_glTexture' + 'Type']), this['_setFilter' + 'Mode'](this['_filterMod' + 'e']), this['_setGPUMem' + 'ory'](this['width'] * this['height'] * 0x4 * (0x1 + 0x1 / 0x3))) : (this['_mipmap'] = ![], this['_setGPUMem' + 'ory'](this['width'] * this['height'] * 0x4));
            }, _0x50dea7['start'] = function () {
                var _0x297b39 = _0x33edbf['instance'];
                _0x33edbf['instance']['bindFrameb' + 'uffer'](0x8d40, this['_frameBuff' + 'er']), _0x42872c['_currentAc' + 'tive'] = this, this['_readyed'] = !![], _0x297b39['viewport'](0x0, 0x0, this['_width'], this['_height']), this['_lastWidth'] = _0x5c6236['width'], this['_lastHeigh' + 't'] = _0x5c6236['height'], _0x5c6236['width'] = this['_width'], _0x5c6236['height'] = this['_height'], _0xea7fb6['activeShad' + 'er'] = null;
            }, _0x50dea7['end'] = function () {
                _0x33edbf['instance']['bindFrameb' + 'uffer'](0x8d40, null), _0x42872c['_currentAc' + 'tive'] = null, this['_readyed'] = !![];
            }, _0x50dea7['restore'] = function () {
                var _0x163fdd = _0x33edbf['instance'];
                this['_lastRT'] != _0x42872c['_currentAc' + 'tive'] && (_0x33edbf['instance']['bindFrameb' + 'uffer'](0x8d40, this['_lastRT'] ? this['_lastRT']['_frameBuff' + 'er'] : null), _0x42872c['_currentAc' + 'tive'] = this['_lastRT']), this['_readyed'] = !![], _0x163fdd['viewport'](0x0, 0x0, this['_lastWidth'], this['_lastHeigh' + 't']), _0x5c6236['width'] = this['_lastWidth'], _0x5c6236['height'] = this['_lastHeigh' + 't'], _0xea7fb6['activeShad' + 'er'] = null;
            }, _0x50dea7['clear'] = function (_0x29049a, _0x562f97, _0x19f2ea, _0x7a700c) {
                _0x29049a === void 0x0 && (_0x29049a = 0x0), _0x562f97 === void 0x0 && (_0x562f97 = 0x0), _0x19f2ea === void 0x0 && (_0x19f2ea = 0x0), _0x7a700c === void 0x0 && (_0x7a700c = 0x1);
                var _0x34f8a0 = _0x33edbf['instance'];
                _0x34f8a0['clearColor'](_0x29049a, _0x562f97, _0x19f2ea, _0x7a700c);
                var _0x46cd28 = 0x4000;
                switch (this['_depthSten' + 'cilFormat']) {
                case 0x81a5:
                    _0x46cd28 |= 0x100;
                    break;
                case 0x8d48:
                    _0x46cd28 |= 0x400;
                    break;
                case 0x84f9:
                    _0x46cd28 |= 0x100, _0x46cd28 |= 0x400;
                    break;
                }
                _0x34f8a0['clear'](_0x46cd28);
            }, _0x50dea7['getData'] = function (_0x41185d, _0x22d3a5, _0x2e7ad2, _0xd2f8fd) {
                var _0x4cad31 = _0x33edbf['instance'];
                _0x4cad31['bindFrameb' + 'uffer'](0x8d40, this['_frameBuff' + 'er']);
                var _0x3482c4 = _0x4cad31['checkFrame' + 'bufferStat' + 'us'](0x8d40) === 0x8cd5;
                if (!_0x3482c4)
                    return _0x4cad31['bindFrameb' + 'uffer'](0x8d40, null), null;
                ;
                var _0x5a7730 = new Uint8Array(this['_width'] * this['_height'] * 0x4), _0x2f0a83 = this['_getGLForm' + 'at']();
                return _0x4cad31['readPixels'](_0x41185d, _0x22d3a5, _0x2e7ad2, _0xd2f8fd, _0x2f0a83, 0x1401, _0x5a7730), _0x4cad31['bindFrameb' + 'uffer'](0x8d40, null), _0x5a7730;
            }, _0x50dea7['recycle'] = function () {
            }, _0x50dea7['_disposeRe' + 'source'] = function () {
                if (this['_frameBuff' + 'er']) {
                    var _0x3d17a4 = _0x33edbf['instance'];
                    _0x3d17a4['deleteText' + 'ure'](this['_glTexture']), _0x3d17a4['deleteFram' + 'ebuffer'](this['_frameBuff' + 'er']), _0x3d17a4['deleteRend' + 'erbuffer'](this['_depthSten' + 'cilBuffer']), this['_glTexture'] = null, this['_frameBuff' + 'er'] = null, this['_depthSten' + 'cilBuffer'] = null, this['_setGPUMem' + 'ory'](0x0);
                }
            }, _0x3a2bd3(0x0, _0x50dea7, 'depthStenc' + 'ilFormat', function () {
                return this['_depthSten' + 'cilFormat'];
            }), _0x3a2bd3(0x0, _0x50dea7, 'defaulteTe' + 'xture', function () {
                return _0x466364['grayTextur' + 'e'];
            }), _0x3a2bd3(0x0, _0x50dea7, 'sourceWidt' + 'h', function () {
                return this['_width'];
            }), _0x3a2bd3(0x0, _0x50dea7, 'sourceHeig' + 'ht', function () {
                return this['_height'];
            }), _0x3a2bd3(0x0, _0x50dea7, 'offsetX', function () {
                return 0x0;
            }), _0x3a2bd3(0x0, _0x50dea7, 'offsetY', function () {
                return 0x0;
            }), _0x3a2bd3(0x1, _0x42872c, 'currentAct' + 'ive', function () {
                return _0x42872c['_currentAc' + 'tive'];
            }, laya['webgl']['resource']['BaseTextur' + 'e']['_$SET_curr' + 'entActive']), _0x42872c['pushRT'] = function () {
                _0x42872c['rtStack']['push']({
                    'rt': _0x42872c['_currentAc' + 'tive'],
                    'w': _0x5c6236['width'],
                    'h': _0x5c6236['height']
                });
            }, _0x42872c['popRT'] = function () {
                var _0x1571d4 = _0x33edbf['instance'], _0x21c990 = _0x42872c['rtStack']['pop']();
                _0x21c990 && (_0x42872c['_currentAc' + 'tive'] != _0x21c990['rt'] && (_0x33edbf['instance']['bindFrameb' + 'uffer'](0x8d40, _0x21c990['rt'] ? _0x21c990['rt']['_frameBuff' + 'er'] : null), _0x42872c['_currentAc' + 'tive'] = _0x21c990['rt']), _0x1571d4['viewport'](0x0, 0x0, _0x21c990['w'], _0x21c990['h']), _0x5c6236['width'] = _0x21c990['w'], _0x5c6236['height'] = _0x21c990['h']);
            }, _0x42872c['_currentAc' + 'tive'] = null, _0x42872c['rtStack'] = [], _0x3a2911(_0x42872c, [
                'defuv',
                function () {
                    return this['defuv'] = [
                        0x0,
                        0x0,
                        0x1,
                        0x0,
                        0x1,
                        0x1,
                        0x0,
                        0x1
                    ];
                },
                'flipyuv',
                function () {
                    return this['flipyuv'] = [
                        0x0,
                        0x1,
                        0x1,
                        0x1,
                        0x1,
                        0x0,
                        0x0,
                        0x0
                    ];
                }
            ]), _0x42872c;
        }(_0x33e7f4), _0x466364 = function (_0x37b656) {
            function _0x431856(_0x2fd790, _0x1ce891, _0x549a79, _0x4d94fc, _0x52d358) {
                _0x2fd790 === void 0x0 && (_0x2fd790 = 0x0), _0x1ce891 === void 0x0 && (_0x1ce891 = 0x0), _0x549a79 === void 0x0 && (_0x549a79 = 0x1), _0x4d94fc === void 0x0 && (_0x4d94fc = !![]), _0x52d358 === void 0x0 && (_0x52d358 = ![]), _0x431856['__super']['call'](this, _0x549a79, _0x4d94fc), this['_glTexture' + 'Type'] = 0xde1, this['_width'] = _0x2fd790, this['_height'] = _0x1ce891, this['_canRead'] = _0x52d358, this['_setWarpMo' + 'de'](0x2802, this['_wrapModeU']), this['_setWarpMo' + 'de'](0x2803, this['_wrapModeV']), _0x5a5989['is2DPixelA' + 'rtGame'] && (this['_filterMod' + 'e'] = 0x0), this['_setFilter' + 'Mode'](this['_filterMod' + 'e']), this['_setAnisot' + 'ropy'](this['_anisoLeve' + 'l']);
            }
            _0x199b5b(_0x431856, 'laya.webgl' + '.resource.' + 'Texture2D', _0x37b656);
            var _0x408441 = _0x431856['prototype'];
            return _0x408441['_calcualat' + 'esCompress' + 'edDataSize'] = function (_0x205e25, _0x40566e, _0x159a3f) {
                switch (_0x205e25) {
                case 0x3:
                case 0x5:
                    return (_0x40566e + 0x3 >> 0x2) * (_0x159a3f + 0x3 >> 0x2) * 0x8;
                case 0x4:
                    return (_0x40566e + 0x3 >> 0x2) * (_0x159a3f + 0x3 >> 0x2) * 0x10;
                case 0xb:
                case 0xc:
                    return Math['floor']((Math['max'](_0x40566e, 0x8) * Math['max'](_0x159a3f, 0x8) * 0x4 + 0x7) / 0x8);
                case 0x9:
                case 0xa:
                    return Math['floor']((Math['max'](_0x40566e, 0x10) * Math['max'](_0x159a3f, 0x8) * 0x2 + 0x7) / 0x8);
                default:
                    return 0x0;
                }
            }, _0x408441['_pharseDDS'] = function (_0x15ef5a) {
                var _0x40b2bc = 0x31545844, _0x289122 = 0x35545844, _0x4459f8 = 0x4, _0x248f98 = 0x20000, _0x4ea6c3 = 0x20534444, _0x4d3b4c = 0x1f, _0x4b3540 = 0x0, _0x17c7e3 = 0x1, _0x232687 = 0x2, _0xfcab84 = 0x3, _0x22be5d = 0x4, _0x347221 = 0x7, _0x26b0e0 = 0x14, _0x3d1936 = 0x15, _0x4eaf1d = new Int32Array(_0x15ef5a, 0x0, _0x4d3b4c);
                if (_0x4eaf1d[_0x4b3540] != _0x4ea6c3)
                    throw 'Invalid\x20ma' + 'gic\x20number' + '\x20in\x20DDS\x20he' + 'ader';
                if (!(_0x4eaf1d[_0x26b0e0] & _0x4459f8))
                    throw 'Unsupporte' + 'd\x20format,\x20' + 'must\x20conta' + 'in\x20a\x20FourC' + 'C\x20code';
                var _0x4e6191 = _0x4eaf1d[_0x3d1936];
                switch (this['_format']) {
                case 0x3:
                    if (_0x4e6191 !== _0x40b2bc)
                        throw 'the\x20FourCC' + '\x20code\x20is\x20n' + 'ot\x20same\x20wi' + 'th\x20texture' + '\x20format.';
                    break;
                case 0x4:
                    if (_0x4e6191 !== _0x289122)
                        throw 'the\x20FourCC' + '\x20code\x20is\x20n' + 'ot\x20same\x20wi' + 'th\x20texture' + '\x20format.';
                    break;
                default:
                    throw 'unknown\x20te' + 'xture\x20form' + 'at.';
                }
                ;
                var _0x49b377 = 0x1;
                if (_0x4eaf1d[_0x232687] & _0x248f98) {
                    _0x49b377 = Math['max'](0x1, _0x4eaf1d[_0x347221]);
                    if (!this['_mipmap'])
                        throw 'the\x20mipmap' + '\x20is\x20not\x20sa' + 'me\x20with\x20Te' + 'xture2D.';
                } else {
                    if (this['_mipmap'])
                        throw 'the\x20mipmap' + '\x20is\x20not\x20sa' + 'me\x20with\x20Te' + 'xture2D.';
                }
                ;
                var _0x18be3c = _0x4eaf1d[_0x22be5d], _0x1dac11 = _0x4eaf1d[_0xfcab84];
                this['_width'] = _0x18be3c, this['_height'] = _0x1dac11;
                var _0x14192b = _0x4eaf1d[_0x17c7e3] + 0x4;
                this['_upLoadCom' + 'pressedTex' + 'Image2D'](_0x15ef5a, _0x18be3c, _0x1dac11, _0x49b377, _0x14192b, 0x0);
            }, _0x408441['_pharseKTX'] = function (_0x4a081d) {
                var _0x9ccb0 = 0x0, _0x445db1 = 0x1, _0x1ea6f6 = 0x2, _0x4a2ba6 = 0x3, _0x4ee5df = 0x6, _0x124cee = 0x3525650, _0x1717e5 = 0xd, _0x361f28 = 0x4, _0x242cd2 = 0x7, _0x5ba9bb = 0x6, _0x3fee13 = 0xb, _0x3cd109 = 0xc, _0x97da7f = new Uint8Array(_0x4a081d, 0x0, 0xc);
                if (_0x97da7f[0x0] != 0xab || _0x97da7f[0x1] != 0x4b || _0x97da7f[0x2] != 0x54 || _0x97da7f[0x3] != 0x58 || _0x97da7f[0x4] != 0x20 || _0x97da7f[0x5] != 0x31 || _0x97da7f[0x6] != 0x31 || _0x97da7f[0x7] != 0xbb || _0x97da7f[0x8] != 0xd || _0x97da7f[0x9] != 0xa || _0x97da7f[0xa] != 0x1a || _0x97da7f[0xb] != 0xa)
                    throw 'Invalid\x20fi' + 'leIdentifi' + 'er\x20in\x20KTX\x20' + 'header';
                var _0x25638b = new Int32Array(_0x97da7f['buffer'], _0x97da7f['length'], _0x1717e5), _0xba5bb5 = _0x25638b[_0x361f28], _0x4df6b8 = this['_getGLForm' + 'at']();
                switch (this['_format']) {
                case 0x5:
                    if (_0xba5bb5 !== _0x4df6b8)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_ETC1RGB.';
                    break;
                default:
                    throw 'unknown\x20te' + 'xture\x20form' + 'at.';
                }
                ;
                var _0x227bb1 = _0x25638b[_0x3fee13], _0x3d2b74 = _0x25638b[_0x5ba9bb], _0x13a217 = _0x25638b[_0x242cd2];
                this['_width'] = _0x3d2b74, this['_height'] = _0x13a217;
                var _0x2a2692 = 0x40 + _0x25638b[_0x3cd109];
                this['_upLoadCom' + 'pressedTex' + 'Image2D'](_0x4a081d, _0x3d2b74, _0x13a217, _0x227bb1, _0x2a2692, 0x4);
            }, _0x408441['_pharsePVR'] = function (_0xc2086d) {
                var _0x545b30 = 0x0, _0x1a7e82 = 0x1, _0x3d0189 = 0x2, _0x825617 = 0x3, _0x586cab = 0x6, _0x2c1a62 = 0x3525650, _0x3e501b = 0xd, _0x5914ff = 0x0, _0x5d6da9 = 0x2, _0x1659a6 = 0x6, _0x16385d = 0x7, _0x13c10f = 0xb, _0x37bbd0 = 0xc, _0x55d802 = new Int32Array(_0xc2086d, 0x0, _0x3e501b);
                if (_0x55d802[_0x5914ff] != _0x2c1a62)
                    throw 'Invalid\x20ma' + 'gic\x20number' + '\x20in\x20PVR\x20he' + 'ader';
                var _0x2c2045 = _0x55d802[_0x5d6da9];
                switch (this['_format']) {
                case 0x5:
                    if (_0x2c2045 !== _0x586cab)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_ETC1RGB.';
                    break;
                case 0x9:
                    if (_0x2c2045 !== _0x545b30)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_PVRTCRGB_' + '2BPPV.';
                    break;
                case 0xb:
                    if (_0x2c2045 !== _0x3d0189)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_PVRTCRGB_' + '4BPPV.';
                    break;
                case 0xa:
                    if (_0x2c2045 !== _0x1a7e82)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_PVRTCRGBA' + '_2BPPV.';
                    break;
                case 0xc:
                    if (_0x2c2045 !== _0x825617)
                        throw 'the\x20format' + '\x20\x20is\x20not\x20s' + 'ame\x20with\x20t' + 'exture\x20for' + 'mat\x20FORMAT' + '_PVRTCRGBA' + '_4BPPV.';
                    break;
                default:
                    throw 'unknown\x20te' + 'xture\x20form' + 'at.';
                }
                ;
                var _0x2fd76c = _0x55d802[_0x13c10f], _0xc1a51d = _0x55d802[_0x16385d], _0x5f5057 = _0x55d802[_0x1659a6];
                this['_width'] = _0xc1a51d, this['_height'] = _0x5f5057;
                var _0x31c453 = _0x55d802[_0x37bbd0] + 0x34;
                this['_upLoadCom' + 'pressedTex' + 'Image2D'](_0xc2086d, _0xc1a51d, _0x5f5057, _0x2fd76c, _0x31c453, 0x0);
            }, _0x408441['_upLoadCom' + 'pressedTex' + 'Image2D'] = function (_0xbe9338, _0x24cb10, _0x13b1d7, _0x3512e4, _0x467a4b, _0x398a1b) {
                var _0x57f1ed = _0x33edbf['instance'], _0xbc3368 = this['_glTexture' + 'Type'];
                _0x21b46c['bindTextur' + 'e'](_0x57f1ed, _0xbc3368, this['_glTexture']);
                var _0x34adae = this['_getGLForm' + 'at'](), _0x1a9205 = _0x467a4b;
                for (var _0x4dc4c5 = 0x0; _0x4dc4c5 < _0x3512e4; _0x4dc4c5++) {
                    _0x1a9205 += _0x398a1b;
                    var _0x561d61 = this['_calcualat' + 'esCompress' + 'edDataSize'](this['_format'], _0x24cb10, _0x13b1d7), _0x2cf24c = new Uint8Array(_0xbe9338, _0x1a9205, _0x561d61);
                    _0x57f1ed['compressed' + 'TexImage2D'](_0xbc3368, _0x4dc4c5, _0x34adae, _0x24cb10, _0x13b1d7, 0x0, _0x2cf24c), _0x24cb10 = _0x24cb10 >> 0x1, _0x13b1d7 = _0x13b1d7 >> 0x1, _0x1a9205 += _0x561d61;
                }
                ;
                var _0x17bcb2 = _0x1a9205;
                this['_setGPUMem' + 'ory'](_0x17bcb2), this['_readyed'] = !![], this['_activeRes' + 'ource']();
            }, _0x408441['loadImageS' + 'ource'] = function (_0x1519ec, _0x430ffa) {
                _0x430ffa === void 0x0 && (_0x430ffa = ![]);
                var _0x39cc65 = _0x1519ec['width'], _0x4771b2 = _0x1519ec['height'];
                this['_width'] = _0x39cc65, this['_height'] = _0x4771b2, this['_setWarpMo' + 'de'](0x2802, this['_wrapModeU']), this['_setWarpMo' + 'de'](0x2803, this['_wrapModeV']), this['_setFilter' + 'Mode'](this['_filterMod' + 'e']);
                var _0x2adcd7 = _0x33edbf['instance'];
                _0x21b46c['bindTextur' + 'e'](_0x2adcd7, this['_glTexture' + 'Type'], this['_glTexture']);
                var _0x336bd3 = this['_getGLForm' + 'at']();
                _0x30d89b['isConchApp'] ? (_0x1519ec['setPremult' + 'iplyAlpha'](_0x430ffa), _0x2adcd7['texImage2D'](this['_glTexture' + 'Type'], 0x0, 0x1908, 0x1908, 0x1401, _0x1519ec)) : (_0x430ffa && _0x2adcd7['pixelStore' + 'i'](0x9241, !![]), _0x2adcd7['texImage2D'](this['_glTexture' + 'Type'], 0x0, _0x336bd3, _0x336bd3, 0x1401, _0x1519ec), _0x430ffa && _0x2adcd7['pixelStore' + 'i'](0x9241, ![])), this['_mipmap'] && this['_isPot'](_0x39cc65) && this['_isPot'](_0x4771b2) ? (_0x2adcd7['generateMi' + 'pmap'](this['_glTexture' + 'Type']), this['_setGPUMem' + 'ory'](_0x39cc65 * _0x4771b2 * 0x4 * (0x1 + 0x1 / 0x3))) : this['_setGPUMem' + 'ory'](_0x39cc65 * _0x4771b2 * 0x4), this['_canRead'] && (_0x30d89b['isConchApp'] ? this['_pixels'] = new Uint8Array(_0x1519ec['_nativeObj']['getImageDa' + 'ta'](0x0, 0x0, _0x39cc65, _0x4771b2)) : (_0x3592ad['canvas']['size'](_0x39cc65, _0x4771b2), _0x3592ad['canvas']['clear'](), _0x3592ad['context']['drawImage'](_0x1519ec, 0x0, 0x0, _0x39cc65, _0x4771b2), this['_pixels'] = new Uint8Array(_0x3592ad['context']['getImageDa' + 'ta'](0x0, 0x0, _0x39cc65, _0x4771b2)['data']['buffer']))), this['_readyed'] = !![], this['_activeRes' + 'ource']();
            }, _0x408441['setPixels'] = function (_0x2cf1c8, _0x2dd982) {
                _0x2dd982 === void 0x0 && (_0x2dd982 = 0x0);
                if (!_0x2cf1c8)
                    throw 'Texture2D:' + 'pixels\x20can' + '\x27t\x20be\x20null' + '.';
                var _0x4709b4 = this['_width'], _0x374604 = this['_height'], _0xff663f = _0x33edbf['instance'], _0x49b0de = this['_glTexture' + 'Type'];
                _0x21b46c['bindTextur' + 'e'](_0xff663f, _0x49b0de, this['_glTexture']);
                var _0x46f17a = this['_getGLForm' + 'at']();
                _0xff663f['texImage2D'](_0x49b0de, _0x2dd982, _0x46f17a, _0x4709b4, _0x374604, 0x0, _0x46f17a, 0x1401, _0x2cf1c8);
                this['_mipmap'] && this['_isPot'](_0x4709b4) && this['_isPot'](_0x374604) ? (_0xff663f['generateMi' + 'pmap'](_0x49b0de), this['_setGPUMem' + 'ory'](_0x4709b4 * _0x374604 * 0x4 * (0x1 + 0x1 / 0x3))) : this['_setGPUMem' + 'ory'](_0x4709b4 * _0x374604 * 0x4);
                if (this['_canRead'])
                    this['_pixels'] = _0x2cf1c8;
                this['_readyed'] = !![], this['_activeRes' + 'ource']();
            }, _0x408441['setCompres' + 'sData'] = function (_0x19da5d) {
                switch (this['_format']) {
                case 0x3:
                case 0x4:
                    this['_pharseDDS'](_0x19da5d);
                    break;
                case 0x5:
                    this['_pharseKTX'](_0x19da5d);
                    break;
                case 0x9:
                case 0xa:
                case 0xb:
                case 0xc:
                    this['_pharsePVR'](_0x19da5d);
                    break;
                default:
                    throw 'Texture2D:' + 'unkonwn\x20fo' + 'rmat.';
                }
            }, _0x408441['_recoverRe' + 'source'] = function () {
            }, _0x408441['getPixels'] = function () {
                if (this['_canRead'])
                    return this['_pixels'];
                else
                    throw new Error('Texture2D:' + '\x20must\x20set\x20' + 'texture\x20ca' + 'nRead\x20is\x20t' + 'rue.');
            }, _0x3a2bd3(0x0, _0x408441, 'defaulteTe' + 'xture', function () {
                return laya['webgl']['resource']['Texture2D']['grayTextur' + 'e'];
            }), _0x431856['__init__'] = function () {
                var _0x54ffe5 = new Uint8Array(0x3);
                _0x54ffe5[0x0] = 0x80, _0x54ffe5[0x1] = 0x80, _0x54ffe5[0x2] = 0x80, _0x431856['grayTextur' + 'e'] = new _0x431856(0x1, 0x1, 0x0, ![], ![]), _0x431856['grayTextur' + 'e']['setPixels'](_0x54ffe5), _0x431856['grayTextur' + 'e']['lock'] = !![];
            }, _0x431856['_parse'] = function (_0x399a4e, _0x300410, _0x5502a5) {
                var _0x274020 = _0x5502a5 ? new _0x431856(_0x5502a5[0x0], _0x5502a5[0x1], _0x5502a5[0x2], _0x5502a5[0x3], _0x5502a5[0x4]) : new _0x431856(0x0, 0x0);
                _0x300410 && (_0x274020['wrapModeU'] = _0x300410['wrapModeU'], _0x274020['wrapModeV'] = _0x300410['wrapModeV'], _0x274020['filterMode'] = _0x300410['filterMode'], _0x274020['anisoLevel'] = _0x300410['anisoLevel']);
                switch (_0x274020['_format']) {
                case 0x0:
                case 0x1:
                    _0x274020['loadImageS' + 'ource'](_0x399a4e);
                    break;
                case 0x3:
                case 0x4:
                case 0x5:
                case 0x9:
                case 0xa:
                case 0xb:
                case 0xc:
                    _0x274020['setCompres' + 'sData'](_0x399a4e);
                    break;
                default:
                    throw 'Texture2D:' + 'unkonwn\x20fo' + 'rmat.';
                }
                return _0x274020;
            }, _0x431856['load'] = function (_0x97f925, _0x2ee85c) {
                _0x4a6519['loader']['create'](_0x97f925, _0x2ee85c, null, 'TEXTURE2D');
            }, _0x431856['grayTextur' + 'e'] = null, _0x431856;
        }(_0x33e7f4), _0x123b81 = function (_0x2ef8bb) {
            function _0x5a51d2(_0x32a229, _0x44bdb8, _0x32a6ee, _0x1068c8, _0x3de49d) {
                this['_params2dQ' + 'uick2'] = null, this['_shaderVal' + 'ueWidth'] = 0x0, this['_shaderVal' + 'ueHeight'] = 0x0, _0x5a51d2['__super']['call'](this, _0x32a229, _0x44bdb8, _0x32a6ee, _0x1068c8, _0x3de49d);
            }
            _0x199b5b(_0x5a51d2, 'laya.webgl' + '.shader.d2' + '.Shader2X', _0x2ef8bb);
            var _0x3525bf = _0x5a51d2['prototype'];
            return _0x3525bf['_disposeRe' + 'source'] = function () {
                _0x2ef8bb['prototype']['_disposeRe' + 'source']['call'](this), this['_params2dQ' + 'uick2'] = null;
            }, _0x3525bf['upload2dQu' + 'ick2'] = function (_0x3e4846) {
                this['upload'](_0x3e4846, this['_params2dQ' + 'uick2'] || this['_make2dQui' + 'ck2']());
            }, _0x3525bf['_make2dQui' + 'ck2'] = function () {
                if (!this['_params2dQ' + 'uick2']) {
                    this['_params2dQ' + 'uick2'] = [];
                    var _0x461167 = this['_params'], _0x3ae4ef;
                    for (var _0x35e1f9 = 0x0, _0x3b52e8 = _0x461167['length']; _0x35e1f9 < _0x3b52e8; _0x35e1f9++) {
                        _0x3ae4ef = _0x461167[_0x35e1f9];
                        if (_0x3ae4ef['name'] !== 'size')
                            this['_params2dQ' + 'uick2']['push'](_0x3ae4ef);
                    }
                }
                return this['_params2dQ' + 'uick2'];
            }, _0x5a51d2['create'] = function (_0x4c4bfa, _0x37f197, _0x5393e2, _0x14776a, _0x3c387b) {
                return new _0x5a51d2(_0x4c4bfa, _0x37f197, _0x5393e2, _0x14776a, _0x3c387b);
            }, _0x5a51d2;
        }(_0x3ca794);
    _0x4a6519['__init']([
        _0x231b8b,
        _0x1842c0,
        _0x23a596
    ]);
}(window, document, Laya));