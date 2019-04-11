const webpush = require('web-push');

const publicKey = 'BJoKqppJVMM4zWvL_WNx2RptNHyQ9Q7xoDN92DNgUCwKYBWZBZyhXb2-9aJobXPNp88BsuMr1w9fhIUVBH-vzcw';
const privateKey = '8cq8aPq1KKhtsMvB9BnUPlyF35GQhfm-LF8aqB5-KLQ'
webpush.setVapidDetails(
    'mailto:reblog@reblog.app',
    publicKey,
    privateKey
)


const userService = require('./user.service');


async function send(userId, notification) {
        // // test push msg:
        // const notification = JSON.stringify({
        //     title: `WELCOME BACK`, payload: {
        //         body: 'Check what you have missed',
        //         icon: `http://res.cloudinary.com/dcv2jyqvl/image/upload/v1553768401/user_imgs/ocf9hizf2fmpea9laie4.jpg`,
        //     }
        // });

        console.log(notification)
        const subscriber = await userService.findSubscriber(userId);
        if (subscriber) {
            if (!subscriber.pushSub) return;
            webpush.sendNotification(JSON.parse(subscriber.pushSub), JSON.stringify(notification))
                .then(something => {
                    console.log('WORKED?')
                })
                .catch(err => console.log(err));
        } else {
            console.log('Subscriber not found');
        }

}

// PASTE THIS IN SERVICE WORKER:
// // EVENT LISTENER:
// self.addEventListener('push', function(e) {
//     console.log('Hi pushhhhh');
//     const data = e.data.json();
//     self.registration.showNotification(data.title, data.payload);
//   });
  
//   self.addEventListener('notificationclick', function(e) {
//     var notification = e.notification;
//     var action = e.action;
  
//     if (action === 'close') {
//       notification.close();
//     } else if (action === 'go') {
//       console.log(e.data, notification);
//       clients.openWindow(`${notification.data.url}`);
//       notification.close();
//     }
//   });


module.exports = {
    send,
}