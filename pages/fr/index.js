export default function Home() {
  const locale = process.env.NEXT_PUBLIC_LOCALE;
  return (
    <div className="text-blue-500 text-4xl">
      Welcome to {locale} site. Fr page
    </div>
  );
}
