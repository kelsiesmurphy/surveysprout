import { Textarea } from "@repo/ui/components/ui/textarea";
import React, { useState } from "react";

export default function TextAreaOther({
  tallTextArea,
  customOtherFieldText,
  setSelectedOption,
}: {
  tallTextArea?: boolean;
  customOtherFieldText?: string;
  setSelectedOption: any;
}) {
  const [textAreaCharactersLength, setTextAreaCharactersLength] =
    useState<number>(0);
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextAreaCharactersLength(value.length);
    setSelectedOption("Other: " + value);
  };

  return (
    <div className="w-full text-left space-y-1.5">
      <Textarea
        // {...register("socialOption")}
        placeholder={
          customOtherFieldText ? customOtherFieldText : "Other (please specify)"
        }
        maxLength={100}
        onChange={handleTextAreaChange}
        className={`w-full p-4 border rounded-xl shadow-sm ${tallTextArea && "min-h-48 md:min-h-40"}`}
      />
      <p className="text-sm text-muted-foreground">
        {100 - textAreaCharactersLength} characters left
      </p>
    </div>
  );
}
