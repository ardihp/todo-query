"use client";

import useTodo from "@/hooks/useTodo";
import React from "react";

export default function ListTodoView() {
  const { getTodo } = useTodo();
  const { data: listTodo, isLoading } = getTodo;

  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex gap-3">
        <input
          placeholder="Todo"
          className="p-2 w-[300px] border border-black rounded-xl"
        />
        <button className={`bg-black text-white px-4 rounded-xl`}>Tambah</button>
      </div>

      <hr className="h-2" />

      <div className="grid grid-cols-3 gap-6">
        {isLoading ? (
          <p>Loading data...</p>
        ) : listTodo?.length >= 1 ? (
          listTodo?.map((item: any, key: number) => (
            <div
              key={key}
              className={`flex flex-col gap-2 border-2 border-black rounded-xl p-4 h-full ${
                item?.completed ? "bg-gray-500" : "bg-transparent"
              }`}
            >
              <p className="">{item?.title}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada data yang bisa ditampilkan</p>
        )}
      </div>
    </div>
  );
}
