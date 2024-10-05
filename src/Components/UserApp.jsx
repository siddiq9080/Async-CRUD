import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

import {
  readUserDataApi,
  createUserDataApi,
  deleteUserDataApi,
  editUserDataApi,
} from "./api/UserApi";
import Banner from "./Banners/Banner";
import Footer from "./Banners/Footer";

function UserApp() {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);

  const addUser = async (formDetails) => {
    try {
      setLoading(true);
      const user = await createUserDataApi(formDetails);
      setUsers([...users, user]);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadAllData = async () => {
    try {
      setLoading(true);

      const user = await readUserDataApi();
      setUsers(user);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const loadEditData = (pdData) => {
    setEditData(pdData);
  };

  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const deleteRes = await deleteUserDataApi(id);
      setUsers(users.filter((user) => user.id !== deleteRes.id));
    } catch (error) {
      throw new Error(error.message);
    }
    setLoading(false);
  };

  const editUser = async (formState, id) => {
    try {
      const edituserData = await editUserDataApi(formState, id);
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, ...edituserData } : user
        )
      );
      setEditData(null);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-custom">
      {loading && <Loader />}

      <Banner />
      <UserForm addUser={addUser} editUser={editUser} editData={editData} />
      <div className="row g-3 py-5">
        <h1 className="text-3xl md:text-5xl text-center font-bold my-4">
          Users Deatils :{" "}
        </h1>
        {users.map((user) => (
          <div className="col-md-4 " key={user.id}>
            <UserCard
              {...user}
              loadEditData={loadEditData}
              deleteUser={deleteUser}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default UserApp;
