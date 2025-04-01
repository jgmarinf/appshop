
export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-300" >
      {children}
    </main>
  );
}
