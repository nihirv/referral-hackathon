import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex items-center justify-center flex-col h-screen py-4 space-y-4">
        <h1 className="text-3xl">Who are you looking for?</h1>
        <div>
          <label className="text-xs" htmlFor="search">
            Profile description
          </label>
          <input
            type="text"
            id="search"
            placeholder="Angel investors for a B2C product"
            className="bg-slate-200 border border-slate-300 p-3 rounded-lg w-full"
          />
        </div>
        <div>
          <label className="text-xs" htmlFor="offer">
            Whats your offer?
          </label>
          <input
            type="text"
            id="offer"
            placeholder="5000"
            className="bg-slate-200 border border-slate-300 p-3 rounded-lg w-full"
          />
        </div>
        <Button>Generate Request</Button>
      </div>
    </Wrapper>
  );
}
