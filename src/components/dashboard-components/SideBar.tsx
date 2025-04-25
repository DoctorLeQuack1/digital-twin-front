


export const SideBar = () => {

    const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.random()}`;
    const user_full_name = localStorage.getItem('UserName') + " " + localStorage.getItem('UserLastName');
    return (
        <div className="flex flex-col w-full h-full justify-between items-center p-4">
            <div className="flex flex-col justify-center items-center p4 gap-2">
                <h1 className="text-2xl text-white mb-5 mt-5">WOLFQUEST</h1>
                <img className="h-40 w-40 p-4 border-8 rounded-full bg-blue-950" src={avatarUrl} alt="avatarPerson" />
                <h1 className="text-2xl text-white">{user_full_name}</h1>
            </div>
        </div>
    );
};