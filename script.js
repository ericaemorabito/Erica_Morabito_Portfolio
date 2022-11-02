// Array of all the projects with information
const project = [tastemakers];

// Information from each project:
//title
//description
//technologies used
//github url
//deployed url
//image

const tastemakers = {
  title: 'Tastemakers',
  description: 'Webpage where users can choose between four cuisine or three dessert options. \nUser receives a list of options for recipes based on their choices.\nPresented with links, recipes, and videos.',
  technologies: ['HTML', 'CSS', 'Javascript'],
  githubUrl: 'https://github.com/ericaemorabito/taste_makers.git',
  deployedUrl: 'https://ericaemorabito.github.io/taste_makers/',
  image: './assets/images/tastemakers.png'
};


// Create new project card

const createProjects = function(projects) {
  for(let i=0; i < project.length; i++){
    //create div + class project-card
    //create p + class featured-project
    //create a + class project-title + href=deployed url
    //create div + class "project-description"
    //create p + set text to description
    // create a + href=image
  }
}