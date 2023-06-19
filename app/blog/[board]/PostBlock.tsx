export default function PostBlock({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className="container mx-auto my-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mb-5 mt-4 text-gray-200">{description}</p>
      <span className="mt-1 text-sm text-gray-400">{date}</span>
    </div>
  );
}
