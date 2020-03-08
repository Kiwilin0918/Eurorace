document.addEventListener(
  "DOMContentLoaded", () => {
//   //   new Mmenu( "#menu", {
//   //     "navbars": [
//   //        {
//   //           "position": "top",
//   //           "content": [
//   //             "close",
//   //           ],
//   //        }
//   //     ]
//   //  });
  new Mmenu( "#menu", {
    // content:["close"],
    "extensions": [
      "theme-white",
      // "position-front",
      "pagedim-black",
  ]
  });
  }
  );
// document.addEventListener(
//   "DOMContentLoaded", () => {
//       new Mmenu( "#menu" );
//   }
// );

// 原始版
// new Mmenu( document.querySelector( '#menu' ));

// document.addEventListener( 'click', function( evnt ) {
//   var anchor = evnt.target.closest( 'a[href^="#/"]' );
//   if ( anchor ) {
//     alert('Thank you for clicking, but that\'s a demo link.');
//     evnt.preventDefault();
//   }
// });

// copy
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});