export default function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="site-footer-credit"
        href="https://www.instagram.com/tech.cidev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Desenvolvido por Cidev, abrir Instagram"
      >
        <span>Desenvolvido por</span>
        <img
          className="cidev-logo"
          src="/cidev.png"
          alt=""
          width="1316"
          height="380"
        />
      </a>
    </footer>
  )
}
