import React from 'react';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">

      <div className="p-4">
        <p className="text-gray-500 text-sm mb-1">
          {job.type}
        </p>

        <h3 className="text-lg font-bold mb-3">
          {job.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {job.description}
        </p>

        <Link
          to={`/jobs/${job.id}`}
          className="text-indigo-500 text-sm"
        >
          More
        </Link>
      </div>

      <div className="border-t px-4 py-3">
        <div className="flex justify-between items-center">

          <div>
            <p className="text-indigo-500 text-sm mb-2">
              {job.salary} / Year
            </p>

            <p className="text-red-600 text-sm">
              📍 {job.location}
            </p>
          </div>

          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs px-3 py-2 rounded"
          >
            Read More
          </Link>

        </div>
      </div>

    </div>
  );
};

export default JobListing;