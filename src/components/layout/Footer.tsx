import { Container } from "@/components/ui/Container";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <a
          href="#top"
          className="text-xs text-muted transition-colors hover:text-accent-2"
        >
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
