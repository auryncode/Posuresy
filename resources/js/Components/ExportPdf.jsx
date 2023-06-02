import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";

const ExportPdf = ({ data, className = "" }, ...props) => {
    const exportPDF = () => {
        const doc = new jsPDF();
        doc.setFont("times new roman");
        doc.setFontSize(18);

        doc.text("Laporan Data Pendukung Kab.Karanganyar ", 100, 10, {
            align: "center",
        });
        doc.autoTable({
            head: [["Nama", "NIK", "Jenis kelamin", "Agama", "Alamat"]],
            body: data.map((res) => [
                res.nama,
                res.nik,
                res.jenis_kelamin,
                res.agama,
                `${res.dusun},${res.kelurahan},${res.kecamatan}`,
            ]),
            styles: {
                font: "times new roman",
                fontSize: 10,
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
