export default function Home() {
  const locale = process.env.NEXT_PUBLIC_LOCALE;
  return <div className="text-red-400 text-4xl">Welcome to {locale} site.</div>;
}
