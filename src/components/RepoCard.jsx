import React from "react";

function RepoCard({ repoName, repoDescription, stars, handleStar }) {
    return (
        <div className="rounded-xl border-2 border-[#222222] p-8">  
            <h3 className="text-2xl font-bold">{repoName}</h3>
            <p className="mt-2 text-xl">{repoDescription}</p>
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                    {stars} stars
                </span>
                <button 
                    className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
                    onClick={handleStar}
                >   
                    Star
                </button>
            </div>
        </div>
    );
}