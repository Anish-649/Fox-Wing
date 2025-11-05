import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { borderRadius, maxHeight, maxWidth } from "@mui/system";
import TimebasedBg from "../timeBasedBg/TimebasedBg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#e7a11e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  maxWidth: "80vw",
  overflowY: "auto",
  borderRadius: "12px",
};

export default function Frequentlyasked() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const bgColor = TimebasedBg();

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
          border: "none",
          textTransform: "none", // optional (prevents uppercase)
          "&:hover": {
            backgroundColor: "transparent", // remove hover gray
            boxShadow: "none",
            color:"#f0c040" ,
          },
        }}
      >
        FAQs
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, background: bgColor }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "black" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, font: "" }}>
            1. What exactly does Fox Wing Media do? {"  "}
            <br /> Fox Wing Media LLP is a strategic PR, Media, and Brand
            Communication agency founded by Sameer Satyarth. We help founders,
            startups, and brands grow visibility, trust, and sales by blending
            Public Relations, Digital Marketing, and Brand Storytelling into one
            unified system. Our expertise includes:
            <br /> ● PR & Media Coverage in top-tier publications <br />●
            Founder & Brand Story Building
            <br /> ● Social Media & Digital Marketing Strategy
            <br /> ● SEO and Online Reputation Management <br />● Event PR and
            Press Coordination
            <br /> ● Content, Video, and Influencer Marketing
            <br /> 2. Who is Sameer Satyarth? Sameer Satyarth (also known
            professionally as Sameer Anand) is the Founder of Fox Wing Media
            LLP, a digital strategist, storyteller, and entrepreneur. He has
            worked across diverse industries — from PR, media, and technology to
            luxury jewelry and gemstone e-commerce. Sameer specializes in:{" "}
            <br />● Building founder brands that drive business growth <br />●
            Scaling startups from zero visibility to nationwide recognition{" "}
            <br />● Crafting sales-focused storytelling frameworks that convert
            attention into revenue His journey from a small town in Bihar to
            founding multiple ventures including Raidon News, GemRishi, and Fox
            Wing Media reflects his belief — “Your story is your biggest sales
            strategy.” <br /> 3. How is Fox Wing Media different from other PR
            agencies? Unlike traditional agencies that only focus on media
            coverage, we go beyond publicity — we build brand identity, digital
            presence, and sales-driven perception. We connect three pillars:
            <br /> PR (Visibility) – Getting featured in top publications and
            media houses. <br /> Marketing (Engagement) – Building strong social
            and digital presence. <br /> Sales (Conversion) – Turning attention
            into measurable business results. In short — we make brands visible,
            credible, and profitable. <br />
            4. How long does it take to see results from PR and marketing
            campaigns? <br />
            It depends on the goals and platforms.
            <br /> ● Media Features / PR: 7–21 days (depending on publication
            approval) <br />● Brand Awareness Campaigns: 30–45 days for
            noticeable reach <br />● Sales or Conversion Campaigns: 45–90 days
            with consistent strategy We always plan a phased roadmap — quick
            wins in the first month, long-term brand authority over 3–6 months.
            <br />
            5. Do you only work with startups and founders?
            <br /> No. We work with a wide range of clients including:
            <br /> ● Founders and entrepreneurs
            <br /> ● Lifestyle and luxury brands
            <br /> ● Tech startups
            <br /> ● Coaches, consultants & public figures <br />● Jewelry &
            wellness brands Our focus is on people-led brands — where
            storytelling and visibility can directly drive growth.
            <br />
            6. Can PR really help in increasing sales?
            <br /> Absolutely. PR builds trust, and trust builds sales. When
            your story is featured in credible publications like Forbes,
            Business Today, or The Times of India, it creates social proof that
            influences buying decisions. At Fox Wing Media, we integrate PR +
            digital marketing funnels, so visibility turns into leads, and leads
            into conversions. “We don’t just create noise; we create reputation
            that sells.” <br />
            7. What are your core services under marketing and branding? <br />
            We offer a 360° approach to marketing and brand positioning:
            <br /> 1. Brand Building & Strategy <br />● Brand storytelling
            framework
            <br /> ● Founder branding & image design
            <br /> ● Brand voice and visual communication <br />
            2. Digital Marketing
            <br /> ● Meta, Google, and LinkedIn Ads <br />● UGC-based video
            campaigns
            <br /> ● Email & influencer marketing
            <br /> 3. Sales-Focused Communication <br />● Funnel-based content
            planning <br />● Landing page & ad copywriting <br />●
            Conversion-oriented campaigns <br />
            4. SEO & Reputation Management
            <br /> ● Backlinks on high-authority media
            <br /> ● Online reputation repair <br />● Keyword-driven PR articles
            <br /> 8. Do you handle both Hindi and English media? <br />
            Yes. We have strong media partnerships in both Hindi and English
            across India. This includes top outlets like Aaj Tak, Zee News,
            Business Standard, Hindustan, News18, and Forbes India.
            <br />
            9. How do you ensure guaranteed media placement? <br />
            We never promise fake or paid editorial guarantees. Our team
            maintains direct editorial relationships with verified journalists
            and media houses. We guarantee effort, placement coordination, and
            real publication tracking, not false promises. Each story is pitched
            authentically, ensuring credibility that lasts.
            <br />
            10. What industries have you worked with?
            <br /> Fox Wing Media has experience across: <br />● Tech & Startups
            <br /> ● Gemstone & Jewelry <br />● Luxury & Lifestyle
            <br /> ● Coaching & Education
            <br /> ● Wellness & Spiritual Brands
            <br /> ● Events & Public Figures This diversity helps us create
            custom storytelling frameworks that work across industries.
            <br />
            11. Do you offer long-term PR retainers or monthly plans?
            <br /> Yes. We offer flexible monthly and quarterly plans for:
            <br /> ● PR & Media Strategy
            <br /> ● Social Media Growth
            <br /> ● Brand Storytelling & Sales Funnels <br />● SEO and Backlink
            PR These retainers ensure consistent visibility and brand recall
            over time. <br />
            12. Can you help in building my personal brand as a founder or
            coach? <br />
            That’s one of our strongest areas. We design founder-driven branding
            systems — including interviews, features, and narrative campaigns
            that make you the face of your industry. We work on:
            <br /> ● Founder profile story
            <br /> ● Media coverage in relevant categories
            <br /> ● Social storytelling strategy ● Reputation positioning and
            keynote visibility “Your name should sell before your product does.”
            — Sameer Satyarth <br /> 13. How do I get started with Fox Wing
            Media? Simple steps: <br />
            1. Fill the Contact Form or Book a Strategy Call. <br />
            2. Our team will schedule a quick discovery session. <br />
            3. We’ll share a customized PR + Marketing roadmap for your goals.
            <br />
            📧 Email: fly@foxwingmedia.com 📞 Call/WhatsApp: +91 7258830117
            <br />
            14. Where is Fox Wing Media based? <br />
            Do you work with clients outside India? Our head office is in
            Kolkata, India, but our operations are global. We’ve worked with
            clients from the UAE, USA, Singapore, and Europe, especially
            founders looking to build authority in the Indian media space.
            <br />
            15. What kind of results can I expect from working with you?
            <br /> You can expect: <br />✅ Verified media coverage in credible
            outlets
            <br /> ✅ Stronger digital reputation and Google presence
            <br /> ✅ Consistent social media positioning <br />✅ Higher brand
            trust → improved lead conversion
            <br /> ✅ Strategic guidance from Sameer and his team Every campaign
            is built to elevate your visibility, authority, and business growth
            simultaneously. <br />
            16. Can you help in creating ad or brand videos too? <br />
            Yes. We have an in-house creative team that produces: <br />
            🎥 Brand & Founder videos
            <br /> 📹 Event coverage reels <br />
            📢 UGC & social campaigns All designed to match the PR narrative and
            enhance engagement. <br /> 17. What’s your philosophy behind Fox
            Wing Media?
            <br /> “Media is not about attention; it’s about intention.” Our
            mission is to empower founders and brands to communicate with
            clarity, authenticity, and impact. We don’t sell PR — we build
            legacies through perception and purpose.
            <br /> Still Have Questions?
            <br /> We’d love to help you personally. Reach out at
            fly@foxwingmedia.com or message us directly on LinkedIn / Instagram.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
