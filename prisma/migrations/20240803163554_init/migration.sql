-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameKana" TEXT NOT NULL,
    "logo_image" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "phone" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "google_place_id" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "station_name" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "catch" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "photo_l" TEXT NOT NULL,
    "photo_m" TEXT NOT NULL,
    "photo_s" TEXT NOT NULL,
    "open" TEXT NOT NULL,
    "close" TEXT NOT NULL,
    "free_drink" TEXT NOT NULL,
    "free_food" TEXT NOT NULL,
    "private_room" TEXT NOT NULL,
    "card" TEXT NOT NULL,
    "non_smoking" TEXT NOT NULL,
    "parking" TEXT NOT NULL,
    "wifi" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "catch" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "average" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
