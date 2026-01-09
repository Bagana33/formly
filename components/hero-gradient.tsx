"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

interface HeroGradientProps {
  className?: string
}

// Lightweight animated shader background for the hero
export function HeroGradient({ className }: HeroGradientProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || window.innerWidth
    const height = mount.clientHeight || 520

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    renderer.domElement.style.pointerEvents = "none"

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const uniforms = {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#0f2741") },
      uColor2: { value: new THREE.Color("#2bb673") },
      uColor3: { value: new THREE.Color("#ff8a00") },
      uNoise: { value: 0.03 },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uNoise;

        float hash(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          float n = mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
          return 0.5 + 0.5 * n;
        }

        void main() {
          vec2 uv = vUv;
          uv += 0.015 * sin(uv.yx * 7.0 + uTime * 0.3);
          uv += 0.01 * sin(uv.yx * 12.0 - uTime * 0.25);

          float n = noise(uv * 8.0 + uTime * 0.1);
          vec3 grad = mix(uColor1, uColor2, smoothstep(0.0, 1.0, uv.y + n * 0.08));
          grad = mix(grad, uColor3, 0.25 + 0.18 * sin(uTime * 0.5 + uv.x * 3.14));
          grad += uNoise * (n - 0.5);

          gl_FragColor = vec4(grad, 0.82);
        }
      `,
      transparent: true,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    mount.appendChild(renderer.domElement)
    rendererRef.current = renderer
    materialRef.current = material

    const tick = () => {
      if (!rendererRef.current) return
      uniforms.uTime.value += 0.02
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth
      const h = mount.clientHeight || height
      renderer.setSize(w, h)
    }
    const observer = new ResizeObserver(handleResize)
    observer.observe(mount)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={cn("absolute inset-0 opacity-90", className)} />
}
