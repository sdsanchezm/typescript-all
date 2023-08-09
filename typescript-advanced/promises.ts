import axios from "axios";

(async () => {
    function delay(time: number) {
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("string");
            }, time);
        });
        return promise;
    }

    function getItems() {
        const promise = axios.get("https://api.escuelajs.co/api/v1/products/1");
        return promise;
    }

    async function getItemsAsync() {
        const data1 = await axios.get(
            "https://rickandmortyapi.com/api/character/1");
        return data1.data;
    }

    console.log("===".repeat(11));
    const response1 = await delay(4000);
    console.log(response1);

    console.log("===".repeat(11));
    const products1 = await getItems();
    console.log(products1.data);

    const products2 = await getItemsAsync();
    console.log(products2);
})();
