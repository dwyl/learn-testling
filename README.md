Learn Testling CI  [Work in Progress!!]
=================

Testling is Substack's answer to SauceLabs

## Can we test using QUnit (with QUnit-TAP) on Testling?

While I managed to get the tests working in the browser:
https://learn-testling.herokuapp.com/  
following the **Custom Libraries** instructions: https://ci.testling.com/guide/custom_libraries

Sadly, I could not get the **Web Hook** to work on GitHub!


I posted a question to StackOverflow: http://stackoverflow.com/questions/30310409/how-do-i-setup-testling-ci-with-qunit-qunit-tap

And tweeted it to Substack: https://twitter.com/nelsonic/status/600368503401664512


Given that this is a **known issue**: https://github.com/substack/testling/issues/88
I'm not going to hold my breath on it.


> Come back to this if we get any reply on StackOverflow, Twitter or GitHub! until then, SauceLabs...

## Note

To run this project you will need to sign up to **Browserling**:
https://www.browserling.com/  
at the time of writing the API is available by invite.
Once you've registered, send browserling an email to get access.

![browserling-live-api-email-reply](https://cloud.githubusercontent.com/assets/194400/7678534/cb346b82-fd4c-11e4-899d-6736556a2d23.png)


## Environment Variables

```sh
export BROWSERLING_EMAIL=
export BROWSERLING_PASSWORD=
```


<br />
<br />

# tl;dr

> Currently getting the following error while trying to run **testling** CLI locally:

![Testling TypeError](http://i.imgur.com/VsSdwWv.png)

> Submitted issue: https://github.com/substack/testling/issues/82
> Sent tweet to @substack: https://twitter.com/nelsonic/statuses/469425224770146304


[![browser support](https://ci.testling.com/nelsonic/learn-testling.png)
](https://ci.testling.com/nelsonic/learn-testling)

Quick intro to Testling CI (Cross Browser Testing)

If you've never heard of testling (or been *too busy* to try it out)
in the next 10 minutes you will learn everything you need to get started.

### What is Testling?

[Tesling][] is an automated browser testing tool (brother of [Browserling][])
that lets you "***run your browser tests on every push***".

Testling will not *magically* make your app work in all browsers. :tired_face: <br />
You will still need to write (unit) tests, Testling will run them for you
in any browser you specify in your package.json configuration file.

### Get Started

Since there's no registration required for open-source projects,
you can just dive in by following: https://ci.testling.com/guide/quick_start


### Result!

https://ci.testling.com/nelsonic/learn-testling

Sadly Internet Explorer 6, 7 & 8 does not pass...

https://twitter.com/nelsonic/statuses/465651619070500864



> ***Next***: Investigate Tape https://ci.testling.com/guide/tape

> [ ] Fix build!


### Background Info

[Tesling][] is Made by Peteris Krumins [@pkrumins](https://github.com/pkrumins)
and James Halliday [@substack](https://github.com/substack) who you may
know from Nodeschool's [Stream Adventure][]


### Hurdles

Got Stuck adding WebHook URL ... <br />
Sent tweet to Substack: https://twitter.com/nelsonic/statuses/465249089605881857 <br />
Submitted issue to: https://github.com/substack/testling/issues/81

#### Responsive Founders

Got Stuck adding a WebHook URL ... <br />
Sent tweet to Substack: https://twitter.com/nelsonic/statuses/465249089605881857 <br />
and submitted an issue to: https://github.com/substack/testling/issues/81

Its always a good sign when (busy) founders answer queries:

![Twitter Reply from Substack](http://i.imgur.com/9ynfYGf.png)

See: https://twitter.com/substack/statuses/465599077342654464

[Tesling]: https://ci.testling.com/
[Browserling]: https://browserling.com
[Stream Adventure]: http://nodeschool.io/#stream-adventure

Got Stuck adding WebHook URL ... <br />
Sent tweet to Substack: https://twitter.com/nelsonic/statuses/465249089605881857 <br />
Submitted issue to: https://github.com/substack/testling/issues/81
