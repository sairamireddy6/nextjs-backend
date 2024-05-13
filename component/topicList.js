"use client"
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { Fragment } from "react";

const TopicList = () => {
    let { data, status, isLoading,error } = useQuery({
        queryKey: ["topics"],
        queryFn: () => fetch("/api/topics").then((response) =>response.json()),
      });
    console.log(data, status, isLoading,error);
  return (
    <Fragment>
        {data && data?.topic?.map((res) =>(
        <div className="p-3" key={Math.random()}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {res.title}
            </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {res.description}
            </p>
            <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
            Delete
            </a>
            <Link
            href="/edit/123"
            className="inline-flex items-center ms-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Edit
            </Link>
        </div>
        </div>
        ))}
    </Fragment>
  );
};

export default TopicList;
