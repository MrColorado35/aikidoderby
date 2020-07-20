# Milestone-Project
Aikido Derby website- The Milestone Project by Stan Kaczorkiewicz

This is my first project on the course of Full Stack Web Developer by Code Institute.
My aim was to create a responsive, mobile-first website, using the HTML and CSS that I have learned on the course.
The project doesn't include any back-end functionality,
so the form on my "contact" section will not send attached information anywhere (yet).


I've decided to create the website for my Aikido Derby Club.
We had the website previously (http://aikidoderby.co.uk/), but it's not responsive,
looks very outdated and doesn't work right now.
The main aim of the website is to encourage more people to join our club,
diversify our member profile by inviting more female students (as currently we only have one)
and kids (as we are planning to start a kids-only class soon).


 ## UX

My goal was to create good user-friendly experience, for people that don't know anything about Aikido yet,
But potentially would like to come and try, for example as a result of their New Year resolutions.
To ensure that my website is intuitive, I used Bootstrap's ready solutions for the website navigation.
Our club does not have any professional logo yet, so I thought that putting our name in top-left corner is a good idea,
to remained users where they actually are.

I've decided to divide my website into 5 separate pages (one or two more to come if it will be necessary),
as I believe it will be easier for the users not to get lost between the informations and pictures,
as it could happen on one long scrolling site. After all, the website is for newbies and I don't want to overwhelm them.
Also this solution provides 5 chances to find our Facebook or Instagram account links that are located in the footer.
To make the links to our social media more visually attractive, I used icons taken from https://fontawesome.com/

As the best source of information about our Club is the Facebook page, regularly updated by our sensei,
across whole page I've located quite a few ways to make it easy for users to get there.
Although if the users do not have a Facebook account for any reason,
they can still find all necessary informations about our classes, location and costs.
Also that's why I left our sensei's number in the footer,
if anyone has got a questions that our website is not answering yet.


## Features:

On the home page, I've decided to use the picture of Sensei in-motion,
presenting one of the more advanced techniques
and turn it into animation, to draw more attention of the visitors.
Underneath we've got some text-description of what aikido is,
based on the article from Wikipedia.
As it's extremely hard to work with kids in a pre-school age, I've highlighted the minimum age,
among with information that we are open to all adults that want to join us.
I've also added a short YouTube video, that is our official trailer.

The "Beginners zone" contains the quote about aikido,
then another animated picture of sensei presenting more static technique,
as I'm trying not to scare the beginners with difficulty of aikido techniques.
Another reason for choosing that picture was the only girl in our club, that is present there-
to prove our openness and to encourage more women to join us
(for some reason Martial Arts are considered as very masculine, that is not the true if we speak about Aikido).
Under the picture, there are most important details for the new members- how to get here,
When do we train and how much does it costs.
I've also left the note of how to dress, as it may not be obvious.
Our address and time of the lessons are highlighted,
as that's the most important info on whole website and main reason for people to visit it.
There's also a link to Google maps, for the people that don't know our city very well.

"Gallery" page is based on the modals, provided by Bootstrap.
Users that are parents, can find pictures of other kids on some of the photos,
so it may be encouraging to send their kids for the class as well.
All users can see examples of various techniques,
hopefully attractive enough to interest more people to come and try.
None of the pictures on the website were taken by a professional photographer, and therefore they don't look great
If I use option object-fit: cover; (and looks funny with :contain;) That's why I decided to leave it unset.

"About" section provides the picture of the founder of Aikido with some brief informations about history of Aikido
(based on Wikipedia page, again),
Under that we can find some history of our club (taken from our Facebook description,
without unnecessary, more descriptive parts, that may be interesting to more experienced learners,
but daunting for beginners- I was implementing the Idea of not overloading my website with unneeded content).

"Contact" section contains short reminder of most important information, among with the form
(that is not fully functional yet), if someone prefers that form of contact over calling or texting the Sensei.


### Existing features:
- gallery with the modals, hopefully more attractive than other ways;
- responsive design, that works and looks good on various types of equipment;
- fully functional nav panel, that adjusts to the size of the screen;


### Features Left to Implement:
- form from the contact page to send the messages straight to the sensei;
- some slow-motion videos to be embedded to the gallery page (the one I was trying to add recently does not work);
- as we've got the Club's t-shirts, it could be a good idea to provide an option of buying them through our website,
     (after I learn how to add that feature), as it will benefit the club.



## Technologies Used:

- HTML5 -            I used it to create the core of my website;

- CSS3 -             I used it to style it;

- GitHub -           Provides me the environment to work within;

- Bootstrap 4.4 -   I used it to provide responsive Navigation and the Gallery page;

- Font awesome -     They provide the icons for the links in footer section on each page,
                     also the "smiling faces" icon that I used in two other places across the page comes from there;

- jQuery -            That was used as a part of the bootstrap, to help with responsiveness of my nav-bar;


## Testing

During the process of creation of my first website, I was constantly testing it's functionality.
My main worry in this subject was to make it responsive, as many users may visit it through their phones.
I tested them manually at the first time, changing elements either in dev-tools (using Google Chrome web browser),
or straight in gitpod, where I have created whole project.

As the website is intended for people that would like to join our club, I was trying to adjust everything
to make finding us as easy as possible and not to overload website with the unnecessary content.

One of the main problems I found, was the animated picture on the main page,
that didn't work very well in Mozilla, also on larger screens than mine it didn't perform as great.
Finally I've decided to live the main picture static, as it improves overall effect on any equipment.

Another interesting issue I found while testing, was the map in Polish.
Despite the fact that I use English in my Google Chrome, somehow the Google maps was set up for Polish
and none of the changes within the browser could help to change it.
Finally I used Google maps in incognito window and that's how I was able to set it up in English.

I have run automated tests on https://validator.w3.org/ to eliminate all code issues,
and format my code at https://www.freeformatter.com/html-formatter.html to make it look nice and clear
for other developers that may ever work with it.

During the process of deployment of my website, I've slightly changed the name of my project on the GitHub.
That effects in a lot of issues with gitpod, that luckily got solved with a little help from my mentor.
I'm still trying to understand what happened and why, to avoid similar mistakes in my future projects.


## Deployment

The biggest problem with deployment of my website was an issue caused by text file "dojo-etiquette.md",
that I was trying to include as an attachment, but for some reason it did not work.
After fixing that, (and also deleting two spare files- gitignore and .yml) page is up and running.
It can be accessed by following link: https://mrcolorado35.github.io/milestone-project/


## Credit

### Content
- The text in Index, section two is partially taken from Wikipedia page https://en.wikipedia.org/wiki/Aikido
section "training"
- Also text in a first section on "about" page comes from the article above.
- Bottom section of "about" page is an essence of description on Aikido Derby Facebook page, (https://www.facebook.com/aikidoderby/)
- Quote in a "Beginners Zone" comes from https://www.goodreads.com/quotes/384630-aikido-ain-t-a-defensive-nor-offensive-martial-art-it-proactively

 ### Media
- Picture of a Sensei Founder comes from https://en.wikipedia.org/wiki/Morihei_Ueshiba
- All other pictures come from our Facebook page or has been done by myself.
- The YouTube video comes from our YouTube profile and has been made by "Sensei's Friend",
 that is mentioned in video description.

### Acknowledgement
I received an inspiration from various projects I've done as a part of the course,
i.eg. The idea of animated pictures comes from "love running" project,
      The idea for the footer comes from "Resume project" on the end of CSS part,
I also took the idea of the top navigation from https://blackrockdigital.github.io/startbootstrap-freelancer/
and then adjust it to my needs.
