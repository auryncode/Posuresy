import React from "react";

export default function AddresSelect({
    datas,
    dist,
    setDatas,
    getKecamatan,
    getKelurahan,
    value,
}) {
    return (
        <select
            value={value}
            onChange={(e) => {
                dist == "Kabupaten" && setDatas("kabupaten", e.target.value);
                dist == "Kecamatan" && setDatas("kecamatan", e.target.value);
                dist == "Kelurahan" && setDatas("kelurahan", e.target.value);
            }}
            className="mt-1 rounded select select-bordered select-sm block w-full"
        >
            <option value="">--Pilih {dist}--</option>
            {datas.map((data, i) => {
                return (
                    <option
                        key={i}
                        value={data.name}
                        onClick={() => {
                            dist == "Kabupaten" && getKecamatan(data.id);
                            dist == "Kecamatan" && getKelurahan(data.id);
                            dist == "Kelurahan";
                        }}
                    >
                        {data.name}
                    </option>
                );
            })}
        </select>
    );
}
