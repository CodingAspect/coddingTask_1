** My design approach covers three main goals:
1. Simplicity.
2. Easy to extend & maintain.
3. Bug-free.

** I chose to use AngularJS & jsPlumb.
AngularJS directive capabilities allows clean code and easy extensibility (for example: dragging, add/remove squares etc...)
jsPlumb seems like a nice library for making block diagram visualizations. It was pretty clear to me that this is the right library for the job.

** Difficulties along the way:
The only problem I had was with using the jsPlumb library within an AngularJS's directive.
AngularJS needs to parse (or better call it: "digest") the DOM so jsPlumb can find the elements to draw lines to/from.
I fixed it by using $timeout which is just a simple wrapper for setTimeout().