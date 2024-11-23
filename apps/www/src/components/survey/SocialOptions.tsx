/* eslint-disable @next/next/no-img-element */
import { Button } from "@repo/ui/components/ui/button";
import { MouseEvent, useState } from "react";

type SocialOption = {
  name: string;
  logo: string;
};

export default function SocialOptions() {
  const options = [
    {
      name: "Instagram",
      logo: "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/instagram.svg?t=2024-11-23T13%3A36%3A29.899Z",
    },
    {
      name: "Facebook",
      logo: "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/facebook.svg?t=2024-11-23T13%3A36%3A50.510Z",
    },
    {
      name: "X (formerly Twitter)",
      logo: "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/x.svg?t=2024-11-23T13%3A37%3A35.875Z",
    },
    {
      name: "TikTok",
      logo: "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/tiktok.svg?t=2024-11-23T13%3A37%3A53.585Z",
    },
    {
      name: "LinkedIn",
      logo: "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/linkedin.svg?t=2024-11-23T13%3A38%3A21.065Z",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (
    // eslint-disable-next-line no-undef
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    option: string,
  ) => {
    e.preventDefault();
    setSelectedOption(option);
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSelectedOption("Other: " + value);
  };

  return (
    <ul className="flex-1 w-full space-y-5">
      {options.map((option: SocialOption, index: number) => {
        return (
          <li key={index}>
            <Button
              variant="outline"
              size="lg"
              className={`shadow-sm w-full h-auto rounded-xl justify-start flex items-center gap-3 py-4 px-5 ${
                selectedOption === option.name
                  ? "bg-primary/5 hover:bg-primary/10 border-primary"
                  : ""
              }`}
              onClick={(e) => handleOptionClick(e, option.name)}
            >
              <img
                className="h-8 w-8"
                alt={`Logo for ${option.name}`}
                src={option.logo}
              />
              <p className="font-semibold">{option.name}</p>
            </Button>
          </li>
        );
      })}
      <textarea
        // {...register("socialOption")}
        placeholder="Other (please specify)"
        onChange={handleOtherChange}
        className="w-full p-4 border rounded-xl shadow-sm"
      />
    </ul>
  );
}
