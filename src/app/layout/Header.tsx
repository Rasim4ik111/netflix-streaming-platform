import Link from "next/link";
import Image from "next/image";
import { LiveFeed } from "../components/LiveFeed";

export const Header = () => {
  return (
    <header className="flex justify-around items-center bg-gray-900 p-10">
      <Link href={"./"}>
        <Image
          src="/logo.png"
          alt="Netflix"
          width={150}
          height={50}
          className="h-auto w-auto"
          priority
        />
      </Link>
      <div className="flex p-2">
        life users: <LiveFeed />
      </div>
      <button>Login</button>
    </header>
  );
};
