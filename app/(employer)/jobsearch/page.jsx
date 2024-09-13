"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiPlus, FiSearch } from "react-icons/fi";
import { RxDotsHorizontal } from "react-icons/rx";

// Job data array
const jobPosts = [
  {
    id: 1,
    title: "AI Research Scientist",
    createdDate: "Sep 6, 2024",
    location: "Silicon Valley, CA",
    salary: "$150,000 - $200,000/year",
    type: "Full-time",
    applicants: 20,
    status: "closed", // can be 'closed' or 'open'
  },
  {
    id: 2,
    title: "Frontend Developer",
    createdDate: "Aug 28, 2024",
    location: "New York, NY",
    salary: "$90,000 - $120,000/year",
    type: "Contract",
    applicants: 35,
    status: "open",
  },
  {
    id: 3,
    title: "Backend Developer",
    createdDate: "Aug 22, 2024",
    location: "San Francisco, CA",
    salary: "$110,000 - $140,000/year",
    type: "Full-time",
    applicants: 50,
    status: "closed",
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    createdDate: "Sep 3, 2024",
    location: "Austin, TX",
    salary: "$130,000 - $170,000/year",
    type: "Full-time",
    applicants: 12,
    status: "open",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    createdDate: "Aug 15, 2024",
    location: "Remote",
    salary: "$70,000 - $100,000/year",
    type: "Contract",
    applicants: 42,
    status: "closed",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    createdDate: "Aug 30, 2024",
    location: "Seattle, WA",
    salary: "$120,000 - $150,000/year",
    type: "Full-time",
    applicants: 18,
    status: "open",
  },
];

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Job Posts");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter job posts based on selected filter and search query
  const filteredJobs = jobPosts.filter((job) => {
    const matchesFilter =
      selectedFilter === "All Contracts" ? job.type === "Contract" : true;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="max-w-6xl mt-[22px] mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center border rounded-xl px-4">
            <FiSearch className="mr-5" />
            <input
              type="text"
              placeholder="Search job postings"
              className="outline-none text-[14px] py-1 md:w-[570px] xl:[774px] "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-7 ">
            <div className="bg-[#B2B2B51A] flex items-center gap-2 rounded-md py-[10px] px-[30px]">
              <img src="./fil.png" alt="" />
              <p>Filter</p>
            </div>
            <Link href={"/create"}>
              <button className="py-[10px] flex gap-3 items-center rounded-lg px-[30px] text-white bg-[#0097FF]">
                Post a new job <FiPlus className="text-xl text-white" />
              </button>
            </Link>
          </div>
        </div>

        {/* Filter section with clickable tabs */}
        <div className="mt-6 flex gap-3 ">
          <p
            className={`w-fit border-b-2 cursor-pointer ${
              selectedFilter === "All Job Posts" ? "border-b-2 border-blue-500 text-blue-500" : "border-b-2"
            }`}
            onClick={() => setSelectedFilter("All Job Posts")}
          >
            All Job Posts
          </p>
          <p
            className={`flex-1 border-b-2 cursor-pointer ${
              selectedFilter === "All Contracts" ? "flex-1 border-b-2 border-blue-500 text-sky-500" : "border-b-2"
            }`}
            onClick={() => setSelectedFilter("All Contracts")}
          >
            All Contracts
          </p>
        </div>

        {/* Loop through filtered job posts */}
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="mt-[70px] flex justify-between items-start shadow-md px-[30px] py-[20px]"
          >
            <div className="flex items-center gap-4">
              <div>
                <div className="size-[49px] rounded-full flex items-center justify-center text-[#FC9B00] text-[24px] bg-[#FC9B000F] border-2 border-[#FC9B000F]">
                  {job.id}
                </div>
              </div>
              <div className="leading-2" style={{ width: "300px" }}>
                <p className="font-bold leading-6 text-[24px] truncate">{job.title}</p>
                <p className="text-[14px] text-[#3C3C51]">
                  Created on {job.createdDate}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
                <img src="./loca.png" alt="" />
                <p className="text-[14px]">{job.location}</p>
              </div>
              <div className="flex items-center gap-5">
                <img src="./dollar.png" alt="" />
                <p className="text-[14px]">{job.salary}</p>
              </div>
              <div className="flex items-center gap-5">
                <img src="./case.png" alt="" />
                <p className="text-[14px]">{job.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaUser />
              <p>{job.applicants} Applicant{job.applicants > 1 && 's'}</p>
            </div>

            {/* Status: open or closed */}
            <div
              className={`w-[96px] h-[29px] flex items-center gap-3 rounded-xl px-[10px] py-[7px] ${
                job.status === "closed"
                  ? "bg-[#FF3B3026]"
                  : "bg-[#33D0AB26]"
              }`}
            >
              <div
                className={`size-[10px] rounded-full ${
                  job.status === "closed"
                    ? "bg-[#FF3B30]"
                    : "bg-[#33D0AB]"
                }`}
              ></div>
              <p
                className={`text-[14px] ${
                  job.status === "closed"
                    ? "text-[#FF3B30]"
                    : "text-[#33D0AB]"
                }`}
              >
                {job.status}
              </p>
            </div>

            <RxDotsHorizontal className="size-[32px] font-bold" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;