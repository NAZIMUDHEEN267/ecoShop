
import StoreCredentials from "../utils/storeCredentials";
import realm from "./schema";

export default async function checkUser(value, clientData) {
    const findUser = realm.objects("Sign").filtered(`username = ${JSON.stringify(clientData.username)}`);

    switch (value) {
        case "login": {
            try {

                // credentials are stored in keystore
                const credentialUsername = await new StoreCredentials.getCredentials();
                console.log(credentialUsername);

                if (credentialUsername) {
                    const data = realm.objects("Sign").filtered(`username = "${credentialUsername}"`)[0];

                    if (data) return { status: 200, data: Object.assign(data, { passwd: null }) }

                } else if (findUser.length > 0 && findUser[0].passwd === clientData.passwd) {
                    return { status: 200, data: Object.assign({ ...findUser[0] }, { passwd: null }) };
                } else {
                    return { status: 404, message: "Username or Password incorrect!!" }
                }

            } catch (error) {
                console.error(error);
            }
        }

            break;

        case "sign": {
            try {
                const { username, street, city, houseNo, state, zip, phone, passwd, photo } = clientData;
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
                            photo: "",
                            zip: numZip,
                            phone: numPhone,
                            passwd
                        })
                    })

                    const userData = realm.objects("Sign").filtered(`username = ${JSON.stringify(clientData.username)}`);

                    return { status: 200, data: userData[0] }
                }

            } catch (error) {
                console.error(error);
            }
        }

            break;

    }
}