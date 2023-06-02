import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import DashLayout from "@/Layouts/DashLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import AddresSelect from "@/Components/AddresSelect";

// export default function Edit({ auth }) {
//     const dataUser = ["nama", "nik"];
//     // const url = process.env.REACT_APP_API_URL;
//     // const apiKey = process.env.REACT_APP_API;
//     // console.log(url);
//     // console.log(apiKey);
// const [provinsi, setProvinsi] = useState([]);
// const [kabupaten, setKabupaten] = useState([]);
// const [kecamatan, setKecamatan] = useState([]);
// const [kelurahan, setKelurahan] = useState([]);

// const getKabupaten = async (id) => {
//     const res = await axios.get(
//         `https://api.binderbyte.com/wilayah/kabupaten`,
//         {
//             params: {
//                 api_key:
//                     "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
//                 id_provinsi: id,
//             },
//         }
//     );
//     setKabupaten(res.data.value);
// };
// const getKecamatan = async (id) => {
//     const res = await axios.get(
//         `https://api.binderbyte.com/wilayah/kecamatan`,
//         {
//             params: {
//                 api_key:
//                     "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
//                 id_kabupaten: id,
//             },
//         }
//     );
//     setKecamatan(res.data.value);
// };
// const getKelurahan = async (id) => {
//     const res = await axios.get(
//         `https://api.binderbyte.com/wilayah/kelurahan`,
//         {
//             params: {
//                 api_key:
//                     "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
//                 id_kecamatan: id,
//             },
//         }
//     );
//     setKelurahan(res.data.value);
// };
// useEffect(() => {
//     const getProvinsi = async () => {
//         const res = await axios.get(
//             "https://api.binderbyte.com/wilayah/provinsi",
//             {
//                 params: {
//                     api_key:
//                         "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
//                 },
//             }
//         );
//         setProvinsi(res.data.value);
//     };
//     getProvinsi();
// }, []);
// const { data, setData, post, processing, errors, reset } = useForm({
//     nama: "",
//     nik: "",
//     jenis_kelamin: "",
//     agama: "",
//     provinsi: "",
//     kabupaten: "",
//     kecamatan: "",
//     kelurahan: "",
//     dusun: "",
// });

// const submit = (e) => {
//     console.log(data);
//     e.preventDefault();

//     post("/add");
// };

//     return (
// <DashLayout title="Add User" user={auth.user}>
//             <form onSubmit={submit}>
//                 {dataUser.map((data, i) => {
//                     return (
//                         <div className="mt-4" key={i}>
//                             <InputLabel
//                                 htmlFor={data}
//                                 value={data.replace(/^\w/, (c) =>
//                                     c.toUpperCase()
//                                 )}
//                             />

//                             <TextInput
//                                 id={data}
//                                 name={data}
//                                 value={data.data}
//                                 className="mt-1 block w-full"
//                                 isFocused={true}
//                                 onChange={(e) => setData(data, e.target.value)}
//                                 required
//                             />

//                             <InputError
//                                 message={errors.data}
//                                 className="mt-2"
//                             />
//                         </div>
//                     );
//                 })}
// <div className="w-full mt-4 flex-1">
//     <InputLabel value="Gender" />
//     <div className="mt-4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
//         <TextInput
//             id="bordered-radio-1"
//             type="radio"
//             value="perempuan"
//             onClick={(e) =>
//                 setData("jenis_kelamin", e.target.value)
//             }
//             name="bordered-radio"
//             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//         />
//         <label
//             htmlFor="bordered-radio-1"
//             className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//         >
//             Perempuan
//         </label>
//     </div>
//     <div className="mt-2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
//         <TextInput
//             id="bordered-radio-2"
//             type="radio"
//             value="laki-laki"
//             onClick={(e) =>
//                 setData("jenis_kelamin", e.target.value)
//             }
//             name="bordered-radio"
//             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//         />
//         <label
//             htmlFor="bordered-radio-2"
//             className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//         >
//             Laki-Laki
//         </label>
//     </div>
// </div>
//                 <div className="mt-4 w-full">
//                     <InputLabel htmlFor="addres" value="Agama" />
// <select
//     onChange={(e) => {
//         setData("agama", e.target.value);
//     }}
//     id="agama"
//     className="mt-1 rounded select select-bordered select-sm block w-full"
// >
//     <option value="">--Pilih Agama--</option>
//     {agama.map((res, i) => {
//         return (
//             <option
//                 key={i}
//                 value={res}
//                 onClick={() => getKabupaten(res)}
//             >
//                 {res.replace(/^\w/, (c) => c.toUpperCase())}
//             </option>
//         );
//     })}
// </select>
//                 </div>
//                 <div className="mt-4 w-full">
//                     <InputLabel htmlFor="addres" value="Addres" />

// <select
//     onChange={(e) => {
//         setData("provinsi", e.target.value);
//     }}
//     id="addres"
//     className="mt-1 rounded select select-bordered select-sm block w-full"
// >
//     <option value="">--Pilih Provinsi--</option>
//     {provinsi.map((prov, i) => {
//         return (
//             <option
//                 key={i}
//                 value={prov.name}
//                 onClick={() => getKabupaten(prov.id)}
//             >
//                 {prov.name}
//             </option>
//         );
//     })}
// </select>
//                     {kabupaten.length !== 0 && (
//                         <AddresSelect
//                             datas={kabupaten}
//                             dist="Kabupaten"
//                             setDatas={setData}
//                             getKecamatan={getKecamatan}
//                         />
//                     )}
//                     {kecamatan.length !== 0 && (
//                         <AddresSelect
//                             datas={kecamatan}
//                             dist="Kecamatan"
//                             setDatas={setData}
//                             getKelurahan={getKelurahan}
//                         />
//                     )}
//                     {kelurahan.length !== 0 && (
//                         <>
//                             <AddresSelect
//                                 datas={kelurahan}
//                                 dist="Kelurahan"
//                                 setDatas={setData}
//                             />
//                         </>
//                     )}
//                 </div>
//                 {data.kelurahan && (
//                     <div className="mt-4">
//                         <InputLabel htmlFor="dusun" value="Dusun" />

//                         <TextInput
//                             id="dusun"
//                             name="dusun"
//                             value={data.dusun}
//                             className="mt-1 block w-full"
//                             isFocused={true}
//                             onChange={(e) => setData("dusun", e.target.value)}
//                             required
//                         />

// <InputError message={errors.dusun} className="mt-2" />
//                     </div>
//                 )}
//                 <div className="flex items-center justify-end mt-4">
//                     <PrimaryButton className="ml-4" disabled={processing}>
//                         Save
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </DashLayout>
//     );
// }
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Modal from "@/Components/Modal";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

export default function Edit({ auth, user }) {
    const agama = [
        "Islam",
        "Budha",
        "Hindu",
        "Konghucu",
        "Kristen",
        "Katholik",
    ];
    const [kecamatan, setKecamatan] = useState([]);
    const [kelurahan, setKelurahan] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const getKecamatan = async () => {
        const res = await axios.get(
            `https://api.binderbyte.com/wilayah/kecamatan`,
            {
                params: {
                    api_key:
                        "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
                    id_kabupaten: 3313,
                },
            }
        );
        setKecamatan(res.data.value);
    };
    const getKelurahan = async (id) => {
        const res = await axios.get(
            `https://api.binderbyte.com/wilayah/kelurahan`,
            {
                params: {
                    api_key:
                        "2b89f9805e4cabab8d93b1f0105390c719740cbc5e8fff2392723354eaa23ef4",
                    id_kecamatan: id,
                },
            }
        );
        setKelurahan(res.data.value);
    };
    useEffect(() => {
        getKecamatan();
        console.log(kecamatan);
    }, []);
    const { data, setData, errors, reset, put } = useForm({
        nama: user.nama,
        nik: user.nik,
        jenis_kelamin: user.jenis_kelamin,
        agama: user.agama,
        kecamatan: user.kecamatan,
        kelurahan: user.kelurahan,
        dusun: user.dusun,
    });
    console.log("kelurahan", data.kelurahan);
    const submit = (e) => {
        e.preventDefault();
        setOpen(true);

        put(`/update/${user.id}`);
        reset();
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
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="bordered-radio-1"
                                                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                                                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="agama"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Agama
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="agama"
                                            name="agama"
                                            value={data.agama}
                                            autoComplete="agama"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    agama: e.target.value,
                                                })
                                            }
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="">
                                                --Pilih Agama--
                                            </option>
                                            {agama.map((res, i) => {
                                                return (
                                                    <option value={res} key={i}>
                                                        {res}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <InputError
                                        message={errors.agama}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="provinsi"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Kecamatan
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            onChange={(e) => {
                                                setData(
                                                    "kecamatan",
                                                    e.target.value
                                                );
                                                console.log(e.target.id);
                                            }}
                                            value={data.kecamatan}
                                            id="addres"
                                            className="mt-1 rounded select select-bordered select-sm block w-full"
                                        >
                                            <option value="">
                                                --Pilih Kecamatan--
                                            </option>
                                            {kecamatan.map((kec, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={kec.name}
                                                        id={kec.id}
                                                        onClick={() =>
                                                            getKelurahan(kec.id)
                                                        }
                                                    >
                                                        {kec.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <InputError
                                        message={errors.kecamatan}
                                        className="mt-2"
                                    />
                                </div>

                                {kelurahan.length !== 0 && (
                                    <div className="sm:col-span-5">
                                        <label
                                            htmlFor="kelurahan"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Kelurahan
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                onChange={(e) => {
                                                    setData(
                                                        "kelurahan",
                                                        e.target.value
                                                    );
                                                }}
                                                value={data.kelurahan}
                                                id="addres"
                                                className="mt-1 rounded select select-bordered select-sm block w-full"
                                            >
                                                <option value="">
                                                    --Pilih Kelurahan--
                                                </option>
                                                {kelurahan.map((kel, i) => {
                                                    return (
                                                        <option
                                                            key={i}
                                                            value={kel.name}
                                                            onClick={() =>
                                                                getKelurahan(
                                                                    kel.id
                                                                )
                                                            }
                                                        >
                                                            {kel.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
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
                            className="text-base text-black text-blue-500 hover:italic hover:underline"
                            href={`/listuser/kecamatan/${data.kecamatan}`}
                        >
                            Back
                        </Link>

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
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
                        <div className="sm:hidden bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                            >
                                Back
                            </button>
                        </div>
                    </Modal>
                </form>
            </div>
        </DashLayout>
    );
}
