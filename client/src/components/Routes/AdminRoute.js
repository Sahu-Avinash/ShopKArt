import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.js";
import toast from "react-hot-toast";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      await axios
        .get("/api/v1/auth/admin-auth", {
          headers: {
            Authorization: auth?.token,
          },
        })
        .then((response) => {
          if (response.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(`Something went wrong`);
        });
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="/" />;
}
