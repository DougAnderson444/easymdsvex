(function() {
  "use strict";
  /*
  	  @license
  		Rollup.js v2.71.1
  		Sat, 30 Apr 2022 13:35:44 GMT - commit f44a3a38b357c2ba80a99aca36cfd30dcfb84476
  
  		https://github.com/rollup/rollup
  
  		Released under the MIT License.
  	*/
  for (var t = {}, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i$3 = 0; i$3 < s.length; i$3++)
    t[s.charCodeAt(i$3)] = i$3;
  function M(e, t2, s2) {
    const i2 = e.get(t2);
    if (i2)
      return i2;
    const n = s2();
    return e.set(t2, n), n;
  }
  const D = Symbol("Unknown Key"), L = Symbol("Unknown Integer"), O = [], V = [D], B = [L], F$1 = Symbol("Entities");
  class z {
    constructor() {
      this.entityPaths = Object.create(null, { [F$1]: { value: /* @__PURE__ */ new Set() } });
    }
    trackEntityAtPathAndGetIfTracked(e, t2) {
      const s2 = this.getEntities(e);
      return !!s2.has(t2) || (s2.add(t2), false);
    }
    withTrackedEntityAtPath(e, t2, s2, i2) {
      const n = this.getEntities(e);
      if (n.has(t2))
        return i2;
      n.add(t2);
      const r = s2();
      return n.delete(t2), r;
    }
    getEntities(e) {
      let t2 = this.entityPaths;
      for (const s2 of e)
        t2 = t2[s2] = t2[s2] || Object.create(null, { [F$1]: { value: /* @__PURE__ */ new Set() } });
      return t2[F$1];
    }
  }
  const W = new z();
  class j {
    constructor() {
      this.entityPaths = Object.create(null, { [F$1]: { value: /* @__PURE__ */ new Map() } });
    }
    trackEntityAtPathAndGetIfTracked(e, t2, s2) {
      let i2 = this.entityPaths;
      for (const t3 of e)
        i2 = i2[t3] = i2[t3] || Object.create(null, { [F$1]: { value: /* @__PURE__ */ new Map() } });
      const n = M(i2[F$1], t2, () => /* @__PURE__ */ new Set());
      return !!n.has(s2) || (n.add(s2), false);
    }
  }
  const U$2 = Symbol("Unknown Value");
  class G {
    constructor() {
      this.included = false;
    }
    deoptimizePath(e) {
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      s2.deoptimizePath(V);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return U$2;
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return H;
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return true;
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return true;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return true;
    }
    include(e, t2) {
      this.included = true;
    }
    includeCallArguments(e, t2) {
      for (const s2 of t2)
        s2.include(e, false);
    }
  }
  const H = new class extends G {
  }();
  class q extends G {
    constructor(e) {
      super(), this.name = e, this.alwaysRendered = false, this.initReached = false, this.isId = false, this.isReassigned = false, this.kind = null, this.renderBaseName = null, this.renderName = null;
    }
    addReference(e) {
    }
    getBaseVariableName() {
      return this.renderBaseName || this.renderName || this.name;
    }
    getName(e) {
      const t2 = this.renderName || this.name;
      return this.renderBaseName ? `${this.renderBaseName}${e(t2)}` : t2;
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return e.length > 0;
    }
    include() {
      this.included = true;
    }
    markCalledFromTryStatement() {
    }
    setRenderNames(e, t2) {
      this.renderBaseName = e, this.renderName = t2;
    }
  }
  const X = Object.freeze(/* @__PURE__ */ Object.create(null));
  Object.freeze({});
  Object.freeze([]);
  var he;
  !function(e) {
    e.ALREADY_CLOSED = "ALREADY_CLOSED", e.ASSET_NOT_FINALISED = "ASSET_NOT_FINALISED", e.ASSET_NOT_FOUND = "ASSET_NOT_FOUND", e.ASSET_SOURCE_ALREADY_SET = "ASSET_SOURCE_ALREADY_SET", e.ASSET_SOURCE_MISSING = "ASSET_SOURCE_MISSING", e.BAD_LOADER = "BAD_LOADER", e.CANNOT_EMIT_FROM_OPTIONS_HOOK = "CANNOT_EMIT_FROM_OPTIONS_HOOK", e.CHUNK_NOT_GENERATED = "CHUNK_NOT_GENERATED", e.CHUNK_INVALID = "CHUNK_INVALID", e.CIRCULAR_REEXPORT = "CIRCULAR_REEXPORT", e.CYCLIC_CROSS_CHUNK_REEXPORT = "CYCLIC_CROSS_CHUNK_REEXPORT", e.DEPRECATED_FEATURE = "DEPRECATED_FEATURE", e.EXTERNAL_SYNTHETIC_EXPORTS = "EXTERNAL_SYNTHETIC_EXPORTS", e.FILE_NAME_CONFLICT = "FILE_NAME_CONFLICT", e.FILE_NOT_FOUND = "FILE_NOT_FOUND", e.INPUT_HOOK_IN_OUTPUT_PLUGIN = "INPUT_HOOK_IN_OUTPUT_PLUGIN", e.INVALID_CHUNK = "INVALID_CHUNK", e.INVALID_EXPORT_OPTION = "INVALID_EXPORT_OPTION", e.INVALID_EXTERNAL_ID = "INVALID_EXTERNAL_ID", e.INVALID_OPTION = "INVALID_OPTION", e.INVALID_PLUGIN_HOOK = "INVALID_PLUGIN_HOOK", e.INVALID_ROLLUP_PHASE = "INVALID_ROLLUP_PHASE", e.MISSING_EXPORT = "MISSING_EXPORT", e.MISSING_IMPLICIT_DEPENDANT = "MISSING_IMPLICIT_DEPENDANT", e.MIXED_EXPORTS = "MIXED_EXPORTS", e.NAMESPACE_CONFLICT = "NAMESPACE_CONFLICT", e.AMBIGUOUS_EXTERNAL_NAMESPACES = "AMBIGUOUS_EXTERNAL_NAMESPACES", e.NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE = "NO_TRANSFORM_MAP_OR_AST_WITHOUT_CODE", e.PLUGIN_ERROR = "PLUGIN_ERROR", e.PREFER_NAMED_EXPORTS = "PREFER_NAMED_EXPORTS", e.SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT = "SYNTHETIC_NAMED_EXPORTS_NEED_NAMESPACE_EXPORT", e.UNEXPECTED_NAMED_IMPORT = "UNEXPECTED_NAMED_IMPORT", e.UNRESOLVED_ENTRY = "UNRESOLVED_ENTRY", e.UNRESOLVED_IMPORT = "UNRESOLVED_IMPORT", e.VALIDATION_ERROR = "VALIDATION_ERROR";
  }(he || (he = {}));
  var be = /* @__PURE__ */ new Set(["await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "NaN", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "undefined", "var", "void", "while", "with", "yield"]);
  new Set("break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" ")).add("");
  function Ce() {
    return { brokenFlow: 0, includedCallArguments: /* @__PURE__ */ new Set(), includedLabels: /* @__PURE__ */ new Set() };
  }
  function Ie() {
    return { accessed: new z(), assigned: new z(), brokenFlow: 0, called: new j(), ignore: { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: false }, includedLabels: /* @__PURE__ */ new Set(), instantiated: new j(), replacedVariableInits: /* @__PURE__ */ new Map() };
  }
  const Ne = [];
  function _e(e, t2 = null) {
    return Object.create(t2, e);
  }
  const $e = new class extends G {
    getLiteralValueAtPath() {
    }
  }(), Te = { value: { callsArgs: null, returns: H } }, Re = new class extends G {
    getReturnExpressionWhenCalledAtPath(e) {
      return e.length === 1 ? Ue(Fe, e[0]) : H;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return e.length !== 1 || je(Fe, e[0], t2, s2);
    }
  }(), Me = { value: { callsArgs: null, returns: Re } }, De = new class extends G {
    getReturnExpressionWhenCalledAtPath(e) {
      return e.length === 1 ? Ue(ze, e[0]) : H;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return e.length !== 1 || je(ze, e[0], t2, s2);
    }
  }(), Le = { value: { callsArgs: null, returns: De } }, Oe = new class extends G {
    getReturnExpressionWhenCalledAtPath(e) {
      return e.length === 1 ? Ue(We, e[0]) : H;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return e.length !== 1 || je(We, e[0], t2, s2);
    }
  }(), Ve = { value: { callsArgs: null, returns: Oe } }, Be = _e({ hasOwnProperty: Me, isPrototypeOf: Me, propertyIsEnumerable: Me, toLocaleString: Ve, toString: Ve, valueOf: Te }), Fe = _e({ valueOf: Me }, Be), ze = _e({ toExponential: Ve, toFixed: Ve, toLocaleString: Ve, toPrecision: Ve, valueOf: Le }, Be), We = _e({ anchor: Ve, at: Te, big: Ve, blink: Ve, bold: Ve, charAt: Ve, charCodeAt: Le, codePointAt: Te, concat: Ve, endsWith: Me, fixed: Ve, fontcolor: Ve, fontsize: Ve, includes: Me, indexOf: Le, italics: Ve, lastIndexOf: Le, link: Ve, localeCompare: Le, match: Te, matchAll: Te, normalize: Ve, padEnd: Ve, padStart: Ve, repeat: Ve, replace: { value: { callsArgs: [1], returns: Oe } }, replaceAll: { value: { callsArgs: [1], returns: Oe } }, search: Le, slice: Ve, small: Ve, split: Te, startsWith: Me, strike: Ve, sub: Ve, substr: Ve, substring: Ve, sup: Ve, toLocaleLowerCase: Ve, toLocaleUpperCase: Ve, toLowerCase: Ve, toString: Ve, toUpperCase: Ve, trim: Ve, trimEnd: Ve, trimLeft: Ve, trimRight: Ve, trimStart: Ve, valueOf: Ve }, Be);
  function je(e, t2, s2, i2) {
    if (typeof t2 != "string" || !e[t2])
      return true;
    if (!e[t2].callsArgs)
      return false;
    for (const n of e[t2].callsArgs)
      if (s2.args[n] && s2.args[n].hasEffectsWhenCalledAtPath(O, { args: Ne, thisParam: null, withNew: false }, i2))
        return true;
    return false;
  }
  function Ue(e, t2) {
    return typeof t2 == "string" && e[t2] ? e[t2].returns : H;
  }
  const it = { Literal: [], Program: ["body"] };
  class nt extends G {
    constructor(e, t2, s2) {
      super(), this.esTreeNode = e, this.keys = it[e.type] || function(e2) {
        return it[e2.type] = Object.keys(e2).filter((t3) => typeof e2[t3] == "object" && t3.charCodeAt(0) !== 95), it[e2.type];
      }(e), this.parent = t2, this.context = t2.context, this.createScope(s2), this.parseNode(e), this.initialise(), this.context.magicString.addSourcemapLocation(this.start), this.context.magicString.addSourcemapLocation(this.end);
    }
    addExportedVariables(e, t2) {
    }
    bind() {
      for (const e of this.keys) {
        const t2 = this[e];
        if (t2 !== null)
          if (Array.isArray(t2))
            for (const e2 of t2)
              e2 !== null && e2.bind();
          else
            t2.bind();
      }
    }
    createScope(e) {
      this.scope = e;
    }
    hasEffects(e) {
      this.deoptimized === false && this.applyDeoptimizations();
      for (const t2 of this.keys) {
        const s2 = this[t2];
        if (s2 !== null) {
          if (Array.isArray(s2)) {
            for (const t3 of s2)
              if (t3 !== null && t3.hasEffects(e))
                return true;
          } else if (s2.hasEffects(e))
            return true;
        }
      }
      return false;
    }
    include(e, t2) {
      this.deoptimized === false && this.applyDeoptimizations(), this.included = true;
      for (const s2 of this.keys) {
        const i2 = this[s2];
        if (i2 !== null)
          if (Array.isArray(i2))
            for (const s3 of i2)
              s3 !== null && s3.include(e, t2);
          else
            i2.include(e, t2);
      }
    }
    includeAsSingleStatement(e, t2) {
      this.include(e, t2);
    }
    initialise() {
    }
    insertSemicolon(e) {
      e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";");
    }
    parseNode(e) {
      for (const [t2, s2] of Object.entries(e))
        if (!this.hasOwnProperty(t2))
          if (t2.charCodeAt(0) === 95) {
            if (t2 === "_rollupAnnotations")
              this.annotations = s2;
            else if (t2 === "_rollupRemoved")
              for (const { start: e2, end: t3 } of s2)
                this.context.magicString.remove(e2, t3);
          } else if (typeof s2 != "object" || s2 === null)
            this[t2] = s2;
          else if (Array.isArray(s2)) {
            this[t2] = [];
            for (const e2 of s2)
              this[t2].push(e2 === null ? null : new (this.context.getNodeConstructor(e2.type))(e2, this, this.scope));
          } else
            this[t2] = new (this.context.getNodeConstructor(s2.type))(s2, this, this.scope);
    }
    render(e, t2) {
      for (const s2 of this.keys) {
        const i2 = this[s2];
        if (i2 !== null)
          if (Array.isArray(i2))
            for (const s3 of i2)
              s3 !== null && s3.render(e, t2);
          else
            i2.render(e, t2);
      }
    }
    shouldBeIncluded(e) {
      return this.included || !e.brokenFlow && this.hasEffects(Ie());
    }
    applyDeoptimizations() {
    }
  }
  class rt extends nt {
    constructor() {
      super(...arguments), this.deoptimized = false;
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      t2.length > 0 && this.argument.deoptimizeThisOnEventAtPath(e, [D, ...t2], s2, i2);
    }
    hasEffects(e) {
      this.deoptimized || this.applyDeoptimizations();
      const { propertyReadSideEffects: t2 } = this.context.options.treeshake;
      return this.argument.hasEffects(e) || t2 && (t2 === "always" || this.argument.hasEffectsWhenAccessedAtPath(V, e));
    }
    applyDeoptimizations() {
      this.deoptimized = true, this.argument.deoptimizePath([D, D]), this.context.requestTreeshakingPass();
    }
  }
  class at extends G {
    constructor(e) {
      super(), this.description = e;
    }
    deoptimizeThisOnEventAtPath(e, t2, s2) {
      e === 2 && t2.length === 0 && this.description.mutatesSelfAsArray && s2.deoptimizePath(B);
    }
    getReturnExpressionWhenCalledAtPath(e, t2) {
      return e.length > 0 ? H : this.description.returnsPrimitive || (this.description.returns === "self" ? t2.thisParam || H : this.description.returns());
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenAssignedAtPath(e) {
      return e.length > 0;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      var i2, n;
      if (e.length > 0 || this.description.mutatesSelfAsArray === true && ((i2 = t2.thisParam) === null || i2 === void 0 ? void 0 : i2.hasEffectsWhenAssignedAtPath(B, s2)))
        return true;
      if (!this.description.callsArgs)
        return false;
      for (const e2 of this.description.callsArgs)
        if ((n = t2.args[e2]) === null || n === void 0 ? void 0 : n.hasEffectsWhenCalledAtPath(O, { args: Ne, thisParam: null, withNew: false }, s2))
          return true;
      return false;
    }
    includeCallArguments(e, t2) {
      for (const s2 of t2)
        s2.include(e, false);
    }
  }
  const ot = [new at({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Re })], ht = [new at({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: Oe })], lt = [new at({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: De })], ct = [new at({ callsArgs: null, mutatesSelfAsArray: false, returns: null, returnsPrimitive: H })], ut = /^\d+$/;
  class dt extends G {
    constructor(e, t2, s2 = false) {
      if (super(), this.prototypeExpression = t2, this.immutable = s2, this.allProperties = [], this.deoptimizedPaths = /* @__PURE__ */ Object.create(null), this.expressionsToBeDeoptimizedByKey = /* @__PURE__ */ Object.create(null), this.gettersByKey = /* @__PURE__ */ Object.create(null), this.hasUnknownDeoptimizedInteger = false, this.hasUnknownDeoptimizedProperty = false, this.propertiesAndGettersByKey = /* @__PURE__ */ Object.create(null), this.propertiesAndSettersByKey = /* @__PURE__ */ Object.create(null), this.settersByKey = /* @__PURE__ */ Object.create(null), this.thisParametersToBeDeoptimized = /* @__PURE__ */ new Set(), this.unknownIntegerProps = [], this.unmatchableGetters = [], this.unmatchablePropertiesAndGetters = [], this.unmatchableSetters = [], Array.isArray(e))
        this.buildPropertyMaps(e);
      else {
        this.propertiesAndGettersByKey = this.propertiesAndSettersByKey = e;
        for (const t3 of Object.values(e))
          this.allProperties.push(...t3);
      }
    }
    deoptimizeAllProperties() {
      var e;
      if (!this.hasUnknownDeoptimizedProperty) {
        this.hasUnknownDeoptimizedProperty = true;
        for (const e2 of Object.values(this.propertiesAndGettersByKey).concat(Object.values(this.settersByKey)))
          for (const t2 of e2)
            t2.deoptimizePath(V);
        (e = this.prototypeExpression) === null || e === void 0 || e.deoptimizePath([D, D]), this.deoptimizeCachedEntities();
      }
    }
    deoptimizeIntegerProperties() {
      if (!this.hasUnknownDeoptimizedProperty && !this.hasUnknownDeoptimizedInteger) {
        this.hasUnknownDeoptimizedInteger = true;
        for (const [e, t2] of Object.entries(this.propertiesAndGettersByKey))
          if (ut.test(e))
            for (const e2 of t2)
              e2.deoptimizePath(V);
        this.deoptimizeCachedIntegerEntities();
      }
    }
    deoptimizePath(e) {
      var t2;
      if (this.hasUnknownDeoptimizedProperty || this.immutable)
        return;
      const s2 = e[0];
      if (e.length === 1) {
        if (typeof s2 != "string")
          return s2 === L ? this.deoptimizeIntegerProperties() : this.deoptimizeAllProperties();
        if (!this.deoptimizedPaths[s2]) {
          this.deoptimizedPaths[s2] = true;
          const e2 = this.expressionsToBeDeoptimizedByKey[s2];
          if (e2)
            for (const t3 of e2)
              t3.deoptimizeCache();
        }
      }
      const i2 = e.length === 1 ? V : e.slice(1);
      for (const e2 of typeof s2 == "string" ? (this.propertiesAndGettersByKey[s2] || this.unmatchablePropertiesAndGetters).concat(this.settersByKey[s2] || this.unmatchableSetters) : this.allProperties)
        e2.deoptimizePath(i2);
      (t2 = this.prototypeExpression) === null || t2 === void 0 || t2.deoptimizePath(e.length === 1 ? [D, D] : e);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      var n;
      const [r, ...a] = t2;
      if (this.hasUnknownDeoptimizedProperty || (e === 2 || t2.length > 1) && typeof r == "string" && this.deoptimizedPaths[r])
        return void s2.deoptimizePath(V);
      const [o, h, l] = e === 2 || t2.length > 1 ? [this.propertiesAndGettersByKey, this.propertiesAndGettersByKey, this.unmatchablePropertiesAndGetters] : e === 0 ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters] : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
      if (typeof r == "string") {
        if (o[r]) {
          const t3 = h[r];
          if (t3)
            for (const n2 of t3)
              n2.deoptimizeThisOnEventAtPath(e, a, s2, i2);
          return void (this.immutable || this.thisParametersToBeDeoptimized.add(s2));
        }
        for (const t3 of l)
          t3.deoptimizeThisOnEventAtPath(e, a, s2, i2);
        if (ut.test(r))
          for (const t3 of this.unknownIntegerProps)
            t3.deoptimizeThisOnEventAtPath(e, a, s2, i2);
      } else {
        for (const t3 of Object.values(h).concat([l]))
          for (const n2 of t3)
            n2.deoptimizeThisOnEventAtPath(e, a, s2, i2);
        for (const t3 of this.unknownIntegerProps)
          t3.deoptimizeThisOnEventAtPath(e, a, s2, i2);
      }
      this.immutable || this.thisParametersToBeDeoptimized.add(s2), (n = this.prototypeExpression) === null || n === void 0 || n.deoptimizeThisOnEventAtPath(e, t2, s2, i2);
    }
    getLiteralValueAtPath(e, t2, s2) {
      if (e.length === 0)
        return U$2;
      const i2 = e[0], n = this.getMemberExpressionAndTrackDeopt(i2, s2);
      return n ? n.getLiteralValueAtPath(e.slice(1), t2, s2) : this.prototypeExpression ? this.prototypeExpression.getLiteralValueAtPath(e, t2, s2) : e.length !== 1 ? U$2 : void 0;
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      if (e.length === 0)
        return H;
      const n = e[0], r = this.getMemberExpressionAndTrackDeopt(n, i2);
      return r ? r.getReturnExpressionWhenCalledAtPath(e.slice(1), t2, s2, i2) : this.prototypeExpression ? this.prototypeExpression.getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) : H;
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      const [s2, ...i2] = e;
      if (e.length > 1) {
        if (typeof s2 != "string")
          return true;
        const n = this.getMemberExpression(s2);
        return n ? n.hasEffectsWhenAccessedAtPath(i2, t2) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenAccessedAtPath(e, t2);
      }
      if (this.hasUnknownDeoptimizedProperty)
        return true;
      if (typeof s2 == "string") {
        if (this.propertiesAndGettersByKey[s2]) {
          const e2 = this.gettersByKey[s2];
          if (e2) {
            for (const s3 of e2)
              if (s3.hasEffectsWhenAccessedAtPath(i2, t2))
                return true;
          }
          return false;
        }
        for (const e2 of this.unmatchableGetters)
          if (e2.hasEffectsWhenAccessedAtPath(i2, t2))
            return true;
      } else
        for (const e2 of Object.values(this.gettersByKey).concat([this.unmatchableGetters]))
          for (const s3 of e2)
            if (s3.hasEffectsWhenAccessedAtPath(i2, t2))
              return true;
      return !!this.prototypeExpression && this.prototypeExpression.hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      const [s2, ...i2] = e;
      if (e.length > 1) {
        if (typeof s2 != "string")
          return true;
        const n = this.getMemberExpression(s2);
        return n ? n.hasEffectsWhenAssignedAtPath(i2, t2) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenAssignedAtPath(e, t2);
      }
      if (this.hasUnknownDeoptimizedProperty)
        return true;
      if (typeof s2 == "string") {
        if (this.propertiesAndSettersByKey[s2]) {
          const e2 = this.settersByKey[s2];
          if (e2) {
            for (const s3 of e2)
              if (s3.hasEffectsWhenAssignedAtPath(i2, t2))
                return true;
          }
          return false;
        }
        for (const e2 of this.unmatchableSetters)
          if (e2.hasEffectsWhenAssignedAtPath(i2, t2))
            return true;
      }
      return !!this.prototypeExpression && this.prototypeExpression.hasEffectsWhenAssignedAtPath(e, t2);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      const i2 = e[0], n = this.getMemberExpression(i2);
      return n ? n.hasEffectsWhenCalledAtPath(e.slice(1), t2, s2) : !this.prototypeExpression || this.prototypeExpression.hasEffectsWhenCalledAtPath(e, t2, s2);
    }
    buildPropertyMaps(e) {
      const { allProperties: t2, propertiesAndGettersByKey: s2, propertiesAndSettersByKey: i2, settersByKey: n, gettersByKey: r, unknownIntegerProps: a, unmatchablePropertiesAndGetters: o, unmatchableGetters: h, unmatchableSetters: l } = this, c = [];
      for (let u = e.length - 1; u >= 0; u--) {
        const { key: d, kind: p, property: f } = e[u];
        if (t2.push(f), typeof d != "string") {
          if (d === L) {
            a.push(f);
            continue;
          }
          p === "set" && l.push(f), p === "get" && h.push(f), p !== "get" && c.push(f), p !== "set" && o.push(f);
        } else
          p === "set" ? i2[d] || (i2[d] = [f, ...c], n[d] = [f, ...l]) : p === "get" ? s2[d] || (s2[d] = [f, ...o], r[d] = [f, ...h]) : (i2[d] || (i2[d] = [f, ...c]), s2[d] || (s2[d] = [f, ...o]));
      }
    }
    deoptimizeCachedEntities() {
      for (const e of Object.values(this.expressionsToBeDeoptimizedByKey))
        for (const t2 of e)
          t2.deoptimizeCache();
      for (const e of this.thisParametersToBeDeoptimized)
        e.deoptimizePath(V);
    }
    deoptimizeCachedIntegerEntities() {
      for (const [e, t2] of Object.entries(this.expressionsToBeDeoptimizedByKey))
        if (ut.test(e))
          for (const e2 of t2)
            e2.deoptimizeCache();
      for (const e of this.thisParametersToBeDeoptimized)
        e.deoptimizePath(B);
    }
    getMemberExpression(e) {
      if (this.hasUnknownDeoptimizedProperty || typeof e != "string" || this.hasUnknownDeoptimizedInteger && ut.test(e) || this.deoptimizedPaths[e])
        return H;
      const t2 = this.propertiesAndGettersByKey[e];
      return (t2 == null ? void 0 : t2.length) === 1 ? t2[0] : t2 || this.unmatchablePropertiesAndGetters.length > 0 || this.unknownIntegerProps.length && ut.test(e) ? H : null;
    }
    getMemberExpressionAndTrackDeopt(e, t2) {
      if (typeof e != "string")
        return H;
      const s2 = this.getMemberExpression(e);
      if (s2 !== H && !this.immutable) {
        (this.expressionsToBeDeoptimizedByKey[e] = this.expressionsToBeDeoptimizedByKey[e] || []).push(t2);
      }
      return s2;
    }
  }
  const pt = (e) => typeof e == "string" && /^\d+$/.test(e), ft = new class extends G {
    deoptimizeThisOnEventAtPath(e, t2, s2) {
      e !== 2 || t2.length !== 1 || pt(t2[0]) || s2.deoptimizePath(V);
    }
    getLiteralValueAtPath(e) {
      return e.length === 1 && pt(e[0]) ? void 0 : U$2;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenAssignedAtPath(e) {
      return e.length > 1;
    }
  }(), mt = new dt({ __proto__: null, hasOwnProperty: ot, isPrototypeOf: ot, propertyIsEnumerable: ot, toLocaleString: ht, toString: ht, valueOf: ct }, ft, true), gt = [{ key: L, kind: "init", property: H }, { key: "length", kind: "init", property: De }], yt = [new at({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: Re })], Et = [new at({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: De })], xt = [new at({ callsArgs: null, mutatesSelfAsArray: true, returns: () => new dt(gt, It), returnsPrimitive: null })], bt = [new at({ callsArgs: null, mutatesSelfAsArray: "deopt-only", returns: () => new dt(gt, It), returnsPrimitive: null })], vt = [new at({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: () => new dt(gt, It), returnsPrimitive: null })], At = [new at({ callsArgs: null, mutatesSelfAsArray: true, returns: null, returnsPrimitive: De })], St = [new at({ callsArgs: null, mutatesSelfAsArray: true, returns: null, returnsPrimitive: H })], Pt = [new at({ callsArgs: null, mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: H })], kt = [new at({ callsArgs: [0], mutatesSelfAsArray: "deopt-only", returns: null, returnsPrimitive: H })], wt = [new at({ callsArgs: null, mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], Ct = [new at({ callsArgs: [0], mutatesSelfAsArray: true, returns: "self", returnsPrimitive: null })], It = new dt({ __proto__: null, at: Pt, concat: bt, copyWithin: wt, entries: bt, every: yt, fill: wt, filter: vt, find: kt, findIndex: Et, findLast: kt, findLastIndex: Et, flat: bt, flatMap: vt, forEach: kt, groupBy: kt, groupByToMap: kt, includes: ot, indexOf: lt, join: ht, keys: ct, lastIndexOf: lt, map: vt, pop: St, push: At, reduce: kt, reduceRight: kt, reverse: wt, shift: St, slice: bt, some: yt, sort: Ct, splice: xt, toLocaleString: ht, toString: ht, unshift: At, values: Pt }, mt, true);
  class Nt extends q {
    constructor(e, t2, s2, i2) {
      super(e), this.calledFromTryStatement = false, this.additionalInitializers = null, this.expressionsToBeDeoptimized = [], this.declarations = t2 ? [t2] : [], this.init = s2, this.deoptimizationTracker = i2.deoptimizationTracker, this.module = i2.module;
    }
    addDeclaration(e, t2) {
      this.declarations.push(e);
      const s2 = this.markInitializersForDeoptimization();
      t2 !== null && s2.push(t2);
    }
    consolidateInitializers() {
      if (this.additionalInitializers !== null) {
        for (const e of this.additionalInitializers)
          e.deoptimizePath(V);
        this.additionalInitializers = null;
      }
    }
    deoptimizePath(e) {
      var t2, s2;
      if (!this.isReassigned && !this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this))
        if (e.length === 0) {
          if (!this.isReassigned) {
            this.isReassigned = true;
            const e2 = this.expressionsToBeDeoptimized;
            this.expressionsToBeDeoptimized = [];
            for (const t3 of e2)
              t3.deoptimizeCache();
            (t2 = this.init) === null || t2 === void 0 || t2.deoptimizePath(V);
          }
        } else
          (s2 = this.init) === null || s2 === void 0 || s2.deoptimizePath(e);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      if (this.isReassigned || !this.init)
        return s2.deoptimizePath(V);
      i2.withTrackedEntityAtPath(t2, this.init, () => this.init.deoptimizeThisOnEventAtPath(e, t2, s2, i2), void 0);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return this.isReassigned || !this.init ? U$2 : t2.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(s2), this.init.getLiteralValueAtPath(e, t2, s2)), U$2);
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return this.isReassigned || !this.init ? H : s2.withTrackedEntityAtPath(e, this.init, () => (this.expressionsToBeDeoptimized.push(i2), this.init.getReturnExpressionWhenCalledAtPath(e, t2, s2, i2)), H);
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return !!this.isReassigned || this.init && !t2.accessed.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return !!this.included || e.length !== 0 && (!!this.isReassigned || this.init && !t2.accessed.trackEntityAtPathAndGetIfTracked(e, this) && this.init.hasEffectsWhenAssignedAtPath(e, t2));
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return !!this.isReassigned || this.init && !(t2.withNew ? s2.instantiated : s2.called).trackEntityAtPathAndGetIfTracked(e, t2, this) && this.init.hasEffectsWhenCalledAtPath(e, t2, s2);
    }
    include() {
      if (!this.included) {
        this.included = true;
        for (const e of this.declarations) {
          e.included || e.include(Ce(), false);
          let t2 = e.parent;
          for (; !t2.included && (t2.included = true, t2.type !== "Program"); )
            t2 = t2.parent;
        }
      }
    }
    includeCallArguments(e, t2) {
      if (this.isReassigned || this.init && e.includedCallArguments.has(this.init))
        for (const s2 of t2)
          s2.include(e, false);
      else
        this.init && (e.includedCallArguments.add(this.init), this.init.includeCallArguments(e, t2), e.includedCallArguments.delete(this.init));
    }
    markCalledFromTryStatement() {
      this.calledFromTryStatement = true;
    }
    markInitializersForDeoptimization() {
      return this.additionalInitializers === null && (this.additionalInitializers = this.init === null ? [] : [this.init], this.init = H, this.isReassigned = true), this.additionalInitializers;
    }
  }
  function _t(e) {
    let t2 = "";
    do {
      const s2 = e % 64;
      e = Math.floor(e / 64), t2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$"[s2] + t2;
    } while (e !== 0);
    return t2;
  }
  function $t(e, t2) {
    let s2 = e, i2 = 1;
    for (; t2.has(s2) || be.has(s2); )
      s2 = `${e}$${_t(i2++)}`;
    return t2.add(s2), s2;
  }
  class Tt {
    constructor() {
      this.children = [], this.variables = /* @__PURE__ */ new Map();
    }
    addDeclaration(e, t2, s2, i2) {
      const n = e.name;
      let r = this.variables.get(n);
      return r ? r.addDeclaration(e, s2) : (r = new Nt(e.name, e, s2 || $e, t2), this.variables.set(n, r)), r;
    }
    contains(e) {
      return this.variables.has(e);
    }
    findVariable(e) {
      throw new Error("Internal Error: findVariable needs to be implemented by a subclass");
    }
  }
  class Rt extends Tt {
    constructor(e) {
      super(), this.accessedOutsideVariables = /* @__PURE__ */ new Map(), this.parent = e, e.children.push(this);
    }
    addAccessedDynamicImport(e) {
      (this.accessedDynamicImports || (this.accessedDynamicImports = /* @__PURE__ */ new Set())).add(e), this.parent instanceof Rt && this.parent.addAccessedDynamicImport(e);
    }
    addAccessedGlobals(e, t2) {
      const s2 = t2.get(this) || /* @__PURE__ */ new Set();
      for (const t3 of e)
        s2.add(t3);
      t2.set(this, s2), this.parent instanceof Rt && this.parent.addAccessedGlobals(e, t2);
    }
    addNamespaceMemberAccess(e, t2) {
      this.accessedOutsideVariables.set(e, t2), this.parent.addNamespaceMemberAccess(e, t2);
    }
    addReturnExpression(e) {
      this.parent instanceof Rt && this.parent.addReturnExpression(e);
    }
    addUsedOutsideNames(e, t2, s2, i2) {
      for (const i3 of this.accessedOutsideVariables.values())
        i3.included && (e.add(i3.getBaseVariableName()), t2 === "system" && s2.has(i3) && e.add("exports"));
      const n = i2.get(this);
      if (n)
        for (const t3 of n)
          e.add(t3);
    }
    contains(e) {
      return this.variables.has(e) || this.parent.contains(e);
    }
    deconflict(e, t2, s2) {
      const i2 = /* @__PURE__ */ new Set();
      if (this.addUsedOutsideNames(i2, e, t2, s2), this.accessedDynamicImports)
        for (const e2 of this.accessedDynamicImports)
          e2.inlineNamespace && i2.add(e2.inlineNamespace.getBaseVariableName());
      for (const [e2, t3] of this.variables)
        (t3.included || t3.alwaysRendered) && t3.setRenderNames(null, $t(e2, i2));
      for (const i3 of this.children)
        i3.deconflict(e, t2, s2);
    }
    findLexicalBoundary() {
      return this.parent.findLexicalBoundary();
    }
    findVariable(e) {
      const t2 = this.variables.get(e) || this.accessedOutsideVariables.get(e);
      if (t2)
        return t2;
      const s2 = this.parent.findVariable(e);
      return this.accessedOutsideVariables.set(e, s2), s2;
    }
  }
  class Mt extends Rt {
    constructor(e, t2) {
      super(e), this.parameters = [], this.hasRest = false, this.context = t2, this.hoistedBodyVarScope = new Rt(this);
    }
    addParameterDeclaration(e) {
      const t2 = e.name;
      let s2 = this.hoistedBodyVarScope.variables.get(t2);
      return s2 ? s2.addDeclaration(e, null) : s2 = new Nt(t2, e, H, this.context), this.variables.set(t2, s2), s2;
    }
    addParameterVariables(e, t2) {
      this.parameters = e;
      for (const t3 of e)
        for (const e2 of t3)
          e2.alwaysRendered = true;
      this.hasRest = t2;
    }
    includeCallArguments(e, t2) {
      let s2 = false, i2 = false;
      const n = this.hasRest && this.parameters[this.parameters.length - 1];
      for (const s3 of t2)
        if (s3 instanceof rt) {
          for (const s4 of t2)
            s4.include(e, false);
          break;
        }
      for (let r = t2.length - 1; r >= 0; r--) {
        const a = this.parameters[r] || n, o = t2[r];
        if (a)
          if (s2 = false, a.length === 0)
            i2 = true;
          else
            for (const e2 of a)
              e2.included && (i2 = true), e2.calledFromTryStatement && (s2 = true);
        !i2 && o.shouldBeIncluded(e) && (i2 = true), i2 && o.include(e, s2);
      }
    }
  }
  class Dt extends Mt {
    constructor() {
      super(...arguments), this.returnExpression = null, this.returnExpressions = [];
    }
    addReturnExpression(e) {
      this.returnExpressions.push(e);
    }
    getReturnExpression() {
      return this.returnExpression === null && this.updateReturnExpression(), this.returnExpression;
    }
    updateReturnExpression() {
      if (this.returnExpressions.length === 1)
        this.returnExpression = this.returnExpressions[0];
      else {
        this.returnExpression = H;
        for (const e of this.returnExpressions)
          e.deoptimizePath(V);
      }
    }
  }
  function Lt(e, t2, s2, i2) {
    if (t2.remove(s2, i2), e.annotations)
      for (const i3 of e.annotations) {
        if (!(i3.start < s2))
          return;
        t2.remove(i3.start, i3.end);
      }
  }
  function Bt(e, t2, s2 = 0) {
    let i2, n;
    for (i2 = e.indexOf(t2, s2); ; ) {
      if ((s2 = e.indexOf("/", s2)) === -1 || s2 >= i2)
        return i2;
      n = e.charCodeAt(++s2), ++s2, (s2 = n === 47 ? e.indexOf("\n", s2) + 1 : e.indexOf("*/", s2) + 2) > i2 && (i2 = e.indexOf(t2, s2));
    }
  }
  const Ft = /\S/g;
  function zt(e, t2) {
    Ft.lastIndex = t2;
    return Ft.exec(e).index;
  }
  function Wt(e) {
    let t2, s2, i2 = 0;
    for (t2 = e.indexOf("\n", i2); ; ) {
      if (i2 = e.indexOf("/", i2), i2 === -1 || i2 > t2)
        return [t2, t2 + 1];
      if (s2 = e.charCodeAt(i2 + 1), s2 === 47)
        return [i2, t2 + 1];
      i2 = e.indexOf("*/", i2 + 3) + 2, i2 > t2 && (t2 = e.indexOf("\n", i2));
    }
  }
  function jt(e, t2, s2, i2, n) {
    let r, a, o, h, l = e[0], c = !l.included || l.needsBoundaries;
    c && (h = s2 + Wt(t2.original.slice(s2, l.start))[1]);
    for (let s3 = 1; s3 <= e.length; s3++)
      r = l, a = h, o = c, l = e[s3], c = l !== void 0 && (!l.included || l.needsBoundaries), o || c ? (h = r.end + Wt(t2.original.slice(r.end, l === void 0 ? i2 : l.start))[1], r.included ? o ? r.render(t2, n, { end: h, start: a }) : r.render(t2, n) : Lt(r, t2, a, h)) : r.render(t2, n);
  }
  class Ht extends Rt {
    addDeclaration(e, t2, s2, i2) {
      if (i2) {
        const n = this.parent.addDeclaration(e, t2, s2, i2);
        return n.markInitializersForDeoptimization(), n;
      }
      return super.addDeclaration(e, t2, s2, false);
    }
  }
  class qt extends nt {
    initialise() {
      this.directive && this.directive !== "use strict" && this.parent.type === "Program" && this.context.warn({ code: "MODULE_LEVEL_DIRECTIVE", message: `Module level directives cause errors when bundled, '${this.directive}' was ignored.` }, this.start);
    }
    render(e, t2) {
      super.render(e, t2), this.included && this.insertSemicolon(e);
    }
    shouldBeIncluded(e) {
      return this.directive && this.directive !== "use strict" ? this.parent.type !== "Program" : super.shouldBeIncluded(e);
    }
  }
  class Kt extends nt {
    constructor() {
      super(...arguments), this.directlyIncluded = false;
    }
    addImplicitReturnExpressionToScope() {
      const e = this.body[this.body.length - 1];
      e && e.type === "ReturnStatement" || this.scope.addReturnExpression(H);
    }
    createScope(e) {
      this.scope = this.parent.preventChildBlockScope ? e : new Ht(e);
    }
    hasEffects(e) {
      if (this.deoptimizeBody)
        return true;
      for (const t2 of this.body) {
        if (e.brokenFlow)
          break;
        if (t2.hasEffects(e))
          return true;
      }
      return false;
    }
    include(e, t2) {
      if (!this.deoptimizeBody || !this.directlyIncluded) {
        this.included = true, this.directlyIncluded = true, this.deoptimizeBody && (t2 = true);
        for (const s2 of this.body)
          (t2 || s2.shouldBeIncluded(e)) && s2.include(e, t2);
      }
    }
    initialise() {
      const e = this.body[0];
      this.deoptimizeBody = e instanceof qt && e.directive === "use asm";
    }
    render(e, t2) {
      this.body.length ? jt(this.body, e, this.start + 1, this.end - 1, t2) : super.render(e, t2);
    }
  }
  function Xt(e, t2) {
    if (e.type === "MemberExpression")
      return !e.computed && Xt(e.object, e);
    if (e.type === "Identifier") {
      if (!t2)
        return true;
      switch (t2.type) {
        case "MemberExpression":
          return t2.computed || e === t2.object;
        case "MethodDefinition":
          return t2.computed;
        case "PropertyDefinition":
        case "Property":
          return t2.computed || e === t2.value;
        case "ExportSpecifier":
        case "ImportSpecifier":
          return e === t2.local;
        case "LabeledStatement":
        case "BreakStatement":
        case "ContinueStatement":
          return false;
        default:
          return true;
      }
    }
    return false;
  }
  const Yt = Symbol("Value Properties"), Qt = { pure: true }, Zt = { pure: false }, Jt = { __proto__: null, [Yt]: Zt }, es = { __proto__: null, [Yt]: Qt }, ts = { __proto__: null, [Yt]: Zt, prototype: Jt }, ss = { __proto__: null, [Yt]: Qt, prototype: Jt }, is = { __proto__: null, [Yt]: Qt, from: es, of: es, prototype: Jt }, ns = { __proto__: null, [Yt]: Qt, supportedLocalesOf: ss }, rs = { global: Jt, globalThis: Jt, self: Jt, window: Jt, __proto__: null, [Yt]: Zt, Array: { __proto__: null, [Yt]: Zt, from: Jt, isArray: es, of: es, prototype: Jt }, ArrayBuffer: { __proto__: null, [Yt]: Qt, isView: es, prototype: Jt }, Atomics: Jt, BigInt: ts, BigInt64Array: ts, BigUint64Array: ts, Boolean: ss, constructor: ts, DataView: ss, Date: { __proto__: null, [Yt]: Qt, now: es, parse: es, prototype: Jt, UTC: es }, decodeURI: es, decodeURIComponent: es, encodeURI: es, encodeURIComponent: es, Error: ss, escape: es, eval: Jt, EvalError: ss, Float32Array: is, Float64Array: is, Function: ts, hasOwnProperty: Jt, Infinity: Jt, Int16Array: is, Int32Array: is, Int8Array: is, isFinite: es, isNaN: es, isPrototypeOf: Jt, JSON: Jt, Map: ss, Math: { __proto__: null, [Yt]: Zt, abs: es, acos: es, acosh: es, asin: es, asinh: es, atan: es, atan2: es, atanh: es, cbrt: es, ceil: es, clz32: es, cos: es, cosh: es, exp: es, expm1: es, floor: es, fround: es, hypot: es, imul: es, log: es, log10: es, log1p: es, log2: es, max: es, min: es, pow: es, random: es, round: es, sign: es, sin: es, sinh: es, sqrt: es, tan: es, tanh: es, trunc: es }, NaN: Jt, Number: { __proto__: null, [Yt]: Qt, isFinite: es, isInteger: es, isNaN: es, isSafeInteger: es, parseFloat: es, parseInt: es, prototype: Jt }, Object: { __proto__: null, [Yt]: Qt, create: es, getOwnPropertyDescriptor: es, getOwnPropertyNames: es, getOwnPropertySymbols: es, getPrototypeOf: es, hasOwn: es, is: es, isExtensible: es, isFrozen: es, isSealed: es, keys: es, fromEntries: es, entries: es, prototype: Jt }, parseFloat: es, parseInt: es, Promise: { __proto__: null, [Yt]: Zt, all: Jt, prototype: Jt, race: Jt, reject: Jt, resolve: Jt }, propertyIsEnumerable: Jt, Proxy: Jt, RangeError: ss, ReferenceError: ss, Reflect: Jt, RegExp: ss, Set: ss, SharedArrayBuffer: ts, String: { __proto__: null, [Yt]: Qt, fromCharCode: es, fromCodePoint: es, prototype: Jt, raw: es }, Symbol: { __proto__: null, [Yt]: Qt, for: es, keyFor: es, prototype: Jt }, SyntaxError: ss, toLocaleString: Jt, toString: Jt, TypeError: ss, Uint16Array: is, Uint32Array: is, Uint8Array: is, Uint8ClampedArray: is, unescape: es, URIError: ss, valueOf: Jt, WeakMap: ss, WeakSet: ss, clearInterval: ts, clearTimeout: ts, console: Jt, Intl: { __proto__: null, [Yt]: Zt, Collator: ns, DateTimeFormat: ns, ListFormat: ns, NumberFormat: ns, PluralRules: ns, RelativeTimeFormat: ns }, setInterval: ts, setTimeout: ts, TextDecoder: ts, TextEncoder: ts, URL: ts, URLSearchParams: ts, AbortController: ts, AbortSignal: ts, addEventListener: Jt, alert: Jt, AnalyserNode: ts, Animation: ts, AnimationEvent: ts, applicationCache: Jt, ApplicationCache: ts, ApplicationCacheErrorEvent: ts, atob: Jt, Attr: ts, Audio: ts, AudioBuffer: ts, AudioBufferSourceNode: ts, AudioContext: ts, AudioDestinationNode: ts, AudioListener: ts, AudioNode: ts, AudioParam: ts, AudioProcessingEvent: ts, AudioScheduledSourceNode: ts, AudioWorkletNode: ts, BarProp: ts, BaseAudioContext: ts, BatteryManager: ts, BeforeUnloadEvent: ts, BiquadFilterNode: ts, Blob: ts, BlobEvent: ts, blur: Jt, BroadcastChannel: ts, btoa: Jt, ByteLengthQueuingStrategy: ts, Cache: ts, caches: Jt, CacheStorage: ts, cancelAnimationFrame: Jt, cancelIdleCallback: Jt, CanvasCaptureMediaStreamTrack: ts, CanvasGradient: ts, CanvasPattern: ts, CanvasRenderingContext2D: ts, ChannelMergerNode: ts, ChannelSplitterNode: ts, CharacterData: ts, clientInformation: Jt, ClipboardEvent: ts, close: Jt, closed: Jt, CloseEvent: ts, Comment: ts, CompositionEvent: ts, confirm: Jt, ConstantSourceNode: ts, ConvolverNode: ts, CountQueuingStrategy: ts, createImageBitmap: Jt, Credential: ts, CredentialsContainer: ts, crypto: Jt, Crypto: ts, CryptoKey: ts, CSS: ts, CSSConditionRule: ts, CSSFontFaceRule: ts, CSSGroupingRule: ts, CSSImportRule: ts, CSSKeyframeRule: ts, CSSKeyframesRule: ts, CSSMediaRule: ts, CSSNamespaceRule: ts, CSSPageRule: ts, CSSRule: ts, CSSRuleList: ts, CSSStyleDeclaration: ts, CSSStyleRule: ts, CSSStyleSheet: ts, CSSSupportsRule: ts, CustomElementRegistry: ts, customElements: Jt, CustomEvent: ts, DataTransfer: ts, DataTransferItem: ts, DataTransferItemList: ts, defaultstatus: Jt, defaultStatus: Jt, DelayNode: ts, DeviceMotionEvent: ts, DeviceOrientationEvent: ts, devicePixelRatio: Jt, dispatchEvent: Jt, document: Jt, Document: ts, DocumentFragment: ts, DocumentType: ts, DOMError: ts, DOMException: ts, DOMImplementation: ts, DOMMatrix: ts, DOMMatrixReadOnly: ts, DOMParser: ts, DOMPoint: ts, DOMPointReadOnly: ts, DOMQuad: ts, DOMRect: ts, DOMRectReadOnly: ts, DOMStringList: ts, DOMStringMap: ts, DOMTokenList: ts, DragEvent: ts, DynamicsCompressorNode: ts, Element: ts, ErrorEvent: ts, Event: ts, EventSource: ts, EventTarget: ts, external: Jt, fetch: Jt, File: ts, FileList: ts, FileReader: ts, find: Jt, focus: Jt, FocusEvent: ts, FontFace: ts, FontFaceSetLoadEvent: ts, FormData: ts, frames: Jt, GainNode: ts, Gamepad: ts, GamepadButton: ts, GamepadEvent: ts, getComputedStyle: Jt, getSelection: Jt, HashChangeEvent: ts, Headers: ts, history: Jt, History: ts, HTMLAllCollection: ts, HTMLAnchorElement: ts, HTMLAreaElement: ts, HTMLAudioElement: ts, HTMLBaseElement: ts, HTMLBodyElement: ts, HTMLBRElement: ts, HTMLButtonElement: ts, HTMLCanvasElement: ts, HTMLCollection: ts, HTMLContentElement: ts, HTMLDataElement: ts, HTMLDataListElement: ts, HTMLDetailsElement: ts, HTMLDialogElement: ts, HTMLDirectoryElement: ts, HTMLDivElement: ts, HTMLDListElement: ts, HTMLDocument: ts, HTMLElement: ts, HTMLEmbedElement: ts, HTMLFieldSetElement: ts, HTMLFontElement: ts, HTMLFormControlsCollection: ts, HTMLFormElement: ts, HTMLFrameElement: ts, HTMLFrameSetElement: ts, HTMLHeadElement: ts, HTMLHeadingElement: ts, HTMLHRElement: ts, HTMLHtmlElement: ts, HTMLIFrameElement: ts, HTMLImageElement: ts, HTMLInputElement: ts, HTMLLabelElement: ts, HTMLLegendElement: ts, HTMLLIElement: ts, HTMLLinkElement: ts, HTMLMapElement: ts, HTMLMarqueeElement: ts, HTMLMediaElement: ts, HTMLMenuElement: ts, HTMLMetaElement: ts, HTMLMeterElement: ts, HTMLModElement: ts, HTMLObjectElement: ts, HTMLOListElement: ts, HTMLOptGroupElement: ts, HTMLOptionElement: ts, HTMLOptionsCollection: ts, HTMLOutputElement: ts, HTMLParagraphElement: ts, HTMLParamElement: ts, HTMLPictureElement: ts, HTMLPreElement: ts, HTMLProgressElement: ts, HTMLQuoteElement: ts, HTMLScriptElement: ts, HTMLSelectElement: ts, HTMLShadowElement: ts, HTMLSlotElement: ts, HTMLSourceElement: ts, HTMLSpanElement: ts, HTMLStyleElement: ts, HTMLTableCaptionElement: ts, HTMLTableCellElement: ts, HTMLTableColElement: ts, HTMLTableElement: ts, HTMLTableRowElement: ts, HTMLTableSectionElement: ts, HTMLTemplateElement: ts, HTMLTextAreaElement: ts, HTMLTimeElement: ts, HTMLTitleElement: ts, HTMLTrackElement: ts, HTMLUListElement: ts, HTMLUnknownElement: ts, HTMLVideoElement: ts, IDBCursor: ts, IDBCursorWithValue: ts, IDBDatabase: ts, IDBFactory: ts, IDBIndex: ts, IDBKeyRange: ts, IDBObjectStore: ts, IDBOpenDBRequest: ts, IDBRequest: ts, IDBTransaction: ts, IDBVersionChangeEvent: ts, IdleDeadline: ts, IIRFilterNode: ts, Image: ts, ImageBitmap: ts, ImageBitmapRenderingContext: ts, ImageCapture: ts, ImageData: ts, indexedDB: Jt, innerHeight: Jt, innerWidth: Jt, InputEvent: ts, IntersectionObserver: ts, IntersectionObserverEntry: ts, isSecureContext: Jt, KeyboardEvent: ts, KeyframeEffect: ts, length: Jt, localStorage: Jt, location: Jt, Location: ts, locationbar: Jt, matchMedia: Jt, MediaDeviceInfo: ts, MediaDevices: ts, MediaElementAudioSourceNode: ts, MediaEncryptedEvent: ts, MediaError: ts, MediaKeyMessageEvent: ts, MediaKeySession: ts, MediaKeyStatusMap: ts, MediaKeySystemAccess: ts, MediaList: ts, MediaQueryList: ts, MediaQueryListEvent: ts, MediaRecorder: ts, MediaSettingsRange: ts, MediaSource: ts, MediaStream: ts, MediaStreamAudioDestinationNode: ts, MediaStreamAudioSourceNode: ts, MediaStreamEvent: ts, MediaStreamTrack: ts, MediaStreamTrackEvent: ts, menubar: Jt, MessageChannel: ts, MessageEvent: ts, MessagePort: ts, MIDIAccess: ts, MIDIConnectionEvent: ts, MIDIInput: ts, MIDIInputMap: ts, MIDIMessageEvent: ts, MIDIOutput: ts, MIDIOutputMap: ts, MIDIPort: ts, MimeType: ts, MimeTypeArray: ts, MouseEvent: ts, moveBy: Jt, moveTo: Jt, MutationEvent: ts, MutationObserver: ts, MutationRecord: ts, name: Jt, NamedNodeMap: ts, NavigationPreloadManager: ts, navigator: Jt, Navigator: ts, NetworkInformation: ts, Node: ts, NodeFilter: Jt, NodeIterator: ts, NodeList: ts, Notification: ts, OfflineAudioCompletionEvent: ts, OfflineAudioContext: ts, offscreenBuffering: Jt, OffscreenCanvas: ts, open: Jt, openDatabase: Jt, Option: ts, origin: Jt, OscillatorNode: ts, outerHeight: Jt, outerWidth: Jt, PageTransitionEvent: ts, pageXOffset: Jt, pageYOffset: Jt, PannerNode: ts, parent: Jt, Path2D: ts, PaymentAddress: ts, PaymentRequest: ts, PaymentRequestUpdateEvent: ts, PaymentResponse: ts, performance: Jt, Performance: ts, PerformanceEntry: ts, PerformanceLongTaskTiming: ts, PerformanceMark: ts, PerformanceMeasure: ts, PerformanceNavigation: ts, PerformanceNavigationTiming: ts, PerformanceObserver: ts, PerformanceObserverEntryList: ts, PerformancePaintTiming: ts, PerformanceResourceTiming: ts, PerformanceTiming: ts, PeriodicWave: ts, Permissions: ts, PermissionStatus: ts, personalbar: Jt, PhotoCapabilities: ts, Plugin: ts, PluginArray: ts, PointerEvent: ts, PopStateEvent: ts, postMessage: Jt, Presentation: ts, PresentationAvailability: ts, PresentationConnection: ts, PresentationConnectionAvailableEvent: ts, PresentationConnectionCloseEvent: ts, PresentationConnectionList: ts, PresentationReceiver: ts, PresentationRequest: ts, print: Jt, ProcessingInstruction: ts, ProgressEvent: ts, PromiseRejectionEvent: ts, prompt: Jt, PushManager: ts, PushSubscription: ts, PushSubscriptionOptions: ts, queueMicrotask: Jt, RadioNodeList: ts, Range: ts, ReadableStream: ts, RemotePlayback: ts, removeEventListener: Jt, Request: ts, requestAnimationFrame: Jt, requestIdleCallback: Jt, resizeBy: Jt, ResizeObserver: ts, ResizeObserverEntry: ts, resizeTo: Jt, Response: ts, RTCCertificate: ts, RTCDataChannel: ts, RTCDataChannelEvent: ts, RTCDtlsTransport: ts, RTCIceCandidate: ts, RTCIceTransport: ts, RTCPeerConnection: ts, RTCPeerConnectionIceEvent: ts, RTCRtpReceiver: ts, RTCRtpSender: ts, RTCSctpTransport: ts, RTCSessionDescription: ts, RTCStatsReport: ts, RTCTrackEvent: ts, screen: Jt, Screen: ts, screenLeft: Jt, ScreenOrientation: ts, screenTop: Jt, screenX: Jt, screenY: Jt, ScriptProcessorNode: ts, scroll: Jt, scrollbars: Jt, scrollBy: Jt, scrollTo: Jt, scrollX: Jt, scrollY: Jt, SecurityPolicyViolationEvent: ts, Selection: ts, ServiceWorker: ts, ServiceWorkerContainer: ts, ServiceWorkerRegistration: ts, sessionStorage: Jt, ShadowRoot: ts, SharedWorker: ts, SourceBuffer: ts, SourceBufferList: ts, speechSynthesis: Jt, SpeechSynthesisEvent: ts, SpeechSynthesisUtterance: ts, StaticRange: ts, status: Jt, statusbar: Jt, StereoPannerNode: ts, stop: Jt, Storage: ts, StorageEvent: ts, StorageManager: ts, styleMedia: Jt, StyleSheet: ts, StyleSheetList: ts, SubtleCrypto: ts, SVGAElement: ts, SVGAngle: ts, SVGAnimatedAngle: ts, SVGAnimatedBoolean: ts, SVGAnimatedEnumeration: ts, SVGAnimatedInteger: ts, SVGAnimatedLength: ts, SVGAnimatedLengthList: ts, SVGAnimatedNumber: ts, SVGAnimatedNumberList: ts, SVGAnimatedPreserveAspectRatio: ts, SVGAnimatedRect: ts, SVGAnimatedString: ts, SVGAnimatedTransformList: ts, SVGAnimateElement: ts, SVGAnimateMotionElement: ts, SVGAnimateTransformElement: ts, SVGAnimationElement: ts, SVGCircleElement: ts, SVGClipPathElement: ts, SVGComponentTransferFunctionElement: ts, SVGDefsElement: ts, SVGDescElement: ts, SVGDiscardElement: ts, SVGElement: ts, SVGEllipseElement: ts, SVGFEBlendElement: ts, SVGFEColorMatrixElement: ts, SVGFEComponentTransferElement: ts, SVGFECompositeElement: ts, SVGFEConvolveMatrixElement: ts, SVGFEDiffuseLightingElement: ts, SVGFEDisplacementMapElement: ts, SVGFEDistantLightElement: ts, SVGFEDropShadowElement: ts, SVGFEFloodElement: ts, SVGFEFuncAElement: ts, SVGFEFuncBElement: ts, SVGFEFuncGElement: ts, SVGFEFuncRElement: ts, SVGFEGaussianBlurElement: ts, SVGFEImageElement: ts, SVGFEMergeElement: ts, SVGFEMergeNodeElement: ts, SVGFEMorphologyElement: ts, SVGFEOffsetElement: ts, SVGFEPointLightElement: ts, SVGFESpecularLightingElement: ts, SVGFESpotLightElement: ts, SVGFETileElement: ts, SVGFETurbulenceElement: ts, SVGFilterElement: ts, SVGForeignObjectElement: ts, SVGGElement: ts, SVGGeometryElement: ts, SVGGradientElement: ts, SVGGraphicsElement: ts, SVGImageElement: ts, SVGLength: ts, SVGLengthList: ts, SVGLinearGradientElement: ts, SVGLineElement: ts, SVGMarkerElement: ts, SVGMaskElement: ts, SVGMatrix: ts, SVGMetadataElement: ts, SVGMPathElement: ts, SVGNumber: ts, SVGNumberList: ts, SVGPathElement: ts, SVGPatternElement: ts, SVGPoint: ts, SVGPointList: ts, SVGPolygonElement: ts, SVGPolylineElement: ts, SVGPreserveAspectRatio: ts, SVGRadialGradientElement: ts, SVGRect: ts, SVGRectElement: ts, SVGScriptElement: ts, SVGSetElement: ts, SVGStopElement: ts, SVGStringList: ts, SVGStyleElement: ts, SVGSVGElement: ts, SVGSwitchElement: ts, SVGSymbolElement: ts, SVGTextContentElement: ts, SVGTextElement: ts, SVGTextPathElement: ts, SVGTextPositioningElement: ts, SVGTitleElement: ts, SVGTransform: ts, SVGTransformList: ts, SVGTSpanElement: ts, SVGUnitTypes: ts, SVGUseElement: ts, SVGViewElement: ts, TaskAttributionTiming: ts, Text: ts, TextEvent: ts, TextMetrics: ts, TextTrack: ts, TextTrackCue: ts, TextTrackCueList: ts, TextTrackList: ts, TimeRanges: ts, toolbar: Jt, top: Jt, Touch: ts, TouchEvent: ts, TouchList: ts, TrackEvent: ts, TransitionEvent: ts, TreeWalker: ts, UIEvent: ts, ValidityState: ts, visualViewport: Jt, VisualViewport: ts, VTTCue: ts, WaveShaperNode: ts, WebAssembly: Jt, WebGL2RenderingContext: ts, WebGLActiveInfo: ts, WebGLBuffer: ts, WebGLContextEvent: ts, WebGLFramebuffer: ts, WebGLProgram: ts, WebGLQuery: ts, WebGLRenderbuffer: ts, WebGLRenderingContext: ts, WebGLSampler: ts, WebGLShader: ts, WebGLShaderPrecisionFormat: ts, WebGLSync: ts, WebGLTexture: ts, WebGLTransformFeedback: ts, WebGLUniformLocation: ts, WebGLVertexArrayObject: ts, WebSocket: ts, WheelEvent: ts, Window: ts, Worker: ts, WritableStream: ts, XMLDocument: ts, XMLHttpRequest: ts, XMLHttpRequestEventTarget: ts, XMLHttpRequestUpload: ts, XMLSerializer: ts, XPathEvaluator: ts, XPathExpression: ts, XPathResult: ts, XSLTProcessor: ts };
  for (const e of ["window", "global", "self", "globalThis"])
    rs[e] = rs;
  function as(e) {
    let t2 = rs;
    for (const s2 of e) {
      if (typeof s2 != "string")
        return null;
      if (t2 = t2[s2], !t2)
        return null;
    }
    return t2[Yt];
  }
  class os extends q {
    constructor() {
      super(...arguments), this.isReassigned = true;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return !function(e2) {
        return e2.length === 1 ? e2[0] === "undefined" || as(e2) !== null : as(e2.slice(0, -1)) !== null;
      }([this.name, ...e]);
    }
    hasEffectsWhenCalledAtPath(e) {
      return !function(e2) {
        const t2 = as(e2);
        return t2 !== null && t2.pure;
      }([this.name, ...e]);
    }
  }
  const hs = { __proto__: null, class: true, const: true, let: true, var: true };
  class ls extends nt {
    constructor() {
      super(...arguments), this.variable = null, this.deoptimized = false, this.isTDZAccess = null;
    }
    addExportedVariables(e, t2) {
      this.variable !== null && t2.has(this.variable) && e.push(this.variable);
    }
    bind() {
      this.variable === null && Xt(this, this.parent) && (this.variable = this.scope.findVariable(this.name), this.variable.addReference(this));
    }
    declare(e, t2) {
      let s2;
      const { treeshake: i2 } = this.context.options;
      switch (e) {
        case "var":
          s2 = this.scope.addDeclaration(this, this.context, t2, true), i2 && i2.correctVarValueBeforeDeclaration && s2.markInitializersForDeoptimization();
          break;
        case "function":
        case "let":
        case "const":
        case "class":
          s2 = this.scope.addDeclaration(this, this.context, t2, false);
          break;
        case "parameter":
          s2 = this.scope.addParameterDeclaration(this);
          break;
        default:
          throw new Error(`Internal Error: Unexpected identifier kind ${e}.`);
      }
      return s2.kind = e, [this.variable = s2];
    }
    deoptimizePath(e) {
      e.length !== 0 || this.scope.contains(this.name) || this.disallowImportReassignment(), this.variable.deoptimizePath(e);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      this.variable.deoptimizeThisOnEventAtPath(e, t2, s2, i2);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return this.getVariableRespectingTDZ().getLiteralValueAtPath(e, t2, s2);
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return this.getVariableRespectingTDZ().getReturnExpressionWhenCalledAtPath(e, t2, s2, i2);
    }
    hasEffects() {
      return this.deoptimized || this.applyDeoptimizations(), !(!this.isPossibleTDZ() || this.variable.kind === "var") || this.context.options.treeshake.unknownGlobalSideEffects && this.variable instanceof os && this.variable.hasEffectsWhenAccessedAtPath(O);
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return this.variable !== null && this.getVariableRespectingTDZ().hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return !this.variable || (e.length > 0 ? this.getVariableRespectingTDZ() : this.variable).hasEffectsWhenAssignedAtPath(e, t2);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return !this.variable || this.getVariableRespectingTDZ().hasEffectsWhenCalledAtPath(e, t2, s2);
    }
    include() {
      this.deoptimized || this.applyDeoptimizations(), this.included || (this.included = true, this.variable !== null && this.context.includeVariableInModule(this.variable));
    }
    includeCallArguments(e, t2) {
      this.getVariableRespectingTDZ().includeCallArguments(e, t2);
    }
    isPossibleTDZ() {
      if (this.isTDZAccess !== null)
        return this.isTDZAccess;
      if (!(this.variable instanceof Nt && this.variable.kind && this.variable.kind in hs))
        return this.isTDZAccess = false;
      let e;
      return this.variable.declarations && this.variable.declarations.length === 1 && (e = this.variable.declarations[0]) && this.start < e.start && cs(this) === cs(e) ? this.isTDZAccess = true : this.variable.initReached ? this.isTDZAccess = false : this.isTDZAccess = true;
    }
    markDeclarationReached() {
      this.variable.initReached = true;
    }
    render(e, { snippets: { getPropertyAccess: t2 } }, { renderedParentType: s2, isCalleeOfRenderedParent: i2, isShorthandProperty: n } = X) {
      if (this.variable) {
        const r = this.variable.getName(t2);
        r !== this.name && (e.overwrite(this.start, this.end, r, { contentOnly: true, storeName: true }), n && e.prependRight(this.start, `${this.name}: `)), r === "eval" && s2 === "CallExpression" && i2 && e.appendRight(this.start, "0, ");
      }
    }
    applyDeoptimizations() {
      this.deoptimized = true, this.variable !== null && this.variable instanceof Nt && (this.variable.consolidateInitializers(), this.context.requestTreeshakingPass());
    }
    disallowImportReassignment() {
      return this.context.error({ code: "ILLEGAL_REASSIGNMENT", message: `Illegal reassignment to import '${this.name}'` }, this.start);
    }
    getVariableRespectingTDZ() {
      return this.isPossibleTDZ() ? H : this.variable;
    }
  }
  function cs(e) {
    for (; e && !/^Program|Function/.test(e.type); )
      e = e.parent;
    return e;
  }
  class us extends nt {
    constructor() {
      super(...arguments), this.deoptimized = false, this.declarationInit = null;
    }
    addExportedVariables(e, t2) {
      this.argument.addExportedVariables(e, t2);
    }
    declare(e, t2) {
      return this.declarationInit = t2, this.argument.declare(e, H);
    }
    deoptimizePath(e) {
      e.length === 0 && this.argument.deoptimizePath(O);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return e.length > 0 || this.argument.hasEffectsWhenAssignedAtPath(O, t2);
    }
    markDeclarationReached() {
      this.argument.markDeclarationReached();
    }
    applyDeoptimizations() {
      this.deoptimized = true, this.declarationInit !== null && (this.declarationInit.deoptimizePath([D, D]), this.context.requestTreeshakingPass());
    }
  }
  class ds extends nt {
    constructor() {
      super(...arguments), this.deoptimizedReturn = false;
    }
    createScope(e) {
      this.scope = new Dt(e, this.context);
    }
    deoptimizePath(e) {
      e.length === 1 && e[0] === D && this.scope.getReturnExpression().deoptimizePath(V);
    }
    deoptimizeThisOnEventAtPath() {
    }
    getReturnExpressionWhenCalledAtPath(e) {
      return e.length !== 0 ? H : this.async ? (this.deoptimizedReturn || (this.deoptimizedReturn = true, this.scope.getReturnExpression().deoptimizePath(V), this.context.requestTreeshakingPass()), H) : this.scope.getReturnExpression();
    }
    hasEffects() {
      return false;
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenAssignedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      if (e.length > 0)
        return true;
      if (this.async) {
        const { propertyReadSideEffects: e2 } = this.context.options.treeshake, t3 = this.scope.getReturnExpression();
        if (t3.hasEffectsWhenCalledAtPath(["then"], { args: Ne, thisParam: null, withNew: false }, s2) || e2 && (e2 === "always" || t3.hasEffectsWhenAccessedAtPath(["then"], s2)))
          return true;
      }
      for (const e2 of this.params)
        if (e2.hasEffects(s2))
          return true;
      const { ignore: i2, brokenFlow: n } = s2;
      return s2.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true }, !!this.body.hasEffects(s2) || (s2.ignore = i2, s2.brokenFlow = n, false);
    }
    include(e, t2) {
      this.included = true;
      for (const s3 of this.params)
        s3 instanceof ls || s3.include(e, t2);
      const { brokenFlow: s2 } = e;
      e.brokenFlow = 0, this.body.include(e, t2), e.brokenFlow = s2;
    }
    includeCallArguments(e, t2) {
      this.scope.includeCallArguments(e, t2);
    }
    initialise() {
      this.scope.addParameterVariables(this.params.map((e) => e.declare("parameter", H)), this.params[this.params.length - 1] instanceof us), this.body instanceof Kt ? this.body.addImplicitReturnExpressionToScope() : this.scope.addReturnExpression(this.body);
    }
    parseNode(e) {
      e.body.type === "BlockStatement" && (this.body = new Kt(e.body, this, this.scope.hoistedBodyVarScope)), super.parseNode(e);
    }
  }
  function ps(e, { exportNamesByVariable: t2, snippets: { _: s2, getObject: i2, getPropertyAccess: n } }, r = "") {
    if (e.length === 1 && t2.get(e[0]).length === 1) {
      const i3 = e[0];
      return `exports('${t2.get(i3)}',${s2}${i3.getName(n)}${r})`;
    }
    {
      const s3 = [];
      for (const i3 of e)
        for (const e2 of t2.get(i3))
          s3.push([e2, i3.getName(n) + r]);
      return `exports(${i2(s3, { lineBreakIndent: null })})`;
    }
  }
  ds.prototype.preventChildBlockScope = true;
  class Es extends Nt {
    constructor(e) {
      super("arguments", null, H, e);
    }
    hasEffectsWhenAccessedAtPath(e) {
      return e.length > 1;
    }
    hasEffectsWhenAssignedAtPath() {
      return true;
    }
    hasEffectsWhenCalledAtPath() {
      return true;
    }
  }
  class xs extends Nt {
    constructor(e) {
      super("this", null, null, e), this.deoptimizedPaths = [], this.entitiesToBeDeoptimized = /* @__PURE__ */ new Set(), this.thisDeoptimizationList = [], this.thisDeoptimizations = new j();
    }
    addEntityToBeDeoptimized(e) {
      for (const t2 of this.deoptimizedPaths)
        e.deoptimizePath(t2);
      for (const t2 of this.thisDeoptimizationList)
        this.applyThisDeoptimizationEvent(e, t2);
      this.entitiesToBeDeoptimized.add(e);
    }
    deoptimizePath(e) {
      if (e.length !== 0 && !this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(e, this)) {
        this.deoptimizedPaths.push(e);
        for (const t2 of this.entitiesToBeDeoptimized)
          t2.deoptimizePath(e);
      }
    }
    deoptimizeThisOnEventAtPath(e, t2, s2) {
      const i2 = { event: e, path: t2, thisParameter: s2 };
      if (!this.thisDeoptimizations.trackEntityAtPathAndGetIfTracked(t2, e, s2)) {
        for (const e2 of this.entitiesToBeDeoptimized)
          this.applyThisDeoptimizationEvent(e2, i2);
        this.thisDeoptimizationList.push(i2);
      }
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return this.getInit(t2).hasEffectsWhenAccessedAtPath(e, t2) || super.hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return this.getInit(t2).hasEffectsWhenAssignedAtPath(e, t2) || super.hasEffectsWhenAssignedAtPath(e, t2);
    }
    applyThisDeoptimizationEvent(e, { event: t2, path: s2, thisParameter: i2 }) {
      e.deoptimizeThisOnEventAtPath(t2, s2, i2 === this ? e : i2, W);
    }
    getInit(e) {
      return e.replacedVariableInits.get(this) || H;
    }
  }
  class bs extends Dt {
    constructor(e, t2) {
      super(e, t2), this.variables.set("arguments", this.argumentsVariable = new Es(t2)), this.variables.set("this", this.thisVariable = new xs(t2));
    }
    findLexicalBoundary() {
      return this;
    }
    includeCallArguments(e, t2) {
      if (super.includeCallArguments(e, t2), this.argumentsVariable.included)
        for (const s2 of t2)
          s2.included || s2.include(e, false);
    }
  }
  class vs extends nt {
    constructor() {
      super(...arguments), this.deoptimizedReturn = false, this.isPrototypeDeoptimized = false;
    }
    createScope(e) {
      this.scope = new bs(e, this.context);
    }
    deoptimizePath(e) {
      e.length === 1 && (e[0] === "prototype" ? this.isPrototypeDeoptimized = true : e[0] === D && (this.isPrototypeDeoptimized = true, this.scope.getReturnExpression().deoptimizePath(V)));
    }
    deoptimizeThisOnEventAtPath(e, t2, s2) {
      e === 2 && (t2.length > 0 ? s2.deoptimizePath(V) : this.scope.thisVariable.addEntityToBeDeoptimized(s2));
    }
    getReturnExpressionWhenCalledAtPath(e) {
      return e.length !== 0 ? H : this.async ? (this.deoptimizedReturn || (this.deoptimizedReturn = true, this.scope.getReturnExpression().deoptimizePath(V), this.context.requestTreeshakingPass()), H) : this.scope.getReturnExpression();
    }
    hasEffects() {
      return this.id !== null && this.id.hasEffects();
    }
    hasEffectsWhenAccessedAtPath(e) {
      return !(e.length <= 1) && (e.length > 2 || e[0] !== "prototype" || this.isPrototypeDeoptimized);
    }
    hasEffectsWhenAssignedAtPath(e) {
      return !(e.length <= 1) && (e.length > 2 || e[0] !== "prototype" || this.isPrototypeDeoptimized);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      if (e.length > 0)
        return true;
      if (this.async) {
        const { propertyReadSideEffects: e2 } = this.context.options.treeshake, t3 = this.scope.getReturnExpression();
        if (t3.hasEffectsWhenCalledAtPath(["then"], { args: Ne, thisParam: null, withNew: false }, s2) || e2 && (e2 === "always" || t3.hasEffectsWhenAccessedAtPath(["then"], s2)))
          return true;
      }
      for (const e2 of this.params)
        if (e2.hasEffects(s2))
          return true;
      const i2 = s2.replacedVariableInits.get(this.scope.thisVariable);
      s2.replacedVariableInits.set(this.scope.thisVariable, t2.withNew ? new dt(/* @__PURE__ */ Object.create(null), mt) : H);
      const { brokenFlow: n, ignore: r } = s2;
      return s2.ignore = { breaks: false, continues: false, labels: /* @__PURE__ */ new Set(), returnYield: true }, !!this.body.hasEffects(s2) || (s2.brokenFlow = n, i2 ? s2.replacedVariableInits.set(this.scope.thisVariable, i2) : s2.replacedVariableInits.delete(this.scope.thisVariable), s2.ignore = r, false);
    }
    include(e, t2) {
      this.included = true, this.id && this.id.include();
      const s2 = this.scope.argumentsVariable.included;
      for (const i3 of this.params)
        i3 instanceof ls && !s2 || i3.include(e, t2);
      const { brokenFlow: i2 } = e;
      e.brokenFlow = 0, this.body.include(e, t2), e.brokenFlow = i2;
    }
    includeCallArguments(e, t2) {
      this.scope.includeCallArguments(e, t2);
    }
    initialise() {
      this.id !== null && this.id.declare("function", this), this.scope.addParameterVariables(this.params.map((e) => e.declare("parameter", H)), this.params[this.params.length - 1] instanceof us), this.body.addImplicitReturnExpressionToScope();
    }
    parseNode(e) {
      this.body = new Kt(e.body, this, this.scope.hoistedBodyVarScope), super.parseNode(e);
    }
  }
  vs.prototype.preventChildBlockScope = true;
  class Ns extends nt {
    constructor() {
      super(...arguments), this.accessedValue = null, this.accessorCallOptions = { args: Ne, thisParam: null, withNew: false };
    }
    deoptimizeCache() {
    }
    deoptimizePath(e) {
      this.getAccessedValue().deoptimizePath(e);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      return e === 0 && this.kind === "get" && t2.length === 0 || e === 1 && this.kind === "set" && t2.length === 0 ? this.value.deoptimizeThisOnEventAtPath(2, O, s2, i2) : void this.getAccessedValue().deoptimizeThisOnEventAtPath(e, t2, s2, i2);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return this.getAccessedValue().getLiteralValueAtPath(e, t2, s2);
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return this.getAccessedValue().getReturnExpressionWhenCalledAtPath(e, t2, s2, i2);
    }
    hasEffects(e) {
      return this.key.hasEffects(e);
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return this.kind === "get" && e.length === 0 ? this.value.hasEffectsWhenCalledAtPath(O, this.accessorCallOptions, t2) : this.getAccessedValue().hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return this.kind === "set" ? this.value.hasEffectsWhenCalledAtPath(O, this.accessorCallOptions, t2) : this.getAccessedValue().hasEffectsWhenAssignedAtPath(e, t2);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return this.getAccessedValue().hasEffectsWhenCalledAtPath(e, t2, s2);
    }
    getAccessedValue() {
      return this.accessedValue === null ? this.kind === "get" ? (this.accessedValue = H, this.accessedValue = this.value.getReturnExpressionWhenCalledAtPath(O, this.accessorCallOptions, W, this)) : this.accessedValue = this.value : this.accessedValue;
    }
  }
  class _s extends Ns {
  }
  class $s extends G {
    constructor(e, t2) {
      super(), this.object = e, this.key = t2;
    }
    deoptimizePath(e) {
      this.object.deoptimizePath([this.key, ...e]);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      this.object.deoptimizeThisOnEventAtPath(e, [this.key, ...t2], s2, i2);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return this.object.getLiteralValueAtPath([this.key, ...e], t2, s2);
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return this.object.getReturnExpressionWhenCalledAtPath([this.key, ...e], t2, s2, i2);
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return e.length !== 0 && this.object.hasEffectsWhenAccessedAtPath([this.key, ...e], t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return this.object.hasEffectsWhenAssignedAtPath([this.key, ...e], t2);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return this.object.hasEffectsWhenCalledAtPath([this.key, ...e], t2, s2);
    }
  }
  class Ts extends nt {
    constructor() {
      super(...arguments), this.objectEntity = null;
    }
    createScope(e) {
      this.scope = new Rt(e);
    }
    deoptimizeCache() {
      this.getObjectEntity().deoptimizeAllProperties();
    }
    deoptimizePath(e) {
      this.getObjectEntity().deoptimizePath(e);
    }
    deoptimizeThisOnEventAtPath(e, t2, s2, i2) {
      this.getObjectEntity().deoptimizeThisOnEventAtPath(e, t2, s2, i2);
    }
    getLiteralValueAtPath(e, t2, s2) {
      return this.getObjectEntity().getLiteralValueAtPath(e, t2, s2);
    }
    getReturnExpressionWhenCalledAtPath(e, t2, s2, i2) {
      return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(e, t2, s2, i2);
    }
    hasEffects(e) {
      var t2, s2;
      const i2 = ((t2 = this.superClass) === null || t2 === void 0 ? void 0 : t2.hasEffects(e)) || this.body.hasEffects(e);
      return (s2 = this.id) === null || s2 === void 0 || s2.markDeclarationReached(), i2 || super.hasEffects(e);
    }
    hasEffectsWhenAccessedAtPath(e, t2) {
      return this.getObjectEntity().hasEffectsWhenAccessedAtPath(e, t2);
    }
    hasEffectsWhenAssignedAtPath(e, t2) {
      return this.getObjectEntity().hasEffectsWhenAssignedAtPath(e, t2);
    }
    hasEffectsWhenCalledAtPath(e, t2, s2) {
      return e.length === 0 ? !t2.withNew || (this.classConstructor !== null ? this.classConstructor.hasEffectsWhenCalledAtPath(O, t2, s2) : this.superClass !== null && this.superClass.hasEffectsWhenCalledAtPath(e, t2, s2)) : this.getObjectEntity().hasEffectsWhenCalledAtPath(e, t2, s2);
    }
    include(e, t2) {
      var s2;
      this.included = true, (s2 = this.superClass) === null || s2 === void 0 || s2.include(e, t2), this.body.include(e, t2), this.id && (this.id.markDeclarationReached(), this.id.include());
    }
    initialise() {
      var e;
      (e = this.id) === null || e === void 0 || e.declare("class", this);
      for (const e2 of this.body.body)
        if (e2 instanceof _s && e2.kind === "constructor")
          return void (this.classConstructor = e2);
      this.classConstructor = null;
    }
    getObjectEntity() {
      if (this.objectEntity !== null)
        return this.objectEntity;
      const e = [], t2 = [];
      for (const s2 of this.body.body) {
        const i2 = s2.static ? e : t2, n = s2.kind;
        if (i2 === t2 && !n)
          continue;
        const r = n === "set" || n === "get" ? n : "init";
        let a;
        if (s2.computed) {
          const e2 = s2.key.getLiteralValueAtPath(O, W, this);
          if (e2 === U$2) {
            i2.push({ key: D, kind: r, property: s2 });
            continue;
          }
          a = String(e2);
        } else
          a = s2.key instanceof ls ? s2.key.name : String(s2.key.value);
        i2.push({ key: a, kind: r, property: s2 });
      }
      return e.unshift({ key: "prototype", kind: "init", property: new dt(t2, this.superClass ? new $s(this.superClass, "prototype") : mt) }), this.objectEntity = new dt(e, this.superClass || mt);
    }
  }
  class Rs extends Ts {
    initialise() {
      super.initialise(), this.id !== null && (this.id.variable.isId = true);
    }
    parseNode(e) {
      e.id !== null && (this.id = new ls(e.id, this, this.scope.parent)), super.parseNode(e);
    }
    render(e, t2) {
      const { exportNamesByVariable: s2, format: i2, snippets: { _: n } } = t2;
      i2 === "system" && this.id && s2.has(this.id.variable) && e.appendLeft(this.end, `${n}${ps([this.id.variable], t2)};`), super.render(e, t2);
    }
  }
  class Ds extends nt {
    hasEffects() {
      return false;
    }
    initialise() {
      this.context.addExport(this);
    }
    render(e, t2, s2) {
      e.remove(s2.start, s2.end);
    }
  }
  Ds.prototype.needsBoundaries = true;
  class Ls extends vs {
    initialise() {
      super.initialise(), this.id !== null && (this.id.variable.isId = true);
    }
    parseNode(e) {
      e.id !== null && (this.id = new ls(e.id, this, this.scope.parent)), super.parseNode(e);
    }
  }
  class Os extends nt {
    include(e, t2) {
      super.include(e, t2), t2 && this.context.includeVariableInModule(this.variable);
    }
    initialise() {
      const e = this.declaration;
      this.declarationName = e.id && e.id.name || this.declaration.name, this.variable = this.scope.addExportDefaultDeclaration(this.declarationName || this.context.getModuleName(), this, this.context), this.context.addExport(this);
    }
    render(e, t2, s2) {
      const { start: i2, end: n } = s2, r = function(e2, t3) {
        return zt(e2, Bt(e2, "default", t3) + 7);
      }(e.original, this.start);
      if (this.declaration instanceof Ls)
        this.renderNamedDeclaration(e, r, "function", "(", this.declaration.id === null, t2);
      else if (this.declaration instanceof Rs)
        this.renderNamedDeclaration(e, r, "class", "{", this.declaration.id === null, t2);
      else {
        if (this.variable.getOriginalVariable() !== this.variable)
          return void Lt(this, e, i2, n);
        if (!this.variable.included)
          return e.remove(this.start, r), this.declaration.render(e, t2, { renderedSurroundingElement: "ExpressionStatement" }), void (e.original[this.end - 1] !== ";" && e.appendLeft(this.end, ";"));
        this.renderVariableDeclaration(e, r, t2);
      }
      this.declaration.render(e, t2);
    }
    renderNamedDeclaration(e, t2, s2, i2, n, r) {
      const { exportNamesByVariable: a, format: o, snippets: { getPropertyAccess: h } } = r, l = this.variable.getName(h);
      e.remove(this.start, t2), n && e.appendLeft(function(e2, t3, s3, i3) {
        const n2 = Bt(e2, t3, i3) + t3.length;
        e2 = e2.slice(n2, Bt(e2, s3, n2));
        const r2 = Bt(e2, "*");
        return r2 === -1 ? n2 : n2 + r2 + 1;
      }(e.original, s2, i2, t2), ` ${l}`), o === "system" && this.declaration instanceof Rs && a.has(this.variable) && e.appendLeft(this.end, ` ${ps([this.variable], r)};`);
    }
    renderVariableDeclaration(e, t2, { format: s2, exportNamesByVariable: i2, snippets: { cnst: n, getPropertyAccess: r } }) {
      const a = e.original.charCodeAt(this.end - 1) === 59, o = s2 === "system" && i2.get(this.variable);
      o ? (e.overwrite(this.start, t2, `${n} ${this.variable.getName(r)} = exports('${o[0]}', `), e.appendRight(a ? this.end - 1 : this.end, ")" + (a ? "" : ";"))) : (e.overwrite(this.start, t2, `${n} ${this.variable.getName(r)} = `), a || e.appendLeft(this.end, ";"));
    }
  }
  Os.prototype.needsBoundaries = true;
  class Vs extends nt {
    bind() {
      this.declaration !== null && this.declaration.bind();
    }
    hasEffects(e) {
      return this.declaration !== null && this.declaration.hasEffects(e);
    }
    initialise() {
      this.context.addExport(this);
    }
    render(e, t2, s2) {
      const { start: i2, end: n } = s2;
      this.declaration === null ? e.remove(i2, n) : (e.remove(this.start, this.declaration.start), this.declaration.render(e, t2, { end: n, start: i2 }));
    }
  }
  Vs.prototype.needsBoundaries = true;
  class Ws extends nt {
    bind() {
    }
    hasEffects() {
      return false;
    }
    initialise() {
      this.context.addImport(this);
    }
    render(e, t2, s2) {
      e.remove(s2.start, s2.end);
    }
  }
  Ws.prototype.needsBoundaries = true;
  function oi(e) {
    return e([["value", "'Module'"]], { lineBreakIndent: null });
  }
  class vi extends nt {
    hasEffects(e) {
      if (this.test && this.test.hasEffects(e))
        return true;
      for (const t2 of this.consequent) {
        if (e.brokenFlow)
          break;
        if (t2.hasEffects(e))
          return true;
      }
      return false;
    }
    include(e, t2) {
      this.included = true, this.test && this.test.include(e, t2);
      for (const s2 of this.consequent)
        (t2 || s2.shouldBeIncluded(e)) && s2.include(e, t2);
    }
    render(e, t2, s2) {
      if (this.consequent.length) {
        this.test && this.test.render(e, t2);
        const i2 = this.test ? this.test.end : Bt(e.original, "default", this.start) + 7, n = Bt(e.original, ":", i2) + 1;
        jt(this.consequent, e, n, s2.end, t2);
      } else
        super.render(e, t2);
    }
  }
  vi.prototype.needsBoundaries = true;
  class $i extends q {
    constructor(e) {
      super(e.getModuleName()), this.memberVariables = null, this.mergedNamespaces = [], this.referencedEarly = false, this.references = [], this.context = e, this.module = e.module;
    }
    addReference(e) {
      this.references.push(e), this.name = e.name;
    }
    getMemberVariables() {
      if (this.memberVariables)
        return this.memberVariables;
      const e = /* @__PURE__ */ Object.create(null);
      for (const t2 of this.context.getExports().concat(this.context.getReexports()))
        if (t2[0] !== "*" && t2 !== this.module.info.syntheticNamedExports) {
          const s2 = this.context.traceExport(t2);
          s2 && (e[t2] = s2);
        }
      return this.memberVariables = e;
    }
    include() {
      this.included = true, this.context.includeAllExports();
    }
    prepare(e) {
      this.mergedNamespaces.length > 0 && this.module.scope.addAccessedGlobals(["_mergeNamespaces"], e);
    }
    renderBlock(e) {
      const { exportNamesByVariable: t2, format: s2, freeze: i2, indent: n, namespaceToStringTag: r, snippets: { _: a, cnst: o, getObject: h, getPropertyAccess: l, n: c, s: u } } = e, d = this.getMemberVariables(), p = Object.entries(d).map(([e2, t3]) => this.referencedEarly || t3.isReassigned ? [null, `get ${e2}${a}()${a}{${a}return ${t3.getName(l)}${u}${a}}`] : [e2, t3.getName(l)]);
      p.unshift([null, `__proto__:${a}null`]);
      let f = h(p, { lineBreakIndent: { base: "", t: n } });
      if (this.mergedNamespaces.length > 0) {
        const e2 = this.mergedNamespaces.map((e3) => e3.getName(l));
        f = `/*#__PURE__*/_mergeNamespaces(${f},${a}[${e2.join(`,${a}`)}])`;
      } else
        r && (f = `/*#__PURE__*/Object.defineProperty(${f},${a}Symbol.toStringTag,${a}${oi(h)})`), i2 && (f = `/*#__PURE__*/Object.freeze(${f})`);
      return f = `${o} ${this.getName(l)}${a}=${a}${f};`, s2 === "system" && t2.has(this) && (f += `${c}${ps([this], e)};`), f;
    }
    renderFirst() {
      return this.referencedEarly;
    }
    setMergedNamespaces(e) {
      this.mergedNamespaces = e;
      const t2 = this.context.getModuleExecIndex();
      for (const e2 of this.references)
        if (e2.context.getModuleExecIndex() <= t2) {
          this.referencedEarly = true;
          break;
        }
    }
  }
  $i.prototype.isNamespace = true;
  var Ri;
  !function(e) {
    e[e.LOAD_AND_PARSE = 0] = "LOAD_AND_PARSE", e[e.ANALYSE = 1] = "ANALYSE", e[e.GENERATE = 2] = "GENERATE";
  }(Ri || (Ri = {}));
  var Cn = {}, In = Nn;
  function Nn(e, t2) {
    if (!e)
      throw new Error(t2 || "Assertion failed");
  }
  Nn.equal = function(e, t2, s2) {
    if (e != t2)
      throw new Error(s2 || "Assertion failed: " + e + " != " + t2);
  };
  var _n = { exports: {} };
  typeof Object.create == "function" ? _n.exports = function(e, t2) {
    t2 && (e.super_ = t2, e.prototype = Object.create(t2.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
  } : _n.exports = function(e, t2) {
    if (t2) {
      e.super_ = t2;
      var s2 = function() {
      };
      s2.prototype = t2.prototype, e.prototype = new s2(), e.prototype.constructor = e;
    }
  };
  var $n = In, Tn = _n.exports;
  function Rn(e, t2) {
    return (64512 & e.charCodeAt(t2)) == 55296 && (!(t2 < 0 || t2 + 1 >= e.length) && (64512 & e.charCodeAt(t2 + 1)) == 56320);
  }
  function Mn(e) {
    return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0;
  }
  function Dn(e) {
    return e.length === 1 ? "0" + e : e;
  }
  function Ln(e) {
    return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
  }
  Cn.inherits = Tn, Cn.toArray = function(e, t2) {
    if (Array.isArray(e))
      return e.slice();
    if (!e)
      return [];
    var s2 = [];
    if (typeof e == "string")
      if (t2) {
        if (t2 === "hex")
          for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2)
            s2.push(parseInt(e[n] + e[n + 1], 16));
      } else
        for (var i2 = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128 ? s2[i2++] = r : r < 2048 ? (s2[i2++] = r >> 6 | 192, s2[i2++] = 63 & r | 128) : Rn(e, n) ? (r = 65536 + ((1023 & r) << 10) + (1023 & e.charCodeAt(++n)), s2[i2++] = r >> 18 | 240, s2[i2++] = r >> 12 & 63 | 128, s2[i2++] = r >> 6 & 63 | 128, s2[i2++] = 63 & r | 128) : (s2[i2++] = r >> 12 | 224, s2[i2++] = r >> 6 & 63 | 128, s2[i2++] = 63 & r | 128);
        }
    else
      for (n = 0; n < e.length; n++)
        s2[n] = 0 | e[n];
    return s2;
  }, Cn.toHex = function(e) {
    for (var t2 = "", s2 = 0; s2 < e.length; s2++)
      t2 += Dn(e[s2].toString(16));
    return t2;
  }, Cn.htonl = Mn, Cn.toHex32 = function(e, t2) {
    for (var s2 = "", i2 = 0; i2 < e.length; i2++) {
      var n = e[i2];
      t2 === "little" && (n = Mn(n)), s2 += Ln(n.toString(16));
    }
    return s2;
  }, Cn.zero2 = Dn, Cn.zero8 = Ln, Cn.join32 = function(e, t2, s2, i2) {
    var n = s2 - t2;
    $n(n % 4 == 0);
    for (var r = new Array(n / 4), a = 0, o = t2; a < r.length; a++, o += 4) {
      var h;
      h = i2 === "big" ? e[o] << 24 | e[o + 1] << 16 | e[o + 2] << 8 | e[o + 3] : e[o + 3] << 24 | e[o + 2] << 16 | e[o + 1] << 8 | e[o], r[a] = h >>> 0;
    }
    return r;
  }, Cn.split32 = function(e, t2) {
    for (var s2 = new Array(4 * e.length), i2 = 0, n = 0; i2 < e.length; i2++, n += 4) {
      var r = e[i2];
      t2 === "big" ? (s2[n] = r >>> 24, s2[n + 1] = r >>> 16 & 255, s2[n + 2] = r >>> 8 & 255, s2[n + 3] = 255 & r) : (s2[n + 3] = r >>> 24, s2[n + 2] = r >>> 16 & 255, s2[n + 1] = r >>> 8 & 255, s2[n] = 255 & r);
    }
    return s2;
  }, Cn.rotr32 = function(e, t2) {
    return e >>> t2 | e << 32 - t2;
  }, Cn.rotl32 = function(e, t2) {
    return e << t2 | e >>> 32 - t2;
  }, Cn.sum32 = function(e, t2) {
    return e + t2 >>> 0;
  }, Cn.sum32_3 = function(e, t2, s2) {
    return e + t2 + s2 >>> 0;
  }, Cn.sum32_4 = function(e, t2, s2, i2) {
    return e + t2 + s2 + i2 >>> 0;
  }, Cn.sum32_5 = function(e, t2, s2, i2, n) {
    return e + t2 + s2 + i2 + n >>> 0;
  }, Cn.sum64 = function(e, t2, s2, i2) {
    var n = e[t2], r = i2 + e[t2 + 1] >>> 0, a = (r < i2 ? 1 : 0) + s2 + n;
    e[t2] = a >>> 0, e[t2 + 1] = r;
  }, Cn.sum64_hi = function(e, t2, s2, i2) {
    return (t2 + i2 >>> 0 < t2 ? 1 : 0) + e + s2 >>> 0;
  }, Cn.sum64_lo = function(e, t2, s2, i2) {
    return t2 + i2 >>> 0;
  }, Cn.sum64_4_hi = function(e, t2, s2, i2, n, r, a, o) {
    var h = 0, l = t2;
    return h += (l = l + i2 >>> 0) < t2 ? 1 : 0, h += (l = l + r >>> 0) < r ? 1 : 0, e + s2 + n + a + (h += (l = l + o >>> 0) < o ? 1 : 0) >>> 0;
  }, Cn.sum64_4_lo = function(e, t2, s2, i2, n, r, a, o) {
    return t2 + i2 + r + o >>> 0;
  }, Cn.sum64_5_hi = function(e, t2, s2, i2, n, r, a, o, h, l) {
    var c = 0, u = t2;
    return c += (u = u + i2 >>> 0) < t2 ? 1 : 0, c += (u = u + r >>> 0) < r ? 1 : 0, c += (u = u + o >>> 0) < o ? 1 : 0, e + s2 + n + a + h + (c += (u = u + l >>> 0) < l ? 1 : 0) >>> 0;
  }, Cn.sum64_5_lo = function(e, t2, s2, i2, n, r, a, o, h, l) {
    return t2 + i2 + r + o + l >>> 0;
  }, Cn.rotr64_hi = function(e, t2, s2) {
    return (t2 << 32 - s2 | e >>> s2) >>> 0;
  }, Cn.rotr64_lo = function(e, t2, s2) {
    return (e << 32 - s2 | t2 >>> s2) >>> 0;
  }, Cn.shr64_hi = function(e, t2, s2) {
    return e >>> s2;
  }, Cn.shr64_lo = function(e, t2, s2) {
    return (e << 32 - s2 | t2 >>> s2) >>> 0;
  };
  var On = {}, Vn = Cn, Bn = In;
  function Fn() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
  }
  On.BlockHash = Fn, Fn.prototype.update = function(e, t2) {
    if (e = Vn.toArray(e, t2), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
      var s2 = (e = this.pending).length % this._delta8;
      this.pending = e.slice(e.length - s2, e.length), this.pending.length === 0 && (this.pending = null), e = Vn.join32(e, 0, e.length - s2, this.endian);
      for (var i2 = 0; i2 < e.length; i2 += this._delta32)
        this._update(e, i2, i2 + this._delta32);
    }
    return this;
  }, Fn.prototype.digest = function(e) {
    return this.update(this._pad()), Bn(this.pending === null), this._digest(e);
  }, Fn.prototype._pad = function() {
    var e = this.pendingTotal, t2 = this._delta8, s2 = t2 - (e + this.padLength) % t2, i2 = new Array(s2 + this.padLength);
    i2[0] = 128;
    for (var n = 1; n < s2; n++)
      i2[n] = 0;
    if (e <<= 3, this.endian === "big") {
      for (var r = 8; r < this.padLength; r++)
        i2[n++] = 0;
      i2[n++] = 0, i2[n++] = 0, i2[n++] = 0, i2[n++] = 0, i2[n++] = e >>> 24 & 255, i2[n++] = e >>> 16 & 255, i2[n++] = e >>> 8 & 255, i2[n++] = 255 & e;
    } else
      for (i2[n++] = 255 & e, i2[n++] = e >>> 8 & 255, i2[n++] = e >>> 16 & 255, i2[n++] = e >>> 24 & 255, i2[n++] = 0, i2[n++] = 0, i2[n++] = 0, i2[n++] = 0, r = 8; r < this.padLength; r++)
        i2[n++] = 0;
    return i2;
  };
  var zn = {}, Wn = Cn.rotr32;
  function jn(e, t2, s2) {
    return e & t2 ^ ~e & s2;
  }
  function Un(e, t2, s2) {
    return e & t2 ^ e & s2 ^ t2 & s2;
  }
  function Gn(e, t2, s2) {
    return e ^ t2 ^ s2;
  }
  zn.ft_1 = function(e, t2, s2, i2) {
    return e === 0 ? jn(t2, s2, i2) : e === 1 || e === 3 ? Gn(t2, s2, i2) : e === 2 ? Un(t2, s2, i2) : void 0;
  }, zn.ch32 = jn, zn.maj32 = Un, zn.p32 = Gn, zn.s0_256 = function(e) {
    return Wn(e, 2) ^ Wn(e, 13) ^ Wn(e, 22);
  }, zn.s1_256 = function(e) {
    return Wn(e, 6) ^ Wn(e, 11) ^ Wn(e, 25);
  }, zn.g0_256 = function(e) {
    return Wn(e, 7) ^ Wn(e, 18) ^ e >>> 3;
  }, zn.g1_256 = function(e) {
    return Wn(e, 17) ^ Wn(e, 19) ^ e >>> 10;
  };
  var Hn = Cn, qn = On, Kn = zn, Xn = In, Yn = Hn.sum32, Qn = Hn.sum32_4, Zn = Hn.sum32_5, Jn = Kn.ch32, er = Kn.maj32, tr = Kn.s0_256, sr = Kn.s1_256, ir = Kn.g0_256, nr = Kn.g1_256, rr = qn.BlockHash, ar = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  function or() {
    if (!(this instanceof or))
      return new or();
    rr.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ar, this.W = new Array(64);
  }
  Hn.inherits(or, rr);
  or.blockSize = 512, or.outSize = 256, or.hmacStrength = 192, or.padLength = 64, or.prototype._update = function(e, t2) {
    for (var s2 = this.W, i2 = 0; i2 < 16; i2++)
      s2[i2] = e[t2 + i2];
    for (; i2 < s2.length; i2++)
      s2[i2] = Qn(nr(s2[i2 - 2]), s2[i2 - 7], ir(s2[i2 - 15]), s2[i2 - 16]);
    var n = this.h[0], r = this.h[1], a = this.h[2], o = this.h[3], h = this.h[4], l = this.h[5], c = this.h[6], u = this.h[7];
    for (Xn(this.k.length === s2.length), i2 = 0; i2 < s2.length; i2++) {
      var d = Zn(u, sr(h), Jn(h, l, c), this.k[i2], s2[i2]), p = Yn(tr(n), er(n, r, a));
      u = c, c = l, l = h, h = Yn(o, d), o = a, a = r, r = n, n = Yn(d, p);
    }
    this.h[0] = Yn(this.h[0], n), this.h[1] = Yn(this.h[1], r), this.h[2] = Yn(this.h[2], a), this.h[3] = Yn(this.h[3], o), this.h[4] = Yn(this.h[4], h), this.h[5] = Yn(this.h[5], l), this.h[6] = Yn(this.h[6], c), this.h[7] = Yn(this.h[7], u);
  }, or.prototype._digest = function(e) {
    return e === "hex" ? Hn.toHex32(this.h, "big") : Hn.split32(this.h, "big");
  };
  var Kr = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], Xr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], Yr = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", Qr = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" }, Zr = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Jr = { 5: Zr, "5module": Zr + " export import", 6: Zr + " const class extends export import super" }, ea = /^in(stanceof)?$/, ta = new RegExp("[" + Yr + "]"), sa = new RegExp("[" + Yr + "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]");
  function ia(e, t2) {
    for (var s2 = 65536, i2 = 0; i2 < t2.length; i2 += 2) {
      if ((s2 += t2[i2]) > e)
        return false;
      if ((s2 += t2[i2 + 1]) >= e)
        return true;
    }
  }
  function na(e, t2) {
    return e < 65 ? e === 36 : e < 91 || (e < 97 ? e === 95 : e < 123 || (e <= 65535 ? e >= 170 && ta.test(String.fromCharCode(e)) : t2 !== false && ia(e, Xr)));
  }
  function ra(e, t2) {
    return e < 48 ? e === 36 : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? e === 95 : e < 123 || (e <= 65535 ? e >= 170 && sa.test(String.fromCharCode(e)) : t2 !== false && (ia(e, Xr) || ia(e, Kr)))));
  }
  var aa = function(e, t2) {
    t2 === void 0 && (t2 = {}), this.label = e, this.keyword = t2.keyword, this.beforeExpr = !!t2.beforeExpr, this.startsExpr = !!t2.startsExpr, this.isLoop = !!t2.isLoop, this.isAssign = !!t2.isAssign, this.prefix = !!t2.prefix, this.postfix = !!t2.postfix, this.binop = t2.binop || null, this.updateContext = null;
  };
  function oa(e, t2) {
    return new aa(e, { beforeExpr: true, binop: t2 });
  }
  var ha = { beforeExpr: true }, la = { startsExpr: true }, ca = {};
  function ua(e, t2) {
    return t2 === void 0 && (t2 = {}), t2.keyword = e, ca[e] = new aa(e, t2);
  }
  var da = { num: new aa("num", la), regexp: new aa("regexp", la), string: new aa("string", la), name: new aa("name", la), privateId: new aa("privateId", la), eof: new aa("eof"), bracketL: new aa("[", { beforeExpr: true, startsExpr: true }), bracketR: new aa("]"), braceL: new aa("{", { beforeExpr: true, startsExpr: true }), braceR: new aa("}"), parenL: new aa("(", { beforeExpr: true, startsExpr: true }), parenR: new aa(")"), comma: new aa(",", ha), semi: new aa(";", ha), colon: new aa(":", ha), dot: new aa("."), question: new aa("?", ha), questionDot: new aa("?."), arrow: new aa("=>", ha), template: new aa("template"), invalidTemplate: new aa("invalidTemplate"), ellipsis: new aa("...", ha), backQuote: new aa("`", la), dollarBraceL: new aa("${", { beforeExpr: true, startsExpr: true }), eq: new aa("=", { beforeExpr: true, isAssign: true }), assign: new aa("_=", { beforeExpr: true, isAssign: true }), incDec: new aa("++/--", { prefix: true, postfix: true, startsExpr: true }), prefix: new aa("!/~", { beforeExpr: true, prefix: true, startsExpr: true }), logicalOR: oa("||", 1), logicalAND: oa("&&", 2), bitwiseOR: oa("|", 3), bitwiseXOR: oa("^", 4), bitwiseAND: oa("&", 5), equality: oa("==/!=/===/!==", 6), relational: oa("</>/<=/>=", 7), bitShift: oa("<</>>/>>>", 8), plusMin: new aa("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: oa("%", 10), star: oa("*", 10), slash: oa("/", 10), starstar: new aa("**", { beforeExpr: true }), coalesce: oa("??", 1), _break: ua("break"), _case: ua("case", ha), _catch: ua("catch"), _continue: ua("continue"), _debugger: ua("debugger"), _default: ua("default", ha), _do: ua("do", { isLoop: true, beforeExpr: true }), _else: ua("else", ha), _finally: ua("finally"), _for: ua("for", { isLoop: true }), _function: ua("function", la), _if: ua("if"), _return: ua("return", ha), _switch: ua("switch"), _throw: ua("throw", ha), _try: ua("try"), _var: ua("var"), _const: ua("const"), _while: ua("while", { isLoop: true }), _with: ua("with"), _new: ua("new", { beforeExpr: true, startsExpr: true }), _this: ua("this", la), _super: ua("super", la), _class: ua("class", la), _extends: ua("extends", ha), _export: ua("export"), _import: ua("import", la), _null: ua("null", la), _true: ua("true", la), _false: ua("false", la), _in: ua("in", { beforeExpr: true, binop: 7 }), _instanceof: ua("instanceof", { beforeExpr: true, binop: 7 }), _typeof: ua("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: ua("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: ua("delete", { beforeExpr: true, prefix: true, startsExpr: true }) }, pa = /\r\n?|\n|\u2028|\u2029/, fa = new RegExp(pa.source, "g");
  function ma(e) {
    return e === 10 || e === 13 || e === 8232 || e === 8233;
  }
  function ga(e, t2, s2) {
    s2 === void 0 && (s2 = e.length);
    for (var i2 = t2; i2 < s2; i2++) {
      var n = e.charCodeAt(i2);
      if (ma(n))
        return i2 < s2 - 1 && n === 13 && e.charCodeAt(i2 + 1) === 10 ? i2 + 2 : i2 + 1;
    }
    return -1;
  }
  var ya = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Ea = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, xa = Object.prototype, ba = xa.hasOwnProperty, va = xa.toString, Aa = Object.hasOwn || function(e, t2) {
    return ba.call(e, t2);
  }, Sa = Array.isArray || function(e) {
    return va.call(e) === "[object Array]";
  };
  function Pa(e) {
    return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
  }
  function ka(e) {
    return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
  }
  var wa = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Ca = function(e, t2) {
    this.line = e, this.column = t2;
  };
  Ca.prototype.offset = function(e) {
    return new Ca(this.line, this.column + e);
  };
  var Ia = function(e, t2, s2) {
    this.start = t2, this.end = s2, e.sourceFile !== null && (this.source = e.sourceFile);
  };
  function Na(e, t2) {
    for (var s2 = 1, i2 = 0; ; ) {
      var n = ga(e, i2, t2);
      if (n < 0)
        return new Ca(s2, t2 - i2);
      ++s2, i2 = n;
    }
  }
  var _a = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: false, locations: false, onToken: null, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null, preserveParens: false }, $a = false;
  function Ta(e) {
    var t2 = {};
    for (var s2 in _a)
      t2[s2] = e && Aa(e, s2) ? e[s2] : _a[s2];
    if (t2.ecmaVersion === "latest" ? t2.ecmaVersion = 1e8 : t2.ecmaVersion == null ? (!$a && typeof console == "object" && console.warn && ($a = true, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), t2.ecmaVersion = 11) : t2.ecmaVersion >= 2015 && (t2.ecmaVersion -= 2009), t2.allowReserved == null && (t2.allowReserved = t2.ecmaVersion < 5), Sa(t2.onToken)) {
      var i2 = t2.onToken;
      t2.onToken = function(e2) {
        return i2.push(e2);
      };
    }
    return Sa(t2.onComment) && (t2.onComment = function(e2, t3) {
      return function(s3, i3, n, r, a, o) {
        var h = { type: s3 ? "Block" : "Line", value: i3, start: n, end: r };
        e2.locations && (h.loc = new Ia(this, a, o)), e2.ranges && (h.range = [n, r]), t3.push(h);
      };
    }(t2, t2.onComment)), t2;
  }
  function Ra(e, t2) {
    return 2 | (e ? 4 : 0) | (t2 ? 8 : 0);
  }
  var Ma = function(e, t2, s2) {
    this.options = e = Ta(e), this.sourceFile = e.sourceFile, this.keywords = Pa(Jr[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
    var i2 = "";
    e.allowReserved !== true && (i2 = Qr[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (i2 += " await")), this.reservedWords = Pa(i2);
    var n = (i2 ? i2 + " " : "") + Qr.strict;
    this.reservedWordsStrict = Pa(n), this.reservedWordsStrictBind = Pa(n + " " + Qr.strictBind), this.input = String(t2), this.containsEsc = false, s2 ? (this.pos = s2, this.lineStart = this.input.lastIndexOf("\n", s2 - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(pa).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = da.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = true, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = false, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = [];
  }, Da = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
  Ma.prototype.parse = function() {
    var e = this.options.program || this.startNode();
    return this.nextToken(), this.parseTopLevel(e);
  }, Da.inFunction.get = function() {
    return (2 & this.currentVarScope().flags) > 0;
  }, Da.inGenerator.get = function() {
    return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
  }, Da.inAsync.get = function() {
    return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
  }, Da.canAwait.get = function() {
    for (var e = this.scopeStack.length - 1; e >= 0; e--) {
      var t2 = this.scopeStack[e];
      if (t2.inClassFieldInit || 256 & t2.flags)
        return false;
      if (2 & t2.flags)
        return (4 & t2.flags) > 0;
    }
    return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
  }, Da.allowSuper.get = function() {
    var e = this.currentThisScope(), t2 = e.flags, s2 = e.inClassFieldInit;
    return (64 & t2) > 0 || s2 || this.options.allowSuperOutsideMethod;
  }, Da.allowDirectSuper.get = function() {
    return (128 & this.currentThisScope().flags) > 0;
  }, Da.treatFunctionsAsVar.get = function() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }, Da.allowNewDotTarget.get = function() {
    var e = this.currentThisScope(), t2 = e.flags, s2 = e.inClassFieldInit;
    return (258 & t2) > 0 || s2;
  }, Da.inClassStaticBlock.get = function() {
    return (256 & this.currentVarScope().flags) > 0;
  }, Ma.extend = function() {
    for (var e = [], t2 = arguments.length; t2--; )
      e[t2] = arguments[t2];
    for (var s2 = this, i2 = 0; i2 < e.length; i2++)
      s2 = e[i2](s2);
    return s2;
  }, Ma.parse = function(e, t2) {
    return new this(t2, e).parse();
  }, Ma.parseExpressionAt = function(e, t2, s2) {
    var i2 = new this(s2, e, t2);
    return i2.nextToken(), i2.parseExpression();
  }, Ma.tokenizer = function(e, t2) {
    return new this(t2, e);
  }, Object.defineProperties(Ma.prototype, Da);
  var La = Ma.prototype, Oa = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
  La.strictDirective = function(e) {
    if (this.options.ecmaVersion < 5)
      return false;
    for (; ; ) {
      Ea.lastIndex = e, e += Ea.exec(this.input)[0].length;
      var t2 = Oa.exec(this.input.slice(e));
      if (!t2)
        return false;
      if ((t2[1] || t2[2]) === "use strict") {
        Ea.lastIndex = e + t2[0].length;
        var s2 = Ea.exec(this.input), i2 = s2.index + s2[0].length, n = this.input.charAt(i2);
        return n === ";" || n === "}" || pa.test(s2[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || n === "!" && this.input.charAt(i2 + 1) === "=");
      }
      e += t2[0].length, Ea.lastIndex = e, e += Ea.exec(this.input)[0].length, this.input[e] === ";" && e++;
    }
  }, La.eat = function(e) {
    return this.type === e && (this.next(), true);
  }, La.isContextual = function(e) {
    return this.type === da.name && this.value === e && !this.containsEsc;
  }, La.eatContextual = function(e) {
    return !!this.isContextual(e) && (this.next(), true);
  }, La.expectContextual = function(e) {
    this.eatContextual(e) || this.unexpected();
  }, La.canInsertSemicolon = function() {
    return this.type === da.eof || this.type === da.braceR || pa.test(this.input.slice(this.lastTokEnd, this.start));
  }, La.insertSemicolon = function() {
    if (this.canInsertSemicolon())
      return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), true;
  }, La.semicolon = function() {
    this.eat(da.semi) || this.insertSemicolon() || this.unexpected();
  }, La.afterTrailingComma = function(e, t2) {
    if (this.type === e)
      return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t2 || this.next(), true;
  }, La.expect = function(e) {
    this.eat(e) || this.unexpected();
  }, La.unexpected = function(e) {
    this.raise(e != null ? e : this.start, "Unexpected token");
  };
  var Va = function() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
  };
  La.checkPatternErrors = function(e, t2) {
    if (e) {
      e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
      var s2 = t2 ? e.parenthesizedAssign : e.parenthesizedBind;
      s2 > -1 && this.raiseRecoverable(s2, "Parenthesized pattern");
    }
  }, La.checkExpressionErrors = function(e, t2) {
    if (!e)
      return false;
    var s2 = e.shorthandAssign, i2 = e.doubleProto;
    if (!t2)
      return s2 >= 0 || i2 >= 0;
    s2 >= 0 && this.raise(s2, "Shorthand property assignments are valid only in destructuring patterns"), i2 >= 0 && this.raiseRecoverable(i2, "Redefinition of __proto__ property");
  }, La.checkYieldAwaitInDefaultParams = function() {
    this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
  }, La.isSimpleAssignTarget = function(e) {
    return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
  };
  var Ba = Ma.prototype;
  Ba.parseTopLevel = function(e) {
    var t2 = /* @__PURE__ */ Object.create(null);
    for (e.body || (e.body = []); this.type !== da.eof; ) {
      var s2 = this.parseStatement(null, true, t2);
      e.body.push(s2);
    }
    if (this.inModule)
      for (var i2 = 0, n = Object.keys(this.undefinedExports); i2 < n.length; i2 += 1) {
        var r = n[i2];
        this.raiseRecoverable(this.undefinedExports[r].start, "Export '" + r + "' is not defined");
      }
    return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
  };
  var Fa = { kind: "loop" }, za = { kind: "switch" };
  Ba.isLet = function(e) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
      return false;
    Ea.lastIndex = this.pos;
    var t2 = Ea.exec(this.input), s2 = this.pos + t2[0].length, i2 = this.input.charCodeAt(s2);
    if (i2 === 91 || i2 === 92 || i2 > 55295 && i2 < 56320)
      return true;
    if (e)
      return false;
    if (i2 === 123)
      return true;
    if (na(i2, true)) {
      for (var n = s2 + 1; ra(i2 = this.input.charCodeAt(n), true); )
        ++n;
      if (i2 === 92 || i2 > 55295 && i2 < 56320)
        return true;
      var r = this.input.slice(s2, n);
      if (!ea.test(r))
        return true;
    }
    return false;
  }, Ba.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
      return false;
    Ea.lastIndex = this.pos;
    var e, t2 = Ea.exec(this.input), s2 = this.pos + t2[0].length;
    return !(pa.test(this.input.slice(this.pos, s2)) || this.input.slice(s2, s2 + 8) !== "function" || s2 + 8 !== this.input.length && (ra(e = this.input.charCodeAt(s2 + 8)) || e > 55295 && e < 56320));
  }, Ba.parseStatement = function(e, t2, s2) {
    var i2, n = this.type, r = this.startNode();
    switch (this.isLet(e) && (n = da._var, i2 = "let"), n) {
      case da._break:
      case da._continue:
        return this.parseBreakContinueStatement(r, n.keyword);
      case da._debugger:
        return this.parseDebuggerStatement(r);
      case da._do:
        return this.parseDoStatement(r);
      case da._for:
        return this.parseForStatement(r);
      case da._function:
        return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(r, false, !e);
      case da._class:
        return e && this.unexpected(), this.parseClass(r, true);
      case da._if:
        return this.parseIfStatement(r);
      case da._return:
        return this.parseReturnStatement(r);
      case da._switch:
        return this.parseSwitchStatement(r);
      case da._throw:
        return this.parseThrowStatement(r);
      case da._try:
        return this.parseTryStatement(r);
      case da._const:
      case da._var:
        return i2 = i2 || this.value, e && i2 !== "var" && this.unexpected(), this.parseVarStatement(r, i2);
      case da._while:
        return this.parseWhileStatement(r);
      case da._with:
        return this.parseWithStatement(r);
      case da.braceL:
        return this.parseBlock(true, r);
      case da.semi:
        return this.parseEmptyStatement(r);
      case da._export:
      case da._import:
        if (this.options.ecmaVersion > 10 && n === da._import) {
          Ea.lastIndex = this.pos;
          var a = Ea.exec(this.input), o = this.pos + a[0].length, h = this.input.charCodeAt(o);
          if (h === 40 || h === 46)
            return this.parseExpressionStatement(r, this.parseExpression());
        }
        return this.options.allowImportExportEverywhere || (t2 || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === da._import ? this.parseImport(r) : this.parseExport(r, s2);
      default:
        if (this.isAsyncFunction())
          return e && this.unexpected(), this.next(), this.parseFunctionStatement(r, true, !e);
        var l = this.value, c = this.parseExpression();
        return n === da.name && c.type === "Identifier" && this.eat(da.colon) ? this.parseLabeledStatement(r, l, c, e) : this.parseExpressionStatement(r, c);
    }
  }, Ba.parseBreakContinueStatement = function(e, t2) {
    var s2 = t2 === "break";
    this.next(), this.eat(da.semi) || this.insertSemicolon() ? e.label = null : this.type !== da.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
    for (var i2 = 0; i2 < this.labels.length; ++i2) {
      var n = this.labels[i2];
      if (e.label == null || n.name === e.label.name) {
        if (n.kind != null && (s2 || n.kind === "loop"))
          break;
        if (e.label && s2)
          break;
      }
    }
    return i2 === this.labels.length && this.raise(e.start, "Unsyntactic " + t2), this.finishNode(e, s2 ? "BreakStatement" : "ContinueStatement");
  }, Ba.parseDebuggerStatement = function(e) {
    return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
  }, Ba.parseDoStatement = function(e) {
    return this.next(), this.labels.push(Fa), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(da._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(da.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
  }, Ba.parseForStatement = function(e) {
    this.next();
    var t2 = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
    if (this.labels.push(Fa), this.enterScope(0), this.expect(da.parenL), this.type === da.semi)
      return t2 > -1 && this.unexpected(t2), this.parseFor(e, null);
    var s2 = this.isLet();
    if (this.type === da._var || this.type === da._const || s2) {
      var i2 = this.startNode(), n = s2 ? "let" : this.value;
      return this.next(), this.parseVar(i2, true, n), this.finishNode(i2, "VariableDeclaration"), (this.type === da._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && i2.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === da._in ? t2 > -1 && this.unexpected(t2) : e.await = t2 > -1), this.parseForIn(e, i2)) : (t2 > -1 && this.unexpected(t2), this.parseFor(e, i2));
    }
    var r = this.isContextual("let"), a = false, o = new Va(), h = this.parseExpression(!(t2 > -1) || "await", o);
    return this.type === da._in || (a = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (this.options.ecmaVersion >= 9 && (this.type === da._in ? t2 > -1 && this.unexpected(t2) : e.await = t2 > -1), r && a && this.raise(h.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(h, false, o), this.checkLValPattern(h), this.parseForIn(e, h)) : (this.checkExpressionErrors(o, true), t2 > -1 && this.unexpected(t2), this.parseFor(e, h));
  }, Ba.parseFunctionStatement = function(e, t2, s2) {
    return this.next(), this.parseFunction(e, ja | (s2 ? 0 : Ua), false, t2);
  }, Ba.parseIfStatement = function(e) {
    return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(da._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
  }, Ba.parseReturnStatement = function(e) {
    return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(da.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
  }, Ba.parseSwitchStatement = function(e) {
    var t2;
    this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(da.braceL), this.labels.push(za), this.enterScope(0);
    for (var s2 = false; this.type !== da.braceR; )
      if (this.type === da._case || this.type === da._default) {
        var i2 = this.type === da._case;
        t2 && this.finishNode(t2, "SwitchCase"), e.cases.push(t2 = this.startNode()), t2.consequent = [], this.next(), i2 ? t2.test = this.parseExpression() : (s2 && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s2 = true, t2.test = null), this.expect(da.colon);
      } else
        t2 || this.unexpected(), t2.consequent.push(this.parseStatement(null));
    return this.exitScope(), t2 && this.finishNode(t2, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
  }, Ba.parseThrowStatement = function(e) {
    return this.next(), pa.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
  };
  var Wa = [];
  Ba.parseTryStatement = function(e) {
    if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === da._catch) {
      var t2 = this.startNode();
      if (this.next(), this.eat(da.parenL)) {
        t2.param = this.parseBindingAtom();
        var s2 = t2.param.type === "Identifier";
        this.enterScope(s2 ? 32 : 0), this.checkLValPattern(t2.param, s2 ? 4 : 2), this.expect(da.parenR);
      } else
        this.options.ecmaVersion < 10 && this.unexpected(), t2.param = null, this.enterScope(0);
      t2.body = this.parseBlock(false), this.exitScope(), e.handler = this.finishNode(t2, "CatchClause");
    }
    return e.finalizer = this.eat(da._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
  }, Ba.parseVarStatement = function(e, t2) {
    return this.next(), this.parseVar(e, false, t2), this.semicolon(), this.finishNode(e, "VariableDeclaration");
  }, Ba.parseWhileStatement = function(e) {
    return this.next(), e.test = this.parseParenExpression(), this.labels.push(Fa), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
  }, Ba.parseWithStatement = function(e) {
    return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
  }, Ba.parseEmptyStatement = function(e) {
    return this.next(), this.finishNode(e, "EmptyStatement");
  }, Ba.parseLabeledStatement = function(e, t2, s2, i2) {
    for (var n = 0, r = this.labels; n < r.length; n += 1) {
      r[n].name === t2 && this.raise(s2.start, "Label '" + t2 + "' is already declared");
    }
    for (var a = this.type.isLoop ? "loop" : this.type === da._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
      var h = this.labels[o];
      if (h.statementStart !== e.start)
        break;
      h.statementStart = this.start, h.kind = a;
    }
    return this.labels.push({ name: t2, kind: a, statementStart: this.start }), e.body = this.parseStatement(i2 ? i2.indexOf("label") === -1 ? i2 + "label" : i2 : "label"), this.labels.pop(), e.label = s2, this.finishNode(e, "LabeledStatement");
  }, Ba.parseExpressionStatement = function(e, t2) {
    return e.expression = t2, this.semicolon(), this.finishNode(e, "ExpressionStatement");
  }, Ba.parseBlock = function(e, t2, s2) {
    for (e === void 0 && (e = true), t2 === void 0 && (t2 = this.startNode()), t2.body = [], this.expect(da.braceL), e && this.enterScope(0); this.type !== da.braceR; ) {
      var i2 = this.parseStatement(null);
      t2.body.push(i2);
    }
    return s2 && (this.strict = false), this.next(), e && this.exitScope(), this.finishNode(t2, "BlockStatement");
  }, Ba.parseFor = function(e, t2) {
    return e.init = t2, this.expect(da.semi), e.test = this.type === da.semi ? null : this.parseExpression(), this.expect(da.semi), e.update = this.type === da.parenR ? null : this.parseExpression(), this.expect(da.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
  }, Ba.parseForIn = function(e, t2) {
    var s2 = this.type === da._in;
    return this.next(), t2.type === "VariableDeclaration" && t2.declarations[0].init != null && (!s2 || this.options.ecmaVersion < 8 || this.strict || t2.kind !== "var" || t2.declarations[0].id.type !== "Identifier") && this.raise(t2.start, (s2 ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t2, e.right = s2 ? this.parseExpression() : this.parseMaybeAssign(), this.expect(da.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, s2 ? "ForInStatement" : "ForOfStatement");
  }, Ba.parseVar = function(e, t2, s2) {
    for (e.declarations = [], e.kind = s2; ; ) {
      var i2 = this.startNode();
      if (this.parseVarId(i2, s2), this.eat(da.eq) ? i2.init = this.parseMaybeAssign(t2) : s2 !== "const" || this.type === da._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? i2.id.type === "Identifier" || t2 && (this.type === da._in || this.isContextual("of")) ? i2.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(i2, "VariableDeclarator")), !this.eat(da.comma))
        break;
    }
    return e;
  }, Ba.parseVarId = function(e, t2) {
    e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t2 === "var" ? 1 : 2, false);
  };
  var ja = 1, Ua = 2;
  function Ga(e, t2) {
    var s2 = t2.key.name, i2 = e[s2], n = "true";
    return t2.type !== "MethodDefinition" || t2.kind !== "get" && t2.kind !== "set" || (n = (t2.static ? "s" : "i") + t2.kind), i2 === "iget" && n === "iset" || i2 === "iset" && n === "iget" || i2 === "sget" && n === "sset" || i2 === "sset" && n === "sget" ? (e[s2] = "true", false) : !!i2 || (e[s2] = n, false);
  }
  function Ha(e, t2) {
    var s2 = e.computed, i2 = e.key;
    return !s2 && (i2.type === "Identifier" && i2.name === t2 || i2.type === "Literal" && i2.value === t2);
  }
  Ba.parseFunction = function(e, t2, s2, i2, n) {
    this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i2) && (this.type === da.star && t2 & Ua && this.unexpected(), e.generator = this.eat(da.star)), this.options.ecmaVersion >= 8 && (e.async = !!i2), t2 & ja && (e.id = 4 & t2 && this.type !== da.name ? null : this.parseIdent(), !e.id || t2 & Ua || this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
    var r = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
    return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ra(e.async, e.generator)), t2 & ja || (e.id = this.type === da.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, s2, false, n), this.yieldPos = r, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(e, t2 & ja ? "FunctionDeclaration" : "FunctionExpression");
  }, Ba.parseFunctionParams = function(e) {
    this.expect(da.parenL), e.params = this.parseBindingList(da.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
  }, Ba.parseClass = function(e, t2) {
    this.next();
    var s2 = this.strict;
    this.strict = true, this.parseClassId(e, t2), this.parseClassSuper(e);
    var i2 = this.enterClassBody(), n = this.startNode(), r = false;
    for (n.body = [], this.expect(da.braceL); this.type !== da.braceR; ) {
      var a = this.parseClassElement(e.superClass !== null);
      a && (n.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" ? (r && this.raise(a.start, "Duplicate constructor in the same class"), r = true) : a.key && a.key.type === "PrivateIdentifier" && Ga(i2, a) && this.raiseRecoverable(a.key.start, "Identifier '#" + a.key.name + "' has already been declared"));
    }
    return this.strict = s2, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t2 ? "ClassDeclaration" : "ClassExpression");
  }, Ba.parseClassElement = function(e) {
    if (this.eat(da.semi))
      return null;
    var t2 = this.options.ecmaVersion, s2 = this.startNode(), i2 = "", n = false, r = false, a = "method", o = false;
    if (this.eatContextual("static")) {
      if (t2 >= 13 && this.eat(da.braceL))
        return this.parseClassStaticBlock(s2), s2;
      this.isClassElementNameStart() || this.type === da.star ? o = true : i2 = "static";
    }
    if (s2.static = o, !i2 && t2 >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== da.star || this.canInsertSemicolon() ? i2 = "async" : r = true), !i2 && (t2 >= 9 || !r) && this.eat(da.star) && (n = true), !i2 && !r && !n) {
      var h = this.value;
      (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a = h : i2 = h);
    }
    if (i2 ? (s2.computed = false, s2.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s2.key.name = i2, this.finishNode(s2.key, "Identifier")) : this.parseClassElementName(s2), t2 < 13 || this.type === da.parenL || a !== "method" || n || r) {
      var l = !s2.static && Ha(s2, "constructor"), c = l && e;
      l && a !== "method" && this.raise(s2.key.start, "Constructor can't have get/set modifier"), s2.kind = l ? "constructor" : a, this.parseClassMethod(s2, n, r, c);
    } else
      this.parseClassField(s2);
    return s2;
  }, Ba.isClassElementNameStart = function() {
    return this.type === da.name || this.type === da.privateId || this.type === da.num || this.type === da.string || this.type === da.bracketL || this.type.keyword;
  }, Ba.parseClassElementName = function(e) {
    this.type === da.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = false, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
  }, Ba.parseClassMethod = function(e, t2, s2, i2) {
    var n = e.key;
    e.kind === "constructor" ? (t2 && this.raise(n.start, "Constructor can't be a generator"), s2 && this.raise(n.start, "Constructor can't be an async method")) : e.static && Ha(e, "prototype") && this.raise(n.start, "Classes may not have a static property named prototype");
    var r = e.value = this.parseMethod(t2, s2, i2);
    return e.kind === "get" && r.params.length !== 0 && this.raiseRecoverable(r.start, "getter should have no params"), e.kind === "set" && r.params.length !== 1 && this.raiseRecoverable(r.start, "setter should have exactly one param"), e.kind === "set" && r.params[0].type === "RestElement" && this.raiseRecoverable(r.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
  }, Ba.parseClassField = function(e) {
    if (Ha(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Ha(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(da.eq)) {
      var t2 = this.currentThisScope(), s2 = t2.inClassFieldInit;
      t2.inClassFieldInit = true, e.value = this.parseMaybeAssign(), t2.inClassFieldInit = s2;
    } else
      e.value = null;
    return this.semicolon(), this.finishNode(e, "PropertyDefinition");
  }, Ba.parseClassStaticBlock = function(e) {
    e.body = [];
    var t2 = this.labels;
    for (this.labels = [], this.enterScope(320); this.type !== da.braceR; ) {
      var s2 = this.parseStatement(null);
      e.body.push(s2);
    }
    return this.next(), this.exitScope(), this.labels = t2, this.finishNode(e, "StaticBlock");
  }, Ba.parseClassId = function(e, t2) {
    this.type === da.name ? (e.id = this.parseIdent(), t2 && this.checkLValSimple(e.id, 2, false)) : (t2 === true && this.unexpected(), e.id = null);
  }, Ba.parseClassSuper = function(e) {
    e.superClass = this.eat(da._extends) ? this.parseExprSubscripts(false) : null;
  }, Ba.enterClassBody = function() {
    var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
    return this.privateNameStack.push(e), e.declared;
  }, Ba.exitClassBody = function() {
    for (var e = this.privateNameStack.pop(), t2 = e.declared, s2 = e.used, i2 = this.privateNameStack.length, n = i2 === 0 ? null : this.privateNameStack[i2 - 1], r = 0; r < s2.length; ++r) {
      var a = s2[r];
      Aa(t2, a.name) || (n ? n.used.push(a) : this.raiseRecoverable(a.start, "Private field '#" + a.name + "' must be declared in an enclosing class"));
    }
  }, Ba.parseExport = function(e, t2) {
    if (this.next(), this.eat(da.star))
      return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t2, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== da.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
    if (this.eat(da._default)) {
      var s2;
      if (this.checkExport(t2, "default", this.lastTokStart), this.type === da._function || (s2 = this.isAsyncFunction())) {
        var i2 = this.startNode();
        this.next(), s2 && this.next(), e.declaration = this.parseFunction(i2, 4 | ja, false, s2);
      } else if (this.type === da._class) {
        var n = this.startNode();
        e.declaration = this.parseClass(n, "nullableID");
      } else
        e.declaration = this.parseMaybeAssign(), this.semicolon();
      return this.finishNode(e, "ExportDefaultDeclaration");
    }
    if (this.shouldParseExportStatement())
      e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t2, e.declaration.declarations) : this.checkExport(t2, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
    else {
      if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t2), this.eatContextual("from"))
        this.type !== da.string && this.unexpected(), e.source = this.parseExprAtom();
      else {
        for (var r = 0, a = e.specifiers; r < a.length; r += 1) {
          var o = a[r];
          this.checkUnreserved(o.local), this.checkLocalExport(o.local), o.local.type === "Literal" && this.raise(o.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
        e.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(e, "ExportNamedDeclaration");
  }, Ba.checkExport = function(e, t2, s2) {
    e && (typeof t2 != "string" && (t2 = t2.type === "Identifier" ? t2.name : t2.value), Aa(e, t2) && this.raiseRecoverable(s2, "Duplicate export '" + t2 + "'"), e[t2] = true);
  }, Ba.checkPatternExport = function(e, t2) {
    var s2 = t2.type;
    if (s2 === "Identifier")
      this.checkExport(e, t2, t2.start);
    else if (s2 === "ObjectPattern")
      for (var i2 = 0, n = t2.properties; i2 < n.length; i2 += 1) {
        var r = n[i2];
        this.checkPatternExport(e, r);
      }
    else if (s2 === "ArrayPattern")
      for (var a = 0, o = t2.elements; a < o.length; a += 1) {
        var h = o[a];
        h && this.checkPatternExport(e, h);
      }
    else
      s2 === "Property" ? this.checkPatternExport(e, t2.value) : s2 === "AssignmentPattern" ? this.checkPatternExport(e, t2.left) : s2 === "RestElement" ? this.checkPatternExport(e, t2.argument) : s2 === "ParenthesizedExpression" && this.checkPatternExport(e, t2.expression);
  }, Ba.checkVariableExport = function(e, t2) {
    if (e)
      for (var s2 = 0, i2 = t2; s2 < i2.length; s2 += 1) {
        var n = i2[s2];
        this.checkPatternExport(e, n.id);
      }
  }, Ba.shouldParseExportStatement = function() {
    return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
  }, Ba.parseExportSpecifiers = function(e) {
    var t2 = [], s2 = true;
    for (this.expect(da.braceL); !this.eat(da.braceR); ) {
      if (s2)
        s2 = false;
      else if (this.expect(da.comma), this.afterTrailingComma(da.braceR))
        break;
      var i2 = this.startNode();
      i2.local = this.parseModuleExportName(), i2.exported = this.eatContextual("as") ? this.parseModuleExportName() : i2.local, this.checkExport(e, i2.exported, i2.exported.start), t2.push(this.finishNode(i2, "ExportSpecifier"));
    }
    return t2;
  }, Ba.parseImport = function(e) {
    return this.next(), this.type === da.string ? (e.specifiers = Wa, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === da.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
  }, Ba.parseImportSpecifiers = function() {
    var e = [], t2 = true;
    if (this.type === da.name) {
      var s2 = this.startNode();
      if (s2.local = this.parseIdent(), this.checkLValSimple(s2.local, 2), e.push(this.finishNode(s2, "ImportDefaultSpecifier")), !this.eat(da.comma))
        return e;
    }
    if (this.type === da.star) {
      var i2 = this.startNode();
      return this.next(), this.expectContextual("as"), i2.local = this.parseIdent(), this.checkLValSimple(i2.local, 2), e.push(this.finishNode(i2, "ImportNamespaceSpecifier")), e;
    }
    for (this.expect(da.braceL); !this.eat(da.braceR); ) {
      if (t2)
        t2 = false;
      else if (this.expect(da.comma), this.afterTrailingComma(da.braceR))
        break;
      var n = this.startNode();
      n.imported = this.parseModuleExportName(), this.eatContextual("as") ? n.local = this.parseIdent() : (this.checkUnreserved(n.imported), n.local = n.imported), this.checkLValSimple(n.local, 2), e.push(this.finishNode(n, "ImportSpecifier"));
    }
    return e;
  }, Ba.parseModuleExportName = function() {
    if (this.options.ecmaVersion >= 13 && this.type === da.string) {
      var e = this.parseLiteral(this.value);
      return wa.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
    }
    return this.parseIdent(true);
  }, Ba.adaptDirectivePrologue = function(e) {
    for (var t2 = 0; t2 < e.length && this.isDirectiveCandidate(e[t2]); ++t2)
      e[t2].directive = e[t2].expression.raw.slice(1, -1);
  }, Ba.isDirectiveCandidate = function(e) {
    return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
  };
  var qa = Ma.prototype;
  qa.toAssignable = function(e, t2, s2) {
    if (this.options.ecmaVersion >= 6 && e)
      switch (e.type) {
        case "Identifier":
          this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          e.type = "ObjectPattern", s2 && this.checkPatternErrors(s2, true);
          for (var i2 = 0, n = e.properties; i2 < n.length; i2 += 1) {
            var r = n[i2];
            this.toAssignable(r, t2), r.type !== "RestElement" || r.argument.type !== "ArrayPattern" && r.argument.type !== "ObjectPattern" || this.raise(r.argument.start, "Unexpected token");
          }
          break;
        case "Property":
          e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t2);
          break;
        case "ArrayExpression":
          e.type = "ArrayPattern", s2 && this.checkPatternErrors(s2, true), this.toAssignableList(e.elements, t2);
          break;
        case "SpreadElement":
          e.type = "RestElement", this.toAssignable(e.argument, t2), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
          break;
        case "AssignmentExpression":
          e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t2);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, t2, s2);
          break;
        case "ChainExpression":
          this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!t2)
            break;
        default:
          this.raise(e.start, "Assigning to rvalue");
      }
    else
      s2 && this.checkPatternErrors(s2, true);
    return e;
  }, qa.toAssignableList = function(e, t2) {
    for (var s2 = e.length, i2 = 0; i2 < s2; i2++) {
      var n = e[i2];
      n && this.toAssignable(n, t2);
    }
    if (s2) {
      var r = e[s2 - 1];
      this.options.ecmaVersion === 6 && t2 && r && r.type === "RestElement" && r.argument.type !== "Identifier" && this.unexpected(r.argument.start);
    }
    return e;
  }, qa.parseSpread = function(e) {
    var t2 = this.startNode();
    return this.next(), t2.argument = this.parseMaybeAssign(false, e), this.finishNode(t2, "SpreadElement");
  }, qa.parseRestBinding = function() {
    var e = this.startNode();
    return this.next(), this.options.ecmaVersion === 6 && this.type !== da.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
  }, qa.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6)
      switch (this.type) {
        case da.bracketL:
          var e = this.startNode();
          return this.next(), e.elements = this.parseBindingList(da.bracketR, true, true), this.finishNode(e, "ArrayPattern");
        case da.braceL:
          return this.parseObj(true);
      }
    return this.parseIdent();
  }, qa.parseBindingList = function(e, t2, s2) {
    for (var i2 = [], n = true; !this.eat(e); )
      if (n ? n = false : this.expect(da.comma), t2 && this.type === da.comma)
        i2.push(null);
      else {
        if (s2 && this.afterTrailingComma(e))
          break;
        if (this.type === da.ellipsis) {
          var r = this.parseRestBinding();
          this.parseBindingListItem(r), i2.push(r), this.type === da.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
          break;
        }
        var a = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(a), i2.push(a);
      }
    return i2;
  }, qa.parseBindingListItem = function(e) {
    return e;
  }, qa.parseMaybeDefault = function(e, t2, s2) {
    if (s2 = s2 || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(da.eq))
      return s2;
    var i2 = this.startNodeAt(e, t2);
    return i2.left = s2, i2.right = this.parseMaybeAssign(), this.finishNode(i2, "AssignmentPattern");
  }, qa.checkLValSimple = function(e, t2, s2) {
    t2 === void 0 && (t2 = 0);
    var i2 = t2 !== 0;
    switch (e.type) {
      case "Identifier":
        this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (i2 ? "Binding " : "Assigning to ") + e.name + " in strict mode"), i2 && (t2 === 2 && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), s2 && (Aa(s2, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), s2[e.name] = true), t2 !== 5 && this.declareName(e.name, t2, e.start));
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        i2 && this.raiseRecoverable(e.start, "Binding member expression");
        break;
      case "ParenthesizedExpression":
        return i2 && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t2, s2);
      default:
        this.raise(e.start, (i2 ? "Binding" : "Assigning to") + " rvalue");
    }
  }, qa.checkLValPattern = function(e, t2, s2) {
    switch (t2 === void 0 && (t2 = 0), e.type) {
      case "ObjectPattern":
        for (var i2 = 0, n = e.properties; i2 < n.length; i2 += 1) {
          var r = n[i2];
          this.checkLValInnerPattern(r, t2, s2);
        }
        break;
      case "ArrayPattern":
        for (var a = 0, o = e.elements; a < o.length; a += 1) {
          var h = o[a];
          h && this.checkLValInnerPattern(h, t2, s2);
        }
        break;
      default:
        this.checkLValSimple(e, t2, s2);
    }
  }, qa.checkLValInnerPattern = function(e, t2, s2) {
    switch (t2 === void 0 && (t2 = 0), e.type) {
      case "Property":
        this.checkLValInnerPattern(e.value, t2, s2);
        break;
      case "AssignmentPattern":
        this.checkLValPattern(e.left, t2, s2);
        break;
      case "RestElement":
        this.checkLValPattern(e.argument, t2, s2);
        break;
      default:
        this.checkLValPattern(e, t2, s2);
    }
  };
  var Ka = function(e, t2, s2, i2, n) {
    this.token = e, this.isExpr = !!t2, this.preserveSpace = !!s2, this.override = i2, this.generator = !!n;
  }, Xa = { b_stat: new Ka("{", false), b_expr: new Ka("{", true), b_tmpl: new Ka("${", false), p_stat: new Ka("(", false), p_expr: new Ka("(", true), q_tmpl: new Ka("`", true, true, function(e) {
    return e.tryReadTemplateToken();
  }), f_stat: new Ka("function", false), f_expr: new Ka("function", true), f_expr_gen: new Ka("function", true, false, null, true), f_gen: new Ka("function", false, false, null, true) }, Ya = Ma.prototype;
  Ya.initialContext = function() {
    return [Xa.b_stat];
  }, Ya.curContext = function() {
    return this.context[this.context.length - 1];
  }, Ya.braceIsBlock = function(e) {
    var t2 = this.curContext();
    return t2 === Xa.f_expr || t2 === Xa.f_stat || (e !== da.colon || t2 !== Xa.b_stat && t2 !== Xa.b_expr ? e === da._return || e === da.name && this.exprAllowed ? pa.test(this.input.slice(this.lastTokEnd, this.start)) : e === da._else || e === da.semi || e === da.eof || e === da.parenR || e === da.arrow || (e === da.braceL ? t2 === Xa.b_stat : e !== da._var && e !== da._const && e !== da.name && !this.exprAllowed) : !t2.isExpr);
  }, Ya.inGeneratorContext = function() {
    for (var e = this.context.length - 1; e >= 1; e--) {
      var t2 = this.context[e];
      if (t2.token === "function")
        return t2.generator;
    }
    return false;
  }, Ya.updateContext = function(e) {
    var t2, s2 = this.type;
    s2.keyword && e === da.dot ? this.exprAllowed = false : (t2 = s2.updateContext) ? t2.call(this, e) : this.exprAllowed = s2.beforeExpr;
  }, Ya.overrideContext = function(e) {
    this.curContext() !== e && (this.context[this.context.length - 1] = e);
  }, da.parenR.updateContext = da.braceR.updateContext = function() {
    if (this.context.length !== 1) {
      var e = this.context.pop();
      e === Xa.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
    } else
      this.exprAllowed = true;
  }, da.braceL.updateContext = function(e) {
    this.context.push(this.braceIsBlock(e) ? Xa.b_stat : Xa.b_expr), this.exprAllowed = true;
  }, da.dollarBraceL.updateContext = function() {
    this.context.push(Xa.b_tmpl), this.exprAllowed = true;
  }, da.parenL.updateContext = function(e) {
    var t2 = e === da._if || e === da._for || e === da._with || e === da._while;
    this.context.push(t2 ? Xa.p_stat : Xa.p_expr), this.exprAllowed = true;
  }, da.incDec.updateContext = function() {
  }, da._function.updateContext = da._class.updateContext = function(e) {
    !e.beforeExpr || e === da._else || e === da.semi && this.curContext() !== Xa.p_stat || e === da._return && pa.test(this.input.slice(this.lastTokEnd, this.start)) || (e === da.colon || e === da.braceL) && this.curContext() === Xa.b_stat ? this.context.push(Xa.f_stat) : this.context.push(Xa.f_expr), this.exprAllowed = false;
  }, da.backQuote.updateContext = function() {
    this.curContext() === Xa.q_tmpl ? this.context.pop() : this.context.push(Xa.q_tmpl), this.exprAllowed = false;
  }, da.star.updateContext = function(e) {
    if (e === da._function) {
      var t2 = this.context.length - 1;
      this.context[t2] === Xa.f_expr ? this.context[t2] = Xa.f_expr_gen : this.context[t2] = Xa.f_gen;
    }
    this.exprAllowed = true;
  }, da.name.updateContext = function(e) {
    var t2 = false;
    this.options.ecmaVersion >= 6 && e !== da.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t2 = true), this.exprAllowed = t2;
  };
  var Qa = Ma.prototype;
  function Za(e) {
    return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Za(e.expression);
  }
  Qa.checkPropClash = function(e, t2, s2) {
    if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement" || this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
      var i2, n = e.key;
      switch (n.type) {
        case "Identifier":
          i2 = n.name;
          break;
        case "Literal":
          i2 = String(n.value);
          break;
        default:
          return;
      }
      var r = e.kind;
      if (this.options.ecmaVersion >= 6)
        i2 === "__proto__" && r === "init" && (t2.proto && (s2 ? s2.doubleProto < 0 && (s2.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t2.proto = true);
      else {
        var a = t2[i2 = "$" + i2];
        if (a)
          (r === "init" ? this.strict && a.init || a.get || a.set : a.init || a[r]) && this.raiseRecoverable(n.start, "Redefinition of property");
        else
          a = t2[i2] = { init: false, get: false, set: false };
        a[r] = true;
      }
    }
  }, Qa.parseExpression = function(e, t2) {
    var s2 = this.start, i2 = this.startLoc, n = this.parseMaybeAssign(e, t2);
    if (this.type === da.comma) {
      var r = this.startNodeAt(s2, i2);
      for (r.expressions = [n]; this.eat(da.comma); )
        r.expressions.push(this.parseMaybeAssign(e, t2));
      return this.finishNode(r, "SequenceExpression");
    }
    return n;
  }, Qa.parseMaybeAssign = function(e, t2, s2) {
    if (this.isContextual("yield")) {
      if (this.inGenerator)
        return this.parseYield(e);
      this.exprAllowed = false;
    }
    var i2 = false, n = -1, r = -1, a = -1;
    t2 ? (n = t2.parenthesizedAssign, r = t2.trailingComma, a = t2.doubleProto, t2.parenthesizedAssign = t2.trailingComma = -1) : (t2 = new Va(), i2 = true);
    var o = this.start, h = this.startLoc;
    this.type !== da.parenL && this.type !== da.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
    var l = this.parseMaybeConditional(e, t2);
    if (s2 && (l = s2.call(this, l, o, h)), this.type.isAssign) {
      var c = this.startNodeAt(o, h);
      return c.operator = this.value, this.type === da.eq && (l = this.toAssignable(l, false, t2)), i2 || (t2.parenthesizedAssign = t2.trailingComma = t2.doubleProto = -1), t2.shorthandAssign >= l.start && (t2.shorthandAssign = -1), this.type === da.eq ? this.checkLValPattern(l) : this.checkLValSimple(l), c.left = l, this.next(), c.right = this.parseMaybeAssign(e), a > -1 && (t2.doubleProto = a), this.finishNode(c, "AssignmentExpression");
    }
    return i2 && this.checkExpressionErrors(t2, true), n > -1 && (t2.parenthesizedAssign = n), r > -1 && (t2.trailingComma = r), l;
  }, Qa.parseMaybeConditional = function(e, t2) {
    var s2 = this.start, i2 = this.startLoc, n = this.parseExprOps(e, t2);
    if (this.checkExpressionErrors(t2))
      return n;
    if (this.eat(da.question)) {
      var r = this.startNodeAt(s2, i2);
      return r.test = n, r.consequent = this.parseMaybeAssign(), this.expect(da.colon), r.alternate = this.parseMaybeAssign(e), this.finishNode(r, "ConditionalExpression");
    }
    return n;
  }, Qa.parseExprOps = function(e, t2) {
    var s2 = this.start, i2 = this.startLoc, n = this.parseMaybeUnary(t2, false, false, e);
    return this.checkExpressionErrors(t2) || n.start === s2 && n.type === "ArrowFunctionExpression" ? n : this.parseExprOp(n, s2, i2, -1, e);
  }, Qa.parseExprOp = function(e, t2, s2, i2, n) {
    var r = this.type.binop;
    if (r != null && (!n || this.type !== da._in) && r > i2) {
      var a = this.type === da.logicalOR || this.type === da.logicalAND, o = this.type === da.coalesce;
      o && (r = da.logicalAND.binop);
      var h = this.value;
      this.next();
      var l = this.start, c = this.startLoc, u = this.parseExprOp(this.parseMaybeUnary(null, false, false, n), l, c, r, n), d = this.buildBinary(t2, s2, e, u, h, a || o);
      return (a && this.type === da.coalesce || o && (this.type === da.logicalOR || this.type === da.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(d, t2, s2, i2, n);
    }
    return e;
  }, Qa.buildBinary = function(e, t2, s2, i2, n, r) {
    i2.type === "PrivateIdentifier" && this.raise(i2.start, "Private identifier can only be left side of binary expression");
    var a = this.startNodeAt(e, t2);
    return a.left = s2, a.operator = n, a.right = i2, this.finishNode(a, r ? "LogicalExpression" : "BinaryExpression");
  }, Qa.parseMaybeUnary = function(e, t2, s2, i2) {
    var n, r = this.start, a = this.startLoc;
    if (this.isContextual("await") && this.canAwait)
      n = this.parseAwait(i2), t2 = true;
    else if (this.type.prefix) {
      var o = this.startNode(), h = this.type === da.incDec;
      o.operator = this.value, o.prefix = true, this.next(), o.argument = this.parseMaybeUnary(null, true, h, i2), this.checkExpressionErrors(e, true), h ? this.checkLValSimple(o.argument) : this.strict && o.operator === "delete" && o.argument.type === "Identifier" ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : o.operator === "delete" && Za(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : t2 = true, n = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression");
    } else if (t2 || this.type !== da.privateId) {
      if (n = this.parseExprSubscripts(e, i2), this.checkExpressionErrors(e))
        return n;
      for (; this.type.postfix && !this.canInsertSemicolon(); ) {
        var l = this.startNodeAt(r, a);
        l.operator = this.value, l.prefix = false, l.argument = n, this.checkLValSimple(n), this.next(), n = this.finishNode(l, "UpdateExpression");
      }
    } else
      (i2 || this.privateNameStack.length === 0) && this.unexpected(), n = this.parsePrivateIdent(), this.type !== da._in && this.unexpected();
    return s2 || !this.eat(da.starstar) ? n : t2 ? void this.unexpected(this.lastTokStart) : this.buildBinary(r, a, n, this.parseMaybeUnary(null, false, false, i2), "**", false);
  }, Qa.parseExprSubscripts = function(e, t2) {
    var s2 = this.start, i2 = this.startLoc, n = this.parseExprAtom(e, t2);
    if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
      return n;
    var r = this.parseSubscripts(n, s2, i2, false, t2);
    return e && r.type === "MemberExpression" && (e.parenthesizedAssign >= r.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= r.start && (e.parenthesizedBind = -1), e.trailingComma >= r.start && (e.trailingComma = -1)), r;
  }, Qa.parseSubscripts = function(e, t2, s2, i2, n) {
    for (var r = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start == 5 && this.potentialArrowAt === e.start, a = false; ; ) {
      var o = this.parseSubscript(e, t2, s2, i2, r, a, n);
      if (o.optional && (a = true), o === e || o.type === "ArrowFunctionExpression") {
        if (a) {
          var h = this.startNodeAt(t2, s2);
          h.expression = o, o = this.finishNode(h, "ChainExpression");
        }
        return o;
      }
      e = o;
    }
  }, Qa.parseSubscript = function(e, t2, s2, i2, n, r, a) {
    var o = this.options.ecmaVersion >= 11, h = o && this.eat(da.questionDot);
    i2 && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
    var l = this.eat(da.bracketL);
    if (l || h && this.type !== da.parenL && this.type !== da.backQuote || this.eat(da.dot)) {
      var c = this.startNodeAt(t2, s2);
      c.object = e, l ? (c.property = this.parseExpression(), this.expect(da.bracketR)) : this.type === da.privateId && e.type !== "Super" ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent(this.options.allowReserved !== "never"), c.computed = !!l, o && (c.optional = h), e = this.finishNode(c, "MemberExpression");
    } else if (!i2 && this.eat(da.parenL)) {
      var u = new Va(), d = this.yieldPos, p = this.awaitPos, f = this.awaitIdentPos;
      this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
      var m = this.parseExprList(da.parenR, this.options.ecmaVersion >= 8, false, u);
      if (n && !h && !this.canInsertSemicolon() && this.eat(da.arrow))
        return this.checkPatternErrors(u, false), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = d, this.awaitPos = p, this.awaitIdentPos = f, this.parseArrowExpression(this.startNodeAt(t2, s2), m, true, a);
      this.checkExpressionErrors(u, true), this.yieldPos = d || this.yieldPos, this.awaitPos = p || this.awaitPos, this.awaitIdentPos = f || this.awaitIdentPos;
      var g = this.startNodeAt(t2, s2);
      g.callee = e, g.arguments = m, o && (g.optional = h), e = this.finishNode(g, "CallExpression");
    } else if (this.type === da.backQuote) {
      (h || r) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      var y = this.startNodeAt(t2, s2);
      y.tag = e, y.quasi = this.parseTemplate({ isTagged: true }), e = this.finishNode(y, "TaggedTemplateExpression");
    }
    return e;
  }, Qa.parseExprAtom = function(e, t2) {
    this.type === da.slash && this.readRegexp();
    var s2, i2 = this.potentialArrowAt === this.start;
    switch (this.type) {
      case da._super:
        return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s2 = this.startNode(), this.next(), this.type !== da.parenL || this.allowDirectSuper || this.raise(s2.start, "super() call outside constructor of a subclass"), this.type !== da.dot && this.type !== da.bracketL && this.type !== da.parenL && this.unexpected(), this.finishNode(s2, "Super");
      case da._this:
        return s2 = this.startNode(), this.next(), this.finishNode(s2, "ThisExpression");
      case da.name:
        var n = this.start, r = this.startLoc, a = this.containsEsc, o = this.parseIdent(false);
        if (this.options.ecmaVersion >= 8 && !a && o.name === "async" && !this.canInsertSemicolon() && this.eat(da._function))
          return this.overrideContext(Xa.f_expr), this.parseFunction(this.startNodeAt(n, r), 0, false, true, t2);
        if (i2 && !this.canInsertSemicolon()) {
          if (this.eat(da.arrow))
            return this.parseArrowExpression(this.startNodeAt(n, r), [o], false, t2);
          if (this.options.ecmaVersion >= 8 && o.name === "async" && this.type === da.name && !a && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
            return o = this.parseIdent(false), !this.canInsertSemicolon() && this.eat(da.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, r), [o], true, t2);
        }
        return o;
      case da.regexp:
        var h = this.value;
        return (s2 = this.parseLiteral(h.value)).regex = { pattern: h.pattern, flags: h.flags }, s2;
      case da.num:
      case da.string:
        return this.parseLiteral(this.value);
      case da._null:
      case da._true:
      case da._false:
        return (s2 = this.startNode()).value = this.type === da._null ? null : this.type === da._true, s2.raw = this.type.keyword, this.next(), this.finishNode(s2, "Literal");
      case da.parenL:
        var l = this.start, c = this.parseParenAndDistinguishExpression(i2, t2);
        return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c) && (e.parenthesizedAssign = l), e.parenthesizedBind < 0 && (e.parenthesizedBind = l)), c;
      case da.bracketL:
        return s2 = this.startNode(), this.next(), s2.elements = this.parseExprList(da.bracketR, true, true, e), this.finishNode(s2, "ArrayExpression");
      case da.braceL:
        return this.overrideContext(Xa.b_expr), this.parseObj(false, e);
      case da._function:
        return s2 = this.startNode(), this.next(), this.parseFunction(s2, 0);
      case da._class:
        return this.parseClass(this.startNode(), false);
      case da._new:
        return this.parseNew();
      case da.backQuote:
        return this.parseTemplate();
      case da._import:
        return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
      default:
        this.unexpected();
    }
  }, Qa.parseExprImport = function() {
    var e = this.startNode();
    this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
    var t2 = this.parseIdent(true);
    switch (this.type) {
      case da.parenL:
        return this.parseDynamicImport(e);
      case da.dot:
        return e.meta = t2, this.parseImportMeta(e);
      default:
        this.unexpected();
    }
  }, Qa.parseDynamicImport = function(e) {
    if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(da.parenR)) {
      var t2 = this.start;
      this.eat(da.comma) && this.eat(da.parenR) ? this.raiseRecoverable(t2, "Trailing comma is not allowed in import()") : this.unexpected(t2);
    }
    return this.finishNode(e, "ImportExpression");
  }, Qa.parseImportMeta = function(e) {
    this.next();
    var t2 = this.containsEsc;
    return e.property = this.parseIdent(true), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t2 && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType === "module" || this.options.allowImportExportEverywhere || this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
  }, Qa.parseLiteral = function(e) {
    var t2 = this.startNode();
    return t2.value = e, t2.raw = this.input.slice(this.start, this.end), t2.raw.charCodeAt(t2.raw.length - 1) === 110 && (t2.bigint = t2.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t2, "Literal");
  }, Qa.parseParenExpression = function() {
    this.expect(da.parenL);
    var e = this.parseExpression();
    return this.expect(da.parenR), e;
  }, Qa.parseParenAndDistinguishExpression = function(e, t2) {
    var s2, i2 = this.start, n = this.startLoc, r = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();
      var a, o = this.start, h = this.startLoc, l = [], c = true, u = false, d = new Va(), p = this.yieldPos, f = this.awaitPos;
      for (this.yieldPos = 0, this.awaitPos = 0; this.type !== da.parenR; ) {
        if (c ? c = false : this.expect(da.comma), r && this.afterTrailingComma(da.parenR, true)) {
          u = true;
          break;
        }
        if (this.type === da.ellipsis) {
          a = this.start, l.push(this.parseParenItem(this.parseRestBinding())), this.type === da.comma && this.raise(this.start, "Comma is not permitted after the rest element");
          break;
        }
        l.push(this.parseMaybeAssign(false, d, this.parseParenItem));
      }
      var m = this.lastTokEnd, g = this.lastTokEndLoc;
      if (this.expect(da.parenR), e && !this.canInsertSemicolon() && this.eat(da.arrow))
        return this.checkPatternErrors(d, false), this.checkYieldAwaitInDefaultParams(), this.yieldPos = p, this.awaitPos = f, this.parseParenArrowList(i2, n, l, t2);
      l.length && !u || this.unexpected(this.lastTokStart), a && this.unexpected(a), this.checkExpressionErrors(d, true), this.yieldPos = p || this.yieldPos, this.awaitPos = f || this.awaitPos, l.length > 1 ? ((s2 = this.startNodeAt(o, h)).expressions = l, this.finishNodeAt(s2, "SequenceExpression", m, g)) : s2 = l[0];
    } else
      s2 = this.parseParenExpression();
    if (this.options.preserveParens) {
      var y = this.startNodeAt(i2, n);
      return y.expression = s2, this.finishNode(y, "ParenthesizedExpression");
    }
    return s2;
  }, Qa.parseParenItem = function(e) {
    return e;
  }, Qa.parseParenArrowList = function(e, t2, s2, i2) {
    return this.parseArrowExpression(this.startNodeAt(e, t2), s2, false, i2);
  };
  var Ja = [];
  Qa.parseNew = function() {
    this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
    var e = this.startNode(), t2 = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(da.dot)) {
      e.meta = t2;
      var s2 = this.containsEsc;
      return e.property = this.parseIdent(true), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), s2 && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
    }
    var i2 = this.start, n = this.startLoc, r = this.type === da._import;
    return e.callee = this.parseSubscripts(this.parseExprAtom(), i2, n, true, false), r && e.callee.type === "ImportExpression" && this.raise(i2, "Cannot use new with import()"), this.eat(da.parenL) ? e.arguments = this.parseExprList(da.parenR, this.options.ecmaVersion >= 8, false) : e.arguments = Ja, this.finishNode(e, "NewExpression");
  }, Qa.parseTemplateElement = function(e) {
    var t2 = e.isTagged, s2 = this.startNode();
    return this.type === da.invalidTemplate ? (t2 || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s2.value = { raw: this.value, cooked: null }) : s2.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"), cooked: this.value }, this.next(), s2.tail = this.type === da.backQuote, this.finishNode(s2, "TemplateElement");
  }, Qa.parseTemplate = function(e) {
    e === void 0 && (e = {});
    var t2 = e.isTagged;
    t2 === void 0 && (t2 = false);
    var s2 = this.startNode();
    this.next(), s2.expressions = [];
    var i2 = this.parseTemplateElement({ isTagged: t2 });
    for (s2.quasis = [i2]; !i2.tail; )
      this.type === da.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(da.dollarBraceL), s2.expressions.push(this.parseExpression()), this.expect(da.braceR), s2.quasis.push(i2 = this.parseTemplateElement({ isTagged: t2 }));
    return this.next(), this.finishNode(s2, "TemplateLiteral");
  }, Qa.isAsyncProp = function(e) {
    return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === da.name || this.type === da.num || this.type === da.string || this.type === da.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === da.star) && !pa.test(this.input.slice(this.lastTokEnd, this.start));
  }, Qa.parseObj = function(e, t2) {
    var s2 = this.startNode(), i2 = true, n = {};
    for (s2.properties = [], this.next(); !this.eat(da.braceR); ) {
      if (i2)
        i2 = false;
      else if (this.expect(da.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(da.braceR))
        break;
      var r = this.parseProperty(e, t2);
      e || this.checkPropClash(r, n, t2), s2.properties.push(r);
    }
    return this.finishNode(s2, e ? "ObjectPattern" : "ObjectExpression");
  }, Qa.parseProperty = function(e, t2) {
    var s2, i2, n, r, a = this.startNode();
    if (this.options.ecmaVersion >= 9 && this.eat(da.ellipsis))
      return e ? (a.argument = this.parseIdent(false), this.type === da.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === da.parenL && t2 && (t2.parenthesizedAssign < 0 && (t2.parenthesizedAssign = this.start), t2.parenthesizedBind < 0 && (t2.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(false, t2), this.type === da.comma && t2 && t2.trailingComma < 0 && (t2.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
    this.options.ecmaVersion >= 6 && (a.method = false, a.shorthand = false, (e || t2) && (n = this.start, r = this.startLoc), e || (s2 = this.eat(da.star)));
    var o = this.containsEsc;
    return this.parsePropertyName(a), !e && !o && this.options.ecmaVersion >= 8 && !s2 && this.isAsyncProp(a) ? (i2 = true, s2 = this.options.ecmaVersion >= 9 && this.eat(da.star), this.parsePropertyName(a, t2)) : i2 = false, this.parsePropertyValue(a, e, s2, i2, n, r, t2, o), this.finishNode(a, "Property");
  }, Qa.parsePropertyValue = function(e, t2, s2, i2, n, r, a, o) {
    if ((s2 || i2) && this.type === da.colon && this.unexpected(), this.eat(da.colon))
      e.value = t2 ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, a), e.kind = "init";
    else if (this.options.ecmaVersion >= 6 && this.type === da.parenL)
      t2 && this.unexpected(), e.kind = "init", e.method = true, e.value = this.parseMethod(s2, i2);
    else if (t2 || o || !(this.options.ecmaVersion >= 5) || e.computed || e.key.type !== "Identifier" || e.key.name !== "get" && e.key.name !== "set" || this.type === da.comma || this.type === da.braceR || this.type === da.eq)
      this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((s2 || i2) && this.unexpected(), this.checkUnreserved(e.key), e.key.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = n), e.kind = "init", t2 ? e.value = this.parseMaybeDefault(n, r, this.copyNode(e.key)) : this.type === da.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, r, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = true) : this.unexpected();
    else {
      (s2 || i2) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(false);
      var h = e.kind === "get" ? 0 : 1;
      if (e.value.params.length !== h) {
        var l = e.value.start;
        e.kind === "get" ? this.raiseRecoverable(l, "getter should have no params") : this.raiseRecoverable(l, "setter should have exactly one param");
      } else
        e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
    }
  }, Qa.parsePropertyName = function(e) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(da.bracketL))
        return e.computed = true, e.key = this.parseMaybeAssign(), this.expect(da.bracketR), e.key;
      e.computed = false;
    }
    return e.key = this.type === da.num || this.type === da.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
  }, Qa.initFunction = function(e) {
    e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = false), this.options.ecmaVersion >= 8 && (e.async = false);
  }, Qa.parseMethod = function(e, t2, s2) {
    var i2 = this.startNode(), n = this.yieldPos, r = this.awaitPos, a = this.awaitIdentPos;
    return this.initFunction(i2), this.options.ecmaVersion >= 6 && (i2.generator = e), this.options.ecmaVersion >= 8 && (i2.async = !!t2), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Ra(t2, i2.generator) | (s2 ? 128 : 0)), this.expect(da.parenL), i2.params = this.parseBindingList(da.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i2, false, true, false), this.yieldPos = n, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(i2, "FunctionExpression");
  }, Qa.parseArrowExpression = function(e, t2, s2, i2) {
    var n = this.yieldPos, r = this.awaitPos, a = this.awaitIdentPos;
    return this.enterScope(16 | Ra(s2, false)), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!s2), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t2, true), this.parseFunctionBody(e, true, false, i2), this.yieldPos = n, this.awaitPos = r, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
  }, Qa.parseFunctionBody = function(e, t2, s2, i2) {
    var n = t2 && this.type !== da.braceL, r = this.strict, a = false;
    if (n)
      e.body = this.parseMaybeAssign(i2), e.expression = true, this.checkParams(e, false);
    else {
      var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
      r && !o || (a = this.strictDirective(this.end)) && o && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      var h = this.labels;
      this.labels = [], a && (this.strict = true), this.checkParams(e, !r && !a && !t2 && !s2 && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, 5), e.body = this.parseBlock(false, void 0, a && !r), e.expression = false, this.adaptDirectivePrologue(e.body.body), this.labels = h;
    }
    this.exitScope();
  }, Qa.isSimpleParamList = function(e) {
    for (var t2 = 0, s2 = e; t2 < s2.length; t2 += 1) {
      if (s2[t2].type !== "Identifier")
        return false;
    }
    return true;
  }, Qa.checkParams = function(e, t2) {
    for (var s2 = /* @__PURE__ */ Object.create(null), i2 = 0, n = e.params; i2 < n.length; i2 += 1) {
      var r = n[i2];
      this.checkLValInnerPattern(r, 1, t2 ? null : s2);
    }
  }, Qa.parseExprList = function(e, t2, s2, i2) {
    for (var n = [], r = true; !this.eat(e); ) {
      if (r)
        r = false;
      else if (this.expect(da.comma), t2 && this.afterTrailingComma(e))
        break;
      var a = void 0;
      s2 && this.type === da.comma ? a = null : this.type === da.ellipsis ? (a = this.parseSpread(i2), i2 && this.type === da.comma && i2.trailingComma < 0 && (i2.trailingComma = this.start)) : a = this.parseMaybeAssign(false, i2), n.push(a);
    }
    return n;
  }, Qa.checkUnreserved = function(e) {
    var t2 = e.start, s2 = e.end, i2 = e.name;
    (this.inGenerator && i2 === "yield" && this.raiseRecoverable(t2, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && i2 === "await" && this.raiseRecoverable(t2, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && i2 === "arguments" && this.raiseRecoverable(t2, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || i2 !== "arguments" && i2 !== "await" || this.raise(t2, "Cannot use " + i2 + " in class static initialization block"), this.keywords.test(i2) && this.raise(t2, "Unexpected keyword '" + i2 + "'"), this.options.ecmaVersion < 6 && this.input.slice(t2, s2).indexOf("\\") !== -1) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(i2) && (this.inAsync || i2 !== "await" || this.raiseRecoverable(t2, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t2, "The keyword '" + i2 + "' is reserved"));
  }, Qa.parseIdent = function(e, t2) {
    var s2 = this.startNode();
    return this.type === da.name ? s2.name = this.value : this.type.keyword ? (s2.name = this.type.keyword, s2.name !== "class" && s2.name !== "function" || this.lastTokEnd === this.lastTokStart + 1 && this.input.charCodeAt(this.lastTokStart) === 46 || this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(s2, "Identifier"), e || (this.checkUnreserved(s2), s2.name !== "await" || this.awaitIdentPos || (this.awaitIdentPos = s2.start)), s2;
  }, Qa.parsePrivateIdent = function() {
    var e = this.startNode();
    return this.type === da.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e), e;
  }, Qa.parseYield = function(e) {
    this.yieldPos || (this.yieldPos = this.start);
    var t2 = this.startNode();
    return this.next(), this.type === da.semi || this.canInsertSemicolon() || this.type !== da.star && !this.type.startsExpr ? (t2.delegate = false, t2.argument = null) : (t2.delegate = this.eat(da.star), t2.argument = this.parseMaybeAssign(e)), this.finishNode(t2, "YieldExpression");
  }, Qa.parseAwait = function(e) {
    this.awaitPos || (this.awaitPos = this.start);
    var t2 = this.startNode();
    return this.next(), t2.argument = this.parseMaybeUnary(null, true, false, e), this.finishNode(t2, "AwaitExpression");
  };
  var eo = Ma.prototype;
  eo.raise = function(e, t2) {
    var s2 = Na(this.input, e);
    t2 += " (" + s2.line + ":" + s2.column + ")";
    var i2 = new SyntaxError(t2);
    throw i2.pos = e, i2.loc = s2, i2.raisedAt = this.pos, i2;
  }, eo.raiseRecoverable = eo.raise, eo.curPosition = function() {
    if (this.options.locations)
      return new Ca(this.curLine, this.pos - this.lineStart);
  };
  var to = Ma.prototype, so = function(e) {
    this.flags = e, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = false;
  };
  to.enterScope = function(e) {
    this.scopeStack.push(new so(e));
  }, to.exitScope = function() {
    this.scopeStack.pop();
  }, to.treatFunctionsAsVarInScope = function(e) {
    return 2 & e.flags || !this.inModule && 1 & e.flags;
  }, to.declareName = function(e, t2, s2) {
    var i2 = false;
    if (t2 === 2) {
      var n = this.currentScope();
      i2 = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && 1 & n.flags && delete this.undefinedExports[e];
    } else if (t2 === 4) {
      this.currentScope().lexical.push(e);
    } else if (t2 === 3) {
      var r = this.currentScope();
      i2 = this.treatFunctionsAsVar ? r.lexical.indexOf(e) > -1 : r.lexical.indexOf(e) > -1 || r.var.indexOf(e) > -1, r.functions.push(e);
    } else
      for (var a = this.scopeStack.length - 1; a >= 0; --a) {
        var o = this.scopeStack[a];
        if (o.lexical.indexOf(e) > -1 && !(32 & o.flags && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
          i2 = true;
          break;
        }
        if (o.var.push(e), this.inModule && 1 & o.flags && delete this.undefinedExports[e], 259 & o.flags)
          break;
      }
    i2 && this.raiseRecoverable(s2, "Identifier '" + e + "' has already been declared");
  }, to.checkLocalExport = function(e) {
    this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
  }, to.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1];
  }, to.currentVarScope = function() {
    for (var e = this.scopeStack.length - 1; ; e--) {
      var t2 = this.scopeStack[e];
      if (259 & t2.flags)
        return t2;
    }
  }, to.currentThisScope = function() {
    for (var e = this.scopeStack.length - 1; ; e--) {
      var t2 = this.scopeStack[e];
      if (259 & t2.flags && !(16 & t2.flags))
        return t2;
    }
  };
  var io = function(e, t2, s2) {
    this.type = "", this.start = t2, this.end = 0, e.options.locations && (this.loc = new Ia(e, s2)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t2, 0]);
  }, no = Ma.prototype;
  function ro(e, t2, s2, i2) {
    return e.type = t2, e.end = s2, this.options.locations && (e.loc.end = i2), this.options.ranges && (e.range[1] = s2), e;
  }
  no.startNode = function() {
    return new io(this, this.start, this.startLoc);
  }, no.startNodeAt = function(e, t2) {
    return new io(this, e, t2);
  }, no.finishNode = function(e, t2) {
    return ro.call(this, e, t2, this.lastTokEnd, this.lastTokEndLoc);
  }, no.finishNodeAt = function(e, t2, s2, i2) {
    return ro.call(this, e, t2, s2, i2);
  }, no.copyNode = function(e) {
    var t2 = new io(this, e.start, this.startLoc);
    for (var s2 in e)
      t2[s2] = e[s2];
    return t2;
  };
  var ao = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", oo = ao + " Extended_Pictographic", ho = oo + " EBase EComp EMod EPres ExtPict", lo = { 9: ao, 10: oo, 11: oo, 12: ho, 13: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict" }, co = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", uo = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", po = uo + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", fo = po + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", mo = fo + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", go = { 9: uo, 10: po, 11: fo, 12: mo, 13: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith" }, yo = {};
  function Eo(e) {
    var t2 = yo[e] = { binary: Pa(lo[e] + " " + co), nonBinary: { General_Category: Pa(co), Script: Pa(go[e]) } };
    t2.nonBinary.Script_Extensions = t2.nonBinary.Script, t2.nonBinary.gc = t2.nonBinary.General_Category, t2.nonBinary.sc = t2.nonBinary.Script, t2.nonBinary.scx = t2.nonBinary.Script_Extensions;
  }
  for (var xo = 0, bo = [9, 10, 11, 12, 13]; xo < bo.length; xo += 1) {
    Eo(bo[xo]);
  }
  var vo = Ma.prototype, Ao = function(e) {
    this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : ""), this.unicodeProperties = yo[e.options.ecmaVersion >= 13 ? 13 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = false, this.switchN = false, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = false, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
  };
  function So(e) {
    return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
  }
  function Po(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
  }
  function ko(e) {
    return Po(e) || e === 95;
  }
  function wo(e) {
    return ko(e) || Co(e);
  }
  function Co(e) {
    return e >= 48 && e <= 57;
  }
  function Io(e) {
    return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
  }
  function No(e) {
    return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48;
  }
  function _o(e) {
    return e >= 48 && e <= 55;
  }
  Ao.prototype.reset = function(e, t2, s2) {
    var i2 = s2.indexOf("u") !== -1;
    this.start = 0 | e, this.source = t2 + "", this.flags = s2, this.switchU = i2 && this.parser.options.ecmaVersion >= 6, this.switchN = i2 && this.parser.options.ecmaVersion >= 9;
  }, Ao.prototype.raise = function(e) {
    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
  }, Ao.prototype.at = function(e, t2) {
    t2 === void 0 && (t2 = false);
    var s2 = this.source, i2 = s2.length;
    if (e >= i2)
      return -1;
    var n = s2.charCodeAt(e);
    if (!t2 && !this.switchU || n <= 55295 || n >= 57344 || e + 1 >= i2)
      return n;
    var r = s2.charCodeAt(e + 1);
    return r >= 56320 && r <= 57343 ? (n << 10) + r - 56613888 : n;
  }, Ao.prototype.nextIndex = function(e, t2) {
    t2 === void 0 && (t2 = false);
    var s2 = this.source, i2 = s2.length;
    if (e >= i2)
      return i2;
    var n, r = s2.charCodeAt(e);
    return !t2 && !this.switchU || r <= 55295 || r >= 57344 || e + 1 >= i2 || (n = s2.charCodeAt(e + 1)) < 56320 || n > 57343 ? e + 1 : e + 2;
  }, Ao.prototype.current = function(e) {
    return e === void 0 && (e = false), this.at(this.pos, e);
  }, Ao.prototype.lookahead = function(e) {
    return e === void 0 && (e = false), this.at(this.nextIndex(this.pos, e), e);
  }, Ao.prototype.advance = function(e) {
    e === void 0 && (e = false), this.pos = this.nextIndex(this.pos, e);
  }, Ao.prototype.eat = function(e, t2) {
    return t2 === void 0 && (t2 = false), this.current(t2) === e && (this.advance(t2), true);
  }, vo.validateRegExpFlags = function(e) {
    for (var t2 = e.validFlags, s2 = e.flags, i2 = 0; i2 < s2.length; i2++) {
      var n = s2.charAt(i2);
      t2.indexOf(n) === -1 && this.raise(e.start, "Invalid regular expression flag"), s2.indexOf(n, i2 + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
    }
  }, vo.validateRegExpPattern = function(e) {
    this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = true, this.regexp_pattern(e));
  }, vo.regexp_pattern = function(e) {
    e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = false, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
    for (var t2 = 0, s2 = e.backReferenceNames; t2 < s2.length; t2 += 1) {
      var i2 = s2[t2];
      e.groupNames.indexOf(i2) === -1 && e.raise("Invalid named capture referenced");
    }
  }, vo.regexp_disjunction = function(e) {
    for (this.regexp_alternative(e); e.eat(124); )
      this.regexp_alternative(e);
    this.regexp_eatQuantifier(e, true) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
  }, vo.regexp_alternative = function(e) {
    for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
      ;
  }, vo.regexp_eatTerm = function(e) {
    return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), true) : !!(e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), true);
  }, vo.regexp_eatAssertion = function(e) {
    var t2 = e.pos;
    if (e.lastAssertionIsQuantifiable = false, e.eat(94) || e.eat(36))
      return true;
    if (e.eat(92)) {
      if (e.eat(66) || e.eat(98))
        return true;
      e.pos = t2;
    }
    if (e.eat(40) && e.eat(63)) {
      var s2 = false;
      if (this.options.ecmaVersion >= 9 && (s2 = e.eat(60)), e.eat(61) || e.eat(33))
        return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !s2, true;
    }
    return e.pos = t2, false;
  }, vo.regexp_eatQuantifier = function(e, t2) {
    return t2 === void 0 && (t2 = false), !!this.regexp_eatQuantifierPrefix(e, t2) && (e.eat(63), true);
  }, vo.regexp_eatQuantifierPrefix = function(e, t2) {
    return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t2);
  }, vo.regexp_eatBracedQuantifier = function(e, t2) {
    var s2 = e.pos;
    if (e.eat(123)) {
      var i2 = 0, n = -1;
      if (this.regexp_eatDecimalDigits(e) && (i2 = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(125)))
        return n !== -1 && n < i2 && !t2 && e.raise("numbers out of order in {} quantifier"), true;
      e.switchU && !t2 && e.raise("Incomplete quantifier"), e.pos = s2;
    }
    return false;
  }, vo.regexp_eatAtom = function(e) {
    return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
  }, vo.regexp_eatReverseSolidusAtomEscape = function(e) {
    var t2 = e.pos;
    if (e.eat(92)) {
      if (this.regexp_eatAtomEscape(e))
        return true;
      e.pos = t2;
    }
    return false;
  }, vo.regexp_eatUncapturingGroup = function(e) {
    var t2 = e.pos;
    if (e.eat(40)) {
      if (e.eat(63) && e.eat(58)) {
        if (this.regexp_disjunction(e), e.eat(41))
          return true;
        e.raise("Unterminated group");
      }
      e.pos = t2;
    }
    return false;
  }, vo.regexp_eatCapturingGroup = function(e) {
    if (e.eat(40)) {
      if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41))
        return e.numCapturingParens += 1, true;
      e.raise("Unterminated group");
    }
    return false;
  }, vo.regexp_eatExtendedAtom = function(e) {
    return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
  }, vo.regexp_eatInvalidBracedQuantifier = function(e) {
    return this.regexp_eatBracedQuantifier(e, true) && e.raise("Nothing to repeat"), false;
  }, vo.regexp_eatSyntaxCharacter = function(e) {
    var t2 = e.current();
    return !!So(t2) && (e.lastIntValue = t2, e.advance(), true);
  }, vo.regexp_eatPatternCharacters = function(e) {
    for (var t2 = e.pos, s2 = 0; (s2 = e.current()) !== -1 && !So(s2); )
      e.advance();
    return e.pos !== t2;
  }, vo.regexp_eatExtendedPatternCharacter = function(e) {
    var t2 = e.current();
    return !(t2 === -1 || t2 === 36 || t2 >= 40 && t2 <= 43 || t2 === 46 || t2 === 63 || t2 === 91 || t2 === 94 || t2 === 124) && (e.advance(), true);
  }, vo.regexp_groupSpecifier = function(e) {
    if (e.eat(63)) {
      if (this.regexp_eatGroupName(e))
        return e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), void e.groupNames.push(e.lastStringValue);
      e.raise("Invalid group");
    }
  }, vo.regexp_eatGroupName = function(e) {
    if (e.lastStringValue = "", e.eat(60)) {
      if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62))
        return true;
      e.raise("Invalid capture group name");
    }
    return false;
  }, vo.regexp_eatRegExpIdentifierName = function(e) {
    if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
      for (e.lastStringValue += ka(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
        e.lastStringValue += ka(e.lastIntValue);
      return true;
    }
    return false;
  }, vo.regexp_eatRegExpIdentifierStart = function(e) {
    var t2 = e.pos, s2 = this.options.ecmaVersion >= 11, i2 = e.current(s2);
    return e.advance(s2), i2 === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s2) && (i2 = e.lastIntValue), function(e2) {
      return na(e2, true) || e2 === 36 || e2 === 95;
    }(i2) ? (e.lastIntValue = i2, true) : (e.pos = t2, false);
  }, vo.regexp_eatRegExpIdentifierPart = function(e) {
    var t2 = e.pos, s2 = this.options.ecmaVersion >= 11, i2 = e.current(s2);
    return e.advance(s2), i2 === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, s2) && (i2 = e.lastIntValue), function(e2) {
      return ra(e2, true) || e2 === 36 || e2 === 95 || e2 === 8204 || e2 === 8205;
    }(i2) ? (e.lastIntValue = i2, true) : (e.pos = t2, false);
  }, vo.regexp_eatAtomEscape = function(e) {
    return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), false);
  }, vo.regexp_eatBackReference = function(e) {
    var t2 = e.pos;
    if (this.regexp_eatDecimalEscape(e)) {
      var s2 = e.lastIntValue;
      if (e.switchU)
        return s2 > e.maxBackReference && (e.maxBackReference = s2), true;
      if (s2 <= e.numCapturingParens)
        return true;
      e.pos = t2;
    }
    return false;
  }, vo.regexp_eatKGroupName = function(e) {
    if (e.eat(107)) {
      if (this.regexp_eatGroupName(e))
        return e.backReferenceNames.push(e.lastStringValue), true;
      e.raise("Invalid named reference");
    }
    return false;
  }, vo.regexp_eatCharacterEscape = function(e) {
    return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
  }, vo.regexp_eatCControlLetter = function(e) {
    var t2 = e.pos;
    if (e.eat(99)) {
      if (this.regexp_eatControlLetter(e))
        return true;
      e.pos = t2;
    }
    return false;
  }, vo.regexp_eatZero = function(e) {
    return e.current() === 48 && !Co(e.lookahead()) && (e.lastIntValue = 0, e.advance(), true);
  }, vo.regexp_eatControlEscape = function(e) {
    var t2 = e.current();
    return t2 === 116 ? (e.lastIntValue = 9, e.advance(), true) : t2 === 110 ? (e.lastIntValue = 10, e.advance(), true) : t2 === 118 ? (e.lastIntValue = 11, e.advance(), true) : t2 === 102 ? (e.lastIntValue = 12, e.advance(), true) : t2 === 114 && (e.lastIntValue = 13, e.advance(), true);
  }, vo.regexp_eatControlLetter = function(e) {
    var t2 = e.current();
    return !!Po(t2) && (e.lastIntValue = t2 % 32, e.advance(), true);
  }, vo.regexp_eatRegExpUnicodeEscapeSequence = function(e, t2) {
    t2 === void 0 && (t2 = false);
    var s2, i2 = e.pos, n = t2 || e.switchU;
    if (e.eat(117)) {
      if (this.regexp_eatFixedHexDigits(e, 4)) {
        var r = e.lastIntValue;
        if (n && r >= 55296 && r <= 56319) {
          var a = e.pos;
          if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
            var o = e.lastIntValue;
            if (o >= 56320 && o <= 57343)
              return e.lastIntValue = 1024 * (r - 55296) + (o - 56320) + 65536, true;
          }
          e.pos = a, e.lastIntValue = r;
        }
        return true;
      }
      if (n && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && ((s2 = e.lastIntValue) >= 0 && s2 <= 1114111))
        return true;
      n && e.raise("Invalid unicode escape"), e.pos = i2;
    }
    return false;
  }, vo.regexp_eatIdentityEscape = function(e) {
    if (e.switchU)
      return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, true);
    var t2 = e.current();
    return !(t2 === 99 || e.switchN && t2 === 107) && (e.lastIntValue = t2, e.advance(), true);
  }, vo.regexp_eatDecimalEscape = function(e) {
    e.lastIntValue = 0;
    var t2 = e.current();
    if (t2 >= 49 && t2 <= 57) {
      do {
        e.lastIntValue = 10 * e.lastIntValue + (t2 - 48), e.advance();
      } while ((t2 = e.current()) >= 48 && t2 <= 57);
      return true;
    }
    return false;
  }, vo.regexp_eatCharacterClassEscape = function(e) {
    var t2 = e.current();
    if (function(e2) {
      return e2 === 100 || e2 === 68 || e2 === 115 || e2 === 83 || e2 === 119 || e2 === 87;
    }(t2))
      return e.lastIntValue = -1, e.advance(), true;
    if (e.switchU && this.options.ecmaVersion >= 9 && (t2 === 80 || t2 === 112)) {
      if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
        return true;
      e.raise("Invalid property name");
    }
    return false;
  }, vo.regexp_eatUnicodePropertyValueExpression = function(e) {
    var t2 = e.pos;
    if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
      var s2 = e.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(e)) {
        var i2 = e.lastStringValue;
        return this.regexp_validateUnicodePropertyNameAndValue(e, s2, i2), true;
      }
    }
    if (e.pos = t2, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameOrValue(e, n), true;
    }
    return false;
  }, vo.regexp_validateUnicodePropertyNameAndValue = function(e, t2, s2) {
    Aa(e.unicodeProperties.nonBinary, t2) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t2].test(s2) || e.raise("Invalid property value");
  }, vo.regexp_validateUnicodePropertyNameOrValue = function(e, t2) {
    e.unicodeProperties.binary.test(t2) || e.raise("Invalid property name");
  }, vo.regexp_eatUnicodePropertyName = function(e) {
    var t2 = 0;
    for (e.lastStringValue = ""; ko(t2 = e.current()); )
      e.lastStringValue += ka(t2), e.advance();
    return e.lastStringValue !== "";
  }, vo.regexp_eatUnicodePropertyValue = function(e) {
    var t2 = 0;
    for (e.lastStringValue = ""; wo(t2 = e.current()); )
      e.lastStringValue += ka(t2), e.advance();
    return e.lastStringValue !== "";
  }, vo.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
    return this.regexp_eatUnicodePropertyValue(e);
  }, vo.regexp_eatCharacterClass = function(e) {
    if (e.eat(91)) {
      if (e.eat(94), this.regexp_classRanges(e), e.eat(93))
        return true;
      e.raise("Unterminated character class");
    }
    return false;
  }, vo.regexp_classRanges = function(e) {
    for (; this.regexp_eatClassAtom(e); ) {
      var t2 = e.lastIntValue;
      if (e.eat(45) && this.regexp_eatClassAtom(e)) {
        var s2 = e.lastIntValue;
        !e.switchU || t2 !== -1 && s2 !== -1 || e.raise("Invalid character class"), t2 !== -1 && s2 !== -1 && t2 > s2 && e.raise("Range out of order in character class");
      }
    }
  }, vo.regexp_eatClassAtom = function(e) {
    var t2 = e.pos;
    if (e.eat(92)) {
      if (this.regexp_eatClassEscape(e))
        return true;
      if (e.switchU) {
        var s2 = e.current();
        (s2 === 99 || _o(s2)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
      }
      e.pos = t2;
    }
    var i2 = e.current();
    return i2 !== 93 && (e.lastIntValue = i2, e.advance(), true);
  }, vo.regexp_eatClassEscape = function(e) {
    var t2 = e.pos;
    if (e.eat(98))
      return e.lastIntValue = 8, true;
    if (e.switchU && e.eat(45))
      return e.lastIntValue = 45, true;
    if (!e.switchU && e.eat(99)) {
      if (this.regexp_eatClassControlLetter(e))
        return true;
      e.pos = t2;
    }
    return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
  }, vo.regexp_eatClassControlLetter = function(e) {
    var t2 = e.current();
    return !(!Co(t2) && t2 !== 95) && (e.lastIntValue = t2 % 32, e.advance(), true);
  }, vo.regexp_eatHexEscapeSequence = function(e) {
    var t2 = e.pos;
    if (e.eat(120)) {
      if (this.regexp_eatFixedHexDigits(e, 2))
        return true;
      e.switchU && e.raise("Invalid escape"), e.pos = t2;
    }
    return false;
  }, vo.regexp_eatDecimalDigits = function(e) {
    var t2 = e.pos, s2 = 0;
    for (e.lastIntValue = 0; Co(s2 = e.current()); )
      e.lastIntValue = 10 * e.lastIntValue + (s2 - 48), e.advance();
    return e.pos !== t2;
  }, vo.regexp_eatHexDigits = function(e) {
    var t2 = e.pos, s2 = 0;
    for (e.lastIntValue = 0; Io(s2 = e.current()); )
      e.lastIntValue = 16 * e.lastIntValue + No(s2), e.advance();
    return e.pos !== t2;
  }, vo.regexp_eatLegacyOctalEscapeSequence = function(e) {
    if (this.regexp_eatOctalDigit(e)) {
      var t2 = e.lastIntValue;
      if (this.regexp_eatOctalDigit(e)) {
        var s2 = e.lastIntValue;
        t2 <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t2 + 8 * s2 + e.lastIntValue : e.lastIntValue = 8 * t2 + s2;
      } else
        e.lastIntValue = t2;
      return true;
    }
    return false;
  }, vo.regexp_eatOctalDigit = function(e) {
    var t2 = e.current();
    return _o(t2) ? (e.lastIntValue = t2 - 48, e.advance(), true) : (e.lastIntValue = 0, false);
  }, vo.regexp_eatFixedHexDigits = function(e, t2) {
    var s2 = e.pos;
    e.lastIntValue = 0;
    for (var i2 = 0; i2 < t2; ++i2) {
      var n = e.current();
      if (!Io(n))
        return e.pos = s2, false;
      e.lastIntValue = 16 * e.lastIntValue + No(n), e.advance();
    }
    return true;
  };
  var $o = function(e) {
    this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Ia(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
  }, To = Ma.prototype;
  function Ro(e) {
    return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
  }
  To.next = function(e) {
    !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new $o(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
  }, To.getToken = function() {
    return this.next(), new $o(this);
  }, typeof Symbol != "undefined" && (To[Symbol.iterator] = function() {
    var e = this;
    return { next: function() {
      var t2 = e.getToken();
      return { done: t2.type === da.eof, value: t2 };
    } };
  }), To.nextToken = function() {
    var e = this.curContext();
    return e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(da.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos());
  }, To.readToken = function(e) {
    return na(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
  }, To.fullCharCodeAtPos = function() {
    var e = this.input.charCodeAt(this.pos);
    if (e <= 55295 || e >= 56320)
      return e;
    var t2 = this.input.charCodeAt(this.pos + 1);
    return t2 <= 56319 || t2 >= 57344 ? e : (e << 10) + t2 - 56613888;
  }, To.skipBlockComment = function() {
    var e = this.options.onComment && this.curPosition(), t2 = this.pos, s2 = this.input.indexOf("*/", this.pos += 2);
    if (s2 === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s2 + 2, this.options.locations)
      for (var i2 = void 0, n = t2; (i2 = ga(this.input, n, this.pos)) > -1; )
        ++this.curLine, n = this.lineStart = i2;
    this.options.onComment && this.options.onComment(true, this.input.slice(t2 + 2, s2), t2, this.pos, e, this.curPosition());
  }, To.skipLineComment = function(e) {
    for (var t2 = this.pos, s2 = this.options.onComment && this.curPosition(), i2 = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ma(i2); )
      i2 = this.input.charCodeAt(++this.pos);
    this.options.onComment && this.options.onComment(false, this.input.slice(t2 + e, this.pos), t2, this.pos, s2, this.curPosition());
  }, To.skipSpace = function() {
    e:
      for (; this.pos < this.input.length; ) {
        var e = this.input.charCodeAt(this.pos);
        switch (e) {
          case 32:
          case 160:
            ++this.pos;
            break;
          case 13:
            this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
            break;
          case 47:
            switch (this.input.charCodeAt(this.pos + 1)) {
              case 42:
                this.skipBlockComment();
                break;
              case 47:
                this.skipLineComment(2);
                break;
              default:
                break e;
            }
            break;
          default:
            if (!(e > 8 && e < 14 || e >= 5760 && ya.test(String.fromCharCode(e))))
              break e;
            ++this.pos;
        }
      }
  }, To.finishToken = function(e, t2) {
    this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
    var s2 = this.type;
    this.type = e, this.value = t2, this.updateContext(s2);
  }, To.readToken_dot = function() {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e >= 48 && e <= 57)
      return this.readNumber(true);
    var t2 = this.input.charCodeAt(this.pos + 2);
    return this.options.ecmaVersion >= 6 && e === 46 && t2 === 46 ? (this.pos += 3, this.finishToken(da.ellipsis)) : (++this.pos, this.finishToken(da.dot));
  }, To.readToken_slash = function() {
    var e = this.input.charCodeAt(this.pos + 1);
    return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(da.assign, 2) : this.finishOp(da.slash, 1);
  }, To.readToken_mult_modulo_exp = function(e) {
    var t2 = this.input.charCodeAt(this.pos + 1), s2 = 1, i2 = e === 42 ? da.star : da.modulo;
    return this.options.ecmaVersion >= 7 && e === 42 && t2 === 42 && (++s2, i2 = da.starstar, t2 = this.input.charCodeAt(this.pos + 2)), t2 === 61 ? this.finishOp(da.assign, s2 + 1) : this.finishOp(i2, s2);
  }, To.readToken_pipe_amp = function(e) {
    var t2 = this.input.charCodeAt(this.pos + 1);
    if (t2 === e) {
      if (this.options.ecmaVersion >= 12) {
        if (this.input.charCodeAt(this.pos + 2) === 61)
          return this.finishOp(da.assign, 3);
      }
      return this.finishOp(e === 124 ? da.logicalOR : da.logicalAND, 2);
    }
    return t2 === 61 ? this.finishOp(da.assign, 2) : this.finishOp(e === 124 ? da.bitwiseOR : da.bitwiseAND, 1);
  }, To.readToken_caret = function() {
    return this.input.charCodeAt(this.pos + 1) === 61 ? this.finishOp(da.assign, 2) : this.finishOp(da.bitwiseXOR, 1);
  }, To.readToken_plus_min = function(e) {
    var t2 = this.input.charCodeAt(this.pos + 1);
    return t2 === e ? t2 !== 45 || this.inModule || this.input.charCodeAt(this.pos + 2) !== 62 || this.lastTokEnd !== 0 && !pa.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(da.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : t2 === 61 ? this.finishOp(da.assign, 2) : this.finishOp(da.plusMin, 1);
  }, To.readToken_lt_gt = function(e) {
    var t2 = this.input.charCodeAt(this.pos + 1), s2 = 1;
    return t2 === e ? (s2 = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + s2) === 61 ? this.finishOp(da.assign, s2 + 1) : this.finishOp(da.bitShift, s2)) : t2 !== 33 || e !== 60 || this.inModule || this.input.charCodeAt(this.pos + 2) !== 45 || this.input.charCodeAt(this.pos + 3) !== 45 ? (t2 === 61 && (s2 = 2), this.finishOp(da.relational, s2)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
  }, To.readToken_eq_excl = function(e) {
    var t2 = this.input.charCodeAt(this.pos + 1);
    return t2 === 61 ? this.finishOp(da.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t2 === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(da.arrow)) : this.finishOp(e === 61 ? da.eq : da.prefix, 1);
  }, To.readToken_question = function() {
    var e = this.options.ecmaVersion;
    if (e >= 11) {
      var t2 = this.input.charCodeAt(this.pos + 1);
      if (t2 === 46) {
        var s2 = this.input.charCodeAt(this.pos + 2);
        if (s2 < 48 || s2 > 57)
          return this.finishOp(da.questionDot, 2);
      }
      if (t2 === 63) {
        if (e >= 12) {
          if (this.input.charCodeAt(this.pos + 2) === 61)
            return this.finishOp(da.assign, 3);
        }
        return this.finishOp(da.coalesce, 2);
      }
    }
    return this.finishOp(da.question, 1);
  }, To.readToken_numberSign = function() {
    var e = 35;
    if (this.options.ecmaVersion >= 13 && (++this.pos, na(e = this.fullCharCodeAtPos(), true) || e === 92))
      return this.finishToken(da.privateId, this.readWord1());
    this.raise(this.pos, "Unexpected character '" + ka(e) + "'");
  }, To.getTokenFromCode = function(e) {
    switch (e) {
      case 46:
        return this.readToken_dot();
      case 40:
        return ++this.pos, this.finishToken(da.parenL);
      case 41:
        return ++this.pos, this.finishToken(da.parenR);
      case 59:
        return ++this.pos, this.finishToken(da.semi);
      case 44:
        return ++this.pos, this.finishToken(da.comma);
      case 91:
        return ++this.pos, this.finishToken(da.bracketL);
      case 93:
        return ++this.pos, this.finishToken(da.bracketR);
      case 123:
        return ++this.pos, this.finishToken(da.braceL);
      case 125:
        return ++this.pos, this.finishToken(da.braceR);
      case 58:
        return ++this.pos, this.finishToken(da.colon);
      case 96:
        if (this.options.ecmaVersion < 6)
          break;
        return ++this.pos, this.finishToken(da.backQuote);
      case 48:
        var t2 = this.input.charCodeAt(this.pos + 1);
        if (t2 === 120 || t2 === 88)
          return this.readRadixNumber(16);
        if (this.options.ecmaVersion >= 6) {
          if (t2 === 111 || t2 === 79)
            return this.readRadixNumber(8);
          if (t2 === 98 || t2 === 66)
            return this.readRadixNumber(2);
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(false);
      case 34:
      case 39:
        return this.readString(e);
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(e);
      case 124:
      case 38:
        return this.readToken_pipe_amp(e);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(e);
      case 60:
      case 62:
        return this.readToken_lt_gt(e);
      case 61:
      case 33:
        return this.readToken_eq_excl(e);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(da.prefix, 1);
      case 35:
        return this.readToken_numberSign();
    }
    this.raise(this.pos, "Unexpected character '" + ka(e) + "'");
  }, To.finishOp = function(e, t2) {
    var s2 = this.input.slice(this.pos, this.pos + t2);
    return this.pos += t2, this.finishToken(e, s2);
  }, To.readRegexp = function() {
    for (var e, t2, s2 = this.pos; ; ) {
      this.pos >= this.input.length && this.raise(s2, "Unterminated regular expression");
      var i2 = this.input.charAt(this.pos);
      if (pa.test(i2) && this.raise(s2, "Unterminated regular expression"), e)
        e = false;
      else {
        if (i2 === "[")
          t2 = true;
        else if (i2 === "]" && t2)
          t2 = false;
        else if (i2 === "/" && !t2)
          break;
        e = i2 === "\\";
      }
      ++this.pos;
    }
    var n = this.input.slice(s2, this.pos);
    ++this.pos;
    var r = this.pos, a = this.readWord1();
    this.containsEsc && this.unexpected(r);
    var o = this.regexpState || (this.regexpState = new Ao(this));
    o.reset(s2, n, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
    var h = null;
    try {
      h = new RegExp(n, a);
    } catch (e2) {
    }
    return this.finishToken(da.regexp, { pattern: n, flags: a, value: h });
  }, To.readInt = function(e, t2, s2) {
    for (var i2 = this.options.ecmaVersion >= 12 && t2 === void 0, n = s2 && this.input.charCodeAt(this.pos) === 48, r = this.pos, a = 0, o = 0, h = 0, l = t2 == null ? 1 / 0 : t2; h < l; ++h, ++this.pos) {
      var c = this.input.charCodeAt(this.pos), u = void 0;
      if (i2 && c === 95)
        n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), o === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), h === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = c;
      else {
        if ((u = c >= 97 ? c - 97 + 10 : c >= 65 ? c - 65 + 10 : c >= 48 && c <= 57 ? c - 48 : 1 / 0) >= e)
          break;
        o = c, a = a * e + u;
      }
    }
    return i2 && o === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === r || t2 != null && this.pos - r !== t2 ? null : a;
  }, To.readRadixNumber = function(e) {
    var t2 = this.pos;
    this.pos += 2;
    var s2 = this.readInt(e);
    return s2 == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (s2 = Ro(this.input.slice(t2, this.pos)), ++this.pos) : na(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(da.num, s2);
  }, To.readNumber = function(e) {
    var t2 = this.pos;
    e || this.readInt(10, void 0, true) !== null || this.raise(t2, "Invalid number");
    var s2 = this.pos - t2 >= 2 && this.input.charCodeAt(t2) === 48;
    s2 && this.strict && this.raise(t2, "Invalid number");
    var i2 = this.input.charCodeAt(this.pos);
    if (!s2 && !e && this.options.ecmaVersion >= 11 && i2 === 110) {
      var n = Ro(this.input.slice(t2, this.pos));
      return ++this.pos, na(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(da.num, n);
    }
    s2 && /[89]/.test(this.input.slice(t2, this.pos)) && (s2 = false), i2 !== 46 || s2 || (++this.pos, this.readInt(10), i2 = this.input.charCodeAt(this.pos)), i2 !== 69 && i2 !== 101 || s2 || ((i2 = this.input.charCodeAt(++this.pos)) !== 43 && i2 !== 45 || ++this.pos, this.readInt(10) === null && this.raise(t2, "Invalid number")), na(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
    var r, a = (r = this.input.slice(t2, this.pos), s2 ? parseInt(r, 8) : parseFloat(r.replace(/_/g, "")));
    return this.finishToken(da.num, a);
  }, To.readCodePoint = function() {
    var e;
    if (this.input.charCodeAt(this.pos) === 123) {
      this.options.ecmaVersion < 6 && this.unexpected();
      var t2 = ++this.pos;
      e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t2, "Code point out of bounds");
    } else
      e = this.readHexChar(4);
    return e;
  }, To.readString = function(e) {
    for (var t2 = "", s2 = ++this.pos; ; ) {
      this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
      var i2 = this.input.charCodeAt(this.pos);
      if (i2 === e)
        break;
      i2 === 92 ? (t2 += this.input.slice(s2, this.pos), t2 += this.readEscapedChar(false), s2 = this.pos) : i2 === 8232 || i2 === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (ma(i2) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
    }
    return t2 += this.input.slice(s2, this.pos++), this.finishToken(da.string, t2);
  };
  var Mo = {};
  To.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (e) {
      if (e !== Mo)
        throw e;
      this.readInvalidTemplateToken();
    }
    this.inTemplateElement = false;
  }, To.invalidStringToken = function(e, t2) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9)
      throw Mo;
    this.raise(e, t2);
  }, To.readTmplToken = function() {
    for (var e = "", t2 = this.pos; ; ) {
      this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
      var s2 = this.input.charCodeAt(this.pos);
      if (s2 === 96 || s2 === 36 && this.input.charCodeAt(this.pos + 1) === 123)
        return this.pos !== this.start || this.type !== da.template && this.type !== da.invalidTemplate ? (e += this.input.slice(t2, this.pos), this.finishToken(da.template, e)) : s2 === 36 ? (this.pos += 2, this.finishToken(da.dollarBraceL)) : (++this.pos, this.finishToken(da.backQuote));
      if (s2 === 92)
        e += this.input.slice(t2, this.pos), e += this.readEscapedChar(true), t2 = this.pos;
      else if (ma(s2)) {
        switch (e += this.input.slice(t2, this.pos), ++this.pos, s2) {
          case 13:
            this.input.charCodeAt(this.pos) === 10 && ++this.pos;
          case 10:
            e += "\n";
            break;
          default:
            e += String.fromCharCode(s2);
        }
        this.options.locations && (++this.curLine, this.lineStart = this.pos), t2 = this.pos;
      } else
        ++this.pos;
    }
  }, To.readInvalidTemplateToken = function() {
    for (; this.pos < this.input.length; this.pos++)
      switch (this.input[this.pos]) {
        case "\\":
          ++this.pos;
          break;
        case "$":
          if (this.input[this.pos + 1] !== "{")
            break;
        case "`":
          return this.finishToken(da.invalidTemplate, this.input.slice(this.start, this.pos));
      }
    this.raise(this.start, "Unterminated template");
  }, To.readEscapedChar = function(e) {
    var t2 = this.input.charCodeAt(++this.pos);
    switch (++this.pos, t2) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(this.readHexChar(2));
      case 117:
        return ka(this.readCodePoint());
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        this.input.charCodeAt(this.pos) === 10 && ++this.pos;
      case 10:
        return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
      case 56:
      case 57:
        if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e) {
          var s2 = this.pos - 1;
          return this.invalidStringToken(s2, "Invalid escape sequence in template string"), null;
        }
      default:
        if (t2 >= 48 && t2 <= 55) {
          var i2 = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], n = parseInt(i2, 8);
          return n > 255 && (i2 = i2.slice(0, -1), n = parseInt(i2, 8)), this.pos += i2.length - 1, t2 = this.input.charCodeAt(this.pos), i2 === "0" && t2 !== 56 && t2 !== 57 || !this.strict && !e || this.invalidStringToken(this.pos - 1 - i2.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(n);
        }
        return ma(t2) ? "" : String.fromCharCode(t2);
    }
  }, To.readHexChar = function(e) {
    var t2 = this.pos, s2 = this.readInt(16, e);
    return s2 === null && this.invalidStringToken(t2, "Bad character escape sequence"), s2;
  }, To.readWord1 = function() {
    this.containsEsc = false;
    for (var e = "", t2 = true, s2 = this.pos, i2 = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
      var n = this.fullCharCodeAtPos();
      if (ra(n, i2))
        this.pos += n <= 65535 ? 1 : 2;
      else {
        if (n !== 92)
          break;
        this.containsEsc = true, e += this.input.slice(s2, this.pos);
        var r = this.pos;
        this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
        var a = this.readCodePoint();
        (t2 ? na : ra)(a, i2) || this.invalidStringToken(r, "Invalid Unicode escape"), e += ka(a), s2 = this.pos;
      }
      t2 = false;
    }
    return e + this.input.slice(s2, this.pos);
  }, To.readWord = function() {
    var e = this.readWord1(), t2 = da.name;
    return this.keywords.test(e) && (t2 = ca[e]), this.finishToken(t2, e);
  };
  Ma.acorn = { Parser: Ma, version: "8.7.1", defaultOptions: _a, Position: Ca, SourceLocation: Ia, getLineInfo: Na, Node: io, TokenType: aa, tokTypes: da, keywordTypes: ca, TokContext: Ka, tokContexts: Xa, isIdentifierChar: ra, isIdentifierStart: na, Token: $o, isNewLine: ma, lineBreak: pa, lineBreakG: fa, nonASCIIwhitespace: ya };
  var Yh;
  !function(e) {
    e[e.ENTRY_CHUNK = 0] = "ENTRY_CHUNK", e[e.SECONDARY_CHUNK = 1] = "SECONDARY_CHUNK", e[e.ASSET = 2] = "ASSET";
  }(Yh || (Yh = {}));
  typeof process !== "undefined" && process.hrtime ? () => {
    const t2 = process.hrtime();
    return t2[0] * 1e3 + t2[1] / 1e6;
  } : () => self.performance.now();
  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };
  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
  var keywords = {
    5: ecma5AndLessKeywords,
    "5module": ecma5AndLessKeywords + " export import",
    6: ecma5AndLessKeywords + " const class extends export import super"
  };
  var keywordRelationalOperator = /^in(stanceof)?$/;
  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function isInAstralSet(code, set) {
    var pos = 65536;
    for (var i2 = 0; i2 < set.length; i2 += 2) {
      pos += set[i2];
      if (pos > code) {
        return false;
      }
      pos += set[i2 + 1];
      if (pos >= code) {
        return true;
      }
    }
  }
  function isIdentifierStart(code, astral) {
    if (code < 65) {
      return code === 36;
    }
    if (code < 91) {
      return true;
    }
    if (code < 97) {
      return code === 95;
    }
    if (code < 123) {
      return true;
    }
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
    }
    if (astral === false) {
      return false;
    }
    return isInAstralSet(code, astralIdentifierStartCodes);
  }
  function isIdentifierChar(code, astral) {
    if (code < 48) {
      return code === 36;
    }
    if (code < 58) {
      return true;
    }
    if (code < 65) {
      return false;
    }
    if (code < 91) {
      return true;
    }
    if (code < 97) {
      return code === 95;
    }
    if (code < 123) {
      return true;
    }
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
    }
    if (astral === false) {
      return false;
    }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
  }
  var TokenType = function TokenType2(label, conf) {
    if (conf === void 0)
      conf = {};
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
  };
  function binop(name, prec) {
    return new TokenType(name, { beforeExpr: true, binop: prec });
  }
  var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
  var keywords$1 = {};
  function kw(name, options) {
    if (options === void 0)
      options = {};
    options.keyword = name;
    return keywords$1[name] = new TokenType(name, options);
  }
  var types = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    privateId: new TokenType("privateId", startsExpr),
    eof: new TokenType("eof"),
    bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
    eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
    assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
    incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
    prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", { beforeExpr: true }),
    coalesce: binop("??", 1),
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", { isLoop: true, beforeExpr: true }),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", { isLoop: true }),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", { isLoop: true }),
    _with: kw("with"),
    _new: kw("new", { beforeExpr: true, startsExpr: true }),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import", startsExpr),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", { beforeExpr: true, binop: 7 }),
    _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
    _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
    _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
    _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
  };
  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");
  function isNewLine(code, ecma2019String) {
    return code === 10 || code === 13 || !ecma2019String && (code === 8232 || code === 8233);
  }
  var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
  var ref = Object.prototype;
  var hasOwnProperty = ref.hasOwnProperty;
  var toString = ref.toString;
  function has(obj, propName) {
    return hasOwnProperty.call(obj, propName);
  }
  var isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };
  function wordsRegexp(words) {
    return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
  }
  var Position = function Position2(line, col) {
    this.line = line;
    this.column = col;
  };
  Position.prototype.offset = function offset(n) {
    return new Position(this.line, this.column + n);
  };
  var SourceLocation = function SourceLocation2(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) {
      this.source = p.sourceFile;
    }
  };
  function getLineInfo(input, offset) {
    for (var line = 1, cur = 0; ; ) {
      lineBreakG.lastIndex = cur;
      var match = lineBreakG.exec(input);
      if (match && match.index < offset) {
        ++line;
        cur = match.index + match[0].length;
      } else {
        return new Position(line, offset - cur);
      }
    }
  }
  var defaultOptions = {
    ecmaVersion: null,
    sourceType: "script",
    onInsertedSemicolon: null,
    onTrailingComma: null,
    allowReserved: null,
    allowReturnOutsideFunction: false,
    allowImportExportEverywhere: false,
    allowAwaitOutsideFunction: null,
    allowSuperOutsideMethod: null,
    allowHashBang: false,
    locations: false,
    onToken: null,
    onComment: null,
    ranges: false,
    program: null,
    sourceFile: null,
    directSourceFile: null,
    preserveParens: false
  };
  var warnedAboutEcmaVersion = false;
  function getOptions(opts) {
    var options = {};
    for (var opt in defaultOptions) {
      options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt];
    }
    if (options.ecmaVersion === "latest") {
      options.ecmaVersion = 1e8;
    } else if (options.ecmaVersion == null) {
      if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
        warnedAboutEcmaVersion = true;
        console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
      }
      options.ecmaVersion = 11;
    } else if (options.ecmaVersion >= 2015) {
      options.ecmaVersion -= 2009;
    }
    if (options.allowReserved == null) {
      options.allowReserved = options.ecmaVersion < 5;
    }
    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function(token) {
        return tokens.push(token);
      };
    }
    if (isArray(options.onComment)) {
      options.onComment = pushComment(options, options.onComment);
    }
    return options;
  }
  function pushComment(options, array) {
    return function(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start,
        end
      };
      if (options.locations) {
        comment.loc = new SourceLocation(this, startLoc, endLoc);
      }
      if (options.ranges) {
        comment.range = [start, end];
      }
      array.push(comment);
    };
  }
  var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128;
  function functionFlags(async, generator) {
    return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
  }
  var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
  var Parser = function Parser2(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
    var reserved = "";
    if (options.allowReserved !== true) {
      reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
      if (options.sourceType === "module") {
        reserved += " await";
      }
    }
    this.reservedWords = wordsRegexp(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = wordsRegexp(reservedStrict);
    this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);
    this.containsEsc = false;
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }
    this.type = types.eof;
    this.value = null;
    this.start = this.end = this.pos;
    this.startLoc = this.endLoc = this.curPosition();
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;
    this.context = this.initialContext();
    this.exprAllowed = true;
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);
    this.potentialArrowAt = -1;
    this.potentialArrowInForAwait = false;
    this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
    this.labels = [];
    this.undefinedExports = /* @__PURE__ */ Object.create(null);
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
      this.skipLineComment(2);
    }
    this.scopeStack = [];
    this.enterScope(SCOPE_TOP);
    this.regexpState = null;
    this.privateNameStack = [];
  };
  var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, inNonArrowFunction: { configurable: true } };
  Parser.prototype.parse = function parse() {
    var node2 = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node2);
  };
  prototypeAccessors.inFunction.get = function() {
    return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
  };
  prototypeAccessors.inGenerator.get = function() {
    return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
  };
  prototypeAccessors.inAsync.get = function() {
    return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
  };
  prototypeAccessors.canAwait.get = function() {
    for (var i2 = this.scopeStack.length - 1; i2 >= 0; i2--) {
      var scope2 = this.scopeStack[i2];
      if (scope2.inClassFieldInit) {
        return false;
      }
      if (scope2.flags & SCOPE_FUNCTION) {
        return (scope2.flags & SCOPE_ASYNC) > 0;
      }
    }
    return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
  };
  prototypeAccessors.allowSuper.get = function() {
    var ref2 = this.currentThisScope();
    var flags = ref2.flags;
    var inClassFieldInit = ref2.inClassFieldInit;
    return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
  };
  prototypeAccessors.allowDirectSuper.get = function() {
    return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
  };
  prototypeAccessors.treatFunctionsAsVar.get = function() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  };
  prototypeAccessors.inNonArrowFunction.get = function() {
    var ref2 = this.currentThisScope();
    var flags = ref2.flags;
    var inClassFieldInit = ref2.inClassFieldInit;
    return (flags & SCOPE_FUNCTION) > 0 || inClassFieldInit;
  };
  Parser.extend = function extend() {
    var plugins = [], len = arguments.length;
    while (len--)
      plugins[len] = arguments[len];
    var cls = this;
    for (var i2 = 0; i2 < plugins.length; i2++) {
      cls = plugins[i2](cls);
    }
    return cls;
  };
  Parser.parse = function parse(input, options) {
    return new this(options, input).parse();
  };
  Parser.parseExpressionAt = function parseExpressionAt2(input, pos, options) {
    var parser2 = new this(options, input, pos);
    parser2.nextToken();
    return parser2.parseExpression();
  };
  Parser.tokenizer = function tokenizer2(input, options) {
    return new this(options, input);
  };
  Object.defineProperties(Parser.prototype, prototypeAccessors);
  var pp = Parser.prototype;
  var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
  pp.strictDirective = function(start) {
    for (; ; ) {
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      var match = literal.exec(this.input.slice(start));
      if (!match) {
        return false;
      }
      if ((match[1] || match[2]) === "use strict") {
        skipWhiteSpace.lastIndex = start + match[0].length;
        var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
        var next = this.input.charAt(end);
        return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
      }
      start += match[0].length;
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      if (this.input[start] === ";") {
        start++;
      }
    }
  };
  pp.eat = function(type) {
    if (this.type === type) {
      this.next();
      return true;
    } else {
      return false;
    }
  };
  pp.isContextual = function(name) {
    return this.type === types.name && this.value === name && !this.containsEsc;
  };
  pp.eatContextual = function(name) {
    if (!this.isContextual(name)) {
      return false;
    }
    this.next();
    return true;
  };
  pp.expectContextual = function(name) {
    if (!this.eatContextual(name)) {
      this.unexpected();
    }
  };
  pp.canInsertSemicolon = function() {
    return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  };
  pp.insertSemicolon = function() {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon) {
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
      }
      return true;
    }
  };
  pp.semicolon = function() {
    if (!this.eat(types.semi) && !this.insertSemicolon()) {
      this.unexpected();
    }
  };
  pp.afterTrailingComma = function(tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma) {
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
      }
      if (!notNext) {
        this.next();
      }
      return true;
    }
  };
  pp.expect = function(type) {
    this.eat(type) || this.unexpected();
  };
  pp.unexpected = function(pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };
  function DestructuringErrors() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
  }
  pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) {
      return;
    }
    if (refDestructuringErrors.trailingComma > -1) {
      this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
    }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) {
      this.raiseRecoverable(parens, "Parenthesized pattern");
    }
  };
  pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) {
      return false;
    }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) {
      return shorthandAssign >= 0 || doubleProto >= 0;
    }
    if (shorthandAssign >= 0) {
      this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
    }
    if (doubleProto >= 0) {
      this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
    }
  };
  pp.checkYieldAwaitInDefaultParams = function() {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
      this.raise(this.yieldPos, "Yield expression cannot be a default value");
    }
    if (this.awaitPos) {
      this.raise(this.awaitPos, "Await expression cannot be a default value");
    }
  };
  pp.isSimpleAssignTarget = function(expr) {
    if (expr.type === "ParenthesizedExpression") {
      return this.isSimpleAssignTarget(expr.expression);
    }
    return expr.type === "Identifier" || expr.type === "MemberExpression";
  };
  var pp$1 = Parser.prototype;
  pp$1.parseTopLevel = function(node2) {
    var exports = /* @__PURE__ */ Object.create(null);
    if (!node2.body) {
      node2.body = [];
    }
    while (this.type !== types.eof) {
      var stmt = this.parseStatement(null, true, exports);
      node2.body.push(stmt);
    }
    if (this.inModule) {
      for (var i2 = 0, list = Object.keys(this.undefinedExports); i2 < list.length; i2 += 1) {
        var name = list[i2];
        this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
      }
    }
    this.adaptDirectivePrologue(node2.body);
    this.next();
    node2.sourceType = this.options.sourceType;
    return this.finishNode(node2, "Program");
  };
  var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
  pp$1.isLet = function(context) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
      return false;
    }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
    if (nextCh === 91 || nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
      return true;
    }
    if (context) {
      return false;
    }
    if (nextCh === 123) {
      return true;
    }
    if (isIdentifierStart(nextCh, true)) {
      var pos = next + 1;
      while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
        ++pos;
      }
      if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
        return true;
      }
      var ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) {
        return true;
      }
    }
    return false;
  };
  pp$1.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
      return false;
    }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, after;
    return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
  };
  pp$1.parseStatement = function(context, topLevel, exports) {
    var starttype = this.type, node2 = this.startNode(), kind;
    if (this.isLet(context)) {
      starttype = types._var;
      kind = "let";
    }
    switch (starttype) {
      case types._break:
      case types._continue:
        return this.parseBreakContinueStatement(node2, starttype.keyword);
      case types._debugger:
        return this.parseDebuggerStatement(node2);
      case types._do:
        return this.parseDoStatement(node2);
      case types._for:
        return this.parseForStatement(node2);
      case types._function:
        if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
          this.unexpected();
        }
        return this.parseFunctionStatement(node2, false, !context);
      case types._class:
        if (context) {
          this.unexpected();
        }
        return this.parseClass(node2, true);
      case types._if:
        return this.parseIfStatement(node2);
      case types._return:
        return this.parseReturnStatement(node2);
      case types._switch:
        return this.parseSwitchStatement(node2);
      case types._throw:
        return this.parseThrowStatement(node2);
      case types._try:
        return this.parseTryStatement(node2);
      case types._const:
      case types._var:
        kind = kind || this.value;
        if (context && kind !== "var") {
          this.unexpected();
        }
        return this.parseVarStatement(node2, kind);
      case types._while:
        return this.parseWhileStatement(node2);
      case types._with:
        return this.parseWithStatement(node2);
      case types.braceL:
        return this.parseBlock(true, node2);
      case types.semi:
        return this.parseEmptyStatement(node2);
      case types._export:
      case types._import:
        if (this.options.ecmaVersion > 10 && starttype === types._import) {
          skipWhiteSpace.lastIndex = this.pos;
          var skip = skipWhiteSpace.exec(this.input);
          var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
          if (nextCh === 40 || nextCh === 46) {
            return this.parseExpressionStatement(node2, this.parseExpression());
          }
        }
        if (!this.options.allowImportExportEverywhere) {
          if (!topLevel) {
            this.raise(this.start, "'import' and 'export' may only appear at the top level");
          }
          if (!this.inModule) {
            this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
          }
        }
        return starttype === types._import ? this.parseImport(node2) : this.parseExport(node2, exports);
      default:
        if (this.isAsyncFunction()) {
          if (context) {
            this.unexpected();
          }
          this.next();
          return this.parseFunctionStatement(node2, true, !context);
        }
        var maybeName = this.value, expr = this.parseExpression();
        if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
          return this.parseLabeledStatement(node2, maybeName, expr, context);
        } else {
          return this.parseExpressionStatement(node2, expr);
        }
    }
  };
  pp$1.parseBreakContinueStatement = function(node2, keyword) {
    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types.semi) || this.insertSemicolon()) {
      node2.label = null;
    } else if (this.type !== types.name) {
      this.unexpected();
    } else {
      node2.label = this.parseIdent();
      this.semicolon();
    }
    var i2 = 0;
    for (; i2 < this.labels.length; ++i2) {
      var lab = this.labels[i2];
      if (node2.label == null || lab.name === node2.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) {
          break;
        }
        if (node2.label && isBreak) {
          break;
        }
      }
    }
    if (i2 === this.labels.length) {
      this.raise(node2.start, "Unsyntactic " + keyword);
    }
    return this.finishNode(node2, isBreak ? "BreakStatement" : "ContinueStatement");
  };
  pp$1.parseDebuggerStatement = function(node2) {
    this.next();
    this.semicolon();
    return this.finishNode(node2, "DebuggerStatement");
  };
  pp$1.parseDoStatement = function(node2) {
    this.next();
    this.labels.push(loopLabel);
    node2.body = this.parseStatement("do");
    this.labels.pop();
    this.expect(types._while);
    node2.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6) {
      this.eat(types.semi);
    } else {
      this.semicolon();
    }
    return this.finishNode(node2, "DoWhileStatement");
  };
  pp$1.parseForStatement = function(node2) {
    this.next();
    var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterScope(0);
    this.expect(types.parenL);
    if (this.type === types.semi) {
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node2, null);
    }
    var isLet = this.isLet();
    if (this.type === types._var || this.type === types._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      if ((this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types._in) {
            if (awaitAt > -1) {
              this.unexpected(awaitAt);
            }
          } else {
            node2.await = awaitAt > -1;
          }
        }
        return this.parseForIn(node2, init$1);
      }
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node2, init$1);
    }
    var refDestructuringErrors = new DestructuringErrors();
    var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
    if (this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node2.await = awaitAt > -1;
        }
      }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLValPattern(init);
      return this.parseForIn(node2, init);
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node2, init);
  };
  pp$1.parseFunctionStatement = function(node2, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node2, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
  };
  pp$1.parseIfStatement = function(node2) {
    this.next();
    node2.test = this.parseParenExpression();
    node2.consequent = this.parseStatement("if");
    node2.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
    return this.finishNode(node2, "IfStatement");
  };
  pp$1.parseReturnStatement = function(node2) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
      this.raise(this.start, "'return' outside of function");
    }
    this.next();
    if (this.eat(types.semi) || this.insertSemicolon()) {
      node2.argument = null;
    } else {
      node2.argument = this.parseExpression();
      this.semicolon();
    }
    return this.finishNode(node2, "ReturnStatement");
  };
  pp$1.parseSwitchStatement = function(node2) {
    this.next();
    node2.discriminant = this.parseParenExpression();
    node2.cases = [];
    this.expect(types.braceL);
    this.labels.push(switchLabel);
    this.enterScope(0);
    var cur;
    for (var sawDefault = false; this.type !== types.braceR; ) {
      if (this.type === types._case || this.type === types._default) {
        var isCase = this.type === types._case;
        if (cur) {
          this.finishNode(cur, "SwitchCase");
        }
        node2.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
          }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(types.colon);
      } else {
        if (!cur) {
          this.unexpected();
        }
        cur.consequent.push(this.parseStatement(null));
      }
    }
    this.exitScope();
    if (cur) {
      this.finishNode(cur, "SwitchCase");
    }
    this.next();
    this.labels.pop();
    return this.finishNode(node2, "SwitchStatement");
  };
  pp$1.parseThrowStatement = function(node2) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
      this.raise(this.lastTokEnd, "Illegal newline after throw");
    }
    node2.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node2, "ThrowStatement");
  };
  var empty = [];
  pp$1.parseTryStatement = function(node2) {
    this.next();
    node2.block = this.parseBlock();
    node2.handler = null;
    if (this.type === types._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types.parenL)) {
        clause.param = this.parseBindingAtom();
        var simple = clause.param.type === "Identifier";
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(types.parenR);
      } else {
        if (this.options.ecmaVersion < 10) {
          this.unexpected();
        }
        clause.param = null;
        this.enterScope(0);
      }
      clause.body = this.parseBlock(false);
      this.exitScope();
      node2.handler = this.finishNode(clause, "CatchClause");
    }
    node2.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
    if (!node2.handler && !node2.finalizer) {
      this.raise(node2.start, "Missing catch or finally clause");
    }
    return this.finishNode(node2, "TryStatement");
  };
  pp$1.parseVarStatement = function(node2, kind) {
    this.next();
    this.parseVar(node2, false, kind);
    this.semicolon();
    return this.finishNode(node2, "VariableDeclaration");
  };
  pp$1.parseWhileStatement = function(node2) {
    this.next();
    node2.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node2.body = this.parseStatement("while");
    this.labels.pop();
    return this.finishNode(node2, "WhileStatement");
  };
  pp$1.parseWithStatement = function(node2) {
    if (this.strict) {
      this.raise(this.start, "'with' in strict mode");
    }
    this.next();
    node2.object = this.parseParenExpression();
    node2.body = this.parseStatement("with");
    return this.finishNode(node2, "WithStatement");
  };
  pp$1.parseEmptyStatement = function(node2) {
    this.next();
    return this.finishNode(node2, "EmptyStatement");
  };
  pp$1.parseLabeledStatement = function(node2, maybeName, expr, context) {
    for (var i$12 = 0, list = this.labels; i$12 < list.length; i$12 += 1) {
      var label = list[i$12];
      if (label.name === maybeName) {
        this.raise(expr.start, "Label '" + maybeName + "' is already declared");
      }
    }
    var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
    for (var i2 = this.labels.length - 1; i2 >= 0; i2--) {
      var label$1 = this.labels[i2];
      if (label$1.statementStart === node2.start) {
        label$1.statementStart = this.start;
        label$1.kind = kind;
      } else {
        break;
      }
    }
    this.labels.push({ name: maybeName, kind, statementStart: this.start });
    node2.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.labels.pop();
    node2.label = expr;
    return this.finishNode(node2, "LabeledStatement");
  };
  pp$1.parseExpressionStatement = function(node2, expr) {
    node2.expression = expr;
    this.semicolon();
    return this.finishNode(node2, "ExpressionStatement");
  };
  pp$1.parseBlock = function(createNewLexicalScope, node2, exitStrict) {
    if (createNewLexicalScope === void 0)
      createNewLexicalScope = true;
    if (node2 === void 0)
      node2 = this.startNode();
    node2.body = [];
    this.expect(types.braceL);
    if (createNewLexicalScope) {
      this.enterScope(0);
    }
    while (this.type !== types.braceR) {
      var stmt = this.parseStatement(null);
      node2.body.push(stmt);
    }
    if (exitStrict) {
      this.strict = false;
    }
    this.next();
    if (createNewLexicalScope) {
      this.exitScope();
    }
    return this.finishNode(node2, "BlockStatement");
  };
  pp$1.parseFor = function(node2, init) {
    node2.init = init;
    this.expect(types.semi);
    node2.test = this.type === types.semi ? null : this.parseExpression();
    this.expect(types.semi);
    node2.update = this.type === types.parenR ? null : this.parseExpression();
    this.expect(types.parenR);
    node2.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node2, "ForStatement");
  };
  pp$1.parseForIn = function(node2, init) {
    var isForIn = this.type === types._in;
    this.next();
    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
    }
    node2.left = init;
    node2.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types.parenR);
    node2.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node2, isForIn ? "ForInStatement" : "ForOfStatement");
  };
  pp$1.parseVar = function(node2, isFor, kind) {
    node2.declarations = [];
    node2.kind = kind;
    for (; ; ) {
      var decl = this.startNode();
      this.parseVarId(decl, kind);
      if (this.eat(types.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else if (kind === "const" && !(this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
        this.unexpected();
      } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
        this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node2.declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types.comma)) {
        break;
      }
    }
    return node2;
  };
  pp$1.parseVarId = function(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
  };
  var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
  pp$1.parseFunction = function(node2, statement, allowExpressionBody, isAsync) {
    this.initFunction(node2);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
      if (this.type === types.star && statement & FUNC_HANGING_STATEMENT) {
        this.unexpected();
      }
      node2.generator = this.eat(types.star);
    }
    if (this.options.ecmaVersion >= 8) {
      node2.async = !!isAsync;
    }
    if (statement & FUNC_STATEMENT) {
      node2.id = statement & FUNC_NULLABLE_ID && this.type !== types.name ? null : this.parseIdent();
      if (node2.id && !(statement & FUNC_HANGING_STATEMENT)) {
        this.checkLValSimple(node2.id, this.strict || node2.generator || node2.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
      }
    }
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(node2.async, node2.generator));
    if (!(statement & FUNC_STATEMENT)) {
      node2.id = this.type === types.name ? this.parseIdent() : null;
    }
    this.parseFunctionParams(node2);
    this.parseFunctionBody(node2, allowExpressionBody, false);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node2, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
  };
  pp$1.parseFunctionParams = function(node2) {
    this.expect(types.parenL);
    node2.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };
  pp$1.parseClass = function(node2, isStatement) {
    this.next();
    var oldStrict = this.strict;
    this.strict = true;
    this.parseClassId(node2, isStatement);
    this.parseClassSuper(node2);
    var privateNameMap = this.enterClassBody();
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types.braceL);
    while (this.type !== types.braceR) {
      var element = this.parseClassElement(node2.superClass !== null);
      if (element) {
        classBody.body.push(element);
        if (element.type === "MethodDefinition" && element.kind === "constructor") {
          if (hadConstructor) {
            this.raise(element.start, "Duplicate constructor in the same class");
          }
          hadConstructor = true;
        } else if (element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
          this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
        }
      }
    }
    this.strict = oldStrict;
    this.next();
    node2.body = this.finishNode(classBody, "ClassBody");
    this.exitClassBody();
    return this.finishNode(node2, isStatement ? "ClassDeclaration" : "ClassExpression");
  };
  pp$1.parseClassElement = function(constructorAllowsSuper) {
    if (this.eat(types.semi)) {
      return null;
    }
    var ecmaVersion = this.options.ecmaVersion;
    var node2 = this.startNode();
    var keyName = "";
    var isGenerator = false;
    var isAsync = false;
    var kind = "method";
    node2.static = false;
    if (this.eatContextual("static")) {
      if (this.isClassElementNameStart() || this.type === types.star) {
        node2.static = true;
      } else {
        keyName = "static";
      }
    }
    if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
      if ((this.isClassElementNameStart() || this.type === types.star) && !this.canInsertSemicolon()) {
        isAsync = true;
      } else {
        keyName = "async";
      }
    }
    if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types.star)) {
      isGenerator = true;
    }
    if (!keyName && !isAsync && !isGenerator) {
      var lastValue = this.value;
      if (this.eatContextual("get") || this.eatContextual("set")) {
        if (this.isClassElementNameStart()) {
          kind = lastValue;
        } else {
          keyName = lastValue;
        }
      }
    }
    if (keyName) {
      node2.computed = false;
      node2.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
      node2.key.name = keyName;
      this.finishNode(node2.key, "Identifier");
    } else {
      this.parseClassElementName(node2);
    }
    if (ecmaVersion < 13 || this.type === types.parenL || kind !== "method" || isGenerator || isAsync) {
      var isConstructor = !node2.static && checkKeyName(node2, "constructor");
      var allowsDirectSuper = isConstructor && constructorAllowsSuper;
      if (isConstructor && kind !== "method") {
        this.raise(node2.key.start, "Constructor can't have get/set modifier");
      }
      node2.kind = isConstructor ? "constructor" : kind;
      this.parseClassMethod(node2, isGenerator, isAsync, allowsDirectSuper);
    } else {
      this.parseClassField(node2);
    }
    return node2;
  };
  pp$1.isClassElementNameStart = function() {
    return this.type === types.name || this.type === types.privateId || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword;
  };
  pp$1.parseClassElementName = function(element) {
    if (this.type === types.privateId) {
      if (this.value === "constructor") {
        this.raise(this.start, "Classes can't have an element named '#constructor'");
      }
      element.computed = false;
      element.key = this.parsePrivateIdent();
    } else {
      this.parsePropertyName(element);
    }
  };
  pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
    var key = method.key;
    if (method.kind === "constructor") {
      if (isGenerator) {
        this.raise(key.start, "Constructor can't be a generator");
      }
      if (isAsync) {
        this.raise(key.start, "Constructor can't be an async method");
      }
    } else if (method.static && checkKeyName(method, "prototype")) {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }
    var value2 = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
    if (method.kind === "get" && value2.params.length !== 0) {
      this.raiseRecoverable(value2.start, "getter should have no params");
    }
    if (method.kind === "set" && value2.params.length !== 1) {
      this.raiseRecoverable(value2.start, "setter should have exactly one param");
    }
    if (method.kind === "set" && value2.params[0].type === "RestElement") {
      this.raiseRecoverable(value2.params[0].start, "Setter cannot use rest params");
    }
    return this.finishNode(method, "MethodDefinition");
  };
  pp$1.parseClassField = function(field) {
    if (checkKeyName(field, "constructor")) {
      this.raise(field.key.start, "Classes can't have a field named 'constructor'");
    } else if (field.static && checkKeyName(field, "prototype")) {
      this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
    }
    if (this.eat(types.eq)) {
      var scope2 = this.currentThisScope();
      var inClassFieldInit = scope2.inClassFieldInit;
      scope2.inClassFieldInit = true;
      field.value = this.parseMaybeAssign();
      scope2.inClassFieldInit = inClassFieldInit;
    } else {
      field.value = null;
    }
    this.semicolon();
    return this.finishNode(field, "PropertyDefinition");
  };
  pp$1.parseClassId = function(node2, isStatement) {
    if (this.type === types.name) {
      node2.id = this.parseIdent();
      if (isStatement) {
        this.checkLValSimple(node2.id, BIND_LEXICAL, false);
      }
    } else {
      if (isStatement === true) {
        this.unexpected();
      }
      node2.id = null;
    }
  };
  pp$1.parseClassSuper = function(node2) {
    node2.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  };
  pp$1.enterClassBody = function() {
    var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
    this.privateNameStack.push(element);
    return element.declared;
  };
  pp$1.exitClassBody = function() {
    var ref2 = this.privateNameStack.pop();
    var declared = ref2.declared;
    var used = ref2.used;
    var len = this.privateNameStack.length;
    var parent = len === 0 ? null : this.privateNameStack[len - 1];
    for (var i2 = 0; i2 < used.length; ++i2) {
      var id2 = used[i2];
      if (!has(declared, id2.name)) {
        if (parent) {
          parent.used.push(id2);
        } else {
          this.raiseRecoverable(id2.start, "Private field '#" + id2.name + "' must be declared in an enclosing class");
        }
      }
    }
  };
  function isPrivateNameConflicted(privateNameMap, element) {
    var name = element.key.name;
    var curr = privateNameMap[name];
    var next = "true";
    if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
      next = (element.static ? "s" : "i") + element.kind;
    }
    if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
      privateNameMap[name] = "true";
      return false;
    } else if (!curr) {
      privateNameMap[name] = next;
      return false;
    } else {
      return true;
    }
  }
  function checkKeyName(node2, name) {
    var computed = node2.computed;
    var key = node2.key;
    return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
  }
  pp$1.parseExport = function(node2, exports) {
    this.next();
    if (this.eat(types.star)) {
      if (this.options.ecmaVersion >= 11) {
        if (this.eatContextual("as")) {
          node2.exported = this.parseIdent(true);
          this.checkExport(exports, node2.exported.name, this.lastTokStart);
        } else {
          node2.exported = null;
        }
      }
      this.expectContextual("from");
      if (this.type !== types.string) {
        this.unexpected();
      }
      node2.source = this.parseExprAtom();
      this.semicolon();
      return this.finishNode(node2, "ExportAllDeclaration");
    }
    if (this.eat(types._default)) {
      this.checkExport(exports, "default", this.lastTokStart);
      var isAsync;
      if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
        var fNode = this.startNode();
        this.next();
        if (isAsync) {
          this.next();
        }
        node2.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
      } else if (this.type === types._class) {
        var cNode = this.startNode();
        node2.declaration = this.parseClass(cNode, "nullableID");
      } else {
        node2.declaration = this.parseMaybeAssign();
        this.semicolon();
      }
      return this.finishNode(node2, "ExportDefaultDeclaration");
    }
    if (this.shouldParseExportStatement()) {
      node2.declaration = this.parseStatement(null);
      if (node2.declaration.type === "VariableDeclaration") {
        this.checkVariableExport(exports, node2.declaration.declarations);
      } else {
        this.checkExport(exports, node2.declaration.id.name, node2.declaration.id.start);
      }
      node2.specifiers = [];
      node2.source = null;
    } else {
      node2.declaration = null;
      node2.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types.string) {
          this.unexpected();
        }
        node2.source = this.parseExprAtom();
      } else {
        for (var i2 = 0, list = node2.specifiers; i2 < list.length; i2 += 1) {
          var spec = list[i2];
          this.checkUnreserved(spec.local);
          this.checkLocalExport(spec.local);
        }
        node2.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(node2, "ExportNamedDeclaration");
  };
  pp$1.checkExport = function(exports, name, pos) {
    if (!exports) {
      return;
    }
    if (has(exports, name)) {
      this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
    }
    exports[name] = true;
  };
  pp$1.checkPatternExport = function(exports, pat) {
    var type = pat.type;
    if (type === "Identifier") {
      this.checkExport(exports, pat.name, pat.start);
    } else if (type === "ObjectPattern") {
      for (var i2 = 0, list = pat.properties; i2 < list.length; i2 += 1) {
        var prop = list[i2];
        this.checkPatternExport(exports, prop);
      }
    } else if (type === "ArrayPattern") {
      for (var i$12 = 0, list$1 = pat.elements; i$12 < list$1.length; i$12 += 1) {
        var elt = list$1[i$12];
        if (elt) {
          this.checkPatternExport(exports, elt);
        }
      }
    } else if (type === "Property") {
      this.checkPatternExport(exports, pat.value);
    } else if (type === "AssignmentPattern") {
      this.checkPatternExport(exports, pat.left);
    } else if (type === "RestElement") {
      this.checkPatternExport(exports, pat.argument);
    } else if (type === "ParenthesizedExpression") {
      this.checkPatternExport(exports, pat.expression);
    }
  };
  pp$1.checkVariableExport = function(exports, decls) {
    if (!exports) {
      return;
    }
    for (var i2 = 0, list = decls; i2 < list.length; i2 += 1) {
      var decl = list[i2];
      this.checkPatternExport(exports, decl.id);
    }
  };
  pp$1.shouldParseExportStatement = function() {
    return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
  };
  pp$1.parseExportSpecifiers = function(exports) {
    var nodes = [], first = true;
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.afterTrailingComma(types.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      var node2 = this.startNode();
      node2.local = this.parseIdent(true);
      node2.exported = this.eatContextual("as") ? this.parseIdent(true) : node2.local;
      this.checkExport(exports, node2.exported.name, node2.exported.start);
      nodes.push(this.finishNode(node2, "ExportSpecifier"));
    }
    return nodes;
  };
  pp$1.parseImport = function(node2) {
    this.next();
    if (this.type === types.string) {
      node2.specifiers = empty;
      node2.source = this.parseExprAtom();
    } else {
      node2.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node2.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
    }
    this.semicolon();
    return this.finishNode(node2, "ImportDeclaration");
  };
  pp$1.parseImportSpecifiers = function() {
    var nodes = [], first = true;
    if (this.type === types.name) {
      var node2 = this.startNode();
      node2.local = this.parseIdent();
      this.checkLValSimple(node2.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node2, "ImportDefaultSpecifier"));
      if (!this.eat(types.comma)) {
        return nodes;
      }
    }
    if (this.type === types.star) {
      var node$1 = this.startNode();
      this.next();
      this.expectContextual("as");
      node$1.local = this.parseIdent();
      this.checkLValSimple(node$1.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
      return nodes;
    }
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.afterTrailingComma(types.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      var node$2 = this.startNode();
      node$2.imported = this.parseIdent(true);
      if (this.eatContextual("as")) {
        node$2.local = this.parseIdent();
      } else {
        this.checkUnreserved(node$2.imported);
        node$2.local = node$2.imported;
      }
      this.checkLValSimple(node$2.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$2, "ImportSpecifier"));
    }
    return nodes;
  };
  pp$1.adaptDirectivePrologue = function(statements) {
    for (var i2 = 0; i2 < statements.length && this.isDirectiveCandidate(statements[i2]); ++i2) {
      statements[i2].directive = statements[i2].expression.raw.slice(1, -1);
    }
  };
  pp$1.isDirectiveCandidate = function(statement) {
    return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
  };
  var pp$2 = Parser.prototype;
  pp$2.toAssignable = function(node2, isBinding, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 6 && node2) {
      switch (node2.type) {
        case "Identifier":
          if (this.inAsync && node2.name === "await") {
            this.raise(node2.start, "Cannot use 'await' as identifier inside an async function");
          }
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          node2.type = "ObjectPattern";
          if (refDestructuringErrors) {
            this.checkPatternErrors(refDestructuringErrors, true);
          }
          for (var i2 = 0, list = node2.properties; i2 < list.length; i2 += 1) {
            var prop = list[i2];
            this.toAssignable(prop, isBinding);
            if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
              this.raise(prop.argument.start, "Unexpected token");
            }
          }
          break;
        case "Property":
          if (node2.kind !== "init") {
            this.raise(node2.key.start, "Object pattern can't contain getter or setter");
          }
          this.toAssignable(node2.value, isBinding);
          break;
        case "ArrayExpression":
          node2.type = "ArrayPattern";
          if (refDestructuringErrors) {
            this.checkPatternErrors(refDestructuringErrors, true);
          }
          this.toAssignableList(node2.elements, isBinding);
          break;
        case "SpreadElement":
          node2.type = "RestElement";
          this.toAssignable(node2.argument, isBinding);
          if (node2.argument.type === "AssignmentPattern") {
            this.raise(node2.argument.start, "Rest elements cannot have a default value");
          }
          break;
        case "AssignmentExpression":
          if (node2.operator !== "=") {
            this.raise(node2.left.end, "Only '=' operator can be used for specifying default value.");
          }
          node2.type = "AssignmentPattern";
          delete node2.operator;
          this.toAssignable(node2.left, isBinding);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(node2.expression, isBinding, refDestructuringErrors);
          break;
        case "ChainExpression":
          this.raiseRecoverable(node2.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!isBinding) {
            break;
          }
        default:
          this.raise(node2.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) {
      this.checkPatternErrors(refDestructuringErrors, true);
    }
    return node2;
  };
  pp$2.toAssignableList = function(exprList, isBinding) {
    var end = exprList.length;
    for (var i2 = 0; i2 < end; i2++) {
      var elt = exprList[i2];
      if (elt) {
        this.toAssignable(elt, isBinding);
      }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
        this.unexpected(last.argument.start);
      }
    }
    return exprList;
  };
  pp$2.parseSpread = function(refDestructuringErrors) {
    var node2 = this.startNode();
    this.next();
    node2.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node2, "SpreadElement");
  };
  pp$2.parseRestBinding = function() {
    var node2 = this.startNode();
    this.next();
    if (this.options.ecmaVersion === 6 && this.type !== types.name) {
      this.unexpected();
    }
    node2.argument = this.parseBindingAtom();
    return this.finishNode(node2, "RestElement");
  };
  pp$2.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
        case types.bracketL:
          var node2 = this.startNode();
          this.next();
          node2.elements = this.parseBindingList(types.bracketR, true, true);
          return this.finishNode(node2, "ArrayPattern");
        case types.braceL:
          return this.parseObj(true);
      }
    }
    return this.parseIdent();
  };
  pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types.comma);
      }
      if (allowEmpty && this.type === types.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      } else if (this.type === types.ellipsis) {
        var rest = this.parseRestBinding();
        this.parseBindingListItem(rest);
        elts.push(rest);
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        this.expect(close);
        break;
      } else {
        var elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        elts.push(elem);
      }
    }
    return elts;
  };
  pp$2.parseBindingListItem = function(param) {
    return param;
  };
  pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) {
      return left;
    }
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.left = left;
    node2.right = this.parseMaybeAssign();
    return this.finishNode(node2, "AssignmentPattern");
  };
  pp$2.checkLValSimple = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0)
      bindingType = BIND_NONE;
    var isBind = bindingType !== BIND_NONE;
    switch (expr.type) {
      case "Identifier":
        if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
          this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
        }
        if (isBind) {
          if (bindingType === BIND_LEXICAL && expr.name === "let") {
            this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
          }
          if (checkClashes) {
            if (has(checkClashes, expr.name)) {
              this.raiseRecoverable(expr.start, "Argument name clash");
            }
            checkClashes[expr.name] = true;
          }
          if (bindingType !== BIND_OUTSIDE) {
            this.declareName(expr.name, bindingType, expr.start);
          }
        }
        break;
      case "ChainExpression":
        this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (isBind) {
          this.raiseRecoverable(expr.start, "Binding member expression");
        }
        break;
      case "ParenthesizedExpression":
        if (isBind) {
          this.raiseRecoverable(expr.start, "Binding parenthesized expression");
        }
        return this.checkLValSimple(expr.expression, bindingType, checkClashes);
      default:
        this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
    }
  };
  pp$2.checkLValPattern = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0)
      bindingType = BIND_NONE;
    switch (expr.type) {
      case "ObjectPattern":
        for (var i2 = 0, list = expr.properties; i2 < list.length; i2 += 1) {
          var prop = list[i2];
          this.checkLValInnerPattern(prop, bindingType, checkClashes);
        }
        break;
      case "ArrayPattern":
        for (var i$12 = 0, list$1 = expr.elements; i$12 < list$1.length; i$12 += 1) {
          var elem = list$1[i$12];
          if (elem) {
            this.checkLValInnerPattern(elem, bindingType, checkClashes);
          }
        }
        break;
      default:
        this.checkLValSimple(expr, bindingType, checkClashes);
    }
  };
  pp$2.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0)
      bindingType = BIND_NONE;
    switch (expr.type) {
      case "Property":
        this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
        break;
      case "AssignmentPattern":
        this.checkLValPattern(expr.left, bindingType, checkClashes);
        break;
      case "RestElement":
        this.checkLValPattern(expr.argument, bindingType, checkClashes);
        break;
      default:
        this.checkLValPattern(expr, bindingType, checkClashes);
    }
  };
  var pp$3 = Parser.prototype;
  pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
      return;
    }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
      return;
    }
    var key = prop.key;
    var name;
    switch (key.type) {
      case "Identifier":
        name = key.name;
        break;
      case "Literal":
        name = String(key.value);
        break;
      default:
        return;
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors) {
            if (refDestructuringErrors.doubleProto < 0) {
              refDestructuringErrors.doubleProto = key.start;
            }
          } else {
            this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
          }
        }
        propHash.proto = true;
      }
      return;
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition) {
        this.raiseRecoverable(key.start, "Redefinition of property");
      }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };
  pp$3.parseExpression = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
    if (this.type === types.comma) {
      var node2 = this.startNodeAt(startPos, startLoc);
      node2.expressions = [expr];
      while (this.eat(types.comma)) {
        node2.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
      }
      return this.finishNode(node2, "SequenceExpression");
    }
    return expr;
  };
  pp$3.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) {
        return this.parseYield(forInit);
      } else {
        this.exprAllowed = false;
      }
    }
    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors();
      ownDestructuringErrors = true;
    }
    var startPos = this.start, startLoc = this.startLoc;
    if (this.type === types.parenL || this.type === types.name) {
      this.potentialArrowAt = this.start;
      this.potentialArrowInForAwait = forInit === "await";
    }
    var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startPos, startLoc);
    }
    if (this.type.isAssign) {
      var node2 = this.startNodeAt(startPos, startLoc);
      node2.operator = this.value;
      if (this.type === types.eq) {
        left = this.toAssignable(left, false, refDestructuringErrors);
      }
      if (!ownDestructuringErrors) {
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
      }
      if (refDestructuringErrors.shorthandAssign >= left.start) {
        refDestructuringErrors.shorthandAssign = -1;
      }
      if (this.type === types.eq) {
        this.checkLValPattern(left);
      } else {
        this.checkLValSimple(left);
      }
      node2.left = left;
      this.next();
      node2.right = this.parseMaybeAssign(forInit);
      return this.finishNode(node2, "AssignmentExpression");
    } else {
      if (ownDestructuringErrors) {
        this.checkExpressionErrors(refDestructuringErrors, true);
      }
    }
    if (oldParenAssign > -1) {
      refDestructuringErrors.parenthesizedAssign = oldParenAssign;
    }
    if (oldTrailingComma > -1) {
      refDestructuringErrors.trailingComma = oldTrailingComma;
    }
    return left;
  };
  pp$3.parseMaybeConditional = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprOps(forInit, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    if (this.eat(types.question)) {
      var node2 = this.startNodeAt(startPos, startLoc);
      node2.test = expr;
      node2.consequent = this.parseMaybeAssign();
      this.expect(types.colon);
      node2.alternate = this.parseMaybeAssign(forInit);
      return this.finishNode(node2, "ConditionalExpression");
    }
    return expr;
  };
  pp$3.parseExprOps = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
  };
  pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
    var prec = this.type.binop;
    if (prec != null && (!forInit || this.type !== types._in)) {
      if (prec > minPrec) {
        var logical = this.type === types.logicalOR || this.type === types.logicalAND;
        var coalesce = this.type === types.coalesce;
        if (coalesce) {
          prec = types.logicalAND.binop;
        }
        var op = this.value;
        this.next();
        var startPos = this.start, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, forInit);
        var node2 = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
        if (logical && this.type === types.coalesce || coalesce && (this.type === types.logicalOR || this.type === types.logicalAND)) {
          this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        }
        return this.parseExprOp(node2, leftStartPos, leftStartLoc, minPrec, forInit);
      }
    }
    return left;
  };
  pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.left = left;
    node2.operator = op;
    node2.right = right;
    return this.finishNode(node2, logical ? "LogicalExpression" : "BinaryExpression");
  };
  pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec) {
    var startPos = this.start, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && this.canAwait) {
      expr = this.parseAwait();
      sawUnary = true;
    } else if (this.type.prefix) {
      var node2 = this.startNode(), update = this.type === types.incDec;
      node2.operator = this.value;
      node2.prefix = true;
      this.next();
      node2.argument = this.parseMaybeUnary(null, true, update);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) {
        this.checkLValSimple(node2.argument);
      } else if (this.strict && node2.operator === "delete" && node2.argument.type === "Identifier") {
        this.raiseRecoverable(node2.start, "Deleting local variable in strict mode");
      } else if (node2.operator === "delete" && isPrivateFieldAccess(node2.argument)) {
        this.raiseRecoverable(node2.start, "Private fields can not be deleted");
      } else {
        sawUnary = true;
      }
      expr = this.finishNode(node2, update ? "UpdateExpression" : "UnaryExpression");
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors);
      if (this.checkExpressionErrors(refDestructuringErrors)) {
        return expr;
      }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.operator = this.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this.checkLValSimple(expr);
        this.next();
        expr = this.finishNode(node$1, "UpdateExpression");
      }
    }
    if (!incDec && this.eat(types.starstar)) {
      if (sawUnary) {
        this.unexpected(this.lastTokStart);
      } else {
        return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false);
      }
    } else {
      return expr;
    }
  };
  function isPrivateFieldAccess(node2) {
    return node2.type === "MemberExpression" && node2.property.type === "PrivateIdentifier" || node2.type === "ChainExpression" && isPrivateFieldAccess(node2.expression);
  }
  pp$3.parseExprSubscripts = function(refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors);
    if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
      return expr;
    }
    var result = this.parseSubscripts(expr, startPos, startLoc);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) {
        refDestructuringErrors.parenthesizedAssign = -1;
      }
      if (refDestructuringErrors.parenthesizedBind >= result.start) {
        refDestructuringErrors.parenthesizedBind = -1;
      }
      if (refDestructuringErrors.trailingComma >= result.start) {
        refDestructuringErrors.trailingComma = -1;
      }
    }
    return result;
  };
  pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
    var optionalChained = false;
    while (true) {
      var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);
      if (element.optional) {
        optionalChained = true;
      }
      if (element === base || element.type === "ArrowFunctionExpression") {
        if (optionalChained) {
          var chainNode = this.startNodeAt(startPos, startLoc);
          chainNode.expression = element;
          element = this.finishNode(chainNode, "ChainExpression");
        }
        return element;
      }
      base = element;
    }
  };
  pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
    var optionalSupported = this.options.ecmaVersion >= 11;
    var optional = optionalSupported && this.eat(types.questionDot);
    if (noCalls && optional) {
      this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
    }
    var computed = this.eat(types.bracketL);
    if (computed || optional && this.type !== types.parenL && this.type !== types.backQuote || this.eat(types.dot)) {
      var node2 = this.startNodeAt(startPos, startLoc);
      node2.object = base;
      if (computed) {
        node2.property = this.parseExpression();
        this.expect(types.bracketR);
      } else if (this.type === types.privateId && base.type !== "Super") {
        node2.property = this.parsePrivateIdent();
      } else {
        node2.property = this.parseIdent(this.options.allowReserved !== "never");
      }
      node2.computed = !!computed;
      if (optionalSupported) {
        node2.optional = optional;
      }
      base = this.finishNode(node2, "MemberExpression");
    } else if (!noCalls && this.eat(types.parenL)) {
      var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        if (this.awaitIdentPos > 0) {
          this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
        }
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true);
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      base = this.finishNode(node$1, "CallExpression");
    } else if (this.type === types.backQuote) {
      if (optional || optionalChained) {
        this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      }
      var node$2 = this.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this.parseTemplate({ isTagged: true });
      base = this.finishNode(node$2, "TaggedTemplateExpression");
    }
    return base;
  };
  pp$3.parseExprAtom = function(refDestructuringErrors) {
    if (this.type === types.slash) {
      this.readRegexp();
    }
    var node2, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
      case types._super:
        if (!this.allowSuper) {
          this.raise(this.start, "'super' keyword outside a method");
        }
        node2 = this.startNode();
        this.next();
        if (this.type === types.parenL && !this.allowDirectSuper) {
          this.raise(node2.start, "super() call outside constructor of a subclass");
        }
        if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL) {
          this.unexpected();
        }
        return this.finishNode(node2, "Super");
      case types._this:
        node2 = this.startNode();
        this.next();
        return this.finishNode(node2, "ThisExpression");
      case types.name:
        var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
        var id2 = this.parseIdent(false);
        if (this.options.ecmaVersion >= 8 && !containsEsc && id2.name === "async" && !this.canInsertSemicolon() && this.eat(types._function)) {
          return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true);
        }
        if (canBeArrow && !this.canInsertSemicolon()) {
          if (this.eat(types.arrow)) {
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id2], false);
          }
          if (this.options.ecmaVersion >= 8 && id2.name === "async" && this.type === types.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
            id2 = this.parseIdent(false);
            if (this.canInsertSemicolon() || !this.eat(types.arrow)) {
              this.unexpected();
            }
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id2], true);
          }
        }
        return id2;
      case types.regexp:
        var value2 = this.value;
        node2 = this.parseLiteral(value2.value);
        node2.regex = { pattern: value2.pattern, flags: value2.flags };
        return node2;
      case types.num:
      case types.string:
        return this.parseLiteral(this.value);
      case types._null:
      case types._true:
      case types._false:
        node2 = this.startNode();
        node2.value = this.type === types._null ? null : this.type === types._true;
        node2.raw = this.type.keyword;
        this.next();
        return this.finishNode(node2, "Literal");
      case types.parenL:
        var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
        if (refDestructuringErrors) {
          if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
            refDestructuringErrors.parenthesizedAssign = start;
          }
          if (refDestructuringErrors.parenthesizedBind < 0) {
            refDestructuringErrors.parenthesizedBind = start;
          }
        }
        return expr;
      case types.bracketL:
        node2 = this.startNode();
        this.next();
        node2.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
        return this.finishNode(node2, "ArrayExpression");
      case types.braceL:
        return this.parseObj(false, refDestructuringErrors);
      case types._function:
        node2 = this.startNode();
        this.next();
        return this.parseFunction(node2, 0);
      case types._class:
        return this.parseClass(this.startNode(), false);
      case types._new:
        return this.parseNew();
      case types.backQuote:
        return this.parseTemplate();
      case types._import:
        if (this.options.ecmaVersion >= 11) {
          return this.parseExprImport();
        } else {
          return this.unexpected();
        }
      default:
        this.unexpected();
    }
  };
  pp$3.parseExprImport = function() {
    var node2 = this.startNode();
    if (this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword import");
    }
    var meta = this.parseIdent(true);
    switch (this.type) {
      case types.parenL:
        return this.parseDynamicImport(node2);
      case types.dot:
        node2.meta = meta;
        return this.parseImportMeta(node2);
      default:
        this.unexpected();
    }
  };
  pp$3.parseDynamicImport = function(node2) {
    this.next();
    node2.source = this.parseMaybeAssign();
    if (!this.eat(types.parenR)) {
      var errorPos = this.start;
      if (this.eat(types.comma) && this.eat(types.parenR)) {
        this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
      } else {
        this.unexpected(errorPos);
      }
    }
    return this.finishNode(node2, "ImportExpression");
  };
  pp$3.parseImportMeta = function(node2) {
    this.next();
    var containsEsc = this.containsEsc;
    node2.property = this.parseIdent(true);
    if (node2.property.name !== "meta") {
      this.raiseRecoverable(node2.property.start, "The only valid meta property for import is 'import.meta'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node2.start, "'import.meta' must not contain escaped characters");
    }
    if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
      this.raiseRecoverable(node2.start, "Cannot use 'import.meta' outside a module");
    }
    return this.finishNode(node2, "MetaProperty");
  };
  pp$3.parseLiteral = function(value2) {
    var node2 = this.startNode();
    node2.value = value2;
    node2.raw = this.input.slice(this.start, this.end);
    if (node2.raw.charCodeAt(node2.raw.length - 1) === 110) {
      node2.bigint = node2.raw.slice(0, -1).replace(/_/g, "");
    }
    this.next();
    return this.finishNode(node2, "Literal");
  };
  pp$3.parseParenExpression = function() {
    this.expect(types.parenL);
    var val = this.parseExpression();
    this.expect(types.parenR);
    return val;
  };
  pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
    var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();
      var innerStartPos = this.start, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      while (this.type !== types.parenR) {
        first ? first = false : this.expect(types.comma);
        if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
          lastIsComma = true;
          break;
        } else if (this.type === types.ellipsis) {
          spreadStart = this.start;
          exprList.push(this.parseParenItem(this.parseRestBinding()));
          if (this.type === types.comma) {
            this.raise(this.start, "Comma is not permitted after the rest element");
          }
          break;
        } else {
          exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
        }
      }
      var innerEndPos = this.start, innerEndLoc = this.startLoc;
      this.expect(types.parenR);
      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList);
      }
      if (!exprList.length || lastIsComma) {
        this.unexpected(this.lastTokStart);
      }
      if (spreadStart) {
        this.unexpected(spreadStart);
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }
    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression");
    } else {
      return val;
    }
  };
  pp$3.parseParenItem = function(item) {
    return item;
  };
  pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
  };
  var empty$1 = [];
  pp$3.parseNew = function() {
    if (this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword new");
    }
    var node2 = this.startNode();
    var meta = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
      node2.meta = meta;
      var containsEsc = this.containsEsc;
      node2.property = this.parseIdent(true);
      if (node2.property.name !== "target") {
        this.raiseRecoverable(node2.property.start, "The only valid meta property for new is 'new.target'");
      }
      if (containsEsc) {
        this.raiseRecoverable(node2.start, "'new.target' must not contain escaped characters");
      }
      if (!this.inNonArrowFunction) {
        this.raiseRecoverable(node2.start, "'new.target' can only be used in functions");
      }
      return this.finishNode(node2, "MetaProperty");
    }
    var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
    node2.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    if (isImport && node2.callee.type === "ImportExpression") {
      this.raise(startPos, "Cannot use new with import()");
    }
    if (this.eat(types.parenL)) {
      node2.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false);
    } else {
      node2.arguments = empty$1;
    }
    return this.finishNode(node2, "NewExpression");
  };
  pp$3.parseTemplateElement = function(ref2) {
    var isTagged = ref2.isTagged;
    var elem = this.startNode();
    if (this.type === types.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value,
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types.backQuote;
    return this.finishNode(elem, "TemplateElement");
  };
  pp$3.parseTemplate = function(ref2) {
    if (ref2 === void 0)
      ref2 = {};
    var isTagged = ref2.isTagged;
    if (isTagged === void 0)
      isTagged = false;
    var node2 = this.startNode();
    this.next();
    node2.expressions = [];
    var curElt = this.parseTemplateElement({ isTagged });
    node2.quasis = [curElt];
    while (!curElt.tail) {
      if (this.type === types.eof) {
        this.raise(this.pos, "Unterminated template literal");
      }
      this.expect(types.dollarBraceL);
      node2.expressions.push(this.parseExpression());
      this.expect(types.braceR);
      node2.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
    }
    this.next();
    return this.finishNode(node2, "TemplateLiteral");
  };
  pp$3.isAsyncProp = function(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  };
  pp$3.parseObj = function(isPattern, refDestructuringErrors) {
    var node2 = this.startNode(), first = true, propHash = {};
    node2.properties = [];
    this.next();
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      var prop = this.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) {
        this.checkPropClash(prop, propHash, refDestructuringErrors);
      }
      node2.properties.push(prop);
    }
    return this.finishNode(node2, isPattern ? "ObjectPattern" : "ObjectExpression");
  };
  pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement");
      }
      if (this.type === types.parenL && refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0) {
          refDestructuringErrors.parenthesizedAssign = this.start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = this.start;
        }
      }
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      return this.finishNode(prop, "SpreadElement");
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern) {
        isGenerator = this.eat(types.star);
      }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
      this.parsePropertyName(prop, refDestructuringErrors);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property");
  };
  pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types.colon) {
      this.unexpected();
    }
    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
      if (isPattern) {
        this.unexpected();
      }
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
      if (isGenerator || isAsync) {
        this.unexpected();
      }
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      prop.value = this.parseMethod(false);
      var paramCount = prop.kind === "get" ? 0 : 1;
      if (prop.value.params.length !== paramCount) {
        var start = prop.value.start;
        if (prop.kind === "get") {
          this.raiseRecoverable(start, "getter should have no params");
        } else {
          this.raiseRecoverable(start, "setter should have exactly one param");
        }
      } else {
        if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
          this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
        }
      }
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      if (isGenerator || isAsync) {
        this.unexpected();
      }
      this.checkUnreserved(prop.key);
      if (prop.key.name === "await" && !this.awaitIdentPos) {
        this.awaitIdentPos = startPos;
      }
      prop.kind = "init";
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else if (this.type === types.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0) {
          refDestructuringErrors.shorthandAssign = this.start;
        }
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else {
        prop.value = this.copyNode(prop.key);
      }
      prop.shorthand = true;
    } else {
      this.unexpected();
    }
  };
  pp$3.parsePropertyName = function(prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types.bracketR);
        return prop.key;
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
  };
  pp$3.initFunction = function(node2) {
    node2.id = null;
    if (this.options.ecmaVersion >= 6) {
      node2.generator = node2.expression = false;
    }
    if (this.options.ecmaVersion >= 8) {
      node2.async = false;
    }
  };
  pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
    var node2 = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.initFunction(node2);
    if (this.options.ecmaVersion >= 6) {
      node2.generator = isGenerator;
    }
    if (this.options.ecmaVersion >= 8) {
      node2.async = !!isAsync;
    }
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(isAsync, node2.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
    this.expect(types.parenL);
    node2.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node2, false, true);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node2, "FunctionExpression");
  };
  pp$3.parseArrowExpression = function(node2, params, isAsync) {
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node2);
    if (this.options.ecmaVersion >= 8) {
      node2.async = !!isAsync;
    }
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    node2.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node2, true, false);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node2, "ArrowFunctionExpression");
  };
  pp$3.parseFunctionBody = function(node2, isArrowFunction, isMethod) {
    var isExpression = isArrowFunction && this.type !== types.braceL;
    var oldStrict = this.strict, useStrict = false;
    if (isExpression) {
      node2.body = this.parseMaybeAssign();
      node2.expression = true;
      this.checkParams(node2, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node2.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        if (useStrict && nonSimple) {
          this.raiseRecoverable(node2.start, "Illegal 'use strict' directive in function with non-simple parameter list");
        }
      }
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) {
        this.strict = true;
      }
      this.checkParams(node2, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node2.params));
      if (this.strict && node2.id) {
        this.checkLValSimple(node2.id, BIND_OUTSIDE);
      }
      node2.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
      node2.expression = false;
      this.adaptDirectivePrologue(node2.body.body);
      this.labels = oldLabels;
    }
    this.exitScope();
  };
  pp$3.isSimpleParamList = function(params) {
    for (var i2 = 0, list = params; i2 < list.length; i2 += 1) {
      var param = list[i2];
      if (param.type !== "Identifier") {
        return false;
      }
    }
    return true;
  };
  pp$3.checkParams = function(node2, allowDuplicates) {
    var nameHash = /* @__PURE__ */ Object.create(null);
    for (var i2 = 0, list = node2.params; i2 < list.length; i2 += 1) {
      var param = list[i2];
      this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
    }
  };
  pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (!first) {
        this.expect(types.comma);
        if (allowTrailingComma && this.afterTrailingComma(close)) {
          break;
        }
      } else {
        first = false;
      }
      var elt = void 0;
      if (allowEmpty && this.type === types.comma) {
        elt = null;
      } else if (this.type === types.ellipsis) {
        elt = this.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0) {
          refDestructuringErrors.trailingComma = this.start;
        }
      } else {
        elt = this.parseMaybeAssign(false, refDestructuringErrors);
      }
      elts.push(elt);
    }
    return elts;
  };
  pp$3.checkUnreserved = function(ref2) {
    var start = ref2.start;
    var end = ref2.end;
    var name = ref2.name;
    if (this.inGenerator && name === "yield") {
      this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
    }
    if (this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
    }
    if (this.currentThisScope().inClassFieldInit && name === "arguments") {
      this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
    }
    if (this.keywords.test(name)) {
      this.raise(start, "Unexpected keyword '" + name + "'");
    }
    if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
      return;
    }
    var re2 = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re2.test(name)) {
      if (!this.inAsync && name === "await") {
        this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
      }
      this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
    }
  };
  pp$3.parseIdent = function(liberal, isBinding) {
    var node2 = this.startNode();
    if (this.type === types.name) {
      node2.name = this.value;
    } else if (this.type.keyword) {
      node2.name = this.type.keyword;
      if ((node2.name === "class" || node2.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
    this.next(!!liberal);
    this.finishNode(node2, "Identifier");
    if (!liberal) {
      this.checkUnreserved(node2);
      if (node2.name === "await" && !this.awaitIdentPos) {
        this.awaitIdentPos = node2.start;
      }
    }
    return node2;
  };
  pp$3.parsePrivateIdent = function() {
    var node2 = this.startNode();
    if (this.type === types.privateId) {
      node2.name = this.value;
    } else {
      this.unexpected();
    }
    this.next();
    this.finishNode(node2, "PrivateIdentifier");
    if (this.privateNameStack.length === 0) {
      this.raise(node2.start, "Private field '#" + node2.name + "' must be declared in an enclosing class");
    } else {
      this.privateNameStack[this.privateNameStack.length - 1].used.push(node2);
    }
    return node2;
  };
  pp$3.parseYield = function(forInit) {
    if (!this.yieldPos) {
      this.yieldPos = this.start;
    }
    var node2 = this.startNode();
    this.next();
    if (this.type === types.semi || this.canInsertSemicolon() || this.type !== types.star && !this.type.startsExpr) {
      node2.delegate = false;
      node2.argument = null;
    } else {
      node2.delegate = this.eat(types.star);
      node2.argument = this.parseMaybeAssign(forInit);
    }
    return this.finishNode(node2, "YieldExpression");
  };
  pp$3.parseAwait = function() {
    if (!this.awaitPos) {
      this.awaitPos = this.start;
    }
    var node2 = this.startNode();
    this.next();
    node2.argument = this.parseMaybeUnary(null, true);
    return this.finishNode(node2, "AwaitExpression");
  };
  var pp$4 = Parser.prototype;
  pp$4.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos;
    err.loc = loc;
    err.raisedAt = this.pos;
    throw err;
  };
  pp$4.raiseRecoverable = pp$4.raise;
  pp$4.curPosition = function() {
    if (this.options.locations) {
      return new Position(this.curLine, this.pos - this.lineStart);
    }
  };
  var pp$5 = Parser.prototype;
  var Scope = function Scope2(flags) {
    this.flags = flags;
    this.var = [];
    this.lexical = [];
    this.functions = [];
    this.inClassFieldInit = false;
  };
  pp$5.enterScope = function(flags) {
    this.scopeStack.push(new Scope(flags));
  };
  pp$5.exitScope = function() {
    this.scopeStack.pop();
  };
  pp$5.treatFunctionsAsVarInScope = function(scope2) {
    return scope2.flags & SCOPE_FUNCTION || !this.inModule && scope2.flags & SCOPE_TOP;
  };
  pp$5.declareName = function(name, bindingType, pos) {
    var redeclared = false;
    if (bindingType === BIND_LEXICAL) {
      var scope2 = this.currentScope();
      redeclared = scope2.lexical.indexOf(name) > -1 || scope2.functions.indexOf(name) > -1 || scope2.var.indexOf(name) > -1;
      scope2.lexical.push(name);
      if (this.inModule && scope2.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
    } else if (bindingType === BIND_SIMPLE_CATCH) {
      var scope$1 = this.currentScope();
      scope$1.lexical.push(name);
    } else if (bindingType === BIND_FUNCTION) {
      var scope$2 = this.currentScope();
      if (this.treatFunctionsAsVar) {
        redeclared = scope$2.lexical.indexOf(name) > -1;
      } else {
        redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
      }
      scope$2.functions.push(name);
    } else {
      for (var i2 = this.scopeStack.length - 1; i2 >= 0; --i2) {
        var scope$3 = this.scopeStack[i2];
        if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
          redeclared = true;
          break;
        }
        scope$3.var.push(name);
        if (this.inModule && scope$3.flags & SCOPE_TOP) {
          delete this.undefinedExports[name];
        }
        if (scope$3.flags & SCOPE_VAR) {
          break;
        }
      }
    }
    if (redeclared) {
      this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
    }
  };
  pp$5.checkLocalExport = function(id2) {
    if (this.scopeStack[0].lexical.indexOf(id2.name) === -1 && this.scopeStack[0].var.indexOf(id2.name) === -1) {
      this.undefinedExports[id2.name] = id2;
    }
  };
  pp$5.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1];
  };
  pp$5.currentVarScope = function() {
    for (var i2 = this.scopeStack.length - 1; ; i2--) {
      var scope2 = this.scopeStack[i2];
      if (scope2.flags & SCOPE_VAR) {
        return scope2;
      }
    }
  };
  pp$5.currentThisScope = function() {
    for (var i2 = this.scopeStack.length - 1; ; i2--) {
      var scope2 = this.scopeStack[i2];
      if (scope2.flags & SCOPE_VAR && !(scope2.flags & SCOPE_ARROW)) {
        return scope2;
      }
    }
  };
  var Node = function Node2(parser2, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser2.options.locations) {
      this.loc = new SourceLocation(parser2, loc);
    }
    if (parser2.options.directSourceFile) {
      this.sourceFile = parser2.options.directSourceFile;
    }
    if (parser2.options.ranges) {
      this.range = [pos, 0];
    }
  };
  var pp$6 = Parser.prototype;
  pp$6.startNode = function() {
    return new Node(this, this.start, this.startLoc);
  };
  pp$6.startNodeAt = function(pos, loc) {
    return new Node(this, pos, loc);
  };
  function finishNodeAt(node2, type, pos, loc) {
    node2.type = type;
    node2.end = pos;
    if (this.options.locations) {
      node2.loc.end = loc;
    }
    if (this.options.ranges) {
      node2.range[1] = pos;
    }
    return node2;
  }
  pp$6.finishNode = function(node2, type) {
    return finishNodeAt.call(this, node2, type, this.lastTokEnd, this.lastTokEndLoc);
  };
  pp$6.finishNodeAt = function(node2, type, pos, loc) {
    return finishNodeAt.call(this, node2, type, pos, loc);
  };
  pp$6.copyNode = function(node2) {
    var newNode = new Node(this, node2.start, this.startLoc);
    for (var prop in node2) {
      newNode[prop] = node2[prop];
    }
    return newNode;
  };
  var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };
  var types$1 = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function(p) {
      return p.tryReadTemplateToken();
    }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };
  var pp$7 = Parser.prototype;
  pp$7.initialContext = function() {
    return [types$1.b_stat];
  };
  pp$7.braceIsBlock = function(prevType) {
    var parent = this.curContext();
    if (parent === types$1.f_expr || parent === types$1.f_stat) {
      return true;
    }
    if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr)) {
      return !parent.isExpr;
    }
    if (prevType === types._return || prevType === types.name && this.exprAllowed) {
      return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    }
    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
      return true;
    }
    if (prevType === types.braceL) {
      return parent === types$1.b_stat;
    }
    if (prevType === types._var || prevType === types._const || prevType === types.name) {
      return false;
    }
    return !this.exprAllowed;
  };
  pp$7.inGeneratorContext = function() {
    for (var i2 = this.context.length - 1; i2 >= 1; i2--) {
      var context = this.context[i2];
      if (context.token === "function") {
        return context.generator;
      }
    }
    return false;
  };
  pp$7.updateContext = function(prevType) {
    var update, type = this.type;
    if (type.keyword && prevType === types.dot) {
      this.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.exprAllowed = type.beforeExpr;
    }
  };
  types.parenR.updateContext = types.braceR.updateContext = function() {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return;
    }
    var out = this.context.pop();
    if (out === types$1.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };
  types.braceL.updateContext = function(prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
    this.exprAllowed = true;
  };
  types.dollarBraceL.updateContext = function() {
    this.context.push(types$1.b_tmpl);
    this.exprAllowed = true;
  };
  types.parenL.updateContext = function(prevType) {
    var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
    this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
    this.exprAllowed = true;
  };
  types.incDec.updateContext = function() {
  };
  types._function.updateContext = types._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types._else && !(prevType === types.semi && this.curContext() !== types$1.p_stat) && !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
      this.context.push(types$1.f_expr);
    } else {
      this.context.push(types$1.f_stat);
    }
    this.exprAllowed = false;
  };
  types.backQuote.updateContext = function() {
    if (this.curContext() === types$1.q_tmpl) {
      this.context.pop();
    } else {
      this.context.push(types$1.q_tmpl);
    }
    this.exprAllowed = false;
  };
  types.star.updateContext = function(prevType) {
    if (prevType === types._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types$1.f_expr) {
        this.context[index] = types$1.f_expr_gen;
      } else {
        this.context[index] = types$1.f_gen;
      }
    }
    this.exprAllowed = true;
  };
  types.name.updateContext = function(prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
      if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
        allowed = true;
      }
    }
    this.exprAllowed = allowed;
  };
  var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
  var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
  var ecma11BinaryProperties = ecma10BinaryProperties;
  var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
  var unicodeBinaryProperties = {
    9: ecma9BinaryProperties,
    10: ecma10BinaryProperties,
    11: ecma11BinaryProperties,
    12: ecma12BinaryProperties
  };
  var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
  var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
  var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
  var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
  var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
  var unicodeScriptValues = {
    9: ecma9ScriptValues,
    10: ecma10ScriptValues,
    11: ecma11ScriptValues,
    12: ecma12ScriptValues
  };
  var data = {};
  function buildUnicodeData(ecmaVersion) {
    var d = data[ecmaVersion] = {
      binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
      nonBinary: {
        General_Category: wordsRegexp(unicodeGeneralCategoryValues),
        Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
      }
    };
    d.nonBinary.Script_Extensions = d.nonBinary.Script;
    d.nonBinary.gc = d.nonBinary.General_Category;
    d.nonBinary.sc = d.nonBinary.Script;
    d.nonBinary.scx = d.nonBinary.Script_Extensions;
  }
  buildUnicodeData(9);
  buildUnicodeData(10);
  buildUnicodeData(11);
  buildUnicodeData(12);
  var pp$8 = Parser.prototype;
  var RegExpValidationState = function RegExpValidationState2(parser2) {
    this.parser = parser2;
    this.validFlags = "gim" + (parser2.options.ecmaVersion >= 6 ? "uy" : "") + (parser2.options.ecmaVersion >= 9 ? "s" : "") + (parser2.options.ecmaVersion >= 13 ? "d" : "");
    this.unicodeProperties = data[parser2.options.ecmaVersion >= 12 ? 12 : parser2.options.ecmaVersion];
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = [];
    this.backReferenceNames = [];
  };
  RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  };
  RegExpValidationState.prototype.raise = function raise(message) {
    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
  };
  RegExpValidationState.prototype.at = function at2(i2, forceU) {
    if (forceU === void 0)
      forceU = false;
    var s2 = this.source;
    var l = s2.length;
    if (i2 >= l) {
      return -1;
    }
    var c = s2.charCodeAt(i2);
    if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l) {
      return c;
    }
    var next = s2.charCodeAt(i2 + 1);
    return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
  };
  RegExpValidationState.prototype.nextIndex = function nextIndex(i2, forceU) {
    if (forceU === void 0)
      forceU = false;
    var s2 = this.source;
    var l = s2.length;
    if (i2 >= l) {
      return l;
    }
    var c = s2.charCodeAt(i2), next;
    if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l || (next = s2.charCodeAt(i2 + 1)) < 56320 || next > 57343) {
      return i2 + 1;
    }
    return i2 + 2;
  };
  RegExpValidationState.prototype.current = function current(forceU) {
    if (forceU === void 0)
      forceU = false;
    return this.at(this.pos, forceU);
  };
  RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
    if (forceU === void 0)
      forceU = false;
    return this.at(this.nextIndex(this.pos, forceU), forceU);
  };
  RegExpValidationState.prototype.advance = function advance(forceU) {
    if (forceU === void 0)
      forceU = false;
    this.pos = this.nextIndex(this.pos, forceU);
  };
  RegExpValidationState.prototype.eat = function eat(ch, forceU) {
    if (forceU === void 0)
      forceU = false;
    if (this.current(forceU) === ch) {
      this.advance(forceU);
      return true;
    }
    return false;
  };
  function codePointToString(ch) {
    if (ch <= 65535) {
      return String.fromCharCode(ch);
    }
    ch -= 65536;
    return String.fromCharCode((ch >> 10) + 55296, (ch & 1023) + 56320);
  }
  pp$8.validateRegExpFlags = function(state) {
    var validFlags = state.validFlags;
    var flags = state.flags;
    for (var i2 = 0; i2 < flags.length; i2++) {
      var flag = flags.charAt(i2);
      if (validFlags.indexOf(flag) === -1) {
        this.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i2 + 1) > -1) {
        this.raise(state.start, "Duplicate regular expression flag");
      }
    }
  };
  pp$8.validateRegExpPattern = function(state) {
    this.regexp_pattern(state);
    if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };
  pp$8.regexp_pattern = function(state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames.length = 0;
    state.backReferenceNames.length = 0;
    this.regexp_disjunction(state);
    if (state.pos !== state.source.length) {
      if (state.eat(41)) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(93) || state.eat(125)) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i2 = 0, list = state.backReferenceNames; i2 < list.length; i2 += 1) {
      var name = list[i2];
      if (state.groupNames.indexOf(name) === -1) {
        state.raise("Invalid named capture referenced");
      }
    }
  };
  pp$8.regexp_disjunction = function(state) {
    this.regexp_alternative(state);
    while (state.eat(124)) {
      this.regexp_alternative(state);
    }
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(123)) {
      state.raise("Lone quantifier brackets");
    }
  };
  pp$8.regexp_alternative = function(state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
    }
  };
  pp$8.regexp_eatTerm = function(state) {
    if (this.regexp_eatAssertion(state)) {
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true;
    }
    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true;
    }
    return false;
  };
  pp$8.regexp_eatAssertion = function(state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;
    if (state.eat(94) || state.eat(36)) {
      return true;
    }
    if (state.eat(92)) {
      if (state.eat(66) || state.eat(98)) {
        return true;
      }
      state.pos = start;
    }
    if (state.eat(40) && state.eat(63)) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(60);
      }
      if (state.eat(61) || state.eat(33)) {
        this.regexp_disjunction(state);
        if (!state.eat(41)) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true;
      }
    }
    state.pos = start;
    return false;
  };
  pp$8.regexp_eatQuantifier = function(state, noError) {
    if (noError === void 0)
      noError = false;
    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(63);
      return true;
    }
    return false;
  };
  pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
    return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
  };
  pp$8.regexp_eatBracedQuantifier = function(state, noError) {
    var start = state.pos;
    if (state.eat(123)) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(125)) {
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true;
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatAtom = function(state) {
    return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
  };
  pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
    var start = state.pos;
    if (state.eat(92)) {
      if (this.regexp_eatAtomEscape(state)) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatUncapturingGroup = function(state) {
    var start = state.pos;
    if (state.eat(40)) {
      if (state.eat(63) && state.eat(58)) {
        this.regexp_disjunction(state);
        if (state.eat(41)) {
          return true;
        }
        state.raise("Unterminated group");
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatCapturingGroup = function(state) {
    if (state.eat(40)) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 63) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(41)) {
        state.numCapturingParens += 1;
        return true;
      }
      state.raise("Unterminated group");
    }
    return false;
  };
  pp$8.regexp_eatExtendedAtom = function(state) {
    return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
  };
  pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false;
  };
  pp$8.regexp_eatSyntaxCharacter = function(state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  function isSyntaxCharacter(ch) {
    return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
  }
  pp$8.regexp_eatPatternCharacters = function(state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start;
  };
  pp$8.regexp_eatExtendedPatternCharacter = function(state) {
    var ch = state.current();
    if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_groupSpecifier = function(state) {
    if (state.eat(63)) {
      if (this.regexp_eatGroupName(state)) {
        if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
          state.raise("Duplicate capture group name");
        }
        state.groupNames.push(state.lastStringValue);
        return;
      }
      state.raise("Invalid group");
    }
  };
  pp$8.regexp_eatGroupName = function(state) {
    state.lastStringValue = "";
    if (state.eat(60)) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
        return true;
      }
      state.raise("Invalid capture group name");
    }
    return false;
  };
  pp$8.regexp_eatRegExpIdentifierName = function(state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
      }
      return true;
    }
    return false;
  };
  pp$8.regexp_eatRegExpIdentifierStart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);
    if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true;
    }
    state.pos = start;
    return false;
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
  }
  pp$8.regexp_eatRegExpIdentifierPart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);
    if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true;
    }
    state.pos = start;
    return false;
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
  }
  pp$8.regexp_eatAtomEscape = function(state) {
    if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
      return true;
    }
    if (state.switchU) {
      if (state.current() === 99) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false;
  };
  pp$8.regexp_eatBackReference = function(state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true;
      }
      if (n <= state.numCapturingParens) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatKGroupName = function(state) {
    if (state.eat(107)) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true;
      }
      state.raise("Invalid named reference");
    }
    return false;
  };
  pp$8.regexp_eatCharacterEscape = function(state) {
    return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
  };
  pp$8.regexp_eatCControlLetter = function(state) {
    var start = state.pos;
    if (state.eat(99)) {
      if (this.regexp_eatControlLetter(state)) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatZero = function(state) {
    if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_eatControlEscape = function(state) {
    var ch = state.current();
    if (ch === 116) {
      state.lastIntValue = 9;
      state.advance();
      return true;
    }
    if (ch === 110) {
      state.lastIntValue = 10;
      state.advance();
      return true;
    }
    if (ch === 118) {
      state.lastIntValue = 11;
      state.advance();
      return true;
    }
    if (ch === 102) {
      state.lastIntValue = 12;
      state.advance();
      return true;
    }
    if (ch === 114) {
      state.lastIntValue = 13;
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_eatControlLetter = function(state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 32;
      state.advance();
      return true;
    }
    return false;
  };
  function isControlLetter(ch) {
    return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
  }
  pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
    if (forceU === void 0)
      forceU = false;
    var start = state.pos;
    var switchU = forceU || state.switchU;
    if (state.eat(117)) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (switchU && lead >= 55296 && lead <= 56319) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 56320 && trail <= 57343) {
              state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
              return true;
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true;
      }
      if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
        return true;
      }
      if (switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }
    return false;
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 1114111;
  }
  pp$8.regexp_eatIdentityEscape = function(state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true;
      }
      if (state.eat(47)) {
        state.lastIntValue = 47;
        return true;
      }
      return false;
    }
    var ch = state.current();
    if (ch !== 99 && (!state.switchN || ch !== 107)) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_eatDecimalEscape = function(state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 49 && ch <= 57) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
        state.advance();
      } while ((ch = state.current()) >= 48 && ch <= 57);
      return true;
    }
    return false;
  };
  pp$8.regexp_eatCharacterClassEscape = function(state) {
    var ch = state.current();
    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return true;
    }
    if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
      state.lastIntValue = -1;
      state.advance();
      if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
        return true;
      }
      state.raise("Invalid property name");
    }
    return false;
  };
  function isCharacterClassEscape(ch) {
    return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
  }
  pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
    var start = state.pos;
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value2 = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value2);
        return true;
      }
    }
    state.pos = start;
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
      return true;
    }
    return false;
  };
  pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value2) {
    if (!has(state.unicodeProperties.nonBinary, name)) {
      state.raise("Invalid property name");
    }
    if (!state.unicodeProperties.nonBinary[name].test(value2)) {
      state.raise("Invalid property value");
    }
  };
  pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
    if (!state.unicodeProperties.binary.test(nameOrValue)) {
      state.raise("Invalid property name");
    }
  };
  pp$8.regexp_eatUnicodePropertyName = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== "";
  };
  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 95;
  }
  pp$8.regexp_eatUnicodePropertyValue = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== "";
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
  }
  pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
    return this.regexp_eatUnicodePropertyValue(state);
  };
  pp$8.regexp_eatCharacterClass = function(state) {
    if (state.eat(91)) {
      state.eat(94);
      this.regexp_classRanges(state);
      if (state.eat(93)) {
        return true;
      }
      state.raise("Unterminated character class");
    }
    return false;
  };
  pp$8.regexp_classRanges = function(state) {
    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(45) && this.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };
  pp$8.regexp_eatClassAtom = function(state) {
    var start = state.pos;
    if (state.eat(92)) {
      if (this.regexp_eatClassEscape(state)) {
        return true;
      }
      if (state.switchU) {
        var ch$1 = state.current();
        if (ch$1 === 99 || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    var ch = state.current();
    if (ch !== 93) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_eatClassEscape = function(state) {
    var start = state.pos;
    if (state.eat(98)) {
      state.lastIntValue = 8;
      return true;
    }
    if (state.switchU && state.eat(45)) {
      state.lastIntValue = 45;
      return true;
    }
    if (!state.switchU && state.eat(99)) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true;
      }
      state.pos = start;
    }
    return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
  };
  pp$8.regexp_eatClassControlLetter = function(state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 95) {
      state.lastIntValue = ch % 32;
      state.advance();
      return true;
    }
    return false;
  };
  pp$8.regexp_eatHexEscapeSequence = function(state) {
    var start = state.pos;
    if (state.eat(120)) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true;
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false;
  };
  pp$8.regexp_eatDecimalDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    }
    return state.pos !== start;
  };
  function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  pp$8.regexp_eatHexDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start;
  };
  function isHexDigit(ch) {
    return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
  }
  function hexToInt(ch) {
    if (ch >= 65 && ch <= 70) {
      return 10 + (ch - 65);
    }
    if (ch >= 97 && ch <= 102) {
      return 10 + (ch - 97);
    }
    return ch - 48;
  }
  pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true;
    }
    return false;
  };
  pp$8.regexp_eatOctalDigit = function(state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 48;
      state.advance();
      return true;
    }
    state.lastIntValue = 0;
    return false;
  };
  function isOctalDigit(ch) {
    return ch >= 48 && ch <= 55;
  }
  pp$8.regexp_eatFixedHexDigits = function(state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i2 = 0; i2 < length; ++i2) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false;
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true;
  };
  var Token = function Token2(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.options.locations) {
      this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
    }
    if (p.options.ranges) {
      this.range = [p.start, p.end];
    }
  };
  var pp$9 = Parser.prototype;
  pp$9.next = function(ignoreEscapeSequenceInKeyword) {
    if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
    }
    if (this.options.onToken) {
      this.options.onToken(new Token(this));
    }
    this.lastTokEnd = this.end;
    this.lastTokStart = this.start;
    this.lastTokEndLoc = this.endLoc;
    this.lastTokStartLoc = this.startLoc;
    this.nextToken();
  };
  pp$9.getToken = function() {
    this.next();
    return new Token(this);
  };
  if (typeof Symbol !== "undefined") {
    pp$9[Symbol.iterator] = function() {
      var this$1$1 = this;
      return {
        next: function() {
          var token = this$1$1.getToken();
          return {
            done: token.type === types.eof,
            value: token
          };
        }
      };
    };
  }
  pp$9.curContext = function() {
    return this.context[this.context.length - 1];
  };
  pp$9.nextToken = function() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) {
      this.skipSpace();
    }
    this.start = this.pos;
    if (this.options.locations) {
      this.startLoc = this.curPosition();
    }
    if (this.pos >= this.input.length) {
      return this.finishToken(types.eof);
    }
    if (curContext.override) {
      return curContext.override(this);
    } else {
      this.readToken(this.fullCharCodeAtPos());
    }
  };
  pp$9.readToken = function(code) {
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
      return this.readWord();
    }
    return this.getTokenFromCode(code);
  };
  pp$9.fullCharCodeAtPos = function() {
    var code = this.input.charCodeAt(this.pos);
    if (code <= 55295 || code >= 56320) {
      return code;
    }
    var next = this.input.charCodeAt(this.pos + 1);
    return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
  };
  pp$9.skipBlockComment = function() {
    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) {
      this.raise(this.pos - 2, "Unterminated comment");
    }
    this.pos = end + 2;
    if (this.options.locations) {
      lineBreakG.lastIndex = start;
      var match;
      while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
        ++this.curLine;
        this.lineStart = match.index + match[0].length;
      }
    }
    if (this.options.onComment) {
      this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
    }
  };
  pp$9.skipLineComment = function(startSkip) {
    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this.input.charCodeAt(++this.pos);
    }
    if (this.options.onComment) {
      this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
    }
  };
  pp$9.skipSpace = function() {
    loop:
      while (this.pos < this.input.length) {
        var ch = this.input.charCodeAt(this.pos);
        switch (ch) {
          case 32:
          case 160:
            ++this.pos;
            break;
          case 13:
            if (this.input.charCodeAt(this.pos + 1) === 10) {
              ++this.pos;
            }
          case 10:
          case 8232:
          case 8233:
            ++this.pos;
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            break;
          case 47:
            switch (this.input.charCodeAt(this.pos + 1)) {
              case 42:
                this.skipBlockComment();
                break;
              case 47:
                this.skipLineComment(2);
                break;
              default:
                break loop;
            }
            break;
          default:
            if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
              ++this.pos;
            } else {
              break loop;
            }
        }
      }
  };
  pp$9.finishToken = function(type, val) {
    this.end = this.pos;
    if (this.options.locations) {
      this.endLoc = this.curPosition();
    }
    var prevType = this.type;
    this.type = type;
    this.value = val;
    this.updateContext(prevType);
  };
  pp$9.readToken_dot = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) {
      return this.readNumber(true);
    }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
      this.pos += 3;
      return this.finishToken(types.ellipsis);
    } else {
      ++this.pos;
      return this.finishToken(types.dot);
    }
  };
  pp$9.readToken_slash = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) {
      ++this.pos;
      return this.readRegexp();
    }
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    }
    return this.finishOp(types.slash, 1);
  };
  pp$9.readToken_mult_modulo_exp = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types.star : types.modulo;
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }
    if (next === 61) {
      return this.finishOp(types.assign, size + 1);
    }
    return this.finishOp(tokentype, size);
  };
  pp$9.readToken_pipe_amp = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (this.options.ecmaVersion >= 12) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 === 61) {
          return this.finishOp(types.assign, 3);
        }
      }
      return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
    }
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    }
    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
  };
  pp$9.readToken_caret = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    }
    return this.finishOp(types.bitwiseXOR, 1);
  };
  pp$9.readToken_plus_min = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken();
      }
      return this.finishOp(types.incDec, 2);
    }
    if (next === 61) {
      return this.finishOp(types.assign, 2);
    }
    return this.finishOp(types.plusMin, 1);
  };
  pp$9.readToken_lt_gt = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) {
        return this.finishOp(types.assign, size + 1);
      }
      return this.finishOp(types.bitShift, size);
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken();
    }
    if (next === 61) {
      size = 2;
    }
    return this.finishOp(types.relational, size);
  };
  pp$9.readToken_eq_excl = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) {
      return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
    }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
      this.pos += 2;
      return this.finishToken(types.arrow);
    }
    return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
  };
  pp$9.readToken_question = function() {
    var ecmaVersion = this.options.ecmaVersion;
    if (ecmaVersion >= 11) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 46) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 < 48 || next2 > 57) {
          return this.finishOp(types.questionDot, 2);
        }
      }
      if (next === 63) {
        if (ecmaVersion >= 12) {
          var next2$1 = this.input.charCodeAt(this.pos + 2);
          if (next2$1 === 61) {
            return this.finishOp(types.assign, 3);
          }
        }
        return this.finishOp(types.coalesce, 2);
      }
    }
    return this.finishOp(types.question, 1);
  };
  pp$9.readToken_numberSign = function() {
    var ecmaVersion = this.options.ecmaVersion;
    var code = 35;
    if (ecmaVersion >= 13) {
      ++this.pos;
      code = this.fullCharCodeAtPos();
      if (isIdentifierStart(code, true) || code === 92) {
        return this.finishToken(types.privateId, this.readWord1());
      }
    }
    this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
  };
  pp$9.getTokenFromCode = function(code) {
    switch (code) {
      case 46:
        return this.readToken_dot();
      case 40:
        ++this.pos;
        return this.finishToken(types.parenL);
      case 41:
        ++this.pos;
        return this.finishToken(types.parenR);
      case 59:
        ++this.pos;
        return this.finishToken(types.semi);
      case 44:
        ++this.pos;
        return this.finishToken(types.comma);
      case 91:
        ++this.pos;
        return this.finishToken(types.bracketL);
      case 93:
        ++this.pos;
        return this.finishToken(types.bracketR);
      case 123:
        ++this.pos;
        return this.finishToken(types.braceL);
      case 125:
        ++this.pos;
        return this.finishToken(types.braceR);
      case 58:
        ++this.pos;
        return this.finishToken(types.colon);
      case 96:
        if (this.options.ecmaVersion < 6) {
          break;
        }
        ++this.pos;
        return this.finishToken(types.backQuote);
      case 48:
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 120 || next === 88) {
          return this.readRadixNumber(16);
        }
        if (this.options.ecmaVersion >= 6) {
          if (next === 111 || next === 79) {
            return this.readRadixNumber(8);
          }
          if (next === 98 || next === 66) {
            return this.readRadixNumber(2);
          }
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(false);
      case 34:
      case 39:
        return this.readString(code);
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(code);
      case 124:
      case 38:
        return this.readToken_pipe_amp(code);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(code);
      case 60:
      case 62:
        return this.readToken_lt_gt(code);
      case 61:
      case 33:
        return this.readToken_eq_excl(code);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(types.prefix, 1);
      case 35:
        return this.readToken_numberSign();
    }
    this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
  };
  pp$9.finishOp = function(type, size) {
    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return this.finishToken(type, str);
  };
  pp$9.readRegexp = function() {
    var escaped, inClass, start = this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(start, "Unterminated regular expression");
      }
      var ch = this.input.charAt(this.pos);
      if (lineBreak.test(ch)) {
        this.raise(start, "Unterminated regular expression");
      }
      if (!escaped) {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }
        escaped = ch === "\\";
      } else {
        escaped = false;
      }
      ++this.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) {
      this.unexpected(flagsStart);
    }
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);
    var value2 = null;
    try {
      value2 = new RegExp(pattern, flags);
    } catch (e) {
    }
    return this.finishToken(types.regexp, { pattern, flags, value: value2 });
  };
  pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
    var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
    var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
    var start = this.pos, total = 0, lastCode = 0;
    for (var i2 = 0, e = len == null ? Infinity : len; i2 < e; ++i2, ++this.pos) {
      var code = this.input.charCodeAt(this.pos), val = void 0;
      if (allowSeparators && code === 95) {
        if (isLegacyOctalNumericLiteral) {
          this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
        }
        if (lastCode === 95) {
          this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
        }
        if (i2 === 0) {
          this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
        }
        lastCode = code;
        continue;
      }
      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (code >= 48 && code <= 57) {
        val = code - 48;
      } else {
        val = Infinity;
      }
      if (val >= radix) {
        break;
      }
      lastCode = code;
      total = total * radix + val;
    }
    if (allowSeparators && lastCode === 95) {
      this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
    }
    if (this.pos === start || len != null && this.pos - start !== len) {
      return null;
    }
    return total;
  };
  function stringToNumber(str, isLegacyOctalNumericLiteral) {
    if (isLegacyOctalNumericLiteral) {
      return parseInt(str, 8);
    }
    return parseFloat(str.replace(/_/g, ""));
  }
  function stringToBigInt(str) {
    if (typeof BigInt !== "function") {
      return null;
    }
    return BigInt(str.replace(/_/g, ""));
  }
  pp$9.readRadixNumber = function(radix) {
    var start = this.pos;
    this.pos += 2;
    var val = this.readInt(radix);
    if (val == null) {
      this.raise(this.start + 2, "Expected number in radix " + radix);
    }
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
      val = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
    } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types.num, val);
  };
  pp$9.readNumber = function(startsWithDot) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10, void 0, true) === null) {
      this.raise(start, "Invalid number");
    }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) {
      this.raise(start, "Invalid number");
    }
    var next = this.input.charCodeAt(this.pos);
    if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
      var val$1 = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
      if (isIdentifierStart(this.fullCharCodeAtPos())) {
        this.raise(this.pos, "Identifier directly after number");
      }
      return this.finishToken(types.num, val$1);
    }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
      octal = false;
    }
    if (next === 46 && !octal) {
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) {
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) {
        ++this.pos;
      }
      if (this.readInt(10) === null) {
        this.raise(start, "Invalid number");
      }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    var val = stringToNumber(this.input.slice(start, this.pos), octal);
    return this.finishToken(types.num, val);
  };
  pp$9.readCodePoint = function() {
    var ch = this.input.charCodeAt(this.pos), code;
    if (ch === 123) {
      if (this.options.ecmaVersion < 6) {
        this.unexpected();
      }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 1114111) {
        this.invalidStringToken(codePos, "Code point out of bounds");
      }
    } else {
      code = this.readHexChar(4);
    }
    return code;
  };
  function codePointToString$1(code) {
    if (code <= 65535) {
      return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
  }
  pp$9.readString = function(quote) {
    var out = "", chunkStart = ++this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(this.start, "Unterminated string constant");
      }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) {
        break;
      }
      if (ch === 92) {
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.pos;
      } else {
        if (isNewLine(ch, this.options.ecmaVersion >= 10)) {
          this.raise(this.start, "Unterminated string constant");
        }
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(types.string, out);
  };
  var INVALID_TEMPLATE_ESCAPE_ERROR = {};
  pp$9.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err;
      }
    }
    this.inTemplateElement = false;
  };
  pp$9.invalidStringToken = function(position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR;
    } else {
      this.raise(position, message);
    }
  };
  pp$9.readTmplToken = function() {
    var out = "", chunkStart = this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(this.start, "Unterminated template");
      }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
        if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
          if (ch === 36) {
            this.pos += 2;
            return this.finishToken(types.dollarBraceL);
          } else {
            ++this.pos;
            return this.finishToken(types.backQuote);
          }
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(types.template, out);
      }
      if (ch === 92) {
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        ++this.pos;
        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) {
              ++this.pos;
            }
          case 10:
            out += "\n";
            break;
          default:
            out += String.fromCharCode(ch);
            break;
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
  };
  pp$9.readInvalidTemplateToken = function() {
    for (; this.pos < this.input.length; this.pos++) {
      switch (this.input[this.pos]) {
        case "\\":
          ++this.pos;
          break;
        case "$":
          if (this.input[this.pos + 1] !== "{") {
            break;
          }
        case "`":
          return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos));
      }
    }
    this.raise(this.start, "Unterminated template");
  };
  pp$9.readEscapedChar = function(inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(this.readHexChar(2));
      case 117:
        return codePointToString$1(this.readCodePoint());
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) {
          ++this.pos;
        }
      case 10:
        if (this.options.locations) {
          this.lineStart = this.pos;
          ++this.curLine;
        }
        return "";
      case 56:
      case 57:
        if (this.strict) {
          this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
        }
        if (inTemplate) {
          var codePos = this.pos - 1;
          this.invalidStringToken(codePos, "Invalid escape sequence in template string");
          return null;
        }
      default:
        if (ch >= 48 && ch <= 55) {
          var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
          var octal = parseInt(octalStr, 8);
          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }
          this.pos += octalStr.length - 1;
          ch = this.input.charCodeAt(this.pos);
          if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
            this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
          }
          return String.fromCharCode(octal);
        }
        if (isNewLine(ch)) {
          return "";
        }
        return String.fromCharCode(ch);
    }
  };
  pp$9.readHexChar = function(len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) {
      this.invalidStringToken(codePos, "Bad character escape sequence");
    }
    return n;
  };
  pp$9.readWord1 = function() {
    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this.pos += ch <= 65535 ? 1 : 2;
      } else if (ch === 92) {
        this.containsEsc = true;
        word += this.input.slice(chunkStart, this.pos);
        var escStart = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) {
          this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
        }
        ++this.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
          this.invalidStringToken(escStart, "Invalid Unicode escape");
        }
        word += codePointToString$1(esc);
        chunkStart = this.pos;
      } else {
        break;
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos);
  };
  pp$9.readWord = function() {
    var word = this.readWord1();
    var type = types.name;
    if (this.keywords.test(word)) {
      type = keywords$1[word];
    }
    return this.finishToken(type, word);
  };
  var version = "8.4.1";
  Parser.acorn = {
    Parser,
    version,
    defaultOptions,
    Position,
    SourceLocation,
    getLineInfo,
    Node,
    TokenType,
    tokTypes: types,
    keywordTypes: keywords$1,
    TokContext,
    tokContexts: types$1,
    isIdentifierChar,
    isIdentifierStart,
    Token,
    isNewLine,
    lineBreak,
    lineBreakG,
    nonASCIIwhitespace
  };
  function parseExpressionAt(input, pos, options) {
    return Parser.parseExpressionAt(input, pos, options);
  }
  class WalkerBase {
    constructor() {
      this.should_skip = false;
      this.should_remove = false;
      this.replacement = null;
      this.context = {
        skip: () => this.should_skip = true,
        remove: () => this.should_remove = true,
        replace: (node2) => this.replacement = node2
      };
    }
    replace(parent, prop, index, node2) {
      if (parent) {
        if (index !== null) {
          parent[prop][index] = node2;
        } else {
          parent[prop] = node2;
        }
      }
    }
    remove(parent, prop, index) {
      if (parent) {
        if (index !== null) {
          parent[prop].splice(index, 1);
        } else {
          delete parent[prop];
        }
      }
    }
  }
  class SyncWalker extends WalkerBase {
    constructor(enter, leave) {
      super();
      this.enter = enter;
      this.leave = leave;
    }
    visit(node2, parent, prop, index) {
      if (node2) {
        if (this.enter) {
          const _should_skip = this.should_skip;
          const _should_remove = this.should_remove;
          const _replacement = this.replacement;
          this.should_skip = false;
          this.should_remove = false;
          this.replacement = null;
          this.enter.call(this.context, node2, parent, prop, index);
          if (this.replacement) {
            node2 = this.replacement;
            this.replace(parent, prop, index, node2);
          }
          if (this.should_remove) {
            this.remove(parent, prop, index);
          }
          const skipped = this.should_skip;
          const removed = this.should_remove;
          this.should_skip = _should_skip;
          this.should_remove = _should_remove;
          this.replacement = _replacement;
          if (skipped)
            return node2;
          if (removed)
            return null;
        }
        for (const key in node2) {
          const value2 = node2[key];
          if (typeof value2 !== "object") {
            continue;
          } else if (Array.isArray(value2)) {
            for (let i2 = 0; i2 < value2.length; i2 += 1) {
              if (value2[i2] !== null && typeof value2[i2].type === "string") {
                if (!this.visit(value2[i2], node2, key, i2)) {
                  i2--;
                }
              }
            }
          } else if (value2 !== null && typeof value2.type === "string") {
            this.visit(value2, node2, key, null);
          }
        }
        if (this.leave) {
          const _replacement = this.replacement;
          const _should_remove = this.should_remove;
          this.replacement = null;
          this.should_remove = false;
          this.leave.call(this.context, node2, parent, prop, index);
          if (this.replacement) {
            node2 = this.replacement;
            this.replace(parent, prop, index, node2);
          }
          if (this.should_remove) {
            this.remove(parent, prop, index);
          }
          const removed = this.should_remove;
          this.replacement = _replacement;
          this.should_remove = _should_remove;
          if (removed)
            return null;
        }
      }
      return node2;
    }
  }
  function walk(ast, { enter, leave }) {
    const instance = new SyncWalker(enter, leave);
    return instance.visit(ast, null);
  }
  const id = Math.round(Math.random() * 1e20).toString(36);
  const re = new RegExp(`_${id}_(?:(\\d+)|(AT)|(HASH))_(\\w+)?`, "g");
  const get_comment_handlers = (comments, raw) => ({
    onComment: (block, value2, start, end) => {
      if (block && /\n/.test(value2)) {
        let a = start;
        while (a > 0 && raw[a - 1] !== "\n")
          a -= 1;
        let b = a;
        while (/[ \t]/.test(raw[b]))
          b += 1;
        const indentation = raw.slice(a, b);
        value2 = value2.replace(new RegExp(`^${indentation}`, "gm"), "");
      }
      comments.push({ type: block ? "Block" : "Line", value: value2, start, end });
    },
    enter(node2) {
      let comment;
      while (comments[0] && comments[0].start < node2.start) {
        comment = comments.shift();
        comment.value = comment.value.replace(re, (match, id2, at2, hash, value2) => {
          if (hash)
            return `#${value2}`;
          if (at2)
            return `@${value2}`;
          return match;
        });
        const next = comments[0] || node2;
        comment.has_trailing_newline = comment.type === "Line" || /\n/.test(raw.slice(comment.end, next.start));
        (node2.leadingComments || (node2.leadingComments = [])).push(comment);
      }
    },
    leave(node2) {
      if (comments[0]) {
        const slice = raw.slice(node2.end, comments[0].start);
        if (/^[,) \t]*$/.test(slice)) {
          node2.trailingComments = [comments.shift()];
        }
      }
    }
  });
  var charToInteger = {};
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  for (var i = 0; i < chars.length; i++) {
    charToInteger[chars.charCodeAt(i)] = i;
  }
  const sigils = {
    "@": "AT",
    "#": "HASH"
  };
  const join$1 = (strings) => {
    let str = strings[0];
    for (let i2 = 1; i2 < strings.length; i2 += 1) {
      str += `_${id}_${i2 - 1}_${strings[i2]}`;
    }
    return str.replace(/([@#])(\w+)/g, (_m, sigil, name) => `_${id}_${sigils[sigil]}_${name}`);
  };
  const flatten_body = (array, target) => {
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      const statement = array[i2];
      if (Array.isArray(statement)) {
        flatten_body(statement, target);
        continue;
      }
      if (statement.type === "ExpressionStatement") {
        if (statement.expression === EMPTY)
          continue;
        if (Array.isArray(statement.expression)) {
          let node2 = statement.expression[0];
          while (Array.isArray(node2))
            node2 = node2[0];
          if (node2)
            node2.leadingComments = statement.leadingComments;
          flatten_body(statement.expression, target);
          continue;
        }
        if (/(Expression|Literal)$/.test(statement.expression.type)) {
          target.push(statement);
          continue;
        }
        if (statement.leadingComments)
          statement.expression.leadingComments = statement.leadingComments;
        if (statement.trailingComments)
          statement.expression.trailingComments = statement.trailingComments;
        target.push(statement.expression);
        continue;
      }
      target.push(statement);
    }
    return target;
  };
  const flatten_properties = (array, target) => {
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      const property = array[i2];
      if (property.value === EMPTY)
        continue;
      if (property.key === property.value && Array.isArray(property.key)) {
        flatten_properties(property.key, target);
        continue;
      }
      target.push(property);
    }
    return target;
  };
  const flatten$1 = (nodes, target) => {
    for (let i2 = 0; i2 < nodes.length; i2 += 1) {
      const node2 = nodes[i2];
      if (node2 === EMPTY)
        continue;
      if (Array.isArray(node2)) {
        flatten$1(node2, target);
        continue;
      }
      target.push(node2);
    }
    return target;
  };
  const EMPTY = { type: "Empty" };
  const acorn_opts = (comments, raw) => {
    const { onComment } = get_comment_handlers(comments, raw);
    return {
      ecmaVersion: 2020,
      sourceType: "module",
      allowAwaitOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
      onComment
    };
  };
  const inject = (raw, node2, values, comments) => {
    comments.forEach((comment) => {
      comment.value = comment.value.replace(re, (m, i2) => +i2 in values ? values[+i2] : m);
    });
    const { enter, leave } = get_comment_handlers(comments, raw);
    return walk(node2, {
      enter,
      leave(node3) {
        if (node3.type === "Identifier") {
          re.lastIndex = 0;
          const match = re.exec(node3.name);
          if (match) {
            if (match[1]) {
              if (+match[1] in values) {
                let value2 = values[+match[1]];
                if (typeof value2 === "string") {
                  value2 = {
                    type: "Identifier",
                    name: value2,
                    leadingComments: node3.leadingComments,
                    trailingComments: node3.trailingComments
                  };
                } else if (typeof value2 === "number") {
                  value2 = {
                    type: "Literal",
                    value: value2,
                    leadingComments: node3.leadingComments,
                    trailingComments: node3.trailingComments
                  };
                }
                this.replace(value2 || EMPTY);
              }
            } else {
              node3.name = `${match[2] ? `@` : `#`}${match[4]}`;
            }
          }
        }
        if (node3.type === "Literal") {
          if (typeof node3.value === "string") {
            re.lastIndex = 0;
            const new_value = node3.value.replace(re, (m, i2) => +i2 in values ? values[+i2] : m);
            const has_changed = new_value !== node3.value;
            node3.value = new_value;
            if (has_changed && node3.raw) {
              node3.raw = `${node3.raw[0]}${JSON.stringify(node3.value).slice(1, -1)}${node3.raw[node3.raw.length - 1]}`;
            }
          }
        }
        if (node3.type === "TemplateElement") {
          re.lastIndex = 0;
          node3.value.raw = node3.value.raw.replace(re, (m, i2) => +i2 in values ? values[+i2] : m);
        }
        if (node3.type === "Program" || node3.type === "BlockStatement") {
          node3.body = flatten_body(node3.body, []);
        }
        if (node3.type === "ObjectExpression" || node3.type === "ObjectPattern") {
          node3.properties = flatten_properties(node3.properties, []);
        }
        if (node3.type === "ArrayExpression" || node3.type === "ArrayPattern") {
          node3.elements = flatten$1(node3.elements, []);
        }
        if (node3.type === "FunctionExpression" || node3.type === "FunctionDeclaration" || node3.type === "ArrowFunctionExpression") {
          node3.params = flatten$1(node3.params, []);
        }
        if (node3.type === "CallExpression" || node3.type === "NewExpression") {
          node3.arguments = flatten$1(node3.arguments, []);
        }
        if (node3.type === "ImportDeclaration" || node3.type === "ExportNamedDeclaration") {
          node3.specifiers = flatten$1(node3.specifiers, []);
        }
        if (node3.type === "ForStatement") {
          node3.init = node3.init === EMPTY ? null : node3.init;
          node3.test = node3.test === EMPTY ? null : node3.test;
          node3.update = node3.update === EMPTY ? null : node3.update;
        }
        leave(node3);
      }
    });
  };
  function x(strings, ...values) {
    const str = join$1(strings);
    const comments = [];
    try {
      let expression2 = parseExpressionAt(str, 0, acorn_opts(comments, str));
      const match = /\S+/.exec(str.slice(expression2.end));
      if (match) {
        throw new Error(`Unexpected token '${match[0]}'`);
      }
      expression2 = inject(str, expression2, values, comments);
      return expression2;
    } catch (err) {
      handle_error(str, err);
    }
  }
  function handle_error(str, err) {
    re.lastIndex = 0;
    str = str.replace(re, (m, i2, at2, hash, name) => {
      if (at2)
        return `@${name}`;
      if (hash)
        return `#${name}`;
      return "${...}";
    });
    console.log(`failed to parse:
${str}`);
    throw err;
  }
  var MIN_SIZE = 16 * 1024;
  var SafeUint32Array = typeof Uint32Array !== "undefined" ? Uint32Array : Array;
  var adoptBuffer = function adoptBuffer2(buffer, size) {
    if (buffer === null || buffer.length < size) {
      return new SafeUint32Array(Math.max(size + 1024, MIN_SIZE));
    }
    return buffer;
  };
  var TYPE = {
    EOF: 0,
    Ident: 1,
    Function: 2,
    AtKeyword: 3,
    Hash: 4,
    String: 5,
    BadString: 6,
    Url: 7,
    BadUrl: 8,
    Delim: 9,
    Number: 10,
    Percentage: 11,
    Dimension: 12,
    WhiteSpace: 13,
    CDO: 14,
    CDC: 15,
    Colon: 16,
    Semicolon: 17,
    Comma: 18,
    LeftSquareBracket: 19,
    RightSquareBracket: 20,
    LeftParenthesis: 21,
    RightParenthesis: 22,
    LeftCurlyBracket: 23,
    RightCurlyBracket: 24,
    Comment: 25
  };
  var NAME = Object.keys(TYPE).reduce(function(result, key) {
    result[TYPE[key]] = key;
    return result;
  }, {});
  var _const = {
    TYPE,
    NAME
  };
  var EOF = 0;
  function isDigit(code) {
    return code >= 48 && code <= 57;
  }
  function isHexDigit$1(code) {
    return isDigit(code) || code >= 65 && code <= 70 || code >= 97 && code <= 102;
  }
  function isUppercaseLetter(code) {
    return code >= 65 && code <= 90;
  }
  function isLowercaseLetter(code) {
    return code >= 97 && code <= 122;
  }
  function isLetter(code) {
    return isUppercaseLetter(code) || isLowercaseLetter(code);
  }
  function isNonAscii(code) {
    return code >= 128;
  }
  function isNameStart(code) {
    return isLetter(code) || isNonAscii(code) || code === 95;
  }
  function isName(code) {
    return isNameStart(code) || isDigit(code) || code === 45;
  }
  function isNonPrintable(code) {
    return code >= 0 && code <= 8 || code === 11 || code >= 14 && code <= 31 || code === 127;
  }
  function isNewline(code) {
    return code === 10 || code === 13 || code === 12;
  }
  function isWhiteSpace(code) {
    return isNewline(code) || code === 32 || code === 9;
  }
  function isValidEscape(first, second) {
    if (first !== 92) {
      return false;
    }
    if (isNewline(second) || second === EOF) {
      return false;
    }
    return true;
  }
  function isIdentifierStart$1(first, second, third) {
    if (first === 45) {
      return isNameStart(second) || second === 45 || isValidEscape(second, third);
    }
    if (isNameStart(first)) {
      return true;
    }
    if (first === 92) {
      return isValidEscape(first, second);
    }
    return false;
  }
  function isNumberStart(first, second, third) {
    if (first === 43 || first === 45) {
      if (isDigit(second)) {
        return 2;
      }
      return second === 46 && isDigit(third) ? 3 : 0;
    }
    if (first === 46) {
      return isDigit(second) ? 2 : 0;
    }
    if (isDigit(first)) {
      return 1;
    }
    return 0;
  }
  function isBOM(code) {
    if (code === 65279) {
      return 1;
    }
    if (code === 65534) {
      return 1;
    }
    return 0;
  }
  var CATEGORY = new Array(128);
  charCodeCategory.Eof = 128;
  charCodeCategory.WhiteSpace = 130;
  charCodeCategory.Digit = 131;
  charCodeCategory.NameStart = 132;
  charCodeCategory.NonPrintable = 133;
  for (var i$1 = 0; i$1 < CATEGORY.length; i$1++) {
    switch (true) {
      case isWhiteSpace(i$1):
        CATEGORY[i$1] = charCodeCategory.WhiteSpace;
        break;
      case isDigit(i$1):
        CATEGORY[i$1] = charCodeCategory.Digit;
        break;
      case isNameStart(i$1):
        CATEGORY[i$1] = charCodeCategory.NameStart;
        break;
      case isNonPrintable(i$1):
        CATEGORY[i$1] = charCodeCategory.NonPrintable;
        break;
      default:
        CATEGORY[i$1] = i$1 || charCodeCategory.Eof;
    }
  }
  function charCodeCategory(code) {
    return code < 128 ? CATEGORY[code] : charCodeCategory.NameStart;
  }
  var charCodeDefinitions = {
    isDigit,
    isHexDigit: isHexDigit$1,
    isUppercaseLetter,
    isLowercaseLetter,
    isLetter,
    isNonAscii,
    isNameStart,
    isName,
    isNonPrintable,
    isNewline,
    isWhiteSpace,
    isValidEscape,
    isIdentifierStart: isIdentifierStart$1,
    isNumberStart,
    isBOM,
    charCodeCategory
  };
  var isDigit$1 = charCodeDefinitions.isDigit;
  var isHexDigit$2 = charCodeDefinitions.isHexDigit;
  var isUppercaseLetter$1 = charCodeDefinitions.isUppercaseLetter;
  var isName$1 = charCodeDefinitions.isName;
  var isWhiteSpace$1 = charCodeDefinitions.isWhiteSpace;
  var isValidEscape$1 = charCodeDefinitions.isValidEscape;
  function getCharCode(source, offset) {
    return offset < source.length ? source.charCodeAt(offset) : 0;
  }
  function getNewlineLength(source, offset, code) {
    if (code === 13 && getCharCode(source, offset + 1) === 10) {
      return 2;
    }
    return 1;
  }
  function cmpChar(testStr, offset, referenceCode) {
    var code = testStr.charCodeAt(offset);
    if (isUppercaseLetter$1(code)) {
      code = code | 32;
    }
    return code === referenceCode;
  }
  function cmpStr(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
      return false;
    }
    if (start < 0 || end > testStr.length) {
      return false;
    }
    for (var i2 = start; i2 < end; i2++) {
      var testCode = testStr.charCodeAt(i2);
      var referenceCode = referenceStr.charCodeAt(i2 - start);
      if (isUppercaseLetter$1(testCode)) {
        testCode = testCode | 32;
      }
      if (testCode !== referenceCode) {
        return false;
      }
    }
    return true;
  }
  function findWhiteSpaceStart(source, offset) {
    for (; offset >= 0; offset--) {
      if (!isWhiteSpace$1(source.charCodeAt(offset))) {
        break;
      }
    }
    return offset + 1;
  }
  function findWhiteSpaceEnd(source, offset) {
    for (; offset < source.length; offset++) {
      if (!isWhiteSpace$1(source.charCodeAt(offset))) {
        break;
      }
    }
    return offset;
  }
  function findDecimalNumberEnd(source, offset) {
    for (; offset < source.length; offset++) {
      if (!isDigit$1(source.charCodeAt(offset))) {
        break;
      }
    }
    return offset;
  }
  function consumeEscaped(source, offset) {
    offset += 2;
    if (isHexDigit$2(getCharCode(source, offset - 1))) {
      for (var maxOffset = Math.min(source.length, offset + 5); offset < maxOffset; offset++) {
        if (!isHexDigit$2(getCharCode(source, offset))) {
          break;
        }
      }
      var code = getCharCode(source, offset);
      if (isWhiteSpace$1(code)) {
        offset += getNewlineLength(source, offset, code);
      }
    }
    return offset;
  }
  function consumeName(source, offset) {
    for (; offset < source.length; offset++) {
      var code = source.charCodeAt(offset);
      if (isName$1(code)) {
        continue;
      }
      if (isValidEscape$1(code, getCharCode(source, offset + 1))) {
        offset = consumeEscaped(source, offset) - 1;
        continue;
      }
      break;
    }
    return offset;
  }
  function consumeNumber(source, offset) {
    var code = source.charCodeAt(offset);
    if (code === 43 || code === 45) {
      code = source.charCodeAt(offset += 1);
    }
    if (isDigit$1(code)) {
      offset = findDecimalNumberEnd(source, offset + 1);
      code = source.charCodeAt(offset);
    }
    if (code === 46 && isDigit$1(source.charCodeAt(offset + 1))) {
      code = source.charCodeAt(offset += 2);
      offset = findDecimalNumberEnd(source, offset);
    }
    if (cmpChar(source, offset, 101)) {
      var sign = 0;
      code = source.charCodeAt(offset + 1);
      if (code === 45 || code === 43) {
        sign = 1;
        code = source.charCodeAt(offset + 2);
      }
      if (isDigit$1(code)) {
        offset = findDecimalNumberEnd(source, offset + 1 + sign + 1);
      }
    }
    return offset;
  }
  function consumeBadUrlRemnants(source, offset) {
    for (; offset < source.length; offset++) {
      var code = source.charCodeAt(offset);
      if (code === 41) {
        offset++;
        break;
      }
      if (isValidEscape$1(code, getCharCode(source, offset + 1))) {
        offset = consumeEscaped(source, offset);
      }
    }
    return offset;
  }
  var utils = {
    consumeEscaped,
    consumeName,
    consumeNumber,
    consumeBadUrlRemnants,
    cmpChar,
    cmpStr,
    getNewlineLength,
    findWhiteSpaceStart,
    findWhiteSpaceEnd
  };
  var TYPE$1 = _const.TYPE;
  var NAME$1 = _const.NAME;
  var cmpStr$1 = utils.cmpStr;
  var EOF$1 = TYPE$1.EOF;
  var WHITESPACE = TYPE$1.WhiteSpace;
  var COMMENT = TYPE$1.Comment;
  var OFFSET_MASK = 16777215;
  var TYPE_SHIFT = 24;
  var TokenStream = function() {
    this.offsetAndType = null;
    this.balance = null;
    this.reset();
  };
  TokenStream.prototype = {
    reset: function() {
      this.eof = false;
      this.tokenIndex = -1;
      this.tokenType = 0;
      this.tokenStart = this.firstCharOffset;
      this.tokenEnd = this.firstCharOffset;
    },
    lookupType: function(offset) {
      offset += this.tokenIndex;
      if (offset < this.tokenCount) {
        return this.offsetAndType[offset] >> TYPE_SHIFT;
      }
      return EOF$1;
    },
    lookupOffset: function(offset) {
      offset += this.tokenIndex;
      if (offset < this.tokenCount) {
        return this.offsetAndType[offset - 1] & OFFSET_MASK;
      }
      return this.source.length;
    },
    lookupValue: function(offset, referenceStr) {
      offset += this.tokenIndex;
      if (offset < this.tokenCount) {
        return cmpStr$1(this.source, this.offsetAndType[offset - 1] & OFFSET_MASK, this.offsetAndType[offset] & OFFSET_MASK, referenceStr);
      }
      return false;
    },
    getTokenStart: function(tokenIndex) {
      if (tokenIndex === this.tokenIndex) {
        return this.tokenStart;
      }
      if (tokenIndex > 0) {
        return tokenIndex < this.tokenCount ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
      }
      return this.firstCharOffset;
    },
    getRawLength: function(startToken, mode) {
      var cursor = startToken;
      var balanceEnd2;
      var offset = this.offsetAndType[Math.max(cursor - 1, 0)] & OFFSET_MASK;
      var type;
      loop:
        for (; cursor < this.tokenCount; cursor++) {
          balanceEnd2 = this.balance[cursor];
          if (balanceEnd2 < startToken) {
            break loop;
          }
          type = this.offsetAndType[cursor] >> TYPE_SHIFT;
          switch (mode(type, this.source, offset)) {
            case 1:
              break loop;
            case 2:
              cursor++;
              break loop;
            default:
              offset = this.offsetAndType[cursor] & OFFSET_MASK;
              if (this.balance[balanceEnd2] === cursor) {
                cursor = balanceEnd2;
              }
          }
        }
      return cursor - this.tokenIndex;
    },
    isBalanceEdge: function(pos) {
      return this.balance[this.tokenIndex] < pos;
    },
    isDelim: function(code, offset) {
      if (offset) {
        return this.lookupType(offset) === TYPE$1.Delim && this.source.charCodeAt(this.lookupOffset(offset)) === code;
      }
      return this.tokenType === TYPE$1.Delim && this.source.charCodeAt(this.tokenStart) === code;
    },
    getTokenValue: function() {
      return this.source.substring(this.tokenStart, this.tokenEnd);
    },
    getTokenLength: function() {
      return this.tokenEnd - this.tokenStart;
    },
    substrToCursor: function(start) {
      return this.source.substring(start, this.tokenStart);
    },
    skipWS: function() {
      for (var i2 = this.tokenIndex, skipTokenCount = 0; i2 < this.tokenCount; i2++, skipTokenCount++) {
        if (this.offsetAndType[i2] >> TYPE_SHIFT !== WHITESPACE) {
          break;
        }
      }
      if (skipTokenCount > 0) {
        this.skip(skipTokenCount);
      }
    },
    skipSC: function() {
      while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
        this.next();
      }
    },
    skip: function(tokenCount) {
      var next = this.tokenIndex + tokenCount;
      if (next < this.tokenCount) {
        this.tokenIndex = next;
        this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
        next = this.offsetAndType[next];
        this.tokenType = next >> TYPE_SHIFT;
        this.tokenEnd = next & OFFSET_MASK;
      } else {
        this.tokenIndex = this.tokenCount;
        this.next();
      }
    },
    next: function() {
      var next = this.tokenIndex + 1;
      if (next < this.tokenCount) {
        this.tokenIndex = next;
        this.tokenStart = this.tokenEnd;
        next = this.offsetAndType[next];
        this.tokenType = next >> TYPE_SHIFT;
        this.tokenEnd = next & OFFSET_MASK;
      } else {
        this.tokenIndex = this.tokenCount;
        this.eof = true;
        this.tokenType = EOF$1;
        this.tokenStart = this.tokenEnd = this.source.length;
      }
    },
    forEachToken(fn) {
      for (var i2 = 0, offset = this.firstCharOffset; i2 < this.tokenCount; i2++) {
        var start = offset;
        var item = this.offsetAndType[i2];
        var end = item & OFFSET_MASK;
        var type = item >> TYPE_SHIFT;
        offset = end;
        fn(type, start, end, i2);
      }
    },
    dump() {
      var tokens = new Array(this.tokenCount);
      this.forEachToken((type, start, end, index) => {
        tokens[index] = {
          idx: index,
          type: NAME$1[type],
          chunk: this.source.substring(start, end),
          balance: this.balance[index]
        };
      });
      return tokens;
    }
  };
  var TokenStream_1 = TokenStream;
  var TYPE$2 = _const.TYPE;
  var isNewline$1 = charCodeDefinitions.isNewline;
  var isName$2 = charCodeDefinitions.isName;
  var isValidEscape$2 = charCodeDefinitions.isValidEscape;
  var isNumberStart$1 = charCodeDefinitions.isNumberStart;
  var isIdentifierStart$2 = charCodeDefinitions.isIdentifierStart;
  var charCodeCategory$1 = charCodeDefinitions.charCodeCategory;
  var isBOM$1 = charCodeDefinitions.isBOM;
  var cmpStr$2 = utils.cmpStr;
  var getNewlineLength$1 = utils.getNewlineLength;
  var findWhiteSpaceEnd$1 = utils.findWhiteSpaceEnd;
  var consumeEscaped$1 = utils.consumeEscaped;
  var consumeName$1 = utils.consumeName;
  var consumeNumber$1 = utils.consumeNumber;
  var consumeBadUrlRemnants$1 = utils.consumeBadUrlRemnants;
  var OFFSET_MASK$1 = 16777215;
  var TYPE_SHIFT$1 = 24;
  function tokenize(source, stream) {
    function getCharCode2(offset2) {
      return offset2 < sourceLength ? source.charCodeAt(offset2) : 0;
    }
    function consumeNumericToken() {
      offset = consumeNumber$1(source, offset);
      if (isIdentifierStart$2(getCharCode2(offset), getCharCode2(offset + 1), getCharCode2(offset + 2))) {
        type = TYPE$2.Dimension;
        offset = consumeName$1(source, offset);
        return;
      }
      if (getCharCode2(offset) === 37) {
        type = TYPE$2.Percentage;
        offset++;
        return;
      }
      type = TYPE$2.Number;
    }
    function consumeIdentLikeToken() {
      const nameStartOffset = offset;
      offset = consumeName$1(source, offset);
      if (cmpStr$2(source, nameStartOffset, offset, "url") && getCharCode2(offset) === 40) {
        offset = findWhiteSpaceEnd$1(source, offset + 1);
        if (getCharCode2(offset) === 34 || getCharCode2(offset) === 39) {
          type = TYPE$2.Function;
          offset = nameStartOffset + 4;
          return;
        }
        consumeUrlToken();
        return;
      }
      if (getCharCode2(offset) === 40) {
        type = TYPE$2.Function;
        offset++;
        return;
      }
      type = TYPE$2.Ident;
    }
    function consumeStringToken(endingCodePoint) {
      if (!endingCodePoint) {
        endingCodePoint = getCharCode2(offset++);
      }
      type = TYPE$2.String;
      for (; offset < source.length; offset++) {
        var code2 = source.charCodeAt(offset);
        switch (charCodeCategory$1(code2)) {
          case endingCodePoint:
            offset++;
            return;
          case charCodeCategory$1.Eof:
            return;
          case charCodeCategory$1.WhiteSpace:
            if (isNewline$1(code2)) {
              offset += getNewlineLength$1(source, offset, code2);
              type = TYPE$2.BadString;
              return;
            }
            break;
          case 92:
            if (offset === source.length - 1) {
              break;
            }
            var nextCode = getCharCode2(offset + 1);
            if (isNewline$1(nextCode)) {
              offset += getNewlineLength$1(source, offset + 1, nextCode);
            } else if (isValidEscape$2(code2, nextCode)) {
              offset = consumeEscaped$1(source, offset) - 1;
            }
            break;
        }
      }
    }
    function consumeUrlToken() {
      type = TYPE$2.Url;
      offset = findWhiteSpaceEnd$1(source, offset);
      for (; offset < source.length; offset++) {
        var code2 = source.charCodeAt(offset);
        switch (charCodeCategory$1(code2)) {
          case 41:
            offset++;
            return;
          case charCodeCategory$1.Eof:
            return;
          case charCodeCategory$1.WhiteSpace:
            offset = findWhiteSpaceEnd$1(source, offset);
            if (getCharCode2(offset) === 41 || offset >= source.length) {
              if (offset < source.length) {
                offset++;
              }
              return;
            }
            offset = consumeBadUrlRemnants$1(source, offset);
            type = TYPE$2.BadUrl;
            return;
          case 34:
          case 39:
          case 40:
          case charCodeCategory$1.NonPrintable:
            offset = consumeBadUrlRemnants$1(source, offset);
            type = TYPE$2.BadUrl;
            return;
          case 92:
            if (isValidEscape$2(code2, getCharCode2(offset + 1))) {
              offset = consumeEscaped$1(source, offset) - 1;
              break;
            }
            offset = consumeBadUrlRemnants$1(source, offset);
            type = TYPE$2.BadUrl;
            return;
        }
      }
    }
    if (!stream) {
      stream = new TokenStream_1();
    }
    source = String(source || "");
    var sourceLength = source.length;
    var offsetAndType = adoptBuffer(stream.offsetAndType, sourceLength + 1);
    var balance = adoptBuffer(stream.balance, sourceLength + 1);
    var tokenCount = 0;
    var start = isBOM$1(getCharCode2(0));
    var offset = start;
    var balanceCloseType = 0;
    var balanceStart = 0;
    var balancePrev = 0;
    while (offset < sourceLength) {
      var code = source.charCodeAt(offset);
      var type = 0;
      balance[tokenCount] = sourceLength;
      switch (charCodeCategory$1(code)) {
        case charCodeCategory$1.WhiteSpace:
          type = TYPE$2.WhiteSpace;
          offset = findWhiteSpaceEnd$1(source, offset + 1);
          break;
        case 34:
          consumeStringToken();
          break;
        case 35:
          if (isName$2(getCharCode2(offset + 1)) || isValidEscape$2(getCharCode2(offset + 1), getCharCode2(offset + 2))) {
            type = TYPE$2.Hash;
            offset = consumeName$1(source, offset + 1);
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 39:
          consumeStringToken();
          break;
        case 40:
          type = TYPE$2.LeftParenthesis;
          offset++;
          break;
        case 41:
          type = TYPE$2.RightParenthesis;
          offset++;
          break;
        case 43:
          if (isNumberStart$1(code, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
            consumeNumericToken();
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 44:
          type = TYPE$2.Comma;
          offset++;
          break;
        case 45:
          if (isNumberStart$1(code, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
            consumeNumericToken();
          } else {
            if (getCharCode2(offset + 1) === 45 && getCharCode2(offset + 2) === 62) {
              type = TYPE$2.CDC;
              offset = offset + 3;
            } else {
              if (isIdentifierStart$2(code, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                consumeIdentLikeToken();
              } else {
                type = TYPE$2.Delim;
                offset++;
              }
            }
          }
          break;
        case 46:
          if (isNumberStart$1(code, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
            consumeNumericToken();
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 47:
          if (getCharCode2(offset + 1) === 42) {
            type = TYPE$2.Comment;
            offset = source.indexOf("*/", offset + 2) + 2;
            if (offset === 1) {
              offset = source.length;
            }
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 58:
          type = TYPE$2.Colon;
          offset++;
          break;
        case 59:
          type = TYPE$2.Semicolon;
          offset++;
          break;
        case 60:
          if (getCharCode2(offset + 1) === 33 && getCharCode2(offset + 2) === 45 && getCharCode2(offset + 3) === 45) {
            type = TYPE$2.CDO;
            offset = offset + 4;
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 64:
          if (isIdentifierStart$2(getCharCode2(offset + 1), getCharCode2(offset + 2), getCharCode2(offset + 3))) {
            type = TYPE$2.AtKeyword;
            offset = consumeName$1(source, offset + 1);
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 91:
          type = TYPE$2.LeftSquareBracket;
          offset++;
          break;
        case 92:
          if (isValidEscape$2(code, getCharCode2(offset + 1))) {
            consumeIdentLikeToken();
          } else {
            type = TYPE$2.Delim;
            offset++;
          }
          break;
        case 93:
          type = TYPE$2.RightSquareBracket;
          offset++;
          break;
        case 123:
          type = TYPE$2.LeftCurlyBracket;
          offset++;
          break;
        case 125:
          type = TYPE$2.RightCurlyBracket;
          offset++;
          break;
        case charCodeCategory$1.Digit:
          consumeNumericToken();
          break;
        case charCodeCategory$1.NameStart:
          consumeIdentLikeToken();
          break;
        case charCodeCategory$1.Eof:
          break;
        default:
          type = TYPE$2.Delim;
          offset++;
      }
      switch (type) {
        case balanceCloseType:
          balancePrev = balanceStart & OFFSET_MASK$1;
          balanceStart = balance[balancePrev];
          balanceCloseType = balanceStart >> TYPE_SHIFT$1;
          balance[tokenCount] = balancePrev;
          balance[balancePrev++] = tokenCount;
          for (; balancePrev < tokenCount; balancePrev++) {
            if (balance[balancePrev] === sourceLength) {
              balance[balancePrev] = tokenCount;
            }
          }
          break;
        case TYPE$2.LeftParenthesis:
        case TYPE$2.Function:
          balance[tokenCount] = balanceStart;
          balanceCloseType = TYPE$2.RightParenthesis;
          balanceStart = balanceCloseType << TYPE_SHIFT$1 | tokenCount;
          break;
        case TYPE$2.LeftSquareBracket:
          balance[tokenCount] = balanceStart;
          balanceCloseType = TYPE$2.RightSquareBracket;
          balanceStart = balanceCloseType << TYPE_SHIFT$1 | tokenCount;
          break;
        case TYPE$2.LeftCurlyBracket:
          balance[tokenCount] = balanceStart;
          balanceCloseType = TYPE$2.RightCurlyBracket;
          balanceStart = balanceCloseType << TYPE_SHIFT$1 | tokenCount;
          break;
      }
      offsetAndType[tokenCount++] = type << TYPE_SHIFT$1 | offset;
    }
    offsetAndType[tokenCount] = TYPE$2.EOF << TYPE_SHIFT$1 | offset;
    balance[tokenCount] = sourceLength;
    balance[sourceLength] = sourceLength;
    while (balanceStart !== 0) {
      balancePrev = balanceStart & OFFSET_MASK$1;
      balanceStart = balance[balancePrev];
      balance[balancePrev] = sourceLength;
    }
    stream.source = source;
    stream.firstCharOffset = start;
    stream.offsetAndType = offsetAndType;
    stream.tokenCount = tokenCount;
    stream.balance = balance;
    stream.reset();
    stream.next();
    return stream;
  }
  Object.keys(_const).forEach(function(key) {
    tokenize[key] = _const[key];
  });
  Object.keys(charCodeDefinitions).forEach(function(key) {
    tokenize[key] = charCodeDefinitions[key];
  });
  Object.keys(utils).forEach(function(key) {
    tokenize[key] = utils[key];
  });
  var tokenizer = tokenize;
  var isBOM$2 = tokenizer.isBOM;
  var N = 10;
  var F = 12;
  var R = 13;
  function computeLinesAndColumns(host, source) {
    var sourceLength = source.length;
    var lines = adoptBuffer(host.lines, sourceLength);
    var line = host.startLine;
    var columns = adoptBuffer(host.columns, sourceLength);
    var column = host.startColumn;
    var startOffset = source.length > 0 ? isBOM$2(source.charCodeAt(0)) : 0;
    for (var i2 = startOffset; i2 < sourceLength; i2++) {
      var code = source.charCodeAt(i2);
      lines[i2] = line;
      columns[i2] = column++;
      if (code === N || code === R || code === F) {
        if (code === R && i2 + 1 < sourceLength && source.charCodeAt(i2 + 1) === N) {
          i2++;
          lines[i2] = line;
          columns[i2] = column;
        }
        line++;
        column = 1;
      }
    }
    lines[i2] = line;
    columns[i2] = column;
    host.lines = lines;
    host.columns = columns;
  }
  var OffsetToLocation = function() {
    this.lines = null;
    this.columns = null;
    this.linesAndColumnsComputed = false;
  };
  OffsetToLocation.prototype = {
    setSource: function(source, startOffset, startLine, startColumn) {
      this.source = source;
      this.startOffset = typeof startOffset === "undefined" ? 0 : startOffset;
      this.startLine = typeof startLine === "undefined" ? 1 : startLine;
      this.startColumn = typeof startColumn === "undefined" ? 1 : startColumn;
      this.linesAndColumnsComputed = false;
    },
    ensureLinesAndColumnsComputed: function() {
      if (!this.linesAndColumnsComputed) {
        computeLinesAndColumns(this, this.source);
        this.linesAndColumnsComputed = true;
      }
    },
    getLocation: function(offset, filename) {
      this.ensureLinesAndColumnsComputed();
      return {
        source: filename,
        offset: this.startOffset + offset,
        line: this.lines[offset],
        column: this.columns[offset]
      };
    },
    getLocationRange: function(start, end, filename) {
      this.ensureLinesAndColumnsComputed();
      return {
        source: filename,
        start: {
          offset: this.startOffset + start,
          line: this.lines[start],
          column: this.columns[start]
        },
        end: {
          offset: this.startOffset + end,
          line: this.lines[end],
          column: this.columns[end]
        }
      };
    }
  };
  var OffsetToLocation_1 = OffsetToLocation;
  var createCustomError = function createCustomError2(name, message) {
    var error = Object.create(SyntaxError.prototype);
    var errorStack = new Error();
    error.name = name;
    error.message = message;
    Object.defineProperty(error, "stack", {
      get: function() {
        return (errorStack.stack || "").replace(/^(.+\n){1,3}/, name + ": " + message + "\n");
      }
    });
    return error;
  };
  var MAX_LINE_LENGTH = 100;
  var OFFSET_CORRECTION = 60;
  var TAB_REPLACEMENT = "    ";
  function sourceFragment(error, extraLines) {
    function processLines(start, end) {
      return lines.slice(start, end).map(function(line2, idx) {
        var num = String(start + idx + 1);
        while (num.length < maxNumLength) {
          num = " " + num;
        }
        return num + " |" + line2;
      }).join("\n");
    }
    var lines = error.source.split(/\r\n?|\n|\f/);
    var line = error.line;
    var column = error.column;
    var startLine = Math.max(1, line - extraLines) - 1;
    var endLine = Math.min(line + extraLines, lines.length + 1);
    var maxNumLength = Math.max(4, String(endLine).length) + 1;
    var cutLeft = 0;
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;
    if (column > MAX_LINE_LENGTH) {
      cutLeft = column - OFFSET_CORRECTION + 3;
      column = OFFSET_CORRECTION - 2;
    }
    for (var i2 = startLine; i2 <= endLine; i2++) {
      if (i2 >= 0 && i2 < lines.length) {
        lines[i2] = lines[i2].replace(/\t/g, TAB_REPLACEMENT);
        lines[i2] = (cutLeft > 0 && lines[i2].length > cutLeft ? "\u2026" : "") + lines[i2].substr(cutLeft, MAX_LINE_LENGTH - 2) + (lines[i2].length > cutLeft + MAX_LINE_LENGTH - 1 ? "\u2026" : "");
      }
    }
    return [
      processLines(startLine, line),
      new Array(column + maxNumLength + 2).join("-") + "^",
      processLines(line, endLine)
    ].filter(Boolean).join("\n");
  }
  var SyntaxError$1 = function(message, source, offset, line, column) {
    var error = createCustomError("SyntaxError", message);
    error.source = source;
    error.offset = offset;
    error.line = line;
    error.column = column;
    error.sourceFragment = function(extraLines) {
      return sourceFragment(error, isNaN(extraLines) ? 0 : extraLines);
    };
    Object.defineProperty(error, "formattedMessage", {
      get: function() {
        return "Parse error: " + error.message + "\n" + sourceFragment(error, 2);
      }
    });
    error.parseError = {
      offset,
      line,
      column
    };
    return error;
  };
  var _SyntaxError = SyntaxError$1;
  function createItem(data2) {
    return {
      prev: null,
      next: null,
      data: data2
    };
  }
  function allocateCursor(node2, prev, next) {
    var cursor;
    if (cursors !== null) {
      cursor = cursors;
      cursors = cursors.cursor;
      cursor.prev = prev;
      cursor.next = next;
      cursor.cursor = node2.cursor;
    } else {
      cursor = {
        prev,
        next,
        cursor: node2.cursor
      };
    }
    node2.cursor = cursor;
    return cursor;
  }
  function releaseCursor(node2) {
    var cursor = node2.cursor;
    node2.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursors;
    cursors = cursor;
  }
  var cursors = null;
  var List = function() {
    this.cursor = null;
    this.head = null;
    this.tail = null;
  };
  List.createItem = createItem;
  List.prototype.createItem = createItem;
  List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
    var cursor = this.cursor;
    while (cursor !== null) {
      if (cursor.prev === prevOld) {
        cursor.prev = prevNew;
      }
      if (cursor.next === nextOld) {
        cursor.next = nextNew;
      }
      cursor = cursor.cursor;
    }
  };
  List.prototype.getSize = function() {
    var size = 0;
    var cursor = this.head;
    while (cursor) {
      size++;
      cursor = cursor.next;
    }
    return size;
  };
  List.prototype.fromArray = function(array) {
    var cursor = null;
    this.head = null;
    for (var i2 = 0; i2 < array.length; i2++) {
      var item = createItem(array[i2]);
      if (cursor !== null) {
        cursor.next = item;
      } else {
        this.head = item;
      }
      item.prev = cursor;
      cursor = item;
    }
    this.tail = cursor;
    return this;
  };
  List.prototype.toArray = function() {
    var cursor = this.head;
    var result = [];
    while (cursor) {
      result.push(cursor.data);
      cursor = cursor.next;
    }
    return result;
  };
  List.prototype.toJSON = List.prototype.toArray;
  List.prototype.isEmpty = function() {
    return this.head === null;
  };
  List.prototype.first = function() {
    return this.head && this.head.data;
  };
  List.prototype.last = function() {
    return this.tail && this.tail.data;
  };
  List.prototype.each = function(fn, context) {
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, null, this.head);
    while (cursor.next !== null) {
      item = cursor.next;
      cursor.next = item.next;
      fn.call(context, item.data, item, this);
    }
    releaseCursor(this);
  };
  List.prototype.forEach = List.prototype.each;
  List.prototype.eachRight = function(fn, context) {
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, this.tail, null);
    while (cursor.prev !== null) {
      item = cursor.prev;
      cursor.prev = item.prev;
      fn.call(context, item.data, item, this);
    }
    releaseCursor(this);
  };
  List.prototype.forEachRight = List.prototype.eachRight;
  List.prototype.reduce = function(fn, initialValue, context) {
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, null, this.head);
    var acc = initialValue;
    while (cursor.next !== null) {
      item = cursor.next;
      cursor.next = item.next;
      acc = fn.call(context, acc, item.data, item, this);
    }
    releaseCursor(this);
    return acc;
  };
  List.prototype.reduceRight = function(fn, initialValue, context) {
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, this.tail, null);
    var acc = initialValue;
    while (cursor.prev !== null) {
      item = cursor.prev;
      cursor.prev = item.prev;
      acc = fn.call(context, acc, item.data, item, this);
    }
    releaseCursor(this);
    return acc;
  };
  List.prototype.nextUntil = function(start, fn, context) {
    if (start === null) {
      return;
    }
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, null, start);
    while (cursor.next !== null) {
      item = cursor.next;
      cursor.next = item.next;
      if (fn.call(context, item.data, item, this)) {
        break;
      }
    }
    releaseCursor(this);
  };
  List.prototype.prevUntil = function(start, fn, context) {
    if (start === null) {
      return;
    }
    var item;
    if (context === void 0) {
      context = this;
    }
    var cursor = allocateCursor(this, start, null);
    while (cursor.prev !== null) {
      item = cursor.prev;
      cursor.prev = item.prev;
      if (fn.call(context, item.data, item, this)) {
        break;
      }
    }
    releaseCursor(this);
  };
  List.prototype.some = function(fn, context) {
    var cursor = this.head;
    if (context === void 0) {
      context = this;
    }
    while (cursor !== null) {
      if (fn.call(context, cursor.data, cursor, this)) {
        return true;
      }
      cursor = cursor.next;
    }
    return false;
  };
  List.prototype.map = function(fn, context) {
    var result = new List();
    var cursor = this.head;
    if (context === void 0) {
      context = this;
    }
    while (cursor !== null) {
      result.appendData(fn.call(context, cursor.data, cursor, this));
      cursor = cursor.next;
    }
    return result;
  };
  List.prototype.filter = function(fn, context) {
    var result = new List();
    var cursor = this.head;
    if (context === void 0) {
      context = this;
    }
    while (cursor !== null) {
      if (fn.call(context, cursor.data, cursor, this)) {
        result.appendData(cursor.data);
      }
      cursor = cursor.next;
    }
    return result;
  };
  List.prototype.clear = function() {
    this.head = null;
    this.tail = null;
  };
  List.prototype.copy = function() {
    var result = new List();
    var cursor = this.head;
    while (cursor !== null) {
      result.insert(createItem(cursor.data));
      cursor = cursor.next;
    }
    return result;
  };
  List.prototype.prepend = function(item) {
    this.updateCursors(null, item, this.head, item);
    if (this.head !== null) {
      this.head.prev = item;
      item.next = this.head;
    } else {
      this.tail = item;
    }
    this.head = item;
    return this;
  };
  List.prototype.prependData = function(data2) {
    return this.prepend(createItem(data2));
  };
  List.prototype.append = function(item) {
    return this.insert(item);
  };
  List.prototype.appendData = function(data2) {
    return this.insert(createItem(data2));
  };
  List.prototype.insert = function(item, before) {
    if (before !== void 0 && before !== null) {
      this.updateCursors(before.prev, item, before, item);
      if (before.prev === null) {
        if (this.head !== before) {
          throw new Error("before doesn't belong to list");
        }
        this.head = item;
        before.prev = item;
        item.next = before;
        this.updateCursors(null, item);
      } else {
        before.prev.next = item;
        item.prev = before.prev;
        before.prev = item;
        item.next = before;
      }
    } else {
      this.updateCursors(this.tail, item, null, item);
      if (this.tail !== null) {
        this.tail.next = item;
        item.prev = this.tail;
      } else {
        this.head = item;
      }
      this.tail = item;
    }
    return this;
  };
  List.prototype.insertData = function(data2, before) {
    return this.insert(createItem(data2), before);
  };
  List.prototype.remove = function(item) {
    this.updateCursors(item, item.prev, item, item.next);
    if (item.prev !== null) {
      item.prev.next = item.next;
    } else {
      if (this.head !== item) {
        throw new Error("item doesn't belong to list");
      }
      this.head = item.next;
    }
    if (item.next !== null) {
      item.next.prev = item.prev;
    } else {
      if (this.tail !== item) {
        throw new Error("item doesn't belong to list");
      }
      this.tail = item.prev;
    }
    item.prev = null;
    item.next = null;
    return item;
  };
  List.prototype.push = function(data2) {
    this.insert(createItem(data2));
  };
  List.prototype.pop = function() {
    if (this.tail !== null) {
      return this.remove(this.tail);
    }
  };
  List.prototype.unshift = function(data2) {
    this.prepend(createItem(data2));
  };
  List.prototype.shift = function() {
    if (this.head !== null) {
      return this.remove(this.head);
    }
  };
  List.prototype.prependList = function(list) {
    return this.insertList(list, this.head);
  };
  List.prototype.appendList = function(list) {
    return this.insertList(list);
  };
  List.prototype.insertList = function(list, before) {
    if (list.head === null) {
      return this;
    }
    if (before !== void 0 && before !== null) {
      this.updateCursors(before.prev, list.tail, before, list.head);
      if (before.prev !== null) {
        before.prev.next = list.head;
        list.head.prev = before.prev;
      } else {
        this.head = list.head;
      }
      before.prev = list.tail;
      list.tail.next = before;
    } else {
      this.updateCursors(this.tail, list.tail, null, list.head);
      if (this.tail !== null) {
        this.tail.next = list.head;
        list.head.prev = this.tail;
      } else {
        this.head = list.head;
      }
      this.tail = list.tail;
    }
    list.head = null;
    list.tail = null;
    return this;
  };
  List.prototype.replace = function(oldItem, newItemOrList) {
    if ("head" in newItemOrList) {
      this.insertList(newItemOrList, oldItem);
    } else {
      this.insert(newItemOrList, oldItem);
    }
    this.remove(oldItem);
  };
  var List_1 = List;
  var TYPE$3 = tokenizer.TYPE;
  var WHITESPACE$1 = TYPE$3.WhiteSpace;
  var COMMENT$1 = TYPE$3.Comment;
  var sequence = function readSequence2(recognizer) {
    var children = this.createList();
    var child = null;
    var context = {
      recognizer,
      space: null,
      ignoreWS: false,
      ignoreWSAfter: false
    };
    this.scanner.skipSC();
    while (!this.scanner.eof) {
      switch (this.scanner.tokenType) {
        case COMMENT$1:
          this.scanner.next();
          continue;
        case WHITESPACE$1:
          if (context.ignoreWS) {
            this.scanner.next();
          } else {
            context.space = this.WhiteSpace();
          }
          continue;
      }
      child = recognizer.getNode.call(this, context);
      if (child === void 0) {
        break;
      }
      if (context.space !== null) {
        children.push(context.space);
        context.space = null;
      }
      children.push(child);
      if (context.ignoreWSAfter) {
        context.ignoreWSAfter = false;
        context.ignoreWS = true;
      } else {
        context.ignoreWS = false;
      }
    }
    return children;
  };
  var { findWhiteSpaceStart: findWhiteSpaceStart$1, cmpStr: cmpStr$3 } = utils;
  var noop = function() {
  };
  var TYPE$4 = _const.TYPE;
  var NAME$2 = _const.NAME;
  var WHITESPACE$2 = TYPE$4.WhiteSpace;
  var COMMENT$2 = TYPE$4.Comment;
  var IDENT = TYPE$4.Ident;
  var FUNCTION = TYPE$4.Function;
  var URL$1 = TYPE$4.Url;
  var HASH = TYPE$4.Hash;
  var PERCENTAGE = TYPE$4.Percentage;
  var NUMBER = TYPE$4.Number;
  var NUMBERSIGN = 35;
  var NULL = 0;
  function createParseContext(name) {
    return function() {
      return this[name]();
    };
  }
  function processConfig(config) {
    var parserConfig = {
      context: {},
      scope: {},
      atrule: {},
      pseudo: {}
    };
    if (config.parseContext) {
      for (var name in config.parseContext) {
        switch (typeof config.parseContext[name]) {
          case "function":
            parserConfig.context[name] = config.parseContext[name];
            break;
          case "string":
            parserConfig.context[name] = createParseContext(config.parseContext[name]);
            break;
        }
      }
    }
    if (config.scope) {
      for (var name in config.scope) {
        parserConfig.scope[name] = config.scope[name];
      }
    }
    if (config.atrule) {
      for (var name in config.atrule) {
        var atrule2 = config.atrule[name];
        if (atrule2.parse) {
          parserConfig.atrule[name] = atrule2.parse;
        }
      }
    }
    if (config.pseudo) {
      for (var name in config.pseudo) {
        var pseudo2 = config.pseudo[name];
        if (pseudo2.parse) {
          parserConfig.pseudo[name] = pseudo2.parse;
        }
      }
    }
    if (config.node) {
      for (var name in config.node) {
        parserConfig[name] = config.node[name].parse;
      }
    }
    return parserConfig;
  }
  var create = function createParser(config) {
    var parser2 = {
      scanner: new TokenStream_1(),
      locationMap: new OffsetToLocation_1(),
      filename: "<unknown>",
      needPositions: false,
      onParseError: noop,
      onParseErrorThrow: false,
      parseAtrulePrelude: true,
      parseRulePrelude: true,
      parseValue: true,
      parseCustomProperty: false,
      readSequence: sequence,
      createList: function() {
        return new List_1();
      },
      createSingleNodeList: function(node2) {
        return new List_1().appendData(node2);
      },
      getFirstListNode: function(list) {
        return list && list.first();
      },
      getLastListNode: function(list) {
        return list.last();
      },
      parseWithFallback: function(consumer, fallback) {
        var startToken = this.scanner.tokenIndex;
        try {
          return consumer.call(this);
        } catch (e) {
          if (this.onParseErrorThrow) {
            throw e;
          }
          var fallbackNode = fallback.call(this, startToken);
          this.onParseErrorThrow = true;
          this.onParseError(e, fallbackNode);
          this.onParseErrorThrow = false;
          return fallbackNode;
        }
      },
      lookupNonWSType: function(offset) {
        do {
          var type = this.scanner.lookupType(offset++);
          if (type !== WHITESPACE$2) {
            return type;
          }
        } while (type !== NULL);
        return NULL;
      },
      eat: function(tokenType) {
        if (this.scanner.tokenType !== tokenType) {
          var offset = this.scanner.tokenStart;
          var message = NAME$2[tokenType] + " is expected";
          switch (tokenType) {
            case IDENT:
              if (this.scanner.tokenType === FUNCTION || this.scanner.tokenType === URL$1) {
                offset = this.scanner.tokenEnd - 1;
                message = "Identifier is expected but function found";
              } else {
                message = "Identifier is expected";
              }
              break;
            case HASH:
              if (this.scanner.isDelim(NUMBERSIGN)) {
                this.scanner.next();
                offset++;
                message = "Name is expected";
              }
              break;
            case PERCENTAGE:
              if (this.scanner.tokenType === NUMBER) {
                offset = this.scanner.tokenEnd;
                message = "Percent sign is expected";
              }
              break;
            default:
              if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === tokenType) {
                offset = offset + 1;
              }
          }
          this.error(message, offset);
        }
        this.scanner.next();
      },
      consume: function(tokenType) {
        var value2 = this.scanner.getTokenValue();
        this.eat(tokenType);
        return value2;
      },
      consumeFunctionName: function() {
        var name = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
        this.eat(FUNCTION);
        return name;
      },
      getLocation: function(start, end) {
        if (this.needPositions) {
          return this.locationMap.getLocationRange(start, end, this.filename);
        }
        return null;
      },
      getLocationFromList: function(list) {
        if (this.needPositions) {
          var head = this.getFirstListNode(list);
          var tail = this.getLastListNode(list);
          return this.locationMap.getLocationRange(head !== null ? head.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart, tail !== null ? tail.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart, this.filename);
        }
        return null;
      },
      error: function(message, offset) {
        var location = typeof offset !== "undefined" && offset < this.scanner.source.length ? this.locationMap.getLocation(offset) : this.scanner.eof ? this.locationMap.getLocation(findWhiteSpaceStart$1(this.scanner.source, this.scanner.source.length - 1)) : this.locationMap.getLocation(this.scanner.tokenStart);
        throw new _SyntaxError(message || "Unexpected input", this.scanner.source, location.offset, location.line, location.column);
      }
    };
    config = processConfig(config || {});
    for (var key in config) {
      parser2[key] = config[key];
    }
    return function(source, options) {
      options = options || {};
      var context = options.context || "default";
      var onComment = options.onComment;
      var ast;
      tokenizer(source, parser2.scanner);
      parser2.locationMap.setSource(source, options.offset, options.line, options.column);
      parser2.filename = options.filename || "<unknown>";
      parser2.needPositions = Boolean(options.positions);
      parser2.onParseError = typeof options.onParseError === "function" ? options.onParseError : noop;
      parser2.onParseErrorThrow = false;
      parser2.parseAtrulePrelude = "parseAtrulePrelude" in options ? Boolean(options.parseAtrulePrelude) : true;
      parser2.parseRulePrelude = "parseRulePrelude" in options ? Boolean(options.parseRulePrelude) : true;
      parser2.parseValue = "parseValue" in options ? Boolean(options.parseValue) : true;
      parser2.parseCustomProperty = "parseCustomProperty" in options ? Boolean(options.parseCustomProperty) : false;
      if (!parser2.context.hasOwnProperty(context)) {
        throw new Error("Unknown context `" + context + "`");
      }
      if (typeof onComment === "function") {
        parser2.scanner.forEachToken((type, start, end) => {
          if (type === COMMENT$2) {
            const loc = parser2.getLocation(start, end);
            const value2 = cmpStr$3(source, end - 2, end, "*/") ? source.slice(start + 2, end - 2) : source.slice(start + 2, end);
            onComment(value2, loc);
          }
        });
      }
      ast = parser2.context[context].call(parser2, options);
      if (!parser2.scanner.eof) {
        parser2.error();
      }
      return ast;
    };
  };
  var cmpChar$1 = tokenizer.cmpChar;
  var cmpStr$4 = tokenizer.cmpStr;
  var TYPE$5 = tokenizer.TYPE;
  var IDENT$1 = TYPE$5.Ident;
  var STRING = TYPE$5.String;
  var NUMBER$1 = TYPE$5.Number;
  var FUNCTION$1 = TYPE$5.Function;
  var URL$2 = TYPE$5.Url;
  var HASH$1 = TYPE$5.Hash;
  var DIMENSION = TYPE$5.Dimension;
  var PERCENTAGE$1 = TYPE$5.Percentage;
  var LEFTPARENTHESIS = TYPE$5.LeftParenthesis;
  var LEFTSQUAREBRACKET = TYPE$5.LeftSquareBracket;
  var COMMA = TYPE$5.Comma;
  var DELIM = TYPE$5.Delim;
  var NUMBERSIGN$1 = 35;
  var ASTERISK = 42;
  var PLUSSIGN = 43;
  var HYPHENMINUS = 45;
  var SOLIDUS = 47;
  var U = 117;
  var _default = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
      case HASH$1:
        return this.Hash();
      case COMMA:
        context.space = null;
        context.ignoreWSAfter = true;
        return this.Operator();
      case LEFTPARENTHESIS:
        return this.Parentheses(this.readSequence, context.recognizer);
      case LEFTSQUAREBRACKET:
        return this.Brackets(this.readSequence, context.recognizer);
      case STRING:
        return this.String();
      case DIMENSION:
        return this.Dimension();
      case PERCENTAGE$1:
        return this.Percentage();
      case NUMBER$1:
        return this.Number();
      case FUNCTION$1:
        return cmpStr$4(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, context.recognizer);
      case URL$2:
        return this.Url();
      case IDENT$1:
        if (cmpChar$1(this.scanner.source, this.scanner.tokenStart, U) && cmpChar$1(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN)) {
          return this.UnicodeRange();
        } else {
          return this.Identifier();
        }
      case DELIM:
        var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
        if (code === SOLIDUS || code === ASTERISK || code === PLUSSIGN || code === HYPHENMINUS) {
          return this.Operator();
        }
        if (code === NUMBERSIGN$1) {
          this.error("Hex or identifier is expected", this.scanner.tokenStart + 1);
        }
        break;
    }
  };
  var atrulePrelude = {
    getNode: _default
  };
  var TYPE$6 = tokenizer.TYPE;
  var DELIM$1 = TYPE$6.Delim;
  var IDENT$2 = TYPE$6.Ident;
  var DIMENSION$1 = TYPE$6.Dimension;
  var PERCENTAGE$2 = TYPE$6.Percentage;
  var NUMBER$2 = TYPE$6.Number;
  var HASH$2 = TYPE$6.Hash;
  var COLON = TYPE$6.Colon;
  var LEFTSQUAREBRACKET$1 = TYPE$6.LeftSquareBracket;
  var NUMBERSIGN$2 = 35;
  var ASTERISK$1 = 42;
  var PLUSSIGN$1 = 43;
  var SOLIDUS$1 = 47;
  var FULLSTOP = 46;
  var GREATERTHANSIGN = 62;
  var VERTICALLINE = 124;
  var TILDE = 126;
  function getNode(context) {
    switch (this.scanner.tokenType) {
      case LEFTSQUAREBRACKET$1:
        return this.AttributeSelector();
      case HASH$2:
        return this.IdSelector();
      case COLON:
        if (this.scanner.lookupType(1) === COLON) {
          return this.PseudoElementSelector();
        } else {
          return this.PseudoClassSelector();
        }
      case IDENT$2:
        return this.TypeSelector();
      case NUMBER$2:
      case PERCENTAGE$2:
        return this.Percentage();
      case DIMENSION$1:
        if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === FULLSTOP) {
          this.error("Identifier is expected", this.scanner.tokenStart + 1);
        }
        break;
      case DELIM$1:
        var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
        switch (code) {
          case PLUSSIGN$1:
          case GREATERTHANSIGN:
          case TILDE:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Combinator();
          case SOLIDUS$1:
            return this.Combinator();
          case FULLSTOP:
            return this.ClassSelector();
          case ASTERISK$1:
          case VERTICALLINE:
            return this.TypeSelector();
          case NUMBERSIGN$2:
            return this.IdSelector();
        }
        break;
    }
  }
  var selector = {
    getNode
  };
  var expression = function() {
    return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
  };
  var TYPE$7 = tokenizer.TYPE;
  var WhiteSpace = TYPE$7.WhiteSpace;
  var Semicolon = TYPE$7.Semicolon;
  var LeftCurlyBracket = TYPE$7.LeftCurlyBracket;
  var Delim = TYPE$7.Delim;
  var EXCLAMATIONMARK = 33;
  function getOffsetExcludeWS() {
    if (this.scanner.tokenIndex > 0) {
      if (this.scanner.lookupType(-1) === WhiteSpace) {
        return this.scanner.tokenIndex > 1 ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1) : this.scanner.firstCharOffset;
      }
    }
    return this.scanner.tokenStart;
  }
  function balanceEnd() {
    return 0;
  }
  function leftCurlyBracket(tokenType) {
    return tokenType === LeftCurlyBracket ? 1 : 0;
  }
  function leftCurlyBracketOrSemicolon(tokenType) {
    return tokenType === LeftCurlyBracket || tokenType === Semicolon ? 1 : 0;
  }
  function exclamationMarkOrSemicolon(tokenType, source, offset) {
    if (tokenType === Delim && source.charCodeAt(offset) === EXCLAMATIONMARK) {
      return 1;
    }
    return tokenType === Semicolon ? 1 : 0;
  }
  function semicolonIncluded(tokenType) {
    return tokenType === Semicolon ? 2 : 0;
  }
  var Raw = {
    name: "Raw",
    structure: {
      value: String
    },
    parse: function(startToken, mode, excludeWhiteSpace) {
      var startOffset = this.scanner.getTokenStart(startToken);
      var endOffset;
      this.scanner.skip(this.scanner.getRawLength(startToken, mode || balanceEnd));
      if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
        endOffset = getOffsetExcludeWS.call(this);
      } else {
        endOffset = this.scanner.tokenStart;
      }
      return {
        type: "Raw",
        loc: this.getLocation(startOffset, endOffset),
        value: this.scanner.source.substring(startOffset, endOffset)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
    },
    mode: {
      default: balanceEnd,
      leftCurlyBracket,
      leftCurlyBracketOrSemicolon,
      exclamationMarkOrSemicolon,
      semicolonIncluded
    }
  };
  var TYPE$8 = tokenizer.TYPE;
  var rawMode = Raw.mode;
  var COMMA$1 = TYPE$8.Comma;
  var WHITESPACE$3 = TYPE$8.WhiteSpace;
  var _var = function() {
    var children = this.createList();
    this.scanner.skipSC();
    children.push(this.Identifier());
    this.scanner.skipSC();
    if (this.scanner.tokenType === COMMA$1) {
      children.push(this.Operator());
      const startIndex = this.scanner.tokenIndex;
      const value2 = this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.tokenIndex, rawMode.exclamationMarkOrSemicolon, false);
      if (value2.type === "Value" && value2.children.isEmpty()) {
        for (let offset = startIndex - this.scanner.tokenIndex; offset <= 0; offset++) {
          if (this.scanner.lookupType(offset) === WHITESPACE$3) {
            value2.children.appendData({
              type: "WhiteSpace",
              loc: null,
              value: " "
            });
            break;
          }
        }
      }
      children.push(value2);
    }
    return children;
  };
  var value = {
    getNode: _default,
    "expression": expression,
    "var": _var
  };
  var scope = {
    AtrulePrelude: atrulePrelude,
    Selector: selector,
    Value: value
  };
  var fontFace = {
    parse: {
      prelude: null,
      block: function() {
        return this.Block(true);
      }
    }
  };
  var TYPE$9 = tokenizer.TYPE;
  var STRING$1 = TYPE$9.String;
  var IDENT$3 = TYPE$9.Ident;
  var URL$3 = TYPE$9.Url;
  var FUNCTION$2 = TYPE$9.Function;
  var LEFTPARENTHESIS$1 = TYPE$9.LeftParenthesis;
  var _import = {
    parse: {
      prelude: function() {
        var children = this.createList();
        this.scanner.skipSC();
        switch (this.scanner.tokenType) {
          case STRING$1:
            children.push(this.String());
            break;
          case URL$3:
          case FUNCTION$2:
            children.push(this.Url());
            break;
          default:
            this.error("String or url() is expected");
        }
        if (this.lookupNonWSType(0) === IDENT$3 || this.lookupNonWSType(0) === LEFTPARENTHESIS$1) {
          children.push(this.WhiteSpace());
          children.push(this.MediaQueryList());
        }
        return children;
      },
      block: null
    }
  };
  var media = {
    parse: {
      prelude: function() {
        return this.createSingleNodeList(this.MediaQueryList());
      },
      block: function() {
        return this.Block(false);
      }
    }
  };
  var page = {
    parse: {
      prelude: function() {
        return this.createSingleNodeList(this.SelectorList());
      },
      block: function() {
        return this.Block(true);
      }
    }
  };
  var TYPE$a = tokenizer.TYPE;
  var WHITESPACE$4 = TYPE$a.WhiteSpace;
  var COMMENT$3 = TYPE$a.Comment;
  var IDENT$4 = TYPE$a.Ident;
  var FUNCTION$3 = TYPE$a.Function;
  var COLON$1 = TYPE$a.Colon;
  var LEFTPARENTHESIS$2 = TYPE$a.LeftParenthesis;
  function consumeRaw() {
    return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
  }
  function parentheses() {
    this.scanner.skipSC();
    if (this.scanner.tokenType === IDENT$4 && this.lookupNonWSType(1) === COLON$1) {
      return this.createSingleNodeList(this.Declaration());
    }
    return readSequence.call(this);
  }
  function readSequence() {
    var children = this.createList();
    var space = null;
    var child;
    this.scanner.skipSC();
    scan:
      while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
          case WHITESPACE$4:
            space = this.WhiteSpace();
            continue;
          case COMMENT$3:
            this.scanner.next();
            continue;
          case FUNCTION$3:
            child = this.Function(consumeRaw, this.scope.AtrulePrelude);
            break;
          case IDENT$4:
            child = this.Identifier();
            break;
          case LEFTPARENTHESIS$2:
            child = this.Parentheses(parentheses, this.scope.AtrulePrelude);
            break;
          default:
            break scan;
        }
        if (space !== null) {
          children.push(space);
          space = null;
        }
        children.push(child);
      }
    return children;
  }
  var supports = {
    parse: {
      prelude: function() {
        var children = readSequence.call(this);
        if (this.getFirstListNode(children) === null) {
          this.error("Condition is expected");
        }
        return children;
      },
      block: function() {
        return this.Block(false);
      }
    }
  };
  var atrule = {
    "font-face": fontFace,
    "import": _import,
    "media": media,
    "page": page,
    "supports": supports
  };
  var dir = {
    parse: function() {
      return this.createSingleNodeList(this.Identifier());
    }
  };
  var has$1 = {
    parse: function() {
      return this.createSingleNodeList(this.SelectorList());
    }
  };
  var lang = {
    parse: function() {
      return this.createSingleNodeList(this.Identifier());
    }
  };
  var selectorList = {
    parse: function selectorList2() {
      return this.createSingleNodeList(this.SelectorList());
    }
  };
  var matches = selectorList;
  var not = selectorList;
  var ALLOW_OF_CLAUSE = true;
  var nthWithOfClause = {
    parse: function nthWithOfClause2() {
      return this.createSingleNodeList(this.Nth(ALLOW_OF_CLAUSE));
    }
  };
  var nthChild = nthWithOfClause;
  var nthLastChild = nthWithOfClause;
  var DISALLOW_OF_CLAUSE = false;
  var nth = {
    parse: function nth2() {
      return this.createSingleNodeList(this.Nth(DISALLOW_OF_CLAUSE));
    }
  };
  var nthLastOfType = nth;
  var nthOfType = nth;
  var slotted = {
    parse: function compoundSelector() {
      return this.createSingleNodeList(this.Selector());
    }
  };
  var pseudo = {
    "dir": dir,
    "has": has$1,
    "lang": lang,
    "matches": matches,
    "not": not,
    "nth-child": nthChild,
    "nth-last-child": nthLastChild,
    "nth-last-of-type": nthLastOfType,
    "nth-of-type": nthOfType,
    "slotted": slotted
  };
  var cmpChar$2 = tokenizer.cmpChar;
  var isDigit$2 = tokenizer.isDigit;
  var TYPE$b = tokenizer.TYPE;
  var WHITESPACE$5 = TYPE$b.WhiteSpace;
  var COMMENT$4 = TYPE$b.Comment;
  var IDENT$5 = TYPE$b.Ident;
  var NUMBER$3 = TYPE$b.Number;
  var DIMENSION$2 = TYPE$b.Dimension;
  var PLUSSIGN$2 = 43;
  var HYPHENMINUS$1 = 45;
  var N$1 = 110;
  var DISALLOW_SIGN = true;
  var ALLOW_SIGN = false;
  function checkInteger(offset, disallowSign) {
    var pos = this.scanner.tokenStart + offset;
    var code = this.scanner.source.charCodeAt(pos);
    if (code === PLUSSIGN$2 || code === HYPHENMINUS$1) {
      if (disallowSign) {
        this.error("Number sign is not allowed");
      }
      pos++;
    }
    for (; pos < this.scanner.tokenEnd; pos++) {
      if (!isDigit$2(this.scanner.source.charCodeAt(pos))) {
        this.error("Integer is expected", pos);
      }
    }
  }
  function checkTokenIsInteger(disallowSign) {
    return checkInteger.call(this, 0, disallowSign);
  }
  function expectCharCode(offset, code) {
    if (!cmpChar$2(this.scanner.source, this.scanner.tokenStart + offset, code)) {
      var msg = "";
      switch (code) {
        case N$1:
          msg = "N is expected";
          break;
        case HYPHENMINUS$1:
          msg = "HyphenMinus is expected";
          break;
      }
      this.error(msg, this.scanner.tokenStart + offset);
    }
  }
  function consumeB() {
    var offset = 0;
    var sign = 0;
    var type = this.scanner.tokenType;
    while (type === WHITESPACE$5 || type === COMMENT$4) {
      type = this.scanner.lookupType(++offset);
    }
    if (type !== NUMBER$3) {
      if (this.scanner.isDelim(PLUSSIGN$2, offset) || this.scanner.isDelim(HYPHENMINUS$1, offset)) {
        sign = this.scanner.isDelim(PLUSSIGN$2, offset) ? PLUSSIGN$2 : HYPHENMINUS$1;
        do {
          type = this.scanner.lookupType(++offset);
        } while (type === WHITESPACE$5 || type === COMMENT$4);
        if (type !== NUMBER$3) {
          this.scanner.skip(offset);
          checkTokenIsInteger.call(this, DISALLOW_SIGN);
        }
      } else {
        return null;
      }
    }
    if (offset > 0) {
      this.scanner.skip(offset);
    }
    if (sign === 0) {
      type = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      if (type !== PLUSSIGN$2 && type !== HYPHENMINUS$1) {
        this.error("Number sign is expected");
      }
    }
    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS$1 ? "-" + this.consume(NUMBER$3) : this.consume(NUMBER$3);
  }
  var AnPlusB = {
    name: "AnPlusB",
    structure: {
      a: [String, null],
      b: [String, null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var a = null;
      var b = null;
      if (this.scanner.tokenType === NUMBER$3) {
        checkTokenIsInteger.call(this, ALLOW_SIGN);
        b = this.consume(NUMBER$3);
      } else if (this.scanner.tokenType === IDENT$5 && cmpChar$2(this.scanner.source, this.scanner.tokenStart, HYPHENMINUS$1)) {
        a = "-1";
        expectCharCode.call(this, 1, N$1);
        switch (this.scanner.getTokenLength()) {
          case 2:
            this.scanner.next();
            b = consumeB.call(this);
            break;
          case 3:
            expectCharCode.call(this, 2, HYPHENMINUS$1);
            this.scanner.next();
            this.scanner.skipSC();
            checkTokenIsInteger.call(this, DISALLOW_SIGN);
            b = "-" + this.consume(NUMBER$3);
            break;
          default:
            expectCharCode.call(this, 2, HYPHENMINUS$1);
            checkInteger.call(this, 3, DISALLOW_SIGN);
            this.scanner.next();
            b = this.scanner.substrToCursor(start + 2);
        }
      } else if (this.scanner.tokenType === IDENT$5 || this.scanner.isDelim(PLUSSIGN$2) && this.scanner.lookupType(1) === IDENT$5) {
        var sign = 0;
        a = "1";
        if (this.scanner.isDelim(PLUSSIGN$2)) {
          sign = 1;
          this.scanner.next();
        }
        expectCharCode.call(this, 0, N$1);
        switch (this.scanner.getTokenLength()) {
          case 1:
            this.scanner.next();
            b = consumeB.call(this);
            break;
          case 2:
            expectCharCode.call(this, 1, HYPHENMINUS$1);
            this.scanner.next();
            this.scanner.skipSC();
            checkTokenIsInteger.call(this, DISALLOW_SIGN);
            b = "-" + this.consume(NUMBER$3);
            break;
          default:
            expectCharCode.call(this, 1, HYPHENMINUS$1);
            checkInteger.call(this, 2, DISALLOW_SIGN);
            this.scanner.next();
            b = this.scanner.substrToCursor(start + sign + 1);
        }
      } else if (this.scanner.tokenType === DIMENSION$2) {
        var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
        var sign = code === PLUSSIGN$2 || code === HYPHENMINUS$1;
        for (var i2 = this.scanner.tokenStart + sign; i2 < this.scanner.tokenEnd; i2++) {
          if (!isDigit$2(this.scanner.source.charCodeAt(i2))) {
            break;
          }
        }
        if (i2 === this.scanner.tokenStart + sign) {
          this.error("Integer is expected", this.scanner.tokenStart + sign);
        }
        expectCharCode.call(this, i2 - this.scanner.tokenStart, N$1);
        a = this.scanner.source.substring(start, i2);
        if (i2 + 1 === this.scanner.tokenEnd) {
          this.scanner.next();
          b = consumeB.call(this);
        } else {
          expectCharCode.call(this, i2 - this.scanner.tokenStart + 1, HYPHENMINUS$1);
          if (i2 + 2 === this.scanner.tokenEnd) {
            this.scanner.next();
            this.scanner.skipSC();
            checkTokenIsInteger.call(this, DISALLOW_SIGN);
            b = "-" + this.consume(NUMBER$3);
          } else {
            checkInteger.call(this, i2 - this.scanner.tokenStart + 2, DISALLOW_SIGN);
            this.scanner.next();
            b = this.scanner.substrToCursor(i2 + 1);
          }
        }
      } else {
        this.error();
      }
      if (a !== null && a.charCodeAt(0) === PLUSSIGN$2) {
        a = a.substr(1);
      }
      if (b !== null && b.charCodeAt(0) === PLUSSIGN$2) {
        b = b.substr(1);
      }
      return {
        type: "AnPlusB",
        loc: this.getLocation(start, this.scanner.tokenStart),
        a,
        b
      };
    },
    generate: function(node2) {
      var a = node2.a !== null && node2.a !== void 0;
      var b = node2.b !== null && node2.b !== void 0;
      if (a) {
        this.chunk(node2.a === "+1" ? "+n" : node2.a === "1" ? "n" : node2.a === "-1" ? "-n" : node2.a + "n");
        if (b) {
          b = String(node2.b);
          if (b.charAt(0) === "-" || b.charAt(0) === "+") {
            this.chunk(b.charAt(0));
            this.chunk(b.substr(1));
          } else {
            this.chunk("+");
            this.chunk(b);
          }
        }
      } else {
        this.chunk(String(node2.b));
      }
    }
  };
  var TYPE$c = tokenizer.TYPE;
  var rawMode$1 = Raw.mode;
  var ATKEYWORD = TYPE$c.AtKeyword;
  var SEMICOLON = TYPE$c.Semicolon;
  var LEFTCURLYBRACKET = TYPE$c.LeftCurlyBracket;
  var RIGHTCURLYBRACKET = TYPE$c.RightCurlyBracket;
  function consumeRaw$1(startToken) {
    return this.Raw(startToken, rawMode$1.leftCurlyBracketOrSemicolon, true);
  }
  function isDeclarationBlockAtrule() {
    for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
      if (type === RIGHTCURLYBRACKET) {
        return true;
      }
      if (type === LEFTCURLYBRACKET || type === ATKEYWORD) {
        return false;
      }
    }
    return false;
  }
  var Atrule = {
    name: "Atrule",
    structure: {
      name: String,
      prelude: ["AtrulePrelude", "Raw", null],
      block: ["Block", null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var name;
      var nameLowerCase;
      var prelude = null;
      var block = null;
      this.eat(ATKEYWORD);
      name = this.scanner.substrToCursor(start + 1);
      nameLowerCase = name.toLowerCase();
      this.scanner.skipSC();
      if (this.scanner.eof === false && this.scanner.tokenType !== LEFTCURLYBRACKET && this.scanner.tokenType !== SEMICOLON) {
        if (this.parseAtrulePrelude) {
          prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name), consumeRaw$1);
          if (prelude.type === "AtrulePrelude" && prelude.children.head === null) {
            prelude = null;
          }
        } else {
          prelude = consumeRaw$1.call(this, this.scanner.tokenIndex);
        }
        this.scanner.skipSC();
      }
      switch (this.scanner.tokenType) {
        case SEMICOLON:
          this.scanner.next();
          break;
        case LEFTCURLYBRACKET:
          if (this.atrule.hasOwnProperty(nameLowerCase) && typeof this.atrule[nameLowerCase].block === "function") {
            block = this.atrule[nameLowerCase].block.call(this);
          } else {
            block = this.Block(isDeclarationBlockAtrule.call(this));
          }
          break;
      }
      return {
        type: "Atrule",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        prelude,
        block
      };
    },
    generate: function(node2) {
      this.chunk("@");
      this.chunk(node2.name);
      if (node2.prelude !== null) {
        this.chunk(" ");
        this.node(node2.prelude);
      }
      if (node2.block) {
        this.node(node2.block);
      } else {
        this.chunk(";");
      }
    },
    walkContext: "atrule"
  };
  var TYPE$d = tokenizer.TYPE;
  var SEMICOLON$1 = TYPE$d.Semicolon;
  var LEFTCURLYBRACKET$1 = TYPE$d.LeftCurlyBracket;
  var AtrulePrelude = {
    name: "AtrulePrelude",
    structure: {
      children: [[]]
    },
    parse: function(name) {
      var children = null;
      if (name !== null) {
        name = name.toLowerCase();
      }
      this.scanner.skipSC();
      if (this.atrule.hasOwnProperty(name) && typeof this.atrule[name].prelude === "function") {
        children = this.atrule[name].prelude.call(this);
      } else {
        children = this.readSequence(this.scope.AtrulePrelude);
      }
      this.scanner.skipSC();
      if (this.scanner.eof !== true && this.scanner.tokenType !== LEFTCURLYBRACKET$1 && this.scanner.tokenType !== SEMICOLON$1) {
        this.error("Semicolon or block is expected");
      }
      if (children === null) {
        children = this.createList();
      }
      return {
        type: "AtrulePrelude",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2);
    },
    walkContext: "atrulePrelude"
  };
  var TYPE$e = tokenizer.TYPE;
  var IDENT$6 = TYPE$e.Ident;
  var STRING$2 = TYPE$e.String;
  var COLON$2 = TYPE$e.Colon;
  var LEFTSQUAREBRACKET$2 = TYPE$e.LeftSquareBracket;
  var RIGHTSQUAREBRACKET = TYPE$e.RightSquareBracket;
  var DOLLARSIGN = 36;
  var ASTERISK$2 = 42;
  var EQUALSSIGN = 61;
  var CIRCUMFLEXACCENT = 94;
  var VERTICALLINE$1 = 124;
  var TILDE$1 = 126;
  function getAttributeName() {
    if (this.scanner.eof) {
      this.error("Unexpected end of input");
    }
    var start = this.scanner.tokenStart;
    var expectIdent = false;
    var checkColon = true;
    if (this.scanner.isDelim(ASTERISK$2)) {
      expectIdent = true;
      checkColon = false;
      this.scanner.next();
    } else if (!this.scanner.isDelim(VERTICALLINE$1)) {
      this.eat(IDENT$6);
    }
    if (this.scanner.isDelim(VERTICALLINE$1)) {
      if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== EQUALSSIGN) {
        this.scanner.next();
        this.eat(IDENT$6);
      } else if (expectIdent) {
        this.error("Identifier is expected", this.scanner.tokenEnd);
      }
    } else if (expectIdent) {
      this.error("Vertical line is expected");
    }
    if (checkColon && this.scanner.tokenType === COLON$2) {
      this.scanner.next();
      this.eat(IDENT$6);
    }
    return {
      type: "Identifier",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(start)
    };
  }
  function getOperator() {
    var start = this.scanner.tokenStart;
    var code = this.scanner.source.charCodeAt(start);
    if (code !== EQUALSSIGN && code !== TILDE$1 && code !== CIRCUMFLEXACCENT && code !== DOLLARSIGN && code !== ASTERISK$2 && code !== VERTICALLINE$1) {
      this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
    }
    this.scanner.next();
    if (code !== EQUALSSIGN) {
      if (!this.scanner.isDelim(EQUALSSIGN)) {
        this.error("Equal sign is expected");
      }
      this.scanner.next();
    }
    return this.scanner.substrToCursor(start);
  }
  var AttributeSelector = {
    name: "AttributeSelector",
    structure: {
      name: "Identifier",
      matcher: [String, null],
      value: ["String", "Identifier", null],
      flags: [String, null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var name;
      var matcher = null;
      var value2 = null;
      var flags = null;
      this.eat(LEFTSQUAREBRACKET$2);
      this.scanner.skipSC();
      name = getAttributeName.call(this);
      this.scanner.skipSC();
      if (this.scanner.tokenType !== RIGHTSQUAREBRACKET) {
        if (this.scanner.tokenType !== IDENT$6) {
          matcher = getOperator.call(this);
          this.scanner.skipSC();
          value2 = this.scanner.tokenType === STRING$2 ? this.String() : this.Identifier();
          this.scanner.skipSC();
        }
        if (this.scanner.tokenType === IDENT$6) {
          flags = this.scanner.getTokenValue();
          this.scanner.next();
          this.scanner.skipSC();
        }
      }
      this.eat(RIGHTSQUAREBRACKET);
      return {
        type: "AttributeSelector",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        matcher,
        value: value2,
        flags
      };
    },
    generate: function(node2) {
      var flagsPrefix = " ";
      this.chunk("[");
      this.node(node2.name);
      if (node2.matcher !== null) {
        this.chunk(node2.matcher);
        if (node2.value !== null) {
          this.node(node2.value);
          if (node2.value.type === "String") {
            flagsPrefix = "";
          }
        }
      }
      if (node2.flags !== null) {
        this.chunk(flagsPrefix);
        this.chunk(node2.flags);
      }
      this.chunk("]");
    }
  };
  var TYPE$f = tokenizer.TYPE;
  var rawMode$2 = Raw.mode;
  var WHITESPACE$6 = TYPE$f.WhiteSpace;
  var COMMENT$5 = TYPE$f.Comment;
  var SEMICOLON$2 = TYPE$f.Semicolon;
  var ATKEYWORD$1 = TYPE$f.AtKeyword;
  var LEFTCURLYBRACKET$2 = TYPE$f.LeftCurlyBracket;
  var RIGHTCURLYBRACKET$1 = TYPE$f.RightCurlyBracket;
  function consumeRaw$2(startToken) {
    return this.Raw(startToken, null, true);
  }
  function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw$2);
  }
  function consumeRawDeclaration(startToken) {
    return this.Raw(startToken, rawMode$2.semicolonIncluded, true);
  }
  function consumeDeclaration() {
    if (this.scanner.tokenType === SEMICOLON$2) {
      return consumeRawDeclaration.call(this, this.scanner.tokenIndex);
    }
    var node2 = this.parseWithFallback(this.Declaration, consumeRawDeclaration);
    if (this.scanner.tokenType === SEMICOLON$2) {
      this.scanner.next();
    }
    return node2;
  }
  var Block = {
    name: "Block",
    structure: {
      children: [[
        "Atrule",
        "Rule",
        "Declaration"
      ]]
    },
    parse: function(isDeclaration) {
      var consumer = isDeclaration ? consumeDeclaration : consumeRule;
      var start = this.scanner.tokenStart;
      var children = this.createList();
      this.eat(LEFTCURLYBRACKET$2);
      scan:
        while (!this.scanner.eof) {
          switch (this.scanner.tokenType) {
            case RIGHTCURLYBRACKET$1:
              break scan;
            case WHITESPACE$6:
            case COMMENT$5:
              this.scanner.next();
              break;
            case ATKEYWORD$1:
              children.push(this.parseWithFallback(this.Atrule, consumeRaw$2));
              break;
            default:
              children.push(consumer.call(this));
          }
        }
      if (!this.scanner.eof) {
        this.eat(RIGHTCURLYBRACKET$1);
      }
      return {
        type: "Block",
        loc: this.getLocation(start, this.scanner.tokenStart),
        children
      };
    },
    generate: function(node2) {
      this.chunk("{");
      this.children(node2, function(prev) {
        if (prev.type === "Declaration") {
          this.chunk(";");
        }
      });
      this.chunk("}");
    },
    walkContext: "block"
  };
  var TYPE$g = tokenizer.TYPE;
  var LEFTSQUAREBRACKET$3 = TYPE$g.LeftSquareBracket;
  var RIGHTSQUAREBRACKET$1 = TYPE$g.RightSquareBracket;
  var Brackets = {
    name: "Brackets",
    structure: {
      children: [[]]
    },
    parse: function(readSequence2, recognizer) {
      var start = this.scanner.tokenStart;
      var children = null;
      this.eat(LEFTSQUAREBRACKET$3);
      children = readSequence2.call(this, recognizer);
      if (!this.scanner.eof) {
        this.eat(RIGHTSQUAREBRACKET$1);
      }
      return {
        type: "Brackets",
        loc: this.getLocation(start, this.scanner.tokenStart),
        children
      };
    },
    generate: function(node2) {
      this.chunk("[");
      this.children(node2);
      this.chunk("]");
    }
  };
  var CDC = tokenizer.TYPE.CDC;
  var CDC_1 = {
    name: "CDC",
    structure: [],
    parse: function() {
      var start = this.scanner.tokenStart;
      this.eat(CDC);
      return {
        type: "CDC",
        loc: this.getLocation(start, this.scanner.tokenStart)
      };
    },
    generate: function() {
      this.chunk("-->");
    }
  };
  var CDO = tokenizer.TYPE.CDO;
  var CDO_1 = {
    name: "CDO",
    structure: [],
    parse: function() {
      var start = this.scanner.tokenStart;
      this.eat(CDO);
      return {
        type: "CDO",
        loc: this.getLocation(start, this.scanner.tokenStart)
      };
    },
    generate: function() {
      this.chunk("<!--");
    }
  };
  var TYPE$h = tokenizer.TYPE;
  var IDENT$7 = TYPE$h.Ident;
  var FULLSTOP$1 = 46;
  var ClassSelector = {
    name: "ClassSelector",
    structure: {
      name: String
    },
    parse: function() {
      if (!this.scanner.isDelim(FULLSTOP$1)) {
        this.error("Full stop is expected");
      }
      this.scanner.next();
      return {
        type: "ClassSelector",
        loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
        name: this.consume(IDENT$7)
      };
    },
    generate: function(node2) {
      this.chunk(".");
      this.chunk(node2.name);
    }
  };
  var TYPE$i = tokenizer.TYPE;
  var IDENT$8 = TYPE$i.Ident;
  var PLUSSIGN$3 = 43;
  var SOLIDUS$2 = 47;
  var GREATERTHANSIGN$1 = 62;
  var TILDE$2 = 126;
  var Combinator = {
    name: "Combinator",
    structure: {
      name: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      switch (code) {
        case GREATERTHANSIGN$1:
        case PLUSSIGN$3:
        case TILDE$2:
          this.scanner.next();
          break;
        case SOLIDUS$2:
          this.scanner.next();
          if (this.scanner.tokenType !== IDENT$8 || this.scanner.lookupValue(0, "deep") === false) {
            this.error("Identifier `deep` is expected");
          }
          this.scanner.next();
          if (!this.scanner.isDelim(SOLIDUS$2)) {
            this.error("Solidus is expected");
          }
          this.scanner.next();
          break;
        default:
          this.error("Combinator is expected");
      }
      return {
        type: "Combinator",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
      };
    },
    generate: function(node2) {
      this.chunk(node2.name);
    }
  };
  var TYPE$j = tokenizer.TYPE;
  var COMMENT$6 = TYPE$j.Comment;
  var ASTERISK$3 = 42;
  var SOLIDUS$3 = 47;
  var Comment = {
    name: "Comment",
    structure: {
      value: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var end = this.scanner.tokenEnd;
      this.eat(COMMENT$6);
      if (end - start + 2 >= 2 && this.scanner.source.charCodeAt(end - 2) === ASTERISK$3 && this.scanner.source.charCodeAt(end - 1) === SOLIDUS$3) {
        end -= 2;
      }
      return {
        type: "Comment",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.source.substring(start + 2, end)
      };
    },
    generate: function(node2) {
      this.chunk("/*");
      this.chunk(node2.value);
      this.chunk("*/");
    }
  };
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var keywords$2 = /* @__PURE__ */ Object.create(null);
  var properties = /* @__PURE__ */ Object.create(null);
  var HYPHENMINUS$2 = 45;
  function isCustomProperty(str, offset) {
    offset = offset || 0;
    return str.length - offset >= 2 && str.charCodeAt(offset) === HYPHENMINUS$2 && str.charCodeAt(offset + 1) === HYPHENMINUS$2;
  }
  function getVendorPrefix(str, offset) {
    offset = offset || 0;
    if (str.length - offset >= 3) {
      if (str.charCodeAt(offset) === HYPHENMINUS$2 && str.charCodeAt(offset + 1) !== HYPHENMINUS$2) {
        var secondDashIndex = str.indexOf("-", offset + 2);
        if (secondDashIndex !== -1) {
          return str.substring(offset, secondDashIndex + 1);
        }
      }
    }
    return "";
  }
  function getKeywordDescriptor(keyword) {
    if (hasOwnProperty$1.call(keywords$2, keyword)) {
      return keywords$2[keyword];
    }
    var name = keyword.toLowerCase();
    if (hasOwnProperty$1.call(keywords$2, name)) {
      return keywords$2[keyword] = keywords$2[name];
    }
    var custom = isCustomProperty(name, 0);
    var vendor = !custom ? getVendorPrefix(name, 0) : "";
    return keywords$2[keyword] = Object.freeze({
      basename: name.substr(vendor.length),
      name,
      vendor,
      prefix: vendor,
      custom
    });
  }
  function getPropertyDescriptor(property) {
    if (hasOwnProperty$1.call(properties, property)) {
      return properties[property];
    }
    var name = property;
    var hack = property[0];
    if (hack === "/") {
      hack = property[1] === "/" ? "//" : "/";
    } else if (hack !== "_" && hack !== "*" && hack !== "$" && hack !== "#" && hack !== "+" && hack !== "&") {
      hack = "";
    }
    var custom = isCustomProperty(name, hack.length);
    if (!custom) {
      name = name.toLowerCase();
      if (hasOwnProperty$1.call(properties, name)) {
        return properties[property] = properties[name];
      }
    }
    var vendor = !custom ? getVendorPrefix(name, hack.length) : "";
    var prefix = name.substr(0, hack.length + vendor.length);
    return properties[property] = Object.freeze({
      basename: name.substr(prefix.length),
      name: name.substr(hack.length),
      hack,
      vendor,
      prefix,
      custom
    });
  }
  var names = {
    keyword: getKeywordDescriptor,
    property: getPropertyDescriptor,
    isCustomProperty,
    vendorPrefix: getVendorPrefix
  };
  var isCustomProperty$1 = names.isCustomProperty;
  var TYPE$k = tokenizer.TYPE;
  var rawMode$3 = Raw.mode;
  var IDENT$9 = TYPE$k.Ident;
  var HASH$3 = TYPE$k.Hash;
  var COLON$3 = TYPE$k.Colon;
  var SEMICOLON$3 = TYPE$k.Semicolon;
  var DELIM$2 = TYPE$k.Delim;
  var WHITESPACE$7 = TYPE$k.WhiteSpace;
  var EXCLAMATIONMARK$1 = 33;
  var NUMBERSIGN$3 = 35;
  var DOLLARSIGN$1 = 36;
  var AMPERSAND = 38;
  var ASTERISK$4 = 42;
  var PLUSSIGN$4 = 43;
  var SOLIDUS$4 = 47;
  function consumeValueRaw(startToken) {
    return this.Raw(startToken, rawMode$3.exclamationMarkOrSemicolon, true);
  }
  function consumeCustomPropertyRaw(startToken) {
    return this.Raw(startToken, rawMode$3.exclamationMarkOrSemicolon, false);
  }
  function consumeValue() {
    var startValueToken = this.scanner.tokenIndex;
    var value2 = this.Value();
    if (value2.type !== "Raw" && this.scanner.eof === false && this.scanner.tokenType !== SEMICOLON$3 && this.scanner.isDelim(EXCLAMATIONMARK$1) === false && this.scanner.isBalanceEdge(startValueToken) === false) {
      this.error();
    }
    return value2;
  }
  var Declaration = {
    name: "Declaration",
    structure: {
      important: [Boolean, String],
      property: String,
      value: ["Value", "Raw"]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var startToken = this.scanner.tokenIndex;
      var property = readProperty.call(this);
      var customProperty = isCustomProperty$1(property);
      var parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
      var consumeRaw2 = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
      var important = false;
      var value2;
      this.scanner.skipSC();
      this.eat(COLON$3);
      const valueStart = this.scanner.tokenIndex;
      if (!customProperty) {
        this.scanner.skipSC();
      }
      if (parseValue) {
        value2 = this.parseWithFallback(consumeValue, consumeRaw2);
      } else {
        value2 = consumeRaw2.call(this, this.scanner.tokenIndex);
      }
      if (customProperty && value2.type === "Value" && value2.children.isEmpty()) {
        for (let offset = valueStart - this.scanner.tokenIndex; offset <= 0; offset++) {
          if (this.scanner.lookupType(offset) === WHITESPACE$7) {
            value2.children.appendData({
              type: "WhiteSpace",
              loc: null,
              value: " "
            });
            break;
          }
        }
      }
      if (this.scanner.isDelim(EXCLAMATIONMARK$1)) {
        important = getImportant.call(this);
        this.scanner.skipSC();
      }
      if (this.scanner.eof === false && this.scanner.tokenType !== SEMICOLON$3 && this.scanner.isBalanceEdge(startToken) === false) {
        this.error();
      }
      return {
        type: "Declaration",
        loc: this.getLocation(start, this.scanner.tokenStart),
        important,
        property,
        value: value2
      };
    },
    generate: function(node2) {
      this.chunk(node2.property);
      this.chunk(":");
      this.node(node2.value);
      if (node2.important) {
        this.chunk(node2.important === true ? "!important" : "!" + node2.important);
      }
    },
    walkContext: "declaration"
  };
  function readProperty() {
    var start = this.scanner.tokenStart;
    if (this.scanner.tokenType === DELIM$2) {
      switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
        case ASTERISK$4:
        case DOLLARSIGN$1:
        case PLUSSIGN$4:
        case NUMBERSIGN$3:
        case AMPERSAND:
          this.scanner.next();
          break;
        case SOLIDUS$4:
          this.scanner.next();
          if (this.scanner.isDelim(SOLIDUS$4)) {
            this.scanner.next();
          }
          break;
      }
    }
    if (this.scanner.tokenType === HASH$3) {
      this.eat(HASH$3);
    } else {
      this.eat(IDENT$9);
    }
    return this.scanner.substrToCursor(start);
  }
  function getImportant() {
    this.eat(DELIM$2);
    this.scanner.skipSC();
    var important = this.consume(IDENT$9);
    return important === "important" ? true : important;
  }
  var TYPE$l = tokenizer.TYPE;
  var rawMode$4 = Raw.mode;
  var WHITESPACE$8 = TYPE$l.WhiteSpace;
  var COMMENT$7 = TYPE$l.Comment;
  var SEMICOLON$4 = TYPE$l.Semicolon;
  function consumeRaw$3(startToken) {
    return this.Raw(startToken, rawMode$4.semicolonIncluded, true);
  }
  var DeclarationList = {
    name: "DeclarationList",
    structure: {
      children: [[
        "Declaration"
      ]]
    },
    parse: function() {
      var children = this.createList();
      while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
          case WHITESPACE$8:
          case COMMENT$7:
          case SEMICOLON$4:
            this.scanner.next();
            break;
          default:
            children.push(this.parseWithFallback(this.Declaration, consumeRaw$3));
        }
      }
      return {
        type: "DeclarationList",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2, function(prev) {
        if (prev.type === "Declaration") {
          this.chunk(";");
        }
      });
    }
  };
  var consumeNumber$2 = utils.consumeNumber;
  var TYPE$m = tokenizer.TYPE;
  var DIMENSION$3 = TYPE$m.Dimension;
  var Dimension = {
    name: "Dimension",
    structure: {
      value: String,
      unit: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var numberEnd = consumeNumber$2(this.scanner.source, start);
      this.eat(DIMENSION$3);
      return {
        type: "Dimension",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.source.substring(start, numberEnd),
        unit: this.scanner.source.substring(numberEnd, this.scanner.tokenStart)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
      this.chunk(node2.unit);
    }
  };
  var TYPE$n = tokenizer.TYPE;
  var RIGHTPARENTHESIS = TYPE$n.RightParenthesis;
  var _Function = {
    name: "Function",
    structure: {
      name: String,
      children: [[]]
    },
    parse: function(readSequence2, recognizer) {
      var start = this.scanner.tokenStart;
      var name = this.consumeFunctionName();
      var nameLowerCase = name.toLowerCase();
      var children;
      children = recognizer.hasOwnProperty(nameLowerCase) ? recognizer[nameLowerCase].call(this, recognizer) : readSequence2.call(this, recognizer);
      if (!this.scanner.eof) {
        this.eat(RIGHTPARENTHESIS);
      }
      return {
        type: "Function",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        children
      };
    },
    generate: function(node2) {
      this.chunk(node2.name);
      this.chunk("(");
      this.children(node2);
      this.chunk(")");
    },
    walkContext: "function"
  };
  var TYPE$o = tokenizer.TYPE;
  var HASH$4 = TYPE$o.Hash;
  var Hash = {
    name: "Hash",
    structure: {
      value: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      this.eat(HASH$4);
      return {
        type: "Hash",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.substrToCursor(start + 1)
      };
    },
    generate: function(node2) {
      this.chunk("#");
      this.chunk(node2.value);
    }
  };
  var TYPE$p = tokenizer.TYPE;
  var IDENT$a = TYPE$p.Ident;
  var Identifier = {
    name: "Identifier",
    structure: {
      name: String
    },
    parse: function() {
      return {
        type: "Identifier",
        loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        name: this.consume(IDENT$a)
      };
    },
    generate: function(node2) {
      this.chunk(node2.name);
    }
  };
  var TYPE$q = tokenizer.TYPE;
  var HASH$5 = TYPE$q.Hash;
  var IdSelector = {
    name: "IdSelector",
    structure: {
      name: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      this.eat(HASH$5);
      return {
        type: "IdSelector",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start + 1)
      };
    },
    generate: function(node2) {
      this.chunk("#");
      this.chunk(node2.name);
    }
  };
  var TYPE$r = tokenizer.TYPE;
  var IDENT$b = TYPE$r.Ident;
  var NUMBER$4 = TYPE$r.Number;
  var DIMENSION$4 = TYPE$r.Dimension;
  var LEFTPARENTHESIS$3 = TYPE$r.LeftParenthesis;
  var RIGHTPARENTHESIS$1 = TYPE$r.RightParenthesis;
  var COLON$4 = TYPE$r.Colon;
  var DELIM$3 = TYPE$r.Delim;
  var MediaFeature = {
    name: "MediaFeature",
    structure: {
      name: String,
      value: ["Identifier", "Number", "Dimension", "Ratio", null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var name;
      var value2 = null;
      this.eat(LEFTPARENTHESIS$3);
      this.scanner.skipSC();
      name = this.consume(IDENT$b);
      this.scanner.skipSC();
      if (this.scanner.tokenType !== RIGHTPARENTHESIS$1) {
        this.eat(COLON$4);
        this.scanner.skipSC();
        switch (this.scanner.tokenType) {
          case NUMBER$4:
            if (this.lookupNonWSType(1) === DELIM$3) {
              value2 = this.Ratio();
            } else {
              value2 = this.Number();
            }
            break;
          case DIMENSION$4:
            value2 = this.Dimension();
            break;
          case IDENT$b:
            value2 = this.Identifier();
            break;
          default:
            this.error("Number, dimension, ratio or identifier is expected");
        }
        this.scanner.skipSC();
      }
      this.eat(RIGHTPARENTHESIS$1);
      return {
        type: "MediaFeature",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        value: value2
      };
    },
    generate: function(node2) {
      this.chunk("(");
      this.chunk(node2.name);
      if (node2.value !== null) {
        this.chunk(":");
        this.node(node2.value);
      }
      this.chunk(")");
    }
  };
  var TYPE$s = tokenizer.TYPE;
  var WHITESPACE$9 = TYPE$s.WhiteSpace;
  var COMMENT$8 = TYPE$s.Comment;
  var IDENT$c = TYPE$s.Ident;
  var LEFTPARENTHESIS$4 = TYPE$s.LeftParenthesis;
  var MediaQuery = {
    name: "MediaQuery",
    structure: {
      children: [[
        "Identifier",
        "MediaFeature",
        "WhiteSpace"
      ]]
    },
    parse: function() {
      this.scanner.skipSC();
      var children = this.createList();
      var child = null;
      var space = null;
      scan:
        while (!this.scanner.eof) {
          switch (this.scanner.tokenType) {
            case COMMENT$8:
              this.scanner.next();
              continue;
            case WHITESPACE$9:
              space = this.WhiteSpace();
              continue;
            case IDENT$c:
              child = this.Identifier();
              break;
            case LEFTPARENTHESIS$4:
              child = this.MediaFeature();
              break;
            default:
              break scan;
          }
          if (space !== null) {
            children.push(space);
            space = null;
          }
          children.push(child);
        }
      if (child === null) {
        this.error("Identifier or parenthesis is expected");
      }
      return {
        type: "MediaQuery",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2);
    }
  };
  var COMMA$2 = tokenizer.TYPE.Comma;
  var MediaQueryList = {
    name: "MediaQueryList",
    structure: {
      children: [[
        "MediaQuery"
      ]]
    },
    parse: function(relative) {
      var children = this.createList();
      this.scanner.skipSC();
      while (!this.scanner.eof) {
        children.push(this.MediaQuery(relative));
        if (this.scanner.tokenType !== COMMA$2) {
          break;
        }
        this.scanner.next();
      }
      return {
        type: "MediaQueryList",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2, function() {
        this.chunk(",");
      });
    }
  };
  var Nth = {
    name: "Nth",
    structure: {
      nth: ["AnPlusB", "Identifier"],
      selector: ["SelectorList", null]
    },
    parse: function(allowOfClause) {
      this.scanner.skipSC();
      var start = this.scanner.tokenStart;
      var end = start;
      var selector2 = null;
      var query;
      if (this.scanner.lookupValue(0, "odd") || this.scanner.lookupValue(0, "even")) {
        query = this.Identifier();
      } else {
        query = this.AnPlusB();
      }
      this.scanner.skipSC();
      if (allowOfClause && this.scanner.lookupValue(0, "of")) {
        this.scanner.next();
        selector2 = this.SelectorList();
        if (this.needPositions) {
          end = this.getLastListNode(selector2.children).loc.end.offset;
        }
      } else {
        if (this.needPositions) {
          end = query.loc.end.offset;
        }
      }
      return {
        type: "Nth",
        loc: this.getLocation(start, end),
        nth: query,
        selector: selector2
      };
    },
    generate: function(node2) {
      this.node(node2.nth);
      if (node2.selector !== null) {
        this.chunk(" of ");
        this.node(node2.selector);
      }
    }
  };
  var NUMBER$5 = tokenizer.TYPE.Number;
  var _Number = {
    name: "Number",
    structure: {
      value: String
    },
    parse: function() {
      return {
        type: "Number",
        loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        value: this.consume(NUMBER$5)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
    }
  };
  var Operator = {
    name: "Operator",
    structure: {
      value: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      this.scanner.next();
      return {
        type: "Operator",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.substrToCursor(start)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
    }
  };
  var TYPE$t = tokenizer.TYPE;
  var LEFTPARENTHESIS$5 = TYPE$t.LeftParenthesis;
  var RIGHTPARENTHESIS$2 = TYPE$t.RightParenthesis;
  var Parentheses = {
    name: "Parentheses",
    structure: {
      children: [[]]
    },
    parse: function(readSequence2, recognizer) {
      var start = this.scanner.tokenStart;
      var children = null;
      this.eat(LEFTPARENTHESIS$5);
      children = readSequence2.call(this, recognizer);
      if (!this.scanner.eof) {
        this.eat(RIGHTPARENTHESIS$2);
      }
      return {
        type: "Parentheses",
        loc: this.getLocation(start, this.scanner.tokenStart),
        children
      };
    },
    generate: function(node2) {
      this.chunk("(");
      this.children(node2);
      this.chunk(")");
    }
  };
  var consumeNumber$3 = utils.consumeNumber;
  var TYPE$u = tokenizer.TYPE;
  var PERCENTAGE$3 = TYPE$u.Percentage;
  var Percentage = {
    name: "Percentage",
    structure: {
      value: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var numberEnd = consumeNumber$3(this.scanner.source, start);
      this.eat(PERCENTAGE$3);
      return {
        type: "Percentage",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.source.substring(start, numberEnd)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
      this.chunk("%");
    }
  };
  var TYPE$v = tokenizer.TYPE;
  var IDENT$d = TYPE$v.Ident;
  var FUNCTION$4 = TYPE$v.Function;
  var COLON$5 = TYPE$v.Colon;
  var RIGHTPARENTHESIS$3 = TYPE$v.RightParenthesis;
  var PseudoClassSelector = {
    name: "PseudoClassSelector",
    structure: {
      name: String,
      children: [["Raw"], null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var children = null;
      var name;
      var nameLowerCase;
      this.eat(COLON$5);
      if (this.scanner.tokenType === FUNCTION$4) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();
        if (this.pseudo.hasOwnProperty(nameLowerCase)) {
          this.scanner.skipSC();
          children = this.pseudo[nameLowerCase].call(this);
          this.scanner.skipSC();
        } else {
          children = this.createList();
          children.push(this.Raw(this.scanner.tokenIndex, null, false));
        }
        this.eat(RIGHTPARENTHESIS$3);
      } else {
        name = this.consume(IDENT$d);
      }
      return {
        type: "PseudoClassSelector",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        children
      };
    },
    generate: function(node2) {
      this.chunk(":");
      this.chunk(node2.name);
      if (node2.children !== null) {
        this.chunk("(");
        this.children(node2);
        this.chunk(")");
      }
    },
    walkContext: "function"
  };
  var TYPE$w = tokenizer.TYPE;
  var IDENT$e = TYPE$w.Ident;
  var FUNCTION$5 = TYPE$w.Function;
  var COLON$6 = TYPE$w.Colon;
  var RIGHTPARENTHESIS$4 = TYPE$w.RightParenthesis;
  var PseudoElementSelector = {
    name: "PseudoElementSelector",
    structure: {
      name: String,
      children: [["Raw"], null]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var children = null;
      var name;
      var nameLowerCase;
      this.eat(COLON$6);
      this.eat(COLON$6);
      if (this.scanner.tokenType === FUNCTION$5) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();
        if (this.pseudo.hasOwnProperty(nameLowerCase)) {
          this.scanner.skipSC();
          children = this.pseudo[nameLowerCase].call(this);
          this.scanner.skipSC();
        } else {
          children = this.createList();
          children.push(this.Raw(this.scanner.tokenIndex, null, false));
        }
        this.eat(RIGHTPARENTHESIS$4);
      } else {
        name = this.consume(IDENT$e);
      }
      return {
        type: "PseudoElementSelector",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name,
        children
      };
    },
    generate: function(node2) {
      this.chunk("::");
      this.chunk(node2.name);
      if (node2.children !== null) {
        this.chunk("(");
        this.children(node2);
        this.chunk(")");
      }
    },
    walkContext: "function"
  };
  var isDigit$3 = tokenizer.isDigit;
  var TYPE$x = tokenizer.TYPE;
  var NUMBER$6 = TYPE$x.Number;
  var DELIM$4 = TYPE$x.Delim;
  var SOLIDUS$5 = 47;
  var FULLSTOP$2 = 46;
  function consumeNumber$4() {
    this.scanner.skipWS();
    var value2 = this.consume(NUMBER$6);
    for (var i2 = 0; i2 < value2.length; i2++) {
      var code = value2.charCodeAt(i2);
      if (!isDigit$3(code) && code !== FULLSTOP$2) {
        this.error("Unsigned number is expected", this.scanner.tokenStart - value2.length + i2);
      }
    }
    if (Number(value2) === 0) {
      this.error("Zero number is not allowed", this.scanner.tokenStart - value2.length);
    }
    return value2;
  }
  var Ratio = {
    name: "Ratio",
    structure: {
      left: String,
      right: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var left = consumeNumber$4.call(this);
      var right;
      this.scanner.skipWS();
      if (!this.scanner.isDelim(SOLIDUS$5)) {
        this.error("Solidus is expected");
      }
      this.eat(DELIM$4);
      right = consumeNumber$4.call(this);
      return {
        type: "Ratio",
        loc: this.getLocation(start, this.scanner.tokenStart),
        left,
        right
      };
    },
    generate: function(node2) {
      this.chunk(node2.left);
      this.chunk("/");
      this.chunk(node2.right);
    }
  };
  var TYPE$y = tokenizer.TYPE;
  var rawMode$5 = Raw.mode;
  var LEFTCURLYBRACKET$3 = TYPE$y.LeftCurlyBracket;
  function consumeRaw$4(startToken) {
    return this.Raw(startToken, rawMode$5.leftCurlyBracket, true);
  }
  function consumePrelude() {
    var prelude = this.SelectorList();
    if (prelude.type !== "Raw" && this.scanner.eof === false && this.scanner.tokenType !== LEFTCURLYBRACKET$3) {
      this.error();
    }
    return prelude;
  }
  var Rule = {
    name: "Rule",
    structure: {
      prelude: ["SelectorList", "Raw"],
      block: ["Block"]
    },
    parse: function() {
      var startToken = this.scanner.tokenIndex;
      var startOffset = this.scanner.tokenStart;
      var prelude;
      var block;
      if (this.parseRulePrelude) {
        prelude = this.parseWithFallback(consumePrelude, consumeRaw$4);
      } else {
        prelude = consumeRaw$4.call(this, startToken);
      }
      block = this.Block(true);
      return {
        type: "Rule",
        loc: this.getLocation(startOffset, this.scanner.tokenStart),
        prelude,
        block
      };
    },
    generate: function(node2) {
      this.node(node2.prelude);
      this.node(node2.block);
    },
    walkContext: "rule"
  };
  var Selector = {
    name: "Selector",
    structure: {
      children: [[
        "TypeSelector",
        "IdSelector",
        "ClassSelector",
        "AttributeSelector",
        "PseudoClassSelector",
        "PseudoElementSelector",
        "Combinator",
        "WhiteSpace"
      ]]
    },
    parse: function() {
      var children = this.readSequence(this.scope.Selector);
      if (this.getFirstListNode(children) === null) {
        this.error("Selector is expected");
      }
      return {
        type: "Selector",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2);
    }
  };
  var TYPE$z = tokenizer.TYPE;
  var COMMA$3 = TYPE$z.Comma;
  var SelectorList = {
    name: "SelectorList",
    structure: {
      children: [[
        "Selector",
        "Raw"
      ]]
    },
    parse: function() {
      var children = this.createList();
      while (!this.scanner.eof) {
        children.push(this.Selector());
        if (this.scanner.tokenType === COMMA$3) {
          this.scanner.next();
          continue;
        }
        break;
      }
      return {
        type: "SelectorList",
        loc: this.getLocationFromList(children),
        children
      };
    },
    generate: function(node2) {
      this.children(node2, function() {
        this.chunk(",");
      });
    },
    walkContext: "selector"
  };
  var STRING$3 = tokenizer.TYPE.String;
  var _String = {
    name: "String",
    structure: {
      value: String
    },
    parse: function() {
      return {
        type: "String",
        loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        value: this.consume(STRING$3)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
    }
  };
  var TYPE$A = tokenizer.TYPE;
  var WHITESPACE$a = TYPE$A.WhiteSpace;
  var COMMENT$9 = TYPE$A.Comment;
  var ATKEYWORD$2 = TYPE$A.AtKeyword;
  var CDO$1 = TYPE$A.CDO;
  var CDC$1 = TYPE$A.CDC;
  var EXCLAMATIONMARK$2 = 33;
  function consumeRaw$5(startToken) {
    return this.Raw(startToken, null, false);
  }
  var StyleSheet = {
    name: "StyleSheet",
    structure: {
      children: [[
        "Comment",
        "CDO",
        "CDC",
        "Atrule",
        "Rule",
        "Raw"
      ]]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var children = this.createList();
      var child;
      while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
          case WHITESPACE$a:
            this.scanner.next();
            continue;
          case COMMENT$9:
            if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK$2) {
              this.scanner.next();
              continue;
            }
            child = this.Comment();
            break;
          case CDO$1:
            child = this.CDO();
            break;
          case CDC$1:
            child = this.CDC();
            break;
          case ATKEYWORD$2:
            child = this.parseWithFallback(this.Atrule, consumeRaw$5);
            break;
          default:
            child = this.parseWithFallback(this.Rule, consumeRaw$5);
        }
        children.push(child);
      }
      return {
        type: "StyleSheet",
        loc: this.getLocation(start, this.scanner.tokenStart),
        children
      };
    },
    generate: function(node2) {
      this.children(node2);
    },
    walkContext: "stylesheet"
  };
  var TYPE$B = tokenizer.TYPE;
  var IDENT$f = TYPE$B.Ident;
  var ASTERISK$5 = 42;
  var VERTICALLINE$2 = 124;
  function eatIdentifierOrAsterisk() {
    if (this.scanner.tokenType !== IDENT$f && this.scanner.isDelim(ASTERISK$5) === false) {
      this.error("Identifier or asterisk is expected");
    }
    this.scanner.next();
  }
  var TypeSelector = {
    name: "TypeSelector",
    structure: {
      name: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      if (this.scanner.isDelim(VERTICALLINE$2)) {
        this.scanner.next();
        eatIdentifierOrAsterisk.call(this);
      } else {
        eatIdentifierOrAsterisk.call(this);
        if (this.scanner.isDelim(VERTICALLINE$2)) {
          this.scanner.next();
          eatIdentifierOrAsterisk.call(this);
        }
      }
      return {
        type: "TypeSelector",
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
      };
    },
    generate: function(node2) {
      this.chunk(node2.name);
    }
  };
  var isHexDigit$3 = tokenizer.isHexDigit;
  var cmpChar$3 = tokenizer.cmpChar;
  var TYPE$C = tokenizer.TYPE;
  var NAME$3 = tokenizer.NAME;
  var IDENT$g = TYPE$C.Ident;
  var NUMBER$7 = TYPE$C.Number;
  var DIMENSION$5 = TYPE$C.Dimension;
  var PLUSSIGN$5 = 43;
  var HYPHENMINUS$3 = 45;
  var QUESTIONMARK = 63;
  var U$1 = 117;
  function eatHexSequence(offset, allowDash) {
    for (var pos = this.scanner.tokenStart + offset, len = 0; pos < this.scanner.tokenEnd; pos++) {
      var code = this.scanner.source.charCodeAt(pos);
      if (code === HYPHENMINUS$3 && allowDash && len !== 0) {
        if (eatHexSequence.call(this, offset + len + 1, false) === 0) {
          this.error();
        }
        return -1;
      }
      if (!isHexDigit$3(code)) {
        this.error(allowDash && len !== 0 ? "HyphenMinus" + (len < 6 ? " or hex digit" : "") + " is expected" : len < 6 ? "Hex digit is expected" : "Unexpected input", pos);
      }
      if (++len > 6) {
        this.error("Too many hex digits", pos);
      }
    }
    this.scanner.next();
    return len;
  }
  function eatQuestionMarkSequence(max) {
    var count = 0;
    while (this.scanner.isDelim(QUESTIONMARK)) {
      if (++count > max) {
        this.error("Too many question marks");
      }
      this.scanner.next();
    }
  }
  function startsWith(code) {
    if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== code) {
      this.error(NAME$3[code] + " is expected");
    }
  }
  function scanUnicodeRange() {
    var hexLength = 0;
    if (this.scanner.isDelim(PLUSSIGN$5)) {
      this.scanner.next();
      if (this.scanner.tokenType === IDENT$g) {
        hexLength = eatHexSequence.call(this, 0, true);
        if (hexLength > 0) {
          eatQuestionMarkSequence.call(this, 6 - hexLength);
        }
        return;
      }
      if (this.scanner.isDelim(QUESTIONMARK)) {
        this.scanner.next();
        eatQuestionMarkSequence.call(this, 5);
        return;
      }
      this.error("Hex digit or question mark is expected");
      return;
    }
    if (this.scanner.tokenType === NUMBER$7) {
      startsWith.call(this, PLUSSIGN$5);
      hexLength = eatHexSequence.call(this, 1, true);
      if (this.scanner.isDelim(QUESTIONMARK)) {
        eatQuestionMarkSequence.call(this, 6 - hexLength);
        return;
      }
      if (this.scanner.tokenType === DIMENSION$5 || this.scanner.tokenType === NUMBER$7) {
        startsWith.call(this, HYPHENMINUS$3);
        eatHexSequence.call(this, 1, false);
        return;
      }
      return;
    }
    if (this.scanner.tokenType === DIMENSION$5) {
      startsWith.call(this, PLUSSIGN$5);
      hexLength = eatHexSequence.call(this, 1, true);
      if (hexLength > 0) {
        eatQuestionMarkSequence.call(this, 6 - hexLength);
      }
      return;
    }
    this.error();
  }
  var UnicodeRange = {
    name: "UnicodeRange",
    structure: {
      value: String
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      if (!cmpChar$3(this.scanner.source, start, U$1)) {
        this.error("U is expected");
      }
      if (!cmpChar$3(this.scanner.source, start + 1, PLUSSIGN$5)) {
        this.error("Plus sign is expected");
      }
      this.scanner.next();
      scanUnicodeRange.call(this);
      return {
        type: "UnicodeRange",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: this.scanner.substrToCursor(start)
      };
    },
    generate: function(node2) {
      this.chunk(node2.value);
    }
  };
  var isWhiteSpace$2 = tokenizer.isWhiteSpace;
  var cmpStr$5 = tokenizer.cmpStr;
  var TYPE$D = tokenizer.TYPE;
  var FUNCTION$6 = TYPE$D.Function;
  var URL$4 = TYPE$D.Url;
  var RIGHTPARENTHESIS$5 = TYPE$D.RightParenthesis;
  var Url = {
    name: "Url",
    structure: {
      value: ["String", "Raw"]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var value2;
      switch (this.scanner.tokenType) {
        case URL$4:
          var rawStart = start + 4;
          var rawEnd = this.scanner.tokenEnd - 1;
          while (rawStart < rawEnd && isWhiteSpace$2(this.scanner.source.charCodeAt(rawStart))) {
            rawStart++;
          }
          while (rawStart < rawEnd && isWhiteSpace$2(this.scanner.source.charCodeAt(rawEnd - 1))) {
            rawEnd--;
          }
          value2 = {
            type: "Raw",
            loc: this.getLocation(rawStart, rawEnd),
            value: this.scanner.source.substring(rawStart, rawEnd)
          };
          this.eat(URL$4);
          break;
        case FUNCTION$6:
          if (!cmpStr$5(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(")) {
            this.error("Function name must be `url`");
          }
          this.eat(FUNCTION$6);
          this.scanner.skipSC();
          value2 = this.String();
          this.scanner.skipSC();
          this.eat(RIGHTPARENTHESIS$5);
          break;
        default:
          this.error("Url or Function is expected");
      }
      return {
        type: "Url",
        loc: this.getLocation(start, this.scanner.tokenStart),
        value: value2
      };
    },
    generate: function(node2) {
      this.chunk("url");
      this.chunk("(");
      this.node(node2.value);
      this.chunk(")");
    }
  };
  var Value = {
    name: "Value",
    structure: {
      children: [[]]
    },
    parse: function() {
      var start = this.scanner.tokenStart;
      var children = this.readSequence(this.scope.Value);
      return {
        type: "Value",
        loc: this.getLocation(start, this.scanner.tokenStart),
        children
      };
    },
    generate: function(node2) {
      this.children(node2);
    }
  };
  var WHITESPACE$b = tokenizer.TYPE.WhiteSpace;
  var SPACE = Object.freeze({
    type: "WhiteSpace",
    loc: null,
    value: " "
  });
  var WhiteSpace$1 = {
    name: "WhiteSpace",
    structure: {
      value: String
    },
    parse: function() {
      this.eat(WHITESPACE$b);
      return SPACE;
    },
    generate: function(node2) {
      this.chunk(node2.value);
    }
  };
  var node = {
    AnPlusB,
    Atrule,
    AtrulePrelude,
    AttributeSelector,
    Block,
    Brackets,
    CDC: CDC_1,
    CDO: CDO_1,
    ClassSelector,
    Combinator,
    Comment,
    Declaration,
    DeclarationList,
    Dimension,
    Function: _Function,
    Hash,
    Identifier,
    IdSelector,
    MediaFeature,
    MediaQuery,
    MediaQueryList,
    Nth,
    Number: _Number,
    Operator,
    Parentheses,
    Percentage,
    PseudoClassSelector,
    PseudoElementSelector,
    Ratio,
    Raw,
    Rule,
    Selector,
    SelectorList,
    String: _String,
    StyleSheet,
    TypeSelector,
    UnicodeRange,
    Url,
    Value,
    WhiteSpace: WhiteSpace$1
  };
  var parser = {
    parseContext: {
      default: "StyleSheet",
      stylesheet: "StyleSheet",
      atrule: "Atrule",
      atrulePrelude: function(options) {
        return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
      },
      mediaQueryList: "MediaQueryList",
      mediaQuery: "MediaQuery",
      rule: "Rule",
      selectorList: "SelectorList",
      selector: "Selector",
      block: function() {
        return this.Block(true);
      },
      declarationList: "DeclarationList",
      declaration: "Declaration",
      value: "Value"
    },
    scope,
    atrule,
    pseudo,
    node
  };
  create(parser);
  var entities = {
    CounterClockwiseContourIntegral: 8755,
    ClockwiseContourIntegral: 8754,
    DoubleLongLeftRightArrow: 10234,
    DiacriticalDoubleAcute: 733,
    NotSquareSupersetEqual: 8931,
    CloseCurlyDoubleQuote: 8221,
    DoubleContourIntegral: 8751,
    FilledVerySmallSquare: 9642,
    NegativeVeryThinSpace: 8203,
    NotPrecedesSlantEqual: 8928,
    NotRightTriangleEqual: 8941,
    NotSucceedsSlantEqual: 8929,
    CapitalDifferentialD: 8517,
    DoubleLeftRightArrow: 8660,
    DoubleLongRightArrow: 10233,
    EmptyVerySmallSquare: 9643,
    NestedGreaterGreater: 8811,
    NotDoubleVerticalBar: 8742,
    NotLeftTriangleEqual: 8940,
    NotSquareSubsetEqual: 8930,
    OpenCurlyDoubleQuote: 8220,
    ReverseUpEquilibrium: 10607,
    DoubleLongLeftArrow: 10232,
    DownLeftRightVector: 10576,
    LeftArrowRightArrow: 8646,
    NegativeMediumSpace: 8203,
    RightArrowLeftArrow: 8644,
    SquareSupersetEqual: 8850,
    leftrightsquigarrow: 8621,
    DownRightTeeVector: 10591,
    DownRightVectorBar: 10583,
    LongLeftRightArrow: 10231,
    Longleftrightarrow: 10234,
    NegativeThickSpace: 8203,
    PrecedesSlantEqual: 8828,
    ReverseEquilibrium: 8651,
    RightDoubleBracket: 10215,
    RightDownTeeVector: 10589,
    RightDownVectorBar: 10581,
    RightTriangleEqual: 8885,
    SquareIntersection: 8851,
    SucceedsSlantEqual: 8829,
    blacktriangleright: 9656,
    longleftrightarrow: 10231,
    DoubleUpDownArrow: 8661,
    DoubleVerticalBar: 8741,
    DownLeftTeeVector: 10590,
    DownLeftVectorBar: 10582,
    FilledSmallSquare: 9724,
    GreaterSlantEqual: 10878,
    LeftDoubleBracket: 10214,
    LeftDownTeeVector: 10593,
    LeftDownVectorBar: 10585,
    LeftTriangleEqual: 8884,
    NegativeThinSpace: 8203,
    NotReverseElement: 8716,
    NotTildeFullEqual: 8775,
    RightAngleBracket: 10217,
    RightUpDownVector: 10575,
    SquareSubsetEqual: 8849,
    VerticalSeparator: 10072,
    blacktriangledown: 9662,
    blacktriangleleft: 9666,
    leftrightharpoons: 8651,
    rightleftharpoons: 8652,
    twoheadrightarrow: 8608,
    DiacriticalAcute: 180,
    DiacriticalGrave: 96,
    DiacriticalTilde: 732,
    DoubleRightArrow: 8658,
    DownArrowUpArrow: 8693,
    EmptySmallSquare: 9723,
    GreaterEqualLess: 8923,
    GreaterFullEqual: 8807,
    LeftAngleBracket: 10216,
    LeftUpDownVector: 10577,
    LessEqualGreater: 8922,
    NonBreakingSpace: 160,
    NotRightTriangle: 8939,
    NotSupersetEqual: 8841,
    RightTriangleBar: 10704,
    RightUpTeeVector: 10588,
    RightUpVectorBar: 10580,
    UnderParenthesis: 9181,
    UpArrowDownArrow: 8645,
    circlearrowright: 8635,
    downharpoonright: 8642,
    ntrianglerighteq: 8941,
    rightharpoondown: 8641,
    rightrightarrows: 8649,
    twoheadleftarrow: 8606,
    vartriangleright: 8883,
    CloseCurlyQuote: 8217,
    ContourIntegral: 8750,
    DoubleDownArrow: 8659,
    DoubleLeftArrow: 8656,
    DownRightVector: 8641,
    LeftRightVector: 10574,
    LeftTriangleBar: 10703,
    LeftUpTeeVector: 10592,
    LeftUpVectorBar: 10584,
    LowerRightArrow: 8600,
    NotGreaterEqual: 8817,
    NotGreaterTilde: 8821,
    NotLeftTriangle: 8938,
    OverParenthesis: 9180,
    RightDownVector: 8642,
    ShortRightArrow: 8594,
    UpperRightArrow: 8599,
    bigtriangledown: 9661,
    circlearrowleft: 8634,
    curvearrowright: 8631,
    downharpoonleft: 8643,
    leftharpoondown: 8637,
    leftrightarrows: 8646,
    nLeftrightarrow: 8654,
    nleftrightarrow: 8622,
    ntrianglelefteq: 8940,
    rightleftarrows: 8644,
    rightsquigarrow: 8605,
    rightthreetimes: 8908,
    straightepsilon: 1013,
    trianglerighteq: 8885,
    vartriangleleft: 8882,
    DiacriticalDot: 729,
    DoubleRightTee: 8872,
    DownLeftVector: 8637,
    GreaterGreater: 10914,
    HorizontalLine: 9472,
    InvisibleComma: 8291,
    InvisibleTimes: 8290,
    LeftDownVector: 8643,
    LeftRightArrow: 8596,
    Leftrightarrow: 8660,
    LessSlantEqual: 10877,
    LongRightArrow: 10230,
    Longrightarrow: 10233,
    LowerLeftArrow: 8601,
    NestedLessLess: 8810,
    NotGreaterLess: 8825,
    NotLessGreater: 8824,
    NotSubsetEqual: 8840,
    NotVerticalBar: 8740,
    OpenCurlyQuote: 8216,
    ReverseElement: 8715,
    RightTeeVector: 10587,
    RightVectorBar: 10579,
    ShortDownArrow: 8595,
    ShortLeftArrow: 8592,
    SquareSuperset: 8848,
    TildeFullEqual: 8773,
    UpperLeftArrow: 8598,
    ZeroWidthSpace: 8203,
    curvearrowleft: 8630,
    doublebarwedge: 8966,
    downdownarrows: 8650,
    hookrightarrow: 8618,
    leftleftarrows: 8647,
    leftrightarrow: 8596,
    leftthreetimes: 8907,
    longrightarrow: 10230,
    looparrowright: 8620,
    nshortparallel: 8742,
    ntriangleright: 8939,
    rightarrowtail: 8611,
    rightharpoonup: 8640,
    trianglelefteq: 8884,
    upharpoonright: 8638,
    ApplyFunction: 8289,
    DifferentialD: 8518,
    DoubleLeftTee: 10980,
    DoubleUpArrow: 8657,
    LeftTeeVector: 10586,
    LeftVectorBar: 10578,
    LessFullEqual: 8806,
    LongLeftArrow: 10229,
    Longleftarrow: 10232,
    NotTildeEqual: 8772,
    NotTildeTilde: 8777,
    Poincareplane: 8460,
    PrecedesEqual: 10927,
    PrecedesTilde: 8830,
    RightArrowBar: 8677,
    RightTeeArrow: 8614,
    RightTriangle: 8883,
    RightUpVector: 8638,
    SucceedsEqual: 10928,
    SucceedsTilde: 8831,
    SupersetEqual: 8839,
    UpEquilibrium: 10606,
    VerticalTilde: 8768,
    VeryThinSpace: 8202,
    bigtriangleup: 9651,
    blacktriangle: 9652,
    divideontimes: 8903,
    fallingdotseq: 8786,
    hookleftarrow: 8617,
    leftarrowtail: 8610,
    leftharpoonup: 8636,
    longleftarrow: 10229,
    looparrowleft: 8619,
    measuredangle: 8737,
    ntriangleleft: 8938,
    shortparallel: 8741,
    smallsetminus: 8726,
    triangleright: 9657,
    upharpoonleft: 8639,
    DownArrowBar: 10515,
    DownTeeArrow: 8615,
    ExponentialE: 8519,
    GreaterEqual: 8805,
    GreaterTilde: 8819,
    HilbertSpace: 8459,
    HumpDownHump: 8782,
    Intersection: 8898,
    LeftArrowBar: 8676,
    LeftTeeArrow: 8612,
    LeftTriangle: 8882,
    LeftUpVector: 8639,
    NotCongruent: 8802,
    NotLessEqual: 8816,
    NotLessTilde: 8820,
    Proportional: 8733,
    RightCeiling: 8969,
    RoundImplies: 10608,
    ShortUpArrow: 8593,
    SquareSubset: 8847,
    UnderBracket: 9141,
    VerticalLine: 124,
    blacklozenge: 10731,
    exponentiale: 8519,
    risingdotseq: 8787,
    triangledown: 9663,
    triangleleft: 9667,
    CircleMinus: 8854,
    CircleTimes: 8855,
    Equilibrium: 8652,
    GreaterLess: 8823,
    LeftCeiling: 8968,
    LessGreater: 8822,
    MediumSpace: 8287,
    NotPrecedes: 8832,
    NotSucceeds: 8833,
    OverBracket: 9140,
    RightVector: 8640,
    Rrightarrow: 8667,
    RuleDelayed: 10740,
    SmallCircle: 8728,
    SquareUnion: 8852,
    SubsetEqual: 8838,
    UpDownArrow: 8597,
    Updownarrow: 8661,
    VerticalBar: 8739,
    backepsilon: 1014,
    blacksquare: 9642,
    circledcirc: 8858,
    circleddash: 8861,
    curlyeqprec: 8926,
    curlyeqsucc: 8927,
    diamondsuit: 9830,
    eqslantless: 10901,
    expectation: 8496,
    nRightarrow: 8655,
    nrightarrow: 8603,
    preccurlyeq: 8828,
    precnapprox: 10937,
    quaternions: 8461,
    straightphi: 981,
    succcurlyeq: 8829,
    succnapprox: 10938,
    thickapprox: 8776,
    updownarrow: 8597,
    Bernoullis: 8492,
    CirclePlus: 8853,
    EqualTilde: 8770,
    Fouriertrf: 8497,
    ImaginaryI: 8520,
    Laplacetrf: 8466,
    LeftVector: 8636,
    Lleftarrow: 8666,
    NotElement: 8713,
    NotGreater: 8815,
    Proportion: 8759,
    RightArrow: 8594,
    RightFloor: 8971,
    Rightarrow: 8658,
    TildeEqual: 8771,
    TildeTilde: 8776,
    UnderBrace: 9183,
    UpArrowBar: 10514,
    UpTeeArrow: 8613,
    circledast: 8859,
    complement: 8705,
    curlywedge: 8911,
    eqslantgtr: 10902,
    gtreqqless: 10892,
    lessapprox: 10885,
    lesseqqgtr: 10891,
    lmoustache: 9136,
    longmapsto: 10236,
    mapstodown: 8615,
    mapstoleft: 8612,
    nLeftarrow: 8653,
    nleftarrow: 8602,
    precapprox: 10935,
    rightarrow: 8594,
    rmoustache: 9137,
    sqsubseteq: 8849,
    sqsupseteq: 8850,
    subsetneqq: 10955,
    succapprox: 10936,
    supsetneqq: 10956,
    upuparrows: 8648,
    varepsilon: 949,
    varnothing: 8709,
    Backslash: 8726,
    CenterDot: 183,
    CircleDot: 8857,
    Congruent: 8801,
    Coproduct: 8720,
    DoubleDot: 168,
    DownArrow: 8595,
    DownBreve: 785,
    Downarrow: 8659,
    HumpEqual: 8783,
    LeftArrow: 8592,
    LeftFloor: 8970,
    Leftarrow: 8656,
    LessTilde: 8818,
    Mellintrf: 8499,
    MinusPlus: 8723,
    NotCupCap: 8813,
    NotExists: 8708,
    OverBrace: 9182,
    PlusMinus: 177,
    Therefore: 8756,
    ThinSpace: 8201,
    TripleDot: 8411,
    UnionPlus: 8846,
    backprime: 8245,
    backsimeq: 8909,
    bigotimes: 10754,
    centerdot: 183,
    checkmark: 10003,
    complexes: 8450,
    dotsquare: 8865,
    downarrow: 8595,
    gtrapprox: 10886,
    gtreqless: 8923,
    heartsuit: 9829,
    leftarrow: 8592,
    lesseqgtr: 8922,
    nparallel: 8742,
    nshortmid: 8740,
    nsubseteq: 8840,
    nsupseteq: 8841,
    pitchfork: 8916,
    rationals: 8474,
    spadesuit: 9824,
    subseteqq: 10949,
    subsetneq: 8842,
    supseteqq: 10950,
    supsetneq: 8843,
    therefore: 8756,
    triangleq: 8796,
    varpropto: 8733,
    DDotrahd: 10513,
    DotEqual: 8784,
    Integral: 8747,
    LessLess: 10913,
    NotEqual: 8800,
    NotTilde: 8769,
    PartialD: 8706,
    Precedes: 8826,
    RightTee: 8866,
    Succeeds: 8827,
    SuchThat: 8715,
    Superset: 8835,
    Uarrocir: 10569,
    UnderBar: 818,
    andslope: 10840,
    angmsdaa: 10664,
    angmsdab: 10665,
    angmsdac: 10666,
    angmsdad: 10667,
    angmsdae: 10668,
    angmsdaf: 10669,
    angmsdag: 10670,
    angmsdah: 10671,
    angrtvbd: 10653,
    approxeq: 8778,
    awconint: 8755,
    backcong: 8780,
    barwedge: 8965,
    bbrktbrk: 9142,
    bigoplus: 10753,
    bigsqcup: 10758,
    biguplus: 10756,
    bigwedge: 8896,
    boxminus: 8863,
    boxtimes: 8864,
    capbrcup: 10825,
    circledR: 174,
    circledS: 9416,
    cirfnint: 10768,
    clubsuit: 9827,
    cupbrcap: 10824,
    curlyvee: 8910,
    cwconint: 8754,
    doteqdot: 8785,
    dotminus: 8760,
    drbkarow: 10512,
    dzigrarr: 10239,
    elinters: 9191,
    emptyset: 8709,
    eqvparsl: 10725,
    fpartint: 10765,
    geqslant: 10878,
    gesdotol: 10884,
    gnapprox: 10890,
    hksearow: 10533,
    hkswarow: 10534,
    imagline: 8464,
    imagpart: 8465,
    infintie: 10717,
    integers: 8484,
    intercal: 8890,
    intlarhk: 10775,
    laemptyv: 10676,
    ldrushar: 10571,
    leqslant: 10877,
    lesdotor: 10883,
    llcorner: 8990,
    lnapprox: 10889,
    lrcorner: 8991,
    lurdshar: 10570,
    mapstoup: 8613,
    multimap: 8888,
    naturals: 8469,
    otimesas: 10806,
    parallel: 8741,
    plusacir: 10787,
    pointint: 10773,
    precneqq: 10933,
    precnsim: 8936,
    profalar: 9006,
    profline: 8978,
    profsurf: 8979,
    raemptyv: 10675,
    realpart: 8476,
    rppolint: 10770,
    rtriltri: 10702,
    scpolint: 10771,
    setminus: 8726,
    shortmid: 8739,
    smeparsl: 10724,
    sqsubset: 8847,
    sqsupset: 8848,
    subseteq: 8838,
    succneqq: 10934,
    succnsim: 8937,
    supseteq: 8839,
    thetasym: 977,
    thicksim: 8764,
    timesbar: 10801,
    triangle: 9653,
    triminus: 10810,
    trpezium: 9186,
    ulcorner: 8988,
    urcorner: 8989,
    varkappa: 1008,
    varsigma: 962,
    vartheta: 977,
    Because: 8757,
    Cayleys: 8493,
    Cconint: 8752,
    Cedilla: 184,
    Diamond: 8900,
    DownTee: 8868,
    Element: 8712,
    Epsilon: 917,
    Implies: 8658,
    LeftTee: 8867,
    NewLine: 10,
    NoBreak: 8288,
    NotLess: 8814,
    Omicron: 927,
    OverBar: 175,
    Product: 8719,
    UpArrow: 8593,
    Uparrow: 8657,
    Upsilon: 933,
    alefsym: 8501,
    angrtvb: 8894,
    angzarr: 9084,
    asympeq: 8781,
    backsim: 8765,
    because: 8757,
    bemptyv: 10672,
    between: 8812,
    bigcirc: 9711,
    bigodot: 10752,
    bigstar: 9733,
    boxplus: 8862,
    ccupssm: 10832,
    cemptyv: 10674,
    cirscir: 10690,
    coloneq: 8788,
    congdot: 10861,
    cudarrl: 10552,
    cudarrr: 10549,
    cularrp: 10557,
    curarrm: 10556,
    dbkarow: 10511,
    ddagger: 8225,
    ddotseq: 10871,
    demptyv: 10673,
    diamond: 8900,
    digamma: 989,
    dotplus: 8724,
    dwangle: 10662,
    epsilon: 949,
    eqcolon: 8789,
    equivDD: 10872,
    gesdoto: 10882,
    gtquest: 10876,
    gtrless: 8823,
    harrcir: 10568,
    intprod: 10812,
    isindot: 8949,
    larrbfs: 10527,
    larrsim: 10611,
    lbrksld: 10639,
    lbrkslu: 10637,
    ldrdhar: 10599,
    lesdoto: 10881,
    lessdot: 8918,
    lessgtr: 8822,
    lesssim: 8818,
    lotimes: 10804,
    lozenge: 9674,
    ltquest: 10875,
    luruhar: 10598,
    maltese: 10016,
    minusdu: 10794,
    napprox: 8777,
    natural: 9838,
    nearrow: 8599,
    nexists: 8708,
    notinva: 8713,
    notinvb: 8951,
    notinvc: 8950,
    notniva: 8716,
    notnivb: 8958,
    notnivc: 8957,
    npolint: 10772,
    nsqsube: 8930,
    nsqsupe: 8931,
    nvinfin: 10718,
    nwarrow: 8598,
    olcross: 10683,
    omicron: 959,
    orderof: 8500,
    orslope: 10839,
    pertenk: 8241,
    planckh: 8462,
    pluscir: 10786,
    plussim: 10790,
    plustwo: 10791,
    precsim: 8830,
    quatint: 10774,
    questeq: 8799,
    rarrbfs: 10528,
    rarrsim: 10612,
    rbrksld: 10638,
    rbrkslu: 10640,
    rdldhar: 10601,
    realine: 8475,
    rotimes: 10805,
    ruluhar: 10600,
    searrow: 8600,
    simplus: 10788,
    simrarr: 10610,
    subedot: 10947,
    submult: 10945,
    subplus: 10943,
    subrarr: 10617,
    succsim: 8831,
    supdsub: 10968,
    supedot: 10948,
    suphsub: 10967,
    suplarr: 10619,
    supmult: 10946,
    supplus: 10944,
    swarrow: 8601,
    topfork: 10970,
    triplus: 10809,
    tritime: 10811,
    uparrow: 8593,
    upsilon: 965,
    uwangle: 10663,
    vzigzag: 10650,
    zigrarr: 8669,
    Aacute: 193,
    Abreve: 258,
    Agrave: 192,
    Assign: 8788,
    Atilde: 195,
    Barwed: 8966,
    Bumpeq: 8782,
    Cacute: 262,
    Ccaron: 268,
    Ccedil: 199,
    Colone: 10868,
    Conint: 8751,
    CupCap: 8781,
    Dagger: 8225,
    Dcaron: 270,
    DotDot: 8412,
    Dstrok: 272,
    Eacute: 201,
    Ecaron: 282,
    Egrave: 200,
    Exists: 8707,
    ForAll: 8704,
    Gammad: 988,
    Gbreve: 286,
    Gcedil: 290,
    HARDcy: 1066,
    Hstrok: 294,
    Iacute: 205,
    Igrave: 204,
    Itilde: 296,
    Jsercy: 1032,
    Kcedil: 310,
    Lacute: 313,
    Lambda: 923,
    Lcaron: 317,
    Lcedil: 315,
    Lmidot: 319,
    Lstrok: 321,
    Nacute: 323,
    Ncaron: 327,
    Ncedil: 325,
    Ntilde: 209,
    Oacute: 211,
    Odblac: 336,
    Ograve: 210,
    Oslash: 216,
    Otilde: 213,
    Otimes: 10807,
    Racute: 340,
    Rarrtl: 10518,
    Rcaron: 344,
    Rcedil: 342,
    SHCHcy: 1065,
    SOFTcy: 1068,
    Sacute: 346,
    Scaron: 352,
    Scedil: 350,
    Square: 9633,
    Subset: 8912,
    Supset: 8913,
    Tcaron: 356,
    Tcedil: 354,
    Tstrok: 358,
    Uacute: 218,
    Ubreve: 364,
    Udblac: 368,
    Ugrave: 217,
    Utilde: 360,
    Vdashl: 10982,
    Verbar: 8214,
    Vvdash: 8874,
    Yacute: 221,
    Zacute: 377,
    Zcaron: 381,
    aacute: 225,
    abreve: 259,
    agrave: 224,
    andand: 10837,
    angmsd: 8737,
    angsph: 8738,
    apacir: 10863,
    approx: 8776,
    atilde: 227,
    barvee: 8893,
    barwed: 8965,
    becaus: 8757,
    bernou: 8492,
    bigcap: 8898,
    bigcup: 8899,
    bigvee: 8897,
    bkarow: 10509,
    bottom: 8869,
    bowtie: 8904,
    boxbox: 10697,
    bprime: 8245,
    brvbar: 166,
    bullet: 8226,
    bumpeq: 8783,
    cacute: 263,
    capand: 10820,
    capcap: 10827,
    capcup: 10823,
    capdot: 10816,
    ccaron: 269,
    ccedil: 231,
    circeq: 8791,
    cirmid: 10991,
    colone: 8788,
    commat: 64,
    compfn: 8728,
    conint: 8750,
    coprod: 8720,
    copysr: 8471,
    cularr: 8630,
    cupcap: 10822,
    cupcup: 10826,
    cupdot: 8845,
    curarr: 8631,
    curren: 164,
    cylcty: 9005,
    dagger: 8224,
    daleth: 8504,
    dcaron: 271,
    dfisht: 10623,
    divide: 247,
    divonx: 8903,
    dlcorn: 8990,
    dlcrop: 8973,
    dollar: 36,
    drcorn: 8991,
    drcrop: 8972,
    dstrok: 273,
    eacute: 233,
    easter: 10862,
    ecaron: 283,
    ecolon: 8789,
    egrave: 232,
    egsdot: 10904,
    elsdot: 10903,
    emptyv: 8709,
    emsp13: 8196,
    emsp14: 8197,
    eparsl: 10723,
    eqcirc: 8790,
    equals: 61,
    equest: 8799,
    female: 9792,
    ffilig: 64259,
    ffllig: 64260,
    forall: 8704,
    frac12: 189,
    frac13: 8531,
    frac14: 188,
    frac15: 8533,
    frac16: 8537,
    frac18: 8539,
    frac23: 8532,
    frac25: 8534,
    frac34: 190,
    frac35: 8535,
    frac38: 8540,
    frac45: 8536,
    frac56: 8538,
    frac58: 8541,
    frac78: 8542,
    gacute: 501,
    gammad: 989,
    gbreve: 287,
    gesdot: 10880,
    gesles: 10900,
    gtlPar: 10645,
    gtrarr: 10616,
    gtrdot: 8919,
    gtrsim: 8819,
    hairsp: 8202,
    hamilt: 8459,
    hardcy: 1098,
    hearts: 9829,
    hellip: 8230,
    hercon: 8889,
    homtht: 8763,
    horbar: 8213,
    hslash: 8463,
    hstrok: 295,
    hybull: 8259,
    hyphen: 8208,
    iacute: 237,
    igrave: 236,
    iiiint: 10764,
    iinfin: 10716,
    incare: 8453,
    inodot: 305,
    intcal: 8890,
    iquest: 191,
    isinsv: 8947,
    itilde: 297,
    jsercy: 1112,
    kappav: 1008,
    kcedil: 311,
    kgreen: 312,
    lAtail: 10523,
    lacute: 314,
    lagran: 8466,
    lambda: 955,
    langle: 10216,
    larrfs: 10525,
    larrhk: 8617,
    larrlp: 8619,
    larrpl: 10553,
    larrtl: 8610,
    latail: 10521,
    lbrace: 123,
    lbrack: 91,
    lcaron: 318,
    lcedil: 316,
    ldquor: 8222,
    lesdot: 10879,
    lesges: 10899,
    lfisht: 10620,
    lfloor: 8970,
    lharul: 10602,
    llhard: 10603,
    lmidot: 320,
    lmoust: 9136,
    loplus: 10797,
    lowast: 8727,
    lowbar: 95,
    lparlt: 10643,
    lrhard: 10605,
    lsaquo: 8249,
    lsquor: 8218,
    lstrok: 322,
    lthree: 8907,
    ltimes: 8905,
    ltlarr: 10614,
    ltrPar: 10646,
    mapsto: 8614,
    marker: 9646,
    mcomma: 10793,
    midast: 42,
    midcir: 10992,
    middot: 183,
    minusb: 8863,
    minusd: 8760,
    mnplus: 8723,
    models: 8871,
    mstpos: 8766,
    nVDash: 8879,
    nVdash: 8878,
    nacute: 324,
    ncaron: 328,
    ncedil: 326,
    nearhk: 10532,
    nequiv: 8802,
    nesear: 10536,
    nexist: 8708,
    nltrie: 8940,
    nprcue: 8928,
    nrtrie: 8941,
    nsccue: 8929,
    nsimeq: 8772,
    ntilde: 241,
    numero: 8470,
    nvDash: 8877,
    nvHarr: 10500,
    nvdash: 8876,
    nvlArr: 10498,
    nvrArr: 10499,
    nwarhk: 10531,
    nwnear: 10535,
    oacute: 243,
    odblac: 337,
    odsold: 10684,
    ograve: 242,
    ominus: 8854,
    origof: 8886,
    oslash: 248,
    otilde: 245,
    otimes: 8855,
    parsim: 10995,
    percnt: 37,
    period: 46,
    permil: 8240,
    phmmat: 8499,
    planck: 8463,
    plankv: 8463,
    plusdo: 8724,
    plusdu: 10789,
    plusmn: 177,
    preceq: 10927,
    primes: 8473,
    prnsim: 8936,
    propto: 8733,
    prurel: 8880,
    puncsp: 8200,
    qprime: 8279,
    rAtail: 10524,
    racute: 341,
    rangle: 10217,
    rarrap: 10613,
    rarrfs: 10526,
    rarrhk: 8618,
    rarrlp: 8620,
    rarrpl: 10565,
    rarrtl: 8611,
    ratail: 10522,
    rbrace: 125,
    rbrack: 93,
    rcaron: 345,
    rcedil: 343,
    rdquor: 8221,
    rfisht: 10621,
    rfloor: 8971,
    rharul: 10604,
    rmoust: 9137,
    roplus: 10798,
    rpargt: 10644,
    rsaquo: 8250,
    rsquor: 8217,
    rthree: 8908,
    rtimes: 8906,
    sacute: 347,
    scaron: 353,
    scedil: 351,
    scnsim: 8937,
    searhk: 10533,
    seswar: 10537,
    sfrown: 8994,
    shchcy: 1097,
    sigmaf: 962,
    sigmav: 962,
    simdot: 10858,
    smashp: 10803,
    softcy: 1100,
    solbar: 9023,
    spades: 9824,
    sqsube: 8849,
    sqsupe: 8850,
    square: 9633,
    squarf: 9642,
    ssetmn: 8726,
    ssmile: 8995,
    sstarf: 8902,
    subdot: 10941,
    subset: 8834,
    subsim: 10951,
    subsub: 10965,
    subsup: 10963,
    succeq: 10928,
    supdot: 10942,
    supset: 8835,
    supsim: 10952,
    supsub: 10964,
    supsup: 10966,
    swarhk: 10534,
    swnwar: 10538,
    target: 8982,
    tcaron: 357,
    tcedil: 355,
    telrec: 8981,
    there4: 8756,
    thetav: 977,
    thinsp: 8201,
    thksim: 8764,
    timesb: 8864,
    timesd: 10800,
    topbot: 9014,
    topcir: 10993,
    tprime: 8244,
    tridot: 9708,
    tstrok: 359,
    uacute: 250,
    ubreve: 365,
    udblac: 369,
    ufisht: 10622,
    ugrave: 249,
    ulcorn: 8988,
    ulcrop: 8975,
    urcorn: 8989,
    urcrop: 8974,
    utilde: 361,
    vangrt: 10652,
    varphi: 966,
    varrho: 1009,
    veebar: 8891,
    vellip: 8942,
    verbar: 124,
    wedbar: 10847,
    wedgeq: 8793,
    weierp: 8472,
    wreath: 8768,
    xoplus: 10753,
    xotime: 10754,
    xsqcup: 10758,
    xuplus: 10756,
    xwedge: 8896,
    yacute: 253,
    zacute: 378,
    zcaron: 382,
    zeetrf: 8488,
    AElig: 198,
    Acirc: 194,
    Alpha: 913,
    Amacr: 256,
    Aogon: 260,
    Aring: 197,
    Breve: 728,
    Ccirc: 264,
    Colon: 8759,
    Cross: 10799,
    Dashv: 10980,
    Delta: 916,
    Ecirc: 202,
    Emacr: 274,
    Eogon: 280,
    Equal: 10869,
    Gamma: 915,
    Gcirc: 284,
    Hacek: 711,
    Hcirc: 292,
    IJlig: 306,
    Icirc: 206,
    Imacr: 298,
    Iogon: 302,
    Iukcy: 1030,
    Jcirc: 308,
    Jukcy: 1028,
    Kappa: 922,
    OElig: 338,
    Ocirc: 212,
    Omacr: 332,
    Omega: 937,
    Prime: 8243,
    RBarr: 10512,
    Scirc: 348,
    Sigma: 931,
    THORN: 222,
    TRADE: 8482,
    TSHcy: 1035,
    Theta: 920,
    Tilde: 8764,
    Ubrcy: 1038,
    Ucirc: 219,
    Umacr: 362,
    Union: 8899,
    Uogon: 370,
    UpTee: 8869,
    Uring: 366,
    VDash: 8875,
    Vdash: 8873,
    Wcirc: 372,
    Wedge: 8896,
    Ycirc: 374,
    acirc: 226,
    acute: 180,
    aelig: 230,
    aleph: 8501,
    alpha: 945,
    amacr: 257,
    amalg: 10815,
    angle: 8736,
    angrt: 8735,
    angst: 8491,
    aogon: 261,
    aring: 229,
    asymp: 8776,
    awint: 10769,
    bcong: 8780,
    bdquo: 8222,
    bepsi: 1014,
    blank: 9251,
    blk12: 9618,
    blk14: 9617,
    blk34: 9619,
    block: 9608,
    boxDL: 9559,
    boxDR: 9556,
    boxDl: 9558,
    boxDr: 9555,
    boxHD: 9574,
    boxHU: 9577,
    boxHd: 9572,
    boxHu: 9575,
    boxUL: 9565,
    boxUR: 9562,
    boxUl: 9564,
    boxUr: 9561,
    boxVH: 9580,
    boxVL: 9571,
    boxVR: 9568,
    boxVh: 9579,
    boxVl: 9570,
    boxVr: 9567,
    boxdL: 9557,
    boxdR: 9554,
    boxdl: 9488,
    boxdr: 9484,
    boxhD: 9573,
    boxhU: 9576,
    boxhd: 9516,
    boxhu: 9524,
    boxuL: 9563,
    boxuR: 9560,
    boxul: 9496,
    boxur: 9492,
    boxvH: 9578,
    boxvL: 9569,
    boxvR: 9566,
    boxvh: 9532,
    boxvl: 9508,
    boxvr: 9500,
    breve: 728,
    bsemi: 8271,
    bsime: 8909,
    bsolb: 10693,
    bumpE: 10926,
    bumpe: 8783,
    caret: 8257,
    caron: 711,
    ccaps: 10829,
    ccirc: 265,
    ccups: 10828,
    cedil: 184,
    check: 10003,
    clubs: 9827,
    colon: 58,
    comma: 44,
    crarr: 8629,
    cross: 10007,
    csube: 10961,
    csupe: 10962,
    ctdot: 8943,
    cuepr: 8926,
    cuesc: 8927,
    cupor: 10821,
    cuvee: 8910,
    cuwed: 8911,
    cwint: 8753,
    dashv: 8867,
    dblac: 733,
    ddarr: 8650,
    delta: 948,
    dharl: 8643,
    dharr: 8642,
    diams: 9830,
    disin: 8946,
    doteq: 8784,
    dtdot: 8945,
    dtrif: 9662,
    duarr: 8693,
    duhar: 10607,
    eDDot: 10871,
    ecirc: 234,
    efDot: 8786,
    emacr: 275,
    empty: 8709,
    eogon: 281,
    eplus: 10865,
    epsiv: 949,
    eqsim: 8770,
    equiv: 8801,
    erDot: 8787,
    erarr: 10609,
    esdot: 8784,
    exist: 8707,
    fflig: 64256,
    filig: 64257,
    fllig: 64258,
    fltns: 9649,
    forkv: 10969,
    frasl: 8260,
    frown: 8994,
    gamma: 947,
    gcirc: 285,
    gescc: 10921,
    gimel: 8503,
    gneqq: 8809,
    gnsim: 8935,
    grave: 96,
    gsime: 10894,
    gsiml: 10896,
    gtcir: 10874,
    gtdot: 8919,
    harrw: 8621,
    hcirc: 293,
    hoarr: 8703,
    icirc: 238,
    iexcl: 161,
    iiint: 8749,
    iiota: 8489,
    ijlig: 307,
    imacr: 299,
    image: 8465,
    imath: 305,
    imped: 437,
    infin: 8734,
    iogon: 303,
    iprod: 10812,
    isinE: 8953,
    isins: 8948,
    isinv: 8712,
    iukcy: 1110,
    jcirc: 309,
    jmath: 567,
    jukcy: 1108,
    kappa: 954,
    lAarr: 8666,
    lBarr: 10510,
    langd: 10641,
    laquo: 171,
    larrb: 8676,
    lbarr: 10508,
    lbbrk: 10098,
    lbrke: 10635,
    lceil: 8968,
    ldquo: 8220,
    lescc: 10920,
    lhard: 8637,
    lharu: 8636,
    lhblk: 9604,
    llarr: 8647,
    lltri: 9722,
    lneqq: 8808,
    lnsim: 8934,
    loang: 10220,
    loarr: 8701,
    lobrk: 10214,
    lopar: 10629,
    lrarr: 8646,
    lrhar: 8651,
    lrtri: 8895,
    lsime: 10893,
    lsimg: 10895,
    lsquo: 8216,
    ltcir: 10873,
    ltdot: 8918,
    ltrie: 8884,
    ltrif: 9666,
    mDDot: 8762,
    mdash: 8212,
    micro: 181,
    minus: 8722,
    mumap: 8888,
    nabla: 8711,
    napos: 329,
    natur: 9838,
    ncong: 8775,
    ndash: 8211,
    neArr: 8663,
    nearr: 8599,
    ngsim: 8821,
    nhArr: 8654,
    nharr: 8622,
    nhpar: 10994,
    nlArr: 8653,
    nlarr: 8602,
    nless: 8814,
    nlsim: 8820,
    nltri: 8938,
    notin: 8713,
    notni: 8716,
    nprec: 8832,
    nrArr: 8655,
    nrarr: 8603,
    nrtri: 8939,
    nsime: 8772,
    nsmid: 8740,
    nspar: 8742,
    nsube: 8840,
    nsucc: 8833,
    nsupe: 8841,
    numsp: 8199,
    nwArr: 8662,
    nwarr: 8598,
    ocirc: 244,
    odash: 8861,
    oelig: 339,
    ofcir: 10687,
    ohbar: 10677,
    olarr: 8634,
    olcir: 10686,
    oline: 8254,
    omacr: 333,
    omega: 969,
    operp: 10681,
    oplus: 8853,
    orarr: 8635,
    order: 8500,
    ovbar: 9021,
    parsl: 11005,
    phone: 9742,
    plusb: 8862,
    pluse: 10866,
    pound: 163,
    prcue: 8828,
    prime: 8242,
    prnap: 10937,
    prsim: 8830,
    quest: 63,
    rAarr: 8667,
    rBarr: 10511,
    radic: 8730,
    rangd: 10642,
    range: 10661,
    raquo: 187,
    rarrb: 8677,
    rarrc: 10547,
    rarrw: 8605,
    ratio: 8758,
    rbarr: 10509,
    rbbrk: 10099,
    rbrke: 10636,
    rceil: 8969,
    rdquo: 8221,
    reals: 8477,
    rhard: 8641,
    rharu: 8640,
    rlarr: 8644,
    rlhar: 8652,
    rnmid: 10990,
    roang: 10221,
    roarr: 8702,
    robrk: 10215,
    ropar: 10630,
    rrarr: 8649,
    rsquo: 8217,
    rtrie: 8885,
    rtrif: 9656,
    sbquo: 8218,
    sccue: 8829,
    scirc: 349,
    scnap: 10938,
    scsim: 8831,
    sdotb: 8865,
    sdote: 10854,
    seArr: 8664,
    searr: 8600,
    setmn: 8726,
    sharp: 9839,
    sigma: 963,
    simeq: 8771,
    simgE: 10912,
    simlE: 10911,
    simne: 8774,
    slarr: 8592,
    smile: 8995,
    sqcap: 8851,
    sqcup: 8852,
    sqsub: 8847,
    sqsup: 8848,
    srarr: 8594,
    starf: 9733,
    strns: 175,
    subnE: 10955,
    subne: 8842,
    supnE: 10956,
    supne: 8843,
    swArr: 8665,
    swarr: 8601,
    szlig: 223,
    theta: 952,
    thkap: 8776,
    thorn: 254,
    tilde: 732,
    times: 215,
    trade: 8482,
    trisb: 10701,
    tshcy: 1115,
    twixt: 8812,
    ubrcy: 1118,
    ucirc: 251,
    udarr: 8645,
    udhar: 10606,
    uharl: 8639,
    uharr: 8638,
    uhblk: 9600,
    ultri: 9720,
    umacr: 363,
    uogon: 371,
    uplus: 8846,
    upsih: 978,
    uring: 367,
    urtri: 9721,
    utdot: 8944,
    utrif: 9652,
    uuarr: 8648,
    vBarv: 10985,
    vDash: 8872,
    varpi: 982,
    vdash: 8866,
    veeeq: 8794,
    vltri: 8882,
    vprop: 8733,
    vrtri: 8883,
    wcirc: 373,
    wedge: 8743,
    xcirc: 9711,
    xdtri: 9661,
    xhArr: 10234,
    xharr: 10231,
    xlArr: 10232,
    xlarr: 10229,
    xodot: 10752,
    xrArr: 10233,
    xrarr: 10230,
    xutri: 9651,
    ycirc: 375,
    Aopf: 120120,
    Ascr: 119964,
    Auml: 196,
    Barv: 10983,
    Beta: 914,
    Bopf: 120121,
    Bscr: 8492,
    CHcy: 1063,
    COPY: 169,
    Cdot: 266,
    Copf: 8450,
    Cscr: 119966,
    DJcy: 1026,
    DScy: 1029,
    DZcy: 1039,
    Darr: 8609,
    Dopf: 120123,
    Dscr: 119967,
    Edot: 278,
    Eopf: 120124,
    Escr: 8496,
    Esim: 10867,
    Euml: 203,
    Fopf: 120125,
    Fscr: 8497,
    GJcy: 1027,
    Gdot: 288,
    Gopf: 120126,
    Gscr: 119970,
    Hopf: 8461,
    Hscr: 8459,
    IEcy: 1045,
    IOcy: 1025,
    Idot: 304,
    Iopf: 120128,
    Iota: 921,
    Iscr: 8464,
    Iuml: 207,
    Jopf: 120129,
    Jscr: 119973,
    KHcy: 1061,
    KJcy: 1036,
    Kopf: 120130,
    Kscr: 119974,
    LJcy: 1033,
    Lang: 10218,
    Larr: 8606,
    Lopf: 120131,
    Lscr: 8466,
    Mopf: 120132,
    Mscr: 8499,
    NJcy: 1034,
    Nopf: 8469,
    Nscr: 119977,
    Oopf: 120134,
    Oscr: 119978,
    Ouml: 214,
    Popf: 8473,
    Pscr: 119979,
    QUOT: 34,
    Qopf: 8474,
    Qscr: 119980,
    Rang: 10219,
    Rarr: 8608,
    Ropf: 8477,
    Rscr: 8475,
    SHcy: 1064,
    Sopf: 120138,
    Sqrt: 8730,
    Sscr: 119982,
    Star: 8902,
    TScy: 1062,
    Topf: 120139,
    Tscr: 119983,
    Uarr: 8607,
    Uopf: 120140,
    Upsi: 978,
    Uscr: 119984,
    Uuml: 220,
    Vbar: 10987,
    Vert: 8214,
    Vopf: 120141,
    Vscr: 119985,
    Wopf: 120142,
    Wscr: 119986,
    Xopf: 120143,
    Xscr: 119987,
    YAcy: 1071,
    YIcy: 1031,
    YUcy: 1070,
    Yopf: 120144,
    Yscr: 119988,
    Yuml: 376,
    ZHcy: 1046,
    Zdot: 379,
    Zeta: 918,
    Zopf: 8484,
    Zscr: 119989,
    andd: 10844,
    andv: 10842,
    ange: 10660,
    aopf: 120146,
    apid: 8779,
    apos: 39,
    ascr: 119990,
    auml: 228,
    bNot: 10989,
    bbrk: 9141,
    beta: 946,
    beth: 8502,
    bnot: 8976,
    bopf: 120147,
    boxH: 9552,
    boxV: 9553,
    boxh: 9472,
    boxv: 9474,
    bscr: 119991,
    bsim: 8765,
    bsol: 92,
    bull: 8226,
    bump: 8782,
    cdot: 267,
    cent: 162,
    chcy: 1095,
    cirE: 10691,
    circ: 710,
    cire: 8791,
    comp: 8705,
    cong: 8773,
    copf: 120148,
    copy: 169,
    cscr: 119992,
    csub: 10959,
    csup: 10960,
    dArr: 8659,
    dHar: 10597,
    darr: 8595,
    dash: 8208,
    diam: 8900,
    djcy: 1106,
    dopf: 120149,
    dscr: 119993,
    dscy: 1109,
    dsol: 10742,
    dtri: 9663,
    dzcy: 1119,
    eDot: 8785,
    ecir: 8790,
    edot: 279,
    emsp: 8195,
    ensp: 8194,
    eopf: 120150,
    epar: 8917,
    epsi: 1013,
    escr: 8495,
    esim: 8770,
    euml: 235,
    euro: 8364,
    excl: 33,
    flat: 9837,
    fnof: 402,
    fopf: 120151,
    fork: 8916,
    fscr: 119995,
    gdot: 289,
    geqq: 8807,
    gjcy: 1107,
    gnap: 10890,
    gneq: 10888,
    gopf: 120152,
    gscr: 8458,
    gsim: 8819,
    gtcc: 10919,
    hArr: 8660,
    half: 189,
    harr: 8596,
    hbar: 8463,
    hopf: 120153,
    hscr: 119997,
    iecy: 1077,
    imof: 8887,
    iocy: 1105,
    iopf: 120154,
    iota: 953,
    iscr: 119998,
    isin: 8712,
    iuml: 239,
    jopf: 120155,
    jscr: 119999,
    khcy: 1093,
    kjcy: 1116,
    kopf: 120156,
    kscr: 12e4,
    lArr: 8656,
    lHar: 10594,
    lang: 10216,
    larr: 8592,
    late: 10925,
    lcub: 123,
    ldca: 10550,
    ldsh: 8626,
    leqq: 8806,
    ljcy: 1113,
    lnap: 10889,
    lneq: 10887,
    lopf: 120157,
    lozf: 10731,
    lpar: 40,
    lscr: 120001,
    lsim: 8818,
    lsqb: 91,
    ltcc: 10918,
    ltri: 9667,
    macr: 175,
    male: 9794,
    malt: 10016,
    mlcp: 10971,
    mldr: 8230,
    mopf: 120158,
    mscr: 120002,
    nbsp: 160,
    ncap: 10819,
    ncup: 10818,
    ngeq: 8817,
    ngtr: 8815,
    nisd: 8954,
    njcy: 1114,
    nldr: 8229,
    nleq: 8816,
    nmid: 8740,
    nopf: 120159,
    npar: 8742,
    nscr: 120003,
    nsim: 8769,
    nsub: 8836,
    nsup: 8837,
    ntgl: 8825,
    ntlg: 8824,
    oast: 8859,
    ocir: 8858,
    odiv: 10808,
    odot: 8857,
    ogon: 731,
    oint: 8750,
    omid: 10678,
    oopf: 120160,
    opar: 10679,
    ordf: 170,
    ordm: 186,
    oror: 10838,
    oscr: 8500,
    osol: 8856,
    ouml: 246,
    para: 182,
    part: 8706,
    perp: 8869,
    phiv: 966,
    plus: 43,
    popf: 120161,
    prap: 10935,
    prec: 8826,
    prnE: 10933,
    prod: 8719,
    prop: 8733,
    pscr: 120005,
    qint: 10764,
    qopf: 120162,
    qscr: 120006,
    quot: 34,
    rArr: 8658,
    rHar: 10596,
    race: 10714,
    rang: 10217,
    rarr: 8594,
    rcub: 125,
    rdca: 10551,
    rdsh: 8627,
    real: 8476,
    rect: 9645,
    rhov: 1009,
    ring: 730,
    ropf: 120163,
    rpar: 41,
    rscr: 120007,
    rsqb: 93,
    rtri: 9657,
    scap: 10936,
    scnE: 10934,
    sdot: 8901,
    sect: 167,
    semi: 59,
    sext: 10038,
    shcy: 1096,
    sime: 8771,
    simg: 10910,
    siml: 10909,
    smid: 8739,
    smte: 10924,
    solb: 10692,
    sopf: 120164,
    spar: 8741,
    squf: 9642,
    sscr: 120008,
    star: 9734,
    subE: 10949,
    sube: 8838,
    succ: 8827,
    sung: 9834,
    sup1: 185,
    sup2: 178,
    sup3: 179,
    supE: 10950,
    supe: 8839,
    tbrk: 9140,
    tdot: 8411,
    tint: 8749,
    toea: 10536,
    topf: 120165,
    tosa: 10537,
    trie: 8796,
    tscr: 120009,
    tscy: 1094,
    uArr: 8657,
    uHar: 10595,
    uarr: 8593,
    uopf: 120166,
    upsi: 965,
    uscr: 120010,
    utri: 9653,
    uuml: 252,
    vArr: 8661,
    vBar: 10984,
    varr: 8597,
    vert: 124,
    vopf: 120167,
    vscr: 120011,
    wopf: 120168,
    wscr: 120012,
    xcap: 8898,
    xcup: 8899,
    xmap: 10236,
    xnis: 8955,
    xopf: 120169,
    xscr: 120013,
    xvee: 8897,
    yacy: 1103,
    yicy: 1111,
    yopf: 120170,
    yscr: 120014,
    yucy: 1102,
    yuml: 255,
    zdot: 380,
    zeta: 950,
    zhcy: 1078,
    zopf: 120171,
    zscr: 120015,
    zwnj: 8204,
    AMP: 38,
    Acy: 1040,
    Afr: 120068,
    And: 10835,
    Bcy: 1041,
    Bfr: 120069,
    Cap: 8914,
    Cfr: 8493,
    Chi: 935,
    Cup: 8915,
    Dcy: 1044,
    Del: 8711,
    Dfr: 120071,
    Dot: 168,
    ENG: 330,
    ETH: 208,
    Ecy: 1069,
    Efr: 120072,
    Eta: 919,
    Fcy: 1060,
    Ffr: 120073,
    Gcy: 1043,
    Gfr: 120074,
    Hat: 94,
    Hfr: 8460,
    Icy: 1048,
    Ifr: 8465,
    Int: 8748,
    Jcy: 1049,
    Jfr: 120077,
    Kcy: 1050,
    Kfr: 120078,
    Lcy: 1051,
    Lfr: 120079,
    Lsh: 8624,
    Map: 10501,
    Mcy: 1052,
    Mfr: 120080,
    Ncy: 1053,
    Nfr: 120081,
    Not: 10988,
    Ocy: 1054,
    Ofr: 120082,
    Pcy: 1055,
    Pfr: 120083,
    Phi: 934,
    Psi: 936,
    Qfr: 120084,
    REG: 174,
    Rcy: 1056,
    Rfr: 8476,
    Rho: 929,
    Rsh: 8625,
    Scy: 1057,
    Sfr: 120086,
    Sub: 8912,
    Sum: 8721,
    Sup: 8913,
    Tab: 9,
    Tau: 932,
    Tcy: 1058,
    Tfr: 120087,
    Ucy: 1059,
    Ufr: 120088,
    Vcy: 1042,
    Vee: 8897,
    Vfr: 120089,
    Wfr: 120090,
    Xfr: 120091,
    Ycy: 1067,
    Yfr: 120092,
    Zcy: 1047,
    Zfr: 8488,
    acd: 8767,
    acy: 1072,
    afr: 120094,
    amp: 38,
    and: 8743,
    ang: 8736,
    apE: 10864,
    ape: 8778,
    ast: 42,
    bcy: 1073,
    bfr: 120095,
    bot: 8869,
    cap: 8745,
    cfr: 120096,
    chi: 967,
    cir: 9675,
    cup: 8746,
    dcy: 1076,
    deg: 176,
    dfr: 120097,
    die: 168,
    div: 247,
    dot: 729,
    ecy: 1101,
    efr: 120098,
    egs: 10902,
    ell: 8467,
    els: 10901,
    eng: 331,
    eta: 951,
    eth: 240,
    fcy: 1092,
    ffr: 120099,
    gEl: 10892,
    gap: 10886,
    gcy: 1075,
    gel: 8923,
    geq: 8805,
    ges: 10878,
    gfr: 120100,
    ggg: 8921,
    glE: 10898,
    gla: 10917,
    glj: 10916,
    gnE: 8809,
    gne: 10888,
    hfr: 120101,
    icy: 1080,
    iff: 8660,
    ifr: 120102,
    int: 8747,
    jcy: 1081,
    jfr: 120103,
    kcy: 1082,
    kfr: 120104,
    lEg: 10891,
    lap: 10885,
    lat: 10923,
    lcy: 1083,
    leg: 8922,
    leq: 8804,
    les: 10877,
    lfr: 120105,
    lgE: 10897,
    lnE: 8808,
    lne: 10887,
    loz: 9674,
    lrm: 8206,
    lsh: 8624,
    map: 8614,
    mcy: 1084,
    mfr: 120106,
    mho: 8487,
    mid: 8739,
    nap: 8777,
    ncy: 1085,
    nfr: 120107,
    nge: 8817,
    ngt: 8815,
    nis: 8956,
    niv: 8715,
    nle: 8816,
    nlt: 8814,
    not: 172,
    npr: 8832,
    nsc: 8833,
    num: 35,
    ocy: 1086,
    ofr: 120108,
    ogt: 10689,
    ohm: 8486,
    olt: 10688,
    ord: 10845,
    orv: 10843,
    par: 8741,
    pcy: 1087,
    pfr: 120109,
    phi: 966,
    piv: 982,
    prE: 10931,
    pre: 10927,
    psi: 968,
    qfr: 120110,
    rcy: 1088,
    reg: 174,
    rfr: 120111,
    rho: 961,
    rlm: 8207,
    rsh: 8625,
    scE: 10932,
    sce: 10928,
    scy: 1089,
    sfr: 120112,
    shy: 173,
    sim: 8764,
    smt: 10922,
    sol: 47,
    squ: 9633,
    sub: 8834,
    sum: 8721,
    sup: 8835,
    tau: 964,
    tcy: 1090,
    tfr: 120113,
    top: 8868,
    ucy: 1091,
    ufr: 120114,
    uml: 168,
    vcy: 1074,
    vee: 8744,
    vfr: 120115,
    wfr: 120116,
    xfr: 120117,
    ycy: 1099,
    yen: 165,
    yfr: 120118,
    zcy: 1079,
    zfr: 120119,
    zwj: 8205,
    DD: 8517,
    GT: 62,
    Gg: 8921,
    Gt: 8811,
    Im: 8465,
    LT: 60,
    Ll: 8920,
    Lt: 8810,
    Mu: 924,
    Nu: 925,
    Or: 10836,
    Pi: 928,
    Pr: 10939,
    Re: 8476,
    Sc: 10940,
    Xi: 926,
    ac: 8766,
    af: 8289,
    ap: 8776,
    dd: 8518,
    ee: 8519,
    eg: 10906,
    el: 10905,
    gE: 8807,
    ge: 8805,
    gg: 8811,
    gl: 8823,
    gt: 62,
    ic: 8291,
    ii: 8520,
    in: 8712,
    it: 8290,
    lE: 8806,
    le: 8804,
    lg: 8822,
    ll: 8810,
    lt: 60,
    mp: 8723,
    mu: 956,
    ne: 8800,
    ni: 8715,
    nu: 957,
    oS: 9416,
    or: 8744,
    pi: 960,
    pm: 177,
    pr: 8826,
    rx: 8478,
    sc: 8827,
    wp: 8472,
    wr: 8768,
    xi: 958
  };
  new RegExp(`&(#?(?:x[\\w\\d]+|\\d+|${Object.keys(entities).join("|")}))(?:;|\\b)`, "g");
  const meta_tags = /* @__PURE__ */ new Map([
    ["svelte:head", "Head"],
    ["svelte:options", "Options"],
    ["svelte:window", "Window"],
    ["svelte:body", "Body"]
  ]);
  Array.from(meta_tags.keys()).concat("svelte:self", "svelte:component", "svelte:fragment", "svelte:element");
  x`true`;
  x`false`;
  const svg_attributes = "accent-height accumulate additive alignment-baseline allowReorder alphabetic amplitude arabic-form ascent attributeName attributeType autoReverse azimuth baseFrequency baseline-shift baseProfile bbox begin bias by calcMode cap-height class clip clipPathUnits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominant-baseline dur dx dy edgeMode elevation enable-background end exponent externalResourcesRequired fill fill-opacity fill-rule filter filterRes filterUnits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight format from fr fx fy g1 g2 glyph-name glyph-orientation-horizontal glyph-orientation-vertical glyphRef gradientTransform gradientUnits hanging height href horiz-adv-x horiz-origin-x id ideographic image-rendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lang lengthAdjust letter-spacing lighting-color limitingConeAngle local marker-end marker-mid marker-start markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical max media method min mode name numOctaves offset onabort onactivate onbegin onclick onend onerror onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup onrepeat onresize onscroll onunload opacity operator order orient orientation origin overflow overline-position overline-thickness panose-1 paint-order pathLength patternContentUnits patternTransform patternUnits pointer-events points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY rendering-intent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shape-rendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stop-color stop-opacity strikethrough-position strikethrough-thickness string stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width style surfaceScale systemLanguage tabindex tableValues target targetX targetY text-anchor text-decoration text-rendering textLength to transform type u1 u2 underline-position underline-thickness unicode unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical values version vert-adv-y vert-origin-x vert-origin-y viewBox viewTarget visibility width widths word-spacing writing-mode x x-height x1 x2 xChannelSelector xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y y1 y2 yChannelSelector z zoomAndPan".split(" ");
  const svg_attribute_lookup = /* @__PURE__ */ new Map();
  svg_attributes.forEach((name) => {
    svg_attribute_lookup.set(name.toLowerCase(), name);
  });
  const attribute_lookup = {
    allowfullscreen: { property_name: "allowFullscreen", applies_to: ["iframe"] },
    allowpaymentrequest: { property_name: "allowPaymentRequest", applies_to: ["iframe"] },
    async: { applies_to: ["script"] },
    autofocus: { applies_to: ["button", "input", "keygen", "select", "textarea"] },
    autoplay: { applies_to: ["audio", "video"] },
    checked: { applies_to: ["input"] },
    controls: { applies_to: ["audio", "video"] },
    default: { applies_to: ["track"] },
    defer: { applies_to: ["script"] },
    disabled: {
      applies_to: [
        "button",
        "fieldset",
        "input",
        "keygen",
        "optgroup",
        "option",
        "select",
        "textarea"
      ]
    },
    formnovalidate: { property_name: "formNoValidate", applies_to: ["button", "input"] },
    hidden: {},
    indeterminate: { applies_to: ["input"] },
    ismap: { property_name: "isMap", applies_to: ["img"] },
    loop: { applies_to: ["audio", "bgsound", "video"] },
    multiple: { applies_to: ["input", "select"] },
    muted: { applies_to: ["audio", "video"] },
    nomodule: { property_name: "noModule", applies_to: ["script"] },
    novalidate: { property_name: "noValidate", applies_to: ["form"] },
    open: { applies_to: ["details", "dialog"] },
    playsinline: { property_name: "playsInline", applies_to: ["video"] },
    readonly: { property_name: "readOnly", applies_to: ["input", "textarea"] },
    required: { applies_to: ["input", "select", "textarea"] },
    reversed: { applies_to: ["ol"] },
    selected: { applies_to: ["option"] },
    value: {
      applies_to: [
        "button",
        "option",
        "input",
        "li",
        "meter",
        "progress",
        "param",
        "select",
        "textarea"
      ]
    }
  };
  Object.keys(attribute_lookup).forEach((name) => {
    const metadata = attribute_lookup[name];
    if (!metadata.property_name)
      metadata.property_name = name;
  });
  var charToInteger$1 = {};
  var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  for (var i$2 = 0; i$2 < chars$1.length; i$2++) {
    charToInteger$1[chars$1.charCodeAt(i$2)] = i$2;
  }
  typeof URL !== "undefined" ? URL : require("url").URL;
  var BlockAppliesToNode;
  (function(BlockAppliesToNode2) {
    BlockAppliesToNode2[BlockAppliesToNode2["NotPossible"] = 0] = "NotPossible";
    BlockAppliesToNode2[BlockAppliesToNode2["Possible"] = 1] = "Possible";
    BlockAppliesToNode2[BlockAppliesToNode2["UnknownSelectorType"] = 2] = "UnknownSelectorType";
  })(BlockAppliesToNode || (BlockAppliesToNode = {}));
  var NodeExist;
  (function(NodeExist2) {
    NodeExist2[NodeExist2["Probably"] = 1] = "Probably";
    NodeExist2[NodeExist2["Definitely"] = 2] = "Definitely";
  })(NodeExist || (NodeExist = {}));
  self.addEventListener("message", async (event) => {
    console.log("Mess rx in worker");
    self.postMessage("Me too");
  });
})();
//# sourceMappingURL=testerWorker.301537d0.js.map