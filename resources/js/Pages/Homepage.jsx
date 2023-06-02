import DashLayout from "@/Layouts/DashLayout";
import { Link,Head } from "@inertiajs/react";
import React from "react";

export default function Homepage({auth}) {
    return (
        <DashLayout user={auth.user} title='Dashboard'>
            <div>Homepage</div>
            <Link
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="/add-user"
            >
                Add User
            </Link>
            <br />
            <Link
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="/login"
            >
                Login
            </Link>
        </DashLayout>
    );
}
