import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your Free 30 Minute Consultation
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            In Dallas (and at zuriminty), we understand that every business is unique, which is why we offer customized web design solutions tailored to your specific needs and goals.
          </p>
          
          <div className="bg-muted rounded-2xl p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to take your business to the next level? Schedule a free consultation with our team today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12">
              Schedule Consultation
            </Button>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              When Partnering With zuriminty, You Can Expect:
            </h3>
            <ul className="text-left max-w-2xl mx-auto space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  A custom web design that captures your brand's essence and appeals to your target audience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  A website optimized for search engines, ensuring higher visibility and better rankings
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  A comprehensive web development strategy that supports your digital marketing objectives
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  Ongoing support and maintenance to keep your website performing at its best
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
