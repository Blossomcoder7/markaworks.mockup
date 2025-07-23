import Placeholder1 from "../../../assets/icons/Placeholder1.png";
import Placeholder2 from "../../../assets/icons/Placeholder2.png";
import "../../../style/Slide.css";

const BrandSlide = () => {
  const repeatCount = 50;

  const Placeholder = [
    { id: 1, image: Placeholder1 },
    { id: 2, image: Placeholder2 },
  ];

  return (
    <div>
      <div className="bg-[#EAE5E3] py-4">
        <p className="text-center text-[#053333] font-semibold text-lg mb-4 mt-3">
          Trusted by 500+ of the world’s top brands
        </p>
        {/* part one - left to right */}
        <div className="overflow-hidden py-2">
          <div className="whitespace-nowrap slide-left flex gap-10 animate-marquee text-lg font-semibold text-[#053333] tracking-wider">
            {Array.from({ length: repeatCount }).flatMap((_, i) =>
              Placeholder.map((item, idx) => (
                <img
                  key={`top-${i}-${idx}`}
                  src={item.image}
                  alt={`brand-${item.id}`}
                  className="h-12 w-auto object-contain"
                />
              ))
            )}
          </div>
        </div>

        {/* part two - right to left */}
        <div className="overflow-hidden py-2">
          <div className="whitespace-nowrap slide-right flex gap-10 animate-marquee1 text-lg justify-end font-semibold text-[#053333] tracking-wider">
            {Array.from({ length: repeatCount }).flatMap((_, i) =>
              [...Placeholder]
                .reverse()
                .map((item, idx) => (
                  <img
                    key={`bottom-${i}-${idx}`}
                    src={item.image}
                    alt={`brand-${item.id}`}
                    className="h-12 w-auto object-contain"
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
