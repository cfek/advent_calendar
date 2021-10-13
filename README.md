for the obtaining json to work you should set up REST api according to: https://buttercms.com/blog/headless-drupal-the-what-why-and-how


in .module file, line 9 
set your view name instead of "calendar" (isset($view) && ($view->storage->id() == 'calendar'))

the calendar itself page should have structure of 
div class=square id=number of the node data-date={day it should open at}
img


in advent_calendar.js:
 line 23 should be changed to the generic path to the day nodes, we add the node number with {path}

 line 27/28 set up your parsing values for the image you want to show up in the calendar

MERRY CHRISTMAS!
