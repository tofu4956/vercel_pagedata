type Props = {
  category: string;
};

export const CategoryBadge = ({ category }: Props) => {
  return (
    <button className="inline-flex items-center h-7 text-base text-gray-800 dark:text-slate-100 whitespace-nowrap bg-slate-50 dark:bg-slate-700 rounded-md  focus:outline-none hover:cursor-default  ">
      <p>#{category}</p>
    </button>
  );
};
