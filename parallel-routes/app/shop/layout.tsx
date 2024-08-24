export default function RootLayout({
  children, products, reviews
}: Readonly<{
  children: React.ReactNode,
  products: React.ReactNode,
  reviews: React.ReactNode,
}>) {
  return (
    <div>
      {children}
      {products}
      {reviews}
    </div>
  );
}
