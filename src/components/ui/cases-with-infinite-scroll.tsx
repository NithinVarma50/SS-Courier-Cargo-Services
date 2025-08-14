import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import company logos
import iciciBankLogo from "@/assets/logos/icici-bank-real-logo.png";
import hdfcBankLogo from "@/assets/logos/hdfc-bank-real-logo.png";
import kotakBankLogo from "@/assets/logos/kotak-bank-logo.png";
import pullaReddyLogo from "@/assets/logos/pulla-reddy-logo.jpg";
import karachiBakeryLogo from "@/assets/logos/karachi-bakery-logo.png";

// Company data
const companies = [
  { name: "ICICI Bank", logo: iciciBankLogo },
  { name: "HDFC Bank", logo: hdfcBankLogo },
  { name: "Kotak Bank", logo: kotakBankLogo },
  { name: "Pulla Reddy Sweets", logo: pullaReddyLogo },
  { name: "Karachi Bakery", logo: karachiBakeryLogo },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const id = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000); // Slower scroll for better viewing

    return () => clearTimeout(id);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by 5 businesses
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {companies.map((company, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5" key={index}>
                  <div className="flex rounded-lg aspect-square bg-background border border-border items-center justify-center p-4 hover:shadow-md transition-shadow">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };


