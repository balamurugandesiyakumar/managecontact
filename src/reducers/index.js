const data = [
    {
        "id": 1,
        "real_name": "Egon",
        "mailid": "egon@gmail.com",
        "phone": "8797998889",
        "company": "Amazon Traders",
        "address": "No 18, Main Street, Canada"
    },
    {
        "id": 2,
        "real_name": "Spengler",
        "mailid": "spengler@gmail.com",
        "phone": "8797990889",
        "company": "Amazon Traders",
        "address": "No 18, Main Street, Canada"
    },
    {
        "id": 3,
        "real_name": "Thomas",
        "mailid": "thomas@gmail.com",
        "phone": "8797990089",
        "company": "Amazon Traders",
        "address": "No 18, Main Street, Canada"
    }
]

const postReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((posts) => posts.id !== action.id);
        case 'UPDATE':
            return state.map((posts) => {
                if (posts.id === action.id) {
                    return {
                        ...posts,
                        real_name: action.data.real_name,
                        mailid: action.data.mailid,
                        phone: action.data.phone,
                        company: action.data.company,
                        address: action.data.address
                    }
                } else return posts;
            })
        default:
            return state;
    }
}
export default postReducer;