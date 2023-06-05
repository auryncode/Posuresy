import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";

export default function Paginate({ meta }) {
    const prev = meta.prev_page_url;
    const next = meta.next_page_url;
    console.log(meta);
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                {prev && (
                    <Link
                        href={prev}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Previous
                    </Link>
                )}
                {next && (
                    <Link
                        href={next}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Next
                    </Link>
                )}
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{meta.from}</span>{" "}
                        to <span className="font-medium">{meta.to}</span> of{" "}
                        <span className="font-medium">{meta.total}</span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {prev && (
                            <Link
                                href={prev}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        <Link className="px-6 relative inline-flex items-center px-2 py-2 text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            {meta.current_page}
                        </Link>

                        {next && (
                            <Link
                                href={next}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}
