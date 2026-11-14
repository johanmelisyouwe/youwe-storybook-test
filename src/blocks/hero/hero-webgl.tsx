import { useEffect, useRef } from 'react'
import styles from './hero.module.css'

/*
  Hero WebGL background (Hero Background="WebGL"): slow silk ribbons in the brand colours on the dark surface,
  drawn by one fragment shader (domain-warped noise). The still image stays underneath as the fallback:
  - no WebGL, or prefers-reduced-motion: the canvas is never shown, the image is the background
  - the canvas fades in after its first frame, so there is no flash
  - it only animates while the hero is on screen and the tab is visible; pixel ratio capped at 1.5
  Colours come from CSS (.gl --gl-1…--gl-4, Figma tokens), read once and on theme changes.
*/

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`

const FRAG = `precision mediump float;
uniform vec2 r;uniform float t;uniform vec3 c0;uniform vec3 c1;uniform vec3 c2;uniform vec3 c3;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int k=0;k<5;k++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
  float s=t*.045;
  vec2 q=vec2(fbm(p*1.4+s),fbm(p*1.4-s+4.1));
  vec2 w=vec2(fbm(p*1.1+2.2*q+vec2(1.7,9.2)+s*.8),fbm(p*1.1+2.2*q+vec2(8.3,2.8)-s*.6));
  float f=fbm(p*1.2+2.6*w);
  float band=smoothstep(.18,0.,abs(f-.55-.12*sin(p.x*1.6+t*.12)));
  float sheen=pow(band,3.);
  vec3 col=mix(c0,c1,smoothstep(.25,.85,f));
  col=mix(col,c2,smoothstep(.45,1.,w.x)*.7);
  col=mix(col,c3,sheen*.55);
  float vig=smoothstep(1.25,.25,length(p*vec2(.8,1.)));
  col=mix(c0,col,(.35+.65*band)*vig);
  col=mix(col,c0,smoothstep(.45,0.,uv.y)*.85);
  gl_FragColor=vec4(col,1.);
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
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return
        const gl = canvas.getContext('webgl', {
            antialias: false,
            alpha: false,
            powerPreference: 'low-power',
        })
        if (!gl) return
        const shader = (type: number, src: string) => {
            const s = gl.createShader(type)
            if (!s) return null
            gl.shaderSource(s, src)
            gl.compileShader(s)
            return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
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
        const buf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buf)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            gl.STATIC_DRAW
        )
        const loc = gl.getAttribLocation(prog, 'p')
        gl.enableVertexAttribArray(loc)
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
        const u = (n: string) => gl.getUniformLocation(prog, n)
        const uR = u('r'),
            uT = u('t')
        const colours = () =>
            (['c0', 'c1', 'c2', 'c3'] as const).forEach((c, i) =>
                gl.uniform3fv(u(c), rgb(canvas, `--gl-${i + 1}`))
            )
        colours()

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
            const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
            const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w
                canvas.height = h
                gl.viewport(0, 0, w, h)
            }
            gl.uniform2f(uR, w, h)
        }
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        let raf = 0
        let visible = true
        const start = performance.now() - 20000 // start mid-flow, not from a flat field
        const frame = (now: number) => {
            gl.uniform1f(uT, (now - start) / 1000)
            gl.drawArrays(gl.TRIANGLES, 0, 3)
            if (!canvas.dataset.ready) canvas.dataset.ready = ''
            raf = requestAnimationFrame(frame)
        }
        const run = () => {
            cancelAnimationFrame(raf)
            if (visible && !document.hidden) raf = requestAnimationFrame(frame)
        }
        const io = new IntersectionObserver(([e]) => {
            visible = e.isIntersecting
            run()
        })
        io.observe(canvas)
        document.addEventListener('visibilitychange', run)
        const theme = new MutationObserver(colours)
        theme.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        })
        run()
        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
            io.disconnect()
            theme.disconnect()
            document.removeEventListener('visibilitychange', run)
            gl.getExtension('WEBGL_lose_context')?.loseContext()
        }
    }, [])
    return <canvas ref={ref} className={styles.gl} aria-hidden="true" />
}
