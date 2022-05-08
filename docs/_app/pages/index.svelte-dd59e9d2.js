import { SvelteComponent, init, safe_not_equal, element, text, space, claim_element, children, claim_text, detach, claim_space, query_selector_all, attr, insert_hydration, append_hydration, noop, onMount, binding_callbacks, create_component, claim_component, mount_component, transition_in, transition_out, destroy_component } from "../chunks/index-0a7c619a.js";
import { __vitePreload } from "../chunks/preload-helper-5d4e15b4.js";
function WorkerWrapper$1() {
  return new Worker("/easymdsvex/_app/assets/worker.7548e26b.js", {
    "type": "module"
  });
}
function WorkerWrapper() {
  return new Worker("/easymdsvex/_app/assets/testerWorker.f8998f96.js", {
    "type": "module"
  });
}
var EasyMDSvex_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let h1;
  let t0;
  let t1;
  let link;
  let t2;
  let div;
  let textarea;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Simple MDSVex");
      t1 = space();
      link = element("link");
      t2 = space();
      div = element("div");
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Simple MDSVex");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      const head_nodes = query_selector_all('[data-svelte="svelte-3n3cbe"]', document.head);
      link = claim_element(head_nodes, "LINK", { rel: true, href: true });
      head_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      textarea = claim_element(div_nodes, "TEXTAREA", {});
      children(textarea).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link, "rel", "stylesheet");
      attr(link, "href", "https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css");
      textarea.hidden = true;
      attr(div, "class", "codemirror-container svelte-6bh908");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      append_hydration(document.head, link);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, textarea);
      ctx[6](textarea);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      detach(link);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div);
      ctx[6](null);
    }
  };
}
const DRAFT = "_DRAFT_";
const COMPONENTS = "_COMPONENTS_";
function instance$1($$self, $$props, $$invalidate) {
  let components;
  let { value = null } = $$props;
  let { initialValue = `# Title
Go ahead, *make* **a** _note_!` } = $$props;
  let { cacheValue = (key, value2) => {
  } } = $$props;
  let { TIMEOUT_MS = 900 } = $$props;
  let markdowneditorelement;
  let timeoutID;
  let compile;
  let compiled;
  let worker;
  let easymdsvex;
  onMount(async () => {
    worker = new WorkerWrapper$1();
    new WorkerWrapper();
    worker.addEventListener("message", (event) => {
      if (timeoutID)
        return;
      compiled = event.data.output;
      console.log("compiled");
    });
    const EasyMDEModule = await __vitePreload(() => import("../chunks/easymde-cbd10a18.js").then(function(n) {
      return n.easymde;
    }), true ? [] : void 0);
    const EasyMDE = EasyMDEModule.default;
    $$invalidate(5, easymdsvex = new EasyMDE({
      toolbar: [
        "bold",
        "italic",
        "link",
        "image",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
        "guide"
      ],
      element: markdowneditorelement,
      status: [
        {
          className: "bytes",
          defaultValue(el) {
          },
          onUpdate(el) {
          }
        }
      ],
      initialValue,
      previewRender: (plainText, previewElement) => {
        $$invalidate(1, value = (easymdsvex == null ? void 0 : easymdsvex.value()) || null);
        if (!value)
          return "Compile Error, must not be blank";
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(async () => {
          timeoutID = null;
          compiled = await compile(components);
          console.log("compiled", { compiled });
          render(previewElement);
          await cacheValue(COMPONENTS, JSON.stringify(components));
        }, TIMEOUT_MS);
        return previewElement.innerHTML;
      }
    }));
    function render(previewElement) {
      const blob = new Blob([compiled], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      __vitePreload(() => import(
        /* @vite-ignore */
        url
      ), true ? [] : void 0).then(function({ default: App }) {
        previewElement.innerHTML = "";
        new App({ target: previewElement });
      });
    }
    $$invalidate(1, value = easymdsvex.value());
    easymdsvex.codemirror.on("change", function() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(async () => {
        timeoutID = null;
        $$invalidate(1, value = easymdsvex.value());
        await cacheValue(DRAFT, value);
      }, TIMEOUT_MS);
    });
    compile = async function(_components) {
      try {
        return new Promise((resolve, reject) => {
          console.log("compiling", { _components });
          const channel = new MessageChannel();
          channel.port1.onmessage = (e) => {
            channel.port1.close();
            resolve(e.data.output);
          };
          worker.postMessage(_components, [channel.port2]);
        });
      } catch (error) {
        console.log(`rpc-run [fail] ${error}`);
        return `rpc-run [fail] ${error}`;
      }
    };
  });
  function textarea_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      markdowneditorelement = $$value;
      $$invalidate(0, markdowneditorelement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("initialValue" in $$props2)
      $$invalidate(2, initialValue = $$props2.initialValue);
    if ("cacheValue" in $$props2)
      $$invalidate(3, cacheValue = $$props2.cacheValue);
    if ("TIMEOUT_MS" in $$props2)
      $$invalidate(4, TIMEOUT_MS = $$props2.TIMEOUT_MS);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 34) {
      components = [
        {
          id: 0,
          name: "App",
          type: "svx",
          source: (easymdsvex == null ? void 0 : easymdsvex.value()) || value
        }
      ];
    }
  };
  return [
    markdowneditorelement,
    value,
    initialValue,
    cacheValue,
    TIMEOUT_MS,
    easymdsvex,
    textarea_binding
  ];
}
class EasyMDSvex extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      value: 1,
      initialValue: 2,
      cacheValue: 3,
      TIMEOUT_MS: 4
    });
  }
}
function create_fragment(ctx) {
  let easymdsvex;
  let current;
  easymdsvex = new EasyMDSvex({
    props: { initialValue: ctx[0] }
  });
  return {
    c() {
      create_component(easymdsvex.$$.fragment);
    },
    l(nodes) {
      claim_component(easymdsvex.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(easymdsvex, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(easymdsvex.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(easymdsvex.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(easymdsvex, detaching);
    }
  };
}
function instance($$self) {
  let initialValue = `

<script>
	let name = 'dude'
	import List, { TaskList, Styling } from 'listavelte@0.1.1'
<\/script>

# Title 
Go ahead {name}, *make* **a** _note_!

<List />

Here is a named list, wrapped in style:


<Styling>
	<TaskList />
</Styling>
	`;
  return [initialValue];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-dd59e9d2.js.map
