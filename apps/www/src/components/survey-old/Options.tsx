/* eslint-disable @next/next/no-img-element */
import { Button } from "@repo/ui/components/ui/button";
import { MouseEvent, useState } from "react";
import TextAreaOther from "./TextAreaOther";

type Option = {
  name: string;
  order: number;
};

export default function Options({
  options,
  includeOtherField,
  customOtherFieldText,
}: {
  options: Option[];
  includeOtherField?: boolean;
  customOtherFieldText?: string;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (
    // eslint-disable-next-line no-undef
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    option: string,
  ) => {
    e.preventDefault();
    if (option === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <ul className="w-full space-y-5">
      {options
        .sort((a, b) => a.order - b.order)
        .map((option, index: number) => {
          return (
            <li key={index}>
              <Button
                variant="outline"
                size="lg"
                className={`shadow-sm w-full justify-between h-auto rounded-xl flex items-center gap-3 py-6 px-5 ${
                  selectedOption === option.name &&
                  "bg-primary/5 hover:bg-primary/10 border-primary"
                }`}
                onClick={(e) => handleOptionClick(e, option.name)}
              >
                <p className="font-semibold">{option.name}</p>
                <div
                  className={`h-4 w-4 rounded-full flex justify-center items-center transition-colors duration-200 ${selectedOption === option.name ? "bg-primary" : "border"}`}
                >
                  {selectedOption === option.name && (
                    <div className="rounded-full h-1.5 w-1.5 bg-background" />
                  )}
                </div>
              </Button>
            </li>
          );
        })}
      {includeOtherField && (
        <TextAreaOther
          customOtherFieldText={customOtherFieldText}
          setSelectedOption={setSelectedOption}
        />
      )}
    </ul>
  );
}
