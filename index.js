const axios = require("axios");

// async function main() {
//     const response = await axios.get("https://dummyjson.com/todos");
//     console.log(response.data.todos.length);
// }

//https://httpdump.app/inspect/5b2e9384-2403-47a4-8628-772ec306a1ad to test 
//POST
async function main() {
    //const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851");
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/5b2e9384-2403-47a4-8628-772ec306a1ad?a=b",
            method: "post",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "savita",
            }
        },
    );
    console.log(response.data);
}

main();

//axios vs fetch

// POST
// async function main(){
//     const response = await fetch(
//         "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
//        // "https://jsonplaceholder.typicode.com/posts/1",
//         {
//             method: "POST",
//             body: {
//                 username: "savita",
//                 password: "1234567"
//             },
//             headers: {
//                 "Authorization": "Bearer 123"
//             }
//         },
//     );
//     const textualData = await response.text();
//     console.log(textualData);
// }

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const json = await response.json();
//     console.log(json.todos.length)
// }

//fetch
// function main(){
//     //fetch("https://sum-server.100xdevs.com/todos")
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(async response => {
//         const json = await response.json();
//         console.log(json);
//         console.log(json.todos.length);
//        // const json =  response.json();
//        // console.log(json);  // o/p - Promise { <pending> } if not use await
//       })
// }



