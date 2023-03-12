import StoreCredentials from "../utils/storeCredentials";
import sign from "./schema/sign";
import login from "./schema/login";


export default async function checkUser(value, clientData) {
    const findUser = await sign.objects("Sign").filtered(`username = ${JSON.stringify(clientData.username)}`);

    switch (value) {
        case "login": {
            try {
                const credentials = await new StoreCredentials.getCredentials();
                if (findUser.length > 0 && findUser[0].passwd === clientData.passwd) {
                    await new StoreCredentials(clientData.username, clientData.passwd).secureCredentials();
                    login.write(() => {
                        login.create("Login", {
                            access: true
                        })
                    })
                    return true;
                } else if (credentials) {
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
                    sign.write(() => {
                        sign.create("Sign", {
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

                    console.log(await sign.objects("Sign"));
                    return { status: 200 }
                }

            } catch (error) {
                console.error(error);
            }
        }
    }
}