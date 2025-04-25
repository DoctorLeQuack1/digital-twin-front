import { AssetViewer } from "../components/dashboard-components/AssetViewer";
import { SideBar } from "../components/dashboard-components/SideBar";

// Dashboard.tsx
export const Dashboard = () => {



    return (
        <div className="grid grid-cols-12 grid-rows-12 h-screen gap-4 p-20">
            {/* Columna 1 (1/3 del ancho, 3 filas de alto) */}
            <div className="flex flex-col justify-center items-center col-start-1 col-span-3 row-start-1 row-span-12 bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 p-4 rounded-lg">
                <SideBar/>
            </div>

            <div className="col-start-4 col-span-9 row-start-1 row-span-12 bg-gray-700 rounded-lg overflow-hidden">
                <AssetViewer />
            </div>
        </div>
    );
};