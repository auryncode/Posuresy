import Accordion from "@/Components/Accordion";
import DeleteButton from "@/Components/DeleteButton";
import ExportPdf from "@/Components/ExportPdf";
import Paginate from "@/Components/Paginate";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import React, { createElement, useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const List = (user, message) => {
    const [show, setShow] = useState(false);
    console.log("user", user);

    useEffect(() => {
        if (message) {
            setShow(!show);
            const timer = () => {
                setTimeout(() => {
                    setShow(false);
                    // window.location.replace('/dashboard');
                }, 2000);
            };
            timer();
        }
    }, [message]);

    const headTable = ["Nama", "Jenis kelamin", "Agama", "Alamat", ""];
    return (
        <div>
            {show && (
                <div
                    className="mb-4 bg-green-100 border-l-4 border-green-500 text-slate-900 p-4"
                    role="alert"
                >
                    <p className="font-bold text-base">Succes</p>
                    <p className="text-sm">{message}</p>
                </div>
            )}
            <div className="hidden md:flex flex-col">
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                                {headTable.map((head, i) => {
                                    return (
                                        <th
                                            key={i}
                                            scope="col"
                                            className="px-6 py-4 font-medium text-gray-900"
                                        >
                                            {head}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                            {user.map((data, i) => {
                                return (
                                    <tr className="hover:bg-gray-50">
                                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                            <div className="text-sm">
                                                <div className="font-medium text-gray-700">
                                                    {data.nama}
                                                </div>
                                                <div className="text-gray-400">
                                                    {data.nik}
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-blue-600">
                                                {data.jenis_kelamin}
                                            </span>
                                        </td>
                                        <td className="capitalize px-6 py-4 text-black text-semibold">
                                            {data.agama}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                {`${data.dusun}, ${data.kelurahan}, ${data.kecamatan}`}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-end gap-4">
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
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:hidden text-neutral-600">
                {user.map((data, i) => {
                    return <Accordion key={i} data={data} />;
                })}
            </div>
        </div>
    );
};
const NoList = () => {
    return <div>Belum ada Pendukung</div>;
};
export default function ListUser(props) {
    const { auth, distinct, user } = props;
    return (
        <AuthenticatedLayout
            header={
                <ExportPdf
                    className="bg-blue-700 shadow hidden sm:flex"
                    data={user.data}
                />
            }
            user={auth.user}
            data={user.data}
            distinct={distinct}
        >
            <Head title="Daftar Pendukung" />
            <div className="w-full mx-auto sm:px-6 lg:px-8">
                {!user.data ? NoList() : List(user.data, props.flash.message)}
                <Paginate meta={user} />
            </div>
        </AuthenticatedLayout>
    );
}
