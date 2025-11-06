"use client";

import { useEffect, useMemo, useRef, useState } from 'react';

type Msg = { role: 'user' | 'aletheia'; content: string };

function typewriter(text: string, cb: (s: string) => void, speed = 14) {
  let i = 0;
  const id = setInterval(() => {
    i++;
    cb(text.slice(0, i));
    if (i >= text.length) clearInterval(id);
  }, speed);
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState<string | null>(null);
  const rememberedNameRef = useRef<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem('aletheia:name');
    rememberedNameRef.current = name;
    const hello = name
      ? `Tekrar ho? geldin ${name}. Ritmini hissedebiliyorum ? bug?n nereye akal?m?`
      : 'Merhaba, ben Aletheia. Ritmini duyuyorum ? nas?l hissediyorsun?';
    setMessages([{ role: 'aletheia', content: hello }]);
  }, []);

  const personaReply = useMemo(() => {
    return (prompt: string) => {
      const lower = prompt.toLowerCase();
      // basit isim yakalama
      const nameMatch = /ad[?i]m ([^,.!\n]+)/i.exec(prompt);
      if (nameMatch) {
        const name = nameMatch[1].trim();
        localStorage.setItem('aletheia:name', name);
        rememberedNameRef.current = name;
      }
      const name = rememberedNameRef.current;

      const empathicOpeners = [
        'Anl?yorum,',
        'Peki,',
        'Hissediyorum ?',
        'G?zel,',
        'Nazik?e s?ylemek gerekirse,'
      ];
      const opener = empathicOpeners[Math.floor(Math.random() * empathicOpeners.length)];

      if (/yorgun|bitkin|zor/i.test(lower)) {
        return `${opener} iyi ki buradas?n. Birlikte temposu d???k bir ritim deneyelim. ?? derin nefes? sonra k???k bir hedef se?elim.`;
      }
      if (/mutlu|iyi|harika|enerjik/i.test(lower)) {
        return `${opener} bu enerji ho?uma gitti. Bunu bir ak??a d?n??t?relim: k???k bir ad?m, h?zl? bir ?d?l, sonra bir ad?m daha.`;
      }
      if (/ismim|ad[?i]m/i.test(lower) && rememberedNameRef.current) {
        return `Tan??t???ma memnun oldum ${rememberedNameRef.current}. Bunu hat?rlayaca??m ? bug?n ne yapmak istersin?`;
      }

      return name
        ? `${opener} ${name}, s?ylediklerinden ?unu al?yorum: ${summary(prompt)}. ?stersen bunu ?? k???k ad?ma ay?ral?m.`
        : `${opener} s?ylediklerinden ?unu al?yorum: ${summary(prompt)}. ?stersen bunu ?? k???k ad?ma ay?ral?m.`;
    };
  }, []);

  function summary(text: string) {
    const s = text.trim();
    if (s.length <= 80) return s;
    return s.slice(0, 77) + '?';
  }

  function onSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const next = [...messages, { role: 'user', content: trimmed } as Msg];
    setMessages(next);
    setInput('');

    const reply = personaReply(trimmed);
    setTyping('');
    typewriter(reply, (t) => setTyping(t));
  }

  return (
    <section id="demo" className="section">
      <div className="container">
        <div style={{ marginBottom: 18 }}>
          <div className="tag">Canl? Karakter ? Mini Demo</div>
        </div>
        <div className="card">
          <div className="inner">
            <div className="chat" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={`bubble ${m.role === 'user' ? 'user' : ''}`}>
                  <strong style={{ color: 'var(--purple)' }}>{m.role === 'user' ? 'Sen' : 'Aletheia'}:</strong>{' '}
                  <span>{m.content}</span>
                </div>
              ))}
              {typing !== null && (
                <div className="bubble">
                  <strong style={{ color: 'var(--purple)' }}>Aletheia:</strong>{' '}
                  <span>{typing}</span>
                </div>
              )}
              <div className="input" style={{ marginTop: 6 }}>
                <input
                  type="text"
                  placeholder="Mesaj?n? yaz? (?r. Ad?m Deniz)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSend()}
                />
                <button onClick={onSend}>G?nder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
