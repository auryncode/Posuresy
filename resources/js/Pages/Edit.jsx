import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import DashLayout from "@/Layouts/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import AddresSelect from "@/Components/AddresSelect";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Modal from "@/Components/Modal";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import {
    getKabupaten,
    getKecamatan,
    getKelurahan,
    getProvinsi,
} from "@/config/Api";

export default function Edit({ auth, user, flash }) {
    const [provinsi, setProvinsi] = useState([]);
    const [kabupaten, setKabupaten] = useState([]);
    const [kecamatan, setKecamatan] = useState([]);
    const [kelurahan, setKelurahan] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;

    const handleSelectProvinsi = async (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const id = el.getAttribute("id");

        setData("provinsi", e.target.value);
        const kab = await getKabupaten(url, apiKey, id);
        setKabupaten(kab);
    };
    const handleSelectKabupaten = async (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const id = el.getAttribute("id");

        setData("kabupaten", e.target.value);
        const kec = await getKecamatan(url, apiKey, id);
        setKecamatan(kec);
    };

    const handleSelectKecamatan = async (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const id = el.getAttribute("id");

        setData("kecamatan", e.target.value);
        const kel = await getKelurahan(url, apiKey, id);
        setKelurahan(kel);
    };
    const handleSelectKelurahan = (e) => {
        setData("kelurahan", e.target.value);
    };
    useEffect(() => {
        getProvinsi(url, apiKey).then((prov) => {
            setProvinsi(prov);
        });
    }, []);

    const { data, setData, errors, patch } = useForm({
        nama: user.nama,
        nik: user.nik,
        jenis_kelamin: user.jenis_kelamin,
        provinsi: user.provinsi,
        kabupaten: user.kabupaten,
        kecamatan: user.kecamatan,
        kelurahan: user.kelurahan,
        dusun: user.dusun,
    });
    const submit = (e) => {
        e.preventDefault();
        patch(`/update/${user.id}`);
    };
    const handleSucces = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    };
    return (
        <DashLayout title="Update Pendukung" auth={auth.user}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={submit} className="pt-1">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div className="">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                                        Data Diri Pendukung
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Isi data diri sesuai KK/KTP
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-5">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Full name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Masukan Nama"
                                            type="text"
                                            name="first-name"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="nik"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        NIK
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Masukan NIK"
                                            id="nik"
                                            name="nik"
                                            type="text"
                                            value={data.nik}
                                            onChange={(e) =>
                                                setData("nik", e.target.value)
                                            }
                                            autoComplete="nik"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.nik}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="sm:col-span-4">
                                    <div className="w-full mt-4 flex-1">
                                        <InputLabel value="Gender" />
                                        <div className="mt-4 items-center dark:border-gray-700">
                                            <TextInput
                                                id="bordered-radio-1"
                                                type="radio"
                                                value="perempuan"
                                                checked={
                                                    data.jenis_kelamin ===
                                                    "perempuan"
                                                }
                                                onClick={(e) =>
                                                    setData(
                                                        "jenis_kelamin",
                                                        e.target.value
                                                    )
                                                }
                                                name="bordered-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="bordered-radio-1"
                                                className="w-full py-4 ml-2 text-sm font-medium text-black"
                                            >
                                                Perempuan
                                            </label>
                                        </div>
                                        <div className="mt-2 items-center dark:border-gray-700">
                                            <TextInput
                                                id="bordered-radio-2"
                                                type="radio"
                                                value="laki-laki"
                                                checked={
                                                    data.jenis_kelamin ===
                                                    "laki-laki"
                                                }
                                                onClick={(e) =>
                                                    setData(
                                                        "jenis_kelamin",
                                                        e.target.value
                                                    )
                                                }
                                                name="bordered-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="bordered-radio-2"
                                                className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                                            >
                                                Laki-Laki
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.jenis_kelamin}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="provinsi"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Provinsi
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={handleSelectProvinsi}
                                            value={data.provinsi}
                                            id="addres"
                                            className="mt-1 rounded select select-bordered select-sm block w-full"
                                        >
                                            <option value={data.provinsi}>
                                                {data.provinsi
                                                    ? data.provinsi
                                                    : "--Pilih Provinsi--"}
                                            </option>
                                            {provinsi.map((prov, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={prov.name}
                                                        id={prov.id}
                                                    >
                                                        {prov.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <InputError
                                        message={errors.provinsi}
                                        className="mt-2"
                                    />
                                </div>

                                {data.kabupaten && (
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="kabupaten"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Kabupaten
                                        </label>
                                        <div className="mt-2">
                                            <AddresSelect
                                                onChange={handleSelectKabupaten}
                                                value={data.kabupaten}
                                                datas={kabupaten}
                                                dist="Kabupaten"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.kabupaten}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                                {data.kecamatan && (
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="kecamatan"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Kecamatan
                                        </label>
                                        <div className="mt-2">
                                            <AddresSelect
                                                onChange={handleSelectKecamatan}
                                                value={data.kecamatan}
                                                datas={kecamatan}
                                                dist="Kecamatan"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.kecamatan}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                                {data.kelurahan && (
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="kelurahan"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Kelurahan
                                        </label>
                                        <div className="mt-2">
                                            <AddresSelect
                                                onChange={handleSelectKelurahan}
                                                value={data.kelurahan}
                                                datas={kelurahan}
                                                dist="Kelurahan"
                                                setDatas={setData}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.kelurahan}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                                {data.kelurahan && (
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="dusun"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Dusun
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e) =>
                                                    setData(
                                                        "dusun",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                name="dusun"
                                                id="dusun"
                                                value={data.dusun}
                                                autoComplete="dusun"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.dusun}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link
                            className="text-base text-black hover:text-blue-500 hover:italic hover:underline"
                            href={`/listuser/kecamatan/${data.kecamatan}`}
                        >
                            Back
                        </Link>

                        <button
                            onClick={handleSucces}
                            name="submit"
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                    {flash.message && (
                        <Modal setOpen={setOpen} open={open}>
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-center">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <CheckIcon
                                            className="h-6 w-6 text-green-600"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-base font-semibold leading-6 text-gray-900"
                                        >
                                            Berhasil Update Data Pendukung
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Data berhasil disimpan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                    onClick={() => setOpen(false)}
                                >
                                    Back
                                </button>
                            </div>
                        </Modal>
                    )}
                </form>
            </div>
        </DashLayout>
    );
}
