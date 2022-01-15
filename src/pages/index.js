import dynamic from 'next/dynamic';
const Seo = dynamic(import('components/seo'));
const Layout = dynamic(import('components/layout'));
const Banner = dynamic(import('sections/banner'));
const WhyChoose = dynamic(import('sections/why-choose'));
const SalesInvestment = dynamic(import('sections/sales-investment'));
const RoadMap = dynamic(import('sections/roadmap'));
const CountDownBlock = dynamic(import('sections/countdown'));
const WorldwideUsers = dynamic(import('sections/worldwide-user'));
const OurWallet = dynamic(import('sections/our-wallet'));
const CallToAction = dynamic(import('sections/call-to-action'));
const TeamSection = dynamic(import('sections/team-section'));
const EmblaCarousel = dynamic(import('components/EmblaCarousel'));
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';

const SLIDE_COUNT = 16;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Seo
            title="Climate Guardians Landing"
            description="The first play and earn Game with real world impact on climate change."
          />
          <Banner />
          <WhyChoose />
          <OurWallet />
          {/* <SalesInvestment /> */}
          <RoadMap />
          <CountDownBlock />
          <EmblaCarousel slides={slides} />
          <TeamSection />
          {/* <WorldwideUsers />  */}
          {/* <CallToAction /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
