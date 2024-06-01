"use client";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useState } from "react";

interface ICommandProps {
  commands: string[];
}

export default function SearchBar({ commands }: ICommandProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredCommands = Array.isArray(commands)
    ? commands.filter((command) =>
        command.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];
  console.log("filteredCommands", filteredCommands);
  return (
    <Command className="rounded-lg border shadow-sm">
      <CommandInput
        placeholder="主要な駅名を入力してください..."
        onValueChange={handleValueChange}
      />
      {
        <CommandList>
          {open &&
            filteredCommands.length > 0 &&
            filteredCommands.map((command) => (
              <CommandItem
                key={command}
                value={command}
                onSelect={(currentCommand) => {
                  setInputValue(currentCommand);
                  setOpen(false);
                }}
              >
                {command}
              </CommandItem>
            ))}
        </CommandList>
      }
    </Command>
  );
}
