// bio
//
var bio = {
    "name": "Li Li",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "910-555-2243",
        "email": "li.li@gmail.com",
        "github": "ll6059",
        "location": "Austin, TX"
    },
    "biopic": "images/me.png",
    "welcomeMessage": "Welcome to my online resume!",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Photoshop",
        "Illustrator",
        "Painting",
        "Drawing"
    ]
};

var data = "%data%";

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};

// education
//
var education = {
    "schools": [{
        "name": "Middlebury",
        "location": "Middlebury, VT",
        "degree": "MA",
        "majors": ["Teaching Chinese"],
        "dates": "2011",
        "url": "http://www.middlebury.edu/"
    }, {
        "name": "University of North Carolina Wilmington",
        "location": "Wilmington, NC",
        "degree": "BA",
        "majors": ["Studio Art"],
        "dates": "2010",
        "url": "http://uncw.edu/"
    }, ],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name).replace("#", education.schools[i].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedSchoolMajors = HTMLschoolMajor.replace(data, education.schools[i].majors);
        var formattedSchoollURL = HTMLonlineURL.replace(data, education.schools[i].url).replace("#", education.schools[i].url);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajors);
        $(".education-entry:last").append(formattedSchoollURL);
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

// work
//
var work = {
    "jobs": [{
        "employer": "United World College-USA",
        "location": "Montezuma, NM",
        "title": "Chinese Teacher",
        "dates": "August 2014 - July 2016",
        "description": "Taught 5 levels of IB (International Baccalaureate Diploma) Chinese courses. Built websites for Language and Literature and Mandarin ab initio classes. Led Experiential Education program: Sustainability-Farm/Greenhouse. Initiated, led and organized Chinese Project Week and designed website for the project."
    }, {
        "employer": "Burlingame Properties",
        "location": "Burlingame, CA",
        "title": "Localization Specialist",
        "dates": "October 2013 - July 2014",
        "description": "Localized content using WordPress online application, reviewed and entered data. Worked	closely with the client, web developers and other translators."
    }, {
        "employer": "Cary Academy",
        "location": "Cary, NC",
        "title": "Chinese Teacher",
        "dates": "July 2012 - June 2013",
        "description": "Taught 4 levels of Mandarin Chinese (from novice to advanced level). Organized and coordinated annual Chinese exchange program. Led Chinese exchange trip."
    }, {
        "employer": "Monterey Institute of International Studies",
        "location": "Monterey, CA",
        "title": "Chinese Instructor (9-week language program)",
        "dates": "March 7, 2011 - May 9, 2011",
        "description": "Taught advanced Chinese with the focus on listening and reading skills. Applied communication-orientated instruction. Developed self-assessment, weekly and final achievement tests."
    }]
};

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var fromattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:first").append(formattedEmployer + formattedWorkTitle);
        $(".work-entry:first").append(fromattedWorkLocation);
        $(".work-entry:first").append(formattedWorkDates);
        $(".work-entry:first").append(formattedWorkDescription);
    }
};

// projects
//
var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "October 2016",
        "description": "This project is designed to use HTML and CSS to build and develop a responsive portfolio website. A design mockup was provided as a standard requirment for this project.",
        "images": ["images/project-1-1.png"]
    }, {
        "title": "Online Resume",
        "dates": "November 2016",
        "description": "This project is designed to use JavaScript to build a dynamic resume with ongoing updates and improvments.",
        "images": ["images/project-1-2.png"]
    }]
};

projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (k = 0; k < projects.projects[i].images.length; k++) {
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[k]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

// function inName(name){
// 	console.log(name);
// 	var newName = name;
// 	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
// 	return newName;
// };

bio.display();
education.display();
work.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);