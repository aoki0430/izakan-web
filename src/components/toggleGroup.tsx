import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleUseCase() {
  return (
    <ToggleGroup variant="outline" type="single" className="justify-start">
      <ToggleGroupItem
        value="デート"
        aria-label="デート"
        className="border-2 data-[state=on]:border-primary data-[state=on]:bg-background data-[state=on]:text-secondary-foreground"
      >
        デート
      </ToggleGroupItem>
      <ToggleGroupItem
        value="少人数のみ"
        aria-label="少人数のみ"
        className="border-2 data-[state=on]:border-primary data-[state=on]:bg-background data-[state=on]:text-secondary-foreground"
      >
        少人数のみ
      </ToggleGroupItem>
      <ToggleGroupItem
        value="女子会"
        aria-label="女子会"
        className="border-2 data-[state=on]:border-primary data-[state=on]:bg-background data-[state=on]:text-secondary-foreground"
      >
        女子会
      </ToggleGroupItem>
      <ToggleGroupItem
        value="宴会"
        aria-label="宴会"
        className="border-2 data-[state=on]:border-primary data-[state=on]:bg-background data-[state=on]:text-secondary-foreground"
      >
        宴会
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
