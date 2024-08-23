import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IUser } from "@/lib/types/user";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  user: IUser;
};

const UserRow: FC<Props> = ({ user }) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src={user.avatar} alt="Avatar" />
        <AvatarFallback>{user.id}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium leading-none">{user.name}</p>
      <Button asChild variant="secondary" size="sm">
        <Link href={`/user/${user.id}`}>See more</Link>
      </Button>
    </div>
  );
};

export default UserRow;
