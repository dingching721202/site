import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseIntro from '@/components/CourseIntro';
import LearningPlans from '@/components/LearningPlans';
import Testing from '@/components/Testing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CourseIntro />
      <LearningPlans />
      <Testing />
      <FAQ />
      <Footer />
    </main>
  );
}