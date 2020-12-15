// ==UserScript==
// @name         Details Summary
// @version      0.0.5
// @downloadURL  https://raw.githubusercontent.com/Tech1Code/details-summary/main/script.js
// @updateURL    https://raw.githubusercontent.com/Tech1Code/details-summary/main/script.js   
// @match        https://prkar.mcls.gov.ir/apps/tasklist/inbox/task?taskId=*
// @grant        none
// ==/UserScript==
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    'use strict';
    var form = document.createElement('div');
    var panel = document.createElement('div');
    var panelHeadingDiv = document.createElement('div');
    var panelHeading = document.createElement('h4');
    var panelBody = document.createElement('div');
    var fieldSet = document.createElement('fieldset');
    var cardBody = document.createElement('div');
    var row1 = document.createElement('div');
    var row2 = document.createElement('div');
    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var textArea = document.createElement('textarea');
    var textAreaLabel = document.createElement('label');
    var textAreaComponent = document.createElement('div');
    var getButton = document.createElement('button');
    getButton.addEventListener('click', function (event) { return getDetails(); });
    // window.addEventListener('load', event => {
    // panel heading
    panelHeading.textContent = 'خلاصه مشخصات';
    panelHeading.classList.add('mb-0', 'card-title', 'panel-title');
    panelHeadingDiv.appendChild(panelHeading);
    // panel heading div
    panelHeadingDiv.classList.add('card-header', 'bg-danger', 'panel-heading');
    panel.appendChild(panelHeadingDiv);
    // card body
    cardBody.classList.add('card-body');
    fieldSet.appendChild(cardBody);
    // panel fieldset
    fieldSet.classList.add('form-group', 'formio-component', 'formio-component-fieldset', 'formio-component-embedFormthree', 'fieldset-nostyle');
    panelBody.appendChild(fieldSet);
    // panel body
    panelBody.classList.add('card-body', 'panel-body');
    panel.appendChild(panelBody);
    // textarea component
    textAreaComponent.classList.add('formio-component');
    row1.appendChild(textAreaComponent);
    // adds text area and text area label
    textArea.disabled = true;
    textArea.id = 'summarization-textarea';
    textAreaLabel.htmlFor = 'textArea.id';
    textAreaLabel.textContent = 'خلاصه متنی';
    textAreaLabel.classList.add('control-label');
    textArea.classList.add('form-control');
    textAreaComponent.appendChild(textAreaLabel);
    textAreaComponent.appendChild(textArea);
    // row 1
    cardBody.appendChild(row1);
    // row 2
    row2.classList.add('row', 'formio-component', 'formio-component-columns', 'formio-component-undefinedColumns');
    row2.style.margin = '1em';
    cardBody.appendChild(row2);
    // adds get button
    getButton.textContent = 'دریافت مشخصات';
    getButton.classList.add('btn', 'btn-danger');
    column1.appendChild(getButton);
    // column1
    column1.classList.add('col', 'col-sm-6', 'col-sm-offset-0', 'col-sm-push-0', 'col-sm-pull-0');
    column1.style.textAlign = 'left';
    row2.appendChild(column1);
    // message
    var msgEl = document.createElement('div');
    msgEl.style.borderRadius = '5px';
    msgEl.classList.add('alert');
    column2.appendChild(msgEl);
    // column2
    column2.classList.add('col', 'col-sm-6', 'col-sm-offset-0', 'col-sm-push-0', 'col-sm-pull-0');
    row2.appendChild(column2);
    // panel
    panel.classList.add('mb-2', 'card', 'border', 'panel', 'panel-danger');
    form.appendChild(panel);
    // adds form to dom
    form.classList.add('col-md-10', 'formstyle', 'null', 'formio-form');
    var rtl = document.querySelector('div#content div.inner div.container-fluid div.formio-common-rtl');
    rtl.insertBefore(form, rtl.firstChild);
    // });
    function getDetails() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __awaiter(this, void 0, void 0, function () {
            var titles, values, summaryColumns, _i, summaryColumns_1, column, i, div, label, input, _p, summaryColumns_2, column, e_1;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        titles = [
                            'نام',
                            'شماره بیمه',
                            'نظر کارشناس اداره کار',
                            'علت بیکاری',
                            'تاریخ شروع بیکاری',
                            'کد ملی',
                            'تلفن همراه',
                            'تعداد افراد تحت تکفل',
                            'شماره شبا',
                            'بانک عامل',
                        ];
                        values = [
                            fixLocale((_a = document.querySelector('#firstName')) === null || _a === void 0 ? void 0 : _a.value) + " " + fixLocale((_b = document.querySelector('#lastName')) === null || _b === void 0 ? void 0 : _b.value),
                            fixLocale((_c = document.querySelector('#insuranceNumber')) === null || _c === void 0 ? void 0 : _c.value),
                            ((_d = document.querySelector('#eevpnmp div.form-group > div:nth-child(1) label input')) === null || _d === void 0 ? void 0 : _d.checked) ? 'موافق'
                                : (((_e = document.querySelector('#eevpnmp div.form-group > div:nth-child(2) label input')) === null || _e === void 0 ? void 0 : _e.checked) ? 'مخالف'
                                    : (((_f = document.querySelector('#eevpnmp div.form-group > div:nth-child(3) label input')) === null || _f === void 0 ? void 0 : _f.checked) ? 'نقص مدرک'
                                        : 'عدم اعلام نظر')),
                            fixLocale((_g = document.querySelector('div.formio-component-causeOfLosingJob div span')) === null || _g === void 0 ? void 0 : _g.textContent),
                            fixLocale(new Date((_h = document.querySelector('#unemployStart')) === null || _h === void 0 ? void 0 : _h.value).toLocaleDateString("fa-IR", { year: 'numeric', month: '2-digit', day: '2-digit' })),
                            fixLocale((_j = document.querySelector('#ptidNationalCd')) === null || _j === void 0 ? void 0 : _j.value),
                            fixLocale((_k = document.querySelector('#mobileNumber')) === null || _k === void 0 ? void 0 : _k.value),
                            fixLocale((_l = document.querySelector('#dependants')) === null || _l === void 0 ? void 0 : _l.value),
                            fixLocale((_m = document.querySelector('#shabaNumber')) === null || _m === void 0 ? void 0 : _m.value),
                            fixLocale((_o = document.querySelector('#bank')) === null || _o === void 0 ? void 0 : _o.value)
                                .replace('بانک ', '')
                                .replace('رفاه کارگران', 'رفاه'),
                        ];
                        if (values.length === 0) {
                            displayMessage('خطا در استخراج اطلاعات', false);
                            return [2 /*return*/];
                        }
                        summaryColumns = [
                            document.createElement('div'),
                            document.createElement('div'),
                            document.createElement('div'),
                            document.createElement('div'),
                            document.createElement('div'),
                        ];
                        for (_i = 0, summaryColumns_1 = summaryColumns; _i < summaryColumns_1.length; _i++) {
                            column = summaryColumns_1[_i];
                            column.classList.add('col', 'col-sm-2', 'col-sm-offset-0', 'col-sm-push-0', 'col-sm-pull-0');
                        }
                        summaryColumns[0].classList.replace('col-sm-2', 'col-sm-3');
                        summaryColumns[3].classList.replace('col-sm-2', 'col-sm-3');
                        if (titles.length !== values.length) {
                            console.error('خطای خلاصه سازی: تعداد عناوین با مقادیر یکسان نیست');
                        }
                        console.log('نتایج خلاصه سازی');
                        for (i = 0; i < titles.length; ++i) {
                            console.log(i, values[i], ': ', titles[i]);
                            div = document.createElement('div');
                            label = document.createElement('label');
                            input = document.createElement('input');
                            div.classList.add('form-group', 'has-feedback', 'formio-component', 'formio-component-textfield', 'formio-disabled-input');
                            input.id = 'summarization-' + i.toString();
                            input.value = values[i];
                            input.classList.add('form-control');
                            input.disabled = true;
                            if (values[i] === undefined || values[i] === null || values[i].length === 0) {
                                input.style.backgroundColor = 'rgba(47, 17, 255, 0.58)';
                                input.style.color = 'white';
                                input.value = '[خالی]';
                            }
                            label.classList.add('control-label');
                            label.htmlFor = input.id;
                            label.textContent = titles[i];
                            div.appendChild(label);
                            div.appendChild(input);
                            summaryColumns[i % summaryColumns.length].appendChild(div);
                        }
                        textArea.textContent = fixLocale(values.join('\t'));
                        for (_p = 0, summaryColumns_2 = summaryColumns; _p < summaryColumns_2.length; _p++) {
                            column = summaryColumns_2[_p];
                            textAreaComponent.appendChild(column);
                        }
                        textArea.style.marginBottom = '20px';
                        _q.label = 1;
                    case 1:
                        _q.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(textArea.textContent)];
                    case 2:
                        _q.sent();
                        displayMessage('اطلاعات دریافت و کپی شد', true);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _q.sent();
                        displayMessage('خطا در کپی', false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function displayMessage(msg, successful) {
        // msgEl.classList.remove('alert-success', 'alert-danger');
        if (successful) {
            msgEl.style.color = '#155724';
            msgEl.style.backgroundColor = '#d4edda';
            msgEl.style.borderColor = '#c3e6cb';
        }
        else {
            msgEl.style.color = '#721c24';
            msgEl.style.backgroundColor = '#f8d7da';
            msgEl.style.borderColor = '#f5c6cb';
        }
        msgEl.classList.add(successful ? 'alert-info' : 'alert-danger');
        msgEl.textContent = msg;
    }
    function fixLocale(str) {
        var _a, _b;
        return (_b = (_a = str === null || str === void 0 ? void 0 : str.replace(/[۰-۹]/g, function (w) { return (w.charCodeAt(0) - 0x06f0).toString(); })) === null || _a === void 0 ? void 0 : _a.replace('ك', 'ک')) === null || _b === void 0 ? void 0 : _b.replace('ي', 'ی');
    }
})();
