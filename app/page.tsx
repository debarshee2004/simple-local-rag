import { Button } from "@/components/ui/button";
import { PackageCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <PackageCheck size={160} />
        <h1 className="p-2 font-extrabold text-4xl">SupaTodo</h1>
        <Button className=" p-4 text-base w-44">
          <Link href="/todo">Get Started</Link>
        </Button>
      </div>
    </>
  );
}
