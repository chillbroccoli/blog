import Navbar from "@/components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-2/5 mx-auto flex flex-col">
      <Navbar />
      <main className="px-3">{children}</main>
    </div>
  );
}
