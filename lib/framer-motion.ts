// export const tilesContainerVariants = {
//     visible: {
//         opacity: 1,
//         transition: {
//             when: "beforeChildren",
//             staggerChildren: 0.3,
//         },
//     },
//     hidden: {
//         opacity: 0,
//         transition: {
//             when: "afterChildren",
//             staggerChildren: 0.3,
//         },
//     },
// }
// export const tilesVariants = {
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5
//         }
//     },
//     // hidden: {
//     //     opacity: 0,
//     //     y: 100,
//     // },
//     hidden: (i:number) => ({
//         opacity: 1,
//         y : [0, 10, 1000],
//         rotateX: ["0deg" ,"80deg", "0deg"],
//         transition: {
//             duration:  Math.random() * i,
//         }
//     })
// }

export const tilesContainerVariants = {
    hidden: {
        opacity: 0.
    },
    visible: {
        opacity: 1,
    },
    go: {
        opacity: 1,
    }
}

export const tilesVariants = {
    hidden: {
        opacity: 0,
        y: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
    go: (i) => {
        return {
            opacity: [1, 1, 0],
            transform: [`perspective(500px) rotateX(0deg) translate3d(0px, 0px, 0px)`, `perspective(500px) rotateX(-60deg) translate3d(0px, 10px, 0px)`, `perspective(500px) rotateX(-60deg) translate3d(0px, 400px, 500px)`],
            transition: {
                duration: 1,
                delay: (Math.random() * 100) / 100
            }
        }
    }
}