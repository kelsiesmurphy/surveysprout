import { Slider } from "@repo/ui/components/ui/slider";
import { useState } from "react";

export default function SliderScreen() {
  const [sliderPosition, setSliderPosition] = useState<number>(5);
  return (
    <div className="w-full h-full flex items-center">
      <div className="space-y-8 flex-1">
        <p className="text-3xl font-semibold">{sliderPosition}</p>
        <Slider
          value={[sliderPosition]}
          onValueChange={(e) => setSliderPosition(e)}
          max={10}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
}
