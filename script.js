// ==UserScript==
// @name         Details Summary
// @version      0.0.1
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
    // adds text area
    textArea.disabled = true;
    textArea.classList.add('form-control');
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
        return __awaiter(this, void 0, void 0, function () {
            var content, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = [
                            document.querySelector('#firstName').value + " " + document.querySelector('#lastName').value,
                            document.querySelector('#insuranceNumber').value,
                            document.querySelector('#eevpnmp div.form-group > div:nth-child(1) label input').checked
                                ? 'موافق'
                                : (document.querySelector('#eevpnmp div.form-group > div:nth-child(2) label input').checked
                                    ? 'مخالف'
                                    : (document.querySelector('#eevpnmp div.form-group > div:nth-child(3) label input').checked
                                        ? 'نقص مدرک'
                                        : 'عدم اعلام نظر')),
                            document.querySelector('div.formio-component-causeOfLosingJob div span').textContent,
                            new Date(document.querySelector('#unemployStart').value).toLocaleDateString("fa-IR"),
                            document.querySelector('#ptidNationalCd').value,
                            document.querySelector('#mobileNumber').value
                        ].join('\t');
                        if (content.length === 0) {
                            displayMessage('خطا در استخراج اطلاعات', false);
                            return [2 /*return*/];
                        }
                        textArea.textContent = content;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(content)];
                    case 2:
                        _a.sent();
                        displayMessage('اطلاعات دریافت و کپی شد', true);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
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
})();
