import Menu from './Menu';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="my-10 grid grid-cols-[1fr,minmax(auto,200px),min(860px,100%),1fr] gap-x-4">
        <div className="col-start-2">
          <Menu />
        </div>

        <div className="col-start-3 space-y-6">
          <div className="rounded-xl bg-black p-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
