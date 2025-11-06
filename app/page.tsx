import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import AletheiaSection from '@/components/AletheiaSection';
import ApeironSection from '@/components/ApeironSection';
import Features from '@/components/Features';
import ChatDemo from '@/components/ChatDemo';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <AnimatedBackground />
      <Hero />
      <AletheiaSection />
      <ApeironSection />
      <Features />
      <ChatDemo />
      <Footer />
    </main>
  );
}
