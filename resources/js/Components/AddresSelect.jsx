import React from "react";

export default function AddresSelect({ datas, dist, onChange, value, data }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="mt-1 rounded select select-bordered select-sm block w-full"
        >
            <option value={value}>{value ? value : `--${dist}--`}</option>
            {datas.map((data, i) => {
                return (
                    <option key={i} value={data.name} id={data.id}>
                        {data.name}
                    </option>
                );
            })}
        </select>
    );
}
