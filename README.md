# University Registrar API and React App

#### React website with C# API that allows students and administrators to keep records on courses and student enrollment.

#### By Sarah "Sasa" Schwartz, Andrew Philpott

---

## Table of Contents

1. [Description](#description)
2. [Setup/Installation Requirements](#installation-requirements)
3. [User Stories](#user-stories)
4. [Known Bugs](#known-bugs)
5. [Technologies Used](#technologies-used)
6. [License](#license)

---

<details>
  <summary>WHAT WE WORKED ON 03.25.20</summary>
  
  - Convert C# project to web API to allow access to database from React front end
  - Debugging 
  - Get React front end to show all students on /students page
  - Create form for creating student, which successfully posted a student but still has a bug that sets all the properties to null
</details>

<details>
  <summary>WHAT WE WORKED ON 03.24.20</summary>
  
  - Removed excess seeding to avoid foreign key constraint errors
  - Spend a few hours to get the students that have/have not completed courses in a specific department to show on a department view
  - Implemented authentication
  - Spent a few hours attempting authorization, but commented out work (could not get functioning)
  - Fix bug that prevent user from registering successfully
</details>

<details>
  <summary>WHAT WE WORKED ON 03.23.20</summary>
  
  - University Registrar initial set up linking courses and students with a many-to-many relationship
  - Adding in Departments with a one-to-many relationship to students and courses
  - Learning about data annotations to allow optional properties (e.g. when a student doesn't have a department yet)
  - Adding additional features of IsComplete to courses
  - Listing out courses a student is completing vs. has completed
  - Learning about seeding databases, but still struggling with seeding sequentially (are they async?)
</details>

## Description

React website with C# API that allows students and administrators to keep records on courses and student enrollment.

## Installation Requirements

- Clone the repository on Github
- Open the terminal on your desktop
- \$git clone "insert your cloned URL here"
- Change directory to the UniversityRegistrar directory, within the UniversityRegistrar.Solution directory
- \$dotnet restore
- Recreate our database structure with migration:
  - \$dotnet ef migrations add Initial
  - \$dotnet ef database update
- \$dotnet run
- The server for the data should be hosted on http://localhost:5000/
- Change directory to the university-registrar directory, within the UniversityRegistrar.Solution
- \$npm i
- \$npm start
- The server to interact with the app should be hosted on http://localhost:3000/
- Use the app at this URL in the browser!

## User Stories

- As a registrar, I want to enter a student, so I can keep track of all students enrolled at this University. I should be able to provide a name and date of enrollment.
- As a registrar, I want to enter a course, so I can keep track of all of the courses the University offers. I should be able to provide a course name and a course number (ex. HIST100).
- As a registrar, I want to be able to assign students to a course, so that teachers know which students are in their course. A course can have many students and a student can take many courses at the same time.
- As a registrar, I want to be able to create departments. A student can be assigned to a department when they declare their major and a course can be assigned to a department when it is created.
- As a registrar, I want to be able to list out all of the courses or all of the students in a particular department, so that I can inform the counselors which departments need more students and which need more courses.
- As a registrar, I want to change a student's file to show that they have completed a course, so that I can see if they need to take the course again.
- As a registrar, I want to list out all of the courses a student has taken, so that I can see if they have met their degree requirements.
- As a registrar, I want to see how many students have not completed courses in any particular departments, so that I can tell the administration which departments need help.
- As a registrar, I want to all courses on the course page and within the department pages ordered alphabetically.

## Known Bugs

- This app is still in progress

## Technologies Used

- C#
- .NET

### License

- This software is licensed under the MIT license.
