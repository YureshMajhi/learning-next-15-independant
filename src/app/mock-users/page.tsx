import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);

  const res = await fetch("https://67d13187825945773eb35d2a.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch("https://67d13187825945773eb35d2a.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    revalidatePath("/mock-users");
  }

  return (
    <div>
      <form action={addUser}>
        <input type="text" name="name" />
        <input type="submit" value={"submit"} />
      </form>
      <ul className="space-y-4 p-4">
        {users.map((user: MockUser) => (
          <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MockUsers;
