import { useSSRContext, mergeProps, withCtx, createTextVNode, computed, resolveComponent, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { W as WLIcon, _ as __nuxt_component_2 } from './WLButton-0aa3b93a.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$2 = {
  __name: "TheBreadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const transformSegment = (segment) => {
      return segment.replace(/-/g, " ");
    };
    const breadcrumbItems = computed(() => {
      const routeSegments = route.path.split("/").filter((segment) => segment !== "");
      return routeSegments.map((segment, index) => ({
        text: transformSegment(segment),
        to: `/${routeSegments.slice(0, index + 1).join("/")}`
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "wl-breadcrumb-nav",
        "aria-label": "Breadcrumb"
      }, _attrs))} data-v-fa9b7c80><ol class="wl-breadcrumb-nav-list" data-v-fa9b7c80><!--[-->`);
      ssrRenderList(breadcrumbItems.value, (item, index) => {
        _push(`<li class="wl-breadcrumb-item" data-v-fa9b7c80>`);
        if (index === breadcrumbItems.value.length - 1) {
          _push(`<a class="wl-breadcrumb-current" aria-current="page" data-v-fa9b7c80>${ssrInterpolate(item.text)}</a>`);
        } else {
          _push(ssrRenderComponent(_component_router_link, {
            to: item.to,
            class: "wl-breadcrumb-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        if (index !== breadcrumbItems.value.length - 1) {
          _push(ssrRenderComponent(WLIcon, {
            "aria-hidden": "true",
            name: "chevron-forward"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`/`);
              } else {
                return [
                  createTextVNode("/")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheBreadcrumbs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fa9b7c80"]]);
const _sfc_main$1 = {
  __name: "WLStatusTag",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "badge",
      validator: (value) => {
        return ["badge", "dot"].includes(value);
      }
    },
    status: {
      type: String,
      default: "default",
      validator: (value) => {
        return [
          "default",
          "warning",
          "positive",
          "negative",
          "neutral"
        ].includes(value);
      }
    },
    value: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const tagVariants = computed(() => {
      const variant = {};
      if (props.variant === "dot") {
        variant["tag-dot"] = true;
      } else {
        variant["tag-badge"] = true;
      }
      return variant;
    });
    const tagStatus = computed(() => {
      const status = {};
      switch (props.status) {
        case "default":
          status["tag-default"] = true;
          break;
        case "warning":
          status["tag-warning"] = true;
          break;
        case "positive":
          status["tag-positive"] = true;
          break;
        case "negative":
          status["tag-negative"] = true;
          break;
        case "neutral":
          status["tag-neutral"] = true;
          break;
      }
      return status;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["wl-status-tag", tagVariants.value, tagStatus.value],
        value: __props.value
      }, _attrs))} data-v-0d4b4ef9>${ssrInterpolate(__props.value)}</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WLStatusTag.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d4b4ef9"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheBreadcrumbs = __nuxt_component_0;
  const _component_WLStatusTag = __nuxt_component_1$1;
  const _component_WLButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-topper topper-background" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheBreadcrumbs, null, null, _parent));
  _push(`<div><div class="item"><div class="item-top"><div class="item-details"><p class="item-id">{ID:1234567890}</p><div><h1><span> {Item <span class="item-title-tag-wrap"> title} `);
  _push(ssrRenderComponent(_component_WLStatusTag, {
    value: "{Status}",
    variant: "dot",
    status: "positive"
  }, null, _parent));
  _push(`</span></span></h1></div><p class="item-info">{Created date}</p><div class="item-description"><h2>{Description}</h2><p>{This is the description for this item }</p></div></div><div class="item-actions">`);
  _push(ssrRenderComponent(_component_WLButton, {
    variant: "solid",
    "icon-left": "add"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Add {item}`);
      } else {
        return [
          createTextVNode(" Add {item}")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_WLButton, {
    variant: "default",
    icon: "ellipsis-vertical-sharp",
    "aria-label": "Open menu"
  }, null, _parent));
  _push(`</div></div></div><div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheBHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=TheBHeader-e35f2f53.mjs.map
