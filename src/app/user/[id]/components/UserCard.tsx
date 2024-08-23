import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUser } from "@/lib/types/user";
import React, { FC } from "react";

type Props = {
  user: IUser;
  friends: IUser[];
};

const UserCard: FC<Props> = ({ user, friends }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8"></CardContent>
    </Card>
  );
};

export default UserCard;
