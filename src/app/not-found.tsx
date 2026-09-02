export default function NotFound() {
  return (
    <div className="px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-2 text-muted">That jar doesn&apos;t live on this shelf.</p>
      <a href="/" className="mt-6 inline-block text-chili underline">
        Back home
      </a>
    </div>
  );
}
