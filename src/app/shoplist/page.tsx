"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Short {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
}

const shortsData: Short[] = [
  {
    id: "1",
    title: "Amazing Short Video",
    thumbnail:
      "https://lh3.googleusercontent.com/p/AF1QipPkhKCmqIOCH17yETVYxmL5Iaz0XKqxW4BUggCm=s1360-w1360-h1020",
    channelName: "Channel One",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  {
    id: "2",
    title: "Another Great Short",
    thumbnail: "https://via.placeholder.com/150",
    channelName: "Channel Two",
  },
  // Add more shorts as needed
];

export default function ShortsList(props: Short) {
  const router = useRouter();
  return (
    <>
      <div className="pl-12 pb-4 flex-col">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>やきとり</CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
            <CardContent className="overflow-hidden max-w-full">
              <ScrollArea
                className="flex gap-4 overflow-x-auto max-w-full"
                aria-orientation="horizontal"
              >
                {shortsData.map((short) => (
                  <div
                    key={short.id}
                    className="flex-shrink-0 bg-gray-900 rounded-lg shadow-md overflow-hidden aspect-[249/442] sm:w-[15%] w-[25%] relative flex items-center justify-center"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={short.thumbnail}
                        alt={short.title}
                        layout="intrinsic"
                        width={249}
                        height={442}
                        className="object-cover"
                        onClick={() => router.push(`/shoplist/${short.id}`)}
                      />
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
          {/* <div className="text-lg font-semibold bg-yellow-200">やきとり</div>{" "} */}
        </div>
      </div>
    </>
  );
}
