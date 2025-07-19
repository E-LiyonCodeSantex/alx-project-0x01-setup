import React, { useState } from 'react';
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from '@/components/common/UserModal';
import { UserData, UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
   const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 bg-gray-100">
        <div className="flex wrap justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">User Directory</h1>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddUser}
          />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
