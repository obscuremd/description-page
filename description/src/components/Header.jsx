import {
    Navbar, Typography, IconButton, Button, Input,
} from "@material-tailwind/react";
// import { Select, Option } from "@material-tailwind/react";

export function Header() {
    return (
        <div className="px-[50px]">
            <div className="flex flex-wrap items-center gap-y-4 text-blue-gray-900">
                <div className="bg-logo w-[100px] h-[100px] bg-contain bg-center bg-no-repeat"></div>
                <div className="relative flex w-full gap-[51px] md:w-max items-center ml-[200px]">
                    <p className="text-[12px] font-semibold text-white">HOME</p>
                    <div className="w-200px rounded-[21px]">
                        <select label="MOVIES" className=" h-[42px] rounded-[21px] border-[2px] border-red-100">
                            <option>MOVIES</option>
                            <option>SERIES</option>
                            <option>K-DRAMA</option>
                            <option>POP FICTION</option>
                            <option>CARTOON</option>
                        </select>
                    </div>
                    <Input
                        type="search"
                        label="Type here..."
                        color="white"
                        className="pr-20 !rounded-[39px] !border-white !border-[2px]"
                        containerProps={{
                            className: "min-w-[288px] ",
                        }}
                    />
                    <Button size="sm" className="!absolute right-1 top-1 rounded-[39px]">
                        Search
                    </Button>
                </div>
            </div>
        </div >
    );
}