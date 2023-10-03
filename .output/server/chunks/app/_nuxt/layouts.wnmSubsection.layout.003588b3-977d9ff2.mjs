import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './wnmSubNavigation-db0609e6.mjs';
import { f as useWNMHeaderStore } from '../server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-dcdeaa20.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layouts.wnmSubsection.layout.003588b3",
  __ssrInlineRender: true,
  setup(__props) {
    const headerStore = useWNMHeaderStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_WnmSubNavigation = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a = unref(headerStore).subNavigation) == null ? void 0 : _a.links.length) > 0) {
        _push(ssrRenderComponent(_component_WnmSubNavigation, {
          class: "app-sub-navigation",
          navigation: unref(headerStore).subNavigation,
          "role-description": "Submenu"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".nuxt/layouts.wnmSubsection.layout.003588b3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=layouts.wnmSubsection.layout.003588b3-977d9ff2.mjs.map
