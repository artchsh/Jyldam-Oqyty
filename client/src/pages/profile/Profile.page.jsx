import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../../firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'
import NavigationBar from '../../components/NavigationBar.component'

export default function Profile () {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const [tab, setTab] = useState('')
  const navigate = useNavigate()
  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, 'users'),
        where('uid', '==', user?.uid)
      )
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }
  }
  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/ ')
    fetchUserName()
  }, [user, loading])
  return (
        <>
            {' '}
            <NavigationBar />
            <div className='justify-center align-center flex'>
                <div className='mt-5 flex flex-row p-4 rounded bg-gray-100 dark:bg-black border border-transparent dark:border-gray-700 transition-transform transform w-96 max-w-3xl'>
                    <div className='mr-5'>
                        <ul>
                            <li>
                                <button className='mb-3 text-gray-300 hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full' onClick={() => setTab('profile')}>Профиль</button>
                            </li>
                            <li>
                                <button className='mb-3 text-gray-300 hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full' onClick={() => setTab('security')}>Безопасность</button>
                            </li>
                            <li>
                                <button className='mb-3 text-gray-300 hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full' onClick={() => setTab('subscriptions')}>Подписки</button>
                            </li>
                        </ul>
                        <button className='mb-3 text-gray-300 hover:bg-red-800 bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full' onClick={logout}>
                            Выйти
                        </button>
                    </div>
                    <div><div className='bg-gray-800 h-full rounded mr-5' style={{ width: 1 }}></div></div>
                    <div className=''>
                        <div>
                          {tab === 'profile' &&
                          <>
                            <h1 className='text-xl font-bold'>Профиль</h1>
                            <div>
                              Вы вошли как -<div>{name}</div>
                              <span>{user?.email}</span>
                            </div>
                          </>
                          }
                          {tab === 'security' &&
                          <>
                            <h1 className='text-xl font-bold'>Безопасность</h1>
                          </>}
                          {tab === 'subscriptions' &&
                          <>
                            <h1 className='text-xl font-bold'>Подписки</h1>
                          </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
