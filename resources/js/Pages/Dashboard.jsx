import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, distinct }) {
    console.log("distinct", distinct);
    return (
        <AuthenticatedLayout user={auth.user} distinct={distinct}>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 bg-white text-gray-900 overflow-hidden shadow-sm">
                        <h2 className=" text-base w-full bg-blue-500 text-bold rounded px-3 py-4">
                            Pendukung {`${distinct.length} dari 17 Kecamatan`} (
                            {Math.round((distinct.length / 17) * 100)}%)
                        </h2>
                        <div className="grid grid-flow-row rounded lg:grid-cols-3 grid-cols-2 gap-3">
                            {distinct.map((res, i) => {
                                return (
                                    <Link
                                        href={`listuser/kecamatan/${res.kecamatan}`}
                                        className="rounded text-base my-3 hover:scale-105 duration-300 text-gray-900 p-6 bg-indigo-400 text-center hover:bg-indigo-500"
                                        key={i}
                                    >
                                        {res.kecamatan}
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
