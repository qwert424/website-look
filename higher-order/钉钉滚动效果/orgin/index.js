// 特效管理
class EffectManager {

    constructor(data = anim_data) {

        data.domArr.forEach(item => {
            const entity = new Entity();

            // 添加形状组件
            entity.addComp(new ShapeComp({
                shapeAtt: item
            }));

            // 添加动画组件
            entity.addComp(new ShapeAnimComp({
                opacityAnimMap: item.opacityAnimMap,
                transformAnimMap: item.transformAnimMap
            }));

            // 添加滚动事件组件
            entity.addComp(new RollEventComp({
                cb: function (scrollPos) {
                    this.getComp("ShapeAnimComp").changeOpacity(scrollPos, this.getComp("ShapeComp"));
                    this.getComp("ShapeAnimComp").changeTransform(scrollPos, this.getComp("ShapeComp"));
                }.bind(entity)
            }));
        });
    }
}

// 单体
class Entity {
    constructor() {
        this._compMap = new Map();
    }

    addComp(comp) {
        this._compMap.set(comp.name, comp);
    }

    getComp(compName) {
        return this._compMap.get(compName);
    }
}

// 形状组件
class ShapeComp {
    constructor(data) {
        this.name = "ShapeComp";
        this._shapeDom = document.createElement("div");
        this._shapeDom.classList.add(data.shapeAtt.className);
        this._shapeDom.style.width = data.shapeAtt.widthStr;
        this._shapeDom.style.height = data.shapeAtt.widthStr;
        this._shapeDom.style.backgroundImage = data.shapeAtt.backgroundImageStr;
        this._shapeDom.style.top = data.shapeAtt.topStr;
        this._shapeDom.style.right = data.shapeAtt.rightStr;
        this._shapeDom.style.bottom = data.shapeAtt.bottomStr;
        this._shapeDom.style.left = data.shapeAtt.leftStr;
        this._shapeDom.style.backgroundColor = data.shapeAtt.backgroundColorStr;

        document.getElementsByClassName(data.shapeAtt.parentClassName)[0].appendChild(this._shapeDom);

        this._opacity = null;
        this._transform = null;

        this.opacity = data.shapeAtt.opacity;
        this.transform = data.shapeAtt.transform;
    }

    set opacity(value) {
        if (value !== this._opacity) {
            this._shapeDom.style.opacity = value + "";
        }
        this._opacity = value;
    }

    get opacity() {
        return this._opacity;
    }

    set transform(value) {
        let transformStr = "";
        if (value.translate3d !== undefined) {
            transformStr = `translate3d(${value.translate3d.x}rem, ${value.translate3d.y}rem, ${value.translate3d.z}rem)`
        }

        if (value.scale !== undefined) {
            transformStr += `scale(${value.scale})`;
        }
        this._shapeDom.style.transform = transformStr;
        this._transform = value;
    }

    get transform() {
        return this._transform;
    }
}

// 动画组件
class ShapeAnimComp {
    constructor(data) {
        this.name = "ShapeAnimComp";
        this._opacityAnimMap = data.opacityAnimMap;
        this._transformAnimMap = data.transformAnimMap;
    }

    // 返回根据滚动改变的状态值
    _getStateValue(scrollPos, beginPos, endPos, beginValue, endValue) {
        if (beginValue === endValue) {
            return beginValue;
        }

        const value = (endValue - beginValue) * (scrollPos - beginPos) / (endPos - beginPos) + beginValue;

        return Number(value.toFixed(3));
    }

    // 根据滚动值改变透明度
    changeOpacity(scrollPos, shapeComp) {
        if (this._opacityAnimMap.size === 0) {
            return;
        }

        const keyArr = [...this._opacityAnimMap.keys()].sort((a, b) => a - b);

        const beginPos = keyArr.findLast(item => item <= scrollPos);
        let beginValue = this._opacityAnimMap.get(beginPos);
        const endPos = keyArr.find(item => item >= scrollPos);
        let endValue = this._opacityAnimMap.get(endPos);

        if (beginValue === undefined && endValue !== undefined) {
            beginValue = endValue;
        } else if (beginValue !== undefined && endValue === undefined) {
            endValue = beginValue;
        } else if (beginValue === undefined && endValue === undefined) {
            return;
        }

        const opacity = this._getStateValue(scrollPos, beginPos, endPos, beginValue, endValue);
        shapeComp.opacity = opacity;
    }

    // 根据滚动值改变 transform
    changeTransform(scrollPos, shapeComp) {
        if (this._transformAnimMap.size === 0) {
            return;
        }

        let transform = {};

        const keyArr = [...this._transformAnimMap.keys()].sort((a, b) => a - b);

        const beginPos = keyArr.findLast(item => item <= scrollPos);
        let beginValue = this._transformAnimMap.get(beginPos);
        const endPos = keyArr.find(item => item >= scrollPos);
        let endValue = this._transformAnimMap.get(endPos);

        if (beginValue === undefined && endValue !== undefined) {
            beginValue = endValue;
        } else if (beginValue !== undefined && endValue === undefined) {
            endValue = beginValue;
        } else if (beginValue === undefined && endValue === undefined) {
            return;
        }

        // translate3d
        if (beginValue.translate3d !== undefined) {
            const translate3dx = this._getStateValue(scrollPos, beginPos, endPos, beginValue.translate3d.x, endValue.translate3d.x);
            const translate3dy = this._getStateValue(scrollPos, beginPos, endPos, beginValue.translate3d.y, endValue.translate3d.y);
            const translate3dz = this._getStateValue(scrollPos, beginPos, endPos, beginValue.translate3d.z, endValue.translate3d.z);

            transform.translate3d = {x: translate3dx, y: translate3dy, z: translate3dz};
        }

        // scale
        if (beginValue.scale !== undefined) {
            const scale = this._getStateValue(scrollPos, beginPos, endPos, beginValue.scale, endValue.scale);
            transform.scale = scale;
        }

        shapeComp.transform = transform;
    }
}

// 滚动事件组件
class RollEventComp {
    constructor(data) {
        this.name = "RollEventComp";

        window.addEventListener("scroll", (event) => {

            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            let scrollPos = 0;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
                scrollPos = 1;
            } else if (scrollTop === 0) {
                scrollPos = 0;
            } else {
                scrollPos = Number((scrollTop / (scrollHeight - clientHeight)).toFixed(3));
            }
            data.cb(scrollPos);
        });
    }
}

new EffectManager();