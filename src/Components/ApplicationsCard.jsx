import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";  
import { FaStar } from "react-icons/fa";

const ApplicationsCard = ({ application }) => {
    const { title, image, downloads, ratingAvg } = application;

    
    const formatDownloads = (num) => {
        return num >= 1000000 ? (num / 1000000).toFixed(0) + 'M' : num;
    };

    return (
        <div className="card bg-white w-64 shadow-md rounded-xl overflow-hidden p-3 border border-gray-100 mb-2">
            
            <figure className="rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-44 w-full object-cover bg-gray-200"
                />
            </figure>

            
            <div className="mt-3 space-y-3">
                <h2 className="text-sm font-bold text-slate-800 leading-tight h-10 line-clamp-2">
                    {title}
                </h2>
                
                <div className="flex flex-row justify-between items-center">
                    
                    <div className="flex items-center gap-1 bg-green-50 text-green-500 px-2 py-1 rounded-md text-xs font-semibold">
                        <MdOutlineFileDownload size={14} />
                        {formatDownloads(downloads)}
                    </div>

                    
                    <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs font-semibold">
                        <FaStar size={12} />
                        {ratingAvg.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationsCard;