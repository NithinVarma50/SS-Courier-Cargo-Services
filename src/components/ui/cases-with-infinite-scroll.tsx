import React from "react";

// Import company logos
import iciciBankLogo from "@/assets/logos/icici-bank-final-logo.png";
import hdfcBankLogo from "@/assets/logos/hdfc-bank-final-logo.png";
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
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-2xl md:text-4xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by businesses
          </h2>
          <div className="overflow-hidden w-full">
            <div className="flex w-max gap-4 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center justify-center h-20 sm:h-24 overflow-hidden p-2 sm:p-3 min-w-[100px] md:min-w-[120px]">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-16 sm:max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Case };


