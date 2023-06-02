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
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                                    <div className="flex h-16 items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 cursor-pointer w-10 rounded-full overflow-hidden"
                                                    src="/storage/logo.jpeg"
                                                />
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="flex pl-3 items-baseline space-x-4">
                                                    <Link
                                                        href="/"
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                    >
                                                        Home
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">
                                                <Link
                                                    href="/login"
                                                    className={`${
                                                        auth
                                                            ? "hidden"
                                                            : "block"
                                                    } btn-gost bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800`}
                                                >
                                                    Sign In
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="-mr-2 flex md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">
                                                    Open main menu
                                                </span>
                                                {open ? (
                                                    <XMarkIcon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <Bars3Icon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="md:hidden">
                                    <div className="divide-y space-y-3 px-2 pb-3 pt-2 sm:px-3">
                                        <Disclosure.Button
                                            as="a"
                                            href="/"
                                            className={classNames(
                                                "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "block rounded-md px-3 py-2 text-base font-medium"
                                            )}
                                        >
                                            Home
                                        </Disclosure.Button>
                                        <Disclosure.Button
                                            as="a"
                                            href="/login"
                                            className={classNames(
                                                `${
                                                    auth
                                                        ? "hidden"
                                                        : "block"
                                                } text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 text-base font-medium`
                                            )}
                                        >
                                            Sign Up
                                        </Disclosure.Button>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-lg font-bold tracking-tight text-gray-900">
                                {title}
                            </h1>
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
