import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4'

export default function Hero({ onGo }) {
  return (
    <section className="chapter hero" id="hero">
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          src={VIDEO}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      <div className="hero-footer">
        <div className="hero-left">
          <Reveal variant="up" delay={100}>
            <p className="subtitle">
              <span className="dot" aria-hidden="true" />
              Sistemas de robótica e automação · 2026
            </p>
          </Reveal>

          <Reveal variant="up" delay={250} as="h1" className="hero-heading">
            Um sistema, zero
            <br />
            limites. Mundial.
          </Reveal>

          <Reveal variant="up" delay={450} className="hero-actions">
            <Button onClick={() => onGo('linhas')}>Ver sistemas</Button>
            <Button variant="ghost" onClick={() => onGo('manifesto')}>
              Como funciona
            </Button>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={450} className="hero-tags">
          <span className="pill">Neuromorphic</span>
          <span className="pill">AGI</span>
          <span className="pill">Cybernetics</span>
        </Reveal>
      </div>
    </section>
  )
}
