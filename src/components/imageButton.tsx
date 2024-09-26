import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface ImageOverlayButtonProps extends ButtonProps {
  imageUrl: string;
  buttonText: string;
  imageAlt?: string;
}

const ImageOverlayButton: React.FC<ImageOverlayButtonProps> = ({
  imageUrl,
  buttonText,
  imageAlt = "Button background",
}) => {
  return (
    <Button className={`relative overflow-hidden w-72 h-20`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={`absolute inset-0 bg-black opacity-40 z-10`}></div>
      <p className="relative text-lg font-bold z-20">{buttonText}</p>
    </Button>
  );
};

export default ImageOverlayButton;
