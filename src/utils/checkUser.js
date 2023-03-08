export default async function checkUser(value, clientData) {
    switch (value) {
        case "login": {
            try {
                const findUser = fetch("https://jsonplaceholder.typicode.com/users")
                const data = await findUser.json();
                for (const user in data) {
                    if (data[user].username === clientData.name) {
                        return data[user];
                    }
                }

                return false;
            } catch (error) {
                console.log(error);
            }
        }
        case "sign": {
            try {
                const findUser = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await findUser.json();
                for (const user in data) {
                    if (data[user].username === clientData.name) {
                        return true;
                    }
                }

                return false;
            } catch (error) {
                console.error(error);
            }
        }
    }
}