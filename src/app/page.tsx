import { Suspense } from "react";
import MoviesGrid from "./components/MoviesGrid";
import { Header } from "./layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex justify-center mt-10">
        <Suspense fallback={""}>
          <MoviesGrid />
        </Suspense>
      </main>
    </div>
  );
}
