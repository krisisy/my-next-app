import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This page is all about our Next.js project.</p>

            <h3>
                <Link href="/"> Go back to Home page </Link>
            </h3>
        </div>
    );
}