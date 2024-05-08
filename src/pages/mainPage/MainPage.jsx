import { useState } from 'react';

export function MainPage() {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const [usersList, setUsersList] = useState([]);


    function createUser(e) {
        e.preventDefault();


        if (user.name === '') {
            alert('Введите ваше имя');
            return
        }
        if (user.username === '') {
            alert('Введите ваш username');
            return
        }
        if (user.email === '') {
            alert('Введите ваш email');
            return
        }
        if (user.phone === '') {
            alert('Введите ваш номер телефона');
            return
        }

        const test = {
            name: user.name.trim(),
            username: user.username.trim(),
            email: user.email.trim(),
            phone: user.phone.trim(),
            website: user.website.trim(),
        }
        setUsersList([...usersList, test]);
        setUser({
            name: '',
            username: '',
            email: '',
            phone: '',
            website: ''
        })

        console.log(test)


    }


    function change(e) {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
}


    function deleteAll(){
        setUsersList([])
    }

    function deleteUser(index){
        const oneUser = [...usersList];
        oneUser.splice(index, 1)
        setUsersList(oneUser)
    }

    return (
        <div>

            <h1>Main Page</h1>
            <form onSubmit={createUser} onReset={deleteAll}>
                <input type="text" placeholder="name" name="name" value={user.name} onChange={change}/>
                <input type="text" placeholder="username" name="username" value={user.username} onChange={change}/>
                <input type="text" placeholder="email" name="email" value={user.email} onChange={change}/>
                <input type="number" placeholder="phone" name="phone" value={user.phone} onChange={change} />
                <input type="text" placeholder="website" name="website" value={user.website} onChange={change}/>
                <button>создать</button>
                <button type='reset'>очистить таблицу</button>
            </form>

            {usersList.length <= 0 && <h4>таблица пуста</h4>}

            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
                </thead>

                <tbody>


                {usersList.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td><button onClick={() => deleteUser(index)}>удалить</button></td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
  );
}