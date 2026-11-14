import { useEffect, useRef } from 'react'
import styles from './hero.module.css'

/*
  Hero WebGL background (Hero Background="WebGL"), ported from the v2 site's fluid stage: glossy "tube" ribbons
  (a domain-warped height field, lit with a key light and a specular highlight) in brand red, purple, blue and
  red-100 on the surface colour, kept dark on the left behind the text. The ribbons lean towards the pointer
  (eased) and drift with the scroll position through the hero.
  - Desktop only (a fine pointer and at least 1024 wide); phones and tablets keep the still image
  - prefers-reduced-motion: one still frame of the ribbons, no animation
  - no WebGL: the still image stays; the canvas fades in after its first frame, so there is no flash
  - animates only while on screen and the tab is visible; a slow GPU drops the internal resolution (0.75 → 0.3)
  Colours: .gl --gl-1…--gl-5 in hero.module.css (Figma tokens), read once and on theme changes.
*/

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`

const FRAG = `precision highp float;
uniform vec2 R;uniform float T;uniform vec2 M;uniform float S;
uniform vec3 c0;uniform vec3 c1;uniform vec3 c2;uniform vec3 c3;uniform vec3 c4;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){return .6*n(p)+.3*n(p*2.03+7.1)+.1*n(p*4.01+3.3);}
vec2 warp(vec2 p,float t){return p+.55*vec2(fb(p*.8+vec2(t,-t*.6)),fb(p*.8+vec2(-t*.5,t*.7)+4.3))-.27;}
float H(vec2 p,float t){vec2 q=warp(p,t);return q.y*4.6+1.3*sin(q.x*1.3+t*1.7)+.5*sin(q.x*2.7-t*1.2);}
void main(){
 vec2 uv=gl_FragCoord.xy/R;vec2 p=(gl_FragCoord.xy-.5*R)/R.y;
 vec2 m=(M-.5)*vec2(R.x/R.y,1.);
 p+=.12*(m-p)*exp(-3.*length(p-m));
 float t=T*.07+S*.6;
 p=mat2(.87,-.5,.5,.87)*p;
 float s=H(p,t);
 float e=1.5/R.y;float sx=H(p+vec2(e,0),t)-s;float sy=H(p+vec2(0,e),t)-s;
 float ph=s*3.14159;float r=sin(ph);
 float tube=pow(smoothstep(-.25,1.,r),.6);float rim=smoothstep(.0,.25,r)*(1.-smoothstep(.25,.6,r));
 vec2 g=vec2(sx,sy)/e;vec3 N=normalize(vec3(-g*cos(ph)*.45,1.));
 float k=.5+.5*sin(s*.8+p.x*1.3+t*1.3);
 vec3 col=mix(c3,c2,smoothstep(.0,.4,k));col=mix(col,c1,smoothstep(.45,.85,k));col=mix(col,c4,smoothstep(.9,1.,k)*.5);
 vec3 L=normalize(vec3(-.35,.55,.75));float dif=.35+.65*max(dot(N,L),0.);
 float spec=pow(max(dot(reflect(-L,N),vec3(0,0,1)),0.),36.);
 float env=smoothstep(-.45,.45,(uv.x-.42)*1.7+.25*(uv.y-.5));
 vec3 c=mix(c0,col*dif,tube*env*.95);
 c+=spec*tube*env*mix(c4,vec3(1.),.5)*1.1;c+=rim*env*col*.25;
 c+=(h(gl_FragCoord.xy)-.5)/255.;
 gl_FragColor=vec4(c,1.);
}`

function rgb(el: HTMLElement, name: string): [number, number, number] {
    const probe = document.createElement('canvas').getContext('2d')
    const value = getComputedStyle(el).getPropertyValue(name).trim()
    if (!probe || !value) return [0, 0, 0]
    probe.fillStyle = value
    probe.fillRect(0, 0, 1, 1)
    const d = probe.getImageData(0, 0, 1, 1).data
    return [d[0] / 255, d[1] / 255, d[2] / 255]
}

export function HeroWebGL() {
    const ref = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return
        // Desktop only, as on the v2 site: phones and tablets keep the still image
        if (
            window.matchMedia(
                '(hover: none) and (pointer: coarse), (max-width: 1023px)'
            ).matches
        )
            return
        const still = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        const gl = canvas.getContext('webgl', {
            antialias: false,
            premultipliedAlpha: false,
            powerPreference: 'low-power',
        })
        if (!gl) return
        const shader = (type: number, src: string) => {
            const sh = gl.createShader(type)
            if (!sh) return null
            gl.shaderSource(sh, src)
            gl.compileShader(sh)
            return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null
        }
        const vs = shader(gl.VERTEX_SHADER, VERT)
        const fs = shader(gl.FRAGMENT_SHADER, FRAG)
        const prog = gl.createProgram()
        if (!vs || !fs || !prog) return
        gl.attachShader(prog, vs)
        gl.attachShader(prog, fs)
        gl.linkProgram(prog)
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
        gl.useProgram(prog)
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            gl.STATIC_DRAW
        )
        const loc = gl.getAttribLocation(prog, 'p')
        gl.enableVertexAttribArray(loc)
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
        const u = (n: string) => gl.getUniformLocation(prog, n)
        const U = { R: u('R'), T: u('T'), M: u('M'), S: u('S') }
        const colours = () =>
            ['c0', 'c1', 'c2', 'c3', 'c4'].forEach((c, i) =>
                gl.uniform3fv(u(c), rgb(canvas, `--gl-${i + 1}`))
            )
        colours()

        let scale = 0.75
        const size = () => {
            const d = Math.min(window.devicePixelRatio || 1, 2) * scale
            canvas.width = Math.max(2, Math.round(canvas.clientWidth * d))
            canvas.height = Math.max(2, Math.round(canvas.clientHeight * d))
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(U.R, canvas.width, canvas.height)
        }
        size()

        // Pointer (0–1, y up), eased towards the target each frame; scroll progress through the hero
        let mx = 0.72,
            my = 0.55,
            tx = mx,
            ty = my,
            sc = 0
        const draw = (t: number) => {
            mx += (tx - mx) * 0.05
            my += (ty - my) * 0.05
            gl.uniform1f(U.T, t)
            gl.uniform2f(U.M, mx, my)
            gl.uniform1f(U.S, sc)
            gl.drawArrays(gl.TRIANGLES, 0, 3)
            if (!canvas.dataset.ready) canvas.dataset.ready = ''
        }
        const scroll = () => {
            const r = canvas.getBoundingClientRect()
            sc = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)))
        }
        scroll()
        if (still) {
            draw(12)
            const redraw = () => {
                size()
                draw(12)
            }
            const ro = new ResizeObserver(redraw)
            ro.observe(canvas)
            return () => {
                ro.disconnect()
                gl.getExtension('WEBGL_lose_context')?.loseContext()
            }
        }

        let raf = 0
        let visible = true
        const t0 = performance.now()
        const loop = (now: number) => {
            const started = performance.now()
            draw((now - t0) / 1000 + 8)
            // A frame over 18ms: draw fewer pixels (down to 30%)
            if (performance.now() - started > 18 && scale > 0.3) {
                scale = Math.max(0.3, scale * 0.72)
                size()
            }
            raf = requestAnimationFrame(loop)
        }
        const run = () => {
            cancelAnimationFrame(raf)
            if (visible && !document.hidden) raf = requestAnimationFrame(loop)
        }
        const pointer = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect()
            if (!r.width || !r.height) return
            tx = (e.clientX - r.left) / r.width
            ty = 1 - (e.clientY - r.top) / r.height
        }
        const ro = new ResizeObserver(size)
        ro.observe(canvas)
        const io = new IntersectionObserver(([e]) => {
            visible = e.isIntersecting
            run()
        })
        io.observe(canvas)
        const theme = new MutationObserver(colours)
        theme.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        })
        window.addEventListener('pointermove', pointer, { passive: true })
        window.addEventListener('scroll', scroll, { passive: true })
        document.addEventListener('visibilitychange', run)
        run()
        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
            io.disconnect()
            theme.disconnect()
            window.removeEventListener('pointermove', pointer)
            window.removeEventListener('scroll', scroll)
            document.removeEventListener('visibilitychange', run)
            gl.getExtension('WEBGL_lose_context')?.loseContext()
        }
    }, [])
    return <canvas ref={ref} className={styles.gl} aria-hidden="true" />
}
