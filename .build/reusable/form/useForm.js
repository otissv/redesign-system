import * as tslib_1 from "tslib";
import { useCallback, useMemo, useReducer, useRef } from 'react';
import cuid from 'cuid';
import { useNotEqualEffect } from '../useNotEqualEffect';
import isEmpty from 'lodash/isEmpty';
//TODO: add hide boolean / function
var modelDefaults = function modelDefaults(_a) {
    var _b = _a === void 0 ? {} : _a, id = _b.id, isValid = _b.isValid, parent = _b.parent, touched = _b.touched;
    return {
        dirty: touched || false,
        id: id || cuid(),
        isValid: isValid || true,
        parent: parent && parent.id,
        touched: touched || false,
    };
};
export function useForm(_a) {
    var _b = _a.initialState, initialState = _b === void 0 ? { fields: [] } : _b, onBlur = _a.onBlur, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var reducer = useCallback(function reducer(state, payload) {
        var parent = payload.parent ? payload.parent.split('-') : [];
        return updateState(state, tslib_1.__assign({}, payload, { parent: parent }));
    }, [updateState]);
    var initialStateRef = useRef();
    var mapInitialState = tslib_1.__assign({}, modelDefaults(), { fields: buildModel({
            fields: initialState.fields,
            parent: null,
        }) });
    var _c = useReducer(reducer, mapInitialState), model = _c[0], dispatch = _c[1];
    useNotEqualEffect(function () {
        dispatch({
            type: 'FORM_REPLACE',
            model: tslib_1.__assign({}, initialState, { fields: buildModel({
                    fields: initialState.fields,
                    parent: null,
                }) }),
        });
        initialStateRef.current = initialState;
    }, [initialState, initialStateRef.current]);
    function handleBlur(e) {
        var _a = e.currentTarget, id = _a.id, parent = _a.dataset.parent;
        var field = getField(function (result) { return result; })({
            id: id,
            parent: parent,
            fields: model.fields,
        });
        field.data.attributes && validator({ id: id, parent: parent, model: model, dispatch: dispatch });
        onBlur && onBlur(e, { field: field, model: model, dispatch: dispatch });
    }
    function handleChange(e) {
        var _a = e.target, id = _a.id, parent = _a.dataset.parent;
        var field = getField(id);
        var data = {
            text: {
                value: e.target.value,
            },
            checkbox: {
                checked: e.target.checked,
            },
            radio: {
                value: e.target.value,
            },
        }[e.target.type] || { value: e.target.value };
        onChange && onChange(e, { field: field, model: model, dispatch: dispatch });
        dispatch({
            type: 'FORM_UPDATE',
            attributes: data,
            id: id,
            parent: parent,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        var errors = [];
        var reduceValues = function (previous, field) {
            var _a;
            var _b = field.attributes, checked = _b.checked, name = _b.name, value = _b.value, children = field.children, id = field.id, parent = field.parent;
            var currentValue = function () {
                return typeof checked !== 'undefined' ? checked : value;
            };
            var isValid = validator({
                id: id,
                parent: parent,
                model: model,
                dispatch: dispatch,
            });
            if (!isValid) {
                errors.push({ name: name, id: id });
            }
            return name
                ? tslib_1.__assign({}, previous, (_a = {}, _a[name] = children
                    ? tslib_1.__assign({}, previous[name], getValues(children)) : currentValue(), _a)) : previous;
        };
        var getValues = function (fields) {
            return fields.reduce(reduceValues, {});
        };
        var result = {
            errors: errors,
            values: getValues(model.fields),
        };
        onSubmit(result, model);
    }
    return useMemo(function () { return ({ dispatch: dispatch, model: model, handleChange: handleChange, handleBlur: handleBlur, handleSubmit: handleSubmit }); }, [dispatch, model, handleChange, handleBlur, handleSubmit]);
}
export function buildModel(_a) {
    var fields = _a.fields, parent = _a.parent;
    return fields.map(function (field) {
        var attributes = field.attributes, id = field.id, isValid = field.isValid, name = field.name, touched = field.touched;
        var obj = tslib_1.__assign({}, field, { attributes: tslib_1.__assign({}, attributes, { name: name || (attributes && attributes.name) || parent.name }) }, modelDefaults({ id: id, isValid: isValid, parent: parent, touched: touched }));
        return field.children
            ? tslib_1.__assign({}, obj, { children: buildModel({
                    fields: field.children,
                    parent: field,
                }) }) : obj;
    });
}
var getField = function getField(cb) {
    return function (_a) {
        var fields = _a.fields, id = _a.id, parent = _a.parent;
        var parentArray;
        if (Array.isArray(parent)) {
            parentArray = [];
        }
        else if (typeof parent === 'string') {
            parentArray = parent.split('-');
        }
        else {
            parentArray = [];
        }
        var parentId = parent && parentArray[0].trim() !== '' && parentArray[0];
        var field = fields.filter(function (item) { return item.id === (parentId || id); })[0] || {};
        var index = fields.findIndex(function (item) { return item.id === (parentId || id); });
        return field.children
            ? getField(cb)({
                fields: field.children,
                parent: parentArray.splice(1, parent.length),
                id: id,
            })
            : cb({ data: field, index: index });
    };
};
function updateState(_a, payload) {
    var fields = _a.fields, state = tslib_1.__rest(_a, ["fields"]);
    var type = payload.type, attributes = payload.attributes, id = payload.id, model = payload.model, parent = payload.parent, dataRest = tslib_1.__rest(payload, ["type", "attributes", "id", "model", "parent"]);
    switch (type) {
        case 'FORM_REPLACE':
            return model;
        case 'FORM_UPDATE': {
            var parentId_1 = parent.length > 0 && parent[0].trim() !== '' && parent[0];
            var field_1 = fields.filter(function (item) { return item.id === (parentId_1 || id); })[0];
            var index = fields.findIndex(function (item) { return item.id === (parentId_1 || id); });
            var parentData = function () {
                var buildFieldChildren = function (children) {
                    return children.map(function (child) {
                        var childUpdate = child.id === id
                            ? tslib_1.__assign({}, dataRest, { attributes: tslib_1.__assign({}, child.attributes, attributes) }) : tslib_1.__assign({}, (child.children
                            ? { children: buildFieldChildren(child.children) }
                            : {}));
                        return tslib_1.__assign({}, child, { dirty: true, touched: true }, childUpdate);
                    });
                };
                return tslib_1.__assign({}, field_1, dataRest, { attributes: tslib_1.__assign({}, field_1.attributes, attributes, { dirty: true, touched: true }) }, (field_1.children
                    ? { children: buildFieldChildren(field_1.children) }
                    : {}));
            };
            var fieldData = function () {
                return tslib_1.__assign({}, field_1, dataRest, { attributes: tslib_1.__assign({}, field_1.attributes, attributes), dirty: true, touched: true });
            };
            var data = parent.length > 0 ? parentData() : fieldData();
            var isUndefined = function (value) { return typeof value === 'undefined'; };
            return tslib_1.__assign({}, state, { dirty: isUndefined(dataRest.dirty) ? state.dirty : true, touched: isUndefined(dataRest.touched) ? state.touched : true, isValid: isUndefined(dataRest.isValid)
                    ? state.isValid
                    : dataRest.isValid, fields: index === 0
                    ? [data].concat(fields.slice(1, fields.length)) : index === state.length - 1
                    ? fields.slice(0, fields.length - 1).concat([data]) : fields.slice(0, index).concat([
                    data
                ], fields.slice(index + 1, fields.length)) });
        }
        default:
            return state;
    }
}
export function validator(_a) {
    var dispatch = _a.dispatch, id = _a.id, model = _a.model, parent = _a.parent;
    //TODO: fix for children. Not getting errors
    var _field = 
    //field ||
    getField(function (_a) {
        var data = _a.data;
        return data;
    })({
        id: id,
        parent: parent,
        fields: model.fields,
    });
    if (!_field)
        return false;
    var isValid = _field.isValid, fieldValidation = _field.validate;
    var _b = _field.attributes || {}, _c = _b.value, value = _c === void 0 ? '' : _c, _d = _b.required, required = _d === void 0 ? null : _d, _e = _b.checked, checked = _e === void 0 ? null : _e;
    var payload = { id: id, parent: parent };
    var hasChecked = checked == null;
    var hasValue = value || value.trim() !== '';
    var notValid = (required && hasChecked && !hasValue) ||
        (fieldValidation && fieldValidation(_field, model, dispatch));
    if (!notValid !== isValid && !isEmpty(_field)) {
        dispatch(tslib_1.__assign({ type: 'FORM_UPDATE' }, payload, { isValid: !notValid }));
    }
    return !notValid;
}
//# sourceMappingURL=useForm.js.map