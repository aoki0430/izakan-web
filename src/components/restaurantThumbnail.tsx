import { Card } from "./ui/card";
import Image from "next/image";

interface RestaurantThumbnailProps {
  imageUrl: string;
  shopName: string;
}

export default function RestaurantThumbnail({
  imageUrl,
  shopName,
}: RestaurantThumbnailProps) {
  return (
    <Card
      className={`relative overflow-hidden aspect-video w-full shadow-md border-4 border-transparent hover:border-primary`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={shopName}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={`absolute inset-0 bg-black opacity-10 z-10`}></div>
      <p className="pl-4 pt-4 relative text-lg font-bold text-primary-foreground z-20">
        {shopName}
      </p>
    </Card>
  );
}
