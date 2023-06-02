import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

const DeleteButton = ({
    nik,
    children,
    className,
}) => {
    const {
        data,
        reset,
        setData,
        delete: destroy,
    } = useForm({
        nik: nik,
    });

    useEffect(() => {
        setData("nik", nik);
    }, [data.nik, nik]);

    const handleDelete = () => {
        destroy(route("user.destroy"), {
            preserveScroll: true,
            onSuccess:()=>reset(),
            onFinish: () => reset(),
        });
    };
    return (
        <button className={className} onClick={handleDelete}>
            {children}
        </button>
    );
};

export default DeleteButton;
