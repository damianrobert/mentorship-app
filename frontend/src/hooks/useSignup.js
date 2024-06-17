"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../context/AuthContext");
var useSignup = function () {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var authContext = (0, AuthContext_1.useAuthContext)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var signup = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var success, response, data, error_1;
        var firstName = _b.firstName, lastName = _b.lastName, email = _b.email, password = _b.password, username = _b.username;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    success = handleInputErrors({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        username: username,
                    });
                    if (!success)
                        return [2 /*return*/];
                    setLoading(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch('/api/auth/signup', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                password: password,
                                username: username,
                            }),
                        })];
                case 2:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _c.sent();
                    if (data.error)
                        throw new Error(data.error);
                    localStorage.setItem('auth-user-info', JSON.stringify(data));
                    if (authContext && authContext.setAuthUser) {
                        authContext.setAuthUser(data);
                    }
                    if (success)
                        react_hot_toast_1.default.success('Signup successful');
                    navigate('/login');
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _c.sent();
                    react_hot_toast_1.default.error(error_1.message);
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return { loading: loading, signup: signup };
};
exports.default = useSignup;
var handleInputErrors = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, username = _a.username;
    if (!firstName || !lastName || !email || !password || !username) {
        react_hot_toast_1.default.error('Please fill in all fields');
        return false;
    }
    if (password.length < 8) {
        react_hot_toast_1.default.error('Password must be at least 8 characters');
        return false;
    }
    if (username.length < 5) {
        react_hot_toast_1.default.error('Username must be at least 5 characters');
        return false;
    }
    //TODO: Add more validation
    return true;
};
