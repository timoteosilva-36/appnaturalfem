(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/funnel.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/components_funnel_module_728ce782.css",
    "included": [
      "[project]/components/funnel.module.css [app-client] (css)"
    ]
  },
  "static/chunks/components_646c1f94._.js",
  "static/chunks/components_funnel_tsx_f73dfd91._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/funnel.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);