export default function Home() {
  const locale = process.env.NEXT_PUBLIC_LOCALE;
  return (
    <div className="text-green-500 text-4xl">
      Welcome to {locale} site. En page
    </div>
  );
}
