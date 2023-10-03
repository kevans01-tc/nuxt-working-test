import { _ as __nuxt_component_2 } from './WLButton-0aa3b93a.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_WLButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-topper" }, _attrs))}><div class="item-top"><div class="item-details"><h1>{Title} <span class="x-small semi-bold">{number}</span></h1><h2>{Description of this area}</h2></div><div class="item-create">`);
  _push(ssrRenderComponent(_component_WLButton, {
    variant: "solid",
    "icon-left": "add"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` New {item}`);
      } else {
        return [
          createTextVNode(" New {item}")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="search"><input class="search-input" type="text"><div class="item-actions">`);
  _push(ssrRenderComponent(_component_WLButton, {
    variant: "default",
    "icon-left": "funnel-outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Filter`);
      } else {
        return [
          createTextVNode(" Filter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<select><option>10 per page</option><option>10 per page</option><option>10 per page</option><option>10 per page</option></select></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=TheAHeader-f6419627.mjs.map
