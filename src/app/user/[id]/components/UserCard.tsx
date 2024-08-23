import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IUser } from "@/lib/types/user";
import { Frown, MailIcon, MapIcon, SchoolIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  user: IUser;
  friends: IUser[];
};

const UserCard: FC<Props> = ({ user, friends }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.id}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        <div className="grid gap-2">
          <p className="text-muted-foreground">{user.about}</p>
        </div>
        <Separator />
        <div className="grid gap-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <SchoolIcon className="w-5 h-5" />
            <span>{user.university}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapIcon className="w-5 h-5" />
            <span>{user.adress}</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5" />
            <span>{user.email}</span>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Friends</h3>
          <div className="grid grid-cols-3 gap-4">
            {!!friends.length ? (
              friends.map((friend) => (
                <div key={user.id} className="flex flex-col items-center gap-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.id}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{friend.name}</span>
                  <Button asChild variant="secondary" size="sm">
                    <Link href={`/user/${friend.id}`}>See more</Link>
                  </Button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Frown className="w-12 h-12" />
                <span>We couldn&apos;t find any friend.</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
