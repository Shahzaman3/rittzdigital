(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/animations/CustomCursor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlobCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BlobCursor({ blobType = "circle", fillColor = "#5227FF", trailCount = 3, sizes = [
    60,
    125,
    75
], innerSizes = [
    20,
    35,
    25
], innerColor = "rgba(255,255,255,0.8)", opacities = [
    0.6,
    0.6,
    0.6
], shadowColor = "rgba(0,0,0,0.75)", shadowBlur = 5, shadowOffsetX = 10, shadowOffsetY = 10, filterId = "blob", filterStdDeviation = 30, filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10", useFilter = true, fastDuration = 0.1, slowDuration = 0.5, fastEase = "power3.out", slowEase = "power1.out", zIndex = 100 }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blobsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const updateOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlobCursor.useCallback[updateOffset]": ()=>{
            if (!containerRef.current) return {
                left: 0,
                top: 0
            };
            const rect = containerRef.current.getBoundingClientRect();
            return {
                left: rect.left,
                top: rect.top
            };
        }
    }["BlobCursor.useCallback[updateOffset]"], []);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlobCursor.useCallback[handleMove]": (e)=>{
            const { left, top } = updateOffset();
            const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
            const y = "clientY" in e ? e.clientY : e.touches[0].clientY;
            blobsRef.current.forEach({
                "BlobCursor.useCallback[handleMove]": (el, i)=>{
                    if (!el) return;
                    const isLead = i === 0;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        x: x - left,
                        y: y - top,
                        duration: isLead ? fastDuration : slowDuration,
                        ease: isLead ? fastEase : slowEase
                    });
                }
            }["BlobCursor.useCallback[handleMove]"]);
        }
    }["BlobCursor.useCallback[handleMove]"], [
        updateOffset,
        fastDuration,
        slowDuration,
        fastEase,
        slowEase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlobCursor.useEffect": ()=>{
            const onResize = {
                "BlobCursor.useEffect.onResize": ()=>updateOffset()
            }["BlobCursor.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "BlobCursor.useEffect": ()=>window.removeEventListener("resize", onResize)
            })["BlobCursor.useEffect"];
        }
    }["BlobCursor.useEffect"], [
        updateOffset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onMouseMove: handleMove,
        onTouchMove: handleMove,
        className: "relative top-0 left-0 w-full h-full",
        style: {
            zIndex
        },
        children: [
            useFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute w-0 h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: filterId,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            in: "SourceGraphic",
                            result: "blur",
                            stdDeviation: filterStdDeviation
                        }, void 0, false, {
                            fileName: "[project]/src/animations/CustomCursor.jsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                            in: "blur",
                            values: filterColorMatrixValues
                        }, void 0, false, {
                            fileName: "[project]/src/animations/CustomCursor.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/animations/CustomCursor.jsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/animations/CustomCursor.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default",
                style: {
                    filter: useFilter ? `url(#${filterId})` : undefined
                },
                children: Array.from({
                    length: trailCount
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>blobsRef.current[i] = el,
                        className: "absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2",
                        style: {
                            width: sizes[i],
                            height: sizes[i],
                            borderRadius: blobType === "circle" ? "50%" : "0",
                            backgroundColor: fillColor,
                            opacity: opacities[i],
                            boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                width: innerSizes[i],
                                height: innerSizes[i],
                                top: (sizes[i] - innerSizes[i]) / 2,
                                left: (sizes[i] - innerSizes[i]) / 2,
                                backgroundColor: innerColor,
                                borderRadius: blobType === "circle" ? "50%" : "0"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/animations/CustomCursor.jsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/animations/CustomCursor.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/animations/CustomCursor.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/animations/CustomCursor.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(BlobCursor, "FRQhT8kHKQVb3hBEWmLMKVheHts=");
_c = BlobCursor;
var _c;
__turbopack_context__.k.register(_c, "BlobCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_animations_CustomCursor_jsx_fb8c6184._.js.map