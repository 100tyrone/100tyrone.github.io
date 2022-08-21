(function (_0x54fb7b, _0x2f43f6) {
    'use strict';
    class _0x2c6b3f {
        constructor() {
        }
    }
    class _0x2198ad {
        constructor() {
        }
    }
    class _0x106d16 extends _0x2f43f6['EventDispa' + 'tcher'] {
        constructor(_0xe1c2c) {
            super(), this['onDeviceOr' + 'ientationC' + 'hange'] = this['onDeviceOr' + 'ientationC' + 'hange']['bind'](this);
        }
        static get ['instance']() {
            return _0x106d16['_instance'] = _0x106d16['_instance'] || new _0x106d16(0x0), _0x106d16['_instance'];
        }
        ['on'](_0x5db842, _0x1f15e7, _0x198806, _0x502f40 = null) {
            return super['on'](_0x5db842, _0x1f15e7, _0x198806, _0x502f40), _0x2f43f6['Browser']['window']['addEventLi' + 'stener']('devicemoti' + 'on', this['onDeviceOr' + 'ientationC' + 'hange']), this;
        }
        ['off'](_0x16a06f, _0x49876e, _0x106155, _0x3a36d3 = ![]) {
            if (!this['hasListene' + 'r'](_0x16a06f))
                _0x2f43f6['Browser']['window']['removeEven' + 'tListener']('devicemoti' + 'on', this['onDeviceOr' + 'ientationC' + 'hange']);
            return super['off'](_0x16a06f, _0x49876e, _0x106155, _0x3a36d3);
        }
        ['onDeviceOr' + 'ientationC' + 'hange'](_0x758c0e) {
            var _0x3a09e1 = _0x758c0e['interval'];
            _0x106d16['accelerati' + 'on']['x'] = _0x758c0e['accelerati' + 'on']['x'], _0x106d16['accelerati' + 'on']['y'] = _0x758c0e['accelerati' + 'on']['y'], _0x106d16['accelerati' + 'on']['z'] = _0x758c0e['accelerati' + 'on']['z'], _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['x'] = _0x758c0e['accelerati' + 'onIncludin' + 'gGravity']['x'], _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['y'] = _0x758c0e['accelerati' + 'onIncludin' + 'gGravity']['y'], _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['z'] = _0x758c0e['accelerati' + 'onIncludin' + 'gGravity']['z'], _0x106d16['rotationRa' + 'te']['alpha'] = _0x758c0e['rotationRa' + 'te']['gamma'] * -0x1, _0x106d16['rotationRa' + 'te']['beta'] = _0x758c0e['rotationRa' + 'te']['alpha'] * -0x1, _0x106d16['rotationRa' + 'te']['gamma'] = _0x758c0e['rotationRa' + 'te']['beta'];
            if (_0x2f43f6['Browser']['onAndroid'])
                _0x2f43f6['Browser']['userAgent']['indexOf']('Chrome') > -0x1 && (_0x106d16['rotationRa' + 'te']['alpha'] *= 0xb4 / Math['PI'], _0x106d16['rotationRa' + 'te']['beta'] *= 0xb4 / Math['PI'], _0x106d16['rotationRa' + 'te']['gamma'] *= 0xb4 / Math['PI']), _0x106d16['accelerati' + 'on']['x'] *= -0x1, _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['x'] *= -0x1;
            else
                _0x2f43f6['Browser']['onIOS'] && (_0x106d16['accelerati' + 'on']['y'] *= -0x1, _0x106d16['accelerati' + 'on']['z'] *= -0x1, _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['y'] *= -0x1, _0x106d16['accelerati' + 'onIncludin' + 'gGravity']['z'] *= -0x1, _0x3a09e1 *= 0x3e8);
            this['event'](_0x2f43f6['Event']['CHANGE'], [
                _0x106d16['accelerati' + 'on'],
                _0x106d16['accelerati' + 'onIncludin' + 'gGravity'],
                _0x106d16['rotationRa' + 'te'],
                _0x3a09e1
            ]);
        }
        static ['getTransfo' + 'rmedAccele' + 'ration'](_0x3b61f4) {
            _0x106d16['transforme' + 'dAccelerat' + 'ion'] = _0x106d16['transforme' + 'dAccelerat' + 'ion'] || new _0x2c6b3f(), _0x106d16['transforme' + 'dAccelerat' + 'ion']['z'] = _0x3b61f4['z'];
            if (_0x2f43f6['Browser']['window']['orientatio' + 'n'] == 0x5a)
                _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = _0x3b61f4['y'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = -_0x3b61f4['x'];
            else {
                if (_0x2f43f6['Browser']['window']['orientatio' + 'n'] == -0x5a)
                    _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = -_0x3b61f4['y'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = _0x3b61f4['x'];
                else {
                    if (!_0x2f43f6['Browser']['window']['orientatio' + 'n'])
                        _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = _0x3b61f4['x'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = _0x3b61f4['y'];
                    else
                        _0x2f43f6['Browser']['window']['orientatio' + 'n'] == 0xb4 && (_0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = -_0x3b61f4['x'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = -_0x3b61f4['y']);
                }
            }
            var _0x5275d1;
            if (_0x2f43f6['ILaya']['stage']['canvasDegr' + 'ee'] == -0x5a)
                _0x5275d1 = _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = -_0x106d16['transforme' + 'dAccelerat' + 'ion']['y'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = _0x5275d1;
            else
                _0x2f43f6['ILaya']['stage']['canvasDegr' + 'ee'] == 0x5a && (_0x5275d1 = _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['x'] = _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'], _0x106d16['transforme' + 'dAccelerat' + 'ion']['y'] = -_0x5275d1);
            return _0x106d16['transforme' + 'dAccelerat' + 'ion'];
        }
    }
    _0x106d16['accelerati' + 'on'] = new _0x2c6b3f(), _0x106d16['accelerati' + 'onIncludin' + 'gGravity'] = new _0x2c6b3f(), _0x106d16['rotationRa' + 'te'] = new _0x2198ad();
    class _0x33207b extends _0x2f43f6['EventDispa' + 'tcher'] {
        constructor() {
            super();
        }
        static get ['instance']() {
            return _0x33207b['_instance'] = _0x33207b['_instance'] || new _0x33207b(), _0x33207b['_instance'];
        }
        ['start'](_0x25f1a5, _0xf09ade) {
            this['throushold'] = _0x25f1a5, this['shakeInter' + 'val'] = _0xf09ade, this['lastX'] = this['lastY'] = this['lastZ'] = NaN, _0x106d16['instance']['on'](_0x2f43f6['Event']['CHANGE'], this, this['onShake']);
        }
        ['stop']() {
            _0x106d16['instance']['off'](_0x2f43f6['Event']['CHANGE'], this, this['onShake']);
        }
        ['onShake'](_0x5cefb1, _0x19e738, _0x276a2f, _0x2c7874) {
            if (isNaN(this['lastX'])) {
                this['lastX'] = _0x19e738['x'], this['lastY'] = _0x19e738['y'], this['lastZ'] = _0x19e738['z'], this['lastMillSe' + 'cond'] = _0x2f43f6['Browser']['now']();
                return;
            }
            var _0x55eaf7 = Math['abs'](this['lastX'] - _0x19e738['x']), _0x5bc440 = Math['abs'](this['lastY'] - _0x19e738['y']), _0x56ad46 = Math['abs'](this['lastZ'] - _0x19e738['z']);
            if (this['isShaked'](_0x55eaf7, _0x5bc440, _0x56ad46)) {
                var _0x648352 = _0x2f43f6['Browser']['now']() - this['lastMillSe' + 'cond'];
                _0x648352 > this['shakeInter' + 'val'] && (this['event'](_0x2f43f6['Event']['CHANGE']), this['lastMillSe' + 'cond'] = _0x2f43f6['Browser']['now']());
            }
            this['lastX'] = _0x19e738['x'], this['lastY'] = _0x19e738['y'], this['lastZ'] = _0x19e738['z'];
        }
        ['isShaked'](_0x24da00, _0x3966aa, _0x4bff30) {
            return _0x24da00 > this['throushold'] && _0x3966aa > this['throushold'] || _0x24da00 > this['throushold'] && _0x4bff30 > this['throushold'] || _0x3966aa > this['throushold'] && _0x4bff30 > this['throushold'];
        }
    }
    class _0x31e504 {
        ['setPositio' + 'n'](_0x59b31d) {
            this['pos'] = _0x59b31d, this['coords'] = _0x59b31d['coords'];
        }
        get ['latitude']() {
            return this['coords']['latitude'];
        }
        get ['longitude']() {
            return this['coords']['longitude'];
        }
        get ['altitude']() {
            return this['coords']['altitude'];
        }
        get ['accuracy']() {
            return this['coords']['accuracy'];
        }
        get ['altitudeAc' + 'curacy']() {
            return this['coords']['altitudeAc' + 'curacy'];
        }
        get ['heading']() {
            return this['coords']['heading'];
        }
        get ['speed']() {
            return this['coords']['speed'];
        }
        get ['timestamp']() {
            return this['pos']['timestamp'];
        }
    }
    class _0x367132 {
        constructor() {
        }
        static ['getCurrent' + 'Position'](_0x3c1745, _0x11a62d = null) {
            _0x367132['navigator']['geolocatio' + 'n']['getCurrent' + 'Position'](function (_0xd43578) {
                _0x367132['position']['setPositio' + 'n'](_0xd43578), _0x3c1745['runWith'](_0x367132['position']);
            }, function (_0x4a0c8e) {
                _0x11a62d['runWith'](_0x4a0c8e);
            }, {
                'enableHighAccuracy': _0x367132['enableHigh' + 'Accuracy'],
                'timeout': _0x367132['timeout'],
                'maximumAge': _0x367132['maximumAge']
            });
        }
        static ['watchPosit' + 'ion'](_0x102026, _0x43e09c) {
            return _0x367132['navigator']['geolocatio' + 'n']['watchPosit' + 'ion'](function (_0x520a4a) {
                _0x367132['position']['setPositio' + 'n'](_0x520a4a), _0x102026['runWith'](_0x367132['position']);
            }, function (_0x1ff314) {
                _0x43e09c['runWith'](_0x1ff314);
            }, {
                'enableHighAccuracy': _0x367132['enableHigh' + 'Accuracy'],
                'timeout': _0x367132['timeout'],
                'maximumAge': _0x367132['maximumAge']
            });
        }
        static ['clearWatch'](_0x7c72c0) {
            _0x367132['navigator']['geolocatio' + 'n']['clearWatch'](_0x7c72c0);
        }
    }
    _0x367132['navigator'] = _0x2f43f6['Browser']['window']['navigator'], _0x367132['position'] = new _0x31e504(), _0x367132['PERMISSION' + '_DENIED'] = 0x1, _0x367132['POSITION_U' + 'NAVAILABLE'] = 0x2, _0x367132['TIMEOUT'] = 0x3, _0x367132['supported'] = !!_0x367132['navigator']['geolocatio' + 'n'], _0x367132['enableHigh' + 'Accuracy'] = ![], _0x367132['timeout'] = 0x2540be400, _0x367132['maximumAge'] = 0x0;
    class _0x370c15 extends _0x2f43f6['Bitmap'] {
        constructor() {
            super(), this['_w'] = 0x0, this['_h'] = 0x0, this['_width'] = 0x1, this['_height'] = 0x1, this['createDomE' + 'lement']();
        }
        ['createDomE' + 'lement']() {
            this['_source'] = this['video'] = _0x2f43f6['Browser']['createElem' + 'ent']('video');
            var _0x42d7da = this['video']['style'];
            _0x42d7da['position'] = 'absolute', _0x42d7da['top'] = '0px', _0x42d7da['left'] = '0px', this['video']['addEventLi' + 'stener']('loadedmeta' + 'data', () => {
                this['_w'] = this['video']['videoWidth'], this['_h'] = this['video']['videoHeigh' + 't'];
            });
        }
        ['setSource'](_0x37db9b, _0x184e64) {
            while (this['video']['childEleme' + 'ntCount'])
                this['video']['firstChild']['remove']();
            if (_0x184e64 & 0x1)
                this['appendSour' + 'ce'](_0x37db9b, 'video/mp4');
            if (_0x184e64 & 0x2)
                this['appendSour' + 'ce'](_0x37db9b + '.ogg', 'video/ogg');
        }
        ['appendSour' + 'ce'](_0x301402, _0x43f946) {
            var _0xd5d364 = _0x2f43f6['Browser']['createElem' + 'ent']('source');
            _0xd5d364['src'] = _0x301402, _0xd5d364['type'] = _0x43f946, this['video']['appendChil' + 'd'](_0xd5d364);
        }
        ['getVideo']() {
            return this['video'];
        }
        ['_getSource']() {
            return this['_source'];
        }
        ['destroy']() {
            super['destroy']();
            var _0x5c072b = _0x2f43f6['ILaya']['Render']['isConchApp'];
            _0x5c072b && this['video']['_destroy']();
        }
    }
    _0x370c15['create'] = function () {
        return new _0x370c15();
    };
    class _0x12e60c {
        constructor() {
        }
        static ['supported']() {
            return !!_0x2f43f6['Browser']['window']['navigator']['getUserMed' + 'ia'];
        }
        static ['getMedia'](_0x539020, _0x2de55c, _0x188dc3) {
            _0x2f43f6['Browser']['window']['navigator']['getUserMed' + 'ia'] && _0x2f43f6['Browser']['window']['navigator']['getUserMed' + 'ia'](_0x539020, function (_0x435a21) {
                _0x2de55c['runWith'](_0x2f43f6['Browser']['window']['URL']['createObje' + 'ctURL'](_0x435a21));
            }, function (_0x4c6a8f) {
                _0x188dc3['runWith'](_0x4c6a8f);
            });
        }
    }
    class _0x21289b extends _0x370c15 {
        constructor() {
            super();
            var _0x53bce0 = _0x2f43f6['LayaGL']['instance'];
            if (!_0x2f43f6['ILaya']['Render']['isConchApp'] && _0x2f43f6['Browser']['onIPhone'])
                return;
            this['gl'] = _0x2f43f6['ILaya']['Render']['isConchApp'] ? window['LayaGLCont' + 'ext']['instance'] : _0x2f43f6['WebGLConte' + 'xt']['mainContex' + 't'], this['_source'] = this['gl']['createText' + 'ure'](), _0x2f43f6['WebGLConte' + 'xt']['bindTextur' + 'e'](this['gl'], _0x53bce0['TEXTURE_2D'], this['_source']), this['gl']['texParamet' + 'eri'](_0x53bce0['TEXTURE_2D'], _0x53bce0['TEXTURE_WR' + 'AP_S'], _0x53bce0['CLAMP_TO_E' + 'DGE']), this['gl']['texParamet' + 'eri'](_0x53bce0['TEXTURE_2D'], _0x53bce0['TEXTURE_WR' + 'AP_T'], _0x53bce0['CLAMP_TO_E' + 'DGE']), this['gl']['texParamet' + 'eri'](_0x53bce0['TEXTURE_2D'], _0x53bce0['TEXTURE_MA' + 'G_FILTER'], _0x53bce0['LINEAR']), this['gl']['texParamet' + 'eri'](_0x53bce0['TEXTURE_2D'], _0x53bce0['TEXTURE_MI' + 'N_FILTER'], _0x53bce0['LINEAR']), _0x2f43f6['WebGLConte' + 'xt']['bindTextur' + 'e'](this['gl'], _0x53bce0['TEXTURE_2D'], null);
        }
        ['updateText' + 'ure']() {
            if (!_0x2f43f6['ILaya']['Render']['isConchApp'] && _0x2f43f6['Browser']['onIPhone'])
                return;
            var _0x219af0 = _0x2f43f6['LayaGL']['instance'];
            _0x2f43f6['WebGLConte' + 'xt']['bindTextur' + 'e'](this['gl'], _0x219af0['TEXTURE_2D'], this['_source']), this['gl']['texImage2D'](_0x219af0['TEXTURE_2D'], 0x0, _0x219af0['RGB'], _0x219af0['RGB'], _0x219af0['UNSIGNED_B' + 'YTE'], this['video']), _0x21289b['curBindSou' + 'rce'] = this['_source'];
        }
        get ['_glTexture']() {
            return this['_source'];
        }
        ['destroy']() {
            this['_source'] && (this['gl'] = _0x2f43f6['ILaya']['Render']['isConchApp'] ? window['LayaGLCont' + 'ext']['instance'] : _0x2f43f6['WebGLConte' + 'xt']['mainContex' + 't'], _0x21289b['curBindSou' + 'rce'] == this['_source'] && (_0x2f43f6['WebGLConte' + 'xt']['bindTextur' + 'e'](this['gl'], this['gl']['TEXTURE_2D'], null), _0x21289b['curBindSou' + 'rce'] = null), this['gl']['deleteText' + 'ure'](this['_source'])), super['destroy']();
        }
    }
    class _0x3ec098 extends _0x2f43f6['Sprite'] {
        constructor(_0x49b71c = 0x140, _0x2f5337 = 0xf0) {
            super(), this['htmlVideo'] = new _0x21289b(), this['videoEleme' + 'nt'] = this['htmlVideo']['getVideo'](), this['videoEleme' + 'nt']['layaTarget'] = this, this['internalTe' + 'xture'] = new _0x2f43f6['Texture'](this['htmlVideo']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('abort', _0x3ec098['onAbort']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('canplay', _0x3ec098['onCanplay']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('canplaythr' + 'ough', _0x3ec098['onCanplayt' + 'hrough']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('durationch' + 'ange', _0x3ec098['onDuration' + 'change']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('emptied', _0x3ec098['onEmptied']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('error', _0x3ec098['onError']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('loadeddata', _0x3ec098['onLoadedda' + 'ta']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('loadedmeta' + 'data', _0x3ec098['onLoadedme' + 'tadata']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('loadstart', _0x3ec098['onLoadstar' + 't']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('pause', _0x3ec098['onPause']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('play', _0x3ec098['onPlay']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('playing', _0x3ec098['onPlaying']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('progress', _0x3ec098['onProgress']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('ratechange', _0x3ec098['onRatechan' + 'ge']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('seeked', _0x3ec098['onSeeked']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('seeking', _0x3ec098['onSeeking']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('stalled', _0x3ec098['onStalled']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('suspend', _0x3ec098['onSuspend']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('timeupdate', _0x3ec098['onTimeupda' + 'te']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('volumechan' + 'ge', _0x3ec098['onVolumech' + 'ange']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('waiting', _0x3ec098['onWaiting']), this['videoEleme' + 'nt']['addEventLi' + 'stener']('ended', this['onPlayComp' + 'lete']['bind'](this)), this['size'](_0x49b71c, _0x2f5337), _0x2f43f6['Browser']['onMobile'] && (this['onDocument' + 'Click'] = this['onDocument' + 'Click']['bind'](this), _0x2f43f6['Browser']['document']['addEventLi' + 'stener']('touchend', this['onDocument' + 'Click']));
        }
        static ['onAbort'](_0x40c8d9) {
            _0x40c8d9['target']['layaTarget']['event']('abort');
        }
        static ['onCanplay'](_0x3be85f) {
            _0x3be85f['target']['layaTarget']['event']('canplay');
        }
        static ['onCanplayt' + 'hrough'](_0x4f1818) {
            _0x4f1818['target']['layaTarget']['event']('canplaythr' + 'ough');
        }
        static ['onDuration' + 'change'](_0x59ed8a) {
            _0x59ed8a['target']['layaTarget']['event']('durationch' + 'ange');
        }
        static ['onEmptied'](_0x474ea9) {
            _0x474ea9['target']['layaTarget']['event']('emptied');
        }
        static ['onError'](_0x3c4384) {
            _0x3c4384['target']['layaTarget']['event']('error');
        }
        static ['onLoadedda' + 'ta'](_0x4328f4) {
            _0x4328f4['target']['layaTarget']['event']('loadeddata');
        }
        static ['onLoadedme' + 'tadata'](_0x28d9ed) {
            _0x28d9ed['target']['layaTarget']['event']('loadedmeta' + 'data');
        }
        static ['onLoadstar' + 't'](_0x45f15f) {
            _0x45f15f['target']['layaTarget']['event']('loadstart');
        }
        static ['onPause'](_0x423cfd) {
            _0x423cfd['target']['layaTarget']['event']('pause');
        }
        static ['onPlay'](_0x540850) {
            _0x540850['target']['layaTarget']['event']('play');
        }
        static ['onPlaying'](_0x923550) {
            _0x923550['target']['layaTarget']['event']('playing');
        }
        static ['onProgress'](_0x2b8b5d) {
            _0x2b8b5d['target']['layaTarget']['event']('progress');
        }
        static ['onRatechan' + 'ge'](_0x569444) {
            _0x569444['target']['layaTarget']['event']('ratechange');
        }
        static ['onSeeked'](_0x7ae42d) {
            _0x7ae42d['target']['layaTarget']['event']('seeked');
        }
        static ['onSeeking'](_0x27518e) {
            _0x27518e['target']['layaTarget']['event']('seeking');
        }
        static ['onStalled'](_0x583e2b) {
            _0x583e2b['target']['layaTarget']['event']('stalled');
        }
        static ['onSuspend'](_0x52dee1) {
            _0x52dee1['target']['layaTarget']['event']('suspend');
        }
        static ['onTimeupda' + 'te'](_0x52fe62) {
            _0x52fe62['target']['layaTarget']['event']('timeupdate');
        }
        static ['onVolumech' + 'ange'](_0xb5ee06) {
            _0xb5ee06['target']['layaTarget']['event']('volumechan' + 'ge');
        }
        static ['onWaiting'](_0xee0c95) {
            _0xee0c95['target']['layaTarget']['event']('waiting');
        }
        ['onPlayComp' + 'lete'](_0x1e2b40) {
            if (!_0x2f43f6['ILaya']['Render']['isConchApp'] || !this['videoEleme' + 'nt'] || !this['videoEleme' + 'nt']['loop'])
                _0x2f43f6['ILaya']['timer']['clear'](this, this['renderCanv' + 'as']);
            this['event']('ended');
        }
        ['load'](_0x44eac9) {
            if (_0x44eac9['indexOf']('blob:') == 0x0)
                this['videoEleme' + 'nt']['src'] = _0x44eac9;
            else
                this['htmlVideo']['setSource'](_0x44eac9, 0x1);
        }
        ['play']() {
            this['videoEleme' + 'nt']['play'](), _0x2f43f6['ILaya']['timer']['frameLoop'](0x1, this, this['renderCanv' + 'as']);
        }
        ['pause']() {
            this['videoEleme' + 'nt']['pause'](), _0x2f43f6['ILaya']['timer']['clear'](this, this['renderCanv' + 'as']);
        }
        ['reload']() {
            this['videoEleme' + 'nt']['load']();
        }
        ['canPlayTyp' + 'e'](_0x20b6dc) {
            var _0x58917f;
            switch (_0x20b6dc) {
            case 0x1:
                _0x58917f = 'video/mp4';
                break;
            case 0x2:
                _0x58917f = 'video/ogg';
                break;
            case 0x8:
                _0x58917f = 'video/webm';
                break;
            }
            return this['videoEleme' + 'nt']['canPlayTyp' + 'e'](_0x58917f);
        }
        ['renderCanv' + 'as']() {
            if (this['readyState'] === 0x0)
                return;
            this['htmlVideo']['updateText' + 'ure'](), this['graphics']['clear'](), this['graphics']['drawTextur' + 'e'](this['internalTe' + 'xture'], 0x0, 0x0, this['width'], this['height']);
        }
        ['onDocument' + 'Click']() {
            this['videoEleme' + 'nt']['play'](), this['videoEleme' + 'nt']['pause'](), _0x2f43f6['Browser']['document']['removeEven' + 'tListener']('touchend', this['onDocument' + 'Click']);
        }
        get ['buffered']() {
            return this['videoEleme' + 'nt']['buffered'];
        }
        get ['currentSrc']() {
            return this['videoEleme' + 'nt']['currentSrc'];
        }
        get ['currentTim' + 'e']() {
            return this['videoEleme' + 'nt']['currentTim' + 'e'];
        }
        set ['currentTim' + 'e'](_0x37c3f6) {
            this['videoEleme' + 'nt']['currentTim' + 'e'] = _0x37c3f6, this['renderCanv' + 'as']();
        }
        set ['volume'](_0x7b9ec1) {
            this['videoEleme' + 'nt']['volume'] = _0x7b9ec1;
        }
        get ['volume']() {
            return this['videoEleme' + 'nt']['volume'];
        }
        get ['readyState']() {
            return this['videoEleme' + 'nt']['readyState'];
        }
        get ['videoWidth']() {
            return this['videoEleme' + 'nt']['videoWidth'];
        }
        get ['videoHeigh' + 't']() {
            return this['videoEleme' + 'nt']['videoHeigh' + 't'];
        }
        get ['duration']() {
            return this['videoEleme' + 'nt']['duration'];
        }
        get ['ended']() {
            return this['videoEleme' + 'nt']['ended'];
        }
        get ['error']() {
            return this['videoEleme' + 'nt']['error'];
        }
        get ['loop']() {
            return this['videoEleme' + 'nt']['loop'];
        }
        set ['loop'](_0x28e15b) {
            this['videoEleme' + 'nt']['loop'] = _0x28e15b;
        }
        set ['x'](_0x312fd7) {
            super['x'] = _0x312fd7;
            if (_0x2f43f6['ILaya']['Render']['isConchApp']) {
                var _0x5b120e = _0x2f43f6['ILaya']['Utils']['getTransfo' + 'rmRelative' + 'ToWindow'](this, 0x0, 0x0);
                this['videoEleme' + 'nt']['style']['left'] = _0x5b120e['x'];
            }
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x5ce051) {
            super['y'] = _0x5ce051;
            if (_0x2f43f6['ILaya']['Render']['isConchApp']) {
                var _0x5af78b = _0x2f43f6['ILaya']['Utils']['getTransfo' + 'rmRelative' + 'ToWindow'](this, 0x0, 0x0);
                this['videoEleme' + 'nt']['style']['top'] = _0x5af78b['y'];
            }
        }
        get ['y']() {
            return super['y'];
        }
        get ['playbackRa' + 'te']() {
            return this['videoEleme' + 'nt']['playbackRa' + 'te'];
        }
        set ['playbackRa' + 'te'](_0x152a65) {
            this['videoEleme' + 'nt']['playbackRa' + 'te'] = _0x152a65;
        }
        get ['muted']() {
            return this['videoEleme' + 'nt']['muted'];
        }
        set ['muted'](_0x369f10) {
            this['videoEleme' + 'nt']['muted'] = _0x369f10;
        }
        get ['paused']() {
            return this['videoEleme' + 'nt']['paused'];
        }
        get ['preload']() {
            return this['videoEleme' + 'nt']['preload'];
        }
        set ['preload'](_0x405769) {
            this['videoEleme' + 'nt']['preload'] = _0x405769;
        }
        get ['seekable']() {
            return this['videoEleme' + 'nt']['seekable'];
        }
        get ['seeking']() {
            return this['videoEleme' + 'nt']['seeking'];
        }
        ['size'](_0x601cae, _0x24a6ba) {
            super['size'](_0x601cae, _0x24a6ba);
            if (_0x2f43f6['ILaya']['Render']['isConchApp']) {
                var _0x3043e7 = _0x2f43f6['ILaya']['Utils']['getTransfo' + 'rmRelative' + 'ToWindow'](this, 0x0, 0x0);
                this['videoEleme' + 'nt']['width'] = _0x601cae * _0x3043e7['scaleX'];
            } else
                this['videoEleme' + 'nt']['width'] = _0x601cae / _0x2f43f6['Browser']['pixelRatio'];
            if (this['paused'])
                this['renderCanv' + 'as']();
            return this;
        }
        set ['width'](_0x3a352e) {
            if (_0x2f43f6['ILaya']['Render']['isConchApp']) {
                var _0x700d41 = _0x2f43f6['ILaya']['Utils']['getTransfo' + 'rmRelative' + 'ToWindow'](this, 0x0, 0x0);
                this['videoEleme' + 'nt']['width'] = _0x3a352e * _0x700d41['scaleX'];
            } else
                this['videoEleme' + 'nt']['width'] = this['width'] / _0x2f43f6['Browser']['pixelRatio'];
            super['width'] = _0x3a352e;
            if (this['paused'])
                this['renderCanv' + 'as']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x4f3e64) {
            if (_0x2f43f6['ILaya']['Render']['isConchApp']) {
                var _0x1e329a = _0x2f43f6['ILaya']['Utils']['getTransfo' + 'rmRelative' + 'ToWindow'](this, 0x0, 0x0);
                this['videoEleme' + 'nt']['height'] = _0x4f3e64 * _0x1e329a['scaleY'];
            } else
                this['videoEleme' + 'nt']['height'] = this['height'] / _0x2f43f6['Browser']['pixelRatio'];
            super['height'] = _0x4f3e64;
        }
        get ['height']() {
            return super['height'];
        }
        ['destroy'](_0x10c77e = !![]) {
            super['destroy'](_0x10c77e), this['videoEleme' + 'nt']['removeEven' + 'tListener']('abort', _0x3ec098['onAbort']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('canplay', _0x3ec098['onCanplay']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('canplaythr' + 'ough', _0x3ec098['onCanplayt' + 'hrough']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('durationch' + 'ange', _0x3ec098['onDuration' + 'change']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('emptied', _0x3ec098['onEmptied']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('error', _0x3ec098['onError']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('loadeddata', _0x3ec098['onLoadedda' + 'ta']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('loadedmeta' + 'data', _0x3ec098['onLoadedme' + 'tadata']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('loadstart', _0x3ec098['onLoadstar' + 't']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('pause', _0x3ec098['onPause']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('play', _0x3ec098['onPlay']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('playing', _0x3ec098['onPlaying']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('progress', _0x3ec098['onProgress']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('ratechange', _0x3ec098['onRatechan' + 'ge']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('seeked', _0x3ec098['onSeeked']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('seeking', _0x3ec098['onSeeking']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('stalled', _0x3ec098['onStalled']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('suspend', _0x3ec098['onSuspend']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('timeupdate', _0x3ec098['onTimeupda' + 'te']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('volumechan' + 'ge', _0x3ec098['onVolumech' + 'ange']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('waiting', _0x3ec098['onWaiting']), this['videoEleme' + 'nt']['removeEven' + 'tListener']('ended', this['onPlayComp' + 'lete']), this['pause'](), this['videoEleme' + 'nt']['layaTarget'] = null, this['videoEleme' + 'nt'] = null, this['htmlVideo']['destroy']();
        }
        ['syncVideoP' + 'osition']() {
            var _0xdbc77d = _0x2f43f6['ILaya']['stage'], _0x42523b;
            _0x42523b = _0x2f43f6['ILaya']['Utils']['getGlobalP' + 'osAndScale'](this);
            var _0x2e7718 = _0xdbc77d['_canvasTra' + 'nsform']['a'], _0x1be60b = _0xdbc77d['_canvasTra' + 'nsform']['d'], _0xdb20 = _0x42523b['x'] * _0xdbc77d['clientScal' + 'eX'] * _0x2e7718 + _0xdbc77d['offset']['x'], _0x55b9f8 = _0x42523b['y'] * _0xdbc77d['clientScal' + 'eY'] * _0x1be60b + _0xdbc77d['offset']['y'];
            this['videoEleme' + 'nt']['style']['left'] = _0xdb20 + 'px', this['videoEleme' + 'nt']['style']['top'] = _0x55b9f8 + 'px', this['videoEleme' + 'nt']['width'] = this['width'] / _0x2f43f6['Browser']['pixelRatio'], this['videoEleme' + 'nt']['height'] = this['height'] / _0x2f43f6['Browser']['pixelRatio'];
        }
    }
    _0x3ec098['MP4'] = 0x1, _0x3ec098['OGG'] = 0x2, _0x3ec098['CAMERA'] = 0x4, _0x3ec098['WEBM'] = 0x8, _0x3ec098['SUPPORT_PR' + 'OBABLY'] = 'probably', _0x3ec098['SUPPORT_MA' + 'YBY'] = 'maybe', _0x3ec098['SUPPORT_NO'] = '';
    class _0x12ac07 extends _0x2f43f6['EventDispa' + 'tcher'] {
        constructor(_0x231c22) {
            super(), this['onDeviceOr' + 'ientationC' + 'hange'] = this['onDeviceOr' + 'ientationC' + 'hange']['bind'](this);
        }
        static get ['instance']() {
            return _0x12ac07['_instance'] = _0x12ac07['_instance'] || new _0x12ac07(0x0), _0x12ac07['_instance'];
        }
        ['on'](_0xc02eb2, _0x53926a, _0x5d4c1d, _0x399532 = null) {
            return super['on'](_0xc02eb2, _0x53926a, _0x5d4c1d, _0x399532), _0x2f43f6['Browser']['window']['addEventLi' + 'stener']('deviceorie' + 'ntation', this['onDeviceOr' + 'ientationC' + 'hange']), this;
        }
        ['off'](_0x4d4fe0, _0x5f5558, _0x18a36d, _0x23cc82 = ![]) {
            if (!this['hasListene' + 'r'](_0x4d4fe0))
                _0x2f43f6['Browser']['window']['removeEven' + 'tListener']('deviceorie' + 'ntation', this['onDeviceOr' + 'ientationC' + 'hange']);
            return super['off'](_0x4d4fe0, _0x5f5558, _0x18a36d, _0x23cc82);
        }
        ['onDeviceOr' + 'ientationC' + 'hange'](_0x5cd9b9) {
            _0x12ac07['info']['alpha'] = _0x5cd9b9['alpha'], _0x12ac07['info']['beta'] = _0x5cd9b9['beta'], _0x12ac07['info']['gamma'] = _0x5cd9b9['gamma'], _0x5cd9b9['webkitComp' + 'assHeading'] && (_0x12ac07['info']['alpha'] = _0x5cd9b9['webkitComp' + 'assHeading'] * -0x1, _0x12ac07['info']['compassAcc' + 'uracy'] = _0x5cd9b9['webkitComp' + 'assAccurac' + 'y']), this['event'](_0x2f43f6['Event']['CHANGE'], [
                _0x5cd9b9['absolute'],
                _0x12ac07['info']
            ]);
        }
    }
    _0x12ac07['info'] = new _0x2198ad(), _0x54fb7b['Accelerati' + 'onInfo'] = _0x2c6b3f, _0x54fb7b['Accelerato' + 'r'] = _0x106d16, _0x54fb7b['Geolocatio' + 'n'] = _0x367132, _0x54fb7b['Geolocatio' + 'nInfo'] = _0x31e504, _0x54fb7b['Gyroscope'] = _0x12ac07, _0x54fb7b['HtmlVideo'] = _0x370c15, _0x54fb7b['Media'] = _0x12e60c, _0x54fb7b['RotationIn' + 'fo'] = _0x2198ad, _0x54fb7b['Shake'] = _0x33207b, _0x54fb7b['Video'] = _0x3ec098, _0x54fb7b['WebGLVideo'] = _0x21289b;
}(window['Laya'] = window['Laya'] || {}, Laya));