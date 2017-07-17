# Disposable Email Reader
A simple wrapper for some disposable email APIs. At the moment it supports:
* [Harakirimail.com](https://harakirimail.com)
* [MailDrop.cc](https://www.maildrop.cc)
* [Mailinator.com](http://www.mailinator.com)

## Installation
This module uses NPM and can be added to your project running this command
>npm install disposable-email-reader --save

## How to use it
This is an example of its usage:
```js
//
// Loading library.
var reader = require('disposable-email-reader');
//
// Creating a manager for a specific email.
var myInbox = new reader.HarakiriMail('mytemporaryemail');
//
// Listing all emais.
myInbox.list().subscribe(listResponse => {
  //
  // Walking over each email.
  let list = listResponse.list();
  for (let entryKey in list) {
    let entry = list[entryKey];
    //
    // Retrieving an email.
    myInbox.email(entry.id).subscribe(emailResponse => {
      console.log("\nFrom: %s\nSubject: %s\n", emailResponse.from(), emailResponse.subject());
      console.log("%s\n", emailResponse.body());
    });
  }
});
```

If you want to use something else instead of _HarakiriMail_, try one of these:
*  _MailDrop_:
```js
var myInbox = new reader.MailDrop('mytemporaryemail');
```
*  _Mailinator_:
```js
var myInbox = new reader.Mailinator('mytemporaryemail');
```

### Paging
If you want to get only 5 emails, but starting from the third page, you can do
something like this:
```js
myInbox.list(10, 5).subscribe(list => {
    // ... my code
});
```

__Note__: These options may not be supported by certain services.

## Licence
MIT &copy; [Alejandro Dario Simi](http://daemonraco.com)
