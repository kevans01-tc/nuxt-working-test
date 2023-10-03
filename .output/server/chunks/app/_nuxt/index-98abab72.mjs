import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './TheAHeader-f6419627.mjs';
import { _ as __nuxt_component_2 } from './WLButton-0aa3b93a.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_TheAHeader = __nuxt_component_1;
  const _component_WLButton = __nuxt_component_2;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "subsection" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TheAHeader, null, null, _parent2, _scopeId));
        _push2(`</section><section${_scopeId}>`);
        _push2(ssrRenderComponent(_component_WLButton, {
          variant: "plain",
          href: "/product-catalog/products/current-product"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View a product`);
            } else {
              return [
                createTextVNode("View a product")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</section><section${_scopeId}><div${_scopeId}>products index</div></section>`);
      } else {
        return [
          createVNode("section", null, [
            createVNode(_component_TheAHeader)
          ]),
          createVNode("section", null, [
            createVNode(_component_WLButton, {
              variant: "plain",
              href: "/product-catalog/products/current-product"
            }, {
              default: withCtx(() => [
                createTextVNode("View a product")
              ]),
              _: 1
            })
          ]),
          createVNode("section", null, [
            createVNode("div", null, "products index")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-catalog/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-98abab72.mjs.map
