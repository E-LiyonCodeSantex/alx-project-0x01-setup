import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-blue-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500 text-sm mt-2">{phone}</p>
      <a href={`https://${website}`} className="text-blue-500 underline text-sm" target="_blank">{website}</a>

      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Address:</strong> {address.street}, {address.city}</p>
        <p><strong>Company:</strong> {company.name}</p>
        <p className="italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
