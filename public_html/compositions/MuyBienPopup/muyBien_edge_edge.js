/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js + "jquery-1.11.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'muybien_cont',
                            symbolName: 'muybien_cont',
                            type: 'rect',
                            rect: ['0', '0', '678', '314', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '678px', '314px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "muybien_cont": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            symbolName: 'trans_popup',
                            rect: ['0', '0', '678', '314', 'auto', 'auto'],
                            id: 'trans_popup'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '678px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${trans_popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            60,
                            0,
                            "easeOutQuart",
                            "${trans_popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "scaleX",
                            60,
                            690,
                            "easeOutQuart",
                            "${trans_popup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            60,
                            690,
                            "easeOutQuart",
                            "${trans_popup}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "anim_medalla": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'mov_perp_trofeo',
                            symbolName: 'mov_perp_trofeo',
                            rect: ['0', '0px', '263', '253', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '263px', '253px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                        [
                            "eid114",
                            "top",
                            1500,
                            1890,
                            "linear",
                            "${mov_perp_trofeo}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid115",
                            "top",
                            3390,
                            1660,
                            "linear",
                            "${mov_perp_trofeo}",
                            '6px',
                            '0px'
                        ]
                    ]
                }
            },
            "mov_perp_trofeo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            rect: ['0px', '0px', '261px', '247px', 'auto', 'auto'],
                            id: 'estrellas',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/estrellas.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['270'], [], ['0.1', '0.1']],
                            rect: ['0px', '0px', '263px', '246px', 'auto', 'auto'],
                            id: 'moneda',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/moneda.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'brillitos',
                            symbolName: 'brillitos',
                            opacity: '0.1',
                            rect: ['1', '-7px', '260', '247', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '263px', '253px']
                        }
                    }
                },
                timeline: {
                    duration: 3625,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "rotateZ",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '270deg',
                            '0deg'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            195,
                            370,
                            "easeOutQuart",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            565,
                            230,
                            "easeOutQuart",
                            "${estrellas}",
                            '1',
                            '1.08'
                        ],
                        [
                            "eid25",
                            "scaleY",
                            795,
                            150,
                            "easeOutQuart",
                            "${estrellas}",
                            '1.08',
                            '0.93'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            945,
                            115,
                            "easeOutQuart",
                            "${estrellas}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            195,
                            0,
                            "linear",
                            "${estrellas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            195,
                            370,
                            "easeOutQuart",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            565,
                            230,
                            "easeOutQuart",
                            "${estrellas}",
                            '1',
                            '1.08'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            795,
                            150,
                            "easeOutQuart",
                            "${estrellas}",
                            '1.08',
                            '0.93'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            945,
                            115,
                            "easeOutQuart",
                            "${estrellas}",
                            '0.93',
                            '1'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            660,
                            0,
                            "linear",
                            "${moneda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109397",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109398",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109399",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109400",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109401",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${estrellas}",
                            [50,77],
                            [50,77],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41",
                            "scaleY",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            195,
                            370,
                            "easeOutQuart",
                            "${estrellas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            660,
                            470,
                            "easeOutQuart",
                            "${moneda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            945,
                            410,
                            "easeOutQuart",
                            "${brillitos}",
                            '0.1',
                            '1'
                        ],
                        [
                            "eid33",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109402",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109403",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109404",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109405",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid109406",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${moneda}",
                            [49,65],
                            [49,65],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "brillitos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '260px', '247px', 'auto', 'auto'],
                            id: 'brillos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/brillos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '260px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 3625,
                    autoPlay: true,
                    labels: {
                        "repitis": 690
                    },
                    data: [
                        [
                            "eid67",
                            "scaleX",
                            690,
                            1480,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid68",
                            "scaleX",
                            2170,
                            1455,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid69",
                            "scaleY",
                            690,
                            1480,
                            "linear",
                            "${brillos}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid70",
                            "scaleY",
                            2170,
                            1455,
                            "linear",
                            "${brillos}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "recuad_texto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '344px', '203px', 'auto', 'auto'],
                            id: 'Recuadro',
                            type: 'image',
                            clip: 'rect(0px 172px 203px 174px)',
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/Recuadro.png', '0px', '0px']
                        },
                        {
                            rect: ['41px', '70px', '262px', '63px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Has completado la actividad correctamente</p>',
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '344px', '203px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid128",
                            "clip",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Recuadro}",
                            [0,172,203,174],
                            [0,344,203,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            1000,
                            0,
                            "easeOutQuart",
                            "${Text}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "trans_popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ventana',
                            type: 'image',
                            rect: ['0px', '0px', '678px', '314px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/ventana.png', '0px', '0px']
                        },
                        {
                            id: 'recuad_texto',
                            symbolName: 'recuad_texto',
                            rect: ['304px', '81px', '344', '203', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'anim_medalla',
                            symbolName: 'anim_medalla',
                            rect: ['20px', '61px', '263', '253', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrar',
                            symbolName: 'btn_cerrar',
                            cursor: 'pointer',
                            rect: ['633', '15', '30', '30', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            symbolName: 'titulo',
                            rect: ['26', '10', '344', '46', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '678px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 5050,
                    autoPlay: true,
                    data: [
                            [ "eid285", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${recuad_texto}', [] ] ],
                            [ "eid286", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${recuad_texto}', [] ] ]
                    ]
                }
            },
            "btn_cerrar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cerrar',
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/muyBien_popup/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "titulo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '344px', '46px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [33, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">¡Muy bien!</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '344px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("muyBien_edge_edgeActions.js");
})("EDGE-29934699");
