import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import { contact } from "@/data/site";

export default function NotFound() {
  return (
    <>
      <BackgroundBoxes />
      <main className="not-found section">
        <p className="section-kicker">404 - Page not found</p>
        <h1>The page you are looking for is not live anymore.</h1>
        <p>
          It may have moved, the URL may be wrong, or the project page may not exist yet. Head back home or start a project directly.
        </p>
        <div className="not-found__actions">
          <Link className="button button--light" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back home
          </Link>
          <a className="button button--ghost" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Start a project
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </main>
    </>
  );
}
