import StoreCredentials from "../utils/storeCredentials";
import realm from "./schema/sign";

export default async function checkUser(value, clientData) {
    switch (value) {
        case "login": {
            try {
                const credentials = await new StoreCredentials.getCredentials();

                if (credentials) {
                    console.log(credentials);
                }
            } catch (error) {
                console.log(error);
            }
        }
        case "sign": {
            try {

                const { name, street, city, email, houseNo, state, zip, phone, passwd } = clientData;
                const numZip = Number(zip);
                const numPhone = Number(phone);
                const numHouseNo = Number(houseNo);
 
                const findUser = await realm.objects("Sign").filtered(`name = ${JSON.stringify(name)}`);
                
                if(findUser.length > 0) {
                    return { status: 404, message: "The Username that you entered already exist, please choose anther one..."}
                } else {
                    await realm.write(() => {
                        realm.create("Sign", {
                            name,
                            street,
                            city,
                            email,
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