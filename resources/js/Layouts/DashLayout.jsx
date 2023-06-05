import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DashLayout({ auth, children, title }) {
    return (
        <html className="h-full bg-gray-100">
            <Head title={title} />
            <body className="h-full">
                <div className="min-h-full">
                    <header className="bg-[#0e0e0e] shadow">
                        <div className="flex justify-between mx-auto max-w-7xl px-10 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-lg font-bold tracking-tight text-white">
                                {title}
                            </h1>
                            {auth && (
                                <Link className="text-white" href="/dashboard">
                                    Back
                                </Link>
                            )}
                        </div>
                    </header>
                    <main>
                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mt-6 px-6 py-4">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
