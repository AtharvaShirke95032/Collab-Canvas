"use client"
import React, { use } from "react";
import EmptyOrg from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { CanvasList } from "./_components/canvas-list";

interface DashboardPageProps {
  searchParams: Promise<{ search?: string; favourites?: string }>;
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

 
  const unwrapped = use(searchParams);
  console.log("awhjdgawuydgwadgaw",unwrapped)

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
    
      {!organization ? <EmptyOrg /> : <CanvasList orgId={organization.id} query={unwrapped}/>}
    </div>
  );
};

export default DashboardPage;
