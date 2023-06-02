import { Link } from "@inertiajs/react";
import React, { useState, createElement } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Submenu({ data, open }) {
    const [opens, setOpens] = useState(false);
    return (
        <>
            <li
                onClick={() => setOpens(!opens)}
                className="flex justify-between items-center hover:text-blue-400 hover:bg-gray-500"
            >
                <div className="flex gap-3 duration-500 cursor-pointer py-3 items-center  px-5">
                    <div className="duration-500">
                        {createElement(data.icon, {
                            size: open ? 22 : 26,
                        })}
                    </div>
                    <h2
                        className={`${
                            open ? "scale-100" : "scale-0"
                        } capitalize duration-500 text-base`}
                    >
                        {data.name}
                    </h2>
                </div>
                <div
                    className={`${opens && "rotate-180"} ${
                        open ? "scale-100" : "scale-0"
                    } duration-500 px-6`}
                >
                    {createElement(HiOutlineChevronDown, {
                        size: 20,
                    })}
                </div>
            </li>
            <ul
                className={`w-full flex flex-col pl-14 overflow-hidden duration-500 relative ${
                    opens && open ? "h-fit" : "h-0"
                }`}
            >
                {data.subMenu.map((menu) => {
                    return (
                        <li
                        key={menu}
                            className={`text-[0.8rem] py-3 hover:text-blue-400 rounded w-full duration-500`}
                        >
                            <Link
                                href={`${data.link}/${data.name}/${menu}`}
                                className="capitalize cursor-pointer"
                            >
                                {menu}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
