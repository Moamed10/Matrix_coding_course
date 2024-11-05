const user_data = [
    {
        name: "Michael Choi",
        createdAt: "23-01-2013",
        message: "This is my message. This is my message. This is my message. This is my message."
    },
    {
        name: "Sarah Lee",
        createdAt: "15-06-2019",
        message: "Hello world! This is Sarah’s message to everyone out there."
    },
    {
        name: "David Kim",
        createdAt: "05-09-2020",
        message: "Greetings! Hope everyone is doing well. This is David’s update."
    },
    {
        name: "Emily Wong",
        createdAt: "30-11-2018",
        message: "Hi all! Excited to share my thoughts with the group today."
    },
    {
        name: "Alex Johnson",
        createdAt: "01-04-2021",
        message: "A quick update from me! Looking forward to connecting."
    },
    {
        name: "Jessica Smith",
        createdAt: "12-08-2022",
        message: "Just checking in! Happy to be part of this discussion."
    }
];



user_data.sort((a, b) => {
    const dateA = new Date(a.createdAt.split('-').reverse().join('-'));
    const dateB = new Date (b.createdAt.split('-').reverse().join('-'));
    return dateB - dateA; 
});
module.exports = user_data

// const now = new Date 

// console.log(now)