import { DownloadPDF, ExportPDF } from "@/Components/ExportPdf";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, distinct, total, dataAllUser }) {
    return (
        <AuthenticatedLayout user={auth.user} distinct={distinct}>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 bg-white text-gray-900 overflow-hidden shadow-sm">
                        <div className="my-3 flex justify-between w-full bg-blue-500 items-center">
                            <h2 className="text-sm sm:text-base text-bold rounded px-3 py-4">
                                Pendukung {`${distinct.length} Kecamatan`}
                            </h2>
                            {/* <ExportPDF data={dataAllUser} /> */}
                            <DownloadPDF data={dataAllUser} />
                        </div>
                        <div className="grid grid-flow-row rounded sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                            {Object.entries(total).map(([res, i]) => {
                                return (
                                    <Link
                                        href={`listuser/kecamatan/${res}`}
                                        className="text-sm capitalize rounded sm:text-base hover:scale-105 duration-300 text-gray-900 p-6 bg-indigo-400 text-center hover:bg-indigo-500"
                                        key={i}
                                    >
                                        {res} ({i} pendukung)
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
