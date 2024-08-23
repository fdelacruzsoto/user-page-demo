import { IFriends } from "./types/friends";
import { IUser } from "./types/user";

const USERS: IUser[] = [
  {
    "id": 1,
    "name": "Olivia Diaz",
    "avatar": "/avatars/avataaars-1.png",
    "email": "alamprecht0@dailymail.co.uk",
    "adress": "7th Floor",
    "about": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    "university": "Marylhurst University"
  },
  {
    "id": 2,
    "name": "Nell Grimes",
    "avatar": "/avatars/avataaars-2.png",
    "email": "cstollmeyer1@mediafire.com",
    "adress": "Room 483",
    "about": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "university": "Academy of Humanities and Economics in Lodz"
  },
  {
    "id": 3,
    "name": "Carter Jordan",
    "avatar": "/avatars/avataaars-3.png",
    "email": "odelazenne2@independent.co.uk",
    "adress": "Room 1992",
    "about": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "university": "Sudan University for Science and Technology"
  },
  {
    "id": 4,
    "name": "Cassandra Bullock",
    "avatar": "/avatars/avataaars-4.png",
    "email": "cpryell3@com.com",
    "adress": "13th Floor",
    "about": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    "university": "Iowa State University of Science and Technology"
  },
  {
    "id": 5,
    "name": "Murray Hull",
    "avatar": "/avatars/avataaars-5.png",
    "email": "jtripp4@ifeng.com",
    "adress": "Apt 805",
    "about": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    "university": "University of Luxemburg"
  }
];

const FRIENDS: IFriends[] = [
  { id: 1, friends: [2, 3, 4] },
  { id: 2, friends: [1, 3] },
  { id: 3, friends: [4] },
  { id: 4, friends: [] },
  { id: 5, friends: [2, 4] },
]

export { USERS, FRIENDS }