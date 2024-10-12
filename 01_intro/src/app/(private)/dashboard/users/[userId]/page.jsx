import GoBack from "@/components/GoBack";
import React from "react";

const UserDetail = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <h1 className="text-2xl text-center">User Detail</h1>
      <p>user- {userId}</p>
      <GoBack />
    </div>
  );
};

export default UserDetail;

export async function generateStaticParams() {
  const userArr = [1, 2, 3, 4];
  return userArr.map((userId) => ({ userId: userId.toString() }));
}
