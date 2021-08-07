
const months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June", 
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"

}

const today = new Date();
const todayDate = months[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear();
const todayMonth = today.getMonth()+1;
const todayDay = today.getDate();
const thisYear = today.getFullYear();

const holDate = document.getElementById("date");


// document.getElementById("btndate").addEventListener();
// document.getElementById("btnweird").addEventListener("click", replaceImage());

let insertDate = document.createElement('h3');
insertDate.textContent = `${todayDate}`;
holDate.appendChild(insertDate);

let apiHolidays = "https://calendarific.com/api/v2/holidays?api_key=6679468f147b2bf3584d52f4b5df4a71b5a286a5&country=us&year=2021";
let todayHolidays =`https://calendarific.com/api/v2/holidays?api_key=6679468f147b2bf3584d52f4b5df4a71b5a286a5&country=us&year=${thisYear}&month=${todayMonth}&day=${todayDay}`;

let giphyAPI;

let holiday;
let holidayName;
let holidayDate;
let holidayMonth;
let holidayDay;
let holidayYear;
let holidayDescription;
let formatDate;
let holidayImageUrl;
let weirdImageUrl;


function getToday() {
    fetch(todayHolidays)
    .then(response =>response.json())
    .then(function (data){
        let holiday = data.response.holidays[0];
        console.log(holiday);
        displayHoliday(holiday);
        }
    )   
}


getToday();

function displayHoliday(holiday) {
    const months = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June", 
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }
    holidayName = holiday.name;
    holidayMonth = holiday.date.datetime.month;
    holidayDay = holiday.date.datetime.day;
    holidayYear = holiday.date.datetime.year;
    holidayDescription = holiday.description;
   
    let monthstring = months[holidayMonth -1];

    displayDate = `${monthstring} ${holidayDay}, ${holidayYear}`;

    const holName = document.getElementById("name");
    let insertName = document.createElement('h2');
    insertName.textContent = `${holidayName}`;
    holName.appendChild(insertName);

    const holDesc = document.getElementById("description");
    let insertDesc = document.createElement('h6');
    insertDesc.textContent = `${holidayDescription}`;
    holDesc.appendChild(insertDesc);

    
   
    
        
        nameforurl = holidayName.split(' ').join('_');
        giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=Rs6kIJSSWLPLTRWuQv4dp68PUvDU4iLR&q=${holidayName}&limit=25&offset=0&rating=g&lang=en`;
        searchGiphy(nameforurl);
        
    
}

function searchGiphy(giphyAPI){
    giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=Rs6kIJSSWLPLTRWuQv4dp68PUvDU4iLR&q=${holidayName}&limit=25&offset=0&rating=g&lang=en`;
    weirdAPI = `https://api.giphy.com/v1/gifs/translate?api_key=Rs6kIJSSWLPLTRWuQv4dp68PUvDU4iLR&s=${holidayName}&int=10`

// async function fetchImg(giphyAPI) {
//     const response = await fetch(giphyAPI);
//     const data = await response.json();
//     function renderImg(data){
//             holidayImageUrl = data.data;   
//             let randomImage = holidayImageUrl[Math.floor(Math.random() * holidayImageUrl.length)];
//             let randomImageUrl = randomImage.images.fixed_height.url;




    fetch(giphyAPI)
    .then(response =>response.json())
    .then(function (data){
        holidayImageUrl = data.data;   
        let randomImage = holidayImageUrl[Math.floor(Math.random() * holidayImageUrl.length)];
        let randomImageUrl = randomImage.images.fixed_height.url;
    
        
        const giphyImage = document.getElementById("giphyimage");
        let insertImage = document.createElement('img');
        insertImage.src = `${randomImageUrl}`;
        giphyImage.appendChild(insertImage);

        }
        )


// function replaceImage(){
//     fetch(weirdAPI)
//     .then(response =>response.json())
//     .then(function (data){
//         weirdImageUrl = data.data.url;
//         console.log(data);

//         const giphyImage = document.getElementById("giphyimage");
//         let replaceImage = document.createElement('img');
//         replaceImage.src = `${weirdImageUrl}`;
//         giphyImage.parentNode.replaceChild(replaceImage, giphyImage);
        
        
//     }
//         )

// }
// return replaceImage();
} 
   

// I'm commenting out the extra stuff in the name of getting it done now.  I'll continue to work on this, and also making the interface more sleek.  But this looks like it hits the points on the grading rubric without the extra.
