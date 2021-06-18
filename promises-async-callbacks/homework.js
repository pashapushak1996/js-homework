//My working day

//Callbacks
// const myWorkingDay = (hour, cb) => {
//     if (hour < 8) {
//         cb(null, `Wake up champion`);
//         return;
//     }
//     cb(`Looser sleep on, you loss work`, null);
// };
//
// const meditation = (mood, cb) => {
//     setTimeout(() => {
//         if (mood === 'good') {
//             cb(null, `is good`);
//             return;
//         }
//         cb(`is bad and your mood is ${ mood }`, null);
//     }, Math.random() * 4000);
// }
//
// const morningExercise = (physicalForm, cb) => {
//     setTimeout(() => {
//         if (physicalForm) {
//             cb(null, ['Overhead stretch', 'Knee to chest stretch', 'Hamstring stretch', 'Knees to chest', 'Knee rolls']);
//             return;
//         }
//         cb(`You are looser`, null);
//     }, Math.random() * 3000);
// }
//
// const coldShower = (water, cb) => {
//     setTimeout(() => {
//         if (water) {
//             cb(null, `water is cold`);
//             return;
//         }
//         cb(`No water`, null);
//     }, Math.random() * 3000)
// };
//
// const breakfast = (eggs, cb) => {
//     setTimeout(() => {
//         if (eggs > 1) {
//             cb(null, `You eat today ${ eggs } eggs`);
//             return;
//         }
//         cb(`Today go hungry`, null);
//     }, Math.random() * 3000)
// };
//
// const goWork = (hour, cb) => {
//     setTimeout(() => {
//         if (hour > 10) {
//             cb(`You are late for work`, null);
//             return;
//         }
//         cb(null, `You are champion`);
//     }, Math.random() * 3000)
// }
// myWorkingDay(5, (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
//     meditation(`good`, (err, data) => {
//         if (err) {
//             console.error(`Meditation ${ err }`);
//             return;
//         }
//         console.log(`Today your meditation ${ data }`);
//         morningExercise(true, (err, array) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             array.forEach((el) => {
//                 console.log(`Today my exercises includes ${ el }`);
//             });
//             coldShower(true, (err, data) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(`today ${ data }`);
//                 breakfast(4, (err, data) => {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//                     goWork(9,(err,data)=>{
//                         if (err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(data);
//                     })
//                 })
//             })
//         });
//     });
// });

//Promises
const myWorkingDay = (hour) => {
    return new Promise((resolve, reject) => {
        if (hour > 8) {
            reject(`Looser`);
        }
        resolve(`Wake up champion`);
    });
};

const meditation = (mood) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mood) {
                resolve(`Meditation is good`);
            }
            reject(`Meditation is bad`);
        }, 1500);

    });
}

const morningExercise = (physicalForm) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (physicalForm) {
                resolve(`You are champion`);
            }
            reject(`You are looser`);
        }));
}

const coldShower = (water) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (water) {
            resolve(`Water is cold`);
        }
        reject(`Noo water`);
    }));
};

const breakfast = (eggs) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (eggs) {
                resolve(eggs);
            }
            reject(`No eggs`);
        }, 2500));
};

myWorkingDay(5)
    .then(value => {
        console.log(value);
        return meditation(true);
    })
    .then(value => {
        console.log(value);
        return morningExercise(true);
    })
    .then(value => {
        console.log(value);
        return coldShower(true);
    });


///Async await

async function myDay() {
    try {
        const wakeUp = await myWorkingDay(4);
        console.log(wakeUp);
        const med = await meditation(true);
        console.log(med);
    } catch (e) {
        console.log(e);
    }
}

myDay();
