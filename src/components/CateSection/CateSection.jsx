const CateSection = () => {

    return (
        <div className="max-w-[1000px] mx-auto">
            <div className="text-center pt-24 pb-16">
                <p className='font-lobster text-2xl text-[#eb0029]'>Best Categories Menu</p>
                <h3 className='text-4xl font-bold'>Our Best Categories Menus</h3>
            </div>
            <div className="grid grid-cols-6">
                <div className="grid justify-center gap-4 px-8 border border-dashed border-r-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='b.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
                <div className="grid justify-center gap-4 px-8 border border-dashed border-x-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='c.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
                <div className="grid justify-center gap-4 px-8 border border-dashed border-x-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='d.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
                <div className="grid justify-center gap-4 px-8 border border-dashed border-x-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='e.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
                <div className="grid justify-center gap-4 px-8 border border-dashed border-x-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='f.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
                <div className="grid justify-center gap-4 px-8 border border-dashed border-l-[#010f1c] border-transparent content-between">
                    <img className="w-full mx-auto" src='a.png' alt="" />
                    <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">PepsiCo</h6>
                </div>
            </div>
        </div>
    );
};

export default CateSection;