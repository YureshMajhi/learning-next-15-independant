import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="bg-blue-700">This is product Section</h2>
      {children}
    </div>
  );
};

export default layout;
