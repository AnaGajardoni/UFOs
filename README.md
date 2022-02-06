# Overview
Dana is a data journalist and UFO enthusiast who wants to build a wesbsite allowing searches of all UFO sightings. She has some data to start and she decides to put together a website in which users will filter past sightings by date, location (city, state and country) as well as the object shape. To start such project, she got a list of over 100 sightings organized in a javascript list-format, in which each element holds the information of one sighting.

# Results
We built a simple, but effective web application to load the data and search it according to user's selections. 

## The visible side of the application
- The application consists of:
  - A list of sightings;
  - Input controls that allow the user to make selections.

When the application is first opened, the complete list of sightings will show allowing the user to have a broader look at the data. On the left, there will be input controls allowing the user to make his own selections, thus seeing the filtered results right away. The application gives the option to filter on date, location (city, state and country) and shape of the object seen.

When the application is opened, the complete list is shown:

![Application_start](/static/images/Application_start.jpg)

![Application_start_complete_list](/static/images/Application_start_complete_list.jpg)


When the user makes a selection, let's suppose 'ca' for California, the sightings list is automatically refreshed:

![Application_search_california](/static/images/Application_search_california.jpg)

In a subsequent selection, for 1/1/2010 as the date of the event, the list is refreshed once again:

![Application_search_california_1_1_2010](/static/images/Application_search_california_1_1_2010.jpg)

In one more selection, the shape of the object was selected as 'triangle', making the query (california, 1/1/2010, triangle):

![Application_search_california_1_1_2010_triangle](/static/images/Application_search_california_1_1_2010_triangle.jpg)






## What happens behind the scenes?
The application is a small set of HTML, CSS and Javascript files.

### HTML
There is only one HTML file: ***index.html***. It was built in such a way that it refreshes the sighting list every time there is a change in the input controls - without reloading the page itself (this is made possible by the Javascript described below). This HTML file calls our own CSS files as well as bootstrap, making the application responsive to different devices and producing a much cleaner code.

### Javascript
To make the HTML input controls work, a Javascript file ***(app.js)*** provides the "dynamic" behaviour of the application. In a nutshell, when this script is run, it:
1. Fills the sightings table for the first time;
2. Sets event handlers to input controls making them respond to any change;
3. Creates the code (functions) that will generate the new (filtered) list.

Step 1. is for ***data*** initialization of the page, Step 2. is for ***control*** initialization setting controls' behaviour and, lastly, Step 3. is the code that actually makes the search and displays the filtered data according to the selections whenever an input control has any change.

# Summmary
Evem though the application successfully filters data and sends it to the page, I would recommend a few improvements:
- In order to make the filter more effective, I would suggest changing them to "less" flexible controls. In an input text, the user can type anything, leaving room for spelling mistakes, for instance. If city, state and country were substituted by dropdown controls, for example, the user would know what places he could choose;
- Another improvement would be to tie city, state and country. It makes no sense to select 'boca raton' as city and 'ca' as state. Since every time the user changes the content of an input, the data is filtered again, the application keeps filtering data over and over - even when it does not make any sense.
- The date field should be treated accordingly: since it is stored as string, if the user types "1/9/2010", nothing will show up, but "1/09/2010" will. This should not happen!
- Creating buttons to clear the input controls and to submit the query might be a good idea as well: the first one would make the user experience better in case a brand-new search is requested and the second one might avoid a lot of "in-between" searches and the user selects a few criteria for the search.
