type Props = {
  category: string;
};

export const CategoryBadge = ({ category }: Props) => {
  return (
    <button className="inline-flex items-center h-7 rounded-md text-base whitespace-nowrap focus:outline-none hover:cursor-default bg-slate-50 text-gray-800  dark:bg-slate-700 dark:text-slate-100  ">
      <p>#{category}</p>
    </button>
  );
};
