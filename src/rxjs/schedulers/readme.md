[< Back to root](../../../readme.md)

# Scheduler

> A scheduler controls when a subscription starts and when notifications are delivered.  It knows how to store and queue tasks based on priority or other criteria. Static creation operators usually take a Scheduler as argument. For instance, from(array, scheduler) lets you specify the Scheduler to use when delivering each notification converted from the array. It is usually the last argument to the operator. Use subscribeOn to schedule in what context will the subscribe() call happen. Use observeOn to schedule in what context will notifications be delivered.

Scheduler Types:

* null

	By not passing any scheduler, notifications are delivered synchronously and recursively.

* queueScheduler

	Schedules on a queue in the current event frame.

* asapScheduler

	Schedules on the micro task queue, which is the same queue used for promises. Basically after the current job, but before the next job.

* asyncScheduler

	Schedules work with setInterval.

* animationFrameScheduler

	Schedules task that will happen just before next browser content repaint.
