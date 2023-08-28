import React, { useState } from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import Modal from "react-modal";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 20,
    },
    header: {
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    table: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#000",
        paddingBottom: 5,
        marginBottom: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    columnHeader: {
        width: "33.33%",
        fontWeight: "bold",
        fontSize: 15,
    },
    columnCell: {
        width: "33.33%",
        fontSize: 10,
    },
});
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
const PDFDocument = ({ data }) => (
    <Document>
        <Page size="LETTER" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Data Pendukung </Text>
            </View>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.columnHeader}>Nik</Text>
                    <Text style={styles.columnHeader}>Nama</Text>
                    <Text style={styles.columnHeader}>Jenis Kelamin</Text>
                    <Text style={styles.columnHeader}>Alamat</Text>
                </View>
                {data.map((item) => (
                    <View key={item.id} style={styles.tableRow}>
                        <Text style={styles.columnCell}>{item.nik}</Text>
                        <Text style={styles.columnCell}>{item.nama}</Text>
                        <Text style={styles.columnCell}>
                            {item.jenis_kelamin}
                        </Text>
                        <Text style={styles.columnCell}>{`${item.dusun}
                        ${item.provinsi}
                        ${item.kabupaten}
                        ${item.kecamatan}
                        ${item.kelurahan}`}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export const DownloadPDF = ({ className, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerModal = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <PDFDownloadLink
                className={`text-sm font-sans font-medium sm:text-base rounded py-2 px-6 flex flex-row justify-center align-center gap-2 border-none hover:text-white ${className}`}
                document={<PDFDocument data={data} />}
                fileName="Data semua pendukung.pdf"
                target="_blank" // Membuka tautan dalam tab baru
            >
                {({ blob, url, loading, error }) =>
                    loading ? "Generating PDF..." : "Export to PDF"
                }
            </PDFDownloadLink>
        </div>
    );
};
export const ExportPDF = ({ className, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerModal = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className={`text-sm font-sans font-medium sm:text-base rounded py-2 px-6 flex flex-row justify-center align-center gap-2 border-none hover:text-white ${className}`}
                onClick={triggerModal}
            >
                Export to PDF
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel="Export MOdal"
            >
                <PDFViewer style={{ width: "80vw", height: "90vh" }}>
                    <PDFDocument data={data} />
                </PDFViewer>
            </Modal>
        </div>
    );
};
