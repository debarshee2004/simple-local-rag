import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="m-4 fixed">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </>
  );
}
