import { IUser } from "@/lib/types/user";
import { API_URL } from "@/consts/api";
import { IFriends } from "@/lib/types/friends";
import UserCard from "./components/UserCard";

export default async function Page({ params }: { params: { id: number } }) {
  // Get the user data
  const userData: IUser = await fetch(`${API_URL}/user/${params.id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  // Get the friends list
  const friendsList: IFriends = await fetch(`${API_URL}/friends/${params.id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  // Group the requests to get the friends data so that we can execute them in parallel
  const promises = friendsList.friends.map((friend) =>
    fetch(`${API_URL}/user/${friend}`, {
      cache: "no-store",
    }).then((res) => res.json() as Promise<IUser>)
  );

  const friendsData = await Promise.all(promises);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserCard user={userData} friends={friendsData} />
    </main>
  );
}
