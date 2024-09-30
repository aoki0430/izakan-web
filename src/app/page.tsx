import RestaurantThumbnail from "@/components/restaurantThumbnail";
import SearchRestaurantCard from "@/components/searchRestaurantCard";
import { getShopsWithOptions } from "../../db/shop";

export default async function Top() {
  const shops = await getShopsWithOptions();

  return (
    <>
      <SearchRestaurantCard />
      <div className="mx-4 sm:mx-8 md:mx-12 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shops.map((shop) => {
          return (
            <>
              <RestaurantThumbnail
                imageUrl={shop.photo_l}
                shopName={shop.name}
              ></RestaurantThumbnail>
            </>
          );
        })}
      </div>
    </>
  );
}
