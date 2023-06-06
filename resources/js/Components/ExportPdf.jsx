import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const ExportPdf = ({ className = "" }, ...props) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await axios.get("http://localhost:8000/api/all");
        setData(res.data.user);
    };
    useEffect(() => {
        getData();
    }, []);
    const exportPDF = () => {
        const doc = new jsPDF({
            format: "letter",
            orientation: "portrait",
            compress: true,
            precision: 2,
        });
        doc.getFontList({ times: ["normal"] });
        doc.setFont("times new roman");
        doc.setFontSize(18);

        doc.text("Laporan Data Pendukung Kab.Karanganyar ", 100, 10, {
            align: "center",
        });
        doc.autoTable({
            head: [["Nama", "NIK", "Jenis kelamin", "Alamat"]],
            body: data.map((res) => [
                res.nama,
                res.nik,
                res.jenis_kelamin,
                `${res.dusun},${res.kelurahan},${res.kecamatan},${res.kabupaten},${res.provinsi}`,
            ]),
            styles: {
                font: "times new roman",
                fontSize: 12,
                head: {
                    fontSize: 14,
                    fontStyle: "bold",
                },
                body: { font: "times new roman", fontSize: 12 },
            },
        });
        doc.save("Data pendukung kabupaten karanganyar.pdf");
    };

    return (
        <div>
            <button
                name="download"
                {...props}
                onClick={exportPDF}
                className={`font-sans font-medium text-base rounded py-2 px-6 flex flex-row justify-center align-center gap-2 hover:bg-blue-600 hover:text-white ${className}`}
            >
                <CloudArrowDownIcon className="h-6 w-6 text-blue-400" />
                Download
            </button>
        </div>
    );
};

export default ExportPdf;
