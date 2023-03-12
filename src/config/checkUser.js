import StoreCredentials from "../utils/storeCredentials";
import realm from "./schema";
console.log(realm.objects("Sign"))


export default async function checkUser(value, clientData) {
    const findUser = await realm.objects("Sign").filtered(`username = ${JSON.stringify(clientData.username)}`);
    console.log(clientData);

    switch (value) {
        case "login": {
            try {
                const credentials = await new StoreCredentials.getCredentials();

                if (credentials) {
                    return true;
                } else if (findUser.length > 0 && findUser[0].passwd === clientData.passwd) {
                    await new StoreCredentials(clientData.username, clientData.passwd).secureCredentials();
                    realm.write(() => {
                        realm.create("Login", {
                            access: true
                        })
                    })
                    return true;
                } else {
                    return false;
                }

            } catch (error) {
                console.error(error);
            }
        }
        case "sign": {
            try {
                const { username, street, city, houseNo, state, zip, phone, passwd } = clientData;
                const numZip = Number(zip);
                const numPhone = Number(phone);
                const numHouseNo = Number(houseNo);

                if (findUser.length > 0) {
                    return { status: 404, message: "The Username that you entered already exist, please choose anther one..." }
                } else {
                    realm.write(() => {
                        realm.create("Sign", {
                            username,
                            street,
                            city,
                            houseNo: numHouseNo,
                            state,
                            zip: numZip,
                            phone: numPhone,
                            passwd
                        })
                    })

                    return { status: 200 }
                }

            } catch (error) {
                console.error(error);
            }
        }
    }
}