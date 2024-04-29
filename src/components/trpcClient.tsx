"use client";

import { trpc } from "@/app/_trpc/client";

const TrpcClient = () => {
  const { data } = trpc.getUser.useQuery();


  return (
    <div className="py-20 border">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Get TRPC Data in Client site
        </h1>
        <p className="text-xl font-medium text-center">
          Name: {data?.fullName ? data.fullName : "User Name"}
        </p>
        <p className="text-xl font-medium text-center">
            Email: {data?.email ? data?.email :  "User Email"}
        </p>
      </div>
    </div>
  );
};

export default TrpcClient;
