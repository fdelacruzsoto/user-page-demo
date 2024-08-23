import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/lib/types/user";
import UserRow from "./components/UserRow";
import { API_URL } from "@/consts/api";

export default async function Page() {
  const data: IUser[] = await fetch(`${API_URL}/users`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>User list</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {data.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
