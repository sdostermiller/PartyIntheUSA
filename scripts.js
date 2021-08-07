
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
        searchGiphy(holidayName);
        
    
}

function searchGiphy(holidayName){
    giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=Rs6kIJSSWLPLTRWuQv4dp68PUvDU4iLR&q=${holidayName}&limit=25&offset=0&rating=g&lang=en`;
    weirdAPI = `https://api.giphy.com/v1/gifs/translate?api_key=Rs6kIJSSWLPLTRWuQv4dp68PUvDU4iLR&s=${holidayName}&int=10`



async function fetchImg() {
    let response = await fetch(giphyAPI);
    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
       
    }
    console.log(response);
    let data = await response.json();
    holidayImageUrl = data.data;   
    let randomImage = holidayImageUrl[Math.floor(Math.random() * holidayImageUrl.length)];
    let randomImageUrl = randomImage.images.fixed_height.url;

    const giphyImage = document.getElementById("giphyimage");
        let insertImage = document.createElement('img');
        insertImage.src = `${randomImageUrl}`;
        giphyImage.appendChild(insertImage);


        }

        fetchImg();


} 
   
