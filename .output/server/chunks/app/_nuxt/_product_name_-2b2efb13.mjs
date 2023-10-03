import { u as useRoute, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './TheBHeader-e35f2f53.mjs';
import { mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './WLButton-0aa3b93a.mjs';

const _sfc_main = {
  __name: "[product_name]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_TheBHeader = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "subsection" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TheBHeader, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}><div${_scopeId}>products ${ssrInterpolate(unref(route).params.product_name)}</div></section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode(_component_TheBHeader)
              ]),
              createVNode("section", null, [
                createVNode("div", null, "products " + toDisplayString(unref(route).params.product_name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-catalog/products/[product_name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_product_name_-2b2efb13.mjs.map
