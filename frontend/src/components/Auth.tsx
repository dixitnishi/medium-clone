import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import { SignupInput } from "@dixit_nishi/medium-validations";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );

      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      // send a snackbar saying request failed error
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10 text-center py-2">
            <div className="text-3xl font-extrabold">
              {type == "signin" ? "Signin to account" : "Create an account"}
            </div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Do not have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Login"}
              </Link>
            </div>
          </div>
          <div className="mt-4">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Nishi Dixit ... "
                onChange={(e) =>
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }))
                }
              />
            )}
            <LabelledInput
              label="Username"
              placeholder="random@gmail.com"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }))
              }
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="Password"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }))
              }
            />
            <button
              onClick={sendRequest}
              type="button"
              className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type == "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
