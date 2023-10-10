"use client";
import { useGetUsersQuery } from "@/redux/services/users/userApi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "@/redux/features/count/counterSlice";

export default function Home() {
  // Use useGetUsersQuery to test RTK query integration

  // const data = useGetUsersQuery()
  // console.log("data from RTK----------------", data)

  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <main className="max-w-5xl mx-auto p-5">
      <div className="mb-16 text-center">
        <h4 className="mb-4">{count}</h4>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-4"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
