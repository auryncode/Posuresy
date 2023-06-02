import React from "react";

export default function SelectAgama({ datas, agama ,setData}) {
    return (
        <select
            id="agama"
            name="agama"
            value={datas.agama}
            autoComplete="agama"
            onChange={(e) => setData(datas.agama,e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
            <option>--Pilih Agama--</option>
            {agama.map((res, i) => {
                return (
                    <option value={res} key={i}>
                        {res}
                    </option>
                );
            })}
        </select>
    );
}
