import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex flex-1 items-center gap-x-2 overflow-hidden rounded-full border-[1px] px-4 py-1">
      <SearchIcon color="#3352CC" />
      <Input
        placeholder="Search by name, email or Status"
        className="focus-ring-0 flex-1 border-none outline-none ring-0"
      />
    </div>
  );
};

export default Search;
