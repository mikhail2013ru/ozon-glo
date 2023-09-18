/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/simple-notify/dist/simple-notify.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/simple-notify/dist/simple-notify.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notify)
/* harmony export */ });
var fadeIn = function (self) {
    self.wrapper.classList.add('notify--fade');
    setTimeout(function () {
        self.wrapper.classList.add('notify--fadeIn');
    }, 100);
};
var fadeOut = function (self) {
    self.wrapper.classList.remove('notify--fadeIn');
    setTimeout(function () {
        self.wrapper.remove();
    }, self.speed);
};
var slideIn = function (self) {
    self.wrapper.classList.add('notify--slide');
    setTimeout(function () {
        self.wrapper.classList.add('notify--slideIn');
    }, 100);
};
var slideOut = function (self) {
    self.wrapper.classList.remove('notify--slideIn');
    setTimeout(function () {
        self.wrapper.remove();
    }, self.speed);
};

var stringToHTML = function (strHTML) {
    var parser = new DOMParser(), content = 'text/html', DOM = parser.parseFromString(strHTML, content);
    return DOM.body.childNodes[0];
};

var Notify = /** @class */ (function () {
    function Notify(args) {
        var _this = this;
        this.notifyOut = function (callback) {
            callback(_this);
        };
        var status = args.status, _a = args.type, type = _a === void 0 ? 1 : _a, title = args.title, text = args.text, _b = args.showIcon, showIcon = _b === void 0 ? true : _b, _c = args.customIcon, customIcon = _c === void 0 ? '' : _c, _d = args.customClass, customClass = _d === void 0 ? '' : _d, _e = args.speed, speed = _e === void 0 ? 500 : _e, _f = args.effect, effect = _f === void 0 ? 'fade' : _f, _g = args.showCloseButton, showCloseButton = _g === void 0 ? true : _g, _h = args.autoclose, autoclose = _h === void 0 ? false : _h, _j = args.autotimeout, autotimeout = _j === void 0 ? 3000 : _j, _k = args.gap, gap = _k === void 0 ? 20 : _k, _l = args.distance, distance = _l === void 0 ? 20 : _l, _m = args.position, position = _m === void 0 ? 'right top' : _m, _o = args.customWrapper, customWrapper = _o === void 0 ? '' : _o;
        this.customWrapper = customWrapper;
        this.status = status;
        this.title = title;
        this.text = text;
        this.showIcon = showIcon;
        this.customIcon = customIcon;
        this.customClass = customClass;
        this.speed = speed;
        this.effect = effect;
        this.showCloseButton = showCloseButton;
        this.autoclose = autoclose;
        this.autotimeout = autotimeout;
        this.gap = gap;
        this.distance = distance;
        this.type = type;
        this.position = position;
        if (!this.checkRequirements()) {
            console.error("You must specify 'title' or 'text' at least.");
            return;
        }
        // set outer container for all Notify's
        this.setContainer();
        // set wrapper for each Notify
        this.setWrapper();
        this.setPosition();
        // set icon in the left
        if (this.showIcon)
            this.setIcon();
        // set close button
        if (this.showCloseButton)
            this.setCloseButton();
        // set title, text
        this.setContent();
        // add the Notify to our container
        this.container.prepend(this.wrapper);
        // init effect
        this.setEffect();
        this.notifyIn(this.selectedNotifyInEffect);
        // init autoclose
        if (this.autoclose)
            this.autoClose();
        // check whether Notify is visible
        this.setObserver();
    }
    Notify.prototype.checkRequirements = function () {
        return !!(this.title || this.text);
    };
    Notify.prototype.setContainer = function () {
        var container = document.querySelector('.notifications-container');
        if (container) {
            this.container = container;
        }
        else {
            this.container = document.createElement('div');
            this.container.classList.add('notifications-container');
            document.body.appendChild(this.container);
        }
        this.container.style.setProperty('--distance', this.distance + "px");
    };
    Notify.prototype.setPosition = function () {
        var prefix = 'notify-is-';
        this.position === 'center' ? this.container.classList.add(prefix + "center") : this.container.classList.remove(prefix + "center");
        this.position.includes('left') ? this.container.classList.add(prefix + "left") : this.container.classList.remove(prefix + "left");
        this.position.includes('right') ? this.container.classList.add(prefix + "right") : this.container.classList.remove(prefix + "right");
        this.position.includes('x-center') ? this.container.classList.add(prefix + "x-center") : this.container.classList.remove(prefix + "x-center");
        this.position.includes('top') ? this.container.classList.add(prefix + "top") : this.container.classList.remove(prefix + "top");
        this.position.includes('bottom') ? this.container.classList.add(prefix + "bottom") : this.container.classList.remove(prefix + "bottom");
        this.position.includes('y-center') ? this.container.classList.add(prefix + "y-center") : this.container.classList.remove(prefix + "y-center");
    };
    Notify.prototype.setCloseButton = function () {
        var _this = this;
        var icon_close = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.665.665 0 0 0 .947 0 .665.665 0 0 0 0-.947L8.94 8Z" fill="currentColor"/></svg>';
        var closeWrapper = document.createElement('div');
        closeWrapper.classList.add('notify__close');
        closeWrapper.innerHTML = icon_close;
        this.wrapper.appendChild(closeWrapper);
        closeWrapper.addEventListener('click', function () {
            _this.close();
        });
    };
    Notify.prototype.setWrapper = function () {
        if (this.customWrapper) {
            this.wrapper = stringToHTML(this.customWrapper);
        }
        else {
            this.wrapper = document.createElement('div');
        }
        this.wrapper.style.setProperty('--gap', this.gap + "px");
        this.wrapper.style.transitionDuration = this.speed + "ms";
        // set classes
        this.wrapper.classList.add('notify');
        this.wrapper.classList.add("notify--type-" + this.type);
        this.wrapper.classList.add("notify--" + this.status);
        if (this.autoclose)
            this.wrapper.style.setProperty('--timeout', "" + (this.autotimeout + this.speed));
        if (this.autoclose)
            this.wrapper.classList.add("notify-autoclose");
        if (this.customClass)
            this.wrapper.classList.add(this.customClass);
    };
    Notify.prototype.setContent = function () {
        var contentWrapper = document.createElement('div');
        contentWrapper.classList.add('notify-content');
        var titleElement, textElement;
        if (this.title) {
            titleElement = document.createElement('div');
            titleElement.classList.add('notify__title');
            titleElement.textContent = this.title;
            if (!this.showCloseButton)
                titleElement.style.paddingRight = '0';
        }
        if (this.text) {
            textElement = document.createElement('div');
            textElement.classList.add('notify__text');
            textElement.innerHTML = this.text.trim();
            if (!this.title)
                textElement.style.marginTop = '0';
        }
        this.wrapper.appendChild(contentWrapper);
        if (this.title)
            contentWrapper.appendChild(titleElement);
        if (this.text)
            contentWrapper.appendChild(textElement);
    };
    Notify.prototype.setIcon = function () {
        var icon_success = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m19.627 11.72-5.72 5.733-2.2-2.2a1.335 1.335 0 0 0-2.255.381 1.334 1.334 0 0 0 .375 1.5l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.334 1.334 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z"/></svg>';
        var icon_error = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z"/></svg>';
        var icon_warning = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13.666 15A1.333 1.333 0 0 0 15 13.667V8.334a1.333 1.333 0 0 0-2.665 0v5.333A1.333 1.333 0 0 0 13.666 15Zm-.507 5.227c.325.134.69.134 1.014 0 .164-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.075-.158.111-.332.106-.507a1.333 1.333 0 0 0-.386-.946 1.53 1.53 0 0 0-.44-.28A1.333 1.333 0 0 0 12.334 19a1.4 1.4 0 0 0 .386.947c.127.121.277.216.44.28ZM13.666 27a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24a10.667 10.667 0 1 1 0 21.333 10.667 10.667 0 0 1 0-21.333Z"/></svg>';
        var icon_info = '<svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 1 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28c-.117.13-.212.278-.28.44a1.12 1.12 0 0 0-.106.507 1.333 1.333 0 0 0 .386.946c.13.118.279.213.44.28a1.333 1.333 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z"/></svg>';
        var computedIcon = function (status) {
            switch (status) {
                case 'success':
                    return icon_success;
                case 'warning':
                    return icon_warning;
                case 'error':
                    return icon_error;
                case 'info':
                    return icon_info;
            }
        };
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('notify__icon');
        iconWrapper.innerHTML = this.customIcon || computedIcon(this.status);
        if (this.status || this.customIcon)
            this.wrapper.appendChild(iconWrapper);
    };
    Notify.prototype.setObserver = function () {
        var _this = this;
        var observer = new IntersectionObserver(function (entries) {
            if (!(entries[0].intersectionRatio <= 0)) {
                return;
            }
            else {
                _this.close();
            }
        }, {
            threshold: 0
        });
        setTimeout(function () {
            observer.observe(_this.wrapper);
        }, this.speed);
    };
    Notify.prototype.notifyIn = function (callback) {
        callback(this);
    };
    Notify.prototype.autoClose = function () {
        var _this = this;
        setTimeout(function () {
            _this.close();
        }, this.autotimeout + this.speed);
    };
    Notify.prototype.close = function () {
        this.notifyOut(this.selectedNotifyOutEffect);
    };
    Notify.prototype.setEffect = function () {
        switch (this.effect) {
            case 'fade':
                this.selectedNotifyInEffect = fadeIn;
                this.selectedNotifyOutEffect = fadeOut;
                break;
            case 'slide':
                this.selectedNotifyInEffect = slideIn;
                this.selectedNotifyOutEffect = slideOut;
                break;
            default:
                this.selectedNotifyInEffect = fadeIn;
                this.selectedNotifyOutEffect = fadeOut;
        }
    };
    return Notify;
}());




/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ "./src/js/modules/renderCart.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ "./src/js/modules/postData.js");
/* harmony import */ var _shopCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopCart */ "./src/js/modules/shopCart.js");




const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')
    const cartTotal = cartModal.querySelector('.cart-total > span')
    const cartSendBtn = cartModal.querySelector('.cart-confirm')
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []

        if (cart.length === 0) {
            cartSendBtn.classList.add('btn--disabled')
        } else {
            cartSendBtn.classList.remove('btn--disabled')
        }
        // cartModal.style.display = 'flex'
        cartModal.classList.add('cart--active')

        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    const closeCart = () => {
        // cartModal.style.display = ''
        cartModal.classList.remove('cart--active')
    }

    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.addEventListener('click', closeCart)

    goodsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))   

            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))

            ;(0,_shopCart__WEBPACK_IMPORTED_MODULE_2__["default"])(cart)
        }
    })

    cartWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
            const card = e.target.closest('.card')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
            ;(0,_shopCart__WEBPACK_IMPORTED_MODULE_2__["default"])(cart)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? 
            JSON.parse(localStorage.getItem('cart')) : []

            ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__["default"])(cart).then(() => {
                localStorage.removeItem('cart')
                ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])([])
                cartTotal.textContent = 0
                ;(0,_shopCart__WEBPACK_IMPORTED_MODULE_2__["default"])(cart)
    
                setTimeout(() => {
                    cartModal.classList.remove('cart--active')
                }, 900)
            })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);

/***/ }),

/***/ "./src/js/modules/catalog.js":
/*!***********************************!*\
  !*** ./src/js/modules/catalog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/js/modules/getData.js");
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ "./src/js/modules/renderGoods.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");




const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog li')

    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen

        if(isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent
            isOpen = !isOpen

            if(isOpen) {
                catalogModal.style.display = 'block'
            } else {
                catalogModal.style.display = ''
            }
            
            (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])().then((data) => {
                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))
            })
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);

/***/ }),

/***/ "./src/js/modules/filters.js":
/*!***********************************!*\
  !*** ./src/js/modules/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),
/* harmony export */   funcFilter: () => (/* binding */ funcFilter)
/* harmony export */ });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price */ "./src/js/modules/price.js");


const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value 
    })
}

const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
    return goods.filter((goodsItem) => {
        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue) : true
        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue) : true
        const isSale = checkValue ? goodsItem.sale : true
        
        if (_price__WEBPACK_IMPORTED_MODULE_0__.check.checked) {
            return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
        } else {
            return isMin && isMax && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
        }
    })
}

/***/ }),

/***/ "./src/js/modules/getData.js":
/*!***********************************!*\
  !*** ./src/js/modules/getData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-notify */ "./node_modules/simple-notify/dist/simple-notify.es.js");


const getData = (str) => {
    return fetch(
        `https://ozone-glo-70f5c-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}`: ''}`
        )
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ошибка запроса')
            }
        })
        .catch(error => {
            new simple_notify__WEBPACK_IMPORTED_MODULE_0__["default"]({
                status: 'error',
                title: 'Ошибка!',
                text: error.message,
                effect: 'slide',
                type: 3,
                autoclose: true,
            })

        })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/js/modules/helpers.js":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
const debounce = (func, ms = 300) => {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {func.apply(undefined, args)}, ms)
    }
}

/***/ }),

/***/ "./src/js/modules/load.js":
/*!********************************!*\
  !*** ./src/js/modules/load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/js/modules/getData.js");
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ "./src/js/modules/renderGoods.js");



const load = () => {
    (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])().then((data) => {
        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__["default"])(data)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);

/***/ }),

/***/ "./src/js/modules/postData.js":
/*!************************************!*\
  !*** ./src/js/modules/postData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    
        .then(response => response.json())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ }),

/***/ "./src/js/modules/price.js":
/*!*********************************!*\
  !*** ./src/js/modules/price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   check: () => (/* binding */ check),
/* harmony export */   debounceFunc: () => (/* binding */ debounceFunc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   priceMax: () => (/* binding */ priceMax),
/* harmony export */   priceMin: () => (/* binding */ priceMin)
/* harmony export */ });
/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoods */ "./src/js/modules/renderGoods.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/js/modules/getData.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/js/modules/helpers.js");





const price = () => {
    // console.log('price');
    const priceMin = document.getElementById('min')
    const priceMax = document.getElementById('max')
    const check = document.getElementById('discount-checkbox')
    const checkMark = document.querySelector('.filter-check_checkmark')
    const searchInput = document.querySelector('.search-wrapper_input')
    
    const debounceFunc = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.debounce)((min = '', max = '', checkValue = false, searchValue = '') => {
        ;(0,_getData__WEBPACK_IMPORTED_MODULE_1__["default"])().then((data) => {
            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.funcFilter)(data, min, max, checkValue, searchValue))
        })
    })
    
    priceMin.addEventListener('input', () => {
        debounceFunc(priceMin.value, priceMax.value, check.value, searchInput.value)
    })

    priceMax.addEventListener('input', () => {
        debounceFunc(priceMin.value, priceMax.value, check.checked, searchInput.value)
    })

    check.addEventListener('input', () => {
        if (check.checked) {
            checkMark.classList.add('checked')
        } else {
            checkMark.classList.remove('checked')
        }

        debounceFunc(priceMin.value, priceMax.value, check.checked, searchInput.value)
    })

    return { debounceFunc, priceMin, priceMax, check }
}

const { debounceFunc, priceMin, priceMax, check } = price()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);

/***/ }),

/***/ "./src/js/modules/renderCart.js":
/*!**************************************!*\
  !*** ./src/js/modules/renderCart.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')
    cartWrapper.innerHTML = ''

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `)
    } else {
        goods.forEach(goodsItem => {
            cartWrapper.insertAdjacentHTML('beforeend', `
                    <div class="card" data-key="${goodsItem.id}">
                        ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                        <div class="card-img-wrapper">
                            <span class="card-img-top"
                                style="background-image: url('${goodsItem.img}')"></span>
                        </div>
                        <div class="card-body justify-content-between">
                            <div class="card-price">${goodsItem.price} ₽</div>
                            <h5 class="card-title">${goodsItem.title}</h5>
                            <button class="btn btn-primary">Удалить</button>
                        </div>
                    </div>
            `)
        });
    }    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);

/***/ }),

/***/ "./src/js/modules/renderGoods.js":
/*!***************************************!*\
  !*** ./src/js/modules/renderGoods.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGoods = (goods) => {
    const goodsWrapper = document.querySelector('.goods')

    localStorage.setItem('goods', JSON.stringify(goods))

    goodsWrapper.innerHTML = ''
    
    goods.forEach(goodsItem => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card" data-key="${goodsItem.id}">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${goodsItem.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${goodsItem.price} ₽</div>
                        <h5 class="card-title">${goodsItem.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `)
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price */ "./src/js/modules/price.js");


const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    
    searchInput.addEventListener('input', () => {
        ;(0,_price__WEBPACK_IMPORTED_MODULE_0__.debounceFunc)(_price__WEBPACK_IMPORTED_MODULE_0__.priceMin.value, _price__WEBPACK_IMPORTED_MODULE_0__.priceMax.value, _price__WEBPACK_IMPORTED_MODULE_0__.check.value, searchInput.value)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);

/***/ }),

/***/ "./src/js/modules/shopCart.js":
/*!************************************!*\
  !*** ./src/js/modules/shopCart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shopCart = () => {
    const cartCounter = document.querySelector('.counter')
    const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : []
    
    if (cart.length !== 0) {
        cartCounter.textContent = cart.length
    } else {
        cartCounter.textContent = 0
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopCart);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ "./src/js/modules/cart.js");
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ "./src/js/modules/load.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ "./src/js/modules/catalog.js");
/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ "./src/js/modules/price.js");
/* harmony import */ var _modules_shopCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shopCart */ "./src/js/modules/shopCart.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");









(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_modules_shopCart__WEBPACK_IMPORTED_MODULE_5__["default"])()
 
})();

/******/ })()
;
//# sourceMappingURL=main.js.map