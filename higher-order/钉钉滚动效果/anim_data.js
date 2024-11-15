const anim_data = {
    domArr: [
        // 杂乱的正方形
        {
            widthStr: "160rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(-33deg,#8f35ff,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%),linear-gradient(116deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)",
            topStr: "calc(50% - 421rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 756rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.4,
            opacityAnimMap: new Map([
                [0.2, 0.4], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "80rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(133deg,rgba(255,186,0,0),rgba(255,207,0,.6) 68%),linear-gradient(170deg,#ffc400,#ff9200),linear-gradient(170deg,#ffc400,#ff9200)",
            topStr: "calc(50% - 192rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 487rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 1,
            opacityAnimMap: new Map([]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "#cc7201",
            backgroundImageStr: "",
            topStr: "calc(50% - 141rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 624rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.8,
            opacityAnimMap: new Map([
                [0, 0.8],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "40rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(170deg,#3e9eff,#0062ff)",
            topStr: "calc(50% - 67rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 316rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.75,
            opacityAnimMap: new Map([
                [0, 0.75],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "46rem",
            backgroundColorStr: "",
            backgroundImageStr: "radial-gradient(77deg,#ff8300 0,#ff9200 54%,rgba(255,146,0,0) 128%),linear-gradient(77deg,#ffb400,#ff9200 25%,#ffdf2f 68%,#ff8e00)",
            topStr: "calc(50% - 28rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 259rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.3,
            opacityAnimMap: new Map([
                [0, 0.3],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "72rem",
            backgroundColorStr: "",
            backgroundImageStr: "radial-gradient(77deg,#ff8300 0,#ff9200 54%,rgba(255,146,0,0) 128%),linear-gradient(77deg,#ffb400,#ff9200 25%,#ffdf2f 68%,#ff8e00)",
            topStr: "",
            rightStr: "",
            bottomStr: "calc(50% - 175rem)",
            leftStr: "calc(50% - 579rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.4,
            opacityAnimMap: new Map([
                [0, 0.4],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "160rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))",
            topStr: "",
            rightStr: "",
            bottomStr: "calc(50% - 412rem)",
            leftStr: "calc(50% - 701rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.3,
            opacityAnimMap: new Map([
                [0, 0.3],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "24rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))",
            topStr: "calc(50% - 3rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 243rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.3,
            opacityAnimMap: new Map([
                [0, 0.3],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(-27deg,rgba(143,53,255,.8) 11%,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%)",
            topStr: "calc(50% - 473rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 154rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.3,
            opacityAnimMap: new Map([
                [0, 0.3],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "46rem",
            backgroundColorStr: "#ffa800",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "calc(50% - 98rem)",
            leftStr: "calc(50% - 362rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.95,
            opacityAnimMap: new Map([
                [0, 0.95],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(180deg,#004fff,rgba(0,45,156,0) 70%)",
            topStr: "",
            rightStr: "",
            bottomStr: "calc(50% - 498rem)",
            leftStr: "calc(50% - 165rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.95,
            opacityAnimMap: new Map([
                [0, 0.95],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "40rem",
            backgroundColorStr: "",
            backgroundImageStr: "-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%)",
            topStr: "",
            rightStr: "",
            bottomStr: "calc(50% - 352rem)",
            leftStr: "calc(50% - 26rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.35,
            opacityAnimMap: new Map([
                [0, 0.35],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "64rem",
            backgroundColorStr: "",
            backgroundImageStr: "-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%),-webkit-linear-gradient(334deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)",
            topStr: "calc(50% - 395rem)",
            rightStr: "calc(50% - 102rem)",
            bottomStr: "",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.4,
            opacityAnimMap: new Map([
                [0, 0.4],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "24rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(147deg,#004fff,#002d9c 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
            topStr: "calc(50% - 206rem)",
            rightStr: "calc(50% - 38rem)",
            bottomStr: "",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.3,
            opacityAnimMap: new Map([
                [0, 0.3],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "130rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(147deg,#004fff,#002d9c 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
            topStr: "calc(50% - 263rem)",
            rightStr: "calc(50% - 704rem)",
            bottomStr: "",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.67,
            opacityAnimMap: new Map([
                [0, 0.67],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "64rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(128deg,#00ebb6,#00ba46 69%)",
            topStr: "calc(50% - 226rem)",
            rightStr: "calc(50% - 505rem)",
            bottomStr: "",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.95,
            opacityAnimMap: new Map([
                [0, 0.95],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "24rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(170deg,#ffc400,rgba(255,207,0,.6))",
            topStr: "calc(50% - 52rem)",
            rightStr: "calc(50% - 218rem)",
            bottomStr: "",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.2,
            opacityAnimMap: new Map([
                [0, 0.2],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "24rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(170deg,#00b6ff,#007fff)",
            topStr: "",
            rightStr: "calc(50% - 300rem)",
            bottomStr: "calc(50% - 49rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.96,
            opacityAnimMap: new Map([
                [0, 0.96],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "64rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(148deg,#76d2ff,#09baff 99%)",
            topStr: "",
            rightStr: "calc(50% - 453rem)",
            bottomStr: "calc(50% - 170rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.96,
            opacityAnimMap: new Map([
                [0, 0.96],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(136deg,#3e9eff 19%,#0062ff)",
            topStr: "",
            rightStr: "calc(50% - 657rem)",
            bottomStr: "calc(50% - 133rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.96,
            opacityAnimMap: new Map([
                [0, 0.96],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "160rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(147deg,rgba(0,79,255,.6),rgba(0,45,156,.6) 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)",
            topStr: "",
            rightStr: "calc(50% - 800rem)",
            bottomStr: "calc(50% - 345rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.5,
            opacityAnimMap: new Map([
                [0, 0.5],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(-2deg,rgba(0,45,156,.75),#002d9c)",
            topStr: "",
            rightStr: "calc(50% - 213rem)",
            bottomStr: "calc(50% - 532rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.2,
            opacityAnimMap: new Map([
                [0, 0.2],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },
        {
            widthStr: "96rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(-2deg,rgba(0,45,156,.75),#002d9c)",
            topStr: "",
            rightStr: "calc(50% - 213rem)",
            bottomStr: "calc(50% - 532rem)",
            leftStr: "",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.2,
            opacityAnimMap: new Map([
                [0, 0.2],
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 }
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 800 }
                }]
            ])
        },

        // logo 图标
        {
            widthStr: "180rem",
            backgroundColorStr: "",
            backgroundImageStr: "linear-gradient(159deg,#00b6ff,#007fff 67%,#0065ff 97%)",
            topStr: "calc(50% - 90rem)",
            rightStr: "",
            bottomStr: "",
            leftStr: "calc(50% - 90rem)",
            className: "e-square",
            parentClassName: "effect-box",
            opacity: 0.4,
            opacityAnimMap: new Map([
                [0, 0.4], // [帧，值]
                [0.6, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 0 },
                scale: 1
            },
            transformAnimMap: new Map([
                [0, {
                    translate3d: { x: 0, y: 0, z: 0 },
                    scale: 1
                }],
                [1, {
                    translate3d: { x: 0, y: -1300, z: 800 },
                    scale: 1.5
                }]
            ])
        },

        // e-icon-box 相关元素
        // e-icon-box-bg
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon-box-bg",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.6, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 0, z: 10 },
                scale: 0.8
            },
            transformAnimMap: new Map([
                [0.6, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 0.8
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },

        // e-icon 上行
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.1, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 450, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 450, y: 80, z: 10 },
                    scale: 0
                }],
                [0.1, {
                    translate3d: { x: 450, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.3, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 300, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 300, y: 80, z: 10 },
                    scale: 0
                }],
                [0.3, {
                    translate3d: { x: 300, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.5, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 150, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 150, y: 80, z: 10 },
                    scale: 0
                }],
                [0.5, {
                    translate3d: { x: 150, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.7, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 0, y: 80, z: 10 },
                    scale: 0
                }],
                [0.7, {
                    translate3d: { x: 0, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.5, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -150, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -150, y: 80, z: 10 },
                    scale: 0
                }],
                [0.5, {
                    translate3d: { x: -150, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.3, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -300, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -300, y: 80, z: 10 },
                    scale: 0
                }],
                [0.3, {
                    translate3d: { x: -300, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.1, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -450, y: 80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -450, y: 80, z: 10 },
                    scale: 0
                }],
                [0.1, {
                    translate3d: { x: -450, y: 100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },

        // e-icon 下行
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.1, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 450, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 450, y: -80, z: 10 },
                    scale: 0
                }],
                [0.1, {
                    translate3d: { x: 450, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.3, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 300, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 300, y: -80, z: 10 },
                    scale: 0
                }],
                [0.3, {
                    translate3d: { x: 300, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.5, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 150, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 150, y: -80, z: 10 },
                    scale: 0
                }],
                [0.5, {
                    translate3d: { x: 150, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.7, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: 0, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: 0, y: -80, z: 10 },
                    scale: 0
                }],
                [0.7, {
                    translate3d: { x: 0, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.5, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -150, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -150, y: -80, z: 10 },
                    scale: 0
                }],
                [0.5, {
                    translate3d: { x: -150, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.3, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -300, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -300, y: -80, z: 10 },
                    scale: 0
                }],
                [0.3, {
                    translate3d: { x: -300, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
        {
            widthStr: "",
            backgroundColorStr: "",
            backgroundImageStr: "",
            topStr: "",
            rightStr: "",
            bottomStr: "",
            leftStr: "",
            className: "e-icon",
            parentClassName: "e-icon-box",
            opacity: 0,
            opacityAnimMap: new Map([
                [0.1, 0], // [帧，值]
                [1, 1]
            ]),
            transform: {
                translate3d: { x: -450, y: -80, z: 10 },
                scale: 0
            },
            transformAnimMap: new Map([
                [0.1, {
                    translate3d: { x: -450, y: -80, z: 10 },
                    scale: 0
                }],
                [0.1, {
                    translate3d: { x: -450, y: -100, z: 10 },
                    scale: 0.5
                }],
                [1, {
                    translate3d: { x: 0, y: 0, z: 10 },
                    scale: 1
                }]
            ])
        },
    ]
}