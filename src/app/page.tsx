"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb, Target, Users, BarChart, Settings, Twitter, Linkedin } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Pew Nguyen"},
  {"id":"about-image","url":"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation."},
  {"id":"features-image-1","url":"https://images.pexels.com/photos/34362190/pexels-photo-34362190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A well-organized craft table displaying vibrant art supplies like beads and brushes, perfect for creative projects."},
  {"id":"features-image-2","url":"https://images.pexels.com/photos/34355539/pexels-photo-34355539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern technology - Photo by Chris F"},
  {"id":"features-image-3","url":"https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man in a blazer gives a presentation to a captivated audience in a lecture setting."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"professional female portrait - Photo by Roman Biernacki"},
  {"id":"team-member-2","url":"https://images.pexels.com/photos/34342508/pexels-photo-34342508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up portrait of a well-dressed man in a tuxedo, surrounded by greenery, exuding elegance and sophistication."},
  {"id":"team-member-3","url":"https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman organizing envelopes in a modern mailroom setting."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/8145336/pexels-photo-8145336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy colleagues high-fiving in a meeting, showcasing teamwork and success."},
  {"id":"logo-microsoft","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"logo-google","url":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing."},
  {"id":"logo-amazon","url":"https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of the Amazon shopping app icon on a smartphone screen. Ideal for online shopping and technology themes."},
  {"id":"logo-apple","url":"https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design."},
  {"id":"logo-facebook","url":"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of the Facebook app logo on a digital screen with blurred background."},
  {"id":"logo-tesla","url":"https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Tesla factory with parked cars during sunset, showcasing modern automotive industry vibes."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Services", id: "services" }, { name: "Contact", id: "contact" }, { name: "Privacy", id: "https://example.com/privacy" }]}
          brandName="Webild"
          buttonText="Join Us"
          buttonVariant="shift-hover"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovate Your Business"
            description="Experience the future of technology-driven solutions."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt ?? "modern office workspace"}
            buttons={[{ text: "Get Started", href: "home" }, { text: "Learn More", href: "about" }]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="Who We Are"
            description="Discover our mission, vision, and the team behind our success."
            bulletPoints={[{ title: "Vision", description: "Innovate and lead the industry with pioneering solutions.", icon: Lightbulb }, { title: "Mission", description: "Empower businesses through technology.", icon: Target }]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt ?? "About us"}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[{ title: "Collaboration", description: "Seamless team integration and collaboration.", icon: Users }, { title: "Analytics", description: "Data-driven insights to guide your decisions.", icon: BarChart }, { title: "Customization", description: "Tailor solutions to your specific needs.", icon: Settings }]}
            title="Our Features"
            description="Explore the capabilities that make us stand out."
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            logos={assetMap.filter(a => a.id.startsWith("logo-")).map(a => a.url)}
            title="Trusted by Industry Leaders"
            description="Join the ranks of top companies benefiting from our solutions."
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[{
              id: "1",
              name: "Jessica Lee",
              role: "CEO",
              description: "Guiding the vision and strategic direction of the company.",
              imageSrc: assetMap.find(a => a.id === "team-member-1")?.url ?? "/public/images/placeholder.webp",
              socialLinks: [{ icon: Twitter, url: "https://twitter.com/jessica" }, { icon: Linkedin, url: "https://linkedin.com/in/jessica" }]
            }, {
              id: "2",
              name: "Mark Thompson",
              role: "CTO",
              description: "Leading innovation in technology and product development.",
              imageSrc: assetMap.find(a => a.id === "team-member-2")?.url ?? "/public/images/placeholder.webp",
              socialLinks: [{ icon: Twitter, url: "https://twitter.com/mark" }, { icon: Linkedin, url: "https://linkedin.com/in/mark" }]
            }, {
              id: "3",
              name: "Sophia Martinez",
              role: "CFO",
              description: "Managing finance with expertise and strategic insight.",
              imageSrc: assetMap.find(a => a.id === "team-member-3")?.url ?? "/public/images/placeholder.webp",
              socialLinks: [{ icon: Twitter, url: "https://twitter.com/sophia" }, { icon: Linkedin, url: "https://linkedin.com/in/sophia" }]
            }]}
            title="Meet Our Team"
            description="The creative minds behind our innovation."
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqDouble
            faqs={[{ id: "1", title: "How can I contact support?", content: "You can reach out via our contact form anytime." }, { id: "2", title: "Do you offer long-term contracts?", content: "Yes, we provide flexible service agreements tailored to your needs." }]}
            title="Frequently Asked Questions"
            description="Answers to help you get the most out of our services."
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Join Us"
            title="Stay in the Loop"
            description="Subscribe to our newsletter for updates and exclusive content."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[{ title: "Product", items: [{ label: "Features", href: "features" }, { label: "Services", href: "services" }] }, { title: "Company", items: [{ label: "About", href: "about" }, { label: "Careers", href: "https://example.com/careers" }] }]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
