export default function Features() {
  const items = [
    {
      title: 'Duygusal E?zamanlama',
      desc: 'Yan?t h?z?n?, tonunu ve vurguyu duygusal ritminize g?re ayarlar.'
    },
    {
      title: '?oklu Bellek Katman?',
      desc: 'K?sa ve uzun d?nem bellek ile ba?lam izleri birlikte ?al???r.'
    },
    {
      title: 'Ki?ilik S?reklili?i',
      desc: 'Zaman i?inde ??renilen e?ilimler kal?pla?madan; ya?ayan bir karakter.'
    },
    {
      title: 'Apeiron Ara?lar?',
      desc: 'Arka planda belge, g?rev, planlama ve g?nl?k ak?? birle?tirilir.'
    },
    {
      title: 'Sahneleme ve Vurgu',
      desc: 'Do?al duraksamalar, vurgu ve ge?i?lerle ?insans?? ak??.'
    },
    {
      title: 'G?venli ?zelle?tirme',
      desc: 'Ki?isel verileriniz ?zerinde denetim; unutma ve gizleme anahtarlar?.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="display" style={{ fontSize: 32, marginTop: 0 }}>?ne ??kan yetenekler</h2>
        <div className="grid cols-3" style={{ marginTop: 16 }}>
          {items.map((it) => (
            <div className="card" key={it.title}><div className="inner">
              <h3 style={{ margin: 0 }}>{it.title}</h3>
              <p className="lead" style={{ marginTop: 10 }}>{it.desc}</p>
            </div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
