import trellis1 from "@/assets/trellis-1.png";
import trellis2 from "@/assets/trellis-2.png";
import trellis3 from "@/assets/trellis-3.png";

const ImageShowcase = () => {
  return (
    <section className="bg-navy py-8">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <img src={trellis1} alt="Trellis mobile app screens" className="w-full rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={trellis2} alt="Trellis website on MacBook" className="w-full rounded-lg" />
          <img src={trellis3} alt="Trellis business card design" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
