import react from "react";

function Hire({ handleAddHours, handleResetHours, handleHourlyRate, Hours  }) {
    
    return (
        <div className="mt-4 rounded-xl border-2 border-[#222222] p-8">
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                    PHP
                </span>
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">   
                $ {handleHourlyRate} per hour
                </span>
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                    {Hours} hours
                </span>
            </div>
            <div className="mt-6 flex gap-4">
                <button
                    className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
                    onClick={handleAddHours}
                >
                    Add hours
                </button>
                <button
                    className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
                    onClick={handleResetHours}
                >
                    Reset
                </button>
                <button
                    className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
                    onClick={handleHourlyRate}
                >
                    Calculate Rate
                </button>
            </div>
        </div>
    );
}   

export default Hire;
