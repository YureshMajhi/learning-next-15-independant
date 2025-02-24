import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <h2>Product: {id}</h2>
    </div>
  );
};

export default page;
