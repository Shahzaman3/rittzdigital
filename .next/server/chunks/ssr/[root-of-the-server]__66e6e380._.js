module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/Header.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Header = ()=>{
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false); // Scrolling down
            } else {
                setShowHeader(true); // Scrolling up
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-18 lg:h-20 border-b flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "items-center p-4 object-cover h-16 md:h-20",
                        src: "/assets/rittz_logo.png",
                        alt: "Peek Insights Logo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mr-4 text-xl font-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden text-lg lg:block",
                            href: "",
                            children: "Beneifts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden text-lg lg:block",
                            href: "",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden text-lg lg:block",
                            href: "",
                            children: "What's Included"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden text-lg lg:block",
                            href: "",
                            children: "How It Works"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden text-lg lg:block",
                            href: "",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hidden md:block items-center my-auto py-2 bg-black text-white rounded-xl border-2 border-black hover:bg-white hover:text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "px-4 text-base",
                                href: "",
                                children: "Get a free Audit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-12 w-12 mr-4 cursor-pointer lg:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 12H20M4 8H20M4 16H12",
                                    stroke: "#000000",
                                    strokeWidth: "0.696",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/animations/ShapeBlur.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
;
;
;
const vertexShader = `
  varying vec2 v_texcoord;
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      v_texcoord = uv;
  }
`;
const fragmentShader = `
  varying vec2 v_texcoord;

  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform float u_pixelRatio;

  uniform float u_shapeSize;
  uniform float u_roundness;
  uniform float u_borderSize;
  uniform float u_circleSize;
  uniform float u_circleEdge;

  #ifndef PI
  #define PI 3.1415926535897932384626433832795
  #endif
  #ifndef TWO_PI
  #define TWO_PI 6.2831853071795864769252867665590
  #endif

  #ifndef VAR
  #define VAR 0
  #endif

  #ifndef FNC_COORD
  #define FNC_COORD
  vec2 coord(in vec2 p) {
      p = p / u_resolution.xy;
      if (u_resolution.x > u_resolution.y) {
          p.x *= u_resolution.x / u_resolution.y;
          p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
      } else {
          p.y *= u_resolution.y / u_resolution.x;
          p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
      }
      p -= 0.5;
      p *= vec2(-1.0, 1.0);
      return p;
  }
  #endif

  #define st0 coord(gl_FragCoord.xy)
  #define mx coord(u_mouse * u_pixelRatio)

  float sdRoundRect(vec2 p, vec2 b, float r) {
      vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
      return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
  }
  float sdCircle(in vec2 st, in vec2 center) {
      return length(st - center) * 2.0;
  }
  float sdPoly(in vec2 p, in float w, in int sides) {
      float a = atan(p.x, p.y) + PI;
      float r = TWO_PI / float(sides);
      float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
      return d * 2.0 - w;
  }

  float aastep(float threshold, float value) {
      float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
      return smoothstep(threshold - afwidth, threshold + afwidth, value);
  }
  float fill(in float x) { return 1.0 - aastep(0.0, x); }
  float fill(float x, float size, float edge) {
      return 1.0 - smoothstep(size - edge, size + edge, x);
  }
  float stroke(in float d, in float t) { return (1.0 - aastep(t, abs(d))); }
  float stroke(float x, float size, float w, float edge) {
      float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
      return clamp(d, 0.0, 1.0);
  }

  float strokeAA(float x, float size, float w, float edge) {
      float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
      float d = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
              - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
      return clamp(d, 0.0, 1.0);
  }

  void main() {
      vec2 st = st0 + 0.5;
      vec2 posMouse = mx * vec2(1., -1.) + 0.5;
      
      float size = u_shapeSize;
      float roundness = u_roundness;
      float borderSize = u_borderSize;
      float circleSize = u_circleSize;
      float circleEdge = u_circleEdge;
      
      float sdfCircle = fill(
          sdCircle(st, posMouse),
          circleSize,
          circleEdge
      );
      
      float sdf;
      if (VAR == 0) {
          sdf = sdRoundRect(st, vec2(size), roundness);
          sdf = strokeAA(sdf, 0.0, borderSize, sdfCircle) * 4.0;
      } else if (VAR == 1) {
          sdf = sdCircle(st, vec2(0.5));
          sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
      } else if (VAR == 2) {
          sdf = sdCircle(st, vec2(0.5));
          sdf = strokeAA(sdf, 0.58, 0.02, sdfCircle) * 4.0;
      } else if (VAR == 3) {
          sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
          sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
      }
      
      vec3 color = vec3(sdf);
      float alpha = step(0.01, sdf);
      gl_FragColor = vec4(color.rgb, alpha);
  }
`;
const ShapeBlur = ({ className = '', variation = 0, pixelRatioProp = 2, shapeSize = 1, roundness = 0.5, borderSize = 0.05, circleSize = 0.25, circleEdge = 1 })=>{
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mount = mountRef.current;
        let animationFrameId;
        let time = 0, lastTime = 0;
        const vMouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const vMouseDamp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        const vResolution = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        let w = 10, h = 1;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"]();
        camera.position.z = 1;
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            alpha: true
        });
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);
        const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1);
        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_mouse: {
                    value: vMouseDamp
                },
                u_resolution: {
                    value: vResolution
                },
                u_pixelRatio: {
                    value: pixelRatioProp
                },
                u_shapeSize: {
                    value: shapeSize
                },
                u_roundness: {
                    value: roundness
                },
                u_borderSize: {
                    value: borderSize
                },
                u_circleSize: {
                    value: circleSize
                },
                u_circleEdge: {
                    value: circleEdge
                }
            },
            defines: {
                VAR: variation
            },
            transparent: true
        });
        const quad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, material);
        scene.add(quad);
        const onPointerMove = (e)=>{
            const rect = mount.getBoundingClientRect();
            vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
        };
        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('pointermove', onPointerMove);
        const resize = ()=>{
            const container = mountRef.current;
            w = container.clientWidth;
            h = container.clientHeight;
            const dpr = Math.min(window.devicePixelRatio, 2);
            renderer.setSize(w, h);
            renderer.setPixelRatio(dpr);
            camera.left = -w / 2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = -h / 2;
            camera.updateProjectionMatrix();
            quad.scale.set(w, h, 1);
            vResolution.set(w, h).multiplyScalar(dpr);
            material.uniforms.u_pixelRatio.value = dpr;
        };
        resize();
        window.addEventListener('resize', resize);
        const ro = new ResizeObserver(()=>resize());
        if (mountRef.current) ro.observe(mountRef.current);
        const update = ()=>{
            time = performance.now() * 0.001;
            const dt = time - lastTime;
            lastTime = time;
            [
                'x',
                'y'
            ].forEach((k)=>{
                vMouseDamp[k] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].damp(vMouseDamp[k], vMouse[k], 8, dt);
            });
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(update);
        };
        update();
        return ()=>{
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            if (ro) ro.disconnect();
            document.removeEventListener('mousemove', onPointerMove);
            document.removeEventListener('pointermove', onPointerMove);
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [
        variation,
        pixelRatioProp,
        shapeSize,
        roundness,
        borderSize,
        circleSize,
        circleEdge
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: `w-full h-full ${className}`
    }, void 0, false, {
        fileName: "[project]/src/animations/ShapeBlur.jsx",
        lineNumber: 248,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = ShapeBlur;
}}),
"[project]/src/components/Hero.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$animations$2f$ShapeBlur$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/animations/ShapeBlur.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
class Hero extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen font-sans overflow-hidden text-white bg-red-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "py-55 px-10 text-4xl leading-relaxed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-6xl",
                        children: "W"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    "e Build Products",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    "That ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "Scale —"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 12,
                        columnNumber: 16
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-4xl",
                        children: "No Code Required."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this);
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__66e6e380._.js.map