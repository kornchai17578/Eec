export default function Titile({title}) {
  return (
    <div>
      <nav className="text-sm text-[#565C6E] mb-4">
        สถานการณ์การใช้สารเคมี /{" "}
        <span className="font-semibold">{title}</span>
      </nav>

      <div className="text-center mb-4">
        <h2 className="TitleContent">{title}</h2>
      </div>
    </div>
  );
}
