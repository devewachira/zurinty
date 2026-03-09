export const ImportanceSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Importance of Web Design in Dallas TX
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              In Dallas, TX, where the competition is fierce, having a professional website can be a key differentiator for businesses. It can help them stand out from the crowd, establish their brand identity, and communicate their unique value proposition.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              A well-designed website is crucial for businesses in Dallas, TX. A professional website serves as a virtual storefront, reflecting your brand's identity, values, and credibility. Effective web design is essential for attracting and retaining visitors, converting leads into customers, and driving business growth.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r">
              <p className="text-lg font-semibold text-foreground">
                A good web design can improve the user experience, making it easier for visitors to navigate and find the information they need.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Professional working on laptop"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
