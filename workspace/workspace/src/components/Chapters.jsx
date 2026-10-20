import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

function Kicker({ children }) {
  return (
    <p className="chapter-kicker">
      <span className="dot" aria-hidden="true" />
      {children}
    </p>
  )
}

export function Manifesto() {
  return (
    <section className="chapter" id="manifesto">
      <div className="chapter-inner">
        <Reveal variant="fade">
          <Kicker>Manifesto</Kicker>
        </Reveal>
        <Reveal variant="blur" as="h2" className="chapter-heading">
          Máquinas que pensam com o corpo.
        </Reveal>
        <Reveal delay={80} as="p" className="chapter-copy">
          A NeuralAutom projeta robótica e automação como um único sistema:
          hardware preciso, inteligência cognitiva e adaptação em tempo real. Do
          chão de fábrica ao laboratório, a mesma disciplina.
        </Reveal>
      </div>
    </section>
  )
}

const LINHAS = [
  {
    tag: '01',
    title: 'Advanced Bionics',
    copy: 'Atuadores, próteses e interfaces homem–máquina com controle neuromórfico.',
  },
  {
    tag: '02',
    title: 'Cognitive AI',
    copy: 'Percepção, planejamento e decisão embarcada — sem nuvem obrigatória.',
  },
  {
    tag: '03',
    title: 'Adaptive Systems',
    copy: 'Células de automação que recalibram o fluxo quando o mundo muda.',
  },
]

export function Linhas() {
  return (
    <section className="chapter" id="linhas">
      <div className="chapter-inner">
        <Reveal variant="fade">
          <Kicker>Linhas</Kicker>
        </Reveal>
        <Reveal variant="blur" as="h2" className="chapter-heading">
          Três sistemas. Uma identidade.
        </Reveal>
        <div className="linhas-grid">
          {LINHAS.map((item, i) => (
            <Reveal key={item.tag} delay={Math.min(i * 80, 400)}>
              <article className="linha-card">
                <span className="pill">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Flagship({ onGo }) {
  return (
    <section className="chapter" id="flagship">
      <div className="chapter-inner">
        <Reveal variant="fade">
          <Kicker>Flagship</Kicker>
        </Reveal>
        <Reveal variant="blur" as="p" className="flagship-name">
          NA Atlas
        </Reveal>
        <Reveal delay={80} as="p" className="chapter-copy">
          Plataforma humanaide para células mistas: montagem, inspeção e
          logística colaborativa. Um corpo, vários papéis, atualização por
          software.
        </Reveal>
        <Reveal delay={160} className="flagship-meta">
          <span className="pill">6 DoF</span>
          <span className="pill">On-device</span>
          <span className="pill">ISO 10218</span>
        </Reveal>
        <Reveal delay={240} className="chapter-actions">
          <Button onClick={() => onGo('contato')}>Ver especificações</Button>
        </Reveal>
      </div>
    </section>
  )
}

export function Prova() {
  return (
    <section className="chapter" id="prova">
      <div className="chapter-inner">
        <Reveal variant="fade">
          <Kicker>Prova</Kicker>
        </Reveal>
        <Reveal variant="blur" as="p" className="prova-metric">
          12 células em operação contínua.
        </Reveal>
        <Reveal delay={80} as="p" className="chapter-copy">
          Programas piloto em manufatura, logística e pesquisa. Sem nomes
          inventados — só o recorte do que o sistema já sustenta.
        </Reveal>
        <Reveal delay={160} className="prova-pills">
          <span className="pill">Manufatura</span>
          <span className="pill">Logística</span>
          <span className="pill">Labs</span>
          <span className="pill">Saúde</span>
          <span className="pill">Energia</span>
        </Reveal>
      </div>
    </section>
  )
}

export function Contato({ onGo }) {
  return (
    <section className="chapter" id="contato">
      <div className="chapter-inner">
        <Reveal variant="fade">
          <Kicker>Contato</Kicker>
        </Reveal>
        <Reveal variant="blur" as="h2" className="chapter-heading">
          Fale com a equipe de sistemas.
        </Reveal>
        <Reveal delay={80} as="p" className="chapter-copy">
          Projeto conceitual. Orçamento, demo e especificações sob consulta.
        </Reveal>
        <Reveal delay={160} className="chapter-actions">
          <Button href="mailto:sistemas@neuralautom.lab">
            Falar com a equipe
          </Button>
          <Button variant="ghost" onClick={() => onGo('linhas')}>
            Ver sistemas
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
