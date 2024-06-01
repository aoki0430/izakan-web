import { stations } from "@/data/stations";
import SearchBar from "./searchBar";
import ToggleUseCase from "./toggleGroup";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function SearchCard() {
  return (
    <>
      <Card className="w-full justify-start">
        <CardHeader>
          <CardTitle>いい感じのお店をさがす</CardTitle>
          <CardDescription>
            駅名とシチュエーションからいい感じに探してきます🫡
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SearchBar commands={stations} />
          <ToggleUseCase />
        </CardContent>
        <CardFooter className="flex justify-start pt-8">
          <Button size="lg" className="font-semibold">
            これで探してきて！
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
