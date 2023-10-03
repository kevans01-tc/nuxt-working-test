import { defineComponent, ref, createElementBlock, useSSRContext, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString } from 'vue';
import { _ as __nuxt_component_0$1 } from './nuxt-link-dcdeaa20.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
var EWnmIconTypes = /* @__PURE__ */ ((EWnmIconTypes2) => {
  EWnmIconTypes2[EWnmIconTypes2["IonIcons"] = 0] = "IonIcons";
  return EWnmIconTypes2;
})(EWnmIconTypes || {});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "wnmIcon",
  __ssrInlineRender: true,
  props: {
    type: {},
    icon: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (props.type === unref(EWnmIconTypes).IonIcons) {
        _push(`<ion-icon${ssrRenderAttrs(mergeProps({
          icon: props.icon,
          size: props.size
        }, _attrs), "ion-icon")}></ion-icon>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wnmSubNavigation",
  __ssrInlineRender: true,
  props: {
    navigation: {},
    ariaRole: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      if ((_a = props.navigation) == null ? void 0 : _a.links.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          role: "navigation",
          "aria-roledescription": _ctx.ariaRole
        }, _attrs))} data-v-e3e2fc15><ul class="navigation" data-v-e3e2fc15><!--[-->`);
        ssrRenderList((_b = props.navigation) == null ? void 0 : _b.links, (link) => {
          _push(`<!--[-->`);
          if (link.path === null) {
            _push(`<li class="divider" data-v-e3e2fc15></li>`);
          } else if (!link.isHidden) {
            _push(`<li data-v-e3e2fc15>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              "aria-label": link.description,
              to: link.path,
              "active-class": "active",
              "exact-active-class": link.isExactPath ? "active" : ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (link.logo) {
                    _push2(ssrRenderComponent(_sfc_main$1, {
                      type: unref(EWnmIconTypes).IonIcons,
                      icon: link.logo
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span data-v-e3e2fc15${_scopeId}>${ssrInterpolate(link.title)}</span>`);
                } else {
                  return [
                    link.logo ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      type: unref(EWnmIconTypes).IonIcons,
                      icon: link.logo
                    }, null, 8, ["type", "icon"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(link.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@tucowsinc/wavelo-nuxt-module/dist/runtime/components/wnmSubNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3e2fc15"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=wnmSubNavigation-db0609e6.mjs.map
