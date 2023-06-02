import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-20 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <img
                        src="storage/logo.jpeg"
                        className="rounded-full w-20 h-20"
                        alt=""
                    />{" "}
                </Link>
            </div>

            <div className="w-full max-w-xs mt-16 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
