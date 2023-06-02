import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className="text-base flex gap-3 duration-500 hover:text-blue-400 cursor-pointer py-3 items-center  px-5 hover:bg-gray-500"
        >
            {children}
        </Link>
    );
}
