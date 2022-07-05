export const printErr = (key, value, index) =>{
    let inputField = document.querySelector('#regForm').querySelector(`[name="${key}"]`)
    // console.log(key, value)

    let error_tag = null

    // Make input border red and check for the parent tag
    if (inputField !== null) {
      inputField.style.borderColor = 'var(--TurkishRose)';

      if (inputField.getAttribute('type') === 'radio'){
          error_tag = inputField.parentElement.parentElement.parentElement.querySelector('.error');
      }
      else if (inputField.getAttribute('type') === 'file'){
        error_tag = inputField.parentElement.parentElement.querySelector('.error'); 
      }
      else{
        error_tag = inputField.parentElement.querySelector('.error');
      }
    }

    if (error_tag) {
      error_tag.textContent = value
    }
    else{
      let span_tag = document.createElement('SPAN')
      span_tag.classList.add('error')
      span_tag.textContent = value
      span_tag.style.color = 'var(--TurkishRose)'
      span_tag.style.display = 'inline-block'
      
      if (key === "user") {
        
      }
      else if (inputField !== null){
        // console.log(inputField.parentElement)
        if (inputField.getAttribute('type') === "radio") {
          // console.log(key)
          inputField.parentElement.parentElement.parentElement.append(span_tag)
        }
        else if (inputField.getAttribute('type') === "file") {
          // console.log(key)
          inputField.parentElement.parentElement.append(span_tag)
        }
        else{
          inputField.parentElement.append(span_tag)
        }
      }
      
    }
    if (index === 0 && inputField !== null) {
      inputField.focused = true
    }
    
}


export const handleError = (status, items, registerForm, r_path) =>{
    if (status === 400){
      spinBtn(registerForm, 'none', false) // spin button: parameter >> form, display and status
      Object.entries(items).forEach((item, index)=> {
        const [key, value] = item;
        printErr(key, value, index)
      });
      document.querySelector('.server_err').style.display="none";
    }
    else if (status === 200 || status === 201 || status === 202){
      window.location.href = r_path
    }
    else{
        const serverTag = document.querySelector('.server_err')
        if (status !== 0 && status !== 401) {
            serverTag.style.display="block";
        }
        else if(status === 401){
            serverTag.style.display="block";
            serverTag.querySelector('a').innerHTML = ''
            serverTag.querySelector('h3').textContent = items.detail
        }
        spinBtn(registerForm, 'none', false)
        window.location.href = "#Duration" 
    }
}


export const fetAPI = (session, api, reqOptions, func=false) =>{

    let status = null
    fetch(api, reqOptions)
    .then(res => {
        status=res.status; 
        return res.json()
    })
    .then(
        (result) => {
            if (func === false) { // if class component
                session.setState({
                    items: result,
                    status: status
                })
            }else{// if function component
                if (status === 401) {
                    session(status)
                }
                else{
                    session(result)
                }
            }
            
            console.log(result)
            // console.log(status)
        },
        (error) => {
            console.log(error)
            if (func === false) {
                session.setState({
                    error: error
                })
            }
            else{
                session(error)
            }
            return error.message
        }
    )
}

export const checkEnv = ()=> {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "192.168.0.174" || window.location.hostname === "") {
        return "local"
    }
    else{
        return "production"
    }
}

export const loginRequired = (status) =>{
    if(status === 401 || status === null) { // Login Required
        console.log(window.location.href )
        window.location.href = `/login/?login_redirect=${window.location.pathname}`
      }
}

export const spinBtn = (form, display, status) =>{
    form.querySelector('button.submit_bt').disabled = status; // this disable the button
    form.disabled = status; // This disables the whole form via the fieldset
    form.querySelector('button .bt-spinner').style.display = display;
}

export const setCookie = (cname, cvalue, exdays) => {
  // check if cookie with same value exist
  let add_cookie = true
  if (getCookie(cname) === cvalue || 
      getCookie(cname) === null ||
      cvalue === ''
      ) {add_cookie = false}
  else{removeCookie(cname, -10)}
  
  if (add_cookie) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(`${cname}=${cvalue}; cookies was created`)
  }
  else{
    console.log(`${cname}=${cvalue}; exist in cookies`)
  }
}

export const removeCookie = (cname, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=;" + expires;
}

export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



export const customData = {
    universities: [
        "Abia State University",
        "Abubakar Tafawa Balewa University",
        "Achievers University, Owo",
        "Adamawa State University",
        "Adekunle Ajasin University",
        "Adeleke University",
        "Admiralty University of Nigeria",
        "Afe Babalola University",
        "African University of Science and Technology",
        "Ahmadu Bello University",
        "Ajayi Crowther University",
        "Akwa Ibom State University",
        "Alex Ekwueme Federal University, Ndufu-Alike",
        "Al-Hikmah University",
        "Al-Qalam University, Katsina",
        "Ambrose Alli University",
        "American University of Nigeria",
        "Anchor University, Lagos",
        "Arthur Jarvis University",
        "Atiba University",
        "Augustine University",
        "Babcock University",
        "Bauchi State University",
        "Bayero University Kano",
        "Baze University",
        "Bells University of Technology",
        "Benson Idahosa University",
        "Benue State University",
        "Bingham University",
        "Borno State University",
        "Bowen University",
        "Caleb University",
        "Caritas University",
        "Chrisland University",
        "Christopher University",
        "Chukwuemeka Odumegwu Ojukwu University",
        "Clifford University",
        "Coal City University",
        "Covenant University",
        "Crawford University",
        "Crown Hill University",
        "Delta State University, Abraka",
        "Dominican University, Ibadan",
        "Eastern Palm University",
        "Ebonyi State University",
        "Edo University",
        "Edwin Clark University",
        "Ekiti State University, Ado Ekiti",
        "Eko University of Medical and Health Sciences",
        "Elizade University",
        "Enugu State University of Science and Technology",
        "Evangel University, Akaeze",
        "Federal University of Agriculture, Abeokuta",
        "Federal University of Petroleum Resources",
        "Federal University of Technology, Akure",
        "Federal University of Technology, Minna",
        "Federal University of Technology, Owerri",
        "Federal University, Birnin Kebbi",
        "Federal University, Dutse",
        "Federal University, Dutsin-Ma",
        "Federal University, Gashua",
        "Federal University, Gusau",
        "Federal University, Kashere",
        "Federal University, Lafia",
        "Federal University, Lokoja",
        "Federal University, Otuoke",
        "Federal University, Oye-Ekiti",
        "Federal University, Wukari",
        "Fountain University, Osogbo",
        "Glorious Vision University",
        "Godfrey Okoye University",
        "Gombe State University",
        "Gombe State University of Science and Technology",
        "Gregory University, Uturu",
        "Hallmark University, Ijebu-Itele",
        "Hezekiah University",
        "Ibrahim Badamasi Babangida University",
        "Igbinedion University Okada",
        "Ignatius Ajuru University of Education",
        "Imo State University",
        "Joseph Ayo Babalola University",
        "Kaduna State University",
        "Kano University of Science and Technology",
        "Kebbi State University of Science and Technology",
        "Kings University",
        "Kola Daisi University",
        "Kwara State University",
        "Kwararafa University, Wukari",
        "Ladoke Akintola University of Technology",
        "Lagos State University",
        "Landmark University",
        "Lead City University",
        "Legacy University, Okija",
        "Madonna University, Nigeria",
        "Mcpherson University",
        "Michael and Cecilia Ibru University",
        "Michael Okpara University of Agriculture",
        "Modibbo Adama University of Technology",
        "Moshood Abiola University of Science and Technology, Abeokuta",
        "Mountain Top University",
        "Nasarawa State University",
        "Niger Delta University",
        "Nigerian Maritime University, Okerenkoko",
        "Nile University of Nigeria",
        "Nnamdi Azikiwe University",
        "Novena University",
        "Obafemi Awolowo University",
        "Obong University",
        "Oduduwa University",
        "Olabisi Onabanjo University",
        "Ondo State University of Science and Technology",
        "Osun State University",
        "PAMO University of Medical Sciences",
        "Pan-Atlantic University",
        "Paul University",
        "Plateau State University",
        "Precious Cornerstone University",
        "Redeemer's University",
        "Renaissance University",
        "Rhema University",
        "Ritman University",
        "Rivers State University",
        "Salem University",
        "Skyline University Nigeria",
        "Sokoto State University",
        "Southwestern University, Nigeria",
        "Spiritan University, Nneochi",
        "Sule Lamido University",
        "Summit University Offa",
        "Taraba State University",
        "The Technical University",
        "Umaru Musa Yar'Adua University",
        "University of Abuja",
        "University of Africa",
        "University of Agriculture, Makurdi",
        "University of Benin",
        "University of Calabar",
        "University of Ibadan",
        "University of Ilorin",
        "University of Jos",
        "University of Lagos",
        "University of Maiduguri",
        "University of Medical Sciences",
        "University of Mkar",
        "University of Nigeria",
        "University of Port Harcourt",
        "University of Uyo",
        "Usmanu Danfodio University",
        "Veritas University",
        "Wellspring University",
        "Wesley University of Science and Technology",
        "Western Delta University",
        "Yobe State University",
        "Yusuf Maitama Sule University Kano",
        "Zamfara State University",
      ],
    courses:[
        "Agricultural economics",
        "Agricultural Economics/Extension",
        "Agricultural Education",
        "Agricultural Education",
        "Agricultural Engineering",
        "Agricultural Extention",
        "Agricultural Science",
        "Agronomy",
        "Animal Production",
        "Animal Science",
        "Crop Production",
        "Crop Science",
        "Family, Nutrition And Consumer Sciences",
        "Fisheries",
        "Food Science and Technology",
        "Forestry",
        "Plant Science",
        "Soil Science",
        "Water Resources Management And Agrometerorology",
        "Automobile Engineering",
        "Biomedical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Electrical Engineering",
        "Engineering Physics",
        "Food Science and Engineering",
        "Industrial and Production Engineering",
        "Information Communication Engineering",
        "Mechanical Engineering",
        "Mechatronics Engineering",
        "Metallurgical Engineering",
        "Water Resources and Environmental Engineering",
        "Software Engineering",
        "System Engineering",
        "Petroleum Engineering",
        "Anatomy",
        "Biochemistry",
        "Human Nutrition and Dietetics",
        "Medical Laboratory Technology/Science",
        "Medicine & Surgery",
        "Nursing",
        "Optometry",
        "Radiography",
        "Pharmacy",
        "Physiology",
        "Public Health Technology",
        "Veterinary medicine",
        "Accounting",
        "Arabic",
        "Banking and Finance",
        "Business Administration",
        "Communication Arts",
        "Crimnology and Security Studies",
        "curriculum studies",
        "Demography and Social Statistics",
        "Economics",
        "English Language",
        "Entrepreneurship",
        "Fine Arts",
        "French",
        "Hausa",
        "History",
        "Home Economics",
        "Hospitality and Tourism Management",
        "Human Resource Management",
        "Igbo",
        "Insurance",
        "International Relations",
        "Islamic Studies",
        "Linguistics",
        "Marketing",
        "Mass Communication",
        "Media and Communication Studies",
        "Music",
        "Peace and Conflict Resolution",
        "Performing Arts",
        "Philosophy",
        "Political Science",
        "project management",
        "Psychology",
        "Public Administration",
        "Religious Studies",
        "Social Works",
        "Sociology",
        "Taxation",
        "Tourisim Studies",
        "Theology",
        "Yoruba",
        "Architecture",
        "Biochemistry",
        "Bio-Infomatics",
        "Biology",
        "Botany",
        "Building Technology",
        "Computer Science",
        "Cyber security Science",
        "Estate Management",
        "Chemistry",
        "Geography",
        "Geophysics",
        "Geology",
        "Human Nutrition and Dietetics",
        "Information Resource Management",
        "Information Systems",
        "Information Technology",
        "Library and Information Science",
        "Management Information System",
        "Mathematics",
        "MicroBiology",
        "Physics",
        "Plant Science",
        "statistics",
        "Urban and Regional Planning",
        "Veterinary medicine",
        "Zoology",
        "Adult Education",
        "Agricultural Education",
        "Business Education",
        "Counsellor Education",
        "Early Childhood Education",
        "Education Administration",
        "Education & Accounting",
        "Education & Arabic",
        "Education & Biology",
        "Education & Business Administration",
        "Education & Chemistry",
        "Education & Computer Science",
        "Education & Christian Religious Studies",
        "Education & Economics",
        "Education & Fine Art",
        "Education & English Language",
        "Education & French",
        "Education & Geography",
        "Education & Geography/physics",
        "Education & History",
        "Education & Integrated Science",
        "Education & Introductory Technology",
        "Education & Islamic Studies",
        "Education & mathematics",
        "Education & Music",
        "Education & Physics",
        "Education & Political Science",
        "Education & Religious Studies",
        "Education & Social Studies",
        "Education Arts",
        "Education Foundation",
        "Environmental Education",
        "Guidance and Counselling",
        "Health Education",
        "Vocational Education",
        "Special Education",
        "Law",
        "Civil Law",
        "Sharia/Islamic Law",
        "Private Law",
        "Public Law",
        "Commercial Law",
        "International Law & Jurisprudence"
    ],
    "faculties":[
        "Agriculture",
        "Engineering",
        "Medicine & Pharmacy",
        "Arts, Management & Social Science",
        "Science & Technology",
        "Education",
        "Law"
    ]
}