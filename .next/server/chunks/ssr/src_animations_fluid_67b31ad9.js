module.exports = {

"[project]/src/animations/fluid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "initFluidSimulation": (()=>initFluidSimulation)
});
function initFluidSimulation() {
    const a = document.getElementById("fluidCanvas");
    if (!a) {
        console.log("Canvas not found, skipping fluid simulation initialization");
        return;
    }
    if (a.dataset.fluidInitialized === "true") return;
    a.dataset.fluidInitialized = "true", $();
    let f = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 256,
        DENSITY_DISSIPATION: 5,
        VELOCITY_DISSIPATION: 2,
        SPLAT_RADIUS: 0.4,
        SPLAT_FORCE: 2e3,
        GRADIENT_TOP: {
            r: 246,
            g: 173,
            b: 169
        },
        GRADIENT_BOTTOM: {
            r: 231,
            g: 74,
            b: 87
        }
    };
    const A = {
        maxPoints: 5,
        velocitySmoothing: 0.3,
        interpolationSteps: 5,
        minDistance: 5
    };
    function W(e, i, r, o) {
        e.points.push({
            x: i,
            y: r,
            timestamp: o
        }), e.points.length > A.maxPoints && e.points.shift();
    }
    function ce(e, i) {
        if (e.length < 2) return {
            vx: 0,
            vy: 0
        };
        const r = e[0], o = e[e.length - 1], n = (i - r.timestamp) / 1e3;
        if (n <= 0) return {
            vx: 0,
            vy: 0
        };
        const s = (o.x - r.x) / n, u = (o.y - r.y) / n;
        return {
            vx: s,
            vy: u
        };
    }
    function le(e, i, r) {
        return {
            x: e.x + (i.x - e.x) * r,
            y: e.y + (i.y - e.y) * r
        };
    }
    function fe(e, i, r, o) {
        if (e.points.length < 2) return [
            {
                x: i,
                y: r
            }
        ];
        const n = e.points[e.points.length - 1];
        if (Math.hypot(i - n.x, r - n.y) < A.minDistance) return [
            {
                x: i,
                y: r
            }
        ];
        const u = [];
        for(let l = 1; l <= A.interpolationSteps; l++){
            const m1 = l / A.interpolationSteps, _ = le(n, {
                x: i,
                y: r
            }, m1);
            u.push(_);
        }
        return u;
    }
    function K() {
        this.id = -1, this.texcoordX = 0, this.texcoordY = 0, this.prevTexcoordX = 0, this.prevTexcoordY = 0, this.deltaX = 0, this.deltaY = 0, this.down = !1, this.moved = !1, this.color = [
            30,
            0,
            300
        ], this.velocityX = 0, this.velocityY = 0, this.lastTimestamp = 0, this.points = [];
    }
    let x = [], M = [], v, c, O, R;
    x.push(new K());
    const { gl: t, ext: g } = ve(a);
    he() && (f.DYE_RESOLUTION = 512), g.supportLinearFiltering || (f.DYE_RESOLUTION = 512), de();
    function ve(e) {
        const i = {
            alpha: !0,
            depth: !1,
            stencil: !1,
            antialias: !1,
            preserveDrawingBuffer: !1
        };
        let r = e.getContext("webgl2", i);
        const o = !!r;
        o || (r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i));
        let n, s;
        o ? (r.getExtension("EXT_color_buffer_float"), s = r.getExtension("OES_texture_float_linear")) : (n = r.getExtension("OES_texture_half_float"), s = r.getExtension("OES_texture_half_float_linear")), r.clearColor(0, 0, 0, 1);
        const u = o ? r.HALF_FLOAT : n.HALF_FLOAT_OES;
        let l, m1, _;
        return o ? (l = y(r, r.RGBA16F, r.RGBA, u), m1 = y(r, r.RG16F, r.RG, u), _ = y(r, r.R16F, r.RED, u)) : (l = y(r, r.RGBA, r.RGBA, u), m1 = y(r, r.RGBA, r.RGBA, u), _ = y(r, r.RGBA, r.RGBA, u)), {
            gl: r,
            ext: {
                formatRGBA: l,
                formatRG: m1,
                formatR: _,
                halfFloatTexType: u,
                supportLinearFiltering: s
            }
        };
    }
    function y(e, i, r, o) {
        if (!me(e, i, r, o)) switch(i){
            case e.R16F:
                return y(e, e.RG16F, e.RG, o);
            case e.RG16F:
                return y(e, e.RGBA16F, e.RGBA, o);
            default:
                return null;
        }
        return {
            internalFormat: i,
            format: r
        };
    }
    function me(e, i, r, o) {
        let n = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, i, 4, 4, 0, r, o, null);
        let s = e.createFramebuffer();
        return e.bindFramebuffer(e.FRAMEBUFFER, s), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), e.checkFramebufferStatus(e.FRAMEBUFFER) == e.FRAMEBUFFER_COMPLETE;
    }
    function de() {
        Y();
    }
    function he() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }
    class Ee {
        constructor(i, r){
            this.vertexShader = i, this.fragmentShaderSource = r, this.programs = [], this.activeProgram = null, this.uniforms = [];
        }
        setKeywords(i) {
            let r = 0;
            for(let n = 0; n < i.length; n++)r += Ye(i[n]);
            let o = this.programs[r];
            if (o == null) {
                let n = E(t.FRAGMENT_SHADER, this.fragmentShaderSource, i);
                o = k(this.vertexShader, n), this.programs[r] = o;
            }
            o != this.activeProgram && (this.uniforms = q(o), this.activeProgram = o);
        }
        bind() {
            t.useProgram(this.activeProgram);
        }
    }
    class S {
        constructor(i, r){
            this.uniforms = {}, this.program = k(i, r), this.uniforms = q(this.program);
        }
        bind() {
            t.useProgram(this.program);
        }
    }
    function k(e, i) {
        let r = t.createProgram();
        return t.attachShader(r, e), t.attachShader(r, i), t.linkProgram(r), t.getProgramParameter(r, t.LINK_STATUS) || console.trace(t.getProgramInfoLog(r)), r;
    }
    function q(e) {
        let i = [], r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for(let o = 0; o < r; o++){
            let n = t.getActiveUniform(e, o).name;
            i[n] = t.getUniformLocation(e, n);
        }
        return i;
    }
    function E(e, i, r) {
        i = xe(i, r);
        const o = t.createShader(e);
        return t.shaderSource(o, i), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS) || console.trace(t.getShaderInfoLog(o)), o;
    }
    function xe(e, i) {
        if (i == null) return e;
        let r = "";
        return i.forEach((o)=>{
            r += "#define " + o + `
`;
        }), r + e;
    }
    const T = E(t.VERTEX_SHADER, `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`), ge = E(t.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`), Te = E(t.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`), pe = E(t.FRAGMENT_SHADER, `
    precision mediump float;

    uniform vec4 topColor;
    uniform vec4 bottomColor;
    varying vec2 vUv;

    void main () {
        gl_FragColor = mix(bottomColor, topColor, vUv.y);
    }
`), Re = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`, ye = E(t.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`), Se = E(t.FRAGMENT_SHADER, `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`, g.supportLinearFiltering ? null : [
        "MANUAL_FILTERING"
    ]), De = E(t.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`), _e = E(t.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`), Ae = E(t.FRAGMENT_SHADER, `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`), d = (t.bindBuffer(t.ARRAY_BUFFER, t.createBuffer()), t.bufferData(t.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        -1,
        1,
        1,
        1,
        1,
        -1
    ]), t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, t.createBuffer()), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([
        0,
        1,
        2,
        0,
        2,
        3
    ]), t.STATIC_DRAW), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(0), (e, i = !1)=>{
        e == null ? (t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), t.bindFramebuffer(t.FRAMEBUFFER, null)) : (t.viewport(0, 0, e.width, e.height), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo)), i && (t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT)), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
    }), j = new S(T, ge), X = new S(T, Te), z = new S(T, pe), D = new S(T, ye), h = new S(T, Se), N = new S(T, De), P = new S(T, _e), U = new S(T, Ae), G = new Ee(T, Re);
    function Y() {
        let e = ae(f.SIM_RESOLUTION), i = ae(f.DYE_RESOLUTION);
        const r = g.halfFloatTexType, o = g.formatRGBA, n = g.formatRG, s = g.formatR, u = g.supportLinearFiltering ? t.LINEAR : t.NEAREST;
        t.disable(t.BLEND), v == null ? v = V(i.width, i.height, o.internalFormat, o.format, r, u) : v = J(v, i.width, i.height, o.internalFormat, o.format, r, u), c == null ? c = V(e.width, e.height, n.internalFormat, n.format, r, u) : c = J(c, e.width, e.height, n.internalFormat, n.format, r, u), O = w(e.width, e.height, s.internalFormat, s.format, r, t.NEAREST), R = V(e.width, e.height, s.internalFormat, s.format, r, t.NEAREST);
    }
    function w(e, i, r, o, n, s) {
        t.activeTexture(t.TEXTURE0);
        let u = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, u), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, r, e, i, 0, o, n, null);
        let l = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, l), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, u, 0), t.viewport(0, 0, e, i), t.clear(t.COLOR_BUFFER_BIT);
        let m1 = 1 / e, _ = 1 / i;
        return {
            texture: u,
            fbo: l,
            width: e,
            height: i,
            texelSizeX: m1,
            texelSizeY: _,
            attach (ue) {
                return t.activeTexture(t.TEXTURE0 + ue), t.bindTexture(t.TEXTURE_2D, u), ue;
            }
        };
    }
    function V(e, i, r, o, n, s) {
        let u = w(e, i, r, o, n, s), l = w(e, i, r, o, n, s);
        return {
            width: e,
            height: i,
            texelSizeX: u.texelSizeX,
            texelSizeY: u.texelSizeY,
            get read () {
                return u;
            },
            set read (m){
                u = m;
            },
            get write () {
                return l;
            },
            set write (m){
                l = m;
            },
            swap () {
                let m1 = u;
                u = l, l = m1;
            }
        };
    }
    function Fe(e, i, r, o, n, s, u) {
        let l = w(i, r, o, n, s, u);
        return j.bind(), t.uniform1i(j.uniforms.uTexture, e.attach(0)), d(l), l;
    }
    function J(e, i, r, o, n, s, u) {
        return e.width == i && e.height == r || (e.read = Fe(e.read, i, r, o, n, s, u), e.write = w(i, r, o, n, s, u), e.width = i, e.height = r, e.texelSizeX = 1 / i, e.texelSizeY = 1 / r), e;
    }
    function we() {
        let e = [];
        G.setKeywords(e);
    }
    we(), Y();
    let Q = Date.now(), b = 0, B;
    Z();
    function Z() {
        const e = Le();
        $() && Y(), Pe(e), Ue(), f.PAUSED || be(e), Be(null), B = requestAnimationFrame(Z);
    }
    function Le() {
        let e = Date.now(), i = (e - Q) / 1e3;
        return i = Math.min(i, 0.016666), Q = e, i;
    }
    function $() {
        let e = F(a.clientWidth), i = F(a.clientHeight);
        return a.width != e || a.height != i ? (a.width = e, a.height = i, !0) : !1;
    }
    function Pe(e) {
        f.COLORFUL && (b += e * f.COLOR_UPDATE_SPEED, b >= 1 && (b = Ge(b, 0, 1), x.forEach((i)=>{
            i.color = oe();
        })));
    }
    function Ue() {
        M.length > 0 && multipleSplats(M.pop()), x.forEach((e)=>{
            e.moved && (e.moved = !1, ee(e));
        });
    }
    function be(e) {
        t.disable(t.BLEND), N.bind(), t.uniform2f(N.uniforms.texelSize, c.texelSizeX, c.texelSizeY), t.uniform1i(N.uniforms.uVelocity, c.read.attach(0)), d(O), X.bind(), t.uniform1i(X.uniforms.uTexture, R.read.attach(0)), t.uniform1f(X.uniforms.value, 0), d(R.write), R.swap(), P.bind(), t.uniform2f(P.uniforms.texelSize, c.texelSizeX, c.texelSizeY), t.uniform1i(P.uniforms.uDivergence, O.attach(0));
        for(let r = 0; r < 20; r++)t.uniform1i(P.uniforms.uPressure, R.read.attach(1)), d(R.write), R.swap();
        U.bind(), t.uniform2f(U.uniforms.texelSize, c.texelSizeX, c.texelSizeY), t.uniform1i(U.uniforms.uPressure, R.read.attach(0)), t.uniform1i(U.uniforms.uVelocity, c.read.attach(1)), d(c.write), c.swap(), h.bind(), t.uniform2f(h.uniforms.texelSize, c.texelSizeX, c.texelSizeY), g.supportLinearFiltering || t.uniform2f(h.uniforms.dyeTexelSize, c.texelSizeX, c.texelSizeY);
        let i = c.read.attach(0);
        t.uniform1i(h.uniforms.uVelocity, i), t.uniform1i(h.uniforms.uSource, i), t.uniform1f(h.uniforms.dt, e), t.uniform1f(h.uniforms.dissipation, f.VELOCITY_DISSIPATION), d(c.write), c.swap(), g.supportLinearFiltering || t.uniform2f(h.uniforms.dyeTexelSize, v.texelSizeX, v.texelSizeY), t.uniform1i(h.uniforms.uVelocity, c.read.attach(0)), t.uniform1i(h.uniforms.uSource, v.read.attach(1)), t.uniform1f(h.uniforms.dissipation, f.DENSITY_DISSIPATION), d(v.write), v.swap();
    }
    function Be(e) {
        t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.enable(t.BLEND);
        const i = ne(f.GRADIENT_TOP), r = ne(f.GRADIENT_BOTTOM);
        Ce(e, i, r), Ie(e);
    }
    function Ce(e, i, r) {
        z.bind(), t.uniform4f(z.uniforms.topColor, i.r, i.g, i.b, 1), t.uniform4f(z.uniforms.bottomColor, r.r, r.g, r.b, 1), d(e);
    }
    function Ie(e) {
        t.drawingBufferWidth, t.drawingBufferHeight, G.bind(), t.uniform1i(G.uniforms.uTexture, v.read.attach(0)), d(e);
    }
    function ee(e) {
        const i = Math.hypot(e.velocityX, e.velocityY), r = Math.min(i * 1e-4, 1);
        let o = e.deltaX * f.SPLAT_FORCE * (1 + r), n = e.deltaY * f.SPLAT_FORCE * (1 + r);
        const s = 1 + r * 0.5, u = Oe(f.SPLAT_RADIUS / 100) * s;
        Me(e.texcoordX, e.texcoordY, o, n, e.color, u);
    }
    function Me(e, i, r, o, n, s) {
        D.bind(), t.uniform1i(D.uniforms.uTarget, c.read.attach(0)), t.uniform1f(D.uniforms.aspectRatio, a.width / a.height), t.uniform2f(D.uniforms.point, e, i), t.uniform3f(D.uniforms.color, r, o, 0), t.uniform1f(D.uniforms.radius, s), d(c.write), c.swap(), t.uniform1i(D.uniforms.uTarget, v.read.attach(0)), t.uniform3f(D.uniforms.color, n.r, n.g, n.b), d(v.write), v.swap();
    }
    function Oe(e) {
        let i = a.width / a.height;
        return i > 1 && (e *= i), e;
    }
    function C(e) {
        const i = a.getBoundingClientRect(), r = F(e.clientX - i.left), o = F(e.clientY - i.top), n = x[0];
        e.type === "mousedown" ? H(n, -1, r, o) : e.type === "mousemove" ? (n.down || H(n, -1, r, o), ie(n, r, o)) : (e.type === "mouseup" || e.type === "mouseout") && re(n);
    }
    function I(e) {
        e.preventDefault();
        const i = a.getBoundingClientRect(), r = e.targetTouches;
        for(; r.length >= x.length;)x.push(new K());
        for(let o = 0; o < r.length; o++){
            const n = F(r[o].clientX - i.left), s = F(r[o].clientY - i.top);
            if (e.type === "touchstart") H(x[o + 1], r[o].identifier, n, s);
            else if (e.type === "touchmove") {
                const u = x[o + 1];
                if (!u.down) continue;
                ie(u, n, s);
            }
        }
        if (e.type === "touchend") {
            const o = e.changedTouches;
            for(let n = 0; n < o.length; n++){
                const s = x.find((u)=>u.id == o[n].identifier);
                s != null && re(s);
            }
        }
    }
    function Xe() {
        const e = document.getElementById("hero-text-container");
        e && ([
            "mousedown",
            "mousemove",
            "mouseup",
            "mouseout"
        ].forEach((i)=>{
            a.addEventListener(i, C), e.addEventListener(i, C);
        }), [
            "touchstart",
            "touchmove",
            "touchend"
        ].forEach((i)=>{
            a.addEventListener(i, I, {
                passive: !1
            }), e.addEventListener(i, I, {
                passive: !1
            });
        }), window.addEventListener("keydown", te));
    }
    function te(e) {
        e.code === "KeyP" && (f.PAUSED = !f.PAUSED), e.key === " " && M.push(parseInt(Math.random() * 20) + 5);
    }
    Xe(), a.removeEventListener("mousedown", ()=>{}), a.removeEventListener("mousemove", ()=>{}), a.removeEventListener("touchstart", ()=>{}), a.removeEventListener("touchmove", ()=>{}), window.removeEventListener("mouseout", ()=>{}), window.removeEventListener("touchend", ()=>{});
    function H(e, i, r, o) {
        e.id = i, e.down = !0, e.moved = !1, e.texcoordX = r / a.width, e.texcoordY = 1 - o / a.height, e.prevTexcoordX = e.texcoordX, e.prevTexcoordY = e.texcoordY, e.deltaX = 0, e.deltaY = 0, e.color = oe(), e.velocityX = 0, e.velocityY = 0, e.lastTimestamp = performance.now(), e.points = [], W(e, r, o, e.lastTimestamp);
    }
    function ie(e, i, r) {
        const o = performance.now();
        fe(e, i, r).forEach((s)=>{
            W(e, s.x, s.y, o);
            const u = ce(e.points, o);
            e.velocityX += (u.vx - e.velocityX) * A.velocitySmoothing, e.velocityY += (u.vy - e.velocityY) * A.velocitySmoothing, e.prevTexcoordX = e.texcoordX, e.prevTexcoordY = e.texcoordY, e.texcoordX = s.x / a.width, e.texcoordY = 1 - s.y / a.height;
            const l = Math.min(Math.hypot(e.velocityX, e.velocityY) * 1e-4, 1);
            e.deltaX = ze(e.texcoordX - e.prevTexcoordX) * (1 + l), e.deltaY = Ne(e.texcoordY - e.prevTexcoordY) * (1 + l), (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) && (e.moved = !0, ee(e));
        }), e.lastTimestamp = o;
    }
    function re(e) {
        e.down = !1, e.velocityX = 0, e.velocityY = 0, e.points = [];
    }
    function ze(e) {
        let i = a.width / a.height;
        return i < 1 && (e *= i), e;
    }
    function Ne(e) {
        let i = a.width / a.height;
        return i > 1 && (e /= i), e;
    }
    function oe() {
        return {
            r: Math.min(179 / 255 * 0.05),
            g: Math.min(0 / 255 * 0.05),
            b: Math.min(16 / 255 * 0.05)
        };
    }
    function ne(e) {
        return {
            r: e.r / 255,
            g: e.g / 255,
            b: e.b / 255
        };
    }
    function Ge(e, i, r) {
        let o = r - i;
        return (e - i) % o + i;
    }
    function ae(e) {
        let i = t.drawingBufferWidth / t.drawingBufferHeight;
        i < 1 && (i = 1 / i);
        let r = Math.round(e), o = Math.round(e * i);
        return t.drawingBufferWidth > t.drawingBufferHeight ? {
            width: o,
            height: r
        } : {
            width: r,
            height: o
        };
    }
    function F(e) {
        let i = window.devicePixelRatio || 1;
        return Math.floor(e * i);
    }
    function Ye(e) {
        if (e.length == 0) return 0;
        let i = 0;
        for(let r = 0; r < e.length; r++)i = (i << 5) - i + e.charCodeAt(r), i |= 0;
        return i;
    }
    function Ve() {
        if (!a) return;
        a.dataset.fluidInitialized = "false";
        const e = document.getElementById("hero-text-container");
        B && (cancelAnimationFrame(B), B = null), [
            "mousedown",
            "mousemove",
            "mouseup",
            "mouseout"
        ].forEach((i)=>{
            a.removeEventListener(i, C), e && e.removeEventListener(i, C);
        }), [
            "touchstart",
            "touchmove",
            "touchend"
        ].forEach((i)=>{
            a.removeEventListener(i, I), e && e.removeEventListener(i, I);
        }), window.removeEventListener("keydown", te);
        try {
            if (a.isConnected) {
                const i = {
                    alpha: !0,
                    depth: !1,
                    stencil: !1,
                    antialias: !1,
                    preserveDrawingBuffer: !1
                }, r = a.getContext("webgl2", i) || a.getContext("webgl", i);
                if (r && typeof r.getExtension == "function") {
                    const o = r.getExtension("WEBGL_lose_context");
                    o && o.loseContext();
                }
            }
        } catch (i) {
            console.log("Error cleaning up WebGL context:", i);
        }
    }
    return Ve;
}
}}),

};

//# sourceMappingURL=src_animations_fluid_67b31ad9.js.map