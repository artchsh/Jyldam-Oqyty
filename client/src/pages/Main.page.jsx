import { Link } from 'react-router-dom';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import FolderListRendering from '../components/FolderListRendering.component';
import NavigationBar from '../components/NavigationBar.component';
import axios from 'axios';

function Main() {
  // TODO Нужно поменять чтобы эти папки появлялись в завимости от доступа пользователя (от уровня доступа и какие айди есть)
    const folders = [
        { id: 1, name: 'Подготовка к ЕНТ', href: '/snt' },
        { id: 2, name: 'Подготовка в НИШ/КТЛ', href: '/nis' },
    ];

    // TODO 
    const isAuthenticated = useIsAuthenticated()
    const auth = useAuthUser()

    if(isAuthenticated) {
      // auth().login etc.into menu bar
      // auth().courses => push each cource to const folders for list rendering
    }
    return (
        <div>
            <NavigationBar />
            <div className='h-screen'>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 undefined'>
                    <div className='pt-16 pb-12'>
                        <h1 className='font-bold text-3xl mb-2'>
                            Новый этап в образовании?
                        </h1>
                        <p className='text-xl text text-gray-500'>
                            Здесь вы можете найти всё, что вашей душе угодно
                        </p>
                    </div>
                </div>
                <div className='my-8'>
                    <div className='max-w-5xl mx-auto px-4 sm:px-6 undefined'>
                        <h2 className='font-bold uppercase text-xs tracking-widest opacity-50 mb-6'>
                            Направления
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6'>
                            <FolderListRendering array={folders} />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800 py-4'>
                    <div className='flex flex-col text-center sm:flex-row flex-wrap justify-between items-center text-sm -mx-2'>
                        <Link to='/' className='m-2'>
                            2022-2023 © artchsh
                        </Link>
                        <Link to='/contributors'>Разработчики сайта</Link>
                        <Link className='m-2' to='/donate'>
                            Поддержите нас ❤️
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
