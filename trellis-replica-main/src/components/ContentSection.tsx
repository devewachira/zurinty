interface ContentSectionProps {
  title: string;
  body: string;
  images: string[];
  imageAlts?: string[];
  columns?: 1 | 2;
}

const ContentSection = ({ title, body, images, imageAlts, columns = 1 }: ContentSectionProps) => {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          {body}
        </p>
      </div>
      <div className={`max-w-6xl mx-auto px-6 ${columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={imageAlts?.[i] || `${title} image ${i + 1}`}
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
