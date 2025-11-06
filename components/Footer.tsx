export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ color: 'var(--muted)' }}>
          ? {new Date().getFullYear()} Aletheia ? Apeiron mimarisiyle
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a className="button secondary" href="#">Hakk?nda</a>
          <a className="button secondary" href="#apeiron">Apeiron</a>
        </div>
      </div>
    </footer>
  );
}
