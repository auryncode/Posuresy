import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ExportPdf from "@/Components/ExportPdf";
import { Link } from "@inertiajs/react";
import { createElement, useState } from "react";
import {
    HiMenuAlt3,
    HiOutlineCube,
    HiOutlineUser,
    HiOutlineOfficeBuilding,
    HiOutlineLibrary,
} from "react-icons/hi";
import Submenu from "@/Components/Submenu";

export default function AuthenticatedLayout({
    distinct = [],
    user = [],
    header = "",
    children,
    data = [],
}) {
    const [open, setIsOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(true);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const menus = [
        {
            name: "kecamatan",
            link: "/listuser",
            icon: HiOutlineOfficeBuilding,
            subMenu: distinct.map((res) => {
                return res.kecamatan;
            }),
        },
    ];

    return (
        <section className="flex h-full">
            <div
                className={`${
                    open ? "w-72" : "w-16"
                } bg-[#0e0e0e] duration-500 sm:block hidden text-gray-100`}
            >
                <div className="py-3 px-4 flex justify-end h-16 place-self-center">
                    <div className="flex items-center h-full">
                        <HiMenuAlt3
                            size={26}
                            className={`${
                                open && "rotate-180"
                            } duration-500 cursor-pointer`}
                            onClick={() => setIsOpen(!open)}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 relative mt-4">
                    <Link
                        replace={false}
                        href={"/dashboard"}
                        className="flex gap-3 h-12 items-center  px-5 hover:bg-gray-500"
                    >
                        <div className="duration-500">
                            {createElement(HiOutlineCube, {
                                size: open ? 22 : 26,
                            })}
                        </div>
                        <h2
                            className={`${
                                open ? "scale-100" : "scale-0"
                            } duration-500 `}
                        >
                            Dashboard
                        </h2>
                    </Link>
                    {menus.map((menu) => {
                        return (
                            <Submenu open={open} key={menu.name} data={menu} />
                        );
                    })}
                </div>
            </div>
            <div className="flex-1 text-xl text-gray-100">
                <nav className="bg-[#0e0e0e]">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <div className="py-3 flex justify-end h-16 place-self-center">
                                        <div className="items-center h-full">
                                            Pendataan
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <div className="text-gray-100 cursor-pointer rounded-full hover:text-gray-400 duration-200">
                                                {createElement(HiOutlineUser, {
                                                    size: 30,
                                                })}
                                            </div>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                <div className="duration-500">
                                    {createElement(HiOutlineCube, {
                                        size: open ? 22 : 26,
                                    })}
                                </div>
                                <h2>Dashboard</h2>
                            </ResponsiveNavLink>
                            {menus.map((menu) => {
                                return (
                                    <Submenu
                                        open={open}
                                        key={menu.name}
                                        data={menu}
                                    />
                                );
                            })}
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1 w-full">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <Link
                                className="text-base px-5 w-full py-3 text-start hover:bg-gray-500"
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </Link>
                                {data && (
                                    <ExportPdf className="w-full" data={data} />
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                {header && (
                    <div className="sm:flex hidden text-black justify-end py-3 px-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                )}
                <div className="p-3 overflow-y-auto h-screen">{children}</div>
            </div>
        </section>
    );
}
