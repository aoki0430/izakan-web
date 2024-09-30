"use client";

import { useState } from "react";
import ImageOverlayButton from "./imageButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SearchRestaurantCard() {
  const [station, setStation] = useState("渋谷");
  const [partySize, setPartySize] = useState(4);
  const [budgetMin, setBudgetMin] = useState(3000);
  const [budgetMax, setBudgetMax] = useState(6000);

  return (
    <Card className="mx-12 mt-4 shadow-md">
      <CardContent>
        <div className="flex pt-8 items-start justify-center space-x-4">
          <div className="justify-between items-start">
            <div className="flex-grow space-y-2">
              <CardTitle>たった5分でいい感じのお店を予約しよう!</CardTitle>
              <CardDescription>
                首都圏主要駅の厳選された居酒屋を検索！！！
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Select value={station} onValueChange={setStation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="駅名を選択してね" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="吉祥寺">吉祥寺駅</SelectItem>
                  <SelectItem value="渋谷">渋谷駅</SelectItem>
                </SelectContent>
              </Select>
              <div className="space-x-1">
                <Select
                  value={partySize.toString()}
                  onValueChange={(value) => setPartySize(Number(value))}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="人数を選択してね" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50].map(
                      (size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size}人
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Select
                  value={budgetMin.toString()}
                  onValueChange={(value) => setBudgetMin(Number(value))}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="下限" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000].map(
                      (price) => (
                        <SelectItem key={price} value={price.toString()}>
                          {price}円
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <span>~</span>
                <Select
                  value={budgetMax.toString()}
                  onValueChange={(value) => setBudgetMax(Number(value))}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="上限" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
                    ].map((price) => (
                      <SelectItem key={price} value={price.toString()}>
                        {price}円
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ImageOverlayButton
              imageUrl="/yakitori.png"
              buttonText="焼き鳥"
            ></ImageOverlayButton>
            <ImageOverlayButton
              imageUrl="/sasimi.jpg"
              buttonText="海鮮"
            ></ImageOverlayButton>
            <ImageOverlayButton
              imageUrl="/italian.jpg"
              buttonText="イタリアン"
            ></ImageOverlayButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
