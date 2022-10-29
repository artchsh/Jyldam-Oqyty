import FolderListRendering from "../components/FolderListRendering.component";
import NavigationBar from "../components/NavigationBar.component";

function Main() {
  const folders = [
    { id: 1, name: "Подготовка к ЕНТ", href: "/" },
    { id: 2, name: "Подготовка в НИШ/КТЛ", href: "/" },
  ];
  return (
    <div>
      <NavigationBar />
      <div className="h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 undefined">
          <div className="pt-16 pb-12">
            <h1 className="font-bold text-3xl mb-2">
              Новый этап в образовании?
            </h1>
            <p className="text-xl text text-gray-500">
              Здесь вы можете найти всё, что вашей душе угодно
              </p>
          </div>
        </div>
        <div className="my-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 undefined">
            <h2 className="font-bold uppercase text-xs tracking-widest opacity-50 mb-6">
              Направления
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              <FolderListRendering array={folders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
