import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#282d33]" asChild>
        <Button variant={"outline"}>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-[#282d33] text-white" align="start">
        <DropdownMenuGroup className="">
          <DropdownMenuItem variant="default">Home</DropdownMenuItem>
          <DropdownMenuItem variant="default">Home</DropdownMenuItem>
          <DropdownMenuItem variant="default">Home</DropdownMenuItem>
          <DropdownMenuItem variant="default">Home</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
