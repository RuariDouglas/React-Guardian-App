# Guadian Lite React News App
A react news app utilising the Guardian News and Open Weather Map API hosted on firebase.
https://the-guardian-app-faeb0.web.app/

## About the Build
Besides enjoying the content, I found the Guardians extensive documentation and support a great resource to use for this project. The idea was to create a 'Lite' version of the Guardian's current website, displaying predominantly just the headlines for each category with built-in search functionality, user authentication and CRUD functionality for comments on articles.

The tools I used for this were React, Redux (with local storage), Thunk, HTML, SCSS, JS, alongside Firebase (Firestore, Authentication & hosting) for the backend.

### Functionality
##### Sections
From index, you are presented with around 20 headline articles from varying sections pulled from the Guardian's API. There is a weather app featured in the left column pulling data from the Open Weather Map API with a search input included allowing you to search for weather in your area.
The remaining sections operate similarly minus the weather app.

##### Articles
When clicked, the article should pop up in a modal window within the page you are on. At the bottom of each article there is a comments section, once signed up or logged in, you are able to make comments, edit or delete them. 

##### Misc
Other features include the search bar which searches the Guardian API and returns the most relevant results and a 404 page to catch any incorrect path requests.

### Style
I really like the original design and wanted to retain a lot of the aesthetic so I found the Guardian's style guide and used this to establish colour schemes and layout ideas. Whilst the original site uses almost only serif fonts, I introduced some sans-serif for body text and smaller captions to give it a slightly more modern feel. The project was completely custom built with the exception of icons imported from MaterialUI. I defined grid layouts which resemble those of the Guardians', making this fully responsive on every device. 

For styling I seperated my stylesheets based on components, using the BEM methodology for the majority of the app (a couple of components were originally created using styled components).

Towards the end Framer motion was added to give some fluidity to the page transitions. 

### Areas of development
Having finished this project, here are some key areas I feel I've developed in:
- Making API calls, storing and manipulating response data.
- Redux, setting up action creators and using local storage to persist state.
- Authentication, understanding the fundamentals of authentication.
- Components, passing state and props to render.
- Firebase, having completed a course on Firestore & Firebase Auth.
- CSS grid.
- JS Regex. 


