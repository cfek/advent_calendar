in .module file, line 9 
set your view name instead of "calendar" (isset($view) && ($view->storage->id() == 'calendar'))

the calendar itself page should have structure of 
<div class="square" id={number of the node}> data-date={day it should open at}>
<img src>
</div>

in advent_calendar.js line 27/28 set up your parsing values for the image you want to show up in the calendar

MERRY CHRISTMAS!
