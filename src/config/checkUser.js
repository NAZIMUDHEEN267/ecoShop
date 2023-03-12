import StoreCredentials from "../utils/storeCredentials";
import realm from "./schema";

export default async function checkUser(value, clientData) {
    const findUser = realm.objects("Sign").filtered(`username = ${JSON.stringify(clientData.username)}`);

    switch (value) {
        case "login": {
            try {
                const credentialUsername = await new StoreCredentials.getCredentials();

                if (credentialUsername) {
                    const data = realm.objects("Sign").filtered(`username = ${JSON.stringify(credentialUsername)}`)[0];

                    return {status: 200, data: Object.assign(data, {passwd: null})};
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

                    const newObj = Object.assign(realm.objects("Sign"[0]), {passwd: null});

                    return { status: 200, data:  newObj}
                }

            } catch (error) {
                console.error(error);
            }
        }
    }
}