import { FC } from "react";

type Props = {
  title: string;
  setTitle: (value: string) => void;
  isEditing: boolean;
  onSubmit: () => void;
};

export const TaskForm: FC<Props> = ({ title, setTitle, isEditing, onSubmit }) => (
  <div className="flex items-center mb-4 bg-gray-100 rounded-full overflow-hidden">
    <input
      className="flex-grow text-center px-4 py-2 bg-transparent focus:outline-none h-full pl-5 text-[#333333] text-base"
      placeholder="Add your task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button
      className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white px-6 py-2 text-sm font-semibold rounded-full w-25 h-10"
      onClick={onSubmit}
    >
      {isEditing ? "EDIT" : "ADD"}
    </button>
  </div>
);