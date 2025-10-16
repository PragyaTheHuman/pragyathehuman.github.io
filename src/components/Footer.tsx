export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pragya Goyal. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with passion for innovation and interdisciplinary exploration.
          </p>
        </div>
      </div>
    </footer>
  );
};
