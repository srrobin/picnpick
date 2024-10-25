import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
    return (
        <Dialog>
        <DialogTrigger asChild>
          <SearchIcon size={25} cursor={"pointer"} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>search</DialogTitle>
          </DialogHeader>
          <div className="">
              <input 
               type="text"
               placeholder="search here"
               className="
               block 
               w-full
               border
               border-gray-400
               rounded-lg
               px-6
               py-2
               outline-none
               "

              />
          </div>
        </DialogContent>
      </Dialog>
    );
};

export default SearchBox;