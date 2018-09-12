"use strict";
//steam://openurl/


browser.runtime.onMessage.addListener(request => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  //alert("steam:\/\/openurl\/"+window.location.href);
  window.location.href = "steam:\/\/openurl\/"+window.location.href;
  return Promise.resolve({response: "Hi from content script"});
});
