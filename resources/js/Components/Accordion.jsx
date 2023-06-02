import { Link } from "@inertiajs/react";
import React, { createElement, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import DeleteButton from "./DeleteButton";

const Accordion = ({ title, content, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="my-1 py-3 rounded w-full flex items-center justify-between px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none">
                <p className="text-gray-900">
                    <span className="font-mono text-xl text-gray-900 text-lg font-semibold">
                        {data.nama}
                    </span>
                </p>
                <button
                    className="underline px-4 text-sm text-gray-900 text-semibold hover:italic hover:text-blue-600"
                    onClick={(e) => setIsOpen(!isOpen)}
                >
                    View
                </button>
            </div>
            {isOpen && (
                <div className="text-base px-4 font-sans text-gray-900 w-full py-2 bg-gray-300 rounded">
                    <div className="flex justify-around ">
                        {/* <ul className="flex-1 min-w-fit overflow-hidden">
                            <li>Nama</li>
                            <li>Nik</li>
                            <li>Agama</li>
                            <li>Jenis kelamin</li>
                            <li>Alamat</li>
                        </ul> */}
                        <ul className="flex-1">
                            <li>{data.nama}</li>
                            <li>{data.nik}</li>
                            <li>{data.agama}</li>
                            <li>{data.jenis_kelamin}</li>
                            <li>{`${data.dusun},${data.kelurahan},${data.kecamatan}`}</li>
                        </ul>
                    </div>
                    <div className="flex gap-4 px-4 justify-end items-center">
                        <Link
                            className="text-yellow-400 hover:text-yellow-500"
                            href={`/edit/${data.id}`}
                        >
                            {createElement(HiOutlinePencilAlt, {
                                size: 25,
                            })}
                        </Link>
                        {/* <DeleteButton
                                                            route={`/delete/${data.nik}`}
                                                        /> */}
                        <DeleteButton
                            className="text-red-600 hover:text-red-400"
                            nik={data.nik}
                        >
                            {createElement(HiOutlineTrash, {
                                size: 25,
                            })}
                        </DeleteButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
