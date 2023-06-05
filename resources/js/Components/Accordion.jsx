import { Link } from "@inertiajs/react";
import React, { createElement, useState } from "react";
import {
    HiOutlinePencilAlt,
    HiOutlineTrash,
    HiOutlinePlus,
} from "react-icons/hi";
import DeleteButton from "./DeleteButton";

const Accordion = ({ title, content, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="w-full">
        //     <div className="my-1 py-3 rounded w-full flex items-center justify-between px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none">
        //         <p className="text-gray-900">
        //             <span className="font-mono text-xl text-gray-900 text-lg font-semibold">
        //                 {data.nama}
        //             </span>
        //         </p>
        //         <button
        //             className={`underline px-4 text-sm text-gray-900 text-semibold hover:italic hover:text-blue-600 ${
        //                 isOpen ? "rotate-45" : "rotate-90"
        //             } duration-500`}
        //             onClick={(e) => setIsOpen(!isOpen)}
        //         >
        //             {createElement(HiOutlinePlus, {
        //                 size: 25,
        //             })}
        //         </button>
        //     </div>
        //     {isOpen && (
        //         <>
        //             <div className="text-base px-4 font-sans text-gray-900 w-full py-2 bg-gray-300 rounded">
        //                 <div className="flex justify-around ">
        //                     <ul className="flex-1">
        //                         <li>{data.nama}</li>
        //                         <li>{data.nik}</li>
        //                         <li>{data.agama}</li>
        //                         <li>{data.jenis_kelamin}</li>
        //                         <li>{`${data.dusun},${data.kelurahan},${data.kecamatan}`}</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="flex gap-4 px-4 py-2 rounded justify-end items-center bg-slate-200">
        //                 <Link
        //                     className="text-yellow-400 hover:text-yellow-500"
        //                     href={`/edit/${data.id}`}
        //                 >
        //                     {createElement(HiOutlinePencilAlt, {
        //                         size: 25,
        //                     })}
        //                 </Link>
        //                 {/* <DeleteButton
        //                                                     route={`/delete/${data.nik}`}
        //                                                 /> */}
        //                 <DeleteButton
        //                     className="text-red-600 hover:text-red-400"
        //                     nik={data.nik}
        //                 >
        //                     {createElement(HiOutlineTrash, {
        //                         size: 25,
        //                     })}
        //                 </DeleteButton>
        //             </div>
        //         </>
        //     )}
        // </div>

        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto">
                <div className="py-3">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> {data.nama}</span>
                            <span className="transition group-open:rotate-45 text-blue-400">
                                {createElement(HiOutlinePlus, {
                                    size: 25,
                                })}
                            </span>
                        </summary>
                        <div className="text-neutral-800 bg-gray-100 text-base capitalize rounded p-3 mt-3 group-open:animate-fadeIn">
                            <p className="text-blue-600 bg-blue-100 rounded-full w-fit px-4 text-base text-bold">
                                {data.nik}
                            </p>
                            <p>{data.jenis_kelamin}</p>
                            <p>{data.agama}</p>
                            <p>
                                {data.dusun},{data.kelurahan},{data.kecamatan}
                            </p>
                        </div>
                        <div className="flex gap-4 px-4 py-2 rounded-b justify-end items-center bg-gray-200">
                            <Link
                                className="text-yellow-400 hover:text-yellow-500"
                                href={`/edit/${data.id}`}
                            >
                                {createElement(HiOutlinePencilAlt, {
                                    size: 25,
                                })}
                            </Link>
                            <DeleteButton
                                className="text-red-600 hover:text-red-400"
                                nik={data.nik}
                            >
                                {createElement(HiOutlineTrash, {
                                    size: 25,
                                })}
                            </DeleteButton>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
