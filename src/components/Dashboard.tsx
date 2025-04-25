

export const Dashboard = () => {

    return (
        <div className="grid grid-cols-3 h-screen">
            <div className="col-span-1 bg-blue-100 p-4">
                {/* Columna 1/3 */}
                <h2 className="text-xl font-semibold">Columna 1</h2>
                <p>Contenido aquí</p>
            </div>

            <div className="col-span-2 bg-green-100 p-4">
                {/* Columna 2/3 */}
                <h2 className="text-xl font-semibold">Columna 2</h2>
                <p>Contenido más amplio aquí</p>
            </div>
        </div>
    );

};