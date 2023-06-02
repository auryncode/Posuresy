import Accordion from "@/Components/Accordion";
import DeleteButton from "@/Components/DeleteButton";
import ExportPdf from "@/Components/ExportPdf";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import React, { createElement, useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export default function ListUser(props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (props.flash.message) {
            setShow(!show);
            const timer = () => {
                setTimeout(() => {
                    setShow(false);
                    // window.location.replace('/dashboard');
                }, 2000);
            };
            timer();
        }
    }, [props.flash.message]);

    const { auth, distinct, user } = props;

    const headTable = [
        "Action",
        "Nama",
        "NIK",
        "Jenis kelamin",
        "Agama",
        "Alamat",
    ];
    return (
        <AuthenticatedLayout
            header={
                <ExportPdf
                    className="bg-blue-700 shadow hidden sm:flex"
                    data={user}
                />
            }
            user={auth.user}
            data={user}
            distinct={distinct}
        >
            <Head title="list" />

            <div className="w-full mx-auto sm:px-6 lg:px-8">
                {show && (
                    <div
                        class="mb-4 bg-green-100 border-l-4 border-green-500 text-slate-900 p-4"
                        role="alert"
                    >
                        <p class="font-bold text-base">Succes</p>
                        <p className="text-sm">{props.flash.message}</p>
                    </div>
                )}
                <div className="hidden md:flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className=" min-w-full text-left text-sm">
                                    <thead className="bg-gray-200 font-medium border-b-2 border-gray-200">
                                        <tr>
                                            {headTable.map((head, i) => {
                                                return (
                                                    <th
                                                        key={i}
                                                        scope="col"
                                                        className="p-3 text-black font-semibold text-sm tracking-wide text-left"
                                                    >
                                                        {head}
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {user.map((data, i) => {
                                            return (
                                                <tr
                                                    key={i}
                                                    className={`bg-white hover:bg-gray-100`}
                                                >
                                                    <td className="px-3 gap-1 py-2 text-sm text-gray-700 flex justify-around font-medium">
                                                        <Link
                                                            className="text-yellow-400 hover:text-yellow-500"
                                                            href={`/edit/${data.id}`}
                                                        >
                                                            {createElement(
                                                                HiOutlinePencilAlt,
                                                                {
                                                                    size: 25,
                                                                }
                                                            )}
                                                        </Link>
                                                        <DeleteButton
                                                            className="text-red-600 hover:text-red-400"
                                                            nik={data.nik}
                                                        >
                                                            {createElement(
                                                                HiOutlineTrash,
                                                                {
                                                                    size: 25,
                                                                }
                                                            )}
                                                        </DeleteButton>
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-700 font-medium">
                                                        {data.nama}
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-700">
                                                        {data.nik}
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-700">
                                                        {data.jenis_kelamin}
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-700">
                                                        {data.agama}
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-700">
                                                        {`${data.dusun},${data.kelurahan},${data.kecamatan}`}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden text-gray-,900">
                    {user.map((data, i) => {
                        return <Accordion key={i} data={data} />;
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
