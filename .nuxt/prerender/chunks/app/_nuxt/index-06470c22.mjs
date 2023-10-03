import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/hookable/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unctx/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/defu/dist/defu.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unhead/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/h3/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/destr/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/scule/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/klona/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/ohash/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/pathe/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unified/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-character/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/slugify/slugify.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-parse/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-rehype/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/hast-util-to-string/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/github-slugger/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/detab/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-emoji/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/remark-gfm/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-external-links/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/rehype-raw/index.js';
import 'file:///Users/karenevans/Documents/nuxt-working-test/node_modules/unist-util-visit/index.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "subsection" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section${_scopeId}><div${_scopeId}>lowest index</div></section>`);
      } else {
        return [
          createVNode("section", null, [
            createVNode("div", null, "lowest index")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-06470c22.mjs.map
