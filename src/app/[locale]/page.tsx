import HeroPage from "@/components/main/hero";
import DashboardSidebar from "@/components/main/side";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-2 ">
        <HeroPage />
        <DashboardSidebar />
      </div>
    </main>
  );
}
