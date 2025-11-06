export default function Hero() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="tag" style={{ margin: '0 auto 16px' }}>
          <span style={{ width: 8, height: 8, background: 'var(--purple)', borderRadius: 999 }} />
          Aletheia ? Dijital Karakter Deneyimi
        </div>
        <h1 className="display" style={{ fontSize: '64px', margin: '0 0 12px' }}>
          <span className="gradient-text">Aletheia</span> ? ya?ayan bir yapay zeka karakteri
        </h1>
        <p className="lead" style={{ maxWidth: 780, margin: '0 auto 28px' }}>
          Payla??lan an?lar? hat?rlayan, duygusal ritmine uyumlanan ve sizinle birlikte
          evrilen bir varl?k. Arkas?nda Apeiron ara? ekosisteminin ak?ll? mimarisi var.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <a className="button" href="#demo">Demoyu Deneyimle</a>
          <a className="button secondary" href="#apeiron">Apeiron Hakk?nda</a>
        </div>
      </div>
    </section>
  );
}
