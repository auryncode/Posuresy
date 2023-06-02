import React from "react";

export default function Detail({ data }) {
    return (
        <div key={i} className="w-full">
            <div className="my-1 py-3 rounded w-full flex items-center justify-between px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none">
                <p className="text-gray-900">
                    <span className="text-gray-900 text-lg font-semibold">
                        {data.nama}
                    </span>
                </p>
                <button
                    className="underline text-sm text-semibold hover:italic hover:text-blue-600"
                    id={i}
                    onClick={(e) => toggleAccordion(i)}
                >
                    View
                </button>
            </div>
            {isOpen && (
                <div className="w-full px-4 py-2 bg-gray-300 rounded">
                    <ul>
                        <li>Nama: {data.nama}</li>
                        <li>Nik: {data.nik}</li>
                        <li>Agama: {data.agama}</li>
                        <li>Jenis kelamin: {data.jenis_kelamin}</li>
                        <li>Provinsi: {data.provinsi}</li>
                        <li>Kabupaten: {data.kabupaten}</li>
                        <li>Kecamatan: {data.kecamatan}</li>
                        <li>Kelurahan: {data.kelurahan}</li>
                        <li>Dusun: {data.dusun}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
