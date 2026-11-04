import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
      <Counter> </Counter>
      <GreetingForm> </GreetingForm>
      <CounterWithLog> </CounterWithLog>
      <TimerToggle> </TimerToggle>
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