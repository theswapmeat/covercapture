// src/components/shared/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-12 sm:px-20">
      <p className="text-sm font-medium text-muted-foreground">
        &copy; {new Date().getFullYear()} CoverCapture Inc. &mdash; The Future of
        Risk Management.
      </p>
    </footer>
  );
}
