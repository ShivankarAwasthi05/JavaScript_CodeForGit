const languages=["Radha","RadhaRani","Shriji","ShyamaShyam"];
// languages.forEach( function (lang){console.log(lang)});

// languages.forEach((langs) =>{console.log(langs)});

// function printme(item){
//     console.log(item);
// }

// languages.forEach(printme);

languages.forEach((langs,index,arr) =>{
    console.log(langs,index,arr);
})

//Arrays contains object;
const myCoding=[
    {
        languageName:"JavaScript",
        LanguageFileName:"JsForGit",
        LanguageFeatures:"CDN"
    },{},{},{}
]
myCoding.forEach((langs) =>{
    console.log(langs.LanguageFileName);
})
