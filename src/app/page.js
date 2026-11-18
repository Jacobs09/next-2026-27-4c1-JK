import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
       <h2>Krok 6: Context (ContextCounterDisplay + ContextCounterButton)</h2>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Poniżej dwa <strong>osobne, niepowiązane propsami komponenty</strong> (dwa osobne pliki).
        Łączy je wyłącznie wspólny <code>CounterContext</code> z <code>layout.js</code>.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ border: '2px solid #2563eb', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
            Plik: ContextCounterDisplay.js
          </p>
          
        </div>
        <div style={{ border: '2px solid #16a34a', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#16a34a', margin: 0 }}>
            Plik: ContextCounterButton.js
          </p>
          
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#777' }}>
        Kliknij przycisk w zielonej ramce (ContextCounterButton) — wartość w niebieskiej ramce
        (ContextCounterDisplay) zmieni się automatycznie, mimo że to dwa różne komponenty.
      </p>
      <Counter> </Counter>
      <GreetingForm> </GreetingForm>
      <CounterWithLog> </CounterWithLog>
    
    </main>
  );
}
import Card from '@/components/Card';
import Counter from '@/components/Counter';
import GreetingForm from '@/components/GreetingForm';
import CounterWithLog from '@/components/CounterWithLog';
export function AboutPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>O nas</h1>
      <Card title="Nasza misja">
        <p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
      </Card>
    </main>
  );
}
