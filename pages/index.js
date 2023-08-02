export default function Home() {
  const locale = process.env.NEXT_PUBLIC_LOCALE;
  return <div>Welcome to {locale} site.</div>;
}
