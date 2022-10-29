function NavigationBar() {
    const links = [
        { id: 1, name: "Вход/Регистрация", href: "/" },
        { id: 2, name: "Поддержка", href: "/" },
      ];
  return (
    <div className="z-50 top-0 left-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between py-6">
        <a className="text-lg" href="/">
          <b>Jyldam</b>Oqytý
        </a>
        <div className="navbar-container ">
          <div className="navbar flex items-center">
            {links.map((link) => (
              <a className="text-xs uppercase font-bold tracking-wider ml-2" key={link.id} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
// ! БОЖЕ ПЕРЕНЕСИ ЭТО УЖЕ В ПРОЕКТ 