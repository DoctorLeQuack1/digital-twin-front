import { AssetViewer } from "../components/dashboard-components/AssetViewer";
import { SideBar } from "../components/dashboard-components/SideBar";
import { get_asset } from "../api/get_asset.js";
import { useEffect, useState } from "react";

import { Alert } from "flowbite-react";
import { HiEye, HiInformationCircle } from "react-icons/hi";

// Dashboard.tsx
export const Dashboard = () => {

    const [ asset, setAsset ] = useState<string | undefined>("");

    useEffect(() => {
        const fetchAsset = async () => {
            try {
                const result = await get_asset();
                console.log(`This is my result: ${result.asset.asset_link}`)
                setAsset(result.asset.asset_link);
            } catch (err) {
                console.error("Error fetching asset:", err);
                setAsset(undefined);
            }
        };

        fetchAsset();
    }, []);

    if (asset === undefined) return (<Alert additionalContent={<button
        type="button"
        className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
    >
        <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
        Try Agian
    </button>} color="warning" icon={HiInformationCircle}>
        <span className="font-medium">Info alert!</span> Unable to fetch asset, please press try again
    </Alert>);

    return (
        <div className="grid grid-cols-12 grid-rows-12 h-screen gap-4 p-20">
            {/* Columna 1 (1/3 del ancho, 3 filas de alto) */}
            <div className="flex flex-col flex-wrap justify-center items-center col-start-1 col-span-12 row-start-1 row-span-6 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-12 bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 p-4 rounded-lg">
                <SideBar />
            </div>

            <div className="col-start-1 col-span-12 row-start-7 row-span-6 lg:col-start-4 lg:col-span-9 lg:row-start-1 lg:row-span-12 bg-gray-700 rounded-lg overflow-hidden">
                <AssetViewer value={asset} />
            </div>
        </div>
    );
};